---
title: "finite difference method"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 3: Numerical solution of ordinary differential equations"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646bf"
status: "completed"
scrapedAt: "2026-05-20T18:23:22.335Z"
---
# NUMERICAL TECHNIQUES ENGINEERING - Module 3: Numerical Solution of Ordinary Differential Equations

## Topic: Finite Difference Method

This module focuses on the numerical solution of Ordinary Differential Equations (ODEs). The Finite Difference Method (FDM) is a powerful technique for approximating the derivatives in an ODE, thereby transforming the differential equation into a system of algebraic equations that can be solved numerically.

### Learning Outcomes:

Upon completion of this topic, students will be able to:

*   Understand the fundamental principles of the Finite Difference Method for ODEs.
*   Derive and apply finite difference approximations for first and second derivatives.
*   Formulate and solve initial value problems (IVPs) and boundary value problems (BVPs) using FDM.
*   Analyze the accuracy and stability of finite difference schemes.
*   Apply FDM to solve practical engineering problems governed by ODEs.

### Course Outcomes Alignment:

This topic primarily contributes to **CO4: Execute numerical procedures to solve ordinary and partial differential equations (Knowledge Level: K3)**. By understanding and applying FDM, students will be able to numerically solve ODEs.

---

### 1. Introduction to Numerical Solution of ODEs

Ordinary Differential Equations (ODEs) are mathematical models that describe the rate of change of a quantity with respect to a single independent variable. Many physical phenomena in engineering, such as fluid dynamics, heat transfer, mechanical vibrations, and circuit analysis, are described by ODEs.

*   **Analytical Solutions:** These are exact mathematical expressions for the solution of an ODE. However, analytical solutions are not always possible, especially for complex or nonlinear ODEs.
*   **Numerical Solutions:** When analytical solutions are not feasible, numerical methods are employed to approximate the solution at discrete points.

### 2. The Finite Difference Method (FDM)

The core idea of FDM is to approximate the derivatives in an ODE by replacing them with algebraic expressions derived from Taylor series expansions. This process discretizes the domain of the independent variable into a series of points, called a grid or mesh.

#### 2.1. Taylor Series Expansion

The foundation of FDM lies in the Taylor series expansion of a function $f(x)$ around a point $x_i$:

$f(x_{i+1}) = f(x_i) + h f'(x_i) + \frac{h^2}{2!} f''(x_i) + \frac{h^3}{3!} f'''(x_i) + \dots$

where $h = x_{i+1} - x_i$ is the step size.

From this expansion, we can derive approximations for the derivatives.

#### 2.2. Finite Difference Approximations for Derivatives

We assume the domain of the independent variable (e.g., time $t$ or spatial coordinate $x$) is divided into $N$ equally spaced points: $x_0, x_1, x_2, \dots, x_N$, with a constant step size $h = x_{i+1} - x_i$. Let $y_i$ denote the approximate value of the solution $y(x)$ at $x_i$, i.e., $y_i \approx y(x_i)$.

##### 2.2.1. First Derivative Approximations

*   **Forward Difference:**
    From the Taylor series: $f(x_{i+1}) = f(x_i) + h f'(x_i) + O(h^2)$
    Rearranging for $f'(x_i)$: $f'(x_i) = \frac{f(x_{i+1}) - f(x_i)}{h} - \frac{h}{2} f''(x_i) + \dots$
    **Forward difference approximation:** $f'(x_i) \approx \frac{y_{i+1} - y_i}{h}$
    *   **Order of Accuracy:** $O(h)$ (first-order accurate)

*   **Backward Difference:**
    Consider the Taylor series expansion of $f(x_{i-1})$ around $x_i$:
    $f(x_{i-1}) = f(x_i) - h f'(x_i) + \frac{h^2}{2!} f''(x_i) - \frac{h^3}{3!} f'''(x_i) + \dots$
    Rearranging for $f'(x_i)$: $f'(x_i) = \frac{f(x_i) - f(x_{i-1})}{h} + \frac{h}{2} f''(x_i) - \dots$
    **Backward difference approximation:** $f'(x_i) \approx \frac{y_i - y_{i-1}}{h}$
    *   **Order of Accuracy:** $O(h)$ (first-order accurate)

