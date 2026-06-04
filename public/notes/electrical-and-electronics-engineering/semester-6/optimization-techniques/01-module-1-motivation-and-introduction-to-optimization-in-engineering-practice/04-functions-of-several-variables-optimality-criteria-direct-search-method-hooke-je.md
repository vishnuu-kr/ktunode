---
title: "Functions of several variables, optimality criteria, Direct search method, Hooke-Jeeves pattern search method, Powell’s method, Gradient search methods - Cauchy’s method, Newton’s method"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 1: Motivation and introduction to optimization in engineering practice"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36691"
status: "completed"
scrapedAt: "2026-05-23T16:30:23.812Z"
---
# OPTIMIZATION TECHNIQUES - Module 1: Motivation and Introduction to Optimization in Engineering Practice

## Topic: Functions of Several Variables, Optimality Criteria, Direct Search Methods, Hooke-Jeeves Pattern Search Method, Powell's Method, Gradient Search Methods - Cauchy's Method, Newton's Method

### Course Outcomes Addressed:
*   **CO2:** To evaluate the optimality criteria and methods for functions with several variables (Knowledge Level: K4)
*   **CO5:** To explore search techniques and applications in optimization (Knowledge Level: K3)

### Learning Outcomes:
This module aims to equip students with the foundational understanding of optimization for functions of several variables, including:
*   Identifying and characterizing optimal solutions for multi-variable functions.
*   Understanding and applying direct search methods for optimization.
*   Exploring the principles behind pattern search techniques like Hooke-Jeeves and Powell's method.
*   Grasping the concepts of gradient search methods, specifically Cauchy's (Steepest Descent) and Newton's methods.

### 1. Functions of Several Variables

Optimization problems in engineering often involve finding the best solution (minimum or maximum) of a function that depends on multiple design variables.

#### 1.1 Definition
A function of several variables, denoted as $f(\mathbf{x})$, where $\mathbf{x} = [x_1, x_2, \ldots, x_n]^T$ is a vector of $n$ independent variables, maps a point in $n$-dimensional space to a scalar value.

**Example:**
Consider the cost of a product as a function of the number of units produced ($x_1$) and the cost of raw materials ($x_2$):
$C(x_1, x_2) = 100x_1 + 5x_2^2 - 0.1x_1x_2 + 20$

#### 1.2 Level Curves/Surfaces
For a function of two variables, $f(x_1, x_2)$, a **level curve** is a curve in the $x_1x_2$-plane where $f(x_1, x_2) = c$ for some constant $c$. For functions of more than two variables, these are called **level surfaces**.

**Importance:** Level curves/surfaces help visualize the behavior of the objective function and are crucial for understanding the direction of steepest descent/ascent.

**Example:**
For $f(x_1, x_2) = x_1^2 + x_2^2$, the level curves are circles centered at the origin.

### 2. Optimality Criteria for Functions of Several Variables

#### 2.1 Local Minimum/Maximum
A point $\mathbf{x}^*$ is a **local minimum** of $f(\mathbf{x})$ if $f(\mathbf{x}^*) \le f(\mathbf{x})$ for all $\mathbf{x}$ in a neighborhood of $\mathbf{x}^*$.
A point $\mathbf{x}^*$ is a **local maximum** of $f(\mathbf{x})$ if $f(\mathbf{x}^*) \ge f(\mathbf{x})$ for all $\mathbf{x}$ in a neighborhood of $\mathbf{x}^*$.

#### 2.2 Global Minimum/Maximum
A point $\mathbf{x}^{**}$ is a **global minimum** of $f(\mathbf{x})$ if $f(\mathbf{x}^{**}) \le f(\mathbf{x})$ for all $\mathbf{x}$ in the domain of $f$.
A point $\mathbf{x}^{**}$ is a **global maximum** of $f(\mathbf{x})$ if $f(\mathbf{x}^{**}) \ge f(\mathbf{x})$ for all $\mathbf{x}$ in the domain of $f$.

#### 2.3 Necessary Conditions for Optimality (First-Order Conditions)
For a differentiable function $f(\mathbf{x})$, a necessary condition for a point $\mathbf{x}^*$ to be a local extremum is that the gradient of $f$ at $\mathbf{x}^*$ must be zero:

$$ \nabla f(\mathbf{x}^*) = \left[ \frac{\partial f}{\partial x_1}(\mathbf{x}^*), \frac{\partial f}{\partial x_2}(\mathbf{x}^*), \ldots, \frac{\partial f}{\partial x_n}(\mathbf{x}^*) \right]^T = \mathbf{0} $$

These points where the gradient is zero are called **critical points** or **stationary points**.

**Important Point:** The gradient $\nabla f(\mathbf{x})$ points in the direction of the steepest ascent of the function at point $\mathbf{x}$. The negative gradient, $-\nabla f(\mathbf{x})$, points in the direction of the steepest descent.

