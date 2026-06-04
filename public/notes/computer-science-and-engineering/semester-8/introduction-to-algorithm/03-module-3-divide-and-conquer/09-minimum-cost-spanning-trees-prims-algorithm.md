---
title: "Minimum Cost Spanning Trees – PRIM’s Algorithm"
subject: "INTRODUCTION TO ALGORITHM"
module: "Module 3: Divide and Conquer "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cbd5"
status: "completed"
scrapedAt: "2026-05-20T17:25:18.151Z"
---
# Introduction to Algorithms - Module 3: Divide and Conquer

## Topic: Minimum Cost Spanning Trees – Prim's Algorithm

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the concept of a Minimum Spanning Tree (MST) and its properties.
*   Explain the core idea behind Prim's algorithm for finding an MST.
*   Describe the steps involved in Prim's algorithm.
*   Analyze the time complexity of Prim's algorithm with different data structures.
*   Apply Prim's algorithm to find the MST of a given graph.
*   Discuss the relationship between Prim's algorithm and other MST algorithms (e.g., Kruskal's).

---

### 1. Introduction to Minimum Spanning Trees (MST)

#### Key Concepts and Definitions:

*   **Graph:** A collection of vertices (nodes) connected by edges.
    *   **Undirected Graph:** Edges have no direction.
    *   **Connected Graph:** There is a path between every pair of vertices.
    *   **Weighted Graph:** Each edge has an associated numerical value (weight), often representing cost, distance, or capacity.
*   **Spanning Tree:** A subgraph of a connected, undirected graph that is a tree and connects all the vertices of the original graph.
    *   A spanning tree of a graph with 'V' vertices will have exactly 'V-1' edges.
    *   It contains no cycles.
*   **Minimum Spanning Tree (MST):** A spanning tree of a connected, weighted, undirected graph that has the minimum possible total edge weight. In essence, it's the "cheapest" way to connect all vertices.

#### Properties of MSTs:

*   **Uniqueness (mostly):** If all edge weights are distinct, the MST is unique. If there are multiple edges with the same weight, there might be multiple MSTs, but they will all have the same minimum total weight.
*   **Cut Property:** For any cut (a partition of the graph's vertices into two disjoint sets), if an edge has the minimum weight among all edges crossing the cut, then this edge must belong to some MST.
*   **Cycle Property:** For any cycle in the graph, the edge with the highest weight in that cycle cannot be part of any MST.

---

### 2. Prim's Algorithm: The Core Idea

Prim's algorithm is a **greedy algorithm** that finds a Minimum Spanning Tree for a connected, weighted, undirected graph. It works by **growing** an MST from a single vertex.

**Core Idea:**

Start with an arbitrary vertex. At each step, add the cheapest edge that connects a vertex already in the growing MST to a vertex outside the MST. This process continues until all vertices are included in the MST.

**Analogy:** Imagine you're building a network of roads to connect several cities. You start with one city and then find the cheapest road to connect it to a new, unconnected city. You keep doing this, always choosing the cheapest road that expands your connected network to a new city, until all cities are connected.

---

### 3. Steps Involved in Prim's Algorithm

Let's consider a connected, weighted, undirected graph $G = (V, E)$, where $V$ is the set of vertices and $E$ is the set of edges.

**Algorithm Steps:**

1.  **Initialization:**
    *   Create a set `MST_Set` to store the vertices already included in the MST. Initially, `MST_Set` is empty.
    *   Initialize a `key` array (or similar data structure) to store the minimum weight edge connecting each vertex to the MST. For all vertices $v \in V$, set `key[v] = infinity`.
    *   Initialize a `parent` array to store the MST structure. `parent[v]` will store the vertex from which $v$ was added to the MST.
    *   Choose an arbitrary starting vertex, say `s`. Set `key[s] = 0` and `parent[s] = NULL` (or -1).

2.  **Iteration (V-1 times):**
    *   **Select the cheapest edge:** Pick the vertex `u` that is *not* yet in `MST_Set` and has the minimum `key` value.
    *   **Add to MST:** Add vertex `u` to `MST_Set`.
    *   **Update adjacent vertices:** For each neighbor `v` of `u`:
        *   If `v` is *not* in `MST_Set` AND the weight of the edge `(u, v)` is less than the current `key[v]`:
            *   Update `key[v] = weight(u, v)`.
            *   Set `parent[v] = u`.

3.  **Termination:** After V-1 iterations, `MST_Set` will contain all vertices, and the `parent` array will define the MST. The MST consists of the edges `(v, parent[v])` for all $v \neq s$.

---

### 4. Example: Prim's Algorithm in Action

Let's find the MST of the following graph:

```
      A --(2)-- B --(3)-- C
      |        / \        |
     (4)      (1) (5)     (6)
      |      /     \      |
      D --(7)-- E --(8)-- F
```

Vertices: {A, B, C, D, E, F}
Edges and weights:
(A,B): 2, (A,D): 4, (B,C): 3, (B,D): 1, (B,E): 5, (C,F): 6, (D,E): 7, (E,F): 8

Let's start with vertex **A**.

**Initialization:**

*   `MST_Set = {}`
*   `key = {A:0, B:inf, C:inf, D:inf, E:inf, F:inf}`
*   `parent = {A:NULL, B:NULL, C:NULL, D:NULL, E:NULL, F:NULL}`

**Iteration 1:**

*   Pick vertex with minimum `key`: **A** (key=0).
*   Add A to `MST_Set`. `MST_Set = {A}`.
*   Update neighbors of A:
    *   B: `key[B] = min(inf, weight(A,B)=2) = 2`. `parent[B] = A`.
    *   D: `key[D] = min(inf, weight(A,D)=4) = 4`. `parent[D] = A`.
*   `key = {A:0, B:2, C:inf, D:4, E:inf, F:inf}`
*   `parent = {A:NULL, B:A, C:NULL, D:A, E:NULL, F:NULL}`

**Iteration 2:**

*   Pick vertex with minimum `key` (not in `MST_Set`): **B** (key=2).
*   Add B to `MST_Set`. `MST_Set = {A, B}`.
*   Update neighbors of B:
    *   A: Already in `MST_Set`. Ignore.
    *   C: `key[C] = min(inf, weight(B,C)=3) = 3`. `parent[C] = B`.
    *   D: `key[D] = min(4, weight(B,D)=1) = 1`. `parent[D] = B`.
    *   E: `key[E] = min(inf, weight(B,E)=5) = 5`. `parent[E] = B`.
*   `key = {A:0, B:2, C:3, D:1, E:5, F:inf}`
*   `parent = {A:NULL, B:A, C:B, D:B, E:B, F:NULL}`

**Iteration 3:**

*   Pick vertex with minimum `key` (not in `MST_Set`): **D** (key=1).
*   Add D to `MST_Set`. `MST_Set = {A, B, D}`.
*   Update neighbors of D:
    *   A: Already in `MST_Set`. Ignore.
    *   B: Already in `MST_Set`. Ignore.
    *   E: `key[E] = min(5, weight(D,E)=7) = 5`. `parent[E]` remains B.
*   `key = {A:0, B:2, C:3, D:1, E:5, F:inf}`
*   `parent = {A:NULL, B:A, C:B, D:B, E:B, F:NULL}`

**Iteration 4:**

*   Pick vertex with minimum `key` (not in `MST_Set`): **C** (key=3).
*   Add C to `MST_Set`. `MST_Set = {A, B, D, C}`.
*   Update neighbors of C:
    *   B: Already in `MST_Set`. Ignore.
    *   F: `key[F] = min(inf, weight(C,F)=6) = 6`. `parent[F] = C`.
*   `key = {A:0, B:2, C:3, D:1, E:5, F:6}`
*   `parent = {A:NULL, B:A, C:B, D:B, E:B, F:C}`

**Iteration 5:**

*   Pick vertex with minimum `key` (not in `MST_Set`): **E** (key=5).
*   Add E to `MST_Set`. `MST_Set = {A, B, D, C, E}`.
*   Update neighbors of E:
    *   B: Already in `MST_Set`. Ignore.
    *   D: Already in `MST_Set`. Ignore.
    *   F: `key[F] = min(6, weight(E,F)=8) = 6`. `parent[F]` remains C.
*   `key = {A:0, B:2, C:3, D:1, E:5, F:6}`
*   `parent = {A:NULL, B:A, C:B, D:B, E:B, F:C}`

**Iteration 6:**

*   Pick vertex with minimum `key` (not in `MST_Set`): **F** (key=6).
*   Add F to `MST_Set`. `MST_Set = {A, B, D, C, E, F}`.
*   Update neighbors of F:
    *   C: Already in `MST_Set`. Ignore.
    *   E: Already in `MST_Set`. Ignore.

All vertices are now in `MST_Set`. The MST is formed by edges connecting each vertex to its parent (excluding the start vertex which has no parent).

**MST Edges:**
*   (A, NULL) - starting vertex
*   (B, A) - weight 2
*   (C, B) - weight 3
*   (D, B) - weight 1
*   (E, B) - weight 5
*   (F, C) - weight 6

**Total MST Weight:** 2 + 3 + 1 + 5 + 6 = **17**

The edges forming the MST are: (A,B), (B,D), (B,C), (B,E), (C,F).

---

### 5. Time Complexity of Prim's Algorithm

The time complexity of Prim's algorithm depends heavily on the data structure used to efficiently find the vertex with the minimum `key` value.

Let $|V|$ be the number of vertices and $|E|$ be the number of edges.

1.  **Using an Adjacency Matrix and Simple Array for Keys:**
    *   **Initialization:** $O(V)$ to initialize `key` and `parent` arrays.
    *   **Main Loop (V iterations):**
        *   Finding the minimum `key` vertex: $O(V)$ in each iteration (requires scanning the `key` array). Total for this step: $O(V^2)$.
        *   Updating adjacent vertices: For each vertex `u` added, we iterate through its neighbors. In an adjacency matrix, this takes $O(V)$ for each vertex. Total for this step: $O(V^2)$.
    *   **Overall Time Complexity:** $O(V^2)$. This is suitable for dense graphs (where $|E|$ is close to $|V|^2$).

2.  **Using an Adjacency List and a Min-Priority Queue (Binary Heap):**
    *   **Initialization:** $O(V)$ to initialize `key` and `parent` arrays. Building the heap with all vertices initially: $O(V)$.
    *   **Main Loop (V iterations):**
        *   Extracting the minimum `key` vertex from the priority queue: $O(\log V)$ per extraction. Total for this step: $O(V \log V)$.
        *   Updating adjacent vertices: For each edge `(u, v)`, if `v` is not in the MST, we might update its `key`. If `v` is already in the priority queue, `decrease-key` operation takes $O(\log V)$. In the worst case, every edge might cause a `decrease-key` operation.
    *   **Overall Time Complexity:** $O(E \log V)$ (since we might consider each edge once for relaxation, and the heap operations take $O(\log V)$). This is suitable for sparse graphs (where $|E|$ is much smaller than $|V|^2$).

3.  **Using an Adjacency List and a Fibonacci Heap:**
    *   **Initialization:** $O(V)$ for `key` and `parent` arrays. Building the Fibonacci heap: $O(V)$.
    *   **Main Loop (V iterations):**
        *   Extracting the minimum `key` vertex: $O(\log V)$ amortized. Total for this step: $O(V \log V)$.
        *   Updating adjacent vertices: `decrease-key` operation in a Fibonacci heap is $O(1)$ amortized.
    *   **Overall Time Complexity:** $O(E + V \log V)$. This is theoretically the most efficient for sparse graphs.

**Important Note:** For typical implementations and understanding, $O(V^2)$ (with adjacency matrix/simple array) and $O(E \log V)$ (with adjacency list and binary heap) are the most common complexities discussed.

---

### 6. Prim's Algorithm vs. Kruskal's Algorithm

Both Prim's and Kruskal's algorithms are greedy algorithms used to find MSTs.

| Feature          | Prim's Algorithm                                     | Kruskal's Algorithm                               |
| :--------------- | :--------------------------------------------------- | :------------------------------------------------ |
| **Approach**     | Grows MST from a single vertex.                      | Grows MST by adding edges in increasing order of weight. |
| **Data Structure** | Primarily uses a priority queue.                     | Primarily uses a Disjoint Set Union (DSU) data structure. |
| **Focus**        | Connects vertices to the growing MST.                | Connects components.                              |
| **Complexity**   | $O(V^2)$ (dense) or $O(E \log V)$ (sparse).         | $O(E \log E)$ or $O(E \log V)$ (sorting edges).  |
| **Graph Density**| Better for dense graphs.                             | Better for sparse graphs.                         |
| **Edge Selection**| Selects an edge connecting MST to non-MST vertex. | Selects the cheapest edge that doesn't form a cycle. |

---

### 7. Important Points to Remember

*   Prim's algorithm is a **greedy algorithm**.
*   It finds a **Minimum Spanning Tree (MST)** for connected, weighted, undirected graphs.
*   It starts with a single vertex and **grows the MST** by adding the cheapest edge that connects a vertex inside the MST to a vertex outside.
*   The algorithm runs for **$|V|-1$ iterations**.
*   The choice of data structure for maintaining keys (priority queue) significantly impacts the time complexity.
*   It guarantees finding an MST due to the **cut property**.
*   The `key` array stores the minimum weight edge connecting a vertex to the current MST.
*   The `parent` array helps reconstruct the MST.

---

### 8. Practice Questions/Exercises

**Question 1:**

Consider the following weighted, undirected graph:

```
      1 --(3)-- 2
      |       / \
     (5)     (2) (6)
      |     /     \
      3 --(4)-- 4
```

Vertices: {1, 2, 3, 4}
Edges and weights: (1,2): 3, (1,3): 5, (2,3): 2, (2,4): 6, (3,4): 4

Using Prim's algorithm, find the Minimum Spanning Tree. Start with vertex 1. Show the steps clearly. What is the total weight of the MST?

**Answer to Question 1:**

**Initialization:**
*   `MST_Set = {}`
*   `key = {1:0, 2:inf, 3:inf, 4:inf}`
*   `parent = {1:NULL, 2:NULL, 3:NULL, 4:NULL}`

**Iteration 1:**
*   Pick: **1** (key=0)
*   `MST_Set = {1}`
*   Update neighbors of 1:
    *   2: `key[2] = 3`, `parent[2] = 1`
    *   3: `key[3] = 5`, `parent[3] = 1`
*   `key = {1:0, 2:3, 3:5, 4:inf}`
*   `parent = {1:NULL, 2:1, 3:1, 4:NULL}`

**Iteration 2:**
*   Pick: **2** (key=3)
*   `MST_Set = {1, 2}`
*   Update neighbors of 2:
    *   1: In `MST_Set`. Ignore.
    *   3: `key[3] = min(5, weight(2,3)=2) = 2`. `parent[3] = 2`.
    *   4: `key[4] = min(inf, weight(2,4)=6) = 6`. `parent[4] = 2`.
*   `key = {1:0, 2:3, 3:2, 4:6}`
*   `parent = {1:NULL, 2:1, 3:2, 4:2}`

**Iteration 3:**
*   Pick: **3** (key=2)
*   `MST_Set = {1, 2, 3}`
*   Update neighbors of 3:
    *   1: In `MST_Set`. Ignore.
    *   2: In `MST_Set`. Ignore.
    *   4: `key[4] = min(6, weight(3,4)=4) = 4`. `parent[4] = 3`.
*   `key = {1:0, 2:3, 3:2, 4:4}`
*   `parent = {1:NULL, 2:1, 3:2, 4:3}`

**Iteration 4:**
*   Pick: **4** (key=4)
*   `MST_Set = {1, 2, 3, 4}`
*   Update neighbors of 4:
    *   2: In `MST_Set`. Ignore.
    *   3: In `MST_Set`. Ignore.

**MST Edges:** (2,1), (3,2), (4,3)
**Total MST Weight:** 3 + 2 + 4 = **9**

**Question 2:**

Which of the following statements about Prim's algorithm is FALSE?

a) Prim's algorithm is a greedy algorithm.
b) Prim's algorithm can be used to find the MST of a disconnected graph.
c) Prim's algorithm can be implemented efficiently using a priority queue.
d) Prim's algorithm always adds the globally cheapest edge that doesn't form a cycle.

**Answer to Question 2:**

The correct answer is **b)**.

*   a) True. Prim's algorithm makes locally optimal choices at each step.
*   b) **False**. Prim's algorithm requires the graph to be connected. If the graph is disconnected, it will only find the MST of the connected component containing the starting vertex.
*   c) True. Using a priority queue (like a binary heap) leads to a time complexity of $O(E \log V)$.
*   d) False. This statement describes Kruskal's algorithm. Prim's algorithm adds the cheapest edge that connects a vertex *already in the MST* to a vertex *outside the MST*.
