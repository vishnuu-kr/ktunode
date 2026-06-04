---
title: "Applications of Graphs  - Single Source All Destination"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac47"
status: "completed"
scrapedAt: "2026-05-20T16:23:07.796Z"
---
## DATA STRUCTURES AND ALGORITHMS - Module 3: Trees and Graphs - Topic: Applications of Graphs - Single Source All Destination

**Learning Outcomes:**

*   Understand the concept of Single Source All Destination (SSAD) problems.
*   Identify common algorithms used to solve SSAD problems: Breadth-First Search (BFS) and Dijkstra's Algorithm.
*   Explain how BFS can be used to find the shortest path in unweighted graphs.
*   Explain how Dijkstra's Algorithm can be used to find the shortest path in weighted graphs.
*   Implement BFS and Dijkstra's Algorithm in a programming language.
*   Analyze the time complexity of BFS and Dijkstra's Algorithm.
*   Apply BFS and Dijkstra's Algorithm to solve real-world problems.
*   Understand the limitations of Dijkstra's algorithm and when it's not applicable.

---

### 1. Introduction to Single Source All Destination (SSAD) Problems

*   **Definition:**  A Single Source All Destination (SSAD) problem involves finding the shortest (or least cost) path from a designated source node to all other nodes in a graph.

*   **Key Characteristics:**
    *   A single starting point (the "source").
    *   The goal is to determine the optimal paths to *every* other reachable node.
    *   "Optimal" is defined by the specific problem (e.g., shortest distance, lowest cost).

*   **Examples:**
    *   Finding the shortest driving routes from your home to all other locations in your city.
    *   Determining the fastest way to send a network packet from a server to all other computers on the network.
    *   Calculating the minimum cost to transport goods from a central warehouse to all retail stores.

---

### 2. Algorithms for Solving SSAD Problems

Two main algorithms are commonly used for solving SSAD problems:

*   **Breadth-First Search (BFS):**  Ideal for *unweighted* graphs.  Guarantees finding the shortest path (in terms of the number of edges) from the source to all reachable nodes.
*   **Dijkstra's Algorithm:** Used for *weighted* graphs where edge weights are *non-negative*. Finds the shortest path (in terms of total weight) from the source to all reachable nodes.

---

### 3. Breadth-First Search (BFS) for Unweighted Graphs

*   **Concept:** BFS explores a graph layer by layer, starting from the source node.  It visits all neighbors of the source before moving on to their neighbors, and so on.

*   **Algorithm:**

    1.  Create a queue and enqueue the source node.
    2.  Mark the source node as visited.
    3.  Create a `distance` array, initialized with infinity (or a large value) for all nodes except the source, which is initialized to 0.
    4.  While the queue is not empty:
        *   Dequeue a node `u` from the queue.
        *   For each neighbor `v` of `u`:
            *   If `v` is not visited:
                *   Mark `v` as visited.
                *   Enqueue `v` into the queue.
                *   `distance[v] = distance[u] + 1` (update the distance to `v`)

*   **Explanation:**  Because BFS explores the graph level by level, the first time a node is visited, it's guaranteed to be reached via the shortest path (in terms of the number of edges).  The `distance` array stores the number of edges in the shortest path from the source.

*   **Example:**

    Consider an unweighted graph:

    ```
    A -- B -- C
    |    |    |
    D -- E -- F
    ```

    Source node: A

    BFS execution:

    1.  Queue: [A], Distance[A] = 0, Visited[A] = True
    2.  Dequeue A. Neighbors: B, D.
    3.  Queue: [B, D], Distance[B] = 1, Distance[D] = 1, Visited[B] = True, Visited[D] = True
    4.  Dequeue B. Neighbors: A, C, E.
    5.  Queue: [D, C, E], Distance[C] = 2, Distance[E] = 2, Visited[C] = True, Visited[E] = True
    6.  Dequeue D. Neighbors: A, E.
    7.  Queue: [C, E], (E is already visited)
    8.  Dequeue C. Neighbors: B, F.
    9.  Queue: [E, F], Distance[F] = 3, Visited[F] = True
    10. Dequeue E. Neighbors: B, D, F. (All visited)
    11. Dequeue F. Neighbors: C, E. (All visited)

    Result:

    *   Distance[A] = 0
    *   Distance[B] = 1
    *   Distance[C] = 2
    *   Distance[D] = 1
    *   Distance[E] = 2
    *   Distance[F] = 3

*   **Time Complexity:** O(V + E), where V is the number of vertices and E is the number of edges.  This is because each vertex and edge is visited at most once.

---

### 4. Dijkstra's Algorithm for Weighted Graphs

