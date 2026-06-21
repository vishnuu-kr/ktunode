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

export const mockSubjects: Subject[] = [];

export function getSubjectsForSession(
  branchId: string,
  semester: number
): Subject[] {
  try {
    const fs = require("fs");
    const path = require("path");
    const subjectsDir = path.join(process.cwd(), "src", "data", "subjects");
    const folderPath = path.join(subjectsDir, `${branchId}-${semester}`);
    if (fs.existsSync(folderPath) && fs.statSync(folderPath).isDirectory()) {
      return fs.readdirSync(folderPath)
        .filter((file: string) => file.endsWith(".json"))
        .map((file: string) => {
          const content = fs.readFileSync(path.join(folderPath, file), "utf8");
          return JSON.parse(content) as Subject;
        });
    }
  } catch (error) {
    console.error("Failed to load subjects for session:", error);
  }
  return [];
}

export function getSubjectOnDemand(
  branch: string,
  semester: number,
  subjectIdOrCode: string
): Subject | null {
  try {
    const fs = require("fs");
    const path = require("path");
    const subjectsDir = path.join(process.cwd(), "src", "data", "subjects");
    const folderPath = path.join(subjectsDir, `${branch}-${semester}`);
    
    if (fs.existsSync(folderPath) && fs.statSync(folderPath).isDirectory()) {
      const files = fs.readdirSync(folderPath);
      for (const file of files) {
        if (!file.endsWith(".json")) continue;
        
        const filePath = path.join(folderPath, file);
        const content = fs.readFileSync(filePath, "utf8");
        const s = JSON.parse(content) as Subject;
        
        if (
          s.id.toLowerCase() === subjectIdOrCode.toLowerCase() ||
          s.code.toLowerCase() === subjectIdOrCode.toLowerCase()
        ) {
          return s;
        }
      }
    }
  } catch (error) {
    console.error("Error reading subject on demand:", error);
  }
  return null;
}