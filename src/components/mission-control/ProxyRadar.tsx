"use client";

import React, { useState, useEffect } from "react";
import { Compass, AlertCircle, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { triggerHaptic } from "@/lib/haptic";

type ProxyRadarProps = {
  slots: Record<string, { subject: string; professor: string; vibe: "saint" | "robot" | "boss" }>;
};

export default function ProxyRadar({ slots }: ProxyRadarProps) {
  const [selectedSlot, setSelectedSlot] = useState("A");
  const [classSize, setClassSize] = useState<"large" | "medium" | "small">("large");
  const [feasibility, setFeasibility] = useState(70);

  // Calculate Proxy Feasibility
  useEffect(() => {
    let base = 45; // medium default
    if (classSize === "large") base = 70;
    if (classSize === "small") base = 10;

    const vibe = slots[selectedSlot]?.vibe || "robot";
    let vCoeff = 1.0;
    if (vibe === "saint") vCoeff = 1.4;
    if (vibe === "boss") vCoeff = 0.2;

    const finalFeas = Math.min(Math.max(Math.round(base * vCoeff), 0), 100);
    setFeasibility(finalFeas);
  }, [selectedSlot, classSize, slots]);

  const getFeasibilityLevel = (val: number) => {
    if (val >= 70) {
      return { 
        label: "HIGH SAFETY GHOST MODE", 
        theme: "text-emerald-500 border-emerald-500/20 bg-emerald-500/[0.03] dark:bg-emerald-500/[0.02] shadow-[0_4px_16px_rgba(16,185,129,0.04)]", 
        desc: "Ghost Protocol active. Class size is large, roll call is rapid and professor is chill. Proxy footprint is fully masked." 
      };
    }
    if (val >= 30) {
      return { 
        label: "CALCULATED RISKY GAMBLE", 
        theme: "text-amber-500 border-amber-500/20 bg-amber-500/[0.03] dark:bg-amber-500/[0.02] shadow-[0_4px_16px_rgba(245,158,11,0.04)]", 
        desc: "Class size is standard, professor looks up occasionally. Sit middle-back. Ensure your proxy agent answers with confidence." 
      };
    }
    return { 
      label: "SUICIDAL OPERATION: ABORT", 
      theme: "text-rose-500 border-rose-500/20 bg-rose-500/[0.03] dark:bg-rose-500/[0.02] shadow-[0_4px_16px_rgba(239,68,68,0.04)]", 
      desc: "Extreme threat. Small class size or strict professor conducting manual visual verification. Proxy detection rate is 99%." 
    };
  };

  const status = getFeasibilityLevel(feasibility);

  return (
    <div className="bg-white/65 dark:bg-slate-900/65 border border-slate-950/[0.06] dark:border-white/[0.06] backdrop-blur-md rounded-[32px] p-6 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] flex flex-col h-full space-y-4">
      <div>
        <h3 className="text-sm font-black text-slate-800 dark:text-white tracking-tight flex items-center gap-2 uppercase">
          <Compass className="w-4 h-4 text-blue-500 animate-spin-slow shrink-0" /> Proxy Protocol Radar
        </h3>
        <span className="text-[10px] text-slate-450 dark:text-slate-400 block font-bold uppercase tracking-wider mt-0.5">
          Scan proxy footprint risk using classroom density variables
        </span>
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-12 gap-6 items-center flex-1">
        {/* Radar Graphic */}
        <div className="sm:col-span-5 flex items-center justify-center w-full relative aspect-square max-w-[140px] mx-auto">
          {/* Radar Circles */}
          <div className="absolute inset-0 border border-emerald-500/10 dark:border-emerald-500/5 rounded-full" />
          <div className="absolute inset-4 border border-emerald-500/20 dark:border-emerald-500/10 rounded-full" />
          <div className="absolute inset-8 border border-emerald-500/30 dark:border-emerald-500/15 rounded-full" />
          <div className="absolute inset-12 border border-emerald-500/40 dark:border-emerald-500/20 rounded-full" />
          
          {/* Grid lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-px bg-emerald-500/10 dark:bg-emerald-500/5" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-full w-px bg-emerald-500/10 dark:bg-emerald-500/5" />
          </div>

          {/* Rotating radar sweep */}
          <div className="absolute inset-0 animate-spin-slow pointer-events-none">
            <div className="w-1/2 h-full bg-gradient-to-r from-emerald-500/0 to-emerald-500/10 rounded-l-full border-r border-emerald-500/35 origin-right" />
          </div>

          {/* Radar Blips */}
          <div className="absolute top-8 right-12 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping pointer-events-none" />
          <div className="absolute bottom-12 left-10 w-2 h-2 bg-emerald-500/60 rounded-full animate-pulse pointer-events-none" />

          {/* Percentage Value */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-1">
            <span className="text-2xl font-black text-slate-800 dark:text-emerald-400 font-mono tracking-tighter leading-none">
              {feasibility}%
            </span>
            <span className="text-[7.5px] font-black text-slate-450 dark:text-slate-500 uppercase tracking-widest leading-none pt-1">
              Safety
            </span>
          </div>
        </div>

        {/* Configurations */}
        <div className="sm:col-span-7 space-y-3.5 w-full">
          <div className="space-y-1.5">
            <label className="text-[9px] font-black text-slate-450 dark:text-slate-400 uppercase tracking-widest block leading-none">Choose Class</label>
            <select
              value={selectedSlot}
              onChange={(e) => {
                triggerHaptic("light");
                setSelectedSlot(e.target.value);
              }}
              className="w-full bg-slate-950/[0.03] dark:bg-slate-950 border border-slate-950/[0.06] dark:border-white/[0.06] rounded-xl px-3 py-2 text-xs font-bold text-slate-800 dark:text-white cursor-pointer outline-none focus:ring-1 focus:ring-blue-500/30 transition-all duration-200"
            >
              {Object.keys(slots).map((slotKey) => (
                <option key={slotKey} value={slotKey}>
                  Slot {slotKey}: {slots[slotKey].subject}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-[9px] font-black text-slate-450 dark:text-slate-400 uppercase tracking-widest block leading-none">Classroom density</label>
            <div className="flex items-center gap-1 p-1 bg-slate-950/[0.03] dark:bg-slate-950 border border-slate-950/[0.06] dark:border-white/[0.06] rounded-xl">
              {(["large", "medium", "small"] as const).map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => {
                    if (size === "large") triggerHaptic("light");
                    else if (size === "medium") triggerHaptic("medium");
                    else triggerHaptic("warning");
                    setClassSize(size);
                  }}
                  className={`flex-1 text-[9px] font-black uppercase tracking-wider py-1.5 rounded-lg cursor-pointer transition-all active:scale-[0.96] ${
                    classSize === size
                      ? "bg-slate-900 dark:bg-slate-800 text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-800 dark:text-slate-450 dark:hover:text-slate-200 bg-transparent"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Description output */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={status.label}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className={`p-4 border rounded-2xl flex flex-col gap-1 ${status.theme}`}
        >
          <span className="text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5">
            {feasibility < 30 ? <ShieldAlert className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
            {status.label}
          </span>
          <p className="text-[9.5px] leading-normal font-semibold">
            {status.desc}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
