---
title: "Traversals : BFS"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 2: Disjoint Sets "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b551"
status: "completed"
scrapedAt: "2026-05-20T16:45:37.411Z"
---
# DESIGN AND ANALYSIS OF ALGORITHMS - Module 2: Disjoint Sets - Traversals: BFS

## Learning Outcomes:

*   Understand the concept of graph traversal.
*   Explain and implement Breadth-First Search (BFS) algorithm.
*   Analyze the time and space complexity of BFS.
*   Apply BFS to solve graph-related problems (e.g., finding shortest paths in unweighted graphs, connected components).
*   Differentiate between BFS and Depth-First Search (DFS).

## 1. Introduction to Graph Traversal

*   **Definition:** Graph traversal is the process of visiting (checking and/or updating) each node in a graph in a specific order. It's a fundamental graph algorithm used in a wide range of applications.

*   **Purpose:**
    *   Explore the graph's structure.
    *   Search for specific nodes.
    *   Find paths between nodes.
    *   Identify connected components.
    *   Solve various graph-related problems.

*   **Types of Graph Traversal:**
    *   Breadth-First Search (BFS)
    *   Depth-First Search (DFS)

## 2. Breadth-First Search (BFS)

*   **Definition:** BFS is a graph traversal algorithm that explores a graph level by level. It starts at a chosen node (the "source" node) and explores all of its neighbors before moving to the next level of neighbors.

*   **Key Concepts:**
    *   **Queue:**  BFS uses a queue data structure to keep track of the nodes to visit.
    *   **Visited Set:**  Keeps track of the nodes that have already been visited to avoid cycles and redundant processing.
    *   **Level-by-Level Exploration:**  Nodes closer to the source node are visited before nodes farther away.

*   **Algorithm:**

    1.  **Initialization:**
        *   Create a queue `Q`.
        *   Create a set `visited` to keep track of visited nodes.
        *   Enqueue the starting node `s` into `Q`.
        *   Mark `s` as visited in `visited`.
    2.  **Iteration:**
        *   While `Q` is not empty:
            *   Dequeue a node `u` from `Q`.
            *   Process the node `u` (e.g., print it, update a counter).
            *   For each neighbor `v` of `u`:
                *   If `v` is not in `visited`:
                    *   Enqueue `v` into `Q`.
                    *   Mark `v` as visited in `visited`.
    3.  **Termination:** The algorithm terminates when the queue `Q` is empty, meaning all reachable nodes from the starting node have been visited.

*   **Pseudocode:**

    ```pseudocode
    BFS(Graph G, Node start_node):
      Q = new Queue()
      visited = new Set()

      Q.enqueue(start_node)
      visited.add(start_node)

      while not Q.isEmpty():
        u = Q.dequeue()
        process(u)  // e.g., print u

        for each neighbor v of u in G:
          if v not in visited:
            Q.enqueue(v)
            visited.add(v)
    ```

*   **Example:**

    Consider the following graph:

    ```
    A -- B -- C
    |    |    |
    D -- E -- F
    ```

    Let's perform BFS starting from node `A`.

    1.  **Initialization:** `Q = [A]`, `visited = {A}`
    2.  **Iteration 1:**
        *   `u = A`, `Q = []`
        *   Neighbors of `A`: `B`, `D`
        *   `B` not in `visited`: `Q = [B]`, `visited = {A, B}`
        *   `D` not in `visited`: `Q = [B, D]`, `visited = {A, B, D}`
    3.  **Iteration 2:**
        *   `u = B`, `Q = [D]`
        *   Neighbors of `B`: `A`, `C`, `E`
        *   `A` in `visited`
        *   `C` not in `visited`: `Q = [D, C]`, `visited = {A, B, D, C}`
        *   `E` not in `visited`: `Q = [D, C, E]`, `visited = {A, B, D, C, E}`
    4.  **Iteration 3:**
        *   `u = D`, `Q = [C, E]`
        *   Neighbors of `D`: `A`, `E`
        *   `A` in `visited`
        *   `E` in `visited`
    5.  **Iteration 4:**
        *   `u = C`, `Q = [E]`
        *   Neighbors of `C`: `B`, `F`
        *   `B` in `visited`
        *   `F` not in `visited`: `Q = [E, F]`, `visited = {A, B, D, C, E, F}`
    6.  **Iteration 5:**
        *   `u = E`, `Q = [F]`
        *   Neighbors of `E`: `B`, `D`, `F`
        *   `B` in `visited`
        *   `D` in `visited`
        *   `F` in `visited`
    7.  **Iteration 6:**
        *   `u = F`, `Q = []`
        *   Neighbors of `F`: `C`, `E`
        *   `C` in `visited`
        *   `E` in `visited`

    **Traversal Order:** A, B, D, C, E, F

