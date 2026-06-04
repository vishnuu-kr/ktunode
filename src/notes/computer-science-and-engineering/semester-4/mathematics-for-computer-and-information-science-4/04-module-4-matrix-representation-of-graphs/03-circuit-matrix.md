---
title: "Circuit Matrix"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 4: Matrix representation of graphs"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af3d"
status: "completed"
scrapedAt: "2026-05-20T16:13:41.560Z"
---
## Module 4: Matrix Representation of Graphs - Topic: Circuit Matrix

**Subject:** MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
**Module:** 4: Matrix Representation of Graphs
**Topic:** Circuit Matrix

**Learning Outcomes:**

Upon completion of this topic, you will be able to:

*   Define a circuit in a graph.
*   Construct a circuit matrix for a given graph.
*   Determine the rank of a circuit matrix.
*   Understand the relationship between the circuit matrix and the incidence matrix of a graph.
*   Apply the circuit matrix to analyze the circuits present in a graph.

---

### 1. Introduction to Circuits in Graphs

*   **Definition of a Circuit:** A circuit (or cycle) in a graph is a closed walk (a sequence of vertices and edges where each edge connects the preceding and succeeding vertices) with no repeated vertices (except the first and last, which are the same) and no repeated edges.

*   **Example:**  Consider a graph with vertices {A, B, C, D} and edges {(A, B), (B, C), (C, D), (D, A)}. The sequence A-B-C-D-A forms a circuit.  A-B-A-C-A does *not* form a circuit since vertex A is repeated in the middle of the walk.

*   **Important Notes:**
    *   A loop (an edge connecting a vertex to itself) is a circuit.
    *   Parallel edges (multiple edges connecting the same two vertices) form a circuit.
    *   A single vertex does not constitute a circuit.
    *   A connected graph without any circuits is called a tree.

### 2. Definition of the Circuit Matrix

*   **Definition:** A circuit matrix (also called a cycle matrix) of a graph *G* is a matrix representing the circuits (cycles) in *G*. Let *G* have *n* vertices and *e* edges.  Choose a set of *c* fundamental circuits. The circuit matrix, *B*, is a *c x e* matrix where:

    *   *b<sub>ij</sub>* = 1, if edge *e<sub>j</sub>* is part of circuit *c<sub>i</sub>*.
    *   *b<sub>ij</sub>* = 0, if edge *e<sub>j</sub>* is not part of circuit *c<sub>i</sub>*.

*   **Key Points:**
    *   The rows of the circuit matrix represent the circuits.
    *   The columns of the circuit matrix represent the edges.
    *   The choice of circuits significantly affects the resulting circuit matrix.  Often, a set of *fundamental circuits* (formed relative to a spanning tree) are used to ensure linear independence.

### 3. Constructing a Circuit Matrix - Step-by-Step

1.  **Identify all circuits in the graph.**  Start by listing all possible simple circuits.

2.  **Number the edges of the graph:** Assign a unique number to each edge in the graph. This is crucial for correctly identifying the edges in the matrix.

3.  **Create the matrix:** Create a matrix with rows representing the circuits and columns representing the edges.

4.  **Populate the matrix:** For each circuit, examine each edge.  If the edge is part of the circuit, enter a '1' in the corresponding cell. Otherwise, enter a '0'.

**Example:**

Consider a graph with the following edges and vertices:

*   Vertices: {A, B, C, D}
*   Edges:
    *   e1 = (A, B)
    *   e2 = (B, C)
    *   e3 = (C, D)
    *   e4 = (D, A)
    *   e5 = (B, D)

*   Circuits:
    *   c1: A-B-C-D-A  (edges e1, e2, e3, e4)
    *   c2: B-C-D-B  (edges e2, e3, e5)
    *   c3: A-B-D-A  (edges e1, e4, e5)

The circuit matrix *B* is:

```
      e1  e2  e3  e4  e5
c1   [1   1   1   1   0]
c2   [0   1   1   0   1]
c3   [1   0   0   1   1]
```

### 4. Rank of the Circuit Matrix

*   **Definition:** The rank of a matrix is the maximum number of linearly independent rows (or columns) in the matrix.

*   **Formula:** For a connected graph with *n* vertices, *e* edges, and *c* circuits, the rank of the circuit matrix *B* is:

    *   rank(B) = *e* - *n* + 1

