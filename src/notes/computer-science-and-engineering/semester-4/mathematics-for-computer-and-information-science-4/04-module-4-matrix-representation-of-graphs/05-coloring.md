---
title: "Coloring"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 4: Matrix representation of graphs"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af3f"
status: "completed"
scrapedAt: "2026-05-20T16:13:42.407Z"
---
## MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 4: Matrix Representation of Graphs
## Topic: Coloring

**Introduction:**

Graph coloring is a fundamental concept in graph theory with wide-ranging applications in computer science, including scheduling, resource allocation, and data compression. This topic explores how graph coloring can be understood and analyzed using matrix representations of graphs.

**Learning Outcomes:**

By the end of this topic, you should be able to:

1.  **Define graph coloring and its different types (vertex, edge, and face coloring).**
2.  **Understand the concept of chromatic number and determine the chromatic number of a given graph.**
3.  **Apply various graph coloring algorithms, such as the greedy coloring algorithm.**
4.  **Relate graph coloring to adjacency matrices and other matrix representations.**
5.  **Apply graph coloring concepts to solve real-world problems.**

**1. Defining Graph Coloring and Its Types**

*   **Definition of Graph Coloring:** Graph coloring is the assignment of labels, called "colors," to the elements of a graph subject to certain constraints.

*   **Types of Graph Coloring:**

    *   **Vertex Coloring:**
        *   **Definition:** Assigning colors to the vertices of a graph such that no two adjacent vertices share the same color.
        *   **Goal:** Minimize the number of colors used.
        *   **Example:** Consider a graph where vertices represent meetings, and edges connect meetings that cannot occur at the same time. Vertex coloring assigns time slots (colors) to each meeting such that conflicting meetings have different time slots.

    *   **Edge Coloring:**
        *   **Definition:** Assigning colors to the edges of a graph such that no two adjacent edges (edges sharing a common vertex) share the same color.
        *   **Goal:** Minimize the number of colors used.
        *   **Example:** Consider a graph where vertices represent tasks, and edges represent the dependencies between tasks. Edge coloring assigns workers (colors) to tasks such that no worker performs two dependent tasks simultaneously.

    *   **Face Coloring (Planar Graphs Only):**
        *   **Definition:** Assigning colors to the faces (regions) of a planar graph such that no two adjacent faces (faces sharing a common edge) share the same color.
        *   **Goal:** Minimize the number of colors used.
        *   **Example:**  Map coloring where countries sharing a border cannot have the same color.  This is famously addressed by the Four Color Theorem.

**2. Chromatic Number**

*   **Definition:** The chromatic number of a graph G, denoted by χ(G), is the minimum number of colors needed to vertex color the graph.

*   **Examples:**

    *   **Complete Graph (Kn):** A complete graph with *n* vertices requires *n* colors, so χ(Kn) = *n*.
    *   **Bipartite Graph:** A bipartite graph can be colored with two colors, so χ(G) = 2 (if it contains at least one edge). If the graph contains no edges at all, χ(G) = 1.
    *   **Cycle Graph (Cn):** A cycle graph with an even number of vertices can be colored with two colors, and a cycle graph with an odd number of vertices requires three colors. Therefore:
        *   χ(Cn) = 2 if *n* is even
        *   χ(Cn) = 3 if *n* is odd

*   **Determining the Chromatic Number:**  Finding the chromatic number of an arbitrary graph is an NP-hard problem, meaning there is no known efficient (polynomial-time) algorithm to find it for large graphs.

**3. Graph Coloring Algorithms**

*   **Greedy Coloring Algorithm:**
    *   **Procedure:**
        1.  Order the vertices in some arbitrary sequence (v1, v2, ..., vn).
        2.  Assign the first available color (smallest positive integer) to the first vertex (v1).
        3.  For each subsequent vertex (vi), assign it the smallest available color that is not already used by any of its neighbors that have already been colored (v1, v2, ..., vi-1).

    *   **Example:**
        Consider a graph with vertices A, B, C, D, E, F, and the following adjacency list:
        A: B, C
        B: A, C, D
        C: A, B, E, F
        D: B
        E: C
        F: C

        Let's color the vertices in the order A, B, C, D, E, F using the greedy algorithm:

        1.  A: Color 1
        2.  B: Color 2 (because A is a neighbor of B and uses color 1)
        3.  C: Color 3 (because A and B are neighbors of C and use colors 1 and 2 respectively)
        4.  D: Color 1 (because B is a neighbor of D and uses color 2)
        5.  E: Color 1 (because C is a neighbor of E and uses color 3)
        6.  F: Color 1 (because C is a neighbor of F and uses color 3)

        The greedy algorithm used 3 colors in this example.

    *   **Note:** The greedy coloring algorithm does not necessarily produce an optimal coloring (one that uses the minimum number of colors). The order in which the vertices are processed can significantly affect the result.  The number of colors used is often close to the Chromatic Number, but can be higher.

