---
title: "All Pairs Shortest Path Algorithm - Floyd-Warshall Algorithm"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 3: Greedy Strategy "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b564"
status: "completed"
scrapedAt: "2026-05-20T16:45:50.142Z"
---
# DESIGN AND ANALYSIS OF ALGORITHMS: MODULE 3 - GREEDY STRATEGY
## Topic: All Pairs Shortest Path Algorithm - Floyd-Warshall Algorithm

**Module:** Module 3: Greedy Strategy
**Topic:** All Pairs Shortest Path Algorithm - Floyd-Warshall Algorithm

**Learning Outcomes:**

*   Understand the problem of finding shortest paths between all pairs of vertices in a graph.
*   Describe the Floyd-Warshall algorithm for solving the all-pairs shortest path problem.
*   Implement the Floyd-Warshall algorithm.
*   Analyze the time and space complexity of the Floyd-Warshall algorithm.
*   Apply the Floyd-Warshall algorithm to solve real-world problems.
*   Understand the limitations of the algorithm, specifically in the presence of negative cycles.

---

### 1. Introduction to All-Pairs Shortest Path Problem

*   **Definition:** The all-pairs shortest path problem is finding the shortest path between every pair of vertices in a weighted graph.  Unlike single-source shortest path algorithms (like Dijkstra or Bellman-Ford), which compute shortest paths from a single source vertex to all other vertices, all-pairs algorithms compute shortest paths between *all* possible pairs.

*   **Input:** A weighted graph represented by an adjacency matrix or a list of edges with weights.

*   **Output:** A matrix `D`, where `D[i][j]` represents the length of the shortest path from vertex `i` to vertex `j`.

*   **Applications:**
    *   **Navigation systems:** Finding the shortest route between any two locations.
    *   **Network routing:** Determining the optimal path for data packets between any two nodes in a network.
    *   **Transportation planning:** Analyzing transportation networks and finding optimal routes for vehicles.
    *   **Bioinformatics:** Analyzing protein interaction networks.

### 2. Floyd-Warshall Algorithm: A Dynamic Programming Approach

*   **Concept:** The Floyd-Warshall algorithm is a dynamic programming algorithm used to solve the all-pairs shortest path problem in a weighted graph with positive or negative edge weights (but no negative cycles).

*   **Dynamic Programming:** It uses dynamic programming to iteratively improve an estimate of the shortest path between each pair of vertices.

*   **Key Idea:**  Consider each vertex `k` as an intermediate vertex in a potential shortest path between two vertices `i` and `j`. The algorithm examines whether going from `i` to `k` and then from `k` to `j` is shorter than the current shortest path from `i` to `j`.

*   **Algorithm Steps:**

    1.  **Initialization:**
        *   Create a distance matrix `D` of size `n x n`, where `n` is the number of vertices.
        *   Initialize `D[i][j]` with the weight of the edge between vertex `i` and vertex `j`.
        *   If there is no edge between `i` and `j`, set `D[i][j]` to infinity (`∞`).
        *   `D[i][i]` is always 0.

    2.  **Iteration:**
        *   Iterate through all vertices `k` from 0 to `n-1`.
        *   For each pair of vertices `i` and `j` from 0 to `n-1`:
            *   Update `D[i][j]` with the minimum of the current value of `D[i][j]` and the sum of `D[i][k]` and `D[k][j]`. This step checks if going through vertex `k` provides a shorter path from `i` to `j`.
            *   `D[i][j] = min(D[i][j], D[i][k] + D[k][j])`

    3.  **Result:** After iterating through all vertices `k`, the matrix `D` will contain the shortest path distances between all pairs of vertices.

### 3. Algorithm Implementation (Python)

```python
def floyd_warshall(graph):
    """
    Implements the Floyd-Warshall algorithm for finding all-pairs shortest paths.

    Args:
        graph: A dictionary representing the graph where keys are vertices
               and values are dictionaries of neighboring vertices with edge weights.
               Example: {'A': {'B': 5, 'C': 2}, 'B': {'C': 1}, 'C': {}}

    Returns:
        A dictionary representing the shortest path distances between all pairs of vertices.
        Returns None if a negative cycle is detected.
    """
    vertices = list(graph.keys())
    n = len(vertices)

    # Initialize the distance matrix
    dist = {}
    for i in vertices:
        dist[i] = {}
        for j in vertices:
            if i == j:
                dist[i][j] = 0
            elif j in graph[i]:
                dist[i][j] = graph[i][j]
            else:
                dist[i][j] = float('inf')  # Represent infinity

    # Iterate through all intermediate vertices
    for k in vertices:
        for i in vertices:
            for j in vertices:
                dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])

    # Check for negative cycles
    for i in vertices:
        if dist[i][i] < 0:
            print("Negative cycle detected!")
            return None # Indicates the presence of a negative cycle

    return dist


# Example usage:
graph = {
    'A': {'B': 5, 'C': 2},
    'B': {'C': 1},
    'C': {'D': 4},
    'D': {'A': -6, 'B': 3} #Adding D and a negative edge
}

shortest_paths = floyd_warshall(graph)

if shortest_paths:
    for start_node, distances in shortest_paths.items():
        print(f"Shortest paths from {start_node}:")
        for end_node, distance in distances.items():
            print(f"  To {end_node}: {distance}")
```

