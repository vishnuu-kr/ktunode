---
title: "Equality constrained problems - Lagrange multipliers - Kuhn Tucker conditions - Kuhn Tucker theorems - Saddlepoint conditions - Second order optimality conditions - Generalized Lagrangian multiplier method"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 3: Equality constrained problems "
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36696"
status: "completed"
scrapedAt: "2026-05-23T16:30:28.549Z"
---
# OPTIMIZATION TECHNIQUES

## Module 3: Equality Constrained Problems

**Description:** This module focuses on optimization problems where the decision variables are subject to equality constraints. We will explore the fundamental concepts of Lagrange multipliers, Kuhn-Tucker conditions, their associated theorems, saddlepoint conditions, second-order optimality conditions, and the generalized Lagrangian multiplier method.

**Learning Outcomes:**
*   Understand the concept of Lagrange multipliers for equality constrained optimization.
*   Derive and interpret the Kuhn-Tucker conditions for non-linear programming problems.
*   Understand and apply the Kuhn-Tucker theorems.
*   Characterize optimality using saddlepoint conditions.
*   Analyze and apply second-order optimality conditions.
*   Explore the generalized Lagrangian multiplier method for various constrained problems.

**Course Outcomes Addressed:**
*   **CO2:** To evaluate the optimality criteria and methods for functions with several variables (Knowledge Level: K4) - *This module directly addresses optimality criteria for multi-variable functions with constraints.*
*   **CO4:** To explore optimization techniques for constrained problems (Knowledge Level: K3) - *The entire module is dedicated to constrained optimization.*

**Textbooks:**
*   Engineering Optimization, Methods and Applications by A Ravindran, K M Ragsdell, G V Reklaitis (John Wiley and Sons, 2006) - **(Referred to as RRR)**
*   Introduction to Linear Optimization by Dimitris Bertsimas, John N Tsitsiklis (Athena Scientific, 1997) - **(Referred to as BT)**
*   Stories about Maxima and Minima by V M Tikhomirov (American Mathematical Society, 1990) - **(Referred to as Tikhomirov)**

---

### 3.1 Introduction to Equality Constrained Problems

**Definition:** An equality constrained optimization problem seeks to find the optimal value (minimum or maximum) of an objective function subject to one or more equality constraints.

**General Form:**
Minimize $f(\mathbf{x})$
Subject to $h_i(\mathbf{x}) = 0$, for $i = 1, 2, \dots, m$
where $\mathbf{x} \in \mathbb{R}^n$.

**Key Concepts:**
*   **Feasible Region:** The set of all $\mathbf{x}$ that satisfy the constraints.
*   **Objective Function:** The function we aim to minimize or maximize.
*   **Equality Constraints:** Equations that must be satisfied by the decision variables.

---

### 3.2 Lagrange Multipliers

**Concept:** The method of Lagrange multipliers is a technique for finding the local maxima and minima of a function subject to equality constraints. It works by introducing a new variable, the Lagrange multiplier, for each constraint. These multipliers allow us to convert a constrained optimization problem into an unconstrained one by forming a new function called the Lagrangian.

**The Lagrangian Function:**
For a problem:
Minimize $f(\mathbf{x})$
Subject to $h_i(\mathbf{x}) = 0$, for $i = 1, 2, \dots, m$

The Lagrangian function $L(\mathbf{x}, \boldsymbol{\lambda})$ is defined as:
$L(\mathbf{x}, \boldsymbol{\lambda}) = f(\mathbf{x}) + \sum_{i=1}^m \lambda_i h_i(\mathbf{x})$
where $\boldsymbol{\lambda} = [\lambda_1, \lambda_2, \dots, \lambda_m]^T$ are the Lagrange multipliers.

**Geometric Interpretation (for one constraint):**
At an optimal point $\mathbf{x}^*$, the gradient of the objective function $\nabla f(\mathbf{x}^*)$ must be parallel to the gradient of the constraint function $\nabla h(\mathbf{x}^*)$. This means $\nabla f(\mathbf{x}^*) = \lambda \nabla h(\mathbf{x}^*)$ for some scalar $\lambda$. This is because if the gradients were not parallel, we could move along the constraint curve in a direction that decreases (or increases) $f$ while staying on the constraint.

**Derivation of Optimality Conditions:**
To find the stationary points of the Lagrangian function, we set its gradient with respect to all variables ($\mathbf{x}$ and $\boldsymbol{\lambda}$) to zero:

$\nabla_x L(\mathbf{x}, \boldsymbol{\lambda}) = \nabla f(\mathbf{x}) + \sum_{i=1}^m \lambda_i \nabla h_i(\mathbf{x}) = \mathbf{0}$
$\nabla_\lambda L(\mathbf{x}, \boldsymbol{\lambda}) = h_i(\mathbf{x}) = 0$, for $i = 1, 2, \dots, m$

These equations form a system of $n+m$ equations with $n+m$ unknowns ($x_1, \dots, x_n, \lambda_1, \dots, \lambda_m$).

**Example:**
Minimize $f(x, y) = x^2 + y^2$
Subject to $h(x, y) = x + y - 1 = 0$

Lagrangian: $L(x, y, \lambda) = x^2 + y^2 + \lambda(x + y - 1)$

Partial derivatives:
$\frac{\partial L}{\partial x} = 2x + \lambda = 0 \implies 2x = -\lambda$
$\frac{\partial L}{\partial y} = 2y + \lambda = 0 \implies 2y = -\lambda$
$\frac{\partial L}{\partial \lambda} = x + y - 1 = 0$

From the first two equations, $2x = 2y \implies x = y$.
Substituting into the constraint: $x + x - 1 = 0 \implies 2x = 1 \implies x = 1/2$.
Since $x = y$, $y = 1/2$.
The Lagrange multiplier $\lambda = -2x = -2(1/2) = -1$.

The optimal point is $(1/2, 1/2)$, and the minimum value is $(1/2)^2 + (1/2)^2 = 1/4 + 1/4 = 1/2$.

**Important Points to Remember:**
*   Lagrange multipliers are used for equality constraints only.
*   The method finds potential optimal points (critical points). Second-order conditions are needed to confirm if they are minima, maxima, or saddle points.
*   The value of $\lambda_i$ can be interpreted as the rate of change of the optimal objective function value with respect to a small change in the constraint $h_i(\mathbf{x}) = c_i$.

**Reference:** RRR Chapter 7.1

---

### 3.3 Kuhn-Tucker Conditions (Karush-Kuhn-Tucker Conditions)

