---
title: "Shortest path problems- Solution methods – Dijkstra’s Method"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 2: Game Theory: Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044641d0"
status: "completed"
scrapedAt: "2026-05-20T18:15:59.466Z"
---
# OPTIMIZATION TECHNIQUES - Module 2: Game Theory: Introduction

## Topic: Shortest Path Problems - Solution Methods – Dijkstra’s Method

**Course Outcomes Addressed:**

*   **CO2: Apply different methods of Game Theory, Network Tree and Shortest Path.** (Knowledge Level: K3)

---

### 1. Introduction to Shortest Path Problems

A **shortest path problem** is a fundamental problem in graph theory that seeks to find a path between two nodes (or vertices) in a graph such that the sum of the weights of its constituent edges is minimized. These problems have wide-ranging applications in various fields, including:

*   **Transportation and Logistics:** Finding the quickest or cheapest routes for delivery trucks, airplanes, or ships.
*   **Telecommunications:** Determining the most efficient data routing paths in networks.
*   **Computer Science:** Pathfinding algorithms in navigation systems, game AI, and network analysis.
*   **Project Management:** Identifying the critical path in project scheduling.
*   **Engineering Design:** Optimizing flow in networks.

**Key Concepts and Definitions:**

*   **Graph (G):** A collection of vertices (nodes) $V$ and edges $E$ connecting pairs of vertices.
    *   $G = (V, E)$
*   **Directed Graph (Digraph):** A graph where edges have a direction. An edge $(u, v)$ goes from vertex $u$ to vertex $v$.
*   **Undirected Graph:** A graph where edges do not have a direction. An edge $\{u, v\}$ connects $u$ and $v$.
*   **Weight (Cost/Distance):** A numerical value associated with each edge, representing its cost, distance, time, or other metric to be minimized.
*   **Path:** A sequence of vertices and edges that connects two vertices.
*   **Simple Path:** A path where no vertex is repeated.
*   **Path Length (Cost):** The sum of the weights of the edges in a path.
*   **Shortest Path:** A path between two specified vertices with the minimum possible path length.
*   **Source Vertex (s):** The starting vertex for the shortest path.
*   **Destination Vertex (t):** The ending vertex for the shortest path.
*   **All-Pairs Shortest Path Problem:** Finding the shortest paths between every pair of vertices in a graph.
*   **Single-Source Shortest Path Problem:** Finding the shortest paths from a single source vertex to all other vertices in the graph.

**Textbook Reference:**

*   **S.S. Rao, "Engineering Optimization: Theory and Practice"**: Chapter on Network Flow Problems often covers shortest path algorithms. (Likely to discuss algorithms and their applications).
*   **H.A. Taha, "Operations Research"**: Chapters on Network Analysis and Transportation/Assignment problems will likely introduce shortest path concepts as a building block. (Emphasis on problem formulation and algorithmic approaches).

---

### 2. Types of Shortest Path Problems

Based on the number of sources and destinations, and the nature of edge weights, shortest path problems can be categorized:

1.  **Single-Source Shortest Path (SSSP):** Find the shortest paths from a single source vertex $s$ to all other vertices in the graph.
2.  **Single-Destination Shortest Path:** Find the shortest paths from all vertices to a single destination vertex $t$. (This can be solved by reversing the edges of the graph and solving an SSSP problem from $t$).
3.  **Single-Pair Shortest Path:** Find the shortest path between a specific source vertex $s$ and a specific destination vertex $t$.
4.  **All-Pairs Shortest Path (APSP):** Find the shortest paths between all pairs of vertices in the graph.

**Important Note:** The focus of this topic is on **single-source shortest path problems**, and Dijkstra's algorithm is a prominent solution for this.

---

### 3. Dijkstra's Method (Algorithm)

Dijkstra's algorithm is a greedy algorithm that finds the shortest paths from a single source vertex to all other vertices in a graph with **non-negative edge weights**. It works by iteratively building up a set of vertices for which the shortest path from the source is known.

**Algorithm Description:**

Let $G = (V, E)$ be a graph with non-negative edge weights $w(u, v)$ for each edge $(u, v) \in E$.
Let $s$ be the source vertex.

**Initialization:**

1.  Initialize a distance array `dist` where `dist[v]` stores the shortest distance found so far from $s$ to $v$.
    *   `dist[s] = 0`
    *   `dist[v] = \infty` for all $v \neq s$ (where $\infty$ represents an infinitely large value).
2.  Initialize a predecessor array `pred` where `pred[v]` stores the vertex that precedes $v$ on the shortest path found so far from $s$ to $v$.
    *   `pred[v] = null` for all $v$.
