---
title: "Lagrangian function– Inequality constrained techniques-KKT conditions-constrained steepest descent method"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 3: Optimization algorithms for solving constrained optimization problems– direct methods"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff567"
status: "completed"
scrapedAt: "2026-05-23T18:08:47.009Z"
---
# OPTIMIZATION TECHNIQUES: Study Notes

## Module 3: Optimization algorithms for solving constrained optimization problems – Direct Methods

### Topic: Lagrangian Function, Inequality Constrained Techniques, KKT Conditions, Constrained Steepest Descent Method

---

### Introduction to Constrained Optimization

In many real-world engineering problems, we need to optimize an objective function while satisfying certain constraints. These constraints can be in the form of equalities or inequalities. Module 3 focuses on direct methods for solving such constrained optimization problems.

**Key Concepts:**

*   **Constrained Optimization Problem:** A problem where we aim to maximize or minimize an objective function $f(x)$ subject to a set of constraints, which can be:
    *   **Equality Constraints:** $g_i(x) = 0$, for $i = 1, \dots, m$
    *   **Inequality Constraints:** $h_j(x) \le 0$, for $j = 1, \dots, p$
    where $x$ is the vector of decision variables.

*   **Feasible Region:** The set of all points $x$ that satisfy all the given constraints. The optimal solution must lie within the feasible region.

*   **Direct Methods:** Methods that directly search for the optimal solution within the feasible region, often by transforming the constrained problem into a sequence of unconstrained problems or by systematically moving along the boundary of the feasible region.

---

### 1. The Lagrangian Function

The Lagrangian function is a fundamental concept for handling equality constraints in optimization. It combines the objective function and the equality constraints into a single function.

**Key Concepts & Definitions:**

*   **Lagrangian Multipliers (or Lagrange Multipliers):** Variables introduced to represent the constraints in the Lagrangian function. They often have a physical interpretation related to the sensitivity of the optimal objective function value to changes in the constraint.

*   **Lagrangian Function:** For a problem with equality constraints:
    Minimize $f(x)$
    Subject to $g_i(x) = 0$, for $i = 1, \dots, m$

    The Lagrangian function $L(x, \lambda)$ is defined as:
    $$L(x, \lambda) = f(x) + \sum_{i=1}^{m} \lambda_i g_i(x)$$
    where $\lambda_i$ are the Lagrange multipliers.

**Connection to Textbooks/References:**

*   **S.S. Rao (2012):** Rao dedicates a significant portion of his book to the theory of Lagrange multipliers and their application in solving equality constrained optimization problems. He explains how finding the stationary points of the Lagrangian function leads to the solution of the constrained problem. (Chapter 7)
*   **Chong & Hak (2013):** This reference provides a rigorous mathematical foundation for the Lagrangian function and its role in the Karush-Kuhn-Tucker (KKT) conditions.

**Example:**

Consider the problem:
Minimize $f(x_1, x_2) = x_1^2 + x_2^2$
Subject to $g_1(x_1, x_2) = x_1 + x_2 - 1 = 0$

The Lagrangian function is:
$L(x_1, x_2, \lambda_1) = x_1^2 + x_2^2 + \lambda_1 (x_1 + x_2 - 1)$

To find the stationary points, we set the gradient of $L$ with respect to $x_1, x_2, \lambda_1$ to zero:
$\frac{\partial L}{\partial x_1} = 2x_1 + \lambda_1 = 0 \implies x_1 = -\frac{\lambda_1}{2}$
$\frac{\partial L}{\partial x_2} = 2x_2 + \lambda_1 = 0 \implies x_2 = -\frac{\lambda_1}{2}$
$\frac{\partial L}{\partial \lambda_1} = x_1 + x_2 - 1 = 0$

Substituting $x_1$ and $x_2$ into the third equation:
$-\frac{\lambda_1}{2} - \frac{\lambda_1}{2} - 1 = 0$
$-\lambda_1 - 1 = 0 \implies \lambda_1 = -1$

Now, we find $x_1$ and $x_2$:
$x_1 = -\frac{-1}{2} = \frac{1}{2}$
$x_2 = -\frac{-1}{2} = \frac{1}{2}$

