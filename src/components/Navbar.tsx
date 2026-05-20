"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, LayoutDashboard, UserRound } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import confetti from "canvas-confetti";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const mobileLinks = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard, accent: "blue" },
];

const accentMap: Record<string, { text: string; bg: string; dot: string }> = {
  blue:    { text: "text-blue-600",    bg: "bg-blue-50",    dot: "bg-blue-500" },
  violet:  { text: "text-violet-600",  bg: "bg-violet-50",  dot: "bg-violet-500" },
  emerald: { text: "text-emerald-600", bg: "bg-emerald-50", dot: "bg-emerald-500" },
  amber:   { text: "text-amber-600",   bg: "bg-amber-50",   dot: "bg-amber-500" },
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useFocusTrap(mobileOpen);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    queueMicrotask(() => setMobileOpen(false));
  }, [pathname]);

  const fireConfetti = useCallback(() => {
    const colors = ["#2E95FF", "#007AFF", "#60a5fa", "#818cf8", "#a78bfa", "#f472b6", "#facc15", "#ffffff"];

    // Central cannon pop — shoots straight up and fans out
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

    // Left popper
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

    // Right popper
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
    <>
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
        <Link href="/" onClick={fireConfetti} className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 text-white text-sm font-black transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-slate-900/25 group-hover:rotate-3">
            K
          </div>
          <span className="text-base font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
            KTU NODE
          </span>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          {isActive("/dashboard") ? (
            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-blue-100 bg-white/70 px-3 text-xs font-black text-slate-600 shadow-sm"
              aria-label="Dashboard user menu"
            >
              <LayoutDashboard className="h-3.5 w-3.5 text-blue-500" />
              Dashboard
              <UserRound className="h-3.5 w-3.5 text-slate-400" />
            </button>
          ) : (
            <MagneticButton href="/dashboard" className="!py-2 !px-4 !text-xs">
              Open Dashboard
              <ArrowRight className="w-3 h-3" />
            </MagneticButton>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex md:hidden items-center justify-center w-9 h-9 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all duration-200 active:scale-95"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div ref={drawerRef} role="dialog" aria-modal="true" aria-label="Mobile navigation" className="relative ml-auto w-80 h-full bg-white shadow-2xl flex flex-col">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white text-sm font-black">
                  K
                </div>
                <span className="text-base font-black tracking-tight text-slate-900">KTU NODE</span>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-1.5 p-4 flex-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.12em] px-2 mb-1">
                Navigate
              </p>
              {mobileLinks.map((link) => {
                const Icon = link.icon;
                const a = accentMap[link.accent];
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                      active
                        ? `${a.bg} ${a.text}`
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        active ? a.bg : "bg-slate-100"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${active ? a.text : "text-slate-500"}`} />
                    </div>
                    {link.label}
                    {active && (
                      <div className={`ml-auto w-1.5 h-1.5 rounded-full ${a.dot}`} />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="p-4 border-t border-slate-100">
              <Link
                href="/dashboard"
                onClick={() => setMobileOpen(false)}
                className="pill-btn pill-btn-primary w-full justify-center"
              >
                Open Dashboard
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
