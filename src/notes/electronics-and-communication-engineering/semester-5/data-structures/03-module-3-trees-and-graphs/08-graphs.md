---
title: "Graphs"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea18"
status: "completed"
scrapedAt: "2026-05-23T17:55:13.211Z"
---
# Module 3: Trees and Graphs - Graphs

This module delves into the fundamental concepts of Graphs, a crucial non-linear data structure used to represent relationships between objects. We will explore their definition, various representations, and fundamental algorithms.

**Course Outcomes addressed in this module:**

*   **CO3:** Make use of nonlinear data structures like trees and graphs to design algorithms for various applications. (Knowledge Level: K3)

**Learning Outcomes:**

*   Understand the definition and properties of graphs.
*   Learn different ways to represent graphs.
*   Explore fundamental graph traversal algorithms (BFS and DFS).
*   Understand the concept of connectivity in graphs.
*   Learn about spanning trees and their applications.
*   Study algorithms for finding shortest paths (Dijkstra's, Bellman-Ford).
*   Understand Minimum Spanning Trees (Prim's, Kruskal's).

---

## 1. Introduction to Graphs

Graphs are powerful mathematical structures that model relationships between entities. They are widely used in computer science for problems like network routing, social network analysis, mapping, and dependency representation.

### Key Concepts and Definitions

*   **Graph (G):** A graph is a collection of vertices (or nodes) and edges that connect pairs of vertices.
    *   Mathematically, $G = (V, E)$, where $V$ is the set of vertices and $E$ is the set of edges.
*   **Vertex (or Node):** An entity in the graph.
*   **Edge:** A connection between two vertices.
*   **Undirected Graph:** An edge $(u, v)$ connects vertex $u$ to vertex $v$ and vice-versa. The order of vertices in an edge doesn't matter.
    *   *Example:* Representing friendships in a social network. If A is friends with B, B is also friends with A.
*   **Directed Graph (or Digraph):** An edge $(u, v)$ represents a directed connection from vertex $u$ to vertex $v$. The order matters.
    *   *Example:* Representing a one-way street between two locations, or a hyperlink from one webpage to another.
*   **Weighted Graph:** A graph where each edge has an associated numerical value, called a weight. This weight often represents cost, distance, or capacity.
    *   *Example:* The distance between cities on a map.
*   **Degree of a Vertex:**
    *   **Undirected Graph:** The number of edges incident to a vertex.
    *   **Directed Graph:**
        *   **In-degree:** The number of edges directed *into* a vertex.
        *   **Out-degree:** The number of edges directed *out of* a vertex.
*   **Adjacent Vertices:** Two vertices are adjacent if there is an edge connecting them.
*   **Incident Edge:** An edge is incident to a vertex if it connects to that vertex.
*   **Path:** A sequence of vertices $v_0, v_1, ..., v_k$ such that $(v_{i-1}, v_i)$ is an edge for all $1 \le i \le k$.
*   **Simple Path:** A path where all vertices are distinct.
*   **Cycle:** A path where the starting and ending vertices are the same, and no other vertex is repeated.
*   **Connected Graph (Undirected):** A graph where there is a path between any two distinct vertices.
*   **Disconnected Graph (Undirected):** A graph that is not connected. It consists of multiple connected components.
*   **Strongly Connected Graph (Directed):** A directed graph where for every pair of distinct vertices $(u, v)$, there is a path from $u$ to $v$ AND a path from $v$ to $u$.
*   **Weakly Connected Graph (Directed):** A directed graph where if we ignore the direction of the edges (treat it as an undirected graph), the resulting graph is connected.
*   **Tree:** A connected undirected graph with no cycles. A graph with $n$ vertices is a tree if it is connected and has $n-1$ edges, or if it has no cycles and $n-1$ edges.
*   **Spanning Tree:** A subgraph of a connected undirected graph that includes all the vertices of the original graph and is a tree.

---

## 2. Graph Representations

The choice of representation significantly impacts the efficiency of graph algorithms.

### 2.1 Adjacency Matrix

*   **Concept:** A 2D array (matrix) where `matrix[i][j]` indicates the presence or absence of an edge between vertex `i` and vertex `j`.
*   **For Undirected Graphs:** The matrix is symmetric (`matrix[i][j] == matrix[j][i]`).
*   **For Directed Graphs:** The matrix is not necessarily symmetric. `matrix[i][j] = 1` means an edge from `i` to `j`.
*   **For Weighted Graphs:** `matrix[i][j]` stores the weight of the edge. If no edge exists, it can be represented by infinity or a special value (e.g., 0 if weights are positive).
*   **Space Complexity:** $O(V^2)$, where $V$ is the number of vertices.
*   **Time Complexity:**
    *   Checking for an edge between two vertices: $O(1)$.
    *   Finding all neighbors of a vertex: $O(V)$.
    *   Adding/Removing an edge: $O(1)$.
    *   Adding/Removing a vertex: $O(V^2)$ (requires restructuring the matrix).
*   **Pros:** Efficient for dense graphs (where the number of edges is close to $V^2$) and for checking edge existence.
*   **Cons:** Inefficient for sparse graphs (where the number of edges is much less than $V^2$) due to space wastage and the time taken to find neighbors.

#### Example (Undirected Graph):

Vertices: {0, 1, 2, 3}
Edges: {(0,1), (0,2), (1,2), (2,3)}

Adjacency Matrix:

```
   0 1 2 3
0 [0 1 1 0]
1 [1 0 1 0]
2 [1 1 0 1]
3 [0 0 1 0]
```

*(Note: In the textbook by Horowitz, Sahni, and Anderson-Freed, the adjacency matrix often uses 1 for an edge and 0 for no edge. For weighted graphs, the weight is stored. If no edge exists, a special value like infinity or a sentinel value is used.)*

### 2.2 Adjacency List

*   **Concept:** An array of lists (or linked lists), where each index `i` in the array corresponds to vertex `i`. The list at `adjList[i]` contains all vertices adjacent to vertex `i`.
*   **For Weighted Graphs:** Each entry in the list can be a pair `(neighbor_vertex, weight)`.
*   **Space Complexity:** $O(V + E)$, where $V$ is the number of vertices and $E$ is the number of edges.
*   **Time Complexity:**
    *   Checking for an edge between two vertices: $O(\text{degree of vertex})$. In the worst case, $O(V)$.
    *   Finding all neighbors of a vertex: $O(\text{degree of vertex})$.
    *   Adding an edge: $O(1)$ (amortized, if using dynamic arrays or linked lists).
    *   Removing an edge: $O(\text{degree of vertex})$.
    *   Adding/Removing a vertex: $O(V)$ (if using dynamic arrays for the main list, or $O(1)$ if using linked lists but needs to update all adjacent lists).
*   **Pros:** Efficient for sparse graphs. Space usage is proportional to the actual number of edges. Finding neighbors is efficient.
*   **Cons:** Checking for the existence of a specific edge can be slower than with an adjacency matrix.

#### Example (Undirected Graph):

Vertices: {0, 1, 2, 3}
Edges: {(0,1), (0,2), (1,2), (2,3)}

Adjacency List:

```
0: [1, 2]
1: [0, 2]
2: [0, 1, 3]
3: [2]
```

*(Horowitz, Sahni, and Anderson-Freed (2nd Ed.) discuss both adjacency matrices and adjacency lists as common representations. Samanta D's "Classic Data Structures" also covers these in detail, emphasizing their trade-offs for sparse vs. dense graphs.)*

---

## 3. Graph Traversal Algorithms

Graph traversal algorithms systematically visit all reachable vertices from a starting vertex.

### 3.1 Breadth-First Search (BFS)

*   **Concept:** Explores the graph layer by layer. It starts at a root vertex and explores all its neighbors. Then, for each of those neighbors, it explores their unvisited neighbors, and so on.
*   **Data Structure:** Uses a **Queue** to keep track of vertices to visit.
*   **Algorithm:**
    1.  Initialize a `visited` array/set to keep track of visited vertices.
    2.  Pick a starting vertex `s`. Mark `s` as visited and enqueue it.
    3.  While the queue is not empty:
        a.  Dequeue a vertex `u`.
        b.  Process `u` (e.g., print it).
        c.  For each neighbor `v` of `u`:
            i.  If `v` is not visited:
                *   Mark `v` as visited.
                *   Enqueue `v`.
*   **Time Complexity:** $O(V + E)$ using adjacency list representation. $O(V^2)$ using adjacency matrix representation.
*   **Applications:**
    *   Finding the shortest path in an unweighted graph.
    *   Web crawling.
    *   Finding connected components.
    *   Broadcasting in networks.

#### Example (BFS):

Graph (Undirected):
Edges: {(0,1), (0,2), (1,2), (2,3), (3,4)}
Start Vertex: 0

1.  Queue: [0], Visited: {0}
2.  Dequeue 0. Process 0. Neighbors of 0 are 1, 2.
    Queue: [1, 2], Visited: {0, 1, 2}
3.  Dequeue 1. Process 1. Neighbors of 1 are 0, 2. Both visited.
    Queue: [2], Visited: {0, 1, 2}
4.  Dequeue 2. Process 2. Neighbors of 2 are 0, 1, 3. 0, 1 are visited. 3 is not.
    Queue: [3], Visited: {0, 1, 2, 3}
5.  Dequeue 3. Process 3. Neighbors of 3 are 2, 4. 2 is visited. 4 is not.
    Queue: [4], Visited: {0, 1, 2, 3, 4}
6.  Dequeue 4. Process 4. No unvisited neighbors.
    Queue: [], Visited: {0, 1, 2, 3, 4}
Queue is empty. Traversal order: 0, 1, 2, 3, 4.

### 3.2 Depth-First Search (DFS)

*   **Concept:** Explores as far as possible along each branch before backtracking. It starts at a root vertex and explores a path until it reaches a dead end (a vertex with no unvisited neighbors) or a previously visited vertex. Then, it backtracks to the last vertex from which there was an unvisited neighbor and continues the search.
*   **Data Structure:** Uses a **Stack** (implicitly via recursion, or explicitly).
*   **Algorithm (Recursive):**
    1.  Initialize a `visited` array/set.
    2.  Define a recursive function `DFS(vertex u)`:
        a.  Mark `u` as visited.
        b.  Process `u`.
        c.  For each neighbor `v` of `u`:
            i.  If `v` is not visited:
                *   `DFS(v)`
*   **Algorithm (Iterative using Stack):**
    1.  Initialize a `visited` array/set.
    2.  Push the starting vertex `s` onto the stack.
    3.  While the stack is not empty:
        a.  Pop a vertex `u`.
        b.  If `u` is not visited:
            i.  Mark `u` as visited.
            ii. Process `u`.
            iii. For each neighbor `v` of `u` (in reverse order for similar output to recursion):
                *   If `v` is not visited:
                    *   Push `v` onto the stack.
*   **Time Complexity:** $O(V + E)$ using adjacency list representation. $O(V^2)$ using adjacency matrix representation.
*   **Applications:**
    *   Detecting cycles.
    *   Topological sorting.
    *   Finding connected components.
    *   Solving puzzles like mazes.

#### Example (DFS):

Graph (Undirected):
Edges: {(0,1), (0,2), (1,2), (2,3), (3,4)}
Start Vertex: 0

Using recursion:

1.  `DFS(0)`: Mark 0 visited. Process 0. Neighbors: 1, 2.
    *   Call `DFS(1)`: Mark 1 visited. Process 1. Neighbors: 0, 2. 0 visited.
        *   Call `DFS(2)`: Mark 2 visited. Process 2. Neighbors: 0, 1, 3. 0, 1 visited.
            *   Call `DFS(3)`: Mark 3 visited. Process 3. Neighbors: 2, 4. 2 visited.
                *   Call `DFS(4)`: Mark 4 visited. Process 4. No unvisited neighbors. Return.
            *   Return from `DFS(3)`.
        *   Return from `DFS(2)`.
    *   Return from `DFS(1)`.
2.  Return from `DFS(0)`.

Traversal order could be: 0, 1, 2, 3, 4.

*(Both BFS and DFS are extensively covered in Horowitz, Sahni, and Anderson-Freed, and Samanta D, along with their pseudocodes and complexities. Gilberg & Forouzan also provides clear explanations and implementations.)*

---

## 4. Graph Connectivity

Connectivity refers to how "well-connected" the vertices in a graph are.

### 4.1 Connected Components (Undirected Graphs)

*   **Concept:** A connected component of an undirected graph is a subgraph in which any two vertices are connected to each other by paths, and which is connected to no additional vertices in the supergraph.
*   **Finding Connected Components:** Perform DFS or BFS starting from an unvisited vertex. All vertices visited in that traversal form one connected component. Repeat this process until all vertices are visited.

#### Example:

Graph:
Edges: {(0,1), (1,2), (3,4)}
Vertices: {0, 1, 2, 3, 4, 5}

1.  Start DFS/BFS from 0. Visits: {0, 1, 2}. Component 1: {0, 1, 2}.
2.  Start DFS/BFS from 3 (unvisited). Visits: {3, 4}. Component 2: {3, 4}.
3.  Start DFS/BFS from 5 (unvisited). Visits: {5}. Component 3: {5}.

Connected Components: {0, 1, 2}, {3, 4}, {5}.

### 4.2 Strongly Connected Components (Directed Graphs)

*   **Concept:** A maximal subgraph such that for every pair of vertices $u, v$ in the subgraph, there is a directed path from $u$ to $v$ and a directed path from $v$ to $u$.
*   **Algorithms:**
    *   **Kosaraju's Algorithm:**
        1.  Perform DFS on the original graph, keeping track of the finishing times of vertices (or the order in which they are popped from the recursion stack).
        2.  Compute the transpose of the graph (reverse all edge directions).
        3.  Perform DFS on the transpose graph, starting vertices in decreasing order of their finishing times from the first DFS. Each DFS tree in this second phase corresponds to a strongly connected component.
    *   **Tarjan's Algorithm:** A single DFS pass algorithm that uses a stack and keeps track of discovery times and low-link values to identify SCCs.
*   **Time Complexity:** $O(V + E)$ for both algorithms.

*(Brass's "Advanced Data Structures" might touch upon SCCs in the context of complex graph algorithms, while Lipschutz's Schaum's Outline provides foundational graph theory concepts including connectivity.)*

---

## 5. Spanning Trees

A spanning tree is a subgraph that connects all vertices without forming cycles.

### 5.1 Properties of Spanning Trees

*   A spanning tree of a connected graph with $V$ vertices always has $V-1$ edges.
*   Adding any edge to a spanning tree creates a cycle.
*   Removing any edge from a spanning tree disconnects it.

### 5.2 Minimum Spanning Tree (MST)

*   **Concept:** For a weighted, connected, undirected graph, an MST is a spanning tree that has the minimum possible total edge weight.
*   **Applications:** Network design (e.g., laying cables, pipes), clustering, image processing.

#### 5.2.1 Prim's Algorithm

*   **Concept:** A greedy algorithm that starts with an arbitrary vertex and grows the MST one edge at a time. At each step, it adds the minimum-weight edge that connects a vertex in the growing MST to a vertex outside the MST.
*   **Data Structure:** Often uses a **priority queue** to efficiently find the minimum-weight edge.
*   **Algorithm:**
    1.  Initialize an MST set (initially empty).
    2.  Initialize a `key` array to store the minimum weight to connect each vertex to the MST (initialize to infinity, except for the starting vertex, which is 0).
    3.  Initialize a `parent` array to store the MST structure.
    4.  Initialize a `inMST` array to track vertices already included in the MST.
    5.  While there are vertices not yet in the MST:
        a.  Pick the vertex `u` not in MST with the minimum `key` value.
        b.  Add `u` to the MST.
        c.  For each neighbor `v` of `u`:
            i.  If `v` is not in MST and `weight(u, v) < key[v]`:
                *   Set `key[v] = weight(u, v)`.
                *   Set `parent[v] = u`.
*   **Time Complexity:**
    *   $O(V^2)$ using an adjacency matrix and simple array to find min key.
    *   $O(E \log V)$ or $O(E + V \log V)$ using an adjacency list and a binary heap or Fibonacci heap for the priority queue.
*   **Reference:** Horowitz, Sahni, and Anderson-Freed provide a detailed explanation of Prim's algorithm.

#### 5.2.2 Kruskal's Algorithm

*   **Concept:** Another greedy algorithm that sorts all the edges of the graph by weight in ascending order. It then iterates through the sorted edges, adding an edge to the MST if it does not form a cycle with the already chosen edges.
*   **Data Structure:** Uses a **Disjoint Set Union (DSU)** data structure (also known as Union-Find) to efficiently detect cycles.
*   **Algorithm:**
    1.  Sort all edges of the graph in non-decreasing order of their weights.
    2.  Initialize a Disjoint Set Union structure where each vertex is in its own set.
    3.  Initialize an MST set (initially empty).
    4.  For each edge $(u, v)$ with weight $w$ in the sorted list:
        a.  If `find(u)` is not equal to `find(v)` (i.e., $u$ and $v$ are in different sets, so adding $(u, v)$ won't form a cycle):
            i.  Add $(u, v)$ to the MST.
            ii. `union(u, v)` to merge their sets.
*   **Time Complexity:** $O(E \log E)$ or $O(E \log V)$ due to sorting the edges and the Union-Find operations.
*   **Reference:** Samanta D's "Classic Data Structures" and Aho, Hopcroft, and Ullman's "Data Structures and Algorithms" are excellent sources for Kruskal's algorithm and the Union-Find data structure.

#### Example (MST using Kruskal's):

Graph:
Vertices: {0, 1, 2, 3}
Edges: {(0,1, 2), (0,2, 4), (1,2, 1), (1,3, 3), (2,3, 5)} (vertex, vertex, weight)

1.  Sorted Edges: {(1,2, 1), (0,1, 2), (1,3, 3), (0,2, 4), (2,3, 5)}
2.  DSU: {0}, {1}, {2}, {3}
3.  Consider (1,2, 1): `find(1) != find(2)`. Add (1,2). MST: {(1,2)}. DSU: {0}, {1,2}, {3}.
4.  Consider (0,1, 2): `find(0) != find(1)`. Add (0,1). MST: {(1,2), (0,1)}. DSU: {0,1,2}, {3}.
5.  Consider (1,3, 3): `find(1) != find(3)`. Add (1,3). MST: {(1,2), (0,1), (1,3)}. DSU: {0,1,2,3}.
6.  Consider (0,2, 4): `find(0) == find(2)`. Skip (forms cycle).
7.  Consider (2,3, 5): `find(2) == find(3)`. Skip (forms cycle).

MST: {(1,2, 1), (0,1, 2), (1,3, 3)}. Total weight = 6.

---

## 6. Shortest Path Algorithms

These algorithms find the shortest path between two vertices in a weighted graph.

### 6.1 Dijkstra's Algorithm

*   **Concept:** Finds the shortest path from a single source vertex to all other vertices in a graph with **non-negative edge weights**. It's a greedy algorithm. Similar to Prim's algorithm, it maintains a set of visited vertices and iteratively selects the unvisited vertex with the smallest known distance from the source.
*   **Data Structure:** Uses a **priority queue** to efficiently select the next vertex.
*   **Algorithm:**
    1.  Initialize `distance` array: `distance[s] = 0` for source `s`, and infinity for all other vertices.
    2.  Initialize `parent` array to reconstruct paths.
    3.  Initialize a priority queue `PQ` and insert all vertices with their distances.
    4.  While `PQ` is not empty:
        a.  Extract the vertex `u` with the minimum distance from `PQ`.
        b.  For each neighbor `v` of `u`:
            i.  If `distance[u] + weight(u, v) < distance[v]`:
                *   `distance[v] = distance[u] + weight(u, v)`.
                *   `parent[v] = u`.
                *   Update `v`'s distance in `PQ`.
*   **Time Complexity:**
    *   $O(V^2)$ using adjacency matrix and linear scan for minimum.
    *   $O(E \log V)$ or $O(E + V \log V)$ using adjacency list and binary/Fibonacci heap.
*   **Limitation:** Does not work correctly with negative edge weights.
*   **Reference:** Horowitz, Sahni, and Anderson-Freed extensively cover Dijkstra's algorithm, including its proof of correctness.

#### Example (Dijkstra's):

Graph:
Vertices: {0, 1, 2, 3}
Edges: {(0,1, 4), (0,2, 2), (1,3, 5), (2,1, 1), (2,3, 8)}
Source: 0

1.  Dist: {0: 0, 1: inf, 2: inf, 3: inf}. PQ: {(0,0), (1,inf), (2,inf), (3,inf)}.
2.  Extract (0,0). Neighbors: 1, 2.
    *   Dist[1] = min(inf, 0+4) = 4. PQ: {(1,4), (2,inf), (3,inf)}. Parent[1]=0.
    *   Dist[2] = min(inf, 0+2) = 2. PQ: {(1,4), (2,2), (3,inf)}. Parent[2]=0.
3.  Extract (2,2). Neighbors: 1, 3.
    *   Dist[1] = min(4, 2+1) = 3. PQ: {(1,3), (3,inf)}. Parent[1]=2.
    *   Dist[3] = min(inf, 2+8) = 10. PQ: {(1,3), (3,10)}. Parent[3]=2.
4.  Extract (1,3). Neighbors: 3.
    *   Dist[3] = min(10, 3+5) = 8. PQ: {(3,8)}. Parent[3]=1.
5.  Extract (3,8). No outgoing edges.
PQ empty.

Shortest distances from 0: {0: 0, 1: 3, 2: 2, 3: 8}.
Paths: 0->2, 0->2->1, 0->2->1->3.

### 6.2 Bellman-Ford Algorithm

*   **Concept:** Finds the shortest path from a single source to all other vertices in a graph, even with **negative edge weights**, but it can detect negative cycles.
*   **Algorithm:**
    1.  Initialize `distance` array: `distance[s] = 0` for source `s`, and infinity for all other vertices.
    2.  Relax all edges $|V|-1$ times. Relaxation of an edge $(u, v)$ with weight $w$ means: if `distance[u] + w < distance[v]`, then update `distance[v] = distance[u] + w` and set `parent[v] = u`.
    3.  After $|V|-1$ iterations, perform one more pass over all edges. If any edge $(u, v)$ can still be relaxed (i.e., `distance[u] + w < distance[v]`), then there is a negative cycle reachable from the source.
*   **Time Complexity:** $O(V \times E)$.
*   **Use Case:** When edge weights can be negative.

*(Aho, Hopcroft, and Ullman's classic text likely covers Bellman-Ford, and Brass's book might also discuss it in the context of negative weights and cycles.)*

---

## 7. Practice Questions and Exercises

**Question 1 (Conceptual):**
When would you prefer using an adjacency matrix representation over an adjacency list for a graph, and vice versa? Explain with examples.
**Answer:**
*   **Adjacency Matrix:** Preferable for **dense graphs** (where $E \approx V^2$) and when frequent edge existence checks are needed. Example: A complete graph representing relationships between a small number of highly interconnected entities.
*   **Adjacency List:** Preferable for **sparse graphs** (where $E \ll V^2$) to save space and for efficient neighbor retrieval. Example: A social network, a map of cities and roads, or the internet.

**Question 2 (BFS/DFS):**
Given the following undirected graph:
Vertices: {A, B, C, D, E, F}
Edges: {(A,B), (A,C), (B,D), (C,E), (D,E), (D,F), (E,F)}

a) Perform a Breadth-First Search (BFS) starting from vertex A. List the order of visited vertices.
b) Perform a Depth-First Search (DFS) starting from vertex A (using recursion). List a possible order of visited vertices.

**Answer:**
a) **BFS from A:**
   1. Queue: [A], Visited: {A}
   2. Dequeue A. Neighbors: B, C.
      Queue: [B, C], Visited: {A, B, C}
   3. Dequeue B. Neighbors: A, D. A visited.
      Queue: [C, D], Visited: {A, B, C, D}
   4. Dequeue C. Neighbors: A, E. A visited.
      Queue: [D, E], Visited: {A, B, C, D, E}
   5. Dequeue D. Neighbors: B, E, F. B visited. E, F not.
      Queue: [E, F], Visited: {A, B, C, D, E, F}
   6. Dequeue E. Neighbors: C, D, F. C, D visited. F not.
      Queue: [F], Visited: {A, B, C, D, E, F}
   7. Dequeue F. Neighbors: D, E. Both visited.
      Queue: [], Visited: {A, B, C, D, E, F}
   *   **BFS Order:** A, B, C, D, E, F

b) **DFS from A (Recursive - example path):**
   1. `DFS(A)`: Visit A. Neighbors: B, C.
      *   Call `DFS(B)`: Visit B. Neighbors: A, D. A visited.
          *   Call `DFS(D)`: Visit D. Neighbors: B, E, F. B visited.
              *   Call `DFS(E)`: Visit E. Neighbors: C, D, F. C visited. D visited.
                  *   Call `DFS(F)`: Visit F. Neighbors: D, E. D, E visited. Return.
              *   Return from `DFS(E)`.
          *   Return from `DFS(D)`.
      *   Return from `DFS(B)`.
      *   Call `DFS(C)`: Already visited by path A->B->D->E->C (if E explored C before F), or if C wasn't visited through B's path, it would be visited now. Let's assume C is visited.
   *   **DFS Order (one possibility):** A, B, D, E, F, C

