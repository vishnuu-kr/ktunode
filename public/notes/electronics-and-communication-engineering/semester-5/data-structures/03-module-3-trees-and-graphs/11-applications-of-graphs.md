---
title: "Applications of Graphs"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea1b"
status: "completed"
scrapedAt: "2026-05-23T17:55:15.344Z"
---
## Data Structures: Module 3 - Trees and Graphs

### Topic: Applications of Graphs

---

**Module Learning Outcomes:**

*   Understand the fundamental concepts of trees and graphs.
*   Apply tree and graph traversal algorithms (e.g., BFS, DFS).
*   Analyze the efficiency of tree and graph algorithms.
*   Solve real-world problems using trees and graphs.

**Course Outcomes Addressed:**

*   **CO3:** Make use of nonlinear data structures like trees and graphs to design algorithms for various applications. (Knowledge Level: K3)

---

### 1. Introduction to Graphs and Their Real-World Representation

A graph is a collection of **vertices** (or nodes) and **edges** that connect pairs of vertices. Graphs are powerful tools for modeling relationships between objects.

**Key Concepts:**

*   **Graph (G):** Defined as a pair $(V, E)$, where $V$ is a set of vertices and $E$ is a set of edges.
*   **Vertex (v):** An object in the graph.
*   **Edge (e):** A connection between two vertices.
*   **Undirected Graph:** Edges have no direction. If there's an edge between $u$ and $v$, it can be traversed from $u$ to $v$ and from $v$ to $u$.
*   **Directed Graph (Digraph):** Edges have a direction. An edge from $u$ to $v$ means it can only be traversed from $u$ to $v$.
*   **Weighted Graph:** Each edge has an associated weight or cost.
*   **Adjacent Vertices:** Two vertices connected by an edge.
*   **Degree of a Vertex:**
    *   **Undirected Graph:** The number of edges incident to the vertex.
    *   **Directed Graph:**
        *   **In-degree:** The number of edges pointing *to* the vertex.
        *   **Out-degree:** The number of edges pointing *from* the vertex.
*   **Path:** A sequence of vertices connected by edges.
*   **Cycle:** A path that starts and ends at the same vertex.
*   **Connected Graph (Undirected):** For any two vertices $u$ and $v$, there is a path between them.
*   **Strongly Connected Graph (Directed):** For any two vertices $u$ and $v$, there is a path from $u$ to $v$ and a path from $v$ to $u$.
*   **Subgraph:** A graph formed by a subset of vertices and edges of the original graph.
*   **Tree:** A connected undirected graph with no cycles. (A special case of a graph).

**Representations of Graphs (Refer to Horowitz, Sahni & Anderson-Freed, Ch 7):**

*   **Adjacency Matrix:** A square matrix where $A[i][j] = 1$ if there's an edge between vertex $i$ and vertex $j$, and $0$ otherwise. For weighted graphs, $A[i][j]$ stores the weight.
    *   **Pros:** Fast edge lookup ($O(1)$).
    *   **Cons:** Requires $O(V^2)$ space, which can be inefficient for sparse graphs.
*   **Adjacency List:** An array of linked lists, where each index $i$ corresponds to vertex $i$, and the linked list at $i$ contains all vertices adjacent to $i$.
    *   **Pros:** Efficient for sparse graphs ($O(V+E)$ space).
    *   **Cons:** Edge lookup can take $O(\text{degree}(v))$ time.

---

### 2. Major Applications of Graphs

Graphs are ubiquitous in computer science and can model a wide range of real-world problems.

#### 2.1. Social Networks

*   **Modeling:** Users are represented as vertices, and friendships/connections are represented as edges.
*   **Applications:**
    *   **Friend Recommendation:** Finding common friends between users.
    *   **Influence Analysis:** Identifying influential users in a network.
    *   **Community Detection:** Grouping users with similar connections.
    *   **Pathfinding:** "Six Degrees of Separation" – finding the shortest path between two individuals.
*   **Graph Type:** Usually undirected, can be weighted to represent strength of connection.

