"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { type SavedSession, getBranchShortLabel } from "@/types/session";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface ContinueSessionButtonProps {
  session: SavedSession;
  onContinue: () => void;
  onDismiss: () => void;
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
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.97 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 flex items-center justify-center gap-3 mt-4 w-full"
    >
      <MagneticButton
        onClick={onContinue}
        className="!w-auto !py-4 !px-8 !text-sm flex-1 md:flex-none"
      >
        {label}
        <ArrowRight className="w-4 h-4" />
      </MagneticButton>

      {/* Dismiss button */}
      <button
        type="button"
        aria-label="Dismiss session"
        onClick={(event) => {
          event.stopPropagation();
          onDismiss();
        }}
        className="flex flex-shrink-0 items-center justify-center w-[52px] h-[52px] rounded-full bg-white/70 backdrop-blur-md hover:bg-white border border-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.04)] text-slate-500 hover:text-slate-800 transition-all duration-200"
      >
        <X className="w-5 h-5" />
      </button>
    </motion.div>
  );
}
