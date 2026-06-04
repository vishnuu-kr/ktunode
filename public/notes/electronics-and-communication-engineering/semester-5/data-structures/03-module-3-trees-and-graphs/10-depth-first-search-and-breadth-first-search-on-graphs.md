---
title: "Depth First Search and Breadth First Search on Graphs"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea1a"
status: "completed"
scrapedAt: "2026-05-23T17:55:14.636Z"
---
# Data Structures: Module 3 - Trees and Graphs

## Topic: Depth First Search and Breadth First Search on Graphs

---

**Course Outcomes Addressed:**

*   **CO3:** Make use of nonlinear data structures like trees and graphs to design algorithms for various applications. (Knowledge Level: K3)
*   **CO4:** Apply and compare various techniques for searching and sorting. (Knowledge Level: K3)

---

### 1. Introduction to Graphs

Graphs are a fundamental nonlinear data structure used to represent relationships between objects. They consist of a set of **vertices** (or nodes) and a set of **edges** that connect pairs of vertices.

*   **Definition:** A graph $G = (V, E)$ is a pair where $V$ is a finite set of vertices and $E$ is a finite set of edges, where each edge is an unordered pair of distinct vertices.
*   **Directed Graphs (Digraphs):** Edges have a direction. An edge $(u, v)$ connects vertex $u$ to vertex $v$.
*   **Undirected Graphs:** Edges do not have a direction. An edge $\{u, v\}$ connects vertex $u$ and vertex $v$.
*   **Weighted Graphs:** Edges are assigned a weight or cost.
*   **Applications:**
    *   Social networks (vertices are people, edges are friendships).
    *   Road networks (vertices are cities, edges are roads).
    *   The Internet (vertices are computers, edges are connections).
    *   State transitions in finite automata.
    *   Dependency relationships.

**Representation of Graphs:**

Graphs can be represented in several ways:

*   **Adjacency Matrix:** A 2D array where `matrix[i][j]` is 1 (or weight) if there's an edge from vertex `i` to vertex `j`, and 0 otherwise.
    *   **Pros:** Fast edge checking (O(1)).
    *   **Cons:** Space complexity is $O(V^2)$, which can be inefficient for sparse graphs.
*   **Adjacency List:** An array of lists, where each index `i` corresponds to a vertex, and the list at `i` contains all vertices adjacent to `i`.
    *   **Pros:** Space complexity is $O(V + E)$, efficient for sparse graphs.
    *   **Cons:** Edge checking can take $O(degree(v))$ time.

*(Refer to Horowitz, Sahni, and Anderson-Freed, Chapter 7 for detailed representation methods.)*

---

### 2. Graph Traversal: The Core Idea

Graph traversal algorithms systematically visit all the vertices in a graph, starting from a specified source vertex. The order of visitation defines the traversal method. The two most common traversal techniques are Depth First Search (DFS) and Breadth First Search (BFS).

**Key Concepts in Traversal:**

*   **Visited Set:** A mechanism to keep track of vertices that have already been visited to avoid infinite loops and redundant processing.
*   **Source Vertex:** The starting point for the traversal.
*   **Frontier/Queue/Stack:** Data structures used to manage the vertices to be visited next.

---

### 3. Depth First Search (DFS)

DFS explores as far as possible along each branch before backtracking. It uses a **stack** (implicitly or explicitly) to keep track of vertices to visit.

#### 3.1 Algorithm Description

1.  Mark the current vertex as visited.
2.  For each unvisited neighbor of the current vertex, recursively call DFS on that neighbor.

#### 3.2 Pseudocode (Recursive)

```pseudocode
DFS(vertex u):
  Mark u as visited
  // Process vertex u (e.g., print it)
  For each neighbor v of u:
    If v is not visited:
      DFS(v)
```

#### 3.3 Pseudocode (Iterative using Stack)

```pseudocode
DFS_Iterative(start_vertex):
  Create an empty stack S
  Push start_vertex onto S

  While S is not empty:
    Pop a vertex u from S
    If u is not visited:
      Mark u as visited
      // Process vertex u
      For each neighbor v of u:
        If v is not visited:
          Push v onto S
```

