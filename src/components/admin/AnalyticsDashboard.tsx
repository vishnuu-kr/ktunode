"use client";

import React, { useMemo } from "react";
import { Eye, TrendingUp, BookOpen, FileText, BarChart3, Users } from "lucide-react";

interface AnalyticsDashboardProps {
  todayViews: number;
  totalViews: number;
  dailyBreakdown: Record<string, number>;
  topPages: [string, number][];
  notesSizeMB: string;
  subjectCount: number;
  topicCount: number;
  branchCounts: Record<string, number>;
  onRefresh?: () => void;
}

function StatCard({
  label,
  value,
  icon: Icon,
  color,
  bg,
}: {
  label: string;
  value: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bg: string;
}) {
  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
      <div className="flex items-center gap-3 mb-3">
        <div className={`${bg} p-2 rounded-xl`}>
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
        <span className="text-sm text-gray-400">{label}</span>
      </div>
      <p className="text-3xl font-bold text-white">{value.toLocaleString()}</p>
    </div>
  );
}

export default function AnalyticsDashboard({
  todayViews,
  totalViews,
  dailyBreakdown,
  topPages,
  notesSizeMB,
  subjectCount,
  topicCount,
  branchCounts,
  onRefresh,
}: AnalyticsDashboardProps) {
  const stats = [
    { label: "Today's Views", value: todayViews, icon: Eye, color: "text-blue-400", bg: "bg-blue-500/10" },
    { label: "Total Views", value: totalViews, icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { label: "Subjects", value: subjectCount, icon: BookOpen, color: "text-purple-400", bg: "bg-purple-500/10" },
    { label: "Topics", value: topicCount, icon: FileText, color: "text-amber-400", bg: "bg-amber-500/10" },
  ];

  const chartData = useMemo(() => {
    const entries = Object.entries(dailyBreakdown).sort(([a], [b]) => a.localeCompare(b));
    const last7 = entries.slice(-7);
    const maxVal = Math.max(...last7.map(([, v]) => v), 1);
    return last7.map(([date, count]) => ({
      date: new Date(date + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      count,
      heightPercent: (count / maxVal) * 100,
    }));
  }, [dailyBreakdown]);

  const topPageMax = topPages.length > 0 ? Math.max(...topPages.map(([, c]) => c), 1) : 1;

  const branchEntries = useMemo(() => {
    const entries = Object.entries(branchCounts).sort(([, a], [, b]) => b - a);
    const total = entries.reduce((sum, [, c]) => sum + c, 0);
    return entries.map(([branch, count]) => ({
      branch,
      count,
      percent: total > 0 ? (count / total) * 100 : 0,
    }));
  }, [branchCounts]);

  const chartMaxValue = chartData.length > 0 ? Math.max(...chartData.map((d) => d.count), 1) : 1;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-blue-400" />
          <h2 className="text-xl font-semibold text-white">Analytics Overview</h2>
        </div>
        {onRefresh && (
          <button
            onClick={onRefresh}
            className="px-4 py-2 text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors"
          >
            Refresh
          </button>
        )}
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Bar Chart */}
      <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
        <h3 className="text-sm font-medium text-gray-400 mb-4">Daily Views (Last 7 Days)</h3>
        {chartData.length === 0 ? (
          <p className="text-gray-500 text-sm">No data available</p>
        ) : (
          <div className="flex items-end gap-3 h-48">
            {chartData.map((d) => (
              <div key={d.date} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-xs text-gray-400 font-medium">{d.count.toLocaleString()}</span>
                <div
                  className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all duration-500"
                  style={{ height: `${Math.max(d.heightPercent, 2)}%` }}
                />
                <span className="text-xs text-gray-500 truncate w-full text-center">{d.date}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Top Pages */}
        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
          <h3 className="text-sm font-medium text-gray-400 mb-4">Top Pages</h3>
          {topPages.length === 0 ? (
            <p className="text-gray-500 text-sm">No data available</p>
          ) : (
            <div className="space-y-3">
              {topPages.map(([page, count]) => (
                <div key={page} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300 truncate mr-2">{page}</span>
                    <span className="text-gray-500 tabular-nums shrink-0">{count.toLocaleString()}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                      style={{ width: `${(count / topPageMax) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Branch Distribution */}
        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-4 h-4 text-gray-400" />
            <h3 className="text-sm font-medium text-gray-400">Branch Distribution</h3>
          </div>
          {branchEntries.length === 0 ? (
            <p className="text-gray-500 text-sm">No data available</p>
          ) : (
            <div className="space-y-3">
              {branchEntries.map((b) => (
                <div key={b.branch} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300 truncate mr-2">{b.branch}</span>
                    <span className="text-gray-500 tabular-nums shrink-0">
                      {b.count.toLocaleString()} ({b.percent.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
                      style={{ width: `${Math.max(b.percent, 1)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Notes Size */}
      <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-emerald-400" />
          <div>
            <p className="text-sm text-gray-400">Notes Payload Size</p>
            <p className="text-xl font-semibold text-white">{notesSizeMB} MB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
