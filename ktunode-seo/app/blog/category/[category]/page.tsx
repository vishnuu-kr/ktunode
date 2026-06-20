/**
 * app/blog/category/[category]/page.tsx  ->  /blog/category/:category
 * ---------------------------------------------------------------------------
 * Category archive. Builds topical clusters (good for SEO topical authority).
 * ---------------------------------------------------------------------------
 */
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { getAllCategories, getPostsByCategory } from "@/lib/blog";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, breadcrumbSchema } from "@/components/seo/schema";

export const revalidate = 3600;

export async function generateStaticParams() {
  const cats = await getAllCategories();
  return cats.map((category) => ({ category }));
}

function titleCase(s: string) {
  return s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const label = titleCase(category);
  return buildMetadata({
    title: `${label} — KTU Blog`,
    description: `All KTUNODE blog posts about ${label.toLowerCase()} for KTU 2024 scheme B.Tech students.`,
    path: `/blog/category/${category}`,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const posts = await getPostsByCategory(category);
  if (posts.length === 0) notFound();
  const label = titleCase(category);

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <JsonLd
        data={graph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: label, path: `/blog/category/${category}` },
          ])
        )}
      />
      <h1 className="text-3xl font-bold tracking-tight">{label}</h1>
      <ul className="mt-8 space-y-6">
        {posts.map((p) => (
          <li key={p.slug}>
            <h2 className="text-lg font-semibold">
              <Link href={`/blog/${p.slug}`} className="hover:underline">{p.title}</Link>
            </h2>
            <p className="text-muted-foreground">{p.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
