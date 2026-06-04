---
title: "Recursive relations"
subject: "OPTIMIZATION TECHNIQUES AND OPERATIONAL RESEARCH FOR CIVIL ENGINEERS"
module: "Module 4: Dynamic Programming: Principle of optimality"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810fb2"
status: "completed"
scrapedAt: "2026-05-20T18:50:48.909Z"
---
# Module 4: Dynamic Programming - Principle of Optimality

## Topic: Recursive Relations

### Introduction to Dynamic Programming

Dynamic Programming (DP) is a powerful algorithmic technique used for solving complex problems by breaking them down into simpler, overlapping subproblems. It's particularly effective for optimization problems where the optimal solution to a problem can be constructed from the optimal solutions of its subproblems.

### The Principle of Optimality

The **Principle of Optimality**, as formulated by Richard Bellman, is the foundational concept behind dynamic programming. It states:

**"An optimal policy has the property that whatever the initial state and initial decision are, the remaining decisions must constitute an optimal policy with regard to the state resulting from the first decision."**

In simpler terms:

*   If you have an optimal solution to a larger problem, then the parts of that solution that correspond to subproblems must also be optimal solutions to those subproblems.
*   You can't have an optimal solution to the whole problem that is built upon a non-optimal solution to a subproblem.

### Recursive Relations (or Recurrence Relations)

Recursive relations are the mathematical expressions that define how the solution to a larger problem depends on the solutions to its smaller, overlapping subproblems. They are the heart of a dynamic programming algorithm.

**Key Characteristics of Recursive Relations in DP:**

1.  **Expresses the solution of a problem in terms of solutions to smaller instances of the same problem.** This "self-referential" nature is what makes them recursive.
2.  **Defines a base case or termination condition.** This is crucial to stop the recursion and provide a starting point for the calculations.
3.  **Can be solved either top-down (with memoization) or bottom-up (tabulation).**

#### Components of a Recursive Relation:

*   **State Variable(s):** These define the parameters of a subproblem. For example, in a shortest path problem, the state might be the current node.
*   **Decision Variable(s):** These represent the choices made at each step that lead to different subproblems.
*   **Objective Function:** This is what we are trying to optimize (minimize or maximize).

#### Formulating a Recursive Relation:

The general approach to formulating a recursive relation involves:

1.  **Identifying the subproblems:** What are the smaller, similar problems that make up the larger problem?
2.  **Defining the state:** How can we uniquely identify each subproblem?
3.  **Expressing the solution to a general subproblem in terms of solutions to smaller subproblems:** This is where the decision variables come into play. You consider all possible decisions at a given state and how each decision leads to a new state (a smaller subproblem).
4.  **Defining the base case(s):** What are the simplest subproblems whose solutions are known directly?

### Examples of Recursive Relations in Civil Engineering Contexts

Let's explore some common applications and how recursive relations are formulated.

#### 1. Shortest Path Problems (e.g., Route Selection for Material Delivery)

**Problem:** Finding the shortest path from a source node to a destination node in a network (e.g., road network for construction material delivery).

**Subproblems:** The shortest path from the source to any intermediate node.

**State:** The current node `i`.

**Decision:** Which outgoing edge to take from node `i`.

**Recursive Relation (Bellman-Ford like idea):**

Let $d[i]$ be the shortest distance from the source node to node `i`.

*   **Base Case:** $d[\text{source}] = 0$. For all other nodes $i \neq \text{source}$, $d[i] = \infty$.
*   **Recursive Step:** For any node `i`, the shortest path to `i` can be found by considering all incoming edges from nodes `j`.
    $d[i] = \min_{j \in \text{predecessors of } i} \{ d[j] + \text{weight}(j, i) \}$

This is the core idea behind algorithms like Bellman-Ford, which iteratively updates distances until the optimal shortest paths are found.

**Example:** Imagine finding the shortest route to deliver concrete to a construction site. The recursive relation helps determine the shortest path to each intersection (node) based on the shortest paths to previous intersections.

#### 2. Knapsack Problem (e.g., Selecting Equipment for a Project)

