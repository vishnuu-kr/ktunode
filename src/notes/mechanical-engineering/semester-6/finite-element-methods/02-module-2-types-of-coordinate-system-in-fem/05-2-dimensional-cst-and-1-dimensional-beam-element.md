---
title: "2-Dimensional CST and 1- Dimensional beam element"
subject: "FINITE ELEMENT METHODS"
module: "Module 2: Types of coordinate system in FEM"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463849"
status: "completed"
scrapedAt: "2026-05-20T18:03:58.976Z"
---
# FINITE ELEMENT METHODS - Module 2: Types of Coordinate Systems in FEM

## Topic 2: 2-Dimensional CST and 1-Dimensional Beam Element

---

### Introduction to Coordinate Systems in FEM

The Finite Element Method (FEM) relies heavily on defining elements and their properties within a suitable coordinate system. Understanding different coordinate systems is crucial for formulating element stiffness matrices and displacement fields. This module focuses on two fundamental element types: the **2-Dimensional Constant Strain Triangle (CST)** and the **1-Dimensional Beam Element**.

---

### 2.1 2-Dimensional Constant Strain Triangle (CST) Element

The CST element is a foundational 2D element used for analyzing plane stress and plane strain problems. Its defining characteristic is the assumption of **constant strain** throughout the element.

#### 2.1.1 Element Geometry and Nodes

*   **Definition:** A CST element is a three-noded triangular element.
*   **Nodes:** Each node has two degrees of freedom (DOFs): displacement in the x-direction ($u$) and displacement in the y-direction ($v$).
*   **Node Numbering:** Nodes are typically numbered sequentially (1, 2, 3) either clockwise or counter-clockwise. The order can influence the sign of certain calculations, but consistency is key.

#### 2.1.2 Displacement Field within the CST Element

*   **Assumption:** The displacement field within the CST element is assumed to be linear. This means the displacement components $u$ and $v$ can be expressed as linear functions of the global Cartesian coordinates $x$ and $y$:
    $$ u(x, y) = c_1 + c_2x + c_3y $$
    $$ v(x, y) = c_4 + c_5x + c_6y $$
    where $c_1, c_2, ..., c_6$ are constants.
*   **Total DOFs per Element:** Since each of the 3 nodes has 2 DOFs ($u, v$), the total number of DOFs per CST element is $3 \times 2 = 6$.

#### 2.1.3 Shape Functions for CST Element

*   **Concept:** Shape functions (also known as interpolation functions or basis functions) are used to interpolate the displacement field within an element based on the nodal displacements. They are typically denoted by $N_i$, where $i$ is the node number.
*   **Formulation:** For a CST element, the displacement field can be expressed in terms of nodal displacements and shape functions:
    $$ u(x, y) = \sum_{i=1}^{3} N_i(x, y) u_i $$
    $$ v(x, y) = \sum_{i=1}^{3} N_i(x, y) v_i $$
    where $u_i$ and $v_i$ are the nodal displacements at node $i$.
*   **Linear Shape Functions:** The shape functions for a CST element are linear and can be expressed in terms of the area coordinates (also known as natural coordinates or trilinear coordinates), denoted by $L_1, L_2, L_3$.
    *   $L_1 = \frac{(x_2y_3 - x_3y_2) + (y_2 - y_3)x + (x_3 - x_2)y}{2A}$
    *   $L_2 = \frac{(x_3y_1 - x_1y_3) + (y_3 - y_1)x + (x_1 - x_3)y}{2A}$
    *   $L_3 = \frac{(x_1y_2 - x_2y_1) + (y_1 - y_2)x + (x_2 - x_1)y}{2A}$
    where $A$ is the area of the triangle, and $(x_i, y_i)$ are the coordinates of node $i$.
    *   **Property 1:** $L_1 + L_2 + L_3 = 1$
    *   **Property 2:** $L_i = 1$ at node $i$ and $L_i = 0$ at other nodes.
*   **Shape Functions in terms of Area Coordinates:**
    $$ N_1 = L_1 $$
    $$ N_2 = L_2 $$
    $$ N_3 = L_3 $$
