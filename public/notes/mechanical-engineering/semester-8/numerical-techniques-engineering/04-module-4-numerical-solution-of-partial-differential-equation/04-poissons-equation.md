---
title: "Poisson’s equation"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 4: Numerical solution of partial differential equation"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646c4"
status: "completed"
scrapedAt: "2026-05-20T18:23:25.327Z"
---
## NUMERICAL TECHNIQUES ENGINEERING - Module 4: Numerical Solution of Partial Differential Equations

### Topic: Poisson's Equation

---

**Module Overview:**
This module focuses on numerical techniques for solving Partial Differential Equations (PDEs). We will explore methods for approximating solutions to PDEs that arise in various engineering disciplines, such as heat transfer, fluid mechanics, and structural analysis.

**Course Outcomes Addressed in this Topic:**
*   **CO4:** Execute numerical procedures to solve ordinary and partial differential equations (Knowledge Level: K3). This topic directly addresses the numerical solution of a significant class of PDEs.

**Learning Outcomes for this Topic:**
*   Understand the mathematical formulation of Poisson's equation.
*   Learn and apply finite difference methods to discretize Poisson's equation.
*   Solve the resulting system of linear algebraic equations using iterative methods.
*   Analyze the accuracy and convergence of the numerical solutions.

---

### 1. Introduction to Poisson's Equation

#### 1.1 What is Poisson's Equation?

Poisson's equation is a second-order linear partial differential equation. It has the general form:

$$ \nabla^2 u = f $$

where:
*   $u$ is the unknown function we want to solve for.
*   $\nabla^2$ is the Laplace operator (or Laplacian). In Cartesian coordinates $(x, y, z)$, it is defined as:
    *   2D: $\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2}$
    *   3D: $\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2}$
*   $f$ is a known source function.

**Important Points to Remember:**
*   If $f = 0$, the equation becomes Laplace's equation: $\nabla^2 u = 0$.

#### 1.2 Applications in Engineering

Poisson's equation appears in many physical phenomena:

*   **Electrostatics:** The potential $u$ in a region with a charge density $f$ satisfies Poisson's equation.
*   **Gravitation:** The gravitational potential $u$ in a region with mass density $f$ satisfies Poisson's equation.
*   **Heat Conduction:** Steady-state heat distribution $u$ in a body with internal heat generation $f$ per unit volume.
*   **Fluid Mechanics:** Stream function in viscous flow problems.
*   **Structural Mechanics:** Deflection of a uniformly loaded membrane.

#### 1.3 Boundary Conditions

To obtain a unique solution for Poisson's equation, boundary conditions must be specified on the domain $\Omega$. Common types include:

*   **Dirichlet Boundary Conditions (First Kind):** The value of $u$ is specified on the boundary.
    $$ u(x,y) = g(x,y) \quad \text{on } \partial \Omega $$
*   **Neumann Boundary Conditions (Second Kind):** The normal derivative of $u$ is specified on the boundary.
    $$ \frac{\partial u}{\partial n} = h(x,y) \quad \text{on } \partial \Omega $$
    where $\vec{n}$ is the outward normal vector.
*   **Mixed Boundary Conditions (Third Kind):** A combination of Dirichlet and Neumann conditions.

---

### 2. Numerical Solution using Finite Difference Methods

The core idea of finite difference methods is to approximate the derivatives in the PDE using algebraic differences of function values at discrete points.

#### 2.1 Discretization of the Domain

We consider a rectangular domain $[a, b] \times [c, d]$. We discretize this domain into a grid of points $(x_i, y_j)$ where:
*   $x_i = a + i \Delta x$, for $i = 0, 1, \dots, N_x$
*   $y_j = c + j \Delta y$, for $j = 0, 1, \dots, N_y$
Here, $\Delta x = (b-a)/N_x$ and $\Delta y = (d-c)/N_y$ are the grid spacings in the $x$ and $y$ directions, respectively.
The unknown function $u$ is approximated by its values at these grid points, denoted by $u_{i,j} = u(x_i, y_j)$.

