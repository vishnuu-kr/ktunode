---
title: "Capacity Scaling Algorithm"
subject: "ADVANCED GRAPH ALGORITHMS"
module: "Module 1: Maximum Flow Algorithms "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b8fe"
status: "completed"
scrapedAt: "2026-05-20T16:42:50.947Z"
---
# ADVANCED GRAPH ALGORITHMS: Module 1 - Maximum Flow Algorithms: Capacity Scaling Algorithm

## Introduction

These notes cover the Capacity Scaling Algorithm for solving the Maximum Flow problem.  This algorithm is a valuable alternative to the Ford-Fulkerson and Edmonds-Karp algorithms, often providing a more efficient runtime.

## Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the concept of capacity scaling in the context of maximum flow.
*   Explain the Capacity Scaling Algorithm.
*   Implement the Capacity Scaling Algorithm.
*   Analyze the time complexity of the Capacity Scaling Algorithm.
*   Apply the Capacity Scaling Algorithm to solve maximum flow problems.
*   Understand the relationship between capacity scaling and residual graphs.

## 1. Key Concepts and Definitions

*   **Network Flow Graph:** A directed graph G = (V, E) where each edge (u, v) has a non-negative capacity c(u, v).  Also, there are designated source (s) and sink (t) vertices.

*   **Flow:**  A function f: V x V -> R that satisfies the following properties:
    *   **Capacity Constraint:** For all u, v ∈ V, f(u, v) ≤ c(u, v).  The flow along an edge cannot exceed its capacity.
    *   **Skew Symmetry:** For all u, v ∈ V, f(u, v) = -f(v, u).  Flow from u to v is the negative of flow from v to u. This helps represent flow cancellation.
    *   **Flow Conservation:** For all u ∈ V - {s, t}, Σ f(u, v) = 0 (for all v ∈ V).  The total flow entering a vertex (excluding the source and sink) must equal the total flow leaving the vertex.

*   **Residual Graph (Gf):** Given a graph G and a flow f, the residual graph Gf consists of edges that can admit more flow.  For each edge (u, v) in G, the residual capacity is c_f(u, v) = c(u, v) - f(u, v).  If c_f(u, v) > 0, then (u, v) is an edge in Gf.  If f(u, v) > 0, then (v, u) is an edge in Gf with capacity c_f(v, u) = f(u, v).  The residual graph is critical for finding augmenting paths.

*   **Augmenting Path:** A path from the source (s) to the sink (t) in the residual graph. The capacity of an augmenting path is the minimum residual capacity of any edge on that path.

*   **Maximum Flow:** The maximum amount of flow that can be sent from the source to the sink in a network flow graph.

*   **Capacity Scaling:** A technique used to improve the efficiency of maximum flow algorithms. It works by considering only augmenting paths with significant residual capacity in each iteration.

## 2. The Capacity Scaling Algorithm

The Capacity Scaling Algorithm aims to find a maximum flow by iteratively improving an initial flow of zero. It maintains a parameter delta (δ) that represents a lower bound on the capacity of augmenting paths considered in each iteration.

**Algorithm Steps:**

1.  **Initialization:**
    *   Set the flow f(u, v) = 0 for all edges (u, v).
    *   Find the maximum edge capacity 'C' in the original graph G.
    *   Set δ = 2<sup>⌊log<sub>2</sub> C⌋</sup> (the largest power of 2 that is less than or equal to C).

2.  **Main Loop:** While δ ≥ 1:
    *   **Inner Loop:** While there exists an augmenting path 'p' in the residual graph Gf from 's' to 't' such that the capacity of 'p' is at least δ:
        *   Augment the flow 'f' along the path 'p' by the capacity of 'p'.
        *   Update the residual graph Gf.
    *   δ = δ / 2.

3.  **Return:** Return the flow 'f'.  This is the maximum flow.

**Pseudocode:**

```python
def capacity_scaling(graph, source, sink):
  # Initialize flow
  flow = {} # Dictionary to store flow values for each edge
  for u in graph:
    for v in graph[u]:
      flow[(u,v)] = 0

  # Find maximum capacity
  max_capacity = 0
  for u in graph:
    for v in graph[u]:
      max_capacity = max(max_capacity, graph[u][v])

  # Initialize delta
  delta = 2**(int(math.log2(max_capacity)))

  while delta >= 1:
    while True:
      path = find_augmenting_path(graph, source, sink, flow, delta)
      if path is None:
        break # No augmenting path found with capacity >= delta

      # Calculate bottleneck capacity of the path
      bottleneck = float('inf')
      for i in range(len(path) - 1):
        u, v = path[i], path[i+1]
        bottleneck = min(bottleneck, get_residual_capacity(graph, flow, u, v))

      # Augment the flow along the path
      for i in range(len(path) - 1):
        u, v = path[i], path[i+1]
        flow[(u,v)] += bottleneck
        if (v,u) in flow:
            flow[(v,u)] -= bottleneck
        else:
            flow[(v,u)] = -bottleneck


    delta /= 2

  # Calculate the maximum flow value
  max_flow = 0
  for v in graph[source]:
    max_flow += flow[(source, v)]
  return max_flow

def find_augmenting_path(graph, source, sink, flow, delta):
    """Finds an augmenting path using DFS with capacity at least delta."""
    visited = set()
    path = []

    def dfs(u):
        nonlocal path
        visited.add(u)
        path.append(u)

        if u == sink:
            return True

        for v in graph[u]:
            if v not in visited and get_residual_capacity(graph, flow, u, v) >= delta:
                if dfs(v):
                    return True

        # Backtrack if no path is found
        path.pop()
        return False

    if dfs(source):
        return path
    else:
        return None

def get_residual_capacity(graph, flow, u, v):
  """Calculates the residual capacity of an edge."""
  capacity = graph[u][v] if v in graph[u] else 0
  if (u,v) in flow:
    return capacity - flow[(u, v)]
  else:
    return capacity
```

