---
title: "All Pairs Shortest Path Algorithm - Floyd-Warshall Algorithm"
subject: "INTRODUCTION TO ALGORITHM"
module: "Module 4: Dynamic Programming "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cbdb"
status: "completed"
scrapedAt: "2026-05-20T17:25:21.534Z"
---
# Introduction to Algorithms - Module 4: Dynamic Programming

## Topic: All Pairs Shortest Path Algorithm - Floyd-Warshall Algorithm

This module delves into the powerful technique of Dynamic Programming. In this topic, we will focus on solving the All Pairs Shortest Path problem using the Floyd-Warshall algorithm.

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the All Pairs Shortest Path (APSP) problem.
*   Explain the core idea behind the Floyd-Warshall algorithm.
*   Derive and understand the recursive formulation of the Floyd-Warshall algorithm.
*   Implement the Floyd-Warshall algorithm using dynamic programming.
*   Analyze the time and space complexity of the Floyd-Warshall algorithm.
*   Apply the Floyd-Warshall algorithm to solve problems involving shortest paths between all pairs of vertices in a graph.
*   Identify the use of Floyd-Warshall for detecting negative cycles.

---

### 1. The All Pairs Shortest Path (APSP) Problem

#### 1.1 Definition

The All Pairs Shortest Path problem seeks to find the shortest path between *every* pair of vertices in a given directed or undirected graph. This means for a graph with $V$ vertices, we need to compute $V(V-1)$ shortest path distances (if self-loops are excluded).

#### 1.2 Why APSP?

*   **Comprehensive Network Analysis:** Understanding the minimum cost/distance to travel between any two points in a network (e.g., road networks, communication networks).
*   **Foundation for Other Algorithms:** APSP solutions can be building blocks for more complex graph algorithms.
*   **Graph Properties:** Analyzing graph properties like reachability and connectivity.

#### 1.3 Relationship to Single Source Shortest Path (SSSP)

