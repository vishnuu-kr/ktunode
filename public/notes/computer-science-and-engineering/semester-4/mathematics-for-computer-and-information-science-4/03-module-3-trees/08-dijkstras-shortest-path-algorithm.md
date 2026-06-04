---
title: "Dijkstra's shortest path algorithm"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 3: Trees"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af38"
status: "completed"
scrapedAt: "2026-05-20T16:13:38.588Z"
---
## MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 3: Trees
## Topic: Dijkstra's Shortest Path Algorithm

**Description:** This module explores Dijkstra's shortest path algorithm, a fundamental algorithm used to find the shortest paths from a single source node to all other nodes in a graph.

**Learning Outcomes:**

*   Understand the concept of weighted graphs and shortest paths.
*   Explain the working principle of Dijkstra's algorithm.
*   Apply Dijkstra's algorithm to find the shortest path between two nodes in a graph.
*   Analyze the time complexity of Dijkstra's algorithm.
*   Identify limitations of Dijkstra's algorithm.

### 1. Introduction to Weighted Graphs and Shortest Paths

*   **Graph:** A graph G = (V, E) consists of a set of vertices (nodes) V and a set of edges E, where each edge connects two vertices.
*   **Weighted Graph:** A graph where each edge is assigned a weight (or cost). The weight typically represents distance, cost, or time.
*   **Path:** A sequence of vertices and edges connecting two nodes in a graph.
*   **Path Length/Cost:** The sum of the weights of the edges in a path.
*   **Shortest Path:** The path between two vertices with the minimum path length (cost).  There can be multiple shortest paths.
*   **Single-Source Shortest Path Problem:**  Finding the shortest paths from a given source vertex to all other vertices in the graph. Dijkstra's algorithm solves this problem for non-negative edge weights.

### 2. Dijkstra's Algorithm: Working Principle

Dijkstra's algorithm is a greedy algorithm that finds the shortest paths from a single source vertex to all other vertices in a weighted graph with non-negative edge weights.

**Algorithm Steps:**

1.  **Initialization:**
    *   Create a set `visited` to keep track of vertices whose shortest distance from the source is known. Initially, `visited` is empty.
    *   Assign a distance value to all vertices in the graph.  Initialize the distance to the source vertex to 0 and the distances to all other vertices to infinity (or a very large number).
    *   Create a `predecessor` array (optional, but helpful for reconstructing the shortest path).

2.  **Iteration:**
    *   While `visited` does not contain all vertices:
        *   Select the vertex `u` that is not in `visited` and has the smallest distance value. This vertex `u` is now considered visited (add `u` to `visited`).
        *   For each neighbor `v` of `u` that is not in `visited`:
            *   Calculate the distance from the source to `v` through `u`: `distance[u] + weight(u, v)`
            *   If this calculated distance is less than the current distance of `v` (`distance[v]`):
                *   Update `distance[v]` to the calculated distance.
                *   Update `predecessor[v]` to `u` (optional, for path reconstruction).

3.  **Termination:** After all vertices have been visited, the `distance` array contains the shortest distances from the source vertex to each vertex in the graph. The `predecessor` array can be used to reconstruct the shortest paths.

**Pseudocode:**

```
function Dijkstra(graph, source):
  // Initialization
  dist = {}  // Dictionary to store shortest distances from source
  visited = {} // Set to store visited nodes
  predecessor = {} // Dictionary to store predecessors (optional, for path reconstruction)

  for each vertex v in graph:
    dist[v] = infinity
    visited[v] = False
    predecessor[v] = None

  dist[source] = 0

  // Iteration
  while not all vertices are visited:
    // Find the vertex with the smallest distance that is not yet visited
    u = vertex with min dist[u] such that visited[u] is False

    if u is None:
      break // No more reachable vertices

    visited[u] = True

    // Update distances to neighbors
    for each neighbor v of u:
      if not visited[v]:
        alt_path = dist[u] + weight(u, v)
        if alt_path < dist[v]:
          dist[v] = alt_path
          predecessor[v] = u

  return dist, predecessor  // dist contains shortest distances, predecessor for path reconstruction
```

