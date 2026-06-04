---
title: "Optimality Principle"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 3: Greedy Strategy "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b561"
status: "completed"
scrapedAt: "2026-05-20T16:45:48.023Z"
---
## DESIGN AND ANALYSIS OF ALGORITHMS - Module 3: Greedy Strategy - Optimality Principle

**Subject:** DESIGN AND ANALYSIS OF ALGORITHMS
**Module:** Module 3: Greedy Strategy
**Topic:** Optimality Principle

**Learning Outcomes:** Upon completion of this topic, you should be able to:

*   Define the Optimality Principle (also known as Optimal Substructure).
*   Explain how the Optimality Principle relates to the Greedy Strategy.
*   Identify problems that exhibit the Optimality Principle.
*   Distinguish between problems suitable for greedy algorithms based on the Optimality Principle and those that are not.
*   Understand the limitations of the Greedy Strategy even when the Optimality Principle holds.

---

### 1. Introduction to the Optimality Principle

*   **Definition:** The Optimality Principle (also known as Optimal Substructure) states that an optimal solution to a problem contains within it optimal solutions to subproblems. In simpler terms, if you break down a problem into smaller parts, the optimal solution to the overall problem is built from the optimal solutions to those smaller parts.

*   **Key Concept:** This principle is crucial for dynamic programming and greedy algorithms. If a problem doesn't have optimal substructure, these approaches are unlikely to produce the correct solution.

*   **Importance in Greedy Algorithms:** The Optimality Principle is a *necessary* condition for greedy algorithms to work correctly. If a problem has optimal substructure, it *might* be solvable by a greedy algorithm. However, the presence of optimal substructure alone does *not guarantee* that a greedy algorithm will always find the optimal solution.  We also need to demonstrate that a "greedy choice" at each step, combined with the optimal solution to the remaining subproblem, leads to a global optimal solution.

### 2.  Optimality Principle and the Greedy Strategy

*   **Greedy Approach:** Greedy algorithms make the locally optimal choice at each step, hoping to find the global optimum.  They proceed in a top-down manner.

*   **Connection to Optimality Principle:**  For a greedy algorithm to guarantee an optimal solution, the problem must have the following two properties in addition to optimal substructure:

    *   **Optimal Substructure:**  An optimal solution to the problem contains optimal solutions to the subproblems.
    *   **Greedy Choice Property:** A locally optimal choice (the "greedy choice") at each step leads to a globally optimal solution, when combined with the optimal solution to the remaining subproblem. This property requires proving that at each step, the greedy choice is part of an optimal solution.

*   **How it Works:**
    1.  Prove the Optimality Principle: Show that any optimal solution contains optimal solutions to its subproblems.
    2.  Prove the Greedy Choice Property:  Show that there is always an optimal solution that includes the greedy choice. This is often done by arguing that if an optimal solution does *not* include the greedy choice, we can modify it to include the greedy choice without making the solution worse (and potentially making it better).
    3.  Iterate:  After making a greedy choice, the original problem is reduced to a smaller subproblem. Repeat steps 1 and 2 on the subproblem.

### 3. Identifying Problems with the Optimality Principle

*   **Examples of Problems with Optimality Principle (Suitable for Greedy):**

    *   **Activity Selection Problem:** Select the maximum number of compatible activities. An optimal solution can be built by choosing the activity that finishes earliest and then recursively solving the subproblem of selecting compatible activities that start after the chosen activity finishes.
    *   **Fractional Knapsack Problem:** Maximize the value of items placed in a knapsack, where you can take fractions of items.  Sorting the items by value-to-weight ratio and greedily taking as much of the highest-ratio item as possible demonstrates the optimality principle.
    *   **Dijkstra's Algorithm (Single-Source Shortest Paths):**  The shortest path from a source node to a destination node contains the shortest paths to all intermediate nodes along that path.

*   **Examples of Problems WITHOUT the Optimality Principle (Greedy FAILS):**

    *   **0-1 Knapsack Problem:** Maximize the value of items placed in a knapsack, where you can only take whole items (no fractions). Greedy algorithms that sort by value or value-to-weight ratio do *not* guarantee an optimal solution. (Dynamic Programming is required).
    *   **Longest Path in a Graph:**  The longest path between two nodes does *not* necessarily contain the longest paths between intermediate nodes.
    *   **Making Change with Arbitrary Coin Denominations:** Consider coins with denominations {1, 3, 4} and a target sum of 6. A greedy algorithm (choosing the largest coin first) would choose 4 + 1 + 1, using three coins. However, the optimal solution is 3 + 3, using only two coins.

*   **How to Check for Optimality Principle:**

    1.  **Think about Subproblems:** Can you break the problem down into smaller, self-similar subproblems?
    2.  **Consider an Optimal Solution:** Imagine you have a solution that is provably optimal.
    3.  **Examine Subproblems in the Solution:** Does that optimal solution contain within it optimal solutions to the subproblems it is composed of? If so, the Optimality Principle *might* hold.

### 4. Limitations of the Greedy Strategy Even with Optimality Principle

*   **Not All Problems are "Greedy Solvable":**  Just because a problem has optimal substructure doesn't mean a greedy algorithm will work. The "Greedy Choice Property" must *also* be satisfied.

*   **Proof of Optimality is Crucial:** Even if a greedy algorithm seems to work on small examples, you *must* prove that it produces an optimal solution for all possible inputs. This proof usually involves demonstrating both optimal substructure and the greedy choice property.

*   **Local vs. Global Optimum:** Greedy algorithms are often susceptible to getting stuck in local optima. Even if a choice seems best in the short term, it may prevent the algorithm from finding the best overall solution.

