"use client";

import React, { useState, useRef, useTransition } from "react";
import {
  Download,
  Upload,
  AlertTriangle,
  CheckCircle,
  FileJson,
  Shield,
} from "lucide-react";
import { backupConfig, restoreConfig } from "@/app/admin/actions";

export default function BackupRestore() {
  const [isPending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [confirmRestore, setConfirmRestore] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBackup = async () => {
    setFeedback(null);
    startTransition(async () => {
      try {
        const result = await backupConfig();
        if (result.success && result.data) {
          const blob = new Blob([result.data], { type: "application/json" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `ktunode-config-backup-${new Date().toISOString().slice(0, 10)}.json`;
          a.click();
          URL.revokeObjectURL(url);
          setFeedback({ type: "success", message: "Backup downloaded successfully." });
        } else {
          setFeedback({ type: "error", message: result.error || "Failed to create backup." });
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "An unexpected error occurred.";
        setFeedback({ type: "error", message });
      }
    });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback(null);
    setPreview(null);
    setConfirmRestore(false);

    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      try {
        JSON.parse(text);
        setPreview(text.length > 500 ? text.slice(0, 500) + "\n..." : text);
      } catch {
        setFeedback({ type: "error", message: "Selected file is not valid JSON." });
        setPreview(null);
      }
    };
    reader.readAsText(file);
  };

  const handleRestore = () => {
    setFeedback(null);
    if (!preview) return;

    startTransition(async () => {
      try {
        const file = fileInputRef.current?.files?.[0];
        if (!file) return;

        const text = await file.text();
        const result = await restoreConfig(text);
        if (result.success) {
          setFeedback({ type: "success", message: "Configuration restored successfully." });
          setPreview(null);
          setFileName(null);
          setConfirmRestore(false);
          if (fileInputRef.current) fileInputRef.current.value = "";
        } else {
          setFeedback({ type: "error", message: result.error || "Failed to restore configuration." });
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "An unexpected error occurred.";
        setFeedback({ type: "error", message });
      }
    });
  };

  const handleReset = () => {
    setPreview(null);
    setFileName(null);
    setConfirmRestore(false);
    setFeedback(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <section
      id="backup-restore"
      className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl"
    >
      <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
          <Shield className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-200">Backup & Restore</h2>
          <p className="text-xs text-gray-400 mt-0.5">
            Download a configuration backup or restore from a previous snapshot.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Download Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Download className="w-4 h-4 text-blue-400" />
            <h3 className="text-sm font-semibold text-gray-300">Download Backup</h3>
          </div>
          <p className="text-xs text-gray-400 mb-3">
            Export the current site configuration as a JSON file.
          </p>
          <button
            type="button"
            onClick={handleBackup}
            disabled={isPending}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition duration-200 active:scale-[0.99] text-sm cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            {isPending ? "Creating backup..." : "Download Backup"}
          </button>
        </div>

        {/* Restore Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Upload className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-semibold text-gray-300">Upload & Restore</h3>
          </div>
          <p className="text-xs text-gray-400 mb-3">
            Select a previously exported JSON backup file to restore.
          </p>

          <div className="relative">
            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleFileSelect}
              className="hidden"
              id="restore-file"
            />
            <label
              htmlFor="restore-file"
              className="flex items-center justify-center gap-2 w-full py-3 bg-white/[0.04] border border-white/10 hover:border-white/20 rounded-xl transition duration-200 cursor-pointer text-sm text-gray-300"
            >
              <FileJson className="w-4 h-4" />
              {fileName || "Choose a .json file"}
            </label>
          </div>

          {preview && (
            <div className="mt-3 space-y-3">
              <div className="bg-[#121214] border border-white/10 rounded-xl p-3 text-xs font-mono text-gray-300 max-h-40 overflow-y-auto leading-relaxed whitespace-pre-wrap">
                {preview}
              </div>

              {!confirmRestore ? (
                <button
                  type="button"
                  onClick={() => setConfirmRestore(true)}
                  className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl transition duration-200 active:scale-[0.99] text-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <AlertTriangle className="w-4 h-4" />
                  Restore This Configuration
                </button>
              ) : (
                <div className="bg-amber-500/10 border border-amber-500/25 rounded-xl p-4 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>Are you sure? This will overwrite the current configuration.</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleRestore}
                      disabled={isPending}
                      className="flex-1 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl transition duration-200 text-sm cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isPending ? "Restoring..." : "Yes, Overwrite"}
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      disabled={isPending}
                      className="flex-1 py-2.5 bg-white/[0.06] hover:bg-white/[0.1] text-gray-300 font-bold rounded-xl transition duration-200 text-sm cursor-pointer disabled:opacity-50"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Feedback */}
        {feedback && (
          <div
            className={`p-4 rounded-xl text-sm border flex items-center gap-2.5 ${
              feedback.type === "success"
                ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400"
                : "bg-rose-500/10 border-rose-500/25 text-rose-400"
            }`}
          >
            {feedback.type === "success" ? (
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
            ) : (
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
            )}
            <span>{feedback.message}</span>
          </div>
        )}
      </div>
    </section>
  );
}
