---
title: "Isolated vertex"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 1: Introduction to Graphs "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af1e"
status: "completed"
scrapedAt: "2026-05-20T16:13:21.778Z"
---
## MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4

### Module 1: Introduction to Graphs

#### Topic: Isolated Vertex

**Learning Outcomes:**

*   Define an isolated vertex in a graph.
*   Identify isolated vertices in different types of graphs.
*   Explain the impact of isolated vertices on graph properties.

**1. Definition of an Isolated Vertex**

*   **Definition:** An **isolated vertex** (also known as a **pendant vertex** if it has degree 1) in a graph is a vertex that has no edges connected to it.  This means it has a degree of 0.

*   **Degree of a Vertex:** The degree of a vertex `v`, denoted as `deg(v)`, is the number of edges incident to that vertex.

*   **In Simple Graphs:** In a simple graph (a graph without self-loops or multiple edges between vertices), an isolated vertex has no neighbors.

**2. Identifying Isolated Vertices**

*   **Visual Inspection:**  The easiest way to identify isolated vertices is by visually inspecting the graph diagram. Look for vertices that are not connected to any edges.

*   **Adjacency Matrix:** If the graph is represented using an adjacency matrix `A`, the `i`-th vertex is isolated if the `i`-th row and the `i`-th column of the matrix contain only zeros (except for the diagonal element in some cases if self loops are allowed, which would also need to be zero for a simple graph).

*   **Adjacency List:** If the graph is represented using an adjacency list, the `i`-th vertex is isolated if the adjacency list for that vertex is empty.

**3. Examples of Isolated Vertices**

*   **Example 1: Simple Graph**

    Consider a graph `G = (V, E)` where:
    *   `V = {A, B, C, D, E}` (set of vertices)
    *   `E = {(A, B), (B, C), (C, A)}` (set of edges)

    In this graph, vertices `D` and `E` are isolated vertices because they are not part of any edge.  `deg(D) = 0` and `deg(E) = 0`.

    ```
    Graph Visualization (ASCII Art):

    A --- B --- C
    |     |     |
    +-----+-----+

    D   E
    ```

*   **Example 2: Graph with Multiple Components**

    A graph can consist of multiple disconnected "components".  An isolated vertex constitutes a component by itself.

    ```
    Graph Visualization (ASCII Art):

    A --- B --- C   F
                |   |
                +---+
                D --- E   G
    ```

    In this graph, vertex `G` is an isolated vertex.  The graph has three connected components: `A-B-C-D-E`, `F` and `G`.  `G` is its own component.

*   **Example 3: Adjacency Matrix**

    Consider the graph from Example 1. An example adjacency matrix representation is as follows:

    ```
        A  B  C  D  E
    A  0  1  1  0  0
    B  1  0  1  0  0
    C  1  1  0  0  0
    D  0  0  0  0  0
    E  0  0  0  0  0
    ```

    Rows/columns `D` and `E` contain only zeros, indicating that vertices `D` and `E` are isolated.

*   **Example 4: Adjacency List**

    Consider the same graph as above. The adjacency list representation will be:

    ```
    A: [B, C]
    B: [A, C]
    C: [A, B]
    D: []
    E: []
    ```

    Vertices `D` and `E` have empty lists, which confirms they are isolated.

**4. Impact of Isolated Vertices on Graph Properties**

*   **Connected Components:**  Isolated vertices increase the number of connected components in a graph. A graph with `k` isolated vertices has at least `k` connected components.

*   **Connectivity:**  The presence of isolated vertices implies that the graph is not connected (unless the graph *only* consists of a single isolated vertex). A connected graph must have a path between any two vertices.

*   **Diameter:** The diameter of a graph is the longest shortest path between any two vertices.  If a graph contains isolated vertices, then the diameter is undefined (or sometimes considered to be infinite) as there's no path between an isolated vertex and any other vertex.

*   **Completeness:** A complete graph is a graph where every vertex is connected to every other vertex. Therefore, a graph with isolated vertices cannot be a complete graph (unless the complete graph consists only of one vertex).

*   **Representational Efficiency:**  Isolated vertices can affect the efficiency of certain graph algorithms.  For instance, graph traversal algorithms (like Breadth-First Search or Depth-First Search) will not visit isolated vertices unless explicitly started from one of those vertices.

**5. Practice Questions/Exercises**

1.  **Question:**  Draw a graph with 6 vertices (A, B, C, D, E, F) and 3 edges ((A, B), (B, C), (A, C)). Identify any isolated vertices.

    **Answer:** Vertices D, E, and F are isolated.

    ```
    Graph Visualization (ASCII Art):

    A --- B --- C

    D   E   F
    ```

2.  **Question:**  Given the adjacency matrix below, identify any isolated vertices.

    ```
       A  B  C  D
    A  0  1  0  0
    B  1  0  1  0
    C  0  1  0  0
    D  0  0  0  0
    ```

    **Answer:** Vertex D is isolated.

3.  **Question:**  Describe the effect of adding an isolated vertex to a connected graph with respect to its number of connected components.

    **Answer:** Adding an isolated vertex to a connected graph increases the number of connected components by 1.

4.  **Question:** Consider a social network graph where each person is a vertex and an edge connects two people who are friends.  What would an isolated vertex represent in this context?

    **Answer:**  An isolated vertex would represent someone who has no friends in the social network represented by the graph.

5. **Question:** Is it possible for a complete graph to have an isolated vertex, assuming the graph has more than one vertex? Justify your answer.

    **Answer:** No. By definition, a complete graph has an edge between every pair of distinct vertices. If a vertex exists, it must be connected to all other vertices. Therefore, if the graph has more than one vertex, no vertex can be isolated.

**6. Important Points to Remember**

*   An isolated vertex has a degree of 0.
*   Isolated vertices increase the number of connected components in a graph.
*   The presence of isolated vertices implies the graph is not connected (unless it's a single isolated vertex).
*   Be able to identify isolated vertices from graph diagrams, adjacency matrices, and adjacency lists.
*   Understand the impact of isolated vertices on graph properties like diameter and completeness.
