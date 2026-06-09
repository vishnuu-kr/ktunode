"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Server,
  GitBranch,
  Clock,
  Globe,
  CheckCircle,
  AlertTriangle,
  Activity,
  RefreshCw,
} from "lucide-react";

interface DeploymentInfo {
  platform: string;
  region?: string;
  commitSha?: string;
  commitMessage?: string;
  branch?: string;
  deployUrl?: string;
  nodeVersion: string;
  startedAt?: string;
  uptime?: string;
}

type HealthStatus = "healthy" | "degraded" | "unhealthy" | "unknown";

interface HealthData {
  status: HealthStatus;
  message?: string;
}

const HEALTH_COLORS: Record<HealthStatus, string> = {
  healthy: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  degraded: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  unhealthy: "bg-red-500/10 text-red-400 border-red-500/20",
  unknown: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
};

const HEALTH_ICONS: Record<HealthStatus, React.ReactNode> = {
  healthy: <CheckCircle className="w-4 h-4" />,
  degraded: <AlertTriangle className="w-4 h-4" />,
  unhealthy: <AlertTriangle className="w-4 h-4" />,
  unknown: <Activity className="w-4 h-4" />,
};

const HEALTH_LABELS: Record<HealthStatus, string> = {
  healthy: "Healthy",
  degraded: "Degraded",
  unhealthy: "Unhealthy",
  unknown: "Unknown",
};

function formatUptime(seconds: number): string {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${days}d ${hours}h ${minutes}m ${secs}s`;
}

function shortSha(sha: string): string {
  return sha.slice(0, 7);
}

function parseStartedAt(startedAt: string): number {
  return Math.floor(new Date(startedAt).getTime() / 1000);
}

function DeploymentStatus({ info }: { info: DeploymentInfo }) {
  const [health, setHealth] = useState<HealthData>({ status: "unknown" });
  const [uptimeSeconds, setUptimeSeconds] = useState(() => {
    if (info.uptime) return parseInt(info.uptime, 10);
    if (info.startedAt) {
      const elapsed = Math.floor(Date.now() / 1000) - parseStartedAt(info.startedAt);
      return Math.max(0, elapsed);
    }
    return 0;
  });
  const [refreshing, setRefreshing] = useState(false);

  const fetchHealth = useCallback(async () => {
    try {
      setRefreshing(true);
      const res = await fetch("/api/health");
      const data: HealthData = await res.json();
      setHealth(data);
    } catch {
      setHealth({ status: "unhealthy", message: "Failed to reach health endpoint" });
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchHealth();
  }, [fetchHealth]);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/5 rounded-xl">
            <Server className="w-5 h-5 text-zinc-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Deployment Status</h2>
            <p className="text-sm text-zinc-500">Live deployment information</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${HEALTH_COLORS[health.status]}`}
          >
            {HEALTH_ICONS[health.status]}
            {HEALTH_LABELS[health.status]}
          </span>
          <button
            onClick={fetchHealth}
            disabled={refreshing}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 text-zinc-400 ${refreshing ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Server className="w-4 h-4 text-zinc-500" />
            <span className="text-xs text-zinc-500 uppercase tracking-wider">Platform</span>
          </div>
          <p className="text-sm font-medium text-white truncate">{info.platform}</p>
        </div>

        <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="w-4 h-4 text-zinc-500" />
            <span className="text-xs text-zinc-500 uppercase tracking-wider">Region</span>
          </div>
          <p className="text-sm font-medium text-white truncate">{info.region ?? "N/A"}</p>
        </div>

        <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-zinc-500" />
            <span className="text-xs text-zinc-500 uppercase tracking-wider">Node</span>
          </div>
          <p className="text-sm font-medium text-white truncate">{info.nodeVersion}</p>
        </div>

        <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-zinc-500" />
            <span className="text-xs text-zinc-500 uppercase tracking-wider">Uptime</span>
          </div>
          <p className="text-sm font-medium text-white tabular-nums">{formatUptime(uptimeSeconds)}</p>
        </div>
      </div>

      {(info.commitSha || info.branch) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          {info.commitSha && (
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-4 h-4 text-zinc-500" />
                <span className="text-xs text-zinc-500 uppercase tracking-wider">Commit</span>
              </div>
              <div className="flex items-center gap-2">
                {info.deployUrl ? (
                  <a
                    href={info.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {shortSha(info.commitSha)}
                  </a>
                ) : (
                  <span className="text-sm font-mono text-zinc-300">{shortSha(info.commitSha)}</span>
                )}
                {info.commitMessage && (
                  <span className="text-xs text-zinc-500 truncate">{info.commitMessage}</span>
                )}
              </div>
            </div>
          )}

          {info.branch && (
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <GitBranch className="w-4 h-4 text-zinc-500" />
                <span className="text-xs text-zinc-500 uppercase tracking-wider">Branch</span>
              </div>
              <p className="text-sm font-mono text-zinc-300 truncate">{info.branch}</p>
            </div>
          )}
        </div>
      )}

      {health.message && (
        <p className="mt-3 text-xs text-zinc-500">{health.message}</p>
      )}
    </div>
  );
}

export default DeploymentStatus;
