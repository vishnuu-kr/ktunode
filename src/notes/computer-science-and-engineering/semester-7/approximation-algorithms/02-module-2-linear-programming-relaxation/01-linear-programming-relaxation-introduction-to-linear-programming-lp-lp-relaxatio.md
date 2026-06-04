---
title: "Linear Programming Relaxation - Introduction to linear programming (LP), LP relaxation of combinatorial problems, Primal-dual method.  (Chapter 4)"
subject: "APPROXIMATION ALGORITHMS"
module: "Module 2: Linear Programming Relaxation "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c37a"
status: "completed"
scrapedAt: "2026-05-20T17:00:43.632Z"
---
# Approximation Algorithms: Module 2 - Linear Programming Relaxation

## Chapter 4: Linear Programming Relaxation

### 1. Introduction to Linear Programming (LP)

Linear Programming (LP) is a mathematical technique used to optimize a linear objective function subject to a set of linear constraints. It's a powerful tool that finds applications in various fields, including operations research, economics, and computer science.

#### Key Concepts & Definitions:

*   **Decision Variables:** These are the variables whose values we need to determine to achieve the optimal solution. They are typically represented by $x_1, x_2, \dots, x_n$.
*   **Objective Function:** This is a linear function that we want to maximize or minimize. It's expressed as a weighted sum of the decision variables.
    *   **Maximization:** $c_1 x_1 + c_2 x_2 + \dots + c_n x_n$
    *   **Minimization:** $c_1 x_1 + c_2 x_2 + \dots + c_n x_n$
*   **Constraints:** These are limitations or restrictions that the decision variables must satisfy. They are expressed as linear inequalities or equalities.
    *   **General Form:**
        *   $a_{i1} x_1 + a_{i2} x_2 + \dots + a_{in} x_n \le b_i$  (for $i = 1, \dots, m$)
        *   $a_{ij} x_j \ge 0$ (non-negativity constraints, where $j = 1, \dots, n$)
*   **Feasible Region:** The set of all points that satisfy all the constraints.
*   **Feasible Solution:** Any point within the feasible region.
*   **Optimal Solution:** A feasible solution that yields the best possible value for the objective function.
*   **LP Standard Form:**
    *   Maximize or Minimize $c^T x$
    *   Subject to $Ax \le b$
    *   And $x \ge 0$

#### Examples:

**Example 1: Production Planning**

A company manufactures two products, A and B.
*   Product A requires 2 hours of labor and 1 kg of raw material.
*   Product B requires 1 hour of labor and 2 kg of raw material.
*   The company has 100 hours of labor and 80 kg of raw material available per week.
*   The profit for Product A is $5 per unit, and for Product B is $4 per unit.

Let $x_1$ be the number of units of Product A produced, and $x_2$ be the number of units of Product B produced.

**LP Formulation:**

*   **Objective Function (Maximize Profit):** $5x_1 + 4x_2$
*   **Constraints:**
    *   Labor: $2x_1 + x_2 \le 100$
    *   Raw Material: $x_1 + 2x_2 \le 80$
    *   Non-negativity: $x_1 \ge 0, x_2 \ge 0$

**Graphical Solution (for 2 variables):**

We can plot the constraints on a graph. The feasible region is the area bounded by the axes and the constraint lines. The optimal solution will occur at one of the vertices (corner points) of the feasible region.

*   Vertex 1: (0, 0) -> Profit = 0
*   Vertex 2: (50, 0) [from $2x_1 \le 100$] -> Profit = 250
*   Vertex 3: (0, 40) [from $2x_2 \le 80$] -> Profit = 160
*   Vertex 4: Intersection of $2x_1 + x_2 = 100$ and $x_1 + 2x_2 = 80$.
    *   Multiply the second equation by 2: $2x_1 + 4x_2 = 160$
    *   Subtract the first equation: $(2x_1 + 4x_2) - (2x_1 + x_2) = 160 - 100$ -> $3x_2 = 60$ -> $x_2 = 20$
    *   Substitute $x_2=20$ into $x_1 + 2x_2 = 80$: $x_1 + 2(20) = 80$ -> $x_1 + 40 = 80$ -> $x_1 = 40$.
    *   Vertex 4: (40, 20) -> Profit = $5(40) + 4(20) = 200 + 80 = 280$.

