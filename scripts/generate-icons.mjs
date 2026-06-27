/**
 * scripts/generate-icons.mjs
 * ---------------------------------------------------------------------------
 * Generates the PWA + favicon assets referenced by app/manifest.ts and
 * app/layout.tsx from the existing brand logo (public/logo.webp).
 *
 * Outputs (public/):
 *   - icon-192.png        (192x192)  -> manifest
 *   - icon-512.png        (512x512)  -> manifest (any + maskable)
 *   - apple-touch-icon.png (180x180) -> iOS home screen
 *   - favicon.ico         (32x32)    -> browser tab
 *
 * Run once after changing the logo:  node scripts/generate-icons.mjs
 * Uses `sharp` (already a project dependency). Assets are committed as static
 * files — there is no build-time dependency on this script.
 * ---------------------------------------------------------------------------
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const source = path.join(publicDir, "logo.webp");

if (!fs.existsSync(source)) {
  console.error(`[generate-icons] Source not found: ${source}`);
  process.exit(1);
}

// Transparent-padded square render so the logo never gets cropped/stretched.
function squareIcon(size) {
  return sharp(source)
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png();
}

const tasks = [
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
  { name: "apple-touch-icon.png", size: 180 },
];

const run = async () => {
  for (const { name, size } of tasks) {
    const out = path.join(publicDir, name);
    await squareIcon(size).toFile(out);
    console.log(`[generate-icons] wrote ${name} (${size}x${size})`);
  }

  // favicon.ico — sharp writes a single-image 32x32 ICO.
  const favOut = path.join(publicDir, "favicon.ico");
  await sharp(source)
    .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFormat("ico")
    .toFile(favOut)
    .catch(async () => {
      // Fallback: some sharp builds lack ICO encoder — emit a PNG-backed .ico.
      await squareIcon(32).toFile(favOut);
    });
  console.log("[generate-icons] wrote favicon.ico (32x32)");
};

run().then(() => console.log("[generate-icons] done.")).catch((e) => {
  console.error("[generate-icons] failed:", e);
  process.exit(1);
});
