---
title: "truss and beam element"
subject: "FINITE ELEMENT METHOD"
module: "Module 2: Brief review of matrix methods"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba8116cf"
status: "completed"
scrapedAt: "2026-05-20T18:58:53.275Z"
---
# FINITE ELEMENT METHOD - Module 2: Brief Review of Matrix Methods

## Topic: Truss and Beam Elements

This module provides a foundational understanding of how structural elements like trusses and beams can be represented and analyzed using matrix methods, a cornerstone of the Finite Element Method (FEM).

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **Understand the fundamental behavior of truss and beam elements under load.**
*   **Derive the stiffness matrix for a 2D truss element.**
*   **Derive the stiffness matrix for a 2D beam element.**
*   **Understand the concept of element connectivity and global stiffness matrix assembly.**
*   **Recognize the limitations of these basic element formulations.**

---

### 1. Fundamental Behavior of Truss and Beam Elements

#### 1.1 Truss Elements

*   **Definition:** Truss elements are structural members that are connected at their ends by pin joints. They are designed to carry axial forces (tension and compression) only.
*   **Assumptions:**
    *   Members are connected by frictionless pins (no moments transferred).
    *   Loads are applied only at the joints.
    *   Members are straight.
    *   The material is linear elastic, isotropic, and homogeneous.
    *   Cross-sectional areas are constant.
    *   Deformations are small.
*   **Degrees of Freedom (DOF):** For a 2D truss element, each node has two translational DOFs (horizontal and vertical displacement). Therefore, a 2-node truss element has a total of 4 DOFs.

#### 1.2 Beam Elements

*   **Definition:** Beam elements are structural members that can resist axial forces, shear forces, and bending moments.
*   **Assumptions:**
    *   Members are connected by supports or joints that can transfer moments.
    *   Loads can be applied at joints or distributed along the member.
    *   Members are straight.
    *   The material is linear elastic, isotropic, and homogeneous.
    *   Cross-sectional properties (Area, Moment of Inertia) are constant.
    *   Deformations are small (Euler-Bernoulli beam theory is assumed). This implies that plane sections remain plane and perpendicular to the neutral axis after bending.
*   **Degrees of Freedom (DOF):** For a 2D beam element, each node typically has:
    *   Two translational DOFs (horizontal and vertical displacement).
    *   One rotational DOF (rotation about the z-axis).
    Therefore, a 2-node beam element has a total of 6 DOFs.

---

### 2. Stiffness Matrix for a 2D Truss Element

The stiffness matrix, $\mathbf{k}$, relates the nodal forces to the nodal displacements for an element: $\mathbf{f} = \mathbf{k} \mathbf{d}$.

#### 2.1 Element Properties

Consider a 2D truss element with:
*   Length $L$
*   Cross-sectional Area $A$
*   Young's Modulus $E$
*   Node 1 at coordinates $(x_1, y_1)$ and Node 2 at coordinates $(x_2, y_2)$.
*   The direction cosine of the element with respect to the x-axis is $\cos \theta = \frac{x_2 - x_1}{L}$ and $\sin \theta = \frac{y_2 - y_1}{L}$.

#### 2.2 Nodal Displacements and Forces

