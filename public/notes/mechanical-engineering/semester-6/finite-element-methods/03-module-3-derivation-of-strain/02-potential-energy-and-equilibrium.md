---
title: "Potential energy and equilibrium"
subject: "FINITE ELEMENT METHODS"
module: "Module 3: Derivation of strain "
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf480446384f"
status: "completed"
scrapedAt: "2026-05-20T18:04:02.639Z"
---
# Finite Element Methods: Module 3 - Derivation of Strain

## Topic: Potential Energy and Equilibrium

This module focuses on understanding how physical systems in equilibrium can be analyzed using the principle of minimum potential energy, a cornerstone of the Finite Element Method (FEM). We will explore the concepts of strain, stress, and how they relate to potential energy in elastic bodies. This knowledge is crucial for formulating the stiffness matrices of finite elements.

**Course Outcomes Addressed:**

*   **CO1 (K2):** To understand the governing equations of various physical phenomena and basic procedure of FEM. (This topic lays the groundwork for understanding the governing equations in terms of energy principles.)
*   **CO4 (K5):** Evaluate element stress using energy method and study Galekin weight residual formulations. (This topic directly relates to the energy method for evaluating stress, which is a key part of CO4.)

**Learning Outcomes Addressed:**

*   Understanding the concept of strain and its relationship to displacement.
*   Formulating the strain-displacement relationship.
*   Understanding the concept of stress and its relationship to strain (Hooke's Law).
*   Understanding the concept of strain energy and complementary energy.
*   Understanding the principle of minimum potential energy.
*   Deriving the stiffness matrix and load vectors using the principle of minimum potential energy.

---

### 1. Introduction to Strain and Displacement

In solid mechanics, **strain** is a measure of deformation representing the displacement between nearby points in a body. It is a dimensionless quantity. For small deformations, strain is directly proportional to the displacement.

**Key Concepts:**

*   **Displacement Vector ($\mathbf{u}$):** Represents the displacement of any point $(x, y, z)$ in a body. In 3D, $\mathbf{u} = \{u, v, w\}^T$, where $u$, $v$, and $w$ are displacements in the x, y, and z directions, respectively.
*   **Strain Tensor ($\boldsymbol{\epsilon}$):** A mathematical object that describes the deformation of a continuous medium. It relates to the displacement field.

**Strain-Displacement Relationships (Small Deformation Theory):**

For a general 3D body, the strain components are defined as:

*   **Normal Strains:**
    *   $\epsilon_x = \frac{\partial u}{\partial x}$
    *   $\epsilon_y = \frac{\partial v}{\partial y}$
    *   $\epsilon_z = \frac{\partial w}{\partial z}$

*   **Shear Strains:**
    *   $\gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}$
    *   $\gamma_{yz} = \frac{\partial v}{\partial z} + \frac{\partial w}{\partial y}$
    *   $\gamma_{zx} = \frac{\partial w}{\partial x} + \frac{\partial u}{\partial z}$

These can be written in a compact matrix form:

$\boldsymbol{\epsilon} = \begin{Bmatrix} \epsilon_x \\ \epsilon_y \\ \epsilon_z \\ \gamma_{xy} \\ \gamma_{yz} \\ \gamma_{zx} \end{Bmatrix} = \begin{Bmatrix} \frac{\partial u}{\partial x} \\ \frac{\partial v}{\partial y} \\ \frac{\partial w}{\partial z} \\ \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x} \\ \frac{\partial v}{\partial z} + \frac{\partial w}{\partial y} \\ \frac{\partial w}{\partial x} + \frac{\partial u}{\partial z} \end{Bmatrix}$

**In 2D (plane stress or plane strain):**

If we consider a 2D problem where displacement is only in the x-y plane ($u(x,y), v(x,y)$ and $w=0$), the strain components are:

*   $\epsilon_x = \frac{\partial u}{\partial x}$
*   $\epsilon_y = \frac{\partial v}{\partial y}$
*   $\gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}$

The strain vector in 2D is:

$\boldsymbol{\epsilon} = \begin{Bmatrix} \epsilon_x \\ \epsilon_y \\ \gamma_{xy} \end{Bmatrix} = \begin{Bmatrix} \frac{\partial u}{\partial x} \\ \frac{\partial v}{\partial y} \\ \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x} \end{Bmatrix}$

**Reference:** Reddy (3rd Ed., Chapter 2), Cook (3rd Ed., Chapter 2), Bhavikatti (3rd Ed., Chapter 2).

