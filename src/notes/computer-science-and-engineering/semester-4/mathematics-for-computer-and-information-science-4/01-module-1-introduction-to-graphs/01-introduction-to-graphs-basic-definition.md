---
title: "Introduction to Graphs - Basic definition"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 1: Introduction to Graphs "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af1a"
status: "completed"
scrapedAt: "2026-05-20T16:13:18.991Z"
---
## MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4: Module 1 - Introduction to Graphs

### Topic: Introduction to Graphs - Basic Definition

**Description:** This topic introduces the fundamental concepts of graph theory, providing the basic definitions necessary to understand more complex graph structures and algorithms.

**Learning Outcomes:**

*   Define a graph and its components (vertices and edges).
*   Distinguish between directed and undirected graphs.
*   Understand different types of edges (e.g., self-loops, parallel edges).
*   Define and understand basic graph terminology (e.g., adjacent vertices, degree of a vertex).
*   Represent graphs using adjacency matrices and adjacency lists.

---

**1. Basic Definitions and Components**

*   **Definition of a Graph:** A graph *G* is a mathematical structure used to represent relationships between objects.  Formally, a graph *G* is an ordered pair *G = (V, E)*, where:
    *   *V* is a set of vertices (also called nodes).
    *   *E* is a set of edges connecting pairs of vertices.

*   **Vertices (Nodes):**  Vertices represent the objects being connected.  They are usually denoted by symbols like *v1, v2, v3...* or *a, b, c...*.

*   **Edges:** Edges represent the relationships between the vertices. An edge is defined as a pair of vertices. If the graph is undirected, the order of the pair doesn't matter (i.e., *(u, v)* is the same as *(v, u)*).  If the graph is directed, the order *does* matter (i.e., *(u, v)* represents an edge from *u* to *v*, which is different from an edge from *v* to *u*).

    *   An edge *e = (u, v)* indicates that there is a connection from vertex *u* to vertex *v*. *u* and *v* are called the **endpoints** of the edge *e*.

**Example:**

Consider a graph *G = (V, E)*, where *V = {A, B, C, D}* and *E = {(A, B), (B, C), (C, D), (D, A)}*.  This represents a graph with four vertices (A, B, C, and D) and four edges connecting them in a cycle.

**2. Directed vs. Undirected Graphs**

*   **Undirected Graph:** In an undirected graph, the edges have no direction.  An edge *(u, v)* indicates a connection between *u* and *v* in both directions.  The order of the vertices in the pair defining the edge does not matter.

    *   **Example:** A social network where friends are connected.  If A is friends with B, then B is also friends with A.

*   **Directed Graph (Digraph):** In a directed graph, the edges have a direction. An edge *(u, v)* indicates a connection from *u* to *v* only.  The order of the vertices in the pair defining the edge *does* matter.

    *   **Example:** A website link structure.  If webpage A links to webpage B, it doesn't necessarily mean that webpage B links back to webpage A.  This is represented by a directed edge from A to B.

**3. Types of Edges**

*   **Self-Loop (Loop):** An edge that connects a vertex to itself, i.e., *(u, u)*.

*   **Parallel Edges (Multiple Edges):**  Two or more edges that connect the same two vertices.  These are usually disallowed in simple graphs, but allowed in multigraphs.

*   **Simple Graph:**  A graph with no self-loops or parallel edges.

*   **Multigraph:** A graph that allows parallel edges.

*   **Pseudograph:** A graph that allows both self-loops and parallel edges.

**Example:**

*   A graph with vertices {A, B} and edges {(A, A), (A, B), (A, B)} has a self-loop (A, A) and parallel edges (A, B). This is a pseudograph.  If we removed the (A,A) it would be a multigraph.  If we only had one edge (A,B) it would be a simple graph.

**4. Basic Graph Terminology**

*   **Adjacent Vertices:** Two vertices *u* and *v* are said to be adjacent if there is an edge *(u, v)* in the graph.

*   **Incident Edge:** An edge *e = (u, v)* is said to be incident on the vertices *u* and *v*.

*   **Degree of a Vertex (deg(v)):** The number of edges incident on the vertex *v*.  In a directed graph, we distinguish between:
    *   **In-degree (deg<sup>-</sup>(v)):** The number of edges pointing *into* the vertex *v*.
    *   **Out-degree (deg<sup>+</sup>(v)):** The number of edges pointing *out of* the vertex *v*.
    *  In a directed graph, the degree of a vertex `v` is equal to the sum of its in-degree and out-degree: `deg(v) = deg-(v) + deg+(v)`

*   **Path:** A sequence of vertices *v1, v2, ..., vn* such that there is an edge *(vi, vi+1)* for all *i = 1, 2, ..., n-1*.

*   **Cycle:** A path that starts and ends at the same vertex.

*   **Complete Graph (Kn):** A simple graph in which every pair of distinct vertices is connected by a unique edge.  A complete graph with *n* vertices is denoted by *Kn*.

*   **Sparse Graph:** A graph with relatively few edges compared to the maximum possible number of edges.  For a graph with *n* vertices, the maximum number of edges is *n(n-1)/2* for an undirected graph and *n(n-1)* for a directed graph.

