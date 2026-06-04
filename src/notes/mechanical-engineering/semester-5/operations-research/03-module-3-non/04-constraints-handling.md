---
title: "Constraints handling"
subject: "OPERATIONS RESEARCH"
module: "Module 3: Non"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf480446362b"
status: "completed"
scrapedAt: "2026-05-20T18:01:59.934Z"
---
# Operations Research: Module 3 - Non-Linear Programming: Constraints Handling

**Module:** Module 3: Non-Linear Programming
**Topic:** Constraints Handling

## 1. Introduction to Non-Linear Programming (NLP)

Non-Linear Programming (NLP) deals with optimization problems where the objective function or at least one of the constraints involves non-linear relationships. This module focuses on handling these constraints effectively.

**Key Concepts:**

*   **Non-Linear Objective Function:** The function to be optimized (maximized or minimized) is not linear.
*   **Non-Linear Constraints:** One or more of the restrictions on the decision variables are not linear.
*   **Feasible Region:** The set of all points that satisfy all the constraints. In NLP, the feasible region can be curved or have a complex shape.
*   **Optimal Solution:** The point within the feasible region that yields the best value for the objective function.

**Contrast with Linear Programming (LP):**

| Feature           | Linear Programming (LP)                                  | Non-Linear Programming (NLP)                                       |
| :---------------- | :------------------------------------------------------- | :----------------------------------------------------------------- |
| Objective Function | Linear                                                   | Non-linear                                                         |
| Constraints       | Linear inequalities or equalities                        | At least one constraint is non-linear, or the objective is non-linear |
| Feasible Region   | Convex polyhedron (linear boundaries)                    | Can be curved, non-convex, or complex                            |
| Solution Methods  | Simplex method, graphical method, interior-point methods | Gradient descent, Newton's method, sequential quadratic programming, Lagrange multipliers |
| Uniqueness of Opt. | Global optimum is usually found if one exists            | May have local optima, finding the global optimum can be challenging |

**References:**

*   **Gupta & Hira, Third Edition:** Chapters on Non-Linear Programming would cover the fundamental differences and formulations.
*   **Srinivasan, Third Edition:** May offer insights into modeling NLP problems.
*   **Rao, Second Edition:** Likely provides a rigorous mathematical treatment of NLP.
*   **Hillier & Lieberman, Eleventh Edition:** Chapters on NLP will be crucial for understanding the challenges and solution approaches.

## 2. Types of Non-Linearity

Non-linearity can appear in various forms:

*   **Quadratic Programming (QP):** Objective function is quadratic, and constraints are linear.
    *   *Example:* Minimize $f(x_1, x_2) = x_1^2 + x_2^2$ subject to $x_1 + x_2 \le 10$, $x_1, x_2 \ge 0$.
*   **Convex Programming:** The objective function is convex (for minimization) or concave (for maximization), and the feasible region is a convex set. This is a desirable property as local optima are also global optima.
*   **Non-Convex Programming:** Either the objective function or the feasible region (or both) are non-convex. This makes finding the global optimum significantly harder.

**Important Point:** Convexity simplifies the search for optimal solutions in NLP.

## 3. Handling Constraints in NLP

The presence of non-linear constraints introduces significant challenges compared to LP. The core idea is to transform the problem or use iterative methods that respect these constraints.

### 3.1. General Approach: Penalty Methods

Penalty methods are a common strategy for handling constraints in NLP. The idea is to convert a constrained NLP problem into an unconstrained (or simpler constrained) problem by adding a penalty term to the objective function for violating constraints.

**Concept:**

For a minimization problem with a constraint $g(x) \le 0$:

If $g(x) > 0$ (constraint violated), add a penalty to the objective function.
If $g(x) \le 0$ (constraint satisfied), add nothing or a small value.

**Types of Penalty Functions:**

