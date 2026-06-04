---
title: "Greedy colouring algorithm"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 4: Matrix representation of graphs"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af42"
status: "completed"
scrapedAt: "2026-05-20T16:13:44.612Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 4: Matrix Representation of Graphs
### Topic: Greedy Colouring Algorithm

**Learning Outcomes:**

*   Understand the concept of graph colouring.
*   Describe the Greedy Colouring Algorithm.
*   Apply the Greedy Colouring Algorithm to colour a given graph.
*   Determine the upper bound on the number of colours used by the Greedy Colouring Algorithm.
*   Analyze the limitations of the Greedy Colouring Algorithm.

---

**1. Introduction to Graph Colouring**

*   **Definition:** Graph colouring is the assignment of labels, traditionally called "colors," to the vertices of a graph such that no two adjacent vertices share the same color.

*   **Formal Definition:** A *k*-colouring of a graph G = (V, E) is a function  *c*: V → {1, 2, ..., *k*} such that *c*(u) ≠ *c*(v) for all (u, v) ∈ E.

*   **Chromatic Number (χ(G)):** The minimum number of colors needed to color a graph G is called its chromatic number, denoted by χ(G).  Finding χ(G) for a general graph is an NP-hard problem.

*   **Applications of Graph Colouring:**
    *   **Map Coloring:** Assigning colors to regions of a map so that no two adjacent regions have the same color.
    *   **Scheduling:** Assigning time slots to tasks such that conflicting tasks are not scheduled at the same time.
    *   **Resource Allocation:** Allocating resources to processes such that conflicting processes do not share the same resource.
    *   **Sudoku:** Solving Sudoku puzzles can be modeled as a graph coloring problem.

**2. Greedy Colouring Algorithm**

*   **Description:** The Greedy Colouring Algorithm is a simple and widely used algorithm for graph colouring.  It iterates through the vertices of the graph in a predetermined order and assigns each vertex the smallest available color that is not already used by its neighbors.

*   **Algorithm Steps:**

    1.  Choose an ordering of the vertices: v<sub>1</sub>, v<sub>2</sub>, ..., v<sub>n</sub>.  The result can vary dramatically based on the ordering.
    2.  Assign color 1 to vertex v<sub>1</sub>.
    3.  For i = 2 to n:
        *   Let available colors = {1, 2, 3, ...}
        *   For each neighbor 'u' of v<sub>i</sub> that has already been colored:
            *   Remove the color of 'u' from the 'available colors' set.
        *   Assign the smallest color remaining in 'available colors' to v<sub>i</sub>.

*   **Pseudocode:**

    ```
    Algorithm GreedyColoring(Graph G, Vertex Ordering V)
    Input: Graph G = (V, E), Vertex Ordering V = [v1, v2, ..., vn]
    Output: Coloring c: V -> {1, 2, ...}

    c[v1] = 1  // Color the first vertex with color 1

    for i = 2 to n do
        availableColors = {1, 2, 3, ...}  // Initialize available colors

        for each neighbor u of vi do
            if c[u] is defined then  // If neighbor u has already been colored
                Remove c[u] from availableColors

        c[vi] = min(availableColors)  // Assign the smallest available color to vi
    end for

    return c
    ```

**3. Example of Greedy Colouring Algorithm**

Let's consider the following graph:

```
    A --- B
    |     |
    D --- C
```

*   **Adjacency List Representation:**
    *   A: {B, D}
    *   B: {A, C}
    *   C: {B, D}
    *   D: {A, C}

*   **Vertex Ordering 1: A, B, C, D**

    1.  A gets color 1.  c(A) = 1
    2.  B's neighbors: A.  Available colors: {2, 3, ...}.  B gets color 2. c(B) = 2
    3.  C's neighbors: B.  Available colors: {1, 3, ...}.  C gets color 1. c(C) = 1
    4.  D's neighbors: A, C.  Available colors: {2, 3, ...}.  D gets color 2. c(D) = 2

    **Result:** Colors used: {1, 2}.  This is an optimal coloring since the graph is bipartite, χ(G) = 2.

*   **Vertex Ordering 2: A, B, D, C**

    1.  A gets color 1. c(A) = 1
    2.  B's neighbors: A. Available colors: {2, 3, ...}. B gets color 2. c(B) = 2
    3.  D's neighbors: A. Available colors: {2, 3, ...}. D gets color 2. c(D) = 2
    4.  C's neighbors: B, D. Available colors: {1, 3, ...}. C gets color 1. c(C) = 1

     **Result:** Colors used: {1, 2}.  This is an optimal coloring since the graph is bipartite, χ(G) = 2.

