"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Square, Volume2, VolumeX, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface AudioNoteReaderProps {
  content: string;
  topicTitle: string;
  triggerHaptic?: (type: "light" | "medium" | "heavy" | "success" | "warning") => void;
}

const SPEED_OPTIONS = [1.0, 1.25, 1.5, 1.75, 2.0];

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
  
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const cleanedTextRef = useRef<string>("");
  const totalLengthRef = useRef<number>(0);

  // Clean markdown content to produce readable natural prose
  const getCleanedText = (md: string): string => {
    let text = md;

    // 1. Remove code blocks
    text = text.replace(/```[\s\S]*?```/g, " [code block omitted] ");

    // 2. Remove block math ($$...$$)
    text = text.replace(/\$\$[\s\S]*?\$\$/g, " [mathematical formula] ");

    // 3. Remove inline math ($...$)
    text = text.replace(/\$[^\$\n]+?\$/g, " [formula] ");

    // 4. Remove tables
    text = text.replace(/\|[\s\S]*?\|(?=\n|$)/g, " ");

    // 5. Remove images
    text = text.replace(/!\[.*?\]\(.*?\)/g, " ");

    // 6. Remove HTML tags
    text = text.replace(/<[^>]*>/g, " ");

    // 7. Remove markdown headings and formatting
    text = text.replace(/#{1,6}\s+/g, " ");
    text = text.replace(/\*\*|__|\*|_|`/g, "");
    
    // 8. Clean up lists and bullet points
    text = text.replace(/^\s*[-*+]\s+/gm, " ");
    text = text.replace(/^\s*\d+\.\s+/gm, " ");

    // 9. Normalize whitespace
    text = text.replace(/\s+/g, " ").trim();

    return text;
  };

  // Hoisted speech helper functions to ensure safe reference during mounting/effects
  function stopSpeech() {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
  }

  function startSpeech() {
    if (typeof window === "undefined") return;

    window.speechSynthesis.cancel(); // Stop any ongoing speech

    const textToSpeak = cleanedTextRef.current;
    if (!textToSpeak) return;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utteranceRef.current = utterance;
    
    // Configure voice rate and volume
    utterance.rate = rate;
    utterance.volume = muted ? 0 : 1;

    // Try to select a high-quality natural English voice if available
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

    // Set speech boundaries tracking for progress bar
    utterance.onboundary = (event) => {
      if (event.name === "word") {
        const charIdx = event.charIndex;
        if (totalLengthRef.current > 0) {
          const currentProgress = (charIdx / totalLengthRef.current) * 100;
          setProgress(Math.min(100, currentProgress));
        }
      }
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(100);
      setTimeout(() => setProgress(0), 1000);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    setIsPlaying(true);
    setIsPaused(false);
    window.speechSynthesis.speak(utterance);
  }

  function pauseSpeech() {
    if (typeof window === "undefined") return;
    window.speechSynthesis.pause();
    setIsPaused(true);
  }

  function resumeSpeech() {
    if (typeof window === "undefined") return;
    window.speechSynthesis.resume();
    setIsPaused(false);
  }

  function toggleMute() {
    const nextMute = !muted;
    setMuted(nextMute);
    triggerHaptic("light");
    
    if (isPlaying && utteranceRef.current) {
      // Chrome/Safari speech synthesis requires re-speaking to apply volume change live
      const currentProgressRatio = progress / 100;
      const charOffset = Math.floor(cleanedTextRef.current.length * currentProgressRatio);
      const remainingText = cleanedTextRef.current.slice(charOffset);
      
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(remainingText);
      utteranceRef.current = utterance;
      utterance.rate = rate;
      utterance.volume = nextMute ? 0 : 1;
      
      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(v => v.lang.startsWith("en-")) || voices[0];
      if (englishVoice) utterance.voice = englishVoice;
      
      utterance.onboundary = (event) => {
        if (event.name === "word") {
          const relativeCharIdx = event.charIndex;
          const absoluteCharIdx = charOffset + relativeCharIdx;
          setProgress(Math.min(100, (absoluteCharIdx / totalLengthRef.current) * 100));
        }
      };
      
      utterance.onend = () => {
        setIsPlaying(false);
        setIsPaused(false);
        setProgress(0);
      };
      
      window.speechSynthesis.speak(utterance);
      if (isPaused) {
        window.speechSynthesis.pause();
      }
    }
  }

  function handleSpeedChange(newRate: number) {
    setRate(newRate);
    triggerHaptic("medium");

    if (isPlaying) {
      const currentProgressRatio = progress / 100;
      const charOffset = Math.floor(cleanedTextRef.current.length * currentProgressRatio);
      const remainingText = cleanedTextRef.current.slice(charOffset);
      
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(remainingText);
      utteranceRef.current = utterance;
      utterance.rate = newRate;
      utterance.volume = muted ? 0 : 1;
      
      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(v => v.lang.startsWith("en-")) || voices[0];
      if (englishVoice) utterance.voice = englishVoice;
      
      utterance.onboundary = (event) => {
        if (event.name === "word") {
          const relativeCharIdx = event.charIndex;
          const absoluteCharIdx = charOffset + relativeCharIdx;
          setProgress(Math.min(100, (absoluteCharIdx / totalLengthRef.current) * 100));
        }
      };
      
      utterance.onend = () => {
        setIsPlaying(false);
        setIsPaused(false);
        setProgress(0);
      };
      
      window.speechSynthesis.speak(utterance);
      if (isPaused) {
        window.speechSynthesis.pause();
      }
    }
  }

  useEffect(() => {
    cleanedTextRef.current = `${topicTitle}. ${getCleanedText(content)}`;
    totalLengthRef.current = cleanedTextRef.current.length;
    
    // Reset reader if topic changes
    stopSpeech();
    
    return () => {
      if (typeof window !== "undefined") {
        window.speechSynthesis.cancel();
      }
    };
  }, [content, topicTitle]);

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-0 mb-6">
      <div className="bg-slate-50/70 dark:bg-slate-950/45 backdrop-blur-md border border-slate-950/[0.04] dark:border-white/[0.04] rounded-2xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm select-none">
        
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

          <div className="w-[1px] h-5 bg-slate-950/[0.06] dark:bg-white/[0.06] mx-1" />

          {/* Mute toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMute}
            className={`h-9 w-9 rounded-xl flex items-center justify-center border transition-all cursor-pointer ${
              muted 
                ? "bg-red-500/10 text-red-600 border-red-500/20" 
                : "bg-slate-950/[0.02] text-slate-500 border-transparent hover:border-slate-950/[0.06]"
            }`}
            title={muted ? "Unmute Audio" : "Mute Audio"}
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </motion.button>

          {/* Sparkly text indicator */}
          {isPlaying && !isPaused && (
            <div className="hidden min-[380px]:flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 animate-pulse ml-2.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-500 fill-current" />
              <span>Reading aloud</span>
            </div>
          )}
        </div>

        {/* Speed & Progress Bar */}
        <div className="flex items-center gap-4 flex-1 justify-end min-w-0">
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
