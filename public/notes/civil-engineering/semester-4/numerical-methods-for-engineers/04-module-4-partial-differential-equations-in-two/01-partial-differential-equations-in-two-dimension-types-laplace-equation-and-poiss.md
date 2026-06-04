---
title: "Partial differential equations in two-dimension - types, Laplace Equation and Poisson’s equation."
subject: "NUMERICAL METHODS FOR ENGINEERS"
module: "Module 4: Partial differential equations in two"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810b48"
status: "completed"
scrapedAt: "2026-05-20T18:46:52.466Z"
---
# NUMERICAL METHODS FOR ENGINEERS - Module 4: Partial Differential Equations in Two Dimensions

## Topic: Partial Differential Equations in Two Dimensions - Types, Laplace Equation, and Poisson's Equation

---

### 1. Introduction to Partial Differential Equations (PDEs) in Two Dimensions

**1.1 What is a Partial Differential Equation?**
A PDE is an equation that involves an unknown function of two or more independent variables and its partial derivatives with respect to those variables.

**1.2 PDEs in Two Dimensions:**
In this module, we focus on PDEs where the unknown function depends on two independent variables, typically denoted as $x$ and $y$. These variables often represent spatial coordinates.

**1.3 General Form of a Second-Order Linear PDE in Two Variables:**
The most general form of a second-order linear PDE in two variables $(x, y)$ is:

$A \frac{\partial^2 u}{\partial x^2} + B \frac{\partial^2 u}{\partial x \partial y} + C \frac{\partial^2 u}{\partial y^2} + D \frac{\partial u}{\partial x} + E \frac{\partial u}{\partial y} + F u = G(x, y)$

where $u = u(x, y)$ is the unknown function, and $A, B, C, D, E, F$ are coefficients that can be functions of $x$ and $y$.

**1.4 Classification of Second-Order Linear PDEs:**
The classification of these PDEs is crucial for understanding their behavior and choosing appropriate numerical methods. It depends on the discriminant $\Delta = B^2 - 4AC$:

*   **Elliptic PDEs:** If $\Delta < 0$.
    *   **Characteristics:** Solutions are typically smooth and unique over the entire domain, influenced by boundary conditions at all points. Boundary value problems (BVPs) are common.
    *   **Examples:** Laplace's equation, Poisson's equation.
    *   **Applications:** Steady-state heat distribution, electrostatic potential, fluid flow without vorticity.

*   **Parabolic PDEs:** If $\Delta = 0$.
    *   **Characteristics:** Solutions describe phenomena that evolve with time (or another independent variable) and are influenced by initial conditions and boundary conditions. Initial boundary value problems (IBVPs) are common.
    *   **Examples:** Heat equation.
    *   **Applications:** Heat diffusion, transient phenomena.

*   **Hyperbolic PDEs:** If $\Delta > 0$.
    *   **Characteristics:** Solutions describe wave-like phenomena, propagation of disturbances. Solutions depend on both initial and boundary conditions.
    *   **Examples:** Wave equation.
    *   **Applications:** Vibrations, wave propagation.

---

### 2. Laplace's Equation

**2.1 Definition:**
Laplace's equation is a second-order linear partial differential equation of elliptic type. In two dimensions, it is given by:

$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$

or in a more compact notation using the Laplacian operator $\nabla^2$:

$\nabla^2 u = 0$

where $u(x, y)$ is the unknown function.

**2.2 Physical Significance:**
Laplace's equation describes physical phenomena in a **steady-state** where there are **no sources or sinks** within the domain.
*   **Steady-state heat distribution:** $u(x, y)$ represents the temperature at point $(x, y)$ in a two-dimensional region at a constant temperature.
*   **Electrostatic potential:** $u(x, y)$ represents the electric potential in a region free of electric charges.
*   **Irrotational fluid flow:** $u(x, y)$ can represent the velocity potential in a two-dimensional, inviscid, and irrotational fluid flow.

**2.3 Boundary Conditions:**
Laplace's equation is typically solved as a Boundary Value Problem (BVP). This means we need to specify the value of $u$ on the boundaries of the domain. Common types of boundary conditions are:
*   **Dirichlet Boundary Condition:** The value of the function is specified on the boundary: $u(x, y) = g(x, y)$ for $(x, y)$ on the boundary $\Gamma$.
*   **Neumann Boundary Condition:** The derivative of the function (normal to the boundary) is specified on the boundary: $\frac{\partial u}{\partial n} = h(x, y)$ for $(x, y)$ on the boundary $\Gamma$.
*   **Mixed Boundary Condition:** A combination of Dirichlet and Neumann conditions.

