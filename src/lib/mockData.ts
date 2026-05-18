export interface PYQ {
  id: string;
  year: string;
  question: string;
  marks: number;
}

export interface Topic {
  id: string;
  title: string;
  content: string; // Markdown or rich text string
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
  {
    id: "sub_1",
    code: "CST201",
    name: "Data Structures",
    branchId: "cs",
    semester: 3,
    modules: [
      {
        id: "mod_1",
        title: "Module 1",
        topics: [
          {
            id: "top_1",
            title: "Introduction to Arrays",
            content: "Arrays are contiguous memory locations...\n\n### Key Points\n- O(1) Access\n- Fixed size in C",
            pyqs: [
              { id: "pyq_1", year: "2022", question: "Explain the memory representation of 2D arrays.", marks: 5 }
            ]
          },
          {
            id: "top_2",
            title: "Linked Lists",
            content: "A linked list is a linear data structure where elements are not stored at contiguous memory locations...",
          }
        ]
      },
      {
        id: "mod_2",
        title: "Module 2",
        topics: [
          {
            id: "top_3",
            title: "Stacks and Queues",
            content: "LIFO vs FIFO...",
            pyqs: [
              { id: "pyq_2", year: "2021", question: "Write a C program to implement a queue using arrays.", marks: 7 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "sub_2",
    code: "CST203",
    name: "Logic System Design",
    branchId: "cs",
    semester: 3,
    modules: []
  },
  {
    id: "sub_3",
    code: "CST205",
    name: "Object Oriented Programming using Java",
    branchId: "cs",
    semester: 3,
    modules: []
  }
];

export function getSubjectsForSession(branchId: string, semester: number): Subject[] {
  // Return mock subjects, falling back to some dummy ones if none exist for that specific combo
  const matching = mockSubjects.filter(s => s.branchId === branchId && s.semester === semester);
  if (matching.length > 0) return matching;

  // Fallback dummy data so the UI always has something to show during dev
  return [
    { id: "d1", code: "MAT101", name: "Linear Algebra and Calculus", branchId, semester, modules: [] },
    { id: "d2", code: "PHT100", name: "Engineering Physics A", branchId, semester, modules: [] },
    { id: "d3", code: "EST130", name: "Basics of Electrical Engineering", branchId, semester, modules: [] },
    { id: "d4", code: "HUN101", name: "Life Skills", branchId, semester, modules: [] },
  ];
}