The optimal solution is $(x_1, x_2) = (1/2, 1/2)$.

---

### 2. Inequality Constrained Techniques

Handling inequality constraints requires a more sophisticated approach than just the Lagrangian function for equality constraints. The core idea is to identify which inequality constraints are "active" (i.e., satisfied with equality) at the optimal solution.

**Key Concepts & Definitions:**

*   **Active Constraints:** An inequality constraint $h_j(x) \le 0$ is active at a point $x^*$ if $h_j(x^*) = 0$.
*   **Inactive Constraints:** An inequality constraint $h_j(x) \le 0$ is inactive at a point $x^*$ if $h_j(x^*) < 0$.
*   **Slack Variables:** For an inequality constraint $h_j(x) \le 0$, we can introduce a slack variable $s_j \ge 0$ to convert it into an equality constraint: $h_j(x) + s_j^2 = 0$ or $h_j(x) + s_j = 0$ with $s_j \ge 0$. This conversion, however, increases the dimensionality of the problem.

**Techniques for Inequality Constraints:**

*   **Transformation to Equality Constraints:** As mentioned, slack variables can be used, but this is not always the most efficient direct method.
*   **Penalty Functions:** Convert the constrained problem into a sequence of unconstrained problems by adding penalty terms to the objective function that become large as constraint violations occur.
    *   **Exterior Penalty Function:** For $h_j(x) \le 0$, the penalty term could be like $P(x) = \sum_{j=1}^{p} \rho_j \max(0, h_j(x))^2$, where $\rho_j$ are positive penalty parameters. The modified objective is $f(x) + P(x)$.
    *   **Interior Penalty Function (Barrier Functions):** For $h_j(x) < 0$ (strict inequality), the penalty term could be like $P(x) = -\sum_{j=1}^{p} \mu_j \log(-h_j(x))$, where $\mu_j > 0$ are barrier parameters. The modified objective is $f(x) + P(x)$. These methods require staying within the feasible region.
*   **Sequential Quadratic Programming (SQP):** Solves a sequence of quadratic programming subproblems to approximate the original nonlinear problem. This is a powerful direct method.
*   **Augmented Lagrangian Methods:** Combine Lagrangian multipliers with penalty terms.

**Connection to Textbooks/References:**

*   **S.S. Rao (2012):** Rao extensively discusses penalty function methods and their variations for handling inequality constraints. He also provides an introduction to SQP methods. (Chapter 8, Chapter 13)
*   **Deb (2000):** Deb's book offers practical insights into formulating and solving optimization problems, including those with inequality constraints, with a focus on engineering design.
*   **Arora (2004):** Arora's text covers various penalty and barrier function techniques in detail, explaining their convergence properties.

**Example (Penalty Function):**

Minimize $f(x) = x^2$
Subject to $g_1(x) = x - 2 \le 0$ (or $x \le 2$)

Using an exterior penalty function with $\rho = 100$:
Modified objective: $F(x) = x^2 + 100 \max(0, x - 2)^2$

If $x \le 2$, $F(x) = x^2$. The minimum is at $x=0$.
If $x > 2$, $F(x) = x^2 + 100(x - 2)^2 = x^2 + 100(x^2 - 4x + 4) = 101x^2 - 400x + 400$.
To find the minimum of this quadratic, we set its derivative to zero:
$202x - 400 = 0 \implies x = \frac{400}{202} \approx 1.98$.
This value is not greater than 2, so the minimum of the penalty function occurs at $x=0$, which is within the feasible region.

---

### 3. Karush-Kuhn-Tucker (KKT) Conditions

The KKT conditions are a set of necessary (and sometimes sufficient) conditions for a solution to be optimal in a constrained optimization problem involving both equality and inequality constraints. They generalize the conditions derived from the Lagrangian function for equality constraints.

**Key Concepts & Definitions:**

*   **Problem Formulation:**
    Minimize $f(x)$
    Subject to:
    $g_i(x) = 0$, for $i = 1, \dots, m$
    $h_j(x) \le 0$, for $j = 1, \dots, p$

