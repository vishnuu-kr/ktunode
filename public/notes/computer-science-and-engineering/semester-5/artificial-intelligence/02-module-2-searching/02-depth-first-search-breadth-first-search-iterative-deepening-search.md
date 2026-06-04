---
title: "Depth First Search, Breadth First Search, Iterative Deepening Search."
subject: "ARTIFICIAL INTELLIGENCE"
module: "Module 2: Searching:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b6e1"
status: "completed"
scrapedAt: "2026-05-20T16:43:08.588Z"
---
# ARTIFICIAL INTELLIGENCE - Module 2: Searching

## Topic: Depth-First Search (DFS), Breadth-First Search (BFS), and Iterative Deepening Search (IDS)

**Module Overview:** This module focuses on uninformed search algorithms, specifically Depth-First Search (DFS), Breadth-First Search (BFS), and Iterative Deepening Search (IDS). These algorithms are fundamental techniques for navigating problem spaces and finding solutions in AI. They are considered "uninformed" because they do not use any domain-specific knowledge about the problem to guide the search.

**Learning Outcomes:** Upon completion of this topic, you will be able to:

*   Define Depth-First Search (DFS), Breadth-First Search (BFS), and Iterative Deepening Search (IDS) algorithms.
*   Explain the key differences between DFS, BFS, and IDS.
*   Illustrate the execution of each algorithm using search trees or graphs.
*   Analyze the advantages and disadvantages of each algorithm in terms of completeness, optimality, time complexity, and space complexity.
*   Apply these algorithms to solve simple search problems.
*   Recognize situations where each algorithm is most appropriate.

---

### 1. Depth-First Search (DFS)

**1.1 Definition:**

*   Depth-First Search (DFS) is a search algorithm that explores as far as possible along each branch before backtracking. It explores the deepest nodes in the search tree whenever possible.

**1.2 Key Concepts:**

*   **Stack (LIFO - Last-In, First-Out):** DFS typically uses a stack (either explicitly or implicitly through recursion) to keep track of the nodes to be visited.
*   **Backtracking:** When a dead-end (a node with no unvisited children) is reached, the algorithm backtracks to the most recent node on the stack that has unexplored siblings.
*   **Visited Nodes:** To avoid cycles and redundant exploration, DFS typically maintains a set of visited nodes.

**1.3 Algorithm Steps:**

