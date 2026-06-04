---
title: "Simplex method"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 1: Introduction to Quantitative Techniques: Basics of Operations Research – Applications"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a60"
status: "completed"
scrapedAt: "2026-05-20T18:07:20.165Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS

## Module 1: Introduction to Quantitative Techniques: Basics of Operations Research – Applications

### Topic: Simplex Method

**Course Outcome Alignment:**
*   **CO1: To formulate and solve linear programming and transportation problems (Knowledge Level: K4)** - This topic directly addresses the "solve linear programming problems" aspect of CO1 by introducing a fundamental algorithm for achieving this.

**Learning Outcomes Covered:**
*   Understanding the purpose and necessity of the Simplex method.
*   Learning the steps involved in the Simplex method for maximization and minimization problems.
*   Recognizing and handling various types of solutions (unique, multiple, unbounded, infeasible).
*   Applying the Simplex method to solve linear programming problems.

---

### 1. Introduction to Linear Programming (LP)

Linear Programming is a mathematical technique used to optimize a linear objective function subject to a set of linear constraints. It's widely used in engineering for resource allocation, production planning, scheduling, and more.

**Key Concepts:**
*   **Objective Function:** A linear expression representing the quantity to be maximized or minimized (e.g., profit, cost).
*   **Decision Variables:** The variables that represent the choices to be made (e.g., quantity of product to produce).
*   **Constraints:** Linear inequalities or equalities that limit the values of the decision variables. These represent limitations such as resources, capacity, or demand.
*   **Feasible Region:** The set of all possible solutions that satisfy all the constraints.
*   **Optimal Solution:** A point within the feasible region that yields the best (maximum or minimum) value for the objective function.

**Standard Form of an LP Problem:**
For the Simplex method, LP problems are typically converted to a standard form:
1.  **Maximize** the objective function. (Minimization problems can be converted by multiplying the objective function by -1).
2.  All constraints are expressed as **equalities**. (Inequalities are converted by adding/subtracting slack or surplus variables).
3.  All variables are **non-negative**.

---

### 2. The Simplex Method: An Overview

The Simplex method is an iterative algorithm that systematically moves from one corner point (vertex) of the feasible region to an adjacent corner point, improving the objective function value at each step until the optimal solution is found.

**Necessity of the Simplex Method:**
While graphical methods can solve LP problems with two variables, they become impractical for problems with more than two decision variables. The Simplex method provides a robust and systematic algebraic approach that can handle any number of variables and constraints.

---

### 3. Steps of the Simplex Method (for Maximization)

**Phase I: Setting up the Initial Simplex Tableau**

1.  **Convert the LP to Standard Form:**
    *   Change all inequality constraints ($\leq$ or $\geq$) into equalities by introducing **slack variables** (for $\leq$) or **surplus variables** (for $\geq$).
        *   **Slack Variables (sᵢ):** Added to $\leq$ constraints to convert them into equalities. They represent the unused amount of a resource.
            *   Example: $x_1 + 2x_2 \leq 5$ becomes $x_1 + 2x_2 + s_1 = 5$, where $s_1 \geq 0$.
        *   **Surplus Variables (eᵢ):** Subtracted from $\geq$ constraints to convert them into equalities. They represent the amount by which a constraint is exceeded.
            *   Example: $3x_1 - x_2 \geq 4$ becomes $3x_1 - x_2 - e_1 = 4$, where $e_1 \geq 0$.
    *   If a constraint is of the form $\geq$, and the right-hand side is negative, multiply the entire constraint by -1 to make the RHS positive. This will change $\geq$ to $\leq$.
    *   If a constraint is of the form $=$, it remains as an equality.
    *   Ensure all variables are non-negative.
2.  **Introduce Artificial Variables (if necessary):**
    *   If a constraint (after conversion to equality) does not have an obvious basic feasible solution (e.g., a $\geq$ or $=$ constraint), an **artificial variable** ($a_i$) is added.
    *   These artificial variables are given a very large penalty (represented by 'M') in the objective function for maximization problems (or a very large reward for minimization). This is known as the **Big M method**.
    *   Example: $x_1 + x_2 - e_1 = 10$ becomes $x_1 + x_2 - e_1 + a_1 = 10$.
3.  **Formulate the Initial Simplex Tableau:**
    *   The tableau is a matrix that represents the system of equations.
    *   **Columns:** Include columns for each decision variable, each slack/surplus variable, each artificial variable (if any), and the Right-Hand Side (RHS).
    *   **Rows:** Include rows for each constraint, and a row for the objective function (often labeled $C_j - Z_j$ or $Z_j - C_j$).
    *   **Basic Variables (BV):** Variables that form an identity matrix in the constraint rows. Initially, these are the slack and artificial variables.
    *   **Coefficients:** Fill the tableau with the coefficients of the variables from the constraints.
    *   **Objective Function Row (Row 0):**
        *   For maximization problems (using Big M), the objective function is rewritten as $Z + M\sum a_i = 0$. So, the coefficients for $a_i$ in Row 0 will be $-M$.
        *   The coefficients for decision, slack, and surplus variables are their original coefficients in the objective function.
        *   The $Z_j$ values are calculated for each column by summing the product of the coefficients in the $C_B$ column and the coefficients in that variable's column.
        *   The $C_j - Z_j$ (or $Z_j - C_j$) values represent the net gain/loss per unit of entering the basis.

**Phase II: Iterative Improvement**

1.  **Check for Optimality:**
    *   For maximization problems, the solution is optimal if all values in the $C_j - Z_j$ row are $\leq 0$.
    *   If any $C_j - Z_j > 0$, the solution is not optimal, and further iteration is needed.
