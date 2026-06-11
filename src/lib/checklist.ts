/**
 * Shared utility to dispatch checklist task completion events.
 * Stored in a pure utility file to prevent React component circular dependencies.
 */
export function triggerChecklistTask(taskName: "subjectViewed" | "topicCompleted" | "toolsOpened") {
  if (typeof window === "undefined") return;
  const key = `ktunode_checklist_${taskName}`;
  const alreadyCompleted = localStorage.getItem(key) === "true";
  
  if (!alreadyCompleted) {
    localStorage.setItem(key, "true");
    window.dispatchEvent(new Event("ktunode-checklist-sync"));
  }
}
