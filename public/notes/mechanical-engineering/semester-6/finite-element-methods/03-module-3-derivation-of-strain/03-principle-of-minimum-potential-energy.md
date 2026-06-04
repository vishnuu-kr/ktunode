---
title: "principle of minimum potential energy"
subject: "FINITE ELEMENT METHODS"
module: "Module 3: Derivation of strain "
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463850"
status: "completed"
scrapedAt: "2026-05-20T18:04:03.338Z"
---
# FINITE ELEMENT METHODS - Module 3: Derivation of Strain

## Topic: Principle of Minimum Potential Energy

### Introduction

The Principle of Minimum Potential Energy is a fundamental variational principle that forms the bedrock for deriving the governing equations in many areas of physics and engineering, particularly in the context of the Finite Element Method (FEM). It provides a powerful framework for solving boundary value problems, especially those involving elastic structures and continua. This principle states that among all kinematically admissible displacement fields that satisfy the prescribed boundary conditions, the one that minimizes the total potential energy of the system is the true solution.

This module will focus on understanding and applying this principle to derive strain-displacement relationships for finite elements, which is crucial for formulating the stiffness matrices and solving structural analysis problems.

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the concept of potential energy in elastic systems.
*   Derive strain-displacement relations using the principle of minimum potential energy.
*   Formulate the strain-displacement matrix ([B] matrix) for various types of finite elements.
*   Relate the principle of minimum potential energy to the derivation of element stiffness matrices.
*   Appreciate the role of this principle in solving structural mechanics problems using FEM.

### Course Outcomes Alignment

This topic directly contributes to the following course outcomes:

*   **CO1: To understand the governing equations of various physical phenomena and basic procedure of FEM. (Knowledge Level: K2)**
    *   Understanding the principle of minimum potential energy provides insight into the governing equations of elasticity and the fundamental procedure of FEM.
*   **CO3: Formulate shape functions and element strain displacement matrix of various element (Knowledge Level: K4)**
    *   This topic is central to formulating the strain-displacement matrix ([B] matrix) by relating displacement fields to strain fields.
*   **CO4: Evaluate element stress using energy method and study Galekin weight residual formulations (Knowledge Level: K5)**
    *   The principle of minimum potential energy is an energy method, and understanding it is a prerequisite for evaluating element stresses and comparing it with other methods like the weighted residual method.

### Key Concepts and Definitions

1.  **Potential Energy ($\Pi$)**: The total potential energy of an elastic system is the sum of the strain energy ($U$) stored within the deformable body and the potential energy of external forces ($\Omega$).
    *   $\Pi = U + \Omega$

2.  **Strain Energy ($U$)**: The energy stored in a deformable body due to its deformation. For linear elastic materials, it's given by:
    *   $U = \frac{1}{2} \int_{V} \{\epsilon\}^T \{\sigma\} dV$
    *   Where $\{\epsilon\}$ is the strain vector and $\{\sigma\}$ is the stress vector. Using Hooke's Law ($\{\sigma\} = [D]\{\epsilon\}$):
    *   $U = \frac{1}{2} \int_{V} \{\epsilon\}^T [D] \{\epsilon\} dV$

3.  **Potential Energy of External Forces ($\Omega$)**: This includes the potential energy due to applied body forces and surface tractions.
    *   **Body Force Potential Energy ($\Omega_B$)**: Associated with forces acting on the volume of the body.
        *   $\Omega_B = - \int_{V} \{u\}^T \{f\} dV$
        *   Where $\{u\}$ is the displacement vector and $\{f\}$ is the body force vector.
    *   **Surface Traction Potential Energy ($\Omega_S$)**: Associated with forces applied on the surface of the body.
        *   $\Omega_S = - \int_{S} \{u\}^T \{t\} dS$
        *   Where $\{t\}$ is the surface traction vector.

4.  **Total Potential Energy ($\Pi$)**:
    *   $\Pi = U + \Omega_B + \Omega_S$
    *   $\Pi = \frac{1}{2} \int_{V} \{\epsilon\}^T [D] \{\epsilon\} dV - \int_{V} \{u\}^T \{f\} dV - \int_{S} \{u\}^T \{t\} dS$

5.  **Kinematically Admissible Displacement Field**: A displacement field that satisfies the geometric (displacement) boundary conditions of the problem.

6.  **Static Admissibility**: A stress field that satisfies the equilibrium equations and the natural (traction) boundary conditions.

