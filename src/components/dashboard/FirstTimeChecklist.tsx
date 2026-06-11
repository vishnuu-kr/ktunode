"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckSquare, Square, Award, Sparkles,
  BookOpen, CheckCircle, Sliders, X,
} from "lucide-react";
import { triggerHaptic } from "@/lib/haptic";

// ─── Storage keys ─────────────────────────────────────────────────────────────
const K = {
  subjectViewed:  "ktunode_checklist_subject_viewed",
  topicCompleted: "ktunode_checklist_topic_completed",
  toolsOpened:    "ktunode_checklist_tools_opened",
  completed:      "ktunode_first_time_checklist_completed",
} as const;

function readTasks() {
  return {
    subjectViewed:  localStorage.getItem(K.subjectViewed)  === "true",
    topicCompleted: localStorage.getItem(K.topicCompleted) === "true",
    toolsOpened:    localStorage.getItem(K.toolsOpened)    === "true",
  };
}
const isAllDone = (t: ReturnType<typeof readTasks>) =>
  t.subjectViewed && t.topicCompleted && t.toolsOpened;

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
    } else {
      console.error("confetti is not a function", confetti);
    }
  } catch (err) {
    console.error("confetti dynamic import/call error:", err);
  }
}

// ─── Component ────────────────────────────────────────────────────────────────
interface Props { isDashboardView: boolean }

