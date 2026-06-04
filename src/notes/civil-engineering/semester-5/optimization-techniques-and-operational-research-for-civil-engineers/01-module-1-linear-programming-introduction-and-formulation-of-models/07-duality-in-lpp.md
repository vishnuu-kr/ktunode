---
title: "Duality in L.P.P."
subject: "OPTIMIZATION TECHNIQUES AND OPERATIONAL RESEARCH FOR CIVIL ENGINEERS"
module: "Module 1: Linear Programming: Introduction and formulation of models"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810f9b"
status: "completed"
scrapedAt: "2026-05-20T18:50:04.719Z"
---
# Module 1: Linear Programming: Introduction and Formulation of Models

## Topic: Duality in Linear Programming Problems (L.P.P.)

---

### **1. Introduction to Duality**

*   **What is Duality?**
    *   Every Linear Programming Problem (L.P.P.) has an associated problem called its **dual**.
    *   The original problem is called the **primal** problem.
    *   The dual problem is formulated based on the primal problem.
    *   Solving the dual problem can provide valuable insights into the solution of the primal problem.
*   **Why is Duality Important?**
    *   **Theoretical Significance:** Establishes a fundamental relationship between two problems, leading to powerful theorems in L.P. (e.g., Duality Theorem).
    *   **Practical Applications:**
        *   **Sensitivity Analysis:** Understanding how changes in the primal problem's parameters affect the optimal solution.
        *   **Resource Allocation:** The dual variables often represent the "shadow prices" or the marginal value of the primal resources.
        *   **Computational Efficiency:** Sometimes, the dual problem might be easier or faster to solve than the primal, especially if the dual has fewer constraints.
        *   **Economic Interpretation:** Provides an economic interpretation of the optimal solution of the primal problem.

---

### **2. Formulating the Dual of an L.P.P.**

There's a systematic way to convert a primal L.P.P. into its dual.

**Standard Form of Primal L.P.P.:**

Maximize $Z = c_1 x_1 + c_2 x_2 + \dots + c_n x_n$

Subject to:
$a_{11} x_1 + a_{12} x_2 + \dots + a_{1n} x_n \le b_1$
$a_{21} x_1 + a_{22} x_2 + \dots + a_{2n} x_n \le b_2$
$\vdots$
$a_{m1} x_1 + a_{m2} x_2 + \dots + a_{mn} x_n \le b_m$
And $x_1, x_2, \dots, x_n \ge 0$

**Rules for Forming the Dual:**

| Primal (Maximize)                                      | Dual (Minimize)                                          |
| :----------------------------------------------------- | :------------------------------------------------------- |
| Objective function coefficients ($c_j$)                | Right-hand side constants of constraints ($b_i$)         |
| Right-hand side constants of constraints ($b_i$)       | Objective function coefficients ($c_j$)                  |
| Coefficients of $x_j$ in $i^{th}$ constraint ($a_{ij}$) | Coefficients of $y_i$ in $j^{th}$ constraint ($a_{ij}$) |
| Decision variables ($x_j$)                             | Dual variables ($y_i$)                                   |
| Number of primal variables ($n$)                       | Number of dual constraints ($m$)                         |
| Number of primal constraints ($m$)                     | Number of dual variables ($n$)                           |

**Specific Conversion Rules:**

1.  **Objective Function:**
    *   If the primal is a **maximization** problem, the dual is a **minimization** problem.
    *   If the primal is a **minimization** problem, the dual is a **maximization** problem.

2.  **Constraints:**
    *   The number of dual variables will be equal to the number of primal constraints.
    *   The number of dual constraints will be equal to the number of primal variables.
    *   The constraint coefficients matrix of the dual is the transpose of the primal constraint coefficient matrix.
    *   The objective function coefficients of the primal become the right-hand side constants of the dual constraints.
    *   The right-hand side constants of the primal constraints become the objective function coefficients of the dual.

3.  **Inequality Signs:**
    *   For a primal **maximization** problem with $\le$ constraints, the dual will have $\ge$ constraints.
    *   For a primal **minimization** problem with $\ge$ constraints, the dual will have $\le$ constraints.