3.  Initialize a set `S` of vertices for which the shortest path from $s$ has been finalized. Initially, `S` is empty.
4.  Initialize a set `Q` of vertices for which the shortest path has not yet been finalized. Initially, `Q` contains all vertices in $V$.

**Iteration:**

While $Q$ is not empty:

1.  Select a vertex $u$ from $Q$ that has the minimum `dist[u]` value.
2.  Remove $u$ from $Q$ and add it to $S$.
3.  For each neighbor $v$ of $u$ that is still in $Q$:
    *   **Relaxation Step:** If `dist[u] + w(u, v) < dist[v]`:
        *   `dist[v] = dist[u] + w(u, v)` (Update the shortest distance to $v$)
        *   `pred[v] = u` (Update the predecessor of $v$)

**Termination:**

The algorithm terminates when $Q$ is empty. The `dist` array then contains the shortest distances from $s$ to all other vertices, and the `pred` array can be used to reconstruct the actual shortest paths.

**Key Idea: Greedy Approach**

At each step, Dijkstra's algorithm selects the unvisited vertex that is "closest" to the source based on the currently known shortest path distances. This greedy choice is proven to be optimal because edge weights are non-negative. Once a vertex is added to the set $S$, its shortest path distance from the source is finalized and will not be improved later.

**Implementation Considerations:**

*   **Data Structures:**
    *   **Adjacency List:** Efficient for representing graphs, especially sparse ones.
    *   **Priority Queue:** Crucial for efficiently selecting the vertex with the minimum distance from $Q$. A min-heap is commonly used.

**Example:**

Consider the following directed graph with non-negative edge weights:

```
      (1) --5--> (2) --1--> (3)
     /|\          /|\         /|\
    1 |           2 |         3 |
   \|/          \|/         \|/
    (s) --4--> (a) --2--> (b) --6--> (t)
     \|/          \|/         \|/
    7 |           3 |         4 |
   \|/          \|/         \|/
    (c) --2--> (d) --1--> (e)
```

Let $s$ be the source vertex.

**Initialization:**

*   `dist = {s: 0, 1: inf, 2: inf, 3: inf, a: inf, b: inf, c: inf, d: inf, e: inf, t: inf}`
*   `pred = {s: null, 1: null, ..., t: null}`
*   `S = {}`
*   `Q = {s, 1, 2, 3, a, b, c, d, e, t}` (conceptually, as a priority queue)

**Iteration 1:**

1.  Select $u = s$ (dist[s] = 0).
2.  Remove $s$ from $Q$. Add $s$ to $S$. `S = {s}`.
3.  Neighbors of $s$: 1, a, c.
    *   For $v=1$: `dist[s] + w(s, 1) = 0 + 1 = 1`. Since $1 < \infty$, `dist[1] = 1`, `pred[1] = s`.
    *   For $v=a$: `dist[s] + w(s, a) = 0 + 4 = 4`. Since $4 < \infty$, `dist[a] = 4`, `pred[a] = s`.
    *   For $v=c$: `dist[s] + w(s, c) = 0 + 7 = 7`. Since $7 < \infty$, `dist[c] = 7`, `pred[c] = s`.

    `dist = {s: 0, 1: 1, 2: inf, 3: inf, a: 4, b: inf, c: 7, d: inf, e: inf, t: inf}`
    `Q = {1, 2, 3, a, b, c, d, e, t}` (with updated distances for 1, a, c)

**Iteration 2:**

1.  Select $u = 1$ (dist[1] = 1) from $Q$.
2.  Remove 1 from $Q$. Add 1 to $S$. `S = {s, 1}`.
3.  Neighbors of 1: 2.
    *   For $v=2$: `dist[1] + w(1, 2) = 1 + 5 = 6`. Since $6 < \infty$, `dist[2] = 6`, `pred[2] = 1`.

    `dist = {s: 0, 1: 1, 2: 6, 3: inf, a: 4, b: inf, c: 7, d: inf, e: inf, t: inf}`
    `Q = {2, 3, a, b, c, d, e, t}` (with updated distances for 2)

**Iteration 3:**

1.  Select $u = a$ (dist[a] = 4) from $Q$.
2.  Remove $a$ from $Q$. Add $a$ to $S$. `S = {s, 1, a}`.
3.  Neighbors of $a$: b.
    *   For $v=b$: `dist[a] + w(a, b) = 4 + 2 = 6`. Since $6 < \infty$, `dist[b] = 6`, `pred[b] = a`.

    `dist = {s: 0, 1: 1, 2: 6, 3: inf, a: 4, b: 6, c: 7, d: inf, e: inf, t: inf}`
    `Q = {2, 3, b, c, d, e, t}` (with updated distances for b)

