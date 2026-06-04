---
title: "Point by point iterations, Tri diagonal matrix method (TDMA)"
subject: "COMPUTATIONAL HEAT TRANSFER"
module: "Module 3: Solution of unsteady conduction equation using finite difference method"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446437b"
status: "completed"
scrapedAt: "2026-05-20T18:10:40.769Z"
---
# Computational Heat Transfer: Module 3 - Solution of Unsteady Conduction Equation using Finite Difference Method

## Topic: Point Iterations and Tri-Diagonal Matrix Method (TDMA)

This module focuses on solving the unsteady heat conduction equation using the Finite Difference Method (FDM). We will explore two key techniques for solving the resulting systems of algebraic equations: point iteration methods and the Tri-Diagonal Matrix Algorithm (TDMA).

---

### 1. Governing Equations of Heat Transfer (CO1: K2)

Unsteady heat conduction in a medium is governed by the heat diffusion equation. In one dimension, for a homogenous material with constant thermal properties, it is expressed as:

$$
\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}
$$

Where:
*   $T(x, t)$ is the temperature at position $x$ and time $t$.
*   $\alpha$ is the thermal diffusivity ($\alpha = k / (\rho c_p)$), where $k$ is thermal conductivity, $\rho$ is density, and $c_p$ is specific heat.

**Important Point:** Understanding the physical meaning of this equation is crucial. It states that the rate of change of temperature at a point over time is proportional to the curvature of the temperature profile at that point.

---

### 2. Partial Differential Equations (PDEs) and Classification (CO2: K2)

The heat diffusion equation is a **linear, second-order, partial differential equation**.

**Classification of PDEs:**
PDEs are classified based on their second-order derivative terms. For a general second-order PDE in two variables $x$ and $y$:
$$
A \frac{\partial^2 u}{\partial x^2} + B \frac{\partial^2 u}{\partial x \partial y} + C \frac{\partial^2 u}{\partial y^2} + D \frac{\partial u}{\partial x} + E \frac{\partial u}{\partial y} + F u = G
$$
The classification depends on the discriminant $B^2 - 4AC$:
*   **Elliptic:** $B^2 - 4AC < 0$ (e.g., Laplace's equation, Poisson's equation) - typically associated with steady-state problems.
*   **Parabolic:** $B^2 - 4AC = 0$ (e.g., Heat diffusion equation, Wave equation) - typically associated with unsteady problems.
*   **Hyperbolic:** $B^2 - 4AC > 0$ (e.g., Wave equation) - typically associated with wave propagation.

**Relevance to Heat Transfer:** The unsteady heat conduction equation is **parabolic**, which influences the stability and accuracy of numerical methods used to solve it.

---

### 3. Finite Difference Method (FDM) for Unsteady Conduction (CO3: K1)

FDM approximates the derivatives in the governing PDE with algebraic expressions based on discrete values of the dependent variable (temperature) at specific grid points.

**Discretization:**
Consider a one-dimensional rod discretized into $M$ spatial nodes with spacing $\Delta x$. Time is discretized into steps of $\Delta t$.
The temperature at node $i$ and time step $j$ is denoted by $T_i^j$.

**Finite Difference Approximations:**
*   **First Derivative (time):**
    *   **Forward Difference:** $\frac{\partial T}{\partial t} \approx \frac{T_i^{j+1} - T_i^j}{\Delta t}$ (Explicit)
    *   **Backward Difference:** $\frac{\partial T}{\partial t} \approx \frac{T_i^j - T_i^{j-1}}{\Delta t}$ (Implicit)
    *   **Central Difference:** $\frac{\partial T}{\partial t} \approx \frac{T_i^{j+1} - T_i^{j-1}}{2\Delta t}$ (Implicit, second-order accurate)

*   **Second Derivative (space):**
    *   **Central Difference:** $\frac{\partial^2 T}{\partial x^2} \approx \frac{T_{i+1}^j - 2T_i^j + T_{i-1}^j}{(\Delta x)^2}$ (This is second-order accurate and is typically used for spatial discretization in heat transfer problems).

**Applying FDM to the Unsteady Conduction Equation:**

#### 3.1. Explicit Method (Forward Euler)

Using forward difference in time and central difference in space:

$$
\frac{T_i^{j+1} - T_i^j}{\Delta t} = \alpha \frac{T_{i+1}^j - 2T_i^j + T_{i-1}^j}{(\Delta x)^2}
$$

