"use client";

import React, { useEffect, useState } from "react";
import { Calendar, Clock, AlertCircle } from "lucide-react";
import { format, parseISO } from "date-fns";

export interface ExamSlot {
  date: string;
  time: string;
  subjectCode: string;
  subjectName: string;
}

interface TimetableWidgetProps {
  timetable: ExamSlot[];
  sem: number;
  branch: string;
}

export default function TimetableWidget({ timetable, sem, branch }: TimetableWidgetProps) {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; mins: number; secs: number } | null>(null);

  // Compute nextExam directly during render
  const now = new Date();
  const sortedExams = [...timetable]
    .map((slot) => {
      const parsedDate = parseISO(slot.date);
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
    .sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime());

  const nextExam = sortedExams.length > 0 ? sortedExams[0] : null;

  // Live timer countdown ticker
  useEffect(() => {
    if (!nextExam) {
      const t = setTimeout(() => setTimeLeft(null), 0);
      return () => clearTimeout(t);
    }

    const tick = () => {
      const currentTime = new Date().getTime();
      const targetTime = nextExam.parsedDate.getTime();
      const diff = targetTime - currentTime;

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

    // Run first tick asynchronously to prevent sync setState warnings in effect
    const firstTickTimeout = setTimeout(tick, 0);
    const interval = setInterval(tick, 1000);

    return () => {
      clearTimeout(firstTickTimeout);
      clearInterval(interval);
    };
  }, [nextExam]);

  // Sort timetable: Upcoming exams (ascending) first, then Past exams (descending) at the bottom
  const sortedTimetable = React.useMemo(() => {
    const todayStart = new Date().setHours(0, 0, 0, 0);

    return [...timetable].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      
      const isPastA = dateA < todayStart;
      const isPastB = dateB < todayStart;

      // Upcoming exams go first
      if (isPastA && !isPastB) return 1;
      if (!isPastA && isPastB) return -1;

      // If both are upcoming, sort ascending (closest first)
      if (!isPastA && !isPastB) {
        return dateA - dateB;
      }
      // If both are past, sort descending (most recent past first)
      return dateB - dateA;
    });
  }, [timetable]);

  return (
    <div className="space-y-6">
      {/* Live Countdown Card */}
      <div className="hidden lg:block bg-white/65 backdrop-blur-md border border-slate-950/[0.06] rounded-[20px] p-6 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] hover:border-slate-950/[0.12] transition-all duration-300 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-950/[0.02] rounded-full blur-2xl pointer-events-none transition-all duration-300" />
        
        <div className="flex items-center gap-3 mb-5 relative z-10">
          <div className="w-10 h-10 rounded-xl bg-[#2E95FF]/10 border border-[#2E95FF]/20 flex items-center justify-center text-[#2E95FF]">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-black text-slate-900 text-base leading-tight">Exam Countdown</h3>
            <p className="text-xs text-slate-400/80 font-bold">Preparation window ticking</p>
          </div>
        </div>

        {nextExam && timeLeft ? (
          <div className="relative z-10 space-y-4">
            {/* Live Ticker display */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2 text-center">
              {[
                { val: timeLeft.days, label: "Days" },
                { val: timeLeft.hours, label: "Hours" },
                { val: timeLeft.mins, label: "Mins" },
                { val: timeLeft.secs, label: "Secs" }
              ].map((slot, idx) => (
                <div key={idx} className="bg-slate-950/[0.02] border border-slate-950/[0.04] p-2 sm:p-2.5 rounded-xl">
                  <div className="text-lg sm:text-2xl font-black text-slate-900 tabular-nums leading-none mb-1">
                    {String(slot.val).padStart(2, "0")}
                  </div>
                  <div className="text-[8px] sm:text-[9px] font-black text-slate-400/80 uppercase tracking-widest">{slot.label}</div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <div className="text-sm font-black text-slate-900 mb-0.5 leading-snug">{nextExam.subjectName}</div>
              <div className="text-xs text-slate-400/80 font-bold">
                <time dateTime={nextExam.parsedDate.toISOString()}>
                  {format(nextExam.parsedDate, "EEEE, MMMM do yyyy")}
                </time> • {nextExam.time}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative z-10 flex flex-col items-center justify-center py-6 text-center">
            <AlertCircle className="w-8 h-8 text-slate-300 mb-2" />
            <p className="text-sm font-black text-slate-700">Exam window complete</p>
            <p className="text-xs font-bold text-slate-400/80 max-w-[200px] mt-1 leading-snug">
              No upcoming exams found in this timetable. Ready to party?
            </p>
          </div>
        )}
      </div>

      {/* TIMETABLE CARD */}
      <div className="bg-white/65 backdrop-blur-md border border-slate-950/[0.06] rounded-[20px] p-5 md:p-6 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] hover:border-slate-950/[0.12] transition-all duration-300 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-950/[0.02] rounded-full blur-2xl pointer-events-none transition-all duration-300" />
        
        <div className="flex items-center gap-3 mb-4 md:mb-5">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#2E95FF]/10 border border-[#2E95FF]/20 flex items-center justify-center text-[#2E95FF] shrink-0">
            <Calendar className="w-4.5 h-4.5 md:w-5 md:h-5" />
          </div>
          <div>
            <h3 className="font-black text-slate-900 text-sm md:text-base leading-tight">Semester Schedule</h3>
            <p className="text-[10px] md:text-xs text-slate-400/80 font-bold">S{sem} {branch.toUpperCase()} timetable</p>
          </div>
        </div>

        {/* Desktop View: Card list */}
        <div className="hidden md:block space-y-3 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin">
          {sortedTimetable.length > 0 ? (
            sortedTimetable.map((slot) => {
              const dateObj = parseISO(slot.date);
              const isPast = new Date(slot.date).getTime() < new Date().setHours(0, 0, 0, 0);

              return (
                <div
                  key={`${slot.subjectCode}-${slot.date}`}
                  className={`flex gap-4 p-3 rounded-xl transition-all border ${
                    isPast
                      ? "bg-slate-950/[0.01] border-slate-950/[0.02] opacity-50"
                      : "bg-white/50 hover:bg-white border-slate-950/[0.04] hover:border-slate-950/[0.08] shadow-[0_2px_4px_rgba(0,0,0,0.005)]"
                  }`}
                >
                  <time 
                    dateTime={slot.date}
                    className="shrink-0 flex flex-col items-center justify-center w-12 h-12 bg-slate-950/[0.02] border border-slate-950/[0.06] rounded-xl text-center"
                  >
                    <span className="text-[9px] font-black uppercase text-slate-400/80 leading-none mb-1">
                      {format(dateObj, "MMM")}
                    </span>
                    <span className="text-sm font-black text-slate-900 leading-none">{format(dateObj, "dd")}</span>
                  </time>
                  <div className="flex flex-col justify-center min-w-0 flex-1">
                    <h4 className="text-xs font-black text-slate-900 leading-tight mb-0.5 truncate">
                      {slot.subjectName}
                    </h4>
                    <p className="text-[10px] font-bold text-slate-400/80">
                      {slot.time} • <span className="font-black text-slate-800">{slot.subjectCode}</span>
                    </p>
                  </div>
                  {isPast && (
                    <span className="text-[9px] font-black text-slate-400 bg-slate-950/[0.04] px-2 py-1 rounded-md self-center">
                      Done
                    </span>
                  )}
                </div>
              );
            })
          ) : (
            <p className="text-sm font-semibold text-slate-400 py-4 text-center">Timetable not uploaded yet.</p>
          )}
        </div>

        {/* Mobile View: Minimal Timeline layout */}
        <div className="md:hidden pl-2 pt-1 space-y-0.5 max-h-[260px] overflow-y-auto pr-1 scrollbar-thin">
          {sortedTimetable.length > 0 ? (
            sortedTimetable.map((slot) => {
              const dateObj = parseISO(slot.date);
              const isPast = new Date(slot.date).getTime() < new Date().setHours(0, 0, 0, 0);

              return (
                <div
                  key={`${slot.subjectCode}-${slot.date}`}
                  className={`relative pl-5 pb-3.5 border-l border-slate-200 last:pb-0 ${
                    isPast ? "opacity-45" : ""
                  }`}
                >
                  {/* Timeline node dot */}
                  <div className={`absolute left-[-4.5px] top-1.5 w-2 h-2 rounded-full border border-white shadow-sm transition-colors ${isPast ? 'bg-slate-300' : 'bg-indigo-600 ring-2 ring-indigo-50'}`} />
                  
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center justify-between text-[11px] font-black text-slate-800">
                      <time dateTime={slot.date} className="text-[10px] text-indigo-600 font-black tracking-wide uppercase tabular-nums">
                        {format(dateObj, "MMM dd, EEE")}
                      </time>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">{slot.subjectCode}</span>
                    </div>
                    <span className="text-xs font-black text-slate-700 truncate leading-snug">
                      {slot.subjectName}
                    </span>
                    <span className="text-[9px] font-bold text-slate-400/80 leading-none">
                      {slot.time}
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-xs font-semibold text-slate-400 py-2 text-center">Timetable not uploaded yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
