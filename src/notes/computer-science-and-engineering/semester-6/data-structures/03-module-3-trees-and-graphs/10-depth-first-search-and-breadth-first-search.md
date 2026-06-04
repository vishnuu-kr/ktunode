---
title: "Depth First Search and Breadth First Search"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bea7"
status: "completed"
scrapedAt: "2026-05-20T16:52:04.778Z"
---
# Data Structures: Module 3 - Trees and Graphs

## Topic: Depth First Search (DFS) and Breadth First Search (BFS)

---

### **Learning Outcomes**

*   Understand the fundamental concepts of graph traversal.
*   Explain the workings of Depth First Search (DFS) and Breadth First Search (BFS) algorithms.
*   Implement DFS and BFS using appropriate data structures (stacks for DFS, queues for BFS).
*   Analyze the time and space complexity of DFS and BFS.
*   Identify real-world applications of DFS and BFS.
*   Compare and contrast DFS and BFS.

---

### **1. Introduction to Graph Traversal**

*   **Definition:** Graph traversal is the process of visiting (or checking) each vertex in a graph exactly once.
*   **Purpose:** Traversal algorithms are fundamental for solving many graph-related problems, such as finding paths, detecting cycles, and identifying connected components.
*   **Key Idea:** Start from a designated source vertex and systematically explore the graph.

---

### **2. Depth First Search (DFS)**

*   **Core Idea:** Explore as far as possible along each branch before backtracking. It prioritizes going deeper into the graph.
*   **Analogy:** Imagine exploring a maze by going down one path until you hit a dead end, then backtracking to the last junction and trying another path.
*   **Data Structure:** Uses a **Stack** (either explicitly or implicitly through recursion).

#### **2.1 How DFS Works (Algorithm)**

1.  **Initialization:**
    *   Mark all vertices as unvisited.
    *   Choose a starting vertex.
2.  **Traversal:**
    *   **Push** the starting vertex onto the stack.
    *   While the stack is not empty:
        *   **Pop** a vertex `v` from the stack.
        *   If `v` is not visited:
            *   Mark `v` as visited.
            *   Process `v` (e.g., print it).
            *   For each unvisited neighbor `u` of `v`:
                *   **Push** `u` onto the stack.

#### **2.2 DFS Implementation (Recursive vs. Iterative)**

*   **Recursive DFS:**
    *   More intuitive and often cleaner code.
    *   The call stack implicitly acts as the stack.
    *   **Process:**
        1.  Mark the current vertex as visited.
        2.  Process the current vertex.
        3.  For each unvisited neighbor `v` of the current vertex:
            *   Recursively call DFS on `v`.

*   **Iterative DFS:**
    *   Uses an explicit stack.
    *   Avoids potential stack overflow issues with deep recursion.
    *   **Process:** (As described in Section 2.1)

#### **2.3 Example: DFS Traversal**

Consider the following graph:

```
    A ---- B
    |      |
    |      |
    C ---- D ---- E
```

Let's perform DFS starting from vertex `A`.

**Recursive DFS (Order of Visits):**

1.  Start at `A`. Visit `A`. Neighbors: `B`, `C`.
2.  Go to `B` (first neighbor). Visit `B`. Neighbors: `A`, `D`.
3.  Go to `D` (unvisited neighbor of `B`). Visit `D`. Neighbors: `B`, `C`, `E`.
4.  Go to `C` (unvisited neighbor of `D`). Visit `C`. Neighbors: `A`, `D`.
5.  Backtrack from `C` to `D`.
6.  Go to `E` (unvisited neighbor of `D`). Visit `E`. Neighbors: `D`.
7.  Backtrack from `E` to `D`.
8.  Backtrack from `D` to `B`.
9.  Backtrack from `B` to `A`.
10. Backtrack from `A` (all neighbors explored).

**Possible DFS Traversal Order (assuming neighbors are visited in alphabetical order):** A -> B -> D -> C -> E

**Iterative DFS (using a stack):**

*   `Stack: [A]`
*   Pop `A`. Visit `A`. Neighbors `B`, `C`. Push `C`, then `B`.
*   `Stack: [B, C]`
*   Pop `B`. Visit `B`. Neighbors `A`, `D`. `A` is visited. Push `D`.
*   `Stack: [D, C]`
*   Pop `D`. Visit `D`. Neighbors `B`, `C`, `E`. `B` is visited. Push `E`, then `C`.
*   `Stack: [C, E, C]` (Note: If a neighbor is already in the stack but not visited, it will be pushed again. The visited check prevents infinite loops.)
*   Pop `C`. Visit `C`. Neighbors `A`, `D`. `A`, `D` are visited.
*   `Stack: [E, C]`
*   Pop `E`. Visit `E`. Neighbor `D`. `D` is visited.
*   `Stack: [C]`
*   Pop `C`. `C` is already visited.
*   `Stack: []` (Empty. Traversal finished.)

