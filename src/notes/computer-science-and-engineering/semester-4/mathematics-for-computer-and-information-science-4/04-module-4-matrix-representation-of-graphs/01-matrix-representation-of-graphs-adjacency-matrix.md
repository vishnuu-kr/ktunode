---
title: "Matrix representation of graphs- Adjacency matrix"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 4: Matrix representation of graphs"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af3b"
status: "completed"
scrapedAt: "2026-05-20T16:13:40.013Z"
---
## Module 4: Matrix Representation of Graphs - Adjacency Matrix

**Subject:** MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
**Module:** Module 4: Matrix Representation of Graphs
**Topic:** Adjacency Matrix

**Learning Outcomes:**

*   Understand the concept of representing a graph using an adjacency matrix.
*   Construct an adjacency matrix for a given graph (directed or undirected).
*   Interpret the information encoded in an adjacency matrix.
*   Differentiate between adjacency matrices for directed and undirected graphs.
*   Apply adjacency matrix properties to analyze graph characteristics (e.g., degree of a vertex).

---

### 1. Introduction: Representing Graphs with Matrices

Graphs are fundamental structures in computer science used to model relationships between objects.  While graphs can be visualized, a more formal and computationally friendly representation is often needed.  Matrices provide a powerful tool for this, specifically the **adjacency matrix**.

*   **Key Concept:**  A **matrix representation of a graph** transforms the graph's structure (vertices and edges) into a numerical matrix, allowing for efficient storage, manipulation, and analysis using linear algebra techniques.

### 2. The Adjacency Matrix: Definition and Construction

*   **Definition:** An **adjacency matrix** is a square matrix used to represent a finite graph.  The elements of the matrix indicate whether pairs of vertices are adjacent (i.e., connected by an edge) in the graph.

*   **Construction:**

    1.  **Order:** If a graph has *n* vertices, the adjacency matrix will be an *n x n* matrix.
    2.  **Vertex Ordering:** Establish a consistent ordering of the vertices (e.g., labeling vertices v1, v2, ..., vn).  This ordering corresponds to the rows and columns of the matrix.
    3.  **Entries:**
        *   For **undirected graphs:**  The entry `A[i][j]` is 1 if there is an edge between vertex *vi* and vertex *vj*, and 0 otherwise. Since the edge goes both ways in an undirected graph, `A[i][j] = A[j][i]`.  The matrix is symmetric.
        *   For **directed graphs (digraphs):**  The entry `A[i][j]` is 1 if there is a directed edge from vertex *vi* to vertex *vj*, and 0 otherwise. `A[i][j]` and `A[j][i]` are independent. The matrix is not necessarily symmetric.
        *   **Self-loops:** If a vertex has a self-loop (an edge connecting the vertex to itself), the entry `A[i][i]` corresponding to that vertex will be 1.
        *   **Weighted Graphs:** For weighted graphs, the entry `A[i][j]` is the weight of the edge connecting *vi* and *vj* (instead of 1). If there's no edge, the entry can be 0, infinity, or a specified value (depending on the application).  We'll focus on unweighted graphs for simplicity here.

### 3. Examples

*   **Example 1: Undirected Graph**

    Consider an undirected graph with vertices {A, B, C, D} and edges:

    *   A - B
    *   A - C
    *   B - C
    *   C - D

    The adjacency matrix (using alphabetical order A, B, C, D) is:

    ```
    A   B   C   D
    A  [0   1   1   0]
    B  [1   0   1   0]
    C  [1   1   0   1]
    D  [0   0   1   0]
    ```

*   **Example 2: Directed Graph**

    Consider a directed graph with vertices {1, 2, 3} and edges:

    *   1 -> 2
    *   2 -> 3
    *   3 -> 1

    The adjacency matrix (using numerical order 1, 2, 3) is:

    ```
    1   2   3
    1  [0   1   0]
    2  [0   0   1]
    3  [1   0   0]
    ```

*   **Example 3: Graph with a Self-Loop**

    Consider an undirected graph with vertices {X, Y, Z} and edges:

    *   X - Y
    *   Y - Y (self-loop)
    *   Y - Z

    The adjacency matrix (using alphabetical order X, Y, Z) is:

    ```
    X   Y   Z
    X  [0   1   0]
    Y  [1   1   1]
    Z  [0   1   0]
    ```

