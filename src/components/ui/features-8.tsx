"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen, FileText, GraduationCap,
  Check, ShieldCheck, ArrowRight, HelpCircle,
  Clock, RotateCcw, Play, Pause
} from "lucide-react";

// Branches configuration
const branchesData = [
  { label: "CS", pct: 98, name: "Computer Science", activeColor: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800" },
  { label: "EC", pct: 96, name: "Electronics & Comm.", activeColor: "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/40 border-violet-200 dark:border-violet-800" },
  { label: "ME", pct: 95, name: "Mechanical Eng.", activeColor: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800" },
];

const mockNotes = {
  DBMS: {
    title: "Database Systems — Module 1",
    content: "A relational database consists of a collection of tables, each assigned a unique name. Tables are composed of tuples (rows) and attributes (columns).",
    keywords: ["relational database", "tables", "tuples", "attributes"]
  },
  OS: {
    title: "Operating Systems — Module 2",
    content: "A process is a program in execution. The scheduler manages process states (Ready, Running, Blocked) to optimize CPU utilization.",
    keywords: ["process", "scheduler", "CPU utilization"]
  },
  Math: {
    title: "Linear Algebra — Module 1",
    content: "Eigenvalues and eigenvectors represent scaling transformations. Ax = λx, where A is the transformation matrix.",
    keywords: ["Eigenvalues", "eigenvectors", "scaling transformations"]
  }
};

const modelPapersData = {
  "Sem 1": [
    "Linear Algebra & Calculus",
    "Engineering Chemistry",
    "Programming in C"
  ],
  "Sem 2": [
    "Vector Calculus & Diff Eq",
    "Engineering Physics",
    "Basic Electrical Eng."
  ],
  "Sem 3": [
    "Discrete Math Structures",
    "Data Structures",
    "Digital System Design"
  ]
};

type NoteKey = keyof typeof mockNotes;
type SemKey = keyof typeof modelPapersData;

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  // 1. Branch Dial State
  const [selectedBranchIdx, setSelectedBranchIdx] = useState(0);
  const currentBranch = branchesData[selectedBranchIdx];

  // 2. Interactive Note State
  const [activeNoteTag, setActiveNoteTag] = useState<NoteKey>("DBMS");
  const noteData = mockNotes[activeNoteTag];

  // 3. Interactive Pomodoro Study Timer State
  const [timerSeconds, setTimerSeconds] = useState(1500); // 25:00
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev <= 1) {
            setTimerRunning(false);
            return 1500; // Reset
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleTimerReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTimerRunning(false);
    setTimerSeconds(1500);
  };

  // 4. Interactive Syllabus Tracker State
  const [modules, setModules] = useState([
    { name: "Module 1 — Relational Model", done: true },
    { name: "Module 2 — SQL Queries", done: true },
    { name: "Module 3 — Normalization", done: false },
    { name: "Module 4 — Indexing & Hashing", done: false },
  ]);

  const toggleModule = (idx: number) => {
    setModules(prev => prev.map((m, i) => i === idx ? { ...m, done: !m.done } : m));
  };

  const completedCount = modules.filter(m => m.done).length;
  const isFullyComplete = completedCount === modules.length;

  // 5. Model Question Papers State
  const [selectedSem, setSelectedSem] = useState<SemKey>("Sem 1");
  const currentPapers = modelPapersData[selectedSem];

  // 6. Zero-Friction Launch State
  const [launchStep, setLaunchStep] = useState<"idle" | "launching" | "ready">("idle");
  const handleSimulatedLaunch = () => {
    if (launchStep !== "idle") return;
    setLaunchStep("launching");
    setTimeout(() => {
      setLaunchStep("ready");
    }, 1200);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 border-t border-slate-100 dark:border-slate-800"
    >
      {/* Premium Ambient Background Blur */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-100/10 dark:bg-blue-900/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-sky-100/10 dark:bg-sky-900/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-5 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-100/50 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wide uppercase select-none">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-slate-100 mb-5 leading-[1.06]">
            Everything you need
            <br />
            <span className="gradient-text-animated">to ace KTU.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-medium">
            Built specifically for the 2024 KTU scheme — no fluff, just the
            resources that actually matter for your exams.
          </p>
        </motion.div>

        {/* Bento grid - Symmetric 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* ── 1. Coverage dial ── */}
          <motion.div
            className="min-h-[360px] md:h-[400px] p-6 md:p-8 flex flex-col justify-between rounded-3xl border border-slate-200/50 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.015)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)] cursor-default transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, boxShadow: "0 24px 48px rgba(37,99,235,0.05)" }}
          >
            <div>
              <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">Exam Coverage</div>
              
              {/* Branch Selector Tabs */}
              <div className="flex gap-1.5 p-1 bg-slate-100/70 dark:bg-slate-800/70 rounded-2xl border border-slate-200/30 dark:border-slate-800/30 mb-4 select-none">
                {branchesData.map((b, idx) => (
                  <button
                    key={b.label}
                    onClick={() => setSelectedBranchIdx(idx)}
                    className={`flex-1 py-2.5 text-xs font-extrabold rounded-xl transition-all duration-300 ${
                      selectedBranchIdx === idx
                        ? `${b.activeColor} border shadow-sm`
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-800 hover:dark:text-slate-200 hover:bg-slate-200/40 hover:dark:bg-slate-800/40 border border-transparent"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>

              {/* Dial Gauge SVG */}
              <div className="relative flex flex-col items-center justify-center my-2">
                <svg className="w-36 h-36 transform -rotate-90">
                  <circle cx="72" cy="72" r="56" className="stroke-slate-100 dark:stroke-slate-800" strokeWidth="7" fill="transparent" />
                  <circle cx="72" cy="72" r="56" className="stroke-blue-500 transition-all duration-700 ease-out" strokeWidth="7" fill="transparent" strokeDasharray="351.86" strokeDashoffset={351.86 - (351.86 * currentBranch.pct) / 100} strokeLinecap="round" />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-slate-900 dark:text-slate-50 leading-none">{currentBranch.pct}%</span>
                  <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">Coverage</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-slate-800 dark:text-slate-100 mb-1">{currentBranch.name}</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
                Meticulously structured chapter notes and syllabus checkpoints matching the latest 2024 regulations.
              </p>
            </div>
          </motion.div>

          {/* ── 2. Chapter-wise Notes ── */}
          <motion.div
            className="min-h-[360px] md:h-[400px] p-6 md:p-8 flex flex-col justify-between rounded-3xl border border-slate-200/50 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.015)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)] cursor-default transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, boxShadow: "0 24px 48px rgba(37,99,235,0.05)" }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center">
                  <BookOpen className="w-[18px] h-[18px] text-blue-500 dark:text-blue-400" strokeWidth={1.8} />
                </div>
                <span className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Live Preview
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-800 dark:text-slate-100 mb-1">Chapter-wise Notes</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Syllabus topics stripped of filler and packed with the diagrams and equations examiners actually grade on.
              </p>

              {/* Tag Switcher widget */}
              <div className="flex gap-1.5 mb-3 select-none">
                {(Object.keys(mockNotes) as NoteKey[]).map(tag => (
                  <button
                    key={tag}
                    onClick={() => setActiveNoteTag(tag)}
                    className={`px-3 py-1 text-xs font-bold rounded-lg border transition-all duration-200 ${
                      activeNoteTag === tag
                        ? "bg-blue-600 dark:bg-blue-500 text-white border-blue-600 dark:border-blue-500"
                        : "bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/80"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Mock note preview card (Fixed Height to prevent Layout Shifts) */}
              <div className="p-3.5 bg-slate-50/70 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl h-[105px] overflow-y-auto">
                <div className="text-[10px] font-bold text-blue-650 dark:text-blue-400 uppercase tracking-wider mb-1">
                  {noteData.title}
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-350 leading-relaxed">
                  {noteData.content.split(" ").map((word, i) => {
                    const cleanWord = word.replace(/[.,()]/g, "");
                    const isKey = noteData.keywords.some(k => k.toLowerCase().includes(cleanWord.toLowerCase()));
                    return (
                      <span key={i} className={isKey ? "text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/60 px-0.5 rounded" : ""}>
                        {word}{" "}
                      </span>
                    );
                  })}
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── 3. Interactive Pomodoro Study Timer (Replaces Flashcards) ── */}
          <motion.div
            className="min-h-[360px] md:h-[400px] p-6 md:p-8 flex flex-col justify-between rounded-3xl border border-slate-200/50 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.015)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)] cursor-default transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, boxShadow: "0 24px 48px rgba(37,99,235,0.05)" }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/50 flex items-center justify-center">
                  <Clock className="w-[18px] h-[18px] text-amber-500 dark:text-amber-400" strokeWidth={1.8} />
                </div>
                <span className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                  Study Tool
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-800 dark:text-slate-100 mb-1">Focus Study Timer</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Engage learning sessions with the integrated Pomodoro clock to maximize revision focus and track milestones.
              </p>

              {/* Pomodoro Timer display */}
              <div className="flex flex-col items-center justify-center p-4 bg-amber-50/20 dark:bg-amber-950/10 border border-amber-100/40 dark:border-amber-900/30 rounded-2xl h-[105px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full bg-amber-500 ${timerRunning ? "animate-ping" : ""}`} />
                  <span className="text-2xl font-mono font-black text-slate-800 dark:text-slate-100 tracking-tight">
                    {formatTime(timerSeconds)}
                  </span>
                </div>
                
                <div className="flex gap-2 w-full max-w-[180px] select-none">
                  <button
                    onClick={() => setTimerRunning(!timerRunning)}
                    className="flex-1 py-1.5 flex items-center justify-center gap-1.5 text-[10px] font-bold bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors cursor-pointer"
                  >
                    {timerRunning ? (
                      <>
                        <Pause className="w-3 h-3 fill-current" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-current" />
                        Start
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleTimerReset}
                    className="p-1.5 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg transition-colors cursor-pointer"
                    title="Reset timer"
                    aria-label="Reset timer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                Sticky Widget — syncs in dashboard
              </p>
            </div>
          </motion.div>

          {/* ── 4. Syllabus Tracker ── */}
          <motion.div
            className="min-h-[360px] md:h-[400px] p-6 md:p-8 flex flex-col justify-between rounded-3xl border border-slate-200/50 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.015)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)] cursor-default transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, boxShadow: "0 24px 48px rgba(37,99,235,0.05)" }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 flex items-center justify-center">
                  <GraduationCap className="w-[18px] h-[18px] text-emerald-500 dark:text-emerald-450" strokeWidth={1.8} />
                </div>
                
                {/* Dynamic Status Pill */}
                <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider transition-colors duration-300 ${
                  isFullyComplete ? "bg-emerald-500 text-white shadow-sm" : "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400"
                }`}>
                  {isFullyComplete ? "Ready! 🎉" : `${completedCount}/4 Done`}
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-800 dark:text-slate-100 mb-1">Live Progress Tracker</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Mark modules complete as you learn. Visually audit exactly what topics remain before your exam.
              </p>

              {/* Interactive Modules Checklist */}
              <div className="space-y-1.5 select-none">
                {modules.map((m, idx) => (
                  <div
                    key={idx}
                    onClick={() => toggleModule(idx)}
                    className={`flex items-center gap-3 p-2 border rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all ${
                      m.done
                        ? "border-emerald-100 dark:border-emerald-950 bg-emerald-50/10 dark:bg-emerald-950/10"
                        : "border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900"
                    }`}
                  >
                    <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border transition-all ${
                      m.done ? "bg-emerald-500 border-emerald-500" : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                    }`}>
                      {m.done && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />}
                    </div>
                    <span className={`text-[11px] font-bold transition-all ${
                      m.done ? "text-slate-400 dark:text-slate-500 line-through font-medium" : "text-slate-700 dark:text-slate-300"
                    }`}>
                      {m.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── 5. Model Question Papers (Previously PYQs) ── */}
          <motion.div
            className="min-h-[360px] md:h-[400px] p-6 md:p-8 flex flex-col justify-between rounded-3xl border border-slate-200/50 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.015)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)] cursor-default transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, boxShadow: "0 24px 48px rgba(37,99,235,0.05)" }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-2xl bg-violet-50 dark:bg-violet-950/30 border border-violet-100 dark:border-violet-900/50 flex items-center justify-center">
                  <FileText className="w-[18px] h-[18px] text-violet-500 dark:text-violet-400" strokeWidth={1.8} />
                </div>
                <span className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 uppercase tracking-wider">
                  2024 Scheme
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-800 dark:text-slate-100 mb-1">Model Question Papers</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Get ready for exams using dedicated, syllabus-matched model question papers tailored for the 2024 scheme.
              </p>

              {/* Semester tab container */}
              <div className="flex gap-1.5 mb-3 select-none">
                {(Object.keys(modelPapersData) as SemKey[]).map((sem) => (
                  <button
                    key={sem}
                    onClick={() => setSelectedSem(sem)}
                    className={`flex-1 py-2 text-[10px] font-bold rounded-lg border transition-all duration-200 cursor-pointer ${
                      selectedSem === sem
                        ? "bg-violet-600 dark:bg-violet-500 text-white border-violet-600 dark:border-violet-500"
                        : "bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/80"
                    }`}
                  >
                    {sem}
                  </button>
                ))}
              </div>

              {/* Papers list card */}
              <div className="p-3 bg-violet-50/20 dark:bg-violet-950/10 border border-violet-100/40 dark:border-violet-900/30 rounded-2xl h-[105px] overflow-y-auto">
                <div className="text-[9px] font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider mb-1.5 flex items-center gap-1 select-none">
                  <HelpCircle className="w-2.5 h-2.5" />
                  Available Model Papers:
                </div>
                <ul className="space-y-1">
                  {currentPapers.map((paper, idx) => (
                    <li key={idx} className="text-[11px] text-slate-700 dark:text-slate-300 font-extrabold flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-violet-500" />
                      {paper}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ── 6. Zero friction launch ── */}
          <motion.div
            className="min-h-[360px] md:h-[400px] p-6 md:p-8 flex flex-col justify-between rounded-3xl border border-slate-200/50 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.015)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)] cursor-default transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, boxShadow: "0 24px 48px rgba(37,99,235,0.05)" }}
          >
            <div>
              <div className="flex items-center gap-2 mb-4 select-none">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[9px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Instant access</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-800 dark:text-slate-100 leading-snug mb-2">
                No Accounts.<br />No payments.<br />Just learn.
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                We believe learning resources should be open and friction-free. Pick your semester and jump straight in.
              </p>
            </div>

            {/* Launch Simulator Sandbox Widget */}
            <div className="mt-auto select-none">
              <div className="p-3 border border-slate-200/60 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50">
                <div className="space-y-1 mb-2 opacity-50">
                  <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded-lg w-3/4 line-through text-[9px] font-bold flex items-center px-2 text-slate-500 dark:text-slate-400">Email Address</div>
                  <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded-lg w-1/2 line-through text-[9px] font-bold flex items-center px-2 text-slate-500 dark:text-slate-400">Choose Password</div>
                </div>

                <button
                  onClick={handleSimulatedLaunch}
                  disabled={launchStep !== "idle"}
                  className={`w-full py-2 text-center text-[10px] font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer ${
                    launchStep === "idle" ? "bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900" :
                    launchStep === "launching" ? "bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-not-allowed" :
                    "bg-emerald-500 text-white shadow-[0_4px_12px_rgba(16,185,129,0.2)]"
                  }`}
                >
                  {launchStep === "idle" && (
                    <>
                      Skip Signup & Launch
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                  {launchStep === "launching" && "Simulating access..."}
                  {launchStep === "ready" && (
                    <>
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Welcome to KTUNode!
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

