---
title: "Convexity and concavity of functions –Definition of Global and Local optima – Optimality criteria"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 1: Engineering application of Optimization – Statement of an Optimization problem–Classification"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fef2a"
status: "completed"
scrapedAt: "2026-05-23T18:02:27.221Z"
---
# OPTIMIZATION TECHNIQUES: MODULE 1 - Engineering Application of Optimization

## Topic: Convexity and Concavity of Functions, Global and Local Optima, Optimality Criteria

---

### **Introduction to Optimization**

Optimization is a fundamental aspect of engineering, aiming to find the best possible solution (maximum or minimum) for a given problem under specific constraints. This module lays the groundwork by introducing the core concepts of optimization, including defining an optimization problem, classifying them, understanding function properties like convexity, identifying optima, and establishing optimality criteria.

**Referenced Texts:**

*   **S.S. Rao, "Engineering Optimization, Theory and Practice" (4th Ed., 2012):** Provides a solid foundation in the theory and practical applications of optimization, particularly in engineering contexts. This text will be a primary reference for defining optimization problems and classifying them.
*   **Chong & Hak, "An Introduction to Optimization" (4th Ed., 2013):** Offers a comprehensive treatment of optimization principles, including detailed discussions on convexity, optimality conditions, and various optimization algorithms.

---

### **1. Engineering Application of Optimization: Statement of an Optimization Problem**

An optimization problem in engineering is essentially a systematic approach to finding the best design or performance from a set of available alternatives.

**Key Concepts:**

*   **Objective Function (f(x)):** A mathematical expression that quantifies the performance of a design or system. The goal is to minimize or maximize this function.
    *   *Example:* Minimizing the cost of a structure, maximizing the efficiency of a machine, minimizing the error in a prediction model.
*   **Decision Variables (x):** The parameters or quantities that can be adjusted to achieve the optimization goal. These are the "knobs" we turn.
    *   *Example:* Dimensions of a beam, speed of a motor, coefficients of a controller.
*   **Constraints:** Limitations or restrictions that the solution must satisfy. These can be in the form of equalities or inequalities.
    *   **Equality Constraints (h(x) = 0):** Conditions that must be exactly met.
        *   *Example:* A fixed volume for a container, a specific load requirement.
    *   **Inequality Constraints (g(x) ≤ 0 or g(x) ≥ 0):** Conditions that must be met within a certain range.
        *   *Example:* Material strength limits, budget restrictions, safety margins.
*   **Feasible Region:** The set of all possible solutions (values of decision variables) that satisfy all the constraints.
*   **Optimal Solution:** A feasible solution that yields the best (minimum or maximum) value of the objective function.

**General Formulation of an Optimization Problem:**

Minimize/Maximize $f(x)$
Subject to:
$h_i(x) = 0$, for $i = 1, 2, ..., m$ (Equality Constraints)
$g_j(x) \le 0$, for $j = 1, 2, ..., p$ (Inequality Constraints)
$x = [x_1, x_2, ..., x_n]^T$ (Decision Variables)

**Referenced Texts:**

*   **S.S. Rao, "Engineering Optimization, Theory and Practice":** Chapter 1 extensively covers the formulation of optimization problems with numerous engineering examples.
*   **Deb K, "Optimization for Engineering Design Algorithms and Examples":** Offers practical examples of formulating optimization problems in design contexts.

**Example:**

**Problem:** Design a cylindrical can to minimize the surface area (material cost) while holding a fixed volume $V$.

*   **Objective Function:** Minimize surface area, $A(r, h) = 2\pi r^2 + 2\pi rh$, where $r$ is the radius and $h$ is the height.
*   **Decision Variables:** $r, h$.
*   **Constraint:** Fixed volume, $\pi r^2 h = V$ (Equality Constraint).
*   **Implicit Constraints:** $r > 0$, $h > 0$ (variables must be physically meaningful).

---

### **2. Classification of Optimization Problems**

Optimization problems can be classified based on various characteristics, which helps in selecting appropriate solution methods.

**Classification Criteria:**

*   **Based on Nature of Decision Variables:**
    *   **Continuous Optimization:** Decision variables can take any real value within a given range (e.g., dimensions, weights). Most engineering problems fall into this category.
    *   **Discrete Optimization:** Decision variables can only take specific values, usually integers (e.g., number of components, configuration of a system).
        *   **Integer Programming:** All variables are integers.
        *   **Mixed-Integer Programming:** Some variables are integers, others are continuous.
