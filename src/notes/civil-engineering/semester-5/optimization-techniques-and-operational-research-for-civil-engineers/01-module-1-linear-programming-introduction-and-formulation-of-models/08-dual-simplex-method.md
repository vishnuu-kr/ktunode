---
title: "Dual simplex method"
subject: "OPTIMIZATION TECHNIQUES AND OPERATIONAL RESEARCH FOR CIVIL ENGINEERS"
module: "Module 1: Linear Programming: Introduction and formulation of models"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810f9c"
status: "completed"
scrapedAt: "2026-05-20T18:50:05.492Z"
---
# OPTIMIZATION TECHNIQUES AND OPERATIONAL RESEARCH FOR CIVIL ENGINEERS

## Module 1: Linear Programming: Introduction and Formulation of Models

### Topic: Dual Simplex Method

---

### 1. Introduction to the Dual Simplex Method

The **Dual Simplex Method** is an algorithm used to solve **Linear Programming (LP)** problems. It's particularly useful when the initial basic feasible solution obtained from a standard simplex tableau is *not* feasible. This often occurs when the initial basis is chosen without ensuring all constraints are satisfied.

**Key Idea:** The Dual Simplex Method starts with an *optimal* tableau (meaning all objective function coefficients for basic variables are non-negative if maximizing, or non-positive if minimizing) but *infeasible* with respect to the right-hand side (RHS) values. It then iteratively moves towards a feasible solution by making changes that maintain optimality while improving feasibility.

#### 1.1 When is the Dual Simplex Method Used?

*   **Degeneracy:** While degeneracy can cause issues, the dual simplex method is primarily used when the *initial basis is not feasible*.
*   **Adding Constraints:** If new constraints are added to an already solved LP problem, the existing solution might become infeasible. The Dual Simplex Method can be used to find a new optimal solution without re-solving the entire problem from scratch.
*   **Sensitivity Analysis:** It can be useful in sensitivity analysis when adjustments to the RHS of constraints make the current solution infeasible.
*   **Starting with a Non-Feasible Basis:** If, for some reason, you choose an initial basis that doesn't satisfy all constraints (e.g., in some variations of the simplex method or when dealing with specific problem structures), the dual simplex method can be applied.

---

### 2. The Simplex Method Recap (Briefly)

Before diving into the Dual Simplex Method, let's briefly recall the standard (primal) Simplex Method:

*   **Goal:** Maximize (or Minimize) a linear objective function subject to linear equality and inequality constraints.
*   **Standard Form:** All constraints are equalities, and all variables are non-negative.
*   **Tableau:** Represents the system of equations and the objective function.
*   **Basic Variables:** Variables corresponding to the identity matrix columns.
*   **Feasible Solution:** All variables (including slack/surplus) are non-negative.
*   **Optimal Solution:** No improving move is possible (all objective coefficients are non-negative for maximization, or non-positive for minimization).
*   **Pivot Operation:** Select an entering variable (most negative coefficient in objective row for maximization) and a leaving variable (minimum ratio test: RHS / entering column coefficient, ensuring positive denominator).

---

### 3. The Dual Simplex Method: Algorithm Steps

Let's assume we are dealing with a **maximization problem**. The Dual Simplex Method follows these steps:

**Initial State:** We have a simplex tableau that is *optimal* (objective row coefficients are non-negative for basic variables) but *infeasible* (at least one basic variable has a negative value in the RHS column).

**Step 1: Check for Optimality and Feasibility**
*   If the tableau is feasible (all RHS values are non-negative), the current basic solution is optimal and feasible. Stop.
*   If the tableau is not feasible (at least one RHS value is negative), proceed.

**Step 2: Select the Leaving Variable**
*   Identify the **most negative** value in the **Right-Hand Side (RHS) column**. Let this be the value of basic variable $B_i$.
*   The row corresponding to this basic variable $B_i$ is called the **pivot row**.
*   The basic variable $B_i$ is the **leaving variable**.

**Step 3: Select the Entering Variable**
*   Look at the **objective function row** (usually the bottom row).
*   For all non-basic variables, consider the coefficients in the **pivot row** (the row identified in Step 2).
*   If all coefficients in the pivot row for non-basic variables are **non-negative**, then the problem has no feasible solution. Stop.
*   If there are negative coefficients in the pivot row, choose the non-basic variable that has the **minimum ratio** of its objective function coefficient to its coefficient in the pivot row. That is, choose the variable $x_j$ that minimizes:
    $$ \frac{c_j}{a_{ij}} \quad \text{where } a_{ij} < 0 $$
    *   The variable $x_j$ with this minimum ratio is the **entering variable**.
    *   The element at the intersection of the pivot row and the pivot column (where the entering variable is) is the **pivot element**.

**Step 4: Perform the Pivot Operation**
*   Use row operations to make the pivot element 1 and all other elements in the pivot column 0. This is identical to the pivot operation in the standard simplex method.
*   The new tableau will have a new set of basic variables.

