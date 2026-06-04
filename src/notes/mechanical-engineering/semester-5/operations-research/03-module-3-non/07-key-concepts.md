---
title: "Key concepts"
subject: "OPERATIONS RESEARCH"
module: "Module 3: Non"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf480446362e"
status: "completed"
scrapedAt: "2026-05-20T18:02:02.090Z"
---
# Operations Research: Module 3 - Non-Linear Programming

This module introduces the fundamental concepts of non-linear programming (NLP), a powerful extension of linear programming that deals with optimization problems where the objective function or the constraints (or both) are non-linear. This topic is crucial for modeling and solving a wide range of real-world problems that cannot be adequately represented by linear models.

## Introduction to Non-Linear Programming

**Key Concepts & Definitions:**

*   **Non-Linear Programming (NLP):** A mathematical optimization technique where the objective function and/or the constraints involve non-linear relationships.
    *   **Objective Function:** $f(x_1, x_2, ..., x_n)$ can be linear or non-linear.
    *   **Constraints:** $g_i(x_1, x_2, ..., x_n) \leq b_i$ or $h_j(x_1, x_2, ..., x_n) = c_j$, where at least one of $f$, $g_i$, or $h_j$ is non-linear.
*   **Decision Variables:** The variables that we need to determine the optimal values for.
*   **Feasible Region:** The set of all possible combinations of decision variables that satisfy all the constraints.
*   **Optimal Solution:** A point within the feasible region that yields the best possible value (minimum or maximum) for the objective function.

**Why is NLP Important?**

Many real-world scenarios involve non-linear relationships:

*   **Economics:** Profit functions, cost functions, utility functions are often non-linear.
*   **Engineering:** Design problems, system performance analysis often exhibit non-linear behavior.
*   **Finance:** Portfolio optimization, risk management can involve non-linear relationships between assets.
*   **Biology:** Growth models, chemical reaction rates are frequently non-linear.

**Comparison with Linear Programming (LP):**

| Feature          | Linear Programming (LP)                                  | Non-Linear Programming (NLP)                                    |
| :--------------- | :------------------------------------------------------- | :-------------------------------------------------------------- |
| Objective Function | Linear                                                   | Can be linear or non-linear                                     |
| Constraints      | Linear                                                   | Can be linear or non-linear                                     |
| Feasible Region  | Convex Polytope (a bounded or unbounded polyhedron)      | Can be convex or non-convex, its shape is more complex.         |
| Solution Methods | Simplex Method, Interior-Point Methods                   | Gradient Descent, Newton's Method, Sequential Quadratic Programming (SQP), Augmented Lagrangian Methods, etc. |
| Uniqueness of Solution | Multiple optimal solutions can exist if objective function is parallel to a binding constraint. | Global optimum may not be unique, local optima are common.      |
| Complexity       | Generally less complex to solve.                         | Can be significantly more complex to solve.                     |

**Sources for Reference:**

*   **Operations Research-Principles and Applications by Srinivasan, G. (Chapter on Non-Linear Programming):** Likely to provide a solid introduction to the theory and methods.
*   **Operations Research by Prem Kumar Gupta & D. S. Hira (Chapter on Non-Linear Programming):** Will offer a structured approach to NLP concepts.
*   **Quantitative Techniques in Management by N. D Vohra. Hitesh Arora (Chapter on Non-Linear Programming):** Focuses on application and management context.
*   **Optimization: Theory and Applications by Rao, S.S. (Chapters on Non-Linear Programming):** A more in-depth theoretical treatment.
*   **Introduction to Operations Research, by F. S. Hillier & G. J. Lieberman (Chapter on Non-Linear Programming):** Comprehensive coverage with clear explanations.

## Types of Non-Linear Programming Problems

NLP problems can be classified based on the nature of the objective function and constraints.

**1. Unconstrained Non-Linear Programming:**

*   **Objective:** Minimize or maximize $f(x_1, x_2, ..., x_n)$
*   **Constraints:** None.

**2. Constrained Non-Linear Programming:**

