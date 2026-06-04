---
title: "LP- and SDP-based Approximation Algorithms for NP-Hard Problems - Linear Programming (LP) Relaxations and their Use in Approximation: Vertex Cover and Set Cover"
subject: "TOPICS IN THEORETICAL COMPUTER SCIENCE"
module: "Module 4: LP"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c40d"
status: "completed"
scrapedAt: "2026-05-20T17:12:04.910Z"
---
# TOPICS IN THEORETICAL COMPUTER SCIENCE

## Module 4: LP - LP- and SDP-based Approximation Algorithms for NP-Hard Problems

### LP Relaxations and their Use in Approximation: Vertex Cover and Set Cover

---

**Learning Outcomes:**

*   Understand the concept of Linear Programming (LP) relaxations for NP-hard problems.
*   Learn how LP relaxations can be used to design approximation algorithms.
*   Analyze the approximation ratio of LP-based algorithms for Vertex Cover and Set Cover.
*   Understand the connection between the LP solution and the integer solution.
*   Explore rounding techniques to convert fractional LP solutions into integer solutions.

---

### 1. Introduction to NP-Hard Problems and Approximation Algorithms

*   **NP-Hard Problems:** A class of problems for which no known polynomial-time algorithm exists to find the optimal solution. Many important problems in computer science fall into this category (e.g., Traveling Salesperson Problem, Satisfiability, Vertex Cover, Set Cover).
*   **Approximation Algorithms:** For NP-hard problems, instead of seeking the *exact* optimal solution (which is likely intractable), we aim to find a *near-optimal* solution within a guaranteed factor of the true optimum.
*   **Approximation Ratio:** For a minimization problem, an algorithm is an $\alpha$-approximation algorithm if for every instance, the cost of the solution found by the algorithm is at most $\alpha$ times the cost of the optimal solution. For maximization problems, it's a $1/\alpha$-approximation.
*   **Why Approximation Algorithms?** They provide practical solutions to computationally hard problems in a reasonable amount of time.

---

### 2. Linear Programming (LP)

*   **Definition:** A mathematical optimization technique used to find the best outcome in a mathematical model whose requirements are represented by linear relationships.
*   **General Form:**
    *   **Objective Function:** Maximize or minimize a linear combination of variables.
        *   e.g., Minimize $c_1x_1 + c_2x_2 + \dots + c_nx_n$
    *   **Constraints:** A set of linear inequalities or equalities on the variables.
        *   e.g., $a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n \le b_1$
        *   $x_i \ge 0$ (non-negativity constraints)
*   **Key Property:** The feasible region of an LP (the set of points satisfying all constraints) is a convex polyhedron. The optimal solution to an LP always occurs at a vertex (extreme point) of this polyhedron.
*   **Solvability:** LPs can be solved in polynomial time using algorithms like the Simplex method or interior-point methods. This is crucial for designing approximation algorithms.

---

### 3. LP Relaxations

*   **Concept:** Many NP-hard problems can be formulated as Integer Linear Programs (ILPs). An ILP is an LP where the variables are restricted to be integers.
*   **The Challenge of ILPs:** Solving ILPs is NP-hard in general.
*   **The Relaxation:** To overcome the difficulty of solving ILPs, we create an LP relaxation by removing the integer constraints. We allow the variables to take on fractional values (real numbers) between 0 and 1 (typically).
*   **Relationship:** The feasible region of the LP relaxation *contains* the feasible region of the original ILP. Therefore, the optimal value of the LP relaxation is an *upper bound* (for minimization problems) or a *lower bound* (for maximization problems) on the optimal value of the ILP.

    *   **Minimization Problem:** $OPT_{ILP} \ge OPT_{LP}$
    *   **Maximization Problem:** $OPT_{ILP} \le OPT_{LP}$

*   **Goal:** Solve the LP relaxation in polynomial time to obtain a fractional solution. Then, use a "rounding" technique to convert this fractional solution into a valid integer solution. The quality of the approximation algorithm depends on how close the rounded solution is to the fractional LP solution, and how close the fractional LP solution is to the true ILP optimum.

---

### 4. LP Relaxation for Vertex Cover

#### 4.1. Problem Definition (Vertex Cover)

*   **Input:** An undirected graph $G = (V, E)$.
*   **Output:** A subset of vertices $C \subseteq V$ such that for every edge $(u, v) \in E$, at least one of $u$ or $v$ is in $C$.
*   **Objective:** Minimize the size of the vertex cover, i.e., minimize $|C|$.
*   **NP-Hardness:** Vertex Cover is NP-hard.

#### 4.2. Integer Linear Program (ILP) Formulation

Let $x_v$ be a binary variable for each vertex $v \in V$:
*   $x_v = 1$ if vertex $v$ is in the vertex cover.
*   $x_v = 0$ otherwise.

