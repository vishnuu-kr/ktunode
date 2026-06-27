/**
 * app/privacy/page.tsx  ->  /privacy
 * ---------------------------------------------------------------------------
 * Privacy Policy. Describes the site's ACTUAL data practices: privacy-friendly
 * product analytics (PostHog), no end-user accounts/logins, and local browser
 * storage for progress. Self-canonical + Breadcrumb schema.
 * ---------------------------------------------------------------------------
 */
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, breadcrumbSchema } from "@/components/seo/schema";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How KTUNODE handles your data: privacy-friendly analytics, no accounts or logins, and progress stored locally in your browser.",
  path: "/privacy",
});

const LAST_UPDATED = "27 June 2026";

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <JsonLd
        data={graph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy" },
          ])
        )}
      />

      <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>

      <div className="prose prose-neutral mt-6 max-w-none dark:prose-invert">
        <p>
          This Privacy Policy explains what information {siteConfig.name} (&quot;we&quot;,
          &quot;us&quot;) collects when you use this website, and how we use it. We keep
          this deliberately short and honest.
        </p>

        <h2>No accounts, no logins</h2>
        <p>
          {siteConfig.name} does not require you to create an account or log in to read
          notes, PYQs, or use the study tools. We do not ask for your name, email, or
          phone number to use the site.
        </p>

        <h2>Analytics</h2>
        <p>
          We use <strong>PostHog</strong>, a product-analytics tool, to understand which
          pages and features are used so we can improve the site. This collects
          aggregated, technical information such as pages visited, approximate region,
          device and browser type, and referring links. We use this only to improve
          {" "}{siteConfig.name} — we do not sell it. You can block analytics with any
          standard content/ad blocker without losing access to the content.
        </p>

        <h2>Data stored in your browser</h2>
        <p>
          Some features (such as reading progress, completed-topic checkmarks, and theme
          preference) are stored locally in your own browser using <code>localStorage</code>.
          This data stays on your device and is not sent to us. Clearing your browser data
          removes it.
        </p>

        <h2>Cookies</h2>
        <p>
          We do not use advertising cookies. Analytics may set privacy-friendly
          identifiers as described above. Administrative areas of the site use a strictly
          functional session cookie that is never set for regular visitors.
        </p>

        <h2>Third-party links</h2>
        <p>
          Pages may link to external resources (for example YouTube lectures or the
          official KTU website). Those services have their own privacy policies, which we
          do not control.
        </p>

        <h2>Children&apos;s privacy</h2>
        <p>
          {siteConfig.name} is an educational resource for university students and is not
          directed at children under 13. We do not knowingly collect personal information
          from children.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy as the site evolves. Material changes will be
          reflected by the &quot;Last updated&quot; date above.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about privacy? Email us at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. See also our{" "}
          <Link href="/terms">Terms of Use</Link> and{" "}
          <Link href="/disclaimer">Disclaimer</Link>.
        </p>
      </div>
    </main>
  );
}
