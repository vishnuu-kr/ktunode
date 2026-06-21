"use client";

import React, { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  Plus,
  Trash2,
  ChevronDown,
  ChevronRight,
  BookOpen,
  FileText,
  Save,
  X,
  Edit,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { saveSubjectData } from "@/app/admin/actions";

interface Topic {
  id: string;
  title: string;
  content: string;
  pyqs: string[];
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
  branchId: string;
  semester: number;
  modules: Module[];
}

interface SubjectManagerProps {
  allowedBranches: string[];
  visibleSemesters: number[];
  initialSubjects: Subject[];
  currentBranch: string;
  currentSem: number;
}

function generateId(): string {
  return (
    Date.now().toString(36) +
    Math.random().toString(36).substring(2, 10)
  );
}

export default function SubjectManager({
  allowedBranches,
  visibleSemesters: _visibleSemesters,
  initialSubjects,
  currentBranch,
  currentSem,
}: SubjectManagerProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [branch, setBranch] = useState(currentBranch || "cs");
  const [sem, setSem] = useState(currentSem || 4);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [expandedSubjects, setExpandedSubjects] = useState<
    Record<string, boolean>
  >({});
  const [expandedModules, setExpandedModules] = useState<
    Record<string, boolean>
  >({});
  const [editingSubject, setEditingSubject] = useState<string | null>(null);
  const [editSubjectName, setEditSubjectName] = useState("");
  const [editSubjectCode, setEditSubjectCode] = useState("");
  const [showAddSubject, setShowAddSubject] = useState(false);
  const [newSubjectName, setNewSubjectName] = useState("");
  const [newSubjectCode, setNewSubjectCode] = useState("");
  const [newModuleName, setNewModuleName] = useState("");
  const [newTopicTitle, setNewTopicTitle] = useState("");
  const [addingModuleTo, setAddingModuleTo] = useState<string | null>(null);
  const [addingTopicTo, setAddingTopicTo] = useState<string | null>(null);

  useEffect(() => {
    setSubjects(initialSubjects || []);
  }, [initialSubjects]);

  const toggleSubject = (id: string) => {
    setExpandedSubjects((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleModule = (id: string) => {
    setExpandedModules((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleBranchChange = (newBranch: string) => {
    setBranch(newBranch);
    setFeedback(null);
    setExpandedSubjects({});
    setExpandedModules({});
    setEditingSubject(null);
    setShowAddSubject(false);
    setAddingModuleTo(null);
    setAddingTopicTo(null);
    router.push(`/admin?branch=${newBranch}&sem=${sem}&tab=subjects`);
  };

  const handleSemChange = (newSem: number) => {
    setSem(newSem);
    setFeedback(null);
    setExpandedSubjects({});
    setExpandedModules({});
    setEditingSubject(null);
    setShowAddSubject(false);
    setAddingModuleTo(null);
    setAddingTopicTo(null);
    router.push(`/admin?branch=${branch}&sem=${newSem}&tab=subjects`);
  };

  const startEditSubject = (sub: Subject) => {
    setEditingSubject(sub.id);
    setEditSubjectName(sub.name);
    setEditSubjectCode(sub.code);
  };

  const saveEditSubject = (id: string) => {
    setSubjects((prev) =>
      prev.map((sub) =>
        sub.id === id
          ? { ...sub, name: editSubjectName, code: editSubjectCode }
          : sub
      )
    );
    setEditingSubject(null);
  };

  const handleAddSubject = () => {
    if (!newSubjectName.trim() || !newSubjectCode.trim()) return;
    const newSubject: Subject = {
      id: `${branch}-${sem}-${generateId()}`,
      code: newSubjectCode.trim(),
      name: newSubjectName.trim().toUpperCase(),
      branchId: branch,
      semester: sem,
      modules: [],
    };
    setSubjects([...subjects, newSubject]);
    setNewSubjectName("");
    setNewSubjectCode("");
    setShowAddSubject(false);
  };

  const handleDeleteSubject = (id: string) => {
    setSubjects((prev) => prev.filter((sub) => sub.id !== id));
    setExpandedSubjects((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    setEditingSubject(null);
  };

  const handleAddModule = (subjectId: string) => {
    if (!newModuleName.trim()) return;
    const newModule: Module = {
      id: generateId(),
      title: newModuleName.trim(),
      topics: [],
    };
    setSubjects((prev) =>
      prev.map((sub) =>
        sub.id === subjectId
          ? { ...sub, modules: [...sub.modules, newModule] }
          : sub
      )
    );
    setNewModuleName("");
    setAddingModuleTo(null);
    setExpandedModules((prev) => ({ ...prev, [newModule.id]: true }));
  };

  const handleDeleteModule = (subjectId: string, moduleId: string) => {
    setSubjects((prev) =>
      prev.map((sub) =>
        sub.id === subjectId
          ? { ...sub, modules: sub.modules.filter((m) => m.id !== moduleId) }
          : sub
      )
    );
    setExpandedModules((prev) => {
      const next = { ...prev };
      delete next[moduleId];
      return next;
    });
  };

  const handleAddTopic = (subjectId: string, moduleId: string) => {
    if (!newTopicTitle.trim()) return;
    const newTopic: Topic = {
      id: generateId(),
      title: newTopicTitle.trim(),
      content: "",
      pyqs: [],
    };
    setSubjects((prev) =>
      prev.map((sub) =>
        sub.id === subjectId
          ? {
              ...sub,
              modules: sub.modules.map((m) =>
                m.id === moduleId
                  ? { ...m, topics: [...m.topics, newTopic] }
                  : m
              ),
            }
          : sub
      )
    );
    setNewTopicTitle("");
    setAddingTopicTo(null);
  };

  const handleDeleteTopic = (
    subjectId: string,
    moduleId: string,
    topicId: string
  ) => {
    setSubjects((prev) =>
      prev.map((sub) =>
        sub.id === subjectId
          ? {
              ...sub,
              modules: sub.modules.map((m) =>
                m.id === moduleId
                  ? { ...m, topics: m.topics.filter((t) => t.id !== topicId) }
                  : m
              ),
            }
          : sub
      )
    );
  };

  const handleSave = () => {
    setFeedback(null);
    startTransition(async () => {
      try {
        const res = await saveSubjectData(branch, sem, subjects);
        if (res.success) {
          setFeedback({
            type: "success",
            message: `Subjects for ${branch.toUpperCase()} S${sem} saved successfully!`,
          });
          router.refresh();
        } else {
          setFeedback({
            type: "error",
            message: res.error || "Failed to save subjects.",
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
      id="subject-manager"
      className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-200">
              Subject & Module Manager
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Manage subjects, modules, and syllabus topics for each branch &
              semester.
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

      {/* Subject List */}
      <div className="space-y-3">
        {subjects.length === 0 ? (
          <div className="p-8 text-center bg-white/5 rounded-2xl border border-white/5 text-gray-400 text-xs">
            <p className="font-semibold text-sm">
              No subjects found for {branch.toUpperCase()} S{sem}.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Add a subject to get started.
            </p>
          </div>
        ) : (
          <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
            {subjects.map((sub) => {
              const isExpanded = !!expandedSubjects[sub.id];
              const totalModules = sub.modules?.length || 0;
              const totalTopics =
                sub.modules?.reduce(
                  (sum, m) => sum + (m.topics?.length || 0),
                  0
                ) || 0;

              return (
                <div
                  key={sub.id}
                  className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.01] hover:bg-white/[0.02] transition"
                >
                  {/* Subject Header */}
                  <div className="flex items-center justify-between p-4">
                    <button
                      type="button"
                      onClick={() => toggleSubject(sub.id)}
                      className="flex items-center gap-3 min-w-0 flex-1 text-left cursor-pointer"
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                      <div className="min-w-0">
                        {editingSubject === sub.id ? (
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={editSubjectCode}
                              onChange={(e) =>
                                setEditSubjectCode(e.target.value)
                              }
                              className="bg-[#121214] border border-white/10 rounded-lg px-2 py-1 text-blue-400 font-mono font-bold text-xs w-28 focus:outline-none focus:border-white/30"
                              placeholder="Code"
                              onClick={(e) => e.stopPropagation()}
                            />
                            <input
                              type="text"
                              value={editSubjectName}
                              onChange={(e) =>
                                setEditSubjectName(e.target.value)
                              }
                              className="bg-[#121214] border border-white/10 rounded-lg px-2 py-1 text-white font-bold text-sm flex-1 min-w-0 focus:outline-none focus:border-white/30"
                              placeholder="Subject Name"
                              onClick={(e) => e.stopPropagation()}
                            />
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                saveEditSubject(sub.id);
                              }}
                              className="p-1.5 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-lg transition-colors cursor-pointer"
                              title="Save"
                            >
                              <CheckCircle2 className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setEditingSubject(null);
                              }}
                              className="p-1.5 text-gray-400 hover:text-gray-300 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                              title="Cancel"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <>
                            <p className="text-xs text-blue-400 font-mono font-bold uppercase">
                              {sub.code}
                            </p>
                            <h3 className="text-sm font-bold text-white leading-snug truncate pr-3">
                              {sub.name}
                            </h3>
                          </>
                        )}
                      </div>
                    </button>

                    <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                      <span className="text-[10px] text-gray-500 font-mono">
                        {totalModules} modules &middot; {totalTopics} topics
                      </span>
                      {editingSubject !== sub.id && (
                        <button
                          type="button"
                          onClick={() => startEditSubject(sub)}
                          className="p-1.5 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors cursor-pointer"
                          title="Edit subject"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => handleDeleteSubject(sub.id)}
                        className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer"
                        title="Delete subject"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Modules & Topics */}
                  {isExpanded && (
                    <div className="p-4 bg-black/20 border-t border-white/5 space-y-3">
                      {sub.modules && sub.modules.length > 0 ? (
                        sub.modules.map((mod) => {
                          const isModExpanded = !!expandedModules[mod.id];
                          return (
                            <div
                              key={mod.id}
                              className="border border-white/5 rounded-xl bg-white/[0.01]"
                            >
                              <button
                                type="button"
                                onClick={() => toggleModule(mod.id)}
                                className="w-full flex items-center justify-between p-3 text-left cursor-pointer text-xs font-bold text-gray-300"
                              >
                                <span className="truncate pr-4 flex items-center gap-2">
                                  <FileText className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
                                  {mod.title}
                                </span>
                                <span className="text-gray-500 font-normal flex items-center gap-2 flex-shrink-0">
                                  {mod.topics?.length || 0} topics
                                  {isModExpanded ? (
                                    <ChevronDown className="w-3.5 h-3.5" />
                                  ) : (
                                    <ChevronRight className="w-3.5 h-3.5" />
                                  )}
                                </span>
                              </button>

                              {isModExpanded && (
                                <div className="p-3 border-t border-white/5 space-y-2 bg-black/10">
                                  {mod.topics && mod.topics.length > 0 ? (
                                    mod.topics.map((topic) => (
                                      <div
                                        key={topic.id}
                                        className="flex justify-between items-center p-2.5 bg-white/5 rounded-lg border border-white/5 text-xs gap-3"
                                      >
                                        <div className="min-w-0 flex-1">
                                          <p className="font-semibold text-gray-200 leading-relaxed pr-2">
                                            {topic.title}
                                          </p>
                                          <p className="text-[10px] text-gray-500 font-mono mt-0.5">
                                            ID: {topic.id}
                                          </p>
                                        </div>
                                        <button
                                          type="button"
                                          onClick={() =>
                                            handleDeleteTopic(
                                              sub.id,
                                              mod.id,
                                              topic.id
                                            )
                                          }
                                          className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer flex-shrink-0"
                                          title="Delete topic"
                                        >
                                          <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                      </div>
                                    ))
                                  ) : (
                                    <p className="text-[10px] text-gray-500 text-center py-2">
                                      No topics yet.
                                    </p>
                                  )}

                                  {/* Add Topic */}
                                  {addingTopicTo === mod.id ? (
                                    <div className="flex items-center gap-2 mt-2">
                                      <input
                                        type="text"
                                        value={newTopicTitle}
                                        onChange={(e) =>
                                          setNewTopicTitle(e.target.value)
                                        }
                                        onKeyDown={(e) => {
                                          if (e.key === "Enter")
                                            handleAddTopic(sub.id, mod.id);
                                          if (e.key === "Escape") {
                                            setAddingTopicTo(null);
                                            setNewTopicTitle("");
                                          }
                                        }}
                                        placeholder="Topic title..."
                                        autoFocus
                                        className="flex-1 bg-[#121214] border border-white/10 rounded-lg px-3 py-1.5 text-white text-xs focus:outline-none focus:border-blue-500/50"
                                      />
                                      <button
                                        type="button"
                                        onClick={() =>
                                          handleAddTopic(sub.id, mod.id)
                                        }
                                        className="p-1.5 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-lg transition-colors cursor-pointer"
                                        title="Confirm"
                                      >
                                        <CheckCircle2 className="w-4 h-4" />
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setAddingTopicTo(null);
                                          setNewTopicTitle("");
                                        }}
                                        className="p-1.5 text-gray-400 hover:text-gray-300 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                                        title="Cancel"
                                      >
                                        <X className="w-4 h-4" />
                                      </button>
                                    </div>
                                  ) : (
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setAddingTopicTo(mod.id);
                                        setNewTopicTitle("");
                                        setExpandedModules((prev) => ({
                                          ...prev,
                                          [mod.id]: true,
                                        }));
                                      }}
                                      className="w-full py-1.5 text-[10px] font-bold text-gray-400 hover:text-blue-400 hover:bg-blue-500/5 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1 mt-1 border border-dashed border-white/5 hover:border-blue-500/20"
                                    >
                                      <Plus className="w-3 h-3" /> Add Topic
                                    </button>
                                  )}

                                  {/* Delete Module */}
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleDeleteModule(sub.id, mod.id)
                                    }
                                    className="w-full py-1.5 text-[10px] font-bold text-red-400/60 hover:text-red-400 hover:bg-red-500/5 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1 border border-dashed border-white/5 hover:border-red-500/20"
                                  >
                                    <Trash2 className="w-3 h-3" /> Delete
                                    Module
                                  </button>
                                </div>
                              )}
                            </div>
                          );
                        })
                      ) : (
                        <p className="text-[10px] text-gray-500 text-center py-2">
                          No modules yet. Add one below.
                        </p>
                      )}

                      {/* Add Module */}
                      {addingModuleTo === sub.id ? (
                        <div className="flex items-center gap-2 mt-2">
                          <input
                            type="text"
                            value={newModuleName}
                            onChange={(e) => setNewModuleName(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") handleAddModule(sub.id);
                              if (e.key === "Escape") {
                                setAddingModuleTo(null);
                                setNewModuleName("");
                              }
                            }}
                            placeholder="Module title (e.g. Module 1: Introduction)..."
                            autoFocus
                            className="flex-1 bg-[#121214] border border-white/10 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-blue-500/50"
                          />
                          <button
                            type="button"
                            onClick={() => handleAddModule(sub.id)}
                            className="p-2 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-lg transition-colors cursor-pointer"
                            title="Confirm"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setAddingModuleTo(null);
                              setNewModuleName("");
                            }}
                            className="p-2 text-gray-400 hover:text-gray-300 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                            title="Cancel"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setAddingModuleTo(sub.id);
                            setNewModuleName("");
                            setExpandedSubjects((prev) => ({
                              ...prev,
                              [sub.id]: true,
                            }));
                          }}
                          className="w-full py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98]"
                        >
                          <Plus className="w-4 h-4" /> Add Module
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Add Subject */}
      <div className="mt-4">
        {showAddSubject ? (
          <div className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">
                New Subject
              </span>
              <button
                type="button"
                onClick={() => {
                  setShowAddSubject(false);
                  setNewSubjectName("");
                  setNewSubjectCode("");
                }}
                className="p-1 text-gray-400 hover:text-gray-300 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[10px] font-semibold text-gray-400 mb-1 uppercase">
                  Subject Code
                </label>
                <input
                  type="text"
                  value={newSubjectCode}
                  onChange={(e) => setNewSubjectCode(e.target.value)}
                  placeholder="e.g. PECST495"
                  className="w-full bg-[#121214] border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none text-xs focus:border-white/20"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[10px] font-semibold text-gray-400 mb-1 uppercase">
                  Subject Name
                </label>
                <input
                  type="text"
                  value={newSubjectName}
                  onChange={(e) => setNewSubjectName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleAddSubject();
                  }}
                  placeholder="e.g. Advanced Data Structures"
                  className="w-full bg-[#121214] border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none text-xs focus:border-white/20"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={handleAddSubject}
              disabled={!newSubjectName.trim() || !newSubjectCode.trim()}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 active:scale-[0.98]"
            >
              <Plus className="w-4 h-4" /> Add Subject
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShowAddSubject(true)}
            className="w-full py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98]"
          >
            <Plus className="w-4 h-4" /> Add Subject
          </button>
        )}
      </div>

      {/* Save Button */}
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button
          type="button"
          onClick={handleSave}
          disabled={isPending}
          className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 active:scale-[0.98] shadow-md shadow-blue-950/20"
        >
          <Save className="w-4 h-4" />{" "}
          {isPending ? "Saving subjects..." : "Save All Subjects"}
        </button>
      </div>

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