#### 3.4 How it Works: The "Depth" Aspect

DFS goes "deep" into a branch. Imagine exploring a maze: DFS would go down one path as far as it can, then backtrack to the last junction and try another path.

#### 3.5 Example

Consider the following undirected graph:

```
  A --- B --- D
  |     |
  C --- E
```

Adjacency List Representation:

*   A: [B, C]
*   B: [A, D, E]
*   C: [A, E]
*   D: [B]
*   E: [B, C]

Let's perform DFS starting from vertex 'A':

1.  **Start at A:** Mark A visited. Push neighbors B, C onto stack (order depends on adjacency list). Let's say C is pushed first, then B. Stack: [C, B]
2.  **Pop B:** Mark B visited. Push neighbors A (visited), D, E. Stack: [C, D, E]
3.  **Pop E:** Mark E visited. Push neighbors B (visited), C. Stack: [C, D, C]
4.  **Pop C:** Mark C visited. Push neighbors A (visited), E (visited). Stack: [C, D]
5.  **Pop D:** Mark D visited. Push neighbor B (visited). Stack: [C]
6.  **Pop C:** C is already visited. Stack: []

**Traversal Order (example): A -> B -> E -> C -> D**

*(Refer to Samanta D, Chapter 5 for detailed DFS algorithms and examples.)*

#### 3.6 Time and Space Complexity

*   **Time Complexity:** $O(V + E)$ where $V$ is the number of vertices and $E$ is the number of edges. Each vertex and each edge is visited at most once.
*   **Space Complexity:** $O(V)$ in the worst case for the recursion stack (or the explicit stack in the iterative version). This happens when the graph is a long chain.

#### 3.7 Applications of DFS

*   **Finding connected components:** In an undirected graph, DFS can be used to find all vertices reachable from a starting vertex.
*   **Topological Sorting:** For Directed Acyclic Graphs (DAGs), DFS can determine a linear ordering of vertices such that for every directed edge $(u, v)$, vertex $u$ comes before vertex $v$ in the ordering.
*   **Cycle Detection:** Detecting cycles in both directed and undirected graphs.
*   **Pathfinding:** Finding a path between two vertices.

*(Refer to Gilberg and Forouzan, Chapter 10 for DFS applications.)*

---

### 4. Breadth First Search (BFS)

BFS explores the graph level by level. It visits all neighbors of a vertex before moving to the next level of neighbors. It uses a **queue** to keep track of vertices to visit.

#### 4.1 Algorithm Description

1.  Mark the current vertex as visited.
2.  Enqueue the current vertex.
3.  While the queue is not empty:
    a. Dequeue a vertex `u`.
    b. For each unvisited neighbor `v` of `u`:
        i. Mark `v` as visited.
        ii. Enqueue `v`.

#### 4.2 Pseudocode

```pseudocode
BFS(start_vertex):
  Create an empty queue Q
  Mark start_vertex as visited
  Enqueue start_vertex onto Q

  While Q is not empty:
    Dequeue a vertex u from Q
    // Process vertex u
    For each neighbor v of u:
      If v is not visited:
        Mark v as visited
        Enqueue v onto Q
```

#### 4.3 How it Works: The "Breadth" Aspect

BFS explores the graph outwards from the source, like ripples on a pond. It finds all vertices at distance 1, then all vertices at distance 2, and so on.

#### 4.4 Example

Using the same graph:

```
  A --- B --- D
  |     |
  C --- E
```

Adjacency List Representation:

*   A: [B, C]
*   B: [A, D, E]
*   C: [A, E]
*   D: [B]
*   E: [B, C]

Let's perform BFS starting from vertex 'A':

1.  **Start at A:** Mark A visited. Enqueue A. Queue: [A]
2.  **Dequeue A:** Process A. Neighbors B, C. Mark B, C visited. Enqueue B, C. Queue: [B, C]
3.  **Dequeue B:** Process B. Neighbors A (visited), D, E. Mark D, E visited. Enqueue D, E. Queue: [C, D, E]
4.  **Dequeue C:** Process C. Neighbors A (visited), E (visited). Queue: [D, E]
5.  **Dequeue D:** Process D. Neighbor B (visited). Queue: [E]
6.  **Dequeue E:** Process E. Neighbors B (visited), C (visited). Queue: []