**Step 5: Repeat**
*   Go back to Step 1.

---

### 4. Example: Dual Simplex Method

Let's consider the following maximization LP problem:

Maximize $Z = -3x_1 - 2x_2$

Subject to:
$x_1 + x_2 + s_1 = 3$
$2x_1 + x_2 + s_2 = 4$
$-x_1 + x_2 + s_3 = 1$
$x_1, x_2, s_1, s_2, s_3 \ge 0$

*Initial thought:* This problem is already in standard form with slack variables. However, the objective function coefficients are negative. The standard simplex method is designed for non-negative objective coefficients in the initial tableau (or we introduce artificial variables).

Let's rephrase this to fit the dual simplex method's typical starting point: Assume we are trying to minimize $Z' = 3x_1 + 2x_2$. If we were to set up the tableau with this objective and want to maximize $-Z'$, we would have the coefficients $-3$ and $-2$.

However, a more direct application of Dual Simplex often starts with a problem where the initial basic solution is *infeasible*.

**Consider this scenario (more typical for Dual Simplex):**

Suppose we have a problem:
Maximize $Z = 2x_1 + 3x_2$

Subject to:
$x_1 + x_2 \le 5$
$2x_1 + x_2 \le 8$
$x_1, x_2 \ge 0$

If we introduce slack variables $s_1, s_2$:
Maximize $Z = 2x_1 + 3x_2 + 0s_1 + 0s_2$

Subject to:
$x_1 + x_2 + s_1 = 5$
$2x_1 + x_2 + s_2 = 8$
$x_1, x_2, s_1, s_2 \ge 0$

The initial basic feasible solution is $x_1 = 0, x_2 = 0, s_1 = 5, s_2 = 8$, with $Z = 0$.

Now, let's imagine we are solving a problem and through a series of steps, we arrive at a tableau that is optimal for its objective function row, but has some negative RHS values.

**Let's construct a Dual Simplex scenario:**

Suppose we have the following tableau, derived from some LP problem:

| Basic   | $x_1$ | $x_2$ | $x_3$ | $s_1$ | $s_2$ | RHS |
| :------ | :---- | :---- | :---- | :---- | :---- | :-- |
| $Z$     | $-2$  | $-3$  | $0$   | $0$   | $0$   | $0$ |
| $s_1$   | $1$   | $1$   | $1$   | $1$   | $0$   | $5$ |
| $s_2$   | $2$   | $1$   | $-1$  | $0$   | $1$   | $8$ |

This tableau is NOT optimal (negative $Z$ coefficients) and feasible. This is a standard simplex starting point.

**Let's create a situation where the Dual Simplex is needed:**

Consider a problem where we have a solution that satisfies the optimality condition for the objective function (e.g., all coefficients in the Z-row are non-negative for maximization), but violates the non-negativity of variables due to RHS values.

**Example:**

Maximize $Z = 2x_1 + 5x_2$

Subject to:
$x_1 + 2x_2 \le 4$
$3x_1 + x_2 \le 6$
$x_1, x_2 \ge 0$

Adding slack variables $s_1, s_2$:
Maximize $Z = 2x_1 + 5x_2 + 0s_1 + 0s_2$

Subject to:
$x_1 + 2x_2 + s_1 = 4$
$3x_1 + x_2 + s_2 = 6$
$x_1, x_2, s_1, s_2 \ge 0$

Initial Tableau:
| Basic   | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
| :------ | :---- | :---- | :---- | :---- | :-- |
| $Z$     | $-2$  | $-5$  | $0$   | $0$   | $0$ |
| $s_1$   | $1$   | $2$   | $1$   | $0$   | $4$ |
| $s_2$   | $3$   | $1$   | $0$   | $1$   | $6$ |

Applying standard simplex:
1.  **Entering Variable:** $x_2$ (most negative in Z-row: -5).
2.  **Leaving Variable:**
    *   Row $s_1$: $4 / 2 = 2$
    *   Row $s_2$: $6 / 1 = 6$
    *   Minimum ratio is 2, so $s_1$ leaves.
3.  **Pivot Element:** 2 (intersection of $x_2$ column and $s_1$ row).

Perform pivot: Divide $s_1$ row by 2. New $s_1$ row: $[1/2, 1, 1/2, 0, 2]$.
Update Z-row: $Z_{new} = Z_{old} - (-5) * (New\; s_1\; row) = [-2, -5, 0, 0, 0] - (-5) * [1/2, 1, 1/2, 0, 2] = [-2, -5, 0, 0, 0] + [5/2, 5, 5/2, 0, 10] = [1/2, 0, 5/2, 0, 10]$.
Update $s_2$ row: $s_{2, new} = s_{2, old} - (1) * (New\; s_1\; row) = [3, 1, 0, 1, 6] - 1 * [1/2, 1, 1/2, 0, 2] = [3, 1, 0, 1, 6] - [1/2, 1, 1/2, 0, 2] = [5/2, 0, -1/2, 1, 4]$.

