"use server";

import fs from "fs";
import path from "path";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { normalizeSiteConfig, readSiteConfig, writeSiteConfig } from "@/lib/siteConfig";
import { writeToKV, readFromKV } from "@/lib/github";

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

    const currentConfig = await readSiteConfig();
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

    const currentConfig = await readSiteConfig();
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

    const currentConfig = await readSiteConfig();
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
    const currentConfig = await readSiteConfig();

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
      bannerText: (formData.get("bannerText") as string) || currentConfig.bannerText,
      bannerEnabled: formData.has("bannerEnabled") ? formData.get("bannerEnabled") === "on" : currentConfig.bannerEnabled,
      bannerSeverity: (formData.get("bannerSeverity") as string) || currentConfig.bannerSeverity,
      bannerDismissible: formData.has("bannerDismissible") ? formData.get("bannerDismissible") === "on" : currentConfig.bannerDismissible,
      bannerStart: (formData.get("bannerStart") as string) || currentConfig.bannerStart,
      bannerEnd: (formData.get("bannerEnd") as string) || currentConfig.bannerEnd,
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

    const landingContentStr = formData.get("landingContent") as string;
    if (landingContentStr) {
      try {
        updated.landingContent = JSON.parse(landingContentStr);
      } catch {}
    }

    await writeSiteConfig(updated);
    revalidatePublicData();
    return { success: true };
  } catch (error: any) {
    console.error("Failed to update config:", error);
    return { success: false, error: error.message || "Failed to update config." };
  }
}

export async function saveSubjectData(branch: string, sem: number, subjects: any[]) {
  try {
    await assertAdminSecret();

    if (!branch || !/^[a-z]{2}$/.test(branch) || !Number.isInteger(sem) || sem < 1 || sem > 8) {
      return { success: false, error: "Invalid branch or semester." };
    }

    const subjectsDir = path.join(process.cwd(), "src", "data", "subjects");
    if (!fs.existsSync(subjectsDir)) {
      fs.mkdirSync(subjectsDir, { recursive: true });
    }

    const filePath = path.join(subjectsDir, `${branch}-${sem}.json`);
    fs.writeFileSync(filePath, JSON.stringify(subjects, null, 2), "utf8");

    logAdminActivity("subject_save", `Saved ${subjects.length} subjects for ${branch.toUpperCase()} S${sem}`);
    revalidatePublicData();
    return { success: true };
  } catch (error: any) {
    console.error("Failed to save subject data:", error);
    return { success: false, error: error.message || "Failed to save subjects." };
  }
}

export async function logAdminActivity(action: string, details: string) {
  try {
    const entry = {
      timestamp: new Date().toISOString(),
      action,
      details,
    };

    const existing = await readFromKV<any[]>("admin-activity-log");
    const log = Array.isArray(existing) ? existing : [];
    log.unshift(entry);
    if (log.length > 200) log.length = 200;

    await writeToKV("admin-activity-log", log);
  } catch (error) {
    console.error("Failed to log activity:", error);
  }
}

export async function getActivityLog() {
  try {
    const log = await readFromKV<any[]>("admin-activity-log");
    return Array.isArray(log) ? log : [];
  } catch {
    return [];
  }
}

export async function trackPageView(page: string) {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const key = `analytics-pageviews-${today}`;
    const existing = await readFromKV<Record<string, number>>(key);
    const data = existing || {};
    data[page] = (data[page] || 0) + 1;
    await writeToKV(key, data);

    const totalKey = "analytics-total-pageviews";
    const total = await readFromKV<number>(totalKey);
    await writeToKV(totalKey, (total || 0) + 1);
  } catch (error) {
    console.error("Failed to track page view:", error);
  }
}

export async function getAnalyticsSummary() {
  try {
    const now = new Date();
    const today = now.toISOString().slice(0, 10);

    const todayViews = await readFromKV<Record<string, number>>(`analytics-pageviews-${today}`);
    const totalViews = await readFromKV<number>("analytics-total-pageviews");

    const dailyBreakdown: Record<string, number> = {};
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const dateKey = d.toISOString().slice(0, 10);
      const dayData = await readFromKV<Record<string, number>>(`analytics-pageviews-${dateKey}`);
      dailyBreakdown[dateKey] = dayData
        ? Object.values(dayData).reduce((sum, v) => sum + v, 0)
        : 0;
    }

    return {
      todayViews: todayViews ? Object.values(todayViews).reduce((sum, v) => sum + v, 0) : 0,
      totalViews: totalViews || 0,
      dailyBreakdown,
      topPages: todayViews
        ? Object.entries(todayViews).sort((a, b) => b[1] - a[1]).slice(0, 10)
        : [],
    };
  } catch {
    return { todayViews: 0, totalViews: 0, dailyBreakdown: {}, topPages: [] };
  }
}

export async function backupConfig() {
  try {
    await assertAdminSecret();
    const config = await readSiteConfig();
    return { success: true, data: JSON.stringify(config, null, 2) };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to backup config." };
  }
}