*   **Exterior Penalty Method:** The penalty is applied when the solution moves *outside* the feasible region.
    *   **Problem:** Minimize $f(x)$ subject to $g_i(x) \le 0$, $i=1, \dots, m$.
    *   **Unconstrained Problem:** Minimize $P(x, r) = f(x) + r \sum_{i=1}^{m} \phi(g_i(x))$, where $r > 0$ is the penalty parameter and $\phi$ is a penalty function.
    *   **Common Penalty Function $\phi(g_i(x))$:**
        *   $\phi(g_i(x)) = \max(0, g_i(x))^2$ (Quadratic penalty)
        *   $\phi(g_i(x)) = \max(0, g_i(x))$ (Linear penalty)

    *   **Procedure:**
        1.  Start with a small value of $r$ (e.g., $r_1$).
        2.  Solve the unconstrained problem: Minimize $P(x, r_k)$. Let the solution be $x_k^*$.
        3.  Increase $r$ (e.g., $r_{k+1} = \alpha r_k$, where $\alpha > 1$).
        4.  Repeat steps 2 and 3 until convergence (e.g., the change in $x^*$ is small or the penalty term is negligible).

    *   **Example (Quadratic Penalty):** Minimize $f(x_1, x_2) = x_1^2 + x_2^2$ subject to $x_1 + x_2 \le 10$.
        *   Let $g_1(x_1, x_2) = x_1 + x_2 - 10$.
        *   The penalized function is $P(x_1, x_2, r) = x_1^2 + x_2^2 + r (\max(0, x_1 + x_2 - 10))^2$.
        *   We would iteratively solve for $x_1, x_2$ by increasing $r$.

*   **Interior Penalty Method (Barrier Method):** The penalty is applied when the solution approaches the boundary of the feasible region *from the inside*. This is useful when the feasible region is defined by inequality constraints, and we want to avoid leaving it.

    *   **Problem:** Minimize $f(x)$ subject to $g_i(x) \le 0$, $i=1, \dots, m$.
    *   **Unconstrained Problem:** Minimize $P(x, r) = f(x) - r \sum_{i=1}^{m} \psi(g_i(x))$, where $r > 0$ is the penalty parameter and $\psi$ is a barrier function.
    *   **Common Barrier Function $\psi(g_i(x))$:**
        *   $\psi(g_i(x)) = \log(-g_i(x))$ (Logarithmic barrier)
        *   $\psi(g_i(x)) = -1/g_i(x)$ (Inverse barrier)

    *   **Procedure:**
        1.  Start with a large value of $r$ (e.g., $r_1$).
        2.  Solve the unconstrained problem: Minimize $P(x, r_k)$. Let the solution be $x_k^*$.
        3.  Decrease $r$ (e.g., $r_{k+1} = r_k / \alpha$, where $\alpha > 1$).
        4.  Repeat steps 2 and 3 until convergence.

    *   **Example (Logarithmic Barrier):** Minimize $f(x_1, x_2) = x_1^2 + x_2^2$ subject to $x_1 + x_2 \le 10$, $x_1 > 0$, $x_2 > 0$.
        *   Let $g_1(x_1, x_2) = x_1 + x_2 - 10$, $g_2(x_1, x_2) = -x_1$, $g_3(x_1, x_2) = -x_2$.
        *   The penalized function is $P(x_1, x_2, r) = x_1^2 + x_2^2 - r (\log(-g_2) + \log(-g_3))$.
        *   We would iteratively solve for $x_1, x_2$ by decreasing $r$.

**References:**

*   **Gupta & Hira, Third Edition:** Likely discusses penalty and barrier methods in detail.
*   **Srinivasan, Third Edition:** May provide modeling examples using these techniques.
*   **Vohra & Arora, Sixth Edition:** Will certainly cover these foundational NLP techniques.
*   **Rao, Second Edition:** Offers a theoretical basis for these methods.
*   **Hillier & Lieberman, Eleventh Edition:** Provides practical explanations and examples.
*   **Ravindran, Phillips, Solberg, 1987:** Chapters on optimization algorithms would cover penalty methods.

### 3.2. Lagrange Multipliers and Karush-Kuhn-Tucker (KKT) Conditions

For problems with equality constraints, Lagrange Multipliers are used. For problems with both equality and inequality constraints, the Karush-Kuhn-Tucker (KKT) conditions generalize this concept.

**3.2.1. Lagrange Multipliers (for Equality Constraints)**

*   **Problem:** Minimize (or Maximize) $f(x)$ subject to $h(x) = 0$.
*   **Lagrangian Function:** $L(x, \lambda) = f(x) + \lambda h(x)$, where $\lambda$ is the Lagrange multiplier.
*   **First-Order Necessary Conditions:** To find the optimal solution, we set the gradient of the Lagrangian to zero:
    *   $\nabla_x L(x, \lambda) = \nabla_x f(x) + \lambda \nabla_x h(x) = 0$
    *   $\frac{\partial L}{\partial \lambda} = h(x) = 0$

    These conditions give us a system of equations to solve for $x$ and $\lambda$.

