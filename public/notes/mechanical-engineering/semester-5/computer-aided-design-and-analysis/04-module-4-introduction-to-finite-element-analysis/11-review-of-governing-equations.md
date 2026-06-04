---
title: "Review of governing equations"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS"
module: "Module 4: Introduction to finite element analysis"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf480446351a"
status: "completed"
scrapedAt: "2026-05-20T17:59:09.625Z"
---
## Module 4: Introduction to Finite Element Analysis - Review of Governing Equations

This module review focuses on understanding the fundamental governing equations that underpin Finite Element Analysis (FEA). These equations represent the physical laws governing the behavior of systems (like structures, heat transfer, fluid flow) and are essential for FEA's ability to predict performance.

---

### Learning Outcomes

By the end of this review, you should be able to:

*   **LO1:** Recall and explain the origin of governing equations in physical phenomena relevant to FEA.
*   **LO2:** Understand and articulate the differential form of governing equations for basic structural mechanics, heat transfer, and fluid dynamics.
*   **LO3:** Recognize the role of these governing equations in the formulation of FEA.
*   **LO4:** Identify the types of boundary conditions that are applied to these equations.

---

### Course Outcomes Alignment

This review directly supports:

*   **CO4: Understand finite element analysis (FEA) and finite volume methods (FVM) including discretization, formulation, and boundary condition implementation for simple structural and fluid flow problems.** (Knowledge Level: K2) - By understanding the governing equations, we build the foundation for comprehending FEA formulation and boundary condition implementation.

---

### 1. Origin of Governing Equations

Governing equations in FEA are derived from fundamental physical principles that describe the behavior of a system. These principles are often expressed as conservation laws.