#### 2.2. World Wide Web (WWW)

*   **Modeling:** Web pages are vertices, and hyperlinks between pages are directed edges.
*   **Applications:**
    *   **Web Search Engines (PageRank):** Determining the importance of web pages based on incoming links. A page is important if important pages link to it. This is a classic application of **eigenvector centrality**, related to graph traversal. (Refer to discussions on PageRank algorithms in advanced texts, though detailed algorithm implementation might be beyond basic DS).
    *   **Website Navigation:** Understanding the structure of a website.
    *   **Link Analysis:** Identifying spam or malicious linking patterns.
*   **Graph Type:** Directed, weighted (can represent link popularity or anchor text).

#### 2.3. Navigation Systems and Maps

*   **Modeling:** Intersections or locations are vertices, and roads are edges. Edge weights represent distance, travel time, or cost.
*   **Applications:**
    *   **Shortest Path Finding:** Finding the quickest or shortest route between two points (e.g., GPS navigation). Algorithms like **Dijkstra's Algorithm** and **A\* Search** are crucial here. (Refer to Horowitz, Sahni & Anderson-Freed, Ch 8 on Graph Algorithms).
    *   **Traffic Flow Analysis:** Modeling and predicting traffic patterns.
    *   **Delivery Route Optimization:** Finding efficient routes for delivery services.
*   **Graph Type:** Weighted, often directed (due to one-way streets).

#### 2.4. Computer Networks

*   **Modeling:** Devices (routers, computers) are vertices, and network connections are edges. Edge weights can represent bandwidth or latency.
*   **Applications:**
    *   **Routing Algorithms:** Determining the best path for data packets to travel across a network (e.g., OSPF, BGP use concepts related to shortest paths).
    *   **Network Topology Design:** Planning the structure of a network.
    *   **Detecting Network Failures:** Identifying bottlenecks or broken links.
*   **Graph Type:** Weighted, often directed.

#### 2.5. Project Management (PERT/CPM)

*   **Modeling:** Tasks are represented by nodes (activities) or edges in a graph. Dependencies between tasks are represented by directed edges.
*   **Applications:**
    *   **Critical Path Method (CPM):** Identifying the sequence of tasks that determines the shortest possible project duration. This involves finding the longest path in a Directed Acyclic Graph (DAG).
    *   **Program Evaluation and Review Technique (PERT):** Used for projects with uncertain task durations, often involving probabilistic analysis.
*   **Graph Type:** Directed Acyclic Graph (DAG).

#### 2.6. Circuit Design and VLSI

*   **Modeling:** Components or gates are vertices, and connections are edges.
*   **Applications:**
    *   **Layout Optimization:** Arranging components on a chip.
    *   **Connectivity Verification:** Ensuring all components are correctly wired.
*   **Graph Type:** Can be directed or undirected, weighted.

#### 2.7. Compiler Design (Expression Trees)

*   **Modeling:** Abstract Syntax Trees (ASTs) are a specific type of tree (and thus graph) used to represent the structure of code.
*   **Applications:**
    *   **Code Optimization:** Rearranging code for efficiency.
    *   **Code Generation:** Translating ASTs into machine code.
*   **Graph Type:** Tree (a special type of undirected, acyclic graph).

#### 2.8. Operating Systems (Resource Allocation)

*   **Modeling:** Processes and resources are vertices. Edges represent resource allocation (process holds resource) or requests (process wants resource).
*   **Applications:**
    *   **Deadlock Detection:** Identifying cyclic dependencies where processes are waiting for resources held by other processes. This uses a **Resource Allocation Graph**, which can be analyzed for cycles.
*   **Graph Type:** Directed, often bipartite.

---

### 3. Graph Traversal Algorithms in Applications

Understanding how to traverse graphs is fundamental to many applications.

#### 3.1. Breadth-First Search (BFS)

