#!/usr/bin/env node
/**
 * One-time migration: split each flat `{branch}-{sem}.json` (an array of subject
 * objects) into a folder `{branch}-{sem}/` containing one file per subject.
 *
 * New layout:  src/data/subjects/cs-6/000_CST302.json
 *
 * - Preserves order via a zero-padded index prefix (lexical sort == original order).
 * - Idempotent: if the target folder already exists, that flat file is skipped.
 * - Deletes the flat file after a successful split so the repo carries only folders.
 *
 * Usage:  node scripts/migrate-subjects.mjs [--dry]
 */
import fs from "fs";
import path from "path";

const DRY = process.argv.includes("--dry");
const SUBJECTS_DIR = path.join(process.cwd(), "src", "data", "subjects");
const FLAT_RE = /^([a-z]+)-([1-8])\.json$/i;

function safeName(code, fallback) {
  const base = String(code || "").trim() || fallback;
  return base.replace(/[^A-Za-z0-9._-]/g, "_");
}

function main() {
  if (!fs.existsSync(SUBJECTS_DIR)) {
    console.error(`Subjects dir not found: ${SUBJECTS_DIR}`);
    process.exit(1);
  }

  const entries = fs.readdirSync(SUBJECTS_DIR, { withFileTypes: true });
  const flatFiles = entries.filter((e) => e.isFile() && FLAT_RE.test(e.name));

  let split = 0;
  let skipped = 0;
  let totalSubjects = 0;

  for (const entry of flatFiles) {
    const flatPath = path.join(SUBJECTS_DIR, entry.name);
    const folderName = entry.name.replace(/\.json$/i, ""); // e.g. cs-6
    const folderPath = path.join(SUBJECTS_DIR, folderName);

    if (fs.existsSync(folderPath)) {
      console.log(`SKIP  ${entry.name} (folder ${folderName}/ already exists)`);
      skipped++;
      continue;
    }

    let data;
    try {
      data = JSON.parse(fs.readFileSync(flatPath, "utf8"));
    } catch (err) {
      console.error(`FAIL  ${entry.name}: invalid JSON (${err.message})`);
      continue;
    }
    if (!Array.isArray(data)) {
      console.error(`FAIL  ${entry.name}: expected an array of subjects`);
      continue;
    }

    if (!DRY) fs.mkdirSync(folderPath, { recursive: true });

    data.forEach((subject, i) => {
      const fileName = `${String(i).padStart(3, "0")}_${safeName(subject?.code, "subject")}.json`;
      const outPath = path.join(folderPath, fileName);
      if (!DRY) {
        fs.writeFileSync(outPath, JSON.stringify(subject, null, 2) + "\n", "utf8");
      }
    });

    if (!DRY) fs.rmSync(flatPath);

    console.log(`SPLIT ${entry.name} -> ${folderName}/ (${data.length} subjects)`);
    split++;
    totalSubjects += data.length;
  }

  console.log(
    `\n${DRY ? "[DRY RUN] " : ""}Done. Split ${split} file(s), ${skipped} skipped, ${totalSubjects} subjects written.`
  );
}

main();
