---
title: "Topological Sorting"
subject: "INTRODUCTION TO ALGORITHM"
module: "Module 2: Trees "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cbcb"
status: "completed"
scrapedAt: "2026-05-20T17:25:12.123Z"
---
# Introduction to Algorithms: Module 2 - Trees: Topological Sorting

## 1. Introduction to Topological Sorting

### 1.1 What is Topological Sorting?

*   **Definition:** Topological sorting is an algorithm that orders the vertices of a directed acyclic graph (DAG) such that for every directed edge from vertex `u` to vertex `v`, `u` comes before `v` in the ordering.
*   **Purpose:** It's used to find a linear ordering of elements that have dependencies. Think of it as scheduling tasks where some tasks must be completed before others.
*   **Key Requirement:** The graph **must be a Directed Acyclic Graph (DAG)**. If the graph contains a cycle, a topological sort is impossible.

### 1.2 Why is it called "Topological"?

The term "topological" refers to the study of shapes and spaces, and in this context, it's about the arrangement or structure of dependencies within a graph. A topological sort provides a "planar" or "linear" arrangement of elements based on their relationships.

### 1.3 Applications of Topological Sorting

*   **Task Scheduling:** Ordering tasks in a project where certain tasks depend on the completion of others (e.g., building a house, compiling code).
*   **Course Scheduling:** Determining a valid order to take courses based on prerequisites.
*   **Dependency Resolution:** In software development, resolving dependencies between libraries or modules.
*   **Data Serialization:** Serializing objects with interdependencies.
*   **Spreadsheet Cell Evaluation:** Determining the order in which to evaluate cells in a spreadsheet.

## 2. Key Concepts and Definitions

*   **Directed Graph:** A graph where edges have a direction (from a source vertex to a destination vertex).
*   **Acyclic Graph:** A graph that does not contain any cycles. A cycle is a path that starts and ends at the same vertex.
*   **Directed Acyclic Graph (DAG):** A directed graph that is also acyclic.
*   **Vertex (or Node):** An element in the graph.
*   **Edge:** A connection between two vertices. In a directed graph, an edge `(u, v)` goes from `u` to `v`.
*   **Predecessor:** For an edge `(u, v)`, `u` is a predecessor of `v`.
*   **Successor:** For an edge `(u, v)`, `v` is a successor of `u`.
*   **In-degree:** The number of incoming edges to a vertex.
*   **Out-degree:** The number of outgoing edges from a vertex.
*   **Topological Ordering:** A linear ordering of vertices in a DAG.

## 3. Algorithms for Topological Sorting

There are two primary algorithms for performing topological sorting:

### 3.1 Kahn's Algorithm (Based on In-degrees)

This algorithm iteratively removes vertices with an in-degree of zero.

**Steps:**

1.  **Compute In-degrees:** Calculate the in-degree for every vertex in the graph.
2.  **Initialize Queue:** Create a queue and add all vertices with an in-degree of 0 to it.
3.  **Process Vertices:**
    *   While the queue is not empty:
        *   Dequeue a vertex `u`.
        *   Add `u` to the topological sort result.
        *   For each neighbor `v` of `u` (i.e., for each edge `(u, v)`):
            *   Decrement the in-degree of `v`.
            *   If the in-degree of `v` becomes 0, enqueue `v`.
4.  **Cycle Detection:** If the number of vertices in the topological sort result is less than the total number of vertices in the graph, it means the graph contains a cycle, and a topological sort is not possible.

**Example:**

Consider the following DAG:

```
   A --> B --> D
   |     |
   v     v
   C --> E
```

1.  **In-degrees:**
    *   A: 0
    *   B: 1 (from A)
    *   C: 1 (from A)
    *   D: 1 (from B)
    *   E: 2 (from B, C)

2.  **Initialize Queue:** Queue: `[A]` (since A has in-degree 0)
    Topological Sort: `[]`

3.  **Process Vertices:**

    *   **Dequeue A:**
        *   Topological Sort: `[A]`
        *   Neighbors of A: B, C
        *   Decrement in-degree of B: 1 - 1 = 0. Enqueue B. Queue: `[B]`
        *   Decrement in-degree of C: 1 - 1 = 0. Enqueue C. Queue: `[B, C]`

    *   **Dequeue B:**
        *   Topological Sort: `[A, B]`
        *   Neighbors of B: D, E
        *   Decrement in-degree of D: 1 - 1 = 0. Enqueue D. Queue: `[C, D]`
        *   Decrement in-degree of E: 2 - 1 = 1. (E's in-degree is still 1, so don't enqueue yet). Queue: `[C, D]`

    *   **Dequeue C:**
        *   Topological Sort: `[A, B, C]`
        *   Neighbors of C: E
        *   Decrement in-degree of E: 1 - 1 = 0. Enqueue E. Queue: `[D, E]`

    *   **Dequeue D:**
        *   Topological Sort: `[A, B, C, D]`
        *   Neighbors of D: None. Queue: `[E]`

    *   **Dequeue E:**
        *   Topological Sort: `[A, B, C, D, E]`
        *   Neighbors of E: None. Queue: `[]`