**Question 3 (MST):**
Consider the following weighted undirected graph:
Vertices: {1, 2, 3, 4, 5}
Edges: {(1,2, 3), (1,3, 1), (1,4, 4), (2,3, 2), (2,5, 3), (3,4, 5), (4,5, 1)}

a) Find the Minimum Spanning Tree (MST) using Kruskal's algorithm. List the edges in the MST and its total weight.
b) Find the Minimum Spanning Tree (MST) using Prim's algorithm, starting from vertex 1. List the edges in the MST and its total weight.

**Answer:**
a) **Kruskal's Algorithm:**
   Sorted Edges:
   1. (1,3, 1)
   2. (4,5, 1)
   3. (2,3, 2)
   4. (1,2, 3)
   5. (2,5, 3)
   6. (1,4, 4)
   7. (3,4, 5)

   *   DSU: {1}, {2}, {3}, {4}, {5}
   *   Add (1,3, 1): MST: {(1,3)}. DSU: {1,3}, {2}, {4}, {5}
   *   Add (4,5, 1): MST: {(1,3), (4,5)}. DSU: {1,3}, {2}, {4,5}
   *   Add (2,3, 2): MST: {(1,3), (4,5), (2,3)}. DSU: {1,2,3}, {4,5}
   *   Add (1,2, 3): `find(1) == find(2)`. Skip.
   *   Add (2,5, 3): `find(2) != find(5)`. MST: {(1,3), (4,5), (2,3), (2,5)}. DSU: {1,2,3,4,5} (4 edges for 5 vertices, so done).
   *   **MST Edges:** (1,3, 1), (4,5, 1), (2,3, 2), (2,5, 3)
   *   **Total Weight:** 1 + 1 + 2 + 3 = 7