The optimal solution is to produce 40 units of Product A and 20 units of Product B, yielding a maximum profit of $280.

#### Important Points to Remember:

*   LP problems always have a convex feasible region.
*   If an optimal solution exists, it must occur at a vertex of the feasible region (for problems with continuous variables).
*   LP problems can be solved efficiently using algorithms like the Simplex method or Interior-Point methods.

### 2. LP Relaxation of Combinatorial Problems

Many important problems in computer science, such as the Traveling Salesperson Problem (TSP), Vertex Cover, and Maximum Cut, are NP-hard combinatorial optimization problems. Finding exact solutions to these problems is computationally intractable for large instances.

**LP Relaxation** is a technique used to transform an NP-hard combinatorial optimization problem into an LP problem. This is done by:

1.  **Formulating the combinatorial problem as an Integer Linear Program (ILP):** This involves using binary (0/1) decision variables to represent choices (e.g., selecting an edge, including a vertex).
2.  **Relaxing the integer constraints:** The binary constraints (e.g., $x_i \in \{0, 1\}$) are replaced with continuous linear constraints (e.g., $0 \le x_i \le 1$).

The LP relaxation of an ILP is always a **convex relaxation**, meaning its feasible region contains the feasible region of the original ILP.

#### Key Concepts & Definitions:

*   **Combinatorial Optimization Problem:** An optimization problem where the goal is to find an optimal configuration of discrete objects (e.g., a subset of vertices, a permutation of cities).
*   **Integer Linear Program (ILP):** A linear program where some or all of the decision variables are restricted to be integers.
*   **Binary Integer Program (BIP):** A special case of ILP where all decision variables are restricted to be either 0 or 1.
*   **LP Relaxation:** An LP problem obtained by replacing the integer constraints of an ILP with continuous constraints (typically $0 \le x_i \le 1$ for binary variables).
*   **Approximation Ratio:** For maximization problems, an $\alpha$-approximation algorithm finds a solution with value at least $1/\alpha$ times the optimal value. For minimization problems, it finds a solution with value at most $\alpha$ times the optimal value.
*   **Integrality Gap:** The ratio of the optimal value of an ILP to the optimal value of its LP relaxation. A small integrality gap suggests that the LP relaxation is a good approximation of the ILP.

#### Example: Vertex Cover

**Problem:** Given a graph $G = (V, E)$, find a minimum-sized subset of vertices $S \subseteq V$ such that every edge $(u, v) \in E$ has at least one endpoint in $S$.

**ILP Formulation:**

*   Let $x_v$ be a binary variable: $x_v = 1$ if vertex $v$ is in the cover, $x_v = 0$ otherwise.
*   **Objective Function (Minimize Cover Size):** Minimize $\sum_{v \in V} x_v$
*   **Constraints:** For every edge $(u, v) \in E$: $x_u + x_v \ge 1$ (at least one endpoint must be in the cover).
*   **Binary Constraints:** $x_v \in \{0, 1\}$ for all $v \in V$.

**LP Relaxation:**

Replace the binary constraints with continuous constraints:

*   **Objective Function:** Minimize $\sum_{v \in V} x_v$
*   **Constraints:**
    *   For every edge $(u, v) \in E$: $x_u + x_v \ge 1$
    *   **Relaxed Constraints:** $0 \le x_v \le 1$ for all $v \in V$.

**How LP Relaxation helps:**

The LP relaxation of Vertex Cover can be solved efficiently using LP solvers. Let $LP_{OPT}$ be the optimal value of the LP relaxation and $ILP_{OPT}$ be the optimal value of the ILP. Since the feasible region of the LP relaxation contains the feasible region of the ILP, we always have $LP_{OPT} \le ILP_{OPT}$ (for minimization problems).