export default function FirstTimeChecklist({ isDashboardView }: Props) {
  const [visible,  setVisible]  = useState(false);
  const [tasks,    setTasks]    = useState({ subjectViewed: false, topicCompleted: false, toolsOpened: false });
  const [allDone,  setAllDone]  = useState(false);
  const [glowing,  setGlowing]  = useState(false);

  const celebratedRef     = useRef(false);
  const timersRef         = useRef<ReturnType<typeof setTimeout>[]>([]);
  // Keep a live ref to isDashboardView so the stale closure inside useEffect can read it
  const isDashboardRef    = useRef(isDashboardView);
  useEffect(() => { isDashboardRef.current = isDashboardView; }, [isDashboardView]);

  // Override it once (we use Object.assign trick to keep same ref identity)
  const celebrateFn = () => {
    if (celebratedRef.current) return;
    celebratedRef.current = true;
    localStorage.setItem(K.completed, "true");
    try { triggerHaptic("success"); } catch {}
    setGlowing(true);
    boom();
    // 800ms gap showing the glow on all checked tasks before transition
    const t1 = setTimeout(() => setAllDone(true),   800);
    // 3.3-second display time to let user grasp the completion screen
    const t2 = setTimeout(() => setVisible(false),  3300);
    timersRef.current.push(t1, t2);
  };
  // Use a stable ref for the celebration function
  const celebrateRef = useRef(celebrateFn);
  // Update ref on every render so it's never stale
  useEffect(() => {
    celebrateRef.current = celebrateFn;
  });

  // ── main effect — runs once on mount ──────────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(K.completed) === "true") return;

    setVisible(true);
    const initial = readTasks();
    setTasks(initial);

    // If already all done on mount, fire celebration immediately if onboarding completed
    if (isAllDone(initial) && localStorage.getItem("ktunode_onboarding_completed") === "true") {
      // Small delay so the card has time to render and the user can see it
      const t = setTimeout(() => celebrateRef.current(), 600);
      timersRef.current.push(t);
    }

    const onSync = () => {
      if (localStorage.getItem(K.completed) === "true") {
        setVisible(false);
        return;
      }
      const updated = readTasks();
      setTasks(updated);
      if (isAllDone(updated) && !celebratedRef.current && localStorage.getItem("ktunode_onboarding_completed") === "true") {
        if (isDashboardRef.current) {
          // 500ms delay to let the tour overlay fade out cleanly first
          const t = setTimeout(() => {
            celebrateRef.current();
          }, 500);
          timersRef.current.push(t);
        } else {
          // User is in subject/topic view — fire when they return
          // (handled by the isDashboardView effect below)
        }
      }
    };

    window.addEventListener("ktunode-checklist-sync", onSync);
    const activeTimers = timersRef.current;
    return () => {
      window.removeEventListener("ktunode-checklist-sync", onSync);
      activeTimers.forEach(clearTimeout);
    };
  }, []);

  // ── fire when user navigates back to dashboard view ───────────────────────
  useEffect(() => {
    if (!isDashboardView) return;
    if (celebratedRef.current) return;
    // Check if tasks are actually complete (user completed them while away)
    if (typeof window === "undefined") return;
    if (localStorage.getItem(K.completed) === "true") return;
    const current = readTasks();
    if (!isAllDone(current)) return;

    // Only celebrate if onboarding is completed
    if (localStorage.getItem("ktunode_onboarding_completed") !== "true") return;

    const t = setTimeout(() => celebrateRef.current(), 400);
    return () => clearTimeout(t);
  }, [isDashboardView]);

  const completedCount = Object.values(tasks).filter(Boolean).length;
  const pct = Math.round((completedCount / 3) * 100);

  const taskList = [
    { key: "subjectViewed"  as const, label: "Explore a subject syllabus",  Icon: BookOpen    },
    { key: "topicCompleted" as const, label: "Mark any topic complete",       Icon: CheckCircle },
    { key: "toolsOpened"    as const, label: "Open the Study Tools sheet",    Icon: Sliders     },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.96 }}
      animate={{
        opacity: 1, y: 0, scale: 1,
        boxShadow: glowing
          ? "0 0 0 2.5px var(--color-accent), 0 8px 40px color-mix(in srgb, var(--color-accent) 28%, transparent)"
          : "0 2px 8px rgba(0,0,0,0.05)",
      }}
      exit={{ opacity: 0, y: -14, scale: 0.96 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className="relative overflow-hidden rounded-3xl border border-slate-200/70 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl p-5 md:p-6"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-40"
        style={{ background: "var(--color-accent)" }} />

      {/* dismiss */}
      {!allDone && (
        <button
          onClick={() => { setVisible(false); localStorage.setItem(K.completed, "true"); triggerHaptic("warning"); }}
          className="absolute top-4 right-4 z-10 p-1 text-slate-400 hover:text-slate-600 dark:text-slate-500 rounded-lg transition-colors cursor-pointer"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {/* header */}
      <div className="mb-4 pr-7">
        <div className="flex items-center gap-1.5 mb-0.5 select-none">
          <Award className="w-3.5 h-3.5 animate-bounce" style={{ color: "var(--color-accent)" }} />
          <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: "var(--color-accent)" }}>
            Quick Start Mission
          </span>
        </div>
        <h3 className="text-[13px] font-black text-slate-800 dark:text-white">Learn the ropes</h3>
        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium mt-0.5">
          Complete 3 tasks to unlock the full cockpit:
        </p>
      </div>

      {/* progress bar */}
      <div className="mb-4 space-y-1">
        <div className="flex justify-between text-[9px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
          <span>Progress</span><span>{completedCount} / 3</span>
        </div>
        <div className="h-1.5 w-full rounded-full overflow-hidden bg-slate-100 dark:bg-white/[0.06]">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "var(--color-accent)" }}
            initial={{ width: "0%" }}
            animate={{ width: `${pct}%` }}
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
          />
        </div>
      </div>

      {/* tasks */}
      <div className="space-y-2">
        {taskList.map(({ key, label, Icon }) => (
          <motion.div
            key={key}
            animate={{ opacity: tasks[key] ? 0.65 : 1 }}
            className="flex items-center justify-between text-xs p-2.5 rounded-xl border transition-colors"
            style={{
              background:   tasks[key] ? "color-mix(in srgb, var(--color-accent) 5%, transparent)"  : "color-mix(in srgb, var(--color-fg) 3%, transparent)",
              borderColor:  tasks[key] ? "color-mix(in srgb, var(--color-accent) 18%, transparent)" : "color-mix(in srgb, var(--color-fg) 6%, transparent)",
            }}
          >
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg transition-all" style={{
                background: tasks[key] ? "color-mix(in srgb, var(--color-accent) 14%, transparent)" : "color-mix(in srgb, var(--color-fg) 7%, transparent)",
                color:      tasks[key] ? "var(--color-accent)" : "var(--color-muted)",
              }}>
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold" style={{
                color:           tasks[key] ? "var(--color-muted)" : "var(--color-fg)",
                textDecoration:  tasks[key] ? "line-through" : "none",
              }}>{label}</span>
            </div>
            <AnimatePresence mode="wait">
              {tasks[key] ? (
                <motion.div key="on" initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0 }}
                  transition={{ type: "spring", stiffness: 420, damping: 22 }}>
                  <CheckSquare className="w-4 h-4 shrink-0" style={{ color: "var(--color-accent)" }} />
                </motion.div>
              ) : (
                <motion.div key="off" exit={{ scale: 0 }}>
                  <Square className="w-4 h-4 shrink-0 text-slate-300 dark:text-slate-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* ── celebration overlay ────────────────────────────────────────────── */}
      <AnimatePresence>
        {allDone && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            onClick={(e) => {
              e.stopPropagation();
              setVisible(false);
              localStorage.setItem(K.completed, "true");
              try { triggerHaptic("light"); } catch {}
            }}
            className="absolute inset-0 rounded-3xl z-20 overflow-hidden flex flex-col items-center justify-center p-5 text-center bg-gradient-to-br from-[#2E95FF] via-[#007AFF] to-[#4F46E5] text-white cursor-pointer select-none"
          >
            {/* dismiss */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setVisible(false);
                localStorage.setItem(K.completed, "true");
                try { triggerHaptic("warning"); } catch {}
              }}
              className="absolute top-4 right-4 z-30 p-1.5 text-white/70 hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Dismiss"
            >
              <X className="w-4.5 h-4.5" />
            </button>

            {/* radial glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.18) 0%, transparent 65%)" }} />

            {/* icon */}
            <motion.div
              initial={{ scale: 0, rotate: -25, y: 10 }}
              animate={{ scale: 1, rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 360, damping: 20, delay: 0.05 }}
              className="mb-3 relative"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/25">
                <Sparkles className="w-8 h-8 text-amber-200" />
              </div>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-300" />
              </motion.div>
            </motion.div>

            {/* text */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-1">All tasks complete</div>
              <h4 className="text-[17px] font-black text-white leading-tight">Mission Cleared! 🎉</h4>
            </motion.div>

            {/* completed rows */}
            <div className="mt-3 w-full space-y-1.5">
              {["Explored a subject syllabus", "Marked a topic complete", "Opened Study Tools"].map((label, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.1, type: "spring", stiffness: 300, damping: 26 }}
                  className="flex items-center gap-2 text-[11px] text-white/80 bg-white/10 rounded-xl px-3 py-1.5 border border-white/15"
                >
                  <CheckSquare className="w-3.5 h-3.5 text-amber-200 shrink-0" />
                  <span className="font-semibold">{label}</span>
                </motion.div>
              ))}
            </div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="text-[10px] text-white/60 mt-3 font-semibold">
              You&apos;re ready to score that 10.0 CGPA 🚀
            </motion.p>

            {/* auto-dismiss bar */}
            <motion.div className="absolute bottom-0 left-0 h-[3px] rounded-b-3xl"
              style={{ background: "rgba(255,255,255,0.35)" }}
              initial={{ width: "100%" }} animate={{ width: "0%" }}
              // 2.1s duration + 0.4s delay = 2.5s total (matches 3.3s total time minus 0.8s initial glow)
              transition={{ duration: 2.1, ease: "linear", delay: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