*   **Displacement Vector:** The displacement vector $\mathbf{u}$ and nodal displacement vector $\mathbf{u}_e$ are related by:
    $$ \mathbf{u}(x, y) = [N_1(x,y), 0, N_2(x,y), 0, N_3(x,y), 0; \ 0, N_1(x,y), 0, N_2(x,y), 0, N_3(x,y)] \begin{Bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \\ u_3 \\ v_3 \end{Bmatrix} $$
    $$ \mathbf{u} = \mathbf{N} \mathbf{u}_e $$
    where $\mathbf{N}$ is the matrix of shape functions.

#### 2.1.4 Strain-Displacement Relationship for CST Element (CO3)

*   **Concept:** Strain is defined as the rate of change of displacement with respect to position. For a 2D element, we consider normal strains ($\epsilon_x$, $\epsilon_y$) and shear strain ($\gamma_{xy}$).
*   **Small Strain Assumption:** In most FEM applications, we assume small deformations, so the strain-displacement relations are linear.
    $$ \epsilon_x = \frac{\partial u}{\partial x} $$
    $$ \epsilon_y = \frac{\partial v}{\partial y} $$
    $$ \gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x} $$
*   **Constant Strain Assumption:** Because the displacement field is linear, its derivatives ($\frac{\partial u}{\partial x}, \frac{\partial u}{\partial y}, \frac{\partial v}{\partial x}, \frac{\partial v}{\partial y}$) are constants. This leads to **constant strain** within the CST element.
*   **Strain-Displacement Matrix ($\mathbf{B}$):** This matrix relates the strain vector $\boldsymbol{\epsilon}$ to the nodal displacement vector $\mathbf{u}_e$.
    $$ \boldsymbol{\epsilon} = \begin{Bmatrix} \epsilon_x \\ \epsilon_y \\ \gamma_{xy} \end{Bmatrix} = \mathbf{B} \mathbf{u}_e $$
    The derivation of the $\mathbf{B}$ matrix involves differentiating the shape functions with respect to $x$ and $y$. For a CST element, the $\mathbf{B}$ matrix is constant for the entire element.

    Let $a_i = y_j - y_k$, $b_i = x_k - x_j$, $c_i = x_j - x_k$, where indices are cyclic (1,2,3).
    The $\mathbf{B}$ matrix is given by:
    $$ \mathbf{B} = \frac{1}{2A} \begin{bmatrix} b_1 & 0 & b_2 & 0 & b_3 & 0 \\ 0 & c_1 & 0 & c_2 & 0 & c_3 \\ c_1 & b_1 & c_2 & b_2 & c_3 & b_3 \end{bmatrix} $$

#### 2.1.5 Element Stiffness Matrix ($\mathbf{k}_e$) for CST Element (CO3, CO4)

*   **Concept:** The element stiffness matrix relates the nodal forces to the nodal displacements for a single element. It depends on the material properties (e.g., Young's modulus $E$, Poisson's ratio $\nu$) and the element geometry.
*   **Formulation:** The stiffness matrix is derived using the principle of minimum potential energy or the principle of virtual work, combined with the strain-energy density and the strain-displacement matrix.
    $$ \mathbf{k}_e = \int_{V_e} \mathbf{B}^T \mathbf{D} \mathbf{B} \, dV $$
    where:
    *   $\mathbf{B}$ is the strain-displacement matrix.
    *   $\mathbf{D}$ is the material constitutive matrix. For plane stress, it's:
        $$ \mathbf{D}_{\text{plane stress}} = \frac{E}{1-\nu^2} \begin{bmatrix} 1 & \nu & 0 \\ \nu & 1 & 0 \\ 0 & 0 & \frac{1-\nu}{2} \end{bmatrix} $$
    *   $V_e$ is the volume of the element. For 2D elements with thickness $t$, $dV = t \, dA$.
*   **Constant $\mathbf{B}$ and $\mathbf{D}$:** Since the $\mathbf{B}$ matrix and the $\mathbf{D}$ matrix (for isotropic materials) are constant for a CST element, the integration simplifies:
    $$ \mathbf{k}_e = \mathbf{B}^T \mathbf{D} \mathbf{B} \int_{A_e} t \, dA $$
    Assuming constant thickness $t$,
    $$ \mathbf{k}_e = t A_e \mathbf{B}^T \mathbf{D} \mathbf{B} $$
    where $A_e$ is the area of the triangular element.

