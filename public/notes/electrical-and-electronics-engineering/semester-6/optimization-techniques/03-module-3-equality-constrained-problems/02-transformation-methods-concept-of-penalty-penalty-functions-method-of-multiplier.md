---
title: "Transformation methods - Concept of penalty - penalty functions - Method of Multipliers"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 3: Equality constrained problems "
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36697"
status: "completed"
scrapedAt: "2026-05-23T16:30:29.817Z"
---
# OPTIMIZATION TECHNIQUES - Module 3: Equality Constrained Problems

## Topic: Transformation Methods - Concept of Penalty - Penalty Functions - Method of Multipliers

---

### **Introduction**

This module delves into optimization problems with equality constraints. We will explore transformation methods, which convert a constrained problem into an unconstrained one, making it amenable to standard unconstrained optimization techniques. This involves understanding the concept of penalty, constructing penalty functions, and then introducing the Method of Multipliers as a powerful technique for solving these problems.

---

### **1. Transformation Methods**

**Concept:**

Transformation methods aim to convert a constrained optimization problem into an equivalent unconstrained problem. This is achieved by incorporating the constraints into the objective function itself, usually in a way that penalizes constraint violation.

**General Form of a Constrained Optimization Problem:**

Minimize $f(\mathbf{x})$
Subject to:
$h_i(\mathbf{x}) = 0$, for $i = 1, 2, \ldots, m$
$g_j(\mathbf{x}) \le 0$, for $j = 1, 2, \ldots, p$

where $\mathbf{x} \in \mathbb{R}^n$.

For this module, we focus on problems with **equality constraints**:

Minimize $f(\mathbf{x})$
Subject to:
$h_i(\mathbf{x}) = 0$, for $i = 1, 2, \ldots, m$

**Key Idea:** If we find a solution that violates the constraints, we want our modified objective function to be significantly worse than if the constraints were satisfied.

---

### **2. Concept of Penalty**

**Definition:** A penalty is a measure that is added to the objective function to discourage or penalize any deviation from the constraints. The magnitude of the penalty typically increases as the violation of the constraint becomes more severe.

**Purpose:**
*   To transform a constrained problem into an unconstrained one.
*   To guide the search process towards the feasible region.

---

### **3. Penalty Functions**

Penalty functions are mathematical expressions that quantify the "penalty" for violating constraints. They are added to the original objective function to create a new, unconstrained objective function.

**3.1. Exterior Penalty Functions**

These functions penalize only solutions that lie *outside* the feasible region. They are zero within the feasible region.

**General Form for Equality Constraints:**

The augmented objective function $P(\mathbf{x}, r)$ is formed by adding a penalty term for each equality constraint:

$P(\mathbf{x}, r) = f(\mathbf{x}) + r \sum_{i=1}^{m} \phi(h_i(\mathbf{x}))$

where:
*   $f(\mathbf{x})$ is the original objective function.
*   $r$ is a positive penalty parameter ($r > 0$).
*   $\phi(h_i(\mathbf{x}))$ is a penalty term that is zero when $h_i(\mathbf{x}) = 0$ and positive when $h_i(\mathbf{x}) \neq 0$.

**Common Penalty Terms for Equality Constraints:**

*   **Quadratic Penalty Function:**
    $\phi(h_i(\mathbf{x})) = [h_i(\mathbf{x})]^2$
    The augmented objective function becomes:
    $P(\mathbf{x}, r) = f(\mathbf{x}) + r \sum_{i=1}^{m} [h_i(\mathbf{x})]^2$

    *   **Rationale:** The squared term ensures that the penalty is always non-negative and grows quadratically with the constraint violation. This smooths the function and makes it differentiable.

*   **Absolute Value Penalty Function:**
    $\phi(h_i(\mathbf{x})) = |h_i(\mathbf{x})|$
    The augmented objective function becomes:
    $P(\mathbf{x}, r) = f(\mathbf{x}) + r \sum_{i=1}^{m} |h_i(\mathbf{x})|$

    *   **Rationale:** Simpler than the quadratic penalty, but the absolute value function is not differentiable at zero, which can pose challenges for gradient-based optimization methods.

**How Penalty Parameters Work:**

*   As $r \to \infty$, the penalty term becomes dominant, forcing the minimizer of $P(\mathbf{x}, r)$ to satisfy the constraints more strictly.
*   The strategy is to solve a sequence of unconstrained problems for increasing values of $r$. For a small $r$, the solution will be close to the unconstrained minimum of $f(\mathbf{x})$. As $r$ increases, the solution is "pulled" towards the feasible region.

