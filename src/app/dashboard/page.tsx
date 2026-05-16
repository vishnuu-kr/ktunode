"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { BookOpen, FileText, GraduationCap, ArrowRight, Users, Star, Clock, BookMarked, BrainCircuit } from "lucide-react";

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

const quickLinks = [
  { href: "/notes", icon: BookMarked, label: "Notes", desc: "Chapter-wise study material", color: "blue" },
  { href: "/pyqs", icon: BrainCircuit, label: "PYQs", desc: "Previous year question papers", color: "indigo" },
  { href: "/syllabus", icon: GraduationCap, label: "Syllabus", desc: "Module-wise syllabus tracker", color: "purple" },
];

function DashboardContent() {
  const searchParams = useSearchParams();
  const branch = searchParams.get("branch") || "cs";
  const sem = searchParams.get("sem") || "3";
  const subjects = subjectsBySem[branch]?.[sem] || subjectsBySem.cs["3"];

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
              {branches[branch] || "Computer Science"} &middot; Semester {sem} &middot; 2024 Scheme
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

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: BookOpen, label: "Subjects", value: subjects.length.toString(), color: "blue" },
            { icon: FileText, label: "PYQs Available", value: "24", color: "indigo" },
            { icon: Star, label: "Modules Covered", value: "18/24", color: "amber" },
            { icon: Clock, label: "Hours Saved", value: "40+", color: "emerald" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--color-accent-light)] text-[var(--color-accent)] mb-3`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-[var(--color-fg)]">{stat.value}</div>
              <div className="text-sm text-[var(--color-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-5 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--color-accent-light)] text-[var(--color-accent)]`}>
                  <link.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[var(--color-fg)] group-hover:text-[var(--color-accent)] transition-colors">{link.label}</div>
                  <div className="text-sm text-[var(--color-muted)]">{link.desc}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-[var(--color-border)] group-hover:text-[var(--color-accent)] transition-colors" />
              </div>
            </Link>
          ))}
        </div>

        {/* Current Semester Subjects */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-[var(--color-fg)]">Semester {sem} — Subjects</h2>
            <span className="text-sm text-[var(--color-muted)]">{subjects.length} subjects</span>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {subjects.map((subject, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[var(--color-accent-light)] border border-[var(--color-border)]">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center text-xs font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="text-sm font-medium text-[var(--color-fg)]">{subject}</span>
                <div className="ml-auto flex gap-1">
                  <Link href={`/notes?subject=${encodeURIComponent(subject)}&sem=${sem}&branch=${branch}`} className="px-3 py-1 text-xs rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] hover:bg-[var(--color-accent-mid)] transition-colors">
                    Notes
                  </Link>
                  <Link href={`/pyqs?subject=${encodeURIComponent(subject)}&sem=${sem}&branch=${branch}`} className="px-3 py-1 text-xs rounded-full bg-indigo-50 text-[var(--color-accent)] hover:bg-[var(--color-accent-mid)] transition-colors">
                    PYQs
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
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