**Concept:** The Kuhn-Tucker (KT) conditions are a set of necessary conditions for a solution in nonlinear programming to be optimal. They generalize the Lagrange multiplier method to problems with both equality and inequality constraints. For equality constrained problems, the KT conditions simplify to the Lagrange multiplier conditions.

**General Form of a Non-linear Programming Problem:**
Minimize $f(\mathbf{x})$
Subject to:
$h_i(\mathbf{x}) = 0$, for $i = 1, \dots, m$
$g_j(\mathbf{x}) \le 0$, for $j = 1, \dots, p$

**The Lagrangian Function for KT Conditions:**
$L(\mathbf{x}, \boldsymbol{\lambda}, \boldsymbol{\mu}) = f(\mathbf{x}) + \sum_{i=1}^m \lambda_i h_i(\mathbf{x}) + \sum_{j=1}^p \mu_j g_j(\mathbf{x})$
where $\boldsymbol{\lambda} = [\lambda_1, \dots, \lambda_m]^T$ are Lagrange multipliers for equality constraints, and $\boldsymbol{\mu} = [\mu_1, \dots, \mu_p]^T$ are Lagrange multipliers for inequality constraints.

**Kuhn-Tucker Necessary Conditions for a Minimization Problem:**
If $\mathbf{x}^*$ is a local minimum and satisfies certain constraint qualifications (e.g., linear independence of gradients of active constraints), then there exist Lagrange multipliers $\boldsymbol{\lambda}^*$ and $\boldsymbol{\mu}^*$ such that:

1.  **Stationarity:** $\nabla_x L(\mathbf{x}^*, \boldsymbol{\lambda}^*, \boldsymbol{\mu}^*) = \nabla f(\mathbf{x}^*) + \sum_{i=1}^m \lambda_i^* \nabla h_i(\mathbf{x}^*) + \sum_{j=1}^p \mu_j^* \nabla g_j(\mathbf{x}^*) = \mathbf{0}$
2.  **Primal Feasibility:**
    $h_i(\mathbf{x}^*) = 0$, for $i = 1, \dots, m$
    $g_j(\mathbf{x}^*) \le 0$, for $j = 1, \dots, p$
3.  **Dual Feasibility:** $\mu_j^* \ge 0$, for $j = 1, \dots, p$
4.  **Complementary Slackness:** $\mu_j^* g_j(\mathbf{x}^*) = 0$, for $j = 1, \dots, p$

**Interpretation of KT Conditions:**
*   **Stationarity:** The gradient of the objective function is a linear combination of the gradients of the active constraints.
*   **Primal Feasibility:** The solution must satisfy all original constraints.
*   **Dual Feasibility:** Multipliers for inequality constraints must be non-negative (for minimization).
*   **Complementary Slackness:** For each inequality constraint $g_j(\mathbf{x}) \le 0$:
    *   If $g_j(\mathbf{x}^*) < 0$ (constraint is not active), then $\mu_j^* = 0$. The constraint does not influence the optimal solution.
    *   If $g_j(\mathbf{x}^*) = 0$ (constraint is active), then $\mu_j^* \ge 0$. The constraint may influence the optimal solution.

**For Equality Constrained Problems Only (Section 3.1):**
If there are only equality constraints ($m > 0, p = 0$), the KT conditions reduce to the Lagrange multiplier conditions:
1.  $\nabla f(\mathbf{x}^*) + \sum_{i=1}^m \lambda_i^* \nabla h_i(\mathbf{x}^*) = \mathbf{0}$
2.  $h_i(\mathbf{x}^*) = 0$, for $i = 1, \dots, m$

**Example:**
Minimize $f(x, y) = x^2 + y^2$
Subject to:
$h_1(x, y) = x + y - 1 = 0$
$g_1(x, y) = -x \le 0 \implies x \ge 0$
$g_2(x, y) = -y \le 0 \implies y \ge 0$

Lagrangian: $L(x, y, \lambda_1, \mu_1, \mu_2) = x^2 + y^2 + \lambda_1(x + y - 1) + \mu_1(-x) + \mu_2(-y)$

KT Conditions:
1.  **Stationarity:**
    $\frac{\partial L}{\partial x} = 2x + \lambda_1 - \mu_1 = 0$
    $\frac{\partial L}{\partial y} = 2y + \lambda_1 - \mu_2 = 0$
2.  **Primal Feasibility:**
    $x + y - 1 = 0$
    $-x \le 0 \implies x \ge 0$
    $-y \le 0 \implies y \ge 0$
3.  **Dual Feasibility:** $\mu_1 \ge 0$, $\mu_2 \ge 0$
4.  **Complementary Slackness:** $\mu_1 x = 0$, $\mu_2 y = 0$

Let's consider cases based on complementary slackness:

*   **Case 1: $x > 0$ and $y > 0$**
    From complementary slackness: $\mu_1 = 0$, $\mu_2 = 0$.
    Stationarity:
    $2x + \lambda_1 = 0$
    $2y + \lambda_1 = 0$
    From these, $2x = 2y \implies x = y$.
    Primal Feasibility: $x + y - 1 = 0 \implies x + x - 1 = 0 \implies 2x = 1 \implies x = 1/2$.
    So, $y = 1/2$.
    This satisfies $x>0, y>0$.
    Check dual feasibility: $\mu_1 = 0 \ge 0$, $\mu_2 = 0 \ge 0$. This is satisfied.
    The point $(1/2, 1/2)$ is a candidate solution. $f(1/2, 1/2) = 1/4 + 1/4 = 1/2$.

*   **Case 2: $x = 0$ and $y > 0$**
    From complementary slackness: $\mu_2 = 0$. $\mu_1$ can be anything non-negative.
    Primal Feasibility: $0 + y - 1 = 0 \implies y = 1$. This satisfies $y > 0$.
    Stationarity:
    $\frac{\partial L}{\partial x} = 2(0) + \lambda_1 - \mu_1 = 0 \implies \lambda_1 - \mu_1 = 0 \implies \lambda_1 = \mu_1$
    $\frac{\partial L}{\partial y} = 2(1) + \lambda_1 - 0 = 0 \implies 2 + \lambda_1 = 0 \implies \lambda_1 = -2$.
    Since $\lambda_1 = \mu_1$, we have $\mu_1 = -2$.
    However, this violates dual feasibility ($\mu_1 \ge 0$). So, $(0, 1)$ is not a KT point.