**ILP Formulation:**

Minimize: $\sum_{v \in V} x_v$

Subject to:
1.  For every edge $(u, v) \in E$: $x_u + x_v \ge 1$ (At least one endpoint of each edge must be in the cover)
2.  For every vertex $v \in V$: $x_v \in \{0, 1\}$ (Binary constraint)

#### 4.3. LP Relaxation

Remove the integer constraint $x_v \in \{0, 1\}$ and replace it with $0 \le x_v \le 1$.

**LP Relaxation:**

Minimize: $\sum_{v \in V} x_v$

Subject to:
1.  For every edge $(u, v) \in E$: $x_u + x_v \ge 1$
2.  For every vertex $v \in V$: $0 \le x_v \le 1$

**Key Point:** The LP relaxation can be solved in polynomial time. Let $x^*$ be an optimal fractional solution to the LP relaxation, and $OPT_{LP}$ be its objective value. Let $OPT_{ILP}$ be the optimal integer vertex cover size. We know $OPT_{ILP} \ge OPT_{LP}$.

#### 4.4. Rounding Technique and Approximation Algorithm

*   **The Algorithm:**
    1.  Solve the LP relaxation to obtain an optimal fractional solution $x^* = \{x_v^*\}_{v \in V}$.
    2.  Construct an integer vertex cover $C$ by including a vertex $v$ in $C$ if $x_v^* \ge 1/2$.
        *   $C = \{v \in V \mid x_v^* \ge 1/2\}$

*   **Analysis of the Algorithm:**

    *   **Is $C$ a valid Vertex Cover?**
        *   Consider an arbitrary edge $(u, v) \in E$.
        *   From the LP constraint, we have $x_u^* + x_v^* \ge 1$.
        *   If neither $u$ nor $v$ were chosen for $C$, it would mean $x_u^* < 1/2$ and $x_v^* < 1/2$.
        *   But then $x_u^* + x_v^* < 1/2 + 1/2 = 1$, which contradicts the LP constraint.
        *   Therefore, at least one of $u$ or $v$ must have $x^* \ge 1/2$, so at least one of them must be in $C$.
        *   Thus, $C$ is a valid vertex cover.

    *   **What is the size of $C$?**
        *   Let $|C|$ be the size of the vertex cover found by the algorithm.
        *   For each vertex $v \in C$, we know $x_v^* \ge 1/2$.
        *   So, $|C| = \sum_{v \in C} 1$.
        *   We can relate this to the sum of $x_v^*$ for vertices in $C$:
            $\sum_{v \in C} x_v^* \ge \sum_{v \in C} (1/2) = |C|/2$.
        *   Also, for any vertex $v \notin C$, we have $x_v^* < 1/2$.
        *   The sum of all fractional variables is $\sum_{v \in V} x_v^* = \sum_{v \in C} x_v^* + \sum_{v \notin C} x_v^*$.
        *   Since $x_v^* \le 1$ for all $v$, we have $\sum_{v \notin C} x_v^* \le \sum_{v \notin C} 1$.
        *   This doesn't seem to directly give us the ratio. Let's use a different approach.

        *   Consider the sum of $x_v^*$ for all $v \in V$:
            $\sum_{v \in V} x_v^* = \sum_{v \in C} x_v^* + \sum_{v \notin C} x_v^*$.
        *   We know $x_v^* \ge 1/2$ for $v \in C$ and $0 \le x_v^* < 1/2$ for $v \notin C$.
        *   Also, $\sum_{v \in C} x_v^* \ge \sum_{v \in C} 1/2 = |C|/2$.
        *   And $\sum_{v \notin C} x_v^* < \sum_{v \notin C} 1/2 = (|V| - |C|)/2$. This is also not precise enough.

        *   **Let's use the fact that $x_v^* \ge 0$ for all $v$.**
            $|C| = \sum_{v \in C} 1$.
            Since for $v \in C$, $x_v^* \ge 1/2$, we have $1 \le 2x_v^*$.
            So, $|C| = \sum_{v \in C} 1 \le \sum_{v \in C} 2x_v^*$.
            We know $x_v^* \le 1$ for all $v$.
            $|C| \le \sum_{v \in C} 2x_v^* = 2 \sum_{v \in C} x_v^*$.
            Since $\sum_{v \in V} x_v^* = \sum_{v \in C} x_v^* + \sum_{v \notin C} x_v^*$, and $\sum_{v \notin C} x_v^* \ge 0$, we have:
            $\sum_{v \in C} x_v^* \le \sum_{v \in V} x_v^* = OPT_{LP}$.
            Therefore, $|C| \le 2 \sum_{v \in C} x_v^* \le 2 \sum_{v \in V} x_v^* = 2 \cdot OPT_{LP}$.

        *   **Approximation Ratio:** We have $|C| \le 2 \cdot OPT_{LP}$.
            Since $OPT_{ILP} \ge OPT_{LP}$, we have $|C| \le 2 \cdot OPT_{ILP}$.
            This algorithm is a **2-approximation algorithm** for Vertex Cover.

