"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

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
        {/* Headline */}
        <motion.h2
          id="cta-heading"
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-10 leading-[1.05]"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Ready to{" "}
          <span
            className="gradient-text-animated"
            style={{
              textShadow: "0 0 40px rgba(96,184,255,0.28)",
              "--mobile-gradient-fallback": "#60b8ff",
            } as React.CSSProperties}
          >
            fix this semester?
          </span>
        </motion.h2>

        {/* Primary CTA Button */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <MagneticButton
            href="/dashboard"
            className="whitespace-nowrap !rounded-2xl !px-8 !py-5 !text-base !font-black !from-[#ff7a00] !to-[#ff5c00] hover:!shadow-[0_12px_30px_-4px_rgba(255,122,0,0.6)]"
            customShadow="shadow-[0_12px_28px_-4px_rgba(255,122,0,0.5),inset_0_1px_0_rgba(255,255,255,0.3)] border border-orange-400/20 group-hover:shadow-[0_20px_40px_-4px_rgba(255,122,0,0.7),inset_0_1px_0_rgba(255,255,255,0.4)]"
          >
            Open Dashboard
            <ArrowRight className="w-5 h-5" />
          </MagneticButton>
        </motion.div>

        {/* Reassurance text */}
        <motion.p
          className="text-white/60 text-sm font-medium mt-10 tracking-wide select-none"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          No login · Free forever · Built for KTU 2024
        </motion.p>
      </div>
    </section>
  );
}