Rearranging to solve for $T_i^{j+1}$:

$$
T_i^{j+1} = T_i^j + \frac{\alpha \Delta t}{(\Delta x)^2} (T_{i+1}^j - 2T_i^j + T_{i-1}^j)
$$

Let $r = \frac{\alpha \Delta t}{(\Delta x)^2}$ (the Courant number).

$$
T_i^{j+1} = (1 - 2r)T_i^j + rT_{i+1}^j + rT_{i-1}^j
$$

**Characteristics of the Explicit Method:**
*   **Simplicity:** Easy to implement, as the temperature at the new time step ($j+1$) at a node $i$ can be directly calculated from known values at the previous time step ($j$).
*   **Conditional Stability:** The method is only stable if the time step $\Delta t$ is sufficiently small, specifically if $r \le 0.5$ (for the 1D case). This can lead to very small time steps and long computation times for problems requiring long physical times. (Refer to Patankar, 2017, Chapter 6 for stability analysis).

#### 3.2. Implicit Method (Backward Euler)

Using backward difference in time and central difference in space:

$$
\frac{T_i^j - T_i^{j-1}}{\Delta t} = \alpha \frac{T_{i+1}^j - 2T_i^j + T_{i-1}^j}{(\Delta x)^2}
$$

Rearranging to solve for temperatures at the new time step ($j$):

$$
-rT_{i-1}^j + (1+2r)T_i^j - rT_{i+1}^j = T_i^{j-1}
$$

**Characteristics of the Implicit Method:**
*   **Unconditional Stability:** The method is stable for any $\Delta t$. This allows for larger time steps, potentially reducing computation time.
*   **Implicit System:** For each time step, we have a system of linear algebraic equations to solve, as the temperature at node $i$ depends on the temperatures at neighboring nodes ($i-1$ and $i+1$) at the *same* time step.

---

### 4. Solving Systems of Linear Algebraic Equations (CO4: K2)

The implicit methods for unsteady problems, or any steady-state problem discretization, result in a system of linear algebraic equations of the form $AX = B$, where $A$ is the coefficient matrix, $X$ is the vector of unknown temperatures, and $B$ is the source vector (often related to boundary conditions or previous time steps).

**Types of Systems:**
*   **General Systems:** Coefficient matrix $A$ can be dense.
*   **Sparsity:** In FDM, the matrix $A$ is often sparse, meaning most of its elements are zero. This is because each node's temperature only depends on its immediate neighbors.
*   **Structure:** For 1D unsteady implicit methods, the resulting system of equations forms a **Tri-Diagonal Matrix**.

#### 4.1. Point Iteration Methods

These are iterative techniques used to solve $AX = B$. The idea is to start with an initial guess for the solution vector $X$ and then refine it iteratively until convergence is achieved.

**General Idea:** Rewrite $AX = B$ in a form that allows iterative updates. For example, we can decompose $A = D + L + U$, where $D$ is the diagonal part, $L$ is the lower triangular part, and $U$ is the upper triangular part.

$$
(D + L + U)X = B
$$

Then, we can rearrange this to solve for $X^{k+1}$ based on $X^k$:

*   **Jacobi Method (Simultaneous Displacement):**
    $$
    DX^{k+1} = B - (L + U)X^k
    $$
    This method updates all values of $X$ simultaneously based on the values from the previous iteration.

*   **Gauss-Seidel Method (Successive Displacement):**
    $$
    (D + L)X^{k+1} = B - UX^k
    $$
    This method uses the most recently computed values of $X$ within the same iteration. It typically converges faster than the Jacobi method.

**Algorithm for Gauss-Seidel (for a system $a_i x_i = b_i - \sum_{j \neq i} c_{ij} x_j$):**
For $i = 1, 2, ..., N$:
$$
x_i^{k+1} = \frac{1}{a_i} \left( b_i - \sum_{j < i} c_{ij} x_j^{k+1} - \sum_{j > i} c_{ij} x_j^k \right)
$$

**Example Application (for Implicit Unsteady Conduction):**
Recall the implicit discretized equation:
$$
-rT_{i-1}^{j+1} + (1+2r)T_i^{j+1} - rT_{i+1}^{j+1} = T_i^j
$$
Let $T_i^{j+1}$ be denoted by $T_i$. The system is:
$$
a_i T_{i-1} + b_i T_i + c_i T_{i+1} = d_i
$$
Where:
*   $a_i = -r$ (for $i > 1$)
*   $b_i = 1 + 2r$
*   $c_i = -r$ (for $i < M-1$)
*   $d_i = T_i^j$ (for interior nodes)

