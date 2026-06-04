---
title: "Analysis"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 3: Greedy Strategy "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b55d"
status: "completed"
scrapedAt: "2026-05-20T16:45:45.191Z"
---
# DESIGN AND ANALYSIS OF ALGORITHMS - MODULE 3: GREEDY STRATEGY - ANALYSIS

## Introduction

This module focuses on the Greedy Strategy, a powerful algorithmic paradigm used for solving optimization problems. This section, "Analysis," delves into how we analyze the correctness and efficiency of greedy algorithms.  We'll cover techniques for proving greedy algorithms produce optimal solutions and discuss how to analyze their time complexity.

## Learning Outcomes:

Upon completion of this topic, you should be able to:

1.  Understand the principles of greedy algorithm design and its applicability.
2.  Prove the correctness of a greedy algorithm.
3.  Analyze the time complexity of greedy algorithms.
4.  Identify problems where a greedy approach is suitable and where it is not.
5.  Apply greedy algorithms to solve real-world optimization problems.

## 1. Principles of Greedy Algorithm Design and Applicability

*   **Definition:** A greedy algorithm makes the locally optimal choice at each step, hoping to find the globally optimal solution.  It commits to a decision without considering future consequences.

*   **Greedy Choice Property:**  The most important aspect of designing a correct greedy algorithm is proving the *Greedy Choice Property*.  This property states that a globally optimal solution can be arrived at by making locally optimal (greedy) choices.  In other words, at each step, making the choice that looks best at the moment leads to an optimal solution.

*   **Optimal Substructure:** A problem exhibits optimal substructure if an optimal solution to the problem contains within it optimal solutions to subproblems. Greedy algorithms often rely on this property.

*   **Components of a Greedy Algorithm:**

    *   **Candidate Set:** A set of possible choices from which a solution is built.
    *   **Selection Function:** Chooses the best candidate to add to the solution.
    *   **Feasibility Function:** Determines if a candidate can be used to contribute to a solution.
    *   **Objective Function:** Assigns a value to a solution (e.g., maximize profit, minimize cost).
    *   **Solution Function:** Determines if a complete solution has been discovered.

*   **When to Use a Greedy Algorithm:**

    *   When the greedy choice property and optimal substructure can be proven.
    *   When an approximate solution is acceptable, even if an optimal solution is difficult to find.
    *   Problems involving optimization (e.g., maximizing profit, minimizing cost).

*   **When *Not* to Use a Greedy Algorithm:**

    *   When the greedy choice at one step might block later progress towards an optimal solution.
    *   When dependencies between choices are complex.
    *   When finding *any* solution is more important than finding the *best* solution. (Dynamic Programming or Branch and Bound might be more suitable).

## 2. Proving the Correctness of a Greedy Algorithm

Proving the correctness of a greedy algorithm is crucial because a greedy approach *doesn't always work*.  Common proof techniques include:

*   **Induction:**  Show that after each greedy choice, you are closer to an optimal solution.

    *   **Base Case:** Show that the initial greedy choice is part of an optimal solution.
    *   **Inductive Hypothesis:** Assume that after *k* greedy choices, the partial solution is part of an optimal solution.
    *   **Inductive Step:** Show that the (k+1)th greedy choice, combined with the previous *k* choices, is still part of an optimal solution.  This often involves demonstrating that swapping the greedy choice with an element in an assumed optimal solution does not worsen (and possibly improves) the solution.

*   **Exchange Argument:** Assume you have a known optimal solution that is different from the greedy solution. Show that you can transform the optimal solution, step-by-step, into the greedy solution without decreasing the objective function value. This proves that the greedy solution is also optimal.

*   **Contradiction:**  Assume that the greedy algorithm does *not* produce an optimal solution. Show that this assumption leads to a contradiction, implying the greedy solution must be optimal.

**Example: Activity Selection Problem**

*   **Problem:** Given a set of activities, each with a start and finish time, select a maximum-size set of mutually compatible activities.

*   **Greedy Approach:** Sort activities by finish time and select the earliest finishing activity that doesn't overlap with previously selected activities.

*   **Proof of Correctness (Exchange Argument):**

    1.  Let *A* be the greedy solution and *O* be any other optimal solution.
    2.  Let *a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>k</sub>* be the activities in *A*, sorted by finish time.
    3.  Let *o<sub>1</sub>, o<sub>2</sub>, ..., o<sub>m</sub>* be the activities in *O*, sorted by finish time.
    4.  We want to show that we can transform *O* into *A* without decreasing its size.
    5.  Let *i* be the smallest index where *a<sub>i</sub> != o<sub>i</sub>*.
    6.  Since *A* is a greedy solution, *a<sub>i</sub>* must be the activity with the earliest finish time among all activities that are compatible with *a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>i-1</sub>*.
    7.  Now consider *O' = O - {o<sub>i</sub>} + {a<sub>i</sub>}*.  This means we replace *o<sub>i</sub>* with *a<sub>i</sub>* in *O*.
    8.  Since *a<sub>i</sub>* has the earliest finish time and is compatible with *a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>i-1</sub>*, it must also be compatible with *o<sub>1</sub>, o<sub>2</sub>, ..., o<sub>i-1</sub>*. Therefore, *O'* is also a feasible solution.
    9.  The size of *O'* is the same as the size of *O*.
    10. We can repeat this process until *O* is identical to *A*. This shows that the greedy solution *A* is also an optimal solution.

## 3. Analyzing the Time Complexity of Greedy Algorithms

The time complexity of a greedy algorithm depends on:

