---
title: "Multi-variable methods- Hook-Jeeves pattern search method"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 3: Single variable optimization methods"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044641d4"
status: "completed"
scrapedAt: "2026-05-20T18:16:01.635Z"
---
# OPTIMIZATION TECHNIQUES - Module 3: Single Variable Optimization Methods

## Topic: Multi-variable Methods - Hook-Jeeves Pattern Search Method

**Course Outcomes Addressed:**
*   **CO3:** Find solutions for Nonlinear unconstrained optimization problems (Knowledge Level: K3)
*   **CO4:** Apply modern methods of optimization for solving optimization problems (Knowledge Level: K3)

**Learning Outcomes:**
Upon completion of this topic, you will be able to:
*   Understand the fundamental principles of the Hook-Jeeves pattern search method.
*   Apply the Hook-Jeeves method to solve unconstrained multivariable optimization problems.
*   Differentiate the Hook-Jeeves method from other direct search methods.
*   Analyze the convergence properties and limitations of the Hook-Jeeves method.

---

### 1. Introduction to Multivariable Optimization

Multivariable optimization deals with finding the optimal values (minimum or maximum) of a function that depends on multiple independent variables. For unconstrained optimization, the goal is to find the point $\mathbf{x}^* = [x_1^*, x_2^*, \dots, x_n^*]$ that minimizes or maximizes the objective function $f(\mathbf{x})$, where $\mathbf{x}$ is a vector of $n$ variables.

**Key Concepts:**
*   **Objective Function:** The function $f(\mathbf{x})$ to be minimized or maximized.
*   **Decision Variables:** The independent variables $\mathbf{x} = [x_1, x_2, \dots, x_n]$ that we can control.
*   **Unconstrained Optimization:** Optimization problems where there are no restrictions on the values of the decision variables.
*   **Local Optimum:** A point where the function value is better than at nearby points.
*   **Global Optimum:** A point where the function value is better than at all other points in the domain.

**Reference:**
*   **S.S. Rao, "Engineering Optimization: Theory and Practice"** extensively covers the introduction to multivariable optimization problems and their formulation. Chapter 2, "Optimization Problems," provides a solid foundation.

---

### 2. Direct Search Methods

Direct search methods are a class of nonlinear programming techniques that do not require the calculation of gradients (derivatives) of the objective function. They are useful when the objective function is non-differentiable, discontinuous, or when its derivatives are difficult or expensive to compute. The Hook-Jeeves pattern search method is a prominent example of a direct search method.

**Key Concepts:**
*   **Gradient-Free:** These methods do not use gradient information.
*   **Iterative:** They start with an initial guess and iteratively move towards the optimum.
*   **Pattern Movement:** They exploit the information from previous searches to suggest the direction of the next search.

**Reference:**
*   **Kalynamoy Deb, "Optimization for Engineering Design - Algorithms and Examples"** discusses direct search methods in Chapter 5, "Direct Search Methods," providing a good overview and context for Hook-Jeeves.

---

### 3. Hook-Jeeves Pattern Search Method

The Hook-Jeeves pattern search method is an **improving search method** that combines two types of moves:
1.  **Exploratory Move:** To find a better point in the vicinity of the current point.
2.  **Pattern Move:** To accelerate convergence by moving in a direction determined by previous successful exploratory moves.

This method is often referred to as the **Pattern Search Method** or **Hooke-Jeeves Algorithm**.

**Core Idea:**
The method searches for the minimum by performing a series of **exploratory moves** around a starting point. If a better point is found, it makes a **pattern move** in the direction of this improvement. The process is repeated until no further improvement can be made.

#### 3.1. Algorithm Steps

Let $f(\mathbf{x})$ be the objective function to be minimized, and $\mathbf{x}_0$ be the initial starting point. Let $\Delta_0$ be the initial step size and $\alpha$ be the reduction factor for the step size.

**Initialization:**
1.  Start with an initial guess $\mathbf{x}_{k}^{(0)}$ (e.g., $\mathbf{x}_0$).
2.  Choose an initial step size $\Delta_0 > 0$.
3.  Choose a step size reduction factor $\alpha$, where $0 < \alpha < 1$ (e.g., $\alpha = 0.5$).
4.  Define a termination criterion (e.g., when $\Delta$ becomes very small or a maximum number of iterations is reached).
5.  Initialize iteration counter, $k = 0$.