One way to solve APSP is to run a Single Source Shortest Path (SSSP) algorithm (like Dijkstra's or Bellman-Ford) from each vertex in the graph.

*   **Dijkstra's with Non-Negative Edges:** If all edge weights are non-negative, we can run Dijkstra's algorithm $|V|$ times. The complexity would be $|V| \times O(E \log V)$ or $|V| \times O(E + V \log V)$ depending on the priority queue implementation.
*   **Bellman-Ford with Negative Edges (No Negative Cycles):** If negative edge weights are allowed but there are no negative cycles, we can run Bellman-Ford $|V|$ times. The complexity would be $|V| \times O(VE) = O(V^2E)$.

The Floyd-Warshall algorithm offers an alternative approach that can be more efficient in certain scenarios and also handles negative edge weights (as long as there are no negative cycles).

---

### 2. The Floyd-Warshall Algorithm: Core Idea

The Floyd-Warshall algorithm is a dynamic programming algorithm that computes the shortest paths between all pairs of vertices in a weighted graph. Its elegance lies in its iterative approach, building up the solution by considering an increasing set of intermediate vertices.

#### 2.1 Dynamic Programming Approach

The key idea is to consider paths that are allowed to pass through a subset of vertices. We start by considering paths that only use direct edges, then paths that can use one intermediate vertex, then two, and so on, until we consider paths that can use *any* vertex as an intermediate.

Let $d[i][j]$ represent the shortest path distance from vertex $i$ to vertex $j$.

The algorithm works by iteratively improving these distances by allowing more and more vertices to be used as intermediate nodes.

#### 2.2 Recursive Formulation

The core of the Floyd-Warshall algorithm is captured by the following recursive relation:

Let $d^{(k)}[i][j]$ be the length of the shortest path from vertex $i$ to vertex $j$ using only vertices from the set $\{1, 2, \dots, k\}$ as intermediate vertices.

The recurrence relation is:

$d^{(k)}[i][j] = \min( d^{(k-1)}[i][j], \quad d^{(k-1)}[i][k] + d^{(k-1)}[k][j] )$

**Explanation:**

*   **$d^{(k-1)}[i][j]$:** This term represents the shortest path from $i$ to $j$ *without* using vertex $k$ as an intermediate vertex.
*   **$d^{(k-1)}[i][k] + d^{(k-1)}[k][j]$:** This term represents the shortest path from $i$ to $j$ that *does* use vertex $k$ as an intermediate vertex. Specifically, it's the shortest path from $i$ to $k$ (using only vertices from $\{1, \dots, k-1\}$ as intermediates) plus the shortest path from $k$ to $j$ (also using only vertices from $\{1, \dots, k-1\}$ as intermediates).

By taking the minimum of these two possibilities, we ensure that we find the shortest path from $i$ to $j$ using any subset of vertices up to $k$.

#### 2.3 Base Case

The base case is when $k=0$, meaning no intermediate vertices are allowed. In this case, the shortest path is simply the direct edge weight.

*   $d^{(0)}[i][j] = w(i, j)$ if there is a direct edge from $i$ to $j$.
*   $d^{(0)}[i][j] = \infty$ if there is no direct edge from $i$ to $j$.
*   $d^{(0)}[i][i] = 0$ for all $i$ (the distance from a vertex to itself is 0).

---

### 3. Implementation of Floyd-Warshall Algorithm

The recursive formulation naturally leads to an iterative implementation. We can maintain a distance matrix, say `dist`, where `dist[i][j]` stores the shortest distance found so far from vertex `i` to vertex `j`.

#### 3.1 Algorithm Steps

1.  **Initialization:**
    *   Create a distance matrix `dist` of size $|V| \times |V|$.
    *   Initialize `dist[i][j]` with the weight of the direct edge from $i$ to $j$ if it exists.
    *   If there's no direct edge, initialize `dist[i][j]` to infinity ($\infty$).
    *   Set `dist[i][i] = 0$ for all $i$.

2.  **Iteration:**
    *   Iterate through all possible intermediate vertices $k$ from $0$ to $|V|-1$.
    *   For each $k$, iterate through all possible source vertices $i$ from $0$ to $|V|-1$.
    *   For each $i$, iterate through all possible destination vertices $j$ from $0$ to $|V|-1$.
    *   Update the shortest distance:
        `dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])`

#### 3.2 Pseudocode

```
function FloydWarshall(Graph G):
  V = number of vertices in G
  dist = a V x V matrix

  // Initialization
  for i from 0 to V-1:
    for j from 0 to V-1:
      if i == j:
        dist[i][j] = 0
      else if there is an edge (i, j) in G:
        dist[i][j] = weight of edge (i, j)
      else:
        dist[i][j] = infinity

  // Main loop: Consider each vertex k as an intermediate vertex
  for k from 0 to V-1:
    for i from 0 to V-1:
      for j from 0 to V-1:
        // If vertex k is on the shortest path from i to j, then update the value of dist[i][j]
        if dist[i][k] != infinity and dist[k][j] != infinity and dist[i][k] + dist[k][j] < dist[i][j]:
          dist[i][j] = dist[i][k] + dist[k][j]

  return dist
```

#### 3.3 Example

Consider the following directed graph with 4 vertices (0, 1, 2, 3) and weighted edges:

```
       10
   0 -----> 1
   |       /|\
   |      / | \ 5
   |     /  |  \
  -3    /   -2   \
   |   /    |    \
   \/ /     |     \/
   3 <----- 2
     -1
```

Edges and weights:
*   (0, 1): 10
*   (0, 3): -3
*   (1, 2): 5
*   (2, 1): -2
*   (3, 2): -1

**Initialization of `dist` matrix:**

```
   0   1    2    3
0 [0, 10, inf, -3]
1 [inf, 0,  5, inf]
2 [inf, -2, 0, inf]
3 [inf, inf, -1, 0]
```

**Iteration k = 0 (Vertex 0 as intermediate):**

No changes will occur because using vertex 0 as an intermediate (e.g., path $i \to 0 \to j$) won't shorten any existing paths in this initial step where most paths are infinite.

**Iteration k = 1 (Vertex 1 as intermediate):**

Let's check some pairs:
*   `dist[0][2]`: Current `dist[0][2]` is `inf`.
    Check `dist[0][1] + dist[1][2] = 10 + 5 = 15`.
    Since $15 < \infty$, update `dist[0][2] = 15`.
*   `dist[2][1]`: Current `dist[2][1]` is `-2`.
    Check `dist[2][0] + dist[0][1] = \infty + 10 = \infty`. No update.

Matrix after k=1:
```
   0   1    2    3
