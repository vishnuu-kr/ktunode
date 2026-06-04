---
title: "Derivation of strain -displacement relation- B matrix- bar, CST and beam element"
subject: "FINITE ELEMENT METHODS"
module: "Module 3: Derivation of strain "
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf480446384e"
status: "completed"
scrapedAt: "2026-05-20T18:04:01.912Z"
---
# FINITE ELEMENT METHODS - Module 3: Derivation of Strain

## Topic: Derivation of Strain-Displacement Relation, B Matrix, Bar, CST, and Beam Elements

---

### **1. Introduction to Strain (K2)**

*   **Definition of Strain:** Strain is a measure of deformation representing the displacement between particles in a body. It quantifies how much an object is stretched or compressed.
*   **Types of Strain:**
    *   **Normal Strain ($\epsilon$):** Change in length per unit original length along a particular direction.
    *   **Shear Strain ($\gamma$):** Change in angle between two initially perpendicular lines.
*   **Importance in FEM:** Strain is a crucial component linking nodal displacements to internal forces (stresses) within an element. The strain-displacement relationship forms the backbone of element stiffness matrix formulation.

---

### **2. Derivation of Strain-Displacement Relations (K2, K3, K4)**

The fundamental goal is to express strains ($\epsilon$) as a function of nodal displacements ($\mathbf{u}$). This relationship is typically linear for small deformations and is represented by the **B matrix**.

Let us consider a general continuum element. For a 3D solid, the strain tensor components are:

$\epsilon_{xx} = \frac{\partial u}{\partial x}$
$\epsilon_{yy} = \frac{\partial v}{\partial y}$
$\epsilon_{zz} = \frac{\partial w}{\partial z}$

$\gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}$
$\gamma_{yz} = \frac{\partial v}{\partial z} + \frac{\partial w}{\partial y}$
$\gamma_{zx} = \frac{\partial w}{\partial x} + \frac{\partial u}{\partial z}$

where $u$, $v$, and $w$ are displacements in the $x$, $y$, and $z$ directions, respectively.

In FEM, we approximate the displacement field within an element using shape functions and nodal displacements.

$\mathbf{u}(x, y, z) = \mathbf{N}(x, y, z) \mathbf{d}$

where:
*   $\mathbf{u}$ is the displacement vector within the element.
*   $\mathbf{N}$ is the matrix of shape functions.
*   $\mathbf{d}$ is the vector of nodal displacements.

By differentiating the displacement field with respect to spatial coordinates, we can obtain the strain components. This process leads to the definition of the **B matrix**.

---

### **3. The B Matrix (Strain-Displacement Matrix) (K3, K4)**

*   **Definition:** The B matrix is a matrix that relates the strain vector ($\boldsymbol{\epsilon}$) to the nodal displacement vector ($\mathbf{d}$) of an element:
    $\boldsymbol{\epsilon} = \mathbf{B} \mathbf{d}$

