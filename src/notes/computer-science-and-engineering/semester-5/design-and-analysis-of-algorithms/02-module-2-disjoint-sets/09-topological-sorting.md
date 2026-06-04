---
title: "Topological Sorting"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 2: Disjoint Sets "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b554"
status: "completed"
scrapedAt: "2026-05-20T16:45:39.533Z"
---
## Module 2: Disjoint Sets - Topic: Topological Sorting

**Subject:** DESIGN AND ANALYSIS OF ALGORITHMS
**Module:** Module 2: Disjoint Sets
**Topic:** Topological Sorting

**Learning Outcomes:**

*   Understand the concept of topological sorting.
*   Identify when topological sorting is applicable.
*   Implement topological sorting using different algorithms (Kahn's Algorithm and Depth-First Search).
*   Analyze the time and space complexity of topological sorting algorithms.
*   Apply topological sorting to solve real-world problems.

---

### 1. Introduction to Topological Sorting

*   **Definition:** Topological sorting is a linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge `u -> v`, vertex `u` comes before vertex `v` in the ordering.

*   **Key Concept:** It essentially provides a sequence of nodes that respects the dependencies between them represented by directed edges.  Imagine a set of tasks where some tasks must be completed before others.  Topological sort would give you a valid order to perform those tasks.

*   **Applicability:**
    *   Topological sorting is only possible on Directed Acyclic Graphs (DAGs).
    *   If the graph contains cycles, a topological order cannot be found.

*   **Real-World Examples:**
    *   **Course Scheduling:** Ordering courses such that prerequisites are taken before dependent courses.
    *   **Dependency Resolution:** Resolving dependencies in software projects before compilation or installation.
    *   **Task Scheduling:**  Scheduling tasks in a project where some tasks must be completed before others.
    *   **Instruction Sequencing:** Ordering instructions in a compiler.

### 2. Algorithms for Topological Sorting

#### 2.1. Kahn's Algorithm (Based on Indegree)

*   **Algorithm:**

    1.  **Calculate Indegree:** Calculate the indegree of each vertex in the graph (number of incoming edges).

    2.  **Enqueue Zero Indegree Vertices:** Enqueue all vertices with an indegree of 0 into a queue.

    3.  **Process Queue:**
        *   While the queue is not empty:
            *   Dequeue a vertex `u` from the queue.
            *   Add `u` to the topological order.
            *   For each neighbor `v` of `u`:
                *   Decrement the indegree of `v`.
                *   If the indegree of `v` becomes 0, enqueue `v`.

    4.  **Check for Cycles:** If the number of vertices added to the topological order is not equal to the total number of vertices in the graph, then the graph contains a cycle, and topological sorting is not possible.

*   **Example:**

    Consider the DAG:

    ```
    0 -> 1
    0 -> 2
    1 -> 3
    2 -> 3
    ```

    1.  **Indegree:**
        *   Indegree(0) = 0
        *   Indegree(1) = 1
        *   Indegree(2) = 1
        *   Indegree(3) = 2

    2.  **Initial Queue:** Queue = [0]

    3.  **Processing:**
        *   Dequeue 0, add to order: Order = [0]
        *   Update neighbors of 0:
            *   Indegree(1) = 0, enqueue 1: Queue = [1]
            *   Indegree(2) = 0, enqueue 2: Queue = [1, 2]
        *   Dequeue 1, add to order: Order = [0, 1]
        *   Update neighbors of 1:
            *   Indegree(3) = 1,
        *   Dequeue 2, add to order: Order = [0, 1, 2]
        *   Update neighbors of 2:
            *   Indegree(3) = 0, enqueue 3: Queue = [3]
        *   Dequeue 3, add to order: Order = [0, 1, 2, 3]

    4.  **Result:** Topological Order = [0, 1, 2, 3] (Other valid orderings exist, like [0, 2, 1, 3])

*   **Pseudocode:**

    ```python
    def topological_sort_kahn(graph):
        n = len(graph)  # Number of vertices
        indegree = [0] * n
        for i in range(n):
            for neighbor in graph[i]:
                indegree[neighbor] += 1

        queue = []
        for i in range(n):
            if indegree[i] == 0:
                queue.append(i)

        topological_order = []
        count = 0
        while queue:
            u = queue.pop(0)
            topological_order.append(u)
            count += 1

            for v in graph[u]:
                indegree[v] -= 1
                if indegree[v] == 0:
                    queue.append(v)

        if count != n:
            return "Graph contains a cycle. Topological sort not possible."
        else:
            return topological_order
    ```

*   **Time Complexity:** O(V + E), where V is the number of vertices and E is the number of edges.
*   **Space Complexity:** O(V), due to the queue and the indegree array.

#### 2.2. Depth-First Search (DFS)

*   **Algorithm:**

    1.  **Initialize:** Create a stack to store the topological order and a `visited` array to track visited vertices.

    2.  **Iterate through Vertices:**  For each vertex in the graph:
        *   If the vertex is not visited, call the `dfs` function on it.

    3.  **DFS Function:**
        *   Mark the current vertex as visited.
        *   For each neighbor `v` of the current vertex:
            *   If `v` is not visited, call the `dfs` function on `v`.
        *   Push the current vertex onto the stack (after visiting all its descendants).

    4.  **Retrieve Topological Order:**  Pop the vertices from the stack to obtain the topological order.

*   **Example:**

    Consider the DAG:

    ```
    0 -> 1
    0 -> 2
    1 -> 3
    2 -> 3
    ```

    1.  **Initialization:**  Stack = [], Visited = [False, False, False, False]

    2.  **Iteration:**
        *   Start with vertex 0 (not visited): `dfs(0)`
            *   Mark 0 as visited: Visited = [True, False, False, False]
            *   Visit neighbor 1: `dfs(1)`
                *   Mark 1 as visited: Visited = [True, True, False, False]
                *   Visit neighbor 3: `dfs(3)`
                    *   Mark 3 as visited: Visited = [True, True, False, True]
                    *   3 has no unvisited neighbors.
                    *   Push 3 to stack: Stack = [3]
                *   Push 1 to stack: Stack = [3, 1]
            *   Visit neighbor 2: `dfs(2)`
                *   Mark 2 as visited: Visited = [True, True, True, True]
                *   Visit neighbor 3: `dfs(3)` (already visited, so skip)
                *   Push 2 to stack: Stack = [3, 1, 2]
            *   Push 0 to stack: Stack = [3, 1, 2, 0]

    3.  **Retrieve Order:** Pop from stack: Order = [0, 2, 1, 3]

*   **Pseudocode:**

    ```python
    def topological_sort_dfs(graph):
        n = len(graph)
        visited = [False] * n
        stack = []

        def dfs(node):
            visited[node] = True
            for neighbor in graph[node]:
                if not visited[neighbor]:
                    dfs(neighbor)
            stack.append(node)

        for i in range(n):
            if not visited[i]:
                dfs(i)

        return stack[::-1] # Reverse the stack to get the topological order
    ```

*   **Time Complexity:** O(V + E), where V is the number of vertices and E is the number of edges.
*   **Space Complexity:** O(V), due to the visited array and the stack (in the worst case, the stack can hold all vertices).

### 3. Detecting Cycles in a Directed Graph

Topological sorting can be used to detect cycles in a directed graph. If a topological order cannot be found (using either Kahn's or DFS-based approach), it implies that the graph contains a cycle.

### 4.  Comparison of Kahn's Algorithm and DFS

| Feature         | Kahn's Algorithm                                | DFS Algorithm                               |
|-----------------|-------------------------------------------------|---------------------------------------------|
| Approach        | Iterative, based on indegree                    | Recursive, Depth-First Search               |
| Data Structure  | Queue                                           | Stack (implicitly via recursion)              |
| Cycle Detection | Detects during processing (count mismatch)       |  Detects by checking for back edges (can be added to the DFS algorithm)             |
| Intuitiveness    | More intuitive for understanding the process  |  Potentially less intuitive for beginners  |

### 5. Practice Questions and Exercises

1.  **Question:** Given the following directed graph, find a topological order using Kahn's Algorithm:

    ```
    Graph:
    5 -> 0
    5 -> 2
    4 -> 0
    4 -> 1
    2 -> 3
    3 -> 1
    ```

    **Answer:**

    *   **Indegrees:**
        *   Indegree(0) = 2
        *   Indegree(1) = 2
        *   Indegree(2) = 1
        *   Indegree(3) = 1
        *   Indegree(4) = 0
        *   Indegree(5) = 0
    *   **Initial Queue:** [4, 5] (or [5, 4] - order within indegree 0 doesn't matter initially)
    *   **Topological Order (One possible solution):** [4, 5, 0, 2, 3, 1]

2.  **Question:** Given the same graph, find a topological order using DFS.

    **Answer:**

    *   **Topological Order (One possible solution):** [4, 5, 2, 3, 1, 0] (Different traversal order in DFS can lead to different valid topological orders.)

3.  **Question:**  Explain why topological sorting cannot be applied to a graph with cycles.

    **Answer:** In a graph with cycles, there is no vertex that can be the "first" vertex in the topological order.  Each vertex in the cycle depends on another vertex in the cycle, creating a circular dependency that cannot be resolved into a linear order where all dependencies are satisfied.

4.  **Question:** Implement Kahn's algorithm in Python or Java to sort a given graph. Assume the graph is represented as an adjacency list. (See Pseudocode above for Python example.)

### 6. Important Points to Remember

*   Topological sorting is only applicable to DAGs.
*   Multiple topological orders may exist for a given DAG.
*   Kahn's algorithm is based on indegrees and uses a queue.
*   DFS-based topological sorting uses a stack and recursion.
*   The time complexity of both algorithms is O(V + E).
*   Topological sorting is useful for solving various scheduling and dependency resolution problems.
*   If the graph contains a cycle, topological sorting is not possible. In this case, you may need to use other cycle detection and/or graph manipulation techniques.

This detailed guide covers the key aspects of topological sorting, providing definitions, algorithms, examples, and practice questions to solidify your understanding. Remember to practice implementing the algorithms and applying them to different problems.
