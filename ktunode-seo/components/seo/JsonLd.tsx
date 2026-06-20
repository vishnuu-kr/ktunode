/**
 * components/seo/JsonLd.tsx
 * ---------------------------------------------------------------------------
 * Safely renders a JSON-LD object as a <script type="application/ld+json">.
 * Server component — no client JS shipped.
 *
 * Usage:
 *   import { JsonLd } from "@/components/seo/JsonLd";
 *   import { graph, faqSchema } from "@/components/seo/schema";
 *   <JsonLd data={graph(faqSchema(faqs))} />
 * ---------------------------------------------------------------------------
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify is XSS-safe for data we control; escape </script just in case.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
