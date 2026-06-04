---
title: "principle of minimum potential energy"
subject: "FINITE ELEMENT METHODS"
module: "Module 3: Derivation of strain "
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446429d"
status: "completed"
scrapedAt: "2026-05-20T18:13:01.380Z"
---
# FINITE ELEMENT METHODS - Module 3: Derivation of Strain

## Topic: Principle of Minimum Potential Energy

This topic delves into a fundamental energy principle that forms the basis for deriving stiffness matrices in many Finite Element Method (FEM) applications, particularly in structural mechanics. It allows us to find the equilibrium configuration of a structure by minimizing its total potential energy.

---

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the concept of potential energy in mechanics.
*   Derive the strain-displacement relations for various types of elements.
*   Formulate the strain energy of an elastic body.
*   Formulate the potential energy of a system under external forces.
*   Apply the principle of minimum potential energy to derive the equilibrium equations for structural systems.
*   Relate the principle of minimum potential energy to the weak form of governing differential equations.

---

### 2. Key Concepts and Definitions

**2.1 Potential Energy**

The potential energy of a system is the sum of its strain energy and potential energy due to external forces.

*   **Strain Energy ($U$):** The energy stored within a deformable body due to its deformation. For an elastic material, it is the work done by the internal stresses in deforming the body.
*   **Potential Energy of External Forces ($V$):** The work done by external forces as the body deforms. This includes work done by concentrated forces, distributed loads, and body forces.

The total potential energy ($\Pi$) is given by:
$\Pi = U + V$

**2.2 Principle of Minimum Potential Energy**

For a conservative elastic system in equilibrium, the total potential energy is a minimum. This means that if the system is displaced slightly from its equilibrium position, the change in total potential energy will be zero (for small displacements) and positive for any non-equilibrium displacement.

Mathematically, this can be expressed as:
$\delta \Pi = 0$

Where $\delta$ represents a variation or small change.

**2.3 Strain-Displacement Relations**

These equations relate the strain components in a material to the displacement components of the material points. For a 3D elastic body, in Cartesian coordinates, the strain components are defined as:

*   **Normal Strains:**
    *   $\epsilon_x = \frac{\partial u}{\partial x}$
    *   $\epsilon_y = \frac{\partial v}{\partial y}$
    *   $\epsilon_z = \frac{\partial w}{\partial z}$

*   **Shear Strains:**
    *   $\gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}$
    *   $\gamma_{yz} = \frac{\partial v}{\partial z} + \frac{\partial w}{\partial y}$
    *   $\gamma_{zx} = \frac{\partial w}{\partial x} + \frac{\partial u}{\partial z}$

Where:
*   $u, v, w$ are the displacement components in the $x, y, z$ directions, respectively.
*   $\epsilon$ denotes normal strain and $\gamma$ denotes shear strain.

**(Refer to Reddy, Chapter 3; Cook, Chapter 3; Bhavikatti, Chapter 3; Fish & Belytschko, Chapter 3)**

