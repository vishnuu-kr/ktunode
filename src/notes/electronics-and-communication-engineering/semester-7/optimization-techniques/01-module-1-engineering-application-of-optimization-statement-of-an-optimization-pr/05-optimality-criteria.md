---
title: "Optimality criteria"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 1: Engineering application of Optimization – Statement of an Optimization problem–Classification"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff557"
status: "completed"
scrapedAt: "2026-05-23T18:08:35.599Z"
---
# Module 1: Engineering Application of Optimization - Statement of an Optimization Problem - Classification

## Topic: Optimality Criteria

**Learning Outcomes:**

*   Understand the concept of optimality in the context of optimization problems.
*   Identify and apply different optimality criteria for various types of optimization problems.
*   Relate optimality criteria to the first and second-order conditions for optimality.

**Course Outcomes Alignment:**

*   **CO1:** Formulate an optimization problem to optimize an engineering application using the principles of basic calculus. (K2) - Understanding optimality criteria is fundamental to formulating and solving such problems.
*   **CO3:** Solve the unconstrained optimization problems using gradient-based methods. (K3) - Optimality criteria are the basis for stopping rules and identifying potential solutions in gradient-based methods.
*   **CO4:** Apply the various optimization techniques to solve a constrained optimization problem. (K3) - Optimality criteria for constrained problems (like KKT conditions) are crucial for applying these techniques.

---

### 1. Introduction to Optimality

In any optimization problem, the ultimate goal is to find a solution that is "best" in some sense. This "best" solution is referred to as the **optimal solution**. The criteria used to define and identify this optimal solution are known as **optimality criteria**.

**Key Concept:** An optimal solution is a feasible solution that yields the best possible objective function value (minimum or maximum).

**S.S. Rao (4th Ed.)**: Emphasizes that identifying the optimal solution is the core task of optimization. The nature of the problem (unconstrained vs. constrained, differentiable vs. non-differentiable) dictates the specific optimality criteria that can be used.

---

### 2. Optimality Criteria for Unconstrained Optimization Problems

For unconstrained optimization problems, where we aim to find the minimum or maximum of a function $f(\mathbf{x})$ without any restrictions on the decision variables $\mathbf{x} \in \mathbb{R}^n$, the optimality criteria are derived from the fundamental principles of calculus.

#### 2.1 First-Order Necessary Conditions

These conditions are based on the idea that at an optimal point (a local minimum or maximum), the rate of change of the function in any direction must be zero.

**Key Concept:** For a differentiable function $f(\mathbf{x})$, a necessary condition for a point $\mathbf{x}^*$ to be a local extremum (minimum or maximum) is that the gradient of $f$ at $\mathbf{x}^*$ must be zero.

*   **Definition:** The **gradient** of a function $f(\mathbf{x})$ is a vector of its partial derivatives with respect to each variable:
    $\nabla f(\mathbf{x}) = \left[ \frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}, \dots, \frac{\partial f}{\partial x_n} \right]^T$

*   **First-Order Necessary Condition:**
    If $f(\mathbf{x})$ is differentiable and $\mathbf{x}^*$ is a local extremum of $f$, then:
    $\nabla f(\mathbf{x}^*) = \mathbf{0}$

    This means all partial derivatives must be zero at the optimal point:
    $\frac{\partial f}{\partial x_i}(\mathbf{x}^*) = 0$ for $i = 1, 2, \dots, n$.

**Example:** Minimize $f(x_1, x_2) = x_1^2 + x_2^2$.
*   Calculate the gradient:
    $\nabla f(x_1, x_2) = \left[ \frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2} \right]^T = [2x_1, 2x_2]^T$
*   Set the gradient to zero:
    $2x_1 = 0 \implies x_1 = 0$
    $2x_2 = 0 \implies x_2 = 0$
*   The potential optimal point is $(0, 0)$.

**Important Point:** The first-order condition only tells us that a point is a **critical point**. It could be a local minimum, a local maximum, or a saddle point.

#### 2.2 Second-Order Sufficient Conditions

To distinguish between minima, maxima, and saddle points, we use the second derivatives of the function.

