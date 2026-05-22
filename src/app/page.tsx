"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import { MagneticButton } from "@/components/ui/MagneticButton";
import useSessionPersistence from "@/hooks/useSessionPersistence";
import { ContinueSessionButton } from "@/components/features/ContinueSessionButton";
import { SEMESTERS } from "@/lib/constants";
import { UpgradeBanner } from "@/components/ui/upgrade-banner";

// Dynamically import below-the-fold components to optimize LCP and bundle payloads
const KtuCompareSection = dynamic(() => import("@/components/features/ktu-compare-section"), { ssr: false });
const HowItWorksSection = dynamic(() => import("@/components/features/HowItWorksSection"), { ssr: false });
const FoundreeHero = dynamic(() => import("@/components/features/FoundreeHero"), { ssr: false });
const Features = dynamic(() => import("@/components/ui/features-8").then(mod => mod.Features), { ssr: false });
const TestimonialsSection = dynamic(() => import("@/components/features/TestimonialsSection"), { ssr: false });
const FaqSection = dynamic(() => import("@/components/features/FaqSection"), { ssr: false });
const CtaBanner = dynamic(() => import("@/components/features/CtaBanner"), { ssr: false });
const CinematicFooter = dynamic(() => import("@/components/ui/motion-footer").then(mod => mod.CinematicFooter), { ssr: false });
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



// Global landing haptic driver with pointer pressure & Web Audio API
export function triggerLandingHaptic(
  type: "light" | "medium" | "heavy" | "success" | "warning",
  pressure?: number | React.PointerEvent | React.MouseEvent | React.TouchEvent | PointerEvent | MouseEvent
) {
  if (typeof window === "undefined") return;

  // Extract pressure value (between 0.0 and 1.0)
  let pressureVal = 0.5; // default center weight
  if (typeof pressure === "number") {
    pressureVal = pressure;
  } else if (pressure && "nativeEvent" in pressure) {
    const nativeEvent = pressure.nativeEvent;
    if (nativeEvent instanceof PointerEvent) {
      pressureVal = nativeEvent.pressure > 0 ? nativeEvent.pressure : 0.5;
    }
  } else if (pressure && pressure instanceof PointerEvent) {
    pressureVal = pressure.pressure > 0 ? pressure.pressure : 0.5;
  }

  // Ensure pressure ranges between 0.15 and 1.0
  pressureVal = Math.max(0.15, Math.min(1.0, pressureVal));

  // 1. Device Vibration
  if (navigator.vibrate) {
    try {
      let duration = 0;
      switch (type) {
        case "light":
          duration = 8;
          break;
        case "medium":
          duration = 15;
          break;
        case "heavy":
          duration = 30;
          break;
        case "success":
          navigator.vibrate([
            Math.round(12 * (0.5 + pressureVal)), 
            Math.round(45 * (0.5 + pressureVal)), 
            Math.round(12 * (0.5 + pressureVal))
          ]);
          break;
        case "warning":
          navigator.vibrate([
            Math.round(45 * (0.5 + pressureVal)), 
            Math.round(75 * (0.5 + pressureVal))
          ]);
          break;
      }
      if (duration > 0) {
        const scaledDuration = Math.round(duration * (0.5 + pressureVal));
        navigator.vibrate(scaledDuration);
      }
    } catch (e) {}
  }

  // 2. Synthesized Web Audio Tones
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const audioCtx = new AudioContextClass();

    const sweepTone = (startFreq: number, endFreq: number, baseDuration: number, baseGain: number) => {
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      osc.type = "triangle";
      
      const scaledStartFreq = startFreq * (0.7 + 0.6 * pressureVal);
      const scaledEndFreq = endFreq * (0.7 + 0.6 * pressureVal);
      const scaledGainVal = baseGain * (0.5 + pressureVal);
      const scaledDuration = baseDuration * (0.8 + 0.4 * pressureVal);
      
      osc.frequency.setValueAtTime(scaledStartFreq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(scaledEndFreq, audioCtx.currentTime + scaledDuration);
      
      gainNode.gain.setValueAtTime(scaledGainVal, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + scaledDuration);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + scaledDuration);
    };

    const playTone = (freq: number, start: number, baseDuration: number, oscType: "sine" | "triangle" = "sine", baseGain = 0.15) => {
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      osc.type = oscType;
      
      const scaledFreq = freq * (0.8 + 0.4 * pressureVal);
      const scaledGainVal = baseGain * (0.5 + pressureVal);
      const scaledDuration = baseDuration * (0.8 + 0.4 * pressureVal);
      
      osc.frequency.setValueAtTime(scaledFreq, audioCtx.currentTime + start);
      gainNode.gain.setValueAtTime(scaledGainVal, audioCtx.currentTime + start);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + start + scaledDuration);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      osc.start(audioCtx.currentTime + start);
      osc.stop(audioCtx.currentTime + start + scaledDuration);
    };

    switch (type) {
      case "light":
        sweepTone(850, 180, 0.04, 0.08);
        break;
      case "medium":
        sweepTone(700, 120, 0.06, 0.12);
        break;
      case "heavy":
        sweepTone(550, 80, 0.09, 0.18);
        break;
      case "success":
        playTone(587.33, 0, 0.12, "triangle", 0.08); 
        playTone(880.00, 0.06, 0.32, "sine", 0.1);
        break;
      case "warning":
        sweepTone(220, 130, 0.12, 0.15);
        setTimeout(() => {
          try {
            sweepTone(220, 130, 0.12, 0.15);
          } catch {}
        }, 140);
        break;
    }
  } catch (e) {}
}

