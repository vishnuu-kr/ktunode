---
title: "Analysis of union by rank with path compression"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 2: Disjoint Sets "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b54e"
status: "completed"
scrapedAt: "2026-05-20T16:45:35.305Z"
---
## Design and Analysis of Algorithms: Module 2 - Disjoint Sets: Analysis of Union by Rank with Path Compression

These notes cover the analysis of the disjoint set data structure with the techniques of union by rank and path compression.  This is a crucial optimization for achieving near-constant time complexity for disjoint set operations.

**Learning Outcomes:**

*   Understand the concepts of Union by Rank and Path Compression.
*   Explain how Union by Rank and Path Compression improve the efficiency of Disjoint Set operations.
*   Analyze the time complexity of Disjoint Set operations when using both Union by Rank and Path Compression.
*   Implement Disjoint Set data structure with Union by Rank and Path Compression.
*   Solve problems using the Disjoint Set data structure with Union by Rank and Path Compression.

**1. Key Concepts and Definitions**

*   **Disjoint Sets (Union-Find Data Structure):** A data structure that maintains a collection of disjoint sets.  Each set has a representative element, and the data structure supports two primary operations:
    *   `Find(x)`: Determines the representative of the set containing element `x`.
    *   `Union(x, y)`: Merges the sets containing elements `x` and `y`.
*   **Representative:** A unique element that identifies a particular set.  Typically, if `Find(x) == Find(y)`, then `x` and `y` belong to the same set.
*   **Union by Rank:**  A technique to optimize the `Union` operation. It involves storing the *rank* of each tree (representing a set). Rank approximates the height of the tree. When performing a `Union` operation, the tree with the smaller rank is attached to the tree with the larger rank. If the ranks are equal, the rank of the resulting tree is incremented by one.  This helps keep the trees relatively flat, improving the efficiency of the `Find` operation.
*   **Path Compression:** A technique to optimize the `Find` operation. While finding the representative of an element `x`, it flattens the tree structure by making each node on the path from `x` to the root (representative) point directly to the root. This significantly reduces the path length for future `Find` operations on elements in that path.

**2. Union by Rank**

*   **Motivation:** Prevents the formation of skewed trees, which would lead to O(n) time complexity for `Find` in the worst case.
*   **Implementation:**
    *   Maintain an array `rank[x]` for each element `x`, initially set to 0.
    *   During `Union(x, y)`, find the representatives `rootX` and `rootY` of `x` and `y` respectively.
    *   If `rootX != rootY`:
        *   If `rank[rootX] < rank[rootY]`, then `parent[rootX] = rootY`.  (Attach tree with smaller rank to the tree with larger rank)
        *   Else if `rank[rootX] > rank[rootY]`, then `parent[rootY] = rootX`. (Attach tree with smaller rank to the tree with larger rank)
        *   Else (`rank[rootX] == rank[rootY]`), then `parent[rootY] = rootX` and `rank[rootX]++`. (Attach one to the other and increment the rank)
