"use server";

import fs from "fs";
import path from "path";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { normalizeSiteConfig, readSiteConfig, writeSiteConfig } from "@/lib/siteConfig";

const allowedBranchDirs: Record<string, string> = {
  cs: "computer-science-and-engineering",
  ec: "electronics-and-communication-engineering",
  me: "mechanical-engineering",
  ce: "civil-engineering",
  ee: "electrical-and-electronics-engineering",
};

async function assertAdminSecret() {
  const correctSecret = process.env.ADMIN_SECRET_KEY;
  if (!correctSecret) {
    throw new Error("ADMIN_SECRET_KEY environment variable is not set.");
  }
  const cookieStore = await cookies();
  const cookieSecret = cookieStore.get("admin_secret")?.value;
  if (cookieSecret === correctSecret) {
    return;
  }
  throw new Error("Unauthorized admin mutation attempt.");
}

function getBranchDirName(branch: string): string {
  return allowedBranchDirs[branch.toLowerCase()] || "";
}

function safeSegment(value: string, label: string) {
  const segment = value.trim().toLowerCase();
  if (!/^[a-z0-9][a-z0-9._-]*$/.test(segment)) {
    throw new Error(`Invalid ${label}.`);
  }
  return segment;
}

function revalidatePublicData() {
  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/dashboard");
  revalidatePath("/notes");
  revalidatePath("/sitemap.xml");
}

export async function saveNoteFile(formData: FormData) {
  try {
    await assertAdminSecret();

    const { isServerless } = await import("@/lib/github");
    if (isServerless()) {
      return { success: false, error: "Note uploads require a traditional server (VPS). Filesystem writes are not supported on Vercel serverless. Deploy to a VPS to upload notes." };
    }

    const branch = safeSegment((formData.get("branch") as string) || "", "branch");
    const sem = safeSegment((formData.get("sem") as string) || "", "semester");
    const subjectId = safeSegment((formData.get("subjectId") as string) || "", "subject");
    const topicId = safeSegment((formData.get("topicId") as string) || "", "topic");
    const noteText = formData.get("noteText");
    const noteFile = formData.get("noteFile") as File | null;

    if (!branch || !sem || !subjectId || !topicId || !/^[1-8]$/.test(sem)) {
      return { success: false, error: "Missing or invalid note target fields." };
    }

    const branchDir = getBranchDirName(branch);
    if (!branchDir) {
      return { success: false, error: "Unsupported branch." };
    }

    const targetDir = path.join(process.cwd(), "public", "notes", branchDir, `semester-${sem}`, subjectId);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    let relativePath = "";
    if (noteFile && noteFile.size > 0) {
      const fileExt = path.extname(noteFile.name).toLowerCase() || ".md";
      if (![".md", ".pdf"].includes(fileExt)) {
        return { success: false, error: "Only Markdown and PDF files are supported." };
      }

      const fileName = `${topicId}${fileExt}`;
      fs.writeFileSync(path.join(targetDir, fileName), Buffer.from(await noteFile.arrayBuffer()));
      relativePath = `notes/${branchDir}/semester-${sem}/${subjectId}/${fileName}`;
    } else if (typeof noteText === "string") {
      const fileName = `${topicId}.md`;
      fs.writeFileSync(path.join(targetDir, fileName), noteText, "utf8");
      relativePath = `notes/${branchDir}/semester-${sem}/${subjectId}/${fileName}`;
    } else {
      return { success: false, error: "Provide either note text or upload a file." };
    }

    const mapPath = path.join(process.cwd(), "src", "data", "topic-path-map.json");
    let mapData: Record<string, string> = {};
    if (fs.existsSync(mapPath)) {
      mapData = JSON.parse(fs.readFileSync(mapPath, "utf8"));
    }
    mapData[topicId] = relativePath;
    fs.writeFileSync(mapPath, `${JSON.stringify(mapData, null, 2)}\n`, "utf8");

    revalidatePublicData();
    return { success: true };
  } catch (error: any) {
    console.error("Error saving note file:", error);
    return { success: false, error: error.message || "Failed to write file to disk." };
  }
}

export async function saveRawConfig(jsonText: string) {
  try {
    await assertAdminSecret();
    await writeSiteConfig(normalizeSiteConfig(JSON.parse(jsonText)));
    revalidatePublicData();
    return { success: true };
  } catch (error: any) {
    console.error("Failed to save raw config:", error);
    return { success: false, error: error.message || "Invalid JSON syntax." };
  }
}

export async function saveTimetableOverride(branch: string, sem: number, exams: any[]) {
  try {
    await assertAdminSecret();

    const branchKey = safeSegment(branch, "branch");
    if (!getBranchDirName(branchKey) || !Number.isInteger(sem) || sem < 1 || sem > 8) {
      return { success: false, error: "Invalid branch or semester." };
    }

    const currentConfig = readSiteConfig();
    currentConfig.timetableOverrides[`${branchKey}-${sem}`] = Array.isArray(exams) ? exams : [];
    await writeSiteConfig(currentConfig);

    revalidatePublicData();
    return { success: true };
  } catch (error: any) {
    console.error("Failed to save timetable overrides:", error);
    return { success: false, error: error.message || "Failed to write overrides." };
  }
}

