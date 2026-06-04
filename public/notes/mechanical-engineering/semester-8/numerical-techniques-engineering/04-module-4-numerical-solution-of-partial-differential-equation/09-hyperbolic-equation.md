---
title: "Hyperbolic equation"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 4: Numerical solution of partial differential equation"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646c9"
status: "completed"
scrapedAt: "2026-05-20T18:23:28.834Z"
---
# NUMERICAL TECHNIQUES ENGINEERING: Module 4 - Numerical Solution of Partial Differential Equations

## Topic: Hyperbolic Equations

**Course Outcomes Addressed:**
*   **CO4:** Execute numerical procedures to solve ordinary and partial differential equations (Knowledge Level: K3)

---

### 1. Introduction to Hyperbolic Partial Differential Equations (PDEs)

**1.1 What are Hyperbolic PDEs?**

Hyperbolic PDEs are a class of second-order partial differential equations that describe phenomena involving wave propagation. They are characterized by their ability to represent phenomena where information propagates at a finite speed.

**Key Characteristics:**

*   **Wave-like behavior:** Solutions often exhibit oscillations and propagation of disturbances.
*   **Finite speed of propagation:** Information does not travel instantaneously across the domain.
*   **Domain of dependence:** The solution at a point $(x, t)$ depends on the initial/boundary conditions within a specific region of the domain.

**1.2 Classification of Second-Order PDEs**

A general second-order linear PDE in two independent variables $x$ and $t$ is given by:

$A \frac{\partial^2 u}{\partial x^2} + B \frac{\partial^2 u}{\partial x \partial t} + C \frac{\partial^2 u}{\partial t^2} + D \frac{\partial u}{\partial x} + E \frac{\partial u}{\partial t} + F u = G$

The classification of the PDE depends on the discriminant $\Delta = B^2 - 4AC$:

*   **Hyperbolic:** If $\Delta > 0$. This is the focus of this topic.
*   **Parabolic:** If $\Delta = 0$.
*   **Elliptic:** If $\Delta < 0$.

**1.3 Canonical Form of Hyperbolic Equations**

The simplest and most important form of a hyperbolic PDE is the one-dimensional wave equation:

$\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$

where:
*   $u(x, t)$ is the dependent variable (e.g., displacement of a string).
*   $x$ is the spatial variable.
*   $t$ is the time variable.
*   $c$ is the wave speed, a constant.

This equation is hyperbolic because in the classification above, $A = -c^2$, $B = 0$, and $C = 1$. Therefore, $\Delta = B^2 - 4AC = 0^2 - 4(-c^2)(1) = 4c^2 > 0$.

**1.4 Initial and Boundary Conditions**

To solve a hyperbolic PDE, we need appropriate initial and boundary conditions:

*   **Initial Conditions (ICs):** These specify the state of the system at the initial time ($t=0$). For the wave equation, this typically involves the initial displacement and initial velocity:
    *   $u(x, 0) = f(x)$ (Initial displacement)
    *   $\frac{\partial u}{\partial t}(x, 0) = g(x)$ (Initial velocity)

*   **Boundary Conditions (BCs):** These specify the behavior of the solution at the spatial boundaries of the domain. Common types include:
    *   **Dirichlet BCs:** $u(0, t) = \alpha(t)$ and $u(L, t) = \beta(t)$ (fixed ends).
    *   **Neumann BCs:** $\frac{\partial u}{\partial x}(0, t) = \gamma(t)$ and $\frac{\partial u}{\partial x}(L, t) = \delta(t)$ (fixed slope/free ends).
    *   **Mixed BCs:** A combination of Dirichlet and Neumann.

**Textbook References:**

*   **Chapra & Canale (6th Ed):** Chapter 18 discusses numerical methods for PDEs, including hyperbolic equations. They introduce the wave equation and discuss finite difference methods for its solution.
*   **Gupta (1995):** Likely covers classification of PDEs and the wave equation in its introductory chapters on numerical methods for PDEs.
*   **Balagurusamy (2017):** Similar to others, it will introduce PDEs and their classification before diving into numerical techniques.

---

### 2. Numerical Methods for Hyperbolic Equations

The primary numerical approach for hyperbolic PDEs is the **finite difference method (FDM)**. This involves discretizing the domain (both space and time) and approximating the derivatives using finite differences.

**2.1 Discretization of the Domain**

Consider the one-dimensional wave equation: $\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$.

