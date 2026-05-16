"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Circle, ChevronDown, BookOpen, FileText, ChevronRight } from "lucide-react";

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

const subjects = Object.keys(syllabusData);

export default function SyllabusPage() {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [expandedModules, setExpandedModules] = useState<number[]>([1]);
  const [moduleProgress, setModuleProgress] = useState<Record<string, Record<number, boolean>>>({});

  const modules = syllabusData[selectedSubject] || [];
  const completedCount = modules.filter((m) => moduleProgress[selectedSubject]?.[m.module] || m.completed).length;

  const toggleModule = (module: number) => {
    setExpandedModules((prev) =>
      prev.includes(module) ? prev.filter((m) => m !== module) : [...prev, module]
    );
  };

  const toggleComplete = (moduleNum: number) => {
    setModuleProgress((prev) => {
      const subject = prev[selectedSubject] || {};
      return {
        ...prev,
        [selectedSubject]: {
          ...subject,
          [moduleNum]: !subject[moduleNum],
        },
      };
    });
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <div className="pt-4 z-50 relative w-full">
        <Navbar />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/dashboard" className="w-9 h-9 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-fg)]">Syllabus</h1>
            <p className="text-sm text-[var(--color-muted)]">Module-wise syllabus tracker for 2024 scheme</p>
          </div>
        </div>

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
                      ? 'bg-[var(--color-accent-light)] text-[var(--color-accent)] font-semibold'
                      : 'text-[var(--color-muted)] hover:bg-[var(--color-accent-light)]'
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
                  <p className="text-sm text-[var(--color-muted)] mt-1">
                    {completedCount}/{modules.length} modules completed
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 rounded-full bg-[var(--color-border)] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[var(--color-accent-light)]0 transition-all"
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
                  return (
                    <div key={mod.module} className="border border-[var(--color-border)] rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleModule(mod.module)}
                        className="w-full flex items-center gap-3 p-4 text-left hover:bg-[var(--color-accent-light)] transition-colors"
                      >
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleComplete(mod.module); }}
                          className="shrink-0"
                        >
                          {(moduleProgress[selectedSubject]?.[mod.module] || mod.completed) ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          ) : (
                            <Circle className="w-5 h-5 text-[var(--color-border)]" />
                          )}
                        </button>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent-light)] px-2 py-0.5 rounded-md">
                              M{mod.module}
                            </span>
                            <span className="text-sm font-semibold text-[var(--color-fg)]">{mod.title}</span>
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-[var(--color-muted)] transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
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
                          <div className="flex gap-2 mt-3 ml-8">
                            <Link
                              href={`/notes?subject=${encodeURIComponent(selectedSubject)}`}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-accent-light)] text-[var(--color-accent)] text-xs font-medium hover:bg-[var(--color-accent-mid)] transition-colors"
                            >
                              <BookOpen className="w-3.5 h-3.5" />
                              Notes
                            </Link>
                            <Link
                              href={`/pyqs?subject=${encodeURIComponent(selectedSubject)}`}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-accent-light)] text-[var(--color-accent)] text-xs font-medium hover:bg-[var(--color-accent-mid)] transition-colors"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              PYQs
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
