---
title: "Graph Partitioning and Community Detection - Kernighan-Lin Algorithm"
subject: "ADVANCED GRAPH ALGORITHMS"
module: "Module 4: Graph Partitioning and Community Detection "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b90d"
status: "completed"
scrapedAt: "2026-05-20T16:42:59.396Z"
---
# ADVANCED GRAPH ALGORITHMS - Module 4: Graph Partitioning and Community Detection - Kernighan-Lin Algorithm

These notes cover the Kernighan-Lin algorithm for graph partitioning.

**Learning Outcomes:**

*   Understand the problem of graph partitioning.
*   Explain the Kernighan-Lin algorithm and its working principles.
*   Apply the Kernighan-Lin algorithm to partition a given graph.
*   Analyze the time complexity of the Kernighan-Lin algorithm.
*   Compare and contrast the Kernighan-Lin algorithm with other graph partitioning techniques.
*   Identify the limitations of the Kernighan-Lin algorithm.

## 1. Introduction to Graph Partitioning

*   **Definition:** Graph partitioning is the problem of dividing the vertices of a graph into a specified number of disjoint subsets (partitions) such that the number of edges between the subsets is minimized.  This minimizes the "cut size".

*   **Goal:** To minimize the *cut size* while maintaining balanced partitions (ideally each partition has roughly the same number of vertices).

*   **Applications:**
    *   **VLSI Design:** Partitioning circuits into smaller components for placement and routing.
    *   **Parallel Computing:** Distributing computations among processors to minimize communication.
    *   **Image Segmentation:** Grouping pixels into meaningful regions.
    *   **Social Network Analysis:** Identifying communities within a social network.
    *   **Data Mining:** Clustering data points based on their relationships.

*   **Cut Size:** The number of edges that connect vertices in different partitions. A smaller cut size indicates a better partitioning.

*   **Balanced Partitioning:** A partitioning where the number of vertices in each partition is roughly equal.  Ensures no single partition becomes overloaded.

## 2. The Kernighan-Lin (KL) Algorithm

*   **Description:** The Kernighan-Lin (KL) algorithm is a heuristic algorithm for graph partitioning. It's an iterative improvement algorithm that starts with an initial partitioning and iteratively swaps pairs of vertices between the partitions to reduce the cut size. It's a local search algorithm.

*   **Key Ideas:**
    *   **Iterative Improvement:** Starts with an initial (potentially random) partitioning and repeatedly refines it.
    *   **Pairwise Swaps:** Considers swapping pairs of vertices, one from each partition.
    *   **Gain:** The *gain* of a swap is the reduction in the cut size that results from performing the swap.
    *   **Locking:** Vertices that have been swapped in an iteration are *locked* and cannot be swapped again in the same iteration. This prevents cycling.
    *   **Best Swap Sequence:**  The algorithm finds the sequence of swaps that results in the maximum overall gain for the iteration, even if some individual swaps in the sequence temporarily *increase* the cut size.  This allows the algorithm to escape local minima.

*   **Algorithm Steps:**

    1.  **Initialization:**
        *   Start with an initial (usually random) balanced partition of the graph into two sets, A and B, of equal (or nearly equal) size.
    2.  **Iteration:** Repeat until no improvement is possible:
        *   **Calculate D-values:** For each vertex `a` in A and `b` in B, calculate `D[a]` and `D[b]`.
            *   `D[x]` is the *difference* between the *external cost* and the *internal cost* of vertex `x`.
            *   `External Cost (Ex(x))`: The sum of the costs (weights) of edges connecting `x` to vertices in the *other* partition.
            *   `Internal Cost (In(x))`: The sum of the costs (weights) of edges connecting `x` to vertices in the *same* partition.
            *   So, `D[x] = Ex(x) - In(x)`.  A larger `D[x]` means swapping `x` is more likely to reduce the cut size.
        *   **Select Swaps:**
            *   Iteratively select pairs of vertices (`a_i`, `b_i`) from A and B that are *unlocked* and maximize the *gain* `g_i = D[a_i] + D[b_i] - 2*c(a_i, b_i)`, where `c(a_i, b_i)` is the cost (weight) of the edge between `a_i` and `b_i` (0 if no edge exists).
            *   Lock the selected vertices `a_i` and `b_i` to prevent them from being swapped again in this iteration.
            *   Repeat this selection and locking process `n/2` times (where `n` is the total number of vertices), creating a sequence of swaps: `(a_1, b_1), (a_2, b_2), ..., (a_{n/2}, b_{n/2})`.
        *   **Calculate Cumulative Gains:**
            *   For each `k` from 1 to `n/2`, calculate the cumulative gain `G_k = sum(g_i)` for `i = 1 to k`. This represents the total gain after performing the first `k` swaps.
        *   **Find Best Swap Sequence:**
            *   Find the value of `K` (where `1 <= K <= n/2`) that maximizes the cumulative gain `G_K`. This represents the optimal number of swaps to perform in this iteration.  This is the key to escaping local minima.
        *   **Perform Swaps:**
            *   If `G_K > 0`, permanently swap the vertices `(a_1, b_1), (a_2, b_2), ..., (a_K, b_K)`.  This improves the partition.
            *   If `G_K <= 0`, no improvement was found in this iteration, so the algorithm terminates.
        *   **Reset Locks:** Unlock all vertices for the next iteration.
    3.  **Termination:** The algorithm terminates when no further improvement is possible in an iteration (i.e., `G_K <= 0` for all iterations).

