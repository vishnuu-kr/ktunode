"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Compare } from "@/components/ui/compare";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const bullets = [
  "Module-by-module structure",
  "Exam-focused content only",
  "Updated for 2024 scheme",
];

export default function KtuCompareSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-8%" });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkTouch = () => {
        setIsTouchDevice(
          "ontouchstart" in window ||
            navigator.maxTouchPoints > 0
        );
      };
      checkTouch();
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #f3f8ff 0%, #eaf3ff 50%, #ddeeff 100%)",
      }}
      aria-labelledby="compare-heading"
    >
      {/* Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-100/25 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* ── Left text ── */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-lg"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-badge mb-6">Before vs After</div>

            <h2
              id="compare-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05] mb-6"
            >
              From Chaos
              <br />
              <span className="gradient-text-animated">to Clarity.</span>
            </h2>

            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-md">
              Stop digging through dense, cluttered university material. Our
              structured notes strip away the noise so you can focus on exactly
              what you need to pass.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {bullets.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                  <span className="text-sm font-semibold text-slate-600">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/notes"
              className="pill-btn pill-btn-primary group inline-flex"
            >
              Browse Notes
              <motion.span
                className="inline-flex"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>

          {/* ── Right compare widget ── */}
          <motion.div
            className="flex-1 flex flex-col items-center gap-4 w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="p-2 md:p-3 w-full max-w-[760px] rounded-3xl border border-blue-100 bg-white/80 backdrop-blur-sm"
              style={{
                boxShadow:
                  "0 20px 60px rgba(37,99,235,0.12), 0 4px 16px rgba(0,0,0,0.06)",
              }}
              whileHover={{
                boxShadow: "0 32px 80px rgba(46,149,255,0.18), 0 8px 24px rgba(0,0,0,0.08)",
                y: -4,
                transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
              }}
            >
              <Compare
                firstImage="/assets/ktu-cluttered.webp"
                secondImage="/assets/ktu-structured.webp"
                firstImageClassName="object-cover object-top"
                secondImageClassname="object-cover object-top"
                className="w-full aspect-[4/5] sm:aspect-square md:aspect-video rounded-[20px]"
                slideMode={isTouchDevice ? "drag" : "hover"}
                autoplay={true}
              />
            </motion.div>
            <p className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
              ← Drag or hover to compare →
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
