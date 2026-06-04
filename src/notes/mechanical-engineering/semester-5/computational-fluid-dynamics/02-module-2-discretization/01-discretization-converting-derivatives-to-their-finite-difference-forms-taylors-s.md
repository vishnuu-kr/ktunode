---
title: "Discretization-converting derivatives to their finite difference forms-Taylor’s series approach and polynomial fitting approach."
subject: "COMPUTATIONAL FLUID DYNAMICS"
module: "Module 2: Discretization"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf480446342e"
status: "completed"
scrapedAt: "2026-05-20T17:58:10.050Z"
---
# Computational Fluid Dynamics - Module 2: Discretization

## Topic: Discretization - Converting Derivatives to Finite Difference Forms

### Introduction to Discretization

Computational Fluid Dynamics (CFD) involves solving the governing partial differential equations (PDEs) of fluid flow and heat transfer. These PDEs are often too complex to solve analytically. Discretization is the process of converting these continuous PDEs into a system of algebraic equations that can be solved numerically on a computer. This involves approximating the continuous derivatives in the governing equations with discrete algebraic expressions.

**Key Concept:** Discretization transforms differential equations into algebraic equations by approximating derivatives at discrete points in space and time.

**Relevance to Course Outcomes:**
*   **CO1 (Knowledge Level: K2):** Understanding the governing equations naturally leads to understanding the need for their numerical representation, which is achieved through discretization.
*   **CO2 (Knowledge Level: K3):** This topic is the fundamental building block for applying finite difference methods to PDEs.

### 1. Finite Difference Method (FDM)

The Finite Difference Method is one of the earliest and most straightforward methods for discretizing PDEs. It approximates derivatives at specific grid points using values at neighboring grid points.

**Key Concept:** FDM replaces derivatives with differences between function values at discrete points.

**Reference:** John D. Anderson Jr. (2012) extensively covers the fundamentals of FDM in Chapter 2.

---

#### 1.1 Taylor's Series Approach

The Taylor's series expansion is the mathematical foundation for deriving finite difference approximations. It allows us to express the value of a function at a neighboring point in terms of the function's value and its derivatives at a reference point.

**Taylor's Series Expansion:**
For a function $f(x)$ that is continuous and has continuous derivatives, the Taylor series expansion around a point $x_0$ is given by:

$f(x_0 + \Delta x) = f(x_0) + \frac{\Delta x}{1!} f'(x_0) + \frac{(\Delta x)^2}{2!} f''(x_0) + \frac{(\Delta x)^3}{3!} f'''(x_0) + ...$

where:
*   $f(x_0)$ is the function value at the reference point $x_0$.
*   $f'(x_0)$, $f''(x_0)$, $f'''(x_0)$ are the first, second, and third derivatives of $f$ at $x_0$, respectively.
*   $\Delta x$ is the step size or grid spacing.

**Deriving Finite Difference Approximations:**

**a) First Derivative (Forward Difference):**
Consider the Taylor expansion of $f(x_0 + \Delta x)$:

$f(x_0 + \Delta x) = f(x_0) + (\Delta x) f'(x_0) + O((\Delta x)^2)$

Rearranging to solve for $f'(x_0)$:

$f'(x_0) = \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x} - O(\Delta x)$

This is the **forward difference** approximation for the first derivative. The term $O(\Delta x)$ represents the truncation error, indicating that the error is proportional to $\Delta x$.

**b) First Derivative (Backward Difference):**
Consider the Taylor expansion of $f(x_0 - \Delta x)$:

$f(x_0 - \Delta x) = f(x_0) - (\Delta x) f'(x_0) + \frac{(-\Delta x)^2}{2!} f''(x_0) - ...$
$f(x_0 - \Delta x) = f(x_0) - (\Delta x) f'(x_0) + O((\Delta x)^2)$

Rearranging to solve for $f'(x_0)$:

$f'(x_0) = \frac{f(x_0) - f(x_0 - \Delta x)}{\Delta x} + O(\Delta x)$

This is the **backward difference** approximation for the first derivative.

**c) First Derivative (Central Difference):**
To achieve a more accurate approximation, we can use values from both sides of $x_0$. Consider the difference between the forward and backward expansions:

$f(x_0 + \Delta x) - f(x_0 - \Delta x) = [f(x_0) + (\Delta x) f'(x_0) + \frac{(\Delta x)^2}{2!} f''(x_0) + \frac{(\Delta x)^3}{3!} f'''(x_0) + ...] - [f(x_0) - (\Delta x) f'(x_0) + \frac{(\Delta x)^2}{2!} f''(x_0) - \frac{(\Delta x)^3}{3!} f'''(x_0) + ...]$

$f(x_0 + \Delta x) - f(x_0 - \Delta x) = 2(\Delta x) f'(x_0) + 2 \frac{(\Delta x)^3}{3!} f'''(x_0) + ...$

Rearranging to solve for $f'(x_0)$:

$f'(x_0) = \frac{f(x_0 + \Delta x) - f(x_0 - \Delta x)}{2 \Delta x} - \frac{(\Delta x)^2}{6} f'''(x_0) + ...$
$f'(x_0) = \frac{f(x_0 + \Delta x) - f(x_0 - \Delta x)}{2 \Delta x} + O((\Delta x)^2)$

This is the **central difference** approximation for the first derivative. It has a higher order of accuracy (second-order truncation error) compared to forward and backward differences.

**d) Second Derivative (Central Difference):**
Consider the sum of the forward and backward Taylor expansions:

$f(x_0 + \Delta x) + f(x_0 - \Delta x) = [f(x_0) + (\Delta x) f'(x_0) + \frac{(\Delta x)^2}{2!} f''(x_0) + \frac{(\Delta x)^3}{3!} f'''(x_0) + \frac{(\Delta x)^4}{4!} f^{(4)}(x_0) + ...] + [f(x_0) - (\Delta x) f'(x_0) + \frac{(\Delta x)^2}{2!} f''(x_0) - \frac{(\Delta x)^3}{3!} f'''(x_0) + \frac{(\Delta x)^4}{4!} f^{(4)}(x_0) - ...]$

$f(x_0 + \Delta x) + f(x_0 - \Delta x) = 2f(x_0) + 2 \frac{(\Delta x)^2}{2!} f''(x_0) + 2 \frac{(\Delta x)^4}{4!} f^{(4)}(x_0) + ...$

Rearranging to solve for $f''(x_0)$:

$f''(x_0) = \frac{f(x_0 + \Delta x) - 2f(x_0) + f(x_0 - \Delta x)}{(\Delta x)^2} - \frac{(\Delta x)^2}{12} f^{(4)}(x_0) + ...$
$f''(x_0) = \frac{f(x_0 + \Delta x) - 2f(x_0) + f(x_0 - \Delta x)}{(\Delta x)^2} + O((\Delta x)^2)$

This is the **central difference** approximation for the second derivative.

**Summary of Finite Difference Approximations:**

Let $f_i$ denote the value of the function $f$ at grid point $x_i$, where $x_i = x_0 + i \Delta x$.

*   **First Derivative:**
    *   Forward Difference: $f'(x_i) \approx \frac{f_{i+1} - f_i}{\Delta x}$ (First-order accuracy)
    *   Backward Difference: $f'(x_i) \approx \frac{f_i - f_{i-1}}{\Delta x}$ (First-order accuracy)
    *   Central Difference: $f'(x_i) \approx \frac{f_{i+1} - f_{i-1}}{2 \Delta x}$ (Second-order accuracy)

*   **Second Derivative:**
    *   Central Difference: $f''(x_i) \approx \frac{f_{i+1} - 2f_i + f_{i-1}}{(\Delta x)^2}$ (Second-order accuracy)

**Important Point:** Central difference approximations generally offer higher accuracy for the same grid spacing compared to forward or backward differences because their truncation errors are of a higher order of $\Delta x$.

**Example (CO2):**
Consider the one-dimensional heat conduction equation: $\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$.
Let's discretize the spatial derivative term using a central difference approximation. At a grid point $x_i$, with grid spacing $\Delta x$:

$\frac{\partial^2 T}{\partial x^2}\bigg|_{x_i} \approx \frac{T_{i+1} - 2T_i + T_{i-1}}{(\Delta x)^2}$

where $T_i$ represents the temperature at grid point $x_i$.

**Reference:** Chapter 2 of John D. Anderson Jr.'s book provides detailed derivations and examples of these approximations.

---

#### 1.2 Polynomial Fitting Approach

