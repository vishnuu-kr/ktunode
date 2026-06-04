---
title: "& KuhnTucker conditions"
subject: "OPTIMIZATION TECHNIQUES AND OPERATIONAL RESEARCH FOR CIVIL ENGINEERS"
module: "Module 2: Non"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810fa4"
status: "completed"
scrapedAt: "2026-05-20T18:50:10.690Z"
---
# Module 2: Non-Linear Programming - Karush-Kuhn-Tucker (KKT) Conditions

## 1. Introduction to Non-Linear Programming (NLP)

*   **Definition:** Non-linear programming deals with optimization problems where the objective function or at least one of the constraints is non-linear.
*   **Contrast with Linear Programming (LP):**
    *   LP: Objective function and constraints are linear. Solvable using Simplex method.
    *   NLP: Objective function or constraints are non-linear. More complex to solve, often requiring iterative methods.
*   **Applications in Civil Engineering:**
    *   **Structural Optimization:** Minimizing material cost or weight while satisfying strength and stiffness constraints (e.g., beam design, truss optimization).
    *   **Hydraulic Engineering:** Optimizing channel cross-sections, pipe networks for flow efficiency.
    *   **Transportation Engineering:** Traffic flow optimization, location problems.
    *   **Construction Management:** Resource allocation, scheduling.
*   **Challenges in NLP:**
    *   Local vs. Global Optima: Non-linear functions can have multiple local optima, making it difficult to guarantee finding the absolute best solution.
    *   Sensitivity to Initial Guesses: Many NLP algorithms are sensitive to the starting point.
    *   Complexity of Solution Methods: No single universally applicable method like Simplex for LP.

## 2. Types of Non-Linear Programming Problems

*   **Unconstrained Optimization:** Minimize or maximize $f(\mathbf{x})$ where $\mathbf{x} \in \mathbb{R}^n$.
    *   **Necessary Condition for Optimality:** $\nabla f(\mathbf{x}) = \mathbf{0}$ (gradient is zero).
    *   **Sufficient Condition for Optimality:** $\nabla f(\mathbf{x}) = \mathbf{0}$ and the Hessian matrix $H(\mathbf{x})$ is positive definite (for minimization).
*   **Constrained Optimization:** Minimize or maximize $f(\mathbf{x})$ subject to:
    *   Equality Constraints: $h_i(\mathbf{x}) = 0$ for $i = 1, \dots, m$.
    *   Inequality Constraints: $g_j(\mathbf{x}) \le 0$ for $j = 1, \dots, p$.

## 3. The Lagrangian Function

*   **Purpose:** To incorporate constraints into the objective function.
*   **Definition:** For a problem of minimizing $f(\mathbf{x})$ subject to $h_i(\mathbf{x}) = 0$ and $g_j(\mathbf{x}) \le 0$, the Lagrangian function is:
    $$ L(\mathbf{x}, \boldsymbol{\lambda}, \boldsymbol{\mu}) = f(\mathbf{x}) + \sum_{i=1}^{m} \lambda_i h_i(\mathbf{x}) + \sum_{j=1}^{p} \mu_j g_j(\mathbf{x}) $$
    where:
    *   $\mathbf{x} \in \mathbb{R}^n$ are the decision variables.
    *   $\boldsymbol{\lambda} = (\lambda_1, \dots, \lambda_m) \in \mathbb{R}^m$ are the Lagrange multipliers for equality constraints.
    *   $\boldsymbol{\mu} = (\mu_1, \dots, \mu_p) \in \mathbb{R}^p$ are the Lagrange multipliers for inequality constraints.

## 4. Karush-Kuhn-Tucker (KKT) Conditions

