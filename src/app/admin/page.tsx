import fs from "fs";
import path from "path";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import crypto from "crypto";
import AdminPanel from "@/components/admin/AdminPanel";
import AdminLoginForm from "@/components/admin/AdminLoginForm";
import { getTimetable } from "@/lib/timetableData";
import { readSiteConfig } from "@/lib/siteConfig";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

function safeEqual(a: string, b: string): boolean {
  if (!a || !b) return false;
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

function getTopicPathMap() {
  try {
    const mapPath = path.join(process.cwd(), "src", "data", "topic-path-map.json");
    if (fs.existsSync(mapPath)) {
      return JSON.parse(fs.readFileSync(mapPath, "utf8"));
    }
  } catch (error) {
    console.error("Failed to load topic-path-map.json", error);
  }
  return {};
}

function getSubjects(branch: string, sem: number) {
  try {
    const subjectFilePath = path.join(
      process.cwd(),
      "src",
      "data",
      "subjects",
      `${branch.toLowerCase()}-${sem}.json`
    );
    if (fs.existsSync(subjectFilePath)) {
      return JSON.parse(fs.readFileSync(subjectFilePath, "utf8"));
    }
  } catch (e) {
    console.error("Failed to load subjects file:", e);
  }
  return [];
}

function getNotesSize(dirPath: string): number {
  let size = 0;
  if (!fs.existsSync(dirPath)) return 0;
  try {
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        size += getNotesSize(filePath);
      } else {
        size += stats.size;
      }
    }
  } catch (e) {
    console.error("Error reading directory size:", e);
  }
  return size;
}

interface AuditResult {
  totalSubjects: number;
  totalTopics: number;
  coveredTopics: number;
  coveragePercentage: number;
  missingNotes: {
    subject: string;
    subjectId: string;
    semester: number;
    branch: string;
    topicTitle: string;
    topicId: string;
  }[];
}

function runSyllabusAudit(allowedBranches: string[]): AuditResult {
  const subjectsDir = path.join(process.cwd(), "src", "data", "subjects");
  const topicPathMap = getTopicPathMap();

  let totalSubjects = 0;
  let totalTopics = 0;
  let coveredTopics = 0;
  const missingNotes: AuditResult["missingNotes"] = [];

  if (!fs.existsSync(subjectsDir)) {
    return { totalSubjects: 0, totalTopics: 0, coveredTopics: 0, coveragePercentage: 0, missingNotes: [] };
  }

  try {
    const files = fs.readdirSync(subjectsDir);
    for (const file of files) {
      if (!file.endsWith(".json")) continue;
      const parts = file.split("-");
      const branch = parts[0];
      if (!allowedBranches.includes(branch)) continue;

      const subjectData = JSON.parse(fs.readFileSync(path.join(subjectsDir, file), "utf8"));
      if (!Array.isArray(subjectData)) continue;

      for (const subject of subjectData) {
        totalSubjects++;
        if (!subject.modules) continue;
        for (const mod of subject.modules) {
          if (!mod.topics) continue;
          for (const topic of mod.topics) {
            totalTopics++;
            const relativePath = topicPathMap[topic.id];
            let exists = false;
            if (relativePath) {
              const fullPath = path.join(process.cwd(), "public", relativePath);
              if (fs.existsSync(fullPath)) {
                const stat = fs.statSync(fullPath);
                if (stat.size > 10) exists = true;
              }
            }
            if (exists) {
              coveredTopics++;
            } else {
              missingNotes.push({
                subject: subject.name,
                subjectId: subject.id,
                semester: subject.semester,
                branch: branch.toUpperCase(),
                topicTitle: topic.title,
                topicId: topic.id,
              });
            }
          }
        }
      }
    }
  } catch (e) {
    console.error("Error executing syllabus audit:", e);
  }

  const coveragePercentage = totalTopics > 0 ? Math.round((coveredTopics / totalTopics) * 100) : 0;
  return { totalSubjects, totalTopics, coveredTopics, coveragePercentage, missingNotes };
}

interface Announcement {
  title: string;
  link: string;
}