The polynomial fitting approach provides an alternative way to derive finite difference approximations, particularly when dealing with non-uniform grids or when higher-order accuracy is desired. This method involves fitting a polynomial through a set of known data points and then differentiating the polynomial to obtain approximations for derivatives.

**Key Concept:** Fit a polynomial to known data points and then differentiate the polynomial.

**Procedure:**

1.  **Select Data Points:** Choose a set of $n+1$ grid points surrounding the point where the derivative is to be evaluated.
2.  **Choose a Polynomial:** Fit a polynomial of degree $n$ that passes through these $n+1$ points.
3.  **Differentiate:** Differentiate the fitted polynomial and evaluate it at the desired point.

**Example (First Derivative - Central Difference using 3 points):**
Let's fit a quadratic polynomial $P(x) = ax^2 + bx + c$ through three points: $(x_0 - \Delta x, f_{0})$, $(x_0, f_0)$, and $(x_0 + \Delta x, f_1)$.
Here, $f_{-1} = f(x_0 - \Delta x)$, $f_0 = f(x_0)$, $f_1 = f(x_0 + \Delta x)$.
Let $x = x_0 + \delta$.

The points are $(-\Delta x, f_{-1})$, $(0, f_0)$, $(\Delta x, f_1)$ in a shifted coordinate system where the origin is at $x_0$.
We need to find $a, b, c$ such that:
$P(-\Delta x) = a(\Delta x)^2 - b\Delta x + c = f_{-1}$
$P(0) = c = f_0$
$P(\Delta x) = a(\Delta x)^2 + b\Delta x + c = f_1$

From the second equation, $c = f_0$.
Substituting $c$ into the first and third equations:
$a(\Delta x)^2 - b\Delta x + f_0 = f_{-1} \Rightarrow a(\Delta x)^2 - b\Delta x = f_{-1} - f_0$
$a(\Delta x)^2 + b\Delta x + f_0 = f_1 \Rightarrow a(\Delta x)^2 + b\Delta x = f_1 - f_0$

Adding these two equations:
$2a(\Delta x)^2 = (f_{-1} - f_0) + (f_1 - f_0) = f_1 + f_{-1} - 2f_0$
$a = \frac{f_1 + f_{-1} - 2f_0}{2(\Delta x)^2}$

Subtracting the first from the second:
$2b\Delta x = (f_1 - f_0) - (f_{-1} - f_0) = f_1 - f_{-1}$
$b = \frac{f_1 - f_{-1}}{2 \Delta x}$

So the fitted polynomial is:
$P(x) = \frac{f_1 + f_{-1} - 2f_0}{2(\Delta x)^2} x^2 + \frac{f_1 - f_{-1}}{2 \Delta x} x + f_0$

Now, we find the first derivative of $P(x)$:
$P'(x) = 2a x + b = 2 \frac{f_1 + f_{-1} - 2f_0}{2(\Delta x)^2} x + \frac{f_1 - f_{-1}}{2 \Delta x}$
$P'(x) = \frac{f_1 + f_{-1} - 2f_0}{(\Delta x)^2} x + \frac{f_1 - f_{-1}}{2 \Delta x}$

To approximate $f'(x_0)$, we evaluate $P'(x)$ at $x=x_0$, which corresponds to $\delta=0$ or $x=0$ in our shifted coordinate system.
$P'(0) = \frac{f_1 - f_{-1}}{2 \Delta x}$

This yields the same central difference approximation for the first derivative. The polynomial fitting approach can be generalized to derive higher-order approximations or approximations on non-uniform grids by using basis polynomials like Lagrange polynomials or by employing methods like least squares fitting.

**Reference:** While Anderson Jr. focuses on Taylor series, S. V. Patankar (2017) and Anil W. Date (2005) often discuss interpolation and fitting as methods to handle grid discretizations, particularly in the context of the Finite Volume Method where face values are needed.

---

### 2. Accuracy and Truncation Error

The accuracy of a finite difference approximation is determined by its truncation error. The truncation error is the difference between the exact derivative and its finite difference approximation, which arises from truncating the Taylor series expansion.

**Key Concept:** Truncation error is the error introduced by approximating an infinite series with a finite number of terms.