*   **Based on Nature of Objective Function and Constraints:**
    *   **Linear Programming (LP):** Objective function and all constraints are linear.
        *   *Example:* Resource allocation problems, production planning.
    *   **Nonlinear Programming (NLP):** Either the objective function or at least one constraint is nonlinear. Most engineering problems are NLPs.
        *   *Example:* Structural design, control system design.
    *   **Convex Optimization:** The objective function is convex (for minimization) or concave (for maximization), and the feasible region is a convex set. Convex problems have a desirable property: any local optimum is also a global optimum.
    *   **Non-Convex Optimization:** The objective function or feasible region is not convex. These problems are generally harder to solve as they can have multiple local optima.
*   **Based on Presence of Constraints:**
    *   **Unconstrained Optimization:** No constraints are imposed on the decision variables (other than implicit domain constraints like positivity).
    *   **Constrained Optimization:** The problem involves one or more constraints.
*   **Based on Deterministic vs. Stochastic:**
    *   **Deterministic Optimization:** All parameters in the problem formulation are known constants.
    *   **Stochastic Optimization:** Some parameters are subject to randomness or uncertainty.
*   **Based on Single-Objective vs. Multi-Objective:**
    *   **Single-Objective Optimization:** There is only one objective function to optimize.
    *   **Multi-Objective Optimization:** There are multiple, often conflicting, objective functions to optimize simultaneously (e.g., minimizing cost and maximizing performance).

**Referenced Texts:**

*   **S.S. Rao, "Engineering Optimization, Theory and Practice":** Chapter 2 discusses the various classifications of optimization problems.
*   **Chong & Hak, "An Introduction to Optimization":** Provides a comprehensive overview of problem classifications.
*   **Hardley G, "Linear Programming":** Focuses specifically on the LP classification and its solution methods.

**Example:**

*   **Minimize $f(x_1, x_2) = x_1^2 + x_2^2$ subject to $x_1 + x_2 \ge 1$**: This is a **continuous, unconstrained (except for the implicit domain) nonlinear (convex) optimization problem.**
*   **Maximize $f(x_1, x_2) = 3x_1 + 2x_2$ subject to $x_1 + x_2 \le 5$, $x_1 \ge 0$, $x_2 \ge 0$**: This is a **continuous, constrained, linear optimization problem.**

---

### **3. Convexity and Concavity of Functions**

Understanding the convexity and concavity of functions is crucial because it directly impacts the nature of the optima and the difficulty of finding them.

**Definitions:**

*   **Convex Function:** A function $f(x)$ is convex if for any two points $x_1$ and $x_2$ in its domain, the line segment connecting $f(x_1)$ and $f(x_2)$ lies *above* or on the graph of the function. Mathematically, for any $0 \le \lambda \le 1$:
    $f(\lambda x_1 + (1-\lambda)x_2) \le \lambda f(x_1) + (1-\lambda)f(x_2)$

*   **Concave Function:** A function $f(x)$ is concave if for any two points $x_1$ and $x_2$ in its domain, the line segment connecting $f(x_1)$ and $f(x_2)$ lies *below* or on the graph of the function. Mathematically, for any $0 \le \lambda \le 1$:
    $f(\lambda x_1 + (1-\lambda)x_2) \ge \lambda f(x_1) + (1-\lambda)f(x_2)$
    *   *Note:* A function $f(x)$ is concave if and only if $-f(x)$ is convex.

*   **Convex Set:** A set $S$ is convex if for any two points $x_1, x_2 \in S$, the line segment connecting $x_1$ and $x_2$ is entirely contained within $S$.

**Second-Order Conditions for Convexity/Concavity (for twice-differentiable functions):**

Let $x$ be a vector in $\mathbb{R}^n$, $f(x)$ be a twice-differentiable function, $\nabla f(x)$ be its gradient, and $H(x)$ be its Hessian matrix (matrix of second partial derivatives).

*   **For a function of one variable, $f(x)$:**
    *   **Convex:** $f''(x) \ge 0$ for all $x$ in the domain.
    *   **Concave:** $f''(x) \le 0$ for all $x$ in the domain.

