"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { MagneticButton } from "@/components/ui/MagneticButton";
import useSessionPersistence from "@/hooks/useSessionPersistence";
import { triggerHaptic } from "@/lib/haptic";
import { ContinueSessionButton } from "@/components/features/ContinueSessionButton";
import { SEMESTERS } from "@/lib/constants";
import { UpgradeBanner } from "@/components/ui/upgrade-banner";
import { VALID_BRANCHES } from "@/types/session";
import { useTheme } from "next-themes";

function LazySection({ children, height = "400px" }: { children: React.ReactNode; height?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "150px" });

  return (
    <div ref={ref} style={{ minHeight: isInView ? undefined : height }}>
      {isInView ? children : null}
    </div>
  );
}

// Dynamically import below-the-fold components to optimize LCP and bundle payloads
// SSR enabled for content-heavy sections (SEO crawlability)
const KtuCompareSection = dynamic(() => import("@/components/features/ktu-compare-section"));
const HowItWorksSection = dynamic(() => import("@/components/features/HowItWorksSection"));
const FoundreeHero = dynamic(() => import("@/components/features/FoundreeHero"), { ssr: false });
const Features = dynamic(() => import("@/components/ui/features-8").then(mod => mod.Features));
const TestimonialsSection = dynamic(() => import("@/components/features/TestimonialsSection"));
const FaqSection = dynamic(() => import("@/components/features/FaqSection"));
const CtaBanner = dynamic(() => import("@/components/features/CtaBanner"));
const CinematicFooter = dynamic(() => import("@/components/ui/motion-footer").then(mod => mod.CinematicFooter), { ssr: false });
const OnboardingModal = dynamic(() => import("@/components/features/OnboardingModal"), { ssr: false });
import {
  BookOpen, Calendar, ArrowRight, ShieldCheck,
  FileText, ChevronDown, Sparkles, X
} from "lucide-react";

