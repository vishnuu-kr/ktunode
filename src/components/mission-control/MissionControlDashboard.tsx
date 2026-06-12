"use client";

import React, { useState, useEffect } from "react";
import TelemetryStrip from "./TelemetryStrip";
import DailyGauntlet from "./DailyGauntlet";
import BunkSafetyAnalyzer from "./BunkSafetyAnalyzer";
import ConfigDrawer from "./ConfigDrawer";
import { Settings, RefreshCw, Zap, Sparkles, BookOpen, ArrowRight, Upload, Menu, Smartphone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { triggerHaptic } from "@/lib/haptic";

type Subject = {
  id: string;
  code: string;
  name: string;
  credits: number;
};

type SlotConfig = {
  subject: string;
  professor: string;
  vibe: "saint" | "robot" | "boss";
};

type MissionControlDashboardProps = {
  branch: string;
  sem: string;
  gpa?: string;
  subjects: Subject[];
};

const DEFAULT_TIMINGS = [
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:15 - 12:15",
  "13:15 - 14:15",
  "14:15 - 15:15",
  "15:15 - 16:15",
];

export default function MissionControlDashboard({ branch, sem, gpa = "8.42", subjects = [] }: MissionControlDashboardProps) {
  const [mounted, setMounted] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Core configuration states
  const [mcSetup, setMcSetup] = useState(false);
  const [mcSlots, setMcSlots] = useState<Record<string, SlotConfig>>({});
  const [mcTimetable, setMcTimetable] = useState<string[][]>([]);
  const [mcTimetableTimings, setMcTimetableTimings] = useState<string[]>(DEFAULT_TIMINGS);
  const [mcLogs, setMcLogs] = useState<Record<string, string[]>>({});

  const [showShortcutTip, setShowShortcutTip] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const dismissed = localStorage.getItem("ktunode_timetable_shortcut_tip_dismissed");
      if (!dismissed) {
        setShowShortcutTip(true);
      }
    }
  }, []);

  const handleDismissShortcutTip = () => {
    triggerHaptic("light");
    if (typeof window !== "undefined") {
      localStorage.setItem("ktunode_timetable_shortcut_tip_dismissed", "true");
    }
    setShowShortcutTip(false);
  };

  // Streamlined onboarding inline states
  const [whatsappText, setWhatsappText] = useState("");
  const [showImporter, setShowImporter] = useState(false);
  const [onboardingSlots, setOnboardingSlots] = useState<Record<string, SlotConfig>>({
    A: { subject: "", professor: "Staff", vibe: "robot" },
    B: { subject: "", professor: "Staff", vibe: "robot" },
    C: { subject: "", professor: "Staff", vibe: "robot" },
    D: { subject: "", professor: "Staff", vibe: "robot" },
    E: { subject: "", professor: "Staff", vibe: "robot" },
    F: { subject: "", professor: "Staff", vibe: "robot" },
  });

  // Populate onboarding slots when subjects load
  useEffect(() => {
    if (subjects && subjects.length > 0) {
      const defaultSlots = ["A", "B", "C", "D", "E", "F"];
      const updated = { ...onboardingSlots };
      defaultSlots.forEach((slotLetter, idx) => {
        if (subjects[idx]) {
          updated[slotLetter] = {
            subject: subjects[idx].name,
            professor: "Staff",
            vibe: "robot",
          };
        } else {
          updated[slotLetter] = {
            subject: `Course Slot ${slotLetter}`,
            professor: "Staff",
            vibe: "robot",
          };
        }
      });
      setOnboardingSlots(updated);
    }
  }, [subjects]);

  const handleCreateTimetable = () => {
    triggerHaptic("success");
    const DEFAULT_TIMETABLE_MATRIX = [
      ["A", "B", "C", "D", "E", "F"], // Mon
      ["B", "C", "D", "E", "F", "A"], // Tue
      ["C", "D", "E", "F", "A", "B"], // Wed
      ["D", "E", "F", "A", "B", "C"], // Thu
      ["E", "F", "A", "B", "C", "D"], // Fri
    ];
    handleOnboardingComplete(onboardingSlots, DEFAULT_TIMETABLE_MATRIX);
  };

  const handleParseText = () => {
    if (!whatsappText.trim()) return;
    triggerHaptic("medium");

    const newSlots: Record<string, SlotConfig> = {
      A: { subject: "Calculus", professor: "Staff", vibe: "robot" },
      B: { subject: "Engineering Mechanics", professor: "Staff", vibe: "robot" },
      C: { subject: "Physics", professor: "Staff", vibe: "robot" },
      D: { subject: "Graphics", professor: "Staff", vibe: "robot" },
      E: { subject: "Basic Electrical", professor: "Staff", vibe: "robot" },
      F: { subject: "Programming", professor: "Staff", vibe: "robot" },
    };

    const lines = whatsappText.split("\n");
    const defaultSlots = ["A", "B", "C", "D", "E", "F"];
    let foundAny = false;

    lines.forEach((line) => {
      const slotMatch = line.match(/(?:slot\s+)?([a-fA-F])\s*[:=-]\s*(.+)/i);
      if (slotMatch) {
        const slotLetter = slotMatch[1].toUpperCase();
        const content = slotMatch[2].trim();
        let subject = content;
        let profName = "Staff";
        const profMatch = content.split(/\s+(?:by|with|prof\.?)\s+/i);
        if (profMatch.length > 1) {
          subject = profMatch[0].trim();
          profName = profMatch[1].trim();
        }

        newSlots[slotLetter] = {
          subject: subject.slice(0, 30),
          professor: profName.slice(0, 20),
          vibe: "robot"
        };
        foundAny = true;
      }
    });

    if (!foundAny) {
      const words = whatsappText.match(/[A-Z]{3,6}\d{3}|[A-Z][a-z]{3,10}(?:\s+[A-Za-z]{3,10})?/g) || [];
      const extracted = Array.from(new Set(words)).slice(0, 6);
      extracted.forEach((subj, idx) => {
        const letter = defaultSlots[idx];
        if (letter) {
          newSlots[letter] = {
            subject: subj,
            professor: "Staff",
            vibe: "robot"
          };
        }
      });
    }

    const DEFAULT_TIMETABLE_MATRIX = [
      ["A", "B", "C", "D", "E", "F"], // Mon
      ["B", "C", "D", "E", "F", "A"], // Tue
      ["C", "D", "E", "F", "A", "B"], // Wed
      ["D", "E", "F", "A", "B", "C"], // Thu
      ["E", "F", "A", "B", "C", "D"], // Fri
    ];

    handleOnboardingComplete(newSlots, DEFAULT_TIMETABLE_MATRIX);
  };

  // Local storage namespace key
  const storageKey = `${branch}_${sem}_mc_config`;

  // 1. Initial State Load (Safe for SSR)
  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setMcSetup(parsed.mcSetup ?? false);
          setMcSlots(parsed.mcSlots ?? {});
          setMcTimetable(parsed.mcTimetable ?? []);
          setMcTimetableTimings(parsed.mcTimetableTimings ?? DEFAULT_TIMINGS);
          setMcLogs(parsed.mcLogs ?? {});
        } catch (e) {
          console.error("Error parsing Mission Control config", e);
        }
      }
    }
  }, [storageKey]);

  // 2. State persistence helper
  const saveState = (updated: {
    mcSetup: boolean;
    mcSlots: Record<string, SlotConfig>;
    mcTimetable: string[][];
    mcTimetableTimings: string[];
    mcLogs: Record<string, string[]>;
  }) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(storageKey, JSON.stringify(updated));
    }
    setMcSetup(updated.mcSetup);
    setMcSlots(updated.mcSlots);
    setMcTimetable(updated.mcTimetable);
    setMcTimetableTimings(updated.mcTimetableTimings);
    setMcLogs(updated.mcLogs);
  };

  // Complete onboarding
  const handleOnboardingComplete = (slots: Record<string, SlotConfig>, timetable: string[][]) => {
    saveState({
      mcSetup: true,
      mcSlots: slots,
      mcTimetable: timetable,
      mcTimetableTimings: DEFAULT_TIMINGS,
      mcLogs: {},
    });
  };

  // Update attendance logs
  const handleLogStatus = (dateStr: string, periodIndex: number, status: "attended" | "bunked" | "none") => {
    const currentDayLogs = mcLogs[dateStr] ? [...mcLogs[dateStr]] : Array(6).fill("none");
    currentDayLogs[periodIndex] = status;

    const updatedLogs = {
      ...mcLogs,
      [dateStr]: currentDayLogs,
    };

    saveState({
      mcSetup,
      mcSlots,
      mcTimetable,
      mcTimetableTimings,
      mcLogs: updatedLogs,
    });
  };

  // Update configurations from drawer
  const handleSaveDrawerConfig = (updatedSlots: Record<string, SlotConfig>, updatedTimings: string[]) => {
    saveState({
      mcSetup,
      mcSlots: updatedSlots,
      mcTimetable,
      mcTimetableTimings: updatedTimings,
      mcLogs,
    });
  };

  // Reset timetable data
  const handleResetData = () => {
    saveState({
      mcSetup: false,
      mcSlots: {},
      mcTimetable: [],
      mcTimetableTimings: DEFAULT_TIMINGS,
      mcLogs: {},
    });
  };

  // 3. Dynamic attendance map calculation
  // Computes current attendance percentage per subject based on base count + local logs
  const calculateAttendanceMap = () => {
    const map: Record<string, number> = {};
    
    // Seed subjects with 85% attendance baseline (e.g. 17/20 sessions)
    const baseAttended = 17;
    const baseTotal = 20;

    Object.values(mcSlots).forEach((s) => {
      map[s.subject] = 85.0; // standard base
    });

    // Loop through logs and recalculate
    const tally: Record<string, { attended: number; bunked: number }> = {};
    Object.keys(mcLogs).forEach((dateKey) => {
      const dayLogs = mcLogs[dateKey] || [];
      const dayNum = new Date(dateKey).getDay();
      const timetableDayIndex = dayNum === 0 || dayNum === 6 ? 0 : dayNum - 1; // default weekend to monday

      dayLogs.forEach((status, periodIdx) => {
        const slotLetter = mcTimetable[timetableDayIndex]?.[periodIdx];
        if (slotLetter) {
          const subjectName = mcSlots[slotLetter]?.subject;
          if (subjectName) {
            if (!tally[subjectName]) {
              tally[subjectName] = { attended: 0, bunked: 0 };
            }
            if (status === "attended") tally[subjectName].attended += 1;
            if (status === "bunked") tally[subjectName].bunked += 1;
          }
        }
      });
    });

    // Merge tally into map
    Object.keys(map).forEach((subj) => {
      const counts = tally[subj] || { attended: 0, bunked: 0 };
      const totalAttended = baseAttended + counts.attended;
      const totalSessions = baseTotal + counts.attended + counts.bunked;
      map[subj] = Math.round((totalAttended / totalSessions) * 1000) / 10;
    });

    return map;
  };

  if (!mounted) {
    return (
      <div className="animate-pulse h-96 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800 rounded-[30px] flex items-center justify-center text-xs text-slate-400 font-medium">
        Loading schedule...
      </div>
    );
  }

  // If not configured, render onboarding setup wizard
  if (!mcSetup) {
    return (
      <div className="py-6 w-full max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/50 dark:border-white/[0.04] rounded-[32px] p-6 sm:p-8 shadow-xl relative overflow-hidden space-y-6"
        >
          {/* Ambient light glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-52 h-52 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-52 h-52 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-3.5 border-b border-slate-100 dark:border-slate-800 pb-5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-blue-500 to-indigo-650 flex items-center justify-center text-white shadow-md shadow-blue-500/15 shrink-0">
              <Zap className="w-5.5 h-5.5 fill-current animate-pulse" />
            </div>
            <div className="text-left space-y-0.5">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight">
                Weekly Timetable Setup
              </h2>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                Verify and customize course allocations for each class slot before launching your timetable.
              </p>
            </div>
          </div>

          {/* Slot Grid Customizer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
            {["A", "B", "C", "D", "E", "F"].map((slotLetter) => {
              const cfg = onboardingSlots[slotLetter] || { subject: "", professor: "Staff", vibe: "robot" };
              return (
                <div key={slotLetter} className="p-3.5 bg-slate-50/40 dark:bg-slate-950/40 border border-slate-200/50 dark:border-white/[0.03] rounded-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-extrabold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded tracking-wide">
                      SLOT {slotLetter}
                    </span>
                    <select
                      value={cfg.vibe}
                      onChange={(e) =>
                        setOnboardingSlots({
                          ...onboardingSlots,
                          [slotLetter]: { ...cfg, vibe: e.target.value as any },
                        })
                      }
                      className="text-[9.5px] font-extrabold bg-white dark:bg-slate-800 border border-slate-250 dark:border-slate-700 rounded px-1.5 py-0.5 text-slate-700 dark:text-slate-350 cursor-pointer outline-none focus:ring-1 focus:ring-blue-500/20"
                    >
                      <option value="saint">Chill Attendance</option>
                      <option value="robot">Standard Class</option>
                      <option value="boss">Strict Verification</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Subject name"
                      value={cfg.subject}
                      onChange={(e) =>
                        setOnboardingSlots({
                          ...onboardingSlots,
                          [slotLetter]: { ...cfg, subject: e.target.value },
                        })
                      }
                      className="w-full bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-white/[0.06] hover:border-slate-350 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Professor"
                      value={cfg.professor}
                      onChange={(e) =>
                        setOnboardingSlots({
                          ...onboardingSlots,
                          [slotLetter]: { ...cfg, professor: e.target.value },
                        })
                      }
                      className="w-full bg-white dark:bg-slate-955 border border-slate-200/80 dark:border-white/[0.06] hover:border-slate-350 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-850 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="space-y-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.01, y: -0.5 }}
              whileTap={{ scale: 0.99 }}
              onClick={handleCreateTimetable}
              className="w-full bg-gradient-to-b from-[#2E95FF] to-[#007AFF] hover:brightness-105 border border-blue-500/25 text-white font-bold uppercase text-[10.5px] tracking-widest py-3.5 rounded-2xl flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/10 cursor-pointer"
            >
              Initialize Timetable & Launch <ArrowRight className="w-4 h-4" />
            </motion.button>

            <button
              onClick={() => {
                triggerHaptic("light");
                setShowImporter(!showImporter);
              }}
              className="text-[10px] font-bold text-slate-400 hover:text-slate-650 dark:hover:text-slate-200 cursor-pointer uppercase tracking-wider block mx-auto hover:underline"
            >
              Or import schedule from forwarded text instead
            </button>
          </div>

          <AnimatePresence>
            {showImporter && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden space-y-3 pt-2 text-left"
              >
                <div className="border-t border-slate-100 dark:border-slate-800/80 my-2" />
                <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                  Paste forwarded message or text:
                </label>
                <textarea
                  value={whatsappText}
                  onChange={(e) => setWhatsappText(e.target.value)}
                  placeholder="e.g.&#10;Slot A: Calculus&#10;Slot B: Physics&#10;Slot C: Chemistry"
                  className="w-full h-32 bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-800 focus:border-blue-500 rounded-2xl p-3 text-xs text-slate-850 dark:text-slate-100 placeholder-slate-450 outline-none transition-all font-mono leading-normal resize-none"
                />
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={handleParseText}
                  disabled={!whatsappText.trim()}
                  className="w-full bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-2xl flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Parse & Initialize
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    );
  }

  const attendancePctMap = calculateAttendanceMap();

  return (
    <div className="space-y-6 relative">
      {/* Decorative ambient glowing background circles */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-blue-500/[0.04] dark:bg-blue-500/[0.02] blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-500/[0.04] dark:bg-purple-500/[0.02] blur-[80px] pointer-events-none" />

      {/* Header with hamburger menu */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.04] pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white tracking-tight leading-none">
              Weekly Schedule Hub
            </h2>
            <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 block mt-0.5">
              Attendance buffers & study load
            </span>
          </div>
        </div>

        <div className="relative">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => { triggerHaptic("light"); setShowMenu(!showMenu); }}
            className="w-8 h-8 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-all duration-200"
          >
            <Menu className="w-4 h-4" />
          </motion.button>

          <AnimatePresence>
            {showMenu && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1.5 w-48 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-xl shadow-xl shadow-slate-200/40 dark:shadow-black/30 z-50 py-1 overflow-hidden"
                >
                  <button
                    onClick={() => { triggerHaptic("light"); setIsConfigOpen(true); setShowMenu(false); }}
                    className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-[11px] font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors text-left"
                  >
                    <Settings className="w-3.5 h-3.5 text-slate-400" /> Configure Schedule
                  </button>
                  <div className="mx-3 border-t border-slate-100 dark:border-slate-800" />
                  <button
                    onClick={() => {
                      triggerHaptic("warning");
                      if (confirm("Reset all timetable data?")) { handleResetData(); }
                      setShowMenu(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-[11px] font-semibold text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 cursor-pointer transition-colors text-left"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Reset Timetable
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Telemetry Indicator Strip */}
      <TelemetryStrip slots={mcSlots} logs={mcLogs} gpa={gpa} timings={mcTimetableTimings} />

      {/* PWA Android Shortcut/Widget Banner */}
      <AnimatePresence>
        {showShortcutTip && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-550/10 border border-blue-500/20 dark:border-blue-500/10 rounded-[24px] p-4.5 flex items-start gap-4 shadow-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/[0.02] rounded-full blur-2xl pointer-events-none" />
              
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <Smartphone className="w-5.5 h-5.5" />
              </div>
              
              <div className="flex-1 text-left space-y-1 pr-6">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5 leading-tight">
                  Pin to Home Screen (Android Shortcut)
                  <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 uppercase tracking-wider">Android Only</span>
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  Add this timetable as a one-tap home screen shortcut! Long-press the installed <strong>KTUNode</strong> app icon on your home screen, then drag <strong>&quot;Class Timetable&quot;</strong> to place it anywhere on your device.
                </p>
              </div>

              <button
                onClick={handleDismissShortcutTip}
                className="absolute top-4.5 right-4.5 p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-650 dark:hover:text-slate-350 transition-colors cursor-pointer"
                aria-label="Dismiss shortcut tip"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tactical Widget Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Daily Gauntlet Timeline */}
        <div className="lg:col-span-7 h-full">
          <DailyGauntlet
            slots={mcSlots}
            timetable={mcTimetable}
            timings={mcTimetableTimings}
            logs={mcLogs}
            onLogStatus={handleLogStatus}
            attendancePctMap={attendancePctMap}
          />
        </div>

        {/* Right Column: Attendance Skip Planner */}
        <div className="lg:col-span-5 h-full">
          <BunkSafetyAnalyzer
            slots={mcSlots}
            logs={mcLogs}
            timetable={mcTimetable}
          />
        </div>
      </div>

      {/* Config Drawer slide-out overlay */}
      <ConfigDrawer
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        slots={mcSlots}
        timings={mcTimetableTimings}
        onSave={handleSaveDrawerConfig}
        onReset={handleResetData}
      />
    </div>
  );
}
