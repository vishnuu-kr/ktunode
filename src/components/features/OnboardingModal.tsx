"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  X, Search, ArrowLeft, ArrowRight, Loader2,
  Laptop, Cpu, Wrench, Building, Zap, BookOpen
} from "lucide-react";
import { triggerHaptic } from "@/lib/haptic";

// Complete list of valid branch IDs from session.ts
const VALID_BRANCHES = [
  "cs", "ce", "ec", "ee", "me",
  "artificial-intelligence",
  "artificial-intelligence-and-data-science",
  "artificial-intelligence-and-machine-learning",
  "cs-and-business-systems",
  "cs-and-design",
  "cse-artificial-intelligence-and-data-science",
  "cse-block-chain",
  "cse-cyber-security",
  "cse-internet-of-things-cse-iot",
  "cse-iot-and-cs-including-block-chain-technology",
  "computer-science-and-business-systems",
  "computer-science-and-design",
  "computer-science-and-engineering",
  "computer-science-and-engineering-artificial-intelligence-and-data-science",
  "computer-science-and-engineering-artificial-intelligence-and-machine-learning",
  "computer-science-and-engineering-artificial-intelligence",
  "computer-science-and-engineering-cyber-security",
  "computer-science-and-engineering-data-science",
  "computer-science-and-engineering-iot",
  "computer-science-and-engineering-and-business-systems",
  "cyber-security",
  "information-technology",
  "civil-engineering",
  "civil-and-environmental-engineering",
  "applied-electronics-instrumentation-engineering",
  "biomedical-robotics-engineering",
  "biomedical-engineering",
  "cyber-physical-system",
  "electronics-biomedical",
  "electronics-communication-engineering",
  "electronics-instrumentation-engineering",
  "electronics-engineering-vlsi-design-and-technology",
  "electronics-and-biomedical-engineering",
  "electronics-and-communication-advanced-communication-technology",
  "electronics-and-communication-engineering",
  "electronics-and-computer-engineering",
  "instrumentation-and-control-engineering",
  "robotics-and-artificial-intelligence",
  "robotics-and-automation",
  "electrical-and-computer-engineering",
  "electrical-and-electronics-engineering",
  "aeronautical-engineering",
  "automobile-engineering",
  "chemical-engineering",
  "food-technology",
  "industrial-engineering",
  "mechanical-engineering",
  "mechanical-engineering-auto",
  "mechanical-engineering-automobile",
  "mechatronics-engineering",
  "metallurgical-materials-engineering",
  "naval-architecture-ship-building-engineering",
  "polymer-engineering",
  "production-engineering",
  "safety-and-fire-engineering",
  "agriculture-engineering",
  "biotechnology",
  "biotechnology-and-biochemical-engineering"
] as const;

const branchLabels: Record<string, string> = {
  "cs": "Computer Science and Engineering",
  "ce": "Civil Engineering",
  "ec": "Electronics and Communication Engineering",
  "ee": "Electrical and Electronics Engineering",
  "me": "Mechanical Engineering",
  "artificial-intelligence": "Artificial Intelligence",
  "artificial-intelligence-and-data-science": "Artificial Intelligence and Data Science",
  "artificial-intelligence-and-machine-learning": "Artificial Intelligence and Machine Learning",
  "cs-and-business-systems": "CS and Business Systems",
  "cs-and-design": "CS and Design",
  "cse-artificial-intelligence-and-data-science": "CSE (Artificial Intelligence and Data Science)",
  "cse-block-chain": "CSE (Block Chain)",
  "cse-cyber-security": "CSE (Cyber Security)",
  "cse-internet-of-things-cse-iot": "CSE (Internet of Things), CSE(IoT)",
  "cse-iot-and-cs-including-block-chain-technology": "CSE (IoT and CS including Block Chain Technology)",
  "computer-science-and-business-systems": "Computer Science and Business Systems",
  "computer-science-and-design": "Computer Science and Design",
  "computer-science-and-engineering": "Computer Science and Engineering",
  "computer-science-and-engineering-artificial-intelligence-and-data-science": "Computer Science and Engineering (Artificial Intelligence and Data Science)",
  "computer-science-and-engineering-artificial-intelligence-and-machine-learning": "Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
  "computer-science-and-engineering-artificial-intelligence": "Computer Science and Engineering (Artificial Intelligence)",
  "computer-science-and-engineering-cyber-security": "Computer Science and Engineering (Cyber Security)",
  "computer-science-and-engineering-data-science": "Computer Science and Engineering (Data Science)",
  "computer-science-and-engineering-iot": "Computer Science and Engineering (IOT)",
  "computer-science-and-engineering-and-business-systems": "Computer Science and Engineering and Business Systems",
  "cyber-security": "Cyber Security",
  "information-technology": "Information Technology",
  "civil-engineering": "Civil Engineering",
  "civil-and-environmental-engineering": "Civil and Environmental Engineering",
  "applied-electronics-instrumentation-engineering": "Applied Electronics & Instrumentation Engineering",
  "biomedical-robotics-engineering": "Biomedical & Robotics Engineering",
  "biomedical-engineering": "Biomedical Engineering",
  "cyber-physical-system": "Cyber Physical System",
  "electronics-biomedical": "Electronics & Biomedical",
  "electronics-communication-engineering": "Electronics & Communication Engineering",
  "electronics-instrumentation-engineering": "Electronics & Instrumentation Engineering",
  "electronics-engineering-vlsi-design-and-technology": "Electronics Engineering (VLSI Design and Technology)",
  "electronics-and-biomedical-engineering": "Electronics and Biomedical Engineering",
  "electronics-and-communication-advanced-communication-technology": "Electronics and Communication (Advanced Communication Technology)",
  "electronics-and-communication-engineering": "Electronics and Communication Engineering",
  "electronics-and-computer-engineering": "Electronics and Computer Engineering",
  "instrumentation-and-control-engineering": "Instrumentation and Control Engineering",
  "robotics-and-artificial-intelligence": "Robotics and Artificial Intelligence",
  "robotics-and-automation": "Robotics and Automation",
  "electrical-and-computer-engineering": "Electrical and Computer Engineering",
  "electrical-and-electronics-engineering": "Electrical and Electronics Engineering",
  "aeronautical-engineering": "Aeronautical Engineering",
  "automobile-engineering": "Automobile Engineering",
  "chemical-engineering": "Chemical Engineering",
  "food-technology": "Food Technology",
  "industrial-engineering": "Industrial Engineering",
  "mechanical-engineering": "Mechanical Engineering",
  "mechanical-engineering-auto": "Mechanical Engineering (Auto)",
  "mechanical-engineering-automobile": "Mechanical Engineering (Automobile)",
  "mechatronics-engineering": "Mechatronics Engineering",
  "metallurgical-materials-engineering": "Metallurgical & Materials Engineering",
  "naval-architecture-ship-building-engineering": "Naval Architecture & Ship Building Engineering",
  "polymer-engineering": "Polymer Engineering",
  "production-engineering": "Production Engineering",
  "safety-and-fire-engineering": "Safety and Fire Engineering",
  "agriculture-engineering": "Agriculture Engineering",
  "biotechnology": "Biotechnology",
  "biotechnology-and-biochemical-engineering": "Biotechnology and Biochemical Engineering"
};

