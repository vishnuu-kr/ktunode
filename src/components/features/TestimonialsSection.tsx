"use client";

import React, { useState, useRef, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Menon",
    branch: "CS — Semester 6",
    avatar: "AM",
    color: "from-blue-400 to-indigo-500",
    rating: 5,
    quote: "This platform changed how I learn.",
    text: "KTUNODE completely changed how I study. The chapter-wise notes are so clean — I stopped wasting time on dense textbooks and scored my best semester yet.",
  },
  {
    name: "Priya Krishnan",
    branch: "EC — Semester 4",
    avatar: "PK",
    color: "from-violet-400 to-purple-500",
    rating: 5,
    quote: "Helped me build real skills, not just theory.",
    text: "The PYQs are organized exactly how I needed them. I could see patterns in questions across years and walked into the exam feeling genuinely prepared.",
  },
  {
    name: "Rahul Suresh",
    branch: "ME — Semester 8",
    avatar: "RS",
    color: "from-emerald-400 to-teal-500",
    rating: 5,
    quote: "I finally feel confident applying what I learn.",
    text: "The syllabus tracker is a game changer. I could see exactly what I'd covered and what was left. No more last-minute panic about missing modules.",
  },
  {
    name: "Anjali Nair",
    branch: "CE — Semester 5",
    avatar: "AN",
    color: "from-rose-400 to-pink-500",
    rating: 5,
    quote: "Finally built for the 2024 scheme.",
    text: "Finally a platform built for the 2024 scheme. Everything is up to date and the notes actually match what our professors teach. Highly recommend.",
  },
  {
    name: "Vishnu Das",
    branch: "EE — Semester 3",
    avatar: "VD",
    color: "from-amber-400 to-orange-500",
    rating: 5,
    quote: "Saves me hours every single week.",
    text: "I used to spend hours searching for good notes. Now I just open KTUNODE and everything is right there. Saves me so much time every week.",
  },
  {
    name: "Sneha Pillai",
    branch: "CS — Semester 7",
    avatar: "SP",
    color: "from-cyan-400 to-blue-500",
    rating: 5,
    quote: "My grades improved noticeably.",
    text: "The compare feature showed me exactly how cluttered my old notes were. The structured format here is just on another level. My grades improved noticeably.",
  },
];

const doubled = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #eef6ff 0%, #e5f1ff 100%)",
      }}
      aria-labelledby="testimonials-heading"
    >
      {/* Blobs */}
      <div className="absolute top-0 left-1/3 w-96 h-64 bg-blue-100/45 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-64 bg-indigo-100/35 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div
        className={`mx-auto max-w-6xl px-6 mb-16 text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="section-badge mb-5">
          <Star className="w-3 h-3 fill-current" />
          Student Reviews
        </div>
        <h2
          id="testimonials-heading"
          className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-5 leading-[1.05]"
        >
          Loved by KTU
          <br />
          <span className="gradient-text-animated">students.</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-lg mx-auto leading-relaxed">
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
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#e5f1ff] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#e5f1ff] to-transparent" />

        <div
          className="flex gap-5 w-max"
          style={{
            animation: "scroll-x 48s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-[340px] flex-shrink-0 bg-white border border-blue-100 rounded-3xl p-7 cursor-default group ripple-card hover:-translate-y-2.5 hover:shadow-[0_24px_56px_rgba(37,99,235,0.14)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                boxShadow: "0 2px 16px rgba(37,99,235,0.06)",
              }}
            >
              {/* Quote + icon */}
              <div className="flex items-start justify-between mb-4">
                <p className="text-xl font-black text-slate-900 leading-snug group-hover:text-blue-700 transition-colors flex-1 pr-3">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <Quote className="w-6 h-6 text-blue-100 flex-shrink-0 mt-0.5 group-hover:text-blue-200 transition-colors" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Body */}
              <p className="text-sm text-slate-500 leading-relaxed mb-6">{t.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-black flex-shrink-0 shadow-md`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-black text-slate-800">{t.name}</div>
                  <div className="text-xs text-slate-400 font-medium">{t.branch}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
