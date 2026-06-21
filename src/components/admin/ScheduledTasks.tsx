"use client";

import { useState } from "react";
import {
  CalendarClock,
  RefreshCw,
  Clock,
  CheckCircle,
  AlertTriangle,
  Timer,
} from "lucide-react";

interface Task {
  name: string;
  status: string;
  nextRun?: string;
  details: string;
}

interface ScheduledTasksProps {
  initialTasks: Task[];
}

const statusConfig: Record<
  string,
  { color: string; icon: React.ComponentType<{ className?: string }> }
> = {
  active: {
    color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    icon: CheckCircle,
  },
  scheduled: {
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    icon: Clock,
  },
  expired: {
    color: "bg-red-500/20 text-red-400 border-red-500/30",
    icon: AlertTriangle,
  },
  inactive: {
    color: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    icon: Timer,
  },
};

export default function ScheduledTasks({ initialTasks }: ScheduledTasksProps) {
  const [tasks, _setTasks] = useState<Task[]>(initialTasks);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-violet-500/20 rounded-xl">
            <CalendarClock className="w-5 h-5 text-violet-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">
              Scheduled Tasks
            </h2>
            <p className="text-sm text-white/40">
              {tasks.length} task{tasks.length !== 1 ? "s" : ""} configured
            </p>
          </div>
        </div>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="p-2 hover:bg-white/5 rounded-xl transition-colors disabled:opacity-50"
          aria-label="Refresh tasks"
        >
          <RefreshCw
            className={`w-5 h-5 text-white/60 ${
              isRefreshing ? "animate-spin" : ""
            }`}
          />
        </button>
      </div>

      {tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="p-4 bg-white/5 rounded-2xl mb-4">
            <CalendarClock className="w-10 h-10 text-white/20" />
          </div>
          <p className="text-white/40 font-medium">No scheduled tasks</p>
          <p className="text-sm text-white/20 mt-1">
            Tasks will appear here once configured
          </p>
        </div>
      ) : (
        <div className="grid gap-3">
          {tasks.map((task) => {
            const config =
              statusConfig[task.status] ?? statusConfig.inactive;
            const StatusIcon = config.icon;

            return (
              <div
                key={task.name}
                className="p-4 bg-white/5 rounded-xl border border-white/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-sm font-medium text-white truncate">
                        {task.name}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full border ${config.color}`}
                      >
                        <StatusIcon className="w-3 h-3" />
                        {task.status}
                      </span>
                    </div>
                    <p className="text-xs text-white/40 mb-1.5 line-clamp-2">
                      {task.details}
                    </p>
                    {task.nextRun && (
                      <div className="flex items-center gap-1.5 text-xs text-white/30">
                        <Clock className="w-3 h-3" />
                        Next run: {task.nextRun}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
