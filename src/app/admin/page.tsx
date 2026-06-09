import fs from "fs";
import path from "path";
import Link from "next/link";
import { 
  Settings, Shield, AlertTriangle, CheckCircle, RefreshCw, 
  Database, Bell, ArrowLeft, LogOut
} from "lucide-react";
import CmsPanel from "@/components/admin/CmsPanel";
import KtuAnnouncementsList from "@/components/admin/KtuAnnouncementsList";
import TimetableEditor from "@/components/admin/TimetableEditor";
import SchemeInspector from "@/components/admin/SchemeInspector";
import JsonConfigEditor from "@/components/admin/JsonConfigEditor";
import FaqEditor from "@/components/admin/FaqEditor";
import QuickLinksEditor from "@/components/admin/QuickLinksEditor";
import AdminConfigForm from "@/components/admin/AdminConfigForm";
import AdminLoginForm from "@/components/admin/AdminLoginForm";
import { getTimetable } from "@/lib/timetableData";
import { readSiteConfig, siteConfigPath } from "@/lib/siteConfig";
import { 
  saveNoteFile, 
  saveRawConfig, 
  saveTimetableOverride, 
  saveFaqOverride, 
  saveQuickLinksOverride 
} from "./actions";
import { logoutAdmin } from "./auth";
import { cookies } from "next/headers";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const dynamic = "force-dynamic";

// Helper to read topic path map
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

// Helper to load subjects
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

// Helper to calculate notes folder size recursively
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

// Syllabus audit logic
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
                if (stat.size > 10) {
                  exists = true;
                }
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
                topicId: topic.id
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

// Scrape KTU Announcements
interface Announcement {
  title: string;
  link: string;
}