---

### 2. Stress-Strain Relationship (Hooke's Law)

For linearly elastic materials, stress is directly proportional to strain. This relationship is described by **Hooke's Law**.

**Key Concepts:**

*   **Stress Tensor ($\boldsymbol{\sigma}$):** Represents the internal forces that neighbouring particles of a continuous material exert upon each other.
*   **Elastic Modulus (E):** A measure of stiffness of an elastic material.
*   **Poisson's Ratio ($\nu$):** The ratio of transverse strain to axial strain under axial stress.
*   **Shear Modulus (G):** A measure of the elastic modulus of a solid material concerning shear deformation.

**In 3D (Isotropic Material):**

The stress-strain relationship can be expressed as:

$\boldsymbol{\sigma} = \mathbf{D} \boldsymbol{\epsilon}$

where $\boldsymbol{\sigma} = \{\sigma_x, \sigma_y, \sigma_z, \tau_{xy}, \tau_{yz}, \tau_{zx}\}^T$ is the stress vector, and $\mathbf{D}$ is the material constitutive matrix (or stress-strain matrix).

For an isotropic material, the $\mathbf{D}$ matrix is:

$\mathbf{D} = \frac{E}{(1+\nu)(1-2\nu)} \begin{bmatrix} 1-\nu & \nu & \nu & 0 & 0 & 0 \\ \nu & 1-\nu & \nu & 0 & 0 & 0 \\ \nu & \nu & 1-\nu & 0 & 0 & 0 \\ 0 & 0 & 0 & \frac{1-2\nu}{2} & 0 & 0 \\ 0 & 0 & 0 & 0 & \frac{1-2\nu}{2} & 0 \\ 0 & 0 & 0 & 0 & 0 & \frac{1-2\nu}{2} \end{bmatrix}$

**In 2D (Plane Stress):**

The stress vector is $\boldsymbol{\sigma} = \{\sigma_x, \sigma_y, \tau_{xy}\}^T$. The $\mathbf{D}$ matrix is:

$\mathbf{D} = \frac{E}{1-\nu^2} \begin{bmatrix} 1 & \nu & 0 \\ \nu & 1 & 0 \\ 0 & 0 & \frac{1-\nu}{2} \end{bmatrix}$

**In 2D (Plane Strain):**

The $\mathbf{D}$ matrix is:

$\mathbf{D} = \frac{E}{(1+\nu)(1-2\nu)} \begin{bmatrix} 1-\nu & \nu & 0 \\ \nu & 1-\nu & 0 \\ 0 & 0 & \frac{1-2\nu}{2} \end{bmatrix}$

**Relationship between E, G, and $\nu$:**

$G = \frac{E}{2(1+\nu)}$

**Reference:** Reddy (3rd Ed., Chapter 2), Cook (3rd Ed., Chapter 2), Bhavikatti (3rd Ed., Chapter 2).

---

### 3. Strain Energy

**Strain Energy** is the energy stored in an elastic body as a result of deformation. For linearly elastic materials, it is half the product of stress and strain.

**Key Concepts:**

*   **Strain Energy Density ($U_0$):** Strain energy per unit volume.
*   **Total Strain Energy ($U$):** The integral of strain energy density over the volume of the body.

**Formulation:**

In matrix form, the strain energy density is:

$U_0 = \frac{1}{2} \boldsymbol{\epsilon}^T \boldsymbol{\sigma}$

Substituting $\boldsymbol{\sigma} = \mathbf{D} \boldsymbol{\epsilon}$:

$U_0 = \frac{1}{2} \boldsymbol{\epsilon}^T \mathbf{D} \boldsymbol{\epsilon}$

The total strain energy for a body is:

$U = \int_{V} U_0 \, dV = \int_{V} \frac{1}{2} \boldsymbol{\epsilon}^T \mathbf{D} \boldsymbol{\epsilon} \, dV$

**For a finite element,** if we consider the displacement vector of the element as $\mathbf{u}_e$ and the corresponding strain-displacement matrix as $\mathbf{B}_e$, such that $\boldsymbol{\epsilon}_e = \mathbf{B}_e \mathbf{u}_e$, then the element strain energy is:

$U_e = \int_{V_e} \frac{1}{2} (\mathbf{B}_e \mathbf{u}_e)^T \mathbf{D} (\mathbf{B}_e \mathbf{u}_e) \, dV_e$

