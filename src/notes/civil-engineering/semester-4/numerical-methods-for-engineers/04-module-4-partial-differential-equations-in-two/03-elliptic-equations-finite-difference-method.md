---
title: "Elliptic equations - Finite difference method."
subject: "NUMERICAL METHODS FOR ENGINEERS"
module: "Module 4: Partial differential equations in two"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810b4a"
status: "completed"
scrapedAt: "2026-05-20T18:46:53.851Z"
---
# NUMERICAL METHODS FOR ENGINEERS

## Module 4: Partial Differential Equations in Two Dimensions

### Topic: Elliptic Equations - Finite Difference Method

---

### Learning Outcomes:

Upon successful completion of this topic, you should be able to:

1.  Understand the nature and importance of elliptic partial differential equations (PDEs) in engineering.
2.  Derive the finite difference approximations for the second-order derivatives involved in elliptic PDEs.
3.  Formulate the finite difference discretization of common elliptic PDEs (e.g., Laplace's equation, Poisson's equation) on a rectangular domain.
4.  Develop and implement iterative methods (e.g., Jacobi, Gauss-Seidel, SOR) for solving the resulting system of linear algebraic equations.
5.  Apply the finite difference method to solve practical engineering problems governed by elliptic PDEs.

---

### 1. Introduction to Elliptic PDEs in Engineering

Elliptic PDEs are a class of second-order PDEs that typically describe steady-state phenomena or equilibrium conditions. In engineering, they are fundamental for modeling problems like:

*   **Steady-state heat conduction:** Distribution of temperature in a solid when the temperature is no longer changing with time.
*   **Potential flow:** Velocity potential in irrotational, incompressible fluid flow.
*   **Electrostatics:** Electric potential in regions free of charges.
*   **Elasticity:** Stress and strain distribution in elastic solids under static loads.
*   **Dirichlet problems:** Specifying boundary values for the unknown function.

**Key Characteristic:** Elliptic PDEs usually have boundary conditions prescribed on the entire boundary of the domain. The solution at any interior point depends on the boundary values.

**General Form of a 2D Elliptic PDE:**

A general second-order linear PDE in two independent variables ($x$, $y$) can be written as:

$A \frac{\partial^2 u}{\partial x^2} + B \frac{\partial^2 u}{\partial x \partial y} + C \frac{\partial^2 u}{\partial y^2} + D \frac{\partial u}{\partial x} + E \frac{\partial u}{\partial y} + F u = G(x, y)$

where $A$, $B$, $C$, $D$, $E$, $F$, and $G$ are functions of $x$ and $y$.

The equation is classified as **elliptic** if $B^2 - 4AC < 0$.

**Common Examples:**

*   **Laplace's Equation:** $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$
    *   Describes steady-state heat conduction in 2D with no heat sources.
    *   Describes the electric potential in a charge-free region.
*   **Poisson's Equation:** $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = f(x, y)$
    *   Describes steady-state heat conduction in 2D with a heat source/sink.
    *   Describes the electric potential in a region with a charge density.

---

### 2. Finite Difference Approximations for Second-Order Derivatives

The finite difference method approximates derivatives by replacing them with algebraic expressions involving the function values at discrete points (grid points).

Consider a function $u(x)$ and points $x_i = x_0 + i \Delta x$.

#### 2.1. First Derivative Approximations

*   **Forward Difference:**
    $\frac{\partial u}{\partial x}\bigg|_{x_i} \approx \frac{u(x_i + \Delta x) - u(x_i)}{\Delta x} = \frac{u_{i+1} - u_i}{\Delta x}$
    *   Error: $O(\Delta x)$

*   **Backward Difference:**
    $\frac{\partial u}{\partial x}\bigg|_{x_i} \approx \frac{u(x_i) - u(x_i - \Delta x)}{\Delta x} = \frac{u_i - u_{i-1}}{\Delta x}$
    *   Error: $O(\Delta x)$

*   **Central Difference:**
    $\frac{\partial u}{\partial x}\bigg|_{x_i} \approx \frac{u(x_i + \Delta x) - u(x_i - \Delta x)}{2 \Delta x} = \frac{u_{i+1} - u_{i-1}}{2 \Delta x}$
    *   Error: $O((\Delta x)^2)$ - Generally preferred for accuracy.

#### 2.2. Second Derivative Approximations