2.  **Select the Entering Variable (Pivot Column):**
    *   Identify the variable with the most positive value in the $C_j - Z_j$ row. This variable will enter the basis. This is the **pivot column**.
3.  **Select the Leaving Variable (Pivot Row):**
    *   For each row (excluding the objective function row), calculate the **ratio** of the RHS value to the corresponding coefficient in the pivot column.
    *   Ignore rows where the pivot column coefficient is zero or negative.
    *   The row with the **smallest non-negative ratio** is the **pivot row**. The basic variable in this row will leave the basis.
4.  **Perform Pivot Operations (Gaussian Elimination):**
    *   The element at the intersection of the pivot row and pivot column is the **pivot element**.
    *   **New Pivot Row:** Divide all elements in the pivot row by the pivot element. This makes the pivot element 1.
    *   **Other Rows:** For every other row (including the objective function row), update it using the formula:
        `New Row = Old Row - (Coefficient of Pivot Column in Old Row) * (New Pivot Row)`
    *   This process aims to make all other elements in the pivot column zero.
5.  **Repeat:** Go back to Step 1 (Check for Optimality) with the updated tableau.

**Phase III: Interpretation of the Solution**

*   **Optimal Solution:** Once the optimality condition is met, the optimal values of the decision variables are found in the RHS column corresponding to the basic variables. The optimal value of the objective function is in the RHS of the objective function row.
*   **Artificial Variables:** If any artificial variable remains in the basis with a positive value in the RHS, the original problem has no feasible solution (infeasible).

---

### 4. Simplex Method for Minimization

To solve a minimization problem using the Simplex method:

1.  **Convert to Maximization:** Multiply the objective function by -1.
2.  **Proceed as with Maximization:** Use the standard Simplex method as described above.
3.  **Interpret the Result:** The optimal solution for the original minimization problem is the negative of the optimal value of the objective function found in the maximization problem.

**Alternative (Direct Minimization Approach):**

1.  **Standard Form:** Convert to standard form with $\geq 0$ constraints and equalities. Introduce surplus and artificial variables as needed.
2.  **Objective Function Row (Row 0):**
    *   For minimization, the objective function is written as $Z - \sum C_j x_j = 0$.
    *   Using the Big M method for minimization, the objective function is $Z + M\sum a_i = 0$. The coefficients for $a_i$ in Row 0 will be $-M$ (when expressing $Z$ in terms of non-basic variables).
    *   Calculate $Z_j$ and $C_j - Z_j$ values.
3.  **Check for Optimality:** The solution is optimal if all values in the $C_j - Z_j$ row are $\geq 0$.
4.  **Select Entering/Leaving Variables:**
    *   **Entering Variable:** Select the variable with the **most negative** $C_j - Z_j$ value.
    *   **Leaving Variable:** Same ratio test as maximization (smallest non-negative ratio).
5.  **Pivot Operations:** Same as maximization.
6.  **Interpret:** Optimal solution is reached when all $C_j - Z_j \geq 0$.

**Important Note on Big M Method:**
The Big M method is conceptually simpler to implement as it uses a single phase. However, the M values can lead to numerical instability if they are too large.

---

### 5. Handling Special Cases

*   **Multiple Optimal Solutions:**
    *   Occurs when, at the optimal tableau, a non-basic variable has a $C_j - Z_j = 0$ value.
    *   This indicates that another optimal solution can be found by making this non-basic variable a basic variable.
*   **Unbounded Solution:**
    *   Occurs when all coefficients in the pivot column are negative (or zero). This means the objective function can be increased indefinitely without violating constraints.
*   **Infeasible Solution:**
    *   Occurs when all artificial variables are removed from the basis (i.e., they are non-basic), but there are still artificial variables with positive values in the RHS column of the optimal tableau. This signifies that no solution can satisfy all constraints simultaneously.

---

### 6. Example: Maximization Problem

**Problem:**
Maximize $Z = 3x_1 + 5x_2$
Subject to:
$x_1 \leq 4$
$2x_2 \leq 12$
$3x_1 + 2x_2 \leq 18$
$x_1, x_2 \geq 0$

**Solution:**

**Step 1: Convert to Standard Form**
Introduce slack variables $s_1, s_2, s_3$:
$x_1 + s_1 = 4$
$2x_2 + s_2 = 12$
$3x_1 + 2x_2 + s_3 = 18$
Objective function: $Z - 3x_1 - 5x_2 = 0$
All variables $x_1, x_2, s_1, s_2, s_3 \geq 0$.

**Step 2: Initial Simplex Tableau**
Rewrite objective function to express Z in terms of non-basic variables:
$Z + 3x_1 + 5x_2 = 0$

| BV   | $C_B$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS | Ratio |
| :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- | :---- |
| $s_1$ | 0     | 1     | 0     | 1     | 0     | 0     | 4   |       |
| $s_2$ | 0     | 0     | 2     | 0     | 1     | 0     | 12  |       |
| $s_3$ | 0     | 3     | 2     | 0     | 0     | 1     | 18  |       |
| $Z$  |       | 3     | 5     | 0     | 0     | 0     | 0   |       |
| $C_j - Z_j$ |       | -3    | -5    | 0     | 0     | 0     |     |       |

**Step 3: Iteration 1**

*   **Entering Variable:** $x_2$ (most positive $C_j - Z_j$ is 5). This is the pivot column.
*   **Leaving Variable:**
    *   Row 1: 4 / 0 (ignore)
    *   Row 2: 12 / 2 = 6
    *   Row 3: 18 / 2 = 9
    *   Smallest ratio is 6, so $s_2$ leaves. This is the pivot row.
