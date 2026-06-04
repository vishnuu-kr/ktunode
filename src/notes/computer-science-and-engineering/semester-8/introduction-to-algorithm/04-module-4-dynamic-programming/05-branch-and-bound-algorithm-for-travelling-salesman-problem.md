---
title: "Branch and Bound Algorithm for Travelling Salesman Problem"
subject: "INTRODUCTION TO ALGORITHM"
module: "Module 4: Dynamic Programming "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cbdd"
status: "completed"
scrapedAt: "2026-05-20T17:25:22.927Z"
---
# Introduction to Algorithms

## Module 4: Dynamic Programming

### Topic: Branch and Bound Algorithm for Travelling Salesman Problem

---

### Learning Outcomes:

By the end of this topic, you will be able to:

1.  **Understand the core idea of Branch and Bound (B&B) and its applicability to optimization problems.**
2.  **Explain how the Travelling Salesman Problem (TSP) can be formulated as an optimization problem.**
3.  **Describe the components of a Branch and Bound algorithm for TSP: branching, bounding, and pruning.**
4.  **Illustrate the process of exploring the state-space tree in B&B for TSP.**
5.  **Analyze the effectiveness and limitations of B&B for solving TSP.**

---

### 1. Introduction to Branch and Bound (B&B)

**Key Concepts:**

*   **Optimization Problem:** A problem where the goal is to find the best solution (minimum or maximum) among a set of feasible solutions.
*   **State-Space Tree:** A tree structure that represents all possible solutions to a problem. Each node in the tree corresponds to a partial solution.
*   **Branching:** The process of dividing a problem (or a partial solution) into smaller subproblems. In the context of a state-space tree, this means expanding a node to create its children.
*   **Bounding:** The process of calculating a lower bound (for minimization problems) or an upper bound (for maximization problems) for the cost of any solution that can be reached from a particular node in the state-space tree.
*   **Pruning:** The process of discarding a subtree from further consideration if its bound indicates that it cannot lead to a better solution than the best one found so far.

**Core Idea:**

Branch and Bound is a systematic search algorithm that explores the state-space tree of an optimization problem. It uses bounding functions to estimate the best possible outcome achievable from a given partial solution. If the bound for a subtree is worse than the best complete solution found so far, that subtree is "pruned," significantly reducing the search space compared to brute-force enumeration.

**When is B&B useful?**

B&B is particularly effective for NP-hard combinatorial optimization problems where brute-force enumeration is computationally infeasible. It aims to find the optimal solution by intelligently searching the solution space.

---

### 2. The Travelling Salesman Problem (TSP)

**Description:**

Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city exactly once and returns to the origin city?

**Formulation as an Optimization Problem:**

*   **Objective:** Minimize the total tour cost (sum of distances of visited edges).
*   **Constraints:**
    *   Each city must be visited exactly once.
    *   The tour must start and end at the same city.

**Example:**

Consider 4 cities (A, B, C, D) with the following distances:

| From \ To | A | B | C | D |
| :-------- | :-: | :-: | :-: | :-: |
| **A**     | - | 10 | 15 | 20 |
| **B**     | 10 | - | 35 | 25 |
| **C**     | 15 | 35 | - | 30 |
| **D**     | 20 | 25 | 30 | - |

A valid tour would be A -> B -> D -> C -> A. The cost of this tour is 10 + 25 + 30 + 15 = 80. The goal of TSP is to find the tour with the minimum cost.

---

### 3. Components of B&B for TSP

The B&B algorithm for TSP involves three key components:

#### 3.1 Branching Strategy

*   **Goal:** To explore possible tours by making decisions about which edge to take next.
*   **Common Approach:** At each node representing a partial tour, we select an unvisited city to visit next. This creates new branches in the state-space tree.
*   **State Representation:** A node in the tree typically represents a partial tour, including the current city, the path taken so far, the set of visited cities, and the cost of the partial tour.

#### 3.2 Bounding Function