*   **Central Difference:**
    Consider the difference between the Taylor expansions for $f(x_{i+1})$ and $f(x_{i-1})$:
    $f(x_{i+1}) - f(x_{i-1}) = (f(x_i) + h f'(x_i) + \frac{h^2}{2} f''(x_i) + \frac{h^3}{6} f'''(x_i) + \dots) - (f(x_i) - h f'(x_i) + \frac{h^2}{2} f''(x_i) - \frac{h^3}{6} f'''(x_i) + \dots)$
    $f(x_{i+1}) - f(x_{i-1}) = 2h f'(x_i) + 2 \frac{h^3}{6} f'''(x_i) + \dots$
    Rearranging for $f'(x_i)$: $f'(x_i) = \frac{f(x_{i+1}) - f(x_{i-1})}{2h} - \frac{h^2}{6} f'''(x_i) + \dots$
    **Central difference approximation:** $f'(x_i) \approx \frac{y_{i+1} - y_{i-1}}{2h}$
    *   **Order of Accuracy:** $O(h^2)$ (second-order accurate)
    *   **Advantage:** Generally more accurate than forward or backward differences for the same step size.

##### 2.2.2. Second Derivative Approximations

Consider the sum of the Taylor expansions for $f(x_{i+1})$ and $f(x_{i-1})$ around $x_i$:
$f(x_{i+1}) + f(x_{i-1}) = (f(x_i) + h f'(x_i) + \frac{h^2}{2} f''(x_i) + \frac{h^3}{6} f'''(x_i) + \frac{h^4}{24} f^{(4)}(x_i) + \dots) + (f(x_i) - h f'(x_i) + \frac{h^2}{2} f''(x_i) - \frac{h^3}{6} f'''(x_i) + \frac{h^4}{24} f^{(4)}(x_i) - \dots)$
$f(x_{i+1}) + f(x_{i-1}) = 2f(x_i) + h^2 f''(x_i) + 2 \frac{h^4}{24} f^{(4)}(x_i) + \dots$
Rearranging for $f''(x_i)$: $f''(x_i) = \frac{f(x_{i+1}) - 2f(x_i) + f(x_{i-1})}{h^2} - \frac{h^2}{12} f^{(4)}(x_i) + \dots$

**Central difference approximation for second derivative:** $f''(x_i) \approx \frac{y_{i+1} - 2y_i + y_{i-1}}{h^2}$
*   **Order of Accuracy:** $O(h^2)$ (second-order accurate)

---

**Key Concept:** The accuracy of the finite difference approximation increases as the step size $h$ decreases, and the order of accuracy (e.g., $O(h^2)$) indicates how quickly the error decreases with decreasing $h$.

---

### 3. Solving Initial Value Problems (IVPs) using FDM

An IVP is an ODE where the initial condition is specified at the starting point of the independent variable.

**General form:**
$\frac{dy}{dx} = f(x, y), \quad y(x_0) = y_0$

#### 3.1. Euler's Method (Forward Euler)

This is the simplest FDM approach for IVPs, using the forward difference approximation for the first derivative.

$\frac{y_{i+1} - y_i}{h} \approx f(x_i, y_i)$
$y_{i+1} \approx y_i + h f(x_i, y_i)$

*   **Algorithm:**
    1.  Start with the initial condition $(x_0, y_0)$.
    2.  Calculate $y_1 = y_0 + h f(x_0, y_0)$.
    3.  Calculate $y_2 = y_1 + h f(x_1, y_1)$.
    4.  Continue this process iteratively until the desired endpoint is reached.

