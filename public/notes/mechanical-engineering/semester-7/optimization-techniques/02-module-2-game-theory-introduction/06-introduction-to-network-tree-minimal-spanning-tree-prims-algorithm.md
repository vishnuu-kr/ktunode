---
title: "Introduction to network tree - Minimal Spanning Tree - Prim’s Algorithm"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 2: Game Theory: Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044641cf"
status: "completed"
scrapedAt: "2026-05-20T18:15:58.771Z"
---
# OPTIMIZATION TECHNIQUES - Module 2: Game Theory: Introduction

## Topic: Introduction to Network Trees, Minimal Spanning Tree, and Prim's Algorithm

This module introduces fundamental concepts related to network structures, focusing on finding the most efficient way to connect a set of points. We will explore the definition of a network tree and then delve into the problem of finding a Minimum Spanning Tree (MST). Finally, we will learn about Prim's algorithm, a widely used method for constructing an MST.

### Learning Outcomes Covered:

*   **Understanding Network Trees:** Grasp the basic properties and definitions of network trees.
*   **Defining Minimum Spanning Tree (MST):** Comprehend the concept of an MST and its significance in connecting all nodes with minimum total edge weight.
*   **Applying Prim's Algorithm:** Learn the step-by-step procedure of Prim's algorithm to find an MST and be able to apply it to solve problems.

### Alignment with Course Outcomes:

*   **CO2: Apply different methods of Game Theory, Network Tree and Shortest Path.** (Knowledge Level: K3) - This module directly addresses the "Network Tree" aspect of this outcome by introducing MSTs and Prim's algorithm.

---

### 1. Introduction to Network Trees

A **network** is a collection of points (called **nodes** or **vertices**) interconnected by lines (called **edges** or **arcs**). In optimization, we often encounter networks where edges have associated costs, distances, or capacities.

A **tree** is a specific type of graph that is **connected** and has **no cycles**.

**Key Properties of a Tree:**

*   **Connected:** There is a path between any two distinct nodes in the tree.
*   **Acyclic:** It contains no closed paths or cycles.
*   **Number of Edges:** A tree with $n$ nodes always has exactly $n-1$ edges.
*   **Unique Path:** There is a unique simple path between any two nodes in a tree.
*   **Removing an edge disconnects:** Removing any edge from a tree will disconnect it into two separate trees.
*   **Adding an edge creates a cycle:** Adding any edge between two existing nodes in a tree will create exactly one cycle.

**Network Tree:** A network tree is a network that has the structure of a tree. In the context of optimization, these trees often represent infrastructure, communication links, or decision structures where connectivity is crucial, and redundancy (cycles) is avoided.

**Types of Network Trees (Briefly Mentioned in Context):**

While not the primary focus, it's worth noting that trees can be directed or undirected. For MST problems, we typically deal with **undirected, connected, weighted graphs**.

---

### 2. Minimum Spanning Tree (MST)

**Definition:** Given a connected, undirected, weighted graph $G=(V, E)$, where $V$ is the set of vertices and $E$ is the set of edges, and each edge $e \in E$ has a weight $w(e)$, a **spanning tree** is a subgraph that includes all the vertices of $G$ and is a tree. A **Minimum Spanning Tree (MST)** is a spanning tree whose sum of edge weights is as small as possible.

**Problem Statement:** Find a subset of edges $T \subseteq E$ such that:
1.  The subgraph $(V, T)$ is a tree.
2.  The sum of weights of edges in $T$, $\sum_{e \in T} w(e)$, is minimized.

**Significance of MST:**

MST problems arise in various real-world scenarios:

*   **Network Design:** Laying cables (electrical, communication) to connect multiple locations with minimum cost.
*   **Clustering:** Grouping data points based on proximity.
*   **Approximation Algorithms:** Used as a subroutine in more complex optimization problems.
*   **Image Processing:** Image segmentation.

**Example Scenario (Illustrative):**

Imagine you are tasked with connecting five cities (A, B, C, D, E) with roads. The cost of building a road between any two cities is given. You want to find a set of roads to connect all cities such that the total cost of building the roads is minimized, and there are no redundant connections (no loops). This is a classic MST problem.

---

### 3. Prim's Algorithm

Prim's algorithm is a greedy algorithm for finding a Minimum Spanning Tree (MST) for a connected, undirected, weighted graph. It works by iteratively building the MST from a single starting node.

**Core Idea of Prim's Algorithm (Greedy Approach):**

Start with an arbitrary vertex and grow the tree by adding the cheapest edge that connects a vertex already in the growing MST to a vertex outside the growing MST.

**Algorithm Steps:**