*   **Case 3: $x > 0$ and $y = 0$**
    From complementary slackness: $\mu_1 = 0$. $\mu_2$ can be anything non-negative.
    Primal Feasibility: $x + 0 - 1 = 0 \implies x = 1$. This satisfies $x > 0$.
    Stationarity:
    $\frac{\partial L}{\partial x} = 2(1) + 0 - \mu_1 = 0 \implies 2 = 0$. This is a contradiction. So, $(1, 0)$ is not a KT point.

The only candidate KT point is $(1/2, 1/2)$.

**Important Points to Remember:**
*   KT conditions are necessary but not always sufficient for optimality.
*   Constraint qualifications (CQ) are crucial for the KT conditions to hold at an optimum. Common CQs include the Linear Independence Constraint Qualification (LICQ).
*   For equality constraints only, KT conditions are identical to Lagrange multiplier conditions.

**Reference:** RRR Chapter 7.2, BT Chapter 6

---

### 3.4 Kuhn-Tucker Theorems (Sufficiency)

**Concept:** While the KT conditions are necessary for optimality, they become sufficient under certain conditions, particularly for convex programming problems.

**Convex Programming Problem:**
A problem is convex if:
1.  The objective function $f(\mathbf{x})$ is convex.
2.  The inequality constraint functions $g_j(\mathbf{x})$ are convex.
3.  The equality constraint functions $h_i(\mathbf{x})$ are affine (linear).

**Kuhn-Tucker Sufficiency Theorem:**
If a problem satisfies the conditions for a convex program, and a point $\mathbf{x}^*$ satisfies the KT necessary conditions, then $\mathbf{x}^*$ is a global minimum.

**For Equality Constrained Problems Only:**
If $f(\mathbf{x})$ is convex and $h_i(\mathbf{x})$ are affine, then any point $\mathbf{x}^*$ satisfying the Lagrange multiplier conditions (which are the KT conditions for this case) is a global minimum.

**Theorem (for convex problems with equality and inequality constraints):**
Let $\mathbf{x}^*$ be a point that satisfies the KT conditions, along with $\boldsymbol{\lambda}^*$ and $\boldsymbol{\mu}^*$. If the objective function $f$ is convex, all $g_j$ are convex, and all $h_i$ are affine, then $\mathbf{x}^*$ is a global minimum.

**Example:**
Consider the previous example:
Minimize $f(x, y) = x^2 + y^2$
Subject to:
$h_1(x, y) = x + y - 1 = 0$
$g_1(x, y) = -x \le 0 \implies x \ge 0$
$g_2(x, y) = -y \le 0 \implies y \ge 0$

*   $f(x, y) = x^2 + y^2$ is convex (Hessian is $2I$, positive definite).
*   $h_1(x, y) = x + y - 1$ is affine.
*   $g_1(x, y) = -x$ is concave, but we need convex functions for the constraints. The standard form is $g_j(\mathbf{x}) \le 0$. So, we have $g_1(\mathbf{x}) = -x \le 0$ and $g_2(\mathbf{x}) = -y \le 0$. These functions $g_1, g_2$ are actually concave.
    *Correction*: For a minimization problem, we need $g_j(\mathbf{x})$ to be *convex*. So, the constraints $x \ge 0$ and $y \ge 0$ are typically written as $-x \le 0$ and $-y \le 0$. The functions $g_1(\mathbf{x}) = -x$ and $g_2(\mathbf{x}) = -y$ are concave.
    Let's rewrite the constraints in the standard form for convexity of $g_j$:
    Minimize $f(x, y) = x^2 + y^2$
    Subject to:
    $h_1(x, y) = x + y - 1 = 0$
    $g_1(x, y) = x \ge 0 \implies -x \le 0$. The function $G_1(x,y) = x$ is convex. The constraint is $G_1(x,y) \ge 0$.
    $g_2(x, y) = y \ge 0 \implies -y \le 0$. The function $G_2(x,y) = y$ is convex. The constraint is $G_2(x,y) \ge 0$.

    The standard form for KT sufficiency theorem requires $g_j(\mathbf{x})$ to be convex and the constraints to be of the form $g_j(\mathbf{x}) \le 0$.
    So, let's use the original $g_j$:
    $g_1(x, y) = -x \le 0$
    $g_2(x, y) = -y \le 0$
    For minimization, $g_j(\mathbf{x})$ must be convex. $-x$ is concave, $-y$ is concave.
    This means the problem is not a convex programming problem in its standard formulation.

    Let's consider a different formulation that fits the convex programming definition:
    Minimize $f(x, y) = x^2 + y^2$
    Subject to:
    $h_1(x, y) = x + y - 1 = 0$
    $g_1(x, y) = x \ge 0$
    $g_2(x, y) = y \ge 0$

    To apply the theorem, we need constraints of the form $g_j(\mathbf{x}) \le 0$, and $g_j$ to be convex.
    This means we should define our inequality constraints as:
    $G_1(x, y) = -x \le 0$
    $G_2(x, y) = -y \le 0$

    The functions $G_1(x, y) = -x$ and $G_2(x, y) = -y$ are concave.
    The KT sufficiency theorem for minimization requires $g_j$ to be *convex*.
    If we were maximizing $f(x,y)$, then $g_j$ would need to be concave.

    **Let's re-evaluate the conditions for sufficiency:**
    If $f$ is convex, $h_i$ are affine, and $g_j$ are convex, then a point satisfying KT conditions is a global minimum for minimization.
    Consider this equivalent problem:
    Minimize $f(x, y) = x^2 + y^2$
    Subject to:
    $x+y-1=0$
    $x \ge 0 \implies -x \le 0$. Let $g_1(x,y) = -x$. This is concave.
    $y \ge 0 \implies -y \le 0$. Let $g_2(x,y) = -y$. This is concave.

    The theorem states that if $f$ is convex, $h_i$ are affine, and $g_j$ are *convex* for a minimization problem, then KT conditions are sufficient.
    Our $g_j$ are concave. This means the KT conditions might not be sufficient.

    However, for problems with *only equality constraints*, if $f$ is convex and $h_i$ are affine, the Lagrange multiplier conditions are sufficient for global optimality.
    Our original example:
    Minimize $f(x, y) = x^2 + y^2$
    Subject to $h(x, y) = x + y - 1 = 0$
    Here $f$ is convex and $h$ is affine. The point $(1/2, 1/2)$ satisfies the Lagrange multiplier conditions. Therefore, it is a global minimum.

