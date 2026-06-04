---
title: "Shortest Path Problem – Dijkstra’s Algorithm"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 3: Greedy Strategy "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b55e"
status: "completed"
scrapedAt: "2026-05-20T16:45:45.891Z"
---
## DESIGN AND ANALYSIS OF ALGORITHMS - Module 3: Greedy Strategy - Shortest Path Problem – Dijkstra’s Algorithm

**Module Overview:** This module explores the Greedy Strategy algorithmic paradigm. We will delve into its principles and applications, focusing specifically on Dijkstra's Algorithm for solving the single-source shortest path problem.

**Topic:** Shortest Path Problem – Dijkstra’s Algorithm

**Learning Outcomes:**

*   Understand the Shortest Path Problem and its applications.
*   Explain the Greedy Strategy and its applicability to the Shortest Path Problem.
*   Describe the working principle of Dijkstra's Algorithm.
*   Implement Dijkstra's Algorithm.
*   Analyze the time complexity of Dijkstra's Algorithm.
*   Apply Dijkstra's Algorithm to solve real-world problems.
*   Identify limitations and drawbacks of Dijkstra’s algorithm.

---

### 1. Introduction to the Shortest Path Problem

*   **Definition:** The Shortest Path Problem aims to find the path with the minimum total weight (cost, distance, time, etc.) between two vertices (nodes) in a graph.

