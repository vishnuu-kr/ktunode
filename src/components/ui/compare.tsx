"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface CompareProps {
  firstImage?: string;
  secondImage?: string;
  className?: string;
  firstImageClassName?: string;
  secondImageClassname?: string; // Matching case from parent: "secondImageClassname"
  initialSliderPercentage?: number;
  slideMode?: "hover" | "drag";
  showHandlebar?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
}

export const Compare: React.FC<CompareProps> = ({
  firstImage = "",
  secondImage = "",
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
}) => {
  const [sliderPosition, setSliderPosition] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracted, setIsInteracted] = useState(false);

  // Handle positioning logic based on clientX
  const handlePositionChange = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  // Mouse / Touch moves for drag and hover
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (slideMode === "hover") {
        handlePositionChange(e.clientX);
      } else if (slideMode === "drag" && isDragging) {
        handlePositionChange(e.clientX);
      }
    },
    [slideMode, isDragging, handlePositionChange]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (e.touches.length > 0) {
        handlePositionChange(e.touches[0].clientX);
      }
    },
    [handlePositionChange]
  );

  // Mouse Actions
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (slideMode === "drag") {
      setIsDragging(true);
      setIsInteracted(true);
      handlePositionChange(e.clientX);
    }
  }, [slideMode, handlePositionChange]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Autoplay Logic (runs if autoplay=true and no user interaction yet)
  useEffect(() => {
    if (!autoplay || isInteracted) return;

    let startTime = Date.now();
    let animationFrameId: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      // Oscillate between 15% and 85% using a sine wave
      const progress = (elapsed % autoplayDuration) / autoplayDuration;
      const angle = progress * Math.PI * 2;
      const percentage = 50 + Math.sin(angle) * 35; // oscillates between 15 and 85

      setSliderPosition(percentage);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [autoplay, autoplayDuration, isInteracted]);

  // Global mouse up to stop dragging if cursor leaves window
  useEffect(() => {
    if (slideMode === "drag") {
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [slideMode, handleMouseUp]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative select-none overflow-hidden touch-none cursor-ew-resize",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onTouchMove={handleTouchMove}
      onTouchStart={() => setIsInteracted(true)}
      onMouseEnter={() => {
        if (slideMode === "hover") setIsInteracted(true);
      }}
    >
      {/* First (Bottom) Image - Chaos */}
      <div className="absolute inset-0 w-full h-full bg-neutral-200 dark:bg-neutral-800">
        {firstImage && (
          <img
            src={firstImage}
            alt="Cluttered, unstructured KTU study material"
            className={cn("w-full h-full select-none pointer-events-none", firstImageClassName)}
            draggable={false}
          />
        )}
      </div>

      {/* Second (Top) Image - Clarity */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        {secondImage && (
          <img
            src={secondImage}
            alt="Clean, structured KTUNODE study notes"
            className={cn("w-full h-full select-none pointer-events-none", secondImageClassname)}
            draggable={false}
          />
        )}
      </div>

      {/* Handlebar / Slider Divider */}
      {showHandlebar && (
        <div
          className="absolute inset-y-0 z-20 w-1 bg-white/80 dark:bg-neutral-800/80 cursor-ew-resize flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Centered Grab Pill */}
          <div className="h-10 w-6 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-lg flex items-center justify-center gap-[2px]">
            <div className="w-[2px] h-4 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
            <div className="w-[2px] h-4 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
          </div>
        </div>
      )}
    </div>
  );
};
