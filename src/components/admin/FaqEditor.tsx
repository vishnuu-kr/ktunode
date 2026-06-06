"use client";
import React, { useState, useEffect, useTransition } from "react";
import { HelpCircle, Plus, Trash2, Save, AlertCircle, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqEditorProps {
  initialFaqs: FaqItem[];
  saveFaqsAction: (faqs: FaqItem[]) => Promise<{ success: boolean; error?: string }>;
}

export default function FaqEditor({ initialFaqs, saveFaqsAction }: FaqEditorProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  useEffect(() => {
    setFaqs(initialFaqs || []);
  }, [initialFaqs]);

  const handleAddFaq = () => {
    setFaqs([...faqs, { q: "", a: "" }]);
    setFeedback(null);
  };

  const handleRemoveFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
    setFeedback(null);
  };

  const handleFieldChange = (index: number, field: keyof FaqItem, value: string) => {
    const updated = [...faqs];
    updated[index] = { ...updated[index], [field]: value };
    setFaqs(updated);
  };

  const handleSave = () => {
    setFeedback(null);

    // Validate
    const invalid = faqs.some(faq => !faq.q.trim() || !faq.a.trim());
    if (invalid) {
      setFeedback({ type: "error", message: "All FAQ entries must have a question and an answer." });
      return;
    }

    startTransition(async () => {
      try {
        const res = await saveFaqsAction(faqs);
        if (res.success) {
          setFeedback({ type: "success", message: "Custom FAQs saved successfully and homepage updated!" });
          router.refresh();
        } else {
          setFeedback({ type: "error", message: res.error || "Failed to save FAQs." });
        }
      } catch (err: any) {
        setFeedback({ type: "error", message: err.message || "An unexpected error occurred." });
      }
    });
  };

  return (
    <section id="faq-editor" className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-200">Dynamic FAQ Manager</h2>
            <p className="text-xs text-gray-400 mt-0.5">Customize the landing page accordion questions and answers.</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {faqs.length === 0 ? (
          <div className="p-8 text-center bg-white/5 rounded-2xl border border-white/5 text-gray-400 text-xs">
            <p className="font-semibold text-sm">No custom FAQs defined.</p>
            <p className="text-xs text-gray-500 mt-1">The website is currently showing default landing page FAQs.</p>
          </div>
        ) : (
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-3 relative group">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">FAQ #{idx + 1}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFaq(idx)}
                    className="p-1.5 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer"
                    title="Delete FAQ"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 mb-1 uppercase">Question</label>
                  <input
                    type="text"
                    value={faq.q}
                    placeholder="Enter question (e.g. Is this website free?)..."
                    onChange={(e) => handleFieldChange(idx, "q", e.target.value)}
                    className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none text-xs focus:border-white/20"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 mb-1 uppercase">Answer</label>
                  <textarea
                    value={faq.a}
                    placeholder="Enter detailed answer..."
                    rows={2}
                    onChange={(e) => handleFieldChange(idx, "a", e.target.value)}
                    className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none text-xs focus:border-white/20"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={handleAddFaq}
            className="flex-1 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98]"
          >
            <Plus className="w-4 h-4" /> Add FAQ Item
          </button>
          
          <button
            type="button"
            onClick={handleSave}
            disabled={isPending}
            className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 active:scale-[0.98] shadow-md shadow-indigo-950/20"
          >
            <Save className="w-4 h-4" /> {isPending ? "Saving FAQs..." : "Save Custom FAQs"}
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
