"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";
import { triggerHaptic } from "@/lib/haptic";

type SlotConfig = {
  subject: string;
  professor: string;
  vibe: "saint" | "robot" | "boss";
};

type BunkSafetyAnalyzerProps = {
  slots: Record<string, SlotConfig>;
  logs: Record<string, string[]>;
  timetable: string[][];
};

export default function BunkSafetyAnalyzer({ slots, logs, timetable }: BunkSafetyAnalyzerProps) {
  const [simulatorSubject, setSimulatorSubject] = useState("");
  const [simulatedSkip, setSimulatedSkip] = useState(true);

  const baseAttended = 17;
  const baseTotal = 20;

  // 1. Tally logs per subject name
  const tally: Record<string, { attended: number; bunked: number }> = {};
  Object.keys(logs).forEach((dateKey) => {
    const dayLogs = logs[dateKey] || [];
    const dayNum = new Date(dateKey).getDay();
    const timetableDayIndex = dayNum === 0 || dayNum === 6 ? 0 : dayNum - 1;

    dayLogs.forEach((status, periodIdx) => {
      const slotLetter = timetable[timetableDayIndex]?.[periodIdx];
      if (slotLetter) {
        const subjectName = slots[slotLetter]?.subject;
        if (subjectName) {
          if (!tally[subjectName]) tally[subjectName] = { attended: 0, bunked: 0 };
          if (status === "attended") tally[subjectName].attended += 1;
          if (status === "bunked") tally[subjectName].bunked += 1;
        }
      }
    });
  });

  // 2. Compute skips remaining for each unique subject
  const subjectAnalysis: Array<{
    subject: string;
    percentage: number;
    attended: number;
    total: number;
    allowedSkips: number;
    requiredAttends: number;
  }> = [];

  const seen = new Set<string>();

  Object.values(slots).forEach((slot) => {
    const subjectName = slot.subject;
    if (!subjectName || seen.has(subjectName)) return;
    seen.add(subjectName);

    const counts = tally[subjectName] || { attended: 0, bunked: 0 };
    const attended = baseAttended + counts.attended;
    const total = baseTotal + counts.attended + counts.bunked;
    const percentage = Math.round((attended / total) * 1000) / 10;

    // Calculate skips
    const allowedSkips = Math.floor(attended / 0.75 - total);
    const requiredAttends = Math.max(0, Math.ceil(3 * total - 4 * attended));

    subjectAnalysis.push({
      subject: subjectName,
      percentage,
      attended,
      total,
      allowedSkips,
      requiredAttends,
    });
  });

  // Handle default simulator subject select
  if (subjectAnalysis.length > 0 && !simulatorSubject) {
    setSimulatorSubject(subjectAnalysis[0].subject);
  }

  // Find subject details for simulator
  const activeSim = subjectAnalysis.find(s => s.subject === simulatorSubject);

  // Compute simulated values
  let simulatedPct = 0;
  let verdictText = "";
  let verdictColor = "";

  if (activeSim) {
    const nextAttended = simulatedSkip ? activeSim.attended : activeSim.attended + 1;
    const nextTotal = activeSim.total + 1;
    simulatedPct = Math.round((nextAttended / nextTotal) * 1000) / 10;

    if (simulatedPct >= 78) {
      verdictText = "Safe";
      verdictColor = "text-emerald-500";
    } else if (simulatedPct >= 75) {
      verdictText = "Borderline";
      verdictColor = "text-amber-500";
    } else {
      verdictText = "Below 75%";
      verdictColor = "text-rose-500";
    }
  }

  const getColor = (val: number) => {
    if (val >= 78) return "text-emerald-500";
    if (val >= 75) return "text-amber-500";
    return "text-rose-500";
  };

  return (
    <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/50 dark:border-white/[0.04] rounded-2xl p-4 shadow-sm flex flex-col h-full font-sans">
      {/* Header */}
      <div className="mb-3">
        <h3 className="text-xs font-semibold text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
          <Calculator className="w-3.5 h-3.5 text-blue-500 shrink-0" /> Skip Planner
        </h3>
        <span className="text-[9px] text-slate-400 dark:text-slate-500 block font-medium mt-0.5 leading-tight">
          Skips remaining before dropping below 75%
        </span>
      </div>

      {/* Subject list – compact rows */}
      <div className="flex-1 overflow-y-auto max-h-[280px] -mx-1">
        {subjectAnalysis.map((item) => {
          const isAtRisk = item.percentage < 75;
          const isBorderline = item.percentage >= 75 && item.allowedSkips === 0;

          return (
            <div
              key={item.subject}
              className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors"
            >
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-100 truncate block leading-tight">
                  {item.subject}
                </span>
                <span className="text-[9px] text-slate-400 dark:text-slate-500 tabular-nums">
                  <span className={`font-bold ${getColor(item.percentage)}`}>{item.percentage}%</span> · {item.attended}/{item.total} hrs
                </span>
              </div>

              <span className={`text-[9px] font-bold shrink-0 tabular-nums ${
                isAtRisk ? "text-rose-500" : isBorderline ? "text-amber-500" : "text-emerald-500"
              }`}>
                {isAtRisk
                  ? `↑ Attend ${item.requiredAttends}`
                  : isBorderline
                  ? "0 skips left"
                  : `${item.allowedSkips} skip${item.allowedSkips !== 1 ? "s" : ""} left`}
              </span>
            </div>
          );
        })}
      </div>

      {/* Impact Simulator – compact */}
      {subjectAnalysis.length > 0 && (
        <div className="border-t border-slate-100 dark:border-slate-800/50 pt-3 mt-2 space-y-2.5">
          <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider leading-none block">
            Impact Simulator
          </span>

          <div className="flex gap-1.5">
            <select
              value={simulatorSubject}
              onChange={(e) => setSimulatorSubject(e.target.value)}
              className="flex-1 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-lg px-2 py-1.5 text-[10px] font-semibold text-slate-800 dark:text-white cursor-pointer outline-none focus:ring-1 focus:ring-blue-500/20 min-w-0"
            >
              {subjectAnalysis.map((item) => (
                <option key={item.subject} value={item.subject}>{item.subject}</option>
              ))}
            </select>

            <div className="flex p-0.5 bg-slate-100/80 dark:bg-slate-800/50 rounded-lg shrink-0">
              <button
                type="button"
                onClick={() => { triggerHaptic("light"); setSimulatedSkip(true); }}
                className={`px-2.5 py-1 text-[9px] font-bold rounded-md cursor-pointer transition-all duration-200 ${
                  simulatedSkip
                    ? "bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm"
                    : "text-slate-400 dark:text-slate-500"
                }`}
              >
                Skip
              </button>
              <button
                type="button"
                onClick={() => { triggerHaptic("light"); setSimulatedSkip(false); }}
                className={`px-2.5 py-1 text-[9px] font-bold rounded-md cursor-pointer transition-all duration-200 ${
                  !simulatedSkip
                    ? "bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm"
                    : "text-slate-400 dark:text-slate-500"
                }`}
              >
                Attend
              </button>
            </div>
          </div>

          {activeSim && (
            <div className="flex items-center justify-between text-[10px] pt-0.5">
              <span className="text-slate-400 dark:text-slate-500 font-medium">Projected:</span>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 line-through font-mono text-[9px] tabular-nums">{activeSim.percentage}%</span>
                <ArrowRight className="w-3 h-3 text-slate-300 dark:text-slate-600" />
                <span className={`font-bold font-mono tabular-nums ${getColor(simulatedPct)}`}>{simulatedPct}%</span>
                <span className={`text-[8px] font-bold ${verdictColor}`}>{verdictText}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