*   **For a function of multiple variables, $f(x)$:**
    *   **Convex:** The Hessian matrix $H(x)$ is positive semi-definite for all $x$ in the domain. This means all eigenvalues of $H(x)$ are non-negative.
    *   **Concave:** The Hessian matrix $H(x)$ is negative semi-definite for all $x$ in the domain. This means all eigenvalues of $H(x)$ are non-positive.

**Why is Convexity Important?**

*   **Uniqueness of Optima:** For a convex function, any local minimum is also a global minimum. Similarly, for a concave function, any local maximum is also a global maximum.
*   **Easier Optimization:** Convex optimization problems are generally easier to solve computationally. Many efficient algorithms are designed specifically for convex problems.

**Referenced Texts:**

*   **Chong & Hak, "An Introduction to Optimization":** Chapters 3 and 4 provide a detailed treatment of convexity, convex sets, and their properties.
*   **S.S. Rao, "Engineering Optimization, Theory and Practice":** Discusses convexity in the context of nonlinear programming.

**Examples:**

1.  **$f(x) = x^2$:**
    *   $f''(x) = 2$. Since $f''(x) > 0$, $f(x)$ is convex.
    *   The graph is a parabola opening upwards.

2.  **$f(x) = -x^2$:**
    *   $f''(x) = -2$. Since $f''(x) < 0$, $f(x)$ is concave.
    *   The graph is a parabola opening downwards.

3.  **$f(x_1, x_2) = x_1^2 + x_2^2$:**
    *   $\nabla f = [2x_1, 2x_2]^T$
    *   $H(x) = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$
    *   The eigenvalues of $H(x)$ are both 2 (positive). Thus, $H(x)$ is positive definite, and $f(x_1, x_2)$ is strictly convex.

4.  **$f(x_1, x_2) = -x_1^2 - x_2^2$:**
    *   $H(x) = \begin{pmatrix} -2 & 0 \\ 0 & -2 \end{pmatrix}$
    *   The eigenvalues of $H(x)$ are both -2 (negative). Thus, $H(x)$ is negative definite, and $f(x_1, x_2)$ is strictly concave.

5.  **$f(x_1, x_2) = x_1 x_2$:**
    *   $H(x) = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
    *   Eigenvalues are $\lambda = \pm 1$. Since one is positive and one is negative, the Hessian is indefinite. This function is neither convex nor concave.

**Practice Question:**

Determine if the function $f(x_1, x_2) = x_1^4 + x_2^2$ is convex, concave, or neither.

**Answer:**
*   First partial derivatives: $\frac{\partial f}{\partial x_1} = 4x_1^3$, $\frac{\partial f}{\partial x_2} = 2x_2$.
*   Second partial derivatives:
    *   $\frac{\partial^2 f}{\partial x_1^2} = 12x_1^2$
    *   $\frac{\partial^2 f}{\partial x_2^2} = 2$
    *   $\frac{\partial^2 f}{\partial x_1 \partial x_2} = 0$
    *   $\frac{\partial^2 f}{\partial x_2 \partial x_1} = 0$
*   Hessian matrix: $H(x) = \begin{pmatrix} 12x_1^2 & 0 \\ 0 & 2 \end{pmatrix}$.
*   The eigenvalues are $12x_1^2$ and $2$. Since both eigenvalues are non-negative for all $x_1$, the Hessian is positive semi-definite.
*   Therefore, $f(x_1, x_2) = x_1^4 + x_2^2$ is a **convex function**.

---

### **4. Definition of Global and Local Optima**

In optimization, we are interested in finding the "best" solution. The terms "global" and "local" distinguish between the absolute best and the best within a specific neighborhood.

**Definitions:**

*   **Global Minimum:** A point $x^*$ is a global minimum of $f(x)$ if $f(x^*) \le f(x)$ for all $x$ in the domain of $f$.
*   **Local Minimum:** A point $x^*$ is a local minimum of $f(x)$ if there exists a neighborhood $N$ around $x^*$ such that $f(x^*) \le f(x)$ for all $x$ in $N$.

*   **Global Maximum:** A point $x^*$ is a global maximum of $f(x)$ if $f(x^*) \ge f(x)$ for all $x$ in the domain of $f$.
*   **Local Maximum:** A point $x^*$ is a local maximum of $f(x)$ if there exists a neighborhood $N$ around $x^*$ such that $f(x^*) \ge f(x)$ for all $x$ in $N$.

