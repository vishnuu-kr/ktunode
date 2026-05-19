"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { Features } from "@/components/ui/features-8";
import KtuCompareSection from "@/components/features/ktu-compare-section";
import FoundreeHero from "@/components/features/FoundreeHero";
import HowItWorksSection from "@/components/features/HowItWorksSection";
import TestimonialsSection from "@/components/features/TestimonialsSection";
import FaqSection from "@/components/features/FaqSection";
import CtaBanner from "@/components/features/CtaBanner";
import { MagneticButton } from "@/components/ui/MagneticButton";
import useSessionPersistence from "@/hooks/useSessionPersistence";
import { ContinueSessionButton } from "@/components/features/ContinueSessionButton";
import { SEMESTERS } from "@/lib/constants";
import {
  Sparkles, BookOpen, Calendar, ArrowRight, ShieldCheck,
  FileText, ChevronDown,
} from "lucide-react";

const branches = [
  { id: "cs", label: "Computer Science" },
  { id: "ec", label: "Electronics & Comm." },
  { id: "me", label: "Mechanical" },
  { id: "ce", label: "Civil" },
  { id: "ee", label: "Electrical & Electronics" },
];

const semesters = SEMESTERS;

// Floating card data
const floatingCards = [
  {
    icon: BookOpen,
    title: "Syllabus",
    sub: "2024 Scheme",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    border: "border-blue-100",
    rotate: -4,
    x: -1,
    y: 0,
    side: "left" as const,
    top: "28%",
  },
  {
    icon: FileText,
    title: "PYQs",
    sub: "Chapter-wise",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    border: "border-violet-100",
    rotate: 3,
    x: 1,
    y: 0,
    side: "right" as const,
    top: "32%",
  },
  {
    icon: ShieldCheck,
    title: "98% Coverage",
    sub: "All modules",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    border: "border-emerald-100",
    rotate: 2,
    x: 1,
    y: 0,
    side: "right" as const,
    top: "52%",
  },
];

