---
title: "Fibonacci Heaps"
subject: "ADVANCED DATA STRUCTURES"
module: "Module 2: Advanced Tree Data Structures  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b368"
status: "completed"
scrapedAt: "2026-05-20T16:10:08.451Z"
---
## ADVANCED DATA STRUCTURES: Module 2 - Advanced Tree Data Structures: Fibonacci Heaps

**Learning Outcomes:**

*   Understand the structure and properties of Fibonacci heaps.
*   Analyze the time complexity of various operations on Fibonacci heaps (insert, minimum, extract-min, union, decrease-key, delete).
*   Implement the core operations of a Fibonacci heap.
*   Compare and contrast Fibonacci heaps with other priority queue implementations like binary heaps and binomial heaps.
*   Recognize the applications of Fibonacci heaps in algorithms like Dijkstra's and Prim's algorithms.

**1. Introduction to Fibonacci Heaps**

*   **What is a Fibonacci Heap?** A Fibonacci heap is a data structure that implements the priority queue ADT. It is a collection of min-heap ordered trees. Unlike binomial heaps, Fibonacci heaps have a more relaxed structure, allowing for better amortized time complexity for certain operations.

*   **Key Characteristics:**
    *   **Collection of Trees:** A Fibonacci heap is not a single tree but a collection of min-heap ordered trees.  Each tree satisfies the min-heap property (the key of a node is greater than or equal to the key of its parent).
    *   **Relaxed Structure:**  The structure is more flexible compared to binomial heaps. This allows for delayed consolidation of trees, improving performance for certain operations.
    *   **Potential Function:**  The amortized analysis relies heavily on a potential function that considers the number of trees and the number of marked nodes.
    *   **Marked Nodes:** Nodes can be marked to track loss of children since the node was last made a child of another node. This is crucial for the `decrease-key` operation.

*   **Amortized Analysis:** Fibonacci heaps are primarily analyzed using amortized analysis, which considers the average cost of a sequence of operations, not just the worst-case cost of a single operation.  This analysis provides a more accurate representation of their performance in many practical scenarios.

**2. Structure and Properties**

*   **Min-Heap Property:**  For every node `x` (except the root), `key[parent[x]] <= key[x]`.

*   **Root List:** The roots of all trees in the Fibonacci heap are linked using a circular, doubly-linked list called the *root list*.

*   **Node Attributes:** Each node `x` in the Fibonacci heap has the following attributes:
    *   `key[x]`: The key value associated with the node.
    *   `parent[x]`: Pointer to the parent node (NULL if `x` is a root).
    *   `child[x]`: Pointer to any one of the children of `x`.
    *   `left[x]`: Pointer to the left sibling of `x` in the circular, doubly-linked list.
    *   `right[x]`: Pointer to the right sibling of `x` in the circular, doubly-linked list.
    *   `degree[x]`: The number of children of node `x`.
    *   `mark[x]`: A boolean value indicating whether node `x` has lost a child since the last time `x` was made the child of another node.  `mark[x] = TRUE` if `x` has lost a child; otherwise, `mark[x] = FALSE`.

*   **Heap Attribute:** The Fibonacci heap itself has the following attribute:
    *   `min[H]`: A pointer to the node in the root list with the minimum key.
    *   `n[H]`: The number of nodes currently in the heap `H`.

*   **Rank (Degree):** The *rank* (or degree) of a node is the number of children it has. The maximum degree of any node in a Fibonacci heap with *n* nodes is bounded by O(log n). More precisely, if *x* is any node in a Fibonacci heap, and *k = degree[x]*, then *size(x) >= F<sub>k+2</sub>*, where *F<sub>k</sub>* is the *k*-th Fibonacci number. This property is crucial for the amortized analysis.

**3. Operations on Fibonacci Heaps**

*   **Creating a New Fibonacci Heap (Fib-Heap-Create):**
    *   Creates an empty Fibonacci heap.
    *   `min[H] = NULL`
    *   `n[H] = 0`
    *   **Time Complexity: O(1)**