*   **Example:** Solve $\frac{dy}{dx} = -2y + 6$, with $y(0) = 1$, from $x=0$ to $x=1$ using $h=0.25$.

    *   $f(x, y) = -2y + 6$. $x_0 = 0, y_0 = 1, h = 0.25$.
    *   $x_1 = 0.25$: $y_1 = y_0 + h f(x_0, y_0) = 1 + 0.25(-2(1) + 6) = 1 + 0.25(4) = 1 + 1 = 2$.
    *   $x_2 = 0.5$: $y_2 = y_1 + h f(x_1, y_1) = 2 + 0.25(-2(2) + 6) = 2 + 0.25(2) = 2 + 0.5 = 2.5$.
    *   $x_3 = 0.75$: $y_3 = y_2 + h f(x_2, y_2) = 2.5 + 0.25(-2(2.5) + 6) = 2.5 + 0.25(1) = 2.5 + 0.25 = 2.75$.
    *   $x_4 = 1.0$: $y_4 = y_3 + h f(x_3, y_3) = 2.75 + 0.25(-2(2.75) + 6) = 2.75 + 0.25(0.5) = 2.75 + 0.125 = 2.875$.

    Approximate solution at $x=1$ is $y(1) \approx 2.875$.
    (The analytical solution is $y(x) = 3 - 2e^{-2x}$, so $y(1) = 3 - 2e^{-2} \approx 2.729$).

*   **Accuracy:** Euler's method is first-order accurate ($O(h)$). This means that halving the step size will approximately halve the error.

#### 3.2. Higher-Order Methods (e.g., Runge-Kutta Methods)

While not strictly FDM in the sense of directly replacing derivatives with algebraic forms for higher-order ODEs, methods like Runge-Kutta can be viewed as more sophisticated ways to approximate the solution at the next step using weighted averages of function evaluations at different points within the interval. For example, the classic fourth-order Runge-Kutta (RK4) method is widely used.

#### 3.3. Multistep Methods (e.g., Adams-Bashforth, Adams-Moulton)

These methods use information from previous steps to compute the solution at the current step, thus achieving higher accuracy with potentially larger step sizes. They also utilize finite difference approximations implicitly when deriving the formulas.

---

### 4. Solving Boundary Value Problems (BVPs) using FDM

A BVP is an ODE where conditions are specified at two or more points in the domain. For a second-order ODE, these are typically boundary conditions at the start and end of the interval.

**General form of a second-order ODE:**
$\frac{d^2y}{dx^2} + p(x) \frac{dy}{dx} + q(x) y = r(x)$, with boundary conditions $y(a) = y_a$ and $y(b) = y_b$.

#### 4.1. Discretization of the ODE

We discretize the interval $[a, b]$ into $N$ segments, creating $N+1$ points $x_0, x_1, \dots, x_N$, where $x_0 = a$ and $x_N = b$. The step size is $h = (b-a)/N$.

Substitute the finite difference approximations for the derivatives into the ODE at an interior point $x_i$:

$\frac{y_{i+1} - 2y_i + y_{i-1}}{h^2} + p(x_i) \frac{y_{i+1} - y_{i-1}}{2h} + q(x_i) y_i = r(x_i)$

Rearrange the terms to group $y_{i-1}$, $y_i$, and $y_{i+1}$:

$\frac{1}{h^2} y_{i-1} + \left(-\frac{2}{h^2} + q(x_i)\right) y_i + \frac{1}{h^2} y_{i+1} + p(x_i) \frac{1}{2h} y_{i+1} - p(x_i) \frac{1}{2h} y_{i-1} = r(x_i)$

Combine coefficients for $y_{i-1}$ and $y_{i+1}$:

$\left(\frac{1}{h^2} - \frac{p(x_i)}{2h}\right) y_{i-1} + \left(-\frac{2}{h^2} + q(x_i)\right) y_i + \left(\frac{1}{h^2} + \frac{p(x_i)}{2h}\right) y_{i+1} = r(x_i)$

This equation holds for each interior point $i = 1, 2, \dots, N-1$.

#### 4.2. System of Algebraic Equations

For $i = 1$:
$\left(\frac{1}{h^2} - \frac{p(x_1)}{2h}\right) y_0 + \left(-\frac{2}{h^2} + q(x_1)\right) y_1 + \left(\frac{1}{h^2} + \frac{p(x_1)}{2h}\right) y_2 = r(x_1)$

