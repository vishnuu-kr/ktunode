---
title: "Crank Nicolson method"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 4: Numerical solution of partial differential equation"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646c8"
status: "completed"
scrapedAt: "2026-05-20T18:23:28.133Z"
---
# Module 4: Numerical Solution of Partial Differential Equations - Crank-Nicolson Method

## Introduction

Partial Differential Equations (PDEs) are fundamental to describing many physical phenomena in engineering and science, such as heat transfer, fluid dynamics, and wave propagation. Solving PDEs analytically can be challenging or impossible for complex geometries and boundary conditions. Numerical methods provide powerful tools to approximate solutions to these equations. This module focuses on one such method for solving time-dependent PDEs: the **Crank-Nicolson method**.

## Learning Outcomes

Upon completion of this topic, you will be able to:

*   Understand the theoretical basis of the Crank-Nicolson method for solving time-dependent PDEs.
*   Derive the Crank-Nicolson scheme for a given PDE.
*   Apply the Crank-Nicolson method to solve one-dimensional parabolic PDEs (e.g., the heat equation).
*   Analyze the stability and accuracy of the Crank-Nicolson method.
*   Implement the Crank-Nicolson method in a programming language.
*   Compare the Crank-Nicolson method with other numerical methods like Forward Euler and Backward Euler.

## Key Concepts and Definitions

### 1. Partial Differential Equations (PDEs)

A PDE is an equation involving partial derivatives of an unknown function with respect to two or more independent variables.

*   **Example:** The 1D Heat Equation: $\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$
    *   $u(x, t)$: the dependent variable (e.g., temperature)
    *   $x$: spatial variable
    *   $t$: temporal variable
    *   $\alpha$: thermal diffusivity (a constant)

### 2. Discretization

Numerical solutions to PDEs involve discretizing both the spatial and temporal domains into a grid of points.

*   **Spatial Discretization:** The domain $[a, b]$ is divided into $N$ subintervals of width $\Delta x$. The spatial grid points are $x_i = a + i \Delta x$, where $i = 0, 1, \ldots, N$.
*   **Temporal Discretization:** The time domain is divided into steps of size $\Delta t$. The time points are $t_j = j \Delta t$, where $j = 0, 1, 2, \ldots$.
*   **Notation:** $u(x_i, t_j)$ is approximated by $u_i^j$.

### 3. Finite Difference Approximations

We use finite difference approximations to replace the partial derivatives in the PDE.

*   **First-order derivative in time (Forward Difference):**
    $\frac{\partial u}{\partial t} \approx \frac{u_i^{j+1} - u_i^j}{\Delta t}$
*   **Second-order derivative in space (Central Difference):**
    $\frac{\partial^2 u}{\partial x^2} \approx \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2}$

### 4. Explicit vs. Implicit Methods

When discretizing time derivatives, we can have explicit or implicit schemes.

*   **Explicit Methods:** The unknown values at the new time step ($j+1$) are computed directly from known values at the previous time step ($j$).
    *   *Example:* Forward Euler method for the heat equation:
        $\frac{u_i^{j+1} - u_i^j}{\Delta t} = \alpha \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2}$
        $u_i^{j+1} = u_i^j + r (u_{i+1}^j - 2u_i^j + u_{i-1}^j)$, where $r = \frac{\alpha \Delta t}{(\Delta x)^2}$.
    *   *Pros:* Easy to implement, computationally inexpensive per time step.
    *   *Cons:* Often have strict stability constraints (e.g., $r \leq 0.5$ for the heat equation), limiting the time step size.

*   **Implicit Methods:** The unknown values at the new time step ($j+1$) depend on other unknown values at the same time step. This leads to a system of algebraic equations that must be solved at each time step.
    *   *Example:* Backward Euler method for the heat equation:
        $\frac{u_i^{j+1} - u_i^j}{\Delta t} = \alpha \frac{u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1}}{(\Delta x)^2}$
        This requires solving a system of linear equations.
    *   *Pros:* Generally unconditionally stable, allowing larger time steps.
    *   *Cons:* More complex to implement, computationally more expensive per time step due to solving a system of equations.

