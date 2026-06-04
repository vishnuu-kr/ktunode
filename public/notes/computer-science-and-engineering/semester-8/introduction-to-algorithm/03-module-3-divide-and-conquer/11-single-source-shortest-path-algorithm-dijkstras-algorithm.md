---
title: "Single Source Shortest Path Algorithm - Dijkstra’s Algorithm"
subject: "INTRODUCTION TO ALGORITHM"
module: "Module 3: Divide and Conquer "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cbd7"
status: "completed"
scrapedAt: "2026-05-20T17:25:19.491Z"
---
# Introduction to Algorithms: Module 3 - Divide and Conquer

## Topic: Single Source Shortest Path Algorithm - Dijkstra’s Algorithm

---

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the problem of finding the shortest path from a single source vertex to all other vertices in a graph.
*   Explain the core idea behind Dijkstra's algorithm.
*   Describe the data structures used in Dijkstra's algorithm.
*   Analyze the time complexity of Dijkstra's algorithm with different data structures.
*   Apply Dijkstra's algorithm to solve shortest path problems on various graphs.
*   Identify the limitations of Dijkstra's algorithm.

---

### 2. Key Concepts and Definitions

#### 2.1. Shortest Path Problem

*   **Definition:** Given a weighted graph $G = (V, E)$ and a source vertex $s \in V$, the **single-source shortest path problem** is to find a path from $s$ to every other vertex $v \in V$ such that the sum of the weights of the edges along the path is minimized.

*   **Path Weight:** The sum of the weights of the edges in a path.
*   **Shortest Path:** A path whose weight is the minimum possible.

#### 2.2. Weighted Graph

*   A graph where each edge has an associated numerical value called a **weight**.
*   Weights can represent distances, costs, time, or any other metric.
*   For Dijkstra's algorithm, edge weights must be **non-negative**.

#### 2.3. Dijkstra's Algorithm

*   **Description:** A greedy algorithm that finds the shortest paths from a single source vertex to all other vertices in a graph with **non-negative edge weights**. It iteratively builds up a set of vertices for which the shortest path from the source is known.

*   **Core Idea (Greedy Approach):** At each step, Dijkstra's algorithm selects the unvisited vertex that is closest to the source (among those not yet finalized) and adds it to the set of finalized vertices. It then updates the tentative distances of its neighbors.

#### 2.4. Data Structures Used

Dijkstra's algorithm typically utilizes the following data structures:

*   **Distance Array/Map (`dist`):** Stores the current shortest distance found from the source vertex to each vertex. Initially, the distance to the source is 0, and to all other vertices is infinity.
*   **Predecessor Array/Map (`prev`):** Stores the predecessor of each vertex on the shortest path found so far. This is used to reconstruct the actual shortest paths.
*   **Set of Visited/Finalized Vertices (`visited` or `S`):** Keeps track of vertices for which the shortest path from the source has been determined.
*   **Priority Queue (`PQ`):** A data structure that efficiently stores vertices and allows extraction of the vertex with the minimum distance. This is crucial for selecting the "closest" unvisited vertex.

---

### 3. Algorithm Steps

Dijkstra's algorithm can be described as follows:

1.  **Initialization:**
    *   Initialize `dist[v]` to $\infty$ for all $v \in V \setminus \{s\}$.
    *   Initialize `dist[s]` to 0.
    *   Initialize `prev[v]` to `null` for all $v \in V$.
    *   Initialize `visited` set to empty.
    *   Initialize a priority queue `PQ` and insert all vertices into it with their initial distances as priorities.

2.  **Iteration:**
    *   While `PQ` is not empty:
        *   Extract the vertex `u` with the minimum distance from `PQ`.
        *   Add `u` to the `visited` set.
        *   For each neighbor `v` of `u`:
            *   If `v` is not in `visited`:
                *   Calculate the tentative distance: `alt = dist[u] + weight(u, v)`.
                *   If `alt < dist[v]`:
                    *   Update `dist[v] = alt`.
                    *   Update `prev[v] = u`.
                    *   **Decrease key** of `v` in `PQ` to `dist[v]`.