**Main Loop:**

**Step 1: Exploratory Move**
*   Begin at the current base point $\mathbf{x}_{k}$.
*   Initialize a temporary point $\mathbf{x}_{k+1} = \mathbf{x}_{k}$.
*   For each variable $x_i$ (from $i=1$ to $n$):
    *   Perform a one-dimensional search along the positive direction of $x_i$ with step size $\Delta_k$. If $f(\mathbf{x}_{k+1} + \Delta_k \mathbf{e}_i) < f(\mathbf{x}_{k+1})$, update $\mathbf{x}_{k+1} = \mathbf{x}_{k+1} + \Delta_k \mathbf{e}_i$.
    *   Perform a one-dimensional search along the negative direction of $x_i$ with step size $\Delta_k$. If $f(\mathbf{x}_{k+1} - \Delta_k \mathbf{e}_i) < f(\mathbf{x}_{k+1})$, update $\mathbf{x}_{k+1} = \mathbf{x}_{k+1} - \Delta_k \mathbf{e}_i$.
    *   Here, $\mathbf{e}_i$ is a unit vector in the direction of the $i$-th variable.

**Step 2: Check for Improvement**
*   If the exploratory move resulted in an improvement (i.e., $f(\mathbf{x}_{k+1}) < f(\mathbf{x}_{k})$), then:
    *   This $\mathbf{x}_{k+1}$ becomes the new base point for the next iteration.
    *   Execute **Step 3: Pattern Move**.
*   If the exploratory move did **not** result in an improvement (i.e., $f(\mathbf{x}_{k+1}) \ge f(\mathbf{x}_{k})$), then:
    *   Reduce the step size: $\Delta_{k+1} = \alpha \Delta_k$.
    *   If $\Delta_{k+1}$ is smaller than the termination tolerance, stop the algorithm.
    *   Otherwise, return to **Step 1** with the same base point $\mathbf{x}_{k}$ and the reduced step size $\Delta_{k+1}$.

**Step 3: Pattern Move (Only if improvement occurred in Step 1)**
*   Define the pattern direction: $\mathbf{p}_k = \mathbf{x}_{k+1} - \mathbf{x}_{k}$.
*   Make a pattern move from the current improved point $\mathbf{x}_{k+1}$: $\mathbf{x}_{k+1}^{new} = \mathbf{x}_{k+1} + \mathbf{p}_k$.
*   Perform a one-dimensional search (line search) along the direction $\mathbf{p}_k$ starting from $\mathbf{x}_{k+1}$ to find a new point $\mathbf{x}_{k+1}^*$.
    *   This line search aims to find a $\beta^* > 0$ that minimizes $f(\mathbf{x}_{k+1} + \beta \mathbf{p}_k)$.
    *   A simplified approach is to try multiples of the current step size: $f(\mathbf{x}_{k+1} + \beta \mathbf{p}_k)$ for $\beta = 1, 2, \dots$. Or, use a standard line search technique.
*   Set the new base point for the next iteration: $\mathbf{x}_{k+1} = \mathbf{x}_{k+1}^*$.
*   Update the base point for the next iteration's exploratory move: $\mathbf{x}_{k}^{(k+1)} = \mathbf{x}_{k+1}$.
*   Keep the same step size: $\Delta_{k+1} = \Delta_k$.
*   Increment the iteration counter: $k = k+1$.
*   Return to **Step 1**.

**Important Note on Pattern Move:**
The goal of the pattern move is to "accelerate" the search by moving in a direction that has proven successful. Instead of an arbitrary step size, a line search is performed along the pattern direction $\mathbf{p}_k$ to find the best point in that direction.

**Termination:**
The algorithm terminates when the step size $\Delta_k$ becomes smaller than a pre-defined tolerance, or when no improvement is made during an exploratory move after reducing the step size sufficiently.