**Algorithm using Exterior Penalty Functions:**

1.  Choose an initial value for the penalty parameter, $r_0 > 0$.
2.  Choose a sequence of increasing penalty parameters, $\{r_k\}$, such that $r_k \to \infty$ as $k \to \infty$.
3.  For each $k = 0, 1, 2, \ldots$:
    *   Solve the unconstrained problem: Minimize $P(\mathbf{x}, r_k) = f(\mathbf{x}) + r_k \sum_{i=1}^{m} \phi(h_i(\mathbf{x}))$. Let the solution be $\mathbf{x}_k$.
    *   Check for convergence. If convergence criteria are met, stop.
4.  The sequence $\{\mathbf{x}_k\}$ converges to the optimal solution of the original constrained problem.

**Advantages of Exterior Penalty Functions:**
*   Transforms a constrained problem into an unconstrained one.
*   The penalty function is well-behaved (continuous and often differentiable) if $f(\mathbf{x})$ and $h_i(\mathbf{x})$ are.

**Disadvantages of Exterior Penalty Functions:**
*   **Ill-conditioning:** As $r$ increases, the penalty function can become very steep, leading to numerical difficulties in optimization algorithms (e.g., requiring many iterations or small step sizes).
*   **Feasible region problem:** The minimizer of $P(\mathbf{x}, r_k)$ might be outside the feasible region, especially for small $r_k$.

**(Referenced from Ravindran, Ragsdell, & Reklaitis, Chapter 6: Penalty Function Methods)**

---

### **4. Method of Multipliers (Augmented Lagrangian Method)**

The Method of Multipliers, also known as the Augmented Lagrangian Method, combines the ideas of penalty functions and Lagrange multipliers. It aims to overcome the ill-conditioning problem of pure penalty methods by incorporating Lagrange multipliers directly into the augmented objective function.

**Lagrange Multipliers:**
For a problem: Minimize $f(\mathbf{x})$ subject to $h_i(\mathbf{x}) = 0$, the Lagrangian function is:
$L(\mathbf{x}, \boldsymbol{\lambda}) = f(\mathbf{x}) + \sum_{i=1}^{m} \lambda_i h_i(\mathbf{x})$

The Karush-Kuhn-Tucker (KKT) conditions for optimality involve finding $\mathbf{x}^*$ and $\boldsymbol{\lambda}^*$ such that $\nabla_{\mathbf{x}} L(\mathbf{x}^*, \boldsymbol{\lambda}^*) = \mathbf{0}$ and $h_i(\mathbf{x}^*) = 0$.

**Augmented Lagrangian Function:**

The Augmented Lagrangian function for equality constraints is:

$L_A(\mathbf{x}, \boldsymbol{\lambda}, r) = f(\mathbf{x}) + \sum_{i=1}^{m} \left[ \lambda_i h_i(\mathbf{x}) + \frac{r}{2} [h_i(\mathbf{x})]^2 \right]$

where:
*   $f(\mathbf{x})$ is the original objective function.
*   $\boldsymbol{\lambda} = (\lambda_1, \ldots, \lambda_m)$ is the vector of Lagrange multipliers.
*   $r$ is a positive penalty parameter ($r > 0$).

**Rationale:**
The term $\lambda_i h_i(\mathbf{x})$ acts like the standard Lagrangian term, trying to satisfy the constraints. The term $\frac{r}{2} [h_i(\mathbf{x})]^2$ is the quadratic penalty term, which becomes active and dominates when the constraints are significantly violated. The addition of the Lagrange multiplier term helps to "pull" the solution towards the feasible region even for moderate values of $r$, mitigating the ill-conditioning problem.

**The Method of Multipliers Algorithm (for equality constraints):**

The core idea is to iteratively update both the Lagrange multipliers and the penalty parameter, or to fix $r$ and update $\mathbf{x}$ and $\boldsymbol{\lambda}$. A common approach is:

1.  Choose an initial guess for the Lagrange multipliers $\boldsymbol{\lambda}^0$ and a penalty parameter $r_0 > 0$. Set $k = 0$.
2.  **Minimize the Augmented Lagrangian:** Solve the unconstrained minimization problem:
    Minimize $L_A(\mathbf{x}, \boldsymbol{\lambda}^k, r_k) = f(\mathbf{x}) + \sum_{i=1}^{m} \left[ \lambda_i^k h_i(\mathbf{x}) + \frac{r_k}{2} [h_i(\mathbf{x})]^2 \right]$
    Let the solution be $\mathbf{x}^{k+1}$.