**Terminology:**

*   **Optimum:** A general term referring to either a minimum or a maximum.
*   **Strict Optimum:** If the inequality holds strictly (e.g., $f(x^*) < f(x)$ for $x \ne x^*$), it is a strict global or local optimum.

**Relationship between Local and Global Optima:**

*   For **convex functions** (minimization problem), every local minimum is also a global minimum.
*   For **concave functions** (maximization problem), every local maximum is also a global maximum.
*   For **non-convex functions**, a problem can have multiple local optima, and finding the global optimum is generally challenging.

**Referenced Texts:**

*   **S.S. Rao, "Engineering Optimization, Theory and Practice":** Chapter 5 discusses types of optima and their properties.
*   **Chong & Hak, "An Introduction to Optimization":** Provides rigorous definitions and theoretical underpinnings of local and global optima.

**Example:**

Consider the function $f(x) = x^4 - 6x^2 + 4x + 5$.

*   By plotting or analyzing derivatives, we find:
    *   Local maximum at $x \approx -2.2$, $f(x) \approx 22.6$
    *   Local minimum at $x \approx 0.35$, $f(x) \approx 3.6$
    *   Local minimum at $x \approx 1.8$, $f(x) \approx -7.0$

In this case, the global minimum is approximately at $x \approx 1.8$. The minimum at $x \approx 0.35$ is a local minimum but not a global minimum. This function is non-convex.

**Practice Question:**

Sketch the graph of a function that has:
a) One global minimum and no local minima.
b) One local minimum that is also a global minimum.
c) Multiple local minima, one of which is a global minimum.

**Answer:**
a) Example: $f(x) = e^x$ (global minimum as $x \to -\infty$, approaching 0 but never reaching it. If the domain is restricted, e.g., $[0, \infty)$, then $f(0)$ is the global minimum).
b) Example: $f(x) = x^2$.
c) Example: A wavy function with several dips, where the deepest dip is the global minimum.

---

### **5. Optimality Criteria**

Optimality criteria are conditions that a solution must satisfy to be considered an optimum (local or global). These are fundamental for developing optimization algorithms.

**5.1 Unconstrained Optimization**

For an unconstrained optimization problem: Minimize $f(x)$, where $x \in \mathbb{R}^n$.

*   **First-Order Necessary Condition (Fermat's Theorem):**
    If $x^*$ is a local minimum or maximum of a differentiable function $f(x)$, then the gradient of $f$ at $x^*$ must be zero:
    $\nabla f(x^*) = 0$

    *   This means that at an optimum, the rate of change of the function with respect to each variable is zero. Geometrically, the tangent plane at the optimum is horizontal.
    *   These points where $\nabla f(x) = 0$ are called **critical points** or **stationary points**.

*   **Second-Order Necessary Conditions:**
    If $x^*$ is a local minimum of a twice-differentiable function $f(x)$:
    1.  $\nabla f(x^*) = 0$ (First-order necessity)
    2.  The Hessian matrix $H(x^*)$ must be positive semi-definite ($\lambda_i \ge 0$ for all eigenvalues $\lambda_i$).

    If $x^*$ is a local maximum:
    1.  $\nabla f(x^*) = 0$
    2.  The Hessian matrix $H(x^*)$ must be negative semi-definite ($\lambda_i \le 0$ for all eigenvalues $\lambda_i$).

*   **Second-Order Sufficient Conditions:**
    If $x^*$ is a point such that:
    1.  $\nabla f(x^*) = 0$
    2.  The Hessian matrix $H(x^*)$ is **positive definite** ($\lambda_i > 0$ for all eigenvalues $\lambda_i$),
    then $x^*$ is a **strict local minimum**.

    If $x^*$ is a point such that:
    1.  $\nabla f(x^*) = 0$
    2.  The Hessian matrix $H(x^*)$ is **negative definite** ($\lambda_i < 0$ for all eigenvalues $\lambda_i$),
    then $x^*$ is a **strict local maximum**.

**Referenced Texts:**

*   **S.S. Rao, "Engineering Optimization, Theory and Practice":** Chapter 4 covers optimality conditions for unconstrained problems.
*   **Chong & Hak, "An Introduction to Optimization":** Chapter 5 provides a thorough treatment of necessary and sufficient conditions.

**Example (Unconstrained):**

Minimize $f(x_1, x_2) = x_1^2 + x_2^2 - 4x_1 - 6x_2 + 14$.

1.  **Find critical points:**
    *   $\nabla f = [\frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}]^T = [2x_1 - 4, 2x_2 - 6]^T$
    *   Set $\nabla f = 0$:
        *   $2x_1 - 4 = 0 \implies x_1 = 2$
        *   $2x_2 - 6 = 0 \implies x_2 = 3$
    *   The critical point is $x^* = [2, 3]^T$.

