---
title: "Liebmann’s iterative method"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 4: Numerical solution of partial differential equation"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646c5"
status: "completed"
scrapedAt: "2026-05-20T18:23:26.028Z"
---
# NUMERICAL TECHNIQUES ENGINEERING - Module 4: Numerical Solution of Partial Differential Equations

## Topic: Liebmann's Iterative Method

### 1. Introduction and Context

Partial Differential Equations (PDEs) are fundamental in describing phenomena in various engineering disciplines, including heat transfer, fluid dynamics, electromagnetism, and structural analysis. Often, analytical solutions to PDEs are difficult or impossible to obtain, necessitating the use of numerical methods. This module focuses on solving PDEs numerically, and Liebmann's method is a key iterative technique for solving elliptic PDEs, particularly the Laplace and Poisson equations.

**Learning Outcomes Addressed:**

*   Solving partial differential equations numerically (aligned with CO4).

**Key Concepts:**

*   **Partial Differential Equation (PDE):** An equation involving partial derivatives of an unknown function with respect to two or more independent variables.
*   **Elliptic PDE:** A type of PDE that describes steady-state phenomena, such as steady-state heat conduction or irrotational fluid flow. The Laplace equation ($\nabla^2 u = 0$) and Poisson equation ($\nabla^2 u = f$) are classic examples.
*   **Boundary Value Problem (BVP):** A problem where a differential equation must be satisfied on a given domain, and boundary conditions are specified on the boundary of that domain.
*   **Finite Difference Method (FDM):** A numerical method for approximating the solution of differential equations by discretizing the domain into a grid and replacing derivatives with finite differences.
*   **Iterative Method:** A method that starts with an initial guess and repeatedly refines the solution until a desired level of accuracy is achieved.
*   **Convergence:** The process by which an iterative method approaches the true solution.

**Textbook References:**

*   **Chapra & Canale (6th Edition):** Chapter 17 (Boundary Value Problems) will provide a strong foundation in discretizing PDEs and introducing iterative methods for BVPs.
*   **Gupta S.K.:** Likely covers finite difference approximations and iterative techniques for solving systems of linear equations arising from PDE discretization.
*   **Balagurusamy (2017):** Will offer explanations of numerical methods for PDEs, potentially including Liebmann's method.

### 2. The Finite Difference Approximation of Elliptic PDEs

Liebmann's method operates on the discretized form of elliptic PDEs. The core idea is to replace the continuous derivatives with finite difference approximations. For a second-order partial derivative, the central difference approximation is commonly used.

**Key Concepts:**

*   **Discretization:** Dividing the continuous domain of the PDE into a grid of discrete points (nodes).
*   **Grid Spacing:** The distance between adjacent nodes in the grid ($\Delta x$, $\Delta y$).
*   **Finite Difference Formulas:** Approximations of derivatives using the values of the function at neighboring grid points.

**Laplace Equation:** $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$

Using central difference approximations for the second derivatives at a grid point $(i, j)$:

$\frac{\partial^2 u}{\partial x^2} \approx \frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{(\Delta x)^2}$

$\frac{\partial^2 u}{\partial y^2} \approx \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{(\Delta y)^2}$

Assuming a uniform grid where $\Delta x = \Delta y = h$:

$\frac{u_{i+1,j} + u_{i-1,j} - 2u_{i,j}}{h^2} + \frac{u_{i,j+1} + u_{i,j-1} - 2u_{i,j}}{h^2} = 0$

Multiplying by $h^2$ and rearranging, we get the **five-point stencil** for the Laplace equation:

$u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - 4u_{i,j} = 0$

This can be rewritten to solve for the unknown value at the central point $u_{i,j}$:

$u_{i,j} = \frac{1}{4} (u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1})$

This equation signifies that the value of the solution at any interior grid point is the average of its four orthogonal neighbors. This is the fundamental relationship that Liebmann's method will exploit.

**Poisson Equation:** $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = f(x, y)$

The discretized form of the Poisson equation becomes:

$u_{i,j} = \frac{1}{4} (u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - h^2 f(x_i, y_j))$

where $f(x_i, y_j)$ is the value of the source term at grid point $(i, j)$.

**Textbook References:**

*   **Chapra & Canale (6th Edition):** Chapter 17.2 (Finite-Difference Equations) will detail these discretizations.
*   **Gupta S.K.:** Will explain the derivation of finite difference approximations.
*   **Balagurusamy (2017):** Chapter on numerical solution of PDEs will cover these discretizations.

### 3. Liebmann's Iterative Method Explained

Liebmann's method is a direct application of the finite difference approximation derived in the previous section. It is essentially the **Gauss-Seidel** iterative method applied to the system of linear equations that arises from discretizing the PDE.

**Key Concepts:**

*   **Initial Guess:** An initial assignment of values to all interior grid points. This can be zero or based on boundary conditions.
*   **Iteration:** Repeatedly applying the discretized equation to update the values at each interior grid point.
*   **Update Rule:** The formula used to calculate the new value at a grid point based on its neighbors.
*   **Convergence Criterion:** A condition to stop the iteration, typically when the change in the solution between successive iterations is below a predefined tolerance.

**The Process:**

1.  **Discretize the Domain:** Define a rectangular or other shaped domain and superimpose a grid of points with spacing $h$.
2.  **Apply Boundary Conditions:** Assign the given boundary values to the grid points on the boundary of the domain.
3.  **Make an Initial Guess:** Assign initial values to all interior grid points. A common initial guess is zero for all interior points.
4.  **Iterate:** For each interior grid point $(i, j)$, update its value $u_{i,j}$ using the discretized equation. The key to Liebmann's method (and Gauss-Seidel) is to use the *most recently computed values* of the neighbors. This means if you are iterating row by row, from left to right, the value $u_{i,j}$ will be updated using the potentially new values of $u_{i-1,j}$ (if available in the same iteration) and $u_{i,j-1}$, while using the old values for $u_{i+1,j}$ and $u_{i,j+1}$. However, for simplicity and clarity, the basic Liebmann method often uses the values from the *previous* iteration for all neighbors (which is the Jacobi method). The true Liebmann's method is the Gauss-Seidel application.

    **Basic Liebmann (Gauss-Seidel):**
    $u_{i,j}^{(k+1)} = \frac{1}{4} (u_{i+1,j}^{(k+1)} + u_{i-1,j}^{(k+1)} + u_{i,j+1}^{(k)} + u_{i,j-1}^{(k)})$ for the Laplace equation.
    (Note: If $u_{i+1,j}$ and $u_{i,j+1}$ are updated in the same sweep, they will be the $(k+1)$ values. For a simple row-by-row, column-by-column scan, $u_{i-1,j}$ and $u_{i,j-1}$ would be $(k+1)$ values and $u_{i+1,j}$ and $u_{i,j+1}$ would be $(k)$ values).

    More practically, the update rule for $u_{i,j}$ at iteration $k+1$ using values from iteration $k$ and possibly updated values within iteration $k+1$ is:

    $u_{i,j}^{(k+1)} = \frac{1}{4} (\text{updated } u_{i+1,j} + \text{updated } u_{i-1,j} + \text{updated } u_{i,j+1} + \text{updated } u_{i,j-1})$

    When sweeping through the grid (e.g., row by row, left to right), the most up-to-date values are used:
    $u_{i,j}^{(k+1)} = \frac{1}{4} (u_{i+1,j}^{(k)} + u_{i-1,j}^{(k+1)} + u_{i,j+1}^{(k)} + u_{i,j-1}^{(k+1)})$

5.  **Check for Convergence:** After completing an iteration over all interior points, compare the new values with the previous iteration's values. If the maximum absolute difference between corresponding points is less than a specified tolerance ($\epsilon$), stop. Otherwise, repeat step 4.

    Convergence Check: $\max_{i,j} |u_{i,j}^{(k+1)} - u_{i,j}^{(k)}| < \epsilon$