4.  **Variable Restrictions:**
    *   If primal variables are $\ge 0$, the corresponding dual constraints will have the same type of inequality sign as the primal constraints.
    *   If primal variables are $\le 0$, the corresponding dual constraints will have the opposite type of inequality sign as the primal constraints.
    *   If primal variables are unrestricted in sign, the corresponding dual constraints will be equalities.
    *   If primal constraints are equalities, the corresponding dual variables will be unrestricted in sign.

---

### **3. Examples of Primal-Dual Formulation**

**Example 1: Standard Maximization Problem**

**Primal Problem (P):**
Maximize $Z = 3x_1 + 5x_2$

Subject to:
$2x_1 + x_2 \le 10$
$x_1 + 2x_2 \le 8$
$x_1, x_2 \ge 0$

**Dual Problem (D):**
Let the dual variables be $y_1$ and $y_2$.

*   **Objective Function:** Minimize $W = 10y_1 + 8y_2$ (Coefficients are the RHS of primal constraints).
*   **Constraints:**
    *   From the first primal constraint (coefficients of $x_1$): $2y_1 + y_2 \ge 3$ (Objective coefficient of $x_1$ is 3).
    *   From the second primal constraint (coefficients of $x_2$): $y_1 + 2y_2 \ge 5$ (Objective coefficient of $x_2$ is 5).
*   **Variable Restrictions:** Since primal variables are $\ge 0$ and constraints are $\le$, dual variables are $\ge 0$.

**Dual Problem (D):**
Minimize $W = 10y_1 + 8y_2$

Subject to:
$2y_1 + y_2 \ge 3$
$y_1 + 2y_2 \ge 5$
$y_1, y_2 \ge 0$

---

**Example 2: Standard Minimization Problem**

**Primal Problem (P):**
Minimize $Z = 2x_1 + 3x_2 + 4x_3$

Subject to:
$3x_1 - x_2 + x_3 \ge 5$
$x_1 + x_2 - 2x_3 \ge 2$
$x_1, x_2, x_3 \ge 0$

**Dual Problem (D):**
Let the dual variables be $y_1$ and $y_2$.

*   **Objective Function:** Maximize $W = 5y_1 + 2y_2$ (Coefficients are the RHS of primal constraints).
*   **Constraints:**
    *   From the first primal constraint (coefficients of $x_1$): $3y_1 + y_2 \le 2$ (Objective coefficient of $x_1$ is 2).
    *   From the second primal constraint (coefficients of $x_2$): $-y_1 + y_2 \le 3$ (Objective coefficient of $x_2$ is 3).
    *   From the third primal constraint (coefficients of $x_3$): $y_1 - 2y_2 \le 4$ (Objective coefficient of $x_3$ is 4).
*   **Variable Restrictions:** Since primal variables are $\ge 0$ and constraints are $\ge$, dual variables are $\ge 0$.

**Dual Problem (D):**
Maximize $W = 5y_1 + 2y_2$

Subject to:
$3y_1 + y_2 \le 2$
$-y_1 + y_2 \le 3$
$y_1 - 2y_2 \le 4$
$y_1, y_2 \ge 0$

---

**Example 3: Mixed Constraints and Unrestricted Variables**

**Primal Problem (P):**
Maximize $Z = 2x_1 + 3x_2 - x_3$

Subject to:
$x_1 + x_2 \le 5$
$2x_1 - x_2 + 3x_3 = 6$
$x_1 \ge 0, x_2 \ge 0, x_3$ is unrestricted

**Dual Problem (D):**
Let the dual variables be $y_1$ (for the $\le$ constraint), $y_2$ (for the = constraint).

*   **Objective Function:** Minimize $W = 5y_1 + 6y_2$
*   **Constraints:**
    *   For $x_1$ (Primal variable $\ge 0$, constraint 1 is $\le$): $y_1 + 2y_2 \ge 2$
    *   For $x_2$ (Primal variable $\ge 0$, constraint 2 is $\le$): $y_1 - y_2 \ge 3$
    *   For $x_3$ (Primal variable unrestricted, constraint 3 is =): $3y_2 = -1$ (Objective coefficient of $x_3$ is -1).