2.  **Check second-order conditions:**
    *   Hessian matrix:
        $H(x) = \begin{pmatrix} \frac{\partial^2 f}{\partial x_1^2} & \frac{\partial^2 f}{\partial x_1 \partial x_2} \\ \frac{\partial^2 f}{\partial x_2 \partial x_1} & \frac{\partial^2 f}{\partial x_2^2} \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$
    *   At $x^* = [2, 3]^T$, $H(2, 3) = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$.
    *   The eigenvalues are both 2, which are positive. Thus, $H(x^*)$ is positive definite.

3.  **Conclusion:** Since $\nabla f(x^*) = 0$ and $H(x^*)$ is positive definite, $x^* = [2, 3]^T$ is a **strict local minimum**. Since the function is convex, it is also the **global minimum**.

**5.2 Constrained Optimization**

Optimality criteria for constrained problems are more complex and typically involve concepts like Lagrange multipliers and the Karush-Kuhn-Tucker (KKT) conditions. These are typically covered in later modules but the basic idea is to extend the idea of $\nabla f = 0$ to account for the constraints.

**Key Idea (Lagrangian Function):** The Lagrangian function combines the objective function and the constraints into a single function. For a problem:
Minimize $f(x)$ subject to $h_i(x) = 0$ and $g_j(x) \le 0$.
The Lagrangian is:
$L(x, \lambda, \mu) = f(x) + \sum_{i=1}^m \lambda_i h_i(x) + \sum_{j=1}^p \mu_j g_j(x)$
where $\lambda_i$ and $\mu_j$ are Lagrange multipliers.

*   **Karush-Kuhn-Tucker (KKT) Conditions:** These are necessary conditions for a solution to be optimal in a constrained nonlinear optimization problem. For a local minimum $x^*$:
    1.  **Stationarity:** $\nabla_x L(x^*, \lambda^*, \mu^*) = \nabla f(x^*) + \sum_{i=1}^m \lambda_i^* \nabla h_i(x^*) + \sum_{j=1}^p \mu_j^* \nabla g_j(x^*) = 0$
    2.  **Primal Feasibility:**
        *   $h_i(x^*) = 0$ for all $i$ (Equality constraints satisfied)
        *   $g_j(x^*) \le 0$ for all $j$ (Inequality constraints satisfied)
    3.  **Dual Feasibility:** $\mu_j^* \ge 0$ for all $j$ (Lagrange multipliers for inequality constraints are non-negative).
    4.  **Complementary Slackness:** $\mu_j^* g_j(x^*) = 0$ for all $j$. This means that if an inequality constraint is not active (i.e., $g_j(x^*) < 0$), its corresponding multiplier $\mu_j^*$ must be zero.

**Sufficient KKT conditions** involve second-order information and are more complex. For convex optimization problems, KKT conditions are also sufficient for optimality.

**Referenced Texts:**

*   **Chong & Hak, "An Introduction to Optimization":** Chapter 7 provides a detailed exposition of KKT conditions.
*   **S.S. Rao, "Engineering Optimization, Theory and Practice":** Chapter 8 covers Lagrange multipliers and KKT conditions.

---

### **Summary of Key Points**

*   **Optimization Problem:** Defined by an objective function, decision variables, and constraints.
*   **Classification:** Problems are categorized by variable type (continuous/discrete), function nature (linear/nonlinear, convex/non-convex), and constraint presence (constrained/unconstrained).
*   **Convexity:** Crucial property. Convex functions have a single global minimum. Convex feasible regions simplify optimization. Second derivative tests (Hessian) determine convexity.
*   **Optima:**
    *   **Local:** Best in a neighborhood.
    *   **Global:** Best over the entire domain.
    *   For convex problems, local optima are global optima.