*   **Significance:** The KKT conditions are a set of necessary conditions for a solution to be optimal in a non-linear programming problem with inequality constraints. Under certain regularity conditions (constraint qualifications), they are also sufficient for optimality.
*   **Formulation:** For a minimization problem:
    Minimize $f(\mathbf{x})$
    Subject to:
    $h_i(\mathbf{x}) = 0, \quad i = 1, \dots, m$
    $g_j(\mathbf{x}) \le 0, \quad j = 1, \dots, p$

    The KKT conditions are:

    1.  **Stationarity:** The gradient of the Lagrangian with respect to $\mathbf{x}$ must be zero.
        $$ \nabla_{\mathbf{x}} L(\mathbf{x}, \boldsymbol{\lambda}, \boldsymbol{\mu}) = \nabla f(\mathbf{x}) + \sum_{i=1}^{m} \lambda_i \nabla h_i(\mathbf{x}) + \sum_{j=1}^{p} \mu_j \nabla g_j(\mathbf{x}) = \mathbf{0} $$

    2.  **Primal Feasibility:** The solution $\mathbf{x}$ must satisfy the original constraints.
        $$ h_i(\mathbf{x}) = 0, \quad i = 1, \dots, m $$
        $$ g_j(\mathbf{x}) \le 0, \quad j = 1, \dots, p $$

    3.  **Dual Feasibility:** The Lagrange multipliers for inequality constraints must be non-negative.
        $$ \mu_j \ge 0, \quad j = 1, \dots, p $$

    4.  **Complementary Slackness:** For each inequality constraint, either the multiplier is zero or the constraint is active (holds with equality).
        $$ \mu_j g_j(\mathbf{x}) = 0, \quad j = 1, \dots, p $$

*   **Interpretation of Lagrange Multipliers:**
    *   $\lambda_i$: Represents the rate of change of the optimal objective function value with respect to a small change in the $i$-th equality constraint.
    *   $\mu_j$: Represents the rate of change of the optimal objective function value with respect to a small change in the $j$-th inequality constraint. A positive $\mu_j$ indicates that the constraint is binding and tightening it would improve the objective function.

## 5. Constraint Qualifications (CQ)

*   **Purpose:** Constraint qualifications are conditions that ensure the KKT conditions are not only necessary but also sufficient for optimality. Without them, a point satisfying KKT might not be a true optimum.
*   **Common CQs:**
    *   **Linear Independence Constraint Qualification (LICQ):** The gradients of the active constraints at the optimal solution are linearly independent. (This is a strong CQ and often used in proofs).
    *   **Mangasarian-Fromovitz Constraint Qualification (MFCQ):** There exists a direction $\mathbf{d}$ such that $\nabla h_i(\mathbf{x}) \cdot \mathbf{d} = 0$ for all $i$ and $\nabla g_j(\mathbf{x}) \cdot \mathbf{d} < 0$ for all active $j$.
    *   **Non-Negativity Constraint Qualification (NNCQ):** For problems with only non-negativity constraints ($x_k \ge 0$), this is trivially satisfied.
*   **Importance for Civil Engineers:** While deep mathematical proofs of CQs might not be the focus, understanding that CQs are needed for KKT conditions to guarantee optimality is crucial. Many practical NLP problems encountered in civil engineering implicitly satisfy common CQs.

## 6. Solving KKT Conditions

*   The KKT conditions form a system of equations and inequalities.
*   **Strategy:**
    1.  Identify the objective function $f(\mathbf{x})$ and constraints $h_i(\mathbf{x}), g_j(\mathbf{x})$.
    2.  Formulate the Lagrangian function.
    3.  Calculate the gradients required for the stationarity condition.
    4.  Write down all KKT conditions (Stationarity, Primal Feasibility, Dual Feasibility, Complementary Slackness).
    5.  Solve the system of equations. This often involves considering different cases based on which inequality constraints are active (i.e., $g_j(\mathbf{x}) = 0$).
    6.  Verify that the solution satisfies all KKT conditions, especially dual feasibility and complementary slackness.
    7.  For minimization, check if the solution is a local minimum using second-order conditions (Hessian of the Lagrangian) if possible.

## 7. Examples

### Example 1: Minimizing a Quadratic Function with One Inequality Constraint

Minimize $f(x, y) = (x-2)^2 + (y-1)^2$
Subject to: $g(x, y) = x + y - 1 \le 0$

**Learning Outcomes Covered:** All learning outcomes, particularly understanding KKT conditions and applying them.

**Key Concepts:** Objective function, inequality constraint, Lagrangian, KKT conditions.

**Solution:**

1.  **Objective Function:** $f(x, y) = (x-2)^2 + (y-1)^2$
2.  **Constraint:** $g(x, y) = x + y - 1 \le 0$
3.  **Lagrangian:**
    $L(x, y, \mu) = (x-2)^2 + (y-1)^2 + \mu(x + y - 1)$