*   **Example:** Minimize $f(x_1, x_2) = x_1^2 + x_2^2$ subject to $x_1 + x_2 = 10$.
    *   $h(x_1, x_2) = x_1 + x_2 - 10 = 0$.
    *   Lagrangian: $L(x_1, x_2, \lambda) = x_1^2 + x_2^2 + \lambda (x_1 + x_2 - 10)$.
    *   Gradient conditions:
        *   $\frac{\partial L}{\partial x_1} = 2x_1 + \lambda = 0 \implies x_1 = -\lambda/2$
        *   $\frac{\partial L}{\partial x_2} = 2x_2 + \lambda = 0 \implies x_2 = -\lambda/2$
        *   $\frac{\partial L}{\partial \lambda} = x_1 + x_2 - 10 = 0$
    *   Substituting $x_1$ and $x_2$ into the third equation: $(-\lambda/2) + (-\lambda/2) = 10 \implies -\lambda = 10 \implies \lambda = -10$.
    *   Then, $x_1 = -(-10)/2 = 5$ and $x_2 = -(-10)/2 = 5$.
    *   The minimum value is $5^2 + 5^2 = 50$.

**3.2.2. Karush-Kuhn-Tucker (KKT) Conditions (for Equality and Inequality Constraints)**

*   **Problem:** Minimize $f(x)$ subject to:
    *   $h_i(x) = 0$ for $i=1, \dots, p$ (equality constraints)
    *   $g_j(x) \le 0$ for $j=1, \dots, m$ (inequality constraints)
    *   $x \ge 0$ (non-negativity constraints, often handled implicitly or explicitly)

*   **Lagrangian Function:** $L(x, \lambda, \mu) = f(x) + \sum_{i=1}^{p} \lambda_i h_i(x) + \sum_{j=1}^{m} \mu_j g_j(x)$, where $\lambda_i$ are Lagrange multipliers for equality constraints and $\mu_j$ are Lagrange multipliers for inequality constraints.

*   **KKT Conditions (Necessary Conditions for Optimality):**
    1.  **Stationarity:** $\nabla_x L(x, \lambda, \mu) = 0$. This means $\nabla f(x) + \sum \lambda_i \nabla h_i(x) + \sum \mu_j \nabla g_j(x) = 0$.
    2.  **Primal Feasibility:** $h_i(x) = 0$ for all $i$, and $g_j(x) \le 0$ for all $j$.
    3.  **Dual Feasibility:** $\mu_j \ge 0$ for all $j$. (For minimization problems; if maximizing, $\mu_j \le 0$).
    4.  **Complementary Slackness:** $\mu_j g_j(x) = 0$ for all $j$. This means if $g_j(x) < 0$ (constraint is not binding), then $\mu_j$ must be 0. If $\mu_j > 0$, then $g_j(x)$ must be 0 (constraint is binding).

*   **If the problem is Convex:** The KKT conditions are also *sufficient* for optimality. This is a crucial result.

