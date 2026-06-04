---
title: "Classification of Partial differential equations – elliptic, parabolic and hyperbolic equations."
subject: "COMPUTATIONAL HEAT TRANSFER"
module: "Module 1: Basics of Heat Transfer"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464370"
status: "completed"
scrapedAt: "2026-05-20T18:10:34.258Z"
---
# Computational Heat Transfer - Module 1: Basics of Heat Transfer
## Topic: Classification of Partial Differential Equations (PDEs) - Elliptic, Parabolic, and Hyperbolic Equations

This module introduces the fundamental concepts of heat transfer and their mathematical representation using Partial Differential Equations (PDEs). A crucial aspect of solving these PDEs computationally is understanding their classification, as this dictates the appropriate numerical methods.

---

### 1. Introduction to Partial Differential Equations (PDEs)

**Definition:** A Partial Differential Equation (PDE) is a differential equation that contains unknown multivariable functions and their partial derivatives with respect to those variables.

**Relevance to Heat Transfer:** Many fundamental phenomena in heat transfer, such as conduction, convection, and radiation, are described by PDEs. These equations relate temperature, heat flux, time, and spatial coordinates.

*   **Example:** The steady-state heat conduction equation in one dimension is an Ordinary Differential Equation (ODE) if it depends on one spatial variable. However, in two or three dimensions or when considering time-dependent phenomena, it becomes a PDE.

**Course Outcome Alignment:**
*   **CO1 (K2):** To understand the basics of governing equations of fluid flow and heat transfer. This section establishes the mathematical foundation.
*   **CO2 (K2):** To understand PDE equations and its classification. This is the core of this topic.

---

### 2. Classification of Second-Order Linear PDEs

Second-order linear PDEs are the most common type encountered in heat transfer. Their classification is based on the coefficients of their second-order partial derivatives.

Consider a general second-order linear PDE in two independent variables, $x$ and $y$:

$A \frac{\partial^2 u}{\partial x^2} + B \frac{\partial^2 u}{\partial x \partial y} + C \frac{\partial^2 u}{\partial y^2} + D \frac{\partial u}{\partial x} + E \frac{\partial u}{\partial y} + F u = G(x, y)$

where $u(x, y)$ is the unknown function, and $A, B, C, D, E, F, G$ are coefficients that can be functions of $x$ and $y$.

**Classification Criterion:** The classification of such PDEs depends on the discriminant, $\Delta = B^2 - 4AC$.

*   **Elliptic PDEs:** If $\Delta < 0$ ($B^2 - 4AC < 0$)
*   **Parabolic PDEs:** If $\Delta = 0$ ($B^2 - 4AC = 0$)
*   **Hyperbolic PDEs:** If $\Delta > 0$ ($B^2 - 4AC > 0$)

**Important Point to Remember:** This classification is crucial because it dictates the behavior of the solution and the stability and accuracy of numerical methods used to solve them.

**Textbook/Reference Integration:**
*   **Sastry (2012):** Provides a foundational understanding of differential equations and their types. Chapters on ODEs and introductory concepts of PDEs would be relevant.
*   **Patankar (2017):** While focused on numerical methods, Patankar often implicitly discusses the nature of equations being solved. Understanding the classification helps in appreciating why certain numerical schemes are preferred for different types of problems (e.g., steady-state vs. transient).
*   **Anderson & Wendt (1995):** This reference is excellent for understanding the physical origins of these PDEs in fluid dynamics and heat transfer, and how their mathematical form relates to physical behavior.

---

### 3. Elliptic Partial Differential Equations

**Characteristics:**
*   **Discriminant:** $B^2 - 4AC < 0$
*   **Physical Phenomena:** Typically describe **steady-state** phenomena where there is no time dependence. The solution at any point depends on all boundary conditions.
*   **Domain of Dependence:** The solution at a point $(x, y)$ depends on the entire domain, not just a specific upstream or initial condition.
*   **Boundary Value Problems:** Usually associated with boundary value problems (BVPs), where conditions are specified on the boundaries of the domain.

**General Form (Canonical Form):**
$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = f(x, y)$ (Laplace Equation if $f(x,y)=0$, Poisson Equation if $f(x,y) \neq 0$)