**Important Points to Remember:**
*   For general non-linear programming problems, convexity is key for KT conditions to be sufficient.
*   For problems with *only equality constraints*, if the objective function is convex and the constraints are affine, the Lagrange multiplier conditions are sufficient for global optimality.
*   The specific form of the constraint ($g_j \le 0$ vs. $g_j \ge 0$) matters for convexity.

**Reference:** RRR Chapter 7.2

---

### 3.5 Saddlepoint Conditions

**Concept:** A saddlepoint of the Lagrangian function is a point $(\mathbf{x}^*, \boldsymbol{\lambda}^*)$ where the Lagrangian is simultaneously minimized with respect to $\mathbf{x}$ and maximized with respect to $\boldsymbol{\lambda}$ (for inequality constraints, it's min-max).

**Definition of a Saddlepoint (for minimization with equality constraints):**
A point $(\mathbf{x}^*, \boldsymbol{\lambda}^*)$ is a saddlepoint of the Lagrangian $L(\mathbf{x}, \boldsymbol{\lambda}) = f(\mathbf{x}) + \sum_{i=1}^m \lambda_i h_i(\mathbf{x})$ if:
1.  $L(\mathbf{x}^*, \boldsymbol{\lambda}^*) \le L(\mathbf{x}, \boldsymbol{\lambda}^*)$ for all $\mathbf{x}$ in a neighborhood of $\mathbf{x}^*$. ( $\mathbf{x}^*$ is a minimizer of $L$ w.r.t. $\mathbf{x}$ for fixed $\boldsymbol{\lambda}^*$)
2.  $L(\mathbf{x}^*, \boldsymbol{\lambda}^*) \ge L(\mathbf{x}^*, \boldsymbol{\lambda})$ for all $\boldsymbol{\lambda}$ in a neighborhood of $\boldsymbol{\lambda}^*$. ( $\boldsymbol{\lambda}^*$ is a maximizer of $L$ w.r.t. $\boldsymbol{\lambda}$ for fixed $\mathbf{x}^*$)

**Relationship to Optimality:**
If a point $\mathbf{x}^*$ is a feasible solution and there exists $\boldsymbol{\lambda}^*$ such that $(\mathbf{x}^*, \boldsymbol{\lambda}^*)$ is a saddlepoint of the Lagrangian $L(\mathbf{x}, \boldsymbol{\lambda}) = f(\mathbf{x}) + \sum_{i=1}^m \lambda_i h_i(\mathbf{x})$, then $\mathbf{x}^*$ is a global minimum of $f(\mathbf{x})$ subject to $h_i(\mathbf{x}) = 0$.

**Conditions for a Saddlepoint:**
The conditions for a saddlepoint are precisely the first-order necessary conditions (Stationarity and Primal Feasibility):
1.  $\nabla_x L(\mathbf{x}^*, \boldsymbol{\lambda}^*) = \nabla f(\mathbf{x}^*) + \sum_{i=1}^m \lambda_i^* \nabla h_i(\mathbf{x}^*) = \mathbf{0}$
2.  $h_i(\mathbf{x}^*) = 0$, for $i = 1, \dots, m$

**Sufficiency of Saddlepoint Condition:**
The existence of a saddlepoint is a sufficient condition for optimality.
If $f$ is convex and $h_i$ are affine, then any point satisfying the first-order conditions (Lagrange multiplier conditions) is a saddlepoint and thus a global minimum.

**Example:**
Consider again:
Minimize $f(x, y) = x^2 + y^2$
Subject to $h(x, y) = x + y - 1 = 0$
Lagrangian: $L(x, y, \lambda) = x^2 + y^2 + \lambda(x + y - 1)$

We found the candidate point $(x^*, y^*, \lambda^*) = (1/2, 1/2, -1)$.
Let's check if it's a saddlepoint.

1.  **Minimize $L$ w.r.t. $x, y$ for fixed $\lambda = -1$:**
    $L(x, y, -1) = x^2 + y^2 - 1(x + y - 1) = x^2 - x + y^2 - y + 1$
    $\frac{\partial L}{\partial x} = 2x - 1 = 0 \implies x = 1/2$
    $\frac{\partial L}{\partial y} = 2y - 1 = 0 \implies y = 1/2$
    The Hessian of $L$ w.r.t. $x, y$ is $\begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$, which is positive definite. So, $(1/2, 1/2)$ is a local minimum for $L$ w.r.t. $x, y$.

2.  **Maximize $L$ w.r.t. $\lambda$ for fixed $x = 1/2, y = 1/2$:**
    $L(1/2, 1/2, \lambda) = (1/2)^2 + (1/2)^2 + \lambda(1/2 + 1/2 - 1) = 1/2 + \lambda(0) = 1/2$.
    This is a constant function of $\lambda$, so it doesn't have a strict maximum or minimum. However, this is because the constraint is satisfied at $x^*, y^*$.

    For equality constraints only, the saddlepoint condition is often interpreted as:
    *   $\mathbf{x}^*$ minimizes $L(\mathbf{x}, \boldsymbol{\lambda}^*)$ with respect to $\mathbf{x}$.
    *   $h_i(\mathbf{x}^*) = 0$ for all $i$.

    This is essentially what the Lagrange multiplier conditions state. The geometric interpretation of the gradient alignment also implies this.

**Important Points to Remember:**
*   Saddlepoint conditions provide a powerful way to confirm optimality.
*   For convex problems with affine equality constraints, the stationary points of the Lagrangian are saddlepoints.

**Reference:** RRR Chapter 7.3

---

### 3.6 Second-Order Optimality Conditions

**Concept:** While first-order conditions (Lagrange multipliers, KT) identify candidate optimal points, second-order conditions are used to classify these points as local minima, local maxima, or saddle points.

**For Equality Constrained Problems:**
Consider a point $\mathbf{x}^*$ that satisfies the first-order conditions (Lagrange multipliers):
$\nabla f(\mathbf{x}^*) + \sum_{i=1}^m \lambda_i^* \nabla h_i(\mathbf{x}^*) = \mathbf{0}$
$h_i(\mathbf{x}^*) = 0$, for $i = 1, \dots, m$

We examine the Hessian of the Lagrangian with respect to $\mathbf{x}$, denoted by $\nabla_{xx}^2 L(\mathbf{x}^*, \boldsymbol{\lambda}^*)$:
$\nabla_{xx}^2 L(\mathbf{x}, \boldsymbol{\lambda}) = \nabla^2 f(\mathbf{x}) + \sum_{i=1}^m \lambda_i \nabla^2 h_i(\mathbf{x})$

**Second-Order Necessary Conditions:**
For $\mathbf{x}^*$ to be a local minimum, for every non-zero vector $\mathbf{z}$ such that $\nabla h_i(\mathbf{x}^*) \cdot \mathbf{z} = 0$ for all $i=1, \dots, m$ (i.e., $\mathbf{z}$ is in the tangent space of the constraint surface at $\mathbf{x}^*$), we must have:
$\mathbf{z}^T \nabla_{xx}^2 L(\mathbf{x}^*, \boldsymbol{\lambda}^*) \mathbf{z} \ge 0$

**Second-Order Sufficient Conditions:**
For $\mathbf{x}^*$ to be a strict local minimum, for every non-zero vector $\mathbf{z}$ such that $\nabla h_i(\mathbf{x}^*) \cdot \mathbf{z} = 0$ for all $i=1, \dots, m$, we must have:
$\mathbf{z}^T \nabla_{xx}^2 L(\mathbf{x}^*, \boldsymbol{\lambda}^*) \mathbf{z} > 0$

**Interpretation:**
The second-order conditions check the curvature of the Lagrangian function in the subspace defined by the constraints.
*   If the Hessian of the Lagrangian is positive semi-definite on the subspace tangent to the constraints, the point is a potential local minimum.
*   If it's strictly positive definite, it's a strict local minimum.

**Example:**
Minimize $f(x, y) = x^2 + y^2$
Subject to $h(x, y) = x + y - 1 = 0$

We found $\mathbf{x}^* = (1/2, 1/2)$ and $\lambda^* = -1$.
Lagrangian: $L(x, y, \lambda) = x^2 + y^2 + \lambda(x + y - 1)$

Hessian of $f$: $\nabla^2 f = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$
Hessian of $h$: $\nabla^2 h = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$

Hessian of the Lagrangian w.r.t. $x, y$:
$\nabla_{xx}^2 L(\mathbf{x}^*, \boldsymbol{\lambda}^*) = \nabla^2 f(\mathbf{x}^*) + \lambda^* \nabla^2 h(\mathbf{x}^*)$
$\nabla_{xx}^2 L(1/2, 1/2, -1) = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} + (-1) \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$