**Textbook References:**

*   **Chapra & Canale (6th Edition):** Section 17.5 (Gauss-Seidel Method) is directly relevant as Liebmann's method is an application of Gauss-Seidel to PDEs. They will likely present an example for Laplace's equation.
*   **Gupta S.K.:** Will detail the iterative solution of linear systems arising from discretized PDEs, including convergence criteria.
*   **Balagurusamy (2017):** Will likely explain the iterative process and convergence in the context of solving PDEs.

### 4. Example: Solving the Laplace Equation for a Heated Plate

Let's consider a square plate with sides of length $L$. Assume the top and bottom edges are held at 0°C, and the left and right edges are held at 100°C. We want to find the steady-state temperature distribution $u(x, y)$ within the plate. This is a classic BVP for the Laplace equation.

**Problem Setup:**

*   Domain: A square with vertices at (0,0), (L,0), (L,L), (0,L).
*   PDE: $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$
*   Boundary Conditions:
    *   $u(x, 0) = 0$ for $0 \le x \le L$ (bottom edge)
    *   $u(x, L) = 0$ for $0 \le x \le L$ (top edge)
    *   $u(0, y) = 100$ for $0 \le y \le L$ (left edge)
    *   $u(L, y) = 100$ for $0 \le y \le L$ (right edge)

**Discretization:**

Let's choose $L=1$ and a grid of $3 \times 3$ interior points. This means we will have $N=2$ subdivisions along each axis, and $h = L/N = 1/2$. The grid points are $(x_i, y_j)$ where $x_i = i \cdot h$ and $y_j = j \cdot h$, for $i, j = 0, 1, 2$.

The interior points are:
$(0.5, 0.5)$, $(0.5, 1.0)$, $(1.0, 0.5)$, $(1.0, 1.0)$ - Wait, this indexing is confusing. Let's use $i, j$ from 1 to $N-1$ for interior points.
Let $N=3$ subdivisions, $h=1/3$. Interior points $i, j = 1, 2$.
Grid points: $x_0=0, x_1=1/3, x_2=2/3, x_3=1$. $y_0=0, y_1=1/3, y_2=2/3, y_3=1$.

Interior points: $(1/3, 1/3)$, $(1/3, 2/3)$, $(2/3, 1/3)$, $(2/3, 2/3)$.
Let $u_{i,j}$ denote the temperature at $(x_i, y_j)$.

The discretized equation for interior points is:
$u_{i,j} = \frac{1}{4} (u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1})$

**Boundary Values:**

*   $u_{0,j} = 100$ for $j=0,1,2,3$ (Left edge)
*   $u_{3,j} = 100$ for $j=0,1,2,3$ (Right edge)
*   $u_{i,0} = 0$ for $i=0,1,2,3$ (Bottom edge)
*   $u_{i,3} = 0$ for $i=0,1,2,3$ (Top edge)

**Initial Guess:**

Let's set all interior points to $u_{i,j}^{(0)} = 0$ for $i,j = 1,2$.
The grid of unknowns to be solved for is: $u_{1,1}, u_{1,2}, u_{2,1}, u_{2,2}$.

**Iteration 1 (k=0):**

We update the values at the four interior points using the values from the previous iteration (which are all 0, except for boundary values that are used indirectly).

*   **Point (1,1):** Corresponds to $(1/3, 1/3)$
    $u_{1,1}^{(1)} = \frac{1}{4} (u_{2,1}^{(0)} + u_{0,1} + u_{1,2}^{(0)} + u_{1,0})$
    $u_{1,1}^{(1)} = \frac{1}{4} (0 + 100 + 0 + 0) = 25$

*   **Point (1,2):** Corresponds to $(1/3, 2/3)$
    $u_{1,2}^{(1)} = \frac{1}{4} (u_{2,2}^{(0)} + u_{0,2} + u_{1,3} + u_{1,1}^{(0)})$
    $u_{1,2}^{(1)} = \frac{1}{4} (0 + 100 + 0 + 0) = 25$

