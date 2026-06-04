---
title: "Non-Linear Programming: Classical optimisation methods"
subject: "OPTIMIZATION TECHNIQUES AND OPERATIONAL RESEARCH FOR CIVIL ENGINEERS"
module: "Module 2: Non"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810fa1"
status: "completed"
scrapedAt: "2026-05-20T18:50:08.510Z"
---
# Module 2: Non-Linear Programming - Classical Optimization Methods

## 1. Introduction to Non-Linear Programming (NLP)

### 1.1 What is Non-Linear Programming?

*   **Definition:** Non-linear programming (NLP) deals with optimization problems where the objective function and/or the constraints are non-linear.
*   **Contrast with Linear Programming (LP):** In LP, both the objective function and all constraints are linear. NLP is a broader and often more complex category of optimization.
*   **Why NLP is important for Civil Engineers:**
    *   **Structural Design:** Optimizing member sizes for strength and stiffness, minimizing material cost while satisfying stress and deflection constraints.
    *   **Transportation Planning:** Route optimization considering non-linear travel time functions (e.g., congestion), facility location problems.
    *   **Water Resources Management:** Optimizing reservoir operations considering non-linear demand and supply relationships, system design for minimum cost with non-linear performance metrics.
    *   **Construction Management:** Resource allocation and scheduling with non-linear production rates or cost functions.
    *   **Environmental Engineering:** Pollution control strategies with non-linear decay rates or treatment efficiencies.

### 1.2 General Form of an NLP Problem

A general NLP problem can be stated as:

**Minimize (or Maximize)** $f(\mathbf{x})$

**Subject to:**
$g_i(\mathbf{x}) \le 0$, for $i = 1, 2, \ldots, m$ (Inequality constraints)
$h_j(\mathbf{x}) = 0$, for $j = 1, 2, \ldots, p$ (Equality constraints)
$\mathbf{x} = [x_1, x_2, \ldots, x_n]^T$ (Vector of decision variables)

*   $f(\mathbf{x})$: Objective function
*   $g_i(\mathbf{x})$: Inequality constraint functions
*   $h_j(\mathbf{x})$: Equality constraint functions

**Important Note:** If the problem is a maximization problem, we can convert it to a minimization problem by minimizing $-f(\mathbf{x})$.

### 1.3 Classification of NLP Problems

*   **Unconstrained NLP:** No constraints are present. The problem is to find the minimum (or maximum) of $f(\mathbf{x})$.
*   **Constrained NLP:** The problem includes one or more constraints.

## 2. Classical Optimization Methods for Unconstrained NLP

These methods rely on calculus principles to find optimal solutions.

### 2.1 First-Order Necessary Conditions (First Derivative Tests)

*   **Concept:** At an optimal point, the gradient of the objective function must be zero if there are no constraints.
*   **For Unconstrained Minimization:**
    A necessary condition for a local minimum of $f(\mathbf{x})$ at $\mathbf{x}^*$ is that the gradient of $f$ at $\mathbf{x}^*$ is the zero vector:
    $\nabla f(\mathbf{x}^*) = \mathbf{0}$
    This means all partial derivatives with respect to each decision variable must be zero:
    $\frac{\partial f}{\partial x_k}(\mathbf{x}^*) = 0$, for $k = 1, 2, \ldots, n$
*   **Interpretation:** The gradient points in the direction of the steepest ascent. At a minimum, there should be no direction of ascent, hence the gradient is zero.

### 2.2 Second-Order Necessary Conditions (Second Derivative Tests)

*   **Concept:** The first-order conditions identify stationary points (which can be minima, maxima, or saddle points). Second-order conditions help distinguish between them.
*   **For Unconstrained Minimization:**
    If $\nabla f(\mathbf{x}^*) = \mathbf{0}$, then a sufficient condition for $\mathbf{x}^*$ to be a strict local minimum is that the Hessian matrix of $f$ at $\mathbf{x}^*$ is positive definite:
    $\nabla^2 f(\mathbf{x}^*) \succ 0$
    This means that all eigenvalues of the Hessian matrix are positive.
    The Hessian matrix, denoted by $\mathbf{H} = \nabla^2 f(\mathbf{x})$, is the matrix of second partial derivatives:
    $H_{ij} = \frac{\partial^2 f}{\partial x_i \partial x_j}$
