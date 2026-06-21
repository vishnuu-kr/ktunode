"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FlaskConical, Plus, Trash2, Info, Brain,
  BookOpen, ShieldCheck, Check, Sparkles
} from "lucide-react";
import { triggerHaptic } from "@/lib/haptic";
import { getDefaultLabsForSession, LabCourse, LabExercise } from "@/data/lab_templates";

interface LabRecordTrackerProps {
  branch: string;
  sem: number;
  triggerNotification: (msg: string) => void;
}

export default function LabRecordTracker({ branch, sem, triggerNotification }: LabRecordTrackerProps) {
  const [labCourses, setLabCourses] = useState<LabCourse[]>([]);
  const [activeLabTab, setActiveLabTab] = useState<string>("");
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const savedLabs = localStorage.getItem(`ktunode_tools_labs_${branch}_${sem}`);
    if (savedLabs) {
      try {
        const parsed = JSON.parse(savedLabs);
        if (Array.isArray(parsed)) {
          setLabCourses(parsed);
          if (parsed.length > 0) setActiveLabTab(parsed[0].id);
          return;
        }
      } catch (e) {
        console.error("Error reading saved lab templates", e);
      }
    }
    
    // Auto-preload template labs instead of defaulting to empty list
    const defaultLabs = getDefaultLabsForSession(branch, sem);
    setLabCourses(defaultLabs);
    if (defaultLabs.length > 0) {
      setActiveLabTab(defaultLabs[0].id);
    }
  }, [branch, sem]);

  const saveLabs = (updated: LabCourse[]) => {
    setLabCourses(updated);
    localStorage.setItem(`ktunode_tools_labs_${branch}_${sem}`, JSON.stringify(updated));
  };

  const addLabExercise = (labId: string) => {
    triggerHaptic("light");
    const label = prompt("Enter Exercise Title/Name:", "Ex: File Transfer Protocol");
    if (!label) return;

    const updated = labCourses.map(lab => {
      if (lab.id === labId) {
        const nextId = `ex_${Date.now()}`;
        return {
          ...lab,
          exercises: [
            ...lab.exercises,
            { id: nextId, name: label, logic: false, record: false, viva: false, signed: false }
          ]
        };
      }
      return lab;
    });
    saveLabs(updated);
    triggerNotification("New exercise added to record!");
  };

  const removeLabExercise = (labId: string, exId: string) => {
    triggerHaptic("warning");
    const lab = labCourses.find(l => l.id === labId);
    const exercise = lab?.exercises.find(ex => ex.id === exId);
    const name = exercise ? exercise.name : "this experiment";
    
    if (!window.confirm(`Are you sure you want to delete "${name}" from the tracker?`)) {
      return;
    }
    
    const updated = labCourses.map(lab => {
      if (lab.id === labId) {
        return {
          ...lab,
          exercises: lab.exercises.filter(ex => ex.id !== exId)
        };
      }
      return lab;
    });
    saveLabs(updated);
    triggerNotification("Exercise removed.");
  };

  const toggleMilestone = (labId: string, exId: string, milestone: keyof Omit<LabExercise, "id" | "name">) => {
    triggerHaptic("light");
    const updated = labCourses.map(lab => {
      if (lab.id === labId) {
        return {
          ...lab,
          exercises: lab.exercises.map(ex => {
            if (ex.id === exId) {
              const currentVal = ex[milestone];
              return { ...ex, [milestone]: !currentVal };
            }
            return ex;
          })
        };
      }
      return lab;
    });
    saveLabs(updated);
  };

  const updateExerciseName = (labId: string, exId: string, newName: string) => {
    const updated = labCourses.map(lab => {
      if (lab.id === labId) {
        return {
          ...lab,
          exercises: lab.exercises.map(ex => {
            if (ex.id === exId) {
              return { ...ex, name: newName };
            }
            return ex;
          })
        };
      }
      return lab;
    });
    saveLabs(updated);
  };

  const handleLoadDefaultLabs = () => {
    triggerHaptic("success");
    const defaultLabs = getDefaultLabsForSession(branch, sem);
    saveLabs(defaultLabs);
    if (defaultLabs.length > 0) {
      setActiveLabTab(defaultLabs[0].id);
    }
    triggerNotification("Lab templates loaded successfully!");
  };

  const activeLab = labCourses.find(l => l.id === activeLabTab);
  const totalExercises = activeLab?.exercises.length || 0;
  const completedExercises = activeLab?.exercises.filter(ex => ex.logic && ex.record && ex.signed).length || 0;
  const progressPct = totalExercises > 0 ? Math.round((completedExercises / totalExercises) * 100) : 0;

  return (
    <div className="grid grid-cols-1 gap-6 w-full">
      <div className="bg-white/80 dark:bg-slate-950/60 backdrop-blur-3xl border border-slate-200/50 dark:border-white/[0.04] rounded-3xl p-5 md:p-6 shadow-xl space-y-5">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.04] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <FlaskConical className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight leading-none">Lab Record Tracker</h3>
                <button 
                  onClick={() => setShowInfo(!showInfo)}
                  className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
                  aria-label="Lab Record information"
                >
                  <Info className="w-3.5 h-3.5" />
                </button>
              </div>
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block mt-1">Track experiment submissions & signing milestone</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {labCourses.length === 0 ? (
              <button
                onClick={handleLoadDefaultLabs}
                className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" /> Load S{sem} Labs
              </button>
            ) : (
              <span className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-550 dark:text-slate-400">
                {labCourses.length} Active Labs
              </span>
            )}
          </div>
        </div>

        {/* Info Box */}
        <AnimatePresence>
          {showInfo && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-slate-50 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-800/80 rounded-2xl p-4 text-xs text-slate-550 dark:text-slate-400 leading-relaxed space-y-2 font-sans"
            >
              <p className="font-bold text-slate-800 dark:text-slate-200">Lab Record Checkpoints:</p>
              <p>For each experiment, complete all 3 milestones to mark it 100% done:</p>
              <ul className="list-disc pl-4 space-y-1 font-mono">
                <li><strong className="text-teal-600 dark:text-teal-400">Logic:</strong> Code implementation or circuit layout verified.</li>
                <li><strong className="text-purple-600 dark:text-purple-400">Record:</strong> Printed layout or manuscript written.</li>
                <li><strong className="text-blue-600 dark:text-blue-400">Signed:</strong> Physically signed-off by lab instructor.</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {labCourses.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 px-4 border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl bg-slate-50/20 dark:bg-slate-900/10 text-center">
            <FlaskConical className="w-10 h-10 text-slate-350 dark:text-slate-650 mb-3" />
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-1">No Labs Imported</span>
            <span className="text-xs text-slate-400 dark:text-slate-500 max-w-sm block leading-normal mb-4">
              Import the syllabus-prescribed core labs for {branch.toUpperCase()} Semester {sem} to begin tracking your lab checklist.
            </span>
            <button
              onClick={handleLoadDefaultLabs}
              className="px-4 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" /> Load S{sem} Default Templates
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Tabs for Lab Courses */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-2 border-b border-slate-100 dark:border-white/[0.03]">
              {labCourses.map(lab => (
                <button
                  key={lab.id}
                  onClick={() => {
                    triggerHaptic("light");
                    setActiveLabTab(lab.id);
                  }}
                  className={`px-3.5 py-1.5 rounded-2xl text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
                    activeLabTab === lab.id
                      ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-extrabold"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 border border-transparent hover:bg-slate-100 dark:hover:bg-white/[0.02]"
                  }`}
                >
                  {lab.name}
                </button>
              ))}
            </div>

            {/* Active Lab exercises view */}
            {activeLab && (
              <div className="space-y-4">
                {/* Course Name and Progress */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200/40 dark:border-white/[0.02]">
                  <div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">{activeLab.name}</span>
                    <span className="text-[10px] text-slate-450 dark:text-slate-500 block mt-1">
                      {completedExercises} of {totalExercises} experiments fully completed
                    </span>
                  </div>
                  <div className="flex items-center gap-3 self-start sm:self-auto shrink-0 w-full sm:w-auto">
                    <div className="flex-1 sm:flex-initial h-2 w-full sm:w-32 bg-slate-200 dark:bg-slate-850 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-550 ${
                          progressPct >= 80 ? "bg-emerald-500" : progressPct >= 50 ? "bg-blue-500" : "bg-amber-500"
                        }`}
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                    <span className={`px-2 py-0.5 rounded-lg text-[9px] font-black font-mono shrink-0 ${
                      progressPct >= 80 ? "bg-emerald-500/10 text-emerald-500" : progressPct >= 50 ? "bg-blue-500/10 text-blue-500" : "bg-amber-500/10 text-amber-500"
                    }`}>
                      {progressPct}%
                    </span>
                  </div>
                </div>

                {/* Experiments List */}
                <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
                  {/* Table headers */}
                  <div className="grid grid-cols-12 gap-2 px-4 py-1.5 text-[9px] font-bold text-slate-450 dark:text-slate-400 uppercase tracking-widest items-center text-center border-b border-slate-100 dark:border-white/[0.03] mb-2">
                    <div className="col-span-5 text-left pl-2">Experiment Title</div>
                    <div className="col-span-2">Logic</div>
                    <div className="col-span-2">Record</div>
                    <div className="col-span-2">Signed</div>
                    <div className="col-span-1"></div>
                  </div>
 
                  {activeLab.exercises.map((ex) => {
                    const isAllCompleted = ex.logic && ex.record && ex.signed;
                    
                    return (
                      <div 
                        key={ex.id}
                        className={`grid grid-cols-12 gap-2 items-center px-4 py-2 rounded-2xl border transition-all duration-300 ${
                          isAllCompleted 
                            ? "bg-emerald-500/[0.02] border-emerald-500/20 dark:border-emerald-500/15" 
                            : "bg-slate-50/40 dark:bg-slate-900/10 border-slate-200/50 dark:border-slate-800/40 hover:border-slate-300 dark:hover:border-slate-750"
                        }`}
                      >
                        {/* Title input */}
                        <div className="col-span-5 flex items-center">
                          <input
                            type="text"
                            value={ex.name}
                            onChange={(e) => updateExerciseName(activeLab.id, ex.id, e.target.value)}
                            className="w-full bg-transparent border-none focus:outline-none focus:ring-1 focus:ring-blue-500/20 rounded px-1.5 py-1 text-xs font-semibold text-slate-800 dark:text-slate-200 truncate"
                          />
                        </div>
 
                        {/* Logic Milestone (Teal) */}
                        <div className="col-span-2 flex items-center justify-center">
                          <button
                            onClick={() => toggleMilestone(activeLab.id, ex.id, "logic")}
                            className={`w-7 h-7 sm:w-6 sm:h-6 flex items-center justify-center transition-all cursor-pointer rounded-full border active:scale-90 ${
                              ex.logic 
                                ? "bg-teal-500 text-white border-transparent shadow-sm shadow-teal-500/20" 
                                : "border-slate-300 dark:border-slate-700 bg-transparent text-slate-400 hover:text-slate-600 dark:text-slate-500"
                            }`}
                            aria-label={`Verify logic for ${ex.name}`}
                          >
                            <Brain className="w-3.5 h-3.5" />
                          </button>
                        </div>
 
                        {/* Record Milestone (Purple) */}
                        <div className="col-span-2 flex items-center justify-center">
                          <button
                            onClick={() => toggleMilestone(activeLab.id, ex.id, "record")}
                            className={`w-7 h-7 sm:w-6 sm:h-6 flex items-center justify-center transition-all cursor-pointer rounded-full border active:scale-90 ${
                              ex.record 
                                ? "bg-purple-500 text-white border-transparent shadow-sm shadow-purple-500/20" 
                                : "border-slate-300 dark:border-slate-700 bg-transparent text-slate-400 hover:text-slate-600 dark:text-slate-500"
                            }`}
                            aria-label={`Verify record for ${ex.name}`}
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                          </button>
                        </div>
 
                        {/* Signed Milestone (Blue) */}
                        <div className="col-span-2 flex items-center justify-center">
                          <button
                            onClick={() => toggleMilestone(activeLab.id, ex.id, "signed")}
                            className={`w-7 h-7 sm:w-6 sm:h-6 flex items-center justify-center transition-all cursor-pointer rounded-lg border active:scale-90 ${
                              ex.signed 
                                ? "bg-blue-500 text-white border-transparent shadow-sm shadow-blue-500/20" 
                                : "border-slate-300 dark:border-slate-700 bg-transparent text-slate-450 dark:text-slate-500"
                            }`}
                            aria-label={`Mark signed for ${ex.name}`}
                          >
                            {ex.signed ? <Check className="w-3.5 h-3.5 stroke-[2.5]" /> : <ShieldCheck className="w-3.5 h-3.5" />}
                          </button>
                        </div>
 
                        {/* Action (Delete) */}
                        <div className="col-span-1 flex justify-center items-center">
                          <button
                            onClick={() => removeLabExercise(activeLab.id, ex.id)}
                            className="text-slate-400 hover:text-rose-500 transition-all p-1.5 rounded-lg hover:bg-rose-500/10 cursor-pointer active:scale-90"
                            aria-label="Remove experiment"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Add experiment row */}
                <div className="pt-3 border-t border-slate-100 dark:border-white/[0.03] flex justify-end">
                  <button
                    onClick={() => addLabExercise(activeLab.id)}
                    className="px-3.5 py-1.5 bg-blue-500/10 hover:bg-blue-500/15 border border-blue-500/15 text-blue-600 dark:text-blue-400 rounded-2xl text-[10px] font-bold uppercase transition-all cursor-pointer flex items-center gap-1 active:scale-95"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Experiment
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