For Gauss-Seidel at time step $j+1$:
$$
T_i^{j+1, k+1} = \frac{1}{1+2r} \left( T_i^j + rT_{i-1}^{j+1, k+1} + rT_{i+1}^{j+1, k} \right)
$$
(Boundary conditions would modify the first and last equations).

**Convergence:** Iterative methods converge when the change in the solution vector between successive iterations is below a predefined tolerance. The convergence rate depends on the properties of matrix $A$. For diagonally dominant matrices (which are common in FDM of PDEs), Gauss-Seidel generally converges. (Refer to Sastry, 2012, Chapter 8 for iterative methods).

#### 4.2. Tri-Diagonal Matrix Method (TDMA) / Thomas Algorithm

This is a direct method specifically designed to efficiently solve systems of linear equations where the coefficient matrix is tri-diagonal. The implicit scheme for 1D unsteady conduction (and steady conduction with a finite difference approximation) leads to such a matrix.

**The Tri-Diagonal System:**
$$
a_1 x_1 + b_1 x_2 = d_1 \\
a_i x_{i-1} + b_i x_i + c_i x_{i+1} = d_i \quad \text{for } i = 2, \dots, N-1 \\
a_N x_{N-1} + b_N x_N = d_N
$$

**The TDMA Algorithm:**
The TDMA works in two phases:
1.  **Forward Elimination:** This phase transforms the system into an upper tri-diagonal system, which can then be solved easily by back substitution.
2.  **Backward Substitution:** This phase solves for the unknowns starting from the last node.

**Phase 1: Forward Elimination**

We express the solution $x_i$ in terms of $x_{i+1}$ in the form $x_i = \alpha_i x_{i+1} + \beta_i$.

*   **For $i=1$:**
    From the first equation: $a_1 x_1 + b_1 x_2 = d_1 \implies x_1 = -\frac{b_1}{a_1} x_2 + \frac{d_1}{a_1}$.
    So, $\alpha_1 = -\frac{b_1}{a_1}$ and $\beta_1 = \frac{d_1}{a_1}$.

*   **For $i=2, \dots, N-1$:**
    Substitute $x_i = \alpha_i x_{i+1} + \beta_i$ and $x_{i-1} = \alpha_{i-1} x_i + \beta_{i-1}$ into the $i$-th equation:
    $a_i (\alpha_{i-1} x_i + \beta_{i-1}) + b_i x_i + c_i x_{i+1} = d_i$
    $(a_i \alpha_{i-1} + b_i) x_i + c_i x_{i+1} = d_i - a_i \beta_{i-1}$

    Now, express $x_i$ in terms of $x_{i+1}$:
    $x_i = -\frac{c_i}{a_i \alpha_{i-1} + b_i} x_{i+1} + \frac{d_i - a_i \beta_{i-1}}{a_i \alpha_{i-1} + b_i}$

    Therefore, the recurrence relations for $\alpha_i$ and $\beta_i$ are:
    $$
    \alpha_i = -\frac{c_i}{b_i + a_i \alpha_{i-1}} \quad \text{for } i=2, \dots, N-1
    $$
    $$
    \beta_i = \frac{d_i - a_i \beta_{i-1}}{b_i + a_i \alpha_{i-1}} \quad \text{for } i=2, \dots, N-1
    $$
    We also need to consider the boundary condition at node $N$. The equation for node $N-1$ is $a_{N-1} x_{N-2} + b_{N-1} x_{N-1} + c_{N-1} x_N = d_{N-1}$. We have $x_{N-1} = \alpha_{N-1} x_N + \beta_{N-1}$.

**Phase 2: Backward Substitution**

*   **For $i=N$:**
    We need to determine $x_N$. This usually comes from the last boundary condition. If the last equation is $a_N x_{N-1} + b_N x_N = d_N$, substitute $x_{N-1} = \alpha_{N-1} x_N + \beta_{N-1}$:
    $a_N (\alpha_{N-1} x_N + \beta_{N-1}) + b_N x_N = d_N$
    $(a_N \alpha_{N-1} + b_N) x_N = d_N - a_N \beta_{N-1}$
    $$
    x_N = \frac{d_N - a_N \beta_{N-1}}{b_N + a_N \alpha_{N-1}}
    $$