4.  **Queue is empty.** The topological sort is `[A, B, C, D, E]`.
    *   Number of vertices in sort = 5. Total vertices = 5. No cycle.

**Alternative valid topological sort for this example could be `[A, C, B, D, E]` or `[A, C, B, E, D]` etc.**

### 3.2 Depth-First Search (DFS) Based Algorithm

This algorithm uses DFS to explore the graph and adds vertices to the sorted list in reverse order of their finishing times.

**Steps:**

1.  **Initialization:**
    *   `visited` set: To keep track of visited vertices.
    *   `recursionStack` set: To detect cycles (vertices currently in the DFS recursion path).
    *   `resultStack`: A stack to store the topologically sorted vertices.

2.  **Iterate through Vertices:** For each vertex `u` in the graph:
    *   If `u` has not been visited, call a recursive helper function `DFS_Visit(u)`.

3.  **`DFS_Visit(u)` Function:**
    *   Mark `u` as visited.
    *   Add `u` to the `recursionStack`.
    *   For each neighbor `v` of `u` (i.e., for each edge `(u, v)`):
        *   If `v` is in `recursionStack`, a cycle is detected. Return failure.
        *   If `v` has not been visited, recursively call `DFS_Visit(v)`. If it returns failure, propagate failure.
    *   Remove `u` from the `recursionStack`.
    *   Push `u` onto the `resultStack`.
    *   Return success.

4.  **Final Result:** After visiting all vertices, the `resultStack` will contain the topological sort in reverse order. Pop elements from the `resultStack` to get the topological order.

**Example (using the same DAG as before):**

```
   A --> B --> D
   |     |
   v     v
   C --> E
```

1.  **Initialize:**
    *   `visited = {}`
    *   `recursionStack = {}`
    *   `resultStack = []`

2.  **Start DFS from A:** `DFS_Visit(A)`
    *   `visited = {A}`
    *   `recursionStack = {A}`
    *   Neighbors of A: B, C
        *   Call `DFS_Visit(B)`:
            *   `visited = {A, B}`
            *   `recursionStack = {A, B}`
            *   Neighbors of B: D, E
                *   Call `DFS_Visit(D)`:
                    *   `visited = {A, B, D}`
                    *   `recursionStack = {A, B, D}`
                    *   Neighbors of D: None.
                    *   Remove D from `recursionStack`: `{A, B}`
                    *   Push D onto `resultStack`: `[D]`
                    *   Return success.
                *   `DFS_Visit(D)` succeeded.
                *   Call `DFS_Visit(E)`:
                    *   `visited = {A, B, D, E}`
                    *   `recursionStack = {A, B, E}`
                    *   Neighbors of E: None.
                    *   Remove E from `recursionStack`: `{A, B}`
                    *   Push E onto `resultStack`: `[D, E]`
                    *   Return success.
                *   `DFS_Visit(E)` succeeded.
            *   Remove B from `recursionStack`: `{A}`
            *   Push B onto `resultStack`: `[D, E, B]`
            *   Return success.
        *   `DFS_Visit(B)` succeeded.
        *   Call `DFS_Visit(C)`:
            *   `visited = {A, B, D, E, C}`
            *   `recursionStack = {A, C}`
            *   Neighbors of C: E
                *   E is already visited. Check if E is in `recursionStack`. No.
            *   Remove C from `recursionStack`: `{A}`
            *   Push C onto `resultStack`: `[D, E, B, C]`
            *   Return success.
        *   `DFS_Visit(C)` succeeded.
    *   Remove A from `recursionStack`: `{}`
    *   Push A onto `resultStack`: `[D, E, B, C, A]`
    *   Return success.

3.  **All vertices visited.**

4.  **Final Result:** Pop from `resultStack`: `[A, C, B, E, D]`.

**Cycle Detection with DFS:**

If, during the `DFS_Visit(u)` call, we encounter a neighbor `v` that is *already present in the `recursionStack`*, it means there's a path from `v` back to `u` (because `u` is an ancestor of `v` in the current DFS tree, and `v` is also an ancestor of itself through this back edge). This indicates a cycle.

## 4. Important Points to Remember

