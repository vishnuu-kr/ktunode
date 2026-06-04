---
title: "Finite volume method for steady one–dimensional conduction problems."
subject: "COMPUTATIONAL FLUID DYNAMICS"
module: "Module 3: Introduction to finite volume method."
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463438"
status: "completed"
scrapedAt: "2026-05-20T17:58:16.587Z"
---
# Module 3: Introduction to Finite Volume Method

## Topic: Finite Volume Method for Steady One-Dimensional Conduction Problems

This module introduces the Finite Volume Method (FVM), a powerful numerical technique widely used in Computational Fluid Dynamics (CFD) and heat transfer. We will focus on its application to steady, one-dimensional conduction problems, laying the foundation for more complex analyses.

---

### 1. Learning Outcomes Covered

*   **Understanding the Governing Equations:** Grasp the fundamental principles of heat conduction and how they are represented by mathematical equations (relates to CO1).
*   **Applying FVM to Simple PDEs:** Learn the core discretization process of FVM for a basic partial differential equation (PDE) governing conduction (relates to CO3).
*   **Discretization Process:** Understand how a physical domain is divided into control volumes and how the governing equation is integrated over each volume (relates to CO3).
*   **Approximation of Fluxes:** Learn techniques for approximating the flux of heat across the boundaries of control volumes.
*   **Assembly of Algebraic Equations:** Develop the ability to assemble a system of algebraic equations from the discretized differential equation.
*   **Boundary Conditions:** Understand how different types of boundary conditions are incorporated into the FVM framework.
*   **Solving Algebraic Systems:** Recognize the need for numerical methods to solve the resulting system of algebraic equations.

---

### 2. Key Concepts and Definitions

#### 2.1 Governing Equation for Steady One-Dimensional Conduction

The fundamental equation governing steady heat conduction in one dimension, without heat generation, is the **Laplace equation**:

$$
\frac{d}{dx} \left( k(x) \frac{dT}{dx} \right) = 0
$$

where:
*   $T(x)$ is the temperature as a function of position $x$.
*   $k(x)$ is the thermal conductivity of the material, which can vary with position.

**Important Note:** If there is volumetric heat generation, $q(x)$, the equation becomes:

$$
\frac{d}{dx} \left( k(x) \frac{dT}{dx} \right) + q(x) = 0
$$

For simplicity in this introductory topic, we will primarily consider the case *without* heat generation ($q(x)=0$).

**(Referenced from Anderson Jr., Chapter 10; Patankar, Chapter 1)**

#### 2.2 The Finite Volume Method (FVM)

The FVM is a numerical method where the integral form of the conservation law (like the heat conduction equation) is applied to each control volume. The key idea is to discretize the domain into a finite number of non-overlapping control volumes (or cells).

**Core Principle:** For each control volume, the governing equation is integrated over its entire volume. This ensures that the quantity being conserved (in this case, heat) is conserved across the boundaries of the control volumes, leading to a conservation property in the numerical solution.

**(Referenced from Versteeg & Malalasekera, Chapter 1; Date, Chapter 2)**

#### 2.3 Discretization of the Domain

The one-dimensional physical domain, say from $x=0$ to $x=L$, is divided into $N$ discrete control volumes.

*   **Grid Points (Nodes):** These are the locations where the solution (temperature) is to be determined. We typically denote them by $x_i$, where $i = 1, 2, ..., N$.
*   **Control Volumes:** Each control volume is centered around a grid point $x_i$. The $i$-th control volume extends from $x_{i-1/2}$ to $x_{i+1/2}$.

$$
\text{Domain:} \quad [0, L]
$$

$$
\text{Grid Points:} \quad x_1, x_2, \dots, x_N
$$

$$
\text{Control Volume i:} \quad [x_{i-1/2}, x_{i+1/2}]
$$

The volume of a control volume is its length. For a 1D problem, the "volume" is the length $\Delta x_i = x_{i+1/2} - x_{i-1/2}$.

**Uniform Grid:** If the grid is uniform, $\Delta x_i = \Delta x$ for all $i$. In this case, $x_i = i \Delta x$. The faces of the $i$-th control volume are at $x_{i-1/2} = x_i - \Delta x/2$ and $x_{i+1/2} = x_i + \Delta x/2$.

**Non-uniform Grid:** For a non-uniform grid, the faces are located at the midpoints between grid points:
$x_{1/2} = 0$, $x_{N+1/2} = L$.
$x_{i+1/2} = (x_i + x_{i+1})/2$ for $i=1, \dots, N-1$.
The length of the $i$-th control volume is $\Delta x_i = x_{i+1/2} - x_{i-1/2}$.

**(Referenced from Versteeg & Malalasekera, Chapter 2; Patankar, Chapter 3)**

#### 2.4 Integration of the Governing Equation

We integrate the governing equation over the $i$-th control volume, $V_i$, which in 1D is the interval $[x_{i-1/2}, x_{i+1/2}]$:

$$
\int_{x_{i-1/2}}^{x_{i+1/2}} \frac{d}{dx} \left( k(x) \frac{dT}{dx} \right) dx = 0
$$