*   **Example:** Minimize $f(x_1, x_2) = x_1^2 + x_2^2$ subject to $x_1 + x_2 \le 10$, $x_1 \ge 0$, $x_2 \ge 0$.
    *   Rewrite constraints: $g_1(x_1, x_2) = x_1 + x_2 - 10 \le 0$.
    *   Non-negativity constraints: $g_2(x_1, x_2) = -x_1 \le 0$, $g_3(x_1, x_2) = -x_2 \le 0$.
    *   Lagrangian: $L(x_1, x_2, \mu_1, \mu_2, \mu_3) = x_1^2 + x_2^2 + \mu_1(x_1 + x_2 - 10) + \mu_2(-x_1) + \mu_3(-x_2)$.
    *   KKT Conditions:
        1.  **Stationarity:**
            *   $\frac{\partial L}{\partial x_1} = 2x_1 + \mu_1 - \mu_2 = 0$
            *   $\frac{\partial L}{\partial x_2} = 2x_2 + \mu_1 - \mu_3 = 0$
        2.  **Primal Feasibility:**
            *   $x_1 + x_2 - 10 \le 0$
            *   $-x_1 \le 0 \implies x_1 \ge 0$
            *   $-x_2 \le 0 \implies x_2 \ge 0$
        3.  **Dual Feasibility:** $\mu_1 \ge 0, \mu_2 \ge 0, \mu_3 \ge 0$.
        4.  **Complementary Slackness:**
            *   $\mu_1 (x_1 + x_2 - 10) = 0$
            *   $\mu_2 (-x_1) = 0 \implies \mu_2 x_1 = 0$
            *   $\mu_3 (-x_2) = 0 \implies \mu_3 x_2 = 0$

    *   **Solving KKT:** We need to consider cases based on which constraints are binding.
        *   **Case 1: All constraints inactive.** This is not possible since $x_1, x_2 \ge 0$ and $x_1+x_2 \le 10$ implies a bounded region, and typically the optimum will be on the boundary.
        *   **Case 2: $x_1+x_2 < 10$, $x_1 > 0$, $x_2 > 0$.**
            *   From complementary slackness: $\mu_1 = 0, \mu_2 = 0, \mu_3 = 0$.
            *   From stationarity: $2x_1 = 0 \implies x_1 = 0$; $2x_2 = 0 \implies x_2 = 0$.
            *   This violates $x_1>0, x_2>0$. So this case is not the solution.
        *   **Case 3: $x_1+x_2 = 10$, $x_1 > 0$, $x_2 > 0$.**
            *   $\mu_1 \ge 0$, $\mu_2 = 0$, $\mu_3 = 0$.
            *   Stationarity: $2x_1 + \mu_1 = 0$, $2x_2 + \mu_1 = 0$.
            *   This implies $x_1 = -\mu_1/2$ and $x_2 = -\mu_1/2$.
            *   Since $\mu_1 \ge 0$, both $x_1, x_2$ must be $\le 0$. This contradicts $x_1 > 0, x_2 > 0$. So this case is not the solution.
        *   **Case 4: $x_1+x_2 < 10$, $x_1 = 0$, $x_2 > 0$.**
            *   $\mu_1 = 0$, $\mu_2 \ge 0$, $\mu_3 = 0$.
            *   Stationarity: $2x_1 + 0 - \mu_2 = 0 \implies 2(0) - \mu_2 = 0 \implies \mu_2 = 0$.
            *   $2x_2 + 0 - 0 = 0 \implies x_2 = 0$.
            *   This contradicts $x_2 > 0$.
        *   **Case 5: $x_1+x_2 < 10$, $x_1 > 0$, $x_2 = 0$.**
            *   $\mu_1 = 0$, $\mu_2 = 0$, $\mu_3 \ge 0$.
            *   Stationarity: $2x_1 + 0 - 0 = 0 \implies x_1 = 0$.
            *   This contradicts $x_1 > 0$.
        *   **Case 6: $x_1+x_2 = 10$, $x_1 = 0$, $x_2 > 0$.**
            *   Constraint is $x_2 = 10$. So $x_1=0, x_2=10$.
            *   $\mu_1 \ge 0$, $\mu_2 \ge 0$, $\mu_3 = 0$.
            *   Stationarity: $2(0) + \mu_1 - \mu_2 = 0 \implies \mu_1 = \mu_2$.
            *   $2(10) + \mu_1 - 0 = 0 \implies 20 + \mu_1 = 0 \implies \mu_1 = -20$.
            *   This violates $\mu_1 \ge 0$.
        *   **Case 7: $x_1+x_2 = 10$, $x_1 > 0$, $x_2 = 0$.**
            *   Constraint is $x_1 = 10$. So $x_1=10, x_2=0$.
            *   $\mu_1 \ge 0$, $\mu_2 = 0$, $\mu_3 \ge 0$.
            *   Stationarity: $2(10) + \mu_1 - 0 = 0 \implies 20 + \mu_1 = 0 \implies \mu_1 = -20$.
            *   This violates $\mu_1 \ge 0$.
        *   **Case 8: $x_1+x_2 < 10$, $x_1 = 0$, $x_2 = 0$.** (Origin)
            *   $x_1=0, x_2=0$. $0+0 < 10$ (Satisfied).
            *   $\mu_1 = 0, \mu_2 \ge 0, \mu_3 \ge 0$.
            *   Stationarity: $2(0) + 0 - \mu_2 = 0 \implies \mu_2 = 0$.
            *   $2(0) + 0 - \mu_3 = 0 \implies \mu_3 = 0$.
            *   All conditions satisfied. $f(0,0) = 0$. This is a candidate for minimum.
        *   **Case 9: $x_1+x_2 = 10$, $x_1 = 0$, $x_2 = 0$.** (Impossible)

        Wait, the example $f(x_1, x_2) = x_1^2 + x_2^2$ subject to $x_1 + x_2 \le 10$, $x_1 \ge 0$, $x_2 \ge 0$. The minimum is at $(0,0)$ with value $0$. Let's re-verify the KKT analysis.

        My KKT conditions were correct. Let's re-examine the cases.
        The minimum of $x_1^2 + x_2^2$ in the feasible region (a triangle with vertices (0,0), (10,0), (0,10)) is clearly at (0,0).

        Let's check KKT at (0,0):
        *   $x_1 = 0, x_2 = 0$. Primal feasibility: $0+0-10 \le 0$ (OK), $-0 \le 0$ (OK), $-0 \le 0$ (OK).
        *   Complementary slackness: $\mu_1 (0+0-10) = 0 \implies -10\mu_1 = 0 \implies \mu_1 = 0$.
        *   $\mu_2 (-0) = 0$ (holds for any $\mu_2$).
        *   $\mu_3 (-0) = 0$ (holds for any $\mu_3$).
        *   Stationarity:
            *   $2(0) + \mu_1 - \mu_2 = 0 \implies 0 + 0 - \mu_2 = 0 \implies \mu_2 = 0$.
            *   $2(0) + \mu_1 - \mu_3 = 0 \implies 0 + 0 - \mu_3 = 0 \implies \mu_3 = 0$.
        *   Dual feasibility: $\mu_1=0 \ge 0$, $\mu_2=0 \ge 0$, $\mu_3=0 \ge 0$. (OK).

        So KKT conditions are satisfied at $(0,0)$ with $\mu_1=0, \mu_2=0, \mu_3=0$. This confirms $(0,0)$ is a KKT point.

        Consider a point on the boundary $x_1+x_2=10$, e.g., $(5,5)$.
        *   $x_1=5, x_2=5$. Primal feasibility: $5+5-10 \le 0$ (OK, binding), $-5 \le 0$ (OK), $-5 \le 0$ (OK).
        *   Complementary slackness: $\mu_1 (5+5-10) = 0 \implies \mu_1(0)=0$ (holds for any $\mu_1$).
        *   $\mu_2 (-5) = 0 \implies \mu_2 = 0$.
        *   $\mu_3 (-5) = 0 \implies \mu_3 = 0$.
        *   Stationarity:
            *   $2(5) + \mu_1 - \mu_2 = 0 \implies 10 + \mu_1 - 0 = 0 \implies \mu_1 = -10$.
            *   $2(5) + \mu_1 - \mu_3 = 0 \implies 10 + \mu_1 - 0 = 0 \implies \mu_1 = -10$.
        *   Dual feasibility: $\mu_1 = -10$ violates $\mu_1 \ge 0$. So $(5,5)$ is not a KKT point.

        The example highlights that KKT conditions need to be carefully checked for all combinations of binding constraints.

