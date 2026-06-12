"use client";

import React, { useState, useEffect } from "react";
import { Flame, Clock } from "lucide-react";
import { motion } from "framer-motion";

type TelemetryStripProps = {
  slots: Record<string, { subject: string; professor: string; vibe: "saint" | "robot" | "boss" }>;
  logs: Record<string, string[]>;
  gpa?: string;
  timings: string[];
};

export default function TelemetryStrip({ slots, logs, gpa = "8.42", timings }: TelemetryStripProps) {
  const [stressIndex, setStressIndex] = useState(42);
  const [freedomPct, setFreedomPct] = useState(0);
  const [countdownText, setCountdownText] = useState("—");

  // Calculate Class Load dynamically
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

  // Class Day Progress countdown
  useEffect(() => {
    const parseTime = (timeStr: string) => {
      const [hours, minutes] = timeStr.split(":").map(Number);
      const d = new Date();
      d.setHours(hours, minutes, 0, 0);
      return d.getTime();
    };

    const updateProgress = () => {
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
        setCountdownText(`${h}h ${m}m to start`);
      } else if (nowTime > end) {
        setFreedomPct(100);
        setCountdownText("Day done 🎓");
      } else {
        const total = end - start;
        const elapsed = nowTime - start;
        const pct = Math.round((elapsed / total) * 100);
        setFreedomPct(pct);

        const diffMs = end - nowTime;
        const h = Math.floor(diffMs / 3600000);
        const m = Math.floor((diffMs % 3600000) / 60000);
        setCountdownText(`${h}h ${m}m left`);
      }
    };

    updateProgress();
    const interval = setInterval(updateProgress, 1000);
    return () => clearInterval(interval);
  }, [timings]);

  const getLoadColor = (val: number) => {
    if (val > 75) return "text-rose-500";
    if (val > 45) return "text-amber-500";
    return "text-emerald-500";
  };

  const getBarColor = (val: number) => {
    if (val > 75) return "bg-rose-500";
    if (val > 45) return "bg-amber-500";
    return "bg-emerald-500";
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2.5 w-full font-sans">
      {/* Class Load – compact */}
      <div className="flex-1 flex items-center gap-3 bg-white/60 dark:bg-slate-900/40 backdrop-blur-lg border border-slate-200/30 dark:border-white/[0.03] rounded-xl px-3.5 py-2.5">
        <Flame className={`w-3.5 h-3.5 shrink-0 ${getLoadColor(stressIndex)}`} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider leading-none">Class Load</span>
            <span className={`text-xs font-extrabold tabular-nums leading-none ${getLoadColor(stressIndex)}`}>{stressIndex}%</span>
          </div>
          <div className="w-full h-[3px] bg-slate-950/[0.05] dark:bg-white/[0.05] rounded-full mt-1.5 overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${getBarColor(stressIndex)}`}
              initial={{ width: 0 }}
              animate={{ width: `${stressIndex}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
            />
          </div>
        </div>
      </div>

      {/* Day Progress – compact */}
      <div className="flex-1 flex items-center gap-3 bg-white/60 dark:bg-slate-900/40 backdrop-blur-lg border border-slate-200/30 dark:border-white/[0.03] rounded-xl px-3.5 py-2.5">
        <Clock className="w-3.5 h-3.5 shrink-0 text-blue-500" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider leading-none">Progress</span>
            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 truncate leading-none">{countdownText}</span>
          </div>
          <div className="w-full h-[3px] bg-slate-950/[0.05] dark:bg-white/[0.05] rounded-full mt-1.5 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
              initial={{ width: 0 }}
              animate={{ width: `${freedomPct}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