**2.4 Numerical Solution - Finite Difference Method (FDM):**
A common approach to solve Laplace's equation numerically is using the Finite Difference Method. This involves discretizing the domain into a grid and approximating the derivatives with finite differences.

**2.4.1 Discretization:**
Consider a rectangular domain $[a, b] \times [c, d]$ divided into $M \times N$ segments in the $x$ and $y$ directions, respectively. Let $\Delta x = (b-a)/M$ and $\Delta y = (d-c)/N$. The grid points are $(x_i, y_j)$, where $x_i = a + i \Delta x$ and $y_j = c + j \Delta y$, for $i = 0, 1, \dots, M$ and $j = 0, 1, \dots, N$. Let $u_{i,j}$ be the approximate value of $u(x_i, y_j)$.

**2.4.2 Finite Difference Approximations:**
We use the central difference approximation for the second partial derivatives:

$\frac{\partial^2 u}{\partial x^2} \approx \frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{(\Delta x)^2}$
$\frac{\partial^2 u}{\partial y^2} \approx \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{(\Delta y)^2}$

**2.4.3 The Finite Difference Equation for Laplace's Equation:**
Substituting these approximations into Laplace's equation at an interior grid point $(x_i, y_j)$:

$\frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{(\Delta x)^2} + \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{(\Delta y)^2} = 0$

**2.4.4 Special Case: Uniform Grid ($\Delta x = \Delta y = h$)**
If we use a uniform grid, so $\Delta x = \Delta y = h$, the equation simplifies significantly:

$\frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{h^2} + \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{h^2} = 0$

Multiplying by $h^2$ and rearranging, we get the **five-point stencil** for Laplace's equation:

$u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - 4u_{i,j} = 0$

This can be rearranged to solve for the unknown value at the center point $u_{i,j}$:

$u_{i,j} = \frac{1}{4} (u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1})$

This equation states that the value of $u$ at any interior point is the average of its four nearest neighbors. This property is called the **mean value property** and is characteristic of elliptic equations.

**2.4.5 Solving the System of Equations:**
Applying this finite difference equation to all interior grid points results in a system of linear algebraic equations. The unknowns are the values of $u$ at these interior points. The boundary values are known from the boundary conditions. This system can be solved using iterative methods like:
*   **Gauss-Seidel Iteration:**
*   **Successive Over-Relaxation (SOR):**

**2.5 Example: Steady-state Temperature in a Square Plate**
Consider a square plate defined by $0 \le x \le 1$ and $0 \le y \le 1$.
Boundary Conditions:
*   $u(x, 0) = 0$ for $0 \le x \le 1$ (bottom edge is at 0 temperature)
*   $u(x, 1) = 100$ for $0 \le x \le 1$ (top edge is at 100 temperature)
*   $u(0, y) = 0$ for $0 \le y \le 1$ (left edge is at 0 temperature)
*   $u(1, y) = 0$ for $0 \le y \le 1$ (right edge is at 0 temperature)

We want to find the steady-state temperature distribution $u(x, y)$ satisfying $\nabla^2 u = 0$.

**Discretization:** Let's use a $3 \times 3$ grid (meaning $M=2, N=2$), so $\Delta x = 0.5$, $\Delta y = 0.5$.
Grid points: $(0,0), (0.5,0), (1,0), (0,0.5), (0.5,0.5), (1,0.5), (0,1), (0.5,1), (1,1)$.
Interior points: $(0.5, 0.5)$. Let's denote $u_{0.5,0.5}$ as $u_1$.

Using the five-point stencil at $(0.5, 0.5)$:
$u_{1} = \frac{1}{4} (u_{0.5,0} + u_{0.5,1} + u_{0,0.5} + u_{1,0.5})$

Applying boundary conditions:
*   $u_{0.5,0} = 0$ (from $u(x,0)=0$)
*   $u_{0.5,1} = 100$ (from $u(x,1)=100$)
*   $u_{0,0.5} = 0$ (from $u(0,y)=0$)
*   $u_{1,0.5} = 0$ (from $u(1,y)=0$)

So, the equation becomes:
$u_1 = \frac{1}{4} (0 + 100 + 0 + 0) = 25$

This is a very coarse approximation. For better accuracy, a finer grid would be needed, leading to a larger system of linear equations.

---

### 3. Poisson's Equation

**3.1 Definition:**
Poisson's equation is a second-order linear partial differential equation of elliptic type, which is a generalization of Laplace's equation. In two dimensions, it is given by:

$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = f(x, y)$

or in compact notation:

$\nabla^2 u = f(x, y)$

where $u(x, y)$ is the unknown function and $f(x, y)$ is a known source function.

**3.2 Physical Significance:**
Poisson's equation describes physical phenomena in a **steady-state** where there **are sources or sinks** within the domain.
*   **Steady-state heat distribution with internal heat generation:** $f(x, y)$ represents the rate of heat generation per unit volume at point $(x, y)$.
*   **Electrostatic potential with charge distribution:** $f(x, y)$ represents the charge density at point $(x, y)$.
*   **Steady-state deflection of a stretched membrane with a distributed load:** $u(x, y)$ is the deflection, and $f(x, y)$ is the load.

**3.3 Boundary Conditions:**
Similar to Laplace's equation, Poisson's equation is solved as a Boundary Value Problem (BVP). Dirichlet, Neumann, or mixed boundary conditions are specified on the boundary of the domain.

**3.4 Numerical Solution - Finite Difference Method (FDM):**
The FDM approach is similar to that for Laplace's equation, with the addition of the source term $f(x, y)$.

**3.4.1 The Finite Difference Equation for Poisson's Equation:**
Using the central difference approximations for second derivatives:

$\frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{(\Delta x)^2} + \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{(\Delta y)^2} = f(x_i, y_j)$

**3.4.2 Special Case: Uniform Grid ($\Delta x = \Delta y = h$)**
If we use a uniform grid ($\Delta x = \Delta y = h$):

$\frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{h^2} + \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{h^2} = f_{i,j}$

where $f_{i,j} = f(x_i, y_j)$.
Multiplying by $h^2$ and rearranging:

$u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - 4u_{i,j} = h^2 f_{i,j}$

This can be rearranged to solve for $u_{i,j}$:

$u_{i,j} = \frac{1}{4} (u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - h^2 f_{i,j})$

This equation shows that the value at a grid point is influenced by its neighbors and the source term at that point.

**3.4.3 Solving the System of Equations:**
Similar to Laplace's equation, this results in a system of linear algebraic equations that can be solved using iterative methods like Gauss-Seidel or SOR.

**3.5 Example: Heat Generation in a Plate**
Consider a rectangular plate defined by $0 \le x \le 1$ and $0 \le y \le 1$.
Assume the plate has a uniform heat generation rate $f(x, y) = 100$ throughout.
Boundary Conditions:
*   $u(x, y) = 0$ on all boundaries.

We want to find the steady-state temperature distribution $u(x, y)$ satisfying $\nabla^2 u = 100$.

**Discretization:** Let's use a $3 \times 3$ grid ($M=2, N=2$), so $\Delta x = 0.5$, $\Delta y = 0.5$, $h = 0.5$. $h^2 = 0.25$.
Interior points: $(0.5, 0.5)$. Let's denote $u_{0.5,0.5}$ as $u_1$.
$f_{0.5,0.5} = 100$.

Using the finite difference equation at $(0.5, 0.5)$:
$u_1 = \frac{1}{4} (u_{0.5,0} + u_{0.5,1} + u_{0,0.5} + u_{1,0.5} - h^2 f_{0.5,0.5})$

Applying boundary conditions:
*   $u_{0.5,0} = 0$ (bottom edge)
*   $u_{0.5,1} = 0$ (top edge)
*   $u_{0,0.5} = 0$ (left edge)
*   $u_{1,0.5} = 0$ (right edge)

So, the equation becomes:
$u_1 = \frac{1}{4} (0 + 0 + 0 + 0 - 0.25 \times 100)$
$u_1 = \frac{1}{4} (-25) = -6.25$

The negative temperature indicates that the heat generation is causing a "sink" effect relative to the boundaries. For a physical interpretation, if the boundaries were at a positive temperature, the center would be even higher due to the heat generation.

---

### 4. Key Concepts and Definitions

