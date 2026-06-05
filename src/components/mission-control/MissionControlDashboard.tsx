"use client";

import React, { useState, useEffect } from "react";
import OnboardingWizard from "./OnboardingWizard";
import TelemetryStrip from "./TelemetryStrip";
import DailyGauntlet from "./DailyGauntlet";
import BunkRoulette from "./BunkRoulette";
import ProxyRadar from "./ProxyRadar";
import ConfigDrawer from "./ConfigDrawer";
import { Settings, RefreshCw, Zap } from "lucide-react";

type SlotConfig = {
  subject: string;
  professor: string;
  vibe: "saint" | "robot" | "boss";
};

type MissionControlDashboardProps = {
  branch: string;
  sem: string;
  gpa?: string;
};

const DEFAULT_TIMINGS = [
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:15 - 12:15",
  "13:15 - 14:15",
  "14:15 - 15:15",
  "15:15 - 16:15",
];

export default function MissionControlDashboard({ branch, sem, gpa = "8.42" }: MissionControlDashboardProps) {
  const [mounted, setMounted] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  // Core configuration states
  const [mcSetup, setMcSetup] = useState(false);
  const [mcSlots, setMcSlots] = useState<Record<string, SlotConfig>>({});
  const [mcTimetable, setMcTimetable] = useState<string[][]>([]);
  const [mcTimetableTimings, setMcTimetableTimings] = useState<string[]>(DEFAULT_TIMINGS);
  const [mcLogs, setMcLogs] = useState<Record<string, string[]>>({});

  // Local storage namespace key
  const storageKey = `${branch}_${sem}_mc_config`;

  // 1. Initial State Load (Safe for SSR)
  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setMcSetup(parsed.mcSetup ?? false);
          setMcSlots(parsed.mcSlots ?? {});
          setMcTimetable(parsed.mcTimetable ?? []);
          setMcTimetableTimings(parsed.mcTimetableTimings ?? DEFAULT_TIMINGS);
          setMcLogs(parsed.mcLogs ?? {});
        } catch (e) {
          console.error("Error parsing Mission Control config", e);
        }
      }
    }
  }, [storageKey]);

  // 2. State persistence helper
  const saveState = (updated: {
    mcSetup: boolean;
    mcSlots: Record<string, SlotConfig>;
    mcTimetable: string[][];
    mcTimetableTimings: string[];
    mcLogs: Record<string, string[]>;
  }) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(storageKey, JSON.stringify(updated));
    }
    setMcSetup(updated.mcSetup);
    setMcSlots(updated.mcSlots);
    setMcTimetable(updated.mcTimetable);
    setMcTimetableTimings(updated.mcTimetableTimings);
    setMcLogs(updated.mcLogs);
  };

  // Complete onboarding
  const handleOnboardingComplete = (slots: Record<string, SlotConfig>, timetable: string[][]) => {
    saveState({
      mcSetup: true,
      mcSlots: slots,
      mcTimetable: timetable,
      mcTimetableTimings: DEFAULT_TIMINGS,
      mcLogs: {},
    });
  };

  // Update attendance logs
  const handleLogStatus = (dateStr: string, periodIndex: number, status: "attended" | "bunked" | "none") => {
    const currentDayLogs = mcLogs[dateStr] ? [...mcLogs[dateStr]] : Array(6).fill("none");
    currentDayLogs[periodIndex] = status;

    const updatedLogs = {
      ...mcLogs,
      [dateStr]: currentDayLogs,
    };

    saveState({
      mcSetup,
      mcSlots,
      mcTimetable,
      mcTimetableTimings,
      mcLogs: updatedLogs,
    });
  };

  // Update configurations from drawer
  const handleSaveDrawerConfig = (updatedSlots: Record<string, SlotConfig>, updatedTimings: string[]) => {
    saveState({
      mcSetup,
      mcSlots: updatedSlots,
      mcTimetable,
      mcTimetableTimings: updatedTimings,
      mcLogs,
    });
  };

  // Reset timetable data
  const handleResetData = () => {
    saveState({
      mcSetup: false,
      mcSlots: {},
      mcTimetable: [],
      mcTimetableTimings: DEFAULT_TIMINGS,
      mcLogs: {},
    });
  };

  // 3. Dynamic attendance map calculation
  // Computes current attendance percentage per subject based on base count + local logs
  const calculateAttendanceMap = () => {
    const map: Record<string, number> = {};
    
    // Seed subjects with 85% attendance baseline (e.g. 17/20 sessions)
    const baseAttended = 17;
    const baseTotal = 20;

    Object.values(mcSlots).forEach((s) => {
      map[s.subject] = 85.0; // standard base
    });

    // Loop through logs and recalculate
    const tally: Record<string, { attended: number; bunked: number }> = {};
    Object.keys(mcLogs).forEach((dateKey) => {
      const dayLogs = mcLogs[dateKey] || [];
      const dayNum = new Date(dateKey).getDay();
      const timetableDayIndex = dayNum === 0 || dayNum === 6 ? 0 : dayNum - 1; // default weekend to monday

      dayLogs.forEach((status, periodIdx) => {
        const slotLetter = mcTimetable[timetableDayIndex]?.[periodIdx];
        if (slotLetter) {
          const subjectName = mcSlots[slotLetter]?.subject;
          if (subjectName) {
            if (!tally[subjectName]) {
              tally[subjectName] = { attended: 0, bunked: 0 };
            }
            if (status === "attended") tally[subjectName].attended += 1;
            if (status === "bunked") tally[subjectName].bunked += 1;
          }
        }
      });
    });

    // Merge tally into map
    Object.keys(map).forEach((subj) => {
      const counts = tally[subj] || { attended: 0, bunked: 0 };
      const totalAttended = baseAttended + counts.attended;
      const totalSessions = baseTotal + counts.attended + counts.bunked;
      map[subj] = Math.round((totalAttended / totalSessions) * 1000) / 10;
    });

    return map;
  };

  if (!mounted) {
    return (
      <div className="animate-pulse h-96 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800 rounded-[30px] flex items-center justify-center text-xs text-slate-400 font-medium">
        Syncing cockpit telemetry...
      </div>
    );
  }

  // If not configured, render onboarding setup wizard
  if (!mcSetup) {
    return (
      <div className="py-6 sm:py-8">
        <OnboardingWizard onComplete={handleOnboardingComplete} />
      </div>
    );
  }

  const attendancePctMap = calculateAttendanceMap();

  return (
    <div className="space-y-6">
      {/* Top HUD Controller Menu */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200/50 dark:border-white/[0.04] pb-4">
        <div className="space-y-0.5">
          <h2 className="text-xl font-black text-slate-800 dark:text-white tracking-tight flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-500 animate-pulse" /> MISSION CONTROL
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Real-time daily gauntlet, attendance telemetry, and bunk risk router
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={handleResetData}
            className="flex-1 sm:flex-none border border-slate-200 dark:border-slate-800 hover:border-rose-500/20 hover:bg-rose-500/5 text-slate-500 dark:text-slate-400 hover:text-rose-500 text-[10px] font-bold uppercase tracking-wider px-3.5 py-2.5 rounded-xl cursor-pointer transition-all flex items-center justify-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Re-Setup
          </button>
          
          <button
            onClick={() => setIsConfigOpen(true)}
            className="flex-1 sm:flex-none bg-slate-900 dark:bg-slate-850 hover:bg-slate-800 dark:hover:bg-slate-800 text-white border border-slate-700 dark:border-white/[0.04] text-[10px] font-black uppercase tracking-wider px-4 py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-md cursor-pointer transition-all active:scale-[0.97]"
          >
            <Settings className="w-3.5 h-3.5 animate-spin-slow" /> Timetable Settings
          </button>
        </div>
      </div>

      {/* Telemetry Indicator Strip */}
      <TelemetryStrip slots={mcSlots} logs={mcLogs} gpa={gpa} timings={mcTimetableTimings} />

      {/* Tactical Widget Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Daily Gauntlet Timeline */}
        <div className="lg:col-span-7 h-full">
          <DailyGauntlet
            slots={mcSlots}
            timetable={mcTimetable}
            timings={mcTimetableTimings}
            logs={mcLogs}
            onLogStatus={handleLogStatus}
            attendancePctMap={attendancePctMap}
          />
        </div>

        {/* Right Column: Bunk Roulette & Proxy Radar */}
        <div className="lg:col-span-5 flex flex-col gap-6 h-full">
          <div className="flex-1">
            <BunkRoulette slots={mcSlots} attendancePctMap={attendancePctMap} />
          </div>
          <div className="flex-1">
            <ProxyRadar slots={mcSlots} />
          </div>
        </div>
      </div>

      {/* Config Drawer slide-out overlay */}
      <ConfigDrawer
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        slots={mcSlots}
        timings={mcTimetableTimings}
        onSave={handleSaveDrawerConfig}
        onReset={handleResetData}
      />
    </div>
  );
}
