"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { BookOpen, Search, Filter, ChevronDown, Download, Eye, ArrowLeft, BookMarked } from "lucide-react";

const subjectData: Record<string, { name: string; modules: number; notes: number }[]> = {
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
};

const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"];

function NotesContent() {
  const searchParams = useSearchParams();
  const initialSem = searchParams.get("sem") || "3";
  const [selectedSem, setSelectedSem] = useState(initialSem);
  const [search, setSearch] = useState("");
  const [semOpen, setSemOpen] = useState(false);

  const subjects = subjectData[selectedSem] || subjectData["3"];
  const filtered = subjects.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

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
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-fg)]">Notes</h1>
            <p className="text-sm text-[var(--color-muted)]">Chapter-wise notes for every subject</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
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
              className="flex items-center gap-2 px-5 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl text-sm font-medium text-[var(--color-fg)] hover:border-slate-200 transition-colors"
            >
              <Filter className="w-4 h-4 text-[var(--color-muted)]" />
              Semester {selectedSem}
              <ChevronDown className="w-4 h-4 text-[var(--color-muted)]" />
            </button>
            {semOpen && (
              <div className="absolute top-full right-0 mt-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-xl z-30 py-2 w-40">
                {semesters.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setSelectedSem(s); setSemOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-[var(--color-accent-light)] ${selectedSem === s ? 'text-[var(--color-accent)] font-semibold bg-[var(--color-accent-light)]' : 'text-[var(--color-muted)]'}`}
                  >
                    Semester {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Notes grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="w-12 h-12 text-[var(--color-border)] mx-auto mb-4" />
            <p className="text-[var(--color-muted)]">No subjects found for &ldquo;{search}&rdquo;</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((subject) => (
              <div key={subject.name} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-5 hover:shadow-md transition-shadow group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center">
                    <BookMarked className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-[var(--color-fg)] truncate">{subject.name}</h3>
                    <p className="text-xs text-[var(--color-muted)]">{subject.modules} modules &middot; {subject.notes} notes</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {Array.from({ length: subject.modules }, (_, i) => (
                      <span key={i} className="w-6 h-6 rounded-md bg-[var(--color-accent-light)] text-[var(--color-accent)] text-[10px] font-bold flex items-center justify-center">
                        M{i + 1}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-slate-50 text-[var(--color-muted)] hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)] transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-slate-50 text-[var(--color-muted)] hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)] transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default function NotesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--color-bg)]" />}>
      <NotesContent />
    </Suspense>
  );
}
