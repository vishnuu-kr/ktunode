---
title: "Lagrangian function– Inequality constrained techniques-KKT conditions-constrained steepest descent method"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 3: Optimization algorithms for solving constrained optimization problems– direct methods – penalty function methods, barrier method"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fef38"
status: "completed"
scrapedAt: "2026-05-23T18:02:37.600Z"
---
Sure, here are comprehensive study notes for the topic "Lagrangian function– Inequality constrained techniques-KKT conditions-constrained steepest descent method" from Module 3 of OPTIMIZATION TECHNIQUES.

---

# OPTIMIZATION TECHNIQUES

## Module 3: Optimization algorithms for solving constrained optimization problems – Direct Methods – Penalty Function Methods, Barrier Method

### Topic: Lagrangian Function, Inequality Constrained Techniques, KKT Conditions, Constrained Steepest Descent Method

**Learning Outcomes:**

*   Understand the concept of the Lagrangian function for equality and inequality constrained optimization problems.
*   Learn about various techniques for handling inequality constraints.
*   Master the Karush-Kuhn-Tucker (KKT) conditions for optimality in constrained optimization.
*   Explore and apply the Constrained Steepest Descent Method to solve constrained optimization problems.

**Course Outcomes Alignment:**

*   **CO4: Apply the various optimization techniques to solve a constrained optimization problem (Knowledge Level: K3)** - This entire topic directly addresses this outcome by introducing fundamental concepts and methods for solving constrained optimization problems.

**Textbook References:**

*   **S.S Rao, "Engineering Optimization, Theory and Practice," 4th Ed., 2012.** (Primary reference for core concepts, KKT conditions, and Lagrangian multipliers).
*   **Xin-She Yang, "Optimization Techniques and Applications with Examples," 2018.** (Provides additional perspectives and examples on constrained optimization).
*   **K. Deb, "Optimization for Engineering Design Algorithms and Examples," 2000.** (Offers practical insights and examples relevant to engineering applications).
*   **J. Arora, "Introduction to Optimization Design," 2004.** (Complements understanding of optimization principles in design contexts).
*   **G. Hadley, "Linear Programming," 2002.** (Relevant for understanding the historical context and foundations of optimization, particularly in relation to linear constraints).
*   **E. KP Chong and S. Hak, "An Introduction to Optimization," 4th Ed., 2013.** (Provides a rigorous mathematical foundation for constrained optimization, including KKT conditions).

---

### 1. The Lagrangian Function

The Lagrangian function is a fundamental tool for transforming a constrained optimization problem into an unconstrained or a more manageable constrained problem. It incorporates the objective function and the constraints using Lagrange multipliers.

**Key Concept:** For an optimization problem with equality constraints, we introduce Lagrange multipliers to create a single function that, when its gradient is set to zero, yields the stationary points of the original problem.

**1.1 Equality Constrained Problems:**

Consider the problem:
Minimize $f(\mathbf{x})$
Subject to $h_i(\mathbf{x}) = 0$, for $i = 1, 2, \ldots, m$

The Lagrangian function, $L(\mathbf{x}, \boldsymbol{\lambda})$, is defined as:

$L(\mathbf{x}, \boldsymbol{\lambda}) = f(\mathbf{x}) + \sum_{i=1}^{m} \lambda_i h_i(\mathbf{x})$

where $\boldsymbol{\lambda} = [\lambda_1, \lambda_2, \ldots, \lambda_m]^T$ are the Lagrange multipliers.

**Important Point:** The Lagrange multipliers $\lambda_i$ are variables that are also optimized. For a minimum of $f(\mathbf{x})$, we typically seek a saddle point of $L(\mathbf{x}, \boldsymbol{\lambda})$. This means we need to find $\mathbf{x}^*$ that minimizes $L$ with respect to $\mathbf{x}$ and $\boldsymbol{\lambda}^*$ that maximizes $L$ with respect to $\boldsymbol{\lambda}$.

**1.2 Inequality Constrained Problems:**

Consider the problem:
Minimize $f(\mathbf{x})$
Subject to $g_j(\mathbf{x}) \le 0$, for $j = 1, 2, \ldots, p$

To handle inequality constraints using the Lagrangian function, we first convert them into equality constraints. This is often done implicitly through the Karush-Kuhn-Tucker (KKT) conditions, which we will discuss later. For now, let's consider a slightly different formulation where we introduce slack variables, although this is less common for defining the Lagrangian directly in this context.

A more direct approach using the Lagrangian for inequality constraints involves introducing multipliers with specific signs and conditions. The Lagrangian for inequality constraints is often expressed as:

$L(\mathbf{x}, \boldsymbol{\mu}) = f(\mathbf{x}) + \sum_{j=1}^{p} \mu_j g_j(\mathbf{x})$

where $\boldsymbol{\mu} = [\mu_1, \mu_2, \ldots, \mu_p]^T$ are the Lagrange multipliers associated with the inequality constraints.