*   **Other Conditions:**
    *   **Positive Semidefinite:** If $\nabla^2 f(\mathbf{x}^*) \succeq 0$, $\mathbf{x}^*$ is a local minimum (not necessarily strict).
    *   **Negative Definite:** If $\nabla^2 f(\mathbf{x}^*) \prec 0$, $\mathbf{x}^*$ is a local maximum.
    *   **Indefinite:** If $\nabla^2 f(\mathbf{x}^*)$ has both positive and negative eigenvalues, $\mathbf{x}^*$ is a saddle point.

### 2.3 Example: Unconstrained Minimization

**Problem:** Minimize $f(x_1, x_2) = x_1^2 + x_2^2 - 4x_1 - 6x_2 + 10$

**Solution:**

1.  **Find the gradient:**
    $\frac{\partial f}{\partial x_1} = 2x_1 - 4$
    $\frac{\partial f}{\partial x_2} = 2x_2 - 6$
    $\nabla f(\mathbf{x}) = \begin{bmatrix} 2x_1 - 4 \\ 2x_2 - 6 \end{bmatrix}$

2.  **Set the gradient to zero (First-Order Necessary Condition):**
    $2x_1 - 4 = 0 \implies x_1 = 2$
    $2x_2 - 6 = 0 \implies x_2 = 3$
    The stationary point is $\mathbf{x}^* = \begin{bmatrix} 2 \\ 3 \end{bmatrix}$.

3.  **Find the Hessian matrix (Second Derivatives):**
    $\frac{\partial^2 f}{\partial x_1^2} = 2$
    $\frac{\partial^2 f}{\partial x_2^2} = 2$
    $\frac{\partial^2 f}{\partial x_1 \partial x_2} = 0$
    $\frac{\partial^2 f}{\partial x_2 \partial x_1} = 0$
    $\nabla^2 f(\mathbf{x}) = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$

4.  **Evaluate the Hessian at the stationary point:**
    The Hessian is constant, so $\nabla^2 f(\mathbf{x}^*) = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$.

5.  **Check definiteness of the Hessian:**
    The eigenvalues of a diagonal matrix are its diagonal elements. The eigenvalues are 2 and 2, which are both positive.
    Therefore, the Hessian is positive definite ($\nabla^2 f(\mathbf{x}^*) \succ 0$).

**Conclusion:** The point $\mathbf{x}^* = \begin{bmatrix} 2 \\ 3 \end{bmatrix}$ is a strict local minimum.

## 3. Classical Optimization Methods for Constrained NLP

These methods extend calculus principles to handle constraints.

### 3.1 Introduction to Lagrange Multipliers

*   **Concept:** For constrained optimization problems, the optimal solution occurs where the gradient of the objective function is a linear combination of the gradients of the active constraints.
*   **Active Constraint:** A constraint is active at a point if it is satisfied with equality at that point.
*   **Lagrangian Function:** For a problem with equality constraints $h_j(\mathbf{x}) = 0$, we define the Lagrangian function $L(\mathbf{x}, \boldsymbol{\lambda})$ as:
    $L(\mathbf{x}, \boldsymbol{\lambda}) = f(\mathbf{x}) + \sum_{j=1}^{p} \lambda_j h_j(\mathbf{x})$
    where $\boldsymbol{\lambda} = [\lambda_1, \lambda_2, \ldots, \lambda_p]^T$ are the Lagrange multipliers.

### 3.2 First-Order Necessary Conditions (KKT Conditions for Equality Constraints)

*   **Karush-Kuhn-Tucker (KKT) Conditions:** These are the most fundamental conditions for optimality in constrained NLP. For a problem with only equality constraints $h_j(\mathbf{x}) = 0$:
    1.  **Stationarity:** The gradient of the Lagrangian with respect to $\mathbf{x}$ must be zero:
        $\nabla_{\mathbf{x}} L(\mathbf{x}^*, \boldsymbol{\lambda}^*) = \nabla f(\mathbf{x}^*) + \sum_{j=1}^{p} \lambda_j^* \nabla h_j(\mathbf{x}^*) = \mathbf{0}$
    2.  **Primal Feasibility:** The original constraints must be satisfied:
        $h_j(\mathbf{x}^*) = 0$, for $j = 1, 2, \ldots, p$

