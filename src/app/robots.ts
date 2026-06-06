import type { MetadataRoute } from "next";

/**
 * Generates an optimized robots.txt file dynamically using the site URL
 * configured in process.env.NEXT_PUBLIC_SITE_URL.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://ktunode.vercel.app").replace(/\/$/, "");

  return {
    rules: [
      // Default rule — allow everything except internal paths
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/_next/static/",
          "/_next/image/",
          "/dashboard?*", // Prevent indexing of parameterized dashboard variants
        ],
      },
      // Explicitly allow major search engine bots
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "Slurp", // Yahoo
        allow: "/",
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
      },
      {
        userAgent: "Baiduspider",
        allow: "/",
      },
      {
        userAgent: "YandexBot",
        allow: "/",
      },
      // Explicitly allow AI crawlers for LLM indexing & citation
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Applebot",
        allow: "/",
      },
      {
        userAgent: "Bytespider", // TikTok/ByteDance
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