**Iteration 4:**

1.  Select $u = 2$ (dist[2] = 6) or $u = b$ (dist[b] = 6). Let's pick $u=2$.
2.  Remove 2 from $Q$. Add 2 to $S$. `S = {s, 1, a, 2}`.
3.  Neighbors of 2: 3.
    *   For $v=3$: `dist[2] + w(2, 3) = 6 + 1 = 7`. Since $7 < \infty$, `dist[3] = 7`, `pred[3] = 2`.

    `dist = {s: 0, 1: 1, 2: 6, 3: 7, a: 4, b: 6, c: 7, d: inf, e: inf, t: inf}`
    `Q = {3, b, c, d, e, t}` (with updated distances for 3)

**Iteration 5:**

1.  Select $u = b$ (dist[b] = 6) from $Q$.
2.  Remove $b$ from $Q$. Add $b$ to $S$. `S = {s, 1, a, 2, b}`.
3.  Neighbors of $b$: t.
    *   For $v=t$: `dist[b] + w(b, t) = 6 + 6 = 12`. Since $12 < \infty$, `dist[t] = 12`, `pred[t] = b`.

    `dist = {s: 0, 1: 1, 2: 6, 3: 7, a: 4, b: 6, c: 7, d: inf, e: inf, t: 12}`
    `Q = {3, c, d, e, t}` (with updated distances for t)

**Iteration 6:**

1.  Select $u = 3$ (dist[3] = 7) or $u = c$ (dist[c] = 7). Let's pick $u=3$.
2.  Remove 3 from $Q$. Add 3 to $S$. `S = {s, 1, a, 2, b, 3}`.
3.  Neighbors of 3: None that are still in $Q$.

    `dist` remains the same.
    `Q = {c, d, e, t}`

**Iteration 7:**

1.  Select $u = c$ (dist[c] = 7) from $Q$.
2.  Remove $c$ from $Q$. Add $c$ to $S$. `S = {s, 1, a, 2, b, 3, c}`.
3.  Neighbors of $c$: d.
    *   For $v=d$: `dist[c] + w(c, d) = 7 + 2 = 9`. Since $9 < \infty$, `dist[d] = 9`, `pred[d] = c`.

    `dist = {s: 0, 1: 1, 2: 6, 3: 7, a: 4, b: 6, c: 7, d: 9, e: inf, t: 12}`
    `Q = {d, e, t}` (with updated distances for d)

**Iteration 8:**

1.  Select $u = d$ (dist[d] = 9) from $Q$.
2.  Remove $d$ from $Q$. Add $d$ to $S$. `S = {s, 1, a, 2, b, 3, c, d}`.
3.  Neighbors of $d$: e.
    *   For $v=e$: `dist[d] + w(d, e) = 9 + 1 = 10`. Since $10 < \infty$, `dist[e] = 10`, `pred[e] = d`.

    `dist = {s: 0, 1: 1, 2: 6, 3: 7, a: 4, b: 6, c: 7, d: 9, e: 10, t: 12}`
    `Q = {e, t}` (with updated distances for e)

**Iteration 9:**

1.  Select $u = e$ (dist[e] = 10) from $Q$.
2.  Remove $e$ from $Q$. Add $e$ to $S$. `S = {s, 1, a, 2, b, 3, c, d, e}`.
3.  Neighbors of $e$: t.
    *   For $v=t$: `dist[e] + w(e, t) = 10 + 4 = 14`. Since $14 \not< 12$, no update.

    `dist` remains the same.
    `Q = {t}`

**Iteration 10:**

1.  Select $u = t$ (dist[t] = 12) from $Q$.
2.  Remove $t$ from $Q$. Add $t$ to $S$. `S = {s, 1, a, 2, b, 3, c, d, e, t}`.
3.  Neighbors of $t$: None.

    `Q` is now empty. Algorithm terminates.

**Final Shortest Distances from s:**

*   `dist[s] = 0`
*   `dist[1] = 1`
*   `dist[2] = 6`
*   `dist[3] = 7`
*   `dist[a] = 4`
*   `dist[b] = 6`
*   `dist[c] = 7`
*   `dist[d] = 9`
*   `dist[e] = 10`
*   `dist[t] = 12`

**Reconstructing Shortest Path to t:**

Start from $t$:
*   `pred[t] = b`
*   `pred[b] = a`
*   `pred[a] = s`

The shortest path to $t$ is $s \rightarrow a \rightarrow b \rightarrow t$ with a total cost of $4 + 2 + 6 = 12$.