#### 2.4 Sufficient Conditions for Optimality (Second-Order Conditions)
For a twice-differentiable function $f(\mathbf{x})$, consider the Hessian matrix $\mathbf{H}(\mathbf{x})$, which is the matrix of second partial derivatives:

$$ \mathbf{H}(\mathbf{x}) = \begin{bmatrix} \frac{\partial^2 f}{\partial x_1^2} & \frac{\partial^2 f}{\partial x_1 \partial x_2} & \cdots & \frac{\partial^2 f}{\partial x_1 \partial x_n} \\ \frac{\partial^2 f}{\partial x_2 \partial x_1} & \frac{\partial^2 f}{\partial x_2^2} & \cdots & \frac{\partial^2 f}{\partial x_2 \partial x_n} \\ \vdots & \vdots & \ddots & \vdots \\ \frac{\partial^2 f}{\partial x_n \partial x_1} & \frac{\partial^2 f}{\partial x_n \partial x_2} & \cdots & \frac{\partial^2 f}{\partial x_n^2} \end{bmatrix} $$

*   **Local Minimum:** If $\nabla f(\mathbf{x}^*) = \mathbf{0}$ and the Hessian matrix $\mathbf{H}(\mathbf{x}^*)$ is **positive definite** (all eigenvalues are positive), then $\mathbf{x}^*$ is a strict local minimum.
*   **Local Maximum:** If $\nabla f(\mathbf{x}^*) = \mathbf{0}$ and the Hessian matrix $\mathbf{H}(\mathbf{x}^*)$ is **negative definite** (all eigenvalues are negative), then $\mathbf{x}^*$ is a strict local maximum.
*   **Saddle Point:** If $\nabla f(\mathbf{x}^*) = \mathbf{0}$ and the Hessian matrix $\mathbf{H}(\mathbf{x}^*)$ is **indefinite** (has both positive and negative eigenvalues), then $\mathbf{x}^*$ is a saddle point.

**(Refer to: Ravindran, Ragsdell, Reklaitis - Chapter 2: Fundamentals of Optimization)**

### 3. Direct Search Methods

Direct search methods are a class of optimization algorithms that do not require the calculation of derivatives of the objective function. They work by evaluating the function at various points in the search space and iteratively moving towards the optimum.

**Advantages:**
*   Do not require derivative information, making them suitable for functions that are non-differentiable, noisy, or where derivatives are difficult/impossible to compute.
*   Relatively simple to implement.

**Disadvantages:**
*   Can be slow to converge, especially for high-dimensional problems or functions with complex geometries.
*   May not be able to identify the exact location of the optimum.

### 3.1 Hooke-Jeeves Pattern Search Method

This method is an iterative procedure that alternates between two phases:
1.  **Exploratory Move:** A series of moves along each coordinate direction (or a set of directions) to find a better point.
2.  **Pattern Move:** A move along a "pattern direction" which is based on the improvement achieved during the exploratory moves.

#### 3.1.1 Algorithm Steps:
1.  **Initialization:**
    *   Choose an initial point $\mathbf{x}_0$.
    *   Choose initial step sizes $\Delta_i$ for each variable $x_i$.
    *   Choose a termination criterion (e.g., tolerance on step size or function value change).

2.  **Exploratory Move:**
    *   Start at the current base point $\mathbf{b}$.
    *   For each variable $x_i$ (from $i=1$ to $n$):
        *   Try increasing $x_i$ by $\Delta_i$ and evaluate $f(\mathbf{x})$. If $f(\mathbf{x})$ improves, keep the change.
        *   If not, try decreasing $x_i$ by $\Delta_i$ and evaluate $f(\mathbf{x})$. If $f(\mathbf{x})$ improves, keep the change.
        *   If neither increase nor decrease improves the function, keep the original value of $x_i$.
    *   Let the point after all exploratory moves be $\mathbf{x}_{new}$.

3.  **Pattern Move:**
    *   If $\mathbf{x}_{new}$ is better than the current base point $\mathbf{b}$ (i.e., $f(\mathbf{x}_{new}) < f(\mathbf{b})$ for minimization):
        *   The pattern direction is $\mathbf{p} = \mathbf{x}_{new} - \mathbf{b}$.
        *   Update the base point: $\mathbf{b} = \mathbf{x}_{new}$.
        *   Perform a line search along the pattern direction: $\mathbf{x}_{new} = \mathbf{b} + \alpha \mathbf{p}$, where $\alpha > 0$ is chosen to minimize $f(\mathbf{x}_{new})$.
        *   If the line search yields an improvement ($f(\mathbf{x}_{new}) < f(\mathbf{b})$), then update $\mathbf{b} = \mathbf{x}_{new}$.
    *   If $\mathbf{x}_{new}$ is not better than $\mathbf{b}$, the pattern move is not performed. The new base point is $\mathbf{b} = \mathbf{x}_{new}$ (even if no improvement was found in the exploratory move).

