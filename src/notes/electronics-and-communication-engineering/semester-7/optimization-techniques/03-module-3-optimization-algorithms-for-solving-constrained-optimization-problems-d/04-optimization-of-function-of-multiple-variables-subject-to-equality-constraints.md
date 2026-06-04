---
title: "Optimization of function of multiple variables subject to equality constraints"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 3: Optimization algorithms for solving constrained optimization problems– direct methods"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff566"
status: "completed"
scrapedAt: "2026-05-23T18:08:46.203Z"
---
# Optimization Techniques: Module 3 - Direct Methods for Constrained Optimization

## Topic: Optimization of Function of Multiple Variables Subject to Equality Constraints

This module focuses on direct methods for solving optimization problems where the objective function depends on multiple variables and is subject to one or more equality constraints. These methods aim to directly find the optimal solution by manipulating the problem formulation.

### Learning Outcomes:

*   Understand the theoretical basis of direct methods for equality constrained optimization.
*   Apply elimination methods to reduce the number of variables and solve the constrained problem.
*   Apply penalty and augmented Lagrangian methods for solving equality constrained optimization problems.
*   Analyze the advantages and disadvantages of different direct methods.
*   Connect these methods to real-world engineering applications.

### Course Outcomes Alignment:

*   **CO1 (K2):** While this module primarily deals with constrained optimization, understanding the formulation of these problems relies on basic calculus, which is the foundation for CO1. We will implicitly be formulating optimization problems with equality constraints.
*   **CO4 (K3):** This is the core outcome for this topic. We will be applying various direct optimization techniques to solve problems with equality constraints.

---

### 1. Introduction to Equality Constrained Optimization

Optimization problems with equality constraints involve finding the minimum (or maximum) of an objective function $f(\mathbf{x})$ subject to one or more equality constraints $g_i(\mathbf{x}) = 0$ for $i = 1, 2, \ldots, m$.

**Problem Formulation:**

Minimize $f(\mathbf{x})$
Subject to:
$g_i(\mathbf{x}) = 0$, for $i = 1, 2, \ldots, m$
where $\mathbf{x} = [x_1, x_2, \ldots, x_n]^T$ is the vector of design variables.

**Key Concepts:**

*   **Feasible Region:** The set of all $\mathbf{x}$ that satisfy the equality constraints.
*   **Constraint Qualification:** Conditions that ensure the existence of Lagrange multipliers and the applicability of certain optimality conditions. For equality constraints, a common qualification is that the gradients of the active constraints are linearly independent at the solution.

**Reference:**
*   **S.S. Rao, "Engineering Optimization, Theory and Practice," Chapter 8:** This chapter provides a foundational understanding of constrained optimization problems, including those with equality constraints.

---

### 2. Direct Methods: The Concept of Elimination

Direct methods for equality constrained optimization aim to transform the constrained problem into an unconstrained one by eliminating one or more variables using the equality constraints.

#### 2.1 Elimination of Variables

If the equality constraints can be algebraically solved for some variables in terms of others, we can substitute these expressions into the objective function. This reduces the number of independent variables, effectively converting the problem into an unconstrained one with a smaller number of variables.

**Procedure:**

1.  **Identify a solvable constraint:** Choose an equality constraint $g_i(\mathbf{x}) = 0$ that can be solved explicitly for one variable, say $x_k$, in terms of the remaining $n-1$ variables.
    *   Example: If $g_1(x_1, x_2, x_3) = x_1 + x_2 + x_3 - 5 = 0$, we can express $x_1 = 5 - x_2 - x_3$.
