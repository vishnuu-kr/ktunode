---
title: "Mathematical Modelling of field problems in Engineering"
subject: "FINITE ELEMENT METHODS"
module: "Module 1: Introduction FEM"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446428a"
status: "completed"
scrapedAt: "2026-05-20T18:12:49.579Z"
---
# FINITE ELEMENT METHODS - Module 1: Introduction to FEM

## Topic: Mathematical Modelling of Field Problems in Engineering

### 1. Introduction

This module introduces the fundamental concepts of the Finite Element Method (FEM) and its application to solving various engineering problems. We will begin by understanding how real-world engineering problems are translated into mathematical models.

### 2. Mathematical Modelling of Field Problems in Engineering

**2.1 What is Mathematical Modelling?**

Mathematical modelling is the process of creating an abstract representation of a real-world system or phenomenon using mathematical concepts and language. This model can then be used to analyze the behavior of the system, predict its response to different conditions, and design solutions.

**2.2 Why Mathematical Modelling in Engineering?**

*   **Understanding Physical Phenomena:** To gain insights into the underlying physical principles governing a system.
*   **Predicting Behavior:** To forecast how a system will respond under various loads, boundary conditions, or environmental changes.
*   **Design and Optimization:** To develop and refine designs for efficiency, safety, and performance.
*   **Cost Reduction:** To avoid expensive and time-consuming physical experiments by simulating scenarios virtually.
*   **Complexity Management:** To break down complex problems into manageable components.

**2.3 Types of Field Problems in Engineering**

Field problems are characterized by the presence of a physical quantity (a "field") that varies continuously over space and time. These problems are typically governed by partial differential equations (PDEs).

**2.3.1 Classification of PDEs:**

PDEs can be classified based on their order and the nature of their solutions. A common classification is based on the principal part of the equation:

*   **Elliptic PDEs:** Typically describe steady-state phenomena (no time dependence). They are characterized by diffusion or equilibrium.
    *   **Example:** Steady-state heat conduction, electrostatics, potential flow.
    *   **Governing Equation (Laplace's Equation):** $\nabla^2 u = 0$ or $\nabla^2 u = f$ (Poisson's equation), where $u$ is the field variable and $f$ is a source term.
    *   **Boundary Conditions:** Typically Dirichlet (prescribed value of $u$) and Neumann (prescribed gradient of $u$).

*   **Parabolic PDEs:** Typically describe transient phenomena (time dependence) involving diffusion or heat transfer.
    *   **Example:** Transient heat conduction, diffusion processes.
    *   **Governing Equation (Heat Equation):** $\frac{\partial u}{\partial t} - \nabla^2 u = 0$ or $\frac{\partial u}{\partial t} - \nabla^2 u = f$.
    *   **Boundary Conditions:** Similar to elliptic equations, often with an initial condition specifying the state of the field at $t=0$.

*   **Hyperbolic PDEs:** Typically describe wave propagation or vibration phenomena (time dependence).
    *   **Example:** Wave equation, vibration of strings or bars.
    *   **Governing Equation (Wave Equation):** $\frac{\partial^2 u}{\partial t^2} - c^2 \nabla^2 u = 0$, where $c$ is the wave speed.
    *   **Boundary Conditions:** Similar to parabolic equations, often with initial conditions for both the field variable and its time derivative.

**2.4 Formulation of Mathematical Models**

The process of mathematical modelling involves:

1.  **Identifying the Physics:** Understanding the physical phenomena and principles governing the problem.
2.  **Defining Variables:** Identifying the independent variables (e.g., space coordinates $x, y, z$, time $t$) and dependent variables (field variables, e.g., temperature $T$, displacement $u$, pressure $p$).
3.  **Developing Governing Equations:** Deriving the fundamental mathematical equations that describe the behavior of the field variable. These are often PDEs.
4.  **Establishing Constitutive Relations:** Defining relationships between different physical quantities (e.g., stress-strain relationship in solid mechanics, Fourier's law in heat transfer).
5.  **Specifying Boundary and Initial Conditions:** Defining the constraints on the system at its boundaries and at the initial time.
    *   **Boundary Conditions (BCs):**
        *   **Dirichlet BCs:** Specify the value of the field variable on the boundary (e.g., fixed temperature, fixed displacement).
        *   **Neumann BCs:** Specify the flux or derivative of the field variable on the boundary (e.g., heat flux, force).
        *   **Robin/Mixed BCs:** A combination of Dirichlet and Neumann conditions.
    *   **Initial Conditions (ICs):** Specify the state of the system at the beginning of the time domain (for transient problems).

**2.5 Examples of Field Problems and their Mathematical Models**

**(a) Steady-State Heat Conduction in a Rod (1D)**

*   **Physics:** Heat transfer through conduction.
*   **Field Variable:** Temperature $T(x)$.
*   **Governing Equation (Poisson's Equation in 1D):**
    *   In the absence of internal heat generation: $\frac{d}{dx} \left( k \frac{dT}{dx} \right) = 0$, where $k$ is thermal conductivity.
    *   If $k$ is constant: $k \frac{d^2T}{dx^2} = 0 \implies \frac{d^2T}{dx^2} = 0$.
*   **Constitutive Relation:** Fourier's Law: Heat flux $q = -k \frac{dT}{dx}$.
*   **Boundary Conditions:**
    *   Prescribed temperature at ends: $T(0) = T_0$, $T(L) = T_L$.
    *   Prescribed heat flux at ends: $-k \frac{dT}{dx}(0) = q_0$, $-k \frac{dT}{dx}(L) = q_L$.
    *   Convection at ends: $-k \frac{dT}{dx}(0) = h(T(0) - T_\infty)$.

**(b) Vibrating String (1D Wave Equation)**

*   **Physics:** Wave propagation along a string.
*   **Field Variable:** Transverse displacement $u(x, t)$.
*   **Governing Equation (Wave Equation in 1D):**
    *   $\rho A \frac{\partial^2 u}{\partial t^2} = T \frac{\partial^2 u}{\partial x^2}$, where $\rho$ is density, $A$ is cross-sectional area, and $T$ is tension.
    *   $\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$, where $c^2 = \frac{T}{\rho A}$ is the wave speed squared.
*   **Constitutive Relation:** Tension $T$ and material properties $\rho, A$.
*   **Boundary Conditions:**
    *   Fixed ends: $u(0, t) = 0$, $u(L, t) = 0$.
    *   Free end (less common for strings): force at the end is zero.
*   **Initial Conditions:**
    *   Initial displacement: $u(x, 0) = f(x)$.
    *   Initial velocity: $\frac{\partial u}{\partial t}(x, 0) = g(x)$.

**(c) Elastic Deformation of a Beam (2D or 3D Structural Mechanics)**

*   **Physics:** Stress and strain in a structural element.
*   **Field Variables:** Displacement components $u(x,y)$, $v(x,y)$.
*   **Governing Equations:** Derived from equilibrium equations and constitutive relations (Hooke's Law). For small deformations, these often lead to elliptic PDEs.
    *   Example (Navier's equations for elasticity):
        $(\lambda + \mu) \nabla (\nabla \cdot \mathbf{u}) + \mu \nabla^2 \mathbf{u} + \mathbf{f} = 0$, where $\mathbf{u} = (u, v)$ is the displacement vector, $\lambda$ and $\mu$ are Lamé parameters, and $\mathbf{f}$ is the body force vector.
*   **Constitutive Relation:** Hooke's Law relating stress ($\sigma$) and strain ($\epsilon$): $\sigma = E \epsilon$ (for 1D), or $\boldsymbol{\sigma} = \mathbf{C} \boldsymbol{\epsilon}$ (for 3D), where $E$ is Young's Modulus and $\mathbf{C}$ is the stiffness matrix.
*   **Boundary Conditions:**
    *   Prescribed displacements (e.g., fixed supports).
    *   Prescribed tractions (forces) on the boundary.

**2.6 The Need for Numerical Methods**

Many real-world field problems, especially those with complex geometries, material properties, and boundary conditions, cannot be solved analytically using closed-form mathematical solutions. This necessitates the use of numerical methods.

**2.7 Introduction to Finite Element Method (FEM)**

FEM is a powerful numerical technique used to find approximate solutions to boundary value problems described by PDEs. It involves:

1.  **Discretization:** Dividing the continuous physical domain into a finite number of smaller, interconnected subdomains called "finite elements."
2.  **Approximation:** Within each element, the unknown field variable is approximated using simple functions (usually polynomials), called "shape functions" or "interpolation functions."
3.  **Element Equations:** Deriving a set of algebraic equations for each element that relate the unknown nodal values of the field variable.
4.  **Assembly:** Assembling the element equations into a global system of equations that represents the entire domain.
5.  **Solution:** Solving the global system of algebraic equations to obtain the approximate values of the field variable at the nodes of the discretized domain.
6.  **Post-processing:** Interpreting the nodal results to obtain quantities of interest (e.g., stresses, strains, heat fluxes).

**Learning Outcome Alignment:**

*   **CO1 (Knowledge Level K2):** This section directly addresses the governing equations of various physical phenomena (heat conduction, wave propagation, elasticity) and introduces the basic procedure of FEM (discretization, approximation, assembly, solution).

**Key Points to Remember:**

*   Mathematical modelling translates physical problems into solvable mathematical forms.
*   Field problems are governed by PDEs.
*   Elliptic, parabolic, and hyperbolic PDEs describe different types of phenomena.
*   Boundary and initial conditions are crucial for defining a unique solution.
*   Analytical solutions are often not possible for complex problems, leading to the need for numerical methods like FEM.
*   FEM discretizes the domain and approximates the solution within each element.

---

### 3. Practice Questions and Exercises

**Question 1:** Classify the following PDEs and state the type of physical phenomenon they typically represent:
    a) $\frac{\partial u}{\partial t} - 2\frac{\partial^2 u}{\partial x^2} = 0$
    b) $\frac{\partial^2 u}{\partial t^2} - 9\frac{\partial^2 u}{\partial x^2} = 0$
    c) $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 10$

**Answer 1:**
    a) **Parabolic:** Represents diffusion or transient heat conduction.
    b) **Hyperbolic:** Represents wave propagation.
    c) **Elliptic:** Represents a steady-state problem, possibly with a source term.