4.  **Step Size Reduction:**
    *   If no improvement was achieved in the exploratory and pattern moves in an iteration, reduce all step sizes $\Delta_i$ (e.g., by a factor of 2).

5.  **Termination:**
    *   Check if the termination criterion is met (e.g., if all $\Delta_i$ are smaller than a predefined tolerance). If yes, stop. Otherwise, go to step 2.

**Example:** (Illustrative, detailed execution requires step-by-step calculation)
Minimize $f(x_1, x_2) = (x_1 - 2)^2 + (x_2 - 3)^2$.
Initial point $\mathbf{x}_0 = [0, 0]^T$, $\Delta = [1, 1]^T$.

*   **Iteration 1 (Exploratory):**
    *   Start at $\mathbf{b}=[0,0]$. $f(0,0)=13$.
    *   Explore $x_1$: Try $x_1=1$, $f(1,0)=10$ (improvement). New point $[1,0]$. Try $x_1=2$, $f(2,0)=9$ (improvement). New point $[2,0]$. Try $x_1=3$, $f(3,0)=10$ (no improvement). Current tentative point $[2,0]$.
    *   Explore $x_2$: Start from $[2,0]$. Try $x_2=1$, $f(2,1)=4$ (improvement). New point $[2,1]$. Try $x_2=2$, $f(2,2)=1$ (improvement). New point $[2,2]$. Try $x_2=3$, $f(2,3)=0$ (improvement). New point $[2,3]$. Try $x_2=4$, $f(2,4)=1$ (no improvement). Final point after exploratory moves $\mathbf{x}_{new}=[2,3]$.

*   **Iteration 1 (Pattern Move):**
    *   $f(\mathbf{x}_{new}) = f(2,3) = 0$. This is better than $f(\mathbf{b})=f(0,0)=13$.
    *   Pattern direction $\mathbf{p} = [2,3] - [0,0] = [2,3]$.
    *   New base point $\mathbf{b} = [2,3]$.
    *   Line search along $\mathbf{b} + \alpha \mathbf{p} = [2,3] + \alpha[2,3] = [2+2\alpha, 3+3\alpha]$.
    *   $g(\alpha) = f(2+2\alpha, 3+3\alpha) = ((2+2\alpha)-2)^2 + ((3+3\alpha)-3)^2 = (2\alpha)^2 + (3\alpha)^2 = 4\alpha^2 + 9\alpha^2 = 13\alpha^2$.
    *   To minimize $g(\alpha)$, we set $g'(\alpha) = 26\alpha = 0$, which gives $\alpha=0$. This means the best move along the pattern direction is to stay at $[2,3]$.
    *   So, $\mathbf{b}$ remains $[2,3]$.

*   **Iteration 1 (Step Size Reduction):**
    *   Since improvement was found, step sizes are not reduced.

*   **Iteration 2 (Exploratory):**
    *   Start at $\mathbf{b}=[2,3]$. $f(2,3)=0$.
    *   Explore $x_1$: Try $x_1=2+1=3$, $f(3,3)=1$. No improvement. Try $x_1=2-1=1$, $f(1,3)=1$. No improvement. Current tentative point $[2,3]$.
    *   Explore $x_2$: Start from $[2,3]$. Try $x_2=3+1=4$, $f(2,4)=1$. No improvement. Try $x_2=3-1=2$, $f(2,2)=1$. No improvement. Final point $\mathbf{x}_{new}=[2,3]$.

*   **Iteration 2 (Pattern Move):**
    *   $f(\mathbf{x}_{new}) = f(2,3) = 0$. Not better than $f(\mathbf{b})=0$. No pattern move.
    *   New base point $\mathbf{b} = [2,3]$.

*   **Iteration 2 (Step Size Reduction):**
    *   No improvement was achieved in exploratory and pattern moves. Reduce step sizes: $\Delta = [0.5, 0.5]^T$.

*   **Termination:** If tolerance is 0.1, continue. Otherwise, stop. The current point $[2,3]$ is indeed the global minimum.

**(Refer to: Ravindran, Ragsdell, Reklaitis - Chapter 5: Direct Search Methods)**

### 3.2 Powell's Method

Powell's method is another derivative-free method that is more efficient than basic pattern search for quadratic functions. It is based on the idea of finding a sequence of conjugate directions, which for quadratic functions leads to convergence in a finite number of steps.

#### 3.2.1 Algorithm Steps:
1.  **Initialization:**
    *   Choose an initial point $\mathbf{x}_0$.
    *   Choose an initial set of $n$ linearly independent search directions $\mathbf{d}_1, \mathbf{d}_2, \ldots, \mathbf{d}_n$ (e.g., standard basis vectors).
    *   Choose a termination criterion.

