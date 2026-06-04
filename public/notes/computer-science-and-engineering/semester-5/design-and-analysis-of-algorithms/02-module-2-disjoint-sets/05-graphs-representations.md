---
title: "Graphs – Representations"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 2: Disjoint Sets "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b550"
status: "completed"
scrapedAt: "2026-05-20T16:45:36.709Z"
---
## DESIGN AND ANALYSIS OF ALGORITHMS: Module 2 - Disjoint Sets: Graphs - Representations

**Introduction:** This module focuses on graph representations, a crucial aspect of algorithm design and analysis. We will explore various methods to represent graphs in computer memory and their respective advantages and disadvantages. Understanding these representations is fundamental for efficiently implementing graph algorithms.

**Learning Outcomes:**

*   Understand the concept of a graph and its terminology.
*   Learn different methods for representing graphs, including Adjacency Matrix, Adjacency List, and Incidence Matrix.
*   Analyze the space and time complexity of each representation method.
*   Choose the appropriate graph representation for a given application.
*   Implement basic graph operations using different representations.

**1.  Introduction to Graphs**

*   **Definition:** A graph G is a pair (V, E), where:
    *   V is a finite set of vertices (or nodes).
    *   E is a finite set of edges. Each edge connects two vertices.

*   **Types of Graphs:**

    *   **Directed Graph (Digraph):**  Edges have a direction. E consists of ordered pairs (u, v), representing an edge from vertex u to vertex v.
    *   **Undirected Graph:** Edges have no direction. E consists of unordered pairs {u, v}, representing an edge connecting vertex u and vertex v.
    *   **Weighted Graph:** Each edge is associated with a weight (or cost).
    *   **Unweighted Graph:** Edges have no weights.
    *   **Simple Graph:**  Contains no self-loops (edges from a vertex to itself) or parallel edges (multiple edges between the same pair of vertices).
    *   **Multigraph:** Allows self-loops and/or parallel edges.
    *   **Complete Graph:**  Every pair of distinct vertices is connected by an edge.  An undirected complete graph with n vertices has n(n-1)/2 edges. A directed complete graph has n(n-1) edges.
    *   **Connected Graph:** There is a path between every pair of vertices.
    *   **Disconnected Graph:** Contains at least two connected components.
    *   **Cyclic Graph:** Contains at least one cycle (a path that starts and ends at the same vertex).
    *   **Acyclic Graph:** Contains no cycles. A Directed Acyclic Graph is often called a DAG.

*   **Graph Terminology:**

    *   **Vertex (Node):** A point in the graph.
    *   **Edge:** A connection between two vertices.
    *   **Adjacent Vertices:** Two vertices connected by an edge are adjacent.
    *   **Degree of a Vertex (Undirected Graph):** The number of edges incident to the vertex.
    *   **In-Degree of a Vertex (Directed Graph):** The number of edges pointing *to* the vertex.
    *   **Out-Degree of a Vertex (Directed Graph):** The number of edges pointing *from* the vertex.
    *   **Path:** A sequence of vertices connected by edges.
    *   **Cycle:** A path that starts and ends at the same vertex.
    *   **Length of a Path:** The number of edges in the path.
    *   **Connected Component:** A maximal subgraph in which there is a path between every pair of vertices.
    *   **Spanning Tree:** A subgraph that is a tree and connects all the vertices.

**2. Graph Representations**

We will explore three common methods for representing graphs:

*   **Adjacency Matrix**
*   **Adjacency List**
*   **Incidence Matrix**

**2.1 Adjacency Matrix**

*   **Description:** A 2D array (matrix) of size |V| x |V|, where |V| is the number of vertices in the graph.  `adjMatrix[i][j]` is 1 if there is an edge from vertex i to vertex j; otherwise, it's 0. For weighted graphs, `adjMatrix[i][j]` stores the weight of the edge.
*   **Representation (Undirected Graph):**

    ```
    adjMatrix[i][j] = 1  if edge (i, j) exists
    adjMatrix[i][j] = 0  otherwise
    ```
    The adjacency matrix for an undirected graph is symmetric ( `adjMatrix[i][j] == adjMatrix[j][i]` ).
*   **Representation (Directed Graph):**

    ```
    adjMatrix[i][j] = 1  if edge i -> j exists
    adjMatrix[i][j] = 0  otherwise
    ```
    The adjacency matrix for a directed graph is generally not symmetric.

*   **Example (Undirected Graph):**

    Consider an undirected graph with vertices {0, 1, 2, 3} and edges {(0, 1), (0, 2), (1, 2), (1, 3), (2, 3)}.  The adjacency matrix would be:

    ```
      0 1 2 3
    0 0 1 1 0
    1 1 0 1 1
    2 1 1 0 1
    3 0 1 1 0
    ```

*   **Example (Directed Graph):**

    Consider a directed graph with vertices {0, 1, 2} and edges {(0, 1), (1, 2), (2, 0)}. The adjacency matrix would be:

    ```
      0 1 2
    0 0 1 0
    1 0 0 1
    2 1 0 0
    ```