*   **Nodal Displacements Vector ($\mathbf{d}$):**
    $\mathbf{d} = \begin{bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \end{bmatrix}$
    where $u_i$ is the horizontal displacement and $v_i$ is the vertical displacement at node $i$.

*   **Nodal Forces Vector ($\mathbf{f}$):**
    $\mathbf{f} = \begin{bmatrix} P_{1x} \\ P_{1y} \\ P_{2x} \\ P_{2y} \end{bmatrix}$
    where $P_{ix}$ is the horizontal force and $P_{iy}$ is the vertical force applied at node $i$.

#### 2.3 Transformation of Coordinates

To derive the stiffness matrix, we first consider the element in its local coordinate system (aligned with the element's axis) and then transform it to the global coordinate system.

*   **Local Stiffness Matrix ($\mathbf{k}_l$):**
    In the local system, the element experiences only axial force. The stiffness is $EA/L$.
    $\mathbf{f}_l = \begin{bmatrix} P_{1l} \\ P_{2l} \end{bmatrix}$, $\mathbf{d}_l = \begin{bmatrix} u_{1l} \\ u_{2l} \end{bmatrix}$
    $\mathbf{k}_l = \begin{bmatrix} EA/L & -EA/L \\ -EA/L & EA/L \end{bmatrix}$

*   **Transformation Matrix ($\mathbf{T}$):** This matrix transforms local displacements to global displacements.
    $\mathbf{d} = \mathbf{T} \mathbf{d}_l$
    $\mathbf{T} = \begin{bmatrix} c & s \\ -s & c \\ c & s \\ -s & c \end{bmatrix}$
    where $c = \cos \theta$ and $s = \sin \theta$.
    (Note: This transformation matrix should actually be a $4 \times 2$ matrix, as the local system has only axial DOFs. A more common approach is to define a $4 \times 4$ transformation matrix using direction cosines.)

    **More correctly:** Let $\mathbf{u}_l = \begin{bmatrix} u_{1l} \\ u_{2l} \end{bmatrix}$ be local displacements. The local force is $P_l = \frac{EA}{L} u_{1l}$.
    The global displacements are related to local displacements by:
    $u_1 = u_{1l} \cos \theta \implies u_{1l} = u_1 \cos \theta + v_1 \sin \theta$
    $u_2 = u_{1l} \cos \theta + u_{2l} \cos \theta \implies u_{2l} = (u_2-u_1)\cos \theta + (v_2-v_1)\sin \theta$
    This leads to $\mathbf{d}_l = \mathbf{B} \mathbf{d}$ where $\mathbf{B}$ is the strain-displacement matrix.

    Alternatively, using a transformation matrix $\mathbf{a}$:
    $\mathbf{d} = \mathbf{a} \mathbf{d}_l$
    $\mathbf{a} = \begin{bmatrix} c & 0 & 0 & 0 \\ s & 0 & 0 & 0 \\ 0 & c & 0 & 0 \\ 0 & s & 0 & 0 \end{bmatrix}$ (Incorrect; this assumes local axial is aligned with global x)

    **Correct Transformation:**
    Let $\mathbf{d}_l = \begin{bmatrix} u_{1l} \\ u_{2l} \end{bmatrix}$ be the nodal displacements in the local axial direction.
    The global displacements at node 1 are $(u_1, v_1)$ and at node 2 are $(u_2, v_2)$.
    The local displacements are:
    $u_{1l} = u_1 \cos \theta + v_1 \sin \theta$
    $u_{2l} = u_2 \cos \theta + v_2 \sin \theta$
    This can be written as $\mathbf{d}_l = \mathbf{T}_{disp} \mathbf{d}$ where $\mathbf{T}_{disp}$ is a $2 \times 4$ transformation matrix.

    The forces in the global system are related to local forces by:
    $P_{1x} = P_{1l} \cos \theta$
    $P_{1y} = P_{1l} \sin \theta$
    $P_{2x} = P_{2l} \cos \theta$
    $P_{2y} = P_{2l} \sin \theta$
    This can be written as $\mathbf{f} = \mathbf{T}_{force} \mathbf{f}_l$ where $\mathbf{T}_{force}$ is a $4 \times 2$ transformation matrix.
    $\mathbf{T}_{force} = \begin{bmatrix} c & 0 \\ s & 0 \\ 0 & c \\ 0 & s \end{bmatrix}$

    Now, $\mathbf{f}_l = \mathbf{k}_l \mathbf{d}_l$.
    Substituting $\mathbf{d}_l = \mathbf{T}_{disp} \mathbf{d}$ and $\mathbf{f} = \mathbf{T}_{force} \mathbf{f}_l$:
    $\mathbf{f} = \mathbf{T}_{force} \mathbf{k}_l \mathbf{T}_{disp} \mathbf{d}$
    Therefore, the global stiffness matrix $\mathbf{k} = \mathbf{T}_{force} \mathbf{k}_l \mathbf{T}_{disp}$.
    $\mathbf{T}_{disp} = \begin{bmatrix} c & s \\ c & s \end{bmatrix}^T = \begin{bmatrix} c & 0 \\ s & 0 \\ 0 & c \\ 0 & s \end{bmatrix}^T$
    Wait, this transformation matrix is incorrect. The correct transformation matrix $\mathbf{a}$ relates global displacements to local displacements.
    $\mathbf{d}_l = \mathbf{a} \mathbf{d}$ where $\mathbf{a} = \begin{bmatrix} c & s & 0 & 0 \\ 0 & 0 & c & s \end{bmatrix}$.
    The force transformation is $\mathbf{f} = \mathbf{a}^T \mathbf{f}_l$.
    So, $\mathbf{f} = \mathbf{a}^T \mathbf{k}_l \mathbf{a} \mathbf{d}$.
    The global stiffness matrix $\mathbf{k} = \mathbf{a}^T \mathbf{k}_l \mathbf{a}$.

#### 2.4 Derivation of Global Stiffness Matrix ($\mathbf{k}$)

$\mathbf{k} = \begin{bmatrix} c \\ s \\ 0 \\ 0 \end{bmatrix} \begin{bmatrix} EA/L & -EA/L \end{bmatrix} \begin{bmatrix} c & s & 0 & 0 \\ 0 & 0 & c & s \end{bmatrix}$

$\mathbf{k} = \begin{bmatrix} c \\ s \\ 0 \\ 0 \end{bmatrix} \frac{EA}{L} \begin{bmatrix} c & s & -c & -s \end{bmatrix}$

$\mathbf{k} = \frac{EA}{L} \begin{bmatrix} c^2 & cs & -c^2 & -cs \\ cs & s^2 & -cs & -s^2 \\ -c^2 & -cs & c^2 & cs \\ -cs & -s^2 & cs & s^2 \end{bmatrix}$

**Important Note:** This matrix is for a 2D truss element. For a 3D truss element, each node has 3 translational DOFs, leading to a $6 \times 6$ stiffness matrix.

#### 2.5 Example: A Single Truss Element

Consider a truss element with $E=200$ GPa, $A=0.001$ m$^2$, and length $L=2$ m.
The element is oriented at $30^\circ$ to the x-axis ($\theta = 30^\circ$).
$c = \cos(30^\circ) = \sqrt{3}/2$
$s = \sin(30^\circ) = 1/2$
$EA/L = (200 \times 10^9 \, \text{N/m}^2) \times (0.001 \, \text{m}^2) / (2 \, \text{m}) = 100 \times 10^6 \, \text{N/m} = 100$ MN/m

$\mathbf{k} = \frac{100 \times 10^6}{2} \begin{bmatrix} (\sqrt{3}/2)^2 & (\sqrt{3}/2)(1/2) & -(\sqrt{3}/2)^2 & -(\sqrt{3}/2)(1/2) \\ (\sqrt{3}/2)(1/2) & (1/2)^2 & -(\sqrt{3}/2)(1/2) & -(1/2)^2 \\ -(\sqrt{3}/2)^2 & -(\sqrt{3}/2)(1/2) & (\sqrt{3}/2)^2 & (\sqrt{3}/2)(1/2) \\ -(\sqrt{3}/2)(1/2) & -(1/2)^2 & (\sqrt{3}/2)(1/2) & (1/2)^2 \end{bmatrix}$

$\mathbf{k} = 50 \times 10^6 \begin{bmatrix} 0.75 & 0.433 & -0.75 & -0.433 \\ 0.433 & 0.25 & -0.433 & -0.25 \\ -0.75 & -0.433 & 0.75 & 0.433 \\ -0.433 & -0.25 & 0.433 & 0.25 \end{bmatrix} \, \text{MN/m}$

---

### 3. Stiffness Matrix for a 2D Beam Element

A 2D beam element resists axial force, shear force, and bending moment. The derivation involves considering the boundary conditions and the resulting displacement and force relationships based on beam theory.

#### 3.1 Element Properties

Consider a 2D beam element with:
*   Length $L$
*   Young's Modulus $E$
*   Moment of Inertia $I$
*   Node 1 at coordinates $(x_1, y_1)$ and Node 2 at coordinates $(x_2, y_2)$.
*   The direction cosine of the element with respect to the x-axis is $\cos \theta$ and $\sin \theta$.

#### 3.2 Nodal Displacements and Forces

*   **Nodal Displacements Vector ($\mathbf{d}$):**
    $\mathbf{d} = \begin{bmatrix} u_1 \\ v_1 \\ \theta_1 \\ u_2 \\ v_2 \\ \theta_2 \end{bmatrix}$
    where $u_i$ is horizontal displacement, $v_i$ is vertical displacement, and $\theta_i$ is rotation at node $i$.

*   **Nodal Forces Vector ($\mathbf{f}$):**
    $\mathbf{f} = \begin{bmatrix} P_{1x} \\ P_{1y} \\ M_1 \\ P_{2x} \\ P_{2y} \\ M_2 \end{bmatrix}$
    where $P_{ix}$ is horizontal force, $P_{iy}$ is vertical force, and $M_i$ is moment at node $i$.

#### 3.3 Derivation of Stiffness Matrix (Local System)

For a beam element in its local coordinate system (aligned with the beam axis), the stiffness matrix relates local axial displacements, transverse displacements, and rotations. This derivation typically involves using shape functions based on polynomial interpolation.

For a simple beam element in the local y-direction (transverse displacement $v$ and rotation $\theta$), the stiffness matrix for bending is:

$\mathbf{k}_b = \frac{EI}{L^3} \begin{bmatrix} 12 & 6L & -12 & 6L \\ 6L & 4L^2 & -6L & 2L^2 \\ -12 & -6L & 12 & -6L \\ 6L & 2L^2 & -6L & 4L^2 \end{bmatrix}$

For the axial displacement $u$, the stiffness matrix is similar to the truss element:

$\mathbf{k}_a = \frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$

Combining these, the $6 \times 6$ local stiffness matrix $\mathbf{k}_l$ for a beam element is formed by assembling the axial and bending stiffnesses. The derivation for the full $6 \times 6$ matrix is complex and often presented as a standard result.

#### 3.4 Transformation to Global Coordinates

Similar to the truss element, the local stiffness matrix needs to be transformed into the global coordinate system. This involves transformation matrices that account for the element's orientation.

Let $\mathbf{d}_l = \begin{bmatrix} u_{1l} \\ v_{1l} \\ \theta_{1l} \\ u_{2l} \\ v_{2l} \\ \theta_{2l} \end{bmatrix}$ be the nodal displacements in the local system.
The global displacements $\mathbf{d}$ are related to local displacements by a transformation matrix. However, direct transformation of the stiffness matrix requires careful consideration of how rotations transform.

A common approach is to express the global nodal forces in terms of local forces and then relate local forces to local displacements using $\mathbf{k}_l$.

$\mathbf{f} = \mathbf{T} \mathbf{f}_l$
$\mathbf{d}_l = \mathbf{T}_{disp} \mathbf{d}$
$\mathbf{f}_l = \mathbf{k}_l \mathbf{d}_l$

This leads to $\mathbf{k} = \mathbf{T}^T \mathbf{k}_l \mathbf{T}_{disp}$.
The transformation matrix $\mathbf{T}$ and $\mathbf{T}_{disp}$ for beam elements are more complex than for truss elements because of the rotational degrees of freedom.

The simplified form of the $6 \times 6$ global stiffness matrix for a 2D beam element with orientation $\theta$ is:

$\mathbf{k} = \frac{EA}{L} \begin{bmatrix} c^2 & s c & y_1 s c & -c^2 & -s c & -y_1 s c \\ s c & s^2 & y_1 s^2 & -s c & -s^2 & -y_1 s^2 \\ y_1 s c & y_1 s^2 & y_1^2 s^2 + I_{zz}/A & -y_1 s c & -y_1 s^2 & -y_1^2 s^2 + I_{zz}/A \\ -c^2 & -s c & -y_1 s c & c^2 & s c & y_1 s c \\ -s c & -s^2 & -y_1 s^2 & s c & s^2 & y_1 s^2 \\ -y_1 s c & -y_1 s^2 & -y_1^2 s^2 + I_{zz}/A & y_1 s c & y_1 s^2 & y_1^2 s^2 + I_{zz}/A \end{bmatrix} + \frac{EI}{L^3} \begin{bmatrix} 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & 12 & 6L & 0 & -12 & 6L \\ 0 & 6L & 4L^2 & 0 & -6L & 2L^2 \\ 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & -12 & -6L & 0 & 12 & -6L \\ 0 & 6L & 2L^2 & 0 & -6L & 4L^2 \end{bmatrix}$

*Note: The above is a simplified representation. The inclusion of $y_1$ and $I_{zz}/A$ indicates the complexity of coupling axial and bending terms and the importance of the shear center's location. For standard beam formulations, the axial and bending parts are often treated separately, and the coupling is implicitly handled by the transformation.*

**A More Standard Presentation (Separating Axial and Bending Components):**

**Axial Component:** (Same as truss element, but with added rotational DOFs)
$\mathbf{k}_a = \frac{EA}{L} \begin{bmatrix} c^2 & sc & 0 & -c^2 & -sc & 0 \\ sc & s^2 & 0 & -sc & -s^2 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 \\ -c^2 & -sc & 0 & c^2 & sc & 0 \\ -sc & -s^2 & 0 & sc & s^2 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 \end{bmatrix}$

**Bending Component:** (Transforming the local bending stiffness matrix)
Let $\mathbf{k}_{b,l} = \frac{EI}{L^3} \begin{bmatrix} 12 & 6L & -12 & 6L \\ 6L & 4L^2 & -6L & 2L^2 \\ -12 & -6L & 12 & -6L \\ 6L & 2L^2 & -6L & 4L^2 \end{bmatrix}$
These local DOFs correspond to $v_1, \theta_1, v_2, \theta_2$. The transformation involves rotation of the coordinate system by $\theta$.
The transformation matrix for bending DOFs relates global transverse displacements and rotations to local ones.

The final global stiffness matrix $\mathbf{k}$ is the sum of transformed axial and bending stiffness matrices.

#### 3.5 Example: A Single Beam Element

Consider a beam element with $E = 200$ GPa, $I = 2 \times 10^{-5}$ m$^4$, $A = 0.01$ m$^2$, and length $L = 4$ m.
The element is horizontal ($\theta = 0^\circ$). So, $c=1, s=0$.

**Axial Component:**
$EA/L = (200 \times 10^9 \, \text{N/m}^2) \times (0.01 \, \text{m}^2) / (4 \, \text{m}) = 0.5 \times 10^9 \, \text{N/m} = 500$ MN/m

$\mathbf{k}_a = 500 \times 10^6 \begin{bmatrix} 1 & 0 & 0 & -1 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 \\ -1 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 \end{bmatrix}$

**Bending Component:**
$EI/L^3 = (200 \times 10^9 \, \text{N/m}^2) \times (2 \times 10^{-5} \, \text{m}^4) / (4^3 \, \text{m}^3) = (4 \times 10^6) / 64 \, \text{N/m} = 0.0625 \times 10^6 \, \text{N/m} = 62.5$ kN/m

$\mathbf{k}_b = 62.5 \times 10^3 \begin{bmatrix} 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & 12 & 6(4) & 0 & -12 & 6(4) \\ 0 & 6(4) & 4(4)^2 & 0 & -6(4) & 2(4)^2 \\ 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & -12 & -6(4) & 0 & 12 & -6(4) \\ 0 & 6(4) & 2(4)^2 & 0 & -6(4) & 4(4)^2 \end{bmatrix}$

$\mathbf{k}_b = 62.5 \times 10^3 \begin{bmatrix} 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & 12 & 24 & 0 & -12 & 24 \\ 0 & 24 & 64 & 0 & -24 & 32 \\ 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & -12 & -24 & 0 & 12 & -24 \\ 0 & 24 & 32 & 0 & -24 & 64 \end{bmatrix}$

The total stiffness matrix for this horizontal beam element is $\mathbf{k} = \mathbf{k}_a + \mathbf{k}_b$.

---

### 4. Element Connectivity and Global Stiffness Matrix Assembly

#### 4.1 Node Numbering and Element Connectivity

*   **Nodes:** Points where elements are connected and/or loads are applied. Each node has a unique global number.
*   **Elements:** The structural members (truss or beam) that discretize the structure. Each element is defined by the global numbers of its connected nodes.
*   **Degrees of Freedom (DOF):** The independent movements (translations and rotations) at each node. The total number of DOFs in the global system is $N \times DOF_{node}$, where $N$ is the total number of nodes.

#### 4.2 Global Stiffness Matrix ($\mathbf{K}$)

The global stiffness matrix represents the stiffness of the entire structure. It's an assembly of the individual element stiffness matrices.

*   **Assembly Process:**
    1.  **Define the Global DOF Vector:** For a system with $N$ nodes, each having $DOF_{per\_node}$ DOFs, the global DOF vector will have $N \times DOF_{per\_node}$ entries. For 2D truss analysis, it's $2N$. For 2D beam analysis, it's $3N$.
    2.  **Initialize the Global Stiffness Matrix:** Create a zero matrix of size $(N \times DOF_{per\_node}) \times (N \times DOF_{per\_node})$.
    3.  **Map Element DOFs to Global DOFs:** For each element, determine which global DOF indices correspond to its local DOFs.
    4.  **Add Element Stiffness Contributions:** For each element's stiffness matrix $\mathbf{k}^{(e)}$, add its entries to the corresponding positions in the global stiffness matrix $\mathbf{K}$. If a global DOF is associated with an element DOF, the corresponding entry from $\mathbf{k}^{(e)}$ is added to $\mathbf{K}$.

#### 4.3 Example: Assembling a Simple Truss Structure

Consider a simple truss with 3 nodes and 2 elements:
*   Node 1: Fixed (DOF $u_1, v_1$ are zero)
*   Node 2: Free
*   Node 3: Free

**Element 1:** Connects Node 1 and Node 2.
**Element 2:** Connects Node 2 and Node 3.

Assume both elements are horizontal and have the same properties ($EA/L = K$).

**Element 1 Stiffness Matrix ($\mathbf{k}^{(1)}$):**
Node 1 DOFs: 1, 2 ($u_1, v_1$)
Node 2 DOFs: 3, 4 ($u_2, v_2$)

$\mathbf{k}^{(1)} = K \begin{bmatrix} 1 & 0 & -1 & 0 \\ 0 & 0 & 0 & 0 \\ -1 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}$

**Element 2 Stiffness Matrix ($\mathbf{k}^{(2)}$):**
Node 2 DOFs: 3, 4 ($u_2, v_2$)
Node 3 DOFs: 5, 6 ($u_3, v_3$)

$\mathbf{k}^{(2)} = K \begin{bmatrix} 1 & 0 & -1 & 0 \\ 0 & 0 & 0 & 0 \\ -1 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}$

