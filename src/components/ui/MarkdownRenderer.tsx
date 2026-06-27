"use client";

import React from "react";
import DOMPurify from "dompurify";
import dynamic from "next/dynamic";
import { LayoutList, ChevronLeft, ChevronRight, Check } from "lucide-react";

const MermaidRenderer = dynamic(() => import("./MermaidRenderer"), {
  loading: () => <div className="animate-pulse h-40 bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl flex items-center justify-center text-xs text-slate-400 font-medium">Loading diagram engine...</div>,
  ssr: false
});

function sanitize(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ["b", "i", "em", "strong", "code", "br", "sup", "sub", "span", "div", "pre", "p", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "li", "blockquote", "table", "thead", "tbody", "tr", "th", "td", "a", "img", "hr"],
    ALLOWED_ATTR: ["class", "href", "src", "alt", "title", "colspan", "rowspan", "align", "valign"],
  });
}

function getEmojiIcon(emoji: string): React.ReactNode | null {
  switch (emoji) {
    case "✅":
      return (
        <span className="inline-flex items-center justify-center shrink-0 align-middle mx-1 w-4 h-4 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
      );
    case "⚡":
      return (
        <span className="inline-flex items-center justify-center shrink-0 align-middle mx-1 w-4 h-4 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </span>
      );
    case "⚠️":
      return (
        <span className="inline-flex items-center justify-center shrink-0 align-middle mx-1 w-4 h-4 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </span>
      );
    case "❌":
      return (
        <span className="inline-flex items-center justify-center shrink-0 align-middle mx-1 w-4 h-4 rounded bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      );
    case "💀":
      return (
        <span className="inline-flex items-center justify-center shrink-0 align-middle mx-1 w-4.5 h-4.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-650 dark:text-slate-400">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C7.03 2 3 6.03 3 11c0 2.48 1.01 4.73 2.65 6.35C6.54 18.23 7.82 19.5 9 20v2h6v-2c1.18-.5 2.46-1.77 3.35-2.65C19.99 15.73 21 13.48 21 11c0-4.97-4.03-9-9-9zm-3 8a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm5 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
        </span>
      );
    case "💡":
      return (
        <span className="inline-flex items-center justify-center shrink-0 align-middle mx-1 w-4 h-4 rounded bg-yellow-100 dark:bg-yellow-950/60 text-yellow-600 dark:text-yellow-400">
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 10.5a3 3 0 116 0v.75H9v-.75z" />
          </svg>
        </span>
      );
    case "🔍":
      return (
        <span className="inline-flex items-center justify-center shrink-0 align-middle mx-1 w-4 h-4 rounded bg-slate-100 dark:bg-slate-800 text-slate-655 dark:text-slate-405">
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
      );
    case "📌":
      return (
        <span className="inline-flex items-center justify-center shrink-0 align-middle mx-1 w-4 h-4 rounded bg-blue-100 dark:bg-blue-955/60 text-blue-600 dark:text-blue-400">
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </span>
      );
    case "🎯":
      return (
        <span className="inline-flex items-center justify-center shrink-0 align-middle mx-1 w-4 h-4 rounded bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400">
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        </span>
      );
    case "🚀":
      return (
        <span className="inline-flex items-center justify-center shrink-0 align-middle mx-1 w-4 h-4 rounded bg-indigo-100 dark:bg-indigo-950/60 text-indigo-650 dark:text-indigo-400">
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 0M12 14.25a15 15 0 00-3.3-7.5m6.6 0a15 15 0 00-3.3 7.5M10.25 21.75L12 20.25l1.75 1.5M10.25 18H13.75" />
          </svg>
        </span>
      );
    case "📝":
    case "✏️":
      return (
        <span className="inline-flex items-center justify-center shrink-0 align-middle mx-1 w-4 h-4 rounded bg-sky-100 dark:bg-sky-955/60 text-sky-600 dark:text-sky-400">
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        </span>
      );
    default:
      return null;
  }
}

function processEmojiText(text: string): React.ReactNode[] {
  const emojiRegex = /(✅|⚡|⚠️|❌|💀|💡|🔍|📌|🎯|🚀|📝|✏️)/g;
  const parts = text.split(emojiRegex);
  if (parts.length === 1) return [text];

  return parts.map((part, idx) => {
    if (idx % 2 === 0) {
      return part;
    }
    return <React.Fragment key={idx}>{getEmojiIcon(part) || part}</React.Fragment>;
  });
}

interface MarkdownRendererProps {
  content: string;
  stripH1?: boolean;
  /** When true and the note has multiple H2 sections, show one section at a
   *  time with a progress bar and Prev/Next navigation (mobile-friendly). */
  paged?: boolean;
}

type Block =
  | { type: "h2"; text: string; level: number }
  | { type: "h3"; text: string }
  | { type: "hr" }
  | { type: "blockquote"; lines: string[]; alertType?: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "list"; items: ListNode[] }
  | { type: "p"; text: string }
  | { type: "math"; text: string }
  | { type: "code"; language: string; code: string };

interface ListNode {
  type: "ul" | "ol";
  indent: number;
  text: string;
  children: ListNode[];
}

interface ListBlockItem {
  type: "ul" | "ol";
  indent: number;
  text: string;
}

// Replace a LaTeX command that takes one brace-delimited argument, respecting
// nested braces (e.g. \boxed{\frac{a}{b}}). `render` receives the raw inner text.
function replaceBalancedCommand(
  input: string,
  command: string,
  render: (inner: string) => string
): string {
  const token = `\\${command}{`;
  let result = "";
  let i = 0;
  while (i < input.length) {
    const idx = input.indexOf(token, i);
    if (idx === -1) {
      result += input.slice(i);
      break;
    }
    result += input.slice(i, idx);
    let depth = 1;
    let j = idx + token.length;
    let inner = "";
    while (j < input.length && depth > 0) {
      const ch = input[j];
      if (ch === "{") depth++;
      else if (ch === "}") {
        depth--;
        if (depth === 0) break;
      }
      inner += ch;
      j++;
    }
    result += render(inner);
    i = j + 1;
  }
  return result;
}

function formatMathHTML(latex: string): string {
  let html = latex;

  // Multi-line / aligned environments: render each row on its own line,
  // dropping the `&` alignment markers (we center instead of column-align).
  html = html.replace(
    /\\begin\{(aligned|align\*?|alignat\*?|gathered|gather\*?|cases|split|array)\}(?:\{[^{}]*\})?([\s\S]+?)\\end\{\1\}/g,
    (_match: string, _env: string, body: string) => {
      const rows = body
        .split("\\\\")
        .map((row: string) => formatMathHTML(row.replace(/&/g, " ").trim()))
        .filter((row: string) => row.length > 0);
      return `<span class="inline-flex flex-col items-center gap-y-1.5 align-middle my-1">${rows
        .map((r: string) => `<span class="leading-tight">${r}</span>`)
        .join("")}</span>`;
    }
  );

  // Boxed expressions \boxed{...} -> bordered highlight (balanced braces)
  html = replaceBalancedCommand(
    html,
    "boxed",
    (inner) =>
      `<span class="inline-block border-2 border-slate-300 dark:border-slate-600 bg-slate-50/60 dark:bg-slate-900/40 rounded-lg px-3 py-1.5 my-1 font-semibold">${formatMathHTML(
        inner
      )}</span>`
  );

  // Labeled arrows: \xrightarrow[below]{above} and \xleftarrow[below]{above}
  html = html.replace(
    /\\(xrightarrow|xleftarrow)(?:\[([^\]]*)\])?\{([^{}]*)\}/g,
    (_m: string, dir: string, below: string | undefined, above: string) => {
      const arrow = dir === "xleftarrow" ? "←" : "→";
      const top = above ? formatMathHTML(above) : "";
      const bot = below ? formatMathHTML(below) : "";
      return `<span class="inline-flex flex-col items-center align-middle mx-1.5 leading-none"><span class="text-[0.6em] pb-0.5">${top}</span><span class="text-[1.1em]">${arrow}</span>${
        bot ? `<span class="text-[0.6em] pt-0.5">${bot}</span>` : ""
      }</span>`;
    }
  );

  // Clean up bracket auto-sizing
  html = html.replaceAll("\\left(", "(");
  html = html.replaceAll("\\right)", ")");
  html = html.replaceAll("\\left[", "[");
  html = html.replaceAll("\\right]", "]");
  html = html.replaceAll("\\left\\{", "{");
  html = html.replaceAll("\\right\\}", "}");
  html = html.replaceAll("\\left|", "|");
  html = html.replaceAll("\\right|", "|");
  html = html.replace(/\\left/g, "");
  html = html.replace(/\\right/g, "");

  // Handle matrix environments: pmatrix, bmatrix, vmatrix, matrix
  const matrixRegex = /\\begin\{(pmatrix|bmatrix|vmatrix|matrix)\}([\s\S]+?)\\end\{\1\}/g;
  html = html.replace(matrixRegex, (match: string, type: string, content: string) => {
    const rows = content.split("\\\\").map((row: string) => row.trim()).filter((row: string) => row.length > 0);
    if (rows.length === 0) return "";
    
    const grid: string[][] = rows.map((row: string) => row.split("&").map((cell: string) => cell.trim()));
    const numCols = Math.max(...grid.map((r: string[]) => r.length));
    
    const cellsHtml = grid.map((r: string[]) => 
      r.map((cell: string) => `<span class="px-0.5">${formatMathHTML(cell)}</span>`).join("")
    ).join("");
    
    let borderClass = "";
    if (type === "pmatrix") {
      borderClass = "border-l-2 border-r-2 border-slate-800 dark:border-slate-200 rounded-xl px-1.5 py-1";
    } else if (type === "bmatrix") {
      borderClass = "border-l border-r border-t border-b border-slate-800 dark:border-slate-200 px-1.5 py-1";
    } else if (type === "vmatrix") {
      borderClass = "border-l border-r border-slate-800 dark:border-slate-200 px-1 py-1";
    } else {
      borderClass = "px-1 py-1";
    }
    
    return `<span class="inline-flex items-center align-middle mx-1 ${borderClass}"><span class="grid gap-x-2 gap-y-1 text-center font-mono text-[0.85em] leading-none" style="grid-template-columns: repeat(${numCols}, minmax(0, auto));">${cellsHtml}</span></span>`;
  });

  // Replace fractions \frac{a}{b} recursively
  while (html.includes("\\frac{")) {
    const prev = html;
    html = html.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, 
      '<span class="inline-flex flex-col align-middle text-center mx-0.5"><span class="border-b border-slate-300 dark:border-slate-600 px-1 pb-0.5 text-[0.75em] leading-none">$1</span><span class="px-1 pt-0.5 text-[0.75em] leading-none">$2</span></span>'
    );
    if (html === prev) break;
  }

  // Replace binomial coefficients \binom{n}{k}
  html = html.replace(/\\binom\{([^{}]+)\}\{([^{}]+)\}/g,
    '<span class="inline-flex items-center align-middle mx-0.5"><span class="text-base font-normal leading-none">(</span><span class="inline-flex flex-col text-center px-0.5"><span class="text-[0.7em] leading-none">$1</span><span class="text-[0.7em] leading-none mt-0.5">$2</span></span><span class="text-base font-normal leading-none">)</span></span>'
  );

  // Replace square roots \sqrt{x} recursively
  while (html.includes("\\sqrt{")) {
    const prev = html;
    html = html.replace(/\\sqrt\{([^{}]+)\}/g,
      '<span class="whitespace-nowrap">√<span class="border-t border-slate-700 dark:border-slate-300 px-0.5">$1</span></span>'
    );
    if (html === prev) break;
  }

  // Replace common LaTeX symbols
  const replacements: Record<string, string> = {
    "\\alpha": "α", "\\beta": "β", "\\gamma": "γ", "\\delta": "δ",
    "\\epsilon": "ε", "\\zeta": "ζ", "\\eta": "η", "\\theta": "θ",
    "\\iota": "ι", "\\kappa": "κ", "\\lambda": "λ", "\\mu": "μ",
    "\\nu": "ν", "\\xi": "ξ", "\\pi": "π", "\\rho": "ρ",
    "\\sigma": "σ", "\\tau": "τ", "\\phi": "φ", "\\chi": "χ",
    "\\psi": "ψ", "\\omega": "ω", "\\Delta": "Δ", "\\Sigma": "Σ",
    "\\Omega": "Ω", "\\times": "×", "\\cdot": "·", "\\div": "÷",
    "\\pm": "±", "\\mp": "∓", "\\le": "≤", "\\ge": "≥",
    "\\ne": "≠", "\\approx": "≈", "\\infty": "∞", "\\sum": "∑",
    "\\prod": "∏", "\\int": "∫", "\\partial": "∂", "\\nabla": "∇",
    "\\rightarrow": "→", "\\leftarrow": "←", "\\Rightarrow": "⇒",
    "\\Leftarrow": "⇐", "\\leftrightarrow": "↔", "\\Leftrightarrow": "⇔",
    "\\forall": "∀", "\\exists": "∃", "\\in": "∈", "\\notin": "∉",
    "\\subset": "⊂", "\\subseteq": "⊆", "\\union": "∪", "\\cap": "∩",
    "\\to": "→", "\\implies": "⇒", "\\geq": "≥", "\\leq": "≤",
    "\\neq": "≠", "\\cdots": "···", "\\ldots": "…", "\\circ": "◦",
    "\\vdots": "⋮", "\\ddots": "⋱", "\\sim": "∼", "\\hbar": "ℏ",
    "\\sin": "sin", "\\cos": "cos", "\\tan": "tan", "\\log": "log",
    "\\ln": "ln", "\\lim": "lim", "\\arg": "arg", "\\sec": "sec",
    "\\csc": "csc", "\\cot": "cot", "\\sinh": "sinh", "\\cosh": "cosh",
    "\\tanh": "tanh", "\\det": "det", "\\arcsin": "arcsin",
    "\\arccos": "arccos", "\\arctan": "arctan"
  };

  // Replace slash commands
  Object.keys(replacements).forEach(key => {
    html = html.replaceAll(key, replacements[key]);
  });

  // Handle standard font decoration commands
  const blackboardBold: Record<string, string> = {
    R: "ℝ", Z: "ℤ", N: "ℕ", Q: "ℚ", C: "ℂ", P: "ℙ", E: "𝔼"
  };
  html = html.replace(/\\mathbb\{([A-Z])\}/g, (_, l) => blackboardBold[l] || l);
  html = html.replace(/\\mathbf\{([^{}]+)\}/g, '<strong class="font-bold">$1</strong>');
  html = html.replace(/\\mathcal\{([^{}]+)\}/g, '<span class="font-serif italic">$1</span>');
  html = html.replace(/\\underline\{([^{}]+)\}/g, '<span class="underline">$1</span>');
  html = html.replace(/\\text\{([^{}]+)\}/g, '<span class="font-sans font-normal">$1</span>');
  html = html.replace(/\\boldsymbol\{([^{}]+)\}/g, '<strong class="font-extrabold">$1</strong>');
  html = html.replaceAll("\\qquad", '<span class="mx-3"></span>');
  html = html.replaceAll("\\quad", '<span class="mx-2"></span>');
  // Thin / medium spacing commands
  html = html.replace(/\\[,;:]/g, '<span class="mx-0.5"></span>');
  html = html.replace(/\\!/g, "");

  // Handle bar, hat, vec
  html = html.replace(/\\bar\{([^{}]+)\}/g, '<span class="overline">$1</span>');
  html = html.replace(/\\overline\{([^{}]+)\}/g, '<span class="overline">$1</span>');
  html = html.replace(/\\hat\{([^{}]+)\}/g, '<span class="relative inline-block"><span class="absolute -top-1.5 left-0 right-0 text-center text-[0.6em] leading-none">^</span>$1</span>');
  html = html.replace(/\\hat\s+([a-zA-Z0-9])/g, '<span class="relative inline-block"><span class="absolute -top-1.5 left-0 right-0 text-center text-[0.6em] leading-none">^</span>$1</span>');
  html = html.replace(/\\vec\{([^{}]+)\}/g, '<span class="relative inline-block"><span class="absolute -top-1.5 left-0 right-0 text-center text-[0.55em] leading-none">→</span>$1</span>');
  html = html.replace(/\\vec\s+([a-zA-Z0-9])/g, '<span class="relative inline-block"><span class="absolute -top-1.5 left-0 right-0 text-center text-[0.55em] leading-none">→</span>$1</span>');

  // Handle superscripts ^{...} and ^x
  html = html.replace(/\^\{([^}]+)\}/g, "<sup>$1</sup>");
  html = html.replace(/\^([a-zA-Z0-9+-=]+)/g, "<sup>$1</sup>");

  // Handle subscripts _{...} and _x
  html = html.replace(/_\{([^}]+)\}/g, "<sub>$1</sub>");
  html = html.replace(/_([a-zA-Z0-9+-=]+)/g, "<sub>$1</sub>");

  return html;
}