*   **Point (2,1):** Corresponds to $(2/3, 1/3)$
    $u_{2,1}^{(1)} = \frac{1}{4} (u_{3,1} + u_{1,1}^{(0)} + u_{2,2}^{(0)} + u_{2,0})$
    $u_{2,1}^{(1)} = \frac{1}{4} (100 + 0 + 0 + 0) = 25$

*   **Point (2,2):** Corresponds to $(2/3, 2/3)$
    $u_{2,2}^{(1)} = \frac{1}{4} (u_{3,2} + u_{1,2}^{(0)} + u_{2,3} + u_{2,1}^{(0)})$
    $u_{2,2}^{(1)} = \frac{1}{4} (100 + 0 + 0 + 0) = 25$

After Iteration 1: $u^{(1)} = \begin{bmatrix} 25 & 25 \\ 25 & 25 \end{bmatrix}$ (interior points)

**Iteration 2 (k=1):**

Using the values from iteration 1 and applying the Gauss-Seidel update rule (using most recent values):

*   **Point (1,1):**
    $u_{1,1}^{(2)} = \frac{1}{4} (u_{2,1}^{(1)} + u_{0,1} + u_{1,2}^{(1)} + u_{1,0})$
    $u_{1,1}^{(2)} = \frac{1}{4} (25 + 100 + 25 + 0) = \frac{150}{4} = 37.5$

*   **Point (1,2):**
    $u_{1,2}^{(2)} = \frac{1}{4} (u_{2,2}^{(1)} + u_{0,2} + u_{1,3} + u_{1,1}^{(2)})$  (Note: $u_{1,1}^{(2)}$ is the newly computed value)
    $u_{1,2}^{(2)} = \frac{1}{4} (25 + 100 + 0 + 37.5) = \frac{162.5}{4} = 40.625$

*   **Point (2,1):**
    $u_{2,1}^{(2)} = \frac{1}{4} (u_{3,1} + u_{1,1}^{(2)} + u_{2,2}^{(1)} + u_{2,0})$
    $u_{2,1}^{(2)} = \frac{1}{4} (100 + 37.5 + 25 + 0) = \frac{162.5}{4} = 40.625$

*   **Point (2,2):**
    $u_{2,2}^{(2)} = \frac{1}{4} (u_{3,2} + u_{1,2}^{(2)} + u_{2,3} + u_{2,1}^{(2)})$ (Note: $u_{1,2}^{(2)}$ and $u_{2,1}^{(2)}$ are newly computed)
    $u_{2,2}^{(2)} = \frac{1}{4} (100 + 40.625 + 0 + 40.625) = \frac{181.25}{4} = 45.3125$

After Iteration 2: $u^{(2)} = \begin{bmatrix} 37.5 & 40.625 \\ 40.625 & 45.3125 \end{bmatrix}$

Continue this process until the difference between successive iterations is below a chosen tolerance.

**Textbook References:**

*   **Chapra & Canale (6th Edition):** Section 17.5.2 (Example 17.3) will provide a similar example, potentially with a finer grid, demonstrating the step-by-step application of Liebmann's method.
*   **Balagurusamy (2017):** May have an example on solving temperature distribution problems.

### 5. Convergence and Acceleration Techniques

**Convergence:**

Liebmann's method (and other iterative methods for solving linear systems) is guaranteed to converge for elliptic PDEs if the grid is sufficiently fine and the boundary conditions are well-behaved. The convergence rate depends on the grid spacing and the specific problem. Smaller grid spacing (finer grid) generally leads to faster convergence in terms of iterations required to reach a solution, but each iteration takes longer due to more grid points.

**Acceleration Techniques:**

The convergence of Liebmann's method can sometimes be slow. **Successive Over-Relaxation (SOR)** is a common technique to accelerate the convergence.

**Successive Over-Relaxation (SOR):**

Instead of directly using the updated value from the Gauss-Seidel iteration, SOR introduces a relaxation factor $\omega$ (omega) where $1 < \omega < 2$. The update rule becomes:

$u_{i,j}^{(k+1)} = (1-\omega) u_{i,j}^{(k)} + \omega \left[ \frac{1}{4} (u_{i+1,j}^{(k+1)} + u_{i-1,j}^{(k+1)} + u_{i,j+1}^{(k)} + u_{i,j-1}^{(k)}) \right]$

The optimal value of $\omega$ depends on the problem and grid, and often needs to be determined experimentally or through theoretical analysis. A $\omega=1$ reduces SOR to the standard Gauss-Seidel method.

**Textbook References:**

*   **Chapra & Canale (6th Edition):** While they might focus on Gauss-Seidel, they might mention acceleration techniques as a general concept for iterative methods.
*   **Gupta S.K.:** May discuss acceleration techniques for solving linear systems.
*   **Gerald & Wheatly (6th Edition):** Chapter on iterative methods often details SOR.
*   **Jain, Iyengar & Jain:** A comprehensive reference that is highly likely to cover SOR and convergence analysis for numerical methods.

### 6. Advantages and Disadvantages of Liebmann's Method

**Advantages:**

*   **Simplicity:** The underlying concept (averaging neighbors) and implementation are relatively straightforward.
*   **Memory Efficient:** It typically requires storing only the grid values from the previous iteration, making it memory-efficient for large grids.
*   **Handles Complex Geometries (with modifications):** While described for rectangular grids, the finite difference approach can be adapted to irregular geometries using more complex stencil formulations.
*   **Good for Elliptic PDEs:** Well-suited for steady-state problems described by elliptic PDEs.

**Disadvantages:**

*   **Slow Convergence:** Can be slow to converge, especially for large grids or problems with sharp gradients, requiring many iterations.
*   **Grid Dependence:** The accuracy and convergence rate are highly dependent on the grid spacing. Finer grids improve accuracy but increase computational cost.
*   **Not Suitable for Parabolic/Hyperbolic PDEs:** Liebmann's method is designed for steady-state (elliptic) problems. For time-dependent PDEs (parabolic/hyperbolic), explicit or implicit methods like Crank-Nicolson or Lax-Wendroff are used.

**Textbook References:**

*   General discussion on advantages and disadvantages of iterative methods can be found in most numerical analysis textbooks, including those listed.

### 7. Practice Questions and Exercises

**Question 1:**

Consider a 2D square domain with side length $L=1$. The PDE is Laplace's equation $\nabla^2 u = 0$. The boundary conditions are:
*   $u(x, 0) = 0$ for $0 \le x \le 1$
*   $u(x, 1) = 100$ for $0 \le x \le 1$
*   $u(0, y) = 0$ for $0 \le y \le 1$
*   $u(1, y) = 0$ for $0 \le y \le 1$

Use Liebmann's method with a $3 \times 3$ grid of interior points ($N=3$, $h=1/3$). Perform two iterations starting with an initial guess of $u_{i,j}^{(0)} = 0$ for all interior points.

**Answer 1:**

Grid: $h = 1/3$. Interior points $(x_i, y_j)$ where $i,j = 1, 2$.
The points are $(1/3, 1/3)$, $(1/3, 2/3)$, $(2/3, 1/3)$, $(2/3, 2/3)$.

Initial guess: $u_{1,1}^{(0)} = u_{1,2}^{(0)} = u_{2,1}^{(0)} = u_{2,2}^{(0)} = 0$.