Now, we need to consider vectors $\mathbf{z} = [z_1, z_2]^T$ such that $\nabla h(\mathbf{x}^*) \cdot \mathbf{z} = 0$.
$\nabla h(x, y) = [1, 1]$.
So, we need $1 \cdot z_1 + 1 \cdot z_2 = 0 \implies z_1 + z_2 = 0 \implies z_2 = -z_1$.
The vector $\mathbf{z}$ is of the form $[z_1, -z_1]^T = z_1 [1, -1]^T$.

Let's evaluate $\mathbf{z}^T \nabla_{xx}^2 L \mathbf{z}$:
$\mathbf{z}^T \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} \mathbf{z} = [z_1, -z_1] \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} z_1 \\ -z_1 \end{pmatrix}$
$= [2z_1, -2z_1] \begin{pmatrix} z_1 \\ -z_1 \end{pmatrix} = 2z_1^2 + (-2z_1)(-z_1) = 2z_1^2 + 2z_1^2 = 4z_1^2$.

Since $z_1$ can be any non-zero real number, $4z_1^2 > 0$.
Therefore, the second-order sufficient condition is satisfied. This confirms that $(1/2, 1/2)$ is a strict local minimum.

**Important Points to Remember:**
*   Second-order conditions are crucial for classifying critical points found by first-order methods.
*   They involve evaluating the Hessian of the Lagrangian on the subspace tangent to the active constraints.

**Reference:** RRR Chapter 7.4

---

### 3.7 Generalized Lagrangian Multiplier Method

**Concept:** The generalized Lagrangian multiplier method, also known as the augmented Lagrangian method or method of multipliers, is a technique used to solve constrained optimization problems, especially those with equality constraints. It transforms a constrained problem into a sequence of unconstrained (or less constrained) problems by adding a penalty term to the Lagrangian.

**The Augmented Lagrangian Function (for minimization with equality constraints):**
The augmented Lagrangian function $L_A(\mathbf{x}, \boldsymbol{\lambda}, \rho)$ is defined as:
$L_A(\mathbf{x}, \boldsymbol{\lambda}, \rho) = f(\mathbf{x}) + \sum_{i=1}^m \left( \lambda_i h_i(\mathbf{x}) + \frac{\rho}{2} h_i(\mathbf{x})^2 \right)$
where $\rho > 0$ is a penalty parameter.

**Algorithm (Method of Multipliers):**
1.  Choose an initial $\mathbf{x}^0$, $\boldsymbol{\lambda}^0$, and a penalty parameter $\rho_0 > 0$. Set $k=0$.
2.  **Minimize the augmented Lagrangian:** Find $\mathbf{x}^{k+1}$ that minimizes $L_A(\mathbf{x}, \boldsymbol{\lambda}^k, \rho_k)$ with respect to $\mathbf{x}$.
    $\mathbf{x}^{k+1} = \arg \min_{\mathbf{x}} L_A(\mathbf{x}, \boldsymbol{\lambda}^k, \rho_k)$
3.  **Update Lagrange multipliers:** Update the Lagrange multipliers using the formula:
    $\lambda_i^{k+1} = \lambda_i^k + \rho_k h_i(\mathbf{x}^{k+1})$ for $i = 1, \dots, m$.
4.  **Update penalty parameter (optional but recommended):** If the constraints are not satisfied to the desired tolerance, increase $\rho_k$. For example, $\rho_{k+1} = \lambda \rho_k$ where $\lambda > 1$.
5.  Check for convergence. If converged, stop. Otherwise, set $k = k+1$ and go to step 2.

**Advantages:**
*   The augmented Lagrangian method is generally more robust than simple penalty methods because it doesn't require $\rho$ to approach infinity.
*   It can handle non-convex problems, though convergence guarantees are stronger for convex problems.
*   It can be more stable numerically.

**For Equality Constraints Only:**
The gradient of the augmented Lagrangian w.r.t. $\mathbf{x}$ is:
$\nabla_x L_A(\mathbf{x}, \boldsymbol{\lambda}, \rho) = \nabla f(\mathbf{x}) + \sum_{i=1}^m \left( \lambda_i \nabla h_i(\mathbf{x}) + \rho h_i(\mathbf{x}) \nabla h_i(\mathbf{x}) \right)$
Setting this to zero gives:
$\nabla f(\mathbf{x}) + \sum_{i=1}^m (\lambda_i + \rho h_i(\mathbf{x})) \nabla h_i(\mathbf{x}) = \mathbf{0}$

