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
import { UpgradeBanner } from "@/components/ui/upgrade-banner";

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
  BookOpen, ArrowRight, ShieldCheck,
  FileText
} from "lucide-react";


export default function Home() {
  const router = useRouter();
  const { savedSession, clearSession } = useSessionPersistence();
  const [selectedBranch, _setSelectedBranch] = useState("");
  const [selectedSemester, _setSelectedSemester] = useState<number | "">("");
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
            src="/logo.webp"
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
            src="/hero-bg.webp"
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
            src="/hero-bg-dark.webp"
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
            Get Started — It&apos;s Free
            <ArrowRight className="w-5 h-5 ml-1.5" />
          </MagneticButton>
          
          <button
            onClick={() => {
              triggerHaptic("light");
              document.getElementById("how-it-works-heading")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto whitespace-nowrap px-8 py-4 text-base font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-slate-800/85 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl transition-all duration-200 cursor-pointer"
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