Using Taylor series expansion around $x_i$:
$u(x_i + \Delta x) = u(x_i) + (\Delta x) \frac{\partial u}{\partial x}\bigg|_{x_i} + \frac{(\Delta x)^2}{2!} \frac{\partial^2 u}{\partial x^2}\bigg|_{x_i} + \frac{(\Delta x)^3}{3!} \frac{\partial^3 u}{\partial x^3}\bigg|_{x_i} + \dots$
$u(x_i - \Delta x) = u(x_i) - (\Delta x) \frac{\partial u}{\partial x}\bigg|_{x_i} + \frac{(\Delta x)^2}{2!} \frac{\partial^2 u}{\partial x^2}\bigg|_{x_i} - \frac{(\Delta x)^3}{3!} \frac{\partial^3 u}{\partial x^3}\bigg|_{x_i} + \dots$

**Adding these two equations:**
$u(x_i + \Delta x) + u(x_i - \Delta x) = 2 u(x_i) + (\Delta x)^2 \frac{\partial^2 u}{\partial x^2}\bigg|_{x_i} + O((\Delta x)^3)$

Rearranging to solve for the second derivative:
$\frac{\partial^2 u}{\partial x^2}\bigg|_{x_i} \approx \frac{u(x_i + \Delta x) - 2u(x_i) + u(x_i - \Delta x)}{(\Delta x)^2} = \frac{u_{i+1} - 2u_i + u_{i-1}}{(\Delta x)^2}$

This is the **central difference approximation** for the second derivative. It is second-order accurate: $O((\Delta x)^2)$.

**Similarly, for the y-direction:**
$\frac{\partial^2 u}{\partial y^2}\bigg|_{y_j} \approx \frac{u(y_j + \Delta y) - 2u(y_j) + u(y_j - \Delta y)}{(\Delta y)^2} = \frac{u_{j+1} - 2u_j + u_{j-1}}{(\Delta y)^2}$

---

### 3. Finite Difference Discretization of Elliptic PDEs

We discretize the domain into a grid of points. Let the grid points be $(x_i, y_j)$, where $x_i = i \Delta x$ and $y_j = j \Delta y$. We denote the unknown function value at $(x_i, y_j)$ as $u_{i,j} = u(x_i, y_j)$.

Consider a rectangular domain $0 \le x \le L$ and $0 \le y \le W$. We divide this domain into $M$ intervals in the x-direction and $N$ intervals in the y-direction. So, $\Delta x = L/M$ and $\Delta y = W/N$. The grid points are $i=0, 1, \dots, M$ and $j=0, 1, \dots, N$.

#### 3.1. Discretization of Laplace's Equation

Laplace's Equation: $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$

Applying the central difference approximations at an interior grid point $(x_i, y_j)$:

$\frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{(\Delta x)^2} + \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{(\Delta y)^2} = 0$

For simplicity, let's assume a uniform grid where $\Delta x = \Delta y = h$. The equation becomes:

$\frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{h^2} + \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{h^2} = 0$

Multiplying by $h^2$:

$(u_{i+1,j} - 2u_{i,j} + u_{i-1,j}) + (u_{i,j+1} - 2u_{i,j} + u_{i,j-1}) = 0$

Rearranging to solve for $u_{i,j}$:

$u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - 4u_{i,j} = 0$

$4u_{i,j} = u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1}$

$u_{i,j} = \frac{1}{4} (u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1})$

This is the **five-point stencil** for Laplace's equation. It states that the value at an interior grid point is the average of its four nearest neighbors (up, down, left, right).

**Boundary Conditions:**
For elliptic PDEs, boundary conditions are specified on the entire boundary of the domain.

*   **Dirichlet Boundary Condition:** $u(x,y) = g(x,y)$ on the boundary.
    *   For grid points on the boundary, the value of $u_{i,j}$ is directly set to the given boundary value $g(x_i, y_j)$.

*   **Neumann Boundary Condition:** $\frac{\partial u}{\partial n} = h(x,y)$ on the boundary (where $n$ is the outward normal).
    *   These require special treatment using ghost points or one-sided finite difference approximations at the boundary.

**Example: Discretization of Laplace's Equation with Dirichlet Boundary Conditions**

Consider a square domain $0 \le x \le 1$, $0 \le y \le 1$.
Let $\Delta x = \Delta y = h = 0.5$. This gives a $3 \times 3$ grid of points.
The interior point is $(0.5, 0.5)$, so $i=1, j=1$.

