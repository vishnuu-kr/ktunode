# public/ assets (generated)

These brand/icon files are ready to drop into your Next.js `public/` folder.
They fix the favicon/manifest 404s found in the audit.

| File | Purpose |
|---|---|
| `favicon.ico` | Classic favicon (16/32/48/64 multi-res). Fixes the `/favicon.ico` 404. |
| `favicon-16x16.png`, `favicon-32x32.png` | Modern PNG favicons. |
| `apple-touch-icon.png` (180×180) | iOS home-screen icon. |
| `icon-192.png`, `icon-512.png` | PWA manifest icons (referenced by `app/manifest.ts`). |
| `logo.webp` (512×512) | Brand logo used in JSON-LD Organization schema + sharing. Replaces the old 6 KB logo. |

`favicon.ico` and the PNGs in `public/` are auto-served by Next.js at the site root.
The `<head>` links + manifest references are already wired in `app/layout.tsx` and
`app/manifest.ts`.

> Want a transparent-background version or different brand colors? Regenerate from
> your source art and re-export the same filenames.
