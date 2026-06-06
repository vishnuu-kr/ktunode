"use client";

import React, { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Link as LinkIcon, Upload, AlertCircle, CheckCircle2, Edit3 } from "lucide-react";

interface Topic {
  id: string;
  title: string;
}

interface Module {
  id: string;
  title: string;
  topics: Topic[];
}

interface Subject {
  id: string;
  code: string;
  name: string;
  modules: Module[];
}

interface CmsPanelProps {
  secretParam: string;
  allowedBranches: string[];
  visibleSemesters: number[];
  subjects: Subject[];
  currentBranch: string;
  currentSem: number;
  currentSubjectId: string;
  currentTopicId: string;
  currentNoteContent: string;
  currentNotePath: string;
  saveNoteAction: (formData: FormData) => Promise<{ success: boolean; error?: string }>;
}

export default function CmsPanel({
  secretParam,
  allowedBranches,
  visibleSemesters,
  subjects,
  currentBranch,
  currentSem,
  currentSubjectId,
  currentTopicId,
  currentNoteContent,
  currentNotePath,
  saveNoteAction
}: CmsPanelProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Form states
  const [branch, setBranch] = useState(currentBranch);
  const [sem, setSem] = useState(currentSem);
  const [subjectId, setSubjectId] = useState(currentSubjectId);
  const [topicId, setTopicId] = useState(currentTopicId);
  
  const [noteText, setNoteText] = useState(currentNoteContent);
  const [useUpload, setUseUpload] = useState(false);

  // Sync with incoming props (e.g. from deep-link clicks)
  useEffect(() => {
    setBranch(currentBranch);
    setSem(currentSem);
    setSubjectId(currentSubjectId);
    setTopicId(currentTopicId);
    setNoteText(currentNoteContent);
  }, [currentBranch, currentSem, currentSubjectId, currentTopicId, currentNoteContent]);

  const handleBranchChange = (newBranch: string) => {
    setBranch(newBranch);
    setSubjectId("");
    setTopicId("");
    router.push(`/admin?secret=${secretParam}&branch=${newBranch}&sem=${sem}`);
  };

  const handleSemChange = (newSem: number) => {
    setSem(newSem);
    setSubjectId("");
    setTopicId("");
    router.push(`/admin?secret=${secretParam}&branch=${branch}&sem=${newSem}`);
  };

  const handleSubjectChange = (newSubId: string) => {
    setSubjectId(newSubId);
    setTopicId("");
    router.push(`/admin?secret=${secretParam}&branch=${branch}&sem=${sem}&subject=${newSubId}`);
  };

  const handleTopicChange = (newTopicId: string) => {
    setTopicId(newTopicId);
    router.push(`/admin?secret=${secretParam}&branch=${branch}&sem=${sem}&subject=${subjectId}&topic=${newTopicId}#note-editor`);
  };

  const selectedSubject = subjects.find(s => s.id === subjectId);
  const allTopics = selectedSubject
    ? selectedSubject.modules.flatMap(m => m.topics.map(t => ({ ...t, moduleTitle: m.title })))
    : [];
  const selectedTopic = allTopics.find(t => t.id === topicId);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback(null);

    const formData = new FormData(e.currentTarget);
    formData.append("secret", secretParam);
    formData.append("branch", branch);
    formData.append("sem", String(sem));
    formData.append("subjectId", subjectId);
    formData.append("topicId", topicId);

    startTransition(async () => {
      try {
        const res = await saveNoteAction(formData);
        if (res.success) {
          setFeedback({ type: "success", message: "Note saved successfully! Live database refreshed." });
          router.refresh();
        } else {
          setFeedback({ type: "error", message: res.error || "Failed to save note." });
        }
      } catch (err: any) {
        setFeedback({ type: "error", message: err.message || "An unexpected error occurred." });
      }
    });
  };

  return (
    <section id="note-editor" className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl scroll-mt-6">
      <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
          <Edit3 className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-200">Notes Database CMS</h2>
          <p className="text-xs text-gray-400 mt-0.5">Manage and upload study notes directly into the system database.</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Dropdown selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Branch</label>
            <select
              value={branch}
              onChange={(e) => handleBranchChange(e.target.value)}
              className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition text-sm"
            >
              <option value="">Select Branch...</option>
              {allowedBranches.map(b => (
                <option key={b} value={b}>{b.toUpperCase()}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Semester</label>
            <select
              value={sem}
              onChange={(e) => handleSemChange(Number(e.target.value))}
              className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition text-sm"
            >
              <option value="0">Select Semester...</option>
              {visibleSemesters.map(s => (
                <option key={s} value={s}>Semester {s}</option>
              ))}
            </select>
          </div>
        </div>

        {branch && sem > 0 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Subject</label>
                <select
                  value={subjectId}
                  onChange={(e) => handleSubjectChange(e.target.value)}
                  className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition text-sm"
                >
                  <option value="">Select Subject...</option>
                  {subjects.map(s => (
                    <option key={s.id} value={s.id}>[{s.code}] {s.name}</option>
                  ))}
                </select>
              </div>

              {subjectId && (
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Syllabus Topic</label>
                  <select
                    value={topicId}
                    onChange={(e) => handleTopicChange(e.target.value)}
                    className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition text-sm"
                  >
                    <option value="">Select Topic...</option>
                    {allTopics.map(t => (
                      <option key={t.id} value={t.id}>
                        {t.moduleTitle.split(":")[0]}: {t.title.substring(0, 80)}...
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Note Editor & File Uploader Form */}
        {topicId && selectedTopic && (
          <form onSubmit={handleSubmit} className="space-y-6 border-t border-white/10 pt-6 animate-fade-in">
            {/* Note status indicator */}
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
              <div className="flex items-center gap-3">
                {currentNotePath ? (
                  <>
                    <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Active Note Registered</p>
                      <p className="text-[11px] text-gray-400 font-mono mt-0.5">{currentNotePath}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-2 bg-rose-500/10 rounded-lg text-rose-400">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">No Note Active</p>
                      <p className="text-[11px] text-rose-400/80 mt-0.5">Syllabus audit reports this note as missing.</p>
                    </div>
                  </>
                )}
              </div>
              {currentNotePath && (
                <a
                  href={`/${currentNotePath}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-xs font-semibold transition flex items-center gap-1.5"
                >
                  <LinkIcon className="w-3.5 h-3.5" /> View File
                </a>
              )}
            </div>

            {/* Selector for upload vs edit */}
            <div className="flex bg-white/5 p-1 rounded-xl border border-white/5 w-fit">
              <button
                type="button"
                onClick={() => setUseUpload(false)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${!useUpload ? "bg-white text-black shadow-md" : "text-gray-400 hover:text-white"}`}
              >
                Markdown Editor
              </button>
              <button
                type="button"
                onClick={() => setUseUpload(true)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${useUpload ? "bg-white text-black shadow-md" : "text-gray-400 hover:text-white"}`}
              >
                Upload File (.md / .pdf)
              </button>
            </div>

            {/* Input fields */}
            {!useUpload ? (
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Markdown Notes Content</label>
                <textarea
                  name="noteText"
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="# Write your notes here using Markdown..."
                  rows={12}
                  className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition text-sm font-mono leading-relaxed"
                />
              </div>
            ) : (
              <div className="p-8 border border-dashed border-white/10 rounded-2xl bg-[#121214] text-center">
                <Upload className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <p className="text-sm font-bold text-gray-200">Select note file</p>
                <p className="text-xs text-gray-500 mt-1 mb-4">Supported formats: Markdown (.md), PDF (.pdf)</p>
                <input
                  type="file"
                  name="noteFile"
                  accept=".md,.pdf"
                  className="mx-auto block text-xs text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-white/10 file:text-white hover:file:bg-white/20"
                />
              </div>
            )}

            {feedback && (
              <div className={`p-4 rounded-xl text-sm border ${feedback.type === "success" ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400" : "bg-rose-500/10 border-rose-500/25 text-rose-400"}`}>
                {feedback.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition duration-200 active:scale-[0.99] text-sm cursor-pointer shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isPending ? "Syncing notes library..." : "Save and Map Note"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