**Reference:**
*   **S.S. Rao, "Engineering Optimization: Theory and Practice"** (Chapter 11, "Direct Search Methods") provides a detailed explanation of the Hook-Jeeves method with algorithmic steps and examples.
*   **H.A. Taha, "Operations Research"** (Chapter 16, "Nonlinear Programming") may also contain a discussion of direct search methods, though possibly with less focus on specific algorithms like Hook-Jeeves.

---

### 4. Example Walkthrough

Let's minimize the function $f(x_1, x_2) = (x_1 - 2)^2 + (x_2 - 3)^2$.

**Initial Conditions:**
*   Starting point: $\mathbf{x}_0 = [1, 1]$
*   Initial step size: $\Delta_0 = 1$
*   Step reduction factor: $\alpha = 0.5$
*   Tolerance: $\epsilon = 0.001$

**Iteration 1:**

**Base Point:** $\mathbf{x}_0 = [1, 1]$, $f(\mathbf{x}_0) = (1-2)^2 + (1-3)^2 = (-1)^2 + (-2)^2 = 1 + 4 = 5$. $\Delta_0 = 1$.

**Step 1: Exploratory Move**
*   Start with $\mathbf{x}_{current} = [1, 1]$.

    *   **Variable $x_1$:**
        *   Check $x_1 + \Delta_0$: $[1+1, 1] = [2, 1]$. $f(2, 1) = (2-2)^2 + (1-3)^2 = 0^2 + (-2)^2 = 4$.
        *   Since $f(2, 1) < f(1, 1)$ (4 < 5), update $\mathbf{x}_{current} = [2, 1]$.
        *   Check $x_1 - \Delta_0$ from new $\mathbf{x}_{current}$: $[2-1, 1] = [1, 1]$. $f(1, 1) = 5$.
        *   Since $f(1, 1) \ge f(2, 1)$ (5 $\ge$ 4), no update. $\mathbf{x}_{current}$ remains $[2, 1]$.

    *   **Variable $x_2$:**
        *   Check $x_2 + \Delta_0$ from current $\mathbf{x}_{current} = [2, 1]$: $[2, 1+1] = [2, 2]$. $f(2, 2) = (2-2)^2 + (2-3)^2 = 0^2 + (-1)^2 = 1$.
        *   Since $f(2, 2) < f(2, 1)$ (1 < 4), update $\mathbf{x}_{current} = [2, 2]$.
        *   Check $x_2 - \Delta_0$ from new $\mathbf{x}_{current}$: $[2, 2-1] = [2, 1]$. $f(2, 1) = 4$.
        *   Since $f(2, 1) \ge f(2, 2)$ (4 $\ge$ 1), no update. $\mathbf{x}_{current}$ remains $[2, 2]$.

*   After exploratory moves, the new potential point is $\mathbf{x}_{1}^{(expl)} = [2, 2]$. $f(\mathbf{x}_{1}^{(expl)}) = 1$.

**Step 2: Check for Improvement**
*   $f(\mathbf{x}_{1}^{(expl)}) = 1$ and $f(\mathbf{x}_0) = 5$.
*   Since $1 < 5$, there is an improvement.

**Step 3: Pattern Move**
*   Pattern direction: $\mathbf{p}_0 = \mathbf{x}_{1}^{(expl)} - \mathbf{x}_0 = [2, 2] - [1, 1] = [1, 1]$.
*   Current improved point: $\mathbf{x}_{1}^{(expl)} = [2, 2]$.
*   Pattern move: Try $f(\mathbf{x}_{1}^{(expl)} + \beta \mathbf{p}_0) = f([2, 2] + \beta [1, 1]) = f(2+\beta, 2+\beta)$.
    *   $f(2+\beta, 2+\beta) = ((2+\beta)-2)^2 + ((2+\beta)-3)^2 = \beta^2 + (\beta-1)^2$.
    *   We want to minimize $g(\beta) = \beta^2 + (\beta-1)^2$ for $\beta > 0$.
    *   $g(\beta) = \beta^2 + \beta^2 - 2\beta + 1 = 2\beta^2 - 2\beta + 1$.
    *   To find the minimum, take the derivative w.r.t. $\beta$ and set to zero: $g'(\beta) = 4\beta - 2 = 0 \implies \beta = 0.5$.
    *   The new point is $\mathbf{x}_{1}^* = [2, 2] + 0.5 \times [1, 1] = [2.5, 2.5]$.
    *   $f(2.5, 2.5) = (2.5-2)^2 + (2.5-3)^2 = (0.5)^2 + (-0.5)^2 = 0.25 + 0.25 = 0.5$.

