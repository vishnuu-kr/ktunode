---
title: "Disjoint Sets - Disjoint set operations"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 2: Disjoint Sets "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b54c"
status: "completed"
scrapedAt: "2026-05-20T16:45:33.899Z"
---
# DESIGN AND ANALYSIS OF ALGORITHMS: Module 2 - Disjoint Sets

## Topic: Disjoint Sets - Disjoint Set Operations

**Learning Outcomes:**

*   Understand the concept of disjoint sets.
*   Describe and implement the fundamental disjoint set operations: `MakeSet`, `Find`, and `Union`.
*   Analyze the time complexity of basic disjoint set operations.
*   Explain the benefits of using the "Union by Rank" heuristic.
*   Explain the benefits of using the "Path Compression" heuristic.
*   Understand and apply the concept of amortized analysis in the context of disjoint sets.

---

### 1. Introduction to Disjoint Sets

*   **Definition:** A disjoint-set data structure (also called a union-find data structure) maintains a collection of disjoint (mutually exclusive) sets. Each set has a representative element, which uniquely identifies the set.

*   **Key Concepts:**
    *   **Set:** A collection of distinct elements.
    *   **Disjoint Sets:** Sets that have no elements in common (their intersection is empty).
    *   **Representative:** A designated element that uniquely identifies a set.  If two elements belong to the same set, their `Find` operation will return the same representative.

*   **Applications:**
    *   Kruskal's Algorithm for Minimum Spanning Tree.
    *   Detecting cycles in a graph.
    *   Network connectivity analysis.
    *   Image segmentation.
    *   Equivalence class determination.

### 2. Disjoint Set Operations

The three fundamental operations are:

*   **`MakeSet(x)`:** Creates a new set containing only element `x`. `x` becomes the representative of this new set.  Assumes `x` is not already in any set.
    *   **Input:** An element `x`.
    *   **Output:** Creates a new set containing only `x`.
    *   **Implementation:** Initializes the parent of `x` to itself.

*   **`Find(x)`:** Returns the representative of the set containing element `x`.
    *   **Input:** An element `x`.
    *   **Output:** The representative of the set containing `x`.
    *   **Implementation:** Traverses up the parent pointers until it reaches the root of the tree (the representative), where the parent pointer points to itself.

*   **`Union(x, y)`:** Merges the sets containing elements `x` and `y` into a single set.
    *   **Input:** Elements `x` and `y`.
    *   **Output:** Merges the sets containing `x` and `y`.
    *   **Implementation:** Finds the representatives of `x` and `y` (using `Find`). If the representatives are different, the sets are merged by setting the parent of one representative to the other representative.

### 3. Basic Implementation (Without Optimizations)

*   **Data Structure:**  We can use an array or dictionary to store the parent of each element.  For element `x`, `parent[x]` stores the parent of `x`. If `parent[x] == x`, then `x` is the representative of its set.

*   **Code Example (Python):**

```python
class DisjointSet:
    def __init__(self):
        self.parent = {}  # Dictionary to store the parent of each element

    def MakeSet(self, x):
        if x not in self.parent:
            self.parent[x] = x  # x is its own parent, making it the representative

    def Find(self, x):
        if x not in self.parent:
            return None # Element not in any set
        if self.parent[x] == x:
            return x  # x is the representative
        else:
            return self.Find(self.parent[x]) # Recursive call to find the representative

    def Union(self, x, y):
        root_x = self.Find(x)
        root_y = self.Find(y)

        if root_x is None or root_y is None:
           print("One or both elements are not in the disjoint set.")
           return

        if root_x != root_y:
            self.parent[root_x] = root_y  # Make root_y the parent of root_x
```

*   **Time Complexity (Without Optimizations):**
    *   `MakeSet(x)`: O(1)
    *   `Find(x)`: O(n) in the worst case (where the tree is a skewed list).  `n` is the number of elements.
    *   `Union(x, y)`: O(n) in the worst case (due to the `Find` operations).

### 4. Optimizations: Union by Rank

*   **Concept:** Attaches the shorter tree to the taller tree. The height of the trees is tracked using a *rank*. The rank is an upper bound on the height of the tree.  The `Union` operation attaches the root of the tree with smaller rank to the root of the tree with larger rank. If the ranks are equal, arbitrarily choose one tree as the parent and increment its rank.