**Problem:** Given a knapsack with a certain capacity (e.g., maximum weight a truck can carry for equipment) and a set of items, each with a weight and a value (e.g., pieces of equipment with weight and cost savings), determine the subset of items to include in the knapsack so that the total weight is less than or equal to the capacity and the total value is as large as possible.

**Subproblems:** Finding the maximum value for a smaller capacity and a subset of items.

**State:** $f(i, w)$ represents the maximum value that can be obtained using the first `i` items with a knapsack capacity of `w`.

**Decision:** For item `i`, either include it or exclude it.

**Recursive Relation (0/1 Knapsack):**

*   **Base Case:**
    *   $f(0, w) = 0$ (If no items are available, the value is 0).
    *   $f(i, 0) = 0$ (If capacity is 0, no items can be taken, so value is 0).

*   **Recursive Step:** For item `i` with weight $w_i$ and value $v_i$:
    *   **If item `i` is excluded:** The value is the same as the maximum value obtainable using the first `i-1` items with capacity `w`. So, $f(i-1, w)$.
    *   **If item `i` is included:** This is only possible if its weight $w_i$ is less than or equal to the current capacity `w`. The value obtained is $v_i$ plus the maximum value obtainable using the first `i-1` items with the remaining capacity $w - w_i$. So, $v_i + f(i-1, w - w_i)$.

    Therefore, the recursive relation is:
    $f(i, w) = \begin{cases} f(i-1, w) & \text{if } w_i > w \quad (\text{item } i \text{ cannot be included}) \\ \max(f(i-1, w), v_i + f(i-1, w - w_i)) & \text{if } w_i \le w \quad (\text{item } i \text{ can be included}) \end{cases}$

**Example:** A construction manager needs to select a set of specialized tools to bring to a remote site. Each tool has a weight and a cost-saving associated with its use. The truck has a weight limit. The recursive relation helps find the combination of tools that maximizes cost savings without exceeding the weight limit.

#### 3. Project Scheduling (e.g., Critical Path Method - PERT/CPM)

While PERT/CPM is often solved iteratively, the underlying logic can be thought of using recursive principles to find the earliest and latest start/finish times.

**Problem:** Determine the minimum time to complete a project and identify the critical path (the sequence of activities that determines the project duration).

**Subproblems:** The earliest start/finish times for preceding activities.

**State:** For an activity `i`, its earliest start time (ES) and earliest finish time (EF).

**Recursive Relation (for Earliest Finish Time):**

Let $EF[i]$ be the earliest finish time of activity `i`.
Let $ES[i]$ be the earliest start time of activity `i`.
Let $P[i]$ be the set of immediate predecessors of activity `i`.
Let $D[i]$ be the duration of activity `i`.

*   **Base Case:** For activities with no predecessors (start of the project), $ES = 0$.
*   **Recursive Step:**
    $ES[i] = \max_{j \in P[i]} \{ EF[j] \}$
    $EF[i] = ES[i] + D[i]$

The recursive nature lies in the fact that the earliest start of an activity depends on the earliest finishes of all its preceding activities.

**Example:** Planning a construction project. The recursive relation helps determine the earliest possible completion date for each task and, consequently, the entire project, by considering the dependencies between tasks.

### Solving Recursive Relations

There are two primary approaches to solve dynamic programming problems defined by recursive relations:

#### 1. Top-Down Approach (Memoization)

*   **Concept:** Start with the original problem and recursively break it down into subproblems. Store the results of solved subproblems in a table (memo) to avoid recomputing them.
*   **How it works:**
    *   Define a recursive function that solves a subproblem.
    *   Before computing the solution for a subproblem, check if its result is already stored in the memo. If yes, return the stored result.
    *   If not, compute the result, store it in the memo, and then return it.
*   **Advantages:** Often more intuitive to implement directly from the recursive relation. Only necessary subproblems are solved.
*   **Disadvantages:** Can lead to stack overflow for very deep recursion. Overhead of function calls.

#### 2. Bottom-Up Approach (Tabulation)

