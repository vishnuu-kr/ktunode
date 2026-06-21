"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  X, Search, ArrowLeft, ArrowRight, Loader2,
  Laptop, Cpu, Wrench, Building, Zap, BookOpen
} from "lucide-react";
import { triggerHaptic } from "@/lib/haptic";
import { siteConfig } from "@/lib/site";

function getBranchIcon(code: string) {
  const c = code.toLowerCase();
  if (c.includes("computer") || c.includes("artificial") || c.includes("cyber") || c.includes("information-technology") || c.includes("cs")) {
    return Laptop;
  }
  if (c.includes("electronics") || c.includes("electrical") || c.includes("applied") || c.includes("instrumentation") || c.includes("ee") || c.includes("ec")) {
    return Cpu;
  }
  if (c.includes("mechanical") || c.includes("mechatronics") || c.includes("automobile") || c.includes("aeronautical") || c.includes("me")) {
    return Wrench;
  }
  if (c.includes("civil") || c.includes("ce")) {
    return Building;
  }
  return BookOpen;
}

// Complete list of valid branch IDs from session.ts
const VALID_BRANCHES = [
  "aeronautical-engineering",
  "agriculture-engineering",
  "applied-electronics-and-instrumentation",
  "artificial-intelligence",
  "artificial-intelligence-and-machine-learning",
  "artificial-intelligence-and-data-science",
  "automobile-engineering",
  "biomedical-and-robotic-engineering",
  "biomedical-engineering",
  "biotechnology-engineering",
  "biotechnology-and-biochemical-engineering",
  "chemical-engineering",
  "civil-engineering",
  "civil-and-environmental-engineering",
  "computer-science-and-business-systems",
  "computer-science-and-design",
  "computer-science-and-engineering",
  "computer-science-and-engineering-ai-and-ml",
  "computer-science-and-engineering-artificial-intelligence",
  "computer-science-and-engineering-cyber-security",
  "computer-science-and-engineering-data-science",
  "computer-science-and-engineering-internet-of-things-and-cyber-security-including-blockchain-technology",
  "computer-science-and-engineering-iot",
  "computer-science-and-engineering-and-business-systems",
  "cyber-physical-systems",
  "electrical-and-computer-engineering",
  "electrical-and-electronics-engineering",
  "electronics-and-biomedical-engineering",
  "electronics-and-communication-advanced-communication-technology",
  "electronics-and-communication-engineering",
  "electronics-and-computer-engineering",
  "electronics-engineering-vlsi-design-and-technology",
  "electronics-and-instrumentation",
  "food-technology",
  "industrial-engineering",
  "information-technology",
  "instrumentation-and-control",
  "mechanical-automobile-engineering",
  "mechanical-engineering",
  "mechatronics-engineering",
  "naval-architecture-and-shipbuilding-engineering",
  "polymer-engineering",
  "production-engineering",
  "robotics-and-artificial-intelligence",
  "robotics-and-automation",
  "safety-and-fire-engineering"
] as const;