#### 2.1.6 Element Force Vector ($\mathbf{f}_e$) for CST Element

*   **Concept:** The force vector represents the applied loads on the element. These can be body forces (e.g., gravity) or surface forces (e.g., pressure).
*   **Body Forces:** For a body force per unit volume $\mathbf{b} = \begin{Bmatrix} b_x \\ b_y \end{Bmatrix}$, the equivalent nodal forces are:
    $$ \mathbf{f}_{e, body} = \int_{V_e} \mathbf{N}^T \mathbf{b} \, dV $$
*   **Surface Forces:** For a surface traction $\mathbf{t} = \begin{Bmatrix} t_x \\ t_y \end{Bmatrix}$ acting on a boundary segment with normal $\mathbf{n}$, the equivalent nodal forces are:
    $$ \mathbf{f}_{e, surface} = \int_{S_e} \mathbf{N}^T \mathbf{t} \, dS $$

#### 2.1.7 Advantages and Disadvantages of CST Element

*   **Advantages:**
    *   Simple to formulate and implement.
    *   Can model complex geometries easily.
    *   The $\mathbf{B}$ matrix is constant, simplifying stiffness matrix calculation.
*   **Disadvantages:**
    *   **Constant Strain:** This is the main limitation. It can lead to inaccuracies, especially in regions with high strain gradients (e.g., near stress concentrations). The CST element is "stiff" in bending due to this assumption.
    *   Requires a fine mesh to achieve reasonable accuracy for bending problems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


#### **Reference to Textbooks (CO2, CO3):**

*   **Reddy (3rd Ed., Ch 5 & 6):** Discusses the formulation of 2D elements, including the CST, derivation of shape functions, and the strain-displacement matrix.
*   **Cook (3rd Ed., Ch 7):** Provides a detailed explanation of the CST element, area coordinates, and the calculation of the stiffness matrix.
*   **Bhavikatti (3rd Ed., Ch 8):** Covers the CST element with a focus on its application in plane stress and plane strain problems.
*   **Fish & Belytschko (2nd Ed., Ch 3 & 4):** Explains the continuum mechanics basis for strain calculation and the role of shape functions in FEM.

---

### 2.2 1-Dimensional Beam Element

Beam elements are used to analyze structures subjected to bending, shear, and axial forces. They capture more complex behavior than simple truss elements, which only handle axial forces.

#### 2.2.1 Element Geometry and Nodes

*   **Definition:** A 1D beam element is a straight line segment connecting two nodes.
*   **Degrees of Freedom (DOFs):** Each node in a beam element typically has two translational DOFs (in the global y-direction, assuming bending in the xy-plane) and one rotational DOF (about the z-axis).
    *   At Node 1: $v_1$ (transverse displacement), $\theta_1$ (rotation)
    *   At Node 2: $v_2$ (transverse displacement), $\theta_2$ (rotation)
*   **Total DOFs per Element:** 4 DOFs per element.
*   **Loading:** Beams are typically loaded by transverse forces, moments, and distributed loads.

#### 2.2.2 Displacement Field within the Beam Element (CO2)

*   **Assumption:** For a beam element, the transverse displacement $v(x)$ is typically assumed to vary **cubically** with the axial coordinate $x$ along the element. This is necessary to satisfy the equilibrium equations of bending.
*   **Formulation:** The displacement field is expressed using shape functions:
    $$ v(x) = \sum_{i=1}^{2} N_{vi}(x) v_i + \sum_{i=1}^{2} N_{\theta i}(x) \theta_i $$
    where $N_{vi}(x)$ are shape functions for displacement and $N_{\theta i}(x)$ are shape functions for rotation.
*   **Cubic Hermite Polynomials:** These shape functions are typically cubic Hermite polynomials, ensuring continuity of displacement and slope at the nodes.
    *   $N_{v1}(x) = 2\left(\frac{x}{L}\right)^3 - 3\left(\frac{x}{L}\right)^2 + 1$
    *   $N_{\theta1}(x) = \left(\frac{x}{L}\right)^3 - 2\left(\frac{x}{L}\right)^2 + \frac{x}{L}$
    *   $N_{v2}(x) = -2\left(\frac{x}{L}\right)^3 + 3\left(\frac{x}{L}\right)^2$
    *   $N_{\theta2}(x) = \left(\frac{x}{L}\right)^3 - \left(\frac{x}{L}\right)^2$
    where $x$ is the coordinate along the element and $L$ is the element length.