function PremiumSelect({
  value,
  onChange,
  options,
  placeholder,
  icon: Icon,
  hasError
}: {
  value: string | number;
  onChange: (val: string | number) => void;
  options: { label: string; value: string | number }[];
  placeholder: string;
  icon: React.ComponentType<{ className?: string }>;
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
      queueMicrotask(() => {
        setFocusedIndex(options.findIndex((o) => o.value === value));
      });
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
        ref={triggerRef}
        type="button"
        onClick={(e) => {
          setOpen(!open);
          triggerLandingHaptic("light", e);
        }}
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
            className="absolute z-50 w-full mt-2 top-full left-0 bg-white/95 backdrop-blur-2xl border border-blue-100 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] py-2 overflow-hidden"
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
                  onClick={(e) => {
                    onChange(opt.value);
                    setOpen(false);
                    setFocusedIndex(-1);
                    triggerRef.current?.focus();
                    triggerLandingHaptic("medium", e);
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


  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });
  const heroRef = useRef<HTMLDivElement>(null);

  const [errorState, setErrorState] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setMounted(true));


    const onMouse = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });


    window.addEventListener("mousemove", onMouse, { passive: true });
    return () => {

      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  const handleLaunch = (event?: React.MouseEvent | React.PointerEvent) => {
    if (!selectedBranch || !selectedSemester) {
      setErrorState(true);
      setTimeout(() => setErrorState(false), 500);
      triggerLandingHaptic("warning", event);
      return;
    }

    triggerLandingHaptic("success", event);

    const p = new URLSearchParams();
    if (selectedBranch) p.set("branch", selectedBranch);
    if (selectedSemester) p.set("sem", String(selectedSemester));

    // Save session before navigating (only when both are selected)
    if (selectedBranch && selectedSemester) {
      saveSession(selectedBranch, selectedSemester as number);
    }

    router.push(`/dashboard${p.toString() ? `?${p.toString()}` : ""}`);
  };

  const handleContinue = (event?: React.MouseEvent | React.PointerEvent) => {
    if (!savedSession) return;
    triggerLandingHaptic("success", event);
    router.push(`/dashboard?branch=${savedSession.branch}&sem=${savedSession.semester}`);
  };

  const handleDismiss = (event?: React.MouseEvent | React.PointerEvent) => {
    triggerLandingHaptic("light", event);
    clearSession();
  };

  return (
    <main
      id="main-content"
      className="relative w-full min-h-screen flex flex-col font-sans overflow-x-hidden"
      style={{ background: "var(--color-bg)" }}
      tabIndex={-1}
    >


      {/* ── Cursor glow (desktop) ── */}
      <div
        className="cursor-glow hidden lg:block"
        style={{ left: mousePos.x, top: mousePos.y }}
        aria-hidden="true"
      />

      {/* Drifting mesh glows matching dashboard for high-fidelity unity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[-80px] right-[-80px] w-[700px] h-[700px] rounded-full bg-blue-400/20 blur-[160px] bg-orb-1" />
        <div className="absolute bottom-[20%] left-[-60px] w-[600px] h-[600px] rounded-full bg-indigo-300/15 blur-[140px] bg-orb-2" />
        <div className="absolute top-[45%] left-[65%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-100/40 blur-[120px] bg-orb-3" />
      </div>

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



        <UpgradeBanner
          variant="pill"
          buttonText="Built for KTU"
          description="2024 Scheme"
          className="mb-6 z-10 relative select-none animate-fade-in"
        />

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
          className="relative z-30 bg-white/96 backdrop-blur-xl border border-blue-100/80 rounded-3xl p-3 flex flex-col md:flex-row items-center gap-3 max-w-3xl w-full"
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
              onChange={(val) => setSelectedBranch(String(val))}
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
              onChange={(val) => setSelectedSemester(val === "" ? "" : Number(val))}
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