*   **Lagrangian Function with Inequality Constraints:**
    $$L(x, \lambda, \mu) = f(x) + \sum_{i=1}^{m} \lambda_i g_i(x) + \sum_{j=1}^{p} \mu_j h_j(x)$$
    where $\lambda_i$ are multipliers for equality constraints and $\mu_j$ are multipliers for inequality constraints.

*   **KKT Conditions:** For a point $x^*$ to be a local minimum, there must exist multipliers $\lambda_i^*$ and $\mu_j^*$ such that the following conditions hold:

    1.  **Stationarity:** The gradient of the Lagrangian with respect to $x$ is zero at $(x^*, \lambda^*, \mu^*)$:
        $$\nabla_x L(x^*, \lambda^*, \mu^*) = \nabla f(x^*) + \sum_{i=1}^{m} \lambda_i^* \nabla g_i(x^*) + \sum_{j=1}^{p} \mu_j^* \nabla h_j(x^*) = 0$$

    2.  **Primal Feasibility:** The original constraints are satisfied:
        $$g_i(x^*) = 0, \quad i = 1, \dots, m$$
        $$h_j(x^*) \le 0, \quad j = 1, \dots, p$$

    3.  **Dual Feasibility:** The multipliers for inequality constraints are non-negative:
        $$\mu_j^* \ge 0, \quad j = 1, \dots, p$$

    4.  **Complementary Slackness:** For each inequality constraint, either the multiplier is zero or the constraint is active (or both):
        $$\mu_j^* h_j(x^*) = 0, \quad j = 1, \dots, p$$

**Sufficient Conditions:**
If the problem is convex (i.e., $f(x)$ is convex, $g_i(x)$ are linear, and $-h_j(x)$ are convex), then the KKT conditions are also sufficient for a global minimum.

**Connection to Textbooks/References:**

*   **S.S. Rao (2012):** Rao provides a detailed explanation of the KKT conditions, their derivation, and their application in verifying optimality. He emphasizes their importance in both theoretical analysis and algorithm development. (Chapter 7)
*   **Chong & Hak (2013):** This reference offers a rigorous mathematical treatment of KKT conditions, including their sufficiency under convexity assumptions.
*   **Xin-She Yang (2018):** Yang might cover KKT conditions in the context of various optimization techniques, highlighting their role in finding optimal solutions for nonlinear programming problems.

**Example:**

Consider the problem:
Minimize $f(x_1, x_2) = -x_1 - x_2$
Subject to:
$g_1(x_1, x_2) = x_1 + x_2 - 1 = 0$
$h_1(x_1, x_2) = x_1 \le 0$
$h_2(x_1, x_2) = x_2 \le 0$

Lagrangian: $L(x_1, x_2, \lambda_1, \mu_1, \mu_2) = -x_1 - x_2 + \lambda_1(x_1 + x_2 - 1) + \mu_1(x_1) + \mu_2(x_2)$

KKT Conditions:
1.  **Stationarity:**
    $\frac{\partial L}{\partial x_1} = -1 + \lambda_1 + \mu_1 = 0$
    $\frac{\partial L}{\partial x_2} = -1 + \lambda_1 + \mu_2 = 0$

2.  **Primal Feasibility:**
    $x_1 + x_2 - 1 = 0$
    $x_1 \le 0$
    $x_2 \le 0$

3.  **Dual Feasibility:**
    $\mu_1 \ge 0$
    $\mu_2 \ge 0$

4.  **Complementary Slackness:**
    $\mu_1 x_1 = 0$
    $\mu_2 x_2 = 0$

From primal feasibility ($x_1 \le 0, x_2 \le 0$ and $x_1+x_2=1$), the only possibility is $x_1 < 0$ and $x_2 < 0$. This implies $x_1+x_2 < 0$, which contradicts $x_1+x_2=1$.

Let's reconsider the primal feasibility. If $x_1 \le 0$ and $x_2 \le 0$, then $x_1+x_2 \le 0$. This contradicts $x_1+x_2=1$. This means there is no feasible solution to this problem.