*   **Interpretation:** At the optimum $\mathbf{x}^*$, the gradient of the objective function $\nabla f(\mathbf{x}^*)$ must be parallel to the gradient of the active constraint(s) $\nabla h_j(\mathbf{x}^*)$. The Lagrange multipliers $\lambda_j^*$ represent the scaling factors that make these gradients equal (or opposite in direction depending on the formulation).

### 3.3 Extension to Inequality Constraints (Full KKT Conditions)

*   **Concept:** For problems with both equality ($h_j(\mathbf{x}) = 0$) and inequality ($g_i(\mathbf{x}) \le 0$) constraints, the KKT conditions are more comprehensive.
*   **Lagrangian Function with Inequality Constraints:**
    $L(\mathbf{x}, \boldsymbol{\lambda}, \boldsymbol{\mu}) = f(\mathbf{x}) + \sum_{j=1}^{p} \lambda_j h_j(\mathbf{x}) + \sum_{i=1}^{m} \mu_i g_i(\mathbf{x})$
    where $\boldsymbol{\lambda}$ are Lagrange multipliers for equality constraints and $\boldsymbol{\mu} = [\mu_1, \mu_2, \ldots, \mu_m]^T$ are Lagrange multipliers for inequality constraints.
*   **KKT Conditions for Minimization:** A point $\mathbf{x}^*$ is a candidate for a local minimum if there exist multipliers $\boldsymbol{\lambda}^*$ and $\boldsymbol{\mu}^*$ such that:

    1.  **Stationarity:** $\nabla_{\mathbf{x}} L(\mathbf{x}^*, \boldsymbol{\lambda}^*, \boldsymbol{\mu}^*) = \nabla f(\mathbf{x}^*) + \sum_{j=1}^{p} \lambda_j^* \nabla h_j(\mathbf{x}^*) + \sum_{i=1}^{m} \mu_i^* \nabla g_i(\mathbf{x}^*) = \mathbf{0}$
    2.  **Primal Feasibility:**
        $h_j(\mathbf{x}^*) = 0$, for $j = 1, 2, \ldots, p$
        $g_i(\mathbf{x}^*) \le 0$, for $i = 1, 2, \ldots, m$
    3.  **Dual Feasibility (for inequality constraints):** The multipliers for inequality constraints must be non-negative:
        $\mu_i^* \ge 0$, for $i = 1, 2, \ldots, m$
    4.  **Complementary Slackness:** For each inequality constraint, either the constraint is inactive ($g_i(\mathbf{x}^*) < 0$) or its corresponding multiplier is zero ($\mu_i^* = 0$), or both:
        $\mu_i^* g_i(\mathbf{x}^*) = 0$, for $i = 1, 2, \ldots, m$

*   **Interpretation:**
    *   Stationarity: The gradient of the objective is a linear combination of gradients of active constraints (equality constraints and inequality constraints where $\mu_i > 0$ and $g_i(\mathbf{x}) = 0$).
    *   Primal Feasibility: The proposed solution must satisfy all constraints.
    *   Dual Feasibility: For minimization problems, the multipliers for inequality constraints must be non-negative. This means that if an inequality constraint is active, the gradient of the objective function must point in the opposite direction of the gradient of the constraint.
    *   Complementary Slackness: This ensures that only active inequality constraints contribute to the gradient combination. If a constraint is not active ($g_i(\mathbf{x}^*) < 0$), its multiplier must be zero ($\mu_i^* = 0$), meaning it doesn't influence the gradient at the optimum.

### 3.4 Second-Order Sufficient Conditions (for Constrained NLP)

*   **Concept:** Similar to the unconstrained case, second-order conditions help confirm if a KKT point is a local minimum.
*   **For Equality Constraints:** If $\mathbf{x}^*$ is a KKT point with multipliers $\boldsymbol{\lambda}^*$, it is a strict local minimum if for all non-zero vectors $\mathbf{z}$ in the **tangent subspace** of the active constraints, the quadratic form involving the Hessian of the Lagrangian is positive:
    $\mathbf{z}^T \nabla_{\mathbf{x}}^2 L(\mathbf{x}^*, \boldsymbol{\lambda}^*) \mathbf{z} > 0$
    The tangent subspace consists of vectors $\mathbf{z}$ such that $\nabla h_j(\mathbf{x}^*) \cdot \mathbf{z} = 0$ for all $j$ where $h_j(\mathbf{x}^*) = 0$.
