"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, Flame, ListTodo, Plus, Share2, 
  AlertCircle, Calculator, AlertTriangle, 
  HelpCircle, CheckCircle2, Info, ArrowRight, Sparkles,
  Trash2, Edit, Check
} from "lucide-react";
import { triggerHaptic } from "@/lib/haptic";

interface AttendanceSubject {
  id: string;
  code: string;
  name: string;
  attended: number;
  total: number;
}

interface AttendanceTrackerProps {
  branch: string;
  sem: number;
  attendanceSubjects: AttendanceSubject[];
  attendanceStreak: number;
  setAttendanceSubjects: React.Dispatch<React.SetStateAction<AttendanceSubject[]>>;
  triggerNotification: (msg: string) => void;
  loadSemesterData: (branch: string, sem: number) => void;
}

interface AttendanceStepperProps {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const AttendanceStepper: React.FC<AttendanceStepperProps> = ({ label, value, onIncrement, onDecrement }) => {
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const startAction = (action: () => void) => {
    action();
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        action();
      }, 80);
    }, 450);
  };

  const stopAction = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  React.useEffect(() => {
    return stopAction;
  }, []);

  return (
    <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-xl p-1 shrink-0">
      <span className="text-[9px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-1.5 select-none">{label}</span>
      <button
        onMouseDown={() => startAction(onDecrement)}
        onMouseUp={stopAction}
        onMouseLeave={stopAction}
        onTouchStart={(e) => {
          e.preventDefault();
          startAction(onDecrement);
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          stopAction();
        }}
        className="w-7 h-7 flex items-center justify-center rounded-lg bg-white hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-350 font-bold text-xs transition-colors cursor-pointer select-none active:scale-90 border border-slate-200/40 dark:border-slate-700/40"
        aria-label={`Decrement ${label}`}
      >
        −
      </button>
      <span className="w-8 text-center text-xs font-semibold text-slate-900 dark:text-slate-100 font-sans select-none">
        {value}
      </span>
      <button
        onMouseDown={() => startAction(onIncrement)}
        onMouseUp={stopAction}
        onMouseLeave={stopAction}
        onTouchStart={(e) => {
          e.preventDefault();
          startAction(onIncrement);
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          stopAction();
        }}
        className="w-7 h-7 flex items-center justify-center rounded-lg bg-white hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-350 font-bold text-xs transition-colors cursor-pointer select-none active:scale-90 border border-slate-200/40 dark:border-slate-700/40"
        aria-label={`Increment ${label}`}
      >
        +
      </button>
    </div>
  );
};

