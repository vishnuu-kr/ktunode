"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ScrambleTextProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  onHover?: boolean;
}

const chars = "!<>-_\\/[]{}—=+*^?#________";

const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)];

const generateScrambledText = (target: string, progress: number) => {
  let scrambled = "";
  for (let i = 0; i < target.length; i++) {
    if (target[i] === " ") {
      scrambled += " ";
    } else if (Math.random() > progress * 1.5) {
      scrambled += getRandomChar();
    } else {
      scrambled += target[i];
    }
  }
  return scrambled;
};

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  delay = 0,
  duration = 900,
  className = "",
  onHover = false,
}) => {
  const [displayText, setDisplayText] = useState(onHover ? text : "");
  const [isScrambling, setIsScrambling] = useState(!onHover);
  const frameRef = useRef<number | undefined>(undefined);

  const scramble = (startTime: number, target: string, timestamp: number) => {
    const progress = Math.min((timestamp - startTime) / duration, 1);
    if (progress < 1) {
      const scrambled = generateScrambledText(target, progress);
      setDisplayText(scrambled);
      frameRef.current = requestAnimationFrame((t) => scramble(startTime, target, t));
    } else {
      setDisplayText(target);
      setIsScrambling(false);
    }
  };

  useEffect(() => {
    if (!onHover) {
      const id = setTimeout(() => {
        setIsScrambling(true);
        frameRef.current = requestAnimationFrame((t) => scramble(t, text, t));
      }, delay);
      return () => {
        clearTimeout(id);
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delay, duration, onHover]);

  const handleHover = () => {
    if (onHover && !isScrambling) {
      setIsScrambling(true);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame((t) => scramble(t, text, t));
    }
  };

  const handlePointerEnter = (e: React.PointerEvent) => {
    if (e.pointerType === "touch") return;
    handleHover();
  };

  return (
    <motion.span className={className} onPointerEnter={handlePointerEnter} style={{ display: "inline-block" }}>
      {displayText}
    </motion.span>
  );
};