*   **For Inequality Constraints:** The condition is more complex, involving the tangent subspace of constraints that are active at $\mathbf{x}^*$ (both equality constraints and inequality constraints with $\mu_i^* > 0$ and $g_i(\mathbf{x}^*) = 0$).

### 3.5 Example: Constrained Minimization (Equality Constraint)

**Problem:** Minimize $f(x_1, x_2) = x_1^2 + x_2^2$ subject to $h_1(x_1, x_2) = x_1 + x_2 - 1 = 0$.

**Solution:**

1.  **Define the Lagrangian:**
    $L(x_1, x_2, \lambda_1) = (x_1^2 + x_2^2) + \lambda_1 (x_1 + x_2 - 1)$

2.  **Apply First-Order Necessary Conditions (KKT):**
    *   **Stationarity (Gradient of L w.r.t. $x_1, x_2$):**
        $\frac{\partial L}{\partial x_1} = 2x_1 + \lambda_1 = 0 \implies 2x_1 = -\lambda_1$
        $\frac{\partial L}{\partial x_2} = 2x_2 + \lambda_1 = 0 \implies 2x_2 = -\lambda_1$
    *   **Primal Feasibility (Constraint):**
        $x_1 + x_2 - 1 = 0$

3.  **Solve the system of equations:**
    From the stationarity conditions, $2x_1 = 2x_2$, so $x_1 = x_2$.
    Substitute $x_1 = x_2$ into the constraint:
    $x_1 + x_1 - 1 = 0 \implies 2x_1 = 1 \implies x_1 = 0.5$
    Therefore, $x_2 = 0.5$.
    From $2x_1 = -\lambda_1$, we get $2(0.5) = -\lambda_1 \implies 1 = -\lambda_1 \implies \lambda_1 = -1$.
    The candidate point is $\mathbf{x}^* = \begin{bmatrix} 0.5 \\ 0.5 \end{bmatrix}$ with $\lambda_1^* = -1$.

4.  **Check Second-Order Conditions (Optional for this simple case, but good practice):**
    *   Hessian of the Lagrangian w.r.t. $\mathbf{x}$:
        $\nabla_{\mathbf{x}}^2 L = \begin{bmatrix} \frac{\partial^2 L}{\partial x_1^2} & \frac{\partial^2 L}{\partial x_1 \partial x_2} \\ \frac{\partial^2 L}{\partial x_2 \partial x_1} & \frac{\partial^2 L}{\partial x_2^2} \end{bmatrix} = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$
    *   Gradient of the constraint: $\nabla h_1(x_1, x_2) = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$.
    *   Tangent subspace: Vectors $\mathbf{z} = \begin{bmatrix} z_1 \\ z_2 \end{bmatrix}$ such that $\nabla h_1(\mathbf{x}^*) \cdot \mathbf{z} = 0$.
        $1 \cdot z_1 + 1 \cdot z_2 = 0 \implies z_1 = -z_2$.
        So, $\mathbf{z}$ is of the form $\begin{bmatrix} t \\ -t \end{bmatrix}$ for any $t \neq 0$.
    *   Evaluate quadratic form:
        $\mathbf{z}^T \nabla_{\mathbf{x}}^2 L \mathbf{z} = \begin{bmatrix} t & -t \end{bmatrix} \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix} \begin{bmatrix} t \\ -t \end{bmatrix} = \begin{bmatrix} t & -t \end{bmatrix} \begin{bmatrix} 2t \\ -2t \end{bmatrix} = 2t^2 - (-2t^2) = 4t^2$.
    *   Since $4t^2 > 0$ for $t \neq 0$, the Hessian of the Lagrangian is positive definite on the tangent subspace.

**Conclusion:** The point $\mathbf{x}^* = \begin{bmatrix} 0.5 \\ 0.5 \end{bmatrix}$ is a strict local minimum. The minimum value of the objective function is $f(0.5, 0.5) = 0.5^2 + 0.5^2 = 0.25 + 0.25 = 0.5$.

### 3.6 Example: Constrained Minimization (Inequality Constraint)

**Problem:** Minimize $f(x_1, x_2) = -x_1 - x_2$ subject to $g_1(x_1, x_2) = x_1 + x_2 - 1 \le 0$.

**Solution:**

