---
title: "Representation of Graphs"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs: Trees"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363ef"
status: "completed"
scrapedAt: "2026-05-23T16:20:47.647Z"
---
# DATA STRUCTURES: Module 3: Trees and Graphs: Trees

## Topic: Representation of Graphs

**Module Learning Outcomes (MLOs):** (While specific MLOs for this topic aren't explicitly provided, we will assume they cover understanding and implementing graph representations.)

**Course Outcomes (COs) addressed:**

*   **CO3: Make use of nonlinear data structures like trees and graphs to design algorithms for various applications. (Knowledge Level: K3)** - Understanding graph representations is fundamental to designing algorithms that utilize graphs.

---

### 1. Introduction to Graphs

**Definition:** A graph $G = (V, E)$ is a collection of vertices (or nodes) $V$ and a set of edges $E$ that connect pairs of vertices.

*   **Vertices (V):** Represent entities or objects.
*   **Edges (E):** Represent relationships or connections between vertices.

**Types of Graphs:**

*   **Directed Graph (Digraph):** Edges have a direction. An edge $(u, v)$ means there's a connection from vertex $u$ to vertex $v$.
    *   **Example:** A one-way street in a city.
*   **Undirected Graph:** Edges do not have a direction. An edge $\{u, v\}$ means there's a connection between vertex $u$ and vertex $v$ in both directions.
    *   **Example:** A friendship on social media.
*   **Weighted Graph:** Each edge has an associated weight or cost.
    *   **Example:** The distance between two cities.
*   **Unweighted Graph:** Edges do not have associated weights.
*   **Connected Graph (Undirected):** There is a path between every pair of vertices.
*   **Strongly Connected Graph (Directed):** For every pair of vertices $(u, v)$, there is a path from $u$ to $v$ and a path from $v$ to $u$.
*   **Simple Graph:** No loops (edges connecting a vertex to itself) and no multiple edges between the same pair of vertices.

**Terminology:**

*   **Adjacent Vertices:** Two vertices connected by an edge.
*   **Degree of a Vertex:**
    *   **Undirected:** The number of edges incident to it.
    *   **Directed:**
        *   **In-degree:** Number of edges pointing *to* the vertex.
        *   **Out-degree:** Number of edges pointing *from* the vertex.
*   **Path:** A sequence of vertices where each adjacent pair is connected by an edge.
*   **Cycle:** A path that starts and ends at the same vertex.

---

### 2. Representations of Graphs

The choice of graph representation significantly impacts the efficiency of graph algorithms. The two primary ways to represent graphs are:

*   **Adjacency Matrix**
*   **Adjacency List**

---

#### 2.1. Adjacency Matrix Representation

**Concept:** An adjacency matrix is a square matrix where the rows and columns represent the vertices of the graph. The entries in the matrix indicate the presence or absence of an edge between vertices.

**For an undirected graph with $n$ vertices (labeled 0 to $n-1$):**

*   An $n \times n$ matrix, say `AdjMatrix`.
*   `AdjMatrix[i][j] = 1` if there is an edge between vertex $i$ and vertex $j$.
*   `AdjMatrix[i][j] = 0` otherwise.
*   For an undirected graph, the matrix is symmetric: `AdjMatrix[i][j] = AdjMatrix[j][i]`.

**For a directed graph with $n$ vertices (labeled 0 to $n-1$):**

*   An $n \times n$ matrix, say `AdjMatrix`.
*   `AdjMatrix[i][j] = 1` if there is an edge from vertex $i$ to vertex $j$.
*   `AdjMatrix[i][j] = 0` otherwise.
*   The matrix is not necessarily symmetric.

**For a weighted graph:**

*   `AdjMatrix[i][j]` stores the weight of the edge between $i$ and $j$.
*   If there is no edge, a special value like infinity ($\infty$) or 0 (if edge weights are non-zero) is used.

**Example (Undirected Graph):**

Consider a graph with vertices {0, 1, 2, 3} and edges {(0,1), (0,2), (1,2), (2,3)}.

```
      0   1   2   3
    -----------------
0 |   0   1   1   0
1 |   1   0   1   0
2 |   1   1   0   1
3 |   0   0   1   0
```

**Implementation (Conceptual - C/C++):**

```c++
const int MAX_VERTICES = 100; // Assuming a maximum number of vertices
int adjMatrix[MAX_VERTICES][MAX_VERTICES];
int numVertices;

// Function to add an edge in an undirected graph
void addEdgeUndirected(int u, int v) {
    adjMatrix[u][v] = 1;
    adjMatrix[v][u] = 1; // For undirected graph
}

// Function to add an edge in a directed graph
void addEdgeDirected(int u, int v) {
    adjMatrix[u][v] = 1;
}

// Function to add a weighted edge
void addWeightedEdge(int u, int v, int weight) {
    adjMatrix[u][v] = weight;
    // For undirected weighted graph, also:
    // adjMatrix[v][u] = weight;
}
```

**Space Complexity:** $O(V^2)$, where $V$ is the number of vertices. This is because we need to store an $V \times V$ matrix.

**Time Complexity:**

*   **Checking for an edge (u, v):** $O(1)$.
*   **Adding an edge (u, v):** $O(1)$.
*   **Removing an edge (u, v):** $O(1)$.
*   **Finding all neighbors of a vertex v:** $O(V)$. We need to iterate through the entire row (or column) corresponding to vertex $v$.
*   **Adding/Deleting a vertex:** $O(V^2)$ (requires resizing or creating a new matrix).

**Advantages:**

*   **Fast edge lookup:** Checking if an edge exists is very efficient ($O(1)$).
*   Simple to implement for dense graphs.

**Disadvantages:**

*   **Space inefficient for sparse graphs:** If the number of edges $|E|$ is much smaller than $|V|^2$, a lot of space is wasted.
*   **Slower to find neighbors:** Iterating through all potential neighbors takes $O(V)$ time.
*   Adding/deleting vertices is costly.

**Reference:** Horowitz, Sahni, and Anderson-Freed, Chapter 11 discusses graph representations. They highlight the $O(V^2)$ space complexity and $O(1)$ edge lookup.

---

#### 2.2. Adjacency List Representation

**Concept:** An adjacency list represents a graph using an array (or similar structure) where each element of the array corresponds to a vertex. Each element then stores a list of its adjacent vertices.

**For an undirected graph with $n$ vertices:**

*   An array `AdjList` of size $n$.
*   `AdjList[i]` is a list (e.g., linked list, array list) containing all vertices $j$ such that there is an edge between $i$ and $j$.
*   If vertex $j$ is in `AdjList[i]`, then vertex $i$ is also in `AdjList[j]`.

**For a directed graph with $n$ vertices:**

*   An array `AdjList` of size $n$.
*   `AdjList[i]` is a list containing all vertices $j$ such that there is an edge *from* vertex $i$ *to* vertex $j$.

**For a weighted graph:**

*   Each element in the adjacency list stores not just the adjacent vertex but also the weight of the edge connecting them. This can be a pair or a small structure like `(neighbor_vertex, edge_weight)`.

**Example (Undirected Graph):**

Consider the same graph with vertices {0, 1, 2, 3} and edges {(0,1), (0,2), (1,2), (2,3)}.

```
0: -> 1 -> 2
1: -> 0 -> 2
2: -> 0 -> 1 -> 3
3: -> 2
```

**Implementation (Conceptual - C/C++):**

```c++
#include <vector>
#include <list> // Or use std::vector for adjacency list elements

// Structure to hold vertex and weight for weighted graphs
struct Edge {
    int to_vertex;
    int weight;
};

// Using std::vector of std::list
std::vector<std::list<int>> adjListUndirected; // For unweighted undirected
std::vector<std::list<Edge>> adjListWeighted; // For weighted undirected/directed
int numVertices;

// Function to add an edge in an unweighted undirected graph
void addEdgeUndirected(int u, int v) {
    adjListUndirected[u].push_back(v);
    adjListUndirected[v].push_back(u); // For undirected
}

// Function to add an edge in a weighted directed graph
void addWeightedEdgeDirected(int u, int v, int weight) {
    adjListWeighted[u].push_back({v, weight});
}
```

**Space Complexity:** $O(V + E)$, where $V$ is the number of vertices and $E$ is the number of edges. This is because we store an array of size $V$ and then lists whose total size is $2E$ for undirected graphs and $E$ for directed graphs.

**Time Complexity:**

*   **Checking for an edge (u, v):** $O(\text{degree}(u))$ or $O(\text{degree}(v))$. We need to search the adjacency list of one of the vertices.
*   **Adding an edge (u, v):** $O(1)$ (amortized for vector-based lists).
*   **Removing an edge (u, v):** $O(\text{degree}(u))$ or $O(\text{degree}(v))$ to find the edge in the list.
*   **Finding all neighbors of a vertex v:** $O(\text{degree}(v))$. This is significantly better than adjacency matrix for sparse graphs.
*   **Adding a vertex:** $O(1)$ (if using dynamic arrays/vectors).
*   **Deleting a vertex:** Can be more complex, involving updating lists of other vertices, potentially $O(V+E)$ in worst case if not carefully implemented.

**Advantages:**

*   **Space efficient for sparse graphs:** Ideal when the number of edges $|E|$ is much smaller than $|V|^2$.
*   **Efficiently find neighbors:** Traversing neighbors of a vertex is fast.

**Disadvantages:**

*   **Slower edge lookup:** Checking for an edge $(u, v)$ requires searching the list.
*   Can be slightly more complex to implement than adjacency matrix, especially if using linked lists and managing memory.

**Reference:**
*   **Horowitz, Sahni, and Anderson-Freed:** Discusses adjacency list representation in detail, highlighting its efficiency for sparse graphs. They often use linked lists.
*   **Samanta D. (Classic Data Structures):** Likely covers linked list-based adjacency lists and their performance characteristics.
*   **Gilberg & Forouzan:** Also provides a clear explanation of adjacency lists, often using dynamic arrays or linked lists for implementation.

---

### 3. Comparison of Representations

| Feature                 | Adjacency Matrix                 | Adjacency List                   |
| :---------------------- | :------------------------------- | :------------------------------- |
| **Space Complexity**    | $O(V^2)$                         | $O(V + E)$                       |
| **Edge Lookup (u,v)**   | $O(1)$                           | $O(\text{degree}(u))$            |
| **Finding Neighbors (v)**| $O(V)$                           | $O(\text{degree}(v))$            |
| **Adding Edge (u,v)**   | $O(1)$                           | $O(1)$                           |
| **Removing Edge (u,v)** | $O(1)$                           | $O(\text{degree}(u))$            |
| **Adding Vertex**       | $O(V^2)$                         | $O(1)$ (amortized)               |
| **Deleting Vertex**     | $O(V^2)$                         | $O(V+E)$ (worst case)            |
| **Best For**            | Dense graphs                     | Sparse graphs                    |

---

### 4. When to Use Which Representation

*   **Adjacency Matrix:** Use when the graph is **dense** (i.e., $|E|$ is close to $|V|^2$) or when you need very fast edge checking. For example, if you have a small number of vertices and many connections.
    *   **Example Application:** Representing connectivity in a small, fully connected network.
*   **Adjacency List:** Use when the graph is **sparse** (i.e., $|E|$ is much less than $|V|^2$) or when you frequently need to iterate through the neighbors of a vertex. Most real-world graphs are sparse.
    *   **Example Application:** Social networks, road networks, the internet, representing trees.

---

### 5. Practice Questions and Exercises

**Question 1:**
Consider a graph with 5 vertices, labeled 0 to 4, and the following edges: (0, 1), (0, 4), (1, 2), (1, 3), (1, 4), (2, 3), (3, 4).

a) Draw the graph.
b) Represent this graph using an adjacency matrix.
c) Represent this graph using an adjacency list.
d) What is the space complexity of the adjacency matrix representation for this graph?
e) What is the space complexity of the adjacency list representation for this graph?
f) Which representation is more efficient for this graph and why?