export default function AttendanceTracker({
  branch,
  sem,
  attendanceSubjects,
  attendanceStreak,
  setAttendanceSubjects,
  triggerNotification,
  loadSemesterData
}: AttendanceTrackerProps) {
  // CIE Marks Planner states (local to tracker)
  const [mtAggSeries1, setMtAggSeries1] = useState(0);
  const [mtAggSeries2, setMtAggSeries2] = useState(0);
  const [mtAggAssg, setMtAggAssg] = useState(0);
  const [mtAggAtt, setMtAggAtt] = useState(0);
  const [mtDmgTarget, setMtDmgTarget] = useState(35);

  // Info drawer states for mobile explanation
  const [showAttInfo, setShowAttInfo] = useState(false);
  const [showCieInfo, setShowCieInfo] = useState(false);

  // Edit Mode states
  const [isEditing, setIsEditing] = useState(false);
  const [newSubCode, setNewSubCode] = useState("");
  const [newSubName, setNewSubName] = useState("");

  const handleDeleteSubject = (subId: string) => {
    setAttendanceSubjects(prev => prev.filter(sub => sub.id !== subId));
    triggerNotification("Subject removed from tracker");
  };

  const handleAddSubject = () => {
    if (!newSubName.trim() || !newSubCode.trim()) {
      triggerNotification("Please fill name and code");
      return;
    }
    const newSub: AttendanceSubject = {
      id: `custom_${Date.now()}`,
      code: newSubCode.trim().toUpperCase(),
      name: newSubName.trim(),
      attended: 0,
      total: 0
    };
    setAttendanceSubjects(prev => [...prev, newSub]);
    setNewSubName("");
    setNewSubCode("");
    triggerNotification("Custom subject added");
  };

  const getAverageAttendance = () => {
    if (attendanceSubjects.length === 0) return 0;
    let totalPct = 0;
    attendanceSubjects.forEach((sub) => {
      const pct = sub.total > 0 ? (sub.attended / sub.total) * 100 : 0;
      totalPct += pct;
    });
    return Math.round(totalPct / attendanceSubjects.length);
  };

  const handleAttendanceChange = (subId: string, field: "attended" | "total", change: number) => {
    setAttendanceSubjects((prev) =>
      prev.map((sub) => {
        if (sub.id === subId) {
          const updated = { ...sub };
          if (field === "attended") {
            updated.attended = Math.max(0, updated.attended + change);
            if (updated.attended > updated.total) {
              updated.total = updated.attended;
            }
          } else {
            updated.total = Math.max(0, updated.total + change);
            if (updated.total < updated.attended) {
              updated.attended = updated.total;
            }
          }
          return updated;
        }
        return sub;
      })
    );
  };

  const avg = getAverageAttendance();
  const isTrackerEmpty = attendanceSubjects.length === 0;

  // Calculate free attendance marks according to KTU rules
  let freeMarks = 0;
  let freeMarksLabel = "0 / 5 Marks";
  let freeMarksColor = "text-rose-500 dark:text-rose-400";
  if (avg >= 90) { freeMarks = 5; freeMarksLabel = "5 / 5 Marks (Excellent)"; freeMarksColor = "text-emerald-500 dark:text-emerald-400"; }
  else if (avg >= 85) { freeMarks = 4; freeMarksLabel = "4 / 5 Marks (Good)"; freeMarksColor = "text-emerald-500 dark:text-emerald-400"; }
  else if (avg >= 80) { freeMarks = 3; freeMarksLabel = "3 / 5 Marks (Average)"; freeMarksColor = "text-blue-500 dark:text-blue-400"; }
  else if (avg >= 75) { freeMarks = 2; freeMarksLabel = "2 / 5 Marks (Marginal)"; freeMarksColor = "text-amber-500 dark:text-amber-400"; }

  const handleShareRunway = () => {
    let message = "My KTU Attendance Runway:\n";
    attendanceSubjects.forEach(sub => {
      const pct = sub.total > 0 ? Math.round((sub.attended / sub.total) * 100) : 0;
      const totalSemDays = 90;
      const target = 75;
      const totalNeededClasses = Math.ceil(totalSemDays * (target / 100));
      const remainingClasses = Math.max(0, totalSemDays - sub.total);
      const classesNeededToAttend = Math.max(0, totalNeededClasses - sub.attended);
      const canMiss = Math.max(0, remainingClasses - classesNeededToAttend);
      const impossible = classesNeededToAttend > remainingClasses;

      if (impossible) {
        message += `- ${sub.code}: ${pct}% (Danger of detention!)\n`;
      } else {
        message += `- ${sub.code}: ${pct}% (Safe to miss ${canMiss} more classes)\n`;
      }
    });
    message += "\nTrack your attendance runway on KTUNODE!";
    navigator.clipboard.writeText(message);
    triggerNotification("Attendance runway copied to clipboard!");
  };

  // CIE computations
  const totalCie = Math.min(50, ((mtAggSeries1 + mtAggSeries2) / 2 * 0.7) + mtAggAssg + mtAggAtt);
  const neededSeries2 = ((mtDmgTarget - (mtAggAssg + mtAggAtt)) / 0.7) * 2 - mtAggSeries1;
  const impossibleCie = neededSeries2 > 50;
  const safeCie = neededSeries2 <= 0;
  const allZeroCie = mtAggSeries1 === 0 && mtAggSeries2 === 0 && mtAggAssg === 0 && mtAggAtt === 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full">
      
      {/* ── CARD 1: ATTENDANCE TRACKER ── */}
      <div className="lg:col-span-7 bg-white/80 dark:bg-slate-950/60 backdrop-blur-3xl border border-slate-200/50 dark:border-white/[0.04] rounded-3xl p-5 md:p-6 shadow-xl flex flex-col justify-between space-y-5">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.04] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight leading-none">Attendance Log</h3>
                  <button 
                    onClick={() => setShowAttInfo(!showAttInfo)}
                    className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-slate-600 cursor-pointer"
                    aria-label="Attendance information"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      triggerHaptic("medium");
                      setIsEditing(!isEditing);
                    }}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-350 text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 border border-slate-200/40 dark:border-slate-700/40 shrink-0"
                    title="Edit subject list layout"
                  >
                    {isEditing ? <Check className="w-3 h-3 text-emerald-500" /> : <Edit className="w-3 h-3" />}
                    <span>{isEditing ? "Done" : "Edit Layout"}</span>
                  </button>
                </div>
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block mt-1">S{sem} Active Attendance Runway</span>
              </div>
            </div>

            {/* Attendance Marks telemetry */}
            <div className="text-right shrink-0">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">CIE Attendance Marks</span>
              <span className={`text-sm font-black ${freeMarksColor} block mt-0.5 font-mono`}>{freeMarksLabel.split(" ")[0]} / 5</span>
            </div>
          </div>

          {/* Inline Info Drawer */}
          <AnimatePresence>
            {showAttInfo && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden bg-slate-50 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-800/80 rounded-2xl p-4 text-xs text-slate-550 dark:text-slate-400 leading-relaxed space-y-2"
              >
                <p className="font-bold text-slate-800 dark:text-slate-200">KTU B.Tech Attendance Grading Scheme:</p>
                <ul className="list-disc pl-4 space-y-1 font-mono">
                  <li>90% and above: 5 Marks in CIE</li>
                  <li>85% to 89%: 4 Marks in CIE</li>
                  <li>80% to 84%: 3 Marks in CIE</li>
                  <li>75% to 79%: 2 Marks in CIE</li>
                  <li>Below 75%: Detention risk / No marks</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Subjects Rows Container */}
          <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1 scrollbar-thin">
            {isTrackerEmpty ? (
              <div className="flex flex-col items-center justify-center py-10 px-4 border border-dashed border-slate-200 dark:border-slate-800/80 rounded-2xl bg-slate-50/50 dark:bg-slate-900/20 text-center">
                <div className="p-3 rounded-2xl bg-blue-500/5 text-blue-500/50 mb-3">
                  <ListTodo className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-1">No Active Subjects</span>
                <span className="text-xs font-medium text-slate-400 dark:text-slate-500 mb-4 max-w-xs block leading-normal">Import your branch core subjects to track attendance and CIE marks dynamically.</span>
                <button
                  onClick={() => loadSemesterData(branch, sem)}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider hover:bg-blue-500/25 transition-all cursor-pointer active:scale-95"
                >
                  <Plus className="w-3.5 h-3.5" /> Import {branch.toUpperCase()} Sem {sem} Core
                </button>
              </div>
            ) : (
              <>
                {attendanceSubjects.map((sub) => {
                  const pct = sub.total > 0 ? Math.round((sub.attended / sub.total) * 100) : 0;
                  const totalSemDays = 90;
                  const target = 75;
                  const totalNeededClasses = Math.ceil(totalSemDays * (target / 100));
                  const remainingClasses = Math.max(0, totalSemDays - sub.total);
                  const classesNeededToAttend = Math.max(0, totalNeededClasses - sub.attended);
                  const canMiss = Math.max(0, remainingClasses - classesNeededToAttend);
                  const impossible = classesNeededToAttend > remainingClasses;

                  let color = "text-emerald-600 dark:text-emerald-400";
                  let progressBg = "bg-emerald-500";
                  if (pct < 75) { color = "text-rose-600 dark:text-rose-450"; progressBg = "bg-rose-500"; }
                  else if (pct < 85) { color = "text-blue-600 dark:text-blue-400"; progressBg = "bg-blue-500"; }

                  return (
                    <div key={sub.id} className="p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200/30 dark:border-white/[0.02] flex flex-col justify-between gap-3 transition-all duration-200 hover:scale-[1.005]">
                      <div className="flex justify-between items-start">
                        <div className="truncate pr-2 flex-1">
                          {isEditing ? (
                            <div className="flex flex-col gap-1.5 w-full">
                              <input 
                                type="text" 
                                value={sub.name} 
                                onChange={(e) => {
                                  setAttendanceSubjects(prev => prev.map(s => s.id === sub.id ? { ...s, name: e.target.value } : s))
                                }} 
                                className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-2.5 py-1.5 text-xs rounded-xl font-medium w-full focus:outline-none focus:ring-1 focus:ring-blue-500/20 text-slate-900 dark:text-white"
                                placeholder="Subject Name"
                              />
                              <input 
                                type="text" 
                                value={sub.code} 
                                onChange={(e) => {
                                  setAttendanceSubjects(prev => prev.map(s => s.id === sub.id ? { ...s, code: e.target.value } : s))
                                }} 
                                className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-2.5 py-1.5 text-xs rounded-xl font-mono font-bold w-full focus:outline-none focus:ring-1 focus:ring-blue-500/20 text-slate-900 dark:text-white"
                                placeholder="Subject Code"
                              />
                            </div>
                          ) : (
                            <>
                              <span className="font-semibold text-xs block text-slate-800 dark:text-slate-100 truncate leading-none font-sans">{sub.name}</span>
                              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block truncate mt-1.5">{sub.code}</span>
                            </>
                          )}
                        </div>
                        <div className="text-right shrink-0 flex items-start gap-2">
                          {!isEditing ? (
                            <div>
                              <span className={`font-semibold text-sm block ${color} font-sans leading-none`}>{pct}%</span>
                              {impossible ? (
                                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider block mt-1.5 animate-pulse">
                                  Detained
                                </span>
                              ) : (
                                <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 block mt-1">
                                  Safe Bunk: <strong className="text-emerald-500 dark:text-emerald-450 font-sans font-semibold">{canMiss}</strong>
                                </span>
                              )}
                            </div>
                          ) : (
                            <button
                              onClick={() => handleDeleteSubject(sub.id)}
                              className="p-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-455 border border-rose-500/15 rounded-xl cursor-pointer transition-colors active:scale-95"
                              title="Delete subject"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>

                      {!isEditing && (
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                          <div className="flex-1">
                            <div className="flex justify-between text-[9px] font-semibold text-slate-455 dark:text-slate-500 mb-1 font-sans">
                              <span>Attended: {sub.attended} / {sub.total}</span>
                            </div>
                            <div className="h-1.5 bg-slate-250 dark:bg-slate-800 rounded-full overflow-hidden">
                              <div className={`h-full ${progressBg} transition-all duration-300`} style={{ width: `${pct}%` }} />
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2 self-end sm:self-auto">
                            <AttendanceStepper 
                              label="Att" 
                              value={sub.attended} 
                              onIncrement={() => handleAttendanceChange(sub.id, "attended", 1)} 
                              onDecrement={() => handleAttendanceChange(sub.id, "attended", -1)} 
                            />
                            <AttendanceStepper 
                              label="Tot" 
                              value={sub.total} 
                              onIncrement={() => handleAttendanceChange(sub.id, "total", 1)} 
                              onDecrement={() => handleAttendanceChange(sub.id, "total", -1)} 
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}

                {isEditing && (
                  <div className="p-4 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800/80 bg-slate-50/20 dark:bg-slate-900/10 flex flex-col gap-3">
                    <span className="text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-widest block">Add Custom Subject</span>
                    <div className="grid grid-cols-2 gap-2">
                      <input 
                        type="text" 
                        placeholder="Code (e.g. CST202)" 
                        value={newSubCode} 
                        onChange={e => setNewSubCode(e.target.value)} 
                        className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-2.5 py-1.5 text-xs rounded-xl font-mono focus:outline-none focus:ring-1 focus:ring-blue-500/20 text-slate-900 dark:text-white"
                      />
                      <input 
                        type="text" 
                        placeholder="Name (e.g. Operating Systems)" 
                        value={newSubName} 
                        onChange={e => setNewSubName(e.target.value)} 
                        className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-2.5 py-1.5 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500/20 text-slate-900 dark:text-white"
                      />
                    </div>
                    <button
                      onClick={handleAddSubject}
                      className="py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Custom Subject
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Share Button */}
        {!isTrackerEmpty && (
          <button
            onClick={handleShareRunway}
            className="w-full py-3 rounded-2xl bg-white hover:bg-slate-50 dark:bg-slate-900/60 dark:hover:bg-slate-800/60 text-slate-650 dark:text-slate-300 border border-slate-200/60 dark:border-white/[0.06] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-[0.98] flex items-center justify-center gap-2 shadow-sm"
          >
            <Share2 className="w-3.5 h-3.5" /> Share Runway
          </button>
        )}
      </div>

      {/* ── CARD 2: CIE MARKS PLANNER ── */}
      <div className="lg:col-span-5 bg-white/80 dark:bg-slate-950/60 backdrop-blur-3xl border border-slate-200/50 dark:border-white/[0.04] rounded-3xl p-5 md:p-6 shadow-xl flex flex-col justify-between space-y-4">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.04] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight leading-none">CIE Planner</h3>
                  <button 
                    onClick={() => setShowCieInfo(!showCieInfo)}
                    className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-slate-600 cursor-pointer"
                    aria-label="CIE information"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block mt-1">Forecasting & Damage Control</span>
              </div>
            </div>
          </div>

          {/* Inline Info Drawer */}
          <AnimatePresence>
            {showCieInfo && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden bg-slate-50 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-800/80 rounded-2xl p-4 text-xs text-slate-550 dark:text-slate-400 leading-relaxed space-y-2 font-sans"
              >
                <p className="font-bold text-slate-800 dark:text-slate-200">KTU Internals (CIE) Formulas:</p>
                <p>Internals are graded out of 50: 35 Marks from exams (best/average formulas based on scheme, simulated as 70% of Series average), 10 Marks from assignments, and 5 Marks from attendance.</p>
                <p className="font-bold text-slate-800 dark:text-slate-200">Pass Criteria:</p>
                <p>You need a combined score of 75/150 (CIE + ESE) and minimum 40% (40/100) in ESE exam to pass.</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Input Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Series 1 (max 50)</label>
              <input
                type="number"
                min="0"
                max="50"
                value={mtAggSeries1 || ""}
                placeholder="0"
                onChange={(e) => setMtAggSeries1(Math.min(50, Math.max(0, Number(e.target.value))))}
                className="w-full bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none focus:ring-1 focus:ring-blue-500/30 focus:border-blue-500 text-slate-900 dark:text-slate-100 transition-all font-mono"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Series 2 (max 50)</label>
              <input
                type="number"
                min="0"
                max="50"
                value={mtAggSeries2 || ""}
                placeholder="0"
                onChange={(e) => setMtAggSeries2(Math.min(50, Math.max(0, Number(e.target.value))))}
                className="w-full bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none focus:ring-1 focus:ring-blue-500/30 focus:border-blue-500 text-slate-900 dark:text-slate-100 transition-all font-mono"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Assignments (max 10)</label>
              <input
                type="number"
                min="0"
                max="10"
                value={mtAggAssg || ""}
                placeholder="0"
                onChange={(e) => setMtAggAssg(Math.min(10, Math.max(0, Number(e.target.value))))}
                className="w-full bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none focus:ring-1 focus:ring-blue-500/30 focus:border-blue-500 text-slate-900 dark:text-slate-100 transition-all font-mono"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Attendance (max 5)</label>
              <input
                type="number"
                min="0"
                max="5"
                value={mtAggAtt || ""}
                placeholder="0"
                onChange={(e) => setMtAggAtt(Math.min(5, Math.max(0, Number(e.target.value))))}
                className="w-full bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none focus:ring-1 focus:ring-blue-500/30 focus:border-blue-500 text-slate-900 dark:text-slate-100 transition-all font-mono"
              />
            </div>
          </div>

          {/* CIE Score HUD */}
          <div className="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 text-center space-y-1.5">
            <span className="text-[9px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase block">Total Internal (CIE)</span>
            <span className="text-3xl font-bold text-slate-900 dark:text-white font-mono block tracking-tight">{totalCie.toFixed(1)} <span className="text-xs text-slate-400 font-normal">/ 50</span></span>
            <span className="text-[8px] font-medium text-slate-400 dark:text-slate-500 block">Formula: ((S1 + S2) / 2 &times; 0.7) + Assg + Att</span>
          </div>

          {/* Damage Control target slider */}
          <div className="pt-2 border-t border-slate-100 dark:border-white/[0.04] space-y-2.5">
            <div className="flex justify-between items-center text-xs font-bold text-slate-500 dark:text-slate-400">
              <span>Target CIE Internals</span>
              <span className="text-blue-600 dark:text-blue-400 font-bold font-mono">{mtDmgTarget} / 50</span>
            </div>
            <input
              type="range"
              min="20"
              max="50"
              value={mtDmgTarget}
              onChange={(e) => setMtDmgTarget(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer h-1 rounded-lg bg-slate-100 dark:bg-slate-800"
            />

            {/* Target Status Warning box */}
            {(() => {
              let desc = "";
              let color = "text-blue-600 dark:text-blue-400 bg-blue-500/5 border-blue-500/10";
              let stateLabel = "Internals Status";
              let StateIcon = AlertTriangle;
              
              if (allZeroCie) {
                stateLabel = "Enter Scores to Begin";
                desc = "Input your Series 1 internals above to calculate damage control targets for Series 2.";
                color = "text-blue-600 dark:text-blue-400 bg-blue-500/5 border-blue-500/10";
                StateIcon = HelpCircle;
              } else if (impossibleCie) {
                stateLabel = "Target Unobtainable";
                desc = `You need a Series 2 score of ${neededSeries2.toFixed(1)} / 50, which is impossible. Lower your target CIE.`;
                color = "text-rose-500 bg-rose-500/10 border-rose-500/20";
                StateIcon = AlertCircle;
              } else if (safeCie) {
                stateLabel = "CIE Target Secured";
                desc = `You already secured your target CIE of ${mtDmgTarget}! You need 0 marks in Series 2.`;
                color = "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
                StateIcon = CheckCircle2;
              } else {
                stateLabel = "Damage Control Active";
                desc = `You need at least ${neededSeries2.toFixed(1)} / 50 in Series 2 to secure your target CIE of ${mtDmgTarget}.`;
                color = "text-amber-500 bg-amber-500/5 border-amber-500/10";
                StateIcon = AlertTriangle;
              }

              return (
                <div className={`p-3 rounded-2xl border text-[10px] leading-relaxed text-center flex flex-col items-center gap-1.5 ${color}`}>
                  <span className="font-bold uppercase tracking-wider flex items-center gap-1">
                    <StateIcon className="w-3.5 h-3.5" />
                    {stateLabel}
                  </span>
                  <span>{desc}</span>
                </div>
              );
            })()}
          </div>
        </div>

        {/* ESE targets forecast */}
        {!allZeroCie && (
          <div className="pt-3 border-t border-slate-100 dark:border-white/[0.04] space-y-2">
            <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Required ESE Exam Grades</span>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              {[
                { grade: "S", pct: 90, label: "S (90+)" },
                { grade: "A+", pct: 85, label: "A+ (85+)" },
                { grade: "A", pct: 80, label: "A (80+)" },
                { grade: "B+", pct: 70, label: "B+ (70+)" },
                { grade: "B", pct: 60, label: "B (60+)" },
                { grade: "C+", pct: 50, label: "C+ (50+)" }
              ].map(tg => {
                const needed = (tg.pct - totalCie) * 2;
                const impossible = needed > 100;
                const finalEse = Math.max(40, Math.ceil(needed));
                
                let badge = "";
                let badgeClass = "";
                if (impossible) {
                  badge = "Impossible";
                  badgeClass = "bg-rose-500/10 text-rose-500 border-rose-500/15";
                } else if (finalEse === 40 && needed <= 40) {
                  badge = "40/100 (Min)";
                  badgeClass = "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/15";
                } else {
                  badge = `${finalEse} / 100`;
                  badgeClass = "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/15";
                }

                return (
                  <div key={tg.grade} className="p-2 rounded-xl bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200/40 dark:border-white/[0.02] flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-300 block">{tg.grade} Grade</span>
                      <span className="text-[8px] text-slate-400 font-mono block mt-0.5">{tg.label}</span>
                    </div>
                    <span className={`px-2 py-0.5 rounded-lg text-[9px] font-bold uppercase ${badgeClass} font-mono`}>
                      {badge}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