*   **Objective:** Minimize or maximize $f(x_1, x_2, ..., x_n)$
*   **Constraints:**
    *   $g_i(x_1, x_2, ..., x_n) \leq b_i$, for $i = 1, ..., m$ (Inequality Constraints)
    *   $h_j(x_1, x_2, ..., x_n) = c_j$, for $j = 1, ..., p$ (Equality Constraints)
    *   $x_k \geq 0$, for some or all variables $k$ (Non-negativity Constraints)

**Further Classifications based on Function Properties:**

*   **Convex Programming:**
    *   Objective function is convex (for minimization) or concave (for maximization).
    *   Feasible region is a convex set.
    *   Any local optimum is also a global optimum. This makes solving convex problems significantly easier.
*   **Non-Convex Programming:**
    *   Either the objective function is non-convex or the feasible region is non-convex (or both).
    *   May have multiple local optima, making it difficult to find the global optimum.

**Important Point to Remember:** The distinction between convex and non-convex programming is crucial as it dictates the difficulty of finding a global optimum.

## Methods for Solving Non-Linear Programming Problems

Solving NLP problems can be significantly more challenging than LP. There isn't a single universally applicable method. The choice of method depends on the problem structure, the properties of the functions, and the desired accuracy.

### 1. Unconstrained Non-Linear Programming Methods

These methods aim to find the minimum or maximum of a function without constraints.

**Key Concepts & Definitions:**

*   **Gradient:** The vector of first-order partial derivatives of the objective function. $\nabla f(x) = \left(\frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}, ..., \frac{\partial f}{\partial x_n}\right)$. At an optimal solution (for differentiable functions), the gradient is the zero vector.
*   **Hessian Matrix:** The matrix of second-order partial derivatives. $\mathbf{H}f(x) = \left[\frac{\partial^2 f}{\partial x_i \partial x_j}\right]$. Used to determine if a critical point is a minimum, maximum, or saddle point.

**Methods:**

*   **Gradient Descent (Method of Steepest Descent):**
    *   **Idea:** Iteratively move in the direction opposite to the gradient (direction of steepest descent) to find a minimum.
    *   **Algorithm:**
        1.  Start with an initial guess $x^{(0)}$.
        2.  Calculate the search direction $d^{(k)} = -\nabla f(x^{(k)})$.
        3.  Determine the step size $\alpha^{(k)}$ (often using a line search to minimize $f(x^{(k)} + \alpha d^{(k)})$).
        4.  Update the solution: $x^{(k+1)} = x^{(k)} + \alpha^{(k)} d^{(k)}$.
        5.  Repeat until convergence (e.g., $|\nabla f(x^{(k)})|$ is small).
    *   **Example:** Minimizing $f(x_1, x_2) = x_1^2 + x_2^2$.
        *   $\nabla f = (2x_1, 2x_2)$.
        *   Start at $(1, 1)$. Gradient is $(2, 2)$. Direction is $(-2, -2)$.
        *   $f(1 - 2\alpha, 1 - 2\alpha) = (1-2\alpha)^2 + (1-2\alpha)^2 = 2(1 - 4\alpha + 4\alpha^2)$.
        *   To minimize this w.r.t $\alpha$, take derivative w.r.t $\alpha$: $2(-4 + 8\alpha) = 0 \implies \alpha = 1/2$.
        *   $x^{(1)} = (1, 1) + (1/2)(-2, -2) = (1, 1) + (-1, -1) = (0, 0)$. The minimum is at $(0, 0)$.
    *   **Sources:** Srinivasan, Gupta & Hira, Hillier & Lieberman.

*   **Newton's Method:**
    *   **Idea:** Uses a quadratic approximation of the function to directly find the minimum.
    *   **Algorithm:**
        1.  Start with an initial guess $x^{(0)}$.
        2.  Calculate the inverse Hessian: $(\mathbf{H}f(x^{(k)}))^{-1}$.
        3.  Calculate the search direction: $d^{(k)} = -(\mathbf{H}f(x^{(k)}))^{-1} \nabla f(x^{(k)})$.
        4.  Update the solution: $x^{(k+1)} = x^{(k)} + d^{(k)}$ (step size is usually 1).
        5.  Repeat until convergence.
    *   **Advantage:** Faster convergence (quadratic) near the optimum compared to gradient descent.
    *   **Disadvantage:** Requires calculating and inverting the Hessian matrix, which can be computationally expensive.
    *   **Sources:** Srinivasan, Gupta & Hira, Hillier & Lieberman.