#### 4.5. Example (Vertex Cover)

Consider a graph with $V = \{1, 2, 3, 4\}$ and edges $E = \{(1,2), (2,3), (3,4)\}$.

**ILP:**
Minimize $x_1 + x_2 + x_3 + x_4$
Subject to:
$x_1 + x_2 \ge 1$
$x_2 + x_3 \ge 1$
$x_3 + x_4 \ge 1$
$x_i \in \{0, 1\}$

**LP Relaxation:**
Minimize $x_1 + x_2 + x_3 + x_4$
Subject to:
$x_1 + x_2 \ge 1$
$x_2 + x_3 \ge 1$
$x_3 + x_4 \ge 1$
$0 \le x_i \le 1$

**Optimal LP Solution (Example):**
Let $x_1^* = 0.5, x_2^* = 0.5, x_3^* = 0.5, x_4^* = 0.5$.
Objective value $OPT_{LP} = 0.5 + 0.5 + 0.5 + 0.5 = 2$.
Constraints satisfied:
$0.5 + 0.5 = 1 \ge 1$
$0.5 + 0.5 = 1 \ge 1$
$0.5 + 0.5 = 1 \ge 1$
$0 \le 0.5 \le 1$

**Rounding:**
Include vertex $v$ if $x_v^* \ge 1/2$.
$x_1^* = 0.5 \ge 0.5 \implies$ include 1.
$x_2^* = 0.5 \ge 0.5 \implies$ include 2.
$x_3^* = 0.5 \ge 0.5 \implies$ include 3.
$x_4^* = 0.5 \ge 0.5 \implies$ include 4.
$C = \{1, 2, 3, 4\}$. Size $|C|=4$. This is not a great example.

Let's try another optimal LP solution:
$x_1^* = 1, x_2^* = 0, x_3^* = 1, x_4^* = 0$.
Objective value $OPT_{LP} = 1 + 0 + 1 + 0 = 2$.
Constraints satisfied:
$1 + 0 = 1 \ge 1$
$0 + 1 = 1 \ge 1$
$1 + 0 = 1 \ge 1$
$0 \le x_i^* \le 1$.

**Rounding:**
$x_1^* = 1 \ge 0.5 \implies$ include 1.
$x_2^* = 0 < 0.5 \implies$ do not include 2.
$x_3^* = 1 \ge 0.5 \implies$ include 3.
$x_4^* = 0 < 0.5 \implies$ do not include 4.
$C = \{1, 3\}$. Size $|C|=2$.

Let's check if $C=\{1,3\}$ is a valid cover:
Edge (1,2): 1 is in $C$. OK.
Edge (2,3): 3 is in $C$. OK.
Edge (3,4): 3 is in $C$. OK.
This is a valid vertex cover. The optimal integer solution is $C=\{1,3\}$ or $C=\{2,4\}$ with size 2.
Here, $|C| = 2$ and $OPT_{ILP} = 2$. Ratio is $2/2 = 1$.

Consider another LP solution:
$x_1^* = 0.6, x_2^* = 0.4, x_3^* = 0.6, x_4^* = 0.4$.
Objective value $OPT_{LP} = 0.6 + 0.4 + 0.6 + 0.4 = 2$.
Constraints:
$0.6 + 0.4 = 1 \ge 1$
$0.4 + 0.6 = 1 \ge 1$
$0.6 + 0.4 = 1 \ge 1$

**Rounding:**
$x_1^* = 0.6 \ge 0.5 \implies$ include 1.
$x_2^* = 0.4 < 0.5 \implies$ do not include 2.
$x_3^* = 0.6 \ge 0.5 \implies$ include 3.
$x_4^* = 0.4 < 0.5 \implies$ do not include 4.
$C = \{1, 3\}$. Size $|C|=2$. Again, optimal.

Consider an LP solution that might lead to a larger cover:
$x_1^* = 0.5, x_2^* = 0.5, x_3^* = 0.5, x_4^* = 0.5$. ($OPT_{LP}=2$)
Rounding: $C=\{1,2,3,4\}$, $|C|=4$.
Here $OPT_{ILP} = 2$. Ratio is $4/2 = 2$. This demonstrates the 2-approximation.

**Important Point:** The fractional solution $x_v^* \ge 1/2$ rounding strategy works because if $x_u^* + x_v^* \ge 1$, it's impossible for both $x_u^*$ and $x_v^*$ to be less than $1/2$. This ensures that for every edge, at least one vertex is picked in the rounded solution.