**Possible Iterative DFS Traversal Order:** A -> B -> D -> C -> E

#### **2.4 Time and Space Complexity of DFS**

*   **Time Complexity:** O(V + E)
    *   V: Number of vertices
    *   E: Number of edges
    *   Each vertex is visited and processed once.
    *   Each edge is examined at most twice (once from each endpoint).
*   **Space Complexity:**
    *   **Recursive DFS:** O(V) in the worst case (for the recursion depth, which can be equal to the number of vertices in a skewed graph like a linked list).
    *   **Iterative DFS:** O(V) in the worst case (for the stack to store vertices).

---

### **3. Breadth First Search (BFS)**

*   **Core Idea:** Explore all the neighbor vertices at the present depth before moving on to the vertices at the next depth level. It explores level by level.
*   **Analogy:** Imagine ripples spreading out from a stone dropped in water. BFS explores outward from the source in concentric layers.
*   **Data Structure:** Uses a **Queue**.

#### **3.1 How BFS Works (Algorithm)**

1.  **Initialization:**
    *   Mark all vertices as unvisited.
    *   Choose a starting vertex.
2.  **Traversal:**
    *   **Enqueue** the starting vertex into the queue.
    *   Mark the starting vertex as visited.
    *   While the queue is not empty:
        *   **Dequeue** a vertex `v` from the queue.
        *   Process `v` (e.g., print it).
        *   For each unvisited neighbor `u` of `v`:
            *   Mark `u` as visited.
            *   **Enqueue** `u` into the queue.

#### **3.2 Example: BFS Traversal**

Using the same graph as before:

```
    A ---- B
    |      |
    |      |
    C ---- D ---- E
```

Let's perform BFS starting from vertex `A`.

**BFS Traversal (using a queue):**

*   `Queue: [A]`, Visited: `{A}`
*   Dequeue `A`. Process `A`. Neighbors `B`, `C`.
*   Enqueue `B`. Mark `B` visited.
*   Enqueue `C`. Mark `C` visited.
*   `Queue: [B, C]`, Visited: `{A, B, C}`
*   Dequeue `B`. Process `B`. Neighbors `A`, `D`. `A` is visited.
*   Enqueue `D`. Mark `D` visited.
*   `Queue: [C, D]`, Visited: `{A, B, C, D}`
*   Dequeue `C`. Process `C`. Neighbors `A`, `D`. `A`, `D` are visited.
*   `Queue: [D]`, Visited: `{A, B, C, D}`
*   Dequeue `D`. Process `D`. Neighbors `B`, `C`, `E`. `B`, `C` are visited.
*   Enqueue `E`. Mark `E` visited.
*   `Queue: [E]`, Visited: `{A, B, C, D, E}`
*   Dequeue `E`. Process `E`. Neighbor `D`. `D` is visited.
*   `Queue: []` (Empty. Traversal finished.)

**BFS Traversal Order:** A -> B -> C -> D -> E

#### **3.3 Time and Space Complexity of BFS**

*   **Time Complexity:** O(V + E)
    *   V: Number of vertices
    *   E: Number of edges
    *   Each vertex is enqueued and dequeued exactly once.
    *   Each edge is examined at most twice (once from each endpoint).
*   **Space Complexity:** O(V) in the worst case (for the queue to store vertices). In a graph with a high branching factor, the queue can hold up to all vertices at a certain level.

---

### **4. Comparison: DFS vs. BFS**

| Feature          | Depth First Search (DFS)                                     | Breadth First Search (BFS)                                     |
| :--------------- | :----------------------------------------------------------- | :------------------------------------------------------------- |
| **Exploration**  | Goes deep first, explores one path completely.               | Explores level by level, explores all neighbors at current depth. |
| **Data Structure** | Stack (explicit or implicit via recursion)                   | Queue                                                          |
| **Completeness** | Completes for finite graphs.                                 | Completes for finite graphs.                                   |
| **Optimality**   | Not guaranteed to find the shortest path in an unweighted graph. | **Guaranteed to find the shortest path** in an unweighted graph. |
| **Memory Usage** | Can be less memory-intensive if the graph is deep but narrow. | Can be more memory-intensive if the graph is wide.             |
| **Use Cases**    | Maze solving, cycle detection, topological sorting, finding connected components, backtracking. | Finding shortest paths (unweighted), social network analysis (finding people within N connections), network broadcasting. |

---

### **5. Applications of DFS and BFS**

#### **5.1 Depth First Search (DFS) Applications**

*   **Finding connected components:** Determining which vertices are reachable from each other.
*   **Topological Sorting:** Ordering vertices in a Directed Acyclic Graph (DAG) such that for every directed edge `u -> v`, vertex `u` comes before `v`.
*   **Cycle Detection:** Identifying cycles in a graph (directed or undirected).
*   **Pathfinding (finding *any* path):** If you just need to know if a path exists between two nodes, DFS can be efficient.
*   **Backtracking algorithms:** Used in puzzles like the N-Queens problem or Sudoku solvers.
*   **Web crawlers:** Used to explore links on a website.

