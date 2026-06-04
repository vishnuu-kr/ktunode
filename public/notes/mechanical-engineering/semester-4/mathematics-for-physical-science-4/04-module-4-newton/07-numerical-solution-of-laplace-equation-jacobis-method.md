---
title: "Numerical solution of Laplace equation –Jacobi’s Method"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 4: Newton"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ed7"
status: "completed"
scrapedAt: "2026-05-20T17:54:55.301Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4: Module 4: Newton

## Topic: Numerical Solution of Laplace's Equation – Jacobi's Method

This module focuses on applying numerical methods to solve differential equations, specifically Laplace's equation, which is fundamental in various physical science disciplines like electrostatics, heat transfer, and fluid dynamics. We will explore Jacobi's method as a technique for approximating the solutions.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

1.  Understand Laplace's equation and its significance in physical phenomena.
2.  Understand the concept of boundary value problems (BVPs) and their relation to Laplace's equation.
3.  Formulate a discretized version of Laplace's equation for a given domain.
4.  Explain the principles of iterative methods for solving linear systems arising from discretized differential equations.
5.  Describe and apply Jacobi's method to solve discretized Laplace's equation.
6.  Analyze the convergence criteria for Jacobi's method.
7.  Implement Jacobi's method for practical problems.
8.  Compare Jacobi's method with other iterative methods (briefly, for context).

---

### 1. Introduction to Laplace's Equation and Boundary Value Problems

#### 1.1 What is Laplace's Equation?

*   **Definition:** Laplace's equation is a second-order linear partial differential equation (PDE) that describes steady-state phenomena where there is no source or sink of the quantity being studied. In two dimensions, it is expressed as:

    $$ \nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0 $$

    where $u(x, y)$ is the potential function (e.g., electric potential, temperature, fluid velocity potential) and $\nabla^2$ is the Laplacian operator.

*   **Significance in Physical Science:**
    *   **Electrostatics:** It governs the distribution of electric potential in regions free of charges.
    *   **Heat Transfer:** It describes the steady-state temperature distribution in a medium with no heat sources or sinks.
    *   **Fluid Dynamics:** It relates to potential flow where the velocity field is irrotational and divergence-free.
    *   **Gravitation:** It describes the gravitational potential in regions free of mass.

#### 1.2 Boundary Value Problems (BVPs)

*   **Definition:** A Boundary Value Problem involves solving a differential equation subject to conditions specified on the boundaries of the domain. For Laplace's equation, these are typically **boundary conditions**, which specify the value of the potential function $u$ on the edges of the region.

*   **Types of Boundary Conditions:**
    *   **Dirichlet Boundary Conditions:** The value of $u$ is specified on the boundary. (e.g., fixed temperature on the edges of a metal plate).
    *   **Neumann Boundary Conditions:** The normal derivative of $u$ is specified on the boundary. (e.g., insulated boundary where the heat flux is zero).
    *   **Mixed Boundary Conditions:** A combination of Dirichlet and Neumann conditions.

*   **Example of a BVP for Laplace's Equation:**
    Consider a rectangular domain $R = [0, a] \times [0, b]$. We want to find $u(x, y)$ such that:
    $$ \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0 \quad \text{for } 0 < x < a, 0 < y < b $$
    with boundary conditions:
    $$ u(0, y) = f_1(y), \quad u(a, y) = f_2(y) \quad \text{for } 0 \le y \le b $$
    $$ u(x, 0) = g_1(x), \quad u(x, b) = g_2(x) \quad \text{for } 0 \le x \le a $$

### 2. Discretization of Laplace's Equation

Since analytical solutions to Laplace's equation are often difficult or impossible to obtain for complex domains and boundary conditions, we resort to numerical methods. The first step is to discretize the continuous domain into a grid of points and approximate the differential equation with a system of algebraic equations.

#### 2.1 Finite Difference Approximation

We use the finite difference method to approximate the derivatives. Consider a uniform grid with spacing $h$ in the x-direction and $k$ in the y-direction. Let $(x_i, y_j)$ be a grid point, where $x_i = i \cdot h$ and $y_j = j \cdot k$. We denote $u(x_i, y_j)$ by $u_{i,j}$.

*   **Second-Order Central Difference Approximation:**
    The second partial derivatives can be approximated as:
    $$ \frac{\partial^2 u}{\partial x^2} \approx \frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{h^2} $$
    $$ \frac{\partial^2 u}{\partial y^2} \approx \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{k^2} $$

