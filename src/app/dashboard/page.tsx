"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  Clock,
  Command,
  Flame,
  Gauge,
  LayoutList,
  Play,
  Search,
  Star,
  Timer,
  X,
} from "lucide-react";
import { format, formatDistanceToNow, parseISO } from "date-fns";
import Navbar from "@/components/Navbar";
import { getSubjectsForSession, Subject, Topic } from "@/lib/mockData";
import { getTimetable } from "@/lib/timetableData";
import { useProgress } from "@/hooks/useProgress";
import { MagneticButton } from "@/components/ui/MagneticButton";
import MarkdownRenderer from "@/components/ui/MarkdownRenderer";

type ViewState = "dashboard" | "subject" | "topic";

type TopicIndexItem = {
  subject: Subject;
  module: Subject["modules"][number];
  topic: Topic;
  subjectIndex: number;
  moduleIndex: number;
  topicIndex: number;
};

type VideoSuggestion = {
  category: "The Quick Concept" | "Exam Deep-Dive" | "Problem Solving";
  title: string;
  channel: string;
  duration: string;
  embedUrl: string;
};

const videoSuggestions: VideoSuggestion[] = [
  {
    category: "The Quick Concept",
    title: "Deadlocks in Operating Systems in 5 Minutes",
    channel: "Gate Smashers",
    duration: "5m",
    embedUrl: "https://www.youtube.com/embed/onkWXaXAgbY",
  },
  {
    category: "Exam Deep-Dive",
    title: "Normalization in DBMS With Examples",
    channel: "Neso Academy",
    duration: "24m",
    embedUrl: "https://www.youtube.com/embed/GFQaEYEc8_8",
  },
  {
    category: "Problem Solving",
    title: "Cache Mapping Numerical Problems",
    channel: "Knowledge Gate",
    duration: "18m",
    embedUrl: "https://www.youtube.com/embed/FFDMzbrEXaE",
  },
];

const cardShadow =
  "0 16px 56px rgba(37,99,235,0.11), 0 4px 12px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)";