*   New base point for next iteration: $\mathbf{x}_1 = [2.5, 2.5]$.
*   Keep step size: $\Delta_1 = \Delta_0 = 1$.
*   Increment $k$: $k=1$.

**Iteration 2:**

**Base Point:** $\mathbf{x}_1 = [2.5, 2.5]$, $f(\mathbf{x}_1) = 0.5$. $\Delta_1 = 1$.

**Step 1: Exploratory Move**
*   Start with $\mathbf{x}_{current} = [2.5, 2.5]$.

    *   **Variable $x_1$:**
        *   Check $x_1 + \Delta_1$: $[2.5+1, 2.5] = [3.5, 2.5]$. $f(3.5, 2.5) = (3.5-2)^2 + (2.5-3)^2 = (1.5)^2 + (-0.5)^2 = 2.25 + 0.25 = 2.5$.
        *   Since $f(3.5, 2.5) \ge f(2.5, 2.5)$ (2.5 $\ge$ 0.5), no update.
        *   Check $x_1 - \Delta_1$: $[2.5-1, 2.5] = [1.5, 2.5]$. $f(1.5, 2.5) = (1.5-2)^2 + (2.5-3)^2 = (-0.5)^2 + (-0.5)^2 = 0.25 + 0.25 = 0.5$.
        *   Since $f(1.5, 2.5) \ge f(2.5, 2.5)$ (0.5 $\ge$ 0.5), no update. $\mathbf{x}_{current}$ remains $[2.5, 2.5]$.

    *   **Variable $x_2$:**
        *   Check $x_2 + \Delta_1$ from current $\mathbf{x}_{current} = [2.5, 2.5]$: $[2.5, 2.5+1] = [2.5, 3.5]$. $f(2.5, 3.5) = (2.5-2)^2 + (3.5-3)^2 = (0.5)^2 + (0.5)^2 = 0.25 + 0.25 = 0.5$.
        *   Since $f(2.5, 3.5) \ge f(2.5, 2.5)$ (0.5 $\ge$ 0.5), no update.
        *   Check $x_2 - \Delta_1$: $[2.5, 2.5-1] = [2.5, 1.5]$. $f(2.5, 1.5) = (2.5-2)^2 + (1.5-3)^2 = (0.5)^2 + (-1.5)^2 = 0.25 + 2.25 = 2.5$.
        *   Since $f(2.5, 1.5) \ge f(2.5, 2.5)$ (2.5 $\ge$ 0.5), no update. $\mathbf{x}_{current}$ remains $[2.5, 2.5]$.

*   After exploratory moves, the new potential point is $\mathbf{x}_{2}^{(expl)} = [2.5, 2.5]$. $f(\mathbf{x}_{2}^{(expl)}) = 0.5$.

**Step 2: Check for Improvement**
*   $f(\mathbf{x}_{2}^{(expl)}) = 0.5$ and $f(\mathbf{x}_1) = 0.5$.
*   Since $0.5 \ge 0.5$, there is no improvement.

**Step 3: Reduce Step Size**
*   Reduce step size: $\Delta_2 = \alpha \Delta_1 = 0.5 \times 1 = 0.5$.
*   The current base point remains $\mathbf{x}_1 = [2.5, 2.5]$.
*   Increment $k$: $k=2$.
*   Return to Step 1 with $\mathbf{x}_1 = [2.5, 2.5]$ and $\Delta_2 = 0.5$.

**Iteration 3:**

**Base Point:** $\mathbf{x}_1 = [2.5, 2.5]$, $f(\mathbf{x}_1) = 0.5$. $\Delta_2 = 0.5$.

