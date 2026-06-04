---
title: "Graphs"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs: Trees"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363ee"
status: "completed"
scrapedAt: "2026-05-23T16:20:46.889Z"
---
# Data Structures: Module 3 - Trees and Graphs: Graphs

**Module Overview:** This module introduces the fundamental concepts of trees and graphs, two essential non-linear data structures that are crucial for modeling complex relationships and designing efficient algorithms. We will begin by exploring trees and their applications, followed by a detailed study of graphs, their representations, and common traversal algorithms.

**Course Outcomes Addressed in this Topic:**
*   **CO3:** Make use of nonlinear data structures like trees and graphs to design algorithms for various applications. (Knowledge Level: K3)

---

## 3.1 Introduction to Graphs

Graphs are a powerful and versatile data structure used to represent relationships between objects. They are abstract mathematical structures that find applications in a vast array of fields, including computer science, social networks, transportation, biology, and more.

### 3.1.1 Key Concepts and Definitions

*   **Graph (G):** A graph is a collection of vertices (or nodes) and edges that connect pairs of vertices.
    *   **Vertices (V):** The fundamental entities or points in a graph. Represented as nodes.
    *   **Edges (E):** The connections or links between pairs of vertices. Represented as lines.

*   **Formal Definition:** A graph $G = (V, E)$, where $V$ is a finite set of vertices and $E$ is a finite set of pairs of vertices.

*   **Types of Graphs:**

    *   **Undirected Graph:** In an undirected graph, the edges have no direction. An edge between vertex $u$ and vertex $v$ can be traversed in either direction. The edge is represented as an unordered pair $\{u, v\}$.
        *   *Example:* A friendship network where if A is friends with B, then B is also friends with A.

    *   **Directed Graph (Digraph):** In a directed graph, the edges have a specific direction. An edge from vertex $u$ to vertex $v$ implies a one-way connection. The edge is represented as an ordered pair $(u, v)$.
        *   *Example:* A website where links point from one page to another.

    *   **Weighted Graph:** A graph where each edge is assigned a numerical value, typically representing cost, distance, or capacity.
        *   *Example:* A road map where the weight of an edge represents the distance between two cities.

    *   **Unweighted Graph:** A graph where edges do not have associated weights.

    *   **Simple Graph:** A graph that does not contain any loops (an edge connecting a vertex to itself) or multiple edges between the same pair of vertices.

    *   **Multigraph:** A graph that allows multiple edges between the same pair of vertices.

    *   **Pseudograph:** A graph that allows both loops and multiple edges.

*   **Key Terminology:**

    *   **Adjacent Vertices:** Two vertices are adjacent if there is an edge connecting them.
    *   **Incident Edge:** An edge is incident to a vertex if it connects to that vertex.
    *   **Degree of a Vertex (Undirected Graph):** The number of edges incident to a vertex.
        *   **In-degree:** The number of edges directed *into* a vertex.
        *   **Out-degree:** The number of edges directed *out of* a vertex.
    *   **Path:** A sequence of vertices $v_0, v_1, \dots, v_k$ such that there is an edge between $v_i$ and $v_{i+1}$ for all $0 \le i < k$.
    *   **Simple Path:** A path where all vertices are distinct.
    *   **Cycle:** A path where the starting and ending vertices are the same ($v_0 = v_k$) and all other vertices are distinct.
    *   **Connected Graph (Undirected):** A graph where there is a path between every pair of vertices.
    *   **Strongly Connected Graph (Directed):** A directed graph where for every pair of vertices $(u, v)$, there is a path from $u$ to $v$ and a path from $v$ to $u$.
    *   **Weakly Connected Graph (Directed):** A directed graph that is connected when all directed edges are replaced by undirected edges.
    *   **Tree (as a special graph):** A connected undirected graph with no cycles. Also, a connected graph with $|V|$ vertices and $|V|-1$ edges is a tree.

### 3.1.2 Examples

**Example 1: Undirected Graph**

Consider the following undirected graph:

Vertices: {A, B, C, D}
Edges: {(A, B), (A, C), (B, C), (C, D)}

*   A and B are adjacent.
*   Edge (A, B) is incident to A and B.
*   Degree of A = 2 (edges (A, B), (A, C))
*   Degree of B = 2 (edges (A, B), (B, C))
*   Degree of C = 3 (edges (A, C), (B, C), (C, D))
*   Degree of D = 1 (edge (C, D))
*   Path from A to D: A -> C -> D

**Example 2: Directed Graph**

Consider the following directed graph:

Vertices: {1, 2, 3, 4}
Edges: {(1, 2), (1, 3), (2, 3), (3, 1), (3, 4), (4, 4)}

*   1 -> 2 means an edge from 1 to 2.
*   In-degree of 1 = 1 (from 3)
*   Out-degree of 1 = 2 (to 2, to 3)
*   Vertex 4 has a loop (4, 4).
*   A cycle exists: 1 -> 2 -> 3 -> 1

**Example 3: Weighted Graph**

Consider a road network between cities:

Vertices: {CityA, CityB, CityC}
Edges: {(CityA, CityB, 100), (CityA, CityC, 150), (CityB, CityC, 50)}
Weights represent distances in kilometers.

---

## 3.2 Graph Representations

There are two primary ways to represent graphs in computer memory:

1.  **Adjacency Matrix**
2.  **Adjacency List**

### 3.2.1 Adjacency Matrix

An adjacency matrix is a 2D array where the size of the array is $|V| \times |V|$.

*   **Undirected Graph:**
    *   If there is an edge between vertex $i$ and vertex $j$, then `matrix[i][j] = 1` (or the weight if it's a weighted graph).
    *   Otherwise, `matrix[i][j] = 0` (or infinity for weighted graphs).
    *   The matrix is symmetric: `matrix[i][j] = matrix[j][i]`.

*   **Directed Graph:**
    *   If there is an edge from vertex $i$ to vertex $j$, then `matrix[i][j] = 1` (or the weight).
    *   Otherwise, `matrix[i][j] = 0` (or infinity).

#### **Space Complexity:** $O(|V|^2)$

#### **Advantages:**
*   Checking for the existence of an edge between two vertices is $O(1)$.
*   Adding or removing an edge is $O(1)$.

#### **Disadvantages:**
*   Requires $O(|V|^2)$ space, which can be inefficient for sparse graphs (graphs with few edges).
*   Iterating through all neighbors of a vertex takes $O(|V|)$ time, even if the vertex has only a few neighbors.
