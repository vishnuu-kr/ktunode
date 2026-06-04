---
title: "Representation of Graphs"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea19"
status: "completed"
scrapedAt: "2026-05-23T17:55:13.923Z"
---
# Data Structures: Module 3: Trees and Graphs - Representation of Graphs

This module delves into the fundamental concepts of Trees and Graphs, two powerful non-linear data structures. This section specifically focuses on **Graph Representation**, a crucial aspect for effectively utilizing these structures in various applications.

---

## 3.1 Introduction to Graphs

*   **Definition:** A graph G is a pair (V, E), where V is a finite set of **vertices** (or nodes) and E is a finite set of **edges** that connect pairs of vertices.
*   **Purpose:** Graphs are used to model relationships between objects. They are ubiquitous in computer science and have applications in:
    *   Social networks (people as vertices, friendships as edges)
    *   Computer networks (routers as vertices, network connections as edges)
    *   Road maps (cities as vertices, roads as edges)
    *   Circuit diagrams
    *   Task scheduling
    *   Dependency management

---

## 3.2 Types of Graphs

Graphs can be classified based on the properties of their edges and vertices:

### 3.2.1 Directed vs. Undirected Graphs

*   **Undirected Graph:** Edges have no direction. If there's an edge between vertex `u` and `v`, it means `u` is connected to `v` and `v` is connected to `u`. The edge is represented as `{u, v}`.
    *   **Example:** A social network where friendships are mutual.
*   **Directed Graph (Digraph):** Edges have a direction. An edge from `u` to `v` means there is a connection from `u` to `v`, but not necessarily from `v` to `u`. The edge is represented as `(u, v)`.
    *   **Example:** A one-way street system or a website's hyperlink structure.

### 3.2.2 Weighted vs. Unweighted Graphs

*   **Unweighted Graph:** Edges do not have associated costs or weights.
*   **Weighted Graph:** Each edge has a numerical weight associated with it, representing things like distance, cost, or capacity.
    *   **Example:** A road map where edge weights represent distances between cities.

### 3.2.3 Other Graph Types (Briefly)

*   **Simple Graph:** An undirected graph with no loops (edges connecting a vertex to itself) and no more than one edge between any pair of vertices.
*   **Multigraph:** Allows multiple edges between the same pair of vertices.
*   **Pseudograph:** Allows both loops and multiple edges.
*   **Complete Graph:** An undirected graph where every pair of distinct vertices is connected by a unique edge.
*   **Cycle Graph:** A graph that consists of a single cycle.

---

## 3.3 Graph Representation Techniques

The way a graph is stored in memory significantly impacts the efficiency of operations performed on it. The two primary methods are:

### 3.3.1 Adjacency Matrix Representation

*   **Concept:** An `n x n` matrix (where `n` is the number of vertices) is used to represent the graph. The matrix entry `matrix[i][j]` indicates the presence or absence of an edge between vertex `i` and vertex `j`.
*   **For Unweighted Graphs:**
    *   `matrix[i][j] = 1` if there is an edge from vertex `i` to vertex `j`.
    *   `matrix[i][j] = 0` if there is no edge from vertex `i` to vertex `j`.
*   **For Weighted Graphs:**
    *   `matrix[i][j] = weight` if there is an edge from vertex `i` to vertex `j` with the given weight.
    *   `matrix[i][j] = 0` or `∞` (or some sentinel value) if there is no edge.
*   **For Directed Graphs:** The matrix is not necessarily symmetric. `matrix[i][j] = 1` means an edge exists from `i` to `j`.
*   **For Undirected Graphs:** The matrix is symmetric. If `matrix[i][j] = 1`, then `matrix[j][i] = 1`.

**Implementation (Conceptual C-like pseudocode):**

```c
// Assuming vertices are numbered 0 to n-1

// For unweighted graphs
int adjacencyMatrix[MAX_VERTICES][MAX_VERTICES];

// For weighted graphs
int weightedMatrix[MAX_VERTICES][MAX_VERTICES]; // 0 or INF for no edge
```