We discretize the spatial domain $0 \le x \le L$ into $N$ segments, creating $N+1$ grid points $x_i = i \Delta x$, where $i = 0, 1, \ldots, N$, and $\Delta x = L/N$.

We discretize the time domain $t \ge 0$ into time steps $t_j = j \Delta t$, where $j = 0, 1, 2, \ldots$, and $\Delta t$ is the time step size.

Let $u_i^j$ denote the approximate solution at grid point $(x_i, t_j)$.

**2.2 Finite Difference Approximations**

We replace the partial derivatives with finite difference approximations:

*   **Second spatial derivative ($\frac{\partial^2 u}{\partial x^2}$):**
    The central difference approximation is generally preferred for its second-order accuracy:
    $\frac{\partial^2 u}{\partial x^2}\Big|_{x_i, t_j} \approx \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2}$

*   **Second time derivative ($\frac{\partial^2 u}{\partial t^2}$):**
    Similarly, the central difference approximation is commonly used:
    $\frac{\partial^2 u}{\partial t^2}\Big|_{x_i, t_j} \approx \frac{u_i^{j+1} - 2u_i^j + u_i^{j-1}}{(\Delta t)^2}$

**2.3 Derivation of Numerical Schemes**

Substituting these approximations into the wave equation:

$\frac{u_i^{j+1} - 2u_i^j + u_i^{j-1}}{(\Delta t)^2} = c^2 \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2}$

This is a **three-level scheme** because it involves solutions at three time levels ($j+1$, $j$, and $j-1$). To proceed, we need the solution at the current and previous time steps.

**2.3.1 Explicit Schemes**

The most common explicit scheme for hyperbolic equations is the **Leapfrog Scheme** (or Forward-Time Central-Space - FTCS for the spatial part, but combined with central in time for the temporal part).

Rearranging the discretized equation to solve for $u_i^{j+1}$ (the solution at the next time step):

$u_i^{j+1} = 2u_i^j - u_i^{j-1} + \left(\frac{c \Delta t}{\Delta x}\right)^2 (u_{i+1}^j - 2u_i^j + u_{i-1}^j)$

Let $r = \frac{c \Delta t}{\Delta x}$. This parameter is crucial for stability.
$u_i^{j+1} = 2u_i^j - u_i^{j-1} + r^2 (u_{i+1}^j - 2u_i^j + u_{i-1}^j)$

**Handling the first time step (j=0):**

The Leapfrog scheme requires values at $t_{j-1}$, which is not available at $t=0$. We need to find $u_i^1$ using a different method.

*   **Initial Velocity $g(x) = \frac{\partial u}{\partial t}(x, 0)$:**
    We can approximate this using a central difference at $t=0$:
    $\frac{\partial u}{\partial t}(x_i, 0) \approx \frac{u_i^1 - u_i^{-1}}{2 \Delta t} = g(x_i)$
    So, $u_i^{-1} = u_i^1 - 2 \Delta t g(x_i)$.

    Now, substitute this into the Leapfrog scheme for $j=0$:
    $u_i^1 = 2u_i^0 - u_i^{-1} + r^2 (u_{i+1}^0 - 2u_i^0 + u_{i-1}^0)$
    $u_i^1 = 2u_i^0 - (u_i^1 - 2 \Delta t g(x_i)) + r^2 (u_{i+1}^0 - 2u_i^0 + u_{i-1}^0)$
    $2u_i^1 = 2u_i^0 + 2 \Delta t g(x_i) + r^2 (u_{i+1}^0 - 2u_i^0 + u_{i-1}^0)$
    $u_i^1 = u_i^0 + \Delta t g(x_i) + \frac{r^2}{2} (u_{i+1}^0 - 2u_i^0 + u_{i-1}^0)$

    This equation allows us to compute the solution at the first time step $j=1$ using the initial conditions ($u_i^0 = f(x_i)$ and $g(x_i)$).

**2.3.2 Stability of the Explicit Scheme (Leapfrog)**

The stability of finite difference schemes is crucial. An unstable scheme will produce solutions that grow unboundedly, even for small errors.

For the Leapfrog scheme applied to the wave equation, the **Courant-Friedrichs-Lewy (CFL) condition** must be satisfied:

$r = \frac{c \Delta t}{\Delta x} \le 1$

This condition states that the distance covered by the wave in one time step ($c \Delta t$) must be less than or equal to the spatial discretization step ($\Delta x$). In other words, the numerical domain of dependence must contain the physical domain of dependence.

