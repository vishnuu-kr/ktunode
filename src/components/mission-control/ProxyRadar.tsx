"use client";

import React, { useState, useEffect } from "react";
import { Radar, Compass, AlertCircle } from "lucide-react";

type ProxyRadarProps = {
  slots: Record<string, { subject: string; professor: string; vibe: "saint" | "robot" | "boss" }>;
};

export default function ProxyRadar({ slots }: ProxyRadarProps) {
  const [selectedSlot, setSelectedSlot] = useState("A");
  const [classSize, setClassSize] = useState<"large" | "medium" | "small">("large");
  const [feasibility, setFeasibility] = useState(70);

  const slotData = slots[selectedSlot] || { subject: `Slot ${selectedSlot}`, professor: "Staff", vibe: "robot" };

  // Calculate Proxy Feasibility
  useEffect(() => {
    let base = 45; // medium default
    if (classSize === "large") base = 70;
    if (classSize === "small") base = 10;

    let vCoeff = 1.0;
    if (slotData.vibe === "saint") vCoeff = 1.4;
    if (slotData.vibe === "boss") vCoeff = 0.2;

    const finalFeas = Math.min(Math.max(Math.round(base * vCoeff), 0), 100);
    setFeasibility(finalFeas);
  }, [selectedSlot, classSize, slotData]);

  const getFeasibilityLevel = (val: number) => {
    if (val >= 70) return { label: "HIGH SAFETY GHOST MODE", theme: "text-emerald-500 border-emerald-500/20 bg-emerald-500/[0.03]", desc: "Ghost Protocol active. Class size is large, roll call is rapid and professor is chill. Proxy footprint is fully masked." };
    if (val >= 30) return { label: "CALCULATED RISKY GAMBLE", theme: "text-amber-500 border-amber-500/20 bg-amber-500/[0.03]", desc: "Class size is standard, professor looks up occasionally. Sit middle-back. Ensure your proxy agent answers with confidence." };
    return { label: "SUICIDAL OPERATION: ABORT", theme: "text-rose-500 border-rose-500/20 bg-rose-500/[0.03]", desc: "Extreme threat. Small class size or strict professor conducting manual visual verification. Proxy detection rate is 99%." };
  };

  const status = getFeasibilityLevel(feasibility);

  return (
    <div className="bg-white/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/[0.04] backdrop-blur-xl rounded-[32px] p-5 sm:p-6 shadow-sm flex flex-col h-full space-y-4">
      <div>
        <h3 className="text-sm font-black text-slate-800 dark:text-white tracking-tight flex items-center gap-2">
          <Compass className="w-4 h-4 text-blue-500 animate-spin-slow" /> PROXY PROTOCOL RADAR
        </h3>
        <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-semibold uppercase tracking-wider mt-0.5">
          Scan proxy footprint risk using classroom density variables
        </span>
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-12 gap-5 items-center flex-1">
        {/* Radar Graphic */}
        <div className="sm:col-span-5 flex items-center justify-center w-full relative aspect-square max-w-[150px] mx-auto">
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
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-black text-slate-800 dark:text-emerald-400 font-mono tracking-tighter">
              {feasibility}%
            </span>
            <span className="text-[7px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none">
              Safety
            </span>
          </div>
        </div>

        {/* Configurations */}
        <div className="sm:col-span-7 space-y-3 w-full">
          <div className="space-y-1">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Choose Class</label>
            <select
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/[0.04] rounded-xl px-2.5 py-1.5 text-[11px] font-bold text-slate-800 dark:text-white cursor-pointer"
            >
              {Object.keys(slots).map((slotKey) => (
                <option key={slotKey} value={slotKey}>
                  Slot {slotKey}: {slots[slotKey].subject}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Classroom density</label>
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/[0.04] rounded-xl">
              {(["large", "medium", "small"] as const).map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setClassSize(size)}
                  className={`text-[9px] font-black uppercase tracking-wider py-1 rounded-lg cursor-pointer transition-all active:scale-[0.96] ${
                    classSize === size
                      ? "bg-slate-900 dark:bg-slate-800 text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-transparent"
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
      <div className={`p-3 border rounded-2xl flex flex-col gap-1.5 ${status.theme}`}>
        <span className="text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5" /> {status.label}
        </span>
        <p className="text-[9px] leading-normal font-semibold">
          {status.desc}
        </p>
      </div>
    </div>
  );
}
