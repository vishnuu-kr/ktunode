---
title: "Randomized Graph Algorithms - Randomized algorithms for graph problems, Minimum cut problems, Randomized algorithms for network flows."
subject: "RANDOMIZED ALGORITHMS"
module: "Module 2: Randomized Graph Algorithms "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bd59"
status: "completed"
scrapedAt: "2026-05-20T16:57:07.375Z"
---
# Randomized Graph Algorithms

## Module 2: Randomized Graph Algorithms

### Topic: Randomized Graph Algorithms - Randomized algorithms for graph problems, Minimum cut problems, Randomized algorithms for network flows.

This module focuses on applying randomization techniques to solve graph problems, particularly in the context of minimum cuts and network flows.

**Learning Outcomes:**

*   Understand the application of randomization to graph algorithms.
*   Grasp the concepts of minimum cuts in graphs and their importance.
*   Learn and analyze randomized algorithms for finding minimum cuts, specifically Karger's algorithm.
*   Explore the use of randomization in approximating or improving network flow algorithms.
*   Understand the theoretical guarantees and performance characteristics of these randomized algorithms.

---

## 1. Introduction to Randomized Graph Algorithms

*   **Why Randomized Algorithms for Graphs?**

    *   **Simplicity:** Randomized algorithms can often provide simpler and more intuitive solutions compared to their deterministic counterparts.
    *   **Efficiency:**  In some cases, randomized algorithms offer better time complexity or approximation guarantees than known deterministic solutions.
    *   **Avoiding Worst-Case Scenarios:**  Randomization can help avoid pathological input cases that lead to poor performance in deterministic algorithms.
    *   **Approximation:**  For NP-hard graph problems, randomized algorithms can provide good approximations within reasonable time.

*   **Types of Randomized Algorithms**

    *   **Las Vegas:** Always produces the correct answer, but the running time is a random variable. The expected running time is what we typically analyze.  Example: Randomized quicksort.
    *   **Monte Carlo:** May produce an incorrect answer with a certain probability. We aim to make this probability of error small. Example: Monte Carlo primality testing.

*   **Key Concepts**

    *   **Probability of Error:**  The probability that a Monte Carlo algorithm returns an incorrect result.
    *   **Expected Running Time:**  The average running time of a Las Vegas algorithm over all possible random choices.
    *   **Amplification:** Techniques to reduce the probability of error in Monte Carlo algorithms (e.g., by repeating the algorithm multiple times and taking the majority vote).
    *   **Tail Bounds (Markov's inequality, Chebyshev's inequality, Chernoff bounds):**  Tools for bounding the probability that a random variable deviates significantly from its expected value.  These are crucial for analyzing the performance of randomized algorithms.

---

## 2. Minimum Cut Problems

*   **Definition of a Cut:**

    *   A *cut* in a graph G = (V, E) is a partition of the vertices V into two non-empty sets, S and T = V \ S.
    *   The *cut-set* is the set of edges crossing the cut, i.e., {(u, v) ∈ E | u ∈ S, v ∈ T}.
    *   The *size* (or *capacity*) of the cut is the sum of the weights (or capacities) of the edges in the cut-set. In an unweighted graph, it's simply the number of edges in the cut-set.

*   **Minimum Cut Problem:**

    *   Given a graph G, find a cut (S, T) such that the size (or capacity) of the cut is minimized.

*   **Importance of Minimum Cut:**

    *   **Network Reliability:**  The minimum cut represents the weakest link in a network.  Finding the minimum cut identifies the most vulnerable points that could disconnect the network.
    *   **Image Segmentation:**  Can be used to separate objects in an image.
    *   **Clustering:**  Can be used to partition data points into clusters.
    *   **VLSI Design:**  Used in partitioning circuits for efficient layout.

*   **Deterministic Algorithms for Minimum Cut:**

    *   **Ford-Fulkerson Algorithm (Max-Flow Min-Cut Theorem):** Repeatedly finds augmenting paths to compute the maximum flow between every pair of vertices.  The minimum cut can then be found based on the max-flow. Time complexity can vary depending on the edge capacities.
    *   **Stoer-Wagner Algorithm:** A direct algorithm that doesn't rely on maximum flow.  It repeatedly merges the two closest vertices until only two vertices remain.  The cut formed by these two vertices is the minimum cut.  Time complexity: O(n^3) or O(m n + n^2 log n).

---

## 3. Karger's Algorithm: A Randomized Algorithm for Minimum Cut

*   **Contraction Operation:**

    *   The core of Karger's algorithm is the *contraction* operation.
    *   Contracting an edge (u, v) means replacing the vertices u and v with a single new vertex, called uv.
    *   Edges that were incident to u or v are now incident to uv.
    *   Self-loops (edges from uv to uv) are removed.
    *   Crucially, multiple edges between two vertices are *preserved*.

