---
title: "Duality"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 1: Engineering application of Optimization – Statement of an Optimization problem–Classification"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff55b"
status: "completed"
scrapedAt: "2026-05-23T18:08:38.849Z"
---
# Optimization Techniques: Module 1 - Engineering Application of Optimization

## Topic: Duality

### Introduction

Duality is a fundamental concept in optimization, particularly in linear programming (LP), that provides a powerful framework for understanding and solving optimization problems. For every linear programming problem (the primal problem), there exists a corresponding dual problem. The relationship between the primal and dual problems offers valuable insights into the structure of the problem, the sensitivity of the optimal solution to changes in constraints, and can often lead to more efficient solution methods.

**Key Takeaway:** Duality connects two LP problems – the primal and the dual – and their solutions are intimately related, offering a different perspective on the original problem.

---

### 1. Understanding the Primal and Dual Problems

The concept of duality revolves around transforming a given optimization problem into another related problem.

#### 1.1 The Primal Problem (Standard Form)

A linear programming problem can be stated in various forms. The standard form is often used for developing duality:

**Minimize** $Z = c^T x$

**Subject to:**
$Ax \ge b$
$x \ge 0$

Where:
*   $Z$ is the objective function to be minimized.
*   $c$ is the vector of cost coefficients.
*   $x$ is the vector of decision variables.
*   $A$ is the matrix of constraint coefficients.
*   $b$ is the vector of right-hand side values of the constraints.
*   $x \ge 0$ are the non-negativity constraints on the decision variables.

**Reference:** S.S. Rao, "Engineering Optimization, Theory and Practice," Chapter 7 (Linear Programming), discusses the standard form of LP problems.

#### 1.2 The Dual Problem

For a given primal LP problem, we can construct a corresponding dual LP problem. The construction of the dual problem depends on the form of the primal problem (maximization/minimization, $\le$, $\ge$, or $=$ constraints).

**General Rules for Constructing the Dual:**

| Primal                                          | Dual                                            |
| :---------------------------------------------- | :---------------------------------------------- |
| Minimize $Z = c^T x$                            | Maximize $W = b^T y$                            |
| Subject to $Ax \ge b$, $x \ge 0$              | Subject to $A^T y \le c$, $y \ge 0$           |
| Primal variables ($x$) are non-negative.        | Dual variables ($y$) are non-negative.          |
| Primal constraints are of the form $\ge$.       | Dual variables correspond to primal constraints. |
| Primal objective coefficients ($c$) are costs.  | Dual objective coefficients ($b$) are costs.    |
| Dual variables ($y$) are non-negative.          | Primal variables correspond to dual constraints. |
| Dual constraints are of the form $\le$.         | Dual constraints correspond to primal variables. |
| Dual objective coefficients ($b$) are costs.    | Dual objective coefficients ($c$) are values.   |

**Example: Constructing the Dual**

Let's consider a primal problem:

**Primal Problem (P):**
**Minimize** $Z = 2x_1 + 3x_2$
**Subject to:**
$x_1 + x_2 \ge 4$
$2x_1 + x_2 \ge 5$
$x_1, x_2 \ge 0$

**Constructing the Dual:**

1.  **Objective Function:** Since the primal is a minimization problem, the dual will be a maximization problem. The objective function of the dual will be formed by the right-hand side constants of the primal constraints, multiplied by new dual variables. Let $y_1$ and $y_2$ be the dual variables corresponding to the two primal constraints.
    **Maximize** $W = 4y_1 + 5y_2$

2.  **Constraints:** The constraints of the dual are formed from the coefficients of the primal decision variables. The number of dual constraints will be equal to the number of primal decision variables (two in this case). The coefficients of the primal constraints will form the columns of the constraint matrix in the dual. The right-hand side of the dual constraints will be the coefficients of the primal objective function.
    *   For $x_1$ in the primal: $1y_1 + 2y_2 \le 2$ (coefficient of $x_1$ in primal objective is 2)
    *   For $x_2$ in the primal: $1y_1 + 1y_2 \le 3$ (coefficient of $x_2$ in primal objective is 3)

3.  **Non-negativity:** Since the primal constraints are $\ge$, the dual variables will be non-negative.
    $y_1, y_2 \ge 0$

