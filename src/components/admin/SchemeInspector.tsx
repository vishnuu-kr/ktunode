"use client";

import React, { useState } from "react";
import { BookOpen, Search, ChevronRight, ChevronDown, CheckCircle, AlertCircle } from "lucide-react";

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

interface SchemeInspectorProps {
  subjects: Subject[];
  topicPathMap: Record<string, string>;
}

export default function SchemeInspector({
  subjects,
  topicPathMap
}: SchemeInspectorProps) {
  const [search, setSearch] = useState("");
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});

  const toggleSubject = (subId: string) => {
    setExpandedSubject(expandedSubject === subId ? null : subId);
  };

  const toggleModule = (modId: string) => {
    setExpandedModules(prev => ({ ...prev, [modId]: !prev[modId] }));
  };

  // Filter subjects based on search text
  const filteredSubjects = subjects.filter(sub => {
    const q = search.toLowerCase().trim();
    if (!q) return true;
    return (
      sub.name.toLowerCase().includes(q) ||
      sub.code.toLowerCase().includes(q) ||
      sub.modules.some(m => 
        m.title.toLowerCase().includes(q) ||
        m.topics.some(t => t.title.toLowerCase().includes(q))
      )
    );
  });

  return (
    <section id="scheme-inspector" className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-200">Syllabus Scheme Inspector</h2>
            <p className="text-xs text-gray-400 mt-0.5">Explore courses, modules, and granular syllabus topic details.</p>
          </div>
        </div>

        {/* Search input */}
        <div className="relative max-w-xs w-full">
          <input
            type="text"
            placeholder="Search syllabus..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#121214] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-white focus:outline-none focus:border-white/30 text-xs transition"
          />
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="space-y-3">
        {filteredSubjects.length === 0 ? (
          <div className="p-8 text-center bg-white/5 rounded-2xl border border-white/5 text-gray-400 text-sm">
            No subjects match your query. Select a branch/semester above or modify search.
          </div>
        ) : (
          filteredSubjects.map(sub => {
            const isSubExpanded = expandedSubject === sub.id;
            
            // Calculate notes completion stats for this subject
            const subjectTopics = sub.modules?.flatMap(m => m.topics) || [];
            const coveredCount = subjectTopics.filter(t => !!topicPathMap[t.id]).length;
            const totalCount = subjectTopics.length;
            const coveragePercent = totalCount > 0 ? Math.round((coveredCount / totalCount) * 100) : 0;

            return (
              <div key={sub.id} className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.01] hover:bg-white/[0.02] transition">
                {/* Subject Header */}
                <button
                  type="button"
                  onClick={() => toggleSubject(sub.id)}
                  className="w-full flex items-center justify-between p-4 text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    {isSubExpanded ? <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" /> : <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                    <div className="min-w-0">
                      <p className="text-xs text-blue-400 font-mono font-bold uppercase">{sub.code}</p>
                      <h3 className="text-sm font-bold text-white leading-snug truncate pr-3">{sub.name}</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    {/* Stats Indicator */}
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-bold text-gray-400">NOTES COVERAGE</span>
                      <span className={`text-xs font-black ${coveragePercent === 100 ? "text-emerald-400" : coveragePercent > 50 ? "text-blue-400" : "text-amber-400"}`}>
                        {coveredCount}/{totalCount} ({coveragePercent}%)
                      </span>
                    </div>
                  </div>
                </button>

                {/* Modules & Topics */}
                {isSubExpanded && sub.modules && (
                  <div className="p-4 bg-black/20 border-t border-white/5 space-y-3">
                    {sub.modules.map(mod => {
                      const isModExpanded = !!expandedModules[mod.id];
                      return (
                        <div key={mod.id} className="border border-white/5 rounded-xl bg-white/[0.01]">
                          <button
                            type="button"
                            onClick={() => toggleModule(mod.id)}
                            className="w-full flex items-center justify-between p-3 text-left cursor-pointer text-xs font-bold text-gray-300"
                          >
                            <span className="truncate pr-4">{mod.title}</span>
                            <span className="text-gray-500 font-normal">
                              {mod.topics?.length || 0} topics {isModExpanded ? "▲" : "▼"}
                            </span>
                          </button>

                          {isModExpanded && mod.topics && (
                            <div className="p-3 border-t border-white/5 space-y-2 bg-black/10">
                              {mod.topics.map(topic => {
                                const notePath = topicPathMap[topic.id];
                                return (
                                  <div key={topic.id} className="flex justify-between items-center p-2.5 bg-white/5 rounded-lg border border-white/5 text-xs gap-3">
                                    <div className="min-w-0 flex-1">
                                      <p className="font-semibold text-gray-200 leading-relaxed pr-2">{topic.title}</p>
                                      <p className="text-[10px] text-gray-500 font-mono mt-0.5">ID: {topic.id}</p>
                                    </div>
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                      {notePath ? (
                                        <div className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded-full font-bold">
                                          <CheckCircle className="w-3.5 h-3.5" /> Note Linked
                                        </div>
                                      ) : (
                                        <div className="flex items-center gap-1 text-[10px] text-amber-400 bg-amber-500/10 border border-amber-500/25 px-2 py-0.5 rounded-full font-bold">
                                          <AlertCircle className="w-3.5 h-3.5" /> Missing
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