3.  **Result:**
    *   The `dist` array now contains the shortest distances from `s` to all other vertices.
    *   The `prev` array can be used to reconstruct the shortest paths by backtracking from the destination vertex to the source.

---

### 4. Example

Let's consider a graph with 5 vertices (A, B, C, D, E) and the following weighted edges:

*   A -> B (4)
*   A -> C (2)
*   B -> C (5)
*   B -> D (10)
*   C -> D (3)
*   C -> E (4)
*   D -> E (7)

Let's find the shortest paths from source A.

**Initialization:**

*   `dist = {A: 0, B: ∞, C: ∞, D: ∞, E: ∞}`
*   `prev = {A: null, B: null, C: null, D: null, E: null}`
*   `visited = {}`
*   `PQ = {(A, 0), (B, ∞), (C, ∞), (D, ∞), (E, ∞)}` (Representing (vertex, distance))

**Iteration 1:**

1.  Extract `(A, 0)` from `PQ`.
2.  `visited = {A}`.
3.  Neighbors of A: B, C.
    *   **B:** `alt = dist[A] + weight(A, B) = 0 + 4 = 4`. Since `4 < dist[B] (∞)`, update `dist[B] = 4`, `prev[B] = A`. `PQ` now has `(B, 4)`.
    *   **C:** `alt = dist[A] + weight(A, C) = 0 + 2 = 2`. Since `2 < dist[C] (∞)`, update `dist[C] = 2`, `prev[C] = A`. `PQ` now has `(C, 2)`.
*   `PQ = {(C, 2), (B, 4), (D, ∞), (E, ∞)}`

**Iteration 2:**

1.  Extract `(C, 2)` from `PQ`.
2.  `visited = {A, C}`.
3.  Neighbors of C: D, E.
    *   **D:** `alt = dist[C] + weight(C, D) = 2 + 3 = 5`. Since `5 < dist[D] (∞)`, update `dist[D] = 5`, `prev[D] = C`. `PQ` now has `(D, 5)`.
    *   **E:** `alt = dist[C] + weight(C, E) = 2 + 4 = 6`. Since `6 < dist[E] (∞)`, update `dist[E] = 6`, `prev[E] = C`. `PQ` now has `(E, 6)`.
*   `PQ = {(B, 4), (D, 5), (E, 6)}`

**Iteration 3:**

1.  Extract `(B, 4)` from `PQ`.
2.  `visited = {A, C, B}`.
3.  Neighbors of B: C, D.
    *   **C:** `C` is already in `visited`. Skip.
    *   **D:** `alt = dist[B] + weight(B, D) = 4 + 10 = 14`. Since `14` is not less than `dist[D] (5)`, no update.
*   `PQ = {(D, 5), (E, 6)}`

**Iteration 4:**

1.  Extract `(D, 5)` from `PQ`.
2.  `visited = {A, C, B, D}`.
3.  Neighbors of D: E.
    *   **E:** `alt = dist[D] + weight(D, E) = 5 + 7 = 12`. Since `12` is not less than `dist[E] (6)`, no update.
*   `PQ = {(E, 6)}`

**Iteration 5:**

1.  Extract `(E, 6)` from `PQ`.
2.  `visited = {A, C, B, D, E}`.
3.  Neighbors of E: None.
*   `PQ` is now empty.

**Final Results:**

*   `dist = {A: 0, B: 4, C: 2, D: 5, E: 6}`
*   `prev = {A: null, B: A, C: A, D: C, E: C}`

**Reconstructing Shortest Paths:**

*   **To B:** `B -> A` (Path: A -> B, Weight: 4)
*   **To C:** `C -> A` (Path: A -> C, Weight: 2)
*   **To D:** `D -> C -> A` (Path: A -> C -> D, Weight: 2 + 3 = 5)
*   **To E:** `E -> C -> A` (Path: A -> C -> E, Weight: 2 + 4 = 6)

---

### 5. Time Complexity Analysis

The time complexity of Dijkstra's algorithm depends on the implementation of the priority queue and how graph edges are represented.

Let $V$ be the number of vertices and $E$ be the number of edges.