b) **Prim's Algorithm (starting from vertex 1):**
   *   Initialize: `key` = {1:0, 2:inf, 3:inf, 4:inf, 5:inf}, `inMST` = {F,F,F,F,F}, `parent` = {}
   *   Step 1: Pick vertex 1. `inMST[1]` = T. Neighbors: 2 (w=3), 3 (w=1), 4 (w=4).
      *   `key[2]` = 3, `parent[2]` = 1
      *   `key[3]` = 1, `parent[3]` = 1
      *   `key[4]` = 4, `parent[4]` = 1
   *   Step 2: Pick vertex 3 (min key=1). `inMST[3]` = T. Neighbors: 1 (w=1), 2 (w=2), 4 (w=5).
      *   `key[1]` = 0, already in MST.
      *   `key[2]` = min(3, 2) = 2, `parent[2]` = 3
      *   `key[4]` = min(4, 5) = 4, `parent[4]` = 1 (no change)
   *   Step 3: Pick vertex 2 (min key=2). `inMST[2]` = T. Neighbors: 1 (w=3), 3 (w=2), 5 (w=3).
      *   `key[1]` = 0 (in MST).
      *   `key[3]` = 2 (in MST).
      *   `key[5]` = min(inf, 3) = 3, `parent[5]` = 2
   *   Step 4: Pick vertex 5 (min key=3). `inMST[5]` = T. Neighbors: 2 (w=3), 4 (w=1).
      *   `key[2]` = 2 (in MST).
      *   `key[4]` = min(4, 1) = 1, `parent[4]` = 5
   *   Step 5: Pick vertex 4 (min key=1). `inMST[4]` = T. All vertices in MST.
   *   **MST Edges:** (1,3), (3,2), (2,5), (5,4)
   *   **Total Weight:** 1 + 2 + 3 + 1 = 7

