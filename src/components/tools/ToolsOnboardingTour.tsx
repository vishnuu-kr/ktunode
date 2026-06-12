"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, ArrowLeft, X, ShieldCheck, Activity, Award } from "lucide-react";
import { triggerHaptic } from "@/lib/haptic";

interface OnboardingTourProps {
  onComplete: () => void;
}

export default function ToolsOnboardingTour({ onComplete }: OnboardingTourProps) {
  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if onboarded already
    const onboarded = localStorage.getItem("ktunode_tools_onboarded_v2");
    if (!onboarded) {
      setIsVisible(true);
    }
  }, []);

  const handleNext = (e: React.MouseEvent) => {
    triggerHaptic("medium", e);
    if (step < 3) {
      setStep(prev => prev + 1);
    } else {
      handleComplete(e);
    }
  };

  const handleBack = (e: React.MouseEvent) => {
    triggerHaptic("light", e);
    if (step > 0) {
      setStep(prev => prev - 1);
    }
  };

  const handleComplete = (e: React.MouseEvent | React.TouchEvent) => {
    triggerHaptic("success", e);
    localStorage.setItem("ktunode_tools_onboarded_v2", "true");
    setIsVisible(false);
    onComplete();
  };

  const stepsData = [
    {
      title: "Welcome to Study Workspace",
      desc: "Your centralized academic cockpit tailored specifically for the KTU 2024 scheme. Track your grades, schedule, records, and progress with zero friction.",
      icon: Sparkles,
      color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    },
    {
      title: "Cockpit Telemetry HUD",
      desc: "The top bar displays real-time telemetry: CGPA (10.0 scale), overall Attendance percentages (Safe/At Risk warnings), tracked Lab Experiments, and current SGPA estimates.",
      icon: Activity,
      color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "Tactical Workspace Switcher",
      desc: "Easily navigate through dedicated academic workspaces: log attendance and CIE, predict semester grades, monitor 120 activity points, and map lab milestones.",
      icon: Award,
      color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      title: "Zero Sign-up. 100% Private.",
      desc: "All calculations, configurations, and records are processed locally inside your browser cache. Your data remains on your device, secure and instantly accessible.",
      icon: ShieldCheck,
      color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    }
  ];

  if (!isVisible) return null;

  const currentStepData = stepsData[step];
  const Icon = currentStepData.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", damping: 26, stiffness: 220 }}
          className="relative w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/[0.04] rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden font-display flex flex-col justify-between"
        >
          {/* Subtle ambient underglow */}
          <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-blue-500/[0.04] blur-[40px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-purple-500/[0.04] blur-[40px] pointer-events-none" />

          {/* Close / Skip button */}
          <button
            onClick={handleComplete}
            className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
            aria-label="Skip onboarding"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Icon frame */}
          <div className="mb-6 self-start">
            <div className={`p-3.5 rounded-2xl border flex items-center justify-center ${currentStepData.color}`}>
              <Icon className="w-6 h-6" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3 mb-8">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white tracking-tight">
              {currentStepData.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed font-sans">
              {currentStepData.desc}
            </p>
          </div>

          {/* Footer Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/[0.04] gap-4">
            {/* Step indicators */}
            <div className="flex items-center gap-1.5">
              {stepsData.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === step ? "w-6 bg-blue-500" : "w-1.5 bg-slate-200 dark:bg-slate-800"
                  }`}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-2">
              {step > 0 && (
                <button
                  onClick={handleBack}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
              )}
              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-b from-[#2E95FF] to-[#007AFF] hover:brightness-105 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1 cursor-pointer shadow-md shadow-blue-500/10 transition-all duration-200 active:scale-95"
              >
                {step === 3 ? "Start" : "Next"} <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