1.  **Define the Lagrangian:**
    $L(x_1, x_2, \mu_1) = (-x_1 - x_2) + \mu_1 (x_1 + x_2 - 1)$

2.  **Apply KKT Conditions:**
    *   **Stationarity (Gradient of L w.r.t. $x_1, x_2$):**
        $\frac{\partial L}{\partial x_1} = -1 + \mu_1 = 0 \implies \mu_1 = 1$
        $\frac{\partial L}{\partial x_2} = -1 + \mu_1 = 0 \implies \mu_1 = 1$
    *   **Primal Feasibility:**
        $x_1 + x_2 - 1 \le 0$
    *   **Dual Feasibility:**
        $\mu_1 \ge 0$ (This is satisfied as $\mu_1 = 1$)
    *   **Complementary Slackness:**
        $\mu_1 (x_1 + x_2 - 1) = 0$

3.  **Analyze the Complementary Slackness:**
    We found $\mu_1 = 1$. Substituting this into the complementary slackness condition:
    $1 \cdot (x_1 + x_2 - 1) = 0 \implies x_1 + x_2 - 1 = 0$.
    This indicates that the inequality constraint must be active at the optimum.

4.  **Solve the system of equations (Constraint and Stationarity):**
    We have:
    $x_1 + x_2 - 1 = 0$
    $\mu_1 = 1$

    The stationarity conditions ($-1 + \mu_1 = 0$) are satisfied if $\mu_1=1$.
    However, the stationarity conditions $\frac{\partial L}{\partial x_1} = -1 + \mu_1$ and $\frac{\partial L}{\partial x_2} = -1 + \mu_1$ *do not provide any information about $x_1$ and $x_2$ themselves*. This suggests that the method of Lagrange multipliers for inequality constraints needs careful consideration.

    Let's re-evaluate the gradient of the Lagrangian with respect to $\mathbf{x}$:
    $\nabla_{\mathbf{x}} L = \begin{bmatrix} -1 + \mu_1 \\ -1 + \mu_1 \end{bmatrix}$
    Setting this to zero:
    $-1 + \mu_1 = 0 \implies \mu_1 = 1$.

    Now, consider the nature of the problem: Minimize $f(x_1, x_2) = -x_1 - x_2$. This is equivalent to maximizing $x_1 + x_2$.
    The constraint is $x_1 + x_2 \le 1$.
    To maximize $x_1 + x_2$ subject to $x_1 + x_2 \le 1$, we want to get as close to the boundary as possible. The maximum value of $x_1 + x_2$ is 1, which occurs anywhere on the line $x_1 + x_2 = 1$.

    So, any point $(x_1, x_2)$ such that $x_1 + x_2 = 1$ is a candidate solution. For such points, the objective function value is $f(x_1, x_2) = -(x_1 + x_2) = -1$.

    Let's check the KKT conditions for any point $(x_1, x_2)$ where $x_1 + x_2 = 1$.
    *   Primal Feasibility: $x_1 + x_2 - 1 = 0 \le 0$. Satisfied.
    *   Dual Feasibility: $\mu_1 = 1 \ge 0$. Satisfied.
    *   Complementary Slackness: $\mu_1 (x_1 + x_2 - 1) = 1 \cdot (0) = 0$. Satisfied.
    *   Stationarity: $\nabla f(\mathbf{x}^*) + \mu_1^* \nabla g_1(\mathbf{x}^*) = \mathbf{0}$
        $\nabla f = \begin{bmatrix} -1 \\ -1 \end{bmatrix}$
        $\nabla g_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$
        $\begin{bmatrix} -1 \\ -1 \end{bmatrix} + 1 \cdot \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} -1 + 1 \\ -1 + 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$. Satisfied.

    Therefore, any point on the line $x_1 + x_2 = 1$ is a KKT point.

    **Second-Order Sufficiency:**
    Hessian of Lagrangian w.r.t. $\mathbf{x}$: $\nabla_{\mathbf{x}}^2 L = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}$.
    The tangent subspace for the active constraint $g_1$ is vectors $\mathbf{z}$ such that $\nabla g_1 \cdot \mathbf{z} = 0$.
    $\begin{bmatrix} 1 \\ 1 \end{bmatrix} \cdot \begin{bmatrix} z_1 \\ z_2 \end{bmatrix} = 0 \implies z_1 + z_2 = 0 \implies z_1 = -z_2$.
    So $\mathbf{z}$ is of the form $\begin{bmatrix} t \\ -t \end{bmatrix}$ for $t \neq 0$.
    The quadratic form is $\mathbf{z}^T \nabla_{\mathbf{x}}^2 L \mathbf{z} = \begin{bmatrix} t & -t \end{bmatrix} \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} t \\ -t \end{bmatrix} = 0$.
    Since the quadratic form is zero, this is a necessary condition for minimum, but not sufficient for a *strict* local minimum.

    **Interpretation:** The objective function $f(x_1, x_2) = -x_1 - x_2$ has level sets that are parallel to the constraint boundary $x_1 + x_2 = 1$. The minimum value is achieved anywhere on this boundary.

    **Conclusion:** The minimum value of the objective function is -1, and it is achieved at any point $(x_1, x_2)$ such that $x_1 + x_2 = 1$.

