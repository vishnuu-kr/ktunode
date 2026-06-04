---
title: "Depth First Search and Breadth First Search on Graphs"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs: Trees"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363f0"
status: "completed"
scrapedAt: "2026-05-23T16:20:48.400Z"
---
# Data Structures: Module 3 - Trees and Graphs: Trees
## Topic: Depth First Search (DFS) and Breadth First Search (BFS) on Graphs

---

### **Introduction to Graph Traversal**

Graphs are powerful data structures used to represent relationships between objects. Traversing a graph means visiting all its vertices systematically. Two fundamental graph traversal algorithms are Depth First Search (DFS) and Breadth First Search (BFS). These algorithms are crucial for solving various graph-related problems, such as finding paths, detecting cycles, and solving puzzles.

**Key Concept:** A **graph** consists of a set of vertices (nodes) and a set of edges that connect pairs of vertices. Graphs can be **directed** (edges have a direction) or **undirected** (edges have no direction).

**Learning Outcome Connection:**
*   **CO3:** Make use of nonlinear data structures like trees and graphs to design algorithms for various applications. (Knowledge Level: K3) - Understanding DFS and BFS is fundamental to designing algorithms that operate on graphs.

---

### **1. Depth First Search (DFS)**

**Definition:** Depth First Search is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It starts at a chosen vertex and explores as far as possible along each branch before backtracking.

**Analogy:** Imagine exploring a maze. You go down one path as far as you can. If you hit a dead end or a previously visited spot, you backtrack to the last junction and try another unexplored path.

**How it works:**
1.  Start at an arbitrary vertex.
2.  Mark the current vertex as visited.
3.  For each unvisited neighbor of the current vertex:
    *   Recursively call DFS on the neighbor.

**Data Structures Used:**
*   **Recursion Stack (Implicit) or Explicit Stack:** DFS naturally uses a stack to keep track of the vertices to visit. When a vertex is visited, its unvisited neighbors are pushed onto the stack. When a branch is exhausted, the algorithm pops the next vertex from the stack.
*   **Visited Set/Array:** To keep track of visited vertices and avoid cycles and redundant processing.

**Algorithm (Recursive):**

```
DFS(graph, start_vertex):
  mark start_vertex as visited
  process start_vertex  // e.g., print it

  for each neighbor v of start_vertex:
    if v is not visited:
      DFS(graph, v)
```

**Algorithm (Iterative using a Stack):**

```
DFS_Iterative(graph, start_vertex):
  create an empty stack S
  push start_vertex onto S

  while S is not empty:
    current_vertex = pop from S

    if current_vertex is not visited:
      mark current_vertex as visited
      process current_vertex

      // Push unvisited neighbors in reverse order to maintain a similar
      // traversal order as the recursive version (though not strictly necessary)
      for each neighbor v of current_vertex (in reverse order):
        if v is not visited:
          push v onto S
```

**Example:**

Consider an undirected graph with vertices {A, B, C, D, E} and edges {(A,B), (A,C), (B,D), (C,E)}.

Starting DFS from vertex A:

1.  Visit A. Stack: [A]
2.  Pop A. Process A. Neighbors of A are B and C. Push C, then B. Stack: [B, C]
3.  Pop B. Visit B. Process B. Neighbor of B is D. Push D. Stack: [D, C]
4.  Pop D. Visit D. Process D. D has no unvisited neighbors. Stack: [C]
5.  Pop C. Visit C. Process C. Neighbor of C is E. Push E. Stack: [E]
6.  Pop E. Visit E. Process E. E has no unvisited neighbors. Stack: []
7.  Stack is empty. DFS complete.

**Traversal Order (example):** A -> B -> D -> C -> E

**Time Complexity:** O(V + E), where V is the number of vertices and E is the number of edges. This is because each vertex and each edge is visited at most once.

**Space Complexity:**
*   O(V) for the visited set/array.
*   O(V) for the recursion stack (in the worst case, a long chain of vertices).

**Textbook References:**
*   **Horowitz, Sahni, & Anderson-Freed:** Likely covers DFS conceptually and with pseudocode in their chapter on graphs.
*   **Samanta:** Will provide detailed explanations and implementations in C for DFS.

**Learning Outcome Connection:**
*   **CO3:** Make use of nonlinear data structures like trees and graphs to design algorithms for various applications. (Knowledge Level: K3) - DFS can be used for finding paths, topological sorting, cycle detection, etc.
*   **CO4:** Apply and compare various techniques for searching and sorting. (Knowledge Level: K3) - DFS is a search technique.

---

### **2. Breadth First Search (BFS)**

**Definition:** Breadth First Search is a graph traversal algorithm that explores all the neighbor vertices at the present depth prior to moving on to the vertices at the next depth level. It explores layer by layer.

**Analogy:** Imagine dropping a pebble into a pond. The ripples spread out in all directions, reaching points at the same distance from the center at the same time. BFS explores the graph in a similar outward fashion.

