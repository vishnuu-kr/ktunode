import { type NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const allowedBranches = new Set(["cs", "ec", "me", "ce", "ee"]);
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
  const branch = request.nextUrl.searchParams.get("branch")?.toLowerCase();
  const semParam = request.nextUrl.searchParams.get("sem")?.replace("sem-", "");
  const sem = Number(semParam);

  if (!branch || !allowedBranches.has(branch) || !Number.isInteger(sem) || sem < 1 || sem > 8) {
    return json({ error: "Missing or invalid branch or sem parameters" }, 400);
  }

  try {
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
