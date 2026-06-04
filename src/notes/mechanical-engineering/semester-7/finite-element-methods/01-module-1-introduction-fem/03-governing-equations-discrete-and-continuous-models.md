---
title: "Governing Equations – Discrete and continuous models"
subject: "FINITE ELEMENT METHODS"
module: "Module 1: Introduction FEM"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446428b"
status: "completed"
scrapedAt: "2026-05-20T18:12:50.280Z"
---
# Module 1: Introduction to FEM - Governing Equations: Discrete and Continuous Models

## 1. Introduction to Governing Equations in FEM

The Finite Element Method (FEM) is a powerful numerical technique used to solve complex engineering and physics problems that are often described by partial differential equations (PDEs). At its core, FEM involves discretizing a continuous physical domain into smaller, simpler subdomains called "finite elements." The behavior of the system within each element is then approximated using simple mathematical functions.

This module focuses on understanding the governing equations that describe various physical phenomena and the fundamental procedure of FEM. This aligns with **Course Outcome 1 (CO1: To understand the governing equations of various physical phenomena and basic procedure of FEM. Knowledge Level: K2)**.

### 1.1 What are Governing Equations?

Governing equations are mathematical expressions, typically differential equations, that describe the fundamental physical laws governing a particular phenomenon. These equations capture the relationship between various physical quantities (e.g., displacement, temperature, pressure, electric potential) and their rates of change in space and time.

**Key Concepts:**

*   **Differential Equations:** Equations involving derivatives of unknown functions. They are essential for describing continuous systems.
*   **Physical Laws:** Governing equations are derived from fundamental physical principles such as conservation of mass, momentum, energy, and charge.

### 1.2 Continuous vs. Discrete Models

FEM bridges the gap between continuous mathematical models and discrete numerical solutions.

#### 1.2.1 Continuous Models

*   **Definition:** A continuous model represents a physical system using mathematical functions defined over an unbroken domain. These models are typically described by differential equations.
*   **Characteristics:**
    *   The domain is continuous, meaning it can be divided into an infinite number of points.
    *   Variables and their derivatives are defined everywhere in the domain.
    *   Analytical solutions can be found for simple cases, but are often impossible for complex geometries or boundary conditions.
*   **Examples:**
    *   **Heat Conduction:** $\nabla \cdot (k \nabla T) + Q = 0$ (where T is temperature, k is thermal conductivity, Q is heat generation).
    *   **Structural Mechanics (Elasticity):** $\nabla \cdot \sigma + b = 0$ (where $\sigma$ is stress, b is body force density), along with constitutive relations like Hooke's Law: $\sigma = D \epsilon$ and strain-displacement relations: $\epsilon = \nabla u$. (where u is displacement, $\epsilon$ is strain, D is material stiffness matrix).
    *   **Fluid Mechanics (Navier-Stokes):** Equations describing conservation of mass and momentum.
*   **Textbook References:**
    *   Reddy (2009) extensively covers the derivation of governing equations for various fields like elasticity, heat transfer, and fluid mechanics. Chapter 2, "Variational and Weighted Residual Methods," often begins with the continuous formulation.
    *   Cook (2008) also introduces governing equations as the starting point for formulating FEM problems in Chapter 1, "Introduction."

#### 1.2.2 Discrete Models

*   **Definition:** A discrete model approximates the continuous system by dividing it into a finite number of interconnected "elements." The behavior within each element is approximated by simple functions (shape functions), and the governing equations are formulated at specific points called "nodes" associated with these elements.
*   **Characteristics:**
    *   The domain is discretized into a finite number of elements.
    *   The unknown variables (e.g., displacements, temperatures) are approximated at nodes.
    *   The solution is obtained by assembling element equations into a global system of algebraic equations.
*   **FEM's Role:** FEM converts the continuous problem described by PDEs into a system of algebraic equations, which can be solved using computers.
*   **Process Overview:**
    1.  **Discretization:** Divide the continuous domain into finite elements.
    2.  **Element Formulation:** Approximate the solution within each element using shape functions and derive element equations.
    3.  **Assembly:** Combine element equations to form a global system of equations for the entire domain.
    4.  **Boundary Conditions:** Apply known values of variables or their derivatives at the boundaries.
    5.  **Solution:** Solve the system of algebraic equations to find the nodal values.
    6.  **Post-processing:** Calculate other quantities of interest (e.g., stresses, strains) from nodal values.

### 1.3 Why Convert Continuous to Discrete?