async function getKtuAnnouncements(): Promise<Announcement[]> {
  try {
    const res = await fetch("https://ktu.edu.in/eu/announcements/announcements.htm", {
      next: { revalidate: 300 }, // cache for 5 minutes
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      }
    });
    if (!res.ok) throw new Error("Failed to fetch announcements");
    const html = await res.text();
    
    const regex = /<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
    const announcements: Announcement[] = [];
    let match;
    while ((match = regex.exec(html)) !== null) {
      const href = match[1];
      const text = match[2].replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
      if ((href.toLowerCase().includes("attachments") || href.toLowerCase().includes("eu")) && text.length > 8) {
        let fullHref = href;
        if (href.startsWith("/")) {
          fullHref = `https://ktu.edu.in${href}`;
        } else if (!href.startsWith("http")) {
          fullHref = `https://ktu.edu.in/eu/announcements/${href}`;
        }
        if (!announcements.some(a => a.title === text)) {
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
      { title: "Academic Calendar for Odd Semesters (S1, S3, S5, S7) - 2026-27", link: "https://ktu.edu.in" }
    ];
  }
}

export default async function AdminDashboard({ searchParams }: PageProps) {
  const params = await searchParams;
  const runAuditParam = params?.audit === "true";
  
  // Note CMS dynamic props
  const cmsBranch = ((params?.branch as string) || "cs").toLowerCase();
  const cmsSem = parseInt(params?.sem as string, 10) || 4;
  const cmsSubjectId = (params?.subject as string) || "";
  const cmsTopicId = (params?.topic as string) || "";
  
  const correctSecret = process.env.ADMIN_SECRET_KEY;
  if (!correctSecret) {
    return (
      <div className="min-h-screen bg-[#070709] text-white flex flex-col items-center justify-center p-6 font-sans">
        <div className="relative z-10 max-w-lg w-full bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl">
          <div className="inline-flex p-4 bg-amber-500/10 rounded-2xl text-amber-400 mb-6 mx-auto">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h1 className="text-xl font-bold text-amber-400 mb-3">Missing Environment Variable</h1>
          <p className="text-white/60 text-sm mb-4 leading-relaxed">
            The <code className="px-1.5 py-0.5 bg-white/10 rounded text-amber-300 font-mono text-xs">ADMIN_SECRET_KEY</code> environment variable is not configured on this server.
          </p>
          <div className="bg-black/30 border border-white/5 rounded-xl p-4 text-left text-sm space-y-2">
            <p className="text-gray-300 font-semibold">To fix this:</p>
            <ol className="list-decimal list-inside text-gray-400 space-y-1 text-xs">
              <li>SSH into your server and navigate to the project directory</li>
              <li>Add <code className="text-amber-300 font-mono">ADMIN_SECRET_KEY=your_secret_here</code> to your <code className="text-amber-300 font-mono">.env.local</code> file</li>
              <li>Restart the server: <code className="text-amber-300 font-mono">npm run build &amp;&amp; npm run start</code></li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
  const cookieStore = await cookies();
  const cookieSecret = cookieStore.get("admin_secret")?.value;
  const isAuthorized = cookieSecret === correctSecret;

  // 401 Unauthorized password gate
  if (!isAuthorized) {
    return <AdminLoginForm />;
  }

  const config = await readSiteConfig();
  const rawConfigString = fs.existsSync(siteConfigPath) ? fs.readFileSync(siteConfigPath, "utf8") : JSON.stringify(config, null, 2);
  
  // Calculate notes folder size
  const notesDirPath = path.join(process.cwd(), "public", "notes");
  const notesSizeBytes = getNotesSize(notesDirPath);
  const notesSizeMB = (notesSizeBytes / (1024 * 1024)).toFixed(1);

  // Run syllabus audit if requested
  const auditResult = runAuditParam 
    ? runSyllabusAudit(config.allowedBranches) 
    : null;

  // Load scraped Announcements
  const announcements = await getKtuAnnouncements();

  // Load dynamic CMS subjects & note content
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

  // Load initial timetable exams (overrides or default fallback)
  let initialTimetableExams: any[] = [];
  const overrideKey = `${cmsBranch}-${cmsSem}`;
  if (config.timetableOverrides && config.timetableOverrides[overrideKey]) {
    initialTimetableExams = config.timetableOverrides[overrideKey];
  } else {
    initialTimetableExams = getTimetable(cmsBranch, cmsSem);
  }



  return (
    <div className="min-h-screen bg-[#070709] text-white p-6 md:p-10 font-sans">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[-100px] right-[-50px] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute bottom-[10%] left-[-50px] w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/10 pb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 text-[10px] font-black tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full uppercase">
                Admin Console
              </span>
              {config.maintenanceMode && (
                <span className="px-2.5 py-1 text-[10px] font-black tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full uppercase animate-pulse">
                  Maintenance Active
                </span>
              )}
            </div>
            <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {config.siteName} Control Center
            </h1>
            <p className="text-gray-400 text-sm mt-1">Manage global system parameters, timetables, note libraries, and rules.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link 
              href="/" 
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> Exit to Homepage
            </Link>
            <form action={logoutAdmin}>
              <button 
                type="submit" 
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400 transition text-sm flex items-center gap-2 cursor-pointer"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </form>
            {!runAuditParam ? (
              <Link 
                href={`/admin?audit=true`}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition text-sm flex items-center gap-2 shadow-lg shadow-blue-900/30"
              >
                <RefreshCw className="w-4 h-4" /> Run Syllabus Audit
              </Link>
            ) : (
              <Link 
                href={`/admin`}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm flex items-center gap-2"
              >
                Clear Audit
              </Link>
            )}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Analytics & Metrics */}
          <div className="space-y-8 lg:col-span-1">
            
            {/* System Analytics */}
            <section className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <Database className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-gray-200">System Analytics</h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Total Notes Payload</p>
                  <p className="text-3xl font-black text-emerald-400 mt-1">~{notesSizeMB} MB</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Target Regulation</p>
                  <p className="text-lg font-bold mt-1 text-white">{config.activeScheme}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Syllabus Coverage</p>
                  <p className="text-sm font-semibold mt-1 text-white">
                    {auditResult ? `${auditResult.coveragePercentage}% (${auditResult.coveredTopics}/${auditResult.totalTopics} topics)` : "Run Audit to calculate"}
                  </p>
                </div>
              </div>
            </section>

            {/* Scraped KTU portal announcements */}
            <section className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-200">KTU Portal Feed</h2>
                  <p className="text-[10px] text-gray-400 mt-0.5">Real-time alerts scraped from KTU portal.</p>
                </div>
              </div>
              
              <KtuAnnouncementsList announcements={announcements} />
            </section>

            {/* Audit Summary Card */}
            {auditResult && (
              <section className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-200">Syllabus Audit Status</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-400 bg-emerald-500/10 border border-emerald-500/25">
                          Notes Coverage
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold text-emerald-400">
                          {auditResult.coveragePercentage}%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2.5 text-xs flex rounded-full bg-white/10">
                      <div 
                        style={{ width: `${auditResult.coveragePercentage}%` }} 
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-emerald-500 to-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="p-3 bg-white/5 rounded-xl text-center border border-white/5">
                      <p className="text-xs text-gray-400 font-bold uppercase">Subjects</p>
                      <p className="text-xl font-black text-white mt-1">{auditResult.totalSubjects}</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl text-center border border-white/5">
                      <p className="text-xs text-gray-400 font-bold uppercase">Missing Notes</p>
                      <p className="text-xl font-black text-rose-400 mt-1">{auditResult.missingNotes.length}</p>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Column 2 & 3: Configuration Forms, CMS & Audit Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Syllabus Audit Missing Notes List */}
            {runAuditParam && auditResult && (
              <section className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-rose-500/10 rounded-lg text-rose-400">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-200">Missing Notes Audit</h2>
                    <p className="text-xs text-gray-400 mt-0.5">Showing missing note items across allowed semesters & branches.</p>
                  </div>
                </div>

                {auditResult.missingNotes.length === 0 ? (
                  <div className="p-8 text-center bg-white/5 rounded-2xl border border-white/5 text-gray-400">
                    <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <p className="font-semibold text-sm">All topics are fully covered! 100% database match.</p>
                  </div>
                ) : (
                  <div className="max-h-[350px] overflow-y-auto space-y-2.5 pr-2 scrollbar-thin">
                    {auditResult.missingNotes.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5 text-sm gap-4">
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-white truncate max-w-md">{item.topicTitle}</p>
                          <p className="text-xs text-gray-400 mt-0.5 truncate max-w-sm">
                            {item.subject}
                          </p>
                        </div>
                        <div className="flex items-center gap-2.5 flex-shrink-0">
                          <span className="px-2 py-0.5 text-[10px] font-bold bg-white/10 rounded-md text-gray-300">
                            {item.branch}
                          </span>
                          <span className="px-2 py-0.5 text-[10px] font-bold bg-blue-500/10 text-blue-400 rounded-md">
                            S{item.semester}
                          </span>
                          <Link 
                            href={`/admin?audit=true&branch=${item.branch.toLowerCase()}&sem=${item.semester}&subject=${item.subjectId}&topic=${item.topicId}#note-editor`}
                            className="px-2.5 py-1 text-[10px] font-bold bg-blue-600/25 hover:bg-blue-600 text-blue-400 hover:text-white rounded-md transition-colors"
                          >
                            Resolve
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* Note Editor & Database CMS Panel */}
            <CmsPanel 
              allowedBranches={config.allowedBranches}
              visibleSemesters={config.visibleSemesters || [1, 2, 3, 4, 5, 6, 7, 8]}
              subjects={cmsSubjects}
              currentBranch={cmsBranch}
              currentSem={cmsSem}
              currentSubjectId={cmsSubjectId}
              currentTopicId={cmsTopicId}
              currentNoteContent={currentNoteContent}
              currentNotePath={currentNotePath}
              saveNoteAction={saveNoteFile}
            />

            {/* Timetable Override Editor */}
            <TimetableEditor
              allowedBranches={config.allowedBranches}
              visibleSemesters={config.visibleSemesters || [1, 2, 3, 4, 5, 6, 7, 8]}
              initialExams={initialTimetableExams}
              currentBranch={cmsBranch}
              currentSem={cmsSem}
              saveTimetableAction={saveTimetableOverride}
            />

            {/* Curriculum Scheme Inspector */}
            <SchemeInspector
              subjects={cmsSubjects}
              topicPathMap={topicPathMap}
            />

            {/* Dynamic FAQ Accordion Editor */}
            <FaqEditor
              initialFaqs={config.customFaqs || []}
              saveFaqsAction={saveFaqOverride}
            />

            {/* Quick Links & Resource Manager */}
            <QuickLinksEditor
              initialLinks={config.quickLinks || []}
              saveLinksAction={saveQuickLinksOverride}
            />

            {/* Raw JSON Configuration Editor */}
            <JsonConfigEditor
              initialJson={rawConfigString}
              saveRawConfigAction={saveRawConfig}
            />

            {/* Overrides Configuration Form */}
            <section className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                  <Settings className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-gray-200">Global Variable Overrides</h2>
              </div>

              <AdminConfigForm config={config} notesSizeMB={notesSizeMB}>

                {/* Platform branding name */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Platform Branding Name</label>
                  <input 
                    type="text" 
                    name="siteName" 
                    defaultValue={config.siteName}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition text-sm"
                  />
                </div>

                {/* Single Column Toggle for Maintenance */}
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/[0.04] transition flex items-center justify-between">
                  <div className="pr-4">
                    <p className="text-sm font-bold">Maintenance Freeze</p>
                    <p className="text-xs text-rose-400/80 mt-0.5">Redirect all traffic and lock down routes for server maintenance.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="maintenanceMode" 
                      defaultChecked={config.maintenanceMode}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                  </label>
                </div>

                {/* Site Security & Theme Accents */}
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5 space-y-4">
                  <h3 className="text-sm font-bold text-gray-200 mb-2">Style Skinning & Security Lockdown</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">Primary Theme Accent</label>
                      <select 
                        name="primaryAccent" 
                        defaultValue={config.primaryAccent || "blue"}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none text-xs"
                      >
                        <option value="blue">Blue (Default)</option>
                        <option value="indigo">Indigo</option>
                        <option value="violet">Violet</option>
                        <option value="emerald">Emerald</option>
                        <option value="amber">Amber</option>
                        <option value="rose">Rose</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between p-2.5 bg-black/10 rounded-xl border border-white/5">
                      <div className="pr-2">
                        <span className="block text-[11px] font-semibold text-gray-300">Lockdown Passcode Gate</span>
                        <span className="block text-[9px] text-gray-500">Block all users with a lock screen</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="lockdownMode" 
                          defaultChecked={config.lockdownMode}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-rose-600"></div>
                      </label>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">Lockdown Passcode (Numeric or Text)</label>
                      <input 
                        type="text" 
                        name="lockdownPasscode" 
                        defaultValue={config.lockdownPasscode || "1234"}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-white/30 transition text-xs font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Threshold and Academic Rules Rules Config */}
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5 space-y-4">
                  <h3 className="text-sm font-bold text-gray-200 mb-2">Academic thresholds & Progression criteria</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">Minimum Attendance Threshold (%)</label>
                      <input 
                        type="number" 
                        name="minAttendance" 
                        min="0"
                        max="100"
                        defaultValue={config.minAttendance !== undefined ? config.minAttendance : 75}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-white/30 transition text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">Minimum CIE / Internals Passing Threshold (%)</label>
                      <input 
                        type="number" 
                        name="minCie" 
                        min="0"
                        max="100"
                        defaultValue={config.minCie !== undefined ? config.minCie : 40}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-white/30 transition text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">Target Activity Points Limit</label>
                      <input 
                        type="number" 
                        name="activityPointsLimit" 
                        min="0"
                        defaultValue={config.activityPointsLimit !== undefined ? config.activityPointsLimit : 120}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-white/30 transition text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">End-Sem Exams Target Start Date</label>
                      <input 
                        type="date" 
                        name="examStartDate" 
                        defaultValue={config.examStartDate || "2026-07-15"}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-white/30 transition text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">S5 Progression Minimum Credits</label>
                      <input 
                        type="number" 
                        name="progressionS5Credits" 
                        min="0"
                        defaultValue={config.progressionS5Credits !== undefined ? config.progressionS5Credits : 26}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-white/30 transition text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">S7 Progression Minimum Credits</label>
                      <input 
                        type="number" 
                        name="progressionS7Credits" 
                        min="0"
                        defaultValue={config.progressionS7Credits !== undefined ? config.progressionS7Credits : 52}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-white/30 transition text-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Global Alert Banner Controls */}
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Bell className="w-4 h-4 text-blue-400" />
                      <p className="text-sm font-bold text-gray-200">Emergency Alert Announcement Banner</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        name="bannerEnabled" 
                        defaultChecked={config.bannerEnabled}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div>
                    <input 
                      type="text" 
                      name="bannerText" 
                      defaultValue={config.bannerText}
                      placeholder="Enter banner announcement message (e.g. registration deadlines, exam deadlines)..."
                      className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-white/30 transition text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">Banner Color Severity</label>
                      <select 
                        name="bannerSeverity" 
                        defaultValue={config.bannerSeverity || "info"}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none text-xs"
                      >
                        <option value="info">Info (Blue)</option>
                        <option value="warning">Warning (Amber)</option>
                        <option value="danger">Danger (Red)</option>
                        <option value="success">Success (Green)</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-black/10 rounded-xl border border-white/5">
                      <span className="text-[11px] font-semibold text-gray-400">Dismissible (Can be closed by user)</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="bannerDismissible" 
                          defaultChecked={config.bannerDismissible !== false}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Landing Page Layout Manager */}
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5 space-y-4">
                  <h3 className="text-sm font-bold text-gray-200">Landing Page Sections Visibility</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { key: "compare", label: "Comparison" },
                      { key: "howItWorks", label: "How It Works" },
                      { key: "foundree", label: "Founders Section" },
                      { key: "features", label: "Features List" },
                      { key: "testimonials", label: "Testimonials" },
                      { key: "faqs", label: "FAQ Section" },
                      { key: "cta", label: "CTA Banner" }
                    ].map(sec => {
                      const sectionKey = sec.key as keyof typeof config.landingPageSections;
                      const isChecked = config.landingPageSections ? config.landingPageSections[sectionKey] !== false : true;
                      return (
                        <label key={sec.key} className="flex items-center justify-between p-2.5 bg-black/10 rounded-xl border border-white/5 hover:bg-white/5 transition cursor-pointer">
                          <span className="text-xs text-gray-300 font-semibold">{sec.label}</span>
                          <input 
                            type="checkbox" 
                            name={`section_${sec.key}`} 
                            defaultChecked={isChecked}
                            className="w-4 h-4 accent-blue-500 rounded"
                          />
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* SEO Configuration Editor */}
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5 space-y-4">
                  <h3 className="text-sm font-bold text-gray-200">Search Engine Optimization (SEO)</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">Meta Browser Title</label>
                      <input 
                        type="text" 
                        name="seo_title" 
                        defaultValue={config.seo?.title || ""}
                        placeholder="KTU Notes, Syllabus & PYQs — 2024 Scheme | KTUNODE"
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none text-xs focus:border-white/20"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">Meta Description</label>
                      <textarea 
                        name="seo_description" 
                        defaultValue={config.seo?.description || ""}
                        placeholder="Free B.Tech module-wise KTU notes, previous year question papers..."
                        rows={2}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none text-xs focus:border-white/20"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">Meta Keywords (Comma separated)</label>
                      <input 
                        type="text" 
                        name="seo_keywords" 
                        defaultValue={config.seo?.keywords || ""}
                        placeholder="KTU notes, KTU syllabus, KTU PYQs"
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none text-xs focus:border-white/20"
                      />
                    </div>
                  </div>
                </div>

                {/* Branches Allowed */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Active Engineering Branches (Comma separated)</label>
                  <input 
                    type="text" 
                    name="branches" 
                    defaultValue={config.allowedBranches.join(", ").toUpperCase()}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition font-mono text-sm uppercase"
                  />
                  <p className="text-[11px] text-gray-500 mt-1">Allowed branch keys: CS, EC, ME, CE, EE</p>
                </div>

                {/* Active Scheme Selection */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Active Regulation Scheme</label>
                  <select 
                    name="activeScheme" 
                    defaultValue={config.activeScheme}
                    className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition text-sm"
                  >
                    <option value="2019 Scheme">KTU 2019 Scheme</option>
                    <option value="2024 Scheme">KTU 2024 Scheme (Current)</option>
                  </select>
                </div>

                {/* Visible Semesters Selector */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Visible Semesters (Check to show, uncheck to hide/mark &apos;Coming Soon&apos;)</label>
                  <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5 p-3 bg-white/5 rounded-2xl border border-white/5">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(s => {
                      const isChecked = (config.visibleSemesters || [1,2,3,4,5,6,7,8]).includes(s);
                      return (
                        <label key={s} className="flex flex-col items-center justify-center p-2 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/5 transition cursor-pointer">
                          <span className="text-xs font-bold text-gray-300 mb-1">S{s}</span>
                          <input 
                            type="checkbox" 
                            name={`sem_${s}`} 
                            defaultChecked={isChecked}
                            className="w-4 h-4 accent-blue-500 rounded"
                          />
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Tools Killer Switches */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Active Academic Tools (Toggle on/off features on `/tools` page)</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                    {/* Attendance & CIE */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-gray-200">Attendance Tracker</p>
                        <p className="text-xs text-gray-400 mt-0.5">Enable attendance status checklist & CIE calculator</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="tool_attendance" 
                          defaultChecked={config.activeTools?.attendance !== false}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    {/* GPA & CGPA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-gray-200">GPA Calculator</p>
                        <p className="text-xs text-gray-400 mt-0.5">Enable grade auditor & credit SGPA/CGPA converter</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="tool_gpa" 
                          defaultChecked={config.activeTools?.gpa !== false}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    {/* Runway */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-gray-200">Graduation Runway</p>
                        <p className="text-xs text-gray-400 mt-0.5">Enable Activity Points claims auditor & credit promoter</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="tool_runway" 
                          defaultChecked={config.activeTools?.runway !== false}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    {/* Lab Tracker */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-gray-200">Lab Exercise Tracker</p>
                        <p className="text-xs text-gray-400 mt-0.5">Enable records signing checklist & logic tracker</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="tool_lab" 
                          defaultChecked={config.activeTools?.lab !== false}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* External Links Configuration */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Platform Portal Links</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">KTU Student Login URL</label>
                      <input 
                        type="url" 
                        name="link_student_login" 
                        defaultValue={config.externalLinks?.studentLogin || "https://app.ktu.edu.in"}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-white/30 transition text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">Official KTU Website</label>
                      <input 
                        type="url" 
                        name="link_ktu_portal" 
                        defaultValue={config.externalLinks?.ktuPortal || "https://ktu.edu.in"}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-white/30 transition text-xs"
                      />
                    </div>
                  </div>
                </div>

              </AdminConfigForm>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
