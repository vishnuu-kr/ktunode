"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle, ChevronRight, Sparkles, BookOpen, Clock, Zap,
} from "lucide-react";
import { triggerHaptic } from "@/lib/haptic";

// ─── Types & Steps ───────────────────────────────────────────────────────────
type Position = "center" | "bottom" | "top" | "left" | "right";
interface TourStep {
  targetId?: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  position: Position;
}
type Coords = { top: number; left: number; width: number; height: number };

const STEPS: TourStep[] = [
  { title: "Welcome to KTUNODE! 🚀", description: "Your B.Tech study cockpit. Let's do a quick, interactive setup to clear your checklist and unlock your cockpit.", icon: Sparkles, position: "center" },
  { targetId: "tour-subject-card", title: "Step 1: Explore Syllabus", description: "First, let's open a subject syllabus. Click the subject card to view its modules.", icon: BookOpen, position: "bottom" },
  { targetId: "tour-topic-row", title: "Step 2: Read Topic Notes", description: "Now, let's look at some notes. Click on the first topic in the list to open it.", icon: BookOpen, position: "bottom" },
  { targetId: "tour-topic-checkbox", title: "Step 3: Track Progress", description: "Once you read the notes, mark the topic as completed. Click 'Mark as Done' at the bottom.", icon: Zap, position: "top" },
  { targetId: "tour-back-button", title: "Step 4: Return to Dashboard", description: "Excellent! Let's return to the dashboard. Click the back button to go back.", icon: BookOpen, position: "bottom" },
  { targetId: "tour-tools-fab", title: "Step 5: Open Study Tools", description: "Lastly, let's open the Study Tools console. Click this FAB (or sidebar on desktop) to open your cockpit panel.", icon: Clock, position: "left" },
  { targetId: "tour-tools-close", title: "Step 6: Close Study Tools", description: "Great! Swipe down or click the header bar to close the Study Tools sheet and return to the dashboard.", icon: Clock, position: "bottom" },
  { title: "Quick Start Complete! 🎉", description: "Fantastic! All tasks completed. You're ready to score that 10.0 CGPA.", icon: Sparkles, position: "center" },
];

// ─── Layout helpers ───────────────────────────────────────────────────────────
const CARD_W = 316;
const PAD    = 8;

function resolveId(id: string) {
  return id === "tour-tools-fab" && typeof window !== "undefined" && window.innerWidth >= 1024
    ? "tour-tools-sidebar" : id;
}

function measureEl(id: string): Coords | null {
  const el = document.getElementById(resolveId(id));
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return r.width > 0 ? { top: r.top, left: r.left, width: r.width, height: r.height } : null;
}

function getCardXY(coords: Coords | null, pos: Position, cardHeight: number): { x: number; y: number } {
  if (typeof window === "undefined") return { x: 0, y: 0 };
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const mob = vw < 768;
  const cw  = mob ? vw - 28 : CARD_W;
  const G   = 14;

  if (!coords) {
    return { x: mob ? 14 : Math.max(14, vw / 2 - cw / 2), y: Math.max(72, vh / 2 - cardHeight / 2) };
  }
  const cx = coords.left + coords.width  / 2;
  const cy = coords.top  + coords.height / 2;

  if (mob) {
    const x = 14;
    if (pos === "left") return { x, y: Math.max(72, coords.top - cardHeight - G) };
    return coords.top + coords.height / 2 < vh / 2
      ? { x, y: Math.min(vh - cardHeight - 14, coords.top + coords.height + G) }
      : { x, y: Math.max(72, coords.top - cardHeight - G) };
  }
  switch (pos) {
    case "bottom": return { x: Math.max(14, Math.min(vw - cw - 14, cx - cw / 2)), y: Math.min(vh - cardHeight - 14, coords.top + coords.height + G) };
    case "top":    return { x: Math.max(14, Math.min(vw - cw - 14, cx - cw / 2)), y: Math.max(14, coords.top - cardHeight - G) };
    case "left":   return { x: Math.max(14, coords.left - cw - G),                y: Math.max(14, Math.min(vh - cardHeight - 14, cy - cardHeight / 2)) };
    case "right":  return { x: Math.min(vw - cw - 14, coords.left + coords.width + G), y: Math.max(14, Math.min(vh - cardHeight - 14, cy - cardHeight / 2)) };
    default:       return { x: Math.max(14, vw / 2 - cw / 2), y: Math.max(72, vh / 2 - cardHeight / 2) };
  }
}

// ─── Transition — same easing for EVERY animated element ─────────────────────
// Premium ease-out expo — buttery smooth, no overshoot
const T = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