*   **Concept:** Solve the smallest subproblems first and use their solutions to build up solutions to larger subproblems until the original problem is solved.
*   **How it works:**
    *   Create a table (e.g., an array or matrix) to store the solutions to subproblems.
    *   Initialize the table with the solutions to the base cases.
    *   Iterate through the subproblems in an order that ensures that when solving a subproblem, the solutions to all its smaller subproblems are already available in the table.
    *   Fill the table using the recursive relation.
*   **Advantages:** No recursion overhead, avoids stack overflow issues. Generally more efficient in terms of execution time and memory for some problems.
*   **Disadvantages:** Might solve subproblems that are not actually needed for the final solution. Can be less intuitive to derive the iteration order.

**Example of Tabulation (0/1 Knapsack):**

Let's use the knapsack example to illustrate bottom-up.
Items: (w=2, v=3), (w=3, v=4), (w=4, v=5)
Capacity: W = 5

We create a table `dp[n+1][W+1]` where `dp[i][w]` stores the max value using first `i` items with capacity `w`.

| i\w | 0 | 1 | 2 | 3 | 4 | 5 |
| :-- | :-: | :-: | :-: | :-: | :-: | :-: |
| **0** | 0 | 0 | 0 | 0 | 0 | 0 |
| **1** (w=2, v=3) | 0 | 0 | 3 | 3 | 3 | 3 |  *(dp[1][2] = max(dp[0][2], 3 + dp[0][0]) = 3)*
| **2** (w=3, v=4) | 0 | 0 | 3 | 4 | 7 | 7 |  *(dp[2][3] = max(dp[1][3], 4 + dp[1][0]) = 4; dp[2][5] = max(dp[1][5], 4 + dp[1][2]) = max(3, 4+3) = 7)*
| **3** (w=4, v=5) | 0 | 0 | 3 | 4 | 7 | 9 |  *(dp[3][4] = max(dp[2][4], 5 + dp[2][0]) = max(7, 5+0) = 7; dp[3][5] = max(dp[2][5], 5 + dp[2][1]) = max(7, 5+0) = 7. Wait, mistake. dp[3][5] = max(dp[2][5], 5 + dp[2][5-4]) = max(dp[2][5], 5 + dp[2][1]) = max(7, 5+0) = 7. Recheck: dp[3][5] = max(dp[2][5], 5 + dp[2][1]) is correct if item 3 could be taken. If dp[3][5] = max(dp[2][5], 5 + dp[2][5-4]) = max(dp[2][5], 5 + dp[2][1]). What if item 3 is taken? weight = 4, value = 5. Remaining capacity is 1. Max value for capacity 1 using previous items is dp[2][1]=0. So 5+0=5. The other option is not taking item 3, which is dp[2][5]=7. So dp[3][5]=max(7,5)=7. Let's try dp[3][6] if W=6. dp[3][6] = max(dp[2][6], 5 + dp[2][6-4]) = max(dp[2][6], 5 + dp[2][2]) = max(7, 5+3) = 8. Ah, I see the mistake in my manual trace. Let's retry the table carefully.*

**Corrected Tabulation Example (0/1 Knapsack):**
Items: (w=2, v=3), (w=3, v=4), (w=4, v=5)
Capacity: W = 5

`dp[i][w]` = max value using first `i` items with capacity `w`.

| i\w | 0 | 1 | 2 | 3 | 4 | 5 |
| :-- | :-: | :-: | :-: | :-: | :-: | :-: |
| **0** | 0 | 0 | 0 | 0 | 0 | 0 |
| **1** (w=2, v=3) | 0 | 0 | **3** | 3 | 3 | 3 |  *(dp[1][2] = max(dp[0][2], 3 + dp[0][2-2]) = max(0, 3+0) = 3)*
| **2** (w=3, v=4) | 0 | 0 | 3 | **4** | **7** | 7 |  *(dp[2][3] = max(dp[1][3], 4 + dp[1][3-3]) = max(3, 4+0) = 4)*
  *(dp[2][4] = max(dp[1][4], 4 + dp[1][4-3]) = max(3, 4+dp[1][1]) = max(3, 4+0) = 4. Wait. dp[2][4] = max(dp[1][4], 4 + dp[1][1]) -> mistake. It should be max(dp[1][4], 4 + dp[1][4-3]) -> max(dp[1][4], 4 + dp[1][1]) = max(3, 4+0)=4. NO. The rule is max(dp[i-1][w], v_i + dp[i-1][w-w_i]).*
  *Let's retrace using rule: dp[2][4] = max(dp[1][4], v2 + dp[1][4-w2]) = max(dp[1][4], 4 + dp[1][4-3]) = max(3, 4 + dp[1][1]) = max(3, 4+0) = 4. Still not 7. Where does 7 come from?*

*Ah, it's when considering item 2 (w=3, v=4) and capacity 5:*
* `dp[2][5] = max(dp[1][5], v2 + dp[1][5-w2])`
* `dp[2][5] = max(dp[1][5], 4 + dp[1][5-3])`
* `dp[2][5] = max(3, 4 + dp[1][2])`
* `dp[2][5] = max(3, 4 + 3)`
* `dp[2][5] = 7`. This is correct. This means taking items 1 (w=2, v=3) and 2 (w=3, v=4) gives total weight 5 and value 7.

| i\w | 0 | 1 | 2 | 3 | 4 | 5 |
| :-- | :-: | :-: | :-: | :-: | :-: | :-: |
| **0** | 0 | 0 | 0 | 0 | 0 | 0 |
| **1** (w=2, v=3) | 0 | 0 | **3** | 3 | 3 | 3 |
| **2** (w=3, v=4) | 0 | 0 | 3 | **4** | **4** | **7** |  *(dp[2][4] = max(dp[1][4], 4+dp[1][1]) = max(3, 4+0) = 4)*
| **3** (w=4, v=5) | 0 | 0 | 3 | 4 | **5** | **7** |  *(dp[3][4] = max(dp[2][4], 5+dp[2][0]) = max(4, 5+0) = 5)*
  *(dp[3][5] = max(dp[2][5], 5+dp[2][1]) = max(7, 5+0) = 7)*

*My manual calculation for dp[3][5] was wrong. The table is:
dp[3][5] = max(dp[2][5], 5 + dp[2][5-4]) = max(dp[2][5], 5 + dp[2][1]) = max(7, 5 + 0) = 7.
Let's reconsider the problem statement. Items: (2,3), (3,4), (4,5), Capacity 5.
Combinations:
- Item 1 (2,3): Value 3.
- Item 2 (3,4): Value 4.
- Item 3 (4,5): Value 5.
- Item 1 + 2 (2+3=5, 3+4=7): Value 7.
- Item 1 + 3 (2+4=6 > 5): Not possible.
- Item 2 + 3 (3+4=7 > 5): Not possible.

So the max value is indeed 7. My manual table was correct in the end, but the way I derived the 7 was more illustrative. The issue was not in the computation but my expectation for dp[3][4].*

**Final Table Trace:**

| i\w | 0 | 1 | 2 | 3 | 4 | 5 |
| :-- | :-: | :-: | :-: | :-: | :-: | :-: |
| **0** | 0 | 0 | 0 | 0 | 0 | 0 |
| **1** (w=2, v=3) | 0 | 0 | **3** | 3 | 3 | 3 |
| **2** (w=3, v=4) | 0 | 0 | 3 | **4** | **4** | **7** |
| **3** (w=4, v=5) | 0 | 0 | 3 | 4 | **5** | **7** |

The final answer is `dp[3][5] = 7`.

### Practice Questions

**Question 1 (Concept Identification):**
A city wants to optimize its public transportation network to minimize travel time between any two points. They model this as a graph where intersections are nodes and roads are edges with travel times as weights. Which principle of dynamic programming is most directly applied when trying to find the shortest path from a starting bus stop to all other bus stops?

**Question 2 (Recursive Relation Formulation):**
Consider a civil engineer tasked with managing excavation for a large project. The total excavation cost depends on the depth of excavation and the geological conditions at
