"use client";

import React, { useState, useEffect } from "react";
import { Check, X, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { triggerHaptic } from "@/lib/haptic";

type SlotConfig = {
  subject: string;
  professor: string;
  vibe: "saint" | "robot" | "boss";
};

type DailyGauntletProps = {
  slots: Record<string, SlotConfig>;
  timetable: string[][]; // 5x6 slot matrix
  timings: string[];
  logs: Record<string, string[]>; // map of [dateString] -> string[] of status
  onLogStatus: (dateStr: string, periodIndex: number, status: "attended" | "bunked" | "none") => void;
  attendancePctMap: Record<string, number>; // Maps subject name to its attendance %
};

export default function DailyGauntlet({
  slots,
  timetable,
  timings,
  logs,
  onLogStatus,
  attendancePctMap,
}: DailyGauntletProps) {
  const [dayIndex, setDayIndex] = useState(0); // 0 = Mon, 4 = Fri
  const [activePeriodIndex, setActivePeriodIndex] = useState<number | null>(null);
  const [dateString, setDateString] = useState("");
  const [isWeekend, setIsWeekend] = useState(false);

  // Initialize and check current date/time
  useEffect(() => {
    const d = new Date();
    const day = d.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
    
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    const todayStr = `${yyyy}-${mm}-${dd}`;
    setDateString(todayStr);

    if (day === 0 || day === 6) {
      setIsWeekend(true);
      setDayIndex(0); // Default to Monday for demo purposes
    } else {
      setIsWeekend(false);
      setDayIndex(day - 1); // 1-5 -> 0-4
    }

    const checkActivePeriod = () => {
      const now = new Date();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      let activeIdx: number | null = null;
      timings.forEach((tStr, idx) => {
        const [startStr, endStr] = tStr.split(" - ");
        const [sh, sm] = startStr.split(":").map(Number);
        const [eh, em] = endStr.split(":").map(Number);
        const startMin = sh * 60 + sm;
        const endMin = eh * 60 + em;

        if (currentMinutes >= startMin && currentMinutes < endMin) {
          activeIdx = idx;
        }
      });

      setActivePeriodIndex(activeIdx);
    };

    checkActivePeriod();
    const interval = setInterval(checkActivePeriod, 60000);
    return () => clearInterval(interval);
  }, [timings]);

  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const activeDayName = weekdays[dayIndex];
  
  // Get today's logs or construct empty array
  const todayLogs = logs[dateString] || Array(6).fill("none");

  // Helper to fetch subject details from slot letter
  const getSubjectForSlot = (slotLetter: string) => {
    const cfg = slots[slotLetter];
    return cfg || { subject: `Slot ${slotLetter}`, professor: "Staff", vibe: "robot" as const };
  };

  // Safe to bunk check
  const getPredictionBadge = (subjectName: string) => {
    const pct = attendancePctMap[subjectName] ?? 80;
    if (pct < 75) {
      return {
        label: "LOCKDOWN 🚨",
        theme: "text-rose-500 bg-rose-500/10 border-rose-500/20",
        message: `Attendance is ${pct}%. Must attend!`,
      };
    } else if (pct < 78) {
      return {
        label: "DANGER ZONE ⚠️",
        theme: "text-amber-500 bg-amber-500/10 border-amber-500/20",
        message: `Crucial buffer limit (${pct}%). Skip with caution.`,
      };
    }
    return {
      label: "SAFE TO BUNK 🟢",
      theme: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
      message: `Safe buffer. Attendance is ${pct}%.`,
    };
  };

  return (
    <div className="bg-white/65 dark:bg-slate-900/65 border border-slate-950/[0.06] dark:border-white/[0.06] backdrop-blur-md rounded-[32px] p-6 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] flex flex-col h-full space-y-5">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-4">
        <div className="space-y-1">
          <h3 className="text-sm font-black text-slate-800 dark:text-white tracking-tight flex items-center gap-2 uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping shrink-0" /> Daily Gauntlet
          </h3>
          <span className="text-[10px] text-slate-450 dark:text-slate-400 block font-bold uppercase tracking-wider">
            {activeDayName} schedule {isWeekend && <span className="text-amber-500 text-[9px] font-bold ml-1 tracking-wide">(Weekend Demo)</span>}
          </span>
        </div>
        
        <select
          value={dayIndex}
          onChange={(e) => {
            triggerHaptic("light");
            setDayIndex(Number(e.target.value));
          }}
          className="text-[10px] font-black bg-slate-950/[0.03] dark:bg-slate-950 border border-slate-950/[0.06] dark:border-white/[0.06] rounded-xl px-3 py-1.5 text-slate-700 dark:text-slate-350 cursor-pointer outline-none focus:ring-1 focus:ring-blue-500/30 transition-all duration-200"
        >
          {weekdays.map((day, idx) => (
            <option key={day} value={idx}>
              {day.slice(0, 3)}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-3.5 flex-1 overflow-y-auto pr-1">
        {timetable[dayIndex]?.map((slotLetter, idx) => {
          const course = getSubjectForSlot(slotLetter);
          const time = timings[idx] || "Class Hours";
          const status = todayLogs[idx] || "none";
          const isActive = idx === activePeriodIndex;
          
          const prediction = getPredictionBadge(course.subject);

          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.005 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative flex flex-col md:grid md:grid-cols-12 gap-3 items-stretch md:items-center px-4.5 py-4 rounded-2xl border transition-all duration-300 ${
                isActive
                  ? "bg-blue-500/[0.02] border-blue-500/25 dark:border-blue-400/20 ring-1 ring-blue-500/5 dark:ring-blue-400/5 shadow-[0_4px_16px_rgba(0,122,255,0.04)]"
                  : status !== "none"
                  ? "bg-slate-500/[0.01] dark:bg-slate-900/5 border-slate-100 dark:border-white/[0.01] opacity-65"
                  : "bg-slate-950/[0.01] dark:bg-slate-950/10 border-slate-950/[0.04] dark:border-white/[0.04] hover:border-slate-300 dark:hover:border-slate-800"
              }`}
            >
              {/* Hour & Timing badge */}
              <div className="md:col-span-3 flex items-center gap-2.5">
                <span className={`w-7 h-7 flex items-center justify-center text-[11px] font-black rounded-lg shrink-0 ${
                  isActive 
                    ? "bg-blue-500 text-white shadow-[0_2px_8px_rgba(0,122,255,0.25)]" 
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}>
                  {idx + 1}
                </span>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-black text-slate-750 dark:text-slate-200 font-mono block leading-none">{time.split(" - ")[0]}</span>
                  <span className="text-[8.5px] font-bold text-slate-400 dark:text-slate-500 font-mono block leading-none">{time.split(" - ")[1]}</span>
                </div>
              </div>

              {/* Subject details */}
              <div className="md:col-span-5 flex flex-col space-y-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-black text-slate-800 dark:text-slate-100 truncate">
                    {course.subject}
                  </span>
                  <span className="text-[8px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 bg-slate-150/[0.4] dark:bg-slate-800/60 px-1.5 py-0.5 rounded-md leading-none">
                    Slot {slotLetter}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-slate-450 dark:text-slate-400 truncate">
                  {course.professor} • <span className="italic font-medium">{course.vibe === "saint" ? "Absolute Saint" : course.vibe === "boss" ? "Final Boss" : "Syllabus Robot"}</span>
                </span>
              </div>

              {/* Status Actions */}
              <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-2 mt-2 md:mt-0 border-t border-slate-100 dark:border-slate-800/40 pt-2.5 md:pt-0 md:border-0">
                <AnimatePresence mode="wait">
                  {isActive && status === "none" ? (
                    <motion.div 
                      key="actions"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex items-center gap-2 w-full md:w-auto"
                    >
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => {
                          triggerHaptic("warning");
                          onLogStatus(dateString, idx, "bunked");
                        }}
                        className="flex-1 md:flex-none border border-rose-500/30 hover:bg-rose-500/5 text-rose-500 font-black text-[9px] uppercase tracking-widest px-4 py-2 rounded-xl transition-colors duration-200 cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <X className="w-3.5 h-3.5" /> Skip
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => {
                          triggerHaptic("success");
                          onLogStatus(dateString, idx, "attended");
                        }}
                        className="flex-1 md:flex-none bg-gradient-to-b from-emerald-500 to-emerald-600 hover:brightness-105 text-white border border-emerald-500/20 font-black text-[9px] uppercase tracking-widest px-4 py-2 rounded-xl shadow-[0_4px_12px_rgba(16,185,129,0.15)] transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <Check className="w-3.5 h-3.5" /> Present
                      </motion.button>
                    </motion.div>
                  ) : status === "attended" ? (
                    <motion.div 
                      key="attended"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-1.5 text-emerald-500 font-extrabold text-[10px] ml-auto"
                    >
                      <Check className="w-4 h-4 border border-emerald-500/20 bg-emerald-500/10 rounded-full p-0.5" />
                      <span>ATTENDED (+0.3%)</span>
                      <button
                        onClick={() => {
                          triggerHaptic("light");
                          onLogStatus(dateString, idx, "none");
                        }}
                        className="text-[9px] font-black text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 ml-2 cursor-pointer uppercase tracking-wider hover:underline transition-colors duration-200"
                      >
                        Undo
                      </button>
                    </motion.div>
                  ) : status === "bunked" ? (
                    <motion.div 
                      key="bunked"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-1.5 text-rose-500 font-extrabold text-[10px] ml-auto"
                    >
                      <X className="w-4 h-4 border border-rose-500/20 bg-rose-500/10 rounded-full p-0.5" />
                      <span>BUNKED (-0.5%)</span>
                      <button
                        onClick={() => {
                          triggerHaptic("light");
                          onLogStatus(dateString, idx, "none");
                        }}
                        className="text-[9px] font-black text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 ml-2 cursor-pointer uppercase tracking-wider hover:underline transition-colors duration-200"
                      >
                        Undo
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="prediction"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="w-full md:w-auto flex items-center justify-between md:justify-end gap-2 ml-auto"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded-lg text-[8.5px] font-black uppercase tracking-widest border leading-none ${prediction.theme}`}>
                          {prediction.label}
                        </span>
                        <div className="group relative">
                          <Info className="w-3.5 h-3.5 text-slate-450 hover:text-slate-600 dark:hover:text-slate-350 cursor-pointer transition-colors duration-250" />
                          <div className="absolute bottom-full right-0 mb-2.5 w-48 bg-slate-900/95 backdrop-blur-md text-white text-[9.5px] p-2.5 rounded-xl hidden group-hover:block z-30 shadow-xl border border-white/[0.08] leading-normal font-semibold">
                            {prediction.message}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