function MathSpan({ latex, block = false }: { latex: string; block?: boolean }) {
  const formatted = sanitize(formatMathHTML(latex));
  if (block) {
    return (
      <div 
        onPointerDownCapture={(e) => e.stopPropagation()}
        onTouchStartCapture={(e) => e.stopPropagation()}
        className="my-3 md:my-5 text-center font-serif text-base md:text-lg text-slate-900 dark:text-slate-100 py-3 md:py-5 px-4 md:px-8 bg-slate-50/20 dark:bg-slate-950/20 border-y border-slate-100 dark:border-slate-800/60 overflow-x-auto max-w-full leading-relaxed select-all"
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    );
  }
  return (
    <span 
      className="font-serif italic text-[1.05em] antialiased text-slate-900 dark:text-slate-100 mx-0.5 whitespace-nowrap"
      dangerouslySetInnerHTML={{ __html: formatted }}
    />
  );
}

function parseInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Match **bold**, *italic*, `code`, $$math$$, $math$, ![alt](src), <sup>sup</sup>, and <sub>sub</sub>
  const regex = /(\*\*([\s\S]+?)\*\*|\*([\s\S]+?)\*|`([\s\S]+?)`|\$\$([\s\S]+?)\$\$|\$([\s\S]+?)\$|!\[([\s\S]*?)\]\((.+?)\)|<sup>([\s\S]+?)<\/sup>|<sub>([\s\S]+?)<\/sub>)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(...processEmojiText(text.slice(lastIndex, match.index)));
    }
    if (match[2]) {
      nodes.push(<strong key={match.index} className="font-black text-slate-900 dark:text-slate-100">{parseInline(match[2])}</strong>);
    } else if (match[3]) {
      nodes.push(<em key={match.index} className="italic text-slate-700 dark:text-slate-300">{parseInline(match[3])}</em>);
    } else if (match[4]) {
      nodes.push(
        <code 
          key={match.index} 
          className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-mono font-semibold"
          dangerouslySetInnerHTML={{ __html: sanitize(match[4]) }}
        />
      );
    } else if (match[5]) {
      // Block math ($$...$$) inline
      nodes.push(<MathSpan key={match.index} latex={match[5]} block />);
    } else if (match[6]) {
      // Inline math ($...$)
      nodes.push(<MathSpan key={match.index} latex={match[6]} />);
    } else if (match[7] && match[8]) {
      // Image ![alt](src)
      nodes.push(
        <span key={match.index} className="block my-6 text-center max-w-full">
          {/* Markdown notes can reference arbitrary remote images without known dimensions. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={match[8]} 
            alt={match[7]} 
            className="mx-auto rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-800 max-h-[400px] object-contain bg-white dark:bg-slate-950 p-2"
          />
          {match[7] && (
            <span className="block mt-2.5 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-center">
              {match[7]}
            </span>
          )}
        </span>
      );
    } else if (match[9]) {
      // Superscript <sup>...</sup>
      nodes.push(<sup key={match.index} className="text-xs">{parseInline(match[9])}</sup>);
    } else if (match[10]) {
      // Subscript <sub>...</sub>
      nodes.push(<sub key={match.index} className="text-xs">{parseInline(match[10])}</sub>);
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(...processEmojiText(text.slice(lastIndex)));
  }

  return nodes;
}

const listItemRegex = /^(\s*)([-*+]|\d+\.)\s+(.*)$/;

function buildListTree(items: ListBlockItem[]): ListNode[] {
  const rootNodes: ListNode[] = [];
  const stack: ListNode[] = [];

  for (const item of items) {
    const node: ListNode = {
      type: item.type,
      indent: item.indent,
      text: item.text,
      children: []
    };

    while (stack.length > 0 && stack[stack.length - 1].indent >= item.indent) {
      stack.pop();
    }

    if (stack.length === 0) {
      rootNodes.push(node);
    } else {
      stack[stack.length - 1].children.push(node);
    }

    stack.push(node);
  }

  return rootNodes;
}

function parseBlocks(content: string): Block[] {
  const lines = content.split("\n").map(l => l.replace(/\r$/, ""));
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Empty line - skip
    if (line.trim() === "") {
      i++;
      continue;
    }

    // HTML Comment - skip
    if (line.trim().startsWith("<!--") && line.trim().endsWith("-->")) {
      i++;
      continue;
    }

    // Horizontal rule
    if (/^---+$/.test(line.trim())) {
      blocks.push({ type: "hr" });
      i++;
      continue;
    }

    // Headings (H1-H6)
    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      if (level <= 2) {
        blocks.push({ type: "h2", text, level });
      } else {
        blocks.push({ type: "h3", text });
      }
      i++;
      continue;
    }

    // Code Block
    if (line.trim().startsWith("```")) {
      const language = line.trim().substring(3).trim();
      const codeLines: string[] = [];
      i++; // Skip starting backticks
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // Skip closing backticks
      blocks.push({ type: "code", language, code: codeLines.join("\n") });
      continue;
    }

    // Block math ($$...$$)
    if (line.trim().startsWith("$$")) {
      const mathLines: string[] = [];
      if (line.trim() !== "$$") {
        // Single line math: $$content$$
        const singleMatch = line.trim().match(/^\$\$(.+)\$\$$/);
        if (singleMatch) {
          blocks.push({ type: "math", text: singleMatch[1] });
          i++;
          continue;
        }
      }
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("$$")) {
        mathLines.push(lines[i]);
        i++;
      }
      i++; // skip closing $$
      blocks.push({ type: "math", text: mathLines.join("\n") });
      continue;
    }

    // Blockquote
    if (line.startsWith(">")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith(">")) {
        quoteLines.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      
      // Check for alert style
      let alertType: string | undefined = undefined;
      if (quoteLines.length > 0) {
        const firstLine = quoteLines[0].trim();
        const alertMatch = firstLine.match(/^\[!(NOTE|INFO|TIP|IMPORTANT|WARNING|CAUTION)\]$/i);
        if (alertMatch) {
          alertType = alertMatch[1].toUpperCase();
          quoteLines.shift(); // Remove the [!TYPE] line from lines to be rendered
        }
      }
      
      blocks.push({ type: "blockquote", lines: quoteLines, alertType } as any);
      continue;
    }

    // Table
    if (line.includes("|") && i + 1 < lines.length && /^\|?[\s-:|]+\|?$/.test(lines[i + 1])) {
      let cleanHeaderLine = line.trim();
      if (cleanHeaderLine.startsWith("|")) cleanHeaderLine = cleanHeaderLine.substring(1);
      if (cleanHeaderLine.endsWith("|")) cleanHeaderLine = cleanHeaderLine.substring(0, cleanHeaderLine.length - 1);
      const headers = cleanHeaderLine.split("|").map(c => c.trim());

      i += 2; // skip header and separator
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes("|") && lines[i].trim() !== "") {
        let cleanRowLine = lines[i].trim();
        if (cleanRowLine.startsWith("|")) cleanRowLine = cleanRowLine.substring(1);
        if (cleanRowLine.endsWith("|")) cleanRowLine = cleanRowLine.substring(0, cleanRowLine.length - 1);
        rows.push(cleanRowLine.split("|").map(c => c.trim()));
        i++;
      }
      blocks.push({ type: "table", headers, rows });
      continue;
    }

    // List block
    if (listItemRegex.test(line)) {
      const listItems: ListBlockItem[] = [];
      while (i < lines.length) {
        const currentLine = lines[i];

        if (currentLine.trim() === "") {
          let nextListIdx = i + 1;
          while (nextListIdx < lines.length && lines[nextListIdx].trim() === "") {
            nextListIdx++;
          }
          if (nextListIdx < lines.length && listItemRegex.test(lines[nextListIdx])) {
            i = nextListIdx;
            continue;
          } else {
            break;
          }
        }

        const match = listItemRegex.exec(currentLine);
        if (!match) {
          if (currentLine.startsWith(" ") && listItems.length > 0) {
            listItems[listItems.length - 1].text += " " + currentLine.trim();
            i++;
            continue;
          }
          break;
        }

        const indent = match[1].length;
        const marker = match[2];
        const text = match[3].trim();
        const type = marker.endsWith(".") ? "ol" : "ul";

        listItems.push({ type, indent, text });
        i++;
      }

      blocks.push({ type: "list", items: buildListTree(listItems) });
      continue;
    }

    // Paragraph (collect consecutive non-empty lines)
    const paraLines: string[] = [];
    while (
      i < lines.length && 
      lines[i].trim() !== "" && 
      !lines[i].trim().startsWith("<!--") && 
      !/^(#{1,6})\s/.test(lines[i]) && 
      !lines[i].startsWith(">") && 
      !listItemRegex.test(lines[i]) && 
      !/^---+$/.test(lines[i].trim()) && 
      !lines[i].trim().startsWith("$$") && 
      !lines[i].trim().startsWith("```") && 
      !(lines[i].includes("|") && i + 1 < lines.length && /^\|?[\s-:|]+\|?$/.test(lines[i + 1] || ""))
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      blocks.push({ type: "p", text: paraLines.join(" ") });
    }
  }

  return blocks;
}

function renderList(nodes: ListNode[]) {
  if (nodes.length === 0) return null;

  const elements: React.ReactNode[] = [];
  let currentGroup: { type: "ul" | "ol"; items: ListNode[] } | null = null;

  const flushGroup = (key: string | number) => {
    if (!currentGroup) return;
    const { type, items } = currentGroup;
    if (type === "ul") {
      elements.push(
        <ul key={key} className="space-y-2 my-2 ml-1">
          {items.map((node, i) => {
            const trimmedText = node.text.trim();
            let bullet: React.ReactNode = <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />;
            let itemText = node.text;

            const emojiMatch = trimmedText.match(/^(✅|❌|⚡|⚠️|💀|💡|🔍|📌|🎯|🚀|📝|✏️)/);
            if (emojiMatch) {
              const emoji = emojiMatch[1];
              const customIcon = getEmojiIcon(emoji);
              if (customIcon) {
                bullet = <span className="shrink-0 mt-0.5">{customIcon}</span>;
                itemText = node.text.replace(new RegExp(`^\\s*${emoji}\\s*`), "");
              }
            }

            return (
              <li key={i} className="flex flex-col text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
                <div className="flex items-start gap-2.5">
                  {bullet}
                  <span className="flex-1">{parseInline(itemText)}</span>
                </div>
                {node.children.length > 0 && (
                  <div className="pl-6 mt-2">
                    {renderList(node.children)}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      );
    } else {
      elements.push(
        <ol key={key} className="space-y-2 my-2 ml-1">
          {items.map((node, i) => (
            <li key={i} className="flex flex-col text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
              <div className="flex items-start gap-2.5">
                <span className="shrink-0 w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs font-black flex items-center justify-center mt-0.5">{i + 1}</span>
                <span>{parseInline(node.text)}</span>
              </div>
              {node.children.length > 0 && (
                <div className="pl-6 mt-2">
                  {renderList(node.children)}
                </div>
              )}
            </li>
          ))}
        </ol>
      );
    }
    currentGroup = null;
  };

  nodes.forEach((node, idx) => {
    if (!currentGroup || currentGroup.type !== node.type) {
      if (currentGroup) flushGroup(idx - 1);
      currentGroup = { type: node.type, items: [node] };
    } else {
      currentGroup.items.push(node);
    }
  });

  if (currentGroup) flushGroup(nodes.length);

  return <>{elements}</>;
}

function getLanguageDotColor(lang: string): string {
  const l = (lang || "").toLowerCase();
  if (l === "js" || l === "javascript") return "bg-amber-400";
  if (l === "ts" || l === "typescript") return "bg-blue-500";
  if (l === "py" || l === "python") return "bg-sky-500";
  if (l === "html") return "bg-orange-500";
  if (l === "css") return "bg-teal-400";
  if (l === "cpp" || l === "c++") return "bg-indigo-400";
  if (l === "c") return "bg-purple-400";
  if (l === "java") return "bg-red-500";
  if (l === "sql") return "bg-pink-500";
  if (l === "bash" || l === "sh" || l === "shell") return "bg-emerald-400";
  return "bg-slate-500";
}

function highlightHtml(code: string): string {
  let i = 0;
  let result = "";
  
  const escapeHtml = (str: string) => {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };

  while (i < code.length) {
    // 1. Comments
    if (code.startsWith("<!--", i)) {
      let comment = "";
      while (i < code.length && !code.startsWith("-->", i)) {
        comment += code[i];
        i++;
      }
      if (code.startsWith("-->", i)) {
        comment += "-->";
        i += 3;
      }
      result += `<span class="text-slate-500 italic">${escapeHtml(comment)}</span>`;
      continue;
    }

    // 2. Tags
    if (code[i] === "<") {
      let tag = "<";
      i++;
      // Read until close of tag
      while (i < code.length && code[i] !== ">") {
        tag += code[i];
        i++;
      }
      if (code[i] === ">") {
        tag += ">";
        i++;
      }
      
      const tagMatch = tag.match(/^<\/?([a-zA-Z0-9:-]+)/);
      if (tagMatch) {
        const tagName = tagMatch[1];
        let highlightedTag = tag.replace(tagName, `<span class="text-pink-400">${tagName}</span>`);
        
        highlightedTag = highlightedTag.replace(/(\s[a-zA-Z0-9:-]+=)(["'])([\s\S]*?)\2/g, (_, attr, quote, val) => {
          return `${attr}<span class="text-emerald-400">${quote}${escapeHtml(val)}${quote}</span>`;
        });
        
        result += highlightedTag.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      } else {
        result += escapeHtml(tag);
      }
      continue;
    }

    result += escapeHtml(code[i]);
    i++;
  }
  return result;
}

function highlightCss(code: string): string {
  let i = 0;
  let result = "";
  
  const escapeHtml = (str: string) => {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };

  while (i < code.length) {
    if (code.startsWith("/*", i)) {
      let comment = "/*";
      i += 2;
      while (i < code.length) {
        if (code.startsWith("*/", i)) {
          comment += "*/";
          i += 2;
          break;
        }
        comment += code[i];
        i++;
      }
      result += `<span class="text-slate-500 italic">${escapeHtml(comment)}</span>`;
      continue;
    }

    if (code[i] === "{") {
      result += `<span class="text-sky-400">{</span>`;
      i++;
      let declBlock = "";
      while (i < code.length && code[i] !== "}") {
        declBlock += code[i];
        i++;
      }
      
      let declResult = "";
      let j = 0;
      while (j < declBlock.length) {
        if (/[a-zA-Z-]/.test(declBlock[j])) {
          let prop = "";
          while (j < declBlock.length && declBlock[j] !== ":" && declBlock[j] !== ";" && declBlock[j] !== "}") {
            prop += declBlock[j];
            j++;
          }
          if (declBlock[j] === ":") {
            declResult += `<span class="text-sky-300">${escapeHtml(prop.trim())}</span>: `;
            j++;
            let val = "";
            while (j < declBlock.length && declBlock[j] !== ";") {
              val += declBlock[j];
              j++;
            }
            declResult += `<span class="text-emerald-300">${escapeHtml(val.trim())}</span>`;
            if (declBlock[j] === ";") {
              declResult += ";";
              j++;
            }
          } else {
            declResult += escapeHtml(prop);
          }
        } else {
          declResult += escapeHtml(declBlock[j]);
          j++;
        }
      }
      
      result += declResult;
      if (code[i] === "}") {
        result += `<span class="text-sky-400">}</span>`;
        i++;
      }
      continue;
    }

    if (/[a-zA-Z0-9#.-]/.test(code[i])) {
      let selector = "";
      while (i < code.length && code[i] !== "{" && code[i] !== "}") {
        selector += code[i];
        i++;
      }
      result += `<span class="text-pink-400 font-semibold">${escapeHtml(selector.trim())}</span> `;
      continue;
    }

    result += escapeHtml(code[i]);
    i++;
  }
  return result;
}

