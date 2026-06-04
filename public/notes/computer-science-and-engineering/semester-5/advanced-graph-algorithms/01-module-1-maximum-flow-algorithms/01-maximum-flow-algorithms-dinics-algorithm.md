---
title: "Maximum Flow Algorithms - Dinic's Algorithm"
subject: "ADVANCED GRAPH ALGORITHMS"
module: "Module 1: Maximum Flow Algorithms "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b8fa"
status: "completed"
scrapedAt: "2026-05-20T16:42:48.134Z"
---
## ADVANCED GRAPH ALGORITHMS - Module 1: Maximum Flow Algorithms - Dinic's Algorithm

**Learning Outcomes:**

*   Understand the concept of maximum flow and its applications.
*   Explain the limitations of the Ford-Fulkerson algorithm.
*   Describe the key ideas behind Dinic's algorithm (level graph, blocking flow).
*   Implement Dinic's algorithm.
*   Analyze the time complexity of Dinic's algorithm.
*   Apply Dinic's algorithm to solve maximum flow problems.

### 1. Introduction to Maximum Flow

*   **Definition:** The maximum flow problem seeks to find the largest possible amount of flow that can be sent from a source node (s) to a sink node (t) in a flow network.

*   **Flow Network:**
    *   A directed graph G = (V, E) with a capacity function c: E → R+ (non-negative real numbers).
    *   Each edge (u, v) ∈ E has a non-negative capacity c(u, v) representing the maximum amount of flow that can pass through that edge.
    *   There are two designated vertices: a source node s ∈ V and a sink node t ∈ V.
    *   Assumptions:  No edges enter 's' and no edges leave 't'.  If there's an edge (u,v) but not (v,u), then assume c(v,u) = 0.

*   **Flow:**
    *   A function f: E → R+ that assigns a flow value f(u, v) to each edge (u, v).
    *   **Capacity Constraint:**  f(u, v) ≤ c(u, v) for all edges (u, v) ∈ E.  The flow on an edge cannot exceed its capacity.
    *   **Flow Conservation:** For all vertices u ∈ V, except s and t:
        ```
        Σ f(v, u) = Σ f(u, v)
        v ∈ V     v ∈ V
        ```
        The total flow entering a vertex (excluding s and t) must equal the total flow leaving that vertex.

*   **Value of a Flow (|f|):** The total flow leaving the source node s, or equivalently, the total flow entering the sink node t.
    ```
    |f| = Σ f(s, v)
          v ∈ V
    ```
    Our goal is to maximize |f|.

*   **Applications of Maximum Flow:**
    *   Network bandwidth allocation
    *   Image segmentation
    *   Airline scheduling
    *   Project selection
    *   Bipartite matching

### 2. Ford-Fulkerson Algorithm and Its Limitations

*   **Basic Idea:**  Iteratively find augmenting paths from s to t and increase the flow along these paths until no more augmenting paths can be found.

*   **Augmenting Path:**  A path from s to t in the residual graph that can accommodate more flow.

*   **Residual Graph (Gf):**  A graph that represents the remaining capacity on each edge after a flow f has been established.
    *   For each edge (u, v) in the original graph G with flow f(u, v) and capacity c(u, v):
        *   The residual graph Gf has an edge (u, v) with residual capacity cf(u, v) = c(u, v) - f(u, v). This represents how much *more* flow can be pushed through (u, v).
        *   The residual graph Gf also has an edge (v, u) with residual capacity cf(v, u) = f(u, v).  This represents the possibility of *cancelling* flow back from v to u.  It exists even if (v, u) wasn't an original edge, but it is crucial for finding optimal flows.

