"use client";

import React, { useState, useEffect } from "react";
import { Check, X } from "lucide-react";
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
  const [dayIndex, setDayIndex] = useState(0);
  const [activePeriodIndex, setActivePeriodIndex] = useState<number | null>(null);
  const [dateString, setDateString] = useState("");
  const [isWeekend, setIsWeekend] = useState(false);
  const [todayDayIndex, setTodayDayIndex] = useState(0);

  // Initialize and check current date/time
  useEffect(() => {
    const d = new Date();
    const day = d.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat

    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    setDateString(`${yyyy}-${mm}-${dd}`);

    if (day === 0 || day === 6) {
      setIsWeekend(true);
      setDayIndex(0);
      setTodayDayIndex(0);
    } else {
      setIsWeekend(false);
      setDayIndex(day - 1);
      setTodayDayIndex(day - 1);
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

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  // Get today's logs or construct empty array
  const todayLogs = logs[dateString] || Array(6).fill("none");

  // Helper to fetch subject details from slot letter
  const getSubjectForSlot = (slotLetter: string) => {
    const cfg = slots[slotLetter];
    return cfg || { subject: `Slot ${slotLetter}`, professor: "Staff", vibe: "robot" as const };
  };

  // Safety tag based on attendance
  const getSafetyTag = (subjectName: string) => {
    const pct = attendancePctMap[subjectName] ?? 80;
    if (pct < 75) return { label: "Must attend", color: "text-rose-500" };
    if (pct < 78) return { label: "Low buffer", color: "text-amber-500" };
    return { label: "Safe", color: "text-emerald-500" };
  };

  return (
    <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/50 dark:border-white/[0.04] rounded-2xl p-4 shadow-sm flex flex-col h-full font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shrink-0" />
          <h3 className="text-xs font-semibold text-slate-900 dark:text-white tracking-tight">
            Schedule Timeline
          </h3>
          {isWeekend && (
            <span className="text-[8px] font-bold text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded leading-none">Weekend</span>
          )}
        </div>
        <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 tabular-nums">
          {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })}
        </span>
      </div>

      {/* Day tabs */}
      <div className="flex gap-0.5 mb-3 bg-slate-100/60 dark:bg-slate-800/30 p-0.5 rounded-lg">
        {weekdays.map((day, idx) => (
          <button
            key={day}
            onClick={() => { triggerHaptic("light"); setDayIndex(idx); }}
            className={`flex-1 py-1.5 text-[9px] font-bold uppercase tracking-wider rounded-md cursor-pointer transition-all duration-200 ${
              idx === dayIndex
                ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm"
                : idx === todayDayIndex && idx !== dayIndex
                ? "text-blue-500/50 dark:text-blue-400/30"
                : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Period list – compact rows */}
      <div className="space-y-0.5 flex-1 overflow-y-auto">
        {timetable[dayIndex]?.map((slotLetter, idx) => {
          const course = getSubjectForSlot(slotLetter);
          const time = timings[idx] || "—";
          const status = todayLogs[idx] || "none";
          const isActive = idx === activePeriodIndex && dayIndex === todayDayIndex;
          const safety = getSafetyTag(course.subject);

          return (
            <motion.div
              key={idx}
              whileHover={{ x: 1 }}
              className={`flex items-center gap-2 px-2.5 py-2 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-blue-500/[0.05] border border-blue-500/20 dark:border-blue-400/15"
                  : status !== "none"
                  ? "opacity-45 border border-transparent"
                  : "border border-transparent hover:bg-slate-50/60 dark:hover:bg-slate-800/20"
              }`}
            >
              {/* Period indicator */}
              <span className={`w-5 h-5 flex items-center justify-center text-[10px] font-bold rounded-md shrink-0 leading-none ${
                isActive
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                  : status === "attended"
                  ? "bg-emerald-500/10 text-emerald-500"
                  : status === "bunked"
                  ? "bg-rose-500/10 text-rose-500"
                  : "text-slate-400 dark:text-slate-500"
              }`}>
                {status === "attended" ? "✓" : status === "bunked" ? "✗" : idx + 1}
              </span>

              {/* Time */}
              <span className="text-[9px] font-mono font-semibold text-slate-400 dark:text-slate-500 tabular-nums shrink-0 w-[80px]">
                {time}
              </span>

              {/* Subject & professor */}
              <div className="flex-1 min-w-0 flex items-center gap-1.5">
                <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-100 truncate">
                  {course.subject}
                </span>
                <span className="text-[8px] text-slate-400 dark:text-slate-500 font-medium shrink-0 hidden sm:inline">
                  {course.professor}
                </span>
              </div>

              {/* Safety indicator */}
              <span className={`text-[8px] font-bold shrink-0 ${safety.color}`}>
                {safety.label}
              </span>

              {/* Actions */}
              <div className="shrink-0 flex items-center min-w-[56px] justify-end">
                <AnimatePresence mode="wait">
                  {isActive && status === "none" ? (
                    <motion.div
                      key="actions"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex items-center gap-1"
                    >
                      <button
                        onClick={() => { triggerHaptic("warning"); onLogStatus(dateString, idx, "bunked"); }}
                        className="w-6 h-6 flex items-center justify-center rounded-lg border border-rose-200 dark:border-rose-500/20 text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 cursor-pointer transition-colors"
                        title="Skip this class"
                      >
                        <X className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => { triggerHaptic("success"); onLogStatus(dateString, idx, "attended"); }}
                        className="w-6 h-6 flex items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 cursor-pointer transition-colors shadow-sm"
                        title="Mark as attended"
                      >
                        <Check className="w-3 h-3" />
                      </button>
                    </motion.div>
                  ) : status !== "none" ? (
                    <motion.button
                      key="undo"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onClick={() => { triggerHaptic("light"); onLogStatus(dateString, idx, "none"); }}
                      className="text-[8px] font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-colors"
                    >
                      Undo
                    </motion.button>
                  ) : null}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
