---
title: "Chromatic number"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 4: Matrix representation of graphs"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af40"
status: "completed"
scrapedAt: "2026-05-20T16:13:43.196Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 4: Matrix Representation of Graphs
### Topic: Chromatic Number

**Learning Outcomes:**

*   Understand the concept of graph coloring and its applications.
*   Define the chromatic number of a graph and determine its value for simple graphs.
*   Apply algorithms to find the chromatic number or a good upper bound for it.
*   Understand the relationship between the chromatic number and other graph properties.

---

**1. Introduction to Graph Coloring**

*   **Definition:** Graph coloring is the assignment of labels, traditionally called "colors," to the vertices of a graph subject to certain constraints.  The most common constraint is that no two adjacent vertices share the same color. This is called **vertex coloring**.

*   **Applications:**
    *   **Map coloring:** Assigning colors to countries on a map such that no two adjacent countries have the same color.
    *   **Scheduling:** Assigning time slots to events such that no two conflicting events occur at the same time (e.g., exam scheduling, resource allocation).
    *   **Register allocation:** Assigning registers to variables in a compiler to avoid conflicts.
    *   **Frequency assignment in wireless networks:** Assigning frequencies to transmitters to avoid interference.
    *   **Sudoku:** Although less direct, Sudoku can be modeled as a graph coloring problem.

*   **k-Coloring:** A *k-coloring* of a graph is a coloring using at most *k* colors. A graph is *k-colorable* if it has a *k-coloring*.

*   **Proper Coloring:** A coloring is *proper* if no two adjacent vertices have the same color. This is usually the type of coloring we're referring to when discussing graph coloring.

**2. Chromatic Number**

*   **Definition:** The *chromatic number* of a graph *G*, denoted by χ(G), is the *smallest* number of colors needed to properly color the vertices of *G*. In other words, it is the minimum *k* such that *G* is *k*-colorable.

*   **Determining the Chromatic Number:**
    *   Finding the chromatic number can be computationally challenging (NP-hard).  There is no general efficient algorithm for all graphs.
    *   For small graphs, we can often determine the chromatic number by trial and error and by applying some rules/properties.
    *   We can prove χ(G) = k by showing that:
        *   *G* is *k*-colorable (finding a *k*-coloring).
        *   *G* is *not* (*k*-1)-colorable (showing that any coloring with *k*-1 colors will result in at least two adjacent vertices with the same color).

**3. Examples of Chromatic Numbers for Simple Graphs**

*   **Complete Graph (K<sub>n</sub>):**  A complete graph *K<sub>n</sub>* has an edge between every pair of vertices. χ(K<sub>n</sub>) = *n*.  Each vertex must have a different color because every vertex is adjacent to every other vertex.

    *   Example: K<sub>3</sub> (triangle) requires 3 colors. χ(K<sub>3</sub>) = 3.

*   **Empty Graph (No Edges):** χ(G) = 1.  All vertices can be the same color.

*   **Bipartite Graph:**  A bipartite graph is a graph whose vertices can be divided into two disjoint sets *U* and *V* such that every edge connects a vertex in *U* to a vertex in *V*. A bipartite graph is 2-colorable (unless it contains an edge from a node to itself), therefore χ(G) <= 2. If the bipartite graph contains at least one edge, then χ(G) = 2.

    *   Example: Consider a graph with vertices {A, B, C, D} and edges {(A, C), (A, D), (B, C), (B, D)}.  We can color A and B with one color and C and D with another color. Thus, it is bipartite and its chromatic number is 2.

