---
title: "Mathematical Modelling of field problems in Engineering"
subject: "FINITE ELEMENT METHODS"
module: "Module 1: Introduction FEM"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf480446383d"
status: "completed"
scrapedAt: "2026-05-20T18:03:51.214Z"
---
# FINITE ELEMENT METHODS - Module 1: Introduction to FEM

## Topic: Mathematical Modelling of Field Problems in Engineering

This module introduces the fundamental concepts of the Finite Element Method (FEM) and its application to solving various engineering problems. We will begin by understanding how physical phenomena are translated into mathematical equations and then explore the basic steps involved in the FEM procedure.

---

### 1. Introduction to Field Problems in Engineering

Field problems in engineering involve the study of how a certain quantity (the "field variable" or "dependent variable") varies across a spatial domain. This quantity is typically governed by a set of differential equations.

**Key Concepts & Definitions:**

*   **Field Variable:** The unknown quantity that varies across the domain. Examples include:
    *   Temperature in heat transfer problems.
    *   Displacement in structural mechanics problems.
    *   Velocity and pressure in fluid mechanics problems.
    *   Electric potential in electrostatics problems.
    *   Concentration in diffusion problems.
*   **Domain ($\Omega$):** The physical region where the field variable is defined. This could be a 1D rod, a 2D plate, or a 3D solid.
*   **Governing Differential Equation:** The mathematical equation that describes the behavior of the field variable within the domain. These are typically Partial Differential Equations (PDEs).
*   **Boundary Conditions (BCs):** Conditions specified on the boundary of the domain that constrain the solution. These are crucial for obtaining a unique solution.
    *   **Dirichlet Boundary Conditions (Essential Boundary Conditions):** Specify the value of the field variable itself on the boundary (e.g., fixed temperature, zero displacement).
    *   **Neumann Boundary Conditions (Natural Boundary Conditions):** Specify the derivative of the field variable (or a related quantity like flux) on the boundary (e.g., heat flux, applied force).
    *   **Mixed Boundary Conditions:** A combination of Dirichlet and Neumann conditions on different parts of the boundary.

**Learning Outcomes Covered:**

*   **CO1 (K2):** To understand the governing equations of various physical phenomena and basic procedure of FEM.

---

### 2. Mathematical Modelling of Physical Phenomena

The first step in solving any engineering problem using FEM is to develop a mathematical model that accurately represents the physical behavior. This involves identifying the relevant physical principles and formulating them as differential equations.

**2.1. General Formulation of Differential Equations**

Many field problems in engineering can be expressed in a general form of a second-order PDE.

**Common Forms:**

*   **Elliptic Equations:** Typically used for steady-state problems (e.g., steady-state heat conduction, electrostatics).
    *   Example: Laplace's Equation ($\nabla^2 \phi = 0$) or Poisson's Equation ($\nabla^2 \phi = -f$).
*   **Parabolic Equations:** Typically used for transient or time-dependent problems where the behavior at a future time depends on the current time (e.g., transient heat conduction, diffusion).
    *   Example: Heat Equation ($\frac{\partial T}{\partial t} = \alpha \nabla^2 T$).
*   **Hyperbolic Equations:** Typically used for wave propagation problems (e.g., wave equation).
    *   Example: Wave Equation ($\frac{\partial^2 u}{\partial t^2} = c^2 \nabla^2 u$).

**General Second-Order PDE in One Dimension (for simplicity):**

Consider a 1D problem on a domain $x \in [a, b]$. A general second-order PDE can be written as:

$$
\frac{d}{dx} \left( P(x) \frac{du}{dx} \right) + Q(x) u = f(x)
$$

where:
*   $u(x)$ is the field variable.
*   $P(x)$ and $Q(x)$ are coefficients related to the material properties and geometry.
*   $f(x)$ is a source term.

**Boundary Conditions for the 1D Case:**

*   **Dirichlet:** $u(a) = u_a$
*   **Neumann:** $-P(b) \frac{du}{dx}(b) = q_b$ (where $q_b$ is a flux or derivative value)
*   **Mixed:** $P(a) \frac{du}{dx}(a) + k(a) u(a) = g_a$

**References:**

*   **Reddy (Chapter 1, 2):** Discusses the classification of PDEs and their physical origins in various fields like elasticity, heat transfer, and fluid mechanics.
*   **Cook (Chapter 1):** Provides an overview of differential equations that govern physical phenomena relevant to FEM.
*   **Bhavikatti (Chapter 1):** Introduces the concept of governing equations and boundary conditions for different engineering problems.
*   **Fish & Belytschko (Chapter 1):** Explores the mathematical formulation of physical problems as PDEs.

**2.2. Examples of Mathematical Models:**

**Example 1: Steady-State Heat Conduction in a 1D Rod**

Consider a 1D rod of length $L$. The temperature distribution $T(x)$ is governed by the steady-state heat conduction equation:

$$
\frac{d}{dx} \left( k A \frac{dT}{dx} \right) + q(x) = 0
$$

where:
*   $T(x)$: Temperature at position $x$.
*   $k$: Thermal conductivity of the material.
*   $A$: Cross-sectional area of the rod.
*   $q(x)$: Heat generated per unit length at position $x$.

**Boundary Conditions:**

*   At $x=0$: $T(0) = T_0$ (Prescribed temperature - Dirichlet BC).
*   At $x=L$: $-k A \frac{dT}{dx}(L) = Q_L$ (Prescribed heat flux leaving the end - Neumann BC, where $Q_L$ is the heat flow rate).

**Example 2: Torsion of a Circular Shaft**

Consider a circular shaft subjected to a torque. The warping function $\phi(\theta, z)$ (related to the displacement) satisfies a form of Poisson's equation. For a shaft with constant shear modulus $G$ and radius $R$, the governing equation is:

$$
\nabla^2 \phi = 2G \theta
$$

where $\theta$ is the twist per unit length. On the boundary (the outer surface of the shaft), the warping function is usually zero: $\phi(R, z) = 0$.

**Example 3: Deflection of a Beam Under Load**

For a beam with constant flexural rigidity $EI$, the transverse deflection $v(x)$ under a distributed load $q(x)$ is governed by the Euler-Bernoulli beam equation:

$$
EI \frac{d^4v}{dx^4} = q(x)
$$

This is a fourth-order PDE, which FEM can also handle. Boundary conditions for beams typically involve specifying deflection and slope (Dirichlet) or shear force and bending moment (related to derivatives - Neumann).

---

### 3. The Basic Procedure of the Finite Element Method

FEM is a numerical technique that discretizes a complex domain into smaller, simpler subdomains called "finite elements." The solution within each element is approximated by simple polynomial functions called "shape functions." By assembling the equations for all elements, we can solve for the unknown field variables at discrete points called "nodes."

**Learning Outcomes Covered:**

*   **CO1 (K2):** To understand the governing equations of various physical phenomena and basic procedure of FEM.

**Steps of the FEM Procedure:**

1.  **Discretization of the Domain:** Divide the continuous physical domain ($\Omega$) into a collection of finite elements ($e = 1, 2, ..., N_{el}$). These elements are interconnected at points called nodes.
    *   *Example:* A 2D plate can be discretized into triangular or quadrilateral elements. A 1D rod can be discretized into line segments.
2.  **Selection of Element Type and Shape Functions:** Choose an appropriate element type (e.g., linear, quadratic) and define the interpolation (shape) functions within each element. These functions approximate the behavior of the field variable within the element based on the nodal values.
    *   *Key Idea:* The shape functions should be simple polynomials and satisfy certain continuity requirements.
3.  **Derivation of Element Equations (Stiffness Matrix and Load Vector):** Using the governing differential equation and boundary conditions, derive a set of algebraic equations that relate the nodal values of the field variable within an element. This typically involves applying a weighted residual method (e.g., Galerkin's method) or an energy method (e.g., principle of minimum potential energy). This results in an "element stiffness matrix" ($[k^{(e)}]$) and an "element load vector" ($\{f^{(e)}\}$).
    *   *General Element Equation Form:* $[k^{(e)}] \{u^{(e)}\} = \{f^{(e)}\}$
    *   Where $\{u^{(e)}\}$ is the vector of unknown nodal values for the element.
4.  **Assembly of Global Equations:** Combine the element equations into a single system of global algebraic equations that represents the entire discretized domain. This process involves mapping element nodal degrees of freedom to global nodal degrees of freedom and summing contributions from adjacent elements.
    *   *Global Equation Form:* $[K] \{U\} = \{F\}$
    *   Where $[K]$ is the global stiffness matrix, $\{U\}$ is the global vector of unknown nodal values, and $\{F\}$ is the global load vector.
5.  **Application of Boundary Conditions:** Modify the global system of equations to incorporate the specified boundary conditions. This ensures that the solution satisfies the prescribed values or constraints on the domain boundaries.
6.  **Solution of Global Equations:** Solve the resulting system of linear (or non-linear) algebraic equations for the unknown nodal values $\{U\}$. This is typically done using matrix inversion, Gaussian elimination, or iterative solvers.
7.  **Post-processing:** Calculate derived quantities such as strains, stresses, heat fluxes, etc., from the nodal solution values using the shape functions and constitutive relations. Visualize the results (e.g., contour plots of temperature, displacement plots).

**Important Points to Remember (CO1):**

*   FEM approximates continuous fields with discrete representations using nodes and elements.
*   Shape functions are crucial for interpolating the field variable within an element.
*   The governing differential equation is transformed into a system of algebraic equations.
*   Boundary conditions are essential for a unique and physically meaningful solution.

---

### 4. Practice Questions and Exercises (Module 1)

**Question 1:**
Classify the following differential equations as elliptic, parabolic, or hyperbolic:
a) $\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$
b) $\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$
c) $\frac{d}{dx} \left( k \frac{du}{dx} \right) + q = 0$
d) $\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 0$

**Answer 1:**
a) Parabolic (Heat equation)
b) Hyperbolic (Wave equation)
c) Elliptic (Steady-state diffusion/heat conduction in 1D)
d) Elliptic (Continuity equation in 2D, can be classified based on the system)

**Question 2:**
Describe the two main types of boundary conditions encountered in field problems and provide a physical example for each.

**Answer 2:**
*   **Dirichlet Boundary Conditions (Essential BCs):** Specify the value of the field variable itself on the boundary.
    *   *Example:* In heat transfer, setting the temperature of a surface to a constant value. In structural mechanics, fixing a point to have zero displacement.
*   **Neumann Boundary Conditions (Natural BCs):** Specify the derivative of the field variable (or a related flux quantity) on the boundary.
    *   *Example:* In heat transfer, specifying the heat flux across a boundary (e.g., an insulated boundary where flux is zero). In structural mechanics, specifying a force or traction on a surface.

**Question 3:**
List the seven fundamental steps involved in the Finite Element Method.

**Answer 3:**
1.  Discretization of the domain.
2.  Selection of element type and shape functions.
3.  Derivation of element equations.
4.  Assembly of global equations.
5.  Application of boundary conditions.
6.  Solution of global equations.
7.  Post-processing.

---

This concludes Module 1. We have laid the groundwork by understanding the nature of field problems and the overall strategy of FEM. The subsequent modules will delve deeper into each of these steps.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