**Complexity of Dijkstra's Algorithm:**

*   **Using an Adjacency List and a Binary Heap (Priority Queue):**
    *   Time Complexity: $O((E+V) \log V)$ or $O(E \log V)$ if $E \ge V$.
    *   Space Complexity: $O(V+E)$ for storing the graph and distances.

**Reference:**

*   **S.S. Rao, "Engineering Optimization: Theory and Practice"**: Rao likely discusses the algorithm and its computational complexity, possibly in the context of network optimization problems.
*   **H.A. Taha, "Operations Research"**: Taha would present Dijkstra's as a standard algorithm for shortest path problems in network analysis.

---

### 4. Dijkstra's Method - Important Points to Remember

*   **Non-Negative Edge Weights:** Dijkstra's algorithm *guarantees* correctness *only* for graphs with non-negative edge weights. If negative edge weights are present, the algorithm may produce incorrect results.
*   **Greedy Strategy:** The algorithm makes locally optimal choices (picking the closest unvisited node) which lead to a globally optimal solution due to the non-negative weight constraint.
*   **Relaxation:** The core operation is the "relaxation" of an edge, which checks if a path through the current vertex $u$ to a neighbor $v$ provides a shorter path to $v$ than currently known.
*   **Priority Queue:** The efficiency of Dijkstra's algorithm is heavily dependent on the efficient implementation of the priority queue, typically using a min-heap.
*   **Applications:** Essential for routing, network analysis, and any problem where minimizing cumulative costs along a path is required.

**Connection to Course Outcomes:**

*   **CO2: Apply different methods of Game Theory, Network Tree and Shortest Path.**
    *   Dijkstra's method is a direct application of a shortest path algorithm, fulfilling this outcome. Understanding how to model problems as graphs and apply this algorithm is key.

---

### 5. Practice Questions and Exercises

**Question 1:**

Consider the following directed graph with non-negative edge weights:

```
      A --3--> B --1--> C
     /|\        /|\        /|\
    5 |         2 |        4 |
   \|/        \|/        \|/
    S --6--> D --2--> E --5--> T
     \|/        /|\        /|\
    7 |         3 |        1 |
   \|/        \|/        \|/
    F --2--> G --1--> H
```

Apply Dijkstra's algorithm to find the shortest paths from the source vertex $S$ to all other vertices. Show the intermediate steps (distance updates and vertex selections).

**Answer 1:**

**Initialization:**
`dist = {S:0, A:inf, B:inf, C:inf, D:inf, E:inf, F:inf, G:inf, H:inf, T:inf}`
`pred = {all: null}`
`S = {}`, `Q = {S, A, B, C, D, E, F, G, H, T}`

**Iteration 1:**
*   Select $u=S$ (dist=0). $S \leftarrow \{S\}$.
*   Relax (S,A): dist[A] = 5, pred[A]=S
*   Relax (S,D): dist[D] = 6, pred[D]=S
*   Relax (S,F): dist[F] = 7, pred[F]=S
`dist = {S:0, A:5, B:inf, C:inf, D:6, E:inf, F:7, G:inf, H:inf, T:inf}`

**Iteration 2:**
*   Select $u=A$ (dist=5). $S \leftarrow \{S, A\}$.
*   Relax (A,B): dist[B] = 5+3 = 8, pred[B]=A
*   Relax (A,D): dist[D] = min(6, 5+5) = 6 (no change)
`dist = {S:0, A:5, B:8, C:inf, D:6, E:inf, F:7, G:inf, H:inf, T:inf}`

**Iteration 3:**
*   Select $u=D$ (dist=6). $S \leftarrow \{S, A, D\}$.
*   Relax (D,E): dist[E] = 6+2 = 8, pred[E]=D
*   Relax (D,G): dist[G] = 6+3 = 9, pred[G]=D
`dist = {S:0, A:5, B:8, C:inf, D:6, E:8, F:7, G:9, H:inf, T:inf}`

**Iteration 4:**
*   Select $u=B$ (dist=8) or $u=E$ (dist=8). Let's choose $u=B$. $S \leftarrow \{S, A, D, B\}$.
*   Relax (B,C): dist[C] = 8+1 = 9, pred[C]=B
`dist = {S:0, A:5, B:8, C:9, D:6, E:8, F:7, G:9, H:inf, T:inf}`

**Iteration 5:**
*   Select $u=E$ (dist=8). $S \leftarrow \{S, A, D, B, E\}$.
*   Relax (E,T): dist[T] = 8+5 = 13, pred[T]=E
*   Relax (E,H): dist[H] = 8+1 = 9, pred[H]=E
`dist = {S:0, A:5, B:8, C:9, D:6, E:8, F:7, G:9, H:9, T:13}`