*   **Cycle Graph (C<sub>n</sub>):** A cycle graph *C<sub>n</sub>* is a graph with *n* vertices connected in a cycle.

    *   If *n* is even: χ(C<sub>n</sub>) = 2 (it's bipartite).
    *   If *n* is odd: χ(C<sub>n</sub>) = 3.

*   **Tree:**  A tree is a connected graph with no cycles.  Any tree with at least one edge is 2-colorable (and therefore bipartite). Thus, if the tree has at least one edge χ(G) = 2. If the tree has no edges then χ(G) = 1.

**4. Algorithms for Finding the Chromatic Number (or Upper Bounds)**

*   **Greedy Coloring Algorithm:**

    1.  Order the vertices of the graph arbitrarily (v<sub>1</sub>, v<sub>2</sub>, ..., v<sub>n</sub>).
    2.  Assign the first color (color 1) to vertex v<sub>1</sub>.
    3.  For each subsequent vertex v<sub>i</sub> (i = 2 to n):
        *   Iterate through the colors (starting from color 1) until you find a color that is not used by any neighbor of v<sub>i</sub>.
        *   Assign that color to v<sub>i</sub>.

    *   **Note:**  The greedy coloring algorithm does *not* always find the optimal (smallest) coloring. It provides an *upper bound* on the chromatic number. The number of colors used by the greedy algorithm is at most Δ(G) + 1, where Δ(G) is the maximum degree of a vertex in *G* (Welsh-Powell Theorem).
    *   The performance of the Greedy Algorithm depends strongly on the order in which the vertices are considered.

*   **Welsh-Powell Algorithm:** An improvement on the Greedy Algorithm where vertices are colored in descending order of their degrees.

    1.  Order the vertices by degree, from highest to lowest.
    2.  Apply the Greedy Coloring Algorithm using this ordered list of vertices.

*   **Backtracking Algorithm (for exact chromatic number, but computationally expensive):**

    1.  Explore all possible color assignments systematically.
    2.  For each vertex, try assigning each color from 1 to *k*.
    3.  If a color assignment leads to a valid coloring (no adjacent vertices have the same color), then you have a *k*-coloring.
    4.  If you exhaust all possibilities without finding a valid *k*-coloring, then the graph is *not k*-colorable.
    5.  Start with *k* = 1 and increment *k* until you find the smallest *k* for which a *k*-coloring exists. This is the chromatic number.

    *   **Note:** The backtracking algorithm is generally only feasible for very small graphs due to its exponential time complexity.

**5. Relationship Between Chromatic Number and Other Graph Properties**

*   **Maximum Degree (Δ(G)):**  χ(G) ≤ Δ(G) + 1  (as shown by the Greedy Coloring Algorithm).

*   **Clique Number (ω(G)):** The clique number ω(G) is the size of the largest clique (complete subgraph) in *G*.  Since all vertices in a clique must have different colors, χ(G) ≥ ω(G).

*   **Independence Number (α(G)):**  The independence number α(G) is the size of the largest independent set in *G* (a set of vertices with no edges between them).

*   **Planar Graphs:** A graph is planar if it can be drawn in the plane without any edges crossing. The Four Color Theorem states that any planar graph can be colored with at most four colors, meaning χ(G) ≤ 4 for any planar graph G.

*   **Perfect Graphs:** A graph G is perfect if for every induced subgraph H of G, χ(H) = ω(H). Many well-known families of graphs are perfect (e.g. bipartite graphs, chordal graphs).

**6. Practice Questions/Exercises**

1.  **What is the chromatic number of a complete graph K<sub>5</sub>?**
    *   **Answer:** 5 (Since every vertex is adjacent to every other vertex, each vertex must have a different color.)

2.  **What is the chromatic number of a tree with 10 vertices and 9 edges?**
    *   **Answer:** 2 (Any tree with at least one edge is bipartite, and thus 2-colorable.)

3.  **Use the Greedy Coloring Algorithm (with an arbitrary vertex ordering A, B, C, D, E) to color the following graph and determine an upper bound for the chromatic number. Graph:  Edges: (A,B), (A,C), (B,C), (B,D), (C,E).**
    *   **Answer:**
        *   A: Color 1
        *   B: Color 2 (adjacent to A, so can't be Color 1)
        *   C: Color 3 (adjacent to A and B, so can't be Color 1 or 2)
        *   D: Color 1 (adjacent to B, so can't be Color 2)
        *   E: Color 1 (adjacent to C, so can't be Color 3)
        *   The greedy coloring uses 3 colors. Therefore, χ(G) ≤ 3. (In this case χ(G) is actually 3)

4.  **A graph G has 10 vertices.  The largest clique in G has 4 vertices.  What is a lower bound on the chromatic number of G?**
    *   **Answer:** 4. Since the largest clique has 4 vertices, and each vertex in a clique must be a different color, the chromatic number must be at least 4.  χ(G) ≥ ω(G) = 4.

5.  **Explain why a bipartite graph with at least one edge has a chromatic number of 2.**
    *   **Answer:** By definition, a bipartite graph can be divided into two disjoint sets *U* and *V* such that every edge connects a vertex in *U* to a vertex in *V*. Therefore, we can assign one color to all vertices in *U* and another color to all vertices in *V*. Since there's at least one edge, *U* and *V* must be distinct, requiring two colors.

**7. Important Points to Remember**

*   The chromatic number is the *minimum* number of colors needed for a proper coloring.
*   Finding the chromatic number is an NP-hard problem.
*   The Greedy Coloring Algorithm provides an *upper bound* on the chromatic number, not necessarily the exact value. The order of vertices significantly impacts the result.
*   Welsh-Powell Algorithm is a heuristic improvement over Greedy Coloring.
*   The chromatic number is related to other graph properties like clique number, independence number, and maximum degree.
*   Planar graphs can be colored with at most four colors.
*   For many graphs, there is no known efficient algorithm to compute chromatic number.  Approximation algorithms and heuristics are often used.