*   **Conjugate Gradient Method:**
    *   **Idea:** A compromise between Gradient Descent and Newton's Method. It generates a sequence of search directions that are "conjugate" to each other, leading to faster convergence than Gradient Descent without the computational burden of Newton's Method for the Hessian.
    *   **Sources:** Rao, Hillier & Lieberman.

**Important Point to Remember:** For unconstrained problems, the optimal solution is found when the gradient of the objective function is zero.

### 2. Constrained Non-Linear Programming Methods

These methods deal with optimization problems subject to constraints.

**Key Concepts & Definitions:**

*   **Lagrangian Function:** For a problem: Minimize $f(x)$ subject to $g_i(x) \leq 0$ and $h_j(x) = 0$. The Lagrangian function is $L(x, \lambda, \mu) = f(x) + \sum_{i=1}^m \lambda_i g_i(x) + \sum_{j=1}^p \mu_j h_j(x)$, where $\lambda_i \geq 0$ are Lagrange multipliers for inequality constraints and $\mu_j$ are Lagrange multipliers for equality constraints.
*   **Karush-Kuhn-Tucker (KKT) Conditions:** A set of necessary conditions for a solution to be optimal for a constrained optimization problem. For a minimization problem, if $x^*$ is an optimal solution and the problem satisfies certain regularity conditions (like constraint qualifications), then there exist Lagrange multipliers $\lambda_i^* \geq 0$ and $\mu_j^*$ such that:
    1.  $\nabla_x L(x^*, \lambda^*, \mu^*) = 0$ (Stationarity)
    2.  $g_i(x^*) \leq 0$ for all $i$ (Primal Feasibility)
    3.  $h_j(x^*) = 0$ for all $j$ (Primal Feasibility)
    4.  $\lambda_i^* g_i(x^*) = 0$ for all $i$ (Complementary Slackness)
    5.  $\lambda_i^* \geq 0$ for all $i$ (Dual Feasibility)
    *   If the objective function is convex and the feasible region is convex (i.e., the problem is convex), then KKT conditions are also sufficient for optimality.

**Methods:**

*   **Lagrangian Multiplier Method (for Equality Constraints only):**
    *   **Idea:** Convert a constrained problem with equality constraints into an unconstrained problem by forming the Lagrangian function.
    *   **Algorithm:**
        1.  Form the Lagrangian: $L(x, \mu) = f(x) + \sum \mu_j h_j(x)$.
        2.  Find partial derivatives of $L$ with respect to $x$ and $\mu$, and set them to zero.
        3.  Solve the system of equations to find $x$ and $\mu$.
    *   **Example:** Minimize $f(x_1, x_2) = x_1^2 + x_2^2$ subject to $x_1 + x_2 = 2$.
        *   $L(x_1, x_2, \mu) = x_1^2 + x_2^2 + \mu(x_1 + x_2 - 2)$.
        *   $\frac{\partial L}{\partial x_1} = 2x_1 + \mu = 0 \implies x_1 = -\mu/2$
        *   $\frac{\partial L}{\partial x_2} = 2x_2 + \mu = 0 \implies x_2 = -\mu/2$
        *   $\frac{\partial L}{\partial \mu} = x_1 + x_2 - 2 = 0$
        *   Substituting $x_1$ and $x_2$ into the third equation: $-\mu/2 - \mu/2 - 2 = 0 \implies -\mu = 2 \implies \mu = -2$.
        *   Then, $x_1 = -(-2)/2 = 1$ and $x_2 = -(-2)/2 = 1$.
        *   Optimal solution: $(1, 1)$. $f(1,1) = 1^2 + 1^2 = 2$.
    *   **Sources:** Srinivasan, Gupta & Hira, Hillier & Lieberman, Rao.

*   **KKT Conditions for Inequality Constraints:**
    *   **Idea:** Apply KKT conditions to find candidate optimal solutions. This involves solving a system of equations and inequalities.
    *   **Algorithm:** Formulate the KKT conditions and try to find $x, \lambda, \mu$ that satisfy them.
    *   **Sources:** Srinivasan, Gupta & Hira, Hillier & Lieberman, Rao.