**Important Point:** For a minimization problem with $g_j(\mathbf{x}) \le 0$, the Lagrange multipliers $\mu_j$ associated with active constraints (where $g_j(\mathbf{x}) = 0$) are typically non-negative ($\mu_j \ge 0$). This ensures that if a constraint is active, it penalizes the objective function in the direction that would violate the constraint.

**1.3 Combined Equality and Inequality Constraints:**

For a general problem:
Minimize $f(\mathbf{x})$
Subject to $h_i(\mathbf{x}) = 0$, for $i = 1, \ldots, m$
Subject to $g_j(\mathbf{x}) \le 0$, for $j = 1, \ldots, p$

The Lagrangian function is:
$L(\mathbf{x}, \boldsymbol{\lambda}, \boldsymbol{\mu}) = f(\mathbf{x}) + \sum_{i=1}^{m} \lambda_i h_i(\mathbf{x}) + \sum_{j=1}^{p} \mu_j g_j(\mathbf{x})$

**Reference:** S.S Rao, "Engineering Optimization, Theory and Practice," Chapter 10, discusses the Lagrangian multiplier method for equality and inequality constraints in detail.

---

### 2. Inequality Constrained Techniques

Handling inequality constraints is a core challenge in constrained optimization. Several techniques exist, and the Lagrangian function combined with KKT conditions is a primary theoretical framework. Other methods include:

**2.1 Direct Methods:** These methods attempt to directly incorporate the constraints into the search process.

*   **Penalty Function Methods:** These convert a constrained problem into a sequence of unconstrained problems by adding a penalty to the objective function whenever constraints are violated.
    *   **Exterior Penalty Method:** Penalizes constraint violation by adding a term that grows infinitely as the constraint boundary is approached from the outside.
        *   Example: For $g_j(\mathbf{x}) \le 0$, the penalty term could be $\sum_{j=1}^{p} \frac{1}{\epsilon_k} [\max(0, g_j(\mathbf{x}))]^2$. As $\epsilon_k \to 0$, the solution approaches the feasible region.
    *   **Interior Penalty Method (Barrier Method):** This method keeps the iterates strictly within the feasible region by adding a barrier term that goes to infinity as the iterates approach the boundary of the feasible region.
        *   Example: For $g_j(\mathbf{x}) \le 0$, the barrier term could be $-\sum_{j=1}^{p} r_k \ln(-g_j(\mathbf{x}))$. As $r_k \to 0$, the solution approaches the constraint boundary from the interior.
    *   **Reference:** S.S Rao, "Engineering Optimization, Theory and Practice," Chapter 11, provides a thorough treatment of penalty and barrier methods.

*   **Augmented Lagrangian Methods (Multiplier Methods):** These combine the Lagrangian function with penalty terms, offering better numerical stability and convergence properties compared to pure penalty methods.

**2.2 Indirect Methods (KKT Conditions based):** These methods use necessary (and sometimes sufficient) conditions for optimality.

*   **Lagrange Multiplier Method:** For equality constraints, it involves solving $\nabla L = 0$.
*   **Karush-Kuhn-Tucker (KKT) Conditions:** A generalization of the Lagrange multiplier method to handle inequality constraints.

**2.3 Direct Search Methods:** These methods do not rely on gradients and can handle various constraint types directly, though often with slower convergence. Examples include:
*   Nelder-Mead Simplex Method (for unconstrained, can be adapted).
*   Pattern Search.

**2.4 Gradient-Based Methods for Constrained Problems:** These methods adapt unconstrained gradient-based techniques to incorporate constraints. The Constrained Steepest Descent Method is an example.

---

### 3. Karush-Kuhn-Tucker (KKT) Conditions

The KKT conditions are a set of first-order necessary conditions for a solution to be optimal in a constrained optimization problem. They generalize the Lagrange multiplier conditions to problems with inequality constraints.

**3.1 Problem Formulation:**
Minimize $f(\mathbf{x})$
Subject to $h_i(\mathbf{x}) = 0$, for $i = 1, \ldots, m$
Subject to $g_j(\mathbf{x}) \le 0$, for $j = 1, \ldots, p$

The Lagrangian function is:
$L(\mathbf{x}, \boldsymbol{\lambda}, \boldsymbol{\mu}) = f(\mathbf{x}) + \sum_{i=1}^{m} \lambda_i h_i(\mathbf{x}) + \sum_{j=1}^{p} \mu_j g_j(\mathbf{x})$

**3.2 KKT Conditions:**
For a point $\mathbf{x}^*$ to be a local minimum, there must exist Lagrange multipliers $\boldsymbol{\lambda}^* = [\lambda_1^*, \ldots, \lambda_m^*]^T$ and $\boldsymbol{\mu}^* = [\mu_1^*, \ldots, \mu_p^*]^T$ such that the following conditions are met at $\mathbf{x}^*$:

1.  **Stationarity:** The gradient of the Lagrangian with respect to $\mathbf{x}$ must be zero.
    $\nabla_{\mathbf{x}} L(\mathbf{x}^*, \boldsymbol{\lambda}^*, \boldsymbol{\mu}^*) = \nabla f(\mathbf{x}^*) + \sum_{i=1}^{m} \lambda_i^* \nabla h_i(\mathbf{x}^*) + \sum_{j=1}^{p} \mu_j^* \nabla g_j(\mathbf{x}^*) = \mathbf{0}$

