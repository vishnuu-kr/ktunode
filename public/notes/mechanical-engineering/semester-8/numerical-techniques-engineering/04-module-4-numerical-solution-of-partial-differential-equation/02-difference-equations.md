---
title: "Difference equations"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 4: Numerical solution of partial differential equation"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646c2"
status: "completed"
scrapedAt: "2026-05-20T18:23:23.912Z"
---
# NUMERICAL TECHNIQUES ENGINEERING - Module 4: Numerical Solution of Partial Differential Equations

## Topic: Difference Equations

This module focuses on the numerical solution of Partial Differential Equations (PDEs). A fundamental tool in this endeavor is the conversion of continuous PDEs into discrete **difference equations**. This topic will explore the principles and techniques behind forming and manipulating these difference equations, which form the basis of many numerical PDE solution methods.

---

### Learning Outcomes Covered:

*   **Understanding the concept of finite differences and their application to approximating derivatives.**
*   **Formulating difference equations from PDEs using finite difference approximations.**
*   **Classifying difference equations based on their characteristics (e.g., explicit vs. implicit).**
*   **Solving simple difference equations manually and understanding the iterative nature of solving more complex systems.**

---

### Course Outcomes Alignment:

*   **CO4: Execute numerical procedures to solve ordinary and partial differential equations (Knowledge Level: K3).** This topic directly contributes to CO4 by providing the foundational step of transforming PDEs into a solvable numerical form.

---

### 1. Introduction to Difference Equations

Difference equations are the discrete analogue of differential equations. They relate the values of a function at discrete points. In the context of solving PDEs numerically, we discretize the domain of the PDE into a grid of points, and we seek to find the values of the unknown function at these grid points. Difference equations provide the algebraic relationships between these discrete values.

**Key Concept:** Discretization of the domain.

**Example:** Consider a function $u(x)$. If we discretize the domain into points $x_0, x_1, x_2, \dots$ where $x_{i+1} - x_i = h$ (a constant step size), we are interested in the values $u(x_i)$, which can be denoted as $u_i$.

---

### 2. Finite Differences

Finite differences are used to approximate derivatives of a function at discrete points. These approximations are the core of converting continuous derivatives in PDEs into algebraic terms in difference equations.

#### 2.1 Types of Finite Differences

*   **Forward Difference:**
    *   Definition: $\Delta u_i = u_{i+1} - u_i$
    *   Approximation of the first derivative: $\frac{du}{dx} \approx \frac{\Delta u_i}{h} = \frac{u_{i+1} - u_i}{h}$
    *   This is a first-order approximation.

*   **Backward Difference:**
    *   Definition: $\nabla u_i = u_i - u_{i-1}$
    *   Approximation of the first derivative: $\frac{du}{dx} \approx \frac{\nabla u_i}{h} = \frac{u_i - u_{i-1}}{h}$
    *   This is also a first-order approximation.

*   **Central Difference:**
    *   Definition: $\delta u_i = u_{i+1/2} - u_{i-1/2}$ (Often used conceptually, but for our discrete grid, we use differences of grid values).
    *   Approximation of the first derivative: $\frac{du}{dx} \approx \frac{u_{i+1} - u_{i-1}}{2h}$
    *   This is a second-order approximation, generally more accurate than forward or backward differences.

*   **Second-Order Central Difference:**
    *   Approximation of the second derivative: $\frac{d^2u}{dx^2} \approx \frac{u_{i+1} - 2u_i + u_{i-1}}{h^2}$
    *   This is derived from the Taylor series expansion of $u_{i+1}$ and $u_{i-1}$ around $u_i$.

#### 2.2 Taylor Series Expansion

The derivation of finite difference approximations relies heavily on Taylor series expansions.

*   Taylor series for $u(x+h)$ around $x$:
    $u(x+h) = u(x) + h \frac{du}{dx} \Big|_x + \frac{h^2}{2!} \frac{d^2u}{dx^2} \Big|_x + \frac{h^3}{3!} \frac{d^3u}{dx^3} \Big|_x + \dots$

