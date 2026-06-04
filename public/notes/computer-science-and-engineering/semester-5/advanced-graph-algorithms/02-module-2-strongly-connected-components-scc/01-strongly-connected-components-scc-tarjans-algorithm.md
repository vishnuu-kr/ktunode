---
title: "Strongly Connected Components (SCC) - Tarjan's Algorithm"
subject: "ADVANCED GRAPH ALGORITHMS"
module: "Module 2: Strongly Connected Components (SCC) "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b901"
status: "completed"
scrapedAt: "2026-05-20T16:42:52.353Z"
---
# ADVANCED GRAPH ALGORITHMS - Module 2: Strongly Connected Components (SCC) - Tarjan's Algorithm

## Topic: Strongly Connected Components (SCC) - Tarjan's Algorithm

### Learning Outcomes:

*   Understand the concept of Strongly Connected Components (SCCs) in directed graphs.
*   Explain the properties of SCCs.
*   Learn Tarjan's algorithm for finding SCCs.
*   Trace Tarjan's algorithm through examples.
*   Analyze the time complexity of Tarjan's algorithm.
*   Implement Tarjan's algorithm in code (conceptual understanding).

---

### 1. Introduction to Strongly Connected Components (SCCs)

*   **Definition:**  A strongly connected component (SCC) of a directed graph is a maximal set of vertices such that for every pair of vertices `u` and `v` in the set, there is a path from `u` to `v` and a path from `v` to `u`.  "Maximal" means we can't add any more vertices to the set without violating this property.

*   **Directed Graph:**  Crucially, SCCs are only defined for *directed* graphs.  The direction of edges matters.

*   **Importance:** Finding SCCs helps understand the structure and connectivity of directed graphs.  Applications include:
    *   **Network Analysis:** Identifying groups of computers that can communicate with each other bidirectionally.
    *   **Compiler Design:** Analyzing dependencies in code.
    *   **Social Network Analysis:** Finding communities or groups within a network.

*   **Example:**

    Consider the following directed graph:

    ```
    A --> B
    ^   / \
    |  /   v
    D <-- C
    |
    v
    E --> F
    ^   /
    |  /
    G <-- H
    ```

    The SCCs are:

    *   {A, B, C, D}  (Every vertex can reach every other vertex within this set)
    *   {E, F}
    *   {G, H}

*   **Properties of SCCs:**

    *   **Disjoint:** Each vertex belongs to exactly one SCC.  SCCs don't overlap.
    *   **Condensation Graph:** You can create a "condensation graph" (or component graph) by replacing each SCC with a single vertex and adding edges between the vertices representing SCCs if there was an edge between any two vertices in the corresponding SCCs in the original graph. The condensation graph is *always* a Directed Acyclic Graph (DAG).  This is because if there was a cycle in the condensation graph, the SCCs involved would actually be part of a single larger SCC.

### 2. Tarjan's Algorithm: A Depth-First Search (DFS) Approach

*   **Overview:** Tarjan's algorithm is a DFS-based algorithm for finding all SCCs in a directed graph. It relies on the following key concepts:

    *   **Index:**  A unique sequential number assigned to each node during DFS traversal (starting from 0 or 1).  Represents the order in which the nodes are visited.
    *   **Lowlink:** The lowest index of any node reachable from the current node (including the node itself) through the DFS subtree rooted at the current node *and potentially one back edge*.  The lowlink essentially tells us "How high up the DFS tree can I reach?"

*   **Algorithm Steps:**

    1.  **Initialization:**
        *   `index = 0` (or 1, depending on your starting index).
        *   For each vertex `v`:
            *   `v.index = -1` (marks vertex as unvisited)
            *   `v.lowlink = infinity` (or a large number)
            *   `v.onStack = false`
        *   Create an empty stack `stack`.

    2.  **DFS Traversal:**
        *   For each vertex `v` in the graph:
            *   If `v.index` is -1 (not visited), call `strongconnect(v)`

    3.  **`strongconnect(v)` function:**

        ```
        strongconnect(v):
            v.index = index
            v.lowlink = index
            index = index + 1
            stack.push(v)
            v.onStack = true

            for each neighbor w of v:
                if w.index == -1:  // w is not visited
                    strongconnect(w)
                    v.lowlink = min(v.lowlink, w.lowlink)
                else if w.onStack:  // w is on the stack (back edge found)
                    v.lowlink = min(v.lowlink, w.index) // Key step

            if v.lowlink == v.index:  // v is the root of an SCC
                start a new SCC
                repeat
                    w = stack.pop()
                    w.onStack = false
                    add w to the current SCC
                until w == v
                output the current SCC
        ```