**Explanation of the Code:**

1.  **`floyd_warshall(graph)` function:** Takes the graph as input, represented as a dictionary of dictionaries (adjacency list).
2.  **Initialization:**
    *   `vertices = list(graph.keys())`: Gets a list of all vertices in the graph.
    *   `dist = {}`: Creates an empty dictionary to store shortest path distances.
    *   The nested loops initialize the `dist` dictionary:
        *   `dist[i][i] = 0`: Distance from a vertex to itself is 0.
        *   `dist[i][j] = graph[i][j]`:  If there's an edge from `i` to `j`, the initial distance is the edge weight.
        *   `dist[i][j] = float('inf')`: If there's no direct edge from `i` to `j`, the initial distance is infinity.  We use `float('inf')` to represent infinity in Python.
3.  **Core Logic (Triple Nested Loops):**
    *   The outer loop `for k in vertices:` iterates through each vertex `k` as an intermediate vertex.
    *   The inner loops `for i in vertices:` and `for j in vertices:` iterate through all pairs of source (`i`) and destination (`j`) vertices.
    *   `dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])`: This is the key step.  It checks if the path from `i` to `j` going through `k` is shorter than the current shortest path from `i` to `j`. If it is, it updates `dist[i][j]`.
4.  **Negative Cycle Detection:**
    *   After the main loop, the code iterates through the vertices again and checks `if dist[i][i] < 0:`.
    *   If `dist[i][i]` is negative for any vertex `i`, it means there's a negative cycle reachable from that vertex (and therefore, the algorithm cannot reliably determine shortest paths).  In this case, the function returns `None`.
5.  **Return Value:** If no negative cycle is detected, the function returns the `dist` dictionary, which contains the shortest path distances between all pairs of vertices.

### 4. Time and Space Complexity Analysis

*   **Time Complexity:**  O(V^3), where V is the number of vertices. This is because the algorithm uses three nested loops, each iterating through the vertices.

*   **Space Complexity:** O(V^2), where V is the number of vertices. This is because the algorithm requires a matrix `D` of size V x V to store the shortest path distances.  The space complexity can be considered O(1) in an in-place implementation where the original weight matrix is overwritten.  However, creating a new matrix like in the example code results in O(V^2).

### 5. Advantages and Disadvantages

*   **Advantages:**
    *   Simple and easy to implement.
    *   Can handle negative edge weights.
    *   Computes shortest paths between all pairs of vertices in a single run.
    *   Useful for dense graphs where almost all pairs of vertices have an edge between them.

*   **Disadvantages:**
    *   High time complexity O(V^3), making it less efficient for large graphs compared to algorithms like Dijkstra's algorithm when only single-source shortest paths are required.
    *   Cannot handle negative cycles.  The algorithm will not produce correct results if the graph contains a negative cycle (a cycle where the sum of the edge weights is negative). In fact, it will detect negative cycles if run with the negative cycle check implemented.

### 6. Handling Negative Cycles

*   **Detection:** The Floyd-Warshall algorithm can detect negative cycles. After the main loops, check the diagonal elements of the distance matrix `D`. If any `D[i][i]` is negative, it indicates the presence of a negative cycle reachable from vertex `i`.

*   **Why negative cycles are a problem:** In the presence of a negative cycle, the shortest path between two vertices can be arbitrarily small (negative), as you can keep traversing the negative cycle to reduce the path length.  The concept of a "shortest path" becomes undefined.

*   **What to do when a negative cycle is detected:**
    *   The algorithm will typically return an error or a flag indicating that a negative cycle exists.
    *   The shortest path distances computed by the algorithm are not reliable in the presence of negative cycles.
    *   The graph should be analyzed and modified to remove or correct the negative cycle if possible.

### 7. Example

Consider the following graph represented by an adjacency matrix:

```
     A    B    C    D
A    0    5    ∞    ∞
B    ∞    0    -2    ∞
C    ∞    ∞    0    1
D    -3   ∞    ∞    0
```

1.  **Initialization:**  The matrix above is the initial `D` matrix.  `∞` represents infinity.

2.  **Iteration (k=A):**

    ```
    D[B][D] = min(D[B][D], D[B][A] + D[A][D]) = min(∞, ∞ + ∞) = ∞
    D[C][D] = min(D[C][D], D[C][A] + D[A][D]) = min(1, ∞ + ∞) = 1
    D[D][D] = min(D[D][D], D[D][A] + D[A][D]) = min(0, -3 + ∞) = 0

    D[B][B] = min(D[B][B], D[B][A] + D[A][B]) = min(0, ∞ + 5) = 0
    D[C][B] = min(D[C][B], D[C][A] + D[A][B]) = min(∞, ∞ + 5) = ∞
    D[D][B] = min(D[D][B], D[D][A] + D[A][B]) = min(∞, -3 + 5) = 2
    ```
    The rest of the iterations will similarly calculate and minimize values in the distance matrix.

