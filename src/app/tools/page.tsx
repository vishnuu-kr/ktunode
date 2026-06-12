"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useTheme } from "next-themes";
import { triggerHaptic } from "@/lib/haptic";
import { ToolsSchema } from "@/components/ToolsSchema";
import {
  Calculator, Sparkles, GraduationCap, Activity, Award, Clock, FlaskConical, LayoutDashboard, ShieldCheck, LayoutGrid,
  ChevronDown
} from "lucide-react";

import ToolsOnboardingTour from "@/components/tools/ToolsOnboardingTour";
import AttendanceTracker from "@/components/tools/AttendanceTracker";
import GradeGpaCalculator from "@/components/tools/GradeGpaCalculator";
import GraduationRunway from "@/components/tools/GraduationRunway";
import ExamCommandPanel from "@/components/tools/ExamCommandPanel";
import LabRecordTracker from "@/components/tools/LabRecordTracker";
import MicroToolsGrid from "@/components/tools/MicroToolsGrid";
import MissionControlDashboard from "@/components/mission-control/MissionControlDashboard";
import { getDefaultLabsForSession } from "@/data/lab_templates";

// Grade points map for CGPA/SGPA summaries
const GRADE_POINTS: Record<string, number> = {
  "O": 10,
  "A+": 9,
  "A": 8,
  "B+": 7,
  "B": 6,
  "C": 5,
  "P": 4,
  "F": 0
};

interface Subject {
  id: string;
  code: string;
  name: string;
  credits: number;
}

interface AttendanceSubject {
  id: string;
  code: string;
  name: string;
  attended: number;
  total: number;
}

interface BacklogSubject {
  id: string;
  code: string;
  name: string;
  semester: number;
  attempts: number;
  status: 'pending' | 'cleared' | 'registered';
}

interface ActivityClaim {
  id: string;
  activityCode: string;
  points: number;
  level?: string;
  quantity?: number;
  detail?: string;
}