### The Principle of Minimum Potential Energy

**Statement:** For a linear elastic body subjected to external forces, the true equilibrium displacement field is the one that minimizes the total potential energy of the system, subject to the constraint that the displacement field is kinematically admissible.

**Mathematical Representation:**
The principle states that the first variation of the total potential energy with respect to the displacement field is zero, which signifies a minimum (or extremum) of the potential energy.

$\delta\Pi = 0$

For a discrete system represented by nodal displacements $\{u\}$, the total potential energy can be written as:

$\Pi(\{u\}) = \frac{1}{2} \{u\}^T [K] \{u\} - \{u\}^T \{F\}$

Where:
*   $[K]$ is the global stiffness matrix.
*   $\{u\}$ is the global displacement vector.
*   $\{F\}$ is the global force vector (including equivalent nodal forces from body and surface forces).

To find the minimum, we set the derivative with respect to $\{u\}$ to zero:

$\frac{\partial \Pi}{\partial \{u\}} = [K] \{u\} - \{F\} = 0$

This leads to the fundamental equation of structural analysis:

$[K] \{u\} = \{F\}$

### Derivation of Strain-Displacement Relations and Stiffness Matrix

The principle of minimum potential energy provides a systematic way to derive the stiffness matrix and strain-displacement relations for finite elements. The general procedure involves:

1.  **Assume a Displacement Field:** Define the displacement field within an element using shape functions and nodal displacements.
    *   $\{u(x,y,z)\} = [N(x,y,z)] \{u\}_e$
    *   Where $[N]$ is the matrix of shape functions and $\{u\}_e$ is the vector of nodal displacements for the element.

2.  **Express Strains in Terms of Displacements:** Use the strain-displacement relations to express the strain vector $\{\epsilon\}$ in terms of nodal displacements.
    *   $\{\epsilon\} = [B] \{u\}_e$
    *   The $[B]$ matrix (strain-displacement matrix) is crucial here and is derived from the differential strain-displacement operators.

3.  **Express Stresses in Terms of Displacements:** Use Hooke's Law to relate stresses to strains, and subsequently to displacements.
    *   $\{\sigma\} = [D] \{\epsilon\} = [D] [B] \{u\}_e$

4.  **Formulate the Total Potential Energy ($\Pi_e$) for an Element:** Substitute the expressions for strains and displacements into the total potential energy equation for a single element.
    *   $\Pi_e = \frac{1}{2} \int_{V_e} \{\epsilon\}^T \{\sigma\} dV_e - \int_{V_e} \{u\}^T \{f\} dV_e - \int_{S_e} \{u\}^T \{t\} dS_e$
    *   $\Pi_e = \frac{1}{2} \int_{V_e} ([B] \{u\}_e)^T [D] ([B] \{u\}_e) dV_e - \int_{V_e} ([N] \{u\}_e)^T \{f\} dV_e - \int_{S_e} ([N] \{u\}_e)^T \{t\} dS_e$
    *   $\Pi_e = \frac{1}{2} \{u\}_e^T \left( \int_{V_e} [B]^T [D] [B] dV_e \right) \{u\}_e - \{u\}_e^T \left( \int_{V_e} [N]^T \{f\} dV_e + \int_{S_e} [N]^T \{t\} dS_e \right)$

5.  **Identify the Element Stiffness Matrix ($[K]_e$) and Element Force Vector ($\{F\}_e$):** From the structure of $\Pi_e$, we can identify:
    *   $[K]_e = \int_{V_e} [B]^T [D] [B] dV_e$
    *   $\{F\}_e = \int_{V_e} [N]^T \{f\} dV_e + \int_{S_e} [N]^T \{t\} dS_e$

6.  **Apply the Principle of Minimum Potential Energy ($\delta\Pi_e = 0$):** Differentiate $\Pi_e$ with respect to $\{u\}_e$ and set it to zero.
    *   $\frac{\partial \Pi_e}{\partial \{u\}_e} = \left( \int_{V_e} [B]^T [D] [B] dV_e \right) \{u\}_e - \left( \int_{V_e} [N]^T \{f\} dV_e + \int_{S_e} [N]^T \{t\} dS_e \right) = 0$
    *   This directly yields the element stiffness equation: $[K]_e \{u\}_e = \{F\}_e$.

### Derivation of Strain-Displacement Matrix [B]

The $[B]$ matrix is the core of relating displacements to strains. It depends on the element type and the chosen shape functions. The derivation involves applying the definition of strain to the assumed displacement field.