**References:**

*   **Gupta & Hira, Third Edition:** Chapter on NLP would cover Lagrange Multipliers and KKT Conditions.
*   **Srinivasan, Third Edition:** Might use KKT conditions in formulating or solving specific types of problems.
*   **Vohra & Arora, Sixth Edition:** Essential for understanding the derivation and application of KKT conditions.
*   **Rao, Second Edition:** Provides a thorough mathematical treatment of optimality conditions.
*   **Hillier & Lieberman, Eleventh Edition:** Offers clear explanations and examples for KKT conditions.
*   **Ravindran, Phillips, Solberg, 1987:** Likely covers these foundational concepts in optimization.

### 3.3. Other Methods for Constraint Handling

Beyond penalty methods and KKT conditions, various algorithmic approaches exist:

*   **Sequential Quadratic Programming (SQP):** Solves a sequence of quadratic programming subproblems to approximate the NLP problem. This is a powerful and widely used method.
*   **Augmented Lagrangian Methods:** Combine Lagrange multipliers with penalty functions, often leading to better numerical stability and convergence properties than pure penalty methods.
*   **Interior Point Methods:** Extend the techniques used for LP to NLP, especially effective for large-scale problems.
*   **Gradient Projection Methods:** Useful when dealing with box constraints (e.g., $0 \le x_i \le U_i$). They combine gradient descent with a projection step onto the feasible region.

**References:**

*   **Rao, Second Edition:** Likely discusses advanced methods like SQP and Augmented Lagrangian.
*   **Hillier & Lieberman, Eleventh Edition:** May introduce some of these advanced techniques.
*   **S.S. Rao's "Optimization: Theory and Applications"** is a primary source for deeper understanding of these algorithms.

## 4. Handling Non-Convexity and Local Optima

A significant challenge in NLP is the possibility of multiple local optima. For non-convex problems, algorithms might converge to a local optimum that is not the globally best solution.