2.  **Iterative Optimization:**
    *   Set the starting point for the current iteration $\mathbf{x}_{start} = \mathbf{x}_k$.
    *   For $i = 1, 2, \ldots, n$:
        *   Perform a one-dimensional search to find $\alpha_i^*$ that minimizes $f(\mathbf{x}_k + \alpha \mathbf{d}_i)$ in the direction $\mathbf{d}_i$.
        *   Update the point: $\mathbf{x}_k = \mathbf{x}_k + \alpha_i^* \mathbf{d}_i$.
        *   Store the $i$-th direction as $\mathbf{d}_i$.

3.  **Generate New Directions:**
    *   If the termination criterion is not met:
        *   Identify the direction $\mathbf{d}_m$ that resulted in the smallest improvement (or largest decrease) during the one-dimensional searches in step 2. (This is a common heuristic; other strategies exist).
        *   Replace the direction $\mathbf{d}_m$ with a new pattern direction $\mathbf{p} = \mathbf{x}_k - \mathbf{x}_{start}$ (the difference between the final point and the starting point of the iteration).
        *   The set of directions becomes $\{\mathbf{d}_1, \ldots, \mathbf{d}_{m-1}, \mathbf{p}, \mathbf{d}_{m+1}, \ldots, \mathbf{d}_n\}$.
        *   Shift the directions: $\mathbf{d}_1 \leftarrow \mathbf{d}_2, \ldots, \mathbf{d}_{n-1} \leftarrow \mathbf{d}_n, \mathbf{d}_n \leftarrow \mathbf{p}$.
        *   Update $\mathbf{x}_{start}$ to the current $\mathbf{x}_k$ for the next iteration.
        *   Go to step 2.

4.  **Termination:**
    *   Check the termination criterion (e.g., if the change in function value between iterations is small, or if the step sizes become negligible).

**Key Idea:** By replacing the "worst" direction with the pattern direction, Powell's method generates a set of directions that become increasingly aligned with the principal axes of the objective function's contours (especially for quadratic functions).

**Example:** (Conceptual illustration)
Minimize $f(x_1, x_2) = (x_1 - 2)^2 + (x_2 - 3)^2$.
Initial point $\mathbf{x}_0 = [0, 0]^T$. Initial directions $\mathbf{d}_1 = [1, 0]^T$, $\mathbf{d}_2 = [0, 1]^T$.

*   **Iteration 1:**
    *   Minimize $f(0 + \alpha[1,0], 0) = f(\alpha, 0) = (\alpha-2)^2 + (0-3)^2 = (\alpha-2)^2 + 9$. Minimum at $\alpha=2$. $\mathbf{x}_1 = [0,0] + 2[1,0] = [2,0]$.
    *   Minimize $f(2, 0 + \alpha[0,1]) = f(2, \alpha) = (2-2)^2 + (\alpha-3)^2 = (\alpha-3)^2$. Minimum at $\alpha=3$. $\mathbf{x}_2 = [2,0] + 3[0,1] = [2,3]$.
    *   The directions were $\mathbf{d}_1, \mathbf{d}_2$. The improvements were from $f(0,0)=13$ to $f(2,0)=9$ and then to $f(2,3)=0$.
    *   Pattern direction $\mathbf{p} = \mathbf{x}_2 - \mathbf{x}_0 = [2,3] - [0,0] = [2,3]$.
    *   Suppose $\mathbf{d}_1$ was the direction with the smallest improvement (in this case, both were improvements). Let's say we replace $\mathbf{d}_2$. New directions: $\mathbf{d}_1 = [1,0]$, $\mathbf{d}_2 = \mathbf{p} = [2,3]$. Shift: $\mathbf{d}_1 \leftarrow \mathbf{d}_2$, $\mathbf{d}_2 \leftarrow \mathbf{p}$ which doesn't make sense. The correct shift is: the sequence of directions used was $\mathbf{d}_1, \mathbf{d}_2$. The pattern direction is $\mathbf{p} = \mathbf{x}_{final} - \mathbf{x}_{initial}$. We replace the first direction in the sequence that yielded the least improvement with $\mathbf{p}$.
    *   The improved directions are usually generated by: $\mathbf{d}_1, \mathbf{d}_2, \ldots, \mathbf{d}_n$. Perform line searches. The new set of directions becomes $\mathbf{d}_2, \ldots, \mathbf{d}_n, \mathbf{p}$, where $\mathbf{p}$ is the vector connecting the initial point of the iteration to the final point.

