/**
 * app/manifest.ts  ->  generates /manifest.webmanifest
 * ---------------------------------------------------------------------------
 * PWA manifest as code (replaces static manifest.json). Keep ONE manifest to
 * avoid the 404s found in the audit (site.webmanifest was missing).
 * Link it in layout via metadata: { manifest: "/manifest.webmanifest" }.
 * ---------------------------------------------------------------------------
 */
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KTUNode Study Hub",
    short_name: siteConfig.shortName,
    description:
      "Free module-wise KTU notes, syllabus tracker, and past questions for the 2024 scheme.",
    start_url: "/dashboard",
    display: "standalone",
    background_color: siteConfig.themeColor.dark,
    theme_color: "#2E95FF",
    orientation: "portrait-primary",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
