---
title: "Kosaraju's Algorithm"
subject: "ADVANCED GRAPH ALGORITHMS"
module: "Module 2: Strongly Connected Components (SCC) "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b902"
status: "completed"
scrapedAt: "2026-05-20T16:42:53.054Z"
---
## ADVANCED GRAPH ALGORITHMS: Module 2 - Strongly Connected Components (SCC)

### Topic: Kosaraju's Algorithm

**Learning Outcomes:**

*   Understand the concept of Strongly Connected Components (SCCs).
*   Describe Kosaraju's algorithm and its steps.
*   Implement Kosaraju's algorithm to find SCCs in a directed graph.
*   Analyze the time complexity of Kosaraju's algorithm.
*   Apply Kosaraju's algorithm to solve relevant problems.

**1. Key Concepts and Definitions:**

*   **Directed Graph (Digraph):** A graph where edges have a direction (i.e., from node A to node B is different from node B to node A).
*   **Path:** A sequence of vertices such that each consecutive pair is connected by an edge.
*   **Strongly Connected:** A directed graph is strongly connected if for every pair of vertices *u* and *v*, there is a path from *u* to *v* and a path from *v* to *u*.
*   **Strongly Connected Component (SCC):** A maximal strongly connected subgraph of a directed graph.  "Maximal" means that you cannot add another vertex to the subgraph and still have it be strongly connected.
*   **Transpose Graph (Reverse Graph):** A graph derived from a directed graph where the direction of every edge is reversed. If the original graph has an edge (u, v), the transpose graph will have an edge (v, u).
*   **Depth-First Search (DFS):** A graph traversal algorithm that explores as far as possible along each branch before backtracking.
*   **Finish Time (in DFS):** The time when a vertex's exploration during DFS is complete, i.e., after all its adjacent vertices have been visited (or are already visited).

**2. Kosaraju's Algorithm: Finding SCCs**

Kosaraju's algorithm is a two-pass algorithm used to find strongly connected components in a directed graph.  It leverages the properties of the transpose graph and DFS.

**Algorithm Steps:**

1.  **First Pass (DFS on Original Graph):**
    *   Perform Depth-First Search (DFS) on the original graph.
    *   During the DFS, record the **finish time** of each vertex.  Store these vertices in a stack (or a list) in descending order of their finish times. This stack is crucial for the second pass.

2.  **Second Pass (DFS on Transpose Graph):**
    *   Create the transpose (reverse) graph of the original graph.
    *   Pop vertices from the stack created in the first pass, one by one.
    *   For each vertex popped from the stack:
        *   If the vertex has not been visited yet, perform a DFS on the transpose graph starting from that vertex.
        *   All vertices visited during this DFS form a Strongly Connected Component.

**3. Why does Kosaraju's Algorithm work?**

The correctness of Kosaraju's algorithm relies on the following key ideas:

*   **Finish Times and SCC Order:** The first DFS, ordered by finish times, gives an ordering that respects the structure of the SCCs.  SCCs whose vertices have higher finish times will be processed before SCCs whose vertices have lower finish times in the second DFS (on the transposed graph). This essentially processes SCCs in a topological order of the meta-graph (where each SCC is a single meta-node).
*   **Transpose Graph and SCCs:** The transpose graph preserves the SCCs of the original graph. That is, if vertices *u* and *v* are in the same SCC in the original graph, they are also in the same SCC in the transpose graph.  However, the relationships between *different* SCCs are reversed in the transpose graph compared to the original graph.
*   **Processing by Finish Time:** By processing vertices in decreasing order of finish times during the second DFS, we ensure that we explore entire SCCs before moving on to other SCCs reachable from them in the *original* graph.

**4. Example:**

Let's consider the following directed graph represented by its adjacency list:

```
Graph G:
0: [1]
1: [2]
2: [0, 3]
3: [4]
4: [5]
5: [3]
6: [7]
7: [8]
8: [6]
```

**Step 1: DFS on Original Graph**

1.  DFS starts at vertex 0.  Vertices are visited and marked as visited.
2.  Continue DFS until all vertices are visited.  The stack `S` (ordered by finish times) will look like this (from top to bottom - last finished to first finished):

    `S = [8, 7, 6, 5, 4, 3, 2, 1, 0]`

**Step 2: Transpose Graph**

The transpose graph G<sup>T</sup> is:

```
Graph G^T:
0: [2]
1: [0]
2: [1]
3: [2, 5]
4: [3]
5: [4]
6: [8]
7: [6]
8: [7]
```

**Step 3: DFS on Transpose Graph (in order of finish times)**

1.  Pop 8 from the stack `S`.  Start DFS from 8 in G<sup>T</sup>.  The SCC found is {8, 7, 6}.
2.  Pop 5 from the stack `S`.  Start DFS from 5 in G<sup>T</sup>.  The SCC found is {5, 4, 3}.
3.  Pop 2 from the stack `S`.  Start DFS from 2 in G<sup>T</sup>.  The SCC found is {2, 1, 0}.

Therefore, the SCCs are: {8, 7, 6}, {5, 4, 3}, and {2, 1, 0}.

