---
title: "one–dimensional transient heat conduction problems -explicit, implicit, Crank- Nicholson schemes, under and over relaxations, handling of boundary conditions"
subject: "COMPUTATIONAL FLUID DYNAMICS"
module: "Module 3: Introduction to finite volume method."
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463439"
status: "completed"
scrapedAt: "2026-05-20T17:58:17.322Z"
---
# COMPUTATIONAL FLUID DYNAMICS
## Module 3: Introduction to Finite Volume Method

---

## Topic: One-Dimensional Transient Heat Conduction Problems - Explicit, Implicit, Crank-Nicolson Schemes, Under and Over-Relaxations, Handling of Boundary Conditions

**Learning Outcomes Covered:**
*   Understanding the governing equations for transient heat conduction.
*   Applying finite difference/volume methods to discretize the transient heat conduction equation.
*   Analyzing and implementing different numerical schemes (explicit, implicit, Crank-Nicolson) for solving the discretized equation.
*   Understanding and applying relaxation techniques to improve convergence.
*   Effectively handling various boundary conditions in the context of the finite volume method.

**Course Outcomes Alignment:**
*   **CO1 (K2):** Understanding the governing equations of heat transfer (specifically, the transient heat conduction equation).
*   **CO2 (K3):** Applying finite difference/volume methods to solve the transient heat conduction partial differential equation.
*   **CO3 (K3):** Demonstrating the use of the finite volume method for a simple 1D heat conduction problem.
*   **CO4 (K2):** Understanding different solution techniques (schemes) for transient problems.

---

### 1. Introduction to One-Dimensional Transient Heat Conduction

**Key Concept:** Heat transfer that changes with both time and position.

**Governing Equation:**
The general form of the one-dimensional transient heat conduction equation is given by:

$$ \rho c_p \frac{\partial T}{\partial t} = \frac{\partial}{\partial x} \left( k \frac{\partial T}{\partial x} \right) + q''' $$

Where:
*   $T(x, t)$ is the temperature at position $x$ and time $t$.
*   $\rho$ is the density of the material.
*   $c_p$ is the specific heat capacity.
*   $k$ is the thermal conductivity.
*   $q'''$ is the volumetric heat generation rate.

