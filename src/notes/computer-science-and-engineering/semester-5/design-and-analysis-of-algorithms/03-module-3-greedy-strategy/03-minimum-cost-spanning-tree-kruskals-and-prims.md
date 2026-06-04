---
title: "Minimum Cost Spanning Tree – Kruskal’s and Prim’s"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 3: Greedy Strategy "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b55c"
status: "completed"
scrapedAt: "2026-05-20T16:45:44.489Z"
---
# DESIGN AND ANALYSIS OF ALGORITHMS: Module 3 - Greedy Strategy: Minimum Cost Spanning Tree (Kruskal's & Prim's)

## Introduction

This module explores the greedy strategy for finding the Minimum Cost Spanning Tree (MST) in a weighted graph.  We will focus on two prominent algorithms: Kruskal's Algorithm and Prim's Algorithm. Both algorithms employ a greedy approach to build the MST.

**Learning Outcomes:**

*   Understand the concept of a Minimum Cost Spanning Tree.
*   Explain and implement Kruskal's Algorithm.
*   Explain and implement Prim's Algorithm.
*   Analyze the time complexity of Kruskal's and Prim's Algorithms.
*   Compare and contrast Kruskal's and Prim's Algorithms.
*   Apply Kruskal's and Prim's Algorithms to solve practical problems.

## 1. Key Concepts and Definitions

*   **Graph:** A collection of vertices (nodes) connected by edges. We will focus on *weighted*, *undirected*, and *connected* graphs.
*   **Weighted Graph:** A graph where each edge has a weight (cost) associated with it.
*   **Undirected Graph:** A graph where edges have no direction; the edge between vertex A and vertex B can be traversed in either direction.
*   **Connected Graph:** A graph where there is a path between any two vertices.
*   **Spanning Tree:** A subgraph of a connected graph that includes all the vertices and is a tree (no cycles).
*   **Minimum Cost Spanning Tree (MST):** A spanning tree of a weighted graph with the minimum total edge weight.  A graph can have multiple MSTs if some edges have the same weight.
*   **Greedy Algorithm:** An algorithmic paradigm that makes the locally optimal choice at each step with the hope of finding a global optimum.

## 2. Kruskal's Algorithm

### 2.1 Explanation

Kruskal's algorithm is a greedy algorithm used to find the MST for a weighted graph.  It works by iteratively adding the smallest weight edge to the MST, provided that adding the edge does not create a cycle.

### 2.2 Algorithm Steps

1.  **Sort:** Sort all the edges in the graph in non-decreasing order of their weights.
2.  **Initialize:** Create an empty set `MST` to store the edges of the MST. Also, we need a mechanism to track connected components.  A common approach is using the *Disjoint Set Union* (DSU) data structure (also known as Union-Find).
3.  **Iterate:** Iterate through the sorted edges:
    *   For each edge `(u, v)` with weight `w`:
        *   Check if adding the edge `(u, v)` to `MST` would create a cycle. This is determined by checking if vertices `u` and `v` are already in the same connected component using the DSU structure.
        *   If adding the edge `(u, v)` does *not* create a cycle (i.e., `u` and `v` are in different connected components):
            *   Add the edge `(u, v)` to `MST`.
            *   Merge the connected components containing vertices `u` and `v` using the `Union` operation of the DSU structure.
4.  **Termination:**  The algorithm terminates when `MST` contains `V-1` edges, where `V` is the number of vertices in the graph.  At this point, `MST` represents the minimum spanning tree.

### 2.3 Disjoint Set Union (DSU) Data Structure

The DSU structure is used for tracking connected components.  It supports two main operations:

*   **`Find(x)`:**  Finds the representative (root) of the set containing element `x`.
*   **`Union(x, y)`:**  Merges the sets containing elements `x` and `y`.

Efficient implementations of DSU use *path compression* and *union by rank* to achieve nearly O(1) amortized time complexity for both `Find` and `Union` operations.

#### 2.3.1 Implementation (Python)

```python
class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # Path compression
        return self.parent[x]

    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)

        if root_x != root_y:
            if self.rank[root_x] < self.rank[root_y]:
                self.parent[root_x] = root_y
            elif self.rank[root_x] > self.rank[root_y]:
                self.parent[root_y] = root_x
            else:
                self.parent[root_y] = root_x
                self.rank[root_x] += 1
```