**Examples in Heat Transfer:**
*   **Steady-state heat conduction in two or three dimensions:** When the temperature distribution is not changing with time.
    *   Consider a thin metal plate with heat applied at one point and dissipated from its edges. The temperature distribution across the plate at any given time (once it reaches steady-state) is governed by an elliptic PDE.
    *   **Governing Equation:** $\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} = 0$ (Laplace equation for no internal heat generation) or $\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} = -\frac{\dot{q}}{k}$ (Poisson equation for constant internal heat generation $\dot{q}$)
*   **Steady-state fluid flow (Stokes flow):** In certain low Reynolds number flow regimes.

**Numerical Considerations:**
*   **Methods:** Finite Difference Method (FDM), Finite Element Method (FEM), Finite Volume Method (FVM).
*   **Solvers:** Typically result in a system of linear algebraic equations, which can be solved using direct methods (e.g., Gaussian elimination for smaller systems) or iterative methods (e.g., Jacobi, Gauss-Seidel, SOR, Conjugate Gradient for larger systems).
*   **Stability:** Iterative methods are generally preferred for large systems. Convergence is influenced by the discretization and iterative scheme.

**Course Outcome Alignment:**
*   **CO1 (K2):** Governing equations like steady-state heat conduction are fundamental.
*   **CO2 (K2):** Understanding Laplace and Poisson equations as examples of elliptic PDEs.
*   **CO5 (K3):** Solving simple steady-state conduction problems falls under this category.

---

### 4. Parabolic Partial Differential Equations

**Characteristics:**
*   **Discriminant:** $B^2 - 4AC = 0$
*   **Physical Phenomena:** Typically describe **unsteady-state** phenomena (transient behavior) or diffusion processes. The solution at a point depends on initial conditions and boundary conditions along the direction of the "time-like" variable.
*   **Domain of Dependence:** The solution at a point $(x, t)$ depends on initial conditions and boundary conditions up to that time $t$. It does not depend on future time values.
*   **Initial Value Problems (IVPs) or Mixed Problems:** Usually associated with initial value problems (IVPs) where conditions are specified at an initial time (e.g., initial temperature distribution) and boundary conditions are specified over time.

**General Form (Canonical Form):**
$\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$ (Heat Equation in 1D)
where $\alpha$ is the thermal diffusivity.

**Examples in Heat Transfer:**
*   **Unsteady-state heat conduction:** When the temperature distribution within an object changes with time.
    *   Consider heating a metal rod from one end. The temperature at any point in the rod will change over time until it reaches a steady state. This transient behavior is described by a parabolic PDE.
    *   **Governing Equation (1D):** $\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$
*   **Diffusion of a substance:** The spread of a contaminant in a fluid over time.

**Numerical Considerations:**
*   **Methods:** Finite Difference Method (FDM), Finite Volume Method (FVM).
*   **Discretization:** Requires both spatial and temporal discretization.
*   **Solvers:** Often involves solving a system of linear algebraic equations at each time step.
*   **Stability:** The choice of temporal discretization (explicit vs. implicit) significantly affects stability. Explicit methods often have a stability constraint on the time step size (e.g., Courant-Friedrichs-Lewy - CFL condition), while implicit methods are generally unconditionally stable but may be computationally more expensive per time step.

**Course Outcome Alignment:**
*   **CO1 (K2):** Unsteady-state heat conduction is a core topic.
*   **CO2 (K2):** Understanding the 1D heat equation as a parabolic PDE.
*   **CO5 (K3):** Solving simple unsteady conduction problems using numerical techniques directly relates to this.

---

### 5. Hyperbolic Partial Differential Equations

**Characteristics:**
*   **Discriminant:** $B^2 - 4AC > 0$
*   **Physical Phenomena:** Typically describe phenomena that propagate with a finite speed, such as wave propagation and vibrations. The solution at a point depends on initial conditions and boundary conditions along characteristic lines.
*   **Domain of Dependence:** The solution at a point $(x, t)$ depends on initial conditions and boundary conditions along specific lines called characteristics. Information propagates along these lines.
*   **Initial Value Problems (IVPs):** Usually associated with initial value problems.

**General Form (Canonical Form):**
$\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$ (Wave Equation in 1D)
where $c$ is the wave speed.