*   **Optimality Criteria:**
    *   **Unconstrained:** $\nabla f(x^*) = 0$ (necessary), positive (semi-)definite Hessian (sufficient/necessary for minima).
    *   **Constrained:** KKT conditions (necessary), often involving Lagrange multipliers.

---

### **Learning Outcomes Alignment**

This module directly addresses the following learning outcomes:

*   **CO1: Formulate an optimization problem to optimize an engineering application using the principles of basic calculus. (Knowledge Level: K2)**
    *   Covered in Section 1 (Statement of an Optimization Problem) and Section 3 (Convexity using derivatives). Examples like the cylindrical can demonstrate formulation.
*   **CO3: Solve the unconstrained optimization problems using gradient based method. (Knowledge Level: K3)**
    *   Covered in Section 5.1 (Optimality Criteria for Unconstrained Problems), which is the basis for gradient-based methods (like gradient descent, Newton's method). Although methods aren't detailed here, the criteria are essential for understanding them.

---

### **Practice Questions (Module 1 - Core Concepts)**

1.  **Formulation:** A company produces two products, A and B. Product A requires 2 hours of machine time and 1 hour of labor. Product B requires 1 hour of machine time and 3 hours of labor. The company has 100 machine hours and 120 labor hours available per week. The profit for product A is \$5 per unit, and for product B is \$7 per unit. Formulate this as a linear programming problem to maximize profit.
    *   **(CO1)**
2.  **Convexity:** Determine if the function $f(x_1, x_2) = 3x_1^2 + 2x_2^2 - 4x_1x_2 + x_1 - 5x_2$ is convex, concave, or neither.
    *   **(CO1, linked to CO3 indirectly)**
3.  **Optima:** For the function $f(x) = \sin(x)$ in the domain $[0, 4\pi]$, identify all local minima, local maxima, global minimum, and global maximum.
    *   **(CO3)**
4.  **Optimality Criteria:** Find the stationary points of the function $f(x) = x^3 - 6x^2 + 5$. For each stationary point, determine if it is a local minimum, local maximum, or neither, using second-order conditions.
    *   **(CO3)**
5.  **Classification:** Classify the following optimization problems:
    a) Minimize $f(x) = x^2 + y^2$ subject to $x+y=1$, $x \ge 0$, $y \ge 0$.
    b) Minimize $f(x_1, x_2) = x_1^2 + x_2^2$ subject to $x_1 \in \{1, 2, 3\}$.
    *   **(CO1, linked to CO3)**

---

### **Answers to Practice Questions**

1.  **Formulation:**
    *   Let $x_1$ be the number of units of product A, and $x_2$ be the number of units of product B.
    *   **Objective Function (Maximize Profit):** $Z = 5x_1 + 7x_2$
    *   **Decision Variables:** $x_1 \ge 0$, $x_2 \ge 0$
    *   **Constraints:**
        *   Machine time: $2x_1 + x_2 \le 100$
        *   Labor time: $x_1 + 3x_2 \le 120$

2.  **Convexity:**
    *   First partial derivatives:
        $\frac{\partial f}{\partial x_1} = 6x_1 - 4x_2 + 1$
        $\frac{\partial f}{\partial x_2} = 4x_2 - 4x_1 - 5$
    *   Second partial derivatives:
        $\frac{\partial^2 f}{\partial x_1^2} = 6$
        $\frac{\partial^2 f}{\partial x_2^2} = 4$
        $\frac{\partial^2 f}{\partial x_1 \partial x_2} = -4$
        $\frac{\partial^2 f}{\partial x_2 \partial x_1} = -4$
    *   Hessian matrix: $H(x) = \begin{pmatrix} 6 & -4 \\ -4 & 4 \end{pmatrix}$
    *   Eigenvalues: The determinant is $(6)(4) - (-4)(-4) = 24 - 16 = 8$. The trace is $6+4=10$.
        The characteristic equation is $\lambda^2 - (\text{trace})\lambda + \det(H) = 0$:
        $\lambda^2 - 10\lambda + 8 = 0$
        Using the quadratic formula: $\lambda = \frac{-(-10) \pm \sqrt{(-10)^2 - 4(1)(8)}}{2(1)} = \frac{10 \pm \sqrt{100 - 32}}{2} = \frac{10 \pm \sqrt{68}}{2} = 5 \pm \sqrt{17}$.
        Both eigenvalues ($5 + \sqrt{17}$ and $5 - \sqrt{17}$) are positive.
    *   Since the Hessian is positive definite, the function $f(x_1, x_2)$ is **convex**.