*   **Uniqueness of Topological Sort:** A DAG can have **multiple valid topological sorts**. This is because if there are multiple nodes with an in-degree of zero at any step, the order in which they are picked can vary.
*   **DAG Requirement:** Topological sorting is **only possible for Directed Acyclic Graphs (DAGs)**. If a graph contains a cycle, it cannot be topologically sorted.
*   **Kahn's vs. DFS:** Both algorithms are correct and have the same time complexity. Kahn's algorithm is often easier to understand and implement iteratively, while the DFS-based approach is more naturally recursive.
*   **Time Complexity:** The time complexity for both Kahn's algorithm and the DFS-based algorithm is O(V + E), where V is the number of vertices and E is the number of edges. This is because each vertex and each edge is visited at most a constant number of times.
*   **Space Complexity:**
    *   Kahn's Algorithm: O(V) for storing in-degrees and the queue.
    *   DFS-based Algorithm: O(V) for the visited set, recursion stack, and result stack.

## 5. Practice Questions and Exercises

**Question 1:**

Consider the following directed graph. Can it be topologically sorted? If yes, provide one valid topological sort. If no, explain why.

```
   1 --> 2 --> 3
   ^           |
   |           v
   4 <-------- 5
```

**Answer 1:**

No, this graph cannot be topologically sorted because it contains a cycle: `1 -> 2 -> 3 -> 5 -> 4 -> 1`.

**Question 2:**

Consider the following directed graph representing course prerequisites. `(A, B)` means course A is a prerequisite for course B.

```
   Math --> Physics --> Chemistry
            ^           ^
            |           |
            Calculus --> Statistics
```

Provide one valid topological sort for these courses.

**Answer 2:**

Let's represent the graph with vertices: Math (M), Physics (P), Chemistry (C), Calculus (CL), Statistics (S).

Edges: (M, P), (P, C), (CL, P), (CL, S), (S, C)

**Using Kahn's Algorithm:**

1.  **In-degrees:**
    *   M: 0
    *   P: 2 (from M, CL)
    *   C: 2 (from P, S)
    *   CL: 0
    *   S: 1 (from CL)

2.  **Initialize Queue:** Queue: `[M, CL]`
    Topological Sort: `[]`

3.  **Process Vertices:**

    *   **Dequeue M:**
        *   Topological Sort: `[M]`
        *   Neighbor of M: P
        *   Decrement in-degree of P: 2 - 1 = 1. Queue: `[CL]`

    *   **Dequeue CL:**
        *   Topological Sort: `[M, CL]`
        *   Neighbors of CL: P, S
        *   Decrement in-degree of P: 1 - 1 = 0. Enqueue P. Queue: `[P]`
        *   Decrement in-degree of S: 1 - 1 = 0. Enqueue S. Queue: `[P, S]`

    *   **Dequeue P:**
        *   Topological Sort: `[M, CL, P]`
        *   Neighbor of P: C
        *   Decrement in-degree of C: 2 - 1 = 1. Queue: `[S]`

    *   **Dequeue S:**
        *   Topological Sort: `[M, CL, P, S]`
        *   Neighbor of S: C
        *   Decrement in-degree of C: 1 - 1 = 0. Enqueue C. Queue: `[C]`

    *   **Dequeue C:**
        *   Topological Sort: `[M, CL, P, S, C]`
        *   Neighbors of C: None. Queue: `[]`

4.  **Queue is empty.**

A valid topological sort is: **Math, Calculus, Physics, Statistics, Chemistry** (or any permutation of Math and Calculus first, as they have no prerequisites, and then the rest in a valid order).

**Question 3:**

Implement a function to perform topological sorting using Kahn's algorithm.

**(Note: This is a conceptual implementation prompt. Actual code would depend on the programming language.)**

```python
# Conceptual Python-like pseudocode for Kahn's Algorithm

def topological_sort_kahn(graph):
    # graph is represented as an adjacency list where graph[u] = [v1, v2, ...]
    # and we also need a way to compute in-degrees easily

    num_vertices = len(graph) # Assuming graph is a dictionary or list of lists
    in_degree = {vertex: 0 for vertex in graph}
    for u in graph:
        for v in graph[u]:
            in_degree[v] += 1

    queue = []
    for vertex in in_degree:
        if in_degree[vertex] == 0:
            queue.append(vertex)

    topological_order = []

    while queue:
        u = queue.pop(0) # Dequeue
        topological_order.append(u)

        for v in graph.get(u, []): # Iterate over neighbors of u
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)

    # Cycle detection
    if len(topological_order) != num_vertices:
        return "Graph contains a cycle, topological sort not possible."
    else:
        return topological_order

# Example Usage (assuming a graph representation)
# graph_adj = {
#     'A': ['B', 'C'],
#     'B': ['D', 'E'],
#     'C': ['E'],
#     'D': [],
#     'E': []
# }
# print(topological_sort_kahn(graph_adj))
```

This module provides a foundational understanding of topological sorting, a critical algorithm for ordering tasks with dependencies in directed acyclic graphs. Understanding its applications and the mechanics of its algorithms is crucial for solving various real-world problems.