**Example: 1D Bar Element**

Consider a 1D bar element with length $L$, cross-sectional area $A$, and Young's modulus $E$. The displacement $u(x)$ along the x-axis is approximated by linear shape functions:

$u(x) = N_1(x) u_1 + N_2(x) u_2$

Where:
*   $N_1(x) = 1 - \frac{x}{L}$
*   $N_2(x) = \frac{x}{L}$
*   $u_1$ and $u_2$ are the displacements at nodes 1 and 2 respectively.
*   $\{u\}_e = \begin{bmatrix} u_1 \\ u_2 \end{bmatrix}$

The strain $\epsilon_x$ in a 1D bar is given by:

$\epsilon_x = \frac{du}{dx}$

Substituting the displacement field:

$\epsilon_x = \frac{d}{dx} \left( N_1(x) u_1 + N_2(x) u_2 \right)$
$\epsilon_x = \left( \frac{dN_1}{dx} \right) u_1 + \left( \frac{dN_2}{dx} \right) u_2$

We can write this in matrix form:

$\epsilon_x = \begin{bmatrix} \frac{dN_1}{dx} & \frac{dN_2}{dx} \end{bmatrix} \begin{bmatrix} u_1 \\ u_2 \end{bmatrix}$

Comparing this with $\{\epsilon\} = [B] \{u\}_e$:

$\frac{dN_1}{dx} = \frac{d}{dx} \left( 1 - \frac{x}{L} \right) = -\frac{1}{L}$
$\frac{dN_2}{dx} = \frac{d}{dx} \left( \frac{x}{L} \right) = \frac{1}{L}$

So, the strain-displacement matrix for a 1D bar element is:

$[B] = \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix}$

Now, to derive the stiffness matrix using the principle of minimum potential energy:

1.  **Strain Energy ($U$)**:
    $U = \frac{1}{2} \int_{V} \sigma_x \epsilon_x dV = \frac{1}{2} \int_{0}^{L} E \epsilon_x^2 A dx$ (Assuming constant $A$ and $E$)
    $U = \frac{1}{2} \int_{0}^{L} E A \left( [B] \{u\}_e \right)^2 dx$
    $U = \frac{1}{2} \int_{0}^{L} E A ([B] \{u\}_e)^T ([B] \{u\}_e) dx$
    $U = \frac{1}{2} \{u\}_e^T \left( \int_{0}^{L} [B]^T [B] E A dx \right) \{u\}_e$

2.  **Element Stiffness Matrix ($[K]_e$)**:
    $[K]_e = \int_{0}^{L} [B]^T [B] E A dx$
    $[K]_e = \int_{0}^{L} \begin{bmatrix} -\frac{1}{L} \\ \frac{1}{L} \end{bmatrix} \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix} E A dx$
    $[K]_e = \int_{0}^{L} \begin{bmatrix} \frac{1}{L^2} & -\frac{1}{L^2} \\ -\frac{1}{L^2} & \frac{1}{L^2} \end{bmatrix} E A dx$
    $[K]_e = E A \begin{bmatrix} \frac{1}{L^2} & -\frac{1}{L^2} \\ -\frac{1}{L^2} & \frac{1}{L^2} \end{bmatrix} \int_{0}^{L} dx$
    $[K]_e = E A \begin{bmatrix} \frac{1}{L^2} & -\frac{1}{L^2} \\ -\frac{1}{L^2} & \frac{1}{L^2} \end{bmatrix} [L]$
    $[K]_e = \frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$

This matches the standard stiffness matrix for a 1D bar element.

**Example: 2D Plane Stress/Strain Element (Constant Strain Triangle - CST)**

For a 2D element, strain is related to displacements by:

$\{\epsilon\} = \begin{Bmatrix} \epsilon_x \\ \epsilon_y \\ \gamma_{xy} \end{Bmatrix} = \begin{bmatrix} \frac{\partial u}{\partial x} \\ \frac{\partial v}{\partial y} \\ \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x} \end{bmatrix}$

Assuming linear shape functions for displacements $u$ and $v$:

$u(x,y) = N_1 u_1 + N_2 u_2 + N_3 u_3$
$v(x,y) = N_1 v_1 + N_2 v_2 + N_3 v_3$

Where $(u_i, v_i)$ are the nodal displacements at node $i$.