#### 2.2 Finite Difference Approximations

We use Taylor series expansions to derive finite difference approximations for second derivatives. For a function $u(x)$:

*   **Second Partial Derivative in x:**
    $$ \frac{\partial^2 u}{\partial x^2} \approx \frac{u(x+\Delta x) - 2u(x) + u(x-\Delta x)}{(\Delta x)^2} $$
    At grid point $(x_i, y_j)$, this becomes:
    $$ \frac{\partial^2 u}{\partial x^2} \bigg|_{i,j} \approx \frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{(\Delta x)^2} $$
    This is a **central difference** approximation and has an error of $O((\Delta x)^2)$.

*   **Second Partial Derivative in y:**
    Similarly, at grid point $(x_i, y_j)$:
    $$ \frac{\partial^2 u}{\partial y^2} \bigg|_{i,j} \approx \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{(\Delta y)^2} $$
    This is also a central difference approximation with an error of $O((\Delta y)^2)$.

#### 2.3 Discretization of Poisson's Equation

Consider Poisson's equation in 2D:
$$ \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = f(x,y) $$
Substituting the finite difference approximations at an interior grid point $(x_i, y_j)$:

$$ \frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{(\Delta x)^2} + \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{(\Delta y)^2} = f_{i,j} $$

where $f_{i,j} = f(x_i, y_j)$.

Let's assume for simplicity that the grid is uniform, i.e., $\Delta x = \Delta y = h$. The equation becomes:

$$ \frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{h^2} + \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{h^2} = f_{i,j} $$

Multiplying by $h^2$:
$$ (u_{i+1,j} + u_{i-1,j}) - 2u_{i,j} + (u_{i,j+1} + u_{i,j-1}) - 2u_{i,j} = h^2 f_{i,j} $$

Rearranging terms to solve for $u_{i,j}$:
$$ 4u_{i,j} - u_{i-1,j} - u_{i+1,j} - u_{i,j-1} - u_{i,j+1} = -h^2 f_{i,j} $$

This is the **five-point stencil** for Poisson's equation. It expresses the value of $u$ at an interior point as a weighted average of its neighbors plus a source term.

#### 2.4 Incorporating Boundary Conditions

For Dirichlet boundary conditions ($u = g(x,y)$ on $\partial \Omega$), the values of $u_{i,j}$ on the boundary are directly assigned from $g(x_i, y_j)$. These known values are then used in the discretized equations for the interior points.

**Example (Chapra & Canale, Chapter 13):**
Consider Poisson's equation $\nabla^2 u = -10$ in a square domain $[0,1] \times [0,1]$ with boundary conditions $u(x,0) = 0$, $u(x,1) = 0$, $u(0,y) = 0$, and $u(1,y) = 0$.
Let's discretize with $N_x = 2$ and $N_y = 2$, meaning $h = 1/2$. The grid points are:
$(0,0), (0.5,0), (1,0)$
$(0,0.5), (0.5,0.5), (1,0.5)$
$(0,1), (0.5,1), (1,1)$

The interior points are $(0.5, 0.5)$. There is only one interior point.
The discretized equation at $(x_1, y_1) = (0.5, 0.5)$ is:
$$ 4u_{1,1} - u_{0,1} - u_{2,1} - u_{1,0} - u_{1,2} = -h^2 f_{1,1} $$

From the boundary conditions:
*   $u_{0,1} = u(0, 0.5) = 0$
*   $u_{2,1} = u(1, 0.5) = 0$
*   $u_{1,0} = u(0.5, 0) = 0$
*   $u_{1,2} = u(0.5, 1) = 0$

The source term is $f(x,y) = -10$, so $f_{1,1} = -10$.
The equation becomes:
$$ 4u_{1,1} - 0 - 0 - 0 - 0 = -(1/2)^2 (-10) $$
$$ 4u_{1,1} = (1/4)(10) = 2.5 $$
$$ u_{1,1} = \frac{2.5}{4} = 0.625 $$