**Iteration 6:**
*   Select $u=F$ (dist=7). $S \leftarrow \{S, A, D, B, E, F\}$.
*   Relax (F,G): dist[G] = min(9, 7+2) = 9 (no change)
`dist = {S:0, A:5, B:8, C:9, D:6, E:8, F:7, G:9, H:9, T:13}`

**Iteration 7:**
*   Select $u=C$ (dist=9) or $u=G$ (dist=9) or $u=H$ (dist=9). Let's choose $u=C$. $S \leftarrow \{S, A, D, B, E, F, C\}$.
*   (C has no outgoing edges to unvisited nodes).

**Iteration 8:**
*   Select $u=G$ (dist=9). $S \leftarrow \{S, A, D, B, E, F, C, G\}$.
*   Relax (G,H): dist[H] = min(9, 9+1) = 9 (no change)
`dist = {S:0, A:5, B:8, C:9, D:6, E:8, F:7, G:9, H:9, T:13}`

**Iteration 9:**
*   Select $u=H$ (dist=9). $S \leftarrow \{S, A, D, B, E, F, C, G, H\}$.
*   Relax (H,T): dist[T] = min(13, 9+1) = 10, pred[T]=H
`dist = {S:0, A:5, B:8, C:9, D:6, E:8, F:7, G:9, H:9, T:10}`

**Iteration 10:**
*   Select $u=T$ (dist=10). $S \leftarrow \{S, A, D, B, E, F, C, G, H, T\}$.
*   (T has no outgoing edges)

**Final Shortest Distances:**
*   $S \rightarrow S: 0$
*   $S \rightarrow A: 5$ (Path: S-A)
*   $S \rightarrow B: 8$ (Path: S-A-B)
*   $S \rightarrow C: 9$ (Path: S-A-B-C)
*   $S \rightarrow D: 6$ (Path: S-D)
*   $S \rightarrow E: 8$ (Path: S-D-E)
*   $S \rightarrow F: 7$ (Path: S-F)
*   $S \rightarrow G: 9$ (Path: S-D-G or S-F-G, both 9. Let's use S-D-G: pred[G]=D)
*   $S \rightarrow H: 9$ (Path: S-D-E-H)
*   $S \rightarrow T: 10$ (Path: S-D-E-H-T)

**Question 2:**

What is the critical limitation of Dijkstra's algorithm regarding edge weights?
a) It only works on directed graphs.
b) It requires all edge weights to be positive.
c) It cannot handle graphs with cycles.
d) It is only suitable for finding single-pair shortest paths.

**Answer 2:**

b) It requires all edge weights to be positive (or more accurately, non-negative). Dijkstra's algorithm fails if there are negative edge weights.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 6. Further Reading and Textual Integration

*   **S.S. Rao, "Engineering Optimization: Theory and Practice"**: In chapters related to network analysis or optimization of systems involving flow, Rao will likely present shortest path problems as a core component. The book's strength lies in its practical engineering applications, so expect examples relevant to fields like civil, mechanical, or electrical engineering. He might detail the mathematical formulation of shortest path problems as optimization problems.
*   **H.A. Taha, "Operations Research"**: Taha is a foundational text for Operations Research. He will cover shortest path problems within the broader context of network analysis. Expect a clear algorithmic description of Dijkstra's, possibly with pseudocode, and its application in various OR scenarios like transportation and logistics. He might also briefly touch upon variations or other shortest path algorithms.
*   **Kanti Swarup, P.K. Gupta and Man Mohan, "Operations Research"**: This reference book will also provide a solid grounding in shortest path problems. Their approach might emphasize the formulation and perhaps compare different algorithms or discuss their efficiency.
*   **Kalynamoy Deb, "Optimization for Engineering Design - Algorithms and Examples"**: Deb's book is focused on engineering design. He would likely present Dijkstra's algorithm as a tool for solving design problems where optimal paths are critical, such as in circuit design or layout optimization. The examples will be geared towards engineering contexts.
*   **A. Ravindran, D. T. Phillips, J. J. Solberg, "Operations Research - Principles and Practice"**: This textbook offers a comprehensive view of OR. Their treatment of shortest path problems will likely include a detailed algorithmic explanation of Dijkstra's and its practical implications in operations management and supply chains.

By consulting these texts, you can gain a deeper understanding of the mathematical underpinnings, algorithmic variations, and diverse applications of shortest path problems and Dijkstra's algorithm.

---