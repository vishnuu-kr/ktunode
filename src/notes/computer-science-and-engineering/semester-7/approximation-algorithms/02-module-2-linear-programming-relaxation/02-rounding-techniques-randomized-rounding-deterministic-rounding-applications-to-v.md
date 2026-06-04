---
title: "Rounding Techniques - Randomized rounding, Deterministic rounding, Applications to various problems.  (Chapter 5)"
subject: "APPROXIMATION ALGORITHMS"
module: "Module 2: Linear Programming Relaxation "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c37b"
status: "completed"
scrapedAt: "2026-05-20T17:00:44.391Z"
---
# Approximation Algorithms: Module 2 - Linear Programming Relaxation

## Topic: Rounding Techniques - Randomized Rounding, Deterministic Rounding, Applications to Various Problems (Chapter 5)

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the concept of rounding techniques used to obtain integral solutions from fractional solutions obtained via Linear Programming (LP) relaxation.
*   Explain the principles and mechanics of Randomized Rounding.
*   Explain the principles and mechanics of Deterministic Rounding (including common strategies like thresholding and nearest integer rounding).
*   Analyze the approximation guarantee achieved by Randomized Rounding for specific problems.
*   Analyze the approximation guarantee achieved by Deterministic Rounding for specific problems.
*   Apply rounding techniques to solve approximation problems such as Vertex Cover, Set Cover, and Maximum Satisfiability (Max-SAT).

---

### 1. Introduction to Rounding Techniques

**Problem:** Many NP-hard problems can be formulated as Integer Linear Programs (ILPs). Solving ILPs is generally NP-hard.

**Strategy:**
1.  **Relaxation:** Relax the integer constraints (e.g., $x_i \in \{0, 1\}$ to $0 \le x_i \le 1$). This transforms the ILP into a Linear Program (LP).
2.  **Solve LP:** Solve the LP to obtain an optimal *fractional* solution. Let this solution be $x^*$.
3.  **Rounding:** Round the fractional solution $x^*$ to an *integral* solution $x_{rounded}$ such that the solution satisfies the problem's constraints and provides a good approximation to the optimal objective value.

**Why rounding is necessary:** The LP relaxation might yield fractional values (e.g., $x_i = 0.7$), which are not valid solutions for the original combinatorial problem (where variables typically represent choices like "include" or "exclude").

---

### 2. Randomized Rounding

**Core Idea:** Treat the fractional values obtained from LP relaxation as probabilities. Assign a variable to its integer value (0 or 1) randomly, based on its fractional value.

**Mechanism:**
Let $x^*$ be the optimal fractional solution to the LP relaxation, where $x_i^* \in [0, 1]$ for each variable $x_i$.
For each variable $x_i$:
*   Set $x_i = 1$ with probability $x_i^*$.
*   Set $x_i = 0$ with probability $1 - x_i^*$.

This process is performed independently for each variable.

**Analysis of Approximation Guarantee:**
The key is to analyze the *expected* value of the objective function and the probability of violating constraints.

**Example: Vertex Cover (LP Formulation and Randomized Rounding)**

*   **Problem:** Given a graph $G=(V, E)$, find a minimum set of vertices $C \subseteq V$ such that every edge $(u, v) \in E$ has at least one endpoint in $C$.
*   **ILP Formulation:**
    *   For each vertex $v \in V$, introduce a variable $x_v \in \{0, 1\}$, where $x_v=1$ if $v$ is in the vertex cover, and $x_v=0$ otherwise.
    *   **Objective:** Minimize $\sum_{v \in V} x_v$
    *   **Constraints:** For every edge $(u, v) \in E$, $x_u + x_v \ge 1$.

*   **LP Relaxation:**
    *   Minimize $\sum_{v \in V} x_v$
    *   Subject to:
        *   $x_u + x_v \ge 1$ for all $(u, v) \in E$
        *   $0 \le x_v \le 1$ for all $v \in V$

*   **Randomized Rounding:**
    1.  Solve the LP relaxation to get an optimal fractional solution $x^*$.
    2.  For each vertex $v$:
        *   Set $x_v = 1$ with probability $x_v^*$.
        *   Set $x_v = 0$ with probability $1 - x_v^*$.

