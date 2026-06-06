"use client";
import React, { useState, useEffect, useTransition } from "react";
import { Link2, Plus, Trash2, Save, AlertCircle, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface QuickLinkItem {
  title: string;
  url: string;
  category: string;
}

interface QuickLinksEditorProps {
  secretParam: string;
  initialLinks: QuickLinkItem[];
  saveLinksAction: (secret: string, links: QuickLinkItem[]) => Promise<{ success: boolean; error?: string }>;
}

export default function QuickLinksEditor({ secretParam, initialLinks, saveLinksAction }: QuickLinksEditorProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [links, setLinks] = useState<QuickLinkItem[]>([]);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  useEffect(() => {
    setLinks(initialLinks || []);
  }, [initialLinks]);

  const handleAddLink = () => {
    setLinks([...links, { title: "", url: "", category: "Utility" }]);
    setFeedback(null);
  };

  const handleRemoveLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
    setFeedback(null);
  };

  const handleFieldChange = (index: number, field: keyof QuickLinkItem, value: string) => {
    const updated = [...links];
    updated[index] = { ...updated[index], [field]: value };
    setLinks(updated);
  };

  const handleSave = () => {
    setFeedback(null);

    // Validate
    const invalid = links.some(link => !link.title.trim() || !link.url.trim() || !link.category.trim());
    if (invalid) {
      setFeedback({ type: "error", message: "All link entries must have a title, URL, and category." });
      return;
    }

    startTransition(async () => {
      try {
        const res = await saveLinksAction(secretParam, links);
        if (res.success) {
          setFeedback({ type: "success", message: "Student quick resources saved successfully!" });
          router.refresh();
        } else {
          setFeedback({ type: "error", message: res.error || "Failed to save quick links." });
        }
      } catch (err: any) {
        setFeedback({ type: "error", message: err.message || "An unexpected error occurred." });
      }
    });
  };

  return (
    <section id="quick-links-editor" className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
            <Link2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-200">Quick Links & Resource Manager</h2>
            <p className="text-xs text-gray-400 mt-0.5">Manage external resources, links, and portals displayed on the dashboard.</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {links.length === 0 ? (
          <div className="p-8 text-center bg-white/5 rounded-2xl border border-white/5 text-gray-400 text-xs">
            <p className="font-semibold text-sm">No custom links created.</p>
            <p className="text-xs text-gray-500 mt-1">The dashboard will display default KTU links until you add yours.</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-white/5">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-white/5 text-gray-400 text-xs uppercase tracking-wider font-bold">
                  <th className="p-3">Resource Name</th>
                  <th className="p-3">Resource URL</th>
                  <th className="p-3">Category Tag</th>
                  <th className="p-3 text-center w-12">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-white/[0.01]">
                {links.map((link, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-3">
                      <input
                        type="text"
                        value={link.title}
                        placeholder="e.g. KTU Academic Calendar"
                        onChange={(e) => handleFieldChange(idx, "title", e.target.value)}
                        className="bg-[#121214] border border-white/10 rounded-lg px-2.5 py-1.5 text-white focus:outline-none text-xs w-full focus:border-white/20"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="text"
                        value={link.url}
                        placeholder="e.g. https://ktu.edu.in/..."
                        onChange={(e) => handleFieldChange(idx, "url", e.target.value)}
                        className="bg-[#121214] border border-white/10 rounded-lg px-2.5 py-1.5 text-white focus:outline-none text-xs w-full focus:border-white/20"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="text"
                        value={link.category}
                        placeholder="e.g. Utilities, Academic, Portal"
                        onChange={(e) => handleFieldChange(idx, "category", e.target.value)}
                        className="bg-[#121214] border border-white/10 rounded-lg px-2.5 py-1.5 text-white focus:outline-none text-xs w-full focus:border-white/20"
                      />
                    </td>
                    <td className="p-3 text-center">
                      <button
                        type="button"
                        onClick={() => handleRemoveLink(idx)}
                        className="p-1.5 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer"
                        title="Delete Link"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={handleAddLink}
            className="flex-1 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98]"
          >
            <Plus className="w-4 h-4" /> Add Link Row
          </button>
          
          <button
            type="button"
            onClick={handleSave}
            disabled={isPending}
            className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 active:scale-[0.98] shadow-md shadow-indigo-950/20"
          >
            <Save className="w-4 h-4" /> {isPending ? "Saving links..." : "Save Dynamic Links"}
          </button>
        </div>

        {feedback && (
          <div className={`p-4 rounded-xl text-sm border mt-3 flex items-center gap-2.5 ${feedback.type === "success" ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400" : "bg-rose-500/10 border-rose-500/25 text-rose-400"}`}>
            {feedback.type === "success" ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
            <span>{feedback.message}</span>
          </div>
        )}
      </div>
    </section>
  );
}