Since $y_0 = y(a) = y_a$ is known, this equation becomes:
$\left(-\frac{2}{h^2} + q(x_1)\right) y_1 + \left(\frac{1}{h^2} + \frac{p(x_1)}{2h}\right) y_2 = r(x_1) - \left(\frac{1}{h^2} - \frac{p(x_1)}{2h}\right) y_a$

For $i = 2, 3, \dots, N-2$:
$\left(\frac{1}{h^2} - \frac{p(x_i)}{2h}\right) y_{i-1} + \left(-\frac{2}{h^2} + q(x_i)\right) y_i + \left(\frac{1}{h^2} + \frac{p(x_i)}{2h}\right) y_{i+1} = r(x_i)$

For $i = N-1$:
$\left(\frac{1}{h^2} - \frac{p(x_{N-1})}{2h}\right) y_{N-2} + \left(-\frac{2}{h^2} + q(x_{N-1})\right) y_{N-1} + \left(\frac{1}{h^2} + \frac{p(x_{N-1})}{2h}\right) y_N = r(x_{N-1})$

Since $y_N = y(b) = y_b$ is known, this equation becomes:
$\left(\frac{1}{h^2} - \frac{p(x_{N-1})}{2h}\right) y_{N-2} + \left(-\frac{2}{h^2} + q(x_{N-1})\right) y_{N-1} = r(x_{N-1}) - \left(\frac{1}{h^2} + \frac{p(x_{N-1})}{2h}\right) y_b$

We now have a system of $N-1$ linear algebraic equations for the $N-1$ unknown values $y_1, y_2, \dots, y_{N-1}$. This system can be represented in matrix form $AY = B$, where $A$ is a tridiagonal matrix.

#### 4.3. Matrix Formulation (Tridiagonal System)

The system of equations typically takes the form:

$c_{i} y_{i-1} + b_{i} y_i + d_{i} y_{i+1} = f_i$

where:
*   $b_1 = -\frac{2}{h^2} + q(x_1)$
*   $d_1 = \frac{1}{h^2} + \frac{p(x_1)}{2h}$
*   $f_1 = r(x_1) - \left(\frac{1}{h^2} - \frac{p(x_1)}{2h}\right) y_a$

For $i = 2, \dots, N-2$:
*   $c_i = \frac{1}{h^2} - \frac{p(x_i)}{2h}$
*   $b_i = -\frac{2}{h^2} + q(x_i)$
*   $d_i = \frac{1}{h^2} + \frac{p(x_i)}{2h}$
*   $f_i = r(x_i)$

For $i = N-1$:
*   $c_{N-1} = \frac{1}{h^2} - \frac{p(x_{N-1})}{2h}$
*   $b_{N-1} = -\frac{2}{h^2} + q(x_{N-1})$
*   $f_{N-1} = r(x_{N-1}) - \left(\frac{1}{h^2} + \frac{p(x_{N-1})}{2h}\right) y_b$

This system can be solved efficiently using techniques like the Thomas Algorithm (a specialized form of Gaussian elimination for tridiagonal systems).

#### 4.4. Example: Linear BVP

Solve $\frac{d^2y}{dx^2} - y = 0$, with $y(0) = 0$ and $y(1) = 1$, using FDM with $N=4$ intervals.

*   $p(x) = 0$, $q(x) = -1$, $r(x) = 0$.
*   $a=0, b=1, y(0)=0, y(1)=1$.
*   $N=4$, so $h = (1-0)/4 = 0.25$.
*   The grid points are $x_0=0, x_1=0.25, x_2=0.5, x_3=0.75, x_4=1$.
*   We need to solve for $y_1, y_2, y_3$.

The discretized equation is:
$\frac{y_{i+1} - 2y_i + y_{i-1}}{h^2} - y_i = 0$
Multiply by $h^2$:
$y_{i+1} - 2y_i + y_{i-1} - h^2 y_i = 0$
$y_{i-1} - (2+h^2) y_i + y_{i+1} = 0$

