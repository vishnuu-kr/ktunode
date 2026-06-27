"use client";

import React, { useEffect, useState } from "react";
import { Maximize2, X } from "lucide-react";

interface MermaidRendererProps {
  chart: string;
}

export default function MermaidRenderer({ chart }: MermaidRendererProps) {
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

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
    <>
      {isFullscreen && (
        <div className="fixed inset-0 z-[120] bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl flex flex-col p-4 overflow-auto">
          <div className="flex justify-end p-4">
            <button 
              onClick={() => setIsFullscreen(false)} 
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <X className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </button>
          </div>
          <div 
            className="flex-1 flex items-center justify-center p-4 min-w-max min-h-max scale-125 origin-center"
            dangerouslySetInnerHTML={{ __html: svg }} 
          />
        </div>
      )}
      <div className="relative group my-8">
        <button 
          onClick={() => setIsFullscreen(true)}
          className="absolute top-3 right-3 p-2 rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-slate-50 dark:hover:bg-slate-800"
          title="View Fullscreen"
        >
          <Maximize2 className="w-4 h-4 text-slate-600 dark:text-slate-300" />
        </button>
        <div 
          className="flex justify-center p-5 bg-white dark:bg-slate-950/20 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm overflow-x-auto max-w-full select-none"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      </div>
    </>
  );
}
