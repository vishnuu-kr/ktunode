---
title: "Representation of Graphs"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac45"
status: "completed"
scrapedAt: "2026-05-20T16:23:06.369Z"
---
## Module 3: Trees and Graphs - Representation of Graphs

**Introduction:**

This module focuses on graphs, a fundamental data structure used to model relationships between objects. Understanding how to represent graphs is crucial for implementing various graph algorithms.

**Learning Outcomes:**

Upon completion of this topic, you will be able to:

1.  **Define and differentiate between various types of graphs (directed, undirected, weighted, unweighted).**
2.  **Explain and implement the Adjacency Matrix representation of a graph.**
3.  **Explain and implement the Adjacency List representation of a graph.**
4.  **Compare and contrast Adjacency Matrix and Adjacency List representations, considering their advantages and disadvantages in terms of space complexity, time complexity for specific operations (e.g., checking for an edge, finding neighbors), and ease of implementation.**
5.  **Choose the appropriate graph representation based on the specific problem requirements.**

---

**1. Types of Graphs:**

*   **Definition:** A graph G is a pair (V, E), where V is a set of vertices (nodes) and E is a set of edges that connect pairs of vertices.

*   **Undirected Graph:**

    *   **Definition:** Edges have no direction.  An edge (u, v) indicates a connection between vertex u and vertex v, and it can be traversed in either direction.
    *   **Example:** Social network where friendship is mutual.  If A is friends with B, then B is friends with A.
    *   **Diagram:**
        ```
        A -- B
        |    |
        C -- D
        ```

*   **Directed Graph (Digraph):**

    *   **Definition:** Edges have a direction. An edge (u, v) indicates a connection from vertex u to vertex v, but not necessarily from vertex v to vertex u.
    *   **Example:** Website links.  A page might link to another page, but the other page might not link back.
    *   **Diagram:**
        ```
        A -> B
        ^    |
        |    v
        C <- D
        ```

*   **Weighted Graph:**

    *   **Definition:** Edges have associated weights (costs or values). The weight of an edge can represent distance, cost, capacity, etc.
    *   **Example:** A road network where the weights represent the distance between cities.
    *   **Diagram:**
        ```
        A --5-- B
        |     / \
        2    3   1
        |   /     \
        C --4-- D
        ```

*   **Unweighted Graph:**

    *   **Definition:** Edges have no weights. All edges are treated as having the same value (typically 1).
    *   **Example:** A simple connection network where the only important factor is whether two nodes are connected, not the cost of the connection.
    *   **Diagram:**
        ```
        A -- B
        |    |
        C -- D
        ```

**2. Adjacency Matrix Representation:**

*   **Definition:**  An Adjacency Matrix is a 2D array (matrix) of size V x V, where V is the number of vertices in the graph.  `adj_matrix[i][j]` is 1 (or True) if there is an edge from vertex `i` to vertex `j`, and 0 (or False) otherwise.

*   **Undirected Graph Adjacency Matrix:** The matrix is symmetric.  If `adj_matrix[i][j] = 1`, then `adj_matrix[j][i] = 1`.  The diagonal elements are typically 0 (no self-loops).

*   **Directed Graph Adjacency Matrix:** The matrix is not necessarily symmetric. `adj_matrix[i][j] = 1` indicates an edge from vertex `i` to `j`, but there may or may not be an edge from vertex `j` to `i`.

*   **Weighted Graph Adjacency Matrix:** `adj_matrix[i][j]` stores the weight of the edge from vertex `i` to `j`. If there's no edge, it's typically represented by a special value like infinity (∞) or a very large number (e.g., `Integer.MAX_VALUE` in Java or `float('inf')` in Python).

*   **Example (Undirected, Unweighted):**

    Graph:
    ```
    0 -- 1
    |    |
    2 -- 3
    ```

    Adjacency Matrix:

    ```
      0 1 2 3
    0 0 1 1 0
    1 1 0 0 1
    2 1 0 0 1
    3 0 1 1 0
    ```

