---
title: "Analysis"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 2: Disjoint Sets "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b558"
status: "completed"
scrapedAt: "2026-05-20T16:45:42.371Z"
---
## DESIGN AND ANALYSIS OF ALGORITHMS: Module 2 - Disjoint Sets: Analysis

These notes cover the analysis of Disjoint Set data structures, focusing on the time complexity of different operations and optimizations.

**Learning Outcomes:**

*   Understand the time complexity of basic Disjoint Set operations (Union and Find).
*   Analyze the impact of optimizations like Union by Rank and Path Compression on performance.
*   Understand and apply the concept of amortized analysis in the context of Disjoint Sets.
*   Be able to choose appropriate data structures and algorithms for problems involving connected components.

**1. Key Concepts and Definitions**

*   **Disjoint Set (Union-Find) Data Structure:** A data structure that maintains a collection of disjoint sets (sets with no common elements).
*   **Set Representation:** Each set is typically represented by a rooted tree.  The root of the tree serves as the *representative* or *canonical element* of the set.
*   **Operations:**
    *   **`MakeSet(x)`:** Creates a new set containing only element `x`.  Initially, `x` is its own parent and root.
    *   **`Find(x)`:** Finds the representative of the set containing element `x`.  It traverses the path from `x` to the root of its tree.
    *   **`Union(x, y)`:** Merges the sets containing elements `x` and `y`.  This involves finding the representatives of `x` and `y` and making one representative the parent of the other.

**2. Time Complexity of Basic Operations (Without Optimizations)**

*   **`MakeSet(x)`:**  O(1) - Constant time to create a node and set its parent to itself.
*   **`Find(x)`:** O(n) in the worst case - The tree representing a set can degenerate into a linked list. In this scenario, finding the root may require traversing all `n` elements.
*   **`Union(x, y)`:** O(n) in the worst case - This includes the time for two `Find` operations (O(n) each in the worst case) and a constant time link operation (O(1)).  Thus, `Union` is dominated by the `Find` operations.

**3. Optimizations for Disjoint Sets**

*   **3.1 Union by Rank:**
    *   **Concept:**  When merging two sets, the tree with smaller *rank* is attached to the tree with larger *rank*.  The rank approximates the height of the tree.
    *   **Rank:** Each node has a rank, which is initially 0. When merging two trees of the same rank, the rank of the new root is incremented by 1.  If the ranks are different, the tree with the smaller rank becomes a subtree of the tree with the larger rank, and the rank of the larger tree remains unchanged.
    *   **Effect:** Reduces the height of the trees, improving the performance of the `Find` operation.
    *   **Implementation:** Maintain a `rank` array (or other data structure) to store the rank of each node.
    *   **Time Complexity (with Union by Rank, but without Path Compression):**
        *   `MakeSet(x)`: O(1)
        *   `Find(x)`: O(log n)
        *   `Union(x, y)`: O(log n) (due to the two `Find` operations)

*   **3.2 Path Compression:**
    *   **Concept:** During a `Find(x)` operation, each node encountered on the path from `x` to the root is directly attached to the root.
    *   **Effect:** Flattens the tree structure, dramatically improving the performance of subsequent `Find` operations.
    *   **Implementation:**  Recursively update the parent of each node on the path to the root during the `Find` operation.
    *   **Time Complexity (with Path Compression, but without Union by Rank):**
        *   While individually `Find` operations can still take O(n) in the worst case (though this becomes increasingly rare with repeated Path Compression), the amortized cost is much better (see below).  The time complexity is difficult to express precisely without the use of the Ackermann inverse function.

*   **3.3 Union by Rank and Path Compression (Combined):**
    *   **Most Efficient Combination:** Combining both Union by Rank and Path Compression yields the best performance.
    *   **Time Complexity:**  Almost linear. The amortized time complexity for a sequence of `m` `MakeSet`, `Union`, and `Find` operations on `n` elements is O(m α(n)), where α(n) is the inverse Ackermann function.  The inverse Ackermann function grows extremely slowly; for all practical values of `n`, α(n) ≤ 4. Therefore, the amortized time complexity is essentially O(m), meaning each operation takes approximately constant time on average.

**4. Amortized Analysis**

*   **Concept:**  Amortized analysis calculates the average time required for a sequence of operations, rather than focusing on the worst-case time of a single operation.  It's used when the cost of an operation varies significantly depending on its context.
*   **Disjoint Sets:**  While some `Find` operations might take longer due to deeper trees, Path Compression dramatically reduces the depth of the tree for subsequent operations.  Amortized analysis accounts for this "payback" effect, resulting in an almost constant time per operation on average.
*   **Practical Implication:** For large-scale applications, the slight overhead of maintaining rank and performing path compression is negligible compared to the massive improvement in performance achieved through these optimizations.

