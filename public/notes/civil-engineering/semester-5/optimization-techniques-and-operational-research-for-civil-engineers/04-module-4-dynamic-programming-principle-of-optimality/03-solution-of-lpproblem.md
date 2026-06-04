---
title: "solution of L.P.Problem"
subject: "OPTIMIZATION TECHNIQUES AND OPERATIONAL RESEARCH FOR CIVIL ENGINEERS"
module: "Module 4: Dynamic Programming: Principle of optimality"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810fb3"
status: "completed"
scrapedAt: "2026-05-20T18:50:50.254Z"
---
## Module 4: Dynamic Programming: Principle of Optimality

### Topic: Solution of L.P. Problems (in the context of Dynamic Programming)

**Important Note:** While this module focuses on Dynamic Programming and its Principle of Optimality, the topic of "Solution of L.P. Problems" is typically addressed through methods like the Simplex Method or Graphical Method. This module will explore how certain **types** of Linear Programming (LP) problems can be structured and solved using Dynamic Programming principles, particularly those that exhibit **optimal substructure** and **overlapping subproblems**. It's crucial to understand that Dynamic Programming is *not* the primary or general-purpose method for solving all LP problems.

---

### 1. Introduction to Dynamic Programming

Dynamic Programming (DP) is a powerful algorithmic technique for solving complex problems by breaking them down into simpler, overlapping subproblems. It solves each subproblem only once and stores its solution to avoid redundant computations.

**Key Characteristics of Problems Solvable by DP:**

*   **Optimal Substructure:** The optimal solution to the overall problem can be constructed from optimal solutions to its subproblems.
*   **Overlapping Subproblems:** The same subproblems are encountered multiple times during the computation of the overall solution.

---

### 2. The Principle of Optimality

**Definition:** The Principle of Optimality states that if a sequence of decisions leads to an optimal overall solution, then any subsequence of decisions also represents an optimal solution to the subproblem defined by that subsequence.

In simpler terms, if you've made the best choices to reach a certain point, any further optimal choices from that point will still lead to the overall best solution.

**Mathematical Formulation:**

Consider a problem that can be broken down into stages. Let $f(x)$ be the optimal value of the problem starting from state $x$. If the first decision takes us from state $x$ to state $y$, and the remaining problem from state $y$ onwards has an optimal value $f(y)$, then the Principle of Optimality implies:

$f(x) = \text{optimal decision from } x \left( \text{value of first decision} + f(y) \right)$

This means that to find the optimal solution for a state, we need to consider all possible first decisions and choose the one that, combined with the optimal solution of the resulting subproblem, yields the best overall outcome.

---

### 3. Solution of L.P. Problems using Dynamic Programming

While not a general-purpose method for all LPs, DP can be effectively applied to certain LP formulations that exhibit the characteristics of DP. These are often problems that can be modeled as a sequence of decisions over time or stages.

**When DP is Applicable to LP-like Problems:**

*   **Resource Allocation Problems:** Distributing a limited resource among several activities or stages.
*   **Sequencing Problems:** Determining the optimal order of operations.
*   **Shortest Path Problems (with specific structures):** While Dijkstra's or Bellman-Ford are standard, DP concepts underpin them.

**Common LP Problem Structures Solvable by DP:**

*   **Problems with a Sequential Structure:** Where decisions are made at discrete stages, and the outcome of one stage affects the next.
*   **Problems with Integer or Binary Variables:** DP is often more natural for discrete decision variables.

**Example: Resource Allocation (A simple LP-like structure)**

Consider a company that needs to allocate a budget of $B$ to $N$ projects. Each project $i$ has a cost $c_i$ and provides a certain benefit $b_i$. The objective is to maximize the total benefit within the budget.

This can be formulated as an Integer Programming problem:

Maximize $\sum_{i=1}^{N} b_i x_i$
Subject to: $\sum_{i=1}^{N} c_i x_i \leq B$
$x_i \in \{0, 1\}$ (where $x_i = 1$ if project $i$ is selected, $0$ otherwise)