---

### 5. LP Relaxation for Set Cover

#### 5.1. Problem Definition (Set Cover)

*   **Input:**
    *   A universe of elements $U = \{1, 2, \dots, m\}$.
    *   A collection of subsets $S = \{S_1, S_2, \dots, S_n\}$, where each $S_j \subseteq U$.
    *   Each subset $S_j$ has a cost $c_j$ (assume $c_j=1$ for the unweighted version, but the LP formulation handles costs).
*   **Output:** A subcollection of subsets $C \subseteq S$ such that their union is $U$ ($\bigcup_{S_j \in C} S_j = U$).
*   **Objective:** Minimize the total cost of the chosen subsets, i.e., minimize $\sum_{S_j \in C} c_j$.
*   **NP-Hardness:** Set Cover is NP-hard.

#### 5.2. Integer Linear Program (ILP) Formulation

Let $y_j$ be a binary variable for each subset $S_j \in S$:
*   $y_j = 1$ if subset $S_j$ is chosen for the cover.
*   $y_j = 0$ otherwise.

**ILP Formulation:**

Minimize: $\sum_{j=1}^n c_j y_j$

Subject to:
1.  For every element $i \in U$: $\sum_{j: i \in S_j} y_j \ge 1$ (Each element must be covered by at least one chosen subset)
2.  For every subset $S_j$: $y_j \in \{0, 1\}$ (Binary constraint)

#### 5.3. LP Relaxation

Remove the integer constraint $y_j \in \{0, 1\}$ and replace it with $0 \le y_j \le 1$.

**LP Relaxation:**

Minimize: $\sum_{j=1}^n c_j y_j$

Subject to:
1.  For every element $i \in U$: $\sum_{j: i \in S_j} y_j \ge 1$
2.  For every subset $S_j$: $0 \le y_j \le 1$

**Key Point:** The LP relaxation can be solved in polynomial time. Let $y^*$ be an optimal fractional solution, and $OPT_{LP}$ be its objective value. Let $OPT_{ILP}$ be the optimal integer set cover cost. We know $OPT_{ILP} \ge OPT_{LP}$.

#### 5.4. Rounding Technique and Approximation Algorithm

The standard rounding technique for Set Cover is based on the **dual of the LP**. However, we can also use a simple threshold rounding if we can find an appropriate fractional solution. A common approach uses the **dual fitting** or **greedy rounding** from the LP solution.

A common and effective approach is the **rounding based on the LP dual**. However, let's consider a simple rounding that's related to the LP solution for approximation.

The standard LP-based approximation algorithm for Set Cover involves rounding the dual variables. But if we want to round the primal variables $y_j^*$, we face a difficulty: if a subset $S_j$ has $y_j^* > 0$, how do we choose it? A simple threshold like $y_j^* \ge 1/k$ for some $k$ is not directly obvious.

**A common LP-based algorithm for Set Cover uses the dual LP:**

**Dual LP:**
Maximize: $\sum_{i \in U} x_i$
Subject to:
1. For every subset $S_j$: $\sum_{i \in S_j} x_i \le c_j$
2. For every element $i \in U$: $x_i \ge 0$

By strong duality, $OPT_{LP} = OPT_{DualLP}$.

**Algorithm (using dual solution):**
1. Solve the LP relaxation to obtain an optimal dual solution $x^* = \{x_i^*\}_{i \in U}$.
2. For each element $i \in U$, we have a "price" $x_i^*$.
3. Construct a set cover $C$ by picking subsets greedily. A more formal LP rounding is complex.

**Let's use a simpler rounding method for demonstration that relates to the fractional values, though the standard analysis might use duals.**

**Simple (but not standardly analyzed this way for Set Cover approximation ratio) Primal Rounding Idea:**
If we try to round $y_j^*$, say pick $S_j$ if $y_j^* > 0$, it might lead to a cover with too many sets if costs are not uniform.

**The standard analysis of LP for Set Cover (yielding an $O(\log m)$ approximation) involves rounding based on the dual variables. The primal rounding is less direct for achieving the standard ratio.**

**Let's focus on the concept of LP relaxation for Set Cover and the idea of fractional solutions.**

*   The LP relaxation provides fractional assignments $y_j^*$ to subsets.
*   We need a way to convert these fractional assignments into choosing whole subsets to form a valid cover, while keeping the cost low.

**Consider a scenario:** If $y_j^*$ is the fractional "value" of subset $S_j$, and we need to cover element $i$. The constraint $\sum_{j: i \in S_j} y_j^* \ge 1$ implies that the "fractional contribution" of chosen subsets covering $i$ is at least 1.

**A common approach that achieves $O(\log m)$ approximation for Set Cover:**