**Global Stiffness Matrix ($\mathbf{K}$):** (Size $6 \times 6$)

Initialize $\mathbf{K}$ as a $6 \times 6$ zero matrix.

*   **Contribution from $\mathbf{k}^{(1)}$:**
    *   Rows/Cols 1-2 (Node 1) and 3-4 (Node 2).
    $\mathbf{K}_{1-4, 1-4} = K \begin{bmatrix} 1 & 0 & -1 & 0 \\ 0 & 0 & 0 & 0 \\ -1 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}$

*   **Contribution from $\mathbf{k}^{(2)}$:**
    *   Rows/Cols 3-4 (Node 2) and 5-6 (Node 3).
    $\mathbf{K}_{3-6, 3-6} = K \begin{bmatrix} 1 & 0 & -1 & 0 \\ 0 & 0 & 0 & 0 \\ -1 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}$

**Assembled $\mathbf{K}$:**

$\mathbf{K} = \begin{bmatrix}
1K & 0 & -1K & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 \\
-1K & 0 & 1K + 1K & 0 & -1K & 0 \\
0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & -1K & 0 & 1K & 0 \\
0 & 0 & 0 & 0 & 0 & 0
\end{bmatrix}$

$\mathbf{K} = \begin{bmatrix}
K & 0 & -K & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 \\
-K & 0 & 2K & 0 & -K & 0 \\
0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & -K & 0 & K & 0 \\
0 & 0 & 0 & 0 & 0 & 0
\end{bmatrix}$