1.  **Initialization:**
    *   Start with an arbitrary vertex $v_0 \in V$. Let $S$ be the set of vertices already included in the MST, initially $S = \{v_0\}$. Let $T$ be the set of edges in the MST, initially empty.
    *   For each vertex $v \in V$, maintain two pieces of information:
        *   `key[v]`: The minimum weight of an edge connecting $v$ to a vertex in $S$. Initialize `key[v]` to infinity for all $v \neq v_0$, and `key[v_0] = 0$.
        *   `parent[v]`: The vertex in $S$ that provides the minimum weight edge to $v$. Initialize `parent[v]` to null for all $v$.

2.  **Iteration:** Repeat $n-1$ times (where $n = |V|$ is the number of vertices):
    *   **Select Vertex:** Find a vertex $u \in V \setminus S$ that has the minimum `key[u]`.
    *   **Add to MST:** Add vertex $u$ to $S$. Add the edge $(parent[u], u)$ to the set of MST edges $T$. (If $parent[u]$ is null, it means $u$ is the starting vertex, so no edge is added in this step, but it's included for completeness of the step's logic).
    *   **Update Keys:** For each vertex $v \in V \setminus S$ that is adjacent to $u$:
        *   If $w(u, v) < key[v]$, then update `key[v] = w(u, v)` and `parent[v] = u$.

3.  **Termination:** After $n-1$ iterations, the set $T$ will contain the edges of an MST.

**Data Structures for Efficient Implementation:**

*   **Adjacency List:** To represent the graph.
*   **Priority Queue:** To efficiently find the vertex with the minimum `key` value in each iteration.

**Example Walkthrough (Using a Graph):**

Let's consider the following graph:

Vertices: {A, B, C, D, E}
Edges and Weights:
(A, B): 4
(A, C): 2
(B, C): 5
(B, D): 10
(C, D): 8
(C, E): 3
(D, E): 6

Let's apply Prim's algorithm starting from vertex A.

**Initialization:**

*   $S = \{\}$
*   $T = \{\}$
*   `key` values: `key[A]=0`, `key[B]=inf`, `key[C]=inf`, `key[D]=inf`, `key[E]=inf`
*   `parent` values: `parent[A]=null`, `parent[B]=null`, `parent[C]=null`, `parent[D]=null`, `parent[E]=null`

**Iteration 1:**

