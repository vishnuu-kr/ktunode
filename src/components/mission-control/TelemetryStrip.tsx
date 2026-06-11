"use client";

import React, { useState, useEffect } from "react";
import { Award, Flame, Clock } from "lucide-react";
import { motion } from "framer-motion";

type TelemetryStripProps = {
  slots: Record<string, { subject: string; professor: string; vibe: "saint" | "robot" | "boss" }>;
  logs: Record<string, string[]>;
  gpa?: string;
  timings: string[]; // default formats e.g. ["09:00 - 10:00", ...]
};

export default function TelemetryStrip({ slots, logs, gpa = "8.42", timings }: TelemetryStripProps) {
  const [stressIndex, setStressIndex] = useState(42);
  const [freedomPct, setFreedomPct] = useState(0);
  const [countdownText, setCountdownText] = useState("0h 0m 0s");

  // 1. Calculate Stress Index dynamically
  useEffect(() => {
    let baseStress = 30;
    Object.values(slots).forEach((s) => {
      if (s.vibe === "boss") baseStress += 10;
      if (s.vibe === "saint") baseStress -= 5;
    });

    let totalBunks = 0;
    Object.values(logs).forEach((dayLogs) => {
      dayLogs.forEach((status) => {
        if (status === "bunked") totalBunks += 1;
      });
    });

    baseStress += totalBunks * 4;
    setStressIndex(Math.min(Math.max(baseStress, 10), 99));
  }, [slots, logs]);

  // 2. Freedom ETA Tick Countdown
  useEffect(() => {
    const parseTime = (timeStr: string) => {
      const [hours, minutes] = timeStr.split(":").map(Number);
      const d = new Date();
      d.setHours(hours, minutes, 0, 0);
      return d.getTime();
    };

    const updateFreedom = () => {
      if (!timings || timings.length < 2) return;

      const now = new Date();
      const nowTime = now.getTime();

      const startTimeStr = timings[0].split(" - ")[0];
      const endTimeStr = timings[timings.length - 1].split(" - ")[1];

      const start = parseTime(startTimeStr);
      const end = parseTime(endTimeStr);

      if (nowTime < start) {
        setFreedomPct(0);
        const diffMs = start - nowTime;
        const h = Math.floor(diffMs / 3600000);
        const m = Math.floor((diffMs % 3600000) / 60000);
        const s = Math.floor((diffMs % 60000) / 1000);
        setCountdownText(`${h}h ${m}m ${s}s to Class`);
      } else if (nowTime > end) {
        setFreedomPct(100);
        setCountdownText("Freedom Active 🚀");
      } else {
        const total = end - start;
        const elapsed = nowTime - start;
        const pct = Math.round((elapsed / total) * 100);
        setFreedomPct(pct);

        const diffMs = end - nowTime;
        const h = Math.floor(diffMs / 3600000);
        const m = Math.floor((diffMs % 3600000) / 60000);
        const s = Math.floor((diffMs % 60000) / 1000);
        setCountdownText(`${h}h ${m}m ${s}s remaining`);
      }
    };

    updateFreedom();
    const interval = setInterval(updateFreedom, 1000);
    return () => clearInterval(interval);
  }, [timings]);

  const getStressColor = (val: number) => {
    if (val > 75) return "text-rose-500 bg-rose-500/10 border-rose-500/20";
    if (val > 45) return "text-amber-500 bg-amber-500/10 border-amber-500/20";
    return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
  };

  const getStressLabel = (val: number) => {
    if (val > 75) return "Critical Burnout";
    if (val > 45) return "Moderate Stress";
    return "Cruising Calm";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
      {/* GPA Box */}
      <motion.div
        whileHover={{ y: -2 }}
        className="bg-white/65 dark:bg-slate-900/65 border border-slate-950/[0.06] dark:border-white/[0.06] backdrop-blur-md rounded-3xl p-5 flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.015)] transition-all duration-300"
      >
        <div className="space-y-1">
          <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block leading-none">
            Estimated Standing
          </span>
          <span className="text-2xl font-black text-slate-800 dark:text-white block tracking-tight leading-none pt-1">
            {gpa} <span className="text-xs text-slate-400 font-extrabold ml-0.5">CGPA</span>
          </span>
          <span className="text-[10px] font-bold text-slate-450 dark:text-slate-400 block pt-0.5">
            Academic threshold cleared
          </span>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/15 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
          <Award className="w-5.5 h-5.5" />
        </div>
      </motion.div>

      {/* Stress Index Thermometer */}
      <motion.div
        whileHover={{ y: -2 }}
        className="bg-white/65 dark:bg-slate-900/65 border border-slate-950/[0.06] dark:border-white/[0.06] backdrop-blur-md rounded-3xl p-5 flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.015)] transition-all duration-300"
      >
        <div className="space-y-2 flex-1 pr-4">
          <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block leading-none">
            Daily Stress Index
          </span>
          <div className="flex items-center gap-2 pt-0.5">
            <span className="text-2xl font-black text-slate-800 dark:text-white tracking-tight leading-none">
              {stressIndex}%
            </span>
            <span className={`px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider border leading-none ${getStressColor(stressIndex)}`}>
              {getStressLabel(stressIndex)}
            </span>
          </div>
          <div className="w-full h-2 bg-slate-950/[0.06] dark:bg-white/[0.06] rounded-full overflow-hidden relative">
            <motion.div
              className={`h-full rounded-full transition-all duration-1000 ${
                stressIndex > 75 ? "bg-rose-500" : stressIndex > 45 ? "bg-amber-500" : "bg-emerald-500"
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${stressIndex}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
            />
          </div>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/15 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
          <Flame className="w-5.5 h-5.5" />
        </div>
      </motion.div>

      {/* Freedom ETA Gauge */}
      <motion.div
        whileHover={{ y: -2 }}
        className="bg-white/65 dark:bg-slate-900/65 border border-slate-950/[0.06] dark:border-white/[0.06] backdrop-blur-md rounded-3xl p-5 flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.015)] transition-all duration-300"
      >
        <div className="space-y-2 flex-1 pr-4">
          <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block leading-none">
            Freedom ETA
          </span>
          <div className="flex items-center justify-between gap-2 pt-0.5">
            <span className="text-sm font-black text-slate-800 dark:text-white font-mono tracking-tight leading-none">
              {countdownText}
            </span>
            <span className="text-[8px] font-black text-blue-600 dark:text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded uppercase tracking-wider leading-none">
              {freedomPct}% Cleared
            </span>
          </div>
          <div className="w-full h-2 bg-slate-950/[0.06] dark:bg-white/[0.06] rounded-full overflow-hidden relative">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
              initial={{ width: 0 }}
              animate={{ width: `${freedomPct}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
            />
          </div>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
          <Clock className="w-5.5 h-5.5" />
        </div>
      </motion.div>
    </div>
  );
}