3.  **Update Lagrange Multipliers:** Update the Lagrange multipliers using the following rule (which is motivated by the gradient of the Lagrangian):
    $\lambda_i^{k+1} = \lambda_i^k + r_k h_i(\mathbf{x}^{k+1})$ for $i = 1, \ldots, m$.
4.  **Check for Convergence:** If the constraints are satisfied to a satisfactory degree (e.g., $|h_i(\mathbf{x}^{k+1})| \le \epsilon$ for all $i$) and the change in $\boldsymbol{\lambda}$ is small, then terminate.
5.  **Increase Penalty Parameter (Optional but common):** If convergence is not achieved, increase the penalty parameter $r_{k+1} = \alpha r_k$, where $\alpha > 1$ (e.g., $\alpha = 2$ or $10$). Increment $k$ and go to step 2.

**Why does this work?**
The update rule for $\boldsymbol{\lambda}$ effectively adjusts the multipliers to better approximate the true Lagrange multipliers at the optimal solution. By keeping $r$ at a reasonable level and adjusting $\boldsymbol{\lambda}$, we avoid the need for extremely large penalty parameters, thus reducing ill-conditioning.

**(Referenced from Ravindran, Ragsdell, & Reklaitis, Chapter 6: Augmented Lagrangian Methods)**

**Example:**

Minimize $f(x_1, x_2) = x_1^2 + x_2^2$
Subject to $h_1(x_1, x_2) = x_1 + x_2 - 1 = 0$

**Augmented Lagrangian:**
$L_A(x_1, x_2, \lambda, r) = x_1^2 + x_2^2 + \lambda(x_1 + x_2 - 1) + \frac{r}{2}(x_1 + x_2 - 1)^2$

**Step 1: Minimize $L_A$**
Take partial derivatives with respect to $x_1$ and $x_2$ and set them to zero:
$\frac{\partial L_A}{\partial x_1} = 2x_1 + \lambda + r(x_1 + x_2 - 1) = 0$
$\frac{\partial L_A}{\partial x_2} = 2x_2 + \lambda + r(x_1 + x_2 - 1) = 0$

From these two equations, we get $2x_1 + \lambda = 2x_2 + \lambda$, which implies $x_1 = x_2$.

Substitute $x_1 = x_2$ into the constraint:
$x_1 + x_1 - 1 = 0 \implies 2x_1 = 1 \implies x_1 = 0.5$.
So, $x_2 = 0.5$.

The exact solution to this problem is $x_1^*=0.5, x_2^*=0.5$.

Now let's follow the Method of Multipliers:

**Iteration 1:**
*   Choose $\lambda^0 = 0$, $r_0 = 1$.
*   Minimize $L_A(x_1, x_2, 0, 1) = x_1^2 + x_2^2 + (x_1 + x_2 - 1)^2$.
    $\frac{\partial L_A}{\partial x_1} = 2x_1 + 2(x_1 + x_2 - 1) = 4x_1 + 2x_2 - 2 = 0 \implies 2x_1 + x_2 = 1$
    $\frac{\partial L_A}{\partial x_2} = 2x_2 + 2(x_1 + x_2 - 1) = 2x_1 + 4x_2 - 2 = 0 \implies x_1 + 2x_2 = 1$
    Solving these equations: $x_1 = 1/3, x_2 = 1/3$. So, $\mathbf{x}^1 = (1/3, 1/3)$.
*   Update $\lambda$: $\lambda^1 = \lambda^0 + r_0 h_1(\mathbf{x}^1) = 0 + 1 * (1/3 + 1/3 - 1) = 1 * (-1/3) = -1/3$.
*   Check convergence: $|h_1(\mathbf{x}^1)| = |-1/3| = 1/3 > \epsilon$. Continue.

**Iteration 2:**
*   Use $\lambda^1 = -1/3$, $r_1 = \alpha r_0 = 2 * 1 = 2$.
*   Minimize $L_A(x_1, x_2, -1/3, 2) = x_1^2 + x_2^2 + (-1/3)(x_1 + x_2 - 1) + (x_1 + x_2 - 1)^2$.
    $\frac{\partial L_A}{\partial x_1} = 2x_1 - 1/3 + 2(x_1 + x_2 - 1) = 4x_1 + 2x_2 - 7/3 = 0 \implies 12x_1 + 6x_2 = 7$
    $\frac{\partial L_A}{\partial x_2} = 2x_2 - 1/3 + 2(x_1 + x_2 - 1) = 2x_1 + 4x_2 - 7/3 = 0 \implies 6x_1 + 12x_2 = 7$
    Solving these equations:
    Multiply first by 2: $24x_1 + 12x_2 = 14$
    Subtract second: $18x_1 = 7 \implies x_1 = 7/18$.
    $x_2 = (7 - 6x_1)/12 = (7 - 6(7/18))/12 = (7 - 7/3)/12 = (14/3)/12 = 14/36 = 7/18$.
    So, $\mathbf{x}^2 = (7/18, 7/18)$.
