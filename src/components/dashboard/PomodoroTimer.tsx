"use client";

import React from "react";
import { Timer, Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { motion } from "framer-motion";

interface PomodoroTimerProps {
  sessionMinutes: number;
  setSessionMinutes: (m: number) => void;
  secondsLeft: number;
  setSecondsLeft: React.Dispatch<React.SetStateAction<number>>;
  isRunning: boolean;
  setIsRunning: (r: boolean) => void;
  isMuted: boolean;
  setIsMuted: (m: boolean) => void;
}

export default function PomodoroTimer({
  sessionMinutes,
  setSessionMinutes,
  secondsLeft,
  setSecondsLeft,
  isRunning,
  setIsRunning,
  isMuted,
  setIsMuted,
}: PomodoroTimerProps) {

  const handlePresetSelect = (mins: number) => {
    setSessionMinutes(mins);
    setSecondsLeft(mins * 60);
    setIsRunning(false);
  };

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(sessionMinutes * 60);
  };

  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  // Circular progress calculations
  const totalDuration = sessionMinutes * 60;
  const progressRatio = totalDuration > 0 ? (totalDuration - secondsLeft) / totalDuration : 0;
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progressRatio * circumference;

  const presets = [
    { label: "Focus", val: 25 },
    { label: "Deep Study", val: 50 },
    { label: "Break", val: 5 },
  ];

  return (
    <div className="bg-white/65 backdrop-blur-xl border border-slate-950/[0.06] rounded-[20px] p-5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] hover:border-slate-950/[0.12] transition-all duration-300 relative overflow-hidden group">
      {/* Glow background accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-950/[0.02] rounded-full blur-2xl pointer-events-none transition-all duration-300" />

      <div className="flex items-center justify-between gap-3 mb-3 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#2E95FF]/10 border border-[#2E95FF]/20 flex items-center justify-center text-[#2E95FF]">
            <Timer className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-black text-slate-900 text-base leading-tight">Focus Timer</h3>
            <p className="text-[11px] text-slate-400/80 font-bold">Boost productivity</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsMuted(!isMuted)}
          className="w-8 h-8 rounded-lg bg-slate-950/[0.04] hover:bg-slate-950/[0.08] text-slate-500 flex items-center justify-center transition-colors shrink-0"
          aria-label={isMuted ? "Unmute timer alert" : "Mute timer alert"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Preset select pills */}
      <div className="flex gap-1.5 p-1 bg-slate-950/[0.03] border border-slate-950/[0.03] rounded-xl mb-3 relative z-10">
        {presets.map((preset) => (
          <button
            key={preset.val}
            type="button"
            onClick={() => handlePresetSelect(preset.val)}
            className={`flex-1 text-[11px] font-black py-1.5 rounded-lg transition-all ${
              sessionMinutes === preset.val
                ? "bg-[#2E95FF] text-white shadow-[0_2px_6px_rgba(46,149,255,0.25)] border border-[#2E95FF]/30"
                : "text-slate-400 hover:text-slate-800"
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Timer Circle */}
      <div className="flex items-center justify-center relative my-2 mx-auto w-32 h-32">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 136 136">
          <circle
            cx="68"
            cy="68"
            r={radius}
            className="stroke-slate-950/[0.03] fill-none"
            strokeWidth="8"
          />
          <motion.circle
            cx="68"
            cy="68"
            r={radius}
            className="fill-none"
            style={{ stroke: "#2E95FF" }}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transition={{ ease: "linear", duration: 0.2 }}
          />
        </svg>
        <div 
          className="absolute flex flex-col items-center justify-center"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="text-3xl font-black tracking-tight text-slate-900 tabular-nums leading-none">
            {formatTime(secondsLeft)}
          </span>
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">
            {isRunning ? "Focusing" : "Paused"}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-row gap-2 mt-4 relative z-10">
        <div className="flex-[3]">
          <MagneticButton
            onClick={handleStartPause}
            className="w-full !h-[48px] !rounded-xl !p-0 !text-[13px] !font-black !flex !items-center !justify-center !gap-2"
          >
            {isRunning ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                Pause
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                Start
              </>
            )}
          </MagneticButton>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="flex-[2] h-[48px] rounded-xl border border-slate-950/[0.06] bg-white/60 text-slate-700 hover:text-slate-900 text-[13px] font-black hover:bg-slate-950/[0.02] flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-[0.97]"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
      </div>
    </div>
  );
}
