/**
 * lib/seo.ts
 * ---------------------------------------------------------------------------
 * Metadata helpers. Use `buildMetadata()` in every page's `generateMetadata`
 * (or exported `metadata`) so canonical URLs, Open Graph, and Twitter cards
 * are always correct and unique.
 *
 * KEY SEO FIX: every page gets a SELF-referencing canonical. Never point a
 * sub-page's canonical at the homepage (that was de-indexing your content).
 * ---------------------------------------------------------------------------
 */
import type { Metadata } from "next";
import { siteConfig, absoluteUrl } from "./site";

interface BuildMetaArgs {
  title?: string;            // page title WITHOUT brand suffix (template adds it)
  description?: string;
  /** Path only, e.g. "/notes" or "/blog/my-post". Used for canonical + OG url. */
  path: string;
  /** Override OG image (absolute or root-relative). Defaults to site OG image. */
  image?: string;
  /** Set true for app/private pages you do NOT want indexed (e.g. /dashboard). */
  noindex?: boolean;
  /** "article" for blog posts, else "website". */
  type?: "website" | "article";
  /** Article-only metadata. */
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  /** Title that already contains the brand — bypasses the template (no double suffix). */
  absoluteTitle?: string;
}

export function buildMetadata({
  title,
  description = siteConfig.description,
  path,
  image = siteConfig.ogImage,
  noindex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  tags,
  absoluteTitle,
}: BuildMetaArgs): Metadata {
  const canonical = absoluteUrl(path);
  const ogImageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    // metadataBase is set once in root layout; canonical stays self-referencing.
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical },
    robots: noindex
      ? { index: false, follow: false, nocache: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type,
      url: canonical,
      siteName: siteConfig.name,
      title: absoluteTitle ?? (title ? `${title} | ${siteConfig.name}` : siteConfig.defaultTitle),
      description,
      locale: siteConfig.locale,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title ?? siteConfig.name }],
      ...(type === "article"
        ? { publishedTime, modifiedTime, authors, tags }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitter,
      creator: siteConfig.twitter,
      title: absoluteTitle ?? (title ? `${title} | ${siteConfig.name}` : siteConfig.defaultTitle),
      description,
      images: [ogImageUrl],
    },
  };
}
