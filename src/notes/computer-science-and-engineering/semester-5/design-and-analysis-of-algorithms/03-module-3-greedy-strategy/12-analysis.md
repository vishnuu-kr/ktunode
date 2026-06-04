---
title: "Analysis"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 3: Greedy Strategy "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b565"
status: "completed"
scrapedAt: "2026-05-20T16:45:50.850Z"
---
## Module 3: Greedy Strategy - Analysis

**Subject:** DESIGN AND ANALYSIS OF ALGORITHMS
**Module:** Module 3: Greedy Strategy
**Topic:** Analysis

**Learning Outcomes:**

*   Understand the general characteristics of greedy algorithms.
*   Learn how to prove the correctness of a greedy algorithm.
*   Analyze the time complexity of greedy algorithms.
*   Identify problems suitable for greedy algorithms and those where they fail.

---

### 1. General Characteristics of Greedy Algorithms

*   **Optimization Problem:** Greedy algorithms are typically used to solve optimization problems, where the goal is to find the best possible solution from a set of feasible solutions.
*   **Local Optimality:** The greedy approach makes a series of locally optimal choices at each step, hoping that these choices will lead to a globally optimal solution.
*   **No Backtracking:** Once a choice is made, it cannot be undone.  Greedy algorithms commit to a decision immediately without considering its future implications exhaustively.
*   **Step-by-Step Approach:**  They build up a solution incrementally, making one choice at a time.
*   **Simplicity:**  Greedy algorithms are often easier to design and implement compared to dynamic programming or other optimization techniques.  However, proving their correctness can sometimes be challenging.

**Key Definitions:**

*   **Feasible Solution:**  A solution that satisfies the constraints of the problem.
*   **Optimal Solution:** A feasible solution that maximizes or minimizes the objective function.
*   **Greedy Choice:** The locally optimal choice made at each step.

### 2. Proving the Correctness of a Greedy Algorithm

Proving the correctness of a greedy algorithm requires demonstrating that the locally optimal choices made at each step lead to a globally optimal solution. Common techniques include:

*   **Optimal Substructure:** The optimal solution to the problem contains optimal solutions to subproblems.  This means that if you have an optimal solution to the whole problem, then if you look at just the subset of data that was used to make a particular greedy choice, the solution formed by those items must also be an optimal solution to that subproblem.
*   **Greedy Choice Property:** A globally optimal solution can always be achieved by making the greedy choice first.  This usually involves showing that any solution *without* the greedy choice can be modified to *include* the greedy choice without making the solution worse (and often making it better).
*   **Induction:** Use mathematical induction to prove that the greedy algorithm produces an optimal solution for all input sizes.
*   **Exchange Argument:** Start with an arbitrary optimal solution and iteratively transform it into the greedy solution without worsening its value. This proves that the greedy solution is also optimal.  This often involves demonstrating that an element in the optimal (but non-greedy) solution can be "exchanged" for the greedy choice, improving or maintaining the solution's optimality.

**Example: Activity Selection Problem**

*   **Problem:** Given a set of activities with start and finish times, select the maximum number of non-overlapping activities.
*   **Greedy Strategy:** Choose the activity with the earliest finish time at each step.
*   **Proof (Exchange Argument):**

    1.  Let `A` be an optimal solution.
    2.  Let `a` be the activity with the earliest finish time (the greedy choice).
    3.  If `a` is in `A`, we're good.
    4.  If `a` is not in `A`, let `b` be the first activity in `A`.
    5.  Since `a` has the earliest finish time, finish(a) <= finish(b).
    6.  Replace `b` with `a` in `A`.  This is still a feasible solution because `a` finishes before `b` and therefore doesn't overlap with any other activities in `A` that come *after* `b`.
    7.  The new solution `A'` has the same number of activities as `A` and includes the greedy choice `a`. Therefore, `A'` is also an optimal solution.
    8.  By induction, we can continue this process until `A` becomes the greedy solution.

**Important Point:** Proving correctness is crucial.  Simply implementing a greedy algorithm and observing that it works on a few test cases is not sufficient to guarantee optimality for all possible inputs.

### 3. Analyzing the Time Complexity of Greedy Algorithms

The time complexity of a greedy algorithm depends on:

*   **Selection of the Greedy Choice:** The efficiency of selecting the locally optimal choice at each step. This often involves sorting or searching.
*   **Number of Iterations:**  The number of times the greedy choice is made (related to the size of the input).

**Examples:**

