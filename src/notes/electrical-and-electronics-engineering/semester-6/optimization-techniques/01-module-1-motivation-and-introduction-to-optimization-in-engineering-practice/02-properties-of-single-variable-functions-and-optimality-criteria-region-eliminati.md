---
title: "Properties of single variable functions and optimality criteria, Region elimination methods, Polynomial estimation methods - quadratic estimation"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 1: Motivation and introduction to optimization in engineering practice"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3668f"
status: "completed"
scrapedAt: "2026-05-23T16:30:18.953Z"
---
# OPTIMIZATION TECHNIQUES: Module 1 - Motivation and Introduction to Optimization in Engineering Practice

## Topic: Properties of Single Variable Functions and Optimality Criteria, Region Elimination Methods, Polynomial Estimation Methods - Quadratic Estimation

### 1. Motivation and Introduction to Optimization in Engineering Practice

**What is Optimization?**

Optimization is the process of finding the best solution (maximum or minimum) to a problem from a set of feasible solutions. In engineering, this often translates to designing systems that are efficient, cost-effective, safe, and reliable.

**Why is Optimization Important in Engineering?**

*   **Resource Allocation:** Efficiently utilizing limited resources (time, materials, energy, budget).
*   **Performance Improvement:** Maximizing output, minimizing losses, enhancing efficiency.
*   **Cost Reduction:** Minimizing manufacturing costs, operational expenses, maintenance.
*   **Design Enhancement:** Achieving desired specifications, improving reliability, reducing weight.
*   **Problem Solving:** Addressing complex engineering challenges that involve trade-offs.

