---
title: "Types of directed graphs"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 2: Euler graphs"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af2f"
status: "completed"
scrapedAt: "2026-05-20T16:13:32.977Z"
---
## MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 2: Euler Graphs
## Topic: Types of Directed Graphs

**Learning Outcomes:**

*   Understand the definition and properties of directed graphs.
*   Identify and differentiate between different types of directed graphs (simple, complete, weakly connected, strongly connected, unilaterally connected, acyclic).
*   Determine connectivity properties of directed graphs.
*   Apply knowledge of directed graph types to solve problems.

**1. Introduction to Directed Graphs (Digraphs)**

*   **Definition:** A directed graph (or digraph)  G = (V, E) consists of a finite set V of vertices (or nodes) and a finite set E of directed edges (or arcs).  Each directed edge is an ordered pair (u, v), where u and v are vertices in V. The edge (u, v) represents an edge from vertex u to vertex v.  u is the *tail* and v is the *head* of the edge.
*   **Notation:**
    *   V(G) = Set of vertices
    *   E(G) = Set of edges
    *   (u, v) ∈ E(G) indicates an edge from vertex u to vertex v.  This is *different* than (v, u), which represents an edge from vertex v to vertex u.
*   **Key Concepts:**
    *   **Adjacent Vertices:** In a directed graph, vertex v is adjacent *to* vertex u if there exists an edge (u, v). Vertex u is adjacent *from* vertex v if there exists an edge (v, u).
    *   **Degree:**
        *   **In-degree (deg⁻(v))**: The number of edges *entering* vertex v.
        *   **Out-degree (deg⁺(v))**: The number of edges *leaving* vertex v.
        *   The sum of in-degrees equals the sum of out-degrees and is equal to the number of edges in the digraph.  Σ deg⁻(v) = Σ deg⁺(v) = |E|
    *   **Path:** A sequence of vertices v₁, v₂, ..., vₖ such that (vᵢ, vᵢ₊₁) ∈ E for all i = 1, 2, ..., k-1. The path is from v₁ to vₖ.
    *   **Cycle:** A path that starts and ends at the same vertex.  A cycle is a path v₁, v₂, ..., vₖ, v₁ where (vᵢ, vᵢ₊₁) ∈ E for all i = 1, 2, ..., k-1 and (vₖ, v₁) ∈ E.

**2. Types of Directed Graphs**

*   **2.1 Simple Directed Graph:**
    *   **Definition:**  A directed graph with no parallel edges and no self-loops.
    *   **Parallel Edges:** Two or more edges with the same tail and head vertices.  For example, if both (u, v) and (u, v) exist in the edge set, they are parallel edges.
    *   **Self-loop:** An edge that connects a vertex to itself (e.g., (v, v)).

*   **2.2 Complete Directed Graph:**
    *   **Definition:**  A directed graph in which there is a directed edge between every pair of distinct vertices. For every pair of vertices u and v (where u ≠ v), both (u, v) and (v, u) must be present in the edge set.
    *   **Note:** A complete directed graph with n vertices has n(n-1) edges.

*   **2.3 Weakly Connected Directed Graph:**
    *   **Definition:**  A directed graph is weakly connected if replacing all of its directed edges with undirected edges produces a connected (undirected) graph.  In other words, if you ignore the direction of the edges, you get a connected graph.
    *   **How to check:**  Convert the digraph to an undirected graph by removing the direction of the edges. Then check if there's a path between every pair of vertices.

*   **2.4 Strongly Connected Directed Graph:**
    *   **Definition:** A directed graph is strongly connected if there is a directed path from any vertex to any other vertex. For any two vertices u and v, there exists a path from u to v and a path from v to u.
    *   **How to check:**  For every pair of vertices u and v, check if there is a path from u to v AND a path from v to u.

*   **2.5 Unilaterally Connected Directed Graph:**
    *   **Definition:** A directed graph is unilaterally connected if, for any two vertices u and v, there is a directed path from u to v OR a directed path from v to u (or both).
    *   **Relation to Strong Connectivity:** A strongly connected graph is always unilaterally connected, but the converse is not necessarily true.

*   **2.6 Acyclic Directed Graph (DAG):**
    *   **Definition:** A directed graph that contains no directed cycles.
    *   **Importance:** DAGs are used extensively in computer science for representing dependencies, scheduling tasks, and representing hierarchical data structures.
    *   **Example:**  A topological sort can be performed on a DAG.

