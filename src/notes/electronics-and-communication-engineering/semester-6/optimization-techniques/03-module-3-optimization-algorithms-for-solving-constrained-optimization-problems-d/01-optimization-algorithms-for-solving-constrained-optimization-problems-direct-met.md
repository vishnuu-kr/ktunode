---
title: "Optimization algorithms for solving constrained optimization problems– direct methods – penalty function methods, barrier method"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 3: Optimization algorithms for solving constrained optimization problems– direct methods – penalty function methods, barrier method"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fef36"
status: "completed"
scrapedAt: "2026-05-23T18:02:35.861Z"
---
# Module 3: Optimization Algorithms for Solving Constrained Optimization Problems – Direct Methods

## Introduction to Constrained Optimization

**Course Outcome Alignment:** CO4 (Apply the various optimization techniques to solve a constrained optimization problem - K3)

This module delves into optimization algorithms specifically designed for problems where the decision variables are subject to constraints. We will explore **direct methods**, a class of techniques that aim to solve the constrained problem directly or by transforming it into a series of unconstrained problems.

### Key Concepts:

*   **Constrained Optimization Problem:** A problem where we aim to minimize or maximize an objective function subject to one or more equality or inequality constraints.
    *   **Objective Function:** The function to be optimized, denoted as $f(\mathbf{x})$.
    *   **Decision Variables:** The variables that can be adjusted to achieve the optimum, denoted as $\mathbf{x} = [x_1, x_2, \dots, x_n]^T$.
    *   **Constraints:** Conditions that the decision variables must satisfy.
        *   **Equality Constraints:** $h_j(\mathbf{x}) = 0$, for $j = 1, \dots, m$.
        *   **Inequality Constraints:** $g_i(\mathbf{x}) \le 0$, for $i = 1, \dots, p$.
*   **Feasible Region:** The set of all points $\mathbf{x}$ that satisfy all the constraints.
*   **Feasible Solution:** Any point $\mathbf{x}$ that lies within the feasible region.
*   **Optimal Solution:** A feasible solution that yields the best (minimum or maximum) value of the objective function.

**Reference:** S.S. Rao, Chapter 12: "Optimization of Nonlinear Functions of Several Variables," and Chapter 14: "Nonlinear Programming Methods: Direct Methods." (4th Edition)

## Direct Methods

Direct methods aim to find the optimum of a constrained problem by either:
1.  Transforming the constrained problem into an equivalent unconstrained problem.
2.  Using the constraint information directly within the search algorithm.

In this module, we will focus on the first category, specifically **Penalty Function Methods** and the **Barrier Method**.

## Penalty Function Methods

**Course Outcome Alignment:** CO4 (Apply the various optimization techniques to solve a constrained optimization problem - K3)

Penalty function methods convert a constrained optimization problem into a sequence of unconstrained optimization problems by adding a **penalty term** to the objective function. This penalty term increases as the solution moves away from the feasible region.

### Key Concepts:

*   **Penalty Parameter ($r$):** A positive scalar that controls the magnitude of the penalty. As $r$ increases, the penalty for violating constraints becomes more severe.
*   **Penalty Function ($P(\mathbf{x}, r)$):** A function that penalizes infeasible solutions. The form of the penalty function depends on the type of constraints (equality or inequality).
*   **Unconstrained Subproblem:** The transformed problem, typically of the form:
    $Minimize \ \Phi(\mathbf{x}, r) = f(\mathbf{x}) + r \cdot P(\mathbf{x}, r)$

### Types of Penalty Functions:

#### 1. Exterior Penalty Function Method (for Inequality Constraints)

This method is used when the penalty is imposed for solutions *outside* the feasible region (i.e., when $g_i(\mathbf{x}) > 0$).

*   **Penalty Function:**
    $P(\mathbf{x}, r) = \sum_{i=1}^p R(g_i(\mathbf{x}))$
    where $R(g_i(\mathbf{x}))$ is a function that is zero for $g_i(\mathbf{x}) \le 0$ and positive for $g_i(\mathbf{x}) > 0$.

