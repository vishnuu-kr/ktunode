---
title: "Degeneracy"
subject: "OPTIMIZATION TECHNIQUES AND OPERATIONAL RESEARCH FOR CIVIL ENGINEERS"
module: "Module 1: Linear Programming: Introduction and formulation of models"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810f99"
status: "completed"
scrapedAt: "2026-05-20T18:50:03.220Z"
---
# OPTIMIZATION TECHNIQUES AND OPERATIONAL RESEARCH FOR CIVIL ENGINEERS

## Module 1: Linear Programming: Introduction and Formulation of Models

### Topic: Degeneracy in Linear Programming

---

## 1. Introduction to Degeneracy

**Degeneracy** in Linear Programming (LP) is a situation that can arise during the solution process, particularly when using the Simplex Method. It refers to a specific condition where a basic feasible solution has **more than the minimum number of basic variables equal to zero**.

In a standard LP problem with $m$ constraints (excluding non-negativity constraints), a basic feasible solution (BFS) should have exactly $m$ basic variables. Degeneracy occurs when, at some iteration of the Simplex Method, one or more basic variables take on a value of **zero**.

### Key Concepts and Definitions:

*   **Basic Variables:** Variables that are assigned as "basic" in a BFS. In a system with $m$ constraints, there are $m$ basic variables.
*   **Non-Basic Variables:** Variables that are set to their lower bound (usually 0) in a BFS.
*   **Basic Feasible Solution (BFS):** A solution that satisfies all constraints of the LP problem and has at most $m$ non-zero variables, where $m$ is the number of constraints.
*   **Non-Degenerate BFS:** A BFS where all $m$ basic variables are strictly positive.
*   **Degenerate BFS:** A BFS where at least one of the $m$ basic variables is zero.

### Why is Degeneracy a Concern?

While a degenerate BFS itself is still a valid feasible solution, it can lead to complications in the Simplex Method:

1.  **Cycling:** The most significant concern is that degeneracy can cause the Simplex Method to **cycle**. Cycling means that the algorithm can repeatedly visit the same set of basic feasible solutions without improving the objective function value, thus never reaching the optimal solution.
2.  **Stalling Progress:** Even if cycling doesn't occur, a degenerate BFS can sometimes lead to slow convergence or apparent lack of progress in improving the objective function, as a non-basic variable entering the basis might not change the objective function value.

---

## 2. Causes of Degeneracy

Degeneracy typically arises when there is **linear dependence among the constraint rows (or columns)**, specifically in the set of vectors corresponding to the basic variables.

### Common Causes:

*   **Redundant Constraints:** If one constraint can be expressed as a linear combination of other constraints, it can lead to degeneracy.
*   **Multiple Constraints Binding Simultaneously:** When more than $m$ constraints are satisfied as equalities at the optimal solution (or at an intermediate BFS), it indicates degeneracy.
*   **Artificial Variables in Initial BFS:** If artificial variables are used to establish an initial BFS (e.g., in the Two-Phase Simplex Method) and some artificial variables remain in the basis with a value of zero at an iteration, it can indicate degeneracy.

### Example of Degeneracy Formation:

Consider the following LP problem:

Maximize $Z = 3x_1 + 2x_2$
Subject to:
1.  $x_1 + x_2 \le 4$
2.  $x_1 - x_2 \le 2$
3.  $x_1 \le 2$
4.  $x_1, x_2 \ge 0$

Let's introduce slack variables $s_1, s_2, s_3$:

Maximize $Z = 3x_1 + 2x_2 + 0s_1 + 0s_2 + 0s_3$
Subject to:
1.  $x_1 + x_2 + s_1 = 4$
2.  $x_1 - x_2 + s_2 = 2$
3.  $x_1 + s_3 = 2$
4.  $x_1, x_2, s_1, s_2, s_3 \ge 0$

**Initial BFS:**
Let $x_1 = 0, x_2 = 0$.
Then $s_1 = 4$, $s_2 = 2$, $s_3 = 2$.
The basic variables are $s_1, s_2, s_3$. All have positive values. This is a non-degenerate BFS.

