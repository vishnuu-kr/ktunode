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

  const scramble = (startTime: number, target: string) => {
    const now = Date.now();
    const progress = Math.min((now - startTime) / duration, 1);
    if (progress < 1) {
      let scrambled = "";
      for (let i = 0; i < target.length; i++) {
        if (target[i] === " ") {
          scrambled += " ";
        } else if (Math.random() > progress * 1.5) {
          scrambled += chars[Math.floor(Math.random() * chars.length)];
        } else {
          scrambled += target[i];
        }
      }
      setDisplayText(scrambled);
      frameRef.current = requestAnimationFrame(() => scramble(startTime, target));
    } else {
      setDisplayText(target);
      setIsScrambling(false);
    }
  };

  useEffect(() => {
    if (!onHover) {
      const id = setTimeout(() => {
        setIsScrambling(true);
        frameRef.current = requestAnimationFrame(() => scramble(Date.now(), text));
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
      frameRef.current = requestAnimationFrame(() => scramble(Date.now(), text));
    }
  };

  return (
    <motion.span className={className} onMouseEnter={handleHover} style={{ display: "inline-block" }}>
      {displayText}
    </motion.span>
  );
};
