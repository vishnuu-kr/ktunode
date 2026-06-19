import { execSync } from "child_process";
import path from "path";
import fs from "fs";

const SEMS = [3, 4, 5];
const CODES = ["ce", "cs", "ec", "ee", "me"];
const DIR = path.join(process.cwd(), "src", "data", "subjects");
const MAXB = 256 * 1024 * 1024;

function needs(t) {
  const c = t?.content || "";
  if (!c) return true;
  if (c.includes("Coming Soon")) return true;
  if (c.length < 500) return true;
  return false;
}
function show(ref, rel) {
  try {
    return execSync(`git show ${ref}:${rel}`, { maxBuffer: MAXB, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
  } catch {
    return null;
  }
}
function pendingIn(subj) {
  let tot = 0, pend = 0;
  for (const m of subj?.modules || []) for (const t of m?.topics || []) { tot++; if (needs(t)) pend++; }
  return { tot, pend };
}

for (const sem of SEMS) {
  const chunkRefs = execSync("git branch -r", { encoding: "utf8" })
    .split("\n").map((l) => l.trim())
    .filter((l) => new RegExp(`origin/auto-notes-sem-${sem}-chunk-\\d+$`).test(l));

  let total = 0, pending = 0;
  for (const code of CODES) {
    const folder = path.join(DIR, `${code}-${sem}`);
    if (!fs.existsSync(folder)) continue;
    for (const fname of fs.readdirSync(folder)) {
      if (!fname.endsWith(".json")) continue;
      const rel = `src/data/subjects/${code}-${sem}/${fname}`;
      // pick the richest version across chunk branches (the owning chunk filled it)
      let best = null, bestFilled = -1;
      for (const ref of chunkRefs) {
        const raw = show(ref, rel);
        if (!raw) continue;
        let subj; try { subj = JSON.parse(raw); } catch { continue; }
        const { tot, pend } = pendingIn(subj);
        const filled = tot - pend;
        if (filled > bestFilled) { bestFilled = filled; best = { tot, pend }; }
      }
      if (best) { total += best.tot; pending += best.pend; }
    }
  }
  const done = total ? (((total - pending) / total) * 100).toFixed(1) : "0";
  console.log(`sem ${sem}: total=${total} pending=${pending} done=${done}%`);
}