New Tableau:
| Basic   | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
| :------ | :---- | :---- | :---- | :---- | :-- |
| $Z$     | $1/2$ | $0$   | $5/2$ | $0$   | $10$|
| $x_2$   | $1/2$ | $1$   | $1/2$ | $0$   | $2$ |
| $s_2$   | $5/2$ | $0$   | $-1/2$| $1$   | $4$ |

This tableau is optimal ($Z$ row is non-negative) and feasible.

**Now, let's introduce a situation where Dual Simplex is necessary.**

Suppose we add a constraint that makes the current solution infeasible, or we start with a non-feasible basis.

**Scenario:**

Suppose we have a tableau where the objective function is "optimal" but one of the basic variables is negative. This is often seen when introducing a new constraint that is violated by the current basis.

**Example for Dual Simplex (Hypothetical Tableau):**

Assume we arrive at the following tableau after some operations. We are **maximizing**.

| Basic   | $x_1$ | $x_2$ | $x_3$ | $s_1$ | $s_2$ | $s_3$ | RHS |
| :------ | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
| $Z$     | $1$   | $0$   | $2$   | $3$   | $0$   | $0$   | $20$|
| $s_1$   | $0$   | $0$   | $-1$  | $1$   | $0$   | $0$   | $-2$|
| $x_2$   | $0$   | $1$   | $1$   | $0$   | $1$   | $0$   | $5$ |
| $x_1$   | $1$   | $0$   | $-2$  | $0$   | $0$   | $1$   | $3$ |

**Analysis of the Tableau:**
*   **Optimality:** The $Z$ row has all non-negative coefficients (for maximization). This means the current basic solution is optimal *if it were feasible*.
*   **Feasibility:** The RHS column has a negative value (-2) in the $s_1$ row. This means the current basic solution ($x_1=3, x_2=5, s_1=-2, x_3=0$) is **infeasible**.

**Applying the Dual Simplex Method:**

1.  **Identify Pivot Row:** The most negative value in the RHS is $-2$ in the $s_1$ row. So, the $s_1$ row is the pivot row. $s_1$ is the leaving variable.

    | Basic   | $x_1$ | $x_2$ | $x_3$ | $s_1$ | $s_2$ | $s_3$ | RHS |
    | :------ | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
    | $Z$     | $1$   | $0$   | $2$   | $3$   | $0$   | $0$   | $20$|
    | **$s_1$**| **$0$**| **$0$**| **$-1$**| **$1$** | **$0$** | **$0$** | **$-2$**| <- Pivot Row
    | $x_2$   | $0$   | $1$   | $1$   | $0$   | $1$   | $0$   | $5$ |
    | $x_1$   | $1$   | $0$   | $-2$  | $0$   | $0$   | $1$   | $3$ |

2.  **Identify Pivot Column (Entering Variable):** Look at the coefficients in the pivot row ($s_1$ row) for non-basic variables ($x_3, s_2, s_3$).
    *   $x_3$ coefficient: $-1$
    *   $s_2$ coefficient: $0$
    *   $s_3$ coefficient: $0$

    We need to find the minimum ratio of (Z-row coefficient) / (pivot row coefficient) where the pivot row coefficient is **negative**.
    *   For $x_3$: $\frac{2}{-1} = -2$
    *   For $s_2$: $0$ (since coefficient is not negative)
    *   For $s_3$: $0$ (since coefficient is not negative)

    The most negative ratio is $-2$ for $x_3$. So, $x_3$ is the **entering variable**. The pivot element is $-1$.

    | Basic   | $x_1$ | $x_2$ | $x_3$ | $s_1$ | $s_2$ | $s_3$ | RHS |
    | :------ | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
    | $Z$     | $1$   | $0$   | $2$   | $3$   | $0$   | $0$   | $20$|
    | $s_1$   | $0$   | $0$   | $-1$  | $1$   | $0$   | $0$   | $-2$|
    | $x_2$   | $0$   | $1$   | $1$   | $0$   | $1$   | $0$   | $5$ |
    | $x_1$   | $1$   | $0$   | $-2$  | $0$   | $0$   | $1$   | $3$ |
    |         |       |       | **$-1$**|       |       |       |     | <- Pivot Element