#### 2.2.3 Strain-Displacement and Stress-Strain Relationships for Beam Element (CO3)

*   **Concept:** In beam theory, the primary strain considered for bending is the **normal strain** in the axial direction ($\epsilon_x$), which varies linearly across the cross-section.
*   **Axial Strain:** Assuming Euler-Bernoulli beam theory (neglecting shear deformation), the axial strain $\epsilon_x$ at a distance $y$ from the neutral axis is:
    $$ \epsilon_x(x, y) = y \frac{d^2v}{dx^2} $$
    where $\frac{d^2v}{dx^2}$ is the curvature.
*   **Curvature-Displacement Relationship:**
    $$ \kappa(x) = \frac{d^2v}{dx^2} = \sum_{i=1}^{2} N''_{vi}(x) v_i + \sum_{i=1}^{2} N''_{\theta i}(x) \theta_i $$
    where $N''$ denotes the second derivative of the shape functions.
*   **Stress-Strain Relationship:** For linear elastic material, the axial stress $\sigma_x$ is related to the axial strain $\epsilon_x$ by Hooke's Law:
    $$ \sigma_x(x, y) = E \epsilon_x(x, y) = E y \frac{d^2v}{dx^2} $$
    where $E$ is Young's modulus.

#### 2.2.4 Element Stiffness Matrix ($\mathbf{k}_e$) for Beam Element (CO3, CO4)

