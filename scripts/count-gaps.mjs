import fs from "fs";
import path from "path";

const DIR = path.join(process.cwd(), "src", "data", "subjects");

// Mirror of generate_premium_notes_v2.py topic_needs_generation()
function needs(topic) {
  const c = topic?.content || "";
  if (!c) return true;
  if (c.includes("Coming Soon")) return true;
  if (c.length < 500) return true;
  return false;
}

const perSem = {};
let totalTopics = 0;
let totalPending = 0;

for (const entry of fs.readdirSync(DIR, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const m = entry.name.match(/-(\d)$/);
  if (!m) continue;
  const sem = m[1];
  perSem[sem] ||= { topics: 0, pending: 0 };
  const folder = path.join(DIR, entry.name);
  for (const f of fs.readdirSync(folder)) {
    if (!f.endsWith(".json")) continue;
    const subj = JSON.parse(fs.readFileSync(path.join(folder, f), "utf8"));
    for (const mod of subj?.modules || []) {
      for (const t of mod?.topics || []) {
        perSem[sem].topics++;
        totalTopics++;
        if (needs(t)) {
          perSem[sem].pending++;
          totalPending++;
        }
      }
    }
  }
}

console.log("sem | total | pending | done%");
for (const s of Object.keys(perSem).sort()) {
  const { topics, pending } = perSem[s];
  const done = (((topics - pending) / topics) * 100).toFixed(1);
  console.log(`${s}   | ${topics} | ${pending} | ${done}%`);
}
console.log(`\nTOTAL topics=${totalTopics} pending=${totalPending} done=${(((totalTopics-totalPending)/totalTopics)*100).toFixed(1)}%`);