**Solving this using Dynamic Programming:**

We can define a DP state based on the projects considered and the remaining budget.

Let $DP(i, j)$ be the maximum benefit achievable by considering projects $1$ to $i$ with a budget of $j$.

**Recurrence Relation:**

For project $i$ with cost $c_i$ and benefit $b_i$:

*   **Case 1: Project $i$ is NOT selected:** The maximum benefit is the same as considering projects $1$ to $i-1$ with budget $j$.
    $DP(i, j) = DP(i-1, j)$

*   **Case 2: Project $i$ IS selected (if budget allows, i.e., $j \geq c_i$):** The maximum benefit is the benefit of project $i$ plus the maximum benefit from considering projects $1$ to $i-1$ with the remaining budget ($j - c_i$).
    $DP(i, j) = b_i + DP(i-1, j - c_i)$

Combining these, the recurrence relation becomes:

$DP(i, j) = \begin{cases} DP(i-1, j) & \text{if } j < c_i \\ \max(DP(i-1, j), b_i + DP(i-1, j - c_i)) & \text{if } j \geq c_i \end{cases}$

**Base Cases:**

*   $DP(0, j) = 0$ for all $j \geq 0$ (no projects considered, no benefit).
*   $DP(i, 0) = 0$ for all $i \geq 0$ (no budget, no benefit).

**Final Answer:** The maximum benefit will be $DP(N, B)$.

**Backtracking for Solution:** To find which projects were selected, we can backtrack through the DP table. If $DP(i, j) = DP(i-1, j)$, project $i$ was not selected. If $DP(i, j) = b_i + DP(i-1, j - c_i)$, project $i$ was selected.

---

### 4. Connection to the Principle of Optimality in LP

The Principle of Optimality is inherently applied when we build the DP solution for an LP-like problem. When calculating $DP(i, j)$, we consider two possibilities for project $i$: either include it or exclude it.

*   If we exclude project $i$, the optimal solution relies on the optimal solution for the subproblem of considering projects $1$ to $i-1$ with the same budget $j$.
*   If we include project $i$, the optimal solution relies on the optimal solution for the subproblem of considering projects $1$ to $i-1$ with the remaining budget ($j-c_i$) plus the benefit of project $i$.

The decision at stage $i$ (whether to include the project or not) is made based on what leads to the optimal outcome for the current state ($i, j$), assuming that the subproblem solutions $DP(i-1, \cdot)$ are themselves optimal. This is a direct application of the Principle of Optimality.

---

### 5. Examples and Applications in Civil Engineering

While pure LPs are usually solved via Simplex, the DP approach is useful for problems that have a sequential or stage-wise nature, which are common in civil engineering.

**Example 1: Construction Sequencing**

Consider scheduling a series of construction tasks. The order in which tasks are performed can significantly impact the total project duration and cost. If each task has a duration and a resource requirement, and there are dependencies between tasks, this can be modeled as a DP problem to find the optimal sequence to minimize completion time or cost.

**Example 2: Network Flow Optimization (Specific Types)**

Certain network flow problems, especially those with capacity constraints on arcs and a sequential flow through stages, can be tackled with DP. For instance, finding the minimum cost to transport goods through a series of transfer points.

**Example 3: Resource Allocation in Infrastructure Development**

Allocating a fixed budget for developing different phases of a large infrastructure project (e.g., a highway network) across several years, where the benefit from one phase might enable or improve later phases.

---

### 6. Practice Questions/Exercises

**Question 1:**

A civil engineer is designing a pipeline network and needs to select pipes from a list. Each pipe type has a cost per unit length and a flow capacity. The engineer has a total budget $B$ and needs to achieve a minimum total flow capacity $F$. Formulate this as a DP problem.

**Question 2:**

