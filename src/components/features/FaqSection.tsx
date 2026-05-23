"use client";

import React, { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is KTUNODE free to use?",
    a: "Yes, KTUNODE is completely free. All notes, PYQs, and syllabus tracking features are available without any subscription or account creation.",
  },
  {
    q: "Which KTU scheme does KTUNODE cover?",
    a: "KTUNODE is built specifically for the 2024 KTU scheme. All notes, syllabi, and PYQs are mapped to the latest curriculum from APJ Abdul Kalam Technological University.",
  },
  {
    q: "Which branches are supported?",
    a: "We currently support Computer Science (CS), Electronics & Communication (EC), Mechanical (ME), Civil (CE), and Electrical & Electronics (EE). More branches are being added.",
  },
  {
    q: "How up-to-date are the notes and PYQs?",
    a: "Notes are aligned with the 2024 scheme syllabus. PYQs cover real KTU exam papers from 2019 through 2024, organized by subject and semester for easy practice.",
  },
  {
    q: "Do I need to create an account?",
    a: "No account is required. Just select your branch and semester on the homepage and you're instantly taken to your personalized dashboard.",
  },
  {
    q: "How does the syllabus tracker work?",
    a: "The syllabus tracker lets you mark modules as complete as you study. Your progress is saved locally so you can always see what you've covered and what's left before exams.",
  },
  {
    q: "Is KTUNODE affiliated with KTU?",
    a: "No. KTUNODE is an independent student resource platform and is not affiliated with or endorsed by APJ Abdul Kalam Technological University.",
  },
];

const quickStats = [
  { value: "Free",  label: "Always free" },
  { value: "2024",  label: "Scheme updated" },
  { value: "5 min", label: "Setup time" },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
      className="relative py-28 overflow-hidden bg-background"
      style={{
        background:
          "linear-gradient(180deg, var(--color-bg) 0%, var(--color-sky) 100%)",
      }}
      aria-labelledby="faq-heading"
    >
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/55 dark:bg-blue-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50/35 dark:bg-indigo-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left — sticky header */}
          <div
            className={`lg:w-80 flex-shrink-0 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
          >
            <div className="lg:sticky lg:top-24">
              <div className="section-badge mb-5">FAQ</div>
              <h2
                id="faq-heading"
                className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-slate-100 mb-5 leading-[1.05]"
              >
                Common
                <br />
                <span className="gradient-text-animated">questions.</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-8">
                Everything you need to know about KTUNODE. Can&apos;t find the
                answer? Reach out to us.
              </p>

              {/* Quick stats */}
              <div className="flex flex-col gap-3">
                {quickStats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-blue-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default ${
                      visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${200 + i * 80}ms` }}
                  >
                    <div className="text-xl font-black text-blue-600 dark:text-blue-400">{s.value}</div>
                    <div className="text-sm font-semibold text-slate-500 dark:text-slate-450">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="flex-1">
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className={`transition-all duration-700 ${
                      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${i * 55}ms` }}
                  >
                    <div
                      className={`bg-white dark:bg-slate-900 rounded-2xl border dark:border-slate-800 overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "border-blue-200 dark:border-blue-800 shadow-lg shadow-blue-50 dark:shadow-none"
                          : "border-slate-100 dark:border-slate-800 hover:border-blue-100 shadow-sm hover:shadow-md"
                      }`}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${i}`}
                      >
                        <span
                          className={`text-sm md:text-base font-bold leading-snug transition-colors ${
                            isOpen
                              ? "text-blue-700 dark:text-blue-450"
                              : "text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-450"
                          }`}
                        >
                          {faq.q}
                        </span>
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                            isOpen
                              ? "bg-blue-600 text-white"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-450 group-hover:bg-blue-50 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="w-3.5 h-3.5" />
                          ) : (
                            <Plus className="w-3.5 h-3.5" />
                          )}
                        </div>
                      </button>

                      <div
                        id={`faq-answer-${i}`}
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="px-6 pb-6 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
