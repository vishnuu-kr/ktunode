---
title: "Kruskal’s Algorithm"
subject: "INTRODUCTION TO ALGORITHM"
module: "Module 3: Divide and Conquer "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cbd6"
status: "completed"
scrapedAt: "2026-05-20T17:25:18.790Z"
---
# Introduction to Algorithms: Module 3 - Divide and Conquer

## Topic: Kruskal's Algorithm

---

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the core problem Kruskal's Algorithm solves (Minimum Spanning Tree).
*   Explain the greedy approach employed by Kruskal's Algorithm.
*   Describe the steps involved in Kruskal's Algorithm.
*   Identify and utilize data structures necessary for Kruskal's Algorithm (Disjoint Set Union - DSU).
*   Analyze the time complexity of Kruskal's Algorithm.
*   Apply Kruskal's Algorithm to find the Minimum Spanning Tree of a given graph.

---

### 2. Key Concepts and Definitions

#### 2.1. Minimum Spanning Tree (MST)

*   **Definition:** A spanning tree of a connected, undirected graph is a subgraph that is a tree and connects all the vertices together.
*   **Minimum Spanning Tree (MST):** A spanning tree with the minimum possible total edge weight. If the graph is weighted, the MST is the spanning tree whose sum of edge weights is as small as possible.
*   **Applications of MST:**
    *   Network design (e.g., laying cables, designing pipelines).
    *   Clustering.
    *   Image processing.
    *   Approximation algorithms for other graph problems.

#### 2.2. Greedy Approach

*   **Definition:** A greedy algorithm is an algorithm that makes the locally optimal choice at each step with the hope of finding a global optimum.
*   **Kruskal's Algorithm and Greed:** Kruskal's Algorithm is a classic example of a greedy algorithm. At each step, it picks the edge with the smallest weight that does not form a cycle.

#### 2.3. Disjoint Set Union (DSU) / Union-Find Data Structure

*   **Purpose:** The DSU data structure is crucial for efficiently detecting cycles in Kruskal's Algorithm. It keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets.
*   **Key Operations:**
    *   **`Make-Set(x)`:** Creates a new set containing only the element `x`. Initially, each vertex is in its own set.
    *   **`Find-Set(x)`:** Returns a representative (or identifier) of the set that contains `x`. If `x` and `y` are in the same set, then `Find-Set(x)` will be equal to `Find-Set(y)`.
    *   **`Union(x, y)`:** Merges the sets containing `x` and `y` into a single set.
*   **Cycle Detection:** To check if adding an edge `(u, v)` creates a cycle, we use DSU. If `Find-Set(u)` is equal to `Find-Set(v)`, it means `u` and `v` are already in the same connected component, and adding `(u, v)` would create a cycle. If they are in different sets, adding `(u, v)` connects two components and does not form a cycle, so we perform `Union(u, v)`.

---

### 3. Kruskal's Algorithm Explained

Kruskal's Algorithm constructs an MST by iteratively adding the next cheapest edge that does not form a cycle.

**Steps:**

1.  **Initialization:**
    *   Create an empty set `MST` to store the edges of the Minimum Spanning Tree.
    *   Initialize a Disjoint Set Union (DSU) data structure. For each vertex `v` in the graph, create a separate set containing only `v` (i.e., `Make-Set(v)` for all `v`).

2.  **Sort Edges:**
    *   Sort all the edges of the graph in non-decreasing order of their weights.

3.  **Iterate and Build MST:**
    *   Iterate through the sorted edges one by one.
    *   For each edge `(u, v)` with weight `w`:
        *   Check if vertices `u` and `v` belong to different sets using `Find-Set(u)` and `Find-Set(v)`.
        *   If `Find-Set(u)` is **not equal** to `Find-Set(v)`:
            *   This edge does **not** form a cycle.
            *   Add the edge `(u, v)` to the `MST`.
            *   Merge the sets containing `u` and `v` using `Union(u, v)`.
        *   If `Find-Set(u)` **is equal** to `Find-Set(v)`:
            *   This edge **would form** a cycle.
            *   Discard this edge.