**Step 1: Exploratory Move**
*   Start with $\mathbf{x}_{current} = [2.5, 2.5]$.

    *   **Variable $x_1$:**
        *   Check $x_1 + \Delta_2$: $[2.5+0.5, 2.5] = [3, 2.5]$. $f(3, 2.5) = (3-2)^2 + (2.5-3)^2 = 1^2 + (-0.5)^2 = 1 + 0.25 = 1.25$.
        *   Since $f(3, 2.5) \ge f(2.5, 2.5)$ (1.25 $\ge$ 0.5), no update.
        *   Check $x_1 - \Delta_2$: $[2.5-0.5, 2.5] = [2, 2.5]$. $f(2, 2.5) = (2-2)^2 + (2.5-3)^2 = 0^2 + (-0.5)^2 = 0.25$.
        *   Since $f(2, 2.5) < f(2.5, 2.5)$ (0.25 < 0.5), update $\mathbf{x}_{current} = [2, 2.5]$.

    *   **Variable $x_2$:**
        *   Check $x_2 + \Delta_2$ from current $\mathbf{x}_{current} = [2, 2.5]$: $[2, 2.5+0.5] = [2, 3]$. $f(2, 3) = (2-2)^2 + (3-3)^2 = 0^2 + 0^2 = 0$.
        *   Since $f(2, 3) < f(2, 2.5)$ (0 < 0.25), update $\mathbf{x}_{current} = [2, 3]$.
        *   Check $x_2 - \Delta_2$ from new $\mathbf{x}_{current}$: $[2, 3-0.5] = [2, 2.5]$. $f(2, 2.5) = 0.25$.
        *   Since $f(2, 2.5) \ge f(2, 3)$ (0.25 $\ge$ 0), no update. $\mathbf{x}_{current}$ remains $[2, 3]$.

*   After exploratory moves, the new potential point is $\mathbf{x}_{3}^{(expl)} = [2, 3]$. $f(\mathbf{x}_{3}^{(expl)}) = 0$.

**Step 2: Check for Improvement**
*   $f(\mathbf{x}_{3}^{(expl)}) = 0$ and $f(\mathbf{x}_1) = 0.5$.
*   Since $0 < 0.5$, there is an improvement.

**Step 3: Pattern Move**
*   Pattern direction: $\mathbf{p}_1 = \mathbf{x}_{3}^{(expl)} - \mathbf{x}_1 = [2, 3] - [2.5, 2.5] = [-0.5, 0.5]$.
*   Current improved point: $\mathbf{x}_{3}^{(expl)} = [2, 3]$.
*   Pattern move: Try $f(\mathbf{x}_{3}^{(expl)} + \beta \mathbf{p}_1) = f([2, 3] + \beta [-0.5, 0.5]) = f(2 - 0.5\beta, 3 + 0.5\beta)$.
    *   $f(2 - 0.5\beta, 3 + 0.5\beta) = ((2 - 0.5\beta)-2)^2 + ((3 + 0.5\beta)-3)^2 = (-0.5\beta)^2 + (0.5\beta)^2 = 0.25\beta^2 + 0.25\beta^2 = 0.5\beta^2$.
    *   We want to minimize $h(\beta) = 0.5\beta^2$ for $\beta > 0$.
    *   The minimum is at $\beta = 0$ which is not allowed. For $\beta > 0$, the function is always increasing.
    *   A practical line search would try $\beta = 1$. $f(2 - 0.5, 3 + 0.5) = f(1.5, 3.5) = (1.5-2)^2 + (3.5-3)^2 = (-0.5)^2 + (0.5)^2 = 0.25 + 0.25 = 0.5$.
    *   Since $0.5 > 0$, no improvement.
    *   The best point found in the pattern direction (starting from $\mathbf{x}_3^{(expl)}$) is indeed $[2, 3]$ itself, corresponding to $\beta = 0$.

*   New base point for next iteration: $\mathbf{x}_2 = [2, 3]$.
*   Keep step size: $\Delta_2 = \Delta_1 = 0.5$. (Note: The algorithm description implies we keep the step size from the successful exploratory move, which was $\Delta_2 = 0.5$)
*   Increment $k$: $k=2$.

**Iteration 4:**

**Base Point:** $\mathbf{x}_2 = [2, 3]$, $f(\mathbf{x}_2) = 0$. $\Delta_2 = 0.5$.