const branchLabels: Record<string, string> = {
  "cs": "Computer Science and Engineering",
  "ce": "Civil Engineering",
  "ec": "Electronics and Communication Engineering",
  "ee": "Electrical and Electronics Engineering",
  "me": "Mechanical Engineering",
  "artificial-intelligence": "Artificial Intelligence",
  "artificial-intelligence-and-data-science": "Artificial Intelligence and Data Science",
  "artificial-intelligence-and-machine-learning": "Artificial Intelligence and Machine Learning",
  "cs-and-business-systems": "CS and Business Systems",
  "cs-and-design": "CS and Design",
  "cse-artificial-intelligence-and-data-science": "CSE (Artificial Intelligence and Data Science)",
  "cse-block-chain": "CSE (Block Chain)",
  "cse-cyber-security": "CSE (Cyber Security)",
  "cse-internet-of-things-cse-iot": "CSE (Internet of Things), CSE(IoT)",
  "cse-iot-and-cs-including-block-chain-technology": "CSE (IoT and CS including Block Chain Technology)",
  "computer-science-and-business-systems": "Computer Science and Business Systems",
  "computer-science-and-design": "Computer Science and Design",
  "computer-science-and-engineering": "Computer Science and Engineering",
  "computer-science-and-engineering-artificial-intelligence-and-data-science": "Computer Science and Engineering (Artificial Intelligence and Data Science)",
  "computer-science-and-engineering-artificial-intelligence-and-machine-learning": "Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
  "computer-science-and-engineering-artificial-intelligence": "Computer Science and Engineering (Artificial Intelligence)",
  "computer-science-and-engineering-cyber-security": "Computer Science and Engineering (Cyber Security)",
  "computer-science-and-engineering-data-science": "Computer Science and Engineering (Data Science)",
  "computer-science-and-engineering-iot": "Computer Science and Engineering (IOT)",
  "computer-science-and-engineering-and-business-systems": "Computer Science and Engineering and Business Systems",
  "cyber-security": "Cyber Security",
  "information-technology": "Information Technology",
  "civil-engineering": "Civil Engineering",
  "civil-and-environmental-engineering": "Civil and Environmental Engineering",
  "applied-electronics-instrumentation-engineering": "Applied Electronics & Instrumentation Engineering",
  "biomedical-robotics-engineering": "Biomedical & Robotics Engineering",
  "biomedical-engineering": "Biomedical Engineering",
  "cyber-physical-system": "Cyber Physical System",
  "electronics-biomedical": "Electronics & Biomedical",
  "electronics-communication-engineering": "Electronics & Communication Engineering",
  "electronics-instrumentation-engineering": "Electronics & Instrumentation Engineering",
  "electronics-engineering-vlsi-design-and-technology": "Electronics Engineering (VLSI Design and Technology)",
  "electronics-and-biomedical-engineering": "Electronics and Biomedical Engineering",
  "electronics-and-communication-advanced-communication-technology": "Electronics and Communication (Advanced Communication Technology)",
  "electronics-and-communication-engineering": "Electronics and Communication Engineering",
  "electronics-and-computer-engineering": "Electronics and Computer Engineering",
  "instrumentation-and-control-engineering": "Instrumentation and Control Engineering",
  "robotics-and-artificial-intelligence": "Robotics and Artificial Intelligence",
  "robotics-and-automation": "Robotics and Automation",
  "electrical-and-computer-engineering": "Electrical and Computer Engineering",
  "electrical-and-electronics-engineering": "Electrical and Electronics Engineering",
  "aeronautical-engineering": "Aeronautical Engineering",
  "automobile-engineering": "Automobile Engineering",
  "chemical-engineering": "Chemical Engineering",
  "food-technology": "Food Technology",
  "industrial-engineering": "Industrial Engineering",
  "mechanical-engineering": "Mechanical Engineering",
  "mechanical-engineering-auto": "Mechanical Engineering (Auto)",
  "mechanical-engineering-automobile": "Mechanical Engineering (Automobile)",
  "mechatronics-engineering": "Mechatronics Engineering",
  "metallurgical-materials-engineering": "Metallurgical & Materials Engineering",
  "naval-architecture-ship-building-engineering": "Naval Architecture & Ship Building Engineering",
  "polymer-engineering": "Polymer Engineering",
  "production-engineering": "Production Engineering",
  "safety-and-fire-engineering": "Safety and Fire Engineering",
  "agriculture-engineering": "Agriculture Engineering",
  "biotechnology": "Biotechnology",
  "biotechnology-and-biochemical-engineering": "Biotechnology and Biochemical Engineering"
};

const branches = VALID_BRANCHES.map((id) => ({
  id,
  label: branchLabels[id] ?? id.toUpperCase(),
}));

const semesters = SEMESTERS;


