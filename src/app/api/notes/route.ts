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

function validateNotePath(relativePath: string): boolean {
  if (!relativePath.startsWith("notes/")) {
    return false;
  }

  const fullPath = path.resolve(process.cwd(), "public", relativePath);
  const relativeToNotes = path.relative(publicNotesRoot, fullPath);
  if (relativeToNotes.startsWith("..") || path.isAbsolute(relativeToNotes)) {
    return false;
  }

  return true;
}

function stripFrontmatter(content: string): string {
  const frontmatterMatch = content.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  return frontmatterMatch ? content.substring(frontmatterMatch[0].length) : content;
}

async function fetchStaticFile(relativePath: string): Promise<string | null> {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://ktunode.com").replace(/\/$/, "");
  try {
    const res = await fetch(`${siteUrl}/${relativePath}`, { cache: "no-store" });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  if (!id || !/^[a-z0-9][a-z0-9._-]*$/i.test(id)) {
    return json({ error: "Missing or invalid topic id parameter" }, 400);
  }

  try {
    let relativePath = readTopicPathMap()[id];
    if (!relativePath) {
      const match = id.match(/^([a-z0-9-]+)-([1-8])-([a-z0-9-]+)-m([1-5])-t([0-9]+)$/i);
      if (match) {
        const [_, branch, sem, subjectCode, modNum, topicIdx] = match;
        const subjectsDir = path.join(process.cwd(), "src", "data", "subjects");
        const folderPath = path.join(subjectsDir, `${branch}-${sem}`);
        if (fs.existsSync(folderPath) && fs.statSync(folderPath).isDirectory()) {
          const files = fs.readdirSync(folderPath);
          const matchedFile = files.find(f => f.toUpperCase().endsWith(`_${subjectCode.toUpperCase()}.json`));
          if (matchedFile) {
            const subjectData = JSON.parse(fs.readFileSync(path.join(folderPath, matchedFile), "utf8"));
            const modId = `m${modNum}`;
            const targetMod = subjectData.modules?.find((m: any) => m.id === modId || m.id === `mModule ${modNum}`);
            if (targetMod && targetMod.topics) {
              const idx = parseInt(topicIdx, 10) - 1;
              const topic = targetMod.topics[idx];
              if (topic && topic.content) {
                return json({ content: topic.content, path: `/api/notes?id=${id}` });
              }
            }
          }
        }
      }
      return json({ error: "Note not found in lookup mapping or subjects" }, 404);
    }

    if (relativePath.startsWith("public/")) {
      relativePath = relativePath.substring(7);
    }

    if (!validateNotePath(relativePath)) {
      return json({ error: "Invalid path segment" }, 400);
    }

    if (relativePath.toLowerCase().endsWith(".pdf")) {
      return json({
        content: `[Open PDF note](/${relativePath})`,
        path: `/${relativePath}`,
      });
    }

    let fileContent: string | null = null;

    const fullPath = path.join(process.cwd(), "public", relativePath);
    if (fs.existsSync(fullPath)) {
      try {
        fileContent = fs.readFileSync(fullPath, "utf8");
      } catch {
        fileContent = null;
      }
    }

    if (!fileContent) {
      fileContent = await fetchStaticFile(relativePath);
    }

    if (!fileContent) {
      return json({ error: "Note file is mapped but missing on disk" }, 404);
    }

    const markdown = stripFrontmatter(fileContent);
    return json({ content: markdown, path: `/${relativePath}` });
  } catch (error: any) {
    console.error("Error loading note content:", error);
    return json({ error: "Internal Server Error" }, 500);
  }
}