*   **Analytical Solutions are Rare:** Most real-world problems have complex geometries, material properties, and boundary conditions that make analytical solutions impossible.
*   **Computational Solvability:** Computers excel at solving large systems of algebraic equations, not complex differential equations directly over continuous domains.
*   **Flexibility:** FEM allows for the modeling of arbitrary shapes and the inclusion of complex material behavior and loading conditions.

## 2. Governing Equations in Different Physical Domains

Understanding the specific governing equations for different physical phenomena is crucial for applying FEM.

### 2.1 Structural Mechanics (Solid Mechanics)

*   **Governing Principle:** Equilibrium of forces.
*   **Key Equations:**
    *   **Equations of Equilibrium:** Based on Newton's second law, relating forces and stresses:
        *   In 1D: $\frac{d\sigma_x}{dx} + b_x = 0$
        *   In 2D:
            $\frac{\partial \sigma_{xx}}{\partial x} + \frac{\partial \sigma_{xy}}{\partial y} + b_x = 0$
            $\frac{\partial \sigma_{yx}}{\partial x} + \frac{\partial \sigma_{yy}}{\partial y} + b_y = 0$
        *   In 3D: $\frac{\partial \sigma_{ij}}{\partial x_j} + b_i = 0$ (using Einstein summation convention)
    *   **Strain-Displacement Relations:** Relate strain ($\epsilon$) to displacement (u):
        *   In 1D: $\epsilon_x = \frac{du_x}{dx}$
        *   In 2D: $\epsilon_{xx} = \frac{\partial u_x}{\partial x}$, $\epsilon_{yy} = \frac{\partial u_y}{\partial y}$, $\epsilon_{xy} = \frac{1}{2} (\frac{\partial u_x}{\partial y} + \frac{\partial u_y}{\partial x})$
        *   In 3D: $\epsilon_{ij} = \frac{1}{2} (\frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i})$
    *   **Constitutive Relations (Hooke's Law):** Relate stress ($\sigma$) to strain ($\epsilon$) for linear elastic materials:
        *   In 1D: $\sigma_x = E \epsilon_x$ (where E is Young's modulus)
        *   In 2D/3D: $\sigma = D \epsilon$ (where D is the material stiffness matrix)
*   **FEM Objective:** To find the displacement field $u$ that satisfies these equations and the boundary conditions. The FEM approach typically seeks to minimize an energy functional or solve a weak form of the equilibrium equations.
*   **Textbook References:**
    *   Reddy (2009) - Chapters 2 & 3, focusing on elasticity and variational principles.
    *   Cook (2008) - Chapter 2, "The Stiffness Matrix," starts from equilibrium and constitutive relations.
    *   Bhavikatti (2008) - Chapters 3 & 4, on stress-strain relations and analysis of bars/trusses.
    *   Fish & Belytschko (2007) - Likely covers elasticity formulation.

### 2.2 Heat Transfer

*   **Governing Principle:** Conservation of energy.
*   **Key Equations:**
    *   **Heat Conduction Equation (Fourier's Law of Conduction):** Describes heat flow due to temperature gradients.
        *   In steady-state, without heat generation: $\nabla \cdot (k \nabla T) = 0$
        *   In steady-state, with heat generation Q: $\nabla \cdot (k \nabla T) + Q = 0$
        *   In transient state: $\rho c \frac{\partial T}{\partial t} - \nabla \cdot (k \nabla T) = Q$ (where $\rho$ is density, $c$ is specific heat, t is time)
    *   **Convection Boundary Condition:** Heat transfer at a surface due to fluid flow.
        *   $-k \frac{\partial T}{\partial n} = h(T - T_\infty)$ (where $n$ is the outward normal, $h$ is the convection coefficient, $T_\infty$ is the fluid temperature)
    *   **Radiation Boundary Condition:** Heat transfer via electromagnetic waves.
        *   $-k \frac{\partial T}{\partial n} = \epsilon \sigma (T^4 - T_{surr}^4)$ (where $\epsilon$ is emissivity, $\sigma$ is Stefan-Boltzmann constant, $T_{surr}$ is surrounding temperature)
*   **FEM Objective:** To find the temperature field $T$ that satisfies the heat equation and boundary conditions.
*   **Textbook References:**
    *   Reddy (2009) - Chapter on heat transfer, often starting with the conduction equation.
    *   Segerlind (2010) - Chapter 3, "One-Dimensional Heat Conduction," dedicates significant space to the governing PDE.
    *   Hutton (2009) - Likely covers heat transfer applications.

### 2.3 Fluid Mechanics

*   **Governing Principles:** Conservation of mass, momentum, and energy.
*   **Key Equations:**
    *   **Continuity Equation (Conservation of Mass):**
        *   $\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0$ (where $\rho$ is density, $\mathbf{v}$ is velocity)
        *   For incompressible flow ($\rho$ = constant): $\nabla \cdot \mathbf{v} = 0$
    *   **Navier-Stokes Equations (Conservation of Momentum):**
        *   $\rho (\frac{\partial \mathbf{v}}{\partial t} + \mathbf{v} \cdot \nabla \mathbf{v}) = -\nabla p + \mu \nabla^2 \mathbf{v} + \mathbf{f}$ (where $p$ is pressure, $\mu$ is dynamic viscosity, $\mathbf{f}$ is body force)
*   **FEM Objective:** To find the velocity and pressure fields that satisfy these equations, often for specialized cases like Stokes flow or incompressible viscous flow.
*   **Textbook References:**
    *   While direct FEM formulation for Navier-Stokes is advanced, introductory FEM texts might touch upon simplified fluid flow problems or the general concept. Reddy and Cook are more likely to present the PDE framework.

## 3. The Basic Procedure of FEM

The process of applying FEM to a continuous problem can be generalized into several key steps. This is fundamental to **CO1**.

### 3.1 Step 1: Discretization of the Domain

*   **Definition:** The continuous problem domain ($\Omega$) is divided into a finite number of smaller, simpler regions called finite elements.
*   **Element Types:** Elements are defined by their shape (e.g., line, triangle, quadrilateral, tetrahedron, hexahedron) and the number of nodes they contain.
*   **Nodes:** Points in space where the primary variables (e.g., displacement, temperature) are calculated. Nodes are typically located at the corners and sometimes along the edges or at the center of an element.
*   **Mesh:** The collection of elements and nodes forming the discretized domain.
*   **Example:** A square plate can be discretized into several smaller square or triangular elements.
*   **Textbook References:**
    *   All textbooks (Reddy, Cook, Bhavikatti, Fish & Belytschko) dedicate early chapters to discretization and element types. Cook Chapter 1 is a good starting point.

### 3.2 Step 2: Element Formulation (Derivation of Element Equations)

This is where the governing equations are transformed into an algebraic form for each element. This often involves:

1.  **Approximation of the Solution within an Element:**
    *   **Definition:** The unknown variable within an element (e.g., displacement $u(x)$ in a 1D bar element) is approximated as a function of nodal values and interpolation functions (shape functions).
    *   **Mathematical Form:** $u^e(x) = \sum_{i=1}^n N_i(x) u_i$ (where $N_i(x)$ are shape functions, $u_i$ are nodal values, $n$ is the number of nodes per element).
    *   **Shape Functions (Interpolation Functions):** These functions interpolate the unknown variable within an element based on its nodal values. They have the property that $N_i$ is 1 at node $i$ and 0 at all other nodes connected to that element.
    *   **This step is crucial for CO2.**
    *   **Textbook References:**
        *   Reddy (2009) - Chapter 3, "One-Dimensional Finite Elements," and Chapter 4, "Two-Dimensional Finite Elements," delve deeply into shape functions.
        *   Cook (2008) - Chapter 2, "The Stiffness Matrix," explains how shape functions are used to derive element stiffness matrices.
        *   Fish & Belytschko (2007) - Chapters often dedicated to element formulations and shape functions.

2.  **Derivation of Element Matrices:**
    *   The governing differential equations are transformed into an integral form, typically using variational principles (like the principle of minimum potential energy) or weighted residual methods (like Galerkin's method).
    *   This process results in a system of algebraic equations for each element, often in the form:
        $[k^e] \{u^e\} = \{f^e\}$
        where:
        *   $[k^e]$ is the element stiffness matrix (or conductivity matrix, etc.).
        *   $\{u^e\}$ is the vector of unknown nodal values for the element.
        *   $\{f^e\}$ is the element load vector (or force vector, thermal flux vector).
    *   **Example (1D Bar Element):** The equilibrium equation $\frac{d\sigma_x}{dx} + b_x = 0$ along with $\sigma_x = E \frac{du}{dx}$ and $\epsilon_x = \frac{du}{dx}$ leads to an element stiffness matrix related to $EA/L$.
    *   **This step connects to CO1, CO3, and CO4.**
    *   **Textbook References:**
        *   Reddy (2009) - Chapters 2 and 3 for variational and weighted residual methods.
        *   Cook (2008) - Chapter 2 for stiffness matrix derivation.
        *   Bhavikatti (2008) - Chapter 4 for element stiffness matrix in FEM.

### 3.3 Step 3: Assembly of Global Matrices

*   **Definition:** The individual element matrices and vectors are combined (assembled) to form a single, large system of algebraic equations for the entire discretized domain.
*   **Process:**
    *   Each element equation is placed into the global system based on the connectivity of the elements (which nodes are shared).
    *   Global stiffness matrix $[K]$, global displacement vector $\{U\}$, and global load vector $\{F\}$ are formed.
*   **Mathematical Form:** $[K] \{U\} = \{F\}$
    where:
    *   $[K] = \sum_e [k^e]$ (summation over all elements)
    *   $\{U\} = \sum_e \{u^e\}$ (assembly of nodal unknowns)
    *   $\{F\} = \sum_e \{f^e\}$ (assembly of nodal forces/loads)
*   **Example:** For a 2-element 1D bar system, the stiffness matrix of the second element is added to the first element's matrix, but only in the rows and columns corresponding to the nodes of the second element.
*   **Textbook References:**
    *   Cook (2008) - Chapter 3, "Assembly of the Stiffness Matrix."
    *   Bhavikatti (2008) - Chapter 5, "Finite Element Analysis of trusses and beams."

### 3.4 Step 4: Application of Boundary Conditions

*   **Definition:** Known values of the primary variables or their derivatives at the domain boundaries are imposed on the global system of equations.
*   **Types of Boundary Conditions:**
    *   **Essential (Dirichlet) Boundary Conditions:** Prescribed values of the unknown variable (e.g., fixed displacement $u=0$ at a support, prescribed temperature $T=T_{fixed}$ on a surface).
    *   **Natural (Neumann) Boundary Conditions:** Prescribed values of the derivative of the unknown variable, which often correspond to applied forces or fluxes (e.g., applied force $P$ on a surface, specified heat flux $q_0$). These are usually incorporated into the load vector $\{F\}$.
*   **Impact:** Boundary conditions modify the global system of equations, making it uniquely solvable.
*   **Textbook References:**
    *   Reddy (2009) - Chapter 2 discusses boundary conditions in the context of variational methods.
    *   Cook (2008) - Chapter 4, "Boundary Conditions."
    *   Bhavikatti (2008) - Chapter 5 often details how to apply boundary conditions.

### 3.5 Step 5: Solution of the Global System of Equations

*   **Definition:** The modified global system of algebraic equations $[K] \{U\} = \{F\}$ is solved to find the unknown nodal values $\{U\}$.
*   **Solution Methods:**
    *   **Direct Methods:** Gaussian elimination, LU decomposition. Suitable for smaller problems.
    *   **Iterative Methods:** Jacobi, Gauss-Seidel, Conjugate Gradient. More efficient for large, sparse matrices common in FEM.
*   **Output:** The primary unknown variables (displacements, temperatures, etc.) at each node of the mesh.
*   **Textbook References:**
    *   Cook (2008) - Chapter 5, "Solution of Equations."
    *   All texts will cover this, with some offering more detail on numerical solvers.

### 3.6 Step 6: Post-processing

*   **Definition:** Calculating quantities of interest that are not directly the nodal unknowns but are derived from them.
*   **Examples:**
    *   **Structural Mechanics:** Strains ($\epsilon$), stresses ($\sigma$), reaction forces.
    *   **Heat Transfer:** Heat fluxes ($q$), temperature gradients.
*   **Calculation:** Typically involves using the shape functions and nodal values obtained from the solution.
    *   For example, stress in an element: $\{\sigma^e\} = [D][B]\{u^e\}$, where $[B]$ is the strain-displacement matrix derived from shape functions (crucial for **CO3**).
*   **Textbook References:**
    *   Cook (2008) - Chapter 6, "Stress Calculation."
    *   Bhavikatti (2008) - Chapter 4 and 5.

## 4. Key Concepts for FEM Formulation

To perform FEM analysis, certain concepts are fundamental.

### 4.1 Interpolation and Shape Functions

*   **Definition:** Shape functions (also called interpolation functions or basis functions) are used to approximate the variation of the unknown field variable (e.g., displacement, temperature) within an element. They are typically polynomials.
*   **Properties of Shape Functions:**
    *   Sum of shape functions over an element is 1: $\sum_{i=1}^n N_i = 1$.
    *   Shape function $N_i$ has a value of 1 at node $i$ and 0 at all other nodes of the element.
    *   They satisfy Kronecker delta property: $N_i(x_j) = \delta_{ij}$
*   **Role:** They allow us to express the unknown variable $u$ at any point within an element as a linear combination of nodal values: $u(\mathbf{x}) = \sum_{i=1}^n N_i(\mathbf{x}) u_i$.
*   **Learning Outcome:** Directly addresses **CO2**.
*   **Example:** For a 1D linear element (2 nodes), the shape functions are $N_1(\xi) = (1-\xi)/2$ and $N_2(\xi) = (1+\xi)/2$, where $\xi$ is the local coordinate.
*   **Textbook References:**
    *   Reddy (2009) - Chapter 3 extensively covers shape function construction for various elements.
    *   Cook (2008) - Chapter 2, "The Stiffness Matrix," explains their role.
    *   Fish & Belytschko (2007) - Chapters on element types and interpolation.

### 4.2 Strain-Displacement Matrix ([B] Matrix)

*   **Definition:** This matrix relates the nodal displacement vector of an element to the strain vector within that element. It is derived from the strain-displacement relations and the shape functions.
*   **Mathematical Form:** $\{\epsilon^e\} = [B] \{u^e\}$
*   **Derivation:**
    1.  Express strains in terms of nodal displacements using shape functions: $\epsilon_{xx} = \frac{\partial}{\partial x} (\sum N_i u_i) = \sum (\frac{\partial N_i}{\partial x}) u_i$.
    2.  Organize the coefficients of $u_i$ into the $[B]$ matrix.
*   **Role:** Essential for calculating element strains and subsequently stresses.
*   **Learning Outcome:** Directly addresses **CO3**.
*   **Example:** For a 1D bar element, $\epsilon_x = \frac{du}{dx} = \frac{d}{dx} (\sum N_i u_i) = \sum (\frac{dN_i}{dx}) u_i$. So, $[B] = [\frac{dN_1}{dx}, \frac{dN_2}{dx}, ..., \frac{dN_n}{dx}]$.
*   **Textbook References:**
    *   Reddy (2009) - Chapter 3, examples showing $[B]$ matrix calculation.
    *   Cook (2008) - Chapter 2 and 6.
    *   Bhavikatti (2008) - Chapter 4.

### 4.3 Element Stiffness Matrix ([k] Matrix)

*   **Definition:** This matrix represents the stiffness of an individual element and relates the nodal forces to the nodal displacements within that element.
*   **Derivation Methods:**
    *   **Variational Methods (e.g., Principle of Minimum Potential Energy):** The stiffness matrix is obtained by differentiating the potential energy functional with respect to nodal displacements.
        *   $\Pi = U - W$, where $U$ is strain energy and $W$ is work done by external forces.
        *   $[k^e] = \frac{\partial^2 \Pi}{\partial \{u^e\}^2}$
    *   **Weighted Residual Methods (e.g., Galerkin's Method):** The governing differential equation is multiplied by a weight function, integrated over the element, and the residual is minimized.
        *   For a problem like $\nabla \cdot (k \nabla T) = 0$, using Galerkin: $\int_\Omega (w_i) \nabla \cdot (k \nabla T^e) d\Omega = 0$. Integration by parts leads to terms that form the stiffness matrix.
*   **Mathematical Form:** $[k^e] = \int_{V^e} [B]^T [D] [B] dV$ (for structural mechanics, where $[D]$ is the material constitutive matrix). For heat transfer, it relates to the conductivity matrix.
*   **Learning Outcome:** Crucial for **CO1** and **CO3**.
*   **Example:** For a 1D bar element, $[k^e] = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$.
*   **Textbook References:**
    *   Reddy (2009) - Chapter 2 (Variational) and Chapter 3 (Galerkin).
    *   Cook (2008) - Chapter 2.
    *   Bhavikatti (2008) - Chapter 4.
    *   Fish & Belytschko (2007) - Often focuses on elasticity.

### 4.4 Element Load Vector ({f} Vector)

*   **Definition:** This vector represents the equivalent nodal forces or effects due to applied loads, body forces, or boundary conditions that are not essential boundary conditions.
*   **Derivation:** Derived from the work done by external forces and body forces.
    *   Body forces (e.g., gravity): $\{f_{body}^e\} = \int_{V^e} [N]^T \{b\} dV$
    *   Surface forces (e.g., pressure on a boundary): $\{f_{surf}^e\} = \int_{S^e} [N]^T \{t\} dS$
*   **Learning Outcome:** Related to **CO1**.
*   **Textbook References:**
    *   Cook (2008) - Chapter 2.
    *   Bhavikatti (2008) - Chapter 4.

## 5. Weighted Residual Methods and Energy Methods

These are fundamental mathematical tools used to derive the weak form of the governing PDEs, which is then used to generate element matrices. This is central to understanding FEM formulation and addresses **CO4**.

### 5.1 Weighted Residual Methods

*   **Concept:** Instead of requiring the governing differential equation to hold exactly at every point in the continuous domain (strong form), weighted residual methods require it to hold in an average sense.
*   **General PDE:** $L(u) = p$ (where L is a differential operator, u is the unknown, p is a known function).
*   **Procedure:**
    1.  Define a set of $m$ linearly independent weight functions $w_i$.
    2.  Require that the integral of the residual $R = L(u) - p$ weighted by each $w_i$ over the domain is zero: $\int_\Omega w_i (L(u) - p) d\Omega = 0$ for $i=1, ..., m$.
*   **Galerkin's Method:** A common weighted residual method where the weight functions $w_i$ are chosen to be the same as the shape functions $N_i$: $w_i = N_i$. This is often preferred because it leads to symmetric stiffness matrices and is consistent with variational principles.
*   **Other Methods:** Collocation, Subdomain methods.
*   **Learning Outcome:** Directly addressed by **CO4**.
*   **Textbook References:**
    *   Reddy (2009) - Chapter 2, "Variational and Weighted Residual Methods," provides a thorough treatment.
    *   Segerlind (2010) - Chapter 2, "Variational Methods for Boundary Value Problems."

### 5.2 Energy Methods (Variational Principles)

*   **Concept:** Many physical problems can be formulated in terms of minimizing or extremizing a potential energy functional. For example, in structural mechanics, the equilibrium state corresponds to the minimum of the total potential energy.
*   **Total Potential Energy ($\Pi$):** $\Pi = U + V$, where $U$ is the strain energy and $V$ is the potential energy of external forces.
    *   Strain Energy ($U$): $\frac{1}{2} \int_\Omega \{\epsilon\}^T \{\sigma\} d\Omega = \frac{1}{2} \int_\Omega \{\epsilon\}^T [D] \{\epsilon\} d\Omega$.
    *   Potential Energy of External Forces ($V$): $- \int_\Omega u \cdot b d\Omega - \int_S u \cdot \bar{t} dS$ (where $b$ are body forces, $\bar{t}$ are surface tractions).
*   **Principle of Minimum Potential Energy:** For elastic bodies in equilibrium, the strain energy is minimized. Thus, $\delta \Pi = 0$.
*   **FEM Application:**
    1.  Express the total potential energy functional in terms of nodal variables $u_i$.
    2.  Differentiate $\Pi$ with respect to each nodal variable $u_i$ and set the result to zero. This yields a system of algebraic equations, $[K]\{U\} = \{F\}$.
    3.  The element stiffness matrix $[k^e]$ is obtained by $\frac{\partial^2 U^e}{\partial \{u^e\}^2}$ and the load vector $\{f^e\}$ from the potential energy of external forces.
*   **Learning Outcome:** Directly addressed by **CO4**.
*   **Textbook References:**
    *   Reddy (2009) - Chapter 2.
    *   Cook (2008) - Chapter 2, "The Stiffness Matrix," derives it from potential energy.
    *   Segerlind (2010) - Chapter 2.

### 5.3 Element Stress Calculation Using Energy Method (Related to CO4)

*   **How it works:** While CO4 specifically mentions energy methods for formulating matrices, the "energy method" can also refer to deriving stress from strain energy density.
*   **Stress-Strain Relationship:** If the strain energy density function $W(\epsilon)$ is known, stress can be obtained as $\sigma_{ij} = \frac{\partial W}{\partial \epsilon_{ij}}$. For linear elasticity, $W = \frac{1}{2} \sigma_{ij} \epsilon_{ij}$, so $\sigma_{ij} = \frac{\partial (\frac{1}{2} \epsilon_{kl} D_{klmn} \epsilon_{mn})}{\partial \epsilon_{ij}} = D_{ijmn} \epsilon_{mn}$.
*   **FEM Context:** Once nodal displacements $\{u^e\}$ are known, strains $\{\epsilon^e\}$ within the element are calculated using $\{\epsilon^e\} = [B]\{u^e\}$. Then, stresses are computed using $\{\sigma^e\} = [D]\{\epsilon^e\} = [D][B]\{u^e\}$. The $[D]$ matrix is derived from the material properties, which are implicitly linked to the energy stored in the material.
*   **Learning Outcome:** Addresses **CO4** by connecting stress evaluation to the underlying energy principles.

## 6. Isoparametric Elements

This is an advanced topic, but it's introduced in foundational FEM courses as it's fundamental to solving problems with complex geometries and achieving higher accuracy. This relates to **CO5**.

### 6.1 Concept of Isoparametric Elements

*   **Definition:** An isoparametric element is one where the *same* interpolation functions (shape functions) are used to approximate both the geometry of the element and the unknown field variable within the element.
*   **Parametric Coordinates:** To describe the geometry and the field variable within an element, we often use natural or parent coordinates (e.g., $\xi, \eta, \zeta$) that range from -1 to 1. The physical coordinates $(x, y, z)$ of any point within the element are then expressed as: $x(\xi, \eta) = \sum_{i=1}^n N_i(\xi, \eta) x_i$, and similarly for $y$ and $z$. The field variable $u(\xi, \eta) = \sum_{i=1}^n N_i(\xi, \eta) u_i$.
*   **Why "Isoparametric"?** "Iso" means "same." The interpolation functions used for geometry ($x, y$) are the same as those used for the unknown variable ($u$).
*   **Advantages:**
    *   Allows for the representation of curved boundaries and complex geometries using simple elements (e.g., curved quadrilaterals, triangles).
    *   Simplifies the formulation and computer implementation.
*   **Learning Outcome:** Directly addresses **CO5**.
*   **Textbook References:**
    *   Reddy (2009) - Chapter 5, "Isoparametric Elements."
    *   Cook (2008) - Chapter 7, "Isoparametric Elements."
    *   Fish & Belytschko (2007) - Chapters on numerical integration and isoparametric formulations.

### 6.2 Isoparametric Formulations

*   **Mathematical Implications:**
    *   **Coordinate Transformation:** A transformation from physical coordinates $(x, y)$ to parent coordinates $(\xi, \eta)$ is needed. This involves the Jacobian matrix $[J]$.
    *   **Jacobian Matrix:** $[J] = \begin{bmatrix} \frac{\partial x}{\partial \xi} & \frac{\partial y}{\partial \xi} \\ \frac{\partial x}{\partial \eta} & \frac{\partial y}{\partial \eta} \end{bmatrix}$ for 2D. The determinant of the Jacobian, $|J|$, is used to change the differential area/volume element: $dx dy = |J| d\xi d\eta$.
    *   **Derivatives:** Derivatives in physical coordinates are related to derivatives in parent coordinates using the inverse Jacobian: $\{\frac{\partial}{\partial x}, \frac{\partial}{\partial y}\}^T = [J]^{-1} \{\frac{\partial}{\partial \xi}, \frac{\partial}{\partial \eta}\}^T$.
    *   **Integration:** All integrations for stiffness and load matrices, which were originally in physical coordinates (e.g., $\int_{V^e} [B]^T [D] [B] dV$), are now performed in the parent coordinate system using the Jacobian: $\int_{-1}^{1} \int_{-1}^{1} [B(\xi, \eta)]^T [D] [B(\xi, \eta)] |J| d\xi d\eta$.
*   **Numerical Integration (Gauss Quadrature):** Because the integrand often becomes complex due to the Jacobian and the shape functions, numerical integration techniques like Gauss quadrature are essential for evaluating these integrals.
*   **Learning Outcome:** Directly addresses **CO5**.
*   **Textbook References:**
    *   Reddy (2009) - Chapter 5.
    *   Cook (2008) - Chapter 7, detailing the Jacobian and numerical integration.
    *   Fish & Belytschko (2007) - Likely chapters on numerical integration.

## 7. Important Points to Remember

*   **FEM bridges continuous math (PDEs) and discrete computation (algebraic equations).**
*   **Governing equations are derived from physical laws.**
*   **Discretization into elements and nodes is the first step.**
*   **Shape functions are key for approximating variables and relating them to nodal values.**
*   **Element stiffness matrices and load vectors are derived using variational or weighted residual methods.**
*   **Assembly of element matrices leads to a global system.**
*   **Boundary conditions are crucial for a unique solution.**
*   **Isoparametric elements allow for curved geometries and are formulated using parametric coordinates and the Jacobian matrix.**
*   **Numerical integration (Gauss quadrature) is often required for isoparametric element formulations.**

## 8. Practice Questions

**Question 1 (CO1, K2):**
What is the fundamental difference between a continuous model and a discrete model in the context of FEM? Explain why FEM is necessary for solving many real-world engineering problems.

**Answer:**
A continuous model describes a physical system using mathematical functions defined over an unbroken domain, typically represented by differential equations. A discrete model approximates this system by dividing it into finite elements and approximating the behavior within each element using simpler functions. FEM is necessary because analytical solutions to the governing differential equations are often impossible to obtain for complex geometries, material properties, or boundary conditions encountered in real-world problems. FEM converts these complex problems into solvable systems of algebraic equations.

**Question 2 (CO2, K3):**
Consider a 1D bar element of length $L$ with nodes at $x=0$ and $x=L$. If the displacement field within the element is approximated by $u(x) = N_1(x)u_1 + N_2(x)u_2$, what are the shape functions $N_1(x)$ and $N_2(x)$ for a linear interpolation?

**Answer:**
For a 1D linear element, the shape functions are:
$N_1(x) = 1 - \frac{x}{L}$
$N_2(x) = \frac{x}{L}$
These functions satisfy $N_1(0)=1, N_1(L)=0$ and $N_2(0)=0, N_2(L)=1$.

**Question 3 (CO3, K4):**
For the 1D linear bar element with shape functions $N_1(x) = 1 - x/L$ and $N_2(x) = x/L$, derive the strain-displacement matrix $[B]$. Assume the displacement is in the x-direction only.

**Answer:**
The strain-displacement relation in 1D is $\epsilon_x = \frac{du}{dx}$.
Given $u(x) = N_1(x)u_1 + N_2(x)u_2$,
$\frac{du}{dx} = \frac{dN_1}{dx} u_1 + \frac{dN_2}{dx} u_2$.
We calculate the derivatives of the shape functions:
$\frac{dN_1}{dx} = \frac{d}{dx}(1 - \frac{x}{L}) = -\frac{1}{L}$
$\frac{dN_2}{dx} = \frac{d}{dx}(\frac{x}{L}) = \frac{1}{L}$
So, $\{\epsilon_x\} = [-\frac{1}{L} \quad \frac{1}{L}] \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix}$.
The strain-displacement matrix is $[B] = [-\frac{1}{L} \quad \frac{1}{L}]$.

**Question 4 (CO4, K5):**
Explain how the principle of minimum potential energy can be used to derive the element stiffness matrix for a simple structural element.

**Answer:**
The principle of minimum potential energy states that for an elastic body in equilibrium, the total potential energy ($\Pi$) is minimized. $\Pi = U - W$, where $U$ is the strain energy and $W$ is the potential energy of applied loads.
1.  The strain energy $U$ for an element is expressed in terms of nodal displacements $\{u^e\}$ using the material stiffness matrix $[D]$ and the strain-displacement matrix $[B]$: $U^e = \frac{1}{2} \int_{V^e} \{\epsilon^e\}^T [D] \{\epsilon^e\} dV = \frac{1}{2} \int_{V^e} ([B]\{u^e\})^T [D] ([B]\{u^e\}) dV = \frac{1}{2} \{u^e\}^T \left( \int_{V^e} [B]^T [D] [B] dV \right) \{u^e\}$.
2.  The term in the parenthesis is the element stiffness matrix: $[k^e] = \int_{V^e} [B]^T [D] [B] dV$.
3.  The potential energy of external forces $W$ also depends on nodal displacements.
4.  Setting $\frac{\partial \Pi}{\partial \{u^e\}} = 0$ leads to the element equilibrium equation: $[k^e] \{u^e\} = \{f^e\}$, where $\{f^e\}$ is the element load vector derived from the work done by external forces.

**Question 5 (CO5, K4):**
What does the term "isoparametric" mean in the context of finite elements? Why are isoparametric elements advantageous?

**Answer:**
"Isoparametric" means that the same set of interpolation functions (shape functions) is used to define both the geometric shape of the element and the variation of the unknown field variable within the element.

Advantages of isoparametric elements:
*   **Geometric Representation:** They allow for the accurate representation of curved boundaries and complex geometries, which is difficult with standard Lagrangian (Serendipity) elements whose sides are straight lines.
*   **Flexibility:** A single element formulation can handle both straight and curved sides.
*   **Implementation:** Simplifies programming as the same shape functions are used for geometry and solution approximation.
*   **Higher Accuracy:** Can lead to more accurate results for a given number of degrees of freedom, especially for problems with curved boundaries.

This concludes the study notes for Governing Equations – Discrete and Continuous Models from Module 1.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
