---
title: "Linearization methods for constrained Problems - Successive linear problems - Separable programming - Method of feasible directions - Simplex extensions for linearly constrained problems - Generalized reduced gradient method"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 4: Constrained direct search "
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3669a"
status: "completed"
scrapedAt: "2026-05-23T16:30:32.839Z"
---
# Module 4: Constrained Direct Search - Linearization Methods for Constrained Problems

## Introduction to Constrained Optimization

Constrained optimization problems involve finding the minimum (or maximum) of an objective function subject to certain equality and inequality constraints. This module focuses on **linearization methods**, which approximate the original non-linear problem with a series of simpler, often linear, subproblems. This approach is particularly useful for non-linear problems where direct search methods might struggle with the complex feasible region.

**Course Outcomes Addressed:**
*   **CO4:** To explore optimization techniques for constrained problems (Knowledge Level: K3)

## 1. Linearization Methods for Constrained Problems

The core idea behind linearization methods is to replace the non-linear objective function and/or constraints with their linear approximations at a current point. This transforms the complex problem into a sequence of simpler, solvable problems (often linear programming problems).

**Key Concept:** Local Approximation
Linearization methods rely on the Taylor series expansion of the objective function and constraints around the current iterate.

**General Approach:**
1.  Start with an initial feasible point.
2.  Linearize the objective function and constraints around the current point.
3.  Solve the resulting linear subproblem to find a search direction.
4.  Perform a line search along the determined direction to find a new iterate.
5.  Repeat steps 2-4 until convergence.

---

### 1.1. Successive Linear Programming (SLP)

SLP is a widely used linearization technique for nonlinear programming problems. It approximates the non-linear problem by a linear programming subproblem at each iteration.

**Problem Formulation:**
Consider the general nonlinear programming problem:
$$ \begin{align*} \min_{x \in \mathbb{R}^n} & f(x) \\ \text{s.t.} & g_i(x) \le 0, \quad i=1, \dots, m \\ & h_j(x) = 0, \quad j=1, \dots, p \end{align*} $$

**SLP Algorithm:**
1.  **Initialization:** Choose an initial feasible point $x_0$. Set iteration counter $k=0$.
2.  **Linearization:** Linearize the objective function and constraints around the current point $x_k$.
    *   $f(x) \approx f(x_k) + \nabla f(x_k)^T (x - x_k)$
    *   $g_i(x) \approx g_i(x_k) + \nabla g_i(x_k)^T (x - x_k) \le 0$
    *   $h_j(x) \approx h_j(x_k) + \nabla h_j(x_k)^T (x - x_k) = 0$
3.  **Subproblem Formulation:** Solve the following linear programming subproblem to find a step $\Delta x = x - x_k$:
    $$ \begin{align*} \min_{\Delta x \in \mathbb{R}^n} & \nabla f(x_k)^T \Delta x \\ \text{s.t.} & g_i(x_k) + \nabla g_i(x_k)^T \Delta x \le 0, \quad i=1, \dots, m \\ & h_j(x_k) + \nabla h_j(x_k)^T \Delta x = 0, \quad j=1, \dots, p \\ & \| \Delta x \| \le \epsilon_k \end{align*} $$
    The trust-region constraint $\| \Delta x \| \le \epsilon_k$ (where $\epsilon_k$ is a step size parameter) is often added to ensure the linear approximation remains valid. This is sometimes referred to as **SLP with Trust Regions**.
4.  **Update:** Set $x_{k+1} = x_k + \Delta x$.
5.  **Convergence Check:** If $x_{k+1}$ is sufficiently close to $x_k$ or the optimality conditions are met, terminate. Otherwise, increment $k$ and go to step 2.

**Advantages of SLP:**
*   Leverages the efficiency of linear programming solvers.
*   Can handle non-convex problems to some extent.

**Disadvantages of SLP:**
*   The quality of the solution depends on how well the linear approximation represents the original problem.
*   May converge to a local minimum.
*   May exhibit "oscillation" around the optimal solution, requiring careful choice of $\epsilon_k$.