**Examples in Heat Transfer:**
*   **Wave propagation of thermal disturbances (rare in typical heat transfer contexts):** While less common in standard heat transfer problems involving diffusion, hyperbolic equations can appear in phenomena involving very rapid thermal changes where the speed of propagation of thermal information is significant. This is more relevant in areas like shock waves or rapid material processing where heat diffusion is not the dominant mode.
*   **Transient heat transfer in situations with very high wave speeds:** For example, in some plasma physics or extreme thermal shock scenarios where the assumption of infinite speed of heat propagation (implicit in parabolic equations) breaks down.

**Numerical Considerations:**
*   **Methods:** Finite Difference Method (FDM), Finite Volume Method (FVM).
*   **Challenges:** Numerical methods for hyperbolic equations need to accurately capture the propagation of discontinuities (shocks) if present. Techniques like upwind differencing or flux limiters are often employed.
*   **Stability:** Explicit methods are often used, with strict stability criteria based on the characteristic speeds.

**Course Outcome Alignment:**
*   **CO1 (K2):** While less common, understanding the types of governing equations is important.
*   **CO2 (K2):** Understanding the wave equation as an example of a hyperbolic PDE.

---

### 6. Summary Table of PDE Classifications

| Feature               | Elliptic PDEs                               | Parabolic PDEs                                | Hyperbolic PDEs                                   |
| :-------------------- | :------------------------------------------ | :-------------------------------------------- | :------------------------------------------------ |
| **Discriminant**      | $B^2 - 4AC < 0$                             | $B^2 - 4AC = 0$                               | $B^2 - 4AC > 0$                                   |
| **Time Dependence**   | Steady-state (no time dependence)           | Unsteady-state (time-dependent)               | Unsteady-state (time-dependent, wave propagation) |
| **Physical Phenomena**| Equilibrium, steady diffusion, steady flow  | Diffusion, transient conduction, convection   | Wave propagation, vibrations, advection           |
| **Domain of Dependence**| Entire domain                               | Initial conditions & history                  | Initial conditions & characteristics              |
| **Problem Type**      | Boundary Value Problems (BVPs)              | Initial Value Problems (IVPs) / Mixed         | Initial Value Problems (IVPs)                     |
| **General Canonical Form** | $\nabla^2 u = f$                          | $\frac{\partial u}{\partial t} = \alpha \nabla^2 u$ | $\frac{\partial^2 u}{\partial t^2} = c^2 \nabla^2 u$ |
| **Heat Transfer Example** | Steady-state conduction in 2D/3D            | Unsteady-state conduction in 1D/2D/3D         | Thermal wave propagation (rare)                   |

**Important Point to Remember:** The classification directly impacts the choice of numerical discretization and solution algorithms. Elliptic problems require solving a coupled system for all points simultaneously, while parabolic and hyperbolic problems can be solved in a time-marching fashion.

---

### 7. Practice Questions and Exercises

**Question 1:**
Identify the type of PDE represented by the following equation, and explain your reasoning:
$\frac{\partial T}{\partial t} = 0.005 \frac{\partial^2 T}{\partial x^2} + 2 \frac{\partial T}{\partial x}$

**Answer:**
This equation is of the form $\frac{\partial T}{\partial t} = A \frac{\partial^2 T}{\partial x^2} + D \frac{\partial T}{\partial x}$.
Here, the highest order derivatives with respect to $x$ are second-order ($\frac{\partial^2 T}{\partial x^2}$), and there's a first-order derivative with respect to $t$ ($\frac{\partial T}{\partial t}$). This structure is characteristic of **parabolic** PDEs.
In the general classification scheme for second-order PDEs in two variables, if one variable is time ($t$) and the other is space ($x$), the equation is parabolic if it contains a second-order spatial derivative and a first-order time derivative, and no higher-order time derivatives. The convective term ($2 \frac{\partial T}{\partial x}$) doesn't change the fundamental classification based on the discriminant $B^2 - 4AC$ as it's a first-order term.

**Question 2:**
The steady-state temperature distribution in a 2D object is governed by the Poisson equation:
$\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} = -\frac{\dot{q}}{k}$
What type of PDE is this, and what does its form imply about the physical problem it represents?

**Answer:**
This is an **elliptic** PDE.
The general form is $A \frac{\partial^2 u}{\partial x^2} + B \frac{\partial^2 u}{\partial x \partial y} + C \frac{\partial^2 u}{\partial y^2} = G(x, y)$.
In this case, $A=1$, $C=1$, $B=0$.
The discriminant is $\Delta = B^2 - 4AC = 0^2 - 4(1)(1) = -4$.
Since $\Delta < 0$, the PDE is elliptic.
This form implies that the problem is **steady-state**. The solution at any point within the domain is influenced by the conditions at all boundaries of the domain. There is no time dependence, and the system has reached equilibrium.