**Strategies:**

*   **Global Optimization Techniques:**
    *   **Branch and Bound:** For certain types of non-convex problems (e.g., separable non-convex programs).
    *   **Simulated Annealing, Genetic Algorithms, Particle Swarm Optimization:** These are metaheuristic approaches inspired by natural processes that can explore the search space more broadly and have a better chance of finding the global optimum, though without guarantees. (Relates to CO4).
*   **Starting Point Sensitivity:** Run the algorithm from multiple starting points to increase the chance of finding the global optimum.
*   **Problem Decomposition:** Break down a complex non-convex problem into smaller, more manageable convex subproblems.

**References:**

*   **Pratikar, 2015:** "Soft Computing Fundamentals and Applications" is directly relevant to metaheuristic approaches for global optimization.
*   **Rao, Second Edition:** Will cover theoretical aspects of global optimization.
*   **Hillier & Lieberman, Eleventh Edition:** May discuss limitations of standard algorithms for non-convex problems.

## 5. Practice Questions and Exercises

**Instructions:** For each question, identify the type of problem and the constraint handling approach you might use.

**Question 1 (Conceptual):**
Explain the fundamental difference between handling constraints in Linear Programming and Non-Linear Programming. Mention one technique used to handle constraints in NLP that is not directly applicable in LP.

**Answer:**
In LP, constraints are linear, resulting in a convex polyhedron feasible region. Simplex methods or interior-point methods efficiently navigate this region. In NLP, non-linear constraints lead to complex, possibly non-convex feasible regions. Techniques like penalty methods, barrier methods, and Lagrange multipliers (generalized by KKT conditions) are used to incorporate these non-linearities. Penalty methods transform the problem by adding a penalty for constraint violation, which is not a standard approach in LP.

**Question 2 (Lagrange Multipliers):**
Minimize $f(x_1, x_2) = 2x_1^2 + 3x_2^2$ subject to the constraint $x_1 + x_2 = 10$.

**Answer:**
*   Objective: Minimize $f(x_1, x_2) = 2x_1^2 + 3x_2^2$
*   Constraint: $h(x_1, x_2) = x_1 + x_2 - 10 = 0$
*   Lagrangian: $L(x_1, x_2, \lambda) = 2x_1^2 + 3x_2^2 + \lambda(x_1 + x_2 - 10)$
*   Gradient conditions:
    *   $\frac{\partial L}{\partial x_1} = 4x_1 + \lambda = 0 \implies x_1 = -\lambda/4$
    *   $\frac{\partial L}{\partial x_2} = 6x_2 + \lambda = 0 \implies x_2 = -\lambda/6$
    *   $\frac{\partial L}{\partial \lambda} = x_1 + x_2 - 10 = 0$
*   Substitute $x_1, x_2$ into the constraint:
    $(-\lambda/4) + (-\lambda/6) = 10$
    $(-3\lambda - 2\lambda)/12 = 10$
    $-5\lambda/12 = 10 \implies \lambda = -24$
*   Find $x_1, x_2$:
    $x_1 = -(-24)/4 = 6$
    $x_2 = -(-24)/6 = 4$
*   The minimum value is $f(6,4) = 2(6^2) + 3(4^2) = 2(36) + 3(16) = 72 + 48 = 120$.
*   **Important Point:** For minimization with equality constraints, the Lagrange multiplier is typically negative if the function is "pushing against" the constraint.

**Question 3 (KKT Conditions):**
Consider the problem: Maximize $f(x_1, x_2) = 10x_1 - x_1^2 + 15x_2 - x_2^2$ subject to $x_1 + x_2 \le 12$, $x_1 \ge 0$, $x_2 \ge 0$.

**Answer:**
*   Rewrite for minimization: Minimize $f'(x_1, x_2) = -10x_1 + x_1^2 - 15x_2 + x_2^2$
*   Constraints:
    *   $g_1(x_1, x_2) = x_1 + x_2 - 12 \le 0$
    *   $g_2(x_1, x_2) = -x_1 \le 0$
    *   $g_3(x_1, x_2) = -x_2 \le 0$
