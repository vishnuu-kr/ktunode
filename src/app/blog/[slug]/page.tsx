/**
 * app/blog/[slug]/page.tsx  ->  /blog/:slug  (single post)
 * ---------------------------------------------------------------------------
 * Fully static (generateStaticParams) + per-post metadata, self-canonical,
 * Article + Breadcrumb + optional FAQ JSON-LD. Renders MDX on the server.
 *
 * Requires: next-mdx-remote  (npm i next-mdx-remote)
 * ---------------------------------------------------------------------------
 */
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  graph,
  articleSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/components/seo/schema";
import { siteConfig } from "@/lib/site";
import { mdxComponents } from "@/components/blog/mdx-components";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return buildMetadata({ title: "Post not found", path: `/blog/${slug}`, noindex: true });

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    image: post.image ?? siteConfig.ogImage,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated ?? post.date,
    authors: [post.author ?? siteConfig.authorName],
    tags: post.tags,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const schemaNodes: object[] = [
    articleSchema({
      title: post.title,
      description: post.description,
      path: `/blog/${slug}`,
      image: post.image ?? siteConfig.ogImage,
      datePublished: post.date,
      dateModified: post.updated ?? post.date,
      authorName: post.author,
      tags: post.tags,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${slug}` },
    ]),
  ];
  if (post.faqs?.length) schemaNodes.push(faqSchema(post.faqs));

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <JsonLd data={graph(...schemaNodes)} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:underline">Home</Link>
        <span className="px-1.5" aria-hidden>/</span>
        <Link href="/blog" className="hover:underline">Blog</Link>
      </nav>

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
            <Link href={`/blog/category/${post.category}`} className="hover:underline">
              {post.category}
            </Link>
            <span aria-hidden>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric", month: "long", day: "numeric",
              })}
            </time>
            <span aria-hidden>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{post.title}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{post.description}</p>
        </header>

        {/* `prose` requires @tailwindcss/typography. Remove if not installed. */}
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        {/* Render a visible FAQ block too — visible Q&A reinforces the FAQ schema for AEO. */}
        {post.faqs?.length ? (
          <section className="mt-12 border-t pt-8" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold">Frequently Asked Questions</h2>
            <dl className="mt-4 space-y-6">
              {post.faqs.map((f, i) => (
                <div key={i}>
                  <dt className="font-semibold">{f.question}</dt>
                  <dd className="mt-1 text-muted-foreground">{f.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}
      </article>
    </main>
  );
}