*   **Concept:** Dijkstra's algorithm iteratively explores the graph, maintaining a set of visited nodes and a priority queue of unvisited nodes. The priority queue is ordered by the shortest known distance from the source.

*   **Algorithm:**

    1.  Create a `distance` array, initialized with infinity for all nodes except the source, which is initialized to 0.
    2.  Create a priority queue (min-heap) and add the source node with a priority of 0. The priority queue stores tuples: (distance, node).
    3.  While the priority queue is not empty:
        *   Extract the node `u` with the minimum distance from the priority queue.
        *   If the extracted distance is greater than the current distance to `u` (i.e., `distance[u]`), continue to the next iteration (this is an optimization to handle duplicate entries in the priority queue).
        *   For each neighbor `v` of `u`:
            *   Calculate the distance from the source to `v` through `u`: `new_distance = distance[u] + weight(u, v)`, where `weight(u, v)` is the weight of the edge between `u` and `v`.
            *   If `new_distance < distance[v]`:
                *   `distance[v] = new_distance` (update the shortest distance to `v`)
                *   Add `v` to the priority queue with a priority of `new_distance`.

*   **Explanation:** Dijkstra's algorithm greedily selects the node closest to the source at each step.  By considering all neighbors of that node, it updates the shortest known distances to those neighbors.  The priority queue ensures that the node with the smallest current distance is always explored next.

*   **Example:**

    Consider a weighted graph:

    ```
    A --5-- B --2-- C
    |       |       |
    6       3       9
    |       |       |
    D --4-- E --6-- F
    ```

    Source node: A

    Dijkstra's Algorithm Execution:

    1.  Distance: [A:0, B:inf, C:inf, D:inf, E:inf, F:inf]
    2.  Priority Queue: [(0, A)]
    3.  Dequeue (0, A). Neighbors: B(5), D(6)
    4.  Distance: [A:0, B:5, C:inf, D:6, E:inf, F:inf]
    5.  Priority Queue: [(5, B), (6, D)]
    6.  Dequeue (5, B). Neighbors: A(5), C(2), E(3)
    7.  Distance: [A:0, B:5, C:7, D:6, E:8, F:inf]
    8.  Priority Queue: [(6, D), (7, C), (8, E)]
    9.  Dequeue (6, D). Neighbors: A(6), E(4)
    10. Distance: [A:0, B:5, C:7, D:6, E:8, F:inf] (E remains 8, 6+4>8 so no change)
    11. Priority Queue: [(7, C), (8, E)]
    12. Dequeue (7, C). Neighbors: B(2), F(9)
    13. Distance: [A:0, B:5, C:7, D:6, E:8, F:16]
    14. Priority Queue: [(8, E), (16, F)]
    15. Dequeue (8, E). Neighbors: B(3), D(4), F(6)
    16. Distance: [A:0, B:5, C:7, D:6, E:8, F:14] (F gets updated: 8+6=14)
    17. Priority Queue: [(14, F)]
    18. Dequeue (14, F).

    Result:

    *   Distance[A] = 0
    *   Distance[B] = 5
    *   Distance[C] = 7
    *   Distance[D] = 6
    *   Distance[E] = 8
    *   Distance[F] = 14

*   **Time Complexity:**  O(E log V), where V is the number of vertices and E is the number of edges, using a priority queue (heap). If a simpler implementation of a priority queue (like an array) is used it becomes O(V^2)

*   **Important Considerations:**
    *   Dijkstra's algorithm *requires* non-negative edge weights.  It will not produce correct results if negative edge weights are present.
    *   The algorithm assumes that all edges are directed (or can be treated as directed with equal weight in both directions).

---

### 5. Real-World Applications

*   **Navigation Systems (GPS):**  Finding the shortest route between two points on a map.
*   **Network Routing:**  Determining the optimal path for data packets to travel across a network.
*   **Transportation Logistics:**  Optimizing delivery routes for trucks or planes.
*   **Resource Allocation:** Finding the most efficient way to allocate resources in a network.
*   **Social Networks:** Calculating degrees of separation between users.
*   **Game AI:** Pathfinding for characters in video games.

---

### 6. Limitations of Dijkstra's Algorithm

*   **Negative Edge Weights:** As mentioned before, Dijkstra's algorithm *does not work* with negative edge weights. It can get stuck in cycles of negative weights, constantly decreasing the path cost and never reaching the true shortest path. Bellman-Ford algorithm is used for graph with negative edges.

*   **Directed vs. Undirected Graphs:** While Dijkstra's can handle both directed and undirected graphs, in undirected graphs, be sure each edge is represented in both directions.

---

### 7. Practice Questions and Exercises

**Question 1:**

Given the following unweighted graph, use BFS to find the shortest path from node A to all other nodes.

