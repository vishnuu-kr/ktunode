"use client";

import React, { useState } from "react";
import { Zap, Users, FileText, ArrowRight, Upload, Sparkles, Check, HelpCircle } from "lucide-react";

type SlotConfig = {
  subject: string;
  professor: string;
  vibe: "saint" | "robot" | "boss";
};

type OnboardingWizardProps = {
  onComplete: (slots: Record<string, SlotConfig>, timetable: string[][]) => void;
};

const DEFAULT_SLOTS = ["A", "B", "C", "D", "E", "F"];

// Default rotating KTU matrix
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
    // Use default values if left blank
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
      // Look for Slot mappings like "Slot A: Math" or "A - OS" or "Slot B = Circuits"
      const slotMatch = line.match(/(?:slot\s+)?([a-fA-F])\s*[:=-]\s*(.+)/i);
      if (slotMatch) {
        const slotLetter = slotMatch[1].toUpperCase();
        const content = slotMatch[2].trim();
        // Split by prof if includes "by" or "/" or ","
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
      // Fallback: extract uppercase words of length 3-7 as subjects
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
      onComplete(parsedPreview, DEFAULT_TIMETABLE_MATRIX);
    }
  };

  // Hivemind Sync Animation and Complete
  const handleHivemindSync = () => {
    if (!college || !classDiv) return;
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncDone(true);
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
      }, 800);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/60 dark:border-white/[0.05] rounded-[32px] p-6 sm:p-8 shadow-2xl relative overflow-hidden transition-all duration-300">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {route === "menu" && (
        <div className="space-y-6 text-center">
          <div className="mx-auto w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <Zap className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">
              INITIALIZE TACTICAL COCKPIT
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-md mx-auto leading-relaxed">
              Unlock a real-time timetable cockpit with 0-friction setup. Select your onboarding vector to get started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {/* Route 1: 6-Field Slot Mapper */}
            <button
              onClick={() => setRoute("slots")}
              className="flex flex-col items-center justify-between p-5 rounded-[24px] border border-slate-200 dark:border-white/[0.04] bg-white/40 dark:bg-slate-900/20 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:bg-blue-50/10 dark:hover:bg-blue-950/10 transition-all duration-300 cursor-pointer text-center group active:scale-[0.98] h-full"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-all">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="my-3">
                <span className="block text-[13px] font-black text-slate-800 dark:text-slate-200">Slot Injector</span>
                <span className="block text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                  Define 6 subject slots & we map them across your calendar.
                </span>
              </div>
              <span className="text-[10px] font-bold text-blue-500 flex items-center gap-1 mt-1">
                Take 5s <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* Route 2: WhatsApp Paste & Parse */}
            <button
              onClick={() => setRoute("whatsapp")}
              className="flex flex-col items-center justify-between p-5 rounded-[24px] border border-slate-200 dark:border-white/[0.04] bg-white/40 dark:bg-slate-900/20 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:bg-emerald-50/10 dark:hover:bg-emerald-950/10 transition-all duration-300 cursor-pointer text-center group active:scale-[0.98] h-full"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-all">
                <FileText className="w-5 h-5" />
              </div>
              <div className="my-3">
                <span className="block text-[13px] font-black text-slate-800 dark:text-slate-200">WhatsApp Paste</span>
                <span className="block text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                  Paste the messy timetable text forwarded in your group chat.
                </span>
              </div>
              <span className="text-[10px] font-bold text-emerald-500 flex items-center gap-1 mt-1">
                Zero Input <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* Route 3: Classroom Hivemind */}
            <button
              onClick={() => setRoute("hivemind")}
              className="flex flex-col items-center justify-between p-5 rounded-[24px] border border-slate-200 dark:border-white/[0.04] bg-white/40 dark:bg-slate-900/20 hover:border-purple-500/40 dark:hover:border-purple-500/40 hover:bg-purple-50/10 dark:hover:bg-purple-950/10 transition-all duration-300 cursor-pointer text-center group active:scale-[0.98] h-full"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-110 transition-all">
                <Users className="w-5 h-5" />
              </div>
              <div className="my-3">
                <span className="block text-[13px] font-black text-slate-800 dark:text-slate-200">Hivemind Sync</span>
                <span className="block text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                  Import a schedule already configured by your classmates.
                </span>
              </div>
              <span className="text-[10px] font-bold text-purple-500 flex items-center gap-1 mt-1">
                Instant Sync <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Route 1 Screen: Slot Injector */}
      {route === "slots" && (
        <form onSubmit={handleSlotsSubmit} className="space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.05] pb-3 mb-2">
            <h3 className="font-black text-sm text-slate-800 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-500" /> SLOT INJECTOR SETUP
            </h3>
            <button
              type="button"
              onClick={() => setRoute("menu")}
              className="text-[10px] font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
            >
              BACK TO MODES
            </button>
          </div>

          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
            Fill in the course names. We will automatically distribute them across the weekly standard KTU slot layout.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DEFAULT_SLOTS.map((slot) => (
              <div key={slot} className="p-3 bg-slate-50 dark:bg-slate-900/30 border border-slate-150 dark:border-white/[0.02] rounded-2xl space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">SLOT {slot}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] font-bold text-slate-400">Vibe:</span>
                    <select
                      value={slotInputs[slot].vibe}
                      onChange={(e) =>
                        setSlotInputs({
                          ...slotInputs,
                          [slot]: { ...slotInputs[slot], vibe: e.target.value as any },
                        })
                      }
                      className="text-[9px] font-black bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-1.5 py-0.5 text-slate-700 dark:text-slate-350 cursor-pointer"
                    >
                      <option value="saint">Absolute Saint</option>
                      <option value="robot">Syllabus Robot</option>
                      <option value="boss">Final Boss</option>
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
                    className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/[0.05] rounded-lg px-2.5 py-1 text-[11px] font-bold text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500/30"
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
                    className="w-full bg-white/50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/[0.03] rounded-lg px-2.5 py-1 text-[10px] text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500/20"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black uppercase text-[10px] tracking-wider px-5 py-2.5 rounded-xl flex items-center gap-1.5 shadow-lg shadow-blue-500/20 cursor-pointer transition-all active:scale-95"
            >
              Inject Schedule <Zap className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      )}

      {/* Route 2 Screen: WhatsApp Paste */}
      {route === "whatsapp" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.05] pb-3 mb-1">
            <h3 className="font-black text-sm text-slate-800 dark:text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-500" /> WHATSAPP &quot;PASTE &amp; PARSE&quot; BIN
            </h3>
            <button
              onClick={() => setRoute("menu")}
              className="text-[10px] font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
            >
              BACK TO MODES
            </button>
          </div>

          {!parsedPreview ? (
            <div className="space-y-4">
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                Paste any text timetable from WhatsApp. Our engine will search for slot characters (A, B, C...) or course mappings and auto-configure your calendar.
              </p>
              <textarea
                placeholder={`Paste schedule text. Example:\nSlot A: MAT202 by Prof. Hema\nSlot B: CST202\nA - Circuits, B - OS\nOr list subjects: Math, OS, Networks, Graphics`}
                rows={6}
                value={whatsappText}
                onChange={(e) => setWhatsappText(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-white/[0.05] rounded-2xl p-3 text-xs font-mono text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500/30"
              />
              <div className="flex justify-end">
                <button
                  onClick={handleParseText}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase text-[10px] tracking-wider px-5 py-2.5 rounded-xl flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 cursor-pointer transition-all active:scale-95"
                >
                  Analyze Text <Upload className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-3 bg-emerald-500/[0.03] border border-emerald-500/20 rounded-2xl">
                <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 block mb-1">
                  ANALYSIS COMPLETE
                </span>
                <span className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  We scanned the text and mapped courses to 6 slots. Adjust them below if needed, or import directly.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[200px] overflow-y-auto pr-1">
                {DEFAULT_SLOTS.map((slot) => (
                  <div key={slot} className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-white/[0.02] rounded-xl justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-400">
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
                        className="bg-transparent text-[11px] font-bold text-slate-850 dark:text-slate-200 focus:outline-none border-b border-transparent hover:border-slate-200 dark:hover:border-slate-700 px-1 w-24 sm:w-28"
                      />
                    </div>
                    <span className="text-[9px] font-semibold text-slate-400 truncate w-20 text-right">
                      {parsedPreview[slot].professor || "Staff"}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-1">
                <button
                  onClick={() => setParsedPreview(null)}
                  className="border border-slate-200 dark:border-slate-800 text-[10px] font-bold text-slate-500 dark:text-slate-400 px-4 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/50 cursor-pointer"
                >
                  RE-PASTE
                </button>
                <button
                  onClick={handleWhatsappSubmit}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase text-[10px] tracking-wider px-5 py-2.5 rounded-xl flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 cursor-pointer transition-all active:scale-95"
                >
                  Confirm & Sync <Check className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Route 3 Screen: Classroom Hivemind */}
      {route === "hivemind" && (
        <div className="space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.05] pb-3 mb-1">
            <h3 className="font-black text-sm text-slate-800 dark:text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-500" /> CLASSROOM HIVEMIND
            </h3>
            <button
              onClick={() => setRoute("menu")}
              className="text-[10px] font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
            >
              BACK TO MODES
            </button>
          </div>

          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
            Select your college and division. If a classmate has already built the master timetable config, we&apos;ll sync it to your browser instantly.
          </p>

          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Select College</label>
              <select
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/[0.05] rounded-xl px-3 py-2 text-xs font-bold text-slate-800 dark:text-white cursor-pointer"
              >
                <option value="">-- Choose College --</option>
                <option value="CET">College of Engineering Trivandrum (CET)</option>
                <option value="GECB">GEC Barton Hill, Trivandrum</option>
                <option value="MEC">Model Engineering College, Thrikkakara</option>
                <option value="TKM">TKM College of Engineering, Kollam</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Select Branch & Division</label>
              <select
                value={classDiv}
                onChange={(e) => setClassDiv(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/[0.05] rounded-xl px-3 py-2 text-xs font-bold text-slate-800 dark:text-white cursor-pointer"
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
            <div className="p-3 bg-purple-500/[0.03] border border-purple-500/20 rounded-2xl flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[10px] font-black text-purple-600 dark:text-purple-400 block">
                  TIMETABLE DETECTED
                </span>
                <span className="text-[9px] text-slate-500 dark:text-slate-400 block">
                  Master template uploaded by classmate <strong>Rahul_24</strong>.
                </span>
              </div>
              <span className="text-[8px] font-bold uppercase tracking-wider text-purple-500 border border-purple-500/20 rounded px-1.5 py-0.5">
                98% verified
              </span>
            </div>
          )}

          <div className="pt-2 flex justify-end">
            <button
              onClick={handleHivemindSync}
              disabled={!college || !classDiv || isSyncing}
              className={`font-black uppercase text-[10px] tracking-wider px-5 py-2.5 rounded-xl flex items-center gap-1.5 shadow-lg transition-all active:scale-95 cursor-pointer ${
                college && classDiv
                  ? "bg-purple-600 hover:bg-purple-500 text-white shadow-purple-500/20"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed shadow-none"
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
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