0 [0, 10,  15, -3]
1 [inf, 0,  5, inf]
2 [inf, -2, 0, inf]
3 [inf, inf, -1, 0]
```

**Iteration k = 2 (Vertex 2 as intermediate):**

Let's check some pairs:
*   `dist[0][1]`: Current `dist[0][1]` is `10`.
    Check `dist[0][2] + dist[2][1] = 15 + (-2) = 13`.
    Since $13 > 10$, no update.
*   `dist[1][1]`: Current `dist[1][1]` is `0`.
    Check `dist[1][2] + dist[2][1] = 5 + (-2) = 3`.
    Since $3 > 0$, no update.
*   `dist[3][1]`: Current `dist[3][1]` is `inf`.
    Check `dist[3][2] + dist[2][1] = -1 + (-2) = -3`.
    Since $-3 < \infty$, update `dist[3][1] = -3$.
*   `dist[0][1]` (again): Current `dist[0][1]` is `10`.
    We found `dist[0][2] + dist[2][1] = 15 + (-2) = 13`. No update.
    Let's check `dist[0][k] + dist[k][j]` for other combinations with k=2.
    For `dist[0][1]`: `dist[0][2] + dist[2][1] = 15 + (-2) = 13`. No update needed as `dist[0][1]` is 10.

Matrix after k=2:
```
   0   1    2    3
0 [0, 10,  15, -3]
1 [inf, 0,  5, inf]
2 [inf, -2, 0, inf]
3 [inf, -3, -1, 0]
```

**Iteration k = 3 (Vertex 3 as intermediate):**

Let's check some pairs:
*   `dist[0][2]`: Current `dist[0][2]` is `15`.
    Check `dist[0][3] + dist[3][2] = -3 + (-1) = -4`.
    Since $-4 < 15$, update `dist[0][2] = -4$.
*   `dist[1][2]`: Current `dist[1][2]` is `5`.
    Check `dist[1][3] + dist[3][2] = \infty + (-1) = \infty$. No update.
*   `dist[2][3]`: Current `dist[2][3]` is `inf`.
    Check `dist[2][0] + dist[0][3] = \infty + (-3) = \infty$. No update.
    Check `dist[2][1] + dist[1][3] = -2 + \infty = \infty$. No update.
*   `dist[0][1]`: Current `dist[0][1]` is `10`.
    Check `dist[0][3] + dist[3][1] = -3 + (-3) = -6$.
    Since $-6 < 10$, update `dist[0][1] = -6$.

Final `dist` matrix after k=3:
```
   0   1    2    3
0 [0, -6,  -4, -3]
1 [inf, 0,  5, inf]
2 [inf, -2, 0, inf]
3 [inf, -3, -1, 0]
```

This final matrix represents the shortest path distances between all pairs of vertices. For example, the shortest path from 0 to 1 is -6 (path 0 -> 3 -> 2 -> 1).

---

### 4. Complexity Analysis

#### 4.1 Time Complexity

The algorithm involves three nested loops, each iterating from $0$ to $|V|-1$. Inside the innermost loop, there's a constant number of operations (comparison and addition).

Therefore, the time complexity is **$O(|V|^3)$**.

This complexity is independent of the number of edges, making it suitable for dense graphs.

#### 4.2 Space Complexity

The algorithm requires a distance matrix of size $|V| \times |V|$ to store the shortest path distances.

Therefore, the space complexity is **$O(|V|^2)$**.

---

### 5. Handling Negative Cycles

The Floyd-Warshall algorithm can detect negative cycles. A negative cycle is a cycle in the graph where the sum of the edge weights is negative. If a negative cycle exists that is reachable from vertex $i$ and can reach vertex $j$, then the shortest path from $i$ to $j$ is undefined (it can be arbitrarily small).

