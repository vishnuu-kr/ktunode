import { type NextRequest } from "next/server";
import fs from "fs";
import path from "path";

// Load path map once at module level (next-dev or production server reload will refresh it if changed)
let topicPathMap: Record<string, string> | null = null;

function getTopicPathMap() {
  if (topicPathMap) return topicPathMap;
  try {
    const mapPath = path.join(process.cwd(), "src", "data", "topic-path-map.json");
    if (fs.existsSync(mapPath)) {
      const content = fs.readFileSync(mapPath, "utf8");
      topicPathMap = JSON.parse(content);
    }
  } catch (error) {
    console.error("Failed to load topic-path-map.json", error);
  }
  return topicPathMap || {};
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  if (!id) {
    return Response.json({ error: "Missing topic id parameter" }, { status: 400 });
  }

  try {
    const map = getTopicPathMap();
    const relativePath = map[id];

    if (!relativePath) {
      return Response.json({ error: "Note not found in lookup mapping" }, { status: 404 });
    }

    // Validate that the relative path is scoped to notes folder for safety
    if (!relativePath.startsWith("notes/")) {
      return Response.json({ error: "Invalid path segment" }, { status: 400 });
    }

    // Statically scope path for Turbopack NFT optimization
    const filePath = path.join(/*turbopackIgnore: true*/ process.cwd(), "notes", relativePath.substring(6));
    if (!fs.existsSync(filePath)) {
      let rootFiles = [];
      try { rootFiles = fs.readdirSync(process.cwd()); } catch(e) {}
      let notesFiles = [];
      try { notesFiles = fs.readdirSync(path.join(process.cwd(), "notes")); } catch(e) {}
      
      return Response.json({ 
        error: `Not found: ${filePath}. Root: [${rootFiles.join(', ')}]. Notes dir: [${notesFiles.join(', ')}]` 
      }, { status: 404 });
    }

    const fileContent = fs.readFileSync(filePath, "utf8");

    // Clean/strip YAML frontmatter
    let markdown = fileContent;
    const frontmatterMatch = fileContent.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
    if (frontmatterMatch) {
      markdown = fileContent.substring(frontmatterMatch[0].length);
    }

    return Response.json({ content: markdown });
  } catch (error: any) {
    console.error("Error loading note content:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