**Textbook Reference:** Ravindran, Ragsdell, Reklaitis (2006) likely covers SLP in detail within their chapters on nonlinear programming algorithms.

**Example (Illustrative):**
Consider minimizing $f(x) = x_1^2 + x_2^2$ subject to $x_1 + x_2 \ge 1$.
Start at $x_0 = (0, 0)$. This is infeasible. We need an initial feasible point. Let's assume we can find one, or we handle infeasibility. Suppose we are at a feasible point $x_k = (1, 0)$.

*   $f(x_1, x_2) = x_1^2 + x_2^2$
*   $g_1(x_1, x_2) = 1 - x_1 - x_2 \le 0$ (rearranged constraint)

At $x_k = (1, 0)$:
*   $f(1, 0) = 1$
*   $\nabla f(x_k) = [2x_1, 2x_2]^T = [2, 0]^T$
*   $g_1(1, 0) = 1 - 1 - 0 = 0$
*   $\nabla g_1(x_k) = [-1, -1]^T$

The linearized subproblem at $(1, 0)$ (ignoring trust region for simplicity):
$$ \begin{align*} \min_{\Delta x_1, \Delta x_2} & 2 \Delta x_1 \\ \text{s.t.} & 0 + [-1, -1] \begin{bmatrix} \Delta x_1 \\ \Delta x_2 \end{bmatrix} \le 0 \implies -\Delta x_1 - \Delta x_2 \le 0 \\ \implies & \Delta x_1 + \Delta x_2 \ge 0 \end{align*} $$
The solution to this LP would give a $\Delta x$. Then $x_{k+1} = x_k + \Delta x$.

---

### 1.2. Separable Programming

Separable programming deals with optimization problems where the objective function and constraints are *separable*. A function is separable if it can be expressed as the sum of functions, each involving only one variable.

**Definition:**
A function $F(x_1, x_2, \dots, x_n)$ is **separable** if it can be written as:
$$ F(x_1, x_2, \dots, x_n) = \sum_{i=1}^n F_i(x_i) $$
where $F_i(x_i)$ is a function of a single variable $x_i$.

**Problem Formulation:**
$$ \begin{align*} \min_{x \in \mathbb{R}^n} & \sum_{i=1}^n f_i(x_i) \\ \text{s.t.} & \sum_{i=1}^n g_{ij}(x_i) \le b_j, \quad j=1, \dots, m \\ & l_i \le x_i \le u_i, \quad i=1, \dots, n \end{align*} $$
where $f_i$ and $g_{ij}$ are non-linear functions of a single variable.

**Technique: Piecewise Linear Approximation**
If the functions $f_i$ and $g_{ij}$ are non-linear but can be approximated by piecewise linear functions, the problem can be converted into a linear programming problem.

1.  **Discretization:** For each variable $x_i$, define a set of discrete points $x_{i,0}, x_{i,1}, \dots, x_{i,k_i}$ within its bounds $[l_i, u_i]$.
2.  **Linearization:** Represent each $x_i$ as a convex combination of these discrete points:
    $$ x_i = \sum_{r=0}^{k_i} \lambda_{ir} x_{i,r} $$
    where $\lambda_{ir} \ge 0$ and $\sum_{r=0}^{k_i} \lambda_{ir} = 1$.
3.  **Approximation:** Approximate the functions $f_i(x_i)$ and $g_{ij}(x_i)$ using linear interpolation between the discrete points. For example, if $x_i$ lies between $x_{i,r}$ and $x_{i,r+1}$:
    $$ f_i(x_i) \approx f_i(x_{i,r}) + \frac{f_i(x_{i,r+1}) - f_i(x_{i,r})}{x_{i,r+1} - x_{i,r}} (x_i - x_{i,r}) $$
    Substituting the convex combination:
    $$ f_i(x_i) = f_i\left(\sum_{r=0}^{k_i} \lambda_{ir} x_{i,r}\right) \approx \sum_{r=0}^{k_i} \lambda_{ir} f_i(x_{i,r}) $$
    Similarly for $g_{ij}(x_i)$.