2.  **Substitute:** Substitute the expression for $x_k$ into the objective function $f(\mathbf{x})$ and all other equality constraints.
3.  **New Unconstrained Problem:** This results in a new objective function, say $\bar{f}(\tilde{\mathbf{x}})$, where $\tilde{\mathbf{x}}$ is the vector of the remaining $n-1$ independent variables. The problem is now to minimize $\bar{f}(\tilde{\mathbf{x}})$ without any explicit constraints.
4.  **Solve Unconstrained Problem:** Solve this new unconstrained problem using any of the unconstrained optimization techniques (e.g., gradient descent, Newton's method).

**Advantages:**

*   Conceptually simple.
*   Reduces the problem to an unconstrained one, allowing the use of well-established unconstrained methods.

**Disadvantages:**

*   **Not always possible:** It's often difficult or impossible to explicitly solve the constraints for one variable in terms of others, especially for non-linear or complex constraints.
*   **Increased complexity:** Even if possible, the substitution can lead to a very complex and non-linear objective function, making it harder to solve.
*   **Loss of original structure:** The original problem structure might be lost, making it harder to interpret the results.

**Example (Rao, Chapter 8):**

Minimize $f(x_1, x_2) = x_1^2 + x_2^2$
Subject to $g(x_1, x_2) = x_1 + x_2 - 1 = 0$

**Solution using Elimination:**

1.  From the constraint, $x_1 = 1 - x_2$.
2.  Substitute this into the objective function:
    $f(1-x_2, x_2) = (1-x_2)^2 + x_2^2 = 1 - 2x_2 + x_2^2 + x_2^2 = 2x_2^2 - 2x_2 + 1$.
3.  Let the new objective function be $\bar{f}(x_2) = 2x_2^2 - 2x_2 + 1$.
4.  To find the minimum, take the derivative with respect to $x_2$ and set it to zero:
    $\frac{d\bar{f}}{dx_2} = 4x_2 - 2 = 0$
    $x_2 = 1/2$
5.  Substitute $x_2 = 1/2$ back into the constraint equation:
    $x_1 = 1 - x_2 = 1 - 1/2 = 1/2$.
6.  The optimal solution is $\mathbf{x}^* = [1/2, 1/2]^T$.

---

### 3. Methods Based on Transforming to Unconstrained Problems

While direct elimination is a form of transformation, other methods also transform the constrained problem into an unconstrained one, but in a different way. These methods don't explicitly solve for variables.

#### 3.1 Penalty Methods

Penalty methods convert a constrained optimization problem into a sequence of unconstrained problems by adding a penalty term to the objective function. This penalty is incurred when the constraints are violated.

**Concept:**

The idea is to create a new objective function that is very large whenever a constraint is violated. As the penalty parameter becomes larger, the solution to the unconstrained problem approaches the solution to the original constrained problem.

**Types of Penalty Functions:**

*   **Exterior Penalty Functions:** These are used when the feasible region is defined by inequality constraints. For equality constraints, they are less commonly used directly, but the concept can be adapted.
*   **Interior Penalty Functions:** Used for inequality constraints where the solution must stay within a certain region.

For equality constraints, we can construct a penalty term that is zero when the constraint is satisfied and positive when it is violated.

**General Form of a Penalty Function (for equality constraints):**

$\phi(\mathbf{x}, \rho) = f(\mathbf{x}) + \rho \sum_{i=1}^m [g_i(\mathbf{x})]^2$

where:
*   $f(\mathbf{x})$ is the original objective function.
*   $g_i(\mathbf{x}) = 0$ are the equality constraints.
*   $\rho$ is a positive penalty parameter.
*   $[g_i(\mathbf{x})]^2$ is the penalty term. It is zero when $g_i(\mathbf{x}) = 0$ and positive otherwise. Squaring ensures the penalty is always non-negative.

**Algorithm (Sequential Unconstrained Minimization Technique - SUMT):**

1.  Choose an initial penalty parameter $\rho_0 > 0$ and a sequence of decreasing positive values $\{\rho_k\}$ such that $\rho_k \to 0$ as $k \to \infty$. (Alternatively, increase $\rho_k$ if dealing with violation, but for equality constraint penalties, we typically seek to satisfy them). A more common approach for equality constraints is to increase $\rho$ to enforce satisfaction.
2.  For each $k = 0, 1, 2, \ldots$:
    a.  Solve the unconstrained problem:
        Minimize $\phi(\mathbf{x}, \rho_k) = f(\mathbf{x}) + \rho_k \sum_{i=1}^m [g_i(\mathbf{x})]^2$
    b.  Let $\mathbf{x}_k$ be the optimal solution of this unconstrained problem.
3.  As $k \to \infty$, $\mathbf{x}_k$ converges to the optimal solution $\mathbf{x}^*$ of the original constrained problem.

**Example (Rao, Chapter 8):**

Minimize $f(x_1, x_2) = x_1^2 + x_2^2$
Subject to $g(x_1, x_2) = x_1 + x_2 - 1 = 0$

**Solution using Exterior Penalty Method:**

1.  Form the penalty function:
    $\phi(x_1, x_2, \rho) = x_1^2 + x_2^2 + \rho (x_1 + x_2 - 1)^2$
2.  To find the minimum, we take partial derivatives with respect to $x_1$ and $x_2$ and set them to zero.

    $\frac{\partial \phi}{\partial x_1} = 2x_1 + 2\rho (x_1 + x_2 - 1) = 0$
    $x_1 + \rho x_1 + \rho x_2 - \rho = 0 \implies (1+\rho)x_1 + \rho x_2 = \rho$  (Eq 1)

    $\frac{\partial \phi}{\partial x_2} = 2x_2 + 2\rho (x_1 + x_2 - 1) = 0$
    $x_2 + \rho x_1 + \rho x_2 - \rho = 0 \implies \rho x_1 + (1+\rho) x_2 = \rho$  (Eq 2)

3.  Solve the system of linear equations (Eq 1 and Eq 2) for $x_1$ and $x_2$.
    Subtracting Eq 2 from Eq 1:
    $(1+\rho)x_1 - \rho x_1 + \rho x_2 - (1+\rho)x_2 = 0$
    $x_1 - x_2 = 0 \implies x_1 = x_2$

    Substitute $x_1 = x_2$ into Eq 1:
    $(1+\rho)x_1 + \rho x_1 = \rho$
    $(1+2\rho)x_1 = \rho$
    $x_1 = \frac{\rho}{1+2\rho}$

    Since $x_1 = x_2$, we have $x_2 = \frac{\rho}{1+2\rho}$.
    The solution for a given $\rho$ is $\mathbf{x}(\rho) = \left[\frac{\rho}{1+2\rho}, \frac{\rho}{1+2\rho}\right]^T$.

4.  To find the overall solution, we take the limit as $\rho \to \infty$:
    $x_1^* = \lim_{\rho \to \infty} \frac{\rho}{1+2\rho} = \lim_{\rho \to \infty} \frac{1}{1/\rho+2} = \frac{1}{2}$
    $x_2^* = \lim_{\rho \to \infty} \frac{\rho}{1+2\rho} = \lim_{\rho \to \infty} \frac{1}{1/\rho+2} = \frac{1}{2}$

    The optimal solution is $\mathbf{x}^* = [1/2, 1/2]^T$.

**Advantages:**

*   Converts constrained problems to a sequence of unconstrained problems, which are easier to solve.
*   Can be applied to a wide range of problems, including those with non-linear constraints.

**Disadvantages:**

*   **Ill-conditioning:** As $\rho$ becomes large, the penalty function can become ill-conditioned, making it numerically difficult to solve the unconstrained subproblems accurately.
*   **Slow convergence:** If $\rho$ is not increased sufficiently rapidly, the convergence can be slow.
*   **Requires many iterations:** Often requires a large number of iterations and careful tuning of $\rho$.

**Reference:**
*   **S.S. Rao, "Engineering Optimization, Theory and Practice," Chapter 14:** This chapter covers penalty function methods in detail.
*   **Deb K, "Optimization for Engineering Design Algorithms and Examples," Chapter 6:** Discusses penalty functions for constrained optimization.

---

#### 3.2 Augmented Lagrangian (Multiplier) Methods

Augmented Lagrangian methods combine the ideas of penalty methods and Lagrange multipliers. They aim to improve the convergence properties of penalty methods by introducing Lagrange multipliers directly into the penalty function. This allows for a solution to be found even with a finite penalty parameter.

**Lagrangian Function:**

For a problem with equality constraints, the Lagrangian function is:
$L(\mathbf{x}, \boldsymbol{\lambda}) = f(\mathbf{x}) + \sum_{i=1}^m \lambda_i g_i(\mathbf{x})$
where $\boldsymbol{\lambda} = [\lambda_1, \lambda_2, \ldots, \lambda_m]^T$ are the Lagrange multipliers.

The KKT (Karush-Kuhn-Tucker) conditions for optimality involve the gradient of the Lagrangian being zero and the constraints being satisfied:
$\nabla_x L(\mathbf{x}^*, \boldsymbol{\lambda}^*) = \nabla f(\mathbf{x}^*) + \sum_{i=1}^m \lambda_i^* \nabla g_i(\mathbf{x}^*) = 0$
$g_i(\mathbf{x}^*) = 0$, for $i = 1, \ldots, m$

**Augmented Lagrangian Function:**

The augmented Lagrangian function (Hestenes-Powell-Rockafellar or HPR function) is given by:

$\mathcal{L}(\mathbf{x}, \boldsymbol{\lambda}, \rho) = f(\mathbf{x}) + \sum_{i=1}^m \left[ \lambda_i g_i(\mathbf{x}) + \frac{\rho}{2} [g_i(\mathbf{x})]^2 \right]$

or a variation:
$\mathcal{L}(\mathbf{x}, \boldsymbol{\lambda}, \rho) = f(\mathbf{x}) + \sum_{i=1}^m \frac{1}{2\rho} \left[ (\lambda_i + \rho g_i(\mathbf{x}))^2 - \lambda_i^2 \right]$

where:
*   $f(\mathbf{x})$ is the objective function.
*   $g_i(\mathbf{x}) = 0$ are the equality constraints.
*   $\boldsymbol{\lambda}$ are the Lagrange multipliers.
*   $\rho > 0$ is the penalty parameter.

**Algorithm:**

The augmented Lagrangian method typically involves an iterative process that updates both $\mathbf{x}$ and $\boldsymbol{\lambda}$:

1.  **Initialization:** Choose an initial point $\mathbf{x}_0$, initial Lagrange multipliers $\boldsymbol{\lambda}_0$, and an initial penalty parameter $\rho_0 > 0$. Set $k = 0$.
2.  **Minimize the Augmented Lagrangian:** For the current $\boldsymbol{\lambda}_k$ and $\rho_k$, solve the unconstrained minimization problem:
    $\mathbf{x}_{k+1} = \arg\min_{\mathbf{x}} \mathcal{L}(\mathbf{x}, \boldsymbol{\lambda}_k, \rho_k)$
    This step typically uses an unconstrained optimization method (e.g., Newton's method).
3.  **Update Lagrange Multipliers:** Update the Lagrange multipliers based on the constraint violation at $\mathbf{x}_{k+1}$:
    $\lambda_{i, k+1} = \lambda_i_k + \rho_k g_i(\mathbf{x}_{k+1})$
4.  **Update Penalty Parameter (Optional but often necessary):** If the constraints are not sufficiently satisfied, increase $\rho$. A common strategy is to increase $\rho$ by a factor (e.g., $\rho_{k+1} = \beta \rho_k$ with $\beta > 1$) if the constraint violation does not decrease significantly.
5.  **Check for Convergence:** If convergence criteria are met (e.g., $\nabla \mathcal{L} \approx 0$ and constraints are satisfied within a tolerance), terminate. Otherwise, increment $k$ and go to step 2.

**Advantages:**

*   **Improved Convergence:** Generally converges faster than pure penalty methods and is less prone to ill-conditioning.
*   **Finite Penalty Parameter:** Can achieve convergence with a finite value of $\rho$, avoiding the need for $\rho \to \infty$.
*   **Provides Lagrange Multipliers:** The method directly yields estimates of the Lagrange multipliers, which have important economic interpretations (sensitivity of the objective to the constraints).

**Disadvantages:**

*   **Requires Solving Unconstrained Subproblems:** Each iteration requires solving an unconstrained optimization problem, which can still be computationally expensive.
*   **Tuning $\rho$:** The choice and update strategy for $\rho$ can still affect performance.
*   **Complexity:** The formulation can be more complex than simple penalty methods.

**Example (Conceptual):**

Consider the same problem:
Minimize $f(x_1, x_2) = x_1^2 + x_2^2$
Subject to $g(x_1, x_2) = x_1 + x_2 - 1 = 0$

Augmented Lagrangian:
$\mathcal{L}(x_1, x_2, \lambda, \rho) = x_1^2 + x_2^2 + \lambda (x_1 + x_2 - 1) + \frac{\rho}{2} (x_1 + x_2 - 1)^2$

To minimize this with respect to $x_1$ and $x_2$ for fixed $\lambda$ and $\rho$:
$\frac{\partial \mathcal{L}}{\partial x_1} = 2x_1 + \lambda + \rho (x_1 + x_2 - 1) = 0$
$\frac{\partial \mathcal{L}}{\partial x_2} = 2x_2 + \lambda + \rho (x_1 + x_2 - 1) = 0$

Solving these gives $x_1 = x_2$.
Substituting into the constraint: $x_1 + x_1 - 1 = 0 \implies 2x_1 = 1 \implies x_1 = 1/2$.
So, $x_2 = 1/2$.

Now, update $\lambda$:
$\lambda_{k+1} = \lambda_k + \rho_k g(x_{k+1}) = \lambda_k + \rho_k (1/2 + 1/2 - 1) = \lambda_k + \rho_k (0) = \lambda_k$.
This implies that if the constraints are perfectly satisfied at the minimum of the augmented Lagrangian, the multipliers don't change. In practice, an iterative unconstrained solver will find an $\mathbf{x}_{k+1}$ that is close to satisfying the constraints.

**References:**
*   **S.S. Rao, "Engineering Optimization, Theory and Practice," Chapter 14:** Discusses augmented Lagrangian methods.
*   **Chong E.K.P., Hak S.H., "An Introduction to Optimization," Chapter 9:** Provides a detailed treatment of multiplier methods.
*   **Arora J, "Introduction to Optimization Design," Chapter 10:** Covers penalty and multiplier methods.

---

### 4. Direct Methods based on KKT Conditions (Brief Mention for Contrast)

While this topic is about "direct methods," it's worth noting that other classes of methods directly use the optimality conditions (like KKT conditions). These are often called **indirect methods** or **search methods based on KKT conditions**.

Examples include:
*   **Sequential Quadratic Programming (SQP):** Solves a sequence of quadratic programming subproblems that approximate the original problem.
*   **Newton's Method for KKT Systems:** Directly solves the system of non-linear equations formed by the KKT conditions.

These are usually considered distinct from the "direct methods" that transform the problem into an unconstrained one. However, they directly address the constrained nature without variable elimination. For the purpose of this module's focus on "direct methods" as variable elimination or transformation, we will stick to the earlier techniques.

---

### 5. Practice Questions and Exercises

**Question 1:**

Minimize $f(x_1, x_2, x_3) = x_1^2 + x_2^2 + x_3^2$
Subject to $g_1(x_1, x_2, x_3) = x_1 + x_2 + x_3 - 3 = 0$
$g_2(x_1, x_2, x_3) = x_1 - x_2 = 0$

**Solve this problem using the elimination method. (Assume constraints can be easily solved for elimination).**

**Solution:**

1.  From $g_2$: $x_1 = x_2$.
2.  Substitute $x_1 = x_2$ into $g_1$: $x_2 + x_2 + x_3 - 3 = 0 \implies 2x_2 + x_3 - 3 = 0$.
3.  Solve for $x_3$: $x_3 = 3 - 2x_2$.
4.  Now express $x_1$ and $x_3$ in terms of $x_2$:
    $x_1 = x_2$
    $x_3 = 3 - 2x_2$
5.  Substitute these into the objective function:
    $f(x_2) = x_2^2 + x_2^2 + (3 - 2x_2)^2$
    $f(x_2) = 2x_2^2 + (9 - 12x_2 + 4x_2^2)$
    $f(x_2) = 6x_2^2 - 12x_2 + 9$
6.  To minimize $f(x_2)$, take the derivative with respect to $x_2$ and set to zero:
    $\frac{df}{dx_2} = 12x_2 - 12 = 0$
    $x_2 = 1$
7.  Find $x_1$ and $x_3$:
    $x_1 = x_2 = 1$
    $x_3 = 3 - 2x_2 = 3 - 2(1) = 1$
8.  The optimal solution is $\mathbf{x}^* = [1, 1, 1]^T$.

---

**Question 2:**

Consider the problem:
Minimize $f(x_1, x_2) = x_1^2 + x_2^2$
Subject to $g(x_1, x_2) = x_1 + x_2 - 1 = 0$

**Using the penalty method with $\rho = 10$, find the approximate solution.**

**Solution:**

1.  Penalty function: $\phi(x_1, x_2, 10) = x_1^2 + x_2^2 + 10 (x_1 + x_2 - 1)^2$.
2.  Partial derivatives:
    $\frac{\partial \phi}{\partial x_1} = 2x_1 + 20 (x_1 + x_2 - 1) = 0 \implies 22x_1 + 20x_2 = 20$
    $\frac{\partial \phi}{\partial x_2} = 2x_2 + 20 (x_1 + x_2 - 1) = 0 \implies 20x_1 + 22x_2 = 20$
3.  Divide by 2:
    $11x_1 + 10x_2 = 10$
    $10x_1 + 11x_2 = 10$
4.  Subtracting the second equation from the first:
    $(11x_1 - 10x_1) + (10x_2 - 11x_2) = 0$
    $x_1 - x_2 = 0 \implies x_1 = x_2$
5.  Substitute $x_1 = x_2$ into the first equation:
    $11x_1 + 10x_1 = 10$
    $21x_1 = 10 \implies x_1 = 10/21$
6.  So, $x_1 \approx 0.476$ and $x_2 \approx 0.476$.
    This is an approximation to the true solution of $[0.5, 0.5]^T$. As $\rho$ increases, the approximation gets better.

---

**Question 3:**

Explain the main difference between penalty methods and augmented Lagrangian methods in handling equality constraints.

**Answer:**

*   **Penalty Methods:** Convert a constrained problem into a sequence of unconstrained problems by adding a penalty term that is zero when constraints are satisfied and positive when violated. The penalty parameter ($\rho$) must typically approach infinity for the solution of the unconstrained subproblems to converge to the solution of the constrained problem. This can lead to ill-conditioning.
*   **Augmented Lagrangian Methods:** Combine penalty terms with Lagrange multipliers. The augmented Lagrangian function is constructed such that its unconstrained minimum can be found with a finite penalty parameter. The method iteratively updates both the design variables and the Lagrange multipliers. This approach generally offers better convergence properties and avoids the ill-conditioning issues associated with very large penalty parameters.

---

### 6. Important Points to Remember

*   **Direct methods** aim to simplify the constrained problem into an unconstrained one.
*   **Variable elimination** is direct but often not feasible or can lead to complex functions.
*   **Penalty methods** add a penalty for constraint violation. The penalty parameter needs to be large for good accuracy, which can cause numerical issues.
*   **Augmented Lagrangian methods** improve upon penalty methods by incorporating Lagrange multipliers, allowing for solutions with finite penalty parameters and better convergence.
*   The effectiveness of these methods depends on the ability to solve the resulting unconstrained subproblems and the proper tuning of parameters ($\rho$).
*   Understanding the nature of the constraints is crucial for choosing the most appropriate direct method.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. Further Reading and References

*   **S.S. Rao, "Engineering Optimization, Theory and Practice," 4th Edition, 2012:** Chapters 8 and 14 are particularly relevant.
*   **Xin-She Yang, "Optimization Techniques and Applications with Examples," 2018:** Provides a broad overview of optimization techniques, including those for constrained problems.
*   **Deb K, "Optimization for Engineering Design Algorithms and Examples," 2000:** Chapter 6 offers insights into penalty functions.
*   **Chong E.K.P., Hak S.H., "An Introduction to Optimization," 4th Edition, 2013:** Chapter 9 covers multiplier methods.
*   **Arora J, "Introduction to Optimization Design," 2004:** Chapter 10 details penalty and multiplier methods.

This module introduces fundamental direct methods for solving optimization problems with equality constraints. While variable elimination offers a straightforward approach when feasible, penalty and augmented Lagrangian methods provide more general frameworks for tackling these problems, especially in practical engineering scenarios.