If we had a finer grid (e.g., $N_x = 4, N_y = 4$, $h = 1/4$), we would have multiple interior points and a system of linear equations to solve.

---

### 3. Solving the System of Linear Equations

The discretization process results in a system of linear algebraic equations of the form $\mathbf{A}\mathbf{u} = \mathbf{b}$, where $\mathbf{u}$ is a vector of the unknown $u_{i,j}$ values at interior grid points.

#### 3.1 System Characteristics

*   **Sparse:** Most entries in $\mathbf{A}$ are zero (due to the stencil involving only neighboring points).
*   **Large:** The number of unknowns increases with the square of the grid resolution ($N_x \times N_y$).
*   **Banded:** Non-zero elements are clustered around the main diagonal.

#### 3.2 Solution Methods

Direct methods like Gaussian elimination become computationally expensive for large systems. Iterative methods are generally preferred.

##### 3.2.1 Jacobi Iteration

The discretized equation for $u_{i,j}$ is:
$$ 4u_{i,j} = u_{i-1,j} + u_{i+1,j} + u_{i,j-1} + u_{i,j+1} - h^2 f_{i,j} $$

The Jacobi method updates each $u_{i,j}^{(k+1)}$ using the values from the previous iteration $k$:
$$ u_{i,j}^{(k+1)} = \frac{1}{4} \left( u_{i-1,j}^{(k)} + u_{i+1,j}^{(k)} + u_{i,j-1}^{(k)} + u_{i,j+1}^{(k)} - h^2 f_{i,j} \right) $$
This requires two arrays to store the current and previous iteration values.

##### 3.2.2 Gauss-Seidel Iteration

The Gauss-Seidel method improves convergence by using the most recently computed values within the same iteration:
$$ u_{i,j}^{(k+1)} = \frac{1}{4} \left( u_{i-1,j}^{(k+1)} + u_{i+1,j}^{(k)} + u_{i,j-1}^{(k+1)} + u_{i,j+1}^{(k)} - h^2 f_{i,j} \right) $$
This can be implemented using a single array, updating values as they are computed. It generally converges faster than Jacobi.

**Algorithm for Gauss-Seidel (for a 2D grid):**
1.  Initialize all $u_{i,j}$ values (e.g., to 0 or using boundary conditions).
2.  Iterate until convergence:
    For each interior grid point $(i,j)$:
    Calculate the new value:
    $$ u_{i,j}^{\text{new}} = \frac{1}{4} \left( u_{i-1,j}^{\text{new}} + u_{i+1,j}^{\text{old}} + u_{i,j-1}^{\text{new}} + u_{i,j+1}^{\text{old}} - h^2 f_{i,j} \right) $$
    Update $u_{i,j} = u_{i,j}^{\text{new}}$.
3.  Check for convergence (e.g., using a tolerance on the maximum change between iterations).

**Example (Gupta, Chapter 12, Numerical Solution of PDE):**
Consider solving $\nabla^2 u = -10$ on a square domain $[0,1] \times [0,1]$ with Dirichlet boundary conditions $u=0$ on all boundaries, using a $3 \times 3$ grid ($h=0.5$).
The interior grid points are $(0.5, 0.5)$. We already solved this analytically above.

Let's consider a $4 \times 4$ grid ($h=1/3$).
The interior points are $(1/3, 1/3)$, $(2/3, 1/3)$, $(1/3, 2/3)$, $(2/3, 2/3)$.
Let $u_{i,j}$ represent the value at $(i \cdot h, j \cdot h)$. The interior points are $u_{1,1}, u_{2,1}, u_{1,2}, u_{2,2}$.
The discretized equation is $4u_{i,j} = u_{i-1,j} + u_{i+1,j} + u_{i,j-1} + u_{i,j+1} - h^2 (-10)$, where $h = 1/3$ and $h^2 = 1/9$.
$4u_{i,j} = u_{i-1,j} + u_{i+1,j} + u_{i,j-1} + u_{i,j+1} + 10/9$.

**Initial guess:** $u_{i,j}^{(0)} = 0$ for all interior points.