**Step 1: Exploratory Move**
*   Start with $\mathbf{x}_{current} = [2, 3]$.

    *   **Variable $x_1$:**
        *   Check $x_1 + \Delta_2$: $[2+0.5, 3] = [2.5, 3]$. $f(2.5, 3) = (2.5-2)^2 + (3-3)^2 = (0.5)^2 + 0^2 = 0.25$.
        *   Since $f(2.5, 3) \ge f(2, 3)$ (0.25 $\ge$ 0), no update.
        *   Check $x_1 - \Delta_2$: $[2-0.5, 3] = [1.5, 3]$. $f(1.5, 3) = (1.5-2)^2 + (3-3)^2 = (-0.5)^2 + 0^2 = 0.25$.
        *   Since $f(1.5, 3) \ge f(2, 3)$ (0.25 $\ge$ 0), no update. $\mathbf{x}_{current}$ remains $[2, 3]$.

    *   **Variable $x_2$:**
        *   Check $x_2 + \Delta_2$ from current $\mathbf{x}_{current} = [2, 3]$: $[2, 3+0.5] = [2, 3.5]$. $f(2, 3.5) = (2-2)^2 + (3.5-3)^2 = 0^2 + (0.5)^2 = 0.25$.
        *   Since $f(2, 3.5) \ge f(2, 3)$ (0.25 $\ge$ 0), no update.
        *   Check $x_2 - \Delta_2$: $[2, 3-0.5] = [2, 2.5]$. $f(2, 2.5) = (2-2)^2 + (2.5-3)^2 = 0^2 + (-0.5)^2 = 0.25$.
        *   Since $f(2, 2.5) \ge f(2, 3)$ (0.25 $\ge$ 0), no update. $\mathbf{x}_{current}$ remains $[2, 3]$.

*   After exploratory moves, the new potential point is $\mathbf{x}_{4}^{(expl)} = [2, 3]$. $f(\mathbf{x}_{4}^{(expl)}) = 0$.

**Step 2: Check for Improvement**
*   $f(\mathbf{x}_{4}^{(expl)}) = 0$ and $f(\mathbf{x}_2) = 0$.
*   Since $0 \ge 0$, there is no improvement.

**Step 3: Reduce Step Size**
*   Reduce step size: $\Delta_3 = \alpha \Delta_2 = 0.5 \times 0.5 = 0.25$.
*   The current base point remains $\mathbf{x}_2 = [2, 3]$.
*   Increment $k$: $k=3$.
*   Return to Step 1 with $\mathbf{x}_2 = [2, 3]$ and $\Delta_3 = 0.25$.

The algorithm will continue reducing the step size. Since we are already at the minimum $f(2, 3) = 0$, the exploratory moves will not find any better points, and the step size will continue to decrease. Eventually, $\Delta$ will become smaller than the tolerance, and the algorithm will terminate, returning $[2, 3]$ as the approximate minimum.

**Key Observation:** The method successfully identified the true minimum at $[2, 3]$ where $f(x_1, x_2) = 0$.

---

### 5. Comparison with Other Direct Search Methods

The Hook-Jeeves method is a pattern search method. Other direct search methods include:

*   **Simplex Method (Nelder-Mead Method):** Uses a simplex (a geometric figure with $n+1$ vertices in $n$ dimensions) and iteratively modifies it by reflecting, expanding, or contracting vertices to find the minimum. It does not rely on a fixed pattern like Hook-Jeeves.
*   **Rosenbrock Method:** Specifically designed for optimization problems, it rotates and scales the search directions to adapt to the shape of the objective function's contour lines.
*   **Coordinate Search (Cyclic Coordinate Descent):** Minimizes the function along each coordinate axis sequentially. It's simpler but can be slow if the axes are not aligned with the function's curvature.

**Hook-Jeeves vs. Simplex/Rosenbrock:**
*   **Hook-Jeeves:** Relies on a fixed pattern of movement derived from previous improvements. It can be faster when the pattern of improvement is consistent.
*   **Simplex (Nelder-Mead):** Adapts its search space (the simplex) more dynamically to the function's landscape and can be more robust for functions with complex shapes.
*   **Rosenbrock:** Specifically designed for quadratic functions and can adapt to the principal axes of the contour.

