---
title: "Representation of Graphs"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bea6"
status: "completed"
scrapedAt: "2026-05-20T16:52:04.072Z"
---
# Data Structures: Module 3 - Trees and Graphs

## Topic: Representation of Graphs

This module explores how we can represent the complex relationships within graphs using various data structures. Understanding these representations is crucial for efficiently implementing graph algorithms.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   **Understand** the fundamental concept of a graph as a collection of vertices and edges.
*   **Differentiate** between directed and undirected graphs.
*   **Explain** the concept of weighted graphs.
*   **Describe** and **apply** the Adjacency Matrix representation for graphs.
*   **Describe** and **apply** the Adjacency List representation for graphs.
*   **Compare and contrast** the Adjacency Matrix and Adjacency List representations, including their space and time complexities for common operations.
*   **Choose** the appropriate graph representation based on the specific application and requirements.

---

### 1. Introduction to Graphs

#### 1.1. What is a Graph?

A **graph** is a mathematical structure used to model pairwise relationships between objects. It consists of:

*   **Vertices (or Nodes):** The objects in the graph.
*   **Edges (or Links):** The connections or relationships between pairs of vertices.

**Formal Definition:** A graph G = (V, E), where:
*   V is a non-empty set of vertices.
*   E is a set of edges, where each edge is a pair of vertices.

#### 1.2. Types of Graphs

*   **Undirected Graph:** In an undirected graph, the edges have no direction. If there is an edge between vertex A and vertex B, it means the connection is bidirectional.
    *   *Example:* A social network where friendships are mutual. An edge between Alice and Bob means Alice is friends with Bob, and Bob is friends with Alice.
*   **Directed Graph (Digraph):** In a directed graph, edges have a direction. An edge from vertex A to vertex B does not imply an edge from vertex B to vertex A.
    *   *Example:* A road network with one-way streets. An edge from City A to City B means you can travel from A to B, but not necessarily from B to A.
*   **Weighted Graph:** In a weighted graph, each edge is assigned a numerical value called a **weight**. This weight can represent cost, distance, capacity, or any other relevant metric.
    *   *Example:* A map where edges represent roads and weights represent travel time or distance between cities.

---

### 2. Graph Representations

There are two primary ways to represent graphs in computer memory:

#### 2.1. Adjacency Matrix Representation

**Concept:**
An adjacency matrix is a square matrix where the rows and columns represent the vertices of the graph. The value at the intersection of row `i` and column `j` indicates the presence or absence of an edge between vertex `i` and vertex `j`.

**For an undirected graph with `V` vertices:**
*   The matrix will be of size `V x V`.
*   `matrix[i][j] = 1` (or the edge weight) if there is an edge between vertex `i` and vertex `j`.
*   `matrix[i][j] = 0` if there is no edge between vertex `i` and vertex `j`.
*   Since the graph is undirected, the matrix will be symmetric: `matrix[i][j] = matrix[j][i]`.

**For a directed graph with `V` vertices:**
*   The matrix will be of size `V x V`.
*   `matrix[i][j] = 1` (or the edge weight) if there is an edge from vertex `i` to vertex `j`.
*   `matrix[i][j] = 0` if there is no edge from vertex `i` to vertex `j`.
*   The matrix may not be symmetric.

**For a weighted graph:**
*   `matrix[i][j]` stores the weight of the edge between `i` and `j`.
*   A special value (like infinity or -1) can be used to represent the absence of an edge.

**Example:**
Consider an undirected graph with 4 vertices (0, 1, 2, 3) and edges (0,1), (0,2), (1,2), (2,3).

```
   0 1 2 3
0: 0 1 1 0
1: 1 0 1 0
2: 1 1 0 1
3: 0 0 1 0
```

**Advantages of Adjacency Matrix:**
*   **Fast Edge Checking:** Checking if an edge exists between two vertices takes O(1) time.
*   **Simple Implementation:** Relatively straightforward to implement.

**Disadvantages of Adjacency Matrix:**
*   **Space Inefficiency:** Requires O(V^2) space, which can be very large for sparse graphs (graphs with few edges compared to the number of possible edges).
*   **Time Inefficiency for Iteration:** Iterating through all neighbors of a vertex takes O(V) time, even if the vertex has few neighbors.

#### 2.2. Adjacency List Representation

**Concept:**
An adjacency list represents a graph as an array of linked lists. Each element in the array corresponds to a vertex, and the linked list at that index contains all the vertices that are adjacent to the corresponding vertex.

**For an undirected graph with `V` vertices:**
*   An array of size `V`.
*   `adj[i]` is a linked list containing all vertices `j` such that there is an edge between `i` and `j`.
*   If there is an edge between `i` and `j`, then `j` will be in `adj[i]` and `i` will be in `adj[j]`.

**For a directed graph with `V` vertices:**
*   An array of size `V`.
*   `adj[i]` is a linked list containing all vertices `j` such that there is a directed edge from `i` to `j`.

**For a weighted graph:**
*   The linked lists can store pairs of (neighbor_vertex, edge_weight).

**Example:**
Consider the same undirected graph as before with 4 vertices (0, 1, 2, 3) and edges (0,1), (0,2), (1,2), (2,3).