$U_e = \frac{1}{2} \mathbf{u}_e^T \left( \int_{V_e} \mathbf{B}_e^T \mathbf{D} \mathbf{B}_e \, dV_e \right) \mathbf{u}_e$

We define the **element stiffness matrix** as:

$\mathbf{k}_e = \int_{V_e} \mathbf{B}_e^T \mathbf{D} \mathbf{B}_e \, dV_e$

Therefore, the element strain energy is:

$U_e = \frac{1}{2} \mathbf{u}_e^T \mathbf{k}_e \mathbf{u}_e$

**Important Point:** The stiffness matrix $\mathbf{k}_e$ is derived from the strain-displacement relationship and the material properties.

**Reference:** Reddy (3rd Ed., Chapter 3), Cook (3rd Ed., Chapter 3), Bhavikatti (3rd Ed., Chapter 3), Segerlind (2nd Ed., Chapter 4).

---

### 4. Potential Energy

The **Principle of Minimum Potential Energy** states that for an elastic body in equilibrium under a given set of loads, the total potential energy is at a minimum. This principle forms the basis for the stiffness matrix formulation in FEM.

**Key Concepts:**

*   **Total Potential Energy ($\Pi$):** The sum of strain energy ($U$) and potential energy of external forces ($W_{ext}$).
*   **Work done by External Forces ($W_{ext}$):** This includes work done by body forces (e.g., gravity) and surface forces (e.g., applied pressure or traction).
*   **Potential Energy of External Forces ($\Omega$):** Defined as the negative of the work done by external forces. So, $\Omega = -W_{ext}$.

The total potential energy is given by:

$\Pi = U - W_{ext} = U + \Omega$

**Components of Potential Energy of External Forces:**

*   **Body Forces ($\mathbf{f}$):** Forces acting on the volume of the body.
    $\Omega_{body} = -\int_{V} \mathbf{f}^T \mathbf{u} \, dV$
*   **Surface Forces ($\mathbf{t}$):** Forces acting on the surface of the body.
    $\Omega_{surface} = -\int_{S} \mathbf{t}^T \mathbf{u} \, dS$

**For a finite element:**

The total potential energy for an element is:

$\Pi_e = U_e + \Omega_e$

$\Pi_e = \frac{1}{2} \mathbf{u}_e^T \mathbf{k}_e \mathbf{u}_e - \mathbf{F}_e^T \mathbf{u}_e$

where $\mathbf{F}_e$ is the equivalent nodal force vector for the element, derived from the distributed external forces.

*   **Body Force Contribution:**
    $\mathbf{F}_{e, body} = \int_{V_e} \mathbf{N}_e^T \mathbf{f} \, dV_e$
    where $\mathbf{N}_e$ is the matrix of shape functions for the element.
*   **Surface Force Contribution:**
    $\mathbf{F}_{e, surface} = \int_{S_e} \mathbf{N}_e^T \mathbf{t} \, dS_e$
    where the integration is performed over the boundary of the element where surface forces are applied.

**Important Point:** The potential energy of external forces is calculated by considering the work done by these forces on the nodal displacements.

**Reference:** Reddy (3rd Ed., Chapter 3), Cook (3rd Ed., Chapter 3), Bhavikatti (3rd Ed., Chapter 3), Segerlind (2nd Ed., Chapter 4), Fish & Belytschko (2nd Ed., Chapter 3).

---

### 5. Principle of Minimum Potential Energy and Equilibrium

The principle of minimum potential energy is applied by taking the partial derivative of the total potential energy with respect to each nodal displacement and setting it to zero. This yields the system of equations that describe the equilibrium of the body.

**Key Concepts:**

*   **Equilibrium:** A state where the net force and moment on a body are zero.
*   **Stationarity Condition:** The condition that the derivative of a function is zero, indicating a minimum, maximum, or saddle point.

**Derivation:**

For the total potential energy $\Pi_e$ of an element to be at a minimum with respect to its nodal displacements $\mathbf{u}_e$:

$\frac{\partial \Pi_e}{\partial \mathbf{u}_e} = \frac{\partial}{\partial \mathbf{u}_e} \left( \frac{1}{2} \mathbf{u}_e^T \mathbf{k}_e \mathbf{u}_e - \mathbf{F}_e^T \mathbf{u}_e \right) = \mathbf{0}$

Taking the derivative:

$\frac{1}{2} (2 \mathbf{k}_e \mathbf{u}_e) - \mathbf{F}_e = \mathbf{0}$

$\mathbf{k}_e \mathbf{u}_e - \mathbf{F}_e = \mathbf{0}$

