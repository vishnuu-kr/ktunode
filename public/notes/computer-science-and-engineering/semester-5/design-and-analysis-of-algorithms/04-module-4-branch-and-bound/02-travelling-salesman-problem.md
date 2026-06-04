---
title: "Travelling Salesman Problem"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 4: Branch and Bound "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b56b"
status: "completed"
scrapedAt: "2026-05-20T16:45:54.362Z"
---
# DESIGN AND ANALYSIS OF ALGORITHMS: Module 4 - Branch and Bound: Travelling Salesman Problem

These study notes cover the Travelling Salesman Problem (TSP) within the context of the Branch and Bound technique.

**Learning Outcomes:**

*   Understand the Travelling Salesman Problem and its applications.
*   Explain how Branch and Bound can be used to solve the TSP.
*   Apply different bounding functions to improve the efficiency of the Branch and Bound algorithm for TSP.
*   Analyze the time complexity and space complexity of the Branch and Bound approach to TSP.
*   Compare and contrast Branch and Bound with other TSP solving techniques like Dynamic Programming and Approximation algorithms.

## 1. Introduction to the Travelling Salesman Problem (TSP)

*   **Definition:**  Given a set of cities and the cost of travelling between each pair of cities, the Travelling Salesman Problem (TSP) is to find the shortest possible route that visits each city exactly once and returns to the starting city.  This route is called a Hamiltonian Cycle.

*   **Applications:**
    *   **Logistics:** Delivery route optimization (e.g., package delivery, food delivery).
    *   **Transportation:** School bus routing, airline routing.
    *   **Manufacturing:** Optimization of robot arm movements, minimizing tool changes.
    *   **DNA Sequencing:**  Finding the shortest path through DNA fragments.
    *   **Circuit Board Drilling:** Optimizing drilling paths to reduce drilling time.

*   **Formal Definition:** Given a complete weighted graph G = (V, E), where V is the set of vertices (cities) and E is the set of edges (roads between cities), and a cost function c(u, v) representing the cost of travelling from vertex u to vertex v, the TSP seeks to find a Hamiltonian cycle with the minimum total cost.

*   **Important Considerations:**
    *   **Complete Graph:** In the standard TSP, it's assumed that there is a direct path (edge) between every pair of cities (complete graph).  If not, you can usually add edges with a cost of infinity (or a very large number) to represent that the path isn't directly available.
    *   **Symmetric vs. Asymmetric:**
        *   **Symmetric TSP:**  The cost of travelling from city A to city B is the same as the cost of travelling from city B to city A (c(u, v) = c(v, u)).
        *   **Asymmetric TSP:**  The cost of travelling from city A to city B is *not* the same as the cost of travelling from city B to city A (c(u, v) != c(v, u)).  Think of one-way streets, or flights with different layover times.

*   **NP-Hardness:**  The TSP is an NP-hard problem. This means that no polynomial-time algorithm is known to solve it optimally.  This is why we use techniques like Branch and Bound that try to find the optimal solution, but may take exponential time in the worst case.

## 2. Branch and Bound for TSP

*   **General Idea:** Branch and Bound is a general algorithm design paradigm for solving combinatorial optimization problems. It systematically explores the search space by:

    *   **Branching:**  Dividing the problem into smaller subproblems (branches).  Each branch represents a partial solution.
    *   **Bounding:**  Calculating a lower bound (for minimization problems like TSP) on the cost of any solution that can be obtained from a given branch. This bound helps to prune (eliminate) branches that cannot lead to an optimal solution.

*   **Applying Branch and Bound to TSP:**

    1.  **State Space Tree:** The search space is represented as a state space tree.  Each node in the tree represents a partial tour. The root node represents the starting city and an empty tour.

    2.  **Branching:**  From a node representing a partial tour, we branch by considering all possible cities that have not yet been visited. Each branch adds a new city to the current partial tour.

    3.  **Bounding:**  For each node (partial tour), we calculate a lower bound on the cost of any complete tour that can be obtained by extending this partial tour.

    4.  **Pruning:** If the lower bound of a node is greater than or equal to the cost of the best tour found so far (the upper bound), then the node and all its descendants can be pruned because they cannot lead to a better solution.

    5.  **Selection:**  Choose a node from the set of live nodes (nodes that have not been pruned) to expand (branch from).  Different strategies exist for node selection (e.g., Least Cost, Depth-First, Breadth-First).  Least Cost selection usually leads to faster convergence.

    6.  **Termination:** The algorithm terminates when all nodes have been either expanded or pruned. The best tour found is the optimal tour.

## 3. Bounding Functions for TSP

