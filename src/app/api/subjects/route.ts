import { type NextRequest } from "next/server";
import path from "path";

// Hide fs from static bundle tracing to prevent Turbopack warnings on dynamic path reads
const fs = typeof window === "undefined" ? eval("require('fs')") : null;

const subjectsCache = new Map<string, any>();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const branch = searchParams.get("branch");
  let sem = searchParams.get("sem");

  if (sem) {
    sem = sem.replace("sem-", "");
  }

  if (!branch || !sem) {
    return Response.json({ error: "Missing branch or sem parameters" }, { status: 400 });
  }

  const cacheKey = `${branch}-${sem}`;
  if (subjectsCache.has(cacheKey)) {
    return Response.json(subjectsCache.get(cacheKey));
  }

  try {
    const filePath = path.join(process.cwd(), "src", "data", "subjects", `${branch}-${sem}.json`);
    
    if (!fs.existsSync(filePath)) {
      return Response.json([]);
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContent);
    
    // Store in cache for future requests
    subjectsCache.set(cacheKey, data);
    
    return Response.json(data);
  } catch (error: any) {
    console.error("Error loading subject metadata:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