*   **Conservation Laws:** The bedrock of many governing equations.
    *   **Conservation of Mass:** States that mass cannot be created or destroyed in an isolated system.
    *   **Conservation of Momentum (Newton's Second Law):** The rate of change of momentum of a system is equal to the net force acting on it. (F = ma)
    *   **Conservation of Energy:** Energy cannot be created or destroyed, only transformed from one form to another.
    *   **Conservation of Charge:** In an isolated system, the total electric charge is constant.

*   **Constitutive Relationships:** These laws describe the material behavior and relate different physical quantities. They bridge the gap between fundamental laws and specific applications.
    *   **Example (Solid Mechanics):** Hooke's Law ($\sigma = E\epsilon$) relates stress ($\sigma$) to strain ($\epsilon$) through the Young's Modulus ($E$).
    *   **Example (Heat Transfer):** Fourier's Law of Conduction ($q = -k \nabla T$) relates heat flux ($q$) to the temperature gradient ($\nabla T$) through thermal conductivity ($k$).

**Key Concepts:**

*   **Physical Principles:** The underlying scientific laws that govern a phenomenon.
*   **Conservation Laws:** Mathematical statements of physical principles that ensure certain quantities remain constant over time or space under specific conditions.
*   **Constitutive Laws:** Material-specific relationships that define how a material responds to applied stimuli.

**Textbook Reference:**
*   "Introduction to Finite Elements in Engineering" by Chandrupatla and Belagundu (2001) provides a thorough introduction to the physical principles and their mathematical representation, forming the basis for FEA formulation.

---

### 2. Governing Equations in Differential Form

Governing equations are typically expressed in partial differential equation (PDE) form. FEA seeks to approximate the solution to these PDEs over a given domain. We will look at examples for structural mechanics, heat transfer, and fluid dynamics.

#### 2.1 Structural Mechanics (Solid Mechanics)

The governing equation for structural mechanics is generally derived from the principle of equilibrium (a consequence of Newton's Second Law applied to a continuum).

*   **Equilibrium Equation:**
    *   In terms of stress: $\nabla \cdot \boldsymbol{\sigma} + \mathbf{f} = 0$
        *   $\boldsymbol{\sigma}$: Cauchy stress tensor
        *   $\mathbf{f}$: Body force vector per unit volume
        *   $\nabla \cdot$: Divergence operator

*   **Relationship between Stress and Strain (Constitutive Law - e.g., Linear Elasticity):**
    *   $\boldsymbol{\sigma} = \mathbf{C} : \boldsymbol{\epsilon}$
        *   $\mathbf{C}$: Elasticity tensor (material properties)
        *   $\boldsymbol{\epsilon}$: Infinitesimal strain tensor

*   **Relationship between Strain and Displacement:**
    *   $\boldsymbol{\epsilon} = \frac{1}{2}(\nabla \mathbf{u} + (\nabla \mathbf{u})^T)$
        *   $\mathbf{u}$: Displacement vector

*   **Putting it together (for linear elastic isotropic materials):** Substituting the strain-displacement and constitutive relations into the equilibrium equation yields a PDE in terms of displacements. For a static problem with no body forces, this can be simplified.
    *   **Navier Equation (for displacement):** $\nabla^2 \mathbf{u} + \frac{1}{1-\nu}\nabla(\nabla \cdot \mathbf{u}) = 0$ (for a homogeneous, isotropic, linear elastic solid with no body forces)
        *   $\nu$: Poisson's ratio

**Key Concepts:**

*   **Stress:** Internal force per unit area within a material.
*   **Strain:** Deformation per unit length.
*   **Displacement:** The change in position of a point in the material.
*   **Equilibrium:** The state where the sum of all forces acting on a body is zero.
*   **Body Forces:** Forces acting on the volume of the object (e.g., gravity).
*   **Surface Forces/Traction:** Forces acting on the surface of the object (e.g., applied pressure).

**Example (1D Bar under Tension):**
Consider a uniform bar of length $L$, cross-sectional area $A$, Young's modulus $E$, and density $\rho$. The equation of motion is:
$\frac{\partial}{\partial x} \left( A E \frac{\partial u}{\partial x} \right) + f(x,t) = \rho A \frac{\partial^2 u}{\partial t^2}$
where $u(x,t)$ is the displacement at position $x$ and time $t$, and $f(x,t)$ is the distributed external force per unit length. For static analysis, the acceleration term is zero.

**Textbook Reference:**
*   "CAD/CAM : Theory and Practice" by Zeid and Sivasubramanian (2009) and "A First course in Finite Element Method" by Logan (2007) delve into the derivation of these equations for structural analysis.

---

#### 2.2 Heat Transfer

The governing equation for heat transfer is typically based on the conservation of energy.

*   **Conservation of Energy Equation:**
    *   $\rho c \frac{\partial T}{\partial t} = \nabla \cdot (k \nabla T) + Q$
        *   $\rho$: Density
        *   $c$: Specific heat capacity
        *   $T$: Temperature
        *   $t$: Time
        *   $k$: Thermal conductivity
        *   $Q$: Volumetric heat generation rate per unit volume

*   **Steady-State Heat Conduction:** If the temperature distribution is not changing with time, $\frac{\partial T}{\partial t} = 0$.
    *   **Laplace's Equation (no heat generation):** $\nabla \cdot (k \nabla T) = 0$ or $\nabla^2 T = 0$ (if $k$ is constant).
    *   **Poisson's Equation (with heat generation):** $\nabla \cdot (k \nabla T) = -Q$ or $\nabla^2 T = -Q/k$.

**Key Concepts:**

*   **Temperature:** A measure of the hotness or coldness of an object.
*   **Heat Flux:** The rate of heat flow per unit area.
*   **Thermal Conductivity:** A material property indicating its ability to conduct heat.
*   **Specific Heat Capacity:** The amount of heat required to raise the temperature of one unit of mass by one degree.
*   **Heat Generation:** Internal sources of heat within the object.

**Example (1D Rod with Heat Flux):**
Consider a rod where heat is flowing along its length. The governing equation describes how temperature changes along the rod and over time.

**Textbook Reference:**
*   "Introduction to Finite Elements in Engineering" by Chandrupatla and Belagundu (2001) provides detailed derivations for heat transfer problems.

---

#### 2.3 Fluid Dynamics

Governing equations for fluid dynamics are based on conservation of mass, momentum, and energy. The most common form for fluid flow is the **Navier-Stokes Equations**.

*   **Conservation of Mass (Continuity Equation):**
    *   $\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0$
        *   $\rho$: Fluid density
        *   $\mathbf{v}$: Fluid velocity vector

*   **Conservation of Momentum (Navier-Stokes Equations):**
    *   $\rho \left( \frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla) \mathbf{v} \right) = -\nabla p + \nabla \cdot \boldsymbol{\tau} + \mathbf{f}$
        *   $p$: Pressure
        *   $\boldsymbol{\tau}$: Viscous stress tensor
        *   $\mathbf{f}$: Body force vector (e.g., gravity)

*   **For Incompressible, Newtonian Fluids (Simplified):**
    *   Continuity: $\nabla \cdot \mathbf{v} = 0$
    *   Momentum: $\rho \left( \frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla) \mathbf{v} \right) = -\nabla p + \mu \nabla^2 \mathbf{v} + \mathbf{f}$
        *   $\mu$: Dynamic viscosity

