---
title: "Numerical solution of partial differential equation-Types"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 4: Numerical solution of partial differential equation"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646c1"
status: "completed"
scrapedAt: "2026-05-20T18:23:23.026Z"
---
# NUMERICAL TECHNIQUES ENGINEERING

## Module 4: Numerical Solution of Partial Differential Equations

### Topic: Numerical Solution of Partial Differential Equations - Types

---

### 1. Introduction to Partial Differential Equations (PDEs)

*   **Definition:** A partial differential equation (PDE) is a differential equation that contains unknown multivariable functions and their partial derivatives with respect to these variables.
*   **Importance:** PDEs are fundamental in describing a vast array of physical phenomena in engineering and science, including heat transfer, fluid dynamics, wave propagation, electromagnetism, and structural mechanics.
*   **Challenges in Analytical Solutions:** Many real-world problems involving PDEs do not have simple analytical solutions. This necessitates the use of numerical methods to approximate solutions.

---

### 2. Classification of PDEs

Understanding the type of PDE is crucial as it dictates the choice of numerical methods. PDEs are typically classified based on their **order** and **linearity**. However, for numerical solution strategies, a more practical classification based on the **nature of the principal part** of the equation is used. This classification helps determine the stability and accuracy of different numerical schemes.

#### 2.1 Classification Based on the Nature of the Principal Part

For a second-order linear PDE in two independent variables, $x$ and $y$, of the form:

$A \frac{\partial^2 u}{\partial x^2} + B \frac{\partial^2 u}{\partial x \partial y} + C \frac{\partial^2 u}{\partial y^2} + D \frac{\partial u}{\partial x} + E \frac{\partial u}{\partial y} + F u = G(x, y)$

The classification is determined by the discriminant: $\Delta = B^2 - 4AC$.

*   **Elliptic Type PDEs:**
    *   Condition: $\Delta = B^2 - 4AC < 0$
    *   **Characteristics:** Tend to have smooth, steady-state solutions. Describe phenomena where changes propagate instantaneously to all parts of the domain.
    *   **Examples:**
        *   **Laplace's Equation:** $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$ (e.g., steady-state temperature distribution, electrostatics). Here, $A=1, C=1, B=0$, so $\Delta = -4 < 0$.
        *   **Poisson's Equation:** $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = f(x, y)$ (e.g., steady-state temperature with heat generation, potential theory). Here, $A=1, C=1, B=0$, so $\Delta = -4 < 0$.
    *   **Numerical Methods:** Finite Difference Method (FDM), Finite Element Method (FEM). Focus on iterative methods to solve large systems of linear equations.

*   **Parabolic Type PDEs:**
    *   Condition: $\Delta = B^2 - 4AC = 0$
    *   **Characteristics:** Describe time-dependent phenomena where changes propagate in one direction (like diffusion or heat conduction). Solutions evolve over time.
    *   **Examples:**
        *   **Heat Equation (or Diffusion Equation):** $\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$ (e.g., temperature distribution over time in a rod). Here, if we consider $t$ as $y$, then $C=0, D=0, E=0$, and $B=0$, leading to $\Delta = 0$. $\alpha$ is the thermal diffusivity.
        *   **Schrödinger Equation (time-dependent):** $i\hbar \frac{\partial \Psi}{\partial t} = -\frac{\hbar^2}{2m} \frac{\partial^2 \Psi}{\partial x^2} + V(x) \Psi$ (describes quantum mechanical wave functions).
    *   **Numerical Methods:** FDM, FEM. Often employ explicit or implicit time-marching schemes. Stability is a key concern, especially for explicit methods (Crank-Nicolson method is a popular implicit scheme).

*   **Hyperbolic Type PDEs:**
    *   Condition: $\Delta = B^2 - 4AC > 0$
    *   **Characteristics:** Describe wave-like phenomena where disturbances propagate in all directions. Solutions involve propagating waves.
    *   **Examples:**
        *   **Wave Equation:** $\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$ (e.g., vibration of a string, propagation of sound waves). If we consider $t$ as $y$, then $A=1, C=-c^2, B=0$, leading to $\Delta = 0 - 4(1)(-c^2) = 4c^2 > 0$. $c$ is the wave speed.
        *   **Maxwell's Equations:** Govern electromagnetic fields, which are hyperbolic.
    *   **Numerical Methods:** FDM, FEM. Characteristic methods are often used. Stability analysis is critical (e.g., Courant-Friedrichs-Lewy or CFL condition).

#### 2.2 Key Considerations for Numerical Methods

*   **Discretization:** Converting the continuous PDE into a system of algebraic equations by discretizing the domain into a grid or mesh.
*   **Approximation of Derivatives:** Replacing partial derivatives with finite difference approximations.
*   **Boundary and Initial Conditions:** Incorporating specified values or relationships at the boundaries of the domain and at the starting time (for time-dependent problems).
*   **Stability:** Ensuring that errors introduced during computation do not grow unboundedly.
*   **Accuracy:** How closely the numerical solution approximates the true solution.
*   **Convergence:** The tendency of the numerical solution to approach the true solution as the discretization step size decreases.

---

