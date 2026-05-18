export interface ExamSlot {
  date: string;
  time: string;
  subjectCode: string;
  subjectName: string;
}

export interface TimetableData {
  branchId: string; // e.g., "cs", "ec", "me"
  semester: number; // e.g., 1, 2, 3
  exams: ExamSlot[];
}

// ── Paste your timetable data in this array below ──
export const ktuTimetableData: TimetableData[] = [
  // Example format for Computer Science Semester 1
  {
    branchId: "cs",
    semester: 1,
    exams: [
      { date: "2026-06-15", time: "9:30 AM", subjectCode: "MAT101", subjectName: "Linear Algebra" },
      { date: "2026-06-18", time: "9:30 AM", subjectCode: "PHT110", subjectName: "Engineering Physics" },
    ]
  },
  
  // Add other branches and semesters here...
];

// Helper to easily get timetable for a given session
export function getTimetable(branchId: string, semester: number): ExamSlot[] {
  return ktuTimetableData.find(t => t.branchId === branchId && t.semester === semester)?.exams || [];
}
