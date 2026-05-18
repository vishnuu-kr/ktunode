"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Calendar, BookOpen, Clock, FileText, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { getSubjectsForSession, Subject, Module, Topic, PYQ } from "@/lib/mockData";
import { getTimetable, ExamSlot } from "@/lib/timetableData";
import { format, formatDistanceToNow, parseISO } from "date-fns";

type ViewState = "dashboard" | "subject" | "topic";

function DashboardContent() {
  const searchParams = useSearchParams();
  const branch = searchParams.get("branch") || "cs";
  const sem = parseInt(searchParams.get("sem") || "3", 10);

  const [view, setView] = useState<ViewState>("dashboard");
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const subjects = getSubjectsForSession(branch, sem);
  const timetable = getTimetable(branch, sem);
  
  // Find next exam
  const now = new Date();
  const upcomingExams = timetable
    .map(e => ({ ...e, parsedDate: parseISO(e.date) }))
    .filter(e => e.parsedDate >= now)
    .sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime());
  
  const nextExam = upcomingExams[0];

  const goHome = () => {
    setView("dashboard");
    setSelectedSubject(null);
    setSelectedTopic(null);
  };

  const goSubject = (subject: Subject) => {
    setSelectedSubject(subject);
    setView("subject");
  };

  const goTopic = (topic: Topic) => {
    setSelectedTopic(topic);
    setView("topic");
  };

  // Views rendering
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-hidden flex flex-col font-sans">
      <div className="pt-4 z-50 relative w-full px-4">
        <Navbar />
      </div>

      <main className="relative flex-1 w-full max-w-7xl mx-auto px-4 py-8 md:py-12 flex">
        <AnimatePresence mode="wait">
          {view === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Left Sidebar: Timetable & Timer */}
              <div className="lg:col-span-4 space-y-6">
                {/* Next Exam Timer Card */}
                <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">Next Exam</h3>
                      <p className="text-xs text-slate-500 font-medium">Timer ticking down</p>
                    </div>
                  </div>
                  
                  {nextExam ? (
                    <div className="relative z-10">
                      <div className="text-4xl font-black tracking-tighter text-slate-900 mb-2">
                        {formatDistanceToNow(nextExam.parsedDate, { addSuffix: true }).replace('about ', '')}
                      </div>
                      <div className="text-sm font-semibold text-blue-600 mb-1">{nextExam.subjectName}</div>
                      <div className="text-xs text-slate-500 font-medium">{format(nextExam.parsedDate, "EEEE, MMMM do yyyy")} • {nextExam.time}</div>
                    </div>
                  ) : (
                    <div className="relative z-10 py-4 text-sm font-medium text-slate-500">
                      No upcoming exams found for this semester.
                    </div>
                  )}
                </div>

                {/* Timetable Card */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">Timetable</h3>
                      <p className="text-xs text-slate-500 font-medium">S{sem} {branch.toUpperCase()} Schedule</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {timetable.length > 0 ? (
                      timetable.map((slot, i) => {
                        const dateObj = parseISO(slot.date);
                        return (
                          <div key={i} className="flex gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                            <div className="shrink-0 flex flex-col items-center justify-center w-12 h-12 bg-slate-100 rounded-xl text-center">
                              <span className="text-[10px] font-bold uppercase text-slate-500 leading-none mb-1">{format(dateObj, "MMM")}</span>
                              <span className="text-sm font-black text-slate-800 leading-none">{format(dateObj, "dd")}</span>
                            </div>
                            <div className="flex flex-col justify-center">
                              <h4 className="text-sm font-bold text-slate-800 leading-tight mb-0.5">{slot.subjectName}</h4>
                              <p className="text-xs font-medium text-slate-500">{slot.time} • {slot.subjectCode}</p>
                            </div>
                          </div>
                        )
                      })
                    ) : (
                      <p className="text-sm text-slate-500 italic py-4 text-center">
                        Timetable hasn't been uploaded yet. Please check back later.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Content: Subjects Grid */}
              <div className="lg:col-span-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">Your Subjects</h2>
                  <p className="text-sm text-slate-500 mt-1 font-medium">Select a subject to start studying</p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-5">
                  {subjects.map((subject, i) => (
                    <motion.div
                      key={subject.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                      onClick={() => goSubject(subject)}
                      className="group cursor-pointer bg-white border border-slate-200 rounded-3xl p-6 hover:border-blue-200 hover:shadow-[0_8px_30px_rgb(37,99,235,0.08)] transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      
                      <div className="flex items-start justify-between mb-8 relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{subject.code}</span>
                      </div>
                      
                      <div className="relative z-10">
                        <h3 className="text-lg font-bold text-slate-800 leading-tight mb-2 group-hover:text-blue-600 transition-colors">{subject.name}</h3>
                        <p className="text-sm text-slate-500 font-medium flex items-center gap-2">
                          <span>{subject.modules.length} Modules</span>
                          <span className="w-1 h-1 rounded-full bg-slate-300" />
                          <span className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                            Open <ArrowRight className="w-3.5 h-3.5 ml-1" />
                          </span>
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
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
              <button 
                onClick={goHome}
                className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors mb-8 group"
              >
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-slate-300 shadow-sm">
                  <ChevronLeft className="w-4 h-4" />
                </div>
                Back to Dashboard
              </button>

              <div className="mb-10">
                <span className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2 block">{selectedSubject.code}</span>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{selectedSubject.name}</h1>
              </div>

              {selectedSubject.modules.length > 0 ? (
                <div className="space-y-6">
                  {selectedSubject.modules.map((module, i) => (
                    <motion.div 
                      key={module.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm"
                    >
                      <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
                        <h2 className="text-lg font-bold text-slate-800">{module.title}</h2>
                      </div>
                      <div className="divide-y divide-slate-100">
                        {module.topics.map((topic) => (
                          <div 
                            key={topic.id}
                            onClick={() => goTopic(topic)}
                            className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition-colors group"
                          >
                            <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">{topic.title}</span>
                            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center">
                  <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-700 mb-1">No Modules Yet</h3>
                  <p className="text-slate-500">Content for this subject is being updated.</p>
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
              className="w-full max-w-4xl mx-auto"
            >
              <button 
                onClick={() => setView("subject")}
                className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors mb-8 group"
              >
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-slate-300 shadow-sm">
                  <ChevronLeft className="w-4 h-4" />
                </div>
                Back to {selectedSubject?.name}
              </button>

              <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-8 md:p-12 min-h-[60vh] relative">
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-8">
                  {selectedTopic.title}
                </h1>
                
                {/* Note Content (Mock rendering Markdown) */}
                <div className="prose prose-slate prose-blue max-w-none text-slate-600 font-medium leading-relaxed">
                  {selectedTopic.content.split('\n').map((paragraph, i) => {
                    if (paragraph.startsWith('### ')) {
                      return <h3 key={i} className="text-xl font-bold text-slate-800 mt-8 mb-4">{paragraph.replace('### ', '')}</h3>
                    }
                    if (paragraph.startsWith('- ')) {
                      return <li key={i} className="ml-4 list-disc">{paragraph.replace('- ', '')}</li>
                    }
                    if (paragraph.trim() === '') return <br key={i} />;
                    return <p key={i} className="mb-4">{paragraph}</p>;
                  })}
                </div>

                {/* Floating PYQ Context Widget */}
                {selectedTopic.pyqs && selectedTopic.pyqs.length > 0 && (
                  <div className="mt-16 md:absolute md:bottom-8 md:right-8 w-full md:w-80 bg-blue-50 border border-blue-200 rounded-3xl p-5 shadow-lg shadow-blue-500/10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">
                        <FileText className="w-3 h-3" />
                      </div>
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Related PYQ</span>
                      <span className="ml-auto text-xs font-bold text-blue-400 bg-blue-100 px-2 py-0.5 rounded-full">{selectedTopic.pyqs[0].year}</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-800 leading-snug mb-3">
                      {selectedTopic.pyqs[0].question}
                    </p>
                    <div className="flex justify-end">
                      <span className="text-xs font-bold text-blue-500">{selectedTopic.pyqs[0].marks} Marks</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <div className="text-slate-500">Loading dashboard...</div>
      </div>
    }>
      <DashboardContent />
    </Suspense>
  );
}
