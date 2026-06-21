import { type NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const topicMapPath = path.join(process.cwd(), "src", "data", "topic-path-map.json");
const topicIndexPath = path.join(process.cwd(), "src", "data", "topic-index.json");
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

// Lazy-loaded topic index (single file, ~31MB, cached in memory after first read)
let _topicIndex: Record<string, {
  t: string;   // title
  sc: string;  // subjectCode
  sn: string;  // subjectName
  scd: string; // subjectCodeDisplay
  mt: string;  // moduleTitle
  b: string;   // branchSlug
  bd: string;  // branchDisplayName
  s: string;   // semester
  hc: number;  // hasContent (1/0)
}> | null = null;

function getTopicIndex() {
  if (_topicIndex) return _topicIndex;
  try {
    if (fs.existsSync(topicIndexPath)) {
      _topicIndex = JSON.parse(fs.readFileSync(topicIndexPath, "utf8"));
      return _topicIndex;
    }
  } catch (error) {
    console.error("Failed to load topic-index.json", error);
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

/**
 * Fetch a note JSON from the public/data/notes/ CDN path.
 * Returns the parsed JSON or null if not found.
 */
async function fetchNoteStore(subjectCode: string): Promise<any | null> {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://ktunode.com").replace(/\/$/, "");
  try {
    // Try local filesystem first (works in dev and during build on Vercel)
    const localPath = path.join(process.cwd(), "public", "data", "notes", `${subjectCode.toUpperCase()}.json`);
    if (fs.existsSync(localPath)) {
      return JSON.parse(fs.readFileSync(localPath, "utf8"));
    }
  } catch {
    // Fall through to HTTP fetch
  }

  try {
    const res = await fetch(`${siteUrl}/data/notes/${subjectCode.toUpperCase()}.json`, { cache: "no-store" });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  // Topic ids embed module names that may contain spaces (e.g. "...-mExperiment 2-t1"),
  // so spaces are permitted here. The id is only ever used as an object key or to derive
  // sanitized branch/sem/code segments below — never spliced into a filesystem path directly.
  if (!id || !/^[a-z0-9][a-z0-9 :/._-]*$/i.test(id)) {
    return json({ error: "Missing or invalid topic id parameter" }, 400);
  }

  try {
    let relativePath = readTopicPathMap()[id];
    let fileContent: string | null = null;

    if (relativePath) {
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
    }

    if (fileContent) {
      const markdown = stripFrontmatter(fileContent);
      return json({ content: markdown, path: `/${relativePath}` });
    }

    // Look up topic metadata from the pre-built index (single JSON file)
    // instead of scanning 13,000+ subject files at runtime.
    const topicMeta = getTopicIndex()?.[id];
    if (topicMeta) {
      const { t: topicTitle, sc: subjectCode, sn: subjectName, scd: subjectCodeDisplay, mt: modTitle, b: branch, bd: branchDisplayName, s: sem } = topicMeta;

      // Try to serve authored content from the unified notes store (now in public/data/notes/)
      let noteContent: string | null = null;
      try {
        const notesData = await fetchNoteStore(subjectCode);
        if (notesData) {
          const normalizedTitle = (topicTitle || "").toLowerCase().replace(/[^a-z0-9]/g, "");
          const matchedTopic = notesData.topics && notesData.topics[normalizedTitle];
          if (matchedTopic && typeof matchedTopic.content === "string" && matchedTopic.content.trim().length > 0) {
            noteContent = matchedTopic.content;
          }
        }
      } catch (err) {
        console.error(`Failed to read note from unified store for ${subjectCode}:`, err);
      }

      if (noteContent && noteContent.trim().length > 0) {
        return json({ content: stripFrontmatter(noteContent), path: `/api/notes?id=${id}` });
      }

      // Otherwise render a premium "coming soon" placeholder from the syllabus schema.
      const placeholderMarkdown = `# ${topicTitle || "this topic"}

> [!NOTE]
> This study note for **${subjectName} (${subjectCodeDisplay})** is currently under review by our subject matter experts to ensure alignment with the latest APJ Abdul Kalam Technological University (KTU) 2024 scheme syllabus.

## Syllabus details
- **Branch**: ${branchDisplayName || branch}
- **Semester**: Semester ${sem}
- **Subject**: ${subjectName} (${subjectCodeDisplay})
- **Module**: ${modTitle}
- **Topic**: ${topicTitle}

## What you should learn under this topic:
- Review the core concepts of **${topicTitle}**.
- Refer to the recommended textbooks in your syllabus for **${subjectName}**.
- Solve related problems from previous year question papers.

---
*Stay tuned! We are constantly updating our repository with high-quality, comprehensive study notes.*`;

      return json({ content: placeholderMarkdown, path: `/api/notes?id=${id}` });
    }

    return json({ error: "Note not found and syllabus fallback could not be generated" }, 404);
  } catch (error: any) {
    console.error("Error loading note content:", error);
    return json({ error: "Internal Server Error" }, 500);
  }
}