### 3. Numerical Solution Techniques (Overview)

While this module focuses on the *types* of PDEs, it's important to acknowledge the common numerical techniques used for their solution, which are dictated by these types.

*   **Finite Difference Method (FDM):** Approximates derivatives using Taylor series expansions to create algebraic equations on a grid.
    *   *Reference:* Chapra & Canale, Chapter 11 (Numerical Solution of PDEs).

*   **Finite Element Method (FEM):** Divides the domain into smaller elements and approximates the solution within each element using basis functions. Leads to a system of equations that can be solved for nodal values.
    *   *Reference:* Gupta, S.K. (often covers FEM in advanced chapters or separate sections). Balagurusamy might also introduce FEM conceptually.

*   **Finite Volume Method (FVM):** Integrates the PDE over control volumes. Ensures conservation properties, making it popular for fluid dynamics.

---

### 4. Learning Outcomes Alignment

*   **CO1: Apply numerical methods to solve linear and nonlinear equations (Knowledge Level: K3)**
    *   Understanding the types of PDEs is the first step towards applying appropriate numerical methods. Solving the discretized system of algebraic equations (which can be linear or nonlinear) is a core part of applying these methods.
*   **CO2: Implement numerical schemes to fit data (Knowledge Level: K3)**
    *   While fitting data is more common for curve fitting, the spatial and temporal discretization in PDE solutions can be seen as creating a grid-like structure where data points (solution values) are computed.
*   **CO3: Solve differentiation and integration numerically (Knowledge Level: K3)**
    *   The core of FDM involves numerically approximating derivatives. Numerical integration is also used in methods like FVM and FEM.
*   **CO4: Execute numerical procedures to solve ordinary and partial differential equations (Knowledge Level: K3)**
    *   This is the primary outcome addressed by this module. Understanding the classification of PDEs is essential for choosing and executing the correct numerical procedures to obtain approximate solutions.

---

### 5. Examples of PDEs by Type

**Example 1: Elliptic (Laplace's Equation)**
*   **Problem:** Find the steady-state temperature distribution $T(x,y)$ in a rectangular plate of size $L \times W$, where the top and bottom edges are maintained at $100^\circ C$ and the left and right edges are maintained at $0^\circ C$.
*   **PDE:** $\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} = 0$ for $0 < x < L, 0 < y < W$.
*   **Boundary Conditions:**
    *   $T(x, 0) = 0$
    *   $T(x, W) = 0$
    *   $T(0, y) = 100$
    *   $T(L, y) = 100$
*   **Type:** Elliptic. The solution will be a smooth distribution of temperature across the plate. Numerical methods will involve discretizing the plate and solving a system of linear algebraic equations iteratively.

**Example 2: Parabolic (Heat Equation)**
*   **Problem:** Determine the temperature $T(x,t)$ in a long, thin rod of length $L=1$ meter, insulated at both ends, initially at a uniform temperature of $100^\circ C$, and whose ends are suddenly cooled to $0^\circ C$. Assume thermal diffusivity $\alpha = 0.1 \text{ m}^2/\text{s}$.
*   **PDE:** $\frac{\partial T}{\partial t} = 0.1 \frac{\partial^2 T}{\partial x^2}$ for $0 < x < 1, t > 0$.
*   **Boundary Conditions:**
    *   $\frac{\partial T}{\partial x}(0, t) = 0$ (insulated left end)
    *   $\frac{\partial T}{\partial x}(1, t) = 0$ (insulated right end)
*   **Initial Condition:** $T(x, 0) = 100$ for $0 \le x \le 1$.
*   **Type:** Parabolic. The solution will show how the temperature profile changes over time as heat diffuses and the rod cools down. Numerical methods will involve discretizing the rod along its length and time, and using time-marching schemes.

**Example 3: Hyperbolic (Wave Equation)**
*   **Problem:** Solve the one-dimensional wave equation describing the vertical displacement $y(x,t)$ of a vibrating string of length $L=1$ meter, fixed at both ends, initially plucked into a triangular shape (e.g., $y(x,0) = 0.1x$ for $0 \le x \le 0.5$ and $y(x,0) = 0.1(1-x)$ for $0.5 < x \le 1$), and released from rest ($y_t(x,0)=0$). Assume wave speed $c=1$ m/s.
*   **PDE:** $\frac{\partial^2 y}{\partial t^2} = 1^2 \frac{\partial^2 y}{\partial x^2}$ for $0 < x < 1, t > 0$.
*   **Boundary Conditions:**
    *   $y(0, t) = 0$
    *   $y(1, t) = 0$
*   **Initial Conditions:**
    *   $y(x, 0) = \begin{cases} 0.1x & 0 \le x \le 0.5 \\ 0.1(1-x) & 0.5 < x \le 1 \end{cases}$
    *   $\frac{\partial y}{\partial t}(x, 0) = 0$
*   **Type:** Hyperbolic. The solution will represent the oscillatory motion of the string. Numerical methods will involve discretizing space and time and employing schemes that can handle wave propagation, often with attention to the CFL condition.

---

### 6. Important Points to Remember