**Key Concept:** The behavior of the function around a critical point is determined by the curvature, which is captured by the Hessian matrix.

*   **Definition:** The **Hessian matrix** of a function $f(\mathbf{x})$, denoted by $H(\mathbf{x})$ or $\nabla^2 f(\mathbf{x})$, is a square matrix of second partial derivatives:
    $H(\mathbf{x}) = \begin{bmatrix}
    \frac{\partial^2 f}{\partial x_1^2} & \frac{\partial^2 f}{\partial x_1 \partial x_2} & \cdots & \frac{\partial^2 f}{\partial x_1 \partial x_n} \\
    \frac{\partial^2 f}{\partial x_2 \partial x_1} & \frac{\partial^2 f}{\partial x_2^2} & \cdots & \frac{\partial^2 f}{\partial x_2 \partial x_n} \\
    \vdots & \vdots & \ddots & \vdots \\
    \frac{\partial^2 f}{\partial x_n \partial x_1} & \frac{\partial^2 f}{\partial x_n \partial x_2} & \cdots & \frac{\partial^2 f}{\partial x_n^2}
    \end{bmatrix}$
    For a sufficiently smooth function, the Hessian matrix is symmetric (i.e., $\frac{\partial^2 f}{\partial x_i \partial x_j} = \frac{\partial^2 f}{\partial x_j \partial x_i}$).

*   **Second-Order Necessary Conditions for a Local Minimum:**
    If $f(\mathbf{x})$ is twice differentiable and $\mathbf{x}^*$ is a local minimum, then:
    1.  $\nabla f(\mathbf{x}^*) = \mathbf{0}$
    2.  The Hessian matrix $H(\mathbf{x}^*)$ is positive semi-definite. This means that for any non-zero vector $\mathbf{d}$, $\mathbf{d}^T H(\mathbf{x}^*) \mathbf{d} \ge 0$.

*   **Second-Order Sufficient Conditions for a Local Minimum:**
    If $f(\mathbf{x})$ is twice differentiable and at a point $\mathbf{x}^*$:
    1.  $\nabla f(\mathbf{x}^*) = \mathbf{0}$
    2.  The Hessian matrix $H(\mathbf{x}^*)$ is positive definite. This means that for any non-zero vector $\mathbf{d}$, $\mathbf{d}^T H(\mathbf{x}^*) \mathbf{d} > 0$.
    Then, $\mathbf{x}^*$ is a strict local minimum of $f$.

*   **Second-Order Necessary Conditions for a Local Maximum:**
    If $f(\mathbf{x})$ is twice differentiable and $\mathbf{x}^*$ is a local maximum, then:
    1.  $\nabla f(\mathbf{x}^*) = \mathbf{0}$
    2.  The Hessian matrix $H(\mathbf{x}^*)$ is negative semi-definite. This means that for any non-zero vector $\mathbf{d}$, $\mathbf{d}^T H(\mathbf{x}^*) \mathbf{d} \le 0$.

*   **Second-Order Sufficient Conditions for a Local Maximum:**
    If $f(\mathbf{x})$ is twice differentiable and at a point $\mathbf{x}^*$:
    1.  $\nabla f(\mathbf{x}^*) = \mathbf{0}$
    2.  The Hessian matrix $H(\mathbf{x}^*)$ is negative definite. This means that for any non-zero vector $\mathbf{d}$, $\mathbf{d}^T H(\mathbf{x}^*) \mathbf{d} < 0$.
    Then, $\mathbf{x}^*$ is a strict local maximum of $f$.

**How to check for positive/negative definiteness of the Hessian:**
This can be done by examining the **eigenvalues** of the Hessian matrix or by checking the **leading principal minors** of the Hessian matrix.
*   A matrix is **positive definite** if all its eigenvalues are strictly positive.
*   A matrix is **positive semi-definite** if all its eigenvalues are non-negative.
*   A matrix is **negative definite** if all its eigenvalues are strictly negative.
*   A matrix is **negative semi-definite** if all its eigenvalues are non-positive.
*   If the Hessian has both positive and negative eigenvalues, it is **indefinite**, indicating a saddle point.

