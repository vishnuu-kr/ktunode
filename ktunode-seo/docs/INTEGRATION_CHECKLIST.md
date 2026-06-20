# Integration Checklist

Tick these off in order. ~30–45 min total.

## Setup
- [ ] `npm install next-mdx-remote gray-matter reading-time`
- [ ] (optional) `npm install -D @tailwindcss/typography` + add to tailwind plugins
- [ ] Confirm `@/*` path alias in tsconfig/jsconfig

## Edit before deploy
- [ ] `lib/site.ts` → set real `twitter`, `social[]`, `email`, confirm `url`
- [ ] `lib/site.ts` → confirm `branches[]` + `semesters[]` match what you actually publish
- [ ] Verify `SearchAction` target in `schema.ts` points to a real search URL

## Copy files
- [ ] lib/ (site, seo, blog)
- [ ] components/seo/ + components/blog/
- [ ] app/robots.ts  → delete old public/robots.txt
- [ ] app/sitemap.ts → delete old static sitemap
- [ ] app/manifest.ts → delete old manifest.json + remove old <link rel=manifest>
- [ ] app/llms.txt/route.ts
- [ ] app/feed.xml/route.ts
- [ ] app/blog/** (index, [slug], category, opengraph-image)
- [ ] Merge app/layout.tsx into your existing root layout
- [ ] app/dashboard/layout.tsx (noindex)
- [ ] content/blog/*.mdx

## Fix existing pages (apply the example patterns)
- [ ] Every content page uses `buildMetadata({ path: "/its-own-path" })` (self-canonical)
- [ ] Remove any hardcoded canonical pointing to the homepage
- [ ] Each page has exactly ONE `<h1>`
- [ ] /dashboard, /syllabus, /pyqs are NOT in the sitemap if they redirect
- [ ] Branch/sem pages use `absoluteTitle` (no double brand suffix)
- [ ] Add public/favicon.ico

## Verify after deploy
- [ ] /robots.txt loads and lists the sitemap
- [ ] /sitemap.xml lists real URLs only (open a few — none should 3xx)
- [ ] /manifest.webmanifest loads (200)
- [ ] /llms.txt loads (200)
- [ ] /feed.xml loads (200)
- [ ] /blog renders the 3 sample posts
- [ ] View-source of a blog post shows the H1, text, and JSON-LD in raw HTML (SSR)
- [ ] Rich Results Test passes for: homepage, a blog post, a /cs/sem-1 page
- [ ] Google Search Console property added + sitemap submitted + token pasted
- [ ] Bing Webmaster Tools added + token pasted

## Nice-to-have next
- [ ] Add an /about page (E-E-A-T: who runs KTUNODE, sources)
- [ ] Internal-link blog posts ↔ relevant /notes and /branch/sem pages
- [ ] Compress hero-bg.webp (247 KB) + serve responsive sizes via next/image
- [ ] Buy a custom domain (ktunode.com) — stronger trust than *.vercel.app