const PRIMARY_BRANCHES = [
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
            <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">
              Step {step} of 3
            </span>
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
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-400 hover:text-slate-600 dark:hover:text-slate-800 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="grid grid-cols-2 md:grid-cols-5 gap-3"
                  >
                    {PRIMARY_BRANCHES.map(({ id, label, desc, icon: Icon }) => {
                      const isSelected = selectedBranch === id;
                      return (
                        <button
                          key={id}
                          data-branch-item
                          onClick={() => selectBranch(id)}
                          className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            isSelected
                              ? "bg-blue-50 dark:bg-blue-950/40 border-blue-500 text-blue-600 dark:text-blue-400 font-bold scale-[1.02] shadow-sm shadow-blue-500/10"
                              : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200"
                          } min-h-[100px] sm:min-h-[110px] md:min-h-[120px]`}
                          aria-label={`Select ${label}`}
                        >
                          <Icon className={`w-6 h-6 mb-2.5 ${isSelected ? "text-blue-500" : "text-slate-400 dark:text-slate-500"}`} />
                          <span className="text-xs font-black leading-tight mb-1">{label}</span>
                          <span className="text-[10px] text-slate-400 font-semibold">{desc}</span>
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
                                className="w-full text-left px-4 py-3 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/60 hover:text-blue-500 flex items-center justify-between cursor-pointer"
                              >
                                <span>{item.label}</span>
                                <span className="text-[10px] text-slate-400 font-extrabold uppercase px-1.5 py-0.5 bg-slate-100 dark:bg-slate-900 rounded">{item.id}</span>
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
                          className={`flex flex-col items-center justify-center p-5 rounded-2xl border text-center transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            isSelected
                              ? "bg-blue-50 dark:bg-blue-950/40 border-blue-500 text-blue-600 dark:text-blue-400 font-bold scale-[1.02] shadow-sm shadow-blue-500/10"
                              : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200"
                          } min-h-[90px]`}
                          aria-label={`Select Semester ${sem}`}
                        >
                          <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mb-1">Semester</span>
                          <span className="text-2xl font-black">{sem}</span>
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
                              className="flex items-center justify-between p-3.5 rounded-2xl border bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 cursor-pointer select-none transition-colors border-slate-150 dark:border-slate-850 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <div className="flex items-center gap-3.5 pr-2">
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => toggleSubject(subject.id)}
                                  tabIndex={-1} // Handled by outer container keypress
                                  className="w-5 h-5 rounded border-slate-300 dark:border-slate-750 text-blue-500 focus:ring-blue-500 transition-colors pointer-events-none"
                                />
                                <div className="flex flex-col gap-0.5">
                                  <span className="text-xs font-black text-slate-800 dark:text-slate-200 line-clamp-1 leading-tight">
                                    {subject.name}
                                  </span>
                                  <span className="text-[10px] font-extrabold text-slate-450 tracking-wider">
                                    {subject.code}
                                  </span>
                                </div>
                              </div>
                              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest shrink-0">
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
                <div className="flex flex-col items-center justify-center gap-4 py-10">
                  <div className="relative w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-500 animate-pulse">
                    <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
                  </div>
                  <div className="text-center space-y-1">
                    <h3 className="text-sm font-black text-slate-850 dark:text-slate-150 uppercase tracking-widest">
                      Booting Study Cockpit
                    </h3>
                    <p className="text-xs text-slate-400 font-semibold max-w-xs leading-relaxed">
                      Customizing syllabus checklist, setting up shortcuts, and building notes index...
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
