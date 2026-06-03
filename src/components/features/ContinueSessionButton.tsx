"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { type SavedSession, getBranchShortLabel } from "@/types/session";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface ContinueSessionButtonProps {
  session: SavedSession;
  onContinue: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  onDismiss: (event?: React.MouseEvent) => void;
}

export function ContinueSessionButton({
  session,
  onContinue,
  onDismiss,
}: ContinueSessionButtonProps) {
  const label = `Continue with S${session.semester} ${getBranchShortLabel(session.branch)}`;

  return (
    <motion.div
      key="continue-session-button"
      initial={{ opacity: 0, y: 16, scale: 0.97, height: "auto", marginTop: 0 }}
      animate={{ opacity: 1, y: 0, scale: 1, height: "auto", marginTop: 16 }}
      exit={{ opacity: 0, y: -20, scale: 0.95, height: 0, marginTop: 0, overflow: "hidden" }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 flex items-center justify-center gap-3 w-full"
    >
      <MagneticButton
        onClick={(e) => onContinue(e)}
        className="!w-auto !py-4 !px-6 !text-sm flex-1 md:flex-none min-w-0"
      >
        <span className="truncate max-w-[200px] sm:max-w-none">{label}</span>
        <ArrowRight className="w-4 h-4" />
      </MagneticButton>

      {/* Dismiss button */}
      <button
        type="button"
        aria-label="Dismiss session"
        onClick={(event) => {
          event.stopPropagation();
          onDismiss(event);
        }}
        className="flex flex-shrink-0 items-center justify-center w-[52px] h-[52px] rounded-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-md hover:bg-white dark:hover:bg-slate-700 border border-white/60 dark:border-slate-700/60 shadow-[0_4px_16px_rgba(0,0,0,0.04)] text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-all duration-200"
      >
        <span className="sr-only">Dismiss session</span>
        <X className="w-5 h-5" />
      </button>
    </motion.div>
  );
}
