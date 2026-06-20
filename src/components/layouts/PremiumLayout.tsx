"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const CinematicFooter = dynamic(() => import("@/components/ui/motion-footer").then(mod => mod.CinematicFooter), { ssr: false });

export function PremiumLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative w-full min-h-screen flex flex-col font-sans overflow-x-hidden ios-safe-x"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Drifting mesh glows matching dashboard for high-fidelity unity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="fixed top-[-80px] right-[-80px] w-[700px] h-[700px] rounded-full bg-blue-400/20 blur-[160px] bg-orb-1" />
        <div className="fixed bottom-[20%] left-[-60px] w-[600px] h-[600px] rounded-full bg-indigo-300/15 blur-[140px] bg-orb-2" />
        <div className="fixed top-[45%] left-[65%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-100/40 blur-[120px] bg-orb-3" />
      </div>

      <div className="relative w-full flex flex-col flex-1 z-10">
        {/* ── Global Hero Background Image (Light Mode) ── */}
        <div className="absolute top-0 left-0 right-0 h-[600px] z-0 pointer-events-none transition-opacity duration-700 opacity-100 dark:opacity-0">
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
        <div className="absolute top-0 left-0 right-0 h-[600px] z-0 pointer-events-none transition-opacity duration-700 opacity-0 dark:opacity-100">
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
          className="absolute top-[400px] left-0 right-0 h-[200px] z-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, var(--color-bg) 100%)",
          }}
          aria-hidden="true"
        />

        {/* ── Navbar ── */}
        <div className="pt-4 z-50 relative w-full">
          <Navbar />
        </div>
        
        {/* Content */}
        <div className="relative z-20 pt-8 sm:pt-12 pb-20 w-full flex-1">
          {children}
        </div>
      </div>

      <div className="relative z-20">
        <CinematicFooter />
      </div>
    </div>
  );
}