**Answer 1:**

a) **Drawing the graph:**
   *   Draw 5 points labeled 0, 1, 2, 3, 4.
   *   Draw lines between:
      *   0 and 1
      *   0 and 4
      *   1 and 2
      *   1 and 3
      *   1 and 4
      *   2 and 3
      *   3 and 4

b) **Adjacency Matrix (5x5):**
   ```
      0   1   2   3   4
    ---------------------
0 |   0   1   0   0   1
1 |   1   0   1   1   1
2 |   0   1   0   1   0
3 |   0   1   1   0   1
4 |   1   1   0   1   0
   ```

c) **Adjacency List:**
   ```
   0: -> 1 -> 4
   1: -> 0 -> 2 -> 3 -> 4
   2: -> 1 -> 3
   3: -> 1 -> 2 -> 4
   4: -> 0 -> 1 -> 3
   ```

d) **Space complexity (Adjacency Matrix):** $O(V^2) = O(5^2) = O(25)$.

e) **Space complexity (Adjacency List):** $O(V + E)$. Here $V=5$ and $E=7$. So, $O(5 + 7) = O(12)$.

f) **More efficient representation:** Adjacency List.
   **Reason:** The graph is sparse. The number of edges (7) is much less than the maximum possible edges for 5 vertices ($V(V-1)/2 = 5*4/2 = 10$). The adjacency list uses significantly less space ($O(V+E)$ vs $O(V^2)$) and finding neighbors is more efficient ($O(\text{degree}(v))$ vs $O(V)$).

