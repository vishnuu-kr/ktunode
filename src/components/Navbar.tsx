"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Notes", href: "/notes" },
  { label: "PYQs", href: "/pyqs" },
  { label: "Syllabus", href: "/syllabus" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div className="w-full flex justify-center px-4">
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-2xl border border-[var(--color-border)] bg-white/90 px-5 py-3 shadow-sm backdrop-blur-md">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent)] text-white text-sm font-bold">
            K
          </div>
          <span className="text-base font-bold tracking-tight text-[var(--color-fg)]">
            KTU NODE
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                isActive(link.href)
                  ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-semibold"
                  : "text-[var(--color-muted)] hover:text-[var(--color-fg)] hover:bg-black/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex md:hidden items-center justify-center w-9 h-9 rounded-lg text-[var(--color-muted)] hover:bg-black/5 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-0 z-50 flex md:hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="relative ml-auto w-72 h-full bg-white shadow-xl p-6 pt-20">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                      : "text-[var(--color-muted)] hover:bg-black/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-sm text-[var(--color-muted)] hover:bg-black/5 transition-colors"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