*   **Inserting a Node (Fib-Heap-Insert(H, x)):**
    *   Creates a new single-node Fibonacci heap containing the node `x`.
    *   Merges this single-node heap with the original heap `H` by adding `x` to the root list of `H`.
    *   Updates `min[H]` if necessary.
    *   `degree[x] = 0`
    *   `parent[x] = NULL`
    *   `child[x] = NULL`
    *   `left[x] = x`
    *   `right[x] = x`
    *   `mark[x] = FALSE`
    *   **Time Complexity: O(1) amortized**

*   **Finding the Minimum Node (Fib-Heap-Minimum(H)):**
    *   Returns a pointer to the node `min[H]` containing the minimum key.
    *   **Time Complexity: O(1)**

*   **Union of Two Fibonacci Heaps (Fib-Heap-Union(H1, H2)):**
    *   Creates a new Fibonacci heap `H`.
    *   Concatenates the root lists of `H1` and `H2`.
    *   Determines the new minimum node based on the minimum nodes of `H1` and `H2`.
    *   Frees the original heaps `H1` and `H2`.
    *   `n[H] = n[H1] + n[H2]`
    *   **Time Complexity: O(1)**

*   **Extracting the Minimum Node (Fib-Heap-Extract-Min(H)):**
    *   Finds the node `z = min[H]` with the minimum key.
    *   For each child `x` of `z`, add `x` to the root list of `H`.
    *   Remove `z` from the root list of `H`.
    *   Consolidate the trees in the root list (see consolidation below).
    *   Update `min[H]` if necessary.
    *   Decrement `n[H]`.
    *   Return `z`.
    *   **Time Complexity: O(log n) amortized**