**Traversal Order (example): A -> B -> C -> D -> E**

*(Refer to Horowitz, Sahni, and Anderson-Freed, Chapter 7 for detailed BFS algorithms and examples.)*

#### 4.5 Time and Space Complexity

*   **Time Complexity:** $O(V + E)$ where $V$ is the number of vertices and $E$ is the number of edges. Each vertex and each edge is visited at most once.
*   **Space Complexity:** $O(V)$ in the worst case for the queue. This happens when a level has many vertices.

#### 4.6 Applications of BFS

*   **Shortest Path in Unweighted Graphs:** BFS finds the shortest path (in terms of number of edges) from a source vertex to all other reachable vertices. This is a crucial application.
*   **Finding connected components:** Similar to DFS, BFS can identify connected components.
*   **Web Crawling:** BFS is often used to crawl web pages, starting from a seed URL and exploring links level by level.
*   **Network Broadcasting:** In a network, BFS can be used to broadcast a message to all reachable nodes.

*(Refer to Brass, Chapter 3 for BFS applications and its relation to shortest paths.)*

---

### 5. Comparing DFS and BFS

| Feature              | Depth First Search (DFS)                                  | Breadth First Search (BFS)                                     |
| :------------------- | :-------------------------------------------------------- | :------------------------------------------------------------- |
| **Exploration**      | Goes as deep as possible along each branch.               | Explores level by level.                                       |
| **Data Structure**   | Stack (explicit or implicit via recursion)                | Queue                                                          |
| **Path Finding**     | Finds *a* path, not necessarily the shortest.             | Finds the shortest path (in terms of edges) in unweighted graphs. |
| **Space Complexity** | $O(V)$ for recursion stack/explicit stack.                | $O(V)$ for queue.                                              |
| **Time Complexity**  | $O(V + E)$                                                | $O(V + E)$                                                     |
| **Applications**     | Topological sort, cycle detection, finding connected components, maze solving. | Shortest path (unweighted), web crawling, network broadcasting, finding connected components. |
| **Memory Usage**     | Can be less if the graph is "wide" but shallow.           | Can be more if the graph is "wide" and shallow.                |

*(Refer to Lipschuts, Chapter 6 for a direct comparison and examples.)*

**CO1 Alignment:** The comparison table directly addresses CO1 by highlighting the performance aspects (space/time complexity) and suitability for different tasks.
**CO4 Alignment:** Both DFS and BFS are traversal techniques, and their comparison addresses applying and comparing different searching techniques.

---

### 6. Important Points to Remember

*   **Graph Representation:** The choice between adjacency matrix and adjacency list impacts the efficiency of traversal algorithms, especially for sparse vs. dense graphs.
*   **Visited Set:** Crucial for preventing infinite loops in graphs with cycles.
*   **DFS vs. BFS Choice:** Depends on the specific problem. If shortest path in an unweighted graph is needed, BFS is preferred. For cycle detection or topological sort, DFS is often more natural.
*   **Cycles:** Both algorithms must handle cycles correctly by using a visited set.
*   **Disconnected Graphs:** If a graph is disconnected, a single call to DFS or BFS from one source vertex will only traverse the connected component containing that source. To traverse the entire graph, you might need to iterate through all vertices and start a traversal if a vertex hasn't been visited yet.

---

### 7. Practice Questions

**Question 1 (Conceptual - CO3, CO4):**
You are given a social network where users are vertices and friendships are edges. You want to find all users that are exactly two degrees of separation away from a given user. Which traversal algorithm would be more suitable for this task and why?

**Answer:**
Breadth First Search (BFS) would be more suitable. BFS explores the graph level by level.
*   Level 0: The starting user.
*   Level 1: The user's direct friends.
*   Level 2: The friends of the user's friends.
By performing a BFS from the given user, you can easily identify all users at distance 2 by looking at the vertices enqueued at the second step of the traversal. DFS might find some users at distance 2, but it would dive deeper into other branches first, making it less direct for finding all nodes at a specific distance.