**Applying Boundary Conditions:**
Since Node 1 is fixed, $u_1=0, v_1=0$. The DOFs 1 and 2 are zero. We can remove rows and columns corresponding to these DOFs.
The reduced system involves DOFs 3, 4, 5, 6.

Reduced $\mathbf{K}_{red} = K \begin{bmatrix} 2 & 0 & -1 \\ 0 & 0 & 0 \\ -1 & 0 & 1 \end{bmatrix}$
Reduced $\mathbf{d}_{red} = \begin{bmatrix} u_2 \\ v_2 \\ u_3 \end{bmatrix}$
Reduced $\mathbf{f}_{red} = \begin{bmatrix} F_{2x} \\ F_{2y} \\ F_{3x} \end{bmatrix}$

The system of equations becomes $\mathbf{f}_{red} = \mathbf{K}_{red} \mathbf{d}_{red}$.

---

### 5. Practice Questions and Exercises

**Question 1 (Truss):**
A 2D truss element has nodes at $(0,0)$ and $(3,4)$. The element has $E=200$ GPa and $A=0.0005$ m$^2$. Calculate the stiffness matrix for this element.

**Solution 1:**
$L = \sqrt{3^2 + 4^2} = \sqrt{9+16} = 5$ m
$\cos \theta = 3/5 = 0.6$
$\sin \theta = 4/5 = 0.8$
$EA/L = (200 \times 10^9) \times (0.0005) / 5 = 20 \times 10^6$ N/m