Let's change the example to have a feasible solution.
Minimize $f(x_1, x_2) = x_1^2 + x_2^2$
Subject to:
$g_1(x_1, x_2) = x_1 + x_2 - 1 = 0$
$h_1(x_1, x_2) = x_1 \ge 0$ (or $-x_1 \le 0$)
$h_2(x_1, x_2) = x_2 \ge 0$ (or $-x_2 \le 0$)

Lagrangian: $L(x_1, x_2, \lambda_1, \mu_1, \mu_2) = x_1^2 + x_2^2 + \lambda_1(x_1 + x_2 - 1) + \mu_1(-x_1) + \mu_2(-x_2)$

KKT Conditions:
1.  **Stationarity:**
    $\frac{\partial L}{\partial x_1} = 2x_1 + \lambda_1 - \mu_1 = 0$
    $\frac{\partial L}{\partial x_2} = 2x_2 + \lambda_1 - \mu_2 = 0$

2.  **Primal Feasibility:**
    $x_1 + x_2 - 1 = 0$
    $-x_1 \le 0 \implies x_1 \ge 0$
    $-x_2 \le 0 \implies x_2 \ge 0$

3.  **Dual Feasibility:**
    $\mu_1 \ge 0$
    $\mu_2 \ge 0$

4.  **Complementary Slackness:**
    $\mu_1 x_1 = 0$
    $\mu_2 x_2 = 0$

From primal feasibility: $x_1 \ge 0, x_2 \ge 0, x_1+x_2=1$. This implies that $x_1$ and $x_2$ must be between 0 and 1.

Consider different cases based on complementary slackness:

**Case 1: $x_1 > 0$ and $x_2 > 0$.**
This implies $\mu_1 = 0$ and $\mu_2 = 0$.
From stationarity:
$2x_1 + \lambda_1 = 0 \implies x_1 = -\lambda_1/2$
$2x_2 + \lambda_1 = 0 \implies x_2 = -\lambda_1/2$
So, $x_1 = x_2$.
From primal feasibility: $x_1 + x_2 = 1 \implies 2x_1 = 1 \implies x_1 = 1/2$.
Then $x_2 = 1/2$.
Check conditions: $x_1=1/2 \ge 0$, $x_2=1/2 \ge 0$. This is feasible.
$2(1/2) + \lambda_1 = 0 \implies 1 + \lambda_1 = 0 \implies \lambda_1 = -1$.
$\mu_1 = 0 \ge 0$, $\mu_2 = 0 \ge 0$.
All conditions are met. Solution: $(x_1, x_2) = (1/2, 1/2)$ with $\lambda_1 = -1, \mu_1 = 0, \mu_2 = 0$.

**Case 2: $x_1 = 0$ and $x_2 > 0$.**
This implies $\mu_1 \ge 0$ and $\mu_2 = 0$.
From primal feasibility: $0 + x_2 - 1 = 0 \implies x_2 = 1$.
From stationarity:
$2(0) + \lambda_1 - \mu_1 = 0 \implies \lambda_1 - \mu_1 = 0 \implies \lambda_1 = \mu_1$
$2(1) + \lambda_1 - 0 = 0 \implies 2 + \lambda_1 = 0 \implies \lambda_1 = -2$.
Since $\lambda_1 = \mu_1$, then $\mu_1 = -2$.
This violates dual feasibility ($\mu_1 \ge 0$). So, this case is not a valid KKT point.

**Case 3: $x_1 > 0$ and $x_2 = 0$.**
This implies $\mu_1 = 0$ and $\mu_2 \ge 0$.
From primal feasibility: $x_1 + 0 - 1 = 0 \implies x_1 = 1$.
From stationarity:
$2(1) + \lambda_1 - 0 = 0 \implies 2 + \lambda_1 = 0 \implies \lambda_1 = -2$.
$2(0) + \lambda_1 - \mu_2 = 0 \implies \lambda_1 - \mu_2 = 0 \implies \lambda_1 = \mu_2$.
Since $\lambda_1 = -2$, then $\mu_2 = -2$.
This violates dual feasibility ($\mu_2 \ge 0$). So, this case is not a valid KKT point.

**Case 4: $x_1 = 0$ and $x_2 = 0$.**
This is not possible due to $x_1 + x_2 - 1 = 0$.

Therefore, the only KKT point is $(1/2, 1/2)$, which is the optimal solution.

