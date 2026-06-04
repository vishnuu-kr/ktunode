---
title: "Optimization algorithms for solving unconstrained nonlinear optimization problems – Search based techniques"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 2: Optimization algorithms for solving unconstrained nonlinear optimization problems – Search based techniques"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fef31"
status: "completed"
scrapedAt: "2026-05-23T18:02:32.465Z"
---
# Module 2: Optimization Algorithms for Unconstrained Nonlinear Optimization Problems – Search Based Techniques

## Introduction

This module delves into **search-based techniques** for solving **unconstrained nonlinear optimization problems**. These methods aim to find the minimum (or maximum) of a function $f(\mathbf{x})$, where $\mathbf{x}$ is a vector of decision variables and there are no constraints on the values of $\mathbf{x}$. Unconstrained optimization forms the foundation for many constrained optimization techniques, and understanding these search strategies is crucial for tackling complex engineering problems.

## Course Outcomes Addressed in this Module:

*   **CO3: Solve the unconstrained optimization problems using gradient-based methods.** (While this module focuses on search-based techniques, understanding how they interact with or complement gradient information is important).
*   **CO5: Use metaheuristic algorithms to solve constrained and unconstrained optimization problems.** (Many search-based techniques, particularly direct search and derivative-free methods, are precursors to or have similarities with metaheuristics).

## Learning Outcomes:

Upon successful completion of this module, you will be able to:

*   Understand the fundamental principles of search-based optimization techniques.
*   Apply and analyze various direct search methods for unconstrained nonlinear optimization.
*   Discuss the advantages and disadvantages of different search-based algorithms.
*   Implement basic search-based algorithms for solving practical unconstrained optimization problems.
*   Relate the concepts of search-based techniques to broader optimization strategies.

## 1. Nature of Unconstrained Nonlinear Optimization Problems

An unconstrained nonlinear optimization problem can be stated as:

**Minimize** $f(\mathbf{x})$

**Subject to:** $\mathbf{x} \in \mathbb{R}^n$

where:
*   $f(\mathbf{x})$ is the objective function, which is nonlinear and may be differentiable or non-differentiable.
*   $\mathbf{x} = [x_1, x_2, \dots, x_n]^T$ is the vector of decision variables.
*   $\mathbb{R}^n$ denotes the $n$-dimensional Euclidean space, implying no upper or lower bounds on the variables.

**Key Concepts:**

*   **Objective Function:** The function to be minimized or maximized.
*   **Decision Variables:** The variables that can be adjusted to optimize the objective function.
*   **Local Minimum:** A point $\mathbf{x}^*$ where $f(\mathbf{x}^*) \leq f(\mathbf{x})$ for all $\mathbf{x}$ in a neighborhood of $\mathbf{x}^*$.
*   **Global Minimum:** A point $\mathbf{x}^{**}$ where $f(\mathbf{x}^{**}) \leq f(\mathbf{x})$ for all $\mathbf{x}$ in the entire domain.
*   **Convexity:** A function is convex if the line segment between any two points on the graph of the function lies above or on the graph. For convex functions, any local minimum is also a global minimum.

**Reference:** S.S. Rao, Chapter 1: Introduction to Optimization, and Chapter 5: Optimization of Unconstrained Problems.

## 2. Search-Based Optimization Techniques

Search-based techniques are a broad category of algorithms that explore the search space to find the optimal solution. They typically involve generating a sequence of points and evaluating the objective function at these points. They can be broadly classified into:

*   **Direct Search Methods (Derivative-Free Methods):** These methods do not require gradient information of the objective function. They rely on comparing function values at different points to decide the next search direction.
*   **Gradient-Based Methods:** These methods utilize the gradient (first-order derivative) of the objective function to guide the search towards the minimum. While the module title emphasizes search-based, understanding the context with gradient methods is important as per CO3.

This module will primarily focus on **Direct Search Methods**.

## 3. Direct Search Methods

Direct search methods are particularly useful when the objective function is non-differentiable, noisy, or computationally expensive to differentiate.

### 3.1. One-Dimensional Search (Line Search)

Before moving to multi-dimensional search, it's essential to understand how to find the minimum of a function of a single variable, $f(x)$, along a specific direction. This is known as **line search**.