*   **Sorting:** Many greedy algorithms involve sorting the input data first.  Common sorting algorithms and their time complexities:
    *   Merge Sort: O(n log n)
    *   Heap Sort: O(n log n)
    *   Quick Sort (average case): O(n log n)
    *   Quick Sort (worst case): O(n<sup>2</sup>)

*   **Selection Function:** The time complexity of selecting the next candidate.

*   **Feasibility Function:** The time complexity of checking if a candidate is feasible.

*   **Iterating through the Candidate Set:**  The number of times the selection and feasibility functions are called.

**Examples:**

*   **Kruskal's Algorithm (Minimum Spanning Tree):**

    *   Sorting edges by weight: O(E log E)
    *   Checking if adding an edge creates a cycle (using Union-Find): O(E α(V)), where α(V) is the inverse Ackermann function (practically constant).
    *   Overall complexity: O(E log E) (dominated by sorting).

*   **Dijkstra's Algorithm (Shortest Path):**

    *   Finding the vertex with the smallest distance (using a priority queue): O(log V)
    *   Relaxing edges: O(E)
    *   Overall complexity: O((V + E) log V)  (using a binary heap).  Can be improved to O(E + V log V) using a Fibonacci heap.

*   **Activity Selection:**

    *   Sorting activities by finish time: O(n log n)
    *   Selecting activities: O(n)
    *   Overall complexity: O(n log n) (dominated by sorting).

## 4. Identifying Problems Suitable (and Unsuitable) for a Greedy Approach

*   **Suitable Problems:**

    *   **Minimum Spanning Tree:** Kruskal's and Prim's algorithms.
    *   **Shortest Path:** Dijkstra's algorithm (for non-negative edge weights).
    *   **Activity Selection Problem:** As demonstrated above.
    *   **Huffman Coding:**  Building an optimal prefix code for data compression.
    *   **Fractional Knapsack Problem:** Where you can take fractions of items.

*   **Unsuitable Problems:**

    *   **0/1 Knapsack Problem:** You must take either the entire item or none of it.  A greedy approach doesn't guarantee an optimal solution. Dynamic Programming is a better choice.
    *   **Traveling Salesperson Problem (TSP):** Finding the shortest tour that visits all cities exactly once. While greedy heuristics exist, they don't guarantee optimality.  (Approximation algorithms or more complex techniques like Dynamic Programming or Branch and Bound are used.)
    *   **Longest Path Problem:**  Finding the longest path between two nodes in a graph is NP-hard and generally not solvable with a simple greedy approach.

## 5. Applying Greedy Algorithms to Solve Real-World Optimization Problems

*   **Job Scheduling:** Scheduling jobs to minimize lateness or maximize throughput.
*   **Resource Allocation:** Allocating resources (e.g., bandwidth, memory) to maximize efficiency.
*   **Network Routing:** Finding the shortest path or least congested path in a network.
*   **Data Compression:** Huffman coding is used extensively in data compression algorithms.
*   **Change Making Problem:** Making change using the fewest number of coins (works optimally in many, but not all, currency systems).

## Practice Questions/Exercises

1.  **Prove or disprove that the following greedy algorithm correctly solves the "minimum number of coins" problem for US currency (1 cent, 5 cents, 10 cents, 25 cents):**  Always choose the largest denomination coin that is less than or equal to the remaining amount.

    **Answer:**  The algorithm is correct for US currency. You can prove this using a case-based analysis or induction.  Consider any optimal solution that doesn't follow the greedy strategy.  You can always replace some coins with larger denominations without increasing the number of coins.

2.  **Consider a variant of the Activity Selection Problem where instead of maximizing the number of activities, you want to maximize the *total duration* of the selected activities.  Does the greedy approach of sorting activities by finish time still work? Why or why not?**

    **Answer:** No, sorting by finish time does *not* work in this modified problem. Consider the following example:
    *   Activity 1: Start = 0, Finish = 5, Duration = 5
    *   Activity 2: Start = 0, Finish = 2, Duration = 2
    *   Activity 3: Start = 2, Finish = 6, Duration = 4

    Sorting by finish time would select Activity 2 first. This would block Activity 3. The optimal solution is to select Activity 1, which has a duration of 5.

3.  **Describe a scenario where a greedy algorithm might produce a *good* (but not optimal) solution to the Traveling Salesperson Problem (TSP).**

    **Answer:**  One common greedy approach for TSP is the "Nearest Neighbor" algorithm.  Start at a random city, and repeatedly visit the nearest unvisited city until all cities have been visited. Then, return to the starting city.  This can produce a relatively short tour, especially if the cities are distributed fairly evenly. However, it doesn't guarantee optimality; sometimes, choosing a slightly farther city early on can lead to a much shorter overall tour.

4.  **Analyze the time complexity of Prim's algorithm for finding the Minimum Spanning Tree when implemented using an adjacency matrix representation of the graph.**

    **Answer:**
    *   Finding the minimum key vertex in the `key[]` array takes O(V) time in each iteration of the outer loop. Since the outer loop runs V times, the overall time complexity for this part is O(V<sup>2</sup>).
    *   Updating the `key[]` values for the adjacent vertices also takes O(V<sup>2</sup>) time, as we need to iterate through the adjacency matrix.
    *   Therefore, the overall time complexity of Prim's algorithm using an adjacency matrix is O(V<sup>2</sup>).

## Important Points to Remember

*   Greedy algorithms are efficient but don't always guarantee optimal solutions.
*   Proving correctness (Greedy Choice Property and Optimal Substructure) is crucial.
*   Time complexity analysis depends on the sorting algorithm and the efficiency of selection and feasibility functions.
*   Be aware of problems for which a greedy approach is unsuitable.
*   Understand the trade-offs between optimality and efficiency when choosing a greedy algorithm.