*   **Analysis for Vertex Cover:**
    *   **Feasibility:** Consider an edge $(u, v) \in E$. The constraint is $x_u^* + x_v^* \ge 1$.
        The probability that this edge is *not* covered by the rounded solution is when both $x_u$ and $x_v$ are rounded to 0.
        $P(x_u=0 \text{ and } x_v=0) = P(x_u=0) \cdot P(x_v=0) = (1 - x_u^*) \cdot (1 - x_v^*)$
        Since $x_u^* + x_v^* \ge 1$, we have $1 - x_u^* \le x_v^*$ and $1 - x_v^* \le x_u^*$.
        Therefore, $(1 - x_u^*) \cdot (1 - x_v^*) \le x_v^* \cdot (1 - x_v^*) \le 1/4$ (maximum of $p(1-p)$ occurs at $p=1/2$).
        So, $P(\text{edge } (u,v) \text{ is not covered}) \le 1/4$.
        This means the probability that the edge *is* covered is at least $1 - 1/4 = 3/4$.
        This isn't a deterministic guarantee. To get a deterministic guarantee, we might need to repeat the rounding multiple times or use a different rounding technique.

    *   **Approximation Guarantee (Expected Value):**
        Let $C_{rounded}$ be the set of vertices chosen by randomized rounding.
        The expected size of the vertex cover is $E[|C_{rounded}|] = E[\sum_{v \in V} x_v] = \sum_{v \in V} E[x_v]$.
        $E[x_v] = 1 \cdot P(x_v=1) + 0 \cdot P(x_v=0) = x_v^*$.
        So, $E[|C_{rounded}|] = \sum_{v \in V} x_v^*$.
        Let $OPT_{LP}$ be the optimal value of the LP relaxation. Then $E[|C_{rounded}|] = OPT_{LP}$.
        Since the LP relaxation is a lower bound on the ILP's optimal solution ($OPT_{ILP}$), we have $OPT_{LP} \le OPT_{ILP}$.
        This implies $E[|C_{rounded}|] \le OPT_{ILP}$.
        This doesn't give a direct approximation factor in the standard sense (where we want $ALG \le \alpha \cdot OPT$).

    *   **Achieving Deterministic Guarantee with Repeated Trials:**
        To get a deterministic guarantee, we can repeat the randomized rounding process $k$ times. If an edge is not covered in any of the $k$ rounds, we can add both its endpoints to the cover.
        The probability that an edge $(u, v)$ is *not* covered in *any* of $k$ independent rounds is at most $(1/4)^k$.
        If we choose $k$ large enough (e.g., $k$ such that $(1/4)^k \le 1/M$, where $M$ is the number of edges), we can bound the number of uncovered edges.
        A common approach for Vertex Cover is to repeat the rounding $O(\log n)$ times. The expected number of vertices chosen is $OPT_{LP}$. The probability that an edge is not covered after $O(\log n)$ rounds is very small. If an edge is missed, we add its endpoints, which doubles the contribution of those endpoints. The expected total size is still within a constant factor of $OPT_{ILP}$.

    *   **A simpler Randomized Rounding for Vertex Cover:**
        1.  Solve LP relaxation to get $x^*$.
        2.  Pick an arbitrary edge $(u,v)$ such that $x_u^* + x_v^* < 1$. (This would imply the LP is infeasible, which shouldn't happen if the LP is correctly formulated and solvable.)
        3.  **Instead of probabilities, use a threshold:** If $x_v^* \ge 1/2$, set $x_v = 1$. Otherwise, set $x_v = 0$. This is deterministic rounding, but let's revisit randomized.

        A standard analysis for randomized rounding of Vertex Cover often considers the *expected* number of vertices. If we want a guarantee that *every* edge is covered, we need more sophisticated arguments.

        Let's stick to the expectation: $E[\sum x_v] = OPT_{LP}$. If we can show that the rounded solution is feasible with high probability, or that we can fix infeasibilities efficiently, we get an approximation.

        **For Vertex Cover, a key result:** Randomized rounding of the LP relaxation yields an expected approximation ratio of 2.
        *   The LP value $OPT_{LP}$ is a lower bound on the true minimum vertex cover $OPT$.
        *   The expected number of vertices picked is $E[\sum x_v^*] = OPT_{LP}$.
        *   Any edge $(u, v)$ is covered if at least one of $x_u$ or $x_v$ is rounded to 1.
        *   $P(\text{edge }(u,v) \text{ not covered}) = P(x_u=0, x_v=0) = (1-x_u^*)(1-x_v^*)$.
        *   Since $x_u^* + x_v^* \ge 1$, we have $(1-x_u^*)(1-x_v^*) \le x_v^*(1-x_v^*) \le 1/4$.
        *   Thus, $P(\text{edge }(u,v) \text{ is covered}) \ge 3/4$.

        To get a deterministic algorithm with a factor of 2, one approach is:
        1.  Solve LP to get $x^*$.
        2.  Set $C = \emptyset$.
        3.  For each $v \in V$: if $x_v^* \ge 1/2$, add $v$ to $C$.
        4.  For any edge $(u, v)$ not covered by $C$, add both $u$ and $v$ to $C$.
        *   The first set of vertices $C_1 = \{v \mid x_v^* \ge 1/2\}$ forms a valid partial vertex cover.
        *   For any edge $(u,v)$, either $x_u^* \ge 1/2$ or $x_v^* \ge 1/2$ (or both, because $x_u^*+x_v^* \ge 1$). If both $x_u^* < 1/2$ and $x_v^* < 1/2$, then $x_u^* + x_v^* < 1$, violating the LP constraint.
        *   If an edge $(u,v)$ is not covered by $C_1$, it means neither $u$ nor $v$ were added to $C_1$. This implies $x_u^* < 1/2$ and $x_v^* < 1/2$.
        *   The total size is $|C_1| + 2 \cdot (\text{number of uncovered edges})$.
        *   $|C_1| = \sum_{v: x_v^* \ge 1/2} x_v^*$.
        *   The LP objective is $\sum x_v^* = \sum_{v: x_v^* \ge 1/2} x_v^* + \sum_{v: x_v^* < 1/2} x_v^*$.
        *   For any edge $(u,v)$ not covered by $C_1$, we have $x_u^* < 1/2$ and $x_v^* < 1/2$. Adding both $u$ and $v$ ensures coverage. The LP constraint $x_u^* + x_v^* \ge 1$ is satisfied by picking both.
        *   The total size of the rounded cover $C_{rounded}$ is:
            $|C_{rounded}| = \sum_{v: x_v^* \ge 1/2} 1 + \sum_{(u,v) \text{ not covered}} 2$.
            We know $\sum_{v} x_v^* \le OPT_{ILP}$.
            $OPT_{LP} = \sum_{v} x_v^* \ge \sum_{v: x_v^* \ge 1/2} x_v^*$.
            Also, for any edge $(u,v)$, $x_u^* + x_v^* \ge 1$. If neither $u$ nor $v$ are in $C_1$ (i.e., $x_u^* < 1/2$ and $x_v^* < 1/2$), then this edge contributes to the second sum. The sum of $x_v^*$ for vertices in $C_1$ is $\le OPT_{LP}$.
            The total number of vertices added in the second step is at most the number of edges not covered by $C_1$.
            For each such edge $(u,v)$, we have $x_u^*+x_v^* \ge 1$ and $x_u^* < 1/2, x_v^* < 1/2$. This implies $x_u^* > 1/2 - \epsilon$ and $x_v^* > 1/2 - \epsilon$ might not hold.
            Consider the sum of $x_v^*$ for $v$ such that $x_v^* < 1/2$. Let this sum be $S_{<1/2}$.
            The number of vertices picked in $C_1$ is $|C_1| = \sum_{v: x_v^* \ge 1/2} 1$.
            We know $\sum_{v} x_v^* \le OPT_{ILP}$.
            Let $V_{<1/2} = \{ v \mid x_v^* < 1/2 \}$.
            $OPT_{LP} = \sum_{v \in C_1} x_v^* + \sum_{v \in V_{<1/2}} x_v^*$.
            The number of edges not covered by $C_1$ is the set of edges $(u, v)$ where $u, v \in V_{<1/2}$.
            For such an edge, $x_u^* + x_v^* \ge 1$.
            The size of the cover is $|C_1| + 2 \times (\text{number of edges }(u,v) \text{ with } u,v \in V_{<1/2})$.
            The total sum of $x_v^*$ for $v \in V_{<1/2}$ is $\sum_{v \in V_{<1/2}} x_v^*$.
            The number of vertices added in the second step is at most $\sum_{v \in V_{<1/2}} x_v^* / (1/2 - \epsilon)$ if we try to be very precise.
            A simpler argument:
            The size of $C_1$ is at most $2 \sum_{v: x_v^* \ge 1/2} x_v^*$. (Since $x_v^* \ge 1/2$, $1 \le 2x_v^*$).
            For each edge $(u, v)$ not covered by $C_1$, we add both $u$ and $v$. Both $u$ and $v$ must be in $V_{<1/2}$. The LP constraint $x_u^* + x_v^* \ge 1$ is satisfied.
            The total cost is $|C_1| + 2 \times (\text{# uncovered edges})$.
            Consider the LP value: $OPT_{LP} = \sum_{v: x_v^* \ge 1/2} x_v^* + \sum_{v: x_v^* < 1/2} x_v^*$.
            The number of vertices chosen from $C_1$ is $\sum_{v: x_v^* \ge 1/2} 1 \le \sum_{v: x_v^* \ge 1/2} 2x_v^*$.
            For edges $(u,v)$ not covered, $x_u^* < 1/2$ and $x_v^* < 1/2$. We add both $u$ and $v$. The total number of such edges is at most $\sum_{v: x_v^* < 1/2} x_v^* / (1/2 - \epsilon)$.
            A tighter analysis shows this deterministic rounding gives a 2-approximation.

---

### 3. Deterministic Rounding

**Core Idea:** Use deterministic rules to map fractional values to integer values.

**Common Techniques:**

1.  **Threshold Rounding (Nearest Integer Rounding):**
    *   For each variable $x_i$, if $x_i^* \ge \theta$ (a chosen threshold, usually $1/2$), set $x_i = 1$. Otherwise, set $x_i = 0$.
    *   The choice of $\theta$ impacts feasibility and the approximation ratio.

2.  **Rounding to Nearest Integer:**
    *   For $x_i^* \in [0, 1]$, set $x_i = \text{round}(x_i^*)$. This means $x_i = 1$ if $x_i^* \ge 1/2$ and $x_i = 0$ if $x_i^* < 1/2$. This is essentially threshold rounding with $\theta = 1/2$.

**Analysis of Approximation Guarantee:**

The key is to ensure that the rounded solution is feasible and that its objective value is close to the LP optimum.

**Example: Set Cover (LP Formulation and Threshold Rounding)**

*   **Problem:** Given a universe $U$ and a collection of subsets $S = \{S_1, S_2, \dots, S_m\}$ of $U$, where each subset $S_j$ has a cost $c_j$. Find a minimum-cost subcollection of $S$ whose union is $U$.
*   **ILP Formulation:**
    *   For each set $S_j$, introduce a variable $y_j \in \{0, 1\}$, where $y_j=1$ if $S_j$ is chosen, and $y_j=0$ otherwise.
    *   **Objective:** Minimize $\sum_{j=1}^m c_j y_j$.
    *   **Constraints:** For each element $i \in U$, at least one chosen set must contain $i$.
        $\sum_{j: i \in S_j} y_j \ge 1$ for all $i \in U$.

*   **LP Relaxation:**
    *   Minimize $\sum_{j=1}^m c_j y_j$
    *   Subject to:
        *   $\sum_{j: i \in S_j} y_j \ge 1$ for all $i \in U$
        *   $0 \le y_j \le 1$ for all $j \in \{1, \dots, m\}$

*   **Threshold Rounding (e.g., $\theta = 1/2$):**
    1.  Solve the LP relaxation to get an optimal fractional solution $y^*$.
    2.  Choose a threshold $\theta$. A common choice is $\theta = 1/2$.
    3.  Let $C_{rounded} = \{S_j \mid y_j^* \ge \theta\}$.

*   **Analysis for Set Cover (using $\theta=1/2$):**
    *   **Feasibility:** Consider an element $i \in U$. The constraint is $\sum_{j: i \in S_j} y_j^* \ge 1$.
        If we choose sets $S_j$ where $y_j^* \ge 1/2$, we need to show that all elements are covered.
        Suppose an element $i$ is *not* covered by $C_{rounded}$. This means for all $j$ such that $i \in S_j$, we have $y_j^* < 1/2$.
        Then, $\sum_{j: i \in S_j} y_j^* < \sum_{j: i \in S_j} (1/2) = |\{j \mid i \in S_j\}| \cdot (1/2)$.
        This doesn't directly guarantee that the constraint $\sum_{j: i \in S_j} y_j^* \ge 1$ is violated if $i$ is not covered.

    *   **Better Thresholding Argument for Set Cover:**
        Consider the LP value $OPT_{LP} = \sum_{j=1}^m c_j y_j^*$.
        Let $C_{rounded} = \{S_j \mid y_j^* \ge 1/2\}$.
        The cost of this cover is $\sum_{j: y_j^* \ge 1/2} c_j$.
        This sum is $\le \sum_{j: y_j^* \ge 1/2} 2 c_j y_j^* \le 2 \sum_{j=1}^m c_j y_j^* = 2 \cdot OPT_{LP}$.
        So, the cost is within a factor of 2 of the LP optimum.

        **Problem:** Is $C_{rounded}$ guaranteed to be a valid set cover?
        No. An element $i$ might be missed if all sets $S_j$ containing $i$ have $y_j^* < 1/2$.
        If $\sum_{j: i \in S_j} y_j^* \ge 1$, and all $y_j^* < 1/2$, then there must be at least two sets $S_{j_1}, S_{j_2}$ containing $i$ with $y_{j_1}^* \ge 1/2$ and $y_{j_2}^* \ge 1/2$ to satisfy the constraint. This implies that if the constraint is met, at least one set containing $i$ must have $y_j^* \ge 1/2$ *unless* the LP constraint is very close to 1 and all $y_j^*$ are just below 1/2.

        To fix this: If an element $i$ is not covered by $C_{rounded}$, it means for all $j$ with $i \in S_j$, $y_j^* < 1/2$. The LP constraint $\sum_{j: i \in S_j} y_j^* \ge 1$ means that for at least *some* element $i$, there must be sets $S_{j_1}, S_{j_2}, \dots, S_{j_k}$ containing $i$ with $y_{j_1}^*, \dots, y_{j_k}^* \ge 1/2$ to satisfy the constraint. If $i$ is not covered, it means all $y_j^*$ for sets containing $i$ are $< 1/2$.
        This implies the LP constraint for element $i$ is $\sum_{j: i \in S_j} y_j^* < \sum_{j: i \in S_j} 1/2$.
        This doesn't make sense. The LP constraint $\sum_{j: i \in S_j} y_j^* \ge 1$ means that *if* an element $i$ is not covered, it means that for *all* sets $S_j$ containing $i$, $y_j^* < 1/2$. If this happens for *any* element $i$, then the LP constraint for that element is violated by the thresholding rule.

        This indicates that threshold rounding with $\theta=1/2$ is not always feasible for Set Cover.

    *   **Correct Deterministic Rounding for Set Cover:**
        The standard LP relaxation for Set Cover yields an approximation ratio of $H_n = 1 + 1/2 + \dots + 1/n$, the $n$-th harmonic number, using a greedy approach.
        The LP relaxation can be used to design a *randomized* algorithm that has an expected approximation ratio of $H_n$.

        For a *deterministic* algorithm for Set Cover with $H_n$ approximation:
        1. Solve the LP relaxation.
        2. For each element $i \in U$, find the set $S_j$ containing $i$ that has the *minimum cost per uncovered element*. This is a greedy approach.

        The LP itself can be interpreted in a dual way.

        Let's consider a specific deterministic rounding *strategy* that works for some problems:

        **Example: Maximum Coverage with Budget (related to Set Cover)**
        If we have a budget $B$ and want to maximize the number of covered elements.
        LP: Maximize $\sum_{i \in U} z_i$ subject to $\sum_{j: i \in S_j} y_j \ge z_i$, $\sum c_j y_j \le B$, $y_j \in \{0,1\}, z_i \in \{0,1\}$.
        Relax to $0 \le y_j, z_i \le 1$.
        Solve LP. Get $y_j^*, z_i^*$.
        Round $y_j^*$ to get a feasible set of chosen sets with total cost $\le B$.
        If $y_j^* \ge 1/m$ (where $m$ is number of sets), choose $S_j$. This might not respect the budget.

---

### 4. Applications to Various Problems

Let's look at specific problems where these techniques are applied.

#### 4.1. Vertex Cover

*   **LP Relaxation:** Min $\sum x_v$ s.t. $x_u + x_v \ge 1$ for $(u,v) \in E$, $0 \le x_v \le 1$.
*   **Randomized Rounding:**
    *   For each $v$, set $x_v=1$ with probability $x_v^*$.
    *   **Approximation:** Expected approximation ratio is 2. $E[\sum x_v] = OPT_{LP}$.
    *   **Issue:** The solution is not guaranteed to be a valid vertex cover.
    *   **Fix:** Repeat $O(\log n)$ times. If an edge $(u,v)$ is missed, add both $u$ and $v$.
        The expected number of vertices remains $O(OPT_{LP})$.
        With high probability, after $O(\log n)$ rounds, all edges are covered. The total size is $O(OPT_{LP})$.
*   **Deterministic Rounding (Thresholding):**
    *   Set $x_v=1$ if $x_v^* \ge 1/2$, else $x_v=0$.
    *   If an edge $(u,v)$ is not covered (i.e., $x_u=0, x_v=0$), it implies $x_u^* < 1/2$ and $x_v^* < 1/2$.
    *   Add both $u$ and $v$ to cover such edges.
    *   **Approximation:** 2-approximation. The size of the cover is $\sum_{v: x_v^* \ge 1/2} 1 + 2 \times (\text{# uncovered edges})$.
        This can be shown to be $\le 2 \cdot OPT_{LP}$.

#### 4.2. Set Cover

*   **LP Relaxation:** Min $\sum c_j y_j$ s.t. $\sum_{j: i \in S_j} y_j \ge 1$ for $i \in U$, $0 \le y_j \le 1$.
*   **Randomized Rounding:**
    *   For each $j$, set $y_j=1$ with probability $y_j^*$.
    *   **Issue:** The solution might not cover all elements.
    *   **Fix:** Repeat $k$ times. If an element $i$ is still not covered, pick the cheapest set containing $i$.
    *   A common analysis shows an expected approximation ratio of $H_n$, where $n=|U|$. This is achieved using a slightly different randomized rounding or by relating it to the greedy algorithm.
    *   For each element $i$, if it's not covered, pick a set $S_j$ containing $i$ with probability proportional to $y_j^*/\sum_{k:i \in S_k} y_k^*$. This is more complex.

*   **Deterministic Rounding:**
    *   The simple thresholding ($y_j^* \ge 1/2$) does not guarantee feasibility for Set Cover.
    *   A common technique to get an $H_n$ approximation for Set Cover is the greedy algorithm, which doesn't directly use LP rounding in its basic form, but the LP can prove its approximation ratio.

#### 4.3. Maximum Satisfiability (Max-SAT)

*   **Problem:** Given a boolean formula in Conjunctive Normal Form (CNF), find an assignment of truth values to variables that satisfies the maximum number of clauses.
*   **ILP Formulation for Max-SAT:**
    *   For each variable $x_i$, let $z_i \in \{0, 1\}$, where $z_i=1$ if $x_i$ is true, $z_i=0$ if $x_i$ is false.
    *   For each clause $C_k$, let $w_k$ be its weight (or 1 if unweighted).
    *   For each clause $C_k$, we want to satisfy it. A clause is satisfied if at least one of its literals is true.
    *   Let $C_k = L_{k,1} \lor L_{k,2} \lor \dots \lor L_{k,p_k}$, where $L_{k,i}$ is a literal (e.g., $x_i$ or $\neg x_i$).
    *   Introduce a variable $y_k \in \{0, 1\}$, where $y_k=1$ if clause $C_k$ is satisfied, $y_k=0$ otherwise.
    *   **Objective:** Maximize $\sum_k w_k y_k$.
    *   **Constraints:** For each clause $C_k$: $y_k \le \sum_{i: x_i \text{ in } C_k} z_i + \sum_{i: \neg x_i \text{ in } C_k} (1-z_i)$.
        This inequality ensures that if all literals in $C_k$ are false, then $y_k$ must be 0. If at least one literal is true, $y_k$ can be 1.

*   **LP Relaxation:**
    *   Maximize $\sum_k w_k y_k$
    *   Subject to:
        *   $y_k \le \sum_{i: x_i \text{ in } C_k} z_i + \sum_{i: \neg x_i \text{ in } C_k} (1-z_i)$ for all $k$.
        *   $0 \le z_i \le 1$ for all $i$.
        *   $0 \le y_k \le 1$ for all $k$.

*   **Randomized Rounding for Max-SAT:**
    1.  Solve the LP relaxation to get $z_i^*$ and $y_k^*$.
    2.  For each variable $x_i$: set $x_i$ to true with probability $z_i^*$, and false with probability $1-z_i^*$.
    3.  Let $Z_{rounded}$ be the assignment.
    4.  **Analysis:** The expected number of satisfied clauses is $E[\sum_k w_k y_k]$.
        The LP value is $OPT_{LP} = \sum_k w_k y_k^*$.
        Consider a clause $C_k = L_{k,1} \lor \dots \lor L_{k,p_k}$.
        Let $p$ be the number of literals in $C_k$.
        The probability that $C_k$ is *not* satisfied is the probability that all its literals are false.
        $P(C_k \text{ not satisfied}) = P(\text{all } L_{k,j} \text{ false})$.
        If $L_{k,j} = x_i$, this is $P(z_i=0) = 1-z_i^*$.
        If $L_{k,j} = \neg x_i$, this is $P(z_i=1) = z_i^*$.
        Let $I_k = \{ i \mid x_i \text{ in } C_k \}$, $J_k = \{ i \mid \neg x_i \text{ in } C_k \}$.
        $P(C_k \text{ not satisfied}) = \prod_{i \in I_k} (1-z_i^*) \cdot \prod_{i \in J_k} z_i^*$.
        The LP constraint for $C_k$ is $y_k^* \le \sum_{i \in I_k} z_i^* + \sum_{i \in J_k} (1-z_i^*) = \sum_{i \in I_k} z_i^* + |J_k| - \sum_{i \in J_k} z_i^*$.
        The probability of satisfaction is $1 - \prod_{i \in I_k} (1-z_i^*) \cdot \prod_{i \in J_k} z_i^*$.
        Using the fact that $1 - \prod p_i \ge 1 - (1 - \sum p_i/k)^k$ for $p_i \in [0,1]$ and the LP constraint, we can show that the probability of satisfying clause $C_k$ is at least $(1 - 1/e) \cdot y_k^*$.
        This leads to an approximation ratio of $(1 - 1/e) \approx 0.632$. This is a famous result by Goemans and Williamson.

*   **Deterministic Rounding for Max-SAT:**
    *   Setting $z_i = 1/2$ for all variables might not be optimal.
    *   A simple deterministic rounding: pick the assignment that satisfies more clauses from the two assignments $z_i=0$ or $z_i=1$ based on $z_i^*$. If $z_i^* \ge 1/2$, set $z_i=1$.
    *   If $z_i^* \ge 1/2$ for all $i$, this can be good.
    *   However, the LP relaxation for Max-SAT doesn't directly use the $y_k$ variables in the same way as other problems. The key is the $\sum_{i \in I_k} z_i^* + \sum_{i \in J_k} (1-z_i^*) \ge y_k^*$ constraint.
    *   For unweighted Max-SAT, a simple deterministic approach is to round $z_i=1$ if $z_i^* \ge 1/2$. The approximation ratio is $1/2$. This is because each clause with $p$ literals is satisfied if at least one literal is true. If $p$ literals are in the clause, and $k$ of them are true, the clause is satisfied.
    *   If $z_i^* \ge 1/2$ for all $i$ where $x_i$ appears in a clause, then the LP constraint $\sum z_i + \sum (1-z_i) \ge y_k^*$ might be violated.
    *   Consider the LP value $OPT_{LP}$. The randomized approach gives $E[\text{satisfied clauses}] \ge (1 - 1/e) OPT_{LP}$.
    *   The dual of the LP gives a different perspective.

---

### 5. Practice Questions and Exercises

**Question 1:**
Consider the LP relaxation for Vertex Cover: Minimize $\sum x_v$ subject to $x_u + x_v \ge 1$ for all edges $(u,v) \in E$, and $0 \le x_v \le 1$.
Suppose for a graph, the optimal LP solution is $x_v^* = 1/3$ for all $v \in V$.
a) If you use randomized rounding, what is the expected number of vertices in the rounded vertex cover?
b) What is the probability that a specific edge $(u,v)$ is NOT covered by the randomized rounding?
c) If you use deterministic rounding by setting $x_v=1$ if $x_v^* \ge 1/2$, would $u$ and $v$ be selected in this case?

**Answer 1:**
a) The expected number of vertices is $\sum_v x_v^*$. If $x_v^* = 1/3$ for all $n$ vertices, the expected number is $n \times (1/3) = n/3$.
b) For an edge $(u,v)$, the constraint is $x_u^* + x_v^* \ge 1$. Here, $1/3 + 1/3 = 2/3 < 1$. This means the LP solution is *infeasible* if $x_v^* = 1/3$ for all $v$. Assuming a typo and $x_u^* + x_v^* \ge 1$ holds for all edges (e.g., if $x_v^*=0.6$ for half and $x_v^*=0.4$ for the other half, or some combination that sums to $\ge 1$).
Let's assume a valid LP solution $x_v^*$ for all $v$ such that $x_u^* + x_v^* \ge 1$. The probability an edge $(u,v)$ is not covered is $(1-x_u^*)(1-x_v^*)$. If $x_u^*=1/3$ and $x_v^*=2/3$ (satisfying $x_u^*+x_v^* \ge 1$), the probability of not being covered is $(1-1/3)(1-2/3) = (2/3)(1/3) = 2/9$.
c) If using deterministic rounding with $x_v=1$ if $x_v^* \ge 1/2$, and $x_v^* = 1/3$ for all $v$, then neither $u$ nor $v$ would be selected since $1/3 < 1/2$.

