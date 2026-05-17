"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MousePointerClick, BookMarked, TrendingUp, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const steps = [
  {
    number: "01",
    icon: MousePointerClick,
    title: "Pick your branch & semester",
    description:
      "Select from CS, EC, ME, CE, or EE and choose your semester. KTUNODE instantly filters everything to exactly what you need — no digging.",
    iconColor: "#2E95FF",
    iconBg: "rgba(46,149,255,0.1)",
    dot: "#2E95FF",
  },
  {
    number: "02",
    icon: BookMarked,
    title: "Access notes, PYQs & syllabus",
    description:
      "Chapter-wise notes, real KTU exam papers from 2019–2024, and a live syllabus tracker — all in one place, always updated for the 2024 scheme.",
    iconColor: "#059669",
    iconBg: "rgba(5,150,105,0.1)",
    dot: "#059669",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Track progress & ace exams",
    description:
      "Mark modules complete, see what's left, and walk into every exam knowing you've covered exactly what the examiner expects.",
    iconColor: "#7c3aed",
    iconBg: "rgba(124,58,237,0.1)",
    dot: "#7c3aed",
  },
];

export default function HowItWorksSection() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ddeeff 0%, #e8f3ff 60%, #eef7ff 100%)",
      }}
      aria-labelledby="how-it-works-heading"
    >
      {/* Blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-200/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-sky-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }}
        >
          <div className="section-badge mb-5">How it works</div>
          <h2
            id="how-it-works-heading"
            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4 leading-[1.05]"
          >
            Study smarter{" "}
            <span className="gradient-text">in 3 steps.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-md mx-auto leading-relaxed">
            From setup to exam-ready in minutes. No account, no clutter.
          </p>
        </motion.div>

        {/* Steps — vertical timeline on mobile, horizontal on desktop */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-6 relative">

          {/* Desktop connector line removed as requested */}

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                className="relative z-10 flex-1 flex flex-col md:items-center md:text-center"
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.15, duration: 0.65, ease: [0.16, 1, 0.3, 1] as any }}
              >
                {/* Mobile left border line removed as requested */}

                <div className="flex md:flex-col md:items-center gap-5 md:gap-4 p-6 md:p-0">
                  {/* Icon circle */}
                  <motion.div
                    className="relative flex-shrink-0 w-10 h-10 md:w-20 md:h-20 rounded-full md:rounded-2xl flex items-center justify-center"
                    style={{ background: step.iconBg }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {/* Step number badge */}
                    <span
                      className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 w-5 h-5 md:w-6 md:h-6 rounded-full text-white text-[9px] md:text-[10px] font-black flex items-center justify-center"
                      style={{ background: step.dot }}
                    >
                      {i + 1}
                    </span>
                    <Icon
                      className="w-5 h-5 md:w-8 md:h-8"
                      style={{ color: step.iconColor }}
                      strokeWidth={1.8}
                    />
                  </motion.div>

                  {/* Text */}
                  <div className="flex-1 md:mt-5">
                    <h3 className="text-base md:text-lg font-black text-slate-900 mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-14"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
        >
          <button
            onClick={() => router.push("/dashboard")}
            className="pill-btn pill-btn-primary group"
          >
            Start Now — It&apos;s Free
            <motion.span
              className="inline-flex"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