const branchLabels: Record<string, string> = {
  "aeronautical-engineering": "Aeronautical Engineering",
  "agriculture-engineering": "Agriculture Engineering",
  "applied-electronics-and-instrumentation": "Applied Electronics and Instrumentation",
  "artificial-intelligence": "Artificial Intelligence",
  "artificial-intelligence-and-machine-learning": "Artificial Intelligence & Machine Learning",
  "artificial-intelligence-and-data-science": "Artificial Intelligence and Data Science",
  "automobile-engineering": "Automobile Engineering",
  "biomedical-and-robotic-engineering": "Biomedical & Robotic Engineering",
  "biomedical-engineering": "Biomedical Engineering",
  "biotechnology-engineering": "Biotechnology Engineering",
  "biotechnology-and-biochemical-engineering": "Biotechnology and Biochemical Engineering",
  "chemical-engineering": "Chemical Engineering",
  "civil-engineering": "Civil Engineering",
  "civil-and-environmental-engineering": "Civil and Environmental Engineering",
  "computer-science-and-business-systems": "Computer Science and Business Systems",
  "computer-science-and-design": "Computer Science and Design",
  "computer-science-and-engineering": "Computer Science and Engineering",
  "computer-science-and-engineering-ai-and-ml": "Computer Science and Engineering (AI & ML)",
  "computer-science-and-engineering-artificial-intelligence": "Computer Science and Engineering (Artificial Intelligence)",
  "computer-science-and-engineering-cyber-security": "Computer Science and Engineering (Cyber Security)",
  "computer-science-and-engineering-data-science": "Computer Science and Engineering (Data Science)",
  "computer-science-and-engineering-internet-of-things-and-cyber-security-including-blockchain-technology": "Computer Science and Engineering (Internet of Things and Cyber Security including Blockchain Technology)",
  "computer-science-and-engineering-iot": "Computer Science and Engineering (IoT)",
  "computer-science-and-engineering-and-business-systems": "Computer Science and Engineering and Business Systems",
  "cyber-physical-systems": "Cyber Physical Systems",
  "electrical-and-computer-engineering": "Electrical and Computer Engineering",
  "electrical-and-electronics-engineering": "Electrical and Electronics Engineering",
  "electronics-and-biomedical-engineering": "Electronics & Biomedical Engineering",
  "electronics-and-communication-advanced-communication-technology": "Electronics & Communication (Advanced Communication Technology)",
  "electronics-and-communication-engineering": "Electronics & Communication Engineering",
  "electronics-and-computer-engineering": "Electronics & Computer Engineering",
  "electronics-engineering-vlsi-design-and-technology": "Electronics Engineering (VLSI Design and Technology)",
  "electronics-and-instrumentation": "Electronics and Instrumentation",
  "food-technology": "Food Technology",
  "industrial-engineering": "Industrial Engineering",
  "information-technology": "Information Technology",
  "instrumentation-and-control": "Instrumentation and Control",
  "mechanical-automobile-engineering": "Mechanical (Automobile) Engineering",
  "mechanical-engineering": "Mechanical Engineering",
  "mechatronics-engineering": "Mechatronics Engineering",
  "naval-architecture-and-shipbuilding-engineering": "Naval Architecture & Shipbuilding Engineering",
  "polymer-engineering": "Polymer Engineering",
  "production-engineering": "Production Engineering",
  "robotics-and-artificial-intelligence": "Robotics and Artificial Intelligence",
  "robotics-and-automation": "Robotics and Automation",
  "safety-and-fire-engineering": "Safety & Fire Engineering"
};

const _PRIMARY_BRANCHES = [
  { id: "cs", label: "Computer Science", desc: "CS & Allied Branches", icon: Laptop },
  { id: "ec", label: "Electronics", desc: "EC & Allied Branches", icon: Cpu },
  { id: "me", label: "Mechanical", desc: "ME & Allied Branches", icon: Wrench },
  { id: "ce", label: "Civil", desc: "CE & Allied Branches", icon: Building },
  { id: "ee", label: "Electrical", desc: "EE & Allied Branches", icon: Zap },
] as const;

interface Subject {
  id: string;
  code: string;
  name: string;
  branchId: string;
  semester: number;
}

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBranch?: string;
  initialSemester?: number;
}

