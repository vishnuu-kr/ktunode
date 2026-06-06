"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Square, Volume2, VolumeX, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface AudioNoteReaderProps {
  content: string;
  topicTitle: string;
  triggerHaptic?: (type: "light" | "medium" | "heavy" | "success" | "warning") => void;
}

const SPEED_OPTIONS = [1.0, 1.5, 2.0];

export default function AudioNoteReader({
  content,
  topicTitle,
  triggerHaptic = () => {}
}: AudioNoteReaderProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState(1.0);
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(false);
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const segmentsRef = useRef<{ text: string; pauseMs: number }[]>([]);
  const playTimeoutRef = useRef<any>(null);
  const isWaitingBetweenSegmentsRef = useRef<boolean>(false);
  const totalLengthRef = useRef<number>(0);
  const segmentStartIndicesRef = useRef<number[]>([]);
  const currentSegmentIndexRef = useRef<number>(0);

  // Split cleaned text into readable segments with appropriate pauses
  const getSpeechSegments = (md: string, title: string): { text: string; pauseMs: number }[] => {
    const segments: { text: string; pauseMs: number }[] = [];

    // Add the title first with a long pause
    if (title) {
      segments.push({ text: title, pauseMs: 1200 });
    }

    if (!md) return segments;

    // Split by newlines to separate blocks/paragraphs
    const blocks = md.split(/\n+/);

    for (const block of blocks) {
      let cleanBlock = block.trim();
      if (!cleanBlock) continue;

      // Determine pause after this block (paragraphs or headings get longer pauses)
      let basePause = 650; // paragraph pause
      let isHeader = false;

      if (cleanBlock.startsWith('#')) {
        isHeader = true;
        basePause = 1000; // longer pause for headers
      }

      // Clean block
      // 1. Remove code blocks
      if (cleanBlock.startsWith('```') || cleanBlock.endsWith('```')) {
        continue;
      }
      
      // 2. Remove inline code and formatting
      cleanBlock = cleanBlock.replace(/`[^`]+`/g, "");
      
      // 3. Remove math formulas
      cleanBlock = cleanBlock.replace(/\$\$[\s\S]*?\$\$/g, "");
      cleanBlock = cleanBlock.replace(/\$[^\$\n]+?\$/g, "");
      
      // 4. Skip tables entirely
      if (cleanBlock.startsWith('|')) {
        continue;
      }

      // 5. Remove markdown formatting
      cleanBlock = cleanBlock.replace(/!\[.*?\]\(.*?\)/g, ""); // images
      cleanBlock = cleanBlock.replace(/\[(.*?)\]\(.*?\)/g, "$1"); // links: keep text
      cleanBlock = cleanBlock.replace(/<[^>]*>/g, ""); // HTML tags
      cleanBlock = cleanBlock.replace(/^#{1,6}\s+/g, ""); // headers
      cleanBlock = cleanBlock.replace(/\*\*|__|\*|_/g, ""); // bold/italic
      
      // 6. Clean list item markers
      cleanBlock = cleanBlock.replace(/^[-*+]\s+/g, "");
      cleanBlock = cleanBlock.replace(/^\d+\.\s+/g, "");
      
      // Normalize space
      cleanBlock = cleanBlock.replace(/\s+/g, " ").trim();

      if (!cleanBlock) continue;

      // If it's a header or very short block, don't split it further
      if (isHeader || cleanBlock.length < 80) {
        segments.push({ text: cleanBlock, pauseMs: basePause });
      } else {
        // Split cleanBlock into sentences by punctuation followed by spaces (. ? !)
        const sentences = cleanBlock.split(/(?<=[.?!])\s+/);
        for (let i = 0; i < sentences.length; i++) {
          const sentence = sentences[i].trim();
          if (!sentence) continue;

          const isLastSentence = i === sentences.length - 1;
          segments.push({
            text: sentence,
            pauseMs: isLastSentence ? basePause : 350 // sentence pause vs block pause
          });
        }
      }
    }

    return segments;
  };

  const playSegment = (index: number, activeRate = rate, activeMuted = muted) => {
    if (typeof window === "undefined") return;
    
    if (playTimeoutRef.current) {
      clearTimeout(playTimeoutRef.current);
      playTimeoutRef.current = null;
    }

    if (utteranceRef.current) {
      utteranceRef.current.onend = null;
      utteranceRef.current.onerror = null;
      utteranceRef.current.onboundary = null;
    }

    window.speechSynthesis.cancel();

    if (index >= segmentsRef.current.length) {
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(100);
      setCurrentSegmentIndex(0);
      currentSegmentIndexRef.current = 0;
      setTimeout(() => setProgress(0), 1000);
      return;
    }

    setCurrentSegmentIndex(index);
    currentSegmentIndexRef.current = index;
    
    // Set initial segment progress for visual feedback
    const segmentStart = segmentStartIndicesRef.current[index] || 0;
    if (totalLengthRef.current > 0) {
      setProgress((segmentStart / totalLengthRef.current) * 100);
    }

    const segment = segmentsRef.current[index];
    const utterance = new SpeechSynthesisUtterance(segment.text);
    utteranceRef.current = utterance;
    utterance.rate = activeRate;
    utterance.volume = activeMuted ? 0 : 1;

    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(
      (v) => v.lang.startsWith("en-") && v.name.toLowerCase().includes("natural")
    ) || voices.find(
      (v) => v.lang.startsWith("en-") && v.localService
    ) || voices.find(
      (v) => v.lang.startsWith("en-")
    );
    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    utterance.onboundary = (event) => {
      if (event.name === "word") {
        const charIdx = event.charIndex;
        const absoluteCharIdx = segmentStart + charIdx;
        if (totalLengthRef.current > 0) {
          const currentProgress = (absoluteCharIdx / totalLengthRef.current) * 100;
          setProgress(Math.min(100, currentProgress));
        }
      }
    };

    utterance.onend = () => {
      isWaitingBetweenSegmentsRef.current = true;
      playTimeoutRef.current = setTimeout(() => {
        isWaitingBetweenSegmentsRef.current = false;
        playSegment(index + 1, activeRate, activeMuted);
      }, segment.pauseMs);
    };

    utterance.onerror = (e) => {
      if (e.error === "interrupted" || e.error === "canceled") {
        return;
      }
      setIsPlaying(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  function stopSpeech() {
    if (typeof window === "undefined") return;
    if (playTimeoutRef.current) {
      clearTimeout(playTimeoutRef.current);
      playTimeoutRef.current = null;
    }

    if (utteranceRef.current) {
      utteranceRef.current.onend = null;
      utteranceRef.current.onerror = null;
      utteranceRef.current.onboundary = null;
    }

    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
    setCurrentSegmentIndex(0);
    currentSegmentIndexRef.current = 0;
    isWaitingBetweenSegmentsRef.current = false;
  }

  function startSpeech() {
    setIsPlaying(true);
    setIsPaused(false);
    playSegment(0);
  }

  function pauseSpeech() {
    if (typeof window === "undefined") return;
    if (playTimeoutRef.current) {
      clearTimeout(playTimeoutRef.current);
      playTimeoutRef.current = null;
    }
    window.speechSynthesis.pause();
    setIsPaused(true);
  }

  function resumeSpeech() {
    if (typeof window === "undefined") return;
    setIsPaused(false);
    
    if (isWaitingBetweenSegmentsRef.current) {
      isWaitingBetweenSegmentsRef.current = false;
      playSegment(currentSegmentIndexRef.current + 1);
    } else {
      window.speechSynthesis.resume();
      setTimeout(() => {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      }, 50);
    }
  }

  function toggleMute() {
    const nextMute = !muted;
    setMuted(nextMute);
    triggerHaptic("light");
    
    if (isPlaying) {
      if (playTimeoutRef.current) {
        clearTimeout(playTimeoutRef.current);
        playTimeoutRef.current = null;
      }

      if (utteranceRef.current) {
        utteranceRef.current.onend = null;
        utteranceRef.current.onerror = null;
        utteranceRef.current.onboundary = null;
      }

      const savedIsPaused = isPaused;
      playSegment(currentSegmentIndexRef.current, rate, nextMute);
      if (savedIsPaused) {
        window.speechSynthesis.pause();
      }
    }
  }

  function handleSpeedChange(newRate: number) {
    setRate(newRate);
    triggerHaptic("medium");

    if (isPlaying) {
      if (playTimeoutRef.current) {
        clearTimeout(playTimeoutRef.current);
        playTimeoutRef.current = null;
      }

      if (utteranceRef.current) {
        utteranceRef.current.onend = null;
        utteranceRef.current.onerror = null;
        utteranceRef.current.onboundary = null;
      }

      const savedIsPaused = isPaused;
      playSegment(currentSegmentIndexRef.current, newRate, muted);
      if (savedIsPaused) {
        window.speechSynthesis.pause();
      }
    }
  }

  useEffect(() => {
    segmentsRef.current = getSpeechSegments(content, topicTitle);
    
    // Calculate total character length and start indices for smooth progress
    let totalChars = 0;
    const startIndices: number[] = [];
    for (const seg of segmentsRef.current) {
      startIndices.push(totalChars);
      totalChars += seg.text.length;
    }
    totalLengthRef.current = totalChars;
    segmentStartIndicesRef.current = startIndices;

    // Reset reader if topic changes
    stopSpeech();
    
    return () => {
      if (typeof window !== "undefined") {
        if (utteranceRef.current) {
          utteranceRef.current.onend = null;
          utteranceRef.current.onerror = null;
          utteranceRef.current.onboundary = null;
        }
        window.speechSynthesis.cancel();
      }
      if (playTimeoutRef.current) {
        clearTimeout(playTimeoutRef.current);
      }
    };
  }, [content, topicTitle]);



  return (
    <div className="max-w-3xl mx-auto px-4 md:px-0 mb-6 sticky top-20 z-40">
      <div className="bg-slate-50/70 dark:bg-slate-950/45 backdrop-blur-md border border-slate-950/[0.04] dark:border-white/[0.04] rounded-2xl p-3 flex flex-wrap items-center justify-between gap-3 shadow-sm select-none">
        
        {/* Playback Controls */}
        <div className="flex items-center gap-2">
          {!isPlaying ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                triggerHaptic("success");
                startSpeech();
              }}
              className="h-9 px-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-sm shadow-blue-500/10"
              title="Read Notes Aloud"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Listen</span>
            </motion.button>
          ) : (
            <>
              {isPaused ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    triggerHaptic("light");
                    resumeSpeech();
                  }}
                  className="h-9 w-9 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex items-center justify-center cursor-pointer"
                  title="Resume Reading"
                >
                  <Play className="w-4 h-4 fill-current" />
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    triggerHaptic("light");
                    pauseSpeech();
                  }}
                  className="h-9 w-9 rounded-xl bg-slate-950/[0.04] dark:bg-white/[0.04] text-slate-700 dark:text-slate-350 border border-slate-950/[0.06] dark:border-white/[0.06] flex items-center justify-center cursor-pointer"
                  title="Pause Reading"
                >
                  <Pause className="w-4 h-4" />
                </motion.button>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  triggerHaptic("medium");
                  stopSpeech();
                }}
                className="h-9 w-9 rounded-xl bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/20 flex items-center justify-center cursor-pointer"
                title="Stop Reading"
              >
                <Square className="w-3.5 h-3.5 fill-current" />
              </motion.button>
            </>
          )}



          {/* Sparkly text indicator */}
          {isPlaying && !isPaused && (
            <div className="hidden min-[380px]:flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 animate-pulse ml-2.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-500 fill-current" />
              <span>Reading aloud</span>
            </div>
          )}
        </div>

        {/* Speed & Progress Bar */}
        <div className="flex items-center gap-4 flex-1 justify-center min-[480px]:justify-end min-w-0">
          {/* Progress bar (renders when playing) */}
          {isPlaying && (
            <div className="hidden md:flex flex-1 items-center gap-2 min-w-0">
              <div className="flex-1 h-1.5 bg-slate-950/[0.04] dark:bg-white/[0.04] rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${progress}%` }}
                  layoutId="audioProgress"
                />
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-400 tabular-nums shrink-0">{Math.round(progress)}%</span>
            </div>
          )}

          {/* Speed preset selectors */}
          <div className="flex items-center gap-1 bg-slate-950/[0.03] dark:bg-white/[0.03] p-0.5 rounded-xl border border-slate-950/[0.04] dark:border-white/[0.04] shrink-0">
            {SPEED_OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSpeedChange(opt)}
                className={`px-2 py-1 text-[10px] font-black rounded-lg cursor-pointer transition-all ${
                  rate === opt
                    ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-950/[0.04] dark:border-white/[0.04]"
                    : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-350"
                }`}
              >
                {opt}x
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile progress line */}
      {isPlaying && (
        <div className="w-full h-1 bg-slate-950/[0.02] dark:bg-white/[0.02] rounded-full overflow-hidden mt-1 md:hidden">
          <div className="h-full bg-blue-500" style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  );
}
