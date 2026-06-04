---
title: "Quadratic programming."
subject: "OPTIMIZATION TECHNIQUES AND OPERATIONAL RESEARCH FOR CIVIL ENGINEERS"
module: "Module 2: Non"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810fa6"
status: "completed"
scrapedAt: "2026-05-20T18:50:12.079Z"
---
# Module 2: Non-Linear Programming - Quadratic Programming

## Introduction to Quadratic Programming (QP)

Quadratic Programming (QP) is a subfield of non-linear programming where the objective function is quadratic and the constraints are linear. This makes QP a more tractable problem than general non-linear programming, as it can often be solved efficiently using specialized algorithms.

### Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the structure and formulation of quadratic programming problems.
*   Recognize the properties of quadratic objective functions (convexity).
*   Identify common applications of QP in Civil Engineering.
*   Understand the general approach to solving QP problems.
*   Apply basic QP concepts to solve simple problems.

## 1. Structure and Formulation of Quadratic Programming Problems

A standard Quadratic Programming problem can be formulated as follows:

**Minimize:** $f(\mathbf{x}) = \frac{1}{2}\mathbf{x}^T Q \mathbf{x} + \mathbf{c}^T \mathbf{x}$

**Subject to:**
*   $A\mathbf{x} \leq \mathbf{b}$ (Inequality constraints)
*   $A_{eq}\mathbf{x} = \mathbf{b}_{eq}$ (Equality constraints)
*   $\mathbf{l} \leq \mathbf{x} \leq \mathbf{u}$ (Box constraints, optional)

Where:

*   $\mathbf{x}$: A vector of decision variables (e.g., design parameters, resource allocation).
*   $Q$: A symmetric matrix representing the quadratic part of the objective function. The factor of $\frac{1}{2}$ is a convention.
*   $\mathbf{c}$: A vector representing the linear part of the objective function.
*   $A$: A matrix for the inequality constraints.
*   $\mathbf{b}$: A vector for the right-hand side of the inequality constraints.
*   $A_{eq}$: A matrix for the equality constraints.
*   $\mathbf{b}_{eq}$: A vector for the right-hand side of the equality constraints.
*   $\mathbf{l}, \mathbf{u}$: Lower and upper bound vectors for the decision variables.

### Key Concepts and Definitions

*   **Quadratic Objective Function:** The objective function contains terms that are quadratic in the decision variables (e.g., $x_1^2$, $x_1x_2$).
*   **Linear Constraints:** All constraints are linear functions of the decision variables.
*   **Convexity:** For a QP problem to have a unique global minimum (and for most standard QP algorithms to guarantee finding it), the objective function must be convex. This is determined by the properties of the matrix $Q$.

## 2. Properties of Quadratic Objective Functions (Convexity)

The convexity of the quadratic objective function is crucial for ensuring that a local minimum is also a global minimum.

### Key Concepts and Definitions

*   **Convex Function:** A function $f(\mathbf{x})$ is convex if for any two points $\mathbf{x}_1$ and $\mathbf{x}_2$ in its domain and any scalar $\lambda \in [0, 1]$, the following holds:
    $f(\lambda \mathbf{x}_1 + (1-\lambda)\mathbf{x}_2) \leq \lambda f(\mathbf{x}_1) + (1-\lambda)f(\mathbf{x}_2)$.
*   **Positive Semidefinite (PSD) Matrix:** A symmetric matrix $Q$ is positive semidefinite if for all non-zero vectors $\mathbf{z}$, $\mathbf{z}^T Q \mathbf{z} \geq 0$.
*   **Positive Definite (PD) Matrix:** A symmetric matrix $Q$ is positive definite if for all non-zero vectors $\mathbf{z}$, $\mathbf{z}^T Q \mathbf{z} > 0$.

### How Q Determines Convexity:

*   If $Q$ is **positive semidefinite (PSD)**, the objective function $f(\mathbf{x}) = \frac{1}{2}\mathbf{x}^T Q \mathbf{x} + \mathbf{c}^T \mathbf{x}$ is **convex**.
*   If $Q$ is **positive definite (PD)**, the objective function is **strictly convex**. This guarantees a unique global minimum.
*   If $Q$ has **negative eigenvalues**, the objective function is **concave** or **indefinite**, and the problem may have multiple local minima or no minimum. Standard QP algorithms are designed for convex problems.

### Checking for Convexity:

The most common way to check if $Q$ is PSD or PD is by examining its eigenvalues.

