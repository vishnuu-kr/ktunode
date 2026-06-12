"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, ShieldCheck, AlertTriangle, X, Search, FileText, Plus, Trash2, CheckCircle2, ShieldAlert, Info, ChevronDown 
} from "lucide-react";
import { triggerHaptic } from "@/lib/haptic";
import { 
  ActivityClaim, KTU_ACTIVITIES, KTU_ACTIVITY_GROUPS, calculateActivityPoints 
} from "@/data/ktu_activities";

interface BacklogSubject {
  id: string;
  code: string;
  name: string;
  semester: number;
  attempts: number;
  status: 'pending' | 'cleared' | 'registered';
}

interface GraduationRunwayProps {
  studentType: "regular" | "lateral" | "pwd";
  setStudentType: (type: "regular" | "lateral" | "pwd") => void;
  selectedActivities: ActivityClaim[];
  setSelectedActivities: React.Dispatch<React.SetStateAction<ActivityClaim[]>>;
  progressionTarget: "s5" | "s7";
  setProgressionTarget: (target: "s5" | "s7") => void;
  progressionCredits: { s1: number; s2: number; s3: number; s4: number };
  setProgressionCredits: React.Dispatch<React.SetStateAction<{ s1: number; s2: number; s3: number; s4: number }>>;
  backlogSubjects: BacklogSubject[];
  setBacklogSubjects: React.Dispatch<React.SetStateAction<BacklogSubject[]>>;
  triggerNotification: (msg: string) => void;
}