*   **Select Vertex:** The vertex with the minimum key is A (key=0).
*   **Add to MST:** Add A to $S$. $S = \{A\}$. (No edge added yet as it's the start vertex).
*   **Update Keys:** Consider neighbors of A:
    *   B is adjacent to A with weight 4. `key[B]` (inf) > 4, so `key[B] = 4`, `parent[B] = A`.
    *   C is adjacent to A with weight 2. `key[C]` (inf) > 2, so `key[C] = 2`, `parent[C] = A`.
*   Current state: $S=\{A\}$, `key={A:0, B:4, C:2, D:inf, E:inf}`, `parent={A:null, B:A, C:A, D:null, E:null}`

**Iteration 2:**

*   **Select Vertex:** The vertex in $V \setminus S$ with the minimum key is C (key=2).
*   **Add to MST:** Add C to $S$. $S = \{A, C\}$. Add edge (parent[C], C) = (A, C) to $T$. $T = \{(A, C)\}$.
*   **Update Keys:** Consider neighbors of C in $V \setminus S$:
    *   B is adjacent to C with weight 5. `key[B]` (4) < 5. No update needed for B.
    *   D is adjacent to C with weight 8. `key[D]` (inf) > 8, so `key[D] = 8`, `parent[D] = C`.
    *   E is adjacent to C with weight 3. `key[E]` (inf) > 3, so `key[E] = 3`, `parent[E] = C`.
*   Current state: $S=\{A, C\}$, $T=\{(A, C)\}$, `key={A:0, B:4, C:2, D:8, E:3}`, `parent={A:null, B:A, C:A, D:C, E:C}`

**Iteration 3:**

*   **Select Vertex:** The vertex in $V \setminus S$ with the minimum key is E (key=3).
*   **Add to MST:** Add E to $S$. $S = \{A, C, E\}$. Add edge (parent[E], E) = (C, E) to $T$. $T = \{(A, C), (C, E)\}$.
*   **Update Keys:** Consider neighbors of E in $V \setminus S$:
    *   D is adjacent to E with weight 6. `key[D]` (8) > 6, so `key[D] = 6`, `parent[D] = E`.
*   Current state: $S=\{A, C, E\}$, $T=\{(A, C), (C, E)\}$, `key={A:0, B:4, C:2, D:6, E:3}`, `parent={A:null, B:A, C:A, D:E, E:C}`

**Iteration 4:**

*   **Select Vertex:** The vertex in $V \setminus S$ with the minimum key is B (key=4).
*   **Add to MST:** Add B to $S$. $S = \{A, C, E, B\}$. Add edge (parent[B], B) = (A, B) to $T$. $T = \{(A, C), (C, E), (A, B)\}$.
*   **Update Keys:** Consider neighbors of B in $V \setminus S$:
    *   D is adjacent to B with weight 10. `key[D]` (6) < 10. No update needed for D.
*   Current state: $S=\{A, C, E, B\}$, $T=\{(A, C), (C, E), (A, B)\}$, `key={A:0, B:4, C:2, D:6, E:3}`, `parent={A:null, B:A, C:A, D:E, E:C}`

**Iteration 5:**

*   **Select Vertex:** The vertex in $V \setminus S$ with the minimum key is D (key=6).
*   **Add to MST:** Add D to $S$. $S = \{A, C, E, B, D\}$. Add edge (parent[D], D) = (E, D) to $T$. $T = \{(A, C), (C, E), (A, B), (E, D)\}$.
*   **Update Keys:** No vertices left in $V \setminus S$.

**Final MST:**

The set of edges in the MST is $T = \{(A, C), (C, E), (A, B), (E, D)\}$.
The total weight of the MST is $w(A, C) + w(C, E) + w(A, B) + w(E, D) = 2 + 3 + 4 + 6 = 15$.

**Visualizing the MST:**

```
     A ----4---- B
     |         /
     2       /
     |     /
     C ---3---- E ----6---- D
     |
     8 (not in MST)
     |
     D (connected via E)
```
The MST connects all nodes without cycles.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### Textual References and Insights:

*   **S.S. Rao (Engineering Optimization: Theory and Practice):** Rao's book, particularly in chapters related to network optimization or graph algorithms, would cover the theoretical underpinnings of spanning trees and MST. It might detail the algorithm's proof of correctness and its complexity. The focus would be on its application within broader engineering optimization contexts.
*   **H.A. Taha (Operations Research):** Taha's work, a cornerstone in Operations Research, would likely present Prim's algorithm within the context of network flow problems or as a specific algorithm for minimum cost connectivity. He often provides clear, step-by-step explanations and examples relevant to industrial applications.
*   **Kanti Swarup, P.K. Gupta, Man Mohan (Operations Research):** This comprehensive text would also cover MST algorithms, likely presenting Prim's alongside Kruskal's algorithm, discussing their relative merits and computational complexities. They might frame it within graph theory applications in resource allocation or logistics.
*   **Kalynamoy Deb (Optimization for Engineering Design):** Deb's book would focus on the algorithmic aspects and potentially implementations for engineering design. He might discuss the algorithm's performance and variations for specific engineering problems.
*   **A. Ravindran, D. T. Phillips, J. J. Solberg (Operations Research – Principles and Practice):** This book would provide a foundational understanding of MSTs, explaining their importance in network design and illustrating Prim's algorithm with practical examples, possibly connecting it to topics like facility location or routing.

**Important Points to Remember from Textbooks:**

*   **Greedy Choice Property:** Prim's algorithm relies on the fact that a minimum edge that connects the growing tree to a new vertex can always be part of an MST.
*   **Cut Property:** An edge with minimum weight that crosses a cut (a partition of vertices into two sets) is part of an MST. Prim's algorithm implicitly uses this property.
*   **Time Complexity:** With a binary heap, Prim's algorithm has a time complexity of $O(E \log V)$ or $O(E + V \log V)$. With a Fibonacci heap, it can achieve $O(E + V \log V)$. For dense graphs, an array-based implementation without a priority queue might be $O(V^2)$.

---

### Practice Questions and Exercises:

**Question 1:**

Consider the following connected, undirected, weighted graph:

Vertices: {1, 2, 3, 4, 5}
Edges and Weights:
(1, 2): 7
(1, 3): 1
(1, 4): 3
(2, 3): 5
(2, 4): 2
(3, 4): 6
(3, 5): 4
(4, 5): 8

Apply Prim's algorithm starting from vertex 1 to find the Minimum Spanning Tree. List the edges in the MST and calculate its total weight.

**Answer 1:**

**Initialization:**
*   $S = \{\}$
*   $T = \{\}$
*   `key`: {1:0, 2:inf, 3:inf, 4:inf, 5:inf}
*   `parent`: {1:null, 2:null, 3:null, 4:null, 5:null}

**Iteration 1:**
*   Select: 1 (key=0)
*   Add: $S=\{1\}$, $T=\{\}$
*   Update Keys:
    *   `key[2]=7`, `parent[2]=1`
    *   `key[3]=1`, `parent[3]=1`
    *   `key[4]=3`, `parent[4]=1`
*   State: $S=\{1\}$, `key`={1:0, 2:7, 3:1, 4:3, 5:inf}, `parent`={1:null, 2:1, 3:1, 4:1, 5:null}

**Iteration 2:**
*   Select: 3 (key=1)
*   Add: $S=\{1, 3\}$, $T=\{(1, 3)\}$
*   Update Keys (neighbors of 3 in $V \setminus S$):
    *   2: `key[2]` (7) > w(3,2) (5) => `key[2]=5`, `parent[2]=3`
    *   4: `key[4]` (3) < w(3,4) (6) => No update
    *   5: `key[5]` (inf) > w(3,5) (4) => `key[5]=4`, `parent[5]=3`
*   State: $S=\{1, 3\}$, $T=\{(1, 3)\}$, `key`={1:0, 2:5, 3:1, 4:3, 5:4}, `parent`={1:null, 2:3, 3:1, 4:1, 5:3}

**Iteration 3:**
*   Select: 5 (key=4)
*   Add: $S=\{1, 3, 5\}$, $T=\{(1, 3), (3, 5)\}$
*   Update Keys (neighbors of 5 in $V \setminus S$):
    *   4: `key[4]` (3) < w(5,4) (8) => No update
*   State: $S=\{1, 3, 5\}$, $T=\{(1, 3), (3, 5)\}$, `key`={1:0, 2:5, 3:1, 4:3, 5:4}, `parent`={1:null, 2:3, 3:1, 4:1, 5:3}

**Iteration 4:**
*   Select: 4 (key=3)
*   Add: $S=\{1, 3, 5, 4\}$, $T=\{(1, 3), (3, 5), (1, 4)\}$
*   Update Keys (neighbors of 4 in $V \setminus S$):
    *   2: `key[2]` (5) > w(4,2) (2) => `key[2]=2`, `parent[2]=4`
*   State: $S=\{1, 3, 5, 4\}$, $T=\{(1, 3), (3, 5), (1, 4)\}$, `key`={1:0, 2:2, 3:1, 4:3, 5:4}, `parent`={1:null, 2:4, 3:1, 4:1, 5:3}

**Iteration 5:**
*   Select: 2 (key=2)
*   Add: $S=\{1, 3, 5, 4, 2\}$, $T=\{(1, 3), (3, 5), (1, 4), (4, 2)\}$
*   Update Keys: No vertices left in $V \setminus S$.

**MST Edges:** {(1, 3), (3, 5), (1, 4), (4, 2)}
**Total Weight:** $1 + 4 + 3 + 2 = 10$

---

**Question 2:**

Which of the following statements is true about Prim's algorithm?

a) It starts by finding the cheapest edge in the entire graph and adding it.
b) It always finds a Minimum Spanning Tree for any connected, undirected, weighted graph.
c) It can fail if the graph contains negative edge weights.
d) It requires the graph to be acyclic to begin with.