**Question 3:**
Consider a simplified equation for heat transfer with very high wave speeds, often modeled as:
$\frac{\partial^2 T}{\partial t^2} = c^2 \frac{\partial^2 T}{\partial x^2}$
What type of PDE is this, and what physical phenomenon does it typically describe?

**Answer:**
This is a **hyperbolic** PDE.
The general form is $A \frac{\partial^2 u}{\partial x^2} + B \frac{\partial^2 u}{\partial x \partial y} + C \frac{\partial^2 u}{\partial y^2} + \dots = 0$. For two independent variables $x$ and $t$, this is often written as:
$\frac{\partial^2 T}{\partial t^2} - c^2 \frac{\partial^2 T}{\partial x^2} = 0$
Comparing to the general second-order linear PDE form $A u_{xx} + B u_{xt} + C u_{tt} + \dots = 0$ where $u$ depends on $x$ and $t$:
Here, $u_{tt}$ is $\frac{\partial^2 T}{\partial t^2}$ and $u_{xx}$ is $\frac{\partial^2 T}{\partial x^2}$.
We can see this relates to the general form where the roles of $x$ and $y$ might be swapped or considered in a different context. If we consider $t$ as one variable and $x$ as another, and rewrite the general form with $x \to t$ and $y \to x$:
$A' \frac{\partial^2 u}{\partial t^2} + B' \frac{\partial^2 u}{\partial t \partial x} + C' \frac{\partial^2 u}{\partial x^2} = G(t, x)$
In our case: $1 \cdot \frac{\partial^2 T}{\partial t^2} - c^2 \cdot \frac{\partial^2 T}{\partial x^2} = 0$.
So, $A'=1$, $B'=0$, $C'=-c^2$.
The discriminant is $B'^2 - 4A'C' = 0^2 - 4(1)(-c^2) = 4c^2$.
Since $4c^2 > 0$ (assuming $c \neq 0$), the PDE is hyperbolic.
This equation typically describes phenomena involving **wave propagation**, such as the vibration of a string or the propagation of acoustic waves. In thermal contexts, it can model the rapid propagation of thermal signals where diffusion is negligible compared to the wave speed.

---

### 8. Key Takeaways and Important Points to Remember

*   **Classification is Key:** The classification of a PDE (elliptic, parabolic, hyperbolic) is fundamental for selecting appropriate numerical methods and understanding the physical behavior of the system being modeled.
*   **Steady vs. Unsteady:** Elliptic PDEs usually represent steady-state problems, while parabolic and hyperbolic PDEs represent time-dependent (unsteady-state) problems.
*   **Domain of Dependence:** Understanding how the solution at a point depends on initial/boundary conditions is crucial for numerical stability and accuracy. Elliptic solutions depend on the entire domain, parabolic on past history, and hyperbolic on information propagating along characteristics.
*   **Heat Equation = Parabolic:** The most common PDE in transient heat transfer, the heat equation, is parabolic.
*   **Laplace/Poisson Equation = Elliptic:** Steady-state heat conduction without sources is described by the Laplace equation (elliptic), and with sources by the Poisson equation (also elliptic).
*   **Wave Equation = Hyperbolic:** Hyperbolic equations are less common in standard heat transfer but are important for phenomena involving wave propagation.
*   **Numerical Implications:** Elliptic problems often lead to large, sparse, and symmetric linear systems. Parabolic and hyperbolic problems can be solved in a time-marching fashion, with explicit methods often having time-step restrictions for stability, while implicit methods are generally more stable but computationally intensive per step.

---

### 9. Alignment with Course Outcomes

*   **CO1 (K2):** This entire topic directly addresses the understanding of governing equations for heat transfer by explaining their mathematical classification.
*   **CO2 (K2):** This topic is the direct subject matter, explaining PDE classification and providing examples.
*   **CO5 (K3):** By understanding the nature of the PDEs (steady-state vs. unsteady-state), learners can better grasp the numerical approaches needed to solve problems like steady and unsteady conduction.

---

This concludes the notes for Module 1, Topic: Classification of Partial Differential Equations. The next steps in the course will build upon this foundation by introducing numerical techniques for solving these types of equations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
