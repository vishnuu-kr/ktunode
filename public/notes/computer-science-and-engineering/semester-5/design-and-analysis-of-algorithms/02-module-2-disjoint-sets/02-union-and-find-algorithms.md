---
title: "Union and find algorithms"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 2: Disjoint Sets "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b54d"
status: "completed"
scrapedAt: "2026-05-20T16:45:34.598Z"
---
# DESIGN AND ANALYSIS OF ALGORITHMS - Module 2: Disjoint Sets - Union and Find Algorithms

## Learning Outcomes:

*   Understand the concept of disjoint sets and their applications.
*   Explain the purpose and functionality of the Union and Find operations.
*   Implement the Union and Find algorithms using different approaches (Naive, Union by Rank, Path Compression).
*   Analyze the time complexity of different Union and Find implementations.
*   Apply Disjoint Set data structures to solve real-world problems.

## 1. Introduction to Disjoint Sets

*   **Definition:** A disjoint set data structure (also known as a union-find data structure) maintains a collection of disjoint (non-overlapping) sets. Each set has a representative element, which identifies the set.
*   **Purpose:** Efficiently determine which set an element belongs to (Find) and merge two sets into a single set (Union).
*   **Applications:**
    *   **Kruskal's Minimum Spanning Tree Algorithm:** Determining if adding an edge creates a cycle.
    *   **Image Segmentation:** Grouping pixels based on color similarity.
    *   **Network Connectivity:** Checking if two computers are in the same network.
    *   **Maze Generation:** Creating random mazes.
    *   **Equivalence Problems:** Determining if two items are equivalent based on a series of relations.

## 2. Key Concepts and Definitions

*   **Set:** A collection of distinct elements.
*   **Disjoint Sets:** Sets with no elements in common (their intersection is empty).
*   **Union:**  The operation that merges two sets into a single set.
*   **Find:**  The operation that determines which set an element belongs to (returns the representative element of the set).
*   **Representative:** A specific element chosen to represent the entire set.  The representative uniquely identifies the set.  Any element in the set can potentially be the representative, but the algorithm must consistently return the same representative for the same set.
*   **Forest Representation:** Disjoint sets are often represented as a forest of trees, where each tree represents a set.  The root of each tree is the representative of the set.
*   **Rank:**  A heuristic used in the Union by Rank optimization.  It approximates the height of the tree.
*   **Path Compression:** A heuristic used in the Find operation to flatten the tree structure, making future Find operations faster.

## 3. Union and Find Operations - Basic Implementation (Naive Approach)

*   **Data Structure:** We can represent the disjoint sets using an array (or a map) where the index represents an element, and the value at that index represents the parent of that element in the forest.  If the value at an index is equal to the index itself, that element is the root (representative) of its set.

    ```python
    parent = [i for i in range(n)] # Initialize each element as its own parent

    def find_naive(x):
        """
        Finds the representative of the set containing element x (Naive approach).
        Time Complexity: O(n) in the worst case (when the tree is a linked list).
        """
        while x != parent[x]:
            x = parent[x]
        return x

    def union_naive(x, y):
        """
        Merges the sets containing elements x and y (Naive approach).
        Time Complexity: O(n) in the worst case (due to Find operation).
        """
        root_x = find_naive(x)
        root_y = find_naive(y)
        if root_x != root_y:
            parent[root_x] = root_y # Attach the root of x to the root of y
    ```

*   **Explanation:**
    *   **Initialization:**  Each element initially forms its own set, so the `parent` array is initialized such that `parent[i] = i` for all elements.
    *   **`find_naive(x)`:**  Traverses up the parent pointers until it reaches the root of the tree (where the parent is itself).
    *   **`union_naive(x, y)`:**  Finds the representatives (roots) of the sets containing `x` and `y`. If the representatives are different (meaning `x` and `y` are in different sets), it attaches the root of one tree to the root of the other tree. This effectively merges the two sets.

*   **Time Complexity:**
    *   `find_naive(x)`: O(n) in the worst case (when the tree is a linked list).
    *   `union_naive(x, y)`: O(n) in the worst case (due to the `find_naive` calls).

## 4. Union by Rank