*   **Sequential Quadratic Programming (SQP):**
    *   **Idea:** At each iteration, approximate the non-linear problem with a quadratic programming (QP) subproblem. The solution to the QP subproblem provides a search direction for the original NLP.
    *   **Sources:** Rao, Hillier & Lieberman.

*   **Augmented Lagrangian Methods:**
    *   **Idea:** Combines the Lagrangian function with penalty terms for constraint violations, creating a function whose unconstrained minimization can lead to the solution of the constrained problem.
    *   **Sources:** Rao.

*   **Interior-Point Methods (for NLP):**
    *   **Idea:** Similar to their LP counterparts, these methods traverse the interior of the feasible region, often by solving a sequence of modified Newton steps.
    *   **Sources:** Hillier & Lieberman.

**Important Point to Remember:** The KKT conditions are the cornerstone for finding optimal solutions in constrained non-linear programming problems. For convex problems, satisfying KKT conditions guarantees optimality.

## Applications of Non-Linear Programming

NLP is used in a wide array of fields to solve complex optimization problems.

**Examples:**

*   **Portfolio Optimization (Markowitz Model):**
    *   **Problem:** Minimize portfolio risk (variance) for a given expected return, or maximize expected return for a given risk level.
    *   **Objective:** Minimize $\sum_{i=1}^n \sum_{j=1}^n w_i w_j \sigma_{ij}$ (where $w_i$ are portfolio weights and $\sigma_{ij}$ are covariances). This is a quadratic objective function.
    *   **Constraints:** $\sum_{i=1}^n w_i = 1$ (weights sum to 1), $\sum_{i=1}^n w_i E(R_i) \geq R_{target}$ (target return), $w_i \geq 0$ (no short selling).
    *   **Sources:** Srinivasan, Vohra & Arora, Hillier & Lieberman.

*   **Engineering Design:**
    *   Optimizing the shape of an aircraft wing, the dimensions of a chemical reactor, or the parameters of a control system to minimize cost, maximize efficiency, or improve performance, where performance metrics are often non-linear functions of design variables.
    *   **Sources:** Rao, Hillier & Lieberman.

*   **Economic Modeling:**
    *   Determining optimal production levels, pricing strategies, or resource allocation when cost and revenue functions are non-linear.
    *   **Sources:** Srinivasan, Vohra & Arora.

*   **Logistics and Network Design:**
    *   Optimizing facility location, vehicle routing, or network capacity where travel costs, capacities, or demand functions are non-linear.
    *   **Sources:** Srinivasan, Hillier & Lieberman.

**Course Outcome Alignment:**

*   **CO4 (Apply evolutionary algorithms for optimization problems):** While this module focuses on classical NLP methods, it lays the groundwork for understanding optimization. Evolutionary algorithms (like Genetic Algorithms, Particle Swarm Optimization) are often used for non-linear, non-convex, and combinatorial optimization problems where classical methods struggle. Understanding the challenges of NLP helps appreciate the need for these heuristic approaches.

## Practice Questions and Exercises

**Question 1:**
Consider the following non-linear programming problem:
Minimize $f(x_1, x_2) = (x_1 - 2)^2 + (x_2 - 3)^2$
Subject to:
$x_1 + x_2 \leq 4$
$x_1 \geq 0, x_2 \geq 0$

**(a)** Is this a convex programming problem? Justify your answer.
**(b)** Find the unconstrained minimum of $f(x_1, x_2)$.
**(c)** Using the KKT conditions, find the optimal solution to the constrained problem.

**Answer 1:**
**(a)**
*   The objective function $f(x_1, x_2) = (x_1 - 2)^2 + (x_2 - 3)^2$ is a sum of squared terms. The Hessian matrix of $f$ is $\begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$. Since the eigenvalues (2 and 2) are positive, the Hessian is positive definite, meaning the objective function is strictly convex.
*   The feasible region is defined by $x_1 + x_2 \leq 4$, $x_1 \geq 0$, $x_2 \geq 0$. This region is a triangle, which is a convex set.
*   Since the objective function is convex and the feasible region is convex, this is a convex programming problem.

