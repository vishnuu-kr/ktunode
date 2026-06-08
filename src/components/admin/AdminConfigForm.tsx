"use client";

import { useActionState, useRef, useEffect, useState } from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { updateConfig } from "@/app/admin/actions";
import type { SiteConfig } from "@/lib/siteConfig";

interface AdminConfigFormProps {
  config: SiteConfig;
  notesSizeMB: string;
  children: React.ReactNode;
}

export default function AdminConfigForm({
  config,
  notesSizeMB,
  children,
}: AdminConfigFormProps) {
  const [state, formAction, isPending] = useActionState(updateConfig, null);
  const [showFeedback, setShowFeedback] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

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
              ? "Global configuration pushed to server successfully."
              : state.error || "Failed to update configuration."}
          </span>
        </div>
      )}

      <form action={formAction} className="space-y-6">

        {children}

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all duration-200 active:scale-[0.99] text-sm cursor-pointer shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Pushing Updates..." : "Push Global Updates to Server"}
        </button>
      </form>

      <div className="mt-6 p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Notes Cache Size: {notesSizeMB} MB</span>
          <span>
            Active Scheme:{" "}
            <span className="text-gray-300 font-semibold">{config.activeScheme}</span>
          </span>
        </div>
      </div>
    </>
  );
}
