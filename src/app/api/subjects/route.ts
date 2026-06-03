import { type NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const branch = searchParams.get("branch");
  const sem = searchParams.get("sem");

  if (!branch || !sem) {
    return Response.json({ error: "Missing branch or sem parameters" }, { status: 400 });
  }

  try {
    const filePath = path.join(process.cwd(), "src", "data", "subjects", `${branch}-${sem}.json`);
    
    if (!fs.existsSync(filePath)) {
      return Response.json([]);
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContent);
    return Response.json(data);
  } catch (error: any) {
    console.error("Error loading subject metadata:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