2.  **Primal Feasibility:** The constraints must be satisfied at the optimal point.
    $h_i(\mathbf{x}^*) = 0$, for $i = 1, \ldots, m$
    $g_j(\mathbf{x}^*) \le 0$, for $j = 1, \ldots, p$

3.  **Dual Feasibility:** The Lagrange multipliers for the inequality constraints must be non-negative.
    $\mu_j^* \ge 0$, for $j = 1, \ldots, p$

4.  **Complementary Slackness:** For each inequality constraint, either the constraint is active ($g_j(\mathbf{x}^*) = 0$) or its corresponding multiplier is zero ($\mu_j^* = 0$).
    $\mu_j^* g_j(\mathbf{x}^*) = 0$, for $j = 1, \ldots, p$

**Interpretation:**
*   **Stationarity:** Ensures that the gradient of the objective function is balanced by the gradients of the active constraints, scaled by their respective multipliers.
*   **Primal Feasibility:** The solution must lie within the feasible region.
*   **Dual Feasibility:** If $g_j(\mathbf{x}^*) < 0$ (constraint is inactive), then $\mu_j^* = 0$. This means inactive constraints do not influence the gradient balance. If $g_j(\mathbf{x}^*) = 0$ (constraint is active), then $\mu_j^* \ge 0$. This means active constraints contribute to the gradient balance, and their multipliers are non-negative for minimization problems.
*   **Complementary Slackness:** This condition elegantly links the feasibility of the constraint and the value of its multiplier.

**3.3 Sufficient Conditions:**
The KKT conditions are necessary for optimality. For them to be sufficient for a *global* minimum, the objective function $f(\mathbf{x})$ must be convex, and the inequality constraint functions $g_j(\mathbf{x})$ must also be convex, and the equality constraint functions $h_i(\mathbf{x})$ must be affine (linear). If these conditions hold, any point satisfying the KKT conditions is a global minimum.

**Reference:** S.S Rao, "Engineering Optimization, Theory and Practice," Chapter 10.5, provides a detailed derivation and explanation of KKT conditions. Chong and Hak's "An Introduction to Optimization" also offers a rigorous treatment in Chapter 7.

**Example:**
Minimize $f(x, y) = x^2 + y^2$
Subject to $g_1(x, y) = x + y - 1 \le 0$

Lagrangian: $L(x, y, \mu_1) = x^2 + y^2 + \mu_1(x + y - 1)$

KKT Conditions:
1.  Stationarity:
    $\frac{\partial L}{\partial x} = 2x + \mu_1 = 0 \implies x = -\frac{\mu_1}{2}$
    $\frac{\partial L}{\partial y} = 2y + \mu_1 = 0 \implies y = -\frac{\mu_1}{2}$
2.  Primal Feasibility:
    $x + y - 1 \le 0$
3.  Dual Feasibility:
    $\mu_1 \ge 0$
4.  Complementary Slackness:
    $\mu_1 (x + y - 1) = 0$

From Stationarity, we have $x = y$.
Substitute into Complementary Slackness: $\mu_1 (2x - 1) = 0$.
This gives two cases:

**Case 1: $\mu_1 = 0$**
If $\mu_1 = 0$, then from Stationarity, $x = 0$ and $y = 0$.
Primal Feasibility: $0 + 0 - 1 = -1 \le 0$. This is satisfied.
So, $(x^*, y^*) = (0, 0)$ with $\mu_1^* = 0$ is a candidate KKT point.
$f(0,0) = 0$.

**Case 2: $2x - 1 = 0 \implies x = 1/2$**
If $x = 1/2$, since $x=y$, then $y = 1/2$.
From Stationarity: $2(1/2) + \mu_1 = 0 \implies 1 + \mu_1 = 0 \implies \mu_1 = -1$.
However, this violates Dual Feasibility ($\mu_1 \ge 0$). So this case is not a valid KKT point.

Let's re-examine Case 1. If $x=0, y=0$, then $f(0,0) = 0$. The constraint $x+y-1 \le 0$ is satisfied ($0+0-1 = -1 \le 0$).
Is this the minimum? Consider a point on the boundary where $x+y-1=0$, e.g., $x=1/2, y=1/2$.
$f(1/2, 1/2) = (1/2)^2 + (1/2)^2 = 1/4 + 1/4 = 1/2$.
This value is greater than $f(0,0)=0$.

Let's reconsider the complementary slackness.
$\mu_1 (x + y - 1) = 0$.
We also have $x = -\mu_1/2$ and $y = -\mu_1/2$. So $x=y$.
The constraint is $x + y - 1 \le 0$, so $2x - 1 \le 0 \implies x \le 1/2$.
And $\mu_1 \ge 0$.

Substitute $x = -\mu_1/2$ into $x \le 1/2$:
$-\mu_1/2 \le 1/2 \implies -\mu_1 \le 1 \implies \mu_1 \ge -1$.
This condition is already covered by $\mu_1 \ge 0$.