*   **Corrected Powell's Direction Generation:**
    1.  Start with $\mathbf{x}_0$ and linearly independent directions $\mathbf{u}_1, \ldots, \mathbf{u}_n$.
    2.  For $i = 1, \ldots, n$, find $\alpha_i$ to minimize $f(\mathbf{x}_{i-1} + \alpha \mathbf{u}_i)$, and set $\mathbf{x}_i = \mathbf{x}_{i-1} + \alpha_i \mathbf{u}_i$.
    3.  Form the new set of directions: $\mathbf{v}_1 = \mathbf{x}_1 - \mathbf{x}_0$, $\mathbf{v}_2 = \mathbf{x}_2 - \mathbf{x}_1, \ldots, \mathbf{v}_n = \mathbf{x}_n - \mathbf{x}_{n-1}$. These are the directions of achieved improvement.
    4.  Create a new basis of search directions by applying Gram-Schmidt orthogonalization to $\{\mathbf{v}_1, \ldots, \mathbf{v}_n\}$, or more commonly, by creating a new set of directions: $\mathbf{u}_1 \leftarrow \mathbf{u}_2, \ldots, \mathbf{u}_{n-1} \leftarrow \mathbf{u}_n, \mathbf{u}_n \leftarrow \mathbf{v}_1$ (this last part can be modified based on which $\mathbf{v}_i$ provided the least improvement). A common variant is to replace the direction corresponding to the smallest improvement in the previous cycle with the new pattern direction $\mathbf{x}_n - \mathbf{x}_0$.

Let's use the standard formulation:
1.  Initialize $\mathbf{x}_0$, directions $\mathbf{d}_1, \dots, \mathbf{d}_n$.
2.  For $i=1$ to $n$: find $\alpha_i^*$ that minimizes $f(\mathbf{x}_{current} + \alpha \mathbf{d}_i)$. Update $\mathbf{x}_{current} = \mathbf{x}_{current} + \alpha_i^* \mathbf{d}_i$. Set $\mathbf{d}_{i+1}$ (or a placeholder for it) to this result.
3.  The new set of directions for the next iteration is $\{\mathbf{d}_2, \mathbf{d}_3, \dots, \mathbf{d}_n, \mathbf{p}\}$, where $\mathbf{p} = \mathbf{x}_{final} - \mathbf{x}_{initial}$.

*   **Iteration 1 (Revised):**
    *   $\mathbf{x}_0 = [0,0]$. $\mathbf{d}_1 = [1,0], \mathbf{d}_2 = [0,1]$.
    *   Line search along $\mathbf{d}_1$: $\alpha_1^* = 2$. $\mathbf{x}_1 = [0,0] + 2[1,0] = [2,0]$.
    *   Line search along $\mathbf{d}_2$: $\alpha_2^* = 3$. $\mathbf{x}_2 = [2,0] + 3[0,1] = [2,3]$.
    *   New pattern direction $\mathbf{p} = \mathbf{x}_2 - \mathbf{x}_0 = [2,3]$.
    *   New directions for next iteration: $\{\mathbf{d}_2, \mathbf{p}\} = \{[0,1], [2,3]\}$.

*   **Iteration 2:**
    *   $\mathbf{x}_0' = [2,3]$. $\mathbf{d}_1' = [0,1], \mathbf{d}_2' = [2,3]$.
    *   Line search along $\mathbf{d}_1'$: Minimize $f(2, 3+\alpha) = (2-2)^2 + (3+\alpha-3)^2 = \alpha^2$. Minimum at $\alpha=0$. $\mathbf{x}_1' = [2,3] + 0[0,1] = [2,3]$.
    *   Line search along $\mathbf{d}_2'$: Minimize $f(2+2\alpha, 3+3\alpha) = ((2+2\alpha)-2)^2 + ((3+3\alpha)-3)^2 = (2\alpha)^2 + (3\alpha)^2 = 13\alpha^2$. Minimum at $\alpha=0$. $\mathbf{x}_2' = [2,3] + 0[2,3] = [2,3]$.
    *   New pattern direction $\mathbf{p}' = \mathbf{x}_2' - \mathbf{x}_0' = [2,3] - [2,3] = [0,0]$.
    *   New directions: $\{\mathbf{d}_1', \mathbf{p}'\} = \{[0,1], [0,0]\}$, which is problematic as directions must be linearly independent.

The convergence proof and specific direction update rules can be more complex. A key aspect is maintaining linearly independent directions. A common variant for direction updates: if direction $\mathbf{d}_i$ led to the smallest improvement, replace it with the pattern vector $\mathbf{p}$.

**(Refer to: Ravindran, Ragsdell, Reklaitis - Chapter 5: Direct Search Methods)**

### 4. Gradient Search Methods

Gradient-based methods utilize the gradient of the objective function to determine the direction of search. They are generally more efficient than direct search methods for smooth functions.

#### 4.1 Cauchy's Method (Steepest Descent)

This is the simplest gradient-based method. It iteratively moves in the direction opposite to the gradient, which is the direction of the steepest decrease of the function.

#### 4.1.1 Algorithm Steps:
1.  **Initialization:**
    *   Choose an initial point $\mathbf{x}_0$.
    *   Choose a termination criterion (e.g., tolerance for gradient magnitude or change in function value).

2.  **Calculate Gradient:**
    *   Compute the gradient of the objective function at the current point $\mathbf{x}_k$: $\nabla f(\mathbf{x}_k)$.

3.  **Check Termination:**
    *   If $\|\nabla f(\mathbf{x}_k)\| < \epsilon$ (where $\epsilon$ is a small tolerance), stop. The current point $\mathbf{x}_k$ is considered an approximate minimum.