4.  **Termination:**
    *   Continue this process until the `MST` contains `V-1` edges, where `V` is the number of vertices in the graph. At this point, the `MST` set will contain the edges of a Minimum Spanning Tree.

---

### 4. Example

Let's consider a weighted undirected graph with 4 vertices (A, B, C, D) and the following edges:

*   (A, B): weight 1
*   (A, C): weight 3
*   (B, C): weight 2
*   (B, D): weight 4
*   (C, D): weight 5

**Steps:**

1.  **Initialization:**
    *   `MST = {}`
    *   DSU: `{A}, {B}, {C}, {D}`

2.  **Sort Edges:**
    *   Sorted edges by weight:
        1.  (A, B): 1
        2.  (B, C): 2
        3.  (A, C): 3
        4.  (B, D): 4
        5.  (C, D): 5

3.  **Iterate and Build MST:**

    *   **Edge (A, B) with weight 1:**
        *   `Find-Set(A)` != `Find-Set(B)` (initially distinct sets)
        *   Add (A, B) to MST. `MST = {(A, B)}`
        *   `Union(A, B)`. DSU: `{A, B}, {C}, {D}`

    *   **Edge (B, C) with weight 2:**
        *   `Find-Set(B)` != `Find-Set(C)` (`Find-Set(B)` represents `{A, B}`, `Find-Set(C)` represents `{C}`)
        *   Add (B, C) to MST. `MST = {(A, B), (B, C)}`
        *   `Union(B, C)`. DSU: `{A, B, C}, {D}`

    *   **Edge (A, C) with weight 3:**
        *   `Find-Set(A)` == `Find-Set(C)` (both are in `{A, B, C}`)
        *   This edge forms a cycle. Discard (A, C).

    *   **Edge (B, D) with weight 4:**
        *   `Find-Set(B)` != `Find-Set(D)` (`Find-Set(B)` represents `{A, B, C}`, `Find-Set(D)` represents `{D}`)
        *   Add (B, D) to MST. `MST = {(A, B), (B, C), (B, D)}`
        *   `Union(B, D)`. DSU: `{A, B, C, D}`

    *   The MST now has 3 edges (V-1 = 4-1 = 3). The algorithm terminates.

4.  **Result:** The Minimum Spanning Tree consists of edges {(A, B), (B, C), (B, D)} with a total weight of 1 + 2 + 4 = 7.

---

### 5. Data Structures for DSU

The efficiency of Kruskal's Algorithm heavily depends on the implementation of the DSU data structure. Two common optimizations are:

#### 5.1. Union by Rank (or Height)

*   **Concept:** When merging two sets, attach the shorter tree (based on rank/height) to the root of the taller tree. This helps to keep the trees relatively flat, improving `Find-Set` performance.
*   **Rank:** The rank of a node is an upper bound on the height of the subtree rooted at that node.

#### 5.2. Path Compression

*   **Concept:** During a `Find-Set(x)` operation, after finding the root of the set containing `x`, make every node on the path from `x` to the root a direct child of the root. This dramatically flattens the tree.

**Combined Optimizations:** Using both Union by Rank and Path Compression results in nearly constant time (amortized) for DSU operations, specifically $O(\alpha(n))$, where $\alpha$ is the inverse Ackermann function, which grows extremely slowly and is effectively a small constant for all practical purposes.

---

### 6. Time Complexity Analysis

Let `V` be the number of vertices and `E` be the number of edges in the graph.

1.  **Sorting Edges:** Sorting `E` edges takes $O(E \log E)$ time.
2.  **DSU Initialization:** Creating `V` disjoint sets takes $O(V)$ time.
3.  **Iterating Through Edges:**
    *   For each of the `E` edges, we perform two `Find-Set` operations and potentially one `Union` operation.
    *   With optimized DSU (Union by Rank and Path Compression), each DSU operation (Find or Union) takes approximately $O(\alpha(V))$ amortized time.
    *   Therefore, processing all `E` edges takes $O(E \alpha(V))$ time.

