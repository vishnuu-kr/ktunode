"use client";

import React, { useState, useCallback } from "react";
import { Activity, RefreshCw, Clock, Search } from "lucide-react";

interface ActivityLogEntry {
  timestamp: string;
  action: string;
  details: string;
}

interface ActivityLogProps {
  initialLog: ActivityLogEntry[];
}

const ACTION_COLOR_MAP: Record<string, { bg: string; text: string; border: string }> = {
  subject_save: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/25" },
  config_restore: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/25" },
  config_update: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/25" },
  note_save: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/25" },
  faq_save: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/25" },
  timetable_save: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/25" },
};

const DEFAULT_COLOR = { bg: "bg-gray-500/10", text: "text-gray-400", border: "border-gray-500/25" };

function getActionColor(action: string) {
  return ACTION_COLOR_MAP[action] ?? DEFAULT_COLOR;
}

const formatTime = (ts: string) => {
  const d = new Date(ts);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return "Just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default function ActivityLog({ initialLog }: ActivityLogProps) {
  const [log, setLog] = useState<ActivityLogEntry[]>(initialLog);
  const [search, setSearch] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    // Re-read from props (server-rendered data) — in a real app this would
    // re-fetch from an API. For now we simulate the network round-trip and
    // keep the existing initial data.
    const timer = setTimeout(() => {
      setLog(initialLog);
      setIsRefreshing(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [initialLog]);

  const filteredLog = log.filter((entry) => {
    const q = search.toLowerCase().trim();
    if (!q) return true;
    return (
      entry.action.toLowerCase().includes(q) ||
      entry.details.toLowerCase().includes(q)
    );
  });

  return (
    <section
      id="activity-log"
      className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-rose-500/10 rounded-lg text-rose-400">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-200">Activity Log</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Recent admin actions and configuration changes.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Filter logs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#121214] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-white focus:outline-none focus:border-white/30 text-xs transition"
            />
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          {/* Refresh button */}
          <button
            type="button"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="p-2.5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-gray-300 hover:text-white transition-colors cursor-pointer disabled:opacity-50 active:scale-[0.97]"
            title="Refresh activity log"
          >
            <RefreshCw
              className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Log list */}
      <div className="space-y-3">
        {filteredLog.length === 0 ? (
          <div className="p-8 text-center bg-white/5 rounded-2xl border border-white/5 text-gray-400 text-sm">
            {log.length === 0 ? (
              <>
                <p className="font-semibold text-sm">No activity recorded yet.</p>
                <p className="text-xs text-gray-500 mt-1">
                  Actions will appear here once admin operations are performed.
                </p>
              </>
            ) : (
              <>
                <p className="font-semibold text-sm">No matching entries.</p>
                <p className="text-xs text-gray-500 mt-1">
                  Try adjusting your search query.
                </p>
              </>
            )}
          </div>
        ) : (
          <div className="max-h-[400px] overflow-y-auto pr-1 space-y-2">
            {filteredLog.map((entry, idx) => {
              const color = getActionColor(entry.action);
              return (
                <div
                  key={`${entry.timestamp}-${idx}`}
                  className="p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/[0.06] transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 flex-shrink-0 text-gray-500">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-medium whitespace-nowrap">
                          {formatTime(entry.timestamp)}
                        </span>
                      </div>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border whitespace-nowrap ${color.bg} ${color.text} ${color.border}`}
                      >
                        {entry.action}
                      </span>
                    </div>
                  </div>
                  <p className="mt-1.5 text-xs text-gray-300 leading-relaxed pl-[22px]">
                    {entry.details}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
