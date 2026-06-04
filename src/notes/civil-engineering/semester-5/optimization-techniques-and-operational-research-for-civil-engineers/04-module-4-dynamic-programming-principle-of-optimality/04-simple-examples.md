---
title: "simple examples"
subject: "OPTIMIZATION TECHNIQUES AND OPERATIONAL RESEARCH FOR CIVIL ENGINEERS"
module: "Module 4: Dynamic Programming: Principle of optimality"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810fb4"
status: "completed"
scrapedAt: "2026-05-20T18:50:50.980Z"
---
# Module 4: Dynamic Programming - Principle of Optimality

## Introduction to Dynamic Programming

Dynamic programming (DP) is a powerful algorithmic paradigm that solves complex problems by breaking them down into simpler subproblems. It's particularly useful for problems exhibiting **optimal substructure** and **overlapping subproblems**.

**Key Concepts:**

*   **Optimal Substructure:** A problem possesses optimal substructure if the optimal solution to the overall problem can be constructed from optimal solutions to its subproblems.
*   **Overlapping Subproblems:** A problem has overlapping subproblems if the same subproblems are encountered multiple times during the recursive computation of the solution.

## The Principle of Optimality

Formulated by Richard Bellman, the **Principle of Optimality** is the cornerstone of dynamic programming. It states:

> "An optimal policy has the property that whatever the initial state and initial decision are, the remaining decisions must constitute an optimal policy with regard to the state resulting from the first decision."

In simpler terms: If you have an optimal solution to a problem, then any sub-solution within that optimal solution must also be an optimal solution for its corresponding subproblem.

**Implication for DP:** This principle allows us to build up the optimal solution to a larger problem by optimally solving smaller subproblems. We don't need to re-solve subproblems that have already been solved.

## Simple Examples of Dynamic Programming

Let's explore some classic examples to illustrate the Principle of Optimality and how DP is applied.

### Example 1: Shortest Path in a Directed Acyclic Graph (DAG)

**Problem:** Find the shortest path from a source node to a destination node in a directed acyclic graph (DAG) where edge weights represent costs (e.g., construction time, material cost).

**Why DP is suitable:**
*   **Optimal Substructure:** The shortest path from node A to node Z must pass through some intermediate node B. The portion of the shortest path from A to B must be the shortest path from A to B.
*   **Overlapping Subproblems:** When calculating the shortest path to a node, we might consider multiple incoming edges. The shortest path to the predecessor node of an incoming edge will be a subproblem that might be encountered multiple times if that predecessor has multiple outgoing edges.

**Applying the Principle of Optimality:**

Let $D(v)$ be the shortest distance from the source node (S) to node $v$.
To find $D(v)$, we consider all incoming edges to $v$. If $u$ is a predecessor of $v$ with an edge of weight $w(u, v)$, then the shortest path to $v$ through $u$ is $D(u) + w(u, v)$.

The Principle of Optimality tells us that to find the shortest path to $v$, we must have already found the shortest path to all its predecessors $u$.

Therefore, the recurrence relation is:
$D(v) = \min_{u \text{ is a predecessor of } v} \{D(u) + w(u, v)\}$

**Base Case:** $D(S) = 0$ for the source node S.

**Steps:**
1.  **Initialization:** Initialize distances to all nodes as infinity, except for the source node, which is 0.
2.  **Topological Sort:** Since it's a DAG, we can process nodes in a topological order. This ensures that when we calculate $D(v)$, we have already computed $D(u)$ for all its predecessors $u$.
3.  **Iterative Calculation:** For each node $v$ in topological order, update $D(v)$ using the recurrence relation by considering all incoming edges.

**Example Scenario (Civil Engineering Context):**
Imagine planning a pipeline route. Nodes represent junctions or potential stations, and edges represent possible pipeline segments with associated costs (e.g., excavation difficulty, pipe material cost). We want to find the cheapest route from a starting point (source) to a delivery point (destination).

**Diagram:**

```
      S ----(2)----> A ----(3)----> C
      |             / \             |
      |            /   \            |
      (1)         (1)   (2)         (4)
      |          /       \          |
      v         v         v         v
      B ----(5)----> D ----(1)----> Z
```

**Solution using DP:**