**Example (Undirected Graph):**

Vertices: {0, 1, 2, 3}
Edges: {(0, 1), (0, 2), (1, 2), (2, 3)}

Adjacency Matrix:
```
     0 1 2 3
  0 [0 1 1 0]
  1 [1 0 1 0]
  2 [1 1 0 1]
  3 [0 0 1 0]
```

**Example (Directed Graph):**

Vertices: {0, 1, 2, 3}
Edges: {(0, 1), (1, 2), (2, 0), (2, 3)}

Adjacency Matrix:
```
     0 1 2 3
  0 [0 1 0 0]
  1 [0 0 1 0]
  2 [1 0 0 1]
  3 [0 0 0 0]
```

**Advantages:**

*   **Fast Edge Check:** Checking if an edge exists between two vertices (`u` and `v`) is O(1) by simply looking up `matrix[u][v]`.
*   **Simple Implementation:** Relatively straightforward to implement.

**Disadvantages:**

*   **Space Inefficiency for Sparse Graphs:** For graphs with many vertices but few edges (sparse graphs), the matrix will be mostly filled with zeros, wasting significant space (O(V^2)).
*   **Inefficient for Finding Neighbors:** To find all neighbors of a vertex, you need to iterate through an entire row (or column), which takes O(V) time.

**Textbook References:**
*   **Horowitz, Sahni, & Anderson-Freed (2/e):** Discusses adjacency matrix in Chapter 10, "Graphs."
*   **Samanta D (2/e):** Covers matrix representation in Chapter 9, "Graphs."

---

### 3.3.2 Adjacency List Representation

*   **Concept:** For each vertex, a list is maintained that stores all the vertices adjacent to it. This is typically implemented using an array of linked lists or an array of dynamic arrays.
*   **For Unweighted Graphs:** Each list contains the names of the adjacent vertices.
*   **For Weighted Graphs:** Each entry in the list can be a pair (or a structure) containing the adjacent vertex and the weight of the edge.
*   **For Directed Graphs:** If there's an edge from `u` to `v`, `v` is added to the adjacency list of `u`.
*   **For Undirected Graphs:** If there's an edge between `u` and `v`, `v` is added to the adjacency list of `u`, and `u` is added to the adjacency list of `v`.

**Implementation (Conceptual C-like pseudocode):**

```c
// Node structure for the linked list
struct AdjListNode {
    int dest;           // Destination vertex
    int weight;         // Edge weight (for weighted graphs)
    struct AdjListNode* next;
};

// Array of linked lists
struct AdjListNode* adjList[MAX_VERTICES]; // Array of pointers to AdjListNode

// For weighted graphs, the AdjListNode would include 'weight'
```

**Example (Undirected Graph):**

Vertices: {0, 1, 2, 3}
Edges: {(0, 1), (0, 2), (1, 2), (2, 3)}

Adjacency List:
*   **Vertex 0:** -> 1 -> 2
*   **Vertex 1:** -> 0 -> 2
*   **Vertex 2:** -> 0 -> 1 -> 3
*   **Vertex 3:** -> 2

**Example (Directed Graph):**

Vertices: {0, 1, 2, 3}
Edges: {(0, 1), (1, 2), (2, 0), (2, 3)}

Adjacency List:
*   **Vertex 0:** -> 1
*   **Vertex 1:** -> 2
*   **Vertex 2:** -> 0 -> 3
*   **Vertex 3:** (empty list)

**Advantages:**

*   **Space Efficient for Sparse Graphs:** The space used is O(V + E), which is much better than O(V^2) for sparse graphs.
*   **Efficient for Finding Neighbors:** Finding all neighbors of a vertex `u` takes O(degree(u)) time, which is generally much faster than O(V) for sparse graphs.

**Disadvantages:**

*   **Slower Edge Check:** Checking if an edge exists between two vertices (`u` and `v`) requires traversing the adjacency list of `u`, which can take O(degree(u)) time in the worst case. For dense graphs, this can approach O(V).