*   **Gain Calculation:**
    *   `g_i = D[a_i] + D[b_i] - 2*c(a_i, b_i)`
    *   This formula calculates the reduction in cut size resulting from swapping `a_i` and `b_i`. It considers the changes in external and internal costs for both vertices and the cost of the edge between them.

## 3. Example

Let's consider a small graph with 6 vertices (A, B, C, D, E, F) and the following edges with weight 1 (unweighted graph):

*   A-B
*   A-C
*   B-C
*   C-D
*   D-E
*   D-F
*   E-F

**Initial Partition:**
*   A = {A, B, C}
*   B = {D, E, F}

**Iteration 1:**

1.  **Calculate D-values:**

    *   D[A] = Ex(A) - In(A) = 0 - 2 = -2  (A connects to 0 nodes outside, 2 inside)
    *   D[B] = Ex(B) - In(B) = 0 - 2 = -2  (B connects to 0 nodes outside, 2 inside)
    *   D[C] = Ex(C) - In(C) = 1 - 2 = -1  (C connects to 1 node outside, 2 inside)
    *   D[D] = Ex(D) - In(D) = 1 - 2 = -1  (D connects to 1 node outside, 2 inside)
    *   D[E] = Ex(E) - In(E) = 0 - 1 = -1  (E connects to 0 nodes outside, 1 inside)
    *   D[F] = Ex(F) - In(F) = 0 - 1 = -1  (F connects to 0 nodes outside, 1 inside)

2.  **Select Swaps:** We need to find the pairs that maximize `g_i = D[a_i] + D[b_i] - 2*c(a_i, b_i)`.

    *   Try A-D: g = -2 + (-1) - 2 * 0 = -3
    *   Try A-E: g = -2 + (-1) - 2 * 0 = -3
    *   Try A-F: g = -2 + (-1) - 2 * 0 = -3
    *   Try B-D: g = -2 + (-1) - 2 * 0 = -3
    *   Try B-E: g = -2 + (-1) - 2 * 0 = -3
    *   Try B-F: g = -2 + (-1) - 2 * 0 = -3
    *   Try C-D: g = -1 + (-1) - 2 * 1 = -4 (C and D are connected)
    *   Try C-E: g = -1 + (-1) - 2 * 0 = -2
    *   Try C-F: g = -1 + (-1) - 2 * 0 = -2

    Let's choose C-E as the first swap, although it's not the best choice now, for the sake of demonstration. Lock C and E.  `g_1 = -2`.

    Now we need to choose another swap from the remaining unlocked vertices: {A, B} and {D, F}.

    *   Try A-D: g = -2 + (-1) - 2 * 0 = -3
    *   Try A-F: g = -2 + (-1) - 2 * 0 = -3
    *   Try B-D: g = -2 + (-1) - 2 * 0 = -3
    *   Try B-F: g = -2 + (-1) - 2 * 0 = -3

    Let's choose A-D. Lock A and D. `g_2 = -3`.

    Finally, we must swap B and F (the last remaining unlocked vertices). `g_3 = -2 + (-1) - 2 * 0 = -3`.

3.  **Calculate Cumulative Gains:**

    *   G_1 = -2
    *   G_2 = -2 + (-3) = -5
    *   G_3 = -2 + (-3) + (-3) = -8

4.  **Find Best Swap Sequence:**

    The maximum G_k is G_1 = -2.  K = 1.

5.  **Perform Swaps:**  Since G_1 = -2 < 0, we don't perform any swaps in this iteration because the best sequence resulted in a negative gain.

6. **Termination:** Since no improvement was possible, the algorithm would terminate here. The final partition remains {A,B,C} and {D,E,F}.

*Note: In a real implementation, we would systematically try all possible swap combinations and choose the ones that maximizes the overall gain, possibly improving the result. This example was simplified for illustrative purposes.*

## 4. Time Complexity

*   **Calculating D-values:** O(E), where E is the number of edges.
*   **Finding the best swap:** O(n^2), where n is the number of vertices.  This is because you need to consider all possible pairs.
*   **One Iteration:** O(n^2).  Finding the best swap sequence dominates.
*   **Overall:** The algorithm typically converges in a small number of iterations (often a constant number). Therefore, the overall time complexity is often considered to be **O(k * n^2)**, where k is the number of iterations (often small and treated as constant). In practice, k can vary depending on the graph structure.

## 5. Comparison with Other Graph Partitioning Techniques

*   **Spectral Clustering:** Uses the eigenvectors of the graph Laplacian matrix to embed the vertices into a lower-dimensional space, where clustering algorithms like k-means can be applied.  Can handle non-convex clusters better than Kernighan-Lin.  Higher time complexity.