The grid points are:
(0,0), (0.5,0), (1,0)
(0,0.5), (0.5,0.5), (1,0.5)
(0,1), (0.5,1), (1,1)

Let the boundary conditions be:
$u(x,0) = 100$ for $0 \le x \le 1$ (Bottom edge)
$u(x,1) = 0$ for $0 \le x \le 1$ (Top edge)
$u(0,y) = 0$ for $0 \le y \le 1$ (Left edge)
$u(1,y) = 0$ for $0 \le y \le 1$ (Right edge)

The interior point is $(x_1, y_1) = (0.5, 0.5)$. Its neighbors are:
$(x_2, y_1) = (1.0, 0.5)$ (Right)
$(x_0, y_1) = (0.0, 0.5)$ (Left)
$(x_1, y_2) = (0.5, 1.0)$ (Up)
$(x_1, y_0) = (0.5, 0.0)$ (Down)

The finite difference equation for $u_{1,1}$ is:
$u_{1,1} = \frac{1}{4} (u_{2,1} + u_{0,1} + u_{1,2} + u_{1,0})$

Now, substitute the boundary values:
$u_{2,1} = u(1.0, 0.5) = 0$ (Right boundary)
$u_{0,1} = u(0.0, 0.5) = 0$ (Left boundary)
$u_{1,2} = u(0.5, 1.0) = 0$ (Top boundary)
$u_{1,0} = u(0.5, 0.0) = 100$ (Bottom boundary)

So, for this $3 \times 3$ grid, we have only one interior point. The equation for $u_{1,1}$ becomes:
$u_{1,1} = \frac{1}{4} (0 + 0 + 0 + 100) = 25$

This is a simple closed-form solution for this coarse grid. For finer grids, we would have a system of linear equations.

#### 3.2. Discretization of Poisson's Equation

Poisson's Equation: $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = f(x, y)$

Applying central differences with $\Delta x = \Delta y = h$:

$\frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{h^2} + \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{h^2} = f(x_i, y_j)$

Multiplying by $h^2$:

$u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - 4u_{i,j} = h^2 f(x_i, y_j)$

Rearranging to solve for $u_{i,j}$:

$4u_{i,j} = u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - h^2 f(x_i, y_j)$

$u_{i,j} = \frac{1}{4} (u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - h^2 f(x_i, y_j))$

This formula is used for interior points. Boundary points are handled by the boundary conditions.

---

### 4. Solving the System of Linear Algebraic Equations: Iterative Methods

The finite difference discretization of elliptic PDEs results in a large system of linear algebraic equations of the form $\mathbf{A} \mathbf{u} = \mathbf{b}$, where $\mathbf{u}$ is the vector of unknown function values at the interior grid points.

For large grids, direct methods (like Gaussian elimination or LU decomposition) become computationally expensive and memory-intensive. Iterative methods are preferred. These methods start with an initial guess for the solution vector $\mathbf{u}^{(0)}$ and generate a sequence of approximate solutions $\mathbf{u}^{(1)}, \mathbf{u}^{(2)}, \dots$ that converge to the true solution.

#### 4.1. Jacobi Iteration

The Jacobi method updates each unknown $u_{i,j}$ using the values from the *previous* iteration.
From the discretized Laplace equation:
$u_{i,j}^{(k+1)} = \frac{1}{4} (u_{i+1,j}^{(k)} + u_{i-1,j}^{(k)} + u_{i,j+1}^{(k)} + u_{i,j-1}^{(k)})$

**Algorithm:**
1.  Initialize all interior grid points with an initial guess, e.g., $u_{i,j}^{(0)} = 0$ or boundary values.
2.  For $k = 0, 1, 2, \dots$:
    *   For each interior grid point $(i,j)$:
        *   Calculate $u_{i,j}^{(k+1)}$ using the values $u$ from iteration $k$.
3.  Repeat step 2 until the solution converges (i.e., the difference between successive iterations is below a specified tolerance).

**Disadvantage:** Jacobi can be slow to converge.

#### 4.2. Gauss-Seidel Iteration

The Gauss-Seidel method uses the *most recently computed* values to update the unknowns. This means that as soon as a new value $u_{i,j}^{(k+1)}$ is computed, it's used immediately for subsequent calculations within the same iteration.