**Example (Continuing from previous):** Minimize $f(x_1, x_2) = x_1^2 + x_2^2$.
We found the critical point at $(0, 0)$.
*   Calculate the Hessian matrix:
    $\frac{\partial^2 f}{\partial x_1^2} = 2$
    $\frac{\partial^2 f}{\partial x_2^2} = 2$
    $\frac{\partial^2 f}{\partial x_1 \partial x_2} = 0$
    $\frac{\partial^2 f}{\partial x_2 \partial x_1} = 0$
    $H(x_1, x_2) = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$
*   Evaluate the Hessian at the critical point $(0, 0)$:
    $H(0, 0) = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$
*   Check for definiteness:
    The eigenvalues of a diagonal matrix are its diagonal entries. The eigenvalues are $2$ and $2$. Both are strictly positive.
    Therefore, $H(0, 0)$ is positive definite.
*   **Conclusion:** Since $\nabla f(0,0) = \mathbf{0}$ and $H(0,0)$ is positive definite, $(0,0)$ is a strict local minimum. Since this is the only critical point and the function is convex, it is also the global minimum.

**Deb K (2000)**: Discusses the importance of convexity in optimization. For convex functions, any local minimum is also a global minimum. The Hessian matrix being positive semi-definite for all $\mathbf{x}$ indicates a convex function.

**Xin-She Yang (2018)**: Connects these calculus-based criteria to algorithms. For instance, gradient descent methods rely on the first-order condition, and their convergence to a minimum is guaranteed when the Hessian is positive definite.

---

### 3. Optimality Criteria for Constrained Optimization Problems

When optimization problems involve constraints (equality or inequality), the optimality criteria become more complex. These criteria help us find solutions that are not only optimal locally but also satisfy all the imposed constraints.

**Key Concept:** For constrained optimization, the optimal solution must satisfy certain conditions that involve both the objective function and the constraints. These are often derived using the method of Lagrange multipliers or its extensions.

#### 3.1 Equality Constraints

Consider the problem:
Minimize $f(\mathbf{x})$
Subject to $h_i(\mathbf{x}) = 0$, for $i = 1, \dots, m$

We introduce the **Lagrangian function**, $L(\mathbf{x}, \boldsymbol{\lambda})$, which combines the objective function and the constraints using Lagrange multipliers $\lambda_i$:
$L(\mathbf{x}, \boldsymbol{\lambda}) = f(\mathbf{x}) + \sum_{i=1}^m \lambda_i h_i(\mathbf{x})$

**First-Order Necessary Conditions (Lagrange Multipliers):**
If $\mathbf{x}^*$ is a local minimum and $\nabla h_i(\mathbf{x}^*)$ are linearly independent for all $i$, then there exists a vector of Lagrange multipliers $\boldsymbol{\lambda}^* = [\lambda_1^*, \dots, \lambda_m^*]^T$ such that:

1.  $\nabla_{\mathbf{x}} L(\mathbf{x}^*, \boldsymbol{\lambda}^*) = \nabla f(\mathbf{x}^*) + \sum_{i=1}^m \lambda_i^* \nabla h_i(\mathbf{x}^*) = \mathbf{0}$ (Stationarity)
2.  $h_i(\mathbf{x}^*) = 0$ for $i = 1, \dots, m$ (Primal feasibility)

These conditions essentially state that at the optimum, the gradient of the objective function is a linear combination of the gradients of the active constraints.

**Example:** Minimize $f(x_1, x_2) = x_1^2 + x_2^2$ subject to $h_1(x_1, x_2) = x_1 + x_2 - 1 = 0$.
*   Lagrangian: $L(x_1, x_2, \lambda_1) = x_1^2 + x_2^2 + \lambda_1(x_1 + x_2 - 1)$
*   First-order conditions:
    $\frac{\partial L}{\partial x_1} = 2x_1 + \lambda_1 = 0 \implies 2x_1 = -\lambda_1$
    $\frac{\partial L}{\partial x_2} = 2x_2 + \lambda_1 = 0 \implies 2x_2 = -\lambda_1$
    $\frac{\partial L}{\partial \lambda_1} = x_1 + x_2 - 1 = 0$