If we obtain a fractional solution $x^*$ from the LP relaxation, we can round it to an integer solution. A common rounding technique is **randomized rounding** or **deterministic rounding**. For Vertex Cover, a simple deterministic rounding strategy is: if $x_v \ge 1/2$, include $v$ in the cover; otherwise, don't. This rounding strategy can lead to a 2-approximation algorithm.

#### Example: Maximum Cut

**Problem:** Given a graph $G = (V, E)$, partition the vertices into two sets $S$ and $V \setminus S$ such that the number of edges with one endpoint in $S$ and the other in $V \setminus S$ (the "cut") is maximized.

**ILP Formulation:**

*   Let $x_v$ be a binary variable: $x_v = 1$ if vertex $v$ is in set $S$, $x_v = -1$ if vertex $v$ is in set $V \setminus S$.
*   **Objective Function (Maximize Cut Size):** Maximize $\frac{1}{2} \sum_{(u,v) \in E} (1 - x_u x_v)$
*   **Constraints:** $x_v \in \{-1, 1\}$ for all $v \in V$.

**LP Relaxation (Semidefinite Programming Relaxation is more common for Max Cut, but for illustration of LP relaxation, let's consider a simpler formulation):**

A common LP relaxation (though not the tightest for Max Cut) can be formulated using indicator variables. Let $y_v$ be a variable that is 1 if $v$ is in $S$, and 0 otherwise.

*   Let $y_v$ be a binary variable: $y_v = 1$ if vertex $v$ is in set $S$, $y_v = 0$ if vertex $v$ is in set $V \setminus S$.
*   **Objective Function (Maximize Cut Size):** Maximize $\sum_{(u,v) \in E} (y_u(1-y_v) + (1-y_u)y_v)$
*   **Constraints:** $y_v \in \{0, 1\}$ for all $v \in V$.

**LP Relaxation:**

*   **Objective Function:** Maximize $\sum_{(u,v) \in E} (y_u + y_v - 2y_u y_v)$
*   **Constraints:** $0 \le y_v \le 1$ for all $v \in V$.
    *   *(Note: The quadratic term $y_u y_v$ makes this a Quadratic Program. A true LP relaxation would linearize this or use different variables.)*

A more standard LP relaxation for Max Cut uses variables $y_{uv}$ for each edge $(u,v)$ and $x_v$ for each vertex. This can get complex. The point is that the original combinatorial problem is mapped to an LP where the integer/binary constraints are relaxed.

#### Important Points to Remember:

*   LP relaxation is a powerful technique for obtaining approximate solutions to NP-hard problems.
*   The optimal value of the LP relaxation provides a bound on the optimal value of the original ILP.
*   Rounding the fractional solution of the LP relaxation is crucial for obtaining a feasible solution to the original combinatorial problem.
*   The quality of the approximation depends on the tightness of the LP relaxation and the rounding scheme.

### 3. Primal-Dual Method

The Primal-Dual method is a technique for designing approximation algorithms, often based on the theory of LP duality. It involves constructing both the primal LP and its dual LP. The algorithm iteratively improves a primal solution and a dual solution until they become feasible and satisfy complementary slackness conditions.

#### Key Concepts & Definitions:

*   **Primal LP:** The LP formulation of the combinatorial optimization problem (or its relaxation).
*   **Dual LP:** The LP obtained by applying LP duality theory to the primal LP.
*   **Dual Variables (Shadow Prices):** Variables in the dual LP that correspond to the constraints in the primal LP.
*   **Complementary Slackness Conditions:** A set of conditions that must hold at optimality for both the primal and dual LPs. For a primal variable $x_j$ and its corresponding dual constraint, and for a dual variable $y_i$ and its corresponding primal constraint:
    *   If $x_j > 0$, then the $j$-th dual constraint is active (tight).
    *   If the $j$-th dual constraint is not active, then $x_j = 0$.
    *   If $y_i > 0$, then the $i$-th primal constraint is active (tight).
    *   If the $i$-th primal constraint is not active, then $y_i = 0$.
*   **Feasible Primal Solution:** A solution that satisfies all primal constraints.
*   **Feasible Dual Solution:** A solution that satisfies all dual constraints.
*   **Duality Gap:** The difference between the optimal value of the primal LP and the optimal value of the dual LP. At optimality, the duality gap is zero.

#### How the Primal-Dual Method Works:

1.  **Formulate the Primal LP:** Represent the combinatorial problem as an LP (often the relaxed version of an ILP).
2.  **Formulate the Dual LP:** Derive the dual of the primal LP.
3.  **Initialize:** Start with a trivial primal solution (often infeasible) and a trivial dual solution (often feasible).
4.  **Iteratively Improve:**
    *   **Primal Improvement:** Try to move towards a feasible primal solution.
    *   **Dual Improvement:** Try to increase the dual objective value (for maximization) or decrease it (for minimization) while maintaining dual feasibility. The key is to adjust dual variables to "satisfy" primal constraints that are currently violated.
5.  **Termination:** The algorithm terminates when both primal and dual solutions are feasible and satisfy complementary slackness. The primal solution can then be converted into a valid (though not necessarily optimal) solution to the original combinatorial problem.

#### Example: Set Cover (Illustrative)

**Problem:** Given a universe $U$ of elements and a collection of subsets $S_1, S_2, \dots, S_m$ of $U$, each with a cost $c_i$. Find a minimum-cost subcollection of sets whose union is $U$.

**Primal LP Formulation:**

*   Let $x_i$ be a variable: $x_i = 1$ if set $S_i$ is chosen, $x_i = 0$ otherwise.
*   **Objective Function (Minimize Cost):** Minimize $\sum_{i=1}^m c_i x_i$
*   **Constraints:** For each element $e \in U$: $\sum_{i: e \in S_i} x_i \ge 1$ (each element must be covered).
*   **Binary Constraints:** $x_i \in \{0, 1\}$ for all $i$.

**LP Relaxation:**

*   **Objective Function:** Minimize $\sum_{i=1}^m c_i x_i$
*   **Constraints:**
    *   For each element $e \in U$: $\sum_{i: e \in S_i} x_i \ge 1$
    *   **Relaxed Constraints:** $0 \le x_i \le 1$ for all $i$.

**Dual LP Formulation:**

*   Let $y_e$ be a dual variable for each element $e \in U$.
*   **Objective Function (Maximize):** Maximize $\sum_{e \in U} y_e$
*   **Constraints:** For each set $S_i$: $\sum_{e \in S_i} y_e \le c_i$ (the total dual value for elements in a set cannot exceed the cost of the set).
*   **Non-negativity:** $y_e \ge 0$ for all $e \in U$.

**Primal-Dual Algorithm Idea for Set Cover:**

1.  **Initialize:**
    *   Primal: $x_i = 0$ for all $i$ (infeasible, no sets chosen).
    *   Dual: $y_e = 0$ for all $e \in U$ (feasible, objective value is 0).
2.  **Iterative Step:**
    *   **Dual Augmentation:** While there exists an uncovered element $e$ (i.e., $\sum_{i: e \in S_i} x_i < 1$ is not satisfied for the current primal solution, which is initially $x_i=0$), pick such an element $e$ and *increase* $y_e$ uniformly for all sets $S_i$ containing $e$.
    *   **Dual Constraint Check:** Stop increasing $y_e$ for a particular element $e$ when for some set $S_i$ containing $e$, the dual constraint $\sum_{j \in S_i} y_j \le c_i$ becomes tight ($\sum_{j \in S_i} y_j = c_i$).
    *   **Primal Update:** When a dual constraint for set $S_i$ becomes tight, "select" set $S_i$ (set $x_i = 1$).
    *   **Element Coverage:** Mark all elements in the newly selected set $S_i$ as covered.
3.  **Repeat:** Continue this process until all elements are covered.

**Approximation Guarantee:** This primal-dual approach for Set Cover yields a $H_k$-approximation, where $k$ is the maximum size of a set.

#### Important Points to Remember:

*   The primal-dual method is a systematic way to design approximation algorithms by leveraging LP duality.
*   The dual variables often have a natural interpretation related to the "price" or "value" of covering elements.
*   The key is to ensure dual feasibility is maintained while making progress towards primal feasibility.
*   The complementary slackness conditions at termination guarantee a connection between the primal and dual solutions.
*   Many approximation algorithms for problems like Set Cover, Vertex Cover, and Facility Location are based on the primal-dual method.

---

### Practice Questions

1.  **LP Basics:** Formulate the following problem as a Linear Program: A farmer wants to plant corn and wheat. Corn requires 2 hours of labor and 1 kg of fertilizer per acre. Wheat requires 1 hour of labor and 2 kg of fertilizer per acre. The farmer has at most 100 hours of labor and 80 kg of fertilizer. The profit from corn is $300 per acre, and from wheat is $200 per acre. The farmer wants to maximize profit.

2.  **LP Relaxation:** Consider the ILP for the 0/1 Knapsack problem:
    *   Maximize $\sum_{i=1}^n p_i x_i$
    *   Subject to $\sum_{i=1}^n w_i x_i \le W$
    *   $x_i \in \{0, 1\}$ for $i=1, \dots, n$.
    Where $p_i$ is the profit of item $i$, $w_i$ is the weight of item $i$, and $W$ is the knapsack capacity.
    Write down the LP relaxation of this knapsack problem.

3.  **Primal-Dual Intuition:** In the context of the Set Cover primal-dual algorithm, what does it mean for a dual constraint $\sum_{e \in S_i} y_e \le c_i$ to become "tight"? What action is taken in the primal solution when this happens?

4.  **Approximation Ratio:** If the LP relaxation of a minimization problem gives an optimal value of 100, and the rounding procedure yields a feasible solution with a value of 150, what is the approximation ratio of this algorithm?

---

### Answers to Practice Questions

1.  **LP Formulation for Farmer's Problem:**
    Let $x_1$ be the number of acres of corn planted.
    Let $x_2$ be the number of acres of wheat planted.

    *   **Objective Function (Maximize Profit):** Maximize $300x_1 + 200x_2$
    *   **Constraints:**
        *   Labor: $2x_1 + x_2 \le 100$
        *   Fertilizer: $x_1 + 2x_2 \le 80$
        *   Non-negativity: $x_1 \ge 0, x_2 \ge 0$

2.  **LP Relaxation of 0/1 Knapsack:**
    The LP relaxation replaces the binary constraints ($x_i \in \{0, 1\}$) with continuous constraints ($0 \le x_i \le 1$).

    *   **Objective Function:** Maximize $\sum_{i=1}^n p_i x_i$
    *   **Constraints:**
        *   $\sum_{i=1}^n w_i x_i \le W$
        *   $0 \le x_i \le 1$ for $i=1, \dots, n$.

3.  **Primal-Dual Intuition for Set Cover:**
    When a dual constraint $\sum_{e \in S_i} y_e \le c_i$ becomes "tight," it means that the sum of the dual variables for all elements belonging to set $S_i$ is exactly equal to the cost of set $S_i$ ($c_i$). In the primal-dual algorithm for Set Cover, this signifies that the "value" contributed by the chosen dual variables for the elements in $S_i$ is now sufficient to "pay for" the entire cost of set $S_i$.
    When this occurs, the algorithm takes the action of *selecting* set $S_i$ in the primal solution. This typically means setting the corresponding primal variable $x_i$ to 1, effectively choosing that set to be part of the cover.

4.  **Approximation Ratio Calculation:**
    For a minimization problem:
    *   Optimal LP Relaxation Value = 100
    *   Obtained Feasible Solution Value = 150
    *   Approximation Ratio = (Value of Obtained Solution) / (Optimal LP Relaxation Value)
    *   Approximation Ratio = 150 / 100 = 1.5

    So, the approximation ratio is 1.5. This means the algorithm guarantees a solution that is at most 1.5 times the optimal cost.