**Reference:**
*   **Kalynamoy Deb, "Optimization for Engineering Design - Algorithms and Examples"** provides comparative discussions of various direct search methods.
*   **S.S. Rao, "Engineering Optimization: Theory and Practice"** also offers a good comparison of different direct search techniques.

---

### 6. Convergence Properties and Limitations

**Convergence:**
*   The Hook-Jeeves method is guaranteed to converge to a local minimum for strictly convex functions.
*   For non-convex functions, it may converge to a local minimum or a saddle point.
*   The rate of convergence depends on the step size reduction factor ($\alpha$) and the nature of the objective function. A smaller $\alpha$ leads to slower convergence but potentially higher accuracy.
*   The exploratory moves are essentially a form of coordinate search, while the pattern move helps accelerate convergence by exploiting the direction of progress.

**Limitations:**
*   **Local Optima:** Like most direct search methods, it can get trapped in local minima.
*   **Step Size Sensitivity:** The initial step size and reduction factor can significantly impact performance.
*   **Line Search:** The effectiveness of the pattern move depends on the quality of the line search along the pattern direction. A simple step-check may not be sufficient for complex functions.
*   **Pattern Dependence:** If the pattern of improvement is not consistent, the method might not be as efficient as other methods.
*   **No Derivative Information:** While an advantage for non-differentiable functions, the lack of gradient information means it cannot exploit the curvature of the function as effectively as gradient-based methods.

**Reference:**
*   **S.S. Rao, "Engineering Optimization: Theory and Practice"** discusses convergence properties and limitations of direct search methods.

---

### 7. Practice Questions and Exercises

**Question 1:**
Describe the two main types of moves used in the Hook-Jeeves pattern search method and explain their purpose.

**Answer:**
The Hook-Jeeves method uses:
1.  **Exploratory Move:** This move aims to find a better point in the immediate vicinity of the current base point by searching along each coordinate axis (positive and negative directions) with the current step size. Its purpose is to locate a direction of improvement locally.
2.  **Pattern Move:** This move is made after a successful exploratory move that resulted in an improvement. It moves from the latest improved point in the direction of the overall progress made during the exploratory phase (the "pattern"). Its purpose is to accelerate convergence by making larger steps in promising directions.

**Question 2:**
Consider the function $f(x_1, x_2) = x_1^2 + x_2^2$. Starting at $\mathbf{x}_0 = [3, 4]$ with $\Delta_0 = 2$ and $\alpha = 0.5$, perform one iteration of the Hook-Jeeves pattern search method.

**Answer:**

**Initial State:**
*   $\mathbf{x}_0 = [3, 4]$, $f(\mathbf{x}_0) = 3^2 + 4^2 = 9 + 16 = 25$.
*   $\Delta_0 = 2$.

**Iteration 1:**

**Base Point:** $\mathbf{x}_{current\_base} = [3, 4]$.

**Step 1: Exploratory Move**
*   Start with $\mathbf{x}_{exp} = [3, 4]$.

    *   **Variable $x_1$:**
        *   Check $x_1 + \Delta_0$: $[3+2, 4] = [5, 4]$. $f(5, 4) = 5^2 + 4^2 = 25 + 16 = 41$.
        *   Since $41 \ge 25$, no update.
        *   Check $x_1 - \Delta_0$: $[3-2, 4] = [1, 4]$. $f(1, 4) = 1^2 + 4^2 = 1 + 16 = 17$.
        *   Since $17 < 25$, update $\mathbf{x}_{exp} = [1, 4]$.

    *   **Variable $x_2$:**
        *   Check $x_2 + \Delta_0$ from current $\mathbf{x}_{exp} = [1, 4]$: $[1, 4+2] = [1, 6]$. $f(1, 6) = 1^2 + 6^2 = 1 + 36 = 37$.
        *   Since $37 \ge 17$, no update.
        *   Check $x_2 - \Delta_0$: $[1, 4-2] = [1, 2]$. $f(1, 2) = 1^2 + 2^2 = 1 + 4 = 5$.
        *   Since $5 < 17$, update $\mathbf{x}_{exp} = [1, 2]$.

*   End of exploratory moves: $\mathbf{x}_{1}^{(expl)} = [1, 2]$, $f(\mathbf{x}_{1}^{(expl)}) = 5$.