*   **Other Coloring Algorithms:**  More advanced algorithms include:

    *   **Welsh-Powell Algorithm:** Orders vertices based on their degree before applying a greedy approach.
    *   **Backtracking Algorithms:** Exhaustively search for optimal colorings, but are computationally expensive for large graphs.

**4. Graph Coloring and Matrix Representations**

*   **Adjacency Matrix:** The adjacency matrix can be used to determine which vertices are adjacent and, therefore, cannot share the same color.

    *   **Recall:** In the adjacency matrix *A*, A[i][j] = 1 if vertex *i* is adjacent to vertex *j*, and 0 otherwise.

    *   **Using the Adjacency Matrix in Coloring:** During the coloring process, for each vertex *vi*, we can examine the *i*-th row of the adjacency matrix to identify its neighbors. This allows us to determine which colors are already used by its neighbors and choose an available color.

*   **Example:**

    Let's consider a graph with vertices A, B, C, D and edges (A,B), (B,C), (C,D), (D,A).

    The adjacency matrix is:

    ```
       A  B  C  D
    A  0  1  0  1
    B  1  0  1  0
    C  0  1  0  1
    D  1  0  1  0
    ```

    Using this adjacency matrix and the greedy algorithm (ordering vertices as A, B, C, D):

    1. A: Color 1
    2. B: Color 2 (adjacent to A)
    3. C: Color 1 (adjacent to B)
    4. D: Color 2 (adjacent to C, A)

    Chromatic Number = 2.

**5. Applications of Graph Coloring**

*   **Scheduling Problems:**
    *   **Problem:** Scheduling exams or meetings such that no student or participant has two conflicting events at the same time.
    *   **Graph Representation:** Vertices represent events (exams, meetings), and edges connect conflicting events.
    *   **Coloring:** Each color represents a time slot. A valid coloring ensures that no conflicting events are assigned the same time slot.

*   **Resource Allocation:**
    *   **Problem:** Allocating resources (e.g., registers in a compiler, channels in a wireless network) to tasks or entities without conflicts.
    *   **Graph Representation:** Vertices represent tasks or entities, and edges connect entities that require the same resource.
    *   **Coloring:** Each color represents a resource.  A valid coloring ensures that no conflicting entities use the same resource.

*   **Map Coloring:**
    *   **Problem:** Coloring regions on a map such that no two adjacent regions share the same color.
    *   **Graph Representation:** Vertices represent regions, and edges connect adjacent regions.
    *   **Coloring:** Each color represents a color on the map.

*   **Sudoku Solving:** Sudoku puzzles can be modeled as a graph coloring problem where each cell is a vertex, and edges connect cells that are in the same row, column, or 3x3 block.

**Practice Questions/Exercises**

1.  **Determine the chromatic number of a complete graph with 5 vertices (K5).**
    *   **Answer:** 5

2.  **Determine the chromatic number of a bipartite graph with at least one edge.**
    *   **Answer:** 2

3.  **Apply the greedy coloring algorithm to the following graph, with vertices ordered as A, B, C, D, E.**

    ```
    A: B, C
    B: A, C, D
    C: A, B, E
    D: B, E
    E: C, D
    ```

    *   **Answer:**
        1.  A: Color 1
        2.  B: Color 2
        3.  C: Color 3
        4.  D: Color 1
        5.  E: Color 2
        The greedy algorithm used 3 colors.

4.  **Given the following adjacency matrix, find a possible vertex coloring using the greedy algorithm, assuming vertices are labeled 1, 2, 3, and 4, and processed in that order.**

    ```
        1  2  3  4
    1  0  1  1  0
    2  1  0  1  1
    3  1  1  0  0
    4  0  1  0  0
    ```

    *   **Answer:**
        1. Vertex 1: Color 1
        2. Vertex 2: Color 2
        3. Vertex 3: Color 2
        4. Vertex 4: Color 1
        This coloring uses two colors.

5.  **Describe how graph coloring can be used to solve a simple exam scheduling problem.**
    *   **Answer:** Each exam is a vertex, an edge exists between exams that cannot be scheduled at the same time (e.g., two exams taken by the same student). The colors represent time slots. A valid coloring schedules exams so that no student has conflicting exams at the same time.

**Important Points to Remember**

*   Graph coloring aims to assign colors to graph elements while respecting constraints.
*   The chromatic number is the minimum number of colors required for a vertex coloring.
*   The greedy coloring algorithm is a simple but not always optimal coloring method.
*   The order of vertices in the greedy algorithm affects the result.
*   Adjacency matrices facilitate identifying neighbors during coloring.
*   Graph coloring has diverse real-world applications.
*   Finding the chromatic number of an arbitrary graph is an NP-hard problem.