**(b)**
To find the unconstrained minimum, we set the gradient of $f(x_1, x_2)$ to zero:
$\nabla f = \left(\frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}\right) = (2(x_1 - 2), 2(x_2 - 3))$
Setting the gradient to zero:
$2(x_1 - 2) = 0 \implies x_1 = 2$
$2(x_2 - 3) = 0 \implies x_2 = 3$
The unconstrained minimum is at $(2, 3)$.

**(c)**
Let's apply the KKT conditions. The problem is:
Minimize $f(x_1, x_2) = (x_1 - 2)^2 + (x_2 - 3)^2$
Subject to:
$g_1(x_1, x_2) = x_1 + x_2 - 4 \leq 0$
$g_2(x_1, x_2) = -x_1 \leq 0$
$g_3(x_1, x_2) = -x_2 \leq 0$

The Lagrangian is:
$L(x_1, x_2, \lambda_1, \lambda_2, \lambda_3) = (x_1 - 2)^2 + (x_2 - 3)^2 + \lambda_1(x_1 + x_2 - 4) - \lambda_2 x_1 - \lambda_3 x_2$

KKT Conditions:
1.  **Stationarity:**
    $\frac{\partial L}{\partial x_1} = 2(x_1 - 2) + \lambda_1 - \lambda_2 = 0 \quad (1)$
    $\frac{\partial L}{\partial x_2} = 2(x_2 - 3) + \lambda_1 - \lambda_3 = 0 \quad (2)$
2.  **Primal Feasibility:**
    $x_1 + x_2 - 4 \leq 0 \quad (3)$
    $-x_1 \leq 0 \implies x_1 \geq 0 \quad (4)$
    $-x_2 \leq 0 \implies x_2 \geq 0 \quad (5)$
3.  **Complementary Slackness:**
    $\lambda_1 (x_1 + x_2 - 4) = 0 \quad (6)$
    $\lambda_2 (-x_1) = 0 \implies \lambda_2 x_1 = 0 \quad (7)$
    $\lambda_3 (-x_2) = 0 \implies \lambda_3 x_2 = 0 \quad (8)$
4.  **Dual Feasibility:**
    $\lambda_1 \geq 0, \lambda_2 \geq 0, \lambda_3 \geq 0 \quad (9)$

Now, let's consider cases based on which constraints are active. The unconstrained minimum is $(2,3)$. Let's check if $(2,3)$ is feasible:
$2 + 3 = 5$, which is NOT $\leq 4$. So the constraint $x_1+x_2 \leq 4$ is violated.
This means the optimal solution must lie on the boundary $x_1+x_2 = 4$.

Assume the active constraint is $x_1 + x_2 - 4 = 0$ (constraint (3) is active), so $\lambda_1 > 0$.
Also assume $x_1 > 0$ and $x_2 > 0$, so $\lambda_2 = 0$ and $\lambda_3 = 0$ from (7) and (8).

From (1): $2(x_1 - 2) + \lambda_1 = 0 \implies \lambda_1 = 4 - 2x_1$
From (2): $2(x_2 - 3) + \lambda_1 = 0 \implies \lambda_1 = 6 - 2x_2$

Equating $\lambda_1$: $4 - 2x_1 = 6 - 2x_2 \implies 2x_2 - 2x_1 = 2 \implies x_2 - x_1 = 1 \implies x_2 = x_1 + 1$.

Substitute this into the active constraint (3):
$x_1 + (x_1 + 1) - 4 = 0$
$2x_1 - 3 = 0 \implies x_1 = 3/2 = 1.5$

Then $x_2 = x_1 + 1 = 1.5 + 1 = 2.5$.
Let's check feasibility:
$x_1 = 1.5 \geq 0$ (OK)
$x_2 = 2.5 \geq 0$ (OK)
$x_1 + x_2 = 1.5 + 2.5 = 4 \leq 4$ (OK)
So, $(1.5, 2.5)$ is a feasible point.

Now, find $\lambda_1$ using $x_1=1.5$:
$\lambda_1 = 4 - 2(1.5) = 4 - 3 = 1$.
Check dual feasibility: $\lambda_1 = 1 \geq 0$ (OK). $\lambda_2=0, \lambda_3=0 \geq 0$ (OK).