function PremiumSelect({
  value,
  onChange,
  options,
  placeholder,
  icon: Icon,
  hasError,
  onOpenChange
}: {
  value: string | number;
  onChange: (val: string | number) => void;
  options: { label: string; value: string | number; disabled?: boolean }[];
  placeholder: string;
  icon: React.ComponentType<{ className?: string }>;
  hasError?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listContainerRef = useRef<HTMLDivElement>(null);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleOpenChange(false);
        setFocusedIndex(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleOpenChange]);

  useEffect(() => {
    if (open) {
      queueMicrotask(() => {
        setFocusedIndex(options.findIndex((o) => o.value === value));
      });
    }
  }, [open, options, value]);

  // Accessibility: scroll active keyboard-focused item into view automatically
  useEffect(() => {
    if (open && focusedIndex >= 0 && listContainerRef.current) {
      const container = listContainerRef.current;
      const activeElement = container.children[focusedIndex] as HTMLElement;
      if (activeElement) {
        const containerTop = container.scrollTop;
        const containerBottom = containerTop + container.clientHeight;
        const elemTop = activeElement.offsetTop;
        const elemBottom = elemTop + activeElement.offsetHeight;

        if (elemTop < containerTop) {
          container.scrollTop = elemTop;
        } else if (elemBottom > containerBottom) {
          container.scrollTop = elemBottom - container.clientHeight;
        }
      }
    }
  }, [focusedIndex, open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleOpenChange(true);
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
          const opt = options[focusedIndex];
          if (opt && !opt.disabled) {
            onChange(opt.value);
            handleOpenChange(false);
            setFocusedIndex(-1);
            triggerRef.current?.focus();
          }
        }
        break;
      case "Escape":
        e.preventDefault();
        handleOpenChange(false);
        setFocusedIndex(-1);
        triggerRef.current?.focus();
        break;
      case "Tab":
        handleOpenChange(false);
        setFocusedIndex(-1);
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
          handleOpenChange(!open);
          triggerHaptic("light", e);
        }}
        onKeyDown={handleKeyDown}
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={`listbox-${placeholder.replace(/\s/g, "-").toLowerCase()}`}
        aria-label={selectedOption ? `${placeholder}: ${selectedOption.label}` : placeholder}
        className={`w-full flex items-center justify-between bg-white/70 dark:bg-slate-900/70 hover:bg-white/95 dark:hover:bg-slate-900/95 border ${hasError ? 'border-red-400 text-red-600 bg-red-50/30 shadow-[0_0_0_2px_rgba(248,113,113,0.1)]' : 'border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-800 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 text-slate-700 dark:text-slate-200'} rounded-2xl px-4 py-3.5 pl-11 text-sm font-bold cursor-pointer focus:outline-none transition-colors duration-200 shadow-sm`}
        animate={hasError ? { x: [-6, 6, -5, 5, -3, 3, 0] } : { x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className={selectedOption ? "text-slate-800 dark:text-slate-100" : hasError ? "text-red-500 font-semibold" : "text-slate-400 dark:text-slate-500 font-semibold"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            open ? "rotate-180 text-blue-500" : hasError ? "text-red-400" : "text-slate-400 dark:text-slate-500"
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
            className="absolute z-50 w-full mt-2 top-full left-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-blue-100 dark:border-slate-800 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.4)] py-2 overflow-hidden"
          >
            <div 
              ref={listContainerRef}
              className="max-h-[240px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800"
            >
              {options.map((opt, index) => {
                const isDisabled = opt.disabled;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    disabled={isDisabled}
                    role="option"
                    aria-selected={value === opt.value}
                    className={`w-full text-left px-4 py-3 text-sm font-semibold transition-colors duration-150 ${
                      isDisabled
                        ? "opacity-35 cursor-not-allowed text-slate-400 dark:text-slate-600"
                        : value === opt.value
                          ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold"
                          : "text-slate-600 dark:text-slate-355 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-100"
                    } ${focusedIndex === index && !isDisabled ? "bg-slate-50 dark:bg-slate-800/60" : ""}`}
                    onClick={(e) => {
                      if (isDisabled) return;
                      onChange(opt.value);
                      handleOpenChange(false);
                      setFocusedIndex(-1);
                      triggerRef.current?.focus();
                      triggerHaptic("medium", e);
                    }}
                    onMouseEnter={() => {
                      if (!isDisabled) setFocusedIndex(index);
                    }}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const { savedSession, saveSession, clearSession } = useSessionPersistence();
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSemester, setSelectedSemester] = useState<number | "">("");
  const [mounted, setMounted] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [siteConfig, setSiteConfig] = useState<any>(null);


  const heroRef = useRef<HTMLDivElement>(null);
  const [showOnboardingModal, setShowOnboardingModal] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
    
    // Fetch site configuration dynamically
    fetch("/api/config")
      .then(res => res.json())
      .then(data => setSiteConfig(data))
      .catch(err => console.error("Failed to load site config:", err));
  }, []);

  // Redirect returning users immediately to the dashboard if a session is saved and they didn't bypass it via landing=true
  useEffect(() => {
    if (mounted && savedSession) {
      const qParams = new URLSearchParams(window.location.search);
      if (qParams.get("landing") !== "true") {
        setIsRedirecting(true);
        router.replace(`/${savedSession.branch}/sem-${savedSession.semester}`);
      }
    }
  }, [mounted, savedSession, router]);

  // Prefetch the saved session route on mount
  useEffect(() => {
    if (mounted && savedSession) {
      router.prefetch(`/${savedSession.branch}/sem-${savedSession.semester}`);
    }
  }, [mounted, savedSession, router]);

  const handleLaunch = (event?: React.MouseEvent | React.PointerEvent) => {
    const savedBranch = localStorage.getItem("ktunode_branch");
    const savedSemester = localStorage.getItem("ktunode_semester");

    triggerHaptic("light", event);

    if (savedBranch && savedSemester) {
      triggerHaptic("success", event);
      setIsLaunching(true);
      router.push(`/${savedBranch}/sem-${savedSemester}`);
      return;
    }

    setShowOnboardingModal(true);
  };

  const handleContinue = (event?: React.MouseEvent | React.PointerEvent) => {
    if (!savedSession) return;
    triggerHaptic("success", event);
    setIsLaunching(true);
    router.push(`/${savedSession.branch}/sem-${savedSession.semester}`);
  };

  const handleDismiss = (event?: React.MouseEvent | React.PointerEvent) => {
    triggerHaptic("light", event);
    clearSession();
  };

  if (!mounted || isRedirecting) {
    return (
      <div className="fixed inset-0 bg-[#070709] flex flex-col items-center justify-center z-[100] gap-5 font-sans">
        <div className="relative w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 animate-pulse">
          <Image
            src="/logo.webp?v=1"
            alt="KTU node Logo"
            width={40}
            height={40}
            className="w-10 h-10 rounded-xl"
            priority
          />
        </div>
        <p className="text-[10px] text-slate-400 font-extrabold tracking-[0.2em] uppercase animate-pulse">
          Restoring study session...
        </p>
      </div>
    );
  }

  return (
    <main
      id="main-content"
      className="relative w-full min-h-screen flex flex-col font-sans overflow-x-hidden ios-safe-x"
      style={{ background: "var(--color-bg)" }}
      tabIndex={-1}
    >




      {/* Drifting mesh glows matching dashboard for high-fidelity unity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[-80px] right-[-80px] w-[700px] h-[700px] rounded-full bg-blue-400/20 blur-[160px] bg-orb-1" />
        <div className="absolute bottom-[20%] left-[-60px] w-[600px] h-[600px] rounded-full bg-indigo-300/15 blur-[140px] bg-orb-2" />
        <div className="absolute top-[45%] left-[65%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-100/40 blur-[120px] bg-orb-3" />
      </div>

      {/* Wrapper for Hero + Navbar to perfectly contain the background */}
      <div className="relative w-full">
        {/* ── Global Hero Background Image (Light Mode) ── */}
        <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-700 opacity-100 dark:opacity-0">
          <Image
            src="/hero-bg.webp?v=1"
            alt="Hero Background Light"
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </div>

        {/* ── Global Hero Background Image (Dark Mode) ── */}
        <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-700 opacity-0 dark:opacity-100">
          <Image
            src="/hero-bg-dark.webp?v=1"
            alt="Hero Background Dark"
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </div>

        {/* ── Fade Overlay for Smooth Section Blending ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 z-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, var(--color-bg) 100%)",
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
        className="relative flex-1 flex flex-col items-center pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-16 text-center px-4 overflow-hidden"
        style={{ minHeight: "100svh" }}
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
        <h1
          className="relative z-10 text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[82px] font-black tracking-tight text-slate-900 dark:text-slate-100 leading-[1.03] mb-4 sm:mb-5 max-w-4xl animate-fade-up"
          style={{ animationDelay: "80ms" }}
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
        </h1>

        {/* ── Subtitle ── */}
        <p
          className="relative z-10 text-sm sm:text-base md:text-xl text-slate-600 dark:text-slate-300 mb-8 sm:mb-12 max-w-xl font-medium leading-relaxed animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          Notes, PYQs, and syllabus tracking — all free,
          <br className="hidden sm:block" />
          designed for the{" "}
          <span className="text-blue-500 font-bold">{siteConfig?.activeScheme || "2024 KTU scheme"}</span>
        </p>

        {/* ── CTA Buttons ── */}
        <div 
          className="relative z-20 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto px-4 animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <MagneticButton
            onClick={handleLaunch}
            className="w-full sm:w-auto whitespace-nowrap !rounded-2xl !px-8 !py-4 !text-base !font-black shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-200"
          >
            Get Started — It's Free
            <ArrowRight className="w-5 h-5 ml-1.5" />
          </MagneticButton>
          
          <button
            onClick={() => {
              triggerHaptic("light");
              document.getElementById("how-it-works-heading")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto whitespace-nowrap px-8 py-4 text-base font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:white bg-slate-100/80 dark:bg-slate-800/85 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl transition-all duration-200 cursor-pointer"
          >
            See How It Works
          </button>
        </div>



        {/* ── Continue Session Button (below selector card) ── */}
        <AnimatePresence>
          {mounted && savedSession && !isLaunching && (
            <ContinueSessionButton
              session={savedSession}
              onContinue={handleContinue}
              onDismiss={handleDismiss}
            />
          )}
        </AnimatePresence>

        {/* ── Quick trust line ── */}
        <div
          className="relative z-10 flex flex-wrap items-center justify-center gap-6 mt-7 animate-fade-in"
          style={{ animationDelay: "360ms" }}
        >
          {[
            { icon: ShieldCheck, text: "98% exam coverage" },
            { icon: BookOpen, text: "Free, always" },
            { icon: FileText, text: "No account needed" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Icon className="w-3.5 h-3.5 text-blue-500" />
              {text}
            </div>
          ))}
        </div>

        {/* ── Scroll hint ── */}
        <motion.div
          className="relative z-10 flex flex-col items-center gap-2 mt-8 mb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 0.5 : 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          aria-hidden="true"
        >
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-[0.2em] uppercase">
            Scroll
          </span>
          <div className="w-5 h-8 border-2 border-slate-400/70 dark:border-slate-700/70 rounded-full flex items-start justify-center pt-1.5">
            <motion.div
              className="w-1 h-2 bg-slate-500 dark:bg-slate-400 rounded-full"
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
      {siteConfig?.landingPageSections?.compare !== false && (
        <LazySection height="600px">
          <KtuCompareSection />
        </LazySection>
      )}
      {siteConfig?.landingPageSections?.howItWorks !== false && (
        <LazySection height="650px">
          <HowItWorksSection />
        </LazySection>
      )}
      {siteConfig?.landingPageSections?.foundree !== false && (
        <div className="hidden md:block">
          <LazySection height="700px">
            <FoundreeHero />
          </LazySection>
        </div>
      )}
 
      {siteConfig?.landingPageSections?.features !== false && (
        <LazySection height="800px">
          <section className="relative z-10 w-full bg-white dark:bg-slate-900 border-y border-blue-50 dark:border-slate-800">
            <Features />
          </section>
        </LazySection>
      )}
 
      {siteConfig?.landingPageSections?.testimonials !== false && (
        <LazySection height="600px">
          <TestimonialsSection />
        </LazySection>
      )}
      {siteConfig?.landingPageSections?.faqs !== false && (
        <LazySection height="600px">
          <FaqSection />
        </LazySection>
      )}
      {siteConfig?.landingPageSections?.cta !== false && (
        <LazySection height="450px">
          <CtaBanner />
        </LazySection>
      )}
      <LazySection height="400px">
        <CinematicFooter />
      </LazySection>

      <AnimatePresence>
        {showOnboardingModal && (
          <OnboardingModal
            isOpen={showOnboardingModal}
            onClose={() => setShowOnboardingModal(false)}
            initialBranch={selectedBranch}
            initialSemester={selectedSemester !== "" ? selectedSemester : undefined}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