**Simplification for Constant Properties and No Heat Generation:**
For many practical problems, we can assume constant thermal conductivity ($k$) and no internal heat generation ($q''' = 0$). The equation then simplifies to:

$$ \rho c_p \frac{\partial T}{\partial t} = k \frac{\partial^2 T}{\partial x^2} $$

Or, in terms of thermal diffusivity ($\alpha = k / (\rho c_p)$):

$$ \frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2} $$

This is the standard **heat equation**, a parabolic partial differential equation (PDE).

**Finite Volume Method (FVM) Discretization:**
The FVM discretizes the domain into control volumes (CVs). For a 1D problem, we can consider CVs centered around grid points.

Consider a 1D domain discretized into $N$ grid points $x_1, x_2, \dots, x_N$.
Let the control volume around grid point $i$ extend from $x_{i-\frac{1}{2}}$ to $x_{i+\frac{1}{2}}$. The width of this CV is $\Delta x_i = x_{i+\frac{1}{2}} - x_{i-\frac{1}{2}}$. For uniform grids, $\Delta x_i = \Delta x$.

Integrating the simplified heat equation over a control volume $i$:

$$ \int_{CV_i} \frac{\partial T}{\partial t} \,dV = \int_{CV_i} \alpha \frac{\partial^2 T}{\partial x^2} \,dV $$

Assuming $\alpha$ is constant within the CV and integrating over the volume (which is area $A$ times $\Delta x_i$ in 3D, but just $\Delta x_i$ for our 1D analysis if we consider unit area):

$$ \frac{\partial T_i}{\partial t} \Delta x_i = \left[ \alpha A \frac{\partial T}{\partial x} \right]_{x_{i+\frac{1}{2}}} - \left[ \alpha A \frac{\partial T}{\partial x} \right]_{x_{i-\frac{1}{2}}} $$

Where $T_i$ is the average temperature in the CV centered at $x_i$. Assuming unit area $A=1$:

$$ \frac{\partial T_i}{\partial t} \Delta x_i = \alpha \left( \left. \frac{\partial T}{\partial x} \right|_{i+\frac{1}{2}} - \left. \frac{\partial T}{\partial x} \right|_{i-\frac{1}{2}} \right) $$

The spatial derivative (flux) at the face $i+\frac{1}{2}$ is approximated using the temperatures at the neighboring nodes $T_{i+1}$ and $T_i$. Using the central difference approximation for the flux:

$$ \left. \frac{\partial T}{\partial x} \right|_{i+\frac{1}{2}} \approx \frac{T_{i+1} - T_i}{\Delta x_{i+1}} $$
$$ \left. \frac{\partial T}{\partial x} \right|_{i-\frac{1}{2}} \approx \frac{T_i - T_{i-1}}{\Delta x_{i}} $$

Substituting these into the discretized equation:

$$ \frac{\partial T_i}{\partial t} \Delta x_i = \alpha \left( \frac{T_{i+1} - T_i}{\Delta x_{i+1}} - \frac{T_i - T_{i-1}}{\Delta x_{i}} \right) $$

For a uniform grid $\Delta x_i = \Delta x_{i+1} = \Delta x$:

$$ \frac{\partial T_i}{\partial t} \Delta x = \alpha \left( \frac{T_{i+1} - T_i}{\Delta x} - \frac{T_i - T_{i-1}}{\Delta x} \right) $$

$$ \frac{\partial T_i}{\partial t} = \frac{\alpha}{\Delta x^2} (T_{i+1} - 2T_i + T_{i-1}) $$

This is the discretized form of the spatial derivative. Now we need to discretize the time derivative.

---

### 2. Numerical Schemes for Time Discretization

We need to approximate $\frac{\partial T_i}{\partial t}$. Let $T_i^n$ be the temperature at grid point $i$ at time $t_n$, and let $\Delta t = t_{n+1} - t_n$ be the time step.

#### 2.1. Explicit Scheme (Forward Euler)

The explicit scheme approximates the time derivative using a forward difference at time level $n$:

$$ \frac{\partial T_i}{\partial t} \approx \frac{T_i^{n+1} - T_i^n}{\Delta t} $$

Substituting this into the discretized equation:

$$ \frac{T_i^{n+1} - T_i^n}{\Delta t} = \alpha \frac{T_{i+1}^n - 2T_i^n + T_{i-1}^n}{\Delta x^2} $$

Rearranging to solve for $T_i^{n+1}$:

$$ T_i^{n+1} = T_i^n + \frac{\alpha \Delta t}{\Delta x^2} (T_{i+1}^n - 2T_i^n + T_{i-1}^n) $$

Let $\lambda = \frac{\alpha \Delta t}{\Delta x^2}$. This is the **Courant number** (or Fourier number for heat conduction).

$$ T_i^{n+1} = T_i^n + \lambda (T_{i+1}^n - 2T_i^n + T_{i-1}^n) $$

$$ T_i^{n+1} = \lambda T_{i-1}^n + (1 - 2\lambda) T_i^n + \lambda T_{i+1}^n $$

**Key Characteristics:**
*   **Pros:** Simple to implement, computationally inexpensive per time step. $T_i^{n+1}$ can be calculated directly for each node.
*   **Cons:** **Conditional stability**. The scheme is only stable if $\lambda \le 0.5$ (for 1D heat conduction). This means a very small $\Delta t$ might be required for stability, especially with small $\Delta x$.

**Important Point:** The stability condition for the explicit scheme is crucial. If violated, the numerical solution will diverge.

**Reference:** Anderson Jr. (2012), Chapter 7 discusses explicit methods and their stability.

#### 2.2. Implicit Scheme (Backward Euler)

The implicit scheme approximates the time derivative using a backward difference at time level $n+1$:

$$ \frac{\partial T_i}{\partial t} \approx \frac{T_i^{n+1} - T_i^n}{\Delta t} $$

Using the spatial discretization at time level $n+1$:

$$ \frac{T_i^{n+1} - T_i^n}{\Delta t} = \alpha \frac{T_{i+1}^{n+1} - 2T_i^{n+1} + T_{i-1}^{n+1}}{\Delta x^2} $$

Rearranging:

$$ T_i^{n+1} - \lambda (T_{i+1}^{n+1} - 2T_i^{n+1} + T_{i-1}^{n+1}) = T_i^n $$

$$ -\lambda T_{i-1}^{n+1} + (1 + 2\lambda) T_i^{n+1} - \lambda T_{i+1}^{n+1} = T_i^n $$

**Key Characteristics:**
*   **Pros:** **Unconditionally stable**. Any $\Delta t$ can be used, allowing for larger time steps and potentially faster computation for long-time simulations.
*   **Cons:** **Implicit calculation**. To find $T_i^{n+1}$, we need the values of its neighbors at the same time level ($T_{i-1}^{n+1}, T_{i+1}^{n+1}$). This results in a system of linear algebraic equations to solve at each time step. For a 1D problem with $N$ interior points, this results in a tridiagonal system.

The system of equations for the interior points $i = 2, \dots, N-1$ looks like:

$$ -\lambda T_{i-1}^{n+1} + (1 + 2\lambda) T_i^{n+1} - \lambda T_{i+1}^{n+1} = T_i^n $$

This tridiagonal system can be efficiently solved using the Thomas algorithm (TDMA).

**Reference:** Patankar (2017), Chapter 9 discusses implicit methods and tridiagonal systems. Versteeg & Malalasekera (2008), Chapter 5 also covers implicit time integration.

#### 2.3. Crank-Nicolson Scheme

The Crank-Nicolson scheme is a popular second-order accurate scheme in both space and time. It averages the spatial discretization from time levels $n$ and $n+1$:

$$ \frac{T_i^{n+1} - T_i^n}{\Delta t} = \frac{\alpha}{2} \left( \frac{T_{i+1}^n - 2T_i^n + T_{i-1}^n}{\Delta x^2} + \frac{T_{i+1}^{n+1} - 2T_i^{n+1} + T_{i-1}^{n+1}}{\Delta x^2} \right) $$

Rearranging:

$$ T_i^{n+1} - T_i^n = \frac{\lambda}{2} (T_{i+1}^n - 2T_i^n + T_{i-1}^n) + \frac{\lambda}{2} (T_{i+1}^{n+1} - 2T_i^{n+1} + T_{i-1}^{n+1}) $$

$$ (1 + \lambda) T_i^{n+1} - \frac{\lambda}{2} T_{i-1}^{n+1} - \frac{\lambda}{2} T_{i+1}^{n+1} = (1 - \lambda) T_i^n + \frac{\lambda}{2} T_{i-1}^n + \frac{\lambda}{2} T_{i+1}^n $$

**Key Characteristics:**
*   **Pros:** **Unconditionally stable** and **second-order accurate** in both space and time, offering a good balance of accuracy and stability.
*   **Cons:** Like the implicit scheme, it requires solving a system of linear equations at each time step. The resulting system is again tridiagonal.

The system of equations for the interior points $i = 2, \dots, N-1$ looks like:

$$ -\frac{\lambda}{2} T_{i-1}^{n+1} + (1 + \lambda) T_i^{n+1} - \frac{\lambda}{2} T_{i+1}^{n+1} = \frac{\lambda}{2} T_{i-1}^n + (1 - \lambda) T_i^n + \frac{\lambda}{2} T_{i+1}^n $$

This tridiagonal system is solved using the Thomas algorithm.

**Reference:** Versteeg & Malalasekera (2008), Chapter 5. Anderson Jr. (2012) also mentions Crank-Nicolson as a preferred method.

---

### 3. Handling of Boundary Conditions

Boundary conditions (BCs) are essential for a well-posed problem and are applied at the spatial boundaries of the domain.

**Types of Boundary Conditions:**

#### 3.1. Dirichlet Boundary Condition (Prescribed Temperature)

The temperature is specified at the boundary.
*   **Example:** $T(x=0, t) = T_0$ (constant) or $T(x=0, t) = f(t)$ (time-dependent).

**How to handle in FVM:**
For a control volume at the boundary (e.g., node 1, $x_1=0$), the temperature $T_1$ is directly set to the prescribed value $T_0$.

*   **Explicit Scheme:** If $T_1$ is prescribed, $T_1^{n+1} = T_0$. The explicit update for $T_2$ will use this known $T_1^{n+1}$.
*   **Implicit/Crank-Nicolson:** If $T_1$ is prescribed, $T_1^{n+1} = T_0$. This value directly enters the first equation of the tridiagonal system. For node $i=2$, the equation involves $T_1^{n+1}$, which is known.

#### 3.2. Neumann Boundary Condition (Prescribed Heat Flux)

The heat flux is specified at the boundary.
*   **Example:** $-k \frac{\partial T}{\partial x} \bigg|_{x=L} = q_0$ (constant flux) or $-k \frac{\partial T}{\partial x} \bigg|_{x=L} = g(t)$ (time-dependent flux).

**How to handle in FVM:**
Neumann conditions relate to the flux at the boundary face.

*   **Adiabatic (Insulated) Boundary:** A special case of Neumann where the flux is zero: $\frac{\partial T}{\partial x} = 0$. This means no heat transfer across the boundary.

    For a CV at $x=0$ (node 1), the flux at the left face ($x_{1-\frac{1}{2}}$) is zero.

    *   **Explicit Scheme:** The equation for $T_1^{n+1}$ becomes:
        $$ T_1^{n+1} = T_1^n + \frac{\alpha \Delta t}{\Delta x^2} (T_2^n - 2T_1^n + T_0^n) $$
        If the left boundary is at $x=0$ (node 1), the term $\left. \frac{\partial T}{\partial x} \right|_{x_{1-\frac{1}{2}}}$ is zero due to the adiabatic condition.
        So, the flux balance is:
        $$ \frac{\partial T_1}{\partial t} \Delta x = \alpha \left( \frac{T_2 - T_1}{\Delta x} - 0 \right) $$
        $$ T_1^{n+1} = T_1^n + \frac{\alpha \Delta t}{\Delta x^2} (T_2^n - T_1^n) $$
        (This is similar to the internal node equation but with one less term due to zero flux).

    *   **Implicit/Crank-Nicolson:** For node $i=1$:
        $$ (1 + 2\lambda) T_1^{n+1} - \lambda T_2^{n+1} = T_1^n \quad \text{(for implicit)} $$
        $$ -\frac{\lambda}{2} T_1^{n+1} + (1 + \lambda) T_2^{n+1} = \frac{\lambda}{2} T_1^n + (1 - \lambda) T_2^n \quad \text{(for CN)} $$
        (The boundary conditions are incorporated into the first equation of the tridiagonal system).

*   **Prescribed Flux ($q_0$):** The flux at the boundary face $x_{1-\frac{1}{2}}$ is $\frac{q_0}{k}$.
    The discretized flux term at $x_{1-\frac{1}{2}}$ is approximated as $\frac{q_0}{k}$.

    *   **Explicit Scheme:**
        $$ \frac{T_1^{n+1} - T_1^n}{\Delta t} \Delta x = \alpha \left( \frac{T_2^n - T_1^n}{\Delta x} - \frac{q_0}{k} \right) $$
        $$ T_1^{n+1} = T_1^n + \frac{\alpha \Delta t}{\Delta x} \left( \frac{T_2^n - T_1^n}{\Delta x} - \frac{q_0}{k} \right) $$
        $$ T_1^{n+1} = T_1^n + \lambda (T_2^n - 2T_1^n) - \frac{\alpha \Delta t}{k \Delta x} q_0 $$

    *   **Implicit/Crank-Nicolson:** This requires modification of the first equation in the tridiagonal system to account for the flux term $q_0/k$ at the face.

#### 3.3. Robin Boundary Condition (Convective Boundary)

This condition involves both temperature and flux, typically representing convection from the boundary to a surrounding fluid.
*   **Example:** $-k \frac{\partial T}{\partial x} \bigg|_{x=L} = h (T(L, t) - T_\infty)$

**How to handle in FVM:**
The derivative is approximated at the boundary face $x_{i+\frac{1}{2}}$, and the temperature $T(L,t)$ is approximated by $T_i$ (for the boundary node) or $T_{i+1}$ (for the next node).

*   **Boundary at $x=L$ (node $N$):**
    The flux at the right face $x_{N+\frac{1}{2}}$ is modeled as convection.
    The temperature at the boundary face $T_{N+\frac{1}{2}}$ is needed.
    *   **If using boundary node temperature $T_N$:** The flux approximation at $x_{N+\frac{1}{2}}$ uses $T_N$.
        $$ -k \frac{T_N - T_{N-1}}{\Delta x} = h (T_N - T_\infty) $$ (This is for a finite difference approach at the boundary)
    *   **In FVM, with a CV at node $N$:** The flux at the right face of the CV ($x_{N+\frac{1}{2}}$) is $-k A \left. \frac{\partial T}{\partial x} \right|_{x_{N+\frac{1}{2}}} = h A (T_N - T_\infty)$ (assuming $T_{N+\frac{1}{2}}$ is approximated by $T_N$).

    The equation for $T_N^{n+1}$ will incorporate this:
    $$ \frac{T_N^{n+1} - T_N^n}{\Delta t} \Delta x = \alpha \left( \frac{T_{N-1}^n - T_N^n}{\Delta x} \right) - \text{convective term} $$
    The convective term from the boundary condition needs to be incorporated into the system of equations.
    If the boundary is at $x=L$, the flux leaving the CV at $x_{L+\frac{1}{2}}$ is $\frac{h}{\Delta x}(T_L - T_\infty)$.

    The convective flux can be written as: $q_{conv} = h (T_{boundary} - T_\infty)$.
    At the face $x_{i+1/2}$, we approximate $T_{boundary}$ with $T_{i+1}$.
    The equation for node $i$ is:
    $$ \frac{T_i^{n+1} - T_i^n}{\Delta t} \Delta x = \alpha \left( \frac{T_{i+1}^n - T_i^n}{\Delta x} \right) - \text{flux out at i+1/2} $$
    If the right boundary is at $i+1/2$ and it is convective:
    $$ \alpha \left( \frac{T_{i+1}^n - T_i^n}{\Delta x} \right) \quad \text{becomes} \quad \alpha \left( \frac{T_i^n - T_{i+1}^n}{\Delta x} \right) - \frac{h \Delta t}{\rho c_p \Delta x} (T_{i+1}^n - T_\infty) $$
    (The discretization of convective BCs can be tricky. A common approach is to use a ghost node or modify the flux term directly).

    A more robust FVM approach for convective BCs is to apply the flux balance at the boundary face. For a convective boundary at $x_{i+\frac{1}{2}}$:
    $$ \alpha \frac{T_{i+1} - T_i}{\Delta x} = h (T_{i+1} - T_\infty) $$
    This condition modifies the coefficients in the system of equations for the boundary node.

**Reference:** Versteeg & Malalasekera (2008), Chapter 6 discusses boundary condition implementation. Patankar (2017) also covers this in detail for various BCs.

---

### 4. Under and Over-Relaxation

These techniques are iterative methods used to solve systems of linear equations, particularly when the direct solution (like TDMA for implicit schemes) is not used, or for steady-state problems derived from transient ones. For transient problems using TDMA, relaxation is usually not needed for the primary solution process. However, if one were to solve a steady-state problem using an iterative method derived from the transient equation (e.g., marching in time until steady-state), relaxation would be relevant.

Let $T_i^{n+1}$ be the newly computed value and $T_i^n$ be the old value. The update equation can be written as:

$$ T_i^{n+1, \text{new}} = (1-\omega) T_i^{n+1, \text{old}} + \omega T_i^{n+1, \text{calculated}} $$

Where:
*   $\omega$ is the relaxation parameter.
*   $T_i^{n+1, \text{calculated}}$ is the value computed by the explicit, implicit, or Crank-Nicolson scheme.
*   $T_i^{n+1, \text{old}}$ is the value from the previous iteration or time step.

#### 4.1. Under-Relaxation ($\omega < 1$)

*   **Effect:** Slows down the convergence, but can help stabilize oscillating solutions or improve convergence for systems that are otherwise slow to converge.
*   **Use:** Typically used when a solution diverges or oscillates significantly.

#### 4.2. Over-Relaxation ($\omega > 1$)

*   **Effect:** Accelerates the convergence of the iterative process.
*   **Use:** Can significantly reduce the number of iterations needed to reach a converged solution, provided the choice of $\omega$ is appropriate.

**General Update for Iterative Solutions:**
If we have an iterative scheme where $T_i^{(k+1)}$ is computed based on $T_j^{(k)}$ values, the update might look like:
$$ T_i^{(k+1)} = (1-\omega)T_i^{(k)} + \omega T_i^{\text{computed}} $$
Where $T_i^{\text{computed}}$ is the value obtained from the explicit, implicit, or CN discretization equation using the previous iteration's values.

**Important Note for Transient Problems:**
For the standard explicit, implicit, and Crank-Nicolson schemes applied to transient problems, the goal is to advance in time. The "iteration" happens within the time step itself if a system of equations is solved implicitly. Relaxation is more commonly applied to **iterative methods for solving systems of linear equations** (like Gauss-Seidel or Jacobi methods), or to accelerate convergence in **steady-state problems** where time integration is used as an iterative process.

For the implicit and Crank-Nicolson schemes, the linear system is typically solved directly using TDMA, so relaxation is not directly applied to the time-stepping procedure itself. However, if one were to use an iterative solver (like Jacobi or Gauss-Seidel) to solve the tridiagonal system, then relaxation could be applied to *that* iterative solver.

**Reference:** Anderson Jr. (2012), Chapter 10 discusses iterative methods and relaxation for solving linear systems that arise in steady-state problems. Patankar (2017) also covers iterative techniques.

---

### 5. Worked Example Concept (Conceptual)

**Problem:** A 1D rod of length $L=1$ m, with thermal diffusivity $\alpha = 0.1 \text{ m}^2/\text{s}$. Initially, $T(x,0) = 0^\circ$C for all $x$. At $t>0$, the left boundary ($x=0$) is maintained at $T(0,t) = 100^\circ$C, and the right boundary ($x=1$) is insulated ($\frac{\partial T}{\partial x} = 0$). We want to find the temperature distribution at $t=0.01$ s using the explicit scheme with $\Delta x = 0.1$ m.

**Discretization:**
*   $N=11$ grid points ($x_0, \dots, x_{10}$), with $x_i = i \times 0.1$.
*   $\Delta x = 0.1$ m.
*   $\alpha = 0.1 \text{ m}^2/\text{s}$.
*   $\Delta t = ?$

**Stability Check for Explicit Scheme:**
$\lambda = \frac{\alpha \Delta t}{\Delta x^2} \le 0.5$
$\frac{0.1 \times \Delta t}{(0.1)^2} \le 0.5$
$10 \Delta t \le 0.5$
$\Delta t \le 0.05$ s.

Let's choose $\Delta t = 0.01$ s. This gives $\lambda = \frac{0.1 \times 0.01}{(0.1)^2} = 0.1$. This satisfies the stability condition.

**Initial Conditions:**
$T_i^0 = 0$ for $i=0, \dots, 10$.

**Boundary Conditions:**
*   Dirichlet at $x=0$: $T_0^{n+1} = 100^\circ$C for all $n$.
*   Neumann (Insulated) at $x=1$: $\frac{\partial T}{\partial x} \bigg|_{x=1} = 0$.

**Update Equation:**
$T_i^{n+1} = \lambda T_{i-1}^n + (1 - 2\lambda) T_i^n + \lambda T_{i+1}^n$
$T_i^{n+1} = 0.1 T_{i-1}^n + (1 - 0.2) T_i^n + 0.1 T_{i+1}^n$
$T_i^{n+1} = 0.1 T_{i-1}^n + 0.8 T_i^n + 0.1 T_{i+1}^n$

**Applying to Boundary Nodes:**
*   **Node 0 (left boundary):** $T_0^{n+1} = 100$.
*   **Node 10 (right boundary, insulated):** The flux at the right face of CV 10 ($x_{10+\frac{1}{2}}$) is zero. The equation for $T_{10}$ involves the flux at $x_{9.5}$ and $x_{10.5}$. The flux at $x_{10.5}$ is zero.
    So for node $i=10$, the discretized heat conduction equation becomes:
    $$ \frac{T_{10}^{n+1} - T_{10}^n}{\Delta t} \Delta x = \alpha \left( \frac{T_9^n - T_{10}^n}{\Delta x} - 0 \right) $$
    $$ T_{10}^{n+1} = T_{10}^n + \frac{\alpha \Delta t}{\Delta x^2} (T_9^n - T_{10}^n) $$
    $$ T_{10}^{n+1} = T_{10}^n + \lambda (T_9^n - T_{10}^n) $$
    $$ T_{10}^{n+1} = 0.1 T_9^n + 0.9 T_{10}^n $$

**Step-by-step Calculation (Conceptual):**
*   **Time $t=0$ (n=0):** $T_0^0=0, T_1^0=0, \dots, T_{10}^0=0$.
*   **Time $t=0.01$ (n=1):**
    *   $T_0^1 = 100$.
    *   For $i=1, \dots, 9$: $T_i^1 = 0.1 T_{i-1}^0 + 0.8 T_i^0 + 0.1 T_{i+1}^0 = 0.1(0) + 0.8(0) + 0.1(0) = 0$.
    *   For $i=10$: $T_{10}^1 = 0.1 T_9^0 + 0.9 T_{10}^0 = 0.1(0) + 0.9(0) = 0$.
    So at $t=0.01$: $T_0^1=100, T_1^1=0, \dots, T_{10}^1=0$. (This seems incorrect, let's recheck the BC for insulated boundary application).

**Revisiting Insulated Boundary at $x=L$ (Node $N$):**
The standard discretization assumes CVs extend to faces. For $x_N$, CV is from $x_{N-1/2}$ to $x_{N+1/2}$. The insulated boundary is at $x_N$. The flux *out* of the CV at $x_{N+1/2}$ is zero.
So, for node $N$:
$$ \frac{\partial T_N}{\partial t} \Delta x_N = \alpha \left( \left. \frac{\partial T}{\partial x} \right|_{N-\frac{1}{2}} - \left. \frac{\partial T}{\partial x} \right|_{N+\frac{1}{2}} \right) $$
With adiabatic boundary at $x_N$, we approximate the flux at $x_{N+\frac{1}{2}}$ using a virtual node $N+1$ such that $\frac{T_{N+1} - T_N}{\Delta x} = \frac{T_N - T_{N-1}}{\Delta x}$, which implies $T_{N+1} = T_{N-1}$.
Then $\left. \frac{\partial T}{\partial x} \right|_{N+\frac{1}{2}} \approx \frac{T_{N+1} - T_N}{\Delta x} = \frac{T_{N-1} - T_N}{\Delta x}$.

So the equation for node $N$ becomes:
$$ \frac{\partial T_N}{\partial t} \Delta x = \alpha \left( \frac{T_{N-1} - T_N}{\Delta x} - \frac{T_{N-1} - T_N}{\Delta x} \right) = 0 $$
This implies $\frac{\partial T_N}{\partial t} = 0$, which means the temperature at the insulated boundary does not change with time *if the temperature gradient is zero everywhere*. This is not generally true.

The common FVM approach for an insulated boundary at $x_N$ is to state that the flux at the *face* $x_{N+1/2}$ (the right boundary of CV $N$) is zero.
The equation for node $N$ becomes:
$$ \frac{T_N^{n+1} - T_N^n}{\Delta t} \Delta x = \alpha \left( \frac{T_{N-1}^n - T_N^n}{\Delta x} \right) - (\text{flux at } x_{N+1/2}) $$
If the boundary is at $x_N$, the CV is from $x_{N-1/2}$ to $x_{N+1/2}$. The face at $x_{N+1/2}$ is the domain boundary.
If boundary is at $x=L$ (node $N$):
Flux at $x_{N-\frac{1}{2}}$ is $\alpha \frac{T_N - T_{N-1}}{\Delta x}$.
Flux at $x_{N+\frac{1}{2}}$ is 0 (insulated).
So, for node $N$:
$$ \frac{T_N^{n+1} - T_N^n}{\Delta t} \Delta x = \alpha \left( \frac{T_N - T_{N-1}}{\Delta x} \right) $$
$$ T_N^{n+1} = T_N^n + \frac{\alpha \Delta t}{\Delta x^2} (T_N^n - T_{N-1}^n) $$
$$ T_N^{n+1} = T_N^n + \lambda (T_N^n - T_{N-1}^n) $$
$$ T_N^{n+1} = (1+\lambda)T_N^n - \lambda T_{N-1}^n $$

Let's re-calculate for $t=0.01$ s ($n=1$):
*   $T_0^0=0, T_1^0=0, \dots, T_{10}^0=0$.
*   $T_0^1 = 100$.
*   For $i=1, \dots, 9$: $T_i^1 = 0.1 T_{i-1}^0 + 0.8 T_i^0 + 0.1 T_{i+1}^0 = 0$.
*   For $i=10$: $T_{10}^1 = (1+0.1)T_{10}^0 - 0.1 T_9^0 = 1.1(0) - 0.1(0) = 0$.

This is still not right. The issue might be in assuming $T_i^n$ are all zero *after* the first time step. The Dirichlet BC at $x=0$ propagates.

Let's recalculate for $t=0.01$ s ($n=1$):
Initial: $T_0^0 = T_1^0 = \dots = T_{10}^0 = 0$.

Time Step 1 (to $t=0.01$, n=1):
*   $T_0^1 = 100$ (Dirichlet BC)
*   $T_1^1 = 0.1 T_0^0 + 0.8 T_1^0 + 0.1 T_2^0 = 0.1(0) + 0.8(0) + 0.1(0) = 0$.
*   ...
*   $T_9^1 = 0.1 T_8^0 + 0.8 T_9^0 + 0.1 T_{10}^0 = 0$.
*   $T_{10}^1 = (1+0.1)T_{10}^0 - 0.1 T_9^0 = 1.1(0) - 0.1(0) = 0$.

The error is in how the boundary condition affects neighbor calculations.
For node $i=1$, the equation for $T_1^{n+1}$ uses $T_0^n, T_1^n, T_2^n$.
$T_1^{n+1} = 0.1 T_0^0 + 0.8 T_1^0 + 0.1 T_2^0 = 0$. This is correct for the first step.

The temperature propagation will occur over subsequent steps.
Let's consider $t=0.02$ s (n=2) to see the propagation:
$T^1 = [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]$

Time Step 2 (to $t=0.02$, n=2):
*   $T_0^2 = 100$ (Dirichlet BC)
*   $T_1^2 = 0.1 T_0^1 + 0.8 T_1^1 + 0.1 T_2^1 = 0.1(100) + 0.8(0) + 0.1(0) = 10$.
*   $T_2^2 = 0.1 T_1^1 + 0.8 T_2^1 + 0.1 T_3^1 = 0.1(0) + 0.8(0) + 0.1(0) = 0$.
*   ...
*   $T_9^2 = 0.1 T_8^1 + 0.8 T_9^1 + 0.1 T_{10}^1 = 0.1(0) + 0.8(0) + 0.1(0) = 0$.
*   $T_{10}^2 = (1+0.1)T_{10}^1 - 0.1 T_9^1 = 1.1(0) - 0.1(0) = 0$.

The state after $t=0.02$s is $T^2 = [100, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0]$.
This shows how the heat diffuses from the left boundary.

**Final Answer for $t=0.01$s (n=1):**
$T^1 = [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]$.

---

### 6. Practice Questions

**Question 1:**
For the 1D heat equation $\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$, derive the discretized form of the explicit scheme. What is the stability condition for this scheme?

**Answer 1:**
The explicit scheme discretizes the time derivative using forward difference and spatial derivative using central difference:
$$ \frac{T_i^{n+1} - T_i^n}{\Delta t} = \alpha \frac{T_{i+1}^n - 2T_i^n + T_{i-1}^n}{\Delta x^2} $$
Rearranging for $T_i^{n+1}$:
$$ T_i^{n+1} = T_i^n + \frac{\alpha \Delta t}{\Delta x^2} (T_{i+1}^n - 2T_i^n + T_{i-1}^n) $$
Let $\lambda = \frac{\alpha \Delta t}{\Delta x^2}$.
$$ T_i^{n+1} = \lambda T_{i-1}^n + (1 - 2\lambda) T_i^n + \lambda T_{i+1}^n $$
The stability condition for the explicit scheme for 1D heat conduction is $\lambda \le 0.5$.

---

**Question 2:**
Why is the implicit scheme preferred over the explicit scheme in certain situations, even though it requires solving a system of equations?

**Answer 2:**
The implicit scheme is preferred because it is unconditionally stable, meaning it is stable for any time step $\Delta t$. This allows for the use of larger time steps compared to the explicit scheme, which has a strict stability constraint ($\lambda \le 0.5$). Larger time steps can significantly reduce the total computational time for long-duration transient simulations or when high spatial resolution (small $\Delta x$) necessitates very small $\Delta t$ for explicit schemes.

---

**Question 3:**
A 1D rod of length $L=1$ m has $\alpha = 0.01 \text{ m}^2/\text{s}$. It is initially at $10^\circ$C. At $t>0$, the left boundary ($x=0$) is set to $20^\circ$C and the right boundary ($x=1$) is exposed to convection to an ambient of $0^\circ$C with a heat transfer coefficient $h=100$ W/(m$^2$K). The thermal conductivity is $k=50$ W/(mK). Discretize the boundary condition at $x=L$ using a finite volume approach. Assume $T(L,t)$ is approximated by $T_N$.

**Answer 3:**
The governing equation is $\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$.
Let the domain be discretized with $N$ interior points and $x_N = L$. Consider the control volume around $x_N$. The heat flux out of this CV at the face $x_{N+1/2}$ (which is at $x=L$) is given by convection.
The flux balance for the CV at node $N$ is:
$$ \int_{CV_N} \rho c_p \frac{\partial T}{\partial t} \, dV = \left[ k A \frac{\partial T}{\partial x} \right]_{x_{N-\frac{1}{2}}} - \left[ k A \frac{\partial T}{\partial x} \right]_{x_{N+\frac{1}{2}}} $$
For unit area $A=1$:
$$ \rho c_p \Delta x_N \frac{\partial T_N}{\partial t} = k \left( \frac{T_N - T_{N-1}}{\Delta x} \right) - \text{Flux}_{N+\frac{1}{2}} $$
The flux at the boundary $x_{N+\frac{1}{2}}$ is convective:
$$ \text{Flux}_{N+\frac{1}{2}} = h (T_N - T_\infty) $$
Substituting this into the discretized equation and using the time discretization (e.g., implicit):
$$ \rho c_p \Delta x_N \frac{T_N^{n+1} - T_N^n}{\Delta t} = k \frac{T_N^{n+1} - T_{N-1}^{n+1}}{\Delta x} - h (T_N^{n+1} - T_\infty) $$
Rearranging to group terms for $T^{n+1}$ on the left:
$$ \frac{\rho c_p \Delta x_N}{\Delta t} T_N^{n+1} - \frac{k}{\Delta x} T_N^{n+1} + h T_N^{n+1} = \frac{\rho c_p \Delta x_N}{\Delta t} T_N^n + \frac{k}{\Delta x} T_{N-1}^{n+1} + h T_\infty $$
$$ \left( \frac{\rho c_p \Delta x_N}{\Delta t} + \frac{k}{\Delta x} + h \right) T_N^{n+1} - \frac{k}{\Delta x} T_{N-1}^{n+1} = \frac{\rho c_p \Delta x_N}{\Delta t} T_N^n + h T_\infty $$
This equation would be the last equation in the tridiagonal system for an implicit method, with modified coefficients for node $N$.

---

### 7. Important Points to Remember

*   **Heat Equation:** $\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$ is a parabolic PDE.
*   **Explicit Scheme:** Simple, but conditionally stable ($\lambda \le 0.5$).
*   **Implicit Scheme:** Unconditionally stable, but requires solving a linear system (tridiagonal for 1D).
*   **Crank-Nicolson Scheme:** Unconditionally stable and second-order accurate in space and time, also requires solving a linear system.
*   **Stability:** Crucial for explicit schemes; can lead to divergent solutions if violated.
*   **Boundary Conditions:** Dirichlet (prescribed T) and Neumann (prescribed flux) are fundamental. Robin (convective) conditions combine both. Proper implementation in FVM is key to accurate solutions.
*   **FVM for BCs:** Integrate flux balance at the boundary faces. For insulated boundaries, flux is zero. For convective boundaries, flux is proportional to $(T_{boundary} - T_\infty)$.
*   **Relaxation:** Primarily used to accelerate convergence in iterative solvers for linear systems or steady-state problems, not typically for the primary time-stepping in standard implicit/CN methods.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### References and Further Reading

*   **Anderson Jr., J. D. (2012).** *Computational Fluid Dynamics*. McGraw-Hill Book Company. (Chapters on finite difference methods, explicit/implicit schemes, iterative solutions).
*   **Patankar, S. V. (2017).** *Numerical Heat Transfer and Fluid Flow*. McGraw-Hill. (Chapters on discretization, implicit methods, iterative solutions, boundary conditions).
*   **Versteeg, H., & Malalasekera, W. (2008).** *An Introduction to Computational Fluid Dynamics: The Finite Volume Method*. Pearson. (Excellent chapters on time discretization schemes and boundary condition treatment in FVM).
*   **Date, A. W. (2005).** *Introduction to computational fluid dynamics*. Cambridge University Press.
*   **Sastry, S. S. (2012).** *Introductory methods to numerical analysis*. PHI learning Private Ltd.
*   **Venkatesh, S. P. (2009).** *Heat transfer*. Ane books Pvt Ltd.