**Iteration 1 (Gauss-Seidel):**
$u_{1,1}^{(1)} = \frac{1}{4} (u_{0,1}^{(1)} + u_{2,1}^{(0)} + u_{1,0}^{(1)} + u_{1,2}^{(0)} + 10/9)$
Since boundary points are 0: $u_{0,1}=0, u_{2,1}=0, u_{1,0}=0, u_{1,2}=0$.
$u_{1,1}^{(1)} = \frac{1}{4} (0 + 0 + 0 + 0 + 10/9) = \frac{10}{36} = \frac{5}{18} \approx 0.2778$

$u_{2,1}^{(1)} = \frac{1}{4} (u_{1,1}^{(1)} + u_{3,1}^{(1)} + u_{2,0}^{(1)} + u_{2,2}^{(0)} + 10/9)$
$u_{3,1}=0$ (boundary), $u_{2,0}=0$ (boundary).
$u_{2,1}^{(1)} = \frac{1}{4} (5/18 + 0 + 0 + 0 + 10/9) = \frac{1}{4} (\frac{5}{18} + \frac{20}{18}) = \frac{1}{4} \frac{25}{18} = \frac{25}{72} \approx 0.3472$

$u_{1,2}^{(1)} = \frac{1}{4} (u_{0,2}^{(1)} + u_{2,2}^{(0)} + u_{1,1}^{(1)} + u_{1,3}^{(1)} + 10/9)$
$u_{0,2}=0$ (boundary), $u_{2,2}^{(0)}=0$, $u_{1,1}^{(1)}=5/18$, $u_{1,3}=0$ (boundary).
$u_{1,2}^{(1)} = \frac{1}{4} (0 + 0 + 5/18 + 0 + 10/9) = \frac{1}{4} (\frac{5}{18} + \frac{20}{18}) = \frac{25}{72} \approx 0.3472$

$u_{2,2}^{(1)} = \frac{1}{4} (u_{1,2}^{(1)} + u_{3,2}^{(1)} + u_{2,1}^{(1)} + u_{2,3}^{(1)} + 10/9)$
$u_{1,2}^{(1)}=25/72$, $u_{3,2}=0$ (boundary), $u_{2,1}^{(1)}=25/72$, $u_{2,3}=0$ (boundary).
$u_{2,2}^{(1)} = \frac{1}{4} (25/72 + 0 + 25/72 + 0 + 10/9) = \frac{1}{4} (\frac{50}{72} + \frac{80}{72}) = \frac{1}{4} \frac{130}{72} = \frac{130}{288} = \frac{65}{144} \approx 0.4514$

Continue iterating until convergence. The symmetry of the problem suggests $u_{1,1}=u_{2,1}=u_{1,2}$ and $u_{2,2}$ should be the highest.

##### 3.2.3 SOR (Successive Over-Relaxation)

SOR is an acceleration technique for Gauss-Seidel. It introduces a relaxation parameter $\omega$ ($1 < \omega < 2$ for acceleration).

The update rule is:
$$ u_{i,j}^{(k+1)} = (1-\omega) u_{i,j}^{(k)} + \omega \left[ \frac{1}{4} \left( u_{i-1,j}^{(k+1)} + u_{i+1,j}^{(k)} + u_{i,j-1}^{(k+1)} + u_{i,j+1}^{(k)} - h^2 f_{i,j} \right) \right] $$
The optimal $\omega$ depends on the problem and grid size. It can significantly speed up convergence.

#### 3.3 Convergence Criteria

Iterative methods continue until the solution stabilizes. Common convergence criteria:
*   Maximum absolute change: $\max_{i,j} |u_{i,j}^{(k+1)} - u_{i,j}^{(k)}| < \epsilon$
*   Maximum relative change: $\max_{i,j} \left| \frac{u_{i,j}^{(k+1)} - u_{i,j}^{(k)}}{u_{i,j}^{(k+1)}} \right| < \epsilon$ (handle $u_{i,j}^{(k+1)}=0$ case).

---

### 4. Accuracy and Error Analysis

