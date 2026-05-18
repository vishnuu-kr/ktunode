export interface ExamSlot {
  date: string;
  time: string;
  subjectCode: string;
  subjectName: string;
}

export interface TimetableData {
  branchId: string;
  semester: number;
  exams: ExamSlot[];
}

export const ktuTimetableData: TimetableData[] = [

  // =========================
  // CSE
  // =========================

  {
    branchId: "cs",
    semester: 4,
    exams: [
      {
        date: "2026-04-27",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "GAMAT401",
        subjectName: "Mathematics for Computer and Information Science - 4"
      },
      {
        date: "2026-04-29",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "PCCST402",
        subjectName: "Database Management Systems"
      },
      {
        date: "2026-05-07",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "PBCST404",
        subjectName: "Computer Organization and Architecture"
      },
      {
        date: "2026-05-11",
        time: "9:30 AM - 12:30 PM",
        subjectCode: "PECCT41X",
        subjectName: "Program Elective"
      },
      {
        date: "2026-05-14",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "UCHUT346 / UCHUT347",
        subjectName: "Economics / Ethics"
      },
      {
        date: "2026-05-16",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "PCCST403",
        subjectName: "Operating Systems"
      }
    ]
  },

  // =========================
  // ECE
  // =========================

  {
    branchId: "ec",
    semester: 4,
    exams: [
      {
        date: "2026-04-27",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "GAMAT401",
        subjectName: "Mathematics"
      },
      {
        date: "2026-04-29",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "PCECT402",
        subjectName: "Signals and Systems"
      },
      {
        date: "2026-05-07",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "PBECE404",
        subjectName: "Electronic Circuits"
      },
      {
        date: "2026-05-11",
        time: "9:30 AM - 12:30 PM",
        subjectCode: "PECET41X",
        subjectName: "Program Elective"
      },
      {
        date: "2026-05-14",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "UCHUT346 / UCHUT347",
        subjectName: "Economics / Ethics"
      },
      {
        date: "2026-05-16",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "PCECT403",
        subjectName: "Analog Communication"
      }
    ]
  },

  // =========================
  // ME
  // =========================

  {
    branchId: "me",
    semester: 4,
    exams: [
      {
        date: "2026-04-27",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "GAMAT401",
        subjectName: "Mathematics"
      },
      {
        date: "2026-04-29",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "PCMET402",
        subjectName: "Fluid Mechanics"
      },
      {
        date: "2026-05-07",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "PBMET404",
        subjectName: "Manufacturing Technology"
      },
      {
        date: "2026-05-11",
        time: "9:30 AM - 12:30 PM",
        subjectCode: "PEMET41X",
        subjectName: "Program Elective"
      },
      {
        date: "2026-05-14",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "UCHUT346 / UCHUT347",
        subjectName: "Economics / Ethics"
      },
      {
        date: "2026-05-16",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "PCMET403",
        subjectName: "Thermodynamics"
      }
    ]
  },

  // =========================
  // CE
  // =========================

  {
    branchId: "ce",
    semester: 4,
    exams: [
      {
        date: "2026-04-27",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "GAMAT401",
        subjectName: "Mathematics"
      },
      {
        date: "2026-04-29",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "PCCET402",
        subjectName: "Structural Analysis"
      },
      {
        date: "2026-05-07",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "PBCET404",
        subjectName: "Transportation Engineering"
      },
      {
        date: "2026-05-11",
        time: "9:30 AM - 12:30 PM",
        subjectCode: "PECET41X",
        subjectName: "Program Elective"
      },
      {
        date: "2026-05-14",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "UCHUT346 / UCHUT347",
        subjectName: "Economics / Ethics"
      },
      {
        date: "2026-05-16",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "PCCET403",
        subjectName: "Geotechnical Engineering"
      }
    ]
  },

  // =========================
  // S1 COMMON
  // =========================

  {
    branchId: "common",
    semester: 1,
    exams: [
      {
        date: "2026-04-28",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "MAT101",
        subjectName: "Mathematics I"
      },
      {
        date: "2026-05-01",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "PHT100 / CYT100",
        subjectName: "Engineering Physics / Engineering Chemistry"
      },
      {
        date: "2026-05-04",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "EST100",
        subjectName: "Programming"
      },
      {
        date: "2026-05-07",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "EST130",
        subjectName: "Engineering Mechanics"
      },
      {
        date: "2026-05-10",
        time: "9:30 AM - 12:30 PM",
        subjectCode: "EST120",
        subjectName: "Engineering Graphics"
      }
    ]
  },

  // =========================
  // S2 COMMON
  // =========================

  {
    branchId: "common",
    semester: 2,
    exams: [
      {
        date: "2026-04-29",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "MAT102",
        subjectName: "Mathematics II"
      },
      {
        date: "2026-05-02",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "PHT100 / CYT100",
        subjectName: "Engineering Physics / Engineering Chemistry"
      },
      {
        date: "2026-05-05",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "EST100",
        subjectName: "Programming in C"
      },
      {
        date: "2026-05-08",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "EST120",
        subjectName: "Engineering Graphics"
      },
      {
        date: "2026-05-12",
        time: "9:30 AM - 12:30 PM",
        subjectCode: "EST110",
        subjectName: "Basics of Electrical Engineering"
      }
    ]
  },

  // =========================
  // S3 CSE
  // =========================

  {
    branchId: "cs",
    semester: 3,
    exams: [
      {
        date: "2026-04-28",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "MAT203",
        subjectName: "Discrete Mathematics"
      },
      {
        date: "2026-04-30",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "CST201",
        subjectName: "Data Structures"
      },
      {
        date: "2026-05-03",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "CST203",
        subjectName: "Digital Logic Design"
      },
      {
        date: "2026-05-06",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "CST205",
        subjectName: "Object Oriented Programming"
      },
      {
        date: "2026-05-09",
        time: "9:30 AM - 12:30 PM",
        subjectCode: "PECST3XX",
        subjectName: "Program Elective"
      },
      {
        date: "2026-05-13",
        time: "1:30 PM - 4:30 PM",
        subjectCode: "UCHUT202",
        subjectName: "Constitution of India"
      }
    ]
  }

];

export function getTimetable(branchId: string, semester: number): ExamSlot[] {
  return (
    ktuTimetableData.find(
      t => t.branchId === branchId && t.semester === semester
    )?.exams || []
  );
}