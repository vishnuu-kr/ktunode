"use client";

import React, { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  FileText,
  Plus,
  Trash2,
  Save,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Edit,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { saveSubjectData } from "@/app/admin/actions";

interface PYQ {
  id: string;
  year: string;
  question: string;
  marks: number;
}

interface Topic {
  id: string;
  title: string;
  pyqs: PYQ[];
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

interface PYQManagerProps {
  allowedBranches: string[];
  visibleSemesters: number[];
  initialSubjects: Subject[];
  currentBranch: string;
  currentSem: number;
}

export default function PYQManager({
  allowedBranches,
  visibleSemesters,
  initialSubjects,
  currentBranch,
  currentSem,
}: PYQManagerProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [branch, setBranch] = useState(currentBranch || "cs");
  const [sem, setSem] = useState(currentSem || 4);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>("");
  const [expandedModules, setExpandedModules] = useState<
    Record<string, boolean>
  >({});
  const [expandedTopics, setExpandedTopics] = useState<
    Record<string, boolean>
  >({});
  const [editingPYQ, setEditingPYQ] = useState<string | null>(null);
  const [editPYQ, setEditPYQ] = useState({ year: "", question: "", marks: 0 });
  const [addingPYQTo, setAddingPYQTo] = useState<string | null>(null);
  const [newPYQ, setNewPYQ] = useState({ year: "", question: "", marks: 0 });

  useEffect(() => {
    setSubjects(initialSubjects || []);
  }, [initialSubjects]);

  useEffect(() => {
    if (subjects.length > 0 && !subjects.find((s) => s.id === selectedSubjectId)) {
      setSelectedSubjectId(subjects[0].id);
    }
  }, [subjects, selectedSubjectId]);

  const selectedSubject = subjects.find((s) => s.id === selectedSubjectId) || null;

  const toggleModule = (id: string) => {
    setExpandedModules((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleTopic = (id: string) => {
    setExpandedTopics((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleBranchChange = (newBranch: string) => {
    setBranch(newBranch);
    setFeedback(null);
    setExpandedModules({});
    setExpandedTopics({});
    setSelectedSubjectId("");
    setEditingPYQ(null);
    setAddingPYQTo(null);
    router.push(`/admin?branch=${newBranch}&sem=${sem}&tab=pyq`);
  };

  const handleSemChange = (newSem: number) => {
    setSem(newSem);
    setFeedback(null);
    setExpandedModules({});
    setExpandedTopics({});
    setSelectedSubjectId("");
    setEditingPYQ(null);
    setAddingPYQTo(null);
    router.push(`/admin?branch=${branch}&sem=${newSem}&tab=pyq`);
  };

  const getNextPYQNumber = (topicId: string, subjectModules: Module[]): number => {
    let max = 0;
    for (const mod of subjectModules) {
      for (const topic of mod.topics) {
        if (topic.id === topicId && topic.pyqs) {
          for (const pyq of topic.pyqs) {
            const match = pyq.id.match(/-q-(\d+)$/);
            if (match) {
              const num = parseInt(match[1], 10);
              if (num > max) max = num;
            }
          }
        }
      }
    }
    return max + 1;
  };

  const updateSubjectPYQs = (
    subjectsToUpdate: Subject[],
    subjectId: string,
    moduleId: string,
    topicId: string,
    updater: (pyqs: PYQ[]) => PYQ[]
  ): Subject[] => {
    return subjectsToUpdate.map((sub) => {
      if (sub.id !== subjectId) return sub;
      return {
        ...sub,
        modules: sub.modules.map((mod) => {
          if (mod.id !== moduleId) return mod;
          return {
            ...mod,
            topics: mod.topics.map((topic) => {
              if (topic.id !== topicId) return topic;
              return { ...topic, pyqs: updater(topic.pyqs || []) };
            }),
          };
        }),
      };
    });
  };

  const handleAddPYQ = (subjectId: string, moduleId: string, topicId: string) => {
    if (!newPYQ.year.trim() || !newPYQ.question.trim() || newPYQ.marks <= 0) return;
    const nextNum = getNextPYQNumber(topicId, selectedSubject?.modules || []);
    const pyq: PYQ = {
      id: `${topicId}-q-${nextNum}`,
      year: newPYQ.year.trim(),
      question: newPYQ.question.trim(),
      marks: newPYQ.marks,
    };
    setSubjects((prev) =>
      updateSubjectPYQs(prev, subjectId, moduleId, topicId, (pyqs) => [...pyqs, pyq])
    );
    setNewPYQ({ year: "", question: "", marks: 0 });
    setAddingPYQTo(null);
  };

  const handleDeletePYQ = (
    subjectId: string,
    moduleId: string,
    topicId: string,
    pyqId: string
  ) => {
    setSubjects((prev) =>
      updateSubjectPYQs(prev, subjectId, moduleId, topicId, (pyqs) =>
        pyqs.filter((p) => p.id !== pyqId)
      )
    );
  };

  const startEditPYQ = (pyq: PYQ) => {
    setEditingPYQ(pyq.id);
    setEditPYQ({ year: pyq.year, question: pyq.question, marks: pyq.marks });
  };

  const saveEditPYQ = (
    subjectId: string,
    moduleId: string,
    topicId: string,
    pyqId: string
  ) => {
    if (!editPYQ.year.trim() || !editPYQ.question.trim() || editPYQ.marks <= 0) return;
    setSubjects((prev) =>
      updateSubjectPYQs(prev, subjectId, moduleId, topicId, (pyqs) =>
        pyqs.map((p) =>
          p.id === pyqId
            ? { ...p, year: editPYQ.year.trim(), question: editPYQ.question.trim(), marks: editPYQ.marks }
            : p
        )
      )
    );
    setEditingPYQ(null);
  };

  const handleSave = () => {
    setFeedback(null);
    startTransition(async () => {
      try {
        const res = await saveSubjectData(branch, sem, subjects);
        if (res.success) {
          setFeedback({
            type: "success",
            message: `PYQs for ${branch.toUpperCase()} S${sem} saved successfully!`,
          });
          router.refresh();
        } else {
          setFeedback({
            type: "error",
            message: res.error || "Failed to save PYQs.",
          });
        }
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "An unexpected error occurred.";
        setFeedback({ type: "error", message });
      }
    });
  };

  return (
    <section
      id="pyq-manager"
      className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-200">PYQ Manager</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Manage Previous Year Questions for each subject &amp; topic.
            </p>
          </div>
        </div>
      </div>

      {/* Branch & Semester Selectors */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
            Branch
          </label>
          <select
            value={branch}
            onChange={(e) => handleBranchChange(e.target.value)}
            className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-white/30 transition text-xs font-semibold"
          >
            {allowedBranches.map((b) => (
              <option key={b} value={b}>
                {b.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
            Semester
          </label>
          <select
            value={sem}
            onChange={(e) => handleSemChange(Number(e.target.value))}
            className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-white/30 transition text-xs font-semibold"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
              <option key={s} value={s}>
                Semester {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Subject Selector */}
      {subjects.length === 0 ? (
        <div className="p-8 text-center bg-white/5 rounded-2xl border border-white/5 text-gray-400 text-xs">
          <p className="font-semibold text-sm">
            No subjects found for {branch.toUpperCase()} S{sem}.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Add subjects first using the Subject Manager.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
              Subject
            </label>
            <select
              value={selectedSubjectId}
              onChange={(e) => {
                setSelectedSubjectId(e.target.value);
                setExpandedModules({});
                setExpandedTopics({});
                setEditingPYQ(null);
                setAddingPYQTo(null);
              }}
              className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-white/30 transition text-xs font-semibold"
            >
              <option value="">Select a subject...</option>
              {subjects.map((sub) => (
                <option key={sub.id} value={sub.id}>
                  {sub.code} &mdash; {sub.name}
                </option>
              ))}
            </select>
          </div>

          {/* Modules & Topics with PYQs */}
          {selectedSubject && (
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
              {selectedSubject.modules.length === 0 ? (
                <div className="p-6 text-center bg-white/5 rounded-2xl border border-white/5 text-gray-400 text-xs">
                  <p className="font-semibold text-sm">No modules found.</p>
                </div>
              ) : (
                selectedSubject.modules.map((mod) => {
                  const isModExpanded = !!expandedModules[mod.id];
                  const totalPYQs = mod.topics.reduce(
                    (sum, t) => sum + (t.pyqs?.length || 0),
                    0
                  );
                  return (
                    <div
                      key={mod.id}
                      className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.01]"
                    >
                      <button
                        type="button"
                        onClick={() => toggleModule(mod.id)}
                        className="w-full flex items-center justify-between p-4 text-left cursor-pointer text-xs font-bold text-gray-300"
                      >
                        <span className="flex items-center gap-2 truncate pr-4">
                          <FileText className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
                          {mod.title}
                        </span>
                        <span className="text-gray-500 font-normal flex items-center gap-2 flex-shrink-0">
                          {mod.topics.length} topics &middot; {totalPYQs} PYQs
                          {isModExpanded ? (
                            <ChevronDown className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5" />
                          )}
                        </span>
                      </button>

                      {isModExpanded && (
                        <div className="p-3 border-t border-white/5 space-y-2 bg-black/10">
                          {mod.topics.length === 0 ? (
                            <p className="text-[10px] text-gray-500 text-center py-2">
                              No topics in this module.
                            </p>
                          ) : (
                            mod.topics.map((topic) => {
                              const isTopicExpanded = !!expandedTopics[topic.id];
                              const pyqCount = topic.pyqs?.length || 0;
                              return (
                                <div
                                  key={topic.id}
                                  className="border border-white/5 rounded-xl bg-white/[0.01]"
                                >
                                  <button
                                    type="button"
                                    onClick={() => toggleTopic(topic.id)}
                                    className="w-full flex items-center justify-between p-3 text-left cursor-pointer text-xs font-bold text-gray-300"
                                  >
                                    <span className="flex items-center gap-2 truncate pr-4">
                                      {isTopicExpanded ? (
                                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                                      ) : (
                                        <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                                      )}
                                      {topic.title}
                                    </span>
                                    <span className="text-gray-500 font-normal flex-shrink-0 ml-2">
                                      {pyqCount} PYQ{pyqCount !== 1 ? "s" : ""}
                                    </span>
                                  </button>

                                  {isTopicExpanded && (
                                    <div className="p-3 border-t border-white/5 space-y-2 bg-black/10">
                                      {/* Existing PYQs */}
                                      {topic.pyqs && topic.pyqs.length > 0 ? (
                                        topic.pyqs.map((pyq) => (
                                          <div
                                            key={pyq.id}
                                            className="p-3 bg-white/5 rounded-xl border border-white/5"
                                          >
                                            {editingPYQ === pyq.id ? (
                                              <div className="space-y-2">
                                                <div className="flex gap-2">
                                                  <input
                                                    type="text"
                                                    value={editPYQ.year}
                                                    onChange={(e) =>
                                                      setEditPYQ((p) => ({
                                                        ...p,
                                                        year: e.target.value,
                                                      }))
                                                    }
                                                    placeholder="Year"
                                                    className="w-20 bg-[#121214] border border-white/10 rounded-lg px-2 py-1 text-white text-xs focus:outline-none focus:border-blue-500/50"
                                                  />
                                                  <input
                                                    type="number"
                                                    value={editPYQ.marks || ""}
                                                    onChange={(e) =>
                                                      setEditPYQ((p) => ({
                                                        ...p,
                                                        marks: parseInt(e.target.value, 10) || 0,
                                                      }))
                                                    }
                                                    placeholder="Marks"
                                                    min={1}
                                                    className="w-20 bg-[#121214] border border-white/10 rounded-lg px-2 py-1 text-white text-xs focus:outline-none focus:border-blue-500/50"
                                                  />
                                                </div>
                                                <textarea
                                                  value={editPYQ.question}
                                                  onChange={(e) =>
                                                    setEditPYQ((p) => ({
                                                      ...p,
                                                      question: e.target.value,
                                                    }))
                                                  }
                                                  placeholder="Question text..."
                                                  rows={3}
                                                  className="w-full bg-[#121214] border border-white/10 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-blue-500/50 resize-none"
                                                />
                                                <div className="flex gap-2 justify-end">
                                                  <button
                                                    type="button"
                                                    onClick={() =>
                                                      saveEditPYQ(
                                                        selectedSubject.id,
                                                        mod.id,
                                                        topic.id,
                                                        pyq.id
                                                      )
                                                    }
                                                    className="px-3 py-1 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-lg transition-colors text-[10px] font-bold cursor-pointer"
                                                  >
                                                    <CheckCircle2 className="w-3.5 h-3.5 inline mr-1" />
                                                    Save
                                                  </button>
                                                  <button
                                                    type="button"
                                                    onClick={() => setEditingPYQ(null)}
                                                    className="px-3 py-1 text-gray-400 hover:text-gray-300 hover:bg-white/10 rounded-lg transition-colors text-[10px] font-bold cursor-pointer"
                                                  >
                                                    Cancel
                                                  </button>
                                                </div>
                                              </div>
                                            ) : (
                                              <>
                                                <div className="flex items-start justify-between gap-2">
                                                  <div className="min-w-0 flex-1">
                                                    <p className="text-[10px] text-gray-500 font-mono mb-1">
                                                      {pyq.year} &middot; {pyq.marks} marks &middot; {pyq.id}
                                                    </p>
                                                    <p className="text-xs text-gray-200 leading-relaxed whitespace-pre-wrap">
                                                      {pyq.question}
                                                    </p>
                                                  </div>
                                                  <div className="flex items-center gap-1 flex-shrink-0">
                                                    <button
                                                      type="button"
                                                      onClick={() => startEditPYQ(pyq)}
                                                      className="p-1.5 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors cursor-pointer"
                                                      title="Edit PYQ"
                                                    >
                                                      <Edit className="w-3.5 h-3.5" />
                                                    </button>
                                                    <button
                                                      type="button"
                                                      onClick={() =>
                                                        handleDeletePYQ(
                                                          selectedSubject.id,
                                                          mod.id,
                                                          topic.id,
                                                          pyq.id
                                                        )
                                                      }
                                                      className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer"
                                                      title="Delete PYQ"
                                                    >
                                                      <Trash2 className="w-3.5 h-3.5" />
                                                    </button>
                                                  </div>
                                                </div>
                                              </>
                                            )}
                                          </div>
                                        ))
                                      ) : (
                                        <p className="text-[10px] text-gray-500 text-center py-2">
                                          No PYQs yet.
                                        </p>
                                      )}

                                      {/* Add PYQ Form */}
                                      {addingPYQTo === topic.id ? (
                                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 border-dashed space-y-2">
                                          <div className="flex gap-2">
                                            <input
                                              type="text"
                                              value={newPYQ.year}
                                              onChange={(e) =>
                                                setNewPYQ((p) => ({
                                                  ...p,
                                                  year: e.target.value,
                                                }))
                                              }
                                              placeholder="Year (e.g. 2024)"
                                              autoFocus
                                              className="w-24 bg-[#121214] border border-white/10 rounded-lg px-2 py-1.5 text-white text-xs focus:outline-none focus:border-blue-500/50"
                                            />
                                            <input
                                              type="number"
                                              value={newPYQ.marks || ""}
                                              onChange={(e) =>
                                                setNewPYQ((p) => ({
                                                  ...p,
                                                  marks: parseInt(e.target.value, 10) || 0,
                                                }))
                                              }
                                              placeholder="Marks"
                                              min={1}
                                              className="w-20 bg-[#121214] border border-white/10 rounded-lg px-2 py-1.5 text-white text-xs focus:outline-none focus:border-blue-500/50"
                                            />
                                          </div>
                                          <textarea
                                            value={newPYQ.question}
                                            onChange={(e) =>
                                              setNewPYQ((p) => ({
                                                ...p,
                                                question: e.target.value,
                                              }))
                                            }
                                            placeholder="Enter the question text..."
                                            rows={3}
                                            className="w-full bg-[#121214] border border-white/10 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-blue-500/50 resize-none"
                                          />
                                          <div className="flex gap-2 justify-end">
                                            <button
                                              type="button"
                                              onClick={() =>
                                                handleAddPYQ(
                                                  selectedSubject.id,
                                                  mod.id,
                                                  topic.id
                                                )
                                              }
                                              disabled={
                                                !newPYQ.year.trim() ||
                                                !newPYQ.question.trim() ||
                                                newPYQ.marks <= 0
                                              }
                                              className="px-3 py-1.5 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-lg transition-colors text-[10px] font-bold cursor-pointer disabled:opacity-40"
                                            >
                                              <Plus className="w-3.5 h-3.5 inline mr-1" />
                                              Add PYQ
                                            </button>
                                            <button
                                              type="button"
                                              onClick={() => {
                                                setAddingPYQTo(null);
                                                setNewPYQ({
                                                  year: "",
                                                  question: "",
                                                  marks: 0,
                                                });
                                              }}
                                              className="px-3 py-1.5 text-gray-400 hover:text-gray-300 hover:bg-white/10 rounded-lg transition-colors text-[10px] font-bold cursor-pointer"
                                            >
                                              Cancel
                                            </button>
                                          </div>
                                        </div>
                                      ) : (
                                        <button
                                          type="button"
                                          onClick={() => {
                                            setAddingPYQTo(topic.id);
                                            setNewPYQ({
                                              year: "",
                                              question: "",
                                              marks: 0,
                                            });
                                          }}
                                          className="w-full py-1.5 text-[10px] font-bold text-gray-400 hover:text-blue-400 hover:bg-blue-500/5 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1 border border-dashed border-white/5 hover:border-blue-500/20"
                                        >
                                          <Plus className="w-3 h-3" /> Add PYQ
                                        </button>
                                      )}
                                    </div>
                                  )}
                                </div>
                              );
                            })
                          )}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* Save Button */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              type="button"
              onClick={handleSave}
              disabled={isPending}
              className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 active:scale-[0.98] shadow-md shadow-blue-950/20"
            >
              <Save className="w-4 h-4" />{" "}
              {isPending ? "Saving PYQs..." : "Save All PYQs"}
            </button>
          </div>
        </>
      )}

      {/* Feedback */}
      {feedback && (
        <div
          className={`p-4 rounded-xl text-sm border mt-3 flex items-center gap-2.5 ${
            feedback.type === "success"
              ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400"
              : "bg-rose-500/10 border-rose-500/25 text-rose-400"
          }`}
        >
          {feedback.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
          )}
          <span>{feedback.message}</span>
        </div>
      )}
    </section>
  );
}