*   $D(S) = 0$
*   **Process A:** Predecessor S. $D(A) = D(S) + w(S, A) = 0 + 2 = 2$.
*   **Process B:** Predecessor S. $D(B) = D(S) + w(S, B) = 0 + 1 = 1$.
*   **Process C:** Predecessor A. $D(C) = D(A) + w(A, C) = 2 + 3 = 5$.
*   **Process D:** Predecessors A and B.
    *   Via A: $D(A) + w(A, D) = 2 + 1 = 3$
    *   Via B: $D(B) + w(B, D) = 1 + 5 = 6$
    *   $D(D) = \min(3, 6) = 3$.
*   **Process Z:** Predecessors C and D.
    *   Via C: $D(C) + w(C, Z) = 5 + 4 = 9$
    *   Via D: $D(D) + w(D, Z) = 3 + 1 = 4$
    *   $D(Z) = \min(9, 4) = 4$.

The shortest path to Z has a cost of 4. Tracing back, we see D comes from A, and A comes from S. So the path is S -> A -> D -> Z.

### Example 2: Knapsack Problem (0/1 Knapsack)

**Problem:** Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible. In the 0/1 Knapsack, you can either take an item entirely or not at all.

**Why DP is suitable:**
*   **Optimal Substructure:** The optimal solution for filling a knapsack of capacity $W$ with $n$ items includes an optimal solution for filling a knapsack of smaller capacity with $n-1$ items.
*   **Overlapping Subproblems:** When deciding whether to include an item, we might face subproblems of the same knapsack capacity but with a different set of remaining items.

**Applying the Principle of Optimality:**

Let $V(i, w)$ be the maximum value that can be obtained using the first $i$ items with a knapsack capacity of $w$.

Consider the $i$-th item:
1.  **If we do NOT include the $i$-th item:** The maximum value is the same as the maximum value obtained using the first $i-1$ items with capacity $w$. So, $V(i, w) = V(i-1, w)$.
2.  **If we DO include the $i$-th item:** This is only possible if its weight $w_i$ is less than or equal to the current capacity $w$. If we include it, we gain its value $v_i$, and the remaining capacity is $w - w_i$. The problem reduces to finding the maximum value using the first $i-1$ items with this reduced capacity. So, $V(i, w) = v_i + V(i-1, w - w_i)$.

The Principle of Optimality states that the decision to include or not include the $i$-th item, assuming it leads to an optimal solution for $V(i, w)$, implies that the subsequent choice (what to do with the remaining items and capacity) must also be optimal.

Therefore, the recurrence relation is:
$V(i, w) = \begin{cases} V(i-1, w) & \text{if } w_i > w \\ \max(V(i-1, w), v_i + V(i-1, w - w_i)) & \text{if } w_i \le w \end{cases}$

**Base Cases:**
*   $V(0, w) = 0$ for all $w$ (no items, no value).
*   $V(i, 0) = 0$ for all $i$ (knapsack capacity is zero, no value).

**Steps:**
1.  Create a DP table (2D array) of size $(n+1) \times (W+1)$, where $n$ is the number of items and $W$ is the knapsack capacity.
2.  Initialize the first row and first column with zeros.
3.  Fill the table row by row, column by column, using the recurrence relation.
4.  The maximum value will be in $V(n, W)$.

**Example Scenario (Civil Engineering Context):**
Imagine selecting a set of construction equipment for a project with a limited budget (knapsack capacity). Each equipment type has a cost (weight) and a benefit/productivity value (value). We want to maximize the overall productivity within the budget.

**Example:**
Items:
*   Item 1: weight = 10, value = 60
*   Item 2: weight = 20, value = 100
*   Item 3: weight = 30, value = 120
Knapsack Capacity $W = 50$.

**DP Table Calculation:**

| i\w | 0 | 10 | 20 | 30 | 40 | 50 |
| :-- | :-: | :-: | :-: | :-: | :-: | :-: |
| **0** | 0 | 0 | 0 | 0 | 0 | 0 |
| **1** (w=10, v=60) | 0 | 60 | 60 | 60 | 60 | 60 |
| **2** (w=20, v=100) | 0 | 60 | 100 | 160 (60+100) | 160 | 160 |
| **3** (w=30, v=120) | 0 | 60 | 100 | 160 | 220 (60+160) | 280 (100+160 or 120+160) |