From the discretized Laplace equation:
$u_{i,j}^{(k+1)} = \frac{1}{4} (u_{i+1,j}^{(k)} + u_{i-1,j}^{(k+1)} + u_{i,j+1}^{(k)} + u_{i,j-1}^{(k+1)})$

**Algorithm:**
1.  Initialize all interior grid points with an initial guess, e.g., $u_{i,j}^{(0)} = 0$ or boundary values.
2.  For $k = 0, 1, 2, \dots$:
    *   For each interior grid point $(i,j)$ (typically scanned in a fixed order, e.g., row by row, column by column):
        *   Calculate $u_{i,j}^{(k+1)}$ using the latest available values (some might be from iteration $k+1$, others from iteration $k$).
3.  Repeat step 2 until convergence.

**Advantage:** Gauss-Seidel generally converges faster than Jacobi because it uses updated information more quickly.

#### 4.3. Successive Over-Relaxation (SOR)

SOR is an acceleration of the Gauss-Seidel method. It introduces a relaxation parameter, $\omega$ (omega), to control the step size of the update.

The update formula is:
$u_{i,j}^{(k+1)} = (1 - \omega) u_{i,j}^{(k)} + \omega \left( \frac{1}{4} (u_{i+1,j}^{(k)} + u_{i-1,j}^{(k+1)} + u_{i,j+1}^{(k)} + u_{i,j-1}^{(k+1)}) \right)$

Here, the term in the parenthesis is the Gauss-Seidel update. The new value is a weighted average of the previous value and the Gauss-Seidel update.

*   If $\omega = 1$, SOR is identical to Gauss-Seidel.
*   If $0 < \omega < 1$, it's an under-relaxation (rarely used for convergence acceleration).
*   If $1 < \omega < 2$, it's an over-relaxation, which can significantly speed up convergence.

The optimal value of $\omega$ depends on the problem and the grid size, but values between 1.5 and 1.9 are often effective.

**Algorithm:**
1.  Initialize all interior grid points.
2.  Choose a relaxation parameter $\omega$ ($1 < \omega < 2$).
3.  For $k = 0, 1, 2, \dots$:
    *   For each interior grid point $(i,j)$:
        *   Calculate the Gauss-Seidel update for $u_{i,j}$.
        *   Update $u_{i,j}$ using the SOR formula.
4.  Repeat step 3 until convergence.

**Advantage:** Can provide significant speed-up compared to Gauss-Seidel, especially for large grids.

**Convergence Criteria:**
Convergence is typically monitored by checking the maximum absolute difference between successive iterates for all interior points:
$\max_{i,j} |u_{i,j}^{(k+1)} - u_{i,j}^{(k)}| < \epsilon$
where $\epsilon$ is a small tolerance.

---

### 5. Application Example: Steady-State Heat Conduction in a Plate

**Problem:**
Consider a thin square metal plate of size $1 \text{m} \times 1 \text{m}$. The plate is insulated on the left and right edges. The bottom edge is maintained at $100^\circ\text{C}$, and the top edge is maintained at $0^\circ\text{C}$. Find the steady-state temperature distribution in the plate.

**Governing Equation:**
The steady-state temperature distribution $T(x, y)$ in a 2D plate with no heat sources is governed by Laplace's equation:
$\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} = 0$

**Boundary Conditions:**
*   $T(x, 0) = 100^\circ\text{C}$ for $0 \le x \le 1$ (Bottom)
*   $T(x, 1) = 0^\circ\text{C}$ for $0 \le x \le 1$ (Top)
*   $\frac{\partial T}{\partial x}(0, y) = 0$ for $0 \le y \le 1$ (Left, insulated)
*   $\frac{\partial T}{\partial x}(1, y) = 0$ for $0 \le y \le 1$ (Right, insulated)

**Discretization:**
Let's use a grid with $\Delta x = \Delta y = h = 0.25$. This means $M = 1/0.25 = 4$ and $N = 1/0.25 = 4$.
The grid will have $(M+1) \times (N+1) = 5 \times 5 = 25$ points.
Indices $i$ range from 0 to 4 (x-direction), and $j$ from 0 to 4 (y-direction).

Interior points are for $i = 1, 2, 3$ and $j = 1, 2, 3$. There are $3 \times 3 = 9$ interior points.

The finite difference equation for an interior point $(i,j)$ is:
$T_{i,j} = \frac{1}{4} (T_{i+1,j} + T_{i-1,j} + T_{i,j+1} + T_{i,j-1})$