---

### 4. Constrained Steepest Descent Method (Gradient Projection Method)

The Constrained Steepest Descent method is an iterative algorithm for solving constrained optimization problems. It is a direct method that attempts to move in the direction of the negative gradient while staying within the feasible region. It's often referred to as the Gradient Projection Method.

**Key Concepts & Definitions:**

*   **Goal:** To find a point $x^*$ in the feasible region that minimizes $f(x)$.
*   **Iterative Approach:** Starts with an initial feasible point and iteratively moves to a better point.
*   **Descent Direction:** The direction in which the objective function decreases. For unconstrained problems, this is $-\nabla f(x)$.
*   **Projection:** When moving in the descent direction leads out of the feasible region, the method projects the candidate point onto the feasible region.

**Algorithm Steps (Simplified for equality and simple box constraints):**

Let the problem be:
Minimize $f(x)$
Subject to $g_i(x) = 0$ and $l_j \le x_j \le u_j$.

1.  **Initialization:** Choose an initial feasible point $x^0$ and a step size parameter $\alpha > 0$. Set $k=0$.

2.  **Calculate Gradient:** Compute the gradient of the objective function: $\nabla f(x^k)$.

3.  **Determine Search Direction:**
    *   **Unconstrained Descent:** Consider moving in the direction $d^k = -\nabla f(x^k)$.
    *   **Consider Constraints:** If moving in direction $d^k$ from $x^k$ violates any constraints, we need to adjust the direction.

4.  **Projection Step:** This is the crucial part.
    *   If $x^k + \alpha d^k$ is feasible with respect to all constraints (equality and box constraints), then $x^{k+1} = x^k + \alpha d^k$.
    *   If $x^k + \alpha d^k$ is infeasible, we need to project this point onto the feasible region. For problems with simple bounds (like $x_j \ge 0$), the projection is straightforward: $x_j = \max(0, x_j)$. For more complex constraints, projection can be computationally intensive.

    A common approach for inequality constraints of the form $h_j(x) \le 0$ is to first consider the gradient of the Lagrangian.

**Constrained Steepest Descent with Active Set:**

A more refined version is the **Gradient Projection Method (or Active Set Method)**. It identifies the set of "active" constraints at the current point and ensures the next step satisfies these constraints.

1.  Start with a feasible point $x^k$.
2.  Calculate $\nabla f(x^k)$.
3.  Determine the set of active constraints $A(x^k) = \{i \mid g_i(x^k) = 0\}$.
4.  Consider a projected gradient. If the problem has only equality constraints $g_i(x) = 0$, the projected gradient is:
    $$p_k = \nabla f(x^k) - \sum_{i \in A(x^k)} \lambda_i^* \nabla g_i(x^k)$$
    where $\lambda_i^*$ are chosen such that $p_k$ is orthogonal to the gradients of the active constraints.

**A Practical Approach (Using Lagrange Multipliers for Direction):**

For a problem with equality constraints $g_i(x)=0$, we can use the gradient of the Lagrangian. The stationary condition is $\nabla f(x) + \sum \lambda_i \nabla g_i(x) = 0$. This suggests a search direction related to the gradient and the constraint gradients.

The **Constrained Steepest Descent Method** often refers to methods that try to follow the boundary of the feasible region or project the unconstrained steepest descent direction onto the feasible region.

**Connection to Textbooks/References:**

*   **S.S. Rao (2012):** Rao discusses gradient projection methods and active set methods for handling constraints, often in the context of nonlinear programming. (Chapter 10, Chapter 11)
*   **Arora (2004):** Arora provides details on gradient projection techniques, especially for problems with box constraints.
*   **Chong & Hak (2013):** Their book might discuss these methods as practical implementations of the KKT conditions.

**Example (Gradient Projection with Box Constraints):**

Minimize $f(x_1, x_2) = x_1^2 + x_2^2$
Subject to $x_1 \ge 0, x_2 \ge 0$.

Initial point: $x^0 = (-1, -1)$ (infeasible).
Let's start with a feasible point: $x^0 = (1, 1)$.
$\nabla f(x) = [2x_1, 2x_2]^T$.
$\nabla f(x^0) = [2, 2]^T$.

