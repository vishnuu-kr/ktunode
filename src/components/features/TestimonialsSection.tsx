"use client";

import React, { useState, useRef, useEffect } from "react";
import { Star, Quote, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Menon",
    dept: "Computer Science",
    sem: "Sem 6",
    avatar: "AM",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    rating: 5,
    quote: "This platform changed how I study.",
    text: "The chapter-wise notes are so clean—I stopped wasting time on dense textbooks and scored my best semester yet.",
  },
  {
    name: "Priya Krishnan",
    dept: "Electronics",
    sem: "Sem 4",
    avatar: "PK",
    color: "bg-violet-50 text-violet-600 border-violet-100",
    rating: 5,
    quote: "Helped me build real exam confidence.",
    text: "The model papers are organized exactly how I needed them. I could easily spot patterns and walked into the exam prepared.",
  },
  {
    name: "Rahul Suresh",
    dept: "Mechanical",
    sem: "Sem 8",
    avatar: "RS",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    rating: 5,
    quote: "No more panic about missing modules.",
    text: "Knowing exactly what is left for my exams is a game changer. Marking modules complete as I study prevents backlogs entirely.",
  },
  {
    name: "Anjali Nair",
    dept: "Civil",
    sem: "Sem 5",
    avatar: "AN",
    color: "bg-rose-50 text-rose-600 border-rose-100",
    rating: 5,
    quote: "Finally built for the 2024 scheme.",
    text: "Finally a platform built for the 2024 scheme. Everything is up to date and notes match exactly what our professors teach.",
  },
  {
    name: "Vishnu Das",
    dept: "Electrical",
    sem: "Sem 3",
    avatar: "VD",
    color: "bg-amber-50 text-amber-600 border-amber-100",
    rating: 5,
    quote: "Saves me hours every study week.",
    text: "I used to spend hours searching for good notes. Now I just open KTUNODE and everything is right there. Saves me so much time.",
  },
  {
    name: "Sneha Pillai",
    dept: "Computer Science",
    sem: "Sem 7",
    avatar: "SP",
    color: "bg-cyan-50 text-cyan-600 border-cyan-100",
    rating: 5,
    quote: "My grades improved noticeably.",
    text: "The comparison preview showed me how clean structured notes should be. My revision is on another level, and grades improved.",
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
        className={`mx-auto max-w-6xl px-6 mb-10 text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Overall Star Rating summary */}
        <div className="flex flex-col items-center justify-center gap-1.5 mb-6">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-[10px] sm:text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em]">
            4.9/5 Rating (5,000+ KTU students)
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-5 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-100/60 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wide uppercase shadow-sm">
          <Heart className="w-3 h-3 fill-current text-blue-500" />
          Loved by KTU students
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
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 z-10 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 z-10 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent" />

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
              className="w-[300px] sm:w-[360px] h-[230px] sm:h-[250px] flex flex-col justify-between flex-shrink-0 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-3xl p-6 sm:p-7 cursor-default group hover:-translate-y-2 hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-[0_20px_40px_rgba(37,99,235,0.06)] hover:dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                boxShadow: "0 2px 16px rgba(0,0,0,0.01), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <div>
                {/* Rating stars & Quote mark */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-blue-500/10 group-hover:text-blue-500/20 transition-colors" />
                </div>

                {/* Quote Title */}
                <h3 className="text-[15px] sm:text-base font-extrabold text-slate-800 dark:text-slate-100 leading-snug mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 truncate">
                  &ldquo;{t.quote}&rdquo;
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-500/95 dark:text-slate-400 leading-relaxed font-medium line-clamp-3">
                  {t.text}
                </p>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center text-xs font-bold flex-shrink-0 ${t.color}`}
                >
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200 truncate">{t.name}</div>
                  <div className="flex justify-between items-center text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mt-0.5">
                    <span>{t.dept}</span>
                    <span className="text-blue-600 dark:text-blue-400">{t.sem}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
