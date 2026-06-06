"use server";

import fs from "fs";
import path from "path";
import { revalidatePath } from "next/cache";

const configPath = path.join(process.cwd(), "constants", "site-config.json");

// Helper to read configuration safely
function getConfig() {
  try {
    if (fs.existsSync(configPath)) {
      const fileData = fs.readFileSync(configPath, "utf8");
      return JSON.parse(fileData);
    }
  } catch (e) {
    console.error("Failed to read site-config.json:", e);
  }
  return {
    siteName: "KTU Node",
    maintenanceMode: false,
    activeScheme: "2024 Scheme",
    allowedBranches: ["cs", "ec", "me", "ce", "ee"],
    visibleSemesters: [1, 2, 3, 4, 5, 6, 7, 8],
    activeTools: {
      attendance: true,
      gpa: true,
      runway: true,
      lab: true
    },
    externalLinks: {
      studentLogin: "https://app.ktu.edu.in",
      ktuPortal: "https://ktu.edu.in"
    },
    bannerText: "",
    bannerEnabled: false,
    bannerSeverity: "info",
    bannerDismissible: true,
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
      cta: true
    },
    seo: {
      title: "KTU Notes, Syllabus & PYQs — 2024 Scheme | KTUNODE",
      description: "Free module-wise KTU notes, previous year question papers, and syllabus tracker for the 2024 B.Tech scheme. CS, EC, ME, CE, EE — all semesters covered.",
      keywords: "KTU notes, KTU syllabus 2024 scheme, KTU previous year question papers, KTU B.Tech notes, KTU study materials, KTU PYQ, KTU S1 notes, KTU S2 notes, KTU S3 notes, KTU CSE notes 2024, KTU model question papers, KTU module wise notes, APJ Abdul Kalam Technological University syllabus, KTU exam preparation, KTUNODE, KTU 2024 scheme subjects, KTU chapter wise notes, Kerala Technological University"
    },
    customFaqs: [],
    primaryAccent: "blue",
    lockdownMode: false,
    lockdownPasscode: "1234",
    quickLinks: []
  };
}

function getBranchDirName(branch: string): string {
  const mapping: Record<string, string> = {
    cs: "computer-science-and-engineering",
    ec: "electronics-and-communication-engineering",
    me: "mechanical-engineering",
    ce: "civil-engineering",
    ee: "electrical-and-electronics-engineering"
  };
  return mapping[branch.toLowerCase()] || branch.toLowerCase();
}

