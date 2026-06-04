---
title: "Show that the Konigsberg Bridge Problem has no solution."
subject: "FORMAL METHODS IN SOFTWARE ENGINEERING"
module: "Module 2: Ensuring reliability in the design phase :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c078"
status: "completed"
scrapedAt: "2026-05-20T17:05:57.942Z"
---
# FORMAL METHODS IN SOFTWARE ENGINEERING

## Module 2: Ensuring Reliability in the Design Phase

### Topic: Showing the Königsberg Bridge Problem Has No Solution

---

### 1. Introduction to the Königsberg Bridge Problem

The Königsberg Bridge Problem is a historical mathematical problem that laid the groundwork for **Graph Theory**. It asks if it's possible to walk through the city of Königsberg, crossing each of its seven bridges exactly once, without retracing any steps.

*   **Historical Significance:** Solved by Leonhard Euler in 1736, this problem is considered the first significant application of graph theory and a foundational concept in the study of **topology** and **combinatorics**.
*   **Relevance to Software Engineering:** While seemingly abstract, the principles used to solve this problem are crucial for understanding:
    *   **Pathfinding algorithms:** Essential for navigation, network routing, and automated systems.
    *   **Reachability and traversability:** Ensuring systems can reach desired states or navigate complex structures.
    *   **Resource allocation and scheduling:** Optimizing paths and avoiding resource contention.

---

### 2. Representing the Problem as a Graph

To formally analyze the Königsberg Bridge Problem, we need to represent it using graph theory concepts.

#### 2.1 Key Concepts and Definitions

*   **Graph (G):** A collection of **vertices** (or nodes) and **edges** (or links) that connect pairs of vertices.
    *   $G = (V, E)$, where $V$ is the set of vertices and $E$ is the set of edges.

*   **Vertices (V):** In the Königsberg Bridge Problem, the vertices represent the **landmasses** or **islands** separated by the Pregel River.

*   **Edges (E):** In the Königsberg Bridge Problem, the edges represent the **bridges** connecting these landmasses.

#### 2.2 Applying Concepts to Königsberg

Let's define the graph for the Königsberg Bridge Problem:

*   **Landmasses:** There are four distinct landmasses:
    1.  **A:** The north bank of the river.
    2.  **B:** The south bank of the river.
    3.  **C:** The island Kneiphof.
    4.  **D:** The island Lomse.

*   **Bridges:** There are seven bridges connecting these landmasses:
    *   Two bridges connect A and C.
    *   Two bridges connect B and C.
    *   One bridge connects A and D.
    *   One bridge connects B and D.
    *   One bridge connects C and D.

