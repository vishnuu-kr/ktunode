import { type NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const allowedBranches = new Set(["cs", "ce", "ec", "ee", "me"]);
const subjectsDir = path.join(process.cwd(), "src", "data", "subjects");

function json(data: unknown, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}

const apiMapping: Record<string, string> = {
  "cs": "cs", "ce": "ce", "ec": "ec", "ee": "ee", "me": "me",
  "artificial-intelligence": "cs",
  "artificial-intelligence-and-data-science": "cs",
  "artificial-intelligence-and-machine-learning": "cs",
  "cs-and-business-systems": "cs",
  "cs-and-design": "cs",
  "cse-artificial-intelligence-and-data-science": "cs",
  "cse-block-chain": "cs",
  "cse-cyber-security": "cs",
  "cse-internet-of-things-cse-iot": "cs",
  "cse-iot-and-cs-including-block-chain-technology": "cs",
  "computer-science-and-business-systems": "cs",
  "computer-science-and-design": "cs",
  "computer-science-and-engineering": "cs",
  "computer-science-and-engineering-artificial-intelligence-and-data-science": "cs",
  "computer-science-and-engineering-artificial-intelligence-and-machine-learning": "cs",
  "computer-science-and-engineering-artificial-intelligence": "cs",
  "computer-science-and-engineering-cyber-security": "cs",
  "computer-science-and-engineering-data-science": "cs",
  "computer-science-and-engineering-iot": "cs",
  "computer-science-and-engineering-and-business-systems": "cs",
  "cyber-security": "cs",
  "information-technology": "cs",
  "civil-engineering": "ce",
  "civil-and-environmental-engineering": "ce",
  "applied-electronics-instrumentation-engineering": "ec",
  "biomedical-robotics-engineering": "ec",
  "biomedical-engineering": "ec",
  "cyber-physical-system": "ec",
  "electronics-biomedical": "ec",
  "electronics-communication-engineering": "ec",
  "electronics-instrumentation-engineering": "ec",
  "electronics-engineering-vlsi-design-and-technology": "ec",
  "electronics-and-biomedical-engineering": "ec",
  "electronics-and-communication-advanced-communication-technology": "ec",
  "electronics-and-communication-engineering": "ec",
  "electronics-and-computer-engineering": "ec",
  "instrumentation-and-control-engineering": "ec",
  "robotics-and-artificial-intelligence": "ec",
  "robotics-and-automation": "ec",
  "electrical-and-computer-engineering": "ee",
  "electrical-and-electronics-engineering": "ee",
  "aeronautical-engineering": "me",
  "automobile-engineering": "me",
  "chemical-engineering": "me",
  "food-technology": "me",
  "industrial-engineering": "me",
  "mechanical-engineering": "me",
  "mechanical-engineering-auto": "me",
  "mechanical-engineering-automobile": "me",
  "mechatronics-engineering": "me",
  "metallurgical-materials-engineering": "me",
  "naval-architecture-ship-building-engineering": "me",
  "polymer-engineering": "me",
  "production-engineering": "me",
  "safety-and-fire-engineering": "me",
  "agriculture-engineering": "me",
  "biotechnology": "me",
  "biotechnology-and-biochemical-engineering": "me"
};

export async function GET(request: NextRequest) {
  const rawBranch = request.nextUrl.searchParams.get("branch")?.toLowerCase();
  const semParam = request.nextUrl.searchParams.get("sem")?.replace("sem-", "");
  const sem = Number(semParam);

  if (!rawBranch || !(rawBranch in apiMapping) || !Number.isInteger(sem) || sem < 1 || sem > 8) {
    return json({ error: "Missing or invalid branch or sem parameters" }, 400);
  }

  const branch = apiMapping[rawBranch];

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
        .map((name) => JSON.parse(fs.readFileSync(path.join(folderPath, name), "utf8")));
      return json(subjects);
    }

    // Backward-compatible fallback: legacy flat file.
    const filePath = path.join(subjectsDir, `${branch}-${sem}.json`);
    if (!fs.existsSync(filePath)) {
      return json([]);
    }

    return json(JSON.parse(fs.readFileSync(filePath, "utf8")));
  } catch (error: any) {
    console.error("Error loading subject metadata:", error);
    return json({ error: "Internal Server Error" }, 500);
  }
}