*   **Greedy Algorithms (e.g., Fiduccia-Mattheyses (FM) algorithm):** Iteratively move vertices between partitions to reduce the cut size.  Faster than Kernighan-Lin, but may get stuck in local optima more easily. The FM algorithm is a variation of the KL algorithm specifically designed to improve speed.

*   **Multi-level Partitioning:** Coarsen the graph, partition the coarse graph, and then uncoarsen the graph, refining the partition at each level.  Often used to handle very large graphs. Examples: METIS, hMETIS.

| Feature          | Kernighan-Lin                                       | Spectral Clustering                       | Greedy Algorithms (e.g., FM)        | Multi-level Partitioning           |
|-------------------|------------------------------------------------------|------------------------------------------|----------------------------------------|------------------------------------|
| Approach         | Iterative pairwise swapping                             | Eigenvector analysis + clustering       | Iterative vertex movement               | Coarsening, partitioning, uncoarsening |
| Time Complexity | O(k * n^2) (k iterations)                           | Higher (depends on eigensolver)        | Lower than KL                          | Often faster for large graphs       |
| Local Optima     | Can escape local optima better than greedy algorithms | Less prone to local optima              | More prone to local optima            | Can help escape local optima       |
| Handling of Large Graphs | Not ideal for extremely large graphs                | Can be computationally expensive        | Can handle larger graphs than KL       | Well-suited for very large graphs |
| Cluster Shape    | Assumes relatively dense, well-separated clusters    | Can handle non-convex clusters better    | Assumes relatively dense clusters      | Flexible                             |

## 6. Limitations of the Kernighan-Lin Algorithm

*   **Local Optima:** While it can escape some local optima, it's still a heuristic algorithm and not guaranteed to find the global optimum.
*   **Time Complexity:** O(k * n^2) can be slow for large graphs.
*   **Bisection:** Originally designed for *bisection* (splitting into two partitions). Extending it to more than two partitions is possible but more complex.
*   **Balanced Partitioning Constraint:** Enforcing perfect balance can be challenging and may degrade performance. Relaxed balancing constraints are often used.
*   **Initial Partition:** The initial partition can influence the final result.  Multiple runs with different initial partitions are recommended.

## 7. Important Points to Remember

*   Kernighan-Lin is an iterative improvement algorithm for graph partitioning.
*   It works by swapping pairs of vertices between partitions to reduce the cut size.
*   The gain of a swap is the reduction in cut size.
*   Vertices are locked during an iteration to prevent cycling.
*   The algorithm finds the best sequence of swaps for each iteration, even if some individual swaps temporarily increase the cut size.
*   The time complexity is O(k * n^2), where k is the number of iterations (often small).
*   It has limitations related to local optima, scalability, and bisection.

## 8. Practice Questions/Exercises

**Question 1:** What is the primary goal of graph partitioning?

**Answer:** The primary goal of graph partitioning is to divide the vertices of a graph into disjoint subsets such that the number of edges connecting vertices in different subsets (the cut size) is minimized, often while maintaining balanced partitions.

**Question 2:** Explain the concept of "gain" in the context of the Kernighan-Lin algorithm.

**Answer:** The "gain" of swapping two vertices (one from each partition) in the Kernighan-Lin algorithm is the reduction in the cut size that results from performing that swap. It's calculated as `g = D[a] + D[b] - 2*c(a, b)`, where `D[a]` and `D[b]` are the difference between external and internal costs for vertices `a` and `b`, and `c(a, b)` is the cost of the edge between `a` and `b`. A higher gain indicates a better swap.

**Question 3:** Why are vertices "locked" during each iteration of the Kernighan-Lin algorithm?

**Answer:** Vertices are locked to prevent them from being swapped again within the same iteration. This prevents the algorithm from cycling back to previously explored partitions and ensures that it explores a wider range of potential solutions.

**Question 4:** What is the time complexity of the Kernighan-Lin algorithm, and what factors influence it?

**Answer:** The time complexity of the Kernighan-Lin algorithm is typically O(k * n^2), where n is the number of vertices and k is the number of iterations. The dominant factor is the O(n^2) complexity of finding the best swap in each iteration. The actual number of iterations, *k*, can vary depending on the graph's structure and the initial partitioning.

**Question 5:** Give two examples of real-world applications of graph partitioning.

**Answer:**
1.  **VLSI Design:** Partitioning electronic circuits into smaller modules for layout and routing.
2.  **Parallel Computing:** Distributing computational tasks across multiple processors to minimize inter-processor communication.

**Question 6:** Consider the following graph. The edges have weight 1.

A - B
A - C
B - C
B - D
C - E
D - E

If the initial partition is A={A, B, C} and B={D, E}, what are the D values for each vertex?

**Answer:**

* D[A] = Ex(A) - In(A) = 0 - 2 = -2
* D[B] = Ex(B) - In(B) = 1 - 2 = -1
* D[C] = Ex(C) - In(C) = 1 - 2 = -1
* D[D] = Ex(D) - In(D) = 1 - 1 = 0
* D[E] = Ex(E) - In(E) = 2 - 1 = 1
