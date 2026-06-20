/**
 * lib/site.ts
 * ---------------------------------------------------------------------------
 * Single source of truth for site-wide constants used by metadata, sitemaps,
 * structured data (JSON-LD), the blog, robots.txt and llms.txt.
 *
 * Update the values marked `// TODO` with your real details.
 * ---------------------------------------------------------------------------
 */

export const siteConfig = {
  name: "KTUNODE",
  shortName: "KTUNode",
  // Absolute, no trailing slash. Change to your custom domain when you buy one.
  url: "https://ktunode.vercel.app",

  // Default homepage title (brand appended automatically by the template)
  defaultTitle: "KTU Notes, Syllabus & PYQs — 2024 Scheme",
  titleTemplate: "%s | KTUNODE",

  description:
    "Free module-wise KTU notes, previous year question papers (PYQs), and a syllabus tracker for the APJ Abdul Kalam Technological University 2024 B.Tech scheme. CS, EC, ME, CE, EE — all semesters covered.",

  tagline: "Master the KTU Semester — notes, PYQs & syllabus, all free.",

  // Open Graph / social share image (1200x630 recommended)
  ogImage: "/og-main.webp",
  logo: "/logo.webp",

  locale: "en_IN",
  language: "en",

  themeColor: { light: "#f8fafc", dark: "#0b0f19" },

  // TODO: set your real handles (used in JSON-LD + twitter cards)
  twitter: "@ktunode",
  authorName: "KTUNODE Team",
  authorUrl: "https://ktunode.vercel.app/about",
  // TODO: add real profile links you own — strengthens E-E-A-T + sameAs
  social: [
    "https://www.instagram.com/ktunode",
    "https://t.me/ktunode",
    "https://www.youtube.com/@ktunode",
  ],

  email: "trendingreelsandviral@gmail.com", // TODO: replace with a support@ address

  // B.Tech branches you cover (drive sitemap + internal linking + schema)
  branches: [
    { code: "cs", name: "Computer Science & Engineering", short: "CSE" },
    { code: "ec", name: "Electronics & Communication", short: "ECE" },
    { code: "me", name: "Mechanical Engineering", short: "ME" },
    { code: "ce", name: "Civil Engineering", short: "CE" },
    { code: "ee", name: "Electrical & Electronics", short: "EEE" },
  ],
  // Semesters available per branch
  semesters: [1, 2, 3, 4, 5, 6, 7, 8],
} as const;

export type BranchCode = (typeof siteConfig.branches)[number]["code"];

/** Build an absolute URL from a path. Always use this for canonical/OG URLs. */
export function absoluteUrl(path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${clean === "/" ? "" : clean}`;
}