## 3. Time and Space Complexity of BFS

*   **Time Complexity:**  O(V + E), where V is the number of vertices (nodes) and E is the number of edges in the graph.
    *   Each vertex is enqueued and dequeued at most once, taking O(1) time per operation.
    *   Each edge is considered at most once during the neighbor iteration.
*   **Space Complexity:** O(W), where W is the maximum width of the graph (the maximum number of nodes at any level). In the worst case (e.g., a complete graph), the space complexity can be O(V) as all nodes might be in the queue at the same time. The visited set also requires O(V) space.

## 4. Applications of BFS

*   **Shortest Path in Unweighted Graphs:** BFS can find the shortest path (in terms of the number of edges) between two nodes in an unweighted graph.
*   **Connected Components:** BFS can be used to identify connected components in a graph.  Starting from an unvisited node, BFS will visit all nodes in that node's connected component.
*   **Web Crawlers:**  Web crawlers use a form of BFS to explore the internet, following links from one page to the next.
*   **Social Networking:** Finding people within a certain "degree of separation" (e.g., friends of friends of friends).
*   **Network Routing:**  Used in routing protocols to find the shortest path between two nodes in a network.
*   **GPS Navigation:** BFS can be adapted to pathfinding on maps.

## 5. BFS vs. DFS

| Feature           | Breadth-First Search (BFS) | Depth-First Search (DFS) |
| ----------------- | -------------------------- | -------------------------- |
| Data Structure    | Queue                      | Stack (Implicitly via recursion) |
| Exploration       | Level-by-Level             | Depth-First               |
| Shortest Path (Unweighted) | Guaranteed                | Not Guaranteed            |
| Space Complexity  | O(W) (W = width)           | O(D) (D = maximum depth)    |
| Use Cases         | Shortest paths, web crawling, finding nearest neighbors | Cycle detection, topological sorting, path existence |

## 6. Practice Questions and Exercises

**Question 1:**

Apply BFS to the following graph starting from node 'A'.  List the nodes in the order they are visited.

```
A -- B -- C
|    |
D -- E
|
F
```

**Answer 1:** A, B, D, C, E, F

**Question 2:**

What is the time complexity of BFS on a graph represented using an adjacency matrix?

**Answer 2:** O(V^2), because for each vertex, you need to iterate through all other vertices to find its neighbors.

**Question 3:**

Explain how BFS can be used to find the shortest path between two nodes in an unweighted graph.

**Answer 3:** BFS explores the graph level by level. When you reach the target node during BFS, the number of levels you have traversed represents the shortest path (in terms of the number of edges) from the starting node to the target node.  You can keep track of the path by storing the parent node for each visited node.

**Question 4:**

Implement BFS in Python.

**Answer 4:**

```python
from collections import deque

def bfs(graph, start_node):
  """Performs Breadth-First Search on a graph.

  Args:
    graph: A dictionary representing the graph, where keys are nodes and values
           are lists of their neighbors.
    start_node: The node to start the search from.

  Returns:
    A list of nodes in the order they were visited.
  """

  visited = set()
  queue = deque([start_node])
  visited.add(start_node)
  traversal_order = []

  while queue:
    node = queue.popleft()
    traversal_order.append(node)

    for neighbor in graph.get(node, []): # Use graph.get to handle nodes with no outgoing edges
      if neighbor not in visited:
        visited.add(neighbor)
        queue.append(neighbor)

  return traversal_order

# Example Usage
graph = {
    'A': ['B', 'D'],
    'B': ['A', 'C', 'E'],
    'C': ['B'],
    'D': ['A', 'E', 'F'],
    'E': ['B', 'D'],
    'F': ['D']
}

start_node = 'A'
traversal = bfs(graph, start_node)
print(f"BFS traversal starting from {start_node}: {traversal}")
```

**Question 5:**

Explain why BFS uses a queue while DFS uses a stack.

**Answer 5:** BFS uses a queue to maintain the order of exploration: nodes at the same level are visited before nodes at deeper levels. This ensures that the algorithm finds the shortest path in terms of the number of edges. DFS uses a stack to explore as deeply as possible along each branch before backtracking.  A stack allows DFS to maintain the path currently being explored.

## 7. Important Points to Remember

*   BFS explores the graph level by level.
*   BFS uses a queue to store nodes to visit.
*   BFS finds the shortest path in *unweighted* graphs.
*   The time complexity of BFS is O(V + E).
*   The space complexity of BFS is O(W), where W is the maximum width of the graph.
*   Remember to use a `visited` set to avoid cycles and redundant processing.
*   BFS is well-suited for finding nearest neighbors and exploring graphs where the shortest path is important.
