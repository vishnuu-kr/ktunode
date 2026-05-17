"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen, FileText, GraduationCap, CheckCircle2,
} from "lucide-react";

const modules = [
  { name: "Module 1 — Introduction",    done: true },
  { name: "Module 2 — Core Concepts",   done: true },
  { name: "Module 3 — Advanced Topics", done: false },
  { name: "Module 4 — Applications",    done: false },
];

const branches = [
  { label: "CS", pct: 98 },
  { label: "EC", pct: 96 },
  { label: "ME", pct: 95 },
];



export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-8%" });

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #eef6ff 100%)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-badge mb-5">What you get</div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-5 leading-[1.05]">
            Everything you need
            <br />
            <span className="gradient-text">to ace KTU.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Built specifically for the 2024 KTU scheme — no fluff, just the
            resources that actually matter for your exams.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* ── Coverage stat — tall left card ── */}
          <motion.div
            className="lg:col-span-4 lg:row-span-2 premium-card p-8 flex flex-col items-center justify-center text-center gap-5 cursor-default"
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0, duration: 0.65, ease: [0.16, 1, 0.3, 1] as any }}
            whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(46,149,255,0.16)" }}
            style={{
              background: "linear-gradient(160deg, #eff6ff 0%, #ffffff 60%)",
              borderColor: "#dbeafe",
            }}
          >
            <div className="relative flex flex-col items-center">
              <motion.div
                className="text-8xl font-black text-slate-900 leading-none tabular-nums"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                98
              </motion.div>
              <div className="text-4xl font-black leading-none" style={{ color: "#2E95FF" }}>%</div>
              <motion.div
                className="absolute -inset-6 rounded-full opacity-10 pointer-events-none"
                animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ background: "radial-gradient(circle, #2E95FF 0%, transparent 70%)" }}
              />
            </div>
            <div>
              <div className="text-xl font-black text-slate-900">Exam Coverage</div>
              <div className="text-sm text-slate-400 mt-1 leading-relaxed">
                Topics mapped to the 2024 KTU scheme across all branches
              </div>
            </div>

            {/* Progress bars */}
            <div className="w-full space-y-3 mt-2">
              {branches.map((b, i) => (
                <div key={b.label} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-400 w-6">{b.label}</span>
                  <div className="flex-1 h-2 bg-blue-50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, #2E95FF, #60b8ff)" }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${b.pct}%` } : {}}
                      transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-500">{b.pct}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Chapter-wise Notes ── */}
          <motion.div
            className="lg:col-span-4 premium-card p-7 flex flex-col gap-5 cursor-default"
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] as any }}
            whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(46,149,255,0.16)" }}
            style={{
              background: "linear-gradient(145deg, #eff6ff 0%, #ffffff 55%)",
              borderColor: "#dbeafe",
            }}
          >
            <div className="flex items-start justify-between">
              <motion.div
                className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center"
                whileHover={{ scale: 1.12, rotate: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <BookOpen className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
              </motion.div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-600">
                Most Used
              </span>
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Chapter-wise Notes</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Module-by-module notes for every subject, stripped of filler and focused on what examiners actually ask.
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                500+ subjects covered
              </span>
            </div>
          </motion.div>

          {/* ── PYQs ── */}
          <motion.div
            className="lg:col-span-4 premium-card p-7 flex flex-col gap-5 cursor-default"
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.65, ease: [0.16, 1, 0.3, 1] as any }}
            whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(124,58,237,0.14)" }}
            style={{
              background: "linear-gradient(145deg, #f5f3ff 0%, #ffffff 55%)",
              borderColor: "#ede9fe",
            }}
          >
            <div className="flex items-start justify-between">
              <motion.div
                className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center"
                whileHover={{ scale: 1.12, rotate: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <FileText className="w-6 h-6 text-violet-500" strokeWidth={1.5} />
              </motion.div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-violet-50 text-violet-600">
                Exam Ready
              </span>
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Previous Year Questions</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Real KTU exam papers from 2019–2024, organized by subject and semester so you can practice exactly what comes up.
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                6 years of PYQs
              </span>
            </div>
          </motion.div>

          {/* ── Syllabus Tracker ── */}
          <motion.div
            className="lg:col-span-4 premium-card p-7 flex flex-col gap-5 cursor-default"
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.65, ease: [0.16, 1, 0.3, 1] as any }}
            whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(5,150,105,0.14)" }}
            style={{
              background: "linear-gradient(145deg, #ecfdf5 0%, #ffffff 60%)",
              borderColor: "#d1fae5",
            }}
          >
            <div className="flex items-start justify-between">
              <motion.div
                className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center"
                whileHover={{ scale: 1.12, rotate: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <GraduationCap className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
              </motion.div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-600">
                Live Tracker
              </span>
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Syllabus Tracker</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Mark modules complete and track your exam prep in real time. Know exactly what's left before every exam.
              </p>
            </div>
            <div className="space-y-2.5">
              {modules.map((m, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.07, duration: 0.4, ease: "easeOut" }}
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      m.done ? "bg-emerald-500" : "bg-slate-100 border-2 border-slate-200"
                    }`}
                  >
                    {m.done && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <span
                    className={`text-xs font-semibold ${
                      m.done ? "text-slate-400 line-through" : "text-slate-600"
                    }`}
                  >
                    {m.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── No account needed — wide card ── */}
          <motion.div
            className="lg:col-span-4 premium-card p-7 flex flex-col justify-between gap-4 cursor-default overflow-hidden"
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.65, ease: [0.16, 1, 0.3, 1] as any }}
            whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(46,149,255,0.14)" }}
            style={{
              background: "linear-gradient(145deg, #f0f9ff 0%, #ffffff 60%)",
              borderColor: "#bae6fd",
            }}
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Zero friction</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 leading-snug mb-2">
                No account.<br />No payment.<br />Just study.
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Pick your branch and semester — you're in. Everything is free, forever.
              </p>
            </div>
            {/* Decorative dots */}
            <div className="flex gap-2 mt-2">
              {["bg-sky-200", "bg-blue-200", "bg-indigo-200"].map((c, i) => (
                <motion.div
                  key={i}
                  className={`w-3 h-3 rounded-full ${c}`}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