*   **Graph Representation:**
    *   **Vertices:** $\{A, B, C, D\}$
    *   **Edges:**
        *   2 edges between A and C (let's denote them $e_{AC1}, e_{AC2}$)
        *   2 edges between B and C ($e_{BC1}, e_{BC2}$)
        *   1 edge between A and D ($e_{AD}$)
        *   1 edge between B and D ($e_{BD}$)
        *   1 edge between C and D ($e_{CD}$)

    This is a **multigraph** because there are multiple edges between the same pair of vertices.

![Königsberg Bridge Problem Graph](https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Konigsberg_bridges.png/300px-Konigsberg_bridges.png)
*(Image source: Wikimedia Commons, representing the city layout and bridges)*

---

### 3. The Core Problem: Eulerian Paths and Circuits

The Königsberg Bridge Problem translates to finding a specific type of path in the graph.

#### 3.1 Key Concepts and Definitions

*   **Path:** A sequence of vertices and edges where each edge connects the preceding and succeeding vertices.
*   **Walk:** A sequence of vertices and edges that can repeat vertices and edges.
*   **Trail:** A walk in which no edge is repeated.
*   **Circuit:** A closed trail (starts and ends at the same vertex).
*   **Eulerian Path:** A **trail** that visits every **edge** of the graph exactly once.
*   **Eulerian Circuit (or Eulerian Tour):** An Eulerian path that starts and ends at the **same vertex**.

#### 3.2 Degree of a Vertex

The **degree** of a vertex is the number of edges incident to it.

*   **In the context of Königsberg:** The degree of a landmass (vertex) is the number of bridges (edges) connected to it.

    *   **Degree of A ($deg(A)$):** 3 (one to D, two to C)
    *   **Degree of B ($deg(B)$):** 3 (one to D, two to C)
    *   **Degree of C ($deg(C)$):** 5 (two to A, two to B, one to D)
    *   **Degree of D ($deg(D)$):** 3 (one to A, one to B, one to C)

---

### 4. Euler's Theorem and the Solution

Euler's groundbreaking insight provided the conditions for the existence of Eulerian paths and circuits.

#### 4.1 Euler's Theorem Statement

A connected graph (or multigraph) has:

1.  **An Eulerian Circuit** if and only if **every vertex has an even degree**.
2.  **An Eulerian Path** (but not an Eulerian circuit) if and only if **exactly two vertices have odd degrees**. In this case, the path must start at one of the odd-degree vertices and end at the other.

#### 4.2 Applying Euler's Theorem to Königsberg

Let's analyze our Königsberg graph using Euler's theorem:

*   **Vertex Degrees:**
    *   $deg(A) = 3$ (odd)
    *   $deg(B) = 3$ (odd)
    *   $deg(C) = 5$ (odd)
    *   $deg(D) = 3$ (odd)

*   **Number of Odd-Degree Vertices:** We have **four** vertices with odd degrees (A, B, C, and D).

#### 4.3 Conclusion for Königsberg

According to Euler's theorem:

*   Since not all vertices have even degrees, **no Eulerian circuit exists**. This means you cannot start at a landmass, cross all bridges exactly once, and return to the starting landmass.
*   Since there are more than two vertices with odd degrees (we have four), **no Eulerian path exists**. This means you cannot start at any landmass, cross all bridges exactly once, and finish at any landmass.

**Therefore, the Königsberg Bridge Problem has no solution.**

---

### 5. Why Does the Theorem Work? The Intuition Behind the Proof

Euler's proof is elegant and provides valuable intuition about traversability.

*   **Entering and Leaving Vertices:** Every time you traverse a bridge (edge) to reach a landmass (vertex), you must also traverse a bridge (edge) to leave that landmass, unless it's your starting or ending point.

*   **Even Degree Vertices:**
    *   For any landmass that is **not** your start or end point, you must enter it as many times as you leave it. This requires an **even number of bridges** connected to that landmass (even degree).
    *   If a landmass is your **start point**, you leave it one more time than you enter it. So, it must have an **odd degree**.
    *   If a landmass is your **end point**, you enter it one more time than you leave it. So, it must also have an **odd degree**.

*   **Odd Degree Vertices:**
    *   If you have an Eulerian circuit, you start and end at the same place. Every vertex must be entered and left an equal number of times, meaning all vertices must have even degrees.
    *   If you have an Eulerian path (not a circuit), you start at one odd-degree vertex and end at another. All intermediate vertices must have even degrees.

*   **Königsberg Violation:** In Königsberg, all four landmasses have odd degrees.
    *   If you try to start at A (odd degree), you have one "extra" exit.
    *   If you try to end at B (odd degree), you have one "extra" entry.
    *   This leaves landmasses C and D with "extra" entries/exits that are not accounted for by the start and end points. You'd need to arrive at C and leave C, arrive at D and leave D, but you've already used up your allowed "extra" entry/exit at the start and end points for A and B. The problem is that you have too many "extra" connections that can't be paired up as start/end points.

---

### 6. Learning Outcomes Covered

*   **Understanding the Königsberg Bridge Problem:** The problem statement and its historical context.
*   **Representing Real-World Problems as Graphs:** How landmasses become vertices and bridges become edges.
*   **Key Graph Theory Concepts:** Vertices, edges, degrees, multigraphs, Eulerian paths, Eulerian circuits.
*   **Euler's Theorem:** The conditions for existence of Eulerian paths and circuits.
*   **Applying Theorem to Prove Non-existence:** Using vertex degrees to demonstrate that no such walk is possible.
*   **Mathematical Rigor in Design:** How formal methods (like graph theory) can be used to prove properties about systems.

---

### 7. Practice Questions and Exercises

**Question 1:**
Consider a city with four islands and five bridges connecting them, as follows:
*   Island 1 is connected to Island 2 by two bridges.
*   Island 1 is connected to Island 3 by one bridge.
*   Island 2 is connected to Island 4 by two bridges.

Draw the graph representing this city and its bridges. Calculate the degree of each island (vertex).

**Answer 1:**
*   **Graph Representation:**
    *   Vertices: {I1, I2, I3, I4}
    *   Edges:
        *   2 edges between I1 and I2
        *   1 edge between I1 and I3
        *   2 edges between I2 and I4
*   **Degrees:**
    *   $deg(I1) = 2 + 1 = 3$ (connected to I2 twice, I3 once)
    *   $deg(I2) = 2 + 2 = 4$ (connected to I1 twice, I4 twice)
    *   $deg(I3) = 1$ (connected to I1 once)
    *   $deg(I4) = 2$ (connected to I2 twice)

**Question 2:**
Based on Euler's theorem, does the city described in Question 1 have an Eulerian path or an Eulerian circuit? Justify your answer.

**Answer 2:**
*   **Analysis of Degrees:**
    *   $deg(I1) = 3$ (odd)
    *   $deg(I2) = 4$ (even)
    *   $deg(I3) = 1$ (odd)
    *   $deg(I4) = 2$ (even)
*   **Conclusion:** There are exactly two vertices with odd degrees (I1 and I3). Therefore, according to Euler's theorem, the city has an **Eulerian path** but not an Eulerian circuit. The path must start at I1 and end at I3 (or vice-versa).

**Question 3:**
A software system has four modules (A, B, C, D). Module A needs to communicate with B and C. Module B needs to communicate with A and D. Module C needs to communicate with A and D. Module D needs to communicate with B and C. Each communication link is bidirectional. If we represent these communication links as edges and modules as vertices, can we visit every communication link exactly once, starting and ending at the same module? Explain your reasoning using graph theory concepts.

**Answer 3:**
*   **Graph Representation:**
    *   Vertices: {A, B, C, D}
    *   Edges:
        *   A-B
        *   A-C
        *   B-D
        *   C-D
*   **Degrees:**
    *   $deg(A) = 2$ (connected to B, C)
    *   $deg(B) = 2$ (connected to A, D)
    *   $deg(C) = 2$ (connected to A, D)
    *   $deg(D) = 2$ (connected to B, C)
*   **Analysis:** All four vertices (modules) have an even degree (degree 2).
*   **Conclusion:** According to Euler's theorem, since all vertices have an even degree, the system **does have an Eulerian circuit**. This means it is possible to visit every communication link exactly once and return to the starting module. For example, a valid path could be A -> B -> D -> C -> A.

---

### 8. Important Points to Remember

*   **Graph Theory as a Formal Method:** The Königsberg Bridge Problem demonstrates the power of abstract mathematical models to solve practical problems.
*   **Eulerian Paths/Circuits:** The core concept for solving problems involving traversing all connections exactly once.
*   **Vertex Degree is Key:** The parity (even or odd) of vertex degrees is the deciding factor for the existence of Eulerian paths/circuits.
*   **Four Odd-Degree Vertices = No Solution:** If a graph has more than two vertices with odd degrees, neither an Eulerian path nor an Eulerian circuit exists.
*   **Design Implications:** In software design, understanding connectivity and traversability (e.g., in state machines, network protocols, workflow systems) can be aided by graph-theoretic principles. Ensuring a system can perform a sequence of operations exactly once, or reach all states, often boils down to checking degrees and connectivity.

---