## 4. Important Points to Remember

*   **NLP vs. LP:** The presence of non-linearity in the objective or constraints makes NLP significantly harder than LP.
*   **Local vs. Global Optima:** Classical methods (based on derivatives) typically find local optima. For non-convex problems, these might not be the global optimum. Convexity is a crucial concept for guaranteeing global optima.
*   **KKT Conditions are Necessary:** The KKT conditions are necessary for optimality in constrained NLP. They are sufficient for optimality under certain conditions (e.g., for convex problems or when second-order sufficient conditions are met).
*   **Role of Lagrange Multipliers:** They represent the sensitivity of the optimal objective function value to a small change in the constraint. For inequality constraints, their non-negativity and complementary slackness are critical.
*   **Active Constraints:** Only the constraints that are satisfied with equality at the optimal point influence the gradient of the objective function.

## 5. Practice Questions and Exercises

**Question 1 (Unconstrained):**
Find the minimum of the function $f(x_1, x_2) = x_1^4 + x_2^4 - 4x_1x_2 + 10$.
*   **Answer:**
    1.  $\nabla f = [4x_1^3 - 4x_2, 4x_2^3 - 4x_1]^T$.
    2.  Setting $\nabla f = \mathbf{0}$:
        $4x_1^3 - 4x_2 = 0 \implies x_2 = x_1^3$
        $4x_2^3 - 4x_1 = 0 \implies x_1 = x_2^3$
    3.  Substituting $x_2 = x_1^3$ into $x_1 = x_2^3$:
        $x_1 = (x_1^3)^3 = x_1^9$
        $x_1^9 - x_1 = 0 \implies x_1(x_1^8 - 1) = 0$.
        This gives $x_1 = 0, 1, -1$.
    4.  If $x_1 = 0$, then $x_2 = 0^3 = 0$. Point: (0,0).
    5.  If $x_1 = 1$, then $x_2 = 1^3 = 1$. Point: (1,1).
    6.  If $x_1 = -1$, then $x_2 = (-1)^3 = -1$. Point: (-1,-1).
    7.  Now, check the Hessian.
        $\frac{\partial^2 f}{\partial x_1^2} = 12x_1^2$
        $\frac{\partial^2 f}{\partial x_2^2} = 12x_2^2$
        $\frac{\partial^2 f}{\partial x_1 \partial x_2} = -4$
        $\nabla^2 f = \begin{bmatrix} 12x_1^2 & -4 \\ -4 & 12x_2^2 \end{bmatrix}$
    8.  At (0,0): $\nabla^2 f = \begin{bmatrix} 0 & -4 \\ -4 & 0 \end{bmatrix}$. Determinant = 16 > 0. Eigenvalues are $\pm 4$. Indefinite. Saddle point.
    9.  At (1,1): $\nabla^2 f = \begin{bmatrix} 12 & -4 \\ -4 & 12 \end{bmatrix}$. Determinant = $144 - 16 = 128 > 0$. Trace = 24 > 0. Positive definite. Local Minimum. $f(1,1) = 1+1-4+10 = 8$.
    10. At (-1,-1): $\nabla^2 f = \begin{bmatrix} 12 & -4 \\ -4 & 12 \end{bmatrix}$. Positive definite. Local Minimum. $f(-1,-1) = 1+1-4(-1)(-1)+10 = 1+1-4+10 = 8$.
    **Answer:** Local minima are at (1,1) and (-1,-1), with a minimum value of 8.