Let's break down $V(3, 50)$:
Item 3: weight = 30, value = 120. Capacity = 50.
*   Option 1 (Don't include item 3): $V(2, 50) = 160$.
*   Option 2 (Include item 3): $v_3 + V(2, 50 - w_3) = 120 + V(2, 50 - 30) = 120 + V(2, 20)$.
    *   $V(2, 20)$ from the table is 100.
    *   So, $120 + 100 = 220$.
*   $V(3, 50) = \max(160, 220) = 220$.

Wait, there was a mistake in the manual trace for V(3,50). Let's re-evaluate:
$V(3, 50) = \max(V(2, 50), v_3 + V(2, 50-w_3))$
$V(3, 50) = \max(V(2, 50), 120 + V(2, 20))$
$V(3, 50) = \max(160, 120 + 100)$
$V(3, 50) = \max(160, 220) = 220$.

The optimal selection is Item 1 (cost 10, value 60) and Item 3 (cost 30, value 120), total cost 40, total value 180.

Let's re-check the table:
$V(1, 10) = 60$
$V(1, 20) = 60$
$V(1, 30) = 60$
$V(1, 40) = 60$
$V(1, 50) = 60$

$V(2, 10) = V(1, 10) = 60$
$V(2, 20) = \max(V(1, 20), v_2 + V(1, 20-w_2)) = \max(60, 100 + V(1, 0)) = \max(60, 100+0) = 100$
$V(2, 30) = \max(V(1, 30), v_2 + V(1, 30-w_2)) = \max(60, 100 + V(1, 10)) = \max(60, 100+60) = 160$
$V(2, 40) = \max(V(1, 40), v_2 + V(1, 40-w_2)) = \max(60, 100 + V(1, 20)) = \max(60, 100+60) = 160$
$V(2, 50) = \max(V(1, 50), v_2 + V(1, 50-w_2)) = \max(60, 100 + V(1, 30)) = \max(60, 100+60) = 160$

$V(3, 10) = V(2, 10) = 60$
$V(3, 20) = V(2, 20) = 100$
$V(3, 30) = \max(V(2, 30), v_3 + V(2, 30-w_3)) = \max(160, 120 + V(2, 0)) = \max(160, 120+0) = 160$
$V(3, 40) = \max(V(2, 40), v_3 + V(2, 40-w_3)) = \max(160, 120 + V(2, 10)) = \max(160, 120+60) = 180$
$V(3, 50) = \max(V(2, 50), v_3 + V(2, 50-w_3)) = \max(160, 120 + V(2, 20)) = \max(160, 120+100) = 220$

Corrected DP Table:

| i\w | 0 | 10 | 20 | 30 | 40 | 50 |
| :-- | :-: | :-: | :-: | :-: | :-: | :-: |
| **0** | 0 | 0 | 0 | 0 | 0 | 0 |
| **1** (w=10, v=60) | 0 | 60 | 60 | 60 | 60 | 60 |
| **2** (w=20, v=100) | 0 | 60 | 100 | 160 | 160 | 160 |
| **3** (w=30, v=120) | 0 | 60 | 100 | 160 | 180 | 220 |

The maximum value is 220, obtained by selecting Item 2 (cost 20, value 100) and Item 3 (cost 30, value 120). Total cost = 50, Total value = 220.

### Example 3: Fibonacci Sequence

**Problem:** Calculate the $n$-th Fibonacci number. The sequence is defined as $F(0) = 0$, $F(1) = 1$, and $F(n) = F(n-1) + F(n-2)$ for $n > 1$.

**Why DP is suitable:**
*   **Optimal Substructure:** $F(n)$ is directly defined in terms of $F(n-1)$ and $F(n-2)$.
*   **Overlapping Subproblems:** A naive recursive solution to calculate $F(n)$ will repeatedly calculate the same Fibonacci numbers. For example, $F(5)$ requires $F(4)$ and $F(3)$. $F(4)$ requires $F(3)$ and $F(2)$. Notice $F(3)$ is computed twice. This redundancy grows exponentially.

**Applying the Principle of Optimality:**
The Principle of Optimality is implicitly used here. The optimal way to compute $F(n)$ is by optimally computing $F(n-1)$ and $F(n-2)$ and summing them.

**DP Approaches:**

1.  **Memoization (Top-Down):**
    *   Store computed Fibonacci numbers in an array (memo).
    *   Before computing $F(k)$, check if it's already in the memo. If yes, return the stored value.
    *   Otherwise, compute $F(k)$ recursively and store it in the memo before returning.

    ```python
    memo = {}
    def fib_memo(n):
        if n in memo:
            return memo[n]
        if n <= 1:
            return n
        result = fib_memo(n-1) + fib_memo(n-2)
        memo[n] = result
        return result
    ```

2.  **Tabulation (Bottom-Up):**
    *   Build up the solution from the base cases.
    *   Create an array `dp` of size $n+1$.
    *   Initialize `dp[0] = 0` and `dp[1] = 1`.
    *   Iterate from $i = 2$ to $n$, calculating `dp[i] = dp[i-1] + dp[i-2]`.

    ```python
    def fib_tab(n):
        if n <= 1:
            return n
        dp = [0] * (n + 1)
        dp[0] = 0
        dp[1] = 1
        for i in range(2, n + 1):
            dp[i] = dp[i-1] + dp[i-2]
        return dp[n]
    ```

**Example Scenario (Civil Engineering Context):**
While not a direct application, the concept of building up a solution from simpler cases is fundamental. For instance, calculating the total stress on a structural element might involve summing stresses from individual components, where each component's stress is calculated based on simpler load conditions.

### Example 4: Matrix Chain Multiplication (Conceptual)

**Problem:** Given a sequence of matrices to be multiplied, determine the most efficient way to parenthesize the product to minimize the total number of scalar multiplications.

**Why DP is suitable:**
*   **Optimal Substructure:** The optimal way to multiply a chain of matrices $A_i \dots A_j$ involves finding an optimal split point $k$ ($i \le k < j$) such that the product is computed as $(A_i \dots A_k)(A_{k+1} \dots A_j)$, and the sub-chains $A_i \dots A_k$ and $A_{k+1} \dots A_j$ are multiplied optimally.
*   **Overlapping Subproblems:** The problem of finding the optimal way to multiply a sub-chain of matrices (e.g., $A_i \dots A_j$) can be encountered multiple times when considering different parenthesizations of a larger chain.

**Applying the Principle of Optimality:**
If the optimal parenthesization of $A_i \dots A_j$ splits at $k$, then the parenthesizations of $A_i \dots A_k$ and $A_{k+1} \dots A_j$ must themselves be optimal.

**Recurrence Relation (Conceptual):**
Let $m[i, j]$ be the minimum number of scalar multiplications needed to compute the product $A_i A_{i+1} \dots A_j$.
$m[i, j] = \min_{i \le k < j} \{ m[i, k] + m[k+1, j] + p_{i-1}p_k p_j \}$
where $p_x$ are dimensions of the matrices ($A_i$ has dimensions $p_{i-1} \times p_i$).

**Example Scenario (Civil Engineering Context):**
Consider a complex project involving multiple stages of design, analysis, and construction. Each stage might have different computational costs or resource requirements. If these stages can be performed in different orders or combined in sub-groups, finding the most efficient sequence of operations to minimize overall project time or cost could be modeled using DP, conceptually similar to matrix chain multiplication.

## Key Takeaways and Important Points to Remember

*   **Principle of Optimality is Key:** Always ensure that your problem exhibits optimal substructure. The solution to the whole problem must be composed of optimal solutions to its subproblems.
*   **Identify Subproblems:** Clearly define what constitutes a subproblem.
*   **Formulate Recurrence Relation:** This is the heart of DP. It expresses the solution to a larger problem in terms of solutions to smaller, overlapping subproblems.
*   **Base Cases are Crucial:** Properly define the simplest cases of the problem that can be solved directly.
*   **Two Main Approaches:**
    *   **Memoization (Top-Down):** Recursive approach with caching of results. Good for intuition but can have overhead from recursion.
    *   **Tabulation (Bottom-Up):** Iterative approach, building solutions from base cases up. Generally more efficient in terms of memory and stack usage.
*   **State Definition:** For tabular methods, define the states clearly. In the knapsack example, the state was $(i, w)$ representing the maximum value using the first $i$ items with capacity $w$.
*   **Civil Engineering Applications:** DP is applicable in areas like:
    *   **Project Scheduling:** Optimizing task sequences, resource allocation.
    *   **Network Design:** Finding shortest/cheapest routes for infrastructure (roads, pipelines, power lines).
    *   **Resource Management:** Allocating limited resources (materials, equipment, budget) to maximize benefit.
    *   **Structural Optimization:** Optimizing the design of structures to minimize weight or cost while meeting performance criteria.

## Practice Questions and Exercises

1.  **Shortest Path:** Consider a DAG with the following structure and edge weights:
    *   S -> A (weight 3)
    *   S -> B (weight 2)
    *   A -> C (weight 1)
    *   A -> D (weight 4)
    *   B -> D (weight 2)
    *   C -> E (weight 5)
    *   D -> E (weight 1)
    Find the shortest path from S to E using dynamic programming.

    **Answer:**
    *   $D(S) = 0$
    *   $D(A) = D(S) + w(S, A) = 0 + 3 = 3$
    *   $D(B) = D(S) + w(S, B) = 0 + 2 = 2$
    *   $D(C) = D(A) + w(A, C) = 3 + 1 = 4$
    *   $D(D) = \min(D(A) + w(A, D), D(B) + w(B, D)) = \min(3 + 4, 2 + 2) = \min(7, 4) = 4$
    *   $D(E) = D(C) + w(C, E) = 4 + 5 = 9$. (Wait, D is also a predecessor to E. This is where DP shines)
    *   $D(E) = \min(D(C) + w(C, E), D(D) + w(D, E)) = \min(4 + 5, 4 + 1) = \min(9, 5) = 5$.
    Shortest path from S to E is 5. Path: S -> B -> D -> E.

2.  **Fibonacci Sequence (Tabulation):** Calculate the 7th Fibonacci number using the tabulation (bottom-up) approach.

    **Answer:**
    *   $F(0) = 0$
    *   $F(1) = 1$
    *   $F(2) = F(1) + F(0) = 1 + 0 = 1$
    *   $F(3) = F(2) + F(1) = 1 + 1 = 2$
    *   $F(4) = F(3) + F(2) = 2 + 1 = 3$
    *   $F(5) = F(4) + F(3) = 3 + 2 = 5$
    *   $F(6) = F(5) + F(4) = 5 + 3 = 8$
    *   $F(7) = F(6) + F(5) = 8 + 5 = 13$
    The 7th Fibonacci number is 13.

3.  **Knapsack Problem (0/1):** You are selecting equipment for a project. You have a budget of $60$. The available equipment is:
    *   Equipment A: Cost = $20$, Value = $60$
    *   Equipment B: Cost = $30$, Value = $80$
    *   Equipment C: Cost = $40$, Value = $100$
    What is the maximum value you can achieve within your budget using dynamic programming?

    **Answer:**
    Knapsack Capacity $W = 60$.
    Items:
    *   Item 1: w=20, v=60
    *   Item 2: w=30, v=80
    *   Item 3: w=40, v=100

    DP Table $(n+1) \times (W+1)$: $4 \times 61$

    Let's fill it partially:
    $V(0, w) = 0$
    $V(i, 0) = 0$

    $V(1, w)$:
    $V(1, 20) = 60$, $V(1, 30) = 60$, $V(1, 40) = 60$, $V(1, 50) = 60$, $V(1, 60) = 60$

    $V(2, w)$:
    $V(2, 20) = V(1, 20) = 60$
    $V(2, 30) = \max(V(1, 30), v_2 + V(1, 30-w_2)) = \max(60, 80 + V(1, 0)) = \max(60, 80) = 80$
    $V(2, 40) = \max(V(1, 40), v_2 + V(1, 40-w_2)) = \max(60, 80 + V(1, 10)) = \max(60, 80+0) = 80$
    $V(2, 50) = \max(V(1, 50), v_2 + V(1, 50-w_2)) = \max(60, 80 + V(1, 20)) = \max(60, 80+60) = 140$
    $V(2, 60) = \max(V(1, 60), v_2 + V(1, 60-w_2)) = \max(60, 80 + V(1, 30)) = \max(60, 80+60) = 140$

    $V(3, w)$:
    $V(3, 20) = V(2, 20) = 60$
    $V(3, 30) = V(2, 30) = 80$
    $V(3, 40) = \max(V(2, 40), v_3 + V(2, 40-w_3)) = \max(80, 100 + V(2, 0)) = \max(80, 100) = 100$
    $V(3, 50) = \max(V(2, 50), v_3 + V(2, 50-w_3)) = \max(140, 100 + V(2, 10)) = \max(140, 100+0) = 140$
    $V(3, 60) = \max(V(2, 60), v_3 + V(2, 60-w_3)) = \max(140, 100 + V(2, 20)) = \max(140, 100+60) = 160$

    The maximum value is 160, achieved by selecting Equipment A (cost 20, value 60) and Equipment C (cost 40, value 100). Total cost = 60, Total value = 160.

## Conclusion

Dynamic programming, guided by the Principle of Optimality, provides a systematic way to solve optimization problems that can be decomposed into overlapping subproblems. By storing and reusing solutions to these subproblems, DP avoids redundant computations, leading to efficient algorithms. Understanding these principles is crucial for tackling complex engineering challenges in optimization.