*   **Vertex Ordering 3: D, C, B, A**

    1. D gets color 1. c(D) = 1
    2. C's neighbors: D. Available colors: {2, 3,...}. C gets color 2. c(C) = 2
    3. B's neighbors: C. Available colors: {1, 3, ...}. B gets color 1. c(B) = 1
    4. A's neighbors: B, D. Available colors: {2, 3, ...}. A gets color 2. c(A) = 2

     **Result:** Colors used: {1, 2}.  This is an optimal coloring since the graph is bipartite, χ(G) = 2.

**4. Upper Bound on the Number of Colors Used**

*   **Theorem:** The Greedy Colouring Algorithm uses at most Δ(G) + 1 colors, where Δ(G) is the maximum degree of the graph G.

*   **Explanation:** When colouring a vertex v<sub>i</sub>, the worst-case scenario is that all its neighbours have been coloured with distinct colours. Since v<sub>i</sub> has at most Δ(G) neighbours, at most Δ(G) colours have been used by its neighbours.  Therefore, the Greedy Colouring Algorithm will find a colour from the set {1, 2, ..., Δ(G) + 1} that is not used by any of its neighbours and assign it to v<sub>i</sub>.

*   **Proof (Informal):**  Consider any vertex *v*.  It has at most Δ(G) neighbors.  When coloring *v*, at most Δ(G) colors could have already been used by its neighbors.  Therefore, there must be at least one color available in the range 1 to Δ(G)+1.

**5. Limitations of the Greedy Colouring Algorithm**

*   **Not Optimal:** The Greedy Colouring Algorithm does not always produce an optimal colouring (i.e., it does not always use the minimum number of colours). The number of colors used depends heavily on the chosen vertex ordering.

*   **Ordering Dependency:** A different ordering of the vertices can lead to a different number of colours used.  Finding the best ordering is, in itself, a difficult problem.

*   **Consider the following graph:** A complete bipartite graph K<sub>1,n</sub> where n is large. No matter what the vertex ordering is, the greedy colouring will assign colour 1 to a vertex of degree n, and will then require n more colours. The chromatic number of K<sub>1,n</sub> is 2.

**6. Important Points to Remember**

*   The Greedy Colouring Algorithm is easy to implement.
*   It runs in polynomial time.
*   It provides an upper bound on the chromatic number.
*   The performance heavily relies on the vertex ordering.
*   It is not guaranteed to find the optimal colouring.
*   The upper bound of Δ(G) + 1 can be a significant overestimate in many cases.

**7. Practice Questions/Exercises**

1.  **Apply the Greedy Colouring Algorithm to the following graph using the given vertex orderings.  Determine the number of colors used in each case.**

    ```
    A --- B
    |     |
    C --- D
    ```

    *   Ordering 1: A, B, C, D
    *   Ordering 2: A, C, B, D
    *   Ordering 3: D, B, A, C

2.  **What is the maximum degree of the graph in question 1? Based on this, what is the upper bound on the number of colours used by the Greedy Colouring Algorithm?**

3.  **Consider the following graph. What is the chromatic number (χ(G))? Is the Greedy Colouring algorithm guaranteed to find this chromatic number for any ordering of vertices? Explain why or why not.**

    ```
    A --- B --- C --- A
    ```

4.  **Describe a scenario where the Greedy Colouring Algorithm would perform particularly poorly (i.e., use significantly more colours than the chromatic number).**

---

**Answers to Practice Questions:**

1.  *   **Ordering 1 (A, B, C, D):**
        *   A: Color 1
        *   B: Color 2
        *   C: Color 2
        *   D: Color 1
        *   Colors used: 2

    *   **Ordering 2 (A, C, B, D):**
        *   A: Color 1
        *   C: Color 2
        *   B: Color 2
        *   D: Color 1
        *   Colors used: 2

    *   **Ordering 3 (D, B, A, C):**
        *   D: Color 1
        *   B: Color 2
        *   A: Color 2
        *   C: Color 1
        *   Colors used: 2

2.  *   The maximum degree of the graph is 2 (Δ(G) = 2).
    *   The upper bound on the number of colours used is Δ(G) + 1 = 2 + 1 = 3.

3.  *   The chromatic number (χ(G)) is 3. This is a cycle graph with an odd number of vertices, so you can not color it with only 2 colours.
    *   No, the Greedy Colouring Algorithm is not guaranteed to find the chromatic number. For instance, If we color in the order A,B,C we would need 3 colors. If we color in the order B,C,A we would need 3 colors. For any ordering it will need 3 colours.

4.  *   A scenario where the Greedy Colouring Algorithm performs poorly is on a graph that is almost bipartite but has a small "bridge" connecting the two otherwise independent sets. The initial vertices might be coloured in a way that forces the algorithm to use an extra colour to color the bridge. K<sub>1,n</sub> is an example as described above.