**Result:** The original non-linear problem is transformed into a linear program in terms of the $\lambda_{ir}$ variables.

**Advantages:**
*   Can solve non-linear problems if they are separable and can be approximated by piecewise linear functions.
*   Converts the problem into a well-understood LP framework.

**Disadvantages:**
*   The accuracy depends on the number of discrete points chosen. More points lead to a larger LP.
*   Only applicable to separable problems.

**Textbook Reference:** Ravindran, Ragsdell, Reklaitis (2006) would likely discuss separable programming in the context of non-linear programming or special classes of problems.

**Course Outcomes Addressed:**
*   **CO3:** To understand and apply linear programming techniques for optimization (Knowledge Level: K3)
*   **CO4:** To explore optimization techniques for constrained problems (Knowledge Level: K3)

**Example:**
Minimize $f(x_1, x_2) = (x_1-1)^2 + (x_2-2)^2$ subject to $x_1 + x_2 \le 3$, $0 \le x_1 \le 2$, $0 \le x_2 \le 3$.
The objective function is separable: $f_1(x_1) = (x_1-1)^2$, $f_2(x_2) = (x_2-2)^2$.
The constraint $x_1 + x_2 \le 3$ is also separable if written as $g_{11}(x_1) + g_{21}(x_2) \le 3$ where $g_{11}(x_1)=x_1$ and $g_{21}(x_2)=x_2$.

Let's discretize $x_1$ at $\{0, 1, 2\}$ and $x_2$ at $\{0, 1.5, 3\}$.

For $x_1$:
*   Points: $x_{1,0}=0, x_{1,1}=1, x_{1,2}=2$
*   $f_1(0) = (-1)^2 = 1$, $f_1(1) = (0)^2 = 0$, $f_1(2) = (1)^2 = 1$
*   $g_{11}(0)=0, g_{11}(1)=1, g_{11}(2)=2$

For $x_2$:
*   Points: $x_{2,0}=0, x_{2,1}=1.5, x_{2,2}=3$
*   $f_2(0) = (-2)^2 = 4$, $f_2(1.5) = (-0.5)^2 = 0.25$, $f_2(3) = (1)^2 = 1$
*   $g_{21}(0)=0, g_{21}(1.5)=1.5, g_{21}(3)=3$

New LP formulation:
$$ \begin{align*} \min & (1 \lambda_{10} + 0 \lambda_{11} + 1 \lambda_{12}) + (4 \lambda_{20} + 0.25 \lambda_{21} + 1 \lambda_{22}) \\ \text{s.t.} & (\lambda_{10} + 1 \lambda_{11} + 2 \lambda_{12}) + (\lambda_{20} + 1.5 \lambda_{21} + 3 \lambda_{22}) \le 3 \\ & \lambda_{10} + \lambda_{11} + \lambda_{12} = 1 \\ & \lambda_{20} + \lambda_{21} + \lambda_{22} = 1 \\ & \lambda_{ir} \ge 0 \text{ for all } i, r \end{align*} $$
This is a solvable LP.

---

### 1.3. Method of Feasible Directions

The Method of Feasible Directions aims to find a direction of search from the current feasible point $x_k$ such that the objective function decreases and the move stays within the feasible region. This method is particularly useful for problems with inequality constraints and is often used in conjunction with techniques like the gradient projection method.

**Key Idea:** Find a direction $d$ such that:
1.  $d$ is a "descent" direction for the objective function: $\nabla f(x_k)^T d < 0$.
2.  $d$ is a "feasible" direction for the active constraints: for all active inequality constraints $g_i(x)$, $\nabla g_i(x_k)^T d \le 0$. For active equality constraints $h_j(x)$, $\nabla h_j(x_k)^T d = 0$.