**Important Point:** If $r > 1$, the explicit Leapfrog scheme becomes unstable. Choosing $\Delta t$ sufficiently small relative to $\Delta x$ is essential.

**Textbook References:**

*   **Chapra & Canale (6th Ed):** Chapter 18.2 discusses explicit finite difference solutions for the wave equation. They derive the Leapfrog scheme and explain the CFL condition for stability.
*   **Gerald & Wheatly (6th Ed):** Likely covers the derivation and analysis of explicit schemes for hyperbolic equations.
*   **Jain, Iyengar & Jain:** Provide detailed theoretical treatment of stability analysis for finite difference methods.

---

### 3. Example: Solving the 1D Wave Equation Numerically

**Problem:** Solve the 1D wave equation $\frac{\partial^2 u}{\partial t^2} = \frac{\partial^2 u}{\partial x^2}$ with the following conditions:
*   Domain: $0 \le x \le 1$
*   Initial displacement: $u(x, 0) = \sin(\pi x)$
*   Initial velocity: $\frac{\partial u}{\partial t}(x, 0) = 0$
*   Boundary conditions: $u(0, t) = 0$ and $u(1, t) = 0$ for all $t \ge 0$.

Here, $c=1$. Let's choose $\Delta x = 0.1$ and $\Delta t = 0.05$.
Then $r = \frac{c \Delta t}{\Delta x} = \frac{1 \times 0.05}{0.1} = 0.5$. Since $r \le 1$, the CFL condition is satisfied.

**Discretization:**
*   $L = 1$, $\Delta x = 0.1 \implies N = 10$ spatial points ($x_0=0, x_1=0.1, \ldots, x_{10}=1$).
*   $\Delta t = 0.05$.
*   $r = 0.5$.

**Numerical Scheme:**
$u_i^{j+1} = 2u_i^j - u_i^{j-1} + r^2 (u_{i+1}^j - 2u_i^j + u_{i-1}^j)$
$u_i^{j+1} = 2u_i^j - u_i^{j-1} + (0.5)^2 (u_{i+1}^j - 2u_i^j + u_{i-1}^j)$
$u_i^{j+1} = 2u_i^j - u_i^{j-1} + 0.25 (u_{i+1}^j - 2u_i^j + u_{i-1}^j)$

**Initial Conditions (j=0):**
*   $u_i^0 = \sin(\pi x_i) = \sin(0.1 \pi i)$ for $i = 0, 1, \ldots, 10$.
*   $\frac{\partial u}{\partial t}(x_i, 0) = 0 \implies g(x_i) = 0$.

**First Time Step (j=1):**
We use the formula derived earlier:
$u_i^1 = u_i^0 + \Delta t g(x_i) + \frac{r^2}{2} (u_{i+1}^0 - 2u_i^0 + u_{i-1}^0)$
Since $g(x_i)=0$:
$u_i^1 = u_i^0 + \frac{r^2}{2} (u_{i+1}^0 - 2u_i^0 + u_{i-1}^0)$
$u_i^1 = u_i^0 + \frac{(0.5)^2}{2} (u_{i+1}^0 - 2u_i^0 + u_{i-1}^0)$
$u_i^1 = u_i^0 + 0.125 (u_{i+1}^0 - 2u_i^0 + u_{i-1}^0)$

**Boundary Conditions:**
*   $u_0^j = 0$ for all $j$.
*   $u_{10}^j = 0$ for all $j$.

**Calculation Steps:**

1.  **Initialize at $t=0$ (j=0):**
    Calculate $u_i^0$ for $i=0, \ldots, 10$ using $u_i^0 = \sin(0.1 \pi i)$.
    *   $u_0^0 = \sin(0) = 0$
    *   $u_1^0 = \sin(0.1\pi) \approx 0.3090$
    *   $u_2^0 = \sin(0.2\pi) \approx 0.5878$
    *   ...
    *   $u_5^0 = \sin(0.5\pi) = 1.0$
    *   ...
    *   $u_{10}^0 = \sin(\pi) = 0$

2.  **Calculate at $t=\Delta t$ (j=1):**
    Use the formula for $u_i^1$ for $i=1, \ldots, 9$.
    *   For $i=1$: $u_1^1 = u_1^0 + 0.125 (u_2^0 - 2u_1^0 + u_0^0)$
        $u_1^1 \approx 0.3090 + 0.125 (0.5878 - 2 \times 0.3090 + 0) \approx 0.3090 + 0.125 (0.5878 - 0.6180) \approx 0.3090 - 0.0039 \approx 0.3051$
    *   Repeat for $i=2, \ldots, 9$. Remember $u_0^1=0$ and $u_{10}^1=0$.

