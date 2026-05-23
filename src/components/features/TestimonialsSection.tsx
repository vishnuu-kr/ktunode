"use client";

import React, { useState, useRef, useEffect } from "react";
import { Star, Quote, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Menon",
    branch: "Computer Science — Sem 6",
    avatar: "AM",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    rating: 5,
    quote: "This platform changed how I study.",
    text: "KTUNODE completely changed how I study. The chapter-wise notes are so clean — I stopped wasting time on dense textbooks and scored my best semester yet.",
  },
  {
    name: "Priya Krishnan",
    branch: "Electronics — Sem 4",
    avatar: "PK",
    color: "bg-violet-50 text-violet-600 border-violet-100",
    rating: 5,
    quote: "Helped me build real exam confidence.",
    text: "The PYQs are organized exactly how I needed them. I could see patterns in questions across years and walked into the exam prepared.",
  },
  {
    name: "Rahul Suresh",
    branch: "Mechanical — Sem 8",
    avatar: "RS",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    rating: 5,
    quote: "I finally study with absolute clarity.",
    text: "The syllabus tracker is a game changer. I could see exactly what I'd covered and what was left. No more last-minute panic about missing modules.",
  },
  {
    name: "Anjali Nair",
    branch: "Civil — Sem 5",
    avatar: "AN",
    color: "bg-rose-50 text-rose-600 border-rose-100",
    rating: 5,
    quote: "Finally built for the 2024 scheme.",
    text: "Finally a platform built for the 2024 scheme. Everything is up to date and the notes actually match what our professors teach. Highly recommend.",
  },
  {
    name: "Vishnu Das",
    branch: "Electrical — Sem 3",
    avatar: "VD",
    color: "bg-amber-50 text-amber-600 border-amber-100",
    rating: 5,
    quote: "Saves me hours every study week.",
    text: "I used to spend hours searching for good notes. Now I just open KTUNODE and everything is right there. Saves me so much time every week.",
  },
  {
    name: "Sneha Pillai",
    branch: "Computer Science — Sem 7",
    avatar: "SP",
    color: "bg-cyan-50 text-cyan-600 border-cyan-100",
    rating: 5,
    quote: "My grades improved noticeably.",
    text: "The compare feature showed me exactly how cluttered my old notes were. The structured format here is just on another level. My grades improved noticeably.",
  },
];

const doubled = [...testimonials, ...testimonials, ...testimonials];

export default function TestimonialsSection() {
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden bg-gradient-to-b from-slate-50 via-[#f5f9ff] to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-t border-slate-100 dark:border-slate-800"
      aria-labelledby="testimonials-heading"
    >


      {/* Soft Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-300/10 dark:bg-blue-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-indigo-300/8 dark:bg-indigo-900/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div
        className={`mx-auto max-w-6xl px-6 mb-16 text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-5 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-100/60 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wide uppercase shadow-sm">
          <Heart className="w-3 h-3 fill-current text-blue-500" />
          Loved by students
        </div>
        <h2
          id="testimonials-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-slate-100 mb-5 leading-[1.05]"
        >
          Loved by KTU
          <br />
          <span className="gradient-text-animated">students.</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed font-medium">
          KTU students across every branch use KTUNODE to study smarter
          and walk into exams prepared.
        </p>
      </div>

      {/* Scrolling track */}
      <div
        className="relative w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent" />

        <div
          className="flex gap-6 w-max py-4"
          style={{
            animation: "scroll-left 50s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-[360px] flex-shrink-0 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-3xl p-7 cursor-default group hover:-translate-y-2 hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-[0_20px_40px_rgba(37,99,235,0.06)] hover:dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                boxShadow: "0 2px 16px rgba(0,0,0,0.01), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Rating stars & Quote mark */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-blue-500/10 group-hover:text-blue-500/20 transition-colors" />
              </div>

              {/* Quote Title */}
              <h3 className="text-lg font-extrabold text-slate-800 dark:text-slate-100 leading-snug mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                &ldquo;{t.quote}&rdquo;
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500/95 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                {t.text}
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center text-xs font-bold ${t.color}`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200">{t.name}</div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">{t.branch}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
