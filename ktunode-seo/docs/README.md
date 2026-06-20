# KTUNODE — SEO / AEO / GEO + Blog Package

A complete, drop-in setup for **ktunode.vercel.app** (Next.js App Router) that fixes
every issue from the audit and adds a production-grade blog optimized for:

- **SEO** — search engines (Google, Bing)
- **AEO** — Answer Engines (Google AI Overviews, "People Also Ask", Bing Copilot)
- **GEO** — Generative Engines (ChatGPT, Perplexity, Claude, Gemini)

---

## 1. Install dependencies

```bash
npm install next-mdx-remote gray-matter reading-time
# optional (for blog typography):
npm install -D @tailwindcss/typography
```

If you add typography, register it in `tailwind.config.{js,ts}`:
```js
plugins: [require("@tailwindcss/typography")],
```

> `next/og` (dynamic OG images) is built into Next.js — no install needed.

## 2. Confirm the `@/` import alias

These files import via `@/lib/...` and `@/components/...`. Make sure `tsconfig.json`
(or `jsconfig.json`) has:
```json
{ "compilerOptions": { "paths": { "@/*": ["./*"] } } }
```
If your alias differs (e.g. `@/* -> ./src/*`), adjust the import paths or move files into `src/`.

## 3. Copy files into your repo

| Package file | Goes to | Notes |
|---|---|---|
| `lib/site.ts` | `lib/site.ts` | **Edit the TODOs** (Twitter, socials, email). |
| `lib/seo.ts` | `lib/seo.ts` | Metadata builder. |
| `lib/blog.ts` | `lib/blog.ts` | MDX blog loader. |
| `components/seo/schema.ts` | same | JSON-LD builders. |
| `components/seo/JsonLd.tsx` | same | Renders JSON-LD. |
| `components/blog/mdx-components.tsx` | same | MDX element styling. |
| `app/robots.ts` | `app/robots.ts` | **Delete old `public/robots.txt`.** |
| `app/sitemap.ts` | `app/sitemap.ts` | **Delete old static `sitemap.xml`.** |
| `app/manifest.ts` | `app/manifest.ts` | **Delete old `manifest.json` / link.** |
| `app/llms.txt/route.ts` | same | GEO file at `/llms.txt`. |
| `app/feed.xml/route.ts` | same | RSS at `/feed.xml`. |
| `app/blog/**` | `app/blog/**` | Blog index, posts, categories, OG images. |
| `app/layout.tsx` | merge into your root layout | Don't blindly overwrite — merge `metadata`, `viewport`, `<JsonLd>`. |
| `app/notes/page.tsx` | reference | Pattern for self-canonical + FAQ. |
| `app/[branch]/sem-[sem]/page.tsx` | reference | Fixes the double-title bug. |
| `app/dashboard/layout.tsx` | `app/dashboard/layout.tsx` | Makes dashboard `noindex`. |
| `content/blog/*.mdx` | `content/blog/` | 9 ready-to-publish, SEO-targeted posts. |
| `app/about/page.tsx` | `app/about/page.tsx` | E-E-A-T about page (edit the TODO copy). |
| `public/*` | `public/` | favicon set + logo (fixes 404s). |

## 4. Favicon & icons (ALREADY INCLUDED ✅)

The audit's `/favicon.ico` and manifest 404s are fixed — copy everything from this
package's `public/` folder into your repo's `public/`:
`favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`,
`icon-192.png`, `icon-512.png`, and the new `logo.webp` (replaces the old 6 KB one).
The `<head>` links and manifest references are already wired up. See `public/README.md`.

## 5. Deploy & verify

1. `npm run build && npm run start` locally — check `/sitemap.xml`, `/robots.txt`,
   `/manifest.webmanifest`, `/llms.txt`, `/feed.xml`, `/blog`.
2. Deploy to Vercel.
3. **Google Search Console:** add the property, paste the verification token into
   `layout.tsx` `metadata.verification.google`, submit `/sitemap.xml`.
4. **Bing Webmaster Tools:** same, paste token into `metadata.verification.other`.
5. Test rich results: <https://search.google.com/test/rich-results> for `/`, a
   blog post, and a `/cs/sem-1` page — you should see Organization, FAQ, Article,
   BreadcrumbList, Course.

---

## What this fixes (from the audit)

| Audit issue | Fix in this package |
|---|---|
| 🔴 Canonicals all pointed to homepage | `buildMetadata()` self-canonicals every page |
| 🔴 Duplicate titles/descriptions | Unique `title`/`description` per route + template |
| 🔴 `/syllabus` & `/pyqs` in sitemap but redirect | `sitemap.ts` lists only real 200-OK URLs |
| 🔴 `| KTUNODE | KTUNODE` double suffix | `absoluteTitle` bypasses the template |
| 🔴 Client-only HTML (no h1/links in source) | Pages are SSR/SSG; blog is fully static |
| 🟠 Missing `<h1>` on key pages | Examples add a single descriptive H1 |
| 🟠 favicon / manifest 404s | `manifest.ts` + favicon step |
| 🟠 Dashboard indexable | `dashboard/layout.tsx` → noindex |

## AEO wins
- `FAQPage` + `HowTo` schema, plus **visible** Q&A blocks (engines reward matching
  visible content). Write descriptions and intros **answer-first**.

## GEO wins
- `/llms.txt` curated map for LLMs, AI crawlers explicitly allowed in `robots.ts`,
  clean semantic HTML, `Article` schema with author + dates for citability.

## Ongoing: how to add a blog post
Create `content/blog/my-slug.mdx` with frontmatter (copy an existing post). It
auto-appears in `/blog`, the sitemap, RSS, and `llms.txt`. Keep `description`
answer-first and fill the `faqs` array for rich results.