---

**Question 2:**
Which data structure is generally preferred for representing sparse graphs, and why?

**Answer 2:**
The **Adjacency List** is generally preferred for representing sparse graphs.
**Reason:** Sparse graphs have significantly fewer edges than the maximum possible number of edges ($|E| << |V|^2$). The adjacency list has a space complexity of $O(V + E)$, which is much more efficient than the adjacency matrix's $O(V^2)$ space complexity when $E$ is small. Additionally, operations like finding all neighbors of a vertex are faster with an adjacency list ($O(\text{degree}(v))$) compared to an adjacency matrix ($O(V)$).

---

**Question 3:**
Consider a directed graph with 3 vertices (0, 1, 2) and edges (0, 1), (1, 2), (2, 0).

a) Represent this graph using an adjacency matrix.
b) Represent this graph using an adjacency list.
c) If this were a weighted graph with weights: (0, 1) -> 5, (1, 2) -> 3, (2, 0) -> 7, how would the representations change?

**Answer 3:**

a) **Adjacency Matrix (3x3 for directed graph):**
   ```
      0   1   2
    -----------
0 |   0   1   0
1 |   0   0   1
2 |   1   0   0
   ```
   (Note: The matrix is not necessarily symmetric for directed graphs).

b) **Adjacency List (for directed graph):**
   ```
   0: -> 1
   1: -> 2
   2: -> 0
   ```

