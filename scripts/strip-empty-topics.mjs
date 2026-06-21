#!/usr/bin/env node
/**
 * strip-empty-topics.mjs
 * 
 * Removes topics with truly empty content ("" or missing) from all subject JSON files.
 * This ensures the UI only shows topics that have actual generated content.
 * 
 * Also cleans up "Module Module X" → "Module X" title duplication.
 */
import fs from "fs";
import path from "path";

const DIR = path.join(process.cwd(), "src", "data", "subjects");

let totalTopicsRemoved = 0;
let totalEmptyModulesRemoved = 0;
let filesModified = 0;
let titlesCleaned = 0;

for (const entry of fs.readdirSync(DIR, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const folder = path.join(DIR, entry.name);
  
  for (const f of fs.readdirSync(folder)) {
    if (!f.endsWith(".json")) continue;
    const fpath = path.join(folder, f);
    const subj = JSON.parse(fs.readFileSync(fpath, "utf8"));
    let changed = false;

    for (const mod of subj?.modules || []) {
      // Fix "Module Module 1" → "Module 1" duplication
      if (mod.title && /^Module Module \d+$/i.test(mod.title)) {
        mod.title = mod.title.replace(/^Module /, "");
        changed = true;
        titlesCleaned++;
      }
      // Fix module id "mModule 1" → "m1"
      if (mod.id && /^mModule \d+$/i.test(mod.id)) {
        const num = mod.id.match(/\d+/)[0];
        mod.id = `m${num}`;
        changed = true;
      }

      // Filter out empty topics
      if (mod.topics && Array.isArray(mod.topics)) {
        const before = mod.topics.length;
        mod.topics = mod.topics.filter(t => {
          const c = t?.content || "";
          return c.trim().length > 0;
        });
        const removed = before - mod.topics.length;
        if (removed > 0) {
          totalTopicsRemoved += removed;
          changed = true;
        }
      }
    }

    // Remove modules that now have zero topics
    if (subj.modules && Array.isArray(subj.modules)) {
      const beforeMods = subj.modules.length;
      subj.modules = subj.modules.filter(m => m.topics && m.topics.length > 0);
      const removedMods = beforeMods - subj.modules.length;
      if (removedMods > 0) {
        totalEmptyModulesRemoved += removedMods;
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(fpath, JSON.stringify(subj, null, 2) + "\n", "utf8");
      filesModified++;
    }
  }
}

console.log("=== STRIP EMPTY TOPICS COMPLETE ===");
console.log(`Topics removed:         ${totalTopicsRemoved}`);
console.log(`Empty modules removed:  ${totalEmptyModulesRemoved}`);
console.log(`Module titles cleaned:  ${titlesCleaned}`);
console.log(`Files modified:         ${filesModified}`);
