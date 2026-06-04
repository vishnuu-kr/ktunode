---
title: "Algorithm"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 3: Greedy Strategy "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b568"
status: "completed"
scrapedAt: "2026-05-20T16:45:52.963Z"
---
# DESIGN AND ANALYSIS OF ALGORITHMS: Module 3 - Greedy Strategy: Algorithms

## Introduction

This module focuses on the Greedy Strategy, a fundamental algorithm design paradigm. This section covers the general algorithm design strategy, strengths, weaknesses, and applications where it excels.

## Learning Outcomes

Upon completion of this module, you will be able to:

*   **Understand the Greedy Strategy and its principles.**
*   **Design and analyze Greedy algorithms.**
*   **Prove the optimality of Greedy algorithms where applicable.**
*   **Identify problems suitable for Greedy approaches.**
*   **Implement Greedy algorithms for specific problems.**
*   **Distinguish between problems where Greedy strategies provide optimal solutions and those where they don't.**

## 1. Key Concepts and Definitions

*   **Greedy Strategy:** An algorithmic paradigm that makes the locally optimal choice at each step with the hope of finding the global optimum.  It builds a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit.

*   **Optimal Substructure:** A property of a problem where the optimal solution to the overall problem is composed of optimal solutions to subproblems.  Greedy algorithms often rely on the optimal substructure property.

*   **Greedy Choice Property:** The property that a globally optimal solution can be arrived at by making a locally optimal (greedy) choice. This is CRUCIAL for the Greedy strategy to work correctly.

*   **Feasible Set:** A set of candidate solutions.

*   **Selection Function:** A function that chooses the best candidate to add to the solution from the feasible set.

*   **Feasibility Function:** A function that determines if a candidate can be added to the solution without violating constraints.

*   **Objective Function:** A function that assigns a value to a solution, which the algorithm aims to minimize or maximize.

*   **Local Optimum:** A solution that is optimal only within a limited region of the search space.

*   **Global Optimum:** A solution that is the best possible solution in the entire search space.

## 2. General Algorithm Design Strategy for Greedy Algorithms

1.  **Understand the Problem:** Clearly define the problem, its constraints, and the objective function to be optimized.

2.  **Identify Candidate Solutions:** Define the set of possible solutions (feasible set).

3.  **Design the Selection Function:** Develop a selection function that chooses the "best" candidate from the feasible set.  This is the core of the greedy approach.  It needs to be computationally efficient.

4.  **Design the Feasibility Function:** Create a feasibility function that checks if adding a candidate to the current solution is valid (satisfies constraints).

5.  **Build the Solution Iteratively:**  Repeatedly select the best candidate (using the selection function), check its feasibility, and add it to the solution until a complete solution is found or the feasible set is empty.

6.  **Analyze Time Complexity:** Determine the time complexity of the greedy algorithm.

7.  **Prove Optimality (If Possible):**  The most challenging part.  It is necessary to prove that the greedy strategy will always lead to the optimal solution.  This may involve induction or exchange arguments. If you cannot prove it, then it's likely the algorithm is a heuristic and *may* give a good solution, but is not guaranteed.

## 3. Examples of Problems Solved Using Greedy Strategy

*   **Activity Selection Problem:**
    *   **Problem:** Given a set of activities with start and finish times, select the maximum number of non-overlapping activities that can be performed by a single person.
    *   **Greedy Approach:** Sort activities by finish time and select the activity with the earliest finish time first.  Then, select the next activity that starts after the previous activity finishes.
    *   **Optimality:** The activity selection problem can be proven to be solved optimally with the greedy approach.
    *   **Example:**
        Activities:  A(1,4), B(3,5), C(0,6), D(5,7), E(3,9), F(5,9), G(6,10), H(8,11), I(8,12), J(2,14), K(12,16) where (start, end) are the times.
        Sorted by finish time: A(1,4), B(3,5), C(0,6), D(5,7), E(3,9), F(5,9), G(6,10), H(8,11), I(8,12), J(2,14), K(12,16)
        Selected Activities: A(1,4), D(5,7), H(8,11), K(12,16) - A set of four mutually compatible activities.
*   **Fractional Knapsack Problem:**
    *   **Problem:** Given a knapsack with a maximum weight capacity and a set of items, each with a weight and a value, determine the fraction of each item to include in the knapsack to maximize the total value without exceeding the weight capacity.  You can take fractions of items.
    *   **Greedy Approach:** Calculate the value-to-weight ratio for each item. Sort the items in decreasing order of this ratio.  Take as much as possible of the item with the highest ratio, then move to the next, until the knapsack is full.
    *   **Optimality:** The fractional knapsack problem can be proven to be solved optimally with the greedy approach.
    *   **Example:**
        Knapsack Capacity: 50
        Items: (Weight, Value) = (10, 60), (20, 100), (30, 120)
        Value/Weight Ratios: 6, 5, 4
        Solution: Take item 1 (weight 10, value 60). Remaining capacity: 40.  Take item 2 (weight 20, value 100). Remaining Capacity: 20. Take item 3 (weight 30, value 120) a *fraction* of 20/30 = 2/3, with a value of 80.
        Total Value: 60 + 100 + 80 = 240
*   **Huffman Coding:**
    *   **Problem:** Create an optimal prefix code for a set of characters based on their frequencies.  This means no code is a prefix of any other code.
    *   **Greedy Approach:**  Build a binary tree bottom-up.  Repeatedly select the two nodes with the lowest frequencies and merge them into a new node whose frequency is the sum of the frequencies of the two children.
    *   **Optimality:** Huffman coding generates optimal prefix codes.

