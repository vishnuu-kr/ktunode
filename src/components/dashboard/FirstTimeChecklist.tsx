"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckSquare, Square, Award, Sparkles, BookOpen, CheckCircle, Sliders, X } from "lucide-react";
import confetti from "canvas-confetti";
import { triggerHaptic } from "@/lib/haptic";
import { triggerChecklistTask } from "@/lib/checklist";

export default function FirstTimeChecklist() {
  const [visible, setVisible] = useState(false);
  const [tasks, setTasks] = useState({
    subjectViewed: false,
    topicCompleted: false,
    toolsOpened: false,
  });
  const [allDone, setAllDone] = useState(false);

  useEffect(() => {
    // Only show checklist if user hasn't fully completed it before
    const isCompletedBefore = localStorage.getItem("ktunode_first_time_checklist_completed") === "true";
    if (isCompletedBefore) return;

    // Show checklist
    setVisible(true);

    // Initial check
    const checkState = {
      subjectViewed: localStorage.getItem("ktunode_checklist_subject_viewed") === "true",
      topicCompleted: localStorage.getItem("ktunode_checklist_topic_completed") === "true",
      toolsOpened: localStorage.getItem("ktunode_checklist_tools_opened") === "true",
    };
    setTasks(checkState);

    // Event listener for state changes
    const handleChecklistUpdate = () => {
      const updated = {
        subjectViewed: localStorage.getItem("ktunode_checklist_subject_viewed") === "true",
        topicCompleted: localStorage.getItem("ktunode_checklist_topic_completed") === "true",
        toolsOpened: localStorage.getItem("ktunode_checklist_tools_opened") === "true",
      };
      setTasks(updated);

      if (updated.subjectViewed && updated.topicCompleted && updated.toolsOpened) {
        setAllDone(true);
        localStorage.setItem("ktunode_first_time_checklist_completed", "true");
        
        // Launch confetti celebration!
        setTimeout(() => {
          confetti({
            particleCount: 80,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
          });
          confetti({
            particleCount: 80,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
          });
        }, 300);

        // Hide checklist after 4 seconds
        setTimeout(() => {
          setVisible(false);
        }, 5000);
      }
    };

    window.addEventListener("ktunode-checklist-sync", handleChecklistUpdate);
    return () => window.removeEventListener("ktunode-checklist-sync", handleChecklistUpdate);
  }, []);

  if (!visible) return null;

  const completedCount = [tasks.subjectViewed, tasks.topicCompleted, tasks.toolsOpened].filter(Boolean).length;
  const progressPercent = Math.round((completedCount / 3) * 100);

  const handleDismiss = () => {
    setVisible(false);
    localStorage.setItem("ktunode_first_time_checklist_completed", "true");
    triggerHaptic("warning");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -15 }}
      className="p-5 md:p-6 rounded-3xl border border-blue-100 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl shadow-md relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 -mr-10 -mt-10 w-24 h-24 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-350 p-1 hover:bg-slate-950/[0.03] dark:hover:bg-white/[0.03] rounded-lg transition-colors cursor-pointer"
        aria-label="Dismiss checklist"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Header */}
      <div className="flex items-start justify-between mb-4 pr-6">
        <div>
          <div className="flex items-center gap-1.5 mb-1 select-none">
            <Award className="w-4 h-4 text-blue-500 animate-bounce" />
            <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              Quick Start Mission
            </span>
          </div>
          <h3 className="text-sm font-black text-slate-800 dark:text-white leading-tight">
            {allDone ? "Mission Accomplished!" : "Learn the ropes"}
          </h3>
          <p className="text-[10px] text-slate-400 dark:text-slate-550 font-semibold leading-normal mt-0.5">
            {allDone ? "Awesome job! You've unlocked the full cockpit potential." : "Complete these 3 simple tasks to master the study console:"}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      {!allDone && (
        <div className="space-y-1 mb-4 select-none">
          <div className="flex justify-between items-center text-[9px] font-black text-slate-400 dark:text-slate-550 uppercase tracking-wider">
            <span>Mission Progress</span>
            <span>{completedCount}/3 Tasks</span>
          </div>
          <div className="w-full h-1.5 bg-slate-950/[0.05] dark:bg-white/[0.05] rounded-full overflow-hidden relative border border-slate-950/[0.02] dark:border-white/[0.02]">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            />
          </div>
        </div>
      )}

      {/* Task List */}
      <div className="space-y-2.5">
        {/* Task 1 */}
        <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100/50 dark:border-slate-800/20">
          <div className="flex items-center gap-2.5">
            <div className={`p-1.5 rounded-lg transition-colors ${tasks.subjectViewed ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
              <BookOpen className="w-3.5 h-3.5" />
            </div>
            <span className={`font-semibold transition-all ${tasks.subjectViewed ? 'text-slate-400/80 line-through dark:text-slate-500' : 'text-slate-700 dark:text-slate-350'}`}>
              Explore a subject syllabus
            </span>
          </div>
          {tasks.subjectViewed ? (
            <CheckSquare className="w-4 h-4 text-emerald-500 shrink-0" />
          ) : (
            <Square className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0" />
          )}
        </div>

        {/* Task 2 */}
        <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100/50 dark:border-slate-800/20">
          <div className="flex items-center gap-2.5">
            <div className={`p-1.5 rounded-lg transition-colors ${tasks.topicCompleted ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
              <CheckCircle className="w-3.5 h-3.5" />
            </div>
            <span className={`font-semibold transition-all ${tasks.topicCompleted ? 'text-slate-400/80 line-through dark:text-slate-500' : 'text-slate-700 dark:text-slate-350'}`}>
              Mark any topic complete
            </span>
          </div>
          {tasks.topicCompleted ? (
            <CheckSquare className="w-4 h-4 text-emerald-500 shrink-0" />
          ) : (
            <Square className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0" />
          )}
        </div>

        {/* Task 3 */}
        <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100/50 dark:border-slate-800/20">
          <div className="flex items-center gap-2.5">
            <div className={`p-1.5 rounded-lg transition-colors ${tasks.toolsOpened ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
              <Sliders className="w-3.5 h-3.5" />
            </div>
            <span className={`font-semibold transition-all ${tasks.toolsOpened ? 'text-slate-400/80 line-through dark:text-slate-500' : 'text-slate-700 dark:text-slate-350'}`}>
              Open the Study Tools sheet
            </span>
          </div>
          {tasks.toolsOpened ? (
            <CheckSquare className="w-4 h-4 text-emerald-500 shrink-0" />
          ) : (
            <Square className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0" />
          )}
        </div>
      </div>

      {/* Success Modal Overlay */}
      <AnimatePresence>
        {allDone && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-0 bg-blue-600 dark:bg-blue-900 text-white flex flex-col items-center justify-center p-6 text-center z-10"
          >
            <Sparkles className="w-8 h-8 text-amber-300 animate-spin mb-2" />
            <h4 className="font-black text-sm uppercase tracking-wider">Mission Cleared!</h4>
            <p className="text-[10px] text-blue-100 mt-1 max-w-[200px] leading-relaxed">
              Confetti dispatched. You are ready to score 10.0 SGPA!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