Applying the fundamental theorem of calculus (or Gauss's divergence theorem in higher dimensions):

$$
\left[ k(x) \frac{dT}{dx} \right]_{x_{i-1/2}}^{x_{i+1/2}} = 0
$$

This equation signifies that the net flux of heat entering or leaving the control volume is zero (since there is no heat generation and the process is steady).

$$
(k A \frac{dT}{dx})_{i+1/2} - (k A \frac{dT}{dx})_{i-1/2} = 0
$$

where $A$ is the cross-sectional area for heat flow. In 1D, if we consider a slice of unit area, $A=1$. The equation becomes:

$$
F_{i+1/2} - F_{i-1/2} = 0
$$

where $F$ represents the heat flux ($k \frac{dT}{dx}$).

**(Referenced from Versteeg & Malalasekera, Chapter 2; Anderson Jr., Chapter 10)**

#### 2.5 Approximation of Fluxes (Numerical Differencing Schemes)

To obtain algebraic equations, we need to approximate the temperature gradients at the control volume faces ($x_{i-1/2}$ and $x_{i+1/2}$). Several schemes can be used, but the most common and generally preferred for conservation is the **Central Differencing Scheme**.

##### 2.5.1 Central Differencing Scheme (CDS)

The temperature gradient at a face is approximated using the temperatures of the adjacent grid points.

For the flux at the face $x_{i+1/2}$:
The temperature at this face, $T_{i+1/2}$, is approximated by the average of $T_i$ and $T_{i+1}$. For linear variation between grid points, this is simply $(T_i + T_{i+1})/2$.
The gradient $\frac{dT}{dx}$ at $x_{i+1/2}$ is approximated by:
$$
\left( \frac{dT}{dx} \right)_{i+1/2} \approx \frac{T_{i+1} - T_i}{x_{i+1} - x_i} = \frac{T_{i+1} - T_i}{\Delta x_i}
$$
The thermal conductivity at the face, $k_{i+1/2}$, is typically taken as the average of $k_i$ and $k_{i+1}$ (arithmetic mean):
$$
k_{i+1/2} \approx \frac{k_i + k_{i+1}}{2}
$$
Thus, the flux at the face $x_{i+1/2}$ is:
$$
F_{i+1/2} = k_{i+1/2} \left( \frac{T_{i+1} - T_i}{\Delta x_i} \right)
$$

Similarly, for the flux at the face $x_{i-1/2}$:
$$
F_{i-1/2} = k_{i-1/2} \left( \frac{T_i - T_{i-1}}{x_i - x_{i-1}} \right) = k_{i-1/2} \left( \frac{T_i - T_{i-1}}{\Delta x_{i-1}} \right)
$$
where
$$
k_{i-1/2} \approx \frac{k_{i-1} + k_i}{2}
$$

**(Referenced from Versteeg & Malalasekera, Chapter 2; Patankar, Chapter 3; Anderson Jr., Chapter 10)**

**Important Point:** When $k$ is constant, the gradient approximation is exact for linear temperature profiles. When $k$ varies, the arithmetic mean of $k$ is generally suitable for CDS. However, for a highly varying $k$, the harmonic mean might be more appropriate to ensure conservation across interfaces.

##### 2.5.2 Harmonic Mean for Thermal Conductivity (for non-uniform $k$)

If the thermal conductivity $k(x)$ varies significantly across the control volume face, using the harmonic mean for $k$ at the interface is more accurate for approximating the heat flux:

$$
k_{i+1/2} = \frac{2}{\frac{1}{k_i} + \frac{1}{k_{i+1}}} \quad \text{or} \quad k_{i+1/2} = \frac{\Delta x_i}{\frac{\Delta x_{i-1}}{2k_{i-1}} + \frac{\Delta x_{i+1}}{2k_{i+1}}} \text{ (More general form)}
$$

For a uniform grid, $\Delta x_i = \Delta x$, so the simpler harmonic mean is sufficient:
$$
k_{i+1/2} = \frac{2 k_i k_{i+1}}{k_i + k_{i+1}}
$$

**(Referenced from Patankar, Chapter 3)**

#### 2.6 Assembly of Algebraic Equations

Substituting the flux approximations into the integrated equation $F_{i+1/2} - F_{i-1/2} = 0$ for a general control volume $i$:

$$
k_{i+1/2} \left( \frac{T_{i+1} - T_i}{\Delta x_i} \right) - k_{i-1/2} \left( \frac{T_i - T_{i-1}}{\Delta x_{i-1}} \right) = 0
$$

Rearranging the terms to group temperatures at $i-1$, $i$, and $i+1$:

$$
\frac{k_{i-1/2}}{\Delta x_{i-1}} T_{i-1} - \left( \frac{k_{i-1/2}}{\Delta x_{i-1}} + \frac{k_{i+1/2}}{\Delta x_i} \right) T_i + \frac{k_{i+1/2}}{\Delta x_i} T_{i+1} = 0
$$

This equation is a linear algebraic equation relating $T_{i-1}$, $T_i$, and $T_{i+1}$. Let's define coefficients:
*   $a_W = \frac{k_{i-1/2}}{\Delta x_{i-1}}$ (Coefficient for the West face, associated with $T_{i-1}$)
*   $a_E = \frac{k_{i+1/2}}{\Delta x_i}$ (Coefficient for the East face, associated with $T_{i+1}$)
*   $a_P = a_W + a_E$ (Coefficient for the central node $T_i$)

The equation for the $i$-th control volume becomes:

$$
a_W T_{i-1} - a_P T_i + a_E T_{i+1} = 0
$$

This is a **three-diagonal system of equations** for interior nodes. The system needs to be solved for $T_1, T_2, \dots, T_N$.

**(Referenced from Versteeg & Malalasekera, Chapter 2; Patankar, Chapter 3)**

---

### 3. Boundary Conditions

Boundary conditions are crucial for closing the system of algebraic equations. They are applied at the boundaries of the physical domain ($x=0$ and $x=L$), which correspond to the faces of the first and last control volumes.

#### 3.1 Dirichlet Boundary Condition (Prescribed Temperature)

If the temperature is specified at a boundary, e.g., $T(0) = T_0$.

*   **At the left boundary (face $x_{1/2}$, which is $x=0$):**
    The first control volume is $[x_{1/2}, x_{3/2}]$. Its west face is at $x_{1/2}=0$.
    The equation derived earlier is for control volume $i=1$:
    $$
    a_W T_0 - a_P T_1 + a_E T_2 = 0
    $$
    However, $T_0$ is not an unknown grid point. $T_0$ is the temperature at the boundary $x=0$. For a Dirichlet condition, $T_0$ is a known value.
    If $T_0$ is prescribed, we can substitute its value:
    $$
    a_W T_{fixed} - a_P T_1 + a_E T_2 = 0
    $$
    This can be rewritten as:
    $$
    - a_P T_1 + a_E T_2 = - a_W T_{fixed}
    $$
    This modifies the coefficients of the first equation for $T_1$. The $a_W$ term is effectively moved to the right-hand side, contributing to the source term.

*   **At the right boundary (face $x_{N+1/2}$, which is $x=L$):**
    If $T(L) = T_L$ is prescribed (e.g., $T_{N+1} = T_L$ in a ghost cell approach or by direct substitution):
    For the last control volume $i=N$:
    $$
    a_W T_{N-1} - a_P T_N + a_E T_{N+1} = 0
    $$
    Substitute $T_{N+1} = T_L$:
    $$
    a_W T_{N-1} - a_P T_N + a_E T_L = 0
    $$
    $$
    a_W T_{N-1} - a_P T_N = - a_E T_L
    $$
    Again, the $a_E$ term is moved to the right-hand side.

**(Referenced from Versteeg & Malalasekera, Chapter 2; Patankar, Chapter 3)**

#### 3.2 Neumann Boundary Condition (Prescribed Flux)

If the heat flux is specified at a boundary, e.g., $k \frac{dT}{dx} = q_0$ at $x=0$.

*   **At the left boundary (face $x_{1/2}$, which is $x=0$):**
    The flux at the face $x_{1/2}$ is given by $F_{1/2} = k_{1/2} \frac{T_1 - T_0}{\Delta x_{1/2}}$. However, we don't need $T_0$ here. The integrated equation for the first control volume ($i=1$) is:
    $$
    F_{3/2} - F_{1/2} = 0
    $$
    We know $F_{1/2} = q_0$. Thus, $F_{3/2} = q_0$.
    The equation for $i=1$ becomes:
    $$
    k_{3/2} \left( \frac{T_2 - T_1}{\Delta x_1} \right) - q_0 = 0
    $$
    $$
    \frac{k_{3/2}}{\Delta x_1} T_2 - \frac{k_{3/2}}{\Delta x_1} T_1 = q_0
    $$
    This equation forms the first row of the system, relating $T_1$ and $T_2$. The $a_W$ term for $i=1$ is zero, and the source term is $q_0$. The coefficient for $T_1$ becomes negative, and $a_E$ is for $T_2$.
    The equation structure $a_W T_0 - a_P T_1 + a_E T_2 = 0$ is adapted.
    Here, $a_W$ corresponding to $T_0$ is related to the boundary flux. The flux $F_{1/2}$ is often represented as $a_W (T_0 - T_1)$. For a Neumann condition $F_{1/2} = q_0$, this implies the term $a_W T_0$ is replaced by $-q_0$ (if $a_W$ is defined as positive, representing flux *out* of the volume). Or more directly, the flux $F_{i-1/2}$ is given as a boundary value.

    Let's re-examine the equation for CV $i$:
    $$
    F_{i+1/2} - F_{i-1/2} = 0
    $$
    For $i=1$: $F_{3/2} - F_{1/2} = 0$. If $F_{1/2} = q_0$ (flux into the domain), then $F_{3/2} = q_0$.
    $k_{3/2} \frac{T_2 - T_1}{\Delta x_1} = q_0$.
    Rearranging to match $a_W T_{i-1} - a_P T_i + a_E T_{i+1} = 0$:
    For $i=1$, $T_{i-1}$ is $T_0$. The term $F_{1/2}$ is the flux leaving the control volume $i-1$ (which is outside CV 1).
    The general form $a_W T_{i-1} - a_P T_i + a_E T_{i+1} = S_i$ where $S_i$ is a source term.
    For CV 1, the flux from the west face ($i=1/2$) is $F_{1/2}$.
    The equation for CV 1 is $F_{3/2} - F_{1/2} = 0$.
    $F_{3/2} = a_E(T_2 - T_1)$ (using the definition of $a_E$ for CV 1)
    $F_{1/2}$ is the flux at the boundary. If a flux $q_0$ is *entering* the domain at $x=0$, it means $F_{1/2} = q_0$.
    So, $a_E(T_2 - T_1) - q_0 = 0$.
    $a_E T_2 - a_E T_1 = q_0$.
    Comparing with $a_W T_0 - a_P T_1 + a_E T_2 = 0$.
    Here, the term associated with $T_0$ is $F_{1/2}$. If $F_{1/2}$ is prescribed as $q_0$ (flux *out* of the CV), then the equation for CV 1 is:
    $a_E(T_2 - T_1) - q_0 = 0$.
    This can be written as:
    $0 \cdot T_0 - a_E T_1 + a_E T_2 = q_0$.
    So, for the first equation ($i=1$):
    $a_W = 0$
    $a_P = a_E$ (from the $T_1$ term)
    $a_E = a_E$ (from the $T_2$ term, using its original definition $k_{3/2}/\Delta x_1$)
    Source term $S_1 = q_0$.

    Let's use the convention $F_{i-1/2}$ is flux *into* CV $i$ from $i-1$, and $F_{i+1/2}$ is flux *out* of CV $i$ to $i+1$.
    For CV $i$: $F_{i-1/2} - F_{i+1/2} = 0$ (for no heat generation).
    For CV 1: $F_{1/2} - F_{3/2} = 0$.
    If Dirichlet $T(0)=T_0$, then $F_{1/2}$ is not directly known, but $T_0$ is known. We replace $F_{1/2}$ with $k_{1/2}(T_1-T_0)/\Delta x_{1/2}$.
    If Neumann $k \frac{dT}{dx}|_{x=0} = q_0$. Let $q_0$ be flux *into* the domain.
    Then $F_{1/2} = q_0$.
    The equation for CV 1 becomes $q_0 - F_{3/2} = 0 \implies F_{3/2} = q_0$.
    $k_{3/2} \frac{T_2 - T_1}{\Delta x_1} = q_0$.
    This equation relates $T_1$ and $T_2$.
    The system for $i=1$ is:
    $a_W = 0$ (no $T_0$ term in the usual form for flux *out*)
    $a_P = \frac{k_{3/2}}{\Delta x_1}$
    $a_E = \frac{k_{3/2}}{\Delta x_1}$
    Source term $S_1 = q_0$.
    The equation becomes: $-a_P T_1 + a_E T_2 = q_0$.

*   **At the right boundary (face $x_{N+1/2}$, which is $x=L$):**
    If $k \frac{dT}{dx}|_{x=L} = q_L$. Let $q_L$ be flux *into* the domain at $x=L$.
    For CV $N$: $F_{N-1/2} - F_{N+1/2} = 0$.
    $F_{N+1/2}$ is the flux at the right boundary $x=L$. If $q_L$ is the flux *out* of the domain, $F_{N+1/2} = q_L$.
    So, $F_{N-1/2} - q_L = 0 \implies F_{N-1/2} = q_L$.
    $k_{N-1/2} \frac{T_N - T_{N-1}}{\Delta x_{N-1}} = q_L$.
    This equation relates $T_{N-1}$ and $T_N$.
    The system for $i=N$ is:
    $a_W = \frac{k_{N-1/2}}{\Delta x_{N-1}}$
    $a_P = \frac{k_{N-1/2}}{\Delta x_{N-1}}$
    $a_E = 0$ (no $T_{N+1}$ term in the usual form for flux *out*)
    Source term $S_N = q_L$.
    The equation becomes: $a_W T_{N-1} - a_P T_N = q_L$.

**(Referenced from Versteeg & Malalasekera, Chapter 2; Patankar, Chapter 3)**

#### 3.3 Convection Boundary Condition (Mixed Boundary Condition)

If the heat flux at the boundary is due to convection, e.g., $-k \frac{dT}{dx} = h(T - T_{fluid})$ at $x=0$.

*   **At the left boundary (face $x_{1/2}$, which is $x=0$):**
    The flux at the west face $F_{1/2}$ is given by the convection.
    The equation for CV 1 is $F_{1/2} - F_{3/2} = 0$.
    $F_{1/2} = h(T_{fluid} - T_1)$ (flux *into* CV 1 from the fluid).
    $F_{3/2} = k_{3/2} \frac{T_2 - T_1}{\Delta x_1}$.
    So, $h(T_{fluid} - T_1) - k_{3/2} \frac{T_2 - T_1}{\Delta x_1} = 0$.
    $h T_{fluid} - h T_1 - \frac{k_{3/2}}{\Delta x_1} T_2 + \frac{k_{3/2}}{\Delta x_1} T_1 = 0$.
    Rearranging:
    $\left(\frac{k_{3/2}}{\Delta x_1} - h\right) T_1 + \frac{k_{3/2}}{\Delta x_1} T_2 = h T_{fluid}$.
    This equation relates $T_1$ and $T_2$.
    Comparing with $a_W T_0 - a_P T_1 + a_E T_2 = 0$:
    Here, $a_W$ term is replaced by the convective flux $h(T_{fluid} - T_1)$.
    The equation for $i=1$ becomes:
    $a_W=0$ (no explicit $T_0$ term when writing as $a_W T_{i-1} - a_P T_i + a_E T_{i+1}$)
    $a_P = \frac{k_{3/2}}{\Delta x_1} - h$
    $a_E = \frac{k_{3/2}}{\Delta x_1}$
    Source term $S_1 = h T_{fluid}$.
    Equation: $-a_P T_1 + a_E T_2 = S_1$.

**(Referenced from Versteeg & Malalasekera, Chapter 2; Patankar, Chapter 3)**

#### 3.4 Adiabatic Boundary Condition (Zero Flux)

An adiabatic boundary is a special case of Neumann boundary condition where the flux is zero.
$k \frac{dT}{dx} = 0$.

*   **At the left boundary (face $x_{1/2}$):** $F_{1/2} = 0$.
    Equation for CV 1: $0 - F_{3/2} = 0 \implies F_{3/2} = 0$.
    $k_{3/2} \frac{T_2 - T_1}{\Delta x_1} = 0$.
    This implies $T_2 - T_1 = 0$, so $T_1 = T_2$.
    In the algebraic system:
    $a_W = 0$
    $a_P = \frac{k_{3/2}}{\Delta x_1}$
    $a_E = \frac{k_{3/2}}{\Delta x_1}$
    Source term $S_1 = 0$.
    Equation: $-a_P T_1 + a_E T_2 = 0$.

---

### 4. Solving the Algebraic System

After discretizing the governing equation for all control volumes and applying boundary conditions, we obtain a system of $N$ linear algebraic equations for the $N$ unknown temperatures $T_1, T_2, \dots, T_N$.

$$
\begin{pmatrix}
A_{11} & A_{12} & 0 & \dots & 0 \\
A_{21} & A_{22} & A_{23} & \dots & 0 \\
0 & A_{32} & A_{33} & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \dots & A_{NN}
\end{pmatrix}
\begin{pmatrix}
T_1 \\
T_2 \\
T_3 \\
\vdots \\
T_N
\end{pmatrix}
=
\begin{pmatrix}
S_1 \\
S_2 \\
S_3 \\
\vdots \\
S_N
\end{pmatrix}
$$

where $A_{ij}$ are the coefficients of the discretized equations. This is a tridiagonal system, which can be efficiently solved using methods like the **Thomas Algorithm** (a specific form of Gaussian elimination for tridiagonal systems).

**(Referenced from Versteeg & Malalasekera, Chapter 4; Patankar, Chapter 5)**

---

### 5. Example: Steady 1D Conduction with Constant Thermal Conductivity and Dirichlet BCs

**Problem Statement:** Consider a one-dimensional rod of length $L$ with constant thermal conductivity $k$. The rod is insulated at $x=0$ (adiabatic boundary) and has a prescribed temperature $T_L$ at $x=L$. There is no heat generation within the rod. Find the temperature distribution $T(x)$.

**Governing Equation:**
$$
\frac{d^2T}{dx^2} = 0
$$

**Boundary Conditions:**
1.  Neumann (adiabatic) at $x=0$: $\frac{dT}{dx}\Big|_{x=0} = 0$
2.  Dirichlet at $x=L$: $T(L) = T_L$

**FVM Discretization:**
Let's consider a uniform grid with $N$ control volumes, each of length $\Delta x = L/N$.
The grid points are $x_i = i \Delta x$ for $i=1, \dots, N$.
Control volumes are $[x_{i-1/2}, x_{i+1/2}]$.

For an interior control volume $i$ ($1 < i < N$):
$$
\left[ k \frac{dT}{dx} \right]_{x_{i+1/2}} - \left[ k \frac{dT}{dx} \right]_{x_{i-1/2}} = 0
$$
Using CDS and constant $k$:
$$
k \left( \frac{T_{i+1} - T_i}{\Delta x} \right) - k \left( \frac{T_i - T_{i-1}}{\Delta x} \right) = 0
$$
Multiply by $\Delta x / k$:
$$
T_{i+1} - T_i - (T_i - T_{i-1}) = 0
$$
$$
T_{i-1} - 2 T_i + T_{i+1} = 0
$$
In the form $a_W T_{i-1} - a_P T_i + a_E T_{i+1} = S_i$:
$a_W = 1$, $a_P = 2$, $a_E = 1$, $S_i = 0$.

**Boundary Conditions Application:**

*   **At $x=0$ (i=1): Adiabatic Boundary**
    The first control volume is $[x_{1/2}, x_{3/2}]$. The west face is at $x_{1/2}=0$.
    The equation for CV 1 is: $F_{1/2} - F_{3/2} = 0$.
    $F_{1/2} = 0$ (adiabatic).
    $F_{3/2} = k \frac{T_2 - T_1}{\Delta x}$.
    So, $0 - k \frac{T_2 - T_1}{\Delta x} = 0$, which means $T_2 - T_1 = 0$, or $T_1 = T_2$.
    In algebraic form: $a_W T_0 - a_P T_1 + a_E T_2 = S_1$.
    Here, $F_{1/2}$ is the flux *out* of CV 0 (or into CV 1). If we consider the form $a_W T_{i-1} - a_P T_i + a_E T_{i+1} = S_i$, for $i=1$:
    $F_{1/2}$ is the flux leaving CV 1 at the left boundary. Since it's adiabatic, this flux is 0.
    So, $F_{1/2} = 0$.
    The equation for CV 1 is $a_W T_0 - a_P T_1 + a_E T_2 = S_1$.
    The flux at the west face of CV 1 ($F_{1/2}$) is usually represented by the $a_W$ term.
    If we set $a_W=0$ and $S_1=0$, and use the standard $a_P$ and $a_E$ derived from the flux at $x_{3/2}$:
    $a_P = \frac{k_{3/2}}{\Delta x_1}$, $a_E = \frac{k_{3/2}}{\Delta x_1}$.
    Equation for CV 1: $0 \cdot T_0 - \frac{k}{\Delta x} T_1 + \frac{k}{\Delta x} T_2 = 0$.
    This simplifies to $-T_1 + T_2 = 0$, or $T_1 = T_2$.

*   **At $x=L$ (i=N): Dirichlet Boundary**
    The last control volume is $[x_{N-1/2}, x_{N+1/2}]$. The east face is at $x_{N+1/2}=L$.
    The equation for CV $N$ is: $F_{N-1/2} - F_{N+1/2} = 0$.
    We have $F_{N-1/2} = k \frac{T_N - T_{N-1}}{\Delta x}$.
    The flux at the east face $F_{N+1/2}$ is the flux at the boundary $x=L$.
    For a Dirichlet condition $T(L) = T_L$, we treat $T_{N+1} = T_L$.
    So, $k \frac{T_N - T_{N-1}}{\Delta x} - k \frac{T_{N+1} - T_N}{\Delta x} = 0$.
    $T_N - T_{N-1} - (T_L - T_N) = 0$.
    $T_N - T_{N-1} - T_L + T_N = 0$.
    $T_{N-1} - 2 T_N = -T_L$.
    In the form $a_W T_{N-1} - a_P T_N + a_E T_{N+1} = S_N$:
    $a_W = 1$, $a_P = 2$, $a_E = 1$, $S_N = 0$.
    Substituting $T_{N+1} = T_L$:
    $a_W T_{N-1} - a_P T_N + a_E T_L = 0$.
    $T_{N-1} - 2 T_N + T_L = 0$.
    $T_{N-1} - 2 T_N = -T_L$.

**System of Equations (for N=3, $\Delta x = L/3$):**
Grid points: $x_1, x_2, x_3$. Temperatures: $T_1, T_2, T_3$.
$x_0$ and $x_4$ are boundary points. $T(0)$ and $T(L)$ are boundary values.
For $i=1$ (CV 1): $T_1 = T_2$.
  $0 \cdot T_0 - 1 \cdot T_1 + 1 \cdot T_2 = 0 \implies -T_1 + T_2 = 0$.
For $i=2$ (CV 2): $T_1 - 2 T_2 + T_3 = 0$.
For $i=3$ (CV 3): $T_2 - 2 T_3 = -T_L$. (Here, $T_{N+1}$ is $T_4 = T_L$)

The system is:
$$
\begin{pmatrix}
-1 & 1 & 0 \\
1 & -2 & 1 \\
0 & 1 & -2
\end{pmatrix}
\begin{pmatrix}
T_1 \\
T_2 \\
T_3
\end{pmatrix}
=
\begin{pmatrix}
0 \\
0 \\
-T_L
\end{pmatrix}
$$

**Analytical Solution:**
Integrating $\frac{d^2T}{dx^2} = 0$ twice gives $T(x) = C_1 x + C_2$.
Using BCs:
1. $\frac{dT}{dx} = C_1$. At $x=0$, $C_1 = 0$.
2. $T(x) = C_2$. At $x=L$, $T(L) = C_2 = T_L$.
So, $T(x) = T_L$.

The FVM solution should approach $T(x) = T_L$ as $\Delta x \to 0$.

Let's check the FVM system:
$T_1=T_2$.
$T_1 - 2T_2 + T_3 = 0 \implies T_2 - 2T_2 + T_3 = 0 \implies -T_2 + T_3 = 0 \implies T_2=T_3$.
So, $T_1 = T_2 = T_3$.
$T_2 - 2T_3 = -T_L \implies T_3 - 2T_3 = -T_L \implies -T_3 = -T_L \implies T_3 = T_L$.
Therefore, $T_1 = T_2 = T_3 = T_L$. This matches the analytical solution.

**(This example demonstrates the core steps and outcome of FVM for a simple problem)**

---

### 6. Practice Questions and Exercises

**Q1:** Consider a 1D rod with constant thermal conductivity $k$. The rod is exposed to convection at $x=0$ with heat transfer coefficient $h$ and ambient temperature $T_\infty$, and has a fixed temperature $T_L$ at $x=L$. There is no heat generation. Write down the discretized FVM equation for an interior node and for the boundary nodes at $x=0$ and $x=L$. Assume a uniform grid with $\Delta x$.

**Q2:** For the problem in Q1, derive the coefficients $a_W, a_P, a_E$ and the source term $S_i$ for:
    a) An interior node ($1 < i < N$).
    b) The first node ($i=1$) with the convective boundary condition.
    c) The last node ($i=N$) with the Dirichlet boundary condition.

