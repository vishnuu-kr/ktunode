"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, 
  ChevronDown, 
  ChevronUp, 
  Trash2, 
  Plus, 
  RotateCcw, 
  Award, 
  Search, 
  Settings, 
  X,
  Check,
  GraduationCap
} from "lucide-react";
import confetti from "canvas-confetti";
import ktu2024Scheme from "@/data/ktu_2024_scheme.json";

// Standard grade points mapping for KTU 2024 Scheme
const DEFAULT_GRADE_POINTS: Record<string, number> = {
  "--": -1, // Not selected
  "S": 10.0,
  "A+": 9.0,
  "A": 8.5,
  "B+": 8.0,
  "B": 7.5,
  "C+": 7.0,
  "C": 6.5,
  "D": 6.0,
  "P": 5.5,
  "F": 0.0,
  "FE": 0.0,
  "Ab": 0.0
};

interface DatabaseSubject {
  sno: number;
  name: string;
  credits: number;
}

interface SemesterData {
  semester: number;
  subjects: DatabaseSubject[];
}

interface ActiveSubject {
  id: string;
  sno: number;
  name: string;
  credits: number;
  grade: string;
}

export default function GpaCalculator() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"presets" | "universal">("presets");
  
  // Scheme database
  const [schemeData] = useState<Record<string, SemesterData[]>>(ktu2024Scheme as unknown as Record<string, SemesterData[]>);
  const [selectedBranch, setSelectedBranch] = useState(() => {
    const keys = Object.keys(ktu2024Scheme);
    return keys.includes("Computer Science and Engineering")
      ? "Computer Science and Engineering"
      : (keys.length > 0 ? keys[0] : "");
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [isBranchDropdownOpen, setIsBranchDropdownOpen] = useState(false);

  // Grading scheme state (for Universal mode & custom setups)
  const [gradePoints, setGradePoints] = useState<Record<string, number>>(DEFAULT_GRADE_POINTS);
  const [isEditingGrades, setIsEditingGrades] = useState(false);

  // Active semesters and courses state
  // key: semester number (1-8 for presets, custom for universal)
  const [semesters, setSemesters] = useState<Record<number, ActiveSubject[]>>({});
  const [collapsedSemesters, setCollapsedSemesters] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true
  });

  // Modal / Calculations Breakdown State
  const [isBreakdownOpen, setIsBreakdownOpen] = useState(false);

  // Load database
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Initialize/Load semester state when selectedBranch or activeTab changes
  useEffect(() => {
    if (!mounted) return;

    const timer = setTimeout(() => {
      if (activeTab === "presets") {
        const storageKey = `ktunode_gpa_v3_preset_${selectedBranch.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`;
        const saved = localStorage.getItem(storageKey);
        
        if (saved) {
          try {
            setSemesters(JSON.parse(saved));
            return;
          } catch {}
        }

        // Populate from database (Load Semester 1 and Semester 2 by default)
        const branchSemesters = schemeData[selectedBranch];
        if (branchSemesters) {
          const initialSemesters: Record<number, ActiveSubject[]> = {};
          const sem1Data = branchSemesters.find(s => s.semester === 1);
          if (sem1Data) {
            initialSemesters[1] = sem1Data.subjects.map((sub, idx) => ({
              id: `sub_1_${idx}_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
              sno: sub.sno,
              name: sub.name,
              credits: sub.credits,
              grade: "--"
            }));
          }
          const sem2Data = branchSemesters.find(s => s.semester === 2);
          if (sem2Data) {
            initialSemesters[2] = sem2Data.subjects.map((sub, idx) => ({
              id: `sub_2_${idx}_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
              sno: sub.sno,
              name: sub.name,
              credits: sub.credits,
              grade: "--"
            }));
          }
          setSemesters(initialSemesters);
          setCollapsedSemesters({ 1: false, 2: false });
        }
      } else {
        // Universal tab initialization
        const storageKey = `ktunode_gpa_v3_universal`;
        const saved = localStorage.getItem(storageKey);
        
        if (saved) {
          try {
            setSemesters(JSON.parse(saved));
            return;
          } catch {}
        }

        const initialSemesters: Record<number, ActiveSubject[]> = {
          1: [
            { id: "univ_1_1", sno: 1, name: "Engineering Subject 1", credits: 4, grade: "--" },
            { id: "univ_1_2", sno: 2, name: "Engineering Subject 2", credits: 3, grade: "--" },
            { id: "univ_1_3", sno: 3, name: "Laboratory Course", credits: 1, grade: "--" }
          ],
          2: [
            { id: "univ_2_1", sno: 1, name: "Core Course 1", credits: 4, grade: "--" },
            { id: "univ_2_2", sno: 2, name: "Elective Course", credits: 3, grade: "--" },
            { id: "univ_2_3", sno: 3, name: "Seminar / Project", credits: 2, grade: "--" }
          ]
        };
        setSemesters(initialSemesters);
        setCollapsedSemesters({ 1: false, 2: false });
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [selectedBranch, activeTab, schemeData, mounted]);

  // Persist semesters in local storage
  const saveSemestersState = (updated: Record<number, ActiveSubject[]>) => {
    setSemesters(updated);
    if (activeTab === "presets") {
      const storageKey = `ktunode_gpa_v3_preset_${selectedBranch.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`;
      localStorage.setItem(storageKey, JSON.stringify(updated));
    } else {
      localStorage.setItem(`ktunode_gpa_v3_universal`, JSON.stringify(updated));
    }
  };

  // List of branches filtered by search query
  const filteredBranches = useMemo(() => {
    const keys = Object.keys(schemeData);
    if (!searchQuery) return keys;
    return keys.filter(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [schemeData, searchQuery]);

  // Handle grade change
  const handleGradeChange = (semesterNum: number, subjectId: string, grade: string) => {
    const updated = { ...semesters };
    updated[semesterNum] = updated[semesterNum].map(sub => 
      sub.id === subjectId ? { ...sub, grade } : sub
    );
    saveSemestersState(updated);
  };

  // Handle subject detail change (credits or name)
  const handleSubjectChange = (
    semesterNum: number, 
    subjectId: string, 
    field: "name" | "credits", 
    value: string | number
  ) => {
    const updated = { ...semesters };
    updated[semesterNum] = updated[semesterNum].map(sub => {
      if (sub.id === subjectId) {
        if (field === "credits") {
          return { ...sub, credits: Math.max(0, Number(value) || 0) };
        }
        return { ...sub, name: String(value) };
      }
      return sub;
    });
    saveSemestersState(updated);
  };

  // Remove a subject
  const handleRemoveSubject = (semesterNum: number, subjectId: string) => {
    const updated = { ...semesters };
    updated[semesterNum] = updated[semesterNum].filter(sub => sub.id !== subjectId)
      .map((sub, idx) => ({ ...sub, sno: idx + 1 })); // Re-sno
    saveSemestersState(updated);
  };

  // Add a new empty subject
  const handleAddSubject = (semesterNum: number) => {
    const updated = { ...semesters };
    const nextSno = (updated[semesterNum]?.length || 0) + 1;
    const newSub: ActiveSubject = {
      id: `custom_${semesterNum}_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      sno: nextSno,
      name: "New Course Slot",
      credits: 3,
      grade: "--"
    };
    updated[semesterNum] = [...(updated[semesterNum] || []), newSub];
    saveSemestersState(updated);
  };

  // Add next semester (Preset-loaded or custom empty) up to Sem 8 max
  const handleAddSemester = () => {
    const keys = Object.keys(semesters).map(Number);
    
    // Find the first missing semester number from 1 to 8
    let nextSem = -1;
    for (let i = 1; i <= 8; i++) {
      if (!keys.includes(i)) {
        nextSem = i;
        break;
      }
    }
    
    if (nextSem === -1) {
      alert("All 8 Semesters are already added! APJAKTU B.Tech degrees are capped at Semester 8.");
      return;
    }

    const updated = { ...semesters };

    if (activeTab === "presets") {
      const branchSemesters = schemeData[selectedBranch];
      const nextSemData = branchSemesters ? branchSemesters.find(s => s.semester === nextSem) : null;
      if (nextSemData) {
        updated[nextSem] = nextSemData.subjects.map((sub, idx) => ({
          id: `sub_${nextSem}_${idx}_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          sno: sub.sno,
          name: sub.name,
          credits: sub.credits,
          grade: "--"
        }));
      } else {
        updated[nextSem] = [
          { id: `custom_${nextSem}_1_${Date.now()}`, sno: 1, name: "Core Course Slot 1", credits: 3, grade: "--" }
        ];
      }
    } else {
      updated[nextSem] = [
        { id: `custom_${nextSem}_1_${Date.now()}`, sno: 1, name: "Course Slot 1", credits: 3, grade: "--" }
      ];
    }

    setCollapsedSemesters(prev => ({ ...prev, [nextSem]: false }));
    saveSemestersState(updated);
  };

  // Remove an entire semester card
  const handleRemoveSemester = (semesterNum: number) => {
    if (!confirm(`Are you sure you want to remove Semester ${semesterNum} card?`)) return;
    const updated = { ...semesters };
    delete updated[semesterNum];
    saveSemestersState(updated);
  };

  // Reset active configurations
  const handleReset = () => {
    if (!confirm("Are you sure you want to reset all grades for this calculator?")) return;
    
    if (activeTab === "presets") {
      const branchSemesters = schemeData[selectedBranch];
      if (branchSemesters) {
        const initialSemesters: Record<number, ActiveSubject[]> = {};
        const sem1Data = branchSemesters.find(s => s.semester === 1);
        if (sem1Data) {
          initialSemesters[1] = sem1Data.subjects.map((sub, idx) => ({
            id: `sub_1_${idx}_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
            sno: sub.sno,
            name: sub.name,
            credits: sub.credits,
            grade: "--"
          }));
        }
        const sem2Data = branchSemesters.find(s => s.semester === 2);
        if (sem2Data) {
          initialSemesters[2] = sem2Data.subjects.map((sub, idx) => ({
            id: `sub_2_${idx}_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
            sno: sub.sno,
            name: sub.name,
            credits: sub.credits,
            grade: "--"
          }));
        }
        saveSemestersState(initialSemesters);
        setCollapsedSemesters({ 1: false, 2: false });
      }
    } else {
      const initialSemesters: Record<number, ActiveSubject[]> = {
        1: [
          { id: "univ_1_1", sno: 1, name: "Engineering Subject 1", credits: 4, grade: "--" },
          { id: "univ_1_2", sno: 2, name: "Engineering Subject 2", credits: 3, grade: "--" },
          { id: "univ_1_3", sno: 3, name: "Laboratory Course", credits: 1, grade: "--" }
        ],
        2: [
          { id: "univ_2_1", sno: 1, name: "Core Course 1", credits: 4, grade: "--" },
          { id: "univ_2_2", sno: 2, name: "Elective Course", credits: 3, grade: "--" },
          { id: "univ_2_3", sno: 3, name: "Seminar / Project", credits: 2, grade: "--" }
        ]
      };
      saveSemestersState(initialSemesters);
      setCollapsedSemesters({ 1: false, 2: false });
    }
  };

  // Calculate SGPA for a single semester
  const getSemesterSGPA = (semesterNum: number) => {
    const subjects = semesters[semesterNum] || [];
    let totalPoints = 0;
    let totalCredits = 0;
    let gradedCount = 0;

    subjects.forEach(sub => {
      const points = gradePoints[sub.grade];
      if (points !== undefined && points !== -1) {
        totalPoints += points * sub.credits;
        totalCredits += sub.credits;
        gradedCount++;
      }
    });

    if (totalCredits === 0 || gradedCount === 0) return "0.00";
    return (totalPoints / totalCredits).toFixed(2);
  };

  // Calculate CGPA across all active/filled semesters
  const overallCalculations = useMemo(() => {
    let grandPoints = 0;
    let grandCredits = 0;
    const semestersBreakdown: Record<number, { sgpa: number, credits: number, earnedPoints: number, isGraded: boolean }> = {};

    Object.keys(semesters).map(Number).forEach(semNum => {
      const subjects = semesters[semNum] || [];
      let semPoints = 0;
      let semCredits = 0;
      let isGraded = false;

      subjects.forEach(sub => {
        const points = gradePoints[sub.grade];
        if (points !== undefined && points !== -1) {
          semPoints += points * sub.credits;
          semCredits += sub.credits;
          isGraded = true;
        }
      });

      if (isGraded && semCredits > 0) {
        grandPoints += semPoints;
        grandCredits += semCredits;
        semestersBreakdown[semNum] = {
          sgpa: parseFloat((semPoints / semCredits).toFixed(2)),
          credits: semCredits,
          earnedPoints: semPoints,
          isGraded: true
        };
      } else {
        semestersBreakdown[semNum] = {
          sgpa: 0,
          credits: 0,
          earnedPoints: 0,
          isGraded: false
        };
      }
    });

    const cgpa = grandCredits > 0 ? (grandPoints / grandCredits) : 0;
    const percentage = cgpa > 0 ? Math.max(0, cgpa * 10 - 3.75) : 0;

    return {
      cgpa: cgpa.toFixed(2),
      totalCredits: grandCredits,
      percentage: percentage.toFixed(2),
      semesters: semestersBreakdown
    };
  }, [semesters, gradePoints]);

  // Confetti!
  useEffect(() => {
    if (!mounted) return;
    const cgpaVal = parseFloat(overallCalculations.cgpa);
    if (cgpaVal >= 9.0) {
      confetti({
        particleCount: 60,
        spread: 50,
        origin: { y: 0.8 },
        colors: ["#3b82f6", "#6366f1", "#a78bfa", "#facc15"]
      });
    }
  }, [overallCalculations.cgpa, mounted]);

  // Toggle semester cards
  const toggleSemester = (semNum: number) => {
    setCollapsedSemesters(prev => ({
      ...prev,
      [semNum]: !prev[semNum]
    }));
  };

  if (!mounted) return null;

  return (
    <div className="w-full space-y-4 sm:space-y-6">
      
      {/* 1. Header / Clean Floating Stat Strip */}
      <div className="w-full bg-white/80 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/60 dark:border-white/[0.06] rounded-2xl shadow-lg dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] p-3 sm:p-4 md:p-5 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 dark:text-blue-400 shrink-0">
            <Award className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase block leading-none">Cumulative CGPA</span>
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="text-4xl font-light tracking-tight text-slate-900 dark:text-white font-mono font-variant-numeric: tabular-nums">
                {overallCalculations.cgpa}
              </span>
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider">/ 10.0</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 justify-center">
          <div className="text-right hidden min-[400px]:block">
            <span className="block text-[8px] font-black text-slate-400 uppercase tracking-wider leading-none">CREDITS EARNED</span>
            <span className="text-xs font-black text-slate-700 dark:text-slate-300 mt-1 block tabular-nums">{overallCalculations.totalCredits} cr</span>
          </div>
          <div className="text-right hidden min-[400px]:block">
            <span className="block text-[8px] font-black text-slate-400 uppercase tracking-wider leading-none">EQUIVALENT</span>
            <span className="text-xs font-black text-slate-700 dark:text-slate-300 mt-1 block tabular-nums">{overallCalculations.percentage}%</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsBreakdownOpen(true)}
              className="text-xs font-black text-blue-600 dark:text-blue-400 bg-blue-500/10 hover:bg-blue-500/15 px-3.5 py-2 rounded-xl transition-all cursor-pointer shadow-sm border border-blue-500/10"
            >
              Audit Details
            </button>
            <button
              onClick={handleReset}
              className="text-slate-400 hover:text-rose-500 p-2 rounded-xl border border-slate-200/50 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 transition-colors cursor-pointer"
              title="Reset grades"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Sleek Controls */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-3.5">
        
        {/* Sleek Toggles */}
        <div className="flex p-0.5 rounded-xl bg-slate-950/[0.03] dark:bg-white/[0.03] border border-slate-950/[0.04] dark:border-white/[0.04] self-start">
          <button
            onClick={() => setActiveTab("presets")}
            className={`px-3.5 py-1.5 rounded-lg text-[11px] font-black tracking-wide transition-all cursor-pointer ${
              activeTab === "presets"
                ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-500 hover:text-slate-750 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            KTU 2024 Scheme
          </button>
          <button
            onClick={() => setActiveTab("universal")}
            className={`px-3.5 py-1.5 rounded-lg text-[11px] font-black tracking-wide transition-all cursor-pointer ${
              activeTab === "universal"
                ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-500 hover:text-slate-750 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            Universal Sandbox
          </button>
        </div>

        {/* Minimal Branch Dropdown (search) */}
        {activeTab === "presets" && (
          <div className="relative w-full md:w-[260px] self-end md:self-auto">
            <div 
              onClick={() => setIsBranchDropdownOpen(!isBranchDropdownOpen)}
              className="flex items-center justify-between w-full bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800/80 rounded-xl px-3 py-1.5 text-xs font-bold cursor-pointer text-slate-750 dark:text-slate-100 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all select-none"
            >
              <span className="truncate pr-3">{selectedBranch}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </div>

            <AnimatePresence>
              {isBranchDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-45" onClick={() => setIsBranchDropdownOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 2 }}
                    className="absolute right-0 top-full mt-1.5 w-full z-50 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl p-2 overflow-hidden"
                  >
                    <div className="relative flex items-center mb-1.5">
                      <Search className="absolute left-2.5 w-3 h-3 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search branches..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-150 dark:border-slate-800 rounded-lg pl-7.5 pr-2 py-1 text-xs font-semibold focus:outline-none"
                      />
                    </div>

                    <div className="max-h-[180px] overflow-y-auto space-y-0.5 scrollbar-none">
                      {filteredBranches.length > 0 ? (
                        filteredBranches.map(branchName => (
                          <button
                            key={branchName}
                            onClick={() => {
                              setSelectedBranch(branchName);
                              setIsBranchDropdownOpen(false);
                              setSearchQuery("");
                            }}
                            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all truncate flex items-center justify-between cursor-pointer ${
                              selectedBranch === branchName
                                ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                                : "hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-350"
                            }`}
                          >
                            <span className="truncate">{branchName}</span>
                            {selectedBranch === branchName && <Check className="w-3 h-3 text-blue-500 shrink-0" />}
                          </button>
                        ))
                      ) : (
                        <div className="text-[10px] font-bold text-slate-400 text-center py-3">No departments.</div>
                      )}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* 3. Collapse accordion stack of semesters */}
      <div className="space-y-2">
        {Object.keys(semesters).map(Number).sort((a, b) => a - b).map((semNum) => {
          const isCollapsed = collapsedSemesters[semNum];
          const semSgpa = getSemesterSGPA(semNum);
          const activeSubs = semesters[semNum] || [];

          return (
            <div
              key={semNum}
              className="bg-white/60 dark:bg-slate-900/20 border border-slate-200/40 dark:border-white/[0.04] rounded-xl overflow-hidden p-3 px-3.5 sm:p-3.5 sm:px-4 transition-all duration-200 hover:border-slate-300/60 dark:hover:border-white/[0.08]"
            >
              
              {/* Semester strip trigger */}
              <div
                onClick={() => toggleSemester(semNum)}
                className="flex items-center justify-between cursor-pointer select-none"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/5 dark:bg-blue-400/5 flex items-center justify-center text-blue-500/80 shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 dark:text-slate-100 text-sm">
                      Semester {semNum}
                    </h4>
                    <span className="text-[9px] font-bold text-slate-400/80 block mt-0.5">
                      {activeSubs.length} Courses • {activeSubs.reduce((acc, s) => acc + s.credits, 0)} Credits
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {semSgpa !== "0.00" && (
                    <div className="px-2 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black tracking-wider tabular-nums">
                      SGPA: {semSgpa}
                    </div>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveSemester(semNum);
                    }}
                    className="p-1 rounded text-slate-450 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all cursor-pointer mr-1"
                    title={`Delete Semester ${semNum} Card`}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  {isCollapsed ? (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  ) : (
                    <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </div>
              </div>

              {/* Collapsible Subject details */}
              <AnimatePresence initial={false}>
                {!isCollapsed && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden mt-4 pt-3 border-t border-slate-100 dark:border-slate-900"
                  >
                    
                    {/* Clean Borderless Table Inputs */}
                    <div className="space-y-2">
                      <div className="grid grid-cols-12 gap-2 px-1 text-[9px] font-black text-slate-400/70 tracking-widest uppercase mb-1">
                        <div className="col-span-7 sm:col-span-8">Course Details</div>
                        <div className="col-span-2 text-center">Credits</div>
                        <div className="col-span-3 sm:col-span-2 text-center">Grade</div>
                      </div>

                      <div className="space-y-1">
                        {activeSubs.map((c) => (
                          <div
                            key={c.id}
                            className="grid grid-cols-12 gap-2 items-center p-1 py-1.5 rounded-lg hover:bg-slate-950/[0.015] dark:hover:bg-white/[0.015] transition-colors"
                          >
                            
                            {/* borderless inline name input */}
                            <div className="col-span-7 sm:col-span-8 min-w-0 flex items-center gap-1.5">
                              <button
                                onClick={() => handleRemoveSubject(semNum, c.id)}
                                className="text-slate-300 hover:text-rose-500 transition-colors p-0.5 shrink-0 cursor-pointer"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                              
                              <input
                                type="text"
                                value={c.name}
                                onChange={(e) => handleSubjectChange(semNum, c.id, "name", e.target.value)}
                                className="font-semibold text-xs bg-transparent border-b border-transparent hover:border-slate-200 dark:hover:border-slate-800 focus:border-blue-500/30 text-slate-850 dark:text-slate-100 focus:outline-none w-full py-0.5 focus:px-1 rounded-md transition-all text-ellipsis"
                              />
                            </div>

                            {/* borderless inline credits input */}
                            <div className="col-span-2 text-center">
                              <input
                                type="number"
                                min="0"
                                max="10"
                                value={c.credits === 0 ? "" : c.credits}
                                placeholder="0"
                                onChange={(e) => handleSubjectChange(semNum, c.id, "credits", e.target.value)}
                                className="w-10 text-center bg-transparent border-b border-transparent hover:border-slate-200 dark:hover:border-slate-800 focus:border-blue-500/30 font-black text-xs text-slate-700 dark:text-slate-350 focus:outline-none py-0.5 rounded-md transition-all"
                              />
                            </div>

                            {/* borderless inline select grade */}
                            <div className="col-span-3 sm:col-span-2 text-center">
                              <select
                                value={c.grade}
                                onChange={(e) => handleGradeChange(semNum, c.id, e.target.value)}
                                className="w-full bg-transparent border-b border-transparent hover:border-slate-200 dark:hover:border-slate-800 focus:border-blue-500/30 text-center font-extrabold text-xs focus:outline-none py-0.5 rounded-md transition-all text-slate-750 dark:text-slate-200 cursor-pointer"
                              >
                                {Object.keys(gradePoints).map((g) => (
                                  <option key={g} value={g}>{g}</option>
                                ))}
                              </select>
                            </div>

                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-2">
                      <button
                        onClick={() => handleAddSubject(semNum)}
                        className="flex items-center gap-1 text-[9px] font-black text-blue-600 dark:text-blue-400 hover:bg-blue-500/5 px-2 py-1 rounded-lg transition-all cursor-pointer"
                      >
                        <Plus className="w-3 h-3" /> Add Slot
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          );
        })}
      </div>

      {/* Dynamic All-tab Add Semester Card Button */}
      <div className="flex justify-center pt-2">
        {(() => {
          const keys = Object.keys(semesters).map(Number);
          let nextSem = -1;
          for (let i = 1; i <= 8; i++) {
            if (!keys.includes(i)) {
              nextSem = i;
              break;
            }
          }
          if (nextSem === -1) return null; // Hide if all 8 are added!
          
          return (
            <button
              onClick={handleAddSemester}
              className="flex items-center gap-1.5 text-[10px] font-black text-white dark:text-slate-900 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white px-4.5 py-2.5 rounded-xl transition-all cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <Plus className="w-4 h-4" /> Add Semester S{nextSem} Card
            </button>
          );
        })()}
      </div>

      {/* CALCULATIONS BREAKDOWN MODAL DRAWER */}
      <AnimatePresence>
        {isBreakdownOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBreakdownOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 350 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-slate-950 z-50 shadow-2xl p-6 flex flex-col border-l border-slate-100 dark:border-slate-900 overflow-y-auto scrollbar-none"
            >
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-900">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4.5 h-4.5 text-blue-500" />
                  <h4 className="text-sm font-black text-slate-900 dark:text-slate-50">Tally Audit Details</h4>
                </div>
                <button
                  onClick={() => setIsBreakdownOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              <div className="flex-1 py-5 space-y-5">
                
                <div className="bg-slate-950/[0.01] dark:bg-white/[0.01] border border-blue-500/10 rounded-2xl p-3.5 space-y-2">
                  <span className="text-[8px] font-black text-blue-600 dark:text-blue-400 tracking-wider uppercase block leading-none">Equation</span>
                  <div className="text-center font-mono text-[11px] font-extrabold text-slate-800 dark:text-slate-100 bg-white/50 dark:bg-slate-900/50 p-2 rounded-xl border border-slate-200/50 dark:border-slate-850">
                    Σ(Points × Credits) ÷ Σ(Graded Credits)
                  </div>
                  <div className="space-y-1 text-xs pt-1.5">
                    <div className="flex justify-between text-slate-500">
                      <span>Total Points:</span>
                      <span className="font-bold text-slate-850 dark:text-slate-200">
                        {Object.values(overallCalculations.semesters)
                          .reduce((acc, sem) => acc + sem.earnedPoints, 0)
                          .toFixed(1)}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Graded Credits:</span>
                      <span className="font-bold text-slate-850 dark:text-slate-200">
                        {overallCalculations.totalCredits}
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline border-t border-slate-100 dark:border-slate-850 pt-2 font-black text-slate-800 dark:text-slate-200 text-xs">
                      <span>Audited CGPA:</span>
                      <span className="text-base text-blue-600 dark:text-blue-400 font-mono">
                        {overallCalculations.cgpa}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 dark:bg-slate-900/20 border border-slate-200/40 dark:border-white/[0.05] rounded-xl p-3.5 text-xs">
                  <span className="text-[10px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase block mb-2 leading-none">Percentage Formula</span>
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-400">(CGPA × 10) - 3.75 =</span>
                    <span className="font-bold text-slate-900 dark:text-white font-mono">
                      ({overallCalculations.cgpa} × 10) - 3.75 = <span className="text-violet-600 dark:text-violet-400 text-sm font-black">{overallCalculations.percentage}%</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  <span className="text-[8px] font-black text-slate-400 tracking-wider uppercase block leading-none">Active Semester Breakdowns</span>
                  
                  {Object.keys(semesters).map(Number).sort((a, b) => a - b).map(semNum => {
                    const breakdown = overallCalculations.semesters[semNum];
                    if (!breakdown || !breakdown.isGraded) return null;

                    return (
                      <div 
                        key={semNum}
                        className="bg-slate-950/[0.005] dark:bg-white/[0.005] border border-slate-250/50 dark:border-slate-900 rounded-xl p-3 space-y-2 text-xs"
                      >
                        <div className="flex items-center justify-between font-bold">
                          <span className="text-slate-750 dark:text-slate-250">Semester {semNum}</span>
                          <span className="font-mono text-blue-600 dark:text-blue-400">SGPA: {breakdown.sgpa}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-400 font-mono pt-1 border-t border-slate-100 dark:border-slate-900">
                          <span>Values:</span>
                          <span>{breakdown.earnedPoints.toFixed(1)} pts ÷ {breakdown.credits} cr</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Advanced modification options toggler */}
      <div className="flex items-center gap-2 pt-1 border-t border-slate-150/40 dark:border-slate-850/40">
        <button
          onClick={() => setIsEditingGrades(!isEditingGrades)}
          className="flex items-center gap-1.5 text-[9px] font-black text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer"
        >
          <Settings className="w-3 h-3" /> Adjust Letter Grade Weights
        </button>

        <AnimatePresence>
          {isEditingGrades && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsEditingGrades(false)} />
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl w-full max-w-md shadow-2xl">
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800 mb-4">
                  <span className="text-xs font-black text-slate-800 dark:text-slate-200">Adjust letter grade scale:</span>
                  <button onClick={() => setIsEditingGrades(false)} className="text-slate-400 hover:text-slate-600"><X className="w-4 h-4" /></button>
                </div>
                <div className="grid grid-cols-3 gap-2 max-h-[220px] overflow-y-auto scrollbar-none pr-1">
                  {Object.keys(DEFAULT_GRADE_POINTS).filter(g => g !== "--").map(grade => (
                    <div key={grade} className="flex flex-col p-2 bg-slate-950/[0.02] dark:bg-white/[0.02] border border-slate-950/[0.03] rounded-xl text-center">
                      <span className="text-[10px] font-black text-slate-700 dark:text-slate-350">{grade}</span>
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="20"
                        value={gradePoints[grade]}
                        onChange={(e) => {
                          const val = parseFloat(e.target.value) || 0;
                          setGradePoints(prev => ({ ...prev, [grade]: val }));
                        }}
                        className="w-full text-center font-bold text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md py-0.5 mt-1 focus:outline-none"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4.5 border-t border-slate-100 dark:border-slate-850 pt-3">
                  <button onClick={() => setGradePoints(DEFAULT_GRADE_POINTS)} className="text-[9px] font-bold text-slate-400 hover:text-slate-600 flex items-center gap-1 cursor-pointer"><RotateCcw className="w-3 h-3" /> Reset defaults</button>
                  <button onClick={() => setIsEditingGrades(false)} className="text-[10px] font-black text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-xl cursor-pointer">Save Changes</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
