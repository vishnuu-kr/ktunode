---
title: "Paths and circuits"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 1: Introduction to Graphs "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af23"
status: "completed"
scrapedAt: "2026-05-20T16:13:25.154Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 1: Introduction to Graphs
### Topic: Paths and Circuits

**Learning Outcomes:**

*   Define and differentiate between walks, paths, trails, and circuits/cycles in graphs.
*   Determine if a given graph contains a path or circuit satisfying specific criteria.
*   Understand and apply concepts related to connected graphs, connected components, and strongly connected components.
*   Identify and explain Eulerian paths and circuits, and apply Euler's Theorem.
*   Identify and explain Hamiltonian paths and circuits.
*   Apply graph traversal algorithms (e.g., Depth-First Search, Breadth-First Search) to find paths and circuits.

**1. Key Concepts and Definitions**

*   **Graph:** A graph G = (V, E) consists of a set of vertices (nodes) V and a set of edges E, where each edge connects two vertices.  Edges can be directed or undirected.

*   **Walk:** A *walk* in a graph is a sequence of vertices and edges,  v<sub>0</sub>, e<sub>1</sub>, v<sub>1</sub>, e<sub>2</sub>, v<sub>2</sub>, ..., e<sub>n</sub>, v<sub>n</sub>, where each edge e<sub>i</sub> connects vertex v<sub>i-1</sub> and v<sub>i</sub>.  A walk can repeat vertices and edges.

*   **Path:** A *path* is a walk in which *no vertex* is repeated.  A path cannot repeat edges either.

*   **Trail:** A *trail* is a walk in which *no edge* is repeated, but vertices can be repeated.

*   **Circuit (Cycle):** A *circuit* (or *cycle*) is a trail that starts and ends at the same vertex.  It is a closed trail. The first and last vertex are the same, but no other vertex is repeated.

*   **Simple Circuit (Cycle):** A *simple circuit* (or *simple cycle*) is a circuit that starts and ends at the same vertex, and no other vertex is repeated.

*   **Connected Graph:** A graph is *connected* if there is a path between every pair of distinct vertices in the graph.

*   **Connected Component:** A *connected component* of a graph is a maximal connected subgraph; that is, it's a connected subgraph that cannot be made any larger while remaining connected.

*   **Strongly Connected Graph (Directed):** A directed graph is *strongly connected* if there is a directed path from any vertex to any other vertex.

*   **Strongly Connected Component (Directed):** A *strongly connected component* of a directed graph is a maximal strongly connected subgraph.

**2. Illustrative Examples**

Consider the following graph:

```
     A --- B
     |     |
     C --- D --- E
```

*   **Walk:** A, B, D, C, A, B is a walk.
*   **Path:** A, B, D, E is a path.
*   **Trail:** A, B, D, C, A is a trail.
*   **Circuit:** A, B, D, C, A is a circuit.
*   **Simple Circuit:** A, B, D, C, A is a simple circuit.
*   **Connected Graph:**  The entire graph above is a connected graph.

Consider the following directed graph:

```
     A --> B
     ^     |
     |     v
     C <-- D
```

*   **Walk:** A, B, D, C, A, B is a walk.
*   **Path:** A, B, D, C is a path.
*   **Trail:** A, B, D, C, A is a trail.
*   **Circuit:** A, B, D, C, A is a circuit.
*   **Simple Circuit:** A, B, D, C, A is a simple circuit.
*   **Strongly Connected Graph:**  The entire directed graph above is a strongly connected graph.

Consider the following disconnected graph:

```
     A --- B      E --- F
     |     |
     C --- D
```

*   This graph has two connected components: {A, B, C, D} and {E, F}. There is no path between A and E.

**3. Eulerian Paths and Circuits**

*   **Eulerian Path:** A path that uses every edge of the graph exactly once.  It does *not* need to start and end at the same vertex.

*   **Eulerian Circuit:** A circuit that uses every edge of the graph exactly once.  It *must* start and end at the same vertex.

*   **Euler's Theorem (Undirected Graph):**
    *   An undirected graph has an Eulerian circuit if and only if all vertices have even degree (the number of edges incident to a vertex).
    *   An undirected graph has an Eulerian path (but not an Eulerian circuit) if and only if exactly two vertices have odd degree, and all other vertices have even degree.  The path must start at one of the odd degree vertices and end at the other.

*   **Euler's Theorem (Directed Graph):**
    *   A directed graph has an Eulerian circuit if and only if the in-degree (number of edges entering) of each vertex equals its out-degree (number of edges leaving).
    *   A directed graph has an Eulerian path (but not an Eulerian circuit) if and only if one vertex has out-degree one greater than in-degree, another vertex has in-degree one greater than out-degree, and all other vertices have equal in-degree and out-degree. The path must start at the vertex with greater out-degree and end at the vertex with greater in-degree.

**Example:**

*   A complete graph with an odd number of vertices has an Eulerian circuit because all vertices have even degree.