*   **Activity Selection:**

    *   Sorting activities by finish time: O(n log n)
    *   Selecting activities: O(n)
    *   Total: O(n log n)
*   **Fractional Knapsack:**

    *   Sorting items by value-to-weight ratio: O(n log n)
    *   Selecting items: O(n)
    *   Total: O(n log n)
*   **Dijkstra's Algorithm (for shortest paths):**

    *   Using a priority queue (e.g., heap) for selecting the node with the smallest distance: O(E log V), where E is the number of edges and V is the number of vertices.  (The initialization of the priority queue is O(V), each vertex is extracted from the queue once [O(log V) each], and each edge potentially causes an update to the distance of a vertex in the queue [O(log V) each].)
    *   Using a linear search: O(V^2)

**General Tips for Time Complexity Analysis:**

*   Identify the most computationally expensive operations within the loop.
*   Determine the number of times the loop executes.
*   Consider the data structures used and their impact on the time complexity.

### 4. Identifying Problems Suitable for Greedy Algorithms and Those Where They Fail

**Suitable Problems:**

*   **Optimal Substructure:**  The optimal solution to the problem contains optimal solutions to subproblems.
*   **Greedy Choice Property:** A globally optimal solution can be obtained by making locally optimal choices.
*   Problems where we want to choose the "best" element repeatedly based on some simple criterion.

**Examples of Suitable Problems:**