// 1. saveNoteFile
export async function saveNoteFile(formData: FormData) {
  const submittedSecret = formData.get("secret") as string;
  const correctSecret = process.env.ADMIN_SECRET_KEY || "dev_secret_key";
  if (submittedSecret !== correctSecret) {
    throw new Error("Unauthorized note mutation attempt.");
  }

  const branch = formData.get("branch") as string;
  const sem = formData.get("sem") as string;
  const subjectId = formData.get("subjectId") as string;
  const topicId = formData.get("topicId") as string;
  const noteText = formData.get("noteText") as string;
  const noteFile = formData.get("noteFile") as File | null;

  if (!branch || !sem || !subjectId || !topicId) {
    return { success: false, error: "Missing required fields." };
  }

  try {
    const branchDir = getBranchDirName(branch);
    const targetDir = path.join(
      process.cwd(),
      "public",
      "notes",
      branchDir,
      `semester-${sem}`,
      subjectId
    );

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    let relativePath = "";
    if (noteFile && noteFile.size > 0) {
      const buffer = Buffer.from(await noteFile.arrayBuffer());
      const fileExt = path.extname(noteFile.name) || ".md";
      const fileName = `${topicId}${fileExt}`;
      const filePath = path.join(targetDir, fileName);
      fs.writeFileSync(filePath, buffer);
      relativePath = `notes/${branchDir}/semester-${sem}/${subjectId}/${fileName}`;
    } else if (noteText !== undefined) {
      const fileName = `${topicId}.md`;
      const filePath = path.join(targetDir, fileName);
      fs.writeFileSync(filePath, noteText, "utf8");
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
    fs.writeFileSync(mapPath, JSON.stringify(mapData, null, 2), "utf8");

    revalidatePath("/admin");
    revalidatePath("/");
    
    return { success: true };
  } catch (error: any) {
    console.error("Error saving note file:", error);
    return { success: false, error: error.message || "Failed to write file to disk." };
  }
}

// 2. saveRawConfig
export async function saveRawConfig(jsonText: string) {
  try {
    const parsed = JSON.parse(jsonText);
    fs.writeFileSync(configPath, JSON.stringify(parsed, null, 2), "utf8");
    revalidatePath("/admin");
    revalidatePath("/");
    return { success: true };
  } catch (e: any) {
    console.error("Failed to save raw config:", e);
    return { success: false, error: e.message || "Invalid JSON syntax." };
  }
}

// 3. saveTimetableOverride
export async function saveTimetableOverride(branch: string, sem: number, exams: any[]) {
  try {
    const currentConfig = getConfig();
    if (!currentConfig.timetableOverrides) {
      currentConfig.timetableOverrides = {};
    }
    const key = `${branch.toLowerCase()}-${sem}`;
    currentConfig.timetableOverrides[key] = exams;

    fs.writeFileSync(configPath, JSON.stringify(currentConfig, null, 2), "utf8");
    revalidatePath("/admin");
    revalidatePath("/");
    return { success: true };
  } catch (e: any) {
    console.error("Failed to save timetable overrides:", e);
    return { success: false, error: e.message || "Failed to write overrides." };
  }
}

// 4. saveFaqOverride
export async function saveFaqOverride(faqs: any[]) {
  try {
    const currentConfig = getConfig();
    currentConfig.customFaqs = faqs;

    fs.writeFileSync(configPath, JSON.stringify(currentConfig, null, 2), "utf8");
    revalidatePath("/admin");
    revalidatePath("/");
    return { success: true };
  } catch (e: any) {
    console.error("Failed to save FAQ overrides:", e);
    return { success: false, error: e.message || "Failed to write FAQs." };
  }
}

// 5. saveQuickLinksOverride
export async function saveQuickLinksOverride(links: any[]) {
  try {
    const currentConfig = getConfig();
    currentConfig.quickLinks = links;

    fs.writeFileSync(configPath, JSON.stringify(currentConfig, null, 2), "utf8");
    revalidatePath("/admin");
    revalidatePath("/");
    return { success: true };
  } catch (e: any) {
    console.error("Failed to save quick links overrides:", e);
    return { success: false, error: e.message || "Failed to write quick links." };
  }
}

// 6. updateConfig
export async function updateConfig(formData: FormData) {
  const submittedSecret = formData.get("secret") as string;
  
  if (submittedSecret !== (process.env.ADMIN_SECRET_KEY || "dev_secret_key")) {
    throw new Error("Unauthorized config mutation attempt.");
  }

  const currentConfig = getConfig();

  const visibleSems: number[] = [];
  for (let s = 1; s <= 8; s++) {
    if (formData.get(`sem_${s}`) === "on") {
      visibleSems.push(s);
    }
  }

  const updated = {
    siteName: formData.get("siteName") as string,
    maintenanceMode: formData.get("maintenanceMode") === "on",
    activeScheme: formData.get("activeScheme") as string,
    allowedBranches: (formData.get("branches") as string)
      .split(",")
      .map(b => b.trim().toLowerCase())
      .filter(b => b.length > 0),
    visibleSemesters: visibleSems.length > 0 ? visibleSems : [1, 2, 3, 4, 5, 6, 7, 8],
    activeTools: {
      attendance: formData.get("tool_attendance") === "on",
      gpa: formData.get("tool_gpa") === "on",
      runway: formData.get("tool_runway") === "on",
      lab: formData.get("tool_lab") === "on"
    },
    externalLinks: {
      studentLogin: formData.get("link_student_login") as string || "https://app.ktu.edu.in",
      ktuPortal: formData.get("link_ktu_portal") as string || "https://ktu.edu.in"
    },
    bannerText: formData.get("bannerText") as string,
    bannerEnabled: formData.get("bannerEnabled") === "on",
    bannerSeverity: formData.get("bannerSeverity") as string || "info",
    bannerDismissible: formData.get("bannerDismissible") === "on",
    primaryAccent: formData.get("primaryAccent") as string || "blue",
    lockdownMode: formData.get("lockdownMode") === "on",
    lockdownPasscode: formData.get("lockdownPasscode") as string || "1234",
    minAttendance: parseInt(formData.get("minAttendance") as string, 10) || 75,
    minCie: parseInt(formData.get("minCie") as string, 10) || 40,
    activityPointsLimit: parseInt(formData.get("activityPointsLimit") as string, 10) || 120,
    progressionS5Credits: parseInt(formData.get("progressionS5Credits") as string, 10) || 26,
    progressionS7Credits: parseInt(formData.get("progressionS7Credits") as string, 10) || 52,
    examStartDate: formData.get("examStartDate") as string || "2026-07-15",
    timetableOverrides: currentConfig.timetableOverrides || {},
    landingPageSections: {
      compare: formData.get("section_compare") === "on",
      howItWorks: formData.get("section_howItWorks") === "on",
      foundree: formData.get("section_foundree") === "on",
      features: formData.get("section_features") === "on",
      testimonials: formData.get("section_testimonials") === "on",
      faqs: formData.get("section_faqs") === "on",
      cta: formData.get("section_cta") === "on"
    },
    seo: {
      title: formData.get("seo_title") as string || "KTU Notes, Syllabus & PYQs — 2024 Scheme | KTUNODE",
      description: formData.get("seo_description") as string || "Free module-wise KTU notes, previous year question papers, and syllabus tracker...",
      keywords: formData.get("seo_keywords") as string || "KTU notes, KTU syllabus, ..."
    },
    customFaqs: currentConfig.customFaqs || [],
    quickLinks: currentConfig.quickLinks || []
  };

  fs.writeFileSync(configPath, JSON.stringify(updated, null, 2), "utf8");
  
  revalidatePath("/");
  revalidatePath("/admin");
}
