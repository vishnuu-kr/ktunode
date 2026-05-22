"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface BottomSheetProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactNode;
  titleSummary?: string;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onOpen,
  onClose,
  children,
  titleSummary = "Focus Timer & Tools",
}) => {
  const controls = useAnimation();
  const sheetRef = useRef<HTMLDivElement>(null);
  const [windowHeight, setWindowHeight] = useState(800);

  useEffect(() => {
    if (typeof window !== "undefined") {
      queueMicrotask(() => {
        setWindowHeight(window.innerHeight);
      });
      
      const handleResize = () => {
        setWindowHeight(window.innerHeight);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  
  // Snap states: 0 = collapsed, 1 = expanded
  const collapsedY = windowHeight; // Hide completely off-screen
  const expandedY = 80; // Top margin when fully expanded

  useEffect(() => {
    if (isOpen) {
      controls.start({ y: expandedY, transition: { type: "spring", damping: 25, stiffness: 220 } });
    } else {
      controls.start({ y: collapsedY, transition: { type: "spring", damping: 25, stiffness: 220 } });
    }
  }, [isOpen, collapsedY, controls]);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 50;
    const velocityThreshold = 400;
    const isSwipingUp = info.velocity.y < -velocityThreshold || info.offset.y < -swipeThreshold;
    const isSwipingDown = info.velocity.y > velocityThreshold || info.offset.y > swipeThreshold;

    if (isOpen) {
      if (isSwipingDown) {
        onClose(); // collapse
      } else {
        // stay expanded
        controls.start({ y: expandedY, transition: { type: "spring", damping: 25, stiffness: 220 } });
      }
    } else {
      if (isSwipingUp) {
        onOpen(); // expand
      } else {
        // stay collapsed
        controls.start({ y: collapsedY, transition: { type: "spring", damping: 25, stiffness: 220 } });
      }
    }
  };

  const handleToggle = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <>
      {/* Backdrop blur overlay only when sheet is expanded */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[45] bg-slate-950/20 backdrop-blur-[2px] lg:hidden"
        />
      )}

      {/* Floating Bottom Sheet */}
      <motion.div
        ref={sheetRef}
        drag={isOpen ? "y" : false}
        dragDirectionLock
        dragConstraints={{ top: expandedY, bottom: collapsedY }}
        dragElastic={0.15}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        animate={controls}
        initial={{ y: collapsedY }}
        className="fixed inset-x-0 bottom-0 z-[50] lg:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-900/[0.04] rounded-t-[2rem] shadow-[0_-12px_40px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden"
        style={{
          height: `calc(100vh - ${expandedY}px)`,
          touchAction: "none",
        }}
      >
        {/* Drag Handle & Header */}
        <div
          onClick={handleToggle}
          className="w-full py-3 px-6 flex flex-col items-center justify-center cursor-pointer border-b border-slate-900/[0.02] bg-white/50 active:bg-slate-50 transition-colors"
          style={{ touchAction: "none" }}
        >
          <div className="bottom-sheet-handle mb-3" />
          
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-black text-slate-800 tracking-wide uppercase">
                {titleSummary}
              </span>
            </div>
            
            <div className="flex items-center gap-1.5 text-slate-400 font-bold text-xs">
              <span>Swipe down to close</span>
              <motion.div
                animate={{ y: isOpen ? 0 : [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <ChevronUp className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scrollable Content Pane */}
        <div 
          className="flex-1 overflow-y-auto px-6 py-6 space-y-6 scrollbar-none ios-safe-bottom"
          style={{ touchAction: "pan-y" }}
        >
          {children}
        </div>
      </motion.div>
    </>
  );
};