The effectiveness of Branch and Bound heavily depends on the quality of the bounding function. A tighter (higher) lower bound helps to prune more branches and reduces the search space.

*   **Simple Lower Bound (Reduced Cost Matrix):**  This is a common and effective bounding function.
    1.  **Row Reduction:** For each row in the cost matrix, find the minimum element in that row.  Subtract this minimum element from all elements in that row. The sum of these minimum elements is the *row reduction cost*.
    2.  **Column Reduction:**  After row reduction, for each column in the cost matrix, find the minimum element in that column. Subtract this minimum element from all elements in that column. The sum of these minimum elements is the *column reduction cost*.
    3.  **Initial Lower Bound:**  The sum of the row reduction cost and the column reduction cost is the initial lower bound for the root node (empty tour).

*   **Lower Bound for a Node (Partial Tour):**

    1.  Start with the lower bound of the parent node (or the initial lower bound for the root node).
    2.  When adding an edge (city u to city v) to the partial tour, update the cost matrix as follows:
        *   Set `cost[v][u] = infinity` to prevent cycling back immediately.
        *   Set `cost[u][i] = infinity` for all `i` in the row `u` except `v` because once you leave `u`, you cannot go back to `u` from any other city except `v`.
        *   Set `cost[i][v] = infinity` for all `i` in the column `v` except `u` because once you enter `v`, you cannot go to `v` from any other city except `u`.
        *   If the partial tour already includes the path from city `k` to the starting city, set `cost[v][k] = infinity`.
    3.  Apply Row Reduction and Column Reduction to the updated cost matrix. The sum of the row and column reduction costs is added to the parent node's lower bound to get the lower bound for the current node.
*   **Other Bounding Functions:**
    *   **Minimum Spanning Tree (MST):** The cost of the MST of the graph (excluding the edge back to the starting node for a partial tour) can be used as a lower bound.  This is generally a looser bound than the reduced cost matrix approach, but can be faster to compute.

## 4. Algorithm Steps with Example

Let's consider a symmetric TSP with 4 cities (A, B, C, D) and the following cost matrix:

```
    A   B   C   D
A   ∞   20  30  10
B   20  ∞   15  16
C   30  15  ∞   4
D   10  16  4   ∞
```

**Step 1: Initialization (Root Node)**

*   **Cost Matrix:**  (Shown above)
*   **Row Reduction:**
    *   Row A: min = 10,  10 from (A,D)
    *   Row B: min = 15, 15 from (B,C)
    *   Row C: min = 4,   4 from (C,D)
    *   Row D: min = 4,   4 from (D,C)
    *   Row Reduction Cost = 10 + 15 + 4 + 4 = 33

*   **Updated Cost Matrix (after Row Reduction):**

    ```
        A   B   C   D
    A   ∞   10  20  0
    B   5   ∞   0   1
    C   26  11  ∞   0
    D   6   12  0   ∞
    ```

*   **Column Reduction:**
    *   Column A: min = 5, 5 from (B,A)
    *   Column B: min = 10, 10 from (A,B)
    *   Column C: min = 0, 0 from (B,C)
    *   Column D: min = 0, 0 from (A,D)
    *   Column Reduction Cost = 5 + 10 + 0 + 0 = 15

*   **Updated Cost Matrix (after Column Reduction):**

    ```
        A   B   C   D
    A   ∞   0   20  0
    B   0   ∞   0   1
    C   21  1   ∞   0
    D   1   2   0   ∞
    ```
*   **Initial Lower Bound:** 33 + 15 = 48

**Step 2: Branching from Root Node (Choose City A as the starting point)**

Let's branch by considering going from A to B, A to C, and A to D.  We'll use the Least Cost First approach.

*   **Branch 1: A -> B**

    *   Add edge (A, B).
    *   Set `cost[B][A] = ∞` to prevent immediate cycling back.
    *   Set row A to infinity except column B, and column B to infinity except row A.

        ```
            A   B   C   D
        A   ∞   0   ∞   ∞
        B   ∞   ∞   0   1
        C   21  ∞   ∞   0
        D   1   ∞   0   ∞
        ```

    *   Row Reduction: No change.
    *   Column Reduction: No change.
    *   Lower Bound: 48 (parent) + 0 (cost of A to B) + 0 (additional reduction) = 48

*   **Branch 2: A -> D**

    *   Add edge (A, D).
    *   Set `cost[D][A] = ∞`
    *   Set row A to infinity except column D, and column D to infinity except row A.

        ```
            A   B   C   D
        A   ∞   ∞   ∞   0
        B   0   ∞   0   ∞
        C   21  1   ∞   ∞
        D   ∞   2   0   ∞
        ```

    *   Row Reduction: No change.
    *   Column Reduction: No change.
    *   Lower Bound: 48 (parent) + 10 (cost of A to D) + 0 (additional reduction) = 58