*   **Karger's Basic Algorithm:**

    1.  **While** there are more than two vertices:
        1.  Randomly choose an edge (u, v) from the graph.
        2.  Contract the edge (u, v).
    2.  **Return** the cut represented by the two remaining vertices.

*   **Analysis of Karger's Algorithm:**

    *   **Probability of Success:**  The probability that the algorithm finds a minimum cut in a single run is surprisingly high.
    *   Let *k* be the size of the minimum cut in G.
    *   Let (S, T) be a minimum cut.
    *   Let E(S, T) be the set of edges crossing the minimum cut (i.e., the cut-set).
    *   The algorithm fails if *any* edge in E(S, T) is contracted during the execution.

    *   **Probability that the first edge contracted is NOT in the minimum cut:**
        *   The minimum cut has size *k*. Therefore, there are *k* edges in the minimum cut.
        *   Let *m* be the total number of edges in the graph.
        *   Since every vertex must have degree at least *k* (otherwise, we could separate that vertex with a cut smaller than *k*), we have 2*m* >= *nk*, so *m* >= *nk/2*.
        *   The probability that the *first* edge selected is in the minimum cut is *k/m* <= *k / (nk/2) = 2/n*.
        *   Therefore, the probability that the first edge selected is *NOT* in the minimum cut is 1 - (2/n) = (n-2)/n.

    *   **Probability of Success (Single Run):**  The probability that Karger's basic algorithm finds a minimum cut is at least 2/(n(n-1)) = 2/(n choose 2).

*   **Amplification by Repetition:**

    *   Since the probability of success is low, we can run the algorithm multiple times and take the best (smallest) cut found.
    *   The probability that *none* of *N* independent runs find the minimum cut is (1 - 2/(n(n-1)))^N.
    *   To get a high probability of success (e.g., at least 1 - 1/n), we need to choose N such that (1 - 2/(n(n-1)))^N <= 1/n.
    *   Using the approximation 1 - x ≈ e^(-x) for small x, we have: e^(-2N/(n(n-1))) <= 1/n
    *   Taking the natural logarithm of both sides: -2N/(n(n-1)) <= -ln(n)
    *   Solving for N: N >= (n(n-1)/2) * ln(n) = O(n^2 log n)