*   Lagrangian: $L(x_1, x_2, \mu_1, \mu_2, \mu_3) = -10x_1 + x_1^2 - 15x_2 + x_2^2 + \mu_1(x_1 + x_2 - 12) + \mu_2(-x_1) + \mu_3(-x_2)$
*   KKT Conditions:
    1.  **Stationarity:**
        *   $\frac{\partial L}{\partial x_1} = -10 + 2x_1 + \mu_1 - \mu_2 = 0$
        *   $\frac{\partial L}{\partial x_2} = -15 + 2x_2 + \mu_1 - \mu_3 = 0$
    2.  **Primal Feasibility:** $x_1 + x_2 \le 12$, $x_1 \ge 0$, $x_2 \ge 0$.
    3.  **Dual Feasibility:** $\mu_1 \ge 0, \mu_2 \ge 0, \mu_3 \ge 0$. (For maximization, we use $\mu_j$ for $g_j \le 0$, and the conditions $\nabla f + \sum \lambda_i \nabla h_i + \sum \mu_j \nabla g_j = 0$ and $\mu_j \ge 0$ hold. If we were minimizing $-f$, then $\mu_j$ would be negative for the constraint that was active in maximization).

    Let's re-evaluate KKT for maximization directly:
    Maximize $f(x)$ s.t. $h_i(x)=0$, $g_j(x) \le 0$.
    Lagrangian $L(x, \lambda, \mu) = f(x) - \sum \lambda_i h_i(x) - \sum \mu_j g_j(x)$.
    Conditions: $\nabla_x L = 0$, $h_i(x)=0$, $g_j(x) \le 0$, $\mu_j \ge 0$, $\mu_j g_j(x) = 0$.

    Maximize $f(x_1, x_2) = 10x_1 - x_1^2 + 15x_2 - x_2^2$
    Subject to: $g_1(x_1, x_2) = x_1 + x_2 - 12 \le 0$, $g_2(x_1, x_2) = -x_1 \le 0$, $g_3(x_1, x_2) = -x_2 \le 0$.
    Lagrangian: $L(x_1, x_2, \mu_1, \mu_2, \mu_3) = (10x_1 - x_1^2 + 15x_2 - x_2^2) - \mu_1(x_1 + x_2 - 12) - \mu_2(-x_1) - \mu_3(-x_2)$

    1.  **Stationarity:**
        *   $\frac{\partial L}{\partial x_1} = 10 - 2x_1 - \mu_1 + \mu_2 = 0$
        *   $\frac{\partial L}{\partial x_2} = 15 - 2x_2 - \mu_1 + \mu_3 = 0$
    2.  **Primal Feasibility:** $x_1 + x_2 \le 12$, $x_1 \ge 0$, $x_2 \ge 0$.
    3.  **Dual Feasibility:** $\mu_1 \ge 0, \mu_2 \ge 0, \mu_3 \ge 0$.
    4.  **Complementary Slackness:**
        *   $\mu_1 (x_1 + x_2 - 12) = 0$
        *   $\mu_2 (-x_1) = 0 \implies \mu_2 x_1 = 0$
        *   $\mu_3 (-x_2) = 0 \implies \mu_3 x_2 = 0$

    *   **Solving KKT:** The unconstrained maximum of $f(x_1, x_2)$ occurs at $\nabla f = 0$:
        *   $10 - 2x_1 = 0 \implies x_1 = 5$
        *   $15 - 2x_2 = 0 \implies x_2 = 7.5$
    *   Check feasibility for $(5, 7.5)$:
        *   $x_1 + x_2 = 5 + 7.5 = 12.5$.
        *   $12.5 \le 12$ is FALSE. The constraint $x_1 + x_2 \le 12$ is violated.
    *   This means the optimum must be on the boundary $x_1 + x_2 = 12$.

    *   **Case: $x_1+x_2=12$, $x_1>0$, $x_2>0$.**
        *   Complementary slackness: $\mu_1 \ge 0$, $\mu_2 = 0$, $\mu_3 = 0$.
        *   Stationarity:
            *   $10 - 2x_1 - \mu_1 = 0 \implies \mu_1 = 10 - 2x_1$
            *   $15 - 2x_2 - \mu_1 = 0 \implies \mu_1 = 15 - 2x_2$
        *   Equating $\mu_1$: $10 - 2x_1 = 15 - 2x_2 \implies 2x_2 - 2x_1 = 5 \implies x_2 - x_1 = 2.5$.
        *   We have a system of equations:
            *   $x_1 + x_2 = 12$
            *   $x_2 - x_1 = 2.5$
        *   Adding the two equations: $2x_2 = 14.5 \implies x_2 = 7.25$.
        *   Substituting $x_2$ back: $x_1 + 7.25 = 12 \implies x_1 = 4.75$.
        *   Check feasibility: $x_1=4.75>0$, $x_2=7.25>0$, $x_1+x_2 = 4.75+7.25 = 12 \le 12$. (OK).
        *   Calculate $\mu_1$: $\mu_1 = 10 - 2(4.75) = 10 - 9.5 = 0.5$.
        *   Dual feasibility: $\mu_1 = 0.5 \ge 0$, $\mu_2=0 \ge 0$, $\mu_3=0 \ge 0$. (OK).
        *   All KKT conditions are satisfied for $(x_1, x_2) = (4.75, 7.25)$.
    *   The maximum value is $f(4.75, 7.25) = 10(4.75) - (4.75)^2 + 15(7.25) - (7.25)^2$
        $f(4.75, 7.25) = 47.5 - 22.5625 + 108.75 - 52.5625 = 81.125$.

    *   **Important Point:** For maximization problems, the objective function is often transformed into minimization of its negative. The KKT conditions need to be applied carefully based on whether it's a minimization or maximization problem. For minimization, $\mu_j \ge 0$ for $g_j \le 0$. For maximization, $\mu_j \ge 0$ for $g_j \le 0$ (if using the formulation $L = f - \sum \mu_j g_j$).