**How it works:**
1.  Start at an arbitrary vertex.
2.  Mark the current vertex as visited and enqueue it.
3.  While the queue is not empty:
    *   Dequeue a vertex.
    *   Process the dequeued vertex.
    *   For each unvisited neighbor of the dequeued vertex:
        *   Mark it as visited.
        *   Enqueue it.

**Data Structures Used:**
*   **Queue:** BFS uses a queue to store vertices that need to be visited. Vertices are enqueued when they are discovered and dequeued when they are processed. This ensures a level-by-level exploration.
*   **Visited Set/Array:** To keep track of visited vertices and avoid cycles and redundant processing.

**Algorithm (using a Queue):**

```
BFS(graph, start_vertex):
  create an empty queue Q
  mark start_vertex as visited
  enqueue start_vertex onto Q

  while Q is not empty:
    current_vertex = dequeue from Q
    process current_vertex

    for each neighbor v of current_vertex:
      if v is not visited:
        mark v as visited
        enqueue v onto Q
```

**Example:**

Using the same graph as before: {A, B, C, D, E} with edges {(A,B), (A,C), (B,D), (C,E)}.

Starting BFS from vertex A:

1.  Enqueue A. Queue: [A]
2.  Dequeue A. Process A. Neighbors B and C are unvisited. Mark B and C visited. Enqueue B, then C. Queue: [B, C]
3.  Dequeue B. Process B. Neighbor D is unvisited. Mark D visited. Enqueue D. Queue: [C, D]
4.  Dequeue C. Process C. Neighbor E is unvisited. Mark E visited. Enqueue E. Queue: [D, E]
5.  Dequeue D. Process D. D has no unvisited neighbors. Queue: [E]
6.  Dequeue E. Process E. E has no unvisited neighbors. Queue: []
7.  Queue is empty. BFS complete.

**Traversal Order (example):** A -> B -> C -> D -> E

**Time Complexity:** O(V + E), where V is the number of vertices and E is the number of edges. Similar to DFS, each vertex and edge is visited at most once.

**Space Complexity:**
*   O(V) for the visited set/array.
*   O(V) for the queue (in the worst case, a wide graph where many vertices are at the same level).

**Textbook References:**
*   **Horowitz, Sahni, & Anderson-Freed:** Will provide explanations and possibly C implementations for BFS.
*   **Samanta:** Offers detailed C implementations of BFS.
*   **Gilberg & Forouzan:** Their pseudocode approach will clearly illustrate the BFS algorithm.

**Learning Outcome Connection:**
*   **CO3:** Make use of nonlinear data structures like trees and graphs to design algorithms for various applications. (Knowledge Level: K3) - BFS is used for finding shortest paths in unweighted graphs, network broadcasting, web crawlers, etc.
*   **CO4:** Apply and compare various techniques for searching and sorting. (Knowledge Level: K3) - BFS is another search technique.

---

### **3. Comparison of DFS and BFS**

| Feature          | Depth First Search (DFS)                               | Breadth First Search (BFS)                               |
| :--------------- | :----------------------------------------------------- | :------------------------------------------------------- |
| **Exploration**  | Goes deep into a branch before backtracking.           | Explores level by level.                                 |
| **Data Structure** | Stack (explicit or implicit recursion)                 | Queue                                                    |
| **Applications** | Cycle detection, Topological sort, Pathfinding (general), Maze solving. | Shortest path in unweighted graphs, Network broadcasting, Web crawlers. |
| **Memory Usage** | Can be less memory-intensive than BFS for deep graphs. | Can be more memory-intensive for wide graphs.            |
| **Result**       | Depends on the order of exploring neighbors.           | Guarantees shortest path in terms of edges for unweighted graphs. |

**Key Points to Remember:**
*   Both DFS and BFS visit each vertex and edge at most once in a connected graph.
*   The choice between DFS and BFS depends on the specific problem requirements.
*   For finding the shortest path in an **unweighted** graph, BFS is the preferred algorithm.
*   DFS is often used for problems involving exploring all possibilities or finding a path, even if it's not the shortest.

**Learning Outcome Connection:**
*   **CO1:** Compare performance of algorithms using asymptotic notations (Knowledge Level: K2) - Understanding O(V+E) for both is a comparison point.
*   **CO4:** Apply and compare various techniques for searching and sorting. (Knowledge Level: K3) - Directly compares two search techniques.

---

### **4. Applications of DFS and BFS**

**DFS Applications:**
*   **Cycle Detection in a Graph:** Detect if a directed or undirected graph contains a cycle.
*   **Topological Sorting:** Ordering vertices in a directed acyclic graph (DAG) such that for every directed edge from vertex u to vertex v, u comes before v in the ordering.
*   **Finding Connected Components:** In an undirected graph, identify all sets of vertices that are connected to each other.
*   **Pathfinding:** Finding *any* path between two vertices.
*   **Solving Puzzles:** Mazes, Sudoku (often implemented with backtracking, which is DFS-like).