*   Update $\lambda$: $\lambda^2 = \lambda^1 + r_1 h_1(\mathbf{x}^2) = -1/3 + 2 * (7/18 + 7/18 - 1) = -1/3 + 2 * (14/18 - 1) = -1/3 + 2 * (-4/18) = -1/3 - 8/18 = -1/3 - 4/9 = -3/9 - 4/9 = -7/9$.
*   Check convergence: $|h_1(\mathbf{x}^2)| = |7/18 + 7/18 - 1| = |14/18 - 1| = |-4/18| = |-2/9| = 2/9$. This is closer to 0 than 1/3. Continue.

The process would continue with increasing $r$ until convergence is reached. The Lagrange multiplier $\lambda$ is also converging towards $-1$, which is the true Lagrange multiplier for this problem.

**Advantages of Method of Multipliers:**
*   **Reduced Ill-conditioning:** Compared to pure penalty methods, it is less prone to numerical issues caused by very large penalty parameters.
*   **Faster Convergence:** Often converges faster than pure penalty methods.
*   **Can handle non-differentiable penalty terms:** The method can be adapted to use non-differentiable penalty terms (e.g., absolute value) if required, although the augmented Lagrangian is typically formulated with quadratic penalties for differentiability.

**Disadvantages of Method of Multipliers:**
*   Requires estimating or iterating on Lagrange multipliers, which adds complexity to the algorithm.
*   The augmented Lagrangian function can still become ill-conditioned if $r$ is not increased appropriately.

**(Referenced from Ravindran, Ragsdell, & Reklaitis, Chapter 6: Augmented Lagrangian Methods)**

---

### **5. Relationship to Other Optimization Concepts**

*   **Lagrange Multipliers:** The method of multipliers is a direct extension of the concept of Lagrange multipliers, aiming to find them through an iterative process while also managing the constraint satisfaction.
*   **KKT Conditions:** The iterative updates in the method of multipliers are designed to bring the solution closer to satisfying the KKT conditions for optimality.
*   **Unconstrained Optimization:** The core step in both penalty methods and the method of multipliers is to solve an unconstrained optimization subproblem. This means we can use standard unconstrained optimization techniques (like Newton's method, BFGS, etc.) to solve these subproblems.

---

### **6. Learning Outcome Alignment**

*   **CO1 (Single Variable):** While the techniques are presented in a multivariable context, the underlying principles of modifying objective functions to incorporate constraints apply to single-variable problems as well. The concept of penalty and augmentation can be visualized on a 1D curve.
*   **CO2 (Several Variables):** This module directly addresses optimization with several variables subject to equality constraints, which is the core of the topic.
*   **CO3 (Linear Programming):** Although the focus is on general nonlinear programming, the idea of transforming a problem to make it easier to solve is common in LP. However, LP problems typically have specific algorithms (like Simplex) that don't directly use these penalty/multiplier transformation methods in the same way.
*   **CO4 (Constrained Problems):** This module is a fundamental part of understanding and applying optimization techniques for constrained problems, specifically equality constraints.
*   **CO5 (Search Techniques):** The unconstrained subproblems generated by these methods require search techniques (e.g., line search, descent methods) to find their minima.

---

### **7. Key Points to Remember**

*   **Transformation methods** convert constrained problems into unconstrained ones by modifying the objective function.
*   **Penalty functions** add a term to the objective that penalizes constraint violation.
*   **Exterior penalty functions** only penalize violations *outside* the feasible region. They require increasing penalty parameters and can suffer from ill-conditioning.
*   The **Method of Multipliers (Augmented Lagrangian)** combines penalty functions with Lagrange multipliers to improve numerical stability and convergence speed by avoiding excessively large penalty parameters.
*   The augmented Lagrangian function for equality constraints is $L_A(\mathbf{x}, \boldsymbol{\lambda}, r) = f(\mathbf{x}) + \sum_{i=1}^{m} \left[ \lambda_i h_i(\mathbf{x}) + \frac{r}{2} [h_i(\mathbf{x})]^2 \right]$.
*   The Method of Multipliers iteratively updates the decision variables $\mathbf{x}$ by minimizing $L_A$ and updates the Lagrange multipliers $\boldsymbol{\lambda}$ using the rule $\lambda_i^{k+1} = \lambda_i^k + r_k h_i(\mathbf{x}^{k+1})$.

---

### **8. Practice Questions and Exercises**

**Question 1:**
Consider the problem: Minimize $f(x) = x^2$ subject to $h(x) = x - 1 = 0$.
a) Formulate the augmented Lagrangian function $L_A(x, \lambda, r)$ for this problem.
b) Outline the steps of the Method of Multipliers for solving this problem.
c) If you start with $x^0 = 0$, $\lambda^0 = 0$, and $r_0 = 1$, what is the solution $\mathbf{x}^1$ after the first minimization step? What is $\lambda^1$?