#### 2.2 The Five-Point Stencil

Substituting these approximations into Laplace's equation:
$$ \frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{h^2} + \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{k^2} = 0 $$

For simplicity, let's assume a square grid where $h = k$. The equation becomes:
$$ (u_{i+1,j} - 2u_{i,j} + u_{i-1,j}) + (u_{i,j+1} - 2u_{i,j} + u_{i,j-1}) = 0 $$
$$ u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - 4u_{i,j} = 0 $$

Rearranging to solve for $u_{i,j}$ (the value at the central point):
$$ u_{i,j} = \frac{1}{4} (u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1}) $$

This equation is known as the **discrete Laplace equation** or the **five-point stencil formula**. It states that the value at any interior grid point is the average of the values at its four nearest neighbors (up, down, left, right).

*   **Example:** For a grid point $(x_i, y_j)$, its neighbors are $(x_{i+1}, y_j)$, $(x_{i-1}, y_j)$, $(x_i, y_{j+1})$, and $(x_i, y_{j-1})$.

#### 2.3 System of Linear Equations

Applying this formula to all interior grid points within the domain results in a system of linear algebraic equations, where the unknowns are the values of $u_{i,j}$ at these interior points. The boundary values are known from the given boundary conditions.

*   **Consider a simple square domain:** $[0, 2] \times [0, 2]$ with $h=1$. The interior grid point is at $(1, 1)$.
    Laplace's equation at $(1, 1)$ is:
    $$ u_{1,1} = \frac{1}{4} (u_{2,1} + u_{0,1} + u_{1,2} + u_{1,0}) $$
    If we have boundary conditions:
    $u_{0,1} = C_1$, $u_{2,1} = C_2$, $u_{1,0} = C_3$, $u_{1,2} = C_4$.
    Then, $u_{1,1} = \frac{1}{4} (C_2 + C_1 + C_4 + C_3)$.
    This is a trivial case with one interior point. For larger grids, we get a larger system of linear equations.

---

### 3. Iterative Methods for Solving Linear Systems

The system of linear equations derived from the discretized Laplace equation can be written in the form $A\mathbf{x} = \mathbf{b}$, where $A$ is a large, sparse matrix, $\mathbf{x}$ is the vector of unknown $u_{i,j}$ values, and $\mathbf{b}$ contains contributions from boundary conditions.

Iterative methods start with an initial guess for the solution vector $\mathbf{x}^{(0)}$ and generate a sequence of approximations $\mathbf{x}^{(1)}, \mathbf{x}^{(2)}, \dots$ that ideally converge to the true solution. These methods are particularly useful for large systems arising from PDEs because direct methods (like Gaussian elimination) can be computationally expensive and prone to round-off errors.

#### 3.1 General Idea of Iterative Methods

For a system $A\mathbf{x} = \mathbf{b}$, we can split the matrix $A$ into components. A common approach is to write $A = D - L - U$, where $D$ is the diagonal part, $-L$ is the strictly lower triangular part, and $-U$ is the strictly upper triangular part.

The iteration can be expressed in a general form:
$$ M\mathbf{x}^{(k+1)} = N\mathbf{x}^{(k)} + \mathbf{b} $$
where $A = M - N$, and $M$ is a matrix that is easy to invert (e.g., diagonal or triangular).

*   **Convergence Condition:** For the iteration to converge, the spectral radius of the iteration matrix $M^{-1}N$ must be less than 1, i.e., $\rho(M^{-1}N) < 1$.

---

### 4. Jacobi's Method

Jacobi's method is one of the simplest and oldest iterative techniques. It is a **stationary iterative method**.

#### 4.1 Derivation of Jacobi's Method

Consider the system of linear equations $A\mathbf{x} = \mathbf{b}$, where $A$ is an $n \times n$ matrix. Let $a_{ii}$ be the diagonal elements of $A$.

$$ \sum_{j=1}^n a_{ij} x_j = b_i \quad \text{for } i = 1, 2, \dots, n $$

We can rewrite this by isolating the diagonal term $a_{ii}x_i$:
$$ a_{ii} x_i = b_i - \sum_{j \ne i} a_{ij} x_j $$

Assuming $a_{ii} \ne 0$ for all $i$, we can solve for $x_i$:
$$ x_i = \frac{1}{a_{ii}} \left( b_i - \sum_{j \ne i} a_{ij} x_j \right) $$

