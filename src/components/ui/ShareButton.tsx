"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Check } from "lucide-react";

interface ShareButtonProps {
  url: string;
  className?: string;
  onShareSuccess?: (message: string) => void;
  triggerHaptic?: (type: "light" | "medium" | "heavy" | "success" | "warning") => void;
}

export default function ShareButton({
  url,
  className = "",
  onShareSuccess,
  triggerHaptic,
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      
      if (triggerHaptic) {
        triggerHaptic("success");
      }
      
      if (onShareSuccess) {
        onShareSuccess("Link copied to clipboard!");
      }
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link", err);
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleShare}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 relative shadow-sm hover:shadow-md ${
        copied
          ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 border-emerald-250 dark:border-emerald-900/40 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
          : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-800 hover:text-blue-600 dark:hover:text-blue-450"
      } ${className}`}
      aria-label="Copy page link to clipboard"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.div
            key="check"
            initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: 45, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Check className="w-4.5 h-4.5 md:w-5 md:h-5 text-emerald-600 dark:text-emerald-400" />
          </motion.div>
        ) : (
          <motion.div
            key="share"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Share2 className="w-4.5 h-4.5 md:w-5 md:h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