**Q3:** A steady one-dimensional heat conduction problem without heat generation is described by $\frac{d}{dx}(k(x)\frac{dT}{dx}) = 0$. Consider a non-uniform grid with node locations $x_1, x_2, x_3$ and face locations $x_{1/2}, x_{3/2}, x_{5/2}$.
Let $k(x)$ be piecewise constant: $k_1$ for CV1, $k_2$ for CV2.
$x_{1/2}=0, x_1=0.5, x_{3/2}=1.0, x_2=1.5, x_{5/2}=2.0$.
$\Delta x_1 = x_{3/2} - x_{1/2} = 1.0$, $\Delta x_2 = x_{5/2} - x_{3/2} = 1.0$.
Assume $T(0) = T_0$ and $T(2) = T_L$.
Derive the algebraic equations for $T_1$ and $T_2$ using CDS and arithmetic mean for $k$ at interfaces.

---

### 7. Answers to Practice Questions

**A1 & A2:**

**Interior Node (1 < i < N):**
Equation: $F_{i+1/2} - F_{i-1/2} = 0$.
Fluxes using CDS with constant $k$ and uniform $\Delta x$:
$F_{i+1/2} = k \frac{T_{i+1} - T_i}{\Delta x}$
$F_{i-1/2} = k \frac{T_i - T_{i-1}}{\Delta x}$
Substituting: $k \frac{T_{i+1} - T_i}{\Delta x} - k \frac{T_i - T_{i-1}}{\Delta x} = 0$
Multiplying by $\Delta x / k$: $T_{i+1} - T_i - (T_i - T_{i-1}) = 0$
Rearranging: $T_{i-1} - 2T_i + T_{i+1} = 0$.
Algebraic form: $a_W T_{i-1} - a_P T_i + a_E T_{i+1} = S_i$.
*   $a_W = 1$
*   $a_P = 2$
*   $a_E = 1$
*   $S_i = 0$