The nodal displacement vector for the element is $\{u\}_e = \begin{Bmatrix} u_1 & v_1 & u_2 & v_2 & u_3 & v_3 \end{Bmatrix}^T$.

The derivatives $\frac{\partial u}{\partial x}, \frac{\partial v}{\partial y}, \frac{\partial u}{\partial y}, \frac{\partial v}{\partial x}$ will be constants for a CST element because the shape functions are linear, and their derivatives are constant.

Let's express $u$ and $v$ in vector form:

$\{u\} = \begin{Bmatrix} u \\ v \end{Bmatrix}$
$\{u\}_e = \begin{Bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \\ u_3 \\ v_3 \end{Bmatrix}$

We can write $\{u\}$ as:
$\{u\} = [N] \{u\}_e$
where $[N]$ contains the shape functions and zeros, structured to separate $u$ and $v$ displacements.

For a CST, the shape functions are linear:
$N_i = \frac{1}{2A_e}(a_i + b_i x + c_i y)$, where $A_e$ is the area of the triangle.
The coefficients $a_i, b_i, c_i$ are calculated from nodal coordinates.

The strain components are:
$\epsilon_x = \frac{\partial u}{\partial x} = \frac{\partial}{\partial x} \sum_{i=1}^3 N_i u_i = \sum_{i=1}^3 \frac{\partial N_i}{\partial x} u_i$
$\epsilon_y = \frac{\partial v}{\partial y} = \frac{\partial}{\partial y} \sum_{i=1}^3 N_i v_i = \sum_{i=1}^3 \frac{\partial N_i}{\partial y} v_i$
$\gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x} = \sum_{i=1}^3 \frac{\partial N_i}{\partial y} u_i + \sum_{i=1}^3 \frac{\partial N_i}{\partial x} v_i$

