"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, BookOpen, Calendar, ArrowRight, ShieldCheck, FileText, ChevronDown, Send, Zap, Target, Users, BarChart3, CheckCircle2, TrendingUp, Search, ArrowUpRight } from "lucide-react";

const branches = [
  { id: "cs", label: "Computer Science" },
  { id: "ec", label: "Electronics & Comm." },
  { id: "me", label: "Mechanical" },
  { id: "ce", label: "Civil" },
  { id: "ee", label: "Electrical & Electronics" },
];

const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Home() {
  const router = useRouter();
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSemester, setSelectedSemester] = useState<number | "">("");

  const handleLaunch = () => {
    const params = new URLSearchParams();
    if (selectedBranch) params.set("branch", selectedBranch);
    if (selectedSemester) params.set("semester", String(selectedSemester));
    router.push(`/dashboard${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col font-sans bg-[var(--color-bg)] overflow-x-hidden">
      <div className="pt-4 z-50 relative w-full">
        <Navbar />
      </div>

      <main className="relative z-10 flex-1 flex flex-col items-center pt-20 md:pt-28 pb-16 text-center px-4">
        {/* Hero background — sharp, no blur, minimal overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/uploaded-hero.png')] bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/[0.08]" />
        </div>

        {/* Floating cards — desktop only */}
        <div className="hidden lg:flex absolute left-8 top-36 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-[var(--color-border)] items-center gap-3 -rotate-6 hover:rotate-0 transition-transform duration-300 z-10">
          <div className="w-10 h-10 flex items-center justify-center bg-[var(--color-accent-light)] text-[var(--color-accent)] rounded-xl">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="text-left">
            <div className="text-sm font-bold text-[var(--color-fg)]">Syllabus</div>
            <div className="text-xs font-medium text-[var(--color-muted)]">2024 Scheme</div>
          </div>
        </div>

        <div className="hidden lg:flex absolute right-12 top-44 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-[var(--color-border)] items-center gap-3 rotate-3 hover:rotate-0 transition-transform duration-300 z-10">
          <div className="w-10 h-10 flex items-center justify-center bg-[var(--color-accent-light)] text-[var(--color-accent)] rounded-xl">
            <FileText className="w-5 h-5" />
          </div>
          <div className="text-left">
            <div className="text-sm font-bold text-[var(--color-fg)]">PYQs</div>
            <div className="text-xs font-medium text-[var(--color-muted)]">Chapter-wise</div>
          </div>
        </div>

        {/* Badge */}
        <div className="flex items-center gap-2 px-5 py-2 mb-8 bg-[var(--color-accent-light)]/[0.8] backdrop-blur-md border border-[var(--color-accent)]/20 rounded-full shadow-sm animate-scale-in z-10">
          <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
          <span className="text-sm font-semibold text-[var(--color-accent)]">Built for KTU 2024 Scheme</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-extrabold tracking-tight text-[var(--color-fg)] leading-[1.05] mb-6 max-w-4xl z-10 animate-fade-up">
          Master the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-blue-500">
            KTU Semester.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-[var(--color-muted)] mb-10 max-w-2xl font-medium leading-relaxed z-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Premium notes, PYQs, and syllabus tracking{" "}
          <br className="hidden sm:block" />
          designed for the{" "}
          <span className="text-[var(--color-accent)] font-semibold">2024 KTU scheme.</span>
        </p>

        {/* Selector + CTA */}
        <div className="bg-white/90 backdrop-blur-md border border-[var(--color-border)] shadow-sm rounded-2xl p-3 flex flex-col md:flex-row items-center gap-3 max-w-3xl w-full z-20 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {/* Branch */}
          <div className="flex-1 w-full relative">
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="w-full appearance-none bg-gray-50/80 hover:bg-gray-100/50 transition-colors border border-[var(--color-border)] rounded-xl px-4 py-3.5 pl-11 text-sm font-medium text-[var(--color-fg)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)]"
            >
              <option value="">Select Branch</option>
              {branches.map((b) => (
                <option key={b.id} value={b.id}>{b.label}</option>
              ))}
            </select>
            <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[var(--color-muted)] pointer-events-none" />
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted)] pointer-events-none" />
          </div>

          {/* Semester */}
          <div className="flex-1 w-full relative">
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value ? Number(e.target.value) : "")}
              className="w-full appearance-none bg-gray-50/80 hover:bg-gray-100/50 transition-colors border border-[var(--color-border)] rounded-xl px-4 py-3.5 pl-11 text-sm font-medium text-[var(--color-fg)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)]"
            >
              <option value="">Select Semester</option>
              {semesters.map((s) => (
                <option key={s} value={s}>Semester {s}</option>
              ))}
            </select>
            <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[var(--color-muted)] pointer-events-none" />
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted)] pointer-events-none" />
          </div>

          <button
            onClick={handleLaunch}
            className="w-full md:w-auto bg-gradient-to-r from-[var(--color-accent)] to-blue-500 hover:from-[var(--color-accent)]/80 hover:to-blue-600 text-white rounded-xl px-8 py-3.5 flex items-center justify-center gap-2 font-semibold text-sm shadow-sm hover:shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Launch Dashboard
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 z-10 w-full max-w-4xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
          {[
            { icon: "users", label: "Active Students", value: "12K+" },
            { icon: "shield", label: "Exam Coverage", value: "98%" },
            { icon: "file", label: "KTU Scheme", value: "Updated 2024" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/80 backdrop-blur-md border border-[var(--color-border)] px-5 py-3.5 rounded-2xl shadow-sm flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-[var(--color-accent-light)] text-[var(--color-accent)] rounded-full flex items-center justify-center">
                {stat.icon === "users" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                ) : stat.icon === "shield" ? (
                  <ShieldCheck className="w-5 h-5" />
                ) : (
                  <FileText className="w-5 h-5" />
                )}
              </div>
              <div className="text-left">
                <div className="text-base font-bold text-[var(--color-fg)]">{stat.value}</div>
                <div className="text-xs font-medium text-[var(--color-muted)]">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ───── Premium Bento Grid Features Section ───── */}
      <section className="relative w-full py-28 md:py-36 px-4 overflow-hidden bg-[var(--color-bg)]">
        {/* Ambient glow */}
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-[var(--color-accent)]/5 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-blue-400/4 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Pill badge */}
          <div className="flex items-center justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[var(--color-accent)]/10 backdrop-blur-md border border-[var(--color-accent)]/20 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span className="text-xs font-bold text-[var(--color-accent)] tracking-wide">Features</span>
            </div>
          </div>

          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-fg)] leading-[1.1] mb-5">
              Everything KTU Students Need.
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-muted)] max-w-2xl mx-auto font-medium leading-relaxed">
              Premium notes, PYQs, syllabus tracking, semester resources, and smart organization — all in one beautifully designed platform.
            </p>
          </div>

          {/* ─── Bento Grid (8 cards, asymmetrical) ─── */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5">

            {/* CARD 1 — Premium Notes (2×2 largest) */}
            <div className="relative col-span-1 md:col-span-2 row-span-1 md:row-span-2 bg-white/70 backdrop-blur-sm border border-[var(--color-border)] rounded-3xl p-6 md:p-8 hover:bg-white hover:shadow-xl hover:border-[var(--color-accent)]/20 hover:-translate-y-0.5 transition-all duration-300 group overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[var(--color-accent)]/5 to-blue-400/5 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-blue-500 flex items-center justify-center mb-5 shadow-lg shadow-[var(--color-accent)]/20">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--color-fg)] mb-3">Premium KTU Notes</h3>
                <p className="text-sm text-[var(--color-muted)] font-medium leading-relaxed mb-auto">
                  Beautifully organized handwritten and digital notes designed specifically for the 2024 KTU scheme. Easy to study, easy to revise.
                </p>
                {/* Floating PDF cards */}
                <div className="mt-5 flex gap-2.5">
                  {["Module 1", "Module 2", "Module 3"].map((mod, i) => (
                    <div
                      key={mod}
                      className="bg-white border border-[var(--color-border)] rounded-xl px-3.5 py-2.5 text-xs font-bold text-[var(--color-fg)] shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-default"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    >
                      <div className="w-3 h-4 rounded bg-[var(--color-accent)]/20 mb-1.5" />
                      {mod}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 2 — Chapter-wise PYQs (1×1) */}
            <div className="col-span-1 md:col-span-1 row-span-1 bg-white/70 backdrop-blur-sm border border-[var(--color-border)] rounded-3xl p-6 hover:bg-white hover:shadow-xl hover:border-[var(--color-accent)]/20 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-4 shadow-lg shadow-emerald-200/30">
                <FileText className="w-5.5 h-5.5 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[var(--color-fg)] mb-2.5">Chapter-wise PYQs</h3>
              <p className="text-sm text-[var(--color-muted)] font-medium leading-relaxed mb-4">
                Practice organized by modules and important topics for faster exam preparation.
              </p>
              {/* Progress ring */}
              <div className="flex items-center gap-3">
                <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                  <circle cx="28" cy="28" r="24" fill="none" stroke="var(--color-border)" strokeWidth="4" />
                  <circle cx="28" cy="28" r="24" fill="none" stroke="#2563EB" strokeWidth="4" strokeDasharray="150.8" strokeDashoffset="42" strokeLinecap="round" />
                </svg>
                <div>
                  <div className="text-base font-bold text-[var(--color-fg)]">72%</div>
                  <div className="text-[11px] font-medium text-[var(--color-muted)]">Questions solved</div>
                </div>
              </div>
            </div>

            {/* CARD 3 — Smart Semester Dashboard (2×1 horizontal) */}
            <div className="col-span-1 md:col-span-2 row-span-1 bg-white/70 backdrop-blur-sm border border-[var(--color-border)] rounded-3xl p-6 hover:bg-white hover:shadow-xl hover:border-[var(--color-accent)]/20 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="flex items-start gap-4 h-full">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center shrink-0 shadow-lg shadow-violet-200/30">
                  <BarChart3 className="w-5.5 h-5.5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-[var(--color-fg)] mb-1.5">Smart Semester Dashboard</h3>
                  <p className="text-sm text-[var(--color-muted)] font-medium leading-relaxed mb-3">
                    Track syllabus completion, internal marks, attendance, and study progress.
                  </p>
                  {/* Animated bar chart */}
                  <div className="flex items-end gap-2 h-20">
                    {[70, 85, 60, 92, 48, 76].map((val, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full rounded-lg bg-gradient-to-t from-[var(--color-accent)]/80 to-blue-400/80 transition-all duration-500"
                          style={{ height: `${val}%` }}
                        />
                        <span className="text-[9px] font-semibold text-[var(--color-muted)]">M{i + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 4 — Syllabus Tracker (1×1) */}
            <div className="col-span-1 md:col-span-1 row-span-1 bg-white/70 backdrop-blur-sm border border-[var(--color-border)] rounded-3xl p-6 hover:bg-white hover:shadow-xl hover:border-[var(--color-accent)]/20 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4 shadow-lg shadow-amber-200/30">
                <CheckCircle2 className="w-5.5 h-5.5 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[var(--color-fg)] mb-2.5">Syllabus Tracking</h3>
              <p className="text-sm text-[var(--color-muted)] font-medium leading-relaxed mb-4">
                Mark completed topics and monitor your preparation visually.
              </p>
              {/* Interactive checklist */}
              <div className="space-y-2">
                {["Module 1", "Module 2", "Module 3", "Module 4"].map((m, i) => (
                  <label key={m} className="flex items-center gap-2.5 cursor-pointer group/check">
                    <input type="checkbox" defaultChecked={i < 2} className="w-4 h-4 rounded border-[var(--color-border)] text-[var(--color-accent)] focus:ring-[var(--color-accent)]/30 accent-[var(--color-accent)]" />
                    <span className="text-xs font-semibold text-[var(--color-fg)] group-hover/check:text-[var(--color-accent)] transition-colors">{m}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* CARD 5 — Fast Search (1×1) */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-white/70 backdrop-blur-sm border border-[var(--color-border)] rounded-3xl p-6 hover:bg-white hover:shadow-xl hover:border-[var(--color-accent)]/20 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center mb-4 shadow-lg shadow-sky-200/30">
                <Search className="w-5.5 h-5.5 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[var(--color-fg)] mb-2.5">Instant Resource Search</h3>
              <p className="text-sm text-[var(--color-muted)] font-medium leading-relaxed mb-4">
                Quickly search notes, subjects, PYQs, and modules across your semester.
              </p>
              {/* Animated search bar */}
              <div className="relative">
                <div className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-3.5 py-2.5 text-sm font-medium text-[var(--color-muted)] flex items-center gap-2">
                  <Search className="w-4 h-4 text-[var(--color-muted)]/60" />
                  <span>Search CST201 notes...</span>
                </div>
                <div className="absolute -bottom-2 left-4 right-4 bg-white border border-[var(--color-border)] rounded-xl p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-1 group-hover:translate-y-0">
                  <div className="text-xs font-semibold text-[var(--color-fg)]">CST201 — Module 3 Notes</div>
                  <div className="text-[10px] text-[var(--color-muted)] mt-0.5">Data Structures — 12 pages</div>
                </div>
              </div>
            </div>

            {/* CARD 6 — KTU 2024 Scheme (1×1) */}
            <div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 bg-white/70 backdrop-blur-sm border border-[var(--color-border)] rounded-3xl p-6 hover:bg-white hover:shadow-xl hover:border-[var(--color-accent)]/20 hover:-translate-y-0.5 transition-all duration-300 group overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,var(--color-accent)/6,transparent_60%)] pointer-events-none" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-indigo-200/30">
                  <Zap className="w-5.5 h-5.5 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-fg)] mb-2.5">Built for KTU 2024</h3>
                <p className="text-sm text-[var(--color-muted)] font-medium leading-relaxed">
                  Designed exclusively for the latest KTU curriculum with updated syllabus and structured resources.
                </p>
                {/* Blueprint grid */}
                <div className="mt-4 grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="aspect-square rounded-md bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/10" />
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 7 — Minimal Study Experience (1×1) */}
            <div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 bg-white/70 backdrop-blur-sm border border-[var(--color-border)] rounded-3xl p-6 hover:bg-white hover:shadow-xl hover:border-[var(--color-accent)]/20 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-gray-500 to-slate-600 flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-5.5 h-5.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[var(--color-fg)] mb-2.5">Distraction-Free Learning</h3>
              <p className="text-sm text-[var(--color-muted)] font-medium leading-relaxed">
                Clean reading experience with premium layouts, optimized typography, and smooth interactions.
              </p>
              {/* Typography mockup */}
              <div className="mt-4 space-y-1.5">
                <div className="h-2 w-full bg-gray-200 rounded-full" />
                <div className="h-2 w-4/5 bg-gray-200 rounded-full" />
                <div className="h-2 w-3/5 bg-gray-200 rounded-full" />
                <div className="h-2 w-5/6 bg-gray-200 rounded-full mt-3" />
                <div className="h-2 w-2/3 bg-gray-200 rounded-full" />
              </div>
            </div>

            {/* CARD 8 — Everything Organized (3×1 full width) */}
            <div className="col-span-1 md:col-span-4 lg:col-span-6 row-span-1 bg-white/70 backdrop-blur-sm border border-[var(--color-border)] rounded-3xl p-6 md:p-7 hover:bg-white hover:shadow-xl hover:border-[var(--color-accent)]/20 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-200/30">
                  <svg className="w-5.5 h-5.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-[var(--color-fg)] mb-0.5">Everything Organized</h3>
                  <p className="text-sm text-[var(--color-muted)] font-medium">All semesters, subjects, notes, labs, and resources perfectly categorized.</p>
                </div>
                {/* Folder system */}
                <div className="flex gap-2 md:gap-3">
                  {["Sem 1", "Sem 2", "Sem 3", "Sem 4"].map((sem) => (
                    <div key={sem} className="bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/15 rounded-xl px-4 py-2.5 text-xs font-bold text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 hover:-translate-y-0.5 transition-all cursor-default shadow-sm">
                      {sem}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