### 2.4 Kruskal's Algorithm Implementation (Python)

```python
def kruskal(graph):
    """
    Implements Kruskal's Algorithm to find the Minimum Spanning Tree.

    Args:
        graph: A list of tuples representing the edges, where each tuple is (weight, u, v).
               'u' and 'v' are vertex indices (starting from 0).

    Returns:
        A tuple containing:
            - The MST as a list of edges (weight, u, v).
            - The total cost of the MST.
    """
    graph.sort()  # Sort edges by weight
    n_vertices = 0
    for _, u, v in graph:
        n_vertices = max(n_vertices, u, v)
    n_vertices += 1  # Add 1 since vertices start from 0
    dsu = DSU(n_vertices)
    mst = []
    total_cost = 0

    for weight, u, v in graph:
        if dsu.find(u) != dsu.find(v):
            mst.append((weight, u, v))
            total_cost += weight
            dsu.union(u, v)

    return mst, total_cost


# Example usage:
graph = [
    (4, 0, 1),
    (8, 0, 7),
    (11, 1, 7),
    (8, 1, 2),
    (2, 7, 8),
    (7, 7, 6),
    (1, 8, 6),
    (6, 2, 8),
    (7, 2, 3),
    (4, 8, 2),
    (9, 6, 5),
    (10, 2, 5),
    (14, 3, 5),
    (2, 3, 4),
    (9, 5, 4)
]

mst, total_cost = kruskal(graph)
print("Minimum Spanning Tree:", mst)
print("Total Cost:", total_cost)
```

### 2.5 Time Complexity of Kruskal's Algorithm

*   **Sorting Edges:** O(E log E), where E is the number of edges.
*   **DSU Operations:** O(E * α(V)), where V is the number of vertices and α(V) is the inverse Ackermann function, which grows extremely slowly and can be considered nearly constant for practical purposes.  Therefore, DSU operations take effectively O(E) time.

Overall, the time complexity of Kruskal's Algorithm is **O(E log E)**. Since the number of edges E can be at most V(V-1)/2, E is O(V^2), and therefore log E is O(log V).  Therefore, we can also express the time complexity as **O(E log V)**.

## 3. Prim's Algorithm

### 3.1 Explanation

Prim's algorithm is another greedy algorithm used to find the MST for a weighted graph. Unlike Kruskal's, Prim's algorithm builds the MST starting from a single vertex and expands it iteratively by adding the minimum weight edge that connects a vertex in the current MST to a vertex *not* yet in the MST.

### 3.2 Algorithm Steps

1.  **Initialization:**
    *   Select an arbitrary vertex as the starting vertex.
    *   Create a set `MST` to store the vertices in the MST, and initially add the starting vertex to it.
    *   Create a set `remaining_vertices` which initially contains all vertices *except* the starting vertex.
2.  **Iteration:**
    *   While `remaining_vertices` is not empty:
        *   Find the minimum weight edge `(u, v)` such that `u` is in `MST` and `v` is in `remaining_vertices`.
        *   Add vertex `v` to `MST`.
        *   Remove vertex `v` from `remaining_vertices`.
        *   Add the edge `(u, v)` to the MST.
3.  **Termination:**  The algorithm terminates when all vertices are in the `MST`.

### 3.3 Efficient Implementation using Priority Queue (Min-Heap)

To efficiently find the minimum weight edge in each iteration, Prim's algorithm is often implemented using a priority queue (min-heap).  The priority queue stores vertices not yet in the MST, prioritized by the weight of the minimum edge connecting them to the current MST.

#### 3.3.1 Priority Queue Implementation (using `heapq` in Python)