function PremiumSelect({
  value,
  onChange,
  options,
  placeholder,
  icon: Icon,
  hasError
}: {
  value: string | number;
  onChange: (val: any) => void;
  options: { label: string; value: string | number }[];
  placeholder: string;
  icon: any;
  hasError?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
        setFocusedIndex(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open) {
      setFocusedIndex(options.findIndex((o) => o.value === value));
    }
  }, [open, options, value]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (focusedIndex >= 0) {
          onChange(options[focusedIndex].value);
          setOpen(false);
          triggerRef.current?.focus();
        }
        break;
      case "Escape":
        e.preventDefault();
        setOpen(false);
        setFocusedIndex(-1);
        triggerRef.current?.focus();
        break;
    }
  };

  const selectedOption = options.find((o) => o.value === value);

  return (
    <div className="relative w-full" ref={ref}>
      <motion.button
        ref={triggerRef as any}
        type="button"
        onClick={() => setOpen(!open)}
        onKeyDown={handleKeyDown}
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={`listbox-${placeholder.replace(/\s/g, "-").toLowerCase()}`}
        className={`w-full flex items-center justify-between bg-white/70 hover:bg-white/95 border ${hasError ? 'border-red-400 text-red-600 bg-red-50/30 shadow-[0_0_0_2px_rgba(248,113,113,0.1)]' : 'border-slate-200/80 hover:border-blue-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 text-slate-700'} rounded-2xl px-4 py-4 pl-11 text-sm font-bold cursor-pointer focus:outline-none transition-colors duration-200 shadow-sm`}
        animate={hasError ? { x: [-6, 6, -5, 5, -3, 3, 0] } : { x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className={selectedOption ? "text-slate-800" : hasError ? "text-red-500 font-semibold" : "text-slate-400 font-semibold"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            open ? "rotate-180 text-blue-500" : hasError ? "text-red-400" : "text-slate-400"
          }`}
        />
      </motion.button>
      <Icon className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none transition-colors ${hasError ? 'text-red-400' : 'text-blue-500'}`} />
      
      <AnimatePresence>
        {open && (
          <motion.div
            id={`listbox-${placeholder.replace(/\s/g, "-").toLowerCase()}`}
            role="listbox"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 w-full mt-2 bg-white/95 backdrop-blur-2xl border border-blue-100 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] py-2 overflow-hidden"
          >
            <div className="max-h-[240px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200">
              {options.map((opt, index) => (
                <button
                  key={opt.value}
                  type="button"
                  role="option"
                  aria-selected={value === opt.value}
                  className={`w-full text-left px-4 py-2.5 text-sm font-semibold transition-colors duration-150 ${
                    value === opt.value
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  } ${focusedIndex === index ? "bg-blue-50 outline outline-2 outline-blue-500 outline-offset-[-2px]" : ""}`}
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                    setFocusedIndex(-1);
                    triggerRef.current?.focus();
                  }}
                  onMouseEnter={() => setFocusedIndex(index)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const router = useRouter();
  const { savedSession, saveSession, clearSession } = useSessionPersistence();
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSemester, setSelectedSemester] = useState<number | "">("");
  const [mounted, setMounted] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });
  const heroRef = useRef<HTMLDivElement>(null);

  const [errorState, setErrorState] = useState(false);

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    const onMouse = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouse, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  const handleLaunch = () => {
    if (!selectedBranch || !selectedSemester) {
      setErrorState(true);
      setTimeout(() => setErrorState(false), 500);
      return;
    }

    const p = new URLSearchParams();
    if (selectedBranch) p.set("branch", selectedBranch);
    if (selectedSemester) p.set("sem", String(selectedSemester));

    // Save session before navigating (only when both are selected)
    if (selectedBranch && selectedSemester) {
      saveSession(selectedBranch, selectedSemester as number);
    }

    router.push(`/dashboard${p.toString() ? `?${p.toString()}` : ""}`);
  };

  const handleContinue = () => {
    if (!savedSession) return;
    router.push(`/dashboard?branch=${savedSession.branch}&sem=${savedSession.semester}`);
  };

  const handleDismiss = () => {
    clearSession();
  };

  return (
    <main
      id="main-content"
      className="relative w-full min-h-screen flex flex-col font-sans overflow-x-hidden"
      style={{ background: "#cfe3f8" }}
      tabIndex={-1}
    >
      {/* ── Scroll progress ── */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollPct}%` }}
        aria-hidden="true"
      />

      {/* ── Cursor glow (desktop) ── */}
      <div
        className="cursor-glow hidden lg:block"
        style={{ left: mousePos.x, top: mousePos.y }}
        aria-hidden="true"
      />

      {/* Wrapper for Hero + Navbar to perfectly contain the background */}
      <div className="relative w-full">
        {/* ── Global Hero Background Image ── */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/hero-bg.webp')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
          aria-hidden="true"
        />

        {/* ── Fade Overlay for Smooth Section Blending ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 z-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, #f3f8ff 100%)",
          }}
          aria-hidden="true"
        />

        {/* ── Navbar ── */}
        <div className="pt-4 z-50 relative w-full">
          <Navbar />
        </div>

        {/* ══════════════════════════════════════
            HERO
        ══════════════════════════════════════ */}
        <section
        ref={heroRef}
        className="relative flex-1 flex flex-col items-center pt-28 md:pt-32 pb-16 text-center px-4 overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        {/* ── Dot grid overlay ── */}
        <div className="absolute inset-0 z-0 dot-grid opacity-[0.10] pointer-events-none" />

        {/* ── Floating info cards (Framer Motion) ── */}
        {floatingCards.map((card, i) => {
          const Icon = card.icon;
          const isLeft = card.side === "left";
          return (
            <motion.div
              key={i}
              className={`hidden lg:flex absolute ${isLeft ? "left-8" : "right-8"} bg-white/95 backdrop-blur-xl p-4 rounded-2xl border ${card.border} items-center gap-3 z-20 cursor-default`}
              style={{ top: card.top }}
              initial={{ opacity: 0, x: isLeft ? -40 : 40, rotate: card.rotate }}
              animate={{
                opacity: mounted ? 1 : 0,
                x: 0,
                rotate: card.rotate,
              }}
              transition={{
                delay: 0.4 + i * 0.15,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1] as any,
              }}
              whileHover={{
                y: -6,
                scale: 1.04,
                boxShadow: "0 20px 48px rgba(37,99,235,0.18)",
                transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as any },
              }}
            >
              {/* Subtle float loop */}
              <motion.div
                className="flex items-center gap-3"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8,
                }}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center ${card.iconBg} ${card.iconColor} rounded-xl`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-slate-800">{card.title}</div>
                  <div className="text-xs font-medium text-slate-400">{card.sub}</div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* ── Badge ── */}
        <motion.div
          className="relative z-10 flex items-center gap-2 px-5 py-2 mb-6 bg-white/88 backdrop-blur-md border border-blue-200/70 rounded-full shadow-lg cursor-default select-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          <Sparkles className="w-3.5 h-3.5 text-blue-500" />
          <span className="text-sm font-bold text-blue-600 tracking-wide">
            Built for KTU 2024 Scheme
          </span>
        </motion.div>

        {/* ── Headline ── */}
        <motion.h1
          className="relative z-10 text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-black tracking-tight text-slate-900 leading-[1.03] mb-5 max-w-4xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 28 }}
          transition={{ delay: 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Master the{" "}
          <span className="relative inline-block">
            <span className="gradient-text-animated">KTU Semester.</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 300 8"
              fill="none"
              aria-hidden="true"
            >
              <motion.path
                d="M2 6 Q75 2 150 6 Q225 10 298 4"
                stroke="#2E95FF"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: mounted ? 1 : 0, opacity: mounted ? 0.55 : 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              />
            </svg>
          </span>
        </motion.h1>

        {/* ── Subtitle ── */}
        <motion.p
          className="relative z-10 text-base md:text-xl text-slate-600 mb-9 max-w-xl font-medium leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ delay: 0.16, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Notes, PYQs, and syllabus tracking — all free,
          <br className="hidden sm:block" />
          designed for the{" "}
          <span className="text-blue-500 font-bold">2024 KTU scheme.</span>
        </motion.p>

        {/* ── Selector card ── */}
        <motion.div
          className="relative z-20 bg-white/96 backdrop-blur-xl border border-blue-100/80 rounded-3xl p-3 flex flex-col md:flex-row items-center gap-3 max-w-3xl w-full"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 24, scale: mounted ? 1 : 0.97 }}
          transition={{ delay: 0.24, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            boxShadow:
              "0 16px 56px rgba(37,99,235,0.14), 0 4px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}
        >
          {/* Branch */}
          <div className="flex-1 w-full z-30">
            <PremiumSelect
              value={selectedBranch}
              onChange={setSelectedBranch}
              options={branches.map(b => ({ label: b.label, value: b.id }))}
              placeholder="Select Branch"
              icon={BookOpen}
              hasError={errorState && !selectedBranch}
            />
          </div>

          {/* Semester */}
          <div className="flex-1 w-full z-20">
            <PremiumSelect
              value={selectedSemester}
              onChange={setSelectedSemester}
              options={semesters.map(s => ({ label: `Semester ${s}`, value: s }))}
              placeholder="Select Semester"
              icon={Calendar}
              hasError={errorState && !selectedSemester}
            />
          </div>

          <MagneticButton
            onClick={handleLaunch}
            className="w-full md:w-auto whitespace-nowrap !rounded-2xl !px-6 !py-4 !text-sm !font-black"
          >
            Open Dashboard
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </motion.div>

        {/* ── Continue Session Button (below selector card) ── */}
        <AnimatePresence>
          {savedSession && (
            <ContinueSessionButton
              session={savedSession}
              onContinue={handleContinue}
              onDismiss={handleDismiss}
            />
          )}
        </AnimatePresence>

        {/* ── Quick trust line ── */}
        <motion.div
          className="relative z-10 flex flex-wrap items-center justify-center gap-6 mt-7"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 12 }}
          transition={{ delay: 0.36, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {[
            { icon: ShieldCheck, text: "98% exam coverage" },
            { icon: BookOpen, text: "Free, always" },
            { icon: FileText, text: "No account needed" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-1.5 text-slate-500 text-sm font-medium">
              <Icon className="w-3.5 h-3.5 text-blue-500" />
              {text}
            </div>
          ))}
        </motion.div>

        {/* ── Scroll hint ── */}
        <motion.div
          className="relative z-10 flex flex-col items-center gap-2 mt-8 mb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 0.5 : 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase">
            Scroll
          </span>
          <div className="w-5 h-8 border-2 border-slate-400/70 rounded-full flex items-start justify-center pt-1.5">
            <motion.div
              className="w-1 h-2 bg-slate-500 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

      </section>
      </div>

      {/* ══════════════════════════════════════
          SECTIONS
      ══════════════════════════════════════ */}
      <KtuCompareSection />
      <HowItWorksSection />
      <FoundreeHero />

      <section className="relative z-10 w-full bg-white border-y border-blue-50">
        <Features />
      </section>

      <TestimonialsSection />
      <FaqSection />
      <CtaBanner />
      <CinematicFooter />
    </main>
  );
}