*   **Example (Directed, Weighted):**

    Graph:
    ```
    0 --> 1 (weight: 5)
    ^     |
    |     v
    2 --> 3 (weight: 2)
    ```

    Adjacency Matrix:

    ```
         0    1    2    3
    0    0    5    0    0
    1    0    0    0    0
    2    0    0    0    2
    3    0    0    0    0
    ```

*   **Implementation (Python):**

    ```python
    def create_adjacency_matrix(num_vertices, edges, is_directed=False, is_weighted=False):
        """
        Creates an adjacency matrix representation of a graph.

        Args:
            num_vertices: The number of vertices in the graph.
            edges: A list of tuples representing the edges.  Each tuple is (u, v) for unweighted or (u, v, weight) for weighted.
            is_directed: True if the graph is directed, False otherwise.
            is_weighted: True if the graph is weighted, False otherwise.

        Returns:
            A 2D list representing the adjacency matrix.
        """

        adj_matrix = [[0] * num_vertices for _ in range(num_vertices)]

        for edge in edges:
            if is_weighted:
                u, v, weight = edge
                adj_matrix[u][v] = weight
                if not is_directed:
                    adj_matrix[v][u] = weight
            else:
                u, v = edge
                adj_matrix[u][v] = 1
                if not is_directed:
                    adj_matrix[v][u] = 1

        return adj_matrix

    # Example Usage:
    # Undirected, Unweighted Graph
    num_vertices = 4
    edges = [(0, 1), (0, 2), (1, 3), (2, 3)]
    adj_matrix = create_adjacency_matrix(num_vertices, edges)
    print("Undirected, Unweighted Adjacency Matrix:")
    for row in adj_matrix:
        print(row)

    # Directed, Weighted Graph
    num_vertices = 4
    edges = [(0, 1, 5), (2, 3, 2), (2, 0, 1)]
    adj_matrix = create_adjacency_matrix(num_vertices, edges, is_directed=True, is_weighted=True)
    print("\nDirected, Weighted Adjacency Matrix:")
    for row in adj_matrix:
        print(row)
    ```

**3. Adjacency List Representation:**

*   **Definition:** An Adjacency List is an array (or list) of lists.  The array has size V, where V is the number of vertices in the graph.  Each element `adj_list[i]` is a list that stores the vertices adjacent to vertex `i`.

*   **Undirected Graph Adjacency List:** If vertex `v` is in `adj_list[u]`, then vertex `u` is also in `adj_list[v]`.

*   **Directed Graph Adjacency List:** If vertex `v` is in `adj_list[u]`, it indicates an edge from `u` to `v`, but `u` might not be in `adj_list[v]`.

*   **Weighted Graph Adjacency List:**  Each element in the list stores not just the adjacent vertex, but also the weight of the edge connecting them.  This can be done using pairs or tuples.

*   **Example (Undirected, Unweighted):**

    Graph:
    ```
    0 -- 1
    |    |
    2 -- 3
    ```

    Adjacency List:

    ```
    0: [1, 2]
    1: [0, 3]
    2: [0, 3]
    3: [1, 2]
    ```

*   **Example (Directed, Weighted):**

    Graph:
    ```
    0 --> 1 (weight: 5)
    ^     |
    |     v
    2 --> 3 (weight: 2)
    ```

    Adjacency List:

    ```
    0: [(1, 5)]
    1: []
    2: [(3, 2), (0,1)]
    3: []
    ```

