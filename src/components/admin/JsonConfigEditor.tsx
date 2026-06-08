"use client";

import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Settings, Save, AlertCircle, CheckCircle2 } from "lucide-react";

interface JsonConfigEditorProps {
  initialJson: string;
  saveRawConfigAction: (jsonText: string) => Promise<{ success: boolean; error?: string }>;
}

export default function JsonConfigEditor({
  initialJson,
  saveRawConfigAction
}: JsonConfigEditorProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [jsonText, setJsonText] = useState(initialJson);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSave = () => {
    setFeedback(null);

    // Basic client-side JSON validity check
    try {
      JSON.parse(jsonText);
    } catch (e: any) {
      setFeedback({ type: "error", message: `Invalid JSON Syntax: ${e.message}` });
      return;
    }

    startTransition(async () => {
      try {
        const res = await saveRawConfigAction(jsonText);
        if (res.success) {
          setFeedback({ type: "success", message: "Raw configuration saved and server cache purged!" });
          router.refresh();
        } else {
          setFeedback({ type: "error", message: res.error || "Failed to save configuration." });
        }
      } catch (err: any) {
        setFeedback({ type: "error", message: err.message || "An unexpected error occurred." });
      }
    });
  };

  return (
    <section id="json-editor" className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
      <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
        <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
          <Settings className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-200">Raw Site Configuration Editor</h2>
          <p className="text-xs text-gray-400 mt-0.5">Directly edit the JSON registry for absolute control over global variables.</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <textarea
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            rows={15}
            className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition text-xs font-mono leading-relaxed"
          />
        </div>

        {feedback && (
          <div className={`p-4 rounded-xl text-sm border flex items-center gap-2.5 ${feedback.type === "success" ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400" : "bg-rose-500/10 border-rose-500/25 text-rose-400"}`}>
            {feedback.type === "success" ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
            <span>{feedback.message}</span>
          </div>
        )}

        <button
          type="button"
          onClick={handleSave}
          disabled={isPending}
          className="w-full py-3 bg-white hover:bg-gray-200 text-black font-bold rounded-xl transition duration-200 active:scale-[0.99] text-sm cursor-pointer shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <Save className="w-4.5 h-4.5" />
          {isPending ? "Pushing raw overrides..." : "Save Raw Config JSON"}
        </button>
      </div>
    </section>
  );
}