Now consider complementary slackness: $\mu_1(2x - 1) = 0$.
If $\mu_1 = 0$, then $x = 0$. $f(0,0) = 0$. Constraint is $0+0-1 \le 0$, which is satisfied.
If $2x - 1 = 0$, then $x = 1/2$. Since $x=y$, $y=1/2$.
Constraint: $1/2 + 1/2 - 1 = 0 \le 0$, satisfied.
From stationarity: $2x + \mu_1 = 0 \implies 2(1/2) + \mu_1 = 0 \implies 1 + \mu_1 = 0 \implies \mu_1 = -1$.
This violates $\mu_1 \ge 0$. So this point is not a KKT point.

Thus, the only KKT point is $(0,0)$ with $\mu_1=0$.
$f(0,0) = 0$.
Let's check the gradient of $f$ at $(0,0)$: $\nabla f(0,0) = [0, 0]^T$.
$\nabla g_1(x,y) = [1, 1]^T$.
Stationarity: $\nabla f(0,0) + \mu_1^* \nabla g_1(0,0) = [0, 0]^T + 0 \cdot [1, 1]^T = [0, 0]^T$. This holds.
The point $(0,0)$ is indeed a valid KKT point.

**What if the minimum is on the constraint boundary?**
Consider Minimize $f(x, y) = (x-2)^2 + (y-2)^2$
Subject to $g_1(x, y) = x + y - 1 \le 0$

Lagrangian: $L(x, y, \mu_1) = (x-2)^2 + (y-2)^2 + \mu_1(x + y - 1)$

KKT Conditions:
1.  Stationarity:
    $\frac{\partial L}{\partial x} = 2(x-2) + \mu_1 = 0 \implies x = 2 - \frac{\mu_1}{2}$
    $\frac{\partial L}{\partial y} = 2(y-2) + \mu_1 = 0 \implies y = 2 - \frac{\mu_1}{2}$
2.  Primal Feasibility:
    $x + y - 1 \le 0$
3.  Dual Feasibility:
    $\mu_1 \ge 0$
4.  Complementary Slackness:
    $\mu_1 (x + y - 1) = 0$

From Stationarity, $x = y$.
Substitute into Complementary Slackness: $\mu_1 (2x - 1) = 0$.
This again leads to two cases:

**Case 1: $\mu_1 = 0$**
If $\mu_1 = 0$, then $x = 2$ and $y = 2$.
Primal Feasibility: $2 + 2 - 1 = 3 \le 0$. This is **violated**. So this case is not feasible.

**Case 2: $2x - 1 = 0 \implies x = 1/2$**
If $x = 1/2$, since $x=y$, then $y = 1/2$.
Primal Feasibility: $1/2 + 1/2 - 1 = 0 \le 0$. This is satisfied.
From Stationarity: $2(1/2 - 2) + \mu_1 = 0 \implies 2(-3/2) + \mu_1 = 0 \implies -3 + \mu_1 = 0 \implies \mu_1 = 3$.
Dual Feasibility: $\mu_1 = 3 \ge 0$. Satisfied.

So, $(x^*, y^*) = (1/2, 1/2)$ with $\mu_1^* = 3$ is a candidate KKT point.
$f(1/2, 1/2) = (1/2 - 2)^2 + (1/2 - 2)^2 = (-3/2)^2 + (-3/2)^2 = 9/4 + 9/4 = 18/4 = 4.5$.

The function $f(x,y)$ is convex, and the constraint is linear (affine), so the KKT conditions are sufficient for a global minimum.
The minimum occurs at $(1/2, 1/2)$ with a function value of 4.5. This point is on the boundary of the feasible region.

---

### 4. Constrained Steepest Descent Method

The Constrained Steepest Descent (CSD) method, also known as the projected gradient method or active set method (in some variations), is an iterative technique for solving constrained optimization problems. It aims to move the current iterate in the steepest descent direction while staying within the feasible region.

**Key Idea:** At each iteration, the algorithm determines a search direction that satisfies the active constraints and descends the objective function. If the new iterate violates any previously inactive constraints, those constraints become active in the next iteration.

This method is directly related to the KKT conditions, as it tries to satisfy them iteratively.

**4.1 Algorithm Steps (Conceptual):**

Let $\mathbf{x}_k$ be the current iterate.