#### 5.1 Detection Mechanism

After the algorithm completes its $|V|$ iterations, we can check the diagonal elements of the `dist` matrix.

*   If `dist[i][i]` is negative for any vertex $i$, it indicates that there is a negative cycle involving vertex $i$.

#### 5.2 Why does `dist[i][i]` become negative?

If there's a negative cycle passing through vertex $i$, say $i \to \dots \to i$, the algorithm will eventually discover a path that goes around this cycle and back to $i$. For example, if there's a negative path from $i$ to itself, `dist[i][i]` will be updated to a negative value. The iterative process of `dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])` will repeatedly use this negative cycle, driving `dist[i][i]` to $-\infty$. In practice, it will become a sufficiently small negative number.

#### 5.3 How to report negative cycles?

If `dist[i][i] < 0` for any $i$, a negative cycle exists. To identify *which* pairs are affected by negative cycles, we can perform an additional check:

For each pair $(i, j)$:
If `dist[i][k] != infinity` and `dist[k][k] < 0` and `dist[k][j] != infinity`, then the shortest path from $i$ to $j$ is affected by a negative cycle. We can set `dist[i][j]` to $-\infty$ or a special indicator.

This check can be performed with another triple nested loop after the main algorithm:

```
for k from 0 to V-1:
  if dist[k][k] < 0:
    for i from 0 to V-1:
      for j from 0 to V-1:
        if dist[i][k] != infinity and dist[k][j] != infinity:
          // Path from i to j goes through a negative cycle at k
          dist[i][j] = -infinity // Or some indicator
```

---

### 6. Applications of Floyd-Warshall

*   **Shortest paths in all pairs of cities:** In road networks or flight path analyses.
*   **Transitive Closure:** Determining reachability between all pairs of vertices in a graph. If the shortest path distance is finite, then the destination is reachable.
*   **Finding the "bottleneck" capacity:** In networks, finding the maximum capacity path between all pairs can be a variation.
*   **Detecting negative cycles:** Crucial in financial systems or other applications where negative feedback loops can be problematic.
*   **Graph problems requiring all-pairs information:** Many graph algorithms benefit from knowing all pairwise shortest paths.

---

### 7. Practice Questions and Exercises

**Question 1:**
Consider the following graph. Compute the all-pairs shortest paths using the Floyd-Warshall algorithm.

```
   3
A ---> B
|\     |
| \    | 2
|  \   |
6   4  v
|    \ 1
|     \
v      C
D <-----
   -2
```

Edges: (A, B, 3), (A, D, 6), (B, C, 2), (D, B, 4), (D, C, -2)

**Answer 1:**

Let vertices be A=0, B=1, C=2, D=3.

Initial `dist` matrix:
```
   0   1    2    3
0 [0,  3, inf,  6]
1 [inf, 0,  2, inf]
2 [inf, inf, 0, inf]
3 [inf, 4, -2,  0]
```

**k = 0 (Vertex A):** No significant updates.

**k = 1 (Vertex B):**
*   `dist[0][2]` (A to C): `min(inf, dist[0][1] + dist[1][2]) = min(inf, 3 + 2) = 5`.
    `dist[0][2] = 5`.
*   `dist[3][2]` (D to C): `min(-2, dist[3][1] + dist[1][2]) = min(-2, 4 + 2) = min(-2, 6) = -2`.
    No change.

Matrix after k=1:
```
   0   1    2    3
0 [0,  3,  5,  6]
1 [inf, 0,  2, inf]
2 [inf, inf, 0, inf]
3 [inf, 4, -2,  0]
```

**k = 2 (Vertex C):** No outgoing edges from C, so no updates to other `dist[i][j]` values.

**k = 3 (Vertex D):**
*   `dist[0][1]` (A to B): `min(3, dist[0][3] + dist[3][1]) = min(3, 6 + 4) = min(3, 10) = 3`.
    No change.
*   `dist[0][2]` (A to C): `min(5, dist[0][3] + dist[3][2]) = min(5, 6 + (-2)) = min(5, 4) = 4`.
    `dist[0][2] = 4`.