```
A -- B -- C
|    |    |
D -- E -- F
```

**Answer:**

*   A: 0
*   B: 1
*   C: 2
*   D: 1
*   E: 2
*   F: 3

**Question 2:**

Given the following weighted graph, use Dijkstra's algorithm to find the shortest path from node A to all other nodes.

```
A --2-- B --3-- C
|       |       |
4       1       5
|       |       |
D --1-- E --2-- F
```

**Answer:**

*   A: 0
*   B: 2
*   C: 5
*   D: 4
*   E: 3
*   F: 5

**Question 3:**

Explain why Dijkstra's algorithm would not work correctly if the edge between nodes B and C had a weight of -1 in the graph from Question 2.

**Answer:**

Dijkstra's algorithm assumes that adding an edge to a path will always increase the total path cost. With a negative edge weight, this assumption is violated. The algorithm might visit node C before realizing there's a shorter path through node B, leading to an incorrect shortest path calculation. It becomes possible to continually reduce distance by revisiting node along the negative weight edges leading to infinite loop or incorrect calculation.

**Question 4:**

Implement BFS in Python to find the shortest path from a source node to all other nodes in an unweighted graph represented as an adjacency list.

```python
from collections import deque

def bfs(graph, source):
    """
    Performs BFS to find the shortest path from a source node to all other nodes.

    Args:
        graph: A dictionary representing the graph as an adjacency list.
        source: The source node.

    Returns:
        A dictionary where keys are nodes and values are the shortest distances from the source.
    """
    distances = {node: float('inf') for node in graph}
    distances[source] = 0
    visited = {node: False for node in graph}
    visited[source] = True
    queue = deque([source])

    while queue:
        node = queue.popleft()
        for neighbor in graph[node]:
            if not visited[neighbor]:
                visited[neighbor] = True
                distances[neighbor] = distances[node] + 1
                queue.append(neighbor)

    return distances

# Example usage:
graph = {
    'A': ['B', 'D'],
    'B': ['A', 'C', 'E'],
    'C': ['B', 'F'],
    'D': ['A', 'E'],
    'E': ['B', 'D', 'F'],
    'F': ['C', 'E']
}
source_node = 'A'
shortest_distances = bfs(graph, source_node)
print(shortest_distances) # Expected output: {'A': 0, 'B': 1, 'D': 1, 'C': 2, 'E': 2, 'F': 3}
```

**Question 5:**

Implement Dijkstra's algorithm in Python to find the shortest path from a source node to all other nodes in a weighted graph represented as an adjacency list.

```python
import heapq

def dijkstra(graph, source):
    """
    Performs Dijkstra's algorithm to find the shortest path from a source node to all other nodes.

    Args:
        graph: A dictionary representing the weighted graph as an adjacency list.
               Each key represents a node, and the value is a list of tuples (neighbor, weight).
        source: The source node.

    Returns:
        A dictionary where keys are nodes and values are the shortest distances from the source.
    """
    distances = {node: float('inf') for node in graph}
    distances[source] = 0
    pq = [(0, source)]  # Priority queue: (distance, node)

    while pq:
        dist, node = heapq.heappop(pq)

        if dist > distances[node]:
            continue  # Optimization: Ignore outdated entries in the priority queue

        for neighbor, weight in graph[node]:
            new_dist = distances[node] + weight
            if new_dist < distances[neighbor]:
                distances[neighbor] = new_dist
                heapq.heappush(pq, (new_dist, neighbor))

    return distances


# Example usage:
graph = {
    'A': [('B', 2), ('D', 4)],
    'B': [('A', 2), ('C', 3), ('E', 1)],
    'C': [('B', 3), ('F', 5)],
    'D': [('A', 4), ('E', 1)],
    'E': [('B', 1), ('D', 1), ('F', 2)],
    'F': [('C', 5), ('E', 2)]
}
source_node = 'A'
shortest_distances = dijkstra(graph, source_node)
print(shortest_distances) # Expected output: {'A': 0, 'B': 2, 'D': 4, 'C': 5, 'E': 3, 'F': 5}

```

---

### 8. Important Points to Remember

*   BFS is used for unweighted graphs to find the shortest path based on the *number of edges*.
*   Dijkstra's algorithm is used for weighted graphs (with non-negative edge weights) to find the shortest path based on the *total weight*.
*   Dijkstra's algorithm *does not work* with negative edge weights.
*   The time complexity of BFS is O(V + E).
*   The time complexity of Dijkstra's algorithm is O(E log V) using a priority queue (heap).
*   Understanding the limitations of each algorithm is crucial for choosing the right one for a given problem.
*   SSAD problems are common in many real-world applications, making these algorithms essential tools for solving optimization problems.
