"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FileText, Search, Filter, ChevronDown, Download, Eye, ArrowLeft, Calendar, GraduationCap } from "lucide-react";

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

const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"];

function PYQsContent() {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get("subject") || "";
  const [selectedSem, setSelectedSem] = useState("all");
  const [search, setSearch] = useState(initialSubject);
  const [semOpen, setSemOpen] = useState(false);

  const filtered = pyqData.filter((pyq) => {
    const matchesSem = selectedSem === "all" || pyq.sem === selectedSem;
    const matchesSearch = pyq.subject.toLowerCase().includes(search.toLowerCase());
    return matchesSem && matchesSearch;
  });

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
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-fg)]">Previous Year Questions</h1>
            <p className="text-sm text-[var(--color-muted)]">Practice with real exam papers</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
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
              className="flex items-center gap-2 px-5 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl text-sm font-medium text-[var(--color-fg)] hover:border-[var(--color-border)] transition-colors"
            >
              <Filter className="w-4 h-4 text-[var(--color-muted)]" />
              {selectedSem === "all" ? "All Semesters" : `Semester ${selectedSem}`}
              <ChevronDown className="w-4 h-4 text-[var(--color-muted)]" />
            </button>
            {semOpen && (
              <div className="absolute top-full right-0 mt-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-xl z-30 py-2 w-44">
                <button
                  onClick={() => { setSelectedSem("all"); setSemOpen(false); }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-[var(--color-accent-light)] ${selectedSem === "all" ? 'text-[var(--color-accent)] font-semibold bg-[var(--color-accent-light)]' : 'text-[var(--color-muted)]'}`}
                >
                  All Semesters
                </button>
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

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <FileText className="w-12 h-12 text-[var(--color-border)] mx-auto mb-4" />
            <p className="text-[var(--color-muted)]">No PYQs found for your search.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((pyq, i) => (
              <div key={i} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-5 hover:shadow-md transition-shadow group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-[var(--color-fg)] mb-1">{pyq.subject}</h3>
                    <div className="flex items-center gap-3 text-xs text-[var(--color-muted)]">
                      <span className="flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5" />
                        S{pyq.sem}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {pyq.month} {pyq.year}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[var(--color-border)] text-[var(--color-muted)]">{pyq.type}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button className="p-2 rounded-lg bg-[var(--color-accent-light)] text-[var(--color-muted)] hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)] transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-[var(--color-accent-light)] text-[var(--color-muted)] hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)] transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filtered.length > 0 && (
          <p className="text-center text-sm text-[var(--color-muted)] mt-6">
            Showing {filtered.length} of {pyqData.length} question papers
          </p>
        )}
      </main>
    </div>
  );
}

export default function PYQsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--color-bg)]" />}>
      <PYQsContent />
    </Suspense>
  );
}