**Question 4 (Penalty Method - Conceptual):**
Describe how you would use an exterior penalty method to solve the problem: Minimize $f(x_1, x_2) = x_1^2 + x_2^2$ subject to $x_1 + x_2 \ge 5$.

**Answer:**
*   **Problem Formulation:** Minimize $f(x_1, x_2) = x_1^2 + x_2^2$ subject to $g_1(x_1, x_2) = 5 - x_1 - x_2 \le 0$.
*   **Penalized Function:** Using a quadratic penalty function, the new objective becomes:
    $P(x_1, x_2, r) = f(x_1, x_2) + r (\max(0, g_1(x_1, x_2)))^2$
    $P(x_1, x_2, r) = x_1^2 + x_2^2 + r (\max(0, 5 - x_1 - x_2))^2$
*   **Procedure:**
    1.  Choose an initial penalty parameter $r_1$ (e.g., $r_1 = 1$).
    2.  Solve the unconstrained minimization problem: Minimize $P(x_1, x_2, r_1)$. Let the solution be $(x_1^*, x_2^*)$.
    3.  Update the penalty parameter: $r_2 = 10 \cdot r_1$ (or some multiplier $\alpha > 1$).
    4.  Solve the unconstrained minimization problem: Minimize $P(x_1, x_2, r_2)$. Let the solution be $(x_1^{**}, x_2^{**})$.
    5.  Continue increasing $r$ and solving the unconstrained problem until the solution $(x_1^{(k)}, x_2^{(k)})$ converges (e.g., the change in $x$ between iterations is very small, or the penalty term itself becomes negligible compared to the objective function value).
*   **Important Point:** The penalty parameter $r$ must be increased iteratively for the method to work correctly.

## 6. Important Points to Remember

*   **Non-linearities:** Can exist in the objective function or constraints.
*   **Feasible Region:** Can be non-convex, leading to multiple local optima.
*   **Penalty Methods:** Convert constrained problems to unconstrained ones by adding penalties for constraint violation (exterior) or approaching boundaries (interior).
*   **Lagrange Multipliers & KKT Conditions:** Powerful tools for finding necessary (and sometimes sufficient) conditions for optimality in constrained NLP. Must handle equality and inequality constraints separately and check all conditions carefully.
*   **Convexity is Key:** For convex problems, KKT conditions are sufficient for global optimality. For non-convex problems, KKT points are only candidates for local optima.
*   **Global Optimization:** Specialized techniques are needed for non-convex problems to increase the chance of finding the global optimum.
*   **Course Outcomes Alignment:** This topic directly supports CO1 (formulating and solving problems), extending it to non-linear cases. Techniques learned here are foundational for understanding more advanced optimization algorithms, including those in CO4 (evolutionary algorithms) which often deal with complex, non-linear search spaces.

## 7. Review and Self-Assessment

*   Can you identify whether a given problem is a Linear Program or a Non-Linear Program?
*   Do you understand the purpose of penalty and barrier functions?
*   Can you formulate the Lagrangian function and state the KKT conditions for a given NLP problem?
*   Are you able to solve simple NLP problems using Lagrange multipliers and by checking KKT conditions?
*   What are the main challenges when dealing with non-linear constraints, especially non-convex ones?

This concludes the notes on Constraints Handling in Non-Linear Programming. Ensure to refer back to the mentioned textbooks for detailed derivations and more examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
