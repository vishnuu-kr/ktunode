"use client";

import React from "react";
import { Flame, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface StreakTrackerProps {
  completedCount: number;
}

export default function StreakTracker({ completedCount }: StreakTrackerProps) {
  const streakCount = Math.min(7, Math.max(1, Math.floor(completedCount / 2)));
  const currentDayOfWeek = new Date().getDay(); // 0 is Sunday, 1 is Monday...
  const normalizedDay = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1; // Mon=0, Sun=6

  const weeklyStatus = Array(7).fill(false).map((_, i) => {
    return i <= normalizedDay && normalizedDay - i < streakCount;
  });

  const daysLabel = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div className="bg-white/65 backdrop-blur-md border border-slate-950/[0.06] rounded-[20px] p-6 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] hover:border-slate-950/[0.12] transition-all duration-300 relative overflow-hidden group">
      {/* Glow background accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-950/[0.02] rounded-full blur-2xl pointer-events-none transition-all duration-300" />
      
      <div className="flex items-center justify-between gap-3 mb-5 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-500/[0.06] border border-orange-500/[0.15] flex items-center justify-center text-orange-600">
            <Flame className="w-5 h-5 fill-current animate-pulse" />
          </div>
          <div>
            <h3 className="font-black text-slate-900 text-base leading-tight">Study Streak</h3>
            <p className="text-xs text-slate-400/80 font-bold">Keep the momentum going</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-orange-500/[0.06] border border-orange-500/[0.15] px-3.5 py-1.5 rounded-xl">
          <Flame className="w-4 h-4 text-orange-600 fill-current" />
          <span className="text-sm font-black text-orange-700">{streakCount} Days</span>
        </div>
      </div>

      {/* Week Progress Circles */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 my-6">
        {daysLabel.map((day, idx) => {
          const isActive = weeklyStatus[idx];
          return (
            <div key={idx} className="flex flex-col items-center gap-1.5">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">{day}</div>
              <motion.div
                className={`w-7 h-7 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center border transition-all ${
                  isActive
                    ? "bg-gradient-to-br from-orange-500 to-amber-600 border-orange-400/30 text-white shadow-[0_4px_12px_rgba(249,115,22,0.12)]"
                    : "bg-slate-950/[0.02] border-slate-950/[0.04] text-slate-400"
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {isActive ? (
                  <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                ) : (
                  <span className="text-[10px] sm:text-xs font-black">{day}</span>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>

      <div className="pt-4 border-t border-slate-950/[0.06] flex items-center justify-between text-xs font-bold text-slate-400/80">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{completedCount} total topics done</span>
        </div>
        <span className="text-slate-800 font-black">Syllabus Active</span>
      </div>
    </div>
  );
}
