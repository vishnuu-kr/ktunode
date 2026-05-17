"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen, FileText, GraduationCap, ArrowRight, Users, Star, Clock,
  BookMarked, BrainCircuit, Search, Filter, ChevronDown, Download, Eye,
  CheckCircle2, Circle, ChevronRight, Calendar,
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const branches: Record<string, string> = {
  cs: "Computer Science",
  ec: "Electronics & Communication",
  ee: "Electrical & Electronics",
  me: "Mechanical Engineering",
  ce: "Civil Engineering",
};

const subjectsBySem: Record<string, Record<string, string[]>> = {
  cs: {
    "1": ["Calculus", "Engineering Physics", "Engineering Chemistry", "Problem Solving & Programming", "Engineering Mechanics"],
    "2": ["Linear Algebra", "Data Structures", "Digital Electronics", "Discrete Mathematics", "Professional Communication"],
    "3": ["Operating Systems", "Database Systems", "Computer Networks", "Object-Oriented Programming", "Theory of Computation"],
    "4": ["Design & Analysis of Algorithms", "Software Engineering", "Compiler Design", "Computer Architecture", "Machine Learning"],
  },
};

const notesData: Record<string, { name: string; modules: number; notes: number }[]> = {
  "1": [
    { name: "Calculus", modules: 5, notes: 8 },
    { name: "Engineering Physics", modules: 5, notes: 6 },
    { name: "Engineering Chemistry", modules: 5, notes: 7 },
    { name: "Problem Solving & Programming", modules: 4, notes: 10 },
    { name: "Engineering Mechanics", modules: 5, notes: 5 },
  ],
  "2": [
    { name: "Linear Algebra", modules: 4, notes: 6 },
    { name: "Data Structures", modules: 5, notes: 12 },
    { name: "Digital Electronics", modules: 5, notes: 8 },
    { name: "Discrete Mathematics", modules: 4, notes: 6 },
    { name: "Professional Communication", modules: 3, notes: 4 },
  ],
  "3": [
    { name: "Operating Systems", modules: 5, notes: 14 },
    { name: "Database Systems", modules: 5, notes: 11 },
    { name: "Computer Networks", modules: 5, notes: 9 },
    { name: "Object-Oriented Programming", modules: 4, notes: 10 },
    { name: "Theory of Computation", modules: 5, notes: 7 },
  ],
  "4": [
    { name: "Design & Analysis of Algorithms", modules: 5, notes: 12 },
    { name: "Software Engineering", modules: 4, notes: 8 },
    { name: "Compiler Design", modules: 5, notes: 9 },
    { name: "Computer Architecture", modules: 5, notes: 7 },
    { name: "Machine Learning", modules: 5, notes: 11 },
  ],
};

const pyqData = [
  { subject: "Operating Systems", sem: "3", year: "2024", month: "Dec", type: "Regular" },
  { subject: "Operating Systems", sem: "3", year: "2024", month: "June", type: "Regular" },
  { subject: "Database Systems", sem: "3", year: "2024", month: "Dec", type: "Regular" },
  { subject: "Database Systems", sem: "3", year: "2023", month: "Dec", type: "Regular" },
  { subject: "Computer Networks", sem: "3", year: "2024", month: "Dec", type: "Regular" },
  { subject: "Computer Networks", sem: "3", year: "2024", month: "June", type: "Regular" },
  { subject: "OOP", sem: "3", year: "2024", month: "Dec", type: "Regular" },
  { subject: "Theory of Computation", sem: "3", year: "2024", month: "Dec", type: "Regular" },
  { subject: "Data Structures", sem: "2", year: "2024", month: "Dec", type: "Regular" },
  { subject: "Data Structures", sem: "2", year: "2024", month: "June", type: "Regular" },
  { subject: "Calculus", sem: "1", year: "2024", month: "Dec", type: "Regular" },
  { subject: "Engineering Physics", sem: "1", year: "2024", month: "June", type: "Regular" },
];