3.  **Calculate at $t=2\Delta t$ (j=2):**
    Use the main Leapfrog scheme:
    $u_i^2 = 2u_i^1 - u_i^0 + 0.25 (u_{i+1}^1 - 2u_i^1 + u_{i-1}^1)$
    *   For $i=1$: $u_1^2 = 2u_1^1 - u_1^0 + 0.25 (u_2^1 - 2u_1^1 + u_0^1)$
        $u_1^2 \approx 2(0.3051) - 0.3090 + 0.25 (u_2^1 - 2(0.3051) + 0) \approx 0.6102 - 0.3090 + 0.25 (u_2^1 - 0.6102)$
        (We would need $u_2^1$ to complete this calculation).

4.  **Continue for subsequent time steps.**

---

### 4. Implicit Schemes for Hyperbolic Equations

Explicit schemes like Leapfrog are easy to implement but require a small time step due to stability constraints (CFL condition). Implicit schemes overcome this by using the unknown values at the current time step ($j+1$) to approximate derivatives. This leads to a system of linear equations that needs to be solved at each time step, but allows for larger time steps.

**4.1 The Crank-Nicolson Method (for Hyperbolic PDEs)**

While often associated with parabolic equations, the Crank-Nicolson method can also be applied to hyperbolic equations. It involves averaging the spatial derivative approximations at the current and next time levels.

For the wave equation $\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$:

Approximate the time derivative at time level $j+1/2$:
$\frac{u_i^{j+1} - 2u_i^j + u_i^{j-1}}{(\Delta t)^2}$

Approximate the spatial derivative by averaging at $j+1$ and $j$:
$c^2 \frac{1}{2} \left( \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2} + \frac{u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1}}{(\Delta x)^2} \right)$

Equating these and rearranging to group unknown terms ($j+1$ level) on one side and known terms ($j$ level) on the other:

$\frac{u_i^{j+1} - 2u_i^j + u_i^{j-1}}{(\Delta t)^2} = \frac{c^2}{2(\Delta x)^2} (u_{i+1}^j - 2u_i^j + u_{i-1}^j + u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1})$

Let $r^2 = \left(\frac{c \Delta t}{\Delta x}\right)^2$.
$u_i^{j+1} - 2u_i^j + u_i^{j-1} = \frac{r^2}{2} (u_{i+1}^j - 2u_i^j + u_{i-1}^j + u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1})$

To make it a two-level scheme, we need to handle the $u_i^{j-1}$ term. This often involves using a lower-order approximation for the second time derivative, or special treatment for the first time step. A common approach is to use the Leapfrog scheme for the first step and then switch to Crank-Nicolson, or to use a finite difference for $\frac{\partial^2 u}{\partial t^2}$ that only involves $j$ and $j+1$ levels, or a combination of methods.

A more direct approach for a two-level implicit scheme for the wave equation is often derived by approximating the time derivative as:
$\frac{u_i^{j+1} - 2u_i^j + u_i^{j-1}}{(\Delta t)^2} \approx c^2 \frac{1}{2} \left( \frac{\partial^2 u}{\partial x^2}(x_i, t_{j+1}) + \frac{\partial^2 u}{\partial x^2}(x_i, t_j) \right)$

This leads to:
$u_i^{j+1} - 2u_i^j + u_i^{j-1} = \frac{r^2}{2} (u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1} + u_{i+1}^j - 2u_i^j + u_{i-1}^j)$

This equation still requires $u_i^{j-1}$, making it a three-level scheme. To make it two-level and implicit, we often need to adapt the formulation or use approximations for the initial velocity.

**Let's consider a common implicit approach for hyperbolic equations (like the Lax-Wendroff scheme, which is often considered "semi-implicit" or "explicit with correction", or truly implicit schemes that approximate the temporal derivative differently):**

A more standard implicit approach for the wave equation involves approximating the time derivative using values from the previous time step as well.

Consider the wave equation: $u_{tt} - c^2 u_{xx} = 0$.
We can rewrite this as a system of first-order PDEs:
1. $u_t = v$
2. $v_t = c^2 u_{xx}$
where $v = u_t$.