In matrix form:
$\{\epsilon\} = \begin{Bmatrix} \epsilon_x \\ \epsilon_y \\ \gamma_{xy} \end{Bmatrix} = \begin{bmatrix} \frac{\partial N_1}{\partial x} & 0 & \frac{\partial N_2}{\partial x} & 0 & \frac{\partial N_3}{\partial x} & 0 \\ 0 & \frac{\partial N_1}{\partial y} & 0 & \frac{\partial N_2}{\partial y} & 0 & \frac{\partial N_3}{\partial y} \\ \frac{\partial N_1}{\partial y} & \frac{\partial N_1}{\partial x} & \frac{\partial N_2}{\partial y} & \frac{\partial N_2}{\partial x} & \frac{\partial N_3}{\partial y} & \frac{\partial N_3}{\partial x} \end{bmatrix} \begin{Bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \\ u_3 \\ v_3 \end{Bmatrix}$

This matrix is the $[B]$ matrix for the CST element:
$[B] = \begin{bmatrix} \frac{\partial N_1}{\partial x} & 0 & \frac{\partial N_2}{\partial x} & 0 & \frac{\partial N_3}{\partial x} & 0 \\ 0 & \frac{\partial N_1}{\partial y} & 0 & \frac{\partial N_2}{\partial y} & 0 & \frac{\partial N_3}{\partial y} \\ \frac{\partial N_1}{\partial y} & \frac{\partial N_1}{\partial x} & \frac{\partial N_2}{\partial y} & \frac{\partial N_2}{\partial x} & \frac{\partial N_3}{\partial y} & \frac{\partial N_3}{\partial x} \end{bmatrix}$

Since $\frac{\partial N_i}{\partial x}$ and $\frac{\partial N_i}{\partial y}$ are constants for a CST, the $[B]$ matrix is constant for this element. This leads to a constant strain and constant stress distribution within the element, which is a characteristic of CST elements.

The stiffness matrix $[K]_e$ is then calculated as:
$[K]_e = \int_{V_e} [B]^T [D] [B] dV_e$
For 2D elements, $dV_e = t dx dy$, where $t$ is the thickness.
$[K]_e = t \int_{A_e} [B]^T [D] [B] dx dy$

Since $[B]$ and $[D]$ are constant for the CST, the integration is straightforward:
$[K]_e = t [B]^T [D] [B] \int_{A_e} dx dy = t [B]^T [D] [B] A_e$

### Connection to Other Principles and Methods

*   **Principle of Virtual Displacements (PVT):** The principle of minimum potential energy is closely related to the principle of virtual displacements. The PVT states that for a body in equilibrium, the total virtual work done by the external forces is equal to the total virtual strain energy stored in the body, for any arbitrary virtual displacement field that is consistent with the kinematic boundary conditions. Applying the PVT leads to the same equilibrium equations. In fact, $\delta\Pi = \delta W_{ext} - \delta W_{int} = 0$, where $W_{ext}$ is external work and $W_{int}$ is internal strain energy.

*   **Weighted Residual Methods (e.g., Galerkin):** While the principle of minimum potential energy is an energy method, weighted residual methods (like Galerkin) are differential equation-based methods. For linear elastic problems, both methods yield identical results. The energy method is generally applicable to problems where an energy functional exists.

### Advantages of the Principle of Minimum Potential Energy in FEM

1.  **Systematic Derivation:** Provides a consistent and structured approach for deriving element stiffness matrices and load vectors.
2.  **Guaranteed Convergence:** For elastic problems, the displacement field that minimizes the potential energy is the true solution. This principle ensures that the FEM solution approximates the true solution by minimizing an energy functional.
3.  **Handles Boundary Conditions Naturally:** Displacement boundary conditions are directly incorporated into the formulation, while natural (force) boundary conditions appear in the potential energy of external forces.
4.  **Foundation for More Complex Problems:** Extends to non-linear elasticity, plasticity, and other advanced mechanics problems.

### Important Points to Remember

*   The principle applies to **linear elastic** materials and small deformations.
*   The displacement field must be **kinematically admissible** (satisfy geometric boundary conditions).
*   The solution that minimizes the total potential energy is the **equilibrium solution**.
*   The **strain-displacement matrix [B]** is key to linking the assumed displacement field to the strains.
*   The **element stiffness matrix [K]e** is derived from the integral of $[B]^T [D] [B]$ over the element volume.
*   The **total potential energy** is the sum of strain energy and potential energy of external forces.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### Textbooks & References Integration

*   **Reddy (2009):** Chapter 3 of Reddy's book provides a comprehensive treatment of variational principles, including the principle of minimum potential energy, and its application in deriving finite element equations. The derivation of strain-displacement relations and the formation of stiffness matrices for various elements (bar, beam, plane stress/strain) are detailed.
*   **Cook (2008):** Cook's text also covers variational methods extensively in Chapter 5, focusing on the minimum potential energy principle to derive stiffness matrices. It emphasizes the formulation of the $[B]$ matrix for different element types.
*   **Bhavikatti (2008):** Chapter 3 of Bhavikatti's book is dedicated to the principle of minimum potential energy and its application to structural mechanics. It offers step-by-step derivations of stiffness matrices for common elements.
*   **Fish & Belytschko (2007):** This book might provide a more advanced perspective on variational principles and their application, potentially linking them to concepts like Galerkin methods and the derivation of consistent loads.
*   **Segerlind (2010) & Ramamurthi (Second Edition):** These reference books will likely offer alternative perspectives and detailed examples for deriving strain-displacement relations and stiffness matrices using the energy method. They are valuable for reinforcing understanding and exploring diverse element formulations.
*   **Hutton (2009):** Hutton's book will offer foundational coverage of the potential energy principle, explaining its physical basis and its role in establishing the equilibrium equations for FEM.

### Practice Questions and Exercises

**Question 1:**
For a 1D bar element with stiffness matrix $[K]_e = \frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$ and nodal displacement vector $\{u\}_e = \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix}$, derive the strain-displacement matrix $[B]$. What is the strain in the element in terms of nodal displacements?

**Answer 1:**
The element stiffness matrix is derived from $[K]_e = \int_{V_e} [B]^T [D] [B] dV_e$. For a 1D bar, $D=E$ and $V_e = AL$. So, $[K]_e = EAL \int_{0}^{1} [B]^T [B] d\xi$ if using a normalized coordinate $\xi$.
Assuming $[B] = \begin{bmatrix} b_1 & b_2 \end{bmatrix}$, then $[B]^T [B] = \begin{bmatrix} b_1^2 & b_1 b_2 \\ b_1 b_2 & b_2^2 \end{bmatrix}$.
$\int_{0}^{1} [B]^T [B] d\xi = \int_{0}^{1} \begin{bmatrix} b_1^2 & b_1 b_2 \\ b_1 b_2 & b_2^2 \end{bmatrix} d\xi = \begin{bmatrix} b_1^2 & b_1 b_2 \\ b_1 b_2 & b_2^2 \end{bmatrix}$ (if $b_i$ are constants).
We know $[K]_e = \frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$.
Comparing $\frac{EA}{L} \begin{bmatrix} b_1^2 & b_1 b_2 \\ b_1 b_2 & b_2^2 \end{bmatrix}$ with $\frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$, we can infer that $b_1^2=1$, $b_2^2=1$, and $b_1 b_2=-1$.
This suggests $b_1 = -1$ and $b_2 = 1$ (or vice versa).
Therefore, $[B] = \begin{bmatrix} -1 & 1 \end{bmatrix}$.