**Handling Neumann Boundary Conditions (Insulated Edges):**
At the insulated left edge ($i=0$, for $j=1, 2, 3$): $\frac{\partial T}{\partial x}(0, y_j) = 0$.
Using a central difference for $\frac{\partial T}{\partial x}$ at $x=0$ would involve a "ghost point" $T_{-1,j}$:
$\frac{T_{1,j} - T_{-1,j}}{2 \Delta x} = 0 \implies T_{1,j} = T_{-1,j}$.
The finite difference equation for $T_{0,j}$ would involve $T_{0+1,j}$, $T_{0-1,j}$, $T_{0,j+1}$, $T_{0,j-1}$.
$T_{0,j} = \frac{1}{4} (T_{1,j} + T_{-1,j} + T_{0,j+1} + T_{0,j-1})$
Substitute $T_{-1,j} = T_{1,j}$:
$T_{0,j} = \frac{1}{4} (T_{1,j} + T_{1,j} + T_{0,j+1} + T_{0,j-1})$
$T_{0,j} = \frac{1}{2} T_{1,j} + \frac{1}{4} (T_{0,j+1} + T_{0,j-1})$

Similarly, for the insulated right edge ($i=4$, for $j=1, 2, 3$): $\frac{\partial T}{\partial x}(1, y_j) = 0$.
This leads to:
$T_{4,j} = \frac{1}{2} T_{3,j} + \frac{1}{4} (T_{4,j+1} + T_{4,j-1})$

**System of Equations:**
We have 9 interior points $T_{i,j}$ for $i,j \in \{1,2,3\}$.
Let's list the equations for the interior points:

*   **For $j=1$ (y=0.25):**
    *   $T_{1,1} = \frac{1}{4} (T_{2,1} + T_{0,1} + T_{1,2} + T_{1,0})$
    *   $T_{2,1} = \frac{1}{4} (T_{3,1} + T_{1,1} + T_{2,2} + T_{2,0})$
    *   $T_{3,1} = \frac{1}{4} (T_{4,1} + T_{2,1} + T_{3,2} + T_{3,0})$

*   **For $j=2$ (y=0.5):**
    *   $T_{1,2} = \frac{1}{4} (T_{2,2} + T_{0,2} + T_{1,3} + T_{1,1})$
    *   $T_{2,2} = \frac{1}{4} (T_{3,2} + T_{1,2} + T_{2,3} + T_{2,1})$
    *   $T_{3,2} = \frac{1}{4} (T_{4,2} + T_{2,2} + T_{3,3} + T_{3,1})$

*   **For $j=3$ (y=0.75):**
    *   $T_{1,3} = \frac{1}{4} (T_{2,3} + T_{0,3} + T_{1,4} + T_{1,2})$
    *   $T_{2,3} = \frac{1}{4} (T_{3,3} + T_{1,3} + T_{2,4} + T_{2,2})$
    *   $T_{3,3} = \frac{1}{4} (T_{4,3} + T_{2,3} + T_{3,4} + T_{3,2})$

**Substituting Known Boundary Values:**
*   $T_{i,0} = 100$ for $i=0,1,2,3,4$ (Bottom edge)
*   $T_{i,4} = 0$ for $i=0,1,2,3,4$ (Top edge)
*   The insulated boundary conditions will be applied implicitly when we formulate the equations for $T_{0,j}$ and $T_{4,j}$ if we were solving for them. However, in this setup, $T_{0,j}$ and $T_{4,j}$ are NOT interior points, so their values are determined by the boundary conditions.

Let's rewrite the equations using Neumann conditions *explicitly for the boundary points that affect interior points*:

The equations for the interior points are correctly written above, but we need to make sure the boundary values used are correct.
The points on the left ($i=0$) and right ($i=4$) boundaries are not interior points.

Let's consider the equations for the points *adjacent* to the insulated boundaries.
For $i=1$ (left interior points):
$T_{1,j} = \frac{1}{4} (T_{2,j} + T_{0,j} + T_{1,j+1} + T_{1,j-1})$
At $j=1,2,3$, we use $T_{0,j}$ from the left boundary.
$T_{0,1} = 0$ (Left boundary)
$T_{0,2} = 0$ (Left boundary)
$T_{0,3} = 0$ (Left boundary)
Similarly for the right boundary ($i=3$), $T_{4,j}$ are boundary points ($i=4$).
$T_{4,1} = 0$
$T_{4,2} = 0$
$T_{4,3} = 0$

