/**
 * app/layout.tsx  (ROOT LAYOUT — reference implementation)
 * ---------------------------------------------------------------------------
 * Merge the `metadata`, `viewport`, and global <JsonLd> into YOUR existing root
 * layout. The big wins here:
 *   1. metadataBase set ONCE -> all relative OG/canonical URLs resolve correctly
 *   2. title.template uses "%s | KTUNODE" AND the homepage uses `default`
 *      (no more "| KTUNODE | KTUNODE" double-suffix bug)
 *   3. Global Organization + WebSite + EducationalOrganization JSON-LD
 *   4. Single manifest reference (fixes the manifest/favicon 404s)
 * ---------------------------------------------------------------------------
 */
import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  graph,
  organizationSchema,
  webSiteSchema,
  educationalOrgSchema,
} from "@/components/seo/schema";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle, // homepage: NO suffix appended
    template: siteConfig.titleTemplate, // sub-pages: "Page Title | KTUNODE"
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/", // homepage self-canonical; sub-pages override via buildMetadata
    types: { "application/rss+xml": [{ url: "/feed.xml", title: "KTUNODE Blog" }] },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.webp", type: "image/webp" },
    ],
    apple: "/logo.webp",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitter,
    creator: siteConfig.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  // Verification codes — paste from Google Search Console & Bing Webmaster Tools.
  verification: {
    // google: "PASTE_GSC_TOKEN",
    // other: { "msvalidate.01": "PASTE_BING_TOKEN" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteConfig.themeColor.light },
    { media: "(prefers-color-scheme: dark)", color: siteConfig.themeColor.dark },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteConfig.language}>
      <body>
        {/* Site-wide structured data — render once, here. */}
        <JsonLd
          data={graph(organizationSchema(), webSiteSchema(), educationalOrgSchema())}
        />
        {children}
      </body>
    </html>
  );
}
