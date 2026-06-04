---
title: "simplex method"
subject: "OPTIMIZATION TECHNIQUES AND OPERATIONAL RESEARCH FOR CIVIL ENGINEERS"
module: "Module 1: Linear Programming: Introduction and formulation of models"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810f97"
status: "completed"
scrapedAt: "2026-05-20T18:50:01.385Z"
---
# Module 1: Linear Programming: Introduction and Formulation of Models

## Topic: The Simplex Method

This module introduces the foundational concepts of Linear Programming (LP) and its formulation. The Simplex Method is a cornerstone algorithm for solving LP problems.

---

### Learning Outcomes Covered:

*   **Understanding the Simplex Method:** Comprehending the purpose and mechanics of the Simplex Method.
*   **Basic Feasible Solution (BFS):** Identifying and understanding the concept of a Basic Feasible Solution in the context of LP.
*   **Pivoting:** Grasping the process of pivoting to move from one BFS to an adjacent BFS.
*   **Optimality Conditions:** Recognizing the conditions that indicate an optimal solution has been reached.
*   **Entering and Leaving Variables:** Identifying which variable enters and which leaves the basis during a pivot operation.
*   **Tableau Representation:** Understanding how LP problems are represented and manipulated using the Simplex Tableau.
*   **Initial Tableau Construction:** Learning how to construct the initial Simplex Tableau for a maximization problem.
*   **Iterative Process:** Understanding the iterative nature of the Simplex Method.
*   **Handling Constraints:** The Simplex Method's ability to handle various types of constraints in LP problems.

---

### 1. Introduction to the Simplex Method

The Simplex Method is an **iterative algorithm** used to find the optimal solution (maximum or minimum) for a linear programming problem. It systematically moves from one **basic feasible solution (BFS)** to an adjacent BFS, improving the objective function value at each step until the optimal solution is reached.

---

### 2. Basic Feasible Solution (BFS)

#### Key Concepts and Definitions:

*   **Basic Variables:** Variables assigned a value of zero, which are typically non-basic variables in the solution. In the Simplex method, these are the variables that form the "basis" of the current solution.
*   **Non-Basic Variables:** Variables that are set to zero in a BFS.
*   **Basic Solution:** A solution obtained by setting $n-m$ variables to zero and solving the resulting $m$ equations for the remaining $m$ variables, where $n$ is the number of variables and $m$ is the number of constraints.
*   **Feasible Solution:** A solution that satisfies all the constraints of the LP problem.
*   **Basic Feasible Solution (BFS):** A basic solution that is also a feasible solution. Geometrically, BFSs represent the **corner points (vertices)** of the feasible region.

#### How to Identify a BFS:

For a system of $m$ linear equations with $n$ variables ($n \ge m$), a basic solution is found by:
1.  Selecting $m$ variables to be **basic variables**.
2.  Setting the remaining $n-m$ variables to **zero** (these are the non-basic variables).
3.  Solving the system of $m$ equations for the $m$ basic variables.

A basic solution is **feasible** if all variables (basic and non-basic) are non-negative ($\ge 0$).

---

### 3. The Simplex Tableau

The Simplex Method is typically implemented using a tabular format called the **Simplex Tableau**. This tableau provides a structured way to perform the calculations and track the progress of the algorithm.

#### Initial Tableau Construction (for Maximization Problems):

For an LP problem in standard form:
*   **Objective function:** Maximize $Z = c_1x_1 + c_2x_2 + \dots + c_nx_n$
*   **Constraints:** $a_{i1}x_1 + a_{i2}x_2 + \dots + a_{in}x_n \le b_i$ for $i = 1, \dots, m$
*   **Non-negativity:** $x_j \ge 0$ for $j = 1, \dots, n$

**Steps to construct the initial tableau:**

1.  **Convert Inequalities to Equalities:** Introduce **slack variables** ($s_1, s_2, \dots, s_m$) for each $\le$ constraint.
    *   $a_{i1}x_1 + a_{i2}x_2 + \dots + a_{in}x_n + s_i = b_i$, where $s_i \ge 0$.
