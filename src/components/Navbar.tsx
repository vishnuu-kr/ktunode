"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, LayoutDashboard, UserRound } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import confetti from "canvas-confetti";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  const fireConfetti = useCallback(() => {
    const colors = ["#2E95FF", "#007AFF", "#60a5fa", "#818cf8", "#a78bfa", "#f472b6", "#facc15", "#ffffff"];

    confetti({
      particleCount: 180,
      angle: 90,
      spread: 100,
      origin: { x: 0.5, y: 0.55 },
      colors,
      startVelocity: 65,
      gravity: 0.9,
      scalar: 1.1,
      ticks: 200,
    });

    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 55,
        origin: { x: 0.25, y: 0.6 },
        colors,
        startVelocity: 55,
        gravity: 1.0,
        scalar: 0.9,
      });
    }, 120);

    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 55,
        origin: { x: 0.75, y: 0.6 },
        colors,
        startVelocity: 55,
        gravity: 1.0,
        scalar: 0.9,
      });
    }, 240);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-1/2 top-4 z-50 flex w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full px-6 py-3 transition-all duration-300 overflow-visible ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg border border-white/40"
          : "bg-white/90 backdrop-blur-md border border-white/60"
      }`}
      style={{
        boxShadow: scrolled
          ? "0 12px 40px rgba(37,99,235,0.15), 0 4px 12px rgba(0,0,0,0.05)"
          : "0 4px 16px rgba(37,99,235,0.07), 0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      {/* Logo */}
      <Link href="/" onClick={fireConfetti} className="flex items-center gap-2 group select-none">
        <Image
          src="/logo.webp"
          alt="KTU node Logo"
          width={32}
          height={32}
          className="rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-slate-900/10"
        />
        <span className="text-base font-logo tracking-tight transition-colors duration-200">
          <span className="font-extrabold text-slate-900">KTU</span>{" "}
          <span className="font-medium text-slate-500 group-hover:text-blue-600 transition-colors duration-200">node</span>
        </span>
      </Link>

      {/* Dashboard button — shown on all screen sizes */}
      <div className="flex items-center">
        {isActive("/dashboard") ? (
          <button
            type="button"
            className="inline-flex h-9 items-center gap-2 rounded-full border border-blue-100 bg-white/70 px-3 text-xs font-black text-slate-600 shadow-sm"
            aria-label="Dashboard"
          >
            <LayoutDashboard className="h-3.5 w-3.5 text-blue-500" />
            <span className="hidden sm:inline">Dashboard</span>
            <UserRound className="h-3.5 w-3.5 text-slate-400" />
          </button>
        ) : (
          <MagneticButton href="/dashboard" className="!py-2 !px-4 !text-xs">
            <span className="hidden sm:inline">Open </span>Dashboard
            <ArrowRight className="w-3 h-3" />
          </MagneticButton>
        )}
      </div>
    </motion.header>
  );
}