**Boundary Node at x=0 (i=1): Convective Boundary Condition**
Equation for CV 1: $F_{1/2} - F_{3/2} = 0$.
$F_{1/2}$ is flux *leaving* CV 1 at the west face. For convection $F_{1/2} = h(T_1 - T_\infty)$ (flux out from CV1).
$F_{3/2} = k \frac{T_2 - T_1}{\Delta x}$.
Substituting: $h(T_1 - T_\infty) - k \frac{T_2 - T_1}{\Delta x} = 0$.
$hT_1 - hT_\infty - \frac{k}{\Delta x} T_2 + \frac{k}{\Delta x} T_1 = 0$.
Rearranging for $T_1$ and $T_2$:
$(h + \frac{k}{\Delta x}) T_1 - \frac{k}{\Delta x} T_2 = h T_\infty$.
Algebraic form: $a_W T_0 - a_P T_1 + a_E T_2 = S_1$.
Here, the term $a_W T_0$ represents the flux from $T_0$. The convective flux is naturally incorporated.
If we consider the general form $a_W T_{i-1} - a_P T_i + a_E T_{i+1} = S_i$, for $i=1$:
We don't have an explicit $T_0$ term from the grid. The flux $F_{1/2}$ is directly accounted for by the convection.
The equation is $F_{1/2} - F_{3/2} = 0$, where $F_{1/2}$ is the flux into the domain.
If flux *out* of CV 1 is $F_{1/2}$, then $F_{1/2} = h(T_1-T_\infty)$.
Then the equation is $h(T_1-T_\infty) - k\frac{T_2-T_1}{\Delta x} = 0$.
Rearranging: $T_1(h + k/\Delta x) - T_2(k/\Delta x) = h T_\infty$.
In the form $-a_P T_1 + a_E T_2 = S_1$ (no $a_W$ term since it's a boundary):
*   $a_W = 0$ (conceptually)
*   $a_P = -(h + k/\Delta x)$
*   $a_E = k/\Delta x$
*   $S_1 = -h T_\infty$

    *Correction to typical FVM notation*: The general form $a_W T_{i-1} - a_P T_i + a_E T_{i+1} = S_i$ assumes $a_W, a_P, a_E$ are positive. Let's adjust the formulation.
    The equation for CV $i$ is often written as $\sum_{j \in N(i)} a_j T_j = S_i$, where $N(i)$ are the neighbors of $i$.
    For CV 1: $a_W T_0 - a_P T_1 + a_E T_2 = S_1$.
    The flux across the west face ($x_{1/2}$) is $F_{1/2}$.
    $F_{1/2} - F_{3/2} = 0$.
    The term $a_W T_0$ represents the flux from $T_0$. If $T_0$ is not a grid point, this term is incorporated from the boundary condition.
    For convective BC at $x=0$, $F_{1/2} = h(T_1 - T_\infty)$. The flux is *into* CV 1 from the boundary.
    So $h(T_1 - T_\infty) - k \frac{T_2 - T_1}{\Delta x} = 0$.
    $T_1 (h + k/\Delta x) - T_2 (k/\Delta x) = h T_\infty$.
    The first equation of the system (for $T_1$) becomes:
    $a_W \equiv 0$ (no neighbor $T_0$ on grid)
    $a_P \equiv -(h + k/\Delta x)$
    $a_E \equiv k/\Delta x$
    $S_1 \equiv -h T_\infty$
    Thus, the first equation is $-(h + k/\Delta x) T_1 + (k/\Delta x) T_2 = -h T_\infty$.

    *Alternatively, using Patankar's formulation for source term:*
    The equation is $\sum_{j} a_j T_j = Q_i$.
    For CV 1: $a_W T_0 - a_P T_1 + a_E T_2 = S_i$.
    The flux $F_{1/2}$ needs to be expressed in terms of temperatures.
    $F_{1/2} = k_{1/2} \frac{T_1 - T_0}{\Delta x_{1/2}}$. This is for internal faces.
    For boundary faces, the flux is directly given.
    If $F_{1/2} = h(T_1 - T_\infty)$ (flux *into* CV 1), and $F_{3/2} = k_{3/2} \frac{T_2 - T_1}{\Delta x_1}$ (flux *out* of CV 1).
    Conservation equation: $\text{Flux in} - \text{Flux out} = 0$.
    $h(T_1 - T_\infty) - k_{3/2} \frac{T_2 - T_1}{\Delta x_1} = 0$.
    $h T_1 - h T_\infty - \frac{k_{3/2}}{\Delta x_1} T_2 + \frac{k_{3/2}}{\Delta x_1} T_1 = 0$.
    $T_1 (h + \frac{k_{3/2}}{\Delta x_1}) + T_2 (-\frac{k_{3/2}}{\Delta x_1}) = h T_\infty$.
    Matching to $a_W T_0 - a_P T_1 + a_E T_2 = S_i$:
    $a_W = 0$
    $a_P = -(h + \frac{k_{3/2}}{\Delta x_1})$
    $a_E = \frac{k_{3/2}}{\Delta x_1}$
    $S_i = -h T_\infty$.

**Boundary Node at x=L (i=N): Dirichlet Boundary Condition**
Equation for CV N: $F_{N-1/2} - F_{N+1/2} = 0$.
$F_{N-1/2} = k \frac{T_N - T_{N-1}}{\Delta x}$.
$F_{N+1/2}$ is flux *leaving* CV N at the east face ($x=L$).
For Dirichlet $T(L) = T_L$, we treat this as $T_{N+1} = T_L$.
So $F_{N+1/2} = k \frac{T_{N+1} - T_N}{\Delta x} = k \frac{T_L - T_N}{\Delta x}$.
Substituting: $k \frac{T_N - T_{N-1}}{\Delta x} - k \frac{T_L - T_N}{\Delta x} = 0$.
Multiplying by $\Delta x / k$: $T_N - T_{N-1} - (T_L - T_N) = 0$.
$T_N - T_{N-1} - T_L + T_N = 0$.
$T_{N-1} - 2T_N = -T_L$.
Algebraic form: $a_W T_{N-1} - a_P T_N + a_E T_{N+1} = S_N$.
Here, $T_{N+1}$ is a known value $T_L$.
$a_W = k/\Delta x$ (coefficient for $T_{N-1}$)
$a_P = 2k/\Delta x$ (coefficient for $T_N$)
$a_E = k/\Delta x$ (coefficient for $T_{N+1}$)
$S_N = 0$
The equation becomes: $a_W T_{N-1} - a_P T_N + a_E T_L = S_N$.
$(k/\Delta x) T_{N-1} - (2k/\Delta x) T_N + (k/\Delta x) T_L = 0$.
$(k/\Delta x) T_{N-1} - (2k/\Delta x) T_N = -(k/\Delta x) T_L$.
Dividing by $k/\Delta x$: $T_{N-1} - 2T_N = -T_L$.
This matches the direct derivation.
So, for the last equation of the system ($i=N$):
*   $a_W = k/\Delta x$
*   $a_P = 2k/\Delta x$
*   $a_E = 0$ (no neighbor on the grid)
*   $S_N = -(k/\Delta x) T_L$ (the $a_E T_{N+1}$ term is moved to RHS)

**A3:**
CV 1 ($i=1$): Faces at $x_{1/2}$ and $x_{3/2}$.
$F_{3/2} - F_{1/2} = 0$.
$F_{1/2} = k_{1/2} \frac{T_1 - T_0}{\Delta x_{1/2}}$. $T_0 = T(0) = T_0$ (given).
$k_{1/2}$ is the conductivity at the face. Using arithmetic mean for $k$ at interface:
$k_{1/2} = \frac{k(x_{1/2}) + k(x_1)}{2}$. Since $k(x)$ is piecewise constant ($k_1$ for CV1), $k(x_{1/2})$ and $k(x_1)$ are $k_1$.
$k_{1/2} = \frac{k_1 + k_1}{2} = k_1$.
$\Delta x_{1/2} = x_1 - x_{1/2} = 0.5 - 0 = 0.5$.
$F_{1/2} = k_1 \frac{T_1 - T_0}{0.5} = 2 k_1 (T_1 - T_0)$.

$F_{3/2} = k_{3/2} \frac{T_2 - T_1}{\Delta x_{3/2}}$. $\Delta x_{3/2} = x_2 - x_1 = 1.5 - 0.5 = 1.0$.
$k_{3/2} = \frac{k(x_1) + k(x_2)}{2} = \frac{k_1 + k_2}{2}$.
$F_{3/2} = \frac{k_1 + k_2}{2} \frac{T_2 - T_1}{1.0} = \frac{k_1 + k_2}{2} (T_2 - T_1)$.

Equation for CV 1: $F_{3/2} - F_{1/2} = 0$.
$\frac{k_1 + k_2}{2} (T_2 - T_1) - 2 k_1 (T_1 - T_0) = 0$.
$\frac{k_1 + k_2}{2} T_2 - \frac{k_1 + k_2}{2} T_1 - 2 k_1 T_1 + 2 k_1 T_0 = 0$.
$T_1 (-\frac{k_1 + k_2}{2} - 2 k_1) + T_2 (\frac{k_1 + k_2}{2}) = -2 k_1 T_0$.
$T_1 (-\frac{k_1}{2} - \frac{k_2}{2} - 2 k_1) + T_2 (\frac{k_1 + k_2}{2}) = -2 k_1 T_0$.
$T_1 (-\frac{5}{2} k_1 - \frac{1}{2} k_2) + T_2 (\frac{k_1 + k_2}{2}) = -2 k_1 T_0$.

CV 2 ($i=2$): Faces at $x_{3/2}$ and $x_{5/2}$.
$F_{5/2} - F_{3/2} = 0$.
$F_{3/2} = \frac{k_1 + k_2}{2} (T_2 - T_1)$ (calculated above).
$F_{5/2} = k_{5/2} \frac{T_3 - T_2}{\Delta x_{5/2}}$. $\Delta x_{5/2} = x_3 - x_2 = 2.0 - 1.5 = 0.5$.
$k_{5/2}$ is conductivity at face $x_{5/2}$. This is the interface between CV2 and the boundary. Assuming conductivity $k_2$ for CV2.
$k_{5/2} = \frac{k(x_2) + k(x_{5/2})}{2}$. $k(x_2)=k_2$. For the boundary face $x_{5/2}=L=2.0$, this is the outer face of CV2. We usually take the conductivity of the adjacent cell.
$k_{5/2} \approx k_2$.
$F_{5/2} = k_2 \frac{T_3 - T_2}{0.5} = 2 k_2 (T_3 - T_2)$.
However, for Dirichlet BC at $x=L$, $T(L)=T_L$, so $T_3=T_L$.
$F_{5/2} = 2 k_2 (T_L - T_2)$.

Equation for CV 2: $F_{5/2} - F_{3/2} = 0$.
$2 k_2 (T_L - T_2) - \frac{k_1 + k_2}{2} (T_2 - T_1) = 0$.
$2 k_2 T_L - 2 k_2 T_2 - \frac{k_1 + k_2}{2} T_2 + \frac{k_1 + k_2}{2} T_1 = 0$.
$T_1 (\frac{k_1 + k_2}{2}) + T_2 (-2 k_2 - \frac{k_1 + k_2}{2}) = -2 k_2 T_L$.
$T_1 (\frac{k_1 + k_2}{2}) + T_2 (-\frac{4 k_2}{2} - \frac{k_1}{2} - \frac{k_2}{2}) = -2 k_2 T_L$.
$T_1 (\frac{k_1 + k_2}{2}) + T_2 (-\frac{k_1 + 5 k_2}{2}) = -2 k_2 T_L$.

The system for $T_1, T_2$:
$T_1 (-\frac{5}{2} k_1 - \frac{1}{2} k_2) + T_2 (\frac{k_1 + k_2}{2}) = -2 k_1 T_0$
$T_1 (\frac{k_1 + k_2}{2}) + T_2 (-\frac{k_1 + 5 k_2}{2}) = -2 k_2 T_L$

---

### 8. Important Points to Remember

*   **Conservation:** The FVM ensures conservation of the transported quantity (heat) across control volume faces.
*   **Integral Form:** The method discretizes the integral form of the governing equation.
*   **Control Volume Faces:** Fluxes are evaluated at the faces of control volumes.
*   **Central Differencing Scheme (CDS):** For diffusion problems, CDS generally provides second-order accuracy and is widely used.
*   **Harmonic Mean:** Use harmonic mean for thermal conductivity when it varies significantly at interfaces to maintain accuracy.
*   **Algebraic System:** The discretization process results in a system of linear algebraic equations.
*   **Boundary Conditions:** Properly incorporating boundary conditions is crucial for closing the system and obtaining accurate solutions. Dirichlet conditions modify the RHS, while Neumann conditions directly influence the coefficients of the first/last equation or contribute to source terms.
*   **Tridiagonal System:** For 1D problems, the resulting system is typically tridiagonal, allowing for efficient solution using the Thomas algorithm.

---

### 9. Alignment with Course Outcomes

*   **CO1 (Governing Equations):** This topic directly deals with the Laplace equation for conduction, which is a fundamental heat transfer governing equation.
*   **CO3 (FVM for 1D/2D Problems):** This module is dedicated to introducing the FVM and applying it to a basic 1D conduction problem, fulfilling this outcome.
*   **CO2 (Finite Difference Methods):** While FVM is distinct, the approximations used for gradients (like CDS) are conceptually similar to finite difference approximations, building an understanding of numerical discretization of PDEs.

---

This module provides a solid foundation for understanding the Finite Volume Method. The principles learned here are directly transferable to more complex problems in CFD and heat transfer, including multi-dimensional cases, convection-diffusion problems, and fluid flow simulations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