*   From the first two equations, $2x_1 = 2x_2 \implies x_1 = x_2$.
*   Substitute into the constraint: $x_1 + x_1 - 1 = 0 \implies 2x_1 = 1 \implies x_1 = 1/2$.
*   Therefore, $x_2 = 1/2$.
*   The potential optimal point is $(1/2, 1/2)$.
*   We can find $\lambda_1$: $2(1/2) + \lambda_1 = 0 \implies 1 + \lambda_1 = 0 \implies \lambda_1 = -1$.

**Arora J (2004)**: Provides a thorough treatment of Lagrange multipliers and their application in structural optimization, where constraints are common.

#### 3.2 Inequality Constraints (Karush-Kuhn-Tucker - KKT Conditions)

Consider the problem:
Minimize $f(\mathbf{x})$
Subject to $g_j(\mathbf{x}) \le 0$, for $j = 1, \dots, p$
            $h_i(\mathbf{x}) = 0$, for $i = 1, \dots, m$

The KKT conditions generalize the Lagrange multiplier conditions to include inequality constraints. They are first-order necessary conditions for optimality.

**Key Concept:** The KKT conditions involve the gradient of the objective function, the gradients of the active constraints, and a set of complementary slackness conditions.

**The Lagrangian function** is extended to include inequality constraints:
$L(\mathbf{x}, \boldsymbol{\mu}, \boldsymbol{\lambda}) = f(\mathbf{x}) + \sum_{j=1}^p \mu_j g_j(\mathbf{x}) + \sum_{i=1}^m \lambda_i h_i(\mathbf{x})$
where $\mu_j \ge 0$ are the Lagrange multipliers for the inequality constraints.

**The Karush-Kuhn-Tucker (KKT) Conditions:**
If $\mathbf{x}^*$ is a local minimum of the above problem and satisfies certain constraint qualifications (e.g., linear independence of gradients of active constraints), then there exist multipliers $\boldsymbol{\mu}^* = [\mu_1^*, \dots, \mu_p^*]^T$ and $\boldsymbol{\lambda}^* = [\lambda_1^*, \dots, \lambda_m^*]^T$ such that:

1.  **Stationarity:** $\nabla_{\mathbf{x}} L(\mathbf{x}^*, \boldsymbol{\mu}^*, \boldsymbol{\lambda}^*) = \nabla f(\mathbf{x}^*) + \sum_{j=1}^p \mu_j^* \nabla g_j(\mathbf{x}^*) + \sum_{i=1}^m \lambda_i^* \nabla h_i(\mathbf{x}^*) = \mathbf{0}$
2.  **Primal Feasibility:**
    $g_j(\mathbf{x}^*) \le 0$ for $j = 1, \dots, p$
    $h_i(\mathbf{x}^*) = 0$ for $i = 1, \dots, m$
3.  **Dual Feasibility:** $\mu_j^* \ge 0$ for $j = 1, \dots, p$
4.  **Complementary Slackness:** $\mu_j^* g_j(\mathbf{x}^*) = 0$ for $j = 1, \dots, p$

**Interpretation of KKT Conditions:**

*   **Stationarity:** Similar to equality constraints, the gradient of the objective is balanced by the gradients of the active constraints.
*   **Primal Feasibility:** The solution must satisfy all constraints.
*   **Dual Feasibility:** Multipliers for inequality constraints must be non-negative. This is because if a constraint $g_j(\mathbf{x}) \le 0$ is active at the minimum (i.e., $g_j(\mathbf{x}^*) = 0$), and we want to minimize $f$, moving in the direction of $\nabla g_j(\mathbf{x}^*)$ should either increase or keep the objective function value the same, hence $\mu_j^* \ge 0$.
*   **Complementary Slackness:** For each inequality constraint $g_j(\mathbf{x}) \le 0$:
    *   If the constraint is *not active* at the optimum ($g_j(\mathbf{x}^*) < 0$), then its corresponding multiplier $\mu_j^*$ must be zero. This means the constraint has no influence on the optimality condition.
    *   If the constraint *is active* at the optimum ($g_j(\mathbf{x}^*) = 0$), then its multiplier $\mu_j^*$ can be positive or zero.