```python
import heapq

def prim(graph):
    """
    Implements Prim's Algorithm to find the Minimum Spanning Tree.

    Args:
        graph: A dictionary representing the graph, where keys are vertex indices
               and values are dictionaries of adjacent vertices with their edge weights.
               Example: {0: {1: 4, 7: 8}, 1: {0: 4, 7: 11, 2: 8}, ...}

    Returns:
        A tuple containing:
            - The MST as a list of edges (weight, u, v).
            - The total cost of the MST.
    """
    start_node = next(iter(graph))  # Choose an arbitrary starting node
    n_vertices = len(graph)
    mst = []
    total_cost = 0
    visited = {start_node}
    remaining_vertices = set(graph.keys()) - visited

    # Priority queue (min-heap) to store edges connecting visited nodes to unvisited nodes.
    # Stored as (weight, u, v) where 'u' is in visited and 'v' is in remaining_vertices.
    pq = []
    for neighbor, weight in graph[start_node].items():
        heapq.heappush(pq, (weight, start_node, neighbor))


    while remaining_vertices:
        weight, u, v = heapq.heappop(pq)

        if v not in visited:  # Ensure we haven't already visited this vertex
            mst.append((weight, u, v))
            total_cost += weight
            visited.add(v)
            remaining_vertices.remove(v)


            # Add new edges from the newly visited vertex to the priority queue.
            for neighbor, new_weight in graph[v].items():
                if neighbor not in visited:
                    heapq.heappush(pq, (new_weight, v, neighbor))

    return mst, total_cost


# Example usage:
graph = {
    0: {1: 4, 7: 8},
    1: {0: 4, 7: 11, 2: 8},
    2: {1: 8, 8: 6, 3: 7, 5: 10},
    3: {2: 7, 5: 14, 4: 9},
    4: {3: 9, 5: 9},
    5: {2: 10, 3: 14, 4: 9, 6: 9},
    6: {7: 7, 5: 9, 8: 1},
    7: {0: 8, 1: 11, 6: 7, 8: 2},
    8: {7: 2, 6: 1, 2: 6}
}

mst, total_cost = prim(graph)
print("Minimum Spanning Tree:", mst)
print("Total Cost:", total_cost)
```

### 3.4 Time Complexity of Prim's Algorithm

*   **Initialization:** O(V), where V is the number of vertices.
*   **Priority Queue Operations:**
    *   Building the initial priority queue takes O(V log V) in the worst case.
    *   Extracting the minimum edge and updating the priority queue takes O(log V) per edge. In the worst case, we might consider each edge once, leading to O(E log V).

Therefore, the overall time complexity of Prim's Algorithm using a priority queue is **O(V log V + E log V)**, which can be simplified to **O(E log V)**.  In a dense graph where E is close to V^2, this can become O(V^2 log V).

With a Fibonacci heap, Prim's algorithm can achieve a time complexity of O(E + V log V). However, Fibonacci heaps are more complex to implement.

## 4. Comparison of Kruskal's and Prim's Algorithms

| Feature         | Kruskal's Algorithm                         | Prim's Algorithm                            |
|-----------------|----------------------------------------------|---------------------------------------------|
| Approach       | Edge-centric: Considers edges globally.     | Vertex-centric: Grows the MST from a vertex. |
| Data Structure | Disjoint Set Union (DSU)                     | Priority Queue (Min-Heap)                   |
| Time Complexity| O(E log E) or O(E log V)                    | O(E log V)                                 |
| Best Suited For| Sparse graphs (E << V^2)                     | Dense graphs (E ≈ V^2)                      |
| Implementation Complexity | Relatively simple DSU implementation.    | Priority queue implementation.              |

## 5. Examples