*   **Formation:** The B matrix is derived by differentiating the shape functions. For a 2D element, the strain vector typically includes normal strains in x and y and shear strain in xy:
    $\boldsymbol{\epsilon} = \begin{Bmatrix} \epsilon_{xx} \\ \epsilon_{yy} \\ \gamma_{xy} \end{Bmatrix}$

    If we have $n$ nodes and each node has two degrees of freedom (e.g., $u$ and $v$), the nodal displacement vector $\mathbf{d}$ will have $2n$ components. The B matrix will have dimensions (3 x 2n).

    The general form of the B matrix is obtained by expressing the partial derivatives of the displacement components (which are themselves expressed using shape functions) in terms of the nodal displacements.

    For a 2D element with displacement field:
    $u(x, y) = \sum_{i=1}^{n} N_i(x, y) u_i$
    $v(x, y) = \sum_{i=1}^{n} N_i(x, y) v_i$

    The strain components are:
    $\epsilon_{xx} = \frac{\partial u}{\partial x} = \sum_{i=1}^{n} \frac{\partial N_i}{\partial x} u_i$
    $\epsilon_{yy} = \frac{\partial v}{\partial y} = \sum_{i=1}^{n} \frac{\partial N_i}{\partial y} v_i$
    $\gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x} = \sum_{i=1}^{n} \left(\frac{\partial N_i}{\partial y} u_i + \frac{\partial N_i}{\partial x} v_i\right)$

    Arranging these in a matrix form $\boldsymbol{\epsilon} = \mathbf{B} \mathbf{d}$:

    $\begin{Bmatrix} \epsilon_{xx} \\ \epsilon_{yy} \\ \gamma_{xy} \end{Bmatrix} = \begin{bmatrix} \frac{\partial N_1}{\partial x} & 0 & \frac{\partial N_2}{\partial x} & 0 & \dots & \frac{\partial N_n}{\partial x} & 0 \\ 0 & \frac{\partial N_1}{\partial y} & 0 & \frac{\partial N_2}{\partial y} & \dots & 0 & \frac{\partial N_n}{\partial y} \\ \frac{\partial N_1}{\partial y} & \frac{\partial N_1}{\partial x} & \frac{\partial N_2}{\partial y} & \frac{\partial N_2}{\partial x} & \dots & \frac{\partial N_n}{\partial y} & \frac{\partial N_n}{\partial x} \end{bmatrix} \begin{Bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \\ \vdots \\ u_n \\ v_n \end{Bmatrix}$

    Thus, the B matrix is constructed by extracting the coefficients of the nodal displacements from the strain expressions.

*   **Reference:** Reddy, Chapter 3 (Strain-Displacement Relations), Cook, Chapter 4 (Element Formulation), Bhavikatti, Chapter 3 (Strains and Stress-Strain Relations), Fish & Belytschko, Chapter 2 (Kinematics).

---

### **4. Bar Element (1D) (K3, K4)**

*   **Description:** A bar element is a 1D element used to model axial behavior. It can only deform along its axis.
*   **Degrees of Freedom (DOFs):** Each node has one DOF: axial displacement ($u$). For an element with two nodes (1 and 2), the nodal displacement vector is $\mathbf{d} = \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix}$.
*   **Shape Functions (Linear):**
    $N_1(\xi) = \frac{1-\xi}{2}$, $N_2(\xi) = \frac{1+\xi}{2}$
    where $\xi$ is the natural coordinate, and $x = N_1 x_1 + N_2 x_2$.
    Alternatively, in global coordinates:
    $N_1(x) = \frac{x_2 - x}{L}$, $N_2(x) = \frac{x - x_1}{L}$
    where $L = x_2 - x_1$.
*   **Displacement Field:**
    $u(x) = N_1(x) u_1 + N_2(x) u_2$
*   **Strain-Displacement Relation:** For a 1D bar, strain is only in the axial direction:
    $\epsilon_{xx} = \frac{du}{dx}$
*   **Derivation of B Matrix:**
    $\frac{du}{dx} = \frac{d}{dx} (N_1 u_1 + N_2 u_2) = \frac{dN_1}{dx} u_1 + \frac{dN_2}{dx} u_2$
    $\frac{dN_1}{dx} = \frac{d}{dx} \left(\frac{x_2 - x}{L}\right) = -\frac{1}{L}$
    $\frac{dN_2}{dx} = \frac{d}{dx} \left(\frac{x - x_1}{L}\right) = +\frac{1}{L}$
    So, $\epsilon_{xx} = \left[-\frac{1}{L} \quad \frac{1}{L}\right] \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix}$
    The B matrix for a 1D bar element is:
    $\mathbf{B} = \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix}$
*   **Stress-Strain Relation (Hooke's Law for 1D):**
    $\sigma_{xx} = E \epsilon_{xx}$
    where $E$ is the Young's Modulus.
*   **Stiffness Matrix:**
    $\mathbf{k} = \int_{V} \mathbf{B}^T \mathbf{E} \mathbf{B} dV$
    For a bar element with cross-sectional area $A$ and length $L$:
    $\mathbf{k} = A \int_{0}^{L} \begin{bmatrix} -\frac{1}{L} \\ \frac{1}{L} \end{bmatrix} E \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix} dx = \frac{AE}{L} \int_{0}^{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} dx = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$
