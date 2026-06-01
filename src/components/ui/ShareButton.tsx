"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Check } from "lucide-react";

interface ShareButtonProps {
  url: string;
  /** Rich share title, e.g. "Deadlocks — Operating Systems" */
  title?: string;
  /** Rich share body text shown in the native share sheet / copied to clipboard */
  text?: string;
  className?: string;
  onShareSuccess?: (message: string) => void;
  triggerHaptic?: (type: "light" | "medium" | "heavy" | "success" | "warning") => void;
}

export default function ShareButton({
  url,
  title,
  text,
  className = "",
  onShareSuccess,
  triggerHaptic,
}: ShareButtonProps) {
  const [state, setState] = useState<"idle" | "shared" | "copied">("idle");

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (triggerHaptic) triggerHaptic("light");

    // Build the full clipboard payload (rich message + URL)
    const clipboardPayload = text ? `${text}\n${url}` : url;

    // 1. Try native Web Share API (mobile share sheet)
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text, url });
        setState("shared");
        if (triggerHaptic) triggerHaptic("success");
        if (onShareSuccess) onShareSuccess("Shared successfully!");
        setTimeout(() => setState("idle"), 2500);
        return;
      } catch (err) {
        // User cancelled — don't fall through
        if ((err as DOMException).name === "AbortError") return;
        // Other error — fall through to clipboard
      }
    }

    // 2. Clipboard fallback (desktop)
    try {
      await navigator.clipboard.writeText(clipboardPayload);
      setState("copied");
      if (triggerHaptic) triggerHaptic("success");
      if (onShareSuccess) onShareSuccess("Link copied with message!");
      setTimeout(() => setState("idle"), 2500);
    } catch {
      // 3. Last-resort execCommand fallback
      try {
        const el = document.createElement("textarea");
        el.value = clipboardPayload;
        el.style.cssText = "position:fixed;opacity:0;pointer-events:none";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setState("copied");
        if (triggerHaptic) triggerHaptic("success");
        if (onShareSuccess) onShareSuccess("Link copied with message!");
        setTimeout(() => setState("idle"), 2500);
      } catch (fallbackErr) {
        console.error("Share failed", fallbackErr);
      }
    }
  };

  const isDone = state !== "idle";

  return (
    <motion.button
      type="button"
      onClick={handleShare}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 relative shadow-sm hover:shadow-md ${
        isDone
          ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 border-emerald-250 dark:border-emerald-900/40 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
          : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-800 hover:text-blue-600 dark:hover:text-blue-450"
      } ${className}`}
      aria-label={isDone ? "Shared!" : "Share this topic"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDone ? (
          <motion.div
            key="check"
            initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: 45, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 dark:text-emerald-400" />
          </motion.div>
        ) : (
          <motion.div
            key="share"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Share2 className="w-4 h-4 md:w-5 md:h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