*   **Order of Accuracy:** The order of accuracy of a finite difference scheme is determined by the lowest power of $\Delta x$ in the truncation error.
    *   Forward/Backward Difference for $f'(x_0)$: Truncation error is $O(\Delta x)$ (First-order accurate).
    *   Central Difference for $f'(x_0)$ and $f''(x_0)$: Truncation error is $O((\Delta x)^2)$ (Second-order accurate).

**Example (CO2):**
Let's analyze the truncation error for the central difference approximation of $f'(x_0)$:
$f'(x_0) = \frac{f(x_0 + \Delta x) - f(x_0 - \Delta x)}{2 \Delta x} + \text{Error}$

From Taylor expansion:
$f(x_0 + \Delta x) = f(x_0) + (\Delta x) f'(x_0) + \frac{(\Delta x)^2}{2!} f''(x_0) + \frac{(\Delta x)^3}{3!} f'''(x_0) + ...$
$f(x_0 - \Delta x) = f(x_0) - (\Delta x) f'(x_0) + \frac{(\Delta x)^2}{2!} f''(x_0) - \frac{(\Delta x)^3}{3!} f'''(x_0) + ...$

Subtracting the second from the first:
$f(x_0 + \Delta x) - f(x_0 - \Delta x) = 2(\Delta x) f'(x_0) + 2 \frac{(\Delta x)^3}{3!} f'''(x_0) + ...$

Dividing by $2 \Delta x$:
$\frac{f(x_0 + \Delta x) - f(x_0 - \Delta x)}{2 \Delta x} = f'(x_0) + \frac{(\Delta x)^2}{6} f'''(x_0) + ...$