const syllabusData: Record<string, { module: number; title: string; topics: string[]; completed?: boolean }[]> = {
  "Operating Systems": [
    { module: 1, title: "Introduction to OS", topics: ["OS structures", "System calls", "Process concepts", "Threads"], completed: true },
    { module: 2, title: "Process Scheduling", topics: ["CPU scheduling", "Scheduling algorithms", "Thread scheduling"], completed: true },
    { module: 3, title: "Process Synchronization", topics: ["Critical section", "Semaphores", "Deadlocks", "Banker's algorithm"], completed: false },
    { module: 4, title: "Memory Management", topics: ["Contiguous allocation", "Paging", "Segmentation", "Virtual memory"], completed: false },
    { module: 5, title: "File Systems & I/O", topics: ["File concepts", "Directory structure", "Disk scheduling", "I/O systems"], completed: false },
  ],
  "Database Systems": [
    { module: 1, title: "Relational Databases", topics: ["ER model", "Relational model", "Keys", "SQL basics"], completed: true },
    { module: 2, title: "SQL & Query Processing", topics: ["Joins", "Subqueries", "Views", "Indexing"], completed: true },
    { module: 3, title: "Normalization", topics: ["Functional dependencies", "Normal forms", "Decomposition"], completed: false },
    { module: 4, title: "Transaction Management", topics: ["ACID properties", "Concurrency control", "Recovery"], completed: false },
    { module: 5, title: "NoSQL & Advanced Topics", topics: ["Document stores", "Key-value stores", "Graph databases"], completed: false },
  ],
  "Computer Networks": [
    { module: 1, title: "Network Fundamentals", topics: ["OSI model", "TCP/IP", "Network topologies", "Transmission media"], completed: true },
    { module: 2, title: "Data Link Layer", topics: ["Error detection", "Flow control", "MAC protocols", "Ethernet"], completed: true },
    { module: 3, title: "Network Layer", topics: ["IP addressing", "Routing algorithms", "IPv4/IPv6"], completed: false },
    { module: 4, title: "Transport Layer", topics: ["TCP/UDP", "Congestion control", "Flow control"], completed: false },
    { module: 5, title: "Application Layer", topics: ["HTTP/DNS", "SMTP", "FTP", "Network security"], completed: false },
  ],
};

const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"];

type Tab = "overview" | "notes" | "pyqs" | "syllabus";

// ── Tab bar ───────────────────────────────────────────────────────────────────

const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "notes", label: "Notes", icon: BookMarked },
  { id: "pyqs", label: "PYQs", icon: BrainCircuit },
  { id: "syllabus", label: "Syllabus", icon: GraduationCap },
];

// ── Overview tab ──────────────────────────────────────────────────────────────

