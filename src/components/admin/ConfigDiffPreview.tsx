"use client";

import { useState, useTransition } from "react";
import {
  GitCompare,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  FileJson,
} from "lucide-react";
import { getConfigDiff, restoreConfig } from "@/app/admin/actions";

interface DiffChange {
  field: string;
  from: string;
  to: string;
}

interface ConfigDiffPreviewProps {
  currentConfigJson: string;
}

export default function ConfigDiffPreview({
  currentConfigJson: _currentConfigJson,
}: ConfigDiffPreviewProps) {
  const [newConfigText, setNewConfigText] = useState("");
  const [diffChanges, setDiffChanges] = useState<DiffChange[] | null>(null);
  const [isComparing, startComparing] = useTransition();
  const [isApplying, startApplying] = useTransition();
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [applyResult, setApplyResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleCompare = () => {
    setError(null);
    setDiffChanges(null);
    setApplyResult(null);

    startComparing(async () => {
      try {
        const result = await getConfigDiff(newConfigText);
        if (!result.success) {
          setError(result.error ?? "Failed to compare configs");
          return;
        }
        setDiffChanges(result.changes ?? []);
      } catch {
        setError("An unexpected error occurred");
      }
    });
  };

  const handleApply = () => {
    setShowConfirm(false);
    setApplyResult(null);

    startApplying(async () => {
      try {
        const result = await restoreConfig(newConfigText);
        if (!result.success) {
          setApplyResult({
            success: false,
            message: result.error ?? "Failed to apply changes",
          });
          return;
        }
        setApplyResult({ success: true, message: "Config applied successfully" });
        setDiffChanges(null);
        setNewConfigText("");
      } catch {
        setApplyResult({
          success: false,
          message: "An unexpected error occurred",
        });
      }
    });
  };

  const getChangeBorderColor = (from: string, to: string) => {
    if (from === "") return "border-l-green-500";
    if (to === "") return "border-l-red-500";
    return "border-l-yellow-500";
  };

  const getChangeType = (from: string, to: string) => {
    if (from === "") return "added";
    if (to === "") return "removed";
    return "changed";
  };

  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-4">
        <FileJson className="w-5 h-5 text-white/60" />
        <h2 className="text-lg font-semibold text-white">Config Diff Preview</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white/60 mb-2">
            Paste new configuration JSON
          </label>
          <textarea
            value={newConfigText}
            onChange={(e) => setNewConfigText(e.target.value)}
            placeholder='{"key": "value"}'
            className="w-full h-40 p-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-mono placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 resize-none"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleCompare}
            disabled={isComparing || !newConfigText.trim()}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl text-sm font-medium transition-colors"
          >
            <GitCompare className="w-4 h-4" />
            {isComparing ? "Comparing..." : "Compare"}
          </button>

          {diffChanges && diffChanges.length > 0 && (
            <button
              onClick={() => setShowConfirm(true)}
              disabled={isApplying}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl text-sm font-medium transition-colors"
            >
              <CheckCircle className="w-4 h-4" />
              {isApplying ? "Applying..." : "Apply Changes"}
            </button>
          )}
        </div>

        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            {error}
          </div>
        )}

        {applyResult && (
          <div
            className={`flex items-center gap-2 p-3 rounded-xl text-sm ${
              applyResult.success
                ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                : "bg-red-500/10 border border-red-500/20 text-red-400"
            }`}
          >
            {applyResult.success ? (
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
            ) : (
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            )}
            {applyResult.message}
          </div>
        )}

        {diffChanges && diffChanges.length === 0 && (
          <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-white/60 text-sm text-center">
            No differences found
          </div>
        )}

        {diffChanges && diffChanges.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-white/60">
              Changes ({diffChanges.length})
            </h3>
            <div className="space-y-2">
              {diffChanges.map((change, index) => {
                const changeType = getChangeType(change.from, change.to);
                return (
                  <div
                    key={`${change.field}-${index}`}
                    className={`p-3 bg-white/5 rounded-xl border border-white/5 border-l-4 ${getChangeBorderColor(change.from, change.to)}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-white">
                        {change.field}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          changeType === "added"
                            ? "bg-green-500/20 text-green-400"
                            : changeType === "removed"
                              ? "bg-red-500/20 text-red-400"
                              : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {changeType}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      {change.from && (
                        <span className="text-red-400/80 line-through truncate">
                          {change.from}
                        </span>
                      )}
                      {change.from && change.to && (
                        <ArrowRight className="w-3 h-3 text-white/40 flex-shrink-0" />
                      )}
                      {change.to && (
                        <span className="text-green-400/80 truncate">
                          {change.to}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500/10">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Apply Config Changes
                </h3>
                <p className="text-sm text-white/60">
                  This will overwrite the current configuration.
                </p>
              </div>
            </div>

            <p className="text-sm text-white/80 mb-6">
              Are you sure you want to apply {diffChanges?.length} change
              {(diffChanges?.length ?? 0) !== 1 ? "s" : ""} to the config?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white rounded-xl text-sm font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-medium transition-colors"
              >
                Yes, Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