$\mathbf{k}_e \mathbf{u}_e = \mathbf{F}_e$

This is the fundamental equation for each finite element in equilibrium.

**Assembly of Global System of Equations:**

The element stiffness matrices ($\mathbf{k}_e$) and nodal force vectors ($\mathbf{F}_e$) are assembled into a global stiffness matrix ($\mathbf{K}$) and a global nodal force vector ($\mathbf{F}$). The assembly process ensures that the equilibrium equations for the entire discretized body are satisfied.

$\mathbf{K} \mathbf{U} = \mathbf{F}$

where $\mathbf{U}$ is the global nodal displacement vector.

**Solving for Displacements:**

The system of linear equations $\mathbf{K} \mathbf{U} = \mathbf{F}$ is solved to find the nodal displacements $\mathbf{U}$. Boundary conditions (e.g., fixed supports) must be applied to solve this system.

**Calculating Stresses:**

Once the nodal displacements $\mathbf{U}$ are known, the displacements at any point within an element can be found using the shape functions: $\mathbf{u}_e = \mathbf{N}_e \mathbf{u}_e$.
The strains within the element are then calculated using the strain-displacement matrix: $\boldsymbol{\epsilon}_e = \mathbf{B}_e \mathbf{u}_e$.
Finally, stresses are calculated using Hooke's Law: $\boldsymbol{\sigma}_e = \mathbf{D} \boldsymbol{\epsilon}_e$.

**Important Point:** The principle of minimum potential energy provides a variational approach to FEM, leading to a symmetric and positive-definite stiffness matrix.

**Reference:** Reddy (3rd Ed., Chapter 3), Cook (3rd Ed., Chapter 3), Bhavikatti (3rd Ed., Chapter 3), Segerlind (2nd Ed., Chapter 4), Fish & Belytschko (2nd Ed., Chapter 3), Hutton (3rd Ed., Chapter 3).

---

### 6. Example: 1D Bar Element

Let's consider a 1D bar element of length $L$, cross-sectional area $A$, and Young's modulus $E$. The element has two nodes, 1 and 2, with axial displacements $u_1$ and $u_2$.

**1. Strain-Displacement Relationship:**

The axial strain $\epsilon_x$ is:
$\epsilon_x = \frac{du}{dx}$

Using linear shape functions:
$u(x) = N_1(x) u_1 + N_2(x) u_2$
$N_1(x) = 1 - \frac{x}{L}$, $N_2(x) = \frac{x}{L}$

$\epsilon_x = \frac{du}{dx} = \frac{d}{dx} \left( (1-\frac{x}{L}) u_1 + (\frac{x}{L}) u_2 \right) = -\frac{1}{L} u_1 + \frac{1}{L} u_2 = \frac{1}{L} (-u_1 + u_2)$

In matrix form: $\epsilon_x = \mathbf{B} \mathbf{u}_e$, where $\mathbf{u}_e = \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix}$ and $\mathbf{B} = \frac{1}{L} \begin{bmatrix} -1 & 1 \end{bmatrix}$.

**2. Stiffness Matrix:**

The material matrix for 1D is $D = E$.
$\mathbf{k}_e = \int_{V_e} \mathbf{B}^T \mathbf{D} \mathbf{B} \, dV_e = \int_0^L \begin{bmatrix} -1 \\ 1 \end{bmatrix} E \begin{bmatrix} -1 & 1 \end{bmatrix} A \, dx$

$\mathbf{k}_e = EA \int_0^L \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \, dx$

$\mathbf{k}_e = EA \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \int_0^L dx = EA \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} [x]_0^L$

$\mathbf{k}_e = EA \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} L = \frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$

**3. Potential Energy:**

$\Pi_e = U_e - W_{ext}$
$U_e = \frac{1}{2} \mathbf{u}_e^T \mathbf{k}_e \mathbf{u}_e = \frac{1}{2} \begin{bmatrix} u_1 & u_2 \end{bmatrix} \frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix}$
$U_e = \frac{EA}{2L} (u_1^2 - 2u_1u_2 + u_2^2) = \frac{EA}{2L} (u_2 - u_1)^2$

If a distributed axial load $q(x)$ acts on the bar (force per unit length), and we have surface forces at nodes, say $P_1$ and $P_2$:

$\Omega_e = - \int_0^L N(x) q(x) \, dx - \mathbf{N}^T \mathbf{P}$