*   **Purpose:** To prevent the trees from becoming too tall (linked lists), which would degrade the performance of the `find` operation.
*   **Method:** When merging two sets, attach the tree with the smaller rank to the tree with the larger rank.  If the ranks are equal, choose either tree as the parent and increment its rank.
*   **Rank:** Represents an upper bound on the height of the tree.
*   **Implementation:**

    ```python
    parent = [i for i in range(n)]
    rank = [0] * n  # Initialize rank of each element to 0

    def find_rank(x):
        """
        Finds the representative of the set containing element x (with Path Compression).
        Time Complexity: O(α(n)) - Inverse Ackermann function, which is almost constant.
        """
        if x != parent[x]:
            parent[x] = find_rank(parent[x])  # Path Compression
        return parent[x]


    def union_rank(x, y):
        """
        Merges the sets containing elements x and y (using Union by Rank).
        Time Complexity: O(α(n)) - Inverse Ackermann function, which is almost constant.
        """
        root_x = find_rank(x)
        root_y = find_rank(y)

        if root_x != root_y:
            if rank[root_x] < rank[root_y]:
                parent[root_x] = root_y
            elif rank[root_x] > rank[root_y]:
                parent[root_y] = root_x
            else:
                parent[root_y] = root_x  # Arbitrarily attach root_y to root_x
                rank[root_x] += 1  # Increment the rank of the new root
    ```

*   **Explanation:**
    *   **Initialization:**  In addition to the `parent` array, we now have a `rank` array initialized to 0 for each element.
    *   **`union_rank(x, y)`:** Finds the representatives of the sets containing `x` and `y`. Compares the ranks of the representative elements. Attaches the tree with the smaller rank to the tree with the larger rank. If the ranks are equal, arbitrarily attaches one tree to the other and increments the rank of the new root.

*   **Time Complexity:**
    *   `find_rank(x)` (without path compression): O(log n)
    *   `union_rank(x, y)`: O(log n) (due to the `find` operations)

## 5. Path Compression

*   **Purpose:** To further optimize the `find` operation by flattening the tree structure.
*   **Method:** While finding the representative of an element, directly connect that element and all its ancestors to the root.  This reduces the height of the tree.
*   **Implementation:**  (See `find_rank` function in the Union by Rank section for an example with Path Compression).
*   **Explanation:**  The `find_rank` function recursively finds the root. As the recursion unwinds, it sets the parent of each visited node to the root.

## 6. Union by Rank with Path Compression

*   **Combination:**  Using both Union by Rank and Path Compression provides the best performance for disjoint set operations.  It leads to an almost constant time complexity for both `union` and `find` operations on average.
*   **Amortized Time Complexity:** With both Union by Rank and Path Compression, the amortized time complexity for both `find` and `union` operations is O(α(n)), where α(n) is the inverse Ackermann function. The inverse Ackermann function grows extremely slowly, so for all practical purposes, it can be considered almost constant (α(n) ≤ 5 for any n less than the estimated number of atoms in the observable universe).
*   **Example:** (The code for `find_rank` and `union_rank` in the Union by Rank section already includes Path Compression).

## 7. Comparing Implementations

| Implementation       | Find Time Complexity (Worst Case) | Union Time Complexity (Worst Case) |
| --------------------- | ----------------------------------- | ----------------------------------- |
| Naive                | O(n)                               | O(n)                               |
| Union by Rank        | O(log n)                            | O(log n)                            |
| Path Compression     | O(log n)                            | O(n)                               |
| Union by Rank + Path Compression | O(α(n)) - Amortized             | O(α(n)) - Amortized             |

## 8. Applications and Examples

### Example 1: Kruskal's Algorithm for Minimum Spanning Tree

Kruskal's algorithm finds the minimum spanning tree of a graph. It sorts the edges by weight and iterates through them, adding an edge to the MST if it doesn't create a cycle. Disjoint sets are used to efficiently check for cycles.