3.  **Perform Pivot Operation:**
    *   Make the pivot element 1: Divide the $s_1$ row by $-1$. New $s_1$ row: $[0, 0, 1, -1, 0, 0, 2]$.
    *   Make other elements in the $x_3$ column zero:
        *   New $Z$ row = Old $Z$ row - $2 * (New\; s_1\; row)$
        *   New $x_2$ row = Old $x_2$ row - $1 * (New\; s_1\; row)$
        *   New $x_1$ row = Old $x_1$ row - $(-2) * (New\; s_1\; row)$

    Let's calculate:

    *   **New $s_1$ row:** $[0, 0, 1, -1, 0, 0, 2]$ (Basic variable is now $x_3$)

    *   **New $Z$ row:**
        $[1, 0, 2, 3, 0, 0, 20] - 2 * [0, 0, 1, -1, 0, 0, 2]$
        $= [1, 0, 2, 3, 0, 0, 20] - [0, 0, 2, -2, 0, 0, 4]$
        $= [1, 0, 0, 5, 0, 0, 16]$

    *   **New $x_2$ row:**
        $[0, 1, 1, 0, 1, 0, 5] - 1 * [0, 0, 1, -1, 0, 0, 2]$
        $= [0, 1, 1, 0, 1, 0, 5] - [0, 0, 1, -1, 0, 0, 2]$
        $= [0, 1, 0, 1, 1, 0, 3]$

    *   **New $x_1$ row:**
        $[1, 0, -2, 0, 0, 1, 3] - (-2) * [0, 0, 1, -1, 0, 0, 2]$
        $= [1, 0, -2, 0, 0, 1, 3] + 2 * [0, 0, 1, -1, 0, 0, 2]$
        $= [1, 0, -2, 0, 0, 1, 3] + [0, 0, 2, -2, 0, 0, 4]$
        $= [1, 0, 0, -2, 0, 1, 7]$

    **New Tableau:**
    | Basic   | $x_1$ | $x_2$ | $x_3$ | $s_1$ | $s_2$ | $s_3$ | RHS |
    | :------ | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
    | $Z$     | $1$   | $0$   | $0$   | $5$   | $0$   | $0$   | $16$|
    | $x_3$   | $0$   | $0$   | $1$   | $-1$  | $0$   | $0$   | $2$ |
    | $x_2$   | $0$   | $1$   | $0$   | $1$   | $1$   | $0$   | $3$ |
    | $x_1$   | $1$   | $0$   | $0$   | $-2$  | $0$   | $1$   | $7$ |

4.  **Repeat:**
    *   Check Feasibility: All RHS values are non-negative. The solution is feasible.
    *   Check Optimality: The $Z$ row has all non-negative coefficients. The solution is optimal.

    **Solution:** $x_1 = 7, x_2 = 3, x_3 = 2$. $Z = 16$.

---

### 5. Dual Simplex for Minimization Problems

The Dual Simplex Method can also be applied to minimization problems. The rules are slightly modified:

*   **Optimality Condition:** For a minimization problem, the $Z$ row (representing $-Z$) should have all **non-positive** coefficients for non-basic variables for the current basic solution to be optimal.
*   **Leaving Variable:** Select the basic variable with the **most positive** value in the RHS column (violating $x_i \ge 0$).
*   **Entering Variable:** Choose the non-basic variable that minimizes the ratio of its objective function coefficient (in the Z row) to its coefficient in the pivot row, *provided the pivot row coefficient is positive*.
    $$ \frac{c_j}{a_{ij}} \quad \text{where } a_{ij} > 0 $$
    The variable $x_j$ that yields the **most negative** ratio is the entering variable.

**Example (Minimization):**

Minimize $Z = 2x_1 + 3x_2$

Subject to:
$-x_1 + x_2 \ge 1$
$x_1 - 2x_2 \ge -3$
$x_1, x_2 \ge 0$

We can convert these to $\le$ by multiplying by -1:
$x_1 - x_2 \le -1$
$-x_1 + 2x_2 \le 3$

To use the simplex method, we'd typically introduce surplus and artificial variables. However, for demonstration of the dual simplex, let's consider a tableau that has become infeasible but "optimal" in the dual sense.

**Hypothetical Tableau for Minimization:**

Maximize $-Z = -2x_1 - 3x_2$

Subject to:
$-x_1 + x_2 \ge 1$  => $-x_1 + x_2 - s_1 = 1$
$x_1 - 2x_2 \ge -3$ => $x_1 - 2x_2 - s_2 = -3$

To get a standard simplex tableau, we'd need artificial variables. This can get complex.

**Let's use a simpler scenario for Dual Simplex on minimization, mimicking the structure where it's applied:**

Suppose we have a tableau for a minimization problem where the current basic solution is optimal for the objective row, but infeasible for the RHS. For minimization, "optimal" in the Z-row means all coefficients are $\le 0$.

**Hypothetical Tableau (Minimization, Maximizing $-Z$):**

| Basic   | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
| :------ | :---- | :---- | :---- | :---- | :-- |
| $-Z$    | $-1$  | $-2$  | $0$   | $0$   | $-5$|
| $s_1$   | $0$   | $-1$  | $1$   | $0$   | $-2$|  <- Infeasible row
| $s_2$   | $1$   | $1$   | $0$   | $1$   | $3$ |