// ─── Confetti Celebration ───────────────────────────────────────────────────
async function boom() {
  try {
    const confettiModule = await import("canvas-confetti");
    const confetti = typeof confettiModule === "function" ? confettiModule : (confettiModule.default || confettiModule);
    if (typeof confetti === "function") {
      confetti({ particleCount: 120, angle: 60,  spread: 80, origin: { x: 0,   y: 0.65 }, zIndex: 99999 });
      setTimeout(() => {
        confetti({ particleCount: 120, angle: 120, spread: 80, origin: { x: 1,   y: 0.65 }, zIndex: 99999 });
      }, 180);
      setTimeout(() => {
        confetti({ particleCount: 80,  spread: 100,             origin: { x: 0.5, y: 0.45 }, zIndex: 99999 });
      }, 400);
    }
  } catch (err) {
    console.error("confetti dynamic import/call error:", err);
  }
}

// ─── Component ────────────────────────────────────────────────────────────────
// ─── LocalStorage Sync ──────────────────────────────────────────────────────
const getStoredStep = (): number => {
  if (typeof window === "undefined") return 0;
  const saved = localStorage.getItem("ktunode_onboarding_step");
  if (saved !== null) {
    const val = parseInt(saved, 10);
    if (!isNaN(val) && val >= 0 && val < STEPS.length) return val;
  }
  return 0;
};