$\mathbf{k} = \frac{EA}{L} \begin{bmatrix} c^2 & cs & -c^2 & -cs \\ cs & s^2 & -cs & -s^2 \\ -c^2 & -cs & c^2 & cs \\ -cs & -s^2 & cs & s^2 \end{bmatrix}$

$\mathbf{k} = 20 \times 10^6 \begin{bmatrix} (0.6)^2 & (0.6)(0.8) & -(0.6)^2 & -(0.6)(0.8) \\ (0.6)(0.8) & (0.8)^2 & -(0.6)(0.8) & -(0.8)^2 \\ -(0.6)^2 & -(0.6)(0.8) & (0.6)^2 & (0.6)(0.8) \\ -(0.6)(0.8) & -(0.8)^2 & (0.6)(0.8) & (0.8)^2 \end{bmatrix}$

$\mathbf{k} = 20 \times 10^6 \begin{bmatrix} 0.36 & 0.48 & -0.36 & -0.48 \\ 0.48 & 0.64 & -0.48 & -0.64 \\ -0.36 & -0.48 & 0.36 & 0.48 \\ -0.48 & -0.64 & 0.48 & 0.64 \end{bmatrix}$ MN/m

**Question 2 (Beam):**
A horizontal beam element (theta = 0) has $E=210$ GPa, $I=5 \times 10^{-5}$ m$^4$, $A=0.01$ m$^2$, and length $L=2$ m.
Determine the $6 \times 6$ stiffness matrix for this element.

