/**
 * lib/blog.ts
 * ---------------------------------------------------------------------------
 * Filesystem-based MDX blog. Posts live in /content/blog/*.mdx with frontmatter.
 * No CMS, no DB, no monthly fee — perfect for a free student site, and fully
 * static (great Core Web Vitals + cacheable at the edge).
 *
 * Requires: gray-matter, reading-time  (npm i gray-matter reading-time)
 * MDX rendering: next-mdx-remote/rsc   (npm i next-mdx-remote)
 * ---------------------------------------------------------------------------
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface PostFrontmatter {
  title: string;
  description: string;       // used as meta description + AI snippet — keep it answer-first
  date: string;              // ISO: "2026-06-20"
  updated?: string;          // ISO
  author?: string;
  category: string;          // e.g. "exam-prep", "ktu-updates", "guides"
  tags?: string[];
  image?: string;            // social/hero image, root-relative
  draft?: boolean;
  // Optional: feeds FAQPage schema on the post -> AEO rich results
  faqs?: { question: string; answer: string }[];
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
  readingMinutes: number;
}

export interface Post extends PostMeta {
  content: string; // raw MDX body
}

function ensureDir(): boolean {
  return fs.existsSync(BLOG_DIR);
}

export async function getAllPosts(): Promise<PostMeta[]> {
  if (!ensureDir()) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const fm = data as PostFrontmatter;
    return {
      ...fm,
      slug,
      readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
    } as PostMeta;
  });
  return posts
    .filter((p) => process.env.NODE_ENV === "development" || !p.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!ensureDir()) return null;
  const file = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;
  return {
    ...fm,
    slug,
    content,
    readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
  };
}

export async function getPostsByCategory(category: string): Promise<PostMeta[]> {
  const all = await getAllPosts();
  return all.filter((p) => p.category === category);
}

export async function getAllSlugs(): Promise<string[]> {
  const all = await getAllPosts();
  return all.map((p) => p.slug);
}

export async function getAllCategories(): Promise<string[]> {
  const all = await getAllPosts();
  return [...new Set(all.map((p) => p.category).filter(Boolean))];
}
