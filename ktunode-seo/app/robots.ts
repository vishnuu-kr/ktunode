/**
 * app/robots.ts  ->  generates /robots.txt
 * ---------------------------------------------------------------------------
 * Replaces your static robots file. Explicitly welcomes AI/answer-engine
 * crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) — essential for GEO/AEO,
 * because if these bots can't crawl you, you can't be cited in AI answers.
 * ---------------------------------------------------------------------------
 */
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Block private app surfaces & internals, NOT content pages.
        disallow: ["/api/", "/_next/", "/dashboard"],
      },
      // Answer & generative engines — allow full access to content.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" }, // Gemini / AI Overviews
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "DuckDuckBot", allow: "/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