**Question 2:**
Consider the LP relaxation for Max-SAT. Clause $C_1 = x_1 \lor \neg x_2$.
The LP solution gives $z_1^* = 0.7$ and $z_2^* = 0.4$. The weight of the clause $w_1 = 1$.
The LP constraint for $C_1$ is $y_1 \le z_1 + (1-z_2)$.
LP value $y_1^* \le 0.7 + (1-0.4) = 0.7 + 0.6 = 1.3$. Since $y_1 \le 1$, $y_1^* \le 1$.
Let's assume the LP solver gives $y_1^* = 1$.
a) If you use randomized rounding, what is the probability that clause $C_1$ is satisfied?
b) If you use deterministic rounding by setting $x_i=1$ if $z_i^* \ge 1/2$, what is the truth assignment and is $C_1$ satisfied?

**Answer 2:**
a) Clause $C_1 = x_1 \lor \neg x_2$.
Randomized rounding: $x_1$ is true with probability $z_1^*=0.7$, $x_2$ is false with probability $1-z_2^* = 1-0.4 = 0.6$.
The clause $C_1$ is *not* satisfied if $x_1$ is false AND $\neg x_2$ is false (i.e., $x_2$ is true).
$P(\text{C1 not satisfied}) = P(x_1 \text{ is false}) \cdot P(x_2 \text{ is true})$
$P(x_1 \text{ is false}) = 1 - z_1^* = 1 - 0.7 = 0.3$.
$P(x_2 \text{ is true}) = z_2^* = 0.4$.
$P(\text{C1 not satisfied}) = 0.3 \times 0.4 = 0.12$.
The probability that $C_1$ is satisfied is $1 - P(\text{C1 not satisfied}) = 1 - 0.12 = 0.88$.

