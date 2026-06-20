<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **nil-project** (104707 symbols, 106474 relationships, 300 execution flows). Use the GitNexus MCP tools to understand code, assess impact, and navigate safely.

> If any GitNexus tool warns the index is stale, run `npx gitnexus analyze` in terminal first.

## Always Do

- **MUST run impact analysis before editing any symbol.** Before modifying a function, class, or method, run `gitnexus_impact({target: "symbolName", direction: "upstream"})` and report the blast radius (direct callers, affected processes, risk level) to the user.
- **MUST run `gitnexus_detect_changes()` before committing** to verify your changes only affect expected symbols and execution flows.
- **MUST warn the user** if impact analysis returns HIGH or CRITICAL risk before proceeding with edits.
- When exploring unfamiliar code, use `gitnexus_query({query: "concept"})` to find execution flows instead of grepping. It returns process-grouped results ranked by relevance.
- When you need full context on a specific symbol — callers, callees, which execution flows it participates in — use `gitnexus_context({name: "symbolName"})`.

## Never Do

- NEVER edit a function, class, or method without first running `gitnexus_impact` on it.
- NEVER ignore HIGH or CRITICAL risk warnings from impact analysis.
- NEVER rename symbols with find-and-replace — use `gitnexus_rename` which understands the call graph.
- NEVER commit changes without running `gitnexus_detect_changes()` to check affected scope.

## Resources

| Resource | Use for |
|----------|---------|
| `gitnexus://repo/nil-project/context` | Codebase overview, check index freshness |
| `gitnexus://repo/nil-project/clusters` | All functional areas |
| `gitnexus://repo/nil-project/processes` | All execution flows |
| `gitnexus://repo/nil-project/process/{name}` | Step-by-step execution trace |

## CLI

| Task | Read this skill file |
|------|---------------------|
| Understand architecture / "How does X work?" | `.claude/skills/gitnexus/gitnexus-exploring/SKILL.md` |
| Blast radius / "What breaks if I change X?" | `.claude/skills/gitnexus/gitnexus-impact-analysis/SKILL.md` |
| Trace bugs / "Why is X failing?" | `.claude/skills/gitnexus/gitnexus-debugging/SKILL.md` |
| Rename / extract / split / refactor | `.claude/skills/gitnexus/gitnexus-refactoring/SKILL.md` |
| Tools, resources, schema reference | `.claude/skills/gitnexus/gitnexus-guide/SKILL.md` |
| Index, status, clean, wiki CLI commands | `.claude/skills/gitnexus/gitnexus-cli/SKILL.md` |

<!-- gitnexus:end -->

<!-- BEGIN:i-have-adhd-rules -->
# ADHD-Friendly Output Rules (Mandatory)

Shape all responses in this workspace according to the following rules:

1. **Lead with the next action:** The first line must be something the reader can do immediately (command, path, snippet). No preamble or setup text.
2. **Number multi-step tasks:** Write a numbered list of bounded actions.
3. **End with one concrete next action:** Conclude with a single task the user can do in under 2 minutes.
4. **Suppress tangents:** Finish the first issue before presenting other unrelated issues.
5. **Restate state every turn:** Start the response by explicitly stating the current state of progress (e.g., "State: Step 3 of 5 done...").
6. **Specific time estimates:** Estimate tasks in minutes or hours; do not use vague terms.
7. **Make completed work visible:** Show what works in concrete terms without burying progress.
8. **Matter-of-fact tone for errors:** State the cause and fix directly and neutrally.
9. **Cap lists at 5 items:** Split list items if they exceed 5.
10. **No preamble, no recap, no closing pleasantries:** Completely eliminate opening/closing pleasantries (e.g., "Sure!", "Hope this helps").
<!-- END:i-have-adhd-rules -->
