"use client";

import React, { useState } from "react";
import { Terminal, Dice5, AlertTriangle, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { triggerHaptic } from "@/lib/haptic";

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

  const VIBE_COEFFS = {
    saint: 1.5,
    robot: 1.0,
    boss: 0.4,
  };

  const handleAssessRisk = () => {
    triggerHaptic("medium");
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
        triggerHaptic("light");
        currentLogIdx++;
      } else {
        clearInterval(interval);
        
        let tFactor = 1.0;
        if (isFriday) tFactor *= 1.3;
        if (hasProxyHelp) tFactor *= 1.25;
        if (isCanteenStuck) tFactor *= 1.15;

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
          triggerHaptic("light");
          setTimeout(() => {
            setIsScanning(false);
            setVerdict({ score: Math.round(safetyScore), level, title, desc });
            
            if (level === "green") {
              triggerHaptic("success");
            } else if (level === "red") {
              triggerHaptic("warning");
            } else {
              triggerHaptic("heavy");
            }
          }, 400);
        }, 300);
      }
    }, 250);
  };

  const getCardStyles = (level: "green" | "amber" | "red") => {
    if (level === "green") return "border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400";
    if (level === "red") return "border-rose-500/20 bg-rose-500/5 text-rose-600 dark:text-rose-400";
    return "border-amber-500/20 bg-amber-500/5 text-amber-600 dark:text-amber-400";
  };

  return (
    <div className="bg-white/65 dark:bg-slate-900/65 border border-slate-950/[0.06] dark:border-white/[0.06] backdrop-blur-md rounded-[32px] p-6 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] flex flex-col h-full space-y-4">
      <div>
        <h3 className="text-sm font-black text-slate-800 dark:text-white tracking-tight flex items-center gap-2 uppercase">
          <Dice5 className="w-4 h-4 text-emerald-500 animate-spin-slow shrink-0" /> Bunk Roulette
        </h3>
        <span className="text-[10px] text-slate-450 dark:text-slate-400 block font-bold uppercase tracking-wider mt-0.5">
          Algorithmic safety evaluator & psychological triggers
        </span>
      </div>

      <div className="space-y-4 flex-1">
        {/* Subject dropdown */}
        <div className="space-y-1.5">
          <label className="text-[9px] font-black text-slate-450 dark:text-slate-400 uppercase tracking-widest block leading-none">Select Target Course</label>
          <select
            value={selectedSlot}
            onChange={(e) => {
              setSelectedSlot(e.target.value);
              setVerdict(null);
            }}
            className="w-full bg-slate-950/[0.03] dark:bg-slate-950 border border-slate-950/[0.06] dark:border-white/[0.06] rounded-xl px-3 py-2 text-xs font-bold text-slate-800 dark:text-white cursor-pointer outline-none focus:ring-1 focus:ring-emerald-500/35 transition-all duration-200"
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
          <label className="text-[9px] font-black text-slate-450 dark:text-slate-400 uppercase tracking-widest block leading-none">Temporal Catalysts</label>
          <div className="grid grid-cols-1 gap-2.5 bg-slate-950/[0.02] dark:bg-slate-950/20 border border-slate-950/[0.04] dark:border-white/[0.02] p-3 rounded-2xl">
            <label className="flex items-center gap-2.5 text-[10.5px] font-bold text-slate-700 dark:text-slate-350 cursor-pointer select-none group">
              <input
                type="checkbox"
                checked={isFriday}
                onChange={(e) => {
                  setIsFriday(e.target.checked);
                  setVerdict(null);
                }}
                className="rounded border-slate-300 dark:border-slate-800 text-blue-600 focus:ring-blue-500/20 w-4 h-4 cursor-pointer transition-all"
              />
              <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Friday afternoon urge (+30% urge multiplier)</span>
            </label>
            <label className="flex items-center gap-2.5 text-[10.5px] font-bold text-slate-700 dark:text-slate-350 cursor-pointer select-none group">
              <input
                type="checkbox"
                checked={hasProxyHelp}
                onChange={(e) => {
                  setHasProxyHelp(e.target.checked);
                  setVerdict(null);
                }}
                className="rounded border-slate-300 dark:border-slate-800 text-blue-600 focus:ring-blue-500/20 w-4 h-4 cursor-pointer transition-all"
              />
              <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Proxy backup available (+25% safety multiplier)</span>
            </label>
            <label className="flex items-center gap-2.5 text-[10.5px] font-bold text-slate-700 dark:text-slate-350 cursor-pointer select-none group">
              <input
                type="checkbox"
                checked={isCanteenStuck}
                onChange={(e) => {
                  setIsCanteenStuck(e.target.checked);
                  setVerdict(null);
                }}
                className="rounded border-slate-300 dark:border-slate-800 text-blue-600 focus:ring-blue-500/20 w-4 h-4 cursor-pointer transition-all"
              />
              <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Stuck in canteen queue (+15% catalyst)</span>
            </label>
          </div>
        </div>

        {/* Scan Log console / Output */}
        <div className="h-36 bg-slate-950 border border-slate-900 rounded-2xl p-4 flex flex-col font-mono text-[9.5px] text-emerald-400 overflow-y-auto space-y-1 relative shadow-inner">
          <Terminal className="absolute top-3 right-3 w-4 h-4 text-slate-800 pointer-events-none" />
          
          <AnimatePresence mode="wait">
            {isScanning ? (
              <div key="scanning" className="space-y-1">
                {scanLogs.map((log, idx) => (
                  <div key={idx} className="leading-tight animate-fade-in">{log}</div>
                ))}
                <div className="flex items-center gap-1.5 animate-pulse text-emerald-350">
                  <span>[SYS] Processing risk vectors...</span>
                  <span className="w-1.5 h-3.5 bg-emerald-400" />
                </div>
              </div>
            ) : verdict ? (
              <motion.div 
                key="verdict"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-slate-300 space-y-2.5 h-full flex flex-col justify-between"
              >
                <div className="flex items-center justify-between border-b border-slate-900 pb-1.5">
                  <span className="font-black text-white uppercase tracking-wider text-[10px]">
                    Engine Result
                  </span>
                  <span className="font-mono text-slate-500 font-bold">
                    Score: {verdict.score}pts
                  </span>
                </div>
                <div className={`p-2 border rounded-xl font-black text-center text-[10px] uppercase tracking-wide flex items-center justify-center gap-1.5 ${getCardStyles(verdict.level)}`}>
                  {verdict.level === "green" ? <ShieldCheck className="w-4 h-4 shrink-0" /> : <AlertTriangle className="w-4 h-4 shrink-0" />}
                  {verdict.title}
                </div>
                <p className="text-[9.5px] text-slate-400 leading-normal font-semibold">
                  {verdict.desc}
                </p>
              </motion.div>
            ) : (
              <div key="idle" className="flex-1 flex flex-col items-center justify-center text-slate-700 gap-1.5 select-none text-center">
                <span className="font-black tracking-widest text-[10px] uppercase text-slate-700/80">Bunk Decision Matrix Cold</span>
                <span className="text-[8px] font-bold tracking-wider uppercase text-slate-800">Press assessment trigger below</span>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.01, y: -0.5 }}
        whileTap={{ scale: 0.99 }}
        onClick={handleAssessRisk}
        disabled={isScanning}
        className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-850 dark:hover:bg-slate-800 border border-slate-700 dark:border-white/[0.04] text-white font-black uppercase text-[10px] tracking-widest py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all duration-200 cursor-pointer"
      >
        <Dice5 className="w-4 h-4" /> Assess Bunk Risk
      </motion.button>
    </div>
  );
}
