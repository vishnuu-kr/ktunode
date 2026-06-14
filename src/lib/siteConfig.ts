import fs from "fs";
import path from "path";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://ktunode.vercel.app").replace(/\/$/, "");

export interface SiteConfig {
  siteName: string;
  maintenanceMode: boolean;
  activeScheme: string;
  allowedBranches: string[];
  visibleSemesters: number[];
  activeTools: {
    attendance: boolean;
    gpa: boolean;
    runway: boolean;
    lab: boolean;
  };
  externalLinks: {
    studentLogin: string;
    ktuPortal: string;
  };
  bannerText: string;
  bannerEnabled: boolean;
  bannerSeverity: "info" | "warning" | "success" | "danger";
  bannerDismissible: boolean;
  bannerStart: string;
  bannerEnd: string;
  primaryAccent: string;
  lockdownMode: boolean;
  lockdownPasscode: string;
  minAttendance: number;
  minCie: number;
  activityPointsLimit: number;
  progressionS5Credits: number;
  progressionS7Credits: number;
  examStartDate: string;
  timetableOverrides: Record<string, unknown[]>;
  landingPageSections: {
    compare: boolean;
    howItWorks: boolean;
    foundree: boolean;
    features: boolean;
    testimonials: boolean;
    faqs: boolean;
    cta: boolean;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  customFaqs: { q: string; a: string }[];
  quickLinks: { title: string; url: string; category: string }[];
  landingContent: {
    hero: {
      badge: string;
      headline: string;
      subtitle: string;
      ctaText: string;
      trustBadges: { label: string; value: string }[];
    };
    compare: {
      badge: string;
      headline: string;
      description: string;
      bullets: string[];
      ctaText: string;
    };
    howItWorks: {
      badge: string;
      headline: string;
      description: string;
      ctaText: string;
      steps: { title: string; description: string }[];
    };
    founders: {
      badge: string;
      headlinePrefix: string;
      body: string;
      rotatingWords: string[];
      stats: { value: string; label: string }[];
      ctaText: string;
    };
    features: {
      badge: string;
      headline: string;
      description: string;
      cards: { title: string; description: string }[];
      zeroFrictionTitle: string;
      zeroFrictionDescription: string;
      launchCtaText: string;
    };
    testimonials: {
      badge: string;
      headline: string;
      description: string;
      entries: { name: string; branch: string; rating: number; quote: string; text: string; color: string }[];
    };
    cta: {
      badge: string;
      headline: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
      stats: { value: string; label: string }[];
    };
    footer: {
      heading: string;
      attribution: string;
      attributionUrl: string;
      marquee: string[];
    };
  };
  testimonials: { name: string; branch: string; rating: number; quote: string; text: string; color: string }[];
}

export const siteConfigPath = path.join(process.cwd(), "constants", "site-config.json");

export const defaultSiteConfig: SiteConfig = {
  siteName: "KTU Node",
  maintenanceMode: false,
  activeScheme: "2024 Scheme",
  allowedBranches: ["cs"],
  visibleSemesters: [1, 2, 3, 4, 5, 6, 7, 8],
  activeTools: {
    attendance: true,
    gpa: true,
    runway: true,
    lab: true,
  },
  externalLinks: {
    studentLogin: "https://app.ktu.edu.in",
    ktuPortal: "https://ktu.edu.in",
  },
  bannerText: "",
  bannerEnabled: false,
  bannerSeverity: "info",
  bannerDismissible: true,
  bannerStart: "",
  bannerEnd: "",
  primaryAccent: "blue",
  lockdownMode: false,
  lockdownPasscode: "",
  minAttendance: 75,
  minCie: 40,
  activityPointsLimit: 120,
  progressionS5Credits: 26,
  progressionS7Credits: 52,
  examStartDate: "2026-07-15",
  timetableOverrides: {},
  landingPageSections: {
    compare: true,
    howItWorks: true,
    foundree: true,
    features: true,
    testimonials: true,
    faqs: true,
    cta: true,
  },
  seo: {
    title: "KTU Notes, Syllabus & PYQs - 2024 Scheme | KTUNODE",
    description:
      "Free module-wise KTU notes, previous year question papers, and syllabus tracker for the 2024 B.Tech scheme. CS, EC, ME, CE, EE - all semesters covered.",
    keywords:
      "KTU notes, KTU syllabus 2024 scheme, KTU previous year question papers, KTU B.Tech notes, KTU study materials, KTU PYQ, KTU S1 notes, KTU S2 notes, KTU S3 notes, KTU CSE notes 2024, KTU model question papers, KTU module wise notes, APJ Abdul Kalam Technological University syllabus, KTU exam preparation, KTUNODE, KTU 2024 scheme subjects, KTU chapter wise notes, Kerala Technological University",
  },
  customFaqs: [],
  quickLinks: [],
  landingContent: {
    hero: {
      badge: "Built for KTU",
      headline: "Master the KTU Semester.",
      subtitle: "Notes, PYQs, and syllabus tracking — all free, designed for the 2024 KTU scheme.",
      ctaText: "Open Dashboard",
      trustBadges: [
        { label: "Free, always", value: "Free" },
        { label: "2024 Scheme", value: "2024" },
        { label: "No account needed", value: "Instant" },
      ],
    },
    compare: {
      badge: "Before vs After",
      headline: "From Chaos to Clarity.",
      description: "Stop digging through dense, cluttered university material. KTUNODE transforms KTU content into focused, exam-ready resources.",
      bullets: ["Module-by-module structure", "Exam-focused content only", "Updated for 2024 scheme"],
      ctaText: "Browse Notes",
    },
    howItWorks: {
      badge: "How it works",
      headline: "Study smarter in 3 steps.",
      description: "Instant access to exam-ready resources. No account, no clutter.",
      ctaText: "Start Now — It's Free",
      steps: [
        { title: "Pick branch & semester", description: "Select CS, EC, ME, CE, or EE and your current semester." },
        { title: "Access core resources", description: "Chapter-wise notes, model papers, and syllabus tracker — all in one place." },
        { title: "Track & ace exams", description: "Mark modules complete, audit what's left, and walk into exams confident." },
      ],
    },
    founders: {
      badge: "Our Philosophy",
      headlinePrefix: "Education should be an act of",
      body: "The chaos of unstructured materials, dense textbooks, and scattered notes is replaced by singular clarity. KTUNODE exists to give every KTU student the structure they deserve.",
      rotatingWords: ["clarity", "structure", "focus", "precision", "mastery"],
      stats: [
        { value: "98%", label: "Exam Coverage" },
        { value: "5", label: "Branches" },
        { value: "8", label: "Semesters" },
        { value: "Free", label: "Always" },
      ],
      ctaText: "Start Studying Free",
    },
    features: {
      badge: "Features",
      headline: "Everything you need to ace KTU.",
      description: "Built specifically for the 2024 KTU scheme with exam-focused resources.",
      cards: [
        { title: "Chapter-wise Notes", description: "Syllabus topics stripped of filler and packed with the diagrams, code, and formulas you need." },
        { title: "Focus Study Timer", description: "Engage learning sessions with the integrated Pomodoro clock to maximize focus." },
        { title: "Live Progress Tracker", description: "Mark modules complete as you learn and see your coverage grow in real time." },
        { title: "Model Question Papers", description: "Get ready for exams using dedicated, syllabus-matched model question papers." },
      ],
      zeroFrictionTitle: "No Accounts. No payments. Just learn.",
      zeroFrictionDescription: "We believe learning resources should be open and friction-free. Start studying in one click.",
      launchCtaText: "Skip Signup & Launch",
    },
    testimonials: {
      badge: "Loved by students",
      headline: "Loved by KTU students.",
      description: "KTU students across every branch use KTUNODE to study smarter.",
      entries: [
        { name: "Arjun Menon", branch: "Computer Science — Sem 6", rating: 5, quote: "KTUNODE replaced all my PDF chaos.", text: "The module-wise structure makes it so easy to find exactly what I need before exams.", color: "blue" },
        { name: "Priya Krishnan", branch: "Electronics — Sem 4", rating: 5, quote: "Finally, KTU notes that make sense.", text: "The syllabus tracker keeps me on track and the notes are perfectly organized.", color: "violet" },
        { name: "Rahul Suresh", branch: "Mechanical — Sem 8", rating: 5, quote: "Wish I had this from S1.", text: "Used it for my entire final year. The PYQ collection is unmatched.", color: "emerald" },
        { name: "Anjali Nair", branch: "Civil — Sem 5", rating: 5, quote: "The progress tracker is a game changer.", text: "I can see exactly which modules I've covered and what's left. No more guessing.", color: "amber" },
        { name: "Vishnu Das", branch: "Electrical — Sem 3", rating: 5, quote: "Best KTU resource out there.", text: "Clean, fast, and completely free. What more could you ask for?", color: "rose" },
        { name: "Sneha Pillai", branch: "Computer Science — Sem 7", rating: 5, quote: "The focus timer changed how I study.", text: "Pomodoro sessions with structured notes = maximum productivity.", color: "cyan" },
      ],
    },
    cta: {
      badge: "Free for all KTU students",
      headline: "Ready to ace your next semester?",
      description: "Structured notes, real PYQs, and a syllabus tracker built for the 2024 scheme. Start now — it's free.",
      primaryCta: "Open Dashboard",
      secondaryCta: "Browse Notes",
      stats: [
        { value: "Free", label: "Always free" },
        { value: "2024", label: "Scheme updated" },
        { value: "Instant", label: "To get started" },
      ],
    },
    footer: {
      heading: "Ace KTU Exams with KTU Node.",
      attribution: "Built by foundree.dev",
      attributionUrl: "https://foundree.dev",
      marquee: ["2024 SCHEME UPDATED", "SMART DASHBOARD", "SYLLABUS TRACKER", "CHAPTER-WISE PYQS", "INSTANT RESOURCE SEARCH"],
    },
  },
  testimonials: [],
};

function asArray<T>(value: unknown, fallback: T[]): T[] {
  return Array.isArray(value) ? (value as T[]) : fallback;
}

function asNumber(value: unknown, fallback: number): number {
  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function asBoolean(value: unknown, fallback: boolean): boolean {
  return typeof value === "boolean" ? value : fallback;
}

function asString(value: unknown, fallback: string): string {
  return typeof value === "string" ? value : fallback;
}

function asBannerSeverity(value: unknown): SiteConfig["bannerSeverity"] {
  if (value === "warning" || value === "success" || value === "danger") {
    return value;
  }
  if (value === "error") {
    return "danger";
  }
  return "info";
}

function normalizeLandingContent(input: unknown): SiteConfig["landingContent"] {
  const d = defaultSiteConfig.landingContent;
  if (!input || typeof input !== "object") return d;
  const ic = input as Record<string, any>;

  const hero = ic.hero && typeof ic.hero === "object" ? ic.hero : {};
  const compare = ic.compare && typeof ic.compare === "object" ? ic.compare : {};
  const howItWorks = ic.howItWorks && typeof ic.howItWorks === "object" ? ic.howItWorks : {};
  const founders = ic.founders && typeof ic.founders === "object" ? ic.founders : {};
  const features = ic.features && typeof ic.features === "object" ? ic.features : {};
  const testimonials = ic.testimonials && typeof ic.testimonials === "object" ? ic.testimonials : {};
  const cta = ic.cta && typeof ic.cta === "object" ? ic.cta : {};
  const footer = ic.footer && typeof ic.footer === "object" ? ic.footer : {};

  return {
    hero: {
      badge: asString(hero.badge, d.hero.badge),
      headline: asString(hero.headline, d.hero.headline),
      subtitle: asString(hero.subtitle, d.hero.subtitle),
      ctaText: asString(hero.ctaText, d.hero.ctaText),
      trustBadges: asArray(hero.trustBadges, d.hero.trustBadges),
    },
    compare: {
      badge: asString(compare.badge, d.compare.badge),
      headline: asString(compare.headline, d.compare.headline),
      description: asString(compare.description, d.compare.description),
      bullets: asArray(compare.bullets, d.compare.bullets),
      ctaText: asString(compare.ctaText, d.compare.ctaText),
    },
    howItWorks: {
      badge: asString(howItWorks.badge, d.howItWorks.badge),
      headline: asString(howItWorks.headline, d.howItWorks.headline),
      description: asString(howItWorks.description, d.howItWorks.description),
      ctaText: asString(howItWorks.ctaText, d.howItWorks.ctaText),
      steps: asArray(howItWorks.steps, d.howItWorks.steps),
    },
    founders: {
      badge: asString(founders.badge, d.founders.badge),
      headlinePrefix: asString(founders.headlinePrefix, d.founders.headlinePrefix),
      body: asString(founders.body, d.founders.body),
      rotatingWords: asArray(founders.rotatingWords, d.founders.rotatingWords),
      stats: asArray(founders.stats, d.founders.stats),
      ctaText: asString(founders.ctaText, d.founders.ctaText),
    },
    features: {
      badge: asString(features.badge, d.features.badge),
      headline: asString(features.headline, d.features.headline),
      description: asString(features.description, d.features.description),
      cards: asArray(features.cards, d.features.cards),
      zeroFrictionTitle: asString(features.zeroFrictionTitle, d.features.zeroFrictionTitle),
      zeroFrictionDescription: asString(features.zeroFrictionDescription, d.features.zeroFrictionDescription),
      launchCtaText: asString(features.launchCtaText, d.features.launchCtaText),
    },
    testimonials: {
      badge: asString(testimonials.badge, d.testimonials.badge),
      headline: asString(testimonials.headline, d.testimonials.headline),
      description: asString(testimonials.description, d.testimonials.description),
      entries: asArray(testimonials.entries, d.testimonials.entries),
    },
    cta: {
      badge: asString(cta.badge, d.cta.badge),
      headline: asString(cta.headline, d.cta.headline),
      description: asString(cta.description, d.cta.description),
      primaryCta: asString(cta.primaryCta, d.cta.primaryCta),
      secondaryCta: asString(cta.secondaryCta, d.cta.secondaryCta),
      stats: asArray(cta.stats, d.cta.stats),
    },
    footer: {
      heading: asString(footer.heading, d.footer.heading),
      attribution: asString(footer.attribution, d.footer.attribution),
      attributionUrl: asString(footer.attributionUrl, d.footer.attributionUrl),
      marquee: asArray(footer.marquee, d.footer.marquee),
    },
  };
}

export function normalizeSiteConfig(value: unknown): SiteConfig {
  const input = value && typeof value === "object" ? (value as Partial<SiteConfig>) : {};
  const seo = input.seo && typeof input.seo === "object" ? input.seo : defaultSiteConfig.seo;
  const activeTools = input.activeTools && typeof input.activeTools === "object" ? input.activeTools : defaultSiteConfig.activeTools;
  const externalLinks = input.externalLinks && typeof input.externalLinks === "object" ? input.externalLinks : defaultSiteConfig.externalLinks;
  const sections = input.landingPageSections && typeof input.landingPageSections === "object" ? input.landingPageSections : defaultSiteConfig.landingPageSections;

  return {
    siteName: asString(input.siteName, defaultSiteConfig.siteName),
    maintenanceMode: asBoolean(input.maintenanceMode, defaultSiteConfig.maintenanceMode),
    activeScheme: asString(input.activeScheme, defaultSiteConfig.activeScheme),
    allowedBranches: asArray<string>(input.allowedBranches, defaultSiteConfig.allowedBranches)
      .map((branch) => String(branch).trim().toLowerCase())
      .filter(Boolean),
    visibleSemesters: asArray<number>(input.visibleSemesters, defaultSiteConfig.visibleSemesters)
      .map((sem) => Number(sem))
      .filter((sem) => Number.isInteger(sem) && sem >= 1 && sem <= 8),
    activeTools: {
      attendance: asBoolean(activeTools.attendance, defaultSiteConfig.activeTools.attendance),
      gpa: asBoolean(activeTools.gpa, defaultSiteConfig.activeTools.gpa),
      runway: asBoolean(activeTools.runway, defaultSiteConfig.activeTools.runway),
      lab: asBoolean(activeTools.lab, defaultSiteConfig.activeTools.lab),
    },
    externalLinks: {
      studentLogin: asString(externalLinks.studentLogin, defaultSiteConfig.externalLinks.studentLogin),
      ktuPortal: asString(externalLinks.ktuPortal, defaultSiteConfig.externalLinks.ktuPortal),
    },
    bannerText: asString(input.bannerText, defaultSiteConfig.bannerText),
    bannerEnabled: asBoolean(input.bannerEnabled, defaultSiteConfig.bannerEnabled),
    bannerSeverity: asBannerSeverity(input.bannerSeverity),
    bannerDismissible: asBoolean(input.bannerDismissible, defaultSiteConfig.bannerDismissible),
    bannerStart: asString(input.bannerStart, defaultSiteConfig.bannerStart),
    bannerEnd: asString(input.bannerEnd, defaultSiteConfig.bannerEnd),
    primaryAccent: asString(input.primaryAccent, defaultSiteConfig.primaryAccent),
    lockdownMode: asBoolean(input.lockdownMode, defaultSiteConfig.lockdownMode),
    lockdownPasscode: asString(input.lockdownPasscode, defaultSiteConfig.lockdownPasscode),
    minAttendance: asNumber(input.minAttendance, defaultSiteConfig.minAttendance),
    minCie: asNumber(input.minCie, defaultSiteConfig.minCie),
    activityPointsLimit: asNumber(input.activityPointsLimit, defaultSiteConfig.activityPointsLimit),
    progressionS5Credits: asNumber(input.progressionS5Credits, defaultSiteConfig.progressionS5Credits),
    progressionS7Credits: asNumber(input.progressionS7Credits, defaultSiteConfig.progressionS7Credits),
    examStartDate: asString(input.examStartDate, defaultSiteConfig.examStartDate),
    timetableOverrides:
      input.timetableOverrides && typeof input.timetableOverrides === "object"
        ? (input.timetableOverrides as Record<string, unknown[]>)
        : {},
    landingPageSections: {
      compare: asBoolean(sections.compare, defaultSiteConfig.landingPageSections.compare),
      howItWorks: asBoolean(sections.howItWorks, defaultSiteConfig.landingPageSections.howItWorks),
      foundree: asBoolean(sections.foundree, defaultSiteConfig.landingPageSections.foundree),
      features: asBoolean(sections.features, defaultSiteConfig.landingPageSections.features),
      testimonials: asBoolean(sections.testimonials, defaultSiteConfig.landingPageSections.testimonials),
      faqs: asBoolean(sections.faqs, defaultSiteConfig.landingPageSections.faqs),
      cta: asBoolean(sections.cta, defaultSiteConfig.landingPageSections.cta),
    },
    seo: {
      title: asString(seo.title, defaultSiteConfig.seo.title),
      description: asString(seo.description, defaultSiteConfig.seo.description),
      keywords: asString(seo.keywords, defaultSiteConfig.seo.keywords),
    },
    customFaqs: asArray<{ q: string; a: string }>(input.customFaqs, []),
    quickLinks: asArray<{ title: string; url: string; category: string }>(input.quickLinks, []),
    landingContent: normalizeLandingContent(input.landingContent),
    testimonials: asArray<{ name: string; branch: string; rating: number; quote: string; text: string; color: string }>(input.testimonials, defaultSiteConfig.testimonials),
  };
}

let cachedConfig: SiteConfig | null = null;
let cacheTimestamp = 0;
const CACHE_TTL_MS = 30_000;

function readFsConfig(): SiteConfig {
  try {
    if (fs.existsSync(siteConfigPath)) {
      return normalizeSiteConfig(JSON.parse(fs.readFileSync(siteConfigPath, "utf8")));
    }
  } catch (error) {
    console.error("Failed to read site-config.json:", error);
  }
  return defaultSiteConfig;
}

async function readKvConfig(): Promise<SiteConfig> {
  const { readFromKV } = await import("./github");
  const kvConfig = await readFromKV<SiteConfig>("site-config");
  if (kvConfig) return normalizeSiteConfig(kvConfig);
  return defaultSiteConfig;
}

export async function readSiteConfig(): Promise<SiteConfig> {
  const now = Date.now();
  if (cachedConfig && now - cacheTimestamp < CACHE_TTL_MS) {
    return cachedConfig;
  }

  const { isServerless } = await import("./github");
  const config = isServerless() ? await readKvConfig() : readFsConfig();

  cachedConfig = config;
  cacheTimestamp = now;
  return config;
}

export async function writeSiteConfig(config: SiteConfig): Promise<void> {
  const normalized = normalizeSiteConfig(config);
  cachedConfig = normalized;
  cacheTimestamp = Date.now();

  const { isServerless, writeToKV } = await import("./github");
  if (isServerless()) {
    await writeToKV("site-config", normalized);
    return;
  }

  const content = `${JSON.stringify(normalized, null, 2)}\n`;
  const dir = path.dirname(siteConfigPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(siteConfigPath, content, "utf8");
}

export function parseKeywords(keywords: string): string[] {
  return keywords
    .split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);
}
