---
title: "Graphs :- Definitions"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bea5"
status: "completed"
scrapedAt: "2026-05-20T16:52:03.362Z"
---
# Data Structures - Module 3: Trees and Graphs

## Topic: Graphs - Definitions

---

### 1. Introduction to Graphs

Graphs are a fundamental data structure that represent a collection of objects (vertices) and the relationships (edges) between them. They are highly versatile and used in a wide range of applications, from social networks and road maps to computer networks and biological systems.

---

### 2. Key Concepts and Definitions

#### 2.1. Graph (G)

A graph $G$ is formally defined as an ordered pair $(V, E)$, where:

*   **V (Vertices/Nodes):** A finite non-empty set of vertices (also called nodes). These represent the individual objects or entities in the system.
    *   **Example:** In a social network, vertices could represent people. In a road map, vertices could represent cities.
*   **E (Edges):** A set of edges, where each edge is a relationship between two vertices. An edge connects a pair of vertices.
    *   **Example:** In a social network, an edge could represent friendship between two people. In a road map, an edge could represent a road connecting two cities.

#### 2.2. Types of Graphs

The nature of the edges defines different types of graphs:

*   **Undirected Graph:**
    *   Edges have no direction. An edge $(u, v)$ indicates a connection between vertex $u$ and vertex $v$, and this connection is symmetric (i.e., $v$ is also connected to $u$ with the same relationship).
    *   Represented as a set of unordered pairs $\{u, v\}$.
    *   **Example:** Friendship in a social network (if A is friends with B, then B is friends with A).

    ```
       A --- B
       |     |
       C --- D
    ```

*   **Directed Graph (Digraph):**
    *   Edges have a direction. An edge $(u, v)$ indicates a connection from vertex $u$ to vertex $v$. This does not imply a connection from $v$ to $u$.
    *   Represented as a set of ordered pairs $(u, v)$.
    *   **Example:** Following someone on Twitter (if A follows B, B does not necessarily follow A). Website links.

    ```
       A --> B
       ^     |
       |     v
       C <-- D
    ```

#### 2.3. Components of a Graph

*   **Vertex (Node):** Individual elements in the graph.
*   **Edge:** A connection or relationship between two vertices.
*   **Weight:** An optional numerical value assigned to an edge, representing the cost, distance, capacity, or some other attribute of the connection.
    *   **Weighted Graph:** A graph where edges have weights.
        *   **Example:** Distances between cities on a road map.
    *   **Unweighted Graph:** A graph where edges do not have weights (or all weights are implicitly 1).

    ```
       A --(5)-- B
       |       /
      (2)     (3)
       |     /
       C ---
    ```
    (Here, 5, 2, and 3 are weights.)

*   **Incident Edge:** An edge is incident to a vertex if the vertex is one of the endpoints of the edge.
*   **Adjacent Vertices:** Two vertices are adjacent if there is an edge connecting them.
    *   In an undirected graph, if $(u, v) \in E$, then $u$ and $v$ are adjacent.
    *   In a directed graph, if $(u, v) \in E$, then $u$ is adjacent to $v$ (and $v$ is adjacent from $u$).

*   **Degree of a Vertex (Undirected Graph):**
    *   The number of edges incident to a vertex.
    *   **Example:** In an undirected graph, if vertex $A$ is connected to $B$, $C$, and $D$, its degree is 3.
    *   **Handshaking Lemma:** The sum of the degrees of all vertices in an undirected graph is equal to twice the number of edges. $\sum_{v \in V} \text{deg}(v) = 2|E|$.

*   **In-degree and Out-degree (Directed Graph):**
    *   **In-degree:** The number of edges pointing *into* a vertex.
    *   **Out-degree:** The number of edges pointing *out from* a vertex.
    *   **Example:** If vertex $B$ has edges coming from $A$ and $C$, and going to $D$, its in-degree is 2 and its out-degree is 1.
    *   **Sum of degrees:** The sum of in-degrees of all vertices equals the sum of out-degrees of all vertices, and both are equal to the total number of edges. $\sum_{v \in V} \text{in-degree}(v) = \sum_{v \in V} \text{out-degree}(v) = |E|$.