#### **5.2 Breadth First Search (BFS) Applications**

*   **Finding the shortest path in an unweighted graph:** Crucial for many problems like finding the minimum number of steps to reach a destination.
*   **Social Network Analysis:** Finding the "degrees of separation" (e.g., finding all friends of friends).
*   **Network Broadcasting:** In networking, BFS can be used to send a message to all reachable nodes.
*   **Garbage Collection:** In some memory management algorithms.
*   **Finding connected components:** Can also be used, similar to DFS.
*   **Crawler/Spidering:** Often used for indexing web pages, where finding pages closer to the starting URL is often prioritized.

---

### **6. Important Points to Remember**

*   **Visited Set:** Both DFS and BFS require a mechanism to keep track of visited vertices to avoid infinite loops and redundant processing.
*   **Graph Representation:** The choice of graph representation (adjacency list vs. adjacency matrix) can impact the efficiency of finding neighbors, but the core traversal logic remains the same. Adjacency lists are generally preferred for sparse graphs.
*   **Unweighted vs. Weighted Graphs:** BFS finds the shortest path only in *unweighted* graphs. For weighted graphs, Dijkstra's algorithm or A* search is needed.
*   **Connectedness:** If a graph is not connected, you might need to run DFS or BFS from multiple starting points to traverse all components.
*   **Directed vs. Undirected:** The algorithms work for both types, but the interpretation of edges and neighbor finding might differ slightly.

---

### **7. Practice Questions & Exercises**

1.  **Question:** For the following graph, perform a BFS starting from vertex '1' and list the order of visited vertices. Assume neighbors are visited in ascending order.

    ```
        1 -- 2 -- 4
        |    |
        |    |
        3 -- 5
    ```

    **Answer:**
    Queue: [1]
    Dequeue 1, Visit 1. Neighbors: 2, 3. Enqueue 2, 3. Queue: [2, 3]
    Dequeue 2, Visit 2. Neighbors: 1, 4, 5. 1 visited. Enqueue 4, 5. Queue: [3, 4, 5]
    Dequeue 3, Visit 3. Neighbors: 1, 5. 1, 5 visited. Queue: [4, 5]
    Dequeue 4, Visit 4. Neighbor: 2. 2 visited. Queue: [5]
    Dequeue 5, Visit 5. Neighbors: 2, 3. 2, 3 visited. Queue: []
    **BFS Order: 1 -> 2 -> 3 -> 4 -> 5**

2.  **Question:** For the same graph as above, perform a DFS starting from vertex '1' and list the order of visited vertices. Assume neighbors are visited in ascending order.

    **Answer:**
    Start at 1. Visit 1. Neighbors: 2, 3.
    Go to 2. Visit 2. Neighbors: 1, 4, 5. 1 visited.
    Go to 4. Visit 4. Neighbor: 2. 2 visited. (Backtrack from 4)
    Go to 5. Visit 5. Neighbors: 2, 3. 2 visited.
    Go to 3. Visit 3. Neighbors: 1, 5. 1, 5 visited. (Backtrack from 3)
    (Backtrack from 5)
    (Backtrack from 2)
    (Backtrack from 1, already explored 3)
    **DFS Order: 1 -> 2 -> 4 -> 5 -> 3** (Note: The exact order can vary based on implementation, but the "depth-first" nature should be evident.)

3.  **Question:** What data structure is primarily used for DFS and what for BFS? Why?
    **Answer:**
    *   **DFS:** Stack. Because DFS explores one path as far as possible. When it hits a dead end or an already visited node, it needs to "backtrack" to the most recent unvisited path. A stack's LIFO (Last-In, First-Out) property naturally supports this backtracking.
    *   **BFS:** Queue. Because BFS explores level by level. It visits all nodes at the current depth before moving to the next. A queue's FIFO (First-In, First-Out) property ensures that nodes visited earlier (at shallower depths) are processed before nodes visited later (at deeper depths).

4.  **Question:** Which algorithm guarantees finding the shortest path in an unweighted graph? Explain why.
    **Answer:** **BFS** guarantees finding the shortest path in an unweighted graph. This is because BFS explores the graph in layers. It visits all nodes at distance 1 from the source, then all nodes at distance 2, and so on. Therefore, the first time BFS encounters the target node, it must have done so via the shortest possible path.

5.  **Question:** What is the main difference in the exploration strategy between DFS and BFS?
    **Answer:** The main difference is how they choose the next node to visit. DFS prioritizes going deeper into the graph (exploring a branch fully), while BFS prioritizes visiting all neighbors at the current "level" before moving to the next level.

---
