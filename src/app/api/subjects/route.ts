import { type NextRequest } from "next/server";
import fs from "fs";
import path from "path";
import { VALID_BRANCHES } from "@/types/session";

export const dynamic = "force-dynamic";

const allowedBranches = new Set<string>(VALID_BRANCHES);
const subjectsDir = path.join(process.cwd(), "src", "data", "subjects");

function json(data: unknown, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}

export async function GET(request: NextRequest) {
  const rawBranch = request.nextUrl.searchParams.get("branch")?.toLowerCase();
  const semParam = request.nextUrl.searchParams.get("sem")?.replace("sem-", "");
  const sem = Number(semParam);

  if (!rawBranch || !allowedBranches.has(rawBranch) || !Number.isInteger(sem) || sem < 1 || sem > 8) {
    return json({ error: "Missing or invalid branch or sem parameters" }, 400);
  }

  const branch = rawBranch;

  try {
    // Preferred layout: one folder per branch-sem, one file per subject.
    // e.g. src/data/subjects/cs-6/000_CST302.json
    // Files are read in sorted order so the original subject order is preserved.
    const folderPath = path.join(subjectsDir, `${branch}-${sem}`);
    if (fs.existsSync(folderPath) && fs.statSync(folderPath).isDirectory()) {
      const subjects = fs
        .readdirSync(folderPath)
        .filter((name) => name.endsWith(".json"))
        .sort()
        .map((name) => {
          const subject = JSON.parse(fs.readFileSync(path.join(folderPath, name), "utf8"));
          if (subject.modules) {
            subject.modules = subject.modules.map((mod: any) => {
              if (mod.topics) {
                mod.topics = mod.topics.map((t: any) => ({
                  ...t,
                  content: ""
                }));
              }
              return mod;
            });
          }
          return subject;
        });
      return json(subjects);
    }

    // Backward-compatible fallback: legacy flat file.
    const filePath = path.join(subjectsDir, `${branch}-${sem}.json`);
    if (!fs.existsSync(filePath)) {
      return json([]);
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    if (Array.isArray(data)) {
      const stripped = data.map((subject: any) => {
        if (subject.modules) {
          subject.modules = subject.modules.map((mod: any) => {
            if (mod.topics) {
              mod.topics = mod.topics.map((t: any) => ({
                ...t,
                content: ""
              }));
            }
            return mod;
          });
        }
        return subject;
      });
      return json(stripped);
    }
    return json(data);
  } catch (error: any) {
    console.error("Error loading subject metadata:", error);
    return json({ error: "Internal Server Error" }, 500);
  }
}