4.  **KKT Conditions:**
    *   **Stationarity:**
        $\frac{\partial L}{\partial x} = 2(x-2) + \mu = 0 \quad (1)$
        $\frac{\partial L}{\partial y} = 2(y-1) + \mu = 0 \quad (2)$
    *   **Primal Feasibility:**
        $x + y - 1 \le 0 \quad (3)$
    *   **Dual Feasibility:**
        $\mu \ge 0 \quad (4)$
    *   **Complementary Slackness:**
        $\mu (x + y - 1) = 0 \quad (5)$

5.  **Solving KKT Conditions:**

    *   **Case 1: Constraint is inactive ($g(x,y) < 0$, so $\mu = 0$)**
        From (1): $2(x-2) = 0 \Rightarrow x = 2$
        From (2): $2(y-1) = 0 \Rightarrow y = 1$
        Check Primal Feasibility (3): $x + y - 1 = 2 + 1 - 1 = 2$. Since $2 \not\le 0$, this case is not feasible.

    *   **Case 2: Constraint is active ($g(x,y) = 0$, so $x + y - 1 = 0$)**
        From (1): $2x - 4 + \mu = 0 \Rightarrow \mu = 4 - 2x$
        From (2): $2y - 2 + \mu = 0 \Rightarrow \mu = 2 - 2y$
        Equating $\mu$: $4 - 2x = 2 - 2y \Rightarrow 2y = 2x - 2 \Rightarrow y = x - 1$
        Substitute $y$ into the active constraint $x + y - 1 = 0$:
        $x + (x-1) - 1 = 0$
        $2x - 2 = 0 \Rightarrow x = 1$
        Now find $y$: $y = x - 1 = 1 - 1 = 0$
        Now find $\mu$: $\mu = 4 - 2x = 4 - 2(1) = 2$

    *   **Verification of KKT Conditions for (x=1, y=0, $\mu=2$):**
        *   Stationarity:
            (1) $2(1-2) + 2 = -2 + 2 = 0$ (Satisfied)
            (2) $2(0-1) + 2 = -2 + 2 = 0$ (Satisfied)
        *   Primal Feasibility: $x + y - 1 = 1 + 0 - 1 = 0 \le 0$ (Satisfied)
        *   Dual Feasibility: $\mu = 2 \ge 0$ (Satisfied)
        *   Complementary Slackness: $\mu (x + y - 1) = 2 (1 + 0 - 1) = 2(0) = 0$ (Satisfied)

    Since all KKT conditions are satisfied, $(x=1, y=0)$ is a candidate for the optimum. Geometrically, this is a circle centered at (2,1) and the constraint is a line $x+y=1$. The closest point on the line to the center is the solution.

**Answer:** The optimal solution is $(x, y) = (1, 0)$ with $\mu = 2$.

### Example 2: Minimizing with Equality and Inequality Constraints

Minimize $f(x, y) = x^2 + y^2$
Subject to:
$h(x, y) = x + y - 2 = 0$
$g(x, y) = x - y \le 0$

**Learning Outcomes Covered:** All learning outcomes, applying KKT to problems with both types of constraints.

**Key Concepts:** Equality constraint, inequality constraint, Lagrange multipliers ($\lambda, \mu$), KKT conditions.

**Solution:**

1.  **Objective Function:** $f(x, y) = x^2 + y^2$
2.  **Constraints:**
    $h(x, y) = x + y - 2 = 0$
    $g(x, y) = x - y \le 0$
3.  **Lagrangian:**
    $L(x, y, \lambda, \mu) = x^2 + y^2 + \lambda(x + y - 2) + \mu(x - y)$

4.  **KKT Conditions:**
    *   **Stationarity:**
        $\frac{\partial L}{\partial x} = 2x + \lambda + \mu = 0 \quad (1)$
        $\frac{\partial L}{\partial y} = 2y + \lambda - \mu = 0 \quad (2)$
    *   **Primal Feasibility:**
        $x + y - 2 = 0 \quad (3)$
        $x - y \le 0 \quad (4)$
    *   **Dual Feasibility:**
        $\mu \ge 0 \quad (5)$
    *   **Complementary Slackness:**
        $\mu (x - y) = 0 \quad (6)$