*   **Types of Shortest Path Problems:**

    *   **Single-Source Shortest Path:** Find the shortest paths from a single source vertex to all other vertices in the graph. (Dijkstra's Algorithm addresses this)
    *   **Single-Destination Shortest Path:** Find the shortest paths from all vertices in the graph to a single destination vertex. (Can be solved by reversing the edges and applying a single-source algorithm)
    *   **All-Pairs Shortest Path:** Find the shortest paths between every pair of vertices in the graph. (Algorithms like Floyd-Warshall are used)

*   **Applications:**

    *   **Navigation Systems (GPS):** Finding the shortest routes between locations.
    *   **Network Routing:** Determining the best path for data packets to travel across a network.
    *   **Transportation Planning:** Optimizing delivery routes and transportation networks.
    *   **Social Networks:** Finding connections with the fewest intermediaries.
    *   **Robotics:** Path planning for robots.

---

### 2. The Greedy Strategy

*   **Definition:** The Greedy Strategy is an algorithmic paradigm that makes the locally optimal choice at each step with the hope of finding the global optimum.  It builds a solution incrementally, making the best decision available at the current moment without considering future consequences.

*   **Key Characteristics:**

    *   **Locally Optimal Choice:** Selects the most promising option at each step.
    *   **Irrevocable Decisions:** Once a choice is made, it cannot be undone.
    *   **Simple to Implement:** Often leads to straightforward algorithms.
    *   **Not Always Optimal:** Doesn't guarantee the globally optimal solution for all problems.

*   **Applicability to the Shortest Path Problem:**

    *   In the context of shortest paths, the greedy approach involves selecting the vertex closest to the source vertex at each step and updating the distances to its neighbors.  Dijkstra's Algorithm embodies this principle.
    *   **Why it works (for non-negative edge weights):**  With non-negative weights, once a vertex's shortest distance from the source is determined, that distance will not decrease in subsequent iterations.

---

### 3. Dijkstra's Algorithm

*   **Description:** Dijkstra's Algorithm is a greedy algorithm used to find the shortest paths from a single source vertex to all other vertices in a weighted graph where all edge weights are non-negative.

*   **Working Principle:**

    1.  **Initialization:**
        *   Assign a distance value to each vertex: Set the distance to the source vertex to 0 and the distance to all other vertices to infinity (or a large value).
        *   Maintain a set of visited vertices (initially empty).
    2.  **Iteration:**
        *   While there are unvisited vertices:
            *   Select the unvisited vertex with the smallest distance value.  Let's call this vertex 'u'.
            *   Mark vertex 'u' as visited.
            *   For each neighbor 'v' of vertex 'u':
                *   Calculate the distance from the source to 'v' through 'u': `distance[u] + weight(u, v)`.
                *   If this calculated distance is less than the current distance value for 'v' (`distance[v]`):
                    *   Update `distance[v]` to the calculated distance.
                    *   Update the predecessor of 'v' to be 'u' (This is used to reconstruct the shortest path).

*   **Pseudocode:**

    ```
    function Dijkstra(graph, source):
        dist = {}  // Dictionary to store shortest distances from source
        prev = {}  // Dictionary to store predecessor vertex in shortest path
        Q = {}     // Priority queue (or set) of unvisited vertices

        for each vertex v in graph:
            dist[v] = infinity  // Unknown distance from source to v
            prev[v] = undefined   // Previous node in optimal path from source
            Q[v] = v           // All nodes initially in Q (unvisited)

        dist[source] = 0      // Distance from source to source

        while Q is not empty:
            u = vertex in Q with min dist[u]  // Vertex with minimum distance
            remove u from Q

            for each neighbor v of u:
                alt = dist[u] + length(u, v)
                if alt < dist[v]:
                    dist[v] = alt
                    prev[v] = u

        return dist, prev  // dist: shortest distances, prev: predecessors
    ```

*   **Example:**

    Consider a graph with vertices A, B, C, D, and E. The source vertex is A. The edge weights are as follows:

    *   A-B: 4
    *   A-C: 2
    *   B-C: 1
    *   B-D: 5
    *   C-D: 8
    *   C-E: 10
    *   D-E: 2
    *   B-E: 1

    Let's trace Dijkstra's Algorithm:

    | Iteration | Current Vertex (u) | Visited |  A    |  B    |  C    |  D    |  E    |
    | --------- | ------------------ | ------- | ----- | ----- | ----- | ----- | ----- |
    | Initial   |                    | {}      | 0     | ∞     | ∞     | ∞     | ∞     |
    | 1         | A                  | {A}     | 0     | 4     | 2     | ∞     | ∞     |
    | 2         | C                  | {A, C}  | 0     | 3     | 2     | 10    | 12    |
    | 3         | B                  | {A, C, B}| 0     | 3     | 2     | 8    | 4     |
    | 4         | E                  | {A, C, B, E}  | 0     | 3     | 2     | 6    | 4     |
    | 5         | D                  | {A, C, B, E, D} | 0     | 3     | 2     | 6    | 4     |

    Therefore, the shortest distances from A to each vertex are:

    *   A -> A: 0
    *   A -> B: 3  (Path: A -> C -> B)
    *   A -> C: 2
    *   A -> D: 6  (Path: A -> C -> B -> E -> D or A -> C -> B -> D)
    *   A -> E: 4  (Path: A -> C -> B -> E)

    The `prev` dictionary helps reconstruct the path. For example:
    * prev[B] = C
    * prev[C] = A
    This allows us to retrace the shortest path from A to B: B <- C <- A

---

### 4. Implementation of Dijkstra's Algorithm (Python)

```python
import heapq

def dijkstra(graph, start):
    """
    Finds the shortest paths from a starting node to all other nodes in a graph.

    Args:
        graph: A dictionary representing the graph. Keys are nodes, and values are
               dictionaries representing neighbors and their edge weights.
        start: The starting node.

    Returns:
        A dictionary mapping each node to its shortest distance from the start node.
    """

    distances = {node: float('inf') for node in graph}  # Initialize distances to infinity
    distances[start] = 0  # Distance from start to itself is 0
    priority_queue = [(0, start)]  # Priority queue to store nodes to visit (distance, node)

    while priority_queue:
        dist, node = heapq.heappop(priority_queue)  # Get node with smallest distance

        if dist > distances[node]:  # If we've already processed this node with a shorter distance, skip
            continue

        for neighbor, weight in graph[node].items():
            new_dist = dist + weight
            if new_dist < distances[neighbor]:
                distances[neighbor] = new_dist
                heapq.heappush(priority_queue, (new_dist, neighbor))

    return distances


# Example Usage
graph = {
    'A': {'B': 4, 'C': 2},
    'B': {'C': 1, 'D': 5, 'E': 1},
    'C': {'D': 8, 'E': 10, 'B': 1},
    'D': {'E': 2},
    'E': {}
}

start_node = 'A'
shortest_distances = dijkstra(graph, start_node)

print(f"Shortest distances from {start_node}: {shortest_distances}")
```

*   **Explanation:**

    *   The `dijkstra` function takes the graph (represented as a dictionary) and the starting node as input.
    *   `distances` dictionary stores the shortest distances from the starting node to each node. Initialized to infinity for all nodes except the start node (which is 0).
    *   `priority_queue` is a heap-based priority queue that stores tuples of (distance, node).  `heapq` module is used for efficient heap operations.
    *   The `while` loop continues as long as the priority queue is not empty.
    *   `heapq.heappop(priority_queue)` retrieves and removes the node with the smallest distance from the priority queue.
    *   The inner `for` loop iterates through the neighbors of the current node.
    *   `new_dist` calculates the distance to the neighbor through the current node.
    *   If `new_dist` is shorter than the current distance to the neighbor, the distance is updated, and the neighbor is added to the priority queue.

---

### 5. Time Complexity Analysis

*   **Using Adjacency List and Linear Search:**  O(V<sup>2</sup> + E) where V is the number of vertices and E is the number of edges.  Finding the minimum distance vertex requires searching the entire distance array (O(V) time), and this is repeated for each vertex. The updating of distances takes O(E) in total.

*   **Using Adjacency List and Priority Queue (Heap):** O(E log V). This is the most common and efficient implementation.

    *   **Priority Queue Operations:**  Each edge is considered at most once, and for each edge, we might need to update the distance in the priority queue, which takes O(log V) time (heap operations).  The initialization of the priority queue involves inserting all vertices, which is O(V).  Extracting the minimum also takes O(log V), and we do this V times.

    *   **Conclusion:** The overall time complexity using a priority queue is dominated by the edge processing, resulting in O(E log V).  In a dense graph where E is close to V<sup>2</sup>, this becomes closer to O(V<sup>2</sup> log V).

*   **Choosing the right implementation:**

    *   For dense graphs (E close to V<sup>2</sup>), the linear search version might be faster in practice because the constant factors are smaller.
    *   For sparse graphs (E closer to V), the priority queue version is significantly faster due to the logarithmic time complexity.

---

### 6. Applications of Dijkstra's Algorithm

*   **Navigation and Routing:**  Finding the shortest route between two points on a map (GPS, Google Maps).

*   **Network Routing Protocols:**  OSPF (Open Shortest Path First) uses Dijkstra's Algorithm to determine the best paths for data packets in a network.

*   **Resource Allocation:**  Finding the most efficient way to allocate resources in a network or system.

*   **VLSI Design:**  Finding the shortest paths for connecting components on a microchip.

*   **Robotics Path Planning:**  Determining the optimal path for a robot to navigate through an environment.

---

### 7. Limitations and Drawbacks of Dijkstra's Algorithm

*   **Negative Edge Weights:** Dijkstra's Algorithm *does not work correctly* if the graph contains negative edge weights. The greedy assumption that once a vertex is visited, its shortest distance is finalized, is invalidated by negative weights.  Negative cycles can lead to infinite loops.  For graphs with negative edge weights, use the Bellman-Ford algorithm.

*   **Computational Cost:** While efficient with a priority queue, the algorithm can still be computationally expensive for very large graphs.

*   **Single-Source:** Dijkstra's Algorithm finds the shortest paths from a *single* source vertex.  For all-pairs shortest paths, other algorithms like Floyd-Warshall might be more suitable.

*   **Not Suitable for Dynamic Graphs:**  If the graph changes frequently (edge weights are updated often), re-running Dijkstra's Algorithm repeatedly can be inefficient.  Dynamic shortest path algorithms exist to address this.

---

### 8. Practice Questions and Exercises

1.  **Graph Representation:**  Consider the following graph:

    *   Nodes: A, B, C, D, E
    *   Edges: A-B(2), A-C(4), B-C(1), B-D(7), C-E(3), D-E(1)

    a)  Represent this graph as an adjacency list (dictionary) in Python.
    b)  Use Dijkstra's Algorithm (manually) to find the shortest paths from node A to all other nodes. Show your steps clearly.

    **Answer:**

    a)  ```python
        graph = {
            'A': {'B': 2, 'C': 4},
            'B': {'A': 2, 'C': 1, 'D': 7},
            'C': {'A': 4, 'B': 1, 'E': 3},
            'D': {'B': 7, 'E': 1},
            'E': {'C': 3, 'D': 1}
        }
        ```

    b)  Dijkstra's Algorithm from A:

        | Iteration | Current Vertex (u) | Visited |  A    |  B    |  C    |  D    |  E    |
        | --------- | ------------------ | ------- | ----- | ----- | ----- | ----- | ----- |
        | Initial   |                    | {}      | 0     | ∞     | ∞     | ∞     | ∞     |
        | 1         | A                  | {A}     | 0     | 2     | 4     | ∞     | ∞     |
        | 2         | B                  | {A, B}  | 0     | 2     | 3     | 9     | ∞     |
        | 3         | C                  | {A, B, C} | 0     | 2     | 3     | 9     | 6     |
        | 4         | E                  | {A, B, C, E}  | 0     | 2     | 3     | 7     | 6     |
        | 5         | D                  | {A, B, C, E, D} | 0     | 2     | 3     | 7     | 6     |

        Shortest Paths:
        * A -> A: 0
        * A -> B: 2
        * A -> C: 3 (A -> B -> C)
        * A -> D: 7 (A -> B -> D)
        * A -> E: 6 (A -> B -> D -> E  or A -> B -> C -> E)