### 5. The Crank-Nicolson Method

The Crank-Nicolson method is an **implicit finite difference method** that offers a balance between stability and accuracy. It approximates the PDE by averaging the spatial derivatives at the current and next time steps. This leads to a second-order accuracy in both time and space.

#### Derivation of the Crank-Nicolson Scheme for the 1D Heat Equation

Consider the 1D Heat Equation: $\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$

The Crank-Nicolson method approximates the time derivative using a central difference, and the spatial derivative using an average of the central differences at time steps $j$ and $j+1$.

*   **Time Derivative:**
    $\frac{\partial u}{\partial t} \approx \frac{u_i^{j+1} - u_i^j}{\Delta t}$ (This is the standard approach, but Crank-Nicolson is often derived by averaging the spatial terms.)

Let's consider the PDE at an intermediate time level $\tilde{t} = t_j + \frac{\Delta t}{2}$.
Alternatively, and more commonly for the derivation:
We approximate the spatial derivative term at $t_{j+1/2}$ by averaging its values at $t_j$ and $t_{j+1}$:

$\frac{\partial^2 u}{\partial x^2} \approx \frac{1}{2} \left[ \left(\frac{\partial^2 u}{\partial x^2}\right)^j + \left(\frac{\partial^2 u}{\partial x^2}\right)^{j+1} \right]$

Using central difference approximations for the spatial derivatives:
$\left(\frac{\partial^2 u}{\partial x^2}\right)^j \approx \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2}$
$\left(\frac{\partial^2 u}{\partial x^2}\right)^{j+1} \approx \frac{u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1}}{(\Delta x)^2}$

Substituting these into the averaged spatial derivative:
$\frac{\partial^2 u}{\partial x^2} \approx \frac{1}{2} \left[ \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2} + \frac{u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1}}{(\Delta x)^2} \right]$

Now, using the forward difference for the time derivative:
$\frac{u_i^{j+1} - u_i^j}{\Delta t} \approx \frac{1}{2} \left[ \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2} + \frac{u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1}}{(\Delta x)^2} \right]$

Multiply by $\Delta t$:
$u_i^{j+1} - u_i^j = \frac{\alpha \Delta t}{2 (\Delta x)^2} \left[ (u_{i+1}^j - 2u_i^j + u_{i-1}^j) + (u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1}) \right]$

Let $r = \frac{\alpha \Delta t}{(\Delta x)^2}$.
$u_i^{j+1} - u_i^j = \frac{r}{2} \left[ (u_{i+1}^j - 2u_i^j + u_{i-1}^j) + (u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1}) \right]$

Rearrange to group terms at time step $j+1$ on the left side and terms at time step $j$ on the right side:
$u_i^{j+1} - \frac{r}{2} (u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1}) = u_i^j + \frac{r}{2} (u_{i+1}^j - 2u_i^j + u_{i-1}^j)$

This is the **Crank-Nicolson scheme for the 1D Heat Equation**.

It can be written in a more compact form:
$-\frac{r}{2} u_{i-1}^{j+1} + (1+r) u_i^{j+1} - \frac{r}{2} u_{i+1}^{j+1} = \frac{r}{2} u_{i-1}^j + (1-r) u_i^j + \frac{r}{2} u_{i+1}^j$

This equation relates the unknown values at grid point $i$ and time step $j+1$ to known values at time step $j$ and neighboring spatial points. For each time step, this generates a system of linear equations for the unknowns $u_0^{j+1}, u_1^{j+1}, \ldots, u_N^{j+1}$.

#### The System of Linear Equations