export default function OnboardingTour({
  view,
  onClose,
  mobileSheetOpen,
}: { currentBranch?: string; currentSem?: number; view?: string; onClose?: () => void; mobileSheetOpen?: boolean }) {
  const [step, setStepState] = useState<number>(0);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Custom step setter that syncs to localStorage
  const setStep = (newStep: number | ((prev: number) => number)) => {
    setStepState(prev => {
      const next = typeof newStep === "function" ? newStep(prev) : newStep;
      localStorage.setItem("ktunode_onboarding_step", next.toString());
      return next;
    });
  };

  console.log("OnboardingTour Render - view prop:", view, "step state:", step);

  // coords + the step those coords BELONG TO (updated atomically together)
  const [spot, setSpot] = useState<{ coords: Coords | null; stepIdx: number }>({
    coords: null, stepIdx: 0,
  });

  const cardRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState(252);

  useEffect(() => {
    setMounted(true);
    const q = new URLSearchParams(window.location.search);
    const tourParam = q.get("tour");
    if (tourParam === "start" || tourParam === "continue") {
      localStorage.removeItem("ktunode_onboarding_completed");
      localStorage.removeItem("ktunode_onboarding_step");
      localStorage.removeItem("ktunode_checklist_subject_viewed");
      localStorage.removeItem("ktunode_checklist_topic_completed");
      localStorage.removeItem("ktunode_checklist_tools_opened");
      localStorage.removeItem("ktunode_first_time_checklist_completed");
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("ktunode-checklist-sync"));
      }
      setStepState(0);
      localStorage.setItem("ktunode_onboarding_step", "0");
      window.history.replaceState({}, document.title, window.location.pathname);
    } else {
      const saved = getStoredStep();
      setStepState(saved);
    }
  }, []);

  // Auto-advance step based on view changes for the onboarding flow
  useEffect(() => {
    console.log("OnboardingTour Auto-Advance Effect - view prop:", view, "step state:", step);
    if (view === "subject" && step === 1) {
      console.log("OnboardingTour Auto-Advance - matching view === 'subject' && step === 1 -> setting step to 2");
      setStep(2);
      try { triggerHaptic("medium"); } catch {}
    } else if (view === "topic" && step === 2) {
      console.log("OnboardingTour Auto-Advance - matching view === 'topic' && step === 2 -> setting step to 3");
      setStep(3);
      try { triggerHaptic("medium"); } catch {}
    } else if (view === "dashboard" && step === 4) {
      console.log("OnboardingTour Auto-Advance - matching view === 'dashboard' && step === 4 -> setting step to 5");
      setStep(5);
      try { triggerHaptic("medium"); } catch {}
    }
  }, [view, step]);

  // Listen for checklist task updates to auto-advance steps
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleSync = () => {
      const topicCompleted = localStorage.getItem("ktunode_checklist_topic_completed") === "true";
      const toolsOpened = localStorage.getItem("ktunode_checklist_tools_opened") === "true";

      if (step === 3 && topicCompleted) {
        setStep(4);
        try { triggerHaptic("success"); } catch {}
      }
      if (step === 5 && toolsOpened) {
        const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
        if (isDesktop) {
          setStep(7);
          try { triggerHaptic("success"); } catch {}
        } else {
          setStep(6);
          try { triggerHaptic("medium"); } catch {}
        }
      }
    };
    window.addEventListener("ktunode-checklist-sync", handleSync);
    handleSync();
    return () => window.removeEventListener("ktunode-checklist-sync", handleSync);
  }, [step]);

  // Auto-advance from Step 6 to Step 7 when mobileSheetOpen becomes false
  useEffect(() => {
    if (step === 6 && !mobileSheetOpen) {
      console.log("OnboardingTour Auto-Advance - mobileSheetOpen became false on step 6 -> setting step to 7");
      setStep(7);
      try { triggerHaptic("success"); } catch {}
    }
  }, [mobileSheetOpen, step]);

  // Measure target for the current step and commit atomically
  useEffect(() => {
    if (!mounted || !visible) return;
    const s = STEPS[step];

    if (!s.targetId) {
      setSpot({ coords: null, stepIdx: step }); // center step
      return;
    }

    const el = document.getElementById(resolveId(s.targetId));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });

    const trySet = () => {
      const c = measureEl(s.targetId!);
      if (c) { setSpot({ coords: c, stepIdx: step }); return true; }
      return false;
    };

    if (!trySet()) {
      const t  = setTimeout(trySet, 100);
      const iv = setInterval(() => { if (trySet()) clearInterval(iv); }, 60);
      return () => { clearTimeout(t); clearInterval(iv); };
    }
  }, [step, mounted, visible]);

  // Keep spotlight in sync while scrolling / resizing
  useEffect(() => {
    if (!mounted || !visible) return;
    const s = STEPS[step];
    if (!s.targetId) return;
    const sync = () => {
      const c = measureEl(s.targetId!);
      if (c) setSpot(prev => prev.stepIdx === step ? { coords: c, stepIdx: step } : prev);
    };
    const iv = setInterval(sync, 120);
    window.addEventListener("resize", sync);
    window.addEventListener("scroll", sync, { passive: true });
    return () => { clearInterval(iv); window.removeEventListener("resize", sync); window.removeEventListener("scroll", sync); };
  }, [step, mounted, visible]);

  // Dynamically observe and measure card content height to prevent layout jumps
  useEffect(() => {
    if (!cardRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const h = (entry.target as HTMLElement).offsetHeight;
        if (h > 0) {
          setCardHeight(h);
        }
      }
    });
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [spot.stepIdx]);

  const handleNext = (e: React.MouseEvent) => {
    triggerHaptic("medium", e);
    if (step < STEPS.length - 1) {
      if (step === 0) {
        // Reset checklist items to start fresh
        localStorage.removeItem("ktunode_onboarding_completed");
        localStorage.removeItem("ktunode_checklist_subject_viewed");
        localStorage.removeItem("ktunode_checklist_topic_completed");
        localStorage.removeItem("ktunode_checklist_tools_opened");
        localStorage.removeItem("ktunode_first_time_checklist_completed");
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("ktunode-checklist-sync"));
        }
      }
      if (step === 5 && typeof window !== "undefined" && window.innerWidth >= 1024) {
        setStep(7);
      } else {
        setStep(s => s + 1);
      }
    } else {
      triggerHaptic("success", e);
      finish();
    }
  };
  const finish = async () => {
    localStorage.setItem("ktunode_onboarding_completed", "true");
    localStorage.removeItem("ktunode_onboarding_step");
    localStorage.setItem("ktunode_checklist_subject_viewed", "true");
    localStorage.setItem("ktunode_checklist_topic_completed", "true");
    localStorage.setItem("ktunode_checklist_tools_opened", "true");
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("ktunode-checklist-sync"));
    }
    await boom();
    setVisible(false);
    onClose?.();
  };

  if (!visible || !mounted) return null;

  const { coords, stepIdx } = spot;
  const dispStep = STEPS[stepIdx];       // position from the step we have coords for
  const mob      = window.innerWidth < 768;
  const cw       = mob ? window.innerWidth - 28 : CARD_W;
  const isCircleSpot = resolveId(dispStep.targetId || "") === "tour-tools-fab";
  const spotR    = isCircleSpot && coords ? Math.min(coords.width, coords.height) / 2 : 22;

  // Card target position
  const cardXY = getCardXY(coords, dispStep.position, cardHeight);

  const vw = typeof window !== "undefined" ? window.innerWidth : 1024;
  const vh = typeof window !== "undefined" ? window.innerHeight : 768;

  // Spotlight ring geometry - position at screen center with 0 size when no coords
  const ring = coords
    ? { x: coords.left - PAD, y: coords.top - PAD, w: coords.width + PAD * 2, h: coords.height + PAD * 2, o: 1 }
    : { x: vw / 2, y: vh / 2, w: 0, h: 0, o: 0 };

  const isSheetStep = stepIdx === 5 || stepIdx === 6;

  return (
    <div className="fixed inset-0 pointer-events-none select-none" style={{ zIndex: 9998 }}>

      {/* ── 1. Dark dimming overlay via SVG mask ─────────────────────── */}
      <svg
        className="absolute inset-0 pointer-events-none"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <defs>
          <mask id="tour-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            {/* This rect is the "hole" — same tween as the ring */}
            <motion.rect
              animate={{
                x: ring.x,
                y: ring.y,
                width: ring.w,
                height: ring.h,
                rx: spotR,
                ry: spotR
              }}
              transition={T}
              fill="black"
            />
          </mask>
        </defs>
        <motion.rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          animate={{ fill: isSheetStep ? "rgba(2,6,23,0.28)" : "rgba(2,6,23,0.74)" }}
          transition={T}
          mask="url(#tour-mask)"
        />
      </svg>

      {/* ── 2a. Pulsing halo ring (behind main ring for premium micro-interaction) ─── */}
      {ring.o > 0 && (
        <motion.div
          animate={{
            x: ring.x - 4,
            y: ring.y - 4,
            width: ring.w + 8,
            height: ring.h + 8,
            scale: [1, 1.05, 1],
            opacity: [0.15, 0.45, 0.15],
            borderRadius: spotR + 4
          }}
          transition={{
            x: T,
            y: T,
            width: T,
            height: T,
            scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            opacity: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
          className="fixed top-0 left-0 pointer-events-none"
          style={{
            border: "1.5px solid var(--color-accent)",
            zIndex: 9998,
          }}
        />
      )}

      {/* ── 2. Spotlight ring (exact same animate values as SVG rect) ─── */}
      <motion.div
        animate={{
          x: ring.x,
          y: ring.y,
          width: ring.w,
          height: ring.h,
          opacity: ring.o,
          borderRadius: spotR
        }}
        transition={T}
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          border: "2px solid var(--color-accent)",
          boxShadow: [
            "0 0 0 1px color-mix(in srgb, var(--color-accent) 25%, transparent)",
            "0 0 28px 6px color-mix(in srgb, var(--color-accent) 30%, transparent)",
            "inset 0 0 12px 2px color-mix(in srgb, var(--color-accent) 10%, transparent)",
          ].join(", "),
          zIndex: 9999,
        }}
      />

      {/* ── 4. Tooltip card — one box, slides via CSS tween ───────────── */}
      <motion.div
        ref={cardRef}
        animate={{ x: cardXY.x, y: cardXY.y, opacity: 1 }}
        initial={{ x: cardXY.x, y: cardXY.y, opacity: 0 }}
        transition={T}
        className="fixed top-0 left-0 pointer-events-auto rounded-[28px] p-6 bg-white/95 dark:bg-slate-900/95 border border-slate-200/50 dark:border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl"
        style={{
          width: cw,
          zIndex: 10001,
        }}
      >
        {/* Content cross-fades between steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={stepIdx}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <TourCardContent
              step={STEPS[stepIdx]}
              idx={stepIdx}
              total={STEPS.length}
              onNext={handleNext}
              onSkip={e => { triggerHaptic("warning", e); finish(); }}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

// ─── Card Content UI ──────────────────────────────────────────────────────────
function TourCardContent({ step, idx, total, onNext, onSkip }: {
  step: TourStep; idx: number; total: number;
  onNext: (e: React.MouseEvent) => void;
  onSkip: (e: React.MouseEvent) => void;
}) {
  const Icon   = step.icon;
  const isLast = idx === total - 1;
  return (
    <>
      {/* Icon + counter */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-[38px] h-[38px] rounded-[12px] flex items-center justify-center text-white shadow-md shadow-blue-500/10"
          style={{ background: "var(--color-accent)" }}>
          <Icon className="w-[18px] h-[18px]" />
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.14em] select-none px-2.5 py-1 rounded-[8px] text-slate-500 dark:text-slate-400 bg-slate-100/60 dark:bg-slate-800/50 border border-slate-200/40 dark:border-slate-700/40">
          {idx + 1} / {total}
        </span>
      </div>

      {/* Progress pills */}
      <div className="flex gap-[5px] mb-[18px]">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} style={{
            height: 3.5, borderRadius: 99, flex: i === idx ? 2.5 : 1,
            background: i <= idx ? "var(--color-accent)" : "rgba(0,0,0,0.07)",
            transition: "flex 0.35s ease, background 0.25s ease",
          }} className="dark:bg-white/[0.08]" />
        ))}
      </div>

      {/* Text */}
      <h3 className="mb-[6px] leading-snug tracking-tight text-slate-900 dark:text-slate-100 font-extrabold"
        style={{ fontSize: 14.5 }}>
        {step.title}
      </h3>
      <p className="leading-relaxed mb-5 text-slate-500 dark:text-slate-400 font-semibold"
        style={{ fontSize: 12 }}>
        {step.description}
      </p>

      {/* Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-850/60">
        {!isLast ? (
          <button onClick={onSkip} className="cursor-pointer transition-colors text-slate-400 hover:text-slate-650 dark:hover:text-slate-200 font-bold"
            style={{ fontSize: 9.5, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Skip tour
          </button>
        ) : <div />}

        {idx === 1 ? (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 text-[#007AFF] border border-blue-500/15 animate-pulse select-none my-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-wider">Click subject to proceed</span>
          </div>
        ) : idx === 2 ? (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 text-[#007AFF] border border-blue-500/15 animate-pulse select-none my-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-wider">Click topic to proceed</span>
          </div>
        ) : idx === 3 ? (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 text-[#007AFF] border border-blue-500/15 animate-pulse select-none my-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-wider">Click Mark as Done</span>
          </div>
        ) : idx === 4 ? (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 text-[#007AFF] border border-blue-500/15 animate-pulse select-none my-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-wider">Click Back to Dashboard</span>
          </div>
        ) : idx === 5 ? (
          typeof window !== "undefined" && window.innerWidth >= 1024 ? (
            <button onClick={onNext}
              className="flex items-center gap-[6px] cursor-pointer active:scale-95 transition-transform"
              style={{
                fontSize: 11, fontWeight: 900, color: "#fff",
                padding: "8px 16px", borderRadius: 12,
                background: "linear-gradient(to bottom, #2E95FF, #007AFF)",
                boxShadow: "0 3px 12px rgba(0, 122, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.35)",
                border: "1px solid rgba(0, 122, 255, 0.2)",
              }}>
              <span>Next</span>
              <ChevronRight className="w-[14px] h-[14px]" />
            </button>
          ) : (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 text-[#007AFF] border border-blue-500/15 animate-pulse select-none my-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-wider">Open Study Tools</span>
            </div>
          )
        ) : idx === 6 ? (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 text-[#007AFF] border border-blue-500/15 animate-pulse select-none my-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-wider">Close Study Tools</span>
          </div>
        ) : (
          <button onClick={onNext}
            className="flex items-center gap-[6px] cursor-pointer active:scale-95 hover:scale-[1.03] transition-transform duration-200"
            style={{
              fontSize: 11, fontWeight: 900, color: "#fff",
              padding: "8px 16px", borderRadius: 12,
              background: "linear-gradient(to bottom, #2E95FF, #007AFF)",
              boxShadow: "0 3px 12px rgba(0, 122, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.35)",
              border: "1px solid rgba(0, 122, 255, 0.2)",
            }}>
            {idx === 0  ? <><span>Start Tour</span>  <ChevronRight className="w-[14px] h-[14px]" /></> :
             isLast     ? <><span>Finish</span>       <Sparkles     className="w-[14px] h-[14px]" /></> :
                           <><span>Next</span>         <ChevronRight className="w-[14px] h-[14px]" /></>}
          </button>
        )}
      </div>
    </>
  );
}

// ─── Replay button ────────────────────────────────────────────────────────────
export function ReplayTourButton({ onStart }: { onStart: () => void }) {
  return (
    <button
      onClick={e => {
        triggerHaptic("medium", e);
        localStorage.removeItem("ktunode_onboarding_completed");
        localStorage.removeItem("ktunode_onboarding_step");
        localStorage.removeItem("ktunode_checklist_subject_viewed");
        localStorage.removeItem("ktunode_checklist_topic_completed");
        localStorage.removeItem("ktunode_checklist_tools_opened");
        localStorage.removeItem("ktunode_first_time_checklist_completed");
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("ktunode-checklist-sync"));
        }
        onStart();
      }}
      title="Replay guided tour" aria-label="Replay guided tour"
      className="fixed bottom-6 left-6 z-50 w-10 h-10 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md text-slate-500 dark:text-slate-400 flex items-center justify-center shadow-xl cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
    >
      <HelpCircle className="w-5 h-5" />
    </button>
  );
}
