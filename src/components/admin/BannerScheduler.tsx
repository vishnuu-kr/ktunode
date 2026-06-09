"use client";

import { useActionState, useRef, useEffect, useState, useMemo } from "react";
import {
  Bell,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { updateConfig } from "@/app/admin/actions";

interface BannerSchedulerProps {
  bannerEnabled: boolean;
  bannerText: string;
  bannerSeverity: "info" | "warning" | "success" | "danger";
  bannerDismissible: boolean;
  bannerStart: string;
  bannerEnd: string;
}

type BannerStatus = "active" | "scheduled" | "expired" | "inactive";

const STATUS_CONFIG: Record<
  BannerStatus,
  { label: string; color: string; bg: string; border: string; icon: React.ReactNode }
> = {
  active: {
    label: "Active",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    icon: <CheckCircle className="w-3.5 h-3.5" />,
  },
  scheduled: {
    label: "Scheduled",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    icon: <Clock className="w-3.5 h-3.5" />,
  },
  expired: {
    label: "Expired",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    icon: <XCircle className="w-3.5 h-3.5" />,
  },
  inactive: {
    label: "Inactive",
    color: "text-gray-400",
    bg: "bg-white/5",
    border: "border-white/10",
    icon: <Bell className="w-3.5 h-3.5" />,
  },
};

const SEVERITY_OPTIONS = [
  { value: "info", label: "Info", color: "text-blue-400" },
  { value: "warning", label: "Warning", color: "text-amber-400" },
  { value: "success", label: "Success", color: "text-emerald-400" },
  { value: "danger", label: "Danger", color: "text-red-400" },
] as const;

function getBannerStatus(
  enabled: boolean,
  start: string,
  end: string
): BannerStatus {
  if (!enabled) return "inactive";
  if (!start && !end) return "active";

  const now = Date.now();
  const startTime = start ? new Date(start).getTime() : 0;
  const endTime = end ? new Date(end).getTime() : Infinity;

  if (startTime && now < startTime) return "scheduled";
  if (endTime && now > endTime) return "expired";
  return "active";
}

function formatDateTime(iso: string): string {
  if (!iso) return "—";
  try {
    const d = new Date(iso);
    return d.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default function BannerScheduler({
  bannerEnabled,
  bannerText,
  bannerSeverity,
  bannerDismissible,
  bannerStart,
  bannerEnd,
}: BannerSchedulerProps) {
  const [state, formAction, isPending] = useActionState(updateConfig, null);
  const [showFeedback, setShowFeedback] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const [enabled, setEnabled] = useState(bannerEnabled);
  const [text, setText] = useState(bannerText);
  const [severity, setSeverity] = useState(bannerSeverity);
  const [dismissible, setDismissible] = useState(bannerDismissible);
  const [start, setStart] = useState(bannerStart);
  const [end, setEnd] = useState(bannerEnd);

  const status = useMemo(() => getBannerStatus(enabled, start, end), [enabled, start, end]);
  const statusConfig = STATUS_CONFIG[status];

  useEffect(() => {
    if (state) {
      setShowFeedback(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setShowFeedback(false), 5000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [state]);

  return (
    <>
      {showFeedback && state && (
        <div
          className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-md shadow-lg transition-all duration-300 ${
            state.success
              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
              : "bg-red-500/10 border-red-500/30 text-red-400"
          }`}
        >
          {state.success ? (
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
          ) : (
            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
          )}
          <span className="text-sm font-semibold">
            {state.success
              ? "Banner configuration saved successfully."
              : state.error || "Failed to update banner."}
          </span>
        </div>
      )}

      <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
        <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-200">
                Banner Scheduler
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Configure announcements and scheduled site-wide banners.
              </p>
            </div>
          </div>

          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold ${statusConfig.bg} ${statusConfig.border} ${statusConfig.color}`}
          >
            {statusConfig.icon}
            {statusConfig.label}
          </div>
        </div>

        <form action={formAction} className="space-y-6">
          <input type="hidden" name="bannerEnabled" value={enabled ? "on" : "off"} />
          <input type="hidden" name="bannerSeverity" value={severity} />
          <input type="hidden" name="bannerDismissible" value={dismissible ? "on" : "off"} />
          <input type="hidden" name="bannerStart" value={start} />
          <input type="hidden" name="bannerEnd" value={end} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              {/* Enable/Disable Toggle */}
              <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                <div className="flex items-center gap-3">
                  <Bell className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-sm font-semibold text-gray-200">
                      Enable Banner
                    </p>
                    <p className="text-[11px] text-gray-500">
                      Show banner to all visitors
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={enabled}
                  onClick={() => setEnabled(!enabled)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                    enabled ? "bg-emerald-500" : "bg-white/10"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      enabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Dismissible Toggle */}
              <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                <div className="flex items-center gap-3">
                  <XCircle className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-sm font-semibold text-gray-200">
                      Dismissible
                    </p>
                    <p className="text-[11px] text-gray-500">
                      Allow visitors to close the banner
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={dismissible}
                  onClick={() => setDismissible(!dismissible)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                    dismissible ? "bg-emerald-500" : "bg-white/10"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      dismissible ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Severity Selector */}
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Severity Level
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {SEVERITY_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setSeverity(opt.value)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
                        severity === opt.value
                          ? `${opt.color} bg-white/10 border-white/20`
                          : "text-gray-500 bg-white/[0.02] border-white/5 hover:border-white/10"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Banner Text */}
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Banner Message
                </label>
                <textarea
                  name="bannerText"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter the announcement message..."
                  rows={3}
                  className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition text-sm leading-relaxed resize-none"
                />
              </div>

              {/* Start Date/Time */}
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    Start Date &amp; Time
                  </label>
                </div>
                <input
                  type="datetime-local"
                  name="bannerStartInput"
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                  className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition text-sm [color-scheme:dark]"
                />
                {start && (
                  <p className="text-[11px] text-gray-500 mt-2">
                    {formatDateTime(start)}
                  </p>
                )}
              </div>

              {/* End Date/Time */}
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    End Date &amp; Time
                  </label>
                </div>
                <input
                  type="datetime-local"
                  name="bannerEndInput"
                  value={end}
                  onChange={(e) => setEnd(e.target.value)}
                  className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition text-sm [color-scheme:dark]"
                />
                {end && (
                  <p className="text-[11px] text-gray-500 mt-2">
                    {formatDateTime(end)}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Schedule Summary */}
          {enabled && (start || end) && (
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Schedule Window
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <span>{start ? formatDateTime(start) : "Immediately"}</span>
                <span className="text-gray-600">→</span>
                <span>{end ? formatDateTime(end) : "No end"}</span>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all duration-200 active:scale-[0.99] text-sm cursor-pointer shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Saving Banner..." : "Save Banner Configuration"}
          </button>
        </form>
      </div>
    </>
  );
}