So, the error is:
$\text{Error} = - \frac{(\Delta x)^2}{6} f'''(x_0) + ... = O((\Delta x)^2)$

**Important Point:** Reducing the grid spacing $\Delta x$ by half will reduce the truncation error of a first-order scheme by half, but reduce the truncation error of a second-order scheme by a factor of four. This implies that finer grids lead to more accurate solutions, but with increased computational cost.

**Reference:** John D. Anderson Jr. (2012) in Chapter 2 discusses the order of accuracy and truncation errors for various finite difference schemes.

---

### 3. Application to Governing Equations

The discretized finite difference forms of derivatives are substituted into the governing PDEs to obtain a system of algebraic equations. These equations are then solved to obtain the values of the dependent variables (e.g., velocity, pressure, temperature) at each grid point.

**Example (CO1, CO2):**
Consider the 1D unsteady convection-diffusion equation:
$\frac{\partial \phi}{\partial t} + u \frac{\partial \phi}{\partial x} = \Gamma \frac{\partial^2 \phi}{\partial x^2}$

where $\phi$ is a scalar quantity, $u$ is velocity, and $\Gamma$ is the diffusion coefficient.

We can discretize this equation at grid point $i$ and time level $n$:

*   **Time derivative:** Using a forward difference scheme for $\frac{\partial \phi}{\partial t}$:
    $\frac{\partial \phi}{\partial t} \bigg|_{i}^n \approx \frac{\phi_i^{n+1} - \phi_i^n}{\Delta t}$ (Forward Euler, first-order in time)

*   **Convection term:** Using a central difference scheme for $u \frac{\partial \phi}{\partial x}$:
    $u \frac{\partial \phi}{\partial x} \bigg|_{i}^n \approx u \frac{\phi_{i+1}^n - \phi_{i-1}^n}{2 \Delta x}$ (Central difference, second-order in space)

*   **Diffusion term:** Using a central difference scheme for $\Gamma \frac{\partial^2 \phi}{\partial x^2}$:
    $\Gamma \frac{\partial^2 \phi}{\partial x^2} \bigg|_{i}^n \approx \Gamma \frac{\phi_{i+1}^n - 2\phi_i^n + \phi_{i-1}^n}{(\Delta x)^2}$ (Central difference, second-order in space)

Substituting these into the PDE:
$\frac{\phi_i^{n+1} - \phi_i^n}{\Delta t} + u \frac{\phi_{i+1}^n - \phi_{i-1}^n}{2 \Delta x} = \Gamma \frac{\phi_{i+1}^n - 2\phi_i^n + \phi_{i-1}^n}{(\Delta x)^2}$

This equation can be rearranged to solve for $\phi_i^{n+1}$ (the value at the next time step):
$\phi_i^{n+1} = \phi_i^n - \Delta t \left( u \frac{\phi_{i+1}^n - \phi_{i-1}^n}{2 \Delta x} - \Gamma \frac{\phi_{i+1}^n - 2\phi_i^n + \phi_{i-1}^n}{(\Delta x)^2} \right)$

This is an explicit scheme. Different choices of approximations for time and spatial derivatives, and boundary conditions, lead to various numerical schemes (e.g., explicit, implicit, Crank-Nicolson).

**Reference:** This type of discretization is a fundamental step in understanding various CFD schemes discussed in Anderson Jr. (2012) and Patankar (2017).

---

### 4. Boundary Conditions

Discretization also applies to boundary conditions. Boundary conditions provide information at the edges of the computational domain and are crucial for obtaining a unique solution.

**Key Concepts:**
*   **Dirichlet Boundary Condition:** Specifies the value of the dependent variable at the boundary (e.g., $T=T_{wall}$).
*   **Neumann Boundary Condition:** Specifies the derivative of the dependent variable at the boundary (e.g., $\frac{\partial T}{\partial x} = 0$ for adiabatic wall).
*   **Robin Boundary Condition:** Specifies a linear combination of the dependent variable and its derivative at the boundary (e.g., convective heat transfer).

**Discretization of Boundary Conditions:**

*   **Dirichlet:** For a boundary at $x_0$, if $T(x_0) = T_{boundary}$, then $T_0 = T_{boundary}$. This directly sets the value at the boundary grid point.

*   **Neumann:** For a boundary at $x_0$ where $\frac{\partial T}{\partial x} = G$, we can use a forward difference approximation for the derivative at $x_0$:
    $\frac{T_1 - T_0}{\Delta x} \approx G$
    $T_1 - T_0 \approx G \Delta x$
    $T_0 \approx T_1 - G \Delta x$
    This expresses the boundary value $T_0$ in terms of the interior value $T_1$. This is often referred to as the "ghost point" method.

**Example (CO2):**
Consider a one-dimensional rod with length L, and boundary conditions:
*   At $x=0$: $T(0) = T_{left}$ (Dirichlet)
*   At $x=L$: $\frac{\partial T}{\partial x} = 0$ (Neumann, adiabatic)

Let the grid points be $x_0, x_1, ..., x_N$, where $x_0=0$ and $x_N=L$.
The Dirichlet condition at $x_0$ is simply: $T_0 = T_{left}$.

For the Neumann condition at $x_N$, using a backward difference at $x_N$:
$\frac{T_N - T_{N-1}}{\Delta x} \approx 0 \Rightarrow T_N = T_{N-1}$

Alternatively, using a fictitious point $x_{N+1}$ and a central difference at $x_N$:
$\frac{T_{N+1} - T_{N-1}}{2\Delta x} = 0 \Rightarrow T_{N+1} = T_{N-1}$
If the PDE is discretized using interior points $i=1, ..., N-1$, the boundary condition at $x_N$ might be used to eliminate $T_N$ from the equation for $T_{N-1}$. For instance, if the second derivative at $x_{N-1}$ involves $T_N$ and $T_{N-2}$, the relation $T_N = T_{N-1}$ (from adiabatic condition on its own) or some modified relation is used. A common approach when discretizing the equation at the boundary point $N$ is to use the Neumann condition to relate $T_N$ to its neighbours, or introduce a fictitious point. If we use central difference for the second derivative at $x_{N-1}$, we need $T_{N-2}, T_{N-1}, T_N$. The Neumann condition $\frac{\partial T}{\partial x}\bigg|_N = 0$ can be used to define $T_N$. Using central difference at $x_N$: $\frac{T_{N+1} - T_{N-1}}{2\Delta x} = 0 \implies T_{N+1} = T_{N-1}$. The equation at $x_{N-1}$ would involve $T_{N-2}, T_{N-1}, T_N$. The boundary condition needs to be incorporated to close the system. A common way is to use it in the discretization of the equation at $x_N$. For instance, if we discretize the PDE at $x_N$, we might have terms like $\frac{\partial T}{\partial x}|_N$ and $\frac{\partial^2 T}{\partial x^2}|_N$. The Neumann condition $\frac{\partial T}{\partial x}|_N = 0$ directly eliminates the first derivative term. For the second derivative, using the fictitious point approach $T_{N+1}=T_{N-1}$, the central difference at $x_N$ becomes: $\frac{T_{N+1} - 2T_N + T_{N-1}}{(\Delta x)^2} = \frac{T_{N-1} - 2T_N + T_{N-1}}{(\Delta x)^2} = \frac{2T_{N-1} - 2T_N}{(\Delta x)^2}$. This allows the boundary condition to be incorporated into the discretized equations.

**Reference:** Chapter 2 of John D. Anderson Jr. (2012) and Chapter 3 of H. Versteeg and W. Malalasekera (2008) discuss the implementation of boundary conditions in FDM.

---

### Practice Questions

1.  Using Taylor series expansion, derive the second-order accurate finite difference approximation for the second derivative $\frac{d^2f}{dx^2}$.
2.  Consider a function $f(x)$ with the following values at equally spaced points:
    $f(0) = 2$, $f(1) = 5$, $f(2) = 10$, $f(3) = 17$.
    Estimate the first derivative at $x=1.5$ using:
    a) Forward difference (using $f(1)$ and $f(2)$)
    b) Backward difference (using $f(1)$ and $f(2)$)
    c) Central difference (using $f(1)$ and $f(2)$)
    d) Central difference (using $f(0), f(1), f(2)$)
    Which approximation is likely to be the most accurate, and why?
3.  Discretize the following PDE using finite differences:
    $\frac{\partial u}{\partial t} + c \frac{\partial u}{\partial x} = 0$, where $c$ is a constant.
    Use forward difference for the time derivative and central difference for the spatial derivative. Assume uniform grid spacing $\Delta x$ and time step $\Delta t$.

---

### Answers to Practice Questions

1.  **Derivation of second derivative approximation:**
    From Taylor series:
    $f(x_0 + \Delta x) = f(x_0) + (\Delta x) f'(x_0) + \frac{(\Delta x)^2}{2!} f''(x_0) + \frac{(\Delta x)^3}{3!} f'''(x_0) + \frac{(\Delta x)^4}{4!} f^{(4)}(x_0) + ...$ (Eq. 1)
    $f(x_0 - \Delta x) = f(x_0) - (\Delta x) f'(x_0) + \frac{(\Delta x)^2}{2!} f''(x_0) - \frac{(\Delta x)^3}{3!} f'''(x_0) + \frac{(\Delta x)^4}{4!} f^{(4)}(x_0) - ...$ (Eq. 2)

    Adding Eq. 1 and Eq. 2:
    $f(x_0 + \Delta x) + f(x_0 - \Delta x) = 2f(x_0) + 2 \frac{(\Delta x)^2}{2!} f''(x_0) + 2 \frac{(\Delta x)^4}{4!} f^{(4)}(x_0) + ...$
    $f(x_0 + \Delta x) + f(x_0 - \Delta x) = 2f(x_0) + (\Delta x)^2 f''(x_0) + \frac{(\Delta x)^4}{12} f^{(4)}(x_0) + ...$

    Rearranging to solve for $f''(x_0)$:
    $(\Delta x)^2 f''(x_0) = f(x_0 + \Delta x) + f(x_0 - \Delta x) - 2f(x_0) - \frac{(\Delta x)^4}{12} f^{(4)}(x_0) - ...$

    $f''(x_0) = \frac{f(x_0 + \Delta x) - 2f(x_0) + f(x_0 - \Delta x)}{(\Delta x)^2} - \frac{(\Delta x)^2}{12} f^{(4)}(x_0) - ...$

    The second-order accurate finite difference approximation is:
    $\frac{d^2f}{dx^2}\bigg|_{x_0} \approx \frac{f(x_0 + \Delta x) - 2f(x_0) + f(x_0 - \Delta x)}{(\Delta x)^2}$