**Corrected Equations for Interior Points (i=1,2,3; j=1,2,3):**

*   **j=1 (y=0.25):**
    *   $T_{1,1} = \frac{1}{4} (T_{2,1} + \mathbf{0} + T_{1,2} + \mathbf{100})$
    *   $T_{2,1} = \frac{1}{4} (T_{3,1} + T_{1,1} + T_{2,2} + \mathbf{100})$
    *   $T_{3,1} = \frac{1}{4} (\mathbf{0} + T_{2,1} + T_{3,2} + \mathbf{100})$

*   **j=2 (y=0.5):**
    *   $T_{1,2} = \frac{1}{4} (T_{2,2} + \mathbf{0} + T_{1,3} + T_{1,1})$
    *   $T_{2,2} = \frac{1}{4} (T_{3,2} + T_{1,2} + T_{2,3} + T_{2,1})$
    *   $T_{3,2} = \frac{1}{4} (\mathbf{0} + T_{2,2} + T_{3,3} + T_{3,1})$

*   **j=3 (y=0.75):**
    *   $T_{1,3} = \frac{1}{4} (T_{2,3} + \mathbf{0} + T_{1,4} + T_{1,2})$
    *   $T_{2,3} = \frac{1}{4} (T_{3,3} + T_{1,3} + T_{2,4} + T_{2,2})$
    *   $T_{3,3} = \frac{1}{4} (\mathbf{0} + T_{2,3} + T_{3,4} + T_{3,2})$

Substituting the top boundary values ($T_{i,4}=0$):

*   **j=3 (y=0.75):**
    *   $T_{1,3} = \frac{1}{4} (T_{2,3} + \mathbf{0} + \mathbf{0} + T_{1,2})$
    *   $T_{2,3} = \frac{1}{4} (T_{3,3} + T_{1,3} + \mathbf{0} + T_{2,2})$
    *   $T_{3,3} = \frac{1}{4} (\mathbf{0} + T_{2,3} + \mathbf{0} + T_{3,2})$

This gives us 9 linear equations for 9 unknowns. We can solve this system using Jacobi, Gauss-Seidel, or SOR.

**Initial Guess:**
Let $T_{i,j}^{(0)} = 0$ for all interior points $i,j \in \{1,2,3\}$.

**Applying Jacobi Iteration (first few steps):**

Iteration 1 ($k=0$ to $k=1$):
$T_{1,1}^{(1)} = \frac{1}{4} (0 + 0 + 0 + 100) = 25$
$T_{2,1}^{(1)} = \frac{1}{4} (0 + 0 + 0 + 100) = 25$
$T_{3,1}^{(1)} = \frac{1}{4} (0 + 0 + 0 + 100) = 25$
$T_{1,2}^{(1)} = \frac{1}{4} (0 + 0 + 0 + 0) = 0$
$T_{2,2}^{(1)} = \frac{1}{4} (0 + 0 + 0 + 0) = 0$
$T_{3,2}^{(1)} = \frac{1}{4} (0 + 0 + 0 + 0) = 0$
$T_{1,3}^{(1)} = \frac{1}{4} (0 + 0 + 0 + 0) = 0$
$T_{2,3}^{(1)} = \frac{1}{4} (0 + 0 + 0 + 0) = 0$
$T_{3,3}^{(1)} = \frac{1}{4} (0 + 0 + 0 + 0) = 0$

Iteration 2 ($k=1$ to $k=2$):
$T_{1,1}^{(2)} = \frac{1}{4} (T_{2,1}^{(1)} + T_{0,1} + T_{1,2}^{(1)} + T_{1,0}) = \frac{1}{4} (25 + 0 + 0 + 100) = 31.25$
$T_{2,1}^{(2)} = \frac{1}{4} (T_{3,1}^{(1)} + T_{1,1}^{(1)} + T_{2,2}^{(1)} + T_{2,0}) = \frac{1}{4} (25 + 25 + 0 + 100) = 37.5$
$T_{3,1}^{(2)} = \frac{1}{4} (T_{4,1} + T_{2,1}^{(1)} + T_{3,2}^{(1)} + T_{3,0}) = \frac{1}{4} (0 + 25 + 0 + 100) = 31.25$
And so on...