2.  **Rewrite the Objective Function:** Move all terms to the left side so that the objective function is in the form: $Z - c_1x_1 - c_2x_2 - \dots - c_nx_n = 0$.
3.  **Set up the Tableau:**
    *   **Columns:** Include columns for each decision variable ($x_j$), slack variables ($s_i$), the right-hand side (RHS) values ($b_i$), and the objective function value (usually represented by $Z$).
    *   **Rows:**
        *   **Objective Row (Row 0):** Contains the coefficients of the objective function (with negative signs for variables on the LHS of the rewritten objective function). The coefficient for $Z$ is 1.
        *   **Constraint Rows (Row 1 to m):** Each row corresponds to a constraint equation. The coefficients of the decision and slack variables are placed in their respective columns, and the RHS value ($b_i$) is in the last column.
    *   **Basis Column:** On the left side of the tableau, list the basic variables. Initially, the slack variables are typically the basic variables.

#### Example:

**Maximize** $Z = 3x_1 + 5x_2$
**Subject to:**
$x_1 \le 4$
$2x_2 \le 12$
$3x_1 + 2x_2 \le 18$
$x_1, x_2 \ge 0$

**1. Introduce Slack Variables:**
$x_1 + s_1 = 4$
$2x_2 + s_2 = 12$
$3x_1 + 2x_2 + s_3 = 18$

**2. Rewrite Objective Function:**
$Z - 3x_1 - 5x_2 = 0$

**3. Construct the Initial Tableau:**

| Basis | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS |
| :---- | :-: | :---: | :---: | :---: | :---: | :---: | :-: |
| $Z$   | 1   | -3    | -5    | 0     | 0     | 0     | 0   |
| $s_1$ | 0   | 1     | 0     | 1     | 0     | 0     | 4   |
| $s_2$ | 0   | 0     | 2     | 0     | 1     | 0     | 12  |
| $s_3$ | 0   | 3     | 2     | 0     | 0     | 1     | 18  |

**Initial BFS:** $x_1=0, x_2=0, s_1=4, s_2=12, s_3=18$, $Z=0$. This is feasible.

---

### 4. The Simplex Iterative Process (Pivoting)

The Simplex Method proceeds through a series of iterations, transforming the tableau at each step until an optimal solution is found. Each iteration involves a **pivot operation**.

#### Steps of a Pivot Operation:

1.  **Identify the Entering Variable (Pivot Column):**
    *   For a maximization problem, select the column with the **most negative coefficient** in the objective row (Row 0). This variable has the highest potential to increase the objective function value.
    *   The column with the most negative coefficient is called the **pivot column**.

2.  **Identify the Leaving Variable (Pivot Row):**
    *   For each row where the pivot column has a positive entry, calculate the **ratio** of the RHS value to the pivot column entry.
    *   Select the row with the **smallest non-negative ratio**. This row corresponds to the variable that will leave the basis.
    *   This row is called the **pivot row**.
    *   The element at the intersection of the pivot column and pivot row is the **pivot element**.

3.  **Perform Row Operations (Pivoting):** Transform the tableau so that:
    *   The pivot element becomes **1**. (Divide the pivot row by the pivot element).
    *   All other elements in the pivot column become **0**. (Perform row operations: New Row = Old Row - (Coefficient in Pivot Column * New Pivot Row)).

4.  **Update the Basis:** Replace the leaving variable with the entering variable in the Basis column.

5.  **Check for Optimality:**
    *   If all coefficients in the objective row (Row 0) are **non-negative** ($\ge 0$), the current BFS is optimal. The optimal $Z$ value is in the RHS column of the $Z$ row, and the values of the basic variables are in the RHS column of their respective rows. Non-basic variables are zero.
    *   If there are still negative coefficients in the objective row, repeat the process from step 1.