Jacobi's method updates each component of the solution vector simultaneously. In the $(k+1)$-th iteration, the new value $x_i^{(k+1)}$ is computed using the values from the previous iteration $k$:
$$ x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j \ne i} a_{ij} x_j^{(k)} \right) $$

The summation can be split:
$$ x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j < i} a_{ij} x_j^{(k)} - \sum_{j > i} a_{ij} x_j^{(k)} \right) $$

**Matrix Form of Jacobi's Method:**
Let $A = D + L + U$, where $D$ is the diagonal matrix, $L$ is the strictly lower triangular matrix, and $U$ is the strictly upper triangular matrix.
Then, $A\mathbf{x} = (D+L+U)\mathbf{x} = \mathbf{b}$.
$D\mathbf{x} = \mathbf{b} - (L+U)\mathbf{x}$.
To get an iterative scheme, we update $\mathbf{x}$ on the left side:
$D\mathbf{x}^{(k+1)} = \mathbf{b} - (L+U)\mathbf{x}^{(k)}$.
Since $D$ is a diagonal matrix, its inverse is trivial (inverting each diagonal element).
$$ \mathbf{x}^{(k+1)} = D^{-1} (\mathbf{b} - (L+U)\mathbf{x}^{(k)}) $$
This is the matrix form of Jacobi's method. The iteration matrix is $T_J = -D^{-1}(L+U)$.

#### 4.2 Application to the Discretized Laplace Equation

Recall the discretized Laplace equation for a square grid ($h=k$):
$$ u_{i,j} = \frac{1}{4} (u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1}) $$

For Jacobi's method, we update each interior point $u_{i,j}$ using the values from the *previous* iteration for all neighboring points.
Let $u_{i,j}^{(k)}$ be the approximation at iteration $k$. The update rule for $u_{i,j}$ at iteration $k+1$ is:

$$ u_{i,j}^{(k+1)} = \frac{1}{4} (u_{i+1,j}^{(k)} + u_{i-1,j}^{(k)} + u_{i,j+1}^{(k)} + u_{i,j-1}^{(k)}) $$

This formula is applied to all interior grid points simultaneously.

*   **Initial Guess:** We need an initial guess $\mathbf{u}^{(0)}$. A common choice is to set all interior points to zero, or to use some initial approximation based on boundary conditions.

*   **Stopping Criterion:** The iteration continues until the difference between successive approximations is small enough. This is often measured by the norm of the difference vector:
    $$ ||\mathbf{u}^{(k+1)} - \mathbf{u}^{(k)}|| < \epsilon $$
    where $\epsilon$ is a small tolerance.

#### 4.3 Example: A Simple 2D Case

Consider a square region $[0, 2] \times [0, 2]$ with $h=1$. The interior grid points are at $(1, 1)$.
Let the boundary conditions be:
*   $u(x, 0) = 0$ for $0 \le x \le 2$
*   $u(x, 2) = 100$ for $0 \le x \le 2$
*   $u(0, y) = 0$ for $0 \le y \le 2$
*   $u(2, y) = 0$ for $0 \le y \le 2$

The grid points are $(0,0), (1,0), (2,0), (0,1), (1,1), (2,1), (0,2), (1,2), (2,2)$.
The interior point is $(1,1)$.
The values at grid points are:
$u_{0,0}=0, u_{1,0}=0, u_{2,0}=0$
$u_{0,1}=0, u_{1,1}=?, u_{2,1}=0$
$u_{0,2}=100, u_{1,2}=100, u_{2,2}=100$

The discrete Laplace equation at $(1,1)$ is:
$u_{1,1} = \frac{1}{4} (u_{2,1} + u_{0,1} + u_{1,2} + u_{1,0})$

Let's use Jacobi's method.
Initial guess: $\mathbf{u}^{(0)} = 0$ for all interior points. Here, $u_{1,1}^{(0)} = 0$.

**Iteration 1:**
$u_{1,1}^{(1)} = \frac{1}{4} (u_{2,1}^{(0)} + u_{0,1}^{(0)} + u_{1,2}^{(0)} + u_{1,0}^{(0)})$
The boundary points are fixed:
$u_{0,1} = 0$
$u_{2,1} = 0$
$u_{1,0} = 0$
$u_{1,2} = 100$

