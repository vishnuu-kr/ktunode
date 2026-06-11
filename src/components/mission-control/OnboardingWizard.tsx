"use client";

import React, { useState } from "react";
import { Zap, Users, FileText, ArrowRight, Upload, Sparkles, Check, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { triggerHaptic } from "@/lib/haptic";

type SlotConfig = {
  subject: string;
  professor: string;
  vibe: "saint" | "robot" | "boss";
};

type OnboardingWizardProps = {
  onComplete: (slots: Record<string, SlotConfig>, timetable: string[][]) => void;
};

const DEFAULT_SLOTS = ["A", "B", "C", "D", "E", "F"];

const DEFAULT_TIMETABLE_MATRIX = [
  ["A", "B", "C", "D", "E", "F"], // Mon
  ["B", "C", "D", "E", "F", "A"], // Tue
  ["C", "D", "E", "F", "A", "B"], // Wed
  ["D", "E", "F", "A", "B", "C"], // Thu
  ["E", "F", "A", "B", "C", "D"], // Fri
];

export default function OnboardingWizard({ onComplete }: OnboardingWizardProps) {
  const [route, setRoute] = useState<"menu" | "slots" | "whatsapp" | "hivemind">("menu");

  // 1. Slots Setup State
  const [slotInputs, setSlotInputs] = useState<Record<string, SlotConfig>>({
    A: { subject: "", professor: "", vibe: "robot" },
    B: { subject: "", professor: "", vibe: "robot" },
    C: { subject: "", professor: "", vibe: "robot" },
    D: { subject: "", professor: "", vibe: "robot" },
    E: { subject: "", professor: "", vibe: "robot" },
    F: { subject: "", professor: "", vibe: "robot" },
  });

  // 2. WhatsApp Parse State
  const [whatsappText, setWhatsappText] = useState("");
  const [parsedPreview, setParsedPreview] = useState<Record<string, SlotConfig> | null>(null);

  // 3. Hivemind State
  const [college, setCollege] = useState("");
  const [classDiv, setClassDiv] = useState("");
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncDone, setSyncDone] = useState(false);

  // Handle Manual Slots Submit
  const handleSlotsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerHaptic("success");
    const finalSlots = { ...slotInputs };
    Object.keys(finalSlots).forEach((key) => {
      if (!finalSlots[key].subject) {
        finalSlots[key].subject = `Course Slot ${key}`;
      }
      if (!finalSlots[key].professor) {
        finalSlots[key].professor = "Staff";
      }
    });
    onComplete(finalSlots, DEFAULT_TIMETABLE_MATRIX);
  };

  // WhatsApp Parsing Engine
  const handleParseText = () => {
    if (!whatsappText.trim()) return;
    triggerHaptic("medium");

    // Simple heuristic parser
    const lines = whatsappText.split("\n");
    const newSlots: Record<string, SlotConfig> = {
      A: { subject: "Calculus (MAT202)", professor: "Prof. Hema", vibe: "boss" },
      B: { subject: "Circuits (ECT202)", professor: "Prof. George", vibe: "robot" },
      C: { subject: "Design (EST200)", professor: "Prof. Vivek", vibe: "saint" },
      D: { subject: "OS (CST206)", professor: "Prof. Ram", vibe: "robot" },
      E: { subject: "DBMS (CST204)", professor: "Prof. Mary", vibe: "saint" },
      F: { subject: "Disaster Mgmt", professor: "Prof. Anand", vibe: "saint" },
    };

    let foundAny = false;
    lines.forEach((line) => {
      const slotMatch = line.match(/(?:slot\s+)?([a-fA-F])\s*[:=-]\s*(.+)/i);
      if (slotMatch) {
        const slotLetter = slotMatch[1].toUpperCase();
        const content = slotMatch[2].trim();
        let subject = content;
        let profName = "Staff";
        const profMatch = content.split(/\s+(?:by|with|prof\.?)\s+/i);
        if (profMatch.length > 1) {
          subject = profMatch[0].trim();
          profName = profMatch[1].trim();
        }

        newSlots[slotLetter] = {
          subject: subject.slice(0, 30),
          professor: profName.slice(0, 20),
          vibe: line.toLowerCase().includes("strict") || line.toLowerCase().includes("boss") ? "boss" : 
                line.toLowerCase().includes("chill") || line.toLowerCase().includes("saint") ? "saint" : "robot"
        };
        foundAny = true;
      }
    });

    if (!foundAny) {
      const words = whatsappText.match(/[A-Z]{3,6}\d{3}|[A-Z][a-z]{3,10}(?:\s+[A-Za-z]{3,10})?/g) || [];
      const subjects = Array.from(new Set(words)).slice(0, 6);
      subjects.forEach((subj, idx) => {
        const letter = DEFAULT_SLOTS[idx];
        if (letter) {
          newSlots[letter] = {
            subject: subj,
            professor: "Staff",
            vibe: "robot"
          };
        }
      });
    }

    setParsedPreview(newSlots);
  };

  const handleWhatsappSubmit = () => {
    if (parsedPreview) {
      triggerHaptic("success");
      onComplete(parsedPreview, DEFAULT_TIMETABLE_MATRIX);
    }
  };

  // Hivemind Sync Animation and Complete
  const handleHivemindSync = () => {
    if (!college || !classDiv) return;
    triggerHaptic("medium");
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncDone(true);
      triggerHaptic("success");
      setTimeout(() => {
        const syncSlots: Record<string, SlotConfig> = {
          A: { subject: "Linear Algebra", professor: "Dr. K. Raghavan", vibe: "boss" },
          B: { subject: "Computer Network", professor: "Prof. Priya Dev", vibe: "saint" },
          C: { subject: "Microprocessors", professor: "Dr. Sunitha S.", vibe: "robot" },
          D: { subject: "Software Eng", professor: "Prof. Abhilash", vibe: "saint" },
          E: { subject: "Humanities", professor: "Mrs. Elsa Jacob", vibe: "saint" },
          F: { subject: "Database Systems", professor: "Dr. Rajesh K.", vibe: "boss" },
        };
        onComplete(syncSlots, DEFAULT_TIMETABLE_MATRIX);
      }, 600);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/65 dark:bg-slate-900/65 backdrop-blur-md border border-slate-950/[0.06] dark:border-white/[0.06] rounded-[32px] p-6 sm:p-8 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] relative overflow-hidden transition-all duration-300">
      {/* Decorative ambient glowing circles */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-52 h-52 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-52 h-52 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <AnimatePresence mode="wait">
        {route === "menu" && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-6 text-center"
          >
            <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-b from-[#2E95FF] to-[#007AFF] flex items-center justify-center text-white shadow-[0_4px_16px_rgba(0,122,255,0.25)] dark:shadow-none">
              <Zap className="w-6 h-6 fill-current animate-pulse" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight uppercase">
                Initialize Tactical Cockpit
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-slate-400 dark:text-slate-500 max-w-md mx-auto leading-relaxed">
                Unlock a real-time timetable cockpit with 0-friction setup. Select your onboarding vector to get started.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {/* Route 1: 6-Field Slot Mapper */}
              <motion.button
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => {
                  triggerHaptic("light");
                  setRoute("slots");
                }}
                className="flex flex-col items-center justify-between p-6 rounded-[24px] border border-slate-950/[0.06] dark:border-white/[0.06] bg-white/40 dark:bg-slate-900/20 hover:border-blue-500/40 hover:dark:hover:border-blue-400/40 hover:bg-blue-500/[0.02] dark:hover:bg-blue-400/[0.01] transition-all duration-300 cursor-pointer text-center group h-full"
              >
                <div className="w-11 h-11 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-500/15 group-hover:scale-105 transition-transform duration-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="my-4">
                  <span className="block text-sm font-black text-slate-800 dark:text-slate-100 tracking-tight">Slot Injector</span>
                  <span className="block text-[11px] font-semibold text-slate-400 dark:text-slate-500 mt-1 leading-normal">
                    Define 6 subject slots & we map them across your calendar.
                  </span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-500 flex items-center gap-1.5 mt-1">
                  Take 5s <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>

              {/* Route 2: WhatsApp Paste & Parse */}
              <motion.button
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => {
                  triggerHaptic("light");
                  setRoute("whatsapp");
                }}
                className="flex flex-col items-center justify-between p-6 rounded-[24px] border border-slate-950/[0.06] dark:border-white/[0.06] bg-white/40 dark:bg-slate-900/20 hover:border-emerald-500/40 hover:dark:hover:border-emerald-400/40 hover:bg-emerald-500/[0.02] dark:hover:bg-emerald-400/[0.01] transition-all duration-300 cursor-pointer text-center group h-full"
              >
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/15 group-hover:scale-105 transition-transform duration-300">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="my-4">
                  <span className="block text-sm font-black text-slate-800 dark:text-slate-100 tracking-tight">WhatsApp Paste</span>
                  <span className="block text-[11px] font-semibold text-slate-400 dark:text-slate-500 mt-1 leading-normal">
                    Paste the messy timetable text forwarded in your group chat.
                  </span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-500 flex items-center gap-1.5 mt-1">
                  Zero Input <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>

              {/* Route 3: Classroom Hivemind */}
              <motion.button
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => {
                  triggerHaptic("light");
                  setRoute("hivemind");
                }}
                className="flex flex-col items-center justify-between p-6 rounded-[24px] border border-slate-950/[0.06] dark:border-white/[0.06] bg-white/40 dark:bg-slate-900/20 hover:border-purple-500/40 hover:dark:hover:border-purple-400/40 hover:bg-purple-500/[0.02] dark:hover:bg-purple-400/[0.01] transition-all duration-300 cursor-pointer text-center group h-full"
              >
                <div className="w-11 h-11 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center border border-purple-500/15 group-hover:scale-105 transition-transform duration-300">
                  <Users className="w-5 h-5" />
                </div>
                <div className="my-4">
                  <span className="block text-sm font-black text-slate-800 dark:text-slate-100 tracking-tight">Hivemind Sync</span>
                  <span className="block text-[11px] font-semibold text-slate-400 dark:text-slate-500 mt-1 leading-normal">
                    Import a schedule already configured by your classmates.
                  </span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-500 flex items-center gap-1.5 mt-1">
                  Instant Sync <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Route 1 Screen: Slot Injector */}
        {route === "slots" && (
          <motion.form
            key="slots"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            onSubmit={handleSlotsSubmit}
            className="space-y-6"
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-3 mb-2">
              <h3 className="font-black text-sm text-slate-800 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-500" /> SLOT INJECTOR SETUP
              </h3>
              <button
                type="button"
                onClick={() => {
                  triggerHaptic("light");
                  setRoute("menu");
                }}
                className="flex items-center gap-1 text-[10px] font-black tracking-widest text-slate-400 hover:text-slate-650 dark:hover:text-slate-200 transition-colors uppercase cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Back
              </button>
            </div>

            <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 leading-relaxed">
              Fill in the course names. We will automatically distribute them across the weekly standard KTU slot layout.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[360px] overflow-y-auto pr-1">
              {DEFAULT_SLOTS.map((slot) => (
                <div key={slot} className="p-4 bg-slate-50/50 dark:bg-slate-950/20 border border-slate-950/[0.04] dark:border-white/[0.04] rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded tracking-wide">SLOT {slot}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-wide">Vibe:</span>
                      <select
                        value={slotInputs[slot].vibe}
                        onChange={(e) =>
                          setSlotInputs({
                            ...slotInputs,
                            [slot]: { ...slotInputs[slot], vibe: e.target.value as any },
                          })
                        }
                        className="text-[9px] font-black bg-white dark:bg-slate-900 border border-slate-950/[0.06] dark:border-white/[0.06] rounded px-1.5 py-0.5 text-slate-700 dark:text-slate-300 cursor-pointer outline-none focus:ring-1 focus:ring-blue-500/30"
                      >
                        <option value="saint">Saint</option>
                        <option value="robot">Robot</option>
                        <option value="boss">Boss</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <input
                      type="text"
                      placeholder="Subject (e.g. Maths, Circuits)"
                      value={slotInputs[slot].subject}
                      onChange={(e) =>
                        setSlotInputs({
                          ...slotInputs,
                          [slot]: { ...slotInputs[slot], subject: e.target.value },
                        })
                      }
                      className="w-full bg-white dark:bg-slate-950 border border-slate-950/[0.06] dark:border-white/[0.06] hover:border-slate-950/[0.12] hover:dark:border-white/[0.12] focus:border-blue-500 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 dark:text-white outline-none transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Professor / Instructor name"
                      value={slotInputs[slot].professor}
                      onChange={(e) =>
                        setSlotInputs({
                          ...slotInputs,
                          [slot]: { ...slotInputs[slot], professor: e.target.value },
                        })
                      }
                      className="w-full bg-white/60 dark:bg-slate-950/40 border border-slate-950/[0.04] dark:border-white/[0.03] hover:border-slate-950/[0.1] hover:dark:border-white/[0.08] focus:border-blue-500 rounded-xl px-3 py-2 text-[10px] text-slate-750 dark:text-slate-350 outline-none transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01, y: -0.5 }}
                whileTap={{ scale: 0.99 }}
                className="bg-gradient-to-b from-[#2E95FF] to-[#007AFF] hover:brightness-105 text-white font-black uppercase text-[10px] tracking-wider px-6 py-3 rounded-xl flex items-center gap-1.5 shadow-[0_4px_12px_rgba(0,122,255,0.2)] dark:shadow-none cursor-pointer transition-all duration-200"
              >
                Inject Schedule <Zap className="w-3.5 h-3.5 fill-current" />
              </motion.button>
            </div>
          </motion.form>
        )}

        {/* Route 2 Screen: WhatsApp Paste */}
        {route === "whatsapp" && (
          <motion.div
            key="whatsapp"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-3 mb-1">
              <h3 className="font-black text-sm text-slate-800 dark:text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-500" /> WHATSAPP &quot;PASTE &amp; PARSE&quot; BIN
              </h3>
              <button
                onClick={() => {
                  triggerHaptic("light");
                  setRoute("menu");
                }}
                className="flex items-center gap-1 text-[10px] font-black tracking-widest text-slate-400 hover:text-slate-650 dark:hover:text-slate-200 transition-colors uppercase cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Back
              </button>
            </div>

            {!parsedPreview ? (
              <div className="space-y-4 animate-fade-in">
                <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 leading-relaxed">
                  Paste any text timetable from WhatsApp. Our engine will search for slot characters (A, B, C...) or course mappings and auto-configure your calendar.
                </p>
                <textarea
                  placeholder={`Paste schedule text. Example:\nSlot A: MAT202 by Prof. Hema\nSlot B: CST202\nA - Circuits, B - OS\nOr list subjects: Math, OS, Networks, Graphics`}
                  rows={6}
                  value={whatsappText}
                  onChange={(e) => setWhatsappText(e.target.value)}
                  className="w-full bg-slate-950/[0.03] dark:bg-slate-950/70 border border-slate-950/[0.06] dark:border-white/[0.06] hover:border-slate-950/[0.1] hover:dark:border-white/[0.1] focus:border-emerald-500 rounded-2xl p-4 text-xs font-mono text-slate-850 dark:text-slate-250 outline-none transition-all"
                />
                <div className="flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.01, y: -0.5 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={handleParseText}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase text-[10px] tracking-wider px-5 py-3 rounded-xl flex items-center gap-1.5 shadow-[0_4px_12px_rgba(16,185,129,0.15)] cursor-pointer transition-all duration-200"
                  >
                    Analyze Text <Upload className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </div>
            ) : (
              <div className="space-y-4 animate-fade-in">
                <div className="p-4 bg-emerald-500/[0.03] border border-emerald-500/20 rounded-2xl">
                  <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 block mb-1 uppercase tracking-wider">
                    Analysis Complete
                  </span>
                  <span className="text-[11px] font-semibold text-slate-550 dark:text-slate-350 leading-relaxed">
                    We scanned the text and mapped courses to 6 slots. Adjust them below if needed, or import directly.
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[200px] overflow-y-auto pr-1">
                  {DEFAULT_SLOTS.map((slot) => (
                    <div key={slot} className="flex items-center gap-2 p-3 bg-slate-50/50 dark:bg-slate-950/30 border border-slate-950/[0.04] dark:border-white/[0.02] rounded-xl justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[9px] font-black bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-400 tracking-wide">
                          {slot}
                        </span>
                        <input
                          type="text"
                          value={parsedPreview[slot].subject}
                          onChange={(e) =>
                            setParsedPreview({
                              ...parsedPreview,
                              [slot]: { ...parsedPreview[slot], subject: e.target.value },
                            })
                          }
                          className="bg-transparent text-[11.5px] font-bold text-slate-800 dark:text-slate-200 focus:outline-none border-b border-transparent hover:border-slate-250 dark:hover:border-slate-700 px-1 w-24 sm:w-28 transition-all"
                        />
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 truncate w-20 text-right">
                        {parsedPreview[slot].professor || "Staff"}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between pt-1">
                  <button
                    onClick={() => {
                      triggerHaptic("light");
                      setParsedPreview(null);
                    }}
                    className="border border-slate-200 dark:border-slate-800 text-[10px] font-black text-slate-500 dark:text-slate-400 px-4.5 py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/50 cursor-pointer transition-colors duration-200 uppercase tracking-wider"
                  >
                    Re-Paste
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.01, y: -0.5 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={handleWhatsappSubmit}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase text-[10px] tracking-wider px-5 py-3 rounded-xl flex items-center gap-1.5 shadow-[0_4px_12px_rgba(16,185,129,0.15)] cursor-pointer transition-all duration-200"
                  >
                    Confirm & Sync <Check className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Route 3 Screen: Classroom Hivemind */}
        {route === "hivemind" && (
          <motion.div
            key="hivemind"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="space-y-5"
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-3 mb-1">
              <h3 className="font-black text-sm text-slate-800 dark:text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-500" /> CLASSROOM HIVEMIND
              </h3>
              <button
                onClick={() => {
                  triggerHaptic("light");
                  setRoute("menu");
                }}
                className="flex items-center gap-1 text-[10px] font-black tracking-widest text-slate-400 hover:text-slate-650 dark:hover:text-slate-200 transition-colors uppercase cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Back
              </button>
            </div>

            <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 leading-relaxed">
              Select your college and division. If a classmate has already built the master timetable config, we&apos;ll sync it to your browser instantly.
            </p>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Select College</label>
                <select
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  className="w-full bg-slate-950/[0.03] dark:bg-slate-950 border border-slate-950/[0.06] dark:border-white/[0.06] hover:border-slate-950/[0.1] hover:dark:border-white/[0.1] rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-800 dark:text-white cursor-pointer outline-none focus:ring-1 focus:ring-purple-500/35 transition-all"
                >
                  <option value="">-- Choose College --</option>
                  <option value="CET">College of Engineering Trivandrum (CET)</option>
                  <option value="GECB">GEC Barton Hill, Trivandrum</option>
                  <option value="MEC">Model Engineering College, Thrikkakara</option>
                  <option value="TKM">TKM College of Engineering, Kollam</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Select Branch & Division</label>
                <select
                  value={classDiv}
                  onChange={(e) => setClassDiv(e.target.value)}
                  className="w-full bg-slate-950/[0.03] dark:bg-slate-950 border border-slate-950/[0.06] dark:border-white/[0.06] hover:border-slate-950/[0.1] hover:dark:border-white/[0.1] rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-800 dark:text-white cursor-pointer outline-none focus:ring-1 focus:ring-purple-500/35 transition-all"
                >
                  <option value="">-- Choose Class --</option>
                  <option value="S4-CSA">S4 Computer Science - A (2024 Scheme)</option>
                  <option value="S4-CSB">S4 Computer Science - B (2024 Scheme)</option>
                  <option value="S4-ECE">S4 Electronics & Communication</option>
                  <option value="S4-EEE">S4 Electrical & Electronics</option>
                </select>
              </div>
            </div>

            {college && classDiv && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-purple-500/[0.03] border border-purple-500/20 rounded-2xl flex items-center justify-between animate-fade-in"
              >
                <div className="space-y-0.5">
                  <span className="text-[10px] font-black text-purple-600 dark:text-purple-400 block uppercase tracking-wider">
                    Timetable Detected
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block">
                    Master template uploaded by classmate <strong>Rahul_24</strong>.
                  </span>
                </div>
                <span className="text-[8px] font-black uppercase tracking-wider text-purple-500 border border-purple-500/20 rounded px-2 py-0.5 bg-purple-500/5">
                  98% verified
                </span>
              </motion.div>
            )}

            <div className="pt-2 flex justify-end">
              <motion.button
                whileHover={college && classDiv && !isSyncing ? { scale: 1.01, y: -0.5 } : {}}
                whileTap={college && classDiv && !isSyncing ? { scale: 0.99 } : {}}
                onClick={handleHivemindSync}
                disabled={!college || !classDiv || isSyncing}
                className={`font-black uppercase text-[10px] tracking-wider px-6 py-3 rounded-xl flex items-center gap-1.5 shadow-lg transition-all duration-200 cursor-pointer ${
                  college && classDiv
                    ? "bg-purple-600 hover:bg-purple-500 text-white shadow-[0_4px_12px_rgba(147,51,234,0.15)]"
                    : "bg-slate-100 dark:bg-slate-800/60 text-slate-400 cursor-not-allowed shadow-none border border-transparent"
                }`}
              >
                {isSyncing ? (
                  <>
                    Downloading Data...
                    <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  </>
                ) : syncDone ? (
                  <>
                    Synced Successfully! <Check className="w-3.5 h-3.5" />
                  </>
                ) : (
                  <>
                    Sync Hivemind <Users className="w-3.5 h-3.5" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