```python
def kruskal(graph):
    """
    Finds the Minimum Spanning Tree (MST) of a graph using Kruskal's algorithm.
    Uses disjoint sets to detect cycles.
    """
    n = len(graph) #Number of nodes
    edges = []
    for u in range(n):
        for v, weight in graph[u]:
            edges.append((u, v, weight))

    edges.sort(key=lambda x: x[2])  # Sort edges by weight

    parent = [i for i in range(n)]
    rank = [0] * n

    def find(x):
        if x != parent[x]:
            parent[x] = find(parent[x])
        return parent[x]

    def union(x, y):
        root_x = find(x)
        root_y = find(y)
        if root_x != root_y:
            if rank[root_x] < rank[root_y]:
                parent[root_x] = root_y
            elif rank[root_x] > rank[root_y]:
                parent[root_y] = root_x
            else:
                parent[root_y] = root_x
                rank[root_x] += 1

    mst = []
    total_weight = 0
    for u, v, weight in edges:
        if find(u) != find(v):
            union(u, v)
            mst.append((u, v, weight))
            total_weight += weight

    return mst, total_weight

# Example graph represented as an adjacency list: (node, weight) pairs
graph = {
    0: [(1, 10), (2, 6), (3, 5)],
    1: [(0, 10), (3, 15)],
    2: [(0, 6), (3, 4)],
    3: [(0, 5), (1, 15), (2, 4)]
}

mst, total_weight = kruskal(graph)
print("Minimum Spanning Tree:", mst)
print("Total weight of MST:", total_weight)
```

### Example 2: Network Connectivity

Given a network of computers, where connections between computers are added dynamically, determine if two computers are connected.

```python
def network_connectivity(n, connections):
    """
    Determines if two computers in a network are connected.
    n: Number of computers in the network.
    connections: A list of tuples representing connections between computers (u, v).
    """
    parent = [i for i in range(n)]
    rank = [0] * n

    def find(x):
        if x != parent[x]:
            parent[x] = find(parent[x])
        return parent[x]

    def union(x, y):
        root_x = find(x)
        root_y = find(y)
        if root_x != root_y:
            if rank[root_x] < rank[root_y]:
                parent[root_x] = root_y
            elif rank[root_x] > rank[root_y]:
                parent[root_y] = root_x
            else:
                parent[root_y] = root_x
                rank[root_x] += 1
            return True  # Indicate a new connection was made
        return False # Indicate that they are already connected

    num_connected_components = n #Assume that all are disconnected in the beginning

    for u, v in connections:
        if union(u, v):
            num_connected_components -= 1

    return num_connected_components # return number of connected component

# Example usage
n = 5  # Number of computers
connections = [(0, 1), (1, 2), (3, 4)]

num_components = network_connectivity(n, connections)
print(f"Number of connected components after the connections: {num_components}")

```

## 9. Practice Questions and Exercises

1.  **Implement Union and Find with Union by Rank and Path Compression.** (See the code provided above.)

2.  **Given a set of equivalence relations, determine the number of equivalence classes.**  For example, if we have the following relations:
    *   a ~ b
    *   b ~ c
    *   d ~ e
    Then, the equivalence classes are {a, b, c} and {d, e}, so there are 2 equivalence classes.
    (Hint: Use Union-Find to group equivalent elements into sets.)

3.  **Implement Kruskal's algorithm using your Union-Find implementation.** (See the code provided above.)

4.  **Consider a scenario where you need to maintain connectivity information for a social network.  How would you use disjoint sets to efficiently determine if two users are connected (i.e., have a path between them)?** (Answer:  Each user would be an element in a disjoint set.  Friendships (connections) would be represented by Union operations.  The Find operation would determine if two users belong to the same set, indicating a path exists between them.)

5.  **Why is Union by Rank preferred over simply attaching any tree to any other tree during the Union operation?** (Answer: Union by Rank helps to prevent the trees from becoming tall and skewed, which would degrade the performance of the Find operation. It aims to keep the trees relatively balanced.)

## 10. Important Points to Remember

*   Disjoint sets are efficient for tracking connectivity and equivalence relations.
*   Union by Rank and Path Compression are crucial optimizations for achieving near-constant time complexity.
*   The amortized time complexity of O(α(n)) is practically constant for all realistic input sizes.
*   Understanding the applications of disjoint sets can help you solve a variety of problems in graph algorithms, data structures, and other areas of computer science.
