"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  LayoutList,
  Search,
  Star,
  X,
  Sparkles,
  Cpu,
  Calculator,
  Briefcase,
  Database,
  Globe,
  FlaskConical,
  PenTool,
  Code,
  HardDrive,
  MonitorPlay,
  Play,
  Clock,
  Timer,
  Pause,
  RotateCcw,
  Lock,
  Mail,
  UserRound,
  Loader2,
  LogOut,
  Cloud,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useTheme } from "next-themes";
import confetti from "canvas-confetti";
import { getSubjectsForSession, Subject, Topic } from "@/lib/mockData";
import { getTimetable } from "@/lib/timetableData";
import { useProgress } from "@/hooks/useProgress";
import { MagneticButton } from "@/components/ui/MagneticButton";
import MarkdownRenderer from "@/components/ui/MarkdownRenderer";
import PomodoroTimer from "@/components/dashboard/PomodoroTimer";
import TimetableWidget from "@/components/dashboard/TimetableWidget";

import { BottomSheet } from "@/components/dashboard/BottomSheet";

type ViewState = "dashboard" | "subject" | "topic";

type TopicIndexItem = {
  subject: Subject;
  module: Subject["modules"][number];
  topic: Topic;
  subjectIndex: number;
  moduleIndex: number;
  topicIndex: number;
};

const colorSchemes = [
  { 
    dot: "bg-blue-600", 
    stroke: "stroke-blue-500",
    bg: "bg-white/65 dark:bg-slate-900/65 hover:bg-blue-50/80 dark:hover:bg-blue-900/40 border-slate-200/60 dark:border-slate-800 hover:border-blue-500/30 dark:hover:border-blue-500/40 hover:shadow-[0_12px_40px_-12px_rgba(59,130,246,0.15)]",
    text: "text-blue-600"
  },
  { 
    dot: "bg-violet-600", 
    stroke: "stroke-violet-500",
    bg: "bg-white/65 dark:bg-slate-900/65 hover:bg-violet-50/80 dark:hover:bg-violet-900/40 border-slate-200/60 dark:border-slate-800 hover:border-violet-500/30 dark:hover:border-violet-500/40 hover:shadow-[0_12px_40px_-12px_rgba(139,92,246,0.15)]",
    text: "text-violet-600"
  },
  { 
    dot: "bg-emerald-600", 
    stroke: "stroke-emerald-500",
    bg: "bg-white/65 dark:bg-slate-900/65 hover:bg-emerald-50/80 dark:hover:bg-emerald-900/40 border-slate-200/60 dark:border-slate-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/40 hover:shadow-[0_12px_40px_-12px_rgba(16,185,129,0.15)]",
    text: "text-emerald-600"
  },
  { 
    dot: "bg-rose-600", 
    stroke: "stroke-rose-500",
    bg: "bg-white/65 dark:bg-slate-900/65 hover:bg-rose-50/80 dark:hover:bg-rose-900/40 border-slate-200/60 dark:border-slate-800 hover:border-rose-500/30 dark:hover:border-rose-500/40 hover:shadow-[0_12px_40px_-12px_rgba(244,63,94,0.15)]",
    text: "text-rose-600"
  },
  { 
    dot: "bg-amber-600", 
    stroke: "stroke-amber-500",
    bg: "bg-white/65 dark:bg-slate-900/65 hover:bg-amber-50/80 dark:hover:bg-amber-900/40 border-slate-200/60 dark:border-slate-800 hover:border-amber-500/30 dark:hover:border-amber-500/40 hover:shadow-[0_12px_40px_-12px_rgba(245,158,11,0.15)]",
    text: "text-amber-600"
  },
];

const schemeHoverTextMap: Record<string, string> = {
  "text-blue-600": "group-hover:text-blue-600",
  "text-violet-600": "group-hover:text-violet-600",
  "text-emerald-600": "group-hover:text-emerald-600",
  "text-rose-600": "group-hover:text-rose-600",
  "text-amber-600": "group-hover:text-amber-600",
  "text-cyan-600": "group-hover:text-cyan-600",
  "text-pink-600": "group-hover:text-pink-600",
  "text-teal-600": "group-hover:text-teal-600",
};

interface SubjectTheme {
  accent: "blue" | "purple" | "green" | "amber" | "emerald";
  glow: string;
  border: string;
  text: string;
  badgeBg: string;
  accentColor: string;
  background: string;
  glowCircle1: string;
  glowCircle2: string;
  glowCircle3: string;
  buttonShadow: string;
}

const getSubjectTheme = (subject: Subject | null): SubjectTheme => {
  if (!subject) {
    return {
      accent: "blue",
      glow: "from-blue-500/10 via-sky-500/5 to-transparent",
      border: "border-blue-100/80 focus-within:border-blue-400",
      text: "text-blue-600",
      badgeBg: "bg-blue-50",
      accentColor: "#3b82f6",
      background: "radial-gradient(ellipse at 70% 10%, #dbeafe 0%, #eff6ff 35%, #ffffff 70%)",
      glowCircle1: "bg-blue-400/20",
      glowCircle2: "bg-indigo-300/15",
      glowCircle3: "bg-blue-100/40",
      buttonShadow: "shadow-subject-blue",
    };
  }
  
  const name = subject.name.toLowerCase();
  const code = subject.code.toLowerCase();
  
  if (name.includes("math") || name.includes("gamat") || name.includes("algorithm") || name.includes("theory of computation") || name.includes("discrete")) {
    return {
      accent: "green",
      glow: "from-emerald-500/10 via-teal-500/5 to-transparent",
      border: "border-emerald-200/60 dark:border-emerald-500/20 focus-within:border-emerald-400",
      text: "text-emerald-600",
      badgeBg: "bg-emerald-50",
      accentColor: "#10b981",
      background: "radial-gradient(ellipse at 70% 10%, #d1fae5 0%, #ecfdf5 35%, #ffffff 70%)",
      glowCircle1: "bg-emerald-400/20",
      glowCircle2: "bg-teal-300/15",
      glowCircle3: "bg-emerald-100/40",
      buttonShadow: "shadow-subject-green",
    };
  }
  
  if (name.includes("database") || name.includes("dbms") || name.includes("data structure") || name.includes("information")) {
    return {
      accent: "purple",
      glow: "from-purple-500/10 via-fuchsia-500/5 to-transparent",
      border: "border-purple-200/60 dark:border-purple-500/20 focus-within:border-purple-400",
      text: "text-purple-600",
      badgeBg: "bg-purple-50",
      accentColor: "#a855f7",
      background: "radial-gradient(ellipse at 70% 10%, #f3e8ff 0%, #faf5ff 35%, #ffffff 70%)",
      glowCircle1: "bg-purple-400/20",
      glowCircle2: "bg-fuchsia-300/15",
      glowCircle3: "bg-purple-100/40",
      buttonShadow: "shadow-subject-purple",
    };
  }

  if (name.includes("operating system") || name.includes("architecture") || name.includes("network") || name.includes("microprocessor") || name.includes("hardware") || name.includes("coa") || name.includes("sys") || code.includes("cst202") || code.includes("cst206")) {
    return {
      accent: "blue",
      glow: "from-blue-500/10 via-sky-500/5 to-transparent",
      border: "border-blue-200/60 dark:border-blue-500/20 focus-within:border-blue-400",
      text: "text-blue-600",
      badgeBg: "bg-blue-50",
      accentColor: "#3b82f6",
      background: "radial-gradient(ellipse at 70% 10%, #dbeafe 0%, #eff6ff 35%, #ffffff 70%)",
      glowCircle1: "bg-blue-400/20",
      glowCircle2: "bg-indigo-300/15",
      glowCircle3: "bg-blue-100/40",
      buttonShadow: "shadow-subject-blue",
    };
  }
  
  if (name.includes("engineering") || name.includes("professional") || name.includes("design") || name.includes("management")) {
    return {
      accent: "amber",
      glow: "from-amber-500/10 via-orange-500/5 to-transparent",
      border: "border-amber-200/60 dark:border-amber-500/20 focus-within:border-amber-400",
      text: "text-amber-600",
      badgeBg: "bg-amber-50",
      accentColor: "#f59e0b",
      background: "radial-gradient(ellipse at 70% 10%, #fef3c7 0%, #fffbeb 35%, #ffffff 70%)",
      glowCircle1: "bg-amber-400/20",
      glowCircle2: "bg-orange-300/15",
      glowCircle3: "bg-amber-100/40",
      buttonShadow: "shadow-subject-amber",
    };
  }
  
  return {
    accent: "emerald",
    glow: "from-teal-500/10 via-emerald-500/5 to-transparent",
    border: "border-teal-200/60 dark:border-teal-500/20 focus-within:border-teal-400",
    text: "text-teal-600",
    badgeBg: "bg-teal-50",
    accentColor: "#14b8a6",
    background: "radial-gradient(ellipse at 70% 10%, #ccfbf1 0%, #f0fdfa 35%, #ffffff 70%)",
    glowCircle1: "bg-teal-400/20",
    glowCircle2: "bg-emerald-300/15",
    glowCircle3: "bg-teal-100/40",
    buttonShadow: "shadow-subject-emerald",
  };
};

function getSubjectIcon(name: string) {
  const lowerName = name.toLowerCase();
  if (lowerName.includes("math") || lowerName.includes("calculus") || lowerName.includes("algebra")) return Calculator;
  if (lowerName.includes("computer") || lowerName.includes("architecture")) return Cpu;
  if (lowerName.includes("software") || lowerName.includes("programming") || lowerName.includes("code")) return Code;
  if (lowerName.includes("data") || lowerName.includes("database")) return Database;
  if (lowerName.includes("network") || lowerName.includes("web") || lowerName.includes("internet")) return Globe;
  if (lowerName.includes("management") || lowerName.includes("business") || lowerName.includes("economics")) return Briefcase;
  if (lowerName.includes("chemistry") || lowerName.includes("science")) return FlaskConical;
  if (lowerName.includes("design") || lowerName.includes("drawing") || lowerName.includes("graphics")) return PenTool;
  if (lowerName.includes("hardware") || lowerName.includes("system")) return HardDrive;
  return BookOpen; // fallback
}