*   Consider the graph with vertices A, B, C, D, E and edges AB, BC, CD, DE, EA. Each vertex has degree 2, so there exists an Eulerian circuit. One such circuit is A, B, C, D, E, A.

*   Consider the graph with vertices A, B, C, D and edges AB, BC, CA, AD. Vertices A, B, and C have degree 2, and vertex D has degree 1. Since only vertices A, B, and C have even degree, no Eulerian path nor circuit exist.

**4. Hamiltonian Paths and Circuits**

*   **Hamiltonian Path:** A path that visits every vertex of the graph exactly once.

*   **Hamiltonian Circuit:** A circuit that visits every vertex of the graph exactly once (except for the starting/ending vertex, which is visited twice).

*   **Important Note:** There is *no efficient algorithm* to determine whether an arbitrary graph has a Hamiltonian path or circuit. The problem is NP-complete.  However, certain classes of graphs are known to have Hamiltonian paths or circuits.

**Example:**

*   A complete graph (where every vertex is connected to every other vertex) always has a Hamiltonian circuit.

*   The Petersen graph is a classic example of a graph that has a Hamiltonian path but no Hamiltonian circuit.

*   Consider the graph with vertices A, B, C, D, and edges AB, BC, CD, DA. A Hamiltonian circuit is A, B, C, D, A.

**5. Graph Traversal Algorithms**

*   **Depth-First Search (DFS):**  Starts at a root node and explores as far as possible along each branch before backtracking.  Can be used to find paths between nodes.

*   **Breadth-First Search (BFS):**  Starts at a root node and explores all the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.  Can be used to find the shortest path between nodes.

**Example (DFS):**

Consider the graph:

```
     A --- B
     |     |
     C --- D --- E
```

Starting at A, a possible DFS traversal might be A, B, D, E, C. This could be used to find a path from A to E, for instance.

**Example (BFS):**

Consider the same graph:

```
     A --- B
     |     |
     C --- D --- E
```

Starting at A, a possible BFS traversal might be A, B, C, D, E.  This would find the shortest path from A to E (A, B, D, E).

**6. Practice Questions and Exercises**

1.  **Question:** Does the complete graph K<sub>5</sub> (5 vertices, every vertex connected to every other) have an Eulerian circuit?  Why or why not?

    **Answer:** Yes.  In K<sub>5</sub>, every vertex has degree 4 (even).  Therefore, by Euler's Theorem, it has an Eulerian circuit.

2.  **Question:**  Does the complete graph K<sub>5</sub> have a Hamiltonian circuit?  Why or why not?

    **Answer:** Yes. Complete graphs always have Hamiltonian circuits.  For example, if the vertices are A, B, C, D, E, one Hamiltonian circuit is A, B, C, D, E, A.

3.  **Question:** Consider the graph with vertices A, B, C, D and edges AB, AC, AD. Does this graph have an Eulerian path? Explain.

    **Answer:** No. Vertex A has degree 3 (odd), and vertices B, C, and D have degree 1 (odd). For an Eulerian path to exist, exactly two vertices must have odd degree.

4.  **Question:** Consider the directed graph with vertices A, B, C, and edges A->B, B->C, C->A. Is it strongly connected?

    **Answer:** Yes, it is strongly connected. There is a directed path from any vertex to any other vertex (e.g., from A to B via A->B, from A to C via A->B->C, from B to A via B->C->A, etc.).

5.  **Question:** Design a graph with 6 vertices and 7 edges that is connected and has an Eulerian path, but not an Eulerian circuit. Show the path.

    **Answer:** One example is:
    Vertices: A, B, C, D, E, F
    Edges: AB, BC, CD, DE, EF, FA, AC

    *   Degrees: A(3), B(2), C(3), D(2), E(2), F(2)

    An Eulerian path is: A, B, C, A, F, E, D, C. The path visits all edges exactly once.
    Vertices A and C have odd degree (3), and all other vertices have even degree (2). Thus, this graph has an Eulerian path but not an Eulerian circuit.

6. **Exercise:** Draw the graph represented by the following adjacency matrix and determine if it has an Eulerian path or circuit.

```
   A  B  C  D
A  0  1  1  0
B  1  0  1  1
C  1  1  0  0
D  0  1  0  0
```

**Answer:** The graph has the following edges: AB, AC, BC, BD.  The degrees are A(2), B(3), C(2), D(1).  Since there are two vertices with odd degree (B and D), it has an Eulerian path (starting at B or D), but not an Eulerian circuit.

**7. Important Points to Remember**

*   Eulerian paths and circuits require careful analysis of vertex degrees.
*   Hamiltonian paths and circuits are much more difficult to determine.
*   Graph traversal algorithms are essential for exploring graphs and finding paths.
*   Understanding the definitions of walks, paths, trails, and circuits is fundamental.
*   Distinguish between connected and strongly connected graphs (for directed graphs).
*   Be aware of the limitations of existing algorithms for finding Hamiltonian paths.
