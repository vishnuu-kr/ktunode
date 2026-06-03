"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import GpaCalculator from "@/components/GpaCalculator";
import { useTheme } from "next-themes";
import { mockSubjects, Subject } from "@/lib/mockData";
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
  Pause
} from "lucide-react";

// Grade mappings to points
const GRADE_POINTS: Record<string, number> = {
  "S": 10,
  "A+": 9,
  "A": 8.5,
  "B+": 8,
  "B": 7.5,
  "C+": 7,
  "C": 6.5,
  "D": 6,
  "P": 5.5,
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
  cancelled?: number;
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

const generateFlashcardsForSubject = (subjectCode: string, subjectName: string) => {
  const matchingSubject = mockSubjects.find(s => s.code === subjectCode);
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
  
  if (studentType === "lateral") {
    groupCaps = 30;
    groupMins = 30;
    totalRequired = 90;
  } else if (studentType === "pwd") {
    groupCaps = 20;
    groupMins = 20;
    totalRequired = 60;
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

    if (details.type === "level" || details.type === "fixed") {
      // Only highest level or one-time counts
      const maxPts = Math.max(...claims.map(c => c.points));
      codePoints[code] = Math.min(details.maxPoints, maxPts);
    } else {
      // Accumulative count/input up to the individual activity's maxPoints cap
      const sumPts = claims.reduce((acc, c) => acc + c.points, 0);
      codePoints[code] = Math.min(details.maxPoints, sumPts);
    }
  });

  // 2. Apply override rules (Winner overrides participation, highest counts across sports/arts/tech)
  
  // Group I: Sports, Arts & Cultural Events -> Max of (1.1, 1.2, 1.3), capped at 40
  const sportsArtsMax = Math.max(
    codePoints["1.1"] || 0,
    codePoints["1.2"] || 0,
    codePoints["1.3"] || 0
  );
  if (sportsArtsMax > 0) {
    codePoints["sports_arts"] = Math.min(40, sportsArtsMax);
    delete codePoints["1.1"];
    delete codePoints["1.2"];
    delete codePoints["1.3"];
  }

  // Group II: Tech-Fest -> Max of (2.1, 2.2), capped at 40
  const techFestMax = Math.max(
    codePoints["2.1"] || 0,
    codePoints["2.2"] || 0
  );
  if (techFestMax > 0) {
    codePoints["tech_fest"] = Math.min(40, techFestMax);
    delete codePoints["2.1"];
    delete codePoints["2.2"];
  }

  // Group II: Professional Society Events -> Max of (2.3, 2.4), capped at 35
  const profSocietyMax = Math.max(
    codePoints["2.3"] || 0,
    codePoints["2.4"] || 0
  );
  if (profSocietyMax > 0) {
    codePoints["prof_society"] = Math.min(35, profSocietyMax);
    delete codePoints["2.3"];
    delete codePoints["2.4"];
  }

  // Group II: Paper Presentations -> Max of (2.7, 2.8, 2.9), capped at 40
  const paperPresentationMax = Math.max(
    codePoints["2.7"] || 0,
    codePoints["2.8"] || 0,
    codePoints["2.9"] || 0
  );
  if (paperPresentationMax > 0) {
    codePoints["paper_presentation"] = Math.min(40, paperPresentationMax);
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
    iconColor: "text-violet-600 dark:text-violet-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/15"
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
    id: "honours",
    title: "Honours & Minor Check",
    kidDescription: "Verify if you can get special Honours or Minor degrees based on your grades and backlogs.",
    category: "progression",
    icon: GraduationCap,
    color: "from-fuchsia-500 to-pink-600 dark:from-fuchsia-600/20 dark:to-pink-600/20",
    iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
    bgColor: "bg-fuchsia-500/10",
    borderColor: "border-fuchsia-500/15"
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

export default function ToolsPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [branch, setBranch] = useState("cs");
  const [sem, setSem] = useState<number>(4);
  const [showNotification, setShowNotification] = useState<string | null>(null);

  // Active Category filter state for mobile view
  const [activeCategory, setActiveCategory] = useState<"all" | "grades" | "attendance" | "progression" | "reference">("all");

  // Active focused tool ID
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [activeConsoleSubTab, setActiveConsoleSubTab] = useState<string>("gpa");

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

  // Labs tracker state
  const [labCourses, setLabCourses] = useState<LabCourse[]>([]);
  const [activeLabTab, setActiveLabTab] = useState<string>("");

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

  // Honours & Minor Tracker states
  const [honoursBacklogs, setHonoursBacklogs] = useState(false);
  const [minorBacklogs, setMinorBacklogs] = useState(0);

  // Year-Back progression checks state
  const [progressionTarget, setProgressionTarget] = useState<"s5" | "s7">("s5");
  const [progressionCredits, setProgressionCredits] = useState({
    s1: 22,
    s2: 22,
    s3: 22,
    s4: 22
  });

  // SGPA to Percentage Converter state
  const [converterGpa, setConverterGpa] = useState("8.50");
  const [converterPercentage, setConverterPercentage] = useState("80.0");

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
  const [studyConsoleTab, setStudyConsoleTab] = useState<"pomodoro" | "flashcards" | "spaced" | "notepad" | "checklist" | "gamble" | "splits">("pomodoro");

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
  const [mtAggSeries1, setMtAggSeries1] = useState(38);
  const [mtAggSeries2, setMtAggSeries2] = useState(35);
  const [mtAggAssg, setMtAggAssg] = useState(8);
  const [mtAggAtt, setMtAggAtt] = useState(4);
  // Tool 4: Series 2 Damage Control
  const [mtDmgSeries1, setMtDmgSeries1] = useState(25);
  const [mtDmgTarget, setMtDmgTarget] = useState(35);
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
    "Admit Card (Hall Ticket) 📄",
    "University Approved Calculator (e.g. FX-991ES Plus) 🧮",
    "College ID Card 🪪",
    "Blue/Black Ballpoint Pens 🖋️",
    "Pencil & Ruler 📐",
    "Water Bottle 💧"
  ]);
  // Tool 22: Reval Gamble
  const [mtRevalGrade, setMtRevalGrade] = useState("C");
  const [mtRevalCie, setMtRevalCie] = useState(28);
  const [mtRevalExpected, setMtRevalExpected] = useState("Excellent");
  // Tool 23: Syllabus Milestone Tracker
  const [mtMilestones, setMtMilestones] = useState<Record<string, boolean[]>>({
    "PCCST403": [true, true, false, false, false],
    "CST204": [true, true, true, false, false],
    "CST206": [true, false, false, false, false]
  });
  // Tool 24: Countdown Dashboard Target
  const [mtCountdownTarget, setMtCountdownTarget] = useState("2026-07-15");

  // Redesign Master Navigation Workspace Tab State
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<"attendance" | "grades" | "graduation" | "exam">("attendance");


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
        triggerNotification(`Study Session Alert: ${nextMode === "focus" ? "Back to focus! 🚀" : "Time for a break! ☕"}`);
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
        const cards = generateFlashcardsForSubject(plannerActiveSubject.code, plannerActiveSubject.name);
        setFlashcardsList(cards);
        setActiveCardIndex(0);
        setIsCardFlipped(false);
        setFlashcardScores({ known: 0, total: cards.length });
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [plannerActiveSubject]);

  const getSpacedRepetitionTopics = () => {
    if (!plannerActiveSubject) return [];
    const matchingSubject = mockSubjects.find(s => s.code === plannerActiveSubject.code);
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

    // 1. SGPA Loading
    const savedSgpa = localStorage.getItem(`ktunode_tools_sgpa_${scopeKey}`);
    if (savedSgpa) {
      try { setSgpacourses(JSON.parse(savedSgpa)); } catch {}
    } else {
      const initial = defaultSubjects.map(s => ({
        id: s.id,
        name: s.name,
        code: s.code,
        credits: s.name.toLowerCase().includes("lab") ? 1 : 4,
        grade: "S"
      }));
      setSgpacourses(initial);
      localStorage.setItem(`ktunode_tools_sgpa_${scopeKey}`, JSON.stringify(initial));
    }

    // 2. Attendance Loading
    const savedAttendance = localStorage.getItem(`ktunode_tools_attendance_${scopeKey}`);
    if (savedAttendance) {
      try { setAttendanceSubjects(JSON.parse(savedAttendance)); } catch {}
    } else {
      const initialAttendance = defaultSubjects.map(s => ({
        id: s.id,
        code: s.code,
        name: s.name,
        attended: 30,
        total: 35
      }));
      setAttendanceSubjects(initialAttendance);
      localStorage.setItem(`ktunode_tools_attendance_${scopeKey}`, JSON.stringify(initialAttendance));
    }

    // 3. Labs Loading
    const savedLabs = localStorage.getItem(`ktunode_tools_labs_${scopeKey}`);
    if (savedLabs) {
      try {
        const parsed = JSON.parse(savedLabs);
        setLabCourses(parsed);
        if (parsed.length > 0) setActiveLabTab(parsed[0].id);
      } catch {}
    } else {
      const initialLabs = getDefaultLabsForSession(currentBranch, currentSem);
      setLabCourses(initialLabs);
      if (initialLabs.length > 0) setActiveLabTab(initialLabs[0].id);
      localStorage.setItem(`ktunode_tools_labs_${scopeKey}`, JSON.stringify(initialLabs));
    }

    // 4. Initial default subjects for Planner and Grade Predictor
    if (defaultSubjects.length > 0) {
      setPredictorSubject({ name: defaultSubjects[0].name, code: defaultSubjects[0].code });
      setSandboxSubject({ name: defaultSubjects[0].name, code: defaultSubjects[0].code });
    } else {
      setPredictorSubject(null);
      setSandboxSubject(null);
    }
  }

  // Mount logic: Load settings & global presets
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      
      const savedBranch = localStorage.getItem("ktunode_branch") || "cs";
      const savedSem = Number(localStorage.getItem("ktunode_semester")) || 4;
      setBranch(savedBranch);
      setSem(savedSem);

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
        if (savedActivities) setSelectedActivities(JSON.parse(savedActivities));
      } catch {}

      // Load Honours / Minor Tracker inputs
      setHonoursBacklogs(localStorage.getItem("ktunode_tools_honours_backlogs") === "true");
      setMinorBacklogs(Number(localStorage.getItem("ktunode_tools_minor_backlogs")) || 0);

      // Load Year-Back Credits inputs
      try {
        const savedCredits = localStorage.getItem("ktunode_tools_progression_credits");
        if (savedCredits) setProgressionCredits(JSON.parse(savedCredits));
      } catch {}

      // Load CGPA semesters (Degree-wide - Global)
      const savedCgpa = localStorage.getItem("ktunode_tools_cgpa");
      if (savedCgpa) {
        try { setCgpaSemesters(JSON.parse(savedCgpa)); } catch {}
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

    // Scoped loader triggers
    loadSemesterData(newBranch, newSem);

    // Sync degree-wide semesters toggles
    const newCgpa = Array.from({ length: 8 }, (_, i) => ({
      semester: i + 1,
      sgpa: newSem > i + 1 ? 8.0 : 0.0,
      credits: 22,
      active: newSem > i + 1
    }));
    setCgpaSemesters(newCgpa);
    localStorage.setItem("ktunode_tools_cgpa", JSON.stringify(newCgpa));

    triggerNotification(`Switched to ${newBranch.toUpperCase()} Sem ${newSem}. Scoped data loaded!`);
  };

  // Study Notepad saving
  const handleNotepadSave = (text: string) => {
    setNotepadText(text);
    localStorage.setItem("ktunode_tools_notepad", text);
    setNotepadSaved(true);
    setTimeout(() => setNotepadSaved(false), 1500);
  };

  // SGPA/CGPA calculations
  const calculateSGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    sgpaCourses.forEach(c => {
      const pts = GRADE_POINTS[c.grade] ?? 0;
      totalCredits += c.credits;
      totalPoints += pts * c.credits;
    });
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    cgpaSemesters.forEach(s => {
      if (s.active && s.sgpa > 0) {
        totalCredits += s.credits;
        totalPoints += s.sgpa * s.credits;
      }
    });
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

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
      grade: "S"
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
      grade: "S"
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

  const handleAttendanceChange = (id: string, type: "attended" | "total" | "cancelled", delta: number) => {
    const updated = attendanceSubjects.map(s => {
      if (s.id === id) {
        let newAttended = s.attended;
        let newTotal = s.total;
        let newCancelled = s.cancelled || 0;

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
        } else if (type === "cancelled") {
          newCancelled = Math.max(0, newCancelled + delta);
          if (delta > 0) {
            // Decrement total conducted classes
            newTotal = Math.max(0, s.total - 1);
            if (newAttended > newTotal) {
              newAttended = newTotal;
            }
          } else if (delta < 0) {
            // Revert conducted classes (increment total classes)
            newTotal = s.total + 1;
          }
        }
        return { ...s, attended: newAttended, total: newTotal, cancelled: newCancelled };
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

  // Lab progress summaries
  const getLabProgressSummary = (labId: string) => {
    const lab = labCourses.find(l => l.id === labId);
    if (!lab) return "0/0";
    const signedCount = lab.exercises.filter(ex => ex.signed).length;
    return `${signedCount}/${lab.exercises.length} Signed`;
  };

  const handleLabToggle = (labId: string, exId: string, field: "logic" | "record" | "viva" | "signed") => {
    const updated = labCourses.map(lab => {
      if (lab.id === labId) {
        const updatedEx = lab.exercises.map(ex => {
          if (ex.id === exId) {
            return { ...ex, [field]: !ex[field] };
          }
          return ex;
        });
        return { ...lab, exercises: updatedEx };
      }
      return lab;
    });
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
    setLabCourses(updated);
    localStorage.setItem(`ktunode_tools_labs_${branch}_${sem}`, JSON.stringify(updated));
    triggerNotification("New exercise added to record!");
  };

  const removeLabExercise = (labId: string, exId: string) => {
    const updated = labCourses.map(lab => {
      if (lab.id === labId) {
        return {
          ...lab,
          exercises: lab.exercises.filter(ex => ex.id !== exId)
        };
      }
      return lab;
    });
    setLabCourses(updated);
    localStorage.setItem(`ktunode_tools_labs_${branch}_${sem}`, JSON.stringify(updated));
    triggerNotification("Exercise removed.");
  };

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
    const updated = selectedActivities.filter(a => a.id !== id);
    setSelectedActivities(updated);
    localStorage.setItem("ktunode_tools_activities", JSON.stringify(updated));
    triggerNotification("Activity removed.");
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
    if (isQualified) return { label: "Qualified ✅", barClass: "bg-gradient-to-r from-emerald-500 to-teal-500", textClass: "text-emerald-500" };
    if (points >= req * 0.75) return { label: "Total met (Check groups)", barClass: "bg-gradient-to-r from-amber-500 to-orange-500", textClass: "text-amber-500" };
    if (points >= req * 0.5) return { label: "Intermediate Progress", barClass: "bg-gradient-to-r from-indigo-500 to-violet-500", textClass: "text-indigo-500" };
    return { label: "Beginning Stage", barClass: "bg-gradient-to-r from-blue-500 to-sky-500", textClass: "text-blue-500" };
  };

  const tallyMeta = getActivityTallyTheme(totalActivityPoints, calculatedPoints.isQualified);

  // Pass/Fail Sandbox calculations
  // Pass/Fail Sandbox calculations
  const calculatePassFailSandbox = () => {
    const cie = parseFloat(sandboxCie) || 0;
    const clampedCie = Math.min(40, Math.max(0, cie));
    const requiredEse = Math.max(24, 50 - clampedCie);
    const impossible = requiredEse > 60;

    return {
      cie: clampedCie,
      neededEse: impossible ? 0 : requiredEse,
      percentage: impossible ? 0 : Math.round((requiredEse / 60) * 100),
      impossible,
      borderline: clampedCie < 15,
      perfectSafe: clampedCie >= 26
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
      needed: Math.max(40, Math.ceil(needed)), 
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
        const totalSemDays = 90 - (sub.cancelled || 0);
        const target = 75;
        const totalNeededClasses = Math.ceil(totalSemDays * (target / 100));
        const remainingClasses = Math.max(0, totalSemDays - sub.total);
        const classesNeededToAttend = Math.max(0, totalNeededClasses - sub.attended);
        const canMiss = Math.max(0, remainingClasses - classesNeededToAttend);
        const impossible = classesNeededToAttend > remainingClasses;

        if (impossible) {
          message += `- ${sub.code}: ${pct}% (Danger of detention! 🚨)\n`;
        } else {
          message += `- ${sub.code}: ${pct}% (Safe to miss ${canMiss} more classes)\n`;
        }
      });
      message += "\nTrack your attendance runway on KTU Node!";
      navigator.clipboard.writeText(message);
      triggerNotification("Attendance runway copied to clipboard! 📋");
    };

    return (
      <div className="bg-zinc-900/[0.35] backdrop-blur-md border border-white/[0.06] rounded-2xl p-5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] space-y-4">
        {/* Card Header with Live free marks badge */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-400">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm leading-none">Attendance Log</h3>
              <span className="text-[9px] font-bold text-zinc-500 block mt-1">S{sem} Active Attendance Runway</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShareRunway}
              className="px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[8px] font-bold uppercase tracking-wider hover:bg-violet-500/20 transition-all cursor-pointer active:scale-95"
            >
              Share Runway 📋
            </button>
            <div className="text-right">
              <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest block leading-none">Reward</span>
              <span className={`text-xs font-black ${freeMarksColor} block mt-1 font-mono`}>{freeMarksLabel.split(" ")[0]}</span>
            </div>
          </div>
        </div>

        {/* Subjects list rows */}
        <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1 scrollbar-thin">
          {isTrackerEmpty ? (
            <div className="flex flex-col items-center justify-center py-8 px-4 border-2 border-dashed border-zinc-800 rounded-2xl bg-zinc-950/20">
              <ListTodo className="w-8 h-8 text-zinc-600 mb-2.5" />
              <span className="text-[10px] font-bold text-zinc-550 uppercase tracking-widest mb-1">No Subjects Tracked</span>
              <span className="text-[9px] font-semibold text-zinc-500 mb-3 text-center">Import your semester grid to start logging attendance data.</span>
              <button
                onClick={() => loadSemesterData(branch, sem)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[9px] font-bold uppercase tracking-wider hover:bg-violet-500/20 transition-all cursor-pointer active:scale-95"
              >
                <Plus className="w-3.5 h-3.5" /> Import {branch.toUpperCase()} Semester {sem} Core Grid
              </button>
            </div>
          ) : (
            attendanceSubjects.map((sub) => {
              const pct = sub.total > 0 ? Math.round((sub.attended / sub.total) * 100) : 0;
              
              // Safe cuts runway calculation
              const totalSemDays = 90 - (sub.cancelled || 0);
              const target = 75; // KTU minimum requirement
              const totalNeededClasses = Math.ceil(totalSemDays * (target / 100));
              const remainingClasses = Math.max(0, totalSemDays - sub.total);
              const classesNeededToAttend = Math.max(0, totalNeededClasses - sub.attended);
              const canMiss = Math.max(0, remainingClasses - classesNeededToAttend);
              const impossible = classesNeededToAttend > remainingClasses;

              let color = "text-emerald-450";
              let progressBg = "bg-emerald-500";
              if (pct < 75) { color = "text-rose-455"; progressBg = "bg-rose-500"; }
              else if (pct < 85) { color = "text-blue-450"; progressBg = "bg-blue-500"; }

              return (
                <div key={sub.id} className="p-3.5 rounded-2xl bg-zinc-950/40 border border-white/[0.04] space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <div className="truncate pr-2">
                      <span className="font-bold text-[10px] block text-white truncate leading-none font-mono">{sub.code}</span>
                      <span className="text-[9px] font-semibold text-zinc-500 block truncate mt-1">{sub.name}</span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className={`font-bold text-[10px] block ${color} font-mono`}>{pct}%</span>
                      {impossible ? (
                        <span className="text-[8px] font-bold text-rose-455 uppercase tracking-wider block mt-0.5 animate-pulse">Danger 🚨</span>
                      ) : (
                        <span className="text-[8px] font-semibold text-zinc-500 block mt-0.5">Miss max: <strong className="text-emerald-450 font-mono">{canMiss}</strong></span>
                      )}
                    </div>
                  </div>

                  {/* Cancelled class notification banner */}
                  {(sub.cancelled || 0) > 0 && (
                    <div className="px-2.5 py-1 rounded-xl bg-blue-500/5 text-[8.5px] font-bold text-blue-400 border border-blue-500/10 flex items-center gap-1.5 animate-pulse">
                      <span>🎉 Cancelled: {sub.cancelled} classes (Woohoo! Free time! 🎮)</span>
                    </div>
                  )}

                  {/* Attendance Controls & ProgressBar */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between text-[9px] font-bold text-zinc-500 mb-1 font-mono">
                        <span>Attended: {sub.attended}</span>
                        <span>Total: {sub.total}</span>
                      </div>
                      <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <div className={`h-full ${progressBg} transition-all duration-300`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="flex flex-col items-center">
                        <span className="text-[7px] font-bold text-zinc-500 uppercase tracking-widest leading-none mb-1">Present</span>
                        <div className="flex gap-1">
                          <button
                            onClick={() => handleAttendanceChange(sub.id, "attended", 1)}
                            className="w-5 h-5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-[10px] font-bold text-emerald-450 transition-all cursor-pointer flex items-center justify-center border border-emerald-500/10"
                          >
                            +
                          </button>
                          <button
                            onClick={() => handleAttendanceChange(sub.id, "attended", -1)}
                            className="w-5 h-5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-[10px] font-bold text-emerald-450 transition-all cursor-pointer flex items-center justify-center border border-emerald-500/10"
                          >
                            -
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <span className="text-[7px] font-bold text-zinc-500 uppercase tracking-widest leading-none mb-1">Absent</span>
                        <div className="flex gap-1">
                          <button
                            onClick={() => handleAttendanceChange(sub.id, "total", 1)}
                            className="w-5 h-5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-[10px] font-bold text-rose-455 transition-all cursor-pointer flex items-center justify-center border border-rose-500/10"
                          >
                            +
                          </button>
                          <button
                            onClick={() => handleAttendanceChange(sub.id, "total", -1)}
                            className="w-5 h-5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-[10px] font-bold text-rose-455 transition-all cursor-pointer flex items-center justify-center border border-rose-500/10"
                          >
                            -
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <span className="text-[7px] font-bold text-zinc-500 uppercase tracking-widest leading-none mb-1">Cancel</span>
                        <div className="flex gap-1">
                          <button
                            onClick={() => handleAttendanceChange(sub.id, "cancelled", 1)}
                            className="w-5 h-5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-[10px] font-bold text-blue-450 transition-all cursor-pointer flex items-center justify-center border border-blue-500/10"
                            title="Log class as cancelled (does not count towards total)"
                          >
                            +
                          </button>
                          <button
                            onClick={() => handleAttendanceChange(sub.id, "cancelled", -1)}
                            className="w-5 h-5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-[10px] font-bold text-blue-450 transition-all cursor-pointer flex items-center justify-center border border-blue-500/10"
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  };

  // Helper renderers for Super-Tools consolidation
  const renderCieAggregatorPanel = () => {
    const totalCie = Math.min(50, ((mtAggSeries1 + mtAggSeries2) / 2 * 0.7) + mtAggAssg + mtAggAtt);
    const neededSeries2 = ((mtDmgTarget - (mtAggAssg + mtAggAtt)) / 0.7) * 2 - mtAggSeries1;
    const impossible = neededSeries2 > 50;
    const safe = neededSeries2 <= 0;

    return (
      <div className="bg-zinc-900/[0.35] backdrop-blur-md border border-white/[0.06] rounded-2xl p-5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] space-y-4">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/15 flex items-center justify-center text-violet-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm leading-none">CIE & Damage Control</h3>
              <span className="text-[9px] font-bold text-zinc-500 block mt-1">Calculate CIE internals and Series 2 targets</span>
            </div>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold tracking-widest text-zinc-550 uppercase block">Series 1 (max 50)</label>
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
              className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2.5 py-1.5 font-mono text-center font-bold text-sm text-white focus:outline-none focus:ring-1 focus:ring-violet-500/20"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold tracking-widest text-zinc-550 uppercase block">Series 2 (max 50)</label>
            <input
              type="number"
              min="0"
              max="50"
              value={mtAggSeries2}
              onChange={(e) => setMtAggSeries2(Math.min(50, Math.max(0, Number(e.target.value))))}
              className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2.5 py-1.5 font-mono text-center font-bold text-sm text-white focus:outline-none focus:ring-1 focus:ring-violet-500/20"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold tracking-widest text-zinc-550 uppercase block">Assignments (max 10)</label>
            <input
              type="number"
              min="0"
              max="10"
              value={mtAggAssg}
              onChange={(e) => {
                const v = Math.min(10, Math.max(0, Number(e.target.value)));
                setMtAggAssg(v);
              }}
              className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2.5 py-1.5 font-mono text-center font-bold text-sm text-white focus:outline-none focus:ring-1 focus:ring-violet-500/20"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold tracking-widest text-zinc-550 uppercase block">Attendance Marks (0-5)</label>
            <input
              type="number"
              min="0"
              max="5"
              value={mtAggAtt}
              onChange={(e) => {
                const v = Math.min(5, Math.max(0, Number(e.target.value)));
                setMtAggAtt(v);
              }}
              className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2.5 py-1.5 font-mono text-center font-bold text-sm text-white focus:outline-none focus:ring-1 focus:ring-violet-500/20"
            />
          </div>
        </div>

        {/* Aggregated CIE display */}
        <div className="p-4 rounded-xl border border-white/[0.06] bg-zinc-950/40 text-center space-y-1">
          <div className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Aggregated CIE Score</div>
          <div className="text-4xl font-light tracking-tight text-white font-mono">{totalCie.toFixed(1)} <span className="text-xs text-zinc-550">/ 50</span></div>
          <div className="text-[9px] font-semibold text-zinc-400 mt-1">
            Formula: ((Series 1 + Series 2) / 2 × 0.7) + Assignments + Attendance
          </div>
        </div>

        {/* Series 2 Damage Control Target */}
        <div className="pt-2 border-t border-white/[0.06] space-y-3">
          <div className="flex justify-between items-center text-xs font-bold text-zinc-350">
            <span>Target CIE Score (out of 50)</span>
            <span className="text-violet-400 font-bold font-mono">{mtDmgTarget} / 50</span>
          </div>
          <input
            type="range"
            min="20"
            max="50"
            value={mtDmgTarget}
            onChange={(e) => setMtDmgTarget(Number(e.target.value))}
            className="w-full accent-violet-500 cursor-pointer h-1 rounded-lg bg-zinc-800"
          />

          {(() => {
            let desc = "";
            let color = "text-violet-400 bg-violet-500/10 border-violet-500/20";
            if (impossible) {
              desc = `Required Series 2 score is ${neededSeries2.toFixed(1)}, which is impossible (max 50). Try lowering target CIE.`;
              color = "text-rose-455 bg-rose-500/10 border-rose-500/20";
            } else if (safe) {
              desc = `You are fully on track! You need 0 marks in Series 2 to clear your target CIE.`;
              color = "text-emerald-450 bg-emerald-500/10 border-emerald-500/20";
            } else {
              desc = `You need a score of at least ${neededSeries2.toFixed(1)} / 50 in Series 2 to secure your target CIE of ${mtDmgTarget}.`;
            }

            return (
              <div className={`p-3 rounded-xl border text-[10px] leading-relaxed text-center ${color}`}>
                <span className="font-bold uppercase tracking-wider block mb-1">
                  {impossible ? "Out of Reach 🚩" : safe ? "Target Secured ✅" : "Damage Control Action Required ⚠️"}
                </span>
                {desc}
              </div>
            );
          })()}
        </div>
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
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Credit Auditor Card */}
        <div className="bg-zinc-900/[0.35] backdrop-blur-md border border-white/[0.06] rounded-2xl p-5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] space-y-4">
          <div className="flex items-center gap-2.5 border-b border-white/[0.06] pb-3">
            <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/15 flex items-center justify-center text-violet-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm leading-none">Credit Year-Back Auditor</h3>
              <span className="text-[9px] font-bold text-zinc-500 block mt-1">Check KTU promotion credit requirements</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex gap-2">
              <button
                onClick={() => setProgressionTarget("s5")}
                className={`flex-1 py-1.5 rounded-lg border text-[9px] font-bold uppercase transition-all cursor-pointer ${
                  progressionTarget === "s5"
                    ? "bg-violet-500/20 text-violet-400 border-violet-500/20"
                    : "bg-[#121215] text-zinc-500 border-white/[0.02] hover:bg-white/[0.02]"
                }`}
              >
                S5 Lock Check (Need 26)
              </button>
              <button
                onClick={() => setProgressionTarget("s7")}
                className={`flex-1 py-1.5 rounded-lg border text-[9px] font-bold uppercase transition-all cursor-pointer ${
                  progressionTarget === "s7"
                    ? "bg-violet-500/20 text-violet-450 border-violet-500/20"
                    : "bg-[#121215] text-zinc-500 border-white/[0.02] hover:bg-white/[0.02]"
                }`}
              >
                S7 Lock Check (Need 52)
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest block">S1 Credits</label>
                <input
                  type="number"
                  min="0"
                  max="22"
                  value={s1}
                  onChange={(e) => handleProgressionCreditChange("s1", Number(e.target.value))}
                  className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2.5 py-1 text-center font-bold text-xs text-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest block">S2 Credits</label>
                <input
                  type="number"
                  min="0"
                  max="22"
                  value={s2}
                  onChange={(e) => handleProgressionCreditChange("s2", Number(e.target.value))}
                  className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2.5 py-1 text-center font-bold text-xs text-white"
                />
              </div>
              {progressionTarget === "s7" && (
                <>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest block">S3 Credits</label>
                    <input
                      type="number"
                      min="0"
                      max="22"
                      value={s3}
                      onChange={(e) => handleProgressionCreditChange("s3", Number(e.target.value))}
                      className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2.5 py-1 text-center font-bold text-xs text-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest block">S4 Credits</label>
                    <input
                      type="number"
                      min="0"
                      max="22"
                      value={s4}
                      onChange={(e) => handleProgressionCreditChange("s4", Number(e.target.value))}
                      className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2.5 py-1 text-center font-bold text-xs text-white"
                    />
                  </div>
                </>
              )}
            </div>

            <div className={`p-3.5 rounded-xl border text-center ${
              passed
                ? "bg-emerald-500/[0.02] border-emerald-500/10 text-emerald-450"
                : "bg-rose-500/[0.01] border-rose-500/10 text-rose-455 animate-pulse"
            }`}>
              <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-none font-mono">Promotion Audit Status</div>
              <div className="text-xl font-light tracking-tight text-white py-1 font-mono">
                {earned} <span className="text-xs text-zinc-500">/ {limit} Credits</span>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider block mt-1">
                {passed ? "Clear for Promotion ✅" : `Year-Back Credit Lock Risk! 🚩`}
              </div>
              <div className="text-[9px] font-semibold text-zinc-400 mt-1 leading-normal">
                {progressionTarget === "s5" ? "S5 promotion" : "S7 promotion"} requires minimum <strong className="text-zinc-200">{limit} credits</strong>. You are {passed ? "safe" : `${limit - earned} credits short`}.
              </div>
            </div>
          </div>
        </div>

        {/* Activity Points Auditor Card */}
        <div className="bg-zinc-900/[0.35] backdrop-blur-md border border-white/[0.06] rounded-2xl p-5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm leading-none">Activity Points Auditor</h3>
                <span className="text-[9px] font-bold text-zinc-500 block mt-1 font-mono">Earned: {totalActivityPoints} / {calculatedPoints.totalRequired} pts</span>
              </div>
            </div>
            
            <select
              value={studentType}
              onChange={(e) => handleStudentTypeChange(e.target.value as typeof studentType)}
              className="bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-[9px] font-black text-white focus:outline-none cursor-pointer"
            >
              <option value="regular">Regular</option>
              <option value="lateral">Lateral</option>
              <option value="pwd">PwD Mode</option>
            </select>
          </div>

          <div className="space-y-3">
            {/* Tally Progress */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-wider text-zinc-450">
                <span>Portfolio Progress</span>
                <span className={`${tallyMeta.textClass} font-bold font-mono`}>{totalActivityPoints} pts ({tallyMeta.label})</span>
              </div>
              <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className={`h-full ${tallyMeta.barClass} transition-all duration-300`} style={{ width: `${Math.min(100, (totalActivityPoints / calculatedPoints.totalRequired) * 100)}%` }} />
              </div>
            </div>

            {/* List of claims */}
            <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1 scrollbar-thin">
              {selectedActivities.length === 0 ? (
                <div className="text-[9.5px] font-bold text-zinc-500 text-center py-6">
                  No activity claims logged. Add claims below.
                </div>
              ) : (
                selectedActivities.map((act) => {
                  const details = KTU_ACTIVITIES[act.activityCode];
                  return (
                    <div key={act.id} className="p-2.5 rounded-xl bg-zinc-950/40 border border-white/[0.04] flex items-center justify-between text-[9px] text-zinc-300">
                      <div className="truncate pr-2">
                        <span className="font-bold text-white font-mono">{act.activityCode}</span>
                        {act.level && <span className="ml-1 text-zinc-500">[{act.level}]</span>}
                        {act.quantity && <span className="ml-1 text-zinc-500">[{act.quantity} units]</span>}
                        <span className="block text-[8px] text-zinc-500 truncate">{details?.name}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-bold text-emerald-450 font-mono">+{act.points} pts</span>
                        <button
                          onClick={() => handleDeleteActivity(act.id)}
                          className="text-zinc-500 hover:text-rose-505 cursor-pointer p-0.5 active:scale-90 transition-all"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Add activity form */}
            <div className="p-3 rounded-xl border border-white/[0.04] bg-zinc-950/30 space-y-2 text-[9px]">
              <div className="grid grid-cols-3 gap-2">
                <select
                  value={actSelGroup}
                  onChange={(e) => handleGroupSelect(e.target.value as "I" | "II" | "III")}
                  className="bg-[#121215] border border-white/[0.06] rounded-lg px-1.5 py-1 text-white font-mono cursor-pointer"
                >
                  <option value="I">Group I</option>
                  <option value="II">Group II</option>
                  <option value="III">Group III</option>
                </select>
                
                <select
                  value={actSelCode}
                  onChange={(e) => handleCodeSelect(e.target.value)}
                  className="bg-[#121215] border border-white/[0.06] rounded-lg px-1.5 py-1 col-span-2 text-white font-mono cursor-pointer"
                >
                  {(() => {
                    const group = KTU_ACTIVITY_GROUPS.find(g => g.id === actSelGroup);
                    return group
                      ? group.categories.flatMap(cat => 
                          cat.activities.map(code => (
                            <option key={code} value={code}>{code} - {KTU_ACTIVITIES[code]?.name.slice(0, 32)}...</option>
                          ))
                        )
                      : null;
                  })()}
                </select>
              </div>

              {/* Quantities/Levels if required */}
              {(() => {
                const details = KTU_ACTIVITIES[actSelCode];
                if (!details) return null;
                return (
                  <div className="grid grid-cols-2 gap-2">
                    {details.type === "level" && details.levels && (
                      <select
                        value={actSelLevel}
                        onChange={(e) => handleLevelSelect(e.target.value)}
                        className="bg-[#121215] border border-white/[0.06] rounded-lg px-1.5 py-1 text-white cursor-pointer"
                      >
                        {Object.keys(details.levels).map(lvl => (
                          <option key={lvl} value={lvl}>{lvl} ({details.levels?.[lvl]} pts)</option>
                        ))}
                      </select>
                    )}
                    {details.type === "count" && (
                      <input
                        type="number"
                        min="1"
                        placeholder="Quantity"
                        value={actSelQuantity}
                        onChange={(e) => handleQuantitySelect(Number(e.target.value))}
                        className="bg-[#121215] border border-white/[0.06] rounded-lg px-1.5 py-1 text-white font-mono text-center"
                      />
                    )}
                    {details.type === "input" && (
                      <input
                        type="number"
                        placeholder={`Points (max ${details.maxPoints})`}
                        value={actSelPoints}
                        onChange={(e) => setActSelPoints(Number(e.target.value))}
                        className="bg-[#121215] border border-white/[0.06] rounded-lg px-1.5 py-1 text-white font-mono text-center"
                      />
                    )}
                    <button
                      onClick={handleAddActivity}
                      className="bg-violet-500/20 hover:bg-violet-500/30 text-violet-400 font-bold border border-violet-500/30 rounded-lg py-1 cursor-pointer active:scale-95 transition-all col-span-2 md:col-span-1"
                    >
                      Add Activity
                    </button>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSpecializationPathway = () => {
    const cgpa = parseFloat(calculateCGPA()) || 8.2;
    const honoursElig = cgpa >= 8.5 && !honoursBacklogs;
    const minorElig = cgpa >= 7.5 && minorBacklogs === 0;
    const completedSemesters = cgpaSemesters.filter(s => s.active && s.sgpa > 0).length || 3;
    
    // Honours target SGPA
    const targetHonoursCGPA = 8.5;
    const neededHonoursSgpa = targetHonoursCGPA + completedSemesters * (targetHonoursCGPA - cgpa);
    const honoursImpossible = neededHonoursSgpa > 10.0;
    
    // Minor target SGPA
    const targetMinorCGPA = 7.5;
    const neededMinorSgpa = targetMinorCGPA + completedSemesters * (targetMinorCGPA - cgpa);
    const minorImpossible = neededMinorSgpa > 10.0;

    const handleShareStanding = () => {
      let msg = `My KTU Academic Standing:\n- CGPA: ${cgpa}\n`;
      if (honoursElig) {
        msg += `- Eligible for B.Tech Honours (Zero Backlogs) 🏆\n`;
      } else {
        msg += `- Ineligible for Honours (CGPA < 8.5 or has backlogs)\n`;
      }
      
      if (minorElig) {
        msg += `- Eligible for B.Tech Minor (Zero Backlogs) 🎓\n`;
      } else {
        msg += `- Ineligible for Minor (CGPA < 7.5 or has backlogs)\n`;
      }
      
      msg += "\nCheck your graduation runway on KTU Node!";
      navigator.clipboard.writeText(msg);
      triggerNotification("Academic standing copied to clipboard! 📋");
    };

    return (
      <div className="bg-zinc-900/[0.35] backdrop-blur-md border border-white/[0.06] rounded-2xl p-5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] space-y-4">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/15 flex items-center justify-center text-violet-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm leading-none">Specialization Pathways</h3>
              <span className="text-[9px] font-bold text-zinc-500 block mt-1">Honours & Minors eligibility checklist</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Honours Audit */}
          <div className="p-3.5 rounded-xl border border-white/[0.04] bg-zinc-950/20 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-widest text-zinc-550 uppercase">B.Tech Honours Path</span>
              <span className={`px-2 py-0.5 rounded-lg border text-[8px] font-black uppercase tracking-wider ${
                honoursElig
                  ? "bg-emerald-500/10 text-emerald-450 border-emerald-500/20"
                  : "bg-rose-500/10 text-rose-455 border-rose-500/20"
              }`}>
                {honoursElig ? "Eligible 🏆" : "Ineligible ❌"}
              </span>
            </div>
            <div className="flex items-center justify-between text-[9px] text-zinc-400">
              <span>Requires CGPA &gt;= 8.5 (Current: {cgpa})</span>
              <button
                onClick={() => {
                  const nextVal = !honoursBacklogs;
                  setHonoursBacklogs(nextVal);
                  localStorage.setItem("ktunode_tools_honours_backlogs", String(nextVal));
                }}
                className={`px-1.5 py-0.5 rounded-md border text-[8px] font-bold uppercase transition-all ${
                  honoursBacklogs ? "bg-rose-500/10 text-rose-400 border-rose-500/25" : "bg-emerald-500/10 text-emerald-400 border-emerald-500/25"
                }`}
              >
                {honoursBacklogs ? "Has Backlogs" : "Zero Backlogs"}
              </button>
            </div>
            
            {!honoursElig && (
              <div className="pt-2.5 border-t border-white/[0.04] text-[8.5px] font-semibold text-zinc-400 leading-normal">
                {honoursImpossible ? (
                  <span className="text-rose-455">🚩 Recovery Target: Out of reach in 1 Sem (Requires SGPA: {neededHonoursSgpa.toFixed(2)}). Target multiple semesters.</span>
                ) : (
                  <span className="text-violet-400">💡 Recovery Target: Requires SGPA of <strong className="text-white font-mono">{neededHonoursSgpa.toFixed(2)}</strong> in next semester to restore eligibility standing.</span>
                )}
              </div>
            )}
          </div>

          {/* Minor Audit */}
          <div className="p-3.5 rounded-xl border border-white/[0.04] bg-zinc-950/20 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-widest text-zinc-550 uppercase">B.Tech Minor Path</span>
              <span className={`px-2 py-0.5 rounded-lg border text-[8px] font-black uppercase tracking-wider ${
                minorElig
                  ? "bg-emerald-500/10 text-emerald-450 border-emerald-500/20"
                  : "bg-rose-500/10 text-rose-455 border-rose-500/20"
              }`}>
                {minorElig ? "Eligible 🎓" : "Ineligible ❌"}
              </span>
            </div>
            <div className="flex items-center justify-between text-[9px] text-zinc-400">
              <span>Requires CGPA &gt;= 7.5 (Current: {cgpa})</span>
              <div className="flex items-center gap-1.5">
                <span>Backlogs:</span>
                <input
                  type="number"
                  min="0"
                  value={minorBacklogs}
                  onChange={(e) => {
                    const val = Math.max(0, Number(e.target.value));
                    setMinorBacklogs(val);
                    localStorage.setItem("ktunode_tools_minor_backlogs", String(val));
                  }}
                  className="w-8 bg-[#121215] border border-white/[0.06] rounded-md text-center text-white text-[9.5px] font-bold font-mono"
                />
              </div>
            </div>
            
            {!minorElig && (
              <div className="pt-2.5 border-t border-white/[0.04] text-[8.5px] font-semibold text-zinc-400 leading-normal">
                {minorImpossible ? (
                  <span className="text-rose-455">🚩 Recovery Target: Out of reach in 1 Sem (Requires SGPA: {neededMinorSgpa.toFixed(2)}). Target multiple semesters.</span>
                ) : (
                  <span className="text-violet-400">💡 Recovery Target: Requires SGPA of <strong className="text-white font-mono">{neededMinorSgpa.toFixed(2)}</strong> in next semester to restore eligibility standing.</span>
                )}
              </div>
            )}
          </div>

          <button
            onClick={handleShareStanding}
            className="w-full py-2 rounded-xl bg-violet-500/10 hover:bg-violet-500/20 text-violet-400 border border-violet-500/20 text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer active:scale-[0.98]"
          >
            Share standing 📋
          </button>
        </div>
      </div>
    );
  };

  const renderStudySequencer = () => {
    const activeCode = plannerActiveSubject.code;
    const activeName = plannerActiveSubject.name;
    const moduleToggles = mtMilestones[activeCode] || [false, false, false, false, false];

    const untouchedIndices = moduleToggles.reduce<number[]>((acc, val, idx) => {
      if (!val) acc.push(idx);
      return acc;
    }, []);
    const untouchedCount = untouchedIndices.length;

    let advice = "";
    if (untouchedCount === 0) {
      advice = "All 5 modules fully prepared! You are in the safest zone for an S grade. Dedicate time to reviewing old papers & coding structures.";
    } else if (mtCramHours >= untouchedCount * 2.5) {
      advice = `With ${mtCramHours} hours remaining, you can cover all ${untouchedCount} remaining modules. Dedicate ~2.5 hours to each untouched module (Module ${untouchedIndices.map(i => i + 1).join(", ")}) and leave the last 1-2 hours for key formula sheets.`;
    } else if (mtCramHours < untouchedCount * 1.5 && untouchedCount > 1) {
      const skipMod = untouchedIndices[untouchedIndices.length - 1] + 1;
      const focusMods = untouchedIndices.slice(0, -1).map(i => i + 1).join(", ");
      advice = `⚠️ Severe Time Crunch: Bypass Module ${skipMod} entirely. Focus your remaining ${mtCramHours} hours exclusively on high-yield Modules ${focusMods} to secure a safe pass limit.`;
    } else {
      advice = `With ${mtCramHours} hours remaining and ${untouchedCount} modules untouched, prioritize Module ${untouchedIndices[0] + 1} (usually carries 20% fundamental weight) before attempting the others.`;
    }

    const toggleModule = (idx: number) => {
      const currentArray = [...moduleToggles];
      currentArray[idx] = !currentArray[idx];
      const updated = {
        ...mtMilestones,
        [activeCode]: currentArray
      };
      setMtMilestones(updated);
    };

    const handleShareCramStrategy = () => {
      let msg = `My Cram Strategy for ${activeName} (${activeCode}):\n`;
      msg += `- Preparation: ${5 - untouchedCount}/5 modules done\n`;
      msg += `- Cram Window: ${mtCramHours} hours left\n`;
      msg += `- Recom: ${advice}\n`;
      msg += "\nBuild your cram strategy on KTU Node!";
      navigator.clipboard.writeText(msg);
      triggerNotification("Cram strategy copied to clipboard! 📋");
    };

    return (
      <div className="bg-zinc-900/[0.35] backdrop-blur-md border border-white/[0.06] rounded-2xl p-5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] space-y-4">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/15 flex items-center justify-center text-violet-400">
              <Notebook className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm leading-none">11th-Hour Study Sequencer</h3>
              <span className="text-[9px] font-bold text-zinc-500 block mt-1">Modules checklist & strategic advice</span>
            </div>
          </div>

          <select
            value={plannerActiveSubject.code}
            onChange={(e) => {
              const selected = activeSemesterSubjects.find(s => s.code === e.target.value) || { code: e.target.value, name: "Selected Course" };
              setPlannerActiveSubject(selected);
            }}
            className="bg-[#121215] border border-white/[0.06] rounded-xl px-2.5 py-1 text-[10px] font-black text-white focus:outline-none cursor-pointer"
          >
            {activeSemesterSubjects.map(sub => (
              <option key={sub.code} value={sub.code}>{sub.code}</option>
            ))}
          </select>
        </div>

        {/* Modules Checklist */}
        <div className="space-y-2">
          <span className="text-[9.5px] font-bold tracking-widest text-zinc-500 uppercase block">Prepared Syllabus Modules</span>
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((num, idx) => {
              const isDone = moduleToggles[idx];
              return (
                <button
                  key={num}
                  onClick={() => toggleModule(idx)}
                  className={`p-2.5 rounded-xl border text-[10px] font-bold uppercase transition-all cursor-pointer text-center active:scale-95 ${
                    isDone
                      ? "bg-emerald-500/10 text-emerald-450 border-emerald-500/20"
                      : "bg-[#121215] text-zinc-550 border-white/[0.04] hover:bg-white/[0.02]"
                  }`}
                >
                  Mod {num}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cram timer slider */}
        <div className="p-3.5 rounded-xl border border-white/[0.04] bg-zinc-950/30 space-y-2.5">
          <div className="flex justify-between items-center text-xs font-bold text-zinc-350">
            <span>Remaining study window time</span>
            <span className="text-violet-400 font-bold font-mono">{mtCramHours} Hours</span>
          </div>
          <input
            type="range"
            min="1"
            max="24"
            value={mtCramHours}
            onChange={(e) => setMtCramHours(Number(e.target.value))}
            className="w-full accent-violet-500 cursor-pointer h-1 rounded-lg bg-zinc-800"
          />
        </div>

        {/* Advisor recommendation text */}
        <div className="p-4 rounded-xl border border-white/[0.06] bg-zinc-950/40 space-y-2">
          <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase block">Strategic Cram Recommendation</span>
          <p className="text-[10px] leading-relaxed text-zinc-350 font-medium font-sans">
            {advice}
          </p>
        </div>

        <button
          onClick={handleShareCramStrategy}
          className="w-full py-2.5 rounded-xl bg-violet-500/10 hover:bg-violet-500/20 text-violet-400 border border-violet-500/20 text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer active:scale-[0.98]"
        >
          Share Cram Strategy 📋
        </button>
      </div>
    );
  };

  const renderRevisionHub = () => {
    const wordCount = notepadText.trim() ? notepadText.trim().split(/\s+/).length : 0;

    const handleDownloadNotes = () => {
      const element = document.createElement("a");
      const file = new Blob([notepadText], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = `ktu_study_notes_s${sem}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    };

    return (
      <div className="bg-zinc-900/[0.35] backdrop-blur-md border border-white/[0.06] rounded-2xl p-5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] space-y-4 relative overflow-hidden w-full">
        <div className="absolute top-0 right-0 w-[180px] h-[180px] rounded-full bg-violet-500/[0.02] blur-[40px] pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/15 flex items-center justify-center text-violet-400 animate-pulse">
              <Sparkles className="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm leading-none">11th-Hour Revision Hub</h3>
              <span className="text-[9px] font-bold text-zinc-500 block mt-1">Focus, recall, & compliance checks</span>
            </div>
          </div>

          {/* Tab switcher */}
          <div className="flex items-center flex-wrap gap-1 bg-white/[0.03] p-1 rounded-xl border border-white/[0.04] self-start sm:self-auto">
            {[
              { id: "pomodoro", label: "Timer" },
              { id: "flashcards", label: "Recall" },
              { id: "checklist", label: "Checklist" },
              { id: "gamble", label: "Gamble" },
              { id: "splits", label: "Splits" },
              { id: "notepad", label: "Notes" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setStudyConsoleTab(tab.id as typeof studyConsoleTab)}
                className={`px-2 py-1 rounded-lg text-[8px] font-black uppercase tracking-wider transition-all cursor-pointer active:scale-95 ${
                  studyConsoleTab === tab.id
                    ? "bg-white/10 text-violet-400 border border-white/[0.08]"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: Pomodoro */}
        {studyConsoleTab === "pomodoro" && (
          <div className="space-y-4 flex flex-col items-center">
            {/* Circle progress */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="56"
                  cy="56"
                  r="48"
                  className="stroke-zinc-800"
                  strokeWidth="3.5"
                  fill="transparent"
                />
                <circle
                  cx="56"
                  cy="56"
                  r="48"
                  className="stroke-violet-500 transition-all duration-1000"
                  strokeWidth="4.5"
                  fill="transparent"
                  strokeDasharray={301.59}
                  strokeDashoffset={301.59 - (301.59 * (pomodoroTime / (pomodoroMode === "focus" ? 1500 : 300)))}
                />
              </svg>
              <div className="absolute flex flex-col items-center text-center">
                <span className="font-mono text-xl font-bold text-white tabular-nums">
                  {Math.floor(pomodoroTime / 60)}:{(pomodoroTime % 60).toString().padStart(2, "0")}
                </span>
                <span className="text-[7.5px] font-bold tracking-widest text-zinc-500 uppercase mt-0.5">
                  {pomodoroMode === "focus" ? "🔥 Focus" : "☕ Break"}
                </span>
              </div>
            </div>

            {/* Play/Pause/Reset Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPomodoroActive(!pomodoroActive)}
                className="px-4 py-2 bg-violet-500/20 hover:bg-violet-500/30 text-violet-400 border border-violet-500/30 rounded-xl text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95"
              >
                {pomodoroActive ? "Pause" : "Start"}
              </button>
              <button
                onClick={() => {
                  setPomodoroActive(false);
                  setPomodoroTime(pomodoroMode === "focus" ? 1500 : 300);
                }}
                className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-400 hover:text-white cursor-pointer active:scale-95 transition-all"
                title="Reset timer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  setPomodoroActive(false);
                  const nextMode = pomodoroMode === "focus" ? "break" : "focus";
                  setPomodoroMode(nextMode);
                  setPomodoroTime(nextMode === "focus" ? 1500 : 300);
                }}
                className="px-3 py-2 bg-white/[0.03] border border-white/[0.06] rounded-xl text-[9px] font-bold uppercase text-zinc-400 hover:text-white cursor-pointer active:scale-95 transition-all"
              >
                Skip
              </button>
            </div>

            {/* Soundscapes */}
            <div className="w-full space-y-2 border-t border-white/[0.06] pt-3">
              <span className="text-[8px] font-bold tracking-widest text-zinc-500 uppercase block text-center">
                Study Ambient Soundscapes
              </span>
              <div className="grid grid-cols-4 gap-1.5 animate-fade-in">
                {[
                  { id: "rain", label: "🌧️ Rain", desc: "Rain" },
                  { id: "fire", label: "🔥 Fire", desc: "Fire" },
                  { id: "cafe", label: "☕ Cafe", desc: "Cafe" },
                  { id: "lofi", label: "🎵 Beat", desc: "Lofi" }
                ].map(snd => (
                  <button
                    key={snd.id}
                    onClick={() => setSelectedLofiSound(selectedLofiSound === snd.id ? null : snd.id)}
                    className={`py-1.5 rounded-lg border text-[8px] font-bold transition-all cursor-pointer flex flex-col items-center active:scale-[0.98] ${
                      selectedLofiSound === snd.id
                        ? "bg-violet-500/10 text-violet-400 border-violet-500/20"
                        : "bg-transparent text-zinc-500 border-white/[0.06]"
                    }`}
                  >
                    <span>{snd.label.split(" ")[0]}</span>
                    <span className="text-[6.5px] font-black uppercase tracking-wider text-zinc-450 mt-0.5">{snd.label.split(" ")[1]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Flashcards */}
        {studyConsoleTab === "flashcards" && (
          <div className="space-y-3">
            {flashcardsList.length === 0 ? (
              <div className="text-[10px] font-bold text-zinc-500 text-center py-6">
                Select a theory subject on the left to load flashcards.
              </div>
            ) : (
              <div className="space-y-3 animate-fade-in">
                <div className="flex justify-between items-center text-[9px] font-bold text-zinc-500 px-1">
                  <span>Card {activeCardIndex + 1} of {flashcardsList.length}</span>
                  <span className="bg-violet-500/10 text-violet-400 px-2 py-0.5 rounded-lg border border-violet-500/20">
                    Retained: {flashcardScores.known} / {flashcardScores.total} Cards
                  </span>
                </div>

                <div
                  onClick={() => setIsCardFlipped(!isCardFlipped)}
                  className="h-28 rounded-xl border border-white/[0.06] bg-zinc-955/20 p-3.5 flex flex-col items-center justify-center text-center cursor-pointer select-none relative overflow-hidden group hover:bg-zinc-955/30 active:scale-[0.99] transition-all"
                >
                  <div className="absolute top-1.5 left-2 px-1.5 py-0.5 rounded bg-white/5 text-[7px] font-bold uppercase text-zinc-500">
                    {isCardFlipped ? "Answer (Click to flip back)" : "Question (Click to reveal)"}
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isCardFlipped ? "ans" : "que"}
                      initial={{ opacity: 0, y: 3 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -3 }}
                      transition={{ duration: 0.12 }}
                      className="space-y-1 px-2"
                    >
                      <p className={`font-semibold leading-normal text-zinc-200 ${isCardFlipped ? "text-[9.5px]" : "text-xs font-bold"}`}>
                        {isCardFlipped ? flashcardsList[activeCardIndex]?.a : flashcardsList[activeCardIndex]?.q}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => {
                        setIsCardFlipped(false);
                        setActiveCardIndex(prev => (prev > 0 ? prev - 1 : flashcardsList.length - 1));
                      }}
                      className="px-2.5 py-1 bg-white/[0.02] border border-white/[0.06] rounded-lg text-[9px] font-bold uppercase text-zinc-400 hover:text-white cursor-pointer active:scale-95"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => {
                        setIsCardFlipped(false);
                        setActiveCardIndex(prev => (prev < flashcardsList.length - 1 ? prev + 1 : 0));
                      }}
                      className="px-2.5 py-1 bg-white/[0.02] border border-white/[0.06] rounded-lg text-[9px] font-bold uppercase text-zinc-400 hover:text-white cursor-pointer active:scale-95"
                    >
                      Next
                    </button>
                  </div>

                  <div className="flex gap-1.5">
                    <button
                      onClick={() => {
                        setFlashcardScores(prev => ({ ...prev, known: prev.known + 1 }));
                        setIsCardFlipped(false);
                        setActiveCardIndex(prev => (prev < flashcardsList.length - 1 ? prev + 1 : 0));
                        triggerNotification("Concept marked as known! 👍");
                      }}
                      className="px-2.5 py-1 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/15 text-emerald-450 rounded-lg text-[8.5px] font-bold uppercase transition-all cursor-pointer active:scale-95"
                    >
                      Known 👍
                    </button>
                    <button
                      onClick={() => {
                        setIsCardFlipped(false);
                        setActiveCardIndex(prev => (prev < flashcardsList.length - 1 ? prev + 1 : 0));
                        triggerNotification("Added to review list.");
                      }}
                      className="px-2.5 py-1 bg-amber-500/10 hover:bg-amber-500/15 border border-amber-500/15 text-amber-450 rounded-lg text-[8.5px] font-bold uppercase transition-all cursor-pointer active:scale-95"
                    >
                      Review 👎
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Checklist */}
        {studyConsoleTab === "checklist" && (
          <div className="space-y-3 animate-fade-in text-[10px] font-bold">
            <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase block pb-1 border-b border-white/[0.04]">Exam Hall Compliance Items</span>
            <div className="grid grid-cols-1 gap-2 pt-1">
              {mtHallChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-zinc-955/10 border border-white/[0.04] text-zinc-300 hover:bg-zinc-955/20 transition-all"
                >
                  <input
                    type="checkbox"
                    defaultChecked
                    className="accent-violet-500 h-3.5 w-3.5 rounded bg-zinc-900 border-white/[0.06] cursor-pointer"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Gamble */}
        {studyConsoleTab === "gamble" && (
          <div className="space-y-3 animate-fade-in text-[10px]">
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-1">
                <label className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest block">Original Grade</label>
                <select
                  value={mtRevalGrade}
                  onChange={(e) => setMtRevalGrade(e.target.value)}
                  className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1.5 text-[9px] font-bold text-white cursor-pointer"
                >
                  <option value="F">Grade F</option>
                  <option value="D">Grade D</option>
                  <option value="C">Grade C</option>
                  <option value="B">Grade B</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest block">CIE (out of 50)</label>
                <input
                  type="number"
                  min="0"
                  max="50"
                  value={mtRevalCie}
                  onChange={(e) => setMtRevalCie(Math.min(50, Math.max(0, Number(e.target.value))))}
                  className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-center font-bold text-xs text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest block">Performance</label>
                <select
                  value={mtRevalExpected}
                  onChange={(e) => setMtRevalExpected(e.target.value)}
                  className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1.5 text-[9px] font-bold text-white cursor-pointer"
                >
                  <option value="Excellent">Excellent (Expected B+)</option>
                  <option value="Moderate">Moderate (Expected C)</option>
                  <option value="Poor">Poor (Expected Pass)</option>
                </select>
              </div>
            </div>

            {(() => {
              const CIE = mtRevalCie;
              let gambleStatus = "Low Probability ❌";
              let gambleTheme = "bg-rose-500/10 text-rose-455 border-rose-500/20";
              let details = "Revaluation fee (Rs 600) is unlikely to yield results based on your low internal score.";

              if (mtRevalGrade === "F") {
                if (CIE >= 22 && mtRevalExpected === "Excellent") {
                  gambleStatus = "High Chance 🚀";
                  gambleTheme = "bg-emerald-500/10 text-emerald-455 border-emerald-500/20";
                  details = "Strong recommendation: High internal score combined with a positive exam sentiment guarantees high revaluation success rates.";
                } else if (CIE >= 18 && mtRevalExpected === "Excellent") {
                  gambleStatus = "Moderate ⚖️";
                  gambleTheme = "bg-amber-500/10 text-amber-450 border-amber-500/20";
                  details = "Decent CIE standing. Worth the gamble if you are confident your answers matched the key schema.";
                }
              } else {
                if (mtRevalExpected === "Excellent") {
                  gambleStatus = "Moderate ⚖️";
                  gambleTheme = "bg-amber-500/10 text-amber-450 border-amber-500/20";
                  details = "Grade improvements are harder to verify than simple F-pass corrections. Proceed if your paper was highly structured.";
                }
              }

              return (
                <div className={`p-3.5 rounded-xl border text-center ${gambleTheme} space-y-1`}>
                  <div className="text-[8px] font-bold tracking-widest text-zinc-500 uppercase leading-none">Revaluation Risk Assessment</div>
                  <div className="text-sm font-bold py-1 leading-none">{gambleStatus}</div>
                  <div className="text-[9px] font-medium leading-normal text-zinc-400 mt-1">{details}</div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Tab 5: Splits */}
        {studyConsoleTab === "splits" && (
          <div className="space-y-3.5 animate-fade-in text-[10px] text-zinc-350">
            <div className="p-3 bg-zinc-955/10 border border-white/[0.04] rounded-xl space-y-1.5">
              <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest block mb-1">Seminar Split (max 100)</span>
              <div className="flex justify-between border-b border-white/[0.04] pb-1">
                <span>Report Quality Documentation</span>
                <span className="font-bold text-white font-mono">30 Marks</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.04] pb-1">
                <span>Technical Presentation / Slides</span>
                <span className="font-bold text-white font-mono">40 Marks</span>
              </div>
              <div className="flex justify-between text-violet-400 font-bold">
                <span>Defense / Q&A Viva Session</span>
                <span className="font-mono">30 Marks</span>
              </div>
            </div>

            <div className="p-3 bg-zinc-955/10 border border-white/[0.04] rounded-xl space-y-1.5">
              <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest block mb-1">Project Split (max 100)</span>
              <div className="flex justify-between border-b border-white/[0.04] pb-1">
                <span>Supervisor / Faculty Guide</span>
                <span className="font-bold text-white font-mono">30 Marks</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.04] pb-1">
                <span>Internal Evaluation Committee</span>
                <span className="font-bold text-white font-mono">40 Marks</span>
              </div>
              <div className="flex justify-between text-violet-400 font-bold">
                <span>Project Report & Viva ESE</span>
                <span className="font-mono">30 Marks</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: Notes */}
        {studyConsoleTab === "notepad" && (
          <div className="space-y-3 animate-fade-in text-[10px]">
            <div className="flex justify-between items-center text-[9px] font-bold text-zinc-500 px-1">
              <span>Private Scratchpad</span>
              <span className="text-violet-400 font-bold font-mono">{wordCount} Words</span>
            </div>
            <textarea
              value={notepadText}
              onChange={(e) => handleNotepadSave(e.target.value)}
              placeholder="Type formulas, notes, or cram slots here..."
              className="w-full bg-[#121215] border border-white/[0.06] rounded-xl p-3 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-violet-500/20 text-white min-h-[120px] resize-none"
            />
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-bold text-zinc-500">
                {notepadSaved ? (
                  <span className="text-emerald-450 animate-pulse">Draft Saved! 💾</span>
                ) : (
                  <span>Auto-saved in local storage</span>
                )}
              </span>
              <button
                onClick={handleDownloadNotes}
                className="px-2.5 py-1 bg-violet-500/10 hover:bg-violet-500/15 border border-violet-500/15 text-violet-400 rounded-lg text-[8px] font-bold uppercase transition-all cursor-pointer active:scale-95"
              >
                Download .txt
              </button>
            </div>
          </div>
        )}
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

    // Target grading thresholds
    const targets = [
      { grade: "S", pct: 90, label: "S Grade (Outstanding)" },
      { grade: "A+", pct: 85, label: "A+ Grade (Honours)" },
      { grade: "A", pct: 80, label: "A Grade (Excellent)" },
      { grade: "B+", pct: 70, label: "B+ Grade (Good)" },
      { grade: "B", pct: 60, label: "B Grade (Average)" },
      { grade: "C+", pct: 50, label: "C+ Grade (Passing)" }
    ];

    const cieVal = plannerCieScore;

    return (
      <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-950/[0.06] dark:border-white/[0.06] rounded-[28px] p-5 shadow-lg space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200/20 dark:border-slate-800/20 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/15 flex items-center justify-center text-violet-600 dark:text-violet-450">
              <Award className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-black text-slate-900 dark:text-slate-50 text-sm leading-none">CIE & ESE Target Planner</h3>
              <span className="text-[9px] font-bold text-slate-400 block mt-1">Unified target grading & pass/fail sandbox</span>
            </div>
          </div>
          
          <select
            value={plannerActiveSubject.code}
            onChange={(e) => {
              const selected = availablePlannerSubjects.find(s => s.code === e.target.value);
              if (selected) setPlannerActiveSubject(selected);
            }}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-2.5 py-1 text-[10px] font-black cursor-pointer text-slate-850 dark:text-slate-100 focus:outline-none"
          >
            {availablePlannerSubjects.map(sub => (
              <option key={sub.code} value={sub.code}>{sub.code}</option>
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
                else { badgeColor = "bg-violet-500/10 text-violet-500 border-violet-500/10"; borderStyle = "hover:border-violet-400"; }
              }

              return (
                <div key={targetItem.grade} className={`p-3 rounded-2xl border bg-white dark:bg-slate-900 text-left flex items-center justify-between transition-all sm:${borderStyle}`}>
                  <div className="truncate pr-1.5">
                    <span className="text-[8px] font-black text-slate-400 block uppercase tracking-wider">{targetItem.label}</span>
                    <span className="font-black text-xs text-slate-855 dark:text-slate-100 block mt-1">Needed:</span>
                  </div>
                  <div className={`px-2.5 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider text-center shrink-0 border ${badgeColor}`}>
                    {impossible ? "Impossible" : `sm:${Math.ceil(neededEse)} / 100`}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Pass/Fail Sandbox Checklist */}
        <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950/[0.01] dark:bg-white/[0.01] space-y-2">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Pass/Fail Sandbox Audit</span>
          <div className="space-y-1.5 text-[10px] font-bold text-slate-500">
            <div className="flex items-center gap-1.5">
              {cieVal >= 20 ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              ) : (
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              )}
              <span>Continuous Internal Evaluation (CIE) pass status: {cieVal >= 20 ? "Safe (>= 20/50)" : "Low Score"}</span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Minimum final exam passing score requirement: <strong className="text-slate-800 dark:text-slate-200">40 / 100</strong></span>
            </div>

            <div className="flex items-center gap-1.5">
              {cieVal >= 30 ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              ) : (
                <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              )}
              <span>Overall passing threshold: Total aggregate marks (CIE + ESE/2) must be &gt;= 50%</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 3. Lab Checklist & timeline notes board (Notes, timelines, and labs stacked side by side)
  const renderLabsTimelineNotes = () => {
    const isLabsEmpty = labCourses.length === 0;
    const currentActiveLabId = activeLabTab || (labCourses[0] ? labCourses[0].id : "");
    const activeLab = labCourses.find(l => l.id === currentActiveLabId);

    const wordCount = notepadText.trim() ? notepadText.trim().split(/\s+/).length : 0;

    const handleDownloadNotes = () => {
      const element = document.createElement("a");
      const file = new Blob([notepadText], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = `ktu_study_notes_s${sem}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    };

    return (
      <div className="space-y-4">
        {/* Lab Checklist Card */}
        <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-950/[0.06] dark:border-white/[0.06] rounded-[28px] p-5 shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200/20 dark:border-slate-800/20">
            <div className="flex items-center gap-2.5">
              <ListTodo className="w-4.5 h-4.5 text-violet-500" />
              <div>
                <h3 className="font-black text-slate-900 dark:text-slate-50 text-xs leading-none">Lab Work Checklist</h3>
                <span className="text-[8px] font-bold text-slate-400 block mt-1">S{sem} Personalized Lab Experiments</span>
              </div>
            </div>

            {/* Select active lab if multiple exist */}
            {!isLabsEmpty && (
              <select
                value={currentActiveLabId}
                onChange={(e) => setActiveLabTab(e.target.value)}
                className="bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-850 rounded-xl px-2 py-0.5 text-[9px] font-black cursor-pointer focus:outline-none"
              >
                {labCourses.map(lab => (
                  <option key={lab.id} value={lab.id}>{lab.code} - {lab.name.replace(" Laboratory", "").replace(" Lab", "")}</option>
                ))}
              </select>
            )}
          </div>

          {isLabsEmpty ? (
            <div className="text-[10px] font-bold text-slate-400 text-center py-6">
              No laboratory courses loaded for this semester.
            </div>
          ) : activeLab ? (
            <div className="space-y-4">
              {/* Compute Lab progression & rank */}
              {(() => {
                let completedCheckboxes = 0;
                let totalCheckboxes = 0;
                let rankBadge = "🧪 Novice Cadet";
                let badgeTheme = "bg-blue-500/10 text-blue-600 border-blue-500/15";
                let progressPercent = 0;

                activeLab.exercises.forEach(ex => {
                  if (ex.logic) completedCheckboxes++;
                  if (ex.record) completedCheckboxes++;
                  if (ex.viva) completedCheckboxes++;
                  if (ex.signed) completedCheckboxes++;
                });
                totalCheckboxes = activeLab.exercises.length * 4;
                progressPercent = totalCheckboxes > 0 ? Math.round((completedCheckboxes / totalCheckboxes) * 100) : 0;
                
                if (progressPercent === 100) {
                  rankBadge = "🏆 Certified Genius";
                  badgeTheme = "bg-emerald-500/15 text-emerald-600 border-emerald-500/20";
                } else if (progressPercent >= 80) {
                  rankBadge = "🧠 Lab Master";
                  badgeTheme = "bg-purple-500/10 text-purple-600 border-purple-500/15";
                } else if (progressPercent >= 50) {
                  rankBadge = "🚀 Exam Ready";
                  badgeTheme = "bg-indigo-500/10 text-indigo-600 border-indigo-500/15";
                } else if (progressPercent >= 20) {
                  rankBadge = "📈 Record Builder";
                  badgeTheme = "bg-amber-500/10 text-amber-600 border-amber-500/15";
                } else {
                  rankBadge = "🧪 Novice Cadet";
                  badgeTheme = "bg-blue-500/10 text-blue-600 border-blue-500/15";
                }

                return (
                  <div className="space-y-2 pb-2 border-b border-slate-100 dark:border-slate-850">
                    <div className="flex justify-between items-center text-[9px] font-bold text-slate-400">
                      <span className="flex items-center gap-1.5">
                        Lab Progress: <strong className="text-slate-800 dark:text-slate-200">{progressPercent}%</strong>
                      </span>
                      <span className={`px-2 py-0.5 rounded-lg border text-[8px] font-black uppercase tracking-wider shrink-0 ${badgeTheme}`}>
                        {rankBadge}
                      </span>
                    </div>
                    <div className="h-1 bg-slate-150 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-violet-500 transition-all duration-300" style={{ width: `${progressPercent}%` }} />
                    </div>
                  </div>
                );
              })()}

              {/* Experiments list */}
              <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1 scrollbar-thin">
                {activeLab.exercises.map((ex) => (
                  <div key={ex.id} className="p-2.5 rounded-xl bg-slate-950/[0.01] dark:bg-white/[0.01] border border-slate-200 dark:border-slate-800 space-y-2 text-[10px] font-semibold text-slate-700 dark:text-slate-250">
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate font-bold text-slate-850 dark:text-slate-100">{ex.name}</span>
                      <button
                        onClick={() => removeLabExercise(activeLab.id, ex.id)}
                        className="text-slate-350 hover:text-rose-500 p-0.5 cursor-pointer"
                        title="Delete exercise"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Interactive glowing checkbox tags */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      <button
                        onClick={() => handleLabToggle(activeLab.id, ex.id, "logic")}
                        className={`px-2 py-0.5 rounded-lg border text-[8px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                          ex.logic
                            ? "bg-blue-500/10 text-blue-500 border-blue-500/10"
                            : "bg-transparent text-slate-400 border-slate-200 dark:border-slate-800"
                        }`}
                      >
                        Code/Logic
                      </button>
                      <button
                        onClick={() => handleLabToggle(activeLab.id, ex.id, "record")}
                        className={`px-2 py-0.5 rounded-lg border text-[8px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                          ex.record
                            ? "bg-amber-500/10 text-amber-500 border-amber-500/10"
                            : "bg-transparent text-slate-400 border-slate-200 dark:border-slate-800"
                        }`}
                      >
                        Record Write
                      </button>
                      <button
                        onClick={() => handleLabToggle(activeLab.id, ex.id, "viva")}
                        className={`px-2 py-0.5 rounded-lg border text-[8px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                          ex.viva
                            ? "bg-purple-500/10 text-purple-500 border-purple-500/10"
                            : "bg-transparent text-slate-400 border-slate-200 dark:border-slate-800"
                        }`}
                      >
                        Viva Prep
                      </button>
                      <button
                        onClick={() => handleLabToggle(activeLab.id, ex.id, "signed")}
                        className={`px-2 py-0.5 rounded-lg border text-[8px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                          ex.signed
                            ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/10"
                            : "bg-transparent text-slate-400 border-slate-200 dark:border-slate-800"
                        }`}
                      >
                        Signed Sheet
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add custom exercise button */}
              <button
                onClick={() => addLabExercise(activeLab.id)}
                className="flex items-center gap-1 text-[9px] font-black text-violet-500 hover:bg-violet-500/5 px-2.5 py-1 rounded-lg transition-all cursor-pointer"
              >
                <Plus className="w-3 h-3" /> Add Lab Exercise Slot
              </button>
            </div>
          ) : null}
        </div>



        {/* All-In-One Premium Study Console */}
        <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-950/[0.06] dark:border-white/[0.06] rounded-[28px] p-5 shadow-lg space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[180px] h-[180px] rounded-full bg-violet-500/[0.02] blur-[40px] pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200/20 dark:border-slate-800/20">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4.5 h-4.5 text-blue-500 animate-pulse" />
              <div>
                <h3 className="font-black text-slate-900 dark:text-slate-50 text-xs leading-none">KTU Study Console</h3>
                <span className="text-[8px] font-bold text-slate-400 block mt-1">All-in-one focus & revision suite</span>
              </div>
            </div>

            {/* Premium Study Tabs switcher */}
            <div className="flex items-center gap-1 bg-slate-955/[0.04] dark:bg-white/[0.03] p-1 rounded-xl border border-slate-950/[0.04] dark:border-white/[0.04] self-start sm:self-auto">
              <button
                onClick={() => setStudyConsoleTab("pomodoro")}
                className={`px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                  studyConsoleTab === "pomodoro"
                    ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                }`}
              >
                Timer
              </button>
              <button
                onClick={() => setStudyConsoleTab("flashcards")}
                className={`px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                  studyConsoleTab === "flashcards"
                    ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                }`}
              >
                Recall
              </button>
              <button
                onClick={() => setStudyConsoleTab("spaced")}
                className={`px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                  studyConsoleTab === "spaced"
                    ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                }`}
              >
                Spaced
              </button>
              <button
                onClick={() => setStudyConsoleTab("notepad")}
                className={`px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                  studyConsoleTab === "notepad"
                    ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                }`}
              >
                Notepad
              </button>
            </div>
          </div>

          {/* Pomodoro Timer tab */}
          {studyConsoleTab === "pomodoro" && (
            <div className="space-y-4 flex flex-col items-center">
              {/* Circular premium dynamic progress ring */}
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r="48"
                    className="stroke-slate-100 dark:stroke-slate-800/80"
                    strokeWidth="3.5"
                    fill="transparent"
                  />
                  <circle
                    cx="56"
                    cy="56"
                    r="48"
                    className="stroke-blue-500 transition-all duration-1000"
                    strokeWidth="4.5"
                    fill="transparent"
                    strokeDasharray={301.59}
                    strokeDashoffset={301.59 - (301.59 * (pomodoroTime / (pomodoroMode === "focus" ? 1500 : 300)))}
                  />
                </svg>
                <div className="absolute flex flex-col items-center text-center">
                  <span className="font-mono text-xl font-black text-slate-850 dark:text-slate-50 tabular-nums">
                    {Math.floor(pomodoroTime / 60)}:{(pomodoroTime % 60).toString().padStart(2, "0")}
                  </span>
                  <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest mt-0.5">
                    {pomodoroMode === "focus" ? "🔥 Focus" : "☕ Break"}
                  </span>
                </div>
              </div>

              {/* Playback Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPomodoroActive(!pomodoroActive)}
                  className="px-3.5 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-[9px] font-black uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center gap-1"
                >
                  {pomodoroActive ? "Pause" : "Start"}
                </button>
                <button
                  onClick={() => {
                    setPomodoroActive(false);
                    setPomodoroTime(pomodoroMode === "focus" ? 1500 : 300);
                  }}
                  className="w-7 h-7 rounded-xl bg-slate-950/[0.03] dark:bg-white/[0.03] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer"
                  title="Reset clock"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
                <button
                  onClick={() => {
                    setPomodoroActive(false);
                    const nextMode = pomodoroMode === "focus" ? "break" : "focus";
                    setPomodoroMode(nextMode);
                    setPomodoroTime(nextMode === "focus" ? 1500 : 300);
                  }}
                  className="px-2.5 py-1.5 bg-slate-950/[0.03] dark:bg-white/[0.03] border border-slate-200 dark:border-slate-800 rounded-xl text-[9px] font-black uppercase text-slate-450 hover:text-slate-650 transition-all cursor-pointer"
                >
                  Skip
                </button>
              </div>

              {/* Ambient Sound waves selectors */}
              <div className="w-full space-y-2 border-t border-slate-100 dark:border-slate-850/80 pt-3">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block text-center">
                  Study Ambient Soundscapes
                </span>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { id: "rain", label: "🌧️ Rain", desc: "Rain" },
                    { id: "fire", label: "🔥 Fire", desc: "Fire" },
                    { id: "cafe", label: "☕ Cafe", desc: "Cafe" },
                    { id: "lofi", label: "🎵 Beat", desc: "Lofi" }
                  ].map(snd => (
                    <button
                      key={snd.id}
                      onClick={() => setSelectedLofiSound(selectedLofiSound === snd.id ? null : snd.id)}
                      className={`py-1.5 rounded-lg border text-[8px] font-bold transition-all cursor-pointer flex flex-col items-center ${
                        selectedLofiSound === snd.id
                          ? "bg-blue-500/10 text-blue-600 border-blue-500/15"
                          : "bg-transparent text-slate-450 border-slate-200 dark:border-slate-800/80"
                      }`}
                    >
                      <span>{snd.label.split(" ")[0]}</span>
                      <span className="text-[6.5px] font-black uppercase tracking-wider text-slate-400 mt-0.5">{snd.label.split(" ")[1]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Active Recall flashcards Tab */}
          {studyConsoleTab === "flashcards" && (
            <div className="space-y-3">
              {flashcardsList.length === 0 ? (
                <div className="text-[10px] font-bold text-slate-400 text-center py-6">
                  Select a theory subject in the planner to activate flashcards.
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[9px] font-bold text-slate-400 px-1">
                    <span>Card {activeCardIndex + 1} of {flashcardsList.length}</span>
                    <span className="bg-blue-500/10 text-blue-600 px-2 py-0.5 rounded-lg border border-blue-500/10">
                      Session score: {flashcardScores.known} / {flashcardScores.total} Known
                    </span>
                  </div>

                  {/* Flipped Card box */}
                  <div
                    onClick={() => setIsCardFlipped(!isCardFlipped)}
                    className="h-28 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950/[0.015] dark:bg-white/[0.015] p-3.5 flex flex-col items-center justify-center text-center cursor-pointer select-none relative overflow-hidden group hover:shadow-inner transition-all duration-300"
                  >
                    <div className="absolute top-1.5 left-2 px-1.5 py-0.5 rounded bg-slate-900/5 dark:bg-white/5 text-[7px] font-black uppercase text-slate-400">
                      {isCardFlipped ? "Answer (Click to flip back)" : "Question (Click to reveal)"}
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={isCardFlipped ? "ans" : "que"}
                        initial={{ opacity: 0, y: 3 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -3 }}
                        transition={{ duration: 0.12 }}
                        className="space-y-1 px-2"
                      >
                        <p className={`font-semibold leading-normal ${isCardFlipped ? "text-[9.5px] text-slate-700 dark:text-slate-200" : "text-xs font-bold text-slate-850 dark:text-slate-50"}`}>
                          {isCardFlipped ? flashcardsList[activeCardIndex]?.a : flashcardsList[activeCardIndex]?.q}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Buttons controls */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => {
                          setIsCardFlipped(false);
                          setActiveCardIndex(prev => (prev > 0 ? prev - 1 : flashcardsList.length - 1));
                        }}
                        className="px-2 py-1 bg-slate-950/[0.03] dark:bg-white/[0.03] border border-slate-200 dark:border-slate-800 rounded-lg text-[9px] font-black uppercase text-slate-400 hover:text-slate-655 cursor-pointer"
                      >
                        Prev
                      </button>
                      <button
                        onClick={() => {
                          setIsCardFlipped(false);
                          setActiveCardIndex(prev => (prev < flashcardsList.length - 1 ? prev + 1 : 0));
                        }}
                        className="px-2 py-1 bg-slate-950/[0.03] dark:bg-white/[0.03] border border-slate-200 dark:border-slate-800 rounded-lg text-[9px] font-black uppercase text-slate-400 hover:text-slate-655 cursor-pointer"
                      >
                        Next
                      </button>
                    </div>

                    <div className="flex gap-1.5">
                      <button
                        onClick={() => {
                          setFlashcardScores(prev => ({ ...prev, known: prev.known + 1 }));
                          setIsCardFlipped(false);
                          setActiveCardIndex(prev => (prev < flashcardsList.length - 1 ? prev + 1 : 0));
                          triggerNotification("Added to retained list! 👍");
                        }}
                        className="px-2.5 py-1 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/15 text-emerald-600 rounded-lg text-[8.5px] font-black uppercase tracking-wider transition-all cursor-pointer"
                      >
                        Known 👍
                      </button>
                      <button
                        onClick={() => {
                          setIsCardFlipped(false);
                          setActiveCardIndex(prev => (prev < flashcardsList.length - 1 ? prev + 1 : 0));
                          triggerNotification("Marked for review later!");
                        }}
                        className="px-2.5 py-1 bg-amber-500/10 hover:bg-amber-500/15 border border-amber-500/15 text-amber-600 rounded-lg text-[8.5px] font-black uppercase tracking-wider transition-all cursor-pointer"
                      >
                        Review 👎
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Spaced Repetition planner tab */}
          {studyConsoleTab === "spaced" && (
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[9px] font-bold text-slate-400 px-1 pb-1 border-b border-slate-100 dark:border-slate-850">
                <span>Active Syllabus Concept Reviews</span>
                <span>Spaced Interval Target</span>
              </div>

              <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1 scrollbar-thin">
                {getSpacedRepetitionTopics().map((top) => {
                  const currentData = spacedRepetitionData[top.id] || { level: "low", date: "Never" };
                  
                  let badgeColor = "bg-rose-500/10 text-rose-500 border-rose-500/10";
                  let badgeLabel = "Review Today 🔴";
                  if (currentData.level === "medium") {
                    badgeColor = "bg-amber-500/10 text-amber-600 border-amber-500/10";
                    badgeLabel = "Retained 🟡";
                  } else if (currentData.level === "high") {
                    badgeColor = "bg-emerald-500/10 text-emerald-600 border-emerald-500/10";
                    badgeLabel = "Mastered 🟢";
                  }

                  return (
                    <div key={top.id} className="p-2 rounded-xl bg-slate-950/[0.01] dark:bg-white/[0.01] border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 text-[10px] font-semibold text-slate-700 dark:text-slate-250">
                      <div className="truncate flex-1">
                        <span className="text-[7.5px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">{top.module}</span>
                        <span className="truncate block font-bold text-slate-850 dark:text-slate-100 leading-snug">{top.title}</span>
                        <span className="text-[7px] font-bold text-slate-400 block mt-0.5">Last reviewed: {currentData.date}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => {
                            const nextLevel = currentData.level === "low" ? "medium" : currentData.level === "medium" ? "high" : "low";
                            const dateStr = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
                            setSpacedRepetitionData(prev => ({
                              ...prev,
                              [top.id]: { level: nextLevel, date: dateStr }
                            }));
                            triggerNotification(`Topic updated: ${nextLevel === "high" ? "Mastered!" : "Review scheduled."}`);
                          }}
                          className={`px-2 py-0.5 rounded-lg border text-[8px] font-black uppercase tracking-wider transition-all cursor-pointer ${badgeColor}`}
                        >
                          {badgeLabel}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Study Notepad Tab Panel */}
          {studyConsoleTab === "notepad" && (
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[9px] font-bold text-slate-400 px-1 pb-1 border-b border-slate-100 dark:border-slate-850">
                <span>Private Study Scratchpad</span>
                <span className="text-violet-500 font-bold uppercase tracking-wider">{wordCount} Words</span>
              </div>
              <textarea
                value={notepadText}
                onChange={(e) => handleNotepadSave(e.target.value)}
                placeholder="Type formulas, ESE concepts, series syllabus points, or custom logs here. Draft auto-saves in browser local storage..."
                className="w-full bg-slate-950/[0.02] dark:bg-white/[0.015] border border-slate-200 dark:border-slate-800 rounded-2xl p-3 px-3.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-violet-500/20 text-slate-850 dark:text-slate-100 placeholder-slate-500 min-h-[140px] resize-none"
              />
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-black text-slate-450 uppercase tracking-widest flex items-center gap-1">
                  {notepadSaved ? (
                    <span className="text-emerald-500 animate-pulse">Saved draft successfully! 💾</span>
                  ) : (
                    <span>Auto-saving enabled 🛡️</span>
                  )}
                </span>
                <button
                  onClick={handleDownloadNotes}
                  className="px-2.5 py-1 bg-violet-500/10 hover:bg-violet-500/15 border border-violet-500/15 text-violet-650 dark:text-violet-400 rounded-lg text-[8.5px] font-black uppercase tracking-wider transition-all cursor-pointer"
                >
                  Download .txt Notes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // 4. KTU Lightning Micro-Tools Sandbox Deck (24-in-1 Premium Suite)
  const renderMicroToolsDeck = () => {
    // 24 micro-tools deck directory metadata
    const MICRO_TOOLS = [
      { id: "bunk_master", title: "The Bunk Master (Attendance Cushion)", category: "internals", desc: "Tells you how many classes you can miss, or how many you must attend to hit the 75% limit." },
      { id: "att_predictor", title: "KTU Attendance Marks Predictor", category: "internals", desc: "Maps your attendance percentage directly to official KTU internal mark slots (out of 5)." },
      { id: "internals_aggregator", title: "Internal Marks Aggregator (50-Mark Split)", category: "internals", desc: "Combines Series exams, assignments, and attendance into a single score out of 50." },
      { id: "damage_control", title: "Series 2 Damage Control Margin", category: "internals", desc: "Calculates the exact Series 2 score required to salvage your internal marks." },
      
      { id: "ese_finder", title: "ESE Target Finder (Pass/Grade Map)", category: "exams", desc: "Calculates the exact university exam score needed to pass or hit a target grade." },
      { id: "exam_pacer", title: "3-Hour Exam Pacer (Time Budget)", category: "exams", desc: "Provides a systematic 180-minute time budget to ensure all questions get answered." },
      { id: "module_weightage", title: "Module Weightage Risk Calculator", category: "exams", desc: "Evaluates your highest reachable exam score based on modules prepared." },
      { id: "grace_optimizer", title: "Grace Mark Optimization Matrix", category: "exams", desc: "Distributes extra-curricular grace marks (NSS/NCC) to maximize passes." },
      
      { id: "year_back_check", title: "Year-Back Credit Lock Preventive Check", category: "credits", desc: "Warns if you are at risk of a year-back promotion lock based on accumulated credits." },
      { id: "honours_minor", title: "Honours / Minor Eligibility Validator", category: "credits", desc: "Determines if your CGPA and backlog history qualify for Honours or Minors." },
      { id: "improvement_eligibility", title: "Internal Improvement Eligibility Scanner", category: "credits", desc: "Checks if you are allowed to improve internals for a failed course under regulations." },
      { id: "supple_debt", title: "Supplementary Exam Debt Tracker", category: "credits", desc: "Private ledger computing the monetary and credit impact of outstanding backlogs." },
      
      { id: "lab_aggregator", title: "Lab Internal Score Aggregator", category: "labs", desc: "Compiles continuous lab records, viva, and internal practical scores out of 75." },
      { id: "project_splitter", title: "Mini-Project / Main-Project Weightage Splitter", category: "labs", desc: "Breaks down project assessment rubrics across supervisor and committee marks." },
      { id: "seminar_breakdown", title: "Seminar Assessment Breakdown Tool", category: "labs", desc: "Evaluates technical seminar standing based on report, presentation, and viva." },
      
      { id: "course_decrypter", title: "KTU Course Code Decrypter", category: "hacks", desc: "Instantly decodes department, course type, and year level from a course code." },
      { id: "gpa_converter", title: "Global 4-Point GPA Converter", category: "hacks", desc: "Translates standard 10-point KTU scale metrics to the US 4.0 GPA scale." },
      { id: "cgpa_forecaster", title: "CGPA Maintenance Forecaster", category: "hacks", desc: "Calculates the exact SGPA needed in future semesters to reach a target CGPA." },
      { id: "cram_planner", title: "The 11th Hour Cram Planner", category: "hacks", desc: "Generates a realistic, time-blocked study schedule for night-before crams." },
      { id: "whatsapp_generator", title: "Mass-Bunk WhatsApp Broadcast", category: "hacks", desc: "Generates a copy-paste ready message to coordinate class-wide skipping." },
      { id: "exam_checklist", title: "Exam Hall Blueprint Checklist", category: "hacks", desc: "Digital checklist for hall ticket, ID card, and approved calculator models." },
      { id: "reval_gamble", title: "Revaluation Gamble Calculator", category: "hacks", desc: "Weighs whether paying the revaluation fee is a mathematically sound decision." },
      { id: "syllabus_tracker", title: "Syllabus Milestone Tracker", category: "hacks", desc: "A simple checkbox progress tracker for core subjects' modules." },
      { id: "countdown_dashboard", title: "Semester Countdown Dashboard", category: "hacks", desc: "Crisp monospaced live countdown tracking upcoming academic milestones." }
    ];

    // Filter tools based on search query or category
    const searchLower = mtSearchQuery.toLowerCase().trim();
    const filteredTools = searchLower
      ? MICRO_TOOLS.filter(t => t.title.toLowerCase().includes(searchLower) || t.desc.toLowerCase().includes(searchLower))
      : MICRO_TOOLS.filter(t => t.category === mtActiveCategory);

    // Categories details for layout tabs
    const categoriesList = [
      { id: "internals", label: "Attendance & CIE", count: 4 },
      { id: "exams", label: "End-Sem Strategy", count: 4 },
      { id: "credits", label: "Credits & Promotion", count: 4 },
      { id: "labs", label: "Labs & Projects", count: 3 },
      { id: "hacks", label: "Survival Hacks", count: 9 }
    ] as const;

    // --- PRE-COMPUTE TOOL METRICS FOR STATE ACCORDION BADGES ---
    const getToolBadge = (toolId: string) => {
      switch (toolId) {
        case "bunk_master": {
          const Hc = Math.max(1, mtBunkHc);
          const Ha = Math.min(Hc, mtBunkHa);
          const pct = (Ha / Hc) * 100;
          if (pct >= 75) {
            const maxBunks = Math.floor((Ha - 0.75 * Hc) / 0.75);
            return `${maxBunks} Bunks Safe`;
          } else {
            const streak = Math.ceil((0.75 * Hc - Ha) / 0.25);
            return `${streak} streak required`;
          }
        }
        case "att_predictor": {
          const pct = mtAttPct;
          let m = 0;
          if (pct >= 90) m = 5;
          else if (pct >= 85) m = 4;
          else if (pct >= 80) m = 3;
          else if (pct >= 75) m = 2;
          return `${m} Marks / 5`;
        }
        case "internals_aggregator": {
          const cie = Math.min(50, ((mtAggSeries1 + mtAggSeries2) / 2 * 0.7) + mtAggAssg + mtAggAtt);
          return `${cie.toFixed(1)} / 50 Marks`;
        }
        case "damage_control": {
          const needed = ((mtDmgTarget - mtDmgAssgAtt) / 0.7) * 2 - mtDmgSeries1;
          const impossible = needed > 50;
          const safe = needed <= 0;
          return impossible ? "🚩 Unreachable" : safe ? "✅ Already Safe" : `Need ${Math.ceil(needed)}/50`;
        }
        case "ese_finder": {
          const boundaries: Record<string, number> = { S: 90, "A+": 85, A: 80, "B+": 70, B: 60, C: 50, P: 45 };
          const limit = boundaries[mtEseGrade] || 45;
          let req = (limit - mtEseInt) * 2;
          const impossible = req > 100;
          if (!impossible) req = Math.max(40, req);
          return impossible ? "🚩 Impossible" : `Need ${Math.ceil(req)}/100`;
        }
        case "exam_pacer":
          return "3-Hour Budget";
        case "module_weightage": {
          const count = Object.values(mtRiskModules).filter(Boolean).length;
          return `${count * 20} Marks Reachable`;
        }
        case "grace_optimizer": {
          let grace = mtGracePool;
          let passedCount = 0;
          // Greedy check pass
          const sorted = [...mtGraceMarks].sort((a, b) => b - a);
          sorted.forEach(m => {
            if (m >= 40) passedCount++;
            else {
              const diff = 40 - m;
              if (grace >= diff) {
                grace -= diff;
                passedCount++;
              }
            }
          });
          return `${passedCount} Passes Secured`;
        }
        case "year_back_check": {
          const limit = mtYbSlot === "s5" ? 26 : 52;
          const pass = mtYbCredits >= limit;
          return pass ? "✅ Clear" : "🚩 Lock Alert";
        }
        case "honours_minor": {
          const hPass = mtEligCgpa >= 8.5 && !mtEligBacklog;
          const mPass = mtEligCgpa >= 7.5 && !mtEligBacklog;
          const pass = mtEligType === "honours" ? hPass : mPass;
          return pass ? "🏆 Eligible" : "❌ Ineligible";
        }
        case "improvement_eligibility": {
          const elig = mtImpAtt === "regular" && mtImpCie < 23 && mtImpStatus === "supple";
          return elig ? "✅ Eligible" : "❌ Ineligible";
        }
        case "supple_debt":
          return `Cost: ₹${mtDebtBacklogs * 500}`;
        case "lab_aggregator": {
          const sum = mtLabCont + mtLabViva + mtLabExam;
          return `${sum} / 75 CIE`;
        }
        case "project_splitter":
          return `${mtProjGuide + mtProjCommittee + mtProjReport} / 100`;
        case "seminar_breakdown":
          return `${mtSemPres + mtSemRep + mtSemDef} / 100`;
        case "course_decrypter": {
          const codeUpper = mtDecryptCode.toUpperCase().trim();
          const deptMatch = codeUpper.match(/^([A-Z]{2,3})/);
          return deptMatch ? `Dept: ${deptMatch[1]}` : "Awaiting Code";
        }
        case "gpa_converter": {
          const convertedVal = (mtUsGpa10 / 10) * 4;
          return `US GPA: ${convertedVal.toFixed(2)}`;
        }
        case "cgpa_forecaster": {
          const remSems = 8 - mtForeSems;
          const totalPts = 8 * mtForeTarget;
          const curPts = mtForeCurrent * mtForeSems;
          const needSgpa = remSems > 0 ? (totalPts - curPts) / remSems : 0;
          return needSgpa > 10 ? "🚩 Impossible" : needSgpa <= 4 ? "✅ Safe Zone" : `Need SGPA: ${needSgpa.toFixed(2)}`;
        }
        case "cram_planner": {
          const hours = Math.max(0, mtCramHours - 2);
          const time = mtCramModules > 0 ? hours / mtCramModules : 0;
          return `${time.toFixed(1)} hr / module`;
        }
        case "whatsapp_generator":
          return "Broadcast ready";
        case "exam_checklist":
          return "Checklist ready";
        case "reval_gamble": {
          const CIE = mtRevalCie;
          let gambleStatus = "Risky Gamble ⚠️";
          if (mtRevalGrade === "F") {
            if (CIE >= 22 && mtRevalExpected === "Excellent") gambleStatus = "High Chance 🚀";
            else if (CIE >= 18 && mtRevalExpected === "Excellent") gambleStatus = "Moderate ⚖️";
          } else {
            if (mtRevalExpected === "Excellent") gambleStatus = "Moderate ⚖️";
          }
          return gambleStatus;
        }
        case "syllabus_tracker": {
          const values = Object.values(mtMilestones);
          let checkedTotal = 0;
          values.forEach(v => { checkedTotal += v.filter(Boolean).length; });
          return `${checkedTotal} Modules Done`;
        }
        case "countdown_dashboard": {
          const diff = Math.max(0, new Date(mtCountdownTarget).getTime() - new Date().getTime());
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          return `${days} Days Left`;
        }
        default:
          return "";
      }
    };

    return (
      <div className="bg-[#0A0A0C] border border-white/[0.08] shadow-2xl rounded-[28px] p-6 relative overflow-hidden text-slate-100 space-y-5">
        {/* Colorful visual backdrop highlights */}
        <div className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full bg-violet-500/[0.03] blur-[50px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full bg-blue-500/[0.03] blur-[50px] pointer-events-none" />

        {/* Section Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
              <Sparkles className="w-5.5 h-5.5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-black text-slate-50 text-base leading-none tracking-tight">KTU Lightning Micro-Tools</h3>
              <span className="text-[10px] font-bold text-slate-400 block mt-1.5">24 instant, high-utility student sandboxes</span>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-3">
          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 Search all 24 tools (e.g. Bunk, Series, Decrypter)..."
              value={mtSearchQuery}
              onChange={(e) => setMtSearchQuery(e.target.value)}
              className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-4 py-2 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-violet-500/40 text-slate-200 placeholder-slate-500"
            />
            {mtSearchQuery && (
              <button
                onClick={() => setMtSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] font-black text-slate-400 hover:text-white uppercase tracking-wider cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Categories Tab Selector (Visible only if not searching) */}
          {!mtSearchQuery && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none scroll-smooth">
              {categoriesList.map((cat) => {
                const isActive = mtActiveCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setMtActiveCategory(cat.id);
                      // Auto expand the first tool of that category
                      const firstOfCat = MICRO_TOOLS.find(t => t.category === cat.id);
                      if (firstOfCat) setMtExpandedTool(firstOfCat.id);
                    }}
                    className={`px-3 py-1.5 rounded-xl border text-[9.5px] font-black uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                      isActive
                        ? "bg-violet-500/10 text-violet-400 border-violet-500/20"
                        : "bg-transparent text-slate-400 border-white/[0.04] hover:bg-white/[0.02]"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Tools Scrollable Sandbox Deck */}
        <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1 scrollbar-thin">
          {filteredTools.length === 0 ? (
            <div className="text-[10px] font-bold text-slate-500 text-center py-10">
              No matching micro-tools found. Try another query.
            </div>
          ) : (
            filteredTools.map((tool) => {
              const isExpanded = mtExpandedTool === tool.id;
              const badgeText = getToolBadge(tool.id);

              return (
                <div
                  key={tool.id}
                  className={`bg-[#0E0E10] border rounded-2xl transition-all duration-300 ${
                    isExpanded ? "border-violet-500/30 shadow-lg shadow-violet-500/[0.02]" : "border-white/[0.05]"
                  }`}
                >
                  {/* Accordion header button */}
                  <button
                    onClick={() => setMtExpandedTool(isExpanded ? null : tool.id)}
                    className="w-full flex items-center justify-between p-3.5 text-left cursor-pointer hover:bg-white/[0.01] rounded-t-2xl"
                  >
                    <div className="flex flex-col pr-3 max-w-[70%]">
                      <span className="text-xs font-black text-slate-100 tracking-tight leading-none block">{tool.title}</span>
                      <span className="text-[8px] font-semibold text-slate-450 block mt-1.5 truncate leading-none">{tool.desc}</span>
                    </div>

                    {/* Right side status badge and arrow */}
                    <div className="flex items-center gap-2 shrink-0">
                      {badgeText && (
                        <span className={`px-2 py-0.5 rounded-lg text-[8px] font-black uppercase tracking-wider shrink-0 border ${
                          badgeText.includes("🚩") || badgeText.includes("detained") || badgeText.includes("risk") || badgeText.includes("Ineligible")
                            ? "bg-rose-500/10 text-rose-400 border-rose-500/10 animate-pulse"
                            : badgeText.includes("✅") || badgeText.includes("🏆") || badgeText.includes("Safe") || badgeText.includes("Pass") || badgeText.includes("Clear")
                            ? "bg-emerald-500/10 text-emerald-450 border-emerald-500/10"
                            : "bg-blue-500/10 text-blue-400 border-blue-500/10"
                        }`}>
                          {badgeText}
                        </span>
                      )}
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {/* Accordion content body */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isExpanded ? "max-h-[380px] p-3.5 pt-0 border-t border-white/[0.03]" : "max-h-0"
                    }`}
                  >
                    <div className="pt-3.5 text-[10px] font-semibold text-slate-300 space-y-4">
                      
                      {/* TOOL 1: THE BUNK MASTER */}
                      {tool.id === "bunk_master" && (
                        <div className="space-y-3.5">
                          <div className="grid grid-cols-2 gap-x-6 px-2">
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Hours Conducted</label>
                              <div className="flex items-center gap-3">
                                <input
                                  type="range"
                                  min="1"
                                  max="120"
                                  value={mtBunkHc}
                                  onChange={(e) => setMtBunkHc(Number(e.target.value))}
                                  className="w-full accent-violet-500"
                                />
                                <span className="text-slate-100 font-bold tabular-nums shrink-0 w-6 text-right">{mtBunkHc}</span>
                              </div>
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Hours Attended</label>
                              <div className="flex items-center gap-3">
                                <input
                                  type="range"
                                  min="0"
                                  max={mtBunkHc}
                                  value={mtBunkHa}
                                  onChange={(e) => setMtBunkHa(Number(e.target.value))}
                                  className="w-full accent-violet-500"
                                />
                                <span className="text-slate-100 font-bold tabular-nums shrink-0 w-6 text-right">{mtBunkHa}</span>
                              </div>
                            </div>
                          </div>

                          {(() => {
                            const Hc = Math.max(1, mtBunkHc);
                            const Ha = Math.min(Hc, mtBunkHa);
                            const pct = (Ha / Hc) * 100;
                            const isSafe = pct >= 75;
                            
                            return (
                              <div className={`p-3.5 rounded-xl border text-center space-y-1.5 ${
                                isSafe
                                  ? "bg-emerald-500/[0.02] border-emerald-500/15 text-emerald-450"
                                  : "bg-rose-500/[0.02] border-rose-500/15 text-rose-400"
                              }`}>
                                <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none">Attendance Runway</div>
                                <div className="text-xl font-black leading-none py-1">
                                  {isSafe
                                    ? `${Math.floor((Ha - 0.75 * Hc) / 0.75)} Bunks Safe 🟢`
                                    : `Streak of ${Math.ceil((0.75 * Hc - Ha) / 0.25)} Required 🔴`}
                                </div>
                                <div className="text-[9.5px] font-semibold text-slate-400">
                                  Current rate: <strong className="text-slate-200 tabular-nums">{pct.toFixed(1)}%</strong>. Limit is 75.0%.
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      )}

                      {/* TOOL 2: KTU ATTENDANCE MARKS PREDICTOR */}
                      {tool.id === "att_predictor" && (
                        <div className="space-y-3.5">
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-wider text-slate-400">
                              <span>Attendance Percentage</span>
                              <span className="text-slate-200 tabular-nums text-xs">{mtAttPct}%</span>
                            </div>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={mtAttPct}
                              onChange={(e) => setMtAttPct(Number(e.target.value))}
                              className="w-full accent-violet-500"
                            />
                          </div>

                          <div className="grid grid-cols-5 gap-1.5 text-center">
                            {[
                              { label: "P < 75%", val: 0, text: "0m" },
                              { label: "75-79%", val: 2, text: "2m" },
                              { label: "80-84%", val: 3, text: "3m" },
                              { label: "85-89%", val: 4, text: "4m" },
                              { label: ">= 90%", val: 5, text: "5m" }
                            ].map((tier, idx) => {
                              let active = false;
                              if (idx === 0 && mtAttPct < 75) active = true;
                              else if (idx === 1 && mtAttPct >= 75 && mtAttPct < 80) active = true;
                              else if (idx === 2 && mtAttPct >= 80 && mtAttPct < 85) active = true;
                              else if (idx === 3 && mtAttPct >= 85 && mtAttPct < 90) active = true;
                              else if (idx === 4 && mtAttPct >= 90) active = true;

                              return (
                                <div
                                  key={idx}
                                  className={`p-2 rounded-xl border text-[8px] font-black transition-all ${
                                    active
                                      ? "bg-violet-500/10 text-violet-400 border-violet-500/20 shadow-md shadow-violet-500/[0.04]"
                                      : "bg-[#121215] text-slate-500 border-white/[0.02]"
                                  }`}
                                >
                                  <div className="opacity-80 block truncate leading-none mb-1">{tier.label}</div>
                                  <div className="text-xs font-black leading-none">{tier.text}</div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* TOOL 3: INTERNAL MARKS AGGREGATOR */}
                      {tool.id === "internals_aggregator" && (
                        <div className="space-y-3.5">
                          <div className="grid grid-cols-2 gap-3.5">
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Series 1 Score (max 50)</label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="range"
                                  min="0"
                                  max="50"
                                  value={mtAggSeries1}
                                  onChange={(e) => setMtAggSeries1(Number(e.target.value))}
                                  className="w-full accent-violet-500"
                                />
                                <span className="text-slate-100 font-bold tabular-nums shrink-0 w-5 text-right">{mtAggSeries1}</span>
                              </div>
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Series 2 Score (max 50)</label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="range"
                                  min="0"
                                  max="50"
                                  value={mtAggSeries2}
                                  onChange={(e) => setMtAggSeries2(Number(e.target.value))}
                                  className="w-full accent-violet-500"
                                />
                                <span className="text-slate-100 font-bold tabular-nums shrink-0 w-5 text-right">{mtAggSeries2}</span>
                              </div>
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Assignments (max 10)</label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="range"
                                  min="0"
                                  max="10"
                                  value={mtAggAssg}
                                  onChange={(e) => setMtAggAssg(Number(e.target.value))}
                                  className="w-full accent-violet-500"
                                />
                                <span className="text-slate-100 font-bold tabular-nums shrink-0 w-5 text-right">{mtAggAssg}</span>
                              </div>
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Attendance Marks (max 5)</label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="range"
                                  min="0"
                                  max="5"
                                  value={mtAggAtt}
                                  onChange={(e) => setMtAggAtt(Number(e.target.value))}
                                  className="w-full accent-violet-500"
                                />
                                <span className="text-slate-100 font-bold tabular-nums shrink-0 w-5 text-right">{mtAggAtt}</span>
                              </div>
                            </div>
                          </div>

                          {(() => {
                            const totalCie = Math.min(50, ((mtAggSeries1 + mtAggSeries2) / 2 * 0.7) + mtAggAssg + mtAggAtt);
                            return (
                              <div className="p-3.5 rounded-xl border border-white/[0.04] bg-[#121215] text-center space-y-1">
                                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Aggregated CIE Score</div>
                                <div className="text-xl font-black text-violet-400 leading-none">{totalCie.toFixed(1)} / 50 Marks</div>
                                <div className="text-[8.5px] font-semibold text-slate-400 mt-1">
                                  Math: (({mtAggSeries1} + {mtAggSeries2}) / 2 × 0.7) + {mtAggAssg} + {mtAggAtt}
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      )}

                      {/* TOOL 4: SERIES 2 DAMAGE CONTROL MARGIN */}
                      {tool.id === "damage_control" && (
                        <div className="space-y-3.5">
                          <div className="grid grid-cols-3 gap-3.5">
                            <div className="space-y-1.5 col-span-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase tracking-wider block">Series 1 (max 50)</label>
                              <div className="flex items-center gap-1.5">
                                <input
                                  type="number"
                                  min="0"
                                  max="50"
                                  value={mtDmgSeries1}
                                  onChange={(e) => setMtDmgSeries1(Math.min(50, Number(e.target.value)))}
                                  className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2.5 py-1 text-center font-bold text-xs"
                                />
                              </div>
                            </div>
                            <div className="space-y-1.5 col-span-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase tracking-wider block">Target (out of 50)</label>
                              <div className="flex items-center gap-1.5">
                                <input
                                  type="number"
                                  min="0"
                                  max="50"
                                  value={mtDmgTarget}
                                  onChange={(e) => setMtDmgTarget(Math.min(50, Number(e.target.value)))}
                                  className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2.5 py-1 text-center font-bold text-xs"
                                />
                              </div>
                            </div>
                            <div className="space-y-1.5 col-span-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase tracking-wider block">Assg + Attendance</label>
                              <div className="flex items-center gap-1.5">
                                <input
                                  type="number"
                                  min="0"
                                  max="15"
                                  value={mtDmgAssgAtt}
                                  onChange={(e) => setMtDmgAssgAtt(Math.min(15, Number(e.target.value)))}
                                  className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2.5 py-1 text-center font-bold text-xs"
                                />
                              </div>
                            </div>
                          </div>

                          {(() => {
                            const needed = ((mtDmgTarget - mtDmgAssgAtt) / 0.7) * 2 - mtDmgSeries1;
                            const impossible = needed > 50;
                            const safe = needed <= 0;
                            
                            let dialLabel = "Easy Grind 🤝";
                            let dialColor = "text-emerald-450 border-emerald-500/10";
                            
                            if (impossible) {
                              dialLabel = "Out of Reach 🚩";
                              dialColor = "text-rose-450 border-rose-500/10 bg-rose-500/[0.01]";
                            } else if (needed > 35) {
                              dialLabel = "Hard Grind 🔥";
                              dialColor = "text-amber-450 border-amber-500/10 bg-amber-500/[0.01]";
                            } else if (safe) {
                              dialLabel = "Already Safe! 🎉";
                              dialColor = "text-emerald-450 border-emerald-500/10";
                            }

                            return (
                              <div className={`p-3.5 rounded-xl border text-center space-y-1.5 ${dialColor}`}>
                                <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none">Series 2 Needed Score</div>
                                <div className="text-xl font-black leading-none py-1">
                                  {impossible ? "Mathematically Unreachable" : safe ? "0 / 50 (You are safe)" : `${Math.ceil(needed)} / 50`}
                                </div>
                                <div className="text-[9.5px] font-semibold text-slate-400">
                                  Target Status: <strong className="text-slate-200">{dialLabel}</strong>
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      )}

                      {/* TOOL 5: ESE TARGET FINDER */}
                      {tool.id === "ese_finder" && (
                        <div className="space-y-3.5">
                          <div className="grid grid-cols-2 gap-3.5">
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">CIE Internal Marks (max 50)</label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="range"
                                  min="0"
                                  max="50"
                                  value={mtEseInt}
                                  onChange={(e) => setMtEseInt(Number(e.target.value))}
                                  className="w-full accent-violet-500"
                                />
                                <span className="text-slate-100 font-bold tabular-nums shrink-0 w-5 text-right">{mtEseInt}</span>
                              </div>
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Target Grade</label>
                              <div className="grid grid-cols-7 gap-1">
                                {["S", "A+", "A", "B+", "B", "C", "P"].map((g) => (
                                  <button
                                    key={g}
                                    onClick={() => setMtEseGrade(g)}
                                    className={`p-1 rounded text-[8px] font-black cursor-pointer transition-all ${
                                      mtEseGrade === g
                                        ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                                        : "bg-[#121215] text-slate-500 border border-white/[0.02]"
                                    }`}
                                  >
                                    {g}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>

                          {(() => {
                            const boundaries: Record<string, number> = { S: 90, "A+": 85, A: 80, "B+": 70, B: 60, C: 50, P: 45 };
                            const limit = boundaries[mtEseGrade] || 45;
                            let req = 1.5 * limit - mtEseInt;
                            const impossible = req > 100;
                            if (!impossible) req = Math.max(40, Math.ceil(req));

                            return (
                              <div className={`p-3.5 rounded-xl border text-center ${
                                impossible
                                  ? "bg-rose-500/[0.01] border-rose-500/10 text-rose-450"
                                  : "bg-[#121215] border-white/[0.04] text-violet-400"
                              }`}>
                                <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none">University ESE Pass Target</div>
                                <div className="text-xl font-black leading-none py-1">
                                  {impossible ? "Out of Range (Need > 100)" : `Needed ESE: ${Math.ceil(req)} / 100`}
                                </div>
                                <div className="text-[9.5px] font-semibold text-slate-400 mt-1">
                                  Grade {mtEseGrade} requires an aggregate score of {limit}%. ESE has strict 40/100 pass floor.
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      )}

                      {/* TOOL 6: 3-HOUR EXAM PACER */}
                      {tool.id === "exam_pacer" && (
                        <div className="space-y-3.5">
                          <div className="flex gap-2">
                            <button
                              onClick={() => setMtPacerScheme("abc")}
                              className={`flex-1 py-1.5 rounded-xl border text-[9px] font-black uppercase tracking-wider cursor-pointer ${
                                mtPacerScheme === "abc"
                                  ? "bg-violet-500/20 text-violet-450 border-violet-500/20"
                                  : "bg-[#121215] text-slate-500 border-white/[0.02]"
                              }`}
                            >
                              Scheme A (Part A + B + C)
                            </button>
                            <button
                              onClick={() => setMtPacerScheme("ab")}
                              className={`flex-1 py-1.5 rounded-xl border text-[9px] font-black uppercase tracking-wider cursor-pointer ${
                                mtPacerScheme === "ab"
                                  ? "bg-violet-500/20 text-violet-450 border-violet-500/20"
                                  : "bg-[#121215] text-slate-500 border-white/[0.02]"
                              }`}
                            >
                              Scheme B (Part A + B)
                            </button>
                          </div>

                          <div className="p-3 bg-[#121215] rounded-2xl border border-white/[0.04] space-y-2.5">
                            <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider block">Systematic Time Allocation</span>
                            {mtPacerScheme === "abc" ? (
                              <div className="space-y-1.5 font-bold text-[9.5px]">
                                <div className="flex justify-between border-b border-white/[0.02] pb-1">
                                  <span>Part A (Short 3m Questions × 8)</span>
                                  <span className="text-violet-400">30 mins (3.5m / qn)</span>
                                </div>
                                <div className="flex justify-between border-b border-white/[0.02] pb-1">
                                  <span>Part B (Concept 3m Questions × 8)</span>
                                  <span className="text-violet-400">30 mins (3.5m / qn)</span>
                                </div>
                                <div className="flex justify-between border-b border-white/[0.02] pb-1">
                                  <span>Part C (Long Essay 13m Questions × 4)</span>
                                  <span className="text-violet-400">100 mins (25m / qn)</span>
                                </div>
                                <div className="flex justify-between text-emerald-450">
                                  <span>Revision, Checking & Margin Buffer</span>
                                  <span>20 mins left</span>
                                </div>
                              </div>
                            ) : (
                              <div className="space-y-1.5 font-bold text-[9.5px]">
                                <div className="flex justify-between border-b border-white/[0.02] pb-1">
                                  <span>Part A (Basic 3m Questions × 10)</span>
                                  <span className="text-violet-400">40 mins (4m / qn)</span>
                                </div>
                                <div className="flex justify-between border-b border-white/[0.02] pb-1">
                                  <span>Part B (Heavy 14m Questions × 5)</span>
                                  <span className="text-violet-400">120 mins (24m / qn)</span>
                                </div>
                                <div className="flex justify-between text-emerald-450">
                                  <span>Review & Final Equation Check</span>
                                  <span>20 mins left</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* TOOL 7: MODULE WEIGHTAGE RISK CALCULATOR */}
                      {tool.id === "module_weightage" && (
                        <div className="space-y-3.5">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Check modules fully mastered</label>
                          <div className="grid grid-cols-5 gap-2">
                            {[1, 2, 3, 4, 5].map((mod) => {
                              const active = !!mtRiskModules[mod];
                              return (
                                <button
                                  key={mod}
                                  onClick={() => setMtRiskModules(prev => ({ ...prev, [mod]: !prev[mod] }))}
                                  className={`p-2.5 rounded-xl border font-black text-center cursor-pointer transition-all flex flex-col items-center gap-1.5 ${
                                    active
                                      ? "bg-violet-500/10 text-violet-400 border-violet-500/25"
                                      : "bg-[#121215] text-slate-500 border-white/[0.02]"
                                  }`}
                                >
                                  <span className="text-[8px] opacity-75 leading-none">MOD</span>
                                  <span className="text-sm leading-none">{mod}</span>
                                </button>
                              );
                            })}
                          </div>

                          {(() => {
                            const count = Object.values(mtRiskModules).filter(Boolean).length;
                            const maxMarks = count * 20;
                            let status = "Critical Risk! 💀";
                            let color = "text-rose-450 border-rose-500/10";
                            
                            if (count === 5) { status = "Master of Syllabus 🎓"; color = "text-emerald-450 border-emerald-500/10"; }
                            else if (count >= 3) { status = "Safe Pass Zone 🛡️"; color = "text-blue-450 border-blue-500/10"; }
                            
                            return (
                              <div className={`p-3.5 rounded-xl border text-center ${color} bg-[#121215]`}>
                                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Max Reachable Marks</div>
                                <div className="text-xl font-black leading-none py-1">{maxMarks} / 100 Marks</div>
                                <div className="text-[9px] font-semibold text-slate-400">
                                  Confidence Index: <strong className="text-slate-200">{status}</strong>
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      )}

                      {/* TOOL 8: GRACE MARK OPTIMIZATION MATRIX */}
                      {tool.id === "grace_optimizer" && (
                        <div className="space-y-3.5">
                          <div className="grid grid-cols-2 gap-3.5">
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Grace Mark Pool</label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="range"
                                  min="0"
                                  max="30"
                                  value={mtGracePool}
                                  onChange={(e) => setMtGracePool(Number(e.target.value))}
                                  className="w-full accent-violet-500"
                                />
                                <span className="text-slate-100 font-bold tabular-nums shrink-0 w-5 text-right">{mtGracePool}</span>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Failing Subject Scores</label>
                              <div className="flex items-center gap-1">
                                {mtGraceMarks.map((m, idx) => (
                                  <input
                                    key={idx}
                                    type="number"
                                    min="0"
                                    max="39"
                                    value={m}
                                    onChange={(e) => {
                                      const updated = [...mtGraceMarks];
                                      updated[idx] = Math.min(39, Number(e.target.value));
                                      setMtGraceMarks(updated);
                                    }}
                                    className="w-full bg-[#121215] border border-white/[0.06] rounded-lg px-1.5 py-0.5 text-center font-bold text-slate-200 text-xs"
                                  />
                                ))}
                              </div>
                            </div>
                          </div>

                          {(() => {
                            let grace = mtGracePool;
                            // Sort failing subject indexes by marks descending (closest to pass mark 40 first)
                            const subjectDetails = mtGraceMarks.map((marks, i) => ({ id: i + 1, original: marks, final: marks, applied: 0, status: "Failed ❌" }));
                            const sorted = [...subjectDetails].sort((a, b) => b.original - a.original);
                            
                            sorted.forEach(sub => {
                              const diff = 40 - sub.original;
                              if (grace >= diff && diff > 0) {
                                grace -= diff;
                                sub.final = 40;
                                sub.applied = diff;
                                sub.status = "Passed (Grace) ✅";
                              }
                            });

                            // Re-sort back by original subject index
                            const output = [...sorted].sort((a, b) => a.id - b.id);

                            return (
                              <div className="p-3 bg-[#121215] rounded-xl border border-white/[0.04] space-y-2 text-[9.5px]">
                                <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider block">Greedy Allocation Pipeline</span>
                                {output.map((sub, idx) => (
                                  <div key={idx} className="flex justify-between border-b border-white/[0.02] pb-1">
                                    <span>Subject #{sub.id} ({sub.original} marks)</span>
                                    <span className="font-bold text-violet-400">
                                      {sub.applied > 0 ? `+${sub.applied} marks` : "0 marks applied"} → {sub.status}
                                    </span>
                                  </div>
                                ))}
                                <div className="text-[8.5px] font-bold text-slate-500 pt-1 flex justify-between">
                                  <span>Unallocated grace pool leftover</span>
                                  <span className="text-emerald-450">{grace} marks remaining</span>
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      )}

                      {/* TOOL 9: YEAR-BACK CREDIT LOCK */}
                      {tool.id === "year_back_check" && (
                        <div className="space-y-3.5">
                          <div className="grid grid-cols-2 gap-3.5">
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Target Promotion</label>
                              <div className="flex gap-2">
                                <button
                                  onClick={() => setMtYbSlot("s5")}
                                  className={`flex-1 py-1 rounded-lg border text-[8.5px] font-black uppercase cursor-pointer ${
                                    mtYbSlot === "s5"
                                      ? "bg-violet-500/20 text-violet-450 border-violet-500/20"
                                      : "bg-[#121215] text-slate-500 border-white/[0.02]"
                                  }`}
                                >
                                  Move to S5
                                </button>
                                <button
                                  onClick={() => setMtYbSlot("s7")}
                                  className={`flex-1 py-1 rounded-lg border text-[8.5px] font-black uppercase cursor-pointer ${
                                    mtYbSlot === "s7"
                                      ? "bg-violet-500/20 text-violet-450 border-violet-500/20"
                                      : "bg-[#121215] text-slate-500 border-white/[0.02]"
                                  }`}
                                >
                                  Move to S7
                                </button>
                              </div>
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Accumulated Credits</label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="range"
                                  min="0"
                                  max="80"
                                  value={mtYbCredits}
                                  onChange={(e) => setMtYbCredits(Number(e.target.value))}
                                  className="w-full accent-violet-500"
                                />
                                <span className="text-slate-100 font-bold tabular-nums shrink-0 w-5 text-right">{mtYbCredits}</span>
                              </div>
                            </div>
                          </div>

                          {(() => {
                            const limit = mtYbSlot === "s5" ? 26 : 52;
                            const clear = mtYbCredits >= limit;
                            return (
                              <div className={`p-3.5 rounded-xl border text-center ${
                                clear
                                  ? "bg-emerald-500/[0.02] border-emerald-500/10 text-emerald-450"
                                  : "bg-rose-500/[0.01] border-rose-500/10 text-rose-450 animate-pulse"
                              }`}>
                                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Promotion Lock Status</div>
                                <div className="text-lg font-black leading-none py-1">
                                  {clear ? "Clear for Promotion ✅" : `Year-Back Credit Lock Risk! 🚩`}
                                </div>
                                <div className="text-[9px] font-semibold text-slate-400 mt-1">
                                  {mtYbSlot === "s5" ? "S5 promotion" : "S7 promotion"} requires minimum <strong className="text-slate-200">{limit} credits</strong>. You are {clear ? "safe" : `${limit - mtYbCredits} credits short`}.
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      )}

                      {/* TOOL 10: HONOURS / MINOR ELIGIBILITY VALIDATOR */}
                      {tool.id === "honours_minor" && (
                        <div className="space-y-3.5">
                          <div className="grid grid-cols-2 gap-3.5">
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Degree Pathway</label>
                              <div className="flex gap-2">
                                <button
                                  onClick={() => setMtEligType("honours")}
                                  className={`flex-1 py-1 rounded-lg border text-[8.5px] font-black uppercase cursor-pointer ${
                                    mtEligType === "honours"
                                      ? "bg-violet-500/20 text-violet-450 border-violet-500/20"
                                      : "bg-[#121215] text-slate-500 border-white/[0.02]"
                                  }`}
                                >
                                  B.Tech Honours
                                </button>
                                <button
                                  onClick={() => setMtEligType("minor")}
                                  className={`flex-1 py-1 rounded-lg border text-[8.5px] font-black uppercase cursor-pointer ${
                                    mtEligType === "minor"
                                      ? "bg-violet-500/20 text-violet-450 border-violet-500/20"
                                      : "bg-[#121215] text-slate-500 border-white/[0.02]"
                                  }`}
                                >
                                  B.Tech Minor
                                </button>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="space-y-1">
                                <label className="text-[8px] font-black text-slate-400 uppercase tracking-wider block">Current CGPA</label>
                                <input
                                  type="number"
                                  min="4.0"
                                  max="10.0"
                                  step="0.01"
                                  value={mtEligCgpa}
                                  onChange={(e) => setMtEligCgpa(Number(e.target.value))}
                                  className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2.5 py-1 text-center font-bold text-xs"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[8px] font-black text-slate-400 uppercase tracking-wider block">Has Backlogs?</label>
                                <button
                                  onClick={() => setMtEligBacklog(!mtEligBacklog)}
                                  className={`w-full py-1.5 rounded-xl border text-[9px] font-black uppercase cursor-pointer transition-all ${
                                    mtEligBacklog
                                      ? "bg-rose-500/10 text-rose-450 border-rose-500/20"
                                      : "bg-emerald-500/10 text-emerald-450 border-emerald-500/20"
                                  }`}
                                >
                                  {mtEligBacklog ? "Yes ❌" : "No ✅"}
                                </button>
                              </div>
                            </div>
                          </div>

                          {(() => {
                            const limit = mtEligType === "honours" ? 8.5 : 7.5;
                            const passCgpa = mtEligCgpa >= limit;
                            const clearBacklog = !mtEligBacklog;
                            const qualified = passCgpa && clearBacklog;

                            return (
                              <div className={`p-3.5 rounded-xl border text-center ${
                                qualified
                                  ? "bg-emerald-500/[0.02] border-emerald-500/10 text-emerald-450"
                                  : "bg-rose-500/[0.01] border-rose-500/10 text-rose-450"
                              }`}>
                                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Enrolment Standing</div>
                                <div className="text-lg font-black leading-none py-1">
                                  {qualified ? "Qualified B.Tech Pathway 🏆" : "Ineligible for Pathway ❌"}
                                </div>
                                <div className="text-[9px] font-semibold text-slate-450">
                                  Requires CGPA &gt;= {limit} (Your CGPA: {mtEligCgpa}) & zero historical backlog record tags.
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      )}

                      {/* TOOL 11: INTERNAL IMPROVEMENT SCENNER */}
                      {tool.id === "improvement_eligibility" && (
                        <div className="space-y-3.5">
                          <div className="grid grid-cols-3 gap-2">
                            <div className="space-y-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase tracking-wider block">Prev Attendance</label>
                              <select
                                value={mtImpAtt}
                                onChange={(e) => setMtImpAtt(e.target.value as typeof mtImpAtt)}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-[9px] font-black"
                              >
                                <option value="regular">Regular (&gt;= 75%)</option>
                                <option value="low">Low (60-74%)</option>
                                <option value="detained">Detained (&lt; 60%)</option>
                              </select>
                            </div>
                            <div className="space-y-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase tracking-wider block">Previous CIE Score</label>
                              <input
                                type="number"
                                min="0"
                                max="50"
                                value={mtImpCie}
                                onChange={(e) => setMtImpCie(Number(e.target.value))}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-center font-bold text-[9px]"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase tracking-wider block">Registration Status</label>
                              <select
                                value={mtImpStatus}
                                onChange={(e) => setMtImpStatus(e.target.value as typeof mtImpStatus)}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-[9px] font-black"
                              >
                                <option value="regular">Regular Subject</option>
                                <option value="supple">Supplementary</option>
                              </select>
                            </div>
                          </div>

                          {(() => {
                            const isElig = mtImpAtt === "regular" && mtImpCie < 23 && mtImpStatus === "supple";
                            return (
                              <div className={`p-3.5 rounded-xl border text-center ${
                                isElig
                                  ? "bg-emerald-500/[0.02] border-emerald-500/10 text-emerald-450"
                                  : "bg-rose-500/[0.01] border-rose-500/10 text-rose-450"
                              }`}>
                                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Internal Re-write Status</div>
                                <div className="text-base font-black leading-none py-1">
                                  {isElig ? "Eligible for Improvement ✅" : "Ineligible under Regulations ❌"}
                                </div>
                                <div className="text-[8.5px] font-semibold text-slate-450 mt-1">
                                  KTU rules state you must have had 75%+ attendance, failed previous exam, and registered as a supple paper to rebuild CIE.
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      )}

                      {/* TOOL 12: SUPPLEMENTARY EXAM DEBT TRACKER */}
                      {tool.id === "supple_debt" && (
                        <div className="space-y-3.5">
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-wider text-slate-400">
                              <span>Active Supplementary Backlogs</span>
                              <span className="text-slate-200 tabular-nums text-xs">{mtDebtBacklogs} Papers</span>
                            </div>
                            <input
                              type="range"
                              min="0"
                              max="10"
                              value={mtDebtBacklogs}
                              onChange={(e) => setMtDebtBacklogs(Number(e.target.value))}
                              className="w-full accent-rose-500"
                            />
                          </div>

                          <div className="p-3 bg-[#121215] rounded-xl border border-white/[0.04] grid grid-cols-3 gap-3 text-center">
                            <div>
                              <span className="text-[7.5px] font-black text-slate-450 uppercase block">Re-exam Fees</span>
                              <span className="text-xs font-black text-rose-450 block mt-1">₹{mtDebtBacklogs * 500}</span>
                            </div>
                            <div>
                              <span className="text-[7.5px] font-black text-slate-450 uppercase block">Credits Locked</span>
                              <span className="text-xs font-black text-rose-450 block mt-1">{mtDebtBacklogs * 4} Cr</span>
                            </div>
                            <div>
                              <span className="text-[7.5px] font-black text-slate-450 uppercase block">Avg Study Cost</span>
                              <span className="text-xs font-black text-rose-450 block mt-1">₹{mtDebtBacklogs * 300}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* TOOL 13: LAB INTERNAL SCORE AGGREGATOR */}
                      {tool.id === "lab_aggregator" && (
                        <div className="space-y-3.5">
                          <div className="grid grid-cols-3 gap-3">
                            <div className="space-y-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase block">Lab Continuous (max 45)</label>
                              <input
                                type="number"
                                min="0"
                                max="45"
                                value={mtLabCont}
                                onChange={(e) => setMtLabCont(Math.min(45, Number(e.target.value)))}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-center font-bold text-xs"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase block">Viva-Voce (max 15)</label>
                              <input
                                type="number"
                                min="0"
                                max="15"
                                value={mtLabViva}
                                onChange={(e) => setMtLabViva(Math.min(15, Number(e.target.value)))}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-center font-bold text-xs"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase block">Internal Exam (max 15)</label>
                              <input
                                type="number"
                                min="0"
                                max="15"
                                value={mtLabExam}
                                onChange={(e) => setMtLabExam(Math.min(15, Number(e.target.value)))}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-center font-bold text-xs"
                              />
                            </div>
                          </div>

                          <div className="p-3 bg-[#121215] rounded-xl border border-white/[0.04] text-center">
                            <div className="text-[9px] font-black text-slate-450 uppercase tracking-widest leading-none">Total Lab CIE</div>
                            <div className="text-lg font-black text-violet-400 mt-1">{mtLabCont + mtLabViva + mtLabExam} / 75 Marks</div>
                          </div>
                        </div>
                      )}

                      {/* TOOL 14: MINI-PROJECT / MAIN-PROJECT WEIGHTAGE SPLITTER */}
                      {tool.id === "project_splitter" && (
                        <div className="space-y-3.5">
                          <div className="grid grid-cols-3 gap-3">
                            <div className="space-y-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase block">Supervisor (max 30)</label>
                              <input
                                type="number"
                                min="0"
                                max="30"
                                value={mtProjGuide}
                                onChange={(e) => setMtProjGuide(Math.min(30, Number(e.target.value)))}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-center font-bold text-xs"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase block">Committee (max 40)</label>
                              <input
                                type="number"
                                min="0"
                                max="40"
                                value={mtProjCommittee}
                                onChange={(e) => setMtProjCommittee(Math.min(40, Number(e.target.value)))}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-center font-bold text-xs"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase block">Report (max 30)</label>
                              <input
                                type="number"
                                min="0"
                                max="30"
                                value={mtProjReport}
                                onChange={(e) => setMtProjReport(Math.min(30, Number(e.target.value)))}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-center font-bold text-xs"
                              />
                            </div>
                          </div>

                          <div className="p-3 bg-[#121215] rounded-xl border border-white/[0.04] text-center">
                            <div className="text-[9px] font-black text-slate-450 uppercase tracking-widest leading-none">Total Project Score</div>
                            <div className="text-lg font-black text-violet-400 mt-1">{mtProjGuide + mtProjCommittee + mtProjReport} / 100 Marks</div>
                          </div>
                        </div>
                      )}

                      {/* TOOL 15: SEMINAR ASSESSMENT BREAKDOWN TOOL */}
                      {tool.id === "seminar_breakdown" && (
                        <div className="space-y-3.5">
                          <div className="grid grid-cols-3 gap-3">
                            <div className="space-y-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase block">Presentation (max 40)</label>
                              <input
                                type="number"
                                min="0"
                                max="40"
                                value={mtSemPres}
                                onChange={(e) => setMtSemPres(Math.min(40, Number(e.target.value)))}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-center font-bold text-xs"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase block">Report Doc (max 30)</label>
                              <input
                                type="number"
                                min="0"
                                max="30"
                                value={mtSemRep}
                                onChange={(e) => setMtSemRep(Math.min(30, Number(e.target.value)))}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-center font-bold text-xs"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase block">Defense/Viva (max 30)</label>
                              <input
                                type="number"
                                min="0"
                                max="30"
                                value={mtSemDef}
                                onChange={(e) => setMtSemDef(Math.min(30, Number(e.target.value)))}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-center font-bold text-xs"
                              />
                            </div>
                          </div>

                          <div className="p-3 bg-[#121215] rounded-xl border border-white/[0.04] text-center">
                            <div className="text-[9px] font-black text-slate-450 uppercase tracking-widest leading-none">Seminar Final Standing</div>
                            <div className="text-lg font-black text-violet-400 mt-1">{mtSemPres + mtSemRep + mtSemDef} / 100 Marks</div>
                          </div>
                        </div>
                      )}

                      {/* TOOL 16: COURSE CODE DECRYPTER */}
                      {tool.id === "course_decrypter" && (
                        <div className="space-y-3.5">
                          <div className="space-y-1">
                            <label className="text-[9px] font-black text-slate-400 uppercase block">Enter Alphanumeric Course Code</label>
                            <input
                              type="text"
                              value={mtDecryptCode}
                              onChange={(e) => setMtDecryptCode(e.target.value)}
                              placeholder="e.g. CST202, ECT301"
                              className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-3 py-2 text-xs font-bold focus:outline-none"
                            />
                          </div>

                          {(() => {
                            const codeUpper = mtDecryptCode.toUpperCase().trim();
                            const deptMatch = codeUpper.match(/^([A-Z]{2,3})/);
                            
                            let dept = "Unknown Department";
                            let year = "Unknown Year";
                            let type = "Theory Course";
                            
                            if (deptMatch) {
                              const prefix = deptMatch[1];
                              const deptMap: Record<string, string> = {
                                CS: "Computer Science & Engineering", CST: "Computer Science (Theory)", CSL: "Computer Science (Lab)",
                                EC: "Electronics & Communication", ECT: "Electronics & Communication (Theory)", ECL: "Electronics & Communication (Lab)",
                                EE: "Electrical & Electronics", EET: "Electrical & Electronics (Theory)", EEL: "Electrical & Electronics (Lab)",
                                ME: "Mechanical Engineering", MET: "Mechanical Engineering (Theory)", MEL: "Mechanical Engineering (Lab)",
                                CE: "Civil Engineering", CET: "Civil Engineering (Theory)", CEL: "Civil Engineering (Lab)",
                                MAT: "Mathematics / Allied Sciences", PHT: "Engineering Physics", CYT: "Engineering Chemistry",
                                EST: "Engineering Sciences (Basic)", HUN: "Humanities / Life Skills", MCN: "Mandatory Non-Credit Course"
                              };
                              dept = deptMap[prefix] || `${prefix} Engineering`;
                              
                              if (prefix.endsWith("L")) type = "Practical Laboratory / Viva";
                              else if (prefix.endsWith("P")) type = "Main Project / Design";
                              else if (prefix.endsWith("S")) type = "Technical Seminar Presentation";
                            }

                             // Match the numeric part (usually 3 digits, e.g. 301, 204)
                             const numMatch = codeUpper.match(/\d+/);
                             if (numMatch) {
                               const numStr = numMatch[0];
                               const firstDigit = Number(numStr[0]);
                               const lastDigit = Number(numStr[numStr.length - 1]);
                               
                               if (firstDigit >= 1 && firstDigit <= 4) {
                                 const isOdd = lastDigit % 2 !== 0;
                                 const exactSem = isOdd ? (2 * firstDigit - 1) : (2 * firstDigit);
                                 const semSuffix = exactSem === 1 ? "st" : exactSem === 2 ? "nd" : exactSem === 3 ? "rd" : "th";
                                 year = `Year ${firstDigit} - Semester ${exactSem}${semSuffix}`;
                               } else {
                                 year = `Level ${firstDigit} Course`;
                               }
                             }

                            return (
                              <div className="p-3 bg-[#121215] rounded-xl border border-white/[0.04] space-y-1.5 text-[9.5px]">
                                <div>Department: <strong className="text-slate-100">{dept}</strong></div>
                                <div>Course Level: <strong className="text-slate-100">{year}</strong></div>
                                <div>Course Type: <strong className="text-slate-100">{type}</strong></div>
                              </div>
                            );
                          })()}
                        </div>
                      )}

                      {/* TOOL 17: GLOBAL 4-POINT GPA CONVERTER */}
                      {tool.id === "gpa_converter" && (
                        <div className="space-y-3.5">
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-wider text-slate-400">
                              <span>Standard 10-Point GPA</span>
                              <span className="text-slate-200 font-bold text-xs">{mtUsGpa10.toFixed(2)}</span>
                            </div>
                            <input
                              type="range"
                              min="4.0"
                              max="10.0"
                              step="0.05"
                              value={mtUsGpa10}
                              onChange={(e) => setMtUsGpa10(Number(e.target.value))}
                              className="w-full accent-violet-500"
                            />
                          </div>

                          <div className="p-3.5 bg-[#121215] rounded-xl border border-white/[0.04] flex items-center justify-between">
                            <div>
                              <span className="text-[8.5px] font-black text-slate-450 uppercase block">US 4.0 GPA Scale Equivalent</span>
                              <span className="text-lg font-black text-emerald-450 block mt-1">{((mtUsGpa10 / 10) * 4).toFixed(3)} / 4.0</span>
                            </div>
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(((mtUsGpa10 / 10) * 4).toFixed(3));
                                triggerNotification("Copied US GPA to clipboard! 📋");
                              }}
                              className="px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[9px] font-black uppercase cursor-pointer hover:bg-violet-500/20"
                            >
                              Copy Result
                            </button>
                          </div>
                        </div>
                      )}

                      {/* TOOL 18: CGPA MAINTENANCE FORECASTER */}
                      {tool.id === "cgpa_forecaster" && (
                        <div className="space-y-3.5">
                          <div className="grid grid-cols-3 gap-3">
                            <div className="space-y-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase block">Current CGPA</label>
                              <input
                                type="number"
                                min="4.0"
                                max="10.0"
                                step="0.01"
                                value={mtForeCurrent}
                                onChange={(e) => setMtForeCurrent(Number(e.target.value))}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-center font-bold text-xs"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase block">Completed Sems</label>
                              <input
                                type="number"
                                min="1"
                                max="7"
                                value={mtForeSems}
                                onChange={(e) => setMtForeSems(Math.min(7, Number(e.target.value)))}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-center font-bold text-xs"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase block">Target CGPA</label>
                              <input
                                type="number"
                                min="4.0"
                                max="10.0"
                                step="0.01"
                                value={mtForeTarget}
                                onChange={(e) => setMtForeTarget(Number(e.target.value))}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-center font-bold text-xs"
                              />
                            </div>
                          </div>

                          {(() => {
                            const remSems = 8 - mtForeSems;
                            const totalPts = 8 * mtForeTarget;
                            const curPts = mtForeCurrent * mtForeSems;
                            const needSgpa = remSems > 0 ? (totalPts - curPts) / remSems : 0;
                            const impossible = needSgpa > 10.0;

                            return (
                              <div className={`p-3 rounded-xl border text-center ${
                                impossible ? "bg-rose-500/[0.01] border-rose-500/10 text-rose-450" : "bg-[#121215] border-white/[0.04] text-violet-400"
                              }`}>
                                <div className="text-[9px] font-black text-slate-450 uppercase tracking-widest leading-none">Required Upcoming SGPA Average</div>
                                <div className="text-lg font-black leading-none py-1">
                                  {impossible ? "Mathematically Impossible" : `${needSgpa.toFixed(2)} SGPA`}
                                </div>
                                <div className="text-[8.5px] font-semibold text-slate-450 mt-1">
                                  You must maintain an average of {needSgpa.toFixed(2)} SGPA over your remaining {remSems} semesters.
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      )}

                      {/* TOOL 19: 11TH HOUR CRAM PLANNER */}
                      {tool.id === "cram_planner" && (
                        <div className="space-y-3.5">
                          <div className="grid grid-cols-2 gap-3.5">
                            <div className="space-y-1">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Hours left before Exam</label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="range"
                                  min="3"
                                  max="24"
                                  value={mtCramHours}
                                  onChange={(e) => setMtCramHours(Number(e.target.value))}
                                  className="w-full accent-violet-500"
                                />
                                <span className="text-slate-100 font-bold tabular-nums shrink-0 w-5 text-right">{mtCramHours}h</span>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Modules remaining</label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="range"
                                  min="1"
                                  max="5"
                                  value={mtCramModules}
                                  onChange={(e) => setMtCramModules(Number(e.target.value))}
                                  className="w-full accent-violet-500"
                                />
                                <span className="text-slate-100 font-bold tabular-nums shrink-0 w-5 text-right">{mtCramModules}</span>
                              </div>
                            </div>
                          </div>

                          {(() => {
                            const netHours = Math.max(0, mtCramHours - 2);
                            const perModule = mtCramModules > 0 ? netHours / mtCramModules : 0;
                            return (
                              <div className="p-3 bg-[#121215] rounded-xl border border-white/[0.04] space-y-2">
                                <div className="text-[9px] font-black text-slate-455 uppercase tracking-widest text-center">Cramming Timeline Checklist</div>
                                <div className="text-xs text-center font-black text-violet-400 py-0.5">
                                  Spend {perModule.toFixed(1)} hours on each of the {mtCramModules} modules
                                </div>
                                <div className="text-[8.5px] font-bold text-slate-450 border-t border-white/[0.02] pt-1.5 flex justify-between">
                                  <span>Deducted sleep & review buffer</span>
                                  <span>2 Hours Buffer Lock 🔒</span>
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      )}

                      {/* TOOL 20: MASS-BUNK WHATSAPP BROADCAST */}
                      {tool.id === "whatsapp_generator" && (
                        <div className="space-y-3.5">
                          <div className="grid grid-cols-3 gap-2">
                            <div className="space-y-1 col-span-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase block">Subject Name</label>
                              <input
                                type="text"
                                value={mtBunkSubject}
                                onChange={(e) => setMtBunkSubject(e.target.value)}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-[10px] font-bold"
                              />
                            </div>
                            <div className="space-y-1 col-span-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase block">Proposed Date</label>
                              <input
                                type="text"
                                value={mtBunkDate}
                                onChange={(e) => setMtBunkDate(e.target.value)}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-[10px] font-bold"
                              />
                            </div>
                            <div className="space-y-1 col-span-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase block">Justification</label>
                              <input
                                type="text"
                                value={mtBunkReason}
                                onChange={(e) => setMtBunkReason(e.target.value)}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-[10px] font-bold"
                              />
                            </div>
                          </div>

                          {(() => {
                            const message = `🚨 *KTU MASS BUNK DECREE* 🚨\n\nAttention Scholars of S${sem} CSE,\n\nTomorrow (${mtBunkDate}), we are executing a strategic collective skip day for ${mtBunkSubject} due to ${mtBunkReason}.\n\nAttendance is a temporary metric, class solidarity is eternal! Let's hit 100% bunk success. ✊🔥\n\n#Solidarity #NoBacklogs`;
                            return (
                              <div className="space-y-2">
                                <div className="p-3 bg-[#0A0A0C] border border-[#25D366]/20 rounded-2xl space-y-1.5">
                                  <span className="text-[8px] font-black text-[#25D366] uppercase block">WhatsApp Preview</span>
                                  <pre className="font-sans text-[9px] text-slate-200 whitespace-pre-wrap select-all leading-normal bg-black/30 p-2 rounded-lg">{message}</pre>
                                </div>
                                <button
                                  onClick={() => {
                                    navigator.clipboard.writeText(message);
                                    triggerNotification("Copied WhatsApp decree to clipboard! ✊🔥");
                                  }}
                                  className="w-full py-1.5 bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] rounded-xl text-[9px] font-black uppercase cursor-pointer hover:bg-[#25D366]/20"
                                >
                                  Copy Bunk Decree Text
                                </button>
                              </div>
                            );
                          })()}
                        </div>
                      )}

                      {/* TOOL 21: EXAM HALL CHECKLIST */}
                      {tool.id === "exam_checklist" && (
                        <div className="space-y-3.5">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Exam Hall Essentials Checklist</label>
                          <div className="grid grid-cols-2 gap-2 text-[9.5px]">
                            {mtHallChecklist.map((item, idx) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  // Simply trigger nice notification confirming item in check
                                  triggerNotification(`Confirmed: ${item}`);
                                }}
                                className="p-2.5 rounded-xl border border-white/[0.04] bg-[#121215] text-left font-bold text-slate-200 hover:border-violet-500/20 cursor-pointer flex items-center gap-2"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                                <span>{item}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* TOOL 22: REVALUATION GAMBLE CALCULATOR */}
                      {tool.id === "reval_gamble" && (
                        <div className="space-y-3.5">
                          <div className="grid grid-cols-3 gap-2">
                            <div className="space-y-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase block">Current Grade</label>
                              <select
                                value={mtRevalGrade}
                                onChange={(e) => setMtRevalGrade(e.target.value)}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-[9px] font-black"
                              >
                                {["F", "P", "C", "B", "B+", "A", "A+", "S"].map(g => (
                                  <option key={g} value={g}>{g} Grade</option>
                                ))}
                              </select>
                            </div>
                            <div className="space-y-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase block">Internal CIE</label>
                              <input
                                type="number"
                                min="0"
                                max="50"
                                value={mtRevalCie}
                                onChange={(e) => setMtRevalCie(Number(e.target.value))}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-center font-bold text-[9px]"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[8px] font-black text-slate-400 uppercase block">ESE Experience</label>
                              <select
                                value={mtRevalExpected}
                                onChange={(e) => setMtRevalExpected(e.target.value)}
                                className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-2 py-1 text-[9px] font-black"
                              >
                                <option value="Poor">Poor / Blanks left</option>
                                <option value="Average">Average / Okay</option>
                                <option value="Excellent">Excellent / High marks</option>
                              </select>
                            </div>
                          </div>

                          {(() => {
                            const CIE = mtRevalCie;
                            let gambleStatus = "Risky Gamble ⚠️ (Waste of ₹600)";
                            let alertColor = "bg-rose-500/[0.01] border-rose-500/10 text-rose-455";
                            
                            if (mtRevalGrade === "F") {
                              if (CIE >= 22 && mtRevalExpected === "Excellent") {
                                gambleStatus = "High Chance 🚀 (Strongly Recommended)";
                                alertColor = "bg-emerald-500/[0.01] border-emerald-500/10 text-emerald-450";
                              } else if (CIE >= 18 && mtRevalExpected === "Excellent") {
                                gambleStatus = "Moderate Gamble ⚖️ (Decent probability)";
                                alertColor = "bg-amber-500/[0.01] border-amber-500/10 text-amber-450";
                              }
                            } else {
                              if (mtRevalExpected === "Excellent") {
                                gambleStatus = "Moderate Gamble ⚖️ (Possible Grade bump)";
                                alertColor = "bg-amber-500/[0.01] border-amber-500/10 text-amber-450";
                              }
                            }

                            return (
                              <div className={`p-3.5 rounded-xl border text-center ${alertColor}`}>
                                <div className="text-[9px] font-black text-slate-450 uppercase tracking-widest leading-none">Revaluation Risk Assessment</div>
                                <div className="text-base font-black leading-none py-1 mt-1">{gambleStatus}</div>
                              </div>
                            );
                          })()}
                        </div>
                      )}

                      {/* TOOL 23: SYLLABUS MILESTONE TRACKER */}
                      {tool.id === "syllabus_tracker" && (
                        <div className="space-y-3.5">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Syllabus Module Toggles</label>
                          <div className="space-y-2.5">
                            {(subjects.length > 0 ? subjects.map(s => s.code) : ["PCCST403", "PCCST402", "PBCST404"]).map((course) => {
                              const list = mtMilestones[course] || [false, false, false, false, false];
                              const checkedCount = list.filter(Boolean).length;
                              
                              return (
                                <div key={course} className="p-2.5 bg-[#121215] border border-white/[0.03] rounded-xl space-y-2">
                                  <div className="flex justify-between items-center text-[9px] font-bold">
                                    <span className="text-slate-100">{course} Progress</span>
                                    <span className="text-violet-400 font-bold uppercase tracking-wider">{checkedCount * 20}% Finished</span>
                                  </div>

                                  <div className="flex gap-1.5">
                                    {list.map((done, idx) => (
                                      <button
                                        key={idx}
                                        onClick={() => {
                                          const updated = [...list];
                                          updated[idx] = !updated[idx];
                                          setMtMilestones(prev => ({ ...prev, [course]: updated }));
                                          triggerNotification(`Toggled Module ${idx+1} for ${course}`);
                                        }}
                                        className={`flex-1 py-1 rounded border text-[8px] font-black cursor-pointer transition-all ${
                                          done
                                            ? "bg-violet-500/20 text-violet-400 border-violet-500/20"
                                            : "bg-[#0A0A0C] text-slate-500 border-white/[0.02]"
                                        }`}
                                      >
                                        M{idx+1}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* TOOL 24: SEMESTER COUNTDOWN DASHBOARD */}
                      {tool.id === "countdown_dashboard" && (
                        <div className="space-y-3.5">
                          <div className="space-y-1">
                            <label className="text-[9px] font-black text-slate-400 uppercase block">Select Target Academic Milestone Date</label>
                            <input
                              type="date"
                              value={mtCountdownTarget}
                              onChange={(e) => setMtCountdownTarget(e.target.value)}
                              className="w-full bg-[#121215] border border-white/[0.06] rounded-xl px-3 py-1.5 text-xs font-bold text-slate-100 focus:outline-none"
                            />
                          </div>

                          {(() => {
                            const diff = Math.max(0, new Date(mtCountdownTarget).getTime() - new Date().getTime());
                            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

                            return (
                              <div className="p-3.5 bg-black/60 rounded-xl border border-white/[0.04] text-center font-mono space-y-1">
                                <div className="text-[9px] font-black text-slate-450 uppercase tracking-widest font-sans leading-none">Days remaining ESE Exam</div>
                                <div className="text-2xl font-black text-emerald-450 tabular-nums leading-none py-1">
                                  {days}d : {hours}h : {minutes}m
                                </div>
                                <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider font-sans leading-none">
                                  Countdown anchor: {mtCountdownTarget}
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
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
      <div className="absolute inset-0 z-0 dot-grid opacity-[0.08] pointer-events-none" />
      <div className="absolute inset-0 z-0 noise-overlay opacity-[0.25] pointer-events-none" />
      <div className="absolute top-[-80px] right-[-80px] w-[700px] h-[700px] rounded-full bg-blue-400/20 dark:bg-blue-500/5 blur-[160px] pointer-events-none z-0 bg-orb-1" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[600px] h-[600px] rounded-full bg-indigo-300/15 dark:bg-indigo-500/5 blur-[140px] pointer-events-none z-0 bg-orb-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-100/40 dark:bg-blue-400/5 blur-[120px] pointer-events-none z-0 bg-orb-3" />

      <Navbar />

      {/* Notification Toast */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-6 left-1/2 z-50 px-5 py-3 rounded-2xl bg-slate-900/90 dark:bg-white/90 text-white dark:text-slate-900 shadow-xl backdrop-blur-md border border-white/10 dark:border-slate-200/20 text-xs font-bold flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-blue-400 dark:text-blue-600 animate-pulse" />
            {showNotification}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-28 flex flex-col z-10 pb-20 space-y-6">
        
        {/* red-glow and blue-glow decoration background spots */}
        <div className="absolute top-10 left-10 w-[240px] h-[240px] rounded-full bg-violet-500/[0.02] blur-[80px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-[240px] h-[240px] rounded-full bg-blue-500/[0.02] blur-[80px] pointer-events-none -z-10" />

        {/* --- PREMIUM COCKPIT TELEMETRY DENSITY HEADER --- */}
        <div className="w-full bg-[#07070A]/80 dark:bg-slate-950/85 backdrop-blur-3xl border border-white/[0.06] dark:border-white/[0.08] rounded-[32px] p-6 shadow-2xl relative overflow-hidden flex flex-col gap-6">
          <div className="absolute top-0 right-0 w-[180px] h-[180px] rounded-full bg-violet-500/[0.03] blur-[40px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-5 border-b border-white/[0.06]">
            {/* Logo Badge & Titles */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-lg text-[9px] font-black tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/15 animate-pulse">
                  APJ AKU Cockpit Terminal v2.5
                </span>
                <span className="text-[10px] font-black text-slate-400">• Dynamic Connected Workspace</span>
              </div>
              <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-slate-50 leading-tight mt-1">
                Academic Command Center
              </h1>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                A premium full-width student terminal designed to structure grades, track lecture streams, manage laboratory checklists, and synthesize concepts.
              </p>
            </div>

            {/* Selector Console */}
            <div className="flex items-center gap-3 bg-white/[0.03] dark:bg-[#121215] p-2.5 rounded-2xl border border-white/[0.04] shrink-0 self-start md:self-auto shadow-inner">
              <div className="flex flex-col">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Active Preset Configuration</span>
                <div className="flex items-center gap-2 mt-1.5">
                  <select
                    value={branch}
                    onChange={(e) => handleBranchSemChange(e.target.value, sem)}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.08] rounded-xl px-2.5 py-1 text-[10px] font-black cursor-pointer text-slate-800 dark:text-slate-100 focus:outline-none"
                  >
                    <option value="cs">Computer Science (CS)</option>
                    <option value="ec">Electronics (EC)</option>
                    <option value="me">Mechanical (ME)</option>
                    <option value="ce">Civil (CE)</option>
                    <option value="ee">Electrical (EE)</option>
                  </select>
                  <select
                    value={sem}
                    onChange={(e) => handleBranchSemChange(branch, Number(e.target.value))}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.08] rounded-xl px-2.5 py-1 text-[10px] font-black cursor-pointer text-slate-800 dark:text-slate-100 focus:outline-none"
                  >
                    {Array.from({ length: 8 }, (_, idx) => (
                      <option key={idx} value={idx + 1}>Semester {idx + 1}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Connected Live Telemetry Indicators Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              {
                label: "GPA Scale Conversion",
                val: `USScale: ${((Number(converterGpa) || 8.5) / 10 * 4).toFixed(2)}`,
                badge: "Diagnostic Link 📊",
                theme: "bg-blue-500/5 text-blue-500 dark:text-blue-400 border-blue-500/10"
              },
              {
                label: "Attendance Cushion",
                val: `${sandboxAttPct}% Rate`,
                badge: sandboxAttPct >= 75 ? "Safe Runway 🟢" : "Detention Risk 🔴",
                theme: sandboxAttPct >= 75
                  ? "bg-emerald-500/5 text-emerald-600 dark:text-emerald-450 border-emerald-500/10"
                  : "bg-rose-500/5 text-rose-600 dark:text-rose-455 border-rose-500/10"
              },
              {
                label: "Active Laboratories Check",
                val: `S${sem} Curriculums`,
                badge: "Checklist Configured 🧪",
                theme: "bg-violet-500/5 text-violet-500 dark:text-violet-400 border-violet-500/10"
              },
              {
                label: "Night-Before Cram Buffer",
                val: `${mtCramHours} Hours / ${mtCramModules} Mods`,
                badge: "Study Console Active 🧠",
                theme: "bg-amber-500/5 text-amber-600 dark:text-amber-450 border-amber-500/10"
              }
            ].map((stat, idx) => (
              <div key={idx} className="p-3 bg-[#0D0D12]/40 dark:bg-[#121215]/50 border border-white/[0.04] rounded-2xl flex flex-col justify-between gap-1 shadow-sm">
                <span className="text-[7.5px] font-black text-slate-400 uppercase tracking-widest leading-none block">{stat.label}</span>
                <span className="text-sm font-black text-slate-900 dark:text-slate-50 block mt-1 leading-none">{stat.val}</span>
                <span className={`px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-wider block mt-1.5 self-start border ${stat.theme}`}>
                  {stat.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- DYNAMIC WORKSPACE SWITCHER NAV BAR --- */}
        <div className="bg-[#09090C] border border-white/[0.06] backdrop-blur-2xl rounded-2xl p-1 flex flex-wrap items-center gap-1 shadow-md w-full">
          {[
            { id: "attendance", label: "Attendance & CIE Runway", icon: Activity },
            { id: "grades", label: "Grades & ESE Target Planner", icon: Calculator },
            { id: "graduation", label: "Graduation Runway", icon: GraduationCap },
            { id: "exam", label: "11th-Hour Command Panel", icon: Clock }
          ].map((tabItem) => {
            const isActive = activeWorkspaceTab === tabItem.id;
            const Icon = tabItem.icon;
            
            return (
              <button
                key={tabItem.id}
                onClick={() => setActiveWorkspaceTab(tabItem.id as typeof activeWorkspaceTab)}
                className={`px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer flex-1 justify-center sm:flex-initial active:scale-[0.98] hover:scale-[1.01] ${
                  isActive
                    ? "bg-violet-500/10 text-violet-400 border border-violet-500/20 shadow-lg shadow-violet-500/[0.02]"
                    : "bg-transparent text-zinc-500 border border-transparent hover:bg-white/[0.01]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tabItem.label}</span>
              </button>
            );
          })}
        </div>

        {/* --- UNIFIED WORKSPACE ACTIVE COMPONENT CONTAINER --- */}
        <div className="w-full transition-all duration-300">
          
          {/* TAB 1: ATTENDANCE & CIE RUNWAY */}
          {activeWorkspaceTab === "attendance" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-7 space-y-6">
                {renderAttendanceRunway()}
              </div>
              <div className="lg:col-span-5 space-y-6">
                {renderCieAggregatorPanel()}
              </div>
            </div>
          )}

          {/* TAB 2: GRADES & ESE TARGET PLANNER */}
          {activeWorkspaceTab === "grades" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* GPA Sheet Calculator */}
              <div className="lg:col-span-7 bg-zinc-900/[0.35] backdrop-blur-md border border-white/[0.06] rounded-2xl p-6 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden space-y-5">
                <div className="absolute top-0 right-0 w-[240px] h-[240px] rounded-full bg-blue-500/[0.03] blur-[60px] pointer-events-none -z-10" />
                
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Calculator className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base leading-none">GPA & CGPA Calculator</h3>
                      <span className="text-[10px] font-bold text-zinc-500 block mt-1.5">{branch.toUpperCase()} S{sem} grading sheet & custom sandboxes</span>
                    </div>
                  </div>
                </div>

                {/* Core GPA Component */}
                <GpaCalculator />

                {/* Inline Converter Bar */}
                <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/[0.06] text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                  <span>SGPA / CGPA Converter:</span>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.01"
                    placeholder="8.50"
                    value={converterGpa}
                    onChange={(e) => handleGpaConvert(e.target.value)}
                    className="w-16 bg-[#121215] border border-white/[0.06] rounded-lg px-2 py-1 text-center font-bold text-white focus:outline-none focus:ring-1 focus:ring-violet-500/20"
                  />
                  <span>Score ⇄</span>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    placeholder="80.0"
                    value={converterPercentage}
                    onChange={(e) => handlePercentageConvert(e.target.value)}
                    className="w-16 bg-[#121215] border border-white/[0.06] rounded-lg px-2 py-1 text-center font-bold text-white focus:outline-none focus:ring-1 focus:ring-violet-500/20"
                  />
                  <span>Percentage (%)</span>
                </div>
              </div>

              {/* Target ESE Predictor Card */}
              <div className="lg:col-span-5 space-y-6">
                {renderTargetPlanner()}
                
                <div className="flex items-center gap-3 p-4 rounded-2xl border border-violet-500/10 dark:border-violet-500/5 bg-violet-500/[0.02] text-[9.5px] font-semibold text-zinc-400 leading-normal text-center justify-center">
                  <span>💡</span>
                  <span>Preset GPA values compile in real-time. Target margins dynamically shift based on your active scores.</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GRADUATION RUNWAY & MILESTONE TRACKER */}
          {activeWorkspaceTab === "graduation" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-8 space-y-6">
                {renderGraduationAuditors()}
              </div>
              <div className="lg:col-span-4 space-y-6">
                {renderSpecializationPathway()}
              </div>
            </div>
          )}

          {/* TAB 4: 11TH-HOUR EXAM COMMAND PANEL */}
          {activeWorkspaceTab === "exam" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-6 space-y-6">
                {renderStudySequencer()}
              </div>
              <div className="lg:col-span-6 space-y-6">
                {renderRevisionHub()}
              </div>
            </div>
          )}

        </div>

        {/* Advice Info bottom bar */}
        <div className="flex items-center gap-3 p-4.5 rounded-2xl border border-white/[0.06] dark:border-white/[0.08] bg-[#07070A]/40 text-[9.5px] font-bold text-zinc-400 leading-normal text-center justify-center shadow-sm">
          <span>🛡️</span>
          <span>APJ AKU Cockpit Terminal workspace tracks metrics dynamically. Preset GPA shifts, attendance cancellations, and lab checklist logs update statistics in milliseconds.</span>
        </div>

      </main>
    </div>
  );
}
