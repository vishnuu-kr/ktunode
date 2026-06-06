"use client";

import React from "react";
import { flushSync } from "react-dom";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = (e: React.MouseEvent) => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    
    // Fallback to instant change if not supported or prefers-reduced-motion
    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(nextTheme);
      return;
    }

    const rect = e.currentTarget ? e.currentTarget.getBoundingClientRect() : null;
    const x = rect ? rect.left + rect.width / 2 : (typeof window !== "undefined" ? window.innerWidth / 2 : 0);
    const y = rect ? rect.top + rect.height / 2 : (typeof window !== "undefined" ? window.innerHeight / 2 : 0);

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
    });

    transition.ready.then(() => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const radius = Math.max(
        Math.hypot(x, y),
        Math.hypot(w - x, y),
        Math.hypot(x, h - y),
        Math.hypot(w - x, h - y)
      ) + 65;

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 650,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 shadow-sm transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer shrink-0"
      aria-label="Toggle dark mode"
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4 text-amber-500 fill-amber-500/20" />
      ) : (
        <Moon className="h-4 w-4 text-slate-500 fill-slate-500/10" />
      )}
    </motion.button>
  );
}