Comparing this to the Lagrange multiplier condition $\nabla f(\mathbf{x}) + \sum_{i=1}^m \lambda_i \nabla h_i(\mathbf{x}) = \mathbf{0}$:
If $\mathbf{x}^*$ is an optimal solution with Lagrange multipliers $\boldsymbol{\lambda}^*$, then at $\mathbf{x}^*$:
$\lambda_i^* = \lambda_i^k + \rho_k h_i(\mathbf{x}^{k+1})$
So, the updated multiplier $\lambda_i^{k+1}$ effectively estimates the true Lagrange multiplier.

**Example:**
Minimize $f(x, y) = x^2 + y^2$
Subject to $h(x, y) = x + y - 1 = 0$

Augmented Lagrangian:
$L_A(x, y, \lambda, \rho) = x^2 + y^2 + \lambda(x + y - 1) + \frac{\rho}{2}(x + y - 1)^2$

Let's start with $\mathbf{x}^0 = (0, 0)$, $\lambda^0 = 0$, $\rho_0 = 1$.

**Iteration 1:**
Minimize $L_A(x, y, 0, 1) = x^2 + y^2 + (x + y - 1)^2 / 2$
$\frac{\partial L_A}{\partial x} = 2x + \frac{2}{2}(x + y - 1)(1) = 2x + x + y - 1 = 3x + y - 1 = 0$
$\frac{\partial L_A}{\partial y} = 2y + \frac{2}{2}(x + y - 1)(1) = 2y + x + y - 1 = x + 3y - 1 = 0$

Solving:
$3x + y = 1$
$x + 3y = 1$
Subtracting the second from the first: $2x - 2y = 0 \implies x = y$.
Substituting into the first equation: $3x + x = 1 \implies 4x = 1 \implies x = 1/4$.
So, $\mathbf{x}^1 = (1/4, 1/4)$.

Update Lagrange multiplier:
$\lambda_1^1 = \lambda_1^0 + \rho_0 h(x^1, y^1) = 0 + 1 \cdot (1/4 + 1/4 - 1) = 0 + 1 \cdot (-1/2) = -1/2$.