**2.4 Stress-Strain Relations (Hooke's Law)**

For a linear elastic, isotropic material, stresses are related to strains through Hooke's Law. For a 3D state of stress:

$\sigma_x = \frac{E}{(1+\nu)(1-2\nu)} [(1-\nu)\epsilon_x + \nu(\epsilon_y + \epsilon_z)]$
$\sigma_y = \frac{E}{(1+\nu)(1-2\nu)} [(1-\nu)\epsilon_y + \nu(\epsilon_x + \epsilon_z)]$
$\sigma_z = \frac{E}{(1+\nu)(1-2\nu)} [(1-\nu)\epsilon_z + \nu(\epsilon_x + \epsilon_y)]$
$\tau_{xy} = G \gamma_{xy} = \frac{E}{2(1+\nu)} \gamma_{xy}$
$\tau_{yz} = G \gamma_{yz} = \frac{E}{2(1+\nu)} \gamma_{yz}$
$\tau_{zx} = G \gamma_{zx} = \frac{E}{2(1+\nu)} \gamma_{zx}$

Where:
*   $E$ is Young's Modulus.
*   $\nu$ is Poisson's Ratio.
*   $G$ is the Shear Modulus, $G = \frac{E}{2(1+\nu)}$.
*   $\sigma$ denotes normal stress and $\tau$ denotes shear stress.

In matrix form: $\mathbf{\sigma} = \mathbf{D} \mathbf{\epsilon}$
Where $\mathbf{\sigma} = \{\sigma_x, \sigma_y, \sigma_z, \tau_{xy}, \tau_{yz}, \tau_{zx}\}^T$ and $\mathbf{\epsilon} = \{\epsilon_x, \epsilon_y, \epsilon_z, \gamma_{xy}, \gamma_{yz}, \gamma_{zx}\}^T$. The matrix $\mathbf{D}$ is the material constitutive matrix.

**2.5 Strain Energy Density**

The strain energy density ($u_s$) is the strain energy per unit volume. For a 3D stress state:
$u_s = \frac{1}{2} (\sigma_x \epsilon_x + \sigma_y \epsilon_y + \sigma_z \epsilon_z + \tau_{xy} \gamma_{xy} + \tau_{yz} \gamma_{yz} + \tau_{zx} \gamma_{zx})$

In matrix form: $u_s = \frac{1}{2} \mathbf{\epsilon}^T \mathbf{\sigma} = \frac{1}{2} \mathbf{\epsilon}^T \mathbf{D} \mathbf{\epsilon}$

**2.6 Total Strain Energy ($U$)**

The total strain energy is the integral of the strain energy density over the volume of the body:
$U = \int_V u_s \, dV = \int_V \frac{1}{2} \mathbf{\epsilon}^T \mathbf{D} \mathbf{\epsilon} \, dV$

**2.7 Potential Energy of External Forces ($V$)**

The potential energy of external forces is the negative of the work done by these forces.

*   **Work done by concentrated forces ($F_i$):** If a force $F_i$ acts at a point where the displacement is $u_i$, the work done is $F_i u_i$. The potential energy is $-F_i u_i$. For multiple concentrated forces, $V = - \sum_i F_i u_i$.

*   **Work done by distributed loads ($q$):** If a distributed load $q$ acts over a length or area, the work done is the integral of $q$ multiplied by the displacement. For a distributed load $q$ acting over a curve $C$, $V = - \int_C q u \, ds$.

*   **Work done by body forces ($\mathbf{b}$):** Body forces (like gravity) act over the volume of the body. The work done is the integral of the body force density multiplied by the displacement. $V = - \int_V \mathbf{b}^T \mathbf{u} \, dV$, where $\mathbf{u} = \{u, v, w\}^T$.

**2.8 Total Potential Energy ($\Pi$)**

Combining strain energy and potential energy of external forces:
$\Pi = U + V = \int_V \frac{1}{2} \mathbf{\epsilon}^T \mathbf{D} \mathbf{\epsilon} \, dV - \sum_i F_i u_i - \int_C q u \, ds - \int_V \mathbf{b}^T \mathbf{u} \, dV$

---

### 3. Derivation of Equilibrium Equations using Principle of Minimum Potential Energy

This is a crucial step for FEM formulation. We'll consider a simple 1D bar element to illustrate the process.

**3.1 1D Bar Element Example**

Consider a bar element of length $L$, cross-sectional area $A$, and Young's modulus $E$. Let the displacement at node $i$ be $u_i$ and at node $j$ be $u_j$.

*   **Displacement Field within the element:** Using linear interpolation (shape functions), the displacement $u(x)$ at any point $x$ along the element is:
    $u(x) = N_i(x) u_i + N_j(x) u_j$
    Where $N_i(x) = \frac{L-x}{L}$ and $N_j(x) = \frac{x}{L}$.
    In matrix form: $u(x) = \mathbf{N}(x) \mathbf{u}_e$
    Where $\mathbf{N}(x) = [\frac{L-x}{L}, \frac{x}{L}]$ and $\mathbf{u}_e = \{u_i, u_j\}^T$.

*   **Strain within the element:**
    $\epsilon_x = \frac{du}{dx} = \frac{d}{dx}(\mathbf{N}(x) \mathbf{u}_e) = \mathbf{B}(x) \mathbf{u}_e$
    Where $\mathbf{B}(x) = \frac{d\mathbf{N}}{dx} = [-\frac{1}{L}, \frac{1}{L}]$. This is the strain-displacement matrix for a 1D bar element.

*   **Stress within the element:**
    $\sigma_x = E \epsilon_x = E \mathbf{B}(x) \mathbf{u}_e$

*   **Strain Energy ($U$):**
    $U = \int_V \frac{1}{2} \sigma_x \epsilon_x \, dV = \int_0^L \frac{1}{2} (E \mathbf{B} \mathbf{u}_e) (\mathbf{B} \mathbf{u}_e) A \, dx$
    $U = \frac{1}{2} \mathbf{u}_e^T \left( \int_0^L E A \mathbf{B}^T \mathbf{B} \, dx \right) \mathbf{u}_e$
    Let $\mathbf{k}_e = \int_0^L E A \mathbf{B}^T \mathbf{B} \, dx$ be the element stiffness matrix.
    $U = \frac{1}{2} \mathbf{u}_e^T \mathbf{k}_e \mathbf{u}_e$

*   **Potential Energy of External Forces ($V$):**
    Consider a concentrated force $F$ acting at node $j$ and a distributed load $q(x)$ along the element.
    $V = -F u_j - \int_0^L q(x) u(x) \, dx$
    $V = -F u_j - \int_0^L q(x) (\mathbf{N}(x) \mathbf{u}_e) \, dx$
    $V = - \mathbf{F}_e^T \mathbf{u}_e$
    Where $\mathbf{F}_e = \{0, F\}^T + \int_0^L q(x) \mathbf{N}(x)^T \, dx$ is the equivalent nodal force vector.

*   **Total Potential Energy ($\Pi$):**
    $\Pi = U + V = \frac{1}{2} \mathbf{u}_e^T \mathbf{k}_e \mathbf{u}_e - \mathbf{F}_e^T \mathbf{u}_e$

*   **Applying the Principle of Minimum Potential Energy ($\delta \Pi = 0$):**
    We need to find the partial derivative of $\Pi$ with respect to each nodal displacement and set it to zero. For a 1D bar element with displacements $u_i$ and $u_j$:
    $\frac{\partial \Pi}{\partial u_i} = \frac{\partial}{\partial u_i} (\frac{1}{2} \mathbf{u}_e^T \mathbf{k}_e \mathbf{u}_e - \mathbf{F}_e^T \mathbf{u}_e) = 0$
    $\frac{\partial \Pi}{\partial u_j} = \frac{\partial}{\partial u_j} (\frac{1}{2} \mathbf{u}_e^T \mathbf{k}_e \mathbf{u}_e - \mathbf{F}_e^T \mathbf{u}_e) = 0$

    This leads to the element equilibrium equations:
    $\mathbf{k}_e \mathbf{u}_e = \mathbf{F}_e$

**(Refer to Reddy, Chapter 3; Cook, Chapter 3; Bhavikatti, Chapter 3; Fish & Belytschko, Chapter 3)**

**3.2 Generalization to Higher Dimensions and Elements**

The same principle extends to 2D and 3D elements (triangles, quadrilaterals, tetrahedrons, hexahedrons) and other physical phenomena (heat transfer, fluid flow). The steps involve:

1.  **Define Displacement Field:** Approximate displacements using shape functions and nodal unknowns: $\mathbf{u} = \mathbf{N} \mathbf{d}_e$.
2.  **Derive Strain-Displacement Relation:** $\mathbf{\epsilon} = \mathbf{B} \mathbf{d}_e$. The $\mathbf{B}$ matrix will be more complex for higher dimensions.
3.  **Formulate Strain Energy:** $U = \int_V \frac{1}{2} \mathbf{\epsilon}^T \mathbf{D} \mathbf{\epsilon} \, dV = \frac{1}{2} \mathbf{d}_e^T \left( \int_V \mathbf{B}^T \mathbf{D} \mathbf{B} \, dV \right) \mathbf{d}_e$. This gives the element stiffness matrix $\mathbf{k}_e = \int_V \mathbf{B}^T \mathbf{D} \mathbf{B} \, dV$.
4.  **Formulate Potential Energy of External Forces:** This involves integrals over the boundary for traction forces and over the volume for body forces. $V = - \mathbf{F}_e^T \mathbf{d}_e$.
5.  **Write Total Potential Energy:** $\Pi = \frac{1}{2} \mathbf{d}_e^T \mathbf{k}_e \mathbf{d}_e - \mathbf{F}_e^T \mathbf{d}_e$.
6.  **Minimize Total Potential Energy:** $\delta \Pi = (\mathbf{k}_e \mathbf{d}_e - \mathbf{F}_e)^T \delta \mathbf{d}_e = 0$. This yields $\mathbf{k}_e \mathbf{d}_e = \mathbf{F}_e$.

**(Refer to Reddy, Chapter 3; Cook, Chapter 3; Bhavikatti, Chapter 3; Fish & Belytschko, Chapter 3; Segerlind, Chapter 3; Ramamurthi, Chapter 3; Hutton, Chapter 3)**

---

### 4. Connection to Galerkin Method and Weak Form

The Principle of Minimum Potential Energy is a variational approach. It is equivalent to the **weighted residual method**, specifically the **Galerkin method**, when applied to problems derived from energy principles.

The governing differential equations of equilibrium (e.g., $\nabla \cdot \mathbf{\sigma} + \mathbf{b} = 0$) can be transformed into an integral form (weak form) by multiplying by a weight function and integrating over the domain. For problems with energy principles, the condition $\delta \Pi = 0$ naturally leads to the weak form where the arbitrary variations $\delta \mathbf{u}$ act as the weight functions.

**(Refer to Bhavikatti, Chapter 3; Fish & Belytschko, Chapter 3; Segerlind, Chapter 3)**

---

### 5. Course Outcomes Alignment

*   **CO1:** Understanding the governing equations of physical phenomena (stress analysis) and the basic procedure of FEM (deriving equilibrium equations from energy principles) aligns directly with this topic. (Knowledge Level: K2)
*   **CO3:** Formulating shape functions (used to define displacement fields) and element strain-displacement matrices ($\mathbf{B}$ matrix) is a direct outcome of applying this principle. (Knowledge Level: K4)
*   **CO4:** Evaluating element stress using energy methods (calculating strain energy and then relating it to stress) and understanding the connection to weighted residual formulations is a key takeaway. (Knowledge Level: K5)

---

### 6. Examples

**Example 3.1: Stiffness Matrix for a 1D Bar Element**

Let's calculate the stiffness matrix for a uniform bar element of length $L$, Young's modulus $E$, and cross-sectional area $A$.
$\mathbf{B} = [-\frac{1}{L}, \frac{1}{L}]$
$\mathbf{B}^T = \begin{bmatrix} -\frac{1}{L} \\ \frac{1}{L} \end{bmatrix}$
$\mathbf{B}^T \mathbf{B} = \begin{bmatrix} -\frac{1}{L} \\ \frac{1}{L} \end{bmatrix} [-\frac{1}{L}, \frac{1}{L}] = \begin{bmatrix} \frac{1}{L^2} & -\frac{1}{L^2} \\ -\frac{1}{L^2} & \frac{1}{L^2} \end{bmatrix}$

$\mathbf{k}_e = \int_0^L E A \mathbf{B}^T \mathbf{B} \, dx = E A \int_0^L \begin{bmatrix} \frac{1}{L^2} & -\frac{1}{L^2} \\ -\frac{1}{L^2} & \frac{1}{L^2} \end{bmatrix} \, dx$
$\mathbf{k}_e = E A \begin{bmatrix} \frac{1}{L^2} & -\frac{1}{L^2} \\ -\frac{1}{L^2} & \frac{1}{L^2} \end{bmatrix} \int_0^L \, dx = E A \begin{bmatrix} \frac{1}{L^2} & -\frac{1}{L^2} \\ -\frac{1}{L^2} & \frac{1}{L^2} \end{bmatrix} [L]$
$\mathbf{k}_e = \frac{E A}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$

This is the standard stiffness matrix for a 1D bar element.

**Example 3.2: Equivalent Nodal Forces for a Distributed Load**

Consider a 1D bar element with a uniformly distributed load $q$ per unit length. We want to find the equivalent nodal forces $\mathbf{F}_e$ at nodes $i$ and $j$.
$\mathbf{F}_e = \int_0^L q \mathbf{N}(x)^T \, dx$
$\mathbf{N}(x)^T = \begin{bmatrix} \frac{L-x}{L} \\ \frac{x}{L} \end{bmatrix}$

$F_{e,i} = \int_0^L q \frac{L-x}{L} \, dx = \frac{q}{L} \int_0^L (L-x) \, dx = \frac{q}{L} [Lx - \frac{x^2}{2}]_0^L = \frac{q}{L} (L^2 - \frac{L^2}{2}) = \frac{qL}{2}$
$F_{e,j} = \int_0^L q \frac{x}{L} \, dx = \frac{q}{L} \int_0^L x \, dx = \frac{q}{L} [\frac{x^2}{2}]_0^L = \frac{q}{L} \frac{L^2}{2} = \frac{qL}{2}$

So, $\mathbf{F}_e = \begin{Bmatrix} \frac{qL}{2} \\ \frac{qL}{2} \end{Bmatrix}$. The distributed load is represented by equivalent forces of half its intensity acting at each node.

---

### 7. Practice Questions/Exercises

1.  **Derive the strain energy expression for a 1D bar element in terms of its nodal displacements and stiffness matrix.**
2.  **Consider a 1D bar element subjected to an axial force $P$ applied at its free end. Derive the equivalent nodal force vector using the principle of minimum potential energy.**
3.  **Explain the physical significance of the principle of minimum potential energy.**
4.  **How does the principle of minimum potential energy relate to the weak form of the governing differential equations?**
5.  **For a 2D plane stress problem, if the strain-displacement relation is $\epsilon = \mathbf{B} \mathbf{d}_e$, express the element strain energy in matrix form.**

---

### 8. Answers to Practice Questions

1.  **Derivation:**
    *   Displacement: $u(x) = N_i(x) u_i + N_j(x) u_j = \mathbf{N} \mathbf{u}_e$
    *   Strain: $\epsilon_x = \frac{du}{dx} = \mathbf{B} \mathbf{u}_e$
    *   Stress: $\sigma_x = E \epsilon_x = E \mathbf{B} \mathbf{u}_e$
    *   Strain Energy Density: $u_s = \frac{1}{2} \sigma_x \epsilon_x = \frac{1}{2} (E \mathbf{B} \mathbf{u}_e) (\mathbf{B} \mathbf{u}_e) = \frac{1}{2} \mathbf{u}_e^T \mathbf{B}^T E \mathbf{B} \mathbf{u}_e$
    *   Total Strain Energy: $U = \int_V u_s \, dV = \int_0^L \frac{1}{2} \mathbf{u}_e^T \mathbf{B}^T E \mathbf{B} \mathbf{u}_e A \, dx$
    *   $U = \frac{1}{2} \mathbf{u}_e^T \left( \int_0^L E A \mathbf{B}^T \mathbf{B} \, dx \right) \mathbf{u}_e = \frac{1}{2} \mathbf{u}_e^T \mathbf{k}_e \mathbf{u}_e$
    Where $\mathbf{k}_e = \int_0^L E A \mathbf{B}^T \mathbf{B} \, dx$.

2.  **Equivalent Nodal Force:**
    *   Let the force $P$ be applied at node $j$. The potential energy of the external force is $V = -P u_j$.
    *   In matrix form, $\mathbf{u}_e = \{u_i, u_j\}^T$ and $\mathbf{F}_e = \{0, P\}^T$.
    *   Thus, $V = - \mathbf{F}_e^T \mathbf{u}_e$.

3.  **Physical Significance:** The principle states that a structure will deform into a stable equilibrium configuration that minimizes its total potential energy. Imagine a ball rolling on a curved surface; it will settle at the lowest point of the surface, which corresponds to the minimum potential energy. Similarly, an elastic structure will deform to a position where the stored strain energy and the potential energy of external forces are balanced in such a way that the total potential energy is at its minimum.

4.  **Relation to Weak Form:** The process of minimizing the total potential energy $\Pi$ involves setting the variation $\delta \Pi$ to zero with respect to the nodal displacements. This means $\frac{\partial \Pi}{\partial u_k} = 0$ for each node $k$. When the expressions for strain energy ($U$) and potential energy of forces ($V$) are substituted and differentiated, this operation is mathematically equivalent to multiplying the original governing differential equations by a set of weighting functions (which are the shape functions in this case) and integrating over the domain, thereby yielding the weak form.

5.  **Element Strain Energy:**
    *   The strain energy density for a 2D plane stress problem is $u_s = \frac{1}{2} \mathbf{\epsilon}^T \mathbf{D} \mathbf{\epsilon}$.
    *   Given $\mathbf{\epsilon} = \mathbf{B} \mathbf{d}_e$, substitute this into the expression:
        $u_s = \frac{1}{2} (\mathbf{B} \mathbf{d}_e)^T \mathbf{D} (\mathbf{B} \mathbf{d}_e)$
        $u_s = \frac{1}{2} \mathbf{d}_e^T \mathbf{B}^T \mathbf{D} \mathbf{B} \mathbf{d}_e$
    *   The total element strain energy ($U$) is the integral of the strain energy density over the element's area ($A_e$):
        $U = \int_{A_e} u_s \, dA = \int_{A_e} \frac{1}{2} \mathbf{d}_e^T \mathbf{B}^T \mathbf{D} \mathbf{B} \mathbf{d}_e \, dA$
    *   Since $\mathbf{d}_e$ are constants for the element, they can be taken out of the integral.
        $U = \frac{1}{2} \mathbf{d}_e^T \left( \int_{A_e} \mathbf{B}^T \mathbf{D} \mathbf{B} \, dA \right) \mathbf{d}_e$
    *   The term in the parenthesis is the element stiffness matrix $\mathbf{k}_e$:
        $\mathbf{k}_e = \int_{A_e} \mathbf{B}^T \mathbf{D} \mathbf{B} \, dA$
    *   Therefore, the element strain energy is $U = \frac{1}{2} \mathbf{d}_e^T \mathbf{k}_e \mathbf{d}_e$.

---

### 9. Important Points to Remember

*   **Conservative System:** The principle of minimum potential energy is applicable to conservative elastic systems.
*   **Equilibrium:** Equilibrium is achieved when the total potential energy is at a minimum.
*   **Variational Principle:** It's a variational principle, meaning we seek a state that minimizes a function (the total potential energy).
*   **FEM Foundation:** It's a cornerstone for deriving element stiffness matrices and equilibrium equations in FEM, especially for structural mechanics.
*   **Strain Energy:** Represents stored energy due to deformation.
*   **Potential Energy of Loads:** Represents the negative of work done by external forces.
*   **$\delta \Pi = 0$:** The mathematical statement of the principle, which leads to equilibrium equations.
*   **Shape Functions:** Essential for approximating displacement fields and subsequently strains.
*   **$\mathbf{B}$ Matrix:** The strain-displacement matrix, crucial for relating strains to nodal displacements.
*   **$\mathbf{k}_e = \int_V \mathbf{B}^T \mathbf{D} \mathbf{B} \, dV$:** The general form of an element stiffness matrix derived from strain energy.
*   **Equivalent Nodal Forces:** Distributed loads or body forces must be converted into equivalent concentrated forces acting at the nodes.

---
This comprehensive study note covers the principle of minimum potential energy for Module 3, aligning with the provided learning and course outcomes and referencing the recommended textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
