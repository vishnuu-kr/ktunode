"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { 
  Calculator, Sparkles, GraduationCap, X,
  Info, AlertTriangle, CheckCircle2
} from "lucide-react";
import { triggerHaptic } from "@/lib/haptic";
import ktu2024Scheme from "@/data/ktu_2024_scheme.json";

const GpaCalculator = dynamic(() => import("@/components/GpaCalculator"), {
  loading: () => (
    <div className="animate-pulse h-48 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800 rounded-[20px] flex items-center justify-center text-xs text-slate-450 dark:text-slate-500 font-medium font-sans">
      Loading GPA calculator module...
    </div>
  ),
  ssr: false
});

interface Subject {
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

interface GradeGpaCalculatorProps {
  branch: string;
  sem: number;
  attendanceSubjects: AttendanceSubject[];
  subjects: Subject[];
  triggerNotification: (msg: string) => void;
}

const branchNameMapping: Record<string, string> = {
  "cs": "Computer Science and Engineering",
  "ce": "Civil Engineering",
  "ec": "Electronics & Communication Engineering",
  "ee": "Electrical and Electronics Engineering",
  "me": "Mechanical Engineering"
};

const getCreditsForSubject = (subjCode: string, subjName: string, branch: string, sem: number): number => {
  const fullBranchName = branchNameMapping[branch] || "Computer Science and Engineering";
  const semData = (ktu2024Scheme as any)[fullBranchName]?.find((s: any) => s.semester === sem);
  if (semData && semData.subjects) {
    const matched = semData.subjects.find((s: any) => 
      s.name.toLowerCase() === subjName.toLowerCase() ||
      subjName.toLowerCase().includes(s.name.toLowerCase()) ||
      s.name.toLowerCase().includes(subjName.toLowerCase())
    );
    if (matched) return matched.credits;
  }
  
  const n = subjName.toLowerCase();
  if (n.includes("lab") || n.includes("workshop") || n.includes("project") || n.includes("seminar") || n.includes("practical")) {
    return 2;
  }
  if (n.includes("ethics") || n.includes("economics") || n.includes("constitution") || n.includes("life skills")) {
    return 2;
  }
  if (subjCode.startsWith("PE") || subjCode.startsWith("OE")) {
    return 3;
  }
  return 4;
};

const allocateGradesForTargetSgpa = (
  subjectsList: Subject[],
  target: number,
  branch: string,
  sem: number
) => {
  const gradesList = [
    { grade: "O", gp: 10.0 },
    { grade: "A+", gp: 9.0 },
    { grade: "A", gp: 8.0 },
    { grade: "B+", gp: 7.0 },
    { grade: "B", gp: 6.0 },
    { grade: "C", gp: 5.0 },
    { grade: "P", gp: 4.0 }
  ];

  if (subjectsList.length === 0) return [];

  const allocated = subjectsList.map(sub => {
    const cr = getCreditsForSubject(sub.code, sub.name, branch, sem);
    return {
      code: sub.code,
      name: sub.name,
      credits: cr,
      gradeIdx: 5 // C
    };
  });

  const getSgpa = () => {
    let pts = 0;
    let totCr = 0;
    allocated.forEach(item => {
      pts += gradesList[item.gradeIdx].gp * item.credits;
      totCr += item.credits;
    });
    return totCr > 0 ? pts / totCr : 0;
  };

  let iterations = 0;
  while (getSgpa() < target && iterations < 100) {
    let bestIdx = -1;
    let maxCredits = -1;
    for (let i = 0; i < allocated.length; i++) {
      if (allocated[i].gradeIdx > 0 && allocated[i].credits > maxCredits) {
        maxCredits = allocated[i].credits;
        bestIdx = i;
      }
    }

    if (bestIdx === -1) break;
    allocated[bestIdx].gradeIdx--;
    iterations++;
  }

  iterations = 0;
  while (getSgpa() > target + 0.1 && iterations < 100) {
    let bestIdx = -1;
    let minCredits = 999;
    for (let i = 0; i < allocated.length; i++) {
      if (allocated[i].gradeIdx < gradesList.length - 1 && allocated[i].credits < minCredits) {
        minCredits = allocated[i].credits;
        bestIdx = i;
      }
    }

    if (bestIdx === -1) break;
    const prevIdx = allocated[bestIdx].gradeIdx;
    allocated[bestIdx].gradeIdx++;
    if (getSgpa() < target) {
      allocated[bestIdx].gradeIdx = prevIdx;
      break;
    }
    iterations++;
  }

  return allocated.map(item => ({
    code: item.code,
    name: item.name,
    credits: item.credits,
    grade: gradesList[item.gradeIdx].grade,
    points: gradesList[item.gradeIdx].gp
  }));
};

export default function GradeGpaCalculator({
  branch,
  sem,
  attendanceSubjects,
  subjects,
  triggerNotification: _triggerNotification
}: GradeGpaCalculatorProps) {
  // Converter States
  const [converterGpa, setConverterGpa] = useState("8.50");
  const [converterPercentage, setConverterPercentage] = useState("80.0");

  // Drawer Toggles
  const [isCiePlannerOpen, setIsCiePlannerOpen] = useState(false);
  const [isSgpaAllocatorOpen, setIsSgpaAllocatorOpen] = useState(false);

  // Target Allocator Target state
  const [targetSgpa, setTargetSgpa] = useState(8.5);

  // CIE target planner state
  const [plannerCieScore, setPlannerCieScore] = useState(38);
  const [plannerActiveSubject, setPlannerActiveSubject] = useState({ code: "PCCST403", name: "Operating Systems" });

  // Mobile info drawers
  const [showConverterInfo, setShowConverterInfo] = useState(false);

  // Synchronize dynamic defaults for active subject planner
  const availablePlannerSubjects = useMemo(() => {
    const dynamicDefaults = subjects;
    return attendanceSubjects.length === 0
      ? (dynamicDefaults.length > 0
          ? dynamicDefaults.map(s => ({ code: s.code, name: s.name }))
          : [{ code: "PCCST403", name: "Operating Systems" }])
      : attendanceSubjects.map(s => ({ code: s.code, name: s.name }));
  }, [attendanceSubjects, subjects]);

  // Keep active subject synchronized
  useEffect(() => {
    if (availablePlannerSubjects.length > 0) {
      const match = availablePlannerSubjects.find(s => s.code === plannerActiveSubject.code);
      if (!match) {
        setPlannerActiveSubject(availablePlannerSubjects[0]);
      }
    }
  }, [availablePlannerSubjects, plannerActiveSubject.code]);

  // Convert SGPA to Percentage
  const handleGpaConvert = (val: string) => {
    setConverterGpa(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num >= 0 && num <= 10) {
      // KTU formula: Percentage = (CGPA * 10) - 3.75
      const pct = (num * 10) - 3.75;
      setConverterPercentage(Math.max(0, Math.min(100, pct)).toFixed(1));
    } else {
      setConverterPercentage("");
    }
  };

  // Convert Percentage to SGPA
  const handlePercentageConvert = (val: string) => {
    setConverterPercentage(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num >= 0 && num <= 100) {
      // Inverse: CGPA = (Percentage + 3.75) / 10
      const gpa = (num + 3.75) / 10;
      setConverterGpa(Math.max(0, Math.min(10, gpa)).toFixed(2));
    } else {
      setConverterGpa("");
    }
  };

  // Target grades allocation output
  const allocatedGradesOutput = useMemo(() => {
    // Map subjects core
    const formattedSubjects = subjects.length > 0 
      ? subjects 
      : availablePlannerSubjects.map(s => ({ code: s.code, name: s.name, credits: 3 }));
    
    return allocateGradesForTargetSgpa(formattedSubjects, targetSgpa, branch, sem);
  }, [subjects, targetSgpa, branch, sem, availablePlannerSubjects]);

  const totalAllocCredits = allocatedGradesOutput.reduce((acc, c) => acc + c.credits, 0);
  const totalAllocPoints = allocatedGradesOutput.reduce((acc, c) => acc + c.points * c.credits, 0);
  const currentAllocSgpa = totalAllocCredits > 0 ? (totalAllocPoints / totalAllocCredits) : 0;

  // Visual Drawer renderer
  const renderSlideDrawer = (isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 cursor-pointer"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-slate-950 z-50 p-6 shadow-2xl border-l border-slate-200 dark:border-white/[0.04] overflow-y-auto font-display flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.04] pb-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight">{title}</h3>
                  <button
                    onClick={onClose}
                    className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 cursor-pointer"
                  >
                    <X className="w-4.5 h-4.5" />
                  </button>
                </div>
                {children}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="w-full bg-white/80 dark:bg-slate-950/60 backdrop-blur-3xl border border-slate-200/50 dark:border-white/[0.04] rounded-3xl p-5 md:p-6 shadow-xl space-y-6">
      
      {/* Header section with drawers actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 dark:border-white/[0.04] pb-4 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight leading-none">GPA & Grades</h3>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block mt-1">S{sem} Preset Semester Grade sheets</span>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 w-full sm:w-auto">
          <button
            onClick={() => {
              triggerHaptic("medium");
              setIsCiePlannerOpen(true);
            }}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl bg-blue-500/10 hover:bg-blue-500/25 border border-blue-500/15 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" /> Plan CIE & ESE
          </button>
          <button
            onClick={() => {
              triggerHaptic("medium");
              setIsSgpaAllocatorOpen(true);
            }}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl bg-amber-500/10 hover:bg-amber-500/25 border border-amber-500/15 text-amber-600 dark:text-amber-450 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95"
          >
            <GraduationCap className="w-3.5 h-3.5" /> SGPA Allocator
          </button>
        </div>
      </div>

      {/* Dynamic GPA Presets Content */}
      <div className="w-full">
        <GpaCalculator />
      </div>

      {/* Score converter footer strip */}
      <div className="pt-4 border-t border-slate-100 dark:border-white/[0.04] flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-1">
          <span>SGPA / CGPA Converter</span>
          <button
            onClick={() => setShowConverterInfo(!showConverterInfo)}
            className="p-0.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 cursor-pointer"
            aria-label="Converter details"
          >
            <Info className="w-3 h-3" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="number"
            min="0"
            max="10"
            step="0.01"
            placeholder="8.50"
            value={converterGpa}
            onChange={(e) => handleGpaConvert(e.target.value)}
            className="w-16 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 text-center font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500/30 font-mono"
          />
          <span>⇌</span>
          <input
            type="number"
            min="0"
            max="100"
            step="0.1"
            placeholder="80.0"
            value={converterPercentage}
            onChange={(e) => handlePercentageConvert(e.target.value)}
            className="w-16 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 text-center font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500/30 font-mono"
          />
          <span>Percentage (%)</span>
        </div>

        {/* Converter Help text */}
        <AnimatePresence>
          {showConverterInfo && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="w-full bg-slate-50 dark:bg-slate-900/60 rounded-xl p-3 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 font-sans mt-2"
            >
              KTU B.Tech 2024 Scheme CGPA to Percentage standard conversion equation:
              <br />
              <strong className="text-slate-700 dark:text-slate-350 font-mono block mt-1 font-bold">Percentage (%) = (CGPA &times; 10) - 3.75</strong>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── CIE PLANNER DRAWDER ── */}
      {renderSlideDrawer(
        isCiePlannerOpen,
        () => setIsCiePlannerOpen(false),
        "CIE & ESE Target Planner",
        (
          <div className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Target Subject</label>
              <select
                value={plannerActiveSubject.code}
                onChange={(e) => {
                  const selected = availablePlannerSubjects.find(s => s.code === e.target.value);
                  if (selected) setPlannerActiveSubject(selected);
                }}
                className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500/30 cursor-pointer"
              >
                {availablePlannerSubjects.map(sub => (
                  <option key={sub.code} value={sub.code}>{sub.name || sub.code}</option>
                ))}
              </select>
            </div>

            {/* CIE Slider */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-slate-500">Continuous Internal (CIE) score</span>
                <span className="text-blue-500 text-sm font-black font-mono tabular-nums">{plannerCieScore} / 50</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                value={plannerCieScore}
                onChange={(e) => setPlannerCieScore(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer h-1 rounded-lg bg-slate-100 dark:bg-slate-800"
              />
              <div className="flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                <span>Min: 0</span>
                <span className="text-blue-500">CIE Goal: 35+</span>
                <span>Max: 50</span>
              </div>
            </div>

            {/* Target table */}
            <div className="space-y-2.5">
              <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">Required ESE Exam Targets</span>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                {[
                  { grade: "O", pct: 90, label: "O (90+)" },
                  { grade: "A+", pct: 80, label: "A+ (80+)" },
                  { grade: "A", pct: 70, label: "A (70+)" },
                  { grade: "B+", pct: 60, label: "B+ (60+)" },
                  { grade: "B", pct: 50, label: "B (50+)" },
                  { grade: "C", pct: 45, label: "C (45+)" },
                  { grade: "P", pct: 40, label: "P (40+)" }
                ].map((tg) => {
                  let neededEse = 1.5 * tg.pct - plannerCieScore;
                  let impossible = false;
                  
                  if (neededEse > 100) {
                    impossible = true;
                  } else {
                    neededEse = Math.max(40, Math.ceil(neededEse)); // min 40 ESE to pass
                  }

                  let badgeColor = "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/50";
                  if (!impossible) {
                    if (tg.grade === "O") badgeColor = "bg-emerald-500/10 text-emerald-600 dark:text-emerald-450 border border-emerald-500/15";
                    else if (tg.grade.startsWith("A")) badgeColor = "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/15";
                    else if (tg.grade.startsWith("B")) badgeColor = "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/15";
                  }

                  return (
                    <div key={tg.grade} className="p-2.5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200/40 dark:border-white/[0.02] flex items-center justify-between text-left">
                      <div className="truncate pr-1.5 font-bold">
                        <span className="text-[8px] font-bold text-slate-400 uppercase block tracking-wider leading-none">{tg.label}</span>
                        <span className="font-extrabold text-xs text-slate-900 dark:text-slate-200 block mt-1.5 leading-none">{tg.grade}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-lg text-[9px] font-black uppercase font-mono tracking-wider shrink-0 border ${badgeColor}`}>
                        {impossible ? "Impossible" : `${Math.ceil(neededEse)} / 100`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pass fail sandbox visualizer */}
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 space-y-3.5">
              <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block leading-none">Pass/Fail Sandbox Visual Gauge</span>
              
              {plannerCieScore < 20 ? (
                <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-center space-y-1.5">
                  <span className="text-xs font-bold text-rose-500 uppercase tracking-wider block flex items-center justify-center gap-1 leading-none">
                    <AlertTriangle className="w-4 h-4" /> Ineligible to Pass
                  </span>
                  <p className="text-[10px] text-rose-600 dark:text-rose-450 leading-relaxed font-semibold">
                    CIE score ({plannerCieScore}/50) is below the 40% eligibility threshold (20/50). You are ineligible to register/write the ESE.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> CIE: {plannerCieScore}/50 (Eligible)</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400 font-mono">Needed ESE: 40 / 100</span>
                  </div>
                  
                  {/* Gauge */}
                  <div className="relative h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex border border-slate-200 dark:border-slate-700">
                    <div className="h-full bg-gradient-to-r from-rose-500 to-amber-500" style={{ width: "40%" }} />
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500" style={{ width: "60%" }} />
                    <div className="absolute top-0 bottom-0 w-0.5 bg-white" style={{ left: "40%" }} />
                  </div>
                  
                  <div className="flex justify-between text-[8px] font-bold uppercase tracking-wider text-slate-400 leading-none">
                    <span>0 ESE</span>
                    <span className="text-rose-500">Fail zone (0-39)</span>
                    <span className="text-emerald-500">Pass (40+)</span>
                    <span>100 ESE</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      )}

      {/* ── SGPA TARGET ALLOCATOR DRAWER ── */}
      {renderSlideDrawer(
        isSgpaAllocatorOpen,
        () => setIsSgpaAllocatorOpen(false),
        "SGPA Goal Estimator",
        (
          <div className="space-y-5">
            {/* Slider */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 dark:text-slate-300">
                <span>Target SGPA Goal</span>
                <span className="text-blue-600 dark:text-blue-400 text-sm font-black font-mono tabular-nums">{targetSgpa.toFixed(2)} / 10.00</span>
              </div>
              <input
                type="range"
                min="5.5"
                max="10.0"
                step="0.1"
                value={targetSgpa}
                onChange={(e) => setTargetSgpa(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer h-1 rounded-lg bg-slate-100 dark:bg-slate-800"
              />
              <div className="flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                <span>Min (5.5)</span>
                <span className="text-blue-500/80">Estimated SGPA: {currentAllocSgpa.toFixed(2)}</span>
                <span>Max (10.0)</span>
              </div>
            </div>

            {/* Strategy Grid */}
            <div className="space-y-2">
              <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">Grade Allocation Strategy</span>
              <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1 scrollbar-thin">
                {allocatedGradesOutput.map((item, idx) => {
                  let badgeColor = "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 border border-slate-250/20";
                  if (item.grade === "S") badgeColor = "bg-emerald-500/10 text-emerald-600 dark:text-emerald-450 border border-emerald-500/15";
                  else if (item.grade.startsWith("A")) badgeColor = "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/15";
                  else if (item.grade.startsWith("B")) badgeColor = "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/15";

                  return (
                    <div key={idx} className="p-3 rounded-2xl bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200/40 dark:border-white/[0.02] flex items-center justify-between text-xs hover:border-slate-350 transition-all duration-150">
                      <div className="truncate pr-2 flex-1 min-w-0">
                        <span className="font-bold text-slate-800 dark:text-slate-100 truncate block">{item.name}</span>
                        <span className="text-[9px] text-slate-400 font-mono block mt-1">{item.code} • {item.credits} Credits</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-bold text-slate-400 font-mono">{item.points.toFixed(1)} GP</span>
                        <span className={`px-2 py-0.5 rounded-lg text-[10px] font-black uppercase font-mono tracking-wider ${badgeColor}`}>
                          {item.grade}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Note box */}
            {allocatedGradesOutput.length > 0 && (
              currentAllocSgpa < targetSgpa - 0.05 ? (
                <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-[10px] font-semibold text-rose-600 dark:text-rose-400 leading-normal text-center font-sans">
                  <strong>Impossible Goal:</strong> SGPA of {targetSgpa.toFixed(2)} is mathematically unreachable with current course credits (max achievable: {currentAllocSgpa.toFixed(2)}).
                </div>
              ) : (
                <div className="p-3.5 rounded-2xl bg-blue-500/5 border border-blue-500/10 text-[10px] font-semibold text-slate-500 dark:text-slate-400 leading-normal text-center font-sans">
                  To achieve a <strong className="text-blue-600 dark:text-blue-450 font-bold">{targetSgpa.toFixed(1)} SGPA</strong>, you need this specific combination of target grades representing <strong className="text-slate-700 dark:text-slate-300 font-bold">{totalAllocCredits} total credits</strong>.
                </div>
              )
            )}
          </div>
        )
      )}

    </div>
  );
}