**5. Implementation (Python):**

```python
from collections import defaultdict

class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.graph = defaultdict(list)

    def add_edge(self, u, v):
        self.graph[u].append(v)

    def dfs(self, v, visited, stack):
        visited[v] = True
        for neighbour in self.graph[v]:
            if not visited[neighbour]:
                self.dfs(neighbour, visited, stack)
        stack.append(v)

    def get_transpose(self):
        g = Graph(self.V)
        for i in range(self.V):
            for j in self.graph[i]:
                g.add_edge(j, i)
        return g

    def dfs2(self, v, visited, component):
        visited[v] = True
        component.append(v)
        for neighbour in self.graph[v]:
            if not visited[neighbour]:
                self.dfs2(neighbour, visited, component)

    def find_scc(self):
        stack = []
        visited = [False] * self.V
        for i in range(self.V):
            if not visited[i]:
                self.dfs(i, visited, stack)

        gr = self.get_transpose()

        visited = [False] * self.V
        scc_list = []

        while stack:
            i = stack.pop()
            if not visited[i]:
                component = []
                gr.dfs2(i, visited, component)
                scc_list.append(component)

        return scc_list


# Example usage
g = Graph(9)
g.add_edge(0, 1)
g.add_edge(1, 2)
g.add_edge(2, 0)
g.add_edge(2, 3)
g.add_edge(3, 4)
g.add_edge(4, 5)
g.add_edge(5, 3)
g.add_edge(6, 7)
g.add_edge(7, 8)
g.add_edge(8, 6)

sccs = g.find_scc()
print("Strongly Connected Components:")
for scc in sccs:
    print(scc)
```

**6. Time Complexity Analysis:**

*   **First DFS:** O(V + E), where V is the number of vertices and E is the number of edges.
*   **Creating the transpose graph:** O(V + E).
*   **Second DFS:** O(V + E).

Therefore, the overall time complexity of Kosaraju's algorithm is **O(V + E)**, making it a linear-time algorithm.

**7. Applications:**

*   **Network Analysis:** Identifying clusters of highly interconnected nodes in a network.
*   **Compiler Design:** Finding strongly connected components in a dependency graph to optimize code compilation.
*   **Data Mining:** Discovering communities in social networks.
*   **Scheduling:** Determining the order in which tasks can be executed in a project with dependencies.

**8. Important Points to Remember:**

*   Kosaraju's algorithm works only for **directed graphs**.
*   The order of vertices in the stack generated by the first DFS is crucial for the correctness of the algorithm.
*   The transpose graph preserves the SCCs but reverses the relationships between them.
*   Kosaraju's algorithm is a relatively simple and efficient algorithm for finding SCCs.
*   The algorithm provides a topological ordering of the SCCs of the graph.

**9. Practice Questions/Exercises:**

1.  **Manually apply Kosaraju's algorithm to the following graph. Show each step, including the DFS on the original graph, the creation of the transpose graph, and the DFS on the transpose graph.  Provide the final list of SCCs.**

    ```
    Graph:
    A: [B, C]
    B: [D]
    C: [D]
    D: [E, F]
    E: [A]
    F: [G]
    G: []
    ```

    **Answer:**

    *   **Step 1 (DFS on Original Graph):**  A possible order of finish times (from last finished to first finished) could be: `[G, F, D, C, B, E, A]`.  (Note: This may vary slightly depending on the exact traversal order during DFS, but the important point is the relative ordering induced by the finish times).
    *   **Step 2 (Transpose Graph):**

        ```
        Transpose Graph:
        A: [E]
        B: [A]
        C: [A]
        D: [B, C]
        E: [D]
        F: [D]
        G: [F]
        ```

    *   **Step 3 (DFS on Transpose Graph):**

        1.  Start with G: SCC is {G}
        2.  Start with F: SCC is {F}
        3.  Start with D: SCC is {D}
        4.  Start with C: SCC is {C, B, A, E}

    *   **SCCs: [{G}, {F}, {D}, {C, B, A, E}]**

2.  **Given a directed graph, explain why simply performing DFS from each vertex will not necessarily reveal all the SCCs.**

    **Answer:**  A simple DFS starting from each vertex may not find SCCs because it might explore vertices outside of the SCC before visiting all vertices within the SCC. The algorithm might prematurely terminate exploration within the SCC, leading to an incomplete and incorrect identification of SCCs. Consider a scenario where a vertex in an SCC has an edge leading to another SCC. A simple DFS will likely explore the other SCC before finishing exploring its own, thus failing to recognize the original SCC as a whole.

3.  **How does the time complexity of Kosaraju's algorithm compare to other SCC algorithms, such as Tarjan's algorithm?**

    **Answer:**  Both Kosaraju's and Tarjan's algorithms have a time complexity of O(V + E), where V is the number of vertices and E is the number of edges. Therefore, they are asymptotically equivalent in terms of time complexity. However, Tarjan's algorithm is generally considered slightly more efficient in practice because it requires only one DFS pass, while Kosaraju's requires two (and the creation of the transposed graph). However, Kosaraju's algorithm is often easier to understand and implement than Tarjan's algorithm.