const formatTimer = (seconds: number) => {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const rest = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${rest}`;
};

function DashboardContent() {
  const searchParams = useSearchParams();
  const branch = searchParams.get("branch") || "cs";
  const sem = parseInt(searchParams.get("sem") || "4", 10);

  const [view, setView] = useState<ViewState>("dashboard");
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [lastTopicId, setLastTopicId] = useState<string | null>(null);
  const [expandedSubjectId, setExpandedSubjectId] = useState<string | null>(null);
  const [pinnedTopicIds, setPinnedTopicIds] = useState<string[]>([]);
  const [commandOpen, setCommandOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeVideo, setActiveVideo] = useState<VideoSuggestion | null>(null);
  const [focusSeconds, setFocusSeconds] = useState(25 * 60);
  const [focusRunning, setFocusRunning] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const subjects = getSubjectsForSession(branch, sem);
  const timetable = getTimetable(branch, sem);
  const { completedTopics, toggleTopic, isCompleted, getModuleProgress, getSubjectProgress, isLoaded } = useProgress();

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
  const overallProgress = totalTopics ? Math.round((completedTopics.length / totalTopics) * 100) : 0;
  const completedThisWeek = Math.min(completedTopics.length, totalTopics);

  const lastTopic = topicIndex.find((item) => item.topic.id === lastTopicId) ?? null;
  const upNext = topicIndex.find((item) => !completedTopics.includes(item.topic.id)) ?? topicIndex[0] ?? null;
  const resumeTarget = lastTopic ?? upNext;
  const alternatePendingTopics = topicIndex.filter(
    (item) => !completedTopics.includes(item.topic.id) && item.topic.id !== resumeTarget?.topic.id
  );
  const targetSubject =
    subjects
      .map((subject) => {
        const ids = subject.modules.flatMap((module) => module.topics.map((topic) => topic.id));
        return { subject, progress: getSubjectProgress(ids) };
      })
      .sort((a, b) => a.progress - b.progress)[0]?.subject ?? null;
  const todaysTarget =
    alternatePendingTopics.find((item) => item.subject.id === targetSubject?.id) ??
    alternatePendingTopics[0] ??
    topicIndex.find((item) => item.topic.id !== resumeTarget?.topic.id) ??
    resumeTarget;

  const pinnedTopics = pinnedTopicIds
    .map((id) => topicIndex.find((item) => item.topic.id === id))
    .filter(Boolean) as TopicIndexItem[];

  const filteredTopics = topicIndex.filter((item) => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return true;
    return [item.topic.title, item.subject.name, item.subject.code, item.module.title]
      .join(" ")
      .toLowerCase()
      .includes(query);
  });

  const now = new Date();
  const upcomingExams = timetable
    .map((exam) => ({ ...exam, parsedDate: parseISO(exam.date) }))
    .filter((exam) => exam.parsedDate >= now)
    .sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime());
  const nextExam = upcomingExams[0];
  const greeting = now.getHours() < 12 ? "Good morning" : now.getHours() < 17 ? "Good afternoon" : "Good evening";

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
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("ktunode_pinned_topics", JSON.stringify(pinnedTopicIds));
  }, [pinnedTopicIds]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen(true);
      }
      if (event.key === "Escape") {
        setCommandOpen(false);
        setActiveVideo(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!focusRunning || focusSeconds <= 0) return;
    const id = window.setInterval(() => {
      setFocusSeconds((seconds) => {
        if (seconds <= 1) {
          setFocusRunning(false);
          return 0;
        }
        return seconds - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [focusRunning, focusSeconds]);

  const goHome = () => {
    setView("dashboard");
    setSelectedSubject(null);
    setSelectedTopic(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goSubject = (subject: Subject) => {
    setSelectedSubject(subject);
    setView("subject");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goTopic = (topic: Topic, subject?: Subject) => {
    const owner = subject ?? topicIndex.find((item) => item.topic.id === topic.id)?.subject ?? selectedSubject;
    if (owner) setSelectedSubject(owner);
    setSelectedTopic(topic);
    setLastTopicId(topic.id);
    localStorage.setItem("ktunode_last_topic", topic.id);
    setCommandOpen(false);
    setView("topic");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const togglePinnedTopic = (topicId: string) => {
    setPinnedTopicIds((current) =>
      current.includes(topicId) ? current.filter((id) => id !== topicId) : [topicId, ...current].slice(0, 4)
    );
  };

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2600);
  };

  const handleToggleTopic = (item: TopicIndexItem | Topic) => {
    const topic = "topic" in item ? item.topic : item;
    const indexItem = "topic" in item ? item : topicIndex.find((entry) => entry.topic.id === topic.id);
    const nextState = isCompleted(topic.id) ? "marked incomplete" : "marked complete";
    toggleTopic(topic.id);
    showToast(`${indexItem?.module.title ?? "Topic"}: ${topic.title} ${nextState}.`);
  };

  const flattenedTopics = selectedSubject ? selectedSubject.modules.flatMap((module) => module.topics) : [];
  const currentTopicIndex = selectedTopic ? flattenedTopics.findIndex((topic) => topic.id === selectedTopic.id) : -1;
  const prevTopic = currentTopicIndex > 0 ? flattenedTopics[currentTopicIndex - 1] : null;
  const nextTopic = currentTopicIndex < flattenedTopics.length - 1 ? flattenedTopics[currentTopicIndex + 1] : null;
  const skeletonCards = Array.from({ length: 4 }, (_, index) => index);

  return (
    <div
      className={`min-h-screen relative text-slate-900 overflow-x-hidden flex flex-col font-sans transition-colors duration-500 ${
        focusRunning ? "bg-slate-200" : ""
      }`}
      style={{ background: focusRunning ? "#d9e6f4" : "#cfe3f8" }}
    >
      <div className="absolute inset-0 z-0 dot-grid opacity-[0.10] pointer-events-none" />
      <div className="absolute inset-0 z-0 noise-overlay opacity-[0.35] pointer-events-none" />
      <div
        className="absolute top-0 left-0 right-0 h-96 z-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #f3f8ff 0%, transparent 100%)" }}
        aria-hidden="true"
      />

      <div className="pt-4 z-50 relative w-full px-4">
        <Navbar />
      </div>

      <main className="relative flex-1 w-full max-w-7xl mx-auto px-4 py-8 md:py-12 flex z-10">
        <AnimatePresence mode="wait">
          {view === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              <section className="lg:col-span-8 space-y-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs font-black text-blue-600 uppercase tracking-[0.16em]">S{sem} dashboard</p>
                    <h1 className="mt-2 text-3xl md:text-5xl font-black tracking-tight text-slate-950">Study command center</h1>
                    <p className="mt-2 max-w-2xl text-sm font-semibold text-slate-600">
                      Subjects stay up front, while the right rail keeps exams, timetable, and focus time in view.
                    </p>
                  </div>
                  <motion.button
                    type="button"
                    onClick={() => setCommandOpen(true)}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ type: "spring", stiffness: 380, damping: 26 }}
                    className="h-12 min-w-0 md:w-72 rounded-2xl bg-white border border-blue-200/80 px-4 flex items-center gap-3 text-left shadow-[0_12px_30px_rgba(37,99,235,0.14)] hover:border-blue-300 hover:bg-white transition-colors"
                  >
                    <Search className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="text-sm font-bold text-slate-500 truncate">Search syllabus</span>
                    <span className="ml-auto hidden sm:flex items-center gap-1 rounded-lg bg-slate-100 px-2 py-1 text-[10px] font-black text-slate-500">
                      <Command className="w-3 h-3" /> K
                    </span>
                  </motion.button>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="spotlight-card lift-card md:col-span-2 rounded-[1.75rem] bg-white/96 border border-white/70 p-5" style={{ boxShadow: cardShadow }}>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.14em]">Continue Reading</p>
                        <h2 className="mt-1 text-xl font-black text-slate-900">
                          {resumeTarget ? resumeTarget.topic.title : "Pick your first topic"}
                        </h2>
                        <p className="mt-1 text-xs font-bold text-slate-500">
                          {resumeTarget
                            ? `${resumeTarget.subject.name} - ${resumeTarget.module.title}`
                            : "Your saved spot will appear here."}
                        </p>
                      </div>
                      <MagneticButton
                        onClick={() => {
                          if (resumeTarget) goTopic(resumeTarget.topic, resumeTarget.subject);
                        }}
                        className="!rounded-2xl !px-5 !py-3 !text-sm !font-black"
                      >
                        Resume <ArrowRight className="w-4 h-4" />
                      </MagneticButton>
                    </div>
                  </div>

                  <div className="spotlight-card rounded-[1.75rem] bg-white/96 border border-white/70 p-5" style={{ boxShadow: cardShadow }}>
                    <div className="flex items-center gap-4">
                      <div
                        className="grid place-items-center w-24 h-24 rounded-full shrink-0"
                        style={{
                          background: `conic-gradient(#2563eb ${overallProgress * 3.6}deg, #e2e8f0 0deg)`,
                        }}
                      >
                        <div className="grid place-items-center w-14 h-14 rounded-full bg-white text-sm font-black text-blue-600 shadow-inner">
                          {overallProgress}%
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.14em]">Overall Progress</p>
                        <h3 className="text-lg font-black text-slate-900">S{sem} completion</h3>
                        <p className="text-xs font-bold text-slate-500">{completedTopics.length} of {totalTopics} topics done</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spotlight-card lift-card rounded-[1.75rem] bg-white/96 border border-white/70 p-5" style={{ boxShadow: cardShadow }}>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.14em]">Today&apos;s Target</p>
                        <h3 className="mt-1 text-lg font-black text-slate-900 truncate">{todaysTarget?.topic.title ?? "Review completed topics"}</h3>
                        <p className="mt-1 text-xs font-bold text-slate-500">
                          {todaysTarget ? `Pulled from ${todaysTarget.subject.name}` : "No pending topic found."}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => todaysTarget && goTopic(todaysTarget.topic, todaysTarget.subject)}
                          disabled={!todaysTarget}
                          className="h-11 px-4 rounded-2xl border border-blue-200/70 bg-white/70 text-blue-700 text-sm font-black hover:bg-blue-50 transition-colors disabled:opacity-40"
                        >
                          Start target
                        </button>
                        <Gauge className="w-10 h-10 text-blue-500 shrink-0" />
                      </div>
                    </div>
                  </div>

                <div>
                  <div className="mb-4 flex items-end justify-between gap-3">
                    <div>
                      <h2 className="text-2xl font-black text-slate-900 tracking-tight">Subjects</h2>
                      <p className="text-sm text-slate-500 font-medium">Quick peek modules before jumping in.</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {!isLoaded
                      ? skeletonCards.map((item) => (
                          <div
                            key={item}
                            className="rounded-[1.75rem] border border-white/70 bg-white/70 p-5 shadow-sm animate-pulse"
                          >
                            <div className="mb-5 flex items-center gap-3">
                              <div className="h-11 w-11 rounded-2xl bg-slate-200" />
                              <div className="h-3 w-20 rounded-full bg-slate-200" />
                            </div>
                            <div className="h-5 w-3/4 rounded-full bg-slate-200" />
                            <div className="mt-5 rounded-2xl bg-slate-100 p-3">
                              <div className="mb-3 h-3 w-32 rounded-full bg-slate-200" />
                              <div className="h-2 w-full rounded-full bg-slate-200" />
                            </div>
                          </div>
                        ))
                      : subjects.map((subject, index) => {
                      const allTopicIds = subject.modules.flatMap((module) => module.topics.map((topic) => topic.id));
                      const progress = getSubjectProgress(allTopicIds);
                      const activeModule =
                        subject.modules.find((module) => getModuleProgress(module.topics.map((topic) => topic.id)) < 100) ??
                        subject.modules[0];
                      const expanded = expandedSubjectId === subject.id;

                      return (
                        <motion.div
                          key={subject.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.06, type: "spring", stiffness: 180, damping: 22 }}
                          className="spotlight-card lift-card group bg-white/96 backdrop-blur-xl border border-white/70 rounded-[1.75rem] p-5 transition-all duration-300 relative overflow-hidden"
                          style={{ boxShadow: cardShadow }}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <button type="button" onClick={() => goSubject(subject)} className="min-w-0 flex-1 text-left">
                              <div className="flex items-center gap-3 mb-5">
                                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                  <BookOpen className="w-5 h-5" />
                                </div>
                                <span className="text-xs font-black text-slate-400 uppercase tracking-wider">{subject.code}</span>
                              </div>
                              <h3 className="text-lg font-black text-slate-850 leading-tight group-hover:text-blue-600 transition-colors">
                                {subject.name}
                              </h3>
                            </button>
                            <button
                              type="button"
                              onClick={() => setExpandedSubjectId(expanded ? null : subject.id)}
                              className="h-10 w-10 shrink-0 rounded-2xl bg-slate-50 text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-center"
                              aria-label={`Quick peek ${subject.name} modules`}
                            >
                              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${expanded ? "rotate-180" : "group-hover:rotate-180"}`} />
                            </button>
                          </div>

                          <div className="mt-5 rounded-2xl bg-slate-50/80 p-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-[11px] font-black text-slate-600 uppercase tracking-wider">
                                Currently on {activeModule?.title ?? "Module 1"}
                              </span>
                              <span className="text-xs font-black text-blue-600">{progress}%</span>
                            </div>
                            {isLoaded && (
                              <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${progress}%` }}
                                  transition={{ duration: 0.8, ease: "easeOut" }}
                                  className="h-full bg-blue-500 rounded-full"
                                />
                              </div>
                            )}
                          </div>

                          <AnimatePresence initial={false}>
                            {expanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pt-4 space-y-2">
                                  {subject.modules.map((module) => {
                                    const moduleProgress = getModuleProgress(module.topics.map((topic) => topic.id));
                                    return (
                                      <button
                                        type="button"
                                        key={module.id}
                                        onClick={() => goTopic(module.topics[0], subject)}
                                        className="w-full rounded-2xl bg-white border border-slate-100 px-3 py-3 text-left hover:border-blue-200 hover:bg-blue-50/40 transition-colors"
                                      >
                                        <div className="flex items-center justify-between gap-3">
                                          <span className="text-sm font-black text-slate-700">{module.title}</span>
                                          <span className="text-xs font-black text-blue-600">{moduleProgress}%</span>
                                        </div>
                                      </button>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-4">
                  <div className="spotlight-card rounded-[1.75rem] bg-white/96 border border-white/70 p-5 lg:col-span-1" style={{ boxShadow: cardShadow }}>
                    <div className="flex items-center gap-3">
                      <Flame className="w-5 h-5 text-orange-500" />
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.14em]">Momentum</p>
                    </div>
                    <div className="mt-5 flex items-end gap-4">
                      {[55, 78, Math.max(16, completedThisWeek * 18)].map((value, index) => (
                        <div key={index} className="grid place-items-center w-16 h-16 rounded-full bg-slate-100">
                          <div
                            className="grid place-items-center w-14 h-14 rounded-full"
                            style={{ background: `conic-gradient(#2563eb ${value * 3.6}deg, #e2e8f0 0deg)` }}
                          >
                            <div className="w-10 h-10 rounded-full bg-white grid place-items-center text-xs font-black text-slate-900 shadow-inner">
                              {index === 0 ? "55m" : index === 1 ? "78%" : `${completedThisWeek}`}
                            </div>
                          </div>
                          <span className="mt-2 text-[10px] font-black text-slate-500">
                            {index === 0 ? "Focus" : index === 1 ? "Streak" : "Done"}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm font-bold text-slate-700">Topics conquered this week</p>
                  </div>

                  <div className="spotlight-card rounded-[1.75rem] bg-white/96 border border-white/70 p-5 lg:col-span-2" style={{ boxShadow: cardShadow }}>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.14em]">Pinned Tough Topics</p>
                        <h3 className="text-lg font-black text-slate-900">Priority review</h3>
                      </div>
                      <Star className="w-5 h-5 text-amber-500" />
                    </div>
                    {pinnedTopics.length ? (
                      <div className="space-y-2">
                        {pinnedTopics.map((item) => (
                          <button
                            type="button"
                            key={item.topic.id}
                            onClick={() => goTopic(item.topic, item.subject)}
                            className="w-full flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-3 py-3 text-left hover:bg-blue-50 transition-colors"
                          >
                            <span className="min-w-0">
                              <span className="block text-sm font-black text-slate-800 truncate">{item.topic.title}</span>
                              <span className="block text-xs font-bold text-slate-500">{item.subject.code} - {item.module.title}</span>
                            </span>
                            <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-dashed border-blue-200/80 bg-blue-50/40 p-5 text-center">
                        <Star className="mx-auto h-6 w-6 text-blue-300" />
                        <p className="mt-2 text-sm font-black text-slate-700">No tough topics pinned yet</p>
                        <p className="mt-1 text-xs font-bold text-slate-500">Pin topics you find difficult to keep them one click away.</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="spotlight-card rounded-[1.75rem] bg-white/96 border border-white/70 p-5" style={{ boxShadow: cardShadow }}>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.14em]">Recommended Watch</p>
                      <h3 className="text-xl font-black text-slate-900">Curated for you</h3>
                    </div>
                    <Play className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="grid md:grid-cols-3 gap-3">
                    {!isLoaded ? skeletonCards.slice(0, 3).map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3 animate-pulse">
                        <div className="aspect-video rounded-xl bg-slate-200" />
                        <div className="mt-3 h-4 w-5/6 rounded-full bg-slate-200" />
                        <div className="mt-2 h-3 w-24 rounded-full bg-slate-200" />
                      </div>
                    )) : videoSuggestions.map((video) => (
                      <button
                        type="button"
                        key={video.title}
                        onClick={() => setActiveVideo(video)}
                        className="group rounded-2xl border border-slate-100 bg-slate-50/80 p-3 text-left hover:bg-white hover:border-blue-200 transition-all"
                      >
                        <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-800 to-blue-700 relative overflow-hidden">
                          <div className="absolute inset-0 grid place-items-center">
                            <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md grid place-items-center text-white group-hover:scale-110 transition-transform">
                              <Play className="w-5 h-5 fill-current" />
                            </div>
                          </div>
                          <div className="absolute inset-x-0 bottom-0 p-3 pt-10 bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-transparent">
                            <div className="flex items-center justify-between gap-2">
                              <span className="truncate text-[10px] font-black text-white uppercase tracking-[0.12em]">{video.category}</span>
                              <span className="shrink-0 rounded-full bg-white/18 backdrop-blur-md px-2 py-1 text-[10px] font-black text-white">
                                {video.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                        <h4 className="mt-3 text-sm font-black text-slate-900 leading-snug">{video.title}</h4>
                        <p className="mt-1 text-xs font-bold text-slate-500">{video.channel}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </section>

              <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-6 self-start">
                <div className="spotlight-card relative z-20 bg-white/96 backdrop-blur-xl border border-white/70 rounded-[1.75rem] p-6 overflow-hidden" style={{ boxShadow: cardShadow }}>
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-800">Countdown</h3>
                      <p className="text-xs text-slate-500 font-bold">Next exam timer</p>
                    </div>
                  </div>

                  {nextExam ? (
                    <div className="relative z-10">
                      <div className="text-4xl font-black tracking-tighter text-slate-900 mb-2">
                        {formatDistanceToNow(nextExam.parsedDate, { addSuffix: true }).replace("about ", "")}
                      </div>
                      <div className="text-sm font-black text-blue-600 mb-1">{nextExam.subjectName}</div>
                      <div className="text-xs text-slate-500 font-bold">
                        {format(nextExam.parsedDate, "EEEE, MMMM do yyyy")} - {nextExam.time}
                      </div>
                    </div>
                  ) : (
                    <div className="relative z-10 rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
                      <p className="text-sm font-black text-emerald-700">Exam window complete</p>
                      <p className="mt-1 text-xs font-bold text-emerald-600">No upcoming exams found in this timetable.</p>
                    </div>
                  )}
                </div>

                <div className="spotlight-card relative z-20 bg-white/96 backdrop-blur-xl border border-white/70 rounded-[1.75rem] p-6" style={{ boxShadow: cardShadow }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-800">{greeting}. {upcomingExams.length} exams coming up.</h3>
                      <p className="text-xs text-slate-500 font-bold">S{sem} {branch.toUpperCase()} timetable</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {timetable.length > 0 ? (
                      timetable.map((slot) => {
                        const dateObj = parseISO(slot.date);
                        return (
                          <div key={`${slot.subjectCode}-${slot.date}`} className="flex gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                            <div className="shrink-0 flex flex-col items-center justify-center w-12 h-12 bg-white shadow-sm border border-slate-100 rounded-xl text-center">
                              <span className="text-[10px] font-black uppercase text-slate-500 leading-none mb-1">{format(dateObj, "MMM")}</span>
                              <span className="text-sm font-black text-slate-800 leading-none">{format(dateObj, "dd")}</span>
                            </div>
                            <div className="flex flex-col justify-center min-w-0">
                              <h4 className="text-sm font-black text-slate-800 leading-tight mb-0.5 truncate">{slot.subjectName}</h4>
                              <p className="text-xs font-bold text-slate-500">{slot.time} - {slot.subjectCode}</p>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-sm font-semibold text-slate-400 py-4 text-center">Timetable not uploaded yet.</p>
                    )}
                  </div>
                </div>

                <div className="spotlight-card relative z-20 bg-white/96 backdrop-blur-xl border border-white/70 rounded-[1.75rem] p-6" style={{ boxShadow: cardShadow }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                      <Timer className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-800">Focus Timer</h3>
                      <p className="text-xs text-slate-500 font-bold">Pomodoro session</p>
                    </div>
                  </div>
                  <div className="text-5xl font-black tabular-nums tracking-tighter text-slate-950">{formatTimer(focusSeconds)}</div>
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <MagneticButton
                      onClick={() => {
                        const nextRunning = !focusRunning;
                        setFocusRunning(nextRunning);
                        showToast(nextRunning ? "Focus session started." : "Focus session paused.");
                      }}
                      className="w-full !rounded-2xl !px-4 !py-3 !text-sm !font-black"
                    >
                      {focusRunning ? "Pause session" : "Ready to grind?"}
                    </MagneticButton>
                    <button
                      type="button"
                      onClick={() => {
                        setFocusRunning(false);
                        setFocusSeconds(25 * 60);
                      }}
                      className="h-11 rounded-2xl border border-slate-200 bg-white/70 text-slate-700 text-sm font-black hover:bg-slate-50"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </aside>
            </motion.div>
          )}

          {view === "subject" && selectedSubject && (
            <motion.div
              key="subject"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-4xl mx-auto"
            >
              <button onClick={goHome} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors mb-8 group">
                <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 flex items-center justify-center group-hover:border-slate-300 shadow-sm">
                  <ChevronLeft className="w-4 h-4" />
                </div>
                Back to Dashboard
              </button>

              <div className="mb-10 text-center md:text-left">
                <span className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2 block">{selectedSubject.code}</span>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
                  <span className="gradient-text">{selectedSubject.name}</span>
                </h1>
              </div>

              {selectedSubject.modules.length > 0 ? (
                <div className="space-y-6">
                  {selectedSubject.modules.map((module, index) => {
                    const moduleTopicIds = module.topics.map((topic) => topic.id);
                    const progress = getModuleProgress(moduleTopicIds);

                    return (
                      <motion.div
                        key={module.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.4 }}
                        className="bg-white/96 backdrop-blur-xl rounded-3xl border border-blue-100/80 overflow-hidden"
                        style={{ boxShadow: cardShadow }}
                      >
                        <div className="px-6 py-5 border-b border-blue-50/50 bg-white/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <h2 className="text-xl font-black text-slate-800">{module.title}</h2>
                          {isLoaded && (
                            <div className="flex items-center gap-3">
                              <span className="text-xs font-black text-slate-400">MODULE PROGRESS</span>
                              <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${progress}%` }} />
                              </div>
                              <span className="text-xs font-black text-emerald-600 w-8 text-right">{progress}%</span>
                            </div>
                          )}
                        </div>
                        <div className="divide-y divide-blue-50/50 p-2">
                          {module.topics.map((topic) => {
                            const done = isCompleted(topic.id);
                            const pinned = pinnedTopicIds.includes(topic.id);
                            return (
                              <div key={topic.id} className="px-4 py-4 mx-2 rounded-2xl flex items-center justify-between hover:bg-blue-50/50 transition-colors group">
                                <button type="button" onClick={() => goTopic(topic, selectedSubject)} className="min-w-0 flex-1 flex items-center gap-3 text-left">
                                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${done ? "bg-emerald-100 border-emerald-200 text-emerald-600" : "bg-slate-50 border-slate-200 text-slate-300"}`}>
                                    {done ? <CheckCircle2 className="w-4 h-4" /> : <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />}
                                  </div>
                                  <span className={`text-sm font-black transition-colors ${done ? "text-slate-500" : "text-slate-700 group-hover:text-blue-600"}`}>
                                    {topic.title}
                                  </span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => togglePinnedTopic(topic.id)}
                                  className={`h-9 w-9 rounded-xl flex items-center justify-center transition-colors ${pinned ? "bg-amber-100 text-amber-600" : "text-slate-300 hover:bg-amber-50 hover:text-amber-500"}`}
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
                <div className="bg-white/96 backdrop-blur-xl rounded-3xl border border-blue-100/80 p-12 text-center" style={{ boxShadow: "0 16px 56px rgba(37,99,235,0.08)" }}>
                  <LayoutList className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-lg font-black text-slate-700 mb-1">No Modules Yet</h3>
                  <p className="text-slate-500 font-medium">Content for this subject is being updated.</p>
                </div>
              )}
            </motion.div>
          )}

          {view === "topic" && selectedTopic && (
            <motion.div
              key="topic"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-4xl mx-auto pb-32"
            >
              <button onClick={() => setView("subject")} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors mb-8 group">
                <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 flex items-center justify-center group-hover:border-slate-300 shadow-sm">
                  <ChevronLeft className="w-4 h-4" />
                </div>
                Back to {selectedSubject?.name}
              </button>

              <div className="bg-white/96 backdrop-blur-xl rounded-[2.5rem] border border-blue-100/80 p-8 md:p-12 min-h-[60vh] relative" style={{ boxShadow: cardShadow }}>
                <div className="mb-8 border-b border-slate-100 pb-8 flex items-start justify-between gap-4 max-w-3xl mx-auto">
                  <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">{selectedTopic.title}</h1>
                  <button
                    type="button"
                    onClick={() => togglePinnedTopic(selectedTopic.id)}
                    className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${pinnedTopicIds.includes(selectedTopic.id) ? "bg-amber-100 text-amber-600" : "bg-slate-50 text-slate-400 hover:bg-amber-50 hover:text-amber-500"}`}
                    aria-label="Pin tough topic"
                  >
                    <Star className={`w-5 h-5 ${pinnedTopicIds.includes(selectedTopic.id) ? "fill-current" : ""}`} />
                  </button>
                </div>

                <MarkdownRenderer content={selectedTopic.content} stripH1={true} />

                {selectedTopic.pyqs && selectedTopic.pyqs.length > 0 && (
                  <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-white border border-blue-200/70 rounded-3xl p-6 shadow-[0_8px_30px_rgba(37,99,235,0.08)] relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-4 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                        <BadgeCheck className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-black text-blue-600 uppercase tracking-widest">Previous Year Question</span>
                      <span className="ml-auto text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{selectedTopic.pyqs[0].year}</span>
                    </div>
                    <p className="text-base font-bold text-slate-800 leading-snug mb-4 relative z-10">
                      &quot;{selectedTopic.pyqs[0].question}&quot;
                    </p>
                    <div className="flex justify-end relative z-10">
                      <span className="text-xs font-black text-blue-500 px-3 py-1 rounded-lg bg-blue-50 border border-blue-100">{selectedTopic.pyqs[0].marks} Marks</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <div className="pointer-events-auto bg-white/70 backdrop-blur-xl border border-white/60 p-2 rounded-3xl flex items-center gap-2 md:gap-4 w-full max-w-3xl shadow-[0_20px_60px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.8)]">
                  <button onClick={() => prevTopic && goTopic(prevTopic, selectedSubject ?? undefined)} disabled={!prevTopic} className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-sm font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 text-slate-600">
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden md:inline">Previous</span>
                  </button>

                  <div className="flex-1 flex justify-center">
                    <MagneticButton
                      onClick={() => handleToggleTopic(selectedTopic)}
                      className={`w-full md:w-auto px-6 py-3 md:py-3.5 rounded-2xl text-sm font-black flex items-center justify-center gap-2 transition-all duration-300 ${
                        isCompleted(selectedTopic.id) ? "!from-emerald-400 !to-emerald-500 !shadow-[0_8px_20px_-4px_rgba(16,185,129,0.4)]" : ""
                      }`}
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

                  <button onClick={() => nextTopic && goTopic(nextTopic, selectedSubject ?? undefined)} disabled={!nextTopic} className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-sm font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 text-slate-600">
                    <span className="hidden md:inline">Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {commandOpen && (
          <motion.div className="fixed inset-0 z-[80] bg-slate-950/35 backdrop-blur-sm px-4 pt-24" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Search syllabus"
              className="mx-auto w-full max-w-2xl rounded-[1.75rem] bg-white shadow-2xl border border-blue-100 overflow-hidden"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 330, damping: 30, mass: 0.55 }}
            >
              <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                <Search className="w-5 h-5 text-slate-400" />
                <input
                  autoFocus
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search Deadlocks, Paging, SQL..."
                  className="flex-1 bg-transparent outline-none text-base font-bold text-slate-900 placeholder:text-slate-400"
                />
                <button type="button" onClick={() => setCommandOpen(false)} className="h-9 w-9 rounded-xl bg-slate-100 text-slate-500 grid place-items-center">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="max-h-[420px] overflow-y-auto p-3">
                {filteredTopics.slice(0, 8).map((item) => (
                  <button
                    type="button"
                    key={item.topic.id}
                    onClick={() => goTopic(item.topic, item.subject)}
                    className="w-full flex items-center gap-3 rounded-2xl px-3 py-3 text-left hover:bg-blue-50 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-600 grid place-items-center shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <span className="min-w-0">
                      <span className="block text-sm font-black text-slate-900 truncate">{item.topic.title}</span>
                      <span className="block text-xs font-bold text-slate-500">{item.subject.name} - {item.module.title}</span>
                    </span>
                    <ArrowRight className="ml-auto w-4 h-4 text-slate-300" />
                  </button>
                ))}
                {filteredTopics.length === 0 && (
                  <p className="py-10 text-center text-sm font-bold text-slate-400">No matching topic found.</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeVideo && (
          <motion.div className="fixed inset-0 z-[90] bg-slate-950/60 backdrop-blur-sm px-4 grid place-items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={activeVideo.title}
              className="w-full max-w-4xl rounded-[1.75rem] bg-white overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
            >
              <div className="p-4 flex items-center justify-between gap-4 border-b border-slate-100">
                <div className="min-w-0">
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.14em]">{activeVideo.category} - {activeVideo.duration}</p>
                  <h3 className="text-lg font-black text-slate-900 truncate">{activeVideo.title}</h3>
                </div>
                <button type="button" onClick={() => setActiveVideo(null)} className="h-10 w-10 rounded-2xl bg-slate-100 text-slate-500 grid place-items-center shrink-0">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="aspect-video bg-slate-950">
                <iframe
                  src={activeVideo.embedUrl}
                  title={activeVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div
            className="fixed bottom-6 left-1/2 z-[100] max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-full border border-white/60 bg-slate-950/92 px-5 py-3 text-sm font-black text-white shadow-[0_18px_50px_rgba(15,23,42,0.28)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 360, damping: 28 }}
          >
            {toast}
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
        <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
          <div className="text-slate-500">Loading dashboard...</div>
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}
