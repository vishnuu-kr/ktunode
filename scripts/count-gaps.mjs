import fs from "fs";
import path from "path";

const INDEX_PATH = path.join(process.cwd(), "src", "data", "topic-index.json");
const index = JSON.parse(fs.readFileSync(INDEX_PATH, "utf8"));

const perSem = {};
let totalTopics = 0;
let totalPending = 0;

for (const topic of Object.values(index)) {
  const sem = String(topic?.s ?? "");
  if (!/^[1-8]$/.test(sem)) continue;
  perSem[sem] ||= { topics: 0, pending: 0 };
  perSem[sem].topics++;
  totalTopics++;
  if (topic?.hc !== 1) {
    perSem[sem].pending++;
    totalPending++;
  }
}

console.log("sem | total | pending | done%");
for (const s of Object.keys(perSem).sort()) {
  const { topics, pending } = perSem[s];
  const done = (((topics - pending) / topics) * 100).toFixed(1);
  console.log(`${s}   | ${topics} | ${pending} | ${done}%`);
}
console.log(`\nTOTAL topics=${totalTopics} pending=${totalPending} done=${(((totalTopics-totalPending)/totalTopics)*100).toFixed(1)}%`);
