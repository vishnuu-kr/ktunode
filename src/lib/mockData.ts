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

  // =========================================================
  // S4 CSE
  // =========================================================

  {
    id: "s4_cs_gamat401",
    code: "GAMAT401",
    name: "Mathematics for Computer and Information Science - 4",
    branchId: "cs",
    semester: 4,
    modules: [
      {
        id: "gamat401_m1",
        title: "Module 1",
        topics: [
          {
            id: "gamat401_t1",
            title: "Introduction to Graphs",
            content: `
# Introduction to Graph Theory

A graph is a fundamental mathematical structure used to model pairwise relations between objects. It serves as the architectural foundation for everything from social network algorithms to network routing protocols.

## The Mental Model

To understand graphs, map them to physical and digital systems you already know:

- **Social Networks**: Users are nodes; mutual follows are edges.
- **Navigation Systems**: Intersections are nodes; connecting roads are edges.
- **State Machines**: Application states are nodes; transitions are edges.

## Core Axioms

A standard graph consists of two primary sets:

- **Vertices (V)**: The fundamental units or nodes of the graph.
- **Edges (E)**: The lines or arcs connecting any two vertices.

## Degree of a Vertex, deg(v)

The total number of edges incident to a specific vertex.

- **Isolated Vertex**: deg(v) = 0
- **Pendant Vertex**: deg(v) = 1

## Graph Classifications

| Classification | Defining Characteristic |
|----------------|------------------------|
| Finite vs. Infinite | Determined by the cardinality of the vertex set. |
| Directed (Digraph) | Edges possess a strict direction (ordered pairs). |
| Undirected | Edges have no directional flow (unordered pairs). |

## The Handshaking Lemma (Degree Sum Formula)

This is the most critical foundational theorem in graph theory. It states that every undirected graph has an even number of vertices with odd degree.

The sum of the degrees of all vertices is exactly twice the number of edges:

$$\\sum_{v \\in V} \\text{deg}(v) = 2|E|$$

### Proof by Example

Consider a simple graph: A — B — C

- deg(A) = 1
- deg(B) = 2
- deg(C) = 1

**Total Sum**: 1 + 2 + 1 = 4

**Total Edges (|E|)**: 2

**Verification**: 2 × 2 = 4 ✓

---

## Pattern Analysis & Exam Strategy

> **Strategic Focus**: The distinction between a Walk, Path, and Circuit is heavily tested. Focus on the conditions required for each to exist without violating edge or vertex repetition rules.

### Eulerian Conditions

- **Euler Circuit**: Exists if and only if every vertex has an even degree.
- **Euler Path**: Exists if and only if exactly two vertices have an odd degree.

### High-Frequency Topics

1. Defining graph isomorphism.
2. Proving the Degree Sum Theorem.
3. Differentiating walks, paths, and circuits with examples.
`,
            pyqs: [
              {
                id: "pyq_graph_2023",
                year: "2023",
                question: "Explain finite and infinite graphs with examples.",
                marks: 5
              },
              {
                id: "pyq_graph_2022",
                year: "2022",
                question: "Differentiate path, walk and circuit.",
                marks: 7
              }
            ]
          }
        ]
      },
      {
        id: "gamat401_m2",
        title: "Module 2",
        topics: [
          {
            id: "gamat401_t2",
            title: "Euler and Hamiltonian Graphs",
            content: `
- Euler graphs
- Operations on graphs
- Hamiltonian paths and circuits
- Travelling salesman problem
- Connectivity
- Edge connectivity
- Vertex connectivity
- Directed graphs
- Types of directed graphs
            `
          }
        ]
      },
      {
        id: "gamat401_m3",
        title: "Module 3",
        topics: [
          {
            id: "gamat401_t3",
            title: "Trees and Spanning Trees",
            content: `
- Trees and properties
- Pendant vertices
- Distance and centres in trees
- Rooted trees
- Binary trees
- Counting trees
- Spanning trees
- Prim’s algorithm
- Kruskal’s algorithm
- Dijkstra’s shortest path algorithm
- Floyd-Warshall algorithm
            `
          }
        ]
      },
      {
        id: "gamat401_m4",
        title: "Module 4",
        topics: [
          {
            id: "gamat401_t4",
            title: "Graph Representation and Coloring",
            content: `
- Matrix representation of graphs
- Adjacency matrix
- Incidence matrix
- Circuit matrix
- Path matrix
- Graph colouring
- Chromatic number
- Chromatic polynomial
- Greedy colouring algorithm
            `
          }
        ]
      }
    ]
  },

  {
    id: "s4_cs_dbms",
    code: "PCCST402",
    name: "Database Management Systems",
    branchId: "cs",
    semester: 4,
    modules: [
      {
        id: "dbms_m1",
        title: "Module 1",
        topics: [
          {
            id: "dbms_t1",
            title: "Database Concepts and ER Model",
            content: `
- Database system concepts and architecture
- Data models
- Schemas and instances
- Three-schema architecture
- Data independence
- Database languages and interfaces
- Client-server DBMS
- Entity relationship model
- Entity types and sets
- Attributes and keys
- Relationship sets
- Weak entity types
            `,
            pyqs: [
              {
                id: "dbms_pyq1",
                year: "2023",
                question: "Explain three-schema architecture and data independence.",
                marks: 9
              }
            ]
          }
        ]
      },

      {
        id: "dbms_m2",
        title: "Module 2",
        topics: [
          {
            id: "dbms_t2",
            title: "Relational Model and SQL",
            content: `
- Relational data model
- Relational constraints
- Relational algebra
- Relational calculus
- SQL
- DDL
- DML
- Assertions
- Triggers
- Views
- ER to relational mapping
            `
          }
        ]
      },

      {
        id: "dbms_m3",
        title: "Module 3",
        topics: [
          {
            id: "dbms_t3",
            title: "Normalization and Transactions",
            content: `
- Functional dependencies
- Normalization
- 1NF
- 2NF
- 3NF
- Transaction processing
- Transaction failures
- ACID properties
- Serializability
- Recoverability
            `
          }
        ]
      },

      {
        id: "dbms_m4",
        title: "Module 4",
        topics: [
          {
            id: "dbms_t4",
            title: "Concurrency and NoSQL",
            content: `
- Concurrency control
- Two-phase locking
- Database recovery
- Deferred update
- Immediate update
- Shadow paging
- NoSQL concepts
- CAP theorem
- BASE properties
- Key-value stores
- Graph stores
- Column family stores
- Document stores
            `
          }
        ]
      }
    ]
  },

  {
    id: "s4_cs_os",
    code: "PCCST403",
    name: "Operating Systems",
    branchId: "cs",
    semester: 4,
    modules: [
      {
        id: "os_m1",
        title: "Module 1",
        topics: [
          {
            id: "os_t1",
            title: "Introduction and Process Management",
            content: `
- Operating system introduction
- OS services
- Kernel overview
- Linux vs Unix kernels
- Process concept
- Process creation and states
- Process API
- Context switching
- Threads
- Multithreading
- Scheduling algorithms
- Multilevel feedback queue
- Linux scheduler
            `
          }
        ]
      },

      {
        id: "os_m2",
        title: "Module 2",
        topics: [
          {
            id: "os_t2",
            title: "Concurrency and Deadlocks",
            content: `
- Concurrency
- Locks
- Spinlocks
- Semaphores
- Producer-consumer problem
- Reader-writer problem
- Deadlocks
- Deadlock prevention
- Deadlock avoidance
- Deadlock detection
- Dining philosophers problem
            `
          }
        ]
      },

      {
        id: "os_m3",
        title: "Module 3",
        topics: [
          {
            id: "os_t3",
            title: "Memory Management",
            content: `
- Memory management
- Address space
- Segmentation
- Paging
- TLB
- Virtual memory
- Page replacement
- Thrashing
- Swap space
- Page faults
            `
          }
        ]
      },

      {
        id: "os_m4",
        title: "Module 4",
        topics: [
          {
            id: "os_t4",
            title: "File Systems and I/O",
            content: `
- File systems
- File descriptors
- Directory structure
- File operations
- Access control
- Disk scheduling
- I/O systems
- DMA
- Device drivers
- Linux I/O schedulers
            `
          }
        ]
      }
    ]
  },

  {
    id: "s4_cs_coa",
    code: "PBCST404",
    name: "Computer Organization and Architecture",
    branchId: "cs",
    semester: 4,
    modules: [
      {
        id: "coa_m1",
        title: "Module 1",
        topics: [
          {
            id: "coa_t1",
            title: "Computer Basics and RISC",
            content: `
- Functional units
- Basic operational concepts
- Memory map
- Endianness
- CISC vs RISC
- Assembly language
- Instruction formats
- Addressing modes
- Program flow
- Instruction execution cycle
            `
          }
        ]
      },

      {
        id: "coa_m2",
        title: "Module 2",
        topics: [
          {
            id: "coa_t2",
            title: "Microarchitecture and Pipelining",
            content: `
- Microarchitecture
- Single cycle processor
- Datapath
- Control unit
- Pipelining
- Pipeline hazards
- Hazard handling
- Performance analysis
            `
          }
        ]
      },

      {
        id: "coa_m3",
        title: "Module 3",
        topics: [
          {
            id: "coa_t3",
            title: "Memory Systems",
            content: `
- Memory systems
- Cache memory
- Cache mapping
- Cache replacement
- Multi-level caches
- Virtual memory
- Page tables
- TLB
- Memory protection
            `
          }
        ]
      },

      {
        id: "coa_m4",
        title: "Module 4",
        topics: [
          {
            id: "coa_t4",
            title: "Input Output Systems",
            content: `
- I/O systems
- Interrupt driven I/O
- DMA
- Embedded I/O
- Serial I/O
- Peripheral devices
            `
          }
        ]
      }
    ]
  }

];

export function getSubjectsForSession(
  branchId: string,
  semester: number
): Subject[] {
  return mockSubjects.filter(
    s => s.branchId === branchId && s.semester === semester
  );
}