**Example 1: (Kruskal's)**

Consider the following graph represented as a list of edges (weight, u, v):

`[(10, 0, 1), (15, 0, 2), (5, 1, 2), (8, 1, 3), (20, 2, 3)]`

1.  **Sorted Edges:** `[(5, 1, 2), (8, 1, 3), (10, 0, 1), (15, 0, 2), (20, 2, 3)]`
2.  **MST:**
    *   (5, 1, 2) - Added (u and v in different components)
    *   (8, 1, 3) - Added (u and v in different components)
    *   (10, 0, 1) - Added (u and v in different components)
    *   (15, 0, 2) - Skipped (u and v are in the same component)
    *   (20, 2, 3) - Skipped (u and v are in the same component)

**MST: `[(5, 1, 2), (8, 1, 3), (10, 0, 1)]`, Total Cost: 23**

**Example 2: (Prim's)**

Consider the same graph represented as a dictionary:

```
{
    0: {1: 10, 2: 15},
    1: {0: 10, 2: 5, 3: 8},
    2: {0: 15, 1: 5, 3: 20},
    3: {1: 8, 2: 20}
}
```

Starting vertex: 0

1.  PQ initialized with edges from 0: `[(10, 0, 1), (15, 0, 2)]`
2.  (10, 0, 1) selected.  MST: `[(10, 0, 1)]`, Cost: 10, Visited: {0, 1}.  PQ becomes: `[(5, 1, 2), (8, 1, 3), (15, 0, 2)]`
3.  (5, 1, 2) selected.  MST: `[(10, 0, 1), (5, 1, 2)]`, Cost: 15, Visited: {0, 1, 2}. PQ becomes: `[(8, 1, 3), (15, 0, 2), (20,2,3)]`
4.  (8, 1, 3) selected.  MST: `[(10, 0, 1), (5, 1, 2), (8, 1, 3)]`, Cost: 23, Visited: {0, 1, 2, 3}.
    All vertices visited, algorithm terminates.

**MST: `[(10, 0, 1), (5, 1, 2), (8, 1, 3)]`, Total Cost: 23**

## 6. Practice Questions

1.  Given the following graph represented as a list of edges (weight, u, v): `[(1, 0, 1), (2, 0, 2), (3, 1, 2), (4, 1, 3), (5, 2, 3)]`, find the MST using Kruskal's Algorithm. Show each step.
    *   **Answer:**
        1.  Sorted Edges: `[(1, 0, 1), (2, 0, 2), (3, 1, 2), (4, 1, 3), (5, 2, 3)]`
        2.  MST:
            *   (1, 0, 1) - Added
            *   (2, 0, 2) - Added
            *   (3, 1, 2) - Skipped (0, 1, and 2 are in the same component)
            *   (4, 1, 3) - Added

        MST: `[(1, 0, 1), (2, 0, 2), (4, 1, 3)]`, Total Cost: 7

2.  Given the following graph represented as a dictionary:
    ```
    {
        0: {1: 1, 2: 2},
        1: {0: 1, 2: 3, 3: 4},
        2: {0: 2, 1: 3, 3: 5},
        3: {1: 4, 2: 5}
    }
    ```
    Find the MST using Prim's Algorithm, starting from vertex 0.  Show each step.
    *   **Answer:**
        1.  PQ Initialized: `[(1, 0, 1), (2, 0, 2)]`
        2.  (1, 0, 1) selected. MST: `[(1, 0, 1)]`, Cost: 1, Visited: {0, 1}. PQ becomes: `[(2, 0, 2), (3, 1, 2), (4, 1, 3)]`
        3.  (2, 0, 2) selected. MST: `[(1, 0, 1), (2, 0, 2)]`, Cost: 3, Visited: {0, 1, 2}. PQ becomes: `[(3, 1, 2), (4, 1, 3), (5,2,3)]`
        4.  (4, 1, 3) selected. MST: `[(1, 0, 1), (2, 0, 2), (4, 1, 3)]`, Cost: 7, Visited: {0, 1, 2, 3}.

        MST: `[(1, 0, 1), (2, 0, 2), (4, 1, 3)]`, Total Cost: 7

3. What are the key differences between Kruskal's and Prim's algorithm?  In what type of graphs does Kruskal's algorithm performs better than Prim's and vice versa?

    *   **Answer:** Kruskal's algorithm is edge-centric, sorting all edges and adding the smallest ones that don't create cycles, while Prim's algorithm is vertex-centric, expanding a tree from a starting vertex. Kruskal's generally performs better on sparse graphs (few edges relative to vertices), and Prim's typically performs better on dense graphs (many edges relative to vertices).

## 7. Important Points to Remember

*   Both Kruskal's and Prim's algorithms guarantee finding the *minimum* cost spanning tree.
*   The choice of algorithm (Kruskal's or Prim's) often depends on the density of the graph.  For sparse graphs, Kruskal's is often preferred, while for dense graphs, Prim's may be more efficient.
*   Understanding the Disjoint Set Union (DSU) data structure is crucial for efficiently implementing Kruskal's algorithm.
*   Using a priority queue (min-heap) is essential for optimizing the performance of Prim's algorithm.
*   Remember the greedy nature of both algorithms – they make locally optimal choices at each step to achieve a globally optimal solution.
