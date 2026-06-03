"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";

const stats = [
  { value: "Free",  label: "Always free" },
  { value: "2024",  label: "Scheme updated" },
  { value: "Instant", label: "To get started" },
];

export default function CtaBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{
        backgroundColor: "#0f172a",
        backgroundImage: "radial-gradient(circle at center, rgba(8, 15, 30, 0.75) 0%, rgba(8, 15, 30, 0) 65%), url('/bg-ready.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-labelledby="cta-heading"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/8 border border-white/12 text-blue-200 text-xs font-bold tracking-widest uppercase cursor-default"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          Free for all KTU students
        </motion.div>

        {/* Headline */}
        <motion.h2
          id="cta-heading"
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.05]"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Ready to ace your
          <br />
          <span
            className="gradient-text-animated"
            style={{
              textShadow: "0 0 40px rgba(96,184,255,0.28)",
              "--mobile-gradient-fallback": "#60b8ff",
            } as React.CSSProperties}
          >
            next semester?
          </span>
        </motion.h2>

        <motion.p
          className="text-white/70 text-lg mb-12 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Structured notes, real PYQs, and a syllabus tracker built for the 2024 scheme.
          No account, no payment — just open and study.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <MagneticButton href="/dashboard">
            Open Dashboard
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          <Link
            href="/notes"
            className="pill-btn pill-btn-outline !bg-white/10 !text-white !border-white/18 hover:!bg-white/16 hover:!border-white/30 hover:!text-white inline-flex"
          >
            Browse Notes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center cursor-default group"
              whileHover={{ scale: 1.08 }}
            >
              <div className="text-3xl font-black text-white group-hover:text-blue-300 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-xs text-white/60 font-semibold mt-1 uppercase tracking-widest group-hover:text-white/80 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