**Solution 2:**
Since $\theta = 0$, $c=1, s=0$. For a horizontal beam, the bending component is straightforward, and axial component is also simplified.

$EA/L = (210 \times 10^9) \times 0.01 / 2 = 1050 \times 10^6$ N/m = 1050 MN/m

$EI/L^3 = (210 \times 10^9) \times (5 \times 10^{-5}) / (2^3) = (10.5 \times 10^6) / 8 = 1.3125 \times 10^6$ N/m = 1.3125 MN/m

**Axial Component:**
$\mathbf{k}_a = 1050 \times 10^6 \begin{bmatrix} 1 & 0 & 0 & -1 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 \\ -1 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 \end{bmatrix}$

**Bending Component:**
$\mathbf{k}_b = 1.3125 \times 10^6 \begin{bmatrix} 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & 12 & 6(2) & 0 & -12 & 6(2) \\ 0 & 6(2) & 4(2)^2 & 0 & -6(2) & 2(2)^2 \\ 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & -12 & -6(2) & 0 & 12 & -6(2) \\ 0 & 6(2) & 2(2)^2 & 0 & -6(2) & 4(2)^2 \end{bmatrix}$

$\mathbf{k}_b = 1.3125 \times 10^6 \begin{bmatrix} 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & 12 & 12 & 0 & -12 & 12 \\ 0 & 12 & 16 & 0 & -12 & 8 \\ 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & -12 & -12 & 0 & 12 & -12 \\ 0 & 12 & 8 & 0 & -12 & 16 \end{bmatrix}$