*   **Analysis:**
    *   **Optimality (for $-Z$):** The $-Z$ row has coefficients $-1, -2$. These are negative. If we were maximizing $-Z$, this would indicate potential for improvement by bringing in $x_1$ or $x_2$. If we are minimizing $Z$, the objective row for minimization would be $Z$: coefficients $1, 2$. These are positive, meaning no improvement is possible from this row *if feasible*. The objective row of the *dual* simplex is often considered the one that guides the feasibility improvement.
    *   **Feasibility:** The $s_1$ row has a negative RHS value (-2). This is the infeasible row.

**Applying Dual Simplex (Minimization context):**

1.  **Identify Pivot Row:** The most positive value in the RHS is 3 (from $s_2$), but we look for the *negative* RHS to fix feasibility. Here, $s_1$ row has $-2$. Let's re-frame the standard dual simplex:
    We want to remove negativity from RHS. We pick the row with the most negative RHS. This is the $s_1$ row.
    *   Pivot Row: $s_1$ row. Leaving variable: $s_1$.

    | Basic   | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
    | :------ | :---- | :---- | :---- | :---- | :-- |
    | $-Z$    | $-1$  | $-2$  | $0$   | $0$   | $-5$|
    | **$s_1$**| **$0$**| **$-1$**| **$1$** | **$0$** | **$-2$**| <- Pivot Row
    | $s_2$   | $1$   | $1$   | $0$   | $1$   | $3$ |

2.  **Identify Pivot Column (Entering Variable):** Look at the coefficients in the pivot row ($s_1$ row) for non-basic variables ($x_1, x_2$).
    *   We want to make the RHS non-negative. The rule for entering variable selection is to minimize the ratio of the objective function coefficient to the pivot row coefficient, *where the pivot row coefficient is negative*.

    *   For $x_1$: Ratio = ($-Z$ coeff of $x_1$) / ($s_1$ row coeff of $x_1$) = $-1 / 0$ (undefined, or consider only negative denominators)
    *   For $x_2$: Ratio = ($-Z$ coeff of $x_2$) / ($s_1$ row coeff of $x_2$) = $-2 / -1 = 2$

    The minimum ratio is 2, corresponding to $x_2$. So, $x_2$ is the **entering variable**. The pivot element is $-1$.

3.  **Perform Pivot Operation:**
    *   Make pivot element 1: Divide $s_1$ row by $-1$. New $s_1$ row: $[0, 1, -1, 0, 2]$.
    *   Update $-Z$ row: $-Z_{new} = -Z_{old} - (-2) * (New\; s_1\; row)$
        $[-1, -2, 0, 0, -5] - (-2) * [0, 1, -1, 0, 2]$
        $= [-1, -2, 0, 0, -5] + [0, 2, -2, 0, 4]$
        $= [-1, 0, -2, 0, -1]$
    *   Update $s_2$ row: $s_{2, new} = s_{2, old} - (1) * (New\; s_1\; row)$
        $[1, 1, 0, 1, 3] - 1 * [0, 1, -1, 0, 2]$
        $= [1, 1, 0, 1, 3] - [0, 1, -1, 0, 2]$
        $= [1, 0, 1, 1, 1]$

    **New Tableau:**
    | Basic   | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
    | :------ | :---- | :---- | :---- | :---- | :-- |
    | $-Z$    | $-1$  | $0$   | $-2$  | $0$   | $-1$|
    | $x_2$   | $0$   | $1$   | $-1$  | $0$   | $2$ |
    | $s_2$   | $1$   | $0$   | $1$   | $1$   | $1$ |