### 3. Applying Dijkstra's Algorithm: Example

Consider the following weighted graph:

```
      A
     / \
    2   4
   /     \
  B ----- C
  |  3   |
  |      |
  1      5
  |      |
  D ----- E
   \  6 /
    \ /
     F
```

We want to find the shortest paths from vertex A to all other vertices.

**Step-by-step execution:**

1.  **Initialization:**

    *   `dist[A] = 0`
    *   `dist[B] = infinity`
    *   `dist[C] = infinity`
    *   `dist[D] = infinity`
    *   `dist[E] = infinity`
    *   `dist[F] = infinity`
    *   `visited = {}` (empty set)
    *   `predecessor = {A: None, B: None, C: None, D: None, E: None, F: None}`

2.  **Iteration 1:**

    *   `u = A` (smallest distance, not visited)
    *   `visited = {A}`
    *   Neighbors of A: B (weight 2), C (weight 4)
    *   `dist[B] = min(infinity, 0 + 2) = 2`
    *   `predecessor[B] = A`
    *   `dist[C] = min(infinity, 0 + 4) = 4`
    *   `predecessor[C] = A`

3.  **Iteration 2:**

    *   `u = B` (smallest distance among unvisited vertices)
    *   `visited = {A, B}`
    *   Neighbors of B: A (already visited), C (weight 3), D (weight 1)
    *   `dist[C] = min(4, 2 + 3) = 4` (no change)
    *   `dist[D] = min(infinity, 2 + 1) = 3`
    *   `predecessor[D] = B`

4.  **Iteration 3:**

    *   `u = D`
    *   `visited = {A, B, D}`
    *   Neighbors of D: B (already visited), E (weight 5), F (weight 6)
    *   `dist[E] = min(infinity, 3 + 5) = 8`
    *   `predecessor[E] = D`
    *   `dist[F] = min(infinity, 3 + 6) = 9`
    *   `predecessor[F] = D`

5.  **Iteration 4:**

    *   `u = C`
    *   `visited = {A, B, D, C}`
    *   Neighbors of C: A (already visited), B (already visited), E (weight 5)
    *   `dist[E] = min(8, 4 + 5) = 8` (no change)

6.  **Iteration 5:**

    *   `u = E`
    *   `visited = {A, B, D, C, E}`
    *   Neighbors of E: D (already visited), C (already visited), F (weight 6)
    *   `dist[F] = min(9, 8 + 6) = 9` (no change)

7.  **Iteration 6:**

    *   `u = F`
    *   `visited = {A, B, D, C, E, F}`
    *   Neighbors of F: D (already visited), E (already visited)

**Result:**

*   `dist = {A: 0, B: 2, C: 4, D: 3, E: 8, F: 9}`
*   `predecessor = {A: None, B: A, C: A, D: B, E: D, F: D}`

**Shortest Paths (reconstructed using the predecessor array):**

*   A -> A:  Distance 0
*   A -> B:  A -> B, Distance 2
*   A -> C:  A -> C, Distance 4
*   A -> D:  A -> B -> D, Distance 3
*   A -> E:  A -> B -> D -> E, Distance 8
*   A -> F:  A -> B -> D -> F, Distance 9

### 4. Time Complexity of Dijkstra's Algorithm

The time complexity of Dijkstra's algorithm depends on the data structure used to find the vertex with the smallest distance.

*   **Basic Implementation (using a linear search):**  O(V^2), where V is the number of vertices. This is because we need to iterate through all vertices in each iteration to find the vertex with the minimum distance.
*   **Implementation with a Priority Queue (e.g., Binary Heap):** O((V + E) log V), where E is the number of edges.  The priority queue allows for efficient retrieval of the minimum distance vertex.
*   **Implementation with a Fibonacci Heap:** O(E + V log V). This is the most efficient implementation but is more complex to implement.

