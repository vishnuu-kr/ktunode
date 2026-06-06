import { type NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const topicMapPath = path.join(process.cwd(), "src", "data", "topic-path-map.json");
const publicNotesRoot = path.join(process.cwd(), "public", "notes");

function json(data: unknown, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}

function readTopicPathMap() {
  try {
    if (fs.existsSync(topicMapPath)) {
      return JSON.parse(fs.readFileSync(topicMapPath, "utf8")) as Record<string, string>;
    }
  } catch (error) {
    console.error("Failed to load topic-path-map.json", error);
  }

  return {};
}

function resolvePublicNotePath(relativePath: string) {
  if (!relativePath.startsWith("notes/")) {
    return null;
  }

  const fullPath = path.resolve(process.cwd(), "public", relativePath);
  const relativeToNotes = path.relative(publicNotesRoot, fullPath);
  if (relativeToNotes.startsWith("..") || path.isAbsolute(relativeToNotes)) {
    return null;
  }

  return fullPath;
}

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  if (!id || !/^[a-z0-9][a-z0-9._-]*$/i.test(id)) {
    return json({ error: "Missing or invalid topic id parameter" }, 400);
  }

  try {
    const relativePath = readTopicPathMap()[id];
    if (!relativePath) {
      return json({ error: "Note not found in lookup mapping" }, 404);
    }

    const filePath = resolvePublicNotePath(relativePath);
    if (!filePath) {
      return json({ error: "Invalid path segment" }, 400);
    }

    if (!fs.existsSync(filePath)) {
      return json({ error: "Note file is mapped but missing on disk" }, 404);
    }

    if (path.extname(filePath).toLowerCase() === ".pdf") {
      return json({
        content: `[Open PDF note](/${relativePath})`,
        path: `/${relativePath}`,
      });
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    const frontmatterMatch = fileContent.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
    const markdown = frontmatterMatch ? fileContent.substring(frontmatterMatch[0].length) : fileContent;

    return json({ content: markdown, path: `/${relativePath}` });
  } catch (error: any) {
    console.error("Error loading note content:", error);
    return json({ error: "Internal Server Error" }, 500);
  }
}
