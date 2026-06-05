import { type NextRequest } from "next/server";
import path from "path";

// Hide fs from static bundle tracing to prevent Turbopack warnings on dynamic path reads
const fs = typeof window === "undefined" ? eval("require('fs')") : null;

// Load path map once at module level (next-dev or production server reload will refresh it if changed)
let topicPathMap: Record<string, string> | null = null;

// Memory cache for fully processed note markdown content
const notesCache = new Map<string, string>();

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

  // Return cached notes instantly
  if (notesCache.has(id)) {
    return Response.json({ content: notesCache.get(id) });
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

    let fileContent: string;
    const filePath = [process.cwd(), "public", relativePath].join(path.sep);

    // Short-circuit loopback HTTP network request by reading directly from filesystem
    if (fs.existsSync(filePath)) {
      fileContent = fs.readFileSync(filePath, "utf8");
    } else {
      const host = request.headers.get("host") || "localhost:3000";
      const protocol = host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https";
      const noteUrl = `${protocol}://${host}/${relativePath}`;

      const cdnResponse = await fetch(noteUrl);
      if (!cdnResponse.ok) {
        return Response.json({ 
          error: `Failed to fetch note from CDN (${cdnResponse.status}): ${noteUrl}` 
        }, { status: cdnResponse.status });
      }
      fileContent = await cdnResponse.text();
    }

    // Clean/strip YAML frontmatter
    let markdown = fileContent;
    const frontmatterMatch = fileContent.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
    if (frontmatterMatch) {
      markdown = fileContent.substring(frontmatterMatch[0].length);
    }

    // Cache the processed markdown content
    notesCache.set(id, markdown);

    return Response.json({ content: markdown });
  } catch (error: any) {
    console.error("Error loading note content:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