The accuracy of the numerical solution depends on:

*   **Grid Size (h):** Smaller $h$ leads to a more accurate approximation of the derivatives. The error in the five-point stencil is $O(h^2)$.
*   **Boundary Condition Approximation:** Special care is needed for Neumann boundary conditions.
*   **Iterative Method Convergence:** The solution should be iterated until the convergence criteria are met.

#### 4.1 Handling Neumann Boundary Conditions

For Neumann boundary conditions like $\frac{\partial u}{\partial x} = g$ at $x=a$ (left boundary), we approximate the derivative at the boundary grid points.
Using a forward difference at $(x_0, y_j) = (a, y_j)$:
$$ \frac{\partial u}{\partial x} \bigg|_{0,j} \approx \frac{u_{1,j} - u_{0,j}}{\Delta x} $$
So, $\frac{u_{1,j} - u_{0,j}}{\Delta x} = g_j$.
This gives a relation between the boundary value $u_{0,j}$ and the first interior point $u_{1,j}$:
$$ u_{0,j} = u_{1,j} - \Delta x g_j $$
This equation can be used to eliminate boundary variables or incorporated into the system.

**Alternative (Ghost Points):** Introduce "ghost points" outside the domain. For the left boundary $x=a$ (where $i=0$), we can use a central difference for the second derivative involving a ghost point $u_{-1,j}$:
$$ \frac{\partial^2 u}{\partial x^2} \bigg|_{0,j} \approx \frac{u_{1,j} - 2u_{0,j} + u_{-1,j}}{(\Delta x)^2} $$
From the Neumann condition $\frac{\partial u}{\partial x} \bigg|_{0,j} = g_j \approx \frac{u_{1,j} - u_{-1,j}}{2\Delta x}$, we get $u_{-1,j} = u_{1,j} - 2\Delta x g_j$.
Substitute this into the second derivative approximation:
$$ \frac{\partial^2 u}{\partial x^2} \bigg|_{0,j} \approx \frac{u_{1,j} - 2u_{0,j} + (u_{1,j} - 2\Delta x g_j)}{(\Delta x)^2} = \frac{2u_{1,j} - 2u_{0,j} - 2\Delta x g_j}{(\Delta x)^2} $$
This approach can be more complex to implement but is common.

#### 4.2 Higher-Order Schemes

While the five-point stencil is $O(h^2)$, higher-order approximations for derivatives exist, leading to more accurate overall schemes. For example, using a nine-point stencil can achieve $O(h^4)$ accuracy. However, these require more complex formulas and lead to larger, denser systems.

**Reference (Jain, Iyengar, Jain):** Chapter 6 discusses various finite difference approximations for partial derivatives and their error terms. For Poisson's equation, the five-point formula is standard for introductory purposes.

---

### 5. Practical Considerations and Software

*   **Programming Languages:** Python (with NumPy and SciPy), MATLAB, Fortran are commonly used for implementing these methods.
*   **Libraries:** SciPy's `linalg` module can solve dense linear systems, but for sparse systems, specialized iterative solvers are available (e.g., from PETSc, Trilinos).
*   **Mesh Generation:** For complex geometries, creating the grid becomes a significant challenge. Finite Element Methods (FEM) are more suited for irregular domains.

---

### 6. Practice Questions

**Question 1 (Conceptual):**
What type of PDE is Poisson's equation? What happens to it if the source term $f$ is zero?

**Question 2 (Discretization):**
Write down the discretized form of Poisson's equation $\nabla^2 u = f$ using the five-point finite difference stencil for a uniform grid with spacing $h$.

**Question 3 (Boundary Conditions):**
Consider Poisson's equation $\nabla^2 u = 2$ on a square domain $[0,1] \times [0,1]$. The boundary conditions are $u(x,0) = x$, $u(x,1) = x+1$, $u(0,y) = y$, $u(1,y) = y+1$.
If you discretize this domain with $h=1/2$, what are the values of $u$ at the grid points?