### 4. Interpreting the Adjacency Matrix

*   **Row/Column Sum:**  For **undirected graphs**, the sum of elements in a row (or column, since the matrix is symmetric) represents the **degree** of the corresponding vertex (i.e., the number of edges connected to that vertex). Remember to count self-loops twice when computing degree.

*   **Row/Column Sum (Directed Graphs):**
    *   The sum of elements in a row represents the **out-degree** of the corresponding vertex (i.e., the number of edges leaving that vertex).
    *   The sum of elements in a column represents the **in-degree** of the corresponding vertex (i.e., the number of edges entering that vertex).

*   **Path Existence:** By raising the adjacency matrix to a power (using matrix multiplication), you can determine the existence of paths of a certain length between vertices. For example, if the (i,j) entry of A<sup>k</sup> is non-zero, it means there is a path of length k from vertex *vi* to vertex *vj*.

### 5. Properties and Characteristics

*   **Symmetry:** An adjacency matrix of an undirected graph is symmetric (A[i][j] = A[j][i]).  An adjacency matrix of a directed graph is generally not symmetric.

*   **Diagonal:** The diagonal elements represent self-loops. A[i][i] = 1 if there's a self-loop on vertex *vi*, and 0 otherwise.

*   **Zero Matrix:**  An adjacency matrix filled with zeros represents a graph with no edges (an empty graph).

*   **Space Complexity:** The space complexity of an adjacency matrix is O(V<sup>2</sup>), where V is the number of vertices. This can be a problem for large, sparse graphs (graphs with few edges).

### 6. Advantages and Disadvantages

*   **Advantages:**
    *   Simple to implement and understand.
    *   Efficient for checking if two vertices are adjacent (O(1) time complexity).
    *   Useful for matrix operations and algorithms based on linear algebra.

*   **Disadvantages:**
    *   High space complexity (O(V<sup>2</sup>)), making it inefficient for large, sparse graphs.
    *   Difficult to iterate over all edges (requires scanning the entire matrix).

### 7. Practice Questions/Exercises

1.  **Question:**  Draw the undirected graph represented by the following adjacency matrix:

    ```
        A   B   C
    A  [0   1   1]
    B  [1   0   0]
    C  [1   0   0]
    ```

    **Answer:** The graph has three vertices A, B, and C.  The edges are A-B and A-C.

2.  **Question:**  Write the adjacency matrix for the following directed graph:  Vertex 1 connects to 2, Vertex 2 connects to 1 and 3, and Vertex 3 has no outgoing edges.

    **Answer:**

    ```
        1   2   3
    1  [0   1   0]
    2  [1   0   1]
    3  [0   0   0]
    ```

3.  **Question:** What is the degree of vertex 'C' in the undirected graph represented by the following adjacency matrix?

    ```
    A   B   C   D
    A  [0   1   0   0]
    B  [1   0   1   1]
    C  [0   1   0   0]
    D  [0   1   0   0]
    ```

    **Answer:** Degree of C is 1 (only connected to B).

4. **Question:** Is the graph represented by the matrix in question 3 directed or undirected? Explain your reasoning.

    **Answer:** The graph is undirected. We can see this because the matrix is symmetrical. For example, the entry A[1,2] == A[2,1] == 1.

5.  **Question:**  Create an adjacency matrix for an undirected graph with vertices {P, Q, R, S} where P is connected to Q, Q is connected to R and S, and R is connected to S.

    **Answer:**
     ```
         P  Q  R  S
     P [0  1  0  0]
     Q [1  0  1  1]
     R [0  1  0  1]
     S [0  1  1  0]
     ```

### 8. Important Points to Remember

*   Adjacency matrices are a powerful way to represent graphs numerically.
*   The structure of the matrix (symmetric vs. non-symmetric) reveals whether the graph is undirected or directed.
*   The entries in the matrix indicate the presence or absence of edges between vertices.  For weighted graphs, they store edge weights.
*   Row and column sums can be used to determine vertex degrees (in-degree, out-degree).
*   The space complexity of adjacency matrices is O(V<sup>2</sup>), which can be a limitation for large graphs.
*  The order of vertices along the rows and columns matters. You must be consistent!