*   **Pivot Element:** 2 (intersection of $x_2$ column and $s_2$ row).

**Perform Pivot Operations:**
*   **New $s_2$ row (now $x_2$ row):** Divide row 2 by 2.
    | BV   | $C_B$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS |
    | :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
    | $s_1$ | 0     | 1     | 0     | 1     | 0     | 0     | 4   |
    | $x_2$ | 5     | 0     | 1     | 0     | 1/2   | 0     | 6   |
    | $s_3$ | 0     | 3     | 2     | 0     | 0     | 1     | 18  |
    | $Z$  |       | 3     | 5     | 0     | 0     | 0     | 0   |
    | $C_j - Z_j$ |       | -3    | -5    | 0     | 0     | 0     |     |

*   **Update Row 1 ($s_1$):** $s_1$ row = $s_1$ row - (0) * ($x_2$ row) -> No change.
*   **Update Row 3 ($s_3$):** $s_3$ row = $s_3$ row - (2) * ($x_2$ row)
    | BV   | $C_B$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS |
    | :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
    | $s_3$ | 0     | 3     | 0     | 0     | -1    | 1     | 6   |
*   **Update Row 0 ($Z$):** $Z$ row = $Z$ row - (5) * ($x_2$ row)
    | BV   | $C_B$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS |
    | :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
    | $Z$  |       | 3     | 0     | 0     | -5/2  | 0     | 30  |

**Tableau After Iteration 1:**

| BV   | $C_B$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS | Ratio |
| :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- | :---- |
| $s_1$ | 0     | 1     | 0     | 1     | 0     | 0     | 4   |       |
| $x_2$ | 5     | 0     | 1     | 0     | 1/2   | 0     | 6   |       |
| $s_3$ | 0     | 3     | 0     | 0     | -1    | 1     | 6   |       |
| $Z$  |       | 3     | 0     | 0     | -5/2  | 0     | 30  |       |
| $C_j - Z_j$ |       | -3    | 0     | 0     | -5/2  | 0     |     |       |

**Step 4: Iteration 2**

*   **Entering Variable:** $x_1$ (most positive $C_j - Z_j$ is 3). This is the pivot column.
*   **Leaving Variable:**
    *   Row 1: 4 / 1 = 4
    *   Row 2: 6 / 0 (ignore)
    *   Row 3: 6 / 3 = 2
    *   Smallest ratio is 2, so $s_3$ leaves. This is the pivot row.
*   **Pivot Element:** 3 (intersection of $x_1$ column and $s_3$ row).

**Perform Pivot Operations:**
*   **New $s_3$ row (now $x_1$ row):** Divide row 3 by 3.
    | BV   | $C_B$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS |
    | :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
    | $x_1$ | 3     | 1     | 0     | 0     | -1/3  | 1/3   | 2   |

*   **Update Row 1 ($s_1$):** $s_1$ row = $s_1$ row - (1) * ($x_1$ row)
    | BV   | $C_B$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS |
    | :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
    | $s_1$ | 0     | 0     | 0     | 1     | 1/3   | -1/3  | 2   |
*   **Update Row 2 ($x_2$):** $x_2$ row = $x_2$ row - (0) * ($x_1$ row) -> No change.
*   **Update Row 0 ($Z$):** $Z$ row = $Z$ row - (3) * ($x_1$ row)
    | BV   | $C_B$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS |
    | :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
    | $Z$  |       | 0     | 0     | 0     | -3/2  | -1    | 24  |

**Tableau After Iteration 2:**

| BV   | $C_B$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS | Ratio |
| :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- | :---- |
| $s_1$ | 0     | 0     | 0     | 1     | 1/3   | -1/3  | 2   |       |
| $x_2$ | 5     | 0     | 1     | 0     | 1/2   | 0     | 6   |       |
| $x_1$ | 3     | 1     | 0     | 0     | -1/3  | 1/3   | 2   |       |
| $Z$  |       | 0     | 0     | 0     | -3/2  | -1    | 24  |       |
| $C_j - Z_j$ |       | 0     | 0     | 0     | -3/2  | -1    |     |       |

**Step 5: Check for Optimality**
All values in the $C_j - Z_j$ row are $\leq 0$. The solution is optimal.

**Optimal Solution:**
*   $x_1 = 2$
*   $x_2 = 6$
*   $Z = 24$

This solution satisfies the constraints:
$x_1 = 2 \leq 4$ (True)
$2x_2 = 2(6) = 12 \leq 12$ (True)
$3x_1 + 2x_2 = 3(2) + 2(6) = 6 + 12 = 18 \leq 18$ (True)

---

### 7. Example: Minimization Problem (using Big M)

**Problem:**
Minimize $Z = 2x_1 + 3x_2$
Subject to:
$x_1 + x_2 \geq 5$
$x_1 + 2x_2 \leq 10$
$x_1, x_2 \geq 0$

**Solution:**

**Step 1: Convert to Standard Form**
Introduce surplus variable $e_1$ and artificial variable $a_1$ for the first constraint, and slack variable $s_2$ for the second:
$x_1 + x_2 - e_1 + a_1 = 5$
$x_1 + 2x_2 + s_2 = 10$
Objective function: $Z = 2x_1 + 3x_2$. To use Big M, we need to express all variables, including artificial ones, in the objective.
$Z + M a_1 = 2x_1 + 3x_2$ (This is the initial objective, but for the tableau, we need $Z$ in terms of non-basic variables).