**Frank-Wolfe (Conditional Gradient) Method (as a related concept):**
While not strictly a "feasible direction" method in its most general form, Frank-Wolfe can be seen as a linearization approach where the subproblem is solved using a linear program. At each step, it finds the point $y_k$ in the feasible region that minimizes the linear approximation of $f(x)$ at $x_k$:
$$ y_k = \arg \min_{y \in \text{Feasible Region}} \nabla f(x_k)^T y $$
Then, a step is taken along the direction $d_k = y_k - x_k$.

**General Feasible Direction Algorithm (Conceptual):**
1.  **Initialization:** Start with a feasible point $x_k$.
2.  **Determine Direction:** Find a direction vector $d_k$ that satisfies:
    *   $\nabla f(x_k)^T d_k < 0$ (descent direction)
    *   $\nabla g_i(x_k)^T d_k \le 0$ for all active inequality constraints $g_i(x)$.
    *   $\nabla h_j(x_k)^T d_k = 0$ for all active equality constraints $h_j(x)$.
    This step itself often involves solving a subproblem (e.g., a linear program if we linearize the conditions).
3.  **Line Search:** Perform a line search to find a step size $\alpha_k > 0$ such that $x_{k+1} = x_k + \alpha_k d_k$ is feasible and $f(x_{k+1}) < f(x_k)$.
4.  **Update:** $x_{k+1} = x_k + \alpha_k d_k$.
5.  **Convergence:** Repeat until convergence criteria are met.

**The "Adjacent Vertex" Method (for polytope feasible regions):**
If the feasible region is a polytope (defined by linear constraints), we can use the simplex method's logic. The optimal solution lies at a vertex. A feasible direction can be found by moving along an edge of the feasible region.

**Textbook Reference:** Ravindran, Ragsdell, Reklaitis (2006) would discuss methods of feasible directions, potentially including gradient projection or related algorithms in their constrained optimization sections.

**Course Outcomes Addressed:**
*   **CO4:** To explore optimization techniques for constrained problems (Knowledge Level: K3)
*   **CO5:** To explore search techniques and applications in optimization (Knowledge Level: K3)

---

### 1.4. Simplex Extensions for Linearly Constrained Problems

This section refers to adapting the Simplex method (primarily for Linear Programming) to handle problems that are "almost" linear or can be transformed into a linear structure. This often involves problems with non-linear objective functions but linear constraints, or problems where linearization techniques are applied to make them linear.

**Key Concept:** Linearly Constrained Non-Linear Programming (LCNP)
When the constraints are linear ($Ax \le b$, $Ex = d$), but the objective function $f(x)$ is non-linear, linearization methods like SLP become very relevant. The subproblem solved in SLP for such cases is a linear program.

**How Simplex Extensions Apply:**
*   **SLP with Linear Constraints:** When the original problem has linear constraints, the SLP subproblem is a standard LP. The Simplex method can be directly used to solve these subproblems. The challenge is in updating the basis from one iteration to the next as the linearized constraints change.
*   **Handling Non-Linear Objectives:** Techniques are used to approximate the non-linear objective function with a linear one within the feasible region defined by linear constraints. This is precisely what SLP does.
*   **Non-degenerate Simplex:** For linear programs, the Simplex method guarantees convergence (under certain rules to avoid cycling). When used within an iterative process for non-linear problems, ensuring the subproblems are solved effectively and that the overall process converges is key.

**Important Note:** The term "Simplex extensions" might be interpreted as methods that build upon the Simplex algorithm's structure to solve non-linear problems, rather than directly solving non-linear problems *with* the Simplex method unchanged.

**Textbook Reference:** Bertsimas & Tsitsiklis (1997) is an excellent resource for Linear Optimization and the Simplex method, providing a strong foundation for understanding how these concepts are extended. Ravindran, Ragsdell, Reklaitis (2006) would likely cover LCNP and how LP solvers (like Simplex) are used within iterative schemes.

**Course Outcomes Addressed:**
*   **CO3:** To understand and apply linear programming techniques for optimization (Knowledge Level: K3)
*   **CO4:** To explore optimization techniques for constrained problems (Knowledge Level: K3)

---

### 1.5. Generalized Reduced Gradient (GRG) Method