**Question 2 (Algorithm Trace - CO4):**
Consider the following directed graph represented by an adjacency list:
*   0: [1, 2]
*   1: [2]
*   2: [0, 3]
*   3: [3]

Trace the execution of DFS starting from vertex 0. Assume neighbors are visited in the order they appear in the adjacency list.

**Answer:**
1.  `DFS(0)`: Mark 0 visited.
    *   Visit neighbor 1: `DFS(1)`
        *   Mark 1 visited.
        *   Visit neighbor 2: `DFS(2)`
            *   Mark 2 visited.
            *   Visit neighbor 0: 0 is visited, do nothing.
            *   Visit neighbor 3: `DFS(3)`
                *   Mark 3 visited.
                *   Visit neighbor 3: 3 is visited, do nothing.
                *   Return from `DFS(3)`.
            *   Return from `DFS(2)`.
        *   Return from `DFS(1)`.
    *   Visit neighbor 2: 2 is visited, do nothing.
    *   Return from `DFS(0)`.

    **DFS Traversal Order:** 0 -> 1 -> 2 -> 3

**Question 3 (Algorithm Trace - CO4):**
Trace the execution of BFS starting from vertex 0 for the same directed graph as Question 2. Assume neighbors are visited in the order they appear in the adjacency list.

**Answer:**
1.  Initialize: Queue Q = [], Visited = {}
2.  Start BFS from 0: Mark 0 visited. Enqueue 0. Q = [0], Visited = {0}
3.  Dequeue 0. Process 0. Neighbors: 1, 2.
    *   Neighbor 1: Not visited. Mark 1 visited. Enqueue 1. Q = [1], Visited = {0, 1}
    *   Neighbor 2: Not visited. Mark 2 visited. Enqueue 2. Q = [1, 2], Visited = {0, 1, 2}
4.  Dequeue 1. Process 1. Neighbors: 2.
    *   Neighbor 2: Visited. Do nothing. Q = [2], Visited = {0, 1, 2}
5.  Dequeue 2. Process 2. Neighbors: 0, 3.
    *   Neighbor 0: Visited. Do nothing.
    *   Neighbor 3: Not visited. Mark 3 visited. Enqueue 3. Q = [3], Visited = {0, 1, 2, 3}
6.  Dequeue 3. Process 3. Neighbors: 3.
    *   Neighbor 3: Visited. Do nothing. Q = [], Visited = {0, 1, 2, 3}
7.  Queue is empty. BFS terminates.

    **BFS Traversal Order:** 0 -> 1 -> 2 -> 3

**Question 4 (Complexity Analysis - CO1, CO3):**
For a sparse graph with $V$ vertices and $E$ edges ($E \approx V$), what is the typical space complexity of DFS and BFS if implemented using adjacency lists? Explain your reasoning.

**Answer:**
For a sparse graph ($E \approx V$), both DFS and BFS typically have a space complexity of $O(V)$.
*   **DFS:** The space complexity is dominated by the recursion stack (or an explicit stack). In the worst case for a sparse graph (e.g., a long chain), the stack could hold up to $O(V)$ vertices.
*   **BFS:** The space complexity is dominated by the queue. In the worst case for a sparse graph, a single level might contain a significant portion of the vertices, potentially up to $O(V)$ in the worst-case scenario for a particular level's expansion.

The adjacency list representation itself takes $O(V + E)$ space. Since $E \approx V$ for sparse graphs, the adjacency list space is $O(V + V) = O(V)$. Therefore, the overall space complexity for both is $O(V)$ (for the lists) + $O(V)$ (for the stack/queue) = $O(V)$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. Further Reading and References

*   **Horowitz, Sahni, and Anderson-Freed, Chapter 7:** Excellent coverage of graph representations and traversal algorithms.
*   **Samanta D, Chapter 5:** Provides a good introduction to graph traversal techniques.
*   **Gilberg and Forouzan, Chapter 10:** Discusses DFS and BFS with practical applications.
*   **Brass, Chapter 3:** Offers insights into BFS and its properties, including shortest paths.
*   **Lipschuts, Chapter 6:** A concise comparison of DFS and BFS.
*   **Aho, Hopcroft, and Ullman:** A classic and in-depth treatment of graph algorithms, including traversals.

---