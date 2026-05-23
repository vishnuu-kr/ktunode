import type { MetadataRoute } from "next";

const BASE_URL = "https://ktunode.com";

/**
 * Automated sitemap generation based on the app's routing structure.
 * Next.js serves this at /sitemap.xml at build time.
 *
 * Routes:
 *   /            — Landing page (highest priority)
 *   /dashboard   — Main app interface (notes, syllabus, PYQs)
 *   /notes       — Notes entry point (redirects to dashboard)
 *   /syllabus    — Syllabus entry point (redirects to dashboard)
 *   /pyqs        — PYQs entry point (redirects to dashboard)
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static routes derived from src/app directory structure
  const routes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/dashboard`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/notes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/syllabus`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pyqs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  return routes;
}
