"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MousePointerClick, BookMarked, TrendingUp, ArrowRight, BookOpen, FileText } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: MousePointerClick,
    title: "Pick branch & semester",
    description:
      "Select CS, EC, ME, CE, or EE and your semester. KTUNODE filters everything to exactly what you need instantly.",
    textColor: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50/70 dark:bg-blue-950/20 border-blue-100/50 dark:border-blue-900/30",
    hoverStyle: "hover:border-blue-300/80 hover:shadow-[0_24px_48px_rgba(59,130,246,0.06)]",
  },
  {
    number: "02",
    icon: BookMarked,
    title: "Access core resources",
    description:
      "Chapter-wise notes, model papers, and a live syllabus tracker — all in one place, always updated for the 2024 scheme.",
    textColor: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-100/50 dark:border-emerald-900/30",
    hoverStyle: "hover:border-emerald-300/80 hover:shadow-[0_24px_48px_rgba(16,185,129,0.06)]",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Track & ace exams",
    description:
      "Mark modules complete, audit what's left, and walk into every exam knowing you've covered exactly what the examiner expects.",
    textColor: "text-violet-600 dark:text-violet-400",
    bgColor: "bg-violet-50/70 dark:bg-violet-950/20 border-violet-100/50 dark:border-violet-900/30",
    hoverStyle: "hover:border-violet-300/80 hover:shadow-[0_24px_48px_rgba(139,92,246,0.06)]",
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50/40 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-t border-slate-100 dark:border-slate-800"
      aria-labelledby="how-it-works-heading"
    >
      {/* Soft Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/10 dark:from-blue-900/5 via-sky-100/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-100/10 dark:from-indigo-900/5 via-purple-100/3 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-5 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-100/50 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wide uppercase select-none">
            How it works
          </div>
          <h2
            id="how-it-works-heading"
            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-slate-100 mb-5 leading-[1.06]"
          >
            Study smarter{" "}
            <span className="gradient-text-animated">in 3 steps.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-md mx-auto leading-relaxed font-medium">
            From setup to exam-ready in minutes. No account, no clutter.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Desktop Animated Connector Line */}
          <div className="absolute top-[54px] left-[15%] right-[15%] h-[2px] bg-slate-100/80 dark:bg-slate-800 hidden md:block z-0" aria-hidden="true">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-emerald-500 to-violet-500 w-[20%]"
              animate={{
                x: ["-100%", "500%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                className={`relative z-10 h-[325px] p-6 flex flex-col justify-between rounded-3xl border border-slate-200/50 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.015)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 group ${step.hoverStyle}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.15, duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
              >
                {/* Large Background Step Number Watermark */}
                <div className="absolute bottom-[-16px] right-[-10px] text-[10rem] font-sans font-black text-slate-950/[0.03] dark:text-white/[0.03] select-none pointer-events-none z-0 leading-none group-hover:text-slate-950/[0.06] group-hover:dark:text-white/[0.06] transition-colors duration-500">
                  {step.number}
                </div>

                {/* Card Content - Float over watermark */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    {/* Icon squircle */}
                    <div className={`w-14 h-14 rounded-2xl ${step.bgColor} border flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm`}>
                      <Icon className={`w-6 h-6 ${step.textColor}`} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base md:text-lg font-extrabold text-slate-900 dark:text-slate-100 mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                    {step.description}
                  </p>
                </div>

                {/* Integrated Visual Micro-Graphic (Bottom Row) */}
                <div className="relative z-10">
                  {i === 0 && (
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex gap-1.5 select-none justify-center">
                      <div className="relative inline-block transition-transform duration-300 group-hover:scale-105">
                        <span className="text-[10px] font-black px-2.5 py-1 rounded-xl bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 shadow-sm">
                          CS
                        </span>
                        {/* Simulated cursor arrow */}
                        <div className="absolute -bottom-2 -right-1.5 w-3 h-3 text-slate-900 drop-shadow-[0_1px_3px_rgba(0,0,0,0.15)] pointer-events-none">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transform -rotate-12">
                            <path d="M4.5 3v15.2l3.8-3.8 2.9 6.8 2.2-.9-2.9-6.8 5.4-.1z" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-[10px] font-black px-2.5 py-1 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100/60 dark:border-slate-800/60 text-slate-400 dark:text-slate-500">
                        EC
                      </span>
                      <span className="text-[10px] font-black px-2.5 py-1 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100/60 dark:border-slate-800/60 text-slate-400 dark:text-slate-500">
                        ME
                      </span>
                    </div>
                  )}

                  {i === 1 && (
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex gap-2 select-none justify-center">
                      <span className="text-[10px] font-black px-2.5 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-100 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center gap-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <BookOpen className="w-3.5 h-3.5" /> Notes
                      </span>
                      <span className="text-[10px] font-black px-2.5 py-1 rounded-xl bg-violet-50 dark:bg-violet-950 border border-violet-100 dark:border-violet-800 text-violet-600 dark:text-violet-400 flex items-center gap-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <FileText className="w-3.5 h-3.5" /> Papers
                      </span>
                    </div>
                  )}

                  {i === 2 && (
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-1.5 select-none items-center">
                      <div className="w-28 bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full w-[80%] rounded-full transition-all duration-700 group-hover:w-[100%]" />
                      </div>
                      <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        Progress tracker
                      </span>
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <Link
            href="/dashboard"
            className="pill-btn pill-btn-primary group inline-flex"
          >
            Start Now — It&apos;s Free
            <motion.span
              className="inline-flex"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