4.  **Repeat:**
    *   Check Feasibility: All RHS are non-negative. Feasible.
    *   Check Optimality: For maximization of $-Z$, coefficients are $-1, -2$. We can improve by bringing in $x_1$.

    Let's continue standard simplex:
    *   Entering variable: $x_1$ (most negative in $-Z$ row).
    *   Pivot Row: $s_2$ row (Ratio for $x_1$ on $s_2$ row: $1/1 = 1$. On $x_2$ row: $0/0$ undefined, assume positive).
    *   Pivot element: 1.

    *   New $s_2$ row: $[1, 0, 1, 1, 1]$ (Basic variable $x_1$)
    *   New $-Z$ row: $-Z_{new} = -Z_{old} - (-1) * (New\; x_1\; row)$
        $[-1, 0, -2, 0, -1] - (-1) * [1, 0, 1, 1, 1]$
        $= [-1, 0, -2, 0, -1] + [1, 0, 1, 1, 1]$
        $= [0, 0, -1, 1, 0]$
    *   New $x_2$ row: $x_{2, new} = x_{2, old} - (0) * (New\; x_1\; row)$
        $[0, 1, -1, 0, 2] - 0 * [1, 0, 1, 1, 1]$
        $= [0, 1, -1, 0, 2]$

    **New Tableau:**
    | Basic   | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
    | :------ | :---- | :---- | :---- | :---- | :-- |
    | $-Z$    | $0$   | $0$   | $-1$  | $1$   | $0$ |
    | $x_2$   | $0$   | $1$   | $-1$  | $0$   | $2$ |
    | $x_1$   | $1$   | $0$   | $1$   | $1$   | $1$ |

    Still not optimal for $-Z$ (coefficient of $s_1$ is $-1$).
    *   Entering variable: $s_1$.
    *   Pivot Row: $x_2$ row (Ratio for $s_1$ on $x_2$ row: $-1/-1 = 1$. On $x_1$ row: $1/1 = 1$). Tie. Let's pick $x_2$ row.
    *   Pivot element: $-1$.

    *   New $x_2$ row: $[0, -1, 1, 0, -2]$ (Basic variable $s_1$)
    *   New $-Z$ row: $-Z_{new} = -Z_{old} - (-1) * (New\; s_1\; row)$
        $[0, 0, -1, 1, 0] - (-1) * [0, -1, 1, 0, -2]$
        $= [0, 0, -1, 1, 0] + [0, -1, 1, 0, -2]$
        $= [0, -1, 0, 1, -2]$
    *   New $x_1$ row: $x_{1, new} = x_{1, old} - (1) * (New\; s_1\; row)$
        $[1, 0, 1, 1, 1] - 1 * [0, -1, 1, 0, -2]$
        $= [1, 0, 1, 1, 1] - [0, -1, 1, 0, -2]$
        $= [1, 1, 0, 1, 3]$

    **New Tableau:**
    | Basic   | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
    | :------ | :---- | :---- | :---- | :---- | :-- |
    | $-Z$    | $0$   | $-1$  | $0$   | $1$   | $-2$|
    | $s_1$   | $0$   | $-1$  | $1$   | $0$   | $-2$|
    | $x_1$   | $1$   | $1$   | $0$   | $1$   | $3$ |

    This indicates an issue with this specific hypothetical setup or my interpretation for minimization.

    **Crucial Point:** When using the Dual Simplex for minimization, the objective row typically represents the *negative* of the objective function to transform it into a maximization problem. Thus, optimality means non-negative coefficients in the $-Z$ row.

    **Let's retry the minimization example with the correct dual simplex logic:**

    Assume we have this tableau:
    Maximize $-Z = -2x_1 - 3x_2$

    Subject to:
    $x_1 - x_2 \le -1$
    $-x_1 + 2x_2 \le 3$
    $x_1, x_2 \ge 0$

    Introduce slack variables $s_1, s_2$:
    $x_1 - x_2 + s_1 = -1$
    $-x_1 + 2x_2 + s_2 = 3$

    Initial Tableau (will require artificial variables for standard simplex, hence Dual Simplex might be applicable if a non-feasible start is forced):

    Let's *force* a situation where dual simplex is needed. Imagine the standard simplex has produced a tableau where an RHS is negative.

    **Correct Example for Dual Simplex (Maximization):**

    Maximize $Z = 3x_1 + 2x_2$
    Subject to:
    $x_1 + x_2 \le 2$
    $2x_1 + x_2 \le 3$
    $-x_1 + x_2 \le 1$
    $x_1, x_2 \ge 0$

    Adding slack variables $s_1, s_2, s_3$:
    $x_1 + x_2 + s_1 = 2$
    $2x_1 + x_2 + s_2 = 3$
    $-x_1 + x_2 + s_3 = 1$

    Initial Tableau:
    | Basic   | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS |
    | :------ | :---- | :---- | :---- | :---- | :---- | :-- |
    | $Z$     | $-3$  | $-2$  | $0$   | $0$   | $0$   | $0$ |
    | $s_1$   | $1$   | $1$   | $1$   | $0$   | $0$   | $2$ |
    | $s_2$   | $2$   | $1$   | $0$   | $1$   | $0$   | $3$ |
    | $s_3$   | $-1$  | $1$   | $0$   | $0$   | $1$   | $1$ |

    This is a standard start. Let's introduce a constraint that makes the current solution infeasible.
    Suppose we add a constraint: $-x_1 - x_2 \le -3$.

    If we were to use artificial variables for this new constraint, the initial feasible basis might be lost.

    **The typical use case for Dual Simplex is when the RHS becomes negative in a subsequent step or due to problem modification.**

    Consider this tableau (fictional, but illustrates the point):
    | Basic   | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
    | :------ | :---- | :---- | :---- | :---- | :-- |
    | $Z$     | $0$   | $0$   | $1$   | $2$   | $10$|
    | $x_1$   | $1$   | $0$   | $2$   | $-1$  | $-3$|  <- Infeasible
    | $x_2$   | $0$   | $1$   | $-1$  | $3$   | $5$ |

    *   **Optimality:** $Z$ row is good (all $\ge 0$ for maximization).
    *   **Feasibility:** $x_1$ row is bad (RHS is $-3$).

    **Dual Simplex Steps:**
    1.  **Pivot Row:** $x_1$ row (RHS = -3). Leaving variable: $x_1$.
    2.  **Pivot Column:** Look at $x_1$ row for non-basic variables ($s_1, s_2$) coefficients.
        *   $s_1$: Ratio = (Z-row coeff $s_1$) / ($x_1$ row coeff $s_1$) = $1 / 2$
        *   $s_2$: Ratio = (Z-row coeff $s_2$) / ($x_1$ row coeff $s_2$) = $2 / -1 = -2$
        We select the negative coefficient in the pivot row with the smallest (most negative) ratio. So, $s_2$ is the entering variable. Pivot element is $-1$.
    3.  **Pivot Operation:**
        *   New $x_1$ row: Divide old $x_1$ row by $-1$. $[ -1, 0, -2, 1, 3]$.
        *   Update $Z$ row: $Z_{new} = Z_{old} - (2) * (New\; x_1\; row)$
            $[0, 0, 1, 2, 10] - 2 * [-1, 0, -2, 1, 3]$
            $= [0, 0, 1, 2, 10] - [-2, 0, -4, 2, 6]$
            $= [2, 0, 5, 0, 4]$
        *   Update $x_2$ row: $x_{2, new} = x_{2, old} - (3) * (New\; x_1\; row)$
            $[0, 1, -1, 3, 5] - 3 * [-1, 0, -2, 1, 3]$
            $= [0, 1, -1, 3, 5] - [-3, 0, -6, 3, 9]$
            $= [3, 1, 5, 0, -4]$

    **New Tableau:**
    | Basic   | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
    | :------ | :---- | :---- | :---- | :---- | :-- |
    | $Z$     | $2$   | $0$   | $5$   | $0$   | $4$ |
    | $s_2$   | $-1$  | $0$   | $-2$  | $1$   | $3$ |
    | $x_2$   | $3$   | $1$   | $5$   | $0$   | $-4$|

    *   **Repeat:**
        *   Feasibility: $x_2$ row is infeasible (RHS = -4).
        *   Pivot Row: $x_2$ row. Leaving variable: $x_2$.
        *   Pivot Column: Look at $x_2$ row for non-basic variables ($x_1, s_1$).
            *   $x_1$: Ratio = (Z-row coeff $x_1$) / ($x_2$ row coeff $x_1$) = $2 / 3$
            *   $s_1$: Ratio = (Z-row coeff $s_1$) / ($x_2$ row coeff $s_1$) = $5 / 5 = 1$
            We select the negative coefficient in the pivot row with the smallest (most negative) ratio. Since there are no negative coefficients in the $x_2$ row for non-basic variables, this indicates that the problem has **no feasible solution**.

    **Important Note:** If at any step all coefficients in the pivot row for non-basic variables are non-negative, then the problem has no feasible solution. This is a key stopping condition for the dual simplex.

