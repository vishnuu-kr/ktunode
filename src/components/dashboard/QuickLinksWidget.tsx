"use client";
import React, { useState, useEffect } from "react";
import { Link2, ExternalLink } from "lucide-react";

interface QuickLinkItem {
  title: string;
  url: string;
  category: string;
}

const defaultLinks: QuickLinkItem[] = [
  { title: "Official KTU Website", url: "https://ktu.edu.in", category: "Official Portal" },
  { title: "KTU Student Portal Login", url: "https://app.ktu.edu.in", category: "Official Portal" },
  { title: "KTU Academic Calendar", url: "https://ktu.edu.in/eu/acd/academicCalendars.htm", category: "Academic" },
  { title: "KTUNODE Syllabus Directory", url: "/tools", category: "Syllabus Hub" }
];

export default function QuickLinksWidget() {
  const [links, setLinks] = useState<QuickLinkItem[]>(defaultLinks);

  useEffect(() => {
    fetch("/api/config")
      .then((res) => res.json())
      .then((data) => {
        if (data?.quickLinks && data.quickLinks.length > 0) {
          setLinks(data.quickLinks);
        }
      })
      .catch((err) => console.error("Failed to load student quick links:", err));
  }, []);

  return (
    <div className="bg-white/65 dark:bg-slate-900/65 backdrop-blur-md border border-slate-950/[0.06] dark:border-white/[0.06] rounded-3xl p-4 sm:p-5 md:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.01),0_1px_2px_rgba(0,0,0,0.01)] dark:shadow-none">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-blue-500/[0.06] dark:bg-blue-500/[0.12] border border-blue-500/[0.15] dark:border-blue-500/[0.3] flex items-center justify-center text-blue-600 dark:text-blue-400">
          <Link2 className="w-4 h-4" />
        </div>
        <div>
          <h3 className="font-black text-slate-900 dark:text-slate-100 text-base leading-tight">Quick Resources</h3>
          <p className="text-xs text-slate-400/80 dark:text-slate-550 font-bold">Useful links for KTU students</p>
        </div>
      </div>

      <div className="space-y-2.5">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/[0.02] dark:bg-white/[0.01] hover:bg-blue-500/[0.04] dark:hover:bg-blue-500/[0.06] border border-slate-950/[0.04] dark:border-white/[0.04] hover:border-blue-500/[0.15] transition-all group"
          >
            <div className="min-w-0 flex-1 pr-2">
              <span className="block text-xs font-black text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                {link.title}
              </span>
              <span className="inline-block mt-1 text-[9px] font-black tracking-wider uppercase px-2 py-0.5 rounded bg-slate-500/10 text-slate-500 dark:text-slate-400">
                {link.category}
              </span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all flex-shrink-0" />
          </a>
        ))}
      </div>
    </div>
  );
}