1.  Solve the LP relaxation.
2.  Obtain the fractional solution $y^*$.
3.  While there are uncovered elements:
    *   Select a subset $S_j$ that maximizes $\frac{\sum_{i \in S_j \text{ and } i \text{ uncovered}} x_i^*}{c_j}$, where $x^*$ is the dual solution.
    *   Add $S_j$ to the cover.
    *   Mark all elements in $S_j$ as covered.

This is a bit complex for direct rounding of primal variables.

**Alternative perspective for intuition:**
If we assign fractional "coverage" $y_j^*$ to subsets, and the total fractional cost is $OPT_{LP}$. If we could somehow scale these $y_j^*$ to integers, we'd have a solution.

**Approximation Ratio for Set Cover using LP:**
The LP relaxation approach for Set Cover, typically involving rounding based on dual variables or specialized primal rounding techniques, leads to an approximation ratio of $O(\log m)$, where $m$ is the size of the universe $|U|$. This is a significant result, as the greedy algorithm also achieves an $O(\log m)$ approximation.

#### 5.5. Example (Set Cover)

*   **Universe:** $U = \{1, 2, 3, 4, 5\}$
*   **Subsets:**
    *   $S_1 = \{1, 2, 3\}$, cost $c_1 = 1$
    *   $S_2 = \{2, 4\}$, cost $c_2 = 1$
    *   $S_3 = \{3, 4\}$, cost $c_3 = 1$
    *   $S_4 = \{4, 5\}$, cost $c_4 = 1$
    *   $S_5 = \{1, 5\}$, cost $c_5 = 1$

**ILP:**
Minimize $y_1 + y_2 + y_3 + y_4 + y_5$
Subject to:
$y_1 + y_5 \ge 1$ (for element 1)
$y_1 + y_2 \ge 1$ (for element 2)
$y_1 + y_3 \ge 1$ (for element 3)
$y_2 + y_3 + y_4 \ge 1$ (for element 4)
$y_4 + y_5 \ge 1$ (for element 5)
$y_j \in \{0, 1\}$

**LP Relaxation:**
Minimize $y_1 + y_2 + y_3 + y_4 + y_5$
Subject to:
$y_1 + y_5 \ge 1$
$y_1 + y_2 \ge 1$
$y_1 + y_3 \ge 1$
$y_2 + y_3 + y_4 \ge 1$
$y_4 + y_5 \ge 1$
$0 \le y_j \le 1$

**Optimal Integer Solution:**
Choose $S_1, S_4$: $C = \{S_1, S_4\}$.
Union: $\{1, 2, 3\} \cup \{4, 5\} = \{1, 2, 3, 4, 5\} = U$.
Cost: $1 + 1 = 2$.
$OPT_{ILP} = 2$.

**Fractional Solution (Example):**
Can we find a fractional solution with value 2?
Let $y_1^* = 0.5, y_2^* = 0.5, y_3^* = 0, y_4^* = 0.5, y_5^* = 0.5$.
Sum of costs = $0.5 + 0.5 + 0 + 0.5 + 0.5 = 2$.
Constraints check:
$y_1^* + y_5^* = 0.5 + 0.5 = 1 \ge 1$ (Elem 1)
$y_1^* + y_2^* = 0.5 + 0.5 = 1 \ge 1$ (Elem 2)
$y_1^* + y_3^* = 0.5 + 0 = 0.5 < 1$ (Elem 3) - This fractional solution is NOT valid!

Let's try to find a valid fractional solution for $OPT_{LP}=2$.
Consider $y_1^*=0.5, y_2^*=0.5, y_3^*=0.5, y_4^*=0.5, y_5^*=0.5$. Sum=2.5. Not optimal.

Let's use the optimal integer solution and see if it yields a valid fractional assignment.
Pick $S_1$ and $S_4$. $y_1^*=1, y_4^*=1$, others 0.
This is an integer solution, so it's also a fractional solution.
$OPT_{LP} \le 2$.

Let's explore a fractional solution with cost 2:
$y_1^* = 0.5, y_2^* = 0.5, y_3^* = 0.5, y_4^* = 0.5$
Constraint for elem 4: $y_2^* + y_3^* + y_4^* = 0.5 + 0.5 + 0.5 = 1.5 \ge 1$.
Constraint for elem 1: $y_1^* + y_5^* \ge 1$. If $y_1^*=0.5$, we need $y_5^* \ge 0.5$.
Constraint for elem 2: $y_1^* + y_2^* \ge 1$. If $y_1^*=0.5$, we need $y_2^* \ge 0.5$.
Constraint for elem 3: $y_1^* + y_3^* \ge 1$. If $y_1^*=0.5$, we need $y_3^* \ge 0.5$.

Consider this fractional solution:
$y_1^* = 0.5$
$y_2^* = 0.5$
$y_3^* = 0.5$
$y_4^* = 0.5$
$y_5^* = 0.5$
Cost sum = 2.5.