*   **For $i=N-1, \dots, 1$:**
    Using the relation $x_i = \alpha_i x_{i+1} + \beta_i$:
    $$
    x_i = \alpha_i x_{i+1} + \beta_i \quad \text{for } i=N-1, \dots, 1
    $$

**Example Application (Implicit Unsteady Conduction with TDMA):**
Consider the equation:
$$
-rT_{i-1}^{j+1} + (1+2r)T_i^{j+1} - rT_{i+1}^{j+1} = T_i^j
$$
This is a tri-diagonal system where:
*   $a_i = -r$ (for $i = 2, \dots, M-1$)
*   $b_i = 1+2r$ (for $i = 1, \dots, M-1$)
*   $c_i = -r$ (for $i = 1, \dots, M-2$)
*   $d_i = T_i^j$ (for $i = 2, \dots, M-2$)

Let's assume boundary conditions are $T_0^{j+1} = T_{in}$ and $T_M^{j+1} = T_{out}$.

*   **Node 1:** $b_1 T_1^{j+1} + c_1 T_2^{j+1} = d_1 \implies (1+2r)T_1^{j+1} - r T_2^{j+1} = T_1^j$.
    Here $a_1 = 0$, $b_1 = 1+2r$, $c_1 = -r$, $d_1 = T_1^j$.

*   **Node $i$ ($1 < i < M-1$):** $-r T_{i-1}^{j+1} + (1+2r)T_i^{j+1} - r T_{i+1}^{j+1} = T_i^j$.
    Here $a_i = -r$, $b_i = 1+2r$, $c_i = -r$, $d_i = T_i^j$.

*   **Node $M-1$:** $a_{M-1} T_{M-2}^{j+1} + b_{M-1} T_{M-1}^{j+1} = d_{M-1} \implies -r T_{M-2}^{j+1} + (1+2r)T_{M-1}^{j+1} = T_{M-1}^j$.
    Here $a_{M-1} = -r$, $b_{M-1} = 1+2r$, $c_{M-1} = 0$, $d_{M-1} = T_{M-1}^j$.

The $\alpha$ and $\beta$ coefficients are calculated for $i=1, \dots, M-2$.
$\alpha_1 = -\frac{c_1}{b_1} = -\frac{-r}{1+2r} = \frac{r}{1+2r}$
$\beta_1 = \frac{d_1}{b_1} = \frac{T_1^j}{1+2r}$

For $i = 2, \dots, M-2$:
$\alpha_i = -\frac{-r}{1+2r + (-r)\alpha_{i-1}} = \frac{r}{1+2r - r\alpha_{i-1}}$
$\beta_i = \frac{T_i^j - (-r)\beta_{i-1}}{1+2r + (-r)\alpha_{i-1}} = \frac{T_i^j + r\beta_{i-1}}{1+2r - r\alpha_{i-1}}$

For the last unknown $T_{M-1}$, we use the final equation:
$a_{M-1} T_{M-2}^{j+1} + b_{M-1} T_{M-1}^{j+1} = d_{M-1}$
Substitute $T_{M-2}^{j+1} = \alpha_{M-2} T_{M-1}^{j+1} + \beta_{M-2}$:
$-r(\alpha_{M-2} T_{M-1}^{j+1} + \beta_{M-2}) + (1+2r) T_{M-1}^{j+1} = T_{M-1}^j$
$T_{M-1}^{j+1} = \frac{T_{M-1}^j + r \beta_{M-2}}{1+2r - r \alpha_{M-2}}$

Now, back-substitute:
$T_{M-2}^{j+1} = \alpha_{M-2} T_{M-1}^{j+1} + \beta_{M-2}$
...
$T_1^{j+1} = \alpha_1 T_2^{j+1} + \beta_1$

**Efficiency of TDMA:** TDMA is computationally efficient for tri-diagonal systems. It requires a number of operations proportional to the number of unknowns ($M$), making it a direct and fast solver. (Refer to Patankar, 2017, Chapter 5 for TDMA).

---

### 5. Solving Simple Problems (CO5: K3)

This section focuses on applying the concepts to solve practical problems.