*   **Variable Restrictions:**
    *   $y_1 \ge 0$ (Corresponding primal variable $x_1 \ge 0$ and constraint is $\le$).
    *   $y_2$ is unrestricted (Corresponding primal constraint is $=$).

**Dual Problem (D):**
Minimize $W = 5y_1 + 6y_2$

Subject to:
$y_1 + 2y_2 \ge 2$
$y_1 - y_2 \ge 3$
$3y_2 = -1$
$y_1 \ge 0$, $y_2$ is unrestricted

---

### **4. Relationship between Primal and Dual Solutions (Duality Theorems)**

*   **Weak Duality Theorem:**
    *   For any feasible solution $x$ of the primal maximization problem and any feasible solution $y$ of the dual minimization problem, the objective function value of the primal is less than or equal to the objective function value of the dual:
        $Z(x) \le W(y)$
    *   **Implication:** The optimal value of the dual minimization problem is always greater than or equal to the optimal value of the primal maximization problem.

*   **Strong Duality Theorem:**
    *   If both the primal and dual problems have feasible solutions, then their optimal objective function values are equal:
        $Z_{opt} = W_{opt}$
    *   **Condition:** This holds if and only if there exists an optimal solution for both problems.

*   **Duality Theorem (Complementary Slackness):**
    *   This theorem establishes a relationship between the primal and dual solutions at optimality. If $x^*$ is an optimal solution to the primal and $y^*$ is an optimal solution to the dual:
        *   If $x_j^* > 0$ (primal variable is positive), then the $j^{th}$ dual constraint must be binding (i.e., equality holds).
        *   If the $j^{th}$ dual constraint is not binding (i.e., slack exists), then the primal variable $x_j^*$ must be zero.
        *   If $y_i^* > 0$ (dual variable is positive), then the $i^{th}$ primal constraint must be binding (i.e., equality holds).
        *   If the $i^{th}$ primal constraint is not binding (i.e., slack exists), then the dual variable $y_i^*$ must be zero.

    *   **In simpler terms for standard form:**
        *   Primal slack $\times$ Dual variable = 0
        *   Dual slack $\times$ Primal variable = 0

    *   **Mathematical Representation:**
        For primal Maximize $Z = c^T x$ subject to $Ax \le b, x \ge 0$ and dual Minimize $W = b^T y$ subject to $A^T y \ge c, y \ge 0$:
        $x_j^* (c_j - \sum_{i=1}^m a_{ij} y_i^*) = 0$ for all $j=1, \dots, n$
        $y_i^* (b_i - \sum_{j=1}^n a_{ij} x_j^*) = 0$ for all $i=1, \dots, m$

*   **Unboundedness and Infeasibility:**
    *   If the primal problem is unbounded (objective value can be infinitely increased), then the dual problem is infeasible.
    *   If the dual problem is unbounded, then the primal problem is infeasible.
    *   If both primal and dual problems are infeasible, then there is no solution.

---

### **5. Economic Interpretation of Dual Variables (Shadow Prices)**

*   In many practical L.P.P.s (especially in resource allocation problems), the dual variables have a significant economic interpretation.
*   For a primal maximization problem where constraints represent resource limitations, the optimal dual variables ($y_i^*$) represent the **shadow prices** or the **marginal value** of one additional unit of the corresponding resource.
*   **Example:** If a primal constraint is $x_1 + 2x_2 \le 10$ (representing 10 units of resource A available), and its corresponding dual variable $y_1^*$ is $5$, it means that if the availability of resource A increases from 10 to 11 (i.e., $b_1$ becomes 11), the optimal objective function value of the primal problem will increase by approximately $5$.
*   This interpretation is valid as long as the change in the resource availability is small enough not to change the basic feasible solution (i.e., within the range of sensitivity analysis).

---

### **6. Practice Questions and Exercises**

**Question 1:**
Formulate the dual of the following L.P.P.:
Maximize $Z = 4x_1 + 5x_2 - 3x_3$
Subject to:
$x_1 - 2x_2 + x_3 \le 10$
$-x_1 + x_2 - 3x_3 \ge 5$
$2x_1 + 3x_2 + x_3 = 7$
$x_1 \ge 0, x_2 \le 0, x_3$ is unrestricted