*   **Vertex 0:** Adjacent to 1, 2. `adj[0] -> [1, 2]`
*   **Vertex 1:** Adjacent to 0, 2. `adj[1] -> [0, 2]`
*   **Vertex 2:** Adjacent to 0, 1, 3. `adj[2] -> [0, 1, 3]`
*   **Vertex 3:** Adjacent to 2. `adj[3] -> [2]`

In a program, this could be implemented using an array of vectors or linked lists.

**Advantages of Adjacency List:**
*   **Space Efficiency for Sparse Graphs:** Requires O(V + E) space, which is much better than O(V^2) for sparse graphs.
*   **Time Efficiency for Iteration:** Iterating through all neighbors of a vertex takes O(degree(v)) time, where degree(v) is the number of neighbors of vertex `v`.

**Disadvantages of Adjacency List:**
*   **Slower Edge Checking:** Checking if an edge exists between two vertices takes O(degree(v)) time in the worst case.
*   **Slightly More Complex Implementation:** Requires managing linked lists or dynamic arrays.

---

### 3. Comparison of Representations

| Operation                | Adjacency Matrix | Adjacency List   |
| :----------------------- | :--------------- | :--------------- |
| **Space Complexity**     | O(V^2)           | O(V + E)         |
| **Add Vertex**           | O(V^2)           | O(1) (amortized) |
| **Add Edge**             | O(1)             | O(1)             |
| **Remove Vertex**        | O(V^2)           | O(V + E)         |
| **Remove Edge**          | O(1)             | O(degree(v))     |
| **Check if Edge Exists** | O(1)             | O(degree(v))     |
| **Get Neighbors**        | O(V)             | O(degree(v))     |

**When to Use Which:**

*   **Adjacency Matrix:**
    *   Dense graphs (where E is close to V^2).
    *   When frequent edge existence checks are needed.
    *   For algorithms that benefit from direct access to all vertex pairs (e.g., Floyd-Warshall).

*   **Adjacency List:**
    *   Sparse graphs (where E is much smaller than V^2). This is the most common scenario.
    *   When iterating through neighbors is a frequent operation (e.g., BFS, DFS).
    *   When memory is a concern.

---

### 4. Practice Questions and Exercises

**Question 1:**
Given an undirected graph with the following adjacency matrix:

```
   A B C D
A: 0 1 1 0
B: 1 0 0 1
C: 1 0 0 1
D: 0 1 1 0
```

a) Draw the graph.
b) What is the degree of vertex A?
c) List all neighbors of vertex C.

**Answer 1:**

a) **Graph Drawing:**
   ```
   A --- B
   |     |
   C --- D
   ```
   (Note: This is a cycle of length 4)

b) The degree of vertex A is 2 (edges AB and AC).

c) Neighbors of vertex C are A and D.

---

**Question 2:**
Represent the following directed graph using an adjacency list. The vertices are labeled 0, 1, 2, 3, and the directed edges are: (0, 1), (0, 2), (1, 2), (2, 0), (2, 3), (3, 3).

**Answer 2:**

*   **adj[0]:** -> [1, 2]
*   **adj[1]:** -> [2]
*   **adj[2]:** -> [0, 3]
*   **adj[3]:** -> [3]

---

**Question 3:**
Consider a weighted directed graph where edge weights represent travel time between cities.
Vertices: {NY, LA, CHI}
Edges: (NY, LA, 300), (LA, CHI, 200), (NY, CHI, 400)

Represent this graph using:
a) An Adjacency Matrix (assume vertices are ordered NY=0, LA=1, CHI=2. Use a large number, e.g., 999, for no direct edge).
b) An Adjacency List (each list entry should be a pair of `(neighbor, weight)`).

**Answer 3:**

a) **Adjacency Matrix:**

```
    NY LA CHI
NY:  0 300 400
LA: 999  0  200
CHI: 999 999  0
```

b) **Adjacency List:**

*   **adj[NY]:** -> [(LA, 300), (CHI, 400)]
*   **adj[LA]:** -> [(CHI, 200)]
*   **adj[CHI]:** -> []

---

**Question 4 (Conceptual):**
If you are designing a social network application, which graph representation would you generally prefer and why? What if you wanted to quickly check if two users are directly connected?

**Answer 4:**
For a social network, the graph is typically **sparse** (most users are not connected to most other users). Therefore, the **Adjacency List** representation is generally preferred due to its space efficiency (O(V + E)).

If you wanted to quickly check if two users are directly connected, the **Adjacency Matrix** offers O(1) time complexity for this specific operation. However, the memory overhead of O(V^2) for a large social network would likely be prohibitive. In practice, a hybrid approach or a well-optimized adjacency list implementation that allows for efficient neighbor lookups would be used.

---

### 5. Important Points to Remember

*   **Graphs are fundamental:** They model relationships in many real-world scenarios.
*   **Directed vs. Undirected:** This distinction impacts how edges are stored and interpreted.
*   **Weighted graphs:** Add an extra dimension of information to edges.
*   **Adjacency Matrix:** Good for dense graphs and quick edge checks, but space-hungry for sparse graphs.
*   **Adjacency List:** Excellent for sparse graphs, efficient for neighbor traversal, but edge checks can be slower.
*   **Choice matters:** Select the representation that best suits your graph's density and the operations you'll perform most frequently.

---