**Example Problem:**
A thin metal rod of length $L=1$ m is initially at a uniform temperature of $100^\circ C$. Suddenly, one end ($x=0$) is brought into contact with a heat reservoir at $0^\circ C$, and the other end ($x=1$) is insulated. The thermal diffusivity of the rod material is $\alpha = 0.0001 \, m^2/s$. Use the explicit FDM with $\Delta x = 0.2$ m and $\Delta t = 10$ s to find the temperature distribution at $t=10$ s.

**Given:**
*   $L = 1$ m
*   Initial condition: $T(x, 0) = 100^\circ C$ for $0 \le x \le 1$.
*   Boundary condition at $x=0$: $T(0, t) = 0^\circ C$.
*   Boundary condition at $x=1$: Insulated, $\frac{\partial T}{\partial x}(1, t) = 0$.
*   $\alpha = 0.0001 \, m^2/s$.
*   $\Delta x = 0.2$ m.
*   $\Delta t = 10$ s.
*   Target time: $t = 10$ s.

**Steps:**

1.  **Check Stability:**
    $r = \frac{\alpha \Delta t}{(\Delta x)^2} = \frac{0.0001 \, m^2/s \times 10 \, s}{(0.2 \, m)^2} = \frac{0.001}{0.04} = 0.025$.
    Since $r = 0.025 \le 0.5$, the explicit method is stable.

2.  **Discretize:**
    Number of spatial intervals = $L / \Delta x = 1 / 0.2 = 5$.
    Number of nodes $M+1 = 6$. Nodes are at $x=0, 0.2, 0.4, 0.6, 0.8, 1.0$.
    Let's denote nodes as $0, 1, 2, 3, 4, 5$. So, $M=5$ for our internal nodes if we are careful about boundaries.

3.  **Formulate Explicit Equation:**
    $T_i^{j+1} = (1 - 2r)T_i^j + rT_{i+1}^j + rT_{i-1}^j$
    $T_i^{j+1} = (1 - 2 \times 0.025)T_i^j + 0.025 T_{i+1}^j + 0.025 T_{i-1}^j$
    $T_i^{j+1} = 0.95 T_i^j + 0.025 T_{i+1}^j + 0.025 T_{i-1}^j$

4.  **Handle Boundary Conditions:**
    *   **Node 0 ($i=0$):** $T_0^j = 0$ for all $j$.
    *   **Node 5 ($i=5$, insulated):**
        The insulated boundary condition means no heat flux across the boundary.
        $\frac{\partial T}{\partial x}(1, t) = 0$.
        Using a forward difference at $x=1$: $\frac{T_6^j - T_4^j}{2\Delta x} = 0 \implies T_6^j = T_4^j$.
        Now, apply the explicit scheme to node $i=5$:
        $T_5^{j+1} = 0.95 T_5^j + 0.025 T_6^j + 0.025 T_4^j$
        Substitute $T_6^j = T_4^j$:
        $T_5^{j+1} = 0.95 T_5^j + 0.025 T_4^j + 0.025 T_4^j = 0.95 T_5^j + 0.05 T_4^j$.

5.  **Calculate Temperatures at $t=10$ s:**
    This requires 1 time step since $\Delta t = 10$ s and target time is $10$ s.
    Initial temperatures ($j=0$):
    $T_0^0 = 0^\circ C$
    $T_1^0 = 100^\circ C$
    $T_2^0 = 100^\circ C$
    $T_3^0 = 100^\circ C$
    $T_4^0 = 100^\circ C$
    $T_5^0 = 100^\circ C$

    Calculate temperatures at $t=10$ s ($j=1$):
    *   $T_0^1 = 0^\circ C$ (Boundary condition)
    *   $T_1^1 = 0.95 T_1^0 + 0.025 T_2^0 + 0.025 T_0^0 = 0.95(100) + 0.025(100) + 0.025(0) = 95 + 2.5 = 97.5^\circ C$.
    *   $T_2^1 = 0.95 T_2^0 + 0.025 T_3^0 + 0.025 T_1^0 = 0.95(100) + 0.025(100) + 0.025(100) = 95 + 2.5 + 2.5 = 100^\circ C$.
    *   $T_3^1 = 0.95 T_3^0 + 0.025 T_4^0 + 0.025 T_2^0 = 0.95(100) + 0.025(100) + 0.025(100) = 95 + 2.5 + 2.5 = 100^\circ C$.
    *   $T_4^1 = 0.95 T_4^0 + 0.025 T_5^0 + 0.025 T_3^0 = 0.95(100) + 0.025(100) + 0.025(100) = 95 + 2.5 + 2.5 = 100^\circ C$.
    *   $T_5^1 = 0.95 T_5^0 + 0.05 T_4^0 = 0.95(100) + 0.05(100) = 95 + 5 = 100^\circ C$.

