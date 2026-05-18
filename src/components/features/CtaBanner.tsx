"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, BookOpen, FileText, GraduationCap, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";

const floatingCards = [
  {
    icon: BookOpen,
    title: "Chapter Notes",
    sub: "2024 Scheme",
    gradient: "from-blue-500 to-blue-600",
    x: -1,
    y: -1,
    rotate: -6,
    pos: { left: "6%", top: "18%" },
  },
  {
    icon: FileText,
    title: "PYQs",
    sub: "2019–2024",
    gradient: "from-violet-500 to-violet-600",
    x: 1,
    y: -1,
    rotate: 4,
    pos: { right: "8%", top: "12%" },
  },
  {
    icon: GraduationCap,
    title: "Syllabus",
    sub: "Live Tracker",
    gradient: "from-emerald-500 to-emerald-600",
    x: 1,
    y: 1,
    rotate: -3,
    pos: { right: "6%", bottom: "18%" },
  },
];

const stats = [
  { value: "Free",  label: "Always free" },
  { value: "2024",  label: "Scheme updated" },
  { value: "5 min", label: "To get started" },
];

export default function CtaBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #080f1e 0%, #0d1f3c 50%, #162d5e 100%)",
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

      {/* Floating cards */}
      {floatingCards.map((card, i) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={i}
            className="hidden lg:flex absolute bg-white/8 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 items-center gap-3 shadow-xl cursor-default"
            style={card.pos as React.CSSProperties}
            initial={{ opacity: 0, x: card.x * 40, y: card.y * 20, rotate: card.rotate }}
            animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: card.rotate } : {}}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.06, backgroundColor: "rgba(255,255,255,0.12)" }}
            aria-hidden="true"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
              className="flex items-center gap-3"
            >
              <div
                className={`w-9 h-9 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center shadow-lg`}
              >
                <Icon className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-white text-sm font-bold">{card.title}</div>
                <div className="text-white/45 text-xs">{card.sub}</div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

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
            style={{ color: "#60b8ff", textShadow: "0 0 40px rgba(96,184,255,0.28)" }}
          >
            next semester?
          </span>
        </motion.h2>

        <motion.p
          className="text-white/52 text-lg mb-12 max-w-xl mx-auto leading-relaxed"
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
          className="flex items-center justify-center gap-10 flex-wrap"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center cursor-default group"
              whileHover={{ scale: 1.08 }}
            >
              <div className="text-3xl font-black text-white group-hover:text-blue-300 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-xs text-white/38 font-semibold mt-1 uppercase tracking-widest group-hover:text-white/55 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