**Sufficient Conditions (KKT):**
If the problem is convex and the KKT conditions are satisfied at a point $\mathbf{x}^*$, then $\mathbf{x}^*$ is a global minimum. For non-convex problems, KKT conditions only guarantee local optimality (assuming constraint qualifications hold).

**Example:** Minimize $f(x_1, x_2) = x_1^2 + x_2^2$ subject to $g_1(x_1, x_2) = -x_1 - x_2 + 1 \le 0$.
This is equivalent to $x_1 + x_2 \ge 1$.

*   Lagrangian: $L(x_1, x_2, \mu_1) = x_1^2 + x_2^2 + \mu_1(-x_1 - x_2 + 1)$
*   KKT Conditions:
    1.  **Stationarity:**
        $\frac{\partial L}{\partial x_1} = 2x_1 - \mu_1 = 0 \implies 2x_1 = \mu_1$
        $\frac{\partial L}{\partial x_2} = 2x_2 - \mu_1 = 0 \implies 2x_2 = \mu_1$
    2.  **Primal Feasibility:**
        $-x_1 - x_2 + 1 \le 0 \implies x_1 + x_2 \ge 1$
    3.  **Dual Feasibility:** $\mu_1 \ge 0$
    4.  **Complementary Slackness:** $\mu_1(-x_1 - x_2 + 1) = 0$

*   **Case 1: Constraint is not active** ($g_1 < 0 \implies x_1 + x_2 > 1$)
    From complementary slackness, $\mu_1 = 0$.
    From stationarity: $2x_1 = 0 \implies x_1 = 0$, and $2x_2 = 0 \implies x_2 = 0$.
    Check primal feasibility: $0 + 0 > 1$ is false. So, this case leads to no feasible solution.

*   **Case 2: Constraint is active** ($g_1 = 0 \implies x_1 + x_2 = 1$)
    From stationarity: $2x_1 = \mu_1$ and $2x_2 = \mu_1$.
    This implies $2x_1 = 2x_2 \implies x_1 = x_2$.
    Substitute into the active constraint: $x_1 + x_1 = 1 \implies 2x_1 = 1 \implies x_1 = 1/2$.
    So, $x_2 = 1/2$.
    The point is $(1/2, 1/2)$.
    From stationarity, $\mu_1 = 2x_1 = 2(1/2) = 1$.
    Check dual feasibility: $\mu_1 = 1 \ge 0$. This is satisfied.
    Check primal feasibility: $1/2 + 1/2 = 1$, which satisfies $x_1+x_2 \ge 1$ and $g_1 = -1/2 - 1/2 + 1 = 0 \le 0$.
*   **Conclusion:** The point $(1/2, 1/2)$ satisfies all KKT conditions. For this convex problem, it is the global minimum.

**Chong & Hak (Fourth Edition, 2013)**: Offers a comprehensive mathematical treatment of KKT conditions, including various constraint qualifications required for their validity.

**Hardley G (2002)**: Discusses optimality conditions in the context of Linear Programming, where the KKT conditions simplify. For a LP in standard form, optimality is reached at a vertex of the feasible region.

---

### 4. Optimality Criteria for Specific Optimization Techniques

Different optimization techniques employ specific ways to identify or approach optimality.

#### 4.1 For Gradient-Based Methods (Unconstrained)

*   **Concept:** These methods iteratively move towards the minimum by taking steps in the direction of the negative gradient.
*   **Optimality Criterion (Stopping Rule):** The iteration stops when:
    *   The magnitude of the gradient is sufficiently small (close to zero): $||\nabla f(\mathbf{x}_k)|| < \epsilon_1$. This directly relates to the first-order necessary condition.
    *   The change in the objective function value between iterations is small: $|f(\mathbf{x}_k) - f(\mathbf{x}_{k-1})| < \epsilon_2$.
    *   The step size taken is very small: $||\mathbf{x}_k - \mathbf{x}_{k-1}|| < \epsilon_3$.

**S.S. Rao (4th Ed.)**: Details these stopping criteria as practical ways to terminate algorithms when a point "close enough" to satisfying the optimality conditions is found.

#### 4.2 For Linear Programming (Simplex Method)