*   Taylor series for $u(x-h)$ around $x$:
    $u(x-h) = u(x) - h \frac{du}{dx} \Big|_x + \frac{h^2}{2!} \frac{d^2u}{dx^2} \Big|_x - \frac{h^3}{3!} \frac{d^3u}{dx^3} \Big|_x + \dots$

**Derivation of Central Difference for First Derivative:**
Subtracting the second series from the first:
$u(x+h) - u(x-h) = 2h \frac{du}{dx} \Big|_x + 2 \frac{h^3}{3!} \frac{d^3u}{dx^3} \Big|_x + \dots$
Rearranging for $\frac{du}{dx}$:
$\frac{du}{dx} \Big|_x = \frac{u(x+h) - u(x-h)}{2h} - \frac{h^2}{6} \frac{d^3u}{dx^3} \Big|_x - \dots$
In terms of discrete notation $u_i = u(x_i)$:
$\frac{du}{dx} \Big|_{x_i} \approx \frac{u_{i+1} - u_{i-1}}{2h}$
The error is $O(h^2)$, which means the error is proportional to $h^2$.

**Derivation of Central Difference for Second Derivative:**
Adding the two series:
$u(x+h) + u(x-h) = 2u(x) + 2 \frac{h^2}{2!} \frac{d^2u}{dx^2} \Big|_x + 2 \frac{h^4}{4!} \frac{d^4u}{dx^4} \Big|_x + \dots$
Rearranging for $\frac{d^2u}{dx^2}$:
$\frac{d^2u}{dx^2} \Big|_x = \frac{u(x+h) - 2u(x) + u(x-h)}{h^2} - \frac{h^2}{12} \frac{d^4u}{dx^4} \Big|_x - \dots$
In terms of discrete notation:
$\frac{d^2u}{dx^2} \Big|_{x_i} \approx \frac{u_{i+1} - 2u_i + u_{i-1}}{h^2}$
The error is $O(h^2)$.

**(Refer to Chapra & Canale, Chapter 14 for detailed derivation and other approximations.)**

---

### 3. Formulating Difference Equations from PDEs

The process involves replacing the continuous derivatives in a PDE with their finite difference approximations. This transforms the PDE into a system of algebraic equations for the unknown values of the function at the grid points.

**Example 1: One-Dimensional Heat Equation**

Consider the one-dimensional heat equation:
$\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$

We discretize both space ($x$) and time ($t$).
*   Spatial discretization: $x_i = i \Delta x$ for $i = 0, 1, 2, \dots, M$
*   Temporal discretization: $t_j = j \Delta t$ for $j = 0, 1, 2, \dots, N$
We denote $u(x_i, t_j)$ as $u_i^j$.

**Approximation:**

*   **Time derivative ($\frac{\partial u}{\partial t}$):** We can use a forward difference at time $t_j$.
    $\frac{\partial u}{\partial t} \Big|_{x_i, t_j} \approx \frac{u_i^{j+1} - u_i^j}{\Delta t}$

*   **Second spatial derivative ($\frac{\partial^2 u}{\partial x^2}$):** We can use a central difference at spatial point $x_i$.
    $\frac{\partial^2 u}{\partial x^2} \Big|_{x_i, t_j} \approx \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2}$

**Substituting these approximations into the heat equation:**

$\frac{u_i^{j+1} - u_i^j}{\Delta t} = \alpha \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2}$

Rearranging to solve for the unknown value at the next time step, $u_i^{j+1}$ (this is known as the **Explicit Euler method** for the parabolic PDE):

$u_i^{j+1} = u_i^j + \alpha \Delta t \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2}$

Let $r = \alpha \frac{\Delta t}{(\Delta x)^2}$. Then:

$u_i^{j+1} = u_i^j + r (u_{i+1}^j - 2u_i^j + u_{i-1}^j)$
$u_i^{j+1} = r u_{i-1}^j + (1 - 2r) u_i^j + r u_{i+1}^j$

This is a difference equation. For each interior spatial point $i$, it relates the value at the next time step ($j+1$) to values at the current time step ($j$) at the same point and its neighbors.

**(Refer to Chapra & Canale, Chapter 14.2 and 14.3 for detailed examples of heat and wave equations.)**

**Example 2: One-Dimensional Wave Equation**

Consider the one-dimensional wave equation:
$\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$