**Answer 1:**

First, we need to convert the primal to a more standard form for easier dual formulation.
*   $x_2 \le 0$ can be replaced by $x_2' = -x_2 \ge 0$.
*   The objective function becomes Maximize $Z = 4x_1 - 5x_2' - 3x_3$.
*   The constraints become:
    *   $x_1 + 2x_2' + x_3 \le 10$
    *   $-x_1 - x_2' - 3x_3 \ge 5$
    *   $2x_1 + 3x_2' - x_3 = 7$
*   $x_1 \ge 0, x_2' \ge 0, x_3$ is unrestricted.

Now, let the dual variables be $y_1$ (for $\le$ constraint), $y_2$ (for $\ge$ constraint), and $y_3$ (for $=$ constraint).

**Dual Problem (D):**
Minimize $W = 10y_1 + 5y_2 + 7y_3$

Subject to:
*   For $x_1$ (Primal $\ge 0$, constraint 1 is $\le$, constraint 2 is $\ge$, constraint 3 is $=$):
    $y_1 - y_2 + 2y_3 \ge 4$
*   For $x_2'$ (Primal $\ge 0$, constraint 1 is $\le$, constraint 2 is $\ge$, constraint 3 is $=$):
    $2y_1 - y_2 + 3y_3 \ge -5$  (Objective coefficient of $x_2'$ is -5)
*   For $x_3$ (Primal unrestricted, constraint 1 is $\le$, constraint 2 is $\ge$, constraint 3 is $=$):
    $y_1 - 3y_2 + y_3 = -1$ (Objective coefficient of $x_3$ is -3)

*   **Variable Restrictions:**
    *   $y_1 \ge 0$ (Primal $x_1 \ge 0$, constraint 1 is $\le$)
    *   $y_2 \le 0$ (Primal $x_2' \ge 0$, constraint 2 is $\ge$. If primal constraint is $\ge$, dual variable is $\le$)
    *   $y_3$ is unrestricted (Primal constraint is $=$)

**Final Dual Problem:**
Minimize $W = 10y_1 + 5y_2 + 7y_3$
Subject to:
$y_1 - y_2 + 2y_3 \ge 4$
$2y_1 - y_2 + 3y_3 \ge -5$
$y_1 - 3y_2 + y_3 = -1$
$y_1 \ge 0, y_2 \le 0, y_3$ is unrestricted

---

**Question 2:**
Given the optimal solution for a primal maximization problem is $Z_{opt} = 100$. What can you say about the optimal solution for its dual minimization problem?

**Answer 2:**
According to the Strong Duality Theorem, if both the primal and dual problems have feasible solutions, their optimal objective function values are equal. Therefore, the optimal solution for the dual minimization problem will also be $W_{opt} = 100$, assuming the dual is feasible.

---

**Question 3:**
Consider a primal L.P.P. with $n$ variables and $m$ constraints. How many variables and constraints will its dual problem have?

**Answer 3:**
The dual problem will have $m$ variables (one for each primal constraint) and $n$ constraints (one for each primal variable).

---

### **7. Important Points to Remember**

*   **Systematic Conversion:** Always follow the conversion rules carefully for objective function, constraints, inequality signs, and variable restrictions.
*   **Standard Form:** It's often helpful to convert the primal to a standard form (e.g., all $\le$ constraints for maximization, all $\ge$ constraints for minimization, and non-negative variables) before formulating the dual.
*   **Shadow Prices:** Understand the economic interpretation of dual variables as marginal values of resources, which is crucial for decision-making in civil engineering projects.
*   **Duality Theorems:** These theorems are fundamental. Weak duality tells you the relative values of primal and dual objective functions. Strong duality equates them when optimal solutions exist. Complementary slackness links the non-zero primal/dual variables to binding/non-binding constraints.
*   **Unboundedness/Infeasibility:** Be aware of the relationship between the unboundedness of one problem and the infeasibility of the other.
*   **Self-Duality:** Some L.P.P.s are their own duals (e.g., a minimization problem with $\le$ constraints and $\ge 0$ variables).

---
---