*   **Concept:** The Simplex method moves from one basic feasible solution (vertex of the feasible region) to an adjacent one, improving the objective function value at each step.
*   **Optimality Criterion:** For a maximization problem, a basic feasible solution is optimal if all the coefficients in the objective function row of the Simplex tableau (reduced costs) are non-negative. For a minimization problem, they must be non-positive.
    *   **Intuition:** If you can still improve the objective function by introducing a non-basic variable into the basis, the current solution is not optimal.

**Hardley G (2002)**: Thoroughly explains the Simplex tableau and how the objective function coefficients signal optimality.

#### 4.3 For Metaheuristic Algorithms (e.g., Genetic Algorithms, Particle Swarm Optimization)

*   **Concept:** These algorithms are generally inspired by natural processes and do not rely on gradient information. They explore the search space to find good solutions, which are often near-optimal.
*   **Optimality Criterion (Stopping Rule):** Since these methods are often stochastic and may not guarantee finding the exact global optimum, stopping rules are typically based on:
    *   **Maximum number of iterations/generations:** Stop after a predefined number of steps.
    *   **Lack of improvement:** Stop if the best solution found has not improved for a certain number of iterations.
    *   **Target objective value reached:** Stop if a satisfactory objective function value is achieved.

**Mitsuo Gen & Runwei Cheng (2002)** and **Xin-She Yang (2018)**: Cover various metaheuristic algorithms and their practical stopping criteria, emphasizing the trade-off between solution quality and computational time.

---

### 5. Global Optimality

While the first and second-order conditions typically identify **local optima**, in many engineering applications, we are interested in the **global optimum** – the absolute best solution over the entire feasible region.

**Key Concepts:**

*   **Convexity:** If an optimization problem is convex (objective function is convex, and the feasible region is a convex set), then any local minimum is also a global minimum. This is a powerful property that simplifies finding the global optimum.
*   **Non-convexity:** For non-convex problems, local optima can exist that are worse than the global optimum. Finding the global optimum can be very challenging. Specialized algorithms (e.g., branch and bound, multi-start methods, global optimization techniques) are often required.

**S.S. Rao (4th Ed.)**: Dedicates significant attention to identifying convex problems and explains why convexity guarantees that local optima are global optima.

**Chong & Hak (Fourth Edition, 2013)**: Provides a rigorous mathematical framework for distinguishing between convex and non-convex optimization problems.

---

### Summary of Key Points

*   **Unconstrained Optimization:**
    *   **First-order necessary condition:** $\nabla f(\mathbf{x}) = \mathbf{0}$. Identifies critical points.
    *   **Second-order sufficient conditions:** $\nabla f(\mathbf{x}) = \mathbf{0}$ and $H(\mathbf{x})$ is positive definite (for min) or negative definite (for max). Confirms local optima.
    *   Hessian's eigenvalues or leading principal minors determine definiteness.
*   **Constrained Optimization:**
    *   **Equality Constraints:** Lagrange Multiplier conditions ($\nabla f + \sum \lambda_i \nabla h_i = \mathbf{0}$, $h_i=0$).
    *   **Inequality Constraints:** KKT conditions ($\nabla f + \sum \mu_j \nabla g_j + \sum \lambda_i \nabla h_i = \mathbf{0}$, $g_j \le 0, h_i = 0, \mu_j \ge 0, \mu_j g_j = 0$).
*   **Algorithm Stopping Rules:** Relate to how close the current solution is to satisfying the optimality conditions (e.g., small gradient, small change in function value).
*   **Global Optimality:** Guaranteed for convex problems; challenging for non-convex problems.

---

### Practice Questions

**Question 1:**
Consider the function $f(x_1, x_2) = x_1^3 - 3x_1 + x_2^2 - 4x_2$. Find the critical points and determine if they are local minima, local maxima, or saddle points using the second-order sufficient conditions.