async function getKtuAnnouncements(): Promise<Announcement[]> {
  try {
    const res = await fetch("https://ktu.edu.in/eu/announcements/announcements.htm", {
      next: { revalidate: 300 },
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });
    if (!res.ok) throw new Error("Failed to fetch announcements");
    const html = await res.text();

    const regex = /<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
    const announcements: Announcement[] = [];
    let match;
    while ((match = regex.exec(html)) !== null) {
      const href = match[1];
      const text = match[2].replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
      if (
        (href.toLowerCase().includes("attachments") || href.toLowerCase().includes("eu")) &&
        text.length > 8
      ) {
        let fullHref = href;
        if (href.startsWith("/")) {
          fullHref = `https://ktu.edu.in${href}`;
        } else if (!href.startsWith("http")) {
          fullHref = `https://ktu.edu.in/eu/announcements/${href}`;
        }
        if (!announcements.some((a) => a.title === text)) {
          announcements.push({ title: text, link: fullHref });
        }
      }
      if (announcements.length >= 5) break;
    }
    return announcements;
  } catch (e) {
    console.error("Failed to fetch KTU announcements:", e);
    return [
      { title: "B.Tech S4 Regular & Supplementary Examination Registration is open", link: "https://ktu.edu.in" },
      { title: "Timetable for B.Tech S6 Regular Examinations, July 2026", link: "https://ktu.edu.in" },
      { title: "Notification regarding Grace Marks for Activity Points", link: "https://ktu.edu.in" },
      { title: "S2 Supplementary Examination results published", link: "https://ktu.edu.in" },
      { title: "Academic Calendar for Odd Semesters (S1, S3, S5, S7) - 2026-27", link: "https://ktu.edu.in" },
    ];
  }
}

export default async function AdminDashboard({ searchParams }: PageProps) {
  const params = await searchParams;
  const accessKey = typeof params?.key === "string" ? params.key : "";
  const correctSecret = process.env.ADMIN_SECRET_KEY;

  if (!correctSecret || !accessKey || !safeEqual(accessKey, correctSecret)) {
    notFound();
  }

  const runAuditParam = params?.audit === "true";

  const cmsBranch = ((params?.branch as string) || "cs").toLowerCase();
  const cmsSem = parseInt(params?.sem as string, 10) || 4;
  const cmsSubjectId = (params?.subject as string) || "";
  const cmsTopicId = (params?.topic as string) || "";

  const cookieStore = await cookies();
  const cookieSecret = cookieStore.get("admin_secret")?.value;
  const isAuthorized = cookieSecret && correctSecret ? safeEqual(cookieSecret, correctSecret) : false;

  if (!isAuthorized) {
    return <AdminLoginForm accessKey={accessKey} />;
  }

  const config = await readSiteConfig();

  const notesDirPath = path.join(process.cwd(), "public", "notes");
  const notesSizeBytes = getNotesSize(notesDirPath);
  const notesSizeMB = (notesSizeBytes / (1024 * 1024)).toFixed(1);

  const auditResult = runAuditParam ? runSyllabusAudit(config.allowedBranches) : null;

  const announcements = await getKtuAnnouncements();

  let cmsSubjects: any[] = [];
  if (cmsBranch && cmsSem > 0) {
    cmsSubjects = getSubjects(cmsBranch, cmsSem);
  }

  const topicPathMap = getTopicPathMap();

  let currentNoteContent = "";
  let currentNotePath = "";
  if (cmsTopicId) {
    currentNotePath = topicPathMap[cmsTopicId] || "";
    if (currentNotePath) {
      const fullNotePath = path.join(process.cwd(), "public", currentNotePath);
      if (fs.existsSync(fullNotePath)) {
        currentNoteContent = fs.readFileSync(fullNotePath, "utf8");
      }
    }
  }

  let initialTimetableExams: any[] = [];
  const overrideKey = `${cmsBranch}-${cmsSem}`;
  if (config.timetableOverrides && config.timetableOverrides[overrideKey]) {
    initialTimetableExams = config.timetableOverrides[overrideKey];
  } else {
    initialTimetableExams = getTimetable(cmsBranch, cmsSem);
  }

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#070709] text-white flex items-center justify-center">
        <div className="text-gray-400 text-sm">Loading admin panel...</div>
      </div>
    }>
      <AdminPanel
        config={config}
        cmsSubjects={cmsSubjects}
        cmsBranch={cmsBranch}
        cmsSem={cmsSem}
        cmsSubjectId={cmsSubjectId}
        cmsTopicId={cmsTopicId}
        currentNoteContent={currentNoteContent}
        currentNotePath={currentNotePath}
        initialTimetableExams={initialTimetableExams}
        topicPathMap={topicPathMap}
        notesSizeMB={notesSizeMB}
        announcements={announcements}
        auditResult={auditResult}
        runAuditParam={runAuditParam}
        accessKey={accessKey}
      />
    </Suspense>
  );
}