Iteration 1:
*   $u_{1,1}^{(1)} = \frac{1}{4} (u_{2,1}^{(0)} + u_{0,1} + u_{1,2}^{(0)} + u_{1,0}) = \frac{1}{4} (0 + 0 + 0 + 0) = 0$
*   $u_{1,2}^{(1)} = \frac{1}{4} (u_{2,2}^{(0)} + u_{0,2} + u_{1,3} + u_{1,1}^{(0)}) = \frac{1}{4} (0 + 0 + 100 + 0) = 25$
*   $u_{2,1}^{(1)} = \frac{1}{4} (u_{3,1} + u_{1,1}^{(0)} + u_{2,2}^{(0)} + u_{2,0}) = \frac{1}{4} (0 + 0 + 0 + 0) = 0$
*   $u_{2,2}^{(1)} = \frac{1}{4} (u_{3,2} + u_{1,2}^{(0)} + u_{2,3} + u_{2,1}^{(0)}) = \frac{1}{4} (0 + 0 + 100 + 0) = 25$
After Iteration 1: $u^{(1)} = \begin{bmatrix} 0 & 25 \\ 0 & 25 \end{bmatrix}$

Iteration 2 (using Gauss-Seidel):
*   $u_{1,1}^{(2)} = \frac{1}{4} (u_{2,1}^{(1)} + u_{0,1} + u_{1,2}^{(1)} + u_{1,0}) = \frac{1}{4} (0 + 0 + 25 + 0) = 6.25$
*   $u_{1,2}^{(2)} = \frac{1}{4} (u_{2,2}^{(1)} + u_{0,2} + u_{1,3} + u_{1,1}^{(2)}) = \frac{1}{4} (25 + 0 + 100 + 6.25) = \frac{131.25}{4} = 32.8125$
*   $u_{2,1}^{(2)} = \frac{1}{4} (u_{3,1} + u_{1,1}^{(2)} + u_{2,2}^{(1)} + u_{2,0}) = \frac{1}{4} (0 + 6.25 + 25 + 0) = \frac{31.25}{4} = 7.8125$
*   $u_{2,2}^{(2)} = \frac{1}{4} (u_{3,2} + u_{1,2}^{(2)} + u_{2,3} + u_{2,1}^{(2)}) = \frac{1}{4} (0 + 32.8125 + 100 + 7.8125) = \frac{140.625}{4} = 35.15625$
After Iteration 2: $u^{(2)} = \begin{bmatrix} 6.25 & 32.8125 \\ 7.8125 & 35.15625 \end{bmatrix}$

**Question 2:**

What is the fundamental discretization equation used in Liebmann's method for the Laplace equation on a uniform grid?

**Answer 2:**

$u_{i,j} = \frac{1}{4} (u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1})$

This equation represents the fact that the solution at an interior point is the average of its four orthogonal neighbors.

**Question 3:**

What is the primary purpose of the relaxation factor $\omega$ in Successive Over-Relaxation (SOR) applied to Liebmann's method?

**Answer 3:**

The relaxation factor $\omega$ is used to **accelerate the convergence** of the iterative process. By choosing an appropriate $\omega$ (typically between 1 and 2), the method can reach the solution in fewer iterations compared to the standard Gauss-Seidel method.

### 8. Important Points to Remember

*   **Liebmann's method is an iterative technique for solving elliptic PDEs.**
*   **It is based on the finite difference approximation of the PDE.**
*   **The core update rule for the Laplace equation is that the value at a point is the average of its four neighbors.**
*   **Convergence is checked by comparing successive iterations for a significant change.**
*   **Using the most recently computed values of neighbors (Gauss-Seidel approach) is characteristic of Liebmann's method.**
*   **SOR can be used to speed up convergence.**
*   **Accuracy depends on grid spacing; finer grids give better accuracy but increase computation.**
*   **Liebmann's method is not directly applicable to time-dependent PDEs.**

### 9. Alignment with Course Outcomes

*   **CO4: Execute numerical procedures to solve ordinary and partial differential equations (Knowledge Level: K3)**
    *   This topic directly addresses the execution of a numerical procedure (Liebmann's method) to solve a partial differential equation (Laplace/Poisson equation). The understanding of the discretization, iteration, and convergence criteria falls under K3 (Applying).

By studying Liebmann's method, students gain practical experience in applying numerical techniques to solve a fundamental class of PDEs encountered in engineering. The iterative nature of the method also introduces concepts relevant to solving large systems of linear equations arising from discretization.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
