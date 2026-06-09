"use client";

import React, { useState, useTransition } from "react";
import {
  Database,
  RefreshCw,
  Trash2,
  Eye,
  CheckCircle,
  AlertTriangle,
  HardDrive,
} from "lucide-react";
import { flushConfigCache, getKvUsage } from "@/app/admin/actions";

type Toast = {
  type: "success" | "error";
  message: string;
};

type KvKeyStatus = "present" | "empty" | "error";

export default function CacheManager() {
  const [isPending, startTransition] = useTransition();
  const [kvPending, startKvTransition] = useTransition();
  const [toast, setToast] = useState<Toast | null>(null);
  const [lastFlushTime, setLastFlushTime] = useState<string | null>(null);
  const [kvKeys, setKvKeys] = useState<Record<string, string> | null>(null);

  const showToast = (type: Toast["type"], message: string) => {
    setToast({ type, message });
  };

  const handleFlush = () => {
    setToast(null);
    startTransition(async () => {
      try {
        const result = await flushConfigCache();
        if (result.success) {
          setLastFlushTime(new Date().toLocaleTimeString());
          showToast("success", "Config cache flushed and reloaded successfully.");
        } else {
          showToast("error", result.error || "Failed to flush cache.");
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "An unexpected error occurred.";
        showToast("error", message);
      }
    });
  };

  const handleViewKv = () => {
    setToast(null);
    startKvTransition(async () => {
      try {
        const result = await getKvUsage();
        if (result.success && result.keys) {
          setKvKeys(result.keys as Record<string, string>);
          const presentCount = Object.values(result.keys).filter((v) => v === "present").length;
          showToast("success", `Loaded ${Object.keys(result.keys).length} KV keys (${presentCount} present).`);
        } else {
          showToast("error", result.error || "Failed to read KV store.");
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "An unexpected error occurred.";
        showToast("error", message);
      }
    });
  };

  const getStatusIcon = (status: KvKeyStatus) => {
    switch (status) {
      case "present":
        return <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />;
      case "empty":
        return <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />;
      case "error":
        return <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />;
    }
  };

  const getStatusColor = (status: KvKeyStatus) => {
    switch (status) {
      case "present":
        return "bg-emerald-500/10 border-emerald-500/25 text-emerald-300";
      case "empty":
        return "bg-amber-500/10 border-amber-500/25 text-amber-300";
      case "error":
        return "bg-rose-500/10 border-rose-500/25 text-rose-300";
    }
  };

  const presentCount = kvKeys
    ? Object.values(kvKeys).filter((v) => v === "present").length
    : 0;

  return (
    <section
      id="cache-manager"
      className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl"
    >
      <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
          <Database className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-200">Cache Manager</h2>
          <p className="text-xs text-gray-400 mt-0.5">
            Flush config cache and inspect the KV key-value store.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={handleFlush}
            disabled={isPending}
            className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition duration-200 active:scale-[0.99] text-sm cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${isPending ? "animate-spin" : ""}`} />
            {isPending ? "Flushing..." : "Flush Config Cache"}
          </button>
          <button
            type="button"
            onClick={handleViewKv}
            disabled={kvPending}
            className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition duration-200 active:scale-[0.99] text-sm cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4" />
            {kvPending ? "Loading..." : "View KV Store"}
          </button>
        </div>

        {/* Status */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
            <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
              <Trash2 className="w-3.5 h-3.5" />
              <span>Last Flush</span>
            </div>
            <p className="text-sm text-gray-200 font-medium">
              {lastFlushTime || "Never"}
            </p>
          </div>
          <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
            <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
              <HardDrive className="w-3.5 h-3.5" />
              <span>KV Keys</span>
            </div>
            <p className="text-sm text-gray-200 font-medium">
              {kvKeys ? (
                <>
                  {presentCount}/{Object.keys(kvKeys).length} present
                </>
              ) : (
                "Not loaded"
              )}
            </p>
          </div>
        </div>

        {/* KV Key Listing */}
        {kvKeys && (
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-3">
              KV Key Status
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Object.entries(kvKeys).map(([key, status]) => (
                <div
                  key={key}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-mono ${getStatusColor(status as KvKeyStatus)}`}
                >
                  {getStatusIcon(status as KvKeyStatus)}
                  <span className="truncate">{key}</span>
                  <span className="ml-auto text-[10px] uppercase tracking-wide opacity-70">
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Toast */}
        {toast && (
          <div
            className={`p-4 rounded-xl text-sm border flex items-center gap-2.5 ${
              toast.type === "success"
                ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400"
                : "bg-rose-500/10 border-rose-500/25 text-rose-400"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
            ) : (
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
            )}
            <span>{toast.message}</span>
          </div>
        )}
      </div>
    </section>
  );
}