3.  **Optima for $f(x) = \sin(x)$ in $[0, 4\pi]$:**
    *   The derivative is $f'(x) = \cos(x)$. Setting $f'(x) = 0$, we get $x = \pi/2, 3\pi/2, 5\pi/2, 7\pi/2$.
    *   The second derivative is $f''(x) = -\sin(x)$.
    *   At $x = \pi/2$ and $5\pi/2$, $f''(x) = -\sin(\pi/2) = -1 < 0$ (local maxima).
    *   At $x = 3\pi/2$ and $7\pi/2$, $f''(x) = -\sin(3\pi/2) = 1 > 0$ (local minima).
    *   Values:
        *   $f(0) = \sin(0) = 0$
        *   $f(\pi/2) = \sin(\pi/2) = 1$
        *   $f(3\pi/2) = \sin(3\pi/2) = -1$
        *   $f(5\pi/2) = \sin(5\pi/2) = 1$
        *   $f(7\pi/2) = \sin(7\pi/2) = -1$
        *   $f(4\pi) = \sin(4\pi) = 0$
    *   **Local Maxima:** $x = \pi/2, 5\pi/2$ (value = 1)
    *   **Local Minima:** $x = 3\pi/2, 7\pi/2$ (value = -1)
    *   **Global Maximum:** $x = \pi/2, 5\pi/2$ (value = 1)
    *   **Global Minimum:** $x = 3\pi/2, 7\pi/2$ (value = -1)

4.  **Optimality Criteria for $f(x) = x^3 - 6x^2 + 5$:**
    *   First derivative: $f'(x) = 3x^2 - 12x$.
    *   Set $f'(x) = 0$: $3x(x - 4) = 0 \implies x = 0$ or $x = 4$. These are the stationary points.
    *   Second derivative: $f''(x) = 6x - 12$.
    *   At $x = 0$: $f''(0) = 6(0) - 12 = -12$. Since $f''(0) < 0$, $x = 0$ is a **local maximum**.
    *   At $x = 4$: $f''(4) = 6(4) - 12 = 24 - 12 = 12$. Since $f''(4) > 0$, $x = 4$ is a **local minimum**.

5.  **Classification:**
    a) Minimize $f(x) = x^2 + y^2$ subject to $x+y=1$, $x \ge 0$, $y \ge 0$.
        *   **Nature of variables:** Continuous ($x, y$)
        *   **Nature of Objective Function:** Nonlinear (Quadratic, convex)
        *   **Nature of Constraints:** Linear equality and linear inequality.
        *   **Presence of Constraints:** Constrained.
        *   **Classification:** Continuous, Constrained, Nonlinear (Convex) Optimization Problem.

    b) Minimize $f(x_1, x_2) = x_1^2 + x_2^2$ subject to $x_1 \in \{1, 2, 3\}$.
        *   **Nature of variables:** Mixed ( $x_1$ is discrete, $x_2$ is continuous)
        *   **Nature of Objective Function:** Nonlinear (Quadratic, convex)
        *   **Nature of Constraints:** Discrete constraint on $x_1$.
        *   **Presence of Constraints:** Constrained.
        *   **Classification:** Mixed Discrete-Continuous, Constrained, Nonlinear (Convex) Optimization Problem.

---

### **Important Points to Remember**

*   **Problem Formulation is Key:** A well-defined objective function and accurate constraints are crucial for successful optimization.
*   **Convexity is Gold:** If your problem is convex, finding the global optimum is significantly easier. Always try to analyze the convexity of your objective function and feasible region.
*   **Necessary vs. Sufficient Conditions:** $\nabla f = 0$ is necessary for an unconstrained optimum, but not sufficient. Positive definite Hessian is sufficient for a minimum.
*   **KKT Conditions:** The generalization of $\nabla f = 0$ for constrained problems, essential for understanding constrained optimization.
*   **Engineering vs. Pure Math:** In engineering, we often deal with approximations, simplifications, and practical considerations that might make problems non-convex or require heuristic approaches.

---

This concludes the study notes for Module 1, Topic: Convexity and Concavity of Functions, Global and Local Optima, Optimality Criteria. These foundational concepts are vital for understanding all subsequent optimization techniques.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
