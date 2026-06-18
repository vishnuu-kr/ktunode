import { parsedSubjects } from "./syllabusData";

export interface PYQ {
  id: string;
  year: string;
  question: string;
  marks: number;
}

export interface Topic {
  id: string;
  title: string;
  content: string;
  pyqs?: PYQ[];
}

export interface Module {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  branchId: string;
  semester: number;
  modules: Module[];
}

// Dynamically load all actual subjects from JSON files on the server side
const loadedSubjects: Subject[] = [];

if (typeof window === "undefined") {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const fs = require("fs");
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const path = require("path");
    const subjectsDir = path.join(process.cwd(), "src", "data", "subjects");
    if (fs.existsSync(subjectsDir)) {
      for (const entry of fs.readdirSync(subjectsDir, { withFileTypes: true })) {
        const entryPath = path.join(subjectsDir, entry.name);
        if (entry.isDirectory()) {
          // New layout: one folder per branch-sem, one file per subject object
          for (const file of fs.readdirSync(entryPath)) {
            if (!file.endsWith(".json")) continue;
            const parsed = JSON.parse(fs.readFileSync(path.join(entryPath, file), "utf8"));
            if (Array.isArray(parsed)) {
              loadedSubjects.push(...parsed);
            } else if (parsed) {
              loadedSubjects.push(parsed);
            }
          }
        } else if (entry.name.endsWith(".json")) {
          // Legacy layout: flat array file per branch-sem
          const parsed = JSON.parse(fs.readFileSync(entryPath, "utf8"));
          if (Array.isArray(parsed)) {
            loadedSubjects.push(...parsed);
          }
        }
      }
    }
  } catch (error) {
    console.error("Failed to load subjects from files in mockData:", error);
  }
}

export const mockSubjects: Subject[] = loadedSubjects.length > 0 ? loadedSubjects : parsedSubjects;

export function getSubjectsForSession(
  branchId: string,
  semester: number
): Subject[] {
  return mockSubjects.filter(
    s => s.branchId === branchId && s.semester === semester
  );
}