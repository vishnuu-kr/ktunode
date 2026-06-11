"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import { useTheme } from "next-themes";
import { triggerHaptic } from "@/lib/haptic";
import { ToolsSchema } from "@/components/ToolsSchema";

const GpaCalculator = dynamic(() => import("@/components/GpaCalculator"), {
  loading: () => <div className="animate-pulse h-48 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800 rounded-[20px] flex items-center justify-center text-xs text-slate-400 font-medium">Loading GPA calculator module...</div>,
  ssr: false
});
import { mockSubjects, Subject } from "@/lib/mockData";
import ktu2024Scheme from "@/data/ktu_2024_scheme.json";
import {
  Calculator,
  Sparkles,
  GraduationCap,
  Plus,
  Trash2,
  Activity,
  CheckCircle2,
  Award,
  Info,
  Calendar,
  Notebook,
  Check,
  RotateCcw,
  ListTodo,
  Clock,
  ShieldCheck,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Percent,
  Play,
  Pause,
  FlaskConical,
  Flame,
  Share2,
  Copy,
  AlertCircle,
  ShieldAlert,
  HelpCircle,
  Lightbulb,
  Music,
  CloudRain,
  Coffee,
  FileText,
  Smile,
  BookOpen,
  Search,
  Dices,
  TrendingUp,
  Save,
  Gamepad2,
  ExternalLink,
  ChevronRight,
  User,
  Shield,
  X,
  Download,
  SkipForward,
  Volume2,
  LayoutDashboard
} from "lucide-react";

import MissionControlDashboard from "@/components/mission-control/MissionControlDashboard";

const branchNameMapping: Record<string, string> = {
  "cs": "Computer Science and Engineering",
  "ce": "Civil Engineering",
  "ec": "Electronics & Communication Engineering",
  "ee": "Electrical and Electronics Engineering",
  "me": "Mechanical Engineering"
};

const getCreditsForSubject = (subjCode: string, subjName: string, branch: string, sem: number): number => {
  const fullBranchName = branchNameMapping[branch] || "Computer Science and Engineering";
  const semData = (ktu2024Scheme as any)[fullBranchName]?.find((s: any) => s.semester === sem);
  if (semData && semData.subjects) {
    const matched = semData.subjects.find((s: any) => 
      s.name.toLowerCase() === subjName.toLowerCase() ||
      subjName.toLowerCase().includes(s.name.toLowerCase()) ||
      s.name.toLowerCase().includes(subjName.toLowerCase())
    );
    if (matched) return matched.credits;
  }
  
  const n = subjName.toLowerCase();
  if (n.includes("lab") || n.includes("workshop") || n.includes("project") || n.includes("seminar") || n.includes("practical")) {
    return 2;
  }
  if (n.includes("ethics") || n.includes("economics") || n.includes("constitution") || n.includes("life skills")) {
    return 2;
  }
  if (subjCode.startsWith("PE") || subjCode.startsWith("OE")) {
    return 3;
  }
  return 4;
};

const allocateGradesForTargetSgpa = (
  subjectsList: Subject[],
  target: number,
  branch: string,
  sem: number
) => {
  const gradesList = [
    { grade: "O", gp: 10.0 },
    { grade: "A+", gp: 9.0 },
    { grade: "A", gp: 8.0 },
    { grade: "B+", gp: 7.0 },
    { grade: "B", gp: 6.0 },
    { grade: "C", gp: 5.0 },
    { grade: "P", gp: 4.0 }
  ];

  if (subjectsList.length === 0) return [];

  const allocated = subjectsList.map(sub => {
    const cr = getCreditsForSubject(sub.code, sub.name, branch, sem);
    return {
      code: sub.code,
      name: sub.name,
      credits: cr,
      gradeIdx: 5 // C+
    };
  });

  const getSgpa = () => {
    let pts = 0;
    let totCr = 0;
    allocated.forEach(item => {
      pts += gradesList[item.gradeIdx].gp * item.credits;
      totCr += item.credits;
    });
    return totCr > 0 ? pts / totCr : 0;
  };

  let iterations = 0;
  while (getSgpa() < target && iterations < 100) {
    let bestIdx = -1;
    let maxCredits = -1;
    for (let i = 0; i < allocated.length; i++) {
      if (allocated[i].gradeIdx > 0 && allocated[i].credits > maxCredits) {
        maxCredits = allocated[i].credits;
        bestIdx = i;
      }
    }

    if (bestIdx === -1) break;
    allocated[bestIdx].gradeIdx--;
    iterations++;
  }

  iterations = 0;
  while (getSgpa() > target + 0.1 && iterations < 100) {
    let bestIdx = -1;
    let minCredits = 999;
    for (let i = 0; i < allocated.length; i++) {
      if (allocated[i].gradeIdx < gradesList.length - 1 && allocated[i].credits < minCredits) {
        minCredits = allocated[i].credits;
        bestIdx = i;
      }
    }

    if (bestIdx === -1) break;
    const prevIdx = allocated[bestIdx].gradeIdx;
    allocated[bestIdx].gradeIdx++;
    if (getSgpa() < target) {
      allocated[bestIdx].gradeIdx = prevIdx;
      break;
    }
    iterations++;
  }

  return allocated.map(item => ({
    code: item.code,
    name: item.name,
    credits: item.credits,
    grade: gradesList[item.gradeIdx].grade,
    points: gradesList[item.gradeIdx].gp
  }));
};
// Grade mappings to points
const GRADE_POINTS: Record<string, number> = {
  "O": 10,
  "A+": 9,
  "A": 8,
  "B+": 7,
  "B": 6,
  "C": 5,
  "P": 4,
  "F": 0
};

// Exam Slot templates based on alphabetical indices
const SLOTS = ["Slot A", "Slot B", "Slot C", "Slot D", "Slot E", "Slot F"];

interface SGPACourse {
  id: string;
  name: string;
  code: string;
  credits: number;
  grade: string;
}

interface CGPASemester {
  semester: number;
  sgpa: number;
  credits: number;
  active: boolean;
}

interface AttendanceSubject {
  id: string;
  code: string;
  name: string;
  attended: number;
  total: number;
}

interface LabExercise {
  id: string;
  name: string;
  logic: boolean;
  record: boolean;
  viva: boolean;
  signed: boolean;
}

interface LabCourse {
  id: string;
  name: string;
  code: string;
  exercises: LabExercise[];
}

// Custom mock lab generator based on branch and sem
const getDefaultLabsForSession = (branchId: string, semester: number): LabCourse[] => {
  // CS Branch Labs
  if (branchId === "cs") {
    if (semester === 1 || semester === 2) {
      return [
        {
          id: "lab_workshop",
          name: "Electrical & Mechanical Workshop",
          code: "ESL130",
          exercises: [
            { id: "ex1", name: "One-way and Two-way Lamp Wiring", logic: true, record: true, viva: false, signed: false },
            { id: "ex2", name: "Soldering & Desoldering practice", logic: true, record: true, viva: false, signed: false },
            { id: "ex3", name: "Carpentry: Half Lap T-joint", logic: true, record: true, viva: false, signed: false },
            { id: "ex4", name: "Fitting: Square joint setup", logic: true, record: true, viva: false, signed: false },
            { id: "ex5", name: "Smithy: Round to hexagonal section", logic: true, record: true, viva: false, signed: false },
          ]
        },
        {
          id: "lab_c",
          name: "Programming in C Lab",
          code: "ESL120",
          exercises: [
            { id: "ex1", name: "Decision constructs (if-else, switch-case)", logic: true, record: true, viva: false, signed: false },
            { id: "ex2", name: "Loops and Nested loops (for, while)", logic: true, record: true, viva: false, signed: false },
            { id: "ex3", name: "Single and Multi-dimensional Arrays", logic: true, record: true, viva: false, signed: false },
            { id: "ex4", name: "Strings and character manipulation", logic: true, record: true, viva: false, signed: false },
            { id: "ex5", name: "User-defined Functions & Recursion", logic: true, record: true, viva: false, signed: false },
            { id: "ex6", name: "Pointers, Structures, and File operations", logic: true, record: true, viva: false, signed: false },
          ]
        }
      ];
    }
    if (semester === 3) {
      return [
        {
          id: "lab_ds",
          name: "Data Structures Lab",
          code: "CSL311",
          exercises: [
            { id: "ex1", name: "Stack implementation (Array/List)", logic: true, record: true, viva: false, signed: false },
            { id: "ex2", name: "Queue implementation (Linear/Circular)", logic: true, record: true, viva: false, signed: false },
            { id: "ex3", name: "Infix to Postfix conversion", logic: true, record: true, viva: false, signed: false },
            { id: "ex4", name: "Binary Search Tree operations", logic: true, record: true, viva: false, signed: false },
            { id: "ex5", name: "Graph traversals (BFS/DFS)", logic: true, record: true, viva: false, signed: false },
            { id: "ex6", name: "Sorting algorithms (Merge, Quick, Heap)", logic: true, record: true, viva: false, signed: false },
          ]
        },
        {
          id: "lab_dsd",
          name: "Digital System Design Lab",
          code: "CSL312",
          exercises: [
            { id: "ex1", name: "Verification of Logic Gates & De Morgan's", logic: true, record: true, viva: false, signed: false },
            { id: "ex2", name: "Adders and Subtractors circuits", logic: true, record: true, viva: false, signed: false },
            { id: "ex3", name: "Multiplexers & Demultiplexers setup", logic: true, record: true, viva: false, signed: false },
            { id: "ex4", name: "Flip-flops (SR, JK, D, T) verification", logic: true, record: true, viva: false, signed: false },
            { id: "ex5", name: "Asynchronous & Synchronous Counters", logic: true, record: true, viva: false, signed: false },
          ]
        }
      ];
    }
    if (semester === 4) {
      return [
        {
          id: "lab_os",
          name: "Operating Systems Lab",
          code: "CSL411",
          exercises: [
            { id: "ex1", name: "System calls (fork, exec, wait)", logic: true, record: true, viva: false, signed: false },
            { id: "ex2", name: "FCFS & SJF CPU scheduling", logic: true, record: true, viva: false, signed: false },
            { id: "ex3", name: "Round Robin & Priority CPU scheduling", logic: true, record: true, viva: false, signed: false },
            { id: "ex4", name: "Producer-Consumer (Semaphores)", logic: true, record: true, viva: false, signed: false },
            { id: "ex5", name: "Banker's Algorithm implementation", logic: true, record: true, viva: false, signed: false },
            { id: "ex6", name: "Page Replacement (FIFO, LRU, LFU)", logic: true, record: true, viva: false, signed: false },
          ]
        },
        {
          id: "lab_dbms",
          name: "Database Management Systems Lab",
          code: "CSL412",
          exercises: [
            { id: "ex1", name: "DDL & DML SQL queries", logic: true, record: true, viva: false, signed: false },
            { id: "ex2", name: "Nested queries & SQL joins", logic: true, record: true, viva: false, signed: false },
            { id: "ex3", name: "Database views & assertions", logic: true, record: true, viva: false, signed: false },
            { id: "ex4", name: "PL/SQL procedures & functions", logic: true, record: true, viva: false, signed: false },
            { id: "ex5", name: "Database triggers implementation", logic: true, record: true, viva: false, signed: false },
          ]
        }
      ];
    }
    if (semester === 5) {
      return [
        {
          id: "lab_ssm",
          name: "System Software & Microprocessors Lab",
          code: "CSL511",
          exercises: [
            { id: "ex1", name: "Two-pass Assembler algorithm", logic: true, record: true, viva: false, signed: false },
            { id: "ex2", name: "One-pass Macroprocessor simulator", logic: true, record: true, viva: false, signed: false },
            { id: "ex3", name: "MASM Assembly arithmetic", logic: true, record: true, viva: false, signed: false },
            { id: "ex4", name: "Interface 8086 with stepper motor", logic: true, record: true, viva: false, signed: false },
            { id: "ex5", name: "Interrupt handling assembly code", logic: true, record: true, viva: false, signed: false },
          ]
        }
      ];
    }
    if (semester === 6) {
      return [
        {
          id: "lab_cn",
          name: "Computer Networks Lab",
          code: "CSL611",
          exercises: [
            { id: "ex1", name: "TCP client-server chat socket", logic: true, record: true, viva: false, signed: false },
            { id: "ex2", name: "UDP client-server file transfer", logic: true, record: true, viva: false, signed: false },
            { id: "ex3", name: "Distance Vector routing protocol", logic: true, record: true, viva: false, signed: false },
            { id: "ex4", name: "Wireshark packet capture analysis", logic: true, record: true, viva: false, signed: false },
            { id: "ex5", name: "Simulate Congestion (Leaky Bucket)", logic: true, record: true, viva: false, signed: false },
          ]
        },
        {
          id: "lab_cd",
          name: "Compiler Design Lab",
          code: "CSL612",
          exercises: [
            { id: "ex1", name: "Lexical Analyzer in C", logic: true, record: true, viva: false, signed: false },
            { id: "ex2", name: "LEX program to count vowels/spaces", logic: true, record: true, viva: false, signed: false },
            { id: "ex3", name: "YACC calculator setup", logic: true, record: true, viva: false, signed: false },
            { id: "ex4", name: "Recursive Descent Parser in C", logic: true, record: true, viva: false, signed: false },
            { id: "ex5", name: "Intermediate Code Generation (Quadruples)", logic: true, record: true, viva: false, signed: false },
          ]
        }
      ];
    }
    if (semester === 7) {
      return [
        {
          id: "lab_graphics",
          name: "Computer Graphics & Image Processing Lab",
          code: "CSL711",
          exercises: [
            { id: "ex1", name: "DDA Line Drawing Algorithm", logic: true, record: true, viva: false, signed: false },
            { id: "ex2", name: "Bresenham's Circle algorithm", logic: true, record: true, viva: false, signed: false },
            { id: "ex3", name: "2D Transformations (Scale, Rotate, Shift)", logic: true, record: true, viva: false, signed: false },
            { id: "ex4", name: "Histogram Equalization image script", logic: true, record: true, viva: false, signed: false },
            { id: "ex5", name: "Image Thresholding & Edge detection", logic: true, record: true, viva: false, signed: false },
          ]
        }
      ];
    }
  }

  // EC Branch Labs
  if (branchId === "ec") {
    if (semester === 3) {
      return [
        {
          id: "lab_ec_devices",
          name: "Electronic Devices & Circuits Lab",
          code: "ECL311",
          exercises: [
            { id: "ex1", name: "BJT characteristics (CE configuration)", logic: true, record: true, viva: false, signed: false },
            { id: "ex2", name: "FET characteristics (CS configuration)", logic: true, record: true, viva: false, signed: false },
            { id: "ex3", name: "Half-wave & Full-wave rectifiers with filters", logic: true, record: true, viva: false, signed: false },
            { id: "ex4", name: "RC coupled BJT amplifier", logic: true, record: true, viva: false, signed: false },
            { id: "ex5", name: "RC Phase Shift Oscillator circuit", logic: true, record: true, viva: false, signed: false },
          ]
        }
      ];
    }
    if (semester === 4) {
      return [
        {
          id: "lab_ec_analog",
          name: "Analog Integrated Circuits Lab",
          code: "ECL411",
          exercises: [
            { id: "ex1", name: "Inverting & Non-inverting Op-Amp", logic: true, record: true, viva: false, signed: false },
            { id: "ex2", name: "Op-Amp Adder and Subtractor", logic: true, record: true, viva: false, signed: false },
            { id: "ex3", name: "Op-Amp Integrator & Differentiator", logic: true, record: true, viva: false, signed: false },
            { id: "ex4", name: "Astable Multivibrator using IC 555", logic: true, record: true, viva: false, signed: false },
            { id: "ex5", name: "Schmitt Trigger circuit setup", logic: true, record: true, viva: false, signed: false },
          ]
        }
      ];
    }
    if (semester === 5) {
      return [
        {
          id: "lab_ec_dsp",
          name: "Digital Signal Processing Lab",
          code: "ECL511",
          exercises: [
            { id: "ex1", name: "Linear and Circular Convolution", logic: true, record: true, viva: false, signed: false },
            { id: "ex2", name: "DFT & IDFT implementation in Matlab", logic: true, record: true, viva: false, signed: false },
            { id: "ex3", name: "N-point FFT algorithm execution", logic: true, record: true, viva: false, signed: false },
            { id: "ex4", name: "FIR Filter design (Window method)", logic: true, record: true, viva: false, signed: false },
            { id: "ex5", name: "IIR Filter design (Butterworth)", logic: true, record: true, viva: false, signed: false },
          ]
        }
      ];
    }
  }

  // EE Branch Labs
  if (branchId === "ee") {
    if (semester === 3) {
      return [
        {
          id: "lab_ee_circuits",
          name: "Circuits & Measurements Lab",
          code: "EEL311",
          exercises: [
            { id: "ex1", name: "Verification of Superposition & Thevenin's Theorems", logic: true, record: true, viva: false, signed: false },
            { id: "ex2", name: "Study of Wheatstone Bridge", logic: true, record: true, viva: false, signed: false },
            { id: "ex3", name: "Measurement of single-phase power", logic: true, record: true, viva: false, signed: false },
            { id: "ex4", name: "Calibration of Single-phase Energy Meter", logic: true, record: true, viva: false, signed: false },
          ]
        }
      ];
    }
    if (semester === 4) {
      return [
        {
          id: "lab_ee_machines",
          name: "Electrical Machines Lab I",
          code: "EEL411",
          exercises: [
            { id: "ex1", name: "Open Circuit Characteristics of DC shunt generator", logic: true, record: true, viva: false, signed: false },
            { id: "ex2", name: "Load test on DC shunt motor", logic: true, record: true, viva: false, signed: false },
            { id: "ex3", name: "Swinburne's test on DC shunt motor", logic: true, record: true, viva: false, signed: false },
            { id: "ex4", name: "Hopkinson's test on DC machines", logic: true, record: true, viva: false, signed: false },
          ]
        }
      ];
    }
  }

  // ME Branch Labs
  if (branchId === "me") {
    if (semester === 3) {
      return [
        {
          id: "lab_me_fluid",
          name: "Fluid Mechanics & Machines Lab",
          code: "MEL311",
          exercises: [
            { id: "ex1", name: "Calibration of Venturimeter & Orificemeter", logic: true, record: true, viva: false, signed: false },
            { id: "ex2", name: "Determination of friction factor in pipes", logic: true, record: true, viva: false, signed: false },
            { id: "ex3", name: "Performance test on Pelton Turbine", logic: true, record: true, viva: false, signed: false },
            { id: "ex4", name: "Performance test on Centrifugal Pump", logic: true, record: true, viva: false, signed: false },
          ]
        }
      ];
    }
  }

  // CE Branch Labs
  if (branchId === "ce") {
    if (semester === 3) {
      return [
        {
          id: "lab_ce_surveying",
          name: "Surveying Lab I",
          code: "CEL311",
          exercises: [
            { id: "ex1", name: "Chain surveying: Triangulation & Plotting", logic: true, record: true, viva: false, signed: false },
            { id: "ex2", name: "Compass surveying: Local attraction", logic: true, record: true, viva: false, signed: false },
            { id: "ex3", name: "Levelling: Fly levelling & Rise-and-Fall", logic: true, record: true, viva: false, signed: false },
            { id: "ex4", name: "Theodolite: Measurement of angles", logic: true, record: true, viva: false, signed: false },
          ]
        }
      ];
    }
  }

  // Dynamic lookup default fallback - searches subjects for the semester
  const fallbackLabName = `${branchId.toUpperCase()} Core Lab`;
  return [
    {
      id: `lab_fallback_${semester}`,
      name: fallbackLabName,
      code: `${branchId.toUpperCase()}L${semester}11`,
      exercises: [
        { id: "ex1", name: "Experiment 1: Basic Calibration", logic: true, record: true, viva: false, signed: false },
        { id: "ex2", name: "Experiment 2: Procedural Verification", logic: false, record: false, viva: false, signed: false },
        { id: "ex3", name: "Experiment 3: Performance Analysis", logic: false, record: false, viva: false, signed: false },
        { id: "ex4", name: "Experiment 4: Synthesis & Tuning", logic: false, record: false, viva: false, signed: false },
        { id: "ex5", name: "Experiment 5: Comprehensive Review", logic: false, record: false, viva: false, signed: false },
      ]
    }
  ];
};

const generateFlashcardsForSubject = (subjectCode: string, subjectName: string, activeSubject?: Subject | null) => {
  const matchingSubject = (activeSubject && activeSubject.code === subjectCode)
    ? activeSubject
    : mockSubjects.find(s => s.code === subjectCode);
  if (matchingSubject && matchingSubject.modules && matchingSubject.modules.length > 0) {
    const cards: Array<{ q: string, a: string }> = [];
    matchingSubject.modules.forEach((mod, modIdx) => {
      if (mod.topics && mod.topics.length > 0) {
        mod.topics.slice(0, 2).forEach((top, topIdx) => {
          cards.push({
            q: `[Module ${modIdx + 1}] Explain the core concepts of "${top.title}" in ${subjectCode}.`,
            a: `This covers: "${top.title}". Exam context: focus on defining standard rules, key derivations, and practical design implications for ${subjectName}.`
          });
        });
      }
    });
    if (cards.length > 0) return cards;
  }
  
  return [
    {
      q: `What are the primary module objectives of ${subjectCode}: ${subjectName}?`,
      a: "To analyze core architectural designs, execute system models, and evaluate optimization targets under APJ AKU syllabus guidelines."
    },
    {
      q: `Explain a typical real-world application of ${subjectCode} concepts.`,
      a: "It is widely used to solve computational bottlenecks, design digital structures, and optimize active resource scheduling across modern engineering networks."
    },
    {
      q: `What is the most common exam question topic in Module 1 of ${subjectName}?`,
      a: "Typically covers basic classifications, fundamental axioms, and mathematical derivations of core system properties."
    },
    {
      q: `How do you verify the correctness of a system built using ${subjectCode} design principles?`,
      a: "Through systematic unit assertions, performance benchmarking, boundary condition analysis, and logical verification tables."
    },
    {
      q: `State one key optimization tip for students preparing for the ESE exam in ${subjectName}.`,
      a: "Focus on drawing clean schematic layouts, practicing previous year question derivations, and solving numerical problems in Modules 3 and 4."
    }
  ];
};

interface ActivityClaim {
  id: string;
  activityCode: string;
  level?: string;
  quantity?: number;
  points: number;
  detail?: string;
}

interface ActivityItem {
  code: string;
  name: string;
  maxPoints: number;
  type: "level" | "count" | "fixed" | "input";
  levels?: Record<string, number>;
  pointsPerUnit?: number;
  unitName?: string;
  proof: string;
  desc?: string;
}