The strain in the element is $\epsilon_x = [B] \{u\}_e = \begin{bmatrix} -1 & 1 \end{bmatrix} \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix} = u_2 - u_1$.
This represents the change in length divided by the original length, which is correct for a bar element.

**Question 2:**
State the principle of minimum potential energy. How is it used to derive the element stiffness matrix $[K]_e$?

**Answer 2:**
The principle of minimum potential energy states that for a linear elastic system, the equilibrium displacement field is the one that minimizes the total potential energy, subject to the constraint of kinematic admissibility.
The total potential energy for an element is given by:
$\Pi_e = \frac{1}{2} \int_{V_e} \{\epsilon\}^T \{\sigma\} dV_e - \int_{V_e} \{u\}^T \{f\} dV_e - \int_{S_e} \{u\}^T \{t\} dS_e$
Substituting $\{\epsilon\} = [B] \{u\}_e$ and $\{\sigma\} = [D] \{\epsilon\}$ and $\{u\} = [N] \{u\}_e$, we get:
$\Pi_e = \frac{1}{2} \{u\}_e^T \left( \int_{V_e} [B]^T [D] [B] dV_e \right) \{u\}_e - \{u\}_e^T \{F\}_e$
To find the minimum, we set $\frac{\partial \Pi_e}{\partial \{u\}_e} = 0$:
$\frac{\partial \Pi_e}{\partial \{u\}_e} = \left( \int_{V_e} [B]^T [D] [B] dV_e \right) \{u\}_e - \{F\}_e = 0$
This directly leads to the element stiffness equation:
$[K]_e \{u\}_e = \{F\}_e$
where $[K]_e = \int_{V_e} [B]^T [D] [B] dV_e$ is the element stiffness matrix and $\{F\}_e$ is the element force vector.

**Question 3:**
Consider a 2D CST element. If the shape functions are $N_1, N_2, N_3$, what are the components of the strain-displacement matrix $[B]$ in terms of the spatial derivatives of these shape functions?

**Answer 3:**
For a 2D element, the strain vector is $\{\epsilon\} = \begin{Bmatrix} \epsilon_x \\ \epsilon_y \\ \gamma_{xy} \end{Bmatrix}$. The displacement vector is $\{u\}_e = \begin{Bmatrix} u_1 & v_1 & u_2 & v_2 & u_3 & v_3 \end{Bmatrix}^T$.
The strain-displacement matrix $[B]$ relates these two as $\{\epsilon\} = [B] \{u\}_e$.
For a CST element, the displacement fields are linear:
$u(x,y) = N_1 u_1 + N_2 u_2 + N_3 u_3$
$v(x,y) = N_1 v_1 + N_2 v_2 + N_3 v_3$
The $[B]$ matrix is:
$[B] = \begin{bmatrix}
\frac{\partial N_1}{\partial x} & 0 & \frac{\partial N_2}{\partial x} & 0 & \frac{\partial N_3}{\partial x} & 0 \\
0 & \frac{\partial N_1}{\partial y} & 0 & \frac{\partial N_2}{\partial y} & 0 & \frac{\partial N_3}{\partial y} \\
\frac{\partial N_1}{\partial y} & \frac{\partial N_1}{\partial x} & \frac{\partial N_2}{\partial y} & \frac{\partial N_2}{\partial x} & \frac{\partial N_3}{\partial y} & \frac{\partial N_3}{\partial x}
\end{bmatrix}$

**Question 4 (Conceptual):**
Why is it important for the displacement field to be kinematically admissible when applying the principle of minimum potential energy?

**Answer 4:**
The principle of minimum potential energy seeks the equilibrium state among all possible *physically realizable* deformations. Kinematically admissible displacement fields are those that satisfy the essential or geometric boundary conditions (e.g., fixed displacements at supports). If a displacement field violates these boundary conditions, it does not represent a physically possible deformation of the body under the given constraints, and therefore cannot be the true equilibrium solution. The minimization process is only meaningful over the space of kinematically admissible fields.

---