*   **Branch 3: A -> C**

    *   Add edge (A, C).
    *   Set `cost[C][A] = ∞`
    *   Set row A to infinity except column C, and column C to infinity except row A.

        ```
            A   B   C   D
        A   ∞   ∞   20  ∞
        B   0   ∞   ∞   1
        C   ∞   1   ∞   0
        D   1   2   ∞   ∞
        ```
    *   Row Reduction: No change.
    *   Column Reduction: No change.
    *   Lower Bound: 48 (parent) + 30 (cost of A to C) + 0 (additional reduction) = 78

**Step 3: Selection and Further Branching**

Since Branch 1 (A -> B) has the lowest lower bound (48), we select it for expansion.  Now we branch from the partial tour A -> B.  The remaining cities to visit are C and D.

*   **Branch 1.1: A -> B -> C**

    *   Add edge (B, C).
    *   Set `cost[C][A] = infinity` (Prevents cycle back to start from C)
    *   Set `cost[C][B] = infinity` (Prevents immediate cycling back).
    *   Set row B to infinity except column C, and column C to infinity except row B.

        ```
            A   B   C   D
        A   ∞   ∞   ∞   ∞
        B   ∞   ∞   0   ∞
        C   ∞   ∞   ∞   0
        D   1   ∞   ∞   ∞
        ```
    *Row Reduction Cost: 0
    *Column Reduction Cost: 0
    *Lower Bound: 48 (A -> B) + 15 (B -> C) + 0 (Reduction) = 63

*   **Branch 1.2: A -> B -> D**

    *   Add edge (B, D).
    *   Set `cost[D][A] = infinity` (Prevents cycle back to start from D)
    *   Set `cost[D][B] = infinity` (Prevents immediate cycling back).
    *   Set row B to infinity except column D, and column D to infinity except row B.
       ```
            A   B   C   D
        A   ∞   ∞   ∞   ∞
        B   ∞   ∞   ∞   1
        C   ∞   ∞   ∞   0
        D   1   ∞   ∞   ∞
        ```
    *Row Reduction Cost: 0
    *Column Reduction Cost: 0
    *Lower Bound: 48 (A -> B) + 16 (B -> D) + 0 (Reduction) = 64

**Step 4: Continue Branching and Bounding**

We continue this process, selecting the node with the lowest lower bound and branching until we find a complete tour.  Whenever we find a complete tour, we update the upper bound (the cost of the best tour found so far).  Any node with a lower bound greater than or equal to the current upper bound is pruned.

**Step 5: Termination**

Eventually, all nodes in the state space tree will either be expanded (leading to complete tours) or pruned. The lowest cost complete tour is the optimal solution.

**Optimal Tour (in this example): A -> D -> C -> B -> A with a cost of 45.**

## 5. Time and Space Complexity

*   **Time Complexity:**  In the worst case, Branch and Bound can have a time complexity of O(n!), where n is the number of cities. This is because, in the worst case, it might need to explore all possible permutations of cities. However, with good bounding functions, the average-case time complexity is often much better than O(n!).

*   **Space Complexity:** Branch and Bound can require significant memory, especially if the state space tree becomes large. The space complexity is dependent on the number of live nodes in the tree, which can be exponential in the worst case.  Techniques like depth-first search with backtracking can help to reduce the space complexity at the expense of potentially exploring suboptimal branches first.

## 6. Comparison with Other TSP Solving Techniques

*   **Dynamic Programming:**
    *   **Advantage:**  Guaranteed to find the optimal solution.
    *   **Disadvantage:**  High space complexity (O(n<sup>2</sup> * 2<sup>n</sup>)).  Impractical for large numbers of cities.
*   **Approximation Algorithms:**
    *   **Advantage:**  Faster than Branch and Bound and Dynamic Programming (often polynomial time).
    *   **Disadvantage:**  Does not guarantee an optimal solution, but provides a solution within a certain factor of the optimal solution (approximation ratio). Examples: Nearest Neighbor algorithm, Christofides algorithm.
*   **Branch and Bound:**
    *   **Advantage:**  Guaranteed to find the optimal solution (if allowed to run to completion). Can be more efficient than Dynamic Programming for larger problems if the bounding functions are effective.
    *   **Disadvantage:**  Worst-case exponential time complexity. Space complexity can also be a concern.

**Summary Table**

