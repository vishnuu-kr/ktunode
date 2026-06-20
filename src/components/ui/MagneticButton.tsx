"use client";

import React, { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  customShadow?: string;
  [key: string]: any; // Allow arbitrary props like aria-label, title, etc.
}

export const MagneticButton = ({ children, className = "", onClick, href, customShadow, ...props }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia("(hover: none)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || isMobile) return;
    // Skip magnetic effect on touch devices to prevent jitter
    if (window.matchMedia("(hover: none)").matches) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) / 4);
    y.set((clientY - centerY) / 4);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    x.set(0);
    y.set(0);
  };

  const defaultShadowClasses = "shadow-[0_8px_20px_-4px_rgba(0,122,255,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] border border-blue-400/20 group-hover:shadow-[0_12px_30px_-4px_rgba(0,122,255,0.6),inset_0_1px_0_rgba(255,255,255,0.4)]";
  const shadowClasses = customShadow || defaultShadowClasses;

  const buttonBaseClasses = `
    relative overflow-hidden block
    px-8 py-4 rounded-full font-semibold text-white
    bg-gradient-to-b from-[var(--btn-primary-from)] to-[var(--btn-primary-to)]
    hover:from-[var(--btn-primary-hover-from)] hover:to-[var(--btn-primary-hover-to)]
    focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none
    ${shadowClasses}
    transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
    group-hover:scale-[1.02]
    active:scale-[0.96]
    active:brightness-90
  `;

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

  const classTokens = className.split(/\s+/).filter(Boolean);
  const widthClasses = classTokens.filter(c => c.startsWith("w-") || c.includes(":w-") || c.includes("shrink-")).join(" ");
  const otherClasses = classTokens.filter(c => !(c.startsWith("w-") || c.includes(":w-") || c.includes("shrink-"))).join(" ");

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={isMobile ? {} : { x: springX, y: springY }}
      whileHover={isMobile ? {} : { scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 360, damping: 22, mass: 0.45 }}
      className={`relative group ${widthClasses || "inline-block"}`}
    >
      {href ? (
        <Link href={href} className={`${buttonBaseClasses} w-full ${otherClasses}`} {...props}>
          {content}
        </Link>
      ) : (
        <button type="button" onClick={onClick} className={`${buttonBaseClasses} w-full ${otherClasses}`} {...props}>
          {content}
        </button>
      )}
    </motion.div>
  );
};