*   **Example:** Consider a steel bar of length 1m, cross-sectional area $0.001 m^2$, and $E = 200 \times 10^9 Pa$. The stiffness matrix is:
    $\mathbf{k} = \frac{(0.001 m^2)(200 \times 10^9 Pa)}{1 m} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} = 200 \times 10^6 N/m \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$
*   **Reference:** Reddy, Section 5.2 (Bar Element), Cook, Section 4.2 (Two-Node Bar Element), Bhavikatti, Section 3.3 (One-Dimensional Bar Element), Fish & Belytschko, Section 4.2 (One-Dimensional Elements).

---

### **5. CST (Constant Strain Triangle) Element (2D) (K3, K4)**

*   **Description:** The CST is a simple 2D triangular element where strains are assumed to be constant throughout the element.
*   **Degrees of Freedom (DOFs):** Each node has two DOFs: displacement in x ($u$) and displacement in y ($v$). For a 3-node triangle (nodes 1, 2, 3), the nodal displacement vector is $\mathbf{d} = \begin{Bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \\ u_3 \\ v_3 \end{Bmatrix}$.
*   **Shape Functions (Linear):** Linear shape functions are used, which are in the form of area coordinates (or barycentric coordinates).
    $N_1(x, y) = \frac{1}{2A} (a_1 + b_1 x + c_1 y)$
    $N_2(x, y) = \frac{1}{2A} (a_2 + b_2 x + c_2 y)$
    $N_3(x, y) = \frac{1}{2A} (a_3 + b_3 x + c_3 y)$
    where $A$ is the area of the triangle, and $a_i, b_i, c_i$ are coefficients derived from the nodal coordinates $(x_1, y_1), (x_2, y_2), (x_3, y_3)$.
    Specifically:
    $a_1 = x_2 y_3 - x_3 y_2$
    $b_1 = y_2 - y_3$
    $c_1 = x_3 - x_2$
    (and similarly for $i=2, 3$ with cyclic permutation of indices).
*   **Displacement Field:**
    $u(x, y) = N_1 u_1 + N_2 u_2 + N_3 u_3$
    $v(x, y) = N_1 v_1 + N_2 v_2 + N_3 v_3$
*   **Strain-Displacement Relation:**
    $\epsilon_{xx} = \frac{\partial u}{\partial x} = \frac{\partial N_1}{\partial x} u_1 + \frac{\partial N_2}{\partial x} u_2 + \frac{\partial N_3}{\partial x} u_3$
    $\epsilon_{yy} = \frac{\partial v}{\partial y} = \frac{\partial N_1}{\partial y} v_1 + \frac{\partial N_2}{\partial y} v_2 + \frac{\partial N_3}{\partial y} v_3$
    $\gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x} = \left(\frac{\partial N_1}{\partial y} u_1 + \frac{\partial N_2}{\partial y} u_2 + \frac{\partial N_3}{\partial y} u_3\right) + \left(\frac{\partial N_1}{\partial x} v_1 + \frac{\partial N_2}{\partial x} v_2 + \frac{\partial N_3}{\partial x} v_3\right)$
*   **Derivation of B Matrix:**
    The derivatives of the linear shape functions are constants:
    $\frac{\partial N_i}{\partial x} = \frac{b_i}{2A}$
    $\frac{\partial N_i}{\partial y} = \frac{c_i}{2A}$
    Substituting these into the strain expressions:
    $\epsilon_{xx} = \frac{b_1}{2A} u_1 + \frac{b_2}{2A} u_2 + \frac{b_3}{2A} u_3$
    $\epsilon_{yy} = \frac{c_1}{2A} v_1 + \frac{c_2}{2A} v_2 + \frac{c_3}{2A} v_3$
    $\gamma_{xy} = \frac{c_1}{2A} u_1 + \frac{c_2}{2A} u_2 + \frac{c_3}{2A} u_3 + \frac{b_1}{2A} v_1 + \frac{b_2}{2A} v_2 + \frac{b_3}{2A} v_3$
    The B matrix for the CST element is:
    $\mathbf{B} = \frac{1}{2A} \begin{bmatrix} b_1 & 0 & b_2 & 0 & b_3 & 0 \\ 0 & c_1 & 0 & c_2 & 0 & c_3 \\ c_1 & b_1 & c_2 & b_2 & c_3 & b_3 \end{bmatrix}$