Now, discretize these:
1. $\frac{u_i^{j+1} - u_i^j}{\Delta t} = v_i^j$ (Forward Euler for the first equation)
2. $\frac{v_i^{j+1} - v_i^j}{\Delta t} = c^2 \frac{v_{i+1}^j - 2v_i^j + v_{i-1}^j}{(\Delta x)^2}$ (Central difference for the second equation)

This is not truly implicit for solving $u$.

**A truly implicit two-level scheme can be formulated, but it often involves a different approach than directly applying Crank-Nicolson to the second-order wave equation.**

**Alternative Implicit Approach (e.g., using Lax-Wendroff idea implicitly):**

Let's discretize $u_{tt} - c^2 u_{xx} = 0$ using a finite difference approximation that is implicit in time. One way is to consider the spatial derivative at the current time step $j$ and the next time step $j+1$.

A common and stable implicit scheme for hyperbolic equations is the **implicit finite difference scheme** that discretizes both $u_{tt}$ and $u_{xx}$ using values at $t_{j+1}$ and $t_j$. For instance, approximating $u_{xx}$ using $j+1$ values and $u_{tt}$ using $j$ and $j+1$:

$\frac{u_i^{j+1} - 2u_i^j + u_i^{j-1}}{(\Delta t)^2} = c^2 \frac{u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1}}{(\Delta x)^2}$

This form still requires $u_i^{j-1}$.

**Consider a two-level implicit formulation:**
$\frac{u_i^{j+1} - 2u_i^j + u_i^{j-1}}{(\Delta t)^2} \approx c^2 \frac{1}{2} \left(\frac{\partial^2 u}{\partial x^2}(x_i, t_{j+1}) + \frac{\partial^2 u}{\partial x^2}(x_i, t_j)\right)$

This is what was discussed earlier and leads to:
$u_i^{j+1} - 2u_i^j + u_i^{j-1} = \frac{r^2}{2} (u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1} + u_{i+1}^j - 2u_i^j + u_{i-1}^j)$

To make it a two-level scheme (solvable for $u_i^{j+1}$ based on $u_i^j$), we need to deal with the $u_i^{j-1}$ term. If we assume $g(x)$ is zero, then $u_i^{-1} = u_i^0 - 2\Delta t g(x_i)$. If $g(x)=0$, $u_i^{-1} = u_i^0$.

A common implicit scheme that uses only two time levels is:
$\frac{u_i^{j+1} - 2u_i^j + u_i^{j-1}}{(\Delta t)^2} = c^2 \left[ \theta \left( \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2} \right) + (1-\theta) \left( \frac{u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1}}{(\Delta x)^2} \right) \right]$

If $\theta = 1$, it's explicit.
If $\theta = 0$, it's fully implicit (spatial derivative evaluated at $j+1$).
If $\theta = 1/2$, it's the Crank-Nicolson type.

Let's consider the fully implicit scheme ($\theta=0$):
$\frac{u_i^{j+1} - 2u_i^j + u_i^{j-1}}{(\Delta t)^2} = c^2 \frac{u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1}}{(\Delta x)^2}$

This still has $u_i^{j-1}$. This suggests that for a two-level implicit scheme for the wave equation, we often need to approximate $u_{tt}$ using a two-level finite difference.

**Alternative Two-Level Implicit Scheme:**
Often, for the wave equation, implicit schemes are derived from the system of first-order equations:
$u_t = v$
$v_t = c^2 u_{xx}$

Implicit Discretization for the system:
1. $\frac{u_i^{j+1} - u_i^j}{\Delta t} = \frac{v_i^{j+1} + v_i^j}{2}$ (Trapezoidal rule for $u_t$)
2. $\frac{v_i^{j+1} - v_i^j}{\Delta t} = c^2 \frac{1}{2} \left( \frac{u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1}}{(\Delta x)^2} + \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2} \right)$ (Crank-Nicolson for $v_t$)

From (1), we get $u_i^{j+1} = u_i^j + \frac{\Delta t}{2}(v_i^{j+1} + v_i^j)$.
Substitute $v_i^{j+1}$ from (2) into this equation. This will lead to a system of equations for $u_i^{j+1}$ that needs to be solved.