*   **Consolidation (Consolidate(H)):**
    *   This is the most complex operation. It aims to reduce the number of trees in the root list by linking trees of equal degree.
    *   It uses an auxiliary array `A[0..D(n)]` where `D(n)` is the maximum degree in a Fibonacci heap with `n` nodes (approximately log n).
    *   Iterate through the root list. For each node `x`:
        *   Let `d = degree[x]`.
        *   While `A[d] != NULL` (meaning there's another tree `y` of the same degree):
            *   Link the trees `x` and `y`.  The tree with the larger key becomes a child of the tree with the smaller key.
            *   Update `A[d] = NULL`.
            *   Increment `d`.
        *   `A[d] = x`.
    *   After processing all nodes in the root list, reconstruct the root list from the non-NULL entries in `A`, and update `min[H]`.

*   **Decreasing a Key (Fib-Heap-Decrease-Key(H, x, k)):**
    *   Decreases the key of node `x` to the new value `k`.  It is assumed that `k <= key[x]`.
    *   Update `key[x] = k`.
    *   If `x` violates the min-heap property (i.e., `key[x] < key[parent[x]]`):
        *   Cut `x` from its parent and add `x` to the root list.
        *   Perform a *cascading cut* starting at the parent of `x`.
    *   If `k < key[min[H]]`, update `min[H] = x`.
    *   **Time Complexity: O(1) amortized**

*   **Cascading Cut (Cascading-Cut(H, y)):**
    *   This operation is invoked by `Fib-Heap-Decrease-Key`. It performs a sequence of cuts to maintain the amortized time complexity.
    *   If `y` is not a root:
        *   If `mark[y]` is FALSE:
            *   Set `mark[y] = TRUE` (meaning `y` has now lost a child).
        *   Else (if `mark[y]` is TRUE, meaning `y` has already lost a child):
            *   Cut `y` from its parent and add `y` to the root list.
            *   Cascading-Cut(H, parent[y]).

*   **Deleting a Node (Fib-Heap-Delete(H, x)):**
    *   Decreases the key of `x` to negative infinity (or a sufficiently small value). `Fib-Heap-Decrease-Key(H, x, -infinity)`.
    *   Extract the minimum node from the heap. `Fib-Heap-Extract-Min(H)`.  This effectively removes `x` from the heap.
    *   **Time Complexity: O(log n) amortized**

**4. Amortized Analysis**

*   The amortized analysis of Fibonacci heap operations relies on a carefully chosen potential function.
*   **Potential Function:** Φ(H) = t(H) + 2m(H), where:
    *   t(H) is the number of trees in the root list of `H`.
    *   m(H) is the number of marked nodes in `H`.

*   **Amortized Cost:** The amortized cost of an operation is defined as c + ΔΦ, where:
    *   c is the actual cost of the operation.
    *   ΔΦ is the change in potential due to the operation.

*   The analysis shows that the amortized costs of the operations are as follows:
    *   Fib-Heap-Insert: O(1)
    *   Fib-Heap-Minimum: O(1)
    *   Fib-Heap-Union: O(1)
    *   Fib-Heap-Extract-Min: O(log n)
    *   Fib-Heap-Decrease-Key: O(1)
    *   Fib-Heap-Delete: O(log n)

**5. Comparison with Other Priority Queue Implementations**

| Feature        | Binary Heap | Binomial Heap | Fibonacci Heap |
|----------------|-------------|---------------|-----------------|
| Underlying Structure | Complete Binary Tree | Collection of Binomial Trees | Collection of Trees |
| Insert         | O(log n)   | O(log n)      | O(1) amortized  |
| Minimum        | O(1)        | O(log n)      | O(1)            |
| Extract-Min    | O(log n)   | O(log n)      | O(log n) amortized |
| Union          | O(n)        | O(log n)      | O(1)            |
| Decrease-Key   | O(log n)   | O(log n)      | O(1) amortized  |
| Delete         | O(log n)   | O(log n)      | O(log n) amortized |
| Complexity of Implementation| Simple | Moderate | Complex |

*   **Binary Heaps:** Simple to implement but have higher time complexity for operations like `insert` and `decrease-key` compared to Fibonacci heaps.  Generally preferred when `decrease-key` operations are infrequent.
*   **Binomial Heaps:** Provide a good balance between performance and implementation complexity. They offer O(log n) time complexity for most operations but are not as efficient as Fibonacci heaps for `insert` and `decrease-key`.
*   **Fibonacci Heaps:** Achieve the best theoretical performance for operations like `insert`, `decrease-key`, and `union`.  They are particularly well-suited for algorithms where these operations are frequent, such as Dijkstra's algorithm and Prim's algorithm. However, they are more complex to implement and can have higher constant factors, making them less practical for small datasets.

**6. Applications**

*   **Dijkstra's Algorithm (Shortest Path):** Fibonacci heaps are used to implement the priority queue in Dijkstra's algorithm, improving its time complexity from O(E log V) (with binary heaps) to O(E + V log V), where E is the number of edges and V is the number of vertices.  The `decrease-key` operation is crucial in Dijkstra's algorithm.
*   **Prim's Algorithm (Minimum Spanning Tree):** Similar to Dijkstra's, Fibonacci heaps can optimize Prim's algorithm for finding the minimum spanning tree of a graph, also achieving a time complexity of O(E + V log V).
*   **Network Optimization:** Fibonacci heaps are used in various network optimization algorithms where efficient priority queue operations are required.

**7. Example**

Let's consider a simple example of inserting elements into a Fibonacci heap and then extracting the minimum.

1.  **Create an empty Fibonacci heap H.**  `min[H] = NULL`, `n[H] = 0`.
2.  **Insert 5:** `Fib-Heap-Insert(H, 5)`. `min[H] = 5`, `n[H] = 1`. The root list contains a single node with key 5.
3.  **Insert 2:** `Fib-Heap-Insert(H, 2)`. `min[H] = 2`, `n[H] = 2`.  The root list contains nodes with keys 5 and 2.
4.  **Insert 8:** `Fib-Heap-Insert(H, 8)`. `min[H] = 2`, `n[H] = 3`.  The root list contains nodes with keys 5, 2, and 8.
5.  **Extract-Min:** `Fib-Heap-Extract-Min(H)`. The minimum node (2) is removed. The root list now contains 5 and 8. `Consolidate(H)` is called (although in this simple case, it doesn't perform any linking). `min[H]` is updated (it becomes 5).  `n[H] = 2`.
6.  Now let's try a decrease key. Say we inserted the value 10, so now we have the root values 5, 8 and 10. We want to decrease the value of 10 to 3.
7.   Call Decrease-Key(H, node with value 10, 3). Now the root nodes are 5, 8, and 3. The min value is now 3.

**8. Practice Questions and Exercises**

1.  **Question:**  Explain the purpose of the `mark` attribute in Fibonacci heap nodes.  Why is it important for the `decrease-key` operation?

    **Answer:** The `mark` attribute indicates whether a node has lost a child since the last time it was made the child of another node. It is crucial for the `decrease-key` operation because it helps to control the number of cuts performed during cascading cuts, which in turn is essential for maintaining the amortized time complexity of the `decrease-key` operation. Without the `mark` attribute and cascading cuts, the performance of the `decrease-key` operation could degrade significantly, potentially leading to O(n) worst-case time complexity.

2.  **Question:**  Describe the steps involved in the `Consolidate` operation and explain its purpose.

    **Answer:** The `Consolidate` operation is performed during the `extract-min` operation to reduce the number of trees in the root list.  The steps are as follows:
        *   Create an auxiliary array `A[0..D(n)]`, where `D(n)` is the maximum degree in a Fibonacci heap with `n` nodes.
        *   Iterate through the root list. For each node `x`:
            *   Let `d = degree[x]`.
            *   While `A[d] != NULL`:  Link `x` and `A[d]`.  The tree with the larger key becomes a child of the tree with the smaller key. Update `A[d] = NULL`.  Increment `d`.
            *   `A[d] = x`.
        *   Reconstruct the root list from the non-NULL entries in `A`.
        *   Update `min[H]`.

    The purpose is to ensure that there is at most one tree of each degree in the root list, which bounds the number of trees in the root list to O(log n) and contributes to the O(log n) amortized time complexity of `extract-min`.

3.  **Question:**  Explain how Fibonacci heaps improve the performance of Dijkstra's algorithm compared to using binary heaps.

    **Answer:** In Dijkstra's algorithm, the dominant operations are `extract-min` (to find the vertex with the shortest tentative distance) and `decrease-key` (to update the tentative distance of neighboring vertices).

    *   With a binary heap:  `extract-min` takes O(log V) time and `decrease-key` also takes O(log V) time, where V is the number of vertices. The `decrease-key` operation is performed at most E times (where E is the number of edges).  Therefore, the overall time complexity using a binary heap is O(E log V).

    *   With a Fibonacci heap: `extract-min` takes O(log V) amortized time and `decrease-key` takes O(1) amortized time.  Therefore, the overall time complexity using a Fibonacci heap is O(V log V + E).  Since E can be greater than V log V in dense graphs, the Fibonacci heap can improve the performance to O(E + V log V), especially in cases with large numbers of `decrease-key` operations.

4.  **Exercise:** Write pseudo-code for the `Fib-Heap-Insert` operation.

    ```
    Fib-Heap-Insert(H, x)
    {
        degree[x] = 0
        parent[x] = NULL
        child[x] = NULL
        mark[x] = FALSE

        if (H.min == NULL)
        {
            H.min = x
            x.left = x
            x.right = x
        }
        else
        {
            // Insert x into the root list of H
            x.right = H.min.right
            x.left = H.min
            H.min.right.left = x
            H.min.right = x

            if (x.key < H.min.key)
            {
                H.min = x
            }
        }

        H.n = H.n + 1
    }

    ```

5. **Exercise:** Trace the execution of inserting the following values into an empty Fibonacci heap: 7, 3, 10, 2, 5, 1. Show the state of the root list after each insertion and indicate the min pointer.

   *Insert 7:*

   - Root List: 7
   - min = 7

   *Insert 3:*

   - Root List: 7 <-> 3
   - min = 3

   *Insert 10:*

   - Root List: 7 <-> 3 <-> 10
   - min = 3

   *Insert 2:*

   - Root List: 7 <-> 3 <-> 10 <-> 2
   - min = 2

   *Insert 5:*

   - Root List: 7 <-> 3 <-> 10 <-> 2 <-> 5
   - min = 2

   *Insert 1:*

   - Root List: 7 <-> 3 <-> 10 <-> 2 <-> 5 <-> 1
   - min = 1

**9. Important Points to Remember**

*   Fibonacci heaps are powerful but complex.
*   Amortized analysis is crucial for understanding their performance.
*   `decrease-key` is a key operation that makes them suitable for certain algorithms.
*   Consider the constant factors and implementation overhead when choosing between Fibonacci heaps and simpler data structures like binary heaps.
*  `Extract-Min` Operation calls consolidate that will potentially update the min pointer as well.
*  Root nodes have their parent pointers set to NULL.