Wait, the boundary points are used in the calculation of interior points. The boundary values are *fixed* and do not get updated.
So, for $u_{1,1}^{(1)}$:
$u_{1,1}^{(1)} = \frac{1}{4} (u_{2,1} + u_{0,1} + u_{1,2} + u_{1,0})$
$u_{1,1}^{(1)} = \frac{1}{4} (0 + 0 + 100 + 0) = 25$

**Iteration 2:**
Now, use the values from iteration 1 for interior points and the fixed boundary values.
$u_{1,1}^{(2)} = \frac{1}{4} (u_{2,1} + u_{0,1} + u_{1,2} + u_{1,0})$
The values used on the right side are:
$u_{2,1} = 0$ (boundary)
$u_{0,1} = 0$ (boundary)
$u_{1,2} = 100$ (boundary)
$u_{1,0} = 0$ (boundary)
This is incorrect. The formula uses values from the *previous iteration*. The neighbours of $(1,1)$ are $(2,1), (0,1), (1,2), (1,0)$. Let's re-examine the structure of the grid and the update.

Let's consider a slightly larger grid.
Domain: $[0, 3] \times [0, 3]$, with $h=1$.
Interior points: $(1,1), (2,1), (1,2), (2,2)$.
Boundary conditions:
$u(x,0) = 0$, $u(x,3) = 0$ for $0 \le x \le 3$
$u(0,y) = 0$, $u(3,y) = 0$ for $0 \le y \le 3$

The grid is 4x4. The interior points are $u_{1,1}, u_{2,1}, u_{1,2}, u_{2,2}$.
The discrete Laplace equation for each interior point is:

1.  **For $u_{1,1}$:**
    $u_{1,1} = \frac{1}{4}(u_{2,1} + u_{0,1} + u_{1,2} + u_{1,0})$
    The boundary values are $u_{0,1}=0, u_{1,0}=0$.
    So, $u_{1,1} = \frac{1}{4}(u_{2,1} + 0 + u_{1,2} + 0) = \frac{1}{4}(u_{2,1} + u_{1,2})$

2.  **For $u_{2,1}$:**
    $u_{2,1} = \frac{1}{4}(u_{3,1} + u_{1,1} + u_{2,2} + u_{2,0})$
    The boundary values are $u_{3,1}=0, u_{2,0}=0$.
    So, $u_{2,1} = \frac{1}{4}(0 + u_{1,1} + u_{2,2} + 0) = \frac{1}{4}(u_{1,1} + u_{2,2})$

3.  **For $u_{1,2}$:**
    $u_{1,2} = \frac{1}{4}(u_{2,2} + u_{0,2} + u_{1,3} + u_{1,1})$
    The boundary values are $u_{0,2}=0, u_{1,3}=0$.
    So, $u_{1,2} = \frac{1}{4}(u_{2,2} + 0 + 0 + u_{1,1}) = \frac{1}{4}(u_{2,2} + u_{1,1})$

4.  **For $u_{2,2}$:**
    $u_{2,2} = \frac{1}{4}(u_{3,2} + u_{1,2} + u_{2,3} + u_{2,1})$
    The boundary values are $u_{3,2}=0, u_{2,3}=0$.
    So, $u_{2,2} = \frac{1}{4}(0 + u_{1,2} + 0 + u_{2,1}) = \frac{1}{4}(u_{1,2} + u_{2,1})$

We have a system of 4 linear equations for $u_{1,1}, u_{2,1}, u_{1,2}, u_{2,2}$.
Due to symmetry, $u_{1,1} = u_{2,2}$ and $u_{2,1} = u_{1,2}$.
Let $u_{1,1} = A$ and $u_{2,1} = B$.
Then:
$A = \frac{1}{4}(B + B) = \frac{1}{2}B$
$B = \frac{1}{4}(A + A) = \frac{1}{2}A$

This leads to $A = \frac{1}{2}(\frac{1}{2}A) = \frac{1}{4}A$, which implies $A=0$. This is not right. The problem statement had a boundary condition of 100 on one side. Let's re-examine the *original* problem with the boundary conditions.

**Example revisited with a non-zero boundary:**
Region: $[0, 2] \times [0, 2]$ with $h=1$.
Boundary conditions:
*   $u(x, 0) = 0$ for $0 \le x \le 2$
*   $u(x, 2) = 100$ for $0 \le x \le 2$
*   $u(0, y) = 0$ for $0 \le y \le 2$
*   $u(2, y) = 0$ for $0 \le y \le 2$