Update penalty parameter (if needed, let's keep $\rho=1$ for now for simplicity).

**Iteration 2:**
Minimize $L_A(x, y, -1/2, 1) = x^2 + y^2 - \frac{1}{2}(x + y - 1) + \frac{1}{2}(x + y - 1)^2$
$\frac{\partial L_A}{\partial x} = 2x - \frac{1}{2} + (x + y - 1) = 3x + y - 3/2 = 0$
$\frac{\partial L_A}{\partial y} = 2y - \frac{1}{2} + (x + y - 1) = x + 3y - 3/2 = 0$

Solving:
$3x + y = 3/2$
$x + 3y = 3/2$
Subtracting: $2x - 2y = 0 \implies x = y$.
Substituting: $3x + x = 3/2 \implies 4x = 3/2 \implies x = 3/8$.
So, $\mathbf{x}^2 = (3/8, 3/8)$.

Update Lagrange multiplier:
$h(\mathbf{x}^2) = 3/8 + 3/8 - 1 = 6/8 - 1 = -2/8 = -1/4$.
$\lambda_1^2 = \lambda_1^1 + \rho_0 h(\mathbf{x}^2) = -1/2 + 1 \cdot (-1/4) = -1/2 - 1/4 = -3/4$.

We can see that $\mathbf{x}^k$ is converging to $(1/2, 1/2)$ and $\lambda^k$ is converging to $-1$.

**Reference:** RRR Chapter 7.6

---

### Practice Questions

1.  **Lagrange Multipliers:** Find the point on the plane $2x + 3y - 6z = 0$ that is closest to the point $(1, 1, 1)$. (Hint: Minimize the squared distance).
2.  **Kuhn-Tucker Conditions:** For the problem:
    Minimize $f(x_1, x_2) = x_1^2 + x_2^2$
    Subject to:
    $x_1 + x_2 = 1$
    $x_1 \ge 0$
    $x_2 \ge 0$
    Write down the Kuhn-Tucker conditions and find the optimal solution. Verify if it is a global minimum.
3.  **Second-Order Conditions:** For the problem:
    Minimize $f(x, y) = (x-2)^2 + (y-3)^2$
    Subject to $x + y = 1$
    Find the Lagrange multiplier conditions, solve them, and then use second-order conditions to verify if the solution is a minimum.
4.  **Saddlepoint:** Consider the problem:
    Minimize $f(x, y) = x^2 + y^2$
    Subject to $x^2 + y^2 = 4$
    Find the Lagrange multiplier and verify that the point satisfies the saddlepoint conditions for the Lagrangian $L(x, y, \lambda) = x^2 + y^2 + \lambda(x^2 + y^2 - 4)$.

---

### Answers to Practice Questions

1.  **Lagrange Multipliers:**
    Minimize $f(x, y, z) = (x-1)^2 + (y-1)^2 + (z-1)^2$
    Subject to $h(x, y, z) = 2x + 3y - 6z = 0$

    Lagrangian: $L(x, y, z, \lambda) = (x-1)^2 + (y-1)^2 + (z-1)^2 + \lambda(2x + 3y - 6z)$

    Conditions:
    $\frac{\partial L}{\partial x} = 2(x-1) + 2\lambda = 0 \implies x-1 = -\lambda \implies x = 1 - \lambda$
    $\frac{\partial L}{\partial y} = 2(y-1) + 3\lambda = 0 \implies y-1 = -\frac{3}{2}\lambda \implies y = 1 - \frac{3}{2}\lambda$
    $\frac{\partial L}{\partial z} = 2(z-1) - 6\lambda = 0 \implies z-1 = 3\lambda \implies z = 1 + 3\lambda$
    $\frac{\partial L}{\partial \lambda} = 2x + 3y - 6z = 0$

    Substitute $x, y, z$ into the constraint:
    $2(1 - \lambda) + 3(1 - \frac{3}{2}\lambda) - 6(1 + 3\lambda) = 0$
    $2 - 2\lambda + 3 - \frac{9}{2}\lambda - 6 - 18\lambda = 0$
    $(2+3-6) + (-2 - \frac{9}{2} - 18)\lambda = 0$
    $-1 + (-\frac{4}{2} - \frac{9}{2} - \frac{36}{2})\lambda = 0$
    $-1 - \frac{49}{2}\lambda = 0 \implies \lambda = -\frac{2}{49}$

    Now find $x, y, z$:
    $x = 1 - (-\frac{2}{49}) = 1 + \frac{2}{49} = \frac{51}{49}$
    $y = 1 - \frac{3}{2}(-\frac{2}{49}) = 1 + \frac{3}{49} = \frac{52}{49}$
    $z = 1 + 3(-\frac{2}{49}) = 1 - \frac{6}{49} = \frac{43}{49}$

    The closest point is $(\frac{51}{49}, \frac{52}{49}, \frac{43}{49})$.

2.  **Kuhn-Tucker Conditions:**
    Minimize $f(x_1, x_2) = x_1^2 + x_2^2$
    Subject to:
    $h_1(x_1, x_2) = x_1 + x_2 - 1 = 0$
    $g_1(x_1, x_2) = -x_1 \le 0$
    $g_2(x_1, x_2) = -x_2 \le 0$

    Lagrangian: $L(x_1, x_2, \lambda_1, \mu_1, \mu_2) = x_1^2 + x_2^2 + \lambda_1(x_1 + x_2 - 1) - \mu_1 x_1 - \mu_2 x_2$

    KT Conditions:
    1.  Stationarity:
        $\frac{\partial L}{\partial x_1} = 2x_1 + \lambda_1 - \mu_1 = 0$
        $\frac{\partial L}{\partial x_2} = 2x_2 + \lambda_1 - \mu_2 = 0$
    2.  Primal Feasibility:
        $x_1 + x_2 - 1 = 0$
        $-x_1 \le 0 \implies x_1 \ge 0$
        $-x_2 \le 0 \implies x_2 \ge 0$
    3.  Dual Feasibility: $\mu_1 \ge 0, \mu_2 \ge 0$
    4.  Complementary Slackness: $\mu_1 x_1 = 0, \mu_2 x_2 = 0$

    Consider cases based on complementary slackness:
    *   **Case 1: $x_1 > 0, x_2 > 0$**
        $\mu_1 = 0, \mu_2 = 0$.
        Stationarity: $2x_1 + \lambda_1 = 0$, $2x_2 + \lambda_1 = 0$.
        This implies $2x_1 = 2x_2 \implies x_1 = x_2$.
        Primal feasibility: $x_1 + x_2 - 1 = 0 \implies x_1 + x_1 - 1 = 0 \implies 2x_1 = 1 \implies x_1 = 1/2$.
        So, $x_2 = 1/2$.
        This satisfies $x_1 > 0, x_2 > 0$.
        $\lambda_1 = -2x_1 = -1$.
        This point $(1/2, 1/2)$ is a candidate.

    *   **Case 2: $x_1 = 0, x_2 > 0$**
        Primal feasibility: $0 + x_2 - 1 = 0 \implies x_2 = 1$.
        Complementary slackness: $\mu_2 x_2 = 0 \implies \mu_2 (1) = 0 \implies \mu_2 = 0$. $\mu_1$ can be anything $\ge 0$.
        Stationarity:
        $2(0) + \lambda_1 - \mu_1 = 0 \implies \lambda_1 = \mu_1$.
        $2(1) + \lambda_1 - 0 = 0 \implies 2 + \lambda_1 = 0 \implies \lambda_1 = -2$.
        Since $\lambda_1 = \mu_1$, $\mu_1 = -2$.
        This violates dual feasibility ($\mu_1 \ge 0$). So, $(0, 1)$ is not a KT point.

    *   **Case 3: $x_1 > 0, x_2 = 0$**
        Primal feasibility: $x_1 + 0 - 1 = 0 \implies x_1 = 1$.
        Complementary slackness: $\mu_1 x_1 = 0 \implies \mu_1 (1) = 0 \implies \mu_1 = 0$. $\mu_2$ can be anything $\ge 0$.
        Stationarity:
        $2(1) + 0 - 0 = 0 \implies 2 = 0$. This is a contradiction. So, $(1, 0)$ is not a KT point.

    The only KT point is $(1/2, 1/2)$.

    **Global Minimum Verification:**
    The objective function $f(x_1, x_2) = x_1^2 + x_2^2$ is convex.
    The equality constraint $h_1(x_1, x_2) = x_1 + x_2 - 1$ is affine.
    The inequality constraints are $x_1 \ge 0$ and $x_2 \ge 0$. In the form $g_j(\mathbf{x}) \le 0$, these are $-x_1 \le 0$ and $-x_2 \le 0$. The functions $g_1 = -x_1$ and $g_2 = -x_2$ are concave.
    For a minimization problem, the KT sufficiency theorem requires the inequality constraint functions to be convex.
    However, if we consider the problem as a convex program, then a point satisfying KT conditions is a global minimum.
    Alternatively, we can note that for problems with only equality constraints, convexity of $f$ and affineness of $h$ make the Lagrange multiplier condition sufficient for global optimality. The addition of non-negative constraints on variables $x_1, x_2$ means we are minimizing $x_1^2+x_2^2$ in the first quadrant subject to $x_1+x_2=1$. This line segment lies entirely in the first quadrant, so the non-negativity constraints are "redundant" in the sense that the minimum on the line segment $x_1+x_2=1$ already satisfies them. The minimum of $x_1^2+x_2^2$ on $x_1+x_2=1$ is indeed at $(1/2, 1/2)$.

    So, $(1/2, 1/2)$ is a global minimum.

3.  **Second-Order Conditions:**
    Minimize $f(x, y) = (x-2)^2 + (y-3)^2$
    Subject to $h(x, y) = x + y - 1 = 0$

    Lagrangian: $L(x, y, \lambda) = (x-2)^2 + (y-3)^2 + \lambda(x + y - 1)$

    First-order conditions (Lagrange multipliers):
    $\frac{\partial L}{\partial x} = 2(x-2) + \lambda = 0 \implies 2x - 4 + \lambda = 0$
    $\frac{\partial L}{\partial y} = 2(y-3) + \lambda = 0 \implies 2y - 6 + \lambda = 0$
    $\frac{\partial L}{\partial \lambda} = x + y - 1 = 0$

    From the first two: $2x - 4 = 2y - 6 \implies 2x - 2y = -2 \implies x - y = -1$.
    We have a system:
    $x - y = -1$
    $x + y = 1$
    Adding the two equations: $2x = 0 \implies x = 0$.
    Substituting $x=0$ into $x+y=1 \implies y=1$.
    Now find $\lambda$: $2(0) - 4 + \lambda = 0 \implies \lambda = 4$.

    The candidate optimal point is $(x^*, y^*) = (0, 1)$, with $\lambda^* = 4$.

    Second-order conditions:
    $\nabla^2 f = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$
    $\nabla^2 h = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$

    Hessian of Lagrangian:
    $\nabla_{xx}^2 L(x^*, y^*, \lambda^*) = \nabla^2 f(x^*, y^*) + \lambda^* \nabla^2 h(x^*, y^*)$
    $= \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} + 4 \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$

    Constraint gradient: $\nabla h(x, y) = [1, 1]$.
    We need vectors $\mathbf{z} = [z_1, z_2]^T$ such that $\nabla h \cdot \mathbf{z} = 0$.
    $1 \cdot z_1 + 1 \cdot z_2 = 0 \implies z_1 + z_2 = 0 \implies z_2 = -z_1$.
    So, $\mathbf{z} = [z_1, -z_1]^T$.

    Evaluate $\mathbf{z}^T \nabla_{xx}^2 L \mathbf{z}$:
    $[z_1, -z_1] \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} z_1 \\ -z_1 \end{pmatrix} = [2z_1, -2z_1] \begin{pmatrix} z_1 \\ -z_1 \end{pmatrix}$
    $= 2z_1^2 + 2z_1^2 = 4z_1^2$.

    For any non-zero $\mathbf{z}$, $4z_1^2 > 0$.
    The second-order sufficient condition is satisfied. Thus, $(0, 1)$ is a strict local minimum.