*   **Implementation (Python):**

    ```python
    def create_adjacency_list(num_vertices, edges, is_directed=False, is_weighted=False):
        """
        Creates an adjacency list representation of a graph.

        Args:
            num_vertices: The number of vertices in the graph.
            edges: A list of tuples representing the edges.  Each tuple is (u, v) for unweighted or (u, v, weight) for weighted.
            is_directed: True if the graph is directed, False otherwise.
            is_weighted: True if the graph is weighted, False otherwise.

        Returns:
            A list of lists representing the adjacency list.
        """

        adj_list = [[] for _ in range(num_vertices)]

        for edge in edges:
            if is_weighted:
                u, v, weight = edge
                adj_list[u].append((v, weight))
                if not is_directed:
                    adj_list[v].append((u, weight))
            else:
                u, v = edge
                adj_list[u].append(v)
                if not is_directed:
                    adj_list[v].append(u)

        return adj_list

    # Example Usage:
    # Undirected, Unweighted Graph
    num_vertices = 4
    edges = [(0, 1), (0, 2), (1, 3), (2, 3)]
    adj_list = create_adjacency_list(num_vertices, edges)
    print("Undirected, Unweighted Adjacency List:")
    for i, neighbors in enumerate(adj_list):
        print(f"{i}: {neighbors}")

    # Directed, Weighted Graph
    num_vertices = 4
    edges = [(0, 1, 5), (2, 3, 2), (2,0,1)]
    adj_list = create_adjacency_list(num_vertices, edges, is_directed=True, is_weighted=True)
    print("\nDirected, Weighted Adjacency List:")
    for i, neighbors in enumerate(adj_list):
        print(f"{i}: {neighbors}")
    ```

**4. Comparison of Adjacency Matrix and Adjacency List:**

| Feature               | Adjacency Matrix                               | Adjacency List                                    |
|-----------------------|------------------------------------------------|----------------------------------------------------|
| **Space Complexity**  | O(V<sup>2</sup>)                                  | O(V + E)                                         |
| **Check Edge (u, v)** | O(1)                                          | O(degree(u)) in the worst case. Could be O(1) if using a set. |
| **Find Neighbors**     | O(V)                                          | O(degree(u))                                     |
| **Add Edge**          | O(1)                                          | O(1) (amortized)                                  |
| **Delete Edge**       | O(1)                                          | O(degree(u)) in worst case. Requires searching the list.  Could be O(1) if using a set. |
| **Implementation**    | Simpler to implement                             | More complex to implement                           |
| **Use Cases**        | Dense graphs (E is close to V<sup>2</sup>)       | Sparse graphs (E is much smaller than V<sup>2</sup>)   |

**Explanation of the Table:**

*   **Space Complexity:** The adjacency matrix always uses V<sup>2</sup> space, regardless of the number of edges.  The adjacency list uses V space for the list headers plus E space for the edges.  For sparse graphs, E << V<sup>2</sup>, making the adjacency list more space-efficient.

*   **Check Edge (u, v):** In the adjacency matrix, checking if an edge (u, v) exists simply involves accessing `adj_matrix[u][v]`, which takes constant time, O(1). In an adjacency list, you have to traverse the list of neighbors of vertex `u` to see if `v` is present.  In the worst case, `u` is connected to all other vertices, so the time complexity is O(degree(u)). Note that using a set instead of a list for each adjacency list can reduce the check edge operation time to O(1) on average, at the cost of higher constant factors.

*   **Find Neighbors:** Finding all the neighbors of a vertex `u` in an adjacency matrix requires iterating through all `V` columns of row `u` to find the entries that are 1.  In an adjacency list, you simply iterate through the list `adj_list[u]`, which has a length of `degree(u)`.

*   **Add/Delete Edge:** Adding an edge to an adjacency matrix is a direct assignment, O(1). Adding to an adjacency list is also typically O(1) amortized (assuming you append to the end of the list). Deleting from an adjacency list requires a search operation which takes O(degree(u)) in worst case.

**5. Choosing the Appropriate Graph Representation:**

*   **Sparse Graphs (E << V<sup>2</sup>):**  Adjacency List is generally preferred due to its lower space complexity. Also, algorithms that involve iterating over the neighbors of a vertex (e.g., breadth-first search, depth-first search) are typically more efficient with adjacency lists.