1.  **Identify Active Constraints:** Determine the set of constraints $J_k = \{j \mid g_j(\mathbf{x}_k) \approx 0 \text{ or } g_j(\mathbf{x}_k) < 0 \text{ and } \mu_j^{(k)} > 0 \}$. Initially, this set is empty.
2.  **Determine Search Direction $\mathbf{d}_k$:**
    *   **If no constraints are active or violated (feasible region):** Use the steepest descent direction from unconstrained optimization: $\mathbf{d}_k = -\nabla f(\mathbf{x}_k)$.
    *   **If constraints are active:** The search direction must satisfy the active constraints in a linearized sense. This means that for all $j \in J_k$, the dot product of the direction $\mathbf{d}_k$ with the gradient of the constraint must be zero (to stay on the linearized constraint surface):
        $\nabla g_j(\mathbf{x}_k)^T \mathbf{d}_k = 0$ for all $j \in J_k$.
        Subject to this, choose $\mathbf{d}_k$ to minimize the rate of increase of $f(\mathbf{x}_k)$, i.e., minimize $\nabla f(\mathbf{x}_k)^T \mathbf{d}_k$.

    This subproblem can be formulated as a quadratic programming problem:
    Minimize $\frac{1}{2} \mathbf{d}_k^T \mathbf{d}_k$
    Subject to $\nabla g_j(\mathbf{x}_k)^T \mathbf{d}_k = 0$ for $j \in J_k$.
    And potentially $\nabla g_j(\mathbf{x}_k)^T \mathbf{d}_k \le 0$ for some inactive constraints that are close to violation.

    A common approach is to project the negative gradient of the objective function onto the null space of the gradients of the active constraints.
    Let $\mathbf{A}$ be a matrix whose rows are $\nabla g_j(\mathbf{x}_k)^T$ for $j \in J_k$.
    The projection matrix is $\mathbf{P} = \mathbf{I} - \mathbf{A}^T (\mathbf{A}\mathbf{A}^T)^{-1} \mathbf{A}$.
    Then, the projected gradient is $\mathbf{d}_k = -\mathbf{P} \nabla f(\mathbf{x}_k)$.
    If $\mathbf{d}_k = \mathbf{0}$, and the KKT conditions are met, we stop.

3.  **Line Search:** Perform a line search along $\mathbf{d}_k$ to find a step size $\alpha_k > 0$ such that $\mathbf{x}_{k+1} = \mathbf{x}_k + \alpha_k \mathbf{d}_k$ is a better point. This involves ensuring feasibility (or minimal violation) and descent of $f$.
    *   A common strategy is to choose the largest $\alpha_k$ such that $\mathbf{x}_{k+1}$ remains feasible with respect to the original constraints, or satisfies some relaxed feasibility criteria if exact feasibility is hard to maintain.
    *   A one-dimensional search is performed to minimize $\phi(\alpha) = f(\mathbf{x}_k + \alpha \mathbf{d}_k)$ over $\alpha > 0$ subject to $g_j(\mathbf{x}_k + \alpha \mathbf{d}_k) \le 0$ for all $j$.

4.  **Update and Iterate:**
    *   If $\mathbf{x}_{k+1}$ is sufficiently close to the optimum (e.g., KKT conditions are satisfied to a tolerance), terminate.
    *   Otherwise, update $k \leftarrow k+1$ and go to step 1.

**4.2 Handling Violations and Moving to New Constraints:**

*   **If $\mathbf{x}_{k+1}$ becomes infeasible for some inactive constraint $g_m(\mathbf{x}_{k+1}) > 0$:**
    *   This implies that the step size $\alpha_k$ was too large, or the direction was inappropriate for that constraint.
    *   The constraint $g_m$ must be added to the active set $J_{k+1}$ for the next iteration.
    *   The step size may need to be reduced, or a new direction computed that accounts for this newly active constraint.

*   **If the projected gradient $\mathbf{d}_k = \mathbf{0}$ but KKT conditions are not met:**
    *   This indicates a potential problem with the active set selection.
    *   One common issue is that a constraint that was inactive might need to become active.
    *   Consider constraints $g_j$ for which $\mu_j$ would be negative if we were to satisfy stationarity for $f$ plus the currently active constraints. These constraints are candidates for being "dropped" or having their status re-evaluated.
    *   For problems with only inequality constraints, if $\mathbf{d}_k = \mathbf{0}$ and $\nabla f(\mathbf{x}_k)^T \mathbf{d}_k = 0$ (which is true if $\mathbf{d}_k = \mathbf{0}$), but KKT conditions aren't met, it means some $\mu_j$ for active $j$ are negative.
    *   In such a situation, one might try to "release" a constraint by removing it from the active set, compute a new search direction, and restart the line search.

**Reference:** S.S Rao, "Engineering Optimization, Theory and Practice," Chapter 10.7, discusses the gradient projection method, which is closely related to the Constrained Steepest Descent. Arora's "Introduction to Optimization Design" also covers projected gradient methods.

**Example (Conceptual):**
Minimize $f(x,y) = -(x+y)$
Subject to $g_1(x,y) = x \le 2$
Subject to $g_2(x,y) = y \le 2$
Subject to $g_3(x,y) = x + y \ge 1 \implies -x - y + 1 \le 0$. Let's redefine $g_3 = -x - y + 1 \le 0$.

Let's start at $\mathbf{x}_0 = (0,0)$.
$\nabla f = [-1, -1]^T$.
$g_1(0,0) = 0 \le 2$ (satisfied, inactive)
$g_2(0,0) = 0 \le 2$ (satisfied, inactive)
$g_3(0,0) = -0 - 0 + 1 = 1 \le 0$ (violated, infeasible).

