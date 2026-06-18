#!/usr/bin/env node
/**
 * Strip generated `content` from every topic in the per-subject files under
 * src/data/subjects (sets content to ""). The website serves note content from
 * public/notes via /api/notes, so the app repo only needs subject STRUCTURE.
 * This keeps the app repo small and avoids bloating the deployment bundle.
 *
 * Run from the repo root you want to strip:  node scripts/strip-content.mjs
 */
import fs from "fs";
import path from "path";

const SUBJECTS_DIR = path.join(process.cwd(), "src", "data", "subjects");

let files = 0;
let cleared = 0;

function processFile(fp) {
  const subj = JSON.parse(fs.readFileSync(fp, "utf8"));
  let changed = false;
  for (const mod of subj?.modules || []) {
    for (const topic of mod?.topics || []) {
      if (topic.content && topic.content.length > 0) {
        topic.content = "";
        cleared++;
        changed = true;
      }
    }
  }
  if (changed) fs.writeFileSync(fp, JSON.stringify(subj, null, 2) + "\n", "utf8");
  files++;
}

for (const entry of fs.readdirSync(SUBJECTS_DIR, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const dir = path.join(SUBJECTS_DIR, entry.name);
  for (const f of fs.readdirSync(dir)) {
    if (f.endsWith(".json")) processFile(path.join(dir, f));
  }
}

console.log(`Processed ${files} files, cleared content on ${cleared} topics.`);
