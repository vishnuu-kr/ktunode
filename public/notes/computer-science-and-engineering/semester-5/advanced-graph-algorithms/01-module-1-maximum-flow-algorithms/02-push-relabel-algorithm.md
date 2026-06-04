---
title: "Push-Relabel Algorithm"
subject: "ADVANCED GRAPH ALGORITHMS"
module: "Module 1: Maximum Flow Algorithms "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b8fb"
status: "completed"
scrapedAt: "2026-05-20T16:42:48.832Z"
---
## ADVANCED GRAPH ALGORITHMS: Module 1 - Maximum Flow Algorithms
### Topic: Push-Relabel Algorithm

**Learning Outcomes:**

*   Understand the concept of preflow and its differences from a flow.
*   Explain the core operations of the Push-Relabel algorithm: Push and Relabel.
*   Describe the generic Push-Relabel algorithm and its invariants.
*   Analyze the complexity of the generic Push-Relabel algorithm.
*   Apply the Push-Relabel algorithm to solve maximum flow problems.
*   Recognize the advantages of Push-Relabel compared to other maximum flow algorithms.

---

**1. Introduction to Maximum Flow and Preflow**

*   **Maximum Flow Problem:** Given a directed graph G = (V, E) with a source node 's' and a sink node 't', and edge capacities c(u, v) for each edge (u, v) in E, find the maximum amount of flow that can be sent from 's' to 't' without violating the capacity constraints.

*   **Flow:** A flow is a function f: V x V -> R that satisfies the following properties:
    *   **Capacity Constraint:**  f(u, v) <= c(u, v) for all (u, v) in V x V.
    *   **Skew Symmetry:** f(u, v) = -f(v, u) for all (u, v) in V x V.
    *   **Flow Conservation:**  For all vertices u other than s and t, the total flow entering u is equal to the total flow leaving u:  Σ f(v, u) = Σ f(u, v)  (summed over all v in V).

*   **Preflow:** A preflow is a function f: V x V -> R that satisfies the following properties:
    *   **Capacity Constraint:** f(u, v) <= c(u, v) for all (u, v) in V x V.
    *   **Skew Symmetry:** f(u, v) = -f(v, u) for all (u, v) in V x V.
    *   **Excess Flow:** For each vertex u other than s, the inflow to u is at least the outflow from u: e(u) = Σ f(v, u) >= 0 (summed over all v in V). `e(u)` is called the excess flow at node `u`.  Note that excess flow can be negative.

*   **Key Difference:** In a flow, all nodes (except s and t) have flow conservation.  In a preflow, nodes can have excess flow.  The Push-Relabel algorithm maintains a preflow and gradually converts it into a maximum flow.

**2. Key Concepts and Definitions**

*   **Residual Capacity:**  The residual capacity c<sub>f</sub>(u, v) of an edge (u, v) is the amount of additional flow that can be sent from u to v. It is defined as: c<sub>f</sub>(u, v) = c(u, v) - f(u, v).

*   **Residual Network:** The residual network G<sub>f</sub> = (V, E<sub>f</sub>) is a graph with the same set of vertices V as the original graph G, and the set of edges E<sub>f</sub> consists of edges with positive residual capacity: E<sub>f</sub> = { (u, v) | c<sub>f</sub>(u, v) > 0 }.

*   **Height Function (or Label):**  A height function h: V -> N (non-negative integers) is a mapping from vertices to heights. The Push-Relabel algorithm maintains a height function that satisfies the following properties:
    *   **Initialization:**  h(s) = |V| (the number of vertices in the graph).
    *   **Valid Labeling:**  For any edge (u, v) in the residual network, h(u) <= h(v) + 1.

*   **Active Vertex:** A vertex u (other than s and t) is considered active if it has positive excess flow, i.e., e(u) > 0.

**3. Push-Relabel Algorithm Operations: Push and Relabel**