*   **Dense Graphs (E ≈ V<sup>2</sup>):** Adjacency Matrix can be more suitable. Checking for the existence of an edge is very fast (O(1)).

*   **Memory Constraints:** If memory is a major concern, Adjacency List is often the better choice, especially for large graphs.

*   **Operations:** If frequent edge lookups are required, and the graph is small enough to fit in memory, the Adjacency Matrix is advantageous.  If the primary operations involve traversing neighbors, the Adjacency List is generally faster.

---

**Practice Questions and Exercises:**

1.  **Question:**  Consider an undirected graph with vertices {A, B, C, D} and edges {(A, B), (B, C), (C, D)}. Draw the graph and represent it using both an Adjacency Matrix and an Adjacency List.

    **Answer:**

    *   **Graph:**

        ```
        A -- B -- C -- D
        ```

    *   **Adjacency Matrix:**

        ```
          A B C D
        A 0 1 0 0
        B 1 0 1 0
        C 0 1 0 1
        D 0 0 1 0
        ```

    *   **Adjacency List:**

        ```
        A: [B]
        B: [A, C]
        C: [B, D]
        D: [C]
        ```

2.  **Question:** Consider a directed weighted graph with vertices {0, 1, 2, 3} and edges {(0, 1, 10), (0, 2, 5), (1, 2, 2), (2, 3, 1)}. Represent it using both an Adjacency Matrix and an Adjacency List.

    **Answer:**

    *   **Adjacency Matrix:**

        ```
           0   1   2   3
        0  0  10   5   0
        1  0   0   2   0
        2  0   0   0   1
        3  0   0   0   0
        ```

    *   **Adjacency List:**

        ```
        0: [(1, 10), (2, 5)]
        1: [(2, 2)]
        2: [(3, 1)]
        3: []
        ```

3.  **Question:**  You are given a graph representing a social network with 1000 users and 100,000 friendship connections.  Which graph representation (Adjacency Matrix or Adjacency List) would be more suitable and why?

    **Answer:** An Adjacency List would be more suitable. The graph is relatively sparse (100,000 edges for 1000 vertices, where a fully connected graph would have 1000 * 999 / 2 = 499,500 edges).  The Adjacency Matrix would require 1000 * 1000 = 1,000,000 units of storage, while the Adjacency List would require approximately 1000 + 2 * 100,000 = 201,000 units of storage (assuming each edge is stored twice in the undirected case).

4.  **Question:** Write a function in Python that, given an Adjacency Matrix, returns the number of edges in the graph, assuming the graph is undirected and unweighted.

    **Answer:**

    ```python
    def count_edges_from_adjacency_matrix(adj_matrix):
        """
        Counts the number of edges in an undirected, unweighted graph represented by an adjacency matrix.

        Args:
            adj_matrix: A 2D list representing the adjacency matrix.

        Returns:
            The number of edges in the graph.
        """
        num_vertices = len(adj_matrix)
        edge_count = 0
        for i in range(num_vertices):
            for j in range(i + 1, num_vertices):  # Only iterate through the upper triangle to avoid double-counting
                if adj_matrix[i][j] == 1:
                    edge_count += 1
        return edge_count
    ```

---

**Important Points to Remember:**

*   Choose the graph representation that best suits the characteristics of the graph (sparse vs. dense) and the operations you need to perform.
*   Understand the time and space complexity trade-offs between Adjacency Matrix and Adjacency List.
*   Consider memory limitations when dealing with very large graphs.
*   For weighted graphs, remember to store edge weights in the chosen representation (either matrix entries or list elements).
*   When implementing graph algorithms, the choice of graph representation can significantly impact performance.

This comprehensive guide covers the essential aspects of graph representation.  By understanding these concepts, you will be well-equipped to work with graphs in various data structures and algorithms applications.