Let $r = \frac{c \Delta t}{\Delta x}$.
Equation (2) can be rewritten as:
$\frac{2}{\Delta t}(v_i^{j+1} - v_i^j) = \frac{c^2}{(\Delta x)^2} (u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1} + u_{i+1}^j - 2u_i^j + u_{i-1}^j)$
$\frac{2}{\Delta t}(v_i^{j+1} - v_i^j) = r^2 \frac{1}{(\Delta x)^2} (u_{i+1}^{j+1} - 2u_i^{j+1} + u_{i-1}^{j+1} + u_{i+1}^j - 2u_i^j + u_{i-1}^j)$

This leads to a system of tridiagonal linear equations for $v_i^{j+1}$ if we rearrange it. After solving for $v_i^{j+1}$, we can find $u_i^{j+1}$ from equation (1).

**Stability of Implicit Schemes:**
Implicit schemes are generally unconditionally stable for hyperbolic equations, meaning any $\Delta t$ and $\Delta x$ can be used. However, numerical dispersion (error in wave speed) can still be a problem.

**Textbook References:**

*   **Chapra & Canale (6th Ed):** While they focus heavily on explicit schemes for hyperbolic PDEs, implicit schemes are discussed for parabolic equations, and the general concept of solving a system of equations applies.
*   **Gerald & Wheatly (6th Ed):** Discusses various finite difference methods, including implicit ones, and their stability properties.
*   **Jain, Iyengar & Jain:** Provides rigorous analysis of stability and convergence for implicit methods applied to hyperbolic PDEs.

---

### 5. Higher-Order Methods and Other Approaches

**5.1 Higher-Order Explicit Schemes (e.g., Lax-Wendroff)**

The Lax-Wendroff scheme is a two-step explicit method that uses Taylor series expansions to achieve second-order accuracy in both space and time. It is more stable than the simple Leapfrog scheme and can sometimes allow for slightly larger time steps, though still subject to a CFL condition.

The Lax-Wendroff scheme approximates $u_i^{j+1}$ by considering the Taylor expansion of $u(x, t+\Delta t)$ around $(x_i, t_j)$.

$u(x, t+\Delta t) = u(x, t) + \Delta t u_t(x, t) + \frac{(\Delta t)^2}{2} u_{tt}(x, t) + O((\Delta t)^3)$

Using the wave equation ($u_{tt} = c^2 u_{xx}$) and its derivatives:
$u_t = c^2 u_{xx}$
$u_{tt} = c^2 u_{xxxx}$

Substituting into the Taylor expansion:
$u(x, t+\Delta t) \approx u(x, t) + \Delta t (c^2 u_{xx}(x, t)) + \frac{(\Delta t)^2}{2} (c^2 u_{xxxx}(x, t))$

Replacing spatial derivatives with finite differences (central differences for $u_{xx}$ and $u_{xxxx}$):

$u_i^{j+1} = u_i^j + \Delta t c^2 \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{2(\Delta x)^2} + \frac{(\Delta t)^2}{2} c^2 \frac{u_{i+2}^j - 4u_{i+1}^j + 6u_i^j - 4u_{i-1}^j + u_{i-2}^j}{(\Delta x)^4}$

This formulation requires computing $u$ up to $x_{i+2}$ and $x_{i-2}$. The Lax-Wendroff scheme is often presented in a two-step form to simplify computation and improve stability.

**Two-step Lax-Wendroff:**
Step 1: Compute intermediate values at $t_{j+1/2}$.
$u_{i+1/2}^{j+1/2} = \frac{1}{2}(u_i^j + u_{i+1}^j) + \frac{\Delta t}{2} c \frac{u_{i+1}^j - u_i^j}{\Delta x}$
$v_{i+1/2}^{j+1/2} = \frac{1}{2}(v_i^j + v_{i+1}^j) + \frac{\Delta t}{2} c^2 \frac{u_{i+1}^j - 2u_i^j + u_{i-1}^j}{(\Delta x)^2}$ (Incorrect; should be related to spatial derivative of $v$)

A better two-step approach using the system of first-order equations is more common for Lax-Wendroff.

**Stability for Lax-Wendroff:**
The CFL condition is $r = \frac{c \Delta t}{\Delta x} \le 1$ for the second-order version.

**5.2 Spectral Methods**

Spectral methods use global basis functions (like sines and cosines) to represent the solution. They can achieve very high accuracy (exponential convergence) when the solution is smooth, but are typically more complex to implement.

**5.3 Finite Element Methods (FEM)**

FEM divides the domain into smaller elements and approximates the solution within each element using basis functions. It is very versatile for complex geometries and boundary conditions. For hyperbolic equations, specialized FEM formulations like discontinuous Galerkin methods are often used to handle wave propagation accurately.