**Dual Problem (D):**
**Maximize** $W = 4y_1 + 5y_2$
**Subject to:**
$y_1 + 2y_2 \le 2$
$y_1 + y_2 \le 3$
$y_1, y_2 \ge 0$

**Important Point:** The roles of rows and columns are swapped between the primal and dual problems. The number of decision variables in the primal equals the number of constraints in the dual, and vice-versa.

**Reference:** Xin-She Yang, "Optimization Techniques and Applications with Examples," Chapter 4 (Linear Programming), covers duality and its construction. Also, Hadley G., "Linear Programming," Chapter 10, provides in-depth treatment.

---

### 2. Properties of Duality

The relationship between the primal and dual problems is governed by several key theorems that form the foundation of duality theory.

#### 2.1 Weak Duality Theorem

**Statement:** For any feasible solution $x$ of the primal problem and any feasible solution $y$ of the dual problem, the objective function value of the primal is greater than or equal to the objective function value of the dual.

$Z = c^T x \ge b^T y = W$

**Implication:** The optimal value of the maximization problem (dual) is always less than or equal to the optimal value of the minimization problem (primal). This means that the dual problem provides a lower bound for the primal problem.

**Proof Sketch (for the example above):**
Let $x = (x_1, x_2)$ be a feasible solution to the primal and $y = (y_1, y_2)$ be a feasible solution to the dual.

From primal constraints:
$x_1 + x_2 \ge 4$
$2x_1 + x_2 \ge 5$

From dual constraints:
$y_1 + 2y_2 \le 2$
$y_1 + y_2 \le 3$

Multiply the first primal constraint by $y_1$ and the second by $y_2$ (since $y_1, y_2 \ge 0$):
$y_1(x_1 + x_2) \ge 4y_1$
$y_2(2x_1 + x_2) \ge 5y_2$

Summing these:
$y_1x_1 + y_1x_2 + 2y_2x_1 + y_2x_2 \ge 4y_1 + 5y_2$
$x_1(y_1 + 2y_2) + x_2(y_1 + y_2) \ge 4y_1 + 5y_2$

Now, using the dual constraints ($y_1 + 2y_2 \le 2$ and $y_1 + y_2 \le 3$):
$x_1(y_1 + 2y_2) \le 2x_1$
$x_2(y_1 + y_2) \le 3x_2$

Therefore:
$2x_1 + 3x_2 \ge x_1(y_1 + 2y_2) + x_2(y_1 + y_2) \ge 4y_1 + 5y_2$
$Z \ge W$

This confirms the weak duality theorem.

#### 2.2 Strong Duality Theorem

**Statement:** If either the primal or the dual problem has an optimal feasible solution, then the other problem also has an optimal feasible solution, and their optimal objective function values are equal.

$Z_{optimal} = W_{optimal}$

**Conditions for Strong Duality:** This theorem holds when the feasible regions of both primal and dual problems are non-empty and bounded. For LP problems in general, if an optimal solution exists for one, it exists for the other, and their optimal values are equal.

#### 2.3 Complementary Slackness Theorem

**Statement:** For a pair of primal and dual optimal solutions $(x^*, y^*)$, a variable in the primal ($x_i^*$) is zero if the corresponding constraint in the dual is not tight (i.e., $A^T y^* \ne c$). Conversely, a constraint in the primal is tight (i.e., $A x^* = b$) if the corresponding variable in the dual ($y_i^*$) is non-zero.

Mathematically, for the primal $c^T x$, $Ax \ge b$, $x \ge 0$ and its dual $b^T y$, $A^T y \le c$, $y \ge 0$:
If $x^*$ and $y^*$ are optimal solutions, then:
1.  $x_i^* (c_i - \sum_{j=1}^m a_{ji} y_j^*) = 0$ for all $i = 1, \dots, n$ (Primal variable $x_i^*$ is zero if the dual constraint corresponding to $x_i^*$ is not binding).
2.  $y_j^* (b_j - \sum_{i=1}^n a_{ij} x_i^*) = 0$ for all $j = 1, \dots, m$ (Dual variable $y_j^*$ is zero if the primal constraint corresponding to $y_j^*$ is not binding).