---

### 6. Handling Artificial Variables (Briefly)

When artificial variables are used in the Big M method or Two-Phase method, the Dual Simplex can naturally handle them if the initial basis contains artificial variables that have positive values in the RHS, while the objective function is in its optimal state (all coefficients non-negative for maximization).

*   **Initial Tableau (with artificial variables):** The Z-row will have a large penalty (M) for the artificial variables.
*   **Dual Simplex Application:** If, after initial steps, the tableau becomes "optimal" for the Z-row but still contains artificial variables with negative coefficients in the Z-row, or if a constraint leads to infeasibility, the dual simplex logic can be applied to eliminate negative RHS values.

---

### 7. Advantages of the Dual Simplex Method

*   **Efficiency:** When applicable (e.g., adding constraints), it can be more efficient than re-solving the entire problem.
*   **Handles Infeasibility Gracefully:** Specifically designed to move from an "optimal" but infeasible solution to a feasible one.
*   **No Need for Artificial Variables (in some cases):** If you can construct a starting tableau that is optimal for the objective function row but not feasible for RHS, you might avoid artificial variables, simplifying the process.

---

### 8. Disadvantages of the Dual Simplex Method

*   **Not Always Applicable:** Only useful when the current solution is optimal for the objective but infeasible for constraints.
*   **Can be Slow:** If the problem structure requires many iterations to restore feasibility, it might not be faster than the standard simplex.
*   **Degeneracy:** Can still suffer from degeneracy issues, leading to cycling, though less common than in some primal simplex scenarios.

---

### 9. Key Concepts to Remember

*   **Starts Optimal, Not Feasible:** The core principle.
*   **Pivot Row Selection:** Most negative RHS.
*   **Pivot Column Selection:** Minimum ratio of (Obj. Coeff / Pivot Row Coeff) where Pivot Row Coeff < 0.
*   **Termination:**
    *   Feasible and Optimal solution found.
    *   Infeasible solution (if all pivot row coefficients for non-basic variables are non-negative).