**Consider another scenario:**
Suppose the constraints were:
1.  $x_1 + x_2 \le 4$
2.  $x_1 \le 2$
3.  $x_2 \le 2$
4.  $x_1, x_2 \ge 0$

Introduce slack variables $s_1, s_2, s_3$:
1.  $x_1 + x_2 + s_1 = 4$
2.  $x_1 + s_2 = 2$
3.  $x_2 + s_3 = 2$

**Initial BFS:**
Let $x_1 = 0, x_2 = 0$.
Then $s_1 = 4$, $s_2 = 2$, $s_3 = 2$.
Basic variables: $s_1, s_2, s_3$. All positive. Non-degenerate.

Now, let's consider a solution where two variables become zero simultaneously.
If $x_1 = 2$ and $x_2 = 2$, this would violate constraint 1 ($2+2 \le 4$ is met).
Let's examine a different set of constraints:

Maximize $Z = 3x_1 + 2x_2$
Subject to:
1.  $x_1 + x_2 \le 4$
2.  $x_1 \le 2$
3.  $x_2 \le 2$
4.  $x_1, x_2 \ge 0$

Convert to standard form:
$x_1 + x_2 + s_1 = 4$
$x_1 + s_2 = 2$
$x_2 + s_3 = 2$

Consider the BFS where $x_1 = 2, x_2 = 2$.
This solution satisfies:
$2 + 2 + s_1 = 4 \implies s_1 = 0$
$2 + s_2 = 2 \implies s_2 = 0$
$2 + s_3 = 2 \implies s_3 = 0$

In this BFS, $x_1$ and $x_2$ are non-basic variables (set to 0 by convention in the tableau, but here they are not the slack variables).
The basic variables are $s_1, s_2, s_3$.
However, $s_1 = 0, s_2 = 0, s_3 = 0$.
This is a **degenerate BFS** because $m=3$ constraints, but we have 3 basic variables ($s_1, s_2, s_3$) all equal to zero.

**Important Note:** The definition of a BFS requires that $m$ variables are basic. In the example above, if we started with $x_1, x_2$ as non-basic, $s_1, s_2, s_3$ would be basic. If the solution is $x_1=2, x_2=2$, then $s_1=0, s_2=0, s_3=0$. The basic variables ($s_1, s_2, s_3$) are all zero. This is a degenerate BFS.

---

## 3. Identifying Degeneracy

Degeneracy can be identified in two main ways:

### 3.1. By Examining a Basic Feasible Solution (Manually)

If you have a BFS, check the values of the basic variables. If any basic variable has a value of zero, the BFS is degenerate.

**Example:**
Consider a problem with 3 constraints. A BFS is found to be:
$x_1 = 5$, $x_2 = 0$, $x_3 = 3$, $s_1 = 0$, $s_2 = 2$, $s_3 = 4$.
Basic variables: $x_1, s_2, s_3$.
Values: $x_1=5$, $s_2=2$, $s_3=4$.
Wait, this is wrong. If $x_1, x_2, x_3$ are decision variables and $s_1, s_2, s_3$ are slack variables, and there are 3 constraints, then a BFS has 3 basic variables.

Let's assume a standard form with $m=3$ constraints, and the basic variables are $x_1, x_2, s_1$.
A BFS is found to be:
$x_1 = 3$
$x_2 = 0$
$x_3 = 5$ (non-basic, $x_3=0$)
$s_1 = 0$
$s_2 = 2$
$s_3 = 4$ (assuming these are other slack/artificial variables).

If the basic variables are $\{x_1, x_2, s_1\}$ and the values are $x_1=3$, $x_2=0$, $s_1=0$.
This is a **degenerate BFS** because two of the three basic variables are zero.

### 3.2. During the Simplex Method (Tableau Analysis)

Degeneracy is identified in the Simplex tableau when a basic variable has a value of zero in the "RHS" (Right-Hand Side) column.