4.  **Determine Search Direction:**
    *   The search direction $\mathbf{s}_k$ is the negative gradient: $\mathbf{s}_k = -\nabla f(\mathbf{x}_k)$.

5.  **Line Search:**
    *   Perform a one-dimensional search to find the step size $\alpha_k^* > 0$ that minimizes $f(\mathbf{x}_k + \alpha \mathbf{s}_k)$ for $\alpha \ge 0$. This function is often called the "line search subproblem."

6.  **Update Point:**
    *   Update the current point: $\mathbf{x}_{k+1} = \mathbf{x}_k + \alpha_k^* \mathbf{s}_k$.

7.  **Repeat:**
    *   Increment $k$ and go to step 2.

**Important Point:** The line search in step 5 is crucial. If $\alpha_k^*$ is not chosen optimally, the convergence can be slow. Common line search techniques include exact line search (if analytically possible) or inexact line search (e.g., using Armijo or Wolfe conditions).

**Example:**
Minimize $f(x_1, x_2) = (x_1 - 2)^2 + (x_2 - 3)^2$.
$\nabla f(\mathbf{x}) = [2(x_1-2), 2(x_2-3)]^T$.

*   **Iteration 1:**
    *   Let $\mathbf{x}_0 = [0,0]^T$.
    *   $\nabla f(\mathbf{x}_0) = [2(0-2), 2(0-3)]^T = [-4, -6]^T$.
    *   $\|\nabla f(\mathbf{x}_0)\| = \sqrt{(-4)^2 + (-6)^2} = \sqrt{16+36} = \sqrt{52} > \epsilon$.
    *   Search direction $\mathbf{s}_0 = -[-4, -6]^T = [4, 6]^T$.
    *   Line search: Minimize $g(\alpha) = f(\mathbf{x}_0 + \alpha \mathbf{s}_0) = f(0 + 4\alpha, 0 + 6\alpha) = f(4\alpha, 6\alpha)$.
    *   $g(\alpha) = (4\alpha - 2)^2 + (6\alpha - 3)^2 = (16\alpha^2 - 16\alpha + 4) + (36\alpha^2 - 36\alpha + 9)$
    *   $g(\alpha) = 52\alpha^2 - 52\alpha + 13$.
    *   To find $\alpha_0^*$, set $g'(\alpha) = 104\alpha - 52 = 0 \implies \alpha_0^* = 52/104 = 0.5$.
    *   Update: $\mathbf{x}_1 = \mathbf{x}_0 + \alpha_0^* \mathbf{s}_0 = [0,0]^T + 0.5[4, 6]^T = [2, 3]^T$.

*   **Iteration 2:**
    *   $\mathbf{x}_1 = [2, 3]^T$.
    *   $\nabla f(\mathbf{x}_1) = [2(2-2), 2(3-3)]^T = [0, 0]^T$.
    *   $\|\nabla f(\mathbf{x}_1)\| = 0 < \epsilon$. Stop.

The method converged in one iteration because the function is quadratic and the steepest descent method is guaranteed to converge in one step for quadratic functions with an exact line search.

**(Refer to: Ravindran, Ragsdell, Reklaitis - Chapter 4: Gradient Methods)**

#### 4.2 Newton's Method

Newton's method uses both the gradient and the Hessian matrix to approximate the objective function with a quadratic model and finds the minimum of this quadratic model. It generally converges much faster than the steepest descent method, especially near the optimum.

#### 4.2.1 Algorithm Steps:
1.  **Initialization:**
    *   Choose an initial point $\mathbf{x}_0$.
    *   Choose a termination criterion (e.g., tolerance for gradient magnitude).

2.  **Calculate Gradient and Hessian:**
    *   Compute the gradient $\nabla f(\mathbf{x}_k)$ and the Hessian matrix $\mathbf{H}(\mathbf{x}_k)$ at the current point $\mathbf{x}_k$.

3.  **Check Termination:**
    *   If $\|\nabla f(\mathbf{x}_k)\| < \epsilon$, stop.

4.  **Calculate Search Direction:**
    *   Solve the system of linear equations for the step $\Delta \mathbf{x}_k$:
        $$ \mathbf{H}(\mathbf{x}_k) \Delta \mathbf{x}_k = -\nabla f(\mathbf{x}_k) $$
    *   The search direction is $\mathbf{s}_k = \Delta \mathbf{x}_k$. This direction points to the minimum of the local quadratic approximation of $f$ around $\mathbf{x}_k$.

5.  **Update Point:**
    *   Update the current point: $\mathbf{x}_{k+1} = \mathbf{x}_k + \mathbf{s}_k$.
    *   **Note:** Unlike steepest descent, Newton's method usually takes a full step ($\alpha_k^* = 1$) determined by the quadratic model. However, to ensure convergence for non-quadratic functions or poor initial guesses, a line search might be incorporated, making it a "modified Newton's method" or "Quasi-Newton" approach if the Hessian is approximated.