Total stiffness matrix $\mathbf{k} = \mathbf{k}_a + \mathbf{k}_b$.

$\mathbf{k} = \begin{bmatrix}
1050 & 0 & 0 & -1050 & 0 & 0 \\
0 & 15.75 & 15.75 & 0 & -15.75 & 15.75 \\
0 & 15.75 & 20.8 & 0 & -15.75 & 10.4 \\
-1050 & 0 & 0 & 1050 & 0 & 0 \\
0 & -15.75 & -15.75 & 0 & 15.75 & -15.75 \\
0 & 15.75 & 10.4 & 0 & -15.75 & 20.8
\end{bmatrix} \times 10^6 \, \text{N/m}$

**Question 3 (Assembly):**
Consider a 2-element truss. Element 1 connects nodes 1 and 2. Element 2 connects nodes 2 and 3. All elements have $EA/L = K$. Node 1 is fixed. Node 3 has a horizontal force $F$ applied. Node 2 has a vertical force $P$ applied.
Write down the global stiffness matrix and the force vector for the unconstrained DOFs.

**Solution 3:**
Total nodes = 3. Total DOFs = $3 \times 2 = 6$.
DOFs: $u_1, v_1, u_2, v_2, u_3, v_3$

**Element 1 (Nodes 1-2):**
$\mathbf{k}^{(1)} = K \begin{bmatrix} 1 & 0 & -1 & 0 \\ 0 & 0 & 0 & 0 \\ -1 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}$