function highlightCodeLanguages(code: string, lang: string): string {
  let i = 0;
  let result = "";
  
  const isLetterOrDigit = (char: string) => /[a-zA-Z0-9_]/.test(char);
  const isDigit = (char: string) => /[0-9]/.test(char);
  
  let keywords = new Set<string>();
  if (lang === "js" || lang === "javascript" || lang === "ts" || lang === "typescript" || lang === "json") {
    keywords = new Set(["const", "let", "var", "function", "return", "if", "else", "for", "while", "do", "switch", "case", "break", "continue", "export", "import", "from", "default", "class", "extends", "new", "this", "async", "await", "try", "catch", "finally", "throw", "typeof", "instanceof", "interface", "type", "public", "private", "protected", "readonly", "implements", "as", "any", "string", "number", "boolean", "void", "null", "undefined", "true", "false"]);
  } else if (lang === "py" || lang === "python") {
    keywords = new Set(["def", "return", "if", "elif", "else", "for", "while", "break", "continue", "import", "from", "as", "class", "try", "except", "finally", "raise", "assert", "with", "lambda", "yield", "global", "nonlocal", "pass", "in", "is", "not", "and", "or", "True", "False", "None"]);
  } else if (lang === "c" || lang === "cpp" || lang === "c++" || lang === "java" || lang === "go") {
    keywords = new Set(["int", "float", "double", "char", "void", "long", "short", "unsigned", "signed", "struct", "class", "union", "enum", "typedef", "sizeof", "if", "else", "for", "while", "do", "switch", "case", "default", "break", "continue", "return", "const", "static", "extern", "volatile", "register", "inline", "public", "private", "protected", "new", "delete", "this", "friend", "virtual", "override", "package", "import", "func", "go", "chan", "map", "select", "range", "nil", "true", "false"]);
  }

  const escapeHtml = (str: string) => {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };

  while (i < code.length) {
    const char = code[i];

    if (
      (lang !== "py" && lang !== "python") && 
      char === "/" && code[i + 1] === "/"
    ) {
      let comment = "";
      while (i < code.length && code[i] !== "\n") {
        comment += code[i];
        i++;
      }
      result += `<span class="text-slate-500 italic">${escapeHtml(comment)}</span>`;
      continue;
    }

    if (
      (lang !== "py" && lang !== "python") && 
      char === "/" && code[i + 1] === "*"
    ) {
      let comment = "/*";
      i += 2;
      while (i < code.length) {
        if (code[i] === "*" && code[i + 1] === "/") {
          comment += "*/";
          i += 2;
          break;
        }
        comment += code[i];
        i++;
      }
      result += `<span class="text-slate-500 italic">${escapeHtml(comment)}</span>`;
      continue;
    }

    if (
      (lang === "py" || lang === "python") && 
      char === "#"
    ) {
      let comment = "";
      while (i < code.length && code[i] !== "\n") {
        comment += code[i];
        i++;
      }
      result += `<span class="text-slate-500 italic">${escapeHtml(comment)}</span>`;
      continue;
    }

    if (char === '"' || char === "'" || (char === "`" && (lang === "js" || lang === "javascript" || lang === "ts" || lang === "typescript"))) {
      const quote = char;
      let str = quote;
      i++;
      while (i < code.length) {
        const nextChar = code[i];
        if (nextChar === "\\") {
          str += nextChar + (code[i + 1] || "");
          i += 2;
          continue;
        }
        if (nextChar === quote) {
          str += quote;
          i++;
          break;
        }
        str += nextChar;
        i++;
      }
      result += `<span class="text-emerald-400">${escapeHtml(str)}</span>`;
      continue;
    }

    if ("{}[]()".includes(char)) {
      result += `<span class="text-sky-400">${escapeHtml(char)}</span>`;
      i++;
      continue;
    }

    if (isDigit(char)) {
      let num = "";
      while (i < code.length && (isDigit(code[i]) || code[i] === "." || code[i].toLowerCase() === "x" || (num.length > 0 && /[a-fA-F]/.test(code[i])))) {
        num += code[i];
        i++;
      }
      result += `<span class="text-violet-400">${escapeHtml(num)}</span>`;
      continue;
    }

    if (isLetterOrDigit(char)) {
      let word = "";
      while (i < code.length && isLetterOrDigit(code[i])) {
        word += code[i];
        i++;
      }
      if (keywords.has(word)) {
        result += `<span class="text-pink-400 font-semibold">${escapeHtml(word)}</span>`;
      } else {
        result += escapeHtml(word);
      }
      continue;
    }

    result += escapeHtml(char);
    i++;
  }

  return result;
}