Try $y_1^*=0.5, y_2^*=0.5, y_3^*=0, y_4^*=0.5, y_5^*=0.5$. (Cost=2.5, invalid for elem 3)

Let's try to achieve $OPT_{LP}=2$ with a fractional solution.
$y_1^*=0.5, y_2^*=0.5, y_3^*=0.5$ -> violates elem 3 if $y_1^*=0.5$ and $y_3^*=0.5$.
The constraints are tricky.

Consider the dual LP for the same instance.
Maximize $x_1 + x_2 + x_3 + x_4 + x_5$
Subject to:
$x_1 + x_2 + x_3 \le 1$ ($S_1$)
$x_2 + x_4 \le 1$ ($S_2$)
$x_3 + x_4 \le 1$ ($S_3$)
$x_4 + x_5 \le 1$ ($S_4$)
$x_1 + x_5 \le 1$ ($S_5$)
$x_i \ge 0$

A possible dual solution: $x_1=0.5, x_2=0.5, x_3=0.5, x_4=0.5, x_5=0.5$.
Sum of $x_i = 2.5$.
Check constraints:
$0.5 + 0.5 + 0.5 = 1.5 > 1$ (Violates $S_1$) - this is not a valid dual solution.

Let's try $x_1=0.5, x_2=0.5, x_3=0, x_4=0.5, x_5=0.5$. Sum=2.5.
Constraints:
$S_1: 0.5 + 0.5 + 0 = 1 \le 1$. OK.
$S_2: 0.5 + 0.5 = 1 \le 1$. OK.
$S_3: 0 + 0.5 = 0.5 \le 1$. OK.
$S_4: 0.5 + 0.5 = 1 \le 1$. OK.
$S_5: 0.5 + 0.5 = 1 \le 1$. OK.
This is a valid dual solution with value 2.5.
So $OPT_{LP} \le 2.5$. Since $OPT_{ILP}=2$, $OPT_{LP}$ could be 2 or 2.5.

If $OPT_{LP}=2$, it could come from $y_1^*=1, y_4^*=1$.

**The $O(\log m)$ approximation arises from a different rounding scheme, often involving a randomized rounding of the dual solution, or a deterministic rounding of the dual variables to select sets.**

**Key takeaway for Set Cover:** LP relaxation provides a powerful way to get a fractional solution. Converting this to an integer solution requires more sophisticated rounding techniques (like dual fitting or randomized rounding) to achieve the $O(\log m)$ approximation ratio. The LP value provides a lower bound for the optimal integer solution.

---

### 6. Connection between LP Solution and Integer Solution (General)

*   **LP Relaxation as a Bound:** The optimal value of the LP relaxation, $OPT_{LP}$, provides a bound on the optimal value of the original Integer Program, $OPT_{ILP}$.
    *   For minimization: $OPT_{ILP} \ge OPT_{LP}$
    *   For maximization: $OPT_{ILP} \le OPT_{LP}$
*   **Rounding:** The core idea of LP-based approximation algorithms is to use the fractional solution $x^*$ (or $y^*$) obtained from the LP relaxation and "round" it to an integer solution $x_{int}$ (or $y_{int}$).
*   **Approximation Guarantee:** The quality of the approximation algorithm is determined by how close the rounded integer solution's value is to the LP's optimal value, and how close the LP's optimal value is to the true integer optimum.
    *   For a minimization problem, if we have a rounding strategy such that $\text{Value}(x_{int}) \le \alpha \cdot \text{Value}(x^*)$, and we know $OPT_{ILP} \ge OPT_{LP} = \text{Value}(x^*)$, then $\text{Value}(x_{int}) \le \alpha \cdot OPT_{LP} \le \alpha \cdot OPT_{ILP}$. This gives an $\alpha$-approximation.

*   **Rounding Techniques:**
    *   **Threshold Rounding:** Pick an item if its fractional value is above a certain threshold (e.g., $1/2$ for Vertex Cover).
    *   **Randomized Rounding:** Treat the fractional values as probabilities and randomly pick items. The expected value of the rounded solution can be analyzed.
    *   **Dual Fitting/Primal-Dual:** More sophisticated techniques that leverage the relationship between primal and dual LP solutions to guide the rounding process and achieve better approximation ratios.

---

### 7. Important Points to Remember

