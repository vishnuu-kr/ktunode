---
title: "Numerical solution of ordinary differential equations-Euler’s method"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 4: Newton"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ed4"
status: "completed"
scrapedAt: "2026-05-20T17:54:53.157Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4
## Module 4: Newton
## Topic: Numerical Solution of Ordinary Differential Equations - Euler's Method

### 1. Introduction to Ordinary Differential Equations (ODEs) and Their Importance

**Key Concept:** An Ordinary Differential Equation (ODE) is an equation that relates a function with one independent variable to its derivatives.

*   **Definition:** An ODE of order $n$ is an equation involving an independent variable, a dependent variable, and the derivatives of the dependent variable up to the $n$-th order. The general form of an $n$-th order ODE is:
    $F(x, y, y', y'', \dots, y^{(n)}) = 0$

*   **Physical Science Relevance:** ODEs are fundamental in describing many phenomena in physical sciences:
    *   **Classical Mechanics (Newton's Laws):** Motion of objects (e.g., projectile motion, planetary orbits) is described by second-order ODEs.
        *   *Example:* Newton's second law of motion: $m \frac{d^2x}{dt^2} = F(x, \frac{dx}{dt}, t)$
    *   **Electromagnetism:** Behavior of electric and magnetic fields.
    *   **Thermodynamics:** Heat transfer and fluid dynamics.
    *   **Chemical Kinetics:** Reaction rates.
    *   **Population Dynamics:** Growth and decay of populations.

*   **Analytical vs. Numerical Solutions:**
    *   **Analytical Solution:** An exact mathematical expression for the solution function $y(x)$.
    *   **Numerical Solution:** An approximation of the solution at discrete points using computational methods. Many ODEs encountered in physical science do not have simple analytical solutions, making numerical methods essential.

**References:**
*   **Chapra & Canale (8th ed.):** Chapter 12 introduces ODEs and their applications in engineering and physical sciences. They emphasize the need for numerical solutions when analytical methods are not feasible.
*   **Sastry (5th ed.):** Chapter 1 provides a good foundation on ODEs and their classification before diving into numerical methods.

### 2. The Problem of Solving ODEs Numerically

**Key Concept:** We often need to solve an ODE of the form:
$\frac{dy}{dx} = f(x, y)$, with an initial condition $y(x_0) = y_0$.

*   **Objective:** To find the value of $y$ at various points $x_1, x_2, \dots, x_n$ where $x_0 < x_1 < x_2 < \dots < x_n$.

*   **The Challenge:** The function $f(x, y)$ might be complex, or the ODE might be non-linear, making it difficult or impossible to find an exact analytical solution.

*   **Discretization:** Numerical methods work by discretizing the independent variable (usually time or position) into small steps. Let $h$ be the step size, such that $x_{i+1} = x_i + h$. We aim to approximate $y(x_{i+1})$ given $y(x_i)$.

**References:**
*   **Sastry (5th ed.):** Chapter 1 introduces the initial value problem (IVP) for ODEs and the concept of approximation.
*   **Devore (9th ed.):** While Devore focuses on statistics, the concept of using discrete steps to approximate a continuous process is analogous to how sampling works in statistics.

### 3. Euler's Method: The Simplest Numerical Approach

**Key Concept:** Euler's method is the most basic method for approximating the solution of an initial value problem for a first-order ODE. It's based on the idea of approximating the curve of the solution by a sequence of short line segments.

*   **Underlying Principle (Taylor Series Expansion):**
    Consider the Taylor series expansion of $y(x)$ around $x_i$:
    $y(x_{i+1}) = y(x_i) + h y'(x_i) + \frac{h^2}{2!} y''(x_i) + \dots$

    Euler's method truncates this series after the first derivative term, assuming $h$ is small:
    $y(x_{i+1}) \approx y(x_i) + h y'(x_i)$

*   **Substituting the ODE:**
    Since $\frac{dy}{dx} = f(x, y)$, we have $y'(x_i) = f(x_i, y(x_i))$.
    Let $y_i$ be the approximation of $y(x_i)$. Then, $y'(x_i) \approx f(x_i, y_i)$.
    The recursive formula for Euler's method is:
    $y_{i+1} = y_i + h f(x_i, y_i)$

*   **Algorithm:**
    1.  Start with the initial condition $(x_0, y_0)$.
    2.  Choose a step size $h$.
    3.  Iteratively calculate the next point $(x_{i+1}, y_{i+1})$ using:
        *   $x_{i+1} = x_i + h$
        *   $y_{i+1} = y_i + h f(x_i, y_i)$
    4.  Repeat step 3 until the desired value of $x$ is reached.

**Example 1:**
Solve the ODE $\frac{dy}{dx} = x + y$ with the initial condition $y(0) = 1$, using Euler's method with a step size $h = 0.1$ to find $y(0.3)$.

*   **Given:** $f(x, y) = x + y$, $x_0 = 0$, $y_0 = 1$, $h = 0.1$. We want to find $y(0.3)$.

*   **Step 1 (i=0):**
    *   $x_0 = 0$, $y_0 = 1$
    *   $x_1 = x_0 + h = 0 + 0.1 = 0.1$
    *   $y_1 = y_0 + h f(x_0, y_0) = 1 + 0.1 (0 + 1) = 1 + 0.1(1) = 1.1$
    *   Approximate solution at $x=0.1$ is $y(0.1) \approx 1.1$.

*   **Step 2 (i=1):**
    *   $x_1 = 0.1$, $y_1 = 1.1$
    *   $x_2 = x_1 + h = 0.1 + 0.1 = 0.2$
    *   $y_2 = y_1 + h f(x_1, y_1) = 1.1 + 0.1 (0.1 + 1.1) = 1.1 + 0.1 (1.2) = 1.1 + 0.12 = 1.22$
    *   Approximate solution at $x=0.2$ is $y(0.2) \approx 1.22$.

*   **Step 3 (i=2):**
    *   $x_2 = 0.2$, $y_2 = 1.22$
    *   $x_3 = x_2 + h = 0.2 + 0.1 = 0.3$
    *   $y_3 = y_2 + h f(x_2, y_2) = 1.22 + 0.1 (0.2 + 1.22) = 1.22 + 0.1 (1.42) = 1.22 + 0.142 = 1.362$
    *   Approximate solution at $x=0.3$ is $y(0.3) \approx 1.362$.

**Actual Solution for Example 1:**
The analytical solution to $\frac{dy}{dx} = x + y$ with $y(0) = 1$ is $y(x) = 2e^x - x - 1$.
At $x=0.3$, the actual value is $y(0.3) = 2e^{0.3} - 0.3 - 1 \approx 2(1.34986) - 1.3 = 2.69972 - 1.3 = 1.39972$.
The error is $|1.39972 - 1.362| = 0.03772$.

**References:**
*   **Sastry (5th ed.):** Chapter 1, Section 1.5 covers Euler's method with examples.
*   **Chapra & Canale (8th ed.):** Chapter 12.1 provides a thorough explanation of Euler's method and its geometric interpretation.

### 4. Error Analysis in Euler's Method

**Key Concepts:**
*   **Truncation Error:** The error introduced by truncating the Taylor series. For Euler's method, this is the difference between the exact solution and the result from one step of the method.
*   **Round-off Error:** Errors that arise from the finite precision of computer arithmetic.
*   **Local Truncation Error:** The error made in a single step. For Euler's method, this is $O(h^2)$.
*   **Global Truncation Error:** The accumulated error over all steps. For Euler's method, this is $O(h)$.

*   **Impact of Step Size (h):**
    *   **Smaller $h$:** Generally leads to higher accuracy (lower truncation error) but requires more computational steps, increasing the potential for round-off error accumulation.
    *   **Larger $h$:** Leads to lower accuracy (higher truncation error) but fewer computational steps.

*   **Relationship to Taylor Series:**
    $y(x_{i+1}) = y(x_i) + h f(x_i, y_i) + \frac{h^2}{2!} y''(x_i) + \dots$
    $y_{i+1} = y_i + h f(x_i, y_i)$
    The local truncation error is $y(x_{i+1}) - y_{i+1} = \frac{h^2}{2} y''(\xi_i)$ for some $\xi_i \in (x_i, x_{i+1})$.
    Thus, the local truncation error is proportional to $h^2$.

    The global truncation error, which is the sum of local errors over many steps, is proportional to $h$.

**Important Point to Remember:** Euler's method is a first-order method because its global accuracy is proportional to the step size $h$. To halve the error, you typically need to halve the step size (which doubles the number of steps).

**References:**
*   **Sastry (5th ed.):** Chapter 1, Section 1.5 discusses the error associated with Euler's method.
*   **Chapra & Canale (8th ed.):** Chapter 12.1 covers truncation errors and order of accuracy.

### 5. Learning Outcome Alignment and Knowledge Levels

This topic directly addresses **Course Outcome CO4: Apply numerical methods to find solutions of linear system of equations, ordinary differential equations and Laplace equations. (Knowledge Level: K3)**

*   **K3 (Apply):** Students are expected to not only understand the concept of Euler's method but also to apply it to solve specific ODE problems, as demonstrated in Example 1. This involves understanding the iterative process and performing the calculations.

### 6. Practice Questions and Exercises

**Question 1:**
Solve the differential equation $\frac{dy}{dx} = -y$ with the initial condition $y(0) = 1$, using Euler's method with a step size $h = 0.2$ to find $y(0.6)$.

**Answer:**
*   Given: $f(x, y) = -y$, $x_0 = 0$, $y_0 = 1$, $h = 0.2$. We want $y(0.6)$.

*   **Step 1 (i=0):**
    *   $x_0 = 0$, $y_0 = 1$
    *   $x_1 = 0.2$
    *   $y_1 = y_0 + h f(x_0, y_0) = 1 + 0.2(-1) = 1 - 0.2 = 0.8$

*   **Step 2 (i=1):**
    *   $x_1 = 0.2$, $y_1 = 0.8$
    *   $x_2 = 0.4$
    *   $y_2 = y_1 + h f(x_1, y_1) = 0.8 + 0.2(-0.8) = 0.8 - 0.16 = 0.64$

*   **Step 3 (i=2):**
    *   $x_2 = 0.4$, $y_2 = 0.64$
    *   $x_3 = 0.6$
    *   $y_3 = y_2 + h f(x_2, y_2) = 0.64 + 0.2(-0.64) = 0.64 - 0.128 = 0.512$

*   **Result:** $y(0.6) \approx 0.512$

**(Actual solution: $y(x) = e^{-x}$. At $x=0.6$, $y(0.6) = e^{-0.6} \approx 0.5488$. Error = $|0.5488 - 0.512| = 0.0368$)**

**Question 2:**
Consider the ODE $\frac{dy}{dx} = x^2 - y$ with $y(0) = 2$. Use Euler's method with $h=0.1$ to estimate $y(0.2)$.

**Answer:**
*   Given: $f(x, y) = x^2 - y$, $x_0 = 0$, $y_0 = 2$, $h = 0.1$. We want $y(0.2)$.

*   **Step 1 (i=0):**
    *   $x_0 = 0$, $y_0 = 2$
    *   $x_1 = 0.1$
    *   $y_1 = y_0 + h f(x_0, y_0) = 2 + 0.1 (0^2 - 2) = 2 + 0.1 (-2) = 2 - 0.2 = 1.8$

*   **Step 2 (i=1):**
    *   $x_1 = 0.1$, $y_1 = 1.8$
    *   $x_2 = 0.2$
    *   $y_2 = y_1 + h f(x_1, y_1) = 1.8 + 0.1 (0.1^2 - 1.8) = 1.8 + 0.1 (0.01 - 1.8) = 1.8 + 0.1 (-1.79) = 1.8 - 0.179 = 1.621$

*   **Result:** $y(0.2) \approx 1.621$

### 7. Summary and Key Takeaways

*   **Euler's Method:** A first-order numerical method for solving ODEs of the form $\frac{dy}{dx} = f(x, y)$ with $y(x_0) = y_0$.
*   **Formula:** $y_{i+1} = y_i + h f(x_i, y_i)$ and $x_{i+1} = x_i + h$.
*   **Geometric Interpretation:** Approximating the solution curve with tangent lines at each step.
*   **Accuracy:** The global accuracy is $O(h)$. Reducing $h$ improves accuracy but increases computation.
*   **Applications:** Essential for problems where analytical solutions are intractable, common in physics and engineering.
*   **Limitations:** Can be inaccurate for larger step sizes or rapidly changing functions. More sophisticated methods (like Runge-Kutta methods) are often preferred for better accuracy.

This concludes the notes on Euler's Method. While simple, it forms the basis for understanding more advanced numerical ODE solvers.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
