"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Book, FileText, ArrowRight, CornerDownLeft, Sparkles, HelpCircle } from "lucide-react";
import { Subject, Topic } from "@/lib/mockData";
import { triggerHaptic } from "@/lib/haptic";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  subjects: Subject[];
  onSelectSubject: (subj: Subject) => void;
  onSelectTopic: (subj: Subject, topic: Topic) => void;
}

interface SearchResult {
  type: "subject" | "topic";
  title: string;
  subtitle: string;
  subject: Subject;
  topic?: Topic;
}

export default function CommandPalette({
  isOpen,
  onClose,
  subjects,
  onSelectSubject,
  onSelectTopic,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Global listener for shortcut keys (Ctrl+K, Cmd+K, or Slash outside input)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is writing in another input (unless it's Ctrl+K)
      const isInput = ["INPUT", "TEXTAREA", "SELECT"].includes(
        (e.target as HTMLElement).tagName
      );

      if ((e.key === "k" || e.key === "K") && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        triggerHaptic("medium");
        if (isOpen) onClose();
        else onClose(); // reset state
        // We trigger opening in parent, so we just dispatch custom event or use local state
        window.dispatchEvent(new Event("ktunode-toggle-palette"));
      } else if (e.key === "/" && !isInput) {
        e.preventDefault();
        triggerHaptic("light");
        window.dispatchEvent(new Event("ktunode-toggle-palette"));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Filter subjects and topics dynamically
  useEffect(() => {
    if (!query.trim()) {
      // Default / suggestions
      const defaultSuggestions: SearchResult[] = subjects.slice(0, 3).map(s => ({
        type: "subject",
        title: s.name,
        subtitle: `Course Code: ${s.code || s.id.toUpperCase()}`,
        subject: s
      }));
      setResults(defaultSuggestions);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const matches: SearchResult[] = [];

    subjects.forEach((subj) => {
      // Match subject
      if (
        subj.name.toLowerCase().includes(lowerQuery) ||
        (subj.code && subj.code.toLowerCase().includes(lowerQuery))
      ) {
        matches.push({
          type: "subject",
          title: subj.name,
          subtitle: `Subject (${subj.code || "Core"})`,
          subject: subj,
        });
      }

      // Match topics
      if (subj.modules) {
        subj.modules.forEach((mod) => {
          if (mod.topics) {
            mod.topics.forEach((topic) => {
              if (
                topic.title.toLowerCase().includes(lowerQuery) ||
                (topic.content && topic.content.toLowerCase().includes(lowerQuery))
              ) {
                matches.push({
                  type: "topic",
                  title: topic.title,
                  subtitle: `${subj.name} • Module ${mod.id || mod.title}`,
                  subject: subj,
                  topic: topic,
                });
              }
            });
          }
        });
      }
    });

    setResults(matches.slice(0, 8)); // limit to 8 results for speed/ui
    setSelectedIndex(0);
  }, [query, subjects]);

  // Scroll active item into view
  useEffect(() => {
    if (resultsRef.current && results.length > 0) {
      const container = resultsRef.current;
      const activeEl = container.children[selectedIndex] as HTMLElement;
      if (activeEl) {
        const cTop = container.scrollTop;
        const cBottom = cTop + container.clientHeight;
        const elTop = activeEl.offsetTop;
        const elBottom = elTop + activeEl.offsetHeight;

        if (elTop < cTop) {
          container.scrollTop = elTop;
        } else if (elBottom > cBottom) {
          container.scrollTop = elBottom - container.clientHeight;
        }
      }
    }
  }, [selectedIndex, results]);

  const handleSelect = (result: SearchResult, e?: React.MouseEvent | React.KeyboardEvent) => {
    triggerHaptic("success", e && "clientX" in e ? e : undefined);
    if (result.type === "subject") {
      onSelectSubject(result.subject);
    } else if (result.type === "topic" && result.topic) {
      onSelectTopic(result.subject, result.topic);
    }
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex], e);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-start justify-center pt-[15vh] px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.55 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-md cursor-pointer"
          />

          {/* Dialog Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="w-full max-w-lg bg-white/95 dark:bg-slate-900/95 border border-blue-50 dark:border-slate-800 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col font-sans pointer-events-auto"
          >
            {/* Input Wrapper */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 dark:border-slate-800">
              <Search className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search subjects or syllabus topics... (e.g. calculus, OS)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent border-0 text-sm font-bold text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
              />
              <span className="text-[10px] font-black bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-400 uppercase select-none">
                ESC
              </span>
            </div>

            {/* Results */}
            <div
              ref={resultsRef}
              className="max-h-[320px] overflow-y-auto p-2 space-y-1 scrollbar-thin"
            >
              {results.length > 0 ? (
                results.map((res, index) => {
                  const isSelected = selectedIndex === index;
                  const Icon = res.type === "subject" ? Book : FileText;

                  return (
                    <button
                      key={`${res.type}-${res.title}-${index}`}
                      onClick={(e) => handleSelect(res, e)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-left transition-colors cursor-pointer group ${
                        isSelected
                          ? "bg-blue-500/10 border-blue-500/10 text-blue-600 dark:text-blue-400"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 hover:dark:bg-slate-800/40"
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          isSelected 
                            ? "bg-blue-500/20 text-blue-600 dark:text-blue-400" 
                            : "bg-slate-150 dark:bg-slate-800 text-slate-400"
                        }`}>
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-xs font-black truncate leading-tight">
                            {res.title}
                          </span>
                          <span className="block text-[10px] text-slate-400 font-semibold mt-0.5 truncate">
                            {res.subtitle}
                          </span>
                        </div>
                      </div>

                      {isSelected ? (
                        <div className="flex items-center gap-1.5 flex-shrink-0 text-blue-600 dark:text-blue-400">
                          <span className="text-[9px] font-black uppercase tracking-wider">
                            Select
                          </span>
                          <CornerDownLeft className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />
                      )}
                    </button>
                  );
                })
              ) : (
                <div className="py-8 text-center text-slate-400 flex flex-col items-center justify-center gap-2">
                  <HelpCircle className="w-8 h-8 text-slate-350" />
                  <span className="text-xs font-bold">No results found for &quot;{query}&quot;</span>
                  <span className="text-[10px] text-slate-500">Try adjusting your keywords or search query.</span>
                </div>
              )}
            </div>

            {/* Help footer */}
            <div className="bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 px-5 py-3 flex items-center justify-between text-[10px] text-slate-400 font-semibold select-none">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 px-1.5 py-0.5 rounded shadow-sm">↑↓</span> Move
                </span>
                <span className="flex items-center gap-1">
                  <span className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 px-1.5 py-0.5 rounded shadow-sm">Enter</span> Open
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-blue-500">
                <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
                <span>Quick-Search Cockpit</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