**5. Implementation Examples (Python)**

```python
class DisjointSet:
    def __init__(self, n):
        self.parent = list(range(n))  # Parent of each element (initially self)
        self.rank = [0] * n         # Rank of each element (initially 0)

    def find(self, x):
        """Finds the representative of the set containing element x with Path Compression."""
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # Path Compression
        return self.parent[x]

    def union(self, x, y):
        """Merges the sets containing elements x and y with Union by Rank."""
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

# Example usage:
n = 5  # Number of elements
ds = DisjointSet(n)

ds.union(0, 1)
ds.union(2, 3)
ds.union(1, 2)

print(f"Representative of 0: {ds.find(0)}")  # Output: 0
print(f"Representative of 1: {ds.find(1)}")  # Output: 0
print(f"Representative of 2: {ds.find(2)}")  # Output: 0
print(f"Representative of 3: {ds.find(3)}")  # Output: 0
print(f"Representative of 4: {ds.find(4)}")  # Output: 4
```

**6. Applications of Disjoint Sets**

*   **Connected Components:** Finding connected components in a graph.
*   **Kruskal's Algorithm:** Finding the Minimum Spanning Tree (MST) of a graph.
*   **Image Segmentation:** Grouping similar pixels in an image.
*   **Percolation:** Modeling the flow of fluids through porous materials.
*   **Equivalence Relations:** Determining if two elements belong to the same equivalence class.

**7. Practice Questions/Exercises with Answers**

1.  **Question:** Suppose you have a graph with 10 nodes labeled 0 through 9. Initially, each node is in its own disjoint set.  Perform the following sequence of operations using the `DisjointSet` class implemented above:
    *   `union(0, 1)`
    *   `union(2, 3)`
    *   `union(4, 5)`
    *   `union(0, 2)`
    *   `union(6, 7)`
    *   `union(8, 9)`

    What are the representatives of each node after these operations?

    **Answer:**
    ```
    Representative of 0: 0
    Representative of 1: 0
    Representative of 2: 0
    Representative of 3: 0
    Representative of 4: 4
    Representative of 5: 4
    Representative of 6: 6
    Representative of 7: 6
    Representative of 8: 8
    Representative of 9: 8
    ```

    The sets are: {0, 1, 2, 3}, {4, 5}, {6, 7}, {8, 9}

2.  **Question:**  Explain in your own words why path compression and union by rank drastically improve the performance of the Disjoint Set data structure.

    **Answer:**  Path compression flattens the trees representing the sets.  By attaching each node on a search path directly to the root, subsequent `Find` operations on those nodes (or their descendants) become much faster. Union by rank prevents the creation of unbalanced trees by attaching the shorter tree to the taller tree. This helps to keep the tree heights small, which also speeds up `Find` operations.  Together, these optimizations ensure that the height of the trees grows very slowly, leading to an almost linear amortized time complexity.

3.  **Question:**  Consider a scenario where you have a dynamically changing social network.  New friendships (connections) are formed between users over time.  How can you use the Disjoint Set data structure to efficiently determine the number of connected components (groups of friends who are all connected, directly or indirectly) in the network at any given time?

    **Answer:**
    *   Each user in the social network is represented by a node in the Disjoint Set.
    *   Initially, each user is in their own set (`MakeSet` for each user).
    *   When a new friendship is formed between user `A` and user `B`, perform a `Union(A, B)` operation.  This merges the sets containing `A` and `B`, representing that they are now part of the same connected component.
    *   To determine the number of connected components, iterate through all the users and count the number of distinct representatives (roots) in the Disjoint Set.  Each distinct representative corresponds to a different connected component.  You can use a `set` data structure in Python to efficiently count the distinct representatives.

**8. Important Points to Remember**

*   Union by Rank and Path Compression are crucial optimizations for achieving near-linear time complexity in Disjoint Set operations.
*   Amortized analysis is essential for understanding the true performance benefits of these optimizations.  The worst-case time for a single `Find` operation might still be O(n), but the *average* cost over a sequence of operations is much lower.
*   Disjoint sets are a powerful tool for solving problems involving connected components, equivalence relations, and grouping objects based on connectivity or similarity.
*   Understand the time complexity implications of using Disjoint Sets *without* optimizations. While conceptually simpler, performance degrades quickly for large datasets.  Always strive to implement Union by Rank and Path Compression.