*   **Partial Differential Equation (PDE):** An equation involving partial derivatives of an unknown function with respect to two or more independent variables.
*   **Laplacian Operator ($\nabla^2$):** In 2D, $\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2}$.
*   **Laplace's Equation:** $\nabla^2 u = 0$. Describes steady-state phenomena with no sources/sinks.
*   **Poisson's Equation:** $\nabla^2 u = f(x, y)$. Describes steady-state phenomena with sources/sinks.
*   **Elliptic PDEs:** Characterized by $\Delta = B^2 - 4AC < 0$. Solutions are smooth and influenced by boundary conditions everywhere.
*   **Boundary Value Problem (BVP):** A problem where the PDE is specified over a domain, and conditions (like values of the function or its derivatives) are given on the boundaries of the domain.
*   **Dirichlet Boundary Condition:** Specifies the value of the unknown function on the boundary.
*   **Neumann Boundary Condition:** Specifies the normal derivative of the unknown function on the boundary.
*   **Finite Difference Method (FDM):** A numerical technique that approximates differential equations by replacing derivatives with finite difference approximations on a discretized grid.
*   **Five-Point Stencil:** The pattern of grid points used in the FDM approximation of Laplace's or Poisson's equation on a uniform grid, relating the value at a central point to its four immediate neighbors.
*   **Mean Value Property:** The value of a solution to Laplace's equation at a point is the average of its values on any circle centered at that point (in 2D). The FDM approximation $u_{i,j} = \frac{1}{4}(...)$ captures this locally.
*   **Iterative Methods (Gauss-Seidel, SOR):** Techniques used to solve large systems of linear equations arising from FDM, where values at grid points are updated repeatedly until convergence.

---

### 5. Important Points to Remember

*   **Classification is key:** Understanding if a PDE is elliptic, parabolic, or hyperbolic dictates the type of boundary/initial conditions needed and the numerical methods applicable.
*   **Steady-State vs. Transient:** Laplace's and Poisson's equations describe steady-state conditions.
*   **Sources/Sinks:** Laplace's equation has no sources/sinks ($f(x,y)=0$), while Poisson's equation includes them ($f(x,y) \neq 0$).
*   **FDM Grid:** For simplicity, we often use uniform grids where $\Delta x = \Delta y$. If they are different, the FDM stencil coefficients will reflect this.
*   **Accuracy vs. Computation:** Finer grids generally lead to more accurate solutions but require more computational resources (memory and time).
*   **Iterative Solvers:** For large grids, direct solution methods become computationally prohibitive. Iterative methods are essential.
*   **Boundary Conditions:** The correctness of the solution heavily depends on accurately imposing the boundary conditions.

---

### 6. Practice Questions/Exercises

**Question 1:**
Classify the following 2D partial differential equation:
$2 \frac{\partial^2 u}{\partial x^2} - 4 \frac{\partial^2 u}{\partial x \partial y} + 3 \frac{\partial^2 u}{\partial y^2} + \frac{\partial u}{\partial x} + u = x^2 + y^2$

**Question 2:**
Write down the finite difference approximation for Laplace's equation $\nabla^2 u = 0$ at an interior grid point $(x_i, y_j)$ using a uniform grid with spacing $h$.

**Question 3:**
Consider a 2D rectangular domain with the following boundary conditions for Laplace's equation $\nabla^2 u = 0$:
*   $u(x, 0) = 10$ for $0 \le x \le 2$
*   $u(x, 1) = 50$ for $0 \le x \le 2$
*   $u(0, y) = 20$ for $0 \le y \le 1$
*   $u(2, y) = 30$ for $0 \le y \le 1$

If we discretize this domain with $\Delta x = 1$ and $\Delta y = 0.5$, identify the interior grid point(s) and write down the equation(s) obtained from the five-point stencil for Laplace's equation at these points, including boundary values.

**Question 4:**
Write down the finite difference approximation for Poisson's equation $\nabla^2 u = f(x, y)$ at an interior grid point $(x_i, y_j)$ using a uniform grid with spacing $h$.

**Question 5:**
Consider a 2D square domain $0 \le x \le 1$, $0 \le y \le 1$ with the following conditions for Poisson's equation $\nabla^2 u = -2$:
*   $u(x, y) = 0$ on all boundaries.

Using a $3 \times 3$ grid ($\Delta x = 0.5, \Delta y = 0.5$), determine the value of $u$ at the center grid point $(0.5, 0.5)$.

---

### 7. Answers to Practice Questions

**Answer 1:**
For the given PDE, $A=2$, $B=-4$, $C=3$.
The discriminant is $\Delta = B^2 - 4AC = (-4)^2 - 4(2)(3) = 16 - 24 = -8$.
Since $\Delta < 0$, the PDE is **elliptic**.

**Answer 2:**
The finite difference approximation for Laplace's equation $\nabla^2 u = 0$ at an interior grid point $(x_i, y_j)$ using a uniform grid with spacing $h$ ($\Delta x = \Delta y = h$) is:
$\frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{h^2} + \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{h^2} = 0$
Rearranging gives the five-point stencil:
$u_{i,j} = \frac{1}{4} (u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1})$