For an interior grid point $i$ (where $1 \leq i \leq N-1$), the Crank-Nicolson equation is:
$-\frac{r}{2} u_{i-1}^{j+1} + (1+r) u_i^{j+1} - \frac{r}{2} u_{i+1}^{j+1} = \frac{r}{2} u_{i-1}^j + (1-r) u_i^j + \frac{r}{2} u_{i+1}^j$

Let $RHS_i^j = \frac{r}{2} u_{i-1}^j + (1-r) u_i^j + \frac{r}{2} u_{i+1}^j$ (the right-hand side).

The system of equations for the unknowns $u_0^{j+1}, u_1^{j+1}, \ldots, u_N^{j+1}$ at time step $j+1$ is:

For $i = 1$:
$-\frac{r}{2} u_{0}^{j+1} + (1+r) u_1^{j+1} - \frac{r}{2} u_{2}^{j+1} = RHS_1^j$

For $i = 2$:
$-\frac{r}{2} u_{1}^{j+1} + (1+r) u_2^{j+1} - \frac{r}{2} u_{3}^{j+1} = RHS_2^j$

...

For $i = N-1$:
$-\frac{r}{2} u_{N-2}^{j+1} + (1+r) u_{N-1}^{j+1} - \frac{r}{2} u_{N}^{j+1} = RHS_{N-1}^j$

This system needs to be solved for $u_1^{j+1}, \ldots, u_{N-1}^{j+1}$. The boundary conditions $u_0^{j+1}$ and $u_N^{j+1}$ are typically known from the problem statement (e.g., Dirichlet boundary conditions).

The system can be written in matrix form as $A \mathbf{u}^{j+1} = B \mathbf{u}^j$, where:

*   $\mathbf{u}^{j+1} = \begin{bmatrix} u_1^{j+1} \\ u_2^{j+1} \\ \vdots \\ u_{N-1}^{j+1} \end{bmatrix}$
*   $\mathbf{u}^j = \begin{bmatrix} u_1^j \\ u_2^j \\ \vdots \\ u_{N-1}^j \end{bmatrix}$

The matrix $A$ is a tridiagonal matrix:
$A = \begin{bmatrix}
(1+r) & -r/2 & 0 & \cdots & 0 \\
-r/2 & (1+r) & -r/2 & \cdots & 0 \\
0 & -r/2 & (1+r) & \cdots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & (1+r)
\end{bmatrix}$

The matrix $B$ is also a tridiagonal matrix:
$B = \begin{bmatrix}
(1-r) & r/2 & 0 & \cdots & 0 \\
r/2 & (1-r) & r/2 & \cdots & 0 \\
0 & r/2 & (1-r) & \cdots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & (1-r)
\end{bmatrix}$

Solving this system for $\mathbf{u}^{j+1}$ can be done efficiently using methods for tridiagonal systems, such as the Thomas Algorithm.

### 6. Stability and Accuracy

*   **Stability:** The Crank-Nicolson method is **unconditionally stable**. This means it will not blow up regardless of the choice of $\Delta t$, unlike the explicit Forward Euler method. This is a significant advantage, allowing for larger time steps without sacrificing stability.
*   **Accuracy:** The Crank-Nicolson method has a truncation error of $O(\Delta t^2, (\Delta x)^2)$.
    *   It is second-order accurate in time ($\Delta t^2$).
    *   It is second-order accurate in space ($(\Delta x)^2$).
    This makes it significantly more accurate than the Forward Euler (first-order in time) and Backward Euler (first-order in time) methods for the same grid spacing.

**Reference:** Chapra & Canale (6th Ed.) discusses stability and accuracy of finite difference methods extensively. They highlight the unconditional stability of implicit methods like Crank-Nicolson and its second-order temporal accuracy.

### 7. Implementation Considerations