The Generalized Reduced Gradient (GRG) method is a powerful algorithm for solving non-linear programming problems, especially those with non-linear objectives and constraints. It's an extension of the Simplex method's concept of reduced costs to the non-linear setting.

**Core Idea:**
GRG works by partitioning the decision variables into **basic** and **non-basic** variables. It uses the non-linear constraint functions to define the basic variables as functions of the non-basic variables. This reduces the dimensionality of the problem, allowing for an iterative search in the space of non-basic variables.

**Problem Formulation:**
$$ \begin{align*} \min_{x \in \mathbb{R}^n} & f(x) \\ \text{s.t.} & h_j(x) = 0, \quad j=1, \dots, p \\ & g_i(x) \le 0, \quad i=1, \dots, m \end{align*} $$

**GRG Algorithm Steps:**
1.  **Initialization:** Select an initial feasible point $x_k$. Identify $p$ variables as basic ($x_B$) and $n-p$ as non-basic ($x_N$). The choice of basic variables should allow the constraints $h_j(x) = 0$ to be solved for $x_B$ in terms of $x_N$.
2.  **Constraint Jacobian:** Form the Jacobian matrix of the equality constraints $h(x)$ with respect to $x$.
    $$ J_h(x) = \begin{bmatrix} \nabla h_1(x) \\ \vdots \\ \nabla h_p(x) \end{bmatrix} = \begin{bmatrix} \frac{\partial h_1}{\partial x_1} & \dots & \frac{\partial h_1}{\partial x_n} \\ \vdots & \ddots & \vdots \\ \frac{\partial h_p}{\partial x_1} & \dots & \frac{\partial h_p}{\partial x_n} \end{bmatrix} $$
    Partition $J_h(x)$ into $J_h^B(x)$ (columns corresponding to $x_B$) and $J_h^N(x)$ (columns corresponding to $x_N$).
3.  **Reduced Gradient Calculation:** The GRG vector is calculated as:
    $$ \nabla_{GRG} f(x) = \nabla f(x) - \lambda^T J_h(x) $$
    where $\lambda$ are Lagrange multipliers obtained by solving $J_h(x_B)^T \lambda = \nabla f(x_B)$.
    The reduced gradient with respect to non-basic variables is then:
    $$ \nabla_{GRG} f(x_N) = \nabla f(x_N) - \lambda^T J_h^N(x) $$
    For basic variables, $\nabla_{GRG} f(x_B) = \nabla f(x_B) - \lambda^T J_h^B(x) = 0$ by definition of $\lambda$.
4.  **Search Direction:**
    *   **For Non-basic Variables:** The search direction for non-basic variables is typically set to the negative of the reduced gradient: $d_N = -\nabla_{GRG} f(x_N)$.
    *   **For Basic Variables:** The change in basic variables is determined by the change in non-basic variables using the linearized constraints: $J_h^B(x_k) \Delta x_B + J_h^N(x_k) \Delta x_N = 0$.
        This gives $\Delta x_B = -(J_h^B(x_k))^{-1} J_h^N(x_k) \Delta x_N$.
        So, the search direction for basic variables is $d_B = -(J_h^B(x_k))^{-1} J_h^N(x_k) d_N$.
5.  **Line Search:** Perform a line search along the direction $d = [\Delta x_B, \Delta x_N]^T$ to find a step size $\alpha > 0$ that minimizes $f(x_k + \alpha d)$ while satisfying the constraints.
    *   For inequality constraints $g_i(x) \le 0$, ensure $g_i(x_k + \alpha d) \le 0$. The step size $\alpha$ may be limited by these constraints.
6.  **Update:** $x_{k+1} = x_k + \alpha d$.
7.  **Convergence Check:** If the norm of the reduced gradient is small and all constraints are satisfied, terminate. Otherwise, repeat from step 2 (potentially re-selecting basic/non-basic variables).

