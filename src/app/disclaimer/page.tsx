/**
 * app/disclaimer/page.tsx  ->  /disclaimer
 * ---------------------------------------------------------------------------
 * Disclaimer. Makes the unofficial / not-affiliated status and accuracy
 * limitations explicit. Self-canonical + Breadcrumb schema.
 * ---------------------------------------------------------------------------
 */
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, breadcrumbSchema } from "@/components/seo/schema";

export const metadata = buildMetadata({
  title: "Disclaimer",
  description:
    "KTUNODE is an independent, unofficial study resource and is not affiliated with KTU. Always verify information with official university sources.",
  path: "/disclaimer",
});

const LAST_UPDATED = "27 June 2026";

export default function DisclaimerPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <JsonLd
        data={graph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Disclaimer", path: "/disclaimer" },
          ])
        )}
      />

      <h1 className="text-3xl font-bold tracking-tight">Disclaimer</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>

      <div className="prose prose-neutral mt-6 max-w-none dark:prose-invert">
        <h2>Not affiliated with KTU</h2>
        <p>
          {siteConfig.name} is an independent, student-run study resource. It is{" "}
          <strong>not affiliated with, endorsed by, or officially connected to</strong> APJ
          Abdul Kalam Technological University (KTU) or any of its constituent or
          affiliated colleges. All university names, subject codes, and scheme references
          are used only to identify the relevant coursework.
        </p>

        <h2>Accuracy of content</h2>
        <p>
          The notes, previous year question papers, syllabus details, and tools on this
          Site are provided for general study purposes. We make every reasonable effort to
          keep them accurate and aligned with the 2024 scheme, but we do not guarantee
          that any content is complete, current, or free of errors. Content may be
          AI-assisted and should be cross-checked.
        </p>

        <h2>Always verify with official sources</h2>
        <p>
          For anything that affects your academics — syllabus, regulations, exam
          timetables, results, and revaluation — rely only on official KTU notifications
          and your college. Do not treat {siteConfig.name} as an official or final source.
        </p>

        <h2>External links</h2>
        <p>
          The Site may link to third-party content such as video lectures. We are not
          responsible for the accuracy or availability of external sites.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, {siteConfig.name} and its contributors
          are not liable for any loss or consequence resulting from the use of, or
          reliance on, the content of this Site.
        </p>

        <h2>Report an error</h2>
        <p>
          Found something wrong? Please tell us at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> so we can fix it.
          See also our <Link href="/terms">Terms of Use</Link> and{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </div>
    </main>
  );
}
