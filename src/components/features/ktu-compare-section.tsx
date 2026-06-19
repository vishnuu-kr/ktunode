"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Compare } from "@/components/ui/compare";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const bullets = [
  "Module-by-module notes with precise formulas for full marks",
  "Exam-focused content designed to prevent backlogs",
  "Updated for the latest 2024 regulation & subject codes",
];

export default function KtuCompareSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-8%" });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [sliderPct, setSliderPct] = useState(50);
  const [hasCelebrated, setHasCelebrated] = useState(false);

  useEffect(() => {
    if (sliderPct >= 98 && !hasCelebrated) {
      setHasCelebrated(true);
      import("canvas-confetti").then((module) => {
        const confetti = module.default;
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.75 },
          colors: ["#10b981", "#34d399", "#6ee7b7", "#059669", "#ffffff"]
        });
      });
    } else if (sliderPct < 90 && hasCelebrated) {
      setHasCelebrated(false);
    }
  }, [sliderPct, hasCelebrated]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkTouch = () => {
        setIsTouchDevice(
          "ontouchstart" in window ||
            navigator.maxTouchPoints > 0
        );
      };
      checkTouch();
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden bg-background"
      style={{
        background:
          "linear-gradient(180deg, var(--color-bg) 0%, var(--color-sky) 50%, var(--color-sky-deep) 100%)",
      }}
      aria-labelledby="compare-heading"
    >
      {/* Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/35 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-100/25 dark:bg-sky-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* ── Left text ── */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-lg"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-badge mb-6">Before vs After</div>

            <h2
              id="compare-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-slate-100 leading-[1.05] mb-6"
            >
              From Chaos
              <br />
              <span className="gradient-text-animated">to Clarity.</span>
            </h2>

            {/* Problem Group (Chaos) */}
            <div className="space-y-4 mb-6">
              <p className="text-xs font-black uppercase tracking-wider text-red-550 dark:text-red-400">The Problem</p>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
                Digging through dense textbooks and matching subject codes is exhausting.
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  "Dense textbooks with too much theory",
                  "Scattered updates about internal marks & schedules",
                  "Cluttered syllabi that cause backlog panic",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-left">
                    <div className="w-5 h-5 rounded-full bg-red-50 dark:bg-red-950/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-550 dark:text-red-400 text-xs font-bold">✕</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-555 dark:text-slate-400 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Separator */}
            <hr className="border-slate-200/60 dark:border-slate-800/80 my-8" />

            {/* Solution Group (Clarity) */}
            <div className="space-y-4 mb-8">
              <p className="text-xs font-black uppercase tracking-wider text-emerald-605 dark:text-emerald-450">Here’s how KTUNode fixes this:</p>
              <div className="flex flex-col gap-3">
                {bullets.map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-start gap-3 text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-snug">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <Link
              href="/notes"
              className="pill-btn pill-btn-primary group inline-flex"
            >
              Browse Notes
              <motion.span
                className="inline-flex"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>

          {/* ── Right compare widget ── */}
          <motion.div
            className="flex-1 flex flex-col items-center gap-4 w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className={`p-2 md:p-3 w-full max-w-[760px] rounded-3xl border bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm transition-all duration-500 ${
                sliderPct >= 98
                  ? "border-emerald-400 dark:border-emerald-700 shadow-[0_0_50px_rgba(16,185,129,0.25)]"
                  : "border-blue-100 dark:border-slate-800 shadow-[0_20px_60px_rgba(37,99,235,0.12),0_4px_16px_rgba(0,0,0,0.06)]"
              }`}
              whileHover={{
                y: -4,
                transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
              }}
            >
              <Compare
                firstImage="/assets/ktu-cluttered.webp"
                secondImage="/assets/ktu-structured.webp"
                firstImageClassName="object-cover object-top"
                secondImageClassname="object-cover object-top"
                className="w-full aspect-square sm:aspect-square md:aspect-video rounded-[20px]"
                slideMode={isTouchDevice ? "drag" : "hover"}
                autoplay={true}
                onChange={setSliderPct}
              />
            </motion.div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wide uppercase mb-2">
              ← Drag or hover to compare →
            </p>

            {/* Celebration text and CTA when clarity is achieved */}
            <AnimatePresence>
              {sliderPct >= 98 && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-center text-sm font-bold flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-[760px] shadow-lg shadow-emerald-500/5 select-none z-30"
                >
                  <span className="flex items-center gap-2">
                    <span>✨ This is how your semester can look!</span>
                  </span>
                  <Link
                    href="/dashboard"
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black shadow-[0_4px_12px_rgba(16,185,129,0.3)] transition-all inline-flex items-center gap-1 cursor-pointer"
                  >
                    Go to Dashboard
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