**Answer 3:**
Domain: $0 \le x \le 2$, $0 \le y \le 1$.
$\Delta x = 1$, $\Delta y = 0.5$.
Grid points $(x_i, y_j)$ where $x_i \in \{0, 1, 2\}$ and $y_j \in \{0, 0.5, 1\}$.

Grid points:
(0,0), (1,0), (2,0)
(0,0.5), (1,0.5), (2,0.5)
(0,1), (1,1), (2,1)

Interior grid point: $(1, 0.5)$. Let $u_{1,0.5}$ be denoted as $u_1$.

Applying the finite difference equation for Laplace's equation (with $\Delta x \neq \Delta y$):
$\frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{(\Delta x)^2} + \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{(\Delta y)^2} = 0$

At the interior point $(i,j) = (1, 0.5)$:
$\frac{u_{2,0.5} - 2u_{1,0.5} + u_{0,0.5}}{(1)^2} + \frac{u_{1,1} - 2u_{1,0.5} + u_{1,0}}{(0.5)^2} = 0$

Substitute known boundary values:
*   $u_{1,0} = 10$ (from $u(x,0)=10$)
*   $u_{1,1} = 50$ (from $u(x,1)=50$)
*   $u_{0,0.5} = 20$ (from $u(0,y)=20$)
*   $u_{2,0.5} = 30$ (from $u(2,y)=30$)

The equation becomes:
$\frac{30 - 2u_{1,0.5} + 20}{1} + \frac{50 - 2u_{1,0.5} + 10}{0.25} = 0$
$50 - 2u_{1,0.5} + 4(60 - 2u_{1,0.5}) = 0$
$50 - 2u_{1,0.5} + 240 - 8u_{1,0.5} = 0$
$290 - 10u_{1,0.5} = 0$
$10u_{1,0.5} = 290$
$u_{1,0.5} = 29$

**Answer 4:**
The finite difference approximation for Poisson's equation $\nabla^2 u = f(x, y)$ at an interior grid point $(x_i, y_j)$ using a uniform grid with spacing $h$ ($\Delta x = \Delta y = h$) is:
$\frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{h^2} + \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{h^2} = f_{i,j}$
Rearranging gives:
$u_{i,j} = \frac{1}{4} (u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - h^2 f_{i,j})$

**Answer 5:**
Domain: $0 \le x \le 1$, $0 \le y \le 1$.
$\Delta x = 0.5$, $\Delta y = 0.5$, so $h = 0.5$. $h^2 = 0.25$.
Source term: $f(x, y) = -2$, so $f_{0.5,0.5} = -2$.
Boundary conditions: $u(x, y) = 0$ on all boundaries.

The only interior grid point is $(0.5, 0.5)$. Let $u_{0.5,0.5}$ be $u_1$.
We need values at neighboring grid points:
*   $u_{0.5,0} = 0$ (bottom edge)
*   $u_{0.5,1} = 0$ (top edge)
*   $u_{0,0.5} = 0$ (left edge)
*   $u_{1,0.5} = 0$ (right edge)

Using the formula from Answer 4 at $(i,j) = (0.5, 0.5)$:
$u_{0.5,0.5} = \frac{1}{4} (u_{1,0.5} + u_{-0.5,0.5} + u_{0.5,1} + u_{0.5,0} - h^2 f_{0.5,0.5})$
Wait, the indices $i-1,j$ and $i+1,j$ etc. are for the grid points. Let's use grid indices.
Let $(x_1, y_1) = (0.5, 0.5)$.
$x_0=0, x_1=0.5, x_2=1$. $y_0=0, y_1=0.5, y_2=1$.
We are interested in $u_{1,1}$.
The neighbors are $u_{2,1}$ (right), $u_{0,1}$ (left), $u_{1,2}$ (up), $u_{1,0}$ (down).

$u_{1,1} = \frac{1}{4} (u_{2,1} + u_{0,1} + u_{1,2} + u_{1,0} - h^2 f_{1,1})$

Applying boundary conditions ($u=0$ on boundaries):
*   $u_{2,1} = u(1, 0.5) = 0$
*   $u_{0,1} = u(0, 0.5) = 0$
*   $u_{1,2} = u(0.5, 1) = 0$
*   $u_{1,0} = u(0.5, 0) = 0$
*   $f_{1,1} = f(0.5, 0.5) = -2$

So, the equation becomes:
$u_{1,1} = \frac{1}{4} (0 + 0 + 0 + 0 - 0.25 \times (-2))$
$u_{1,1} = \frac{1}{4} (0 - (-0.5))$
$u_{1,1} = \frac{1}{4} (0.5)$
$u_{1,1} = 0.125$

The value of $u$ at the center grid point is 0.125.