const KTU_ACTIVITIES: Record<string, ActivityItem> = {
  "1.1": {
    code: "1.1",
    name: "Participation in Sports, Arts & Cultural Activities",
    maxPoints: 40,
    type: "level",
    levels: { "College": 1, "Zonal": 5, "State": 10, "National": 20, "International": 40 },
    proof: "Participation Certificate",
    desc: "Only highest level counts. College (1), Zonal (5), State (10), National (20), International (40)"
  },
  "1.2": {
    code: "1.2",
    name: "Winners - Single Events (Sports, Arts & Cultural)",
    maxPoints: 40,
    type: "level",
    levels: { "College": 5, "Zonal": 10, "State": 20, "National": 40, "International": 40 },
    proof: "Winner Certificate",
    desc: "Only highest level counts. Winner overrides participation. College (5), Zonal (10), State (20), National (40), International (40)"
  },
  "1.3": {
    code: "1.3",
    name: "Winners - Group Events (Sports, Arts & Cultural)",
    maxPoints: 40,
    type: "level",
    levels: { "College": 3, "Zonal": 5, "State": 15, "National": 30, "International": 40 },
    proof: "Winner Certificate",
    desc: "Only highest level counts. Winner overrides participation. College (3), Zonal (5), State (15), National (30), International (40)"
  },
  "1.4": {
    code: "1.4",
    name: "College Magazine Publication",
    maxPoints: 20,
    type: "count",
    pointsPerUnit: 5,
    unitName: "article(s)",
    proof: "Published copy of magazine",
    desc: "5 points per activity. Max 20 points per year."
  },
  "1.5": {
    code: "1.5",
    name: "Four-Wheeler Driving License (obtained during course)",
    maxPoints: 5,
    type: "fixed",
    pointsPerUnit: 5,
    proof: "Driving License copy",
    desc: "One-time claim only (5 points)"
  },
  "1.6": {
    code: "1.6",
    name: "Community Service (2 days)",
    maxPoints: 10,
    type: "count",
    pointsPerUnit: 5,
    unitName: "certificate(s)",
    proof: "Certificate from organizing body",
    desc: "5 points per program. Max 10 points."
  },
  "1.7": {
    code: "1.7",
    name: "Community Service (up to 1 week)",
    maxPoints: 10,
    type: "count",
    pointsPerUnit: 10,
    unitName: "certificate(s)",
    proof: "Certificate from organizing body",
    desc: "10 points per program. Max 10 points."
  },
  "1.8": {
    code: "1.8",
    name: "Blood Donation",
    maxPoints: 10,
    type: "count",
    pointsPerUnit: 5,
    unitName: "donation(s)",
    proof: "Blood donation certificate",
    desc: "5 points per donation. Max 10 points."
  },
  "1.9": {
    code: "1.9",
    name: "THRIVE Project (Govt. of Kerala)",
    maxPoints: 20,
    type: "count",
    pointsPerUnit: 10,
    unitName: "semester(s)",
    proof: "THRIVE participation certificate",
    desc: "10 points per semester. Max 20 points."
  },
  "1.10": {
    code: "1.10",
    name: "Tree Planting (Geo-tagged)",
    maxPoints: 5,
    type: "fixed",
    pointsPerUnit: 5,
    proof: "Geo-tagged photo with certificate",
    desc: "One-time claim only (5 points)"
  },
  "1.11": {
    code: "1.11",
    name: "NSS Volunteer (2 years)",
    maxPoints: 30,
    type: "fixed",
    pointsPerUnit: 30,
    proof: "NSS Volunteer Certificate",
    desc: "One-time claim only (30 points)"
  },
  "1.12": {
    code: "1.12",
    name: "University Leadership Camp (100 hours)",
    maxPoints: 20,
    type: "fixed",
    pointsPerUnit: 20,
    proof: "Leadership Camp Certificate",
    desc: "One-time claim only (20 points)"
  },
  "1.13": {
    code: "1.13",
    name: "Winners - State NSS Events",
    maxPoints: 15,
    type: "count",
    pointsPerUnit: 15,
    unitName: "event(s)",
    proof: "Winner Certificate",
    desc: "15 points per event. Max 15 points."
  },
  "1.14": {
    code: "1.14",
    name: "Special Service / Appreciation Certificate",
    maxPoints: 40,
    type: "count",
    pointsPerUnit: 15,
    unitName: "certificate(s)",
    proof: "Appreciation Certificate",
    desc: "15 points per certificate. Max 40 points."
  },
  "1.15": {
    code: "1.15",
    name: "State / National Awards (NSS/NCC)",
    maxPoints: 40,
    type: "level",
    levels: { "State": 15, "National": 25 },
    proof: "Award Certificate",
    desc: "Only highest level counts. State (15), National (25)"
  },
  "1.16": {
    code: "1.16",
    name: "Approved National Camps / NIC / NYF",
    maxPoints: 15,
    type: "fixed",
    pointsPerUnit: 15,
    proof: "Camp participation certificate",
    desc: "One-time claim only (15 points)"
  },
  "1.17": {
    code: "1.17",
    name: "10-Day Volunteer Service (50 hours)",
    maxPoints: 15,
    type: "fixed",
    pointsPerUnit: 15,
    proof: "Volunteer service certificate",
    desc: "One-time claim only (15 points)"
  },
  "1.18": {
    code: "1.18",
    name: "RDC / IDC / International Events (NCC)",
    maxPoints: 25,
    type: "fixed",
    pointsPerUnit: 25,
    proof: "Event participation certificate",
    desc: "One-time claim only (25 points)"
  },
  "1.19": {
    code: "1.19",
    name: "NCC Certificates",
    maxPoints: 30,
    type: "level",
    levels: { "One Year NCC + Parade": 10, "NCC 'B' Certificate": 20, "NCC 'C' Certificate": 30 },
    proof: "NCC Certificate",
    desc: "Only highest level counts. One Year NCC (10), NCC 'B' (20), NCC 'C' (30)"
  },
  "1.20": {
    code: "1.20",
    name: "First Aid / CPR / Fire Safety Training",
    maxPoints: 10,
    type: "count",
    pointsPerUnit: 5,
    unitName: "training(s)",
    proof: "Training completion certificate",
    desc: "5 points per training. Max 10 points."
  },
  "1.21": {
    code: "1.21",
    name: "Swimming Proficiency",
    maxPoints: 5,
    type: "fixed",
    pointsPerUnit: 5,
    proof: "Swimming proficiency certificate",
    desc: "One-time claim only (5 points)"
  },
  "2.1": {
    code: "2.1",
    name: "Tech-Fest Participation",
    maxPoints: 30,
    type: "level",
    levels: { "College": 2, "Zonal": 5, "State": 10, "National": 20, "International": 30 },
    proof: "Participation Certificate",
    desc: "Only highest level counts. College (2), Zonal (5), State (10), National (20), International (30)"
  },
  "2.2": {
    code: "2.2",
    name: "Tech-Fest Winners",
    maxPoints: 40,
    type: "level",
    levels: { "College": 5, "Zonal": 10, "State": 20, "National": 40, "International": 40 },
    proof: "Winner Certificate",
    desc: "Only highest level counts. Winner overrides participation. College (5), Zonal (10), State (20), National (40), International (40)"
  },
  "2.3": {
    code: "2.3",
    name: "Professional Society Events - Participation",
    maxPoints: 20,
    type: "level",
    levels: { "College": 2, "Zonal": 5, "State": 10, "National": 15, "International": 20 },
    proof: "Participation Certificate",
    desc: "Only highest level counts. College (2), Zonal (5), State (10), National (15), International (20)"
  },
  "2.4": {
    code: "2.4",
    name: "Professional Society Events - Winners",
    maxPoints: 35,
    type: "level",
    levels: { "College": 3, "Zonal": 7, "State": 15, "National": 25, "International": 35 },
    proof: "Winner Certificate",
    desc: "Only highest level counts. Winner overrides participation. College (3), Zonal (7), State (15), National (25), International (35)"
  },
  "2.5": {
    code: "2.5",
    name: "Conferences / Workshops (Top Institutes)",
    maxPoints: 15,
    type: "count",
    pointsPerUnit: 5,
    unitName: "event(s)",
    proof: "Certificate from organizing institute",
    desc: "5 points per event. Max 15 points."
  },
  "2.6": {
    code: "2.6",
    name: "Poster Presentation",
    maxPoints: 40,
    type: "count",
    pointsPerUnit: 5,
    unitName: "presentation(s)",
    proof: "Poster presentation certificate",
    desc: "5 points per presentation. Max 40 points."
  },
  "2.7": {
    code: "2.7",
    name: "Paper Presentation (Top Institutes)",
    maxPoints: 40,
    type: "count",
    pointsPerUnit: 10,
    unitName: "presentation(s)",
    proof: "Paper presentation certificate",
    desc: "10 points per presentation. Max 40 points."
  },
  "2.8": {
    code: "2.8",
    name: "Paper Presentation - Winners (Top Institutes)",
    maxPoints: 40,
    type: "level",
    levels: { "2nd/3rd Place": 15, "1st Place": 20 },
    proof: "Winner certificate",
    desc: "Only highest level counts. 1st Place (20), 2nd/3rd Place (15)"
  },
  "2.9": {
    code: "2.9",
    name: "Paper Presentation (KTU Colleges)",
    maxPoints: 40,
    type: "level",
    levels: { "Participation": 5, "Winner (2nd/3rd)": 7, "Winner (1st)": 10 },
    proof: "Certificate from KTU college",
    desc: "Only highest level counts. Participation (5), Winner 2nd/3rd (7), Winner 1st (10)"
  },
  "2.11": {
    code: "2.11",
    name: "Professional Society Membership",
    maxPoints: 15,
    type: "level",
    levels: { "Member": 5, "Executive": 10, "Chair/Lead": 15 },
    proof: "Membership/position certificate",
    desc: "Only highest level counts. Member (5), Executive (10), Chair/Lead (15)"
  },
  "2.12": {
    code: "2.12",
    name: "College / University Union Office Bearer",
    maxPoints: 30,
    type: "level",
    levels: { "College Office Bearer": 20, "University Office Bearer": 30 },
    proof: "Office bearer certificate",
    desc: "Only highest level counts. College Office Bearer (20), University Office Bearer (30)"
  },
  "2.13": {
    code: "2.13",
    name: "Department Association Role",
    maxPoints: 10,
    type: "count",
    pointsPerUnit: 5,
    unitName: "year(s)",
    proof: "Association certificate",
    desc: "5 points per year. Max 10 points."
  },
  "2.14": {
    code: "2.14",
    name: "Class Representative",
    maxPoints: 10,
    type: "count",
    pointsPerUnit: 5,
    unitName: "year(s)",
    proof: "Class representative certificate",
    desc: "5 points per year. Max 10 points."
  },
  "2.15": {
    code: "2.15",
    name: "Industrial Visit Coordinator",
    maxPoints: 5,
    type: "fixed",
    pointsPerUnit: 5,
    proof: "Coordinator certificate",
    desc: "One-time claim only (5 points)"
  },
  "2.16": {
    code: "2.16",
    name: "Placement Cell Role",
    maxPoints: 10,
    type: "level",
    levels: { "Executive": 5, "Coordinator": 10 },
    proof: "Placement cell certificate",
    desc: "Only highest level counts. Executive (5), Coordinator (10)"
  },
  "2.17": {
    code: "2.17",
    name: "IEDC Cell Role",
    maxPoints: 10,
    type: "level",
    levels: { "Exec/Office Bearer": 5, "Event Coordinator": 5 },
    proof: "IEDC certificate",
    desc: "Exec/Office Bearer (5), Event Coordinator (5)"
  },
  "2.18": {
    code: "2.18",
    name: "YIP (K-DISC) - Student Coordinator",
    maxPoints: 5,
    type: "fixed",
    pointsPerUnit: 5,
    proof: "YIP coordinator certificate",
    desc: "One-time claim only (5 points)"
  },
  "2.19": {
    code: "2.19",
    name: "STRIDE Student Activity",
    maxPoints: 20,
    type: "level",
    levels: { "Volunteer": 5, "Member": 5, "Leadership": 10, "High Impact Project": 20 },
    proof: "STRIDE certificate",
    desc: "Only highest level counts. Volunteer (5), Member (5), Leadership (10), High Impact Project (20)"
  },
  "2.20": {
    code: "2.20",
    name: "College Magazine Editorial Board",
    maxPoints: 10,
    type: "count",
    pointsPerUnit: 5,
    unitName: "year(s)",
    proof: "Editorial board certificate",
    desc: "5 points per activity. Max 10 points."
  },
  "2.21": {
    code: "2.21",
    name: "Hobby Clubs (Exec/Convenor)",
    maxPoints: 10,
    type: "count",
    pointsPerUnit: 5,
    unitName: "year(s)",
    proof: "Club certificate",
    desc: "5 points per year. Max 10 points."
  },
  "2.22": {
    code: "2.22",
    name: "FOSS / Open Source Member/Lead",
    maxPoints: 20,
    type: "level",
    levels: { "Club Member": 5, "Lead": 10, "Open Source Contribution": 10, "Internship": 10 },
    proof: "Certificate/proof of contribution",
    desc: "Club Member (5), Lead (10), Open Source Contribution (10), Internship (10)"
  },
  "2.23": {
    code: "2.23",
    name: "Short-Term Internship (>=2 weeks)",
    maxPoints: 10,
    type: "fixed",
    pointsPerUnit: 10,
    proof: "Internship completion certificate",
    desc: "One-time claim only (10 points)"
  },
  "2.24": {
    code: "2.24",
    name: "English Proficiency (TOEFL/IELTS/PTE/BEC)",
    maxPoints: 30,
    type: "input",
    proof: "Score card/certificate",
    desc: "Based on score. Max 30 points."
  },
  "2.25": {
    code: "2.25",
    name: "Aptitude Tests (GRE/GATE/CAT/GMAT)",
    maxPoints: 30,
    type: "input",
    proof: "Score card",
    desc: "Based on score. Max 30 points."
  },
  "3.1": {
    code: "3.1",
    name: "Industrial Visit Report",
    maxPoints: 20,
    type: "count",
    pointsPerUnit: 5,
    unitName: "report(s)",
    proof: "Approved IV report",
    desc: "5 points per report. Max 20 points."
  },
  "3.2": {
    code: "3.2",
    name: "Best Project / Seminar",
    maxPoints: 5,
    type: "fixed",
    pointsPerUnit: 5,
    proof: "Best project/seminar certificate",
    desc: "One-time claim only (5 points)"
  },
  "3.3": {
    code: "3.3",
    name: "Long-Term Internship (>=3.5 months)",
    maxPoints: 15,
    type: "fixed",
    pointsPerUnit: 15,
    proof: "Internship completion certificate",
    desc: "One-time claim only (15 points)"
  },
  "3.4": {
    code: "3.4",
    name: "LEAP (IIT Madras)",
    maxPoints: 30,
    type: "input",
    proof: "LEAP certificate",
    desc: "Program specific points. Max 30 points."
  },
  "3.5": {
    code: "3.5",
    name: "YIP (K-DISC)",
    maxPoints: 35,
    type: "input",
    proof: "YIP certificate",
    desc: "Program specific points. Max 35 points."
  },
  "3.6": {
    code: "3.6",
    name: "STRIDE Innovation Scheme",
    maxPoints: 35,
    type: "input",
    proof: "STRIDE certificate",
    desc: "Program specific points. Max 35 points."
  },
  "3.7": {
    code: "3.7",
    name: "GDC AI Workforce Program",
    maxPoints: 35,
    type: "input",
    proof: "GDC certificate",
    desc: "Program specific points. Max 35 points."
  },
  "3.8": {
    code: "3.8",
    name: "ICFOSS Certified Solution",
    maxPoints: 25,
    type: "fixed",
    pointsPerUnit: 25,
    proof: "ICFOSS certificate",
    desc: "One-time claim only (25 points)"
  },
  "3.9": {
    code: "3.9",
    name: "Registered Startup",
    maxPoints: 30,
    type: "fixed",
    pointsPerUnit: 30,
    proof: "Startup registration certificate",
    desc: "One-time claim only (30 points)"
  },
  "3.10": {
    code: "3.10",
    name: "Patents",
    maxPoints: 40,
    type: "level",
    levels: { "Filed": 20, "Published": 30, "Granted/Licensed": 40 },
    proof: "Patent certificate/proof",
    desc: "Only highest level counts. Filed (20), Published (30), Granted/Licensed (40)"
  },
  "3.11": {
    code: "3.11",
    name: "Prototype / Industry Adoption",
    maxPoints: 40,
    type: "fixed",
    pointsPerUnit: 40,
    proof: "Industry adoption certificate",
    desc: "One-time claim only (40 points)"
  },
  "3.12": {
    code: "3.12",
    name: "Venture Capital / Angel Funding",
    maxPoints: 40,
    type: "fixed",
    pointsPerUnit: 40,
    proof: "Funding proof",
    desc: "One-time claim only (40 points)"
  },
  "3.13": {
    code: "3.13",
    name: "Societal Innovation Project",
    maxPoints: 40,
    type: "fixed",
    pointsPerUnit: 40,
    proof: "Innovation certificate",
    desc: "One-time claim only (40 points)"
  },
  "3.14": {
    code: "3.14",
    name: "Research Publications",
    maxPoints: 40,
    type: "level",
    levels: { "Q3/Q4 Journal": 25, "Q1/Q2 Journal": 40 },
    proof: "Published paper proof",
    desc: "Only highest level counts. Q3/Q4 Journal (25), Q1/Q2 Journal (40)"
  },
  "3.15": {
    code: "3.15",
    name: "National Hackathons",
    maxPoints: 40,
    type: "level",
    levels: { "3rd Place": 30, "2nd Place": 35, "1st Place": 40 },
    proof: "Hackathon winner certificate",
    desc: "Only highest level counts. 1st Place (40), 2nd Place (35), 3rd Place (30)"
  },
  "3.16": {
    code: "3.16",
    name: "International Hackathons",
    maxPoints: 40,
    type: "level",
    levels: { "Participation": 30, "Runner-up": 35, "Winner": 40 },
    proof: "Hackathon certificate",
    desc: "Only highest level counts. Participation (30), Runner-up (35), Winner (40)"
  },
  "3.17": {
    code: "3.17",
    name: "Skilling Courses (Approved)",
    maxPoints: 40,
    type: "count",
    pointsPerUnit: 1,
    unitName: "hour(s)",
    proof: "Course completion certificate",
    desc: "1 point per hour. Max 40 points."
  }
};

const KTU_ACTIVITY_GROUPS = [
  {
    id: "I",
    name: "Group I: Co-curricular Activities",
    categories: [
      {
        name: "Sports, Arts & Cultural Activities",
        activities: ["1.1", "1.2", "1.3"]
      },
      {
        name: "College Magazine Publication",
        activities: ["1.4"]
      },
      {
        name: "Driving License",
        activities: ["1.5"]
      },
      {
        name: "Community Service & Outreach",
        activities: ["1.6", "1.7", "1.8", "1.9", "1.10"]
      },
      {
        name: "NSS / NCC / NSO",
        activities: ["1.11", "1.12", "1.13", "1.14", "1.15", "1.16", "1.17", "1.18", "1.19"]
      },
      {
        name: "Health & Life Skills",
        activities: ["1.20", "1.21"]
      }
    ]
  },
  {
    id: "II",
    name: "Group II: Professional Development",
    categories: [
      {
        name: "Technical Events",
        activities: ["2.1", "2.2", "2.3", "2.4"]
      },
      {
        name: "Academic Presentations",
        activities: ["2.5", "2.6", "2.7", "2.8", "2.9"]
      },
      {
        name: "Leadership & Roles",
        activities: ["2.11", "2.12", "2.13", "2.14", "2.15", "2.16", "2.17", "2.18", "2.19", "2.20", "2.21"]
      },
      {
        name: "FOSS & Internships",
        activities: ["2.22", "2.23"]
      },
      {
        name: "Certifications",
        activities: ["2.24", "2.25"]
      }
    ]
  },
  {
    id: "III",
    name: "Group III: Advanced Achievements",
    categories: [
      {
        name: "Reports & Projects",
        activities: ["3.1", "3.2", "3.3"]
      },
      {
        name: "Programs",
        activities: ["3.4", "3.5", "3.6", "3.7", "3.8"]
      },
      {
        name: "Innovation, Patents & Research",
        activities: ["3.9", "3.10", "3.11", "3.12", "3.13", "3.14"]
      },
      {
        name: "Hackathons & Skilling",
        activities: ["3.15", "3.16", "3.17"]
      }
    ]
  }
];

const calculateActivityPoints = (activities: ActivityClaim[], studentType: "regular" | "lateral" | "pwd") => {
  let groupCaps = 40;
  let groupMins = 40;
  let totalRequired = 120;
  let ratio = 1.0;
  
  if (studentType === "lateral") {
    groupCaps = 30;
    groupMins = 30;
    totalRequired = 90;
    ratio = 0.75;
  } else if (studentType === "pwd") {
    groupCaps = 20;
    groupMins = 20;
    totalRequired = 60;
    ratio = 0.5;
  }

  // 1. Group claims by activityCode
  const codePoints: Record<string, number> = {};
  const claimsByCode: Record<string, ActivityClaim[]> = {};
  
  activities.forEach(act => {
    if (!claimsByCode[act.activityCode]) {
      claimsByCode[act.activityCode] = [];
    }
    claimsByCode[act.activityCode].push(act);
  });

  // Calculate points per activity code based on type rules (accumulative for count/input vs max for level/fixed)
  Object.entries(claimsByCode).forEach(([code, claims]) => {
    const details = KTU_ACTIVITIES[code];
    if (!details) return;

    const scaledMaxPoints = Math.round(details.maxPoints * ratio);

    if (details.type === "level" || details.type === "fixed") {
      // Only highest level or one-time counts
      const maxPts = Math.max(...claims.map(c => c.points));
      codePoints[code] = Math.min(scaledMaxPoints, maxPts);
    } else {
      // Accumulative count/input up to the individual activity's maxPoints cap
      const sumPts = claims.reduce((acc, c) => acc + c.points, 0);
      codePoints[code] = Math.min(scaledMaxPoints, sumPts);
    }
  });

  // 2. Apply override rules (Winner overrides participation, highest counts across sports/arts/tech)
  
  // Group I: Sports, Arts & Cultural Events -> Max of (1.1, 1.2, 1.3), capped at 40 (scaled)
  const sportsArtsMax = Math.max(
    codePoints["1.1"] || 0,
    codePoints["1.2"] || 0,
    codePoints["1.3"] || 0
  );
  if (sportsArtsMax > 0) {
    codePoints["sports_arts"] = Math.min(Math.round(40 * ratio), sportsArtsMax);
    delete codePoints["1.1"];
    delete codePoints["1.2"];
    delete codePoints["1.3"];
  }

  // Group II: Tech-Fest -> Max of (2.1, 2.2), capped at 40 (scaled)
  const techFestMax = Math.max(
    codePoints["2.1"] || 0,
    codePoints["2.2"] || 0
  );
  if (techFestMax > 0) {
    codePoints["tech_fest"] = Math.min(Math.round(40 * ratio), techFestMax);
    delete codePoints["2.1"];
    delete codePoints["2.2"];
  }

  // Group II: Professional Society Events -> Max of (2.3, 2.4), capped at 35 (scaled)
  const profSocietyMax = Math.max(
    codePoints["2.3"] || 0,
    codePoints["2.4"] || 0
  );
  if (profSocietyMax > 0) {
    codePoints["prof_society"] = Math.min(Math.round(35 * ratio), profSocietyMax);
    delete codePoints["2.3"];
    delete codePoints["2.4"];
  }

  // Group II: Paper Presentations -> Max of (2.7, 2.8, 2.9), capped at 40 (scaled)
  const paperPresentationMax = Math.max(
    codePoints["2.7"] || 0,
    codePoints["2.8"] || 0,
    codePoints["2.9"] || 0
  );
  if (paperPresentationMax > 0) {
    codePoints["paper_presentation"] = Math.min(Math.round(40 * ratio), paperPresentationMax);
    delete codePoints["2.7"];
    delete codePoints["2.8"];
    delete codePoints["2.9"];
  }

  // 3. Compute totals per Group (I, II, III)
  let group1Raw = 0;
  let group2Raw = 0;
  let group3Raw = 0;

  Object.entries(codePoints).forEach(([code, pts]) => {
    if (code.startsWith("1") || code === "sports_arts") {
      group1Raw += pts;
    } else if (code.startsWith("2") || code === "tech_fest" || code === "prof_society" || code === "paper_presentation") {
      group2Raw += pts;
    } else if (code.startsWith("3")) {
      group3Raw += pts;
    }
  });

  const group1Capped = Math.min(groupCaps, group1Raw);
  const group2Capped = Math.min(groupCaps, group2Raw);
  const group3Capped = Math.min(groupCaps, group3Raw);
  const totalCapped = Math.min(totalRequired, group1Capped + group2Capped + group3Capped);

  const issues: string[] = [];
  if (group1Capped < groupMins) issues.push(`Group I: ${group1Capped}/${groupMins} pts`);
  if (group2Capped < groupMins) issues.push(`Group II: ${group2Capped}/${groupMins} pts`);
  if (group3Capped < groupMins) issues.push(`Group III: ${group3Capped}/${groupMins} pts`);
  if (totalCapped < totalRequired) issues.push(`Total: ${totalCapped}/${totalRequired} pts`);

  const isQualified = issues.length === 0;

  return {
    group1Raw,
    group2Raw,
    group3Raw,
    group1Capped,
    group2Capped,
    group3Capped,
    totalCapped,
    totalRequired,
    groupMins,
    groupCaps,
    isQualified,
    issues
  };
};