Using similar discretization ($u_i^j$):

*   **Second time derivative ($\frac{\partial^2 u}{\partial t^2}$):** Use a central difference for stability and accuracy.
    $\frac{\partial^2 u}{\partial t^2} \Big|_{x_i, t_j} \approx \frac{u_i^{j+1} - 2u_i^j + u_i^{j-1}}{(\Delta t)^2}$

*   **Second spatial derivative ($\frac{\partial^2 u}{\partial x^2}$):** Use a central difference.
    $\frac{\partial^2 u}{\partial x^2} \Big|_{x_i, t_j} \approx \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2}$

**Substituting into the wave equation:**

$\frac{u_i^{j+1} - 2u_i^j + u_i^{j-1}}{(\Delta t)^2} = c^2 \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2}$

Rearranging to solve for $u_i^{j+1}$ (this is the **Central Difference Method** for the wave equation):

$u_i^{j+1} - 2u_i^j + u_i^{j-1} = c^2 \frac{(\Delta t)^2}{(\Delta x)^2} (u_{i+1}^j - 2u_i^j + u_{i-1}^j)$

Let $\lambda = \frac{c \Delta t}{\Delta x}$. Then $\lambda^2 = \frac{c^2 (\Delta t)^2}{(\Delta x)^2}$.

$u_i^{j+1} = 2u_i^j - u_i^{j-1} + \lambda^2 (u_{i+1}^j - 2u_i^j + u_{i-1}^j)$
$u_i^{j+1} = \lambda^2 u_{i+1}^j + 2(1 - \lambda^2) u_i^j + \lambda^2 u_{i-1}^j - u_i^{j-1}$

This difference equation relates the value at the next time step to values at the current and previous time steps.

**(Refer to Chapra & Canale, Chapter 14.4 for detailed discussion.)**

**Example 3: One-Dimensional Poisson's Equation**

Consider Poisson's equation:
$\frac{d^2 u}{dx^2} = f(x)$

Discretize the domain $x_0, x_1, \dots, x_n$ with step size $h$.
Using the central difference approximation for $\frac{d^2 u}{dx^2}$:

$\frac{u_{i+1} - 2u_i + u_{i-1}}{h^2} = f(x_i)$

This gives a system of linear algebraic equations for the unknown values $u_i$. For an interior point $i$:

$u_{i-1} - 2u_i + u_{i+1} = h^2 f(x_i)$

This is a linear difference equation. If we have boundary conditions (e.g., $u_0$ and $u_n$ are known), we can write a system of equations. For $i = 1, 2, \dots, n-1$:

$u_0 - 2u_1 + u_2 = h^2 f(x_1)$
$u_1 - 2u_2 + u_3 = h^2 f(x_2)$
$\dots$
$u_{n-2} - 2u_{n-1} + u_n = h^2 f(x_{n-1})$

Since $u_0$ and $u_n$ are known, this is a system of $n-1$ linear equations in $n-1$ unknowns ($u_1, u_2, \dots, u_{n-1}$). This system can be represented in matrix form $Au = b$.

**(Refer to Gupta S.K., Chapter 10 for systems of linear equations arising from PDEs.)**

---

### 4. Classification of Difference Equations

Difference equations derived from PDEs can be classified based on how they relate unknown values at different grid points and time levels.

#### 4.1 Explicit vs. Implicit Schemes

*   **Explicit Scheme:**
    *   The unknown value at the next time step ($u_i^{j+1}$) is directly calculated from known values at the current or previous time steps.
    *   Example: $u_i^{j+1} = \text{expression involving } u_k^j \text{ and/or } u_k^{j-1}$
    *   Easy to implement and computationally straightforward per time step.
    *   Often have stability restrictions on the time step size (e.g., Courant-Friedrichs-Lewy or CFL condition).

*   **Implicit Scheme:**
    *   The unknown value at the next time step ($u_i^{j+1}$) is related to other unknown values at the same next time step.
    *   Example: $A u_{i-1}^{j+1} + B u_i^{j+1} + C u_{i+1}^{j+1} = D$ (where $u_i^{j+1}$ is the unknown we want to find).
    *   These schemes typically require solving a system of linear algebraic equations at each time step.
    *   Generally more stable and allow for larger time step sizes.