The Push-Relabel algorithm iteratively performs two basic operations:

*   **Push(u, v):** This operation is applied when:
    *   u is an active vertex (e(u) > 0).
    *   (u, v) is an edge in the residual network (c<sub>f</sub>(u, v) > 0).
    *   h(u) = h(v) + 1. (Admissible edge condition)

    The `Push(u, v)` operation moves flow from u to v. Let d = min(e(u), c<sub>f</sub>(u, v)). Then:
    *   f(u, v) = f(u, v) + d
    *   f(v, u) = -f(u, v)  (Maintain skew symmetry)
    *   e(u) = e(u) - d
    *   e(v) = e(v) + d
    *   Update the residual capacities: c<sub>f</sub>(u, v) = c<sub>f</sub>(u, v) - d and c<sub>f</sub>(v, u) = c<sub>f</sub>(v, u) + d

*   **Relabel(u):** This operation is applied when:
    *   u is an active vertex (e(u) > 0).
    *   For all neighbors v of u in the residual network, h(u) <= h(v).  (u cannot push flow to any of its neighbors in the residual network)

    The `Relabel(u)` operation increases the height of u to the minimum height among its neighbors in the residual network, plus 1.  Formally:
    *   h(u) = 1 + min { h(v) | (u, v) is in E<sub>f</sub> }

**4. Generic Push-Relabel Algorithm**

```python
def generic_push_relabel(graph, capacity, source, sink):
    n = len(graph)  # Number of vertices
    flow = [[0] * n for _ in range(n)]  # Initialize flow to 0
    height = [0] * n  # Initialize heights to 0
    excess = [0] * n  # Initialize excess to 0

    height[source] = n  # Initialize source height to n
    for v in graph[source]:  # Push initial flow from source
        flow[source][v] = capacity[source][v]
        flow[v][source] = -capacity[source][v]
        excess[v] = capacity[source][v]
        excess[source] -= capacity[source][v]

    while True:
        found_active = False
        for u in range(n):
            if u != source and u != sink and excess[u] > 0:
                found_active = True
                # Try to push from u
                for v in graph[u]:
                    if capacity[u][v] - flow[u][v] > 0 and height[u] == height[v] + 1:
                        push(graph, capacity, flow, height, excess, u, v)
                        if excess[u] == 0:
                            break  # Break inner loop if u is no longer active
                else:  # If no push was possible, relabel
                    relabel(graph, capacity, flow, height, u)

        if not found_active:
            break # No active vertices found, algorithm terminates

    max_flow = 0
    for v in graph[source]:
      max_flow += flow[source][v]

    return max_flow

def push(graph, capacity, flow, height, excess, u, v):
    delta = min(excess[u], capacity[u][v] - flow[u][v])
    flow[u][v] += delta
    flow[v][u] -= delta
    excess[u] -= delta
    excess[v] += delta

def relabel(graph, capacity, flow, height, u):
    min_height = float('inf')
    for v in graph[u]:
        if capacity[u][v] - flow[u][v] > 0:
            min_height = min(min_height, height[v])
    height[u] = min_height + 1


# Example Usage:
graph = {
    0: [1, 2],  # Source = 0
    1: [2, 3],
    2: [3],
    3: []    # Sink = 3
}

capacity = {
    0: {1: 16, 2: 13},
    1: {2: 10, 3: 12},
    2: {3: 14},
    3: {}
}


max_flow = generic_push_relabel(graph, capacity, 0, 3)
print("Maximum Flow:", max_flow) # Output: Maximum Flow: 23
```

*   **Invariants:**
    *   The height function `h` always satisfies the valid labeling condition: h(u) <= h(v) + 1 for all (u, v) in E<sub>f</sub>.
    *   The algorithm maintains a preflow at all times.

