"use client";

import React from "react";

interface MarkdownRendererProps {
  content: string;
  stripH1?: boolean;
}

type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "hr" }
  | { type: "blockquote"; lines: string[] }
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

function formatMathHTML(latex: string): string {
  let html = latex;

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
  html = html.replaceAll("\\quad", '<span class="mx-2"></span>');

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
  const formatted = formatMathHTML(latex);
  if (block) {
    return (
      <div 
        onPointerDownCapture={(e) => e.stopPropagation()}
        onTouchStartCapture={(e) => e.stopPropagation()}
        className="my-6 text-center font-mono text-base text-slate-800 dark:text-slate-200 bg-slate-50/80 dark:bg-slate-800/80 rounded-2xl py-4 px-6 border border-slate-200/60 dark:border-slate-700/60 overflow-x-auto max-w-full"
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    );
  }
  return (
    <span 
      className="font-mono text-sm text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200/40 dark:border-slate-700/40 whitespace-nowrap"
      dangerouslySetInnerHTML={{ __html: formatted }}
    />
  );
}

function parseInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Match **bold**, *italic*, `code`, $$math$$, $math$, ![alt](src), <sup>sup</sup>, and <sub>sub</sub>
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`|\$\$(.+?)\$\$|\$(.+?)\$|!\[(.+?)\]\((.+?)\)|<sup>(.+?)<\/sup>|<sub>(.+?)<\/sub>)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
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
          dangerouslySetInnerHTML={{ __html: match[4] }}
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
    nodes.push(text.slice(lastIndex));
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
        blocks.push({ type: "h2", text });
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
      blocks.push({ type: "blockquote", lines: quoteLines });
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
          {items.map((node, i) => (
            <li key={i} className="flex flex-col text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
              <div className="flex items-start gap-2.5">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                <span>{parseInline(node.text)}</span>
              </div>
              {node.children.length > 0 && (
                <div className="pl-6 mt-2">
                  {renderList(node.children)}
                </div>
              )}
            </li>
          ))}
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

  return (
    <div 
      onPointerDownCapture={(e) => e.stopPropagation()}
      onTouchStartCapture={(e) => e.stopPropagation()}
      className="my-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden bg-slate-900 text-slate-100 dark:bg-slate-950/80 max-w-full font-mono text-sm shadow-md"
    >
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800/80 bg-slate-900/60 text-slate-400 text-xs font-bold uppercase tracking-wider select-none">
        <span>{language || "code"}</span>
        <button
          onClick={handleCopy}
          className="hover:text-white transition-colors duration-150 flex items-center gap-1.5 active:scale-95 text-slate-400"
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002-2" />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto whitespace-pre leading-relaxed select-text font-mono text-[13px]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function MarkdownRenderer({ content, stripH1 = true }: MarkdownRendererProps) {
  let processedContent = content.trim();

  // Strip the first H1 if requested
  if (stripH1) {
    processedContent = processedContent.replace(/^#\s+.+\n*/m, "");
  }

  // Strip duplicate Topic headings
  processedContent = processedContent.replace(/^#{2,3}\s+Topic:\s*.+\n*/gmi, "");

  const blocks = React.useMemo(() => {
    return parseBlocks(processedContent);
  }, [processedContent]);

  return (
    <div className="max-w-3xl mx-auto px-1">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "code":
            return (
              <CodeBlock key={idx} code={block.code} language={block.language} />
            );
          case "h2":
            return (
              <h2 key={idx} className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-12 mb-4 tracking-tight">
                {parseInline(block.text)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={idx} className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-3 tracking-tight">
                {parseInline(block.text)}
              </h3>
            );
          case "hr":
            return (
              <div key={idx} className="my-10 flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
              </div>
            );
          case "math":
            return (
              <MathSpan key={idx} latex={block.text} block />
            );
          case "blockquote":
            return (
              <div key={idx} className="my-8 rounded-2xl bg-blue-50/80 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 border-l-4 border-l-blue-500 p-5">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-black mt-0.5">
                    !
                  </div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed space-y-1">
                    {block.lines.map((line, i) => (
                      <p key={i}>{parseInline(line)}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          case "table":
            return (
              <div 
                key={idx} 
                onPointerDownCapture={(e) => e.stopPropagation()}
                onTouchStartCapture={(e) => e.stopPropagation()}
                className="my-8 overflow-x-auto rounded-2xl border border-slate-200/80 dark:border-slate-800 -mx-1 max-w-full"
              >
                <table className="w-full text-sm min-w-[400px]">
                  <thead className="bg-slate-50/80 dark:bg-slate-800/80">
                    <tr>
                      {block.headers.map((h, i) => (
                        <th key={i} className="px-4 py-3 text-left text-xs font-black text-slate-600 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200/80 dark:border-slate-800 whitespace-nowrap">
                          {parseInline(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-4 py-3 text-sm font-normal text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800">
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
              <p key={idx} className="mb-5 text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                {parseInline(block.text)}
              </p>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default React.memo(MarkdownRenderer);
