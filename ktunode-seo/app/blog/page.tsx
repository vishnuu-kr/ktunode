/**
 * app/blog/page.tsx  ->  /blog  (blog index / listing)
 * ---------------------------------------------------------------------------
 * Statically rendered list of all posts. Self-canonical, full metadata, and a
 * Blog + Breadcrumb JSON-LD graph.
 * ---------------------------------------------------------------------------
 */
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, breadcrumbSchema } from "@/components/seo/schema";
import { siteConfig, absoluteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "KTU Blog — Exam Tips, Scheme Updates & Study Guides",
  description:
    "Read KTU exam preparation tips, 2024 scheme updates, study strategies, and subject guides for B.Tech students. Practical, exam-focused advice — updated regularly.",
  path: "/blog",
});

// Revalidate hourly so new posts appear without a full redeploy (ISR).
export const revalidate = 3600;

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  const blogLd = {
    "@type": "Blog",
    "@id": `${siteConfig.url}/blog#blog`,
    name: "KTUNODE Blog",
    url: absoluteUrl("/blog"),
    description: "KTU exam tips, scheme updates and study guides for B.Tech students.",
    publisher: { "@id": `${siteConfig.url}/#organization` },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: absoluteUrl(`/blog/${p.slug}`),
      datePublished: p.date,
      dateModified: p.updated ?? p.date,
    })),
  };

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <JsonLd
        data={graph(
          blogLd,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ])
        )}
      />

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">KTU Blog</h1>
        <p className="mt-2 text-muted-foreground">
          Exam preparation tips, 2024 scheme updates, and study guides for KTU B.Tech students.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet — check back soon.</p>
      ) : (
        <ul className="space-y-8">
          {posts.map((p) => (
            <li key={p.slug} className="group">
              <article>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
                  <span>{p.category}</span>
                  <span aria-hidden>·</span>
                  <time dateTime={p.date}>
                    {new Date(p.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span aria-hidden>·</span>
                  <span>{p.readingMinutes} min read</span>
                </div>
                <h2 className="mt-1 text-xl font-semibold group-hover:underline">
                  <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                </h2>
                <p className="mt-1 text-muted-foreground">{p.description}</p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
