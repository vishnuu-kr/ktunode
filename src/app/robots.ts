import type { MetadataRoute } from "next";

const BASE_URL = "https://ktunode.com";

/**
 * Generates an optimized robots.txt that:
 * - Allows all major search engine crawlers (Googlebot, Bingbot, etc.)
 * - Explicitly allows AI bots (GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, etc.)
 * - Blocks internal/framework paths that shouldn't be indexed
 * - Points crawlers to the sitemap
 *
 * Next.js serves this at /robots.txt at build time.
 */
export default function robots(): MetadataRoute.Robots {
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
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