*   If all eigenvalues of $Q$ are $\geq 0$, then $Q$ is PSD.
*   If all eigenvalues of $Q$ are $> 0$, then $Q$ is PD.

**Example:**

Consider the objective function $f(x_1, x_2) = x_1^2 + 2x_1x_2 + 3x_2^2 + 4x_1 + 5x_2$.

In matrix form:
$\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$
$Q = \begin{bmatrix} 2 & 2 \\ 2 & 6 \end{bmatrix}$ (Note: $\frac{1}{2} \mathbf{x}^T Q \mathbf{x} = x_1^2 + 2x_1x_2 + 3x_2^2$)
$\mathbf{c} = \begin{bmatrix} 4 \\ 5 \end{bmatrix}$

To check convexity, we find the eigenvalues of $Q$:
Characteristic equation: $\det(Q - \lambda I) = 0$
$\det \begin{bmatrix} 2-\lambda & 2 \\ 2 & 6-\lambda \end{bmatrix} = (2-\lambda)(6-\lambda) - 4 = 0$
$12 - 2\lambda - 6\lambda + \lambda^2 - 4 = 0$
$\lambda^2 - 8\lambda + 8 = 0$

Using the quadratic formula:
$\lambda = \frac{-(-8) \pm \sqrt{(-8)^2 - 4(1)(8)}}{2(1)} = \frac{8 \pm \sqrt{64 - 32}}{2} = \frac{8 \pm \sqrt{32}}{2} = \frac{8 \pm 4\sqrt{2}}{2} = 4 \pm 2\sqrt{2}$

Eigenvalues are $\lambda_1 = 4 + 2\sqrt{2} \approx 6.83$ and $\lambda_2 = 4 - 2\sqrt{2} \approx 1.17$.
Since both eigenvalues are positive, $Q$ is positive definite, and the objective function is strictly convex.

## 3. Applications of QP in Civil Engineering

Quadratic programming finds applications in various civil engineering disciplines due to its ability to model situations involving squared costs, penalties, or variances, subject to linear relationships.

### Examples:

*   **Structural Engineering:**
    *   **Least Squares Problems:** Fitting curves to experimental data (e.g., stress-strain curves) where minimizing the sum of squared errors is desired.
    *   **Optimization of Structural Parameters:** Minimizing material usage or cost subject to performance constraints (e.g., deflection limits), where cost might be a quadratic function of member sizes.
*   **Transportation Engineering:**
    *   **Traffic Signal Timing:** Optimizing signal timings at intersections to minimize vehicle delay, where delay can be approximated as a quadratic function of flow rates.
    *   **Network Flow Optimization:** While often linear, some formulations involving costs related to flow squared (e.g., fuel consumption) can lead to QP.
*   **Environmental Engineering:**
    *   **Water Resource Management:** Optimizing reservoir operations or pollution control strategies where costs might be non-linearly related to discharge rates.
*   **Construction Management:**
    *   **Resource Allocation:** Allocating resources (e.g., equipment, labor) to activities in a project to minimize total cost, where certain costs increase quadratically with resource usage.
*   **Geotechnical Engineering:**
    *   **Slope Stability Analysis:** Some methods for analyzing slope stability might involve quadratic objective functions related to minimizing forces or maximizing safety factors under certain conditions.

**Specific Example: Least Squares Regression**

A classic application is in fitting a linear model $y = \beta_0 + \beta_1 x$ to data points $(x_i, y_i)$. We want to find $\beta_0$ and $\beta_1$ that minimize the sum of squared errors:

Minimize: $S(\beta_0, \beta_1) = \sum_{i=1}^n (y_i - (\beta_0 + \beta_1 x_i))^2$

Let $\mathbf{x} = \begin{bmatrix} \beta_0 \\ \beta_1 \end{bmatrix}$.
The expression can be rewritten in matrix form.
Let $\mathbf{y} = \begin{bmatrix} y_1 \\ \vdots \\ y_n \end{bmatrix}$, $\mathbf{X} = \begin{bmatrix} 1 & x_1 \\ \vdots & \vdots \\ 1 & x_n \end{bmatrix}$.
Then $S(\mathbf{x}) = (\mathbf{y} - \mathbf{X}\mathbf{x})^T (\mathbf{y} - \mathbf{X}\mathbf{x})$
$S(\mathbf{x}) = \mathbf{y}^T\mathbf{y} - \mathbf{y}^T\mathbf{X}\mathbf{x} - \mathbf{x}^T\mathbf{X}^T\mathbf{y} + \mathbf{x}^T\mathbf{X}^T\mathbf{X}\mathbf{x}$
$S(\mathbf{x}) = \mathbf{x}^T (\mathbf{X}^T\mathbf{X}) \mathbf{x} - 2(\mathbf{X}^T\mathbf{y})^T \mathbf{x} + \mathbf{y}^T\mathbf{y}$