**Issue:** The initial point is infeasible. The CSD method typically assumes a feasible starting point. For infeasible starting points, other methods like sequential quadratic programming (SQP) or augmented Lagrangian methods are more suitable, or a globalization strategy that handles infeasibility is needed.

Let's assume a feasible starting point: $\mathbf{x}_0 = (0.5, 0.5)$.
$\nabla f = [-1, -1]^T$.
$g_1(0.5, 0.5) = 0.5 \le 2$ (inactive)
$g_2(0.5, 0.5) = 0.5 \le 2$ (inactive)
$g_3(0.5, 0.5) = -0.5 - 0.5 + 1 = 0 \le 0$ (active)

Active set $J_0 = \{3\}$.
$\nabla g_1 = [1, 0]^T$
$\nabla g_2 = [0, 1]^T$
$\nabla g_3 = [-1, -1]^T$

We need a direction $\mathbf{d}_0$ such that $\nabla g_3(\mathbf{x}_0)^T \mathbf{d}_0 = 0$.
$[-1, -1] \mathbf{d}_0 = 0 \implies -d_{0x} - d_{0y} = 0 \implies d_{0y} = -d_{0x}$.
So, $\mathbf{d}_0$ is of the form $[k, -k]^T$.

We want to descend $f$, so we want to minimize $\nabla f(\mathbf{x}_0)^T \mathbf{d}_0 = [-1, -1] [k, -k]^T = -k + k = 0$.
This means any direction satisfying the active constraint yields a zero directional derivative in this specific example. This can happen when the objective function gradient is parallel to the constraint gradient.

Let's use the projection approach to find a direction:
$\nabla f(\mathbf{x}_0) = [-1, -1]^T$.
Active constraint gradient matrix $\mathbf{A}$ (one row for $g_3$): $\mathbf{A} = [-1, -1]$.
$\mathbf{A}^T = \begin{bmatrix} -1 \\ -1 \end{bmatrix}$.
$\mathbf{A}\mathbf{A}^T = [-1, -1] \begin{bmatrix} -1 \\ -1 \end{bmatrix} = 1 + 1 = 2$.
$(\mathbf{A}\mathbf{A}^T)^{-1} = 1/2$.