function OverviewTab({ branch, sem, subjects }: { branch: string; sem: string; subjects: string[] }) {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: BookOpen, label: "Subjects", value: subjects.length.toString() },
          { icon: FileText, label: "PYQs Available", value: "24" },
          { icon: Star, label: "Modules Covered", value: "18/24" },
          { icon: Clock, label: "Hours Saved", value: "40+" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-4"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--color-accent-light)] text-[var(--color-accent)] mb-3">
              <stat.icon className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-[var(--color-fg)]">{stat.value}</div>
            <div className="text-sm text-[var(--color-muted)]">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Subjects list */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-[var(--color-fg)]">Semester {sem} — Subjects</h2>
          <span className="text-sm text-[var(--color-muted)]">{subjects.length} subjects</span>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {subjects.map((subject, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[var(--color-accent-light)] border border-[var(--color-border)]">
              <div className="w-8 h-8 rounded-lg bg-white text-[var(--color-accent)] flex items-center justify-center text-xs font-bold border border-[var(--color-border)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <span className="text-sm font-medium text-[var(--color-fg)] flex-1">{subject}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent activity */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6">
        <h2 className="text-lg font-bold text-[var(--color-fg)] mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {[
            { action: "Viewed PYQ — 2024 Dec", time: "2 hours ago", icon: FileText },
            { action: "Downloaded notes — Data Structures", time: "Yesterday", icon: BookOpen },
            { action: "Marked module complete — OS Module 3", time: "2 days ago", icon: GraduationCap },
            { action: "Joined study group — CS S3", time: "3 days ago", icon: Users },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--color-accent-light)] transition-colors">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-border)] text-[var(--color-muted)] flex items-center justify-center">
                <item.icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[var(--color-fg)]">{item.action}</div>
                <div className="text-xs text-[var(--color-muted)]">{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Notes tab ─────────────────────────────────────────────────────────────────

function NotesTab({ sem }: { sem: string }) {
  const [search, setSearch] = useState("");
  const [semFilter, setSemFilter] = useState(sem);
  const [semOpen, setSemOpen] = useState(false);

  const subjects = notesData[semFilter] || notesData["3"];
  const filtered = subjects.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-5">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted)]" />
          <input
            type="text"
            placeholder="Search subjects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl text-sm text-[var(--color-fg)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20"
          />
        </div>
        <div className="relative">
          <button
            onClick={() => setSemOpen(!semOpen)}
            className="flex items-center gap-2 px-5 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl text-sm font-medium text-[var(--color-fg)] hover:border-blue-200 transition-colors"
          >
            <Filter className="w-4 h-4 text-[var(--color-muted)]" />
            Semester {semFilter}
            <ChevronDown className="w-4 h-4 text-[var(--color-muted)]" />
          </button>
          {semOpen && (
            <div className="absolute top-full right-0 mt-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-xl z-30 py-2 w-40">
              {semesters.map((s) => (
                <button
                  key={s}
                  onClick={() => { setSemFilter(s); setSemOpen(false); }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-[var(--color-accent-light)] ${semFilter === s ? "text-[var(--color-accent)] font-semibold bg-[var(--color-accent-light)]" : "text-[var(--color-muted)]"}`}
                >
                  Semester {s}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <BookOpen className="w-12 h-12 text-[var(--color-border)] mx-auto mb-4" />
          <p className="text-[var(--color-muted)]">No subjects found for &ldquo;{search}&rdquo;</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((subject, i) => (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-5 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center">
                  <BookMarked className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-[var(--color-fg)] truncate">{subject.name}</h3>
                  <p className="text-xs text-[var(--color-muted)]">{subject.modules} modules · {subject.notes} notes</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  {Array.from({ length: subject.modules }, (_, j) => (
                    <span key={j} className="w-6 h-6 rounded-md bg-[var(--color-accent-light)] text-[var(--color-accent)] text-[10px] font-bold flex items-center justify-center">
                      M{j + 1}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-slate-50 text-[var(--color-muted)] hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)] transition-colors" aria-label={`View ${subject.name}`}>
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg bg-slate-50 text-[var(--color-muted)] hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)] transition-colors" aria-label={`Download ${subject.name}`}>
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── PYQs tab ──────────────────────────────────────────────────────────────────

function PYQsTab({ sem }: { sem: string }) {
  const [search, setSearch] = useState("");
  const [semFilter, setSemFilter] = useState(sem);
  const [semOpen, setSemOpen] = useState(false);

  const filtered = pyqData.filter((pyq) => {
    const matchesSem = semFilter === "all" || pyq.sem === semFilter;
    const matchesSearch = pyq.subject.toLowerCase().includes(search.toLowerCase());
    return matchesSem && matchesSearch;
  });

  return (
    <div className="space-y-5">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted)]" />
          <input
            type="text"
            placeholder="Search by subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl text-sm text-[var(--color-fg)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20"
          />
        </div>
        <div className="relative">
          <button
            onClick={() => setSemOpen(!semOpen)}
            className="flex items-center gap-2 px-5 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl text-sm font-medium text-[var(--color-fg)] hover:border-blue-200 transition-colors"
          >
            <Filter className="w-4 h-4 text-[var(--color-muted)]" />
            {semFilter === "all" ? "All Semesters" : `Semester ${semFilter}`}
            <ChevronDown className="w-4 h-4 text-[var(--color-muted)]" />
          </button>
          {semOpen && (
            <div className="absolute top-full right-0 mt-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-xl z-30 py-2 w-44">
              <button
                onClick={() => { setSemFilter("all"); setSemOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-[var(--color-accent-light)] ${semFilter === "all" ? "text-[var(--color-accent)] font-semibold bg-[var(--color-accent-light)]" : "text-[var(--color-muted)]"}`}
              >
                All Semesters
              </button>
              {semesters.map((s) => (
                <button
                  key={s}
                  onClick={() => { setSemFilter(s); setSemOpen(false); }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-[var(--color-accent-light)] ${semFilter === s ? "text-[var(--color-accent)] font-semibold bg-[var(--color-accent-light)]" : "text-[var(--color-muted)]"}`}
                >
                  Semester {s}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <FileText className="w-12 h-12 text-[var(--color-border)] mx-auto mb-4" />
          <p className="text-[var(--color-muted)]">No PYQs found for your search.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((pyq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-[var(--color-fg)] mb-1">{pyq.subject}</h3>
                  <div className="flex items-center gap-3 text-xs text-[var(--color-muted)]">
                    <span className="flex items-center gap-1"><GraduationCap className="w-3.5 h-3.5" />S{pyq.sem}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{pyq.month} {pyq.year}</span>
                    <span className="px-2 py-0.5 rounded-full bg-[var(--color-border)] text-[var(--color-muted)]">{pyq.type}</span>
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button className="p-2 rounded-lg bg-[var(--color-accent-light)] text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors" aria-label={`View ${pyq.subject}`}>
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg bg-[var(--color-accent-light)] text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors" aria-label={`Download ${pyq.subject}`}>
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      {filtered.length > 0 && (
        <p className="text-center text-sm text-[var(--color-muted)]">
          Showing {filtered.length} of {pyqData.length} question papers
        </p>
      )}
    </div>
  );
}

// ── Syllabus tab ──────────────────────────────────────────────────────────────

function SyllabusTab() {
  const subjects = Object.keys(syllabusData);
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [expandedModules, setExpandedModules] = useState<number[]>([1]);
  const [moduleProgress, setModuleProgress] = useState<Record<string, Record<number, boolean>>>({});

  const modules = syllabusData[selectedSubject] || [];
  const completedCount = modules.filter((m) => moduleProgress[selectedSubject]?.[m.module] || m.completed).length;

  const toggleModule = (mod: number) =>
    setExpandedModules((prev) => prev.includes(mod) ? prev.filter((m) => m !== mod) : [...prev, mod]);

  const toggleComplete = (modNum: number) =>
    setModuleProgress((prev) => ({
      ...prev,
      [selectedSubject]: { ...(prev[selectedSubject] || {}), [modNum]: !(prev[selectedSubject]?.[modNum]) },
    }));

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {/* Subject sidebar */}
      <div className="md:col-span-1">
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-3">
          <p className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider px-3 py-2">Subjects</p>
          {subjects.map((sub) => (
            <button
              key={sub}
              onClick={() => { setSelectedSubject(sub); setExpandedModules([1]); }}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-colors ${
                selectedSubject === sub
                  ? "bg-[var(--color-accent-light)] text-[var(--color-accent)] font-semibold"
                  : "text-[var(--color-muted)] hover:bg-[var(--color-accent-light)]"
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      {/* Module content */}
      <div className="md:col-span-3">
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-[var(--color-fg)]">{selectedSubject}</h2>
              <p className="text-sm text-[var(--color-muted)] mt-1">{completedCount}/{modules.length} modules completed</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-20 h-2 rounded-full bg-[var(--color-border)] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[var(--color-accent)] transition-all"
                  style={{ width: `${(completedCount / modules.length) * 100}%` }}
                />
              </div>
              <span className="text-sm font-bold text-[var(--color-accent)]">
                {Math.round((completedCount / modules.length) * 100)}%
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {modules.map((mod) => {
              const isExpanded = expandedModules.includes(mod.module);
              const isDone = moduleProgress[selectedSubject]?.[mod.module] || mod.completed;
              return (
                <div key={mod.module} className="border border-[var(--color-border)] rounded-xl overflow-hidden">
                  <div
                    className="flex items-center gap-3 p-4 hover:bg-[var(--color-accent-light)] transition-colors cursor-pointer"
                    onClick={() => toggleModule(mod.module)}
                  >
                    <button
                      type="button"
                      aria-label={`Mark module ${mod.module} as ${isDone ? "incomplete" : "complete"}`}
                      onClick={(e) => { e.stopPropagation(); toggleComplete(mod.module); }}
                      className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-full"
                    >
                      {isDone
                        ? <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        : <Circle className="w-5 h-5 text-[var(--color-border)]" />
                      }
                    </button>
                    <div className="flex-1 min-w-0 flex items-center gap-2">
                      <span className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent-light)] px-2 py-0.5 rounded-md">M{mod.module}</span>
                      <span className="text-sm font-semibold text-[var(--color-fg)]">{mod.title}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-[var(--color-muted)] transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </div>
                  {isExpanded && (
                    <div className="px-4 pb-4 pt-0">
                      <ul className="space-y-1.5 ml-8">
                        {mod.topics.map((topic, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                            <ChevronRight className="w-3 h-3 text-[var(--color-border)]" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main dashboard ────────────────────────────────────────────────────────────

function DashboardContent() {
  const searchParams = useSearchParams();
  const branch = searchParams.get("branch") || "cs";
  const sem = searchParams.get("sem") || "3";
  const subjects = subjectsBySem[branch]?.[sem] || subjectsBySem.cs["3"];

  const [activeTab, setActiveTab] = useState<Tab>("overview");

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <div className="pt-4 z-50 relative w-full">
        <Navbar />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-fg)]">Dashboard</h1>
            <p className="text-[var(--color-muted)] mt-1">
              {branches[branch] || "Computer Science"} · Semester {sem} · 2024 Scheme
            </p>
          </div>
          <Link
            href="/"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            Change branch / semester
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Tab bar */}
        <div className="flex gap-1 p-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl mb-8 w-fit">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[var(--color-accent)] text-white shadow-sm"
                    : "text-[var(--color-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-accent-light)]"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {activeTab === "overview" && <OverviewTab branch={branch} sem={sem} subjects={subjects} />}
          {activeTab === "notes" && <NotesTab sem={sem} />}
          {activeTab === "pyqs" && <PYQsTab sem={sem} />}
          {activeTab === "syllabus" && <SyllabusTab />}
        </motion.div>
      </main>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center">
        <div className="text-[var(--color-muted)]">Loading dashboard...</div>
      </div>
    }>
      <DashboardContent />
    </Suspense>
  );
}