**Problem:** Minimize $f(x)$ along a line defined by $\mathbf{x} = \mathbf{x}_k + \alpha \mathbf{d}_k$, where $\mathbf{x}_k$ is the current point, $\mathbf{d}_k$ is the search direction, and $\alpha$ is the step size. We want to find $\alpha^*$ that minimizes $g(\alpha) = f(\mathbf{x}_k + \alpha \mathbf{d}_k)$.

**Key Methods for Line Search:**

#### 3.1.1. Exhaustive Search (Brute Force)

*   **Concept:** Evaluate the function at a large number of points within a given interval and select the point with the lowest function value.
*   **Procedure:**
    1.  Define an interval $[a, b]$ likely to contain the minimum.
    2.  Divide the interval into $N$ equal subintervals.
    3.  Evaluate $f(x)$ at $x_i = a + i \frac{b-a}{N}$ for $i = 0, 1, \dots, N$.
    4.  Identify the point $x_i$ that yields the minimum $f(x_i)$.
*   **Limitations:** Inefficient for high accuracy, requires prior knowledge of the interval, and can miss the minimum if the interval is too large or the number of points is too small.

#### 3.1.2. Bisection Method (for finding roots, but concept applies to finding minimum of derivative)

*   **Concept:** While primarily used for finding roots of $f'(x)=0$, the idea of narrowing down an interval is relevant. For minimization, we would typically search for a point where $f'(x)=0$.
*   **Procedure (for finding roots of $f'(x)$):**
    1.  Choose an interval $[a, b]$ such that $f'(a)$ and $f'(b)$ have opposite signs.
    2.  Calculate $c = (a+b)/2$.
    3.  Evaluate $f'(c)$.
    4.  If $f'(c) \approx 0$, $c$ is the root.
    5.  If $f'(a)$ and $f'(c)$ have opposite signs, new interval is $[a, c]$.
    6.  If $f'(c)$ and $f'(b)$ have opposite signs, new interval is $[c, b]$.
    7.  Repeat.
*   **Limitations:** Requires the derivative to be available and continuous.

#### 3.1.3. Golden Section Search

*   **Concept:** An efficient line search method that reduces the search interval by a constant factor in each iteration. It's a bracketing method that doesn't require derivatives.
*   **Procedure:**
    1.  Start with an interval $[a, b]$ that brackets the minimum.
    2.  Choose two interior points $x_1$ and $x_2$ such that $a < x_1 < x_2 < b$. The golden ratio $\phi = (1 + \sqrt{5})/2 \approx 1.618$ is used to position these points to ensure efficiency:
        *   $x_1 = b - (b-a)/\phi$
        *   $x_2 = a + (b-a)/\phi$
    3.  Evaluate $f(x_1)$ and $f(x_2)$.
    4.  If $f(x_1) < f(x_2)$: The minimum lies in $[a, x_2]$. The new interval becomes $[a, x_2]$. The old $x_1$ becomes the new $x_2'$ in the new interval, and a new $x_1'$ is calculated.
    5.  If $f(x_1) \geq f(x_2)$: The minimum lies in $[x_1, b]$. The new interval becomes $[x_1, b]$. The old $x_2$ becomes the new $x_1'$ in the new interval, and a new $x_2'$ is calculated.
    6.  Repeat until the interval $[a, b]$ is sufficiently small.
*   **Advantages:** Derivative-free, guaranteed convergence, efficient reduction of the search interval.
*   **Reference:** S.S. Rao, Chapter 5.3.1.

#### 3.1.4. Cubic Interpolation (e.g., Brent's Method)

*   **Concept:** Fits a cubic polynomial to points of the function and its derivatives (or approximated derivatives) to estimate the minimum. More sophisticated and often faster than Golden Section Search when derivatives are available or can be approximated.
*   **Procedure (simplified):**
    1.  Bracket the minimum.
    2.  Use function values (and potentially derivative values) at three points to construct a cubic polynomial.
    3.  Find the minimum of this cubic polynomial. This minimum serves as the next estimate for the line search.
*   **Advantages:** Can be very fast, converges quadratically when derivatives are used.
*   **Reference:** S.S. Rao, Chapter 5.3.2.

#### 3.1.5. Wolfe Conditions and Strong Wolfe Conditions

*   **Concept:** These are conditions used to determine an "acceptable" step size $\alpha$ in line search, especially in conjunction with gradient-based methods, but the principle of verifying a good step is fundamental. They ensure that the step taken is not too large or too small.
*   **Wolfe Conditions:**
    1.  **Armijo Rule (sufficient decrease):** $f(\mathbf{x}_k + \alpha \mathbf{d}_k) \leq f(\mathbf{x}_k) + c_1 \alpha f'(\mathbf{x}_k)^T \mathbf{d}_k$ for $0 < c_1 < 1$. This ensures a sufficient decrease in the function value.
    2.  **Curvature Condition:** $f'(\mathbf{x}_k + \alpha \mathbf{d}_k)^T \mathbf{d}_k \geq c_2 f'(\mathbf{x}_k)^T \mathbf{d}_k$ for $0 < c_1 < c_2 < 1$. This ensures that the derivative does not decrease too much.
*   **Strong Wolfe Conditions:** The Armijo rule is used, and the curvature condition is replaced with $|f'(\mathbf{x}_k + \alpha \mathbf{d}_k)^T \mathbf{d}_k| \leq c_2 |f'(\mathbf{x}_k)^T \mathbf{d}_k|$. This is often preferred for better convergence properties.
*   **Importance:** Ensures that the chosen step length is "meaningful" and helps avoid issues with very small or very large steps.

**Example (Golden Section Search):**

Find the minimum of $f(x) = x^2 - 4x + 5$ in the interval $[0, 5]$.

1.  $\phi \approx 1.618$, $1/\phi \approx 0.618$, $1/\phi^2 \approx 0.382$.
2.  Initial interval $[a, b] = [0, 5]$.
3.  $x_1 = 5 - (5-0)/1.618 = 5 - 3.09 = 1.91$
4.  $x_2 = 0 + (5-0)/1.618 = 0 + 3.09 = 3.09$
5.  $f(1.91) = (1.91)^2 - 4(1.91) + 5 = 3.65 - 7.64 + 5 = 1.01$
6.  $f(3.09) = (3.09)^2 - 4(3.09) + 5 = 9.55 - 12.36 + 5 = 2.19$
7.  Since $f(1.91) < f(3.09)$, the new interval is $[a, x_2] = [0, 3.09]$.
8.  The old $x_1$ (1.91) becomes the new $x_2'$ in the new interval $[0, 3.09]$.
9.  New $x_1'' = 3.09 - (3.09-0)/1.618 = 3.09 - 1.91 = 1.18$.
10. Evaluate $f(1.18) = (1.18)^2 - 4(1.18) + 5 = 1.39 - 4.72 + 5 = 1.67$.
11. Since $f(1.18) > f(1.91)$, the new interval is $[1.18, 3.09]$.

Continue this process until the interval is sufficiently small. The true minimum is at $x=2$, $f(2) = 1$.

### 3.2. Multi-Dimensional Search: Direct Search Methods

These methods explore the search space by evaluating the objective function at various points without using gradient information.

#### 3.2.1. Pattern Search Methods

These methods use a set of "pattern" directions to explore the neighborhood of the current point. If a better point is found, the algorithm moves to that point.

##### 3.2.1.1. Hooke-Jeeves Pattern Search

*   **Concept:** This method is characterized by two phases: **exploratory move** and **pattern move**. It aims to find the minimum by moving along exploratory directions and then taking a step in the direction of progress.
*   **Procedure:**
    1.  **Initialization:** Start at an initial point $\mathbf{x}_0$. Define an initial step size $\Delta > 0$ and a reduction factor $0 < \rho < 1$.
    2.  **Exploratory Move:** Starting from the current base point $\mathbf{x}_b$:
        *   Try to improve the function value by probing along a set of $n$ coordinate directions (or other predefined directions).
        *   For each direction $\mathbf{e}_i$:
            *   If $f(\mathbf{x}_b + \Delta \mathbf{e}_i) < f(\mathbf{x}_b)$, move to $\mathbf{x}_b + \Delta \mathbf{e}_i$.
            *   If $f(\mathbf{x}_b - \Delta \mathbf{e}_i) < f(\mathbf{x}_b)$, move to $\mathbf{x}_b - \Delta \mathbf{e}_i$.
        *   If no improvement is found in any of the $n$ directions, the step size $\Delta$ is reduced by $\rho$, and the exploratory move is restarted from the current base point.
        *   If the step size becomes too small, the algorithm may terminate or restart.
    3.  **Pattern Move:** If the exploratory move successfully finds a sequence of points leading to an improvement, a "pattern direction" is established. Let the last point found in the exploratory move be $\mathbf{x}_e$. The pattern move is to move from the current base point $\mathbf{x}_b$ to a new point $\mathbf{x}_p = \mathbf{x}_b + \beta (\mathbf{x}_e - \mathbf{x}_b)$, where $\beta > 1$ is a pattern multiplier (e.g., $\beta=1$ or $\beta=2$).
    4.  **Iteration:** The new base point becomes $\mathbf{x}_p$. The process repeats (exploration from $\mathbf{x}_p$). If the pattern move fails to improve the function value, the algorithm reverts to the previous base point and attempts a new exploratory move with a reduced step size.
*   **Advantages:** Relatively simple to implement, can be effective for functions with 'valley' shapes, derivative-free.
*   **Disadvantages:** Can be slow to converge near the optimum, may struggle with ill-conditioned problems or highly irregular surfaces.
*   **Reference:** S.S. Rao, Chapter 5.4.1.

##### 3.2.1.2. Simplex Method (Nelder-Mead Method)

*   **Concept:** This is a popular direct search method that maintains a simplex (a geometric figure with $n+1$ vertices in $n$-dimensional space) and iteratively modifies it to approach the minimum. It uses reflection, expansion, contraction, and shrinkage operations to move the simplex towards lower function values.
*   **Procedure:**
    1.  **Initialization:** Start with $n+1$ initial points $\mathbf{x}_0, \mathbf{x}_1, \dots, \mathbf{x}_n$ that form a simplex.
    2.  **Order Vertices:** Sort the vertices based on their function values, so $f(\mathbf{x}_1) \leq f(\mathbf{x}_2) \leq \dots \leq f(\mathbf{x}_{n+1})$. $\mathbf{x}_1$ is the best point, $\mathbf{x}_{n+1}$ is the worst.
    3.  **Calculate Centroid:** Compute the centroid $\mathbf{x}_c$ of all points except the worst one ($\mathbf{x}_{n+1}$):
        $\mathbf{x}_c = \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i$
    4.  **Reflection:** Reflect the worst point $\mathbf{x}_{n+1}$ across the centroid to get a reflected point $\mathbf{x}_r$:
        $\mathbf{x}_r = \mathbf{x}_c + \alpha (\mathbf{x}_c - \mathbf{x}_{n+1})$, where $\alpha > 0$ (typically $\alpha=1$).
    5.  **Evaluate Reflection:**
        *   If $f(\mathbf{x}_r) < f(\mathbf{x}_1)$: The reflected point is better than the best. Try **expansion**.
        *   If $f(\mathbf{x}_1) \leq f(\mathbf{x}_r) \leq f(\mathbf{x}_n)$: The reflected point is better than the second worst but not the best. Replace $\mathbf{x}_{n+1}$ with $\mathbf{x}_r$ and go to step 2.
        *   If $f(\mathbf{x}_r) > f(\mathbf{x}_n)$: The reflected point is worse than the second worst. Try **contraction**.
    6.  **Expansion:** If reflection produced a better point than the best ($f(\mathbf{x}_r) < f(\mathbf{x}_1)$), try to expand further in that direction:
        $\mathbf{x}_e = \mathbf{x}_c + \gamma (\mathbf{x}_r - \mathbf{x}_c)$, where $\gamma > 1$ (typically $\gamma=2$).
        *   If $f(\mathbf{x}_e) < f(\mathbf{x}_r)$: Replace $\mathbf{x}_{n+1}$ with $\mathbf{x}_e$.
        *   Else: Replace $\mathbf{x}_{n+1}$ with $\mathbf{x}_r$.
        Go to step 2.
    7.  **Contraction:** If reflection was worse than the second worst ($f(\mathbf{x}_r) > f(\mathbf{x}_n)$):
        *   **Outside Contraction:** If $f(\mathbf{x}_r) < f(\mathbf{x}_{n+1})$ (reflected point is better than the worst), contract towards the centroid:
            $\mathbf{x}_{c'} = \mathbf{x}_c + \beta (\mathbf{x}_r - \mathbf{x}_c)$, where $0 < \beta < 1$ (typically $\beta=0.5$).
            Replace $\mathbf{x}_{n+1}$ with $\mathbf{x}_{c'}$.
        *   **Inside Contraction:** If $f(\mathbf{x}_r) \geq f(\mathbf{x}_{n+1})$, contract towards the worst point:
            $\mathbf{x}_{c''} = \mathbf{x}_{n+1} + \beta (\mathbf{x}_c - \mathbf{x}_{n+1})$.
            Replace $\mathbf{x}_{n+1}$ with $\mathbf{x}_{c''}$.
        Go to step 2.
    8.  **Shrinkage:** If none of the above operations work (e.g., contraction also fails to improve), shrink the entire simplex towards the best point $\mathbf{x}_1$:
        For $i = 2, \dots, n+1$:
            $\mathbf{x}_i = \mathbf{x}_1 + \sigma (\mathbf{x}_i - \mathbf{x}_1)$, where $0 < \sigma < 1$ (typically $\sigma=0.5$).
        Go to step 2.
    9.  **Termination:** The algorithm terminates when the simplex becomes sufficiently small (e.g., variance of function values at vertices is below a tolerance, or the size of the simplex is below a threshold).
*   **Parameters:** $\alpha$ (reflection), $\beta$ (contraction), $\gamma$ (expansion), $\sigma$ (shrinkage). Typical values: $\alpha=1, \beta=0.5, \gamma=2, \sigma=0.5$.
*   **Advantages:** Derivative-free, robust to noise, often performs well in practice for various problems.
*   **Disadvantages:** Can be slow to converge for certain problems, might get stuck in local minima, performance depends on the initial simplex.
*   **Reference:** S.S. Rao, Chapter 5.4.2. Xin-She Yang, Chapter 6.4.

#### 3.2.2. Coordinate Search Methods

These methods move along the coordinate axes, searching for improvements.

##### 3.2.2.1. Coordinate Descent Method

*   **Concept:** This method minimizes the objective function by iteratively minimizing it along each coordinate direction, keeping other variables fixed.
*   **Procedure:**
    1.  **Initialization:** Start at an initial point $\mathbf{x}_0$.
    2.  **Iterate through Coordinates:** For $i = 1, 2, \dots, n$:
        *   Fix all variables except $x_i$.
        *   Minimize the univariate function $f(x_1, \dots, x_i, \dots, x_n)$ with respect to $x_i$ using a line search technique. Let the optimal value be $x_i^*$.
        *   Update $\mathbf{x}_k = [\dots, x_i^*, \dots]$.
    3.  **Repeat:** Repeat step 2 until convergence (e.g., the changes in $\mathbf{x}$ or $f(\mathbf{x})$ are below a tolerance).
*   **Advantages:** Simple to implement, effective for some problems (especially those with separable objective functions), uses line search.
*   **Disadvantages:** Can be slow to converge, especially for functions with narrow valleys or ill-conditioned Hessian matrices. The choice of search order can affect performance.
*   **Reference:** S.S. Rao, Chapter 5.4.3.

**Example (Coordinate Descent):**

Minimize $f(x_1, x_2) = (x_1 - 2)^2 + (x_2 - 3)^2$. Starting at $\mathbf{x}_0 = (0, 0)$.

**Iteration 1:**

*   **Minimize w.r.t. $x_1$ (keeping $x_2=0$ fixed):**
    $f(x_1, 0) = (x_1 - 2)^2 + (0 - 3)^2 = (x_1 - 2)^2 + 9$.
    This is a parabola with minimum at $x_1 = 2$.
    Update: $\mathbf{x}_1 = (2, 0)$.

*   **Minimize w.r.t. $x_2$ (keeping $x_1=2$ fixed):**
    $f(2, x_2) = (2 - 2)^2 + (x_2 - 3)^2 = 0 + (x_2 - 3)^2$.
    This parabola has minimum at $x_2 = 3$.
    Update: $\mathbf{x}_2 = (2, 3)$.

**Iteration 2:**

*   **Minimize w.r.t. $x_1$ (keeping $x_2=3$ fixed):**
    $f(x_1, 3) = (x_1 - 2)^2 + (3 - 3)^2 = (x_1 - 2)^2$.
    Minimum at $x_1 = 2$.
    Update: $\mathbf{x}_3 = (2, 3)$.

*   **Minimize w.r.t. $x_2$ (keeping $x_1=2$ fixed):**
    $f(2, x_2) = (2 - 2)^2 + (x_2 - 3)^2 = (x_2 - 3)^2$.
    Minimum at $x_2 = 3$.
    Update: $\mathbf{x}_4 = (2, 3)$.

The algorithm has converged to the minimum $(2, 3)$.

##### 3.2.2.2. Direct-Access Coordinate Search

*   **Concept:** Similar to coordinate descent, but the search along each coordinate direction is performed using a dedicated line search method. It might not strictly require minimizing along each coordinate in sequence, but rather searching for improvement.
*   **Procedure:** Involves taking steps along coordinate directions and updating the position if an improvement is found. The step size can be fixed or adaptively reduced.

#### 3.2.3. Grid Search

*   **Concept:** Similar to exhaustive search but applied to multiple dimensions. The search space is discretized into a grid, and the objective function is evaluated at each grid point.
*   **Procedure:**
    1.  Define a rectangular region in the search space.
    2.  Discretize each dimension into a number of points. This creates a grid of points.
    3.  Evaluate the objective function at every point on the grid.
    4.  Select the point with the minimum function value.
*   **Advantages:** Simple to understand and implement, guaranteed to find the minimum within the grid if the grid is fine enough.
*   **Disadvantages:** Extremely inefficient and computationally expensive for high-dimensional problems or when high accuracy is required. The "curse of dimensionality."
*   **Reference:** Applicable conceptually from exhaustive search principles.

**Important Point:** Grid search is generally not practical for anything beyond very low-dimensional problems due to its computational cost.

### 3.3. Other Search-Based Techniques (Briefly Mentioned, will be expanded in other modules)

*   **Random Search:** Samples points randomly from the search space and selects the best one. Simple but inefficient for high accuracy.
*   **Evolutionary Algorithms (e.g., Genetic Algorithms):** Inspired by biological evolution, these metaheuristics use concepts like selection, crossover, and mutation to evolve a population of potential solutions. They are powerful for complex, multimodal, and even non-differentiable functions. (Covered in CO5).
*   **Particle Swarm Optimization (PSO), Ant Colony Optimization (ACO):** Other metaheuristic algorithms that employ swarm intelligence principles.

## 4. Comparison of Search-Based Techniques

| Method                   | Derivative Required? | Strengths                                                    | Weaknesses                                                  | Use Cases                                                   |
| :----------------------- | :------------------- | :----------------------------------------------------------- | :---------------------------------------------------------- | :---------------------------------------------------------- |
| **Golden Section Search** | No                   | Simple, efficient 1D search, derivative-free                 | Only 1D, needs initial bracket                               | Line search in multi-dim methods, 1D optimization         |
| **Hooke-Jeeves**         | No                   | Derivative-free, handles valleys well                        | Can be slow, sensitive to step size and pattern parameters  | Moderate-dimensional problems, non-differentiable functions |
| **Nelder-Mead (Simplex)**| No                   | Derivative-free, robust to noise, generally good performance | Can be slow convergence, sensitive to initial simplex       | Robust general-purpose direct search, noisy functions       |
| **Coordinate Descent**   | No                   | Simple, uses line search                                     | Slow convergence for ill-conditioned problems               | Separable objective functions, simple structures            |
| **Grid Search**          | No                   | Simple, guaranteed minimum on grid                           | Extremely inefficient, curse of dimensionality              | Very low-dimensional, illustrative purposes                 |

## 5. Important Points to Remember

*   **Derivative-Free Nature:** The primary advantage of these methods is their ability to work without gradient information, making them suitable for non-differentiable, noisy, or black-box functions.
*   **Convergence:** While they can find optima, their convergence rates are generally slower than gradient-based methods, especially for smooth, well-behaved functions.
*   **Local vs. Global Minima:** Like most optimization algorithms, search-based techniques can get trapped in local minima for non-convex functions. The initial starting point(s) or initial simplex can significantly influence the final solution.
*   **Parameter Sensitivity:** Some methods (like Nelder-Mead) have parameters that need careful tuning for optimal performance.
*   **Computational Cost:** For high-dimensional problems, the number of function evaluations can become very large, making them computationally expensive.

## 6. Practice Questions

**Question 1:**
Which of the following is a key advantage of direct search methods over gradient-based methods for unconstrained optimization?
(a) Faster convergence rate
(b) Requirement of function derivatives
(c) Ability to handle non-differentiable functions
(d) Guaranteed global optimality for all problems

**Question 2:**
The Golden Section Search method is used for:
(a) Multi-dimensional optimization
(b) One-dimensional line search
(c) Finding roots of functions
(d) Constrained optimization

**Question 3:**
Describe the two main phases of the Hooke-Jeeves pattern search method.

**Question 4:**
In the Nelder-Mead simplex method, what is the purpose of the "shrinkage" operation?

**Question 5:**
Consider the function $f(x_1, x_2) = x_1^2 + x_2^2$. Starting at $\mathbf{x}_0 = (3, 4)$, use the Coordinate Descent method (minimizing $x_1$ first, then $x_2$) to find the minimum.

## 7. Answers to Practice Questions

**Answer 1:**
(c) Ability to handle non-differentiable functions.
Gradient-based methods require derivatives, which are unavailable or unreliable for non-differentiable functions. Direct search methods do not require derivatives.

**Answer 2:**
(b) One-dimensional line search.
Golden Section Search is a highly efficient method for finding the minimum of a function of a single variable along a specific direction.

**Answer 3:**
The Hooke-Jeeves pattern search method consists of two main phases:
1.  **Exploratory Move:** This phase involves searching along a set of directions (usually coordinate directions) from the current base point to find an improved point. If no improvement is found in any direction, the step size is reduced.
2.  **Pattern Move:** If the exploratory move leads to a successful improvement, a "pattern direction" is established based on the movement during the exploration. The algorithm then takes a larger step along this pattern direction from the base point. If this pattern move is successful, it becomes the new base point for further exploration. If it fails, the algorithm may revert to the previous base point and continue with a reduced step size.

**Answer 4:**
In the Nelder-Mead simplex method, the "shrinkage" operation is used when the reflection and contraction operations fail to produce a better point than the current worst point. It involves shrinking the entire simplex towards the best vertex by reducing the size of all other vertices. This is a fallback mechanism to ensure progress and prevent the algorithm from stalling.

**Answer 5:**
Minimize $f(x_1, x_2) = x_1^2 + x_2^2$. Start at $\mathbf{x}_0 = (3, 4)$.

**Iteration 1:**

*   **Minimize w.r.t. $x_1$ (keeping $x_2=4$ fixed):**
    $f(x_1, 4) = x_1^2 + 4^2 = x_1^2 + 16$.
    This is a parabola with minimum at $x_1 = 0$.
    Update: $\mathbf{x}_1 = (0, 4)$.

*   **Minimize w.r.t. $x_2$ (keeping $x_1=0$ fixed):**
    $f(0, x_2) = 0^2 + x_2^2 = x_2^2$.
    This parabola has minimum at $x_2 = 0$.
    Update: $\mathbf{x}_2 = (0, 0)$.

**Iteration 2:**

*   **Minimize w.r.t. $x_1$ (keeping $x_2=0$ fixed):**
    $f(x_1, 0) = x_1^2 + 0^2 = x_1^2$.
    Minimum at $x_1 = 0$.
    Update: $\mathbf{x}_3 = (0, 0)$.

*   **Minimize w.r.t. $x_2$ (keeping $x_1=0$ fixed):**
    $f(0, x_2) = 0^2 + x_2^2 = x_2^2$.
    Minimum at $x_2 = 0$.
    Update: $\mathbf{x}_4 = (0, 0)$.

The algorithm has converged to the minimum $(0, 0)$.

---
This concludes Module 2. Remember that these search-based techniques are fundamental, and their principles are often integrated into more complex algorithms.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