**Answer 1:**
1.  **First-Order Conditions:**
    $\nabla f = [\frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}]^T$
    $\frac{\partial f}{\partial x_1} = 3x_1^2 - 3$
    $\frac{\partial f}{\partial x_2} = 2x_2 - 4$
    Set gradients to zero:
    $3x_1^2 - 3 = 0 \implies x_1^2 = 1 \implies x_1 = 1$ or $x_1 = -1$.
    $2x_2 - 4 = 0 \implies x_2 = 2$.
    Critical points are $(1, 2)$ and $(-1, 2)$.

2.  **Second-Order Conditions (Hessian Matrix):**
    $\frac{\partial^2 f}{\partial x_1^2} = 6x_1$
    $\frac{\partial^2 f}{\partial x_2^2} = 2$
    $\frac{\partial^2 f}{\partial x_1 \partial x_2} = 0$
    $H(x_1, x_2) = \begin{bmatrix} 6x_1 & 0 \\ 0 & 2 \end{bmatrix}$

3.  **Evaluate Hessian at Critical Points:**
    *   At $(1, 2)$:
        $H(1, 2) = \begin{bmatrix} 6(1) & 0 \\ 0 & 2 \end{bmatrix} = \begin{bmatrix} 6 & 0 \\ 0 & 2 \end{bmatrix}$
        Eigenvalues are 6 and 2 (both positive). $H(1, 2)$ is positive definite.
        Therefore, $(1, 2)$ is a local minimum.

    *   At $(-1, 2)$:
        $H(-1, 2) = \begin{bmatrix} 6(-1) & 0 \\ 0 & 2 \end{bmatrix} = \begin{bmatrix} -6 & 0 \\ 0 & 2 \end{bmatrix}$
        Eigenvalues are -6 and 2 (one negative, one positive). $H(-1, 2)$ is indefinite.
        Therefore, $(-1, 2)$ is a saddle point.

**Question 2:**
State the KKT conditions for the following problem:
Minimize $f(x_1, x_2) = 2x_1 + 3x_2$
Subject to:
$x_1 + x_2 \le 5$
$x_1 - x_2 \ge 1$
$x_1, x_2 \ge 0$

**Answer 2:**
First, rewrite the constraints in the standard $\le$ form:
$g_1(x_1, x_2) = x_1 + x_2 - 5 \le 0$
$g_2(x_1, x_2) = -x_1 + x_2 + 1 \le 0$ (from $x_1 - x_2 \ge 1$)
$g_3(x_1, x_2) = -x_1 \le 0$
$g_4(x_1, x_2) = -x_2 \le 0$

The Lagrangian is:
$L(x_1, x_2, \mu_1, \mu_2, \mu_3, \mu_4) = 2x_1 + 3x_2 + \mu_1(x_1 + x_2 - 5) + \mu_2(-x_1 + x_2 + 1) + \mu_3(-x_1) + \mu_4(-x_2)$

The KKT conditions are:
1.  **Stationarity:**
    $\frac{\partial L}{\partial x_1} = 2 + \mu_1 - \mu_2 - \mu_3 = 0$
    $\frac{\partial L}{\partial x_2} = 3 + \mu_1 + \mu_2 - \mu_4 = 0$
2.  **Primal Feasibility:**
    $x_1 + x_2 - 5 \le 0$
    $-x_1 + x_2 + 1 \le 0$
    $-x_1 \le 0$
    $-x_2 \le 0$
3.  **Dual Feasibility:**
    $\mu_1 \ge 0, \mu_2 \ge 0, \mu_3 \ge 0, \mu_4 \ge 0$
4.  **Complementary Slackness:**
    $\mu_1(x_1 + x_2 - 5) = 0$
    $\mu_2(-x_1 + x_2 + 1) = 0$
    $\mu_3(-x_1) = 0$
    $\mu_4(-x_2) = 0$

---

### Important Points to Remember

*   Optimality criteria are the foundation for solving optimization problems.
*   For unconstrained problems, the first and second derivatives are key.
*   For constrained problems, the KKT conditions are fundamental.
*   The definiteness of the Hessian matrix determines the nature of critical points in unconstrained optimization.
*   The concept of active constraints is crucial for understanding KKT conditions.
*   Convexity simplifies the search for global optima.
*   Different algorithms have different ways of approaching or identifying optimality.

---
This concludes the study notes for Optimality Criteria in Module 1.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