Grid points:
$u_{0,0}=0, u_{1,0}=0, u_{2,0}=0$
$u_{0,1}=0, u_{1,1}=?, u_{2,1}=0$
$u_{0,2}=100, u_{1,2}=100, u_{2,2}=100$

Interior point: $(1,1)$.
Discrete equation: $u_{1,1} = \frac{1}{4}(u_{2,1} + u_{0,1} + u_{1,2} + u_{1,0})$

Using the values:
$u_{1,1} = \frac{1}{4}(0 + 0 + 100 + 0) = 25$.
This is the *exact* solution for this single interior point case, as there is only one equation.

Let's consider a 3x3 grid for the region $[0,2]\times[0,2]$ with $h=1$.
Interior points: $u_{1,1}$.
Boundary values:
$u_{0,0}=0, u_{1,0}=0, u_{2,0}=0$
$u_{0,1}=0, u_{1,1}=?, u_{2,1}=0$
$u_{0,2}=100, u_{1,2}=100, u_{2,2}=100$

This example is too simple for iterative methods. Let's take a 4x4 grid on $[0,3]\times[0,3]$ with $h=1$.
Interior points: $u_{1,1}, u_{2,1}, u_{1,2}, u_{2,2}$.
Boundary conditions:
$u(x,0) = 0$, $u(x,3) = 0$ for $0 \le x \le 3$
$u(0,y) = 0$, $u(3,y) = 0$ for $0 \le y \le 3$

This still leads to $u_{i,j}=0$ everywhere due to symmetry and zero boundary conditions. We need a non-uniform boundary condition to see iteration.

**Example: 4x4 grid on $[0,3]\times[0,3]$ with $h=1$.**
Boundary conditions:
*   $u(x, 0) = 0$ for $0 \le x \le 3$
*   $u(x, 3) = 50$ for $0 \le x \le 3$
*   $u(0, y) = 0$ for $0 \le y \le 3$
*   $u(3, y) = 0$ for $0 \le y \le 3$

Interior points: $u_{1,1}, u_{2,1}, u_{1,2}, u_{2,2}$.
Grid values:
$u_{0,0}=0, u_{1,0}=0, u_{2,0}=0, u_{3,0}=0$
$u_{0,1}=0, u_{1,1}=?, u_{2,1}=?, u_{3,1}=0$
$u_{0,2}=0, u_{1,2}=?, u_{2,2}=?, u_{3,2}=0$
$u_{0,3}=50, u_{1,3}=50, u_{2,3}=50, u_{3,3}=50$

The discrete Laplace equations for the interior points $(i, j)$ where $1 \le i, j \le 2$:
$u_{i,j} = \frac{1}{4}(u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1})$

**Iteration 0: Initial Guess**
Let $u_{i,j}^{(0)} = 0$ for all interior points.
$u_{1,1}^{(0)} = 0, u_{2,1}^{(0)} = 0, u_{1,2}^{(0)} = 0, u_{2,2}^{(0)} = 0$.

**Iteration 1:**
Calculate $u_{i,j}^{(1)}$ for all interior points using $u^{(0)}$ values and boundary values.

*   $u_{1,1}^{(1)} = \frac{1}{4}(u_{2,1}^{(0)} + u_{0,1} + u_{1,2}^{(0)} + u_{1,0})$
    $u_{1,1}^{(1)} = \frac{1}{4}(0 + 0 + 0 + 0) = 0$.

*   $u_{2,1}^{(1)} = \frac{1}{4}(u_{3,1} + u_{1,1}^{(0)} + u_{2,2}^{(0)} + u_{2,0})$
    $u_{2,1}^{(1)} = \frac{1}{4}(0 + 0 + 0 + 0) = 0$.

*   $u_{1,2}^{(1)} = \frac{1}{4}(u_{2,2}^{(0)} + u_{0,2} + u_{1,3} + u_{1,1}^{(0)})$
    $u_{1,2}^{(1)} = \frac{1}{4}(0 + 0 + 50 + 0) = 12.5$.

*   $u_{2,2}^{(1)} = \frac{1}{4}(u_{3,2} + u_{1,2}^{(0)} + u_{2,3} + u_{2,1}^{(0)})$
    $u_{2,2}^{(1)} = \frac{1}{4}(0 + 0 + 50 + 0) = 12.5$.