export default function OnboardingModal({
  isOpen,
  onClose,
  initialBranch = "",
  initialSemester,
}: OnboardingModalProps) {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const modalRef = useRef<HTMLDivElement>(null);

  // States
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0); // -1 for back, 1 for forward
  const [selectedBranch, setSelectedBranch] = useState(initialBranch);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(initialSemester || null);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [deselectedSubjectIds, setDeselectedSubjectIds] = useState<string[]>([]);
  const [loadingSubjects, setLoadingSubjects] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  // Pre-fill states on initial mount/open if props change
  useEffect(() => {
    if (initialBranch) setSelectedBranch(initialBranch);
    if (initialSemester) setSelectedSemester(initialSemester);
  }, [initialBranch, initialSemester]);

  // Focus Trapping and ESC to Close
  useEffect(() => {
    if (!isOpen) return;

    const modalElement = modalRef.current;
    if (!modalElement) return;

    const activeBefore = document.activeElement as HTMLElement;

    // Focusable selector
    const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    // Focus first element
    const focusable = modalElement.querySelectorAll(focusableSelector);
    if (focusable.length > 0) {
      (focusable[0] as HTMLElement).focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab") {
        const els = Array.from(modalElement.querySelectorAll(focusableSelector)) as HTMLElement[];
        if (els.length === 0) return;

        const first = els[0];
        const last = els[els.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (activeBefore) {
        activeBefore.focus();
      }
    };
  }, [isOpen, onClose, step]); // Re-run on step change to capture new focusable elements

  // Keyboard navigation within grids
  const handleGridKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, selector: string) => {
    const active = document.activeElement as HTMLElement;
    if (!active) return;

    const container = e.currentTarget;
    const items = Array.from(container.querySelectorAll(selector)) as HTMLElement[];
    if (items.length === 0) return;

    const idx = items.indexOf(active);
    if (idx === -1) return;

    let nextIdx = idx;
    if (e.key === "ArrowRight") {
      nextIdx = (idx + 1) % items.length;
    } else if (e.key === "ArrowLeft") {
      nextIdx = (idx - 1 + items.length) % items.length;
    } else if (e.key === "ArrowDown") {
      // Best guess for next item
      nextIdx = (idx + 1) % items.length;
    } else if (e.key === "ArrowUp") {
      // Best guess for prev item
      nextIdx = (idx - 1 + items.length) % items.length;
    } else {
      return;
    }

    items[nextIdx].focus();
    e.preventDefault();
  };

  // Fetch subjects when branch & semester are locked in (entering Step 3)
  useEffect(() => {
    if (step === 3 && selectedBranch && selectedSemester) {
      setLoadingSubjects(true);
      fetch(`/api/subjects?branch=${selectedBranch}&sem=${selectedSemester}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch subjects");
          return res.json();
        })
        .then((data) => {
          setSubjects(Array.isArray(data) ? data : []);
          setDeselectedSubjectIds([]); // Reset deselected ones
        })
        .catch((err) => {
          console.error(err);
          setSubjects([]);
        })
        .finally(() => {
          setLoadingSubjects(false);
        });
    }
  }, [step, selectedBranch, selectedSemester]);

  // Search autocomplete options
  const filteredBranches = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return VALID_BRANCHES.filter((branch) => {
      const label = branchLabels[branch] || branch;
      return label.toLowerCase().includes(query);
    }).map((id) => ({
      id,
      label: branchLabels[id] || id.toUpperCase(),
    })).slice(0, 5); // Limit to top 5 matches
  }, [searchQuery]);

  const selectBranch = (branchId: string) => {
    triggerHaptic("success");
    setSelectedBranch(branchId);
    setDirection(1);
    setStep(2);
  };

  const selectSemester = (sem: number) => {
    triggerHaptic("success");
    setSelectedSemester(sem);
    setDirection(1);
    setStep(3);
  };

  const toggleSubject = (subjectId: string) => {
    triggerHaptic("light");
    setDeselectedSubjectIds((prev) =>
      prev.includes(subjectId)
        ? prev.filter((id) => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  const handleBack = () => {
    triggerHaptic("light");
    setDirection(-1);
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSaveAndNavigate = async () => {
    triggerHaptic("success");
    if (!selectedBranch || !selectedSemester) return;

    setDirection(1);
    setStep(4); // Moving to loading/redirecting step

    // Store in localStorage
    localStorage.setItem("ktunode-session", JSON.stringify({ branch: selectedBranch, semester: selectedSemester }));
    localStorage.setItem("ktunode_branch", selectedBranch);
    localStorage.setItem("ktunode_semester", String(selectedSemester));
    localStorage.setItem("ktunode_onboarding_completed", "true");

    const hiddenSubjectsKey = `ktunode_hidden_subjects_${selectedBranch}_${selectedSemester}`;
    localStorage.setItem(hiddenSubjectsKey, JSON.stringify(deselectedSubjectIds));

    // Redirect user to dashboard
    router.push(`/${selectedBranch}/sem-${selectedSemester}`);
  };

  // Percent progress
  const progressPercent = step === 1 ? 25 : step === 2 ? 50 : step === 3 ? 75 : 100;

  // Animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  const transitionConfig = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-modal-title"
      aria-describedby="onboarding-modal-desc"
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4 p-0 bg-slate-950/60 dark:bg-slate-950/80 backdrop-blur-md font-sans"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 sm:rounded-[28px] rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col max-h-[100svh] sm:max-h-[90vh] md:max-h-[85vh] focus:outline-none"
        tabIndex={-1}
      >
        {/* Top Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 dark:bg-slate-900 z-10">
          <motion.div
            className="h-full bg-blue-500"
            animate={{ width: `${progressPercent}%` }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, ease: "easeInOut" }}
          />
        </div>

        {/* Header */}
        <div className="px-6 pt-7 pb-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-900 z-10">
          <div className="flex flex-col gap-0.5">
            {step < 4 ? (
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">
                Step {step} of 3
              </span>
            ) : (
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">
                Finalizing
              </span>
            )}
            <h2
              id="onboarding-modal-title"
              className="text-base md:text-lg font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
            >
              {step === 1 && "Choose Your Engineering Branch"}
              {step === 2 && "Select Your Semester"}
              {step === 3 && "Tailor Your Checklist"}
              {step === 4 && "Preparing Your Cockpit..."}
            </h2>
            <p id="onboarding-modal-desc" className="sr-only">
              {step === 1 && "Choose your branch from the grid or search other branches."}
              {step === 2 && "Select your current B.Tech semester."}
              {step === 3 && "Enable or disable subjects for your customized dashboard view."}
              {step === 4 && "Saving settings and navigating to your dashboard."}
            </p>
          </div>
          {step < 4 && (
            <button
              onClick={() => {
                triggerHaptic("light");
                onClose();
              }}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-400 hover:text-slate-600 dark:hover:text-slate-205 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close onboarding modal"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Content Wizard */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 md:p-8 ios-safe-bottom">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transitionConfig}
              className="w-full h-full flex flex-col"
            >
              {/* STEP 1: BRANCH SELECTION */}
              {step === 1 && (
                <div className="space-y-6">
                  <div
                    onKeyDown={(e) => handleGridKeyDown(e, "[data-branch-item]")}
                    className="max-h-[380px] overflow-y-auto pr-1 grid grid-cols-1 sm:grid-cols-2 gap-3.5 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800"
                  >
                    {siteConfig.branches.map(({ code, name, short }) => {
                       const isSelected = selectedBranch === code;
                       const Icon = getBranchIcon(code);
                       return (
                        <button
                          key={code}
                          data-branch-item
                          type="button"
                          onClick={() => selectBranch(code)}
                          className={`flex items-start p-4 rounded-2xl border text-left transition-all duration-305 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 group relative overflow-hidden ${
                            isSelected
                              ? "bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-950/40 dark:to-blue-950/20 border-blue-500 text-blue-600 dark:text-blue-400 font-bold scale-[1.01] shadow-md shadow-blue-500/5"
                              : "bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-100/50 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-800 hover:scale-[1.01] text-slate-800 dark:text-slate-200"
                          }`}
                          aria-label={`Select ${name}`}
                        >
                          {isSelected && (
                            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
                          )}
                          <div className={`p-2 rounded-xl mr-3 transition-colors ${isSelected ? 'bg-blue-500/10 text-blue-500' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 group-hover:bg-blue-500/10 group-hover:text-blue-500'}`}>
                            <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                          </div>
                          <div className="flex-1 min-w-0 pr-4">
                            <span className="block text-xs font-black leading-snug whitespace-normal break-words group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{name}</span>
                            <span className="block text-[10px] text-slate-400 font-extrabold uppercase mt-1 tracking-wider">{short}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Search Bar for Other Branches */}
                  <div className="relative mt-4">
                    <label htmlFor="branch-search" className="sr-only">Search other engineering branches</label>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 pointer-events-none" />
                      <input
                        id="branch-search"
                        type="text"
                        placeholder="Search other engineering branches (e.g. Chemical, CS & Design)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setSearchFocused(true)}
                        onBlur={() => setTimeout(() => setSearchFocused(false), 200)} // delay to allow clicks
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl py-3 pl-11 pr-4 text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400 placeholder:font-semibold"
                      />
                    </div>

                    <AnimatePresence>
                      {searchFocused && filteredBranches.length > 0 && (
                        <motion.ul
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          className="absolute z-20 w-full mt-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl py-1 overflow-hidden"
                        >
                          {filteredBranches.map((item) => (
                            <li key={item.id}>
                              <button
                                type="button"
                                onMouseDown={(e) => e.preventDefault()} // prevent input blur before click resolves
                                onClick={() => selectBranch(item.id)}
                                className="w-full text-left px-4 py-3 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/60 hover:text-blue-500 flex items-start justify-between gap-3 cursor-pointer"
                              >
                                <span className="break-words whitespace-normal flex-1">{item.label}</span>
                                <span className="text-[10px] text-slate-400 font-extrabold uppercase px-1.5 py-0.5 bg-slate-100 dark:bg-slate-900 rounded shrink-0">{item.id}</span>
                              </button>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )}

              {/* STEP 2: SEMESTER SELECTION */}
              {step === 2 && (
                <div className="space-y-6">
                  <div
                    onKeyDown={(e) => handleGridKeyDown(e, "[data-sem-item]")}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-3"
                  >
                    {Array.from({ length: 8 }, (_, i) => i + 1).map((sem) => {
                      const isSelected = selectedSemester === sem;
                      return (
                        <button
                          key={sem}
                          data-sem-item
                          onClick={() => selectSemester(sem)}
                          className={`flex flex-col items-center justify-center p-5 rounded-2xl border text-center transition-all duration-305 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 group relative overflow-hidden ${
                            isSelected
                              ? "bg-gradient-to-b from-blue-50 to-blue-100/50 dark:from-blue-950/40 dark:to-blue-950/20 border-blue-500 text-blue-600 dark:text-blue-400 font-bold scale-[1.02] shadow-md shadow-blue-500/10"
                              : "bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-100/50 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-800 hover:scale-[1.02] text-slate-800 dark:text-slate-200"
                          } min-h-[90px]`}
                          aria-label={`Select Semester ${sem}`}
                        >
                          {isSelected && (
                            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
                          )}
                          <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mb-1 transition-colors group-hover:text-blue-500">Semester</span>
                          <span className="text-2xl font-black transition-all duration-300 group-hover:scale-110">{sem}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-900">
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-sm font-bold text-slate-600 dark:text-slate-300 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: SUBJECT CONFIGURATION */}
              {step === 3 && (
                <div className="flex-1 flex flex-col min-h-0">
                  <p className="text-xs text-slate-400 font-semibold mb-4">
                    We fetched the official syllabus subjects for <span className="text-blue-500 font-bold">{(branchLabels[selectedBranch!] || selectedBranch!).toUpperCase()} Semester {selectedSemester}</span>. Uncheck any elective/unneeded courses to declutter your dashboard.
                  </p>

                  <div className="flex-1 min-h-0 overflow-hidden relative">
                    {loadingSubjects ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                        <span className="text-xs font-bold text-slate-400">Loading syllabus subjects...</span>
                      </div>
                    ) : subjects.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
                        <BookOpen className="w-10 h-10 text-slate-300 dark:text-slate-700 mb-2.5" />
                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200">No subjects found for this scheme</span>
                        <span className="text-xs text-slate-400 mt-1">You can still proceed and customize them inside the dashboard later.</span>
                      </div>
                    ) : (
                      <div
                        onKeyDown={(e) => handleGridKeyDown(e, "[data-subject-item]")}
                        className="h-full overflow-y-auto pr-1 space-y-2 max-h-[240px] sm:max-h-[280px]"
                      >
                        {subjects.map((subject) => {
                          const isChecked = !deselectedSubjectIds.includes(subject.id);
                          return (
                            <label
                              key={subject.id}
                              data-subject-item
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === " " || e.key === "Enter") {
                                  toggleSubject(subject.id);
                                  e.preventDefault();
                                }
                              }}
                              className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer select-none transition-all duration-200 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                isChecked
                                  ? "bg-blue-50/20 dark:bg-blue-950/10 border-blue-500/30 hover:border-blue-500/50"
                                  : "bg-slate-50/40 dark:bg-slate-900/20 border-slate-200 dark:border-slate-800 opacity-60 hover:opacity-85"
                              }`}
                            >
                              <div className="flex items-center gap-3.5 pr-2">
                                <div className="relative flex items-center justify-center">
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => toggleSubject(subject.id)}
                                    tabIndex={-1} // Handled by outer container keypress
                                    className="w-5 h-5 rounded-lg border-2 border-slate-300 dark:border-slate-700 text-blue-500 focus:ring-blue-500 transition-colors pointer-events-none appearance-none checked:bg-blue-500 checked:border-blue-500"
                                  />
                                  {isChecked && (
                                    <svg className="w-3.5 h-3.5 text-white absolute pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                  )}
                                </div>
                                <div className="flex flex-col gap-0.5">
                                  <span className="text-xs font-black text-slate-850 dark:text-slate-150 line-clamp-1 leading-tight">
                                    {subject.name}
                                  </span>
                                  <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 tracking-wider">
                                    {subject.code}
                                  </span>
                                </div>
                              </div>
                              <span className={`text-[10px] font-black uppercase tracking-widest shrink-0 px-2 py-0.5 rounded-full ${
                                isChecked ? "text-blue-500 bg-blue-50 dark:bg-blue-950/30" : "text-slate-400 bg-slate-100 dark:bg-slate-900"
                              }`}>
                                {isChecked ? "Visible" : "Hidden"}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-900 mt-6">
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-sm font-bold text-slate-600 dark:text-slate-300 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>

                    <button
                      onClick={handleSaveAndNavigate}
                      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-black transition-colors cursor-pointer shadow-md shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Save & Open Dashboard
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: REDIRECT LOADING SCREEN */}
              {step === 4 && (
                <div className="flex flex-col items-center justify-center gap-5 py-12">
                  <div className="relative w-20 h-20 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 animate-pulse shadow-lg shadow-blue-500/5">
                    <Loader2 className="w-9 h-9 animate-spin text-blue-500" />
                    <span className="absolute inset-0 rounded-3xl border border-blue-400/30 animate-ping opacity-25" />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-sm font-black text-slate-900 dark:text-slate-100 uppercase tracking-widest">
                      Assembling Your Dashboard
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold max-w-xs leading-relaxed mx-auto">
                      Preparing syllabus checklists, indexing official study materials, and setting up local study storage...
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
