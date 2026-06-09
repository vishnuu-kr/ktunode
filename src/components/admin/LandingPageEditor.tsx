"use client";

import React, { useState, useCallback } from "react";
import { useActionState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Plus,
  Trash2,
  Save,
  Eye,
  EyeOff,
  Layout,
  Type,
  MessageSquare,
  Star,
  BarChart,
  Megaphone,
} from "lucide-react";
import { updateConfig } from "@/app/admin/actions";

interface LandingContent {
  hero: {
    badge: string;
    headline: string;
    subtitle: string;
    ctaText: string;
    trustBadges: { label: string; value: string }[];
  };
  compare: {
    badge: string;
    headline: string;
    description: string;
    bullets: string[];
    ctaText: string;
  };
  howItWorks: {
    badge: string;
    headline: string;
    description: string;
    ctaText: string;
    steps: { title: string; description: string }[];
  };
  founders: {
    badge: string;
    headlinePrefix: string;
    body: string;
    rotatingWords: string[];
    stats: { value: string; label: string }[];
    ctaText: string;
  };
  features: {
    badge: string;
    headline: string;
    description: string;
    cards: { title: string; description: string }[];
    zeroFrictionTitle: string;
    zeroFrictionDescription: string;
    launchCtaText: string;
  };
  testimonials: {
    badge: string;
    headline: string;
    description: string;
    entries: {
      name: string;
      branch: string;
      rating: number;
      quote: string;
      text: string;
      color: string;
    }[];
  };
  cta: {
    badge: string;
    headline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { value: string; label: string }[];
  };
  footer: {
    heading: string;
    attribution: string;
    attributionUrl: string;
    marquee: string[];
  };
}

interface LandingPageEditorProps {
  landingContent: LandingContent;
  sectionToggles: {
    compare: boolean;
    howItWorks: boolean;
    foundree: boolean;
    features: boolean;
    testimonials: boolean;
    faqs: boolean;
    cta: boolean;
  };
}

const inputClass =
  "w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs focus:outline-none focus:border-white/20 transition-colors";
const textareaClass =
  "w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs focus:outline-none focus:border-white/20 transition-colors resize-none";
const labelClass = "block text-[10px] font-semibold text-gray-400 mb-1 uppercase tracking-wider";
const subCardClass =
  "p-3 bg-white/[0.03] rounded-xl border border-white/5 space-y-2 relative group";
const addBtnClass =
  "w-full py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white rounded-xl text-[11px] font-bold transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98]";
const removeBtnClass =
  "p-1.5 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer";