**Iteration 1:**
$x^0 = (1, 1)$. Feasible.
$d^0 = -\nabla f(x^0) = [-2, -2]^T$.
Proposed next point: $x^{0, \text{prop}} = x^0 + \alpha d^0 = (1, 1) + \alpha(-2, -2) = (1-2\alpha, 1-2\alpha)$.
For the point to be feasible ($x_1 \ge 0, x_2 \ge 0$):
$1 - 2\alpha \ge 0 \implies 2\alpha \le 1 \implies \alpha \le 1/2$.
Let's choose $\alpha = 0.1$.
$x^1 = (1 - 0.2, 1 - 0.2) = (0.8, 0.8)$. This is feasible.

**Iteration 2:**
$x^1 = (0.8, 0.8)$.
$\nabla f(x^1) = [1.6, 1.6]^T$.
$d^1 = -\nabla f(x^1) = [-1.6, -1.6]^T$.
Proposed next point: $x^{1, \text{prop}} = x^1 + \alpha d^1 = (0.8, 0.8) + \alpha(-1.6, -1.6) = (0.8 - 1.6\alpha, 0.8 - 1.6\alpha)$.
For feasibility: $0.8 - 1.6\alpha \ge 0 \implies 1.6\alpha \le 0.8 \implies \alpha \le 0.5$.
Let's choose $\alpha = 0.1$.
$x^2 = (0.8 - 0.16, 0.8 - 0.16) = (0.64, 0.64)$.

The process continues, moving towards the origin $(0,0)$, which is the optimal solution.

**If we started with an infeasible point, say $x^0 = (-1, -1)$:**
The projection is onto the feasible region: $x^0_{\text{proj}} = (\max(0,-1), \max(0,-1)) = (0,0)$.
If we start at an infeasible point, the first step would be to project it onto the feasible region.

**Handling Equality Constraints:**
For equality constraints, the projection becomes more complex. It involves projecting onto the affine subspace defined by the equality constraints.

---

### Summary of Key Points and Learning Outcomes Alignment

*   **Lagrangian Function:** Essential for transforming equality-constrained problems into unconstrained ones by introducing multipliers. **(CO4)**
*   **Inequality Constraint Techniques:** Methods like penalty functions and barrier functions convert constrained problems into a sequence of unconstrained ones. **(CO4)**
*   **KKT Conditions:** Necessary (and often sufficient for convex problems) conditions for optimality in constrained nonlinear programming. They are crucial for verifying if a point is optimal and form the basis for many algorithms. **(CO4)**
*   **Constrained Steepest Descent (Gradient Projection):** A direct search method that iteratively moves towards the minimum while ensuring feasibility, often by projecting the search direction. **(CO4)**

This module directly addresses **CO4: Apply the various optimization techniques to solve a constrained optimization problem** by introducing the fundamental tools (Lagrangian, KKT) and a representative direct method (Constrained Steepest Descent/Gradient Projection).

---

### Practice Questions and Answers

**Question 1:**
State the four KKT conditions for the following minimization problem:
Minimize $f(x_1, x_2) = (x_1-1)^2 + (x_2-2)^2$
Subject to:
$g_1(x_1, x_2) = x_1 + x_2 - 3 = 0$
$h_1(x_1, x_2) = x_1 \le 1$
$h_2(x_1, x_2) = x_2 \le 2$

**Answer 1:**
The Lagrangian is $L(x_1, x_2, \lambda_1, \mu_1, \mu_2) = (x_1-1)^2 + (x_2-2)^2 + \lambda_1(x_1 + x_2 - 3) + \mu_1(x_1 - 1) + \mu_2(x_2 - 2)$.
The constraints are $g_1=0$, $h_1 \le 0$, $h_2 \le 0$. Note that the standard form for KKT usually has $h_j(x) \le 0$. So, our inequalities are $-x_1 \ge -1$ (or $x_1 \le 1$) and $-x_2 \ge -2$ (or $x_2 \le 2$).
Let's rewrite the constraints in the standard form:
$g_1(x_1, x_2) = x_1 + x_2 - 3 = 0$
$h_1(x_1, x_2) = x_1 - 1 \le 0$
$h_2(x_1, x_2) = x_2 - 2 \le 0$

