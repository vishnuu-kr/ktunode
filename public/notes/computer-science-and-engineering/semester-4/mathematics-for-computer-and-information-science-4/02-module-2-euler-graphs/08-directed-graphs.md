---
title: "Directed graphs"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 2: Euler graphs"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af2e"
status: "completed"
scrapedAt: "2026-05-20T16:13:32.259Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 2: Euler Graphs
### Topic: Directed Graphs

**Learning Outcomes:**

*   Understand the definition of a directed graph (digraph).
*   Be able to represent directed graphs using adjacency matrices and adjacency lists.
*   Identify and understand terminology related to directed graphs (e.g., indegree, outdegree, source, sink, path, cycle, strongly connected, weakly connected).
*   Determine whether a directed graph is strongly connected or weakly connected.
*   Apply algorithms for finding paths and cycles in directed graphs (e.g., Depth-First Search (DFS)).

**1. Definition of a Directed Graph (Digraph)**

*   A **directed graph (digraph)** *G* is an ordered pair *G* = (*V*, *E*) where:
    *   *V* is a finite set of **vertices** (or nodes).
    *   *E* is a set of **directed edges** (or arcs).  Each edge is an ordered pair of vertices (*u*, *v*), where *u* is the **tail** (or source) and *v* is the **head** (or destination) of the edge.  The edge (*u*, *v*) represents a connection from *u* to *v*.  Note that (*u*, *v*) is different from (*v*, *u*).
*   Unlike undirected graphs, the order of vertices in an edge matters in directed graphs.

**Example:**

Consider a digraph *G* = (*V*, *E*) where:
*   *V* = {A, B, C, D}
*   *E* = {(A, B), (B, C), (C, A), (A, D), (D, B)}

This represents a graph with vertices A, B, C, and D. There's a directed edge from A to B, B to C, C to A, A to D, and D to B.  It's important to note that there is no edge from B to A, or C to B, etc., unless explicitly defined in the set *E*.

**2. Representation of Directed Graphs**

*   **Adjacency Matrix:**
    *   An adjacency matrix *A* for a digraph with *n* vertices is an *n* x *n* matrix where *A[i][j]* is 1 if there is a directed edge from vertex *i* to vertex *j*, and 0 otherwise.
    *   If there are weights associated with the edges, *A[i][j]* represents the weight of the edge from *i* to *j*.  If there's no edge, *A[i][j]* can be 0, infinity (∞), or some other suitable value depending on the application.

    **Example:**  Using the graph defined above:

    ```
      A B C D
    A 0 1 0 1
    B 0 0 1 0
    C 1 0 0 0
    D 0 1 0 0
    ```

    *   *A[0][1] = 1* because there's an edge from A to B.
    *   *A[0][0] = 0* because there's no loop (edge from A to A).

*   **Adjacency List:**
    *   An adjacency list represents a digraph by maintaining a list of adjacent vertices for each vertex in the graph.
    *   For each vertex *u*, the adjacency list stores all vertices *v* for which there is an edge (*u*, *v*).
    *   Adjacency lists are generally more space-efficient than adjacency matrices for sparse graphs (graphs with relatively few edges).

    **Example:** Using the graph defined above:

    *   A: B, D
    *   B: C
    *   C: A
    *   D: B

**3. Terminology Related to Directed Graphs**

*   **Indegree of a vertex *v***: The number of edges entering *v*.  It is denoted as *deg⁻(v)*. In the adjacency matrix, it's the sum of the *v*-th column.
*   **Outdegree of a vertex *v***: The number of edges leaving *v*.  It is denoted as *deg⁺(v)*. In the adjacency matrix, it's the sum of the *v*-th row.
*   **Source:** A vertex with an indegree of 0.  It has no incoming edges.
*   **Sink:** A vertex with an outdegree of 0.  It has no outgoing edges.
*   **Path:** A sequence of vertices *v₁*, *v₂*, ..., *vₖ* such that there is an edge (*vᵢ*, *vᵢ₊₁*) for all *i* = 1, 2, ..., *k*-1. The length of the path is *k*-1 (the number of edges).  A path can have repeated vertices or edges.
*   **Simple Path:**  A path where all vertices are distinct.
*   **Cycle:** A path that starts and ends at the same vertex. A cycle contains at least one edge.  *v₁*, *v₂*, ..., *vₖ*, *v₁* is a cycle.
*   **Simple Cycle:** A cycle where all vertices are distinct (except for the first and last vertex, which are the same).
*   **Directed Acyclic Graph (DAG):** A directed graph with no cycles.  DAGs are important in many computer science applications.

**Example:** (Using the initial digraph):

*   Indegree of A: 1 (from C)
*   Outdegree of A: 2 (to B and D)
*   Path from A to C: A -> B -> C
*   Cycle: A -> B -> C -> A

**4. Strong and Weak Connectivity**

*   **Strongly Connected:** A digraph is **strongly connected** if there is a directed path from every vertex to every other vertex in the graph.
*   **Weakly Connected:** A digraph is **weakly connected** if replacing all directed edges with undirected edges produces a connected (undirected) graph.  In other words, if there's a path between every pair of vertices if you ignore the direction of the edges.

