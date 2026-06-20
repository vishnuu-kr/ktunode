/**
 * app/[branch]/sem-[sem]/page.tsx  (EXAMPLE for /cs/sem-1 etc.)
 * ---------------------------------------------------------------------------
 * FIXES the "| KTUNODE | KTUNODE" double-suffix bug found in the audit by
 * using `absoluteTitle` (bypasses the layout title template). Also adds Course
 * + Breadcrumb + FAQ schema and a self-canonical. Adapt the data loading to
 * your real folder/route names.
 * ---------------------------------------------------------------------------
 */
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, courseSchema, breadcrumbSchema, faqSchema } from "@/components/seo/schema";

function getBranch(code: string) {
  return siteConfig.branches.find((b) => b.code === code.toLowerCase());
}

export async function generateStaticParams() {
  return siteConfig.branches.flatMap((b) =>
    siteConfig.semesters.map((s) => ({ branch: b.code, sem: String(s) }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ branch: string; sem: string }>;
}) {
  const { branch, sem } = await params;
  const b = getBranch(branch);
  if (!b) return buildMetadata({ title: "Not found", path: `/${branch}/sem-${sem}`, noindex: true });

  return buildMetadata({
    // absoluteTitle already contains the brand -> NO template suffix -> no double "| KTUNODE"
    absoluteTitle: `KTU ${b.short} Semester ${sem} Notes, Syllabus & PYQs | ${siteConfig.name}`,
    description: `Download free module-wise KTU ${b.name} (${b.short}) semester ${sem} notes, syllabus and previous year question papers for the 2024 scheme.`,
    path: `/${branch}/sem-${sem}`,
  });
}

export default async function BranchSemesterPage({
  params,
}: {
  params: Promise<{ branch: string; sem: string }>;
}) {
  const { branch, sem } = await params;
  const b = getBranch(branch);
  if (!b) notFound();

  const path = `/${branch}/sem-${sem}`;
  const faqs = [
    {
      question: `Where can I get KTU ${b.short} semester ${sem} notes for the 2024 scheme?`,
      answer: `You can download free module-wise ${b.short} semester ${sem} notes for the KTU 2024 scheme on KTUNODE at ${siteConfig.url}${path}. No login required.`,
    },
    {
      question: `Does KTUNODE have previous year question papers for ${b.short} semester ${sem}?`,
      answer: `Yes. KTUNODE provides previous year question papers (PYQs) alongside notes and syllabus for ${b.short} semester ${sem}.`,
    },
  ];

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <JsonLd
        data={graph(
          courseSchema({
            name: `KTU ${b.short} Semester ${sem} — 2024 Scheme`,
            description: `Module-wise notes, syllabus and PYQs for KTU ${b.name} semester ${sem}.`,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: b.short, path: `/${branch}/sem-1` },
            { name: `Semester ${sem}`, path },
          ]),
          faqSchema(faqs)
        )}
      />

      <h1 className="text-3xl font-bold tracking-tight">
        KTU {b.short} Semester {sem} — Notes, Syllabus &amp; PYQs
      </h1>
      <p className="mt-2 text-muted-foreground">
        Free 2024-scheme resources for {b.name}, semester {sem}.
      </p>

      {/* ===== Your existing subject/notes listing goes here ===== */}

      <section className="mt-16" aria-labelledby="bs-faq">
        <h2 id="bs-faq" className="text-2xl font-bold">Frequently Asked Questions</h2>
        <dl className="mt-4 space-y-6">
          {faqs.map((f, i) => (
            <div key={i}>
              <dt className="font-semibold">{f.question}</dt>
              <dd className="mt-1 text-muted-foreground">{f.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