**Question 4 (Shortest Path):**
Using Dijkstra's algorithm, find the shortest path from vertex S to vertex D in the following weighted directed graph:
Vertices: {S, A, B, C, D}
Edges: {(S,A, 1), (S,B, 4), (A,B, 2), (A,C, 5), (B,C, 1), (B,D, 3), (C,D, 1)}

**Answer:**
*   Initialize: `dist` = {S:0, A:inf, B:inf, C:inf, D:inf}, `parent` = {}
*   PQ: {(S,0), (A,inf), (B,inf), (C,inf), (D,inf)}

1.  Extract (S,0). Neighbors: A, B.
    *   `dist[A]` = min(inf, 0+1) = 1. PQ: {(A,1), (B,inf), ...}. `parent[A]` = S.
    *   `dist[B]` = min(inf, 0+4) = 4. PQ: {(A,1), (B,4), ...}. `parent[B]` = S.

2.  Extract (A,1). Neighbors: B, C.
    *   `dist[B]` = min(4, 1+2) = 3. PQ: {(B,3), (C,inf), ...}. `parent[B]` = A.
    *   `dist[C]` = min(inf, 1+5) = 6. PQ: {(B,3), (C,6), ...}. `parent[C]` = A.

3.  Extract (B,3). Neighbors: C, D.
    *   `dist[C]` = min(6, 3+1) = 4. PQ: {(C,4), (D,inf), ...}. `parent[C]` = B.
    *   `dist[D]` = min(inf, 3+3) = 6. PQ: {(C,4), (D,6), ...}. `parent[D]` = B.

