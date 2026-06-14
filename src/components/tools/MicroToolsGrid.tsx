"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Calculator, Calendar, Award, BookOpen, Sparkles, 
  Clock, Activity, Shield, CheckCircle2, AlertTriangle, 
  Check, FileText, Share2, HelpCircle, Code, ShieldAlert,
  GraduationCap, AlertCircle, Plus, Info, RefreshCw,
  Flame, Timer, ShieldCheck, TrendingUp, Zap, Send,
  CheckSquare, Dices, Map, Globe, Binary, Split, FlaskConical, LayoutGrid, ArrowUpRight, Star, Briefcase
} from "lucide-react";
import { triggerHaptic } from "@/lib/haptic";

interface MicroToolsGridProps {
  branch: string;
  sem: number;
  triggerNotification: (msg: string) => void;
}

export default function MicroToolsGrid({ branch, sem, triggerNotification }: MicroToolsGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "internals" | "exams" | "credits" | "labs" | "hacks">("all");
  const [expandedTool, setExpandedTool] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [pinnedTools, setPinnedTools] = useState<string[]>([]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    
    // Load pinned tools from localStorage
    const saved = localStorage.getItem("ktunode_pinned_tools");
    if (saved) {
      try {
        setPinnedTools(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const togglePin = (id: string) => {
    triggerHaptic("medium");
    setPinnedTools(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      localStorage.setItem("ktunode_pinned_tools", JSON.stringify(next));
      triggerNotification(prev.includes(id) ? "Tool unpinned!" : "Tool pinned to top!");
      return next;
    });
  };

  // --- 25 MICRO-TOOLS STATES ---
  
  // Tool 1: ESE Target Finder
  const [eseInt, setEseInt] = useState(28);
  const [eseGrade, setEseGrade] = useState("B+");

  // Tool 2: Exam Pacer
  const [pacerScheme, setPacerScheme] = useState<"kt24">("kt24");
  const [pacerExamHours, setPacerExamHours] = useState(2.5);

  // Tool 3: Grace Mark Optimizer
  const [gracePool, setGracePool] = useState(8);
  const [graceMarks, setGraceMarks] = useState<{ cie: number, ese: number }[]>([
    { cie: 28, ese: 20 },
    { cie: 30, ese: 18 },
    { cie: 22, ese: 24 }
  ]);

  // Tool 4: Internal Improvement Scanner
  const [impAtt, setImpAtt] = useState<"regular" | "low" | "detained">("regular");
  const [impCie, setImpCie] = useState(14);
  const [impStatus, setImpStatus] = useState<"regular" | "supple">("regular");

  // Tool 5: Supple Debt Tracker
  const [debtBacklogs, setDebtBacklogs] = useState(2);

  // Tool 6: Lab CIE/ESE Aggregator
  const [labCieAtt, setLabCieAtt] = useState(5);
  const [labCieAssess, setLabCieAssess] = useState(38);
  const [labEseProc, setLabEseProc] = useState(8);
  const [labEseExec, setLabEseExec] = useState(12);
  const [labEseRes, setLabEseRes] = useState(8);
  const [labEseViva, setLabEseViva] = useState(8);
  const [labEseRec, setLabEseRec] = useState(4);

  // Tool 7: Project Splitter
  const [projGuide, setProjGuide] = useState(16);
  const [projReport, setProjReport] = useState(25);
  const [projPresentation, setProjPresentation] = useState(42);

  // Tool 8: Seminar Assessment
  const [semPres, setSemPres] = useState(34);
  const [semRep, setSemRep] = useState(25);
  const [semDef, setSemDef] = useState(26);

  // Tool 9: Course Code Decrypter
  const [decryptCode, setDecryptCode] = useState("PCCET205");

  // Tool 10: US GPA Converter
  const [usGpa10, setUsGpa10] = useState(8.2);

  // Tool 11: CGPA Forecaster
  const [foreCurrent, setForeCurrent] = useState(7.6);
  const [foreSems, setForeSems] = useState(4);
  const [foreTarget, setForeTarget] = useState(8.2);

  // Tool 12: Cram Scheduler
  const [cramHours, setCramHours] = useState(8);
  const [cramModules, setCramModules] = useState(3);

  // Tool 13: Broadcast Generator
  const [bunkSubject, setBunkSubject] = useState("Operating Systems");
  const [bunkReason, setBunkReason] = useState("heavy rain & buffer sessions completion");

  // Tool 14: Revaluation Gamble
  const [revalGrade, setRevalGrade] = useState("F");
  const [revalCie, setRevalCie] = useState(26);

  // Tool 15: Attendance Condonation Planner
  const [condPct, setCondPct] = useState(68);
  const [condTimes, setCondTimes] = useState(1);

  // Tool 16: Degree Class Finder
  const [degCgpa, setDegCgpa] = useState(8.2);
  const [degBacklogs, setDegBacklogs] = useState("no");

  // Tool 17: GPA to Percentage Converter
  const [convType, setConvType] = useState<"gpa_to_pct" | "pct_to_gpa">("gpa_to_pct");
  const [convGpa, setConvGpa] = useState(8.0);
  const [convPct, setConvPct] = useState(80);

  // Tool 18: ECTS Credit Converter
  const [ectsKtuCredits, setEctsKtuCredits] = useState(20);

  // Tool 19: Grace Marks Calculator
  const [graceCertType, setGraceCertType] = useState<"nss" | "ncc_c" | "ncc_b" | "sports_zonal" | "sports_state">("nss");

  // Tool 20: German GPA Converter
  const [germanCgpa, setGermanCgpa] = useState(8.5);

  // Tool 21: Revaluation Cost Calculator
  const [revalPaperCount, setRevalPaperCount] = useState(2);
  const [revalScrutiny, setRevalScrutiny] = useState(false);
  const [revalPhoto, setRevalPhoto] = useState(false);

  // Tool 22: MOOC Credits Mapper
  const [moocDuration, setMoocDuration] = useState<4 | 8 | 12>(12);
  const [moocScore, setMoocScore] = useState(72);

  // Tool 23: Internship Credits Planner
  const [internDuration, setInternDuration] = useState(4);

  // Tool 24: Study Hours to ECTS Converter
  const [ectsWorkload, setEctsWorkload] = useState(3);

  // Tool 25: Course Slot Identifier
  const [slotLetter, setSlotLetter] = useState("A");

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
    ese_target: Award,
    exam_pacer: Timer,
    grace_mark: Sparkles,
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
    reval_gamble: Dices,
    condonation_planner: Calendar,
    degree_class: ShieldCheck,
    gpa_converter: Calculator,
    ects_converter: Split,
    grace_marks_calc: Plus,
    german_gpa: Globe,
    reval_cost: Calculator,
    mooc_mapper: Map,
    internship_planner: Briefcase,
    ects_hours: Clock,
    exam_slot_info: Calendar
  };

  const toolsData = useMemo(() => [
    {
      id: "ese_target",
      title: "ESE Target Finder",
      desc: "Check required End Sem Exam mark to pass or secure a specific grade under KTU 2024 scheme.",
      category: "exams",
      tags: ["ese", "exam", "pass", "grade", "2024"],
      render: () => {
        const thresholds: Record<string, number> = {
          "S": 90, "A+": 85, "A": 80, "B+": 75, "B": 70, "C+": 65, "C": 60, "D": 55, "P": 50
        };
        const targetPct = thresholds[eseGrade] || 50;
        const requiredESE = targetPct - eseInt;
        
        let displayResult = "";
        let alertColor = "bg-blue-500/5 text-blue-600 dark:text-blue-400 border-blue-500/10";
        
        const maxAchievable = eseInt + 60;
        let maxGrade = "F";
        for (const [g, t] of Object.entries(thresholds)) {
          if (maxAchievable >= t) {
            maxGrade = g;
            break;
          }
        }
        if (maxAchievable < 50 && eseInt + 24 >= 24) {
          maxGrade = "LP";
        }

        if (requiredESE > 60) {
          alertColor = "bg-rose-500/5 text-rose-600 dark:text-rose-400 border-rose-500/10";
          if (eseInt + 24 >= 50) {
            displayResult = `Target ${eseGrade} is impossible (Max possible is ${maxGrade} with ${maxAchievable} marks). You will pass with P or higher by scoring min 24 in ESE.`;
          } else if (eseInt + 60 >= 50) {
            displayResult = `Target ${eseGrade} is impossible (Max possible is ${maxGrade}). Pass with P by scoring min ${50 - eseInt} in ESE, or LP by scoring 24 to ${49 - eseInt}.`;
          } else {
            displayResult = `Target ${eseGrade} is impossible. Since internals are low, you can only pass with a Low Pass (LP) grade by scoring min 24 in ESE.`;
          }
        } else {
          const finalVal = Math.max(24, requiredESE);
          const totalMarks = eseInt + finalVal;
          if (totalMarks < 50 && finalVal >= 24) {
            displayResult = `Need at least ${finalVal}/60 in ESE. This secures a Low Pass (LP) grade (combined marks ${totalMarks} < 50).`;
            alertColor = "bg-amber-500/5 text-amber-600 dark:text-amber-400 border-amber-500/10";
          } else {
            displayResult = `Need at least ${finalVal}/60 in ESE to secure grade ${eseGrade} (combined total ${totalMarks} marks).`;
            alertColor = "bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-500/10";
          }
        }

        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase font-sans">CIE Internals (/40)</span>
                <input type="number" value={eseInt} onChange={e => setEseInt(Math.min(40, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 font-bold font-mono text-slate-900 dark:text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase font-sans">Target Grade</span>
                <select value={eseGrade} onChange={e => setEseGrade(e.target.value)} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1.5 font-bold text-slate-900 dark:text-white">
                  {Object.keys(thresholds).map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={`p-3.5 rounded-2xl border text-center font-medium ${alertColor}`}>
              <span>{displayResult}</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "exam_pacer",
      title: "Exam Pacer",
      desc: "Speed guide for writing KTU 2024 theory exam papers within the 150-minute time limit.",
      category: "exams",
      tags: ["exam", "pacing", "timer", "speed", "2024"],
      render: () => {
        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="p-3.5 bg-blue-500/5 text-blue-600 dark:text-blue-400 border border-blue-500/10 rounded-2xl text-[10px] leading-relaxed text-center font-medium">
              KTU 2024 Scheme theory exams have a strict duration of <strong>2.5 Hours (150 Mins)</strong> for a 60-mark paper.
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl space-y-2.5">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Recommended pacing strategy</span>
              <div className="flex justify-between border-b border-slate-200/20 dark:border-slate-800 pb-1.5">
                <span>Part A (8 questions × 3 marks)</span>
                <span className="font-bold font-mono text-slate-900 dark:text-white">6 mins each (48m total)</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/20 dark:border-slate-800 pb-1.5">
                <span>Part B (4 essays × 9 marks)</span>
                <span className="font-bold font-mono text-slate-900 dark:text-white">24 mins each (96m total)</span>
              </div>
              <div className="flex justify-between">
                <span>Reading & Revision Buffer</span>
                <span className="font-bold font-mono text-slate-900 dark:text-white">6 mins remaining</span>
              </div>
            </div>
          </div>
        );
      }
    },
    {
      id: "grace_mark",
      title: "Grace Mark Optimizer",
      desc: "Optimally distribute your grace mark pool to pass failed courses under KTU 2024 rules.",
      category: "credits",
      tags: ["grace", "marks", "optimiser", "pass"],
      render: () => {
        const failedSubjects = graceMarks.map((m, idx) => {
          const isPass = m.ese >= 24;
          const req = isPass ? 0 : (24 - m.ese);
          return { idx, ...m, isPass, req };
        });

        const totalRequired = failedSubjects.reduce((sum, s) => sum + s.req, 0);
        
        let tempPool = gracePool;
        const sortedFailed = [...failedSubjects].filter(s => !s.isPass).sort((a, b) => a.req - b.req);
        
        const passedList: number[] = [];
        sortedFailed.forEach(s => {
          if (tempPool >= s.req) {
            tempPool -= s.req;
            passedList.push(s.idx);
          }
        });
        
        const originallyPassedCount = failedSubjects.filter(s => s.isPass).length;
        const savedCount = passedList.length;
        const totalPassed = originallyPassedCount + savedCount;

        let statusMsg = "";
        let color = "";
        if (totalPassed === 3) {
          statusMsg = `Success! All subjects passed (Grace marks used: ${totalRequired} / ${gracePool}).`;
          color = "bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
        } else {
          statusMsg = `Cleared ${totalPassed} / 3 subjects. Needs ${totalRequired - gracePool} more marks in grace pool to pass all.`;
          color = "bg-rose-500/5 text-rose-600 dark:text-rose-400 border-rose-500/20";
        }

        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="space-y-1">
              <div className="flex justify-between font-bold text-slate-500">
                <span>Grace Marks Pool</span>
                <span className="font-mono text-blue-600">{gracePool} Marks</span>
              </div>
              <input type="range" min="0" max="25" value={gracePool} onChange={e => setGracePool(Number(e.target.value))} className="w-full accent-blue-500 cursor-pointer h-1 rounded-lg bg-slate-100 dark:bg-slate-800" />
            </div>
            <div className="space-y-2">
              {graceMarks.map((m, idx) => {
                const req = m.ese >= 24 ? 0 : 24 - m.ese;
                const status = m.ese >= 24 ? (m.cie + m.ese >= 50 ? "Passed (P)" : "Passed (LP)") : `Failed (Needs +${req} ESE)`;
                return (
                  <div key={idx} className="flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/40 p-2 border border-slate-200/40 dark:border-slate-800 rounded-xl gap-2">
                    <div className="text-[10px] font-bold text-slate-500 w-12 shrink-0">Subj {idx+1}</div>
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      <div className="flex items-center gap-1">
                        <span className="text-[8px] text-slate-400 font-bold uppercase font-sans">CIE</span>
                        <input
                          type="number"
                          value={m.cie}
                          onChange={(e) => {
                            const newMarks = [...graceMarks];
                            newMarks[idx] = { ...newMarks[idx], cie: Math.min(40, Math.max(0, Number(e.target.value))) };
                            setGraceMarks(newMarks);
                          }}
                          className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-205 dark:border-slate-800 rounded-lg py-0.5 text-center font-bold text-xs font-mono text-slate-900 dark:text-white"
                        />
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-[8px] text-slate-400 font-bold uppercase font-sans">ESE</span>
                        <input
                          type="number"
                          value={m.ese}
                          onChange={(e) => {
                            const newMarks = [...graceMarks];
                            newMarks[idx] = { ...newMarks[idx], ese: Math.min(60, Math.max(0, Number(e.target.value))) };
                            setGraceMarks(newMarks);
                          }}
                          className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-205 dark:border-slate-800 rounded-lg py-0.5 text-center font-bold text-xs font-mono text-slate-900 dark:text-white"
                        />
                      </div>
                    </div>
                    <div className={`text-[9px] font-bold w-24 text-right shrink-0 ${m.ese >= 24 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                      {status}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={`p-3 rounded-2xl border text-center font-medium ${color}`}>
              <span>{statusMsg}</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "improvement_scanner",
      title: "Internal Improvement",
      desc: "Scanner to verify sessional internal improvement eligibility under KTU 2024 rules.",
      category: "hacks",
      tags: ["improvement", "cie", "marks", "academic", "2024"],
      render: () => {
        const eligible = impAtt === "regular" && impCie < 16 && impStatus === "supple";
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
                <span className="text-[8px] text-slate-400 font-bold uppercase font-sans">Current CIE</span>
                <input type="number" value={impCie} onChange={e => setImpCie(Math.min(40, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-1 py-1 font-bold text-xs font-mono text-slate-900 dark:text-white text-center" />
              </div>
              <div className="space-y-1">
                <span className="text-[8px] text-slate-400 font-bold uppercase">Exam Status</span>
                <select value={impStatus} onChange={e => setImpStatus(e.target.value as any)} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-1 py-1 font-bold text-[10px] text-slate-900 dark:text-white">
                  <option value="regular">Registered/Passed</option>
                  <option value="supple">Failed (F Grade)</option>
                </select>
              </div>
            </div>
            <div className={`p-3 rounded-2xl border text-center font-medium ${eligible ? "bg-emerald-500/5 text-emerald-500 border-emerald-500/20" : "bg-rose-500/5 text-rose-500 border-rose-500/20"}`}>
              {eligible ? (
                <span>Eligible! You can register for internal improvement.</span>
              ) : (
                <span>Not eligible (CIE must be &lt; 16/40, attendance &ge; 75%, and must have failed the course).</span>
              )}
            </div>
          </div>
        );
      }
    },
    {
      id: "supple_debt",
      title: "Supple Debt Tracker",
      desc: "Calculate supplementary exam registration fees accurately based on actual university rates.",
      category: "credits",
      tags: ["supple", "debt", "backlogs", "fees"],
      render: () => {
        const baseFee = 500;
        const perSubjectFee = 250;
        const total = debtBacklogs > 0 ? (baseFee + debtBacklogs * perSubjectFee) : 0;
        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="space-y-1">
              <div className="flex justify-between font-bold text-slate-500">
                <span>Active Backlogs</span>
                <span className="font-mono text-blue-600">{debtBacklogs} subjects</span>
              </div>
              <input type="range" min="0" max="10" value={debtBacklogs} onChange={e => setDebtBacklogs(Number(e.target.value))} className="w-full accent-blue-500 cursor-pointer h-1 rounded-lg bg-slate-100 dark:bg-slate-800" />
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl space-y-1.5 text-center">
              <span className="text-[10px] font-bold text-slate-400 block uppercase font-sans">Estimated Exam Fee</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-white font-mono">₹{total}</span>
              <span className="text-[9px] text-slate-400 block font-medium">₹500 base registration + ₹250 per supplementary course</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "lab_aggregator",
      title: "Lab CIE/ESE Aggregator",
      desc: "Aggregate continuous assessment, attendance, and practical exam marks under the KTU 2024 Lab scheme.",
      category: "labs",
      tags: ["lab", "cie", "practical", "2024"],
      render: () => {
        const cie = labCieAtt + labCieAssess;
        const eseTotal = labEseProc + labEseExec + labEseRes + labEseViva + labEseRec;
        const total = cie + eseTotal;
        const passed = total >= 50 && eseTotal >= 25;

        return (
          <div className="space-y-4 text-xs font-sans">
            <div className="space-y-2">
              <span className="text-[9px] text-slate-400 font-bold uppercase block mb-1">CIE Components (Max 50)</span>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[8px] text-slate-400 uppercase font-sans">Attendance (/5)</span>
                  <input type="number" value={labCieAtt} onChange={e => setLabCieAtt(Math.min(5, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white" />
                </div>
                <div>
                  <span className="text-[8px] text-slate-400 uppercase font-sans">Assessment (/45)</span>
                  <input type="number" value={labCieAssess} onChange={e => setLabCieAssess(Math.min(45, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[9px] text-slate-400 font-bold uppercase block mb-1">ESE Components (Max 50)</span>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <span className="text-[8px] text-slate-400 uppercase font-sans">Procedure (/10)</span>
                  <input type="number" value={labEseProc} onChange={e => setLabEseProc(Math.min(10, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-1.5 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
                </div>
                <div>
                  <span className="text-[8px] text-slate-400 uppercase font-sans">Conduct (/15)</span>
                  <input type="number" value={labEseExec} onChange={e => setLabEseExec(Math.min(15, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-1.5 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
                </div>
                <div>
                  <span className="text-[8px] text-slate-400 uppercase font-sans">Results (/10)</span>
                  <input type="number" value={labEseRes} onChange={e => setLabEseRes(Math.min(10, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-1.5 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div>
                  <span className="text-[8px] text-slate-400 uppercase font-sans">Viva (/10)</span>
                  <input type="number" value={labEseViva} onChange={e => setLabEseViva(Math.min(10, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white" />
                </div>
                <div>
                  <span className="text-[8px] text-slate-400 uppercase font-sans">Record (/5)</span>
                  <input type="number" value={labEseRec} onChange={e => setLabEseRec(Math.min(5, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white" />
                </div>
              </div>
            </div>

            <div className={`p-3 rounded-2xl border text-center ${passed ? "bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" : "bg-rose-500/5 text-rose-600 dark:text-rose-400 border-rose-500/20"}`}>
              <span className="text-xl font-bold font-mono block">{total} <span className="text-xs">/ 100</span></span>
              <span className="text-[10px] font-medium block mt-1">
                {passed ? "Pass Status: PASSED (>= 50 combined & >= 25 ESE)" : `Pass Status: FAILED (${total < 50 ? "combined < 50" : "ESE < 25"})`}
              </span>
            </div>
          </div>
        );
      }
    },
    {
      id: "project_splitter",
      title: "Project Splitter",
      desc: "Split B.Tech final project Phase II assessment metrics according to the official KTU rubric.",
      category: "labs",
      tags: ["project", "splitter", "rubric", "review"],
      render: () => {
        const total = projGuide + projReport + projPresentation;
        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="grid grid-cols-3 gap-2">
              <div>
                <span className="text-[8px] text-slate-450 font-bold uppercase block">Guide (/20)</span>
                <input type="number" value={projGuide} onChange={e => setProjGuide(Math.min(20, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
              </div>
              <div>
                <span className="text-[8px] text-slate-455 font-bold uppercase block">Report (/30)</span>
                <input type="number" value={projReport} onChange={e => setProjReport(Math.min(30, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
              </div>
              <div>
                <span className="text-[8px] text-slate-450 font-bold uppercase block">Viva/Pres (/50)</span>
                <input type="number" value={projPresentation} onChange={e => setProjPresentation(Math.min(50, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
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
      desc: "Split seminar grading components: slides/presentation, written report, and defense/Q&A.",
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
      desc: "Decode course departments, schemes, and semesters from official KTU codes.",
      category: "hacks",
      tags: ["decrypter", "codes", "syllabus", "info"],
      render: () => {
        let dept = "Unknown Dept";
        let level = "Unknown Level";
        let category = "Unknown Category";
        const codeClean = decryptCode.trim().toUpperCase();
        
        const matchFull = codeClean.match(/^([A-Z]{2})([A-Z]{3})([0-9])([0-9]{2})$/);
        const matchShort = !matchFull ? codeClean.match(/^([A-Z]{3})([0-9])([0-9]{2})$/) : null;

        if (matchFull) {
          const [, prefix, d, s, seq] = matchFull;
          const prefixes: Record<string, string> = {
            "PC": "Professional Core",
            "PE": "Program Elective",
            "OE": "Open Elective",
            "MC": "Mandatory Course",
            "UC": "University Core",
            "GC": "General Core",
            "GY": "General Elective / Basic Science",
            "GZ": "General Elective / Lab Core",
            "PR": "Project Work",
            "SE": "Seminar"
          };
          const depts: Record<string, string> = {
            "CST": "Computer Science & Engineering (Theory)",
            "CSL": "Computer Science & Engineering (Lab)",
            "ECT": "Electronics & Communication (Theory)",
            "ECL": "Electronics & Communication (Lab)",
            "EET": "Electrical & Electronics (Theory)",
            "EEL": "Electrical & Electronics (Lab)",
            "MET": "Mechanical Engineering (Theory)",
            "MEL": "Mechanical Engineering (Lab)",
            "CET": "Civil Engineering (Theory)",
            "CEL": "Civil Engineering (Lab)",
            "EST": "Engineering Science (Core)",
            "ESL": "Engineering Science (Lab)",
            "MAT": "Mathematics",
            "CYT": "Chemistry",
            "PHT": "Physics",
            "HUT": "Humanities & Social Sciences"
          };
          category = prefixes[prefix] || `Category ${prefix}`;
          dept = depts[d] || `${d} Subject Group`;
          level = `Semester ${s} (Sequence #${seq})`;
        } else if (matchShort) {
          const [, d, s, seq] = matchShort;
          const depts: Record<string, string> = {
            "CST": "Computer Science & Engineering (Theory)",
            "CSL": "Computer Science & Engineering (Lab)",
            "ECT": "Electronics & Communication (Theory)",
            "ECL": "Electronics & Communication (Lab)",
            "EET": "Electrical & Electronics (Theory)",
            "EEL": "Electrical & Electronics (Lab)",
            "MET": "Mechanical Engineering (Theory)",
            "MEL": "Mechanical Engineering (Lab)",
            "CET": "Civil Engineering (Theory)",
            "CEL": "Civil Engineering (Lab)",
            "EST": "Engineering Science (Core)",
            "ESL": "Engineering Science (Lab)",
            "MAT": "Mathematics",
            "CYT": "Chemistry",
            "PHT": "Physics",
            "HUT": "Humanities & Social Sciences"
          };
          category = "Course (Legacy/Standard)";
          dept = depts[d] || `${d} Subject Group`;
          level = `Semester ${s} (Sequence #${seq})`;
        }

        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="space-y-1">
              <span className="text-[9px] text-slate-400 font-bold uppercase">Course Code</span>
              <input type="text" value={decryptCode} onChange={e => setDecryptCode(e.target.value)} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 font-bold font-mono text-slate-900 dark:text-white" placeholder="Ex: CST202" />
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl space-y-1 font-mono text-center">
              <span className="text-[10px] font-bold block text-slate-400 dark:text-slate-500 uppercase">{category}</span>
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
                <span className="text-[8px] text-slate-400 font-bold uppercase font-sans">Sems Done</span>
                <input type="number" value={foreSems} onChange={e => setForeSems(Math.min(8, Math.max(1, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 font-bold font-mono text-slate-900 dark:text-white text-center" />
              </div>
              <div>
                <span className="text-[8px] text-slate-400 font-bold uppercase font-sans">Target CGPA</span>
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
                <span className="text-[10px] text-slate-400 font-bold uppercase font-sans">Cram Window (Hours)</span>
                <input type="number" value={cramHours} onChange={e => setCramHours(Math.max(1, Number(e.target.value)))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 font-bold font-mono text-slate-900 dark:text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase font-sans">Pending Modules</span>
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
                <span className="text-[10px] text-slate-400 font-bold uppercase font-sans">Failed Grade</span>
                <select value={revalGrade} onChange={e => setRevalGrade(e.target.value)} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-xl px-2 py-1.5 font-bold text-slate-900 dark:text-white">
                  <option value="F">F Grade</option>
                  <option value="FE">FE Grade</option>
                </select>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase font-sans">CIE Internals (/40)</span>
                <input type="number" value={revalCie} onChange={e => setRevalCie(Math.min(40, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 font-bold font-mono text-slate-900 dark:text-white" />
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
      id: "condonation_planner",
      title: "Attendance Condonation Planner",
      desc: "Attendance condonation calculator specifically tuned for the max 2 times program limit.",
      category: "internals",
      tags: ["condonation", "attendance", "medical", "limit"],
      render: () => {
        let statusText = "";
        let color = "text-rose-500 bg-rose-500/5 border-rose-500/10";
        
        if (condTimes >= 2 && condPct < 75) {
          statusText = "Not Eligible! Maximum of 2 condonations already exhausted across your program.";
          color = "text-rose-500 bg-rose-500/5 border-rose-500/10";
        } else if (condPct >= 75) {
          statusText = "Safe! Attendance is 75% or above. No condonation required.";
          color = "text-emerald-500 bg-emerald-500/5 border-emerald-500/10";
        } else if (condPct >= 60) {
          statusText = "Eligible for Condonation! Requires a medical certificate and a ₹1000 fee.";
          color = "text-amber-500 bg-amber-500/5 border-amber-500/10";
        } else {
          statusText = "Detention Risk! Attendance is below 60%. Condonation not permitted.";
          color = "text-rose-500 bg-rose-500/5 border-rose-500/10";
        }

        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase font-sans">Attendance %</span>
                <input type="number" value={condPct} onChange={e => setCondPct(Math.min(100, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1.5 font-bold font-mono text-slate-900 dark:text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase font-sans">Condonations Used</span>
                <input type="number" value={condTimes} onChange={e => setCondTimes(Math.min(10, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1.5 font-bold font-mono text-slate-900 dark:text-white" />
              </div>
            </div>
            <div className={`p-3.5 rounded-2xl border text-center font-medium ${color}`}>
              <span>{statusText}</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "degree_class",
      title: "Degree Class Finder",
      desc: "Estimate your final B.Tech degree classification under standard KTU rules.",
      category: "credits",
      tags: ["degree", "classification", "distinction", "cgpa"],
      render: () => {
        let status = "Fail";
        let color = "text-rose-500 bg-rose-500/5 border-rose-500/10";
        
        if (degCgpa >= 8.0 && degBacklogs === "no") {
          status = "First Class with Distinction";
          color = "text-emerald-500 bg-emerald-500/5 border-emerald-500/10";
        } else if (degCgpa >= 6.5) {
          status = "First Class";
          color = "text-blue-500 bg-blue-500/5 border-blue-500/10";
        } else if (degCgpa >= 5.0) {
          status = "Second Class / Pass";
          color = "text-slate-500 bg-slate-500/5 border-slate-500/10";
        }

        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase font-sans">Cumulative CGPA</span>
                <input type="number" step="0.01" value={degCgpa} onChange={e => setDegCgpa(Math.min(10, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1.5 font-bold font-mono text-slate-900 dark:text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase font-sans">Backlog History?</span>
                <select value={degBacklogs} onChange={e => setDegBacklogs(e.target.value)} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-xl px-2 py-1.5 font-bold text-slate-900 dark:text-white">
                  <option value="no">Never / 0 backlog</option>
                  <option value="yes">Yes (even if cleared)</option>
                </select>
              </div>
            </div>
            <div className={`p-3.5 rounded-2xl border text-center font-medium ${color}`}>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Degree classification</span>
              <span className="text-sm font-bold block mt-1 leading-none">{status}</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "gpa_converter",
      title: "GPA & % Converter",
      desc: "Convert KTU CGPA/SGPA to percentage and vice-versa using the official linear equation.",
      category: "credits",
      tags: ["percentage", "converter", "gpa", "class"],
      render: () => {
        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="flex justify-around items-center pt-0.5">
              <button onClick={() => setConvType("gpa_to_pct")} className={`px-3 py-1.5 rounded-xl border text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${convType === "gpa_to_pct" ? "bg-blue-500 text-white border-transparent" : "border-slate-200 dark:border-slate-800 text-slate-450"}`}>GPA to %</button>
              <button onClick={() => setConvType("pct_to_gpa")} className={`px-3 py-1.5 rounded-xl border text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${convType === "pct_to_gpa" ? "bg-blue-500 text-white border-transparent" : "border-slate-200 dark:border-slate-800 text-slate-450"}`}>% to GPA</button>
            </div>
            
            {convType === "gpa_to_pct" ? (
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between font-semibold">
                    <span>KTU GPA</span>
                    <span className="font-mono text-blue-600">{convGpa.toFixed(2)}</span>
                  </div>
                  <input type="range" min="4" max="10" step="0.05" value={convGpa} onChange={e => setConvGpa(Number(e.target.value))} className="w-full accent-blue-500 cursor-pointer h-1 rounded-lg bg-slate-100 dark:bg-slate-800" />
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center space-y-1">
                  <span className="text-[9px] font-bold text-slate-400 block uppercase font-sans">Equivalent Percentage</span>
                  <span className="text-3xl font-bold text-slate-900 dark:text-white font-mono">{(convGpa * 10).toFixed(1)}%</span>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between font-semibold">
                    <span>Percentage</span>
                    <span className="font-mono text-blue-600">{convPct}%</span>
                  </div>
                  <input type="range" min="40" max="100" step="1" value={convPct} onChange={e => setConvPct(Number(e.target.value))} className="w-full accent-blue-500 cursor-pointer h-1 rounded-lg bg-slate-100 dark:bg-slate-800" />
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center space-y-1">
                  <span className="text-[9px] font-bold text-slate-400 block uppercase font-sans">Equivalent KTU GPA</span>
                  <span className="text-3xl font-bold text-slate-900 dark:text-white font-mono">{(convPct / 10).toFixed(2)}</span>
                </div>
              </div>
            )}
          </div>
        );
      }
    },
    {
      id: "ects_converter",
      title: "ECTS Credit Converter",
      desc: "Convert your KTU credits to ECTS credits (European Credit Transfer System) for studying abroad.",
      category: "credits",
      tags: ["ects", "europe", "study abroad", "credits"],
      render: () => {
        const ects = ectsKtuCredits * 1.5;
        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase font-sans">KTU Credits earned</span>
              <input type="number" value={ectsKtuCredits} onChange={e => setEctsKtuCredits(Math.max(0, Number(e.target.value)))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 font-bold font-mono text-slate-900 dark:text-white" />
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center space-y-1">
              <span className="text-[9px] font-bold text-slate-400 block uppercase font-sans">ECTS Equivalent</span>
              <span className="text-3xl font-bold text-slate-900 dark:text-white font-mono">{ects.toFixed(1)} <span className="text-xs">ECTS</span></span>
              <span className="text-[9px] text-slate-400 block font-medium mt-1 font-sans">Standard conversion multiplier is 1.5</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "grace_marks_calc",
      title: "Grace Mark Finder",
      desc: "Estimate sessional/exam grace marks derived from external certificates.",
      category: "credits",
      tags: ["grace", "marks", "nss", "ncc", "sports"],
      render: () => {
        let percentage = 0;
        let info = "";
        
        if (graceCertType === "nss") {
          percentage = 3;
          info = "NSS Certificate holders receive 3% grace marks added to ESE.";
        } else if (graceCertType === "ncc_c") {
          percentage = 5;
          info = "NCC C-Certificate holders receive 5% grace marks added to ESE.";
        } else if (graceCertType === "ncc_b") {
          percentage = 3;
          info = "NCC B-Certificate holders receive 3% grace marks added to ESE.";
        } else if (graceCertType === "sports_zonal") {
          percentage = 2;
          info = "Zonal level sports participation gives 2% grace marks.";
        } else if (graceCertType === "sports_state") {
          percentage = 5;
          info = "State/National level sports achievements give 5% grace marks.";
        }

        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase font-sans">Certificate / Activity</span>
              <select value={graceCertType} onChange={e => setGraceCertType(e.target.value as any)} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-xl px-2 py-1.5 font-bold text-slate-900 dark:text-white">
                <option value="nss">NSS Volunteer (Regular)</option>
                <option value="ncc_c">NCC C-Certificate</option>
                <option value="ncc_b">NCC B-Certificate</option>
                <option value="sports_zonal">Sports (Zonal Level)</option>
                <option value="sports_state">Sports (State/National Level)</option>
              </select>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center space-y-1.5">
              <span className="text-[9px] font-bold text-slate-400 block uppercase font-sans">Est. ESE Grace Marks %</span>
              <span className="text-3xl font-bold text-slate-900 dark:text-white font-mono">{percentage}%</span>
              <span className="text-[9.5px] text-slate-450 block leading-relaxed">{info}</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "german_gpa",
      title: "German Grade Converter",
      desc: "Convert KTU CGPA to the German grading scale using the Modified Bavarian Formula.",
      category: "credits",
      tags: ["germany", "conversion", "bavarian", "gpa"],
      render: () => {
        const n_max = 10.0;
        const n_min = 5.5; // pass grade boundary under KTU 2024
        
        let displayResult = "1.0";
        if (germanCgpa < n_min) {
          displayResult = "Failed (Below pass boundary)";
        } else {
          const res = 1 + 3 * (n_max - germanCgpa) / (n_max - n_min);
          displayResult = res.toFixed(2);
        }

        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="space-y-1">
              <div className="flex justify-between font-bold text-slate-550">
                <span>KTU CGPA</span>
                <span className="font-mono text-blue-600">{germanCgpa.toFixed(2)}</span>
              </div>
              <input type="range" min="4" max="10" step="0.05" value={germanCgpa} onChange={e => setGermanCgpa(Number(e.target.value))} className="w-full accent-blue-500 cursor-pointer h-1 rounded-lg bg-slate-100 dark:bg-slate-800" />
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center space-y-1">
              <span className="text-[9px] font-bold text-slate-400 block uppercase font-sans">German Grade (Modified Bavarian Formula)</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-white font-mono">{displayResult}</span>
              <span className="text-[8.5px] text-slate-400 block mt-1">Scale: 1.0 (Best) to 4.0 (Pass boundary). Formula uses N_min = 5.5</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "reval_cost",
      title: "Revaluation Cost",
      desc: "Estimate total fee expenses for revaluation, scrutiny, or getting answer book photocopies.",
      category: "exams",
      tags: ["revaluation", "scrutiny", "costs", "fees"],
      render: () => {
        const base = revalPaperCount * 600;
        const photoFee = revalPhoto ? (revalPaperCount * 500) : 0;
        const scrutinyFee = revalScrutiny ? (revalPaperCount * 600) : 0;
        const total = base + photoFee + scrutinyFee;

        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="space-y-1">
              <div className="flex justify-between font-bold text-slate-550 flex-row">
                <span>Number of Papers</span>
                <span className="font-mono text-blue-600">{revalPaperCount} papers</span>
              </div>
              <input type="range" min="1" max="6" value={revalPaperCount} onChange={e => setRevalPaperCount(Number(e.target.value))} className="w-full accent-blue-500 cursor-pointer h-1 rounded-lg bg-slate-100 dark:bg-slate-800" />
            </div>
            <div className="grid grid-cols-2 gap-3 text-[10px] font-semibold py-1">
              <label className="flex items-center gap-2 select-none cursor-pointer">
                <input type="checkbox" checked={revalPhoto} onChange={e => setRevalPhoto(e.target.checked)} className="rounded border-slate-350" />
                <span>Get Photocopy (+₹500/pp)</span>
              </label>
              <label className="flex items-center gap-2 select-none cursor-pointer">
                <input type="checkbox" checked={revalScrutiny} onChange={e => setRevalScrutiny(e.target.checked)} className="rounded border-slate-350" />
                <span>Add Scrutiny (+₹600/pp)</span>
              </label>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center space-y-1.5">
              <span className="text-[9px] font-bold text-slate-400 block uppercase font-sans">Total Estimated Fee</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-white font-mono">₹{total}</span>
              <span className="text-[8.5px] text-slate-400 block font-medium">Revaluation fee: ₹600 per paper</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "mooc_mapper",
      title: "MOOC / NPTEL Planner",
      desc: "Determine credits weightage substitution mapping from NPTEL MOOC course lengths.",
      category: "credits",
      tags: ["mooc", "nptel", "credits", "substitution"],
      render: () => {
        let credits = 0;
        if (moocScore >= 40) {
          credits = moocDuration === 12 ? 3 : moocDuration === 8 ? 2 : 1;
        }

        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <span className="text-[9px] text-slate-400 font-bold uppercase font-sans">Course Duration</span>
                <select value={moocDuration} onChange={e => setMoocDuration(Number(e.target.value) as any)} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-xl px-2 py-1.5 font-bold text-slate-900 dark:text-white">
                  <option value={12}>12 Weeks (Full)</option>
                  <option value={8}>8 Weeks</option>
                  <option value={4}>4 Weeks</option>
                </select>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] text-slate-400 font-bold uppercase font-sans">Exam Score</span>
                <input type="number" value={moocScore} onChange={e => setMoocScore(Math.min(100, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 font-bold font-mono text-slate-900 dark:text-white" />
              </div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center space-y-1.5">
              <span className="text-[9px] font-bold text-slate-400 block uppercase font-sans">Substituted Credits</span>
              <span className="text-3xl font-bold text-slate-900 dark:text-white font-mono">{credits} <span className="text-xs font-sans">Credits</span></span>
              <span className="text-[8.5px] text-slate-400 block leading-tight font-medium">
                {moocScore >= 40 ? "Passing score met (>= 40)" : "Failed (Needs >= 40 score to substitute credits)"}
              </span>
            </div>
          </div>
        );
      }
    },
    {
      id: "internship_planner",
      title: "Internship Credits",
      desc: "Calculate credits substituted from your B.Tech industrial internship durations.",
      category: "labs",
      tags: ["internship", "credits", "industrial", "experience"],
      render: () => {
        let credits = 0;
        let details = "No credits awarded (needs minimum 2 weeks)";
        if (internDuration >= 4) {
          credits = 2;
          details = "Maximum 2 credits substituted";
        } else if (internDuration >= 2) {
          credits = 1;
          details = "1 credit substituted";
        }

        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="space-y-1">
              <div className="flex justify-between font-bold text-slate-500">
                <span>Internship Duration</span>
                <span className="font-mono text-blue-600">{internDuration} weeks</span>
              </div>
              <input type="range" min="1" max="6" value={internDuration} onChange={e => setInternDuration(Number(e.target.value))} className="w-full accent-blue-500 cursor-pointer h-1 rounded-lg bg-slate-100 dark:bg-slate-800" />
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center space-y-1">
              <span className="text-[9px] font-bold text-slate-400 block uppercase font-sans">Earned Credits</span>
              <span className="text-3xl font-bold text-slate-900 dark:text-white font-mono">{credits} <span className="text-xs">Credits</span></span>
              <span className="text-[9px] text-slate-400 block font-medium mt-1 font-sans">{details}</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "ects_hours",
      title: "ECTS Workload Planner",
      desc: "Calculate estimated student study/workload hours for European credit transfers.",
      category: "credits",
      tags: ["ects", "workload", "study hours", "abroad"],
      render: () => {
        const minHours = ectsWorkload * 25;
        const maxHours = ectsWorkload * 30;
        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="space-y-1">
              <div className="flex justify-between font-bold text-slate-500">
                <span>ECTS Credits</span>
                <span className="font-mono text-blue-600">{ectsWorkload} ECTS</span>
              </div>
              <input type="range" min="1" max="10" value={ectsWorkload} onChange={e => setEctsWorkload(Number(e.target.value))} className="w-full accent-blue-500 cursor-pointer h-1 rounded-lg bg-slate-100 dark:bg-slate-800" />
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center space-y-1">
              <span className="text-[9px] font-bold text-slate-400 block uppercase font-sans">Estimated Student Workload</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-white font-mono">{minHours} - {maxHours} <span className="text-xs">Hours</span></span>
              <span className="text-[8.5px] text-slate-400 block font-medium mt-1">Based on ECTS standard of 25 to 30 study hours per credit</span>
            </div>
          </div>
        );
      }
    },
    {
      id: "exam_slot_info",
      title: "Exam Slot Identifier",
      desc: "Find exam timetable slots and durations based on semester core curriculum structures.",
      category: "exams",
      tags: ["slots", "timetable", "exam schedule", "date"],
      render: () => {
        let details = "";
        if (slotLetter === "A" || slotLetter === "B") {
          details = "Typically matches heavy core curriculum courses (Mathematics, major department engineering sciences).";
        } else if (slotLetter === "C" || slotLetter === "D") {
          details = "Matches professional core/elective courses of moderate theoretical weightage.";
        } else {
          details = "Reserved for program electives, open electives, or minor degree program course exams.";
        }

        return (
          <div className="space-y-3 text-xs font-sans">
            <div className="space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase font-sans">Timetabled Slot</span>
              <select value={slotLetter} onChange={e => setSlotLetter(e.target.value)} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-xl px-2 py-1.5 font-bold text-slate-900 dark:text-white">
                <option value="A">Slot A</option>
                <option value="B">Slot B</option>
                <option value="C">Slot C</option>
                <option value="D">Slot D</option>
                <option value="E">Slot E</option>
                <option value="F">Slot F</option>
              </select>
            </div>
            <div className="p-3.5 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center space-y-1 font-medium">
              <span className="text-[9px] font-bold text-slate-400 block uppercase font-sans">Slot Profile Description</span>
              <span className="text-slate-700 dark:text-slate-355 block leading-relaxed mt-1">{details}</span>
            </div>
          </div>
        );
      }
    }
  ], [
    eseInt, eseGrade, gracePool, graceMarks, impAtt, impCie, impStatus, debtBacklogs,
    labCieAtt, labCieAssess, labEseProc, labEseExec, labEseRes, labEseViva, labEseRec,
    projGuide, projReport, projPresentation, semPres, semRep, semDef, decryptCode, usGpa10,
    foreCurrent, foreSems, foreTarget, cramHours, cramModules, bunkSubject, bunkReason,
    revalGrade, revalCie, condPct, condTimes, degCgpa, degBacklogs, convType, convGpa,
    convPct, ectsKtuCredits, graceCertType, germanCgpa, revalPaperCount, revalScrutiny,
    revalPhoto, moocDuration, moocScore, internDuration, ectsWorkload, slotLetter
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

  // Split into pinned and remaining
  const { pinnedList, remainingList } = useMemo(() => {
    const pinned = filteredTools.filter(t => pinnedTools.includes(t.id));
    const remaining = filteredTools.filter(t => !pinnedTools.includes(t.id));
    return { pinnedList: pinned, remainingList: remaining };
  }, [filteredTools, pinnedTools]);

  const toggleExpandTool = (id: string) => {
    triggerHaptic("light");
    setExpandedTool(id);
  };

  return (
    <div className="space-y-6 w-full relative">
      <style dangerouslySetInnerHTML={{ __html: `
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

      {/* Header Console */}
      <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/[0.04] p-3 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm backdrop-blur-xl font-sans">
        <div className="relative flex items-center w-full md:max-w-xs bg-white dark:bg-slate-955 border border-slate-200 dark:border-white/[0.04] focus-within:border-blue-500/30 dark:focus-within:border-blue-500/40 rounded-xl px-3 py-1.5 transition-all">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 dark:text-slate-505 pointer-events-none" />
          <input
            type="text"
            placeholder="Search micro-utilities..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-transparent pl-5.5 pr-2 py-0.5 text-xs font-semibold text-slate-800 dark:text-slate-150 placeholder-slate-400 dark:placeholder-slate-655 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-1 bg-slate-100/80 dark:bg-slate-905/60 p-1 rounded-xl border border-slate-200 dark:border-slate-800/80 overflow-x-auto scrollbar-none py-1.5 relative w-full md:w-auto">
          {categories.map(cat => {
            const isActive = activeCategory === cat.id;
            const TabIcon = categoryTabIcons[cat.id] || LayoutGrid;
            return (
              <button
                key={cat.id}
                onClick={(e) => {
                  triggerHaptic("light");
                  setActiveCategory(cat.id);
                  e.currentTarget.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center"
                  });
                }}
                className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors duration-350 whitespace-nowrap cursor-pointer select-none active:scale-[0.98] ${
                  isActive
                    ? "text-white dark:text-slate-950 font-extrabold"
                    : "text-slate-550 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryTabBackground"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-slate-900 dark:bg-white rounded-lg shadow-sm"
                  />
                )}
                <TabIcon className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pinned Utilities Section */}
      {pinnedList.length > 0 && (
        <div className="space-y-3 font-sans">
          <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-extrabold text-xs uppercase tracking-wider pl-1 select-none">
            <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
            <span>Pinned Utilities</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
            <AnimatePresence>
              {pinnedList.map(tool => {
                const Icon = toolIcons[tool.id] || categoryIcons[tool.category] || Calculator;
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
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="relative overflow-hidden group bg-white dark:bg-slate-900/40 border-2 border-amber-450/40 dark:border-amber-500/30 rounded-2xl p-5 shadow-[0_8px_30px_rgba(245,158,11,0.03)] dark:shadow-[0_8px_30px_rgba(245,158,11,0.08)] hover:shadow-lg hover:-translate-y-1 hover:border-amber-450 dark:hover:border-amber-450 transition-all duration-300 flex flex-col justify-between cursor-pointer h-[165px]"
                    onClick={() => toggleExpandTool(tool.id)}
                  >
                    <div className="relative z-10 flex flex-col justify-between h-full w-full">
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${iconStyle} transition-all duration-300 group-hover:scale-105 shrink-0`}>
                              <Icon className="w-4.5 h-4.5 stroke-[1.5]" />
                            </div>
                            <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 tracking-tight leading-tight group-hover:text-slate-955 dark:group-hover:text-white transition-colors font-display truncate">
                              {tool.title}
                            </h4>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                togglePin(tool.id);
                              }}
                              className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-amber-500 active:scale-90 transition-all cursor-pointer"
                              aria-label={`Unpin ${tool.title}`}
                            >
                              <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                            </button>
                            <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wider uppercase ${badgeStyle} shrink-0`}>
                              {tool.category}
                            </span>
                          </div>
                        </div>
                        <p className="text-[11.5px] text-slate-500 dark:text-slate-400 font-medium leading-normal mt-3 line-clamp-2 font-sans">
                          {tool.desc}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-[9.5px] font-extrabold text-blue-600 dark:text-blue-400 transition-colors uppercase tracking-wider mt-3">
                        <span>Use Utility</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Main Grid */}
      <div className="space-y-3 font-sans">
        {pinnedList.length > 0 && (
          <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 font-extrabold text-xs uppercase tracking-wider pl-1 select-none pt-2">
            <span>All Utilities</span>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          <AnimatePresence>
            {remainingList.map(tool => {
              const Icon = toolIcons[tool.id] || categoryIcons[tool.category] || Calculator;
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
                  className="relative overflow-hidden group bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-white/[0.04] rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.015)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-lg hover:-translate-y-1 hover:border-blue-500/20 dark:hover:border-blue-500/30 hover:bg-slate-50/50 dark:hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between cursor-pointer h-[165px] hover:scale-[1.005]"
                  onClick={() => toggleExpandTool(tool.id)}
                >
                  <div className="relative z-10 flex flex-col justify-between h-full w-full">
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${iconStyle} transition-all duration-300 group-hover:scale-105 shrink-0`}>
                            <Icon className="w-4.5 h-4.5 stroke-[1.5]" />
                          </div>
                          <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 tracking-tight leading-tight group-hover:text-slate-955 dark:group-hover:text-white transition-colors font-display truncate">
                            {tool.title}
                          </h4>
                        </div>
                        <div className="flex items-center gap-1 text-[10px]">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              togglePin(tool.id);
                            }}
                            className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-amber-500 active:scale-90 transition-all cursor-pointer"
                            aria-label={`Pin ${tool.title}`}
                          >
                            <Star className="w-4 h-4 text-slate-350 dark:text-slate-600 hover:text-amber-500" />
                          </button>
                          <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wider uppercase ${badgeStyle} shrink-0`}>
                            {tool.category}
                          </span>
                        </div>
                      </div>
                      <p className="text-[11.5px] text-slate-500 dark:text-slate-400 font-medium leading-normal mt-3 line-clamp-2 font-sans">
                        {tool.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[9.5px] font-extrabold text-blue-600 dark:text-blue-450 transition-colors uppercase tracking-wider mt-3">
                      <span>Use Utility</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {filteredTools.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 px-4 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/10 text-center">
          <AlertCircle className="w-10 h-10 text-slate-350 dark:text-slate-650 mb-3" />
          <span className="text-xs font-bold text-slate-550 dark:text-slate-455 uppercase tracking-widest block mb-1">No Micro-tools Found</span>
          <span className="text-xs text-slate-450 dark:text-slate-550 max-w-xs block leading-normal">
            No tools match &quot;{searchQuery}&quot; or the selected category. Try clearing your search parameters.
          </span>
        </div>
      )}

      {/* Drawer/Modal Overlay */}
      <AnimatePresence>
        {expandedTool && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedTool(null)}
              className="fixed inset-0 z-55 bg-slate-950/20 dark:bg-black/50 backdrop-blur-md"
            />

            {(() => {
              const activeTool = toolsData.find(t => t.id === expandedTool);
              if (!activeTool) return null;
              const ToolIcon = toolIcons[activeTool.id] || categoryIcons[activeTool.category] || Calculator;

              return (
                <div className="fixed inset-0 z-55 pointer-events-none flex items-end md:items-center justify-center p-0 md:p-4">
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
                    <div className="shrink-0 px-6 pt-3 pb-4 border-b border-slate-100 dark:border-white/[0.03] relative bg-slate-50/50 dark:bg-slate-900/10">
                      <div className="w-12 h-1 bg-slate-350 dark:bg-slate-800 rounded-full mx-auto mb-3 block md:hidden" />
                      <div className="flex items-start justify-between mt-1">
                        <div className="flex items-center gap-3.5">
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/[0.04] border border-slate-250/20 dark:border-white/[0.04]">
                            <ToolIcon className="w-4.5 h-4.5 text-slate-600 dark:text-slate-355 stroke-[1.5] shrink-0" />
                          </div>
                          <div>
                            <span className="text-[8px] font-bold uppercase text-slate-455 dark:text-slate-500 tracking-[0.18em] block leading-none mb-1.5">
                              {activeTool.category}
                            </span>
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-tight leading-none font-display">
                              {activeTool.title}
                            </h3>
                          </div>
                        </div>

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

                      <p className="mt-3 text-[11.5px] text-slate-550 dark:text-slate-400 leading-relaxed font-medium font-sans">
                        {activeTool.desc}
                      </p>
                    </div>

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