*   `dist[1][1]` (B to B): `min(0, dist[1][3] + dist[3][1]) = min(0, inf + 4) = inf`. No change.
*   `dist[1][2]` (B to C): `min(2, dist[1][3] + dist[3][2]) = min(2, inf + (-2)) = inf`. No change.
*   `dist[0][1]` (A to B): We already checked `dist[0][3] + dist[3][1]`. Let's re-evaluate `dist[0][1]`.
    Current `dist[0][1]` is 3.
    Consider `dist[0][3] + dist[3][1] = 6 + 4 = 10`. No update.
    Consider `dist[0][2] + dist[2][1]` (using intermediate C).
    `dist[0][2]` is now 4 (after considering D as intermediate), `dist[2][1]` is `inf`. So `inf`.

Final `dist` matrix:
```
   0   1    2    3
0 [0,  3,  4,  4]
1 [inf, 0,  2, inf]
2 [inf, inf, 0, inf]
3 [inf, 4, -2,  0]
```
*(Self-correction: Re-examining k=3 step carefully)*
Let's be more systematic for k=3:
For i=0, j=1: `dist[0][1] = min(dist[0][1], dist[0][3] + dist[3][1]) = min(3, 6 + 4) = 3`.
For i=0, j=2: `dist[0][2] = min(dist[0][2], dist[0][3] + dist[3][2]) = min(5, 6 + (-2)) = 4`.
For i=1, j=1: `dist[1][1] = min(dist[1][1], dist[1][3] + dist[3][1]) = min(0, inf + 4) = 0`.
For i=1, j=2: `dist[1][2] = min(dist[1][2], dist[1][3] + dist[3][2]) = min(2, inf + (-2)) = 2`.
For i=2, j=1: `dist[2][1] = min(dist[2][1], dist[2][3] + dist[3][1]) = min(inf, inf + 4) = inf`.
For i=2, j=2: `dist[2][2] = min(dist[2][2], dist[2][3] + dist[3][2]) = min(0, inf + (-2)) = 0`.
For i=3, j=1: `dist[3][1] = min(dist[3][1], dist[3][3] + dist[3][1]) = min(4, 0 + 4) = 4`.
For i=3, j=2: `dist[3][2] = min(dist[3][2], dist[3][3] + dist[3][2]) = min(-2, 0 + (-2)) = -2`.

The matrix after k=3 is:
```
   0   1    2    3
0 [0,  3,  4,  4]
1 [inf, 0,  2, inf]
2 [inf, inf, 0, inf]
3 [inf, 4, -2,  0]
```
Ah, I made a mistake in manual calculation. Let's rethink the path A to C using D.
Original: A -> B -> C (cost 3 + 2 = 5).
With D: A -> D -> C (cost 6 + (-2) = 4). This is indeed shorter.
So `dist[0][2]` becomes 4.

Let's re-evaluate all updates for k=3 systematically.

Initial `dist` matrix:
```
   0   1    2    3
0 [0,  3, inf,  6]
1 [inf, 0,  2, inf]
2 [inf, inf, 0, inf]
3 [inf, 4, -2,  0]
```

After k=1:
```
   0   1    2    3
0 [0,  3,  5,  6]
1 [inf, 0,  2, inf]
2 [inf, inf, 0, inf]
3 [inf, 4, -2,  0]
```
(A->B->C is 3+2=5, A->D->B is inf)

After k=2:
```
   0   1    2    3
0 [0,  3,  5,  6]
1 [inf, 0,  2, inf]
2 [inf, inf, 0, inf]
3 [inf, 4, -2,  0]
```
(No updates as C has no outgoing edges).