*   **Explanation:**

    *   **`v.index = index; v.lowlink = index; index = index + 1`**: Assigns the current index to the vertex `v`. Initially, the lowlink is also set to the index, assuming the vertex can only reach itself.
    *   **`stack.push(v); v.onStack = true`**:  Pushes the vertex onto the stack and marks it as being on the stack. The stack maintains the path of the DFS.
    *   **`for each neighbor w of v`**:  Iterates through the neighbors of `v`.
        *   **`if w.index == -1`**: If a neighbor `w` has not been visited (its index is -1), recursively call `strongconnect(w)` and update `v.lowlink` to the minimum of its current value and `w.lowlink`. This propagates the information about reachable nodes.
        *   **`else if w.onStack`**: If a neighbor `w` is already on the stack, it means there is a *back edge* from `v` to `w`. In this case, update `v.lowlink` to the minimum of its current value and `w.index`. *Important:* We use `w.index` here, not `w.lowlink`, because we are considering only paths *within* the current DFS stack to define an SCC.
    *   **`if v.lowlink == v.index`**: If the `lowlink` of a vertex `v` is equal to its `index`, it means that `v` is the root of an SCC. All vertices above `v` on the stack are part of the same SCC. The algorithm then pops vertices from the stack until `v` is reached, adding them to the new SCC.

### 3. Example: Tracing Tarjan's Algorithm

Let's trace Tarjan's algorithm on the following directed graph:

```
A --> B
^   / \
|  /   v
D <-- C
|
v
E --> F
^   /
|  /
G <-- H
```

Let's assume the DFS starts from vertex A.

| Step | Vertex | index | lowlink | onStack | Stack        | SCC Output | Explanation                                                                                   |
|------|--------|-------|---------|---------|--------------|------------|-----------------------------------------------------------------------------------------------|
| 1    | A      | 0     | 0       | True    | [A]          |            | A is visited, index and lowlink set to 0, pushed onto the stack.                               |
| 2    | B      | 1     | 1       | True    | [A, B]       |            | B is visited, index and lowlink set to 1, pushed onto the stack.                               |
| 3    | C      | 2     | 2       | True    | [A, B, C]    |            | C is visited, index and lowlink set to 2, pushed onto the stack.                               |
| 4    | D      | 3     | 3       | True    | [A, B, C, D] |            | D is visited, index and lowlink set to 3, pushed onto the stack.                               |
| 5    | A      |       |         |         | [A, B, C, D] |            | D -> A (back edge).  D.lowlink = min(3, 0) = 0                                             |
| 6    |        |       |         |         | [A, B, C, D] |            | D.lowlink = 0 != D.index = 3                                                                  |
| 7    |        |       |         |         | [A, B, C, D] |            | C -> D. C.lowlink = min(2, 0) = 0                                                             |
| 8    |        |       |         |         | [A, B, C, D] |            | C.lowlink = 0 != C.index = 2                                                                  |
| 9    |        |       |         |         | [A, B, C, D] |            | B -> C. B.lowlink = min(1, 0) = 0                                                             |
| 10   |        |       |         |         | [A, B, C, D] |            | B.lowlink = 0 != B.index = 1                                                                  |
| 11   |        |       |         |         | [A, B, C, D] |            | A -> B. A.lowlink = min(0, 0) = 0                                                             |
| 12   |        |       |         |         | [A, B, C, D] | {A, B, C, D} | A.lowlink = 0 == A.index = 0. Pop elements from stack until A: D, C, B, A added to SCC.       |
| 13   | E      | 4     | 4       | True    | [E]          |            | E is visited, index and lowlink set to 4, pushed onto the stack.                               |
| 14   | F      | 5     | 5       | True    | [E, F]       |            | F is visited, index and lowlink set to 5, pushed onto the stack.                               |
| 15   |        |       |         |         | [E, F]       | {E, F}        | F has no neighbours. F.lowlink = 5 == F.index = 5. Pop F from stack.                        |
| 16   |        |       |         |         | [E]          |            | E -> F.  E.lowlink = min(4,5) = 4                                                              |
| 17   |        |       |         |         | [E]          | {E}       | E.lowlink = 4 == E.index = 4. Pop E from stack.                                            |
| 18   | G      | 6     | 6       | True    | [G]       |            | G is visited, index and lowlink set to 6, pushed onto the stack.                               |
| 19   | H      | 7     | 7       | True    | [G, H]    |            | H is visited, index and lowlink set to 7, pushed onto the stack.                               |
| 20   |        |       |         |         | [G, H]    |            | H has no neighbours.  H.lowlink = 7 == H.index = 7, Pop H from stack.                          |
| 21   |        |       |         |         | [G]    |            | G --> H. G.lowlink = min(6,7) = 6                                                                 |
| 22   |        |       |         |         | [G]    | {G, H}        | G.lowlink = 6 == G.index = 6. Pop G from stack,                                          |

So, the SCCs are: `{A, B, C, D}`, `{E, F}`, and `{G, H}`.

### 4. Time Complexity

*   **O(V + E)**, where V is the number of vertices and E is the number of edges.  This is because each vertex and edge is visited at most once during the DFS traversal.

### 5. Implementation (Conceptual)