The process continues until the differences between successive iterations are small. For this problem, the expected solution is a linear profile in the y-direction with no variation in x: $T(x,y) = 100(1 - y)$.
Let's check this analytical solution against our grid points:
$T(0.25, 0.25) = 100(1 - 0.25) = 75$
$T(0.5, 0.25) = 100(1 - 0.25) = 75$
$T(0.75, 0.25) = 100(1 - 0.25) = 75$
$T(0.25, 0.5) = 100(1 - 0.5) = 50$
$T(0.5, 0.5) = 100(1 - 0.5) = 50$
$T(0.75, 0.5) = 100(1 - 0.5) = 50$
$T(0.25, 0.75) = 100(1 - 0.75) = 25$
$T(0.5, 0.75) = 100(1 - 0.75) = 25$
$T(0.75, 0.75) = 100(1 - 0.75) = 25$

Our iterative method should converge to these values.

---

### 6. Practice Questions and Exercises

**Question 1:**
Derive the finite difference approximation for the second derivative $\frac{\partial^2 u}{\partial x^2}$ at a point $x_i$ using Taylor series expansions. State the order of accuracy.

**Question 2:**
Write down the finite difference equation for Laplace's equation $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$ on a uniform grid with spacing $h$ for an interior point $(i,j)$.

**Question 3:**
Consider a 2D domain discretized into a $4 \times 4$ grid (meaning 4 points in x and 4 in y, including boundaries). The interior points are indexed (1,1), (1,2), (2,1), (2,2).
Write down the finite difference equations for all interior points for Laplace's equation.

**Question 4:**
Explain the difference between the Jacobi and Gauss-Seidel iterative methods for solving systems of linear equations arising from PDE discretizations. Which one generally converges faster and why?

**Question 5:**
For the following Poisson's equation:
$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 2$
with $\Delta x = \Delta y = h = 0.5$ and Dirichlet boundary conditions:
$u(x,0) = 0$, $u(x,1) = 0$, $u(0,y) = 0$, $u(1,y) = 0$.
Write down the finite difference equation for the single interior point $(0.5, 0.5)$ using the five-point stencil. Calculate the value of $u$ at this interior point after the first iteration of the Jacobi method, starting with an initial guess of $u^{(0)}_{0.5,0.5} = 0$.

---

### Answers to Practice Questions

**Answer 1:**
Using Taylor series expansion:
$u(x_i + \Delta x) = u(x_i) + (\Delta x) \frac{\partial u}{\partial x}\bigg|_{x_i} + \frac{(\Delta x)^2}{2} \frac{\partial^2 u}{\partial x^2}\bigg|_{x_i} + \frac{(\Delta x)^3}{6} \frac{\partial^3 u}{\partial x^3}\bigg|_{x_i} + \dots$
$u(x_i - \Delta x) = u(x_i) - (\Delta x) \frac{\partial u}{\partial x}\bigg|_{x_i} + \frac{(\Delta x)^2}{2} \frac{\partial^2 u}{\partial x^2}\bigg|_{x_i} - \frac{(\Delta x)^3}{6} \frac{\partial^3 u}{\partial x^3}\bigg|_{x_i} + \dots$
Adding these two equations:
$u(x_i + \Delta x) + u(x_i - \Delta x) = 2u(x_i) + (\Delta x)^2 \frac{\partial^2 u}{\partial x^2}\bigg|_{x_i} + O((\Delta x)^3)$
Rearranging:
$\frac{\partial^2 u}{\partial x^2}\bigg|_{x_i} = \frac{u(x_i + \Delta x) - 2u(x_i) + u(x_i - \Delta x)}{(\Delta x)^2} + O((\Delta x)^2)$
The finite difference approximation is $\frac{u_{i+1} - 2u_i + u_{i-1}}{(\Delta x)^2}$, which has an order of accuracy of $O((\Delta x)^2)$.

**Answer 2:**
For Laplace's equation $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$ on a uniform grid with spacing $h$:
The finite difference equation for an interior point $(i,j)$ is:
$\frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{h^2} + \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{h^2} = 0$
This simplifies to the five-point stencil:
$u_{i,j} = \frac{1}{4} (u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1})$

**Answer 3:**
Let $h = \Delta x = \Delta y$.
The finite difference equation for Laplace's equation is $u_{i,j} = \frac{1}{4} (u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1})$.

For a $4 \times 4$ grid, the indices $i, j$ range from 0 to 3.
The interior points are $(1,1), (1,2), (2,1), (2,2)$.

