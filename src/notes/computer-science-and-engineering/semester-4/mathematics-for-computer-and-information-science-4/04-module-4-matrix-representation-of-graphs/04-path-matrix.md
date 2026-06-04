---
title: "Path Matrix"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 4: Matrix representation of graphs"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af3e"
status: "completed"
scrapedAt: "2026-05-20T16:13:42.477Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4

## Module 4: Matrix Representation of Graphs

### Topic: Path Matrix

**Learning Outcomes:**

*   Understand the concept of a path in a graph.
*   Define the path matrix of a graph and its significance.
*   Construct the path matrix from the adjacency matrix of a graph using Boolean operations.
*   Interpret the information provided by the path matrix.
*   Apply the path matrix to determine connectivity between vertices in a graph.

---

**1. Introduction to Paths in Graphs**

*   **Definition of a Path:** A *path* in a graph is a sequence of vertices (v1, v2, ..., vk) such that there is an edge connecting vi to vi+1 for all i = 1, 2, ..., k-1.  The *length* of the path is k-1 (the number of edges).
*   **Simple Path:** A path is *simple* if it does not contain any repeated vertices (except possibly the first and last vertex in a closed path or cycle).
*   **Trail:**  A *trail* is a path where no edge is repeated, but vertices can be.
*   **Cycle:** A *cycle* is a path of length at least 1 where the first and last vertices are the same. A simple cycle is a cycle that is a simple path except for the first and last vertices being the same.
*   **Example:** Consider a graph with vertices A, B, C, and D. A possible path from A to C could be (A, B, C). Another path could be (A, B, A, B, C). The path (A, B, C) is a simple path.

**2. Definition and Significance of the Path Matrix**

*   **Definition:** The *path matrix* (or reachability matrix or connectivity matrix), denoted by P, of a graph with *n* vertices is an *n x n* Boolean matrix such that P[i, j] = 1 if there exists a path from vertex *i* to vertex *j*, and P[i, j] = 0 if there is no path from vertex *i* to vertex *j*.  Note that the path can be of any length (including zero).  A path of length zero exists from a vertex to itself.
*   **Significance:** The path matrix provides complete information about the *reachability* of vertices in a graph.  It tells us whether it is possible to travel from one vertex to another, regardless of the specific path taken. This is crucial in many applications, such as network analysis, database query optimization, and social network analysis.

**3. Constructing the Path Matrix from the Adjacency Matrix**

*   **Adjacency Matrix (A):**  Recall that the adjacency matrix A of a graph with *n* vertices is an *n x n* matrix where A[i, j] = 1 if there is an edge from vertex *i* to vertex *j*, and A[i, j] = 0 otherwise.
*   **Boolean Operations:**  The path matrix is derived from the adjacency matrix using Boolean operations (AND, OR).  We need to find all paths of length 1, length 2, length 3, ..., length *n-1*.
*   **Boolean Product (⊕) of Matrices:**  If A and B are Boolean Matrices of size *n x n*, the Boolean product C = A ⊕ B is defined as:
    C[i,j] = (A[i,1] ∧ B[1,j]) ∨ (A[i,2] ∧ B[2,j]) ∨ ... ∨ (A[i,n] ∧ B[n,j])
    Where ∧ represents the AND operation and ∨ represents the OR operation.  Think of this as a matrix multiplication where + is replaced by OR and * is replaced by AND.
*   **Algorithm:**
    1.  Let A be the adjacency matrix of the graph.
    2.  Calculate A^(1) = A (Paths of length 1)
    3.  Calculate A^(2) = A ⊕ A (Paths of length 2).  A^(2)[i,j] = 1 if there is a path of length 2 from vertex i to vertex j.  Note we are using the boolean product.
    4.  Calculate A^(3) = A^(2) ⊕ A (Paths of length 3).
    5.  Continue this process until A^(n-1).
    6.  The path matrix P is then: P = A^(1) ∨ A^(2) ∨ A^(3) ∨ ... ∨ A^(n-1) ∨ I, where ∨ is the element-wise OR operation and I is the identity matrix. The identity matrix is included to ensure that there is a path from each vertex to itself (path of length 0).

