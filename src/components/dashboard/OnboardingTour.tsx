"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronRight, X, Sparkles, BookOpen, CheckCircle, Clock, Zap } from "lucide-react";
import confetti from "canvas-confetti";
import { triggerHaptic } from "@/lib/haptic";

interface TourStep {
  targetId?: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  position: "center" | "bottom" | "left" | "right" | "top";
}

const TOUR_STEPS: TourStep[] = [
  {
    title: "Welcome to KTUNODE!",
    description: "Your modern B.Tech study cockpit. Let's take a quick 30-second tour to learn how to find notes, track your syllabus progress, and utilize study tools.",
    icon: Sparkles,
    position: "center",
  },
  {
    targetId: "tour-subject-card",
    title: "Syllabus & Notes",
    description: "This is a subject card. Click any card to drill down into its modules and read chapter-wise notes.",
    icon: BookOpen,
    position: "bottom",
  },
  {
    targetId: "tour-subject-card",
    title: "Live Progress Tracking",
    description: "As you finish studying, check off topics to save progress. Your completion statistics and subject progress bars will update in real time.",
    icon: CheckCircle,
    position: "top",
  },
  {
    targetId: "tour-tools-fab",
    title: "Study Tools Console",
    description: "Click this floating tool console (or sidebar on desktop) to access your Pomodoro timer, exam schedules, and pinned bookmarks.",
    icon: Clock,
    position: "left",
  },
  {
    title: "All set!",
    description: "You're ready to master the semester. Calculate GPA, check attendance milestones, or open tools in the navbar. Replay this tour anytime by clicking the '?' button.",
    icon: Zap,
    position: "center",
  }
];

interface OnboardingTourProps {
  currentBranch?: string;
  currentSem?: number;
  onClose?: () => void;
}