5.  **Solving KKT Conditions:**

    From (3): $y = 2 - x$.

    *   **Case 1: Constraint $g(x,y)$ is inactive ($x - y < 0$, so $\mu = 0$)**
        From (1): $2x + \lambda = 0 \Rightarrow \lambda = -2x$
        From (2): $2y + \lambda = 0 \Rightarrow \lambda = -2y$
        Equating $\lambda$: $-2x = -2y \Rightarrow x = y$
        Substitute $x=y$ into the equality constraint (3):
        $x + x - 2 = 0 \Rightarrow 2x = 2 \Rightarrow x = 1$
        So, $y = 1$.
        Check primal feasibility for $g(x,y)$: $x - y = 1 - 1 = 0$. This violates the assumption $x-y < 0$. So this case is not valid under strict inequality.

    *   **Case 2: Constraint $g(x,y)$ is active ($x - y = 0$, so $x = y$)**
        Substitute $x=y$ into the equality constraint (3):
        $x + x - 2 = 0 \Rightarrow 2x = 2 \Rightarrow x = 1$
        So, $y = 1$.
        Now use the stationarity conditions with $x=1, y=1$:
        From (1): $2(1) + \lambda + \mu = 0 \Rightarrow 2 + \lambda + \mu = 0$
        From (2): $2(1) + \lambda - \mu = 0 \Rightarrow 2 + \lambda - \mu = 0$
        We have a system of two equations for $\lambda$ and $\mu$:
        $\lambda + \mu = -2$
        $\lambda - \mu = -2$
        Adding the two equations: $2\lambda = -4 \Rightarrow \lambda = -2$
        Substituting $\lambda = -2$ into the first equation: $-2 + \mu = -2 \Rightarrow \mu = 0$.

    *   **Verification of KKT Conditions for (x=1, y=1, $\lambda=-2, \mu=0$):**
        *   Stationarity:
            (1) $2(1) + (-2) + 0 = 2 - 2 = 0$ (Satisfied)
            (2) $2(1) + (-2) - 0 = 2 - 2 = 0$ (Satisfied)
        *   Primal Feasibility:
            $x + y - 2 = 1 + 1 - 2 = 0$ (Satisfied)
            $x - y = 1 - 1 = 0 \le 0$ (Satisfied)
        *   Dual Feasibility: $\mu = 0 \ge 0$ (Satisfied)
        *   Complementary Slackness: $\mu (x - y) = 0 (1 - 1) = 0$ (Satisfied)

    All KKT conditions are satisfied. The objective function is $f(x,y) = x^2+y^2$, which is the squared distance from the origin. The constraints define a line $x+y=2$. The point $(1,1)$ lies on this line. The inequality $x \le y$ is also satisfied. The closest point on the line $x+y=2$ to the origin is $(1,1)$.

**Answer:** The optimal solution is $(x, y) = (1, 1)$ with $\lambda = -2$ and $\mu = 0$.

## 8. Practice Questions

**Question 1:**
Minimize $f(x) = x^2 - 4x + 10$ subject to $x - 3 \le 0$.

**Question 2:**
Minimize $f(x, y) = (x-1)^2 + (y-2)^2$ subject to:
$x + y = 1$
$x \ge 0$
$y \ge 0$

**Question 3 (Civil Engineering Context):**
A contractor wants to minimize the cost of a retaining wall foundation. The cost function is $C(w, d) = 10w^2 + 5d^2$, where $w$ is the width and $d$ is the depth of the foundation. The foundation must support a load that requires a minimum bearing capacity. The bearing capacity is roughly proportional to $w \cdot d$. The soil conditions impose a maximum depth of $d \le 2$ meters, and the available space requires the width to be at least $w \ge 1$ meter. Also, the construction process requires that the width and depth are related by $w + d \ge 3$.

Formulate this problem as a non-linear programming problem and write down the KKT conditions for optimality. (You do not need to solve it.)

## 9. Answers to Practice Questions

**Answer to Question 1:**