**3. Connectivity Properties Summary**

| Property                 | Definition                                                                | Requirement for all vertex pairs (u, v) |
| ------------------------ | ------------------------------------------------------------------------- | --------------------------------------- |
| Weakly Connected        | Connected when directions are ignored.                                     | Undirected path between u and v       |
| Unilaterally Connected   | Path from u to v OR path from v to u.                                   | Directed path from u to v OR from v to u |
| Strongly Connected      | Path from u to v AND path from v to u.                                  | Directed path from u to v AND from v to u |
| Acyclic (DAG)          | Contains no cycles                                                       | No path from any vertex to itself        |

**4. Examples**

*   **Example 1: Simple Directed Graph**

    ```
    V = {A, B, C}
    E = {(A, B), (B, C)}
    ```

    This is a simple directed graph because there are no parallel edges or self-loops.

*   **Example 2: Complete Directed Graph with 3 vertices**

    ```
    V = {A, B, C}
    E = {(A, B), (B, A), (A, C), (C, A), (B, C), (C, B)}
    ```

    For every pair of distinct vertices, there is a directed edge in both directions.

*   **Example 3: Weakly Connected, but not Strongly Connected**

    ```
    V = {A, B, C}
    E = {(A, B), (B, C)}
    ```

    There is a path from A to C (A -> B -> C).  However, there is no path from C to A. Therefore, it is not strongly connected. If you ignore the direction of the edges, it's connected, so it is weakly connected.

*   **Example 4: Strongly Connected**

    ```
    V = {A, B, C}
    E = {(A, B), (B, C), (C, A)}
    ```

    You can get from any vertex to any other vertex. For example, from A to C: A -> B -> C. From C to A: C -> A.

*   **Example 5: Unilaterally Connected, but not Strongly Connected**

    ```
    V = {A, B, C}
    E = {(A, B), (B, C), (C, B)}
    ```

    Path from A to B. Path from B to C. Path from A to C (A->B->C). Also, path from C to B (C->B). But no path from B to A. But the *definition* allows either a path from u to v *or* v to u. It's unilaterally connected.

*   **Example 6: Acyclic Directed Graph (DAG)**

    ```
    V = {A, B, C, D}
    E = {(A, B), (A, C), (B, D), (C, D)}
    ```

    There are no cycles in this directed graph.

**5. Practice Questions/Exercises**

1.  **Question:** Consider the directed graph with vertices V = {1, 2, 3, 4} and edges E = {(1, 2), (2, 3), (3, 4), (4, 1)}.
    *   Is it a simple graph?
    *   Is it strongly connected?
    *   Is it unilaterally connected?
    *   Is it acyclic?

    **Answer:**
    *   Yes, it is a simple graph (no parallel edges or self-loops).
    *   Yes, it is strongly connected (there's a path between any two vertices).
    *   Yes, it is unilaterally connected (because it's strongly connected).
    *   No, it is not acyclic (it contains the cycle 1 -> 2 -> 3 -> 4 -> 1).

2.  **Question:**  Draw a directed graph with 5 vertices that is weakly connected but not strongly connected.

    **Answer:**  (One possible solution)
    ```
    V = {A, B, C, D, E}
    E = {(A, B), (B, C), (C, D), (D, E)}
    ```
    There's a path from A to E, but no path from E to A.

3.  **Question:** Draw a complete directed graph with 4 vertices.  How many edges are in your graph?

    **Answer:**
    ```
    V = {A, B, C, D}
    E = {(A, B), (B, A), (A, C), (C, A), (A, D), (D, A), (B, C), (C, B), (B, D), (D, B), (C, D), (D, C)}
    ```
    There are 12 edges.  In general, a complete digraph with n vertices has n(n-1) edges. Here, 4(4-1) = 12.

4. **Question:** Determine if the following graph is acyclic: V = {A, B, C}, E = {(A, B), (B, C), (A, C)}

   **Answer:** Yes, it is acyclic. There are no cycles.

**6. Important Points to Remember**

*   Directed edges are ordered pairs: (u, v) is different from (v, u).
*   Understand the difference between in-degree and out-degree.
*   Strongly connected implies unilaterally connected, which implies weakly connected. The reverse implications are not necessarily true.
*   Acyclic directed graphs (DAGs) are essential in many computer science applications.
*   Connectivity properties are crucial for analyzing and designing networks and algorithms.
