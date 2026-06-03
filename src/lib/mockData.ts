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

export const mockSubjects: Subject[] = [
  ...parsedSubjects
];

export function getSubjectsForSession(
  branchId: string,
  semester: number
): Subject[] {
  return mockSubjects.filter(
    s => s.branchId === branchId && s.semester === semester
  );
}