*   **Example:**
    *   Initially:  `rank = [0, 0, 0, 0, 0]`, `parent = [0, 1, 2, 3, 4]`
    *   `Union(1, 2)`:  `rank = [0, 0, 0, 0, 0]`, `parent = [0, 2, 2, 3, 4]` (Assuming `Find(1)` returns 1, `Find(2)` returns 2, and we chose to attach 1 to 2 arbitrarily. Rank doesn't change since equal ranks)
    *   `Union(3, 4)`: `rank = [0, 0, 0, 0, 0]`, `parent = [0, 2, 3, 3, 3]` (Same reasoning as above.)
    *   `Union(2, 3)`: Assuming we've now implemented Find. `Find(2)` return 2, `Find(3)` return 3. Since rank[2] and rank[3] are both 0, we can arbitrarily choose to attach 3 to 2.  `rank = [0, 1, 0, 0, 0]`, `parent = [0, 2, 2, 2, 3]` Note that rank[2] increments to 1.
*   **Benefits:** Keeps tree height small, leading to faster `Find` operations.

**3. Path Compression**

*   **Motivation:** Further optimizes `Find` by flattening the tree structure, reducing the path length to the root.
*   **Implementation:**
    *   The `Find(x)` operation recursively finds the root `rootX` of `x`.
    *   As it unwinds the recursion, it sets the `parent` of each node on the path from `x` to `rootX` directly to `rootX`.
    *   This effectively makes all nodes on the path children of the root.
*   **Example:**
    *   Let's say `parent = [0, 1, 2, 3, 4, 2]` and `rank = [0, 0, 1, 0, 0]`. This means that nodes 0,1,3,4 are their own parents, 2 is the parent of 5, and 2 is also its own parent. `Find(5)` returns the root of node 5.
    *   Suppose `Find(5)` is called.
        1.  The algorithm first finds the parent of 5, which is 2.
        2.  The algorithm recursively calls `Find(2)`. The parent of 2 is 2. Therefore, `Find(2)` returns 2. 2 is the root.
        3.  Now, coming back to the call to `Find(5)`, it sets the parent of 5 directly to 2.
        4.  Result: `parent = [0, 1, 2, 3, 4, 2]` (parent[5] changed to 2. rank unchanged because rank changes during union, not find)
        *Consider this more complex example:*
        Initial state:
        `parent = [0, 1, 2, 3, 2, 0]` (0 is parent of 5, 2 is parent of 4, 2 is parent of 3, 2 is parent of 0, 1 and 2 are their own parent).
        `rank = [1, 0, 2, 0, 0, 0]`
        Calling `Find(4)`:
        1. Find(4): parent[4] = 2. Recurse Find(2).
        2. Find(2): parent[2] = 2. 2 is the root.
        3. Back to Find(4): set parent[4] = 2.
        4. Result: `parent = [0, 1, 2, 3, 2, 0]` (parent[4] changed to 2). Find(4) will return 2.
        Now, calling `Find(3)`
        1. Find(3): parent[3] = 2. Recurse Find(2)
        2. Find(2): parent[2] = 2. 2 is the root.
        3. Back to Find(3): Set parent[3] = 2
        4. Result: `parent = [0, 1, 2, 2, 2, 0]` (parent[3] changed to 2).  Find(3) will return 2.
        Now, calling `Find(0)`:
        1. Find(0): parent[0] = 5. Recurse Find(5)
        2. Find(5): parent[5] = 0. Recurse Find(0) - this is a bug because parent[0] shouldn't be 5
        *A corrected initial state example:*
        Initial state:
        `parent = [0, 1, 2, 2, 2, 0]` (0 is parent of 5, 2 is parent of 4, 2 is parent of 3, 2 is its own parent, 1 is its own parent and 0 is its own parent)
        `rank = [0, 0, 1, 0, 0, 0]`

        Calling `Find(3)`:
        1. Find(3): parent[3] = 2.  Recurse Find(2).
        2. Find(2): parent[2] = 2.  Return 2.
        3. Back to Find(3): Set parent[3] = 2. Return 2.

        `parent` becomes `[0, 1, 2, 2, 2, 0]`.

        Now calling `Find(5)`:
        1. Find(5): parent[5] = 0. Recurse Find(0).
        2. Find(0): parent[0] = 0. Return 0.
        3. Back to Find(5): Set parent[5] = 0. Return 0.
        `parent` becomes `[0, 1, 2, 2, 2, 0]`

        Finally, calling `Find(4)`:
        1. Find(4): parent[4] = 2. Recurse Find(2).
        2. Find(2): parent[2] = 2. Return 2.
        3. Back to Find(4): Set parent[4] = 2. Return 2.

        `parent` becomes `[0, 1, 2, 2, 2, 0]`. The call to find returned 2, and there were no changes to the parent array.

        Now, calling `Find(4)` after running the `find` function for 3 and 5 does nothing. `parent` array does not change because it is already pointing to the correct parent.
*   **Benefits:** Dramatically reduces the average path length in the future.

**4. Combined Analysis: Union by Rank with Path Compression**

*   **Amortized Time Complexity:** When using both Union by Rank and Path Compression, the *amortized* time complexity for both `Find` and `Union` operations is extremely close to constant time, specifically *O(α(n))* where α(n) is the inverse Ackermann function.
*   **Inverse Ackermann Function:**  The inverse Ackermann function, α(n), grows extremely slowly. For all practical values of `n` (number of elements in the Disjoint Set), α(n) is less than or equal to 4.  Therefore, for practical purposes, we can consider the operations to be *O(1)* (constant time) amortized.
*   **Amortized Analysis Explanation:** Amortized analysis is used because the cost of individual operations can vary significantly. While some `Find` operations might take longer due to longer paths, the path compression performed during those operations significantly reduces the cost of subsequent `Find` operations. Amortized analysis averages the cost of operations over a sequence of operations.

**5. Implementation (Python)**

```python
class DisjointSet:
    def __init__(self, n):
        self.parent = list(range(n))  # Initialize each element as its own parent
        self.rank = [0] * n  # Initialize rank of each tree to 0

    def find(self, x):
        if self.parent[x] != x:
            # Path Compression: Make x's parent the root directly
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        rootX = self.find(x)
        rootY = self.find(y)

        if rootX != rootY:
            if self.rank[rootX] < self.rank[rootY]:
                self.parent[rootX] = rootY
            elif self.rank[rootX] > self.rank[rootY]:
                self.parent[rootY] = rootX
            else:
                self.parent[rootY] = rootX
                self.rank[rootX] += 1

# Example usage
n = 5  # Number of elements
ds = DisjointSet(n)

ds.union(0, 1)
ds.union(2, 3)
ds.union(1, 3)

print(ds.find(0))  # Output: 3
print(ds.find(1))  # Output: 3
print(ds.find(2))  # Output: 3
print(ds.find(4))  # Output: 4
```

**6. Examples & Applications**

*   **Kruskal's Algorithm (Minimum Spanning Tree):**  Used to efficiently determine whether adding an edge to the MST would create a cycle.  The `Find` operation is used to check if the two vertices of the edge belong to the same set.  The `Union` operation is used to merge the sets if the edge does not create a cycle.
*   **Connected Components in a Graph:**  The disjoint set data structure can be used to determine the number of connected components in a graph.  Initially, each vertex is in its own set.  Then, for each edge, the `Union` operation is performed on the two vertices.  The number of disjoint sets remaining at the end represents the number of connected components.
*   **Image Segmentation:** Grouping pixels into regions based on similarity.
*   **Social Network Analysis:** Detecting communities.

**7. Practice Questions/Exercises**

1.  **Problem:**  Given a set of cities and roads connecting them, determine if it's possible to travel between any two cities.  (Hint: Use Disjoint Set to check for a single connected component.)

    **Solution:**
    ```python
    def can_travel(n, roads):
        """
        Checks if it's possible to travel between any two cities given 'n' cities and 'roads'.

        Args:
            n: The number of cities (numbered 0 to n-1).
            roads: A list of tuples, where each tuple (u, v) represents a road between city u and city v.

        Returns:
            True if it's possible to travel between any two cities, False otherwise.
        """
        ds = DisjointSet(n)
        for u, v in roads:
            ds.union(u, v)

        # Check if all cities belong to the same set
        num_components = 0
        for i in range(n):
            if ds.parent[i] == i:
                num_components += 1
        root = ds.find(0)
        for i in range(1, n):
          if ds.find(i) != root:
            return False
        return True


    # Example Usage
    n = 5
    roads = [(0, 1), (1, 2), (3, 4)]
    print(f"Can travel between any two cities? {can_travel(n, roads)}")  # Output: False

    n = 5
    roads = [(0, 1), (1, 2), (0, 2), (3, 4)]
    print(f"Can travel between any two cities? {can_travel(n, roads)}")  # Output: False

    n = 5
    roads = [(0, 1), (1, 2), (0, 2), (2, 3), (3, 4)]
    print(f"Can travel between any two cities? {can_travel(n, roads)}")  # Output: True
    ```

2.  **Problem:** Implement the `union` function such that it always attaches the shorter tree to the taller tree.  How would you modify the `union` function if ranks were not available? (Hint: You would have to compute height. How would this affect performance?)

    **Solution:**

    ```python
    class DisjointSetModified:
        def __init__(self, n):
            self.parent = list(range(n))
            self.rank = [0] * n

        def find(self, x):
            if self.parent[x] != x:
                self.parent[x] = self.find(self.parent[x])
            return self.parent[x]

        def union(self, x, y):
            rootX = self.find(x)
            rootY = self.find(y)

            if rootX != rootY:
                if self.rank[rootX] < self.rank[rootY]:
                    self.parent[rootX] = rootY
                elif self.rank[rootX] > self.rank[rootY]:
                    self.parent[rootY] = rootX
                else:
                    self.parent[rootY] = rootX
                    self.rank[rootX] += 1

        def union_without_rank(self, x, y):
            rootX = self.find(x)
            rootY = self.find(y)

            if rootX != rootY:
                height_x = self.tree_height(rootX)
                height_y = self.tree_height(rootY)

                if height_x < height_y:
                    self.parent[rootX] = rootY
                elif height_x > height_y:
                    self.parent[rootY] = rootX
                else:
                    self.parent[rootY] = rootX  # Attach arbitrarily if heights are equal

        def tree_height(self, node):
            """Calculates the height of a tree rooted at 'node'."""
            height = 0
            curr = node
            while curr != self.parent[curr]:  # Traverse to the root
                height += 1
                curr = self.parent[curr]
            return height
    ```

    *   **Performance Impact:**  If ranks are not available, we would have to compute the height of each tree during the `Union` operation. Computing the height would take O(n) time in the worst case (where `n` is the number of nodes in the tree), negating the benefits of path compression. Using ranks is much more efficient because the rank is already stored and can be accessed in O(1) time.

3.  **Problem:**  Given `n` items and a list of pairs indicating which items are connected, find the number of connected components.

    **Solution:**

    ```python
    def num_connected_components(n, connections):
        """
        Finds the number of connected components.

        Args:
            n: The number of items.
            connections: A list of pairs, where each pair (u, v) indicates that items u and v are connected.

        Returns:
            The number of connected components.
        """
        ds = DisjointSet(n)
        for u, v in connections:
            ds.union(u, v)

        count = 0
        for i in range(n):
            if ds.find(i) == i:
                count += 1

        return count

    # Example
    n = 5
    connections = [(0, 1), (1, 2), (3, 4)]
    print(f"Number of connected components: {num_connected_components(n, connections)}")  # Output: 2
    ```

**8. Important Points to Remember**

*   Union by Rank and Path Compression are *crucial* optimizations for the Disjoint Set data structure.
*   The *amortized* time complexity with both optimizations is *O(α(n))*, which is essentially constant for all practical input sizes.
*   Understanding the *amortized* analysis is essential for appreciating the efficiency of this data structure.
*   Be familiar with the applications of Disjoint Sets, especially in graph algorithms like Kruskal's algorithm.
*   Pay careful attention to the *initialization* of the `parent` and `rank` arrays.