**Handling Inequality Constraints:**
Inequality constraints ($g_i(x) \le 0$) are often handled by converting them to equality constraints using slack variables ($g_i(x) + s_i = 0, s_i \ge 0$). Alternatively, during the line search, the step size is restricted to maintain feasibility. If a variable becomes non-basic and its corresponding constraint becomes binding (active), it can be brought back as a basic variable in the next iteration.

**Advantages:**
*   Effective for problems with many variables and constraints.
*   Can handle non-linearities in both objective and constraints.
*   Provides a systematic way to navigate the feasible region.

**Disadvantages:**
*   Requires the Jacobian of constraints to be non-singular for the chosen basic variables.
*   Can be computationally expensive if Jacobians are complex or if many variable re-classifications (basic/non-basic) are needed.
*   Can get stuck in local minima for non-convex problems.

**Textbook Reference:** Ravindran, Ragsdell, Reklaitis (2006) is a primary source for detailed explanations of the GRG method.

**Course Outcomes Addressed:**
*   **CO2:** To evaluate the optimality criteria and methods for functions with several variables (Knowledge Level: K4) - GRG helps satisfy optimality conditions.
*   **CO4:** To explore optimization techniques for constrained problems (Knowledge Level: K3)

**Example (Conceptual):**
Minimize $f(x_1, x_2, x_3) = x_1^2 + x_2^2 + x_3^2$ subject to $x_1 + x_2 + x_3 = 1$.
Let $x_1$ be basic, $x_2, x_3$ be non-basic.
Constraint: $h_1(x_1, x_2, x_3) = x_1 + x_2 + x_3 - 1 = 0$.
Jacobian of constraint: $J_h(x) = [1, 1, 1]$.
$J_h^B(x) = [1]$, $J_h^N(x) = [1, 1]$.
$\nabla f(x) = [2x_1, 2x_2, 2x_3]$.
$\nabla f(x_B) = 2x_1$, $\nabla f(x_N) = [2x_2, 2x_3]$.

1.  **Lagrange Multiplier:** $J_h^B(x)^T \lambda = \nabla f(x_B) \implies [1] \lambda = 2x_1 \implies \lambda = 2x_1$.
2.  **Reduced Gradient:** $\nabla_{GRG} f(x_N) = \nabla f(x_N) - \lambda^T J_h^N(x) = [2x_2, 2x_3] - (2x_1) [1, 1] = [2x_2 - 2x_1, 2x_3 - 2x_1]$.
3.  **Search Direction:**
    $d_N = -\nabla_{GRG} f(x_N) = [-(2x_2 - 2x_1), -(2x_3 - 2x_1)] = [2x_1 - 2x_2, 2x_1 - 2x_3]$.
    $\Delta x_B = -(J_h^B(x))^{-1} J_h^N(x) \Delta x_N = -(1)^{-1} [1, 1] \begin{bmatrix} d_{N2} \\ d_{N3} \end{bmatrix} = -(d_{N2} + d_{N3})$.
    $d_B = -( (2x_1 - 2x_2) + (2x_1 - 2x_3) ) = -(4x_1 - 2x_2 - 2x_3)$.

This gives the direction. A line search would then be performed.

---

## Key Concepts and Definitions Summary

*   **Linearization:** Approximating non-linear functions by linear functions (e.g., using Taylor series).
*   **Successive Linear Programming (SLP):** Iteratively solving linear programming subproblems derived from linearizing the original NLP.
*   **Separable Programming:** Optimization problems where the objective and constraints are sums of functions of single variables.
*   **Piecewise Linear Approximation:** Representing non-linear separable functions using a series of linear segments.
*   **Feasible Direction:** A direction vector that, when moved from the current point, maintains feasibility.
*   **Generalized Reduced Gradient (GRG):** An algorithm that reduces the problem dimensionality by expressing basic variables in terms of non-basic variables using constraint Jacobians and then optimizing the reduced objective function.
*   **Basic/Non-basic Variables:** In GRG, variables are classified to manage problem complexity.

---

## Practice Questions and Exercises

**Question 1:**
Explain the fundamental principle behind linearization methods for constrained optimization problems. What are the advantages and disadvantages of this approach compared to direct search methods?
*(Relates to CO4)*