*   **Counter-Examples:** If you suspect a greedy algorithm might be incorrect, try to construct a specific input (a counter-example) where the greedy algorithm fails to produce an optimal solution.  Finding even one counter-example disproves the correctness of the greedy approach.

### 5. Examples

**Example 1: Activity Selection Problem**

*   **Problem:** Given a set of activities with start and finish times, select the maximum number of non-overlapping activities.

*   **Optimality Principle:** Consider an optimal solution *S* to the activity selection problem. Let *a<sub>k</sub>* be the activity in *S* that finishes earliest. Removing *a<sub>k</sub>* from *S* leaves a set of activities that are also compatible and form an optimal solution to the subproblem of selecting compatible activities that start after the finish time of *a<sub>k</sub>*.

*   **Greedy Choice:**  Choosing the activity with the earliest finish time.

*   **Why it Works:**  You can prove that there always exists an optimal solution that includes the activity with the earliest finish time.  If your current optimal solution *doesn't* include this activity, you can replace the first activity in your optimal solution with the earliest finishing activity without decreasing the number of selected activities.

**Example 2:  Making Change (US Coin Denominations)**

*   **Problem:** Given a set of coin denominations (e.g., {1, 5, 10, 25}) and a target amount, find the minimum number of coins needed to make change.

*   **Optimality Principle:**  Consider an optimal solution to making change for amount *A*.  It includes some coin *c*.  Removing *c* leaves an optimal solution to making change for amount *A - c*.

*   **Greedy Choice:** Choose the largest coin denomination that is less than or equal to the remaining amount.

*   **Why it Works (for US Coins):** This greedy approach works for the standard US coin denominations {1, 5, 10, 25}.  The structure of these denominations allows the greedy choice to always lead to an optimal solution.

*   **Why it FAILS (for Arbitrary Denominations):** As mentioned previously, the denominations {1, 3, 4} and a target of 6 provide a counter-example. The greedy solution is 4 + 1 + 1, while the optimal solution is 3 + 3.

### 6. Practice Questions/Exercises

**Question 1:**

*   **Problem:** Given the following activities with their start and finish times, what activities would be selected using a greedy algorithm to maximize the number of compatible activities?  Show your steps.
    *   A: (1, 4)
    *   B: (3, 5)
    *   C: (0, 6)
    *   D: (5, 7)
    *   E: (3, 9)
    *   F: (5, 9)
    *   G: (6, 10)
    *   H: (8, 11)

*   **Answer:**

    1.  Sort by finish time: A(1, 4), B(3, 5), C(0, 6), D(5, 7), F(5, 9), E(3, 9), G(6, 10), H(8, 11)
    2.  Select A(1, 4)
    3.  Activities that start after 4: D(5, 7), F(5, 9), G(6, 10), H(8, 11)
    4.  Select D(5, 7)
    5.  Activities that start after 7: H(8, 11)
    6.  Select H(8, 11)
    7.  **Solution:** A, D, H

**Question 2:**

*   **Problem:**  The Minimum Spanning Tree (MST) problem can be solved using Greedy algorithms (Prim's and Kruskal's). Explain how the Optimality Principle applies to MST.

*   **Answer:** In the Minimum Spanning Tree (MST) problem, the goal is to find a subset of the edges of a connected, weighted graph that connects all the vertices together, without any cycles and with the minimum possible total edge weight. The optimality principle applies to MST in the following way:

    *   **Optimal Substructure:**  If *T* is a minimum spanning tree of graph *G*, and we remove an edge *e* from *T*, we are left with two connected components.  Let *G<sub>1</sub>* and *G<sub>2</sub>* be the subgraphs of *G* induced by the vertices in these two components. Then, the edges of *T* in *G<sub>1</sub>* form a minimum spanning tree of *G<sub>1</sub>*, and the edges of *T* in *G<sub>2</sub>* form a minimum spanning tree of *G<sub>2</sub>*. In other words, the optimal solution (MST of G) contains optimal solutions to subproblems (MSTs of G1 and G2).

**Question 3:**

*   **Problem:**  Consider the problem of making change for $0.67 using US coins.  Show how the greedy algorithm works, and explain why it produces the optimal solution in this case.

*   **Answer:**

    1.  **Target:** $0.67
    2.  **Greedy Choice:** Largest coin <= remaining amount.
    3.  Choose a quarter (25 cents): Remaining = $0.42
    4.  Choose a quarter (25 cents): Remaining = $0.17
    5.  Choose a dime (10 cents): Remaining = $0.07
    6.  Choose a nickel (5 cents): Remaining = $0.02
    7.  Choose a penny (1 cent): Remaining = $0.01
    8.  Choose a penny (1 cent): Remaining = $0.00
    9.  **Solution:** 2 Quarters, 1 Dime, 1 Nickel, 2 Pennies (Total 6 coins).

    *   **Why it's optimal:** Because of the denominations used in the US, no other combination of coins can produce $0.67 using fewer than 6 coins. The greedy algorithm works because, at each step, choosing the largest denomination minimizes the number of coins needed to reach the target.  The structure of the US coin system makes this greedy choice always safe.

### 7. Important Points to Remember

*   The Optimality Principle (Optimal Substructure) is a *necessary* condition for greedy algorithms to work correctly, but not sufficient.
*   You MUST prove both the Optimality Principle *and* the Greedy Choice Property for your greedy algorithm to be correct.
*   Greedy algorithms make locally optimal choices, hoping to find a globally optimal solution.
*   Counter-examples can disprove a greedy algorithm's correctness.
*   Be careful when dealing with problems that seem "obviously" greedy. Always consider edge cases and try to formally prove the correctness of your algorithm.

This detailed study guide should help you understand the Optimality Principle and its role in the Greedy Strategy. Good luck!