**Overall Time Complexity:** The dominant factor is the sorting step.
$$O(E \log E + E \alpha(V))$$

Since $E$ can be at most $O(V^2)$, $\log E$ can be at most $\log(V^2) = 2 \log V$. Thus, $E \log E$ can be $O(E \log V)$.
The complexity is typically expressed as **$O(E \log E)$** or **$O(E \log V)$** because $\log E$ is at most $2 \log V$, and $\alpha(V)$ is nearly constant.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the primary goal of Kruskal's Algorithm?
a) Finding the shortest path between two vertices.
b) Finding a minimum spanning tree in a weighted undirected graph.
c) Detecting cycles in a graph.
d) Sorting the vertices of a graph.

**Answer 1:**
b) Finding a minimum spanning tree in a weighted undirected graph.

---

**Question 2:**
Consider the following graph with vertices {1, 2, 3, 4} and edges:
*   (1, 2): weight 3
*   (1, 3): weight 1
*   (1, 4): weight 4
*   (2, 3): weight 2
*   (3, 4): weight 5

Trace Kruskal's Algorithm to find the MST. List the edges included in the MST and the total weight.

**Answer 2:**

1.  **Initialization:** `MST = {}`, DSU: `{1}, {2}, {3}, {4}`
2.  **Sorted Edges:**
    *   (1, 3): 1
    *   (2, 3): 2
    *   (1, 2): 3
    *   (1, 4): 4
    *   (3, 4): 5
3.  **Iteration:**
    *   **Edge (1, 3) weight 1:** `Find(1) != Find(3)`. Add (1, 3) to MST. `Union(1, 3)`. DSU: `{1, 3}, {2}, {4}`. `MST = {(1, 3)}`
    *   **Edge (2, 3) weight 2:** `Find(2) != Find(3)`. Add (2, 3) to MST. `Union(2, 3)`. DSU: `{1, 2, 3}, {4}`. `MST = {(1, 3), (2, 3)}`
    *   **Edge (1, 2) weight 3:** `Find(1) == Find(2)`. Forms a cycle. Discard.
    *   **Edge (1, 4) weight 4:** `Find(1) != Find(4)`. Add (1, 4) to MST. `Union(1, 4)`. DSU: `{1, 2, 3, 4}`. `MST = {(1, 3), (2, 3), (1, 4)}`
    *   MST has V-1 = 3 edges. Terminate.

    **MST Edges:** (1, 3), (2, 3), (1, 4)
    **Total Weight:** 1 + 2 + 4 = 7

---

**Question 3:**
Explain the role of the Disjoint Set Union (DSU) data structure in Kruskal's Algorithm.

**Answer 3:**
The DSU data structure is used to efficiently detect cycles. It maintains sets of connected vertices. When considering an edge (u, v), if `Find-Set(u)` returns the same representative as `Find-Set(v)`, it means `u` and `v` are already connected in the same component, and adding the edge would form a cycle. If they are in different sets, the edge can be safely added to the MST, and their sets are merged using the `Union` operation.

---

### 8. Important Points to Remember

*   Kruskal's Algorithm works on **connected, undirected, weighted graphs**.
*   It uses a **greedy approach**, always selecting the locally cheapest edge that doesn't form a cycle.
*   The **Disjoint Set Union (DSU)** data structure is fundamental for efficient cycle detection.
*   Optimizations like **Union by Rank** and **Path Compression** are crucial for achieving near-constant time for DSU operations.
*   The time complexity is dominated by **edge sorting**, typically $O(E \log E)$ or $O(E \log V)$.
*   An MST of a graph with `V` vertices will always contain exactly `V-1` edges.
*   If the graph is not connected, Kruskal's algorithm will find a **Minimum Spanning Forest** (a collection of MSTs for each connected component).

---
