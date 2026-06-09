"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AdminTabs, AdminHeader, TabId } from "./AdminTabs";
import CmsPanel from "@/components/admin/CmsPanel";
import TimetableEditor from "@/components/admin/TimetableEditor";
import FaqEditor from "@/components/admin/FaqEditor";
import QuickLinksEditor from "@/components/admin/QuickLinksEditor";
import AdminConfigForm from "@/components/admin/AdminConfigForm";
import SubjectManager from "@/components/admin/SubjectManager";
import BannerScheduler from "@/components/admin/BannerScheduler";
import BackupRestore from "@/components/admin/BackupRestore";
import ActivityLog from "@/components/admin/ActivityLog";
import AnalyticsDashboard from "@/components/admin/AnalyticsDashboard";
import KtuAnnouncementsList from "@/components/admin/KtuAnnouncementsList";
import UserManagement from "@/components/admin/UserManagement";
import DeploymentStatus from "@/components/admin/DeploymentStatus";
import CacheManager from "@/components/admin/CacheManager";
import ConfigDiffPreview from "@/components/admin/ConfigDiffPreview";
import BulkOperations from "@/components/admin/BulkOperations";
import ScheduledTasks from "@/components/admin/ScheduledTasks";
import LandingPageEditor from "@/components/admin/LandingPageEditor";
import PYQManager from "@/components/admin/PYQManager";
import {
  saveNoteFile,
  saveTimetableOverride,
  saveFaqOverride,
  saveQuickLinksOverride,
  getActivityLog,
  getAnalyticsSummary,
  getSubjectCount,
  getUsers,
  getDeploymentInfo,
  getScheduledTasks,
} from "@/app/admin/actions";
import {
  Settings,
  Bell,
  AlertTriangle,
  CheckCircle,
  Database,
  FileText,
  Shield,
} from "lucide-react";

const defaultLandingContent = {
  hero: { badge: "", headline: "", subtitle: "", ctaText: "", trustBadges: [] as any[] },
  compare: { badge: "", headline: "", description: "", bullets: [] as string[], ctaText: "" },
  howItWorks: { badge: "", headline: "", description: "", ctaText: "", steps: [] as any[] },
  founders: { badge: "", headlinePrefix: "", body: "", rotatingWords: [] as string[], stats: [] as any[], ctaText: "" },
  features: { badge: "", headline: "", description: "", cards: [] as any[], zeroFrictionTitle: "", zeroFrictionDescription: "", launchCtaText: "" },
  testimonials: { badge: "", headline: "", description: "", entries: [] as any[] },
  cta: { badge: "", headline: "", description: "", primaryCta: "", secondaryCta: "", stats: [] as any[] },
  footer: { heading: "", attribution: "", attributionUrl: "", marquee: [] as string[] },
};

interface AdminPanelProps {
  config: any;
  cmsSubjects: any[];
  cmsBranch: string;
  cmsSem: number;
  cmsSubjectId: string;
  cmsTopicId: string;
  currentNoteContent: string;
  currentNotePath: string;
  initialTimetableExams: any[];
  topicPathMap: Record<string, string>;
  notesSizeMB: string;
  announcements: any[];
  auditResult: any;
  runAuditParam: boolean;
}

