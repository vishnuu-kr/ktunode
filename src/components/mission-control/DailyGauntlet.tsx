"use client";

import React, { useState, useEffect } from "react";
import { Check, X, ShieldAlert, Coffee, Play, Info } from "lucide-react";
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
    
    // Format date string for local storage logs key
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

  // Safe to bunk check: if attendance is above 75%, it is "Safe", otherwise "Lockdown"
  const getPredictionBadge = (subjectName: string) => {
    const pct = attendancePctMap[subjectName] ?? 80; // default to 80% if not exists
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
    <div className="bg-white/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/[0.04] backdrop-blur-xl rounded-[32px] p-5 sm:p-6 shadow-sm flex flex-col h-full space-y-4">
      <div className="flex items-center justify-between border-b border-slate-150 dark:border-white/[0.04] pb-3">
        <div className="space-y-0.5">
          <h3 className="text-sm font-black text-slate-800 dark:text-white tracking-tight flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" /> DAILY GAUNTLET TIMELINE
          </h3>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-semibold uppercase tracking-wider">
            {activeDayName} schedule {isWeekend && <span className="text-amber-500 text-[9px] font-bold">(Weekend Demo)</span>}
          </span>
        </div>
        
        {/* Day selection pill for demo purposes */}
        <select
          value={dayIndex}
          onChange={(e) => {
            triggerHaptic("light");
            setDayIndex(Number(e.target.value));
          }}
          className="text-[9px] font-black bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-2 py-1 text-slate-700 dark:text-slate-350 cursor-pointer"
        >
          {weekdays.map((day, idx) => (
            <option key={day} value={idx}>
              {day.slice(0, 3)}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-3 flex-1 overflow-y-auto pr-1">
        {timetable[dayIndex]?.map((slotLetter, idx) => {
          const course = getSubjectForSlot(slotLetter);
          const time = timings[idx] || "Class Hours";
          const status = todayLogs[idx] || "none";
          const isActive = idx === activePeriodIndex;
          
          const prediction = getPredictionBadge(course.subject);

          return (
            <div
              key={idx}
              className={`relative flex flex-col md:grid md:grid-cols-12 gap-3 items-stretch md:items-center px-4 py-3 rounded-2xl border transition-all duration-300 ${
                isActive
                  ? "bg-blue-500/[0.04] border-blue-500/35 dark:border-blue-500/25 shadow-md shadow-blue-500/[0.02] ring-1 ring-blue-500/10"
                  : status !== "none"
                  ? "bg-slate-50/20 dark:bg-slate-900/5 border-slate-100 dark:border-white/[0.02] opacity-60"
                  : "bg-slate-50/40 dark:bg-slate-900/10 border-slate-200/55 dark:border-slate-800/40 hover:border-slate-350 dark:hover:border-slate-700/60"
              }`}
            >
              {/* Hour & Timing badge */}
              <div className="md:col-span-3 flex items-center gap-2">
                <span className={`w-6 h-6 flex items-center justify-center text-[10px] font-black rounded-lg ${
                  isActive ? "bg-blue-500 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}>
                  {idx + 1}
                </span>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-slate-400 font-mono block leading-none">{time.split(" - ")[0]}</span>
                  <span className="text-[8px] text-slate-500 dark:text-slate-500 font-mono block leading-none">{time.split(" - ")[1]}</span>
                </div>
              </div>

              {/* Subject details */}
              <div className="md:col-span-5 flex flex-col space-y-0.5 min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs font-black text-slate-800 dark:text-white truncate">
                    {course.subject}
                  </span>
                  <span className="text-[8px] font-extrabold uppercase tracking-wide text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-1 py-0.2 rounded">
                    Slot {slotLetter}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                  {course.professor} • <span className="italic font-medium">{course.vibe === "saint" ? "Absolute Saint" : course.vibe === "boss" ? "Final Boss" : "Syllabus Robot"}</span>
                </span>
              </div>

              {/* Status Actions */}
              <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-2 mt-2 md:mt-0 border-t border-slate-100 dark:border-white/[0.02] pt-2 md:pt-0 md:border-0">
                {isActive && status === "none" ? (
                  <div className="flex items-center gap-2 w-full md:w-auto">
                    <button
                      onClick={() => {
                        triggerHaptic("warning");
                        onLogStatus(dateString, idx, "bunked");
                      }}
                      className="flex-1 md:flex-none border border-rose-500/30 hover:bg-rose-500/10 text-rose-500 font-black text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1"
                    >
                      <X className="w-3 h-3" /> Skip class
                    </button>
                    <button
                      onClick={() => {
                        triggerHaptic("success");
                        onLogStatus(dateString, idx, "attended");
                      }}
                      className="flex-1 md:flex-none bg-emerald-600 hover:bg-emerald-500 text-white font-black text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-md shadow-emerald-500/15 transition-all cursor-pointer flex items-center justify-center gap-1"
                    >
                      <Check className="w-3 h-3" /> Present
                    </button>
                  </div>
                ) : status === "attended" ? (
                  <div className="flex items-center gap-1.5 text-emerald-500 font-extrabold text-[10px] ml-auto">
                    <Check className="w-3.5 h-3.5 border border-emerald-500/20 bg-emerald-500/10 rounded-full p-0.5" />
                    <span>ATTENDED (+0.3%)</span>
                    <button
                      onClick={() => {
                        triggerHaptic("light");
                        onLogStatus(dateString, idx, "none");
                      }}
                      className="text-[9px] font-bold text-slate-400 hover:text-slate-500 dark:hover:text-slate-350 ml-1.5 cursor-pointer underline"
                    >
                      Undo
                    </button>
                  </div>
                ) : status === "bunked" ? (
                  <div className="flex items-center gap-1.5 text-rose-500 font-extrabold text-[10px] ml-auto">
                    <X className="w-3.5 h-3.5 border border-rose-500/20 bg-rose-500/10 rounded-full p-0.5" />
                    <span>BUNKED (-0.5%)</span>
                    <button
                      onClick={() => {
                        triggerHaptic("light");
                        onLogStatus(dateString, idx, "none");
                      }}
                      className="text-[9px] font-bold text-slate-400 hover:text-slate-500 dark:hover:text-slate-350 ml-1.5 cursor-pointer underline"
                    >
                      Undo
                    </button>
                  </div>
                ) : (
                  // Future predictions
                  <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-2 ml-auto">
                    <div className="flex items-center gap-1.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider border ${prediction.theme}`}>
                        {prediction.label}
                      </span>
                      <div className="group relative">
                        <Info className="w-3.5 h-3.5 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 cursor-pointer" />
                        <div className="absolute bottom-full right-0 mb-2 w-48 bg-slate-900 text-white text-[9px] p-2 rounded-xl hidden group-hover:block z-30 shadow-xl border border-white/[0.06]">
                          {prediction.message}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