**Question 2 (Equality Constraint):**
Find the minimum of $f(x_1, x_2) = x_1^2 + 2x_2^2$ subject to $x_1 + x_2 = 1$.
*   **Answer:**
    1.  Lagrangian: $L = x_1^2 + 2x_2^2 + \lambda_1(x_1 + x_2 - 1)$.
    2.  KKT:
        $\frac{\partial L}{\partial x_1} = 2x_1 + \lambda_1 = 0 \implies \lambda_1 = -2x_1$
        $\frac{\partial L}{\partial x_2} = 4x_2 + \lambda_1 = 0 \implies \lambda_1 = -4x_2$
        $x_1 + x_2 - 1 = 0$
    3.  Solve:
        $-2x_1 = -4x_2 \implies x_1 = 2x_2$.
        Substitute into constraint: $2x_2 + x_2 = 1 \implies 3x_2 = 1 \implies x_2 = 1/3$.
        $x_1 = 2(1/3) = 2/3$.
        $\lambda_1 = -2(2/3) = -4/3$.
    4.  Candidate point: $(2/3, 1/3)$.
    5.  Objective value: $f(2/3, 1/3) = (2/3)^2 + 2(1/3)^2 = 4/9 + 2/9 = 6/9 = 2/3$.
    **Answer:** The minimum is at $(2/3, 1/3)$ with a value of $2/3$.

**Question 3 (Inequality Constraint):**
Minimize $f(x_1) = (x_1 - 2)^2$ subject to $x_1 \le 3$.
*   **Answer:**
    1.  Lagrangian: $L = (x_1 - 2)^2 + \mu_1 (x_1 - 3)$.
    2.  KKT:
        $\frac{\partial L}{\partial x_1} = 2(x_1 - 2) + \mu_1 = 0$
        $x_1 - 3 \le 0$
        $\mu_1 \ge 0$
        $\mu_1 (x_1 - 3) = 0$
    3.  Case 1: Constraint is inactive ($x_1 < 3$).
        Then $\mu_1 = 0$.
        $2(x_1 - 2) + 0 = 0 \implies x_1 - 2 = 0 \implies x_1 = 2$.
        Check $x_1 < 3$: $2 < 3$. This is valid.
        Objective value: $f(2) = (2-2)^2 = 0$.
    4.  Case 2: Constraint is active ($x_1 = 3$).
        Then $x_1 - 3 = 0$.
        From $2(x_1 - 2) + \mu_1 = 0$, substitute $x_1 = 3$:
        $2(3 - 2) + \mu_1 = 0 \implies 2(1) + \mu_1 = 0 \implies \mu_1 = -2$.
        Check $\mu_1 \ge 0$: $-2 \ge 0$. This is **not** satisfied. So $x_1=3$ is not a KKT point.
    5.  Therefore, the only valid KKT point is $x_1 = 2$.
    **Answer:** The minimum is at $x_1 = 2$ with a value of 0. The constraint $x_1 \le 3$ is inactive at the optimum.

**Question 4 (Conceptual):**
For a minimization problem with an equality constraint $h(x) = 0$, what is the geometric interpretation of the first-order necessary condition $\nabla f(\mathbf{x}^*) + \lambda^* \nabla h(\mathbf{x}^*) = \mathbf{0}$?
*   **Answer:** The gradient of the objective function $\nabla f(\mathbf{x}^*)$ must be parallel to the gradient of the constraint function $\nabla h(\mathbf{x}^*)$ at the optimal point $\mathbf{x}^*$. This means the direction of steepest ascent of the objective function is aligned with the direction of change of the constraint.

**Question 5 (Conceptual):**
Explain the meaning of complementary slackness in the context of KKT conditions for a minimization problem with $g(x) \le 0$.
*   **Answer:** Complementary slackness states that $\mu g(x) = 0$. This implies that for each inequality constraint:
    *   If the constraint is inactive (i.e., $g(x) < 0$), its corresponding Lagrange multiplier $\mu$ must be zero. This means the constraint is not "binding" or active at the optimum and does not affect the solution.
    *   If the constraint is active (i.e., $g(x) = 0$), its Lagrange multiplier $\mu$ can be positive (for minimization, assuming $\nabla g$ points outward) or zero.

This concludes the study notes for Non-Linear Programming: Classical Optimization Methods.