export default function AdminPanel({
  config,
  cmsSubjects,
  cmsBranch,
  cmsSem,
  cmsSubjectId,
  cmsTopicId,
  currentNoteContent,
  currentNotePath,
  initialTimetableExams,
  topicPathMap,
  notesSizeMB,
  announcements,
  auditResult,
  runAuditParam,
}: AdminPanelProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabId>(
    (searchParams.get("tab") as TabId) || "dashboard"
  );
  const [activityLog, setActivityLog] = useState<any[]>([]);
  const [analytics, setAnalytics] = useState<any>(null);
  const [subjectStats, setSubjectStats] = useState<any>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [deploymentInfo, setDeploymentInfo] = useState<any>(null);
  const [scheduledTasks, setScheduledTasks] = useState<any[]>([]);

  const loadActivityLog = useCallback(async () => {
    const log = await getActivityLog();
    setActivityLog(log);
  }, []);

  const loadAnalytics = useCallback(async () => {
    const data = await getAnalyticsSummary();
    setAnalytics(data);
  }, []);

  const loadSubjectStats = useCallback(async () => {
    const stats = await getSubjectCount();
    setSubjectStats(stats);
  }, []);

  const loadUsers = useCallback(async () => {
    const u = await getUsers();
    setUsers(u);
  }, []);

  const loadDeployment = useCallback(async () => {
    const info = await getDeploymentInfo();
    setDeploymentInfo(info);
  }, []);

  const loadScheduledTasks = useCallback(async () => {
    const tasks = await getScheduledTasks();
    setScheduledTasks(tasks);
  }, []);

  useEffect(() => {
    loadActivityLog();
    loadAnalytics();
    loadSubjectStats();
    loadUsers();
    loadDeployment();
    loadScheduledTasks();
  }, [loadActivityLog, loadAnalytics, loadSubjectStats, loadUsers, loadDeployment, loadScheduledTasks]);

  const handleTabChange = useCallback(
    (tab: TabId) => {
      setActiveTab(tab);
      const url = new URL(window.location.href);
      url.searchParams.set("tab", tab);
      window.history.replaceState({}, "", url.toString());
    },
    []
  );

  const handleAuditToggle = useCallback(() => {
    if (runAuditParam) {
      router.push("/admin?tab=" + activeTab);
    } else {
      router.push("/admin?tab=" + activeTab + "&audit=true");
    }
  }, [runAuditParam, router, activeTab]);

  return (
    <div className="min-h-screen bg-[#070709] text-white p-4 md:p-8 font-sans">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[-100px] right-[-50px] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute bottom-[10%] left-[-50px] w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <AdminHeader
          siteName={config.siteName}
          maintenanceMode={config.maintenanceMode}
          onAuditToggle={handleAuditToggle}
          showAudit={runAuditParam}
        />

        <AdminTabs activeTab={activeTab} onTabChange={handleTabChange}>
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <AnalyticsDashboard
                    todayViews={analytics?.todayViews || 0}
                    totalViews={analytics?.totalViews || 0}
                    dailyBreakdown={analytics?.dailyBreakdown || {}}
                    topPages={analytics?.topPages || []}
                    notesSizeMB={notesSizeMB}
                    subjectCount={subjectStats?.totalSubjects || 0}
                    topicCount={subjectStats?.totalTopics || 0}
                    branchCounts={subjectStats?.byBranch || {}}
                    onRefresh={loadAnalytics}
                  />
                </div>
                <div className="space-y-6">
                  <section className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                        <Bell className="w-5 h-5" />
                      </div>
                      <h2 className="text-lg font-bold text-gray-200">KTU Portal Feed</h2>
                    </div>
                    <KtuAnnouncementsList announcements={announcements} />
                  </section>

                  {auditResult && (
                    <section className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <h2 className="text-lg font-bold text-gray-200">Syllabus Audit</h2>
                      </div>
                      <div className="space-y-3">
                        <div className="relative pt-1">
                          <div className="flex mb-2 items-center justify-between">
                            <span className="text-xs font-semibold text-emerald-400">Coverage</span>
                            <span className="text-sm font-bold text-emerald-400">
                              {auditResult.coveragePercentage}%
                            </span>
                          </div>
                          <div className="overflow-hidden h-2.5 flex rounded-full bg-white/10">
                            <div
                              style={{ width: `${auditResult.coveragePercentage}%` }}
                              className="bg-gradient-to-r from-emerald-500 to-emerald-400"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-white/5 rounded-xl text-center border border-white/5">
                            <p className="text-xs text-gray-400 font-bold uppercase">Subjects</p>
                            <p className="text-xl font-black text-white mt-1">
                              {auditResult.totalSubjects}
                            </p>
                          </div>
                          <div className="p-3 bg-white/5 rounded-xl text-center border border-white/5">
                            <p className="text-xs text-gray-400 font-bold uppercase">Missing</p>
                            <p className="text-xl font-black text-rose-400 mt-1">
                              {auditResult.missingNotes.length}
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Landing Page Tab */}
          {activeTab === "landing" && (
            <LandingPageEditor
              landingContent={config.landingContent || defaultLandingContent}
              sectionToggles={config.landingPageSections || { compare: true, howItWorks: true, foundree: true, features: true, testimonials: true, faqs: true, cta: true }}
            />
          )}

          {/* Content Tab */}
          {activeTab === "content" && (
            <div className="space-y-6">
              <SubjectManager
                allowedBranches={config.allowedBranches}
                visibleSemesters={config.visibleSemesters || [1, 2, 3, 4, 5, 6, 7, 8]}
                initialSubjects={cmsSubjects}
                currentBranch={cmsBranch}
                currentSem={cmsSem}
              />

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

              <PYQManager
                allowedBranches={config.allowedBranches}
                visibleSemesters={config.visibleSemesters || [1, 2, 3, 4, 5, 6, 7, 8]}
                initialSubjects={cmsSubjects}
                currentBranch={cmsBranch}
                currentSem={cmsSem}
              />

              <BulkOperations
                allowedBranches={config.allowedBranches}
                visibleSemesters={config.visibleSemesters || [1, 2, 3, 4, 5, 6, 7, 8]}
              />
            </div>
          )}

          {/* Config Tab */}
          {activeTab === "config" && (
            <section className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                  <Settings className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-gray-200">Global Settings</h2>
              </div>

              <AdminConfigForm config={config} notesSizeMB={notesSizeMB}>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Platform Name
                  </label>
                  <input
                    type="text"
                    name="siteName"
                    defaultValue={config.siteName}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition text-sm"
                  />
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between">
                  <div className="pr-4">
                    <p className="text-sm font-bold">Maintenance Freeze</p>
                    <p className="text-xs text-rose-400/80 mt-0.5">
                      Lock down all routes for server maintenance.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="maintenanceMode"
                      defaultChecked={config.maintenanceMode}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                  </label>
                </div>

                <div className="p-5 bg-white/5 rounded-2xl border border-white/5 space-y-4">
                  <h3 className="text-sm font-bold text-gray-200">Theme & Security</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                        Primary Accent
                      </label>
                      <select
                        name="primaryAccent"
                        defaultValue={config.primaryAccent || "blue"}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none text-xs"
                      >
                        <option value="blue">Blue</option>
                        <option value="indigo">Indigo</option>
                        <option value="violet">Violet</option>
                        <option value="emerald">Emerald</option>
                        <option value="amber">Amber</option>
                        <option value="rose">Rose</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-black/10 rounded-xl border border-white/5">
                      <span className="text-[11px] font-semibold text-gray-300">Lockdown Gate</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="lockdownMode"
                          defaultChecked={config.lockdownMode}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-white/10 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-rose-600"></div>
                      </label>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                        Lockdown Passcode
                      </label>
                      <input
                        type="password"
                        name="lockdownPasscode"
                        defaultValue={config.lockdownPasscode || ""}
                        placeholder="Set a secure passcode"
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-white/30 transition text-xs font-mono"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-white/5 rounded-2xl border border-white/5 space-y-4">
                  <h3 className="text-sm font-bold text-gray-200">Academic Thresholds</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                        Min Attendance (%)
                      </label>
                      <input
                        type="number"
                        name="minAttendance"
                        min="0"
                        max="100"
                        defaultValue={config.minAttendance ?? 75}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                        Min CIE (%)
                      </label>
                      <input
                        type="number"
                        name="minCie"
                        min="0"
                        max="100"
                        defaultValue={config.minCie ?? 40}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                        Activity Points Limit
                      </label>
                      <input
                        type="number"
                        name="activityPointsLimit"
                        min="0"
                        defaultValue={config.activityPointsLimit ?? 120}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                        Exam Start Date
                      </label>
                      <input
                        type="date"
                        name="examStartDate"
                        defaultValue={config.examStartDate || "2026-07-15"}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                        S5 Min Credits
                      </label>
                      <input
                        type="number"
                        name="progressionS5Credits"
                        min="0"
                        defaultValue={config.progressionS5Credits ?? 26}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                        S7 Min Credits
                      </label>
                      <input
                        type="number"
                        name="progressionS7Credits"
                        min="0"
                        defaultValue={config.progressionS7Credits ?? 52}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none text-xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-white/5 rounded-2xl border border-white/5 space-y-4">
                  <h3 className="text-sm font-bold text-gray-200">Landing Page Sections</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { key: "compare", label: "Comparison" },
                      { key: "howItWorks", label: "How It Works" },
                      { key: "foundree", label: "Founders" },
                      { key: "features", label: "Features" },
                      { key: "testimonials", label: "Testimonials" },
                      { key: "faqs", label: "FAQs" },
                      { key: "cta", label: "CTA Banner" },
                    ].map((sec) => {
                      const sectionKey = sec.key as keyof typeof config.landingPageSections;
                      const isChecked = config.landingPageSections
                        ? config.landingPageSections[sectionKey] !== false
                        : true;
                      return (
                        <label
                          key={sec.key}
                          className="flex items-center justify-between p-2.5 bg-black/10 rounded-xl border border-white/5 hover:bg-white/5 transition cursor-pointer"
                        >
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

                <div className="p-5 bg-white/5 rounded-2xl border border-white/5 space-y-4">
                  <h3 className="text-sm font-bold text-gray-200">SEO</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                        Meta Title
                      </label>
                      <input
                        type="text"
                        name="seo_title"
                        defaultValue={config.seo?.title || ""}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                        Meta Description
                      </label>
                      <textarea
                        name="seo_description"
                        defaultValue={config.seo?.description || ""}
                        rows={2}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                        Keywords (comma separated)
                      </label>
                      <input
                        type="text"
                        name="seo_keywords"
                        defaultValue={config.seo?.keywords || ""}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none text-xs"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Active Branches
                  </label>
                  <input
                    type="text"
                    name="branches"
                    defaultValue={config.allowedBranches.join(", ").toUpperCase()}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition font-mono text-sm uppercase"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Regulation Scheme
                  </label>
                  <select
                    name="activeScheme"
                    defaultValue={config.activeScheme}
                    className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none text-sm"
                  >
                    <option value="2019 Scheme">KTU 2019 Scheme</option>
                    <option value="2024 Scheme">KTU 2024 Scheme</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Visible Semesters
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5 p-3 bg-white/5 rounded-2xl border border-white/5">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => {
                      const isChecked = (config.visibleSemesters || [1, 2, 3, 4, 5, 6, 7, 8]).includes(s);
                      return (
                        <label
                          key={s}
                          className="flex flex-col items-center justify-center p-2 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/5 transition cursor-pointer"
                        >
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

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Academic Tools
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                    {[
                      { name: "tool_attendance", label: "Attendance Tracker", desc: "Attendance & CIE" },
                      { name: "tool_gpa", label: "GPA Calculator", desc: "SGPA/CGPA converter" },
                      { name: "tool_runway", label: "Graduation Runway", desc: "Activity points & credits" },
                      { name: "tool_lab", label: "Lab Tracker", desc: "Exercise checklist" },
                    ].map((tool) => (
                      <div key={tool.name} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-gray-200">{tool.label}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{tool.desc}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            name={tool.name}
                            defaultChecked={config.activeTools?.[tool.name.replace("tool_", "") as keyof typeof config.activeTools] !== false}
                            className="sr-only peer"
                          />
                          <div className="w-9 h-5 bg-white/10 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Portal Links
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                        Student Login URL
                      </label>
                      <input
                        type="url"
                        name="link_student_login"
                        defaultValue={config.externalLinks?.studentLogin || "https://app.ktu.edu.in"}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                        KTU Portal URL
                      </label>
                      <input
                        type="url"
                        name="link_ktu_portal"
                        defaultValue={config.externalLinks?.ktuPortal || "https://ktu.edu.in"}
                        className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none text-xs"
                      />
                    </div>
                  </div>
                </div>
              </AdminConfigForm>
            </section>
          )}

          {/* Banners Tab */}
          {activeTab === "banners" && (
            <div className="space-y-6">
              <BannerScheduler
                bannerEnabled={config.bannerEnabled}
                bannerText={config.bannerText}
                bannerSeverity={config.bannerSeverity}
                bannerDismissible={config.bannerDismissible}
                bannerStart={config.bannerStart || ""}
                bannerEnd={config.bannerEnd || ""}
              />
              <ScheduledTasks initialTasks={scheduledTasks} />
            </div>
          )}

          {/* Timetable Tab */}
          {activeTab === "timetable" && (
            <TimetableEditor
              allowedBranches={config.allowedBranches}
              visibleSemesters={config.visibleSemesters || [1, 2, 3, 4, 5, 6, 7, 8]}
              initialExams={initialTimetableExams}
              currentBranch={cmsBranch}
              currentSem={cmsSem}
              saveTimetableAction={saveTimetableOverride}
            />
          )}

          {/* FAQs & Links Tab */}
          {activeTab === "faqs" && (
            <div className="space-y-6">
              <FaqEditor
                initialFaqs={config.customFaqs || []}
                saveFaqsAction={saveFaqOverride}
              />
              <QuickLinksEditor
                initialLinks={config.quickLinks || []}
                saveLinksAction={saveQuickLinksOverride}
              />
            </div>
          )}

          {/* Users Tab */}
          {activeTab === "users" && (
            <UserManagement initialUsers={users} />
          )}

          {/* System Tab */}
          {activeTab === "system" && (
            <div className="space-y-6">
              {deploymentInfo && <DeploymentStatus info={deploymentInfo} />}
              <CacheManager />
              <ActivityLog initialLog={activityLog} />
            </div>
          )}

          {/* Backup Tab */}
          {activeTab === "backup" && (
            <div className="space-y-6">
              <BackupRestore />
              <ConfigDiffPreview currentConfigJson={JSON.stringify(config, null, 2)} />
            </div>
          )}
        </AdminTabs>
      </div>
    </div>
  );
}