You are tasked with managing the maintenance schedule for a bridge over $T$ years. Each year $t$, you can either perform routine maintenance (cost $C_R$, improves structure by $I_R$) or major rehabilitation (cost $C_M$, improves structure by $I_M$). The bridge's structural integrity decreases over time. You want to maximize the bridge's structural integrity after $T$ years, given an initial integrity level and a budget.

Define the DP state, recurrence relation, and base cases for this problem.

---

### 7. Answers to Practice Questions

**Answer 1 (Conceptual Formulation):**

This is similar to the knapsack problem. Let's assume we are selecting a total length $L$ of pipe.

Let $DP(i, l)$ be the maximum flow capacity achievable by considering pipe types $1$ to $i$ with a total length of $l$.

*   **State:** $DP(i, l)$ = maximum flow capacity using first $i$ pipe types with total length $l$.
*   **Decision:** For pipe type $i$ (cost $c_i$, flow $f_i$ per unit length), decide how many units of length $x_i$ to use, such that $x_i \cdot c_i \leq \text{remaining budget}$. This becomes complex if we consider exact length.

A more direct DP formulation for a similar problem (like the unbounded knapsack if we can use multiple units of the same pipe type):

Let $DP(b)$ be the maximum flow capacity achievable with a budget of $b$.

*   **State:** $DP(b)$ = maximum flow capacity with budget $b$.
*   **Decision:** For each pipe type $j$ with cost $c_j$ and flow $f_j$, if $b \geq c_j$, we can potentially include it.
*   **Recurrence Relation:** $DP(b) = \max(DP(b), f_j + DP(b - c_j))$ for all pipe types $j$.
*   **Base Case:** $DP(0) = 0$.

This formulation maximizes flow for a given budget. The original problem statement also includes a minimum total flow requirement, which would likely require a different DP state or approach (e.g., finding the minimum cost for a required flow).

**Answer 2:**