*   **Concept:** The beam stiffness matrix relates nodal forces and moments to nodal displacements and rotations.
*   **Formulation:** Using the principle of minimum potential energy, the stiffness matrix is derived as:
    $$ \mathbf{k}_e = \int_{0}^{L} EI \left( \frac{d^2N}{dx^2} \right)^T \left( \frac{d^2N}{dx^2} \right) dx $$
    where:
    *   $EI$ is the flexural rigidity of the beam (product of Young's modulus $E$ and the area moment of inertia $I$).
    *   $\mathbf{N}$ is the matrix of shape functions for displacement and rotation.
    *   $\frac{d^2\mathbf{N}}{dx^2}$ is the matrix of second derivatives of shape functions.
*   **Standard Beam Stiffness Matrix:** For a prismatic beam (constant $EI$) with nodes 1 and 2, where nodal DOFs are $\mathbf{u}_e = [v_1, \theta_1, v_2, \theta_2]^T$, the element stiffness matrix is:
    $$ \mathbf{k}_e = \frac{EI}{L^3} \begin{bmatrix} 12 & 6L & -12 & 6L \\ 6L & 4L^2 & -6L & 2L^2 \\ -12 & -6L & 12 & -6L \\ 6L & 2L^2 & -6L & 4L^2 \end{bmatrix} $$

#### 2.2.5 Element Force Vector ($\mathbf{f}_e$) for Beam Element

*   **Concept:** Represents applied loads on the beam element.
*   **Point Loads and Moments:** Directly contribute to the nodal force/moment vector.
*   **Distributed Loads:** For a distributed transverse load $q(x)$, the equivalent nodal forces and moments are calculated using the shape functions:
    $$ \mathbf{f}_{e, load} = \int_{0}^{L} \mathbf{N}^T q(x) dx $$
    For a uniformly distributed load $q_0$, the equivalent nodal forces are:
    $$ \mathbf{f}_{e, load} = \begin{Bmatrix} q_0 L / 2 \\ q_0 L^2 / 12 \\ q_0 L / 2 \\ -q_0 L^2 / 12 \end{Bmatrix} $$

#### 2.2.6 Coordinate Transformation (Brief Mention in relation to Module Scope)

*   **Global vs. Local Coordinates:** The stiffness matrix derived above is in the **local** coordinate system of the element (x along the beam axis). For assembly into the global stiffness matrix, this local matrix needs to be transformed into the global coordinate system using a transformation matrix. This is a crucial step in FEM analysis, although the details of this transformation are typically covered in a subsequent module.

#### 2.2.7 Advantages and Disadvantages of Beam Element

*   **Advantages:**
    *   Can accurately model the bending behavior of slender structures.
    *   Captures effects of shear and axial forces in addition to bending.
    *   Relatively few DOFs compared to discretizing a beam using plane stress elements.
*   **Disadvantages:**
    *   Assumes small deflections and slopes.
    *   Euler-Bernoulli theory neglects shear deformation, which can be significant in deep beams. Shear deformation can be included using Timoshenko beam theory, leading to more complex shape functions and stiffness matrices.

#### **Reference to Textbooks (CO2, CO3, CO4):**

*   **Reddy (3rd Ed., Ch 8):** Covers beam elements, deriving shape functions and the stiffness matrix for both Euler-Bernoulli and Timoshenko beams.
*   **Cook (3rd Ed., Ch 11):** Discusses beam elements in detail, including the formulation of stiffness matrices using Hermite polynomials.
*   **Bhavikatti (3rd Ed., Ch 9):** Focuses on beam elements, their stiffness matrices, and applications in structural analysis.
*   **Fish & Belytschko (2nd Ed., Ch 5):** Explores beam element formulations and their relation to structural mechanics principles.
*   **Segerlind (2nd Ed., Ch 6):** Provides a solid foundation for beam element stiffness matrix derivation.

---

### Summary of Key Concepts and Definitions

*   **CST Element:** 3-noded triangular element with linear displacement fields and constant strain.
*   **Shape Functions:** Interpolation functions that relate nodal displacements to the displacement field within an element.
*   **Strain-Displacement Matrix (B):** Relates strains to nodal displacements. For CST, it's constant.
*   **Stiffness Matrix (k):** Relates nodal forces to nodal displacements for an element.
*   **Beam Element:** 2-noded element with 4 DOFs (translation and rotation at each node), typically using cubic shape functions for transverse displacement.
*   **Flexural Rigidity (EI):** Material and geometric property governing beam bending.
*   **Hermite Polynomials:** Cubic polynomials used for beam shape functions, ensuring continuity of slope.

---

### Learning Outcome Alignment

*   **CO1: Understand governing equations and basic FEM procedure.**
    *   This module implicitly builds on the FEM procedure by formulating element matrices. The governing equations for elasticity (stress-strain, strain-displacement) are the basis for these formulations.
*   **CO2: Apply coordinate transformation and formulation of shape functions.**
    *   Shape functions for CST (linear/area coordinates) and beam (cubic Hermite) elements are discussed. The need for coordinate transformation for beam elements is highlighted.
*   **CO3: Formulate shape functions and element strain displacement matrix of various element.**
    *   Detailed discussion on shape functions and the formulation of the $\mathbf{B}$ matrix for CST and the relationships for beam elements.
*   **CO4: Evaluate element stress using energy method and study Galekin weight residual formulations.**
    *   The derivation of stiffness matrices from energy methods is explained. Stress calculation involves using the calculated strains ($\boldsymbol{\epsilon} = \mathbf{B} \mathbf{u}_e$) and the constitutive law ($\boldsymbol{\sigma} = \mathbf{D} \boldsymbol{\epsilon}$). While Galerkin is not explicitly detailed here, it's the underlying principle for deriving element equations.
*   **CO5: Study the concept of iso parametric elements and analyze iso parametric formulations.**
    *   This module focuses on non-isoparametric (CST) and specific parametric (beam) elements. Isoparametric elements are a separate, advanced topic.

---

### Practice Questions and Exercises

**Question 1 (CST):**
A triangular element has nodes at $A=(0,0)$, $B=(4,0)$, and $C=(2,3)$. Calculate the strain-displacement matrix $\mathbf{B}$ for this element. Assume the element thickness $t=1$. Use the plane stress constitutive matrix $\mathbf{D}$ with $E=200$ GPa and $\nu=0.3$.

**Question 2 (CST):**
For the same triangular element as in Question 1, if the nodal displacements are $\mathbf{u}_e = [u_1, v_1, u_2, v_2, u_3, v_3]^T = [0, 0, 0.1, 0, 0, 0.2]^T$ (in mm), calculate the strains $\epsilon_x, \epsilon_y, \gamma_{xy}$ within the element.

**Question 3 (Beam):**
A prismatic beam element has length $L=2$ m, Young's modulus $E=200$ GPa, and area moment of inertia $I=10^{-5}$ m$^4$. Calculate the element stiffness matrix $\mathbf{k}_e$ for this beam element.

**Question 4 (Beam):**
Consider a cantilever beam of length $L$ with a concentrated load $P$ at the free end. If this beam is modeled using a single beam element, determine the nodal forces and moments equivalent to the applied load $P$.

---

### Answers to Practice Questions

**Answer 1 (CST):**

First, calculate the area $A$ of the triangle:
$A = \frac{1}{2} |x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2)|$
$A = \frac{1}{2} |0(0-3) + 4(3-0) + 2(0-0)| = \frac{1}{2} |12| = 6$