export async function saveFaqOverride(faqs: any[]) {
  try {
    await assertAdminSecret();

    const currentConfig = readSiteConfig();
    currentConfig.customFaqs = (Array.isArray(faqs) ? faqs : [])
      .filter((faq) => faq && typeof faq.q === "string" && typeof faq.a === "string")
      .map((faq) => ({ q: faq.q.trim(), a: faq.a.trim() }))
      .filter((faq) => faq.q && faq.a);
    await writeSiteConfig(currentConfig);

    revalidatePublicData();
    return { success: true };
  } catch (error: any) {
    console.error("Failed to save FAQ overrides:", error);
    return { success: false, error: error.message || "Failed to write FAQs." };
  }
}

export async function saveQuickLinksOverride(links: any[]) {
  try {
    await assertAdminSecret();

    const currentConfig = readSiteConfig();
    currentConfig.quickLinks = (Array.isArray(links) ? links : [])
      .filter((link) => link && typeof link.title === "string" && typeof link.url === "string")
      .map((link) => ({
        title: link.title.trim(),
        url: link.url.trim(),
        category: typeof link.category === "string" ? link.category.trim() || "Utility" : "Utility",
      }))
      .filter((link) => link.title && link.url);
    await writeSiteConfig(currentConfig);

    revalidatePublicData();
    return { success: true };
  } catch (error: any) {
    console.error("Failed to save quick links overrides:", error);
    return { success: false, error: error.message || "Failed to write quick links." };
  }
}

export async function updateConfig(prevState: { success: boolean; error?: string } | null, formData: FormData): Promise<{ success: boolean; error?: string }> {
  try {
    await assertAdminSecret();
    const currentConfig = readSiteConfig();

    const visibleSems: number[] = [];
    for (let sem = 1; sem <= 8; sem++) {
      if (formData.get(`sem_${sem}`) === "on") {
        visibleSems.push(sem);
      }
    }

    const updated = normalizeSiteConfig({
      siteName: (formData.get("siteName") as string) || currentConfig.siteName,
      maintenanceMode: formData.get("maintenanceMode") === "on",
      activeScheme: (formData.get("activeScheme") as string) || currentConfig.activeScheme,
      allowedBranches: ((formData.get("branches") as string) || currentConfig.allowedBranches.join(","))
        .split(",")
        .map((branch) => branch.trim().toLowerCase())
        .filter((branch) => Boolean(getBranchDirName(branch))),
      visibleSemesters: visibleSems.length > 0 ? visibleSems : currentConfig.visibleSemesters,
      activeTools: {
        attendance: formData.get("tool_attendance") === "on",
        gpa: formData.get("tool_gpa") === "on",
        runway: formData.get("tool_runway") === "on",
        lab: formData.get("tool_lab") === "on",
      },
      externalLinks: {
        studentLogin: (formData.get("link_student_login") as string) || currentConfig.externalLinks.studentLogin,
        ktuPortal: (formData.get("link_ktu_portal") as string) || currentConfig.externalLinks.ktuPortal,
      },
      bannerText: (formData.get("bannerText") as string) || "",
      bannerEnabled: formData.get("bannerEnabled") === "on",
      bannerSeverity: (formData.get("bannerSeverity") as string) || "info",
      bannerDismissible: formData.get("bannerDismissible") === "on",
      primaryAccent: (formData.get("primaryAccent") as string) || currentConfig.primaryAccent,
      lockdownMode: formData.get("lockdownMode") === "on",
      lockdownPasscode: (formData.get("lockdownPasscode") as string) || currentConfig.lockdownPasscode,
      minAttendance: parseInt((formData.get("minAttendance") as string) || "", 10) || currentConfig.minAttendance,
      minCie: parseInt((formData.get("minCie") as string) || "", 10) || currentConfig.minCie,
      activityPointsLimit:
        parseInt((formData.get("activityPointsLimit") as string) || "", 10) || currentConfig.activityPointsLimit,
      progressionS5Credits:
        parseInt((formData.get("progressionS5Credits") as string) || "", 10) || currentConfig.progressionS5Credits,
      progressionS7Credits:
        parseInt((formData.get("progressionS7Credits") as string) || "", 10) || currentConfig.progressionS7Credits,
      examStartDate: (formData.get("examStartDate") as string) || currentConfig.examStartDate,
      timetableOverrides: currentConfig.timetableOverrides,
      landingPageSections: {
        compare: formData.get("section_compare") === "on",
        howItWorks: formData.get("section_howItWorks") === "on",
        foundree: formData.get("section_foundree") === "on",
        features: formData.get("section_features") === "on",
        testimonials: formData.get("section_testimonials") === "on",
        faqs: formData.get("section_faqs") === "on",
        cta: formData.get("section_cta") === "on",
      },
      seo: {
        title: (formData.get("seo_title") as string) || currentConfig.seo.title,
        description: (formData.get("seo_description") as string) || currentConfig.seo.description,
        keywords: (formData.get("seo_keywords") as string) || currentConfig.seo.keywords,
      },
      customFaqs: currentConfig.customFaqs,
      quickLinks: currentConfig.quickLinks,
    });

    await writeSiteConfig(updated);
    revalidatePublicData();
    return { success: true };
  } catch (error: any) {
    console.error("Failed to update config:", error);
    return { success: false, error: error.message || "Failed to update config." };
  }
}