*   **State:** Let $DP(t, I)$ be the maximum structural integrity of the bridge at the beginning of year $t$, given that the current structural integrity is $I$.
*   **Decision:** At the beginning of year $t$, the engineer can choose:
    1.  **Routine Maintenance:** Cost $C_R$, integrity improvement $I_R$. New integrity at start of year $t+1$ is $\min(\text{max_integrity}, I + I_R)$.
    2.  **Major Rehabilitation:** Cost $C_M$, integrity improvement $I_M$. New integrity at start of year $t+1$ is $\min(\text{max_integrity}, I + I_M)$.
    3.  **No Maintenance:** Integrity at start of year $t+1$ is $\max(0, I - \text{decay})$. (Assuming decay).

    The problem statement is slightly ambiguous about how integrity decreases. Let's assume for simplicity that the decision is made at the end of each year for the *next* year, and integrity degrades between maintenance actions.

    Let's refine the state and problem: we want to maximize integrity at the *end* of year $T$.

    Let $DP(t, I)$ be the maximum achievable structural integrity at the *end* of year $t$, given that the integrity at the *beginning* of year $t$ was $I$.

    Assume structural integrity degrades by $\delta$ each year if no maintenance is done. The decision is made at the beginning of the year for that year's activities.

    Let $DP(t, I_{start})$ be the maximum final integrity after year $t$, given the integrity at the start of year $t$ was $I_{start}$.

    *   **State:** $DP(t, I_{start})$: Maximum final integrity achievable from year $t$ to year $T$, given the bridge integrity at the start of year $t$ is $I_{start}$.
    *   **Parameters:**
        *   $t$: current year (from 1 to T)
        *   $I_{start}$: integrity at the start of year $t$
        *   $C_R, I_R$: cost and gain for routine maintenance
        *   $C_M, I_M$: cost and gain for major rehabilitation
        *   $D$: annual integrity decay if no maintenance is performed.
        *   $B_t$: remaining budget at the start of year $t$.
        *   $I_{max}$: maximum possible integrity.
    *   **Recurrence Relation:**
        Consider year $t$ with initial integrity $I_{start}$ and budget $B_t$.
        Let $I_{end\_of\_year}$ be the integrity at the end of year $t$.
        The integrity at the start of year $t+1$ will be $I_{end\_of\_year} - D$ (if no maintenance is performed in year $t+1$ before its integrity calculation, or if we consider the state *after* decay).

        Let's simplify and focus on decisions at the start of each year, aiming for total integrity at the end of $T$.

        Let $DP(t, I_{current}, \text{budget\_spent})$ be the maximum structural integrity at the end of year $T$, considering decisions from year $t$ onwards, given current integrity $I_{current}$ and budget spent so far. This state space is too large.

        A more practical DP approach:
        Let $DP(t, I_{available})$ be the minimum budget spent to achieve at least integrity $I_{available}$ by the end of year $t$.

        This is also complex. Let's re-read the objective: "maximize the bridge's structural integrity after $T$ years, given an initial integrity level and a budget." This suggests the budget is a total constraint.

        Let $DP(t, \text{budget\_remaining})$ be the maximum integrity achievable at the end of year $t$ with the given budget.

        Let's try a simpler DP state for the bridge maintenance:
        Let $DP(t, I)$ be the maximum integrity achievable at the end of year $t$, given the integrity at the start of year $t$ was $I$.

        For year $t$, initial integrity $I_{start}$:
        The integrity at the end of year $t$ depends on the decision made for year $t$.
        Let's assume the decision is made at the *start* of the year, and the effect is immediate.

        Let $f(t, I_{start})$ be the maximum integrity at the end of year $T$, given that at the start of year $t$, the integrity is $I_{start}$, and we have budget $B$ available.

        **Let's assume budget is a constraint for the entire $T$ years, and we want to maximize final integrity.**

        This problem is closer to a "stage-wise" decision.
        Let $DP(t, I)$ be the maximum integrity achievable at the end of year $t$, given that the integrity at the start of year $t$ was $I$.

        **Simplified DP Formulation for Bridge Maintenance:**

        Let $DP(t, I)$ be the maximum integrity achievable *at the end of year $t$*, starting from year 1 with initial integrity $I_0$ and a total budget $B$.
        This implies the DP state needs to include the budget spent.

        Let's consider the number of years $T$ as the "stages".
        Let $DP(k, \text{current\_integrity})$ be the minimum budget required to achieve `current_integrity` after $k$ years.

        **A more common DP approach for this type of problem:**

        Let $DP(t, I_{current})$ be the maximum total benefit (or a proxy for it, like future maintenance cost reduction) that can be achieved from year $t$ to year $T$, given that the bridge's integrity at the start of year $t$ is $I_{current}$. This would require the budget to be part of the state or handled differently.

        **Let's assume we are deciding on a sequence of actions over T years with a total budget B.**

        Let $DP(t, \text{budget\_spent})$ be the maximum integrity achievable at the end of year $t$, having spent `budget_spent`.

        This is still difficult because the integrity decay depends on the state of the bridge *without* maintenance in a given year.

        **Let's re-frame the DP state:**

        Let $DP(k, \text{budget\_spent})$ be the maximum integrity of the bridge at the end of year $k$, having spent exactly `budget_spent`.
        To calculate $DP(k, B_k)$, we consider actions taken in year $k$:
        From state $DP(k-1, B_{k-1})$:
        1.  **No Maintenance in Year $k$**:
            Integrity at start of year $k$: $I_{start\_k}$. (This is the tricky part: how to know $I_{start\_k}$ without it being in state).
            Integrity at end of year $k$: $I_{start\_k} - D$.
        2.  **Routine Maintenance in Year $k$**:
            Budget spent: $B_{k-1} + C_R$.
            Integrity at start of year $k$: $I_{start\_k}$.
            Integrity at end of year $k$: $\min(I_{max}, I_{start\_k} + I_R)$.
        3.  **Major Rehab in Year $k$**:
            Budget spent: $B_{k-1} + C_M$.
            Integrity at start of year $k$: $I_{start\_k}$.
            Integrity at end of year $k$: $\min(I_{max}, I_{start\_k} + I_M)$.

        The problem is that the "integrity" itself needs to be part of the state for decay to be modeled correctly.

        **Revised DP State for Question 2:**

        Let $DP(t, I_{current})$ be the minimum budget required to achieve structural integrity $I_{current}$ at the end of year $t$.

        *   **State:** $DP(t, I)$: Minimum budget spent to achieve integrity $I$ at the end of year $t$.
        *   **Parameters:**
            *   $t \in \{1, \dots, T\}$ (current year)
            *   $I$ (integrity level, discretized perhaps)
            *   $C_R, I_R, C_M, I_M, D, I_{max}$ (as before)
        *   **Base Case:** $DP(0, I_0) = 0$. For all other $I \neq I_0$, $DP(0, I) = \infty$. (Assuming $I_0$ is initial integrity at start of year 1).
        *   **Recurrence Relation:** To calculate $DP(t, I_{new})$ (integrity at end of year $t$):
            We consider the state at the end of year $t-1$, say $I_{prev}$.
            The integrity at the start of year $t$ would be $I_{prev} - D$.

            Consider achieving $I_{new}$ at the end of year $t$:
            1.  **From routine maintenance in year $t$**:
                Requires integrity $I_{start\_t}$ at the start of year $t$ such that $I_{start\_t} + I_R = I_{new}$.
                So, $I_{start\_t} = I_{new} - I_R$.
                This state must have been reached at the end of year $t-1$, i.e., $DP(t-1, I_{prev})$ where $I_{prev} - D = I_{start\_t}$.
                Cost for this path: $DP(t-1, I_{prev}) + C_R$.
            2.  **From major rehab in year $t$**:
                Requires integrity $I_{start\_t}$ at the start of year $t$ such that $I_{start\_t} + I_M = I_{new}$.
                So, $I_{start\_t} = I_{new} - I_M$.
                Cost for this path: $DP(t-1, I_{prev}) + C_M$.
            3.  **From no maintenance in year $t$**:
                Requires integrity $I_{start\_t}$ at the start of year $t$ such that $I_{start\_t} - D = I_{new}$.
                So, $I_{start\_t} = I_{new} + D$.
                Cost for this path: $DP(t-1, I_{prev})$.

            This means for a target integrity $I_{new}$ at end of year $t$, we look at possible prior states $I_{prev}$ at end of year $t-1$:
            *   If we did Routine Maint: $I_{new} = I_{start\_t} + I_R$, and $I_{start\_t} = I_{prev} - D$. So $I_{new} = (I_{prev} - D) + I_R$.
                Cost: $DP(t-1, I_{prev}) + C_R$.
            *   If we did Major Rehab: $I_{new} = I_{start\_t} + I_M$, and $I_{start\_t} = I_{prev} - D$. So $I_{new} = (I_{prev} - D) + I_M$.
                Cost: $DP(t-1, I_{prev}) + C_M$.
            *   If we did No Maint: $I_{new} = I_{start\_t} - D$, and $I_{start\_t} = I_{prev} - D$. So $I_{new} = (I_{prev} - D) - D = I_{prev} - 2D$.
                Cost: $DP(t-1, I_{prev})$.

            This implies:
            $DP(t, I_{new}) = \min($
                $\min_{I_{prev} \text{ s.t. } I_{prev}-D+I_R = I_{new}} \{DP(t-1, I_{prev}) + C_R\}$,
                $\min_{I_{prev} \text{ s.t. } I_{prev}-D+I_M = I_{new}} \{DP(t-1, I_{prev}) + C_M\}$,
                $\min_{I_{prev} \text{ s.t. } I_{prev}-2D = I_{new}} \{DP(t-1, I_{prev}})$
            $)$

            This formulation is still difficult due to discretizing integrity and the complex dependencies.
            A common simplification is to let the state be the *year* and the *integrity at the start of that year*.

        **Final Attempt at a practical DP for Q2:**

        Let $DP[t][I]$ be the minimum budget spent to achieve integrity $I$ at the START of year $t$.

        *   **State:** $DP[t][I]$: Minimum budget spent to have integrity $I$ at the start of year $t$.
        *   **Parameters:** $t \in \{1, \dots, T+1\}$, $I \in [0, I_{max}]$ (discretized). $C_R, I_R, C_M, I_M, D$. Initial Integrity $I_0$. Total Budget $B$.
        *   **Base Case:** $DP[1][I_0] = 0$. All other $DP[1][I] = \infty$.
        *   **Recurrence Relation:** For year $t$, to calculate $DP[t+1][I_{next\_start}]$:
            Consider all possible integrity levels $I_{current\_start}$ at the start of year $t$.
            If $DP[t][I_{current\_start}] < \infty$:
            1.  **Perform Routine Maintenance in year $t$**:
                Budget spent for this path: $DP[t][I_{current\_start}] + C_R$.
                Integrity at end of year $t$: $\min(I_{max}, I_{current\_start} + I_R)$.
                Integrity at start of year $t+1$: $\min(I_{max}, I_{current\_start} + I_R) - D$.
                Let $I_{next\_start} = \min(I_{max}, I_{current\_start} + I_R) - D$.
                Update $DP[t+1][I_{next\_start}] = \min(DP[t+1][I_{next\_start}], DP[t][I_{current\_start}] + C_R)$.

            2.  **Perform Major Rehab in year $t$**:
                Budget spent for this path: $DP[t][I_{current\_start}] + C_M$.
                Integrity at end of year $t$: $\min(I_{max}, I_{current\_start} + I_M)$.
                Integrity at start of year $t+1$: $\min(I_{max}, I_{current\_start} + I_M) - D$.
                Let $I_{next\_start} = \min(I_{max}, I_{current\_start} + I_M) - D$.
                Update $DP[t+1][I_{next\_start}] = \min(DP[t+1][I_{next\_start}], DP[t][I_{current\_start}] + C_M)$.

            3.  **Perform No Maintenance in year $t$**:
                Budget spent for this path: $DP[t][I_{current\_start}]$.
                Integrity at end of year $t$: $I_{current\_start} - D$.
                Integrity at start of year $t+1$: $(I_{current\_start} - D) - D = I_{current\_start} - 2D$.
                Let $I_{next\_start} = I_{current\_start} - 2D$.
                Update $DP[t+1][I_{next\_start}] = \min(DP[t+1][I_{next\_start}], DP[t][I_{current\_start}})$.

            This assumes the decay happens *after* the decision for the year. If decay happens *before* the decision for the year, the logic changes slightly.

            **To maximize integrity at the END of year T**:
            After filling the DP table up to $DP[T+1][\cdot]$, we find the maximum integrity $I$ such that $DP[T+1][I] \leq B$.

---

### 8. Important Points to Remember

*   Dynamic Programming is not a universal solution for all Linear Programming problems. It's effective for those with **optimal substructure** and **overlapping subproblems**.
*   Many LP-like problems in civil engineering that can be modeled with **sequential decisions** or **resource allocation over stages** can benefit from DP.
*   The **Principle of Optimality** is the foundation: an optimal solution to a problem contains optimal solutions to its subproblems.
*   When solving an LP-like problem with DP, carefully define the **state**, **recurrence relation**, and **base cases**.
*   Discretization of continuous variables (like budget or integrity levels) is often necessary for practical DP implementations.
*   The Simplex method is the standard approach for general LP problems, while DP is more suited for problems with a specific sequential or combinatorial structure.
