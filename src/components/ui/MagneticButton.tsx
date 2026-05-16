"use client";

import React, { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MagneticButton = ({ children, className = "", onClick }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values for magnetic effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for a "weighty" feel
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Set displacement (divided by 4 for subtle movement)
    x.set((clientX - centerX) / 4);
    y.set((clientY - centerY) / 4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="relative z-20 group inline-block"
    >
      <button
        onClick={onClick}
        className={`
          relative overflow-hidden
          px-8 py-4 rounded-full font-semibold text-white
          bg-gradient-to-b from-[#2E95FF] to-[#007AFF]
          shadow-[0_8px_20px_-4px_rgba(0,122,255,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]
          border border-blue-400/20
          transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          group-hover:shadow-[0_12px_30px_-4px_rgba(0,122,255,0.6),inset_0_1px_0_rgba(255,255,255,0.4)]
          group-hover:scale-[1.02]
          active:scale-[0.96]
          active:brightness-90
          ${className}
        `}
      >
        {/* Cinematic Shimmer Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
          <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-[35deg] animate-[shimmer_3s_infinite]" />
        </div>

        {/* Glow behind text */}
        <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
        
        <span className="relative z-10 flex items-center justify-center gap-2 tracking-tight">
          {children}
        </span>
      </button>
    </motion.div>
  );
};