*   **Space Complexity:** O(|V|^2)  - It stores information for every possible pair of vertices, regardless of whether an edge exists.
*   **Time Complexity:**

    *   Checking if an edge exists between vertices u and v: O(1)
    *   Finding all neighbors of a vertex: O(|V|)  (must iterate through a row of the matrix)
    *   Adding an edge: O(1)
    *   Removing an edge: O(1)

*   **Advantages:**

    *   Simple to implement.
    *   Fast to check for the existence of an edge between two vertices.

*   **Disadvantages:**

    *   High space complexity, especially for sparse graphs (graphs with relatively few edges).
    *   Inefficient for finding all neighbors of a vertex in sparse graphs.

**2.2 Adjacency List**

*   **Description:**  An array of lists. The array has size |V|, where |V| is the number of vertices. Each element `adjList[i]` is a list of all vertices adjacent to vertex i (i.e., all vertices that vertex i has an edge to).
*   **Representation (Undirected Graph):**

    For each edge {u, v}, add v to the adjacency list of u and u to the adjacency list of v.
*   **Representation (Directed Graph):**

    For each edge (u, v), add v to the adjacency list of u.
*   **Example (Undirected Graph):**

    Consider the same undirected graph as before with vertices {0, 1, 2, 3} and edges {(0, 1), (0, 2), (1, 2), (1, 3), (2, 3)}.  The adjacency list would be:

    ```
    0: [1, 2]
    1: [0, 2, 3]
    2: [0, 1, 3]
    3: [1, 2]
    ```
*   **Example (Directed Graph):**

    Consider the same directed graph as before with vertices {0, 1, 2} and edges {(0, 1), (1, 2), (2, 0)}. The adjacency list would be:

    ```
    0: [1]
    1: [2]
    2: [0]
    ```
*   **Space Complexity:** O(|V| + |E|)  - Stores only the actual edges present in the graph.
*   **Time Complexity:**

    *   Checking if an edge exists between vertices u and v: O(degree(u)) in the worst case (degree of u is the number of neighbors of u). Can be improved to O(1) average case by using a hash table as the adjacency list.
    *   Finding all neighbors of a vertex: O(degree(u))
    *   Adding an edge: O(1) (if you maintain a pointer to the end of the list or use a linked list or hash table).  Could be O(|V|) if you have to search the list to prevent duplicate entries.
    *   Removing an edge: O(degree(u)) (in the worst case, you need to traverse the entire list to find and remove the vertex).

*   **Advantages:**

    *   Lower space complexity for sparse graphs.
    *   Efficient for finding all neighbors of a vertex.

*   **Disadvantages:**

    *   Checking for the existence of an edge can be slower than with an adjacency matrix (unless a hash table is used for the adjacency list).
    *   More complex to implement than an adjacency matrix.

**2.3 Incidence Matrix**

*   **Description:** A 2D array (matrix) of size |V| x |E|, where |V| is the number of vertices and |E| is the number of edges.

*   **Representation (Undirected Graph):**

    ```
    incidenceMatrix[i][j] = 1 if vertex i is incident to edge j
    incidenceMatrix[i][j] = 0 otherwise
    ```

*   **Representation (Directed Graph):**

    ```
    incidenceMatrix[i][j] = 1 if vertex i is the *destination* of edge j
    incidenceMatrix[i][j] = -1 if vertex i is the *source* of edge j
    incidenceMatrix[i][j] = 0 otherwise
    ```

*   **Example (Undirected Graph):**

    Consider an undirected graph with vertices {0, 1, 2} and edges e0 = (0, 1), e1 = (0, 2), e2 = (1, 2).  The incidence matrix would be:

    ```
         e0  e1  e2
    0    1   1   0
    1    1   0   1
    2    0   1   1
    ```

*   **Example (Directed Graph):**

    Consider a directed graph with vertices {0, 1, 2} and edges e0 = (0, 1), e1 = (1, 2), e2 = (2, 0).  The incidence matrix would be:

    ```
         e0  e1  e2
    0   -1   0   1
    1    1  -1   0
    2    0   1  -1
    ```

*   **Space Complexity:** O(|V| * |E|)
*   **Time Complexity:**

    *   Checking if a vertex is incident to an edge: O(1)
    *   Finding all edges incident to a vertex: O(|E|)
    *   Finding all vertices incident to an edge: O(|V|)

*   **Advantages:**

    *   Can be useful in specific graph algorithms, particularly those dealing with network flow or circuit analysis.
    *   Represents the relationship between vertices and edges explicitly.

*   **Disadvantages:**

    *   High space complexity, especially for dense graphs.
    *   Less efficient for most common graph operations compared to adjacency matrix and adjacency list representations.
    *   More complex to implement than the other two representations.

**3.  Comparison of Graph Representations**