**Answer 2:**

b) It always finds a Minimum Spanning Tree for any connected, undirected, weighted graph.

*   **Explanation for other options:**
    *   a) This describes Kruskal's algorithm, not Prim's. Prim's grows the tree from a single vertex.
    *   c) Prim's algorithm, like Kruskal's, correctly handles negative edge weights as long as the graph remains connected. The issue with negative weights typically arises in shortest path algorithms where negative cycles can occur.
    *   d) Prim's algorithm is used to *find* a spanning tree, which by definition is acyclic. The input graph does not need to be acyclic; Prim's algorithm ensures the output is.

---

**Question 3:**

Consider a graph with 7 vertices and 6 edges that forms a Minimum Spanning Tree. If you were to run Prim's algorithm on this graph, how many vertices would be added to the set $S$ (the set of vertices in the MST) in total after $k$ iterations?

**Answer 3:**

After $k$ iterations of Prim's algorithm, $k$ vertices are added to the set $S$. Therefore, after 7 iterations (for a graph with 7 vertices), all 7 vertices will be in $S$.

---

### Important Points to Remember:

*   **Prim's is Greedy:** It makes the locally optimal choice at each step, which leads to a globally optimal solution (the MST).
*   **Starts from a Vertex:** Unlike Kruskal's (which starts by considering edges), Prim's algorithm grows the MST from a single vertex.
*   **Cut Property Application:** The algorithm implicitly uses the cut property to select the minimum weight edge that crosses the cut between vertices already in the MST and those not yet included.
*   **Connectivity is Key:** The input graph must be connected for an MST to exist.
*   **Negative Weights:** Prim's algorithm works correctly with negative edge weights, provided there are no negative cycles (which are not possible in an MST context where we select edges).
*   **Complexity:** The efficiency depends heavily on the data structure used to manage the `key` values (e.g., priority queue).

---