b) Deterministic rounding:
$z_1^* = 0.7 \ge 0.5$, so set $x_1$ to true.
$z_2^* = 0.4 < 0.5$, so set $x_2$ to false.
The assignment is $x_1=\text{true}, x_2=\text{false}$.
For clause $C_1 = x_1 \lor \neg x_2$:
$x_1$ is true. So, the clause is satisfied.

---

### 6. Important Points to Remember

*   **LP Relaxation + Rounding is a General Strategy:** Many NP-hard problems can be tackled by relaxing their ILP formulation, solving the LP, and then rounding the fractional solution.
*   **Randomized Rounding:** Treats fractional values as probabilities. Offers good *expected* approximation ratios. Guarantees may require repetition or additional techniques.
*   **Deterministic Rounding (Thresholding):** Uses fixed thresholds (often 1/2) to decide integer values. Can be simpler to implement but might require careful analysis to ensure feasibility and approximation ratio.
*   **Approximation Guarantee:** The quality of the approximation depends on the specific problem, the LP formulation, and the rounding technique used.
*   **Feasibility:** A critical aspect of rounding is ensuring the resulting integral solution is valid for the original problem. For some problems (like Set Cover), simple thresholding might violate constraints.
*   **Max-SAT:** Randomized rounding achieves a $(1-1/e)$ approximation ratio, a significant result.
*   **Vertex Cover:** Both randomized (expected) and deterministic (thresholding) rounding can yield a 2-approximation.
*   **Set Cover:** While LP relaxation is powerful, the greedy algorithm is often the go-to for its $H_n$ approximation guarantee. LP can be used to prove this.

---