| Feature            | Adjacency Matrix | Adjacency List | Incidence Matrix |
| ------------------ | ---------------- | --------------- | ---------------- |
| Space Complexity    | O(|V|^2)         | O(|V| + |E|)    | O(|V| * |E|)    |
| Edge Existence Check | O(1)             | O(degree(u))   | O(1)             |
| Neighbor Finding    | O(|V|)          | O(degree(u))   | O(|E|)          |
| Sparse Graphs      | Inefficient      | Efficient       | Inefficient      |
| Dense Graphs       | Efficient       | Less Efficient  | Inefficient      |
| Implementation     | Simple           | More Complex   | Complex          |

**4.  Choosing the Right Representation**

*   **Sparse Graphs (|E| << |V|^2):**  Adjacency lists are generally the best choice due to their lower space complexity and efficient neighbor finding.
*   **Dense Graphs (|E| ≈ |V|^2):**  Adjacency matrices can be more efficient for edge existence checks, but the high space complexity should be considered.
*   **Memory Constraints:** Adjacency lists are preferred when memory is a limiting factor.
*   **Edge Existence Check Frequency:**  If frequent edge existence checks are required and memory is not a major concern, adjacency matrices might be preferable.
*   **Specific Algorithm Requirements:** Certain algorithms may be more naturally suited to a particular representation. For example, some network flow algorithms may benefit from the explicit edge representation of an incidence matrix.

**5.  Implementing Basic Graph Operations (Examples using Adjacency List - Python)**

```python
class Graph:
    def __init__(self, num_vertices):
        self.num_vertices = num_vertices
        self.adj_list = [[] for _ in range(num_vertices)]  # Initialize adjacency list

    def add_edge(self, u, v, directed=False): # directed = False for undirected graph
        self.adj_list[u].append(v)
        if not directed:
            self.adj_list[v].append(u)

    def remove_edge(self, u, v, directed=False):
        try:
            self.adj_list[u].remove(v)
            if not directed:
                self.adj_list[v].remove(u)
        except ValueError:
            print(f"Edge ({u}, {v}) does not exist.")

    def print_graph(self):
        for vertex in range(self.num_vertices):
            print(f"Vertex {vertex}: {self.adj_list[vertex]}")

# Example Usage:
g = Graph(4)
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 2)
g.add_edge(1, 3)

print("Graph Representation (Adjacency List):")
g.print_graph()

g.remove_edge(1,2)
print("\nAfter removing edge (1,2):")
g.print_graph()
```

**6. Practice Questions/Exercises**

1.  **Represent the following graph using an adjacency matrix and an adjacency list:**

    Vertices: {A, B, C, D, E}
    Edges: {(A, B), (A, C), (B, D), (C, E)} (Undirected)

    **Answer (Adjacency Matrix):**

    ```
       A B C D E
    A  0 1 1 0 0
    B  1 0 0 1 0
    C  1 0 0 0 1
    D  0 1 0 0 0
    E  0 0 1 0 0
    ```

    **Answer (Adjacency List):**

    ```
    A: [B, C]
    B: [A, D]
    C: [A, E]
    D: [B]
    E: [C]
    ```

2.  **What is the space complexity of an adjacency matrix for a graph with 1000 vertices?  What is the space complexity of an adjacency list for the same graph if it has 100 edges?**

    **Answer:**
    * Adjacency Matrix: O(1000^2) = O(1,000,000)
    * Adjacency List: O(1000 + 100) = O(1100)

3.  **Describe the advantages and disadvantages of using an adjacency list versus an adjacency matrix for a very large, sparse graph representing a social network.**

    **Answer:**
    *   **Adjacency List Advantages:**  Lower space complexity due to the sparsity of the graph (most people are not connected to everyone else). Efficient neighbor finding (finding a user's friends).
    *   **Adjacency List Disadvantages:** Slower to check if two users are directly connected (requires traversing the adjacency list of one of the users).
    *   **Adjacency Matrix Advantages:**  Faster to check if two users are directly connected (O(1) lookup).
    *   **Adjacency Matrix Disadvantages:**  Extremely high space complexity, making it impractical for large social networks.

4.  **Implement a function to check if an edge exists between two vertices in a graph represented by an adjacency list.** (Python)

    ```python
    def edge_exists_adj_list(graph, u, v): # assumes graph is an adjacency list representation
        if v in graph[u]:
            return True
        else:
            return False
    ```

5.  **Implement a function to check if an edge exists between two vertices in a graph represented by an adjacency matrix.** (Python)

    ```python
    def edge_exists_adj_matrix(graph, u, v): # assumes graph is an adjacency matrix representation
        if graph[u][v] == 1:
            return True
        else:
            return False
    ```

**7. Important Points to Remember**

*   The choice of graph representation significantly impacts the performance of graph algorithms.
*   Consider the density of the graph (sparse vs. dense) when selecting a representation.
*   Understand the trade-offs between space complexity and time complexity for different operations.
*   Be familiar with the implementation of basic graph operations (adding/removing vertices and edges, checking edge existence, finding neighbors) for each representation.
*   Adjacency lists are generally preferred for sparse graphs due to their lower space complexity.
*   Adjacency matrices can be more efficient for edge existence checks in dense graphs, but their space complexity is a significant drawback.
*   Incidence matrices are less common but can be useful in specific scenarios.
