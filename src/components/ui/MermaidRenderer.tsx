"use client";

import React, { useEffect, useRef, useState } from "react";

interface MermaidRendererProps {
  chart: string;
}

export default function MermaidRenderer({ chart }: MermaidRendererProps) {
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let active = true;

    const render = async () => {
      try {
        const mermaid = (await import("mermaid")).default;
        
        // Find if dark mode is active
        const isDark = document.documentElement.classList.contains("dark") || 
                       document.body.classList.contains("dark");
        
        mermaid.initialize({
          startOnLoad: false,
          theme: isDark ? "dark" : "default",
          securityLevel: "loose",
          fontFamily: "var(--font-sans)",
          themeVariables: {
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            background: isDark ? "#12131a" : "#ffffff",
            primaryColor: isDark ? "#1e293b" : "#f1f5f9",
            primaryTextColor: isDark ? "#f8fafc" : "#0f172a",
            lineColor: isDark ? "#334155" : "#cbd5e1",
          },
        });

        // Generate a unique ID to avoid collisions
        const id = `mermaid-${Math.floor(Math.random() * 1000000)}`;
        const { svg: renderedSvg } = await mermaid.render(id, chart);

        if (active) {
          setSvg(renderedSvg);
        }
      } catch (err) {
        console.error("Mermaid rendering failed", err);
        if (active) {
          setError(true);
        }
      }
    };

    render();

    return () => {
      active = false;
    };
  }, [chart]);

  if (error) {
    return (
      <div className="my-6 p-4 bg-red-50/50 dark:bg-red-950/10 border border-red-200/50 dark:border-red-900/30 rounded-xl overflow-x-auto">
        <span className="text-xs font-black uppercase text-red-500 tracking-wider block mb-2">Diagram Error</span>
        <pre className="text-xs text-red-600 dark:text-red-400 font-mono">{chart}</pre>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="my-8 h-40 bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-2xl flex flex-col items-center justify-center gap-2 select-none animate-pulse">
        <svg className="w-5 h-5 text-slate-400 dark:text-slate-500 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Rendering Diagram...</span>
      </div>
    );
  }

  return (
    <div 
      className="my-8 flex justify-center p-5 bg-white dark:bg-slate-950/20 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm overflow-x-auto max-w-full select-none"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