*   Activity Selection
*   Fractional Knapsack
*   Minimum Spanning Tree (Kruskal's or Prim's Algorithm)
*   Shortest Paths (Dijkstra's Algorithm for non-negative edge weights)
*   Huffman Coding

**Problems Where Greedy Algorithms Fail:**

*   **Negative Edge Weights (Dijkstra's Algorithm):** Dijkstra's algorithm doesn't work correctly with negative edge weights because it assumes that once a node's shortest distance is determined, it won't be updated. Negative edges can create shorter paths that bypass previously "finalized" nodes.
*   **0-1 Knapsack:** In the 0-1 knapsack problem, we can either take the entire item or leave it.  A greedy approach of taking items with the highest value-to-weight ratio might not lead to the optimal solution. Consider:

    *   Item 1: Value = 60, Weight = 10
    *   Item 2: Value = 100, Weight = 20
    *   Item 3: Value = 120, Weight = 30
    *   Knapsack Capacity = 50

    The greedy approach would take Item 1 first (60/10 = 6).  Then it would take Item 2 (100/20 = 5).  Total value: 160.

    The optimal solution is to take Items 2 and 3.  Total value: 220.
*   **Traveling Salesperson Problem (TSP):** Finding the shortest route that visits all cities exactly once and returns to the starting city. A greedy approach of always visiting the nearest unvisited city is unlikely to produce the optimal solution.
*   **Problems requiring exhaustive search or dynamic programming:** Problems where making a series of locally optimal choices does *not* guarantee a globally optimal solution.

**Important Considerations:**

*   **Overlapping Subproblems:** If the problem exhibits overlapping subproblems, dynamic programming is often a better choice than a greedy algorithm.  Dynamic programming explores all possible solutions by storing the results of subproblems, ensuring that each subproblem is solved only once.
*   **Counterexamples:** Try to find a counterexample to disprove the greedy approach. If you can find a single case where the greedy algorithm fails to produce the optimal solution, it's not a correct approach for that problem.

---

### Practice Questions and Exercises

1.  **Question:** Given the following activities with their start and finish times, determine the maximum number of non-overlapping activities that can be scheduled using the greedy approach.

    *   Activity 1: Start = 1, Finish = 4
    *   Activity 2: Start = 3, Finish = 5
    *   Activity 3: Start = 0, Finish = 6
    *   Activity 4: Start = 5, Finish = 7
    *   Activity 5: Start = 3, Finish = 9
    *   Activity 6: Start = 8, Finish = 11
    *   Activity 7: Start = 6, Finish = 12
    *   Activity 8: Start = 2, Finish = 14
    *   Activity 9: Start = 12, Finish = 16

    **Answer:**
    1.  Sort by finish time: (1,4), (3,5), (0,6), (5,7), (3,9), (8,11), (6,12), (2,14), (12,16)
    2.  Select (1,4)
    3.  Select (5,7)
    4.  Select (8,11)
    5.  Select (12,16)

    The maximum number of non-overlapping activities is 4.

2.  **Question:** Consider the fractional knapsack problem with a knapsack capacity of 10 and the following items:

    *   Item 1: Value = 60, Weight = 5
    *   Item 2: Value = 50, Weight = 10
    *   Item 3: Value = 20, Weight = 4

    What is the maximum value that can be obtained using the greedy approach?

    **Answer:**
    1.  Calculate value-to-weight ratio:
        *   Item 1: 60/5 = 12
        *   Item 2: 50/10 = 5
        *   Item 3: 20/4 = 5
    2.  Sort by value-to-weight ratio: Item 1, Item 2, Item 3
    3.  Take Item 1 (weight 5, value 60). Remaining capacity: 5
    4.  Take Item 2 (weight 10, value 50), but only take 5/10 of it. Value obtained: 50 * (5/10) = 25

    Maximum value = 60 + 25 = 85

3.  **Question:**  Explain why Dijkstra's algorithm does not work correctly with negative edge weights.  Provide a simple example to illustrate this.

    **Answer:** Dijkstra's algorithm assumes that once a node is visited and its shortest path from the source is determined, that path will remain the shortest possible path. This assumption breaks down with negative edge weights.  A negative edge weight can create a shorter path to a previously visited node, invalidating the earlier calculation.

    Example:

    *   A -> B: Weight = 10
    *   A -> C: Weight = 5
    *   C -> B: Weight = -7

    Dijkstra's algorithm would initially visit C (distance 5 from A).  Then, it would update the distance to B as 10 (direct path A->B). However, the path A->C->B has a total weight of 5 + (-7) = -2, which is shorter than the direct path from A to B.  Since Dijkstra's already visited B with a higher cost, it won't reconsider B, leading to an incorrect result.

4.  **Question:** Is the greedy approach always optimal for the fractional knapsack problem? Explain why or why not.

    **Answer:** Yes, the greedy approach is always optimal for the fractional knapsack problem. This is because we can take a fraction of an item.  By sorting the items by their value-to-weight ratio and taking as much as possible of the items with the highest ratio first, we guarantee that we are maximizing the value we can fit into the knapsack for each unit of weight.  This ensures that we reach the global optimum.  The optimal substructure and greedy choice properties are satisfied.

5. **Question:** Given a set of coin denominations (e.g., {1, 5, 10, 25}) and an amount, design a greedy algorithm to find the minimum number of coins that sum up to the amount. Does this algorithm always produce the optimal solution for *any* set of coin denominations?

    **Answer:**

    **Greedy Algorithm:**

    1. Sort the coin denominations in descending order.
    2. Initialize the coin count to 0.
    3. For each denomination, starting from the largest:
        * While the denomination is less than or equal to the remaining amount:
            * Subtract the denomination from the remaining amount.
            * Increment the coin count.
    4. Return the coin count.

    **Example (US Denominations: {1, 5, 10, 25}, Amount: 47):**

    1. Sorted denominations: {25, 10, 5, 1}
    2. 25: 47 - 25 = 22. Count = 1.
    3. 10: 22 - 10 = 12. Count = 2.
    4. 10: 12 - 10 = 2. Count = 3.
    5. 1: 2 - 1 = 1. Count = 4.
    6. 1: 1 - 1 = 0. Count = 5.

    Result: 5 coins (25, 10, 10, 1, 1)

    **Does this always produce the optimal solution?**

    No. The greedy algorithm does *not* always produce the optimal solution for any set of coin denominations. It works optimally for *canonical coin systems* like the US currency system.

    **Counterexample:**

    Consider the coin denominations {1, 3, 4} and the amount 6.

    * Greedy Algorithm:
        * 4: 6 - 4 = 2. Count = 1.
        * 1: 2 - 1 = 1. Count = 2.
        * 1: 1 - 1 = 0. Count = 3.
        * Result: 3 coins (4, 1, 1)

    * Optimal Solution:
        * 3 + 3 = 6.
        * Result: 2 coins (3, 3)

    In this case, the greedy algorithm fails to produce the optimal solution (3 coins vs. 2 coins). The greedy approach is "short-sighted" and doesn't explore the possibility of using multiple smaller denominations to achieve a better result.

---

### Important Points to Remember

*   Greedy algorithms are simple and efficient, but they don't always guarantee an optimal solution.
*   Proving the correctness of a greedy algorithm is essential before relying on its results.
*   Understanding the characteristics of problems suitable for greedy algorithms can save time and effort.
*   Always consider alternative approaches like dynamic programming if a greedy approach seems unlikely to succeed or if you cannot prove its correctness.
*   Look for counterexamples to test the validity of your greedy strategy.  If you find one, the strategy is incorrect.