4.  **Saddlepoint:**
    Minimize $f(x, y) = x^2 + y^2$
    Subject to $h(x, y) = x^2 + y^2 - 4 = 0$

    Lagrangian: $L(x, y, \lambda) = x^2 + y^2 + \lambda(x^2 + y^2 - 4)$

    First-order conditions (Lagrange multipliers):
    $\frac{\partial L}{\partial x} = 2x + 2\lambda x = 2x(1 + \lambda) = 0$
    $\frac{\partial L}{\partial y} = 2y + 2\lambda y = 2y(1 + \lambda) = 0$
    $\frac{\partial L}{\partial \lambda} = x^2 + y^2 - 4 = 0$

    From the first two equations, we have two possibilities:
    *   **Case A: $1 + \lambda = 0 \implies \lambda = -1$**
        In this case, $2x(0) = 0$ and $2y(0) = 0$ are satisfied for any $x, y$.
        The constraint is $x^2 + y^2 - 4 = 0$. Any point on the circle $x^2+y^2=4$ satisfies the first-order conditions with $\lambda=-1$.
        The objective function $f(x,y) = x^2+y^2$ has a value of 4 for all points on the constraint $x^2+y^2=4$.
        In this case, any point on the circle is a candidate, and the minimum value is 4.

    *   **Case B: $1 + \lambda \neq 0$, then $x = 0$ and $y = 0$.**
        However, $(0,0)$ does not satisfy the constraint $x^2 + y^2 - 4 = 0$. So, this case yields no solutions.

    Thus, any point $(x, y)$ such that $x^2 + y^2 = 4$ with $\lambda = -1$ is a potential optimal point.
    The objective function $f(x, y) = x^2+y^2$ is constant on the feasible region ($f(x,y)=4$). Therefore, all points on the circle are optimal, and the minimum value is 4.

    **Saddlepoint Verification:**
    Let's pick an arbitrary point on the circle, e.g., $(2, 0)$, and the corresponding $\lambda = -1$.
    Lagrangian: $L(x, y, -1) = x^2 + y^2 - 1(x^2 + y^2 - 4) = x^2 + y^2 - x^2 - y^2 + 4 = 4$.

    1.  **Minimize $L$ w.r.t. $x, y$ for fixed $\lambda = -1$:**
        $L(x, y, -1) = 4$. This is a constant. Its minimum value is 4. The condition is $L(\mathbf{x}^*, \boldsymbol{\lambda}^*) \le L(\mathbf{x}, \boldsymbol{\lambda}^*)$. Since $L$ is constant, this is $4 \le 4$, which is true.
        However, the second-order condition requires the Hessian to be positive semi-definite on the tangent space.
        $\nabla_{xx}^2 L = \nabla^2 f + \lambda \nabla^2 h$.
        $\nabla^2 f = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$.
        $h(x, y) = x^2 + y^2 - 4$. $\nabla^2 h = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$.
        $\nabla_{xx}^2 L = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} + (-1) \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$.
        The Hessian of the Lagrangian is the zero matrix.

        Constraint gradient: $\nabla h = [2x, 2y]$. For a point $(x^*, y^*)$ on the circle, $\nabla h(x^*, y^*) = [2x^*, 2y^*]$.
        The tangent space is the set of $\mathbf{z} = [z_1, z_2]^T$ such that $[2x^*, 2y^*] \cdot [z_1, z_2] = 0 \implies 2x^*z_1 + 2y^*z_2 = 0$.
        For $(2, 0)$, $\nabla h = [4, 0]$. So, $4z_1 = 0 \implies z_1 = 0$. $\mathbf{z} = [0, z_2]^T$.
        Evaluate $\mathbf{z}^T \nabla_{xx}^2 L \mathbf{z} = [0, z_2] \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 0 \\ z_2 \end{pmatrix} = 0$.
        This is $\ge 0$, so the necessary condition is met.
        Since the objective function is constant on the constraint set, all points are optimal. The second-order conditions are degenerate (zero Hessian).

    2.  **Maximize $L$ w.r.t. $\lambda$ for fixed $(x^*, y^*)$:**
        $L(x^*, y^*, \lambda) = 4$. This is constant. The condition $L(\mathbf{x}^*, \boldsymbol{\lambda}^*) \ge L(\mathbf{x}^*, \boldsymbol{\lambda})$ is $4 \ge 4$, which is true.

    The point $(x^2+y^2=4, \lambda=-1)$ satisfies the saddlepoint conditions in a degenerate sense. The objective function is constant on the constraint set, making all feasible points optimal.

**Important Note:** For a maximization problem, the second order condition involves a negative semi-definite Hessian, and the saddlepoint condition involves maximizing w.r.t. $\boldsymbol{\lambda}$ and minimizing w.r.t. $\mathbf{x}$. The sign of $\lambda$ and $\mu$ also flips.

---
This concludes Module 3: Equality Constrained Problems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
