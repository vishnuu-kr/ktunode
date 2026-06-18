#!/usr/bin/env node
/**
 * Consolidate generated note content from the legacy `auto-notes-*` branches
 * (old flat `{branch}-{sem}.json` files) into the new per-subject folder layout
 * on the current working tree.
 *
 * Strategy (per semester, to bound memory):
 *   1. Read every flat file from every auto-notes branch for that semester via
 *      `git show <ref>:src/data/subjects/<file>`.
 *   2. Build a content map keyed by `code||moduleTitle||topicTitle`, keeping the
 *      LONGEST content seen (the most complete generation).
 *   3. Fill that content into the structure-only per-subject files in the
 *      `{branch}-{sem}/` folders, only when the candidate is longer than what's
 *      already there.
 *
 * Run from inside the repo whose branches/folders you want to consolidate:
 *   node ../scripts/consolidate-notes.mjs
 */
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const SUBJECTS_DIR = path.join(process.cwd(), "src", "data", "subjects");
const CODES = ["ce", "cs", "ec", "ee", "me"];
const MAX_BUFFER = 1024 * 1024 * 1024; // 1 GB, sem-6 flat file is ~100 MB

function gitShow(ref, relPath) {
  try {
    return execSync(`git show ${ref}:${relPath}`, {
      maxBuffer: MAX_BUFFER,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
  } catch {
    return null; // file not present on that ref
  }
}

function listAutoNotesRefs() {
  const out = execSync("git branch -r", { encoding: "utf8" });
  const refs = [];
  for (const line of out.split("\n")) {
    const m = line.trim().match(/^(origin\/auto-notes-sem-(\d+)(?:-chunk-\d+)?)$/);
    if (m) refs.push({ ref: m[1], sem: Number(m[2]) });
  }
  return refs;
}

function key(code, moduleTitle, topicTitle) {
  return `${code}||${moduleTitle}||${topicTitle}`;
}

function hasContent(c) {
  return typeof c === "string" && c.trim().length > 0;
}

function main() {
  const refs = listAutoNotesRefs();
  console.log(`Found ${refs.length} auto-notes refs.`);

  let grandFilled = 0;

  for (let sem = 1; sem <= 8; sem++) {
    const semRefs = refs.filter((r) => r.sem === sem).map((r) => r.ref);
    if (semRefs.length === 0) continue;

    // 1+2: build content map for this semester
    const contentMap = new Map();
    let scanned = 0;
    for (const ref of semRefs) {
      for (const code of CODES) {
        const raw = gitShow(ref, `src/data/subjects/${code}-${sem}.json`);
        if (!raw) continue;
        let data;
        try {
          data = JSON.parse(raw);
        } catch {
          continue;
        }
        if (!Array.isArray(data)) continue;
        scanned++;
        for (const subject of data) {
          const subjCode = subject?.code || "";
          for (const mod of subject?.modules || []) {
            const mt = mod?.title || "";
            for (const topic of mod?.topics || []) {
              if (!hasContent(topic?.content)) continue;
              const k = key(subjCode, mt, topic.title || "");
              const existing = contentMap.get(k);
              if (!existing || topic.content.length > existing.length) {
                contentMap.set(k, topic.content);
              }
            }
          }
        }
      }
    }

    if (contentMap.size === 0) {
      console.log(`sem ${sem}: scanned ${scanned} flat files, no content found.`);
      continue;
    }

    // 3: fill into per-subject folders
    let semFilled = 0;
    for (const code of CODES) {
      const folder = path.join(SUBJECTS_DIR, `${code}-${sem}`);
      if (!fs.existsSync(folder)) continue;
      for (const fname of fs.readdirSync(folder)) {
        if (!fname.endsWith(".json")) continue;
        const fpath = path.join(folder, fname);
        const subject = JSON.parse(fs.readFileSync(fpath, "utf8"));
        let changed = false;
        for (const mod of subject?.modules || []) {
          const mt = mod?.title || "";
          for (const topic of mod?.topics || []) {
            const cand = contentMap.get(key(subject?.code || "", mt, topic.title || ""));
            const cur = topic.content || "";
            if (cand && cand.length > cur.length) {
              topic.content = cand;
              changed = true;
              semFilled++;
            }
          }
        }
        if (changed) {
          fs.writeFileSync(fpath, JSON.stringify(subject, null, 2) + "\n", "utf8");
        }
      }
    }

    grandFilled += semFilled;
    console.log(
      `sem ${sem}: ${semRefs.length} refs, ${scanned} flat files, ${contentMap.size} topics with content -> filled ${semFilled} topics into folders.`
    );
  }

  console.log(`\nDone. Filled content into ${grandFilled} topics total.`);
}

main();