*   **Warshall's Algorithm:** Warshall's Algorithm is an efficient algorithm for computing the path matrix directly from the adjacency matrix.  It has better time complexity than the straightforward approach above.

    ```
    procedure Warshall(A: adjacency matrix of a graph with n vertices)
        P := A  // Initialize P to the adjacency matrix
        for k := 1 to n do
            for i := 1 to n do
                for j := 1 to n do
                    P[i, j] := P[i, j] OR (P[i, k] AND P[k, j])
        return P
    ```

    In Warshall's algorithm, the outer loop considers each vertex 'k' as a possible intermediate vertex in a path.  The inner loops iterate through all pairs of vertices (i, j). The algorithm checks if there is a path from 'i' to 'j' using 'k' as an intermediate vertex.  If there is a path from 'i' to 'k' (P[i, k] = 1) and a path from 'k' to 'j' (P[k, j] = 1), then a path from 'i' to 'j' exists through 'k', and P[i, j] is set to 1.

**4. Interpreting the Path Matrix**

*   **P[i, j] = 1:**  There exists at least one path from vertex *i* to vertex *j*.
*   **P[i, j] = 0:**  There is no path from vertex *i* to vertex *j*.
*   **Diagonal Elements:** P[i, i] is always 1, as there is always a path (of length 0) from a vertex to itself.
*   **Strongly Connected Graph:** A graph is *strongly connected* if for every pair of vertices *i* and *j*, there is a path from *i* to *j* and a path from *j* to *i*.  In this case, the path matrix will contain all 1s (except possibly for graphs with isolated nodes).

**5. Applying the Path Matrix to Determine Connectivity**

*   **Reachability:**  The path matrix directly provides information about which vertices are reachable from other vertices.
*   **Transitive Closure:**  The path matrix represents the *transitive closure* of the relation defined by the adjacency matrix.  That is, if A[i,j] = 1 represents "i is related to j", then P[i,j] = 1 represents "i is transitively related to j".
*   **Connected Components:** The path matrix can be used to determine the connected components of a graph.  Two vertices belong to the same connected component if and only if there is a path between them (P[i,j] = 1 and P[j,i] = 1).  For directed graphs, connected components are replaced with strongly connected components.

**Example:**

Consider the following directed graph with vertices A, B, C, and D:

```
     A --> B
     ^     |
     |     v
     D <-- C
```

1.  **Adjacency Matrix (A):**

```
      A  B  C  D
   A [ 0  1  0  0 ]
   B [ 0  0  1  0 ]
   C [ 0  0  0  0 ]
   D [ 1  0  0  0 ]
```

2.  **Calculate A^(2) = A ⊕ A:**

```
      A  B  C  D
   A [ 0  0  1  0 ]  (A->B->C)
   B [ 0  0  0  0 ]
   C [ 0  0  0  0 ]
   D [ 0  1  0  0 ]  (D->A->B)
```

3. **Calculate A^(3) = A^(2) ⊕ A:**

```
      A  B  C  D
   A [ 0  0  0  0 ]  (A->B->C->(None))
   B [ 0  0  0  0 ]
   C [ 0  0  0  0 ]
   D [ 0  0  1  0 ]  (D->A->B->C)
```

4. **Calculate P = A ∨ A^(2) ∨ A^(3) ∨ I :**

```
      A  B  C  D
   A [ 1  1  1  0 ]
   B [ 0  1  0  0 ]
   C [ 0  0  1  0 ]
   D [ 1  1  1  1 ]
```

**Interpretation:**

*   There is a path from A to A, B, and C, but not to D.
*   There is a path from B to B.
*   There is a path from C to C.
*   There is a path from D to A, B, C, and D.

**Using Warshall's Algorithm:**

1. **P = A (Initialization):**

```
      A  B  C  D
   A [ 0  1  0  0 ]
   B [ 0  0  1  0 ]
   C [ 0  0  0  0 ]
   D [ 1  0  0  0 ]
```

2. **k = 1:**

```
      A  B  C  D
   A [ 0  1  0  0 ]
   B [ 0  0  1  0 ]
   C [ 0  0  0  0 ]
   D [ 1  1  0  0 ]   (D->A and A->B => D->B)
```