*   **Karger-Stein Algorithm (Improved Karger's Algorithm):**

    *   This is an improved version of Karger's algorithm that uses a recursive approach. It achieves a better time complexity.
    *   **Key Idea:**  After contracting the graph down to a certain size (e.g., n/sqrt(2)), we run the algorithm *twice* recursively. This is based on the observation that the probability of contracting an edge in the minimum cut increases as the graph becomes smaller.
    *   **Time Complexity:** O(n^2 log^2 n)
    *   **Probability of Success:**  Higher than the basic Karger algorithm.

*   **Advantages of Karger's Algorithm:**

    *   **Simplicity:**  The basic algorithm is very easy to understand and implement.
    *   **Efficiency:** The Karger-Stein algorithm provides a significantly better time complexity than deterministic algorithms for sparse graphs.

*   **Disadvantages of Karger's Algorithm:**

    *   **Monte Carlo:** It's a Monte Carlo algorithm, so it may not always find the minimum cut.
    *   **Requires Multiple Runs:**  The need to run the algorithm multiple times to amplify the probability of success increases the overall running time.

**Example:**

Consider a graph with vertices {A, B, C, D} and edges {(A, B), (A, C), (B, C), (C, D)}.  A minimum cut could be ({A, B, C}, {D}), which has size 1 (the edge (C, D)). Let's illustrate one possible run of Karger's Algorithm:

1. **Randomly choose (A, B):** Contract A and B into a single vertex AB. The graph now has vertices {AB, C, D} and edges {(AB, C), (AB, C), (C, D)}.
2. **Randomly choose (AB, C):** Contract AB and C into a single vertex ABC. The graph now has vertices {ABC, D} and edge {(ABC, D)}.
3. The algorithm returns the cut ({ABC}, {D}), which corresponds to the original cut ({A, B, C}, {D}), and has size 1. This is a minimum cut.

**Practice Questions:**

1.  **Describe the contraction operation in Karger's algorithm.**
    *   **Answer:**  The contraction operation replaces two vertices, u and v, connected by an edge with a single new vertex, uv. All edges previously incident to u or v are now incident to uv. Self-loops are removed, but multiple edges between vertices are preserved.

2.  **Explain why Karger's algorithm is a Monte Carlo algorithm.**
    *   **Answer:** Karger's algorithm is a Monte Carlo algorithm because it may not always return the correct answer (the minimum cut). There's a non-zero probability that the algorithm contracts an edge belonging to the minimum cut-set, leading to an incorrect result.

3.  **Why is it necessary to repeat Karger's algorithm multiple times? How many times should it be repeated to achieve a high probability of success?**
    *   **Answer:**  Karger's algorithm has a relatively low probability of success in a single run (2/(n(n-1))). To increase the likelihood of finding the minimum cut, it's necessary to repeat the algorithm multiple times and take the best result. It should be repeated O(n^2 log n) times to achieve a probability of success close to 1.

4.  **Compare and contrast Karger's algorithm with a deterministic minimum cut algorithm like Stoer-Wagner.**
    *   **Answer:**
        *   **Karger's Algorithm:** Randomized, Monte Carlo, simpler implementation (especially the basic version), can be more efficient than Stoer-Wagner on sparse graphs (especially the Karger-Stein variant), requires multiple runs.
        *   **Stoer-Wagner:** Deterministic, always finds the correct minimum cut, guaranteed performance, potentially slower than Karger-Stein on sparse graphs, more complex implementation.

---

## 4. Randomized Algorithms for Network Flows

*   **Network Flow Problem:**

    *   Given a directed graph G = (V, E) with a source vertex *s*, a sink vertex *t*, and edge capacities *c(u, v)* for each edge (u, v) ∈ E, the network flow problem is to find the maximum amount of flow that can be sent from *s* to *t* without violating the capacity constraints.

*   **Randomization in Network Flow Algorithms:**

    *   While deterministic algorithms like Ford-Fulkerson and Edmonds-Karp are commonly used, randomization can be employed to achieve:
        *   **Approximation Algorithms:** For NP-hard variants of the network flow problem (e.g., multicommodity flow), randomized algorithms can provide good approximations.
        *   **Improved Running Time in Specific Cases:**  In certain scenarios, randomization can lead to faster algorithms compared to their deterministic counterparts.

*   **Example:  Random Sampling for Approximation**

    *   Consider a multicommodity flow problem where we want to route multiple commodities (each with a source and sink) through the network. This problem is NP-hard.
    *   **Random Sampling Approach:**
        1.  Randomly select a subset of the commodities.
        2.  Compute a feasible flow for the selected commodities.
        3.  Scale up the flow to accommodate all commodities.
    *   This approach may violate the capacity constraints, but with proper scaling and analysis (using Chernoff bounds), we can bound the probability of exceeding the capacity constraints by a significant amount. This provides an approximation to the optimal multicommodity flow.

*   **Other Techniques**

    *   **Random Rounding:** Used in linear programming relaxations of network flow problems.  After solving the linear program, the fractional flow values are rounded randomly to integer values.  This can be analyzed using probabilistic methods to show that the resulting integer flow is close to the optimal fractional flow.
    *   **Sketching and Streaming Algorithms:**  These techniques use randomization to create compact summaries (sketches) of the network and the flow requirements.  These sketches can then be used to estimate flow properties without having to store the entire graph.

**Practice Questions:**

1.  **Describe the network flow problem and its key components.**
    *   **Answer:** The network flow problem involves finding the maximum amount of flow that can be sent from a source vertex to a sink vertex in a directed graph, subject to edge capacity constraints. The key components are the directed graph, the source vertex, the sink vertex, and the edge capacities.

2.  **Explain how randomization can be used to approximate solutions to the multicommodity flow problem.**
    *   **Answer:** Randomization can be used by randomly selecting a subset of commodities, computing a feasible flow for them, and then scaling up the flow to accommodate all commodities. This might violate capacity constraints, but probabilistic analysis (using, for example, Chernoff bounds) can be used to show that the probability of exceeding capacity constraints by a significant amount is low, thus providing an approximation.

3.  **What is random rounding and how is it used in network flow algorithms?**
    *   **Answer:** Random rounding is a technique used to convert fractional solutions obtained from linear programming relaxations of network flow problems into integer solutions. After solving the linear program, the fractional flow values are rounded randomly to integer values based on their fractional probabilities.

---

## 5. Important Points to Remember

*   Randomization can provide simple, efficient, and approximate solutions to graph problems.
*   Karger's algorithm is a classic randomized algorithm for finding minimum cuts.
*   The probability of success in Karger's algorithm can be amplified by repeating the algorithm multiple times.
*   Karger-Stein algorithm offers improved time complexity.
*   Randomization techniques like random sampling and random rounding are used in approximating network flow problems.
*   Tail bounds are crucial for analyzing the performance and approximation guarantees of randomized algorithms.
*   When choosing a randomized algorithm, it's important to consider the trade-offs between time complexity, probability of error, and the need for amplification.