1.  Push the initial state onto the stack.
2.  While the stack is not empty:
    *   Pop a node from the stack.
    *   If the node is the goal state, return success.
    *   If the node has not been visited:
        *   Mark the node as visited.
        *   Push all unvisited children of the node onto the stack (typically pushing the leftmost child last so it's explored first).

**1.4 Example:**

Consider the following graph:

```
     A
    / \
   B   C
  / \   \
 D   E   F
     \
      G
```

Starting from node A, a possible DFS traversal order is: A -> B -> D -> E -> G -> C -> F

**1.5 Advantages:**

*   **Low Memory Consumption:**  DFS only needs to store the path from the root to the current node, making it space-efficient, especially for problems with deep search spaces.
*   **Can find a solution quickly if the search encounters the goal state early.**

**1.6 Disadvantages:**

*   **Not Complete:**  If the search space contains infinite paths (cycles or infinitely deep branches), DFS may never terminate.  Even with cycle detection, infinite depths could still be an issue.
*   **Not Optimal:**  DFS does not guarantee finding the shortest or cheapest path to the goal. It finds the first solution it encounters, regardless of its cost.

**1.7 Time Complexity:**

*   O(b<sup>m</sup>) in the worst case, where *b* is the branching factor (maximum number of children of a node) and *m* is the maximum depth of the search tree.

**1.8 Space Complexity:**

*   O(bm), where *b* is the branching factor and *m* is the maximum depth of the search tree.  This is much more space efficient than BFS when m is large.

---

### 2. Breadth-First Search (BFS)

**2.1 Definition:**

*   Breadth-First Search (BFS) explores all nodes at the current depth level before moving to the next depth level.  It explores the search space level by level.

**2.2 Key Concepts:**

*   **Queue (FIFO - First-In, First-Out):** BFS uses a queue to store the nodes to be visited.  Nodes are enqueued (added to the back) and dequeued (removed from the front).
*   **Visited Nodes:** Similar to DFS, BFS uses a set of visited nodes to avoid cycles and redundant exploration.

**2.3 Algorithm Steps:**

1.  Enqueue the initial state into the queue.
2.  While the queue is not empty:
    *   Dequeue a node from the queue.
    *   If the node is the goal state, return success.
    *   If the node has not been visited:
        *   Mark the node as visited.
        *   Enqueue all unvisited children of the node into the queue.

**2.4 Example:**

Using the same graph as before:

```
     A
    / \
   B   C
  / \   \
 D   E   F
     \
      G
```

Starting from node A, the BFS traversal order is: A -> B -> C -> D -> E -> F -> G

**2.5 Advantages:**

*   **Complete:**  If a solution exists at a finite depth, BFS is guaranteed to find it.
*   **Optimal (for uniform cost search):** If all step costs are equal (i.e., a uniform cost search space), BFS guarantees finding the shortest path to the goal (i.e., the solution with the fewest steps).

**2.6 Disadvantages:**

*   **High Memory Consumption:** BFS needs to store all nodes at the current level of the search tree. This can be a significant issue for problems with high branching factors and/or deep solutions.
*   **Can be slow for deep solutions:**  BFS must explore all nodes at shallower depths before reaching deeper goal states.

**2.7 Time Complexity:**

*   O(b<sup>d</sup>) in the worst case, where *b* is the branching factor and *d* is the depth of the shallowest goal state.

**2.8 Space Complexity:**

*   O(b<sup>d</sup>), where *b* is the branching factor and *d* is the depth of the shallowest goal state.  This makes BFS impractical for large problem spaces.

---

### 3. Iterative Deepening Search (IDS)

**3.1 Definition:**

*   Iterative Deepening Search (IDS) combines the space efficiency of DFS with the completeness and optimality (for uniform cost search) of BFS. It performs a series of depth-limited DFS searches, gradually increasing the depth limit until a goal state is found.

**3.2 Key Concepts:**

*   **Depth-Limited DFS:**  IDS uses DFS as a subroutine, but with a maximum depth limit. If the goal is not found within the limit, the search fails.
*   **Iterative Increase:** The depth limit is incremented in each iteration.  Typically starts at depth 0 and increases by 1 in each iteration.

**3.3 Algorithm Steps:**

1.  For depth limit *d* = 0, 1, 2, ...:
    *   Perform a depth-limited DFS with a depth limit of *d*.
    *   If the depth-limited DFS finds the goal, return success.
    *   If the depth-limited DFS reaches the depth limit without finding the goal, continue to the next iteration (increase *d*).

**3.4 Example:**

Using the same graph as before:

```
     A
    / \
   B   C
  / \   \
 D   E   F
     \
      G
```

IDS would proceed as follows:

*   **Depth Limit 0:** A
*   **Depth Limit 1:** A -> B, A -> C
*   **Depth Limit 2:** A -> B -> D, A -> B -> E, A -> C -> F
*   **Depth Limit 3:** A -> B -> D, A -> B -> E -> G, A -> C -> F
    *   (Assuming G is the goal, the search would stop here)

**3.5 Advantages:**

*   **Complete:** IDS is guaranteed to find a solution if one exists at a finite depth.
*   **Optimal (for uniform cost search):** IDS finds the shallowest goal state.
*   **Low Memory Consumption:** Like DFS, IDS only needs to store the path from the root to the current node, making it space-efficient.
*   **Combines the best of DFS and BFS.**

**3.6 Disadvantages:**

*   **Redundant Exploration:** IDS repeatedly explores the same nodes in each iteration.  However, because most nodes are at the bottom level, this redundancy is often not a significant issue in practice.

**3.7 Time Complexity:**

*   O(b<sup>d</sup>), where *b* is the branching factor and *d* is the depth of the shallowest goal state.  Although it re-explores nodes, the complexity remains the same as BFS because most nodes are at the deepest level.

**3.8 Space Complexity:**

*   O(bd), where *b* is the branching factor and *d* is the depth of the shallowest goal state. This is the same as DFS.

---

### 4. Comparison Table

| Feature           | DFS                                    | BFS                                    | IDS                                       |
| ----------------- | -------------------------------------- | -------------------------------------- | ------------------------------------------ |
| Completeness      | No (unless finite depth)               | Yes                                    | Yes                                        |
| Optimality        | No                                     | Yes (for uniform cost search)            | Yes (for uniform cost search)             |
| Time Complexity    | O(b<sup>m</sup>)                        | O(b<sup>d</sup>)                        | O(b<sup>d</sup>)                             |
| Space Complexity   | O(bm)                                   | O(b<sup>d</sup>)                        | O(bd)                                      |
| Implementation    | Stack or Recursion                    | Queue                                  | Iterative calls to Depth-Limited DFS       |
| Use Cases         | Path finding in games, Topological sort | Finding shortest path in unweighted graphs| Search spaces with unknown depth, Resource limited environments |

---

### 5. Practice Questions & Exercises

**Question 1:**  Describe a scenario where DFS would be more suitable than BFS.  Explain why.

**Answer:** A scenario where DFS would be more suitable than BFS is when the search space is very deep and a solution is likely to be found at a deeper level. Because DFS is more space-efficient, it can explore deeper branches without running out of memory.  For example, exploring a complex maze where the exit is likely to be far away from the entrance.

**Question 2:**  Describe a scenario where BFS would be more suitable than DFS. Explain why.

**Answer:** A scenario where BFS would be more suitable than DFS is when you need to find the *shortest* path to a goal in a uniform cost search space (where each step has the same cost). BFS guarantees finding the shortest path first. For example, finding the nearest gas station on a map where each road segment has roughly the same length.

**Question 3:**  Explain why IDS is often preferred over both DFS and BFS in many practical search problems.

**Answer:** IDS is often preferred because it combines the advantages of both DFS and BFS.  It has the low memory footprint of DFS and is complete and optimal (for uniform cost search) like BFS. While it explores some nodes multiple times, the redundancy is often outweighed by its space efficiency and guarantees of finding the shallowest goal.  It's particularly useful when the depth of the solution is unknown.

**Question 4:**  Suppose you have a search space with a branching factor of 3, and the goal is located at depth 5.  Approximately how many nodes will each algorithm explore?

*   **(a) DFS (assume it explores the entire depth of the search space which is 10):** O(3<sup>10</sup>) = 59,049
*   **(b) BFS:** O(3<sup>5</sup>) = 243
*   **(c) IDS:** Although this one is harder to calculate precisely. The number of nodes explored are computed like this

    Level 0: 1 node
    Level 1: 3 nodes
    Level 2: 9 nodes
    Level 3: 27 nodes
    Level 4: 81 nodes
    Level 5: 243 nodes

    Iterative deepening would explore all these nodes again for each increment of depth. Therefore:
    Level 0 will be explored 6 times (depth 0, 1, 2, 3, 4, 5)
    Level 1 will be explored 5 times (depth 1, 2, 3, 4, 5)
    Level 2 will be explored 4 times (depth 2, 3, 4, 5)
    Level 3 will be explored 3 times (depth 3, 4, 5)
    Level 4 will be explored 2 times (depth 4, 5)
    Level 5 will be explored 1 time (depth 5)

    Therefore nodes explored = 6\*1 + 5\*3 + 4\*9 + 3\*27 + 2\*81 + 1\*243 = 6 + 15 + 36 + 81 + 162 + 243 = 543
    IDS will explore roughly twice as many as BFS.

**Question 5:**  Implement DFS and BFS in your preferred programming language to solve a simple maze.  (This is a more complex exercise requiring coding)

---

### 6. Important Points to Remember

*   **Uninformed Search:** DFS, BFS, and IDS are *uninformed* search algorithms.  They do not use any domain-specific knowledge to guide the search.
*   **Trade-offs:** Each algorithm has its own trade-offs between completeness, optimality, time complexity, and space complexity.
*   **Choosing the Right Algorithm:** The best algorithm to use depends on the specific problem and its characteristics.
*   **Branching Factor:** The branching factor significantly impacts the performance of these algorithms.  A high branching factor can make BFS and IDS impractical due to memory limitations.
*   **Depth of Solution:** The depth of the shallowest goal state is a crucial factor in determining the efficiency of BFS and IDS.

These notes provide a solid foundation for understanding DFS, BFS, and IDS. Remember to practice applying these algorithms to different problem scenarios to solidify your knowledge. Good luck!