This is a QP problem where:
$Q = 2(\mathbf{X}^T\mathbf{X})$
$\mathbf{c} = -2\mathbf{X}^T\mathbf{y}$

The objective function is $f(\mathbf{x}) = \frac{1}{2}\mathbf{x}^T (2\mathbf{X}^T\mathbf{X}) \mathbf{x} + (-2\mathbf{X}^T\mathbf{y})^T \mathbf{x} = \mathbf{x}^T(\mathbf{X}^T\mathbf{X})\mathbf{x} - 2\mathbf{y}^T\mathbf{X}\mathbf{x}$.
To fit the standard form $\frac{1}{2}\mathbf{x}^T Q \mathbf{x} + \mathbf{c}^T \mathbf{x}$, we can write:
Minimize: $\frac{1}{2}\mathbf{x}^T (2\mathbf{X}^T\mathbf{X}) \mathbf{x} + (-2\mathbf{X}^T\mathbf{y})^T \mathbf{x}$
Here, the matrix for the quadratic term is $2\mathbf{X}^T\mathbf{X}$. If $\mathbf{X}^T\mathbf{X}$ is positive definite, the problem is convex.

## 4. General Approach to Solving QP Problems

QP problems are typically solved using specialized algorithms that leverage the structure of the problem. Unlike Linear Programming (LP) where the Simplex method or Interior-Point methods are common, QP solvers often use algorithms that are based on Karush-Kuhn-Tucker (KKT) conditions.

### Key Concepts and Definitions

*   **Karush-Kuhn-Tucker (KKT) Conditions:** A set of necessary conditions for an optimal solution to a constrained optimization problem. For QP, these conditions lead to a system of linear equations and inequalities that can be solved.
*   **Lagrangian Function:** For a problem:
    Minimize $f(\mathbf{x})$
    Subject to $g_i(\mathbf{x}) \leq 0$ for $i=1, \dots, m$ and $h_j(\mathbf{x}) = 0$ for $j=1, \dots, p$.
    The Lagrangian is $L(\mathbf{x}, \boldsymbol{\lambda}, \boldsymbol{\mu}) = f(\mathbf{x}) + \sum_{i=1}^m \lambda_i g_i(\mathbf{x}) + \sum_{j=1}^p \mu_j h_j(\mathbf{x})$.
    For QP:
    $L(\mathbf{x}, \boldsymbol{\lambda}, \boldsymbol{\mu}) = \frac{1}{2}\mathbf{x}^T Q \mathbf{x} + \mathbf{c}^T \mathbf{x} + \boldsymbol{\lambda}^T (A\mathbf{x} - \mathbf{b}) + \boldsymbol{\mu}^T (A_{eq}\mathbf{x} - \mathbf{b}_{eq})$

### KKT Conditions for QP:

For a convex QP problem, if $\mathbf{x}^*$ is an optimal solution, there exist Lagrange multipliers $\boldsymbol{\lambda}^* \geq \mathbf{0}$ and $\boldsymbol{\mu}^*$ such that:

1.  **Stationarity:** $\nabla_x L(\mathbf{x}^*, \boldsymbol{\lambda}^*, \boldsymbol{\mu}^*) = \mathbf{0}$
    $\mathbf{c} + Q\mathbf{x}^* + A^T\boldsymbol{\lambda}^* + A_{eq}^T\boldsymbol{\mu}^* = \mathbf{0}$
2.  **Primal Feasibility:**
    $A\mathbf{x}^* \leq \mathbf{b}$
    $A_{eq}\mathbf{x}^* = \mathbf{b}_{eq}$
3.  **Dual Feasibility:**
    $\boldsymbol{\lambda}^* \geq \mathbf{0}$
4.  **Complementary Slackness:**
    $\lambda_i^* (a_i^T \mathbf{x}^* - b_i) = 0$ for all $i$, where $a_i^T$ is the $i$-th row of $A$. This means if a constraint is not binding (slack > 0), its multiplier is 0.

### Solution Methods:

