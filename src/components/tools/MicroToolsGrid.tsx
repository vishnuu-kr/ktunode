"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Calculator, Calendar, Award, BookOpen, Sparkles, 
  Clock, Activity, Shield, CheckCircle2, AlertTriangle, 
  Check, FileText, Share2, HelpCircle, Code, ShieldAlert,
  GraduationCap, AlertCircle, Plus, Info, RefreshCw,
  Flame, Lock, Timer, ShieldCheck, TrendingUp, Zap, Send,
  CheckSquare, Dices, Map, Globe, Binary, Split, FlaskConical, LayoutGrid
} from "lucide-react";
import { triggerHaptic } from "@/lib/haptic";

interface MicroToolsGridProps {
  branch: string;
  sem: number;
  triggerNotification: (msg: string) => void;
}

export default function MicroToolsGrid({ branch, sem, triggerNotification }: MicroToolsGridProps) {
  // Global search & category filter
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "internals" | "exams" | "credits" | "labs" | "hacks">("all");
  const [expandedTool, setExpandedTool] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- 24 MICRO-TOOLS LOCAL STATES ---
  // Tool 1: Bunk Master
  const [bunkHc, setBunkHc] = useState(40);
  const [bunkHa, setBunkHa] = useState(32);
  
  // Tool 2: Attendance Marks
  const [attPct, setAttPct] = useState(82);

  // Tool 3: Internal Marks Aggregator
  const [aggSeries1, setAggSeries1] = useState(38);
  const [aggSeries2, setAggSeries2] = useState(42);
  const [aggAssg, setAggAssg] = useState(9);
  const [aggAtt, setAggAtt] = useState(4);

  // Tool 4: Series 2 Damage Control
  const [dmgSeries1, setDmgSeries1] = useState(25);
  const [dmgTarget, setDmgTarget] = useState(35);
  const [dmgAssgAtt, setDmgAssgAtt] = useState(12);

  // Tool 5: ESE Target Finder
  const [eseInt, setEseInt] = useState(30);
  const [eseGrade, setEseGrade] = useState("A");

  // Tool 6: Exam Pacer
  const [pacerScheme, setPacerScheme] = useState<"ab" | "abc">("abc");
  const [pacerExamHours, setPacerExamHours] = useState(3);
  
  // Tool 7: Module Weightage Risk
  const [riskModules, setRiskModules] = useState<Record<number, boolean>>({ 1: true, 2: true, 3: true, 4: false, 5: false });

  // Tool 8: Grace Mark Optimization
  const [gracePool, setGracePool] = useState(10);
  const [graceMarks, setGraceMarks] = useState<number[]>([35, 38, 30]);

  // Tool 9: Year-Back Credit Lock
  const [ybSlot, setYbSlot] = useState<"s5" | "s7">("s5");
  const [ybCredits, setYbCredits] = useState(18);

  // Tool 10: Honours/Minor Validator
  const [eligCgpa, setEligCgpa] = useState(8.2);
  const [eligBacklog, setEligBacklog] = useState(false);
  const [eligType, setEligType] = useState<"honours" | "minor">("honours");

  // Tool 11: Internal Improvement Scanner
  const [impAtt, setImpAtt] = useState<"regular" | "low" | "detained">("regular");
  const [impCie, setImpCie] = useState(15);
  const [impStatus, setImpStatus] = useState<"regular" | "supple">("regular");

  // Tool 12: Supple Debt Tracker
  const [debtBacklogs, setDebtBacklogs] = useState(3);

  // Tool 13: Lab Internal Aggregator
  const [labCont, setLabCont] = useState(38);
  const [labViva, setLabViva] = useState(12);
  const [labExam, setLabExam] = useState(12);

  // Tool 14: Project Splitter
  const [projGuide, setProjGuide] = useState(25);
  const [projCommittee, setProjCommittee] = useState(32);
  const [projReport, setProjReport] = useState(23);

  // Tool 15: Seminar Assessment
  const [semPres, setSemPres] = useState(32);
  const [semRep, setSemRep] = useState(24);
  const [semDef, setSemDef] = useState(25);

  // Tool 16: Course Code Decrypter
  const [decryptCode, setDecryptCode] = useState("CST202");

  // Tool 17: US GPA Converter
  const [usGpa10, setUsGpa10] = useState(8.5);

  // Tool 18: CGPA Forecaster
  const [foreCurrent, setForeCurrent] = useState(7.8);
  const [foreSems, setForeSems] = useState(4);
  const [foreTarget, setForeTarget] = useState(8.5);

  // Tool 19: Cram Scheduler
  const [cramHours, setCramHours] = useState(8);
  const [cramModules, setCramModules] = useState(3);

  // Tool 20: Broadcast Generator
  const [bunkSubject, setBunkSubject] = useState("Operating Systems");
  const [bunkReason, setBunkReason] = useState("heavy rain & buffer sessions completion");

  // Tool 21: Exam Hall Checklist
  const [checklistItems, setChecklistItems] = useState([
    { id: 1, text: "Hall Ticket", checked: true },
    { id: 2, text: "Scientific Calculator", checked: true },
    { id: 3, text: "College ID Card", checked: true },
    { id: 4, text: "Pens & Pencil", checked: false },
  ]);

  // Tool 22: Revaluation Gamble
  const [revalGrade, setRevalGrade] = useState("F");
  const [revalCie, setRevalCie] = useState(28);

  // Tool 23: Syllabus Milestones Progress
  const [syllabusChecked, setSyllabusChecked] = useState([true, true, false, false, false]);

  // Tool 24: Target Date Countdown
  const [targetDate, setTargetDate] = useState("2026-07-15");

  const categories = [
    { id: "all", label: "All Utilities" },
    { id: "internals", label: "Internals" },
    { id: "exams", label: "Exams" },
    { id: "credits", label: "Credits & CGPA" },
    { id: "labs", label: "Labs & Projects" },
    { id: "hacks", label: "Hacks & Misc" }
  ] as const;

  const categoryIcons: Record<string, React.ElementType> = {
    internals: Activity,
    exams: Clock,
    credits: GraduationCap,
    labs: Code,
    hacks: Sparkles
  };

  const categoryTabIcons: Record<string, React.ElementType> = {
    all: LayoutGrid,
    internals: Activity,
    exams: Clock,
    credits: Award,
    labs: FlaskConical,
    hacks: Sparkles
  };

  const toolIcons: Record<string, React.ElementType> = {
    bunk_master: Flame,
    att_marks: Activity,
    cie_aggregator: Calculator,
    damage_control: ShieldAlert,
    ese_target: Award,
    exam_pacer: Timer,
    module_weightage: AlertTriangle,
    grace_mark: Sparkles,
    credit_lock: Lock,
    honours_validator: ShieldCheck,
    improvement_scanner: RefreshCw,
    supple_debt: TrendingUp,
    lab_aggregator: FlaskConical,
    project_splitter: Code,
    seminar_assessment: FileText,
    decrypt_code: Binary,
    us_gpa: Globe,
    cgpa_forecaster: TrendingUp,
    cram_scheduler: Zap,
    broadcast_excuse: Send,
    hall_checklist: CheckSquare,
    reval_gamble: Dices,
    syllabus_milestones: Map,
    countdown_timer: Clock
  };

  // List of all 24 tools with metadata
  const toolsData = useMemo(() => [
    {
      id: "bunk_master",
      title: "Bunk Master",
      desc: "Calculate attendance safe margins or needed classes to reach 75%.",
      category: "internals",
      tags: ["attendance", "bunk", "safe", "detention"],
      render: () => {
        const pct = bunkHc > 0 ? Math.round((bunkHa / bunkHc) * 100) : 0;
        const target = 75;
        const needed = Math.ceil((target * bunkHc - 100 * bunkHa) / (100 - target));
        const canBunk = Math.floor((100 * bunkHa - target * bunkHc) / target);
        return (
          <div className="space-y-3 font-sans">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Total Conducted</span>
                <input type="number" value={bunkHc} onChange={e => setBunkHc(Math.max(1, Number(e.target.value)))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 font-bold font-mono text-slate-900 dark:text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Total Attended</span>
                <input type="number" value={bunkHa} onChange={e => setBunkHa(Math.min(bunkHc, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 font-bold font-mono text-slate-900 dark:text-white" />
              </div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 text-center space-y-1">
              <span className="text-2xl font-bold text-slate-900 dark:text-white font-mono">{pct}%</span>
              <span className="text-[10px] text-slate-400 block font-medium">Current Percentage</span>
            </div>
            <div className="p-3.5 rounded-2xl text-[10px] leading-relaxed text-center font-medium border border-blue-500/10 bg-blue-500/5 text-blue-600 dark:text-blue-450">
              {pct >= 75 ? (
                <span>You can safely bunk <strong className="font-bold font-mono text-sm">{Math.max(0, canBunk)}</strong> more classes.</span>
              ) : (
                <span>You must attend the next <strong className="font-bold font-mono text-sm">{Math.max(0, needed)}</strong> classes consecutively.</span>
              )}
            </div>
          </div>
        );
      }
    },
    {
      id: "att_marks",
      title: "Attendance Marks",
      desc: "Check how many free marks you secure in CIE based on attendance percent.",
      category: "internals",
      tags: ["attendance", "marks", "cie", "free"],
      render: () => {
        let marks = 0;
        let details = "Detention warning (below 75%)";
        let color = "text-rose-500 bg-rose-500/5 border-rose-500/10";
        if (attPct >= 90) { marks = 5; details = "Excellent! Full marks"; color = "text-emerald-500 bg-emerald-500/5 border-emerald-500/10"; }
        else if (attPct >= 85) { marks = 4; details = "Good score"; color = "text-emerald-450 bg-emerald-550/5 border-emerald-550/10"; }
        else if (attPct >= 80) { marks = 3; details = "Average score"; color = "text-blue-500 bg-blue-500/5 border-blue-500/10"; }
        else if (attPct >= 75) { marks = 2; details = "Minimum marks"; color = "text-amber-500 bg-amber-500/5 border-amber-500/10"; }

        return (
          <div className="space-y-3 font-sans">
            <div className="space-y-1 text-xs">
              <div className="flex justify-between font-bold text-slate-500 dark:text-slate-400">
                <span>Attendance Percentage</span>
                <span className="font-mono text-blue-600 dark:text-blue-400">{attPct}%</span>
              </div>
              <input type="range" min="50" max="100" value={attPct} onChange={e => setAttPct(Number(e.target.value))} className="w-full accent-blue-500 cursor-pointer h-1 rounded-lg bg-slate-100 dark:bg-slate-800" />
            </div>
            <div className={`p-4 rounded-2xl border text-center flex flex-col items-center justify-center ${color}`}>
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block">CIE Attendance Marks</span>
              <span className="text-3xl font-bold font-mono mt-1 block">{marks} <span className="text-xs">/ 5</span></span>
              <span className="text-[10px] font-medium block mt-1.5">{details}</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "cie_aggregator",
      title: "CIE Aggregator",
      desc: "Aggregate Series, Assignments, and Attendance marks into CIE.",
      category: "internals",
      tags: ["cie", "internals", "series", "marks"],
      render: () => {
        const total = Math.min(50, ((aggSeries1 + aggSeries2) / 2 * 0.7) + aggAssg + aggAtt);
        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <span className="text-[9px] text-slate-400 font-bold uppercase">S1 (/50)</span>
                <input type="number" value={aggSeries1} onChange={e => setAggSeries1(Math.min(50, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-[9px] text-slate-400 font-bold uppercase">S2 (/50)</span>
                <input type="number" value={aggSeries2} onChange={e => setAggSeries2(Math.min(50, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-[9px] text-slate-400 font-bold uppercase">Assg (/10)</span>
                <input type="number" value={aggAssg} onChange={e => setAggAssg(Math.min(10, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-[9px] text-slate-400 font-bold uppercase">Att (/5)</span>
                <input type="number" value={aggAtt} onChange={e => setAggAtt(Math.min(5, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white" />
              </div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center">
              <span className="text-2xl font-bold text-slate-900 dark:text-white font-mono">{total.toFixed(1)} <span className="text-xs font-semibold">/ 50</span></span>
              <span className="text-[10px] text-slate-450 block font-medium mt-1">Aggregated Internals</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "damage_control",
      title: "Damage Control",
      desc: "Calculate required Series 2 score to reach target CIE.",
      category: "internals",
      tags: ["series2", "cie", "target", "damage"],
      render: () => {
        const requiredS2 = ((dmgTarget - dmgAssgAtt) / 0.7) * 2 - dmgSeries1;
        const impossible = requiredS2 > 50;
        const safe = requiredS2 <= 0;

        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="grid grid-cols-3 gap-2">
              <div>
                <span className="text-[8px] text-slate-400 font-bold uppercase">S1 score</span>
                <input type="number" value={dmgSeries1} onChange={e => setDmgSeries1(Math.min(50, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
              </div>
              <div>
                <span className="text-[8px] text-slate-400 font-bold uppercase">CIE Target</span>
                <input type="number" value={dmgTarget} onChange={e => setDmgTarget(Math.min(50, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
              </div>
              <div>
                <span className="text-[8px] text-slate-400 font-bold uppercase">Assg+Att</span>
                <input type="number" value={dmgAssgAtt} onChange={e => setDmgAssgAtt(Math.min(15, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
              </div>
            </div>
            <div className="p-3.5 rounded-2xl border text-[10px] leading-relaxed text-center font-medium bg-blue-500/5 text-blue-600 dark:text-blue-450 border-blue-500/10">
              {impossible ? (
                <span className="text-rose-500 font-bold uppercase">Impossible Target! (Need {requiredS2.toFixed(1)})</span>
              ) : safe ? (
                <span className="text-emerald-500 font-bold">Target secured already! (Need 0)</span>
              ) : (
                <span>Need <strong className="font-bold font-mono text-sm">{requiredS2.toFixed(1)}</strong> out of 50 in Series 2.</span>
              )}
            </div>
          </div>
        );
      }
    },
    {
      id: "ese_target",
      title: "ESE Target Finder",
      desc: "Check required End Sem Exam mark to pass or secure a specific grade.",
      category: "exams",
      tags: ["ese", "exam", "pass", "grade"],
      render: () => {
        const gradeThresholds: Record<string, number> = {
          "S": 90, "A+": 85, "A": 80, "B+": 70, "B": 60, "C+": 50, "Pass": 40
        };
        const targetPct = gradeThresholds[eseGrade] || 40;
        const requiredESE = Math.max(40, Math.ceil((targetPct - eseInt) * 2));
        const impossible = requiredESE > 100;

        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase">CIE Internals (/50)</span>
                <input type="number" value={eseInt} onChange={e => setEseInt(Math.min(50, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 font-bold font-mono text-slate-900 dark:text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Target Grade</span>
                <select value={eseGrade} onChange={e => setEseGrade(e.target.value)} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1.5 font-bold text-slate-900 dark:text-white">
                  {Object.keys(gradeThresholds).map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl border text-center font-medium bg-blue-500/5 text-blue-600 dark:text-blue-450 border-blue-500/10">
              {impossible ? (
                <span className="text-rose-500 font-bold uppercase">Impossible to get {eseGrade}</span>
              ) : (
                <span>Need at least <strong className="font-bold font-mono text-sm">{requiredESE}</strong> / 100 in ESE.</span>
              )}
            </div>
          </div>
        );
      }
    },
    {
      id: "exam_pacer",
      title: "Exam Pacer",
      desc: "Speed guide for writing exam answers within time limits.",
      category: "exams",
      tags: ["exam", "pacing", "timer", "speed"],
      render: () => {
        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-450 font-bold uppercase">Question Scheme</span>
                <select value={pacerScheme} onChange={e => setPacerScheme(e.target.value as any)} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-250 dark:border-slate-850 rounded-xl px-2 py-1.5 font-bold text-slate-900 dark:text-white">
                  <option value="abc">Part A (3pt) + B (14pt)</option>
                  <option value="ab">Part A (5pt) + B (15pt)</option>
                </select>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-450 font-bold uppercase">Duration (Hours)</span>
                <input type="number" value={pacerExamHours} onChange={e => setPacerExamHours(Math.max(1, Number(e.target.value)))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1 font-bold font-mono text-slate-900 dark:text-white" />
              </div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl space-y-2">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Recommended pacing</span>
              <div className="flex justify-between border-b border-slate-200/20 dark:border-slate-800 pb-1">
                <span>Part A questions</span>
                <span className="font-bold font-mono text-slate-900 dark:text-white">~4 mins each</span>
              </div>
              <div className="flex justify-between">
                <span>Part B essays</span>
                <span className="font-bold font-mono text-slate-900 dark:text-white">~25 mins each</span>
              </div>
            </div>
          </div>
        );
      }
    },
    {
      id: "module_weightage",
      title: "Module Risk Auditor",
      desc: "Analyze pass probability based on modules prepared.",
      category: "exams",
      tags: ["risk", "syllabus", "modules", "cram"],
      render: () => {
        const preparedCount = Object.values(riskModules).filter(Boolean).length;
        const pct = Math.round((preparedCount / 5) * 100);
        let status = "High Danger";
        let color = "text-rose-500 bg-rose-500/5 border-rose-500/10";
        if (preparedCount >= 4) { status = "Safe"; color = "text-emerald-500 bg-emerald-500/5 border-emerald-500/10"; }
        else if (preparedCount === 3) { status = "Moderate Risk"; color = "text-amber-500 bg-amber-500/5 border-amber-500/10"; }

        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="flex justify-around items-center pt-1">
              {[1, 2, 3, 4, 5].map(m => (
                <button
                  key={m}
                  onClick={() => {
                    triggerHaptic("light");
                    setRiskModules(prev => ({ ...prev, [m]: !prev[m] }));
                  }}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center font-bold font-mono active:scale-90 transition-all ${
                    riskModules[m] 
                      ? "bg-blue-500 text-white border-transparent shadow-sm" 
                      : "border-slate-250 dark:border-slate-800 text-slate-400 dark:text-slate-500 hover:border-slate-350"
                  }`}
                >
                  M{m}
                </button>
              ))}
            </div>
            <div className={`p-3.5 rounded-2xl border text-center font-medium ${color}`}>
              <span className="font-bold uppercase tracking-wider block text-[9px] text-slate-400">Preparation Audit</span>
              <span className="text-sm font-bold block mt-1 leading-none">{status} ({pct}% syllabus)</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "grace_mark",
      title: "Grace Mark Optimizer",
      desc: "Optimally distribute grace mark pool to pass failed subjects.",
      category: "credits",
      tags: ["grace", "marks", "optimiser", "pass"],
      render: () => {
        const requiredTotal = graceMarks.reduce((sum, m) => sum + (m < 40 ? 40 - m : 0), 0);
        const canPass = gracePool >= requiredTotal;
        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="space-y-1">
              <div className="flex justify-between font-bold text-slate-500">
                <span>Grace Marks Pool</span>
                <span className="font-mono text-blue-600">{gracePool} Marks</span>
              </div>
              <input type="range" min="0" max="25" value={gracePool} onChange={e => setGracePool(Number(e.target.value))} className="w-full accent-blue-500 cursor-pointer h-1 rounded-lg bg-slate-100 dark:bg-slate-800" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {graceMarks.map((m, idx) => (
                <div key={idx} className="space-y-1 text-center bg-slate-50/50 dark:bg-slate-900/40 p-2 border border-slate-200/40 dark:border-slate-800 rounded-xl">
                  <span className="text-[8px] font-bold text-slate-400 block uppercase">Subj {idx+1}</span>
                  <input
                    type="number"
                    value={m}
                    onChange={(e) => {
                      const newMarks = [...graceMarks];
                      newMarks[idx] = Math.min(100, Math.max(0, Number(e.target.value)));
                      setGraceMarks(newMarks);
                    }}
                    className="w-full bg-transparent border-none text-center font-bold text-xs focus:outline-none font-mono text-slate-900 dark:text-white"
                  />
                </div>
              ))}
            </div>
            <div className={`p-3 rounded-2xl border text-center font-medium ${canPass ? "bg-emerald-500/5 text-emerald-500 border-emerald-500/20" : "bg-rose-500/5 text-rose-500 border-rose-500/20"}`}>
              {canPass ? (
                <span>Sufficient pool to pass all failed subjects!</span>
              ) : (
                <span>Need {requiredTotal - gracePool} more marks in grace pool to clear.</span>
              )}
            </div>
          </div>
        );
      }
    },
    {
      id: "credit_lock",
      title: "Year-Back Credit Lock",
      desc: "Check credit status compliance to avoid year-back detentions.",
      category: "credits",
      tags: ["credits", "yearback", "detention", "lock"],
      render: () => {
        const threshold = ybSlot === "s5" ? 26 : 52;
        const eligible = ybCredits >= threshold;
        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Target Semester</span>
                <select value={ybSlot} onChange={e => setYbSlot(e.target.value as any)} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-xl px-2 py-1.5 font-bold text-slate-900 dark:text-white">
                  <option value="s5">Enter Sem 5 (S1+S2 credits)</option>
                  <option value="s7">Enter Sem 7 (S1 to S4 credits)</option>
                </select>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Earned Credits</span>
                <input type="number" value={ybCredits} onChange={e => setYbCredits(Math.max(0, Number(e.target.value)))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 font-bold font-mono text-slate-900 dark:text-white" />
              </div>
            </div>
            <div className={`p-3.5 rounded-2xl border text-center font-medium ${eligible ? "bg-emerald-500/5 text-emerald-500 border-emerald-500/20" : "bg-rose-500/5 text-rose-500 border-rose-500/20"}`}>
              {eligible ? (
                <span className="font-bold">Safe from Year-Back!</span>
              ) : (
                <span>Year-Back Alert! Need <strong className="font-bold font-mono">{threshold - ybCredits}</strong> more credits.</span>
              )}
            </div>
          </div>
        );
      }
    },
    {
      id: "honours_validator",
      title: "Honours/Minor Check",
      desc: "Verify eligibility guidelines for Honours/Minor degrees.",
      category: "credits",
      tags: ["honours", "minor", "cgpa", "eligibility"],
      render: () => {
        const minGpa = 8.0;
        const eligible = eligCgpa >= minGpa && !eligBacklog;
        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="grid grid-cols-2 gap-2 text-[10px] border border-slate-250 dark:border-slate-800 p-0.5 rounded-xl bg-slate-100 dark:bg-slate-900">
              <button onClick={() => setEligType("honours")} className={`flex-1 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer ${eligType === "honours" ? "bg-white dark:bg-slate-800 text-blue-600 shadow-sm" : "text-slate-550"}`}>Honours</button>
              <button onClick={() => setEligType("minor")} className={`flex-1 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer ${eligType === "minor" ? "bg-white dark:bg-slate-800 text-blue-600 shadow-sm" : "text-slate-550"}`}>Minor</button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <span className="text-[9px] text-slate-400 font-bold uppercase">Current CGPA</span>
                <input type="number" step="0.1" value={eligCgpa} onChange={e => setEligCgpa(Math.min(10, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-[9px] text-slate-400 font-bold uppercase">Has Backlogs?</span>
                <select value={eligBacklog ? "yes" : "no"} onChange={e => setEligBacklog(e.target.value === "yes")} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-250 dark:border-slate-850 rounded-xl px-2 py-1.5 font-bold text-slate-900 dark:text-white">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
            </div>
            <div className={`p-3 rounded-2xl border text-center font-medium ${eligible ? "bg-emerald-500/5 text-emerald-500 border-emerald-500/20" : "bg-rose-500/5 text-rose-500 border-rose-500/20"}`}>
              {eligible ? (
                <span>Eligible for {eligType === "honours" ? "Honours Degree" : "Minor Degree"}!</span>
              ) : (
                <span>Not Eligible (Needs CGPA &ge; 8.0 &amp; 0 backlogs).</span>
              )}
            </div>
          </div>
        );
      }
    },
    {
      id: "improvement_scanner",
      title: "Internal Improvement",
      desc: "Scanner to verify eligibility for improving internal marks.",
      category: "hacks",
      tags: ["improvement", "cie", "marks", "academic"],
      render: () => {
        const eligible = impAtt === "regular" && impCie < 20;
        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-1">
                <span className="text-[8px] text-slate-400 font-bold uppercase">Attendance</span>
                <select value={impAtt} onChange={e => setImpAtt(e.target.value as any)} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-1 py-1 font-bold text-[10px] text-slate-900 dark:text-white">
                  <option value="regular">&gt;75%</option>
                  <option value="low">60-75%</option>
                  <option value="detained">&lt;60%</option>
                </select>
              </div>
              <div className="space-y-1">
                <span className="text-[8px] text-slate-400 font-bold uppercase">Current CIE</span>
                <input type="number" value={impCie} onChange={e => setImpCie(Math.min(50, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-1 py-1 font-bold text-xs font-mono text-slate-900 dark:text-white text-center" />
              </div>
              <div className="space-y-1">
                <span className="text-[8px] text-slate-400 font-bold uppercase">Exam type</span>
                <select value={impStatus} onChange={e => setImpStatus(e.target.value as any)} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-1 py-1 font-bold text-[10px] text-slate-900 dark:text-white">
                  <option value="regular">Regular</option>
                  <option value="supple">Supple</option>
                </select>
              </div>
            </div>
            <div className={`p-3 rounded-2xl border text-center font-medium ${eligible ? "bg-emerald-500/5 text-emerald-500 border-emerald-500/20" : "bg-rose-500/5 text-rose-500 border-rose-500/20"}`}>
              {eligible ? (
                <span>Eligible for internal marks improvement!</span>
              ) : (
                <span>Not eligible (CIE must be &lt; 20 &amp; attendance &ge; 75%).</span>
              )}
            </div>
          </div>
        );
      }
    },
    {
      id: "supple_debt",
      title: "Supple Debt Tracker",
      desc: "Analyze the total credit backlog debt, fees, and clearance pipeline.",
      category: "credits",
      tags: ["supple", "debt", "backlogs", "fees"],
      render: () => {
        const fees = debtBacklogs * 1200; // ₹1200 per supplementary registration
        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="space-y-1">
              <div className="flex justify-between font-bold text-slate-500">
                <span>Active Backlog Subjects</span>
                <span className="font-mono text-blue-600">{debtBacklogs} subjects</span>
              </div>
              <input type="range" min="0" max="15" value={debtBacklogs} onChange={e => setDebtBacklogs(Number(e.target.value))} className="w-full accent-blue-500 cursor-pointer h-1 rounded-lg bg-slate-100 dark:bg-slate-800" />
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl space-y-1 text-center">
              <span className="text-[10px] font-bold text-slate-400 block uppercase">Estimated Exam Fee Debt</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-white font-mono">₹{fees}</span>
              <span className="text-[9px] text-slate-400 block font-medium mt-1">At standard ₹1200 / course supple registration</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "lab_aggregator",
      title: "Lab CIE Planner",
      desc: "Aggregate continuous evaluation, viva, and final lab exam marks.",
      category: "labs",
      tags: ["lab", "cie", "viva", "record"],
      render: () => {
        const total = labCont + labViva + labExam;
        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="grid grid-cols-3 gap-2">
              <div>
                <span className="text-[8px] text-slate-450 font-bold uppercase block">Record (/40)</span>
                <input type="number" value={labCont} onChange={e => setLabCont(Math.min(40, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
              </div>
              <div>
                <span className="text-[8px] text-slate-450 font-bold uppercase block">Viva (/10)</span>
                <input type="number" value={labViva} onChange={e => setLabViva(Math.min(10, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
              </div>
              <div>
                <span className="text-[8px] text-slate-450 font-bold uppercase block">Exam (/10)</span>
                <input type="number" value={labExam} onChange={e => setLabExam(Math.min(10, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
              </div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center">
              <span className="text-2xl font-bold text-slate-900 dark:text-white font-mono">{total} <span className="text-xs font-semibold">/ 60</span></span>
              <span className="text-[10px] text-slate-455 block font-medium mt-1">Total Internal Lab Marks</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "project_splitter",
      title: "Project Splitter",
      desc: "Split B.Tech final project assessment metrics across reviews.",
      category: "labs",
      tags: ["project", "splitter", "rubric", "review"],
      render: () => {
        const total = projGuide + projCommittee + projReport;
        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="grid grid-cols-3 gap-2">
              <div>
                <span className="text-[8px] text-slate-450 font-bold uppercase block">Guide (/30)</span>
                <input type="number" value={projGuide} onChange={e => setProjGuide(Math.min(30, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
              </div>
              <div>
                <span className="text-[8px] text-slate-455 font-bold uppercase block">Review (/40)</span>
                <input type="number" value={projCommittee} onChange={e => setProjCommittee(Math.min(40, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
              </div>
              <div>
                <span className="text-[8px] text-slate-450 font-bold uppercase block">Report (/30)</span>
                <input type="number" value={projReport} onChange={e => setProjReport(Math.min(30, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
              </div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center">
              <span className="text-2xl font-bold text-slate-900 dark:text-white font-mono">{total} <span className="text-xs font-semibold">/ 100</span></span>
              <span className="text-[10px] text-slate-455 block font-medium mt-1">Aggregated Project Marks</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "seminar_assessment",
      title: "Seminar Marks Split",
      desc: "Log seminar grading parts: report, presentation, defense.",
      category: "labs",
      tags: ["seminar", "split", "presentation", "report"],
      render: () => {
        const total = semPres + semRep + semDef;
        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="grid grid-cols-3 gap-2">
              <div>
                <span className="text-[8px] text-slate-450 font-bold uppercase block">Slides (/40)</span>
                <input type="number" value={semPres} onChange={e => setSemPres(Math.min(40, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
              </div>
              <div>
                <span className="text-[8px] text-slate-455 font-bold uppercase block">Report (/30)</span>
                <input type="number" value={semRep} onChange={e => setSemRep(Math.min(30, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
              </div>
              <div>
                <span className="text-[8px] text-slate-450 font-bold uppercase block">Defense (/30)</span>
                <input type="number" value={semDef} onChange={e => setSemDef(Math.min(30, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
              </div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center">
              <span className="text-2xl font-bold text-slate-900 dark:text-white font-mono">{total} <span className="text-xs font-semibold">/ 100</span></span>
              <span className="text-[10px] text-slate-450 block font-medium mt-1">Aggregated Seminar Marks</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "decrypt_code",
      title: "Course Code Decrypter",
      desc: "Decode course departments, schemes, and semesters from code.",
      category: "hacks",
      tags: ["decrypter", "codes", "syllabus", "info"],
      render: () => {
        let dept = "Unknown Dept";
        let level = "Unknown Level";
        const codeClean = decryptCode.trim().toUpperCase();
        if (codeClean.length >= 5) {
          const match = codeClean.match(/^([A-Z]{2,4})([0-9])([0-9]{2})$/);
          if (match) {
            const [, d, s] = match;
            const depts: Record<string, string> = {
              "CST": "Computer Science",
              "CSL": "CS Laboratory",
              "ECT": "Electronics & Comm",
              "ECL": "EC Laboratory",
              "EET": "Electrical & Electronics",
              "EEL": "EE Laboratory",
              "MET": "Mechanical Engineering",
              "MEL": "ME Laboratory",
              "CET": "Civil Engineering",
              "CEL": "CE Laboratory",
              "MCN": "Non-Academic Core"
            };
            dept = depts[d] || `${d} Branch`;
            level = `Semester ${s} Course`;
          }
        }

        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="space-y-1">
              <span className="text-[9px] text-slate-400 font-bold uppercase">Course Code</span>
              <input type="text" value={decryptCode} onChange={e => setDecryptCode(e.target.value)} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 font-bold font-mono text-slate-900 dark:text-white" placeholder="Ex: CST202" />
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl space-y-1 font-mono text-center">
              <span className="text-xs font-black block text-slate-900 dark:text-white">{dept}</span>
              <span className="text-[10px] text-slate-450 block">{level}</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "us_gpa",
      title: "US GPA Converter",
      desc: "Convert KTU 10-point GPA scale to US 4.0 GPA scale.",
      category: "credits",
      tags: ["gpa", "us scale", "education", "abroad"],
      render: () => {
        // Simple linear map: 10 => 4.0, 9 => 3.7, 8 => 3.3, 7 => 3.0, etc.
        let usScale = 0;
        if (usGpa10 >= 9.0) usScale = 3.7 + ((usGpa10 - 9.0) * 0.3);
        else if (usGpa10 >= 8.0) usScale = 3.3 + ((usGpa10 - 8.0) * 0.4);
        else if (usGpa10 >= 7.0) usScale = 3.0 + ((usGpa10 - 7.0) * 0.3);
        else if (usGpa10 >= 6.0) usScale = 2.0 + ((usGpa10 - 6.0) * 1.0);
        else usScale = Math.max(0, usGpa10 * 0.33);

        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="space-y-1">
              <div className="flex justify-between font-bold text-slate-550">
                <span>KTU GPA (10-Scale)</span>
                <span className="font-mono text-blue-600">{usGpa10.toFixed(2)}</span>
              </div>
              <input type="range" min="4" max="10" step="0.05" value={usGpa10} onChange={e => setUsGpa10(Number(e.target.value))} className="w-full accent-blue-500 cursor-pointer h-1 rounded-lg bg-slate-100 dark:bg-slate-800" />
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center space-y-1">
              <span className="text-[9px] font-bold text-slate-400 block uppercase">US Equivalent Scale</span>
              <span className="text-3xl font-bold text-slate-900 dark:text-white font-mono">{usScale.toFixed(2)} <span className="text-xs">/ 4.0</span></span>
            </div>
          </div>
        );
      }
    },
    {
      id: "cgpa_forecaster",
      title: "CGPA Forecaster",
      desc: "Forecast required target GPA in upcoming semesters.",
      category: "credits",
      tags: ["gpa", "cgpa", "forecast", "target"],
      render: () => {
        const totalSemesters = 8;
        const remaining = totalSemesters - foreSems;
        const requiredUpcoming = remaining > 0 
          ? ((foreTarget * totalSemesters) - (foreCurrent * foreSems)) / remaining
          : 0;
        const impossible = requiredUpcoming > 10 || requiredUpcoming < 0;

        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="grid grid-cols-3 gap-2">
              <div>
                <span className="text-[8px] text-slate-400 font-bold uppercase">Current CGPA</span>
                <input type="number" step="0.1" value={foreCurrent} onChange={e => setForeCurrent(Math.min(10, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
              </div>
              <div>
                <span className="text-[8px] text-slate-400 font-bold uppercase">Sems Done</span>
                <input type="number" value={foreSems} onChange={e => setForeSems(Math.min(8, Math.max(1, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
              </div>
              <div>
                <span className="text-[8px] text-slate-400 font-bold uppercase">Target CGPA</span>
                <input type="number" step="0.1" value={foreTarget} onChange={e => setForeTarget(Math.min(10, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
              </div>
            </div>
            <div className={`p-3.5 rounded-2xl border text-center font-medium ${impossible ? "bg-rose-500/5 text-rose-500 border-rose-500/20" : "bg-blue-500/5 text-blue-650 dark:text-blue-400 border-blue-500/10"}`}>
              {impossible ? (
                <span className="text-rose-500 font-bold uppercase">Impossible Target!</span>
              ) : (
                <span>Need an average of <strong className="font-bold font-mono text-sm">{requiredUpcoming.toFixed(2)}</strong> SGPA in next {remaining} semesters.</span>
              )}
            </div>
          </div>
        );
      }
    },
    {
      id: "cram_scheduler",
      title: "Cram Scheduler",
      desc: "Generate quick sprint-based timeline to prepare syllabus.",
      category: "exams",
      tags: ["cram", "sprint", "study", "timeline"],
      render: () => {
        const perMod = Math.floor((cramHours / cramModules) * 10) / 10;
        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Cram Window (Hours)</span>
                <input type="number" value={cramHours} onChange={e => setCramHours(Math.max(1, Number(e.target.value)))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 font-bold font-mono text-slate-900 dark:text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Pending Modules</span>
                <input type="number" value={cramModules} onChange={e => setCramModules(Math.min(5, Math.max(1, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 font-bold font-mono text-slate-900 dark:text-white" />
              </div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl space-y-1.5">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Allocation schedule</span>
              <div className="flex justify-between border-b border-slate-200/20 dark:border-slate-800 pb-1">
                <span>Per Module focus</span>
                <span className="font-bold font-mono text-slate-900 dark:text-white">{perMod}h</span>
              </div>
              <div className="flex justify-between">
                <span>Buffer Review</span>
                <span className="font-bold font-mono text-slate-900 dark:text-white">~1.5h</span>
              </div>
            </div>
          </div>
        );
      }
    },
    {
      id: "broadcast_excuse",
      title: "Broadcast Generator",
      desc: "Generate fancy WhatsApp messages explaining a class bunk.",
      category: "hacks",
      tags: ["bunk", "excuse", "broadcast", "hack"],
      render: () => {
        const message = `Hello All, please note that for ${bunkSubject}, we are planning an official academic adjustment/bunk request due to ${bunkReason}. Kindly coordinate so there's zero confusion.`;
        const handleCopy = () => {
          triggerHaptic("success");
          navigator.clipboard.writeText(message);
          triggerNotification("Excuse broadcast copied to clipboard!");
        };
        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="space-y-1">
              <span className="text-[9px] text-slate-450 font-bold uppercase block">Reason</span>
              <input type="text" value={bunkReason} onChange={e => setBunkReason(e.target.value)} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 font-semibold text-slate-900 dark:text-white" />
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl relative">
              <p className="text-[10px] italic leading-relaxed text-slate-650 dark:text-slate-400 pr-6 font-mono">
                {message}
              </p>
              <button onClick={handleCopy} className="absolute right-2.5 top-2.5 p-1 text-slate-400 hover:text-slate-650 dark:hover:text-slate-200 cursor-pointer active:scale-90 transition-all">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        );
      }
    },
    {
      id: "hall_checklist",
      title: "Exam Checklist",
      desc: "Interactive validation list for university exams entry compliance.",
      category: "exams",
      tags: ["checklist", "hall ticket", "compliance", "calculator"],
      render: () => {
        const toggleCheck = (id: number) => {
          triggerHaptic("light");
          setChecklistItems(prev => prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
        };
        return (
          <div className="space-y-2.5 text-xs font-sans">
            <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
              {checklistItems.map(item => (
                <div key={item.id} onClick={() => toggleCheck(item.id)} className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-55/40 dark:bg-slate-900/20 border border-slate-200/40 dark:border-slate-800/80 cursor-pointer select-none">
                  <div className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                    item.checked ? "bg-blue-500 text-white border-transparent" : "border-slate-350 dark:border-slate-700"
                  }`}>
                    {item.checked && <Check className="w-3 h-3 stroke-[2.5]" />}
                  </div>
                  <span className={`font-semibold ${item.checked ? "line-through text-slate-450 dark:text-slate-550" : "text-slate-800 dark:text-slate-200"}`}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        );
      }
    },
    {
      id: "reval_gamble",
      title: "Revaluation Gamble",
      desc: "Assess the risk/success chances of a revaluation application.",
      category: "exams",
      tags: ["revaluation", "gamble", "fees", "results"],
      render: () => {
        let gambleStatus = "Low Probability";
        let color = "text-rose-500 bg-rose-500/5 border-rose-500/10";
        if (revalCie >= 22 && revalGrade === "F") {
          gambleStatus = "High Chance";
          color = "text-emerald-500 bg-emerald-500/5 border-emerald-500/10";
        } else if (revalCie >= 18 && revalGrade === "F") {
          gambleStatus = "Moderate Chance";
          color = "text-amber-500 bg-amber-500/5 border-amber-500/10";
        }
        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Failed Grade</span>
                <select value={revalGrade} onChange={e => setRevalGrade(e.target.value)} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-xl px-2 py-1.5 font-bold text-slate-900 dark:text-white">
                  <option value="F">F Grade</option>
                  <option value="FE">FE Grade</option>
                </select>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase">CIE Internals (/50)</span>
                <input type="number" value={revalCie} onChange={e => setRevalCie(Math.min(50, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 font-bold font-mono text-slate-900 dark:text-white" />
              </div>
            </div>
            <div className={`p-3 rounded-2xl border text-center font-medium ${color}`}>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Gamble recommendation</span>
              <span className="text-sm font-bold block mt-1 leading-none">{gambleStatus}</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "syllabus_milestones",
      title: "Syllabus Milestones",
      desc: "Dynamic roadmap checker for active course syllabus modules.",
      category: "exams",
      tags: ["milestones", "modules", "studies", "exam"],
      render: () => {
        const done = syllabusChecked.filter(Boolean).length;
        const total = syllabusChecked.length;
        const pct = Math.round((done / total) * 100);
        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="flex justify-around items-center pt-1">
              {syllabusChecked.map((chk, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    triggerHaptic("light");
                    const nextList = [...syllabusChecked];
                    nextList[idx] = !nextList[idx];
                    setSyllabusChecked(nextList);
                  }}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center font-bold font-mono active:scale-90 transition-all ${
                    chk 
                      ? "bg-blue-500 text-white border-transparent shadow-sm" 
                      : "border-slate-250 dark:border-slate-800 text-slate-400 dark:text-slate-500"
                  }`}
                >
                  M{idx+1}
                </button>
              ))}
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center space-y-1">
              <span className="text-[10px] font-bold text-slate-400 block uppercase">Completion rate</span>
              <span className="text-xl font-bold font-mono text-slate-900 dark:text-white">{pct}% ({done}/{total} done)</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "countdown_timer",
      title: "Exam Countdown",
      desc: "Real-time calendar countdown planner to university exams.",
      category: "hacks",
      tags: ["countdown", "timer", "exam dates", "study planner"],
      render: () => {
        const now = new Date();
        const examDate = new Date(targetDate);
        const diffMs = examDate.getTime() - now.getTime();
        const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
        const passed = diffMs < 0;

        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="space-y-1">
              <span className="text-[9px] text-slate-400 font-bold uppercase">Target Date</span>
              <input type="date" value={targetDate} onChange={e => setTargetDate(e.target.value)} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 font-bold font-mono text-slate-900 dark:text-white cursor-pointer" />
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center">
              {passed ? (
                <span className="text-slate-450 dark:text-slate-550 font-bold uppercase">Target Date Passed</span>
              ) : (
                <span className="text-2xl font-bold text-slate-900 dark:text-white font-mono">{diffDays} <span className="text-xs font-semibold">days left</span></span>
              )}
            </div>
          </div>
        );
      }
    }
  ], [
    bunkHc, bunkHa, attPct, aggSeries1, aggSeries2, aggAssg, aggAtt, dmgSeries1, dmgTarget, dmgAssgAtt,
    eseInt, eseGrade, pacerScheme, pacerExamHours, riskModules, gracePool, graceMarks, ybSlot, ybCredits,
    eligCgpa, eligBacklog, eligType, impAtt, impCie, impStatus, debtBacklogs, labCont, labViva, labExam,
    projGuide, projCommittee, projReport, semPres, semRep, semDef, decryptCode, usGpa10, foreCurrent,
    foreSems, foreTarget, cramHours, cramModules, bunkSubject, bunkReason, checklistItems, revalGrade,
    revalCie, syllabusChecked, targetDate
  ]);

  // Filter tools based on search and active category
  const filteredTools = useMemo(() => {
    return toolsData.filter(tool => {
      const matchesCategory = activeCategory === "all" || tool.category === activeCategory;
      const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            tool.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [toolsData, activeCategory, searchQuery]);

  const toggleExpandTool = (id: string) => {
    triggerHaptic("light");
    setExpandedTool(id);
  };

  return (
    <div className="space-y-6 w-full relative">
      {/* Global CSS style block to style inputs, metrics, sliders, warning boxes to look ultra premium */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Overrides inside the micro-tools slide-up sheet / modal */
        .microtools-modal-container input[type="number"],
        .microtools-modal-container input[type="text"],
        .microtools-modal-container input[type="date"],
        .microtools-modal-container select {
          background-color: #f8fafc !important;
          border: 1px solid #e2e8f0 !important;
          border-radius: 8px !important;
          font-weight: 500 !important;
          font-family: var(--font-sans), sans-serif !important;
          padding: 7px 10px !important;
          font-size: 11px !important;
          color: #0f172a !important;
          transition: all 0.2s ease !important;
          box-shadow: none !important;
          width: 100% !important;
        }
        
        .dark .microtools-modal-container input[type="number"],
        .dark .microtools-modal-container input[type="text"],
        .dark .microtools-modal-container input[type="date"],
        .dark .microtools-modal-container select {
          background-color: #0c0c0f !important;
          border: 1px solid rgba(255, 255, 255, 0.04) !important;
          color: #f1f5f9 !important;
        }

        .microtools-modal-container input:focus,
        .microtools-modal-container select:focus {
          outline: none !important;
          border-color: #94a3b8 !important;
          background-color: #ffffff !important;
        }
        .dark .microtools-modal-container input:focus,
        .dark .microtools-modal-container select:focus {
          border-color: rgba(255, 255, 255, 0.15) !important;
          background-color: #08080a !important;
        }

        /* Range sliders styling */
        .microtools-modal-container input[type="range"] {
          -webkit-appearance: none !important;
          appearance: none !important;
          background: #e2e8f0 !important;
          height: 2px !important;
          border-radius: 9999px !important;
          outline: none !important;
          margin-top: 8px !important;
          margin-bottom: 8px !important;
        }
        .dark .microtools-modal-container input[type="range"] {
          background: rgba(255, 255, 255, 0.08) !important;
        }
        .microtools-modal-container input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none !important;
          appearance: none !important;
          width: 10px !important;
          height: 10px !important;
          border-radius: 50% !important;
          background: #0f172a !important;
          border: 1px solid #ffffff !important;
          cursor: pointer !important;
        }
        .dark .microtools-modal-container input[type="range"]::-webkit-slider-thumb {
          background: #ffffff !important;
          border: 1px solid #000000 !important;
        }

        /* Result cards */
        .microtools-modal-container .bg-slate-50,
        .microtools-modal-container .bg-slate-55,
        .microtools-modal-container .bg-slate-50\\/50,
        .microtools-modal-container .text-center {
          background-color: #f8fafc !important;
          border: 1px solid #e2e8f0 !important;
          border-radius: 12px !important;
          padding: 12px !important;
        }
        .dark .microtools-modal-container .bg-slate-50,
        .dark .microtools-modal-container .bg-slate-55,
        .dark .microtools-modal-container .bg-slate-50\\/50,
        .dark .microtools-modal-container .text-center {
          background-color: rgba(255, 255, 255, 0.01) !important;
          border: 1px solid rgba(255, 255, 255, 0.03) !important;
        }
        .microtools-modal-container .text-2xl,
        .microtools-modal-container .text-3xl {
          font-size: 22px !important;
          font-weight: 700 !important;
          letter-spacing: -0.02em !important;
          font-family: var(--font-sans), sans-serif !important;
          color: #0f172a !important;
        }
        .dark .microtools-modal-container .text-2xl,
        .dark .microtools-modal-container .text-3xl {
          color: #ffffff !important;
        }

        /* Helper captions and labels */
        .microtools-modal-container span.uppercase,
        .microtools-modal-container .text-\\[9px\\],
        .microtools-modal-container .text-\\[10px\\] {
          font-size: 8px !important;
          letter-spacing: 0.18em !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          color: #64748b !important;
        }
        .dark .microtools-modal-container span.uppercase,
        .dark .microtools-modal-container .text-\\[9px\\],
        .dark .microtools-modal-container .text-\\[10px\\] {
          color: #94a3b8 !important;
        }
        .microtools-modal-container .text-slate-400 {
          color: #64748b !important;
        }
        .dark .microtools-modal-container .text-slate-400 {
          color: #94a3b8 !important;
        }

        /* Premium alert banners: keep their soft category color backgrounds and text colors */
        .microtools-modal-container .p-3.5,
        .microtools-modal-container .bg-blue-500\\/5,
        .microtools-modal-container .bg-emerald-500\\/5,
        .microtools-modal-container .bg-rose-500\\/5,
        .microtools-modal-container .bg-amber-500\\/5 {
          border-radius: 12px !important;
          padding: 10px 14px !important;
          font-size: 11px !important;
          font-weight: 500 !important;
          line-height: 1.5 !important;
          border-width: 1px !important;
        }

        .microtools-modal-container .bg-blue-500\\/5 {
          background-color: rgba(37, 99, 235, 0.05) !important;
          border-color: rgba(37, 99, 235, 0.1) !important;
          color: #2563eb !important;
        }
        .dark .microtools-modal-container .bg-blue-500\\/5 {
          background-color: rgba(96, 165, 250, 0.08) !important;
          border-color: rgba(96, 165, 250, 0.15) !important;
          color: #60a5fa !important;
        }
        
        .microtools-modal-container .bg-emerald-500\\/5 {
          background-color: rgba(16, 185, 129, 0.05) !important;
          border-color: rgba(16, 185, 129, 0.1) !important;
          color: #10b981 !important;
        }
        .dark .microtools-modal-container .bg-emerald-500\\/5 {
          background-color: rgba(52, 211, 153, 0.08) !important;
          border-color: rgba(52, 211, 153, 0.15) !important;
          color: #34d399 !important;
        }

        .microtools-modal-container .bg-rose-500\\/5 {
          background-color: rgba(239, 68, 68, 0.05) !important;
          border-color: rgba(239, 68, 68, 0.1) !important;
          color: #ef4444 !important;
        }
        .dark .microtools-modal-container .bg-rose-500\\/5 {
          background-color: rgba(248, 113, 113, 0.08) !important;
          border-color: rgba(248, 113, 113, 0.15) !important;
          color: #f87171 !important;
        }

        .microtools-modal-container .bg-amber-500\\/5 {
          background-color: rgba(245, 158, 11, 0.05) !important;
          border-color: rgba(245, 158, 11, 0.1) !important;
          color: #d97706 !important;
        }
        .dark .microtools-modal-container .bg-amber-500\\/5 {
          background-color: rgba(251, 191, 36, 0.08) !important;
          border-color: rgba(251, 191, 36, 0.15) !important;
          color: #fbbf24 !important;
        }
        
        .microtools-modal-container .text-emerald-500,
        .microtools-modal-container .text-emerald-450 {
          color: #10b981 !important;
        }
        .microtools-modal-container .text-rose-500 {
          color: #ef4444 !important;
        }
        .microtools-modal-container .text-amber-500 {
          color: #f59e0b !important;
        }
        .microtools-modal-container .text-blue-600 {
          color: #2563eb !important;
        }
        .dark .microtools-modal-container .text-blue-600 {
          color: #60a5fa !important;
        }

        /* Checkbox items styling */
        .microtools-modal-container .select-none {
          border-radius: 8px !important;
          padding: 6px 10px !important;
          border-color: #e2e8f0 !important;
          background-color: #f8fafc !important;
        }
        .dark .microtools-modal-container .select-none {
          border-color: rgba(255, 255, 255, 0.03) !important;
          background-color: rgba(255, 255, 255, 0.01) !important;
        }
      ` }} />

      {/* Search and Filters header console */}
      <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/[0.04] p-3 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm backdrop-blur-xl font-sans">
        {/* Search */}
        <div className="relative flex items-center w-full md:max-w-xs bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/[0.04] focus-within:border-blue-500/30 dark:focus-within:border-blue-500/40 rounded-xl px-3 py-1.5 transition-all">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 dark:text-slate-505 pointer-events-none" />
          <input
            type="text"
            placeholder="Search micro-utilities..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-transparent pl-5.5 pr-2 py-0.5 text-xs font-semibold text-slate-800 dark:text-slate-150 placeholder-slate-400 dark:placeholder-slate-650 focus:outline-none"
          />
        </div>
        
        {/* Category switcher tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
          {categories.map(cat => {
            const isActive = activeCategory === cat.id;
            const TabIcon = categoryTabIcons[cat.id] || LayoutGrid;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  triggerHaptic("light");
                  setActiveCategory(cat.id);
                }}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm"
                    : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/[0.02]"
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
        <AnimatePresence>
          {filteredTools.map(tool => {
            const Icon = toolIcons[tool.id] || categoryIcons[tool.category] || Calculator;
            
            // Category badges style maps
            const categoryBadgeStyles: Record<string, string> = {
              internals: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/15",
              exams: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/15",
              credits: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/15",
              labs: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-450 border border-emerald-500/15",
              hacks: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/15"
            };

            const categoryIconStyles: Record<string, string> = {
              internals: "bg-amber-500/10 border border-amber-500/15 text-amber-600 dark:text-amber-400",
              exams: "bg-rose-500/10 border border-rose-500/15 text-rose-600 dark:text-rose-400",
              credits: "bg-blue-500/10 border border-blue-500/15 text-blue-600 dark:text-blue-400",
              labs: "bg-emerald-500/10 border border-emerald-500/15 text-emerald-600 dark:text-emerald-455",
              hacks: "bg-purple-500/10 border border-purple-500/15 text-purple-600 dark:text-purple-400"
            };

            const badgeStyle = categoryBadgeStyles[tool.category] || "bg-slate-500/10 text-slate-600 dark:text-slate-400 border border-slate-500/15";
            const iconStyle = categoryIconStyles[tool.category] || "bg-slate-500/10 border border-slate-500/15 text-slate-600 dark:text-slate-400";

            return (
              <motion.div
                layout
                key={tool.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="relative overflow-hidden group bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-white/[0.04] rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.015)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-lg hover:-translate-y-1 hover:border-blue-500/20 dark:hover:border-blue-500/30 hover:bg-slate-50/50 dark:hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between cursor-pointer h-[160px] hover:scale-[1.005]"
                onClick={() => toggleExpandTool(tool.id)}
              >
                <div className="relative z-10 flex flex-col justify-between h-full w-full">
                  <div>
                    {/* Top Row: Icon Container and Category Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${iconStyle} transition-all duration-300 group-hover:scale-105`}>
                        <Icon className="w-4.5 h-4.5 stroke-[1.5]" />
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wider uppercase ${badgeStyle}`}>
                        {tool.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 tracking-tight leading-tight mt-3.5 group-hover:text-slate-955 dark:group-hover:text-white transition-colors font-display">
                      {tool.title}
                    </h4>

                    {/* Description */}
                    <p className="text-[11.5px] text-slate-500 dark:text-slate-400 font-medium leading-normal mt-1.5 line-clamp-2">
                      {tool.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {filteredTools.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 px-4 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/10 text-center">
          <AlertCircle className="w-10 h-10 text-slate-350 dark:text-slate-650 mb-3" />
          <span className="text-xs font-bold text-slate-550 dark:text-slate-450 uppercase tracking-widest block mb-1">No Micro-tools Found</span>
          <span className="text-xs text-slate-450 dark:text-slate-550 max-w-xs block leading-normal">
            No tools match &quot;{searchQuery}&quot; or the selected category. Try clearing your search parameters.
          </span>
        </div>
      )}

      {/* Drawer/Modal Overlay */}
      <AnimatePresence>
        {expandedTool && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedTool(null)}
              className="fixed inset-0 z-50 bg-slate-950/20 dark:bg-black/50 backdrop-blur-md"
            />

            {/* Modal/Drawer Container */}
            {(() => {
              const activeTool = toolsData.find(t => t.id === expandedTool);
              if (!activeTool) return null;
              const ToolIcon = toolIcons[activeTool.id] || categoryIcons[activeTool.category] || Calculator;

              return (
                <div className="fixed inset-0 z-50 pointer-events-none flex items-end md:items-center justify-center p-0 md:p-4">
                  {/* Card Content Wrapper */}
                  <motion.div
                    initial={
                      isMobile
                        ? { y: "100%", opacity: 1 }
                        : { scale: 0.95, opacity: 0, y: 0 }
                    }
                    animate={
                      isMobile
                        ? { y: 0, opacity: 1 }
                        : { scale: 1, opacity: 1, y: 0 }
                    }
                    exit={
                      isMobile
                        ? { y: "100%", opacity: 1 }
                        : { scale: 0.95, opacity: 0, y: 0 }
                    }
                    transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    className="pointer-events-auto w-full md:max-w-md bg-white dark:bg-[#070709] border-t md:border border-slate-200/80 dark:border-white/[0.04] rounded-t-2xl md:rounded-2xl shadow-2xl flex flex-col max-h-[85vh] md:max-h-[90vh] overflow-hidden font-poppins"
                  >
                    {/* Drawer Header (Mobile drag bar & standard header) */}
                    <div className="shrink-0 px-6 pt-3 pb-4 border-b border-slate-100 dark:border-white/[0.03] relative bg-slate-50/50 dark:bg-slate-900/10">
                      {/* Mobile Drag Handle */}
                      <div className="w-12 h-1 bg-slate-350 dark:bg-slate-800 rounded-full mx-auto mb-3 block md:hidden" />
                      <div className="flex items-start justify-between mt-1">
                        <div className="flex items-center gap-3.5">
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/[0.04] border border-slate-250/20 dark:border-white/[0.04]">
                            <ToolIcon className="w-4.5 h-4.5 text-slate-600 dark:text-slate-350 stroke-[1.5] shrink-0" />
                          </div>
                          <div>
                            <span className="text-[8px] font-bold uppercase text-slate-450 dark:text-slate-500 tracking-[0.18em] block leading-none mb-1.5">
                              {activeTool.category}
                            </span>
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-tight leading-none font-display">
                              {activeTool.title}
                            </h3>
                          </div>
                        </div>

                        {/* Close button */}
                        <button
                          onClick={() => {
                            triggerHaptic("light");
                            setExpandedTool(null);
                          }}
                          className="p-1 rounded hover:bg-slate-100 dark:hover:bg-white/[0.04] text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer transition-colors active:scale-95"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-[11.5px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                        {activeTool.desc}
                      </p>
                    </div>

                    {/* Tool Contents */}
                    <div className="flex-1 overflow-y-auto p-5 space-y-5 microtools-modal-container">
                      {activeTool.render()}
                    </div>
                  </motion.div>
                </div>
              );
            })()}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
