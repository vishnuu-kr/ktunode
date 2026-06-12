export interface LabExercise {
  id: string;
  name: string;
  logic: boolean;
  record: boolean;
  viva: boolean;
  signed: boolean;
}

export interface LabCourse {
  id: string;
  name: string;
  code: string;
  exercises: LabExercise[];
}

export const getDefaultLabsForSession = (branchId: string, semester: number): LabCourse[] => {
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