#### 5.1. Using a simple array (unsorted) as a priority queue:

*   **Extract-Min:** O(V) (scan to find the minimum)
*   **Decrease-Key:** Not directly supported, would require removing and re-inserting, also O(V).
*   **Total Time Complexity:** $O(V \times V + E \times V)$ which simplifies to **$O(V^2)$**. This is suitable for dense graphs.

#### 5.2. Using a binary heap as a priority queue:

*   **Initialization:** $O(V)$ to build the heap.
*   **Extract-Min:** $O(\log V)$. There are $V$ extractions.
*   **Decrease-Key:** $O(\log V)$. An edge relaxation (update) might cause a decrease-key operation. There can be up to $E$ relaxations.
*   **Total Time Complexity:** $O(V \log V + E \log V) = \mathbf{O((V + E) \log V)}$. Since for connected graphs, $E \ge V-1$, this is often written as $\mathbf{O(E \log V)}$. This is efficient for sparse graphs.

#### 5.3. Using a Fibonacci heap as a priority queue:

*   **Extract-Min:** Amortized $O(\log V)$.
*   **Decrease-Key:** Amortized $O(1)$.
*   **Total Time Complexity:** $O(V \log V + E)$. This is the most asymptotically efficient implementation for sparse graphs.

---

### 6. Applications

Dijkstra's algorithm has numerous applications, including:

*   **Navigation Systems:** Finding the shortest routes on maps (e.g., Google Maps, GPS).
*   **Network Routing:** Determining the most efficient paths for data packets in computer networks.
*   **Logistics and Transportation:** Optimizing delivery routes and schedules.
*   **Telecommunications:** Finding the lowest-cost paths for calls or data transmission.
*   **Artificial Intelligence:** Pathfinding in games and simulations.

---

### 7. Limitations

*   **Non-negative Edge Weights:** Dijkstra's algorithm **does not work correctly** if the graph contains negative edge weights. In such cases, the Bellman-Ford algorithm or SPFA algorithm should be used.
    *   **Why it fails with negative weights:** The greedy assumption that once a vertex is finalized, its shortest path is found, breaks down. A path with a negative edge could later lead to a shorter path to an already finalized vertex.

---

### 8. Practice Questions

1.  **Question:** Consider a directed graph with 4 vertices (S, A, B, T) and the following edge weights:
    *   S -> A (2)
    *   S -> B (4)
    *   A -> B (1)
    *   A -> T (4)
    *   B -> T (3)

    Find the shortest paths from source S to all other vertices using Dijkstra's algorithm. Trace the execution step-by-step, showing the `dist`, `prev`, and `visited` sets at each iteration.

2.  **Question:** What is the fundamental reason why Dijkstra's algorithm fails if the graph contains negative edge weights?

3.  **Question:** If a graph has $V$ vertices and $E$ edges, what is the time complexity of Dijkstra's algorithm using a binary heap as the priority queue? Explain why.

4.  **Question:** How would you reconstruct the shortest path from source S to vertex T if you have the `prev` array from Dijkstra's algorithm?

---

### 9. Answers to Practice Questions

