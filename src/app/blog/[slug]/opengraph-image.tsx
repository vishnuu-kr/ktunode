/**
 * app/blog/[slug]/opengraph-image.tsx
 * ---------------------------------------------------------------------------
 * Auto-generates a unique 1200x630 social share image PER blog post using the
 * post title. Better CTR on X/LinkedIn/WhatsApp + a richer card for AI engines.
 * No external service — rendered at the edge by Next.js (Satori/ImageResponse).
 * ---------------------------------------------------------------------------
 */
import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs"; // needs fs access for getPostBySlug
export const alt = "KTUNODE blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const title = post?.title ?? "KTUNODE Blog";
  const category = post?.category ?? "KTU 2024 Scheme";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0b0f19 0%, #11203a 100%)",
          color: "white",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#2E95FF", fontWeight: 700 }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 26, textTransform: "uppercase", letterSpacing: 4, color: "#9fb4d4" }}>
            {category}
          </div>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, maxWidth: 1000 }}>
            {title}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#9fb4d4" }}>
          ktunode.vercel.app · KTU 2024 Scheme
        </div>
      </div>
    ),
    { ...size }
  );
}
