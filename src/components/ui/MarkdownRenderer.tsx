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
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "p"; text: string }
  | { type: "math"; text: string };

function parseInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Match **bold**, *italic*, `code`, and $$math$$
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`|\$\$(.+?)\$\$|\$(.+?)\$)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[2]) {
      nodes.push(<strong key={match.index} className="font-black text-slate-900 dark:text-slate-100">{match[2]}</strong>);
    } else if (match[3]) {
      nodes.push(<em key={match.index} className="italic text-slate-700 dark:text-slate-300">{match[3]}</em>);
    } else if (match[4]) {
      nodes.push(<code key={match.index} className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-mono font-semibold">{match[4]}</code>);
    } else if (match[5]) {
      // Block math ($$...$$) inline
      nodes.push(<span key={match.index} className="block my-4 text-center font-mono text-base text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/80 rounded-xl py-3 px-4 border border-slate-200/60 dark:border-slate-700/60">{match[5]}</span>);
    } else if (match[6]) {
      // Inline math ($...$)
      nodes.push(<span key={match.index} className="font-mono text-sm text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 px-1 py-0.5 rounded">{match[6]}</span>);
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function parseBlocks(content: string): Block[] {
  const lines = content.split("\n");
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

    // H2
    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.replace(/^##\s+/, "") });
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      blocks.push({ type: "h3", text: line.replace(/^###\s+/, "") });
      i++;
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
    if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quoteLines.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      blocks.push({ type: "blockquote", lines: quoteLines });
      continue;
    }

    // Table
    if (line.includes("|") && i + 1 < lines.length && /^\|?[\s-:|]+\|?$/.test(lines[i + 1])) {
      const headers = line.split("|").map(c => c.trim()).filter(Boolean);
      i += 2; // skip header and separator
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes("|") && lines[i].trim() !== "") {
        rows.push(lines[i].split("|").map(c => c.trim()).filter(Boolean));
        i++;
      }
      blocks.push({ type: "table", headers, rows });
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ""));
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    // Unordered list
    if (line.startsWith("- ") || line.startsWith("* ")) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* "))) {
        items.push(lines[i].replace(/^[-*]\s+/, ""));
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    // Paragraph (collect consecutive non-empty lines)
    const paraLines: string[] = [];
    while (i < lines.length && lines[i].trim() !== "" && !lines[i].startsWith("#") && !lines[i].startsWith(">") && !lines[i].startsWith("- ") && !lines[i].startsWith("* ") && !/^\d+\.\s/.test(lines[i]) && !/^---+$/.test(lines[i].trim()) && !lines[i].trim().startsWith("$$") && !(lines[i].includes("|") && i + 1 < lines.length && /^\|?[\s-:|]+\|?$/.test(lines[i + 1] || ""))) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      blocks.push({ type: "p", text: paraLines.join(" ") });
    }
  }

  return blocks;
}

export default function MarkdownRenderer({ content, stripH1 = true }: MarkdownRendererProps) {
  let processedContent = content.trim();

  // Strip the first H1 if requested
  if (stripH1) {
    processedContent = processedContent.replace(/^#\s+.+\n*/m, "");
  }

  const blocks = parseBlocks(processedContent);

  return (
    <div className="max-w-3xl mx-auto px-1">
      {blocks.map((block, idx) => {
        switch (block.type) {
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
              <div key={idx} className="my-6 text-center font-mono text-base text-slate-855 dark:text-slate-200 bg-slate-50/80 dark:bg-slate-800/80 rounded-2xl py-4 px-6 border border-slate-200/60 dark:border-slate-700/60">
                {block.text}
              </div>
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
              <div key={idx} className="my-8 overflow-x-auto rounded-2xl border border-slate-200/80 dark:border-slate-800 -mx-1">
                <table className="w-full text-sm min-w-[400px]">
                  <thead className="bg-slate-50/80 dark:bg-slate-800/80">
                    <tr>
                      {block.headers.map((h, i) => (
                        <th key={i} className="px-4 py-3 text-left text-xs font-black text-slate-600 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200/80 dark:border-slate-800">
                          {parseInline(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800">
                            {parseInline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "ul":
            return (
              <ul key={idx} className="space-y-2 my-4 ml-1">
                {block.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                    <span>{parseInline(item)}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={idx} className="space-y-2 my-4 ml-1">
                {block.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs font-black flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{parseInline(item)}</span>
                  </li>
                ))}
              </ol>
            );
          case "p":
            return (
              <p key={idx} className="mb-5 text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
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