**Explanation:**

*   The algorithm begins with a large value of δ and iteratively reduces it by a factor of 2.
*   In each iteration, the algorithm searches for augmenting paths with a residual capacity of at least δ. This is the "scaling" aspect - we are focusing on finding "large" augmentations first.
*   Finding an augmenting path can be done using algorithms like Depth-First Search (DFS) or Breadth-First Search (BFS), modified to only consider edges with sufficient residual capacity.
*   Augmenting the flow along such a path increases the overall flow from the source to the sink.
*   As δ decreases, the algorithm considers augmenting paths with smaller residual capacities, gradually refining the flow until it reaches the maximum possible value.

## 3. Example

Consider the following graph:

*   s -> a: capacity 16
*   s -> b: capacity 13
*   a -> b: capacity 10
*   a -> t: capacity 12
*   b -> t: capacity 20

**Steps:**

1.  **Initialization:**
    *   f(u, v) = 0 for all edges.
    *   C = 20 (maximum capacity).
    *   δ = 2<sup>⌊log<sub>2</sub> 20⌋</sup> = 2<sup>4</sup> = 16.

2.  **Main Loop:**

    *   **δ = 16:**
        *   Augmenting path: s -> a -> t (capacity 12). Flow becomes: f(s, a) = 12, f(a, t) = 12.
        *   Augmenting path: s -> b -> t (capacity 13). Flow becomes: f(s, b) = 13, f(b, t) = 13.
        *   No more augmenting paths with capacity >= 16.

    *   **δ = 8:**
        *   Augmenting path: s -> a -> b -> t (capacity 4). Note: the residual graph will have an edge from a to b with residual capacity of 10, and from b to a with capacity 12 (since flow went from a to b). Flow becomes: f(s, a) = 16, f(a, t) = 12, f(s, b) = 17, f(b, t) = 17, f(a,b) = 4.
        *   No more augmenting paths with capacity >= 8.

    *   **δ = 4:**
        *   No more augmenting paths with capacity >= 4.

    *   **δ = 2:**
        *   No more augmenting paths with capacity >= 2.

    *   **δ = 1:**
        *   No more augmenting paths with capacity >= 1.

3.  **Return:**  The maximum flow is 16 + 17 = 33.

## 4. Time Complexity Analysis

*   The outer loop (reducing δ) iterates O(log C) times, where C is the maximum capacity of any edge.
*   In each iteration of the outer loop, the inner loop finds augmenting paths. The maximum number of augmentations in each outer loop iteration is O(E) due to the fact that each augmentation removes one edge from the list of edges with residual capacity >= delta, and an edge can only be re-added if we halve delta.
*   Each augmenting path can be found in O(E) time using DFS or BFS.

Therefore, the overall time complexity of the Capacity Scaling Algorithm is O(E<sup>2</sup> log C).  While still dependent on C, this is often a significant improvement over Ford-Fulkerson, especially when C is very large and the path length stays low.

## 5. Important Points to Remember

*   The Capacity Scaling Algorithm works by progressively reducing the value of δ, considering only augmenting paths with capacity at least δ in each iteration.
*   The residual graph is crucial for determining available flow capacity.
*   The algorithm terminates when δ becomes less than 1, indicating that no more augmenting paths with significant capacity can be found.
*   The time complexity is O(E<sup>2</sup> log C).
*   This is typically faster than standard Ford Fulkerson (O(E * max flow)), and may be faster than Edmonds Karp O(VE^2) depending on the graph's characteristics.

## 6. Practice Questions

**Question 1:**

Consider a network with the following edges and capacities:

*   s -> a: 20
*   s -> b: 10
*   a -> b: 30
*   a -> t: 10
*   b -> t: 20

What is the initial value of δ in the Capacity Scaling Algorithm? Show the first augmenting path discovered when δ is at its initial value, and the resulting flow update.

**Answer:**

*   The maximum capacity, C = 30.
*   δ = 2<sup>⌊log<sub>2</sub> 30⌋</sup> = 2<sup>4</sup> = 16.
*   First augmenting path: s -> a -> b -> t. The bottleneck capacity is min(20, 30, 20) = 20.
*   Flow update: f(s, a) = 20, f(a, b) = 20, f(b, t) = 20.

**Question 2:**

Describe the main advantage of the Capacity Scaling Algorithm compared to the standard Ford-Fulkerson algorithm.

**Answer:**

The Capacity Scaling Algorithm strategically focuses on finding augmenting paths with significant capacity (at least δ) in each iteration. This can significantly reduce the number of iterations needed to reach the maximum flow compared to Ford-Fulkerson, which might augment flow by very small amounts in each step. This leads to better performance in many cases, especially when edge capacities are large.

**Question 3:**

Explain why using DFS or BFS is appropriate for finding augmenting paths within the Capacity Scaling Algorithm.

**Answer:**

Both DFS and BFS are suitable for finding paths in a graph. In the Capacity Scaling Algorithm, we specifically use these algorithms to find paths in the *residual* graph, and we modify them to consider only edges with a residual capacity greater than or equal to δ. This ensures we are finding valid augmenting paths that can significantly increase the overall flow. The choice between DFS and BFS might depend on the specific graph structure and implementation details, but both will achieve the goal of finding augmenting paths that meet the minimum residual capacity requirement.