Substitute $h=0.25$, $h^2 = 0.0625$:
$y_{i-1} - (2+0.0625) y_i + y_{i+1} = 0$
$y_{i-1} - 2.0625 y_i + y_{i+1} = 0$

For $i=1$: $y_0 - 2.0625 y_1 + y_2 = 0$. Since $y_0 = 0$:
$-2.0625 y_1 + y_2 = 0$ (Eq 1)

For $i=2$: $y_1 - 2.0625 y_2 + y_3 = 0$ (Eq 2)

For $i=3$: $y_2 - 2.0625 y_3 + y_4 = 0$. Since $y_4 = 1$:
$y_2 - 2.0625 y_3 = -1$ (Eq 3)

Now we have a system of 3 equations for $y_1, y_2, y_3$:
1.  $-2.0625 y_1 + 1 y_2 + 0 y_3 = 0$
2.  $1 y_1 - 2.0625 y_2 + 1 y_3 = 0$
3.  $0 y_1 + 1 y_2 - 2.0625 y_3 = -1$

Solving this system (e.g., using substitution or matrix methods) yields:
$y_1 \approx 0.1896$
$y_2 \approx 0.3892$
$y_3 \approx 0.5888$

The approximate solution is $(0, 0), (0.25, 0.1896), (0.5, 0.3892), (0.75, 0.5888), (1, 1)$.
(The analytical solution is $y(x) = \frac{\sinh(x)}{\sinh(1)}$. For example, $y(0.25) = \frac{\sinh(0.25)}{\sinh(1)} \approx \frac{0.2526}{1.1752} \approx 0.2150$).

---

**Important Point to Remember:** For BVPs, FDM transforms the ODE into a system of linear algebraic equations, which is often tridiagonal and can be solved efficiently.

---

### 5. Higher-Order Finite Difference Schemes

To improve accuracy, higher-order finite difference approximations can be used. These involve using more points in the stencil or applying the differencing process multiple times.

*   **Fourth-order approximation for $y''$**: Requires evaluating $y$ at $x_{i-2}$ and $x_{i+2}$ as well.
    $y''(x_i) \approx \frac{-y_{i-2} + 16y_{i-1} - 30y_i + 16y_{i+1} - y_{i+2}}{12h^2} + O(h^4)$

**Reference:** Chapra and Canale (6th Ed.) discusses Taylor series expansions and deriving various finite difference formulas extensively in Chapter 26. Balagurusamy also covers these approximations in his book.

---

### 6. Accuracy and Stability

*   **Truncation Error:** The error introduced by approximating derivatives with finite differences. It depends on the step size $h$ and the order of the approximation.
*   **Convergence:** A numerical method converges if the numerical solution approaches the exact solution as the step size $h \to 0$.
*   **Stability:** A numerical method is stable if small errors introduced at one step do not grow uncontrollably in subsequent steps. This is particularly crucial for IVPs. For explicit methods (like Forward Euler), stability can impose a restriction on the step size (e.g., $h \le 2/\lambda$ for $\frac{dy}{dt} = \lambda y$). Implicit methods are often more stable.

**Reference:** Jain, Iyengar, and Jain, and Gerald and Wheatly delve deeply into the analysis of accuracy and stability of numerical methods for ODEs, including FDM.

---

### 7. Applications in Engineering

The finite difference method is widely used for solving ODEs in various engineering disciplines:

*   **Heat Transfer:** Solving the heat conduction equation (which can be an ODE or PDE).
*   **Structural Mechanics:** Analyzing the deflection of beams under load.
*   **Control Systems:** Simulating the dynamic response of systems.
*   **Chemical Engineering:** Modeling reaction kinetics and mass transfer processes.
*   **Fluid Mechanics:** Solving simplified flow problems.

---

### 8. Practice Questions and Exercises

1.  **Derive the backward difference approximation for the first derivative $f'(x_i)$ using Taylor series expansion.**
    *   **Answer:** Starting from $f(x_{i-1}) = f(x_i) - h f'(x_i) + \frac{h^2}{2!} f''(x_i) - \dots$, rearrange to get $f'(x_i) \approx \frac{f(x_i) - f(x_{i-1})}{h}$. This is $O(h)$.