const TOOLS = [
  {
    id: "gpa",
    title: "GPA & CGPA Calculator",
    kidDescription: "Calculate your grades and see your average score in one tap! No confusing math needed.",
    category: "grades",
    icon: Calculator,
    color: "from-blue-500 to-indigo-600 dark:from-blue-600/20 dark:to-indigo-600/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/15"
  },
  {
    id: "predictor",
    title: "Grade Predictor",
    kidDescription: "Enter your class test scores and see exactly what marks you need in final exams to get your dream grade.",
    category: "grades",
    icon: Award,
    color: "from-violet-500 to-purple-600 dark:from-violet-600/20 dark:to-purple-600/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/15"
  },
  {
    id: "sandbox",
    title: "Pass/Fail Sandbox",
    kidDescription: "Find out instantly if you passed your internal marks and see your final exam requirement.",
    category: "grades",
    icon: ShieldCheck,
    color: "from-sky-500 to-blue-600 dark:from-sky-600/20 dark:to-blue-600/20",
    iconColor: "text-sky-600 dark:text-sky-400",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/15"
  },
  {
    id: "converter",
    title: "Grade Point Converter",
    kidDescription: "Easily swap between your SGPA/CGPA point score and normal percentages.",
    category: "grades",
    icon: Percent,
    color: "from-blue-400 to-sky-500 dark:from-blue-500/20 dark:to-sky-500/20",
    iconColor: "text-blue-500 dark:text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/15"
  },
  {
    id: "attendance",
    title: "Attendance Log",
    kidDescription: "Count your classes and see exactly how many days you can miss safely without getting in trouble!",
    category: "attendance",
    icon: Activity,
    color: "from-emerald-500 to-teal-600 dark:from-emerald-600/20 dark:to-teal-600/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/15"
  },
  {
    id: "attMarks",
    title: "Attendance Marks Check",
    kidDescription: "See how many extra free marks (0 to 5) you get on your report card based on your attendance.",
    category: "attendance",
    icon: Percent,
    color: "from-teal-500 to-emerald-600 dark:from-teal-600/20 dark:to-teal-600/20",
    iconColor: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/15"
  },
  {
    id: "labs",
    title: "Lab Work Tracker",
    kidDescription: "Keep a simple checklist of your experiments, records, and signed sheets so you don't miss anything.",
    category: "attendance",
    icon: ListTodo,
    color: "from-purple-500 to-indigo-600 dark:from-purple-600/20 dark:to-indigo-600/20",
    iconColor: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/15"
  },
  {
    id: "activity",
    title: "Activity Points Auditor",
    kidDescription: "Count up your extra activities, sports, and awards to see if you have met the 120 points graduation requirement.",
    category: "progression",
    icon: Award,
    color: "from-amber-500 to-orange-600 dark:from-amber-600/20 dark:to-orange-600/20",
    iconColor: "text-amber-600 dark:text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/15"
  },
  {
    id: "auditor",
    title: "Year-Back Credit Auditor",
    kidDescription: "Count your passed subject credits and make sure you are safe to move up to the next year of college.",
    category: "progression",
    icon: ShieldCheck,
    color: "from-indigo-500 to-violet-600 dark:from-indigo-600/20 dark:to-violet-600/20",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/15"
  },

  {
    id: "timeline",
    title: "Working Days Timeline",
    kidDescription: "Check a live timeline of working days elapsed, exam dates, and registrations.",
    category: "reference",
    icon: Clock,
    color: "from-blue-500 to-indigo-600 dark:from-blue-600/20 dark:to-indigo-600/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/15"
  },
  {
    id: "slots",
    title: "Exam Slot Reference",
    kidDescription: "See which exam letter slot (A, B, C...) each of your subjects falls into with a single click.",
    category: "reference",
    icon: Calendar,
    color: "from-orange-500 to-amber-600 dark:from-orange-600/20 dark:to-amber-600/20",
    iconColor: "text-orange-600 dark:text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/15"
  },
  {
    id: "notepad",
    title: "Study Notepad",
    kidDescription: "A clean, private note sheet that saves automatically as you write down formulas or task lists.",
    category: "reference",
    icon: Notebook,
    color: "from-slate-500 to-slate-700 dark:from-slate-600/20 dark:to-slate-800/20",
    iconColor: "text-slate-600 dark:text-slate-400",
    bgColor: "bg-slate-500/10",
    borderColor: "border-slate-500/15"
  }
];

interface AttendanceStepperProps {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const AttendanceStepper: React.FC<AttendanceStepperProps> = ({ label, value, onIncrement, onDecrement }) => {
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const startAction = (action: () => void) => {
    action();
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        action();
      }, 80);
    }, 450);
  };

  const stopAction = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  React.useEffect(() => {
    return stopAction;
  }, []);

  return (
    <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-1">
      <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider px-2 select-none">{label}</span>
      <button
        onMouseDown={() => startAction(onDecrement)}
        onMouseUp={stopAction}
        onMouseLeave={stopAction}
        onTouchStart={(e) => {
          e.preventDefault();
          startAction(onDecrement);
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          stopAction();
        }}
        className="w-7 h-7 flex items-center justify-center rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-350 font-extrabold text-xs transition-colors cursor-pointer select-none active:scale-90"
        aria-label={`Decrement ${label}`}
      >
        −
      </button>
      <span className="w-8 text-center text-[11px] font-black text-slate-800 dark:text-slate-100 font-mono select-none">
        {value}
      </span>
      <button
        onMouseDown={() => startAction(onIncrement)}
        onMouseUp={stopAction}
        onMouseLeave={stopAction}
        onTouchStart={(e) => {
          e.preventDefault();
          startAction(onIncrement);
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          stopAction();
        }}
        className="w-7 h-7 flex items-center justify-center rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-350 font-extrabold text-xs transition-colors cursor-pointer select-none active:scale-90"
        aria-label={`Increment ${label}`}
      >
        +
      </button>
    </div>
  );
};

interface LabRecordTrackerProps {
  branch: string;
  sem: number;
  triggerNotification: (msg: string) => void;
}