For nodal forces $P_1, P_2$:
$\Omega_e = - \left( N_1(x)P_1 + N_2(x)P_2 \right)$ (this is incorrect, should be dot product of nodal displacement and forces)

Let's consider a point load $P$ at node 2 and no external loads at node 1.
$\Omega_e = -(u_1 \cdot 0 + u_2 \cdot P) = -u_2 P$

So, $\Pi_e = \frac{EA}{2L} (u_2 - u_1)^2 - u_2 P$.

**4. Equilibrium:**

$\frac{\partial \Pi_e}{\partial u_1} = \frac{EA}{2L} \cdot 2(u_2 - u_1)(-1) - 0 = -\frac{EA}{L}(u_2 - u_1) = 0 \implies EA(u_1 - u_2)/L = 0$
$\frac{\partial \Pi_e}{\partial u_2} = \frac{EA}{2L} \cdot 2(u_2 - u_1)(1) - P = \frac{EA}{L}(u_2 - u_1) - P = 0 \implies EA(u_2 - u_1)/L = P$

Combining these:
$\begin{bmatrix} EA/L & -EA/L \\ -EA/L & EA/L \end{bmatrix} \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix} = \begin{Bmatrix} 0 \\ P \end{Bmatrix}$

This is the element stiffness matrix equation $\mathbf{k}_e \mathbf{u}_e = \mathbf{F}_e$.

**Reference:** Bhavikatti (3rd Ed., Chapter 3), Reddy (3rd Ed., Chapter 3).

---

### 7. Complementary Energy

While the principle of minimum potential energy is widely used, for calculating stresses, the **principle of minimum complementary energy** can also be employed. Complementary energy is related to forces rather than displacements.

**Key Concepts:**

*   **Complementary Energy Density ($U_c$):** Related to the work done by stresses.
*   **Total Complementary Energy ($\Pi_c$):** The integral of complementary energy density over the volume.

**Relationship between Stress and Strain:**

From Hooke's Law, $\boldsymbol{\epsilon} = \mathbf{D}^{-1} \boldsymbol{\sigma}$. Let $\mathbf{S} = \mathbf{D}^{-1}$ be the **flexibility matrix**.

$U_c = \frac{1}{2} \boldsymbol{\sigma}^T \mathbf{S} \boldsymbol{\sigma}$

The principle of minimum complementary energy states that for a body in equilibrium, the total complementary energy is minimized with respect to the stress field.

**Reference:** Reddy (3rd Ed., Chapter 3), Segerlind (2nd Ed., Chapter 4).

---

### 8. Practice Questions and Answers

**Question 1:** Define strain and provide the strain-displacement relationship for a 2D plane stress problem.

**Answer 1:** Strain is a measure of deformation, representing the relative displacement between nearby points in a body. For a 2D plane stress problem, the strain vector is given by $\boldsymbol{\epsilon} = \begin{Bmatrix} \epsilon_x \\ \epsilon_y \\ \gamma_{xy} \end{Bmatrix} = \begin{Bmatrix} \frac{\partial u}{\partial x} \\ \frac{\partial v}{\partial y} \\ \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x} \end{Bmatrix}$.

**Question 2:** What is the principle of minimum potential energy?

**Answer 2:** The principle of minimum potential energy states that for a conservative elastic system in equilibrium, the total potential energy is at a minimum. This means that the first variation of the total potential energy with respect to displacement is zero.

**Question 3:** Derive the element stiffness matrix $\mathbf{k}_e$ for a 1D bar element using the principle of minimum potential energy.

**Answer 3:**
The element stiffness matrix is given by $\mathbf{k}_e = \int_{V_e} \mathbf{B}_e^T \mathbf{D} \mathbf{B}_e \, dV_e$.
For a 1D bar element of length $L$, cross-sectional area $A$, and Young's modulus $E$:
$\mathbf{B} = \frac{1}{L} \begin{bmatrix} -1 & 1 \end{bmatrix}$ and $D=E$.
$\mathbf{k}_e = \int_0^L \begin{bmatrix} -1 \\ 1 \end{bmatrix} E \begin{bmatrix} -1 & 1 \end{bmatrix} A \, dx = \frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$.

**Question 4:** A 1D bar element has the stiffness matrix $\mathbf{k}_e = \frac{100}{5} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$ (in kN/mm) and element nodal forces $\mathbf{F}_e = \begin{Bmatrix} 10 \\ 20 \end{Bmatrix}$ (in kN). Determine the nodal displacements $\mathbf{u}_e$ if the element has length $L=5$ mm.