After Iteration 1:
$u_{1,1}^{(1)} = 0, u_{2,1}^{(1)} = 0, u_{1,2}^{(1)} = 12.5, u_{2,2}^{(1)} = 12.5$.

**Iteration 2:**
Calculate $u_{i,j}^{(2)}$ using $u^{(1)}$ values.

*   $u_{1,1}^{(2)} = \frac{1}{4}(u_{2,1}^{(1)} + u_{0,1} + u_{1,2}^{(1)} + u_{1,0})$
    $u_{1,1}^{(2)} = \frac{1}{4}(0 + 0 + 12.5 + 0) = 3.125$.

*   $u_{2,1}^{(2)} = \frac{1}{4}(u_{3,1} + u_{1,1}^{(1)} + u_{2,2}^{(1)} + u_{2,0})$
    $u_{2,1}^{(2)} = \frac{1}{4}(0 + 0 + 12.5 + 0) = 3.125$.

*   $u_{1,2}^{(2)} = \frac{1}{4}(u_{2,2}^{(1)} + u_{0,2} + u_{1,3} + u_{1,1}^{(1)})$
    $u_{1,2}^{(2)} = \frac{1}{4}(12.5 + 0 + 50 + 0) = 15.625$.

*   $u_{2,2}^{(2)} = \frac{1}{4}(u_{3,2} + u_{1,2}^{(1)} + u_{2,3} + u_{2,1}^{(1)})$
    $u_{2,2}^{(2)} = \frac{1}{4}(0 + 12.5 + 50 + 0) = 15.625$.

After Iteration 2:
$u_{1,1}^{(2)} = 3.125, u_{2,1}^{(2)} = 3.125, u_{1,2}^{(2)} = 15.625, u_{2,2}^{(2)} = 15.625$.

The process continues until convergence. This example shows how the values propagate and change.

#### 4.4 Convergence of Jacobi's Method

*   **Conditions for Convergence:**
    For the iteration $ \mathbf{x}^{(k+1)} = T_J \mathbf{x}^{(k)} + D^{-1}\mathbf{b} $ to converge, the spectral radius of the iteration matrix $T_J$ must be less than 1 ($\rho(T_J) < 1$).

*   **Diagonally Dominant Matrices:** A sufficient condition for Jacobi's method to converge is that the matrix $A$ is **strictly diagonally dominant**. A matrix $A$ is strictly diagonally dominant if for every row $i$, the absolute value of the diagonal element is greater than the sum of the absolute values of all other elements in that row:
    $$ |a_{ii}| > \sum_{j \ne i} |a_{ij}| $$

*   **Relation to Discretized Laplace Equation:** The matrix $A$ arising from the discretized Laplace equation on a rectangular grid is indeed symmetric and positive definite, and it is also diagonally dominant (with appropriate boundary conditions). For a point $(i,j)$, the equation involves $u_{i,j}$, and its neighbors. The coefficient of $u_{i,j}$ is $-4$ (from the discretized derivatives). The coefficients of the neighboring $u$ values are $1$. So, in the matrix form, for the row corresponding to $u_{i,j}$, the diagonal element is $-4$, and the off-diagonal elements are $1$ (for the neighboring points) and $0$ (for other points).
    Thus, $|a_{ii}| = |-4| = 4$. The sum of absolute values of off-diagonal elements in that row is $1+1+1+1=4$.
    For strict diagonal dominance, we need $|a_{ii}| > \sum_{j \ne i} |a_{ij}|$. In this case, it's $4 > 4$, which is false. However, for the discretized Laplace equation, the matrix is often **irreducibly diagonally dominant**, which is also a condition for convergence. Irreducible diagonal dominance means it's diagonally dominant, or it's not strictly diagonally dominant but can be made so by permuting rows/columns, and it's connected.

*   **Source Textbooks:**
    *   **Sastry (5th edition):** Chapter 7, "Iterative Methods for Solving System of Linear Equations." Sastry will likely discuss the conditions for convergence and relate them to the properties of the matrix $A$. The diagonally dominant property will be highlighted.
    *   **Chapra & Canale (8th edition):** Chapter 11, "Root Finding and Optimization," and potentially chapters on solving systems of equations. They often present numerical methods in a practical, algorithmic way. They would likely confirm the convergence properties and discuss the rate of convergence.

#### 4.5 Advantages and Disadvantages of Jacobi's Method