**Textbook References:**
*   **Horowitz, Sahni, & Anderson-Freed (2/e):** Presents adjacency list in Chapter 10.
*   **Samanta D (2/e):** Also covers adjacency list in Chapter 9.
*   **Gilberg & Forouzan (2/e):** Discusses both representations in Chapter 11, "Graphs," with C implementations.

---

### 3.3.3 Edge List Representation

*   **Concept:** A simple list (or array) of all edges in the graph. Each element in the list represents an edge, typically as a pair of vertices (and optionally a weight).
*   **For Directed Graphs:** An edge is represented as `(source, destination)`.
*   **For Undirected Graphs:** An edge is represented as `{vertex1, vertex2}`.

**Implementation (Conceptual C-like pseudocode):**

```c
struct Edge {
    int src, dest;
    int weight; // Optional
};

struct Edge edgeList[MAX_EDGES];
```

**Example (Undirected Graph):**

Vertices: {0, 1, 2, 3}
Edges: {(0, 1), (0, 2), (1, 2), (2, 3)}

Edge List:
*   (0, 1)
*   (0, 2)
*   (1, 2)
*   (2, 3)

**Advantages:**

*   **Simplicity:** Very easy to implement.
*   **Useful for Certain Algorithms:** Some graph algorithms, like Kruskal's algorithm for Minimum Spanning Tree, work directly with an edge list.

**Disadvantages:**

*   **Inefficient for Neighbor Finding:** Finding all neighbors of a vertex requires iterating through the entire edge list, which takes O(E) time.
*   **Inefficient for Edge Existence Check:** Similarly, checking if an edge exists is O(E).