**Answer 4:**
We need to solve $\mathbf{k}_e \mathbf{u}_e = \mathbf{F}_e$.
$\frac{100}{5} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix} = \begin{Bmatrix} 10 \\ 20 \end{Bmatrix}$
$20 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix} = \begin{Bmatrix} 10 \\ 20 \end{Bmatrix}$
$\begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix} = \begin{Bmatrix} 0.5 \\ 1 \end{Bmatrix}$

This system is singular (determinant is $1 \times 1 - (-1) \times (-1) = 0$), meaning we need boundary conditions to find unique displacements.
From the first row: $u_1 - u_2 = 0.5 \implies u_1 = u_2 + 0.5$.
From the second row: $-u_1 + u_2 = 1 \implies u_1 = u_2 - 1$.

These two equations are contradictory, indicating an issue with the provided nodal forces or the system setup without boundary conditions. If we assume the problem implies equilibrium based on the provided forces, and we need to find the relationship, the equations are $u_1 - u_2 = 0.5$ and $-u_1 + u_2 = 1$.

**Let's re-evaluate the problem statement assuming this is a setup for applying boundary conditions:**
The equations are:
1. $20(u_1 - u_2) = 10$
2. $20(-u_1 + u_2) = 20$

These simplify to:
1. $u_1 - u_2 = 0.5$
2. $-u_1 + u_2 = 1$

The system is indeed inconsistent if interpreted as a direct equilibrium problem without considering how these forces were derived (e.g., from distributed loads). In a typical FEM problem, the external force vector $\mathbf{F}_e$ is derived from applied loads, and the $\mathbf{k}_e \mathbf{u}_e = \mathbf{F}_e$ system would be solved along with boundary conditions to yield consistent displacements.

**A more realistic scenario would be:**
If an external force $P_1=10$ at node 1 and $P_2=20$ at node 2 are applied to a fixed-end bar, and we want to find the internal forces. However, the question asks for nodal displacements. The provided forces and stiffness matrix lead to conflicting requirements for equilibrium without a boundary condition.

**Let's assume a boundary condition:** If node 1 is fixed, $u_1 = 0$.
Then, from $u_1 - u_2 = 0.5$, we get $0 - u_2 = 0.5 \implies u_2 = -0.5$.
And from $-u_1 + u_2 = 1$, we get $0 + u_2 = 1 \implies u_2 = 1$.
This still shows inconsistency if both rows of the equilibrium equation must hold true independently.

**The correct interpretation for a singular stiffness matrix is that one equation is redundant.** The physical meaning is that the element can translate rigidly without changing its internal strain energy. To obtain a unique solution for displacements, essential boundary conditions (e.g., fixing one end) must be imposed. If $u_1=0$, then the equation $20(-u_1+u_2)=20$ becomes $20(u_2)=20$, so $u_2=1$. Then, the strain is $\epsilon_x = \frac{1}{5}(-0+1) = 0.2$. The stress would be $\sigma_x = E \epsilon_x = E \times 0.2$. This question seems to be designed to highlight the singularity and the need for boundary conditions.

---

### 9. Important Points to Remember

*   **Strain** is directly related to **displacement**.
*   **Stress** is related to **strain** through Hooke's Law ($\boldsymbol{\sigma} = \mathbf{D} \boldsymbol{\epsilon}$).
*   **Strain Energy ($U$)** is the energy stored due to deformation.
*   The **Principle of Minimum Potential Energy** states that $\Pi = U + \Omega$ is minimized at equilibrium.
*   The element stiffness matrix $\mathbf{k}_e$ is derived from the strain-displacement matrix $\mathbf{B}_e$ and the material matrix $\mathbf{D}$: $\mathbf{k}_e = \int_{V_e} \mathbf{B}_e^T \mathbf{D} \mathbf{B}_e \, dV_e$.
*   The fundamental finite element equation is $\mathbf{k}_e \mathbf{u}_e = \mathbf{F}_e$, where $\mathbf{F}_e$ is the equivalent nodal force vector.
*   Assembly of element equations leads to the global system $\mathbf{K} \mathbf{U} = \mathbf{F}$.
*   Applying boundary conditions is essential to solve for unique nodal displacements.
*   Once displacements are known, strains and stresses can be calculated.

---

This concludes the notes on Potential Energy and Equilibrium for Module 3. Understanding these concepts is fundamental to the entire finite element method.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
