import React from "react";
import Link from "next/link";
import { BookOpen, FileText, Calendar, GraduationCap } from "lucide-react";

const quickLinks = [
  { label: "Notes", href: "/notes", icon: BookOpen },
  { label: "PYQs", href: "/pyqs", icon: FileText },
  { label: "Syllabus", href: "/syllabus", icon: Calendar },
  { label: "Dashboard", href: "/dashboard", icon: GraduationCap },
];

const branches = [
  "Computer Science",
  "Electronics & Comm.",
  "Mechanical",
  "Civil",
  "Electrical & Electronics",
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent)] text-white text-sm font-bold">
                K
              </div>
              <span className="text-lg font-bold tracking-tight text-[var(--color-fg)]">
                KTU NODE
              </span>
            </div>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-xs">
              Premium notes, PYQs, and syllabus tracking designed for the 2024 KTU scheme.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-fg)] mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    <link.icon className="w-3.5 h-3.5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-fg)] mb-4">Branches</h4>
            <ul className="space-y-3">
              {branches.map((branch) => (
                <li key={branch}>
                  <Link
                    href={`/notes?branch=${encodeURIComponent(branch.toLowerCase().replace(/\s+/g, "-"))}`}
                    className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {branch}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Info */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-fg)] mb-4">Info</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/syllabus" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
                  2024 Scheme Syllabus
                </Link>
              </li>
              <li>
                <Link href="/pyqs" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
                  Previous Year Questions
                </Link>
              </li>
            </ul>
            <p className="text-xs text-[var(--color-muted)] mt-6">
              Made for KTU students.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--color-border)]">
          <p className="text-xs text-center text-[var(--color-muted)]">
            KTU NODE — Not affiliated with APJ Abdul Kalam Technological University.
          </p>
        </div>
      </div>
    </footer>
  );
}