**Step 2: Prepare for Tableau (Big M Method for Minimization)**
Rewrite objective function for the tableau. We want to minimize Z.
Initial objective: $Z = 2x_1 + 3x_2$.
Constraint 1 involves an artificial variable $a_1$. In the objective function row, the coefficient for $a_1$ will be $-M$ (since we are trying to eliminate it, and it has a penalty).
$Z - 2x_1 - 3x_2 + M a_1 = 0$

However, the standard approach with Big M for minimization is to express $Z$ in terms of non-basic variables (decision and surplus variables).
From constraint 1: $a_1 = 5 - x_1 - x_2 + e_1$. Substitute this into the objective function:
$Z = 2x_1 + 3x_2 + M(5 - x_1 - x_2 + e_1)$
$Z = 2x_1 + 3x_2 + 5M - Mx_1 - Mx_2 + Me_1$
$Z - (2-M)x_1 - (3-M)x_2 - Me_1 = 5M$

For the tableau, we want the $C_j - Z_j$ row to represent the *change* in Z for each unit of a non-basic variable entering the basis.
The initial coefficients of non-basic variables in the objective function are $C_j$.
$C_j$ for $x_1$: 2
$C_j$ for $x_2$: 3
$C_j$ for $e_1$: 0

Now, calculate $Z_j$ for the initial basic variables ($a_1, s_2$). The cost associated with $a_1$ is M.
Initial $C_B$ for $a_1$ is M, for $s_2$ is 0.

| BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS | Ratio |
| :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- | :---- |
| $a_1$ | M     | 1     | 1     | -1    | 0     | 1     | 5   |       |
| $s_2$ | 0     | 1     | 2     | 0     | 1     | 0     | 10  |       |
| $Z$  |       | $2-M$ | $3-M$ | $-M$  | 0     | $M$   | $5M$ |       |
| $C_j - Z_j$ |       | 2     | 3     | 0     | 0     | $M$   |     |       |
*(Correction for the $C_j-Z_j$ row calculation, typically we work with $Z_j-C_j$ or use the structure where the objective row is represented as $Z - \sum C_j x_j = 0$. Let's use the convention $Z_j-C_j$ as per Paneerselvam)*

Let's re-setup the initial tableau using $Z_j - C_j$ for minimization, which implies we want the most negative $Z_j - C_j$ to enter.

Objective: Minimize $Z = 2x_1 + 3x_2$.
Constraints:
$x_1 + x_2 - e_1 + a_1 = 5$
$x_1 + 2x_2 + s_2 = 10$

Initial Tableau for Big M (Minimization):
Objective function row represents $Z - 2x_1 - 3x_2 + M a_1 = 0$.
Rewrite as: $Z + (M-2)x_1 + (M-3)x_2 + M e_1 - M a_1 = 5M$.
Or, for $Z_j - C_j$ convention:
$Z_j - C_j$: For basic variables, this is 0. For non-basic variables, it's calculated based on the objective function row where $C_B$ column is used.

Let's use the standard Big M tableau setup for minimization directly:
Objective row: $Z - 2x_1 - 3x_2 + M a_1 = 0$.
The $C_j$ values are the coefficients in the original objective function ($2, 3, 0, 0, M$).

| BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS | Ratio |
| :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- | :---- |
| $a_1$ | M     | 1     | 1     | -1    | 0     | 1     | 5   |       |
| $s_2$ | 0     | 1     | 2     | 0     | 1     | 0     | 10  |       |
| $Z$  |       | $2$   | $3$   | $0$   | $0$   | $M$   | $0$ |       |

Now, calculate $Z_j$ and $Z_j - C_j$:
$Z_1 = M(1) + 0(1) = M$, $Z_1 - C_1 = M - 2$
$Z_2 = M(1) + 0(2) = M$, $Z_2 - C_2 = M - 3$
$Z_3 = M(-1) + 0(0) = -M$, $Z_3 - C_3 = -M - 0 = -M$
$Z_4 = M(0) + 0(1) = 0$, $Z_4 - C_4 = 0 - 0 = 0$
$Z_5 = M(1) + 0(0) = M$, $Z_5 - C_5 = M - M = 0$

**Initial Tableau:**

| BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS | Ratio |
| :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- | :---- |
| $a_1$ | M     | 1     | 1     | -1    | 0     | 1     | 5   | 5/1 = 5 |
| $s_2$ | 0     | 1     | 2     | 0     | 1     | 0     | 10  | 10/2 = 5 |
| $Z$  |       | $M-2$ | $M-3$ | $-M$  | 0     | $M$   | $5M$ |       |
| $Z_j - C_j$ |       | $M-2$ | $M-3$ | $-M$  | 0     | 0     |     |       |

**Step 3: Iteration 1**

*   **Entering Variable:** $x_1$ (most positive $Z_j - C_j$ for minimization is $M-2$). This is the pivot column.
*   **Leaving Variable:** Smallest ratio is 5 (from both $a_1$ and $s_2$). Let's choose $a_1$ to leave (conventionally, break ties by choosing the variable that entered last, or the one with a smaller coefficient in the objective, or the one with a larger coefficient in the pivot column). For simplicity, let's pick $a_1$. This is the pivot row.
*   **Pivot Element:** 1 (intersection of $x_1$ column and $a_1$ row).

**Perform Pivot Operations:**
*   **New $a_1$ row (now $x_1$ row):** Divide row 1 by 1.
    | BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS |
    | :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
    | $x_1$ | 2     | 1     | 1     | -1    | 0     | 1     | 5   |

*   **Update Row 2 ($s_2$):** $s_2$ row = $s_2$ row - (1) * ($x_1$ row)
    | BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS |
    | :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
    | $s_2$ | 0     | 0     | 1     | 1     | 1     | -1    | 5   |
*   **Update Row 0 ($Z$):** $Z$ row = $Z$ row - ($M-2$) * ($x_1$ row)
    | BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS |
    | :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
    | $Z$  |       | 0     | $M-3 - (M-2)(1)$ = -1 | $-M - (M-2)(-1)$ = -2M+2 | 0 - (M-2)(0) = 0 | $M - (M-2)(1)$ = 2 | $5M - (M-2)(5)$ = 5M - 5M + 10 = 10 |
    | $Z$  |       | 0     | -1    | $2-2M$ | 0     | 2     | 10  |

**Tableau After Iteration 1:**

| BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS | Ratio |
| :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- | :---- |
| $x_1$ | 2     | 1     | 1     | -1    | 0     | 1     | 5   | 5/1 = 5 |
| $s_2$ | 0     | 0     | 1     | 1     | 1     | -1    | 5   | 5/1 = 5 |
| $Z$  |       | 0     | -1    | $2-2M$ | 0     | 2     | 10  |       |
| $Z_j - C_j$ |       | 0     | -1    | $2-2M$ | 0     | 0     |     |       |

**Step 4: Iteration 2**

*   **Entering Variable:** $x_2$ (most negative $Z_j - C_j$ is -1). This is the pivot column.
*   **Leaving Variable:**
    *   Row 1: 5 / 1 = 5
    *   Row 2: 5 / 1 = 5
    *   Tie. Let's choose $s_2$ to leave. This is the pivot row.
*   **Pivot Element:** 1 (intersection of $x_2$ column and $s_2$ row).

**Perform Pivot Operations:**
*   **New $s_2$ row (now $x_2$ row):** Divide row 2 by 1.
    | BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS |
    | :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
    | $x_2$ | 3     | 0     | 1     | 1     | 1     | -1    | 5   |

*   **Update Row 1 ($x_1$):** $x_1$ row = $x_1$ row - (1) * ($x_2$ row)
    | BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS |
    | :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
    | $x_1$ | 2     | 1     | 0     | -2    | -1    | 2     | 0   |
*   **Update Row 0 ($Z$):** $Z$ row = $Z$ row - (-1) * ($x_2$ row)
    | BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS |
    | :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
    | $Z$  |       | 0     | 0     | $2-2M + (2-2M)$ = 4-2M | 1     | $2 + (-1)$ = 1 | $10 + 5$ = 15 |
    | $Z$  |       | 0     | 0     | $4-2M$ | 1     | 1     | 15  |

**Tableau After Iteration 2:**

| BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS |
| :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
| $x_1$ | 2     | 1     | 0     | -2    | -1    | 2     | 0   |
| $x_2$ | 3     | 0     | 1     | 1     | 1     | -1    | 5   |
| $Z$  |       | 0     | 0     | $4-2M$ | 1     | 1     | 15  |
| $Z_j - C_j$ |       | 0     | 0     | $4-2M$ | 0     | 0     |     |

**Step 5: Check for Optimality**
The $Z_j - C_j$ values are $0, 0, 4-2M, 0, 0$. Since M is a large positive number, $4-2M$ is a large negative number.
We are minimizing, and we want all $Z_j - C_j \geq 0$. Currently, $4-2M < 0$. So, we need another iteration.

**Step 6: Iteration 3**

*   **Entering Variable:** $e_1$ (most negative $Z_j - C_j$ is $4-2M$). This is the pivot column.
*   **Leaving Variable:**
    *   Row 1: 0 / -2 (ignore, negative denominator)
    *   Row 2: 5 / 1 = 5
    *   Smallest non-negative ratio is 5, so $x_2$ leaves. This is the pivot row.
*   **Pivot Element:** 1 (intersection of $e_1$ column and $x_2$ row).

**Perform Pivot Operations:**
*   **New $x_2$ row (now $e_1$ row):** Divide row 2 by 1.
    | BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS |
    | :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
    | $e_1$ | 0     | 0     | 1     | 1     | 1     | -1    | 5   |

*   **Update Row 1 ($x_1$):** $x_1$ row = $x_1$ row - (-2) * ($e_1$ row)
    | BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS |
    | :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
    | $x_1$ | 2     | 1     | 2     | 0     | 1     | 0     | 10  |
*   **Update Row 0 ($Z$):** $Z$ row = $Z$ row - ($4-2M$) * ($e_1$ row)
    | BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS |
    | :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
    | $Z$  |       | 0     | $-(4-2M)$ = $2M-4$ | 0     | $1 - (4-2M)(1)$ = $2M-3$ | $1 - (4-2M)(-1)$ = $4-2M+1 = 2M-3$ | $15 - (4-2M)(5)$ = $15 - 20 + 10M = 10M-5$ |

**Tableau After Iteration 3:**

| BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS |
| :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
| $x_1$ | 2     | 1     | 2     | 0     | 1     | 0     | 10  |
| $e_1$ | 0     | 0     | 1     | 1     | 1     | -1    | 5   |
| $Z$  |       | 0     | $2M-4$ | 0     | $2M-3$ | $2M-3$ | $10M-5$ |
| $Z_j - C_j$ |       | 0     | $2M-4$ | 0     | $2M-3$ | 0     |     |

**Step 7: Check for Optimality**
All $Z_j - C_j$ values are now $\geq 0$ (since $M$ is large). The solution is optimal.

**Optimal Solution:**
*   $x_1 = 10$
*   $x_2 = 0$
*   $e_1 = 5$ (This means $x_1 + x_2$ is 5 units over the minimum of 5, which is not correct as $x_1+x_2 = 10$. $e_1$ is the surplus variable).
*   $s_2 = 0$ (The second constraint is binding).
*   $Z = 10M - 5$. This is incorrect for a minimization problem. The optimal value is the RHS of the Z row.

Let's re-examine the Z row calculation after Iteration 3. The objective function $Z$ should be minimized.
The values in the $C_B$ column are 2 for $x_1$ and 0 for $e_1$.
The current basic variables are $x_1$ and $e_1$.
The objective function is $Z = 2x_1 + 3x_2$.
In the current tableau, we have:
$x_1 = 10$
$e_1 = 5$
$x_2$ is non-basic.

The objective function value should be derived from the current basic variables and their coefficients in the objective function.
$Z = 2(x_1) + 3(x_2) = 2(10) + 3(0) = 20$.

Let's recalculate the Z row using the correct $C_B$ values and the pivot row calculations.
The objective row $Z$ is computed as $Z = \sum C_B \times (\text{column coefficients})$.
$Z_1 = 2(1) + 0(0) = 2$, $Z_1 - C_1 = 2 - 2 = 0$.
$Z_2 = 2(2) + 0(1) = 4$, $Z_2 - C_2 = 4 - 3 = 1$.
$Z_3 = 2(0) + 0(1) = 0$, $Z_3 - C_3 = 0 - 0 = 0$.
$Z_4 = 2(-1) + 0(1) = -2$, $Z_4 - C_4 = -2 - 0 = -2$.
$Z_5 = 2(0) + 0(-1) = 0$, $Z_5 - C_5 = 0 - M = -M$.

The final objective function row should be $Z_j - C_j$ for minimization.
We need to be careful with how the Big M objective row is constructed and how $Z_j - C_j$ is interpreted for minimization.

**Let's use the approach from Paneerselvam (Third edition, 2023):**
For minimization, the objective function row is typically $Z_j - C_j$. We look for the most negative value.
The Big M penalty is added to the objective function for artificial variables.

Modified Objective Row for Tableau (Minimization, Big M): $Z - 2x_1 - 3x_2 + Ma_1 = 0$.
$C_j$: 2, 3, 0, 0, M

| BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS | Ratio |
| :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- | :---- |
| $a_1$ | M     | 1     | 1     | -1    | 0     | 1     | 5   | 5/1=5 |
| $s_2$ | 0     | 1     | 2     | 0     | 1     | 0     | 10  | 10/2=5 |
| $Z$  |       | 2     | 3     | 0     | 0     | M     | 0   |       |
| $Z_j-C_j$ |       | $M-2$ | $M-3$ | $-M$  | 0     | 0     |     |       |

**Iteration 1:** Enter $x_1$, Leave $a_1$. Pivot element is 1.
New $x_1$ row: [1, 1, -1, 0, 1], RHS 5. $C_B=2$.
New $s_2$ row: [0, 1, 1, 1, -1], RHS 5. $C_B=0$.
New Z row: $Z_{old} - (M-2) \times x_1$ row
$Z_j-C_j$ row: $(M-2)- (M-2)*1 = 0$ (for $x_1$)
$(M-3) - (M-2)*1 = -1$ (for $x_2$)
$-M - (M-2)*(-1) = -M + M - 2 = -2$ (for $e_1$)
$0 - (M-2)*0 = 0$ (for $s_2$)
$0 - (M-2)*1 = -(M-2)$ (for $a_1$)
RHS: $0 - (M-2)*5 = -5M + 10$

**Tableau After Iteration 1:**

| BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS | Ratio |
| :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- | :---- |
| $x_1$ | 2     | 1     | 1     | -1    | 0     | 1     | 5   | 5/1=5 |
| $s_2$ | 0     | 0     | 1     | 1     | 1     | -1    | 5   | 5/1=5 |
| $Z$  |       | 2     | 3     | 0     | 0     | M     | 0   |       |
| $Z_j-C_j$ |       | 0     | -1    | -2    | 0     | $-(M-2)$ | -5M+10 |       |

**Iteration 2:** Enter $x_2$, Leave $s_2$ (or $x_1$). Let's leave $s_2$. Pivot element is 1.
New $x_2$ row: [0, 1, 1, 1, -1], RHS 5. $C_B=3$.
New $x_1$ row: $x_1$ row $- 1 \times x_2$ row
$x_1$ row: [1, 1, -1, 0, 1] - [0, 1, 1, 1, -1] = [1, 0, -2, -1, 2], RHS 0. $C_B=2$.
$Z_j-C_j$ row:
$x_2$: $-1 - 1*(-1) = 0$
$e_1$: $-2 - 1*(1) = -3$
$s_2$: $0 - 1*(1) = -1$
$a_1$: $-(M-2) - 1*(-1) = -M+2+1 = -M+3$
RHS: $(-5M+10) - 1*(5) = -5M+5$

**Tableau After Iteration 2:**

| BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS |
| :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
| $x_1$ | 2     | 1     | 0     | -2    | -1    | 2     | 0   |
| $x_2$ | 3     | 0     | 1     | 1     | 1     | -1    | 5   |
| $Z$  |       | 2     | 3     | 0     | 0     | M     | 0   |
| $Z_j-C_j$ |       | 0     | 0     | -3    | -1    | $-(M-3)$ | -5M+5 |

**Iteration 3:** Enter $e_1$, Leave $x_1$. Pivot element is -2.
New $e_1$ row: Divide $x_1$ row by -2.
[1, 0, -2, -1, 2] / -2 => [-1/2, 0, 1, 1/2, -1], RHS 0. $C_B=0$.
New $x_2$ row: $x_2$ row $- 1 \times e_1$ row
[0, 1, 1, 1, -1] - 1 * [-1/2, 0, 1, 1/2, -1] = [1/2, 1, 0, 1/2, 0], RHS 5. $C_B=3$.
$Z_j-C_j$ row:
$e_1$: $-3 - (-2)*(1) = -3 + 2 = -1$. This is incorrect. The $Z_j-C_j$ for the pivot column should become 0.
$Z_j-C_j$ for $e_1$: $Z_j-C_j$ of old $e_1$ row - coeff in $e_1$ column of old $e_1$ row * $Z_j-C_j$ of new $e_1$ row.

Let's re-evaluate $Z_j - C_j$ after pivot.
$C_B$ for new basic variables ($x_1$, $x_2$). Oh wait, $x_1$ is replaced by $e_1$.
Basic variables are now $e_1$ (cost 0) and $x_2$ (cost 3).
New $e_1$ row: [-1/2, 0, 1, 1/2, -1], RHS 0. $C_B=0$.
New $x_2$ row: [1/2, 1, 0, 1/2, 0], RHS 5. $C_B=3$.

Calculate new $Z_j - C_j$:
$Z_1 = 0*(-1/2) + 3*(1/2) = 3/2$. $Z_1 - C_1 = 3/2 - 2 = -1/2$.
$Z_2 = 0*(0) + 3*(1) = 3$. $Z_2 - C_2 = 3 - 3 = 0$.
$Z_3 = 0*(1) + 3*(0) = 0$. $Z_3 - C_3 = 0 - 0 = 0$.
$Z_4 = 0*(1/2) + 3*(1/2) = 3/2$. $Z_4 - C_4 = 3/2 - 0 = 3/2$.
$Z_5 = 0*(-1) + 3*(0) = 0$. $Z_5 - C_5 = 0 - M = -M$.

RHS of Z row: $0*0 + 3*5 = 15$.

**Tableau After Iteration 3:**

| BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS |
| :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
| $e_1$ | 0     | -1/2  | 0     | 1     | 1/2   | -1    | 0   |
| $x_2$ | 3     | 1/2   | 1     | 0     | 1/2   | 0     | 5   |
| $Z$  |       | 3/2   | 3     | 0     | 3/2   | M     | 15  |
| $Z_j-C_j$ |       | -1/2  | 0     | 0     | 3/2   | 0     |     |

**Step 8: Check for Optimality**
For minimization, we need all $Z_j - C_j \geq 0$. We have $-1/2$ for $x_1$. We need another iteration.

**Iteration 4:** Enter $x_1$. Leave $e_1$ (ratio 0/-1/2, ignore) or $x_2$ (ratio 5/(1/2)=10).
Smallest non-negative ratio is 10, so $x_2$ leaves. Pivot element is 1/2.
New $x_1$ row: Divide $x_2$ row by 1/2.
[1/2, 1, 0, 1/2, 0] / (1/2) => [1, 2, 0, 1, 0], RHS 10. $C_B=2$.
New $e_1$ row: $e_1$ row $- (-1/2) \times x_1$ row
$e_1$ row: [-1/2, 0, 1, 1/2, -1] + 1/2 * [1, 2, 0, 1, 0] = [-1/2 + 1/2, 0+1, 1+0, 1/2+1/2, -1+0] = [0, 1, 1, 1, -1], RHS 0. $C_B=0$.

$Z_j-C_j$ row:
$x_1$: $-1/2 - (-1/2)*1 = 0$
$x_2$: $0 - (-1/2)*2 = 1$
$e_1$: $0 - (-1/2)*0 = 0$
$s_2$: $3/2 - (-1/2)*1 = 3/2 + 1/2 = 2$
$a_1$: $0 - (-1/2)*0 = 0$.

RHS of Z row: $15 - (-1/2)*10 = 15 + 5 = 20$.

**Tableau After Iteration 4:**

| BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS |
| :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- |
| $e_1$ | 0     | 0     | 1     | 1     | 1     | -1    | 0   |
| $x_1$ | 2     | 1     | 2     | 0     | 1     | 0     | 10  |
| $Z$  |       | 2     | 5     | 0     | 2     | M     | 20  |
| $Z_j-C_j$ |       | 0     | 1     | 0     | 2     | 0     |     |

**Final Check:**
All $Z_j - C_j \geq 0$. The solution is optimal.
Artificial variable $a_1$ is non-basic (value 0). The problem is feasible.

**Optimal Solution:**
*   $x_1 = 10$
*   $x_2 = 0$
*   $Z = 20$

This solution satisfies constraints:
$x_1 + x_2 = 10 + 0 = 10 \geq 5$ (True)
$x_1 + 2x_2 = 10 + 2(0) = 10 \leq 10$ (True)

---

### 8. Two-Phase Simplex Method

When using artificial variables, especially in minimization problems or problems with $\geq$ constraints, the Big M method can sometimes lead to computational difficulties. The Two-Phase method offers an alternative.

**Phase I:**
1.  **Objective:** Drive all artificial variables to zero.
2.  **Setup:** For all constraints that required artificial variables, assign a coefficient of 1 to them in the objective function and 0 to all other variables. The objective is to minimize the sum of artificial variables.
    *   Maximize: $- \sum a_i$
    *   Minimize: $\sum a_i$
3.  **Solve:** Use the Simplex method to solve this Phase I problem.
    *   If the optimal value of the objective function is 0, it means all artificial variables have been driven to zero, and a feasible solution has been found. Proceed to Phase II.
    *   If the optimal value of the objective function is greater than 0, it means it's impossible to satisfy all constraints, and the original problem has no feasible solution.

**Phase II:**
1.  **Objective:** Optimize the original objective function.
2.  **Setup:** Remove the artificial variables and their columns from the final tableau of Phase I. Use the coefficients of the original objective function.
3.  **Solve:** Apply the Simplex method to this new tableau. The starting basic feasible solution is the one obtained at the end of Phase I. The resulting optimal solution is the solution to the original LP problem.

**Advantages of Two-Phase Method:**
*   Avoids the large M values, potentially leading to better numerical stability.
*   Clearly separates the feasibility and optimality aspects of the problem.

---

### 9. Important Points to Remember

*   **Standard Form is Crucial:** Always convert your LP problem into the standard form before starting the Simplex method.
*   **Slack vs. Surplus Variables:** Use slack variables for $\leq$ constraints and surplus variables for $\geq$ constraints.
*   **Artificial Variables:** Introduce artificial variables only for $\geq$ and $=$ constraints that do not have an obvious basic variable.
*   **Big M vs. Two-Phase:** Both methods handle artificial variables. Big M uses a penalty (M), while Two-Phase uses a separate phase to eliminate artificial variables.
*   **Optimality Conditions:**
    *   Maximization: All $C_j - Z_j \leq 0$.
    *   Minimization: All $Z_j - C_j \geq 0$.
*   **Ratio Test:** The ratio test determines the leaving variable. Always use the smallest non-negative ratio. Ignore negative or zero denominators in the pivot column.
*   **Pivot Operations:** Follow Gaussian elimination rules carefully to update the tableau.
*   **Interpretation:** Read the solution from the final tableau for basic variables in the RHS column.
*   **Special Cases:** Be vigilant for multiple optimal solutions, unbounded solutions, and infeasible solutions.

---

### 10. Practice Questions

**Question 1 (Maximization):**
Solve the following LP problem using the Simplex method:
Maximize $Z = 4x_1 + 3x_2$
Subject to:
$2x_1 + x_2 \leq 10$
$x_1 + 2x_2 \leq 8$
$x_1, x_2 \geq 0$

**Answer 1:**
*   Standard form:
    $2x_1 + x_2 + s_1 = 10$
    $x_1 + 2x_2 + s_2 = 8$
    $Z - 4x_1 - 3x_2 = 0$
*   Initial Tableau:
    | BV   | $C_B$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS | Ratio |
    | :--- | :---- | :---- | :---- | :---- | :---- | :-- | :---- |
    | $s_1$ | 0     | 2     | 1     | 1     | 0     | 10  | 5     |
    | $s_2$ | 0     | 1     | 2     | 0     | 1     | 8   | 4     |
    | $Z$  |       | -4    | -3    | 0     | 0     | 0   |       |
*   Iteration 1: Enter $x_1$, Leave $s_2$. Pivot element = 1.
*   Iteration 2: Enter $x_2$, Leave $s_1$. Pivot element = 3/2.
*   Optimal Solution: $x_1 = 14/3$, $x_2 = 4/3$, $Z = 68/3$

**Question 2 (Minimization with $\geq$ constraint):**
Solve the following LP problem using the Simplex method (use Big M):
Minimize $Z = 3x_1 + 2x_2$
Subject to:
$2x_1 + x_2 \geq 4$
$x_1 + x_2 \leq 3$
$x_1, x_2 \geq 0$

**Answer 2:**
*   Standard form:
    $2x_1 + x_2 - e_1 + a_1 = 4$
    $x_1 + x_2 + s_2 = 3$
    $Z - 3x_1 - 2x_2 + M a_1 = 0$
*   Initial Tableau (Minimization $Z_j - C_j$ convention):
    | BV   | $C_B$ | $x_1$ | $x_2$ | $e_1$ | $s_2$ | $a_1$ | RHS | Ratio |
    | :--- | :---- | :---- | :---- | :---- | :---- | :---- | :-- | :---- |
    | $a_1$ | M     | 2     | 1     | -1    | 0     | 1     | 4   | 2     |
    | $s_2$ | 0     | 1     | 1     | 0     | 1     | 0     | 3   | 3     |
    | $Z$  |       | $3$   | $2$   | $0$   | $0$   | $M$   | $0$ |       |
    | $Z_j-C_j$ |       | $2M-3$ | $M-2$ | $-M$  | 0     | 0     |     |       |
*   Iteration 1: Enter $x_1$, Leave $a_1$. Pivot element = 2.
*   Iteration 2: Enter $x_2$, Leave $s_2$. Pivot element = 1/2.
*   Optimal Solution: $x_1 = 5/2$, $x_2 = 1/2$, $Z = 17/2$

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### References:

*   **Operations Research by Paneerselvam R. (PHI, Third edition, 2023)**: Chapters on Linear Programming and Simplex Method.
*   **Operations Research by Taha (Pearson, Tenth edition, 2019)**: Chapters on Linear Programming Models and Simplex Method.
*   **Introduction to Operations Research by F. S. Hillier and G. J. Lieberman (McGraw Hill, Tenth edition, 2017)**: Sections detailing the Simplex Algorithm and its variations.

---