*   **Data Structure Enhancement:**  We need an additional array or dictionary, `rank`, to store the rank of each set's representative.

*   **Code Example (Python, with Union by Rank):**

```python
class DisjointSet:
    def __init__(self):
        self.parent = {}
        self.rank = {}  # Dictionary to store the rank of each element

    def MakeSet(self, x):
        if x not in self.parent:
            self.parent[x] = x
            self.rank[x] = 0  # Initial rank is 0

    def Find(self, x):
        if x not in self.parent:
            return None
        if self.parent[x] == x:
            return x
        else:
            return self.Find(self.parent[x])

    def Union(self, x, y):
        root_x = self.Find(x)
        root_y = self.Find(y)

        if root_x is None or root_y is None:
           print("One or both elements are not in the disjoint set.")
           return

        if root_x != root_y:
            if self.rank[root_x] < self.rank[root_y]:
                self.parent[root_x] = root_y
            elif self.rank[root_x] > self.rank[root_y]:
                self.parent[root_y] = root_x
            else:
                self.parent[root_y] = root_x
                self.rank[root_x] += 1  # Increment rank of the new root
```

*   **Time Complexity (With Union by Rank):**
    *   `MakeSet(x)`: O(1)
    *   `Find(x)`: O(log n) in the worst case.
    *   `Union(x, y)`: O(log n) in the worst case (due to the `Find` operations).

### 5. Optimizations: Path Compression

*   **Concept:** During a `Find` operation, after finding the representative, it directly connects all the nodes on the path from the queried element to the representative to the representative. This flattens the tree and reduces the path length for future `Find` operations.

*   **Implementation:** Modify the `Find` operation to update the parent pointers along the path.

*   **Code Example (Python, with Path Compression):**

```python
class DisjointSet:
    def __init__(self):
        self.parent = {}
        self.rank = {}

    def MakeSet(self, x):
        if x not in self.parent:
            self.parent[x] = x
            self.rank[x] = 0

    def Find(self, x):
        if x not in self.parent:
            return None
        if self.parent[x] == x:
            return x
        else:
            # Path compression: Directly connect x to its representative
            self.parent[x] = self.Find(self.parent[x])
            return self.parent[x]  # Return the representative
```

*   **Time Complexity (With Path Compression):**
    *   `MakeSet(x)`: O(1)
    *   `Find(x)`:  Almost O(1) amortized.  Technically O(α(n)) where α(n) is the inverse Ackermann function, which grows extremely slowly.  For all practical inputs, it's effectively constant time.
    *   `Union(x, y)`:  Almost O(1) amortized.  Technically O(α(n)).

### 6. Union by Rank and Path Compression Combined

Using both "Union by Rank" and "Path Compression" provides the best performance.

*   **Time Complexity (With Both Optimizations):**
    *   `MakeSet(x)`: O(1)
    *   `Find(x)`: Almost O(1) amortized (O(α(n))).
    *   `Union(x, y)`: Almost O(1) amortized (O(α(n))).

*   **Example Code (Python, with Union by Rank AND Path Compression):**

```python
class DisjointSet:
    def __init__(self):
        self.parent = {}
        self.rank = {}

    def MakeSet(self, x):
        if x not in self.parent:
            self.parent[x] = x
            self.rank[x] = 0

    def Find(self, x):
        if x not in self.parent:
            return None
        if self.parent[x] == x:
            return x
        else:
            # Path compression
            self.parent[x] = self.Find(self.parent[x])
            return self.parent[x]

    def Union(self, x, y):
        root_x = self.Find(x)
        root_y = self.Find(y)

        if root_x is None or root_y is None:
           print("One or both elements are not in the disjoint set.")
           return

        if root_x != root_y:
            # Union by rank
            if self.rank[root_x] < self.rank[root_y]:
                self.parent[root_x] = root_y
            elif self.rank[root_x] > self.rank[root_y]:
                self.parent[root_y] = root_x
            else:
                self.parent[root_y] = root_x
                self.rank[root_x] += 1
```

### 7. Amortized Analysis

*   **Concept:** Amortized analysis is a technique for analyzing the time complexity of a sequence of operations. It considers the average time per operation over a long sequence of operations, even if some individual operations are expensive.