**Example: Implicit Scheme for Heat Equation**

Using a backward difference for the time derivative (implicit Euler):
$\frac{u_i^{j+1} - u_i^j}{\Delta t} = \alpha \frac{u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1}}{(\Delta x)^2}$

Rearranging to solve for $u_i^{j+1}$ (this is now implicit):
$u_i^{j+1} - u_i^j = r (u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1})$
$u_i^{j+1} - r u_{i-1}^{j+1} + 2r u_i^{j+1} - r u_{i+1}^{j+1} = u_i^j$
$-r u_{i-1}^{j+1} + (1+2r) u_i^{j+1} - r u_{i+1}^{j+1} = u_i^j$

This equation must be solved for all interior points $i$ at time step $j+1$. This forms a system of linear equations, usually tridiagonal, which can be solved efficiently.

**(Refer to Balagurusamy, Chapter 10 for numerical solutions of PDEs and implicit methods.)**

#### 4.2 Parabolic, Hyperbolic, and Elliptic Equations

Difference equations derived from these types of PDEs inherit their properties.

*   **Parabolic Equations (e.g., Heat Equation):** Typically involve first-order time derivatives and second-order spatial derivatives. Explicit schemes often have stability constraints, while implicit schemes are generally stable.
*   **Hyperbolic Equations (e.g., Wave Equation):** Typically involve second-order time derivatives and second-order spatial derivatives. The CFL condition is crucial for stability in explicit methods.
*   **Elliptic Equations (e.g., Poisson's Equation):** Involve only spatial derivatives and usually arise in steady-state problems. They do not involve time stepping. Solving them involves solving a system of linear algebraic equations, often iteratively.

---

### 5. Solving Simple Difference Equations

#### 5.1 Direct Solution (for simple cases)

For simple linear difference equations, especially those arising from elliptic PDEs or boundary value problems, direct solution of the system of linear equations is possible using methods like Gaussian elimination or by exploiting matrix structures (e.g., Thomas algorithm for tridiagonal systems).

#### 5.2 Iterative Solution (for time-dependent problems and complex elliptic problems)

For time-dependent problems (parabolic and hyperbolic), we step forward in time using either explicit or implicit schemes.

*   **Explicit Schemes:** Calculate values at $t_{j+1}$ directly from values at $t_j$.
*   **Implicit Schemes:** Require solving a system of equations at each time step.

For elliptic problems, iterative methods like Jacobi, Gauss-Seidel, or SOR (Successive Over-Relaxation) are commonly used to solve the system of algebraic equations. These methods start with an initial guess and refine the solution iteratively until a convergence criterion is met.

**Example: Solving a simple tridiagonal system arising from Poisson's equation**

Consider the difference equation: $u_{i-1} - 2u_i + u_{i+1} = b_i$ for $i=1, 2, \dots, n-1$, with $u_0 = C_0$ and $u_n = C_n$.

Let $n=4$. We need to solve for $u_1, u_2, u_3$.
$i=1: u_0 - 2u_1 + u_2 = b_1 \implies C_0 - 2u_1 + u_2 = b_1$
$i=2: u_1 - 2u_2 + u_3 = b_2$
$i=3: u_2 - 2u_3 + u_4 = b_3 \implies u_2 - 2u_3 + C_4 = b_3$

This is a system of 3 linear equations in 3 unknowns.

**(Refer to Jain, Iyengar & Jain, Chapter 2 for methods to solve linear systems.)**

---

### 6. Practice Questions and Exercises

**Question 1:**
Derive the finite difference approximation for the third derivative $\frac{d^3u}{dx^3}$ using a central difference scheme. What is its order of accuracy?

**Answer:**
Using Taylor series expansions for $u(x+h)$ and $u(x-h)$ around $x$:
$u(x+h) = u(x) + h u' + \frac{h^2}{2} u'' + \frac{h^3}{6} u''' + \frac{h^4}{24} u'''' + \frac{h^5}{120} u''''' + \dots$
$u(x-h) = u(x) - h u' + \frac{h^2}{2} u'' - \frac{h^3}{6} u''' + \frac{h^4}{24} u'''' - \frac{h^5}{120} u''''' + \dots$

To isolate the $u'''$ term, we can consider combinations. Let's try $u(x+h) - u(x-h) - h(u'(x+h) - u'(x-h))$... this gets complicated.

A more systematic approach for higher derivatives:
Consider the combination: $\alpha u(x+h) + \beta u(x) + \gamma u(x-h)$. We want this to be proportional to $h^3 u'''(x)$.
$\alpha(u + h u' + \frac{h^2}{2} u'' + \frac{h^3}{6} u''' + \frac{h^4}{24} u'''' + \dots) + \beta u + \gamma(u - h u' + \frac{h^2}{2} u'' - \frac{h^3}{6} u''' + \frac{h^4}{24} u'''' - \dots)$

Collect terms by derivatives:
$u (\alpha + \beta + \gamma)$
$u' (\alpha h - \gamma h)$
$u'' (\alpha \frac{h^2}{2} + \gamma \frac{h^2}{2})$
$u''' (\alpha \frac{h^3}{6} - \gamma \frac{h^3}{6})$
$u'''' (\alpha \frac{h^4}{24} + \gamma \frac{h^4}{24})$

For a central difference for $u'''$, we need:
1.  $u$ term to be zero: $\alpha + \beta + \gamma = 0$
2.  $u'$ term to be zero: $\alpha h - \gamma h = 0 \implies \alpha = \gamma$
3.  $u''$ term to be zero: $\alpha \frac{h^2}{2} + \gamma \frac{h^2}{2} = 0$. Since $\alpha = \gamma$, this becomes $\alpha h^2 = 0$, which implies $\alpha = 0$. This path is not leading to a useful third-order approximation.

Let's try involving more points, e.g., $u(x+2h)$ and $u(x-2h)$. This becomes complex. A common way to get the third derivative approximation is by considering the difference of second derivatives:
$\frac{d^2}{dx^2} \left( \frac{u(x+h) - u(x-h)}{2h} \right)$
$= \frac{1}{2h} \frac{d}{dx} \left( \frac{u(x+h) - u(x-h)}{h} \right)$ - This is not quite right.

Let's use finite differences of differences:
$\Delta^2 u_i = u_{i+1} - 2u_i + u_{i-1}$
$\Delta^3 u_i = \Delta (\Delta^2 u_i) = \Delta (u_{i+1} - 2u_i + u_{i-1})$
$= (u_{i+2} - 2u_{i+1} + u_i) - (u_{i+1} - 2u_i + u_{i-1})$
$= u_{i+2} - 3u_{i+1} + 3u_i - u_{i-1}$

This is the third forward difference. To get a central difference for the third derivative, we need to center it around $i$.
Consider $u(x+h) - u(x-h)$ and $u(x+2h) - u(x-2h)$.
Let's try a combination of central differences:
$\frac{u(x+h) - u(x-h)}{2h}$ is $\approx u'(x)$.
$\frac{u(x+2h) - u(x-2h)}{4h}$ is $\approx u'(x)$.

Consider $\frac{1}{2h} [ \frac{u(x+h) - u(x-h)}{h} - \frac{u(x-h) - u(x-2h)}{h} ]$? No.

The standard central difference for the third derivative is derived by considering the expression:
$\frac{1}{2h} (u_{i+1} - u_{i-1})$ represents $u'_i$.
$\frac{1}{2h} (u_{i+2} - u_i)$ is not centered at $i$.

Let's use Taylor series carefully:
$u_{i+1} = u_i + h u'_i + \frac{h^2}{2} u''_i + \frac{h^3}{6} u'''_i + \frac{h^4}{24} u''''_i + \frac{h^5}{120} u'''''_i + O(h^6)$
$u_{i-1} = u_i - h u'_i + \frac{h^2}{2} u''_i - \frac{h^3}{6} u'''_i + \frac{h^4}{24} u''''_i - \frac{h^5}{120} u'''''_i + O(h^6)$

Consider the difference of these:
$u_{i+1} - u_{i-1} = 2h u'_i + \frac{h^3}{3} u'''_i + O(h^5)$
$\frac{u_{i+1} - u_{i-1}}{2h} = u'_i + \frac{h^2}{6} u'''_i + O(h^4)$

Now consider the difference between $u_{i+1}$ and $u_i$, and $u_i$ and $u_{i-1}$ for the second derivative:
$u_{i+1} - 2u_i + u_{i-1} = h^2 u''_i + \frac{h^4}{12} u''''_i + O(h^6)$
$\frac{u_{i+1} - 2u_i + u_{i-1}}{h^2} = u''_i + \frac{h^2}{12} u''''_i + O(h^4)$

Let's consider the difference of the first derivatives:
$\frac{u_{i+1} - u_i}{h}$ and $\frac{u_i - u_{i-1}}{h}$.
Central difference for $u'''_i$:
$\frac{1}{2h} \left[ \left(\frac{u_{i+1} - u_i}{h}\right) - \left(\frac{u_i - u_{i-1}}{h}\right) \right]$ NO, this is second derivative.

The correct approach involves using points $i+2$ and $i-2$.
Let's evaluate $\frac{1}{2h} [ \frac{u(x+h)-u(x-h)}{h} - \frac{u(x)-u(x-2h)}{h} ]$... Still not symmetric.

A common central difference for $u'''$ uses 4 points:
$\frac{u_{i+2} - 2u_{i+1} + 2u_{i-1} - u_{i-2}}{2h^3}$

Let's verify this using Taylor series:
$u_{i+2} = u_i + 2h u'_i + \frac{4h^2}{2} u''_i + \frac{8h^3}{6} u'''_i + \frac{16h^4}{24} u''''_i + \frac{32h^5}{120} u'''''_i + \dots$
$u_{i-2} = u_i - 2h u'_i + \frac{4h^2}{2} u''_i - \frac{8h^3}{6} u'''_i + \frac{16h^4}{24} u''''_i - \frac{32h^5}{120} u'''''_i + \dots$

$u_{i+2} - u_{i-2} = 4h u'_i + \frac{16h^3}{6} u'''_i + O(h^5)$

Now consider $2u_{i+1} - 2u_{i-1}$:
$2u_{i+1} = 2(u_i + h u'_i + \frac{h^2}{2} u''_i + \frac{h^3}{6} u'''_i + \frac{h^4}{24} u''''_i + \dots)$
$2u_{i-1} = 2(u_i - h u'_i + \frac{h^2}{2} u''_i - \frac{h^3}{6} u'''_i + \frac{h^4}{24} u''''_i - \dots)$

$2u_{i+1} - 2u_{i-1} = 4h u'_i + \frac{2h^3}{3} u'''_i + O(h^5)$

This isn't correct. The correct expression is:
$\frac{d^3 u}{dx^3} \approx \frac{u_{i+2} - 2u_{i+1} + 2u_{i-1} - u_{i-2}}{2h^3}$

Let's use Taylor series expansion for this numerator:
$u_{i+2} = u_i + 2h u'_i + \frac{(2h)^2}{2!} u''_i + \frac{(2h)^3}{3!} u'''_i + \frac{(2h)^4}{4!} u''''_i + \frac{(2h)^5}{5!} u'''''_i + \dots$
$u_{i+2} = u_i + 2h u'_i + 2h^2 u''_i + \frac{4}{3}h^3 u'''_i + \frac{2}{3}h^4 u''''_i + \frac{4}{15}h^5 u'''''_i + \dots$

$u_{i-2} = u_i - 2h u'_i + 2h^2 u''_i - \frac{4}{3}h^3 u'''_i + \frac{2}{3}h^4 u''''_i - \frac{4}{15}h^5 u'''''_i + \dots$

$u_{i+2} - u_{i-2} = 4h u'_i + \frac{8}{3}h^3 u'''_i + O(h^5)$

Now consider the middle terms:
$2u_{i+1} = 2(u_i + h u'_i + \frac{h^2}{2} u''_i + \frac{h^3}{6} u'''_i + \frac{h^4}{24} u''''_i + \frac{h^5}{120} u'''''_i + \dots)$
$2u_{i-1} = 2(u_i - h u'_i + \frac{h^2}{2} u''_i - \frac{h^3}{6} u'''_i + \frac{h^4}{24} u''''_i - \frac{h^5}{120} u'''''_i + \dots)$

$2u_{i+1} - 2u_{i-1} = 4h u'_i + \frac{h^3}{3} u'''_i + O(h^5)$ -- There must be a mistake in manual expansion.

Let's re-evaluate the coefficients for $u'''$.
$u_{i+2}$: $\frac{(2h)^3}{6} = \frac{8h^3}{6} = \frac{4}{3}h^3$
$u_{i-2}$: $-\frac{(-2h)^3}{6} = -\frac{-8h^3}{6} = \frac{4}{3}h^3$
Sum of these: $\frac{8}{3}h^3 u'''_i$.

$2u_{i+1}$: $2 \frac{h^3}{6} = \frac{1}{3}h^3$
$-2u_{i-1}$: $-2 (-\frac{h^3}{6}) = \frac{1}{3}h^3$
Sum of these: $\frac{2}{3}h^3 u'''_i$.

Total numerator for $u'''$: $\frac{8}{3}h^3 u'''_i - \frac{2}{3}h^3 u'''_i = \frac{6}{3}h^3 u'''_i = 2h^3 u'''_i$.
So, $\frac{\text{Numerator}}{2h^3} = u'''_i$.

The approximation is:
$\frac{d^3u}{dx^3} \approx \frac{u_{i+2} - 2u_{i+1} + 2u_{i-1} - u_{i-2}}{2h^3}$
The error terms that remain are from $u''''$ and $u'''''$. The first error term comes from the $u''''$ contribution.
$u_{i+2}: \frac{(2h)^4}{24} = \frac{16h^4}{24} = \frac{2}{3}h^4$
$u_{i-2}: \frac{(-2h)^4}{24} = \frac{16h^4}{24} = \frac{2}{3}h^4$
Sum: $\frac{4}{3}h^4 u''''_i$.

$2u_{i+1}: 2 \frac{h^4}{24} = \frac{1}{12}h^4$
$-2u_{i-1}: -2 \frac{h^4}{24} = -\frac{1}{12}h^4$
Sum: $0$.

So the error comes from the $u'''''$ term:
$u_{i+2}: \frac{(2h)^5}{120} = \frac{32h^5}{120} = \frac{4}{15}h^5$
$u_{i-2}: -\frac{(-2h)^5}{120} = -\frac{-32h^5}{120} = \frac{4}{15}h^5$
Sum: $\frac{8}{15}h^5 u'''''_i$.

$2u_{i+1}: 2 \frac{h^5}{120} = \frac{1}{60}h^5$
$-2u_{i-1}: -2 \frac{h^5}{120} = -\frac{1}{60}h^5$
Sum: $0$.

The error term is $\frac{1}{2h^3} [-\frac{1}{60}h^5 u'''''_i] = -\frac{h^2}{120} u'''''_i$.
The order of accuracy is $O(h^2)$.

**Question 2:**
Write the difference equation for the one-dimensional heat equation $\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$ using the backward Euler method for time discretization and a central difference for spatial discretization. Is this scheme explicit or implicit?

**Answer:**
The heat equation is $\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$.
We discretize using $u_i^j = u(x_i, t_j)$.
*   **Backward Euler for time derivative:**
    $\frac{\partial u}{\partial t} \Big|_{x_i, t_j} \approx \frac{u_i^j - u_i^{j-1}}{\Delta t}$

*   **Central difference for second spatial derivative:**
    $\frac{\partial^2 u}{\partial x^2} \Big|_{x_i, t_j} \approx \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2}$

Substituting into the PDE:
$\frac{u_i^j - u_i^{j-1}}{\Delta t} = \alpha \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2}$

Let $r = \alpha \frac{\Delta t}{(\Delta x)^2}$.
$u_i^j - u_i^{j-1} = r (u_{i+1}^j - 2u_i^j + u_{i-1}^j)$

Rearranging to group terms at the new time step ($j$):
$u_i^j - r u_{i+1}^j + 2r u_i^j - r u_{i-1}^j = u_i^{j-1}$
$-r u_{i-1}^j + (1+2r) u_i^j - r u_{i+1}^j = u_i^{j-1}$

This is an **implicit scheme** because the unknown values at the current time step $j$ ($u_{i-1}^j, u_i^j, u_{i+1}^j$) are coupled and require solving a system of equations to find them.

**Question 3:**
Consider a steady-state one-dimensional problem described by $\frac{d^2 u}{dx^2} = -10$ on the domain $0 \le x \le 1$, with boundary conditions $u(0) = 0$ and $u(1) = 0$.
Discretize the domain into $N=4$ intervals, so we have points $x_0=0, x_1=0.25, x_2=0.5, x_3=0.75, x_4=1$.
Formulate the system of difference equations that need to be solved for the interior points ($u_1, u_2, u_3$).

**Answer:**
The PDE is $\frac{d^2 u}{dx^2} = -10$.
The step size is $h = \frac{1-0}{4} = 0.25$.
The central difference approximation for the second derivative is:
$\frac{u_{i+1} - 2u_i + u_{i-1}}{h^2} = -10$

Substitute $h = 0.25$:
$\frac{u_{i+1} - 2u_i + u_{i-1}}{(0.25)^2} = -10$
$\frac{u_{i+1} - 2u_i + u_{i-1}}{0.0625} = -10$
$u_{i+1} - 2u_i + u_{i-1} = -10 \times 0.0625$
$u_{i+1} - 2u_i + u_{i-1} = -0.625$

We need to solve for the interior points: $i = 1, 2, 3$.

For $i=1$:
$u_0 - 2u_1 + u_2 = -0.625$
Given $u_0 = 0$:
$0 - 2u_1 + u_2 = -0.625$
$-2u_1 + u_2 = -0.625$  (Equation 1)

For $i=2$:
$u_1 - 2u_2 + u_3 = -0.625$  (Equation 2)

For $i=3$:
$u_2 - 2u_3 + u_4 = -0.625$
Given $u_4 = 0$:
$u_2 - 2u_3 + 0 = -0.625$
$u_2 - 2u_3 = -0.625$  (Equation 3)

The system of difference equations is:
1.  $-2u_1 + u_2 = -0.625$
2.  $u_1 - 2u_2 + u_3 = -0.625$
3.  $u_2 - 2u_3 = -0.625$

This is a tridiagonal system of linear equations.

---

### 7. Important Points to Remember

*   **Discretization:** The first step in numerically solving PDEs is to discretize the domain into a grid of points.
*   **Finite Differences:** Approximations of derivatives using function values at discrete points are crucial. Central differences are generally more accurate ($O(h^2)$) than forward or backward differences ($O(h)$).
*   **Difference Equations:** PDEs are converted into algebraic difference equations by replacing derivatives with finite difference approximations.
*   **Explicit vs. Implicit:** Explicit schemes directly compute the next step, while implicit schemes require solving a system of equations.
*   **Stability:** Explicit schemes often have stability restrictions on the time step size (CFL condition), while implicit schemes are generally more stable.
*   **System of Equations:** For steady-state problems or implicit time-stepping, solving the PDE reduces to solving a system of linear or non-linear algebraic equations.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 8. References

*   **Chapra, S. C., & Canale, R. P. (2010).** *Numerical methods for Engineers* (6th ed.). McGraw-Hill. (Chapters on ODEs and PDEs, Finite Differences).
*   **Gupta, S. K. (1995).** *Numerical Methods for Engineers*. New Age International. (Chapters on solving linear systems, PDEs).
*   **Balagurusamy, E. (2017).** *Numerical Methods*. McGraw-Hill Education. (Chapters on numerical solutions of PDEs, finite difference methods).
*   **Gerald, C. F., & Wheatly, P. O. (N.D.).** *Applied Numerical Analysis* (6th ed.). Wesley. (General numerical methods, finite differences).
*   **Jain, M. K., Iyengar, S. R. K., & Jain, R. K. (N.D.).** *Numerical Methods for Scientific and Engineering Computation*. New Age Pvt. Pub. (Detailed discussion on finite differences and solving systems).
*   **Conte, S. D., & De Boor, C. (N.D.).** *Elementary Numerical Analysis*. McGraw-Hill. (Fundamentals of numerical analysis).

---

This concludes the study notes for "Difference Equations" from Module 4. The next steps would involve learning specific techniques for solving the difference equations derived from different types of PDEs.