3.  **Iteration (k=B, k=C, k=D):** The algorithm will continue iterating through vertices B, C, and D, updating the distance matrix.

4.  **Final Result:**  After all iterations, the resulting distance matrix `D` will be:

    ```
         A    B    C    D
    A    0    5    3    4
    B   -5    0   -2   -1
    C   -2    3    0    1
    D   -3    2    0   0
    ```

    For example, `D[A][C] = 3` indicates the shortest path from A to C has a length of 3.

### 8. Applications

*   **Google Maps/Navigation:**  While not solely relying on Floyd-Warshall due to the scale of real-world road networks, the principles can be applied to smaller, localized areas for route planning.
*   **Social Network Analysis:**  Determining the "degree of separation" between any two individuals in a social network.  If we represent the network as a graph where nodes are people and edges represent connections, the shortest path distance indicates the minimum number of connections between them.
*   **Operations Research:**  In transportation and logistics, determining the optimal routes for delivery trucks between various destinations.

### 9. Practice Questions/Exercises

1.  **Question 1:** Apply the Floyd-Warshall algorithm to the following graph (represented by an adjacency matrix).  Show the initial matrix and the matrix after each iteration (k=A, k=B, k=C).

    ```
         A    B    C
    A    0    3    8
    B    ∞    0    5
    C    ∞    ∞    0
    ```

    **Answer:**

    *   **Initial Matrix:**

        ```
             A    B    C
        A    0    3    8
        B    ∞    0    5
        C    ∞    ∞    0
        ```

    *   **k = A:**

        ```
             A    B    C
        A    0    3    8
        B    ∞    0    5
        C    ∞    ∞    0
        ```

        (No changes because there are no incoming edges to A.)

    *   **k = B:**

        ```
             A    B    C
        A    0    3    8
        B    ∞    0    5
        C    ∞    ∞    0
        ```

        (No changes because there are no incoming edges to B and A->B is 3, so we still can't reach C from A faster by going through B.)

    *   **k = C:**

        ```
             A    B    C
        A    0    3    8
        B    ∞    0    5
        C    ∞    ∞    0
        ```

        (No changes because there are no incoming edges to C)

    *Since there are no incoming edges to B or C and no outgoing edges from C, no paths can be shorted by traveling through them.*

    *   **Final Matrix:**

        ```
             A    B    C
        A    0    3    8
        B    ∞    0    5
        C    ∞    ∞    0
        ```

        (For this particular graph, the initial matrix is the final result, because there are no "longer" path shortcuts)

2.  **Question 2:**  Consider the following graph:

    ```
    A -> B (weight: -2)
    B -> C (weight: 1)
    C -> A (weight: 1)
    ```

    Does this graph contain a negative cycle? If so, how would the Floyd-Warshall algorithm detect it?

    **Answer:** Yes, the graph contains a negative cycle: A -> B -> C -> A has a total weight of -2 + 1 + 1 = 0.  *Note: It's not technically a negative cycle (sum is zero) but it will behave like one in that you can infinitely loop through the path without increasing the distance.* When running Floyd-Warshall, after the main loops complete, at least one of `D[A][A]`, `D[B][B]`, or `D[C][C]` will be negative (or less than 0), indicating the presence of a negative cycle.  Specifically, the shortest path from A to A will be calculated as 0(initial) then will be minimized to A->B->C->A = 0.

3. **Question 3:** Explain in your own words the purpose of the `k` loop in the Floyd-Warshall algorithm. What does `k` represent?

   **Answer:** The `k` loop in the Floyd-Warshall algorithm is crucial for considering all possible intermediate vertices in potential shortest paths. The variable `k` represents the *intermediate* vertex that the algorithm uses to check if a shorter path exists between any two other vertices `i` and `j`. For each `k`, the algorithm essentially asks: "Is it shorter to go from vertex `i` to vertex `j` directly, or to go from `i` to `k` and then from `k` to `j`?" By iterating through all vertices as potential intermediate nodes, the algorithm guarantees that it will find the shortest paths between all pairs of vertices, even if those paths involve multiple intermediate nodes.

### 10. Important Points to Remember

*   The Floyd-Warshall algorithm is a dynamic programming solution for the all-pairs shortest path problem.
*   It works by considering all vertices as potential intermediate vertices.
*   It has a time complexity of O(V^3) and a space complexity of O(V^2).
*   It can handle negative edge weights but not negative cycles.
*   It can be used to detect the presence of negative cycles.
*   It is useful for dense graphs and scenarios where shortest paths between all pairs of vertices are needed.
*   Consider alternatives like Dijkstra's algorithm (repeated V times) if only single-source shortest paths are required, especially for sparse graphs.

---
This detailed study guide provides a comprehensive understanding of the Floyd-Warshall algorithm. By reviewing the concepts, code example, and practice questions, you should be well-equipped to apply this algorithm to solve real-world problems. Remember to focus on the core logic of the algorithm and its limitations regarding negative cycles. Good luck!