*   **NP-hard problems:** Finding exact solutions is computationally expensive. Approximation algorithms offer a practical alternative.
*   **LP relaxation:** A technique to transform an NP-hard ILP into a tractable LP by relaxing integer constraints to continuous ones ($0 \le x_i \le 1$).
*   **LP as a bound:** The optimal value of the LP relaxation provides a valuable bound on the optimal solution of the original ILP.
*   **Rounding is key:** The "magic" happens when converting the fractional LP solution back into a valid integer solution for the original problem. The choice of rounding technique determines the approximation ratio.
*   **Vertex Cover:** The simple threshold rounding (pick if $x_v^* \ge 1/2$) provides a 2-approximation.
*   **Set Cover:** LP relaxation is useful, but achieving the best approximation ratios ($O(\log m)$) typically requires rounding based on dual variables or more advanced techniques.
*   **Polynomial Time Solvability of LPs:** This is what makes LP-based approximation algorithms possible.

---

### 8. Practice Questions and Exercises

**Question 1:**
What is the main reason for using LP relaxations in approximation algorithms for NP-hard problems?
(a) To find the exact optimal solution in polynomial time.
(b) To obtain a fractional solution that serves as a bound and can be rounded to an approximate integer solution.
(c) To prove that NP-hard problems are in P.
(d) To reduce the problem size.

**Question 2:**
For a minimization problem, if the optimal value of the LP relaxation is $OPT_{LP}$ and the optimal value of the Integer Program is $OPT_{ILP}$, which of the following is true?
(a) $OPT_{ILP} \le OPT_{LP}$
(b) $OPT_{ILP} = OPT_{LP}$
(c) $OPT_{ILP} \ge OPT_{LP}$
(d) There is no guaranteed relationship.

**Question 3:**
Consider the LP relaxation for Vertex Cover. If an optimal fractional solution is $x^*$, and we form a vertex cover $C = \{v \in V \mid x_v^* \ge 1/2\}$, what is the approximation ratio of this algorithm?
(a) 1
(b) 2
(c) $\log |V|$
(d) $|V|$

**Question 4:**
In the LP relaxation for Set Cover, what is the purpose of the constraint $\sum_{j: i \in S_j} y_j \ge 1$ for each element $i$?

**Question 5 (Conceptual):**
Explain why the rounding strategy $C = \{v \in V \mid x_v^* \ge 1/2\}$ guarantees that for any edge $(u,v)$, at least one of $u$ or $v$ is in $C$, given that $x_u^* + x_v^* \ge 1$.

**Question 6 (Challenge):**
Consider a graph with $V=\{1,2,3\}$ and edges $E=\{(1,2), (2,3)\}$.
Write down the ILP and LP relaxation for the Vertex Cover problem.
Find an optimal LP solution (fractional values for $x_1, x_2, x_3$).
Apply the rounding rule ($x_v^* \ge 1/2$) to find a vertex cover. What is its size?

---

### Answers to Practice Questions

**Answer 1:**
(b) To obtain a fractional solution that serves as a bound and can be rounded to an approximate integer solution.

**Answer 2:**
(c) $OPT_{ILP} \ge OPT_{LP}$. Because the feasible region of the LP relaxation contains all integer solutions of the ILP, the minimum value achieved by the LP relaxation cannot be worse (higher for minimization) than the minimum value achieved by the ILP.

**Answer 3:**
(b) 2. The analysis shows that $|C| \le 2 \sum_{v \in V} x_v^* = 2 \cdot OPT_{LP} \le 2 \cdot OPT_{ILP}$.

**Answer 4:**
This constraint ensures that for every element $i$ in the universe, the sum of the fractional values of the chosen subsets that contain element $i$ must be at least 1. This is the condition for a valid set cover in the fractional sense.

**Answer 5:**
If $x_u^* + x_v^* \ge 1$, it's impossible for both $x_u^*$ and $x_v^*$ to be less than $1/2$. If $x_u^* < 1/2$ and $x_v^* < 1/2$, then their sum $x_u^* + x_v^*$ would be strictly less than $1/2 + 1/2 = 1$, contradicting the LP constraint. Therefore, at least one of $x_u^*$ or $x_v^*$ must be greater than or equal to $1/2$, ensuring that at least one of $u$ or $v$ is included in the rounded cover $C$.

**Answer 6:**
**ILP:**
Minimize $x_1 + x_2 + x_3$
Subject to:
$x_1 + x_2 \ge 1$
$x_2 + x_3 \ge 1$
$x_i \in \{0, 1\}$ for $i=1,2,3$.

**LP Relaxation:**
Minimize $x_1 + x_2 + x_3$
Subject to:
$x_1 + x_2 \ge 1$
$x_2 + x_3 \ge 1$
$0 \le x_i \le 1$ for $i=1,2,3$.

**Optimal LP Solution:**
One possible optimal LP solution is $x_1^* = 0.5, x_2^* = 0.5, x_3^* = 0.5$.
Objective value: $0.5 + 0.5 + 0.5 = 1.5$.
Constraints check:
$0.5 + 0.5 = 1 \ge 1$ (OK)
$0.5 + 0.5 = 1 \ge 1$ (OK)
$0 \le 0.5 \le 1$ (OK)