*   **Active Set Methods:** These methods start with a feasible solution and iteratively identify which constraints are active (binding) at the optimum. They then solve a subproblem where active constraints are treated as equalities.
*   **Interior-Point Methods:** Similar to LP, these methods stay in the interior of the feasible region and approach the boundary. They are generally efficient for large-scale problems.
*   **Sequential Quadratic Programming (SQP):** While SQP is a general non-linear programming technique, it uses QP subproblems at each iteration to approximate the original non-linear problem.

For civil engineers, understanding the KKT conditions is more important than implementing the algorithms from scratch. Software libraries (like SciPy in Python, MATLAB's Optimization Toolbox) provide efficient QP solvers.

## 5. Basic QP Concepts and Practice Questions

Let's work through a simplified example to illustrate the formulation and KKT conditions.

**Problem:**
Minimize $f(x_1, x_2) = x_1^2 + x_2^2 - 2x_1 - 4x_2$
Subject to:
$x_1 + x_2 \leq 1$
$2x_1 - x_2 \leq 2$
$x_1 \geq 0, x_2 \geq 0$

**Formulation in Standard QP Form:**

Minimize: $\frac{1}{2}\mathbf{x}^T Q \mathbf{x} + \mathbf{c}^T \mathbf{x}$
Subject to: $A\mathbf{x} \leq \mathbf{b}$ and $\mathbf{l} \leq \mathbf{x} \leq \mathbf{u}$

$\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$
Objective function: $x_1^2 + x_2^2 - 2x_1 - 4x_2$
$Q = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$ (since $2 \times \frac{1}{2}x_1^2 = x_1^2$, etc.)
$\mathbf{c} = \begin{bmatrix} -2 \\ -4 \end{bmatrix}$

Constraints:
$x_1 + x_2 \leq 1 \implies \begin{bmatrix} 1 & 1 \end{bmatrix} \mathbf{x} \leq 1$
$2x_1 - x_2 \leq 2 \implies \begin{bmatrix} 2 & -1 \end{bmatrix} \mathbf{x} \leq 2$
$x_1 \geq 0 \implies -x_1 \leq 0 \implies \begin{bmatrix} -1 & 0 \end{bmatrix} \mathbf{x} \leq 0$
$x_2 \geq 0 \implies -x_2 \leq 0 \implies \begin{bmatrix} 0 & -1 \end{bmatrix} \mathbf{x} \leq 0$

So,
$A = \begin{bmatrix} 1 & 1 \\ 2 & -1 \\ -1 & 0 \\ 0 & -1 \end{bmatrix}$
$\mathbf{b} = \begin{bmatrix} 1 \\ 2 \\ 0 \\ 0 \end{bmatrix}$

The matrix $Q = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$ has eigenvalues $2, 2$. Since both are positive, $Q$ is PD and the problem is convex.

---

### Practice Questions

**Question 1:**
A structural engineer is designing a simple beam and wants to minimize the cost, which is modeled by the quadratic function $f(x_1, x_2) = 2x_1^2 + 3x_2^2 - x_1x_2 + 5x_1$, where $x_1$ and $x_2$ are design parameters. The design is subject to the linear constraints:
$x_1 + 2x_2 \leq 10$
$3x_1 - x_2 \leq 15$
$x_1 \geq 0, x_2 \geq 0$

Formulate this problem in the standard QP format:
Minimize $\frac{1}{2}\mathbf{x}^T Q \mathbf{x} + \mathbf{c}^T \mathbf{x}$
Subject to $A\mathbf{x} \leq \mathbf{b}$ and $\mathbf{x} \geq \mathbf{0}$.

**Answer 1:**
$\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$
Objective function: $2x_1^2 + 3x_2^2 - x_1x_2 + 5x_1$
To match $\frac{1}{2}\mathbf{x}^T Q \mathbf{x}$, we need $Q$ such that $\frac{1}{2}\mathbf{x}^T Q \mathbf{x} = 2x_1^2 + 3x_2^2 - x_1x_2$.
$Q = \begin{bmatrix} 4 & -1 \\ -1 & 6 \end{bmatrix}$
$\mathbf{c} = \begin{bmatrix} 5 \\ 0 \end{bmatrix}$

Constraints:
$x_1 + 2x_2 \leq 10 \implies \begin{bmatrix} 1 & 2 \end{bmatrix} \mathbf{x} \leq 10$
$3x_1 - x_2 \leq 15 \implies \begin{bmatrix} 3 & -1 \end{bmatrix} \mathbf{x} \leq 15$
$x_1 \geq 0 \implies \begin{bmatrix} -1 & 0 \end{bmatrix} \mathbf{x} \leq 0$
$x_2 \geq 0 \implies \begin{bmatrix} 0 & -1 \end{bmatrix} \mathbf{x} \leq 0$

So,
$Q = \begin{bmatrix} 4 & -1 \\ -1 & 6 \end{bmatrix}$
$\mathbf{c} = \begin{bmatrix} 5 \\ 0 \end{bmatrix}$
$A = \begin{bmatrix} 1 & 2 \\ 3 & -1 \\ -1 & 0 \\ 0 & -1 \end{bmatrix}$
$\mathbf{b} = \begin{bmatrix} 10 \\ 15 \\ 0 \\ 0 \end{bmatrix}$

**Question 2:**
Consider the QP problem:
Minimize $f(x_1, x_2) = x_1^2 - 4x_1 + 2x_2^2 - 6x_2$
Subject to:
$x_1 + x_2 \leq 3$
$x_1 \geq 0, x_2 \geq 0$

Check if this problem is convex. If it is, write down the KKT conditions for this problem.

**Answer 2:**
The problem is:
Minimize $f(x_1, x_2) = x_1^2 - 4x_1 + 2x_2^2 - 6x_2$
Subject to:
$x_1 + x_2 \leq 3$
$-x_1 \leq 0$
$-x_2 \leq 0$

In standard QP form:
$Q = \begin{bmatrix} 2 & 0 \\ 0 & 4 \end{bmatrix}$
$\mathbf{c} = \begin{bmatrix} -4 \\ -6 \end{bmatrix}$
$A = \begin{bmatrix} 1 & 1 \\ -1 & 0 \\ 0 & -1 \end{bmatrix}$
$\mathbf{b} = \begin{bmatrix} 3 \\ 0 \\ 0 \end{bmatrix}$

**Convexity Check:**
The eigenvalues of $Q = \begin{bmatrix} 2 & 0 \\ 0 & 4 \end{bmatrix}$ are $2$ and $4$. Since both are positive, $Q$ is positive definite, and the objective function is strictly convex. Thus, the problem is convex.

**KKT Conditions:**
Let $\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$.
Lagrangian: $L(x_1, x_2, \lambda_1, \lambda_2, \lambda_3) = (x_1^2 - 4x_1 + 2x_2^2 - 6x_2) + \lambda_1(x_1 + x_2 - 3) + \lambda_2(-x_1) + \lambda_3(-x_2)$
Where $\lambda_1 \geq 0, \lambda_2 \geq 0, \lambda_3 \geq 0$.

1.  **Stationarity ($\nabla_x L = 0$):**
    $\frac{\partial L}{\partial x_1} = 2x_1 - 4 + \lambda_1 - \lambda_2 = 0$
    $\frac{\partial L}{\partial x_2} = 4x_2 - 6 + \lambda_1 - \lambda_3 = 0$

2.  **Primal Feasibility:**
    $x_1 + x_2 \leq 3$
    $-x_1 \leq 0 \implies x_1 \geq 0$
    $-x_2 \leq 0 \implies x_2 \geq 0$

3.  **Dual Feasibility:**
    $\lambda_1 \geq 0$
    $\lambda_2 \geq 0$
    $\lambda_3 \geq 0$

4.  **Complementary Slackness:**
    $\lambda_1 (x_1 + x_2 - 3) = 0$
    $\lambda_2 (-x_1) = 0 \implies \lambda_2 x_1 = 0$
    $\lambda_3 (-x_2) = 0 \implies \lambda_3 x_2 = 0$

## Important Points to Remember

*   **QP structure:** Quadratic objective, linear constraints.
*   **Convexity is Key:** The matrix $Q$ in the objective function must be positive semidefinite (ideally positive definite for a unique minimum) for standard QP solvers to guarantee optimality. Check eigenvalues of $Q$.
*   **Applications:** QP is useful when costs, penalties, or variances are quadratic. Look for squared terms in objective functions or problems involving minimizing deviations from targets.
*   **KKT Conditions:** These are the foundation for solving QP problems. They provide a system of equations and inequalities that characterize the optimal solution.
*   **Software Solvers:** For practical engineering problems, rely on established optimization software that implements efficient QP algorithms. You need to know how to formulate the problem correctly for these solvers.

This module provides a foundational understanding of Quadratic Programming, a powerful tool for optimization in civil engineering. Remember to focus on problem formulation and understanding the conditions for optimality.