1.  **Objective Function:** $f(x) = x^2 - 4x + 10$
2.  **Constraint:** $g(x) = x - 3 \le 0$
3.  **Lagrangian:** $L(x, \mu) = x^2 - 4x + 10 + \mu(x - 3)$
4.  **KKT Conditions:**
    *   Stationarity: $\frac{\partial L}{\partial x} = 2x - 4 + \mu = 0$
    *   Primal Feasibility: $x - 3 \le 0$
    *   Dual Feasibility: $\mu \ge 0$
    *   Complementary Slackness: $\mu(x - 3) = 0$

    *   **Case 1: $x - 3 < 0 \implies \mu = 0$**
        $2x - 4 = 0 \implies x = 2$.
        Check primal feasibility: $2 - 3 = -1 \le 0$. This is satisfied.
        So, $x=2$ with $\mu=0$ is a candidate.

    *   **Case 2: $x - 3 = 0 \implies x = 3$**
        Substitute $x=3$ into stationarity: $2(3) - 4 + \mu = 0 \implies 6 - 4 + \mu = 0 \implies 2 + \mu = 0 \implies \mu = -2$.
        This violates dual feasibility ($\mu \ge 0$). So, this case is invalid.

    **Answer:** The optimal solution is $x = 2$, with $\mu = 0$. The minimum cost is $f(2) = 2^2 - 4(2) + 10 = 4 - 8 + 10 = 6$.

**Answer to Question 2:**

1.  **Objective Function:** $f(x, y) = (x-1)^2 + (y-2)^2$
2.  **Constraints:**
    $h(x, y) = x + y - 1 = 0$
    $g_1(x) = -x \le 0$ (or $x \ge 0$)
    $g_2(y) = -y \le 0$ (or $y \ge 0$)
3.  **Lagrangian:** $L(x, y, \lambda, \mu_1, \mu_2) = (x-1)^2 + (y-2)^2 + \lambda(x + y - 1) + \mu_1(-x) + \mu_2(-y)$
4.  **KKT Conditions:**
    *   Stationarity:
        $\frac{\partial L}{\partial x} = 2(x-1) - \lambda - \mu_1 = 0$
        $\frac{\partial L}{\partial y} = 2(y-2) + \lambda - \mu_2 = 0$
    *   Primal Feasibility:
        $x + y - 1 = 0$
        $-x \le 0$
        $-y \le 0$
    *   Dual Feasibility:
        $\mu_1 \ge 0$
        $\mu_2 \ge 0$
    *   Complementary Slackness:
        $\mu_1(-x) = 0$
        $\mu_2(-y) = 0$

    From $x+y-1=0$, we have $y = 1-x$.
    Consider the complementary slackness conditions:
    *   If $\mu_1 = 0$, then $-x$ can be anything, but we also need $-x \le 0$ for feasibility.
    *   If $\mu_1 \ne 0$, then $-x = 0 \implies x=0$.
    *   If $\mu_2 = 0$, then $-y$ can be anything, but we also need $-y \le 0$ for feasibility.
    *   If $\mu_2 \ne 0$, then $-y = 0 \implies y=0$.

    *   **Possibility 1: $\mu_1=0, \mu_2=0$**
        $2(x-1) - \lambda = 0 \implies \lambda = 2x-2$
        $2(y-2) + \lambda = 0 \implies \lambda = 4-2y$
        $2x-2 = 4-2y \implies 2y = 6-2x \implies y = 3-x$
        From primal feasibility $x+y=1$: $x + (3-x) = 1 \implies 3 = 1$, which is impossible.

    *   **Possibility 2: $\mu_1 \ne 0, \mu_2 = 0$**
        $x=0$. From $x+y=1$, $y=1$.
        From complementary slackness for $\mu_2$: $-y \ne 0$, so this is consistent with $\mu_2=0$.
        Stationarity for $x$: $2(0-1) - \lambda - \mu_1 = 0 \implies -2 - \lambda - \mu_1 = 0$
        Stationarity for $y$: $2(1-2) + \lambda - 0 = 0 \implies -2 + \lambda = 0 \implies \lambda = 2$.
        Substitute $\lambda=2$ into the first stationarity equation: $-2 - 2 - \mu_1 = 0 \implies -4 - \mu_1 = 0 \implies \mu_1 = -4$.
        This violates dual feasibility ($\mu_1 \ge 0$). Invalid.

    *   **Possibility 3: $\mu_1 = 0, \mu_2 \ne 0$**
        $y=0$. From $x+y=1$, $x=1$.
        From complementary slackness for $\mu_1$: $-x \ne 0$, so this is consistent with $\mu_1=0$.
        Stationarity for $x$: $2(1-1) - \lambda - 0 = 0 \implies 0 - \lambda = 0 \implies \lambda = 0$.
        Stationarity for $y$: $2(0-2) + \lambda - \mu_2 = 0 \implies -4 + 0 - \mu_2 = 0