6.  **Repeat:**
    *   Increment $k$ and go to step 2.

**Advantages:**
*   Quadratic convergence near the optimum (if the Hessian is positive definite).

**Disadvantages:**
*   Requires computing and inverting the Hessian matrix, which can be computationally expensive and numerically unstable if the Hessian is singular or ill-conditioned.
*   Does not guarantee descent for all points (i.e., $f(\mathbf{x}_{k+1}) < f(\mathbf{x}_k)$ is not always true if the Hessian is not positive definite).
*   Does not naturally handle constraints.

**Example:**
Minimize $f(x_1, x_2) = (x_1 - 2)^2 + (x_2 - 3)^2$.
$\nabla f(\mathbf{x}) = [2(x_1-2), 2(x_2-3)]^T$.
$\mathbf{H}(\mathbf{x}) = \begin{bmatrix} \frac{\partial^2 f}{\partial x_1^2} & \frac{\partial^2 f}{\partial x_1 \partial x_2} \\ \frac{\partial^2 f}{\partial x_2 \partial x_1} & \frac{\partial^2 f}{\partial x_2^2} \end{bmatrix} = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$.

*   **Iteration 1:**
    *   Let $\mathbf{x}_0 = [0,0]^T$.
    *   $\nabla f(\mathbf{x}_0) = [-4, -6]^T$.
    *   $\mathbf{H}(\mathbf{x}_0) = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$.
    *   Solve $\begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix} \begin{bmatrix} \Delta x_1 \\ \Delta x_2 \end{bmatrix} = - \begin{bmatrix} -4 \\ -6 \end{bmatrix} = \begin{bmatrix} 4 \\ 6 \end{bmatrix}$.
    *   $2 \Delta x_1 = 4 \implies \Delta x_1 = 2$.
    *   $2 \Delta x_2 = 6 \implies \Delta x_2 = 3$.
    *   Search direction $\mathbf{s}_0 = [2, 3]^T$.
    *   Update: $\mathbf{x}_1 = \mathbf{x}_0 + \mathbf{s}_0 = [0,0]^T + [2, 3]^T = [2, 3]^T$.

*   **Iteration 2:**
    *   $\mathbf{x}_1 = [2, 3]^T$.
    *   $\nabla f(\mathbf{x}_1) = [2(2-2), 2(3-3)]^T = [0, 0]^T$.
    *   $\|\nabla f(\mathbf{x}_1)\| = 0 < \epsilon$. Stop.

Again, for this quadratic function, Newton's method converges in one iteration.

**(Refer to: Ravindran, Ragsdell, Reklaitis - Chapter 4: Gradient Methods)**

### Summary of Methods Covered in Module 1:

| Method Name            | Type of Method     | Derivative Required? | Convergence Characteristics                                            | Key Idea                                                                    |
| :--------------------- | :----------------- | :------------------- | :------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| Hooke-Jeeves Pattern Search | Direct Search      | No                   | Can be slow, sensitive to step size and initial point.             | Exploratory moves along axes and pattern moves along improved direction.    |
| Powell's Method        | Direct Search      | No                   | More efficient than basic pattern search, especially for quadratics. | Generates a sequence of conjugate directions.                               |
| Cauchy's Method (Steepest Descent) | Gradient Search    | Yes (Gradient)       | Linear convergence, can be slow in narrow valleys.                 | Moves in the direction of the negative gradient (steepest descent).       |
| Newton's Method        | Gradient Search    | Yes (Gradient & Hessian) | Quadratic convergence near optimum, faster than steepest descent.    | Minimizes a local quadratic approximation of the objective function.        |

### Practice Questions

1.  **Multiple Choice:** For a function $f(x_1, x_2)$, the gradient $\nabla f(\mathbf{x})$ at a point $\mathbf{x}$ indicates:
    a) The direction of steepest descent.
    b) The direction of maximum value.
    c) The direction of no change.
    d) The direction of steepest ascent.

2.  **Concept Check:** What is the main advantage of direct search methods over gradient-based methods?