3. **k = 2:**

```
      A  B  C  D
   A [ 0  1  1  0 ]   (A->B and B->C => A->C)
   B [ 0  0  1  0 ]
   C [ 0  0  0  0 ]
   D [ 1  1  1  0 ]   (D->B and B->C => D->C)
```

4. **k = 3:**

```
      A  B  C  D
   A [ 0  1  1  0 ]
   B [ 0  0  1  0 ]
   C [ 0  0  0  0 ]
   D [ 1  1  1  0 ]
```

5. **k = 4:**

```
      A  B  C  D
   A [ 0  1  1  0 ]
   B [ 0  0  1  0 ]
   C [ 0  0  0  0 ]
   D [ 1  1  1  0 ]
```

6. **P = P ∨ I:**

```
      A  B  C  D
   A [ 1  1  1  0 ]
   B [ 0  1  1  0 ]
   C [ 0  0  1  0 ]
   D [ 1  1  1  1 ]
```

Note:  Warshall's algorithm resulted in a different intermediate matrix than the prior method because it iteratively built up the shortest paths at each step.  The final result (once the identity matrix is ORed in) is identical.  The initial method calculates all the matrices for paths of a specific length separately.

**Important Points to Remember:**

*   The path matrix indicates the *existence* of a path, not the shortest path or the number of paths.
*   The path matrix is a useful tool for analyzing the connectivity of graphs.
*   Warshall's algorithm is an efficient method for computing the path matrix.
*   Understanding Boolean operations is crucial for constructing the path matrix.
*   Remember to include the identity matrix (paths of length 0) when constructing the path matrix.

---

**Practice Questions/Exercises:**

1.  **Construct the adjacency matrix and path matrix for the following undirected graph:**  (Assume an edge exists in both directions in the adjacency matrix)

```
      A -- B -- C
      |
      D
```

2.  **Given the following adjacency matrix, compute the path matrix using Warshall's algorithm:**

```
      A  B  C
   A [ 0  1  0 ]
   B [ 0  0  1 ]
   C [ 1  0  0 ]
```

3.  **Explain in your own words why the diagonal elements of the path matrix are always 1.**

4.  **Suppose the path matrix of a directed graph is all 1s. What does this tell you about the graph?**

**Answers:**

1.  **Adjacency Matrix:**

```
      A  B  C  D
   A [ 0  1  0  1 ]
   B [ 1  0  1  0 ]
   C [ 0  1  0  0 ]
   D [ 1  0  0  0 ]
```

    **Path Matrix:** Since all vertices are connected in a single component in the undirected graph, the path matrix will have all values set to 1.

```
      A  B  C  D
   A [ 1  1  1  1 ]
   B [ 1  1  1  1 ]
   C [ 1  1  1  1 ]
   D [ 1  1  1  1 ]
```

2.  **Warshall's Algorithm:**

    *   **Initialization (P = A):**

```
      A  B  C
   A [ 0  1  0 ]
   B [ 0  0  1 ]
   C [ 1  0  0 ]
```

    *   **k = 1:**

```
      A  B  C
   A [ 0  1  0 ]
   B [ 0  0  1 ]
   C [ 1  1  0 ]   (C->A and A->B => C->B)
```

    *   **k = 2:**

```
      A  B  C
   A [ 0  1  1 ]  (A->B and B->C => A->C)
   B [ 0  0  1 ]
   C [ 1  1  1 ]   (C->B and B->C => C->C)
```

    *   **k = 3:**

```
      A  B  C
   A [ 1  1  1 ] (A->C and C->A => A->A)
   B [ 1  0  1 ] (B->C and C->A => B->A)
   C [ 1  1  1 ]
```

   *   **P = P ∨ I:**

```
      A  B  C
   A [ 1  1  1 ]
   B [ 1  1  1 ]
   C [ 1  1  1 ]
```

3.  The diagonal elements of the path matrix are always 1 because there is always a path of length 0 from a vertex to itself.

4.  If the path matrix of a directed graph is all 1s, it means that for every pair of vertices *i* and *j*, there is a path from vertex *i* to vertex *j*. This implies that the graph is *strongly connected*.