*   **Understanding the Formula:**
    *   *e* - *n* + 1 is the number of fundamental circuits (formed relative to a spanning tree).
    *   The rank of the circuit matrix is equal to the number of fundamental circuits, provided that the circuits chosen to form the matrix are linearly independent.  This is why choosing circuits from a spanning tree is preferred.

*   **Example (Continuing from previous):**
    *   n = 4 (vertices)
    *   e = 5 (edges)
    *   rank(B) = 5 - 4 + 1 = 2

    Therefore, the rank of the circuit matrix B is 2. This means there are only two linearly independent rows (circuits) in the matrix. Notice in the previous example, c1 = c2 + c3. This means c1 is linearly dependent on c2 and c3. *Choosing fundamental circuits when constructing the matrix avoids this dependency.*

### 5. Relationship Between Circuit Matrix and Incidence Matrix

*   **Incidence Matrix:** An incidence matrix *A* of a graph *G* with *n* vertices and *e* edges is an *n x e* matrix where:
    *   *a<sub>ij</sub>* = 1, if vertex *i* is incident to edge *e<sub>j</sub>*.
    *   *a<sub>ij</sub>* = 0, if vertex *i* is not incident to edge *e<sub>j</sub>*.

*   **Orthogonality:** The rows of the circuit matrix and the rows of a reduced incidence matrix (where one row has been removed) are orthogonal over the field of integers modulo 2 (GF(2)).  This means that the dot product of any row from the circuit matrix and any row from the reduced incidence matrix, when calculated modulo 2, is zero.

*   **Implications:**  This orthogonality is a fundamental relationship that can be used in graph theory applications, such as network analysis and electrical circuit theory.

### 6. Application of Circuit Matrix in Circuit Analysis

*   **Kirchhoff's Laws:** The circuit matrix is particularly useful in electrical circuit analysis.

    *   **Kirchhoff's Voltage Law (KVL):**  The sum of the voltage drops around any closed loop (circuit) in a network is zero. This law directly relates to the circuit matrix. The rows of the circuit matrix represent the circuits, and the entries indicate which edges (circuit elements) are part of the circuit. Multiplying the circuit matrix *B* by a vector of voltages across the edges will give you a vector where each element is the sum of voltages around a circuit. For KVL to hold, that sum must be zero.

    *   **Kirchhoff's Current Law (KCL):** Can be related via the reduced incidence matrix.

*   **Network Flow Problems:** The circuit matrix can be used to analyze network flow problems and determine the flow of commodities through a network.

### 7. Practice Questions and Exercises

1.  **Consider the following graph:**

    *   Vertices: {A, B, C}
    *   Edges:
        *   e1 = (A, B)
        *   e2 = (B, C)
        *   e3 = (C, A)

    a) Draw the graph.
    b) Identify the circuits in the graph.
    c) Construct the circuit matrix.
    d) Determine the rank of the circuit matrix.

    **Answer:**

    a)  (Draw a triangle with vertices A, B, C and edges connecting them)

    b)  Only one circuit: A-B-C-A (e1, e2, e3)

    c)  Circuit Matrix:

    ```
          e1  e2  e3
        [1   1   1]
    ```

    d)  n = 3, e = 3
        Rank(B) = e - n + 1 = 3 - 3 + 1 = 1

2.  **Given a graph with the following circuit matrix:**

    ```
          e1  e2  e3  e4
        [1   1   0   0]
        [0   1   1   0]
        [0   0   1   1]
    ```

    a) How many circuits are represented in the matrix?
    b) How many edges are in the graph?

    **Answer:**

    a) 3 circuits
    b) 4 edges

3. **True or False:** The rank of the circuit matrix is always greater than or equal to zero.

    **Answer:** True. The rank of a matrix cannot be negative.  It will be zero if there are no circuits.

### 8. Important Points to Remember

*   A circuit is a closed walk with no repeated vertices (except the first and last) and no repeated edges.
*   The circuit matrix represents the circuits in a graph using 1s and 0s to indicate edge membership.
*   The rank of the circuit matrix is *e* - *n* + 1 for a connected graph.
*   The circuit matrix and reduced incidence matrix are orthogonal over GF(2).
*   Circuit matrices are used in circuit analysis and network flow problems.
*   When constructing a circuit matrix, choosing *fundamental circuits* ensures linear independence of the rows and that the rank is calculated correctly.