**Textbook References:**

*   **Chapra & Canale (6th Ed):** Might briefly mention higher-order methods or other approaches in advanced sections.
*   **Gerald & Wheatly (6th Ed):** Could cover Lax-Wendroff and potentially introduce spectral or FEM concepts at an introductory level.
*   **Jain, Iyengar & Jain:** Detailed discussions on Lax-Wendroff, and potentially on spectral and FEM methods for PDEs.
*   **Suli & Mayers:** A more advanced text, likely to cover spectral methods and possibly advanced FEM for hyperbolic problems.

---

### 6. Practice Questions and Answers

**Question 1:**
Consider the 1D wave equation $\frac{\partial^2 u}{\partial t^2} = 4 \frac{\partial^2 u}{\partial x^2}$ with $c=2$.
Initial conditions: $u(x, 0) = \sin(2\pi x)$ and $\frac{\partial u}{\partial t}(x, 0) = 0$.
Boundary conditions: $u(0, t) = 0$ and $u(1, t) = 0$.
Domain: $0 \le x \le 1$.

Use the explicit Leapfrog scheme with $\Delta x = 0.1$ and $\Delta t = 0.02$.
Calculate $u_1^1$ and $u_1^2$.

**Answer 1:**
Here, $c=2$, $\Delta x = 0.1$, $\Delta t = 0.02$.
$r = \frac{c \Delta t}{\Delta x} = \frac{2 \times 0.02}{0.1} = \frac{0.04}{0.1} = 0.4$.
Since $r=0.4 \le 1$, the scheme is stable.

The Leapfrog scheme is:
$u_i^{j+1} = 2u_i^j - u_i^{j-1} + r^2 (u_{i+1}^j - 2u_i^j + u_{i-1}^j)$
$u_i^{j+1} = 2u_i^j - u_i^{j-1} + (0.4)^2 (u_{i+1}^j - 2u_i^j + u_{i-1}^j)$
$u_i^{j+1} = 2u_i^j - u_i^{j-1} + 0.16 (u_{i+1}^j - 2u_i^j + u_{i-1}^j)$

Initial conditions at $j=0$:
$u_i^0 = \sin(2\pi x_i) = \sin(2\pi (0.1 i)) = \sin(0.2\pi i)$.
$\frac{\partial u}{\partial t}(x_i, 0) = 0 \implies g(x_i)=0$.

**Calculation of $u_1^1$ (at $t=0.02$):**
Use the special formula for the first time step (since $g(x_i)=0$):
$u_i^1 = u_i^0 + \frac{r^2}{2} (u_{i+1}^0 - 2u_i^0 + u_{i-1}^0)$
For $i=1$:
$u_1^1 = u_1^0 + \frac{0.16}{2} (u_2^0 - 2u_1^0 + u_0^0)$
$u_1^1 = u_1^0 + 0.08 (u_2^0 - 2u_1^0 + u_0^0)$

$u_0^0 = \sin(0) = 0$
$u_1^0 = \sin(0.2\pi) \approx 0.5878$
$u_2^0 = \sin(0.4\pi) \approx 0.9511$

$u_1^1 \approx 0.5878 + 0.08 (0.9511 - 2 \times 0.5878 + 0)$
$u_1^1 \approx 0.5878 + 0.08 (0.9511 - 1.1756)$
$u_1^1 \approx 0.5878 + 0.08 (-0.2245)$
$u_1^1 \approx 0.5878 - 0.01796 \approx 0.5698$

**Calculation of $u_1^2$ (at $t=0.04$):**
Use the main Leapfrog scheme:
$u_i^2 = 2u_i^1 - u_i^0 + 0.16 (u_{i+1}^1 - 2u_i^1 + u_{i-1}^1)$

For $i=1$:
$u_1^2 = 2u_1^1 - u_1^0 + 0.16 (u_2^1 - 2u_1^1 + u_0^1)$

We need $u_0^1$ and $u_2^1$.
$u_0^1 = 0$ (boundary condition).
$u_2^1 = u_2^0 + 0.08 (u_3^0 - 2u_2^0 + u_1^0)$
$u_3^0 = \sin(0.6\pi) \approx 0.9511$
$u_2^1 \approx 0.9511 + 0.08 (0.9511 - 2 \times 0.9511 + 0.5878)$
$u_2^1 \approx 0.9511 + 0.08 (0.9511 - 1.9022 + 0.5878)$
$u_2^1 \approx 0.9511 + 0.08 (-0.3633) \approx 0.9511 - 0.0291 \approx 0.9220$