*   **Minimum Spanning Tree Algorithms (Kruskal's and Prim's):**
    *   **Problem:** Find a subset of the edges of a connected, weighted graph that connects all the vertices together, without any cycles and with the minimum possible total edge weight.
    *   **Kruskal's Algorithm (Greedy Approach):** Sort edges by weight in ascending order.  Add edges to the MST, unless adding an edge creates a cycle.
    *   **Prim's Algorithm (Greedy Approach):**  Start with a single vertex.  Grow the MST by adding the minimum-weight edge that connects a vertex in the MST to a vertex not in the MST.
    *   **Optimality:**  Both Kruskal's and Prim's algorithms find minimum spanning trees.

## 4. Limitations of Greedy Algorithms

*   **Not Always Optimal:** The greedy strategy does not always guarantee the globally optimal solution.  It makes decisions based on local information, which may not lead to the best overall result.
*   **Need to Prove Optimality:** It is crucial to prove (or at least have a strong argument for) the optimality of a greedy algorithm.  Without proof, it's just a heuristic.
*   **NP-Hard Problems:** Greedy algorithms are often ineffective for NP-hard optimization problems, where finding the optimal solution is computationally intractable.  For such problems, greedy algorithms may provide reasonable approximations, but not necessarily the best solution.
*   **Example Where Greedy Fails: The 0/1 Knapsack Problem**
    *   **Problem:** Similar to the fractional knapsack, but you can only take *entire* items or leave them.  No fractions allowed.
    *   **Greedy Fails:**  Using the value/weight ratio approach does *not* guarantee the optimal solution. A higher initial value/weight ratio might lead to filling the knapsack with items leaving no room for higher value items later.
    *   **Example:**
        Knapsack Capacity: 5
        Item 1: (Weight 1, Value 6)  Ratio: 6
        Item 2: (Weight 2, Value 10) Ratio: 5
        Item 3: (Weight 3, Value 12) Ratio: 4
        Greedy Solution (taking item 1): Value 6, Remaining Capacity: 4. Could take item 2 to get a value of 16.
        Optimal Solution (Taking Item 2 and Item 1): Value 16, Remaining Capacity: 2.
        Even Better Solution (Taking Item 2 and nothing else): Value 10, Remaining Capacity: 3. Could have also selected Item 3.
        Item 2 and 3 (10+12): Weight = 5.  Total Value = 22. OPTIMAL!

## 5. When to Use Greedy Algorithms

*   **When Optimality is Guaranteed:** If you can prove that the greedy choice property holds, then the greedy strategy can be a very efficient way to find the optimal solution.
*   **For Optimization Problems:** When the problem requires finding a maximum or minimum value of some objective function.
*   **When Speed is Important:** Greedy algorithms are generally very efficient because they make decisions based on local information and do not explore the entire solution space.
*   **As a Heuristic:** Even when optimality is not guaranteed, greedy algorithms can be used as heuristics to find "good enough" solutions, especially for complex problems.

## 6. Practice Questions and Exercises

1.  **Coin Change Problem (Greedy Approach):** Given a set of coin denominations and an amount to be paid, find the minimum number of coins to make the payment.  Consider the following example: Denominations: {1, 5, 10, 25}. Amount to be paid: 49. What is the solution? Is the greedy approach optimal for all sets of denominations?

    *   **Solution:**
        *   Use 1 25-cent coin (Remaining: 24)
        *   Use 2 10-cent coins (Remaining: 4)
        *   Use 4 1-cent coins (Remaining: 0)
        *   Total coins: 1 + 2 + 4 = 7
        *   The greedy approach is *not* optimal for *all* sets of denominations.  Consider the set {1, 3, 4} and an amount of 6. The greedy algorithm would choose 4, then 1, then 1 (3 coins), while the optimal solution is 3 + 3 (2 coins).

2.  **Task Scheduling Problem:** You have a list of tasks with deadlines and profits.  You can perform only one task at a time.  Maximize the total profit by scheduling tasks such that you complete each task before its deadline. Devise a greedy algorithm and explain how it works.

    *   **Greedy Algorithm:**
        1.  Sort the tasks in decreasing order of profit.
        2.  Create a schedule array of size `max_deadline` initialized with -1 (indicating no task assigned).
        3.  Iterate through the sorted tasks:
            *   For each task, find the latest available slot (from `task_deadline` down to 1) in the schedule array.
            *   If a free slot is found, assign the task to that slot and add its profit to the total profit.

3.  **Write pseudocode for Kruskal's Algorithm.**

    ```pseudocode
    Algorithm KruskalMST(Graph G)
    Input: A connected, weighted graph G = (V, E)
    Output: A minimum spanning tree T = (V, E')

    1.  T = empty set of edges (E' = {})
    2.  Sort the edges E in G by increasing order of weight
    3.  For each edge (u, v) in E (in sorted order):
        4.  If adding (u, v) to T does NOT create a cycle:
            5.  T = T union {(u, v)} // Add edge (u, v) to T
    6.  Return T
    ```

## 7. Important Points to Remember

*   **Greedy algorithms are not a universal solution.** They work well for certain types of optimization problems that exhibit optimal substructure and the greedy choice property.
*   **Always consider the possibility that a greedy algorithm may not find the optimal solution.**
*   **Proving optimality is crucial.** Use mathematical induction or exchange arguments to demonstrate the algorithm's correctness.
*   **Think about the time complexity of the algorithm.**  The efficiency of the greedy approach is one of its main advantages.
*   **For problems where a greedy approach fails, dynamic programming or other optimization techniques may be necessary.**