So, the point $(x_1, x_2) = (1.5, 2.5)$ with multipliers $(\lambda_1, \lambda_2, \lambda_3) = (1, 0, 0)$ satisfies all KKT conditions.
Since this is a convex programming problem, this point is the global optimum.
The optimal value of the objective function is $f(1.5, 2.5) = (1.5 - 2)^2 + (2.5 - 3)^2 = (-0.5)^2 + (-0.5)^2 = 0.25 + 0.25 = 0.5$.

**Optimal Solution:** $(1.5, 2.5)$

**Question 2:**
Consider the problem: Minimize $f(x) = x^4$ where $x$ is a single variable.
**(a)** Is this an unconstrained or constrained problem?
**(b)** Find the gradient of the function.
**(c)** Use the gradient descent method to find the minimum, starting with $x^{(0)} = 2$. Assume a step size of $\alpha = 0.1$.

**Answer 2:**
**(a)** This is an unconstrained non-linear programming problem.

**(b)**
The gradient of the function $f(x) = x^4$ is its first derivative:
$\nabla f(x) = \frac{df}{dx} = 4x^3$

**(c)**
We use the gradient descent update rule: $x^{(k+1)} = x^{(k)} - \alpha \nabla f(x^{(k)})$.
Given $x^{(0)} = 2$ and $\alpha = 0.1$.

*   **Iteration 1:**
    $\nabla f(x^{(0)}) = \nabla f(2) = 4(2)^3 = 4(8) = 32$.
    $x^{(1)} = x^{(0)} - \alpha \nabla f(x^{(0)}) = 2 - 0.1(32) = 2 - 3.2 = -1.2$.

*   **Iteration 2:**
    $\nabla f(x^{(1)}) = \nabla f(-1.2) = 4(-1.2)^3 = 4(-1.728) = -6.912$.
    $x^{(2)} = x^{(1)} - \alpha \nabla f(x^{(1)}) = -1.2 - 0.1(-6.912) = -1.2 + 0.6912 = -0.5088$.

*   **Iteration 3:**
    $\nabla f(x^{(2)}) = \nabla f(-0.5088) = 4(-0.5088)^3 \approx 4(-0.1318) \approx -0.527$.
    $x^{(3)} = x^{(2)} - \alpha \nabla f(x^{(2)}) = -0.5088 - 0.1(-0.527) = -0.5088 + 0.0527 = -0.4561$.

As we can see, the values of $x$ are moving towards 0, which is the true minimum of $f(x)=x^4$. With a fixed step size, it might take many iterations to converge.

**Important Point to Remember:** Gradient descent moves in the direction opposite to the gradient. For a minimization problem, this means moving downhill.

## Summary of Key Concepts

*   **Non-Linear Programming (NLP):** Optimization problems with non-linear objective functions or constraints.
*   **Convex Programming:** A subset of NLP where local optima are global optima, making them easier to solve.
*   **Gradient Descent:** An iterative method for unconstrained optimization that moves in the direction of the steepest descent.
*   **Newton's Method:** An iterative method for unconstrained optimization that uses second-order information (Hessian) for faster convergence.
*   **Lagrangian Function & KKT Conditions:** Essential tools for analyzing and solving constrained non-linear programming problems. KKT conditions provide necessary conditions for optimality, and for convex problems, they are also sufficient.
*   **Applications:** Portfolio optimization, engineering design, economic modeling, logistics, etc.

**Further Reading/Reference Points:**

*   **Srinivasan, G. (2017):** Look for chapters specifically dedicated to Non-Linear Programming, focusing on theoretical foundations and basic methods.
*   **Gupta & Hira (2008):** Provides step-by-step explanations of algorithms and examples.
*   **Vohra & Arora (2021):** Offers a management perspective and case studies where NLP is applied.
*   **Rao, S.S. (2nd Edition):** For a deeper dive into the mathematical rigor and advanced techniques of optimization.
*   **Hillier & Lieberman (11th Edition):** Comprehensive coverage with clear explanations and numerous examples, especially good for understanding the intuition behind the methods.

This module introduces a complex but vital area of Operations Research. Understanding these core concepts will enable you to identify and approach real-world problems that cannot be adequately modeled by linear programming.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
