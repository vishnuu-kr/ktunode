import { Suspense } from "react";
import { AlertTriangle } from "lucide-react";
import AdminPanel from "@/components/admin/AdminPanel";
import AdminLoginForm from "@/components/admin/AdminLoginForm";
import { getTimetable } from "@/lib/timetableData";
import { readSiteConfig } from "@/lib/siteConfig";
import { cookies } from "next/headers";
import { validateAdminSession } from "@/lib/session";
import path from "path";
import { fileExists, readJsonFile, readTextFile, readDir, statIsDir } from "@/lib/fsHelper";
import fs from "fs";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

function getTopicPathMap() {
  try {
    const mapPath = path.join(process.cwd(), "src", "data", "topic-path-map.json");
    if (fileExists(mapPath)) {
      return readJsonFile(mapPath);
    }
  } catch (error) {
    console.error("Failed to load topic-path-map.json", error);
  }
  return {};
}

function getSubjects(branch: string, sem: number) {
  try {
    const folderPath = path.join(
      process.cwd(),
      "src",
      "data",
      "subjects",
      `${branch.toLowerCase()}-${sem}`
    );
    if (fileExists(folderPath) && statIsDir(folderPath)) {
      const files = readDir(folderPath);
      const subjects: any[] = [];
      for (const file of files) {
        if (file.endsWith(".json")) {
          const s = readJsonFile(path.join(folderPath, file));
          subjects.push(s);
        }
      }
      return subjects;
    }
  } catch (e) {
    console.error("Failed to load subjects file:", e);
  }
  return [];
}

function getNotesSize(dirPath: string): number {
  let size = 0;
  if (!fileExists(dirPath)) return 0;
  try {
    const files = readDir(dirPath);
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      if (statIsDir(filePath)) {
        size += getNotesSize(filePath);
      } else {
        const stats = fs.statSync(filePath);
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

  if (!fileExists(subjectsDir)) {
    return { totalSubjects: 0, totalTopics: 0, coveredTopics: 0, coveragePercentage: 0, missingNotes: [] };
  }

  try {
    const folders = readDir(subjectsDir);
    for (const folder of folders) {
      const folderPath = path.join(subjectsDir, folder);
      if (!statIsDir(folderPath)) continue;

      const lastDashIndex = folder.lastIndexOf("-");
      if (lastDashIndex === -1) continue;

      const branch = folder.substring(0, lastDashIndex);
      const semStr = folder.substring(lastDashIndex + 1);
      const sem = Number(semStr);
      if (isNaN(sem)) continue;

      if (!allowedBranches.includes(branch)) continue;

      try {
        const files = readDir(folderPath);
        for (const file of files) {
          if (!file.endsWith(".json")) continue;
          const subject = readJsonFile(path.join(folderPath, file));
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
                if (fileExists(fullPath)) {
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
                  semester: sem,
                  branch: branch.toUpperCase(),
                  topicTitle: topic.title,
                  topicId: topic.id,
                });
              }
            }
          }
        }
      } catch (innerError) {
        // skip corrupt files/folders
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
  const correctSecret = process.env.ADMIN_SECRET_KEY;

  if (!correctSecret) {
    return (
      <div className="min-h-screen bg-[#070709] text-white flex flex-col items-center justify-center p-6 font-sans">
        <div className="max-w-lg w-full bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl text-center">
          <div className="inline-flex p-4 bg-amber-500/10 rounded-2xl text-amber-400 mb-6 mx-auto">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h1 className="text-xl font-bold text-amber-400 mb-3">Admin Panel Not Configured</h1>
          <p className="text-white/60 text-sm mb-4 leading-relaxed">
            The <code className="px-1.5 py-0.5 bg-white/10 rounded text-amber-300 font-mono text-xs">ADMIN_SECRET_KEY</code> environment variable is not set.
          </p>
          <div className="bg-black/30 border border-white/5 rounded-xl p-4 text-left text-sm space-y-2">
            <p className="text-gray-300 font-semibold">To fix this:</p>
            <ol className="list-decimal list-inside text-gray-400 space-y-1 text-xs">
              <li>Go to your Vercel dashboard → Settings → Environment Variables</li>
              <li>Add <code className="text-amber-300 font-mono">ADMIN_SECRET_KEY</code> with any secret value</li>
              <li>Set it for Production, Preview, and Development</li>
              <li>Redeploy your project</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  const runAuditParam = params?.audit === "true";

  const cmsBranch = ((params?.branch as string) || "cs").toLowerCase();
  const cmsSem = parseInt(params?.sem as string, 10) || 4;
  const cmsSubjectId = (params?.subject as string) || "";
  const cmsTopicId = (params?.topic as string) || "";

  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("admin_session")?.value;
  const isAuthorized = sessionToken ? await validateAdminSession(sessionToken) : false;

  if (!isAuthorized) {
    return <AdminLoginForm />;
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
      if (fileExists(fullNotePath)) {
        currentNoteContent = readTextFile(fullNotePath);
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
      />
    </Suspense>
  );
}