*   **Maximization vs. Minimization:** Rules for pivot column selection differ slightly.

---

### 10. Practice Questions

**Question 1:**
Consider the following simplex tableau for a maximization problem. The solution is currently optimal with respect to the objective function row but is infeasible.

| Basic   | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS |
| :------ | :---- | :---- | :---- | :---- | :---- | :-- |
| $Z$     | $2$   | $1$   | $0$   | $3$   | $0$   | $15$|
| $s_1$   | $1$   | $0$   | $1$   | $-1$  | $0$   | $-4$|  <-- Infeasible row
| $x_2$   | $0$   | $1$   | $0$   | $2$   | $0$   | $3$ |
| $s_3$   | $0$   | $0$   | $0$   | $1$   | $1$   | $2$ |

Using the Dual Simplex Method, determine the next pivot element and the entering variable.

**Answer 1:**
1.  **Pivot Row:** The most negative RHS is $-4$ in the $s_1$ row. So, $s_1$ is the leaving variable.
2.  **Pivot Column:** Look at the $s_1$ row for non-basic variables ($x_1, x_2, s_2$). Oops, $x_2$ and $s_3$ are basic. Non-basic are $x_1, s_2$.
    *   For $x_1$: Ratio = (Z-row coeff $x_1$) / ($s_1$ row coeff $x_1$) = $2 / 1 = 2$
    *   For $s_2$: Ratio = (Z-row coeff $s_2$) / ($s_1$ row coeff $s_2$) = $3 / -1 = -3$
    The minimum ratio (most negative) is $-3$ for $s_2$.
3.  **Entering Variable:** $s_2$.
4.  **Pivot Element:** The coefficient of $s_2$ in the $s_1$ row, which is $-1$.

**Question 2:**
Perform one iteration of the Dual Simplex method on the tableau from Question 1. Show the new tableau.

**Answer 2:**
Pivot element is $-1$ in the $s_1$ row, $s_2$ column.

1.  **Make pivot element 1:** Divide $s_1$ row by $-1$. New $s_1$ row: $[-1, 0, -1, 1, 0, 4]$.
2.  **Update Z row:** $Z_{new} = Z_{old} - (3) * (New\; s_1\; row)$
    $[2, 1, 0, 3, 0, 15] - 3 * [-1, 0, -1, 1, 0, 4]$
    $= [2, 1, 0, 3, 0, 15] - [-3, 0, -3, 3, 0, 12]$
    $= [5, 1, 3, 0, 0, 3]$
3.  **Update $x_2$ row:** $x_{2, new} = x_{2, old} - (2) * (New\; s_1\; row)$
    $[0, 1, 0, 2, 0, 3] - 2 * [-1, 0, -1, 1, 0, 4]$
    $= [0, 1, 0, 2, 0, 3] - [-2, 0, -2, 2, 0, 8]$
    $= [2, 1, 2, 0, 0, -5]$
4.  **Update $s_3$ row:** $s_{3, new} = s_{3, old} - (1) * (New\; s_1\; row)$
    $[0, 0, 0, 1, 1, 2] - 1 * [-1, 0, -1, 1, 0, 4]$
    $= [0, 0, 0, 1, 1, 2] - [-1, 0, -1, 1, 0, 4]$
    $= [1, 0, 1, 0, 1, -2]$

**New Tableau:**
| Basic   | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS |
| :------ | :---- | :---- | :---- | :---- | :---- | :-- |
| $Z$     | $5$   | $1$   | $3$   | $0$   | $0$   | $3$ |
| $s_2$   | $-1$  | $0$   | $-1$  | $1$   | $0$   | $4$ |
| $x_2$   | $2$   | $1$   | $2$   | $0$   | $0$   | $-5$|  <-- Infeasible row
| $s_3$   | $1$   | $0$   | $1$   | $0$   | $1$   | $-2$|  <-- Infeasible row

**Analysis of New Tableau:**
The tableau is still infeasible ($x_2$ and $s_3$ rows have negative RHS). The Z row is optimal (all $\ge 0$). We would continue the dual simplex method.

**Question 3:**
If, during the dual simplex method, you are in the pivot row and all coefficients of the non-basic variables in that row are non-negative, what can you conclude about the problem?

**Answer 3:**
If, for the chosen pivot row (the one with the most negative RHS), all coefficients for the non-basic variables in that row are non-negative, then the problem has **no feasible solution**.

---

### 11. Important Points to Remember

*   The Dual Simplex method is a powerful tool when dealing with LP problems that become infeasible after modifications or initial setup.
*   Its core strength lies in restoring feasibility while maintaining optimality for the objective function row.
*   Careful selection of the pivot row and column is crucial.
*   Always check the condition for no feasible solution.
*   While it can be applied to minimization problems, it's often easier to convert to a maximization problem by multiplying the objective function by -1.