**Significance:** Complementary slackness provides a condition to check if a given pair of primal and dual solutions are optimal. If both satisfy the primal and dual feasibility conditions and complementary slackness, then they are optimal.

**Reference:** Arora J., "Introduction to Optimization Design," Chapter 3, discusses fundamental theorems of LP including duality. Chong & Hak, "An introduction to optimization," Chapter 5, also provides a thorough treatment of duality theorems.

---

### 3. Applications of Duality

Duality is not just a theoretical concept; it has significant practical implications in optimization.

#### 3.1 Economic Interpretation (Shadow Prices)

In resource allocation problems, dual variables have a clear economic interpretation as **shadow prices**.

*   **Primal Problem:** Represents a production or resource allocation plan (e.g., maximizing profit by producing goods $x_1, x_2, \dots$). The objective function coefficients ($c$) are the profits per unit of goods. The constraints represent limited resources (e.g., labor, materials).
*   **Dual Problem:** Represents the valuation of the resources. The dual variables ($y_j$) can be interpreted as the marginal value (or shadow price) of the $j$-th resource.

**Interpretation of Dual Variables (Shadow Prices):**
If the primal problem is:
**Minimize** $Z = c^T x$ (e.g., minimize cost of production)
**Subject to:** $Ax \ge b$, $x \ge 0$
The dual is:
**Maximize** $W = b^T y$
**Subject to:** $A^T y \le c$, $y \ge 0$

Here, $y_j$ represents the "worth" of one unit of the $j$-th resource. If the optimal dual solution $y^*$ is such that $y_j^* > 0$, it means that the $j$-th primal constraint is binding (tight) at the optimum, and increasing the availability of this resource (increasing $b_j$) will lead to a corresponding increase in the optimal objective function value of the primal problem by $y_j^*$.

**Example:** If a company minimizes the cost of producing chemicals and faces a constraint on the availability of ingredient A, the dual variable associated with that constraint (the shadow price of ingredient A) would represent how much the total cost would decrease if one more unit of ingredient A were available.

**Learning Outcome Alignment:** CO1 (Formulate an optimization problem), CO4 (Apply various optimization techniques). Understanding duality's economic interpretation aids in formulating realistic optimization models and interpreting their results.

#### 3.2 Sensitivity Analysis

Duality is crucial for sensitivity analysis, which studies how the optimal solution changes when the problem parameters (objective function coefficients or constraint right-hand sides) are perturbed.

*   **Changes in $c$ (Objective Function Coefficients):** Changes in $c$ directly affect the dual constraints ($A^T y \le c$). The dual solution's movement within its feasible region can indicate how the primal solution's composition changes.
*   **Changes in $b$ (Constraint Right-Hand Sides):** Changes in $b$ directly affect the dual objective function ($W = b^T y$) and the primal constraints ($Ax \ge b$). The dual variables ($y^*$) directly provide the rate of change of the primal optimal objective function value with respect to changes in $b$. Specifically, if $x^*$ and $y^*$ are optimal, and $b_j$ changes by a small amount $\Delta b_j$, the new optimal primal objective function value will be approximately $Z_{optimal} + y_j^* \Delta b_j$, as long as $y_j^*$ remains the optimal dual variable for the modified constraint.

#### 3.3 Algorithm Development

The dual problem can sometimes be easier to solve than the primal problem, especially when the number of primal constraints is large. Algorithms like the **Dual Simplex Method** directly operate on the dual problem, leveraging its structure.

**Reference:** S.S. Rao, "Engineering Optimization, Theory and Practice," Chapter 7, provides detailed explanations of sensitivity analysis using duality.

---

### 4. Duality in Different Forms of LP

The construction of the dual depends on the form of the primal problem. We've seen the standard form (minimization, $\ge$ constraints). Let's briefly touch upon others.

#### 4.1 Maximization Primal

**Primal Problem (Max):**
**Maximize** $Z = c^T x$
**Subject to:**
$Ax \le b$
$x \ge 0$

**Dual Problem (Min):**
**Minimize** $W = b^T y$
**Subject to:**
$A^T y \ge c$
$y \ge 0$

#### 4.2 Mixed Constraints

When primal problems involve equality constraints or unrestricted variables, the duality rules are extended:

*   **Equality Constraint ($a_i^T x = b_i$):** Corresponds to an unrestricted dual variable ($y_i$ can be positive, negative, or zero).
*   **Non-negativity Constraint ($x_i \ge 0$):** Corresponds to a constraint on the dual variable. For the standard primal ($Ax \ge b, x \ge 0$), the dual constraints are $A^T y \le c$. If $c_i$ were unrestricted in the primal, the corresponding dual constraint would be $A^T y = c$.

**Reference:** Hadley G., "Linear Programming," Chapter 10, covers duals of various forms.

---

### 5. Duality and Optimization Problem Classification

Duality is intrinsically linked to how we classify optimization problems.

*   **Linear Programming (LP):** The most direct application of duality. The existence of a well-defined dual for every LP problem is a cornerstone of LP theory.
*   **Non-Linear Programming (NLP):** Duality concepts extend to NLP, though in a more complex manner. Concepts like **Lagrangian duality** and **Kuhn-Tucker (KKT) conditions** are extensions of duality principles. The Lagrangian function bridges the primal and dual for constrained optimization.

    **Lagrangian for $f(x)$ subject to $g_i(x) \le 0, i=1..m$:**
    $L(x, \lambda) = f(x) + \sum_{i=1}^m \lambda_i g_i(x)$, where $\lambda_i \ge 0$.

    The **dual function** is $D(\lambda) = \inf_x L(x, \lambda)$.
    The **dual problem** is to maximize $D(\lambda)$ subject to $\lambda \ge 0$.

    **Learning Outcome Alignment:** CO4 (Apply various optimization techniques). Understanding duality in NLP provides a theoretical basis for many constrained optimization algorithms.

*   **Convex Optimization:** For convex optimization problems, duality theory is particularly strong. The gap between the primal and dual objectives is zero at the optimum (strong duality often holds). This property is exploited in many algorithms.

**Reference:** Chong & Hak, "An introduction to optimization," Chapter 5, discusses Lagrangian duality and its applications in convex optimization.

---

### 6. Practice Questions and Answers

**Question 1:**
Formulate the dual of the following linear programming problem:
**Minimize** $Z = 5x_1 - 2x_2 + 3x_3$
**Subject to:**
$2x_1 + x_2 - x_3 \ge 7$
$x_1 - 4x_2 + 5x_3 = 2$
$x_1, x_3 \ge 0$, $x_2$ is unrestricted.

**Answer 1:**
First, we need to convert the problem to a standard form (or handle the equality constraint and unrestricted variable appropriately).

Let $x_2 = x_2^+ - x_2^-$ where $x_2^+, x_2^- \ge 0$.

**Primal Problem (modified):**
**Minimize** $Z = 5x_1 - 2(x_2^+ - x_2^-) + 3x_3$
**Minimize** $Z = 5x_1 - 2x_2^+ + 2x_2^- + 3x_3$
**Subject to:**
$2x_1 + (x_2^+ - x_2^-) - x_3 \ge 7$
$x_1 - 4(x_2^+ - x_2^-) + 5x_3 = 2$
$x_1, x_2^+, x_2^-, x_3 \ge 0$

Now, let's consider the original problem with the equality constraint and unrestricted variable directly.

*   Primal Minimize $Z = c^T x$
*   Constraint 1: $a_1^T x \ge b_1$ (corresponds to dual variable $y_1 \ge 0$)
*   Constraint 2: $a_2^T x = b_2$ (corresponds to dual variable $y_2$ unrestricted)
*   $x_1 \ge 0$ (corresponds to dual constraint $c_1^T y \le c_1$)
*   $x_2$ is unrestricted (corresponds to dual constraint $c_2^T y = c_2$)
*   $x_3 \ge 0$ (corresponds to dual constraint $c_3^T y \le c_3$)

Let $x = [x_1, x_2, x_3]^T$, $c = [5, -2, 3]^T$, $b = [7, 2]^T$.
$A = \begin{pmatrix} 2 & 1 & -1 \\ 1 & -4 & 5 \end{pmatrix}$

**Dual Problem:**
**Maximize** $W = 7y_1 + 2y_2$
**Subject to:**
$2y_1 + y_2 \le 5$  (from $x_1 \ge 0$, $c_1 = 5$)
$y_1 - 4y_2 = -2$ (from $x_2$ unrestricted, $c_2 = -2$)
$-y_1 + 5y_2 \le 3$ (from $x_3 \ge 0$, $c_3 = 3$)
$y_1 \ge 0$, $y_2$ is unrestricted.