**Answer 1:**
a) $L_A(x, \lambda, r) = x^2 + \lambda(x - 1) + \frac{r}{2}(x - 1)^2$

b) The Method of Multipliers would involve:
    1. Choose initial $\lambda^0$, $r_0$. Set $k=0$.
    2. Minimize $L_A(x, \lambda^k, r_k)$ with respect to $x$ to find $x^{k+1}$.
    3. Update $\lambda^{k+1} = \lambda^k + r_k h(x^{k+1})$.
    4. Check for convergence. If not converged, increase $r_{k+1}$ and repeat from step 2.

c) **First minimization step:**
   Minimize $L_A(x, 0, 1) = x^2 + (x - 1)^2$.
   Take derivative with respect to $x$: $\frac{d L_A}{dx} = 2x + 2(x - 1) = 4x - 2$.
   Set derivative to zero: $4x - 2 = 0 \implies x = 0.5$.
   So, $\mathbf{x}^1 = 0.5$.

   **Update Lagrange multiplier:**
   $\lambda^1 = \lambda^0 + r_0 h(x^1) = 0 + 1 * (0.5 - 1) = 1 * (-0.5) = -0.5$.

**Question 2:**
Explain the primary difference between exterior penalty functions and the Method of Multipliers. What problem does the Method of Multipliers aim to solve that is inherent in exterior penalty methods?

**Answer 2:**
The primary difference lies in how they incorporate constraint satisfaction. Exterior penalty functions solely add a penalty term that increases with constraint violation. The Method of Multipliers, however, augments the objective function with both a penalty term *and* a term involving the Lagrange multipliers.

The Method of Multipliers aims to solve the **ill-conditioning problem** inherent in exterior penalty methods. As the penalty parameter ($r$) in exterior penalty methods increases to enforce stricter constraint satisfaction, the resulting augmented objective function can become very steep or "ill-conditioned." This makes it numerically difficult for optimization algorithms to find the minimum, often requiring very small step sizes or a large number of iterations. By incorporating Lagrange multipliers, the Method of Multipliers allows for smaller penalty parameters while still achieving convergence, thereby mitigating ill-conditioning.

**Question 3:**
Consider the problem: Minimize $f(x_1, x_2) = (x_1-1)^2 + (x_2-2)^2$ subject to $h_1(x_1, x_2) = x_1 - x_2 = 0$.
a) Write down the Augmented Lagrangian function $L_A(\mathbf{x}, \boldsymbol{\lambda}, r)$ for this problem.
b) What are the gradients of $L_A$ with respect to $x_1$ and $x_2$? (These would be used to find the minimum of $L_A$ in each iteration).

**Answer 3:**
a) The Augmented Lagrangian function is:
$L_A(x_1, x_2, \lambda_1, r) = (x_1-1)^2 + (x_2-2)^2 + \lambda_1 (x_1 - x_2) + \frac{r}{2} (x_1 - x_2)^2$

b) The gradients are:
$\frac{\partial L_A}{\partial x_1} = 2(x_1-1) + \lambda_1 + r(x_1 - x_2)$
$\frac{\partial L_A}{\partial x_2} = 2(x_2-2) - \lambda_1 + r(x_1 - x_2) \cdot (-1) = 2(x_2-2) - \lambda_1 - r(x_1 - x_2)$

These gradients would be set to zero and solved for $x_1$ and $x_2$ in each iteration of the Method of Multipliers.

---

This concludes the notes for Module 3, Topic: Transformation Methods - Concept of Penalty - Penalty Functions - Method of Multipliers. Please review these concepts thoroughly to prepare for further discussions on constrained optimization.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