---

#### Example (Continuing from previous tableau):

**Iteration 1:**

**1. Identify Entering Variable:**
The most negative coefficient in Row 0 is -5, in the $x_2$ column.
*   **Pivot Column:** $x_2$

**2. Identify Leaving Variable:**
Calculate ratios:
*   Row $s_1$: $4 / 0$ (undefined, skip)
*   Row $s_2$: $12 / 2 = 6$
*   Row $s_3$: $18 / 2 = 9$

The smallest non-negative ratio is 6, in the $s_2$ row.
*   **Pivot Row:** $s_2$ row
*   **Pivot Element:** 2 (in the $s_2$ row and $x_2$ column)

**3. Perform Row Operations:**
*   **Make Pivot Element 1:** Divide $s_2$ row by 2.
    *   New $s_2$ row (let's call it $R_2$): `0 | 0 | 1 | 0 | 1/2 | 0 | 6`

*   **Make other elements in $x_2$ column zero:**
    *   New $Z$ row ($R_0$) = Old $Z$ row + 5 * New $R_2$
        *   `1 | -3 | -5 | 0 | 0 | 0 | 0` + 5 * `0 | 0 | 1 | 0 | 1/2 | 0 | 6`
        *   = `1 | -3 | 0 | 0 | 5/2 | 0 | 30`

    *   New $s_1$ row ($R_1$) = Old $s_1$ row - 0 * New $R_2$ (no change)
        *   `0 | 1 | 0 | 1 | 0 | 0 | 4`

    *   New $s_3$ row ($R_3$) = Old $s_3$ row - 2 * New $R_2$
        *   `0 | 3 | 2 | 0 | 0 | 1 | 18` - 2 * `0 | 0 | 1 | 0 | 1/2 | 0 | 6`
        *   = `0 | 3 | 0 | 0 | -1 | 1 | 6`

**4. Update the Basis:** $s_2$ leaves, $x_2$ enters.

**Updated Tableau (End of Iteration 1):**

| Basis | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS |
| :---- | :-: | :---: | :---: | :---: | :---: | :---: | :-: |
| $Z$   | 1   | -3    | 0     | 0     | 5/2   | 0     | 30  |
| $s_1$ | 0   | 1     | 0     | 1     | 0     | 0     | 4   |
| $x_2$ | 0   | 0     | 1     | 0     | 1/2   | 0     | 6   |
| $s_3$ | 0   | 3     | 0     | 0     | -1    | 1     | 6   |

**Current BFS:** $x_1=0, x_2=6, s_1=4, s_2=0, s_3=6$, $Z=30$. This is feasible.

---

**Iteration 2:**

**1. Identify Entering Variable:**
The most negative coefficient in Row 0 is -3, in the $x_1$ column.
*   **Pivot Column:** $x_1$

**2. Identify Leaving Variable:**
Calculate ratios:
*   Row $s_1$: $4 / 1 = 4$
*   Row $x_2$: $6 / 0$ (undefined, skip)
*   Row $s_3$: $6 / 3 = 2$

The smallest non-negative ratio is 2, in the $s_3$ row.
*   **Pivot Row:** $s_3$ row
*   **Pivot Element:** 3 (in the $s_3$ row and $x_1$ column)

**3. Perform Row Operations:**
*   **Make Pivot Element 1:** Divide $s_3$ row by 3.
    *   New $s_3$ row (let's call it $R_3$): `0 | 1 | 0 | 0 | -1/3 | 1/3 | 2`

*   **Make other elements in $x_1$ column zero:**
    *   New $Z$ row ($R_0$) = Old $Z$ row + 3 * New $R_3$
        *   `1 | -3 | 0 | 0 | 5/2 | 0 | 30` + 3 * `0 | 1 | 0 | 0 | -1/3 | 1/3 | 2`
        *   = `1 | 0 | 0 | 0 | 5/2 - 1 | 1 | 30 + 6`
        *   = `1 | 0 | 0 | 0 | 3/2 | 1 | 36`

    *   New $s_1$ row ($R_1$) = Old $s_1$ row - 1 * New $R_3$
        *   `0 | 1 | 0 | 1 | 0 | 0 | 4` - 1 * `0 | 1 | 0 | 0 | -1/3 | 1/3 | 2`
        *   = `0 | 0 | 0 | 1 | 1/3 | -1/3 | 2`

    *   New $x_2$ row ($R_2$) = Old $x_2$ row - 0 * New $R_3$ (no change)
        *   `0 | 0 | 1 | 0 | 1/2 | 0 | 6`

**4. Update the Basis:** $s_3$ leaves, $x_1$ enters.

**Updated Tableau (End of Iteration 2):**

| Basis | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS |
| :---- | :-: | :---: | :---: | :---: | :---: | :---: | :-: |
| $Z$   | 1   | 0     | 0     | 0     | 3/2   | 1     | 36  |
| $s_1$ | 0   | 0     | 0     | 1     | 1/3   | -1/3  | 2   |
| $x_2$ | 0   | 0     | 1     | 0     | 1/2   | 0     | 6   |
| $x_1$ | 0   | 1     | 0     | 0     | -1/3  | 1/3   | 2   |

**5. Check for Optimality:**
All coefficients in the objective row (Row 0) are non-negative ($\ge 0$). The solution is optimal.

**Optimal Solution:**
*   $x_1 = 2$
*   $x_2 = 6$
*   $s_1 = 2$ (slack in the first constraint)
*   $s_2 = 0$
*   $s_3 = 0$
*   Maximum $Z = 36$

---

### 5. Optimality Conditions

*   **Maximization Problem:** An optimal solution is reached when all coefficients in the objective row (Row 0) are **non-negative** ($\ge 0$).
*   **Minimization Problem:** If solving a minimization problem, convert it to a maximization problem by multiplying the objective function by -1. The optimality condition remains the same (non-negative coefficients in Row 0). Alternatively, for a direct minimization problem, the optimality condition is when all coefficients in the objective row are **non-positive** ($\le 0$).

---

### 6. Handling Constraints (Briefly)

The Simplex method, in its basic form, is designed for LP problems with:
*   **Maximization objective.**
*   **All constraints of the form $\le$.**
*   **Non-negative decision variables.**

For other types of LP problems (minimization, $\ge$ constraints, $=$ constraints, unrestricted variables), transformations are required before applying the standard Simplex Method. These include:

*   **Minimization:** Convert to maximization by multiplying the objective function by -1.
*   **$\ge$ Constraints:** Multiply by -1 to convert to $\le$ constraints or use artificial variables (covered in later topics).
*   **$=$ Constraints:** Use artificial variables or other specialized methods.
*   **Unrestricted Variables:** Replace with the difference of two non-negative variables ($x = x^+ - x^-$).

---

### 7. Practice Questions and Exercises

**Question 1:**
Construct the initial Simplex Tableau for the following LP problem:
Maximize $Z = 5x_1 + 4x_2 + 3x_3$
Subject to:
$2x_1 + 3x_2 + x_3 \le 5$
$4x_1 + x_2 + 2x_3 \le 11$
$3x_1 + 4x_2 + 2x_3 \le 8$
$x_1, x_2, x_3 \ge 0$

**Answer 1:**

1.  **Introduce Slack Variables:**
    $2x_1 + 3x_2 + x_3 + s_1 = 5$
    $4x_1 + x_2 + 2x_3 + s_2 = 11$
    $3x_1 + 4x_2 + 2x_3 + s_3 = 8$

2.  **Rewrite Objective Function:**
    $Z - 5x_1 - 4x_2 - 3x_3 = 0$

3.  **Initial Tableau:**

    | Basis | $Z$ | $x_1$ | $x_2$ | $x_3$ | $s_1$ | $s_2$ | $s_3$ | RHS |
    | :---- | :-: | :---: | :---: | :---: | :---: | :---: | :---: | :-: |
    | $Z$   | 1   | -5    | -4    | -3    | 0     | 0     | 0     | 0   |
    | $s_1$ | 0   | 2     | 3     | 1     | 1     | 0     | 0     | 5   |
    | $s_2$ | 0   | 4     | 1     | 2     | 0     | 1     | 0     | 11  |
    | $s_3$ | 0   | 3     | 4     | 2     | 0     | 0     | 1     | 8   |

**Question 2:**
Consider the following Simplex tableau:

| Basis | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
| :---- | :-: | :---: | :---: | :---: | :---: | :-: |
| $Z$   | 1   | -2    | 0     | 3     | 1     | 50  |
| $s_1$ | 0   | 1     | 0     | 1     | -1    | 10  |
| $x_2$ | 0   | 0     | 1     | 0     | 2     | 5   |

Determine the next pivot element and perform one pivot operation. State the entering and leaving variables.

**Answer 2:**

1.  **Entering Variable:** The most negative coefficient in Row 0 is -2, in the $x_1$ column. So, $x_1$ is the entering variable (pivot column).

2.  **Leaving Variable:** Calculate ratios:
    *   Row $s_1$: $10 / 1 = 10$
    *   Row $x_2$: $5 / 0$ (undefined, skip)

    The smallest non-negative ratio is 10, in the $s_1$ row. So, $s_1$ is the leaving variable (pivot row). The pivot element is 1 (at the intersection of $x_1$ column and $s_1$ row).

3.  **Pivot Operation:**
    *   Since the pivot element is already 1, no row division is needed for the pivot row.
    *   Make other elements in the $x_1$ column zero:
        *   New $Z$ row = Old $Z$ row + 2 * New $s_1$ row (which is the old $s_1$ row)
            *   `1 | -2 | 0 | 3 | 1 | 50` + 2 * `0 | 1 | 0 | 1 | -1 | 10`
            *   = `1 | 0 | 0 | 3+2 | 1-2 | 50+20`
            *   = `1 | 0 | 0 | 5 | -1 | 70`
        *   New $x_2$ row = Old $x_2$ row - 0 * New $s_1$ row (no change)
            *   `0 | 0 | 1 | 0 | 2 | 5`

4.  **Updated Tableau:**

    | Basis | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
    | :---- | :-: | :---: | :---: | :---: | :---: | :-: |
    | $Z$   | 1   | 0     | 0     | 5     | -1    | 70  |
    | $x_1$ | 0   | 1     | 0     | 1     | -1    | 10  |
    | $x_2$ | 0   | 0     | 1     | 0     | 2     | 5   |

**Entering Variable:** $x_1$
**Leaving Variable:** $s_1$

---

### 8. Important Points to Remember

*   **Standard Form:** The Simplex Method is typically applied to LP problems in standard form (maximize objective, $\le$ constraints, non-negative variables). Conversions might be needed for other problem types.
*   **Slack Variables:** Crucial for converting $\le$ inequalities into equalities. They represent unused capacity.
*   **BFS:** Each BFS corresponds to a vertex of the feasible region.
*   **Pivoting:** The core operation of the Simplex Method, moving from one BFS to an adjacent one.
*   **Pivot Column Selection:** Most negative coefficient in the objective row for maximization.
*   **Pivot Row Selection:** Minimum non-negative ratio of RHS to pivot column entry.
*   **Optimality:** All coefficients in the objective row are non-negative for maximization.
*   **Degeneracy:** Occurs when the minimum ratio is zero or multiple rows share the minimum ratio. Can lead to cycling (though rare in practice).
*   **Unbounded Solutions:** If a pivot column is selected but all entries in that column are non-positive, the solution is unbounded.
*   **No Feasible Solution:** Detected if artificial variables remain in the basis with positive values at the end of the iterations (requires methods like the Big M or Two-Phase Simplex).

---