Now, calculate $b_i$ and $c_i$:
$b_1 = y_2 - y_3 = 0 - 3 = -3$
$c_1 = x_3 - x_2 = 2 - 4 = -2$

$b_2 = y_3 - y_1 = 3 - 0 = 3$
$c_2 = x_1 - x_3 = 0 - 2 = -2$

$b_3 = y_1 - y_2 = 0 - 0 = 0$
$c_3 = x_2 - x_1 = 4 - 0 = 4$

The $\mathbf{B}$ matrix is:
$$ \mathbf{B} = \frac{1}{2A} \begin{bmatrix} b_1 & 0 & b_2 & 0 & b_3 & 0 \\ 0 & c_1 & 0 & c_2 & 0 & c_3 \\ c_1 & b_1 & c_2 & b_2 & c_3 & b_3 \end{bmatrix} = \frac{1}{12} \begin{bmatrix} -3 & 0 & 3 & 0 & 0 & 0 \\ 0 & -2 & 0 & -2 & 0 & 4 \\ -2 & -3 & -2 & 3 & 4 & 0 \end{bmatrix} $$

The constitutive matrix $\mathbf{D}$ for plane stress:
$E = 200 \times 10^9$ Pa, $\nu = 0.3$
$\frac{E}{1-\nu^2} = \frac{200 \times 10^9}{1 - 0.3^2} = \frac{200 \times 10^9}{0.91} \approx 219.78 \times 10^9$
$$ \mathbf{D} = 219.78 \times 10^9 \begin{bmatrix} 1 & 0.3 & 0 \\ 0.3 & 1 & 0 \\ 0 & 0 & 0.35 \end{bmatrix} $$
(Note: The question only asked for $\mathbf{B}$. Calculating $\mathbf{k}_e = t A_e \mathbf{B}^T \mathbf{D} \mathbf{B}$ would involve more computation).

**Answer 2 (CST):**

Using the $\mathbf{B}$ matrix from Answer 1:
$$ \mathbf{u}_e = [0, 0, 0.1, 0, 0, 0.2]^T $$
$$ \boldsymbol{\epsilon} = \mathbf{B} \mathbf{u}_e = \frac{1}{12} \begin{bmatrix} -3 & 0 & 3 & 0 & 0 & 0 \\ 0 & -2 & 0 & -2 & 0 & 4 \\ -2 & -3 & -2 & 3 & 4 & 0 \end{bmatrix} \begin{Bmatrix} 0 \\ 0 \\ 0.1 \\ 0 \\ 0 \\ 0.2 \end{Bmatrix} $$
$$ \boldsymbol{\epsilon} = \frac{1}{12} \begin{Bmatrix} (-3)(0) + (0)(0) + (3)(0.1) + (0)(0) + (0)(0) + (0)(0.2) \\ (0)(0) + (-2)(0) + (0)(0.1) + (-2)(0) + (0)(0) + (4)(0.2) \\ (-2)(0) + (-3)(0) + (-2)(0.1) + (3)(0) + (4)(0) + (0)(0.2) \end{Bmatrix} $$
$$ \boldsymbol{\epsilon} = \frac{1}{12} \begin{Bmatrix} 0.3 \\ 0.8 \\ -0.2 \end{Bmatrix} $$
Therefore,
$\epsilon_x = 0.3 / 12 = 0.025$
$\epsilon_y = 0.8 / 12 \approx 0.0667$
$\gamma_{xy} = -0.2 / 12 \approx -0.0167$
(Units are in mm/mm, or unitless).