*   **Relevance to Disjoint Sets:** While a single `Find` operation with path compression can take O(log n) time in some cases, the subsequent `Find` operations become much faster because of the flattened tree structure.  Amortized analysis helps us understand that the average cost of a `Find` operation over a sequence of operations is almost O(1).

*   **Inverse Ackermann Function:** The amortized time complexity of the `Find` and `Union` operations with both Union by Rank and Path Compression is O(α(n)), where α(n) is the inverse Ackermann function.  α(n) grows incredibly slowly; for all practical values of n, α(n) ≤ 5.  Therefore, for practical purposes, these operations can be considered to take constant time on average.

### 8. Examples

**Example 1: Network Connectivity**

Suppose we have a network of computers and we want to determine if two computers are connected.  We can use a disjoint-set data structure to represent the connected components of the network.

1.  **`MakeSet(i)`:**  Create a set for each computer `i`.
2.  **`Union(i, j)`:** If computers `i` and `j` are connected, merge their sets.
3.  **`Find(i)` and `Find(j)`:**  If `Find(i) == Find(j)`, then computers `i` and `j` are connected.

**Example 2: Kruskal's Algorithm**

Kruskal's algorithm finds the minimum spanning tree of a graph.  It uses a disjoint-set data structure to keep track of the connected components of the tree as it is being built.

1.  Sort the edges of the graph in increasing order of weight.
2.  Initialize a disjoint-set data structure, with each vertex in its own set.
3.  Iterate through the sorted edges:
    *   For each edge (u, v), check if `Find(u) != Find(v)`.
        *   If they are in different sets, add the edge (u, v) to the minimum spanning tree and perform `Union(u, v)`.

### 9. Practice Questions

1.  **Implement Disjoint Set Data Structure:** Implement the Disjoint Set data structure with both Union by Rank and Path Compression in your preferred programming language.

2.  **Network Connectivity Problem:** Given a network of `n` computers and a list of connections between them represented as pairs `(u, v)`, determine the number of connected components in the network.

    *   **Input:** `n = 5`, `connections = [[0, 1], [1, 2], [3, 4]]`
    *   **Output:** `2` (because there are two connected components: {0, 1, 2} and {3, 4})

3.  **Find if cycle exists in the graph:** You are given a graph represented as a list of edges where each edge is a pair of nodes. Use disjoint sets to determine if the graph contains a cycle.
    *   **Input:** `edges = [[0, 1], [1, 2], [2, 0]]`
    *   **Output:** `True` (because there's a cycle)

### 10. Answers to Practice Questions

1.  **Implementation:** See example code above for the Python implementation.

2.  **Network Connectivity Solution (Python):**

```python
def count_connected_components(n, connections):
    ds = DisjointSet()
    for i in range(n):
        ds.MakeSet(i)

    for u, v in connections:
        ds.Union(u, v)

    num_connected_components = 0
    for i in range(n):
        if ds.Find(i) == i: #check if it is a root, if root then is a separate components
            num_connected_components += 1

    return num_connected_components

# Example usage
n = 5
connections = [[0, 1], [1, 2], [3, 4]]
result = count_connected_components(n, connections)
print(f"Number of connected components: {result}") # Output: Number of connected components: 2
```

3. **Find if cycle exists in the graph (Python):**

```python
def detect_cycle(edges):
    ds = DisjointSet()
    for u, v in edges:
        if u not in ds.parent:
          ds.MakeSet(u)
        if v not in ds.parent:
          ds.MakeSet(v)

        root_u = ds.Find(u)
        root_v = ds.Find(v)

        if root_u == root_v:
            return True  # Cycle detected
        else:
            ds.Union(u, v)

    return False  # No cycle detected

# Example usage
edges = [[0, 1], [1, 2], [2, 0]]
result = detect_cycle(edges)
print(f"Cycle detected: {result}") # Output: Cycle detected: True
```

### 11. Important Points to Remember

*   Disjoint sets are used to efficiently track equivalence relations.
*   Union by Rank and Path Compression are crucial optimizations for efficient performance.
*   The amortized time complexity of operations with both optimizations is almost constant (O(α(n))).
*   Understanding amortized analysis helps to reason about the average performance of operations.
*   Disjoint sets have numerous applications in graph algorithms, data clustering, and more.
