/**
 * app/terms/page.tsx  ->  /terms
 * ---------------------------------------------------------------------------
 * Terms of Use. Plain-language terms for a free, no-account study site:
 * content is a study aid (verify against official KTU), acceptable use, IP,
 * and no-warranty. Self-canonical + Breadcrumb schema.
 * ---------------------------------------------------------------------------
 */
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, breadcrumbSchema } from "@/components/seo/schema";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description:
    "The terms for using KTUNODE — a free, unofficial KTU study resource. Content is a study aid; always verify with official KTU sources.",
  path: "/terms",
});

const LAST_UPDATED = "27 June 2026";

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <JsonLd
        data={graph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Terms of Use", path: "/terms" },
          ])
        )}
      />

      <h1 className="text-3xl font-bold tracking-tight">Terms of Use</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>

      <div className="prose prose-neutral mt-6 max-w-none dark:prose-invert">
        <p>
          By using {siteConfig.name} (the &quot;Site&quot;), you agree to these Terms of
          Use. If you do not agree, please do not use the Site.
        </p>

        <h2>1. Study aid, not an official source</h2>
        <p>
          {siteConfig.name} provides notes, previous year question papers, syllabus
          information, and study tools for the KTU 2024 scheme as a <strong>study aid</strong>.
          We are an independent project and are <strong>not affiliated with APJ Abdul
          Kalam Technological University</strong>. Always verify syllabus, regulations,
          exam dates, and results against official KTU sources before relying on them.
        </p>

        <h2>2. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>attempt to disrupt, overload, or gain unauthorized access to the Site or its admin areas;</li>
          <li>scrape or redistribute content at scale in a way that misrepresents it as official; or</li>
          <li>use the Site for any unlawful purpose.</li>
        </ul>

        <h2>3. Intellectual property</h2>
        <p>
          Original layout, design, and compiled study material on {siteConfig.name} are
          provided for personal, educational use. Subject names, codes, and syllabus
          structure belong to the university. You may use the material to study; please do
          not pass it off as your own official publication.
        </p>

        <h2>4. Free service &amp; availability</h2>
        <p>
          The Site is provided free of charge and &quot;as is&quot;. We may change, pause,
          or remove features at any time, and we do not guarantee uninterrupted
          availability.
        </p>

        <h2>5. No warranty</h2>
        <p>
          While we work to keep content accurate, we make no warranty that it is complete,
          current, or error-free. To the maximum extent permitted by law, {siteConfig.name}
          is not liable for any loss arising from reliance on the content — including
          academic outcomes. See our <Link href="/disclaimer">Disclaimer</Link>.
        </p>

        <h2>6. Changes to these terms</h2>
        <p>
          We may update these Terms from time to time; the &quot;Last updated&quot; date
          above reflects the latest version.
        </p>

        <h2>7. Contact</h2>
        <p>
          Questions? Email{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. See also our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </div>
    </main>
  );
}