4.  Extract (C,4). Neighbors: D.
    *   `dist[D]` = min(6, 4+1) = 5. PQ: {(D,5), ...}. `parent[D]` = C.

5.  Extract (D,5). No outgoing edges.

*   Shortest distances: S:0, A:1, B:3, C:4, D:5
*   Shortest path to D: Reconstruct from `parent[D]` = C, `parent[C]` = B, `parent[B]` = A, `parent[A]` = S.
*   **Shortest Path:** S -> A -> B -> C -> D

---

## 8. Important Points to Remember

*   **Graph Representation:** Adjacency Matrix ($O(V^2)$ space) is good for dense graphs, Adjacency List ($O(V+E)$ space) is good for sparse graphs.
*   **Traversal:** BFS explores level by level (using a queue) and finds shortest paths in unweighted graphs. DFS explores as deep as possible (using a stack/recursion) and is used for cycle detection, topological sorting.
*   **Connectivity:** Connected components (undirected), Strongly Connected Components (directed).
*   **MST:** Prim's and Kruskal's are greedy algorithms for finding Minimum Spanning Trees. Prim's grows from a vertex, Kruskal's grows by adding edges.
*   **Shortest Path:** Dijkstra's for non-negative weights, Bellman-Ford for negative weights (and negative cycle detection).
*   **Complexity:** Always consider the time and space complexity of algorithms with respect to $V$ (number of vertices) and $E$ (number of edges).

---

This comprehensive set of notes covers the fundamental aspects of graphs, their representations, traversal algorithms, connectivity, spanning trees, and shortest path algorithms, aligning with the learning outcomes and course objectives for Module 3. Remember to consult the provided textbooks for detailed proofs, pseudocodes, and C implementations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