*   **Concept:** Explores the graph layer by layer, visiting all neighbors of a vertex before moving to the next level. Uses a queue.
*   **Applications:**
    *   **Shortest Path in Unweighted Graphs:** Finding the minimum number of edges to reach a destination. (CO3)
    *   **Finding Connected Components:** Identifying separate parts of a graph.
    *   **Web Crawlers:** Discovering new web pages by following links.
    *   **Garbage Collection:** Identifying reachable objects in memory.
*   **Efficiency:** $O(V+E)$ using adjacency lists.

#### 3.2. Depth-First Search (DFS)

*   **Concept:** Explores as far as possible along each branch before backtracking. Uses a stack (or recursion).
*   **Applications:**
    *   **Cycle Detection:** Identifying if a graph contains a cycle. (CO3)
    *   **Topological Sorting:** Ordering vertices in a DAG such that for every directed edge $(u, v)$, $u$ comes before $v$. Essential for project scheduling (PERT/CPM) and dependency resolution. (CO3)
    *   **Finding Strongly Connected Components (SCCs):** Identifying maximal subgraphs where every pair of vertices is reachable from each other.
    *   **Pathfinding:** Finding *any* path between two vertices.
*   **Efficiency:** $O(V+E)$ using adjacency lists.

---

### 4. Key Graph Algorithms and Their Applications

#### 4.1. Shortest Path Algorithms

*   **Single Source Shortest Path:** Find the shortest path from a single source vertex to all other vertices.
    *   **Dijkstra's Algorithm:** For graphs with non-negative edge weights. (Refer to Horowitz, Sahni & Anderson-Freed, Ch 8.4)
        *   **Application:** GPS navigation, finding cheapest flight routes. (CO3)
        *   **Efficiency:** $O(E \log V)$ or $O(E + V \log V)$ with a priority queue.
    *   **Bellman-Ford Algorithm:** For graphs with negative edge weights (but no negative cycles).
        *   **Application:** Detecting negative cycles, some network routing protocols.
        *   **Efficiency:** $O(VE)$.

*   **All-Pairs Shortest Path:** Find the shortest path between all pairs of vertices.
    *   **Floyd-Warshall Algorithm:** Dynamic programming approach. (Refer to Horowitz, Sahni & Anderson-Freed, Ch 8.5)
        *   **Application:** Analyzing all pairwise distances in a road network or computing transitive closure. (CO3)
        *   **Efficiency:** $O(V^3)$.

#### 4.2. Minimum Spanning Tree (MST) Algorithms

*   **Concept:** For a connected, undirected, weighted graph, an MST is a subgraph that connects all vertices together, without any cycles and with the minimum possible total edge weight.
*   **Prim's Algorithm:** Grows the MST by adding the cheapest edge connecting a vertex in the MST to a vertex outside the MST. (Refer to Horowitz, Sahni & Anderson-Freed, Ch 8.2)
    *   **Application:** Designing efficient network layouts (e.g., laying cables to connect all locations with minimum cost), cluster analysis. (CO3)
    *   **Efficiency:** $O(E \log V)$ or $O(E + V \log V)$ with a priority queue.
*   **Kruskal's Algorithm:** Grows the MST by adding edges in increasing order of weight, as long as adding an edge does not form a cycle. Uses a Disjoint Set Union (DSU) data structure. (Refer to Horowitz, Sahni & Anderson-Freed, Ch 8.3)
    *   **Application:** Same as Prim's. (CO3)
    *   **Efficiency:** $O(E \log E)$ or $O(E \log V)$.

#### 4.3. Topological Sort

*   **Concept:** Linear ordering of vertices in a DAG such that for every directed edge $(u, v)$, vertex $u$ comes before vertex $v$.
*   **Algorithms:**
    *   **Kahn's Algorithm (using BFS):** Based on in-degrees.
    *   **DFS-based Algorithm:** Based on finishing times.
*   **Application:** Task scheduling, dependency resolution, build systems. (CO3)
*   **Efficiency:** $O(V+E)$.

#### 4.4. Cycle Detection

