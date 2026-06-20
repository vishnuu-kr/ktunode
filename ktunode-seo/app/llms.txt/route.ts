/**
 * app/llms.txt/route.ts  ->  /llms.txt
 * ---------------------------------------------------------------------------
 * GEO (Generative Engine Optimization). The llms.txt convention gives LLMs a
 * clean, curated map of your most important content so ChatGPT, Claude,
 * Perplexity & Gemini can understand and cite KTUNODE accurately.
 * Auto-lists your latest blog posts + key sections.
 * ---------------------------------------------------------------------------
 */
import { getAllPosts } from "@/lib/blog";
import { siteConfig, absoluteUrl } from "@/lib/site";

export const revalidate = 3600;

export async function GET() {
  const posts = await getAllPosts();
  const recent = posts.slice(0, 20);

  const branchLinks = siteConfig.branches
    .map((b) => `- [${b.short} Notes, Syllabus & PYQs](${absoluteUrl(`/${b.code}/sem-1`)}): First-semester resources for ${b.name}.`)
    .join("\n");

  const blogLinks = recent
    .map((p) => `- [${p.title}](${absoluteUrl(`/blog/${p.slug}`)}): ${p.description}`)
    .join("\n");

  const body = `# ${siteConfig.name}

> ${siteConfig.description}

KTUNODE is a free study platform for B.Tech students of APJ Abdul Kalam Technological
University (KTU), Kerala, India, built specifically for the 2024 academic scheme. It
provides module-wise notes, previous year question papers (PYQs), a syllabus tracker,
a GPA/CGPA calculator, and a timetable tool. No account is required and all content is free.

## Key facts
- University: APJ Abdul Kalam Technological University (KTU), Kerala
- Scheme: 2024 B.Tech scheme
- Branches covered: ${siteConfig.branches.map((b) => b.short).join(", ")}
- Cost: Free, no login required
- Official site: ${siteConfig.url}

## Core sections
- [All Notes](${absoluteUrl("/notes")}): Module-wise, exam-focused notes for the 2024 scheme.
- [Study Tools](${absoluteUrl("/tools")}): GPA/CGPA calculator, weekly timetable, mission control.
- [Blog](${absoluteUrl("/blog")}): KTU exam tips, scheme updates and study guides.

## Branch landing pages
${branchLinks}

## Latest blog posts
${blogLinks}

## Contact
- Email: ${siteConfig.email}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