Now substitute values into the equation for $u_1^2$:
$u_1^2 \approx 2(0.5698) - 0.5878 + 0.16 (0.9220 - 2 \times 0.5698 + 0)$
$u_1^2 \approx 1.1396 - 0.5878 + 0.16 (0.9220 - 1.1396)$
$u_1^2 \approx 0.5518 + 0.16 (-0.2176)$
$u_1^2 \approx 0.5518 - 0.0348 \approx 0.5170$

---

**Question 2:**
Discuss the stability condition for the explicit Leapfrog scheme applied to the 1D wave equation and explain its physical meaning.

**Answer 2:**
The explicit Leapfrog scheme for the 1D wave equation $\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$ is given by:
$u_i^{j+1} = 2u_i^j - u_i^{j-1} + r^2 (u_{i+1}^j - 2u_i^j + u_{i-1}^j)$, where $r = \frac{c \Delta t}{\Delta x}$.

The stability condition is the **Courant-Friedrichs-Lewy (CFL) condition**:
$|r| \le 1$, which means $\frac{c \Delta t}{\Delta x} \le 1$.

**Physical Meaning of the CFL Condition:**

The CFL condition ensures that the numerical domain of dependence includes the physical domain of dependence.

*   **Physical Domain of Dependence:** For a hyperbolic equation, the solution at a point $(x, t)$ depends on the initial and boundary conditions within a region of the domain bounded by the characteristic lines. For the wave equation, these characteristics have slopes $\pm \frac{1}{c}$.

*   **Numerical Domain of Dependence:** The finite difference scheme approximates the PDE using values at discrete grid points. The numerical domain of dependence for the scheme at point $(x_i, t_{j+1})$ includes the grid points at the previous time level ($t_j$) and potentially earlier levels ($t_{j-1}$, etc.) that are used in the calculation.

The Leapfrog scheme calculates $u_i^{j+1}$ using values from $u_i^j$ and $u_i^{j-1}$ at points $x_{i-1}, x_i, x_{i+1}$. This means the numerical solution propagates information from three spatial points over one time step.

The CFL condition $\frac{c \Delta t}{\Delta x} \le 1$ implies that $c \Delta t \le \Delta x$.
This means that the distance the physical wave travels in one time step ($c \Delta t$) is less than or equal to the spatial grid spacing ($\Delta x$).

If $c \Delta t > \Delta x$, the wave would travel from $x_i$ to $x_{i+1}$ (or $x_{i-1}$) in less than one time step. However, the explicit scheme only uses information from $x_{i-1}, x_i, x_{i+1}$ at the previous time step to calculate the value at $x_i$ in the next time step. If the wave propagates faster than the numerical scheme can "see" it (i.e., faster than $\Delta x / \Delta t$), the numerical solution cannot capture this propagation correctly, and errors amplify, leading to instability.

In essence, the time step $\Delta t$ must be small enough relative to the spatial step $\Delta x$ and the wave speed $c$ so that the numerical stencil captures the information carried by the physical characteristics of the wave.

---

### 7. Important Points to Remember

*   **Hyperbolic PDEs** model wave propagation phenomena. The canonical example is the 1D wave equation: $\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$.
*   **Finite Difference Method (FDM)** is the primary numerical technique.
*   **Explicit Schemes (e.g., Leapfrog):** Easy to implement, but require small time steps due to the **CFL condition** ($r = \frac{c \Delta t}{\Delta x} \le 1$) for stability.
*   **Implicit Schemes:** More complex to implement (involve solving systems of equations) but are generally unconditionally stable, allowing for larger time steps.
*   **Accuracy:** The order of accuracy of the finite difference approximations affects the overall accuracy of the solution. Central differences generally provide second-order accuracy.
*   **Domain of Dependence:** The CFL condition ensures that the numerical domain of dependence covers the physical domain of dependence.
*   **Higher-order schemes** (like Lax-Wendroff) can improve accuracy and sometimes allow larger time steps, but are more complex.
*   **Initial and Boundary Conditions** are crucial for a well-posed problem. Special care is needed for the first time step in explicit schemes when initial velocity is non-zero.

---

This concludes the study notes for Hyperbolic Equations within Module 4. Remember to consult your textbooks for detailed derivations and further examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