*   **Concept:** Determining if a graph contains a cycle.
*   **Algorithms:**
    *   **Using DFS:** Keep track of vertices currently in the recursion stack. If DFS encounters a vertex already in the stack, a cycle exists. (CO3)
    *   **Using Disjoint Set Union (DSU):** For undirected graphs, when adding an edge $(u, v)$, if $u$ and $v$ are already in the same set, a cycle is formed.
*   **Application:** Detecting deadlocks in operating systems, validating constraints in project management. (CO3)

---

### 5. Important Points to Remember

*   **Graph Representation Choice:** The choice between adjacency matrix and adjacency list depends heavily on whether the graph is sparse or dense. Sparse graphs benefit from adjacency lists, while dense graphs might be fine with adjacency matrices.
*   **Directed vs. Undirected:** The nature of the relationship (one-way or two-way) dictates whether a directed or undirected graph is appropriate.
*   **Weighted vs. Unweighted:** If costs or distances are involved, use weighted graphs and appropriate algorithms (like Dijkstra's).
*   **Cycles:** The presence or absence of cycles is critical for algorithms like topological sort and affects the choice of shortest path algorithms. DAGs are fundamental for many scheduling and dependency problems.
*   **Algorithm Suitability:** Always match the problem to the correct graph algorithm. For example, use BFS for unweighted shortest paths, Dijkstra's for non-negative weighted shortest paths, and MST algorithms for minimum cost connectivity.
*   **Data Structures for Algorithms:** Many graph algorithms rely on auxiliary data structures. For instance, BFS uses a queue, DFS uses a stack (or recursion), and Kruskal's uses a Disjoint Set Union data structure.

---

### 6. Practice Questions and Exercises

**Question 1 (Conceptual):**
Describe a real-world scenario that can be modeled using a directed weighted graph. What do the vertices, edges, and weights represent in your scenario?

**Answer:**
Scenario: **Airline Flight Network**
*   **Vertices:** Airports.
*   **Edges:** Direct flight routes between airports.
*   **Directed:** A flight from Airport A to Airport B is not necessarily the same as a flight from Airport B to Airport A (e.g., one-way flights, different routes).
*   **Weights:** Could represent:
    *   Flight duration (e.g., hours).
    *   Flight cost (e.g., ticket price).
    *   Distance between airports.
    *   Number of available seats.

This model can be used to find the shortest (in terms of time or cost) flight path between two cities. (Addresses CO3)

---

**Question 2 (Application Identification):**
You are designing a system to recommend "people you may know" on a social media platform. Which type of graph traversal would be most suitable for finding friends of friends? Briefly explain why.

**Answer:**
**Breadth-First Search (BFS)** would be most suitable.
Explanation: BFS explores the graph layer by layer. Starting from a user (vertex), it first finds all their direct friends (layer 1). Then, it explores all friends of those direct friends who are not already known (layer 2). This layer-by-layer expansion is ideal for discovering connections at a specific "distance" (e.g., friends of friends, which is two steps away). (Addresses CO3)

---

**Question 3 (Algorithm Choice):**
A city planning department wants to connect several new buildings to the existing power grid with the minimum total length of new power cables. They have identified all possible connection points and the cost (length) for each potential cable. Which graph algorithm should they use?

**Answer:**
They should use a **Minimum Spanning Tree (MST)** algorithm, either **Prim's Algorithm** or **Kruskal's Algorithm**.
Explanation: The problem requires connecting all vertices (buildings) with the minimum total weight (cable length) without forming cycles, which is the definition of an MST. (Addresses CO3)

---

**Question 4 (Topological Sort Application):**
Consider the following set of tasks for building a computer and their dependencies:
*   Task A: Assemble CPU
*   Task B: Assemble Motherboard
*   Task C: Install CPU on Motherboard (depends on A, B)
*   Task D: Install RAM (depends on B)
*   Task E: Install Graphics Card (depends on B)
*   Task F: Connect Power Supply (depends on C, D, E)
*   Task G: Assemble Case (no dependencies)
*   Task H: Mount Components in Case (depends on F, G)

Represent these tasks and dependencies as a Directed Acyclic Graph (DAG) and perform a topological sort to determine a valid order of assembly.

**Answer:**
**DAG Representation:**
Vertices: A, B, C, D, E, F, G, H
Edges:
(A, C), (B, C), (B, D), (B, E), (C, F), (D, F), (E, F), (F, H), (G, H)

**Topological Sort (using Kahn's Algorithm - based on in-degrees):**

1.  **Initial In-degrees:**
    *   A: 0
    *   B: 0
    *   C: 2 (from A, B)
    *   D: 1 (from B)
    *   E: 1 (from B)
    *   F: 3 (from C, D, E)
    *   G: 0
    *   H: 2 (from F, G)

2.  **Queue:** [A, B, G] (Vertices with in-degree 0)
3.  **Sorted List:** []

**Step 1:** Dequeue A. Add to Sorted List.
    *   Sorted List: [A]
    *   Decrement in-degree of C (neighbor of A). C's in-degree becomes 1.
    *   Queue: [B, G]

**Step 2:** Dequeue B. Add to Sorted List.
    *   Sorted List: [A, B]
    *   Decrement in-degrees of C, D, E.
        *   C's in-degree becomes 0. Add C to queue.
        *   D's in-degree becomes 0. Add D to queue.
        *   E's in-degree becomes 0. Add E to queue.
    *   Queue: [G, C, D, E]

**Step 3:** Dequeue G. Add to Sorted List.
    *   Sorted List: [A, B, G]
    *   Decrement in-degree of H (neighbor of G). H's in-degree becomes 1.
    *   Queue: [C, D, E]

**Step 4:** Dequeue C. Add to Sorted List.
    *   Sorted List: [A, B, G, C]
    *   Decrement in-degree of F (neighbor of C). F's in-degree becomes 2.
    *   Queue: [D, E]

**Step 5:** Dequeue D. Add to Sorted List.
    *   Sorted List: [A, B, G, C, D]
    *   Decrement in-degree of F (neighbor of D). F's in-degree becomes 1.
    *   Queue: [E]

**Step 6:** Dequeue E. Add to Sorted List.
    *   Sorted List: [A, B, G, C, D, E]
    *   Decrement in-degree of F (neighbor of E). F's in-degree becomes 0. Add F to queue.
    *   Queue: [F]

**Step 7:** Dequeue F. Add to Sorted List.
    *   Sorted List: [A, B, G, C, D, E, F]
    *   Decrement in-degree of H (neighbor of F). H's in-degree becomes 0. Add H to queue.
    *   Queue: [H]

**Step 8:** Dequeue H. Add to Sorted List.
    *   Sorted List: [A, B, G, C, D, E, F, H]
    *   Queue: []

**A valid topological sort:** A, B, G, C, D, E, F, H.
(This ensures that all prerequisite tasks are completed before dependent tasks). (Addresses CO3)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 7. References & Further Reading

*   **Fundamentals of Data Structures in C** by Horowitz, Sahni and Anderson-Freed (2/e, 2008) - Chapters 7 (Graphs) and 8 (Graph Algorithms) are highly relevant.
*   **Classic Data Structures** by Samanta D (2/e, 2009) - Covers graph representation and algorithms.
*   **Data Structures: A Pseudocode Approach with C** by Gilberg and Forouzan (2/e, 2005) - Provides practical examples and pseudocode for graph applications.
*   **Data Structures and Algorithms** by Aho, Hopcroft and Ullman (1/e, 1983) - A foundational text for graph theory and algorithms.
*   **Introduction to Data Structures with Applications** by Tremblay and Sorenson (2/e, 1995) - Offers comprehensive coverage of graph applications.
*   **Theory and Problems of Data Structures** by Lipschuts S. (Schaum’s Series, 2/e, 2016) - Excellent for practice problems and concise explanations.

This module's content directly supports **CO3** by illustrating how graphs serve as powerful tools for designing algorithms to solve complex, real-world problems across various domains. The applications discussed demonstrate the practical utility of graph structures and the algorithms that operate on them.