*   **Algorithm Steps:**
    1.  Initialize flow f(u, v) = 0 for all edges (u, v).
    2.  While there exists an augmenting path p from s to t in the residual graph Gf:
        3.  Find the bottleneck capacity (minimum residual capacity) of the augmenting path p:
            ```
            cf(p) = min { cf(u, v) | (u, v) is on path p }
            ```
        4.  Augment the flow along the path p:
            *   For each edge (u, v) on path p:
                *   f(u, v) = f(u, v) + cf(p)
                *   f(v, u) = f(v, u) - cf(p) (or create (v, u) with this flow if it didn't exist.)
    5.  Return the flow f.

*   **Limitations of Ford-Fulkerson:**
    *   **Slow Convergence:**  If capacities are irrational numbers, the algorithm might not converge.
    *   **High Time Complexity:**  In the worst case, the time complexity can be O(E * |f|), where |f| is the maximum flow. This is because the algorithm might find augmenting paths with very small capacities, requiring many iterations.  This is particularly bad when capacities are large integers.
    *   **Example of Slow Convergence:**  Consider a graph with edges (s, u), (u, v), (v, t) with capacity 1 each and edges (s, v) and (u, t) with capacity M (a large number).  Ford-Fulkerson might alternate between augmenting paths s -> u -> v -> t and s -> v -> u -> t, each time increasing flow by only 1.  This would take 2M iterations.

### 3. Dinic's Algorithm

*   **Key Ideas:**
    *   **Level Graph:**  A layered graph representing shortest paths from the source node to all other nodes in the residual graph. This ensures that augmenting paths are always shortest paths.
    *   **Blocking Flow:**  A flow in the level graph such that every path from the source to the sink contains at least one saturated edge (an edge with flow equal to its capacity).  After pushing a blocking flow, there will be no more paths from 's' to 't' in the *current* level graph.

*   **Algorithm Steps:**

    1.  **Construct Level Graph (G_L):**
        *   Perform a Breadth-First Search (BFS) from the source node (s) in the residual graph Gf.
        *   Assign a level to each node based on its distance (number of edges) from s.  level(s) = 0.
        *   The level graph G_L consists of:
            *   All nodes reachable from 's' in Gf.
            *   Only edges (u, v) in Gf such that level(v) = level(u) + 1.  This ensures that all paths in the level graph are shortest paths in the residual graph.

    2.  **Find a Blocking Flow (f') in G_L:**
        *   Repeatedly use Depth-First Search (DFS) from the source node (s) in the level graph G_L to find a path to the sink node (t).
        *   For each path found:
            *   Determine the bottleneck capacity (minimum residual capacity) along the path.
            *   Augment the flow along the path by the bottleneck capacity.  Update residual capacities in G_L accordingly.
            *   Remove any saturated edges (edges with flow equal to capacity) from G_L.  Also remove any nodes that become unreachable from 's'.
        *   Continue until no path from s to t can be found in G_L.  The accumulated flow is the blocking flow f'.

    3.  **Update the Residual Graph Gf:**
        *   Augment the flow in the original residual graph Gf by the blocking flow f'.
        *   Update the residual capacities of all edges based on the flow changes.

    4.  **Repeat Steps 1-3:**
        *   Repeat steps 1-3 until the sink node (t) is no longer reachable from the source node (s) in the residual graph Gf.

*   **Pseudocode:**

    ```python
    def dinic(graph, source, sink):
        max_flow = 0
        while True:
            # 1. Construct Level Graph
            level = bfs(graph, source, sink)
            if level[sink] == -1:  # sink not reachable
                break

            # 2. Find Blocking Flow
            while True:
                flow = dfs(graph, source, sink, level, 1e9) # 1e9 is a large number
                if flow == 0:
                    break
                max_flow += flow

        return max_flow

    def bfs(graph, source, sink):
        level = {node: -1 for node in graph} # -1 represents not visited
        level[source] = 0
        queue = [source]

        while queue:
            u = queue.pop(0)
            for v, capacity in graph[u].items():
                if level[v] == -1 and capacity > 0:
                    level[v] = level[u] + 1
                    queue.append(v)

        return level


    def dfs(graph, u, sink, level, flow):
        if u == sink:
            return flow

        for v, capacity in list(graph[u].items()):  # iterate a copy so we can modify graph
            if level[v] == level[u] + 1 and capacity > 0:
                min_flow = min(flow, capacity)
                f = dfs(graph, v, sink, level, min_flow)
                if f > 0:
                    graph[u][v] -= f
                    if (v in graph and u in graph[v]):  # Check (v,u) exist
                      graph[v][u] += f
                    else:
                      if v not in graph: graph[v] = {}
                      graph[v][u] = f
                    return f

            #Optimization to prune dead end. remove nodes who have no path to sink after exhausting it.
        return 0
    ```

*   **Example:**

    Consider a graph with the following edges and capacities:
    *   (s, a): 10
    *   (s, b): 5
    *   (a, b): 4
    *   (a, c): 8
    *   (b, c): 9
    *   (c, t): 10

    1.  **Initial Residual Graph:** Same as the original graph.
    2.  **Level Graph:**  level(s) = 0, level(a) = 1, level(b) = 1, level(c) = 2, level(t) = 3.
    3.  **Blocking Flow (Iteration 1):**
        *   Path 1: s -> a -> c -> t (Bottleneck: min(10, 8, 10) = 8).  Flow augmented by 8.  (a, c) becomes saturated.
        *   Path 2: s -> b -> c -> t (Bottleneck: min(5, 9, 2) = 2).  Flow augmented by 2.
        *   No more paths.  Blocking flow is 8 + 2 = 10.
    4.  **Update Residual Graph:**  Update capacities based on the flows.  Introduce back edges.
    5.  **Level Graph (Iteration 2):**  level(s) = 0, level(a) = 1, level(b) = 1, level(c) = 2. No path to 't' exits.
    6.  **Dinic's terminates**

### 4. Time Complexity Analysis of Dinic's Algorithm

*   **BFS for Level Graph:** O(E) in each iteration.
*   **DFS for Blocking Flow:** O(V * E) in each iteration.  DFS traverses each edge at most once when searching for an augmenting path.  It can take O(V) time to find a path, and there could be E edges that are considered.
*   **Number of Iterations:** The key result is that the number of iterations (number of times the level graph is constructed) is at most V - 1.  This is because, with each iteration, the distance (number of edges) of the shortest path from 's' to 't' in the *residual graph* increases by at least 1.  Since the longest possible path in a graph has V - 1 edges, there can be at most V - 1 iterations.

*   **Overall Time Complexity:** O(V^2 * E).

### 5. Practice Questions/Exercises

1.  **Construct the Level Graph:** Given a graph with edges (s, a, 5), (s, b, 3), (a, c, 4), (b, c, 2), (c, t, 6), construct the level graph after one iteration of Dinic's algorithm assuming no initial flow.

    *   **Answer:**
        *   Levels: s: 0, a: 1, b: 1, c: 2, t: 3
        *   Level Graph edges: (s, a, 5), (s, b, 3), (a, c, 4), (b, c, 2), (c, t, 6)

2.  **Find a Blocking Flow:** Given the level graph from Question 1, find a blocking flow.  What are the augmenting paths and their bottleneck capacities?

    *   **Answer:**
        *   Path 1: s -> a -> c -> t. Bottleneck: min(5, 4, 6) = 4.  Flow augmented by 4.
        *   Path 2: s -> b -> c -> t. Bottleneck: min(3, 2, 2) = 2. Flow augmented by 2.
        *   Blocking flow: 4 + 2 = 6.

3.  **Update Residual Graph:** After finding the blocking flow in Question 2, update the residual graph with back edges. What are the residual capacities of the edges?

    *   **Answer:**
        *   (s, a, 1), (s, b, 1), (a, c, 0), (b, c, 0), (c, t, 0)
        *   (a, s, 4), (b, s, 2), (c, a, 4), (c, b, 2), (t, c, 6)

4.  **Compare Ford-Fulkerson and Dinic's:** Explain when Dinic's algorithm is preferred over Ford-Fulkerson and why.

    *   **Answer:**  Dinic's algorithm is preferred when the graph has large capacities or when a faster guaranteed running time is needed. Ford-Fulkerson can take a very long time if it keeps picking bad augmenting paths.  Dinic's guarantees that the number of iterations is limited by V, improving the worst-case performance.

5.  **Implement Dinic's in Python (Complete Code):** Write a Python function that implements Dinic's algorithm given a graph represented as an adjacency list with capacities. (Example code is provided above). Test it with the graph from the examples.

### 6. Important Points to Remember

*   Dinic's algorithm improves upon Ford-Fulkerson by using the concept of a *level graph* to ensure that augmenting paths are always shortest paths.
*   The time complexity of Dinic's algorithm is O(V^2 * E), which is generally more efficient than Ford-Fulkerson for graphs with large capacities.
*   The level graph construction is crucial for the efficiency of the algorithm.
*   Blocking flows are not necessarily maximum flows in the level graph itself, but pushing them guarantees progress towards the maximum flow in the original graph.
*   Remember to update the residual graph correctly after each iteration, including the creation of back edges.
*   Dinic's algorithm can be further optimized (e.g., using the "current edge" optimization to avoid revisiting edges that have already been exhausted during DFS).  These optimizations do not improve the asymptotic complexity but improve the constant factors in real-world performance.
