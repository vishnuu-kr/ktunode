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

    // Primary source for dashboard topic ids: the authored note content embedded in each
    // subject JSON. Topic id format is `${branchId}-${sem}-${code}-${moduleId}-t${index}`,
    // where branchId may contain dashes and moduleId may contain spaces/dashes — so we anchor
    // on the single-digit semester and the alphanumeric subject code rather than greedy splits.
    // branch/code are constrained to filesystem-safe charsets so the derived path can never
    // traverse out of the subjects dir; only the module segment may contain spaces/":"/"/".
    const match = id.match(/^([a-z0-9-]+)-([1-8])-([a-z0-9]+)-m(.+)-t(\d+)$/i);
    if (match) {
      const [, branch, sem, subjectCode] = match;
      const subjectsDir = path.join(process.cwd(), "src", "data", "subjects");
      const folderPath = path.join(subjectsDir, `${branch}-${sem}`);

      if (fs.existsSync(folderPath) && fs.statSync(folderPath).isDirectory()) {
        const files = fs.readdirSync(folderPath);
        const matchedFile = files.find(f => f.toLowerCase().endsWith(`_${subjectCode.toLowerCase()}.json`));

        if (matchedFile) {
          const subjectData = JSON.parse(fs.readFileSync(path.join(folderPath, matchedFile), "utf8"));

          // Locate the exact topic by id across all modules (robust to module-name variations).
          let topic: any = null;
          let targetMod: any = null;
          for (const mod of subjectData.modules || []) {
            const found = (mod.topics || []).find((t: any) => t.id === id);
            if (found) {
              topic = found;
              targetMod = mod;
              break;
            }
          }

          if (topic) {
            // Serve the authored content when present — this is the real study note.
            if (typeof topic.content === "string" && topic.content.trim().length > 0) {
              return json({ content: stripFrontmatter(topic.content), path: `/api/notes?id=${id}` });
            }

            // Otherwise render a premium "coming soon" placeholder from the syllabus schema.
            {
              const topicTitle = topic.title || "this topic";
              const subjectName = subjectData.name || subjectCode.toUpperCase();
              const subjectCodeDisplay = subjectData.code || subjectCode.toUpperCase();
              const modTitle = targetMod?.title || (targetMod?.id || "").replace(/^m/, "Module ");

              // Clean branch display mapping
              const branchMap: Record<string, string> = {
                "aeronautical-engineering": "Aeronautical Engineering",
                "agriculture-engineering": "Agriculture Engineering",
                "applied-electronics-and-instrumentation": "Applied Electronics and Instrumentation",
                "artificial-intelligence": "Artificial Intelligence",
                "artificial-intelligence-and-machine-learning": "Artificial Intelligence & Machine Learning",
                "artificial-intelligence-and-data-science": "Artificial Intelligence and Data Science",
                "automobile-engineering": "Automobile Engineering",
                "biomedical-and-robotic-engineering": "Biomedical & Robotic Engineering",
                "biomedical-engineering": "Biomedical Engineering",
                "biotechnology-engineering": "Biotechnology Engineering",
                "biotechnology-and-biochemical-engineering": "Biotechnology and Biochemical Engineering",
                "chemical-engineering": "Chemical Engineering",
                "civil-engineering": "Civil Engineering",
                "civil-and-environmental-engineering": "Civil and Environmental Engineering",
                "computer-science-and-business-systems": "Computer Science and Business Systems",
                "computer-science-and-design": "Computer Science and Design",
                "computer-science-and-engineering": "Computer Science and Engineering",
                "computer-science-and-engineering-ai-and-ml": "Computer Science and Engineering (AI & ML)",
                "computer-science-and-engineering-artificial-intelligence": "Computer Science and Engineering (Artificial Intelligence)",
                "computer-science-and-engineering-cyber-security": "Computer Science and Engineering (Cyber Security)",
                "computer-science-and-engineering-data-science": "Computer Science and Engineering (Data Science)",
                "computer-science-and-engineering-internet-of-things-and-cyber-security-including-blockchain-technology": "Computer Science and Engineering (Internet of Things and Cyber Security including Blockchain Technology)",
                "computer-science-and-engineering-iot": "Computer Science and Engineering (IoT)",
                "computer-science-and-engineering-and-business-systems": "Computer Science and Engineering and Business Systems",
                "cyber-physical-systems": "Cyber Physical Systems",
                "electrical-and-computer-engineering": "Electrical and Computer Engineering",
                "electrical-and-electronics-engineering": "Electrical and Electronics Engineering",
                "electronics-and-biomedical-engineering": "Electronics & Biomedical Engineering",
                "electronics-and-communication-advanced-communication-technology": "Electronics & Communication (Advanced Communication Technology)",
                "electronics-and-communication-engineering": "Electronics & Communication Engineering",
                "electronics-and-computer-engineering": "Electronics & Computer Engineering",
                "electronics-engineering-vlsi-design-and-technology": "Electronics Engineering (VLSI Design and Technology)",
                "electronics-and-instrumentation": "Electronics and Instrumentation",
                "food-technology": "Food Technology",
                "industrial-engineering": "Industrial Engineering",
                "information-technology": "Information Technology",
                "instrumentation-and-control": "Instrumentation and Control",
                "mechanical-automobile-engineering": "Mechanical (Automobile) Engineering",
                "mechanical-engineering": "Mechanical Engineering",
                "mechatronics-engineering": "Mechatronics Engineering",
                "naval-architecture-and-shipbuilding-engineering": "Naval Architecture & Shipbuilding Engineering",
                "polymer-engineering": "Polymer Engineering",
                "production-engineering": "Production Engineering",
                "robotics-and-artificial-intelligence": "Robotics and Artificial Intelligence",
                "robotics-and-automation": "Robotics and Automation",
                "safety-and-fire-engineering": "Safety & Fire Engineering"
              };
              const branchDisplayName = branchMap[branch.toLowerCase()] || branch;

              const placeholderMarkdown = `# ${topicTitle}

> [!NOTE]
> This study note for **${subjectName} (${subjectCodeDisplay})** is currently under review by our subject matter experts to ensure alignment with the latest APJ Abdul Kalam Technological University (KTU) 2024 scheme syllabus.

## Syllabus details
- **Branch**: ${branchDisplayName}
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
          }
        }
      }
    }

    return json({ error: "Note not found and syllabus fallback could not be generated" }, 404);
  } catch (error: any) {
    console.error("Error loading note content:", error);
    return json({ error: "Internal Server Error" }, 500);
  }
}