Lagrangian: $L(x_1, x_2, \lambda_1, \mu_1, \mu_2) = (x_1-1)^2 + (x_2-2)^2 + \lambda_1(x_1 + x_2 - 3) + \mu_1(x_1 - 1) + \mu_2(x_2 - 2)$.

KKT Conditions:
1.  **Stationarity:**
    $\frac{\partial L}{\partial x_1} = 2(x_1-1) + \lambda_1 + \mu_1 = 0$
    $\frac{\partial L}{\partial x_2} = 2(x_2-2) + \lambda_1 + \mu_2 = 0$

2.  **Primal Feasibility:**
    $x_1 + x_2 - 3 = 0$
    $x_1 - 1 \le 0 \implies x_1 \le 1$
    $x_2 - 2 \le 0 \implies x_2 \le 2$

3.  **Dual Feasibility:**
    $\mu_1 \ge 0$
    $\mu_2 \ge 0$

4.  **Complementary Slackness:**
    $\mu_1 (x_1 - 1) = 0$
    $\mu_2 (x_2 - 2) = 0$

**Question 2:**
Consider the problem: Minimize $f(x) = x^2$ subject to $x \ge 2$. Formulate an exterior penalty function for this problem.

**Answer 2:**
The problem is Minimize $f(x) = x^2$ subject to $g(x) = 2 - x \le 0$.
An exterior penalty function adds a penalty for violating the constraint. A common form is $P(x) = \rho \cdot \max(0, g(x))^2$.
Here, $g(x) = 2 - x$.
So, the penalty term is $\rho \cdot \max(0, 2 - x)^2$.
The exterior penalty function is $F(x) = f(x) + P(x) = x^2 + \rho \cdot \max(0, 2 - x)^2$.
For this to be minimized by solving a sequence of unconstrained problems, $\rho$ should be increased in each iteration.

**Question 3:**
Explain the role of the Lagrange multipliers in the context of the KKT conditions.

**Answer 3:**
The Lagrange multipliers ($\lambda_i$ for equality constraints and $\mu_j$ for inequality constraints) represent the sensitivity of the optimal objective function value to infinitesimal changes in the corresponding constraints.
*   For equality constraints $g_i(x)=0$, $\lambda_i$ indicates how much the optimal objective function value would change if the constraint was relaxed slightly to $g_i(x) = \epsilon$.
*   For inequality constraints $h_j(x) \le 0$, $\mu_j$ indicates the sensitivity if the constraint was relaxed to $h_j(x) \le \epsilon$.
The dual feasibility condition ($\mu_j \ge 0$) ensures that relaxing an inequality constraint in the "correct" direction (allowing $h_j(x)$ to become less negative or more positive) can potentially improve the objective function if the constraint is active. The complementary slackness condition ($\mu_j h_j(x) = 0$) ensures that multipliers are only non-zero for active constraints.

---

### Important Points to Remember

*   **Lagrangian Function:** Combines objective and *equality* constraints. Used for optimality conditions (stationarity).
*   **KKT Conditions:** Generalization for both equality and *inequality* constraints. Crucial for optimality. Remember all four conditions: Stationarity, Primal Feasibility, Dual Feasibility, Complementary Slackness.
*   **Dual Feasibility ($\mu_j \ge 0$):** Specific to inequality constraints.
*   **Complementary Slackness ($\mu_j h_j(x) = 0$):** Links the multiplier value to whether the inequality constraint is active.
*   **Convexity:** If the problem is convex, KKT conditions are sufficient for a global minimum.
*   **Penalty/Barrier Methods:** Convert constrained to unconstrained problems, often by adding a term that penalizes constraint violations or "bars" entry into the infeasible region.
*   **Gradient Projection:** A direct method that tries to follow the negative gradient while staying within the feasible region, projecting when necessary.

---
This concludes the study notes for Module 3, Topic: Lagrangian function, Inequality constrained techniques, KKT conditions, Constrained steepest descent method. Remember to refer to the provided textbooks for deeper theoretical understanding and more examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
