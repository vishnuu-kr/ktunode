---
title: "Graphs – representation of graphs"
subject: "INTRODUCTION TO ALGORITHM"
module: "Module 2: Trees "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cbc9"
status: "completed"
scrapedAt: "2026-05-20T17:25:10.790Z"
---
# Introduction to Algorithms - Module 2: Trees

## Topic: Graphs – Representation of Graphs

This module introduces the fundamental concept of **Graphs** as a data structure and explores different methods for their representation, which is crucial for efficiently designing and analyzing algorithms that operate on them.

---

### **Learning Outcomes:**

By the end of this topic, you will be able to:

*   **Understand the basic definition and components of a graph.**
*   **Differentiate between various types of graphs (undirected, directed, weighted, etc.).**
*   **Explain and implement common graph representation techniques: Adjacency Matrix and Adjacency List.**
*   **Analyze the space and time complexity of different graph representations.**
*   **Choose the most appropriate graph representation based on the specific problem requirements.**

---

### **1. Introduction to Graphs**

**Definition:**
A graph is a mathematical structure consisting of a set of **vertices (or nodes)** and a set of **edges** that connect pairs of vertices.

**Key Components:**

*   **Vertices (V):** The fundamental units of a graph. They can represent objects, entities, locations, etc.
    *   *Example:* In a social network graph, vertices could represent people. In a road network graph, vertices could represent cities.
*   **Edges (E):** The connections or relationships between pairs of vertices.
    *   *Example:* In a social network graph, an edge could represent a friendship. In a road network graph, an edge could represent a road connecting two cities.

**Notation:**
A graph is typically denoted as $G = (V, E)$, where $V$ is the set of vertices and $E$ is the set of edges.

**Types of Graphs:**

*   **Undirected Graph:** The edges have no direction. If there's an edge between vertex A and vertex B, it means A is connected to B and B is connected to A.
    *   *Notation:* Edge is represented as $(u, v)$ or $\{u, v\}$. The order doesn't matter.
    *   *Example:* A friendship graph on Facebook (if A is friends with B, B is friends with A).

*   **Directed Graph (Digraph):** The edges have a direction. An edge from vertex A to vertex B means there's a connection from A to B, but not necessarily from B to A.
    *   *Notation:* Edge is represented as $(u, v)$, indicating a directed edge from $u$ to $v$. The order matters.
    *   *Example:* A website's hyperlink structure (page A links to page B doesn't mean page B links to page A).

*   **Weighted Graph:** Each edge in the graph is assigned a numerical **weight** or **cost**.
    *   *Example:* In a road network, the weight of an edge could represent the distance or travel time between two cities. In a social network, weights could represent the strength of a connection.

*   **Unweighted Graph:** Edges do not have associated weights.

*   **Simple Graph:** A graph that does not have:
    *   **Self-loops:** An edge connecting a vertex to itself (e.g., $(v, v)$).
    *   **Multiple edges:** More than one edge connecting the same pair of vertices.

*   **Multigraph:** A graph that allows multiple edges between the same pair of vertices.

*   **Connected Graph (Undirected):** For every pair of vertices $(u, v)$, there is a path from $u$ to $v$.
*   **Strongly Connected Graph (Directed):** For every pair of vertices $(u, v)$, there is a directed path from $u$ to $v$ AND a directed path from $v$ to $u$.

---

### **2. Representation of Graphs**

The way we store a graph in computer memory significantly impacts the efficiency of algorithms that operate on it. Two primary methods are:

#### **2.1. Adjacency Matrix**

**Concept:**
An adjacency matrix is a square matrix where the rows and columns represent the vertices of the graph. The entry at $matrix[i][j]$ indicates whether there is an edge between vertex $i$ and vertex $j$.

**Implementation:**

*   Let $V$ be the number of vertices, typically indexed from $0$ to $V-1$.
*   An adjacency matrix $A$ will be a $V \times V$ matrix.

**For Undirected Graphs:**
*   $A[i][j] = 1$ if there is an edge between vertex $i$ and vertex $j$.
*   $A[i][j] = 0$ if there is no edge between vertex $i$ and vertex $j$.
*   Since the graph is undirected, $A[i][j] = A[j][i]$. The matrix is symmetric.
*   For simple graphs, $A[i][i] = 0$ (no self-loops).

**For Directed Graphs:**
*   $A[i][j] = 1$ if there is an edge from vertex $i$ to vertex $j$.
*   $A[i][j] = 0$ if there is no edge from vertex $i$ to vertex $j$.
*   The matrix is not necessarily symmetric.

**For Weighted Graphs:**
*   $A[i][j] =$ weight of the edge between vertex $i$ and vertex $j$.
*   If there is no edge, $A[i][j]$ can be represented by a special value like $\infty$ (infinity) or 0 (if weights are strictly positive and 0 implies no edge).