*   **Commonly Used $R(g_i(\mathbf{x}))$:**
    *   **Quadratic Penalty Function:** $R(g_i(\mathbf{x})) = \max(0, g_i(\mathbf{x}))^2$
    *   **Absolute Value Penalty Function:** $R(g_i(\mathbf{x})) = \max(0, g_i(\mathbf{x}))$

*   **Unconstrained Subproblem:**
    $Minimize \ \Phi(\mathbf{x}, r) = f(\mathbf{x}) + r \sum_{i=1}^p \max(0, g_i(\mathbf{x}))^2$

*   **Algorithm:**
    1.  Choose an initial value for the penalty parameter $r_0 > 0$.
    2.  Solve the unconstrained subproblem: $Minimize \ \Phi(\mathbf{x}, r_k)$. Let the solution be $\mathbf{x}_k^*$.
    3.  Update the penalty parameter: $r_{k+1} = \mu r_k$, where $\mu > 1$ (e.g., $\mu = 10$).
    4.  Repeat steps 2 and 3 until a convergence criterion is met (e.g., the change in objective function value or solution vector is small).

**Important Point:** As $r \to \infty$, the solution of the penalty function subproblem converges to the solution of the original constrained problem.

**Reference:** S.S. Rao, Chapter 14.1: "Penalty Function Methods," specifically discussing exterior penalty functions.

#### 2. Interior Penalty Function Method (also known as Barrier Method for Inequality Constraints)

This method is used for inequality constraints and keeps the solution *inside* the feasible region. It introduces a "barrier" that prevents the solution from reaching the boundary.

*   **Penalty Function:** The penalty function increases as the solution approaches the boundary of the feasible region.
*   **Unconstrained Subproblem:**
    $Minimize \ \Psi(\mathbf{x}, r) = f(\mathbf{x}) - r \sum_{i=1}^p \ln(-g_i(\mathbf{x}))$  (Logarithmic Barrier)
    or
    $Minimize \ \Psi(\mathbf{x}, r) = f(\mathbf{x}) - r \sum_{i=1}^p \frac{1}{g_i(\mathbf{x})}$ (Inverse Barrier)

*   **Algorithm (for Logarithmic Barrier):**
    1.  Choose an initial penalty parameter $r_0 > 0$.
    2.  Choose an initial feasible point $\mathbf{x}_0$.
    3.  Solve the unconstrained subproblem: $Minimize \ \Psi(\mathbf{x}, r_k) = f(\mathbf{x}) - r_k \sum_{i=1}^p \ln(-g_i(\mathbf{x}))$. Let the solution be $\mathbf{x}_k^*$.
    4.  Update the penalty parameter: $r_{k+1} = \beta r_k$, where $0 < \beta < 1$ (e.g., $\beta = 0.1$).
    5.  Repeat steps 2, 3, and 4 until a convergence criterion is met.

**Important Point:** As $r \to 0$, the solution of the barrier function subproblem converges to the solution of the original constrained problem.

**Reference:** S.S. Rao, Chapter 14.2: "Interior Penalty Function Methods," which includes the barrier method. Xin-She Yang, Chapter 4: "Penalty and Barrier Methods" also provides a good overview.

#### 3. Mixed Penalty Function Method (for Equality and Inequality Constraints)

This method combines exterior penalty functions for inequality constraints and a specific penalty for equality constraints.

*   **Penalty Function for Equality Constraints ($h_j(\mathbf{x})$):**
    *   Quadratic Penalty: $h_j(\mathbf{x})^2$
    *   Absolute Value Penalty: $|h_j(\mathbf{x})|$

*   **Unconstrained Subproblem:**
    $Minimize \ \Phi(\mathbf{x}, r) = f(\mathbf{x}) + r \sum_{i=1}^p \max(0, g_i(\mathbf{x}))^2 + r \sum_{j=1}^m h_j(\mathbf{x})^2$

*   **Algorithm:** Similar to the exterior penalty method, the penalty parameter $r$ is increased iteratively.

**Reference:** S.S. Rao, Chapter 14.1.3: "Methods for Equality Constraints."

### Advantages of Penalty Function Methods:

*   Transform a constrained problem into a sequence of unconstrained problems, allowing the use of well-established unconstrained optimization techniques (e.g., gradient descent, Newton's method).
*   Conceptually simple to understand and implement.

### Disadvantages of Penalty Function Methods:

*   **Ill-Conditioning:** As the penalty parameter $r$ becomes very large, the Hessian matrix of the penalty function becomes ill-conditioned, making the unconstrained subproblems difficult to solve accurately.
*   **Slow Convergence:** For large values of $r$, small changes in the penalty term can lead to large changes in the gradient, slowing down convergence.
*   **Choice of Penalty Parameter:** Selecting the appropriate sequence of penalty parameters can be challenging.

## Barrier Method (Interior Point Methods)

**Course Outcome Alignment:** CO4 (Apply the various optimization techniques to solve a constrained optimization problem - K3)

The Barrier Method, often categorized under interior point methods, is used for inequality constraints. It aims to maintain feasibility throughout the optimization process by introducing a barrier function that approaches infinity as the solution approaches the boundary of the feasible region. This ensures that the iterates remain strictly within the feasible region.

### Key Concepts:

*   **Strict Feasibility:** All iterates $\mathbf{x}_k$ must satisfy $g_i(\mathbf{x}_k) < 0$ for all $i$.
*   **Barrier Function:** A function that is defined and finite within the feasible region but tends to infinity as any constraint approaches its boundary ($g_i(\mathbf{x}) \to 0$).
*   **Parameter $r$:** A positive parameter that controls the "height" of the barrier. As $r$ approaches zero, the barrier method's solution approaches the true optimum.

### Types of Barrier Functions:

1.  **Logarithmic Barrier:**
    *   Barrier Term: $-r \sum_{i=1}^p \ln(-g_i(\mathbf{x}))$
    *   Unconstrained Problem: $Minimize \ \Psi(\mathbf{x}, r) = f(\mathbf{x}) - r \sum_{i=1}^p \ln(-g_i(\mathbf{x}))$

2.  **Inverse Barrier:**
    *   Barrier Term: $-r \sum_{i=1}^p \frac{1}{g_i(\mathbf{x})}$
    *   Unconstrained Problem: $Minimize \ \Psi(\mathbf{x}, r) = f(\mathbf{x}) - r \sum_{i=1}^p \frac{1}{g_i(\mathbf{x})}$

### Algorithm (General Barrier Method):

1.  **Initialization:** Choose an initial strictly feasible point $\mathbf{x}_0$ and an initial barrier parameter $r_0 > 0$.
2.  **Iterate:** For $k = 0, 1, 2, \dots$
    a.  Solve the unconstrained problem: $Minimize \ \Psi(\mathbf{x}, r_k) = f(\mathbf{x}) + B(\mathbf{x}, r_k)$, where $B(\mathbf{x}, r_k)$ is the barrier term. This step is typically done using an unconstrained optimization method (e.g., Newton's method).
    b.  Obtain the solution $\mathbf{x}_k^*$.
    c.  Update the barrier parameter: $r_{k+1} = \beta r_k$, where $0 < \beta < 1$ (e.g., $\beta = 0.1$ or $\beta = 0.5$).
    d.  Check for convergence. If converged, stop.

**Important Point:** The barrier method generates a sequence of strictly feasible points that converge to the optimal solution.

**Reference:** S.S. Rao, Chapter 14.2: "Interior Penalty Function Methods." Xin-She Yang, Chapter 4: "Penalty and Barrier Methods." Deb K, Chapter 8: "Interior Point Methods."

### Advantages of Barrier Methods:

*   Maintains strict feasibility, which can be beneficial in some applications where boundary solutions are undesirable or unstable.
*   Can be more numerically stable than exterior penalty methods for some problems, especially when using Newton-type methods for solving the subproblems.

### Disadvantages of Barrier Methods:

*   Requires an initial strictly feasible starting point, which can be difficult to find for complex problems.
*   The barrier function becomes unbounded as it approaches the boundary, which can lead to numerical difficulties if not handled carefully.
*   Convergence can still be slow if the barrier parameter is not reduced appropriately.

## Examples

Let's consider a simple example to illustrate the penalty function method.

**Problem:**
Minimize $f(x) = x^2$ subject to $x \ge 2$.

We can rewrite the constraint as $g(x) = 2 - x \le 0$.

**Using Quadratic Exterior Penalty Function:**

The unconstrained subproblem is:
$Minimize \ \Phi(x, r) = x^2 + r \cdot \max(0, 2 - x)^2$

Let's try a few values of $r$:

**Case 1: $r = 1$**
$\Phi(x, 1) = x^2 + 1 \cdot \max(0, 2 - x)^2$

*   If $x \ge 2$: $\Phi(x, 1) = x^2 + (2 - x)^2 = x^2 + 4 - 4x + x^2 = 2x^2 - 4x + 4$.
    To minimize, take the derivative with respect to $x$ and set to zero: $4x - 4 = 0 \implies x = 1$. However, this is for $x \ge 2$, so this region is not minimized here.
*   If $x < 2$: $\Phi(x, 1) = x^2$. The minimum is at $x = 0$.

Since the minimum of $x^2$ for $x < 2$ is at $x=0$, which is outside the region $x \ge 2$, and the minimum of $2x^2 - 4x + 4$ for $x \ge 2$ would occur at the boundary $x=2$ (as the derivative $4x-4$ is positive for $x \ge 2$), the minimum for $\Phi(x, 1)$ for $x \ge 2$ occurs at $x=2$, giving $\Phi(2, 1) = 2^2 + 0 = 4$.
For $x < 2$, the minimum is at $x=0$, $\Phi(0, 1) = 0$.

The overall minimum of $\Phi(x, 1)$ is at $x=0$. This indicates that with a small penalty, the unconstrained solution is still far from the constraint.

**Case 2: $r = 10$**
$\Phi(x, 10) = x^2 + 10 \cdot \max(0, 2 - x)^2$

*   If $x \ge 2$: $\Phi(x, 10) = x^2 + 10(2 - x)^2 = x^2 + 10(4 - 4x + x^2) = x^2 + 40 - 40x + 10x^2 = 11x^2 - 40x + 40$.
    To minimize, $22x - 40 = 0 \implies x = 40/22 = 20/11 \approx 1.818$. This is less than 2, so the minimum in this region is at the boundary $x=2$.
    $\Phi(2, 10) = 2^2 + 0 = 4$.
*   If $x < 2$: $\Phi(x, 10) = x^2$. The minimum is at $x = 0$. $\Phi(0, 10) = 0$.

The overall minimum of $\Phi(x, 10)$ is at $x=0$.

**Case 3: $r = 100$**
$\Phi(x, 100) = x^2 + 100 \cdot \max(0, 2 - x)^2$

*   If $x \ge 2$: $\Phi(x, 100) = x^2 + 100(2 - x)^2 = x^2 + 100(4 - 4x + x^2) = 101x^2 - 400x + 400$.
    To minimize, $202x - 400 = 0 \implies x = 400/202 = 200/101 \approx 1.98$. This is less than 2, so the minimum in this region is at the boundary $x=2$.
    $\Phi(2, 100) = 2^2 + 0 = 4$.
*   If $x < 2$: $\Phi(x, 100) = x^2$. The minimum is at $x = 0$. $\Phi(0, 100) = 0$.

The overall minimum of $\Phi(x, 100)$ is at $x=0$.

This example is too simple. Let's consider a case where the constraint is binding at the optimum.

**Revised Problem:**
Minimize $f(x) = (x - 5)^2$ subject to $x \ge 2$.

**Using Quadratic Exterior Penalty Function:**

The unconstrained subproblem is:
$Minimize \ \Phi(x, r) = (x - 5)^2 + r \cdot \max(0, 2 - x)^2$

**Case 1: $r = 1$**
$\Phi(x, 1) = (x - 5)^2 + \max(0, 2 - x)^2$

*   If $x \ge 2$: $\Phi(x, 1) = (x - 5)^2 + (2 - x)^2 = x^2 - 10x + 25 + 4 - 4x + x^2 = 2x^2 - 14x + 29$.
    To minimize, $4x - 14 = 0 \implies x = 14/4 = 3.5$. This is in the region $x \ge 2$.
    The value of the objective function is $(3.5 - 5)^2 = (-1.5)^2 = 2.25$.
*   If $x < 2$: $\Phi(x, 1) = (x - 5)^2$. The minimum is at $x = 5$, which is outside this region. The minimum for $x < 2$ is at $x=2$, where $\Phi(2, 1) = (2-5)^2 = 9$.

The minimum of $\Phi(x, 1)$ occurs at $x = 3.5$, with a value of 2.25.

**Case 2: $r = 10$**
$\Phi(x, 10) = (x - 5)^2 + 10 \cdot \max(0, 2 - x)^2$

*   If $x \ge 2$: $\Phi(x, 10) = (x - 5)^2 + 10(2 - x)^2 = x^2 - 10x + 25 + 10(4 - 4x + x^2) = x^2 - 10x + 25 + 40 - 40x + 10x^2 = 11x^2 - 50x + 65$.
    To minimize, $22x - 50 = 0 \implies x = 50/22 = 25/11 \approx 2.27$. This is in the region $x \ge 2$.
    The value of the objective function is $(2.27 - 5)^2 \approx (-2.73)^2 \approx 7.45$.
*   If $x < 2$: $\Phi(x, 10) = (x - 5)^2$. The minimum for $x < 2$ is at $x=2$, where $\Phi(2, 10) = (2-5)^2 = 9$.

The minimum of $\Phi(x, 10)$ occurs at $x = 25/11 \approx 2.27$, with a value of approximately 7.45.

As $r$ increases, the solution moves closer to the constraint boundary $x=2$. For the original problem, the minimum is at $x=5$, but the constraint $x \ge 2$ means the feasible region is $[2, \infty)$. The unconstrained minimum is in the feasible region. The minimum of $f(x) = (x-5)^2$ subject to $x \ge 2$ occurs at $x=2$ because the unconstrained minimum is to the right of the boundary.

Let's consider another example where the unconstrained minimum is to the left of the constraint.

**Problem:**
Minimize $f(x) = (x - 1)^2$ subject to $x \ge 2$.

Constraint: $g(x) = 2 - x \le 0$.

**Using Quadratic Exterior Penalty Function:**

$\Phi(x, r) = (x - 1)^2 + r \cdot \max(0, 2 - x)^2$

**Case 1: $r = 1$**
$\Phi(x, 1) = (x - 1)^2 + \max(0, 2 - x)^2$

*   If $x \ge 2$: $\Phi(x, 1) = (x - 1)^2 + (2 - x)^2 = x^2 - 2x + 1 + 4 - 4x + x^2 = 2x^2 - 6x + 5$.
    To minimize, $4x - 6 = 0 \implies x = 1.5$. This is less than 2, so the minimum in this region occurs at the boundary $x=2$.
    $\Phi(2, 1) = (2-1)^2 + 0 = 1$.
*   If $x < 2$: $\Phi(x, 1) = (x - 1)^2$. The minimum is at $x = 1$.
    $\Phi(1, 1) = (1-1)^2 = 0$.

The minimum of $\Phi(x, 1)$ occurs at $x = 1$.

**Case 2: $r = 10$**
$\Phi(x, 10) = (x - 1)^2 + 10 \cdot \max(0, 2 - x)^2$

*   If $x \ge 2$: $\Phi(x, 10) = (x - 1)^2 + 10(2 - x)^2 = x^2 - 2x + 1 + 10(4 - 4x + x^2) = x^2 - 2x + 1 + 40 - 40x + 10x^2 = 11x^2 - 42x + 41$.
    To minimize, $22x - 42 = 0 \implies x = 42/22 = 21/11 \approx 1.909$. This is less than 2, so the minimum in this region occurs at the boundary $x=2$.
    $\Phi(2, 10) = (2-1)^2 + 0 = 1$.
*   If $x < 2$: $\Phi(x, 10) = (x - 1)^2$. The minimum is at $x = 1$.
    $\Phi(1, 10) = (1-1)^2 = 0$.

The minimum of $\Phi(x, 10)$ occurs at $x = 1$.

As $r \to \infty$, the solution will be forced towards $x=2$. The true optimum for this problem is at $x=2$, with a value of $(2-1)^2 = 1$.

**Using Logarithmic Barrier Method:**

Minimize $f(x) = (x - 1)^2$ subject to $x \ge 2$.
Constraint: $g(x) = 2 - x \le 0$.

Unconstrained Subproblem:
$\Psi(x, r) = (x - 1)^2 - r \ln(-(2 - x)) = (x - 1)^2 - r \ln(x - 2)$

To minimize, take the derivative and set to zero:
$\frac{d\Psi}{dx} = 2(x - 1) - r \frac{1}{x - 2} = 0$
$2(x - 1)(x - 2) - r = 0$
$2(x^2 - 3x + 2) - r = 0$
$2x^2 - 6x + 4 - r = 0$

Let $r = 0.1$:
$2x^2 - 6x + 4 - 0.1 = 0$
$2x^2 - 6x + 3.9 = 0$
Using the quadratic formula: $x = \frac{-(-6) \pm \sqrt{(-6)^2 - 4(2)(3.9)}}{2(2)} = \frac{6 \pm \sqrt{36 - 31.2}}{4} = \frac{6 \pm \sqrt{4.8}}{4}$
$x \approx \frac{6 \pm 2.19}{4}$
$x_1 \approx \frac{8.19}{4} \approx 2.0475$
$x_2 \approx \frac{3.81}{4} \approx 0.9525$

We need a strictly feasible point, so we choose $x = 2.0475$.

Let $r = 0.01$:
$2x^2 - 6x + 4 - 0.01 = 0$
$2x^2 - 6x + 3.99 = 0$
$x = \frac{6 \pm \sqrt{36 - 4(2)(3.99)}}{4} = \frac{6 \pm \sqrt{36 - 31.92}}{4} = \frac{6 \pm \sqrt{4.08}}{4}$
$x \approx \frac{6 \pm 2.02}{4}$
$x_1 \approx \frac{8.02}{4} \approx 2.005$
$x_2 \approx \frac{3.98}{4} \approx 0.995$

Choosing the feasible solution, $x \approx 2.005$.

As $r$ approaches 0, the solution approaches $x=2$.

**Reference:** S.S. Rao, worked examples in Chapter 14.

## Practice Questions and Exercises

1.  **Concept Check:**
    *   What is the main idea behind penalty function methods?
    *   What is the difference between exterior and interior penalty function methods?
    *   When is the barrier method typically used, and what is its primary advantage?
    *   What is the main disadvantage of penalty function methods that leads to ill-conditioning?

2.  **Problem Solving:**
    *   Consider the problem: Minimize $f(x) = x^2 - 4x + 5$ subject to $x \ge 1$. Use the quadratic exterior penalty function method with $r=1$ and $r=10$ to find the approximate solution.
    *   Consider the problem: Minimize $f(x_1, x_2) = x_1^2 + x_2^2$ subject to $x_1 + x_2 \ge 1$. Use the quadratic exterior penalty function method to formulate the unconstrained subproblem.

3.  **Application:**
    *   Explain how penalty function methods could be applied to optimize the design of a simple beam where the stress must be below a certain limit (a constraint).

---

### Answers to Practice Questions:

**1. Concept Check:**

*   **Penalty Function Methods:** They convert a constrained optimization problem into a sequence of unconstrained optimization problems by adding a penalty term to the objective function. This penalty increases as the solution moves away from the feasible region.
*   **Exterior vs. Interior:**
    *   **Exterior:** Penalizes solutions outside the feasible region. Starts from infeasible points and moves towards feasibility.
    *   **Interior (Barrier):** Penalizes solutions approaching the boundary of the feasible region. Stays strictly within the feasible region.
*   **Barrier Method Use and Advantage:** Typically used for inequality constraints. Its primary advantage is maintaining strict feasibility throughout the process.
*   **Disadvantage:** Ill-conditioning of the Hessian matrix as the penalty parameter becomes very large.

**2. Problem Solving:**

*   **Problem:** Minimize $f(x) = x^2 - 4x + 5$ subject to $x \ge 1$.
    Constraint: $g(x) = 1 - x \le 0$.

    **Quadratic Exterior Penalty Function:** $\Phi(x, r) = x^2 - 4x + 5 + r \cdot \max(0, 1 - x)^2$

    *   **For $r = 1$:**
        $\Phi(x, 1) = x^2 - 4x + 5 + \max(0, 1 - x)^2$
        *   If $x \ge 1$: $\Phi(x, 1) = x^2 - 4x + 5 + (1 - x)^2 = x^2 - 4x + 5 + 1 - 2x + x^2 = 2x^2 - 6x + 6$.
            Minimize: $4x - 6 = 0 \implies x = 1.5$. This is in the region $x \ge 1$.
            The solution is approximately $x = 1.5$.
        *   If $x < 1$: $\Phi(x, 1) = x^2 - 4x + 5$. Minimum is at $x=2$, outside the region. For $x < 1$, the minimum is at $x=1$. $\Phi(1,1) = 1^2 - 4(1) + 5 = 2$.
        The minimum for $\Phi(x, 1)$ is at $x = 1.5$.

    *   **For $r = 10$:**
        $\Phi(x, 10) = x^2 - 4x + 5 + 10 \cdot \max(0, 1 - x)^2$
        *   If $x \ge 1$: $\Phi(x, 10) = x^2 - 4x + 5 + 10(1 - x)^2 = x^2 - 4x + 5 + 10(1 - 2x + x^2) = x^2 - 4x + 5 + 10 - 20x + 10x^2 = 11x^2 - 24x + 15$.
            Minimize: $22x - 24 = 0 \implies x = 24/22 = 12/11 \approx 1.09$. This is in the region $x \ge 1$.
            The solution is approximately $x = 1.09$.

    As $r$ increases, the solution moves closer to the constraint boundary $x=1$. The true optimum for this problem is at $x=1$, with a value of $1^2 - 4(1) + 5 = 2$.

*   **Problem:** Minimize $f(x_1, x_2) = x_1^2 + x_2^2$ subject to $x_1 + x_2 \ge 1$.
    Constraint: $g(x_1, x_2) = 1 - x_1 - x_2 \le 0$.

    **Quadratic Exterior Penalty Function:**
    The unconstrained subproblem would be:
    Minimize $\Phi(x_1, x_2, r) = x_1^2 + x_2^2 + r \cdot \max(0, 1 - x_1 - x_2)^2$.

**3. Application:**

*   For a beam, the objective might be to minimize the material used (e.g., cross-sectional area) or minimize the weight. A constraint could be that the maximum deflection under load must not exceed a certain value, or the maximum stress must be below the yield strength of the material.
    *   **Objective:** Minimize Area ($A$)
    *   **Constraint:** Max Stress ($\sigma_{max}$) $\le \sigma_{allowable}$
    The penalty function method would add a term like $r \cdot (\max(0, \sigma_{max} - \sigma_{allowable}))^2$ to the objective function. As the penalty parameter $r$ is increased, solutions that violate the stress constraint will be heavily penalized, forcing the optimizer to find designs that satisfy the stress limit.

---

## Summary of Key Points

*   Constrained optimization problems require methods that handle restrictions on decision variables.
*   **Direct methods** transform the problem or incorporate constraints into the search.
*   **Penalty Function Methods** convert constrained problems into unconstrained ones by adding penalties for constraint violations.
    *   **Exterior penalty:** Penalizes infeasible points outside the region.
    *   **Interior penalty (Barrier):** Penalizes points approaching the feasible region boundary.
*   The **Barrier Method** (logarithmic or inverse) keeps iterates strictly feasible and is suitable for inequality constraints.
*   Increasing the penalty parameter ($r$) in penalty methods or decreasing it in barrier methods drives the solution towards the optimum of the original constrained problem.
*   **Challenges:** Ill-conditioning and slow convergence can arise with large penalty parameters in exterior methods. Finding an initial feasible point is crucial for barrier methods.

This module provides a foundation for understanding how to tackle optimization problems with real-world limitations. These methods form the basis for more advanced constrained optimization techniques.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