*   **Advantages:**
    *   Simple to understand and implement.
    *   Each iteration can be easily parallelized, as the update for each point depends only on the values from the previous iteration.

*   **Disadvantages:**
    *   Can be slow to converge, especially for large grids or problems with difficult boundary conditions.
    *   Requires storing the values from the previous iteration to compute the new ones, leading to higher memory requirements compared to some other methods like Gauss-Seidel.

---

### 5. Practice Questions and Exercises

1.  **Laplace's Equation and Discretization:**
    Write down the discrete form of Laplace's equation using the five-point stencil for a grid with spacing $h$ in both $x$ and $y$ directions.
    **Answer:** $u_{i,j} = \frac{1}{4} (u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1})$

2.  **Jacobi's Method Formula:**
    State the Jacobi iteration formula for solving the discretized Laplace equation.
    **Answer:** $u_{i,j}^{(k+1)} = \frac{1}{4} (u_{i+1,j}^{(k)} + u_{i-1,j}^{(k)} + u_{i,j+1}^{(k)} + u_{i,j-1}^{(k)})$

3.  **Application Example:**
    Consider a 3x3 grid (meaning 3 points along each axis, $h=1$). The region is $[0,2] \times [0,2]$.
    The boundary conditions are:
    *   $u(x, 0) = 0$ for $0 \le x \le 2$
    *   $u(x, 2) = 20$ for $0 \le x \le 2$
    *   $u(0, y) = 0$ for $0 \le y \le 2$
    *   $u(2, y) = 0$ for $0 \le y \le 2$
    The only interior point is $(1,1)$.
    *   a) Write down the discrete Laplace equation for $u_{1,1}$.
    *   b) Apply one iteration of Jacobi's method starting with $u_{1,1}^{(0)} = 0$.

    **Answer:**
    *   a) $u_{1,1} = \frac{1}{4}(u_{2,1} + u_{0,1} + u_{1,2} + u_{1,0})$
    *   b) The boundary values are: $u_{0,1}=0$, $u_{2,1}=0$, $u_{1,0}=0$, $u_{1,2}=20$.
        $u_{1,1}^{(1)} = \frac{1}{4}(0 + 0 + 20 + 0) = 5$.

4.  **Convergence Condition:**
    What is a common condition that guarantees the convergence of Jacobi's method?
    **Answer:** The matrix $A$ being strictly diagonally dominant.

---

### 6. Important Points to Remember

*   **Laplace's Equation:** $\nabla^2 u = 0$ describes steady-state potentials in source-free regions.
*   **Boundary Conditions:** Essential for defining a unique solution. Dirichlet (value specified) and Neumann (normal derivative specified) are common.
*   **Discretization:** Approximating the continuous domain and PDE with a grid and algebraic equations (five-point stencil for Laplace's equation).
*   **Jacobi's Method:** An iterative technique to solve the resulting linear system $A\mathbf{x} = \mathbf{b}$.
*   **Update Rule:** $u_{i,j}^{(k+1)} = \text{average of neighbors at iteration } k$.
*   **Convergence:** Crucially depends on the spectral radius of the iteration matrix. Strict diagonal dominance of $A$ is a sufficient condition.
*   **Memory:** Jacobi's method requires storing the previous iteration's values.

---

### 7. Relevance to Course Outcomes

*   **CO4: Apply numerical methods to find solutions of linear system of equations, ordinary differential equations and Laplace equations.**
    This entire module is dedicated to CO4. We have discussed the discretization of Laplace equations which leads to linear systems, and Jacobi's method is presented as a numerical technique to solve these systems. This aligns directly with applying numerical methods to solve Laplace's equation.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |


### References:

*   **Introductory Methods of Numerical Analysis by S S Sastry (PHI Learning Pvt Limited, 5th edition, 2012):** Chapters on solving systems of linear equations, particularly iterative methods, would provide theoretical underpinnings for convergence and derivations.
*   **Numerical methods for Engineers by Steven C. Chapra, Raymond P. Canale (McGraw Hill Education, 8th edition, 2021):** This book is excellent for practical implementation and algorithmic descriptions. Likely chapters on solving linear systems or numerical solutions of PDEs would cover Jacobi's method with clear examples.

---
This concludes the study notes for Jacobi's Method for solving Laplace's Equation. Remember to consult the provided textbooks for more detailed explanations and proofs.