export default function GraduationRunway({
  studentType,
  setStudentType,
  selectedActivities,
  setSelectedActivities,
  progressionTarget,
  setProgressionTarget,
  progressionCredits,
  setProgressionCredits,
  backlogSubjects,
  setBacklogSubjects,
  triggerNotification
}: GraduationRunwayProps) {
  const [gradSubTab, setGradSubTab] = useState<"activity" | "credits" | "backlogs">("activity");
  const [studentTypeDropdownOpen, setStudentTypeDropdownOpen] = useState(false);

  // Activity list catalog search states
  const [activitySearchQuery, setActivitySearchQuery] = useState("");
  const [activityGuideGroup, setActivityGuideGroup] = useState<"All" | "I" | "II" | "III">("All");

  // Inline configuration states for adding activities
  const [inlineAddCode, setInlineAddCode] = useState<string | null>(null);
  const [inlineSelLevel, setInlineSelLevel] = useState("");
  const [inlineSelQuantity, setInlineSelQuantity] = useState(1);
  const [inlineSelPoints, setInlineSelPoints] = useState(0);

  // Backlogs input fields state
  const [backlogCode, setBacklogCode] = useState("");
  const [backlogName, setBacklogName] = useState("");
  const [backlogSemester, setBacklogSemester] = useState(1);

  // Info toggles
  const [showActivityInfo, setShowActivityInfo] = useState(false);
  const [showProgressionInfo, setShowProgressionInfo] = useState(false);

  // Calculate points
  const calculatedPoints = useMemo(() => {
    return calculateActivityPoints(selectedActivities, studentType);
  }, [selectedActivities, studentType]);

  const totalActivityPoints = calculatedPoints.totalCapped;

  // Handle activity deletion
  const handleDeleteActivity = (id: string) => {
    triggerHaptic("warning");
    const updated = selectedActivities.filter(a => a.id !== id);
    setSelectedActivities(updated);
    localStorage.setItem("ktunode_tools_activities", JSON.stringify(updated));
    triggerNotification("Activity claim deleted!");
  };

  // Add activity with configuration
  const handleStartInlineAdd = (act: any) => {
    triggerHaptic("light");
    setInlineAddCode(act.code);
    if (act.type === "level" && act.levels) {
      setInlineSelLevel(Object.keys(act.levels)[0]);
      setInlineSelPoints(act.levels[Object.keys(act.levels)[0]]);
    } else if (act.type === "count") {
      setInlineSelQuantity(1);
      setInlineSelPoints(act.pointsPerUnit || 1);
    } else if (act.type === "input") {
      setInlineSelPoints(0);
    }
  };

  const handleConfirmInlineAdd = (act: any) => {
    triggerHaptic("success");
    let pointsAwarded = 0;
    if (act.type === "level" && act.levels) {
      pointsAwarded = act.levels[inlineSelLevel] || 0;
    } else if (act.type === "count") {
      pointsAwarded = inlineSelQuantity * (act.pointsPerUnit || 1);
    } else if (act.type === "input") {
      pointsAwarded = inlineSelPoints;
    }

    const newClaim: ActivityClaim = {
      id: `act_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      activityCode: act.code,
      points: pointsAwarded,
      level: act.type === "level" ? inlineSelLevel : undefined,
      quantity: act.type === "count" ? inlineSelQuantity : undefined
    };

    const updated = [...selectedActivities, newClaim];
    setSelectedActivities(updated);
    localStorage.setItem("ktunode_tools_activities", JSON.stringify(updated));
    setInlineAddCode(null);
    triggerNotification("Activity claim added successfully!");
  };

  const handleDirectAddFixed = (act: any) => {
    triggerHaptic("success");
    const newClaim: ActivityClaim = {
      id: `act_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      activityCode: act.code,
      points: act.pointsPerUnit || 5
    };
    const updated = [...selectedActivities, newClaim];
    setSelectedActivities(updated);
    localStorage.setItem("ktunode_tools_activities", JSON.stringify(updated));
    triggerNotification("Activity claim added!");
  };

  // Progression Credit auditor math
  const s1 = progressionCredits.s1;
  const s2 = progressionCredits.s2;
  const s3 = progressionCredits.s3;
  const s4 = progressionCredits.s4;
  
  const limit = progressionTarget === "s5" ? 26 : 52;
  const earned = progressionTarget === "s5" ? (s1 + s2) : (s1 + s2 + s3 + s4);
  const passedCredits = earned >= limit;

  const handleProgressionCreditChange = (semKey: "s1" | "s2" | "s3" | "s4", val: number) => {
    const clamped = Math.max(0, Math.min(22, val));
    const updated = {
      ...progressionCredits,
      [semKey]: clamped
    };
    setProgressionCredits(updated);
    localStorage.setItem("ktunode_tools_progression", JSON.stringify(updated));
  };

  // Backlog tracker handlers
  const handleAddBacklog = () => {
    if (!backlogCode.trim() || !backlogName.trim()) return;
    const newBacklog: BacklogSubject = {
      id: `bl_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      code: backlogCode.trim().toUpperCase(),
      name: backlogName.trim(),
      semester: backlogSemester,
      attempts: 1,
      status: "pending"
    };
    const updated = [...backlogSubjects, newBacklog];
    setBacklogSubjects(updated);
    localStorage.setItem("ktunode_tools_backlogs", JSON.stringify(updated));
    setBacklogCode("");
    setBacklogName("");
    triggerNotification("Backlog subject logged!");
  };

  const handleDeleteBacklog = (id: string) => {
    const backlog = backlogSubjects.find(b => b.id === id);
    const name = backlog ? backlog.name : "this course";
    if (!window.confirm(`Are you sure you want to remove backlog tracking for "${name}"?`)) {
      return;
    }
    triggerHaptic("warning");
    const updated = backlogSubjects.filter(b => b.id !== id);
    setBacklogSubjects(updated);
    localStorage.setItem("ktunode_tools_backlogs", JSON.stringify(updated));
    triggerNotification("Backlog subject deleted.");
  };

  const handleStatusChange = (id: string, status: 'pending' | 'cleared' | 'registered') => {
    triggerHaptic("medium");
    const updated = backlogSubjects.map(b => {
      if (b.id === id) {
        return {
          ...b,
          status,
          attempts: status === 'registered' ? b.attempts + 1 : b.attempts
        };
      }
      return b;
    });
    setBacklogSubjects(updated);
    localStorage.setItem("ktunode_tools_backlogs", JSON.stringify(updated));
  };

  // Activity filter logic
  const query = activitySearchQuery.toLowerCase().trim();
  const filteredActivities = Object.values(KTU_ACTIVITIES).filter(act => {
    const matchesGroup = activityGuideGroup === "All" || act.code.startsWith(activityGuideGroup === "I" ? "1" : activityGuideGroup === "II" ? "2" : "3");
    const matchesQuery = !query || 
      act.code.includes(query) || 
      act.name.toLowerCase().includes(query) || 
      (act.desc && act.desc.toLowerCase().includes(query)) ||
      act.proof.toLowerCase().includes(query);
    return matchesGroup && matchesQuery;
  });

  const subTabs = [
    { id: "activity" as const, label: "Activity Pts", icon: <Award className="w-4 h-4" />, badge: `${totalActivityPoints}/${calculatedPoints.totalRequired}` },
    { id: "credits" as const, label: "Credits", icon: <ShieldCheck className="w-4 h-4" />, badge: `${earned}/${limit}` },
    { id: "backlogs" as const, label: "Backlogs", icon: <AlertTriangle className="w-4 h-4" />, badge: backlogSubjects.length > 0 ? `${backlogSubjects.length}` : undefined },
  ];

  return (
    <div className="bg-white/80 dark:bg-slate-950/60 backdrop-blur-3xl border border-slate-200/50 dark:border-white/[0.04] rounded-3xl shadow-xl overflow-hidden w-full flex flex-col justify-between">
      
      {/* Unified sub-navigation header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 border-b border-slate-100 dark:border-white/[0.04]">
        <div className="flex items-start gap-3">
          <div className="p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-450 border border-emerald-500/15 rounded-xl shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight">Graduation Runway</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Audit degree requirements and backlogs</p>
          </div>
        </div>

        {/* Sub-tabs with fixed layout bounds */}
        <div className="flex p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl max-w-full sm:max-w-sm overflow-x-auto shrink-0 scrollbar-none">
          {subTabs.map(tab => (
            <button
              key={tab.id}
              onClick={(e) => {
                triggerHaptic("light");
                setGradSubTab(tab.id);
                e.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "center"
                });
              }}
              className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
                gradSubTab === tab.id
                  ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200/30 dark:border-slate-700/30"
                  : "text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`text-[8.5px] font-black px-1.5 py-0.5 rounded-md font-mono ${
                  gradSubTab === tab.id
                    ? "bg-blue-500/10 text-blue-700 dark:text-blue-300"
                    : "bg-slate-200/60 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-extrabold"
                }`}>{tab.badge}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── TAB 1: ACTIVITY POINTS ── */}
      {gradSubTab === "activity" && (
        <div className="flex flex-col">
          {/* Progress Overview Section */}
          <div className="px-5 py-5 border-b border-slate-100 dark:border-white/[0.04] bg-slate-50/20 dark:bg-slate-900/10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                     {/* Radial total progress dial */}
              <div className="md:col-span-3 flex flex-col items-center text-center">
                <div className="relative w-28 h-28 flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/40 rounded-full border border-slate-200/40 dark:border-white/[0.04] p-1 shadow-inner backdrop-blur-sm">
                  {/* SVG progress ring */}
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 112 112">
                    <circle cx="56" cy="56" r="46" strokeWidth="6" stroke="currentColor" fill="transparent" className="text-slate-100 dark:text-slate-800" />
                    <circle cx="56" cy="56" r="46" strokeWidth="6" stroke="currentColor" fill="transparent" 
                      className={`transition-all duration-700 ${calculatedPoints.isQualified ? "text-emerald-500" : totalActivityPoints >= calculatedPoints.totalRequired * 0.5 ? "text-blue-500" : "text-amber-500"}`}
                      strokeDasharray={2 * Math.PI * 46}
                      strokeDashoffset={2 * Math.PI * 46 * (1 - Math.min(1, totalActivityPoints / calculatedPoints.totalRequired))}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center balance-text">
                    <span className="text-3xl font-bold leading-none text-slate-900 dark:text-white font-mono">{totalActivityPoints}</span>
                    <span className="text-xs font-extrabold text-slate-500 dark:text-slate-400 tracking-wider mt-1 uppercase">/ {calculatedPoints.totalRequired} PTS</span>
                  </div>
                </div>

                <div className="relative w-full z-50 mt-2 mb-1 max-w-[180px]">
                  <button
                    type="button"
                    onClick={() => {
                      triggerHaptic("light");
                      setStudentTypeDropdownOpen(!studentTypeDropdownOpen);
                    }}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-xl px-3 py-2 text-[10px] font-bold text-slate-700 dark:text-slate-350 focus:outline-none cursor-pointer flex items-center justify-between shadow-sm active:scale-[0.98] transition-all"
                  >
                    <span>
                      {studentType === "regular" && "Regular Students (100 Pts)"}
                      {studentType === "lateral" && "Lateral Entry (75 Pts)"}
                      {studentType === "pwd" && "PwD Category (50 Pts)"}
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 text-slate-450 dark:text-slate-555 transition-transform duration-200 ${studentTypeDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  <AnimatePresence>
                    {studentTypeDropdownOpen && (
                      <>
                        <div 
                          className="fixed inset-0 z-40" 
                          onClick={() => setStudentTypeDropdownOpen(false)}
                        />
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 right-0 mt-1.5 z-50 rounded-xl border border-slate-250 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg py-1.5 overflow-hidden"
                        >
                          {[
                            { value: "regular", label: "Regular Students (100 Pts)" },
                            { value: "lateral", label: "Lateral Entry (75 Pts)" },
                            { value: "pwd", label: "PwD Category (50 Pts)" }
                          ].map((opt) => (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => {
                                triggerHaptic("light");
                                setStudentType(opt.value as any);
                                setStudentTypeDropdownOpen(false);
                              }}
                              className={`w-full text-left px-3.5 py-2 text-[10px] font-bold transition-colors block cursor-pointer ${
                                studentType === opt.value
                                  ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                                  : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-850"
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Group-by-Group Cap Bars */}
              <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "1", name: "Group I", subtitle: "Co-curricular / Sports", capped: calculatedPoints.group1Capped, color: "emerald" },
                  { id: "2", name: "Group II", subtitle: "PD / Tech-Fest / Roles", capped: calculatedPoints.group2Capped, color: "blue" },
                  { id: "3", name: "Group III", subtitle: "Achievements / MOOC", capped: calculatedPoints.group3Capped, color: "violet" }
                ].map(grp => {
                  const colors = {
                    emerald: { 
                      bar: "bg-teal-500", 
                      bg: "bg-teal-500/[0.03] dark:bg-teal-500/[0.05]", 
                      border: "border-teal-500/10 dark:border-teal-500/15",
                      badge: "px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-500/10 dark:border-emerald-500/20"
                    },
                    blue: { 
                      bar: "bg-blue-500", 
                      bg: "bg-blue-500/[0.03] dark:bg-blue-500/[0.05]", 
                      border: "border-blue-500/10 dark:border-blue-500/15",
                      badge: "px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-500/10 dark:border-blue-500/20"
                    },
                    violet: { 
                      bar: "bg-purple-500", 
                      bg: "bg-purple-500/[0.03] dark:bg-purple-500/[0.05]", 
                      border: "border-purple-500/10 dark:border-purple-500/15",
                      badge: "px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400 border border-purple-500/10 dark:border-purple-500/20"
                    },
                  }[grp.color]!;

                  return (
                    <div key={grp.id} className={`p-3.5 rounded-2xl border ${colors.border} ${colors.bg} flex flex-col gap-2 shadow-sm`}>
                      <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col min-w-0">
                          <span className="text-[11px] font-extrabold tracking-wide uppercase text-slate-655 dark:text-slate-300">{grp.name}</span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold leading-tight mt-0.5 truncate">{grp.subtitle}</span>
                        </div>
                        <span className={`${colors.badge} shrink-0`}>{grp.capped} / 40</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-1.5 border border-slate-200/10 dark:border-slate-800/10">
                        <div className={`h-full rounded-full ${colors.bar}`} style={{ width: `${(grp.capped / 40) * 100}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* User's logged claims list */}
          {selectedActivities.length > 0 && (
            <div className="px-5 py-4 border-b border-slate-100 dark:border-white/[0.04] bg-slate-50/10 dark:bg-slate-900/5">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-3">Your Logged Claims ({selectedActivities.length})</span>
              <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin font-sans">
                {selectedActivities.map((act) => {
                  const groupNum = act.activityCode.split('.')[0];
                  const colors = groupNum === "1" 
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-450 border-emerald-500/15" 
                    : groupNum === "2" 
                      ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/15" 
                      : "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/15";
                  
                  const borderClass = groupNum === "1" 
                    ? "border-l-4 border-l-emerald-500" 
                    : groupNum === "2" 
                      ? "border-l-4 border-l-blue-500" 
                      : "border-l-4 border-l-purple-500";
                  
                  const activityItem = KTU_ACTIVITIES[act.activityCode];
                  const activityName = activityItem ? activityItem.name : "Custom Activity";

                  return (
                    <div key={act.id} className={`flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border-y border-r border-slate-200/50 dark:border-y-white/[0.02] dark:border-r-white/[0.02] gap-3 shadow-sm hover:border-slate-300 dark:hover:border-slate-800 transition-colors ${borderClass}`}>
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <span className={`px-2 py-0.5 rounded-lg text-[9px] font-bold border font-mono shrink-0 ${colors}`}>
                          {act.activityCode}
                        </span>
                        <div className="min-w-0 flex-1">
                          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block truncate">{activityName}</span>
                          {(act.level || act.detail || act.quantity) ? (
                            <span className="text-[9px] text-slate-500 dark:text-slate-400 block mt-0.5 font-bold leading-none">
                              {act.level && `Level: ${act.level}`}
                              {act.level && act.detail && " • "}
                              {act.detail && `Detail: ${act.detail}`}
                              {(act.level || act.detail) && act.quantity && " • "}
                              {act.quantity && `Quantity: ${act.quantity}`}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 ml-4 shrink-0">
                        <span className="text-xs font-bold text-slate-900 dark:text-white font-mono">+{act.points} pts</span>
                        <button
                          onClick={() => handleDeleteActivity(act.id)}
                          className="p-1.5 hover:bg-rose-500/10 text-slate-550 hover:text-rose-500 dark:text-slate-400 dark:hover:text-rose-400 rounded-xl cursor-pointer transition-colors active:scale-95 flex items-center justify-center animate-fade-in"
                          title="Remove claim"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Search activity grid filter console */}
          <div className="mx-5 my-4 bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-white/[0.04] p-3 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm backdrop-blur-xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-450" />
              <input
                type="text"
                placeholder="Search activities..."
                value={activitySearchQuery}
                onChange={(e) => setActivitySearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus-within:border-blue-500/30 dark:focus-within:border-blue-500/40 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500/20"
              />
            </div>
            <div className="flex items-center bg-slate-100/80 dark:bg-slate-950/60 border border-slate-250 dark:border-slate-850 p-0.5 rounded-xl self-start sm:self-center shrink-0">
              {(["All", "I", "II", "III"] as const).map(grp => (
                <button
                  key={grp}
                  onClick={() => {
                    triggerHaptic("light");
                    setActivityGuideGroup(grp);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer active:scale-95 ${
                    activityGuideGroup === grp
                      ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200/30 dark:border-slate-750"
                      : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                  }`}
                >
                  Group {grp}
                </button>
              ))}
            </div>
          </div>

          {/* Activity Catalog details */}
          <div className="px-5 pb-5">
            <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin">
              {filteredActivities.length === 0 ? (
                <div className="text-center py-8 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl text-xs font-medium text-slate-450 dark:text-slate-500">
                  No matching activities found in KTU handbook index.
                </div>
              ) : (
                filteredActivities.map(act => {
                  const claimsList = selectedActivities.filter(sa => sa.activityCode === act.code);
                  const isClaimed = claimsList.length > 0;
                  const claimedPoints = claimsList.reduce((acc, curr) => acc + curr.points, 0);
                  const groupNum = act.code.split('.')[0];
                  const badgeClass = groupNum === "1" 
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-450 border-emerald-500/15" 
                    : groupNum === "2" 
                      ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/15" 
                      : "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/15";
                  const isInlineAddActive = inlineAddCode === act.code;

                  return (
                    <div key={act.code} className={`p-4 rounded-2xl border transition-all duration-200 ${
                      isClaimed 
                        ? "bg-emerald-500/[0.01] border-l-4 border-l-emerald-500 border-y-slate-200/40 border-r-slate-200/40 dark:border-y-white/[0.02] dark:border-r-white/[0.02]" 
                        : "bg-slate-50/50 dark:bg-slate-900/20 border-slate-200/60 dark:border-white/[0.02] hover:border-slate-355 dark:hover:border-slate-800 hover:shadow-sm"
                    }`}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1 space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`px-2 py-0.5 rounded-lg text-[8.5px] font-bold border font-mono ${badgeClass}`}>
                              {act.code}
                            </span>
                            <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                              Cap: {act.maxPoints} Pts
                            </span>
                            {isClaimed && (
                              <span className="px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/10 text-[8.5px] font-bold flex items-center gap-0.5">
                                ✓ Claimed {claimedPoints} pts
                              </span>
                            )}
                          </div>
                          <h4 className="text-xs font-bold text-slate-855 dark:text-slate-100 leading-snug">{act.name}</h4>
                          {act.desc && <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{act.desc}</p>}
                          <div className="flex items-center gap-1.5 text-[9px] text-slate-500">
                            <FileText className="w-3.5 h-3.5" />
                            <span>Required: <strong className="text-slate-700 dark:text-slate-300">{act.proof}</strong></span>
                          </div>
                        </div>

                        {!isInlineAddActive && (
                          <button
                            onClick={() => {
                              if (act.type === "fixed") { handleDirectAddFixed(act); } else { handleStartInlineAdd(act); }
                            }}
                            className="px-3.5 py-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/20 text-[9px] font-extrabold cursor-pointer transition-all flex items-center gap-1 active:scale-95 shrink-0"
                          >
                            <Plus className="w-3.5 h-3.5" /> Claim
                          </button>
                        )}
                      </div>

                      {/* Inline config inputs */}
                      {isInlineAddActive && (
                        <div className="mt-3 p-3 rounded-xl bg-slate-100/50 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fade-in">
                          <div className="flex-1 w-full space-y-1">
                            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block">Select Category:</span>
                            {act.type === "level" && act.levels && (
                              <select 
                                value={inlineSelLevel} 
                                onChange={(e) => {
                                  setInlineSelLevel(e.target.value);
                                  setInlineSelPoints(act.levels?.[e.target.value] || 0);
                                }} 
                                className="w-full bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-lg px-2.5 py-1.5 text-xs font-bold cursor-pointer text-slate-900 dark:text-white focus:outline-none"
                              >
                                {Object.keys(act.levels).map(lvl => (
                                  <option key={lvl} value={lvl}>{lvl} (+{act.levels?.[lvl]} pts)</option>
                                ))}
                              </select>
                            )}
                            {act.type === "count" && (
                              <div className="flex items-center gap-2">
                                <input 
                                  type="number" 
                                  min="1" 
                                  value={inlineSelQuantity} 
                                  onChange={(e) => {
                                    const qty = Math.max(1, Number(e.target.value));
                                    setInlineSelQuantity(qty);
                                    setInlineSelPoints(qty * (act.pointsPerUnit || 1));
                                  }} 
                                  className="w-16 bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-lg px-2 py-1 text-center font-bold text-xs focus:outline-none font-mono" 
                                />
                                <span className="text-[9px] text-slate-400">Total units &times; {act.pointsPerUnit || 5} pts each</span>
                              </div>
                            )}
                            {act.type === "input" && (
                              <div className="flex items-center gap-2">
                                <input 
                                  type="number" 
                                  min="1" 
                                  max={act.maxPoints} 
                                  placeholder="Points" 
                                  value={inlineSelPoints || ""} 
                                  onChange={(e) => setInlineSelPoints(Math.min(act.maxPoints, Math.max(0, Number(e.target.value))))} 
                                  className="w-20 bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-lg px-2 py-1 text-center font-bold text-xs focus:outline-none font-mono" 
                                />
                                <span className="text-[9px] text-slate-400">claimed marks (max {act.maxPoints})</span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                            <button onClick={() => setInlineAddCode(null)} className="px-3 py-1.5 rounded-xl border border-slate-250 dark:border-slate-700 text-slate-600 dark:text-slate-350 text-[10px] font-bold cursor-pointer transition-all hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-95">Cancel</button>
                            <button onClick={() => handleConfirmInlineAdd(act)} className="px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold cursor-pointer transition-all active:scale-95 shadow-sm">Confirm</button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 2: CREDIT AUDITOR ── */}
      {gradSubTab === "credits" && (
        <div className="px-5 py-5 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Target Select */}
            <div className="flex flex-col sm:flex-row gap-2.5">
              {[
                { id: "s5" as const, label: "S5 Promotion Limit", need: 26 },
                { id: "s7" as const, label: "S7 Promotion Limit", need: 52 }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => {
                    triggerHaptic("light");
                    setProgressionTarget(t.id);
                  }}
                  className={`flex-1 py-2.5 rounded-xl border text-xs font-extrabold transition-all cursor-pointer active:scale-[0.98] ${
                    progressionTarget === t.id
                      ? "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20"
                      : "bg-slate-50/50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-350"
                  }`}
                >
                  {t.label} (Required {t.need})
                </button>
              ))}
            </div>

            {/* Step credits input */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["s1", "s2", ...(progressionTarget === "s7" ? ["s3", "s4"] : [])].map((semKey) => (
                <div key={semKey} className="space-y-1.5 p-3 rounded-2xl bg-slate-50/40 dark:bg-slate-900/20 border border-slate-200/40 dark:border-white/[0.02] text-center">
                  <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">{semKey.toUpperCase()} Credits</label>
                  <input
                    type="number"
                    min="0"
                    max="22"
                    value={progressionCredits[semKey as keyof typeof progressionCredits] || ""}
                    placeholder="0"
                    onChange={(e) => handleProgressionCreditChange(semKey as any, Number(e.target.value))}
                    className="w-full bg-transparent border-0 text-center font-bold text-2xl text-slate-900 dark:text-white focus:outline-none focus:ring-0 font-mono mt-1"
                  />
                </div>
              ))}
            </div>

            {/* Verdict Box */}
            <div className={`p-6 rounded-3xl border text-center space-y-2 ${
              passedCredits
                ? "bg-emerald-500/5 border-emerald-500/15"
                : "bg-rose-500/5 border-rose-500/15"
            }`}>
              <div className="flex items-baseline justify-center gap-1.5 tracking-tight">
                <span className={`text-4xl font-bold font-mono leading-none ${passedCredits ? "text-emerald-600 dark:text-emerald-450" : "text-rose-500"}`}>{earned}</span>
                <span className="text-sm font-bold opacity-60 font-sans text-slate-650 dark:text-slate-400">/ {limit} Credits Earned</span>
              </div>
              
              <div className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 justify-center mt-3 ${passedCredits ? "text-emerald-600 dark:text-emerald-450" : "text-rose-500"}`}>
                {passedCredits ? <CheckCircle2 className="w-4 h-4" /> : <ShieldAlert className="w-4 h-4 text-rose-500" />}
                {passedCredits ? "Promotion Eligibility Cleared" : `Promotion Block Risk - Need ${limit - earned} credits`}
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-normal font-sans">
                Under APJ AKU B.Tech regulations, entry to {progressionTarget === "s5" ? "Semester 5" : "Semester 7"} requires a minimum of <strong className="text-slate-700 dark:text-slate-300 font-bold">{limit} credits</strong> earned in S1/S2 {progressionTarget === "s7" && "and S3/S4"}.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 3: BACKLOG TRACKER ── */}
      {gradSubTab === "backlogs" && (
        <div className="px-5 py-5 space-y-5">
          {/* List */}
          <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin">
            {backlogSubjects.length === 0 ? (
              <div className="text-center py-10 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/20 dark:bg-slate-900/10">
                <AlertTriangle className="w-8 h-8 text-slate-350 dark:text-slate-650 mx-auto mb-2" />
                <div className="text-xs font-bold text-slate-500 dark:text-slate-450 uppercase tracking-widest block">No Logged Backlogs</div>
                <div className="text-[10px] text-slate-450 dark:text-slate-500 mt-1.5 max-w-xs mx-auto leading-normal">Awesome! Either you have no backlogs or haven't logged any yet. Add below to track progress.</div>
              </div>
            ) : (
              backlogSubjects.map(bl => (
                <div key={bl.id} className="p-3.5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200/40 dark:border-slate-800/60 flex items-center justify-between gap-4 transition-all duration-150">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900 dark:text-white font-mono">{bl.code}</span>
                      <span className="text-[9px] text-slate-650 dark:text-slate-300 bg-slate-200/50 dark:bg-slate-800 px-1.5 py-0.5 rounded-md font-mono font-bold">Sem {bl.semester}</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 truncate block mt-1">{bl.name}</span>
                    <span className="text-[10px] text-slate-505 dark:text-slate-450 font-bold block mt-0.5 font-mono">{bl.attempts} Attempt{bl.attempts !== 1 && "s"} registered</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <select
                      value={bl.status}
                      onChange={(e) => handleStatusChange(bl.id, e.target.value as 'pending' | 'cleared' | 'registered')}
                      className={`px-2.5 py-1 rounded-xl border text-[10px] font-black cursor-pointer ${
                        bl.status === "cleared" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-450 border-emerald-500/15"
                        : bl.status === "registered" ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/15"
                        : "bg-amber-500/10 text-amber-600 dark:text-amber-450 border-amber-500/15"
                      }`}
                    >
                      <option value="pending">Pending</option>
                      <option value="registered">Registered</option>
                      <option value="cleared">Cleared ✓</option>
                    </select>
                    <button 
                      onClick={() => handleDeleteBacklog(bl.id)} 
                      className="text-slate-400 hover:text-rose-500 p-1.5 cursor-pointer transition-colors"
                      title="Delete backlog"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Add Form */}
          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/10 space-y-3">
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 block">Log Failed Subject</span>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              <input
                type="text"
                placeholder="Course Code"
                value={backlogCode}
                onChange={(e) => setBacklogCode(e.target.value)}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 dark:text-white uppercase placeholder-slate-400 focus:outline-none sm:col-span-2"
              />
              <input
                type="text"
                placeholder="Subject Name"
                value={backlogName}
                onChange={(e) => setBacklogName(e.target.value)}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none sm:col-span-2"
              />
              <select
                value={backlogSemester}
                onChange={(e) => setBacklogSemester(Number(e.target.value))}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-2 text-xs font-bold text-slate-900 dark:text-white focus:outline-none cursor-pointer font-mono"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (
                  <option key={s} value={s}>Sem {s}</option>
                ))}
              </select>
            </div>
            <button
              onClick={handleAddBacklog}
              className="w-full py-2.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/20 text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer active:scale-[0.98] flex items-center justify-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" /> Log Backlog Subject
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
