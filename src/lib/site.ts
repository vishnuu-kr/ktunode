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
    { code: "aeronautical-engineering", name: "Aeronautical Engineering", short: "AE" },
    { code: "agriculture-engineering", name: "Agriculture Engineering", short: "AG" },
    { code: "applied-electronics-and-instrumentation", name: "Applied Electronics and Instrumentation", short: "AEI" },
    { code: "artificial-intelligence", name: "Artificial Intelligence", short: "AI" },
    { code: "artificial-intelligence-and-machine-learning", name: "Artificial Intelligence & Machine Learning", short: "AIML" },
    { code: "artificial-intelligence-and-data-science", name: "Artificial Intelligence and Data Science", short: "AIDS" },
    { code: "automobile-engineering", name: "Automobile Engineering", short: "AU" },
    { code: "biomedical-and-robotic-engineering", name: "Biomedical & Robotic Engineering", short: "BRE" },
    { code: "biomedical-engineering", name: "Biomedical Engineering", short: "BE" },
    { code: "biotechnology-engineering", name: "Biotechnology Engineering", short: "BT" },
    { code: "biotechnology-and-biochemical-engineering", name: "Biotechnology and Biochemical Engineering", short: "BT" },
    { code: "chemical-engineering", name: "Chemical Engineering", short: "CH" },
    { code: "civil-engineering", name: "Civil Engineering", short: "CE" },
    { code: "civil-and-environmental-engineering", name: "Civil and Environmental Engineering", short: "CEE" },
    { code: "computer-science-and-business-systems", name: "Computer Science and Business Systems", short: "CSBS" },
    { code: "computer-science-and-design", name: "Computer Science and Design", short: "CSD" },
    { code: "computer-science-and-engineering", name: "Computer Science and Engineering", short: "CSE" },
    { code: "computer-science-and-engineering-ai-and-ml", name: "Computer Science and Engineering (AI & ML)", short: "CSE" },
    { code: "computer-science-and-engineering-artificial-intelligence", name: "Computer Science and Engineering (Artificial Intelligence)", short: "CSE" },
    { code: "computer-science-and-engineering-cyber-security", name: "Computer Science and Engineering (Cyber Security)", short: "CSE" },
    { code: "computer-science-and-engineering-data-science", name: "Computer Science and Engineering (Data Science)", short: "CSE" },
    { code: "computer-science-and-engineering-internet-of-things-and-cyber-security-including-blockchain-technology", name: "Computer Science and Engineering (Internet of Things and Cyber Security including Blockchain Technology)", short: "CSE" },
    { code: "computer-science-and-engineering-iot", name: "Computer Science and Engineering (IoT)", short: "CSE" },
    { code: "computer-science-and-engineering-and-business-systems", name: "Computer Science and Engineering and Business Systems", short: "CSE" },
    { code: "cyber-physical-systems", name: "Cyber Physical Systems", short: "CPS" },
    { code: "electrical-and-computer-engineering", name: "Electrical and Computer Engineering", short: "ECE" },
    { code: "electrical-and-electronics-engineering", name: "Electrical and Electronics Engineering", short: "EEE" },
    { code: "electronics-and-biomedical-engineering", name: "Electronics & Biomedical Engineering", short: "EBE" },
    { code: "electronics-and-communication-advanced-communication-technology", name: "Electronics & Communication (Advanced Communication Technology)", short: "ECAC" },
    { code: "electronics-and-communication-engineering", name: "Electronics & Communication Engineering", short: "ECE" },
    { code: "electronics-and-computer-engineering", name: "Electronics & Computer Engineering", short: "ECE" },
    { code: "electronics-engineering-vlsi-design-and-technology", name: "Electronics Engineering (VLSI Design and Technology)", short: "EEVL" },
    { code: "electronics-and-instrumentation", name: "Electronics and Instrumentation", short: "EI" },
    { code: "food-technology", name: "Food Technology", short: "FT" },
    { code: "industrial-engineering", name: "Industrial Engineering", short: "IE" },
    { code: "information-technology", name: "Information Technology", short: "IT" },
    { code: "instrumentation-and-control", name: "Instrumentation and Control", short: "IC" },
    { code: "mechanical-automobile-engineering", name: "Mechanical (Automobile) Engineering", short: "MAE" },
    { code: "mechanical-engineering", name: "Mechanical Engineering", short: "ME" },
    { code: "mechatronics-engineering", name: "Mechatronics Engineering", short: "MR" },
    { code: "naval-architecture-and-shipbuilding-engineering", name: "Naval Architecture & Shipbuilding Engineering", short: "NASE" },
    { code: "polymer-engineering", name: "Polymer Engineering", short: "PE" },
    { code: "production-engineering", name: "Production Engineering", short: "PE" },
    { code: "robotics-and-artificial-intelligence", name: "Robotics and Artificial Intelligence", short: "RAI" },
    { code: "robotics-and-automation", name: "Robotics and Automation", short: "RA" },
    { code: "safety-and-fire-engineering", name: "Safety & Fire Engineering", short: "SFE" },
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