function AccordionSection({
  title,
  icon,
  isOpen,
  onToggle,
  enabled,
  onToggleEnabled,
  enabledLabel,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  enabled?: boolean;
  onToggleEnabled?: () => void;
  enabledLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden backdrop-blur-xl">
      <div className="flex items-center justify-between px-5 py-4 cursor-pointer select-none hover:bg-white/[0.02] transition-colors">
        <button
          type="button"
          onClick={onToggle}
          className="flex items-center gap-3 flex-1 text-left"
        >
          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">{icon}</div>
          <span className="text-sm font-bold text-gray-200">{title}</span>
          <span className="text-gray-500 ml-1">
            {isOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </span>
        </button>
        {onToggleEnabled && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleEnabled();
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-colors cursor-pointer ${
              enabled
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                : "bg-white/5 text-gray-500 border border-white/10"
            }`}
          >
            {enabled ? (
              <>
                <Eye className="w-3.5 h-3.5" /> Visible
              </>
            ) : (
              <>
                <EyeOff className="w-3.5 h-3.5" /> Hidden
              </>
            )}
          </button>
        )}
      </div>
      {isOpen && <div className="px-5 pb-5 space-y-4 border-t border-white/5 pt-4">{children}</div>}
    </div>
  );
}

function StringField({
  label,
  value,
  onChange,
  placeholder,
  multiline,
  rows,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
}) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows || 2}
          className={textareaClass}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={inputClass}
        />
      )}
    </div>
  );
}

function StringArrayField({
  label,
  items,
  onChange,
  placeholder,
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <label className={labelClass}>{label}</label>
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <input
            type="text"
            value={item}
            onChange={(e) => {
              const next = [...items];
              next[idx] = e.target.value;
              onChange(next);
            }}
            placeholder={placeholder}
            className={inputClass}
          />
          <button
            type="button"
            onClick={() => onChange(items.filter((_, i) => i !== idx))}
            className={removeBtnClass}
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...items, ""])}
        className={addBtnClass}
      >
        <Plus className="w-3.5 h-3.5" /> Add {label}
      </button>
    </div>
  );
}

export default function LandingPageEditor({
  landingContent,
  sectionToggles,
}: LandingPageEditorProps) {
  const [state, formAction, isPending] = useActionState(updateConfig, null);
  const [content, setContent] = useState<LandingContent>(landingContent);
  const [sections, setSections] = useState(sectionToggles);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const toggleSection = useCallback((key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const toggleVisible = useCallback((key: keyof typeof sections) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const updateField = useCallback(
    <K extends keyof LandingContent>(section: K, updater: (prev: LandingContent[K]) => LandingContent[K]) => {
      setContent((prev) => ({ ...prev, [section]: updater(prev[section]) }));
    },
    [],
  );

  const handleSave = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      setFeedback(null);
      const formData = new FormData(e.currentTarget);
      formData.set("landingContent", JSON.stringify(content));
      Object.entries(sections).forEach(([key, val]) => {
        formData.set(`section_${key}`, val ? "on" : "");
      });
      formAction(formData);
    },
    [content, sections, formAction],
  );

  React.useEffect(() => {
    if (state?.success) {
      setFeedback({ type: "success", message: "Landing page content saved successfully!" });
    } else if (state?.error) {
      setFeedback({ type: "error", message: state.error });
    }
  }, [state]);

  return (
    <form onSubmit={handleSave} className="space-y-4">
      <input type="hidden" name="landingContent" value={JSON.stringify(content)} />

      {Object.entries(sections).map(([key, val]) => (
        <input
          key={key}
          type="hidden"
          name={`section_${key}`}
          value={val ? "on" : ""}
        />
      ))}

      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
            <Layout className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-200">Landing Page Content</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Edit every section of the landing page in one place.
            </p>
          </div>
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition disabled:opacity-50 cursor-pointer active:scale-[0.98] shadow-md shadow-blue-950/20"
        >
          <Save className="w-4 h-4" />
          {isPending ? "Saving..." : "Save All Changes"}
        </button>
      </div>

      {feedback && (
        <div
          className={`p-4 rounded-xl text-sm border flex items-center gap-2.5 ${
            feedback.type === "success"
              ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400"
              : "bg-rose-500/10 border-rose-500/25 text-rose-400"
          }`}
        >
          <span>{feedback.message}</span>
        </div>
      )}

      {/* ─── Hero ─── */}
      <AccordionSection
        title="Hero Section"
        icon={<Megaphone className="w-4 h-4" />}
        isOpen={!!openSections["hero"]}
        onToggle={() => toggleSection("hero")}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <StringField
            label="Badge Text"
            value={content.hero.badge}
            onChange={(v) => updateField("hero", (h) => ({ ...h, badge: v }))}
            placeholder="Built for KTU"
          />
          <StringField
            label="Headline"
            value={content.hero.headline}
            onChange={(v) => updateField("hero", (h) => ({ ...h, headline: v }))}
            placeholder="Master the KTU Semester."
          />
        </div>
        <StringField
          label="Subtitle"
          value={content.hero.subtitle}
          onChange={(v) => updateField("hero", (h) => ({ ...h, subtitle: v }))}
          placeholder="Notes, PYQs, and syllabus tracking..."
          multiline
        />
        <StringField
          label="CTA Button Text"
          value={content.hero.ctaText}
          onChange={(v) => updateField("hero", (h) => ({ ...h, ctaText: v }))}
          placeholder="Open Dashboard"
        />

        <div className="space-y-2">
          <label className={labelClass}>Trust Badges</label>
          {content.hero.trustBadges.map((badge, idx) => (
            <div key={idx} className={`${subCardClass} flex items-end gap-2`}>
              <div className="flex-1 grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[9px] font-semibold text-gray-500 mb-0.5 uppercase">
                    Label
                  </label>
                  <input
                    type="text"
                    value={badge.label}
                    onChange={(e) => {
                      const next = [...content.hero.trustBadges];
                      next[idx] = { ...next[idx], label: e.target.value };
                      updateField("hero", (h) => ({ ...h, trustBadges: next }));
                    }}
                    placeholder="Free, always"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-semibold text-gray-500 mb-0.5 uppercase">
                    Value
                  </label>
                  <input
                    type="text"
                    value={badge.value}
                    onChange={(e) => {
                      const next = [...content.hero.trustBadges];
                      next[idx] = { ...next[idx], value: e.target.value };
                      updateField("hero", (h) => ({ ...h, trustBadges: next }));
                    }}
                    placeholder="Free"
                    className={inputClass}
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  const next = content.hero.trustBadges.filter((_, i) => i !== idx);
                  updateField("hero", (h) => ({ ...h, trustBadges: next }));
                }}
                className={removeBtnClass}
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              updateField("hero", (h) => ({
                ...h,
                trustBadges: [...h.trustBadges, { label: "", value: "" }],
              }))
            }
            className={addBtnClass}
          >
            <Plus className="w-3.5 h-3.5" /> Add Trust Badge
          </button>
        </div>
      </AccordionSection>

      {/* ─── Compare ─── */}
      <AccordionSection
        title="Comparison Section"
        icon={<BarChart className="w-4 h-4" />}
        isOpen={!!openSections["compare"]}
        onToggle={() => toggleSection("compare")}
        enabled={sections.compare}
        onToggleEnabled={() => toggleVisible("compare")}
        enabledLabel="Compare"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <StringField
            label="Badge Text"
            value={content.compare.badge}
            onChange={(v) => updateField("compare", (c) => ({ ...c, badge: v }))}
            placeholder="Before vs After"
          />
          <StringField
            label="Headline"
            value={content.compare.headline}
            onChange={(v) => updateField("compare", (c) => ({ ...c, headline: v }))}
            placeholder="From Chaos to Clarity."
          />
        </div>
        <StringField
          label="Description"
          value={content.compare.description}
          onChange={(v) => updateField("compare", (c) => ({ ...c, description: v }))}
          placeholder="Stop digging through dense..."
          multiline
        />
        <StringArrayField
          label="Bullet Points"
          items={content.compare.bullets}
          onChange={(bullets) => updateField("compare", (c) => ({ ...c, bullets }))}
          placeholder="Module-by-module structure"
        />
        <StringField
          label="CTA Button Text"
          value={content.compare.ctaText}
          onChange={(v) => updateField("compare", (c) => ({ ...c, ctaText: v }))}
          placeholder="Browse Notes"
        />
      </AccordionSection>

      {/* ─── How It Works ─── */}
      <AccordionSection
        title="How It Works"
        icon={<Type className="w-4 h-4" />}
        isOpen={!!openSections["howItWorks"]}
        onToggle={() => toggleSection("howItWorks")}
        enabled={sections.howItWorks}
        onToggleEnabled={() => toggleVisible("howItWorks")}
        enabledLabel="How It Works"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <StringField
            label="Badge Text"
            value={content.howItWorks.badge}
            onChange={(v) => updateField("howItWorks", (h) => ({ ...h, badge: v }))}
            placeholder="How it works"
          />
          <StringField
            label="Headline"
            value={content.howItWorks.headline}
            onChange={(v) => updateField("howItWorks", (h) => ({ ...h, headline: v }))}
            placeholder="Study smarter in 3 steps."
          />
        </div>
        <StringField
          label="Description"
          value={content.howItWorks.description}
          onChange={(v) => updateField("howItWorks", (h) => ({ ...h, description: v }))}
          placeholder="Instant access to exam-ready resources..."
          multiline
        />
        <StringField
          label="CTA Button Text"
          value={content.howItWorks.ctaText}
          onChange={(v) => updateField("howItWorks", (h) => ({ ...h, ctaText: v }))}
          placeholder="Start Now — It's Free"
        />

        <div className="space-y-2">
          <label className={labelClass}>Steps</label>
          {content.howItWorks.steps.map((step, idx) => (
            <div key={idx} className={subCardClass}>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">
                  Step #{idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const next = content.howItWorks.steps.filter((_, i) => i !== idx);
                    updateField("howItWorks", (h) => ({ ...h, steps: next }));
                  }}
                  className={removeBtnClass}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div>
                <label className="block text-[9px] font-semibold text-gray-500 mb-0.5 uppercase">
                  Title
                </label>
                <input
                  type="text"
                  value={step.title}
                  onChange={(e) => {
                    const next = [...content.howItWorks.steps];
                    next[idx] = { ...next[idx], title: e.target.value };
                    updateField("howItWorks", (h) => ({ ...h, steps: next }));
                  }}
                  placeholder="Pick branch & semester"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-[9px] font-semibold text-gray-500 mb-0.5 uppercase">
                  Description
                </label>
                <textarea
                  value={step.description}
                  onChange={(e) => {
                    const next = [...content.howItWorks.steps];
                    next[idx] = { ...next[idx], description: e.target.value };
                    updateField("howItWorks", (h) => ({ ...h, steps: next }));
                  }}
                  placeholder="Select CS, EC, ME, CE, or EE..."
                  rows={2}
                  className={textareaClass}
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              updateField("howItWorks", (h) => ({
                ...h,
                steps: [...h.steps, { title: "", description: "" }],
              }))
            }
            className={addBtnClass}
          >
            <Plus className="w-3.5 h-3.5" /> Add Step
          </button>
        </div>
      </AccordionSection>

      {/* ─── Founders ─── */}
      <AccordionSection
        title="Founders / Philosophy"
        icon={<Star className="w-4 h-4" />}
        isOpen={!!openSections["founders"]}
        onToggle={() => toggleSection("founders")}
        enabled={sections.foundree}
        onToggleEnabled={() => toggleVisible("foundree")}
        enabledLabel="Founders"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <StringField
            label="Badge Text"
            value={content.founders.badge}
            onChange={(v) => updateField("founders", (f) => ({ ...f, badge: v }))}
            placeholder="Our Philosophy"
          />
          <StringField
            label="Headline Prefix"
            value={content.founders.headlinePrefix}
            onChange={(v) => updateField("founders", (f) => ({ ...f, headlinePrefix: v }))}
            placeholder="Education should be an act of"
          />
        </div>
        <StringField
          label="Body Text"
          value={content.founders.body}
          onChange={(v) => updateField("founders", (f) => ({ ...f, body: v }))}
          placeholder="The chaos of unstructured materials..."
          multiline
          rows={3}
        />
        <StringArrayField
          label="Rotating Words"
          items={content.founders.rotatingWords}
          onChange={(rotatingWords) => updateField("founders", (f) => ({ ...f, rotatingWords }))}
          placeholder="clarity"
        />
        <StringField
          label="CTA Button Text"
          value={content.founders.ctaText}
          onChange={(v) => updateField("founders", (f) => ({ ...f, ctaText: v }))}
          placeholder="Start Studying Free"
        />

        <div className="space-y-2">
          <label className={labelClass}>Stats</label>
          {content.founders.stats.map((stat, idx) => (
            <div key={idx} className={`${subCardClass} flex items-end gap-2`}>
              <div className="flex-1 grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[9px] font-semibold text-gray-500 mb-0.5 uppercase">
                    Value
                  </label>
                  <input
                    type="text"
                    value={stat.value}
                    onChange={(e) => {
                      const next = [...content.founders.stats];
                      next[idx] = { ...next[idx], value: e.target.value };
                      updateField("founders", (f) => ({ ...f, stats: next }));
                    }}
                    placeholder="98%"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-semibold text-gray-500 mb-0.5 uppercase">
                    Label
                  </label>
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(e) => {
                      const next = [...content.founders.stats];
                      next[idx] = { ...next[idx], label: e.target.value };
                      updateField("founders", (f) => ({ ...f, stats: next }));
                    }}
                    placeholder="Exam Coverage"
                    className={inputClass}
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  const next = content.founders.stats.filter((_, i) => i !== idx);
                  updateField("founders", (f) => ({ ...f, stats: next }));
                }}
                className={removeBtnClass}
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              updateField("founders", (f) => ({
                ...f,
                stats: [...f.stats, { value: "", label: "" }],
              }))
            }
            className={addBtnClass}
          >
            <Plus className="w-3.5 h-3.5" /> Add Stat
          </button>
        </div>
      </AccordionSection>

      {/* ─── Features ─── */}
      <AccordionSection
        title="Features Section"
        icon={<Layout className="w-4 h-4" />}
        isOpen={!!openSections["features"]}
        onToggle={() => toggleSection("features")}
        enabled={sections.features}
        onToggleEnabled={() => toggleVisible("features")}
        enabledLabel="Features"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <StringField
            label="Badge Text"
            value={content.features.badge}
            onChange={(v) => updateField("features", (f) => ({ ...f, badge: v }))}
            placeholder="Features"
          />
          <StringField
            label="Headline"
            value={content.features.headline}
            onChange={(v) => updateField("features", (f) => ({ ...f, headline: v }))}
            placeholder="Everything you need to ace KTU."
          />
        </div>
        <StringField
          label="Description"
          value={content.features.description}
          onChange={(v) => updateField("features", (f) => ({ ...f, description: v }))}
          placeholder="Built specifically for the 2024 KTU scheme..."
          multiline
        />

        <div className="space-y-2">
          <label className={labelClass}>Feature Cards</label>
          {content.features.cards.map((card, idx) => (
            <div key={idx} className={subCardClass}>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">
                  Card #{idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const next = content.features.cards.filter((_, i) => i !== idx);
                    updateField("features", (f) => ({ ...f, cards: next }));
                  }}
                  className={removeBtnClass}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div>
                <label className="block text-[9px] font-semibold text-gray-500 mb-0.5 uppercase">
                  Title
                </label>
                <input
                  type="text"
                  value={card.title}
                  onChange={(e) => {
                    const next = [...content.features.cards];
                    next[idx] = { ...next[idx], title: e.target.value };
                    updateField("features", (f) => ({ ...f, cards: next }));
                  }}
                  placeholder="Chapter-wise Notes"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-[9px] font-semibold text-gray-500 mb-0.5 uppercase">
                  Description
                </label>
                <textarea
                  value={card.description}
                  onChange={(e) => {
                    const next = [...content.features.cards];
                    next[idx] = { ...next[idx], description: e.target.value };
                    updateField("features", (f) => ({ ...f, cards: next }));
                  }}
                  placeholder="Syllabus topics stripped of filler..."
                  rows={2}
                  className={textareaClass}
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              updateField("features", (f) => ({
                ...f,
                cards: [...f.cards, { title: "", description: "" }],
              }))
            }
            className={addBtnClass}
          >
            <Plus className="w-3.5 h-3.5" /> Add Feature Card
          </button>
        </div>

        <div className="border-t border-white/5 pt-4 mt-4 space-y-3">
          <label className="block text-[10px] font-bold text-gray-300 uppercase tracking-wider">
            Zero Friction Block
          </label>
          <StringField
            label="Title"
            value={content.features.zeroFrictionTitle}
            onChange={(v) => updateField("features", (f) => ({ ...f, zeroFrictionTitle: v }))}
            placeholder="No Accounts. No payments. Just learn."
          />
          <StringField
            label="Description"
            value={content.features.zeroFrictionDescription}
            onChange={(v) =>
              updateField("features", (f) => ({ ...f, zeroFrictionDescription: v }))
            }
            placeholder="We believe learning resources should be open..."
            multiline
          />
          <StringField
            label="Launch CTA Text"
            value={content.features.launchCtaText}
            onChange={(v) => updateField("features", (f) => ({ ...f, launchCtaText: v }))}
            placeholder="Skip Signup & Launch"
          />
        </div>
      </AccordionSection>

      {/* ─── Testimonials ─── */}
      <AccordionSection
        title="Testimonials"
        icon={<MessageSquare className="w-4 h-4" />}
        isOpen={!!openSections["testimonials"]}
        onToggle={() => toggleSection("testimonials")}
        enabled={sections.testimonials}
        onToggleEnabled={() => toggleVisible("testimonials")}
        enabledLabel="Testimonials"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <StringField
            label="Badge Text"
            value={content.testimonials.badge}
            onChange={(v) => updateField("testimonials", (t) => ({ ...t, badge: v }))}
            placeholder="Loved by students"
          />
          <StringField
            label="Headline"
            value={content.testimonials.headline}
            onChange={(v) => updateField("testimonials", (t) => ({ ...t, headline: v }))}
            placeholder="Loved by KTU students."
          />
        </div>
        <StringField
          label="Description"
          value={content.testimonials.description}
          onChange={(v) => updateField("testimonials", (t) => ({ ...t, description: v }))}
          placeholder="KTU students across every branch..."
          multiline
        />

        <div className="space-y-2">
          <label className={labelClass}>Testimonial Entries</label>
          {content.testimonials.entries.map((entry, idx) => (
            <div key={idx} className={subCardClass}>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">
                  Testimonial #{idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const next = content.testimonials.entries.filter((_, i) => i !== idx);
                    updateField("testimonials", (t) => ({ ...t, entries: next }));
                  }}
                  className={removeBtnClass}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-[9px] font-semibold text-gray-500 mb-0.5 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    value={entry.name}
                    onChange={(e) => {
                      const next = [...content.testimonials.entries];
                      next[idx] = { ...next[idx], name: e.target.value };
                      updateField("testimonials", (t) => ({ ...t, entries: next }));
                    }}
                    placeholder="Arjun Menon"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-semibold text-gray-500 mb-0.5 uppercase">
                    Branch
                  </label>
                  <input
                    type="text"
                    value={entry.branch}
                    onChange={(e) => {
                      const next = [...content.testimonials.entries];
                      next[idx] = { ...next[idx], branch: e.target.value };
                      updateField("testimonials", (t) => ({ ...t, entries: next }));
                    }}
                    placeholder="Computer Science — Sem 6"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-[9px] font-semibold text-gray-500 mb-0.5 uppercase">
                    Rating (1-5)
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={5}
                    value={entry.rating}
                    onChange={(e) => {
                      const next = [...content.testimonials.entries];
                      next[idx] = {
                        ...next[idx],
                        rating: Math.max(1, Math.min(5, parseInt(e.target.value) || 5)),
                      };
                      updateField("testimonials", (t) => ({ ...t, entries: next }));
                    }}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-semibold text-gray-500 mb-0.5 uppercase">
                    Color Theme
                  </label>
                  <select
                    value={entry.color}
                    onChange={(e) => {
                      const next = [...content.testimonials.entries];
                      next[idx] = { ...next[idx], color: e.target.value };
                      updateField("testimonials", (t) => ({ ...t, entries: next }));
                    }}
                    className={inputClass}
                  >
                    <option value="blue">Blue</option>
                    <option value="violet">Violet</option>
                    <option value="emerald">Emerald</option>
                    <option value="amber">Amber</option>
                    <option value="rose">Rose</option>
                    <option value="cyan">Cyan</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[9px] font-semibold text-gray-500 mb-0.5 uppercase">
                  Quote
                </label>
                <input
                  type="text"
                  value={entry.quote}
                  onChange={(e) => {
                    const next = [...content.testimonials.entries];
                    next[idx] = { ...next[idx], quote: e.target.value };
                    updateField("testimonials", (t) => ({ ...t, entries: next }));
                  }}
                  placeholder="KTUNODE replaced all my PDF chaos."
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-[9px] font-semibold text-gray-500 mb-0.5 uppercase">
                  Review Text
                </label>
                <textarea
                  value={entry.text}
                  onChange={(e) => {
                    const next = [...content.testimonials.entries];
                    next[idx] = { ...next[idx], text: e.target.value };
                    updateField("testimonials", (t) => ({ ...t, entries: next }));
                  }}
                  placeholder="The module-wise structure makes it so easy..."
                  rows={2}
                  className={textareaClass}
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              updateField("testimonials", (t) => ({
                ...t,
                entries: [
                  ...t.entries,
                  {
                    name: "",
                    branch: "",
                    rating: 5,
                    quote: "",
                    text: "",
                    color: "blue",
                  },
                ],
              }))
            }
            className={addBtnClass}
          >
            <Plus className="w-3.5 h-3.5" /> Add Testimonial
          </button>
        </div>
      </AccordionSection>

      {/* ─── CTA ─── */}
      <AccordionSection
        title="Call to Action"
        icon={<Megaphone className="w-4 h-4" />}
        isOpen={!!openSections["cta"]}
        onToggle={() => toggleSection("cta")}
        enabled={sections.cta}
        onToggleEnabled={() => toggleVisible("cta")}
        enabledLabel="CTA"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <StringField
            label="Badge Text"
            value={content.cta.badge}
            onChange={(v) => updateField("cta", (c) => ({ ...c, badge: v }))}
            placeholder="Free for all KTU students"
          />
          <StringField
            label="Headline"
            value={content.cta.headline}
            onChange={(v) => updateField("cta", (c) => ({ ...c, headline: v }))}
            placeholder="Ready to ace your next semester?"
          />
        </div>
        <StringField
          label="Description"
          value={content.cta.description}
          onChange={(v) => updateField("cta", (c) => ({ ...c, description: v }))}
          placeholder="Structured notes, real PYQs..."
          multiline
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <StringField
            label="Primary CTA"
            value={content.cta.primaryCta}
            onChange={(v) => updateField("cta", (c) => ({ ...c, primaryCta: v }))}
            placeholder="Open Dashboard"
          />
          <StringField
            label="Secondary CTA"
            value={content.cta.secondaryCta}
            onChange={(v) => updateField("cta", (c) => ({ ...c, secondaryCta: v }))}
            placeholder="Browse Notes"
          />
        </div>

        <div className="space-y-2">
          <label className={labelClass}>Stats</label>
          {content.cta.stats.map((stat, idx) => (
            <div key={idx} className={`${subCardClass} flex items-end gap-2`}>
              <div className="flex-1 grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[9px] font-semibold text-gray-500 mb-0.5 uppercase">
                    Value
                  </label>
                  <input
                    type="text"
                    value={stat.value}
                    onChange={(e) => {
                      const next = [...content.cta.stats];
                      next[idx] = { ...next[idx], value: e.target.value };
                      updateField("cta", (c) => ({ ...c, stats: next }));
                    }}
                    placeholder="Free"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-semibold text-gray-500 mb-0.5 uppercase">
                    Label
                  </label>
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(e) => {
                      const next = [...content.cta.stats];
                      next[idx] = { ...next[idx], label: e.target.value };
                      updateField("cta", (c) => ({ ...c, stats: next }));
                    }}
                    placeholder="Always free"
                    className={inputClass}
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  const next = content.cta.stats.filter((_, i) => i !== idx);
                  updateField("cta", (c) => ({ ...c, stats: next }));
                }}
                className={removeBtnClass}
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              updateField("cta", (c) => ({
                ...c,
                stats: [...c.stats, { value: "", label: "" }],
              }))
            }
            className={addBtnClass}
          >
            <Plus className="w-3.5 h-3.5" /> Add Stat
          </button>
        </div>
      </AccordionSection>

      {/* ─── Footer ─── */}
      <AccordionSection
        title="Footer"
        icon={<BarChart className="w-4 h-4" />}
        isOpen={!!openSections["footer"]}
        onToggle={() => toggleSection("footer")}
      >
        <StringField
          label="Heading"
          value={content.footer.heading}
          onChange={(v) => updateField("footer", (f) => ({ ...f, heading: v }))}
          placeholder="Ace KTU Exams with KTU Node."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <StringField
            label="Attribution Text"
            value={content.footer.attribution}
            onChange={(v) => updateField("footer", (f) => ({ ...f, attribution: v }))}
            placeholder="Built by foundree.dev"
          />
          <StringField
            label="Attribution URL"
            value={content.footer.attributionUrl}
            onChange={(v) => updateField("footer", (f) => ({ ...f, attributionUrl: v }))}
            placeholder="https://foundree.dev"
          />
        </div>
        <StringArrayField
          label="Marquee Items"
          items={content.footer.marquee}
          onChange={(marquee) => updateField("footer", (f) => ({ ...f, marquee }))}
          placeholder="2024 SCHEME UPDATED"
        />
      </AccordionSection>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition disabled:opacity-50 cursor-pointer active:scale-[0.98] shadow-md shadow-blue-950/20"
        >
          <Save className="w-4 h-4" />
          {isPending ? "Saving..." : "Save All Changes"}
        </button>
      </div>
    </form>
  );
}