function highlightCode(code: string, language: string): string {
  const lang = (language || "").toLowerCase();
  
  if (lang === "html" || lang === "xml" || lang === "svg") {
    return highlightHtml(code);
  }
  if (lang === "css" || lang === "scss") {
    return highlightCss(code);
  }
  if (
    lang === "js" || lang === "javascript" ||
    lang === "ts" || lang === "typescript" ||
    lang === "json" ||
    lang === "py" || lang === "python" ||
    lang === "c" || lang === "cpp" || lang === "c++" ||
    lang === "java" || lang === "go"
  ) {
    return highlightCodeLanguages(code, lang);
  }

  return code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code", err);
    }
  };

  const highlightedHtml = React.useMemo(() => {
    return highlightCode(code, language);
  }, [code, language]);

  const lineCount = React.useMemo(() => {
    return code.split("\n").length;
  }, [code]);

  const lineNumbers = React.useMemo(() => {
    return Array.from({ length: lineCount }, (_, i) => i + 1).join("\n");
  }, [lineCount]);

  return (
    <div 
      onPointerDownCapture={(e) => e.stopPropagation()}
      onTouchStartCapture={(e) => e.stopPropagation()}
      className="my-6 rounded-2xl border border-slate-200/85 dark:border-slate-800/85 overflow-hidden bg-slate-900 text-slate-100 dark:bg-slate-950/80 max-w-full font-mono text-sm shadow-md transition-all duration-300 hover:shadow-lg group"
    >
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800/80 bg-slate-900/60 text-slate-400 text-xs font-bold uppercase tracking-wider select-none">
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${getLanguageDotColor(language)} animate-pulse`} />
          <span>{language || "code"}</span>
        </div>
        <button
          onClick={handleCopy}
          className="hover:text-white transition-all duration-200 flex items-center gap-1.5 active:scale-95 text-slate-400 bg-slate-800/40 hover:bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700/30 hover:border-slate-600/50 hover:shadow-sm"
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-400 normal-case font-medium">Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002-2" />
              </svg>
              <span className="normal-case font-medium">Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto whitespace-pre leading-relaxed select-text font-mono text-[13px] flex">
        <code className="text-slate-600 dark:text-slate-500 text-right pr-4 select-none border-r border-slate-800/60 mr-4 font-mono block shrink-0">
          {lineNumbers}
        </code>
        <code className="block flex-1 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-800" dangerouslySetInnerHTML={{ __html: sanitize(highlightedHtml) }} />
      </pre>
    </div>
  );
}


function getHeadingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // remove special characters
    .trim()
    .replace(/\s+/g, "-"); // replace spaces with hyphens
}

function MarkdownRenderer({ content, stripH1 = true, paged = false }: MarkdownRendererProps) {
  let processedContent = content.trim();

  // Strip the first H1 if requested
  if (stripH1) {
    processedContent = processedContent.replace(/^#\s+.+\n*/m, "");
  }

  // Strip duplicate Topic headings
  processedContent = processedContent.replace(/^#{2,3}\s+Topic:\s*.+\n*/gmi, "");

  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const blocks = React.useMemo(() => {
    return parseBlocks(processedContent);
  }, [processedContent]);

  // Group blocks into reader "pages". We break at the author's top-level
  // headings (e.g. the H1 "parts") so subsections stay together, and never
  // start a new page on a heading that has no body yet — a heading-only run
  // is merged forward until the page holds real content. This avoids the
  // "too many tiny/empty sections" problem of splitting on every H2.
  const sections = React.useMemo(() => {
    const MIN_CONTENT = 3; // substantive blocks required before a page break

    // Decide which heading level starts a new page.
    const headingLevels = blocks
      .filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2")
      .map(b => b.level);
    const topLevel = headingLevels.length > 0 ? Math.min(...headingLevels) : 2;
    const topLevelCount = headingLevels.filter(l => l === topLevel).length;
    // Use top-level headings as page breaks only if there are at least two of
    // them; otherwise fall back to breaking on every heading (with merge).
    const breakLevel = topLevelCount >= 2 ? topLevel : Math.max(...headingLevels, 2);

    const isSubstantive = (b: Block) =>
      b.type !== "h2" && b.type !== "h3" && b.type !== "hr";

    const secs: { title: string | null; items: { block: Block; idx: number }[] }[] = [];
    let current: { title: string | null; items: { block: Block; idx: number }[] } | null = null;
    let contentCount = 0;

    blocks.forEach((block, idx) => {
      const isBreakHeading =
        block.type === "h2" && (block as Extract<Block, { type: "h2" }>).level <= breakLevel;

      if (isBreakHeading && current && contentCount >= MIN_CONTENT) {
        secs.push(current);
        current = null;
        contentCount = 0;
      }

      if (!current) {
        current = {
          title: block.type === "h2" ? block.text : null,
          items: [],
        };
        secs.push(current);
      } else if (current.title === null && block.type === "h2") {
        current.title = block.text;
      }

      current.items.push({ block, idx });
      if (isSubstantive(block)) contentCount++;
    });

    return secs;
  }, [blocks]);

  const pagerActive = paged && sections.length > 1;

  const [section, setSection] = React.useState(0);
  const topRef = React.useRef<HTMLDivElement>(null);

  // Reset to the first section whenever the note content changes
  React.useEffect(() => {
    setSection(0);
  }, [processedContent]);

  const clampedSection = Math.min(section, Math.max(0, sections.length - 1));
  const progressPct = sections.length > 0 ? ((clampedSection + 1) / sections.length) * 100 : 0;

  const goToSection = React.useCallback((next: number) => {
    setSection(next);
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(() => {
        topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  const renderBlock = (block: Block, idx: number, isFirst: boolean): React.ReactNode => {
        switch (block.type) {
          case "code":
            if (block.language === "mermaid") {
              return (
                <MermaidRenderer key={idx} chart={block.code} />
              );
            }
            return (
              <CodeBlock key={idx} code={block.code} language={block.language} />
            );
          case "h2": {
            const hId = getHeadingId(block.text);
            return (
              <h2 id={hId} key={idx} className={`text-2xl font-black text-slate-900 dark:text-slate-100 ${isFirst ? "mt-2" : "mt-8 md:mt-11"} mb-3 md:mb-4 tracking-tight scroll-mt-24`}>
                {parseInline(block.text)}
              </h2>
            );
          }
          case "h3": {
            const hId = getHeadingId(block.text);
            return (
              <h3 id={hId} key={idx} className={`text-xl font-bold text-slate-800 dark:text-slate-200 ${isFirst ? "mt-2" : "mt-8"} mb-3 tracking-tight scroll-mt-24`}>
                {parseInline(block.text)}
              </h3>
            );
          }
          case "hr":
            return (
              <div key={idx} className="my-6 md:my-8 flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
              </div>
            );
          case "math":
            return (
              <MathSpan key={idx} latex={block.text} block />
            );
          case "blockquote": {
            const isAlert = !!block.alertType;
            const type = block.alertType || "NOTE";
            
            const config: Record<string, {
              wrapper: string;
              iconBg: string;
              iconText: string;
              titleText: string;
              title: string;
              icon: React.ReactNode;
            }> = {
              NOTE: {
                wrapper: "bg-blue-50/40 dark:bg-blue-950/10 border-blue-200/40 dark:border-blue-800/20 border-l-blue-500 dark:border-l-blue-400",
                iconBg: "bg-blue-500 text-white",
                iconText: "text-blue-600 dark:text-blue-400",
                titleText: "text-blue-800 dark:text-blue-200",
                title: "Note",
                icon: (
                  <svg className="w-3.5 h-3.5 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                )
              },
              INFO: {
                wrapper: "bg-blue-50/40 dark:bg-blue-950/10 border-blue-200/40 dark:border-blue-800/20 border-l-blue-500 dark:border-l-blue-400",
                iconBg: "bg-blue-500 text-white",
                iconText: "text-blue-600 dark:text-blue-400",
                titleText: "text-blue-800 dark:text-blue-200",
                title: "Info",
                icon: (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                )
              },
              TIP: {
                wrapper: "bg-emerald-50/40 dark:bg-emerald-950/10 border-emerald-200/40 dark:border-emerald-800/20 border-l-emerald-500 dark:border-l-emerald-400",
                iconBg: "bg-emerald-500 text-white",
                iconText: "text-emerald-600 dark:text-emerald-400",
                titleText: "text-emerald-800 dark:text-emerald-200",
                title: "Tip",
                icon: (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 10.5a3 3 0 116 0v.75H9v-.75z" />
                  </svg>
                )
              },
              IMPORTANT: {
                wrapper: "bg-indigo-50/40 dark:bg-indigo-950/10 border-indigo-200/40 dark:border-indigo-800/20 border-l-indigo-500 dark:border-l-indigo-400",
                iconBg: "bg-indigo-500 text-white",
                iconText: "text-indigo-600 dark:text-indigo-400",
                titleText: "text-indigo-800 dark:text-indigo-200",
                title: "Important",
                icon: (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                )
              },
              WARNING: {
                wrapper: "bg-amber-50/40 dark:bg-amber-950/10 border-amber-200/40 dark:border-amber-800/20 border-l-amber-500 dark:border-l-amber-400",
                iconBg: "bg-amber-500 text-white",
                iconText: "text-amber-600 dark:text-amber-400",
                titleText: "text-amber-800 dark:text-amber-200",
                title: "Warning",
                icon: (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                )
              },
              CAUTION: {
                wrapper: "bg-rose-50/40 dark:bg-rose-950/10 border-rose-200/40 dark:border-rose-800/20 border-l-rose-500 dark:border-l-rose-400",
                iconBg: "bg-rose-500 text-white",
                iconText: "text-rose-600 dark:text-rose-400",
                titleText: "text-rose-800 dark:text-rose-200",
                title: "Caution",
                icon: (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                )
              }
            };
            
            const activeStyle = config[type] || config.NOTE;

            return (
              <div key={idx} className={`my-5 md:my-7 rounded-2xl border border-l-4 p-4 md:p-5 ${activeStyle.wrapper}`}>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center shadow-sm ${activeStyle.iconBg}`}>
                    {activeStyle.icon}
                  </div>
                  {isAlert && (
                    <span className={`text-[11px] font-black uppercase tracking-wider ${activeStyle.titleText}`}>
                      {activeStyle.title}
                    </span>
                  )}
                </div>
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed space-y-2 pl-0.5">
                  {block.lines.map((line, i) => (
                    <p key={i}>{parseInline(line)}</p>
                  ))}
                </div>
              </div>
            );
          }
          case "table":
            return (
              <div 
                key={idx} 
                onPointerDownCapture={(e) => e.stopPropagation()}
                onTouchStartCapture={(e) => e.stopPropagation()}
                className="my-5 md:my-7 overflow-x-auto rounded-2xl border border-slate-200/50 dark:border-slate-800/80 shadow-sm bg-white dark:bg-slate-950/20 -mx-1 max-w-full"
              >
                <table className="w-full text-sm min-w-[400px]">
                  <thead className="bg-slate-50/80 dark:bg-slate-900/40">
                    <tr>
                      {block.headers.map((h, i) => (
                        <th key={i} className="px-4 py-3.5 text-left text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200/60 dark:border-slate-800 whitespace-nowrap">
                          {parseInline(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40">
                    {block.rows.map((row, ri) => (
                      <tr key={ri} className="odd:bg-slate-50/20 even:bg-white dark:odd:bg-slate-900/10 dark:even:bg-slate-950/20 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors duration-150">
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-4 py-3 text-sm font-normal text-slate-700 dark:text-slate-350">
                            {parseInline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "list":
            return (
              <div key={idx} className="my-4">
                {renderList(block.items)}
              </div>
            );
          case "p":
            return (
              <p key={idx} className="mb-3.5 md:mb-4 text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                {parseInline(block.text)}
              </p>
            );
          default:
            return null;
        }
  };

  return (
    <div ref={topRef} className="max-w-3xl mx-auto px-1 relative scroll-mt-24">
      {pagerActive && (
        <div className="mb-5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 line-clamp-1 pr-2">
              {sections[clampedSection].title
                ? sections[clampedSection].title!
                    .replace(/^SECTION\s+\d+:\s*/i, "")
                    .replace(/^\d+(\.\d+)*\s*/, "")
                    .trim()
                : "Introduction"}
            </span>
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 shrink-0">
              {clampedSection + 1} / {sections.length}
            </span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-blue-500 transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      )}

      {(pagerActive ? sections[clampedSection].items : blocks.map((block, idx) => ({ block, idx }))).map(
        ({ block, idx }, pos) => (
          <React.Fragment key={idx}>{renderBlock(block, idx, pos === 0)}</React.Fragment>
        )
      )}

      {pagerActive && (
        <div className="mt-8 mb-2 flex items-center gap-3 border-t border-slate-100 dark:border-slate-800/60 pt-5">
          <button
            type="button"
            onClick={() => clampedSection > 0 && goToSection(clampedSection - 1)}
            disabled={clampedSection === 0}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <ChevronLeft className="w-4 h-4 shrink-0" />
            Prev
          </button>
          <div className="flex-1 text-center text-[11px] font-bold text-slate-400 dark:text-slate-500">
            {clampedSection + 1} of {sections.length}
          </div>
          {clampedSection < sections.length - 1 ? (
            <button
              type="button"
              onClick={() => goToSection(clampedSection + 1)}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 active:scale-95 bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-600/20"
            >
              Next
              <ChevronRight className="w-4 h-4 shrink-0" />
            </button>
          ) : (
            <span className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-900/40">
              <Check className="w-4 h-4 shrink-0" />
              End
            </span>
          )}
        </div>
      )}

      {/* Floating Checkpoints Trigger */}
      {sections.length > 1 && (
        <div ref={menuRef} className="fixed bottom-24 md:bottom-10 right-4 md:right-8 z-[70]">
          {menuOpen && (
            <div className="absolute bottom-full right-0 mb-3 w-72 bg-white/95 dark:bg-slate-950/95 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl shadow-2xl p-3 backdrop-blur-xl max-h-96 overflow-y-auto z-[71] animate-in fade-in slide-in-from-bottom-2 duration-200 origin-bottom-right">
              <div className="px-2 py-1.5 mb-2 border-b border-slate-100 dark:border-slate-900/60 flex items-center justify-between">
                <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Table of Contents
                </span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  {sections.length} Sections
                </span>
              </div>
              <div className="space-y-1">
                {sections.map((sec, i) => {
                  const rawTitle = sec.title ?? "Introduction";
                  const displayTitle =
                    rawTitle
                      .replace(/^SECTION\s+\d+:\s*/i, "")
                      .replace(/^\d+(\.\d+)*\s*/, "")
                      .trim() || "Introduction";
                  const isCurrent = pagerActive && i === clampedSection;
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        if (pagerActive) {
                          goToSection(i);
                        } else if (sec.title) {
                          const el = document.getElementById(getHeadingId(sec.title));
                          if (el) {
                            el.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                        setMenuOpen(false);
                      }}
                      className={`w-full text-left flex items-center gap-2.5 px-2.5 py-2 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer hover:pl-3.5 ${
                        isCurrent
                          ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400"
                          : "text-slate-600 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:text-blue-500 dark:hover:text-blue-400"
                      }`}
                    >
                      <span
                        className={`shrink-0 w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black ${
                          isCurrent
                            ? "bg-blue-500 text-white"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className="line-clamp-2">{displayTitle}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 px-4.5 py-3 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 backdrop-blur-xl font-bold text-xs tracking-tight shadow-xl hover:shadow-2xl border border-slate-200/80 dark:border-slate-700 cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 group"
          >
            <LayoutList className="w-4 h-4 transition-transform group-hover:rotate-6 text-slate-800 dark:text-slate-200 shrink-0" />
            <span>Sections</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default React.memo(MarkdownRenderer);