export default function ToolsPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Shared academic states
  const [branch, setBranch] = useState("cs");
  const [sem, setSem] = useState<number>(4);
  const [showNotification, setShowNotification] = useState<string | null>(null);
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<"attendance" | "grades" | "graduation" | "exam" | "labs" | "microtools" | "missioncontrol">("attendance");
  const [siteConfig, setSiteConfig] = useState<any>(null);

  // Sub-components state syncing
  const [attendanceSubjects, setAttendanceSubjects] = useState<AttendanceSubject[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [attendanceStreak, setAttendanceStreak] = useState(0);

  const [studentType, setStudentType] = useState<"regular" | "lateral" | "pwd">("regular");
  const [selectedActivities, setSelectedActivities] = useState<ActivityClaim[]>([]);
  const [progressionTarget, setProgressionTarget] = useState<"s5" | "s7">("s5");
  const [progressionCredits, setProgressionCredits] = useState({ s1: 0, s2: 0, s3: 0, s4: 0 });
  const [backlogSubjects, setBacklogSubjects] = useState<BacklogSubject[]>([]);

  const [mtMilestones, setMtMilestones] = useState<Record<string, boolean[]>>({});
  const [mtCramHours, setMtCramHours] = useState(8);

  const [gpaUpdateTrigger, setGpaUpdateTrigger] = useState(0);
  const tabBarSpacerRef = useRef<HTMLDivElement>(null);

  // Global click haptic wrapper
  useEffect(() => {
    if (!mounted) return;

    const unlockAudio = () => {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        try {
          const tempCtx = new AudioContextClass();
          if (tempCtx.state === "suspended") {
            tempCtx.resume();
          }
        } catch {}
      }
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };
    window.addEventListener("click", unlockAudio);
    window.addEventListener("touchstart", unlockAudio);

    const handleGlobalClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement | null;
      while (target && target !== document.body) {
        const tagName = target.tagName.toLowerCase();
        const role = target.getAttribute("role");
        const isInteractive =
          tagName === "button" ||
          tagName === "a" ||
          tagName === "select" ||
          tagName === "input" ||
          role === "button" ||
          role === "tab" ||
          role === "checkbox" ||
          role === "option" ||
          target.classList.contains("cursor-pointer") ||
          target.classList.contains("pill-btn") ||
          target.onclick != null;

        if (isInteractive) {
          const text = target.innerText?.toLowerCase() || "";
          const ariaLabel = target.getAttribute("aria-label")?.toLowerCase() || "";
          const className = target.className?.toLowerCase() || "";
          
          let hapticType: "light" | "medium" | "heavy" | "success" | "warning" = "light";
          
          if (
            text.includes("delete") || 
            text.includes("remove") || 
            text.includes("clear") || 
            text.includes("reset") ||
            ariaLabel.includes("delete") ||
            ariaLabel.includes("remove") ||
            className.includes("trash") ||
            className.includes("rose") ||
            className.includes("danger")
          ) {
            hapticType = "warning";
          } else if (
            text.includes("save") || 
            text.includes("add") || 
            text.includes("confirm") || 
            text.includes("load") ||
            text.includes("download") ||
            text.includes("generate") ||
            role === "tab" ||
            className.includes("tab") ||
            tagName === "select"
          ) {
            hapticType = "medium";
          }

          triggerHaptic(hapticType, e);
          break; 
        }
        target = target.parentElement;
      }
    };

    window.addEventListener("click", handleGlobalClick, { capture: true });
    return () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("click", handleGlobalClick, { capture: true });
    };
  }, [mounted]);

  // Load configuration & mount values
  useEffect(() => {
    setMounted(true);

    const savedBranch = localStorage.getItem("ktunode_branch") || "cs";
    const savedSem = Number(localStorage.getItem("ktunode_semester")) || 4;
    setBranch(savedBranch);
    setSem(savedSem);

    // Fetch workspace config
    fetch("/api/config")
      .then(res => res.json())
      .then(data => {
        setSiteConfig(data);
        const activeTools = data?.activeTools || {};
        const enabledTabs: string[] = [];
        if (activeTools.attendance !== false) enabledTabs.push("attendance");
        if (activeTools.gpa !== false) enabledTabs.push("grades");
        if (activeTools.runway !== false) enabledTabs.push("graduation");
        if (activeTools.exam !== false) enabledTabs.push("exam");
        if (activeTools.lab !== false) enabledTabs.push("labs");
        enabledTabs.push("microtools");
        enabledTabs.push("missioncontrol");

        if (!enabledTabs.includes(activeWorkspaceTab)) {
          setActiveWorkspaceTab(enabledTabs[0] as any);
        }
      })
      .catch(err => console.error("Error loading config:", err));

    // Load attendance streak
    const streakData = localStorage.getItem("ktunode_attendance_streak");
    if (streakData) {
      try {
        const parsed = JSON.parse(streakData);
        const lastDate = new Date(parsed.lastDate);
        const now = new Date();
        const diffHours = (now.getTime() - lastDate.getTime()) / (1000 * 60 * 60);
        if (diffHours < 48) setAttendanceStreak(parsed.count);
      } catch {}
    }

    // Load backlogs
    const savedBacklogs = localStorage.getItem("ktunode_tools_backlogs");
    if (savedBacklogs) {
      try {
        const parsed = JSON.parse(savedBacklogs);
        if (Array.isArray(parsed)) setBacklogSubjects(parsed);
      } catch {}
    }

    // Load activities
    const savedStudentType = localStorage.getItem("ktunode_tools_activity_student_type");
    if (savedStudentType === "regular" || savedStudentType === "lateral" || savedStudentType === "pwd") {
      setStudentType(savedStudentType as any);
    }
    try {
      const savedActivities = localStorage.getItem("ktunode_tools_activities");
      if (savedActivities) {
        const parsed = JSON.parse(savedActivities);
        if (Array.isArray(parsed)) setSelectedActivities(parsed);
      }
    } catch {}

    // Load progression credits
    try {
      const savedCredits = localStorage.getItem("ktunode_tools_progression");
      if (savedCredits) {
        const parsed = JSON.parse(savedCredits);
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          setProgressionCredits(prev => ({ ...prev, ...parsed }));
        }
      }
    } catch {}

    // Load milestones
    try {
      const savedMilestones = localStorage.getItem(`ktunode_tools_milestones_${savedBranch}_${savedSem}`);
      if (savedMilestones) {
        const parsed = JSON.parse(savedMilestones);
        if (parsed && typeof parsed === "object") {
          setMtMilestones(parsed);
        }
      }
    } catch {}

    // Load cram hours
    const savedCram = localStorage.getItem("ktunode_tools_cram_hours");
    if (savedCram) setMtCramHours(Number(savedCram));

    loadSemesterData(savedBranch, savedSem);
  }, []);

  // Sync back to localstorage on states changes
  useEffect(() => {
    if (mounted && attendanceSubjects.length > 0) {
      localStorage.setItem(`ktunode_tools_attendance_${branch}_${sem}`, JSON.stringify(attendanceSubjects));
    }
  }, [attendanceSubjects, branch, sem, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(`ktunode_tools_milestones_${branch}_${sem}`, JSON.stringify(mtMilestones));
    }
  }, [mtMilestones, branch, sem, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("ktunode_tools_cram_hours", String(mtCramHours));
    }
  }, [mtCramHours, mounted]);

  // Sync GPA changes from GpaCalculator preset sheets
  useEffect(() => {
    const handleGpaUpdate = () => {
      setGpaUpdateTrigger(prev => prev + 1);
      const savedBranch = localStorage.getItem("ktunode_branch");
      if (savedBranch && savedBranch !== branch) {
        setBranch(savedBranch);
        loadSemesterData(savedBranch, sem);
      }
    };
    window.addEventListener("ktunode-gpa-update", handleGpaUpdate);
    return () => {
      window.removeEventListener("ktunode-gpa-update", handleGpaUpdate);
    };
  }, [branch, sem]);

  // API dynamic semester loading
  async function loadSemesterData(currentBranch: string, currentSem: number) {
    const scopeKey = `${currentBranch}_${currentSem}`;

    let defaultSubjects: Subject[] = [];
    try {
      const res = await fetch(`/api/subjects?branch=${currentBranch}&sem=${currentSem}`);
      defaultSubjects = await res.json();
      setSubjects(defaultSubjects);
    } catch (err) {
      console.error("Failed to load subjects for tools:", err);
    }

    // Load attendance
    const savedAttendance = localStorage.getItem(`ktunode_tools_attendance_${scopeKey}`);
    let mergedAttendance: AttendanceSubject[] = [];
    const defaultAttendanceMap = defaultSubjects.map(s => ({
      id: s.id,
      code: s.code,
      name: s.name,
      attended: 0,
      total: 0
    }));

    if (savedAttendance) {
      try {
        const savedList = JSON.parse(savedAttendance);
        if (Array.isArray(savedList)) {
          mergedAttendance = defaultAttendanceMap.map(defSub => {
            const match = savedList.find(saved => saved && (saved.code === defSub.code || saved.id === defSub.id));
            if (match) {
              return {
                ...defSub,
                attended: typeof match.attended === 'number' ? match.attended : defSub.attended,
                total: typeof match.total === 'number' ? match.total : defSub.total
              };
            }
            return defSub;
          });

          // Retain custom subjects
          const customSubjects = savedList.filter(saved => 
            saved && !defaultSubjects.some(def => def.code === saved.code || def.id === saved.id)
          );
          mergedAttendance.push(...customSubjects);
        } else {
          mergedAttendance = defaultAttendanceMap;
        }
      } catch {
        mergedAttendance = defaultAttendanceMap;
      }
    } else {
      mergedAttendance = defaultAttendanceMap;
    }
    setAttendanceSubjects(mergedAttendance);
  }

  // Branch/Semester switches
  const handleBranchSemChange = (newBranch: string, newSem: number) => {
    setBranch(newBranch);
    setSem(newSem);
    localStorage.setItem("ktunode_branch", newBranch);
    localStorage.setItem("ktunode_semester", String(newSem));
    triggerNotification(`Switched to ${newBranch.toUpperCase()} Semester ${newSem}`);

    loadSemesterData(newBranch, newSem);

    // Sync GPA triggers
    window.dispatchEvent(new Event("ktunode-gpa-update"));
  };

  const triggerNotification = (message: string) => {
    setShowNotification(message);
    setTimeout(() => {
      setShowNotification(null);
    }, 2500);
  };

  // Summary statistics for Telemetry Strip
  const getAverageAttendance = () => {
    if (attendanceSubjects.length === 0) return 100;
    let totalClasses = 0;
    let totalAttended = 0;
    attendanceSubjects.forEach(s => {
      totalClasses += s.total;
      totalAttended += s.attended;
    });
    return totalClasses > 0 ? Math.round((totalAttended / totalClasses) * 100) : 100;
  };

  const getLabsCount = () => {
    if (typeof window === "undefined") return 0;
    const saved = localStorage.getItem(`ktunode_tools_labs_${branch}_${sem}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed.length;
      } catch {}
    }
    return getDefaultLabsForSession(branch, sem).length;
  };

  const calculateCGPA = useMemo(() => {
    if (typeof window === "undefined") return "0.00";
    const activeTab = localStorage.getItem("ktunode_gpa_active_tab") || "presets";
    const selectedBranch = localStorage.getItem("ktunode_gpa_selected_branch") || "Computer Science and Engineering";
    const storageKey = activeTab === "presets"
      ? `ktunode_gpa_v3_preset_${selectedBranch.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`
      : `ktunode_gpa_v3_universal`;
    const savedSemesters = localStorage.getItem(storageKey);
    let grandPoints = 0;
    let grandCredits = 0;
    if (savedSemesters) {
      try {
        const semesters = JSON.parse(savedSemesters);
        Object.keys(semesters).forEach(semNum => {
          const subjects = semesters[Number(semNum)] || [];
          subjects.forEach((sub: any) => {
            const points = GRADE_POINTS[sub.grade];
            if (points !== undefined && points !== -1) {
              grandPoints += points * sub.credits;
              grandCredits += sub.credits;
            }
          });
        });
      } catch (e) {
        console.error(e);
      }
    }
    return grandCredits > 0 ? (grandPoints / grandCredits).toFixed(2) : "0.00";
  }, [gpaUpdateTrigger, branch, sem]);

  const calculateSGPA = useMemo(() => {
    if (typeof window === "undefined") return "0.00";
    const activeTab = localStorage.getItem("ktunode_gpa_active_tab") || "presets";
    const selectedBranch = localStorage.getItem("ktunode_gpa_selected_branch") || "Computer Science and Engineering";
    const storageKey = activeTab === "presets"
      ? `ktunode_gpa_v3_preset_${selectedBranch.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`
      : `ktunode_gpa_v3_universal`;
    const savedSemesters = localStorage.getItem(storageKey);
    let semPoints = 0;
    let semCredits = 0;
    let gradedCount = 0;
    if (savedSemesters) {
      try {
        const semesters = JSON.parse(savedSemesters);
        const subjects = semesters[sem] || [];
        subjects.forEach((sub: any) => {
          const points = GRADE_POINTS[sub.grade];
          if (points !== undefined && points !== -1) {
            semPoints += points * sub.credits;
            semCredits += sub.credits;
            gradedCount++;
          }
        });
      } catch (e) {
        console.error(e);
      }
    }
    return semCredits > 0 && gradedCount > 0 ? (semPoints / semCredits).toFixed(2) : "0.00";
  }, [gpaUpdateTrigger, branch, sem]);

  return (
    <div
      className="min-h-screen overflow-x-clip relative flex flex-col font-sans transition-colors duration-500 text-slate-900 dark:text-slate-100 bg-background"
      style={{
        background: mounted && resolvedTheme === "dark"
          ? `radial-gradient(ellipse at 70% 10%, oklch(18% 0.035 250) 0%, oklch(14% 0.015 250) 45%, oklch(12% 0.01 250) 80%)`
          : "radial-gradient(ellipse at 70% 10%, #dbeafe 0%, #eff6ff 35%, #ffffff 70%)"
      }}
    >
      <ToolsSchema />
      <div className="absolute inset-0 z-0 dot-grid opacity-[0.08] pointer-events-none" />
      <div className="absolute inset-0 z-0 noise-overlay opacity-[0.25] pointer-events-none" />
      <div className="absolute top-[-80px] right-[-80px] w-[700px] h-[700px] rounded-full bg-blue-400/20 dark:bg-blue-500/5 blur-[160px] pointer-events-none z-0 bg-orb-1" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-indigo-300/15 dark:bg-indigo-500/5 blur-[140px] pointer-events-none z-0 bg-orb-2 -translate-x-[60px] translate-y-[60px] hidden sm:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-100/40 dark:bg-blue-400/5 blur-[120px] pointer-events-none z-0 bg-orb-3" />

      <Navbar />

      {/* Onboarding Tour Overlay */}
      <ToolsOnboardingTour onComplete={() => triggerNotification("Workspace Cockpit Ready!")} />

      {/* Notification Toast */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            transition={{ type: "spring", damping: 22, stiffness: 280 }}
            className="fixed bottom-6 left-1/2 z-50 px-5 py-3 rounded-2xl bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-slate-550 shadow-2xl backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] text-xs font-bold flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 animate-pulse" />
            {showNotification}
          </motion.div>
        )}
      </AnimatePresence>

      <main 
        id="main-content"
        className="relative flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 pt-20 sm:pt-24 md:pt-28 flex flex-col z-10 space-y-4 sm:space-y-6 pb-12"
      >
        <div className="absolute top-10 left-10 w-[240px] h-[240px] rounded-full bg-blue-500/[0.02] blur-[80px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-[240px] h-[240px] rounded-full bg-blue-500/[0.02] blur-[80px] pointer-events-none -z-10" />

        {/* --- PREMIUM COMPACT TELEMETRY COCKPIT HEADER --- */}
        <div className="w-full bg-white/90 dark:bg-slate-950/85 backdrop-blur-3xl border border-slate-200/80 dark:border-white/[0.08] rounded-2xl p-4 shadow-lg relative overflow-hidden flex flex-col gap-3">
          <div className="absolute top-0 right-0 w-[150px] h-[150px] rounded-full bg-blue-500/[0.03] blur-[40px] pointer-events-none" />
          
          <div className="flex flex-row items-center justify-between gap-3 pb-3 border-b border-slate-200/60 dark:border-white/[0.06]">
            {/* Logo Badge & Titles */}
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[8px] font-bold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/15">
                  KTU Tools
                </span>
                <span className="hidden xs:inline text-[9px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">APJ Abdul Kalam University</span>
              </div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white leading-tight font-display tracking-tight mt-0.5">
                Study Workspace
              </h1>
              <p className="hidden sm:block text-[11px] font-medium text-slate-500 dark:text-slate-400 max-w-md mt-1">
                Track grades, attendance, labs, and exam prep — all in one place.
              </p>
            </div>

            {/* Compact Selector Console */}
            <div className="flex items-center gap-1 bg-slate-50/80 dark:bg-slate-900/60 p-1 rounded-xl border border-slate-200/60 dark:border-white/[0.04] shrink-0">
              <div className="relative flex items-center pr-4.5 pl-2">
                <select
                   value={branch}
                   onChange={(e) => handleBranchSemChange(e.target.value, sem)}
                   className="appearance-none bg-transparent border-none py-0.5 pr-1 text-xs font-bold cursor-pointer text-slate-800 dark:text-slate-100 focus:outline-none"
                >
                  <option className="dark:bg-slate-900 bg-white text-slate-900 dark:text-slate-100" value="cs">CSE</option>
                  <option className="dark:bg-slate-900 bg-white text-slate-900 dark:text-slate-100" value="ec">ECE</option>
                  <option className="dark:bg-slate-900 bg-white text-slate-900 dark:text-slate-100" value="me">ME</option>
                  <option className="dark:bg-slate-900 bg-white text-slate-900 dark:text-slate-100" value="ce">CE</option>
                  <option className="dark:bg-slate-900 bg-white text-slate-900 dark:text-slate-100" value="ee">EEE</option>
                </select>
                <ChevronDown className="w-3 h-3 absolute right-1 pointer-events-none text-slate-450 dark:text-slate-500" />
              </div>
              <div className="w-[1px] h-3.5 bg-slate-250 dark:bg-slate-800" />
              <div className="relative flex items-center pr-4.5 pl-2">
                <select
                  value={sem}
                  onChange={(e) => handleBranchSemChange(branch, Number(e.target.value))}
                  className="appearance-none bg-transparent border-none py-0.5 pr-1 text-xs font-bold cursor-pointer text-slate-800 dark:text-slate-100 focus:outline-none font-mono"
                >
                  {Array.from({ length: 8 }, (_, idx) => (
                    <option className="dark:bg-slate-900 bg-white text-slate-900 dark:text-slate-100" key={idx} value={idx + 1}>S{idx + 1}</option>
                  ))}
                </select>
                <ChevronDown className="w-3 h-3 absolute right-1 pointer-events-none text-slate-450 dark:text-slate-500" />
              </div>
            </div>
          </div>

          {/* Compact Connected Live Telemetry Indicators Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2.5">
            {[
              {
                label: "CGPA",
                val: mounted ? calculateCGPA : "-",
                badge: "10.0 Scale",
                theme: "text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/15"
              },
              {
                label: "Attendance",
                val: mounted ? `${getAverageAttendance()}%` : "-",
                badge: mounted && getAverageAttendance() >= 75 ? "Safe" : "At Risk",
                theme: mounted && getAverageAttendance() >= 75
                  ? "text-emerald-600 dark:text-emerald-450 bg-emerald-500/10 border border-emerald-500/15"
                  : "text-rose-600 dark:text-rose-450 bg-rose-500/10 border border-rose-500/15"
              },
              {
                label: "Labs",
                val: mounted ? `${getLabsCount()} Active` : "-",
                badge: "Tracked",
                theme: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border border-indigo-500/15"
              },
              {
                label: "SGPA",
                val: mounted ? calculateSGPA : "-",
                badge: "Current Sem",
                theme: "text-amber-600 dark:text-amber-450 bg-amber-500/10 border border-amber-500/15"
              }
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/[0.04] p-4 rounded-2xl flex flex-col gap-1 relative group hover:border-slate-350 dark:hover:border-white/10 transition-colors shadow-sm">
                <span className="text-[9px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">{stat.label}</span>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="font-bold text-slate-900 dark:text-white font-display text-lg tracking-tight leading-none">{stat.val}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[8px] font-semibold leading-none shrink-0 ${stat.theme}`}>
                    {stat.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spacer to measure the static Y position of the tab switcher without breaking sticky positioning */}
        <div ref={tabBarSpacerRef} className="h-0 w-0 pointer-events-none" />

        {/* --- DYNAMIC WORKSPACE SWITCHER NAV BAR (Sticky) --- */}
        <div className="sticky top-[80px] sm:top-[84px] md:top-[88px] z-30 bg-white/90 dark:bg-slate-950/90 p-1 rounded-2xl border border-slate-200/50 dark:border-white/[0.04] backdrop-blur-2xl w-full shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)] overflow-visible">
          <LayoutGroup id="tools-tab-switcher">
            <div className="flex flex-nowrap items-center gap-1 w-full overflow-x-auto scrollbar-none py-0.5 px-0.5">
              {[
                { id: "attendance", label: "Attendance", icon: Activity, enabled: siteConfig?.activeTools?.attendance !== false },
                { id: "grades", label: "Grades & GPA", icon: Calculator, enabled: siteConfig?.activeTools?.gpa !== false },
                { id: "graduation", label: "Graduation", icon: GraduationCap, enabled: siteConfig?.activeTools?.runway !== false },
                { id: "exam", label: "Exam Prep", icon: Clock, enabled: siteConfig?.activeTools?.exam !== false },
                { id: "labs", label: "Lab Record", icon: FlaskConical, enabled: siteConfig?.activeTools?.lab !== false },
                { id: "microtools", label: "Micro Tools", icon: LayoutGrid, enabled: true },
                { id: "missioncontrol", label: "Mission Control", icon: LayoutDashboard, enabled: true }
              ].filter(tabItem => tabItem.enabled).map((tabItem) => {
                const isActive = activeWorkspaceTab === tabItem.id;
                const Icon = tabItem.icon;
                
                return (
                  <button
                    key={tabItem.id}
                    onClick={(e) => {
                      triggerHaptic("light");
                      setActiveWorkspaceTab(tabItem.id as typeof activeWorkspaceTab);
                      
                      if (tabBarSpacerRef.current) {
                        const rect = tabBarSpacerRef.current.getBoundingClientRect();
                        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                        
                        // Match sticky responsive values: top-[80px] sm:top-[84px] md:top-[88px]
                        const width = window.innerWidth;
                        const offset = width >= 768 ? 88 : width >= 640 ? 84 : 80;
                        
                        const targetScrollY = rect.top + scrollTop - offset;
                        
                        if (scrollTop > targetScrollY) {
                          window.scrollTo({
                            top: targetScrollY,
                            behavior: "auto"
                          });
                        }
                      }

                      // Scroll container horizontally to center the active button instantly
                      const button = e.currentTarget;
                      const container = button.parentElement;
                      if (container) {
                        const containerWidth = container.offsetWidth;
                        const buttonWidth = button.offsetWidth;
                        const buttonLeft = button.offsetLeft;
                        
                        const targetScrollLeft = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
                        
                        container.scrollTo({
                          left: targetScrollLeft,
                          behavior: "auto"
                        });
                      }
                    }}
                    className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-colors duration-300 flex items-center gap-2 cursor-pointer flex-1 shrink-0 whitespace-nowrap justify-center min-w-max active:scale-[0.97] select-none ${
                      isActive
                        ? "text-white"
                        : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeWorkspaceTabBackground"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                        className="absolute inset-0 rounded-xl shadow-md"
                        style={{ backgroundColor: "var(--color-accent)" }}
                      />
                    )}
                    <Icon className={`w-4 h-4 relative z-10 transition-opacity ${isActive ? "opacity-100" : "opacity-70"}`} />
                    <span className="relative z-10">{tabItem.label}</span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </div>

        {/* --- UNIFIED WORKSPACE ACTIVE COMPONENT CONTAINER --- */}
        <div className="w-full transition-all duration-300">
          <motion.div
            key={activeWorkspaceTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="w-full"
          >
            {/* TAB 1: ATTENDANCE & CIE RUNWAY */}
          {activeWorkspaceTab === "attendance" && (
            <AttendanceTracker
              branch={branch}
              sem={sem}
              attendanceSubjects={attendanceSubjects}
              attendanceStreak={attendanceStreak}
              setAttendanceSubjects={setAttendanceSubjects}
              triggerNotification={triggerNotification}
              loadSemesterData={loadSemesterData}
            />
          )}

          {/* TAB 2: GRADES & ESE TARGET PLANNER */}
          {activeWorkspaceTab === "grades" && (
            <GradeGpaCalculator
              branch={branch}
              sem={sem}
              attendanceSubjects={attendanceSubjects}
              subjects={subjects}
              triggerNotification={triggerNotification}
            />
          )}

          {/* TAB 3: GRADUATION RUNWAY & MILESTONE TRACKER */}
          {activeWorkspaceTab === "graduation" && (
            <GraduationRunway
              studentType={studentType}
              setStudentType={setStudentType}
              selectedActivities={selectedActivities}
              setSelectedActivities={setSelectedActivities}
              progressionTarget={progressionTarget}
              setProgressionTarget={setProgressionTarget}
              progressionCredits={progressionCredits}
              setProgressionCredits={setProgressionCredits}
              backlogSubjects={backlogSubjects}
              setBacklogSubjects={setBacklogSubjects}
              triggerNotification={triggerNotification}
            />
          )}

          {/* TAB 4: 11TH-HOUR EXAM COMMAND PANEL */}
          {activeWorkspaceTab === "exam" && (
            <ExamCommandPanel
              branch={branch}
              sem={sem}
              subjects={subjects}
              mtMilestones={mtMilestones}
              setMtMilestones={setMtMilestones}
              mtCramHours={mtCramHours}
              setMtCramHours={setMtCramHours}
              triggerNotification={triggerNotification}
            />
          )}

          {/* TAB 5: LAB RECORD TRACKER */}
          {activeWorkspaceTab === "labs" && (
            <LabRecordTracker
              branch={branch}
              sem={sem}
              triggerNotification={triggerNotification}
            />
          )}

          {/* TAB 6: MICRO TOOLS GRID */}
          {activeWorkspaceTab === "microtools" && (
            <MicroToolsGrid
              branch={branch}
              sem={sem}
              triggerNotification={triggerNotification}
            />
          )}

          {/* TAB 7: MISSION CONTROL TIMETABLE */}
          {activeWorkspaceTab === "missioncontrol" && (
            <MissionControlDashboard
              branch={branch}
              sem={String(sem)}
              gpa={calculateCGPA}
              subjects={subjects}
            />
          )}
          </motion.div>
        </div>

        {/* Advice Info bottom bar */}
        <div className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200/60 dark:border-white/[0.06] bg-slate-50/80 dark:bg-slate-900/40 text-xs font-semibold text-slate-500 dark:text-slate-400 leading-normal text-center justify-center shadow-sm">
          <ShieldCheck className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
          <span>All data is saved locally in your browser. GPA, attendance, and lab progress update in real-time as you make changes.</span>
        </div>

      </main>
    </div>
  );
}