2.  **Negative Edge Weights:** Explain why Dijkstra's algorithm fails when negative edge weights are present in the graph. Provide a small example graph to illustrate this.

    **Answer:**

    Dijkstra's algorithm relies on the greedy assumption that once a vertex is visited and its shortest distance from the source is determined, that distance will not decrease. However, with negative edge weights, it's possible to reach a previously visited vertex through a path containing a negative edge, resulting in a shorter distance than the previously calculated distance. This violates the core principle of Dijkstra's algorithm.

    Example:

    *   Nodes: A, B, C
    *   Edges: A-B(2), B-C(1), C-A(-4)

    Starting node: A

    1.  Initially: dist(A) = 0, dist(B) = ∞, dist(C) = ∞
    2.  Visit A: dist(B) = 2, dist(C) = ∞
    3.  Visit B: dist(C) = 3
    4.  Visit C: dist(A) = -1 (through C -> A)

    Now dist(A) is -1, which is less than the initial value of 0.  Dijkstra's algorithm would have already marked A as visited and its shortest path determined, leading to an incorrect result.  The shortest path from A to A is actually A -> B -> C -> A, with a weight of -1.

3.  **Time Complexity:** Compare and contrast the time complexities of Dijkstra's Algorithm using a linear search approach and a priority queue approach. In what type of graphs is each approach more efficient?

    **Answer:**

    *   **Linear Search:** O(V<sup>2</sup> + E), where V is the number of vertices and E is the number of edges. More efficient in *dense* graphs (E is close to V<sup>2</sup>) due to smaller constant factors.

    *   **Priority Queue (Heap):** O(E log V).  More efficient in *sparse* graphs (E is much smaller than V<sup>2</sup>) because log(V) grows much slower than V as V increases.

4.  **Real-World Application:** Describe how Dijkstra's Algorithm can be used to optimize package delivery routes for a logistics company.

    **Answer:**

    Each location (delivery address, depot, etc.) can be represented as a vertex in a graph. The roads connecting the locations are represented as edges, with the weight of each edge representing the distance, estimated travel time, or cost of travel between those locations. Dijkstra's algorithm can then be used to find the shortest (or fastest, cheapest) route from the depot (the source vertex) to each delivery address. The algorithm can be run once for each delivery vehicle starting from its origin. By minimizing the travel distance or time for each delivery, the logistics company can reduce fuel consumption, labor costs, and improve delivery efficiency, leading to cost savings and improved customer satisfaction.

---

### 9. Important Points to Remember

*   Dijkstra's Algorithm only works for graphs with **non-negative** edge weights.
*   Use a priority queue (heap) for better performance (O(E log V)) compared to linear search (O(V<sup>2</sup>)).
*   The algorithm finds the shortest paths from a **single source** vertex.
*   The `prev` dictionary is crucial for reconstructing the actual shortest path.
*   Be aware of the limitations and consider alternative algorithms (e.g., Bellman-Ford) when negative edge weights are present.