**Key Concepts:**

*   **Velocity:** The rate of change of position of fluid particles.
*   **Pressure:** Force per unit area exerted by the fluid.
*   **Viscosity:** A measure of a fluid's resistance to flow.
*   **Density:** Mass per unit volume of the fluid.
*   **Reynolds Number:** A dimensionless quantity used to predict flow patterns in different fluid flow situations.

**Example (Flow through a Pipe):**
The Navier-Stokes equations are used to predict the velocity profile and pressure drop of a fluid flowing through a pipe.

**Textbook Reference:**
*   While not explicitly in the provided list, "Introduction to Finite Elements in Engineering" by Chandrupatla and Belagundu (2001) often covers fluid mechanics as an application area, introducing the Navier-Stokes equations.

---

### 3. Role of Governing Equations in FEA Formulation

The governing equations are the starting point for FEA. The core idea is to transform the continuous differential equation into a system of algebraic equations that can be solved numerically.

*   **Weak Form Formulation:** The continuous governing PDEs are converted into an integral form known as the "weak form" or "variational form." This is achieved using techniques like the **Galerkin method** or **weighted residual method**.
    *   **Benefits of Weak Form:**
        *   Reduces the order of derivatives required, meaning we only need to assume continuity of the primary variable (e.g., displacement, temperature) within each element, not its derivatives.
        *   Naturally incorporates boundary conditions.

*   **Discretization:** The continuous domain of the problem is divided into a finite number of smaller, simpler subdomains called "elements." These elements are interconnected at specific points called "nodes."

*   **Element Formulation:** Within each element, the unknown field variable (e.g., displacement, temperature) is approximated using **shape functions (or basis functions)**. These functions interpolate the nodal values of the variable across the element.
    *   $u(x) \approx \sum_{i=1}^{n} N_i(x) u_i$
        *   $N_i(x)$: Shape function for node $i$
        *   $u_i$: Nodal value of the variable at node $i$

*   **Assembly:** The element equations (derived from the weak form) are assembled into a global system of equations that represents the entire discretized domain.
    *   $[K]\{\mathbf{u}\} = \{\mathbf{f}\}$ (for static linear problems)
        *   $[K]$: Global stiffness matrix (or conductivity matrix, etc.)
        *   $\{\mathbf{u}\}$: Vector of unknown nodal values
        *   $\{\mathbf{f}\}$: Global load vector (or heat flux vector, etc.)

**Key Concepts:**

*   **Weak Form:** An integral statement of the governing equations.
*   **Galerkin Method:** A common technique for deriving the weak form, where the weighting functions are the same as the shape functions.
*   **Discretization:** Dividing the domain into elements.
*   **Nodes:** Points where elements connect.
*   **Elements:** Simple subdomains.
*   **Shape Functions:** Polynomial functions used to approximate the unknown variable within an element.
*   **Stiffness Matrix:** A matrix representing the relationship between nodal forces and nodal displacements (in structural analysis).
*   **Load Vector:** A vector representing external forces or influences.

**Textbook Reference:**
*   "A First course in Finite Element Method" by Logan (2007) is excellent for understanding the transition from PDEs to the weak form and element formulation. Chandrupatla and Belagundu (2001) also cover this comprehensively.

---

### 4. Boundary Conditions

Boundary conditions are crucial as they define the interaction of the system with its surroundings and provide the necessary information to obtain a unique solution to the governing equations.

