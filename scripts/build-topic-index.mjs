#!/usr/bin/env node
/**
 * build-topic-index.mjs
 * 
 * Pre-builds a topic metadata index from all subject JSONs so the
 * api/notes route doesn't need to scan 13,000+ files at runtime.
 * 
 * Output: src/data/topic-index.json
 * Run:    node scripts/build-topic-index.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const subjectsDir = path.join(root, "src", "data", "subjects");
const outputPath = path.join(root, "src", "data", "topic-index.json");

const branchMap = {
  "aeronautical-engineering": "Aeronautical Engineering",
  "agriculture-engineering": "Agriculture Engineering",
  "applied-electronics-and-instrumentation": "Applied Electronics and Instrumentation",
  "artificial-intelligence": "Artificial Intelligence",
  "artificial-intelligence-and-machine-learning": "Artificial Intelligence & Machine Learning",
  "artificial-intelligence-and-data-science": "Artificial Intelligence and Data Science",
  "automobile-engineering": "Automobile Engineering",
  "biomedical-and-robotic-engineering": "Biomedical & Robotic Engineering",
  "biomedical-engineering": "Biomedical Engineering",
  "biotechnology-engineering": "Biotechnology Engineering",
  "biotechnology-and-biochemical-engineering": "Biotechnology and Biochemical Engineering",
  "chemical-engineering": "Chemical Engineering",
  "civil-engineering": "Civil Engineering",
  "civil-and-environmental-engineering": "Civil and Environmental Engineering",
  "computer-science-and-business-systems": "Computer Science and Business Systems",
  "computer-science-and-design": "Computer Science and Design",
  "computer-science-and-engineering": "Computer Science and Engineering",
  "computer-science-and-engineering-ai-and-ml": "Computer Science and Engineering (AI & ML)",
  "computer-science-and-engineering-artificial-intelligence": "Computer Science and Engineering (Artificial Intelligence)",
  "computer-science-and-engineering-cyber-security": "Computer Science and Engineering (Cyber Security)",
  "computer-science-and-engineering-data-science": "Computer Science and Engineering (Data Science)",
  "computer-science-and-engineering-internet-of-things-and-cyber-security-including-blockchain-technology": "Computer Science and Engineering (Internet of Things and Cyber Security including Blockchain Technology)",
  "computer-science-and-engineering-iot": "Computer Science and Engineering (IoT)",
  "computer-science-and-engineering-and-business-systems": "Computer Science and Engineering and Business Systems",
  "cyber-physical-systems": "Cyber Physical Systems",
  "electrical-and-computer-engineering": "Electrical and Computer Engineering",
  "electrical-and-electronics-engineering": "Electrical and Electronics Engineering",
  "electronics-and-biomedical-engineering": "Electronics & Biomedical Engineering",
  "electronics-and-communication-advanced-communication-technology": "Electronics & Communication (Advanced Communication Technology)",
  "electronics-and-communication-engineering": "Electronics & Communication Engineering",
  "electronics-and-computer-engineering": "Electronics & Computer Engineering",
  "electronics-engineering-vlsi-design-and-technology": "Electronics Engineering (VLSI Design and Technology)",
  "electronics-and-instrumentation": "Electronics and Instrumentation",
  "food-technology": "Food Technology",
  "industrial-engineering": "Industrial Engineering",
  "information-technology": "Information Technology",
  "instrumentation-and-control": "Instrumentation and Control",
  "mechanical-automobile-engineering": "Mechanical (Automobile) Engineering",
  "mechanical-engineering": "Mechanical Engineering",
  "mechatronics-engineering": "Mechatronics Engineering",
  "naval-architecture-and-shipbuilding-engineering": "Naval Architecture & Shipbuilding Engineering",
  "polymer-engineering": "Polymer Engineering",
  "production-engineering": "Production Engineering",
  "robotics-and-artificial-intelligence": "Robotics and Artificial Intelligence",
  "robotics-and-automation": "Robotics and Automation",
  "safety-and-fire-engineering": "Safety & Fire Engineering",
};

function main() {
  const index = {};
  let topicCount = 0;
  let cdnMappedCount = 0;

  const topicMapPath = path.join(root, "src", "data", "topic-path-map.json");
  const publicNotesDir = path.join(root, "public", "data", "notes");
  let topicPathMap = {};
  if (fs.existsSync(topicMapPath)) {
    try {
      topicPathMap = JSON.parse(fs.readFileSync(topicMapPath, "utf8"));
    } catch (e) {
      console.error("Failed to load topic-path-map.json:", e.message);
    }
  }

  // Cache to store ONLY the topic titles that have content for each subject,
  // to avoid keeping huge markdown content strings in memory.
  const notesCache = new Map();
  function getNotesTopics(subjectCode) {
    const code = subjectCode.toUpperCase();
    if (notesCache.has(code)) {
      return notesCache.get(code);
    }
    const notesFilePath = path.join(publicNotesDir, `${code}.json`);
    const topicsWithContent = new Set();
    if (fs.existsSync(notesFilePath)) {
      try {
        const raw = JSON.parse(fs.readFileSync(notesFilePath, "utf8"));
        if (raw && raw.topics) {
          for (const [title, topic] of Object.entries(raw.topics)) {
            if (topic && typeof topic.content === "string" && topic.content.trim().length > 0) {
              topicsWithContent.add(title);
            }
          }
        }
      } catch (_e) {
        // Ignore
      }
    }
    notesCache.set(code, topicsWithContent);
    return topicsWithContent;
  }

  const branchDirs = fs.readdirSync(subjectsDir).filter((d) =>
    fs.statSync(path.join(subjectsDir, d)).isDirectory()
  );

  for (const dir of branchDirs) {
    // dir format: "branch-name-sem" e.g. "computer-science-and-engineering-1"
    const lastDash = dir.lastIndexOf("-");
    if (lastDash === -1) continue;
    const branchSlug = dir.substring(0, lastDash);
    const sem = dir.substring(lastDash + 1);
    if (!/^[1-8]$/.test(sem)) continue;

    const branchDisplayName = branchMap[branchSlug] || branchSlug;
    const folderPath = path.join(subjectsDir, dir);
    const files = fs.readdirSync(folderPath).filter((f) => f.endsWith(".json"));

    for (const file of files) {
      try {
        const subjectData = JSON.parse(
          fs.readFileSync(path.join(folderPath, file), "utf8")
        );
        const subjectCode = (file.match(/_([A-Z0-9]+)\.json$/i) || [])[1] || "";
        const subjectName = subjectData.name || subjectCode.toUpperCase();
        const subjectCodeDisplay = subjectData.code || subjectCode.toUpperCase();

        const topicsWithContent = getNotesTopics(subjectCode);

        for (const mod of subjectData.modules || []) {
          const modTitle =
            mod.title || (mod.id || "").replace(/^m/, "Module ");
          for (const topic of mod.topics || []) {
            if (!topic.id) continue;

            // Check if there is note content in the public notes file
            let hasCdnContent = false;
            if (topicsWithContent) {
              const normalizedTitle = (topic.title || "").toLowerCase().replace(/[^a-z0-9]/g, "");
              if (topicsWithContent.has(normalizedTitle)) {
                hasCdnContent = true;
              }
            }

            const hasEmbedded = typeof topic.content === "string" && topic.content.trim().length > 0;
            const hc = (hasEmbedded || hasCdnContent) ? 1 : 0;

            index[topic.id] = {
              t: topic.title || "",
              sc: subjectCode.toUpperCase(),
              sn: subjectName,
              scd: subjectCodeDisplay,
              mt: modTitle,
              b: branchSlug,
              bd: branchDisplayName,
              s: sem,
              hc: hc,
            };
            topicCount++;

            // Dynamically update topicPathMap for CDN notes
            if (hasCdnContent) {
              const currentPath = topicPathMap[topic.id];
              if (!currentPath || currentPath === "cdn") {
                topicPathMap[topic.id] = "cdn";
                cdnMappedCount++;
              }
            } else if (topicPathMap[topic.id] === "cdn") {
              delete topicPathMap[topic.id];
            }
          }
        }
      } catch (err) {
        console.error(`Error processing ${file}:`, err.message);
      }
    }
  }

  // Write files
  fs.writeFileSync(outputPath, JSON.stringify(index));
  fs.writeFileSync(topicMapPath, JSON.stringify(topicPathMap, null, 2) + "\n", "utf8");

  const sizeKB = Math.round(fs.statSync(outputPath).size / 1024);
  console.log(`✓ Built topic index: ${topicCount} topics, ${sizeKB} KB → ${outputPath}`);
  console.log(`✓ Updated topic path map: ${cdnMappedCount} topics mapped to CDN → ${topicMapPath}`);
}

main();