*   **Tridiagonal Matrix Solvers:** The Thomas algorithm (a specialized version of Gaussian elimination) is highly efficient for solving tridiagonal systems.
*   **Boundary Conditions:**
    *   **Dirichlet Boundary Conditions:** $u(0, t) = f(t)$ and $u(L, t) = g(t)$ (or fixed values). These are directly incorporated into the system of equations. For example, if $u_0^{j+1}$ and $u_N^{j+1}$ are known, they are moved to the right-hand side.
    *   **Neumann Boundary Conditions:** Involve derivatives, e.g., $\frac{\partial u}{\partial x}(0, t) = h(t)$. These require using finite difference approximations at the boundaries, which can modify the first and last equations of the tridiagonal system.

**Reference:** Gupta S.K. and Balagurusamy provide practical implementation details and algorithms for solving systems arising from PDE discretizations.

## Example: Solving the 1D Heat Equation with Crank-Nicolson

**Problem:** Solve the 1D heat equation $\frac{\partial u}{\partial t} = \frac{\partial^2 u}{\partial x^2}$ for $0 \leq x \leq 1$ and $0 \leq t \leq T$.

**Initial Condition (IC):** $u(x, 0) = \sin(\pi x)$ for $0 \leq x \leq 1$.

**Boundary Conditions (BCs):**
*   $u(0, t) = 0$ for $t > 0$ (Dirichlet BC at $x=0$)
*   $u(1, t) = 0$ for $t > 0$ (Dirichlet BC at $x=1$)

**Parameters:**
*   $\alpha = 1$
*   Spatial domain length $L = 1$.
*   Number of spatial segments $N = 10$.
*   Spatial step size $\Delta x = L/N = 1/10 = 0.1$.
*   Time step size $\Delta t = 0.01$.
*   Total time $T = 0.5$.

**Calculate $r$:**
$r = \frac{\alpha \Delta t}{(\Delta x)^2} = \frac{1 \times 0.01}{(0.1)^2} = \frac{0.01}{0.01} = 1$.

**The Crank-Nicolson Scheme:**
$-\frac{1}{2} u_{i-1}^{j+1} + (1+1) u_i^{j+1} - \frac{1}{2} u_{i+1}^{j+1} = \frac{1}{2} u_{i-1}^j + (1-1) u_i^j + \frac{1}{2} u_{i+1}^j$
$-\frac{1}{2} u_{i-1}^{j+1} + 2 u_i^{j+1} - \frac{1}{2} u_{i+1}^{j+1} = \frac{1}{2} u_{i-1}^j + \frac{1}{2} u_{i+1}^j$

**System of Equations for interior points ($i = 1, 2, \ldots, 9$):**
For $i=1$: $-\frac{1}{2} u_{0}^{j+1} + 2 u_1^{j+1} - \frac{1}{2} u_2^{j+1} = \frac{1}{2} u_{0}^j + \frac{1}{2} u_2^j$
For $i=2$: $-\frac{1}{2} u_1^{j+1} + 2 u_2^{j+1} - \frac{1}{2} u_3^{j+1} = \frac{1}{2} u_1^j + \frac{1}{2} u_3^j$
...
For $i=9$: $-\frac{1}{2} u_8^{j+1} + 2 u_9^{j+1} - \frac{1}{2} u_{10}^{j+1} = \frac{1}{2} u_8^j + \frac{1}{2} u_{10}^j$

**Incorporating Boundary Conditions:**
Since $u_0^{j+1} = 0$ and $u_{10}^{j+1} = 0$ (from BCs), the equations become:

For $i=1$: $2 u_1^{j+1} - \frac{1}{2} u_2^{j+1} = \frac{1}{2} u_{0}^j + \frac{1}{2} u_2^j$ (Note: $u_0^j$ is known from initial condition, or it's $0$ if $i=0$ is always 0)
A more general way to handle BCs is to substitute them into the equations directly.

Let's rewrite the system for the unknowns $\mathbf{u}^{j+1} = [u_1^{j+1}, u_2^{j+1}, \ldots, u_9^{j+1}]^T$:

The general equation is:
$-\frac{r}{2} u_{i-1}^{j+1} + (1+r) u_i^{j+1} - \frac{r}{2} u_{i+1}^{j+1} = \frac{r}{2} u_{i-1}^j + (1-r) u_i^j + \frac{r}{2} u_{i+1}^j$

With $r=1$:
$-\frac{1}{2} u_{i-1}^{j+1} + 2 u_i^{j+1} - \frac{1}{2} u_{i+1}^{j+1} = \frac{1}{2} u_{i-1}^j + \frac{1}{2} u_{i+1}^j$

For $i=1$: $-\frac{1}{2} u_{0}^{j+1} + 2 u_1^{j+1} - \frac{1}{2} u_2^{j+1} = \frac{1}{2} u_{0}^j + \frac{1}{2} u_2^j$
Substitute $u_0^{j+1} = 0$:
$2 u_1^{j+1} - \frac{1}{2} u_2^{j+1} = \frac{1}{2} u_{0}^j + \frac{1}{2} u_2^j$

For $i=2, \ldots, 8$:
$-\frac{1}{2} u_{i-1}^{j+1} + 2 u_i^{j+1} - \frac{1}{2} u_{i+1}^{j+1} = \frac{1}{2} u_{i-1}^j + \frac{1}{2} u_{i+1}^j$

For $i=9$: $-\frac{1}{2} u_8^{j+1} + 2 u_9^{j+1} - \frac{1}{2} u_{10}^{j+1} = \frac{1}{2} u_8^j + \frac{1}{2} u_{10}^j$
Substitute $u_{10}^{j+1} = 0$:
$-\frac{1}{2} u_8^{j+1} + 2 u_9^{j+1} = \frac{1}{2} u_8^j + \frac{1}{2} u_{10}^j$

The matrix $A$ for the system $A \mathbf{u}^{j+1} = RHS$ is:
(Remember, $\mathbf{u}^{j+1}$ contains $u_1^{j+1}$ to $u_9^{j+1}$)

$A = \begin{bmatrix}
2 & -0.5 & 0 & \cdots & 0 \\
-0.5 & 2 & -0.5 & \cdots & 0 \\
0 & -0.5 & 2 & \cdots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & 2
\end{bmatrix}$ (This is a 9x9 matrix)

The $RHS$ vector is calculated at each time step $j$.
For $i=1$: $RHS_1 = 2 u_1^j - \frac{1}{2} u_2^j + \frac{1}{2} u_0^j$ (since $u_0^{j+1}=0$, the $-r/2 u_0^{j+1}$ term is moved to RHS)
Actually, let's use the general form:
$A \mathbf{u}^{j+1} = B \mathbf{u}^j$

$A = \begin{bmatrix}
1+r & -r/2 & 0 & \dots \\
-r/2 & 1+r & -r/2 & \dots \\
\vdots & \ddots & \ddots & \ddots \\
\dots & & -r/2 & 1+r
\end{bmatrix}$

$B = \begin{bmatrix}
1-r & r/2 & 0 & \dots \\
r/2 & 1-r & r/2 & \dots \\
\vdots & \ddots & \ddots & \ddots \\
\dots & & r/2 & 1-r
\end{bmatrix}$

With $r=1$:
$A = \begin{bmatrix}
2 & -0.5 & 0 & \dots \\
-0.5 & 2 & -0.5 & \dots \\
\vdots & \ddots & \ddots & \ddots \\
\dots & & -0.5 & 2
\end{bmatrix}$

$B = \begin{bmatrix}
0 & 0.5 & 0 & \dots \\
0.5 & 0 & 0.5 & \dots \\
\vdots & \ddots & \ddots & \ddots \\
\dots & & 0.5 & 0
\end{bmatrix}$

Let's consider the boundary conditions:
$u_0^j = 0$ and $u_N^j = 0$ for all $j$.

The system $A \mathbf{u}^{j+1} = RHS^j$ where $\mathbf{u}^{j+1}$ are the internal nodes ($u_1^{j+1}, \dots, u_{N-1}^{j+1}$).

The $i$-th equation ($1 \le i \le N-1$):
$-\frac{r}{2} u_{i-1}^{j+1} + (1+r) u_i^{j+1} - \frac{r}{2} u_{i+1}^{j+1} = \frac{r}{2} u_{i-1}^j + (1-r) u_i^j + \frac{r}{2} u_{i+1}^j$

When $i=1$, $u_{i-1}^{j+1} = u_0^{j+1} = 0$. The term $-\frac{r}{2} u_0^{j+1}$ on the LHS is zero.
The $RHS$ for $i=1$ needs to account for $u_0^j$ and $u_N^j$ values if they are non-zero.
With $u_0^j = 0$ and $u_N^j = 0$:
$RHS_i^j = \frac{r}{2} u_{i-1}^j + (1-r) u_i^j + \frac{r}{2} u_{i+1}^j$

The matrix $A$ for the internal points $1, \ldots, N-1$:
The first row of $A$ corresponds to $i=1$. The equation is:
$(1+r)u_1^{j+1} - \frac{r}{2} u_2^{j+1} = \frac{r}{2} u_0^j + (1-r)u_1^j + \frac{r}{2} u_2^j$.
Since $u_0^j = 0$, the $RHS$ term $\frac{r}{2} u_0^j$ vanishes.

The last row of $A$ corresponds to $i=N-1$. The equation is:
$-\frac{r}{2} u_{N-2}^{j+1} + (1+r) u_{N-1}^{j+1} = \frac{r}{2} u_{N-2}^j + (1-r) u_{N-1}^j + \frac{r}{2} u_N^j$.
Since $u_N^j = 0$, the $RHS$ term $\frac{r}{2} u_N^j$ vanishes.

So, with $u_0^j=u_N^j=0$:
$A$ is the tridiagonal matrix with $(1+r)$ on the diagonal and $-r/2$ on the super/sub-diagonals.
$B$ is the tridiagonal matrix with $(1-r)$ on the diagonal and $r/2$ on the super/sub-diagonals.
The system to solve at each time step is $A \mathbf{u}^{j+1} = B \mathbf{u}^j$.

**Initial Step:**
$t=0$: $\mathbf{u}^0 = [\sin(\pi \cdot 0.1), \sin(\pi \cdot 0.2), \ldots, \sin(\pi \cdot 0.9)]^T$.

**Next Step ($j=0$ to $j=1$):**
Calculate $B \mathbf{u}^0$.
Solve $A \mathbf{u}^1 = B \mathbf{u}^0$ for $\mathbf{u}^1$.

Repeat for subsequent time steps.

## Practice Questions and Exercises

**Question 1:**
The Crank-Nicolson method is known for its stability. What type of stability does it possess (conditional or unconditional)? How does this compare to the Forward Euler method?

**Answer 1:**
The Crank-Nicolson method is **unconditionally stable**, meaning it remains stable for any time step size $\Delta t$. The Forward Euler method, on the other hand, is **conditionally stable** and requires $\Delta t$ to be below a certain limit (e.g., $\Delta t \leq \frac{(\Delta x)^2}{2\alpha}$ for the heat equation) to avoid instability.

**Question 2:**
What is the order of accuracy of the Crank-Nicolson method in time and space for the heat equation?

**Answer 2:**
The Crank-Nicolson method is second-order accurate in both time ($O(\Delta t^2)$) and space ($O((\Delta x)^2)$).

**Question 3:**
Consider the 1D heat equation $\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$ discretized using the Crank-Nicolson method. Write down the discretized equation for an interior point $i$.

**Answer 3:**
The Crank-Nicolson discretized equation for an interior point $i$ is:
$-\frac{r}{2} u_{i-1}^{j+1} + (1+r) u_i^{j+1} - \frac{r}{2} u_{i+1}^{j+1} = \frac{r}{2} u_{i-1}^j + (1-r) u_i^j + \frac{r}{2} u_{i+1}^j$
where $r = \frac{\alpha \Delta t}{(\Delta x)^2}$.

**Question 4 (Conceptual):**
Why does the Crank-Nicolson method lead to a system of linear equations that needs to be solved at each time step, unlike explicit methods?

**Answer 4:**
The Crank-Nicolson method uses a weighted average of the spatial derivatives at the current time step ($j$) and the next time step ($j+1$). This means that the unknown values at time step $j+1$ ($u_i^{j+1}$) are coupled with their spatial neighbors at the same time step ($u_{i-1}^{j+1}, u_{i+1}^{j+1}$). This coupling results in a system of simultaneous equations that must be solved to find the unknown values at the new time step. Explicit methods, in contrast, express the unknown value at a point solely in terms of known values from the previous time step, allowing direct computation.

**Question 5 (Implementation Focus):**
When solving the system of equations arising from the Crank-Nicolson method, what is the typical structure of the matrix involved, and what efficient algorithm is commonly used to solve it?

**Answer 5:**
The matrix involved is typically a **tridiagonal matrix**. An efficient algorithm commonly used to solve systems with tridiagonal matrices is the **Thomas Algorithm**, which is a specialized form of Gaussian elimination.

## Summary and Important Points to Remember

*   **Crank-Nicolson Method:** An implicit finite difference method for solving time-dependent PDEs, particularly parabolic equations like the heat equation.
*   **Averaging Spatial Derivatives:** Key feature is averaging the spatial derivative terms between the current and next time steps.
*   **Scheme:**
    $-\frac{r}{2} u_{i-1}^{j+1} + (1+r) u_i^{j+1} - \frac{r}{2} u_{i+1}^{j+1} = \frac{r}{2} u_{i-1}^j + (1-r) u_i^j + \frac{r}{2} u_{i+1}^j$, where $r = \frac{\alpha \Delta t}{(\Delta x)^2}$.
*   **Stability:** **Unconditionally stable**. This is a major advantage over explicit methods.
*   **Accuracy:** **Second-order accurate** in both time ($O(\Delta t^2)$) and space ($O((\Delta x)^2)$).
*   **System of Equations:** Leads to a system of linear algebraic equations (typically tridiagonal) that must be solved at each time step.
*   **Thomas Algorithm:** Efficient method for solving the resulting tridiagonal systems.
*   **Comparison:** Offers better stability and accuracy than Forward Euler, and better temporal accuracy than Backward Euler, at the cost of increased computational complexity per time step due to solving a system of equations.

## Alignment with Course Outcomes

*   **CO1: Apply numerical methods to solve linear and nonlinear equations (Knowledge Level: K3)**
    *   The Crank-Nicolson method directly involves solving systems of linear equations at each time step. Understanding how to set up and solve these systems aligns with K3 application.
*   **CO2: Implement numerical schemes to fit data (Knowledge Level: K3)**
    *   While not directly "fitting data" in the regression sense, implementing the Crank-Nicolson method involves discretizing a PDE and solving it to obtain values at various points in space and time, which can be seen as generating numerical data that fits the physical model.
*   **CO3: Solve differentiation and integration numerically (Knowledge Level: K3)**
    *   The foundation of the Crank-Nicolson method is the discretization of derivatives using finite differences. Understanding these approximations and their role in the method aligns with K3.
*   **CO4: Execute numerical procedures to solve ordinary and partial differential equations (Knowledge Level: K3)**
    *   This topic is directly about executing a numerical procedure (Crank-Nicolson) to solve a partial differential equation (heat equation). The derivation, implementation, and analysis of the method all fall under K3.

This comprehensive set of notes covers the theoretical underpinnings, derivation, implementation considerations, and practical aspects of the Crank-Nicolson method, aligning with the learning outcomes and course objectives for numerical solution of PDEs.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