#### 2.4. Types of Edges in Directed Graphs

*   **Edge:** An edge $(u, v)$ means there's a connection from $u$ to $v$.
*   **Self-Loop (or Trivial Edge):** An edge that connects a vertex to itself, e.g., $(v, v)$.

    ```
       A --> B
       ^     ^
       |     |
       +-----|
    ```
    (Self-loop at B)

*   **Multiple Edges (or Parallel Edges):** When there are two or more edges connecting the same pair of vertices in the same direction (for directed graphs) or in the same undirected way.
    *   **Simple Graph:** A graph that does not contain self-loops or multiple edges between the same pair of vertices. Most graph algorithms assume simple graphs unless specified otherwise.
    *   **Multigraph:** A graph that allows multiple edges between the same pair of vertices.

    ```
       A ==> B  (Two directed edges from A to B)
    ```

#### 2.5. Paths and Cycles

*   **Walk:** A sequence of vertices and edges, starting and ending with vertices, where each edge connects its adjacent vertices in the sequence.
    *   Example: $v_0, e_1, v_1, e_2, v_2, \dots, e_k, v_k$, where $e_i = \{v_{i-1}, v_i\}$ (undirected) or $e_i = (v_{i-1}, v_i)$ (directed).
*   **Trail:** A walk in which all edges are distinct.
*   **Path:** A trail in which all vertices are distinct (except possibly the start and end vertices if it's a closed walk).
    *   **Simple Path:** A path where no vertex is repeated.
    *   **Example (Undirected):** A -> B -> D is a path. A -> B -> C -> D is also a path.
    *   **Example (Directed):** A -> B -> D is a path.
*   **Cycle:** A closed walk where the start and end vertices are the same, and all other vertices are distinct. A cycle with $k$ edges also has $k$ vertices.
    *   **Simple Cycle:** A cycle where no vertex is repeated, except for the start/end vertex.
    *   **Example (Undirected):** A -> B -> D -> C -> A is a cycle.
    *   **Example (Directed):** A -> B -> D -> A is a cycle.

    ```
       A ---- B
       | \  / |
       |  \/  |
       C ---- D
    ```
    (Cycle A-B-D-C-A)

*   **Acyclic Graph:** A graph that contains no cycles.
    *   **Directed Acyclic Graph (DAG):** A directed graph with no directed cycles. DAGs are crucial for representing dependencies and ordering (e.g., task scheduling).

#### 2.6. Connectivity

*   **Connected Graph (Undirected):** A graph where there is a path between every pair of distinct vertices.
*   **Disconnected Graph:** A graph that is not connected. It consists of two or more connected components.
*   **Connected Component:** A subgraph in which any two vertices are connected to each other by paths, and which is connected to no additional vertices in the supergraph.

    ```
       A --- B      D --- E
       |     |      |
       C ---------- F
    ```
    (This graph has two connected components: {A, B, C, D, E, F} if C is connected to D, or {A, B, C} and {D, E, F} if not. Assuming C connects to D, it's one component. If there's no link between A,B,C and D,E,F, they are separate components.)

*   **Strongly Connected Graph (Directed):** A directed graph where for every pair of distinct vertices $(u, v)$, there is a path from $u$ to $v$ AND a path from $v$ to $u$.
*   **Weakly Connected Graph (Directed):** A directed graph where if we ignore the direction of edges (i.e., consider its underlying undirected graph), the resulting undirected graph is connected.
*   **Strongly Connected Component (SCC):** A maximal subgraph that is strongly connected.

#### 2.7. Graph Traversal

*   **Graph Traversal:** The process of visiting (checking and/or updating) each vertex in a graph. The two main algorithms are:
    *   **Breadth-First Search (BFS):** Explores the graph layer by layer.
    *   **Depth-First Search (DFS):** Explores as far as possible along each branch before backtracking.

---

### 3. Examples

*   **Social Network:**
    *   Vertices: Users.
    *   Edges: Friendships (undirected).
    *   Weighted edges could represent the strength of friendship.
*   **Road Map:**
    *   Vertices: Cities.
    *   Edges: Roads connecting cities (undirected).
    *   Weighted edges: Distances or travel times.
*   **World Wide Web:**
    *   Vertices: Web pages.
    *   Edges: Hyperlinks between pages (directed).
*   **Computer Network:**
    *   Vertices: Computers, routers.
    *   Edges: Network cables or wireless connections (can be directed or undirected, weighted by bandwidth).
*   **Task Scheduling:**
    *   Vertices: Tasks.
    *   Edges: Dependencies between tasks (directed, e.g., Task A must be completed before Task B). This often forms a DAG.

---

### 4. Practice Questions

1.  **Definition:** What are the two primary components of a graph?
2.  **Types:** Differentiate between an undirected graph and a directed graph. Provide a real-world example for each.
3.  **Degree:** In an undirected graph, if a vertex is connected to 4 other distinct vertices, what is its degree?
4.  **Directed Degrees:** If a vertex $X$ has 3 edges entering it and 2 edges leaving it, what is its in-degree and out-degree?
5.  **Connectivity:** What is the condition for an undirected graph to be called "connected"?
6.  **Cycles:** What makes a graph "acyclic"?
7.  **Simple Graph:** Does a simple graph allow self-loops? Does it allow multiple edges between the same two vertices?
8.  **Weighted Graph:** Can an edge in a graph have a weight? If so, what does the weight represent?
9.  **Draw:** Draw a directed graph with 4 vertices (A, B, C, D) that has the following properties:
    *   An edge from A to B.
    *   An edge from B to C.
    *   An edge from C to A (forming a cycle).
    *   An edge from B to D.
    *   An edge from D to B (forming another cycle).
    *   A self-loop at vertex D.

---

### 5. Answers to Practice Questions

1.  The two primary components of a graph are **Vertices (V)** and **Edges (E)**.
2.  *   **Undirected Graph:** Edges have no direction. The relationship is symmetric. Example: Friendship on Facebook.
    *   **Directed Graph:** Edges have a direction. The relationship is asymmetric. Example: Following on Twitter.
3.  Its degree is **4**.
4.  Its in-degree is **3**, and its out-degree is **2**.
5.  An undirected graph is connected if there is a path between every pair of distinct vertices.
6.  A graph is acyclic if it contains no cycles.
7.  A simple graph **does not** allow self-loops or multiple edges between the same two vertices.
8.  Yes, an edge can have a weight. The weight represents an associated cost, distance, capacity, or other numerical attribute of the connection.
9.  **(Drawing of the directed graph):**

    ```
        A --> B
        ^     | \
        |     v  v
        +-----C  D <--+
              ^      |
              |------|
    ```
    *(Note: The self-loop at D is a small circle originating and ending at D)*

    Let's represent it more formally:
    *   Vertices: {A, B, C, D}
    *   Edges: {(A, B), (B, C), (C, A), (B, D), (D, B), (D, D)}

---

### 6. Important Points to Remember

*   Graphs are versatile for representing relationships.
*   The distinction between **directed** and **undirected** graphs is crucial.
*   **Simple graphs** are the most common assumption (no self-loops, no multiple edges).
*   **Weights** add another dimension to graph representation.
*   Understanding **degrees** (in/out for directed) helps analyze vertex importance.
*   **Paths** and **cycles** are fundamental to graph traversal and analysis.
*   **Connectivity** (connected components, strong/weak connectivity) determines how the graph is structured and navigable.
*   **DAGs** (Directed Acyclic Graphs) have special properties useful for ordering and dependencies.