2.  **Solve the IVP $\frac{dy}{dx} = x + y$, with $y(0) = 1$, from $x=0$ to $x=0.4$ using Euler's method with a step size of $h=0.2$.**
    *   **Answer:**
        *   $x_0 = 0, y_0 = 1$.
        *   $x_1 = 0.2$: $y_1 = y_0 + h(x_0 + y_0) = 1 + 0.2(0 + 1) = 1 + 0.2 = 1.2$.
        *   $x_2 = 0.4$: $y_2 = y_1 + h(x_1 + y_1) = 1.2 + 0.2(0.2 + 1.2) = 1.2 + 0.2(1.4) = 1.2 + 0.28 = 1.48$.
        *   So, $y(0.4) \approx 1.48$.

3.  **Consider the BVP $\frac{d^2y}{dx^2} + y = 0$, with $y(0) = 0$ and $y(\pi/2) = 1$. Use the finite difference method with $N=4$ intervals to approximate the solution.**
    *   **Hint:** The ODE can be written as $y'' + y = 0$. The discretized equation using central differences is $\frac{y_{i+1} - 2y_i + y_{i-1}}{h^2} + y_i = 0$.
    *   **Answer:**
        *   $a=0, b=\pi/2$. $N=4$, so $h = \frac{\pi/2}{4} = \frac{\pi}{8}$.
        *   Points: $x_0=0, x_1=\pi/8, x_2=2\pi/8, x_3=3\pi/8, x_4=4\pi/8=\pi/2$.
        *   $y_0=0, y_4=1$.
        *   Discretized equation: $\frac{y_{i+1} - 2y_i + y_{i-1}}{(\pi/8)^2} + y_i = 0$
        *   $y_{i+1} - 2y_i + y_{i-1} + (\pi/8)^2 y_i = 0$
        *   $y_{i-1} + (-2 + (\pi/8)^2) y_i + y_{i+1} = 0$
        *   $(\pi/8)^2 \approx (0.3927)^2 \approx 0.1542$.
        *   $y_{i-1} + (-2 + 0.1542) y_i + y_{i+1} = 0$
        *   $y_{i-1} - 1.8458 y_i + y_{i+1} = 0$
        *   For $i=1$: $y_0 - 1.8458 y_1 + y_2 = 0$. Since $y_0=0$: $-1.8458 y_1 + y_2 = 0$ (Eq 1)
        *   For $i=2$: $y_1 - 1.8458 y_2 + y_3 = 0$ (Eq 2)
        *   For $i=3$: $y_2 - 1.8458 y_3 + y_4 = 0$. Since $y_4=1$: $y_2 - 1.8458 y_3 = -1$ (Eq 3)
        *   Solving this system gives: $y_1 \approx 0.1596, y_2 \approx 0.2947, y_3 \approx 0.5400$.

---

### 9. Important Points to Remember

*   **Taylor Series:** The foundation for deriving finite difference approximations.
*   **Stencil:** The set of grid points used to approximate a derivative at a point.
*   **Forward, Backward, Central Differences:** Understand their derivation, accuracy ($O(h)$ vs $O(h^2)$), and usage. Central difference is generally preferred for accuracy when possible.
*   **IVPs:** Solved iteratively, marching from an initial condition. Euler's method is the simplest but has low accuracy. Higher-order methods exist.
*   **BVPs:** Transformed into a system of algebraic equations, often tridiagonal, solved using matrix methods (e.g., Thomas Algorithm).
*   **Step Size (h):** Smaller $h$ generally leads to higher accuracy but increases computational cost and can sometimes lead to stability issues with explicit methods.
*   **Accuracy vs. Stability:** These are crucial considerations when choosing and implementing numerical methods.

---

This concludes the notes on the Finite Difference Method for solving ODEs. The subsequent modules will build upon these concepts to cover other numerical techniques for differential equations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