3.  **Problem Solving (Cauchy's Method):**
    Minimize $f(x_1, x_2) = x_1^2 + 2x_2^2$ starting from $\mathbf{x}_0 = [1, 1]^T$. Perform one iteration of Cauchy's method with an exact line search.
    *   Calculate $\nabla f(\mathbf{x}_0)$.
    *   Determine the search direction $\mathbf{s}_0$.
    *   Find the optimal step size $\alpha_0^*$ by minimizing $f(\mathbf{x}_0 + \alpha \mathbf{s}_0)$.
    *   Calculate the next point $\mathbf{x}_1$.

4.  **Problem Solving (Newton's Method):**
    Minimize $f(x_1, x_2) = x_1^2 + 2x_2^2$ starting from $\mathbf{x}_0 = [1, 1]^T$. Perform one iteration of Newton's method.
    *   Calculate $\nabla f(\mathbf{x}_0)$.
    *   Calculate the Hessian matrix $\mathbf{H}(\mathbf{x}_0)$.
    *   Determine the search direction $\mathbf{s}_0$ by solving $\mathbf{H}(\mathbf{x}_0) \mathbf{s}_0 = -\nabla f(\mathbf{x}_0)$.
    *   Calculate the next point $\mathbf{x}_1$.

### Answers to Practice Questions

1.  **Answer:** d) The direction of steepest ascent.

2.  **Answer:** The main advantage of direct search methods is that they do not require derivative information of the objective function. This makes them suitable for optimization problems where the objective function is non-differentiable, has discontinuities, is noisy, or its derivatives are analytically difficult to compute.

3.  **Cauchy's Method Solution:**
    *   $f(x_1, x_2) = x_1^2 + 2x_2^2$.
    *   $\nabla f(\mathbf{x}) = [2x_1, 4x_2]^T$.
    *   $\mathbf{x}_0 = [1, 1]^T$.
    *   $\nabla f(\mathbf{x}_0) = [2(1), 4(1)]^T = [2, 4]^T$.
    *   Search direction $\mathbf{s}_0 = -\nabla f(\mathbf{x}_0) = [-2, -4]^T$.
    *   Line search: Minimize $g(\alpha) = f(\mathbf{x}_0 + \alpha \mathbf{s}_0) = f(1 - 2\alpha, 1 - 4\alpha)$.
    *   $g(\alpha) = (1 - 2\alpha)^2 + 2(1 - 4\alpha)^2$
    *   $g(\alpha) = (1 - 4\alpha + 4\alpha^2) + 2(1 - 8\alpha + 16\alpha^2)$
    *   $g(\alpha) = 1 - 4\alpha + 4\alpha^2 + 2 - 16\alpha + 32\alpha^2$
    *   $g(\alpha) = 36\alpha^2 - 20\alpha + 3$.
    *   To find $\alpha_0^*$, set $g'(\alpha) = 72\alpha - 20 = 0 \implies \alpha_0^* = 20/72 = 5/18$.
    *   Next point $\mathbf{x}_1 = \mathbf{x}_0 + \alpha_0^* \mathbf{s}_0 = [1, 1]^T + (5/18)[-2, -4]^T$
    *   $\mathbf{x}_1 = [1 - 10/18, 1 - 20/18]^T = [1 - 5/9, 1 - 10/9]^T = [4/9, -1/9]^T$.

4.  **Newton's Method Solution:**
    *   $f(x_1, x_2) = x_1^2 + 2x_2^2$.
    *   $\nabla f(\mathbf{x}) = [2x_1, 4x_2]^T$.
    *   $\mathbf{H}(\mathbf{x}) = \begin{bmatrix} 2 & 0 \\ 0 & 4 \end{bmatrix}$.
    *   $\mathbf{x}_0 = [1, 1]^T$.
    *   $\nabla f(\mathbf{x}_0) = [2, 4]^T$.
    *   $\mathbf{H}(\mathbf{x}_0) = \begin{bmatrix} 2 & 0 \\ 0 & 4 \end{bmatrix}$.
    *   Solve $\begin{bmatrix} 2 & 0 \\ 0 & 4 \end{bmatrix} \begin{bmatrix} \Delta x_1 \\ \Delta x_2 \end{bmatrix} = - \begin{bmatrix} 2 \\ 4 \end{bmatrix} = \begin{bmatrix} -2 \\ -4 \end{bmatrix}$.
    *   $2 \Delta x_1 = -2 \implies \Delta x_1 = -1$.
    *   $4 \Delta x_2 = -4 \implies \Delta x_2 = -1$.
    *   Search direction $\mathbf{s}_0 = [-1, -1]^T$.
    *   Next point $\mathbf{x}_1 = \mathbf{x}_0 + \mathbf{s}_0 = [1, 1]^T + [-1, -1]^T = [0, 0]^T$.

### Important Points to Remember

*   **Gradient:** The gradient $\nabla f(\mathbf{x})$ is a vector of first partial derivatives and points in the direction of the steepest ascent.
*   **Hessian:** The Hessian matrix $\mathbf{H}(\mathbf{x})$ contains second partial derivatives and is used to determine the curvature of the function. Its definiteness indicates local minima, maxima, or saddle points.
*   **Direct Search vs. Gradient Methods:** Direct search methods are useful when derivatives are unavailable. Gradient methods are generally faster for smooth functions but require derivative computations.
*   **Line Search:** For both steepest descent and Newton's method (when modified), the accuracy of the line search significantly impacts convergence speed.
*   **Convergence:** Newton's method typically exhibits quadratic convergence near an optimum, while steepest descent shows linear convergence. Direct search methods can have more complex convergence behavior.
*   **Engineering Practice:** In practice, optimization problems often involve constraints, noisy data, and non-smooth functions, which require more advanced techniques beyond those introduced in this module.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