**Result at $t=10$ s:**
$T_0=0^\circ C, T_1=97.5^\circ C, T_2=100^\circ C, T_3=100^\circ C, T_4=100^\circ C, T_5=100^\circ C$.

**Important Note on Approximation:** The insulated boundary condition at $x=1$ can be approximated in other ways, e.g., using a ghost node or a backward difference. The choice affects the accuracy. The method used here is a common approximation.

---

### 6. Practice Questions and Exercises

**Question 1:**
For the implicit FDM discretization of the 1D unsteady heat conduction equation:
$$
-rT_{i-1}^{j+1} + (1+2r)T_i^{j+1} - rT_{i+1}^{j+1} = T_i^j
$$
Identify the coefficients $a_i$, $b_i$, $c_i$, and $d_i$ for an interior node $i$. If $r=0.1$, what are the values of $\alpha_2$ and $\beta_2$ if you were to apply TDMA starting from node $i=1$ with $b_1=1.2, c_1=-0.1, d_1=100$? (Assume $a_1=0$).

**Answer 1:**
For an interior node $i$:
$a_i = -r$
$b_i = 1+2r$
$c_i = -r$
$d_i = T_i^j$

Given $r=0.1$:
$a_i = -0.1$
$b_i = 1 + 2(0.1) = 1.2$
$c_i = -0.1$

