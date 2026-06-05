"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
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
      if (isDragging && e.touches.length > 0) {
        handlePositionChange(e.touches[0].clientX);
      }
    },
    [isDragging, handlePositionChange]
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

    const startTime = Date.now();
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

  // Global mouse up & touch release to stop dragging anywhere
  useEffect(() => {
    if (slideMode === "drag") {
      const release = () => setIsDragging(false);
      window.addEventListener("mouseup", release);
      window.addEventListener("touchend", release);
      window.addEventListener("touchcancel", release);
      return () => {
        window.removeEventListener("mouseup", release);
        window.removeEventListener("touchend", release);
        window.removeEventListener("touchcancel", release);
      };
    }
  }, [slideMode]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 10 : 2;
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        setIsInteracted(true);
        setSliderPosition((prev) => Math.max(0, prev - step));
        break;
      case "ArrowRight":
        e.preventDefault();
        setIsInteracted(true);
        setSliderPosition((prev) => Math.min(100, prev + step));
        break;
      case "Home":
        e.preventDefault();
        setIsInteracted(true);
        setSliderPosition(0);
        break;
      case "End":
        e.preventDefault();
        setIsInteracted(true);
        setSliderPosition(100);
        break;
    }
  }, []);

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-label="Image comparison slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(
        "relative select-none overflow-hidden cursor-ew-resize",
        isDragging ? "touch-none" : "touch-pan-y",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onTouchMove={handleTouchMove}
      onMouseEnter={() => {
        if (slideMode === "hover") setIsInteracted(true);
      }}
      onKeyDown={handleKeyDown}
    >
      {/* First (Bottom) Image - Chaos */}
      <div className="absolute inset-0 w-full h-full bg-neutral-200 dark:bg-neutral-800">
        {firstImage && (
          <Image
            src={firstImage}
            alt="Cluttered, unstructured KTU study material"
            className={cn("w-full h-full select-none pointer-events-none object-cover", firstImageClassName)}
            draggable={false}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            priority
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
          <Image
            src={secondImage}
            alt="Clean, structured KTUNODE study notes"
            className={cn("w-full h-full select-none pointer-events-none object-cover", secondImageClassname)}
            draggable={false}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            priority
          />
        )}
      </div>

      {/* Handlebar / Slider Divider */}
      {showHandlebar && (
        <div
          className="absolute inset-y-0 z-20 w-10 -ml-5 cursor-ew-resize flex items-center justify-center pointer-events-auto bg-transparent select-none"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={(e) => {
            setIsDragging(true);
            setIsInteracted(true);
            handlePositionChange(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            setIsInteracted(true);
            if (e.touches.length > 0) {
              handlePositionChange(e.touches[0].clientX);
            }
          }}
        >
          {/* Visual Thin Divider Line */}
          <div className="absolute inset-y-0 w-0.5 bg-white/80 dark:bg-neutral-800/80 pointer-events-none" />

          {/* Centered Grab Pill */}
          <div className="h-10 w-6 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-lg flex items-center justify-center gap-[2px] pointer-events-none z-30">
            <div className="w-[2px] h-4 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
            <div className="w-[2px] h-4 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
          </div>
        </div>
      )}
    </div>
  );
};