**Question 2:**
If the optimal solution to a minimization LP problem is $Z^* = 100$, and there are three constraints. The optimal dual variables are $y_1^* = 5$, $y_2^* = -3$, and $y_3^* = 0$. What can you infer about the primal constraints?

**Answer 2:**
The primal problem is minimization, and the dual problem is maximization. The optimal dual variables indicate the sensitivity of the primal optimal value to changes in the RHS of the primal constraints.

*   $y_1^* = 5 > 0$: This implies that the first primal constraint is binding (tight) at the optimum. Increasing the RHS of the first primal constraint by one unit would increase the optimal primal objective value by approximately 5.
*   $y_2^* = -3 < 0$: This implies that the second primal constraint is binding (tight) at the optimum. Increasing the RHS of the second primal constraint by one unit would *decrease* the optimal primal objective value by approximately 3. This scenario is common when the primal problem is minimization, and we are considering increasing a resource that is "over-supplied" or not essential.
*   $y_3^* = 0$: This implies that the third primal constraint is non-binding (non-tight) at the optimum. Changing the RHS of the third primal constraint will not affect the optimal primal objective value, as long as the change is small enough not to make the constraint binding.

**Learning Outcome Alignment:** CO1, CO4. This question tests the understanding of duality's economic interpretation and sensitivity analysis.

---

### 7. Important Points to Remember

*   **Symmetry:** If problem B is the dual of problem A, then problem A is the dual of problem B.
*   **Weak Duality:** $Z_{primal} \ge Z_{dual}$ for all feasible primal and dual solutions.
*   **Strong Duality:** If an optimal solution exists for either the primal or dual, then an optimal solution exists for the other, and their optimal objective values are equal.
*   **Complementary Slackness:** A powerful tool for checking optimality and understanding the relationship between primal and dual solutions.
*   **Shadow Prices:** Dual variables have economic interpretations, representing the marginal value of resources or the sensitivity of the objective function to changes in constraints.
*   **Duality extends beyond LP:** Concepts like Lagrangian duality are fundamental in constrained non-linear optimization.

---

### 8. Connection to Course Outcomes

*   **CO1: Formulate an optimization problem:** Understanding duality helps in formulating meaningful problems by considering the "dual" perspective of resource valuation.
*   **CO2: Apply the Simplex method:** Duality is closely related to the Simplex method. The dual Simplex method solves the dual problem. Concepts from duality are used in interpreting Simplex tableaus.
*   **CO3: Solve unconstrained optimization problems:** While duality is primarily for constrained problems, the underlying mathematical principles and the use of derivatives in deriving dual functions have connections to unconstrained optimization techniques.
*   **CO4: Apply various optimization techniques to solve constrained optimization problems:** Duality is a core technique for understanding and solving constrained LPs and provides a basis for understanding dual methods in constrained NLPs.
*   **CO5: Use metaheuristic algorithms:** Although not directly a metaheuristic topic, understanding the structure and properties of optimization problems through duality can inform the design and application of metaheuristic algorithms. For instance, insights into sensitivity might guide parameter tuning.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 9. Further Reading and References

*   **S.S. Rao, "Engineering Optimization, Theory and Practice" (4th Ed., 2012):** Chapter 7, "Linear Programming," provides a comprehensive treatment of duality, its theorems, and applications.
*   **G. Hadley, "Linear Programming" (2002):** Chapter 10, "The Dual Linear Programming Problem," offers a classic and detailed exposition of duality.
*   **Xin-She Yang, "Optimization Techniques and Applications with Examples" (2018):** Chapter 4, "Linear Programming," likely covers duality from a modern perspective with examples.
*   **J. Arora, "Introduction to Optimization Design" (2004):** Chapter 3, "Linear Programming," will likely introduce duality theorems and their significance in design optimization.
*   **Chong E. K. P., Hak S. H., "An introduction to optimization" (4th Ed., 2013):** Chapter 5, "Duality," provides a rigorous treatment of duality, including Lagrangian duality.

---