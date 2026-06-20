/**
 * app/sitemap.ts  ->  generates /sitemap.xml
 * ---------------------------------------------------------------------------
 * Dynamic sitemap. FIXES the audit bug where /syllabus & /pyqs were listed
 * but 307-redirected. Only include real, indexable, 200-OK URLs here.
 * Auto-includes all blog posts + every branch/semester landing page.
 * ---------------------------------------------------------------------------
 */
import type { MetadataRoute } from "next";
import { siteConfig, absoluteUrl } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Static, indexable pages ONLY. (Do NOT add /dashboard or redirecting routes.)
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/notes"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/tools"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];

  // Branch x semester landing pages (e.g. /cs/sem-1) — your money keywords.
  const branchPages: MetadataRoute.Sitemap = siteConfig.branches.flatMap((b) =>
    siteConfig.semesters.map((s) => ({
      url: absoluteUrl(`/${b.code}/sem-${s}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }))
  );

  // Blog posts + category pages.
  const posts = await getAllPosts();
  const postPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const categories = [...new Set(posts.map((p) => p.category).filter(Boolean))];
  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: absoluteUrl(`/blog/category/${c}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticPages, ...branchPages, ...postPages, ...categoryPages];
}
