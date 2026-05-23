"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const words = ["clarity", "structure", "focus", "precision", "mastery"];

const statItems = [
  { value: "98%",  label: "Exam Coverage" },
  { value: "5",    label: "Branches" },
  { value: "8",    label: "Semesters" },
  { value: "Free", label: "Always" },
];

// Fixed particle positions — no random, no hydration mismatch
const particles = [
  { top: "8%",  left: "12%", size: 2.5, delay: 0,   color: "#93c5fd" },
  { top: "22%", left: "78%", size: 2,   delay: 0.6,  color: "#7dd3fc" },
  { top: "45%", left: "5%",  size: 3,   delay: 1.2,  color: "#6ee7b7" },
  { top: "60%", left: "90%", size: 1.5, delay: 0.3,  color: "#93c5fd" },
  { top: "75%", left: "35%", size: 2,   delay: 1.8,  color: "#7dd3fc" },
  { top: "15%", left: "55%", size: 1.5, delay: 0.9,  color: "#93c5fd" },
  { top: "88%", left: "68%", size: 2.5, delay: 2.1,  color: "#6ee7b7" },
  { top: "33%", left: "42%", size: 1,   delay: 0.4,  color: "#93c5fd" },
  { top: "50%", left: "20%", size: 3,   delay: 1.5,  color: "#7dd3fc" },
  { top: "70%", left: "82%", size: 2,   delay: 0.7,  color: "#93c5fd" },
  { top: "5%",  left: "88%", size: 1.5, delay: 2.4,  color: "#6ee7b7" },
  { top: "92%", left: "15%", size: 2,   delay: 1.1,  color: "#7dd3fc" },
];

export default function FoundreeHero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  useEffect(() => {
    const interval = setInterval(
      () => setWordIndex((i) => (i + 1) % words.length),
      2200
    );
    return () => clearInterval(interval);
  }, []);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: (e.clientX - r.left) / r.width,
      y: (e.clientY - r.top) / r.height,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] py-24 md:py-0 flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #040912 0%, #07111e 50%, #0b1828 100%)",
      }}
      aria-label="Philosophy section"
      onMouseMove={onMouseMove}
    >
      {/* Mouse-follow glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        animate={{
          background: `radial-gradient(ellipse 65% 55% at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(46,149,255,0.14) 0%, transparent 65%)`,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Static bottom glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 35% at 50% 70%, rgba(46,149,255,0.07) 0%, transparent 60%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
              background: p.color,
            }}
            animate={{ y: [0, -12, 0], opacity: [0.2, 0.45, 0.2] }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-[88%] text-center flex flex-col items-center gap-8">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-blue-300 text-xs font-bold tracking-widest uppercase cursor-default"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-blue-400"
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Our Philosophy
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Education should be
          <br />
          an act of{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              className="inline-block gradient-text-animated"
              style={{
                textShadow: "0 0 40px rgba(46,149,255,0.4)",
                minWidth: "220px",
                "--mobile-gradient-fallback": "#60b8ff",
              } as React.CSSProperties}
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {words[wordIndex]}.
            </motion.span>
          </AnimatePresence>
        </motion.h2>

        {/* Body */}
        <motion.p
          className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          The chaos of unstructured materials, dense textbooks, and scattered
          notes is replaced by singular clarity. A seamless flow of knowledge,
          curated for the modern KTU student.
        </motion.p>

        {/* Divider */}
        <motion.div
          className="flex items-center gap-4 w-full max-w-xs"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex-1 h-px bg-white/10" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400/50" />
          <div className="flex-1 h-px bg-white/10" />
        </motion.div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {statItems.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center cursor-default group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.08 }}
            >
              <div
                className="text-3xl md:text-4xl font-black text-white group-hover:text-blue-300 transition-colors duration-300"
                style={{ textShadow: "0 0 24px rgba(255,255,255,0.08)" }}
              >
                {s.value}
              </div>
              <div className="text-xs font-semibold text-white/60 uppercase tracking-widest mt-1 group-hover:text-white/80 transition-colors duration-300">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/dashboard"
          className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/8 hover:bg-white/14 border border-white/12 hover:border-white/22 text-white font-bold text-sm backdrop-blur-sm"
        >
          Start Studying Free
          <motion.span
            className="inline-flex"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </Link>
      </div>

      {/* Bottom brand */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20">
        <span className="font-logo text-sm tracking-wide">
          <span className="font-extrabold text-white">KTU</span>{" "}
          <span className="font-medium text-white/60">node</span>
        </span>
        <div className="w-8 h-[2px] bg-blue-400/22 rounded-full" />
      </div>
    </section>
  );
}