**Question 2:** Consider a 1D rod with one end fixed at $T=100^\circ C$ and the other end exposed to convection with an ambient temperature of $T_\infty = 20^\circ C$ and a convection coefficient $h=5 W/(m^2 \cdot K)$. Write down the governing differential equation and the boundary conditions for steady-state heat conduction, assuming no internal heat generation and constant thermal conductivity $k$.

**Answer 2:**
    *   **Governing Equation:** Assuming constant thermal conductivity $k$, the governing equation is $\frac{d^2T}{dx^2} = 0$.
    *   **Boundary Conditions:**
        *   At $x=0$ (fixed end): Dirichlet condition $T(0) = 100^\circ C$.
        *   At $x=L$ (convective end): Robin (mixed) condition $-k \frac{dT}{dx}(L) = h(T(L) - T_\infty)$.

**Question 3:** Briefly explain the main steps involved in the Finite Element Method.

**Answer 3:**
    The main steps in FEM are:
    1.  **Discretization:** Divide the domain into finite elements.
    2.  **Element Approximation:** Approximate the field variable within each element using shape functions.
    3.  **Element Equations Formulation:** Derive algebraic equations for each element.
    4.  **Global Assembly:** Combine element equations into a global system.
    5.  **Boundary/Initial Conditions Application:** Incorporate the specified conditions.
    6.  **Solution:** Solve the global system of equations.
    7.  **Post-processing:** Calculate derived quantities from nodal results.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### 4. References and Further Reading

*   **An introduction to Finite Element Method by J N Reddy (McGrawHillEducation, ThirdEdition,2009):** Chapter 1 provides a good overview of mathematical models of physical phenomena and the motivation for FEM.
*   **Concept and application of Finite Element method by Robert D Cook (Wiley, ThirdEdition,2008):** Chapter 1 discusses the general concepts of modelling and problem formulation.
*   **Finite Element Analysis, by S SBhavikatti, (New Age Publisher, Third edition,2008):** Chapter 1 covers the introduction to FEM and the mathematical formulation of problems.
*   **A First Course in Finite Elements by Jacob Fish Rensselaer ,Ted Belytschko (John Wiley & Sons, Ltd, Second edition,2007):** Chapter 1 introduces the basic concepts of mathematical modelling and the FEM approach.
*   **Applied Finite Element Analysis by Larry J Segerlind (Johny Wiley and sons, Second Edition,2010):** Chapter 1 discusses the necessity of numerical methods and the FEM approach.
*   **Applied Finite element Analysis by G Ramamurthi (I K International Publishing House Pvt. Ltd, Second Edition):** Chapter 1 provides an introduction to FEM and its applications.
*   **Fundamentals of Finite Element Methods by David V Hutton (McGrawHillEducation, ThirdEdition,2009):** Chapter 1 introduces the general concepts of FEM and the types of problems it can solve.

---
**(End of Module 1, Topic 1 Notes)**