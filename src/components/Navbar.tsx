"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowRight, BookOpen, FileText, Calendar, LayoutDashboard } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const mobileLinks = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard, accent: "blue" },
  { label: "Notes",     href: "/notes",     icon: BookOpen,        accent: "violet" },
  { label: "PYQs",      href: "/pyqs",      icon: FileText,        accent: "emerald" },
  { label: "Syllabus",  href: "/syllabus",  icon: Calendar,        accent: "amber" },
];

const accentMap: Record<string, { text: string; bg: string; dot: string }> = {
  blue:    { text: "text-blue-600",    bg: "bg-blue-50",    dot: "bg-blue-500" },
  violet:  { text: "text-violet-600",  bg: "bg-violet-50",  dot: "bg-violet-500" },
  emerald: { text: "text-emerald-600", bg: "bg-emerald-50", dot: "bg-emerald-500" },
  amber:   { text: "text-amber-600",   bg: "bg-amber-50",   dot: "bg-amber-500" },
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="w-full flex justify-center px-4">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-white/97 backdrop-blur-xl border border-blue-100/80"
            : "bg-white/82 backdrop-blur-md border border-white/60"
        }`}
        style={{
          boxShadow: scrolled
            ? "0 8px 32px rgba(37,99,235,0.1), 0 2px 6px rgba(0,0,0,0.05)"
            : "0 4px 16px rgba(37,99,235,0.07), 0 1px 3px rgba(0,0,0,0.04)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 text-white text-sm font-black transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-slate-900/25">
            K
          </div>
          <span className="text-base font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
            KTU NODE
          </span>
        </Link>

        {/* Desktop CTA only */}
        <div className="hidden items-center gap-3 md:flex">
          <MagneticButton
            onClick={() => router.push("/dashboard")}
            className="!py-2.5 !px-5 !text-sm"
          >
            Open Dashboard
            <ArrowRight className="w-3.5 h-3.5" />
          </MagneticButton>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex md:hidden items-center justify-center w-9 h-9 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all duration-200 active:scale-95"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative ml-auto w-80 h-full bg-white shadow-2xl flex flex-col">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white text-sm font-black">
                  K
                </div>
                <span className="text-base font-black tracking-tight text-slate-900">KTU NODE</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
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
              <button
                onClick={() => { router.push("/dashboard"); setMobileOpen(false); }}
                className="pill-btn pill-btn-primary w-full justify-center"
              >
                Open Dashboard
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
