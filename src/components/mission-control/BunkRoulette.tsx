"use client";

import React, { useState } from "react";
import { Terminal, ShieldAlert, Dice5, HelpCircle, Activity, Sparkles } from "lucide-react";

type SlotConfig = {
  subject: string;
  professor: string;
  vibe: "saint" | "robot" | "boss";
};

type BunkRouletteProps = {
  slots: Record<string, SlotConfig>;
  attendancePctMap: Record<string, number>;
};

export default function BunkRoulette({ slots, attendancePctMap }: BunkRouletteProps) {
  const [selectedSlot, setSelectedSlot] = useState("A");
  const [isFriday, setIsFriday] = useState(false);
  const [hasProxyHelp, setHasProxyHelp] = useState(false);
  const [isCanteenStuck, setIsCanteenStuck] = useState(false);

  const [isScanning, setIsScanning] = useState(false);
  const [scanLogs, setScanLogs] = useState<string[]>([]);
  const [verdict, setVerdict] = useState<{ score: number; level: "green" | "amber" | "red"; title: string; desc: string } | null>(null);

  const slotData = slots[selectedSlot] || { subject: `Slot ${selectedSlot}`, professor: "Staff", vibe: "robot" };
  const currentAttPct = attendancePctMap[slotData.subject] ?? 80.0;

  // Coefficients
  const VIBE_COEFFS = {
    saint: 1.5,
    robot: 1.0,
    boss: 0.4,
  };

  const handleAssessRisk = () => {
    setIsScanning(true);
    setScanLogs([]);
    setVerdict(null);

    const logsList = [
      "[SYS] Initializing Bunk Engine v3.1...",
      `[SYS] Loading attendance coordinates for ${slotData.subject}...`,
      `[SYS] Current Buffer: ${(currentAttPct - 75).toFixed(1)}% above KTU minimum (75%)`,
      `[SYS] Factoring Professor strictness: '${slotData.vibe}' (Multiplier: ${VIBE_COEFFS[slotData.vibe]}x)`,
    ];

    let currentLogIdx = 0;
    const interval = setInterval(() => {
      if (currentLogIdx < logsList.length) {
        setScanLogs((prev) => [...prev, logsList[currentLogIdx]]);
        currentLogIdx++;
      } else {
        clearInterval(interval);
        
        // Finalize calculations
        let tFactor = 1.0;
        if (isFriday) tFactor *= 1.3;
        if (hasProxyHelp) tFactor *= 1.25;
        if (isCanteenStuck) tFactor *= 1.15;

        // Bunk Engine Formula: (Att - 75) * Vprof * Tfactor
        const safetyScore = (currentAttPct - 75) * VIBE_COEFFS[slotData.vibe] * tFactor;

        let level: "green" | "amber" | "red" = "amber";
        let title = "CALCULATED RISK";
        let desc = "";

        if (safetyScore >= 15) {
          level = "green";
          title = "GREEN LIGHT: GO BUNK";
          desc = `Go. You have a healthy ${currentAttPct}% buffer, ${slotData.professor} is chill, and the proxy viability is high. Enjoy your early weekend break!`;
        } else if (safetyScore >= 0) {
          level = "amber";
          title = "HIGH STAKES PROCEED WITH CAUTION";
          desc = `Proceed only if desperate. Bunking drops you closer to the 75% boundary. You will have zero safety margin left for the rest of the month.`;
        } else {
          level = "red";
          title = "DEFCON 1: ABORT BUNK";
          desc = `Abort. Sitting in this chair is legally mandatory. If you step out, you cross the 75% event horizon and your name goes straight to the HOD's blacklist.`;
        }

        setTimeout(() => {
          setScanLogs((prev) => [...prev, "[SYS] Analysis finalized. Outputting verdict..."]);
          setTimeout(() => {
            setIsScanning(false);
            setVerdict({ score: Math.round(safetyScore), level, title, desc });
          }, 400);
        }, 300);
      }
    }, 250);
  };

  const getCardStyles = (level: "green" | "amber" | "red") => {
    if (level === "green") return "border-emerald-500/30 bg-emerald-500/[0.03] text-emerald-600 dark:text-emerald-400";
    if (level === "red") return "border-rose-500/30 bg-rose-500/[0.03] text-rose-600 dark:text-rose-400";
    return "border-amber-500/30 bg-amber-500/[0.03] text-amber-600 dark:text-amber-400";
  };

  return (
    <div className="bg-white/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/[0.04] backdrop-blur-xl rounded-[32px] p-5 sm:p-6 shadow-sm flex flex-col h-full space-y-4">
      <div>
        <h3 className="text-sm font-black text-slate-800 dark:text-white tracking-tight flex items-center gap-2">
          <Dice5 className="w-4 h-4 text-emerald-500 animate-spin-slow" /> BUNK ROULETTE DECISION MATRIX
        </h3>
        <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-semibold uppercase tracking-wider mt-0.5">
          Algorithmic safety evaluator & psychological triggers
        </span>
      </div>

      <div className="space-y-3 flex-1">
        {/* Subject dropdown */}
        <div className="space-y-1">
          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Select Target Course</label>
          <select
            value={selectedSlot}
            onChange={(e) => {
              setSelectedSlot(e.target.value);
              setVerdict(null);
            }}
            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/[0.04] rounded-xl px-3 py-2 text-xs font-bold text-slate-850 dark:text-white cursor-pointer"
          >
            {Object.keys(slots).map((slotKey) => (
              <option key={slotKey} value={slotKey}>
                Slot {slotKey}: {slots[slotKey].subject} ({attendancePctMap[slots[slotKey].subject] ?? 80}%)
              </option>
            ))}
          </select>
        </div>

        {/* Multipliers & Catalysts */}
        <div className="space-y-2">
          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Temporal Catalysts</label>
          <div className="grid grid-cols-1 gap-2 bg-slate-50/50 dark:bg-slate-950/20 border border-slate-100 dark:border-white/[0.02] p-2.5 rounded-xl">
            <label className="flex items-center gap-2 text-[10px] font-bold text-slate-700 dark:text-slate-350 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={isFriday}
                onChange={(e) => {
                  setIsFriday(e.target.checked);
                  setVerdict(null);
                }}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500/20 w-3.5 h-3.5"
              />
              Friday afternoon urge (+30% urge multiplier)
            </label>
            <label className="flex items-center gap-2 text-[10px] font-bold text-slate-700 dark:text-slate-350 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={hasProxyHelp}
                onChange={(e) => {
                  setHasProxyHelp(e.target.checked);
                  setVerdict(null);
                }}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500/20 w-3.5 h-3.5"
              />
              Proxy backup available (+25% safety multiplier)
            </label>
            <label className="flex items-center gap-2 text-[10px] font-bold text-slate-700 dark:text-slate-350 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={isCanteenStuck}
                onChange={(e) => {
                  setIsCanteenStuck(e.target.checked);
                  setVerdict(null);
                }}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500/20 w-3.5 h-3.5"
              />
              Stuck in canteen queue (+15% catalyst)
            </label>
          </div>
        </div>

        {/* Scan Log console / Output */}
        <div className="h-32 bg-slate-950 border border-slate-800 rounded-xl p-3 flex flex-col font-mono text-[9px] text-emerald-400 overflow-y-auto space-y-1 relative">
          <Terminal className="absolute top-2 right-2 w-3.5 h-3.5 text-slate-800 pointer-events-none" />
          
          {isScanning ? (
            <>
              {scanLogs.map((log, idx) => (
                <div key={idx} className="leading-tight animate-fade-in">{log}</div>
              ))}
              <div className="flex items-center gap-1 animate-pulse">
                <span>[SYS] Processing risk vectors...</span>
                <span className="w-1.5 h-3 bg-emerald-400" />
              </div>
            </>
          ) : verdict ? (
            <div className="text-slate-300 space-y-1.5 h-full flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-slate-800 pb-1">
                <span className="font-black text-white uppercase tracking-wider text-[10px]">
                  Engine Result
                </span>
                <span className="font-mono text-slate-500">
                  Score: {verdict.score}pts
                </span>
              </div>
              <div className={`p-1.5 border rounded-lg font-black text-center text-[10px] ${getCardStyles(verdict.level)}`}>
                {verdict.title}
              </div>
              <p className="text-[9px] text-slate-400 leading-normal truncate-3-lines">
                {verdict.desc}
              </p>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-600 gap-1 select-none">
              <span>BUNK DECISION MATRIX COLD</span>
              <span className="text-[8px]">PRESS THE ACTIVATE SCAN TRIGGER BELOW</span>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={handleAssessRisk}
        disabled={isScanning}
        className="w-full bg-slate-900 dark:bg-slate-950 hover:bg-slate-800 dark:hover:bg-slate-900 border border-slate-700 dark:border-white/[0.04] text-white font-black uppercase text-[10px] tracking-widest py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all active:scale-[0.98]"
      >
        <Dice5 className="w-4 h-4" /> Assess Bunk Risk
      </button>
    </div>
  );
}