For $i=1$: $b_1=1.2$, $c_1=-0.1$, $d_1=100$. (Note: The problem statement assumes $a_1=0$ for the first node, which is typical for TDMA implementation in systems that don't start with a $a_1 x_0$ term).

**TDMA Forward Elimination:**
$\alpha_1 = -\frac{c_1}{b_1} = -\frac{-0.1}{1.2} = \frac{0.1}{1.2} = \frac{1}{12} \approx 0.0833$
$\beta_1 = \frac{d_1}{b_1} = \frac{100}{1.2} = \frac{1000}{12} = \frac{250}{3} \approx 83.33$

For $i=2$:
$\alpha_2 = -\frac{c_2}{b_2 + a_2 \alpha_1}$
Using the general coefficients with $r=0.1$: $a_2 = -0.1$, $b_2 = 1.2$, $c_2 = -0.1$.
$\alpha_2 = -\frac{-0.1}{1.2 + (-0.1) \times (1/12)} = \frac{0.1}{1.2 - 0.1/12} = \frac{0.1}{1.2 - 1/120} = \frac{0.1}{1.191667} \approx 0.0839$

$\beta_2 = \frac{d_2 - a_2 \beta_1}{b_2 + a_2 \alpha_1}$
Let's assume $d_2 = 100$ for illustration (representing $T_2^j$).
$\beta_2 = \frac{100 - (-0.1) \times (250/3)}{1.2 + (-0.1) \times (1/12)} = \frac{100 + 10/3}{1.191667} = \frac{100 + 3.3333}{1.191667} = \frac{103.3333}{1.191667} \approx 86.71$

**Question 2:**
A rod of length $L=0.4$ m is initially at $20^\circ C$. One end ($x=0$) is maintained at $100^\circ C$, and the other end ($x=0.4$) is maintained at $20^\circ C$. The thermal diffusivity is $\alpha = 0.0002 \, m^2/s$. Discretize the rod into 4 equal segments ($\Delta x = 0.1$ m). If you were to solve this using the **implicit** FDM scheme, what would the system of linear equations look like for the interior nodes? (Assume it's a steady-state problem for simplicity, but the structure of the equation is similar to implicit unsteady).

**Answer 2:**
For steady state, the equation is $\frac{\partial^2 T}{\partial x^2} = 0$.
Using central difference for the second derivative:
$\frac{T_{i+1}^j - 2T_i^j + T_{i-1}^j}{(\Delta x)^2} = 0$
$T_{i+1} - 2T_i + T_{i-1} = 0$ (where $j$ is dropped as it's steady-state)

This can be written as: $T_{i-1} - 2T_i + T_{i+1} = 0$.
The coefficient matrix for this is tri-diagonal.

With $\Delta x = 0.1$ m, nodes are at $x=0, 0.1, 0.2, 0.3, 0.4$.
Interior nodes are $i=1$ (at $x=0.1$), $i=2$ (at $x=0.2$), $i=3$ (at $x=0.3$).
The total number of nodes is $N+1 = 5$, so we have $N=4$ segments and $M=3$ interior nodes.

*   **Node 1 ($i=1$, $x=0.1$):**
    $T_0 - 2T_1 + T_2 = 0$.
    Boundary condition: $T_0 = 100^\circ C$.
    So, $100 - 2T_1 + T_2 = 0$.
    Rearranging: $-2T_1 + T_2 = -100$.

*   **Node 2 ($i=2$, $x=0.2$):**
    $T_1 - 2T_2 + T_3 = 0$.
    Rearranging: $T_1 - 2T_2 + T_3 = 0$.

*   **Node 3 ($i=3$, $x=0.3$):**
    $T_2 - 2T_3 + T_4 = 0$.
    Boundary condition: $T_4 = 20^\circ C$.
    So, $T_2 - 2T_3 + 20 = 0$.
    Rearranging: $T_2 - 2T_3 = -20$.

The system of linear equations for the interior temperatures ($T_1, T_2, T_3$) is:
$$
\begin{bmatrix}
-2 & 1 & 0 \\
1 & -2 & 1 \\
0 & 1 & -2
\end{bmatrix}
\begin{bmatrix}
T_1 \\
T_2 \\
T_3
\end{bmatrix}
=
\begin{bmatrix}
-100 \\
0 \\
-20
\end{bmatrix}
$$
This is a tri-diagonal system that can be solved efficiently using TDMA.

---

### 7. Important Points to Remember

*   **Explicit vs. Implicit:** Explicit methods are simple but conditionally stable, requiring small time steps. Implicit methods are unconditionally stable, allowing larger time steps but requiring the solution of a system of equations at each time step.
*   **Stability Condition (Explicit):** $r = \frac{\alpha \Delta t}{(\Delta x)^2} \le 0.5$ for 1D conduction.
*   **TDMA:** Essential for efficiently solving tri-diagonal systems arising from 1D implicit FDM. It consists of a forward elimination and a backward substitution phase.
*   **Iterative Methods (Jacobi, Gauss-Seidel):** Used for solving systems where direct methods are too expensive or for non-linear problems. Convergence depends on the matrix properties (e.g., diagonal dominance).
*   **Boundary Conditions:** Accurate implementation of boundary conditions is critical for the accuracy of the numerical solution. Insulated boundaries require special treatment (e.g., ghost nodes or approximations).
*   **Computational Effort:** TDMA offers a significant advantage in computational speed over general solvers for tri-diagonal systems.

---

### 8. Alignment with Course Outcomes

*   **CO1 (K2):** Understanding the unsteady heat conduction equation as a governing equation of heat transfer.
*   **CO2 (K2):** Recognizing the heat equation as a parabolic PDE and understanding its implications for numerical methods.
*   **CO3 (K1):** Familiarity with FDM discretization techniques for derivatives and their application to the heat equation.
*   **CO4 (K2):** Understanding that implicit methods lead to systems of linear equations and being familiar with iterative and direct methods like TDMA for solving them.
*   **CO5 (K3):** Ability to apply FDM (explicit or implicit) and appropriate solvers (like TDMA for implicit) to solve simple unsteady conduction problems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### References

*   **Sastry, S. S. (2012).** *Introductory methods to numerical analysis.* PHI learning Private Ltd. (Chapters on iterative methods and numerical solution of ODEs/PDEs).
*   **Patankar, Suhas V. (2017).** *Numerical Heat Transfer and Fluid Flow.* Crc Press. (Chapters on FDM, stability, and solvers like TDMA).
*   **Anderson, John David, & Wendt, John. (1995).** *Computational fluid dynamics.* McGraw-Hill International Editions: Mechanical Engineering. (General CFD concepts).
*   **Versteeg, H., & Malalasekera, W. (2008).** *An Introduction to Computational Fluid Dynamics the Finite Volume Method.* Pearson India. (Provides context for numerical methods).
*   **Venkatesh, S. P. (2009).** *Heat transfer.* Ane books Pvt Ltd. (Fundamental heat transfer principles).