function DashboardContent() {
  const searchParams = useSearchParams();
  const branch = searchParams.get("branch") || "cs";
  const sem = parseInt(searchParams.get("sem") || "4", 10);
  const { resolvedTheme } = useTheme();

  const [view, setView] = useState<ViewState>("dashboard");
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [lastTopicId, setLastTopicId] = useState<string | null>(null);
  const [pinnedTopicIds, setPinnedTopicIds] = useState<string[]>([]);
  const [commandOpen, setCommandOpen] = useState(false);

  // User Authentication & Cloud Sync states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authTab, setAuthTab] = useState<"signin" | "signup">("signin");
  const [profilePanelOpen, setProfilePanelOpen] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState<string | null>(null);

  // Authentication Fields
  const [authName, setAuthName] = useState("");
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  // Haptic Feedback Engine supporting dynamic pressure & synthesized Web Audio
  const triggerHaptic = React.useCallback((
    type: "light" | "medium" | "heavy" | "success" | "warning",
    pressure?: number | React.PointerEvent | React.MouseEvent | React.TouchEvent | PointerEvent | MouseEvent
  ) => {
    if (typeof window === "undefined") return;

    // Extract pressure value (between 0.0 and 1.0)
    let pressureVal = 0.5; // default center weight
    if (typeof pressure === "number") {
      pressureVal = pressure;
    } else if (pressure && "nativeEvent" in pressure) {
      const nativeEvent = pressure.nativeEvent;
      if (nativeEvent instanceof PointerEvent) {
        pressureVal = nativeEvent.pressure > 0 ? nativeEvent.pressure : 0.5;
      }
    } else if (pressure && pressure instanceof PointerEvent) {
      pressureVal = pressure.pressure > 0 ? pressure.pressure : 0.5;
    }

    // Ensure pressure ranges between 0.1 and 1.0 to avoid silent or overly prolonged haptics
    pressureVal = Math.max(0.15, Math.min(1.0, pressureVal));

    // 1. Device Vibration
    if (navigator.vibrate) {
      try {
        let duration = 0;
        switch (type) {
          case "light":
            duration = 8;
            break;
          case "medium":
            duration = 15;
            break;
          case "heavy":
            duration = 30;
            break;
          case "success":
            navigator.vibrate([
              Math.round(12 * (0.5 + pressureVal)), 
              Math.round(45 * (0.5 + pressureVal)), 
              Math.round(12 * (0.5 + pressureVal))
            ]);
            break;
          case "warning":
            navigator.vibrate([
              Math.round(45 * (0.5 + pressureVal)), 
              Math.round(75 * (0.5 + pressureVal))
            ]);
            break;
        }
        if (duration > 0) {
          // Scale vibration duration by pressure (between 50% and 150% of base duration)
          const scaledDuration = Math.round(duration * (0.5 + pressureVal));
          navigator.vibrate(scaledDuration);
        }
      } catch (e) {
        // Silently block
      }
    }

    // 2. Synthesized Web Audio Tones
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const audioCtx = new AudioContextClass();

      const sweepTone = (startFreq: number, endFreq: number, baseDuration: number, baseGain: number) => {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.type = "triangle";
        
        // Dynamically scale pitch and volume using touch pressure
        const scaledStartFreq = startFreq * (0.7 + 0.6 * pressureVal);
        const scaledEndFreq = endFreq * (0.7 + 0.6 * pressureVal);
        const scaledGainVal = baseGain * (0.5 + pressureVal);
        const scaledDuration = baseDuration * (0.8 + 0.4 * pressureVal);
        
        osc.frequency.setValueAtTime(scaledStartFreq, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(scaledEndFreq, audioCtx.currentTime + scaledDuration);
        
        gainNode.gain.setValueAtTime(scaledGainVal, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + scaledDuration);
        
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + scaledDuration);
      };

      const playTone = (freq: number, start: number, baseDuration: number, oscType: "sine" | "triangle" = "sine", baseGain = 0.15) => {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.type = oscType;
        
        const scaledFreq = freq * (0.8 + 0.4 * pressureVal);
        const scaledGainVal = baseGain * (0.5 + pressureVal);
        const scaledDuration = baseDuration * (0.8 + 0.4 * pressureVal);
        
        osc.frequency.setValueAtTime(scaledFreq, audioCtx.currentTime + start);
        gainNode.gain.setValueAtTime(scaledGainVal, audioCtx.currentTime + start);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + start + scaledDuration);
        
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        osc.start(audioCtx.currentTime + start);
        osc.stop(audioCtx.currentTime + start + scaledDuration);
      };

      switch (type) {
        case "light":
          sweepTone(850, 180, 0.04, 0.08);
          break;
        case "medium":
          sweepTone(700, 120, 0.06, 0.12);
          break;
        case "heavy":
          sweepTone(550, 80, 0.09, 0.18);
          break;
        case "success":
          playTone(587.33, 0, 0.12, "triangle", 0.08); 
          playTone(880.00, 0.06, 0.32, "sine", 0.1);
          break;
        case "warning":
          sweepTone(220, 130, 0.12, 0.15);
          setTimeout(() => {
            try {
              sweepTone(220, 130, 0.12, 0.15);
            } catch {}
          }, 140);
          break;
      }
    } catch (e) {
      console.warn("Audio Context haptic failed or blocked", e);
    }
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);

  // Dynamic theme accents depending on selected subject
  const theme = getSubjectTheme(view === "dashboard" ? null : selectedSubject);
  
  const hueMap: Record<string, number> = {
    blue: 250,
    green: 150,
    emerald: 165,
    purple: 290,
    amber: 50,
    rose: 15,
  };
  const accentHue = hueMap[theme.accent] || 250;
  
  // Pomodoro Timer global states
  const [sessionMinutes, setSessionMinutes] = useState(25);
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTimerMuted, setIsTimerMuted] = useState(false);
  
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);


  const playChime = React.useCallback(() => {
    if (isTimerMuted || typeof window === "undefined") return;
    try {
      const AudioContextClass = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const audioCtx = new AudioContextClass();
      
      const playTone = (freq: number, start: number, duration: number) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + start);
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime + start);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + start + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(audioCtx.currentTime + start);
        osc.stop(audioCtx.currentTime + start + duration);
      };

      playTone(523.25, 0, 0.4); // C5
      playTone(659.25, 0.15, 0.6); // E5
      playTone(783.99, 0.3, 1.0); // G5
    } catch (e) {
      console.warn("Audio Context alert blocked or failed", e);
    }
  }, [isTimerMuted]);

  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning]);

  useEffect(() => {
    if (isTimerRunning && secondsLeft === 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      queueMicrotask(() => {
        setToast("Focus session completed! Take a break.");
        setIsTimerRunning(false);
      });
      playChime();
    }
  }, [secondsLeft, isTimerRunning, playChime]);

  const headingRef = React.useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Focus management for view accessibility transitions
    headingRef.current?.focus();
  }, [view, selectedSubject, selectedTopic]);

  const subjects = React.useMemo(() => getSubjectsForSession(branch, sem), [branch, sem]);
  const timetable = React.useMemo(() => getTimetable(branch, sem), [branch, sem]);
  const { completedTopics, toggleTopic, isCompleted, getModuleProgress, getSubjectProgress, isLoaded } = useProgress();

  // Next exam calculation
  const nextExam = React.useMemo(() => {
    const now = new Date();
    return [...timetable]
      .map((slot) => {
        const parsedDate = new Date(slot.date + "T00:00:00");
        let hour = 13;
        let minute = 30;
        if (slot.time.toLowerCase().includes("9:30 am")) {
          hour = 9;
          minute = 30;
        }
        parsedDate.setHours(hour, minute, 0, 0);
        return { ...slot, parsedDate };
      })
      .filter((exam) => exam.parsedDate.getTime() > now.getTime())
      .sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime())[0] || null;
  }, [timetable]);

  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; mins: number; secs: number } | null>(null);

  useEffect(() => {
    if (!nextExam) {
      queueMicrotask(() => {
        setTimeLeft(null);
      });
      return;
    }
    const updateCountdown = () => {
      const diff = nextExam.parsedDate.getTime() - new Date().getTime();
      if (diff <= 0) {
        setTimeLeft(null);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, mins, secs });
      }
    };
    queueMicrotask(() => {
      updateCountdown();
    });
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [nextExam]);



  const topicIndex: TopicIndexItem[] = subjects.flatMap((subject, subjectIndex) =>
    subject.modules.flatMap((module, moduleIndex) =>
      module.topics.map((topic, topicIndex) => ({
        subject,
        module,
        topic,
        subjectIndex,
        moduleIndex,
        topicIndex,
      }))
    )
  );

  const totalTopics = topicIndex.length;

  const lastTopic = topicIndex.find((item) => item.topic.id === lastTopicId) ?? null;
  const upNext = topicIndex.find((item) => !completedTopics.includes(item.topic.id)) ?? topicIndex[0] ?? null;
  const resumeTarget = lastTopic ?? upNext;
  const resumeTheme = getSubjectTheme(resumeTarget ? resumeTarget.subject : null);

  const filteredTopics = topicIndex.filter((item) => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return true;
    return [item.topic.title, item.subject.name, item.subject.code, item.module.title]
      .join(" ")
      .toLowerCase()
      .includes(query);
  });

  useEffect(() => {
    queueMicrotask(() => {
      setLastTopicId(localStorage.getItem("ktunode_last_topic"));
      const savedPins = localStorage.getItem("ktunode_pinned_topics");
      if (savedPins) {
        try {
          setPinnedTopicIds(JSON.parse(savedPins));
        } catch {
          setPinnedTopicIds([]);
        }
      }

      // Load Auth Session
      const savedLoggedIn = localStorage.getItem("ktunode_logged_in") === "true";
      if (savedLoggedIn) {
        setIsLoggedIn(true);
        setUserName(localStorage.getItem("ktunode_user_name") || "KTU Student");
        setUserEmail(localStorage.getItem("ktunode_user_email") || "student@ktu.edu");
        setLastSynced(localStorage.getItem("ktunode_last_synced"));
      }
    });
  }, []);

  // Listen to cross-component UI events from Navbar
  useEffect(() => {
    const handleOpenAuth = () => {
      setAuthTab("signin");
      setAuthModalOpen(true);
    };
    const handleOpenProfile = () => {
      setProfilePanelOpen(true);
    };

    window.addEventListener("ktunode-open-auth", handleOpenAuth);
    window.addEventListener("ktunode-open-profile", handleOpenProfile);

    return () => {
      window.removeEventListener("ktunode-open-auth", handleOpenAuth);
      window.removeEventListener("ktunode-open-profile", handleOpenProfile);
    };
  }, []);

  // Sync initial query params deep linking
  useEffect(() => {
    if (!isLoaded) return;
    const params = new URLSearchParams(window.location.search);
    const subjectId = params.get("subject");
    const topicId = params.get("topic");
    const openAuth = params.get("auth");
    const openProfile = params.get("profile");

    if (openAuth === "open") {
      setAuthTab("signin");
      setAuthModalOpen(true);
      const newParams = new URLSearchParams(window.location.search);
      newParams.delete("auth");
      window.history.replaceState({}, "", `${window.location.pathname}?${newParams.toString()}`);
    } else if (openProfile === "open") {
      setProfilePanelOpen(true);
      const newParams = new URLSearchParams(window.location.search);
      newParams.delete("profile");
      window.history.replaceState({}, "", `${window.location.pathname}?${newParams.toString()}`);
    }

    if (topicId && subjectId) {
      const targetSub = subjects.find(s => s.id === subjectId);
      if (targetSub) {
        const targetTop = targetSub.modules.flatMap(m => m.topics).find(t => t.id === topicId);
        if (targetTop) {
          setSelectedSubject(targetSub);
          setSelectedTopic(targetTop);
          setView("topic");
        }
      }
    } else if (subjectId) {
      const targetSub = subjects.find(s => s.id === subjectId);
      if (targetSub) {
        setSelectedSubject(targetSub);
        setView("subject");
      }
    }
  }, [isLoaded, subjects]);

  // Listen to popstate for browser back button syncing
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const subjectId = params.get("subject");
      const topicId = params.get("topic");

      if (topicId && subjectId) {
        const targetSub = subjects.find(s => s.id === subjectId);
        if (targetSub) {
          const targetTop = targetSub.modules.flatMap(m => m.topics).find(t => t.id === topicId);
          if (targetTop) {
            setSelectedSubject(targetSub);
            setSelectedTopic(targetTop);
            setView("topic");
            triggerHaptic("light");
            return;
          }
        }
      }

      if (subjectId) {
        const targetSub = subjects.find(s => s.id === subjectId);
        if (targetSub) {
          setSelectedSubject(targetSub);
          setSelectedTopic(null);
          setView("subject");
          triggerHaptic("light");
          return;
        }
      }

      setSelectedSubject(null);
      setSelectedTopic(null);
      setView("dashboard");
      triggerHaptic("light");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [subjects, triggerHaptic]);

  // Handle Sign In / Sign Up submission
  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");

    if (authTab === "signup" && !authName.trim()) {
      setAuthError("Name is required");
      triggerHaptic("warning");
      return;
    }
    if (!authEmail.trim() || !authEmail.includes("@")) {
      setAuthError("Please enter a valid email");
      triggerHaptic("warning");
      return;
    }
    if (authPassword.length < 6) {
      setAuthError("Password must be at least 6 characters");
      triggerHaptic("warning");
      return;
    }

    setAuthLoading(true);
    triggerHaptic("medium");

    setTimeout(() => {
      setAuthLoading(false);
      setIsLoggedIn(true);
      const computedName = authTab === "signup" ? authName : authEmail.split("@")[0];
      setUserName(computedName);
      setUserEmail(authEmail);
      
      localStorage.setItem("ktunode_logged_in", "true");
      localStorage.setItem("ktunode_user_name", computedName);
      localStorage.setItem("ktunode_user_email", authEmail);

      window.dispatchEvent(new CustomEvent("ktunode-auth-change", {
        detail: { isLoggedIn: true, userName: computedName }
      }));

      // Log JSON payload to console prepare for backend
      console.log("Ready for backend:", {
        action: authTab,
        data: {
          name: computedName,
          email: authEmail,
          completedTopics,
        }
      });

      setAuthModalOpen(false);
      showToast(authTab === "signup" ? "Account created successfully!" : "Signed in successfully!");
      triggerHaptic("success");

      // Reset form fields
      setAuthName("");
      setAuthEmail("");
      setAuthPassword("");
    }, 1200);
  };

  // Handle Cloud Syncing
  const handleCloudSync = () => {
    if (syncing) return;
    setSyncing(true);
    triggerHaptic("medium");

    setTimeout(() => {
      setSyncing(false);
      const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setLastSynced(now);
      localStorage.setItem("ktunode_last_synced", now);

      // Log sync data payload to console
      console.log("Syncing to Cloud backend:", {
        email: userEmail,
        completedTopics,
        syncedAt: new Date().toISOString()
      });

      showToast("Progress synced to cloud!");
      triggerHaptic("success");
    }, 1500);
  };

  // Handle Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setUserEmail("");
    setLastSynced(null);
    localStorage.removeItem("ktunode_logged_in");
    localStorage.removeItem("ktunode_user_name");
    localStorage.removeItem("ktunode_user_email");
    localStorage.removeItem("ktunode_last_synced");

    window.dispatchEvent(new CustomEvent("ktunode-auth-change", {
      detail: { isLoggedIn: false, userName: "" }
    }));
    
    setProfilePanelOpen(false);
    showToast("Logged out successfully.");
    triggerHaptic("light");
  };

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem("ktunode_pinned_topics", JSON.stringify(pinnedTopicIds));
  }, [pinnedTopicIds, isLoaded]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen(true);
      }
      if (event.key === "Escape") {
        if (commandOpen) {
          setCommandOpen(false);
        } else if (authModalOpen) {
          setAuthModalOpen(false);
        } else if (profilePanelOpen) {
          setProfilePanelOpen(false);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [commandOpen, authModalOpen, profilePanelOpen]);

  const startTransition = (callback: () => void) => {
    setIsTransitioning(true);
    setTimeout(() => {
      callback();
      setIsTransitioning(false);
    }, 400);
  };

  const goHome = (event?: React.MouseEvent | React.PointerEvent) => {
    startTransition(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setView("dashboard");
      setSelectedSubject(null);
      setSelectedTopic(null);
      // Push history state preserving sem/branch
      const params = new URLSearchParams(window.location.search);
      params.delete("subject");
      params.delete("topic");
      const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
      window.history.pushState({ view: "dashboard" }, "", newUrl);
    });
    triggerHaptic("light", event);
  };

  const goSubject = (subject: Subject, event?: React.MouseEvent | React.PointerEvent) => {
    startTransition(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setSelectedSubject(subject);
      setView("subject");
      // Push history state preserving sem/branch
      const params = new URLSearchParams(window.location.search);
      params.set("subject", subject.id);
      params.delete("topic");
      window.history.pushState({ view: "subject", subjectId: subject.id }, "", `?${params.toString()}`);
    });
    triggerHaptic("medium", event);
  };

  const goTopic = (topic: Topic, subject?: Subject, event?: React.MouseEvent | React.PointerEvent) => {
    const owner = subject ?? topicIndex.find((item) => item.topic.id === topic.id)?.subject ?? selectedSubject;
    startTransition(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (owner) setSelectedSubject(owner);
      setSelectedTopic(topic);
      setLastTopicId(topic.id);
      localStorage.setItem("ktunode_last_topic", topic.id);
      setView("topic");
      // Push history state preserving sem/branch
      const params = new URLSearchParams(window.location.search);
      if (owner) params.set("subject", owner.id);
      params.set("topic", topic.id);
      window.history.pushState({ view: "topic", subjectId: owner?.id, topicId: topic.id }, "", `?${params.toString()}`);
    });
    setCommandOpen(false);
    triggerHaptic("medium", event);
  };

  const togglePinnedTopic = (topicId: string) => {
    triggerHaptic("light");
    setPinnedTopicIds((current) =>
      current.includes(topicId) ? current.filter((id) => id !== topicId) : [topicId, ...current].slice(0, 4)
    );
  };

  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showToast = (message: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast(message);
    toastTimeoutRef.current = setTimeout(() => setToast(null), 3000);
  };

  const playCheckChime = React.useCallback(() => {
    if (typeof window === "undefined") return;
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const audioCtx = new AudioContextClass();
      
      const playTone = (freq: number, start: number, duration: number, type: "sine" | "triangle" = "sine", gainVal = 0.15) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + start);
        gain.gain.setValueAtTime(gainVal, audioCtx.currentTime + start);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + start + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(audioCtx.currentTime + start);
        osc.stop(audioCtx.currentTime + start + duration);
      };

      // Satisfying pop double chime (D5 pop then gentle A5 shine tone)
      playTone(587.33, 0, 0.12, "triangle", 0.08); 
      playTone(880.00, 0.06, 0.32, "sine", 0.1);
    } catch (e) {
      console.warn("Audio Context check chime failed", e);
    }
  }, []);

  const fireConfettiReward = (originX = 0.5, originY = 0.85) => {
    const colors = ["#2E95FF", "#10B981", "#60A5FA", "#34D399", "#818CF8", "#A78BFA"];
    confetti({
      particleCount: 45,
      spread: 55,
      origin: { x: originX, y: originY },
      colors,
      disableForReducedMotion: true,
    });
  };

  const handleToggleTopic = (item: TopicIndexItem | Topic, event?: React.MouseEvent | React.PointerEvent) => {
    const topic = "topic" in item ? item.topic : item;
    const indexItem = "topic" in item ? item : topicIndex.find((entry) => entry.topic.id === topic.id);
    const wasCompleted = isCompleted(topic.id);
    const nextState = wasCompleted ? "marked incomplete" : "marked complete";
    toggleTopic(topic.id);
    if (!wasCompleted) {
      triggerHaptic("success", event);
      let originX = 0.5;
      let originY = 0.85;
      if (event) {
        originX = event.clientX / window.innerWidth;
        originY = event.clientY / window.innerHeight;
      }
      fireConfettiReward(originX, originY);
    } else {
      triggerHaptic("medium", event);
    }
    showToast(`${indexItem?.module.title ?? "Topic"}: ${topic.title} ${nextState}.`);
  };

  const flattenedTopics = selectedSubject ? selectedSubject.modules.flatMap((module) => module.topics) : [];
  const currentTopicIndex = selectedTopic ? flattenedTopics.findIndex((topic) => topic.id === selectedTopic.id) : -1;
  const prevTopic = currentTopicIndex > 0 ? flattenedTopics[currentTopicIndex - 1] : null;
  const nextTopic = currentTopicIndex < flattenedTopics.length - 1 ? flattenedTopics[currentTopicIndex + 1] : null;
  const skeletonCards = Array.from({ length: 4 }, (_, index) => index);

  return (
    <div
      className="h-screen overflow-hidden relative flex flex-col font-sans transition-colors duration-500 text-slate-900 dark:text-slate-100 bg-background"
      style={{
        background: resolvedTheme === "dark"
          ? `radial-gradient(ellipse at 70% 10%, oklch(18% 0.035 ${accentHue}) 0%, oklch(14% 0.015 250) 45%, oklch(12% 0.01 250) 80%)`
          : theme.background
      }}
    >
      <div className="absolute inset-0 z-0 dot-grid opacity-[0.08] pointer-events-none" />
      <div className="absolute inset-0 z-0 noise-overlay opacity-[0.25] pointer-events-none" />
      <div className={`absolute top-[-80px] right-[-80px] w-[700px] h-[700px] rounded-full ${theme.glowCircle1} dark:bg-blue-500/5 blur-[160px] pointer-events-none z-0 bg-orb-1 transition-colors duration-500`} />
      <div className={`absolute bottom-[-60px] left-[-60px] w-[600px] h-[600px] rounded-full ${theme.glowCircle2} dark:bg-indigo-500/5 blur-[140px] pointer-events-none z-0 bg-orb-2 transition-colors duration-500`} />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full ${theme.glowCircle3} dark:bg-blue-400/5 blur-[120px] pointer-events-none z-0 bg-orb-3 transition-colors duration-500`} />

      <a href="#dashboard-heading" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-md">
        Skip to main content
      </a>

      <Navbar />

      <main className="relative flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 pt-28 md:pt-32 flex overflow-y-auto lg:overflow-hidden z-10 scrollbar-none">
        <AnimatePresence mode="wait">
          {isTransitioning && (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-4xl mx-auto h-full space-y-6 px-1 mt-6"
            >
              {/* Back button skeleton */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-slate-200/50 dark:bg-slate-800/50 animate-pulse" />
                <div className="w-24 h-4 bg-slate-200/50 dark:bg-slate-800/50 animate-pulse rounded-md" />
              </div>

              {/* Title area skeleton */}
              <div className="space-y-3 mb-10">
                <div className="w-16 h-4 bg-slate-200/50 dark:bg-slate-800/50 animate-pulse rounded-md" />
                <div className="w-2/3 h-10 bg-slate-200/50 dark:bg-slate-800/50 animate-pulse rounded-xl" />
              </div>

              {/* Modules/Content cards skeleton */}
              <div className="space-y-5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-5 space-y-4 shadow-sm">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-100/50 dark:border-slate-800/50">
                      <div className="w-48 h-6 bg-slate-200/50 dark:bg-slate-800/50 animate-pulse rounded-lg" />
                      <div className="w-12 h-4 bg-slate-200/50 dark:bg-slate-800/50 animate-pulse rounded-md" />
                    </div>
                    <div className="space-y-3">
                      {[1, 2].map((j) => (
                        <div key={j} className="flex justify-between items-center py-1">
                          <div className="w-3/4 h-5 bg-slate-100/50 dark:bg-slate-800/30 animate-pulse rounded-md" />
                          <div className="w-6 h-6 bg-slate-100/50 dark:bg-slate-800/30 animate-pulse rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {!isTransitioning && view === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 h-auto lg:h-full items-start"
            >
              <div className="lg:col-span-8 space-y-5 md:space-y-6 h-auto lg:h-full lg:overflow-y-auto pb-6 lg:pb-32 pr-1 md:pr-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-lg text-[9px] font-black tracking-widest uppercase bg-slate-950/[0.04] dark:bg-white/[0.04] border border-slate-950/[0.06] dark:border-white/[0.06] text-slate-700 dark:text-slate-300 shadow-none">
                        S{sem} {branch.toUpperCase()}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400">Current Semester</span>
                    </div>
                    <h2 
                      id="dashboard-heading"
                      ref={headingRef}
                      tabIndex={-1}
                      className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-slate-50 leading-tight focus:outline-none"
                    >
                      Welcome back to study.
                    </h2>
                    <p className="text-xs md:text-sm font-bold text-slate-500 dark:text-slate-400">
                      Get started with your courses, plan your study routine, or search the syllabus.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-stretch md:self-auto shrink-0 justify-between md:justify-end">

                    {/* Unified Progress Card for Mobile and Desktop */}
                    <div className="flex flex-col gap-2 bg-white/65 dark:bg-slate-900/65 border border-slate-950/[0.06] dark:border-white/[0.06] p-4.5 rounded-[20px] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.06)] dark:shadow-none min-w-[160px] md:min-w-[180px] backdrop-blur-md relative overflow-hidden group self-stretch shrink-0">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-slate-900/[0.01] dark:bg-white/[0.01] rounded-full blur-xl pointer-events-none" />
                      <div className="flex items-center justify-between gap-4 w-full">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Overall Progress</span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[9px] font-black leading-none">
                          {totalTopics > 0 ? Math.round((completedTopics.length / totalTopics) * 100) : 0}%
                        </span>
                      </div>
                      
                      <div className="text-base font-black text-slate-800 dark:text-slate-100 tracking-tight leading-none mt-1">
                        {completedTopics.length} <span className="text-xs text-slate-400/80 font-bold">/ {totalTopics} topics</span>
                      </div>

                      <div className="w-full h-2 bg-slate-950/[0.06] dark:bg-white/[0.06] rounded-full overflow-hidden mt-1 relative">
                        <div
                          className="h-full bg-slate-900 dark:bg-slate-100 transition-all duration-500 rounded-full"
                          style={{ width: `${totalTopics > 0 ? (completedTopics.length / totalTopics) * 100 : 0}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Next Exam Card (mobile only) */}
                {nextExam && (
                  <div className="w-full lg:hidden z-10">
                    <div className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-white/70 dark:bg-slate-900/70 border border-slate-950/[0.04] dark:border-white/[0.04] rounded-[20px] backdrop-blur-md shadow-sm">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="w-9 h-9 rounded-xl bg-indigo-500/[0.06] border border-indigo-500/[0.1] flex items-center justify-center text-indigo-600 shrink-0">
                          <Clock className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="block text-[9px] font-black tracking-wider uppercase text-slate-400 leading-none">Next Exam</span>
                          <span className="text-xs font-black text-slate-800 leading-tight block truncate mt-1">
                            {nextExam.subjectName}
                          </span>
                        </div>
                      </div>

                      {/* Real-time Countdown Blocks */}
                      <div className="flex items-center gap-1 shrink-0 select-none">
                        {timeLeft ? (
                          [
                            { val: timeLeft.days, unit: "d" },
                            { val: timeLeft.hours, unit: "h" },
                            { val: timeLeft.mins, unit: "m" },
                            { val: timeLeft.secs, unit: "s" }
                          ].map((item, idx) => (
                            <div
                              key={idx}
                              className={`flex items-baseline bg-slate-950/[0.03] border border-slate-950/[0.04] px-1.5 py-1 rounded-lg ${
                                idx === 3 ? "max-[359px]:hidden" : ""
                              }`}
                            >
                              <span className="text-xs font-black text-slate-800 tabular-nums leading-none">
                                {String(item.val).padStart(2, "0")}
                              </span>
                              <span className="text-[8px] font-black text-indigo-500/90 ml-0.5 lowercase leading-none">
                                {item.unit}
                              </span>
                            </div>
                          ))
                        ) : (
                          <span className="text-xs font-black text-rose-500 bg-rose-50 border border-rose-100 px-2.5 py-1 rounded-lg">
                            Started
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setCommandOpen(true)}
                  className="w-full flex items-center gap-3 px-4 md:px-5 py-3.5 md:py-4 rounded-xl md:rounded-[20px] bg-white/65 dark:bg-slate-900/65 hover:bg-white hover:dark:bg-slate-900 border border-slate-950/[0.06] dark:border-white/[0.06] hover:border-slate-950/[0.12] hover:dark:border-white/[0.12] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] hover:dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] cursor-pointer transition-all duration-300 text-slate-400 font-medium backdrop-blur-md text-left"
                  aria-label="Search Syllabus (Press Ctrl K to search anytime)"
                >
                  <Search className="w-5 h-5 text-slate-400 shrink-0" />
                  <span className="text-xs md:text-sm truncate">Search topics, syllabus, or previous questions...</span>
                  <div className="ml-auto hidden md:flex items-center gap-1 shrink-0">
                    <kbd className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-black text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">Ctrl</kbd>
                    <kbd className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-black text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">K</kbd>
                  </div>
                </button>

                {resumeTarget && (
                  <div className={`relative rounded-xl md:rounded-[20px] overflow-hidden bg-white/65 dark:bg-slate-900/65 border transition-all duration-300 backdrop-blur-md p-5 md:p-8 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] group hover:border-slate-950/[0.12] hover:dark:border-white/[0.12] ${resumeTheme.border}`}>
                    <div className="absolute inset-0 opacity-[0.01] bg-slate-950 pointer-events-none" />
                    
                    {/* Corner gradient glow matching subject theme */}
                    <div className={`absolute -right-16 -top-16 w-48 h-48 bg-gradient-to-br ${resumeTheme.accent === 'green' ? 'from-emerald-400/20' : resumeTheme.accent === 'purple' ? 'from-purple-400/20' : resumeTheme.accent === 'amber' ? 'from-amber-400/20' : resumeTheme.accent === 'emerald' ? 'from-teal-400/20' : 'from-blue-400/20'} to-transparent blur-2xl rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500`} />
                    
                    {/* Background icon watermark matching subject theme */}
                    <div className={`absolute -bottom-6 -right-6 opacity-[0.07] pointer-events-none transform -rotate-12 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 ease-out text-slate-900 dark:text-slate-100`}>
                      {React.createElement(getSubjectIcon(resumeTarget.subject.name), { className: "w-40 h-40" })}
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-slate-800 dark:text-slate-100 fill-current" />
                          <span className="text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-widest">UP NEXT IN {resumeTarget.subject.code}</span>
                        </div>
                        <h3 className="text-lg md:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">{resumeTarget.topic.title}</h3>
                        <p className="text-[10px] md:text-xs font-semibold text-slate-400 dark:text-slate-500">{resumeTarget.module.title} • Resume learning session</p>
                      </div>
                      <MagneticButton
                        onClick={() => goTopic(resumeTarget.topic, resumeTarget.subject)}
                        className="!rounded-xl !px-5 md:!px-6 !py-3 md:!py-3.5 !text-xs md:!text-sm !font-black shrink-0 self-start md:self-auto"
                      >
                        Resume Study <ArrowRight className="w-4 h-4 ml-1.5" />
                      </MagneticButton>
                    </div>
                  </div>
                )}

                <div className="space-y-5 md:space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-black text-slate-800 dark:text-slate-100 tracking-tight">Your Courses</h3>
                    <span className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400">{subjects.length} active courses</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {!isLoaded
                      ? skeletonCards.slice(0, 4).map((item) => (
                          <div key={item} className="h-36 rounded-[20px] bg-white/40 dark:bg-slate-850/40 animate-pulse border border-slate-950/[0.04] dark:border-white/[0.04] shadow-sm" />
                        ))
                      : subjects.map((subject, index) => {
                          const allTopicIds = subject.modules.flatMap((module) => module.topics.map((topic) => topic.id));
                           const progress = getSubjectProgress(allTopicIds);
                           const scheme = colorSchemes[index % colorSchemes.length];

                           const radius = 18;
                           const circumference = 2 * Math.PI * radius;
                           const strokeDashoffset = circumference - (progress / 100) * circumference;

                           return (
                            <motion.button
                              key={subject.id}
                              type="button"
                              whileHover={{ y: -4, scale: 1.01 }}
                              whileTap={{ scale: 0.98 }}
                              transition={{ 
                                opacity: { delay: index * 0.05 + 0.1, duration: 0.4, ease: [0.23, 1, 0.32, 1] },
                                y: { type: "spring", stiffness: 300, damping: 20, delay: index * 0.05 + 0.1 },
                                scale: { type: "spring", stiffness: 300, damping: 20 }
                              }}
                              onClick={() => goSubject(subject)}
                              className={`group relative flex flex-col justify-between p-6 border rounded-[20px] text-left transition-all duration-300 cursor-pointer backdrop-blur-md overflow-hidden ${scheme.bg} w-full`}
                            >
                              {/* Dynamic Background Watermark */}
                              <div className="absolute -bottom-6 -right-6 opacity-[0.03] pointer-events-none transform -rotate-12 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 ease-out text-slate-900 dark:text-slate-100">
                                {React.createElement(getSubjectIcon(subject.name), { className: "w-40 h-40" })}
                              </div>
                              {/* Subtle hover glare effect */}
                              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-white/40 via-transparent to-transparent group-hover:opacity-100 pointer-events-none" />
                              <div className="flex items-start justify-between gap-4 w-full">
                                  <div className="space-y-1 max-w-[calc(100%-3.2rem)]">
                                    <div className="flex items-center gap-1.5">
                                      <span className={`w-1.5 h-1.5 rounded-full ${scheme.dot}`} />
                                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">{subject.code}</span>
                                    </div>
                                    <h4 className="text-base font-black text-slate-900 dark:text-slate-100 leading-tight line-clamp-2">{subject.name}</h4>
                                  </div>

                                  <div className="relative shrink-0 w-11 h-11 flex items-center justify-center bg-white/80 dark:bg-slate-800/80 rounded-full shadow-inner border border-slate-950/[0.04] dark:border-white/[0.04]">
                                    <svg className="w-11 h-11 transform -rotate-90 shrink-0" viewBox="0 0 40 40">
                                      <circle cx="20" cy="20" r={radius} className="stroke-slate-950/[0.03] dark:stroke-white/[0.03] fill-none" strokeWidth="2.5" />
                                      <circle
                                        cx="20"
                                        cy="20"
                                        r={radius}
                                        className={`${scheme.stroke} fill-none transition-all duration-700 ease-out`}
                                        strokeWidth="2.5"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={strokeDashoffset}
                                        strokeLinecap="round"
                                      />
                                    </svg>
                                    <span className="absolute text-[10px] font-black text-slate-800 dark:text-slate-200">{progress}%</span>
                                  </div>
                              </div>

                              <div className="mt-6 pt-4 border-t border-slate-950/[0.06] dark:border-white/[0.06] flex items-center justify-between w-full text-[11px] font-semibold text-slate-400/50 dark:text-slate-400">
                                <span>{subject.modules.length} Modules • {allTopicIds.length} Topics</span>
                                <div className={`flex items-center gap-1 text-slate-400 dark:text-slate-350 ${schemeHoverTextMap[scheme.text] || "group-hover:text-blue-600"} group-hover:translate-x-0.5 transition-all`}>
                                  <span>Open</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </div>
                              </div>
                            </motion.button>
                          );
                        })}
                  </div>
                </div>


              </div>

              {/* Right column sidebar (Desktop only) */}
              <div className="hidden lg:block lg:col-span-4 space-y-6 h-auto lg:h-full lg:overflow-y-auto pb-24 lg:pb-32 pr-1 md:pr-2">

                <PomodoroTimer
                  sessionMinutes={sessionMinutes}
                  setSessionMinutes={setSessionMinutes}
                  secondsLeft={secondsLeft}
                  setSecondsLeft={setSecondsLeft}
                  isRunning={isTimerRunning}
                  setIsRunning={setIsTimerRunning}
                  isMuted={isTimerMuted}
                  setIsMuted={setIsTimerMuted}
                />

                <TimetableWidget timetable={timetable} sem={sem} branch={branch} />

                {pinnedTopicIds.length > 0 && (
                  <div className="bg-white/65 dark:bg-slate-900/65 backdrop-blur-md border border-slate-950/[0.06] dark:border-white/[0.06] rounded-[20px] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.01),0_1px_2px_rgba(0,0,0,0.01)] dark:shadow-none">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/[0.06] border border-amber-500/[0.15] flex items-center justify-center text-amber-600">
                        <Star className="w-4 h-4 fill-current animate-pulse" />
                      </div>
                      <div>
                        <h3 className="font-black text-slate-900 text-base leading-tight">Pinned Topics</h3>
                        <p className="text-xs text-slate-400/80 font-bold">Star tough items to pin here</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {pinnedTopicIds.map((id) => {
                        const item = topicIndex.find((t) => t.topic.id === id);
                        if (!item) return null;
                        return (
                          <button
                            key={id}
                            type="button"
                            onClick={() => goTopic(item.topic, item.subject)}
                            className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-950/[0.02] hover:bg-amber-500/[0.04] border border-transparent hover:border-amber-500/[0.15] transition-all text-left group"
                          >
                            <span className="min-w-0 flex-1">
                              <span className="block text-xs font-black text-slate-800 truncate">{item.topic.title}</span>
                              <span className="block text-[10px] font-bold text-slate-400/80 truncate">{item.subject.code}</span>
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {!isTransitioning && view === "subject" && selectedSubject && (
            <motion.div
              key="subject"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-4xl mx-auto h-full overflow-y-auto pb-32 px-1"
            >
              <button onClick={goHome} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors mb-8 group">
                <div className="w-8 h-8 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-slate-300 dark:group-hover:border-slate-700 shadow-sm">
                  <ChevronLeft className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                </div>
                Back to Dashboard
              </button>
 
              <div className="mb-10 text-center md:text-left">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2 block">{selectedSubject.code}</span>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-slate-100 leading-[1.2]">
                  <span className="gradient-text">{selectedSubject.name}</span>
                </h1>
              </div>
 
              {selectedSubject.modules.length > 0 ? (
                <div className="space-y-6">
                  {selectedSubject.modules.map((module, index) => {
                    const moduleTopicIds = module.topics.map((topic) => topic.id);
                    const progress = getModuleProgress(moduleTopicIds);
                    const isModuleComplete = progress === 100;
 
                    return (
                      <motion.div
                        key={module.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.4 }}
                        className={`bg-white/96 dark:bg-slate-900/96 backdrop-blur-xl rounded-3xl border overflow-hidden transition-all duration-500 ${isModuleComplete ? 'border-emerald-500/30 dark:border-emerald-500/20 shadow-[0_4px_20px_rgba(16,185,129,0.05)] dark:shadow-none' : 'border-blue-100/80 dark:border-slate-800'}`}
                      >
                        <div className={`px-6 py-5 border-b flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-500 ${isModuleComplete ? 'bg-emerald-50/30 dark:bg-emerald-950/20 border-emerald-500/20 dark:border-emerald-900/30' : 'bg-white/50 dark:bg-slate-900/50 border-blue-50/50 dark:border-slate-800'}`}>
                          <h2 className="text-xl font-black text-slate-800 dark:text-slate-100 flex items-start gap-2 leading-snug">
                            <span className="flex-1 min-w-0 break-words">{module.title}</span>
                            {isModuleComplete && (
                              <BadgeCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                            )}
                          </h2>
                          {isLoaded && (
                            <div className="flex flex-wrap items-center gap-3">
                              {isModuleComplete ? (
                                <span className="px-3 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-[10px] font-black tracking-widest uppercase flex items-center gap-1.5 shrink-0 border border-emerald-200/50 dark:border-emerald-900/30">
                                  <Sparkles className="w-3 h-3 animate-pulse" />
                                  Mastery Achieved
                                </span>
                              ) : (
                                <div className="flex items-center gap-3 shrink-0">
                                  <span className="text-[10px] font-black text-slate-400 tracking-wider">MODULE PROGRESS</span>
                                  <div className="w-20 sm:w-24 h-2 bg-slate-100 dark:bg-slate-850 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${progress}%` }} />
                                  </div>
                                  <span className="text-xs font-black text-emerald-600 dark:text-emerald-450 w-8 text-right">{progress}%</span>
                                </div>
                              )}
                              
                              <button 
                                onClick={() => {
                                  module.topics.forEach(t => {
                                    if (!isCompleted(t.id)) toggleTopic(t.id);
                                  });
                                }}
                                className={`ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black transition-all shrink-0 ${isModuleComplete ? 'bg-slate-100 dark:bg-slate-850 text-slate-400 dark:text-slate-500 opacity-50 cursor-not-allowed' : 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:bg-blue-100 hover:dark:bg-slate-700 active:scale-95'}`}
                                disabled={isModuleComplete}
                              >
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Complete All
                              </button>
                            </div>
                          )}
                        </div>
                        <div className="divide-y divide-blue-50/50 dark:divide-slate-850/50 p-2">
                          {module.topics.map((topic) => {
                            const done = isCompleted(topic.id);
                            const pinned = pinnedTopicIds.includes(topic.id);
                            return (
                              <div key={topic.id} className="px-4 py-4 mx-2 rounded-2xl flex items-start justify-between hover:bg-blue-50/50 dark:hover:bg-slate-800/50 transition-all duration-200 group gap-3">
                                <button type="button" onClick={() => goTopic(topic, selectedSubject)} className="min-w-0 flex-1 flex items-start gap-3 text-left">
                                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border mt-0.5 transition-all ${done ? "bg-emerald-100 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-450" : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-750 text-slate-300 dark:text-slate-600 group-hover:border-blue-300 dark:group-hover:border-blue-750"}`}>
                                    {done ? <CheckCircle2 className="w-4 h-4" /> : <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700" />}
                                  </div>
                                  <span className={`text-sm font-black transition-colors leading-relaxed break-words flex-1 mt-0.5 ${done ? "text-slate-500 dark:text-slate-450 line-through decoration-slate-300 dark:decoration-slate-700" : "text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400"}`}>
                                    {topic.title}
                                  </span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => togglePinnedTopic(topic.id)}
                                  className={`h-9 w-9 rounded-xl flex items-center justify-center transition-colors shrink-0 ${pinned ? "bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-200/50 dark:border-amber-900/30" : "text-slate-300 dark:text-slate-600 hover:bg-amber-50 hover:dark:bg-amber-950/20 hover:text-amber-500 hover:dark:text-amber-400"}`}
                                  aria-label={pinned ? "Unpin tough topic" : "Pin tough topic"}
                                >
                                  <Star className={`w-4 h-4 ${pinned ? "fill-current" : ""}`} />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white/96 dark:bg-slate-900/96 backdrop-blur-xl rounded-3xl border border-blue-100/80 dark:border-slate-800 p-12 text-center" style={{ boxShadow: "0 16px 56px rgba(37,99,235,0.08)" }}>
                  <LayoutList className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
                  <h3 className="text-lg font-black text-slate-700 dark:text-slate-200 mb-1">No Modules Yet</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Content for this subject is being updated.</p>
                </div>
              )}
            </motion.div>
          )}

          {!isTransitioning && view === "topic" && selectedTopic && (
            <motion.div
              key="topic"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-4xl mx-auto h-full overflow-y-auto pb-24 px-1 relative"
            >
              <button 
                onClick={() => goSubject(selectedSubject!)} 
                className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors mb-6 md:mb-8 group"
                aria-label={`Back to ${selectedSubject?.name ?? "subject"}`}
              >
                <div className="w-8 h-8 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-slate-300 dark:group-hover:border-slate-700 shadow-sm">
                  <ChevronLeft className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                </div>
                Back to {selectedSubject?.name}
              </button>

              {/* Swipe-enabled content card */}
              <motion.div 
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.35}
                onDragEnd={(e, info) => {
                  const threshold = 110;
                  if (info.offset.x < -threshold && nextTopic) {
                    goTopic(nextTopic, selectedSubject!);
                  } else if (info.offset.x > threshold && prevTopic) {
                    goTopic(prevTopic, selectedSubject!);
                  }
                }}
                className="spotlight-card rounded-[2rem] md:rounded-[2.5rem] bg-white/96 dark:bg-slate-900/96 border border-white/70 dark:border-slate-800 overflow-hidden min-h-[60vh] relative shadow-sm dark:shadow-[0_16px_50px_rgba(0,0,0,0.3)]"
              >
                <div className="mb-6 md:mb-8 border-b border-slate-100 dark:border-slate-800 pb-6 md:pb-8 pt-6 md:pt-8 flex items-start justify-between gap-4 max-w-3xl mx-auto px-4 md:px-0">
                  <h1 
                    id="topic-heading"
                    ref={headingRef}
                    tabIndex={-1}
                    className="text-2xl md:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-[1.1] focus:outline-none"
                  >
                    {selectedTopic.title}
                  </h1>
                  <button
                    type="button"
                    onClick={() => togglePinnedTopic(selectedTopic.id)}
                    className={`h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 transition-colors ${pinnedTopicIds.includes(selectedTopic.id) ? "bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-450 border border-amber-200/50 dark:border-amber-900/30" : "bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:bg-amber-50 hover:dark:bg-amber-950/20 hover:text-amber-500 hover:dark:text-amber-400"}`}
                    aria-label={pinnedTopicIds.includes(selectedTopic.id) ? "Unpin tough topic" : "Pin tough topic"}
                  >
                    <Star className={`w-4.5 h-4.5 md:w-5 md:h-5 ${pinnedTopicIds.includes(selectedTopic.id) ? "fill-current" : ""}`} />
                  </button>
                </div>

                <div className="px-4 md:px-0">
                  <MarkdownRenderer content={selectedTopic.content} stripH1={true} />
                </div>

                {selectedTopic.pyqs && selectedTopic.pyqs.length > 0 && (
                  <div className="mt-10 md:mt-12 max-w-3xl mx-auto bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/20 dark:to-slate-900/60 border border-indigo-200/70 dark:border-indigo-900/30 rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-[0_8px_30px_rgba(99,102,241,0.08)] dark:shadow-none relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-3 md:mb-4 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
                        <BadgeCheck className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] md:text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Model Question (2024 Scheme)</span>
                      <span className="ml-auto text-[10px] md:text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-950 px-3 py-1 rounded-full border border-indigo-200/50 dark:border-indigo-900/30">Model Paper</span>
                    </div>
                    <p className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-200 leading-snug mb-4 relative z-10">
                      &quot;{selectedTopic.pyqs[0].question}&quot;
                    </p>
                    <div className="flex justify-end relative z-10">
                      <span className="text-[10px] md:text-xs font-black text-indigo-500 dark:text-indigo-400 px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/30">{selectedTopic.pyqs[0].marks} Marks</span>
                    </div>
                  </div>
                )}

                {/* Recommended Watch Section */}
                <div className="mt-8 max-w-3xl mx-auto bg-white dark:bg-slate-900/50 border border-slate-950/[0.04] dark:border-white/[0.04] rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-sm dark:shadow-none relative overflow-hidden mb-8 md:mb-12">
                  <div className="flex items-start justify-between mb-5 md:mb-6">
                    <div>
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">RECOMMENDED WATCH</h4>
                      <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">Curated for you</h2>
                    </div>
                    <MonitorPlay className="w-5.5 h-5.5 text-blue-500" />
                  </div>
                  
                  <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-none -mx-2 px-2 snap-x">
                    {[
                      {
                        label: "THE QUICK CONCEPT",
                        query: `KTU ${selectedTopic.title} explained`,
                        title: `${selectedTopic.title} – Quick Concept`,
                        sub: "YouTube · KTU Lectures"
                      },
                      {
                        label: "EXAM DEEP-DIVE",
                        query: `${selectedTopic.title} ${selectedSubject?.name ?? ""} exam questions`,
                        title: `${selectedTopic.title} – Exam Prep`,
                        sub: "YouTube · Exam Deep Dive"
                      },
                      {
                        label: "PROBLEM SOLVING",
                        query: `${selectedTopic.title} solved examples numericals`,
                        title: `${selectedTopic.title} – Solved Problems`,
                        sub: "YouTube · Problem Solving"
                      }
                    ].map((card) => {
                      const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(card.query)}`;
                      return (
                        <a
                          key={card.label}
                          href={youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-w-[240px] md:min-w-[260px] max-w-[260px] snap-start group cursor-pointer no-underline"
                        >
                          <div className="w-full h-[120px] md:h-[140px] rounded-xl md:rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] relative flex items-center justify-center mb-3 shadow-sm border border-slate-950/[0.04] overflow-hidden">
                            <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-red-500/80 transition-all duration-300">
                              <Play className="w-4 h-4 md:w-5 md:h-5 text-white fill-current ml-1" />
                            </div>
                            <span className="absolute bottom-3 left-3 text-[9px] md:text-[10px] font-black text-white tracking-wider">{card.label}</span>
                            <span className="absolute top-3 right-3 text-[9px] md:text-[10px] font-black text-white bg-red-600 px-2 py-0.5 rounded-full flex items-center gap-1">
                              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1C4.5 20.5 12 20.5 12 20.5s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
                              YouTube
                            </span>
                          </div>
                          <h3 className="text-xs md:text-sm font-black text-slate-800 dark:text-slate-200 leading-tight mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-450 transition-colors line-clamp-2">{card.title}</h3>
                          <p className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-500">{card.sub}</p>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Bottom navigation floating bar */}
              <div className="fixed bottom-6 left-0 right-0 z-[49] flex justify-center px-4 pointer-events-none">
                <div className="pointer-events-auto bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/80 p-1.5 rounded-full flex items-center gap-1.5 w-auto max-w-[95%] sm:max-w-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                  <button 
                    onClick={() => prevTopic && goTopic(prevTopic, selectedSubject ?? undefined)} 
                    disabled={!prevTopic} 
                    className="flex-none flex items-center justify-center gap-1 px-3.5 py-2 rounded-full text-xs font-black transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100/50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-300"
                    aria-label="Previous Topic"
                  >
                    <ChevronLeft className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    <span className="hidden md:inline">Previous</span>
                  </button>

                  <div className="flex-1 sm:flex-none flex justify-center">
                    <MagneticButton
                      onClick={(e) => handleToggleTopic(selectedTopic, e)}
                      customShadow={isCompleted(selectedTopic.id) ? "shadow-[0_8px_20px_-4px_rgba(16,185,129,0.4)]" : theme.buttonShadow}
                      className="flex-1 sm:flex-none !px-4 !py-2 !rounded-full text-xs font-black flex items-center justify-center gap-1.5 transition-all duration-300 whitespace-nowrap"
                    >
                      {isCompleted(selectedTopic.id) ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          Marked as Done
                        </>
                      ) : (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white/60" />
                          Mark as Done
                        </>
                      )}
                    </MagneticButton>
                  </div>

                  <button 
                    onClick={() => nextTopic && goTopic(nextTopic, selectedSubject ?? undefined)} 
                    disabled={!nextTopic} 
                    className="flex-none flex items-center justify-center gap-1 px-3.5 py-2 rounded-full text-xs font-black transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100/50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-300"
                    aria-label="Next Topic"
                  >
                    <span className="hidden md:inline">Next</span>
                    <ArrowRight className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {commandOpen && (
          <motion.div
            className="fixed inset-0 z-[80] bg-slate-950/35 dark:bg-slate-950/60 backdrop-blur-sm px-4 pt-24 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCommandOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Search syllabus"
              className="mx-auto w-full max-w-2xl rounded-[1.75rem] bg-white dark:bg-slate-900 shadow-2xl dark:shadow-[0_24px_60px_rgba(0,0,0,0.4)] border border-blue-100 dark:border-slate-800 overflow-hidden cursor-default"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 330, damping: 30, mass: 0.55 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <Search className="w-5 h-5 text-slate-400 dark:text-slate-550" />
                <input
                  autoFocus
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search Deadlocks, Paging, SQL..."
                  className="flex-1 bg-transparent outline-none text-base font-bold text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                />
                <button type="button" onClick={() => setCommandOpen(false)} className="h-9 w-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 grid place-items-center cursor-pointer">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="max-h-[420px] overflow-y-auto p-3">
                {searchTerm.trim() === "" && (
                  <p className="px-3 pb-2 text-[10px] font-black text-slate-400 dark:text-slate-550 uppercase tracking-widest">All Topics</p>
                )}
                {searchTerm.trim() !== "" && filteredTopics.length > 0 && (
                  <p className="px-3 pb-2 text-[10px] font-black text-slate-400 dark:text-slate-550 uppercase tracking-widest">{filteredTopics.length} result{filteredTopics.length !== 1 ? 's' : ''} found</p>
                )}
                {filteredTopics.slice(0, 10).map((item) => {
                  const query = searchTerm.trim().toLowerCase();
                  const title = item.topic.title;
                  const matchIdx = query ? title.toLowerCase().indexOf(query) : -1;
                  const done = isCompleted(item.topic.id);
                  return (
                    <button
                      type="button"
                      key={item.topic.id}
                      onClick={() => goTopic(item.topic, item.subject)}
                      className="w-full flex items-center gap-3 rounded-2xl px-3 py-3 text-left hover:bg-blue-50 dark:hover:bg-slate-800/50 transition-colors group"
                    >
                      <div className={`h-10 w-10 rounded-xl grid place-items-center shrink-0 transition-colors ${done ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-450' : 'bg-blue-50 dark:bg-slate-800 text-blue-500 dark:text-blue-400 group-hover:bg-blue-100 group-hover:dark:bg-slate-700'}`}>
                        {done ? <CheckCircle2 className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
                      </div>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-black text-slate-900 dark:text-slate-100 truncate">
                          {matchIdx >= 0 ? (
                            <>
                              {title.slice(0, matchIdx)}
                              <mark className="bg-blue-200/70 dark:bg-blue-500/30 text-blue-900 dark:text-blue-200 rounded px-0.5">{title.slice(matchIdx, matchIdx + query.length)}</mark>
                              {title.slice(matchIdx + query.length)}
                            </>
                          ) : title}
                        </span>
                        <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">{item.subject.code} · {item.module.title}</span>
                      </span>
                      <ArrowRight className="ml-auto w-4 h-4 text-slate-300 dark:text-slate-650 group-hover:text-blue-500 group-hover:dark:text-blue-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </button>
                  );
                })}
                {filteredTopics.length === 0 && (
                  <div className="py-10 text-center">
                    <Search className="w-8 h-8 text-slate-200 dark:text-slate-800 mx-auto mb-3" />
                    <p className="text-sm font-black text-slate-400 dark:text-slate-550">No matching topic found.</p>
                    <p className="text-xs text-slate-300 dark:text-slate-600 mt-1">Try searching by subject code or module name</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>



      <AnimatePresence>
        {toast && (
          <motion.div
            role="alert"
            aria-live="polite"
            className="fixed bottom-6 left-1/2 z-[100] max-w-[calc(100vw-2rem)] w-[max-content] -translate-x-1/2 rounded-full border border-slate-200/60 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 px-4 md:px-5 py-2.5 md:py-3 text-xs md:text-sm font-bold text-slate-900 dark:text-white shadow-[0_18px_50px_rgba(15,23,42,0.1)] dark:shadow-[0_18px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 360, damping: 28 }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Sticky Focus Timer */}
      <AnimatePresence>
        {(isTimerRunning || secondsLeft < sessionMinutes * 60) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-[80] flex items-center gap-3 bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-2.5 md:p-3 shadow-xl backdrop-blur-xl text-slate-850 dark:text-slate-200 shadow-slate-200/30 dark:shadow-none"
          >
            <div 
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setMobileSheetOpen(true);
                  triggerHaptic("light");
                }
              }}
              className="flex items-center gap-2 cursor-pointer select-none active:opacity-80 group"
              title="Click to open Study Tools"
            >
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-[#2E95FF]/10 flex items-center justify-center text-[#2E95FF] shrink-0 border border-[#2E95FF]/10 transition-transform group-hover:scale-105">
                <Timer className={`w-3.5 h-3.5 md:w-4 md:h-4 ${isTimerRunning ? "animate-pulse" : ""}`} />
              </div>
              <div className="flex flex-col min-w-[50px] md:min-w-[55px]">
                <span className="text-[13px] md:text-[14px] font-black tracking-tight tabular-nums leading-none text-slate-800 dark:text-slate-100">
                  {Math.floor(secondsLeft / 60)}:{String(secondsLeft % 60).padStart(2, "0")}
                </span>
                <span className="text-[7.5px] md:text-[8px] font-black text-slate-400 dark:text-slate-550 uppercase tracking-widest mt-0.5 leading-none">
                  {isTimerRunning ? "Focus" : "Paused"}
                </span>
              </div>
            </div>

            <div className="h-5 md:h-6 w-px bg-slate-200 dark:bg-slate-800" />

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-slate-100 dark:bg-slate-850 hover:bg-slate-200/80 hover:dark:bg-slate-700/80 text-slate-600 dark:text-slate-350 hover:text-slate-800 hover:dark:text-slate-100 flex items-center justify-center transition-colors border border-slate-200/40 dark:border-slate-750 active:scale-95 cursor-pointer"
                aria-label={isTimerRunning ? "Pause" : "Start"}
              >
                {isTimerRunning ? <Pause className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" /> : <Play className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" />}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsTimerRunning(false);
                  setSecondsLeft(sessionMinutes * 60);
                }}
                className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-slate-100 dark:bg-slate-850 hover:bg-slate-200/80 hover:dark:bg-slate-700/80 text-slate-500 dark:text-slate-400 hover:text-slate-700 hover:dark:text-slate-250 flex items-center justify-center transition-colors border border-slate-200/40 dark:border-slate-750 active:scale-95 cursor-pointer"
                aria-label="Reset"
              >
                <RotateCcw className="w-3 h-3 md:w-3.5 md:h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Sheet for Study Tools */}
      <BottomSheet
        isOpen={mobileSheetOpen}
        onOpen={() => setMobileSheetOpen(true)}
        onClose={() => setMobileSheetOpen(false)}
      >

        <PomodoroTimer
          sessionMinutes={sessionMinutes}
          setSessionMinutes={setSessionMinutes}
          secondsLeft={secondsLeft}
          setSecondsLeft={setSecondsLeft}
          isRunning={isTimerRunning}
          setIsRunning={setIsTimerRunning}
          isMuted={isTimerMuted}
          setIsMuted={setIsTimerMuted}
        />

        <TimetableWidget timetable={timetable} sem={sem} branch={branch} />

        {pinnedTopicIds.length > 0 && (
          <div className="bg-white/65 dark:bg-slate-900/65 backdrop-blur-md border border-slate-950/[0.06] dark:border-white/[0.06] rounded-[20px] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.01),0_1px_2px_rgba(0,0,0,0.01)] dark:shadow-none">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/[0.06] dark:bg-amber-500/[0.12] border border-amber-500/[0.15] dark:border-amber-500/[0.3] flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 dark:text-slate-100 text-base leading-tight">Pinned Topics</h3>
                <p className="text-xs text-slate-400/80 dark:text-slate-550 font-bold">Star tough items to pin here</p>
              </div>
            </div>

            <div className="space-y-2">
              {pinnedTopicIds.map((id) => {
                const item = topicIndex.find((t) => t.topic.id === id);
                if (!item) return null;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => {
                      setMobileSheetOpen(false);
                      goTopic(item.topic, item.subject);
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-950/[0.02] dark:bg-white/[0.02] hover:bg-amber-500/[0.04] dark:hover:bg-amber-500/[0.1] border border-transparent hover:border-amber-500/[0.15] dark:hover:border-amber-500/[0.3] transition-all text-left group"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-black text-slate-800 dark:text-slate-200 truncate">{item.topic.title}</span>
                      <span className="block text-[10px] font-bold text-slate-400/80 dark:text-slate-505 truncate">{item.subject.code}</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-650 group-hover:text-amber-600 group-hover:dark:text-amber-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </BottomSheet>

      {/* Floating Sticky Mobile Study Tools FAB */}
      <AnimatePresence>
        {!mobileSheetOpen && view === "dashboard" && !(isTimerRunning || secondsLeft < sessionMinutes * 60) && (
          <motion.div
            key="study-tools-fab"
            className="fixed bottom-6 right-6 z-[40] lg:hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setMobileSheetOpen(true);
                triggerHaptic("light");
              }}
              className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-b from-[#2E95FF] to-[#007AFF] hover:brightness-110 text-white font-black text-xs shadow-lg shadow-blue-500/25 border border-blue-400/20 cursor-pointer"
            >
              <Timer className="w-4 h-4 animate-pulse" />
              <span>Study Tools</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AUTHENTICATION GLASS MODAL */}
      <AnimatePresence>
        {authModalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-slate-950/45 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setAuthModalOpen(false);
              triggerHaptic("light");
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/60 dark:border-slate-800 w-full max-w-md rounded-[2rem] pt-16 pb-6 px-6 shadow-[0_24px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.4)] relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => {
                  setAuthModalOpen(false);
                  triggerHaptic("light");
                }}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100/80 dark:bg-slate-800 hover:bg-slate-200 hover:dark:bg-slate-700 border border-slate-200/50 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 cursor-pointer z-50 transition-colors shadow-sm"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Tabs */}
              <div className="flex bg-slate-950/[0.04] dark:bg-white/[0.04] p-1 rounded-xl mb-6 relative">
                <button
                  type="button"
                  onClick={() => {
                    setAuthTab("signin");
                    setAuthError("");
                    triggerHaptic("light");
                  }}
                  className={`flex-1 py-2 text-xs font-black rounded-lg transition-all relative z-10 ${authTab === "signin" ? "text-slate-800 dark:text-slate-100" : "text-slate-400 dark:text-slate-550"}`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAuthTab("signup");
                    setAuthError("");
                    triggerHaptic("light");
                  }}
                  className={`flex-1 py-2 text-xs font-black rounded-lg transition-all relative z-10 ${authTab === "signup" ? "text-slate-800 dark:text-slate-100" : "text-slate-400 dark:text-slate-550"}`}
                >
                  Create Account
                </button>
                <motion.div
                  className="absolute inset-y-1 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-950/[0.03] dark:border-white/[0.03]"
                  animate={{
                    width: "calc(50% - 4px)",
                    left: authTab === "signin" ? "4px" : "calc(50%)",
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              </div>

              {/* Form header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                  {authTab === "signin" ? "Welcome Back" : "Start Syncing"}
                </h3>
                <p className="text-xs text-slate-400/80 dark:text-slate-500 font-bold mt-1">
                  {authTab === "signin"
                    ? "Log in to sync your study progress to your devices"
                    : "Create a free account to back up and track your syllabus checklist"}
                </p>
              </div>

              {/* Error block */}
              {authError && (
                <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 text-rose-600 dark:text-rose-400 px-4 py-2.5 rounded-xl text-xs font-bold mb-4 animate-shake">
                  {authError}
                </div>
              )}

              <form onSubmit={handleAuthSubmit} className="space-y-4">
                {authTab === "signup" && (
                  <div className="relative">
                    <UserRound className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={authName}
                      onChange={(e) => setAuthName(e.target.value)}
                      className="w-full bg-slate-950/[0.03] dark:bg-white/[0.03] border border-slate-950/[0.06] dark:border-white/[0.06] hover:border-slate-950/[0.12] hover:dark:border-white/[0.12] focus:border-blue-500 rounded-xl pl-11 pr-4 py-3 text-sm font-bold text-slate-800 dark:text-slate-200 outline-none transition-all"
                    />
                  </div>
                )}
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={authEmail}
                    onChange={(e) => setAuthEmail(e.target.value)}
                    className="w-full bg-slate-950/[0.03] dark:bg-white/[0.03] border border-slate-950/[0.06] dark:border-white/[0.06] hover:border-slate-950/[0.12] hover:dark:border-white/[0.12] focus:border-blue-500 rounded-xl pl-11 pr-4 py-3 text-sm font-bold text-slate-800 dark:text-slate-200 outline-none transition-all"
                  />
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                    className="w-full bg-slate-950/[0.03] dark:bg-white/[0.03] border border-slate-950/[0.06] dark:border-white/[0.06] hover:border-slate-950/[0.12] hover:dark:border-white/[0.12] focus:border-blue-500 rounded-xl pl-11 pr-4 py-3 text-sm font-bold text-slate-800 dark:text-slate-200 outline-none transition-all"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={authLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full relative overflow-hidden block px-8 py-3.5 rounded-xl font-black text-sm text-white bg-gradient-to-b from-[#2E95FF] to-[#007AFF] shadow-[0_8px_20px_-4px_rgba(0,122,255,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] border border-blue-400/20 active:scale-[0.97] active:brightness-90 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none mt-2"
                >
                  {authLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Connecting...
                    </>
                  ) : authTab === "signin" ? (
                    "Sign In"
                  ) : (
                    "Create Account"
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* USER PROFILE & CLOUD SYNC DRAWER */}
      <AnimatePresence>
        {profilePanelOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-slate-950/45 backdrop-blur-md flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setProfilePanelOpen(false);
              triggerHaptic("light");
            }}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-l border-white/50 dark:border-slate-800 w-full max-w-sm h-full p-6 shadow-2xl dark:shadow-[0_24px_80px_rgba(0,0,0,0.4)] flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">Your Profile</h3>
                  <button
                    type="button"
                    onClick={() => {
                      setProfilePanelOpen(false);
                      triggerHaptic("light");
                    }}
                    className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 hover:dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Profile Card */}
                <div className="flex items-center gap-4 py-6">
                  <div className="w-16 h-16 rounded-[20px] bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-blue-500/20">
                    {userName ? userName.slice(0, 2).toUpperCase() : "KT"}
                  </div>
                  <div>
                    <h4 className="text-base font-black text-slate-900 dark:text-slate-100">{userName}</h4>
                    <p className="text-xs text-slate-400/80 dark:text-slate-500 font-bold">{userEmail}</p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider leading-none">Cloud Connected</span>
                    </div>
                  </div>
                </div>

                {/* Progress Details */}
                <div className="bg-slate-950/[0.02] dark:bg-white/[0.02] border border-slate-950/[0.04] dark:border-white/[0.04] p-4.5 rounded-2xl space-y-4 mb-6">
                  <div>
                    <span className="text-[9px] font-black text-slate-400 dark:text-slate-550 uppercase tracking-widest leading-none block mb-1">Syllabus Completion</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-slate-800 dark:text-slate-100 leading-none">{completedTopics.length}</span>
                      <span className="text-xs text-slate-400/80 dark:text-slate-500 font-bold">/ {totalTopics} topics</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] font-black text-slate-500 dark:text-slate-450 uppercase tracking-wider">
                      <span>Sync Status</span>
                      <span>
                        {totalTopics > 0 ? Math.round((completedTopics.length / totalTopics) * 100) : 0}% Done
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-950/[0.06] dark:bg-white/[0.06] rounded-full overflow-hidden relative">
                      <div
                        className="h-full bg-slate-900 dark:bg-slate-100 transition-all duration-500 rounded-full"
                        style={{ width: `${totalTopics > 0 ? (completedTopics.length / totalTopics) * 100 : 0}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Cloud Sync Section */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400/80 dark:text-slate-500 font-bold">
                    <span>Cloud Backup</span>
                    {lastSynced && (
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Last synced: {lastSynced}</span>
                    )}
                  </div>
                  
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={handleCloudSync}
                    disabled={syncing}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                      syncing 
                        ? "bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-750 text-slate-400 dark:text-slate-500 cursor-not-allowed"
                        : "bg-blue-50 dark:bg-slate-800 border-blue-100/50 dark:border-blue-900/35 hover:bg-blue-100 hover:dark:bg-slate-700 hover:border-blue-200 hover:dark:border-blue-800 text-blue-600 dark:text-blue-400 shadow-sm"
                    }`}
                  >
                    {syncing ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Syncing progress...
                      </>
                    ) : (
                      <>
                        <Cloud className="w-4 h-4" />
                        Sync Progress to Cloud
                      </>
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Logout Area */}
              <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-auto">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 py-3 border border-rose-100 dark:border-rose-950/40 bg-rose-50/50 dark:bg-rose-950/20 hover:bg-rose-50 hover:dark:bg-rose-950/30 text-rose-600 dark:text-rose-450 rounded-xl text-xs font-black transition-all cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  Log Out Session
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0b0f19] flex items-center justify-center">
          <div className="text-slate-500 dark:text-slate-400">Loading dashboard...</div>
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}
