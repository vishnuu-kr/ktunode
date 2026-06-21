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

        for (const mod of subjectData.modules || []) {
          const modTitle =
            mod.title || (mod.id || "").replace(/^m/, "Module ");
          for (const topic of mod.topics || []) {
            if (!topic.id) continue;
            index[topic.id] = {
              t: topic.title || "",
              sc: subjectCode.toUpperCase(),
              sn: subjectName,
              scd: subjectCodeDisplay,
              mt: modTitle,
              b: branchSlug,
              bd: branchDisplayName,
              s: sem,
              // Flag: does this topic have embedded content?
              hc: typeof topic.content === "string" && topic.content.trim().length > 0 ? 1 : 0,
            };
            topicCount++;
          }
        }
      } catch (err) {
        console.error(`Error processing ${file}:`, err.message);
      }
    }
  }

  fs.writeFileSync(outputPath, JSON.stringify(index));
  const sizeKB = Math.round(fs.statSync(outputPath).size / 1024);
  console.log(`✓ Built topic index: ${topicCount} topics, ${sizeKB} KB → ${outputPath}`);
}

main();