**Consider a Simplex Tableau snippet:**

| Basis | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS |
| :---- | :---- | :---- | :---- | :---- | :---- | :-- |
| $s_1$ | 2     | 1     | 1     | 0     | 0     | 4   |
| $x_1$ | 1     | 0     | 0     | 1     | 0     | 2   |
| $s_3$ | 0     | 1     | 0     | 0     | 1     | 0   |
| $Z$   | -3    | -2    | 0     | 0     | 0     | 0   |

In this tableau:
*   Basic variables are $s_1, x_1, s_3$.
*   The values of the basic variables are: $s_1=4$, $x_1=2$, $s_3=0$.
*   Since $s_3$ is a basic variable and its value is 0, this represents a **degenerate BFS**.

**Further Simplex Steps and Degeneracy:**

When performing the pivot operation in a degenerate case, the ratio test might yield multiple minimum positive ratios, with one of them being zero. This zero ratio often corresponds to the leaving variable, and if the entering variable's column has a zero in the pivot row, the objective function value will not change.

---

## 4. Handling Degeneracy (Preventing Cycling)

While degeneracy is not an error in itself, it's the potential for cycling that requires attention. Several methods are used to prevent cycling:

### 4.1. Bland's Rule (Smallest Index Rule)

This is the most common and theoretically sound method to guarantee the Simplex Method terminates.

**How it works:**

1.  **Entering Variable Selection:** When choosing the entering variable (the variable with the most negative coefficient in the $Z$ row), if there are multiple variables with the same most negative coefficient, choose the variable with the **smallest index**.
2.  **Leaving Variable Selection:** When performing the ratio test to determine the leaving variable, if there are multiple basic variables that yield the same minimum *non-negative* ratio, choose the basic variable with the **smallest index** as the leaving variable.

**Why it works:** Bland's rule ensures that at each step, either the objective function improves, or if it doesn't improve, the set of basic variables changes in a way that prevents revisiting previous basic feasible solutions.

### 4.2. Lexicographic Method (Anticycling Rule)

This method modifies the Simplex tableau initialization to ensure that no basic variable is ever zero.

**How it works:**

1.  **Modify Constraints:** Each constraint is slightly perturbed by adding a small positive quantity $\epsilon_i$ to the right-hand side, where $\epsilon_1 < \epsilon_2 < \dots < \epsilon_m$.
    $a_{i1}x_1 + \dots + a_{in}x_n + s_i = b_i + \epsilon_i$
2.  **Tableau Initialization:** The initial basis is formed using the slack variables. The initial basic feasible solution will have $s_i = b_i + \epsilon_i$. Since all $\epsilon_i$ are positive, all basic variables will be strictly positive.
3.  **Simplex Procedure:** The standard Simplex procedure is followed. The coefficients of $\epsilon$ in the tableau are handled algebraically. Crucially, when computing ratios, if a tie occurs, the lexicographically smallest vector is chosen. The objective function is effectively minimized lexicographically at each step.

**Practicality:** While theoretically robust, the lexicographic method can be computationally more intensive due to the $\epsilon$ terms. Bland's rule is generally preferred for practical implementation.

### 4.3. Artificial Variables (with careful handling)

When artificial variables are used (e.g., in the Two-Phase method), degeneracy can occur if an artificial variable is in the basis with a value of zero. The standard Simplex method with Bland's rule applied during pivot selection will handle this correctly.

---

## 5. Impact of Degeneracy on Solutions

