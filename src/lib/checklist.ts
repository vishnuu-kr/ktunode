/**
 * Shared utility to dispatch checklist task completion events.
 * Stored in a pure utility file to prevent React component circular dependencies.
 */
export function triggerChecklistTask(taskName: "subjectViewed" | "topicCompleted" | "toolsOpened") {
  if (typeof window === "undefined") return;
  
  const keyMap = {
    subjectViewed: "ktunode_checklist_subject_viewed",
    topicCompleted: "ktunode_checklist_topic_completed",
    toolsOpened: "ktunode_checklist_tools_opened",
  };
  
  const key = keyMap[taskName];
  const alreadyCompleted = localStorage.getItem(key) === "true";
  
  if (!alreadyCompleted) {
    localStorage.setItem(key, "true");
    window.dispatchEvent(new Event("ktunode-checklist-sync"));
  }
}