const LabRecordTracker: React.FC<LabRecordTrackerProps> = ({ branch, sem, triggerNotification }) => {
  const [labCourses, setLabCourses] = useState<LabCourse[]>([]);
  const [activeLabTab, setActiveLabTab] = useState<string>("");

  useEffect(() => {
    const savedLabs = localStorage.getItem(`ktunode_tools_labs_${branch}_${sem}`);
    if (savedLabs) {
      try {
        const parsed = JSON.parse(savedLabs);
        if (Array.isArray(parsed)) {
          setLabCourses(parsed);
          if (parsed.length > 0) setActiveLabTab(parsed[0].id);
          return;
        }
      } catch {}
    }
    
    // Default to empty or load
    setLabCourses([]);
    setActiveLabTab("");
  }, [branch, sem]);

  const saveLabs = (updated: LabCourse[]) => {
    setLabCourses(updated);
    localStorage.setItem(`ktunode_tools_labs_${branch}_${sem}`, JSON.stringify(updated));
  };

  const addLabExercise = (labId: string) => {
    const label = prompt("Enter Exercise Title/Name:", "Ex: File Transfer Protocol");
    if (!label) return;

    const updated = labCourses.map(lab => {
      if (lab.id === labId) {
        const nextId = `ex_${Date.now()}`;
        return {
          ...lab,
          exercises: [
            ...lab.exercises,
            { id: nextId, name: label, logic: false, record: false, viva: false, signed: false }
          ]
        };
      }
      return lab;
    });
    saveLabs(updated);
    triggerNotification("New exercise added to record!");
  };

  const removeLabExercise = (labId: string, exId: string) => {
    const lab = labCourses.find(l => l.id === labId);
    const exercise = lab?.exercises.find(ex => ex.id === exId);
    const name = exercise ? exercise.name : "this experiment";
    if (!window.confirm(`Are you sure you want to delete "${name}" from the tracker?`)) {
      return;
    }
    const updated = labCourses.map(lab => {
      if (lab.id === labId) {
        return {
          ...lab,
          exercises: lab.exercises.filter(ex => ex.id !== exId)
        };
      }
      return lab;
    });
    saveLabs(updated);
    triggerNotification("Exercise removed.");
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6">
      <div className="bg-white/65 dark:bg-slate-900/65 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm dark:shadow-md dark:shadow-slate-950/20 hover:border-slate-350 dark:hover:border-slate-700/80 transition-all duration-300 w-full space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-white/[0.06] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <FlaskConical className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-tight text-slate-900 dark:text-slate-100">Lab Record Tracker</h3>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mt-0.5">Track experiment submissions, viva, and sign-off status</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (labCourses.length === 0) {
                  const labs = getDefaultLabsForSession(branch, sem);
                  saveLabs(labs);
                  if (labs.length > 0) setActiveLabTab(labs[0].id);
                  triggerNotification("Lab courses loaded!");
                }
              }}
              className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95"
            >
              {labCourses.length === 0 ? "Load Labs" : `${labCourses.length} Labs`}
            </button>
          </div>
        </div>

        {labCourses.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 px-4 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl">
            <FlaskConical className="w-10 h-10 text-slate-400 mb-3" />
            <span className="text-[12px] font-semibold text-slate-500 dark:text-slate-400 mb-1">No lab courses loaded</span>
            <span className="text-[11px] text-slate-400 dark:text-slate-550 text-center mb-4">Click &quot;Load Labs&quot; to import your {branch.toUpperCase()} S{sem} lab courses and start tracking experiments.</span>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Lab course tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
              {labCourses.map(lab => (
                <button
                  key={lab.id}
                  onClick={() => setActiveLabTab(lab.id)}
                  className={`px-3 py-1.5 rounded-2xl text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
                    activeLabTab === lab.id
                      ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                      : "text-slate-500 dark:text-slate-400 border border-transparent hover:bg-slate-100 dark:hover:bg-white/[0.02]"
                  }`}
                >
                  {lab.code}
                </button>
              ))}
            </div>

            {/* Active lab exercises */}
            {(() => {
              const activeLab = labCourses.find(l => l.id === activeLabTab);
              if (!activeLab) return null;
              const totalExercises = activeLab.exercises.length;
              const completedExercises = activeLab.exercises.filter(ex => ex.logic && ex.record && ex.signed).length;
              const progressPct = totalExercises > 0 ? Math.round((completedExercises / totalExercises) * 100) : 0;

              return (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[12px] font-semibold text-slate-900 dark:text-white block">{activeLab.name}</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">{completedExercises}/{totalExercises} fully complete</span>
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${progressPct >= 80 ? "bg-emerald-500/10 text-emerald-500" : progressPct >= 50 ? "bg-blue-500/10 text-blue-500" : "bg-amber-500/10 text-amber-500"}`}>
                      {progressPct}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-500 ${progressPct >= 80 ? "bg-emerald-500" : progressPct >= 50 ? "bg-blue-500" : "bg-amber-500"}`} style={{ width: `${progressPct}%` }} />
                  </div>

                  <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                    {/* Table header */}
                    <div className="hidden sm:grid grid-cols-12 gap-2 px-3 py-1.5 text-[9px] font-bold text-slate-400 uppercase tracking-widest items-center">
                      <div className="col-span-5">Experiment</div>
                      <div className="col-span-2 text-center">Logic</div>
                      <div className="col-span-2 text-center">Record</div>
                      <div className="col-span-2 text-center">Signed</div>
                      <div className="col-span-1 text-center">Action</div>
                    </div>
                    {activeLab.exercises.map((ex) => {
                      const allDone = ex.logic && ex.record && ex.signed;
                      return (
                        <div 
                          key={ex.id} 
                          className={`flex flex-col sm:grid sm:grid-cols-12 gap-2.5 items-stretch sm:items-center px-4 py-3 sm:py-2.5 rounded-2xl border transition-all duration-300 ${allDone ? "bg-emerald-500/[0.02] border-emerald-500/20 dark:border-emerald-500/15" : "bg-slate-50/40 dark:bg-slate-900/10 border-slate-200/55 dark:border-slate-800/40 hover:border-slate-350 dark:hover:border-slate-700/60"}`}
                        >
                          {/* Experiment title */}
                          <div className="w-full sm:col-span-5 flex items-center">
                            <input
                              type="text"
                              value={ex.name}
                              onChange={(e) => {
                                const updated = labCourses.map(c => {
                                  if (c.id !== activeLabTab) return c;
                                  return {
                                    ...c,
                                    exercises: c.exercises.map(e2 =>
                                      e2.id === ex.id ? { ...e2, name: e.target.value } : e2
                                    )
                                  };
                                });
                                saveLabs(updated);
                              }}
                              className="w-full bg-transparent border-none focus:outline-none focus:ring-1 focus:ring-blue-500/30 rounded px-1 text-[12px] sm:text-[11px] font-semibold text-slate-800 dark:text-slate-200 truncate"
                            />
                          </div>

                          {/* Mobile Checkboxes group and delete action */}
                          <div className="flex sm:contents items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-800/40 sm:border-0 pt-2 sm:pt-0">
                            {(["logic", "record", "signed"] as const).map(field => {
                              const isChecked = ex[field];
                              const isSigned = field === "signed";
                              
                              let buttonStyle = "";
                              let iconNode = null;
                              
                              if (isSigned) {
                                if (isChecked) {
                                  buttonStyle = "bg-blue-500 text-white shadow-sm shadow-blue-500/20";
                                  iconNode = <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" />;
                                } else {
                                  buttonStyle = "border border-slate-300 dark:border-slate-700 hover:border-slate-450 dark:hover:border-slate-500 bg-transparent text-slate-400 dark:text-slate-500";
                                  iconNode = <Shield className="w-3.5 h-3.5 stroke-[2]" />;
                                }
                              } else {
                                if (isChecked) {
                                  buttonStyle = "bg-emerald-500 text-white rounded-full shadow-sm shadow-emerald-500/20";
                                  iconNode = <Check className="w-3 h-3 stroke-[3]" />;
                                } else {
                                  buttonStyle = "border border-slate-300 dark:border-slate-700 hover:border-slate-450 dark:hover:border-slate-500 rounded-full bg-transparent";
                                  iconNode = null;
                                }
                              }

                              return (
                                <div key={field} className="flex-1 sm:col-span-2 flex items-center justify-center gap-1.5">
                                  <span className="sm:hidden text-[9px] font-black text-slate-400 uppercase tracking-wide">{field}:</span>
                                  <button
                                    onClick={() => {
                                      const updatedCourses = labCourses.map(c => {
                                        if (c.id !== activeLabTab) return c;
                                        return {
                                          ...c,
                                          exercises: c.exercises.map(e =>
                                            e.id === ex.id ? { ...e, [field]: !e[field] } : e
                                          )
                                        };
                                      });
                                      saveLabs(updatedCourses);
                                    }}
                                    className={`w-7 h-7 sm:w-6 sm:h-6 flex items-center justify-center transition-all cursor-pointer active:scale-90 ${
                                      isSigned ? "rounded-lg" : "rounded-full"
                                    } ${buttonStyle}`}
                                    aria-label={`Mark ${field} for ${ex.name}`}
                                  >
                                    {iconNode}
                                  </button>
                                </div>
                              );
                            })}
                            
                            {/* Action (Delete) */}
                            <div className="flex justify-center items-center sm:col-span-1 pl-2 sm:pl-0 border-l border-slate-150 dark:border-slate-800/40 sm:border-l-0">
                              <span className="sm:hidden text-[9px] font-black text-slate-400 uppercase tracking-wide mr-2">Delete:</span>
                              <button
                                onClick={() => removeLabExercise(activeLab.id, ex.id)}
                                className="text-slate-450 hover:text-rose-500 transition-all p-1.5 rounded-lg hover:bg-rose-500/10 cursor-pointer active:scale-90"
                                aria-label="Remove experiment"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Add experiment at bottom */}
                  <div className="pt-2 border-t border-slate-100 dark:border-white/[0.03] flex justify-end">
                    <button
                      onClick={() => addLabExercise(activeLab.id)}
                      className="px-3 py-1.5 bg-blue-500/10 hover:bg-blue-500/15 border border-blue-500/15 text-blue-600 dark:text-blue-400 rounded-2xl text-[10px] font-semibold uppercase transition-all cursor-pointer flex items-center gap-1 active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Experiment
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
};

export default function ToolsPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Global Haptic Feedback Engine for all interactive elements in Tools Page
  useEffect(() => {
    if (!mounted) return;

    // Cache/unlock AudioContext on first click/touchstart gesture
    const unlockAudio = () => {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        try {
          const tempCtx = new AudioContextClass();
          if (tempCtx.state === "suspended") {
            tempCtx.resume();
          }
        } catch {}
      }
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };
    window.addEventListener("click", unlockAudio);
    window.addEventListener("touchstart", unlockAudio);

    const handleGlobalClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement | null;
      while (target && target !== document.body) {
        const tagName = target.tagName.toLowerCase();
        const role = target.getAttribute("role");
        const isInteractive =
          tagName === "button" ||
          tagName === "a" ||
          tagName === "select" ||
          tagName === "input" ||
          role === "button" ||
          role === "tab" ||
          role === "checkbox" ||
          role === "option" ||
          target.classList.contains("cursor-pointer") ||
          target.classList.contains("pill-btn") ||
          target.onclick != null;

        if (isInteractive) {
          // Check if this action is a delete/remove/reset/trash (warning haptic)
          const text = target.innerText?.toLowerCase() || "";
          const ariaLabel = target.getAttribute("aria-label")?.toLowerCase() || "";
          const className = target.className?.toLowerCase() || "";
          
          let hapticType: "light" | "medium" | "heavy" | "success" | "warning" = "light";
          
          if (
            text.includes("delete") || 
            text.includes("remove") || 
            text.includes("clear") || 
            text.includes("reset") ||
            ariaLabel.includes("delete") ||
            ariaLabel.includes("remove") ||
            className.includes("trash") ||
            className.includes("rose") ||
            className.includes("danger")
          ) {
            hapticType = "warning";
          } else if (
            text.includes("save") || 
            text.includes("add") || 
            text.includes("confirm") || 
            text.includes("load") ||
            text.includes("download") ||
            text.includes("generate") ||
            role === "tab" ||
            className.includes("tab") ||
            tagName === "select"
          ) {
            hapticType = "medium";
          }

          triggerHaptic(hapticType, e);
          break; // break loop to avoid double triggering if nested
        }
        target = target.parentElement;
      }
    };

    window.addEventListener("click", handleGlobalClick, { capture: true });
    return () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("click", handleGlobalClick, { capture: true });
    };
  }, [mounted]);

  const [branch, setBranch] = useState("cs");

  const [sem, setSem] = useState<number>(4);
  const [showNotification, setShowNotification] = useState<string | null>(null);

  // Active Category filter state for mobile view
  const [activeCategory, setActiveCategory] = useState<"all" | "grades" | "attendance" | "progression" | "reference">("all");

  // Active focused tool ID
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [activeConsoleSubTab, setActiveConsoleSubTab] = useState<string>("gpa");

  // Drawer States
  const [isCiePlannerOpen, setIsCiePlannerOpen] = useState(false);
  const [isSgpaAllocatorOpen, setIsSgpaAllocatorOpen] = useState(false);

  // Collapsible cards state
  const [collapsedCards, setCollapsedCards] = useState<Record<string, boolean>>({
    gpa: true,
    attendance: true,
    labs: true,
    sandbox: true,
    timeline: true,
    predictor: true,
    slots: true,
    honours: true,
    auditor: true,
    activity: true,
    notepad: true,
    converter: true,
    attMarks: true
  });

  // Tools state
  const [calculatorTab, setCalculatorTab] = useState<"sgpa" | "cgpa">("sgpa");
  const [sgpaCourses, setSgpacourses] = useState<SGPACourse[]>([]);
  const [cgpaSemesters, setCgpaSemesters] = useState<CGPASemester[]>([]);
  
  const [attendanceSubjects, setAttendanceSubjects] = useState<AttendanceSubject[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [customSubjectName, setCustomSubjectName] = useState("");
  const [customSubjectCode, setCustomSubjectCode] = useState("");

  // Web Worker state for reverse SGPA Calculator
  const [allocatedGrades, setAllocatedGrades] = useState<any[]>([]);
  const [allocatorLoading, setAllocatorLoading] = useState(false);
  const workerRef = React.useRef<Worker | null>(null);

  const getLabsCount = () => {
    if (typeof window === "undefined") {
      return getDefaultLabsForSession(branch, sem).length;
    }
    const saved = localStorage.getItem(`ktunode_tools_labs_${branch}_${sem}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed.length;
      } catch {}
    }
    return getDefaultLabsForSession(branch, sem).length;
  };


  // 3-Group Activity points tally state (120 point requirement)
  const [studentType, setStudentType] = useState<"regular" | "lateral" | "pwd">("regular");
  const [selectedActivities, setSelectedActivities] = useState<ActivityClaim[]>([]);
  const [activityCardTab, setActivityCardTab] = useState<"calculator" | "guide" | "rules">("calculator");
  
  // Selection states for adding activity (with initial defaults)
  const [actSelGroup, setActSelGroup] = useState<"I" | "II" | "III">("I");
  const [actSelCategory, setActSelCategory] = useState<string>("Sports, Arts & Cultural Activities");
  const [actSelCode, setActSelCode] = useState<string>("1.1");
  const [actSelLevel, setActSelLevel] = useState<string>("College");
  const [actSelQuantity, setActSelQuantity] = useState<number>(1);
  const [actSelPoints, setActSelPoints] = useState<number>(1);
  const [actSelDetail, setActSelDetail] = useState<string>("");

  // Pass/Fail Sandbox state (2024 scheme evaluation)
  const [sandboxCie, setSandboxCie] = useState("20");
  const [sandboxSubject, setSandboxSubject] = useState<{ name: string, code: string } | null>(null);

  // Activity Guide inline config states
  const [inlineAddCode, setInlineAddCode] = useState<string | null>(null);
  const [inlineSelLevel, setInlineSelLevel] = useState<string>("");
  const [inlineSelQuantity, setInlineSelQuantity] = useState<number>(1);
  const [inlineSelPoints, setInlineSelPoints] = useState<number>(0);

  // Year-Back progression checks state
  const [progressionTarget, setProgressionTarget] = useState<"s5" | "s7">("s5");
  const [progressionCredits, setProgressionCredits] = useState({
    s1: 0,
    s2: 0,
    s3: 0,
    s4: 0
  });

  // SGPA to Percentage Converter state
  const [converterGpa, setConverterGpa] = useState("8.50");
  const [converterPercentage, setConverterPercentage] = useState("80.0");
  const [targetSgpa, setTargetSgpa] = useState<number>(8.5);

  // Attendance Marks check simulator state
  const [sandboxAttPct, setSandboxAttPct] = useState(85);

  // Timeline attendance runway states
  const [timelineAttendedDays, setTimelineAttendedDays] = useState("40");
  const [timelineTotalDays, setTimelineTotalDays] = useState("49");
  const [timelineTargetPct, setTimelineTargetPct] = useState("75");

  // Grade Predictor state
  const [predictorSeries1, setPredictorSeries1] = useState("15");
  const [plannerCieScore, setPlannerCieScore] = useState(38);
  const [plannerActiveSubject, setPlannerActiveSubject] = useState({ code: "PCCST403", name: "Operating Systems" });
  const [predictorSeries2, setPredictorSeries2] = useState("15");
  const [predictorAssignments, setPredictorAssignments] = useState("10");
  const [predictorTargetGrade, setPredictorTargetGrade] = useState("A");
  const [predictorSubject, setPredictorSubject] = useState<{ name: string, code: string } | null>(null);

  // Notepad State
  const [notepadText, setNotepadText] = useState("");
  const [notepadSaved, setNotepadSaved] = useState(false);
  const [notepadSaving, setNotepadSaving] = useState(false);
  const notepadTimerRef = useRef<NodeJS.Timeout | null>(null);

  // --- STUDY CONSOLE STATES ---
  const [pomodoroTime, setPomodoroTime] = useState(1500); // 25 mins focus
  const [pomodoroActive, setPomodoroActive] = useState(false);
  const [pomodoroMode, setPomodoroMode] = useState<"focus" | "break">("focus");
  const [selectedLofiSound, setSelectedLofiSound] = useState<string | null>(null);

  const [flashcardsList, setFlashcardsList] = useState<Array<{ q: string, a: string }>>([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [flashcardScores, setFlashcardScores] = useState({ known: 0, total: 0 });

  const [spacedRepetitionData, setSpacedRepetitionData] = useState<Record<string, { level: "low" | "medium" | "high", date: string }>>({});
  const [studyConsoleTab, setStudyConsoleTab] = useState<"focus" | "utilities">("focus");
  const [utilityConsoleTab, setUtilityConsoleTab] = useState<"checklist" | "gamble" | "splits">("checklist");

  // --- 24 MICRO-TOOLS SANDBOX STATES ---
  const [mtSearchQuery, setMtSearchQuery] = useState("");
  const [mtActiveCategory, setMtActiveCategory] = useState<"internals" | "exams" | "credits" | "labs" | "hacks">("internals");
  const [mtExpandedTool, setMtExpandedTool] = useState<string | null>("bunk_master");

  // Tool 1: Bunk Master
  const [mtBunkHc, setMtBunkHc] = useState(40);
  const [mtBunkHa, setMtBunkHa] = useState(32);
  // Tool 2: Attendance marks
  const [mtAttPct, setMtAttPct] = useState(82);
  // Tool 3: Internal Marks Aggregator
  const [mtAggSeries1, setMtAggSeries1] = useState(0);
  const [mtAggSeries2, setMtAggSeries2] = useState(0);
  const [mtAggAssg, setMtAggAssg] = useState(0);
  const [mtAggAtt, setMtAggAtt] = useState(0);
  // Tool 4: Series 2 Damage Control
  const [mtDmgSeries1, setMtDmgSeries1] = useState(25);
  const [mtDmgTarget, setMtDmgTarget] = useState(25);
  const [mtDmgAssgAtt, setMtDmgAssgAtt] = useState(12);
  // Tool 5: ESE Target Finder
  const [mtEseInt, setMtEseInt] = useState(30);
  const [mtEseGrade, setMtEseGrade] = useState("A");
  // Tool 6: Exam Pacer
  const [mtPacerScheme, setMtPacerScheme] = useState<"ab" | "abc">("abc");
  // Tool 7: Module Weightage
  const [mtRiskModules, setMtRiskModules] = useState<Record<number, boolean>>({ 1: true, 2: true, 3: true, 4: false, 5: false });
  // Tool 8: Grace Mark Optimization
  const [mtGracePool, setMtGracePool] = useState(10);
  const [mtGraceMarks, setMtGraceMarks] = useState<number[]>([35, 38, 30]);
  // Tool 9: Year-Back Credit Lock
  const [mtYbSlot, setMtYbSlot] = useState<"s5" | "s7">("s5");
  const [mtYbCredits, setMtYbCredits] = useState(18);
  // Tool 10: Honours/Minor Validator
  const [mtEligCgpa, setMtEligCgpa] = useState(8.2);
  const [mtEligBacklog, setMtEligBacklog] = useState(false);
  const [mtEligType, setMtEligType] = useState<"honours" | "minor">("honours");
  // Tool 11: Internal Improvement Scanner
  const [mtImpAtt, setMtImpAtt] = useState<"regular" | "low" | "detained">("regular");
  const [mtImpCie, setMtImpCie] = useState(15);
  const [mtImpStatus, setMtImpStatus] = useState<"regular" | "supple">("regular");
  // Tool 12: Supple Debt Tracker
  const [mtDebtBacklogs, setMtDebtBacklogs] = useState(3);
  // Tool 13: Lab Internal Aggregator
  const [mtLabCont, setMtLabCont] = useState(38);
  const [mtLabViva, setMtLabViva] = useState(12);
  const [mtLabExam, setMtLabExam] = useState(12);
  // Tool 14: Project Splitter
  const [mtProjGuide, setMtProjGuide] = useState(25);
  const [mtProjCommittee, setMtProjCommittee] = useState(32);
  const [mtProjReport, setMtProjReport] = useState(23);
  // Tool 15: Seminar Assessment
  const [mtSemPres, setMtSemPres] = useState(32);
  const [mtSemRep, setMtSemRep] = useState(24);
  const [mtSemDef, setMtSemDef] = useState(25);
  // Tool 16: Course Code Decrypter
  const [mtDecryptCode, setMtDecryptCode] = useState("PCCST403");
  // Tool 17: Global GPA
  const [mtUsGpa10, setMtUsGpa10] = useState(8.5);
  // Tool 18: CGPA Forecaster
  const [mtForeCurrent, setMtForeCurrent] = useState(7.8);
  const [mtForeSems, setMtForeSems] = useState(4);
  const [mtForeTarget, setMtForeTarget] = useState(8.5);
  // Tool 19: cram planner
  const [mtCramHours, setMtCramHours] = useState(8);
  const [mtCramModules, setMtCramModules] = useState(4);
  // Tool 20: Broadcast Generator
  const [mtBunkSubject, setMtBunkSubject] = useState("PCCST403 Operating Systems");
  const [mtBunkDate, setMtBunkDate] = useState("2026-06-03");
  const [mtBunkReason, setMtBunkReason] = useState("heavy rain & syllabus completion buffer");
  // Tool 21: Exam Hall checklist
  const [mtHallChecklist, setMtHallChecklist] = useState<string[]>([
    "Admit Card (Hall Ticket)",
    "University Approved Calculator (e.g. FX-991ES Plus)",
    "College ID Card",
    "Blue/Black Ballpoint Pens",
    "Pencil & Ruler",
    "Water Bottle"
  ]);
  // Tool 22: Reval Gamble
  const [mtRevalGrade, setMtRevalGrade] = useState("C");
  const [mtRevalCie, setMtRevalCie] = useState(28);
  const [mtRevalExpected, setMtRevalExpected] = useState("Excellent");
  // Tool 23: Syllabus Milestone Tracker
  const [mtMilestones, setMtMilestones] = useState<Record<string, boolean[]>>({});
  // Tool 24: Countdown Dashboard Target
  const [mtCountdownTarget, setMtCountdownTarget] = useState("2026-07-15");

  // Redesign Master Navigation Workspace Tab State
  const [siteConfig, setSiteConfig] = useState<any>(null);
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<"attendance" | "grades" | "graduation" | "exam" | "labs" | "missioncontrol">("attendance");
  // --- NEW REDESIGN STATES ---
  // Backlog tracker state
  const [backlogSubjects, setBacklogSubjects] = useState<Array<{ id: string, code: string, name: string, semester: number, attempts: number, status: 'pending' | 'cleared' | 'registered' }>>([]);
  const [backlogCode, setBacklogCode] = useState("");
  const [backlogName, setBacklogName] = useState("");
  const [backlogSemester, setBacklogSemester] = useState(1);

  // Activity points dual-mode
  const [activityMode, setActivityMode] = useState<"earn" | "calculator">("earn");
  const [activitySearchQuery, setActivitySearchQuery] = useState("");
  const [activityGuideGroup, setActivityGuideGroup] = useState<"All" | "I" | "II" | "III">("All");
  const [gradSubTab, setGradSubTab] = useState<"activity" | "credits" | "backlogs">("activity");

  // Attendance streak
  const [attendanceStreak, setAttendanceStreak] = useState(0);

  // Onboarding
  const [showOnboarding, setShowOnboarding] = useState(false);




  // Onboarding check
  useEffect(() => {
    if (!mounted) return;
    
    // Fetch config
    fetch("/api/config")
      .then(res => res.json())
      .then(data => {
        setSiteConfig(data);
        const activeTools = data?.activeTools || {};
        const enabledTabs: string[] = [];
        if (activeTools.attendance !== false) enabledTabs.push("attendance");
        if (activeTools.gpa !== false) enabledTabs.push("grades");
        if (activeTools.runway !== false) enabledTabs.push("graduation");
        if (activeTools.exam !== false) enabledTabs.push("exam");
        if (activeTools.lab !== false) enabledTabs.push("labs");
        enabledTabs.push("missioncontrol");

        if (!enabledTabs.includes(activeWorkspaceTab)) {
          setActiveWorkspaceTab(enabledTabs[0] as any);
        }
      })
      .catch(err => console.error("Error loading config:", err));

    const onboarded = localStorage.getItem("ktunode_tools_onboarded");
    if (!onboarded) setShowOnboarding(true);
    // Load streak
    const streakData = localStorage.getItem("ktunode_attendance_streak");
    if (streakData) {
      try {
        const parsed = JSON.parse(streakData);
        const lastDate = new Date(parsed.lastDate);
        const now = new Date();
        const diffHours = (now.getTime() - lastDate.getTime()) / (1000 * 60 * 60);
        if (diffHours < 48) setAttendanceStreak(parsed.count);
      } catch {}
    }
    // Load backlogs
    const savedBacklogs = localStorage.getItem("ktunode_tools_backlogs");
    if (savedBacklogs) {
      try {
        const parsed = JSON.parse(savedBacklogs);
        if (Array.isArray(parsed)) setBacklogSubjects(parsed);
      } catch {}
    }
  }, [mounted]);

  // Listen to GPA and preset changes from GpaCalculator or header controls
  const [gpaUpdateTrigger, setGpaUpdateTrigger] = useState(0);

  useEffect(() => {
    const handleGpaUpdate = () => {
      setGpaUpdateTrigger(prev => prev + 1);

      // Sync global branch state if it changed in calculator presets
      const savedBranch = localStorage.getItem("ktunode_branch");
      if (savedBranch && savedBranch !== branch) {
        setBranch(savedBranch);
        loadSemesterData(savedBranch, sem);
      }
    };
    window.addEventListener("ktunode-gpa-update", handleGpaUpdate);
    return () => {
      window.removeEventListener("ktunode-gpa-update", handleGpaUpdate);
    };
  }, [branch, sem]);

  // Pomodoro timer ticking effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (pomodoroActive && pomodoroTime > 0) {
      interval = setInterval(() => {
        setPomodoroTime(prev => prev - 1);
      }, 1000);
    } else if (pomodoroTime === 0) {
      setTimeout(() => {
        setPomodoroActive(false);
        const nextMode = pomodoroMode === "focus" ? "break" : "focus";
        setPomodoroMode(nextMode);
        setPomodoroTime(nextMode === "focus" ? 1500 : 300);
        triggerNotification(`Study Session Alert: ${nextMode === "focus" ? "Back to focus! Time to concentrate." : "Time for a break! Rest up."}`);
      }, 0);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [pomodoroActive, pomodoroTime, pomodoroMode]);

  // Web Audio ambient soundscape player
  useEffect(() => {
    if (typeof window === "undefined") return;

    const win = window as unknown as {
      __ktunode_audioCtx?: AudioContext;
      __ktunode_soundSource?: AudioBufferSourceNode | null;
      __ktunode_selectedLofiSound?: string | null;
      __ktunode_lofiInterval?: NodeJS.Timeout | null;
      webkitAudioContext?: typeof AudioContext;
    };

    const audioCtx = win.__ktunode_audioCtx || null;
    const soundSource = win.__ktunode_soundSource || null;
    
    const stopAudio = () => {
      if (soundSource) {
        try { soundSource.stop(); } catch {}
        win.__ktunode_soundSource = null;
      }
    };

    stopAudio();

    if (!selectedLofiSound) return;

    try {
      const AudioContextClass = window.AudioContext || win.webkitAudioContext;
      if (!AudioContextClass) return;
      
      let activeAudioCtx = audioCtx;
      if (!activeAudioCtx) {
        activeAudioCtx = new AudioContextClass();
        win.__ktunode_audioCtx = activeAudioCtx;
      }

      if (activeAudioCtx.state === "suspended") {
        activeAudioCtx.resume();
      }

      if (selectedLofiSound === "rain") {
        const bufferSize = 2 * activeAudioCtx.sampleRate;
        const noiseBuffer = activeAudioCtx.createBuffer(1, bufferSize, activeAudioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
          output[i] *= 0.12;
          b6 = white * 0.115926;
        }
        const source = activeAudioCtx.createBufferSource();
        source.buffer = noiseBuffer;
        source.loop = true;
        const filter = activeAudioCtx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(500, activeAudioCtx.currentTime);
        source.connect(filter);
        filter.connect(activeAudioCtx.destination);
        source.start();
        win.__ktunode_soundSource = source;
      } else if (selectedLofiSound === "fire") {
        const bufferSize = activeAudioCtx.sampleRate;
        const noiseBuffer = activeAudioCtx.createBuffer(1, bufferSize, activeAudioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = (Math.random() * 2 - 1) * 0.012;
          if (Math.random() < 0.0006) {
            output[i] += (Math.random() > 0.5 ? 0.22 : -0.22);
          }
        }
        const source = activeAudioCtx.createBufferSource();
        source.buffer = noiseBuffer;
        source.loop = true;
        const filter = activeAudioCtx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(320, activeAudioCtx.currentTime);
        filter.Q.setValueAtTime(1.4, activeAudioCtx.currentTime);
        source.connect(filter);
        filter.connect(activeAudioCtx.destination);
        source.start();
        win.__ktunode_soundSource = source;
      } else if (selectedLofiSound === "cafe") {
        const bufferSize = 2 * activeAudioCtx.sampleRate;
        const noiseBuffer = activeAudioCtx.createBuffer(1, bufferSize, activeAudioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          output[i] = (lastOut + (0.018 * white)) / 1.018;
          lastOut = output[i];
          output[i] *= 2.6;
        }
        const source = activeAudioCtx.createBufferSource();
        source.buffer = noiseBuffer;
        source.loop = true;
        source.connect(activeAudioCtx.destination);
        source.start();
        win.__ktunode_soundSource = source;
      } else if (selectedLofiSound === "lofi") {
        let timerId: ReturnType<typeof setInterval> | null = null;
        const playLofiProgression = () => {
          if (!activeAudioCtx || win.__ktunode_selectedLofiSound !== "lofi") return;
          const now = activeAudioCtx.currentTime;
          const chords = [
            [261.63, 329.63, 392.00, 493.88], // Cmaj7
            [220.00, 261.63, 329.63, 392.00], // Amin7
            [293.66, 349.23, 440.00, 523.25], // Dmin7
            [349.23, 440.00, 523.25, 659.25]  // Fmaj7
          ];
          const randomChord = chords[Math.floor(Math.random() * chords.length)];
          
          randomChord.forEach(freq => {
            const osc = activeAudioCtx.createOscillator();
            const gain = activeAudioCtx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, now);
            gain.gain.setValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(0.015, now + 0.8);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.8);
            osc.connect(gain);
            gain.connect(activeAudioCtx.destination);
            osc.start(now);
            osc.stop(now + 3.8);
          });
        };

        win.__ktunode_selectedLofiSound = "lofi";
        playLofiProgression();
        timerId = setInterval(playLofiProgression, 4000);
        win.__ktunode_lofiInterval = timerId;
      }
    } catch (e) {
      console.error(e);
    }

    return () => {
      stopAudio();
      win.__ktunode_selectedLofiSound = null;
      if (win.__ktunode_lofiInterval) {
        clearInterval(win.__ktunode_lofiInterval);
        win.__ktunode_lofiInterval = null;
      }
    };
  }, [selectedLofiSound]);

  // Sync active flashcards when active subject changes
  useEffect(() => {
    if (plannerActiveSubject) {
      const timer = setTimeout(() => {
        const fullSubject = subjects.find(s => s.code === plannerActiveSubject.code);
        const cards = generateFlashcardsForSubject(plannerActiveSubject.code, plannerActiveSubject.name, fullSubject);
        setFlashcardsList(cards);
        setActiveCardIndex(0);
        setIsCardFlipped(false);
        setFlashcardScores({ known: 0, total: cards.length });
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [plannerActiveSubject, subjects]);

  const getSpacedRepetitionTopics = () => {
    if (!plannerActiveSubject) return [];
    const fullSubject = subjects.find(s => s.code === plannerActiveSubject.code);
    const matchingSubject = mockSubjects.find(s => s.code === plannerActiveSubject.code) || fullSubject;
    if (matchingSubject && matchingSubject.modules) {
      const topics: Array<{ id: string, title: string, module: string }> = [];
      matchingSubject.modules.forEach((mod, modIdx) => {
        if (mod.topics) {
          mod.topics.slice(0, 2).forEach((top, topIdx) => {
            topics.push({
              id: `${plannerActiveSubject.code}_m${modIdx + 1}_t${topIdx}`,
              title: top.title,
              module: `Module ${modIdx + 1}`
            });
          });
        }
      });
      if (topics.length > 0) return topics;
    }
    return [
      { id: `${plannerActiveSubject.code}_m1`, title: "Core Architecture & Definitions", module: "Module 1" },
      { id: `${plannerActiveSubject.code}_m2`, title: "System Modeling & Formulae Derivations", module: "Module 2" },
      { id: `${plannerActiveSubject.code}_m3`, title: "Practical Application Setup", module: "Module 3" },
      { id: `${plannerActiveSubject.code}_m4`, title: "Advanced Optimizations & Testing", module: "Module 4" }
    ];
  };

  // Trigger temporary notification
  function triggerNotification(message: string) {
    setShowNotification(message);
    setTimeout(() => {
      setShowNotification(null);
    }, 2500);
  }

  // Dedicated dynamic semester loader (Scopes variables to branch_sem keys)
  async function loadSemesterData(currentBranch: string, currentSem: number) {
    const scopeKey = `${currentBranch}_${currentSem}`;

    let defaultSubjects: Subject[] = [];
    try {
      const res = await fetch(`/api/subjects?branch=${currentBranch}&sem=${currentSem}`);
      defaultSubjects = await res.json();
      setSubjects(defaultSubjects);
    } catch (err) {
      console.error("Failed to load subjects for tools:", err);
    }

    // 1. SGPA Loading (Merged dynamically with database subjects)
    const savedSgpa = localStorage.getItem(`ktunode_tools_sgpa_${scopeKey}`);
    let mergedSgpa: SGPACourse[] = [];
    const defaultSgpaMap = defaultSubjects.map(s => ({
      id: s.id,
      name: s.name,
      code: s.code,
      credits: s.name.toLowerCase().includes("lab") ? 1 : 4,
      grade: "O"
    }));

    if (savedSgpa) {
      try {
        const savedList = JSON.parse(savedSgpa);
        if (Array.isArray(savedList)) {
          mergedSgpa = defaultSgpaMap.map(defSub => {
            const match = savedList.find(saved => saved && (saved.code === defSub.code || saved.id === defSub.id));
            if (match) {
              return {
                ...defSub,
                credits: typeof match.credits === 'number' ? match.credits : defSub.credits,
                grade: match.grade || "O"
              };
            }
            return defSub;
          });

          // Retain custom courses
          const customCourses = savedList.filter(saved => 
            saved && !defaultSubjects.some(def => def.code === saved.code || def.id === saved.id)
          );
          mergedSgpa.push(...customCourses);
        } else {
          mergedSgpa = defaultSgpaMap;
        }
      } catch {
        mergedSgpa = defaultSgpaMap;
      }
    } else {
      mergedSgpa = defaultSgpaMap;
    }
    setSgpacourses(mergedSgpa);
    localStorage.setItem(`ktunode_tools_sgpa_${scopeKey}`, JSON.stringify(mergedSgpa));

    // 2. Attendance Loading (Merged dynamically with database subjects)
    const savedAttendance = localStorage.getItem(`ktunode_tools_attendance_${scopeKey}`);
    let mergedAttendance: AttendanceSubject[] = [];
    const defaultAttendanceMap = defaultSubjects.map(s => ({
      id: s.id,
      code: s.code,
      name: s.name,
      attended: 0,
      total: 0
    }));

    if (savedAttendance) {
      try {
        const savedList = JSON.parse(savedAttendance);
        if (Array.isArray(savedList)) {
          mergedAttendance = defaultAttendanceMap.map(defSub => {
            const match = savedList.find(saved => saved && (saved.code === defSub.code || saved.id === defSub.id));
            if (match) {
              return {
                ...defSub,
                attended: typeof match.attended === 'number' ? match.attended : defSub.attended,
                total: typeof match.total === 'number' ? match.total : defSub.total
              };
            }
            return defSub;
          });

          // Retain custom subjects
          const customSubjects = savedList.filter(saved => 
            saved && !defaultSubjects.some(def => def.code === saved.code || def.id === saved.id)
          );
          mergedAttendance.push(...customSubjects);
        } else {
          mergedAttendance = defaultAttendanceMap;
        }
      } catch {
        mergedAttendance = defaultAttendanceMap;
      }
    } else {
      mergedAttendance = defaultAttendanceMap;
    }
    setAttendanceSubjects(mergedAttendance);
    localStorage.setItem(`ktunode_tools_attendance_${scopeKey}`, JSON.stringify(mergedAttendance));

    // 3. Labs Loading (Handled locally inside LabRecordTracker component)

    // 4. Initial default subjects for Planner and Grade Predictor
    if (defaultSubjects.length > 0) {
      setPredictorSubject({ name: defaultSubjects[0].name, code: defaultSubjects[0].code });
      setSandboxSubject({ name: defaultSubjects[0].name, code: defaultSubjects[0].code });
      setPlannerActiveSubject({ name: defaultSubjects[0].name, code: defaultSubjects[0].code });
    } else {
      setPredictorSubject(null);
      setSandboxSubject(null);
    }
  }

  // Mount logic: Load settings & global presets
  useEffect(() => {
    const migrationVersion = localStorage.getItem("ktunode_tools_version");
    if (migrationVersion !== "v4") {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith("ktunode_tools_") || key.startsWith("ktunode_gpa_") || key.startsWith("ktunode_attendance_")) {
          localStorage.removeItem(key);
        }
      });
      localStorage.setItem("ktunode_tools_version", "v4");
    }

    const timer = setTimeout(() => {
      setMounted(true);
      
      const savedBranch = localStorage.getItem("ktunode_branch") || "cs";
      const savedSem = Number(localStorage.getItem("ktunode_semester")) || 4;
      setBranch(savedBranch);
      setSem(savedSem);

      // Pre-populate GPA calculator settings in localStorage if empty, so telemetry row works instantly
      const activeTab = localStorage.getItem("ktunode_gpa_active_tab") || "presets";
      localStorage.setItem("ktunode_gpa_active_tab", activeTab);
      
      const branchMapping: Record<string, string> = {
        "cs": "Computer Science and Engineering",
        "ce": "Civil Engineering",
        "ec": "Electronics & Communication Engineering",
        "ee": "Electrical and Electronics Engineering",
        "me": "Mechanical Engineering"
      };
      const fullBranchName = branchMapping[savedBranch] || "Computer Science and Engineering";
      localStorage.setItem("ktunode_gpa_selected_branch", fullBranchName);

      const presetKey = `ktunode_gpa_v3_preset_${fullBranchName.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`;
      if (!localStorage.getItem(presetKey)) {
        const branchSemesters = (ktu2024Scheme as any)[fullBranchName];
        if (branchSemesters) {
          const initialSemesters: Record<number, any[]> = {};
          const sem1Data = branchSemesters.find((s: any) => s.semester === 1);
          if (sem1Data) {
            initialSemesters[1] = sem1Data.subjects.map((sub: any, idx: number) => ({
              id: `sub_1_${idx}_${Date.now()}`,
              sno: sub.sno,
              name: sub.name,
              credits: sub.credits,
              grade: "--"
            }));
          }
          const sem2Data = branchSemesters.find((s: any) => s.semester === 2);
          if (sem2Data) {
            initialSemesters[2] = sem2Data.subjects.map((sub: any, idx: number) => ({
              id: `sub_2_${idx}_${Date.now()}`,
              sno: sub.sno,
              name: sub.name,
              credits: sub.credits,
              grade: "--"
            }));
          }
          localStorage.setItem(presetKey, JSON.stringify(initialSemesters));
        }
      }
      
      // Also pre-populate universal tab
      const universalKey = "ktunode_gpa_v3_universal";
      if (!localStorage.getItem(universalKey)) {
        const initialSemesters = {
          1: [
            { id: "univ_1_1", sno: 1, name: "Engineering Subject 1", credits: 4, grade: "--" },
            { id: "univ_1_2", sno: 2, name: "Engineering Subject 2", credits: 3, grade: "--" },
            { id: "univ_1_3", sno: 3, name: "Laboratory Course", credits: 1, grade: "--" }
          ],
          2: [
            { id: "univ_2_1", sno: 1, name: "Core Course 1", credits: 4, grade: "--" },
            { id: "univ_2_2", sno: 2, name: "Elective Course", credits: 3, grade: "--" },
            { id: "univ_2_3", sno: 3, name: "Seminar / Project", credits: 2, grade: "--" }
          ]
        };
        localStorage.setItem(universalKey, JSON.stringify(initialSemesters));
      }

      // Initial load for active semester
      loadSemesterData(savedBranch, savedSem);

      // Load Notepad (Global)
      const savedNotepad = localStorage.getItem("ktunode_tools_notepad");
      if (savedNotepad) setNotepadText(savedNotepad);

      // Load 3-Group Activity Points
      const savedStudentType = localStorage.getItem("ktunode_tools_activity_student_type");
      if (savedStudentType === "regular" || savedStudentType === "lateral" || savedStudentType === "pwd") {
        setStudentType(savedStudentType);
      }
      try {
        const savedActivities = localStorage.getItem("ktunode_tools_activities");
        if (savedActivities) {
          const parsed = JSON.parse(savedActivities);
          if (Array.isArray(parsed)) setSelectedActivities(parsed);
        }
      } catch {}



      // Load Year-Back Credits inputs
      try {
        const savedCredits = localStorage.getItem("ktunode_tools_progression_credits");
        if (savedCredits) {
          const parsed = JSON.parse(savedCredits);
          if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
            setProgressionCredits(prev => ({ ...prev, ...parsed }));
          }
        }
      } catch {}

      // Load CGPA semesters (Degree-wide - Global)
      const savedCgpa = localStorage.getItem("ktunode_tools_cgpa");
      if (savedCgpa) {
        try {
          const parsed = JSON.parse(savedCgpa);
          if (Array.isArray(parsed)) {
            setCgpaSemesters(parsed);
          } else {
            const initialCgpa = Array.from({ length: 8 }, (_, i) => ({
              semester: i + 1,
              sgpa: savedSem > i + 1 ? 8.0 : 0.0,
              credits: 22,
              active: savedSem > i + 1
            }));
            setCgpaSemesters(initialCgpa);
          }
        } catch {
          const initialCgpa = Array.from({ length: 8 }, (_, i) => ({
            semester: i + 1,
            sgpa: savedSem > i + 1 ? 8.0 : 0.0,
            credits: 22,
            active: savedSem > i + 1
          }));
          setCgpaSemesters(initialCgpa);
        }
      } else {
        const initialCgpa = Array.from({ length: 8 }, (_, i) => ({
          semester: i + 1,
          sgpa: savedSem > i + 1 ? 8.0 : 0.0,
          credits: 22,
          active: savedSem > i + 1
        }));
        setCgpaSemesters(initialCgpa);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Handles branch/semester dropdown modifications
  const handleBranchSemChange = (newBranch: string, newSem: number) => {
    setBranch(newBranch);
    setSem(newSem);
    localStorage.setItem("ktunode_branch", newBranch);
    localStorage.setItem("ktunode_semester", String(newSem));
    triggerNotification(`Tools updated for ${newBranch.toUpperCase()} Semester ${newSem}`);

    // Scoped loader triggers
    loadSemesterData(newBranch, newSem);

    // Sync degree-wide semesters toggles
    const newCgpa = Array.from({ length: 8 }, (_, i) => ({
      semester: i + 1,
      sgpa: newSem > i + 1 ? 0.0 : 0.0,
      credits: 0,
      active: newSem > i + 1
    }));
    setCgpaSemesters(newCgpa);
    localStorage.setItem("ktunode_tools_cgpa", JSON.stringify(newCgpa));

    window.dispatchEvent(new Event("ktunode-gpa-update"));

    triggerNotification(`Switched to ${newBranch.toUpperCase()} Sem ${newSem}. Scoped data loaded!`);
  };

  // Initialize Web Worker
  useEffect(() => {
    if (typeof window === "undefined") return;
    workerRef.current = new Worker("/workers/sgpa-allocator.worker.js");
    workerRef.current.onmessage = (e) => {
      setAllocatedGrades(e.data);
      setAllocatorLoading(false);
    };
    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  // Debounced allocator trigger
  useEffect(() => {
    if (!workerRef.current || subjects.length === 0) return;
    setAllocatorLoading(true);

    const initialAllocated = subjects.map(sub => {
      const cr = getCreditsForSubject(sub.code, sub.name, branch, sem);
      return {
        code: sub.code,
        name: sub.name,
        credits: cr,
        gradeIdx: 4 // Start at index 4 (B grade)
      };
    });

    const gradesList2024 = [
      { grade: "O", gp: 10.0 },
      { grade: "A+", gp: 9.0 },
      { grade: "A", gp: 8.0 },
      { grade: "B+", gp: 7.0 },
      { grade: "B", gp: 6.0 },
      { grade: "C", gp: 5.0 },
      { grade: "P", gp: 4.0 }
    ];

    const timer = setTimeout(() => {
      workerRef.current?.postMessage({
        allocated: initialAllocated,
        target: targetSgpa,
        gradesList: gradesList2024
      });
    }, 150);

    return () => clearTimeout(timer);
  }, [targetSgpa, subjects, branch, sem]);


  // Study Notepad saving with a visual feedback cycle ("saving..." -> "auto-saved")
  const handleNotepadSave = (text: string) => {
    setNotepadText(text);
    setNotepadSaving(true);
    setNotepadSaved(false);
    localStorage.setItem("ktunode_tools_notepad", text);

    // Clear any existing timer
    if (notepadTimerRef.current) {
      clearTimeout(notepadTimerRef.current);
    }

    // Simulate auto-save debounce feedback
    notepadTimerRef.current = setTimeout(() => {
      setNotepadSaving(false);
      setNotepadSaved(true);
    }, 600);
  };

  // Synchronized GPA calculations reading from GpaCalculator localStorage
  const calculatedCgpa = useMemo(() => {
    if (typeof window === "undefined") return "0.00";
    const activeTab = localStorage.getItem("ktunode_gpa_active_tab") || "presets";
    const selectedBranch = localStorage.getItem("ktunode_gpa_selected_branch") || "Computer Science and Engineering";
    const storageKey = activeTab === "presets"
      ? `ktunode_gpa_v3_preset_${selectedBranch.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`
      : `ktunode_gpa_v3_universal`;
    const savedSemesters = localStorage.getItem(storageKey);
    let grandPoints = 0;
    let grandCredits = 0;
    if (savedSemesters) {
      try {
        const semesters = JSON.parse(savedSemesters);
        Object.keys(semesters).forEach(semNum => {
          const subjects = semesters[Number(semNum)] || [];
          subjects.forEach((sub: any) => {
            const points = GRADE_POINTS[sub.grade];
            if (points !== undefined && points !== -1) {
              grandPoints += points * sub.credits;
              grandCredits += sub.credits;
            }
          });
        });
      } catch (e) {
        console.error(e);
      }
    }
    return grandCredits > 0 ? (grandPoints / grandCredits).toFixed(2) : "0.00";
  }, [gpaUpdateTrigger, branch, sem]);

  const calculatedSgpa = useMemo(() => {
    if (typeof window === "undefined") return "0.00";
    const activeTab = localStorage.getItem("ktunode_gpa_active_tab") || "presets";
    const selectedBranch = localStorage.getItem("ktunode_gpa_selected_branch") || "Computer Science and Engineering";
    const storageKey = activeTab === "presets"
      ? `ktunode_gpa_v3_preset_${selectedBranch.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`
      : `ktunode_gpa_v3_universal`;
    const savedSemesters = localStorage.getItem(storageKey);
    let semPoints = 0;
    let semCredits = 0;
    let gradedCount = 0;
    if (savedSemesters) {
      try {
        const semesters = JSON.parse(savedSemesters);
        const subjects = semesters[sem] || [];
        subjects.forEach((sub: any) => {
          const points = GRADE_POINTS[sub.grade];
          if (points !== undefined && points !== -1) {
            semPoints += points * sub.credits;
            semCredits += sub.credits;
            gradedCount++;
          }
        });
      } catch (e) {
        console.error(e);
      }
    }
    return semCredits > 0 && gradedCount > 0 ? (semPoints / semCredits).toFixed(2) : "0.00";
  }, [gpaUpdateTrigger, branch, sem]);

  // SGPA/CGPA calculations
  const calculateSGPA = () => calculatedSgpa;
  const calculateCGPA = () => calculatedCgpa;

  const handleSgpaChange = (id: string, field: keyof SGPACourse, value: string | number) => {
    const updated = sgpaCourses.map(c => {
      if (c.id === id) {
        return { ...c, [field]: value };
      }
      return c;
    });
    setSgpacourses(updated);
    localStorage.setItem(`ktunode_tools_sgpa_${branch}_${sem}`, JSON.stringify(updated));
  };

  const addSgpaCourse = () => {
    const newCourse: SGPACourse = {
      id: `custom_${Date.now()}`,
      name: "Custom Course",
      code: "CST" + Math.floor(100 + Math.random() * 900),
      credits: 3,
      grade: "O"
    };
    const updated = [...sgpaCourses, newCourse];
    setSgpacourses(updated);
    localStorage.setItem(`ktunode_tools_sgpa_${branch}_${sem}`, JSON.stringify(updated));
    triggerNotification("Custom course added!");
  };

  const removeSgpaCourse = (id: string) => {
    const updated = sgpaCourses.filter(c => c.id !== id);
    setSgpacourses(updated);
    localStorage.setItem(`ktunode_tools_sgpa_${branch}_${sem}`, JSON.stringify(updated));
    triggerNotification("Course removed.");
  };

  const resetSgpa = () => {
    const defaultSubjects = subjects;
    const initial = defaultSubjects.map(s => ({
      id: s.id,
      name: s.name,
      code: s.code,
      credits: s.name.toLowerCase().includes("lab") ? 1 : 4,
      grade: "O"
    }));
    setSgpacourses(initial);
    localStorage.setItem(`ktunode_tools_sgpa_${branch}_${sem}`, JSON.stringify(initial));
    triggerNotification("SGPA calculator reset to default.");
  };

  const handleCgpaChange = (semester: number, field: keyof CGPASemester, value: number | boolean) => {
    const updated = cgpaSemesters.map(s => {
      if (s.semester === semester) {
        return { ...s, [field]: value };
      }
      return s;
    });
    setCgpaSemesters(updated);
    localStorage.setItem("ktunode_tools_cgpa", JSON.stringify(updated));
  };

  // Attendance metrics
  const getAverageAttendance = () => {
    let totalClasses = 0;
    let totalAttended = 0;
    attendanceSubjects.forEach(s => {
      totalClasses += s.total;
      totalAttended += s.attended;
    });
    return totalClasses > 0 ? Math.round((totalAttended / totalClasses) * 100) : 100;
  };

  const handleAttendanceChange = (id: string, type: "attended" | "total", delta: number) => {
    const updated = attendanceSubjects.map(s => {
      if (s.id === id) {
        let newAttended = s.attended;
        let newTotal = s.total;

        if (type === "attended") {
          newAttended = Math.max(0, s.attended + delta);
          if (newAttended > newTotal && delta > 0) {
            newTotal = newAttended;
          }
        } else if (type === "total") {
          newTotal = Math.max(0, s.total + delta);
          if (newAttended > newTotal) {
            newAttended = newTotal;
          }
        }
        return { ...s, attended: newAttended, total: newTotal };
      }
      return s;
    });
    setAttendanceSubjects(updated);
    localStorage.setItem(`ktunode_tools_attendance_${branch}_${sem}`, JSON.stringify(updated));
  };

  const addCustomAttendanceSubject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customSubjectName.trim()) return;

    const newSub: AttendanceSubject = {
      id: `custom_att_${Date.now()}`,
      code: customSubjectCode.trim().toUpperCase() || "CUSTOM",
      name: customSubjectName.trim(),
      attended: 0,
      total: 0
    };

    const updated = [...attendanceSubjects, newSub];
    setAttendanceSubjects(updated);
    localStorage.setItem(`ktunode_tools_attendance_${branch}_${sem}`, JSON.stringify(updated));

    setCustomSubjectName("");
    setCustomSubjectCode("");
    triggerNotification("Custom subject added to tracker!");
  };

  const removeAttendanceSubject = (id: string) => {
    const updated = attendanceSubjects.filter(s => s.id !== id);
    setAttendanceSubjects(updated);
    localStorage.setItem(`ktunode_tools_attendance_${branch}_${sem}`, JSON.stringify(updated));
    triggerNotification("Subject removed from tracker.");
  };

  // Lab Record Tracker operations are handled inside the LabRecordTracker component

  // Explicit form selectors to handle state synchronization without useEffect cascading renders
  const handleGroupSelect = (gId: "I" | "II" | "III") => {
    setActSelGroup(gId);
    const group = KTU_ACTIVITY_GROUPS.find(g => g.id === gId);
    if (group && group.categories.length > 0) {
      const cat = group.categories[0];
      setActSelCategory(cat.name);
      if (cat.activities.length > 0) {
        const code = cat.activities[0];
        handleCodeSelect(code);
      }
    }
  };

  const handleCategorySelect = (catName: string) => {
    setActSelCategory(catName);
    const group = KTU_ACTIVITY_GROUPS.find(g => g.id === actSelGroup);
    if (group) {
      const cat = group.categories.find(c => c.name === catName);
      if (cat && cat.activities.length > 0) {
        const code = cat.activities[0];
        handleCodeSelect(code);
      }
    }
  };

  const handleCodeSelect = (code: string) => {
    setActSelCode(code);
    const actDetails = KTU_ACTIVITIES[code];
    if (actDetails) {
      if (actDetails.type === "level" && actDetails.levels) {
        const keys = Object.keys(actDetails.levels);
        const nextLevel = keys[0];
        setActSelLevel(nextLevel);
        setActSelPoints(actDetails.levels[nextLevel]);
      } else if (actDetails.type === "fixed" && actDetails.pointsPerUnit) {
        setActSelPoints(actDetails.pointsPerUnit);
      } else if (actDetails.type === "count" && actDetails.pointsPerUnit) {
        setActSelQuantity(1);
        setActSelPoints(actDetails.pointsPerUnit);
      } else if (actDetails.type === "input") {
        setActSelPoints(0);
      }
    }
  };

  const handleLevelSelect = (lvl: string) => {
    setActSelLevel(lvl);
    const actDetails = KTU_ACTIVITIES[actSelCode];
    if (actDetails && actDetails.type === "level" && actDetails.levels) {
      setActSelPoints(actDetails.levels[lvl] || 0);
    }
  };

  const handleQuantitySelect = (qty: number) => {
    setActSelQuantity(qty);
    const actDetails = KTU_ACTIVITIES[actSelCode];
    if (actDetails && actDetails.type === "count" && actDetails.pointsPerUnit) {
      setActSelPoints(actDetails.pointsPerUnit * qty);
    }
  };

  // Activity points handlers
  const handleAddActivity = () => {
    if (!actSelCode) return;
    const actDetails = KTU_ACTIVITIES[actSelCode];
    if (!actDetails) return;

    const finalPoints = actDetails.type === "input" 
      ? Math.min(actDetails.maxPoints, Math.max(0, actSelPoints))
      : actSelPoints;

    const newClaim: ActivityClaim = {
      id: "act_" + Math.random().toString(36).substring(2, 9),
      activityCode: actSelCode,
      level: actDetails.type === "level" ? actSelLevel : undefined,
      quantity: actDetails.type === "count" ? actSelQuantity : undefined,
      points: finalPoints,
      detail: actSelDetail.trim() || undefined
    };

    const updated = [...selectedActivities, newClaim];
    setSelectedActivities(updated);
    localStorage.setItem("ktunode_tools_activities", JSON.stringify(updated));
    setActSelDetail("");
    triggerNotification(`Activity ${actSelCode} added!`);
  };

  const handleDeleteActivity = (id: string) => {
    const claim = selectedActivities.find(a => a.id === id);
    const code = claim ? claim.activityCode : "this claim";
    if (!window.confirm(`Are you sure you want to remove activity claim "${code}"?`)) {
      return;
    }
    const updated = selectedActivities.filter(a => a.id !== id);
    setSelectedActivities(updated);
    localStorage.setItem("ktunode_tools_activities", JSON.stringify(updated));
    triggerNotification("Activity removed.");
  };

  const handleStartInlineAdd = (act: ActivityItem) => {
    setInlineAddCode(act.code);
    if (act.type === "level" && act.levels) {
      setInlineSelLevel(Object.keys(act.levels)[0]);
    } else {
      setInlineSelQuantity(1);
      setInlineSelPoints(act.pointsPerUnit || act.maxPoints);
    }
  };

  const handleConfirmInlineAdd = (act: ActivityItem) => {
    let pts = 0;
    if (act.type === "level" && act.levels) {
      pts = act.levels[inlineSelLevel] || 0;
    } else if (act.type === "count" && act.pointsPerUnit) {
      pts = Math.min(act.maxPoints, inlineSelQuantity * act.pointsPerUnit);
    } else if (act.type === "input") {
      pts = Math.min(act.maxPoints, inlineSelPoints);
    } else if (act.type === "fixed" && act.pointsPerUnit) {
      pts = act.pointsPerUnit;
    }

    const newClaim: ActivityClaim = {
      id: "act_" + Math.random().toString(36).substring(2, 9),
      activityCode: act.code,
      level: act.type === "level" ? inlineSelLevel : undefined,
      quantity: act.type === "count" ? inlineSelQuantity : undefined,
      points: pts
    };

    const updated = [...selectedActivities, newClaim];
    setSelectedActivities(updated);
    localStorage.setItem("ktunode_tools_activities", JSON.stringify(updated));
    setInlineAddCode(null);
    triggerNotification(`Added ${act.code} (${pts} pts) successfully!`);
  };

  const handleDirectAddFixed = (act: ActivityItem) => {
    const pts = act.pointsPerUnit || act.maxPoints;
    const newClaim: ActivityClaim = {
      id: "act_" + Math.random().toString(36).substring(2, 9),
      activityCode: act.code,
      points: pts
    };

    const updated = [...selectedActivities, newClaim];
    setSelectedActivities(updated);
    localStorage.setItem("ktunode_tools_activities", JSON.stringify(updated));
    triggerNotification(`Added ${act.code} (${pts} pts) successfully!`);
  };

  const handleStudentTypeChange = (type: "regular" | "lateral" | "pwd") => {
    setStudentType(type);
    localStorage.setItem("ktunode_tools_activity_student_type", type);
    triggerNotification(`Switched to ${type === "regular" ? "Regular" : type === "lateral" ? "Lateral Entry" : "PwD"} mode`);
  };

  // Derived activity values
  const calculatedPoints = calculateActivityPoints(selectedActivities, studentType);
  const totalActivityPoints = calculatedPoints.totalCapped;

  const activityAudit = {
    isQualified: calculatedPoints.isQualified,
    issues: calculatedPoints.issues.map(iss => {
      if (iss.includes("Group I")) return "Group I is under " + calculatedPoints.groupMins + " pts";
      if (iss.includes("Group II")) return "Group II is under " + calculatedPoints.groupMins + " pts";
      if (iss.includes("Group III")) return "Group III is under " + calculatedPoints.groupMins + " pts";
      return `Need ${calculatedPoints.totalRequired - calculatedPoints.totalCapped} more pts`;
    }),
    statusText: calculatedPoints.isQualified ? "Qualified" : "Compliance warning"
  };

  const getActivityTallyTheme = (points: number, isQualified: boolean) => {
    const req = calculatedPoints.totalRequired;
    if (isQualified) return { label: "Qualified", barClass: "bg-gradient-to-r from-emerald-500 to-teal-500", textClass: "text-emerald-500" };
    if (points >= req * 0.75) return { label: "Total met (Check groups)", barClass: "bg-gradient-to-r from-amber-500 to-orange-500", textClass: "text-amber-500" };
    if (points >= req * 0.5) return { label: "Intermediate Progress", barClass: "bg-gradient-to-r from-indigo-500 to-violet-500", textClass: "text-indigo-500" };
    return { label: "Beginning Stage", barClass: "bg-gradient-to-r from-blue-500 to-sky-500", textClass: "text-blue-500" };
  };

  const tallyMeta = getActivityTallyTheme(totalActivityPoints, calculatedPoints.isQualified);

  // Pass/Fail Sandbox calculations
  // Pass/Fail Sandbox calculations
  const calculatePassFailSandbox = () => {
    const cie = parseFloat(sandboxCie) || 0;
    const clampedCie = Math.min(50, Math.max(0, cie));
    
    // Ineligible if CIE is less than 20/50 (40%)
    const ineligible = clampedCie < 20;
    
    // ESE minimum pass is 40. ESE + CIE must be >= 60.
    // If clampedCie >= 20, then 60 - clampedCie <= 40, so requiredEse is always 40.
    const requiredEse = ineligible ? 0 : 40;

    return {
      cie: clampedCie,
      neededEse: requiredEse,
      percentage: ineligible ? 0 : 40,
      ineligible,
      borderline: clampedCie >= 20 && clampedCie < 25,
      perfectSafe: clampedCie >= 35
    };
  };

  const sandboxResult = calculatePassFailSandbox();

  // GPA to Percentage converters
  const handleGpaConvert = (val: string) => {
    setConverterGpa(val);
    const gpa = parseFloat(val);
    if (!isNaN(gpa) && gpa >= 0 && gpa <= 10) {
      setConverterPercentage((10 * gpa - 3.75).toFixed(2));
    } else {
      setConverterPercentage("");
    }
  };

  const handlePercentageConvert = (val: string) => {
    setConverterPercentage(val);
    const pct = parseFloat(val);
    if (!isNaN(pct) && pct >= 0 && pct <= 100) {
      setConverterGpa(((pct + 3.75) / 10).toFixed(2));
    } else {
      setConverterGpa("");
    }
  };

  // Attendance Marks calculations
  const getAttendanceMarksStats = () => {
    if (attendanceSubjects.length === 0) {
      return { marks: 0, status: "No subjects in tracker", color: "text-slate-400 dark:text-slate-500", condonation: false, repeat: false, noData: true };
    }
    const avg = getAverageAttendance();
    if (avg >= 90) return { marks: 5, status: "Excellent (5/5 Marks)", color: "text-emerald-500", condonation: false, repeat: false, noData: false };
    if (avg >= 85) return { marks: 4, status: "Good (4/5 Marks)", color: "text-emerald-500", condonation: false, repeat: false, noData: false };
    if (avg >= 80) return { marks: 3, status: "Average (3/5 Marks)", color: "text-blue-500", condonation: false, repeat: false, noData: false };
    if (avg >= 75) return { marks: 2, status: "Marginal (2/5 Marks)", color: "text-amber-550", condonation: false, repeat: false, noData: false };
    if (avg >= 60) return { marks: 0, status: "Condonation Required (0/5)", color: "text-orange-500", condonation: true, repeat: false, noData: false };
    return { marks: 0, status: "FE / Repeat Sem (0/5)", color: "text-rose-500", condonation: false, repeat: true, noData: false };
  };

  const attMarksResult = getAttendanceMarksStats();

  // Year-Back Credit Auditor progression rules
  const handleProgressionCreditChange = (semester: "s1" | "s2" | "s3" | "s4", val: number) => {
    const updated = { ...progressionCredits, [semester]: Math.min(22, Math.max(0, val)) };
    setProgressionCredits(updated);
    localStorage.setItem("ktunode_tools_progression_credits", JSON.stringify(updated));
  };

  const calculateProgressionStatus = () => {
    const s1 = progressionCredits.s1;
    const s2 = progressionCredits.s2;
    const s3 = progressionCredits.s3;
    const s4 = progressionCredits.s4;

    if (progressionTarget === "s5") {
      const earned = s1 + s2;
      const target = 26;
      const passed = earned >= target;
      return {
        earned,
        target,
        passed,
        needed: Math.max(0, target - earned),
        statusText: passed ? "Safe" : `Year-Back (Need ${target - earned})`
      };
    } else {
      const earned = s1 + s2 + s3 + s4;
      const target = 52;
      const passed = earned >= target;
      return {
        earned,
        target,
        passed,
        needed: Math.max(0, target - earned),
        statusText: passed ? "Safe" : `Year-Back (Need ${target - earned})`
      };
    }
  };

  const progressionResult = calculateProgressionStatus();

  // Grade predictor
  const calculateRequiredESE = () => {
    const s1 = parseFloat(predictorSeries1) || 0;
    const s2 = parseFloat(predictorSeries2) || 0;
    const as = parseFloat(predictorAssignments) || 0;
    const cieTotal = Math.min(50, s1 + s2 + as);

    const gradeThresholds: Record<string, number> = {
      "S": 90,
      "A+": 85,
      "A": 80,
      "B+": 70,
      "B": 60,
      "C+": 50
    };

    const targetScore = gradeThresholds[predictorTargetGrade] ?? 50;
    const needed = 2 * (targetScore - cieTotal);

    return {
      cie: cieTotal,
      needed: Math.max(0, Math.ceil(needed)), 
      impossible: needed > 100,
      readyPass: needed <= 40
    };
  };

  const predictorResult = calculateRequiredESE();

  // Helper toggle collapsed cards on mobile
  const toggleCard = (cardId: string) => {
    setCollapsedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  // Helper filters visibility of cards
  const isCardVisible = (cardCategory: string) => {
    return activeCategory === "all" || activeCategory === cardCategory;
  };

  const categories: { id: "all" | "grades" | "attendance" | "progression" | "reference"; label: string }[] = [
    { id: "all", label: "All Utilities" },
    { id: "grades", label: "Grades & Exams" },
    { id: "attendance", label: "Attendance & Labs" },
    { id: "progression", label: "Credit Progression" },
    { id: "reference", label: "Reference & Notes" }
  ];

  // Mapping dynamic slots based on default subjects list
  const activeSemesterSubjects = subjects;

  // 1. Attendance & Safe Cuts Runway Renderer
  const renderAttendanceRunway = () => {
    const avg = getAverageAttendance();
    const isTrackerEmpty = attendanceSubjects.length === 0;

    // Calculate free attendance marks according to KTU rules
    let freeMarks = 0;
    let freeMarksLabel = "0 / 5 Marks";
    let freeMarksColor = "text-rose-500";
    if (avg >= 90) { freeMarks = 5; freeMarksLabel = "5 / 5 Marks (Excellent)"; freeMarksColor = "text-emerald-500"; }
    else if (avg >= 85) { freeMarks = 4; freeMarksLabel = "4 / 5 Marks (Good)"; freeMarksColor = "text-emerald-500"; }
    else if (avg >= 80) { freeMarks = 3; freeMarksLabel = "3 / 5 Marks (Average)"; freeMarksColor = "text-blue-500"; }
    else if (avg >= 75) { freeMarks = 2; freeMarksLabel = "2 / 5 Marks (Marginal)"; freeMarksColor = "text-amber-500"; }

    const handleShareRunway = () => {
      let message = "My KTU Attendance Runway:\n";
      attendanceSubjects.forEach(sub => {
        const pct = sub.total > 0 ? Math.round((sub.attended / sub.total) * 100) : 0;
        const totalSemDays = 90;
        const target = 75;
        const totalNeededClasses = Math.ceil(totalSemDays * (target / 100));
        const remainingClasses = Math.max(0, totalSemDays - sub.total);
        const classesNeededToAttend = Math.max(0, totalNeededClasses - sub.attended);
        const canMiss = Math.max(0, remainingClasses - classesNeededToAttend);
        const impossible = classesNeededToAttend > remainingClasses;

        if (impossible) {
          message += `- ${sub.code}: ${pct}% (Danger of detention!)\n`;
        } else {
          message += `- ${sub.code}: ${pct}% (Safe to miss ${canMiss} more classes)\n`;
        }
      });
      message += "\nTrack your attendance runway on KTU Node!";
      navigator.clipboard.writeText(message);
      triggerNotification("Attendance runway copied to clipboard!");
    };

    return (
      <div className="bg-white/65 dark:bg-slate-900/65 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm dark:shadow-md dark:shadow-slate-950/20 hover:border-slate-350 dark:hover:border-slate-700/80 transition-all duration-300 w-full space-y-4">
        {/* Card Header with Live free marks badge */}
        <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-white/[0.06] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold tracking-tight text-slate-900 dark:text-slate-100">Attendance Log</h3>
                {attendanceStreak > 0 && (
                  <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/15 text-xs font-bold flex items-center gap-1">
                    <Flame className="w-3 h-3 animate-pulse" /> {attendanceStreak}d streak
                  </span>
                )}
              </div>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mt-0.5">S{sem} Active Attendance Runway</span>
            </div>
          </div>

          <div className="text-right relative group cursor-pointer shrink-0">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">Attendance Marks</span>
            <span className={`text-sm font-black ${freeMarksColor} block mt-0.5 font-mono`}>{freeMarksLabel.split(" ")[0]}</span>
            <div className="absolute right-0 top-full mt-1.5 hidden group-hover:block w-48 p-2.5 bg-slate-800 text-white text-xs rounded-lg shadow-xl z-20 leading-relaxed text-left border border-slate-700">
              <p className="font-bold border-b border-slate-700 pb-0.5 mb-1">KTU Attendance Marks:</p>
              <ul className="space-y-0.5 font-mono text-xs">
                <li>&ge; 90%: 5 marks</li>
                <li>85% - 89%: 4 marks</li>
                <li>80% - 84%: 3 marks</li>
                <li>75% - 79%: 2 marks</li>
                <li>&lt; 75%: Detention risk</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Subjects list rows */}
        <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1 scrollbar-thin">
          {isTrackerEmpty ? (
            <div className="flex flex-col items-center justify-center py-10 px-4 border-2 border-dashed border-slate-200/60 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-900/20">
              <ListTodo className="w-8 h-8 text-slate-400 mb-3" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">No Subjects Tracked</span>
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500 mb-4 text-center">Import your semester grid to start logging attendance data.</span>
              <button
                onClick={() => loadSemesterData(branch, sem)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider hover:bg-blue-500/20 transition-all cursor-pointer active:scale-95"
              >
                <Plus className="w-3.5 h-3.5" /> Import {branch.toUpperCase()} Semester {sem} Core Grid
              </button>
            </div>
          ) : (
            attendanceSubjects.map((sub) => {
              const pct = sub.total > 0 ? Math.round((sub.attended / sub.total) * 100) : 0;
              
              // Safe cuts runway calculation
              const totalSemDays = 90;
              const target = 75; // KTU minimum requirement
              const totalNeededClasses = Math.ceil(totalSemDays * (target / 100));
              const remainingClasses = Math.max(0, totalSemDays - sub.total);
              const classesNeededToAttend = Math.max(0, totalNeededClasses - sub.attended);
              const canMiss = Math.max(0, remainingClasses - classesNeededToAttend);
              const impossible = classesNeededToAttend > remainingClasses;

              let color = "text-emerald-600 dark:text-emerald-400";
              let progressBg = "bg-emerald-500";
              if (pct < 75) { color = "text-rose-600 dark:text-rose-400"; progressBg = "bg-rose-500"; }
              else if (pct < 85) { color = "text-blue-600 dark:text-blue-400"; progressBg = "bg-blue-500"; }

              return (
                <div key={sub.id} className="p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-white/[0.04] space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="truncate pr-2">
                      <span className="font-bold text-xs block text-slate-900 dark:text-white truncate leading-none font-mono">{sub.code}</span>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block truncate mt-1">{sub.name}</span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className={`font-black text-sm block ${color} font-mono`}>{pct}%</span>
                      {impossible ? (
                        <span className="text-xs font-bold text-rose-500 uppercase tracking-wider block mt-0.5 animate-pulse flex items-center gap-0.5 justify-end">
                          <AlertCircle className="w-3 h-3" /> Danger
                        </span>
                      ) : (
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mt-0.5">Miss max: <strong className="text-emerald-500 font-mono">{canMiss}</strong></span>
                      )}
                    </div>
                  </div>

                  {/* Attendance Controls & ProgressBar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                    <div className="flex-1">
                      <div className="flex justify-between text-[9px] font-bold text-slate-500 dark:text-slate-400 mb-1 font-mono">
                        <span>Attended: {sub.attended} / {sub.total}</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full ${progressBg} transition-all duration-300`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <AttendanceStepper 
                        label="Att" 
                        value={sub.attended} 
                        onIncrement={() => handleAttendanceChange(sub.id, "attended", 1)} 
                        onDecrement={() => handleAttendanceChange(sub.id, "attended", -1)} 
                      />
                      <AttendanceStepper 
                        label="Tot" 
                        value={sub.total} 
                        onIncrement={() => handleAttendanceChange(sub.id, "total", 1)} 
                        onDecrement={() => handleAttendanceChange(sub.id, "total", -1)} 
                      />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Share Runway - bottom of card */}
        {!isTrackerEmpty && (
          <button
            onClick={handleShareRunway}
            className="w-full py-2.5 rounded-xl bg-transparent hover:bg-slate-100 dark:hover:bg-white/[0.02] text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-white/[0.06] text-xs font-medium uppercase tracking-wider transition-all cursor-pointer active:scale-[0.98] flex items-center justify-center gap-1.5"
          >
            <Share2 className="w-3.5 h-3.5" /> Share Runway
          </button>
        )}
      </div>
    );
  };

  const renderCieAggregatorPanel = () => {
    const totalCie = Math.min(50, ((mtAggSeries1 + mtAggSeries2) / 2 * 0.7) + mtAggAssg + mtAggAtt);
    const neededSeries2 = ((mtDmgTarget - (mtAggAssg + mtAggAtt)) / 0.7) * 2 - mtAggSeries1;
    const impossible = neededSeries2 > 50;
    const safe = neededSeries2 <= 0;
    const allZero = mtAggSeries1 === 0 && mtAggSeries2 === 0 && mtAggAssg === 0 && mtAggAtt === 0;

    return (
      <div className="bg-white/65 dark:bg-slate-900/65 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm dark:shadow-md dark:shadow-slate-950/20 hover:border-slate-350 dark:hover:border-slate-700/80 transition-all duration-300 w-full space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-white/[0.06] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-tight text-slate-900 dark:text-slate-100">CIE & Damage Control</h3>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mt-0.5">Calculate CIE internals and Series 2 targets</span>
            </div>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Series 1 (max 50)</label>
            <input
              type="number"
              min="0"
              max="50"
              value={mtAggSeries1}
              onChange={(e) => {
                const v = Math.min(50, Math.max(0, Number(e.target.value)));
                setMtAggSeries1(v);
                setMtDmgSeries1(v);
              }}
              className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/60 dark:focus:border-blue-500/50 text-slate-900 dark:text-slate-100 transition-all duration-200"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Series 2 (max 50)</label>
            <input
              type="number"
              min="0"
              max="50"
              value={mtAggSeries2}
              onChange={(e) => setMtAggSeries2(Math.min(50, Math.max(0, Number(e.target.value))))}
              className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/60 dark:focus:border-blue-500/50 text-slate-900 dark:text-slate-100 transition-all duration-200"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Assignments (max 10)</label>
            <input
              type="number"
              min="0"
              max="10"
              value={mtAggAssg}
              onChange={(e) => {
                const v = Math.min(10, Math.max(0, Number(e.target.value)));
                setMtAggAssg(v);
              }}
              className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/60 dark:focus:border-blue-500/50 text-slate-900 dark:text-slate-100 transition-all duration-200"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Attendance Marks (0-5)</label>
            <input
              type="number"
              min="0"
              max="5"
              value={mtAggAtt}
              onChange={(e) => {
                const v = Math.min(5, Math.max(0, Number(e.target.value)));
                setMtAggAtt(v);
              }}
              className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/60 dark:focus:border-blue-500/50 text-slate-900 dark:text-slate-100 transition-all duration-200"
            />
          </div>
        </div>

        {/* Aggregated CIE display */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/40 text-center space-y-1">
          <div className="text-[10px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">Aggregated CIE Score</div>
          <div className="text-4xl font-light tracking-tight text-slate-900 dark:text-white font-mono">{totalCie.toFixed(1)} <span className="text-xs text-zinc-550">/ 50</span></div>
          <div className="text-[9px] font-semibold text-slate-500 dark:text-slate-400 mt-1">
            Formula: ((Series 1 + Series 2) / 2 &times; 0.7) + Assignments + Attendance
          </div>
        </div>

        {/* Series 2 Damage Control Target */}
        <div className="pt-2 border-t border-slate-200/60 dark:border-white/[0.06] space-y-3">
          <div className="flex justify-between items-center text-xs font-bold text-zinc-350">
            <span>Target CIE Score (out of 50)</span>
            <span className="text-blue-600 dark:text-blue-400 font-bold font-mono">{mtDmgTarget} / 50</span>
          </div>
          <input
            type="range"
            min="20"
            max="50"
            value={mtDmgTarget}
            onChange={(e) => setMtDmgTarget(Number(e.target.value))}
            className="w-full accent-blue-500 cursor-pointer h-1 rounded-lg bg-slate-100 dark:bg-slate-800"
          />

          {(() => {
            let desc = "";
            let color = "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20";
            let stateLabel = "Damage Control Action Required";
            let StateIcon = AlertTriangle;
            
            if (allZero) {
              stateLabel = "Enter Scores to Begin";
              desc = "Enter your Series 1 and internal marks above to calculate target ESE scores.";
              color = "text-blue-600 dark:text-blue-400 bg-blue-500/5 border-blue-500/10";
              StateIcon = HelpCircle;
            } else if (impossible) {
              stateLabel = "Out of Reach";
              desc = `Required Series 2 score is ${neededSeries2.toFixed(1)}, which is impossible (max 50). Try lowering target CIE.`;
              color = "text-rose-500 bg-rose-500/10 border-rose-500/20";
              StateIcon = AlertCircle;
            } else if (safe) {
              stateLabel = "Target Secured";
              desc = `You are fully on track! You need 0 marks in Series 2 to clear your target CIE.`;
              color = "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
              StateIcon = CheckCircle2;
            } else {
              desc = `You need a score of at least ${neededSeries2.toFixed(1)} / 50 in Series 2 to secure your target CIE of ${mtDmgTarget}.`;
              StateIcon = AlertTriangle;
            }

            return (
              <div className={`p-3 rounded-xl border text-[10px] leading-relaxed text-center flex flex-col items-center gap-1.5 ${color}`}>
                <span className="font-bold uppercase tracking-wider flex items-center gap-1">
                  <StateIcon className="w-3.5 h-3.5" />
                  {stateLabel}
                </span>
                <span>{desc}</span>
              </div>
            );
          })()}
        </div>

        {/* Dynamic ESE Grade Targets integrated */}
        {!allZero && (
          <div className="pt-3 border-t border-slate-200/60 dark:border-white/[0.06] space-y-2">
            <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Required ESE Exam Targets</span>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              {[
                { grade: "S", pct: 90, label: "S (90+)" },
                { grade: "A+", pct: 85, label: "A+ (85+)" },
                { grade: "A", pct: 80, label: "A (80+)" },
                { grade: "B+", pct: 70, label: "B+ (70+)" },
                { grade: "B", pct: 60, label: "B (60+)" },
                { grade: "C+", pct: 50, label: "C+ (50+)" }
              ].map(tg => {
                const needed = (tg.pct - totalCie) * 2;
                const impossible = needed > 100;
                const finalEse = Math.max(40, Math.ceil(needed));
                
                let badge = "";
                let badgeClass = "";
                if (impossible) {
                  badge = "Impossible";
                  badgeClass = "bg-rose-500/10 text-rose-550 border-rose-500/15";
                } else if (finalEse === 40 && needed <= 40) {
                  badge = "40/100 (Min)";
                  badgeClass = "bg-emerald-500/10 text-emerald-600 dark:text-emerald-450 border-emerald-500/15";
                } else {
                  badge = `${finalEse} / 100`;
                  badgeClass = "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/15";
                }

                return (
                  <div key={tg.grade} className="p-2 rounded-xl bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200/40 dark:border-white/[0.02] flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-750 dark:text-slate-300 block">{tg.grade} Target</span>
                      <span className="text-[8px] text-slate-400 font-mono block mt-0.5">{tg.label}</span>
                    </div>
                    <span className={`px-2 py-0.5 rounded-lg text-[9px] font-bold uppercase ${badgeClass}`}>
                      {badge}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderGraduationAuditors = () => {
    const s1 = progressionCredits.s1;
    const s2 = progressionCredits.s2;
    const s3 = progressionCredits.s3;
    const s4 = progressionCredits.s4;
    
    const limit = progressionTarget === "s5" ? 26 : 52;
    const earned = progressionTarget === "s5" ? (s1 + s2) : (s1 + s2 + s3 + s4);
    const passed = earned >= limit;

    const handleAddBacklog = () => {
      if (!backlogCode.trim() || !backlogName.trim()) return;
      const newBacklog = {
        id: `bl_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        code: backlogCode.trim(),
        name: backlogName.trim(),
        semester: backlogSemester,
        attempts: 0,
        status: "pending" as const
      };
      const updated = [...backlogSubjects, newBacklog];
      setBacklogSubjects(updated);
      localStorage.setItem("ktunode_tools_backlogs", JSON.stringify(updated));
      setBacklogCode("");
      setBacklogName("");
      triggerNotification("Backlog subject added!");
    };

    const handleDeleteBacklog = (id: string) => {
      const backlog = backlogSubjects.find(b => b.id === id);
      const name = backlog ? backlog.name : "this backlog";
      if (!window.confirm(`Are you sure you want to remove backlog for "${name}"?`)) {
        return;
      }
      const updated = backlogSubjects.filter(b => b.id !== id);
      setBacklogSubjects(updated);
      localStorage.setItem("ktunode_tools_backlogs", JSON.stringify(updated));
    };

    const handleStatusChange = (id: string, status: 'pending' | 'cleared' | 'registered') => {
      const updated = backlogSubjects.map(b => b.id === id ? { ...b, status, attempts: status === 'registered' ? b.attempts + 1 : b.attempts } : b);
      setBacklogSubjects(updated);
      localStorage.setItem("ktunode_tools_backlogs", JSON.stringify(updated));
    };

    // Activity filtering
    const query = activitySearchQuery.toLowerCase().trim();
    const filtered = Object.values(KTU_ACTIVITIES).filter(act => {
      const matchesGroup = activityGuideGroup === "All" || act.code.startsWith(activityGuideGroup === "I" ? "1" : activityGuideGroup === "II" ? "2" : "3");
      const matchesQuery = !query || 
        act.code.includes(query) || 
        act.name.toLowerCase().includes(query) || 
        (act.desc && act.desc.toLowerCase().includes(query)) ||
        act.proof.toLowerCase().includes(query);
      return matchesGroup && matchesQuery;
    });

    const subTabs = [
      { id: "activity" as const, label: "Activity Points", icon: <Award className="w-3.5 h-3.5" />, badge: `${totalActivityPoints}/${calculatedPoints.totalRequired}` },
      { id: "credits" as const, label: "Credit Auditor", icon: <ShieldCheck className="w-3.5 h-3.5" />, badge: `${earned}/${limit}` },
      { id: "backlogs" as const, label: "Backlogs", icon: <AlertTriangle className="w-3.5 h-3.5" />, badge: backlogSubjects.length > 0 ? `${backlogSubjects.length}` : undefined },
    ];

    return (
      <div className="bg-white/65 dark:bg-slate-900/65 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 rounded-2xl shadow-sm dark:shadow-md dark:shadow-slate-950/20 hover:border-slate-350 dark:hover:border-slate-700/80 transition-all duration-300 overflow-hidden">
                {/* ——————— UNIFIED HEADER ——————— */}
        <div className="px-5 py-5 border-b border-slate-200/60 dark:border-white/[0.06]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/15 to-teal-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-tight text-slate-900 dark:text-slate-50">Graduation Runway</h3>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mt-0.5">
                  Activity points, credit checks & backlog tracking
                </span>
              </div>
            </div>

            {/* Sub-tab pills */}
            <div className="flex items-center bg-slate-100/80 dark:bg-slate-950/50 p-0.5 rounded-xl border border-slate-200/40 dark:border-white/[0.04] self-start sm:self-center">
              {subTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setGradSubTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer active:scale-95 ${
                    gradSubTab === tab.id
                      ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                  {tab.badge && (
                    <span className={`text-[8px] font-black px-1.5 py-0.5 rounded-md font-mono ${
                      gradSubTab === tab.id
                        ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                        : "bg-slate-200/60 dark:bg-slate-700/60 text-slate-500 dark:text-slate-400"
                    }`}>{tab.badge}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* â•â•â•â•â•â•â• ACTIVITY POINTS TAB â•â•â•â•â•â•â• */}
        {gradSubTab === "activity" && (
          <div>
            {/* Score Overview + Group Breakdown */}
            <div className="px-5 py-4 border-b border-slate-200/50 dark:border-white/[0.05]">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                {/* Total Score */}
                <div className="sm:col-span-3 text-center sm:text-left">
                  <div className="flex items-baseline gap-1.5 justify-center sm:justify-start">
                    <span className="text-3xl font-black text-slate-900 dark:text-white tabular-nums leading-none">
                      {totalActivityPoints}
                    </span>
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500">/ {calculatedPoints.totalRequired}</span>
                  </div>
                  <div className="mt-2">
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          calculatedPoints.isQualified ? "bg-emerald-500" : totalActivityPoints >= calculatedPoints.totalRequired * 0.5 ? "bg-blue-500" : "bg-amber-500"
                        }`}
                        style={{ width: `${Math.min(100, (totalActivityPoints / calculatedPoints.totalRequired) * 100)}%` }}
                      />
                    </div>
                    <div className="text-[9px] font-bold mt-1">
                      {calculatedPoints.isQualified ? (
                        <span className="text-emerald-500 flex items-center gap-0.5 justify-center sm:justify-start"><CheckCircle2 className="w-3 h-3" /> Qualified for graduation</span>
                      ) : (
                        <span className="text-amber-500">{calculatedPoints.totalRequired - totalActivityPoints} pts to go</span>
                      )}
                    </div>
                  </div>
                  <div className="mt-2">
                    <select
                      value={studentType}
                      onChange={(e) => handleStudentTypeChange(e.target.value as typeof studentType)}
                      className="bg-slate-55 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-2 py-1 text-[9px] font-bold text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer w-full"
                    >
                      <option value="regular">Regular (100 pts)</option>
                      <option value="lateral">Lateral (75 pts)</option>
                      <option value="pwd">PwD (50 pts)</option>
                    </select>
                  </div>
                </div>

                {/* Group I, II, III Cards */}
                <div className="sm:col-span-9 grid grid-cols-3 gap-3">
                  {[
                    { id: "1", name: "Group I", subtitle: "Sports, Arts & Community", capped: calculatedPoints.group1Capped, color: "emerald" },
                    { id: "2", name: "Group II", subtitle: "Technical & Professional", capped: calculatedPoints.group2Capped, color: "blue" },
                    { id: "3", name: "Group III", subtitle: "Entrepreneurship & MOOC", capped: calculatedPoints.group3Capped, color: "violet" }
                  ].map(grp => {
                    const pct = Math.min(100, (grp.capped / 60) * 100);
                    const colors = {
                      emerald: { bar: "bg-emerald-500", text: "text-emerald-500", bg: "bg-emerald-500/[0.04] dark:bg-emerald-500/[0.07]", border: "border-emerald-500/10 dark:border-emerald-500/15" },
                      blue: { bar: "bg-blue-500", text: "text-blue-500", bg: "bg-blue-500/[0.04] dark:bg-blue-500/[0.07]", border: "border-blue-500/10 dark:border-blue-500/15" },
                      violet: { bar: "bg-violet-500", text: "text-violet-500", bg: "bg-violet-500/[0.04] dark:bg-violet-500/[0.07]", border: "border-violet-500/10 dark:border-violet-500/15" },
                    }[grp.color]!;
                    return (
                      <div key={grp.id} className={`p-3 rounded-xl border ${colors.border} ${colors.bg} space-y-2`}>
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{grp.name}</span>
                          <span className={`text-[10px] font-black font-mono tabular-nums ${colors.text}`}>{grp.capped}/60</span>
                        </div>
                        <div className="h-2 bg-slate-200/60 dark:bg-slate-700/60 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full transition-all duration-500 ${colors.bar}`} style={{ width: `${pct}%` }} />
                        </div>
                        <div className="text-[8px] text-slate-400 dark:text-slate-500 font-medium leading-snug">{grp.subtitle}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Claims pills */}
            {selectedActivities.length > 0 && (
              <div className="px-5 py-3 border-b border-slate-200/50 dark:border-white/[0.05]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-bold tracking-[0.15em] text-slate-500 dark:text-slate-400 uppercase">Your Claims ({selectedActivities.length})</span>
                  <span className={`text-[10px] font-black font-mono ${tallyMeta.textClass}`}>{totalActivityPoints} pts</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedActivities.map((act) => {
                    const groupNum = act.activityCode.split('.')[0];
                    const pillColor = groupNum === "1" 
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/15" 
                      : groupNum === "2" 
                        ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/15" 
                        : "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/15";
                    return (
                      <div key={act.id} className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[9px] font-bold ${pillColor}`}>
                        <span className="font-mono">{act.activityCode}</span>
                        {act.level && <span className="opacity-70">({act.level})</span>}
                        <span className="font-black">+{act.points}</span>
                        <button
                          onClick={() => handleDeleteActivity(act.id)}
                          className="text-current opacity-40 hover:opacity-100 cursor-pointer ml-0.5 transition-opacity"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Search + Group Filter */}
            <div className="px-5 pt-4 pb-2">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search activities (e.g. NSS, sports, certificate)..."
                    value={activitySearchQuery}
                    onChange={(e) => setActivitySearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-[11px] font-medium text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                  />
                </div>
                <div className="flex items-center bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-0.5 shrink-0">
                  {(["All", "I", "II", "III"] as const).map(grp => (
                    <button
                      key={grp}
                      onClick={() => setActivityGuideGroup(grp)}
                      className={`px-2.5 py-1.5 rounded-lg text-[9px] font-bold transition-all cursor-pointer active:scale-95 ${
                        activityGuideGroup === grp
                          ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                          : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                      }`}
                    >
                      {grp}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Activity catalog */}
            <div className="px-5 pb-5">
              <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1 scrollbar-thin">
                {filtered.length === 0 ? (
                  <div className="text-[11px] font-medium text-slate-400 text-center py-8 border border-dashed border-slate-200 dark:border-slate-700 rounded-xl">
                    No activities match your search.
                  </div>
                ) : (
                  filtered.map(act => {
                    const claimsList = selectedActivities.filter(sa => sa.activityCode === act.code);
                    const isClaimed = claimsList.length > 0;
                    const claimedPoints = claimsList.reduce((acc, curr) => acc + curr.points, 0);
                    const groupNum = act.code.split('.')[0];
                    const groupBadge = groupNum === "1" 
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/15" 
                      : groupNum === "2" 
                        ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/15" 
                        : "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/15";
                    const isInlineAddActive = inlineAddCode === act.code;

                    return (
                      <div key={act.code} className={`p-4 rounded-xl border transition-all duration-200 ${
                        isClaimed 
                          ? "bg-emerald-500/[0.03] dark:bg-emerald-500/[0.05] border-emerald-500/15 dark:border-emerald-500/15" 
                          : "bg-slate-50 dark:bg-slate-900/40 border-slate-200/60 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-500"
                      }`}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className={`px-1.5 py-0.5 rounded-md text-[8px] font-bold border font-mono ${groupBadge}`}>
                                {act.code}
                              </span>
                              <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                                Max {act.maxPoints} pts
                              </span>
                              {isClaimed && (
                                <span className="px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/10 text-[8px] font-bold flex items-center gap-0.5">
                                  <Check className="w-2.5 h-2.5" /> {claimedPoints} pts
                                </span>
                              )}
                            </div>
                            <h4 className="text-[11.5px] font-semibold text-slate-900 dark:text-slate-100 leading-snug mt-1.5">{act.name}</h4>
                            {act.desc && <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed mt-0.5">{act.desc}</p>}
                            <div className="flex items-center gap-1 mt-1.5 text-[9px] text-slate-400 dark:text-slate-500">
                              <FileText className="w-3 h-3" />
                              <span>Proof: <strong className="text-slate-600 dark:text-slate-300">{act.proof}</strong></span>
                            </div>
                          </div>

                          {!isInlineAddActive && (
                            <button
                              onClick={() => {
                                if (act.type === "fixed") { handleDirectAddFixed(act); } else { handleStartInlineAdd(act); }
                              }}
                              className="px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/15 text-[9px] font-bold cursor-pointer transition-all flex items-center gap-1 active:scale-95 shrink-0"
                            >
                              <Plus className="w-3 h-3" /> Claim
                            </button>
                          )}
                        </div>

                        {/* Inline config */}
                        {isInlineAddActive && (
                          <div className="mt-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-3 animate-fade-in">
                            <div className="flex-1 space-y-1">
                              <span className="text-[8px] font-bold text-slate-400 dark:text-slate-500 block uppercase tracking-wider">Configure:</span>
                              {act.type === "level" && act.levels && (
                                <select value={inlineSelLevel} onChange={(e) => setInlineSelLevel(e.target.value)} className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-2 py-1.5 font-bold text-[10px] cursor-pointer text-slate-800 dark:text-slate-200 focus:outline-none">
                                  {Object.keys(act.levels).map(lvl => (<option key={lvl} value={lvl}>{lvl} ({act.levels?.[lvl]} pts)</option>))}
                                </select>
                              )}
                              {act.type === "count" && (
                                <div className="flex items-center gap-2">
                                  <input type="number" min="1" placeholder="Qty" value={inlineSelQuantity} onChange={(e) => setInlineSelQuantity(Math.max(1, Number(e.target.value)))} className="w-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-2 py-1 text-center font-bold font-mono text-[10px] focus:outline-none" />
                                  <span className="text-[9px] text-slate-400">× {act.pointsPerUnit || act.maxPoints} pts each</span>
                                </div>
                              )}
                              {act.type === "input" && (
                                <div className="flex items-center gap-2">
                                  <input type="number" min="1" max={act.maxPoints} placeholder="Pts" value={inlineSelPoints} onChange={(e) => setInlineSelPoints(Math.min(act.maxPoints, Math.max(0, Number(e.target.value))))} className="w-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-2 py-1 text-center font-bold font-mono text-[10px] focus:outline-none" />
                                  <span className="text-[9px] text-slate-400">pts (max {act.maxPoints})</span>
                                </div>
                              )}
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <button onClick={() => setInlineAddCode(null)} className="px-3 py-1.5 rounded-lg bg-transparent border border-slate-200/60 dark:border-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-white cursor-pointer text-[9px] font-bold transition-all active:scale-95">Cancel</button>
                              <button onClick={() => handleConfirmInlineAdd(act)} className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white cursor-pointer text-[9px] font-bold transition-all active:scale-95 shadow-sm">Confirm</button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        )}

        {/* â•â•â•â•â•â•â• CREDIT AUDITOR TAB â•â•â•â•â•â•â• */}
        {gradSubTab === "credits" && (
          <div className="px-5 py-5 space-y-4">
            {/* Target toggle */}
            <div className="flex gap-2">
              {([
                { id: "s5" as const, label: "S5 Promotion Lock", need: 26 },
                { id: "s7" as const, label: "S7 Promotion Lock", need: 52 }
              ]).map(t => (
                <button
                  key={t.id}
                  onClick={() => setProgressionTarget(t.id)}
                  className={`flex-1 py-2 rounded-xl border text-[10px] font-bold transition-all cursor-pointer active:scale-[0.98] ${
                    progressionTarget === t.id
                      ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
                      : "bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200/40 dark:border-slate-800 hover:border-slate-300"
                  }`}
                >
                  {t.label} (Need {t.need})
                </button>
              ))}
            </div>

            {/* Credit inputs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {["s1", "s2", ...(progressionTarget === "s7" ? ["s3", "s4"] : [])].map((key) => (
                <div key={key} className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">{key.toUpperCase()} Credits</label>
                  <input
                    type="number"
                    min="0"
                    max="22"
                    value={progressionCredits[key as keyof typeof progressionCredits]}
                    onChange={(e) => handleProgressionCreditChange(key as any, Number(e.target.value))}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-center font-bold text-base text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                  />
                </div>
              ))}
            </div>

            {/* Result box */}
            <div className={`p-5 rounded-xl border text-center ${
              passed
                ? "bg-emerald-500/5 border-emerald-500/15"
                : "bg-rose-500/5 border-rose-500/15"
            }`}>
              <div className={`text-3xl font-black tabular-nums leading-none ${passed ? "text-emerald-600 dark:text-emerald-400" : "text-rose-500"}`}>
                {earned} <span className="text-base font-bold opacity-50">/ {limit} credits</span>
              </div>
              <div className={`text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 justify-center mt-3 ${passed ? "text-emerald-600 dark:text-emerald-400" : "text-rose-500"}`}>
                {passed ? <ShieldCheck className="w-4 h-4" /> : <ShieldAlert className="w-4 h-4" />}
                {passed ? "Clear for Promotion âœ“" : `Year-Back Risk â€” ${limit - earned} credits short`}
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-2">
                {progressionTarget === "s5" ? "S5 promotion" : "S7 promotion"} requires minimum <strong className="text-slate-700 dark:text-slate-300">{limit} credits</strong>.
              </p>
            </div>
          </div>
        )}

        {/* ——————— BACKLOG TRACKER TAB ——————— */}
        {gradSubTab === "backlogs" && (
          <div className="px-5 py-5 space-y-4">
            {/* Backlog list */}
            <div className="space-y-2 max-h-[280px] overflow-y-auto pr-0.5">
              {backlogSubjects.length === 0 ? (
                <div className="text-center py-10 border border-dashed border-slate-200 dark:border-slate-700 rounded-xl">
                  <AlertTriangle className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto mb-2" />
                  <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">No backlogs logged</div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">Add failed subjects below to track clearance progress.</div>
                </div>
              ) : (
                backlogSubjects.map(bl => (
                  <div key={bl.id} className="p-3.5 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800 flex items-center justify-between gap-3 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-slate-900 dark:text-white font-mono">{bl.code}</span>
                        <span className="text-[9px] text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">S{bl.semester}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate block mt-0.5">{bl.name} • {bl.attempts} attempt{bl.attempts !== 1 ? "s" : ""}</span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <select
                        value={bl.status}
                        onChange={(e) => handleStatusChange(bl.id, e.target.value as 'pending' | 'cleared' | 'registered')}
                        className={`px-2 py-1 rounded-lg border text-[9px] font-bold cursor-pointer ${
                          bl.status === "cleared" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/15"
                          : bl.status === "registered" ? "bg-blue-500/10 text-blue-500 border-blue-500/15"
                          : "bg-amber-500/10 text-amber-500 border-amber-500/15"
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="registered">Registered</option>
                        <option value="cleared">Cleared</option>
                      </select>
                      <button onClick={() => handleDeleteBacklog(bl.id)} className="text-slate-400 hover:text-rose-500 p-1 cursor-pointer transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Add backlog form */}
            <div className="p-4 rounded-xl border border-slate-200/40 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 space-y-3">
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 block">Add Failed Subject</span>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                <input
                  type="text"
                  placeholder="Code"
                  value={backlogCode}
                  onChange={(e) => setBacklogCode(e.target.value)}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-[10px] font-bold text-slate-900 dark:text-white uppercase placeholder-slate-400 focus:outline-none sm:col-span-2"
                />
                <input
                  type="text"
                  placeholder="Subject Name"
                  value={backlogName}
                  onChange={(e) => setBacklogName(e.target.value)}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 col-span-2 sm:col-span-3 text-[10px] font-bold text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
                />
                <select
                  value={backlogSemester}
                  onChange={(e) => setBacklogSemester(Number(e.target.value))}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-2 text-[10px] font-bold text-slate-900 dark:text-white focus:outline-none cursor-pointer font-mono"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (
                    <option key={s} value={s}>S{s}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleAddBacklog}
                className="w-full py-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/15 text-[10px] font-bold transition-all cursor-pointer active:scale-[0.98] flex items-center justify-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" /> Log Backlog
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };


  const renderStudyHub = () => {
    const activeCode = plannerActiveSubject.code;
    const activeName = plannerActiveSubject.name;
    const moduleCount = 4;
    const defaultToggles = Array(moduleCount).fill(false);
    const moduleToggles = mtMilestones[activeCode] || defaultToggles;

    const untouchedIndices = moduleToggles.reduce<number[]>((acc, val, idx) => {
      if (!val) acc.push(idx);
      return acc;
    }, []);
    const untouchedCount = untouchedIndices.length;
    const doneCount = moduleCount - untouchedCount;

    // Find first untouched module for "current" highlighting
    const currentModuleIdx = untouchedIndices.length > 0 ? untouchedIndices[0] : -1;

    // Urgency classification
    const urgencyLevel = mtCramHours > 48 ? "calm" : mtCramHours > 12 ? "focused" : "critical";

    let advice = "";
    if (untouchedCount === 0) {
      advice = `All ${moduleCount} modules fully prepared! You are in the safest zone for an S grade. Dedicate time to reviewing old papers & coding structures.`;
    } else if (mtCramHours >= untouchedCount * 2.5) {
      const perModule = Math.floor((mtCramHours / untouchedCount) * 10) / 10;
      advice = `With ${untouchedCount} modules untouched, dedicate ~${perModule}h each to Mod ${untouchedIndices.map(i => i + 1).join(" & ")}. Leave the last 2h for formula sheets and past papers.`;
    } else if (mtCramHours < untouchedCount * 1.5 && untouchedCount > 1) {
      const skipMod = untouchedIndices[untouchedIndices.length - 1] + 1;
      const focusMods = untouchedIndices.slice(0, -1).map(i => i + 1).join(", ");
      advice = `Bypass Module ${skipMod} entirely. Focus your remaining ${mtCramHours} hours exclusively on high-yield Modules ${focusMods} to secure a safe pass limit.`;
    } else {
      advice = `With ${mtCramHours} hours remaining and ${untouchedCount} modules untouched, prioritize Module ${untouchedIndices[0] + 1} (usually carries 20% fundamental weight) before attempting the others.`;
    }

    // Alert text based on urgency + hours
    const alertTitle = urgencyLevel === "critical"
      ? `${mtCramHours}h left — prioritise Mod ${currentModuleIdx >= 0 ? currentModuleIdx + 1 : "?"} first (20% weight), then Mod ${untouchedIndices.length > 1 ? untouchedIndices[1] + 1 : "—"}.`
      : untouchedCount === 0
        ? `All modules done! Revise formulas & past papers.`
        : `${mtCramHours}h left — prioritise Mod ${currentModuleIdx >= 0 ? currentModuleIdx + 1 : "?"} first (20% weight), then Mod ${untouchedIndices.length > 1 ? untouchedIndices[1] + 1 : "—"}.`;

    const toggleModule = (idx: number) => {
      const currentArray = [...moduleToggles];
      currentArray[idx] = !currentArray[idx];
      const updated = {
        ...mtMilestones,
        [activeCode]: currentArray
      };
      setMtMilestones(updated);
    };

    const wordCount = notepadText.trim() ? notepadText.trim().split(/\s+/).length : 0;

    const handleDownloadNotes = () => {
      const element = document.createElement("a");
      const file = new Blob([notepadText], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = `ktu_study_notes_${activeCode}_s${sem}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    };

    const handleGenerateCramStrategy = () => {
      let msg = `I'm studying for "${activeName}" (${activeCode}) and need a personalized cram strategy.\n\n`;
      msg += `Current status:\n`;
      msg += `• ${doneCount}/${moduleCount} modules completed (Modules: ${moduleToggles.map((d, i) => `Mod ${i+1}: ${d ? "✓ done" : "⬜ pending"}`).join(", ")})\n`;
      msg += `• Study window remaining: ${mtCramHours} hours\n`;
      msg += `• Urgency level: ${urgencyLevel}\n`;
      if (notepadText.trim()) {
        msg += `\nMy study notes so far:\n${notepadText.trim().slice(0, 500)}\n`;
      }
      msg += `\nPlease give me a step-by-step cram plan with time allocations for each remaining module, key topics to focus on, and exam tips.`;
      navigator.clipboard.writeText(msg);
      triggerNotification("Cram strategy prompt copied — paste into chat for personalized advice!");
    };

    return (
      <div className="bg-white/65 dark:bg-slate-900/65 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 rounded-2xl shadow-sm dark:shadow-md dark:shadow-slate-950/20 hover:border-slate-350 dark:hover:border-slate-700/80 transition-all duration-300 overflow-hidden w-full">
        
                {/* ——————— UNIFIED HEADER ——————— */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200/60 dark:border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/15 to-indigo-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Notebook className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-tight text-slate-900 dark:text-slate-50">11th-hour study hub</h3>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 block mt-0.5">Sequencer, focus timer & exam tools</span>
            </div>
          </div>
          <select
            value={plannerActiveSubject.code}
            onChange={(e) => {
              const selected = activeSemesterSubjects.find(s => s.code === e.target.value) || { code: e.target.value, name: "Selected Course" };
              setPlannerActiveSubject(selected);
            }}
            className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-1.5 text-[10px] font-bold text-slate-800 dark:text-slate-200 focus:outline-none cursor-pointer max-w-[180px] sm:max-w-[240px] truncate"
          >
            {activeSemesterSubjects.map(sub => (
              <option key={sub.code} value={sub.code}>{sub.name || sub.code}</option>
            ))}
          </select>
        </div>

        {/* ——————— TOP HALF: SEQUENCER ——————— */}
        <div className="px-5 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Left: Modules + Slider */}
            <div className="space-y-3">
              <span className="text-[9px] font-bold tracking-[0.15em] text-slate-500 dark:text-slate-400 uppercase block">Syllabus Modules</span>
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: moduleCount }, (_, i) => i).map((idx) => {
                  const num = idx + 1;
                  const isDone = moduleToggles[idx];
                  const isCurrent = idx === currentModuleIdx;
                  return (
                    <button
                      key={num}
                      onClick={() => toggleModule(idx)}
                      className={`py-2.5 rounded-xl text-[10px] font-bold transition-all cursor-pointer text-center active:scale-95 ${
                        isDone
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500/25"
                          : isCurrent
                            ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-blue-500/60"
                            : "bg-slate-50/50 dark:bg-slate-800/30 text-slate-400 dark:text-slate-500 border border-slate-200/40 dark:border-white/[0.04] opacity-60 hover:opacity-80"
                      }`}
                    >
                      Mod {num}
                    </button>
                  );
                })}
              </div>

              {/* Study Window Slider */}
              <div className="space-y-2 pt-1">
                <span className="text-[9px] font-bold tracking-[0.15em] text-slate-500 dark:text-slate-400 uppercase block">Study Window Remaining</span>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="24"
                    value={mtCramHours}
                    onChange={(e) => setMtCramHours(Number(e.target.value))}
                    className="flex-1 accent-blue-500 cursor-pointer h-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                  <span className="text-sm font-bold font-mono text-slate-800 dark:text-slate-200 tabular-nums min-w-[52px] text-right">{mtCramHours} hrs</span>
                </div>
              </div>
            </div>

            {/* Right: Alert + Advice */}
            <div className="space-y-3 flex flex-col justify-center">
              {/* Alert Box */}
              <div className={`px-4 py-3 rounded-xl border-2 ${
                urgencyLevel === "critical"
                  ? "bg-rose-500/5 border-rose-500/25 text-rose-600 dark:text-rose-400"
                  : urgencyLevel === "focused"
                    ? "bg-amber-500/5 border-amber-500/25 text-amber-700 dark:text-amber-400"
                    : "bg-emerald-500/5 border-emerald-500/25 text-emerald-700 dark:text-emerald-400"
              }`}>
                <div className="flex items-start gap-2">
                  {urgencyLevel === "critical" ? (
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  ) : (
                    <Sparkles className="w-4 h-4 mt-0.5 shrink-0" />
                  )}
                  <p className="text-[11px] font-semibold leading-relaxed">{alertTitle}</p>
                </div>
              </div>

              {/* Advice text */}
              <p className="text-[10.5px] leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                {advice}
              </p>
            </div>
          </div>
        </div>

        {/* ——————— DIVIDER ——————— */}
        <div className="border-t border-slate-200/50 dark:border-white/[0.05]" />

        {/* ——————— BOTTOM HALF: TIMER + SCRATCHPAD ——————— */}
        <div className="px-5 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            {/* Left: Focus Timer + Ambient */}
            <div className="space-y-4">
              <span className="text-[9px] font-bold tracking-[0.15em] text-slate-500 dark:text-slate-400 uppercase block">Focus Timer</span>
              
              {/* Timer Display */}
              <div className="text-center py-2">
                <div className="font-mono text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tabular-nums tracking-tight leading-none">
                  {String(Math.floor(pomodoroTime / 60)).padStart(2, "0")}:{(pomodoroTime % 60).toString().padStart(2, "0")}
                </div>
                <span className={`text-[9px] font-bold uppercase tracking-[0.2em] mt-2 block ${
                  pomodoroMode === "focus" ? "text-orange-500" : "text-blue-400"
                }`}>
                  {pomodoroMode === "focus" ? "Focus Session" : "Break Time"}
                </span>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => {
                    setPomodoroActive(false);
                    setPomodoroTime(pomodoroMode === "focus" ? 1500 : 300);
                  }}
                  className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 flex items-center justify-center transition-all cursor-pointer active:scale-95 border border-slate-200/50 dark:border-slate-800"
                  title="Reset timer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setPomodoroActive(!pomodoroActive)}
                  className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer active:scale-95 shadow-sm ${
                    pomodoroActive
                      ? "bg-amber-500 hover:bg-amber-600 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  {pomodoroActive ? "Pause" : "Start"}
                </button>
                <button
                  onClick={() => {
                    setPomodoroActive(false);
                    const nextMode = pomodoroMode === "focus" ? "break" : "focus";
                    setPomodoroMode(nextMode);
                    setPomodoroTime(nextMode === "focus" ? 1500 : 300);
                  }}
                  className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 flex items-center justify-center transition-all cursor-pointer active:scale-95 border border-slate-200/50 dark:border-slate-800"
                  title="Skip to next phase"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              {/* Ambient Sound Compact Pills */}
              <div className="space-y-2 pt-1">
                <span className="text-[9px] font-bold tracking-[0.15em] text-slate-500 dark:text-slate-400 uppercase block">Ambient Sound</span>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { id: "rain", label: "Rain", icon: CloudRain },
                    { id: "fire", label: "Fire", icon: Flame },
                    { id: "cafe", label: "Cafe", icon: Coffee },
                    { id: "lofi", label: "Beat", icon: Music }
                  ].map(snd => {
                    const SndIcon = snd.icon;
                    const isActive = selectedLofiSound === snd.id;
                    return (
                      <button
                        key={snd.id}
                        onClick={() => setSelectedLofiSound(isActive ? null : snd.id)}
                        className={`py-2 px-1 rounded-xl border text-[8px] font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-[0.97] ${
                          isActive
                            ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/25"
                            : "bg-slate-50/50 dark:bg-slate-800/30 text-slate-400 dark:text-slate-500 border border-slate-200/40 dark:border-white/[0.04] hover:text-slate-600 dark:hover:text-slate-300"
                        }`}
                      >
                        <SndIcon className="w-3.5 h-3.5" />
                        <span className="uppercase tracking-wider">{snd.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Scratchpad */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold tracking-[0.15em] text-slate-500 dark:text-slate-400 uppercase">Scratchpad</span>
                <span className="text-[9px] font-mono font-bold text-slate-400 dark:text-slate-500 tabular-nums">{wordCount} words</span>
              </div>
              <textarea
                value={notepadText}
                onChange={(e) => handleNotepadSave(e.target.value)}
                placeholder="Type formulas, notes, or ideas here..."
                className="w-full bg-slate-50/80 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-[11px] font-medium focus:outline-none focus:ring-1 focus:ring-blue-500/30 text-slate-800 dark:text-slate-200 min-h-[140px] resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
              <div className="flex items-center justify-between text-[9px] font-bold">
                <span>
                  {notepadSaving ? (
                    <span className="text-amber-500 flex items-center gap-1">
                      <Save className="w-3 h-3 animate-spin" /> Saving…
                    </span>
                  ) : notepadSaved ? (
                    <span className="text-emerald-500 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Auto-saved
                    </span>
                  ) : (
                    <span className="text-slate-400 dark:text-slate-500">Auto-saved</span>
                  )}
                </span>
                <button
                  onClick={handleDownloadNotes}
                  className="flex items-center gap-1 px-2 py-0.5 bg-blue-500/10 hover:bg-blue-500/15 border border-blue-500/15 text-blue-600 dark:text-blue-400 rounded-lg text-[8px] font-bold uppercase transition-all cursor-pointer active:scale-95"
                >
                  <Download className="w-3 h-3" /> Download
                </button>
              </div>

              {/* Generate Cram Strategy */}
              <button
                onClick={handleGenerateCramStrategy}
                className="w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 text-[10px] font-bold transition-all cursor-pointer active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-blue-500" />
                Generate cram strategy
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderExamUtilities = () => {
    return (
      <div className="bg-white/65 dark:bg-slate-900/65 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 rounded-2xl shadow-sm dark:shadow-md dark:shadow-slate-950/20 hover:border-slate-350 dark:hover:border-slate-700/80 transition-all duration-300 overflow-hidden w-full">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200/60 dark:border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/15 to-purple-500/10 border border-violet-500/15 flex items-center justify-center text-violet-600 dark:text-violet-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-tight text-slate-900 dark:text-slate-50">Exam Utilities</h3>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 block mt-0.5">Checklist, revaluation & splits</span>
            </div>
          </div>
        </div>

        <div className="px-5 py-4 space-y-3">
          {/* Sub-tab pills */}
          <div className="flex items-center gap-1 bg-slate-50/50 dark:bg-slate-900/60 p-1 rounded-xl border border-slate-200/40 dark:border-slate-800 w-fit">
            {[
              { id: "checklist", label: "Checklist" },
              { id: "gamble", label: "Revaluation" },
              { id: "splits", label: "Splits" }
            ].map(sub => (
              <button
                key={sub.id}
                onClick={() => setUtilityConsoleTab(sub.id as typeof utilityConsoleTab)}
                className={`px-3 py-1.5 rounded-lg text-[8.5px] font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 ${
                  utilityConsoleTab === sub.id
                    ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-slate-200/40 dark:border-slate-800 shadow-sm"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>

          {/* Checklist */}
          {utilityConsoleTab === "checklist" && (
            <div className="space-y-2 animate-fade-in">
              <span className="text-[9px] font-bold tracking-[0.15em] text-slate-500 dark:text-slate-400 uppercase block pb-1 border-b border-slate-200/40 dark:border-white/[0.04]">Exam Hall Compliance</span>
              <div className="grid grid-cols-1 gap-1.5 pt-1">
                {mtHallChecklist.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-slate-800/60 transition-all"
                  >
                    <input
                      type="checkbox"
                      defaultChecked
                      className="accent-violet-500 h-3.5 w-3.5 rounded cursor-pointer"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Revaluation Gamble */}
          {utilityConsoleTab === "gamble" && (
            <div className="space-y-3 animate-fade-in text-[10px]">
              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1">
                  <label className="text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block">Grade</label>
                  <select
                    value={mtRevalGrade}
                    onChange={(e) => setMtRevalGrade(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1.5 text-[9px] font-bold text-slate-900 dark:text-white cursor-pointer"
                  >
                    <option value="F">F</option>
                    <option value="D">D</option>
                    <option value="C">C</option>
                    <option value="B">B</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block">CIE (/50)</label>
                  <input
                    type="number"
                    min="0" max="50"
                    value={mtRevalCie}
                    onChange={(e) => setMtRevalCie(Math.min(50, Math.max(0, Number(e.target.value))))}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1 text-center font-bold text-xs text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block">Confidence</label>
                  <select
                    value={mtRevalExpected}
                    onChange={(e) => setMtRevalExpected(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-2 py-1.5 text-[9px] font-bold text-slate-900 dark:text-white cursor-pointer"
                  >
                    <option value="Excellent">High</option>
                    <option value="Moderate">Medium</option>
                    <option value="Poor">Low</option>
                  </select>
                </div>
              </div>

              {(() => {
                const CIE = mtRevalCie;
                let gambleStatus = "Low Probability";
                let gambleTheme = "bg-rose-500/5 text-rose-500 border-rose-500/20";
                let details = "Revaluation fee (₹600) is unlikely to yield results based on your low internal score.";

                if (mtRevalGrade === "F") {
                  if (CIE >= 22 && mtRevalExpected === "Excellent") {
                    gambleStatus = "High Chance";
                    gambleTheme = "bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
                    details = "High internal score + positive exam sentiment = strong revaluation success rate.";
                  } else if (CIE >= 18 && mtRevalExpected === "Excellent") {
                    gambleStatus = "Moderate";
                    gambleTheme = "bg-amber-500/5 text-amber-600 dark:text-amber-400 border-amber-500/20";
                    details = "Decent CIE. Worth the gamble if your answers matched the key schema.";
                  }
                } else {
                  if (mtRevalExpected === "Excellent") {
                    gambleStatus = "Moderate";
                    gambleTheme = "bg-amber-500/5 text-amber-600 dark:text-amber-400 border-amber-500/20";
                    details = "Grade improvements are harder to verify. Proceed if your paper was highly structured.";
                  }
                }

                const GambleIcon = gambleStatus === "High Chance" ? Sparkles : gambleStatus === "Moderate" ? HelpCircle : AlertCircle;
                return (
                  <div className={`p-3.5 rounded-xl border text-center ${gambleTheme} flex flex-col items-center justify-center space-y-1`}>
                    <div className="text-[8px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">Risk Assessment</div>
                    <div className="text-sm font-bold py-1 flex items-center gap-1 mt-1">
                      <GambleIcon className="w-4 h-4 shrink-0" />
                      {gambleStatus}
                    </div>
                    <div className="text-[9px] font-medium leading-normal text-slate-600 dark:text-slate-400 mt-1">{details}</div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Project Splits */}
          {utilityConsoleTab === "splits" && (
            <div className="space-y-3 animate-fade-in text-[10px] text-slate-600 dark:text-slate-400">
              <div className="p-3 bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800 rounded-xl space-y-1.5">
                <span className="text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-1">Seminar (max 100)</span>
                <div className="flex justify-between border-b border-slate-200/40 dark:border-white/[0.04] pb-1">
                  <span>Report Quality</span>
                  <span className="font-bold text-slate-900 dark:text-white font-mono">30</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/40 dark:border-white/[0.04] pb-1">
                  <span>Presentation / Slides</span>
                  <span className="font-bold text-slate-900 dark:text-white font-mono">40</span>
                </div>
                <div className="flex justify-between text-blue-600 dark:text-blue-400 font-bold">
                  <span>Viva & Q&A</span>
                  <span className="font-mono">30</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800 rounded-xl space-y-1.5">
                <span className="text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-1">Project (max 100)</span>
                <div className="flex justify-between border-b border-slate-200/40 dark:border-white/[0.04] pb-1">
                  <span>Faculty Guide</span>
                  <span className="font-bold text-slate-900 dark:text-white font-mono">30</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/40 dark:border-white/[0.04] pb-1">
                  <span>Internal Committee</span>
                  <span className="font-bold text-slate-900 dark:text-white font-mono">40</span>
                </div>
                <div className="flex justify-between text-blue-600 dark:text-blue-400 font-bold">
                  <span>Report & Viva ESE</span>
                  <span className="font-mono">30</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // 2. Continuous Internal & ESE Target Planner Renderer (Grade target predictor + pass/fail sandbox combined)
  const renderTargetPlanner = () => {
    const isTrackerEmpty = attendanceSubjects.length === 0;

    // Filter CST CST coded core CS subjects for planner selection
    const dynamicDefaults = subjects;
    const availablePlannerSubjects = isTrackerEmpty
      ? (dynamicDefaults.length > 0
          ? dynamicDefaults.map(s => ({ code: s.code, name: s.name }))
          : [{ code: "PCCST403", name: "Operating Systems" }])
      : attendanceSubjects.map(s => ({ code: s.code, name: s.name }));

    // Target grading thresholds (2024 regulations percentage boundaries)
    const targets = [
      { grade: "O", pct: 90, label: "O Grade (Outstanding)" },
      { grade: "A+", pct: 80, label: "A+ Grade (Excellent)" },
      { grade: "A", pct: 70, label: "A Grade (Very Good)" },
      { grade: "B+", pct: 60, label: "B+ Grade (Good)" },
      { grade: "B", pct: 50, label: "B Grade (Above Average)" },
      { grade: "C", pct: 45, label: "C Grade (Average)" },
      { grade: "P", pct: 40, label: "P Grade (Pass)" }
    ];

    const cieVal = plannerCieScore;

    return (
      <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-950/[0.06] dark:border-white/[0.06] rounded-2xl p-5 shadow-lg space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200/20 dark:border-slate-800/20 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-450">
              <Award className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-slate-50 text-sm leading-none">CIE & ESE Target Planner</h3>
              <span className="text-xs font-medium text-slate-400 block mt-1">Unified target grading & pass/fail sandbox</span>
            </div>
          </div>
          
          <select
            value={plannerActiveSubject.code}
            onChange={(e) => {
              const selected = availablePlannerSubjects.find(s => s.code === e.target.value);
              if (selected) setPlannerActiveSubject(selected);
            }}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-2.5 py-1 text-[10px] font-black cursor-pointer text-slate-850 dark:text-slate-100 focus:outline-none max-w-[150px] sm:max-w-[220px] truncate"
          >
            {availablePlannerSubjects.map(sub => (
              <option key={sub.code} value={sub.code}>{sub.name || sub.code}</option>
            ))}
          </select>
        </div>

        {/* CIE Slider control */}
        <div className="p-3.5 rounded-2xl bg-slate-950/[0.01] dark:bg-white/[0.01] border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-slate-450">Continuous Internal Evaluation (CIE) score</span>
            <span className="text-violet-500 text-sm font-black tabular-nums">{cieVal} / 50</span>
          </div>
          <input
            type="range"
            min="0"
            max="50"
            value={cieVal}
            onChange={(e) => setPlannerCieScore(Number(e.target.value))}
            className="w-full accent-violet-500 cursor-pointer h-1 rounded-lg bg-slate-100 dark:bg-slate-800"
          />
          <div className="flex justify-between text-[8px] font-black text-slate-400 uppercase tracking-wider">
            <span>Minimum to write exam: 0</span>
            <span className="text-violet-500">CIE Average Target: 35+</span>
            <span>Max Score: 50</span>
          </div>
        </div>

        {/* Dynamic target ESE exam grades targets grid */}
        <div className="space-y-2">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Required End Sem Exam (ESE) Grade targets</span>
          
          <div className="grid grid-cols-2 gap-2.5">
            {targets.map((targetItem) => {
              const overallTarget = targetItem.pct;
              
              // Required overall total marks = overallTarget
              // CIE provides cieVal
              // We need ESE score such that: cieVal + (ESE / 2) >= overallTarget
              // (ESE / 2) >= overallTarget - cieVal
              // ESE >= 2 * (overallTarget - cieVal)
              // ESE also has a hard minimum of 40/100 to pass the exam!
              let neededEse = 1.5 * overallTarget - cieVal;
              let impossible = false;
              
              if (neededEse > 100) {
                impossible = true;
              } else {
                neededEse = Math.max(40, Math.ceil(neededEse)); // ESE must be >= 40 to pass exam
              }

              let badgeColor = "bg-slate-100 text-slate-500 dark:bg-slate-800/40 dark:text-slate-400";
              let borderStyle = "border-slate-200 dark:border-slate-800";
              if (!impossible) {
                if (targetItem.grade === "S") { badgeColor = "bg-emerald-500/10 text-emerald-500 border-emerald-500/10"; borderStyle = "hover:border-emerald-400"; }
                else if (targetItem.grade === "A+") { badgeColor = "bg-blue-500/10 text-blue-500 border-blue-500/10"; borderStyle = "hover:border-blue-400"; }
                else if (targetItem.grade === "A") { badgeColor = "bg-indigo-500/10 text-indigo-500 border-indigo-500/10"; borderStyle = "hover:border-indigo-400"; }
                else { badgeColor = "bg-blue-500/10 text-violet-500 border-blue-500/10"; borderStyle = "hover:border-violet-400"; }
              }

              return (
                <div key={targetItem.grade} className={`p-3 rounded-2xl border bg-white dark:bg-slate-900 text-left flex items-center justify-between transition-all sm:${borderStyle}`}>
                  <div className="truncate pr-1.5 font-bold">
                    <span className="text-[8px] font-black text-slate-400 block uppercase tracking-wider">{targetItem.label}</span>
                    <span className="font-black text-xs text-slate-850 dark:text-slate-100 block mt-1">Needed:</span>
                  </div>
                  <div className={`px-2.5 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider text-center shrink-0 border ${badgeColor}`}>
                    {impossible ? "Impossible" : `${Math.ceil(neededEse)} / 100`}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Pass/Fail Sandbox Gauge */}
        <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950/[0.01] dark:bg-white/[0.01] space-y-3">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Pass/Fail Sandbox Visual Gauge</span>
          
          {cieVal < 20 ? (
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center space-y-1.5 animate-pulse">
              <span className="text-xs font-black text-rose-500 uppercase tracking-wider block flex items-center justify-center gap-1">
                <AlertTriangle className="w-4 h-4" /> Ineligible to Pass
              </span>
              <p className="text-[10px] text-rose-600 dark:text-rose-400 leading-normal font-semibold">
                Minimum internal ceiling error: CIE score ({cieVal}/50) is below the 40% eligibility threshold (20/50). You are ineligible to register/write the ESE.
              </p>
            </div>
          ) : (
            <div className="space-y-3.5">
              <div className="flex items-center justify-between text-[10px] font-bold text-slate-600 dark:text-slate-355">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> CIE: {cieVal}/50 (Eligible)</span>
                <span className="font-extrabold text-blue-600 dark:text-blue-400 font-mono">Needed ESE: 40 / 100</span>
              </div>
              
              {/* Horizontal visual gauge bar */}
              <div className="relative h-4 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 overflow-hidden flex shadow-inner">
                {/* Failing range (0 to 39) */}
                <div className="h-full bg-gradient-to-r from-rose-500 to-amber-500" style={{ width: "40%" }} />
                {/* Passing range (40 to 100) */}
                <div className="h-full bg-gradient-to-r from-emerald-450 to-teal-500" style={{ width: "60%" }} />
                
                {/* Dynamic Divider Indicator */}
                <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-md" style={{ left: "40%" }} />
              </div>
              
              <div className="flex justify-between text-[8px] font-black uppercase tracking-wider text-slate-400">
                <span>0 ESE</span>
                <span className="text-rose-500">Fail zone (0-39)</span>
                <span className="text-emerald-500">Pass boundary: 40+</span>
                <span>100 ESE</span>
              </div>
              <p className="text-[9.5px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold italic text-center">
                Aggregate: CIE ({cieVal}) + ESE (40) = {cieVal + 40} / 150 marks (exceeds the 40% aggregate threshold of 60).
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderSgpaGoalEstimator = () => {
    const allocated = allocatedGrades;
    const totalCredits = allocated.reduce((acc, c) => acc + c.credits, 0);
    const totalPoints = allocated.reduce((acc, c) => acc + c.points * c.credits, 0);
    const currentAllocSgpa = totalCredits > 0 ? (totalPoints / totalCredits) : 0;

    return (
      <div className="bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm dark:shadow-md dark:shadow-slate-950/20 hover:border-slate-350 dark:hover:border-slate-700/80 transition-all duration-300 w-full space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-slate-200/60 dark:border-white/[0.06] pb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-tight text-slate-900 dark:text-slate-100">SGPA Target Allocator</h3>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mt-0.5">Determine grade requirements for your GPA goal</span>
          </div>
        </div>

        {/* Target SGPA Slider */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800 space-y-3">
          <div className="flex justify-between items-center text-xs font-bold text-slate-700 dark:text-slate-300">
            <span>Target SGPA Goal</span>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-black tabular-nums">{targetSgpa.toFixed(2)} / 10.00</span>
          </div>
          <input
            type="range"
            min="5.5"
            max="10.0"
            step="0.1"
            value={targetSgpa}
            onChange={(e) => setTargetSgpa(Number(e.target.value))}
            className="w-full accent-blue-500 cursor-pointer h-1 rounded-lg bg-slate-100 dark:bg-slate-800"
          />
          <div className="flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">
            <span>Min (5.5)</span>
            <span className="text-blue-500/80">Estimated SGPA: {currentAllocSgpa.toFixed(2)}</span>
            <span>Max (10.0)</span>
          </div>
        </div>

        {/* Grades allocation list */}
        <div className="space-y-2">
          <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">Grade Allocation Strategy</span>
          {allocated.length === 0 ? (
            <div className="text-[10px] text-slate-400 text-center py-4 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
              Select branch & semester above to load allocation template
            </div>
          ) : (
            <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
              {allocated.map((item, idx) => {
                let badgeColor = "bg-slate-105 text-slate-500 dark:bg-slate-800 dark:text-slate-400 border border-slate-250/20";
                if (item.grade === "S") badgeColor = "bg-emerald-500/10 text-emerald-600 dark:text-emerald-450 border border-emerald-500/15";
                else if (item.grade.startsWith("A")) badgeColor = "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/15";
                else if (item.grade.startsWith("B")) badgeColor = "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/15";
                
                return (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-white/[0.02] flex items-center justify-between text-[11px] hover:border-slate-355 dark:hover:border-slate-800 transition-all duration-200">
                    <div className="truncate pr-2 min-w-0 flex-1">
                      <span className="font-bold text-slate-800 dark:text-slate-200 truncate block text-[11.5px]">{item.name}</span>
                      <span className="text-[9px] text-slate-400 font-mono block mt-0.5">{item.code} • {item.credits} Credits</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-bold text-slate-400">{item.points.toFixed(1)} GP</span>
                      <span className={`px-2 py-0.5 rounded-lg text-[10px] font-black uppercase font-mono tracking-wider ${badgeColor}`}>
                        {item.grade}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Summary note */}
        {allocated.length > 0 && (
          currentAllocSgpa < targetSgpa - 0.05 ? (
            <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/25 text-[10px] font-semibold text-rose-600 dark:text-rose-450 leading-normal text-center">
              <strong>Impossible Target:</strong> SGPA of {targetSgpa.toFixed(2)} is mathematically unreachable with current subject credits (max achievable: {currentAllocSgpa.toFixed(2)}).
            </div>
          ) : (
            <div className="p-3.5 rounded-2xl bg-blue-50/40 dark:bg-blue-500/[0.01] border border-blue-500/10 text-[10px] font-semibold text-slate-500 dark:text-slate-400 leading-normal text-center">
              To achieve a <strong className="text-blue-600 dark:text-blue-400 font-bold">{targetSgpa.toFixed(1)} SGPA</strong>, you need this specific combination of target grades representing <strong className="text-slate-700 dark:text-slate-300 font-bold">{totalCredits} total credits</strong>.
            </div>
          )
        )}
      </div>
    );
  };

  const renderDrawer = (isOpen: boolean, onClose: () => void, title: string, content: React.ReactNode) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={onClose}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 cursor-pointer"
            />
            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 38, stiffness: 380, mass: 0.85 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl p-5 md:p-6 z-50 overflow-y-auto space-y-6 flex flex-col"
            >
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/[0.06] pb-4 shrink-0">
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">{title}</h3>
                <button
                  onClick={onClose}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-650 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto min-h-0 pr-1 scrollbar-thin">
                {content}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div
      className="min-h-screen overflow-x-clip relative flex flex-col font-sans transition-colors duration-500 text-slate-900 dark:text-slate-100 bg-background"
      style={{
        background: mounted && resolvedTheme === "dark"
          ? `radial-gradient(ellipse at 70% 10%, oklch(18% 0.035 250) 0%, oklch(14% 0.015 250) 45%, oklch(12% 0.01 250) 80%)`
          : "radial-gradient(ellipse at 70% 10%, #dbeafe 0%, #eff6ff 35%, #ffffff 70%)"
      }}
    >
      <ToolsSchema />
      <div className="absolute inset-0 z-0 dot-grid opacity-[0.08] pointer-events-none" />
      <div className="absolute inset-0 z-0 noise-overlay opacity-[0.25] pointer-events-none" />
      <div className="absolute top-[-80px] right-[-80px] w-[700px] h-[700px] rounded-full bg-blue-400/20 dark:bg-blue-500/5 blur-[160px] pointer-events-none z-0 bg-orb-1" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-indigo-300/15 dark:bg-indigo-500/5 blur-[140px] pointer-events-none z-0 bg-orb-2 -translate-x-[60px] translate-y-[60px] hidden sm:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-100/40 dark:bg-blue-400/5 blur-[120px] pointer-events-none z-0 bg-orb-3" />

      <Navbar />

      {/* Notification Toast */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            transition={{ type: "spring", damping: 22, stiffness: 280 }}
            className="fixed bottom-6 left-1/2 z-50 px-5 py-3 rounded-2xl bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-slate-50 shadow-2xl backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] text-xs font-bold flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 animate-pulse" />
            {showNotification}
          </motion.div>
        )}
      </AnimatePresence>

      <main 
        id="main-content"
        className="relative flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 pt-20 sm:pt-24 md:pt-28 flex flex-col z-10 space-y-4 sm:space-y-6"
      >
        
        {/* red-glow and blue-glow decoration background spots */}
        <div className="absolute top-10 left-10 w-[240px] h-[240px] rounded-full bg-blue-500/[0.02] blur-[80px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-[240px] h-[240px] rounded-full bg-blue-500/[0.02] blur-[80px] pointer-events-none -z-10" />

        {/* --- PREMIUM COCKPIT TELEMETRY DENSITY HEADER --- */}
        <div className="w-full bg-white/90 dark:bg-slate-950/85 backdrop-blur-3xl border border-slate-200/80 dark:border-white/[0.08] rounded-2xl p-5 sm:p-6 shadow-xl dark:shadow-2xl relative overflow-hidden flex flex-col gap-4">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-blue-500/[0.04] blur-[50px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-5 border-b border-slate-200/60 dark:border-white/[0.06]">
            {/* Logo Badge & Titles */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/15">
                  KTU Tools
                </span>
                <span className="text-xs font-medium text-slate-400 dark:text-slate-500">APJ Abdul Kalam University</span>
              </div>
              <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-slate-50 leading-tight">
                Study Workspace
              </h1>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 max-w-md">
                Track grades, attendance, labs, and exam prep — all in one place.
              </p>
            </div>

            {/* Selector Console */}
            <div className="flex items-center gap-3 bg-slate-50/80 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/60 dark:border-white/[0.04] shrink-0 self-start md:self-auto">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Branch & Semester</span>
                <div className="flex items-center gap-2">
                  <select
                     value={branch}
                     onChange={(e) => handleBranchSemChange(e.target.value, sem)}
                     className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm font-semibold cursor-pointer text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  >
                    <option value="cs">Computer Science</option>
                    <option value="ec">Electronics (ECE)</option>
                    <option value="me">Mechanical</option>
                    <option value="ce">Civil</option>
                    <option value="ee">Electrical (EEE)</option>
                  </select>
                  <select
                    value={sem}
                    onChange={(e) => handleBranchSemChange(branch, Number(e.target.value))}
                    className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm font-semibold cursor-pointer text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  >
                    {Array.from({ length: 8 }, (_, idx) => (
                      <option key={idx} value={idx + 1}>Sem {idx + 1}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Connected Live Telemetry Indicators Row */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {[
              {
                label: "CGPA",
                val: calculateCGPA(),
                badge: "10.0 Scale",
                theme: "text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20"
              },
              {
                label: "Attendance",
                val: `${getAverageAttendance()}%`,
                badge: getAverageAttendance() >= 75 ? "Safe" : "At Risk",
                theme: getAverageAttendance() >= 75
                  ? "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                  : "text-rose-600 dark:text-rose-400 bg-rose-500/10 border border-rose-500/20"
              },
              {
                label: "Labs",
                val: `${getLabsCount()} Active`,
                badge: "Tracked",
                theme: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border border-indigo-500/20"
              },
              {
                label: "SGPA",
                val: calculateSGPA(),
                badge: "Current Sem",
                theme: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20"
              }
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{stat.label}</span>
                <span className="font-black text-slate-900 dark:text-slate-100 font-mono text-lg leading-none tabular-nums">{stat.val}</span>
                <span className={`px-2 py-0.5 rounded-md text-xs font-semibold ${stat.theme}`}>
                  {stat.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- DYNAMIC WORKSPACE SWITCHER NAV BAR --- */}
        <div className="bg-slate-100/80 dark:bg-slate-950/60 p-1.5 rounded-2xl border border-slate-200/50 dark:border-white/[0.04] backdrop-blur-xl flex flex-nowrap items-center gap-1 w-full overflow-x-auto scrollbar-none">
          {[
            { id: "attendance", label: "Attendance", icon: Activity, enabled: siteConfig?.activeTools?.attendance !== false },
            { id: "grades", label: "Grades & GPA", icon: Calculator, enabled: siteConfig?.activeTools?.gpa !== false },
            { id: "graduation", label: "Graduation", icon: GraduationCap, enabled: siteConfig?.activeTools?.runway !== false },
            { id: "exam", label: "Exam Prep", icon: Clock, enabled: siteConfig?.activeTools?.exam !== false },
            { id: "labs", label: "Lab Record", icon: FlaskConical, enabled: siteConfig?.activeTools?.lab !== false },
            { id: "missioncontrol", label: "Mission Control", icon: LayoutDashboard, enabled: true }
          ].filter(tabItem => tabItem.enabled).map((tabItem) => {
            const isActive = activeWorkspaceTab === tabItem.id;
            const Icon = tabItem.icon;
            
            return (
              <button
                key={tabItem.id}
                onClick={() => setActiveWorkspaceTab(tabItem.id as typeof activeWorkspaceTab)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer flex-1 shrink-0 whitespace-nowrap justify-center min-w-max active:scale-[0.97] ${
                  isActive
                    ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-md border border-slate-200/60 dark:border-slate-700"
                    : "bg-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-white/[0.03]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "" : "opacity-70"}`} />
                <span>{tabItem.label}</span>
              </button>
            );
          })}
        </div>

        {/* --- UNIFIED WORKSPACE ACTIVE COMPONENT CONTAINER --- */}
        <div className="w-full transition-all duration-300">
          
          {/* TAB 1: ATTENDANCE & CIE RUNWAY */}
          {activeWorkspaceTab === "attendance" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                {renderAttendanceRunway()}
              </div>
              <div className="lg:col-span-5 space-y-4 sm:space-y-6">
                {renderCieAggregatorPanel()}
              </div>
            </div>
          )}

          {/* TAB 2: GRADES & ESE TARGET PLANNER */}
          {activeWorkspaceTab === "grades" && (
            <div className="w-full bg-white/65 dark:bg-slate-900/65 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm dark:shadow-md dark:shadow-slate-950/20 hover:border-slate-350 dark:hover:border-slate-700/80 transition-all duration-300 relative overflow-hidden space-y-5">
              <div className="absolute top-0 right-0 w-[240px] h-[240px] rounded-full bg-blue-500/[0.03] blur-[60px] pointer-events-none -z-10" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/60 dark:border-white/[0.06] pb-5 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base leading-none">GPA & CGPA Calculator</h3>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mt-1.5">{branch.toUpperCase()} S{sem} grading sheet & custom sandboxes</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    onClick={() => setIsCiePlannerOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 shadow-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-blue-500" /> Plan CIE & ESE
                  </button>
                  <button
                    onClick={() => setIsSgpaAllocatorOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 shadow-sm"
                  >
                    <Calculator className="w-3.5 h-3.5 text-amber-500" /> SGPA Allocator
                  </button>
                </div>
              </div>

              {/* Core GPA Component */}
              <GpaCalculator />

              {/* Inline Converter Bar */}
              <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-200/60 dark:border-white/[0.06] text-xs font-medium text-slate-500 dark:text-slate-400">
                <span>SGPA / CGPA Converter:</span>
                <input
                  type="number"
                  min="0"
                  max="10"
                  step="0.01"
                  placeholder="8.50"
                  value={converterGpa}
                  onChange={(e) => handleGpaConvert(e.target.value)}
                  className="w-16 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 text-center font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500/20"
                />
                <span>Score ⇌</span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  placeholder="80.0"
                  value={converterPercentage}
                  onChange={(e) => handlePercentageConvert(e.target.value)}
                  className="w-16 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 text-center font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500/20"
                />
                <span>Percentage (%)</span>
              </div>
            </div>
          )}

          {/* TAB 3: GRADUATION RUNWAY & MILESTONE TRACKER */}
          {activeWorkspaceTab === "graduation" && (
            <div>
              {renderGraduationAuditors()}
            </div>
          )}


          {/* TAB 5: LAB RECORD TRACKER */}
          {activeWorkspaceTab === "labs" && (
            <LabRecordTracker
              branch={branch}
              sem={sem}
              triggerNotification={triggerNotification}
            />
          )}

          {/* TAB 4: 11TH-HOUR EXAM COMMAND PANEL */}
          {activeWorkspaceTab === "exam" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
              <div className="lg:col-span-8">
                {renderStudyHub()}
              </div>
              <div className="lg:col-span-4">
                {renderExamUtilities()}
              </div>
            </div>
          )}

          {/* TAB 5: MISSION CONTROL */}
          {activeWorkspaceTab === "missioncontrol" && (
            <MissionControlDashboard
              branch={branch}
              sem={String(sem)}
              gpa={calculateCGPA()}
            />
          )}

        </div>

        {/* Advice Info bottom bar */}
        <div className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200/60 dark:border-white/[0.06] bg-slate-50/80 dark:bg-slate-900/40 text-xs font-medium text-slate-500 dark:text-slate-400 leading-normal text-center justify-center shadow-sm">
          <ShieldCheck className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
          <span>All data is saved locally in your browser. GPA, attendance, and lab progress update in real-time as you make changes.</span>
        </div>

      </main>

      {renderDrawer(isCiePlannerOpen, () => setIsCiePlannerOpen(false), "CIE Target Planner", renderTargetPlanner())}
      {renderDrawer(isSgpaAllocatorOpen, () => setIsSgpaAllocatorOpen(false), "SGPA Goal Estimator", renderSgpaGoalEstimator())}
    </div>
  );
}