**Answer:**
**Fundamental Principle:** Linearization methods approximate the original non-linear objective function and/or constraints with linear functions (e.g., using Taylor series expansions) around the current iterate. This transforms the complex non-linear problem into a sequence of simpler, usually linear, subproblems that can be solved efficiently.

**Advantages:**
*   **Leverages efficient solvers:** Can use well-established and efficient algorithms like the Simplex method to solve the linear subproblems.
*   **Systematic progression:** Provides a structured way to move towards an optimal solution.
*   **Handles non-linearities:** Can tackle problems with non-linear objective functions and constraints.

**Disadvantages:**
*   **Local approximation:** The accuracy of the solution depends on how well the linear approximation represents the true non-linear functions. This can lead to convergence to local optima for non-convex problems.
*   **Step size sensitivity:** The choice of step size ($\epsilon$ in SLP, $\alpha$ in GRG) is crucial for convergence and stability. Poor step size selection can cause oscillations or slow convergence.
*   **Computational cost:** Solving multiple subproblems can still be computationally intensive, especially if the problem is large or the linearization is poor.

---

**Question 2:**
Describe the steps involved in the Successive Linear Programming (SLP) method for solving a general nonlinear programming problem. What is the purpose of the trust-region constraint in SLP?
*(Relates to CO4)*

**Answer:**
**SLP Steps:**
1.  **Initialization:** Start with a feasible point $x_k$.
2.  **Linearization:** Linearize the objective function $f(x)$ and all constraints $g_i(x), h_j(x)$ around $x_k$.
3.  **Solve Linear Subproblem:** Formulate and solve the resulting linear programming problem:
    $$ \begin{align*} \min_{\Delta x} & \nabla f(x_k)^T \Delta x \\ \text{s.t.} & \text{linearized } g_i(x_k) + \nabla g_i(x_k)^T \Delta x \le 0 \\ & \text{linearized } h_j(x_k) + \nabla h_j(x_k)^T \Delta x = 0 \\ & \|\Delta x\| \le \epsilon_k \end{align*} $$
    The solution gives a step $\Delta x^*$.
4.  **Update:** Set $x_{k+1} = x_k + \Delta x^*$.
5.  **Convergence Check:** Terminate if convergence criteria are met. Otherwise, increment $k$ and return to step 2.

**Purpose of Trust-Region Constraint:**
The trust-region constraint ($\|\Delta x\| \le \epsilon_k$) limits the size of the step taken in each iteration. This is crucial because the linear approximation is only valid in a local neighborhood around $x_k$. By limiting the step size, the trust-region constraint ensures that the algorithm stays within the region where the linear approximation is reasonably accurate. This helps to prevent large steps that might move the iterate far from the optimal solution or into an infeasible region due to the inaccuracies of the linear approximation. It also helps in avoiding oscillations common in SLP without trust regions.

---

**Question 3:**
What is separable programming? How is a separable nonlinear programming problem transformed into a linear programming problem using piecewise linear approximation?
*(Relates to CO3, CO4)*

**Answer:**
**Separable Programming:**
Separable programming deals with optimization problems where the objective function and all constraints can be expressed as sums of functions, each depending on a single variable. Mathematically, if $F(x_1, \dots, x_n) = \sum_{i=1}^n F_i(x_i)$, the function is separable.

**Transformation to LP using Piecewise Linear Approximation:**
1.  **Discretization:** For each variable $x_i$ in the problem, define a set of discrete points $x_{i,0}, x_{i,1}, \dots, x_{i,k_i}$ within its allowed bounds.
2.  **Convex Combination:** Represent each variable $x_i$ as a convex combination of these discrete points:
    $$ x_i = \sum_{r=0}^{k_i} \lambda_{ir} x_{i,r} $$
    subject to $\sum_{r=0}^{k_i} \lambda_{ir} = 1$ and $\lambda_{ir} \ge 0$.