*   **Stress-Strain Relation (Generalized Hooke's Law for Plane Stress):**
    $\boldsymbol{\sigma} = \begin{Bmatrix} \sigma_{xx} \\ \sigma_{yy} \\ \tau_{xy} \end{Bmatrix} = \frac{E}{1-\nu^2} \begin{bmatrix} 1 & \nu & 0 \\ \nu & 1 & 0 \\ 0 & 0 & \frac{1-\nu}{2} \end{bmatrix} \begin{Bmatrix} \epsilon_{xx} \\ \epsilon_{yy} \\ \gamma_{xy} \end{Bmatrix} = \mathbf{D} \boldsymbol{\epsilon}$
    where $E$ is Young's Modulus and $\nu$ is Poisson's Ratio.
*   **Stiffness Matrix:**
    $\mathbf{k} = \int_{V} \mathbf{B}^T \mathbf{D} \mathbf{B} dV$
    For a CST element with thickness $t$, $dV = t \, dA$. Since $\mathbf{B}$ and $\mathbf{D}$ are constant, integration simplifies:
    $\mathbf{k} = t \, A \, \mathbf{B}^T \mathbf{D} \mathbf{B}$
*   **Example:** Consider a triangular element with nodes at (0,0), (1,0), (0,1). The area $A = 0.5$.
    $x_1=0, y_1=0$
    $x_2=1, y_2=0$
    $x_3=0, y_3=1$
    $b_1 = y_2 - y_3 = 0 - 1 = -1$
    $c_1 = x_3 - x_2 = 0 - 1 = -1$
    $b_2 = y_3 - y_1 = 1 - 0 = 1$
    $c_2 = x_1 - x_3 = 0 - 0 = 0$
    $b_3 = y_1 - y_2 = 0 - 0 = 0$
    $c_3 = x_2 - x_1 = 1 - 0 = 1$
    $\mathbf{B} = \frac{1}{2(0.5)} \begin{bmatrix} -1 & 0 & 1 & 0 & 0 & 0 \\ 0 & -1 & 0 & 0 & 0 & 1 \\ -1 & -1 & 0 & 1 & 1 & 0 \end{bmatrix} = \begin{bmatrix} -1 & 0 & 1 & 0 & 0 & 0 \\ 0 & -1 & 0 & 0 & 0 & 1 \\ -1 & -1 & 0 & 1 & 1 & 0 \end{bmatrix}$
*   **Limitations:** CST elements have constant strain and stress, which can lead to inaccuracies, especially in bending problems where strain gradients are significant. They are "stiff."
*   **Reference:** Reddy, Section 8.2 (Triangular Elements), Cook, Section 7.3 (Constant Strain Triangle), Bhavikatti, Section 5.3 (Triangular Element), Fish & Belytschko, Section 5.2 (Two-Dimensional Elements - Triangles).

---

### **6. Beam Element (2D or 3D) (K3, K4)**

*   **Description:** Beam elements are used to model structures that resist loads primarily through bending, shear, and axial forces. They are typically characterized by axial displacement and rotations.
*   **Assumptions for Euler-Bernoulli Beam Theory:**
    *   Plane sections remain plane and perpendicular to the neutral axis after deformation.
    *   Shear deformation is neglected.
    *   Materials are linear elastic and isotropic.
*   **Degrees of Freedom (DOFs):** For a 2D beam element with two nodes (1 and 2), each node typically has two DOFs: transverse displacement ($v$) and rotation ($\theta = \frac{dw}{dx}$). The nodal displacement vector is $\mathbf{d} = \begin{Bmatrix} v_1 \\ \theta_1 \\ v_2 \\ \theta_2 \end{Bmatrix}$. (For 3D beams, axial displacement and torsional rotations are also included).
*   **Shape Functions (Hermite Polynomials):** Linear shape functions are insufficient to describe bending deformation. Hermite polynomials are used to ensure continuity of slope (rotation) at nodes. For transverse displacement $v(x)$:
    $N_{v1}(x) = 2\left(\frac{x}{L}\right)^3 - 3\left(\frac{x}{L}\right)^2 + 1$
    $N_{\theta 1}(x) = \left(\frac{x}{L}\right)^3 - 2\left(\frac{x}{L}\right)^2 + \frac{x}{L}$
    $N_{v2}(x) = -2\left(\frac{x}{L}\right)^3 + 3\left(\frac{x}{L}\right)^2$
    $N_{\theta 2}(x) = \left(\frac{x}{L}\right)^3 - \left(\frac{x}{L}\right)^2$
    where $x$ is measured from node 1, and $L$ is the element length.
*   **Displacement Field:**
    $v(x) = N_{v1}(x) v_1 + N_{\theta 1}(x) \theta_1 + N_{v2}(x) v_2 + N_{\theta 2}(x) \theta_2$
*   **Strain-Displacement Relation (Bending Strain):** The primary strain in beam bending is normal strain along the axial direction due to curvature.
    $\epsilon_{xx} = y \kappa$
    where $y$ is the distance from the neutral axis, and $\kappa$ is the curvature.
    Curvature $\kappa = \frac{d^2 v}{dx^2}$.
*   **Derivation of B Matrix:**
    We need to express $\epsilon_{xx}$ in terms of nodal displacements $\mathbf{d}$.
    $\kappa = \frac{d^2 v}{dx^2} = \frac{d^2}{dx^2} (N_{v1} v_1 + N_{\theta 1} \theta_1 + N_{v2} v_2 + N_{\theta 2} \theta_2)$
    Let $\frac{d^2 N_{v1}}{dx^2} = B_{v1}$, $\frac{d^2 N_{\theta 1}}{dx^2} = B_{\theta 1}$, etc.
    $\kappa = B_{v1} v_1 + B_{\theta 1} \theta_1 + B_{v2} v_2 + B_{\theta 2} \theta_2$
    The derivatives of Hermite polynomials are:
    $N_{v1}'' = \frac{12}{L^2} (\frac{x}{L}) - \frac{6}{L}$
    $N_{\theta 1}'' = \frac{6}{L^2} (\frac{x}{L}) - \frac{4}{L}$
    $N_{v2}'' = -\frac{12}{L^2} (\frac{x}{L}) + \frac{6}{L}$
    $N_{\theta 2}'' = \frac{6}{L^2} (\frac{x}{L}) - \frac{2}{L}$

    So, $\boldsymbol{\kappa} = \mathbf{B}_{\kappa} \mathbf{d}$, where $\mathbf{B}_{\kappa} = \begin{bmatrix} N_{v1}'' & N_{\theta 1}'' & N_{v2}'' & N_{\theta 2}'' \end{bmatrix}$.

    The strain at a distance $y$ from the neutral axis is $\epsilon_{xx} = y \kappa$.
    We can write the strain vector as:
    $\boldsymbol{\epsilon} = \begin{Bmatrix} \epsilon_{xx} \end{Bmatrix}$
    $\epsilon_{xx} = y \kappa = y \mathbf{B}_{\kappa} \mathbf{d}$
    This means the B matrix for beam bending is:
    $\mathbf{B} = y \begin{bmatrix} N_{v1}'' & N_{\theta 1}'' & N_{v2}'' & N_{\theta 2}'' \end{bmatrix} = y \begin{bmatrix} \frac{12}{L^2} (\frac{x}{L}) - \frac{6}{L} & \frac{6}{L^2} (\frac{x}{L}) - \frac{4}{L} & -\frac{12}{L^2} (\frac{x}{L}) + \frac{6}{L} & \frac{6}{L^2} (\frac{x}{L}) - \frac{2}{L} \end{bmatrix}$

    Note that the B matrix for beam elements is typically a function of $x$ and $y$ (distance from neutral axis). For stiffness matrix calculation, integration is performed over the length and cross-section.
*   **Stress-Strain Relation:**
    $\sigma_{xx} = E \epsilon_{xx} = E y \kappa$
*   **Stiffness Matrix:**
    $\mathbf{k} = \int_{V} \mathbf{B}^T \mathbf{D} \mathbf{B} dV$
    For beam bending, $\mathbf{D} = E$ (as it's a scalar in 1D stress/strain). $dV = A \, dx$, where $A$ is the cross-sectional area.
    $\mathbf{k} = \int_{0}^{L} \int_{A} (y \mathbf{B}_{\kappa})^T E (y \mathbf{B}_{\kappa}) dA \, dx = \int_{0}^{L} \mathbf{B}_{\kappa}^T E \left( \int_{A} y^2 dA \right) \mathbf{B}_{\kappa} \, dx$
    The term $\int_{A} y^2 dA$ is the second moment of area, commonly denoted by $I$.
    $\mathbf{k} = \int_{0}^{L} \mathbf{B}_{\kappa}^T E I \mathbf{B}_{\kappa} \, dx$
    Substituting the expressions for $\mathbf{B}_{\kappa}$ and integrating, we get the standard beam stiffness matrix:
    $\mathbf{k} = \frac{EI}{L^3} \begin{bmatrix} 12 & 6L & -12 & 6L \\ 6L & 4L^2 & -6L & 2L^2 \\ -12 & -6L & 12 & -6L \\ 6L & 2L^2 & -6L & 4L^2 \end{bmatrix}$
*   **Example:** Consider a steel beam of length 2m with $E = 200 GPa$ and $I = 10^{-5} m^4$.
    $\mathbf{k} = \frac{(200 \times 10^9 Pa)(10^{-5} m^4)}{(2 m)^3} \begin{bmatrix} 12 & 6(2) & -12 & 6(2) \\ 6(2) & 4(2)^2 & -6(2) & 2(2)^2 \\ -12 & -6(2) & 12 & -6(2) \\ 6(2) & 2(2)^2 & -6(2) & 4(2)^2 \end{bmatrix}$
    $\mathbf{k} = \frac{2 \times 10^6}{8} \begin{bmatrix} 12 & 12 & -12 & 12 \\ 12 & 16 & -12 & 8 \\ -12 & -12 & 12 & -12 \\ 12 & 8 & -12 & 16 \end{bmatrix} = 0.25 \times 10^6 \begin{bmatrix} 12 & 12 & -12 & 12 \\ 12 & 16 & -12 & 8 \\ -12 & -12 & 12 & -12 \\ 12 & 8 & -12 & 16 \end{bmatrix}$
*   **Reference:** Reddy, Section 5.3 (Beam Element), Cook, Section 7.5 (Beam Elements), Bhavikatti, Section 6.3 (Beam Elements), Fish & Belytschko, Section 4.4 (One-Dimensional Elements - Beams).

---

### **7. Practice Questions and Exercises (K3, K4)**

**Question 1 (Bar Element):**
A 1D bar element has length $L=2$ m and cross-sectional area $A=0.01$ m$^2$. Its Young's modulus is $E = 200$ GPa. Determine the B matrix and the element stiffness matrix for this bar element.

**Answer 1:**
*   **B Matrix:**
    $\mathbf{B} = \begin{bmatrix} -\frac{1}{2} & \frac{1}{2} \end{bmatrix}$
*   **Stiffness Matrix:**
    $\mathbf{k} = \frac{(0.01 \text{ m}^2)(200 \times 10^9 \text{ Pa})}{2 \text{ m}} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} = 1 \times 10^9 \text{ N/m} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$

**Question 2 (CST Element):**
Consider a CST element with nodes at coordinates: Node 1: (0,0), Node 2: (2,0), Node 3: (1,3). Determine the $\mathbf{B}$ matrix for this element. Assume plane stress conditions.

**Answer 2:**
Area $A = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times 2 \times 3 = 3$.
$x_1=0, y_1=0$
$x_2=2, y_2=0$
$x_3=1, y_3=3$

$b_1 = y_2 - y_3 = 0 - 3 = -3$
$c_1 = x_3 - x_2 = 1 - 2 = -1$

$b_2 = y_3 - y_1 = 3 - 0 = 3$
$c_2 = x_1 - x_3 = 0 - 1 = -1$

$b_3 = y_1 - y_2 = 0 - 0 = 0$
$c_3 = x_2 - x_1 = 2 - 0 = 2$

$\mathbf{B} = \frac{1}{2A} \begin{bmatrix} b_1 & 0 & b_2 & 0 & b_3 & 0 \\ 0 & c_1 & 0 & c_2 & 0 & c_3 \\ c_1 & b_1 & c_2 & b_2 & c_3 & b_3 \end{bmatrix} = \frac{1}{6} \begin{bmatrix} -3 & 0 & 3 & 0 & 0 & 0 \\ 0 & -1 & 0 & -1 & 0 & 2 \\ -1 & -3 & -1 & 3 & 2 & 0 \end{bmatrix}$

**Question 3 (Beam Element):**
A 2D beam element has length $L = 4$ m. The shape function derivatives for curvature are given by:
$N_{v1}'' = \frac{12}{L^2} (\frac{x}{L}) - \frac{6}{L}$
$N_{\theta 1}'' = \frac{6}{L^2} (\frac{x}{L}) - \frac{4}{L}$
$N_{v2}'' = -\frac{12}{L^2} (\frac{x}{L}) + \frac{6}{L}$
$N_{\theta 2}'' = \frac{6}{L^2} (\frac{x}{L}) - \frac{2}{L}$
Derive the $\mathbf{B}$ matrix for bending strain $\epsilon_{xx} = y \kappa$.

**Answer 3:**
The B matrix is given by $\mathbf{B} = y \begin{bmatrix} N_{v1}'' & N_{\theta 1}'' & N_{v2}'' & N_{\theta 2}'' \end{bmatrix}$.
Substituting the given derivatives and $L=4$:
$N_{v1}'' = \frac{12}{16} (\frac{x}{4}) - \frac{6}{4} = \frac{3}{16}x - \frac{3}{2}$
$N_{\theta 1}'' = \frac{6}{16} (\frac{x}{4}) - \frac{4}{4} = \frac{3}{32}x - 1$
$N_{v2}'' = -\frac{12}{16} (\frac{x}{4}) + \frac{6}{4} = -\frac{3}{16}x + \frac{3}{2}$
$N_{\theta 2}'' = \frac{6}{16} (\frac{x}{4}) - \frac{2}{4} = \frac{3}{32}x - \frac{1}{2}$

$\mathbf{B} = y \begin{bmatrix} \frac{3}{16}x - \frac{3}{2} & \frac{3}{32}x - 1 & -\frac{3}{16}x + \frac{3}{2} & \frac{3}{32}x - \frac{1}{2} \end{bmatrix}$

---

### **8. Important Points to Remember**

*   The **B matrix** is the core of deriving element stiffness. It connects nodal displacements to nodal strains.
*   The **formulation of the B matrix** depends on the element type and the assumed displacement field.
*   **Bar elements** have constant strain and a simple B matrix related to $1/L$.
*   **CST elements** assume constant strain throughout the element, leading to a B matrix with constant coefficients. This simplicity comes at the cost of accuracy in bending.
*   **Beam elements** (Euler-Bernoulli) require higher-order shape functions (Hermite polynomials) to capture bending. The B matrix for bending strain involves second derivatives of shape functions and the distance $y$ from the neutral axis.
*   The integration of $\mathbf{B}^T \mathbf{D} \mathbf{B}$ over the element volume (or area for 2D) yields the element stiffness matrix $\mathbf{k}$.

---

### **9. Alignment with Course Outcomes**

*   **CO1:** Understanding governing equations of physical phenomena (e.g., stress-strain, strain-displacement) and the basic FEM procedure (derivation of element matrices). (K2)
*   **CO2:** Applying coordinate transformations implicitly through shape functions and formulating shape functions for bar, CST, and beam elements. (K3)
*   **CO3:** Formulating shape functions and element strain-displacement (B) matrices for bar, CST, and beam elements. (K4)
*   **CO4:** (Preview) This module provides the B matrix necessary for evaluating element stress using $\boldsymbol{\sigma} = \mathbf{B} \mathbf{d}$ and is a prerequisite for energy methods or weighted residual methods to find stiffness matrices.
*   **CO5:** (Preview) Understanding the B matrix for simple elements is foundational for understanding the complexities of isoparametric elements.

---

This concludes the study notes for Module 3, Topic: Derivation of strain-displacement relation, B matrix, bar, CST, and beam element.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