*   **Goal:** To calculate a lower bound on the cost of *any* complete tour that can be formed by extending the current partial tour. This bound helps us decide if a branch is worth exploring further.
*   **Key Idea:** The lower bound must be *less than or equal to* the actual minimum cost achievable from that node. A tighter (higher) lower bound is more effective for pruning.
*   **Common Bounding Techniques for TSP:**
    1.  **Cost of Partial Tour + Minimum Edge to Unvisited Cities:**
        *   For a node representing a partial tour, the lower bound can be calculated as:
            *   `Cost of Partial Tour`
            *   `+` Sum of the minimum outgoing edge cost from each *unvisited* city to any *other unvisited* city (or the starting city if it's the last hop).
            *   `+` The minimum edge cost from the *current city* to any *unvisited* city.

    2.  **Reduced Cost Matrix (More sophisticated):**
        *   This involves transforming the distance matrix by subtracting the minimum value from each row and column. The sum of subtracted values provides a lower bound. This method is more complex but often yields tighter bounds. For this introduction, we'll focus on the simpler method.

**Example of Bounding (Simple Method):**

Let's say we have a partial tour: A -> B (cost 10).
Unvisited cities: C, D. Current city: B. Start city: A.

*   **Cost of Partial Tour:** 10
*   **Minimum edge from current city (B) to an unvisited city:**
    *   B to C: 35
    *   B to D: 25
    *   Minimum = 25 (to D)
*   **Minimum edge from unvisited cities to other unvisited cities or start:**
    *   From C:
        *   C to D: 30
        *   C to A: 15
        *   Minimum = 15 (to A)
    *   From D:
        *   D to C: 30
        *   D to A: 20
        *   Minimum = 20 (to A)
*   **Lower Bound:** 10 (partial tour) + 25 (B to D) + 15 (C to A) + 20 (D to A) = **70**

*Note:* This bounding method is simplified. A more rigorous approach would ensure that each unvisited city has an outgoing edge accounted for and that the final edge back to the start is also considered. A common heuristic for bounding is to sum the minimum two edges incident to each unvisited city and divide by 2.

#### 3.3 Pruning Strategy

*   **Goal:** To eliminate subtrees that cannot possibly contain a better solution than the best complete tour found so far.
*   **Pruning Condition:** If the lower bound of a node (representing a partial tour) is greater than or equal to the cost of the best complete tour found so far (often called the "incumbent solution" or `upper_bound`), then prune that node and its entire subtree.

**The Algorithm Flow:**

1.  **Initialization:**
    *   Set the `upper_bound` (cost of the best complete tour found so far) to infinity.
    *   Create a priority queue (or similar data structure) to store nodes to be explored, prioritizing nodes with lower bounds.
    *   Start with a root node representing no cities visited, with a lower bound calculated for the entire problem.

2.  **Exploration:**
    *   While the priority queue is not empty:
        *   Extract the node `u` with the smallest lower bound from the priority queue.
        *   **Pruning Check:** If `u.lower_bound >= upper_bound`, discard `u` and continue to the next iteration.
        *   **Complete Tour Check:** If `u` represents a complete tour:
            *   Calculate its exact cost.
            *   If this cost is less than `upper_bound`, update `upper_bound` to this new cost.
            *   Continue to the next iteration.
        *   **Branching:** If `u` is not a complete tour:
            *   Generate child nodes for `u` by extending the partial tour to each unvisited city.
            *   For each child node `v`:
                *   Calculate its lower bound.
                *   **Pruning Check (again):** If `v.lower_bound < upper_bound`, add `v` to the priority queue.

3.  **Termination:** The algorithm terminates when the priority queue is empty. The `upper_bound` at this point holds the cost of the optimal TSP tour.

---

### 4. Exploring the State-Space Tree for TSP

The state-space tree for TSP can be visualized as a tree where:

*   **Root:** Represents the starting city with no other cities visited.
*   **Level `k`:** Nodes at level `k` represent partial tours of length `k`.
*   **Branching:** From a node representing a partial tour, we branch to nodes representing the inclusion of the next unvisited city.

**Example Walkthrough (Simplified - 3 cities: A, B, C)**

Distances:
A-B: 10
A-C: 15
B-C: 20

Let's start at City A.

**Root Node (Start at A):**
*   Partial Tour: (A)
*   Cost: 0
*   Unvisited: {B, C}
*   Lower Bound Calculation:
    *   Current cost: 0
    *   Min from A to unvisited: min(A-B, A-C) = min(10, 15) = 10 (to B)
    *   Min from unvisited to start:
        *   From B: B-A (10)
        *   From C: C-A (15)
        *   We need to account for the edge *between* unvisited cities as well. A simpler bound: sum of minimum outgoing edges from unvisited cities.
        *   Min outgoing from B: min(B-A, B-C) = min(10, 20) = 10 (to A)
        *   Min outgoing from C: min(C-A, C-B) = min(15, 20) = 15 (to A)
    *   Let's use a common bounding strategy: cost of partial path + sum of min edges from unvisited nodes to *any* node not yet in the path + min edge from current node to an unvisited node.
    *   A more robust lower bound calculation for the root:
        *   Consider the reduced cost matrix. For simplicity here, let's use the sum of minimum edges from each city to any other city, divided by 2 (as each edge is counted twice).
        *   Min A: 10 (to B)
        *   Min B: 10 (to A)
        *   Min C: 15 (to A)
        *   Sum of mins: 10 + 10 + 15 = 35. Lower bound = 35 / 2 = 17.5. This is a theoretical bound.

    *   Let's stick to a more intuitive bound for the walkthrough:
        *   Current cost: 0
        *   Min edge from A to {B, C}: min(10, 15) = 10
        *   Min edge from B to {A, C}: min(10, 20) = 10
        *   Min edge from C to {A, B}: min(15, 20) = 15
        *   If we connect A to B, the next unvisited is C. From B, we must go to C. From C, we must go to A. Path: A->B->C->A. Cost: 10+20+15 = 45.
        *   If we connect A to C, the next unvisited is B. From C, we must go to B. From B, we must go to A. Path: A->C->B->A. Cost: 15+20+10 = 45.
        *   A simple bound for the root: Sum of minimum outgoing edge from each city. min(A to {B,C}) + min(B to {A,C}) + min(C to {A,B}) = 10 + 10 + 15 = 35. This is a loose bound, but acceptable for illustration.
        *   *Let's use a more standard bound: Cost of partial tour + sum of minimum edge from each unvisited city to any other unvisited city or starting city + minimum edge from current city to any unvisited city.*

        *   Root Node (A):
            *   Partial Path: (A)
            *   Cost: 0
            *   Unvisited: {B, C}
            *   Current City: A
            *   Bound = 0 + min(A to B, A to C) + min(B to A, B to C) + min(C to A, C to B)
            *   Bound = 0 + min(10, 15) + min(10, 20) + min(15, 20) = 0 + 10 + 10 + 15 = 35. (This is still a bit loose, as it doesn't properly enforce the "return to start" or unique visits between unvisited cities.)

        *   **Let's refine the bound for this small example:**
            *   Root Node (A): LB = 0 (no path yet)
            *   We need to select the first edge. Options: A->B or A->C.

**Branching on A->B:**

*   **Node 1 (A->B):**
    *   Partial Tour: (A, B)
    *   Cost: 10
    *   Unvisited: {C}
    *   Current City: B
    *   To complete the tour, we must go from B to C, then from C back to A.
    *   Exact tour cost: A->B->C->A = 10 + 20 + 15 = 45.
    *   Lower Bound: Cost of partial tour + min edge from current (B) to unvisited (C) + min edge from unvisited (C) to start (A).
    *   LB = 10 (A-B) + 20 (B-C) + 15 (C-A) = 45.
    *   Since this is a complete tour, `upper_bound` = 45.

**Branching on A->C:**

*   **Node 2 (A->C):**
    *   Partial Tour: (A, C)
    *   Cost: 15
    *   Unvisited: {B}
    *   Current City: C
    *   To complete the tour, we must go from C to B, then from B back to A.
    *   Exact tour cost: A->C->B->A = 15 + 20 + 10 = 45.
    *   Lower Bound: Cost of partial tour + min edge from current (C) to unvisited (B) + min edge from unvisited (B) to start (A).
    *   LB = 15 (A-C) + 20 (C-B) + 10 (B-A) = 45.
    *   This is also a complete tour. `upper_bound` remains 45.

**State-Space Tree Diagram:**

```
      (Root: A) [LB=0, Best=inf]
      /        \
     /          \
    /            \
(A->B) [Cost=10, LB=45]  (A->C) [Cost=15, LB=45]
  |                 |
  v                 v
(A->B->C->A)      (A->C->B->A)
[Tour Cost=45]    [Tour Cost=45]
Update Best=45    Update Best=45
```

In this very simple case, both branches lead to the optimal solution. For larger problems, the bounds would be crucial. If we had a partial tour with LB > 45, we would prune it.

**Using Priority Queue (Min-Heap based on LB):**

1.  Initialize: `upper_bound = infinity`, `PQ = [(LB_root, root_node)]`
2.  Extract `root_node` (LB=0). Not a complete tour.
3.  Generate children: `node_AB` (LB=45), `node_AC` (LB=45).
4.  Add to PQ: `PQ = [(45, node_AB), (45, node_AC)]`
5.  Extract `node_AB` (LB=45). It's a complete tour. `upper_bound = 45`.
6.  Extract `node_AC` (LB=45). It's a complete tour. `upper_bound` remains 45.
7.  PQ is empty. Algorithm terminates. Best tour cost is 45.

---

### 5. Effectiveness and Limitations of B&B for TSP

**Effectiveness:**

*   **Guarantees Optimality:** Unlike heuristic algorithms, B&B is guaranteed to find the optimal solution for TSP.
*   **Reduces Search Space:** Significantly more efficient than brute-force enumeration by pruning unpromising branches.
*   **Adaptable:** Can be adapted with different bounding functions to improve performance.

**Limitations:**

*   **NP-Hard:** Despite pruning, TSP remains NP-hard. For very large instances (hundreds or thousands of cities), the state-space tree can still be enormous, making B&B computationally expensive and potentially infeasible within practical time limits.
*   **Bounding Function Quality:** The effectiveness of B&B heavily depends on the quality (tightness) of the bounding function. A weak bound leads to less pruning and slower execution.
*   **Memory Usage:** Storing nodes in the priority queue can consume significant memory for large problems.
*   **Complexity of Bound Calculation:** Sophisticated bounding techniques can be computationally intensive themselves.

---

### 6. Important Points to Remember

*   **Branch and Bound is an exact algorithm for optimization problems.**
*   **Key components are Branching, Bounding, and Pruning.**
*   **The goal of bounding is to calculate a LOWER bound for minimization problems.**
*   **Pruning occurs when a node's lower bound is worse than the current best solution (upper bound).**
*   **The quality of the bounding function is critical for performance.**
*   **TSP is NP-hard, so B&B, while better than brute-force, can still be slow for very large instances.**
*   **A priority queue is often used to explore nodes with the most promising (lowest) bounds first.**

---

### Practice Questions/Exercises:

1.  **Concept Check:** Briefly explain the roles of branching, bounding, and pruning in the context of the Branch and Bound algorithm.
2.  **TSP Formulation:** Describe the objective and constraints for the Travelling Salesman Problem.
3.  **Bounding Example:** Consider a TSP instance with cities A, B, C, D. You are at city B, having visited A. Your partial tour is A -> B with a cost of 12. The unvisited cities are C and D. The relevant edge costs are:
    *   B to C: 20
    *   B to D: 25
    *   C to A: 15
    *   C to D: 30
    *   D to A: 20
    *   D to C: 30
    *   Using the simple bounding method (Cost of partial tour + min edge from current city to unvisited + sum of min edges from each unvisited city to any other unvisited or start city), calculate a lower bound for any complete tour extending A -> B. Assume A is the starting city.
4.  **Pruning Scenario:** Suppose you have found a complete TSP tour with a cost of 100. You are exploring a node in the state-space tree, and its calculated lower bound is 105. Should you prune this branch? Explain why or why not.
5.  **Comparison:** How does Branch and Bound differ from a greedy approach for solving TSP?

---

### Answers to Practice Questions:

1.  **Concept Check:**
    *   **Branching:** Dividing a problem into smaller subproblems or expanding a partial solution into more complete ones.
    *   **Bounding:** Calculating an estimate (lower bound for minimization) of the best possible solution achievable from a given subproblem or partial solution.
    *   **Pruning:** Eliminating subproblems or partial solutions whose bounds indicate they cannot lead to a better solution than the best one found so far.

2.  **TSP Formulation:**
    *   **Objective:** To find the shortest possible route (minimum total distance) that visits each city exactly once and returns to the starting city.
    *   **Constraints:**
        *   Each city must be visited exactly once.
        *   The tour must begin and end at the same city.

3.  **Bounding Example:**
    *   Partial Tour: A -> B
    *   Cost of Partial Tour: 12
    *   Current City: B
    *   Unvisited Cities: {C, D}
    *   Start City: A

    *   **Lower Bound Calculation:**
        *   Cost of partial tour: 12
        *   Minimum edge from current city (B) to an unvisited city: min(B->C, B->D) = min(20, 25) = 20 (to C)
        *   Minimum edge from unvisited cities to any other unvisited city or the start city:
            *   From C: min(C->D, C->A) = min(30, 15) = 15 (to A)
            *   From D: min(D->C, D->A) = min(30, 20) = 20 (to A)
        *   Lower Bound = 12 (partial tour) + 20 (B to C) + 15 (C to A) + 20 (D to A) = **67**.
        *   *(Note: This bounding method sums the minimum outgoing edge from each unvisited city. For D, the minimum edge would be to A, which is the start city. A more accurate method might consider the minimum edge from D to *any* unvisited city if we hadn't committed to the path yet. However, for the purpose of this simplified bound, this is acceptable.)*

4.  **Pruning Scenario:**
    *   Yes, you should prune this branch. The lower bound (105) is greater than the cost of the best complete tour found so far (100). This means that any complete tour that can be formed by extending this partial tour will cost at least 105, which is worse than the 100 you've already found. Therefore, there's no need to explore this branch further.

5.  **Comparison:**
    *   **Greedy Approach:** Makes locally optimal choices at each step without considering future consequences. For TSP, this might be always choosing the nearest unvisited city. It's fast but does not guarantee an optimal solution.
    *   **Branch and Bound:** Systematically explores the solution space, using bounds to prune unpromising branches. It guarantees an optimal solution but can be computationally more expensive than greedy methods, especially for large problem instances. B&B explores more options than a greedy algorithm to ensure optimality.