**Answer 3 (Beam):**

$L=2$ m, $E=200$ GPa $= 200 \times 10^9$ N/m$^2$, $I=10^{-5}$ m$^4$.
$EI = (200 \times 10^9) \times (10^{-5}) = 2 \times 10^6$ Nm$^2$.
$\frac{EI}{L^3} = \frac{2 \times 10^6}{2^3} = \frac{2 \times 10^6}{8} = 0.25 \times 10^6$ Nm$^2$/m$^3$.

$$ \mathbf{k}_e = \frac{EI}{L^3} \begin{bmatrix} 12 & 6L & -12 & 6L \\ 6L & 4L^2 & -6L & 2L^2 \\ -12 & -6L & 12 & -6L \\ 6L & 2L^2 & -6L & 4L^2 \end{bmatrix} $$
$$ \mathbf{k}_e = 0.25 \times 10^6 \begin{bmatrix} 12 & 6(2) & -12 & 6(2) \\ 6(2) & 4(2^2) & -6(2) & 2(2^2) \\ -12 & -6(2) & 12 & -6(2) \\ 6(2) & 2(2^2) & -6(2) & 4(2^2) \end{bmatrix} $$
$$ \mathbf{k}_e = 0.25 \times 10^6 \begin{bmatrix} 12 & 12 & -12 & 12 \\ 12 & 16 & -12 & 8 \\ -12 & -12 & 12 & -12 \\ 12 & 8 & -12 & 16 \end{bmatrix} $$
$$ \mathbf{k}_e = \begin{bmatrix} 3.0 \times 10^6 & 3.0 \times 10^6 & -3.0 \times 10^6 & 3.0 \times 10^6 \\ 3.0 \times 10^6 & 4.0 \times 10^6 & -3.0 \times 10^6 & 2.0 \times 10^6 \\ -3.0 \times 10^6 & -3.0 \times 10^6 & 3.0 \times 10^6 & -3.0 \times 10^6 \\ 3.0 \times 10^6 & 2.0 \times 10^6 & -3.0 \times 10^6 & 4.0 \times 10^6 \end{bmatrix} \quad \text{(in N/m and Nm/rad)} $$

**Answer 4 (Beam):**

For a concentrated load $P$ at the free end (node 2) of a cantilever beam, the nodal DOFs are $v_1=0, \theta_1=0$. The load $P$ acts in the negative y-direction at node 2.
The load vector $\mathbf{f}_e$ is related to nodal displacements by $\mathbf{f}_e = \mathbf{k}_e \mathbf{u}_e$.
The applied load $P$ at node 2 is an external force. If we are looking for the equivalent nodal forces that *represent* this load, the force at node 2 is $P$ in the negative y-direction.
The nodal force vector component corresponding to $v_2$ should be $-P$ if $P$ is acting downwards. The nodal moment component for $\theta_2$ is zero.
So, the equivalent nodal force vector for the load $P$ is:
$$ \mathbf{f}_{e, load} = \begin{Bmatrix} 0 \\ 0 \\ 0 \\ -P \end{Bmatrix} $$
(Assuming the load $P$ is applied downwards at node 2).

---

### Important Points to Remember

*   **CST:** Constant strain assumption is a significant simplification, leading to stiff behavior, especially in bending. Its advantage is geometric flexibility and simple formulation.
*   **Beam Element:** Cubic shape functions are essential for capturing bending. The stiffness matrix is derived from the flexural rigidity ($EI$) and element length ($L$).
*   **DOFs:** Always clearly identify the DOFs for each element type (2 per node for CST, 2 translational + 1 rotational per node for beams).
*   **Coordinate Systems:** Be mindful of whether you are working in local element coordinates or global system coordinates, especially for beam elements which require transformation.
*   **Strain-Displacement Matrix (B):** This matrix is fundamental for relating displacements to strains and is key to calculating the stiffness matrix.
*   **Stiffness Matrix (k):** Represents the element's resistance to deformation under load. It is symmetric and positive definite for well-posed problems.

---

This concludes the study notes for 2-Dimensional CST and 1-Dimensional Beam Elements. These elements are crucial building blocks for understanding more complex FEM analyses.