The equations are:
*   For $(1,1)$: $u_{1,1} = \frac{1}{4} (u_{2,1} + u_{0,1} + u_{1,2} + u_{1,0})$
*   For $(1,2)$: $u_{1,2} = \frac{1}{4} (u_{2,2} + u_{0,2} + u_{1,3} + u_{1,1})$
*   For $(2,1)$: $u_{2,1} = \frac{1}{4} (u_{3,1} + u_{1,1} + u_{2,2} + u_{2,0})$
*   For $(2,2)$: $u_{2,2} = \frac{1}{4} (u_{3,2} + u_{1,2} + u_{2,3} + u_{2,1})$

Note that $u_{0,j}$, $u_{3,j}$, $u_{i,0}$, $u_{i,3}$ are boundary points whose values are known from boundary conditions.

**Answer 4:**
*   **Jacobi Iteration:** Updates each unknown using values from the *previous* iteration. All new values for an iteration are computed simultaneously before updating the solution vector.
*   **Gauss-Seidel Iteration:** Updates each unknown using the *most recently computed* values. As soon as a new value is calculated, it is used in subsequent calculations within the same iteration.

Gauss-Seidel generally converges faster than Jacobi because it incorporates updated information more quickly into the calculation.

**Answer 5:**
The Poisson equation is $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 2$.
With $\Delta x = \Delta y = h = 0.5$, the discretized equation for an interior point $(i,j)$ becomes:
$u_{i,j} = \frac{1}{4} (u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - h^2 f(x_i, y_j))$
$u_{i,j} = \frac{1}{4} (u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - (0.5)^2 \cdot 2)$
$u_{i,j} = \frac{1}{4} (u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - 0.25 \cdot 2)$
$u_{i,j} = \frac{1}{4} (u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - 0.5)$

For the single interior point at $(0.5, 0.5)$, this is $u_{0.5,0.5}$. The neighbors are boundary points.
$u_{0.5,0.5} = \frac{1}{4} (u_{1,0.5} + u_{-0.5,0.5} + u_{0.5,1} + u_{0.5,0} - 0.5)$
Substituting the boundary values:
$u_{1,0.5} = u(1, 0.5) = 0$ (Right boundary)
$u_{-0.5,0.5} = u(0, 0.5) = 0$ (Left boundary)
$u_{0.5,1} = u(0.5, 1) = 0$ (Top boundary)
$u_{0.5,0} = u(0.5, 0) = 0$ (Bottom boundary)

So, the finite difference equation for $u_{0.5,0.5}$ is:
$u_{0.5,0.5} = \frac{1}{4} (0 + 0 + 0 + 0 - 0.5) = \frac{-0.5}{4} = -0.125$

**Jacobi Iteration First Step:**
Initial guess: $u^{(0)}_{0.5,0.5} = 0$.
$u^{(0.5,0.5) (1)} = \frac{1}{4} (u^{(0)}_{1,0.5} + u^{(0)}_{-0.5,0.5} + u^{(0)}_{0.5,1} + u^{(0)}_{0.5,0} - 0.5)$
Since the neighbors are boundary points, their values are fixed and not part of the iteration for $u^{(0.5,0.5)}$.
$u^{(0.5,0.5) (1)} = \frac{1}{4} (0 + 0 + 0 + 0 - 0.5) = -0.125$.
So, after the first iteration (and it's the only interior point), the solution is $u = -0.125$.

---

### 7. Important Points to Remember

*   **Elliptic PDEs:** Describe steady-state phenomena and require boundary conditions on the entire domain.
*   **Finite Difference Method:** Approximates derivatives using values at discrete grid points.
*   **Central Differences:** Generally preferred for accuracy ($O(h^2)$) for second derivatives.
*   **Five-Point Stencil:** The standard discretization for Laplace's equation, relating an interior point to its four neighbors.
*   **Neumann BCs:** Require special handling (ghost points or one-sided differences) at the boundary.
*   **Iterative Methods:** Essential for solving large systems of linear equations from PDE discretizations. Jacobi, Gauss-Seidel, and SOR are common examples.
*   **Gauss-Seidel vs. Jacobi:** Gauss-Seidel converges faster by using updated values within an iteration.
*   **SOR:** Accelerates Gauss-Seidel using a relaxation parameter $\omega$.
*   **Convergence:** Monitored by comparing successive iterates until the difference is below a tolerance.

---