Another optimal LP solution could be $x_1^* = 1, x_2^* = 0, x_3^* = 1$.
Objective value: $1 + 0 + 1 = 2$.
Constraints check:
$1 + 0 = 1 \ge 1$ (OK)
$0 + 1 = 1 \ge 1$ (OK)
$0 \le x_i \le 1$ (OK)

The true optimal LP value is 1.5. For example, $x_1^*=0.5, x_2^*=0.5, x_3^*=0.5$ achieves this. Or $x_1^*=0.5, x_2^*=0.5, x_3^*=0.5$ is optimal.
Let's use $x_1^* = 0.5, x_2^* = 0.5, x_3^* = 0.5$. $OPT_{LP} = 1.5$.

**Rounding:**
Include vertex $v$ if $x_v^* \ge 1/2$.
$x_1^* = 0.5 \ge 0.5 \implies$ include 1.
$x_2^* = 0.5 \ge 0.5 \implies$ include 2.
$x_3^* = 0.5 \ge 0.5 \implies$ include 3.
Rounded cover $C = \{1, 2, 3\}$. Size $|C|=3$.

Let's verify the approximation ratio for this specific case. The optimal integer vertex cover for this graph is $\{2\}$ (size 1) or $\{1,3\}$ (size 2). The true $OPT_{ILP}$ is 1.
Our rounded solution has size 3. Ratio is $3/1=3$. This is worse than the guaranteed 2.
This highlights that the approximation ratio is an *upper bound* and specific instances might yield better results, or the LP solution might not be perfectly aligned for simple threshold rounding.

If we used $x_1^* = 1, x_2^* = 0, x_3^* = 1$, $OPT_{LP}=2$.
Rounding:
$x_1^* = 1 \ge 0.5 \implies$ include 1.
$x_2^* = 0 < 0.5 \implies$ do not include 2.
$x_3^* = 1 \ge 0.5 \implies$ include 3.
Rounded cover $C = \{1, 3\}$. Size $|C|=2$.
This is a valid vertex cover. $OPT_{ILP}=1$. Ratio $2/1=2$.

The LP relaxation value is indeed 1.5, e.g., with $x_1^*=0.5, x_2^*=0.5, x_3^*=0.5$.
The rounding $C=\{1,2,3\}$ has size 3. The actual $OPT_{ILP}=1$ (vertex $\{2\}$). $3/1 = 3$.
This shows that $x_v^* \ge 1/2$ rounding does not always give the best possible integer solution from a given fractional solution. However, the *worst-case* bound over all instances is 2.

If the LP solver returned $x_1^*=0.5, x_2^*=0.5, x_3^*=0.5$ ($OPT_{LP}=1.5$).
And the true $OPT_{ILP}=1$. Ratio $1.5/1 = 1.5$.
Rounded cover size is 3. $3/1.5 = 2$. This is the ratio relative to LP.
$3/1 \le 2 \times 1$. This is $3 \le 2$. This implies my initial math might be off for this example or the LP optimal value is not 1.5.
Let's re-evaluate the LP optimal value.
Minimize $x_1+x_2+x_3$ subject to $x_1+x_2 \ge 1, x_2+x_3 \ge 1, 0 \le x_i \le 1$.
If $x_1=0.5, x_2=0.5, x_3=0.5$, cost = 1.5.
If $x_1=1, x_2=0, x_3=1$, cost = 2.
If $x_1=0, x_2=1, x_3=0$, cost = 1. This satisfies $x_2+x_3 \ge 1$ only if $1+0 \ge 1$ (OK). But $x_1+x_2 \ge 1$ becomes $0+1 \ge 1$ (OK). This is a valid LP solution!
So, $x_1^*=0, x_2^*=1, x_3^*=0$. $OPT_{LP}=1$.
Rounding:
$x_1^* = 0 < 0.5 \implies$ don't pick 1.
$x_2^* = 1 \ge 0.5 \implies$ pick 2.
$x_3^* = 0 < 0.5 \implies$ don't pick 3.
Rounded cover $C = \{2\}$. Size $|C|=1$.
This is the optimal integer solution. Ratio $1/1=1$.

It seems my initial LP optimal value calculation was flawed. The key is that LP relaxation provides a lower bound. $OPT_{LP} \le OPT_{ILP}$ for minimization is what I wrote. Ah, for Minimization, $OPT_{ILP} \ge OPT_{LP}$.
So $OPT_{ILP} \ge 1$. And $OPT_{ILP} = 1$ (vertex $\{2\}$).
The LP solution $x_1^*=0, x_2^*=1, x_3^*=0$ gives $OPT_{LP}=1$.
The rounding gives $C=\{2\}$ with size 1.
This example shows a perfect 1-approximation. The *guarantee* is 2.

---