*   **Types of Boundary Conditions:**

    1.  **Essential (Dirichlet) Boundary Conditions:**
        *   Specify the **value** of the primary variable (e.g., displacement, temperature) on the boundary.
        *   **Structural Mechanics:** Prescribed displacements (e.g., fixed support). $u = \bar{u}$ on $\Gamma_1$.
        *   **Heat Transfer:** Prescribed temperature. $T = \bar{T}$ on $\Gamma_1$.
        *   **Fluid Dynamics:** Prescribed velocity. $\mathbf{v} = \bar{\mathbf{v}}$ on $\Gamma_1$.
        *   **Implementation:** Applied directly to the global system of equations by modifying the nodal unknowns.

    2.  **Natural (Neumann) Boundary Conditions:**
        *   Specify the **flux** or **gradient** of the primary variable on the boundary. These typically arise from the forces or heat flow at the boundary.
        *   **Structural Mechanics:** Prescribed traction (force per unit area). $\boldsymbol{\sigma} \cdot \mathbf{n} = \bar{t}$ on $\Gamma_2$. (Where $\mathbf{n}$ is the outward normal vector). This appears in the load vector.
        *   **Heat Transfer:** Prescribed heat flux. $-k \nabla T \cdot \mathbf{n} = \bar{q}$ on $\Gamma_2$. (Where $\bar{q}$ is the prescribed heat flux). This also appears in the load vector.
        *   **Fluid Dynamics:** Can be related to pressure or shear stress on boundaries.
        *   **Implementation:** These are naturally incorporated into the weak form and contribute to the load vector.

    3.  **Mixed (Robin) Boundary Conditions:**
        *   A combination of the primary variable and its flux.
        *   **Heat Transfer:** Convection boundary condition: $-k \frac{\partial T}{\partial n} = h(T - T_\infty)$ on $\Gamma_3$.
            *   $h$: Convective heat transfer coefficient
            *   $T_\infty$: Ambient temperature
        *   **Implementation:** Requires careful treatment in the weak form and can contribute to both the stiffness and load matrices.

**Important Note:** The type of boundary conditions significantly influences the resulting system of equations and the solution. For instance, Dirichlet conditions directly modify the nodal unknowns, while Neumann conditions modify the load vector.

**Textbook Reference:**
*   All textbooks mentioned provide details on applying boundary conditions in FEA. Logan (2007) and Chandrupatla and Belagundu (2001) are particularly good for illustrating how they are handled in the weak form and element matrices.

---

### Important Points to Remember

*   **Governing equations are the physical laws** governing the behavior of a system.
*   These equations are typically **partial differential equations (PDEs)**.
*   FEA transforms these continuous PDEs into a **system of algebraic equations**.
*   The **weak form** is crucial for this transformation, reducing the continuity requirements and naturally incorporating boundary conditions.
*   **Boundary conditions** are essential for obtaining a unique solution and dictate how the system interacts with its environment.
*   **Essential (Dirichlet)** boundary conditions specify the variable's value.
*   **Natural (Neumann)** boundary conditions specify the flux or gradient.

---

### Practice Questions and Exercises

**Question 1:**
For a static structural analysis problem, what is the fundamental physical principle that leads to the equilibrium equation?
(a) Conservation of Mass
(b) Conservation of Energy
(c) Conservation of Momentum
(d) Conservation of Charge

**Answer:** (c) Conservation of Momentum (specifically, the principle of static equilibrium, which is a state where the net force is zero, derived from Newton's second law).

**Question 2:**
Which type of boundary condition specifies the value of the primary variable (e.g., displacement or temperature) on the boundary?
(a) Natural Boundary Condition
(b) Mixed Boundary Condition
(c) Dirichlet Boundary Condition
(d) Neumann Boundary Condition

**Answer:** (c) Dirichlet Boundary Condition.

**Question 3:**
The equation $\nabla \cdot (k \nabla T) = -Q$ is a governing equation for:
(a) Static structural analysis
(b) Steady-state heat conduction with heat generation
(c) Unsteady heat transfer
(d) Fluid flow

**Answer:** (b) Steady-state heat conduction with heat generation. This is Poisson's equation for heat transfer.

**Question 4:**
Explain why the weak form of the governing equations is preferred in FEA over the strong (differential) form.

**Answer:** The weak form reduces the continuity requirements for the approximating functions. Instead of needing to ensure the derivatives of the field variable are continuous, only the field variable itself needs to be continuous within each element. This allows for the use of simpler polynomial shape functions and makes the formulation more general. It also naturally incorporates natural boundary conditions into the load vector.

**Question 5:**
Match the following terms with their typical behavior in FEA formulation:

| Term                     | Behavior in FEA Formulation                                                              |
| :----------------------- | :--------------------------------------------------------------------------------------- |
| 1. Prescribed Displacement | (a) Contributes to the load vector.                                                      |
| 2. Applied Traction      | (b) Modifies the nodal unknowns directly and often involves modifying the stiffness matrix. |
| 3. Convection Boundary   | (c) Contributes to both the stiffness and load matrices.                                 |

**Answer:**
1. Prescribed Displacement -> (b) Modifies the nodal unknowns directly and often involves modifying the stiffness matrix.
2. Applied Traction -> (a) Contributes to the load vector.
3. Convection Boundary -> (c) Contributes to both the stiffness and load matrices.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
