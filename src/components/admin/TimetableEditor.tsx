"use client";

import React, { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Calendar, Plus, Trash2, Save, AlertCircle, CheckCircle2 } from "lucide-react";

interface ExamSlot {
  date: string;
  time: string;
  subjectCode: string;
  subjectName: string;
}

interface TimetableEditorProps {
  secretParam: string;
  allowedBranches: string[];
  visibleSemesters: number[];
  initialExams: ExamSlot[];
  currentBranch: string;
  currentSem: number;
  saveTimetableAction: (secret: string, branch: string, sem: number, exams: ExamSlot[]) => Promise<{ success: boolean; error?: string }>;
}

export default function TimetableEditor({
  secretParam,
  allowedBranches,
  visibleSemesters,
  initialExams,
  currentBranch,
  currentSem,
  saveTimetableAction
}: TimetableEditorProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Selector states
  const [branch, setBranch] = useState(currentBranch || "cs");
  const [sem, setSem] = useState(currentSem || 4);

  // Editable exams list
  const [exams, setExams] = useState<ExamSlot[]>([]);

  // Sync with incoming prop changes
  useEffect(() => {
    setExams(initialExams || []);
  }, [initialExams]);

  const handleBranchChange = (newBranch: string) => {
    setBranch(newBranch);
    setFeedback(null);
    router.push(`/admin?secret=${secretParam}&branch=${cmsBranchSlug()}&sem=${sem}&tab=timetable`);
  };

  const handleSemChange = (newSem: number) => {
    setSem(newSem);
    setFeedback(null);
    router.push(`/admin?secret=${secretParam}&branch=${branch}&sem=${newSem}&tab=timetable`);
  };

  // Safe navigation helper
  const cmsBranchSlug = () => branch || "cs";

  const handleAddRow = () => {
    setExams([...exams, { date: "", time: "1:30 PM - 4:30 PM", subjectCode: "", subjectName: "" }]);
  };

  const handleRemoveRow = (index: number) => {
    setExams(exams.filter((_, idx) => idx !== index));
  };

  const handleCellChange = (index: number, field: keyof ExamSlot, value: string) => {
    const updated = [...exams];
    updated[index] = { ...updated[index], [field]: value };
    setExams(updated);
  };

  const handleSave = () => {
    setFeedback(null);

    // Validation
    const invalid = exams.some(e => !e.date || !e.subjectCode || !e.subjectName);
    if (invalid) {
      setFeedback({ type: "error", message: "All exam slots must have a Date, Subject Code, and Subject Name." });
      return;
    }

    startTransition(async () => {
      try {
        const res = await saveTimetableAction(secretParam, branch, sem, exams);
        if (res.success) {
          setFeedback({ type: "success", message: `Exam timetable for ${branch.toUpperCase()} S${sem} updated successfully!` });
          router.refresh();
        } else {
          setFeedback({ type: "error", message: res.error || "Failed to save timetable." });
        }
      } catch (err: any) {
        setFeedback({ type: "error", message: err.message || "An unexpected error occurred." });
      }
    });
  };

  return (
    <section id="timetable-editor" className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-200">Exam Timetable Scheduler</h2>
            <p className="text-xs text-gray-400 mt-0.5">Edit exam dates, times, and slot mappings for study hubs.</p>
          </div>
        </div>

        {/* Branch / Sem selectors */}
        <div className="flex items-center gap-3">
          <select
            value={branch}
            onChange={(e) => handleBranchChange(e.target.value)}
            className="bg-[#121214] border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-white/30 text-xs uppercase"
          >
            {allowedBranches.map(b => (
              <option key={b} value={b}>{b.toUpperCase()}</option>
            ))}
          </select>

          <select
            value={sem}
            onChange={(e) => handleSemChange(Number(e.target.value))}
            className="bg-[#121214] border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-white/30 text-xs"
          >
            {visibleSemesters.map(s => (
              <option key={s} value={s}>S{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {exams.length === 0 ? (
          <div className="p-8 text-center bg-white/5 rounded-2xl border border-white/5 text-gray-400">
            <p className="font-semibold text-sm">No exam slots mapped for S{sem} {branch.toUpperCase()}.</p>
            <p className="text-xs text-gray-500 mt-1">Add a slot to schedule exams.</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-white/5">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-white/5 text-gray-400 text-xs uppercase tracking-wider font-bold">
                  <th className="p-3">Exam Date</th>
                  <th className="p-3">Time Range</th>
                  <th className="p-3">Subject Code</th>
                  <th className="p-3">Subject Name</th>
                  <th className="p-3 text-center w-12">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-white/[0.01]">
                {exams.map((exam, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-3">
                      <input
                        type="date"
                        value={exam.date}
                        onChange={(e) => handleCellChange(idx, "date", e.target.value)}
                        className="bg-[#121214] border border-white/10 rounded-lg px-2.5 py-1.5 text-white focus:outline-none text-xs w-full focus:border-white/20"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="text"
                        value={exam.time}
                        placeholder="e.g. 1:30 PM - 4:30 PM"
                        onChange={(e) => handleCellChange(idx, "time", e.target.value)}
                        className="bg-[#121214] border border-white/10 rounded-lg px-2.5 py-1.5 text-white focus:outline-none text-xs w-full focus:border-white/20"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="text"
                        value={exam.subjectCode}
                        placeholder="e.g. PCCST402"
                        onChange={(e) => handleCellChange(idx, "subjectCode", e.target.value)}
                        className="bg-[#121214] border border-white/10 rounded-lg px-2.5 py-1.5 text-white focus:outline-none text-xs w-full uppercase focus:border-white/20"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="text"
                        value={exam.subjectName}
                        placeholder="e.g. Operating Systems"
                        onChange={(e) => handleCellChange(idx, "subjectName", e.target.value)}
                        className="bg-[#121214] border border-white/10 rounded-lg px-2.5 py-1.5 text-white focus:outline-none text-xs w-full focus:border-white/20"
                      />
                    </td>
                    <td className="p-3 text-center">
                      <button
                        type="button"
                        onClick={() => handleRemoveRow(idx)}
                        className="p-1.5 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer"
                        title="Delete Exam Slot"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={handleAddRow}
            className="flex-1 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98]"
          >
            <Plus className="w-4 h-4" /> Add Exam Slot
          </button>
          
          <button
            type="button"
            onClick={handleSave}
            disabled={isPending}
            className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 active:scale-[0.98] shadow-md shadow-indigo-950/20"
          >
            <Save className="w-4 h-4" /> {isPending ? "Saving overrides..." : "Save Timetable Overrides"}
          </button>
        </div>

        {feedback && (
          <div className={`p-4 rounded-xl text-sm border mt-3 flex items-center gap-2.5 ${feedback.type === "success" ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400" : "bg-rose-500/10 border-rose-500/25 text-rose-400"}`}>
            {feedback.type === "success" ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
            <span>{feedback.message}</span>
          </div>
        )}
      </div>
    </section>
  );
}