3.  **Linear Interpolation:** Approximate each separable function $F_i(x_i)$ (either objective or within constraints) using linear interpolation between the discrete points:
    $$ F_i(x_i) = F_i\left(\sum_{r=0}^{k_i} \lambda_{ir} x_{i,r}\right) \approx \sum_{r=0}^{k_i} \lambda_{ir} F_i(x_{i,r}) $$
    This approximation is exact if the original functions are already piecewise linear. If not, it becomes an approximation.
4.  **LP Formulation:** Substitute these linear approximations into the original objective function and constraints. This converts the problem into a linear program in terms of the $\lambda_{ir}$ variables.

The number of discrete points chosen for each variable dictates the accuracy of the approximation and the size of the resulting linear program.

---

**Question 4:**
Briefly explain the core idea behind the Generalized Reduced Gradient (GRG) method. What are the key components that define the search direction in GRG?
*(Relates to CO2, CO4)*

**Answer:**
**Core Idea of GRG:**
The GRG method addresses non-linear programming problems by reducing the dimensionality of the problem. It classifies variables into "basic" and "non-basic" sets. Using the non-linear equality constraints, the basic variables are implicitly defined as functions of the non-basic variables. The algorithm then iterates by optimizing in the space of non-basic variables, calculating the corresponding changes in basic variables to maintain constraint satisfaction.

**Key Components Defining the Search Direction:**
1.  **Objective Function Gradient:** $\nabla f(x)$.
2.  **Constraint Jacobian:** $J_h(x)$, which contains the gradients of all equality constraints.
3.  **Lagrange Multipliers ($\lambda$):** These are computed by solving a system of linear equations involving the basic variable part of the constraint Jacobian and the basic variable part of the objective function gradient: $J_h^B(x)^T \lambda = \nabla f(x_B)$.
4.  **Reduced Gradient:** The gradient of the objective function with respect to the non-basic variables, adjusted by the Lagrange multipliers and the non-basic variable part of the constraint Jacobian: $\nabla_{GRG} f(x_N) = \nabla f(x_N) - \lambda^T J_h^N(x)$. The search direction for non-basic variables is typically the negative of this reduced gradient ($d_N = -\nabla_{GRG} f(x_N)$).
5.  **Basic Variable Adjustment:** The changes in basic variables ($\Delta x_B$) are determined based on the changes in non-basic variables ($\Delta x_N$) using the linearized equality constraints: $\Delta x_B = -(J_h^B(x))^{-1} J_h^N(x) \Delta x_N$. This defines the search direction for basic variables ($d_B$).

---

## Important Points to Remember

*   **Linearization Approximation:** Always remember that linearization methods rely on local approximations. Their success and convergence quality depend heavily on how well these approximations represent the true functions.
*   **Feasibility:** Maintaining feasibility throughout the iterative process is paramount. Techniques like trust regions, careful step-size selection, and constraint handling mechanisms are crucial.
*   **Local vs. Global Optima:** For non-convex problems, these methods typically converge to local optima. The starting point can significantly influence the final solution.
*   **Subproblem Solvability:** The chosen linearization method must result in subproblems that can be solved efficiently and reliably.
*   **GRG Variable Classification:** The choice of basic and non-basic variables in GRG can impact the algorithm's performance and the need for variable reclassifications. The Jacobian of basic variables with respect to their constraints must be invertible.
*   **SLP Stability:** SLP can be prone to oscillations without proper step size control or trust regions.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## References and Further Reading

*   **Engineering Optimization, Methods and Applications** by A Ravindran, K M Ragsdell, G V Reklaitis (John Wiley and Sons, 2006): This is your primary textbook. Expect detailed coverage of SLP, GRG, and other constrained optimization algorithms.
*   **Introduction to Linear Optimization** by Dimitris Bertsimas, John N Tsitsiklis (Athena Scientific, 1997): Excellent for understanding the foundations of linear programming, which are crucial for many linearization techniques.
*   **Stories about Maxima and Minima** by V M Tikhomirov (American Mathematical Society, 1990): Provides theoretical insights into optimization problems and their solutions, potentially touching upon the mathematical underpinnings of these methods.

---