*   **Algorithm Flow:**
    1.  Initialize preflow by pushing as much flow as possible from the source node.
    2.  While there exists an active vertex u:
        *   If there exists a vertex v such that `Push(u, v)` is applicable, then `Push(u, v)`.
        *   Otherwise, `Relabel(u)`.

*   **Termination:** The algorithm terminates when there are no more active vertices other than the sink. The preflow is then a maximum flow.

**5. Complexity Analysis of the Generic Push-Relabel Algorithm**

*   **Number of Relabel Operations:** Each vertex u can be relabeled at most 2|V| - 1 times.  Since there are |V| vertices, the total number of relabel operations is O(V<sup>2</sup>).

*   **Number of Saturating Pushes:** A push from u to v is *saturating* if it saturates the edge (u, v), i.e., the residual capacity c<sub>f</sub>(u, v) becomes 0 after the push. The number of saturating pushes is O(VE).

*   **Number of Non-Saturating Pushes:** A push from u to v is *non-saturating* if it does *not* saturate the edge (u, v).  The number of non-saturating pushes is O(V<sup>2</sup>E) in the generic algorithm.  This is the dominating factor.

*   **Overall Complexity:**  Therefore, the complexity of the generic Push-Relabel algorithm is **O(V<sup>2</sup>E)**.

**6. Advantages of Push-Relabel**

*   **More Efficient than Ford-Fulkerson for Dense Graphs:**  Push-Relabel offers a significant performance improvement over Ford-Fulkerson, especially in dense graphs.
*   **Flexibility:**  The Push-Relabel algorithm allows for more flexible implementations and optimizations, leading to even better performance in practice (e.g., Highest-Label Selection Rule).
*   **Doesn't require finding augmenting paths:** Unlike algorithms like Edmonds-Karp, Push-Relabel does not rely on finding augmenting paths, which can be computationally expensive.

**7. Practice Questions/Exercises**

1.  **True or False:** A flow can have negative excess at any node.  **Answer:** False. Only a preflow can have negative excess.

2.  **What is the height of the source node initialized to in the Push-Relabel algorithm?** **Answer:** |V|, the number of vertices in the graph.

3.  **Under what conditions can a `Push(u, v)` operation be performed?**  **Answer:** (a) u is an active vertex (e(u) > 0), (b) (u, v) is in the residual network (c<sub>f</sub>(u, v) > 0), and (c) h(u) = h(v) + 1.

4.  **Describe the purpose of the `Relabel(u)` operation.**  **Answer:** The `Relabel(u)` operation increases the height of vertex u so that a `Push` operation can be performed from u. It sets the height of u to 1 + the minimum height of its neighbors in the residual network.

5.  **Consider a simple graph with vertices {s, a, t} (source s, sink t).  Assume c(s, a) = 5, c(a, t) = 3. After initializing the preflow, what is the excess flow at node 'a'?** **Answer:** The initial preflow will push 5 units of flow from s to a. Therefore, the excess flow at 'a' is 5.

6.  **(Harder) Explain why the height of any vertex (other than the source and sink) can never exceed 2|V|-1 during the execution of the generic Push-Relabel algorithm.**  **Answer:** The height of the source is fixed at |V|.  Any vertex *u* with positive excess must have a path to the source in the residual network. If h(u) >= 2|V|, then the path from *u* to the source requires at least |V| vertices with increasing heights, implying a path length of at least |V|, and thus having height >= |V| + |V| = 2|V| and thus vertex u cannot reach the source node in the residual graph.

**8. Important Points to Remember**

*   The Push-Relabel algorithm maintains a *preflow* throughout the execution.
*   The height function is crucial for ensuring correctness and termination.
*   The algorithm terminates when there are no more active vertices (other than the sink).
*   The `Push` operation moves flow from a higher vertex to a lower vertex.
*   The `Relabel` operation increases the height of a vertex if it cannot push flow to any of its neighbors in the residual network.
*   The generic Push-Relabel algorithm has a time complexity of O(V<sup>2</sup>E).