In practice, the priority queue implementation (using a binary heap) is commonly used.  For dense graphs (E close to V^2), the basic implementation might be faster.  For sparse graphs (E close to V), the priority queue implementation is significantly faster.

### 5. Limitations of Dijkstra's Algorithm

*   **Negative Edge Weights:** Dijkstra's algorithm does *not* work correctly if the graph contains negative edge weights. This is because the algorithm assumes that once a vertex is visited, its shortest distance is known and will not change. However, a negative edge weight can create a shorter path to a previously visited vertex.  For graphs with negative edge weights, use the Bellman-Ford algorithm or the Floyd-Warshall algorithm.
*   **Negative Cycles:** If the graph contains a negative cycle (a cycle where the sum of the edge weights is negative), Dijkstra's algorithm will not terminate correctly as it will continuously find shorter paths by traversing the cycle.

### 6. Practice Questions/Exercises

1.  **Question 1:** Apply Dijkstra's algorithm to find the shortest paths from vertex A to all other vertices in the following graph:

    ```
          A
         / \
        1   5
       /     \
      B ----- C
      |  2   |
      |      |
      3      4
      |      |
      D ----- E
       \  6 /
        \ /
         F
    ```

2.  **Question 2:** What is the time complexity of Dijkstra's algorithm when implemented using a binary heap?

3.  **Question 3:** Explain why Dijkstra's algorithm does not work correctly with negative edge weights.

4.  **Question 4:** Given a directed weighted graph with vertices V = {1, 2, 3, 4, 5} and edges E = {(1, 2, 10), (1, 3, 3), (2, 4, 2), (3, 2, 4), (3, 4, 8), (3, 5, 2), (4, 5, 1), (5, 4, 5)}.  Use Dijkstra's algorithm to find the shortest paths from vertex 1 to all other vertices.

**Answers:**

1.  **Answer 1:**

    *   `dist = {A: 0, B: 1, C: 5, D: 4, E: 8, F: 10}`
    *   `predecessor = {A: None, B: A, C: A, D: B, E: D, F: E}`
    *   Shortest Paths:
        *   A -> A: 0
        *   A -> B: A -> B, 1
        *   A -> C: A -> C, 5
        *   A -> D: A -> B -> D, 4
        *   A -> E: A -> B -> D -> E, 8
        *   A -> F: A -> B -> D -> E -> F, 10

2.  **Answer 2:** O((V + E) log V), where V is the number of vertices and E is the number of edges.

3.  **Answer 3:** Dijkstra's algorithm relies on the greedy assumption that once a vertex is marked as visited, its shortest distance from the source is known and finalized.  With negative edge weights, this assumption can be violated. A previously visited vertex can have its shortest distance reduced if a path containing a negative edge is found later.  This invalidates the algorithm's correctness.

4.  **Answer 4:**

    *   Initial: dist = {1: 0, 2: inf, 3: inf, 4: inf, 5: inf}
    *   1: dist = {1: 0, 2: 10, 3: 3, 4: inf, 5: inf}
    *   3: dist = {1: 0, 2: 7, 3: 3, 4: 11, 5: 5}
    *   2: dist = {1: 0, 2: 7, 3: 3, 4: 9, 5: 5}
    *   5: dist = {1: 0, 2: 7, 3: 3, 4: 6, 5: 5}
    *   4: dist = {1: 0, 2: 7, 3: 3, 4: 6, 5: 5}
    *   Shortest Paths (Distance): 1->1: 0, 1->2: 7, 1->3: 3, 1->4: 6, 1->5: 5

### 7. Important Points to Remember

*   Dijkstra's algorithm is a greedy algorithm for finding shortest paths.
*   It works only for graphs with non-negative edge weights.
*   The time complexity depends on the implementation: O(V^2) for basic, O((V+E)logV) for priority queue.
*   It solves the single-source shortest path problem.
*   Be aware of its limitations with negative edge weights and negative cycles. Use Bellman-Ford or Floyd-Warshall for graphs with negative edges.