**Element 2 (Nodes 2-3):**
$\mathbf{k}^{(2)} = K \begin{bmatrix} 1 & 0 & -1 & 0 \\ 0 & 0 & 0 & 0 \\ -1 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}$

**Global Stiffness Matrix $\mathbf{K}$ (assembled):**
$\mathbf{K} = \begin{bmatrix}
K & 0 & -K & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 \\
-K & 0 & 2K & 0 & -K & 0 \\
0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & -K & 0 & K & 0 \\
0 & 0 & 0 & 0 & 0 & 0
\end{bmatrix}$

**Global Force Vector $\mathbf{F}$:**
$\mathbf{F} = \begin{bmatrix} 0 \\ 0 \\ 0 \\ P \\ 0 \\ F \end{bmatrix}$ (Assuming forces are applied at Node 2 vertical, Node 3 horizontal)

**Applying Boundary Conditions (Node 1 fixed):**
Remove DOFs 1 and 2.
Reduced system for DOFs 3, 4, 5, 6 ($u_2, v_2, u_3, v_3$).

$\mathbf{K}_{red} = K \begin{bmatrix} 2 & 0 & -1 & 0 \\ 0 & 0 & 0 & 0 \\ -1 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}$

$\mathbf{F}_{red} = \begin{bmatrix} 0 \\ P \\ 0 \\ F \end{bmatrix}$

The system is $\mathbf{F}_{red} = \mathbf{K}_{red} \mathbf{d}_{red}$ where $\mathbf{d}_{red} = \begin{bmatrix} u_2 \\ v_2 \\ u_3 \\ v_3 \end{bmatrix}$.

---

### 6. Important Points to Remember

*   **Assumptions are Crucial:** The derived stiffness matrices are based on specific assumptions (e.g., linear elasticity, small deformations, pin joints for trusses, moment resistance for beams). Deviations from these assumptions may require more advanced element formulations.
*   **Coordinate Transformations:** The ability to transform element stiffness matrices from local to global coordinates is fundamental for analyzing structures of arbitrary orientation.
*   **Assembly:** The process of assembling the global stiffness matrix by mapping element DOFs to global DOFs is a key step in FEM. Ensure correct index mapping.
*   **Boundary Conditions:** Properly applying boundary conditions (e.g., fixed supports, applied loads) is essential to solve the system of equations. This typically involves modifying the global stiffness matrix and force vector.
*   **DOFs:** Clearly identify and count the DOFs for each element and for the entire structure. This dictates the size of the matrices involved.
*   **Truss vs. Beam:** Understand the fundamental difference in their behavior (axial force only for trusses, axial, shear, and moment for beams) and how this reflects in their stiffness matrices and DOFs.
*   **Symmetry:** Both truss and beam stiffness matrices are symmetric. This is a consequence of Maxwell's reciprocal theorem.

---