**Question 4 (Iterative Method):**
For the problem in Question 3, write out the Gauss-Seidel update formula for the single interior point. If you start with $u_{interior} = 0$, perform one iteration.

**Question 5 (Neumann BC):**
Consider the 1D Poisson's equation: $\frac{d^2 u}{dx^2} = -2$ for $x \in [0, 1]$.
Boundary conditions are $u(0) = 0$ and $\frac{du}{dx}(1) = 0$.
Discretize using $N=2$ intervals ($\Delta x = 0.5$). The grid points are $x_0=0, x_1=0.5, x_2=1$.
The discretized equation at $x_1$ is:
$\frac{u_2 - 2u_1 + u_0}{(\Delta x)^2} = -2$
$\frac{u_2 - 2u_1 + 0}{(0.5)^2} = -2 \implies 4u_2 - 8u_1 = -2$

Use the Neumann boundary condition at $x_2=1$ to get another equation.
$\frac{du}{dx}(1) \approx \frac{u_2 - u_1}{\Delta x} = 0 \implies u_2 - u_1 = 0 \implies u_2 = u_1$.
Solve the system for $u_1$ and $u_2$.

---

### 7. Answers to Practice Questions

**Answer 1:**
Poisson's equation is a second-order linear partial differential equation. If the source term $f$ is zero, it reduces to Laplace's equation: $\nabla^2 u = 0$.

**Answer 2:**
The discretized form of $\nabla^2 u = f$ on a uniform grid with spacing $h$ is:
$$ \frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{h^2} + \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{h^2} = f_{i,j} $$
Rearranging to solve for $u_{i,j}$:
$$ u_{i,j} = \frac{1}{4} \left( u_{i-1,j} + u_{i+1,j} + u_{i,j-1} + u_{i,j+1} - h^2 f_{i,j} \right) $$

**Answer 3:**
Domain: $[0,1] \times [0,1]$, $h = 1/2$.
Grid points: $(0,0), (0.5,0), (1,0), (0,0.5), (0.5,0.5), (1,0.5), (0,1), (0.5,1), (1,1)$.
The only interior point is $(0.5, 0.5)$, which we denote as $(x_1, y_1)$.
Boundary conditions:
*   $u(x,0) = x \implies u_{0,0}=0, u_{1,0}=0.5, u_{2,0}=1$
*   $u(x,1) = x+1 \implies u_{0,2}=1, u_{1,2}=1.5, u_{2,2}=2$
*   $u(0,y) = y \implies u_{0,0}=0, u_{0,1}=0.5, u_{0,2}=1$
*   $u(1,y) = y+1 \implies u_{2,0}=1, u_{2,1}=1.5, u_{2,2}=2$

The interior point is $u_{1,1} = u(0.5, 0.5)$.
The discretized equation at $(x_1, y_1)$ is:
$$ 4u_{1,1} - u_{0,1} - u_{2,1} - u_{1,0} - u_{1,2} = -h^2 f_{1,1} $$
Source term $f(x,y) = 2$, so $f_{1,1} = 2$. $h^2 = (1/2)^2 = 1/4$.
$$ 4u_{1,1} - u_{0,1} - u_{2,1} - u_{1,0} - u_{1,2} = -(1/4)(2) = -0.5 $$
Substitute boundary values:
$u_{0,1} = u(0, 0.5) = 0.5$
$u_{2,1} = u(1, 0.5) = 0.5 + 1 = 1.5$
$u_{1,0} = u(0.5, 0) = 0.5$
$u_{1,2} = u(0.5, 1) = 0.5 + 1 = 1.5$

$$ 4u_{1,1} - 0.5 - 1.5 - 0.5 - 1.5 = -0.5 $$
$$ 4u_{1,1} - 4.0 = -0.5 $$
$$ 4u_{1,1} = 3.5 $$
$$ u_{1,1} = \frac{3.5}{4} = 0.875 $$

So, $u(0.5, 0.5) = 0.875$.

