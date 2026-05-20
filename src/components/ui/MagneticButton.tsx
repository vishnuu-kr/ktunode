"use client";

import React, { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

const buttonBaseClasses = `
  relative overflow-hidden block
  px-8 py-4 rounded-full font-semibold text-white
  bg-gradient-to-b from-[#2E95FF] to-[#007AFF]
  shadow-[0_8px_20px_-4px_rgba(0,122,255,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]
  border border-blue-400/20
  transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
  group-hover:shadow-[0_12px_30px_-4px_rgba(0,122,255,0.6),inset_0_1px_0_rgba(255,255,255,0.4)]
  group-hover:scale-[1.02]
  active:scale-[0.96]
  active:brightness-90
`;

export const MagneticButton = ({ children, className = "", onClick, href }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) / 4);
    y.set((clientY - centerY) / 4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
        <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-[35deg] animate-[shimmer_3s_infinite]" />
      </div>
      <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
      <span className="relative z-10 flex items-center justify-center gap-2 tracking-tight">
        {children}
      </span>
    </>
  );

  const widthClasses = className.split(" ").filter(c => c.startsWith("w-") || c.includes(":w-") || c.includes("shrink-")).join(" ");
  const otherClasses = className.split(" ").filter(c => !(c.startsWith("w-") || c.includes(":w-") || c.includes("shrink-"))).join(" ");

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 360, damping: 22, mass: 0.45 }}
      className={`relative group ${widthClasses || "inline-block"}`}
    >
      {href ? (
        <Link href={href} className={`${buttonBaseClasses} w-full ${otherClasses}`}>
          {content}
        </Link>
      ) : (
        <button type="button" onClick={onClick} className={`${buttonBaseClasses} w-full ${otherClasses}`}>
          {content}
        </button>
      )}
    </motion.div>
  );
};
