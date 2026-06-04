---
title: "Floyd-Warshall shortest path algorithm"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 3: Trees"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af39"
status: "completed"
scrapedAt: "2026-05-20T16:13:39.296Z"
---
## MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4

**Module 3: Trees**

**Topic: Floyd-Warshall Shortest Path Algorithm**

**Learning Outcomes:**

*   Understand the concept of shortest paths in graphs.
*   Explain the principle of dynamic programming as applied to the Floyd-Warshall algorithm.
*   Describe the Floyd-Warshall algorithm and its steps.
*   Apply the Floyd-Warshall algorithm to find the shortest paths between all pairs of vertices in a graph.
*   Analyze the time and space complexity of the Floyd-Warshall algorithm.
*   Identify the conditions for the presence of negative cycles in a graph using the Floyd-Warshall algorithm.

---

**1. Introduction to Shortest Paths**

*   **Definition:** A shortest path between two vertices in a graph is a path with the minimum total weight. The weight is often referred to as the cost or distance.
*   **Types of Shortest Path Problems:**
    *   **Single-Source Shortest Path:** Find the shortest paths from a single source vertex to all other vertices in the graph (e.g., Dijkstra's algorithm, Bellman-Ford algorithm).
    *   **All-Pairs Shortest Path:** Find the shortest paths between all pairs of vertices in the graph (e.g., Floyd-Warshall algorithm).
*   **Applications:**
    *   Navigation systems (finding the fastest route).
    *   Network routing (determining the optimal path for data packets).
    *   Resource allocation (minimizing cost).
    *   Social network analysis (finding the shortest path between individuals).

**2. Dynamic Programming and the Floyd-Warshall Algorithm**

*   **Dynamic Programming:** An algorithmic paradigm that breaks down a complex problem into smaller, overlapping subproblems, solves each subproblem only once, and stores the solutions to avoid recomputation.  It's particularly useful for optimization problems.
*   **Floyd-Warshall and Dynamic Programming:** The Floyd-Warshall algorithm utilizes dynamic programming to solve the all-pairs shortest path problem. It iteratively improves estimates of the shortest paths by considering intermediate vertices.

**3. The Floyd-Warshall Algorithm: Description and Steps**

*   **Purpose:**  To find the shortest distances between every pair of vertices in a weighted graph. It works for both directed and undirected graphs. The graph must not contain negative-weight cycles.
*   **Input:** A weighted graph represented as an adjacency matrix, often denoted as `W` where `W[i][j]` is the weight of the edge between vertex `i` and vertex `j`. If there is no edge between vertices `i` and `j`, `W[i][j]` is set to infinity (or a very large number). `W[i][i]` is set to 0.

*   **Algorithm Steps:**

    1.  **Initialization:**
        *   Let `dist` be a matrix of the same dimensions as the adjacency matrix `W`.
        *   Initialize `dist[i][j] = W[i][j]` for all pairs of vertices `i` and `j`.  Essentially, copy the adjacency matrix to `dist`.
    2.  **Iteration:**
        *   For each vertex `k` from 1 to `n` (where `n` is the number of vertices):
            *   For each vertex `i` from 1 to `n`:
                *   For each vertex `j` from 1 to `n`:
                    *   `dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])`
        *   The outer loop (`k`) iterates through all possible intermediate vertices.  For each `k`, we consider whether using `k` as an intermediate vertex improves the shortest path between `i` and `j`.
    3.  **Result:** After the iterations, `dist[i][j]` will contain the shortest distance between vertices `i` and `j` for all pairs `(i, j)`.

*   **Pseudocode:**

    ```
    Floyd-Warshall(W):
        n = number of vertices
        dist = matrix of size n x n, initialized with W

        for k = 1 to n:
            for i = 1 to n:
                for j = 1 to n:
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])

        return dist
    ```

**4. Example of Applying the Floyd-Warshall Algorithm**

Consider the following weighted graph represented by the adjacency matrix:

```
W =   [ [0,   5,   ∞,   10],
        [∞,   0,   3,   ∞],
        [∞,   ∞,   0,   1],
        [∞,   ∞,   ∞,   0] ]
```

Here, `∞` represents infinity.

**Step-by-step execution:**

*   **Initialization: `dist = W`**

```
dist = [ [0,   5,   ∞,   10],
         [∞,   0,   3,   ∞],
         [∞,   ∞,   0,   1],
         [∞,   ∞,   ∞,   0] ]
```

*   **k = 1:** (Using vertex 1 as an intermediate vertex)

```
dist[2][1] = min(dist[2][1], dist[2][1] + dist[1][1]) = min(∞, ∞ + 0) = ∞
dist[2][2] = min(dist[2][2], dist[2][1] + dist[1][2]) = min(0, ∞ + 5) = 0
dist[2][3] = min(dist[2][3], dist[2][1] + dist[1][3]) = min(3, ∞ + ∞) = 3
dist[2][4] = min(dist[2][4], dist[2][1] + dist[1][4]) = min(∞, ∞ + 10) = ∞
dist[3][1] = min(dist[3][1], dist[3][1] + dist[1][1]) = min(∞, ∞ + 0) = ∞
dist[3][2] = min(dist[3][2], dist[3][1] + dist[1][2]) = min(∞, ∞ + 5) = ∞
dist[3][3] = min(dist[3][3], dist[3][1] + dist[1][3]) = min(0, ∞ + ∞) = 0
dist[3][4] = min(dist[3][4], dist[3][1] + dist[1][4]) = min(1, ∞ + 10) = 1
dist[4][1] = min(dist[4][1], dist[4][1] + dist[1][1]) = min(∞, ∞ + 0) = ∞
dist[4][2] = min(dist[4][2], dist[4][1] + dist[1][2]) = min(∞, ∞ + 5) = ∞
dist[4][3] = min(dist[4][3], dist[4][1] + dist[1][3]) = min(∞, ∞ + ∞) = ∞
dist[4][4] = min(dist[4][4], dist[4][1] + dist[1][4]) = min(0, ∞ + 10) = 0

dist = [ [0,   5,   ∞,   10],
         [∞,   0,   3,   ∞],
         [∞,   ∞,   0,   1],
         [∞,   ∞,   ∞,   0] ]  //No changes after the loop of i and j

```

*   **k = 2:** (Using vertex 2 as an intermediate vertex)

```
dist[1][3] = min(dist[1][3], dist[1][2] + dist[2][3]) = min(∞, 5 + 3) = 8
dist[3][1] = min(dist[3][1], dist[3][2] + dist[2][1]) = min(∞, ∞ + ∞) = ∞
dist[3][2] = min(dist[3][2], dist[3][2] + dist[2][2]) = min(∞, ∞ + 0) = ∞
dist[4][1] = min(dist[4][1], dist[4][2] + dist[2][1]) = min(∞, ∞ + ∞) = ∞
dist[4][2] = min(dist[4][2], dist[4][2] + dist[2][2]) = min(∞, ∞ + 0) = ∞

dist = [ [0,   5,   8,   10],
         [∞,   0,   3,   ∞],
         [∞,   ∞,   0,   1],
         [∞,   ∞,   ∞,   0] ]

```

*   **k = 3:** (Using vertex 3 as an intermediate vertex)

```
dist[1][4] = min(dist[1][4], dist[1][3] + dist[3][4]) = min(10, 8 + 1) = 9
dist[2][4] = min(dist[2][4], dist[2][3] + dist[3][4]) = min(∞, 3 + 1) = 4

dist = [ [0,   5,   8,   9],
         [∞,   0,   3,   4],
         [∞,   ∞,   0,   1],
         [∞,   ∞,   ∞,   0] ]
```

*   **k = 4:** (Using vertex 4 as an intermediate vertex)

```
No changes.

dist = [ [0,   5,   8,   9],
         [∞,   0,   3,   4],
         [∞,   ∞,   0,   1],
         [∞,   ∞,   ∞,   0] ]
```

**Final Result:**

```
dist = [ [0,   5,   8,   9],
         [∞,   0,   3,   4],
         [∞,   ∞,   0,   1],
         [∞,   ∞,   ∞,   0] ]
```

This `dist` matrix represents the shortest distance between any two vertices in the graph.  For instance, the shortest distance from vertex 1 to vertex 4 is 9.

**5. Time and Space Complexity**

*   **Time Complexity:** O(n<sup>3</sup>), where n is the number of vertices in the graph. This is because there are three nested loops, each iterating from 1 to n.
*   **Space Complexity:** O(n<sup>2</sup>).  The algorithm uses a matrix of size n x n to store the shortest distances.

**6. Negative Cycle Detection**

*   **Definition:** A negative cycle is a cycle in a graph where the sum of the weights of the edges in the cycle is negative.
*   **Impact on Shortest Paths:** If a graph contains a negative cycle, the shortest path between some pairs of vertices may not exist, because we can always traverse the negative cycle to decrease the path weight indefinitely.
*   **Floyd-Warshall and Negative Cycles:** The Floyd-Warshall algorithm can detect the presence of negative cycles. After the algorithm has finished executing, if `dist[i][i] < 0` for any vertex `i`, it indicates that there is a negative cycle reachable from vertex `i`. Because traversing that negative cycle reduces the path length below 0.

    *   **Why this works:** After `n` iterations, if there are no negative cycles, `dist[i][i]` should remain 0 for all `i`.  If a negative cycle exists, the algorithm will find a path from `i` to `i` with a negative weight.

**7. Important Points to Remember**

*   The Floyd-Warshall algorithm finds the shortest paths between *all* pairs of vertices.
*   It works for both directed and undirected graphs.
*   It can detect negative cycles.
*   It has a time complexity of O(n<sup>3</sup>) and a space complexity of O(n<sup>2</sup>).
*   The input is a weighted adjacency matrix.
*   If there is no edge between vertices i and j, W[i][j] should be initialized to infinity or a sufficiently large number that doesn't affect the final result when added to other weights.
*   If `dist[i][i]` becomes negative after running the algorithm, it means a negative cycle exists in the graph.

**8. Practice Questions/Exercises**

**Question 1:**

Apply the Floyd-Warshall algorithm to the following weighted graph represented by the adjacency matrix:

```
W = [ [0,   3,   ∞,   7],
      [8,   0,   2,   ∞],
      [5,   ∞,   0,   1],
      [2,   ∞,   ∞,   0] ]
```

Show the `dist` matrix after each iteration of the outer loop (i.e., after k=1, k=2, k=3, k=4). What are the shortest path distances between all pairs of vertices?

**Answer:**

*   **Initialization (k=0):**

```
dist = [ [0,   3,   ∞,   7],
         [8,   0,   2,   ∞],
         [5,   ∞,   0,   1],
         [2,   ∞,   ∞,   0] ]
```

*   **k = 1:**

```
dist = [ [0,   3,   ∞,   7],
         [8,   0,   2,   15],
         [5,   8,   0,   1],
         [2,   5,   ∞,   0] ]
```

*   **k = 2:**

```
dist = [ [0,   3,   5,   7],
         [8,   0,   2,   15],
         [5,   8,   0,   1],
         [2,   5,   7,   0] ]
```

*   **k = 3:**

```
dist = [ [0,   3,   5,   6],
         [7,   0,   2,   3],
         [5,   8,   0,   1],
         [2,   5,   7,   0] ]
```

*   **k = 4:**

```
dist = [ [0,   3,   5,   6],
         [5,   0,   2,   3],
         [5,   6,   0,   1],
         [2,   5,   7,   0] ]
```

Final Result:

```
dist = [ [0,   3,   5,   6],
         [5,   0,   2,   3],
         [5,   6,   0,   1],
         [2,   5,   7,   0] ]
```

**Question 2:**

Modify the graph from Question 1 by changing `W[3][1]` from 5 to -5.  Apply the Floyd-Warshall algorithm.  Does the graph now contain a negative cycle?  If so, how can you tell?

**Answer:**

With W[3][1] = -5, the initial matrix becomes:

```
W = [ [0,   3,   ∞,   7],
      [8,   0,   2,   ∞],
      [-5,   ∞,   0,   1],
      [2,   ∞,   ∞,   0] ]
```

After running the Floyd-Warshall algorithm:

```
dist = [ [-2,  3,  5,  6],
         [3,   0,  2,  3],
         [-5, -2,  0,  -1],
         [2,  5,   7, 0] ]
```

Notice that dist[1][1] becomes -2,  dist[3][3] becomes 0, the algorithm does not detect the existence of negative cycles, so we need to keep the W[i][j] as infinity when no edge exits.

But if we have W[3][1] = -2, then when k =3, i =1 and j =1, we can see that dist[1][1] = min(dist[1][1], dist[1][3] + dist[3][1]) = min(0, infinity -2), which equals -infinity. Thus, we can change W[3][1] to -2.

```
W = [ [0,   3,   ∞,   7],
      [8,   0,   2,   ∞],
      [-2,   ∞,   0,   1],
      [2,   ∞,   ∞,   0] ]
```

```
dist = [ [-infinity,  3,  infinity,  6],
         [3,   0,  2,  3],
         [-2, -2,  0,  -1],
         [2,  5,   7, 0] ]
```

The existence of negative cycles cannot be determined in this question.

**Question 3:**

What are the advantages and disadvantages of using the Floyd-Warshall algorithm compared to Dijkstra's algorithm for finding shortest paths?

**Answer:**

**Floyd-Warshall Advantages:**

*   Finds shortest paths between *all* pairs of vertices in a single run.
*   Relatively simple to implement.
*   Can detect negative cycles.

**Floyd-Warshall Disadvantages:**

*   O(n<sup>3</sup>) time complexity, which can be slower than Dijkstra's for sparse graphs, especially if you only need the shortest paths from a single source.
*   O(n<sup>2</sup>) space complexity, which can be prohibitive for very large graphs.

**Dijkstra's Advantages:**

*   O(E + V log V) time complexity using a priority queue (where E is the number of edges and V is the number of vertices), which is often faster than Floyd-Warshall for sparse graphs and single-source shortest path problems.

**Dijkstra's Disadvantages:**

*   Finds shortest paths from a *single source* to all other vertices. You'd need to run it V times to get all-pairs shortest paths.
*   Does *not* work with graphs containing negative edges (it can produce incorrect results).

**In summary:**

*   Use Dijkstra's if you need shortest paths from a single source and your graph doesn't have negative edges.
*   Use Floyd-Warshall if you need shortest paths between all pairs of vertices or if you need to detect negative cycles.

---