*   **Classification is Key:** The type of PDE (Elliptic, Parabolic, Hyperbolic) dictates the appropriate numerical discretization and solution strategy.
*   **Elliptic:** Steady-state problems. Often solved with iterative methods.
*   **Parabolic:** Time-dependent diffusion/heat transfer. Requires time-marching schemes; stability is critical.
*   **Hyperbolic:** Time-dependent wave propagation. Requires schemes that can handle wave fronts; stability (CFL condition) is crucial.
*   **Discretization:** The process of replacing continuous variables with discrete grid points or elements.
*   **Boundary and Initial Conditions:** Must be handled correctly for a unique and valid solution.
*   **Accuracy vs. Stability:** There's often a trade-off. Smaller step sizes generally increase accuracy but can sometimes impact stability or computational cost.

---

### 7. Practice Questions and Exercises

**Question 1:**
Classify the following PDE based on the nature of its principal part:
$2 \frac{\partial^2 u}{\partial x^2} - 4 \frac{\partial^2 u}{\partial x \partial y} + 3 \frac{\partial^2 u}{\partial y^2} + 5 \frac{\partial u}{\partial x} - 2 \frac{\partial u}{\partial y} + u = 0$

**Solution 1:**
The given PDE is of the form: $A \frac{\partial^2 u}{\partial x^2} + B \frac{\partial^2 u}{\partial x \partial y} + C \frac{\partial^2 u}{\partial y^2} + \dots = 0$.
Here, $A=2$, $B=-4$, and $C=3$.
The discriminant is $\Delta = B^2 - 4AC$.
$\Delta = (-4)^2 - 4(2)(3) = 16 - 24 = -8$.
Since $\Delta < 0$, the PDE is **Elliptic**.

**Question 2:**
Consider the one-dimensional heat equation: $\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$.
What type of PDE is this, and why? What are the typical boundary and initial conditions associated with it?

**Solution 2:**
This is a **Parabolic** PDE.
The classification comes from its second-order term. If we rewrite it considering $t$ as the $y$-variable, it becomes $\frac{\partial T}{\partial y} - \alpha \frac{\partial^2 T}{\partial x^2} = 0$.
Comparing with $A \frac{\partial^2 u}{\partial x^2} + B \frac{\partial^2 u}{\partial x \partial y} + C \frac{\partial^2 u}{\partial y^2} + \dots = 0$:
Here, $A = -\alpha$, $B = 0$, $C = 0$.
The discriminant is $\Delta = B^2 - 4AC = 0^2 - 4(-\alpha)(0) = 0$.
A discriminant of zero classifies the PDE as parabolic. Parabolic PDEs typically describe diffusion or heat transfer phenomena that evolve over time.

Typical boundary conditions:
*   Dirichlet: $T(0, t) = T_0$ and $T(L, t) = T_L$ (temperature specified at ends).
*   Neumann: $\frac{\partial T}{\partial x}(0, t) = 0$ and $\frac{\partial T}{\partial x}(L, t) = 0$ (insulated ends, zero heat flux).
*   Robin: A combination of temperature and flux.

Typical initial condition:
*   $T(x, 0) = f(x)$ (initial temperature distribution across the rod).

**Question 3:**
For a two-dimensional wave equation $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = \frac{1}{c^2} \frac{\partial^2 u}{\partial t^2}$, how would you classify this PDE? (Hint: Consider $t$ as the "third" variable, but the classification is often made for PDEs in two independent variables. However, the structure gives a clue.)

**Solution 3:**
The question is a bit tricky as the standard classification (elliptic, parabolic, hyperbolic) is typically applied to PDEs with *two* independent variables. However, the underlying mathematical structure of the wave equation strongly suggests its hyperbolic nature.

If we were to consider a simplified problem in 1 spatial dimension and time, like $\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$, and treat $t$ as $y$ in the general form $A u_{xx} + B u_{xy} + C u_{yy}$, we'd have $A=-c^2$, $B=0$, $C=1$.
The discriminant $\Delta = B^2 - 4AC = 0^2 - 4(-c^2)(1) = 4c^2$.
Since $\Delta > 0$ (assuming $c \neq 0$), this form is **Hyperbolic**.

The original 2D wave equation also describes wave-like phenomena where disturbances propagate, which is characteristic of hyperbolic PDEs. Methods for solving it often involve techniques similar to those for the 1D wave equation, considering the characteristic surfaces of propagation.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 8. Textbook References

*   **Chapra & Canale, 6th Edition, Chapter 11:** Provides a solid foundation on numerical methods for PDEs, including classification and Finite Difference Methods. It will cover Laplace's, heat, and wave equations with numerical examples.
*   **Gupta, S.K., 1995:** Likely covers these topics, potentially with a focus on methods like FDM and FVM.
*   **Balagurusamy, 2017:** May offer introductory material on PDEs and their numerical solutions, possibly focusing on simpler cases or specific methods.

**Note:** While the explicit classification based on $B^2-4AC$ is standard for second-order PDEs in *two* variables, the concepts are extended to higher dimensions and more complex equations to understand their behavior and choose appropriate numerical schemes. The core idea of how the principal part determines the physical phenomena (steady-state, diffusion, wave propagation) remains consistent.