c) **Weighted Graph Representations:**

   *   **Adjacency Matrix (Weighted):** Entries would store weights. For non-existent edges, we might use infinity or a sentinel value.
      ```
         0   1   2
       -----------
   0 |   0   5   inf
   1 |   inf 0   3
   2 |   7   inf 0
      ```
      (Assuming `inf` represents no direct edge)

   *   **Adjacency List (Weighted):** Each entry in the list would be a pair (neighbor, weight).
      ```
      0: -> (1, 5)
      1: -> (2, 3)
      2: -> (0, 7)
      ```

---

### 6. Important Points to Remember

*   **Graph Representation Choice:** The choice between Adjacency Matrix and Adjacency List is crucial for algorithm efficiency and depends heavily on whether the graph is sparse or dense.
*   **Space vs. Time Trade-off:** Adjacency Matrix offers faster edge lookups ($O(1)$) but uses more space ($O(V^2)$). Adjacency List is space-efficient ($O(V+E)$) for sparse graphs but has slower edge lookups.
*   **Directed vs. Undirected:** The adjacency matrix for undirected graphs is symmetric. For adjacency lists, an edge $(u, v)$ in an undirected graph means $v$ is in $u$'s list, and $u$ is in $v$'s list. In directed graphs, an edge $(u, v)$ means $v$ is in $u$'s list only.
*   **Weighted Graphs:** Representations need to accommodate edge weights. This is typically done by storing weights in the matrix cells or as pairs within the adjacency lists.
*   **Vertex Labeling:** For simplicity, vertices are often assumed to be labeled from 0 to $V-1$. If labels are arbitrary, a mapping (e.g., a hash map) might be needed.

---

### 7. Connection to Course Outcomes

*   **CO3 (Using Trees and Graphs):** Understanding graph representations is the foundational step for utilizing graphs in algorithms. Whether it's graph traversal (like BFS/DFS), shortest path algorithms (like Dijkstra's), or minimum spanning tree algorithms (like Prim's/Kruskal's), these algorithms operate on graphs that are stored using either adjacency matrices or adjacency lists. The efficiency of these algorithms will be directly influenced by the chosen representation. For example, Prim's algorithm using an adjacency list and a priority queue is more efficient for sparse graphs than one using an adjacency matrix.

---