**Step 2: Check for Improvement**
*   $f(\mathbf{x}_{1}^{(expl)}) = 5$ and $f(\mathbf{x}_0) = 25$.
*   Since $5 < 25$, there is an improvement.

**Step 3: Pattern Move**
*   Pattern direction: $\mathbf{p}_0 = \mathbf{x}_{1}^{(expl)} - \mathbf{x}_{current\_base} = [1, 2] - [3, 4] = [-2, -2]$.
*   Current improved point: $\mathbf{x}_{1}^{(expl)} = [1, 2]$.
*   Pattern move: Try $f(\mathbf{x}_{1}^{(expl)} + \beta \mathbf{p}_0) = f([1, 2] + \beta [-2, -2]) = f(1-2\beta, 2-2\beta)$.
    *   $f(1-2\beta, 2-2\beta) = (1-2\beta)^2 + (2-2\beta)^2$.
    *   Let's try $\beta = 1$: $\mathbf{x}_{pattern} = [1, 2] + 1 \times [-2, -2] = [-1, 0]$.
    *   $f(-1, 0) = (-1)^2 + 0^2 = 1$.
    *   Since $1 < 5$ (the value at $\mathbf{x}_{1}^{(expl)}$), the pattern move is successful.
    *   We would typically perform a line search to find the optimal $\beta$. For $g(\beta) = (1-2\beta)^2 + (2-2\beta)^2$, $g'(\beta) = 2(1-2\beta)(-2) + 2(2-2\beta)(-2) = -4(1-2\beta) - 4(2-2\beta) = -4 + 8\beta - 8 + 8\beta = 16\beta - 12$. Setting $g'(\beta) = 0$, we get $\beta = 12/16 = 0.75$.
    *   The new point is $\mathbf{x}_{1}^* = [1, 2] + 0.75 \times [-2, -2] = [1 - 1.5, 2 - 1.5] = [-0.5, 0.5]$.
    *   $f(-0.5, 0.5) = (-0.5)^2 + (0.5)^2 = 0.25 + 0.25 = 0.5$.

*   The new base point for the next iteration is $\mathbf{x}_1 = [-0.5, 0.5]$.
*   The step size remains $\Delta_1 = \Delta_0 = 2$.
*   $k$ becomes 1.

**End of Iteration 1:**
*   New base point: $[-0.5, 0.5]$
*   Function value: $0.5$
*   Step size: $2$

**Question 3:**
What are the potential drawbacks of using the Hook-Jeeves method compared to gradient-based methods?

**Answer:**
1.  **Slower Convergence:** Without gradient information, Hook-Jeeves might take more iterations to reach the optimum, especially for functions with narrow valleys or steep gradients.
2.  **Difficulty with Highly Non-linear Functions:** The fixed pattern of exploration might not adapt well to highly complex or oscillating objective functions.
3.  **Sensitivity to Initial Step Size:** A poorly chosen initial step size can lead to slow progress or overshooting the minimum.
4.  **No Guarantee of Global Optimum:** Like most direct search methods, it can converge to a local minimum if the function has multiple minima.

---

### 8. Important Points to Remember

*   **Direct Search:** Hook-Jeeves is a gradient-free method, making it suitable for non-differentiable or complex functions.
*   **Two-Phase Approach:** It combines local exploration with pattern-driven acceleration.
*   **Step Size Reduction:** The step size is reduced only when an exploratory move fails to find an improvement.
*   **Line Search:** A crucial part of the pattern move is finding the best point along the pattern direction.
*   **Convergence to Local Minima:** Be aware that it might find a local minimum, not necessarily the global one.
*   **Parameter Selection:** The initial step size ($\Delta_0$) and the reduction factor ($\alpha$) are important parameters that influence performance.

---

### 9. Conclusion

The Hook-Jeeves pattern search method is an effective direct search technique for solving unconstrained multivariable optimization problems. By intelligently combining exploratory moves with pattern moves, it can efficiently navigate the search space, particularly for functions where gradient computation is difficult. Understanding its algorithmic steps, advantages, and limitations is crucial for its successful application in engineering and operations research problems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