**Answer 4:**
For the problem in Question 3, the Gauss-Seidel update for the single interior point $u_{1,1}$ is:
$$ u_{1,1}^{\text{new}} = \frac{1}{4} \left( u_{0,1} + u_{2,1} + u_{1,0} + u_{1,2} - h^2 f_{1,1} \right) $$
In this case, since there's only one interior point, the "new" and "old" values are the same for all neighbours that are also interior points. Here, all neighbours are boundary points.
$u_{1,1}^{\text{new}} = \frac{1}{4} \left( 0.5 + 1.5 + 0.5 + 1.5 - (1/4)(2) \right)$
$u_{1,1}^{\text{new}} = \frac{1}{4} \left( 4.0 - 0.5 \right) = \frac{3.5}{4} = 0.875$
Starting with $u_{1,1}=0$, one iteration yields $u_{1,1}=0.875$. This is the exact solution in this case because the system is linear and we have only one unknown.

**Answer 5:**
System:
1.  $4u_2 - 8u_1 = -2$
2.  $u_2 = u_1$

Substitute (2) into (1):
$4u_1 - 8u_1 = -2$
$-4u_1 = -2$
$u_1 = 0.5$

Since $u_2 = u_1$, $u_2 = 0.5$.
So, $u(0.5) = 0.5$ and $u(1) = 0.5$.

Let's check the exact solution for $\frac{d^2 u}{dx^2} = -2$.
Integrating once: $\frac{du}{dx} = -2x + C_1$.
Integrating again: $u(x) = -x^2 + C_1x + C_2$.

Using boundary conditions:
$u(0) = 0 \implies -(0)^2 + C_1(0) + C_2 = 0 \implies C_2 = 0$.
So, $u(x) = -x^2 + C_1x$.

$\frac{du}{dx} = -2x + C_1$.
$\frac{du}{dx}(1) = 0 \implies -2(1) + C_1 = 0 \implies C_1 = 2$.

The exact solution is $u(x) = -x^2 + 2x$.
At $x=0.5$: $u(0.5) = -(0.5)^2 + 2(0.5) = -0.25 + 1 = 0.75$.
At $x=1$: $u(1) = -(1)^2 + 2(1) = -1 + 2 = 1$.

There seems to be a discrepancy in the Neumann condition approximation or how the system was set up. Let's re-evaluate the Neumann condition.

**Revisiting Question 5:**
The central difference for the derivative at $x_2=1$ (using ghost point $x_3$):
$\frac{du}{dx}(1) \approx \frac{u_3 - u_1}{2 \Delta x} = 0 \implies u_3 = u_1$.
The discrete equation at $x_2=1$: $\frac{\partial^2 u}{\partial x^2}(1) \approx \frac{u_3 - 2u_2 + u_1}{(\Delta x)^2} = -2$.
Substitute $u_3 = u_1$: $\frac{u_1 - 2u_2 + u_1}{(\Delta x)^2} = -2 \implies \frac{2u_1 - 2u_2}{(0.5)^2} = -2$.
$\frac{2u_1 - 2u_2}{0.25} = -2 \implies 8u_1 - 8u_2 = -2$.

So the system is:
1. $4u_2 - 8u_1 = -2$ (from $x_1$)
2. $8u_1 - 8u_2 = -2$ (from $x_2$)

From (1), divide by 2: $2u_2 - 4u_1 = -1 \implies 4u_1 - 2u_2 = 1$.
From (2), divide by 2: $4u_1 - 4u_2 = -1$.

Subtracting the second new equation from the first:
$(4u_1 - 2u_2) - (4u_1 - 4u_2) = 1 - (-1)$
$2u_2 = 2 \implies u_2 = 1$.

Substitute $u_2=1$ into $4u_1 - 2u_2 = 1$:
$4u_1 - 2(1) = 1 \implies 4u_1 = 3 \implies u_1 = 0.75$.

So, the numerical solution is $u(0.5) = 0.75$ and $u(1) = 1$. This matches the exact solution. The key was correctly handling the Neumann condition.

---

This concludes the notes on Poisson's equation. Remember to practice implementing these methods and understand the trade-offs between accuracy, computational cost, and ease of implementation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