*   **No Impact on Optimality:** Degeneracy does not affect the existence or uniqueness of the optimal solution. If an optimal solution exists, the Simplex method will find it, even in the presence of degeneracy.
*   **Potential for Cycling:** The primary risk is cycling, leading to non-termination. However, with proper anti-cycling rules (like Bland's Rule), this risk is eliminated.
*   **Slow Convergence:** In some cases, degeneracy can lead to a situation where the objective function value doesn't improve for several iterations, making the convergence appear slow.

---

## 6. Practice Questions and Exercises

**Question 1:**
What is the primary concern associated with degeneracy in Linear Programming?
(a) It leads to an infeasible solution.
(b) It guarantees multiple optimal solutions.
(c) It can cause the Simplex Method to cycle.
(d) It always results in a non-unique optimal solution.

**Question 2:**
Define a degenerate Basic Feasible Solution (BFS).

**Question 3:**
Consider the following Simplex tableau. Identify if the current BFS is degenerate and explain why.

| Basis | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
| :---- | :---- | :---- | :---- | :---- | :-- |
| $x_1$ | 1     | 0     | 2     | 1     | 3   |
| $s_2$ | 0     | 1     | -1    | 1     | 0   |
| $Z$   | 0     | 0     | 5     | 0     | 15  |

**Question 4:**
Explain how Bland's Rule helps to prevent cycling in the Simplex Method, particularly in the presence of degeneracy.

**Question 5:**
A BFS for an LP with 4 constraints has the following basic variables and their values:
$x_1 = 5$
$x_2 = 0$
$s_1 = 3$
$s_3 = 0$

Is this BFS degenerate? Explain your reasoning.

---

## 7. Answers to Practice Questions

**Answer 1:**
(c) It can cause the Simplex Method to cycle.

**Answer 2:**
A degenerate Basic Feasible Solution (BFS) is a BFS where one or more of the basic variables have a value of zero. In an LP problem with $m$ constraints, a BFS has $m$ basic variables. If any of these $m$ basic variables are zero, the BFS is considered degenerate.

**Answer 3:**
Yes, the BFS is degenerate.
*   The basic variables are $x_1$ and $s_2$.
*   Their values are $x_1 = 3$ and $s_2 = 0$.
*   Since $s_2$ is a basic variable and its value is zero, the BFS is degenerate.

**Answer 4:**
Bland's Rule is an anti-cycling rule for the Simplex Method. It addresses degeneracy by providing a specific procedure for tie-breaking in two critical steps:
1.  **Entering Variable Selection:** If there's a tie for the most negative coefficient in the objective row (indicating multiple candidates to enter the basis), Bland's Rule selects the variable with the smallest index (e.g., $x_1$ over $x_2$, $s_1$ over $s_2$).
2.  **Leaving Variable Selection:** During the ratio test to determine which basic variable leaves the basis, if there's a tie for the minimum *non-negative* ratio, Bland's Rule selects the basic variable with the smallest index to leave the basis.
By consistently choosing the variable with the smallest index in case of ties, Bland's Rule ensures that the algorithm makes progress (either by improving the objective function or by changing the basis) and avoids revisiting the same set of basic feasible solutions, thus preventing cycling.

**Answer 5:**
Yes, this BFS is degenerate.
*   The problem has 4 constraints, so a BFS must have 4 basic variables.
*   The given basic variables are $x_1, x_2, s_1, s_3$.
*   The values are $x_1 = 5$, $x_2 = 0$, $s_1 = 3$, $s_3 = 0$.
*   Since two of the basic variables ($x_2$ and $s_3$) have a value of zero, the BFS is degenerate.

---

## 8. Important Points to Remember

*   **Degeneracy = Basic Variable is Zero:** The defining characteristic of a degenerate BFS is that at least one of the $m$ basic variables equals zero.
*   **Not an Error, but a Potential Problem:** Degeneracy itself is not a flaw in the solution; it's a property of the solution. The problem arises from the *potential* for the Simplex method to cycle.
*   **Cycling Risk:** The primary consequence of degeneracy is the possibility of cycling, where the Simplex method might not terminate.
*   **Bland's Rule is Key:** Bland's Rule (smallest index for tie-breaking) is the most common and effective method to prevent cycling and ensure termination.
*   **Simplex Tableau Indicator:** Look for basic variables with a zero value in the RHS column of the Simplex tableau.
*   **Does Not Affect Optimality:** Degeneracy does not prevent finding the optimal solution, nor does it imply non-uniqueness or infeasibility.

---