**Example:**

*   The digraph with edges (A, B), (B, C), and (C, A) is strongly connected.
*   The digraph with edges (A, B) and (C, D) is not strongly connected.
*   The digraph with edges (A, B), (B, C), and (D, C) is weakly connected. Even though you can't go directly from A to D following the arrow directions, if you ignore the directions, there's a path: A -> B -> C <- D

**5. Algorithms for Finding Paths and Cycles in Directed Graphs**

*   **Depth-First Search (DFS):** A fundamental graph traversal algorithm that can be used to find paths and cycles in directed graphs.  It explores as far as possible along each branch before backtracking.
    *   **Algorithm:**
        1.  Mark all vertices as unvisited.
        2.  For each vertex *v*:
            *   If *v* is unvisited, call `DFS(v)`.
    *   `DFS(v)`:
        1.  Mark *v* as visited.
        2.  For each neighbor *w* of *v*:
            *   If *w* is unvisited, call `DFS(w)`.
    *   **Cycle Detection using DFS:**
        1.  Maintain a set of vertices currently on the recursion stack (i.e., vertices that have been visited but whose neighbors have not all been explored).
        2.  If you encounter a vertex that is already on the recursion stack during the DFS, you have found a cycle.
        3. Mark the vertex as completely explored by removing it from the stack and marking it as 'finished'.

*   **Breadth-First Search (BFS):**  Another graph traversal algorithm.  While primarily used for shortest path finding in unweighted graphs, it can be adapted for cycle detection too, but less efficiently than DFS for most directed graph cycle detection problems.

**Example: DFS Cycle Detection**

Consider the digraph with edges (A, B), (B, C), (C, A), (A, D).

1. Start DFS at A. Mark A as visited and on the recursion stack.
2. Visit B (neighbor of A). Mark B as visited and on the recursion stack.
3. Visit C (neighbor of B). Mark C as visited and on the recursion stack.
4. Visit A (neighbor of C).  A is already on the recursion stack.  Therefore, we have found a cycle (A -> B -> C -> A).

**Important Points to Remember:**

*   The order of vertices in a directed edge matters.
*   A digraph can have multiple paths between two vertices.
*   Strongly connected implies weakly connected, but not vice versa.
*   DAGs have no cycles.
*   DFS is a powerful algorithm for exploring directed graphs and detecting cycles.
*  Adjacency lists are preferred for sparse graphs, while adjacency matrices are more suitable for dense graphs.

**Practice Questions/Exercises:**

1.  **Draw the directed graph represented by the following adjacency matrix:**

    ```
      A B C D
    A 0 1 0 0
    B 0 0 1 1
    C 1 0 0 0
    D 0 0 0 0
    ```

2.  **Represent the following directed graph using an adjacency list:**

    *   Vertices: {1, 2, 3, 4}
    *   Edges: {(1, 2), (1, 3), (2, 4), (3, 2)}

3.  **For the following directed graph, determine the indegree and outdegree of each vertex, and state if the graph is strongly or weakly connected:**

    *   Vertices: {A, B, C, D}
    *   Edges: {(A, B), (B, C), (C, D), (D, A)}

4.  **Determine if the following graph is a DAG. If not, identify a cycle:**

    *   Vertices: {A, B, C, D}
    *   Edges: {(A, B), (B, C), (C, A), (A, D)}

5.  **Write the pseudocode for the DFS algorithm to detect cycles in a directed graph represented by an adjacency list.**

**Answers:**

1.  Graph:
    *   A -> B
    *   B -> C, B -> D
    *   C -> A

2.  Adjacency List:
    *   1: 2, 3
    *   2: 4
    *   3: 2
    *   4: (empty)

3.  Indegree/Outdegree:
    *   A: Indegree = 1, Outdegree = 1
    *   B: Indegree = 1, Outdegree = 1
    *   C: Indegree = 1, Outdegree = 1
    *   D: Indegree = 1, Outdegree = 1
    *   Strongly Connected

4.  Not a DAG. Cycle: A -> B -> C -> A

5.  **Pseudocode for DFS Cycle Detection:**

```pseudocode
function DFS(vertex v, visited, recursionStack, adjList):
    visited[v] = TRUE
    recursionStack[v] = TRUE

    for neighbor w in adjList[v]:
        if not visited[w]:
            if DFS(w, visited, recursionStack, adjList):
                return TRUE // Cycle detected
        elif recursionStack[w]:
            return TRUE // Cycle detected (back edge)

    recursionStack[v] = FALSE // Remove v from recursion stack
    return FALSE

function hasCycle(graph):
    numVertices = graph.getNumberOfVertices()
    visited = array of booleans, initialized to FALSE
    recursionStack = array of booleans, initialized to FALSE
    adjList = graph.getAdjacencyList()

    for vertex v from 1 to numVertices:
        if not visited[v]:
            if DFS(v, visited, recursionStack, adjList):
                return TRUE

    return FALSE