1.  **Answer:**

    **Graph:**
    *   S -> A (2)
    *   S -> B (4)
    *   A -> B (1)
    *   A -> T (4)
    *   B -> T (3)

    **Initialization:**
    *   `dist = {S: 0, A: ∞, B: ∞, T: ∞}`
    *   `prev = {S: null, A: null, B: null, T: null}`
    *   `visited = {}`
    *   `PQ = {(S, 0), (A, ∞), (B, ∞), (T, ∞)}`

    **Iteration 1:**
    1.  Extract `(S, 0)`. `visited = {S}`.
    2.  Neighbors of S: A, B.
        *   A: `dist[A] = 0 + 2 = 2`, `prev[A] = S`.
        *   B: `dist[B] = 0 + 4 = 4`, `prev[B] = S`.
    *   `PQ = {(A, 2), (B, 4), (T, ∞)}`

    **Iteration 2:**
    1.  Extract `(A, 2)`. `visited = {S, A}`.
    2.  Neighbors of A: B, T.
        *   B: `alt = dist[A] + weight(A, B) = 2 + 1 = 3`. `3 < dist[B] (4)`, so `dist[B] = 3`, `prev[B] = A`.
        *   T: `alt = dist[A] + weight(A, T) = 2 + 4 = 6`. `6 < dist[T] (∞)`, so `dist[T] = 6`, `prev[T] = A`.
    *   `PQ = {(B, 3), (T, 6)}`

    **Iteration 3:**
    1.  Extract `(B, 3)`. `visited = {S, A, B}`.
    2.  Neighbors of B: T.
        *   T: `alt = dist[B] + weight(B, T) = 3 + 3 = 6`. `6` is not less than `dist[T] (6)`, so no update.
    *   `PQ = {(T, 6)}`

    **Iteration 4:**
    1.  Extract `(T, 6)`. `visited = {S, A, B, T}`.
    2.  Neighbors of T: None.
    *   `PQ` is empty.

    **Final `dist`:** `{S: 0, A: 2, B: 3, T: 6}`
    **Final `prev`:** `{S: null, A: S, B: A, T: A}` (Note: If there's a tie in distance, the last update might be different but still valid. In this case, `prev[T]` could also be B if we updated it from B->T path). Let's stick with `prev[T]=A` as per the trace.

    **Shortest Paths:**
    *   To A: `A <- S` (Path: S -> A, Weight: 2)
    *   To B: `B <- A <- S` (Path: S -> A -> B, Weight: 2 + 1 = 3)
    *   To T: `T <- A <- S` (Path: S -> A -> T, Weight: 2 + 4 = 6)

2.  **Answer:** Dijkstra's algorithm is a greedy algorithm. It assumes that once a vertex `u` is selected (i.e., its shortest path is finalized), no other path through unvisited vertices can provide a shorter path to `u`. With negative edge weights, a path through an unvisited vertex might encounter a negative edge, significantly reducing the path cost to `u`, thus invalidating the greedy choice. The algorithm might prematurely finalize a vertex with a suboptimal path if negative edges are present.

3.  **Answer:** The time complexity of Dijkstra's algorithm using a binary heap is **$O(E \log V)$**.
    *   **Explanation:**
        *   Initializing the priority queue with $V$ vertices takes $O(V)$ time.
        *   There are $V$ `Extract-Min` operations, each taking $O(\log V)$ time, totaling $O(V \log V)$.
        *   Each edge $(u, v)$ is relaxed at most once. If a relaxation leads to a distance update for $v$, a `Decrease-Key` operation is performed on $v$ in the priority queue. This takes $O(\log V)$ time. Since there are $E$ edges, there can be at most $E$ `Decrease-Key` operations, totaling $O(E \log V)$.
        *   Therefore, the total time complexity is $O(V + V \log V + E \log V) = O((V+E)\log V)$. For connected graphs where $E \ge V-1$, this is simplified to $O(E \log V)$.

4.  **Answer:** To reconstruct the shortest path from source S to vertex T, you start at T and repeatedly follow the `prev` pointers until you reach the source S.
    *   Start with the destination vertex (T).
    *   Look up `prev[T]` to find its predecessor.
    *   Look up the predecessor's predecessor, and so on.
    *   Continue until you reach a vertex whose `prev` value is `null` (which should be the source vertex S).
    *   The sequence of vertices obtained by traversing backwards from T to S, when reversed, gives the shortest path from S to T.

---

### 10. Important Points to Remember

*   **Non-negative weights are essential.** Dijkstra's algorithm is guaranteed to work *only* for graphs with non-negative edge weights.
*   **Greedy approach:** The algorithm iteratively selects the unvisited vertex with the smallest known distance from the source.
*   **Priority Queue:** The efficiency of Dijkstra's algorithm heavily relies on the efficient implementation of the priority queue for `Extract-Min` and `Decrease-Key` operations.
*   **`dist` and `prev` arrays:** These are crucial for storing shortest distances and reconstructing the paths.
*   **Time complexity:** $O(E \log V)$ with a binary heap is common and efficient for sparse graphs.
*   **Applications:** Widely used in routing and pathfinding scenarios where costs are non-negative.