export async function restoreConfig(jsonString: string) {
  try {
    await assertAdminSecret();
    const parsed = JSON.parse(jsonString);
    const normalized = normalizeSiteConfig(parsed);
    await writeSiteConfig(normalized);

    logAdminActivity("config_restore", "Restored configuration from backup");
    revalidatePublicData();
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Invalid JSON or failed to restore." };
  }
}

export async function getSubjectCount() {
  try {
    const subjectsDir = path.join(process.cwd(), "src", "data", "subjects");
    if (!fs.existsSync(subjectsDir)) return { totalSubjects: 0, totalTopics: 0, byBranch: {} };

    const files = fs.readdirSync(subjectsDir).filter((f: string) => f.endsWith(".json"));
    let totalSubjects = 0;
    let totalTopics = 0;
    const byBranch: Record<string, number> = {};

    for (const file of files) {
      const branch = file.split("-")[0];
      const data = JSON.parse(fs.readFileSync(path.join(subjectsDir, file), "utf8"));
      if (Array.isArray(data)) {
        totalSubjects += data.length;
        for (const sub of data) {
          if (sub.modules) {
            for (const mod of sub.modules) {
              if (mod.topics) totalTopics += mod.topics.length;
            }
          }
        }
        byBranch[branch] = (byBranch[branch] || 0) + data.length;
      }
    }

    return { totalSubjects, totalTopics, byBranch };
  } catch {
    return { totalSubjects: 0, totalTopics: 0, byBranch: {} };
  }
}

export async function getUsers() {
  try {
    await assertAdminSecret();
    const usersPath = path.join(process.cwd(), "constants", "users.json");
    if (!fs.existsSync(usersPath)) return [];
    const data = JSON.parse(fs.readFileSync(usersPath, "utf8"));
    return Array.isArray(data) ? data : [];
  } catch (error: any) {
    console.error("Failed to get users:", error);
    return [];
  }
}

export async function deleteUser(userId: string) {
  try {
    await assertAdminSecret();
    const usersPath = path.join(process.cwd(), "constants", "users.json");
    if (!fs.existsSync(usersPath)) return { success: false, error: "No users file found." };

    const users = JSON.parse(fs.readFileSync(usersPath, "utf8"));
    const filtered = users.filter((u: any) => u.id !== userId && u._id !== userId);

    if (filtered.length === users.length) {
      return { success: false, error: "User not found." };
    }

    fs.writeFileSync(usersPath, JSON.stringify(filtered, null, 2), "utf8");
    logAdminActivity("user_delete", `Deleted user ${userId}`);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete user." };
  }
}

export async function getDeploymentInfo() {
  try {
    const info: Record<string, string> = {};

    if (process.env.VERCEL) {
      info.platform = "Vercel";
      info.region = process.env.VERCEL_REGION || "unknown";
      info.commitSha = process.env.VERCEL_GIT_COMMIT_SHA || "unknown";
      info.commitMessage = process.env.VERCEL_GIT_COMMIT_MESSAGE || "unknown";
      info.branch = process.env.VERCEL_GIT_COMMIT_REF || "unknown";
      info.deployUrl = process.env.VERCEL_URL || "unknown";
      info.nodeVersion = process.version;
    } else {
      info.platform = "Self-hosted";
      info.nodeVersion = process.version;
      info.region = process.platform;
    }

    const startedAt = Date.now() - (process.uptime() * 1000);
    info.startedAt = new Date(startedAt).toISOString();
    info.uptime = formatUptime(process.uptime());

    return info;
  } catch {
    return { platform: "unknown", nodeVersion: process.version };
  }
}

function formatUptime(seconds: number): string {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  if (days > 0) return `${days}d ${hours}h ${mins}m`;
  if (hours > 0) return `${hours}h ${mins}m`;
  return `${mins}m`;
}

export async function flushConfigCache() {
  try {
    await assertAdminSecret();
    const { readSiteConfig } = await import("@/lib/siteConfig");
    const config = await readSiteConfig();
    logAdminActivity("cache_flush", "Config cache flushed and reloaded");
    return { success: true, config };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to flush cache." };
  }
}

export async function getKvUsage() {
  try {
    await assertAdminSecret();
    const keys = [
      "site-config",
      "admin-activity-log",
      "analytics-total-pageviews",
    ];

    const today = new Date().toISOString().slice(0, 10);
    keys.push(`analytics-pageviews-${today}`);

    for (let i = 1; i <= 6; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      keys.push(`analytics-pageviews-${d.toISOString().slice(0, 10)}`);
    }

    const results: Record<string, unknown> = {};
    for (const key of keys) {
      try {
        const data = await readFromKV(key);
        results[key] = data !== null ? "present" : "empty";
      } catch {
        results[key] = "error";
      }
    }

    return { success: true, keys: results };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to get KV usage." };
  }
}

