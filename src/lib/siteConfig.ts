import fs from "fs";
import path from "path";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://ktunode.com").replace(/\/$/, "");

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
}

export const siteConfigPath = path.join(process.cwd(), "constants", "site-config.json");

export const defaultSiteConfig: SiteConfig = {
  siteName: "KTU Node",
  maintenanceMode: false,
  activeScheme: "2024 Scheme",
  allowedBranches: ["cs", "ec", "me", "ce", "ee"],
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
  primaryAccent: "blue",
  lockdownMode: false,
  lockdownPasscode: "1234",
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
  };
}

export async function readSiteConfig(): Promise<SiteConfig> {
  const { isServerless, readFromKV } = await import("./github");
  if (isServerless()) {
    const kvConfig = await readFromKV<SiteConfig>("site-config");
    if (kvConfig) return normalizeSiteConfig(kvConfig);
  }

  try {
    if (fs.existsSync(siteConfigPath)) {
      return normalizeSiteConfig(JSON.parse(fs.readFileSync(siteConfigPath, "utf8")));
    }
  } catch (error) {
    console.error("Failed to read site-config.json:", error);
  }

  return defaultSiteConfig;
}

export async function writeSiteConfig(config: SiteConfig): Promise<void> {
  const normalized = normalizeSiteConfig(config);

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