After k=3:
i=0, j=0: dist[0][0] = min(0, dist[0][3] + dist[3][0]) = min(0, 6 + inf) = 0
i=0, j=1: dist[0][1] = min(3, dist[0][3] + dist[3][1]) = min(3, 6 + 4) = 3
i=0, j=2: dist[0][2] = min(5, dist[0][3] + dist[3][2]) = min(5, 6 + (-2)) = 4
i=1, j=0: dist[1][0] = min(inf, dist[1][3] + dist[3][0]) = min(inf, inf + inf) = inf
i=1, j=1: dist[1][1] = min(0, dist[1][3] + dist[3][1]) = min(0, inf + 4) = 0
i=1, j=2: dist[1][2] = min(2, dist[1][3] + dist[3][2]) = min(2, inf + (-2)) = 2
i=2, j=0: dist[2][0] = min(inf, dist[2][3] + dist[3][0]) = min(inf, inf + inf) = inf
i=2, j=1: dist[2][1] = min(inf, dist[2][3] + dist[3][1]) = min(inf, inf + 4) = inf
i=2, j=2: dist[2][2] = min(0, dist[2][3] + dist[3][2]) = min(0, inf + (-2)) = 0
i=3, j=0: dist[3][0] = min(inf, dist[3][3] + dist[3][0]) = min(inf, 0 + inf) = inf
i=3, j=1: dist[3][1] = min(4, dist[3][3] + dist[3][1]) = min(4, 0 + 4) = 4
i=3, j=2: dist[3][2] = min(-2, dist[3][3] + dist[3][2]) = min(-2, 0 + (-2)) = -2

**Final correct `dist` matrix:**
```
   0   1    2    3
0 [0,  3,  4,  4]
1 [inf, 0,  2, inf]
2 [inf, inf, 0, inf]
3 [inf, 4, -2,  0]
```
This looks correct. Shortest path A to C is A->D->C with cost 4.

---

**Question 2:**
What is the time complexity of the Floyd-Warshall algorithm, and what are its advantages and disadvantages compared to running Dijkstra's $|V|$ times?

**Answer 2:**
*   **Time Complexity:** $O(|V|^3)$.
*   **Advantages:**
    *   Handles graphs with negative edge weights (but no negative cycles).
    *   Simpler to implement for the all-pairs shortest path problem than multiple SSSP runs, especially for dense graphs.
    *   Can detect negative cycles.
*   **Disadvantages:**
    *   Higher time complexity ($O(|V|^3)$) compared to $|V| \times O(E \log V)$ for Dijkstra's on sparse graphs with non-negative weights.
    *   Requires $O(|V|^2)$ space, which can be prohibitive for very large graphs.

---

**Question 3:**
Given the following distance matrix after running Floyd-Warshall, does the graph contain a negative cycle? If so, which diagonal element indicates this?

```
   0   1    2
0 [0, -1,  3]
1 [inf, 0, -2]
2 [-4, inf, 0]
```

**Answer 3:**
Yes, the graph contains a negative cycle. The diagonal element `dist[2][2]` is -4, which is less than 0. This indicates that there is a path from vertex 2 back to itself with a total negative weight. The cycle could be 2 -> 0 -> 1 -> 2, with a total weight of -4 + (-1) + (-2) = -7.

---

### 8. Important Points to Remember

*   **Dynamic Programming:** The algorithm builds solutions to subproblems (shortest paths using a limited set of intermediate vertices) to solve the larger problem.
*   **Recurrence:** $d^{(k)}[i][j] = \min( d^{(k-1)}[i][j], \quad d^{(k-1)}[i][k] + d^{(k-1)}[k][j] )$
*   **Triple Nested Loops:** The implementation is characterized by three nested loops for $k$, $i$, and $j$, leading to $O(|V|^3)$ time complexity.
*   **Space Complexity:** $O(|V|^2)$ for the distance matrix.
*   **Negative Weights:** Handles graphs with negative edge weights, but not negative cycles.
*   **Negative Cycle Detection:** A negative value on the diagonal (`dist[i][i] < 0`) after the algorithm completes indicates the presence of a negative cycle.
*   **Initialization:** Correct initialization of the distance matrix with direct edge weights, 0 for self-loops, and $\infty$ for non-existent edges is crucial.

---
This concludes Module 4, Topic: All Pairs Shortest Path Algorithm - Floyd-Warshall Algorithm. You should now have a solid understanding of how it works, its complexity, and its applications.