export async function bulkImportSubjects(branch: string, sem: number, jsonText: string) {
  try {
    await assertAdminSecret();

    if (!branch || !/^[a-z]{2}$/.test(branch) || !Number.isInteger(sem) || sem < 1 || sem > 8) {
      return { success: false, error: "Invalid branch or semester." };
    }

    const parsed = JSON.parse(jsonText);
    if (!Array.isArray(parsed)) {
      return { success: false, error: "JSON must be an array of subjects." };
    }

    for (const subject of parsed) {
      if (!subject.id || !subject.name || !subject.modules) {
        return { success: false, error: `Invalid subject: missing id, name, or modules.` };
      }
    }

    const subjectsDir = path.join(process.cwd(), "src", "data", "subjects");
    if (!fs.existsSync(subjectsDir)) {
      fs.mkdirSync(subjectsDir, { recursive: true });
    }

    const filePath = path.join(subjectsDir, `${branch}-${sem}.json`);
    fs.writeFileSync(filePath, JSON.stringify(parsed, null, 2), "utf8");

    logAdminActivity("bulk_import", `Imported ${parsed.length} subjects for ${branch.toUpperCase()} S${sem}`);
    revalidatePublicData();
    return { success: true, count: parsed.length };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to import subjects." };
  }
}

export async function bulkDeleteNotes(branch: string, sem: number) {
  try {
    await assertAdminSecret();

    const { isServerless } = await import("@/lib/github");
    if (isServerless()) {
      return { success: false, error: "Bulk operations require a VPS. Not supported on Vercel." };
    }

    const branchDir = getBranchDirName(branch);
    if (!branchDir) return { success: false, error: "Invalid branch." };

    const notesDir = path.join(process.cwd(), "public", "notes", branchDir, `semester-${sem}`);
    if (!fs.existsSync(notesDir)) {
      return { success: true, count: 0 };
    }

    let count = 0;
    const subjects = fs.readdirSync(notesDir);
    for (const subject of subjects) {
      const subjectDir = path.join(notesDir, subject);
      if (fs.statSync(subjectDir).isDirectory()) {
        const files = fs.readdirSync(subjectDir);
        for (const file of files) {
          fs.unlinkSync(path.join(subjectDir, file));
          count++;
        }
      }
    }

    logAdminActivity("bulk_delete_notes", `Deleted ${count} notes for ${branch.toUpperCase()} S${sem}`);
    revalidatePublicData();
    return { success: true, count };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete notes." };
  }
}

export async function getScheduledTasks() {
  try {
    await assertAdminSecret();
    const config = await readSiteConfig();
    const tasks: { name: string; status: string; nextRun?: string; details: string }[] = [];

    if (config.bannerEnabled && config.bannerStart) {
      const now = new Date();
      const start = new Date(config.bannerStart);
      const end = config.bannerEnd ? new Date(config.bannerEnd) : null;

      if (now < start) {
        tasks.push({ name: "Scheduled Banner", status: "scheduled", nextRun: config.bannerStart, details: `Starts ${start.toLocaleString("en-IN")}` });
      } else if (end && now > end) {
        tasks.push({ name: "Scheduled Banner", status: "expired", details: `Expired ${end.toLocaleString("en-IN")}` });
      } else {
        tasks.push({ name: "Scheduled Banner", status: "active", details: end ? `Expires ${end.toLocaleString("en-IN")}` : "No expiry set" });
      }
    }

    if (config.maintenanceMode) {
      tasks.push({ name: "Maintenance Mode", status: "active", details: "All traffic is locked down" });
    }

    if (config.lockdownMode) {
      tasks.push({ name: "Lockdown Gate", status: "active", details: "Passcode gate is active" });
    }

    tasks.push({ name: "KTU Announcement Sync", status: "active", nextRun: "Every 5 minutes", details: "Scrapes ktu.edu.in announcements" });
    tasks.push({ name: "Analytics Cleanup", status: "scheduled", nextRun: "Daily", details: "Old analytics data auto-expires after 30 days" });

    return tasks;
  } catch {
    return [];
  }
}

export async function getConfigDiff(newConfigText: string) {
  try {
    await assertAdminSecret();
    const currentConfig = await readSiteConfig();
    const newConfig = JSON.parse(newConfigText);

    const changes: { field: string; from: string; to: string }[] = [];

    function compareObjects(old: any, new_: any, prefix: string) {
      for (const key of Object.keys(new_)) {
        if (typeof new_[key] === "object" && new_[key] !== null && !Array.isArray(new_[key])) {
          compareObjects(old[key] || {}, new_[key], `${prefix}${key}.`);
        } else {
          const oldVal = JSON.stringify(old[key]);
          const newVal = JSON.stringify(new_[key]);
          if (oldVal !== newVal) {
            changes.push({
              field: `${prefix}${key}`,
              from: oldVal,
              to: newVal,
            });
          }
        }
      }
    }

    compareObjects(currentConfig, newConfig, "");

    logAdminActivity("config_diff", `Config diff: ${changes.length} changes detected`);
    return { success: true, changes };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to compute diff." };
  }
}
