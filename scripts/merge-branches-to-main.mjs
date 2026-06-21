/**
 * Merge generated content from the auto-notes-sem-{N}-chunk-* branches into the
 * working tree (main) at the per-subject / per-topic level. For each topic we
 * keep the LONGEST content across main + every chunk branch, so nothing regresses.
 *
 * Run in the extractor repo:  node ../scripts/merge-branches-to-main.mjs 3 4 5
 */
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const SEMS = (process.argv.slice(2).length ? process.argv.slice(2) : ["3", "4", "5"]).map(String);
const CODES = ["ce", "cs", "ec", "ee", "me"];
const DIR = path.join(process.cwd(), "src", "data", "subjects");
const MAXB = 256 * 1024 * 1024;

function show(ref, rel) {
  try {
    return execSync(`git show ${ref}:${rel}`, { maxBuffer: MAXB, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
  } catch {
    return null;
  }
}
const tkey = (mt, tt) => `${mt}||${tt}`;

let filesUpdated = 0;
let topicsImproved = 0;

for (const sem of SEMS) {
  const refs = execSync("git branch -r", { encoding: "utf8" })
    .split("\n").map((l) => l.trim())
    .filter((l) => new RegExp(`origin/auto-notes-sem-${sem}-chunk-\\d+$`).test(l));
  if (refs.length === 0) { console.log(`sem ${sem}: no branches`); continue; }

  // Pre-calculate which files are different in each branch to avoid useless git show calls
  const branchDiffs = new Map();
  for (const ref of refs) {
    try {
      const diffFiles = execSync(`git diff --name-only HEAD..${ref}`, { maxBuffer: MAXB, encoding: "utf8" })
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);
      branchDiffs.set(ref, new Set(diffFiles));
    } catch (e) {
      console.warn(`Warning: Could not get diff for ${ref}: ${e.message}`);
      // Fallback: assume all files might be changed
      branchDiffs.set(ref, null);
    }
  }

  for (const code of CODES) {
    const folder = path.join(DIR, `${code}-${sem}`);
    if (!fs.existsSync(folder)) continue;
    for (const fname of fs.readdirSync(folder)) {
      if (!fname.endsWith(".json")) continue;
      const fpath = path.join(folder, fname);
      const rel = `src/data/subjects/${code}-${sem}/${fname}`;
      
      // Check if any branch modified this file. If not, we don't need to check any branch.
      let anyBranchChanged = false;
      for (const ref of refs) {
        const diffSet = branchDiffs.get(ref);
        if (diffSet === null || diffSet.has(rel)) {
          anyBranchChanged = true;
          break;
        }
      }
      if (!anyBranchChanged) continue;

      const base = JSON.parse(fs.readFileSync(fpath, "utf8"));

      // best content per topic from all branch versions
      const best = new Map();
      for (const ref of refs) {
        const diffSet = branchDiffs.get(ref);
        if (diffSet !== null && !diffSet.has(rel)) continue;

        const raw = show(ref, rel);
        if (!raw) continue;
        let v; try { v = JSON.parse(raw); } catch { continue; }
        for (const m of v?.modules || []) for (const t of m?.topics || []) {
          const c = t?.content || "";
          if (!c) continue;
          const k = tkey(m?.title || "", t?.title || "");
          const cur = best.get(k);
          if (!cur || c.length > cur.length) best.set(k, c);
        }
      }

      let changed = false;
      for (const m of base?.modules || []) for (const t of m?.topics || []) {
        const cand = best.get(tkey(m?.title || "", t?.title || ""));
        const cur = t.content || "";
        if (cand && cand.length > cur.length) { t.content = cand; changed = true; topicsImproved++; }
      }
      if (changed) { fs.writeFileSync(fpath, JSON.stringify(base, null, 2) + "\n", "utf8"); filesUpdated++; }
    }
  }
  console.log(`sem ${sem}: merged from ${refs.length} branches`);
}

console.log(`\nDone. Updated ${filesUpdated} files, improved ${topicsImproved} topics.`);