**Example (Undirected, Unweighted):**

Consider a graph with vertices {0, 1, 2, 3} and edges {(0,1), (0,2), (1,2), (2,3)}.

```
   0 1 2 3
0 [0 1 1 0]
1 [1 0 1 0]
2 [1 1 0 1]
3 [0 0 1 0]
```

**Example (Directed, Weighted):**

Consider a graph with vertices {0, 1, 2} and edges {(0,1, weight=5), (1,2, weight=3), (2,0, weight=2)}.

```
   0  1  2
0 [0  5  0]
1 [0  0  3]
2 [2  0  0]
```

**Space Complexity:**
*   $O(V^2)$, where $V$ is the number of vertices. This is because we always store a $V \times V$ matrix, regardless of the number of edges.

**Time Complexity:**

*   **Checking for an edge between two vertices $(u, v)$:** $O(1)$. We just look up $A[u][v]$.
*   **Adding an edge:** $O(1)$. Set $A[u][v]$ to the appropriate value.
*   **Removing an edge:** $O(1)$. Set $A[u][v]$ to 0 or $\infty$.
*   **Finding all neighbors of a vertex $v$:** $O(V)$. We need to iterate through the entire row (or column) corresponding to vertex $v$ in the matrix.
*   **Adding a vertex:** $O(V^2)$ (requires resizing the matrix).
*   **Removing a vertex:** $O(V^2)$ (requires creating a new smaller matrix and copying elements).

**Pros:**
*   Efficient for dense graphs (graphs with many edges, close to $V^2$).
*   Quick to check for the existence of an edge.

**Cons:**
*   Wastes space for sparse graphs (graphs with few edges, much less than $V^2$).
*   Iterating through neighbors is slower than with an adjacency list for sparse graphs.
*   Adding/removing vertices is expensive.

---

#### **2.2. Adjacency List**

**Concept:**
An adjacency list uses an array (or list) of lists. For each vertex, there is a list that stores all the vertices adjacent to it (i.e., connected by an edge).

**Implementation:**

*   An array (or dynamic array/vector) of size $V$, where each element `adj[i]` is a list (e.g., linked list, vector) storing the neighbors of vertex $i$.

**For Undirected Graphs:**
*   If there's an edge between $u$ and $v$, then $v$ is added to `adj[u]` and $u$ is added to `adj[v]`.

**For Directed Graphs:**
*   If there's an edge from $u$ to $v$, then $v$ is added to `adj[u]`.

**For Weighted Graphs:**
*   Each entry in the adjacency list can be a pair or a structure containing the neighbor vertex and the weight of the edge.

**Example (Undirected, Unweighted):**

Consider the same graph with vertices {0, 1, 2, 3} and edges {(0,1), (0,2), (1,2), (2,3)}.

```
adj[0]: [1, 2]
adj[1]: [0, 2]
adj[2]: [0, 1, 3]
adj[3]: [2]
```

**Example (Directed, Weighted):**

Consider the same graph with vertices {0, 1, 2} and edges {(0,1, weight=5), (1,2, weight=3), (2,0, weight=2)}.

```
adj[0]: [(1, 5)]
adj[1]: [(2, 3)]
adj[2]: [(0, 2)]
```

**Space Complexity:**
*   $O(V + E)$, where $V$ is the number of vertices and $E$ is the number of edges. This is because we store an array of size $V$ and each edge is stored twice (once for each endpoint in an undirected graph) or once (in a directed graph) in the lists.

**Time Complexity:**

*   **Checking for an edge between two vertices $(u, v)$:** $O(\text{degree}(u))$ or $O(V)$ in the worst case, as we might have to scan the entire adjacency list of $u$. For a directed graph, it's $O(\text{out-degree}(u))$.
*   **Adding an edge:** $O(1)$ (amortized for dynamic arrays). Append the neighbor to the list.
*   **Removing an edge:** $O(\text{degree}(u))$ or $O(V)$ in the worst case, as we need to find the edge in the list.
*   **Finding all neighbors of a vertex $v$:** $O(\text{degree}(v))$, which is efficient for sparse graphs.
*   **Adding a vertex:** $O(1)$ (amortized for dynamic arrays). Add a new empty list.
*   **Removing a vertex:** $O(V + E)$ (to remove all occurrences of the vertex from other adjacency lists).

**Pros:**
*   Efficient for sparse graphs.
*   Quick to find all neighbors of a vertex.
*   Adding vertices is efficient.

**Cons:**
*   Checking for an edge between two specific vertices can be slower than with an adjacency matrix.
*   Removing vertices can be more complex.

---

### **3. Choosing the Right Representation**

The choice between Adjacency Matrix and Adjacency List depends on the characteristics of the graph and the operations that will be performed most frequently:

*   **Use Adjacency Matrix when:**
    *   The graph is **dense** (number of edges is close to $V^2$).
    *   You need to frequently check for the existence of an edge between any two vertices ($O(1)$ lookup).
    *   The number of vertices is relatively small, so $V^2$ space is manageable.

*   **Use Adjacency List when:**
    *   The graph is **sparse** (number of edges is significantly less than $V^2$). This is very common in real-world applications.
    *   You need to frequently iterate over the neighbors of a vertex.
    *   Space efficiency is a major concern.
    *   You anticipate adding vertices frequently.

**Common Scenarios:**

*   **Social Networks:** Usually sparse, adjacency list is preferred.
*   **Road Networks:** Can be dense or sparse depending on the scale, but generally adjacency list is good for larger networks.
*   **Web Link Structures:** Very sparse, adjacency list is ideal.
*   **Adjacency Matrix:** Useful for dense graphs, like representing connections in a small, fully connected system.

---

### **4. Practice Questions and Exercises**

**Question 1:**
Consider the following undirected graph:
Vertices: {A, B, C, D, E}
Edges: {(A, B), (A, C), (B, D), (C, D), (C, E), (D, E)}

a) Draw the graph.
b) Represent this graph using an Adjacency Matrix.
c) Represent this graph using an Adjacency List.

**Answer 1:**

a) **Drawing the graph:** (Imagine a drawing with 5 circles for vertices A-E and lines connecting them as per the edges).

b) **Adjacency Matrix (Assuming alphabetical order A=0, B=1, C=2, D=3, E=4):**

```
   A B C D E
A [0 1 1 0 0]
B [1 0 0 1 0]
C [1 0 0 1 1]
D [0 1 1 0 1]
E [0 0 1 1 0]
```

c) **Adjacency List:**

```
adj[A]: [B, C]
adj[B]: [A, D]
adj[C]: [A, D, E]
adj[D]: [B, C, E]
adj[E]: [C, D]
```

**Question 2:**
Analyze the time complexity of finding all neighbors of vertex 'C' in Question 1 for both Adjacency Matrix and Adjacency List representations.

**Answer 2:**

*   **Adjacency Matrix:** To find all neighbors of 'C' (index 2), we need to iterate through the entire row or column corresponding to 'C'. This involves checking $V$ entries (where $V=5$). So, the time complexity is $O(V)$.
*   **Adjacency List:** To find all neighbors of 'C', we just need to access `adj[C]`. The number of neighbors (degree of C) is 3. So, the time complexity is $O(\text{degree}(C))$, which is $O(3)$ in this case. In general, it's $O(\text{degree}(V))$.

**Question 3:**
What is the space complexity of representing a graph with $V$ vertices and $E$ edges using an Adjacency Matrix? What if the graph is sparse?

**Answer 3:**
The space complexity of an Adjacency Matrix is always $O(V^2)$, regardless of whether the graph is sparse or dense. For sparse graphs, this representation can be very inefficient in terms of space because most of the matrix entries will be zero (or $\infty$), indicating no edges.

**Question 4:**
When would you prefer an Adjacency List over an Adjacency Matrix? Give a real-world example where this preference is evident.

**Answer 4:**
You would prefer an Adjacency List over an Adjacency Matrix when the graph is sparse and space efficiency is important, or when you frequently need to iterate over the neighbors of a vertex.

**Real-world example:**
**The World Wide Web:** The web can be modeled as a directed graph where web pages are vertices and hyperlinks are directed edges. The web is extremely sparse; a single web page links to a tiny fraction of all other web pages. Representing this using an Adjacency Matrix would require an astronomically large matrix (billions of pages squared), most of which would be empty. An Adjacency List is the only feasible representation due to its $O(V+E)$ space complexity.

---

### **Important Points to Remember:**

*   **Graph Components:** Vertices ($V$) and Edges ($E$).
*   **Graph Types:** Undirected vs. Directed, Weighted vs. Unweighted, Simple vs. Multigraph.
*   **Adjacency Matrix:** $V \times V$ matrix, $O(V^2)$ space. $O(1)$ edge check, $O(V)$ neighbor iteration. Good for dense graphs.
*   **Adjacency List:** Array of lists, $O(V+E)$ space. $O(\text{degree}(v))$ edge check, $O(\text{degree}(v))$ neighbor iteration. Good for sparse graphs.
*   **Choice of Representation:** Driven by graph density and the frequency of operations. Sparsity heavily favors Adjacency Lists.
*   **Weighted Graphs:** Store weights with edges in the chosen representation.

---

This concludes the topic on Graph Representation. Understanding these concepts is fundamental for implementing and analyzing graph algorithms like Breadth-First Search (BFS), Depth-First Search (DFS), Dijkstra's algorithm, and others.
