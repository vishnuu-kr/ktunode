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
      const files = fs.readdirSync(subjectsDir);
      for (const file of files) {
        if (file.endsWith(".json")) {
          const filePath = path.join(subjectsDir, file);
          const content = fs.readFileSync(filePath, "utf8");
          const parsed = JSON.parse(content);
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