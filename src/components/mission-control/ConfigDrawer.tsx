"use client";

import React, { useState, useEffect } from "react";
import { Settings, X, Trash2, Clock, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { triggerHaptic } from "@/lib/haptic";

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

  // Sync state when drawer opens or configuration changes
  useEffect(() => {
    if (isOpen) {
      setEditedSlots({ ...slots });
      setEditedTimings([...timings]);
      setTimeShiftMinutes(0);
    }
  }, [isOpen, slots, timings]);

  // Handle saving configurations
  const handleSaveConfig = () => {
    triggerHaptic("success");
    let finalTimings = [...editedTimings];
    if (timeShiftMinutes !== 0) {
      finalTimings = editedTimings.map((tStr) => {
        const [startStr, endStr] = tStr.split(" - ");
        
        const shiftTime = (t: string) => {
          const [h, m] = t.split(":").map(Number);
          let totalMins = h * 60 + m + timeShiftMinutes;
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
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex justify-end">
          {/* Overlay Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              triggerHaptic("light");
              onClose();
            }}
            className="absolute inset-0 bg-slate-950/45 backdrop-blur-sm cursor-pointer"
          />

          {/* Slide-out Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            className="relative w-full max-w-md bg-white/95 dark:bg-slate-950/90 backdrop-blur-xl border-l border-slate-950/[0.06] dark:border-white/[0.06] h-full flex flex-col shadow-2xl p-5 sm:p-6 overflow-y-auto space-y-5"
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-3 mb-1">
              <h3 className="text-sm font-black text-slate-800 dark:text-white tracking-tight flex items-center gap-2">
                <Settings className="w-4 h-4 text-slate-500 animate-spin-slow" /> Timetable Config
              </h3>
              <button
                onClick={() => {
                  triggerHaptic("light");
                  onClose();
                }}
                className="text-slate-400 hover:text-slate-650 dark:hover:text-slate-200 cursor-pointer p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Slot Course Tweaks */}
            <div className="space-y-3">
              <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block leading-none">
                Slot Subject Allocations
              </span>
              <div className="space-y-3 max-h-[340px] overflow-y-auto pr-1">
                {DEFAULT_SLOTS.map((slot) => {
                  const cfg = editedSlots[slot] || { subject: "", professor: "", vibe: "robot" };
                  return (
                    <div key={slot} className="p-3.5 bg-slate-50/50 dark:bg-slate-900/30 border border-slate-950/[0.04] dark:border-white/[0.02] rounded-2xl space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded tracking-wide">SLOT {slot}</span>
                        <select
                          value={cfg.vibe}
                          onChange={(e) =>
                            setEditedSlots({
                              ...editedSlots,
                              [slot]: { ...cfg, vibe: e.target.value as any },
                            })
                          }
                          className="text-[9px] font-black bg-white dark:bg-slate-800 border border-slate-250 dark:border-slate-700 rounded px-1.5 py-0.5 text-slate-700 dark:text-slate-350 cursor-pointer outline-none focus:ring-1 focus:ring-blue-500/30"
                        >
                          <option value="saint">Saint</option>
                          <option value="robot">Robot</option>
                          <option value="boss">Boss</option>
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
                          className="w-full bg-white dark:bg-slate-950 border border-slate-950/[0.06] dark:border-white/[0.06] hover:border-slate-950/[0.12] hover:dark:border-white/[0.12] focus:border-blue-500 rounded-lg px-2.5 py-1.5 text-[11px] font-bold text-slate-800 dark:text-white focus:outline-none transition-all"
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
                          className="w-full bg-white dark:bg-slate-950 border border-slate-950/[0.06] dark:border-white/[0.06] hover:border-slate-950/[0.12] hover:dark:border-white/[0.12] focus:border-blue-500 rounded-lg px-2.5 py-1.5 text-[11px] font-bold text-slate-850 dark:text-white focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Time adjustments */}
            <div className="space-y-3">
              <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block leading-none">
                Period Timings & Time Shift
              </span>
              <div className="space-y-3 bg-slate-50/50 dark:bg-slate-900/30 border border-slate-950/[0.04] dark:border-white/[0.02] p-4 rounded-2xl">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Shift Timetable Offset</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Offset in mins (e.g. -30 or 15)"
                    value={timeShiftMinutes || ""}
                    onChange={(e) => setTimeShiftMinutes(Number(e.target.value))}
                    className="w-full bg-white dark:bg-slate-950 border border-slate-950/[0.06] dark:border-white/[0.06] hover:border-slate-950/[0.12] hover:dark:border-white/[0.12] rounded-lg px-3 py-1.5 text-xs font-mono text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500/20"
                  />
                  <span className="text-[9.5px] font-black uppercase text-slate-400 dark:text-slate-500 whitespace-nowrap min-w-[70px] text-right">
                    {timeShiftMinutes > 0 ? `+${timeShiftMinutes}m shift` : timeShiftMinutes < 0 ? `${timeShiftMinutes}m shift` : "No shift"}
                  </span>
                </div>
                
                <div className="pt-3.5 grid grid-cols-2 gap-2 border-t border-slate-100 dark:border-slate-800/60 mt-3.5">
                  {editedTimings.map((timeStr, idx) => (
                    <div key={idx} className="flex flex-col space-y-1">
                      <span className="text-[8.5px] font-black uppercase tracking-wider text-slate-400">Hour {idx + 1}</span>
                      <input
                        type="text"
                        value={timeStr}
                        onChange={(e) => {
                          const updated = [...editedTimings];
                          updated[idx] = e.target.value;
                          setEditedTimings(updated);
                        }}
                        className="bg-white dark:bg-slate-950 border border-slate-950/[0.06] dark:border-white/[0.06] hover:border-slate-950/[0.12] hover:dark:border-white/[0.12] rounded-lg px-2.5 py-1.5 text-[10.5px] font-mono text-slate-800 dark:text-white text-center focus:outline-none focus:ring-1 focus:ring-blue-500/20"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Save & Reset controls */}
            <div className="flex flex-col gap-2 pt-2 mt-auto">
              <motion.button
                whileHover={{ scale: 1.01, y: -0.5 }}
                whileTap={{ scale: 0.99 }}
                onClick={handleSaveConfig}
                className="w-full bg-gradient-to-b from-[#2E95FF] to-[#007AFF] hover:brightness-105 border border-blue-500/25 text-white font-black uppercase text-[10px] tracking-widest py-3.5 rounded-xl flex items-center justify-center gap-1.5 shadow-[0_4px_12px_rgba(0,122,255,0.15)] cursor-pointer transition-all duration-200"
              >
                Apply Changes <Check className="w-3.5 h-3.5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => {
                  triggerHaptic("warning");
                  if (confirm("Are you sure you want to reset all timetable configurations? This cannot be undone.")) {
                    onReset();
                    onClose();
                  }
                }}
                className="w-full bg-transparent hover:bg-rose-500/5 border border-rose-500/20 hover:border-rose-500/45 text-rose-500 font-black uppercase tracking-widest text-[9.5px] py-2.5 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-all duration-200"
              >
                Wipe Timetable Data <Trash2 className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
