"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronRight, X, Sparkles, BookOpen, CheckCircle, Clock, Zap } from "lucide-react";
import confetti from "canvas-confetti";
import { triggerHaptic } from "@/lib/haptic";
import { triggerChecklistTask } from "@/lib/checklist";

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
    if (currentStep === 2) {
      triggerChecklistTask("toolsOpened");
    }
  }, [currentStep]);

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
        left: 0,
        right: 0,
        zIndex: 10000,
      };

      if (step.targetId === "tour-tools-fab") {
        // Place directly above the FAB
        tooltipStyle.bottom = `${window.innerHeight - coords.top + 12}px`;
      } else {
        tooltipStyle.top = isTargetAtBottom ? "80px" : "auto";
        tooltipStyle.bottom = isTargetAtBottom ? "auto" : "24px";
      }
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
          top: coords.top + coords.height / 2 - 110,
          left: coords.left - 340 - margin,
          zIndex: 10000,
        };
      } else if (step.position === "right") {
        tooltipStyle = {
          position: "fixed",
          top: coords.top + coords.height / 2 - 110,
          left: coords.left + coords.width + margin,
          zIndex: 10000,
        };
      }
    }
  } else {
    // Centered modal when there is no target element (Step 0 and Step 4)
    tooltipStyle = {};
  }

  const isToolsFab = step.targetId === "tour-tools-fab";
  const radius = isToolsFab ? (coords ? coords.height / 2 : 24) : 24;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Spotlight Backdrop Overlay */}
      <AnimatePresence>
        {coords && (
          <>
            {/* Click-blocking overlay using clipPath (transparent) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-transparent pointer-events-auto"
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
            {/* Visual overlay using SVG masking with rounded cutout */}
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <defs>
                <mask id="onboarding-mask">
                  <rect x="0" y="0" width="100%" height="100%" fill="white" />
                  <rect
                    x={coords.left - 4}
                    y={coords.top - 4}
                    width={coords.width + 8}
                    height={coords.height + 8}
                    rx={radius + 4}
                    ry={radius + 4}
                    fill="black"
                  />
                </mask>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="#020617" mask="url(#onboarding-mask)" />
            </motion.svg>
          </>
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
          className="absolute border-2 border-blue-500/80 shadow-[0_0_25px_rgba(59,130,246,0.4),inset_0_0_15px_rgba(59,130,246,0.2)] animate-pulse pointer-events-auto"
          style={{
            position: "fixed",
            top: coords.top - 4,
            left: coords.left - 4,
            width: coords.width + 8,
            height: coords.height + 8,
            borderRadius: isToolsFab ? "50%" : "28px"
          }}
        />
      )}

      {/* Tooltip Card Wrapper */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[10000]">
        <div 
          className={(!isMobile && coords) ? "relative w-[340px] pointer-events-none" : "relative w-full flex justify-center px-4 pointer-events-none"}
          style={tooltipStyle}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 26 }}
            className="w-full max-w-[340px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-blue-100/80 dark:border-slate-800 rounded-3xl p-5 md:p-6 shadow-[0_24px_60px_rgba(37,99,235,0.08)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.5)] pointer-events-auto relative"
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

            {/* Footer Controls */}
            <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-4">
              {currentStep < TOUR_STEPS.length - 1 ? (
                <button
                  onClick={handleSkip}
                  className="text-[10px] font-bold text-slate-450 hover:text-slate-650 dark:text-slate-500 dark:hover:text-slate-350 uppercase tracking-wider cursor-pointer transition-colors"
                >
                  Skip
                </button>
              ) : (
                <div />
              )}

              <button
                onClick={handleNext}
                className="px-4.5 py-2 bg-blue-600 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 text-white font-extrabold text-[11px] rounded-xl flex items-center gap-1 shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-95 transition-all cursor-pointer"
              >
                {currentStep === 0 ? (
                  <>Start Tour <ChevronRight className="w-3.5 h-3.5" /></>
                ) : currentStep === TOUR_STEPS.length - 1 ? (
                  <>Finish <Sparkles className="w-3.5 h-3.5" /></>
                ) : (
                  <>Next <ChevronRight className="w-3.5 h-3.5" /></>
                )}
              </button>
            </div>
          </motion.div>
        </div>
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