| Technique            | Optimality | Time Complexity       | Space Complexity      | Advantages                                   | Disadvantages                               |
| -------------------- | ---------- | --------------------- | --------------------- | -------------------------------------------- | ------------------------------------------- |
| Dynamic Programming  | Optimal    | O(n<sup>2</sup> * 2<sup>n</sup>) | O(n<sup>2</sup> * 2<sup>n</sup>) | Guaranteed optimal solution                | High space complexity                       |
| Approximation Algo. | Approximate| Polynomial             | O(n) or O(n<sup>2</sup>)   | Fast, practical for large problems          | Solution not guaranteed to be optimal       |
| Branch and Bound     | Optimal    | O(n!) (worst case)    | Exponential (worst)  | Guaranteed optimal solution (if terminates)| Exponential time and space in worst case     |

## 7. Practice Questions/Exercises

1.  **Apply Branch and Bound:** Consider a TSP with the following cost matrix:

    ```
        A   B   C   D
    A   ∞   2   9   10
    B   2   ∞   6   4
    C   9   6   ∞   7
    D   10  4   7   ∞
    ```

    Use the reduced cost matrix as the bounding function and the Least Cost First selection strategy.  Show the first two levels of the Branch and Bound tree (the root and the children). Calculate the lower bounds for each node.

    **Answer:**

    *   **Root Node (A as starting city):**
        *   Row Reduction: 2 + 2 + 6 + 4 = 14
        *   Column Reduction: 0 + 0 + 0 + 0 = 0
        *   Initial Lower Bound: 14

    *   **Branch A -> B:**
        *   Updated Cost Matrix:
            ```
                A   B   C   D
            A   ∞   0   ∞   ∞
            B   ∞   ∞   6   4
            C   ∞   ∞   ∞   7
            D   ∞   ∞   7   ∞
            ```
        * Row Reduction: 0+4+0+7 = 11
        * Column Reduction: 0+0+0+0= 0
        * Lower Bound: 14 + 2 +11 = 27

     *   **Branch A -> C:**
        *   Updated Cost Matrix:
            ```
                A   B   C   D
            A   ∞   ∞   0   ∞
            B   ∞   ∞   ∞   4
            C   ∞   6   ∞   ∞
            D   ∞   4   ∞   ∞
            ```
        * Row Reduction: 0+4+6+4 = 14
        * Column Reduction: 0+0+0+0 = 0
        * Lower Bound: 14 + 9 +14 = 37

       *   **Branch A -> D:**
        *   Updated Cost Matrix:
            ```
                A   B   C   D
            A   ∞   ∞   ∞   0
            B   ∞   ∞   6   ∞
            C   ∞   6   ∞   ∞
            D   ∞   4   7   ∞
            ```
        * Row Reduction: 0+6+6+4 = 16
        * Column Reduction: 0+0+0+0 = 0
        * Lower Bound: 14 + 10 +16 = 40

    *   Thus the first level of the tree is: Root(14), A->B (27), A->C(37), A->D(40)

2.  **Bounding Function Analysis:**  Explain why the reduced cost matrix method is a valid lower bound for the TSP.

    **Answer:**  The reduced cost matrix represents the minimum cost required to enter and leave each city.  Since any complete tour must visit each city exactly once, the sum of these minimum costs (the lower bound) must be less than or equal to the actual cost of the optimal tour.  Removing entries to prevent cycles can only increase the final value so this method produces a lower bound.

3.  **Complexity Trade-offs:** Discuss the trade-offs between using a tighter bounding function (e.g., one that involves more computation) versus a looser bounding function in Branch and Bound for TSP.

    **Answer:** A tighter bounding function can prune more branches, leading to a smaller search space and potentially faster convergence to the optimal solution. However, a tighter bounding function may require more computation to calculate. A looser bounding function can be computed more quickly, but it may prune fewer branches, resulting in a larger search space.  The choice between tighter and looser bounding functions involves a trade-off between the cost of computing the bound and the reduction in the search space. An optimal balance is to calculate the tightest bound you can within the time constraints.

## 8. Important Points to Remember

*   The Travelling Salesman Problem is NP-hard.
*   Branch and Bound is a systematic search technique that uses branching and bounding to find optimal solutions.
*   The effectiveness of Branch and Bound heavily depends on the quality of the bounding function. A tighter lower bound leads to more pruning and a smaller search space.
*   Common bounding functions for TSP include the reduced cost matrix.
*   Branch and Bound can have exponential time and space complexity in the worst case.
*   Branch and Bound provides an optimal solution but Dynamic Programming and Approximation algorithms may be useful if time/memory are constraints.
