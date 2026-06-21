import fs from "fs";
import path from "path";

const EXTRACTOR_SUBJECTS_DIR = "C:/Users/Windows 10/Downloads/ktu-node-extractor/src/data/subjects";
const FRONTEND_SUBJECTS_DIR = "./src/data/subjects";

// 1. Build a map of subjectCode -> filePath in the extractor repo
// This uses very little memory because we only store the paths (strings)
const codeToFilePath = new Map();

function scanExtractorForPaths(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanExtractorForPaths(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      try {
        // We only read and parse the file to extract the code, then let GC reclaim the object
        const content = fs.readFileSync(fullPath, "utf8");
        const data = JSON.parse(content);
        const subjectCode = data.code;
        if (subjectCode) {
          const upperCode = subjectCode.toUpperCase();
          // Store the path. If we see the same code multiple times, keep one with longer content or any
          codeToFilePath.set(upperCode, fullPath);
        }
      } catch (err) {
        console.error(`Error scanning path ${fullPath}: ${err.message}`);
      }
    }
  }
}

console.log("Scanning extractor repo for subject file paths...");
scanExtractorForPaths(EXTRACTOR_SUBJECTS_DIR);
console.log(`Found file paths for ${codeToFilePath.size} unique subject codes.`);

// 2. Populate frontend subjects file by file, reading extractor files on-demand
let updatedTopics = 0;
let updatedFiles = 0;

function populateDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      populateDirectory(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      try {
        const subject = JSON.parse(fs.readFileSync(fullPath, "utf8"));
        const subjectCode = subject.code;
        if (!subjectCode) continue;

        const extractorPath = codeToFilePath.get(subjectCode.toUpperCase());
        if (!extractorPath) continue;

        // Read and parse the extractor file on-demand
        const extractorData = JSON.parse(fs.readFileSync(extractorPath, "utf8"));
        
        // Build a temporary map for this subject's topics
        const topicContentMap = new Map();
        for (const mod of extractorData.modules || []) {
          for (const topic of mod.topics || []) {
            if (topic.content && topic.content.trim()) {
              const k = topic.title.toLowerCase().replace(/[^a-z0-9]/g, "");
              topicContentMap.set(k, {
                content: topic.content,
                pyqs: topic.pyqs || []
              });
            }
          }
        }

        if (topicContentMap.size === 0) continue;

        let changed = false;
        for (const mod of subject.modules || []) {
          for (const topic of mod.topics || []) {
            const k = topic.title.toLowerCase().replace(/[^a-z0-9]/g, "");
            const match = topicContentMap.get(k);
            if (match) {
              const cur = topic.content || "";
              if (match.content.length > cur.length) {
                topic.content = match.content;
                topic.pyqs = match.pyqs;
                changed = true;
                updatedTopics++;
              }
            }
          }
        }

        if (changed) {
          fs.writeFileSync(fullPath, JSON.stringify(subject, null, 2) + "\n", "utf8");
          updatedFiles++;
        }
      } catch (err) {
        console.error(`Error updating ${fullPath}: ${err.message}`);
      }
    }
  }
}

console.log("Populating frontend subjects with merged notes...");
populateDirectory(FRONTEND_SUBJECTS_DIR);
console.log(`Done. Updated ${updatedTopics} topics across ${updatedFiles} files.`);