2.  Given: $f(0)=2, f(1)=5, f(2)=10, f(3)=17$. $\Delta x = 1$. We want to estimate $f'(1.5)$.

    a) **Forward difference:** Using $f(1)$ and $f(2)$. At $x=1.5$, we use points $x=1$ and $x=2$.
    $f'(1.5) \approx \frac{f(2) - f(1)}{\Delta x} = \frac{10 - 5}{1} = 5$.
    Truncation error is $O(\Delta x)$.

    b) **Backward difference:** Using $f(1)$ and $f(2)$. At $x=1.5$, we use points $x=1$ and $x=2$. This is a bit ambiguous. If we consider the point $x=1.5$ as our reference point, we would need points $x=1.5-\Delta x$ and $x=1.5$. However, if we are asked to estimate the derivative *between* grid points, we typically use the grid points that straddle it. Let's reinterpret the question as estimating derivative *at* grid points and then interpolating for $x=1.5$. However, given the direct question for $x=1.5$, it implies using the interval $[1, 2]$. For backward difference at $x=2$: $f'(2) \approx \frac{f(2)-f(1)}{\Delta x} = 5$. This is not for $x=1.5$.

    Let's assume the question intends to estimate the derivative at $x=1$ and $x=2$, and then interpolate for $x=1.5$.
    $f'(1) \approx \frac{f(2)-f(0)}{2\Delta x} = \frac{10-2}{2(1)} = 4$ (Central diff)
    $f'(2) \approx \frac{f(3)-f(1)}{2\Delta x} = \frac{17-5}{2(1)} = 6$ (Central diff)
    Interpolating for $x=1.5$: $f'(1.5) \approx \frac{f'(1) + f'(2)}{2} = \frac{4+6}{2} = 5$.

    If the question strictly means fitting a polynomial through the available points and differentiating:
    Let's fit a quadratic through $(0,2), (1,5), (2,10)$. $P(x) = ax^2+bx+c$.
    $c=2$
    $a+b+c=5 \implies a+b=3$
    $4a+2b+c=10 \implies 4a+2b=8 \implies 2a+b=4$
    Subtracting $(a+b=3)$ from $(2a+b=4)$ gives $a=1$. Then $b=2$.
    $P(x) = x^2 + 2x + 2$. $P'(x) = 2x+2$.
    $P'(1.5) = 2(1.5) + 2 = 3+2=5$.

    Let's fit a cubic through $(0,2), (1,5), (2,10), (3,17)$. $f(x)=x^2+2x+2$. The function is exactly quadratic.
    If $f(x) = x^2 + 2x + 2$, then $f'(x) = 2x+2$.
    $f'(0) = 2$
    $f'(1) = 4$
    $f'(2) = 6$
    $f'(3) = 8$
    $f'(1.5) = 2(1.5)+2 = 5$.

    Let's re-address the initial interpretation of forward/backward/central differences *at* the point $x=1.5$ using available grid points. This usually involves points at $x=1$ and $x=2$.

    *   **Forward Difference at x=1.5 using points 1 and 2:** $f'(1.5) \approx \frac{f(2) - f(1)}{1} = \frac{10-5}{1} = 5$. (This is technically an approximation for $f'(1)$ if we are thinking of the interval $[1,2]$ and $f(2)$ is $f(1+\Delta x)$.)
    *   **Backward Difference at x=1.5 using points 1 and 2:** $f'(1.5) \approx \frac{f(1.5) - f(1)}{0.5}$. We don't have $f(1.5)$. If we use $x=2$ as reference point, it would be $f'(2) \approx \frac{f(2)-f(1)}{1} = 5$.
    *   **Central Difference at x=1.5 using points 1 and 2:** $f'(1.5) \approx \frac{f(2) - f(1)}{2 \times 0.5} = \frac{10-5}{1} = 5$. This uses $\Delta x = 0.5$ for the interval $[1, 2]$. The interval width is $2-1=1$. The points used are $x=1$ and $x=2$, with $x=1.5$ being exactly in the middle.

    **Let's assume the question implies using available discrete points:**
    We need to estimate $f'(1.5)$. The points surrounding $1.5$ are $1$ and $2$.
    *   **Using $f(1)$ and $f(2)$ as the points, with the target point $x=1.5$ lying between them:**
        *   Central difference: $f'(1.5) \approx \frac{f(2) - f(1)}{2 \times (1.5-1)} = \frac{10-5}{2 \times 0.5} = \frac{5}{1} = 5$. This assumes the interval width is $1$.

    *   **Considering the options provided:**
        *   a) Forward difference using $f(1)$ and $f(2)$: This is usually applied at point $x=1$, approximating $f'(1)$. The result is 5.
        *   b) Backward difference using $f(1)$ and $f(2)$: This is usually applied at point $x=2$, approximating $f'(2)$. The result is 5.
        *   c) Central difference using $f(1)$ and $f(2)$: This is applied at $x=1.5$. The formula is $\frac{f(2) - f(1)}{2 \times \Delta x}$, where $\Delta x$ is the step size between $1$ and $1.5$, which is $0.5$. So, $\frac{f(2) - f(1)}{2 \times 0.5} = \frac{10-5}{1} = 5$.
        *   d) Central difference using $f(0), f(1), f(2)$: This approximates the derivative at $x=1$. The result is 4. This does not estimate $f'(1.5)$.

    Given the values $f(0)=2, f(1)=5, f(2)=10$, the function seems to be $f(x) = x^2+2x+2$.
    In this case, $f'(x) = 2x+2$.
    $f'(1.5) = 2(1.5) + 2 = 3+2 = 5$.
    All the relevant approximations (central difference using $f(1), f(2)$ for $f'(1.5)$) yield 5.

    **Most accurate and why:** The central difference approximation (c) using $f(1)$ and $f(2)$ for $f'(1.5)$ is the most appropriate as it directly targets the point of interest and uses the closest surrounding grid points. It's second-order accurate, whereas forward/backward differences are first-order. Also, since the underlying function is quadratic, the second-order central difference approximation is exact for the first derivative at the midpoint of the interval.

3.  **Discretization of $\frac{\partial u}{\partial t} + c \frac{\partial u}{\partial x} = 0$**:
    Let $u_i^n = u(x_i, t_n)$, where $x_i = i \Delta x$ and $t_n = n \Delta t$.

    *   **Forward difference for time derivative:**
        $\frac{\partial u}{\partial t} \bigg|_{i}^n \approx \frac{u_i^{n+1} - u_i^n}{\Delta t}$

    *   **Central difference for spatial derivative:**
        $\frac{\partial u}{\partial x} \bigg|_{i}^n \approx \frac{u_{i+1}^n - u_{i-1}^n}{2 \Delta x}$

    Substituting into the PDE:
    $\frac{u_i^{n+1} - u_i^n}{\Delta t} + c \left( \frac{u_{i+1}^n - u_{i-1}^n}{2 \Delta x} \right) = 0$

    Rearranging to solve for $u_i^{n+1}$:
    $u_i^{n+1} = u_i^n - c \Delta t \left( \frac{u_{i+1}^n - u_{i-1}^n}{2 \Delta x} \right)$

    This is the explicit Forward Time Central Space (FTCS) scheme for the advection equation.

---

### Important Points to Remember

*   **Taylor series** is the fundamental tool for deriving finite difference approximations.
*   **Central difference schemes** are generally more accurate (higher order of accuracy) than forward or backward difference schemes for the same grid spacing.
*   **Truncation error** determines the accuracy of a finite difference scheme. Lower order of $\Delta x$ in error means higher accuracy.
*   **Grid spacing ($\Delta x$) and time step ($\Delta t$)** significantly affect accuracy and stability of numerical schemes.
*   **Boundary conditions** must be discretized correctly and incorporated into the algebraic system.
*   **Polynomial fitting** offers an alternative method for deriving approximations, useful for non-uniform grids.

---

### Alignment with Course Outcomes

*   **CO1 (K2):** Understanding the governing equations of fluid flow and heat transfer naturally leads to the need for discretization, forming the basis of this topic.
*   **CO2 (K3):** This module directly addresses applying finite difference methods to discretize PDEs, providing the core techniques for solving them numerically.
*   **CO5 (K3):** The ability to discretize equations is a prerequisite for generating numerical results that can then be interpreted graphically.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### References

*   Anderson Jr., J. D. (2012). *Computational Fluid Dynamics* (2nd ed.). McGraw-Hill. (Chapters 2)
*   Patankar, S. V. (2017). *Numerical Heat Transfer and Fluid Flow*. McGraw-Hill. (General principles of discretization, though often focusing on FVM)
*   Versteeg, H., & Malalasekera, W. (2008). *An Introduction to Computational Fluid Dynamics: The Finite Volume Method* (2nd ed.). Pearson. (While FVM focused, the underlying principles of approximating derivatives are related)
*   Date, A. W. (2005). *Introduction to computational fluid dynamics*. Cambridge University Press. (Provides alternative perspectives on discretization)
*   Sastry, S. S. (2012). *Introductory methods to numerical analysis*. PHI Learning Private Ltd. (Covers Taylor series and finite differences)

This concludes the study notes for Topic 2 of Module 2 on Discretization in Computational Fluid Dynamics.