export default function OnboardingTour({ currentBranch = "cs", currentSem = 4, onClose }: OnboardingTourProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [coords, setCoords] = useState<{ top: number; left: number; width: number; height: number } | null>(null);
  const [visible, setVisible] = useState(true);
  const [selectedBranch, setSelectedBranch] = useState(currentBranch);
  const [selectedSem, setSelectedSem] = useState(currentSem);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const q = new URLSearchParams(window.location.search);
      if (q.get("tour") === "continue") {
        setCurrentStep(1);
        // Clear search param so it doesn't loop or stick
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
      }
    }
  }, []);

  const step = TOUR_STEPS[currentStep];

  useEffect(() => {
    if (!visible) return;

    // 1. Scroll the target into view once when step changes
    if (step.targetId) {
      let targetId = step.targetId!;
      if (targetId === "tour-tools-fab" && window.innerWidth >= 1024) {
        targetId = "tour-tools-sidebar";
      }
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    // 2. Measure element bounds relative to the viewport dynamically
    const updateCoords = () => {
      if (!step.targetId) {
        setCoords(null);
        return;
      }
      let targetId = step.targetId!;
      if (targetId === "tour-tools-fab" && window.innerWidth >= 1024) {
        targetId = "tour-tools-sidebar";
      }
      const el = document.getElementById(targetId);
      if (el) {
        const rect = el.getBoundingClientRect();
        // Check if element has any dimension to avoid highlighting collapsed nodes
        if (rect.width > 0 && rect.height > 0) {
          setCoords({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
          });
        }
      } else {
        setCoords(null);
      }
    };

    // Run measurement immediately and setup a polling interval + event listeners
    // to capture coordinates smoothly as page scrolls or window resizes.
    updateCoords();
    const timer = setTimeout(updateCoords, 100);
    const interval = setInterval(updateCoords, 50);

    window.addEventListener("resize", updateCoords);
    window.addEventListener("scroll", updateCoords, { passive: true });

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      window.removeEventListener("resize", updateCoords);
      window.removeEventListener("scroll", updateCoords);
    };
  }, [currentStep, visible, step.targetId]);

  useEffect(() => {
    if (currentStep === 3) {
      import("@/components/dashboard/FirstTimeChecklist")
        .then(({ triggerChecklistTask }) => {
          triggerChecklistTask("toolsOpened");
        })
        .catch((err) => console.error(err));
    }
  }, [currentStep]);

  const handleSaveSetup = (e: React.MouseEvent) => {
    triggerHaptic("success", e);
    localStorage.setItem("ktunode_branch", selectedBranch);
    localStorage.setItem("ktunode_semester", String(selectedSem));
    
    if (selectedBranch !== currentBranch || selectedSem !== currentSem) {
      router.push(`/${selectedBranch}/sem-${selectedSem}?tour=continue`);
    } else {
      setCurrentStep(1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    triggerHaptic("medium", e);
    if (currentStep < TOUR_STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleComplete(e);
    }
  };

  const handleSkip = (e: React.MouseEvent) => {
    triggerHaptic("warning", e);
    localStorage.setItem("ktunode_onboarding_completed", "true");
    setVisible(false);
    onClose?.();
  };

  const handleComplete = (e: React.MouseEvent) => {
    triggerHaptic("success", e);
    localStorage.setItem("ktunode_onboarding_completed", "true");
    
    // Blast confetti!
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });

    setVisible(false);
    onClose?.();
  };

  if (!visible) return null;

  const IconComponent = step.icon;

  // Compute tooltip position style relative to target coords (viewport-relative)
  let tooltipStyle: React.CSSProperties = {};
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  
  if (coords) {
    const margin = 16;
    if (isMobile) {
      // On mobile, anchor tooltip either to the top of screen or bottom of screen
      // depending on where the spotlight target is, avoiding overlay conflicts.
      const isTargetAtBottom = coords.top + coords.height / 2 > window.innerHeight / 2;
      tooltipStyle = {
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100vw - 32px)",
        maxWidth: "340px",
        top: isTargetAtBottom ? "80px" : "auto",
        bottom: isTargetAtBottom ? "auto" : "24px",
        zIndex: 10000,
      };
    } else {
      // Desktop positions
      if (step.position === "bottom") {
        tooltipStyle = {
          position: "fixed",
          top: coords.top + coords.height + margin,
          left: Math.max(16, Math.min(window.innerWidth - 356, coords.left + coords.width / 2 - 170)),
          zIndex: 10000,
        };
      } else if (step.position === "top") {
        tooltipStyle = {
          position: "fixed",
          bottom: window.innerHeight - coords.top + margin,
          left: Math.max(16, Math.min(window.innerWidth - 356, coords.left + coords.width / 2 - 170)),
          zIndex: 10000,
        };
      } else if (step.position === "left") {
        tooltipStyle = {
          position: "fixed",
          top: coords.top + coords.height / 2,
          transform: "translateY(-50%)",
          left: coords.left - 340 - margin,
          zIndex: 10000,
        };
      } else if (step.position === "right") {
        tooltipStyle = {
          position: "fixed",
          top: coords.top + coords.height / 2,
          transform: "translateY(-50%)",
          left: coords.left + coords.width + margin,
          zIndex: 10000,
        };
      }
    }
  } else {
    // Centered modal when there is no target element (Step 0 and Step 4)
    tooltipStyle = {
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "calc(100vw - 32px)",
      maxWidth: "340px",
      zIndex: 10000,
    };
  }

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Spotlight Backdrop Overlay */}
      <AnimatePresence>
        {coords && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#020617] pointer-events-auto"
            style={{
              clipPath: `polygon(
                0% 0%, 
                0% 100%, 
                ${coords.left}px 100%, 
                ${coords.left}px ${coords.top}px, 
                ${coords.left + coords.width}px ${coords.top}px, 
                ${coords.left + coords.width}px ${coords.top + coords.height}px, 
                ${coords.left}px ${coords.top + coords.height}px, 
                ${coords.left}px 100%, 
                100% 100%, 
                100% 0%
              )`
            }}
          />
        )}
        {!coords && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#020617]/70 backdrop-blur-[2px] pointer-events-auto"
          />
        )}
      </AnimatePresence>

      {/* Spotlight Ring */}
      {coords && (
        <div
          className="absolute border-2 border-blue-500/80 rounded-2xl shadow-[0_0_25px_rgba(59,130,246,0.4),inset_0_0_15px_rgba(59,130,246,0.2)] animate-pulse pointer-events-auto"
          style={{
            position: "fixed",
            top: coords.top - 4,
            left: coords.left - 4,
            width: coords.width + 8,
            height: coords.height + 8,
          }}
        />
      )}

      {/* Tooltip Card */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 15 }}
          transition={{ type: "spring", stiffness: 350, damping: 26 }}
          className="w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-blue-100/80 dark:border-slate-800 rounded-3xl p-5 md:p-6 shadow-[0_24px_60px_rgba(37,99,235,0.08)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.5)] pointer-events-auto relative"
          style={tooltipStyle}
        >
          {/* Header indicator */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <IconComponent className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-550 uppercase tracking-widest bg-slate-950/[0.03] dark:bg-white/[0.03] px-2.5 py-1 rounded-lg border border-slate-950/[0.04] dark:border-white/[0.04] select-none">
              Step {currentStep + 1} of {TOUR_STEPS.length}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="text-base font-extrabold text-slate-900 dark:text-white mb-2 leading-tight tracking-tight">
            {step.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {step.description}
          </p>

          {currentStep === 0 && (
            <div className="space-y-3 mt-4 mb-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-550 uppercase tracking-wider">Branch</label>
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  <option value="cs">Computer Science (CS)</option>
                  <option value="ec">Electronics (EC)</option>
                  <option value="me">Mechanical (ME)</option>
                  <option value="ce">Civil (CE)</option>
                  <option value="ee">Electrical (EE)</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-550 uppercase tracking-wider">Semester</label>
                <select
                  value={selectedSem}
                  onChange={(e) => setSelectedSem(Number(e.target.value))}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (
                    <option key={s} value={s}>Semester {s}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Footer Controls */}
          <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-4">
            {currentStep < TOUR_STEPS.length - 1 ? (
              <button
                onClick={handleSkip}
                className="text-[10px] font-bold text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 uppercase tracking-wider cursor-pointer transition-colors"
              >
                Skip
              </button>
            ) : (
              <div />
            )}

            {currentStep === 0 ? (
              <button
                onClick={handleSaveSetup}
                className="px-4.5 py-2 bg-blue-600 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 text-white font-extrabold text-[11px] rounded-xl flex items-center gap-1 shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-95 transition-all cursor-pointer"
              >
                Save & Start Tour <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-4.5 py-2 bg-blue-600 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 text-white font-extrabold text-[11px] rounded-xl flex items-center gap-1 shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-95 transition-all cursor-pointer"
              >
                {currentStep === TOUR_STEPS.length - 1 ? (
                  <>Finish <Sparkles className="w-3.5 h-3.5" /></>
                ) : (
                  <>Next <ChevronRight className="w-3.5 h-3.5" /></>
                )}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Global button to reset/replay tour
export function ReplayTourButton({ onStart }: { onStart: () => void }) {
  return (
    <button
      onClick={(e) => {
        triggerHaptic("medium", e);
        localStorage.removeItem("ktunode_onboarding_completed");
        onStart();
      }}
      title="Start Welcome Tour"
      className="fixed bottom-5 left-5 z-[50] w-9 h-9 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md text-slate-500 dark:text-slate-400 hover:text-blue-500 hover:border-blue-500/30 flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all"
      aria-label="Replay guided tour"
    >
      <HelpCircle className="w-5 h-5" />
    </button>
  );
}
