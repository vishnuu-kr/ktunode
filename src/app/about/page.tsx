/**
 * app/about/page.tsx  ->  /about
 * ---------------------------------------------------------------------------
 * E-E-A-T page (Experience, Expertise, Authoritativeness, Trust). Search and
 * AI engines weight "who is behind this content" heavily for educational sites.
 * Self-canonical + AboutPage/Organization + Breadcrumb + FAQ schema.
 * Edit the copy in the TODO spots with your real story/team.
 * ---------------------------------------------------------------------------
 */
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  graph,
  organizationSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/components/seo/schema";

export const metadata = buildMetadata({
  title: "About KTUNODE — Free KTU Study Resources for the 2024 Scheme",
  description:
    "KTUNODE is a free study platform built by KTU students for KTU students — module-wise notes, PYQs, a syllabus tracker and study tools for the 2024 B.Tech scheme.",
  path: "/about",
});

const faqs = [
  {
    question: "Who runs KTUNODE?",
    answer:
      "KTUNODE is built and maintained by a small team of KTU students and alumni who wanted a cleaner, faster way to access notes, syllabus and previous year question papers for the 2024 scheme.",
  },
  {
    question: "Is KTUNODE official or affiliated with KTU?",
    answer:
      "No. KTUNODE is an independent student project and is not officially affiliated with APJ Abdul Kalam Technological University. Always confirm official rules and dates on the university's official channels.",
  },
  {
    question: "Is everything on KTUNODE really free?",
    answer:
      "Yes. All notes, PYQs, the syllabus tracker and study tools are free, and no account or login is required.",
  },
];

export default function AboutPage() {
  const aboutLd = {
    "@type": "AboutPage",
    "@id": `${siteConfig.url}/about#aboutpage`,
    url: `${siteConfig.url}/about`,
    name: "About KTUNODE",
    description:
      "KTUNODE is a free study platform for KTU B.Tech students under the 2024 scheme.",
    mainEntity: { "@id": `${siteConfig.url}/#organization` },
  };

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <JsonLd
        data={graph(
          aboutLd,
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          faqSchema(faqs)
        )}
      />

      <h1 className="text-3xl font-bold tracking-tight">About KTUNODE</h1>

      <div className="prose prose-neutral mt-6 max-w-none dark:prose-invert">
        <p>
          <strong>KTUNODE</strong> is a free study platform built for B.Tech students of
          APJ Abdul Kalam Technological University (KTU), Kerala, designed specifically
          for the <strong>2024 scheme</strong>. We bring notes, previous year question
          papers (PYQs), a syllabus tracker, and study tools into one clean, fast place.
        </p>

        {/* TODO: replace with your real origin story — this builds trust + E-E-A-T. */}
        <h2>Why we built it</h2>
        <p>
          University study material is often scattered and cluttered. As KTU students
          ourselves, we wanted exam-focused, module-by-module resources that save time
          before internals and semester exams — so we built KTUNODE.
        </p>

        <h2>What we offer</h2>
        <ul>
          <li><Link href="/notes">Module-wise notes</Link> for every branch and semester</li>
          <li>Previous year question papers (PYQs)</li>
          <li>A syllabus tracker for the 2024 scheme</li>
          <li><Link href="/tools">Study tools</Link> — GPA/CGPA calculator and timetable</li>
          <li>A <Link href="/blog">blog</Link> with exam tips and scheme updates</li>
        </ul>

        <h2>Accuracy & official sources</h2>
        <p>
          We work to keep content accurate and aligned with the 2024 scheme, but KTUNODE
          is an independent project and is <strong>not officially affiliated with KTU</strong>.
          Always verify official regulations, dates, and results on the university&apos;s
          official channels.
        </p>

        <h2>Contact</h2>
        <p>
          Spotted an error or want to contribute? Email us at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </div>

      <section className="mt-12" aria-labelledby="about-faq">
        <h2 id="about-faq" className="text-2xl font-bold">Frequently Asked Questions</h2>
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