**BFS Applications:**
*   **Shortest Path in Unweighted Graphs:** Finding the minimum number of edges required to go from one vertex to another.
*   **Finding Connected Components:** Can also be used for this.
*   **Network Broadcasting:** Simulating the spread of information in a network.
*   **Web Crawlers:** Exploring web pages by following links.
*   **Garbage Collection:** Mark-and-sweep algorithms often use BFS.

**Textbook References:**
*   **Aho, Hopcroft, & Ullman:** A classic reference for algorithms and their applications, including graph traversals.
*   **Tremblay & Sorenson:** Will likely detail applications in various contexts.
*   **Lipschuts (Schaum's Series):** Excellent for providing numerous examples and applications of DFS and BFS.

**Learning Outcome Connection:**
*   **CO3:** Make use of nonlinear data structures like trees and graphs to design algorithms for various applications. (Knowledge Level: K3) - This section directly lists and explains these applications.

---

### **5. Practice Questions and Exercises**

**Question 1:**
Consider the following directed graph:

```
      A ---> B ---> D
      |      ^      |
      |      |      |
      v      |      v
      C -----+-----> E
```

1.  Perform DFS starting from vertex A. List the order of visited vertices.
2.  Perform BFS starting from vertex A. List the order of visited vertices.

**Answer 1:**

**DFS from A (one possible traversal):**
1.  Visit A. Stack: [A]
2.  Pop A. Process A. Neighbors: B, C. Push C, then B. Stack: [B, C]
3.  Pop B. Visit B. Process B. Neighbor: D. Push D. Stack: [D, C]
4.  Pop D. Visit D. Process D. Neighbors: E. Push E. Stack: [E, C]
5.  Pop E. Visit E. Process E. No unvisited neighbors. Stack: [C]
6.  Pop C. Visit C. Process C. Neighbors: B (visited), E (visited). Stack: []
**Order:** A -> B -> D -> E -> C

**BFS from A:**
1.  Enqueue A. Queue: [A]
2.  Dequeue A. Process A. Neighbors: B, C. Mark B, C visited. Enqueue B, C. Queue: [B, C]
3.  Dequeue B. Process B. Neighbor: D. Mark D visited. Enqueue D. Queue: [C, D]
4.  Dequeue C. Process C. Neighbors: B (visited), E. Mark E visited. Enqueue E. Queue: [D, E]
5.  Dequeue D. Process D. Neighbor: E (visited). Queue: [E]
6.  Dequeue E. Process E. No unvisited neighbors. Queue: []
**Order:** A -> B -> C -> D -> E

**Question 2:**
What is the main difference in how DFS and BFS explore a graph? Which algorithm is generally preferred for finding the shortest path in an unweighted graph, and why?

**Answer 2:**
DFS explores as deeply as possible along each branch before backtracking, typically using a stack. BFS explores the graph level by level, visiting all neighbors at the current depth before moving to the next depth, using a queue. BFS is preferred for finding the shortest path in an unweighted graph because it explores outwards from the source, guaranteeing that the first time a destination vertex is reached, it is via the shortest path in terms of the number of edges.

**Question 3:**
Describe a scenario where you would choose DFS over BFS, and vice versa.

**Answer 3:**
*   **Choose DFS:** If you need to find *any* path between two nodes, or if you are performing tasks like cycle detection or topological sorting, DFS is often more straightforward. For example, in a maze, you'd use DFS to find a path to the exit.
*   **Choose BFS:** If you need the shortest path in an unweighted graph (e.g., finding the minimum number of connections between two people in a social network) or if you want to explore all nodes at a certain "distance" from a starting node.

**Question 4:**
Implement (in pseudocode) a function to check if a given directed graph contains a cycle using DFS.

**Answer 4:**
```pseudocode
function hasCycle(graph):
  visited = set()
  recursion_stack = set()

  for each vertex v in graph.vertices:
    if v not in visited:
      if dfs_check_cycle(graph, v, visited, recursion_stack):
        return true
  return false

function dfs_check_cycle(graph, u, visited, recursion_stack):
  visited.add(u)
  recursion_stack.add(u)

  for each neighbor v of u:
    if v not in visited:
      if dfs_check_cycle(graph, v, visited, recursion_stack):
        return true
    else if v in recursion_stack: // Found a back edge to an ancestor in the current DFS path
      return true

  recursion_stack.remove(u) // Backtrack: remove u from current path
  return false
```

**Learning Outcome Connection:**
*   **CO2:** Solve real world problems efficiently using appropriate data structures like arrays, linked list, stacks and queues. (Knowledge Level: K3) - Implementing these algorithms is a direct application.
*   **CO3:** Make use of nonlinear data structures like trees and graphs to design algorithms for various applications. (Knowledge Level: K3) - Cycle detection is a key application.

---