Projection matrix $\mathbf{P} = \mathbf{I} - \mathbf{A}^T (\mathbf{A}\mathbf{A}^T)^{-1} \mathbf{A}$
$\mathbf{P} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} - \begin{bmatrix} -1 \\ -1 \end{bmatrix} (1/2) [-1, -1]$
$\mathbf{P} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} - \begin{bmatrix} -1 \\ -1 \end{bmatrix} [-1/2, -1/2]$
$\mathbf{P} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} - \begin{bmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{bmatrix} = \begin{bmatrix} 1/2 & -1/2 \\ -1/2 & 1/2 \end{bmatrix}$.

Projected gradient $\mathbf{d}_0 = -\mathbf{P} \nabla f(\mathbf{x}_0)$
$\mathbf{d}_0 = -\begin{bmatrix} 1/2 & -1/2 \\ -1/2 & 1/2 \end{bmatrix} \begin{bmatrix} -1 \\ -1 \end{bmatrix}$
$\mathbf{d}_0 = -\begin{bmatrix} -1/2 + 1/2 \\ 1/2 - 1/2 \end{bmatrix} = -\begin{bmatrix} 0 \\ 0 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$.

The projected gradient is zero. This indicates that at $\mathbf{x}_0=(0.5, 0.5)$, the KKT conditions might be satisfied for some multipliers.
Let's check KKT for $\mathbf{x}_0 = (0.5, 0.5)$.
$f(x,y) = -(x+y)$. $\nabla f = [-1, -1]^T$.
$g_1=x-2 \le 0$, $\nabla g_1 = [1, 0]^T$.
$g_2=y-2 \le 0$, $\nabla g_2 = [0, 1]^T$.
$g_3=-x-y+1 \le 0$, $\nabla g_3 = [-1, -1]^T$.

Lagrangian: $L = -(x+y) + \mu_1(x-2) + \mu_2(y-2) + \mu_3(-x-y+1)$.
Stationarity:
$\frac{\partial L}{\partial x} = -1 + \mu_1 - \mu_3 = 0 \implies \mu_1 - \mu_3 = 1$
$\frac{\partial L}{\partial y} = -1 + \mu_2 - \mu_3 = 0 \implies \mu_2 - \mu_3 = 1$

Primal Feasibility:
$0.5 \le 2$ (ok)
$0.5 \le 2$ (ok)
$-0.5 - 0.5 + 1 = 0 \le 0$ (ok, $g_3$ is active)

Dual Feasibility: $\mu_1 \ge 0, \mu_2 \ge 0, \mu_3 \ge 0$.

Complementary Slackness:
$\mu_1 (0.5 - 2) = 0 \implies \mu_1 (-1.5) = 0 \implies \mu_1 = 0$.
$\mu_2 (0.5 - 2) = 0 \implies \mu_2 (-1.5) = 0 \implies \mu_2 = 0$.
$\mu_3 (0) = 0$. (Any $\mu_3$ is fine here, but from stationarity, we need to check.)

Substitute $\mu_1 = 0$ and $\mu_2 = 0$ into stationarity equations:
$0 - \mu_3 = 1 \implies \mu_3 = -1$.
This violates $\mu_3 \ge 0$.
So $(0.5, 0.5)$ is not a KKT point. The projected gradient being zero only means the current point is a stationary point *within the subspace defined by the active constraints*.

Since $\mathbf{d}_0 = \mathbf{0}$, and KKT conditions are not met, we need to adjust the active set.
We found $\mu_1=0, \mu_2=0, \mu_3=-1$.
The negative $\mu_3$ suggests the gradient of $g_3$ is pointing in a direction that contradicts the descent direction.

Let's try to re-evaluate the constraints. The constraint $g_3$ is active.
If we "release" $g_3$ from the active set, the new active set is empty.
Then $\mathbf{d}_0$ would be $-\nabla f = [1, 1]^T$.
Now we do a line search: $\mathbf{x}(\alpha) = (0.5, 0.5) + \alpha [1, 1] = (0.5+\alpha, 0.5+\alpha)$.
We need to check feasibility:
$g_1: 0.5 + \alpha \le 2 \implies \alpha \le 1.5$
$g_2: 0.5 + \alpha \le 2 \implies \alpha \le 1.5$
$g_3: -(0.5+\alpha) - (0.5+\alpha) + 1 \le 0 \implies -1 - 2\alpha + 1 \le 0 \implies -2\alpha \le 0 \implies \alpha \ge 0$.
So we can choose $\alpha$ up to $1.5$.
The function to minimize is $f(\alpha) = -(0.5+\alpha + 0.5+\alpha) = -(1+2\alpha)$.
To maximize $f$, we need to minimize $\alpha$.
But we want to descend $f$ for minimization, so we want to maximize $-(1+2\alpha)$. This means minimizing $1+2\alpha$, so we choose the smallest possible $\alpha$, which is $\alpha \to 0$. This is not useful.

Let's reconsider the problem: Minimize $f(x,y) = -(x+y)$.
This function decreases as $x$ and $y$ increase. We want to increase $x$ and $y$ as much as possible while staying within the bounds $x \le 2, y \le 2, x+y \ge 1$.
The unconstrained minimum is at $(-\infty, -\infty)$.
The maximum of $-(x+y)$ subject to the constraints will be at a point where $x$ and $y$ are large.
The constraint $x+y \ge 1$ is the binding constraint that limits the objective function's behavior in the decreasing direction.
The region is bounded by $x=2, y=2$ and $x+y=1$.
The minimum of $-(x+y)$ will be where $x+y$ is maximum, within the feasible region.
The feasible region is a triangle with vertices $(1,0), (0,1), (2,2)$.
The point $(2,2)$ maximizes $x+y$.
$f(2,2) = -(2+2) = -4$.
$g_1(2,2) = 2 \le 2$ (active)
$g_2(2,2) = 2 \le 2$ (active)
$g_3(2,2) = -2-2+1 = -3 \le 0$ (inactive)

Let's check KKT at $(2,2)$.
$\nabla f = [-1, -1]^T$.
Active constraints: $g_1, g_2$.
$\nabla g_1 = [1, 0]^T$, $\nabla g_2 = [0, 1]^T$.
Lagrangian: $L = -(x+y) + \mu_1(x-2) + \mu_2(y-2)$.
Stationarity:
$\frac{\partial L}{\partial x} = -1 + \mu_1 = 0 \implies \mu_1 = 1$.
$\frac{\partial L}{\partial y} = -1 + \mu_2 = 0 \implies \mu_2 = 1$.

Primal Feasibility:
$2 \le 2$ (ok)
$2 \le 2$ (ok)
$-2-2+1 = -3 \le 0$ (ok)

Dual Feasibility: $\mu_1=1 \ge 0, \mu_2=1 \ge 0$. (ok)

Complementary Slackness:
$\mu_1 (2-2) = 0 \implies 1 \cdot 0 = 0$ (ok)
$\mu_2 (2-2) = 0 \implies 1 \cdot 0 = 0$ (ok)
The inactive constraint $g_3$ has $\mu_3=0$ by default.

So, $(2,2)$ with $\mu_1=1, \mu_2=1, \mu_3=0$ is a KKT point.
Since the objective is to minimize $-(x+y)$, this means maximizing $x+y$. The point $(2,2)$ achieves the maximum sum of $x+y$ within the feasible region.

The CSD method needs a robust way to handle situations where the projected gradient is zero but KKT conditions are not met. This often involves managing the active set based on the signs of Lagrange multipliers derived from linearized KKT conditions.

---

### 5. Important Points to Remember

*   **Lagrangian Function:** A powerful tool to incorporate constraints into the objective function using Lagrange multipliers.
*   **KKT Conditions:** Necessary (and often sufficient) conditions for optimality in constrained optimization. They link the gradients of the objective and constraint functions through multipliers, and enforce feasibility and complementary slackness.
*   **Active vs. Inactive Constraints:** Constraints that are met with equality at the optimum are active; those met with strict inequality are inactive. Only active constraints influence the optimal solution through their Lagrange multipliers.
*   **Dual Feasibility ($\mu_j \ge 0$ for minimization):** This ensures that active constraints contribute "penalties" correctly to prevent violation.
*   **Complementary Slackness ($\mu_j g_j(\mathbf{x}) = 0$):** A core condition that dictates the relationship between constraint activity and multiplier values.
*   **Constrained Steepest Descent:** An iterative method that projects the steepest descent direction onto the active constraint manifold. Requires careful handling of active set updates and feasibility.
*   **Feasible Starting Point:** Many constrained optimization algorithms, including CSD, perform best or require a feasible starting point.

---

### 6. Practice Questions and Exercises

**Question 1:**
Find the KKT conditions for the following problem:
Minimize $f(x, y, z) = x^2 + y^2 + z^2$
Subject to $h_1(x, y, z) = x + y + z - 3 = 0$
Subject to $g_1(x, y, z) = x - 2 \le 0$
Subject to $g_2(x, y, z) = y - 2 \le 0$

**Answer 1:**
Lagrangian: $L(x, y, z, \lambda_1, \mu_1, \mu_2) = x^2 + y^2 + z^2 + \lambda_1(x + y + z - 3) + \mu_1(x - 2) + \mu_2(y - 2)$

KKT Conditions:
1.  **Stationarity:**
    $\frac{\partial L}{\partial x} = 2x + \lambda_1 + \mu_1 = 0$
    $\frac{\partial L}{\partial y} = 2y + \lambda_1 + \mu_2 = 0$
    $\frac{\partial L}{\partial z} = 2z + \lambda_1 = 0$
2.  **Primal Feasibility:**
    $x + y + z - 3 = 0$
    $x - 2 \le 0$
    $y - 2 \le 0$
3.  **Dual Feasibility:**
    $\mu_1 \ge 0$
    $\mu_2 \ge 0$
4.  **Complementary Slackness:**
    $\mu_1 (x - 2) = 0$
    $\mu_2 (y - 2) = 0$

**Question 2:**
Consider the problem: Minimize $f(x) = x^2$ subject to $g_1(x) = x - 1 \le 0$.
Find the optimal solution and the corresponding KKT multipliers.

**Answer 2:**
Lagrangian: $L(x, \mu_1) = x^2 + \mu_1(x - 1)$

KKT Conditions:
1.  Stationarity: $2x + \mu_1 = 0 \implies x = -\frac{\mu_1}{2}$
2.  Primal Feasibility: $x - 1 \le 0$
3.  Dual Feasibility: $\mu_1 \ge 0$
4.  Complementary Slackness: $\mu_1(x - 1) = 0$

Case 1: $\mu_1 = 0$.
From stationarity, $x = 0$.
Primal feasibility: $0 - 1 = -1 \le 0$ (satisfied).
Point is $(0,0)$. $f(0) = 0$.

Case 2: $x - 1 = 0 \implies x = 1$.
From stationarity: $2(1) + \mu_1 = 0 \implies \mu_1 = -2$.
This violates dual feasibility ($\mu_1 \ge 0$). This case is invalid.

The only valid KKT point is $x=0$ with $\mu_1=0$. The optimal solution is $x^* = 0$.
$f(0) = 0$. The constraint is inactive.

**Question 3:**
Explain the main difference between the exterior penalty method and the interior penalty (barrier) method for handling inequality constraints.

**Answer 3:**
*   **Exterior Penalty Method:**
    *   Starts from an infeasible point.
    *   Adds a penalty term that increases as the solution moves *away* from the feasible region (into the infeasible region).
    *   The penalty increases infinitely as constraint violation occurs.
    *   The problem is converted into a sequence of unconstrained minimization problems with decreasing penalty parameters $\epsilon_k \to 0$.

*   **Interior Penalty (Barrier) Method:**
    *   Requires a feasible starting point.
    *   Adds a barrier term that increases infinitely as the solution approaches the *boundary* of the feasible region from the inside.
    *   The solution is always kept within the feasible region.
    *   The problem is converted into a sequence of unconstrained minimization problems with increasing barrier parameters $r_k \to 0$ (or decreasing as in $\frac{1}{r_k}$).

**Question 4:**
Describe the fundamental principle behind the Constrained Steepest Descent method when dealing with active constraints.

**Answer 4:**
The fundamental principle is to ensure that the search direction $\mathbf{d}_k$ satisfies the linearized versions of the currently active constraints. This is achieved by projecting the negative gradient of the objective function onto the null space of the gradients of the active constraints. This projection ensures that any movement along the direction $\mathbf{d}_k$ does not violate the active constraints (in a linearized sense) and that the movement is in the direction of steepest descent within that constrained subspace.

---

This concludes the study notes for the Lagrangian function, inequality constrained techniques, KKT conditions, and the Constrained Steepest Descent Method. Remember to consult the referenced textbooks for more detailed derivations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
