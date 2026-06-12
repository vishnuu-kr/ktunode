"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Clock, Play, Pause, RotateCcw, Volume2, Shield, 
  HelpCircle, AlertCircle, FileText, Sparkles, Plus, 
  Trash2, ShieldCheck, Check, Info, Calendar, Download, ListTodo, AlertTriangle 
} from "lucide-react";
import { triggerHaptic } from "@/lib/haptic";

const SLOTS = ["Slot A", "Slot B", "Slot C", "Slot D", "Slot E", "Slot F"];

interface Subject {
  code: string;
  name: string;
  credits: number;
}

interface ExamCommandPanelProps {
  branch: string;
  sem: number;
  subjects: Subject[];
  mtMilestones: Record<string, boolean[]>;
  setMtMilestones: React.Dispatch<React.SetStateAction<Record<string, boolean[]>>>;
  mtCramHours: number;
  setMtCramHours: (hours: number) => void;
  triggerNotification: (msg: string) => void;
}

export default function ExamCommandPanel({
  branch,
  sem,
  subjects,
  mtMilestones,
  setMtMilestones,
  mtCramHours,
  setMtCramHours,
  triggerNotification
}: ExamCommandPanelProps) {
  // Inner states
  const [utilityConsoleTab, setUtilityConsoleTab] = useState<"checklist" | "slots">("checklist");
  const [examDates, setExamDates] = useState<Record<string, { date: string, time: string }>>({});

  // Pomodoro local states
  const [pomodoroTime, setPomodoroTime] = useState(1500); // 25 mins focus
  const [pomodoroActive, setPomodoroActive] = useState(false);
  const [pomodoroMode, setPomodoroMode] = useState<"focus" | "break">("focus");
  const [selectedLofiSound, setSelectedLofiSound] = useState<string | null>(null);

  // Audio elements references for lofi ambient sounds
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  // Checklist states
  const [mtHallChecklist, setMtHallChecklist] = useState<string[]>([
    "Admit Card (Hall Ticket)",
    "University Approved Calculator (e.g. FX-991ES Plus)",
    "College ID Card",
    "Blue/Black Ballpoint Pens",
    "Pencil & Ruler",
    "Water Bottle"
  ]);

  // Info toggles
  const [showPomodoroInfo, setShowPomodoroInfo] = useState(false);
  const [showCramInfo, setShowCramInfo] = useState(false);
  const [showUtilitiesInfo, setShowUtilitiesInfo] = useState(false);

  // Active Subject selection for syllabus milestone tracking
  const [plannerActiveSubjectCode, setPlannerActiveSubjectCode] = useState("");

  const activeSemesterSubjects = subjects;

  const plannerActiveSubject = useMemo(() => {
    if (activeSemesterSubjects.length === 0) {
      return { code: "PCCST403", name: "Operating Systems" };
    }
    const found = activeSemesterSubjects.find(s => s.code === plannerActiveSubjectCode);
    return found || activeSemesterSubjects[0];
  }, [activeSemesterSubjects, plannerActiveSubjectCode]);

  useEffect(() => {
    if (activeSemesterSubjects.length > 0 && !plannerActiveSubjectCode) {
      setPlannerActiveSubjectCode(activeSemesterSubjects[0].code);
    }
  }, [activeSemesterSubjects, plannerActiveSubjectCode]);

  // Load exam dates
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`ktunode_exam_dates_${branch}_${sem}`);
      if (saved) {
        try {
          setExamDates(JSON.parse(saved));
        } catch (e) {
          console.error(e);
        }
      } else {
        setExamDates({});
      }
    }
  }, [branch, sem]);

  const handleUpdateExamDate = (courseCode: string, date: string, time: string) => {
    const updated = {
      ...examDates,
      [courseCode]: { date, time }
    };
    setExamDates(updated);
    localStorage.setItem(`ktunode_exam_dates_${branch}_${sem}`, JSON.stringify(updated));
  };

  // Pomodoro Tick logic
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (pomodoroActive && pomodoroTime > 0) {
      timer = setInterval(() => {
        setPomodoroTime(prev => prev - 1);
      }, 1000);
    } else if (pomodoroTime === 0) {
      triggerHaptic("heavy");
      triggerNotification(pomodoroMode === "focus" ? "Focus block completed! Take a break." : "Break over! Ready to focus?");
      
      const nextMode = pomodoroMode === "focus" ? "break" : "focus";
      setPomodoroMode(nextMode);
      setPomodoroTime(nextMode === "focus" ? 1500 : 300);
      setPomodoroActive(false);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [pomodoroActive, pomodoroTime, pomodoroMode, triggerNotification]);

  // Lofi audio tracks control
  const toggleLofiSound = (soundType: string, e: React.MouseEvent) => {
    triggerHaptic("medium", e);
    const audioUrls: Record<string, string> = {
      rain: "https://assets.mixkit.co/active_storage/sfx/2433/2433-84.wav", // Rain loop
      cafe: "https://assets.mixkit.co/active_storage/sfx/2539/2539-84.wav"  // Ambient chatter
    };

    if (selectedLofiSound === soundType) {
      // Pause
      const currentAudio = audioRefs.current[soundType];
      if (currentAudio) {
        currentAudio.pause();
      }
      setSelectedLofiSound(null);
    } else {
      // Pause others
      if (selectedLofiSound) {
        const prevAudio = audioRefs.current[selectedLofiSound];
        if (prevAudio) prevAudio.pause();
      }

      // Play
      let audio = audioRefs.current[soundType];
      if (!audio && audioUrls[soundType]) {
        audio = new Audio(audioUrls[soundType]);
        audio.loop = true;
        audioRefs.current[soundType] = audio;
      }
      
      if (audio) {
        audio.volume = 0.45;
        audio.play().catch(err => console.log("Audio play blocked by browser", err));
        setSelectedLofiSound(soundType);
      }
    }
  };

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      Object.values(audioRefs.current).forEach(audio => {
        if (audio) audio.pause();
      });
    };
  }, []);

  const formatPomodoroTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remainingSecs.toString().padStart(2, "0")}`;
  };

  // Syllabus Milestones Studied checklists
  const activeCode = plannerActiveSubject.code;
  const activeName = plannerActiveSubject.name;
  const moduleCount = 4;
  const defaultToggles = Array(moduleCount).fill(false);
  const moduleToggles = mtMilestones[activeCode] || defaultToggles;

  const untouchedIndices = moduleToggles.reduce<number[]>((acc, val, idx) => {
    if (!val) acc.push(idx);
    return acc;
  }, []);
  const untouchedCount = untouchedIndices.length;
  const doneCount = moduleCount - untouchedCount;

  // Highlight first untouched module
  const currentModuleIdx = untouchedIndices.length > 0 ? untouchedIndices[0] : -1;

  // Advice engine based on hours and remaining modules
  let advice = "";
  if (untouchedCount === 0) {
    advice = "All 4 syllabus modules fully checked! You are set for an S grade. Spend remaining time reviewing old question papers.";
  } else if (mtCramHours >= untouchedCount * 2.5) {
    const perModule = Math.floor((mtCramHours / untouchedCount) * 10) / 10;
    advice = `With ${untouchedCount} modules left, dedicate ~${perModule}h each to Module ${untouchedIndices.map(i => i + 1).join(" & ")}. Save 2h for formula sheets.`;
  } else if (mtCramHours < untouchedCount * 1.5 && untouchedCount > 1) {
    const skipMod = untouchedIndices[untouchedIndices.length - 1] + 1;
    const focusMods = untouchedIndices.slice(0, -1).map(i => i + 1).join(", ");
    advice = `Skip Module ${skipMod} entirely. Focus your remaining ${mtCramHours} hours exclusively on high-yield Modules ${focusMods} to secure a safe pass.`;
  } else {
    advice = `With ${mtCramHours} hours remaining and ${untouchedCount} modules left, prioritize Module ${untouchedIndices[0] + 1} (usually carries 20% fundamental weight) first.`;
  }

  const toggleModule = (idx: number) => {
    triggerHaptic("light");
    const currentArray = [...moduleToggles];
    currentArray[idx] = !currentArray[idx];
    const updated = {
      ...mtMilestones,
      [activeCode]: currentArray
    };
    setMtMilestones(updated);
  };



  const datedExams = activeSemesterSubjects
    .map((sub, idx) => {
      const slotStr = SLOTS[idx % SLOTS.length];
      const data = examDates[sub.code];
      return { sub, slotStr, ...data };
    })
    .filter(item => item.date)
    .sort((a, b) => new Date(`${a.date}T${a.time || "00:00"}`).getTime() - new Date(`${b.date}T${b.time || "00:00"}`).getTime());

  const getCountdown = (examDateStr: string, examTimeStr: string) => {
    const now = new Date();
    const examDate = new Date(`${examDateStr}T${examTimeStr || "09:30"}`);
    const diffMs = examDate.getTime() - now.getTime();
    if (diffMs < 0) {
      const hoursAgo = Math.abs(diffMs) / (1000 * 60 * 60);
      if (hoursAgo < 3) return { label: "Ongoing", theme: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/15" };
      return { label: "Completed", theme: "bg-slate-100 dark:bg-slate-800 text-slate-450 dark:text-slate-500 border border-slate-200/20 dark:border-slate-700/40" };
    }
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
      return { label: `Tomorrow (${diffHrs}h)`, theme: "bg-amber-500/10 text-amber-600 border border-amber-500/15" };
    }
    return { label: `In ${diffDays} days`, theme: "bg-blue-500/10 text-blue-600 border border-blue-500/15" };
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full">
      
      {/* ── COLUMN 1: POMODORO & CRAM PLANNER ── */}
      <div className="lg:col-span-8 space-y-6">
        
        {/* A. Pomodoro focus Hub */}
        <div className="bg-white/80 dark:bg-slate-950/60 backdrop-blur-3xl border border-slate-200/50 dark:border-white/[0.04] rounded-3xl p-5 md:p-6 shadow-xl flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight leading-none">Focus Timer</h3>
              <button 
                onClick={() => setShowPomodoroInfo(!showPomodoroInfo)}
                className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 cursor-pointer"
              >
                <Info className="w-3.5 h-3.5" />
              </button>
            </div>
            
            <p className="text-xs text-slate-550 dark:text-slate-400 font-medium leading-relaxed font-sans max-w-sm">
              Use the block interval timer to cram core concepts. Play ambient tracks to block out distractions.
            </p>

            <AnimatePresence>
              {showPomodoroInfo && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden bg-slate-50 dark:bg-slate-900/40 p-3 rounded-xl text-[10px] text-slate-500 dark:text-slate-400 leading-normal border border-slate-200/55 dark:border-slate-800"
                >
                  Cram Interval Rules: 25 minutes focused study, followed by a 5-minute break. Tap the buttons to play audio layers directly.
                </motion.div>
              )}
            </AnimatePresence>

            {/* Ambient tracks buttons */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[10px] font-bold text-slate-450 uppercase tracking-wider">Soundscape:</span>
              <button
                onClick={(e) => toggleLofiSound("rain", e)}
                className={`px-3 py-1.5 rounded-xl border text-[10px] font-bold cursor-pointer transition-all flex items-center gap-1 active:scale-95 ${
                  selectedLofiSound === "rain"
                    ? "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400"
                    : "bg-slate-50 dark:bg-slate-900 border-slate-200/50 dark:border-slate-800 text-slate-500 hover:text-slate-700"
                }`}
              >
                <Volume2 className="w-3 h-3" /> Rain
              </button>
              <button
                onClick={(e) => toggleLofiSound("cafe", e)}
                className={`px-3 py-1.5 rounded-xl border text-[10px] font-bold cursor-pointer transition-all flex items-center gap-1 active:scale-95 ${
                  selectedLofiSound === "cafe"
                    ? "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400"
                    : "bg-slate-50 dark:bg-slate-900 border-slate-200/50 dark:border-slate-800 text-slate-500 hover:text-slate-700"
                }`}
              >
                <Volume2 className="w-3 h-3" /> Café
              </button>
            </div>
          </div>

          {/* Radial Countdown Clock */}
          <div className="flex flex-col items-center shrink-0">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="56" cy="56" r="48" strokeWidth="4" stroke="currentColor" fill="transparent" className="text-slate-100 dark:text-slate-900" />
                <circle cx="56" cy="56" r="48" strokeWidth="4" stroke="currentColor" fill="transparent"
                  className="text-blue-500 transition-all duration-300"
                  strokeDasharray={2 * Math.PI * 48}
                  strokeDashoffset={2 * Math.PI * 48 * (1 - pomodoroTime / (pomodoroMode === "focus" ? 1500 : 300))}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center font-display leading-none">
                <span className="text-2xl font-bold text-slate-900 dark:text-white font-mono tracking-tight">{formatPomodoroTime(pomodoroTime)}</span>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1 block">{pomodoroMode}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 mt-4">
              <button
                onClick={(e) => {
                  triggerHaptic("medium", e);
                  setPomodoroActive(!pomodoroActive);
                }}
                className="w-7 h-7 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer transition-colors shadow-sm"
                title={pomodoroActive ? "Pause" : "Play"}
              >
                {pomodoroActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              </button>
              <button
                onClick={(e) => {
                  triggerHaptic("warning", e);
                  setPomodoroActive(false);
                  setPomodoroTime(pomodoroMode === "focus" ? 1500 : 300);
                }}
                className="w-7 h-7 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 rounded-lg cursor-pointer transition-colors"
                title="Reset timer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* B. Cram Strategy planner (Study Hub) */}
        <div className="bg-white/80 dark:bg-slate-950/60 backdrop-blur-3xl border border-slate-200/50 dark:border-white/[0.04] rounded-3xl p-5 md:p-6 shadow-xl space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 dark:border-white/[0.04] pb-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <ListTodo className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight leading-none">Study Console</h3>
                  <button 
                    onClick={() => setShowCramInfo(!showCramInfo)}
                    className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block mt-1">Syllabus checklist & study notepad</span>
              </div>
            </div>

            <select
              value={plannerActiveSubjectCode}
              onChange={(e) => setPlannerActiveSubjectCode(e.target.value)}
              className="bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-xl px-2.5 py-2 text-xs font-bold text-slate-900 dark:text-white cursor-pointer max-w-[200px] truncate"
            >
              {activeSemesterSubjects.map(sub => (
                <option key={sub.code} value={sub.code}>{sub.name}</option>
              ))}
            </select>
          </div>

          <AnimatePresence>
            {showCramInfo && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden bg-slate-50 dark:bg-slate-900/40 p-3.5 rounded-xl text-xs text-slate-500 dark:text-slate-400 leading-normal border border-slate-200/50 dark:border-slate-800 font-sans"
              >
                Study Console maps your syllabus checkmarks to generate a personalized cram sequence. Write your summary points inside the notepad and download them as reference text cards.
              </motion.div>
            )}
          </AnimatePresence>

          {/* Module checklists */}
          <div className="space-y-2.5">
            <span className="text-[9px] font-bold text-slate-450 uppercase tracking-widest block">Syllabus Milestones Studied</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {Array.from({ length: moduleCount }).map((_, idx) => {
                const isChecked = moduleToggles[idx];
                const isHighlighted = idx === currentModuleIdx;
                
                let boxClass = isChecked 
                  ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-600 dark:text-emerald-450" 
                  : isHighlighted 
                    ? "bg-blue-500/[0.03] border-blue-500/25 text-blue-600 dark:text-blue-400" 
                    : "bg-slate-50/50 dark:bg-slate-900/20 border-slate-200/40 dark:border-slate-800 text-slate-500";

                return (
                  <div
                    key={idx}
                    onClick={() => toggleModule(idx)}
                    className={`p-3 rounded-2xl border text-center cursor-pointer transition-all flex flex-col justify-between items-center gap-1 select-none hover:scale-[1.02] active:scale-95 ${boxClass}`}
                  >
                    <span className="text-[9px] font-bold uppercase tracking-wider block">Module {idx + 1}</span>
                    <span className="text-[8px] opacity-70 block">Weightage: 25%</span>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-2 ${
                      isChecked ? "bg-emerald-500 text-white border-transparent" : "border-slate-300 dark:border-slate-700"
                    }`}>
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cram hours remaining */}
          <div className="pt-2 space-y-3">
            <div className="flex justify-between items-center text-xs font-bold text-slate-500 dark:text-slate-400">
              <span>Time window remaining to study:</span>
              <span className="text-blue-600 dark:text-blue-400 font-bold font-mono">{mtCramHours} Hours</span>
            </div>
            <input
              type="range"
              min="2"
              max="72"
              value={mtCramHours}
              onChange={(e) => setMtCramHours(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer h-1 rounded-lg bg-slate-100 dark:bg-slate-800"
            />

            {/* AI Actionable recommendation */}
            <div className="p-3.5 rounded-2xl bg-blue-500/5 dark:bg-blue-500/[0.01] border border-blue-500/10 text-[10px] font-medium leading-relaxed text-slate-550 dark:text-slate-400 font-sans">
              <strong className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider block mb-1">Study Advice:</strong>
              {advice}
            </div>
            </div>

        </div>

      </div>

      {/* ── COLUMN 2: EXAM UTILITIES (SLOTS) ── */}
      <div className="lg:col-span-4 bg-white/80 dark:bg-slate-950/60 backdrop-blur-3xl border border-slate-200/50 dark:border-white/[0.04] rounded-3xl p-5 md:p-6 shadow-xl flex flex-col justify-between space-y-4">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.04] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-450 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight leading-none">Exam Utilities</h3>
                  <button 
                    onClick={() => setShowUtilitiesInfo(!showUtilitiesInfo)}
                    className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {showUtilitiesInfo && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-xl text-[10px] text-slate-500 dark:text-slate-400 leading-normal border border-slate-200/50 dark:border-slate-800 font-sans"
              >
                Log exam schedules and slot designations. The Mapper dynamically connects course listings to syllabus timetables. Assess revaluation risks or calculate project assessment divisions.
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sub-tab pills */}
          <div className="flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/60 p-1 rounded-xl border border-slate-200 dark:border-slate-800/80 w-full shrink-0">
            {[
              { id: "checklist", label: "Hall Checklist" },
              { id: "slots", label: "Exam Schedule" }
            ].map(sub => (
              <button
                key={sub.id}
                onClick={() => {
                  triggerHaptic("light");
                  setUtilityConsoleTab(sub.id as any);
                }}
                className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
                  utilityConsoleTab === sub.id
                    ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200/30 dark:border-slate-750/30"
                    : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>

          {/* checklist */}
          {utilityConsoleTab === "checklist" && (
            <div className="space-y-3 animate-fade-in">
              <span className="text-[9px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase block pb-1 border-b border-slate-100 dark:border-white/[0.04]">Exam Hall Compliance</span>
              <div className="grid grid-cols-1 gap-2 pt-1 max-h-[260px] overflow-y-auto pr-1">
                {mtHallChecklist.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200/40 dark:border-white/[0.02] text-xs font-semibold text-slate-750 dark:text-slate-350"
                  >
                    <input
                      type="checkbox"
                      defaultChecked
                      className="accent-blue-500 h-4 w-4 rounded-xl cursor-pointer"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* slots */}
          {utilityConsoleTab === "slots" && (
            <div className="space-y-4 animate-fade-in text-xs font-sans">
              <span className="text-[9px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase block pb-1 border-b border-slate-100 dark:border-white/[0.04]">Slots & Exam Dates</span>
              
              {/* Configure list */}
              <div className="space-y-2.5 max-h-[200px] overflow-y-auto pr-1 scrollbar-thin">
                {activeSemesterSubjects.map((sub, idx) => {
                  const slotStr = SLOTS[idx % SLOTS.length];
                  const currentData = examDates[sub.code] || { date: "", time: "" };
                  return (
                    <div 
                      key={sub.code}
                      className="p-3 rounded-2xl bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200/40 dark:border-white/[0.02] space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="min-w-0 flex-1 pr-2">
                          <span className="text-xs font-bold text-slate-900 dark:text-slate-50 block truncate leading-tight">{sub.name}</span>
                          <span className="text-[9px] font-semibold text-slate-400 dark:text-slate-500 font-mono mt-1 block leading-none">{sub.code}</span>
                        </div>
                        <span className="px-1.5 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/15 rounded text-[8px] font-black uppercase shrink-0 font-mono">
                          {slotStr}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div className="space-y-1">
                          <span className="text-[7.5px] font-bold text-slate-400 uppercase tracking-widest block leading-none">Exam Date</span>
                          <input 
                            type="date"
                            value={currentData.date}
                            onChange={(e) => handleUpdateExamDate(sub.code, e.target.value, currentData.time)}
                            className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-2 py-1 text-[10px] font-bold text-slate-850 dark:text-slate-350 focus:outline-none focus:ring-1 focus:ring-blue-500/20 cursor-pointer font-mono"
                          />
                        </div>
                        <div className="space-y-1">
                          <span className="text-[7.5px] font-bold text-slate-400 uppercase tracking-widest block leading-none">Exam Time</span>
                          <input 
                            type="time"
                            value={currentData.time}
                            onChange={(e) => handleUpdateExamDate(sub.code, currentData.date, e.target.value)}
                            className="w-full bg-white dark:bg-slate-955 border border-slate-200 dark:border-slate-800 rounded-lg px-2 py-1 text-[10px] font-bold text-slate-850 dark:text-slate-350 focus:outline-none focus:ring-1 focus:ring-blue-500/20 cursor-pointer font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Chronological timetable */}
              {(() => {
                if (datedExams.length === 0) return null;

                return (
                  <div className="space-y-2 pt-2.5 border-t border-slate-100 dark:border-white/[0.04]">
                    <span className="text-[8px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Chronological Timeline</span>
                    <div className="space-y-1.5">
                      {datedExams.map(({ sub, slotStr, date, time }) => {
                        const countdown = getCountdown(date!, time || "");
                        const dateFormatted = new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        });
                        const timeFormatted = time ? new Date(`2000-01-01T${time}`).toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "2-digit",
                          hour12: true
                        }) : "9:30 AM";

                        return (
                          <div 
                            key={sub.code}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200/40 dark:border-slate-800 text-[10px] font-medium leading-none"
                          >
                            <div className="min-w-0 flex-1 pr-2">
                              <span className="font-bold text-slate-800 dark:text-slate-150 truncate block leading-normal">{sub.name}</span>
                              <span className="text-[8px] text-slate-400 dark:text-slate-500 font-mono mt-1 block">
                                {dateFormatted} &bull; {timeFormatted} ({slotStr})
                              </span>
                            </div>
                            <span className={`px-2 py-0.5 rounded text-[8px] font-black shrink-0 font-sans ${countdown.theme}`}>
                              {countdown.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