**Textbook References:**
*   **Lipschuts S. (Schaum's Series, 2/e):** Discusses edge lists as a basic representation in its graph chapters.

---

## 3.4 Choosing the Right Representation

The choice of representation depends heavily on the nature of the graph and the operations to be performed:

| Operation              | Adjacency Matrix      | Adjacency List        | Edge List             |
| :--------------------- | :-------------------- | :-------------------- | :-------------------- |
| **Space Complexity**   | O(V^2)                | O(V + E)              | O(E)                  |
| **Edge Existence Check** | O(1)                  | O(degree(u))          | O(E)                  |
| **Finding Neighbors**  | O(V)                  | O(degree(u))          | O(E)                  |
| **Adding Vertex**      | O(V^2) (reallocation) | O(1) (if array resizable) | O(1) (if array resizable) |
| **Adding Edge**        | O(1)                  | O(1)                  | O(1)                  |
| **Removing Vertex**    | O(V^2)                | O(degree(u))          | O(E)                  |
| **Removing Edge**      | O(1)                  | O(degree(u))          | O(E)                  |

*   **Dense Graphs (E is close to V^2):** Adjacency Matrix is often a good choice due to its O(1) edge check.
*   **Sparse Graphs (E is much smaller than V^2):** Adjacency List is significantly more space-efficient and often faster for finding neighbors.
*   **Algorithms processing edges directly (e.g., Kruskal's):** Edge List can be advantageous.

**CO3 Alignment:** Understanding these representations allows us to choose the most suitable one for designing algorithms that utilize trees and graphs, directly impacting efficiency. (Knowledge Level: K3)

---

## 3.5 Key Concepts and Definitions Recap

*   **Graph:** (V, E) - Set of vertices (V) and set of edges (E).
*   **Vertex (Node):** A point in the graph.
*   **Edge:** A connection between two vertices.
*   **Directed Graph:** Edges have direction.
*   **Undirected Graph:** Edges are bidirectional.
*   **Weighted Graph:** Edges have associated costs/weights.
*   **Adjacency Matrix:** V x V matrix where `matrix[i][j]` indicates edge from `i` to `j`.
*   **Adjacency List:** Array of lists, where each list stores neighbors of a vertex.
*   **Edge List:** A list of all edges in the graph.
*   **Sparse Graph:** Few edges relative to the number of vertices.
*   **Dense Graph:** Many edges relative to the number of vertices.

---

## 3.6 Practice Questions & Exercises

**Instructions:** For each question, identify the most appropriate representation (Adjacency Matrix, Adjacency List, or Edge List) and justify your choice.

1.  **Problem:** You need to build a system to recommend friends on a social media platform. The key operation is finding all friends of a given user quickly. The number of users is very large, but each user typically has a relatively small number of friends.
    *   **Question:** Which representation would be most suitable for storing the social network? Explain why.
2.  **Problem:** You are designing an algorithm to detect cycles in a directed graph where edges represent dependencies between tasks. The algorithm requires frequent checks to see if a direct dependency exists between any two tasks. The graph is moderately dense.
    *   **Question:** Which representation would be most efficient for this specific task? Justify your answer.
3.  **Problem:** You are implementing Dijkstra's algorithm to find the shortest path in a road network. The network has many cities (vertices) and roads (edges), and each road has a distance (weight). The graph is relatively sparse.
    *   **Question:** Considering the operations involved in Dijkstra's algorithm (finding neighbors, checking edge weights), which representation would you primarily use and why?
4.  **Problem:** You are given a list of flight connections between cities, where each connection has a price. You need to process these connections to find the cheapest way to travel between any two cities.
    *   **Question:** What is the initial representation of this data, and what might be a more efficient representation for subsequent analysis?

---

## 3.7 Answers to Practice Questions

1.  **Answer:** **Adjacency List**.
    *   **Justification:** The social network is likely **sparse** (each user has far fewer friends than the total number of users). The primary operation is finding all friends of a given user (finding neighbors). The adjacency list excels at this, providing O(degree(u)) time complexity, which is efficient for sparse graphs. The space complexity O(V + E) is also advantageous over O(V^2) for a large number of users.
2.  **Answer:** **Adjacency Matrix**.
    *   **Justification:** The requirement for frequent checks to see if a direct dependency exists between tasks translates to frequent edge existence checks. The adjacency matrix provides O(1) time complexity for this operation. While it uses O(V^2) space, if the graph is moderately dense and edge checking is the bottleneck, the matrix can be more performant.
3.  **Answer:** **Adjacency List** (primarily for processing).
    *   **Justification:** Dijkstra's algorithm involves exploring neighbors and their edge weights. The adjacency list provides an efficient way to find neighbors (O(degree(u))). While edge weights are also needed, they can be stored within the adjacency list structure (e.g., as pairs). The O(V+E) space complexity is beneficial for a sparse road network. An edge list might be used initially to construct the adjacency list, but the adjacency list is generally better for the algorithm's traversal.
4.  **Answer:**
    *   **Initial Representation:** The most natural initial representation is an **Edge List**. The problem statement describes "a list of flight connections," implying each connection is a distinct item (an edge) with its source, destination, and price.
    *   **For Subsequent Analysis:** For many pathfinding algorithms (like finding the cheapest route), an **Adjacency List** would be more efficient. This is because algorithms often need to explore outgoing connections from a city (vertex) to find cheaper routes. The adjacency list allows efficient retrieval of all outgoing flights from a given city.

---

## 3.8 Important Points to Remember

*   The choice between Adjacency Matrix and Adjacency List is a classic trade-off between **space efficiency** (Adjacency List for sparse graphs) and **time efficiency for edge checks** (Adjacency Matrix).
*   Always consider the **density** of your graph when choosing a representation.
*   **Edge List** is simple and useful for specific algorithms but generally less efficient for traversal and neighbor finding.
*   For **weighted graphs**, ensure your chosen representation can store the weights alongside the edge information (e.g., `AdjListNode` with a `weight` field, or weighted entries in the matrix).
*   **Directed graphs** require careful handling of edge direction in both matrix and list representations.

---

This concludes the topic on Graph Representation. Understanding these methods is foundational for implementing and analyzing graph algorithms in subsequent modules, directly contributing to achieving **CO3**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