```python
class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.graph = [[] for _ in range(vertices)]
        self.index = 0  # Global index counter
        self.stack = []  # Stack for SCC algorithm
        self.indices = [-1] * vertices  # Index of each vertex
        self.lowlinks = [float('inf')] * vertices # Lowlink of each vertex
        self.onStack = [False] * vertices # Is vertex on the stack?
        self.sccs = [] # List to store the SCCs

    def add_edge(self, u, v):
        self.graph[u].append(v)

    def strongconnect(self, v):
        self.indices[v] = self.index
        self.lowlinks[v] = self.index
        self.index += 1
        self.stack.append(v)
        self.onStack[v] = True

        for w in self.graph[v]:
            if self.indices[w] == -1:  # Not visited
                self.strongconnect(w)
                self.lowlinks[v] = min(self.lowlinks[v], self.lowlinks[w])
            elif self.onStack[w]:  # Back edge
                self.lowlinks[v] = min(self.lowlinks[v], self.indices[w])

        if self.lowlinks[v] == self.indices[v]:
            scc = []
            while True:
                w = self.stack.pop()
                self.onStack[w] = False
                scc.append(w)
                if w == v:
                    break
            self.sccs.append(scc)
            print(f"Found SCC: {scc}")


    def find_sccs(self):
        for v in range(self.V):
            if self.indices[v] == -1:
                self.strongconnect(v)

# Example Usage:
g = Graph(8)
g.add_edge(0, 1) # A -> B
g.add_edge(1, 2) # B -> C
g.add_edge(2, 3) # C -> D
g.add_edge(3, 0) # D -> A
g.add_edge(0,3) # A -> D
g.add_edge(3,0) # D -> A

g.add_edge(4, 5) # E -> F
g.add_edge(6,7) # G -> H

g.add_edge(6,4) # G -> E
g.add_edge(7,6) # H -> G

g.find_sccs()
```

### 6. Important Points to Remember

*   **Back Edges:**  The key to Tarjan's algorithm is how it handles back edges.  These edges indicate that a node can reach an ancestor in the DFS tree, which can lead to the formation of an SCC.
*   **Stack Maintenance:** The stack stores the vertices in the current DFS path. The `onStack` array efficiently checks if a neighbor is currently being visited.
*   **`lowlink` Updates:**  The `lowlink` value is updated based on either the `lowlink` of unvisited neighbors (tree edges) or the `index` of neighbors already on the stack (back edges).
*   **Root Identification:** When `v.lowlink == v.index`, it means that `v` is the root of an SCC.
*   **Non-Recursive Implementation:** Tarjan's algorithm can also be implemented iteratively using an explicit stack and loop instead of recursion.
*  **Condensation Graph:** Understanding the relationship between SCCs and the condensation graph (which is always a DAG) is a crucial application of finding SCCs.

### 7. Practice Questions/Exercises

1.  **Question:** Given the directed graph represented by the following adjacency list:
    ```
    0: [1]
    1: [2]
    2: [0, 3]
    3: [4]
    4: [5]
    5: [3]
    ```
    What are the Strongly Connected Components (SCCs)?  Trace Tarjan's Algorithm (show the steps) to find them.

    **Answer:** The SCCs are `{0, 1, 2}` and `{3, 4, 5}`. You should trace Tarjan's Algorithm to verify this, showing the stack, indices, and lowlinks at each step.

2.  **Question:** Explain the purpose of the `onStack` array in Tarjan's algorithm. Why is it necessary?

    **Answer:** The `onStack` array is used to determine if a visited neighbor `w` of a vertex `v` is currently part of the DFS recursion stack.  If `w` is on the stack, it indicates the presence of a back edge from `v` to `w`, suggesting that `v` and `w` might belong to the same SCC. We only consider the indices of the vertices on the stack as candidates for lowlinks, since those vertices define the current "candidate" SCC.  Without `onStack`, you might incorrectly identify SCCs due to considering nodes that are part of finished subtrees.

3.  **Question:** What is the time complexity of Tarjan's algorithm, and why is it that complexity?

    **Answer:** The time complexity of Tarjan's algorithm is O(V + E), where V is the number of vertices and E is the number of edges in the graph. This is because the algorithm performs a depth-first search (DFS) which visits each vertex and edge at most once. The other operations within the `strongconnect` function, such as stack operations and lowlink comparisons, take constant time per vertex or edge.

4.  **Question:** How would you modify Tarjan's Algorithm to find the *number* of SCCs in a graph without explicitly finding the vertices in each component?

    **Answer:**  You wouldn't need to modify it much. In the `strongconnect` function, instead of creating and outputting the SCC, increment a counter *only when* `v.lowlink == v.index`. The final value of the counter represents the number of SCCs.

5.  **Question:** Suppose you have a graph with 10 vertices and 20 edges.  In the worst case, what is the maximum depth that the recursion stack might reach in Tarjan's Algorithm?

    **Answer:**  In the worst case, the recursion stack might reach a depth of 10, which is the number of vertices in the graph. This occurs when the DFS traversal follows a path that visits all vertices before encountering any cycles or back edges.

---
This comprehensive guide covers the key aspects of Tarjan's algorithm for finding SCCs.  By understanding the concepts, working through examples, and attempting the practice questions, you should have a strong grasp of this important graph algorithm. Good luck!
