"use client";

import React, { useState } from "react";
import { Settings, X, Trash2, Clock, Check, AlertCircle } from "lucide-react";

type SlotConfig = {
  subject: string;
  professor: string;
  vibe: "saint" | "robot" | "boss";
};

type ConfigDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  slots: Record<string, SlotConfig>;
  timings: string[];
  onSave: (slots: Record<string, SlotConfig>, timings: string[]) => void;
  onReset: () => void;
};

const DEFAULT_SLOTS = ["A", "B", "C", "D", "E", "F"];

export default function ConfigDrawer({
  isOpen,
  onClose,
  slots,
  timings,
  onSave,
  onReset,
}: ConfigDrawerProps) {
  const [editedSlots, setEditedSlots] = useState<Record<string, SlotConfig>>({ ...slots });
  const [editedTimings, setEditedTimings] = useState<string[]>([...timings]);
  const [timeShiftMinutes, setTimeShiftMinutes] = useState(0);

  if (!isOpen) return null;

  // Handle saving configurations
  const handleSaveConfig = () => {
    // Apply shift in minutes to all timings if specified
    let finalTimings = [...editedTimings];
    if (timeShiftMinutes !== 0) {
      finalTimings = editedTimings.map((tStr) => {
        const [startStr, endStr] = tStr.split(" - ");
        
        const shiftTime = (t: string) => {
          const [h, m] = t.split(":").map(Number);
          let totalMins = h * 60 + m + timeShiftMinutes;
          // guard bounds
          if (totalMins < 0) totalMins = 0;
          if (totalMins >= 1440) totalMins = 1439;
          const newH = String(Math.floor(totalMins / 60)).padStart(2, "0");
          const newM = String(totalMins % 60).padStart(2, "0");
          return `${newH}:${newM}`;
        };

        return `${shiftTime(startStr)} - ${shiftTime(endStr)}`;
      });
    }

    onSave(editedSlots, finalTimings);
    setTimeShiftMinutes(0); // reset offset field
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end transition-all duration-300">
      {/* Overlay Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm cursor-pointer"
      />

      {/* Slide-out Panel */}
      <div className="relative w-full max-w-md bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-white/[0.06] h-full flex flex-col shadow-2xl p-5 sm:p-6 overflow-y-auto space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.05] pb-3 mb-1">
          <h3 className="text-sm font-black text-slate-800 dark:text-white tracking-tight flex items-center gap-2">
            <Settings className="w-4 h-4 text-slate-500 animate-spin-slow" /> COCKPIT CONFIGURATION
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-650 dark:hover:text-slate-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slot Course Tweaks */}
        <div className="space-y-3">
          <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
            SLOT SUBJECT ALLOCATIONS
          </span>
          <div className="space-y-3.5 max-h-[300px] overflow-y-auto pr-1">
            {DEFAULT_SLOTS.map((slot) => {
              const cfg = editedSlots[slot] || { subject: "", professor: "", vibe: "robot" };
              return (
                <div key={slot} className="p-3 bg-slate-50 dark:bg-slate-900/30 border border-slate-150 dark:border-white/[0.02] rounded-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">SLOT {slot}</span>
                    <select
                      value={cfg.vibe}
                      onChange={(e) =>
                        setEditedSlots({
                          ...editedSlots,
                          [slot]: { ...cfg, vibe: e.target.value as any },
                        })
                      }
                      className="text-[9px] font-black bg-white dark:bg-slate-800 border border-slate-250 dark:border-slate-700 rounded px-1.5 py-0.5 text-slate-700 dark:text-slate-350 cursor-pointer"
                    >
                      <option value="saint">Absolute Saint</option>
                      <option value="robot">Syllabus Robot</option>
                      <option value="boss">Final Boss</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Subject name"
                      value={cfg.subject}
                      onChange={(e) =>
                        setEditedSlots({
                          ...editedSlots,
                          [slot]: { ...cfg, subject: e.target.value },
                        })
                      }
                      className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/[0.05] rounded-lg px-2.5 py-1 text-[11px] font-bold text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500/20"
                    />
                    <input
                      type="text"
                      placeholder="Professor"
                      value={cfg.professor}
                      onChange={(e) =>
                        setEditedSlots({
                          ...editedSlots,
                          [slot]: { ...cfg, professor: e.target.value },
                        })
                      }
                      className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/[0.05] rounded-lg px-2.5 py-1 text-[11px] text-slate-850 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500/20"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tim timings adjustments */}
        <div className="space-y-3">
          <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
            PERIOD TIMINGS & TIME SHIFT
          </span>
          <div className="space-y-2 bg-slate-50 dark:bg-slate-900/30 border border-slate-150 dark:border-white/[0.02] p-3 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-slate-400" />
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">Time Shift Timetable Offset</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Offset in mins (e.g. -30 or 15)"
                value={timeShiftMinutes || ""}
                onChange={(e) => setTimeShiftMinutes(Number(e.target.value))}
                className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/[0.05] rounded-lg px-2.5 py-1 text-[11px] font-mono text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500/20"
              />
              <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 whitespace-nowrap">
                {timeShiftMinutes > 0 ? `+${timeShiftMinutes}m shift` : timeShiftMinutes < 0 ? `${timeShiftMinutes}m shift` : "No shift"}
              </span>
            </div>
            
            <div className="pt-2 grid grid-cols-2 gap-2 border-t border-slate-200/50 dark:border-white/[0.04] mt-2">
              {editedTimings.map((timeStr, idx) => (
                <div key={idx} className="flex flex-col space-y-0.5">
                  <span className="text-[8px] font-black text-slate-400">Hour {idx + 1}</span>
                  <input
                    type="text"
                    value={timeStr}
                    onChange={(e) => {
                      const updated = [...editedTimings];
                      updated[idx] = e.target.value;
                      setEditedTimings(updated);
                    }}
                    className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/[0.05] rounded-lg px-2.5 py-1 text-[10px] font-mono text-slate-800 dark:text-white text-center focus:outline-none focus:ring-1 focus:ring-blue-500/20"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Save & Reset controls */}
        <div className="flex flex-col gap-2 pt-2 mt-auto">
          <button
            onClick={handleSaveConfig}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black uppercase text-[10px] tracking-wider py-3 rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-blue-500/20 cursor-pointer transition-all active:scale-[0.98]"
          >
            Apply Changes <Check className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={() => {
              if (confirm("Are you sure you want to reset all timetable configurations? This cannot be undone.")) {
                onReset();
                onClose();
              }
            }}
            className="w-full bg-transparent hover:bg-rose-500/5 border border-rose-500/20 hover:border-rose-500/40 text-rose-500 font-bold uppercase text-[9px] tracking-wider py-2.5 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-[0.98]"
          >
            Wipe Timetable Data <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