*   **Dense Graph:** A graph with close to the maximum possible number of edges.

*   **Connected Graph:** An undirected graph is connected if there is a path between every pair of vertices.

*   **Strongly Connected Graph:** A directed graph is strongly connected if there is a directed path between every pair of vertices.

*   **Weakly Connected Graph:** A directed graph is weakly connected if replacing all of its directed edges with undirected edges produces a connected (undirected) graph.

**Example:**

Consider the graph *G = (V, E)*, where *V = {A, B, C, D, E}* and *E = {(A, B), (B, C), (C, D), (D, E), (E, A)}*

*   A and B are adjacent vertices.
*   The edge (A, B) is incident on vertices A and B.
*   deg(A) = 2 (edges (A,B) and (E,A)).
*   The sequence A, B, C, D, E, A is a cycle.

**5. Graph Representations**

*   **Adjacency Matrix:** An *n x n* matrix (where *n* is the number of vertices) where the entry in row *i*, column *j* (denoted *A[i][j]*) is:

    *   1 (or True) if there is an edge from vertex *i* to vertex *j*.
    *   0 (or False) if there is no edge from vertex *i* to vertex *j*.

    *   For undirected graphs, the adjacency matrix is symmetric.
    *   For directed graphs, the adjacency matrix is not necessarily symmetric.

    **Example:**

    For the graph with *V = {A, B, C}* and *E = {(A, B), (B, C)}*, the adjacency matrix is:

    ```
       A  B  C
    A  0  1  0
    B  0  0  1
    C  0  0  0
    ```

*   **Adjacency List:** A list that stores, for each vertex, the list of its adjacent vertices.

    **Example:**

    For the graph with *V = {A, B, C}* and *E = {(A, B), (B, C)}*, the adjacency list is:

    ```
    A: [B]
    B: [C]
    C: []
    ```

    **Example:**

    For the undirected graph with *V = {A, B, C}* and *E = {(A, B), (B, C)}*, the adjacency list is:

    ```
    A: [B]
    B: [A, C]
    C: [B]
    ```

**Choosing a Representation:**

*   **Adjacency Matrix:**
    *   Pros: Fast to check if an edge exists between two vertices (O(1)).
    *   Cons: Requires O(V<sup>2</sup>) space, even if the graph is sparse.  Inefficient for iterating through all neighbors of a vertex in sparse graphs.

*   **Adjacency List:**
    *   Pros: More space-efficient for sparse graphs (O(V + E)).  Efficient for iterating through all neighbors of a vertex.
    *   Cons: Slower to check if an edge exists between two vertices (O(deg(v)) in the worst case, where deg(v) is the degree of vertex v).

**Important Points to Remember:**

*   A graph is defined by its vertices and edges.
*   The direction of edges is important in directed graphs but not in undirected graphs.
*   Adjacency matrices and adjacency lists are two common ways to represent graphs, each with its own trade-offs.  The best choice depends on the specific application and the graph's density.
*   Understanding basic graph terminology is crucial for analyzing and working with graphs.

**Practice Questions/Exercises:**

1.  **Define a graph with vertices V = {1, 2, 3, 4} and edges E = {(1, 2), (2, 3), (3, 4), (4, 1), (1, 3)}.**
    *   **a) Is this graph directed or undirected?**  Undirected.
    *   **b) Draw the graph.** (You would draw a diagram here showing the vertices and edges)
    *   **c) What is the degree of vertex 1?** 3 (edges to 2, 3, and 4)
    *   **d) Represent the graph using an adjacency matrix.**
        ```
           1  2  3  4
        1  0  1  1  1
        2  1  0  1  0
        3  1  1  0  1
        4  1  0  1  0
        ```
    *   **e) Represent the graph using an adjacency list.**
        ```
        1: [2, 3, 4]
        2: [1, 3]
        3: [1, 2, 4]
        4: [1, 3]
        ```

2.  **Consider a directed graph with vertices V = {A, B, C, D} and edges E = {(A, B), (B, C), (C, D), (D, A)}.**
    *   **a) What is the in-degree of vertex C?** 1 (edge (B,C))
    *   **b) What is the out-degree of vertex C?** 1 (edge (C,D))
    *   **c) Is this graph strongly connected?** Yes.

3.  **Explain the difference between a simple graph, a multigraph, and a pseudograph.**
    *   Simple Graph: No self-loops or parallel edges.
    *   Multigraph: Allows parallel edges, but no self-loops.
    *   Pseudograph: Allows both self-loops and parallel edges.

4.  **When would you prefer an adjacency list representation over an adjacency matrix representation?**
    *   When the graph is sparse (has relatively few edges compared to the number of vertices) because it requires less memory. Also, when you need to frequently iterate through the neighbors of a given vertex.

5. **True or False:** An undirected graph is connected if there is a path between every pair of vertices.
    * True

---
These comprehensive notes provide a solid foundation in the basic definitions of graph theory, covering the learning outcomes and providing examples and practice exercises. They highlight key concepts and differences, preparing students for more advanced topics in graph theory.