**(Reference: Ravindran, Ragsdell, & Reklaitis, 2006 - Chapter 1 provides a broad overview of optimization's role in engineering.)**

### 2. Properties of Single Variable Functions and Optimality Criteria

This section focuses on understanding the characteristics of functions with a single independent variable and identifying conditions for optimal solutions. This directly contributes to **CO1: To evaluate the optimality criteria and methods for functions with single variable (Knowledge Level: K4)**.

#### 2.1. Objective Function and Decision Variable

*   **Objective Function:** The function we aim to minimize or maximize. It's typically denoted as $f(x)$ for a single variable function.
*   **Decision Variable:** The independent variable that we can change to achieve the optimal objective function value. In this section, it's $x$.

#### 2.2. Types of Optimal Solutions

*   **Global Optimum:** The best possible value of the objective function over the entire domain of the decision variable.
*   **Local Optimum:** A value of the objective function that is better than all other values in its immediate neighborhood.

#### 2.3. Properties of Functions Relevant to Optimization

*   **Continuity:** A function is continuous at a point if there are no breaks or jumps in its graph at that point. Most optimization algorithms require continuous functions.
*   **Differentiability:** A function is differentiable at a point if its derivative exists at that point. This allows us to use calculus-based methods.
    *   **First Derivative:** The rate of change of the function.
    *   **Second Derivative:** The rate of change of the first derivative.

#### 2.4. Optimality Criteria (First and Second Order Conditions)

For a function $f(x)$ and its derivative $f'(x)$ and second derivative $f''(x)$:

**Necessary Conditions for a Local Minimum/Maximum:**

*   **First-Order Necessary Condition:** If $x^*$ is a local extremum (minimum or maximum) of $f(x)$ and $f(x)$ is differentiable at $x^*$, then $f'(x^*) = 0$.
    *   This means that at an optimal point, the slope of the function is zero. This is a necessary condition, but not sufficient.
*   **Second-Order Necessary Condition:**
    *   For a **local minimum**: $f''(x^*) \ge 0$.
    *   For a **local maximum**: $f''(x^*) \le 0$.

**Sufficient Conditions for a Local Minimum/Maximum:**

*   **Second-Order Sufficient Condition:**
    *   If $f'(x^*) = 0$ and $f''(x^*) > 0$, then $x^*$ is a **strict local minimum**.
    *   If $f'(x^*) = 0$ and $f''(x^*) < 0$, then $x^*$ is a **strict local maximum**.

**What if $f''(x^*) = 0$?**
If the second derivative is zero at a stationary point ($f'(x^*) = 0$), we need to examine higher-order derivatives to determine the nature of the extremum.
*   If the first non-zero derivative is of **even order** ($f^{(n)}(x^*) \neq 0$, where $n$ is even):
    *   If $f^{(n)}(x^*) > 0$, it's a local minimum.
    *   If $f^{(n)}(x^*) < 0$, it's a local maximum.
*   If the first non-zero derivative is of **odd order** ($f^{(n)}(x^*) \neq 0$, where $n$ is odd), then $x^*$ is an **inflection point**, not an extremum.

**(Reference: Ravindran, Ragsdell, & Reklaitis, 2006 - Chapter 2 covers these fundamental concepts of optimality criteria.)**

#### 2.5. Convexity and its Role in Optimization

*   **Convex Function:** A function where the line segment connecting any two points on the function's graph lies above or on the graph itself. For a twice-differentiable function $f(x)$, if $f''(x) \ge 0$ for all $x$ in its domain, then $f(x)$ is convex.
*   **Concave Function:** A function where the line segment connecting any two points on the function's graph lies below or on the graph itself. For a twice-differentiable function $f(x)$, if $f''(x) \le 0$ for all $x$ in its domain, then $f(x)$ is concave.

**Key Property:** For a **convex function**, any local minimum is also a **global minimum**. This simplifies the optimization problem significantly.

**Example:**
*   $f(x) = x^2$ is convex because $f''(x) = 2 > 0$. The minimum is at $x=0$.
*   $f(x) = -x^2$ is concave because $f''(x) = -2 < 0$. The maximum is at $x=0$.
*   $f(x) = x^3$ is neither convex nor concave globally. It has an inflection point at $x=0$ where $f'(0) = 0$ and $f''(0) = 0$.

**(Reference: Bertsimas & Tsitsiklis, 1997 - Chapter 5 discusses convexity in detail, which is foundational for many optimization algorithms.)**

### 3. Region Elimination Methods (Search Methods)

These methods are used to find the optimum of a function within a given interval by systematically reducing the size of the interval that is known to contain the optimum. They are often used when the function is unimodal within the search interval (has only one minimum or maximum). This aligns with **CO1** and **CO5: To explore search techniques and applications in optimization (Knowledge Level: K3)**.

#### 3.1. Elimination of Unsuitable Regions

The core idea is to evaluate the objective function at a few points within the current interval and use the results to discard a portion of the interval that cannot contain the optimum.

#### 3.2. Fibonacci Search Method

*   **Concept:** This method uses Fibonacci numbers to determine the positions of the test points. It's an efficient method that requires a fixed number of function evaluations for a given reduction in interval size.
*   **Procedure:**
    1.  Define the initial search interval $[a, b]$ and the desired accuracy $\epsilon$.
    2.  Determine the number of function evaluations $n$ required such that $F_{n+1} \ge (b-a)/\epsilon$, where $F_k$ is the $k$-th Fibonacci number ($F_0=0, F_1=1, F_2=1, F_3=2, ...$).
    3.  Calculate the test points $x_1$ and $x_2$ within the interval based on Fibonacci numbers. For example, to reduce the interval to $n$ stages, we need $n+1$ Fibonacci numbers. The initial interval length is $L_0 = b-a$. In stage $k$, the interval length is $L_k$.
        *   $x_1 = a + \frac{F_{n-k}}{F_{n-k+1}} L_{k-1}$
        *   $x_2 = b - \frac{F_{n-k}}{F_{n-k+1}} L_{k-1}$ (or equivalently $x_2 = a + \frac{F_{n-k+1}}{F_{n-k+1}} L_{k-1}$)
    4.  Evaluate $f(x_1)$ and $f(x_2)$.
    5.  **If $f(x_1) < f(x_2)$ (for minimization):** The optimum lies in $[a, x_2]$. Set $b = x_2$ and repeat from step 3 with the new interval.
    6.  **If $f(x_1) > f(x_2)$ (for minimization):** The optimum lies in $[x_1, b]$. Set $a = x_1$ and repeat from step 3.
    7.  **If $f(x_1) = f(x_2)$ (for minimization):** The optimum lies in $[x_1, x_2]$. Set $a = x_1$, $b = x_2$, and repeat.
    8.  The process continues until the interval width $(b-a)$ is less than $\epsilon$. The midpoint of the final interval is taken as the approximate location of the optimum.

*   **Example (Minimization):** Find the minimum of $f(x) = x^2 - 4x + 5$ in the interval $[0, 5]$ using Fibonacci search. Let $\epsilon = 0.1$.
    *   Interval width $L_0 = 5 - 0 = 5$.
    *   We need $F_{n+1} \ge 5/0.1 = 50$.
    *   Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55.
    *   So, we need $n+1 = 11$, which means $n=10$. We'll need $F_1$ to $F_{11}$.
    *   **Stage 1 (k=1):** $F_{10} = 34, F_{11} = 55$.
        *   $x_1 = 0 + \frac{F_{10}}{F_{11}} (5) = 0 + \frac{34}{55} \times 5 \approx 3.09$
        *   $x_2 = 5 - \frac{F_{10}}{F_{11}} (5) = 5 - \frac{34}{55} \times 5 \approx 1.91$
        *   $f(3.09) = (3.09)^2 - 4(3.09) + 5 \approx 9.5481 - 12.36 + 5 = 2.1881$
        *   $f(1.91) = (1.91)^2 - 4(1.91) + 5 \approx 3.6481 - 7.64 + 5 = 1.0081$
    *   Since $f(x_1) > f(x_2)$, the new interval is $[x_1, b] = [3.09, 5]$. (Note: there was a mistake in the calculation, $x_2 < x_1$. Let's recalculate points correctly).
    *   Correct $x_1 = a + (1 - \lambda)L$, $x_2 = a + \lambda L$ where $\lambda = F_{n-k+1}/F_{n-k+2}$.
    *   Let's use a simpler formulation for positioning:
        *   $x_1 = a + \frac{F_{n-1}}{F_n} (b-a)$
        *   $x_2 = b - \frac{F_{n-1}}{F_n} (b-a)$

    *   Let's restart with proper Fibonacci index usage for clarity:
        *   To reduce an interval of length $L$ to $L'$ in $m$ steps, we need $F_{m+2} \ge L/L'$.
        *   If $L=5$, $\epsilon=0.1$, we need $n$ such that $F_{n+1} \ge 50$. $F_{11}=55$, so $n=10$ steps are needed.
        *   Initial interval $[a, b] = [0, 5]$. $L_0 = 5$.
        *   **Stage 1 (k=1, n=10):** Use $F_{n-k+1} = F_{10} = 34$ and $F_{n-k+2} = F_{11} = 55$.
            *   $x_1 = a + \frac{F_{10}}{F_{11}} (b-a) = 0 + \frac{34}{55} \times 5 \approx 3.0909$
            *   $x_2 = b - \frac{F_{10}}{F_{11}} (b-a) = 5 - \frac{34}{55} \times 5 \approx 1.9091$
            *   $f(3.0909) \approx 2.1818$
            *   $f(1.9091) \approx 1.0082$
            *   Since $f(1.9091) < f(3.0909)$, the new interval is $[a, x_1] = [0, 3.0909]$. $b = 3.0909$.
        *   **Stage 2 (k=2, n=10):** $L_1 = 3.0909$. Use $F_{n-k+1} = F_{9} = 21$ and $F_{n-k+2} = F_{10} = 34$.
            *   $x_1 = a + \frac{F_{9}}{F_{10}} (b-a) = 0 + \frac{21}{34} \times 3.0909 \approx 1.9146$
            *   $x_2 = b - \frac{F_{9}}{F_{10}} (b-a) = 3.0909 - \frac{21}{34} \times 3.0909 \approx 1.1763$
            *   $f(1.9146) \approx 1.0076$
            *   $f(1.1763) \approx 1.7008$
            *   Since $f(1.9146) < f(1.1763)$, the new interval is $[a, x_2] = [0, 1.1763]$. $b = 1.1763$.
        *   ...and so on. The true minimum is at $x=2$, where $f(2) = 4 - 8 + 5 = 1$.

*   **Advantages:** Guaranteed reduction in interval size, optimal number of function evaluations for a given precision.
*   **Disadvantages:** Requires knowing the number of function evaluations in advance or recalculating Fibonacci numbers. The function must be unimodal.

#### 3.3. Golden Section Search Method

*   **Concept:** Similar to Fibonacci search but uses the golden ratio $\phi \approx 1.618$ (or $1/\phi \approx 0.618$) to determine the test points. It's asymptotically equivalent to Fibonacci search and offers flexibility as it doesn't require knowing the total number of iterations beforehand.
*   **Golden Ratio Properties:** $\phi^2 = \phi + 1$, $1/\phi = \phi - 1 \approx 0.618$.
*   **Procedure:**
    1.  Define the initial search interval $[a, b]$ and the desired accuracy $\epsilon$.
    2.  Choose two interior points $x_1$ and $x_2$ such that:
        *   $x_1 = b - (b-a)/\phi$
        *   $x_2 = a + (b-a)/\phi$
        *   Note that $x_1$ and $x_2$ are symmetric within the interval, and $b-x_1 = x_2-a = (b-a)/\phi$. Also, $x_2 - x_1 = b - (b-a)/\phi - (a + (b-a)/\phi) = b - a - 2(b-a)/\phi = (b-a)(1 - 2/\phi) = (b-a)(\phi - 2)/\phi = (b-a)(\phi - (\phi+1))/\phi = (b-a)(-1)/\phi$. This is incorrect. Let's use the distance property. The distance between the points and the ends should be related to the golden ratio.
        *   Let $L = b-a$.
        *   $x_1 = a + (1 - 1/\phi)L = a + (1 - (\phi-1))L = a + (2-\phi)L$ (This is not standard)
        *   Correct placement:
            *   $x_1 = b - \frac{b-a}{\phi}$
            *   $x_2 = a + \frac{b-a}{\phi}$
            *   The distance from $a$ to $x_2$ is $(b-a)/\phi$.
            *   The distance from $x_1$ to $b$ is $(b-a)/\phi$.
            *   The distance between $x_1$ and $x_2$ is $b - \frac{b-a}{\phi} - (a + \frac{b-a}{\phi}) = b-a - 2\frac{b-a}{\phi} = (b-a)(1 - 2/\phi) = (b-a)(1 - 2(\phi-1)) = (b-a)(1 - 2\phi + 2) = (b-a)(3-2\phi)$. This is also getting complicated.

        *   **Simpler placement:** Let the ratio of the interval divisions be $1/\phi$.
            *   $x_1 = a + \frac{1}{\phi}(b-a)$
            *   $x_2 = b - \frac{1}{\phi}(b-a)$
            *   This means $x_2$ is closer to $a$ than $x_1$ if $1/\phi < 0.5$. $1/\phi \approx 0.618$, so $x_1$ is closer to $a$.
            *   Let's use the property that the new points in the reduced interval are at the same relative positions.
            *   Let $\tau = \frac{\sqrt{5}-1}{2} \approx 0.618$.
            *   $x_1 = b - \tau(b-a)$
            *   $x_2 = a + \tau(b-a)$
            *   Ensure $x_1 < x_2$. This is true if $b - \tau(b-a) < a + \tau(b-a)$, which means $b-a < 2\tau(b-a)$, or $1 < 2\tau$, which is $1 < \sqrt{5}-1$, or $2 < \sqrt{5}$ (True). So $x_1 < x_2$ is correct.

    3.  Evaluate $f(x_1)$ and $f(x_2)$.
    4.  **If $f(x_1) < f(x_2)$ (for minimization):** The optimum lies in $[a, x_2]$. Set $b = x_2$. The new $x_2$ becomes the old $x_1$. Calculate the new $x_1$ using the same ratio.
    5.  **If $f(x_1) > f(x_2)$ (for minimization):** The optimum lies in $[x_1, b]$. Set $a = x_1$. The new $x_1$ becomes the old $x_2$. Calculate the new $x_2$ using the same ratio.
    6.  The process continues until the interval width $(b-a)$ is less than $\epsilon$.

*   **Example (Minimization):** Find the minimum of $f(x) = x^2 - 4x + 5$ in the interval $[0, 5]$ using Golden Section Search. Let $\epsilon = 0.1$. $\tau \approx 0.618$.
    *   Initial interval $[a, b] = [0, 5]$. $L=5$.
    *   **Iteration 1:**
        *   $x_1 = 5 - 0.618(5) = 5 - 3.09 = 1.91$
        *   $x_2 = 0 + 0.618(5) = 0 + 3.09 = 3.09$
        *   $f(1.91) \approx 1.0081$
        *   $f(3.09) \approx 2.1881$
        *   Since $f(1.91) < f(3.09)$, the new interval is $[a, x_2] = [0, 3.09]$. $b = 3.09$.
        *   The new $x_2$ (which becomes the old $x_1$) is $1.91$.
        *   The new $x_1$ is calculated as $b - \tau(b-a) = 3.09 - 0.618(3.09) = 3.09 - 1.91 = 1.18$.
    *   **Iteration 2:** Interval $[0, 3.09]$, $L=3.09$.
        *   $x_1 = 1.18$ (carried over from previous iteration, but it's now the *new* $x_1$)
        *   $x_2 = 3.09 - 0.618(3.09) = 3.09 - 1.91 = 1.18$ (This is incorrect. The calculation must use the *new* interval)
        *   Correctly:
            *   New interval $[a, b] = [0, 3.09]$. $L = 3.09$.
            *   $x_1 = 1.91$ (from previous iteration, now it's the point within the new interval from the "left" side).
            *   New $x_1$ is calculated based on the *new* interval: $x_1^{new} = b - \tau(b-a) = 3.09 - 0.618(3.09) \approx 3.09 - 1.91 = 1.18$. (This should be $x_2$ in the previous iteration which becomes $x_1$ in the current iteration)
            *   Let's be precise with point definitions. In iteration $k$, we have interval $[a_k, b_k]$ and points $x_{k1}, x_{k2}$.
            *   Iter 1: $[a_1, b_1] = [0, 5]$. $\tau \approx 0.618$.
                *   $x_{11} = 5 - 0.618(5) \approx 1.91$. $f(1.91) \approx 1.0081$.
                *   $x_{12} = 0 + 0.618(5) \approx 3.09$. $f(3.09) \approx 2.1881$.
                *   $f(x_{11}) < f(x_{12}) \implies$ new interval is $[a_2, b_2] = [a_1, x_{12}] = [0, 3.09]$.
                *   The *new* $x_{22}$ will be $x_{11}$ (the point that was closer to the center).
                *   The *new* $x_{21}$ is calculated: $x_{21} = b_2 - \tau(b_2-a_2) = 3.09 - 0.618(3.09) \approx 3.09 - 1.91 = 1.18$.
            *   Iter 2: $[a_2, b_2] = [0, 3.09]$. $L=3.09$.
                *   $x_{21} = 1.18$. $f(1.18) \approx 1.702$.
                *   $x_{22} = 1.91$. $f(1.91) \approx 1.0081$.
                *   $f(x_{22}) < f(x_{21}) \implies$ new interval is $[a_3, b_3] = [x_{21}, b_2] = [1.18, 3.09]$.
                *   The *new* $x_{31}$ will be $x_{22}$ (the point closer to the center).
                *   The *new* $x_{32}$ is calculated: $x_{32} = a_3 + \tau(b_3-a_3) = 1.18 + 0.618(3.09 - 1.18) = 1.18 + 0.618(1.91) \approx 1.18 + 1.18 = 2.36$.
            *   Iter 3: $[a_3, b_3] = [1.18, 3.09]$. $L=1.91$.
                *   $x_{31} = 1.91$. $f(1.91) \approx 1.0081$.
                *   $x_{32} = 2.36$. $f(2.36) \approx 1.30$.
                *   $f(x_{31}) < f(x_{32}) \implies$ new interval is $[a_4, b_4] = [a_3, x_{32}] = [1.18, 2.36]$.
                *   The interval width is $2.36 - 1.18 = 1.18$. Still greater than 0.1.
        *   The process continues until the interval is small enough.

*   **Advantages:** Can be implemented without knowing the total number of iterations in advance. High convergence rate.
*   **Disadvantages:** Requires the function to be unimodal.

### 4. Polynomial Estimation Methods - Quadratic Estimation

These methods use polynomial approximations (specifically quadratic) of the objective function to estimate the location of the optimum. This is crucial for developing more efficient search strategies and forms the basis for derivative-based methods when derivatives are available. This directly addresses **CO1** and is fundamental to understanding more advanced optimization.

#### 4.1. Fitting a Quadratic Function

Given three points $(x_0, f(x_0))$, $(x_1, f(x_1))$, and $(x_2, f(x_2))$, we can fit a unique quadratic polynomial $p(x) = ax^2 + bx + c$ that passes through these points.

*   **Goal:** To find the minimum (or maximum) of this quadratic approximation, which serves as an estimate for the minimum of the original function.
*   **Quadratic function form:** $p(x) = ax^2 + bx + c$.
*   **Finding coefficients $a, b, c$:**
    We have the system of equations:
    $ax_0^2 + bx_0 + c = f(x_0)$
    $ax_1^2 + bx_1 + c = f(x_1)$
    $ax_2^2 + bx_2 + c = f(x_2)$

    This is a system of 3 linear equations in 3 unknowns ($a, b, c$). It can be solved using various methods (e.g., Cramer's rule, matrix inversion, substitution).

*   **Finding the Optimum of the Quadratic:**
    The minimum (or maximum) of a quadratic $p(x) = ax^2 + bx + c$ occurs where its derivative $p'(x) = 2ax + b$ is zero.
    $2ax + b = 0 \implies x = -b / (2a)$.

    *   If $a > 0$, the quadratic has a minimum at $x = -b / (2a)$.
    *   If $a < 0$, the quadratic has a maximum at $x = -b / (2a)$.
    *   If $a = 0$, the function is linear, and there's no unique minimum/maximum unless within an interval.

#### 4.2. Sequential Quadratic Approximation (or Interpolation)

This is an iterative process where we use current function values to build a quadratic model and then use the minimum of this model as the next point to evaluate the original function.

*   **Algorithm Idea:**
    1.  Start with an initial guess $x_0$ and an interval $[a, b]$ containing the optimum.
    2.  Choose two more points within the interval, say $x_1$ and $x_2$. Often, these are chosen to form an initial bracket of the minimum, or based on some search strategy.
    3.  Fit a quadratic polynomial $p(x)$ through the points $(x_0, f(x_0))$, $(x_1, f(x_1))$, and $(x_2, f(x_2))$.
    4.  Find the minimum of the quadratic $p(x)$, say at $x^* = -b / (2a)$.
    5.  Evaluate $f(x^*)$.
    6.  Use the new point $(x^*, f(x^*))$ along with two of the previous points that form a new bracket for the minimum to repeat the process. The selection of points is crucial to ensure convergence.
    7.  Stop when the change in the estimated minimum location is small enough or a maximum number of iterations is reached.

*   **Cubic Fit as a more general case:** Often, to ensure that the new point and two previous points form a good bracket, a cubic polynomial is used, passing through four points, or by fitting a cubic using derivative information. However, for quadratic estimation, we focus on three points.

*   **Simplification using differences (Newton's method connection):** If we have derivative information, we can use Taylor series expansions. For a quadratic approximation near $x_k$, $f(x) \approx f(x_k) + f'(x_k)(x-x_k) + \frac{f''(x_k)}{2}(x-x_k)^2$. The minimum of this approximation is at $x_{k+1} = x_k - \frac{f'(x_k)}{f''(x_k)}$, which is Newton's method. Quadratic estimation without direct derivative calculation uses function values to *infer* derivative information implicitly.

*   **Muller's Method (a specific quadratic interpolation technique):**
    Muller's method uses three points to determine a parabola that passes through them. The next approximation is the vertex of this parabola.
    Let the points be $(x_{i-2}, f_{i-2})$, $(x_{i-1}, f_{i-1})$, $(x_i, f_i)$.
    A common way to represent the quadratic is:
    $p(x) = A + B(x-x_i) + C(x-x_i)(x-x_{i-1})$.
    We set $p(x_i) = f_i$, which implies $A = f_i$.
    Then, $p(x_{i-1}) = f_{i-1} = A + B(x_{i-1}-x_i) \implies B = \frac{f_{i-1}-A}{x_{i-1}-x_i} = \frac{f_{i-1}-f_i}{x_{i-1}-x_i}$.
    Finally, $p(x_{i-2}) = f_{i-2} = A + B(x_{i-2}-x_i) + C(x_{i-2}-x_i)(x_{i-2}-x_{i-1})$.
    $C = \frac{f_{i-2} - A - B(x_{i-2}-x_i)}{(x_{i-2}-x_i)(x_{i-2}-x_{i-1})}$.
    The minimum of $p(x)$ occurs when $p'(x) = B + C(x-x_i) + C(x-x_{i-1}) = 0$.
    $B + C(2x - x_i - x_{i-1}) = 0$
    $2x - x_i - x_{i-1} = -B/C$
    $2x = x_i + x_{i-1} - B/C$
    $x_{i+1} = \frac{x_i + x_{i-1} - B/C}{2}$.

    This method can be sensitive to the choice of initial points and the nature of the function.

**(Reference: Ravindran, Ragsdell, & Reklaitis, 2006 - Chapter 3 discusses interpolation methods including quadratic interpolation and its relation to Newton's method.)**

### 5. Practice Questions and Exercises

**Question 1 (Optimality Criteria):**
Consider the function $f(x) = x^4 - 6x^2 + 8x + 5$.
a) Find the first and second derivatives of $f(x)$.
b) Determine the stationary points by setting $f'(x) = 0$.
c) Use the second derivative test to classify these stationary points as local minima, local maxima, or inflection points.

**Answer 1:**
a)
$f'(x) = 4x^3 - 12x + 8$
$f''(x) = 12x^2 - 12$

b)
Set $f'(x) = 0$:
$4x^3 - 12x + 8 = 0$
Divide by 4: $x^3 - 3x + 2 = 0$
By inspection, $x=1$ is a root: $1^3 - 3(1) + 2 = 1 - 3 + 2 = 0$.
We can factor $(x-1)$ out. Using polynomial division or synthetic division:
$(x^3 - 3x + 2) / (x-1) = x^2 + x - 2$.
So, $(x-1)(x^2 + x - 2) = 0$.
The quadratic factor $x^2 + x - 2$ can be factored as $(x+2)(x-1)$.
Thus, $(x-1)(x-1)(x+2) = 0$, which is $(x-1)^2(x+2) = 0$.
The stationary points are at $x=1$ (a double root) and $x=-2$.

c)
Evaluate $f''(x)$ at the stationary points:
At $x=1$: $f''(1) = 12(1)^2 - 12 = 12 - 12 = 0$.
Since $f''(1) = 0$, the second derivative test is inconclusive. We need to check the third derivative.
$f'''(x) = 24x$.
$f'''(1) = 24(1) = 24 \neq 0$.
Since the first non-zero derivative at $x=1$ is the third derivative (odd order), $x=1$ is an inflection point.

At $x=-2$: $f''(-2) = 12(-2)^2 - 12 = 12(4) - 12 = 48 - 12 = 36$.
Since $f''(-2) = 36 > 0$, $x=-2$ is a **local minimum**.

**Question 2 (Region Elimination - Golden Section Search):**
Find the minimum of $f(x) = x^2 - 5x + 6$ in the interval $[0, 4]$ using Golden Section Search. Perform two iterations. Let $\tau = 0.618$.

**Answer 2:**
Initial interval $[a, b] = [0, 4]$. $L = 4$.
$\tau \approx 0.618$.

**Iteration 1:**
*   $x_1 = b - \tau(b-a) = 4 - 0.618(4) = 4 - 2.472 = 1.528$.
*   $x_2 = a + \tau(b-a) = 0 + 0.618(4) = 0 + 2.472 = 2.472$.
*   $f(x_1) = f(1.528) = (1.528)^2 - 5(1.528) + 6 = 2.334784 - 7.64 + 6 = 0.694784$.
*   $f(x_2) = f(2.472) = (2.472)^2 - 5(2.472) + 6 = 6.110784 - 12.36 + 6 = -0.249216$.
*   Since $f(x_2) < f(x_1)$, the new interval is $[a, x_2] = [0, 2.472]$.
*   The new $b = 2.472$. The previous $x_2$ becomes the new $x_1$: $x_{11} = 1.528$. (Note: I'm using $x_{k, \text{point_index}}$ notation for clarity).
*   The new $x_2$ is calculated: $x_{22} = a + \tau(b-a) = 0 + 0.618(2.472) = 1.528$. (Wait, this seems wrong. The points should be different).
*   Let's re-evaluate point positions after interval reduction.
    *   New interval $[a_2, b_2] = [0, 2.472]$. $L = 2.472$.
    *   The point that was closer to the center is $x_1 = 1.528$. This point is now the *new* $x_2$. So, $x_{22} = 1.528$.
    *   The new $x_1$ is calculated using the new interval: $x_{21} = b_2 - \tau(b_2-a_2) = 2.472 - 0.618(2.472) = 2.472 - 1.528 = 0.944$.

**Iteration 2:**
*   Interval $[a_2, b_2] = [0, 2.472]$. $L = 2.472$.
*   $x_{21} = 0.944$.
*   $x_{22} = 1.528$.
*   $f(x_{21}) = f(0.944) = (0.944)^2 - 5(0.944) + 6 = 0.891136 - 4.72 + 6 = 2.171136$.
*   $f(x_{22}) = f(1.528) = 0.694784$ (from previous iteration).
*   Since $f(x_{22}) < f(x_{21})$, the new interval is $[a_3, b_3] = [x_{21}, b_2] = [0.944, 2.472]$.
*   The new $b = 2.472$. The previous $x_{22}$ becomes the new $x_1$: $x_{31} = 1.528$.
*   The new $x_2$ is calculated: $x_{32} = a_3 + \tau(b_3-a_3) = 0.944 + 0.618(2.472 - 0.944) = 0.944 + 0.618(1.528) = 0.944 + 0.944 = 1.888$.

After two iterations, the interval is $[0.944, 2.472]$. The minimum of $f(x) = x^2 - 5x + 6$ occurs at $x = -(-5)/(2*1) = 2.5$. The search is progressing towards the minimum.

**Question 3 (Quadratic Estimation - Conceptual):**
If you have three points $(x_0, f(x_0))$, $(x_1, f(x_1))$, and $(x_2, f(x_2))$ that lie on a quadratic function $f(x) = ax^2 + bx + c$, and you find the vertex of this quadratic at $x^* = -b/(2a)$. Under what conditions would this $x^*$ be a good approximation of the minimum of the original function $f(x)$?

**Answer 3:**
The vertex $x^*$ of the quadratic passing through three points will be an excellent approximation of the minimum of the original function $f(x)$ if:
1.  **The original function $f(x)$ is itself a quadratic function.** In this case, $x^*$ will be the exact minimum.
2.  **The three points are close to the true minimum and the function is well-behaved (smooth) in that region.** If the function is locally approximated well by a quadratic, the vertex of the interpolating quadratic will be close to the true extremum.
3.  **The curvature of the function ($f''(x)$) is relatively constant in the vicinity of the minimum.** If the second derivative does not change much, a single quadratic can represent the local behavior accurately.
4.  **The points are chosen such that they bracket the minimum and are not collinear.** Collinear points would lead to $a=0$, making the "vertex" undefined or the function linear.

### 6. Important Points to Remember

*   **Optimality Criteria:** First-order ($f'(x^*) = 0$) and second-order ($f''(x^*) > 0$ for minimum) conditions are crucial for identifying potential optima.
*   **Convexity:** A convex function guarantees that a local minimum is also a global minimum.
*   **Region Elimination Methods (Fibonacci, Golden Section):** Effective for unimodal functions, they reduce the search interval systematically by discarding portions that cannot contain the optimum. They require function evaluations only.
*   **Quadratic Estimation:** Approximates the objective function with a quadratic polynomial to estimate the location of the optimum. This forms the basis for more advanced derivative-based methods.
*   **Unimodality:** Many search methods assume the function is unimodal within the search interval. If this assumption is violated, the methods may converge to a local optimum or fail.
*   **Convergence:** Different methods have different convergence rates. Golden Section search and Fibonacci search have linear convergence, while methods that utilize derivative information (like Newton's method, which is related to quadratic estimation) can have quadratic convergence.

### 7. Alignment with Course Outcomes

*   **CO1: To evaluate the optimality criteria and methods for functions with single variable (Knowledge Level: K4)**
    *   This entire module section directly addresses CO1. We've covered optimality conditions (first and second order), properties of functions, and introduced methods (region elimination and quadratic estimation) for single-variable optimization. The examples and explanations allow for evaluation of these concepts.

*   **CO5: To explore search techniques and applications in optimization (Knowledge Level: K3)**
    *   Region elimination methods (Fibonacci, Golden Section search) are explicitly search techniques. Their application in narrowing down the search interval for unimodal functions has been demonstrated.

This set of notes provides a foundational understanding of single-variable optimization, crucial for progressing to multi-variable optimization techniques covered in later modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
