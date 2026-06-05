"use client";

import React, { useState, useEffect } from "react";
import { Award, ShieldAlert, Flame, Clock, Compass } from "lucide-react";

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
  const [isClassHours, setIsClassHours] = useState(false);

  // 1. Calculate Stress Index dynamically
  useEffect(() => {
    // Calculate a mock Stress Index based on "boss" professors and bunk levels
    let baseStress = 30;
    Object.values(slots).forEach((s) => {
      if (s.vibe === "boss") baseStress += 10;
      if (s.vibe === "saint") baseStress -= 5;
    });

    // Check bunk counts in logs
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

      // Read start time from timing 0 and end time from timing 5
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
        setIsClassHours(false);
      } else if (nowTime > end) {
        setFreedomPct(100);
        setCountdownText("Freedom Active 🚀");
        setIsClassHours(false);
      } else {
        const total = end - start;
        const elapsed = nowTime - start;
        const pct = Math.round((elapsed / total) * 100);
        setFreedomPct(pct);

        const diffMs = end - nowTime;
        const h = Math.floor(diffMs / 3600000);
        const m = Math.floor((diffMs % 3600000) / 60000);
        const s = Math.floor((diffMs % 60000) / 1000);
        setCountdownText(`${h}h ${m}m ${s}s`);
        setIsClassHours(true);
      }
    };

    updateFreedom();
    const interval = setInterval(updateFreedom, 1000);
    return () => clearInterval(interval);
  }, [timings]);

  // Thermometer bar classes
  const getStressColor = (val: number) => {
    if (val > 75) return "text-rose-500 bg-rose-500/10 border-rose-500/20";
    if (val > 45) return "text-amber-500 bg-amber-500/10 border-amber-500/20";
    return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
  };

  const getStressLabel = (val: number) => {
    if (val > 75) return "Critical Burnout";
    if (val > 45) return "Moderate Fatigue";
    return "Cruising Calm";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {/* GPA Box */}
      <div className="bg-white/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/[0.04] backdrop-blur-xl rounded-2xl p-4 flex items-center justify-between shadow-sm">
        <div className="space-y-1">
          <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
            ESTIMATED STANDING
          </span>
          <span className="text-xl font-black text-slate-800 dark:text-white block tracking-tight">
            {gpa} <span className="text-xs text-slate-400 font-bold">CGPA</span>
          </span>
          <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 block">
            Academic threshold cleared
          </span>
        </div>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/15 to-blue-500/10 border border-indigo-500/15 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-inner">
          <Award className="w-5 h-5" />
        </div>
      </div>

      {/* Stress Index Thermometer */}
      <div className="bg-white/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/[0.04] backdrop-blur-xl rounded-2xl p-4 flex items-center justify-between shadow-sm">
        <div className="space-y-1.5 flex-1 pr-3">
          <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
            DAILY STRESS INDEX
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-black text-slate-800 dark:text-white tracking-tight">
              {stressIndex}%
            </span>
            <span className={`px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider ${getStressColor(stressIndex)}`}>
              {getStressLabel(stressIndex)}
            </span>
          </div>
          <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${
                stressIndex > 75 ? "bg-rose-500" : stressIndex > 45 ? "bg-amber-500" : "bg-emerald-500"
              }`}
              style={{ width: `${stressIndex}%` }}
            />
          </div>
        </div>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/15 to-orange-500/10 border border-amber-500/15 flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-inner">
          <Flame className="w-5 h-5 animate-pulse" />
        </div>
      </div>

      {/* Freedom ETA Gauge */}
      <div className="bg-white/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/[0.04] backdrop-blur-xl rounded-2xl p-4 flex items-center justify-between shadow-sm col-span-1">
        <div className="space-y-1.5 flex-1 pr-3">
          <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
            SANITY BUFFER / FREEDOM ETA
          </span>
          <div className="flex items-baseline justify-between">
            <span className="text-xs font-black text-slate-800 dark:text-white font-mono">
              {countdownText}
            </span>
            <span className="text-[9px] font-black text-blue-500 bg-blue-500/10 px-1.5 py-0.5 rounded uppercase">
              {freedomPct}% Cleared
            </span>
          </div>
          <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000"
              style={{ width: `${freedomPct}%` }}
            />
          </div>
        </div>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/15 to-indigo-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-inner">
          <Clock className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
