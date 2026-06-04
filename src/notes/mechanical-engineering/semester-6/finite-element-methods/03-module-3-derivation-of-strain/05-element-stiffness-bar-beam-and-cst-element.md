---
title: "Element stiffness-bar, beam and CST element"
subject: "FINITE ELEMENT METHODS"
module: "Module 3: Derivation of strain "
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463852"
status: "completed"
scrapedAt: "2026-05-20T18:04:04.728Z"
---
## Finite Element Methods - Module 3: Derivation of Strain

### Topic: Element Stiffness - Bar, Beam, and CST Element

This module focuses on deriving the stiffness matrices for fundamental structural elements: the bar element, the beam element, and the Constant Strain Triangle (CST) element. Understanding these derivations is crucial for building complex finite element models and solving structural analysis problems.

**Course Outcomes Addressed:**

*   **CO1:** Understand the governing equations of various physical phenomena and basic procedure of FEM. (K2) - *This topic builds upon the basic FEM procedure by applying it to specific element types.*
*   **CO2:** Apply the coordinate transformation and formulation of shape functions of various elements. (K3) - *Shape functions are central to the derivation of stiffness matrices.*
*   **CO3:** Formulate element strain-displacement matrix of various elements. (K4) - *The strain-displacement matrix is the core component in relating nodal displacements to strains.*
*   **CO4:** Evaluate element stress using energy method and study Galerkin weighted residual formulations. (K5) - *While this topic focuses on stiffness derivation, it lays the groundwork for stress calculation using these matrices.*

---

### 1. Introduction to Element Stiffness Matrix

The **element stiffness matrix**, denoted by $[\mathbf{k}]$, is a fundamental component in the Finite Element Method. It represents the relationship between the nodal forces and nodal displacements of a single finite element. Mathematically, it is expressed as:

$[\mathbf{f}] = [\mathbf{k}] [\mathbf{d}]$

where:
*   $[\mathbf{f}]$ is the vector of nodal forces.
*   $[\mathbf{k}]$ is the element stiffness matrix.
*   $[\mathbf{d}]$ is the vector of nodal displacements.

The stiffness matrix is derived from the constitutive laws of the material and the kinematic relationships between displacements and strains, often through variational principles (like the Principle of Minimum Potential Energy) or weighted residual methods (like the Galerkin method).

**Key Concept:** The stiffness matrix captures the "stiffness" or resistance of an element to deformation under applied loads.

---

### 2. Bar Element

A **bar element** (or truss element) is a one-dimensional element that can carry axial loads only. It has two nodes, each with one degree of freedom (DOF) representing axial displacement.

**Governing Equation:** The equilibrium equation for a bar element under axial stress is given by:

$\frac{d}{dx}(AE \frac{du}{dx}) + q = 0$

where:
*   $A$ is the cross-sectional area.
*   $E$ is the Young's modulus.
*   $u$ is the axial displacement.
*   $q$ is the distributed axial load.

**Derivation using Principle of Minimum Potential Energy:**

The potential energy $\Pi_e$ for a bar element is given by:

$\Pi_e = \frac{1}{2} \int_{V} \sigma^T \epsilon dV - \int_{S} u^T f dS - \int_{V} u^T q dV$

For a bar element, this simplifies to:

$\Pi_e = \frac{1}{2} \int_{0}^{L} AE (\frac{du}{dx})^2 dx - \sum P_i u_i - \int_{0}^{L} u q dx$

where:
*   $P_i$ are concentrated nodal forces.
*   $u_i$ are nodal displacements.

**Steps for Derivation:**

1.  **Define Nodal Displacements:**
    Let the displacements at nodes 1 and 2 be $u_1$ and $u_2$. The nodal displacement vector is $[\mathbf{d}] = \begin{bmatrix} u_1 \\ u_2 \end{bmatrix}$.

2.  **Formulate Shape Functions:**
    Using linear interpolation, the displacement $u(x)$ within the element can be expressed as:
    $u(x) = N_1(x) u_1 + N_2(x) u_2$

    The shape functions $N_1(x)$ and $N_2(x)$ for a 1D element of length $L$ are:
    $N_1(x) = 1 - \frac{x}{L}$
    $N_2(x) = \frac{x}{L}$

    In matrix form: $u(x) = [\mathbf{N}(x)] [\mathbf{d}]$ where $[\mathbf{N}(x)] = \begin{bmatrix} 1 - \frac{x}{L} & \frac{x}{L} \end{bmatrix}$.

3.  **Derive Strain-Displacement Matrix [B]:**
    Strain $\epsilon$ for a bar element is given by:
    $\epsilon = \frac{du}{dx}$

    Substituting the shape function expression for $u(x)$:
    $\epsilon = \frac{d}{dx} ([N(x)] [\mathbf{d}]) = [\frac{dN_1}{dx} \quad \frac{dN_2}{dx}] [\mathbf{d}] = [\mathbf{B}] [\mathbf{d}]$

    Calculating the derivatives of shape functions:
    $\frac{dN_1}{dx} = -\frac{1}{L}$
    $\frac{dN_2}{dx} = \frac{1}{L}$

    So, the strain-displacement matrix is:
    $[\mathbf{B}] = \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix}$

4.  **Relate Stress and Strain (Constitutive Law):**
    For a bar element, stress $\sigma$ is related to strain $\epsilon$ by Hooke's Law:
    $\sigma = E \epsilon$

    In matrix form: $\sigma = [E] \epsilon$ where $[E] = E$ (a scalar for 1D).

5.  **Derive Element Stiffness Matrix [k]:**
    The element stiffness matrix is defined as:
    $[\mathbf{k}] = \int_{V} [\mathbf{B}]^T [E] [\mathbf{B}] dV$

    For a bar element, $dV = A dx$.
    $[\mathbf{k}] = \int_{0}^{L} [\mathbf{B}]^T E [\mathbf{B}] A dx$

    Substituting $[\mathbf{B}]$:
    $[\mathbf{k}] = \int_{0}^{L} \begin{bmatrix} -\frac{1}{L} \\ \frac{1}{L} \end{bmatrix} E \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix} A dx$
    $[\mathbf{k}] = AE \int_{0}^{L} \begin{bmatrix} \frac{1}{L^2} & -\frac{1}{L^2} \\ -\frac{1}{L^2} & \frac{1}{L^2} \end{bmatrix} dx$

    Integrating over the length $L$:
    $[\mathbf{k}] = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$

**Example:** A bar element of length 1m, area 100 mm$^2$, and Young's modulus 200 GPa.
$A = 100 \times 10^{-6} m^2$
$E = 200 \times 10^9 Pa$
$L = 1 m$

$[\mathbf{k}] = \frac{(100 \times 10^{-6} m^2)(200 \times 10^9 Pa)}{1 m} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$
$[\mathbf{k}] = (20 \times 10^6) \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} N/m$

**Reference:** Reddy, Chapter 4.1 (Bar Elements)

---

### 3. Beam Element

A **beam element** is a one-dimensional element that can carry both axial and transverse loads, and can also resist bending. A typical beam element has two nodes, each with two DOFs: transverse displacement ($v$) and rotation ($\theta$).

**Governing Equation:** The Euler-Bernoulli beam theory governs the behavior of beam elements. The differential equation for transverse deflection is:

$\frac{d^2}{dx^2} (EI \frac{d^2 v}{dx^2}) = q(x)$

where:
*   $E$ is the Young's modulus.
*   $I$ is the area moment of inertia.
*   $v$ is the transverse displacement.
*   $q(x)$ is the distributed transverse load.

**Derivation using Principle of Minimum Potential Energy:**

The potential energy for a beam element involves both strain energy due to bending and work done by external forces. For a beam element, the strain energy due to bending is:

$U_e = \frac{1}{2} \int_{0}^{L} EI (\frac{d^2 v}{dx^2})^2 dx$

The potential energy $\Pi_e = U_e - W_e$, where $W_e$ is the work done by external forces.

**Steps for Derivation:**

1.  **Define Nodal Displacements:**
    At node 1: transverse displacement $v_1$, rotation $\theta_1 = \frac{dv}{dx}|_{x=0}$
    At node 2: transverse displacement $v_2$, rotation $\theta_2 = \frac{dv}{dx}|_{x=L}$

    The nodal displacement vector is $[\mathbf{d}] = \begin{bmatrix} v_1 \\ \theta_1 \\ v_2 \\ \theta_2 \end{bmatrix}$.

2.  **Formulate Shape Functions (Hermite Polynomials):**
    For beam elements, cubic Hermite polynomials are used to ensure continuity of slope at the nodes.
    $v(x) = N_1(x) v_1 + N_2(x) \theta_1 + N_3(x) v_2 + N_4(x) \theta_2$

    The Hermite shape functions for a beam element of length $L$ are:
    $N_1(x) = 2(\frac{x}{L})^3 - 3(\frac{x}{L})^2 + 1$
    $N_2(x) = (\frac{x}{L})^3 - 2(\frac{x}{L})^2 + \frac{x}{L}$
    $N_3(x) = -2(\frac{x}{L})^3 + 3(\frac{x}{L})^2$
    $N_4(x) = (\frac{x}{L})^3 - (\frac{x}{L})^2$

    In matrix form: $v(x) = [\mathbf{N}(x)] [\mathbf{d}]$ where $[\mathbf{N}(x)] = \begin{bmatrix} N_1(x) & N_2(x) & N_3(x) & N_4(x) \end{bmatrix}$.

3.  **Derive Strain-Displacement Matrix [B]:**
    For beam bending, the curvature $\kappa$ is related to the second derivative of displacement:
    $\kappa = \frac{d^2 v}{dx^2}$

    The bending strain $\epsilon_b$ is related to curvature by $\epsilon_b = y \kappa$, where $y$ is the distance from the neutral axis. The stress is $\sigma_b = E y \kappa$.
    The strain-displacement relationship in matrix form is derived by considering the strain distribution across the cross-section. For the stiffness matrix derivation, we focus on the internal forces related to displacement.

    The second derivative of the shape functions is needed:
    $\frac{d^2 N_1}{dx^2} = \frac{6}{L^2}(\frac{x}{L}) - \frac{6}{L^2}$
    $\frac{d^2 N_2}{dx^2} = \frac{6}{L^2}(\frac{x}{L}) - \frac{4}{L}$
    $\frac{d^2 N_3}{dx^2} = -\frac{6}{L^2}(\frac{x}{L}) + \frac{6}{L^2}$
    $\frac{d^2 N_4}{dx^2} = \frac{6}{L^2}(\frac{x}{L}) - \frac{2}{L}$

    The strain-displacement matrix $[\mathbf{B}]$ relates strains (effectively curvature for stiffness) to nodal displacements.
    $[\mathbf{B}(x)] = \frac{d^2}{dx^2} [\mathbf{N}(x)] = \begin{bmatrix} \frac{d^2 N_1}{dx^2} & \frac{d^2 N_2}{dx^2} & \frac{d^2 N_3}{dx^2} & \frac{d^2 N_4}{dx^2} \end{bmatrix}$

4.  **Relate Stress and Strain (Constitutive Law):**
    For beam bending, the stress is $\sigma_b = E y \kappa = E y \frac{d^2 v}{dx^2}$.
    The constitutive matrix in this context is $[E] = E y$ for a given cross-section.

5.  **Derive Element Stiffness Matrix [k]:**
    The element stiffness matrix for bending is:
    $[\mathbf{k}_b] = \int_{V} [\mathbf{B}(x)]^T E [\mathbf{B}(x)] dV$

    For a beam element, $dV = A(y) dx$, where $A(y)$ represents the distribution of area across the cross-section. For simplicity, we consider the bending stiffness $EI$, which is the integral of $E y^2 dA$ over the cross-section.
    $[\mathbf{k}_b] = \int_{0}^{L} [\mathbf{B}(x)]^T EI [\mathbf{B}(x)] dx$

    The integration of the $[\mathbf{B}(x)]$ matrix (which involves polynomials of $x/L$) results in the standard beam stiffness matrix:

    $[\mathbf{k}_b] = \frac{EI}{L^3} \begin{bmatrix}
    12 & 6L & -12 & 6L \\
    6L & 4L^2 & -6L & 2L^2 \\
    -12 & -6L & 12 & -6L \\
    6L & 2L^2 & -6L & 4L^2
    \end{bmatrix}$

    **Note:** This is the stiffness matrix for transverse displacement and rotation. A full beam element stiffness matrix would also include axial deformation if axial DOFs were considered at the nodes, but typically in bending analysis, only transverse DOFs are used.

**Example:** A beam element with $E = 200 GPa$, $I = 10^{-5} m^4$, and $L = 2 m$.
$[\mathbf{k}_b] = \frac{(200 \times 10^9 Pa)(10^{-5} m^4)}{(2 m)^3} \begin{bmatrix}
12 & 6(2) & -12 & 6(2) \\
6(2) & 4(2)^2 & -6(2) & 2(2)^2 \\
-12 & -6(2) & 12 & -6(2) \\
6(2) & 2(2)^2 & -6(2) & 4(2)^2
\end{bmatrix}$
$[\mathbf{k}_b] = \frac{2 \times 10^6}{8} \begin{bmatrix}
12 & 12 & -12 & 12 \\
12 & 16 & -12 & 8 \\
-12 & -12 & 12 & -12 \\
12 & 8 & -12 & 16
\end{bmatrix} N \cdot m$
$[\mathbf{k}_b] = 0.25 \times 10^6 \begin{bmatrix}
12 & 12 & -12 & 12 \\
12 & 16 & -12 & 8 \\
-12 & -12 & 12 & -12 \\
12 & 8 & -12 & 16
\end{bmatrix} N \cdot m$

**Reference:** Reddy, Chapter 4.3 (Beam Elements), Cook, Chapter 13 (Beams)

---

### 4. Constant Strain Triangle (CST) Element

The **Constant Strain Triangle (CST)** element is a two-dimensional, three-noded triangular element. It is one of the simplest elements for plane stress and plane strain analysis. The key characteristic is that it assumes linear variation of displacements, which leads to constant strain within the element.

**Governing Equations:** For plane stress/strain, the constitutive equations relate stress and strain.

**Derivation using Principle of Minimum Potential Energy or Galerkin Method:**

The derivation often involves the Galerkin method or the principle of minimum potential energy. The core idea is to relate nodal displacements to strains within the element.

**Steps for Derivation:**

1.  **Define Nodal Displacements:**
    Each node has two DOFs: horizontal displacement ($u$) and vertical displacement ($v$).
    For a 3-noded triangle with nodes 1, 2, and 3:
    Nodal displacement vector $[\mathbf{d}] = \begin{bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \\ u_3 \\ v_3 \end{bmatrix}$.

2.  **Formulate Shape Functions:**
    Linear shape functions are used for the CST element. The displacement components $u$ and $v$ at any point $(x, y)$ within the element are expressed as:

    $u(x,y) = N_1(x,y) u_1 + N_2(x,y) u_2 + N_3(x,y) u_3 = [\mathbf{N}_u(x,y)] [\mathbf{d}]$
    $v(x,y) = N_1(x,y) v_1 + N_2(x,y) v_2 + N_3(x,y) v_3 = [\mathbf{N}_v(x,y)] [\mathbf{d}]$

    Where $[\mathbf{N}(x,y)] = \begin{bmatrix} N_1 & 0 & N_2 & 0 & N_3 & 0 \\ 0 & N_1 & 0 & N_2 & 0 & N_3 \end{bmatrix}$ and $[\mathbf{d}]$ is the 6x1 nodal displacement vector.

    The linear shape functions are defined in terms of area coordinates (or barycentric coordinates) or directly using the node coordinates.
    Let the coordinates of the nodes be $(x_1, y_1), (x_2, y_2), (x_3, y_3)$.
    The shape function $N_i(x,y)$ is given by:
    $N_i(x,y) = \frac{\alpha_i + \beta_i x + \gamma_i y}{2A_{ele}}$

    where $2A_{ele}$ is twice the area of the triangle, and $\alpha_i, \beta_i, \gamma_i$ are coefficients derived from the node coordinates. A simpler form is often derived based on linear interpolation:
    $N_1(x,y) = \frac{(x_2 y_3 - x_3 y_2) + (y_2 - y_3)x + (x_3 - x_2)y}{2A_{ele}}$
    $N_2(x,y) = \frac{(x_3 y_1 - x_1 y_3) + (y_3 - y_1)x + (x_1 - x_3)y}{2A_{ele}}$
    $N_3(x,y) = \frac{(x_1 y_2 - x_2 y_1) + (y_1 - y_2)x + (x_2 - x_1)y}{2A_{ele}}$

    And $2A_{ele} = x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)$.

3.  **Derive Strain-Displacement Matrix [B]:**
    For a 2D element in plane stress/strain, the strain vector is:
    $[\epsilon] = \begin{bmatrix} \epsilon_x \\ \epsilon_y \\ \gamma_{xy} \end{bmatrix}$

    Where:
    $\epsilon_x = \frac{\partial u}{\partial x}$
    $\epsilon_y = \frac{\partial v}{\partial y}$
    $\gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}$

    Substituting the expressions for $u(x,y)$ and $v(x,y)$:
    $\epsilon_x = \frac{\partial}{\partial x} \sum N_i u_i = \sum \frac{\partial N_i}{\partial x} u_i$
    $\epsilon_y = \frac{\partial}{\partial y} \sum N_i v_i = \sum \frac{\partial N_i}{\partial y} v_i$
    $\gamma_{xy} = \sum \frac{\partial N_i}{\partial y} u_i + \sum \frac{\partial N_i}{\partial x} v_i$

    In matrix form, $[\epsilon] = [\mathbf{B}] [\mathbf{d}]$:
    $[\mathbf{B}] = \begin{bmatrix}
    \frac{\partial N_1}{\partial x} & 0 & \frac{\partial N_2}{\partial x} & 0 & \frac{\partial N_3}{\partial x} & 0 \\
    0 & \frac{\partial N_1}{\partial y} & 0 & \frac{\partial N_2}{\partial y} & 0 & \frac{\partial N_3}{\partial y} \\
    \frac{\partial N_1}{\partial y} & \frac{\partial N_1}{\partial x} & \frac{\partial N_2}{\partial y} & \frac{\partial N_2}{\partial x} & \frac{\partial N_3}{\partial y} & \frac{\partial N_3}{\partial x}
    \end{bmatrix}$

    Since the shape functions $N_i$ are linear in $x$ and $y$, their partial derivatives ($\frac{\partial N_i}{\partial x}$ and $\frac{\partial N_i}{\partial y}$) are constants. This means the strain components $\epsilon_x, \epsilon_y, \gamma_{xy}$ are constant throughout the CST element.

    Let:
    $\beta_1 = y_2 - y_3$, $\gamma_1 = x_3 - x_2$
    $\beta_2 = y_3 - y_1$, $\gamma_2 = x_1 - x_3$
    $\beta_3 = y_1 - y_2$, $\gamma_3 = x_2 - x_1$

    Then:
    $\frac{\partial N_1}{\partial x} = \frac{\beta_1}{2A_{ele}}$, $\frac{\partial N_1}{\partial y} = \frac{\gamma_1}{2A_{ele}}$
    $\frac{\partial N_2}{\partial x} = \frac{\beta_2}{2A_{ele}}$, $\frac{\partial N_2}{\partial y} = \frac{\gamma_2}{2A_{ele}}$
    $\frac{\partial N_3}{\partial x} = \frac{\beta_3}{2A_{ele}}$, $\frac{\partial N_3}{\partial y} = \frac{\gamma_3}{2A_{ele}}$

    So, the $[\mathbf{B}]$ matrix for a CST element is a constant 3x6 matrix:
    $[\mathbf{B}] = \frac{1}{2A_{ele}} \begin{bmatrix}
    \beta_1 & 0 & \beta_2 & 0 & \beta_3 & 0 \\
    0 & \gamma_1 & 0 & \gamma_2 & 0 & \gamma_3 \\
    \gamma_1 & \beta_1 & \gamma_2 & \beta_2 & \gamma_3 & \beta_3
    \end{bmatrix}$

4.  **Relate Stress and Strain (Constitutive Law):**
    For plane stress, the stress-strain relationship is:
    $[\sigma] = [D] [\epsilon]$

    where $[D]$ is the material property matrix:
    For Plane Stress:
    $[D] = \frac{E}{1-\nu^2} \begin{bmatrix}
    1 & \nu & 0 \\
    \nu & 1 & 0 \\
    0 & 0 & \frac{1-\nu}{2}
    \end{bmatrix}$

    For Plane Strain:
    $[D] = \frac{E}{(1+\nu)(1-2\nu)} \begin{bmatrix}
    1-\nu & \nu & 0 \\
    \nu & 1-\nu & 0 \\
    0 & 0 & \frac{1-2\nu}{2}
    \end{bmatrix}$

    where $E$ is Young's modulus and $\nu$ is Poisson's ratio.

5.  **Derive Element Stiffness Matrix [k]:**
    The element stiffness matrix is given by:
    $[\mathbf{k}] = \int_{V} [\mathbf{B}]^T [D] [\mathbf{B}] dV$

    For a 2D CST element, $dV = t \, dA$, where $t$ is the thickness of the element. Since $[\mathbf{B}]$ and $[D]$ are constant, the integration simplifies:
    $[\mathbf{k}] = t \int_{A_{ele}} [\mathbf{B}]^T [D] [\mathbf{B}] dA$
    $[\mathbf{k}] = t \cdot A_{ele} \cdot [\mathbf{B}]^T [D] [\mathbf{B}]$

    The calculation of $[\mathbf{k}]$ involves matrix multiplication of the constant $[\mathbf{B}]$ and $[D]$ matrices. The resulting stiffness matrix $[\mathbf{k}]$ is a 6x6 matrix.

**Example:** Consider a triangular element with nodes at (0,0), (1,0), and (0,1). Let $E = 200 GPa$, $\nu = 0.3$, and thickness $t = 10 mm$.

Node 1: $(x_1, y_1) = (0,0)$
Node 2: $(x_2, y_2) = (1,0)$
Node 3: $(x_3, y_3) = (0,1)$

Area $A_{ele} = \frac{1}{2} | x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2) |$
$A_{ele} = \frac{1}{2} | 0(0 - 1) + 1(1 - 0) + 0(0 - 0) | = \frac{1}{2} |1| = 0.5$

Calculate $\beta_i$ and $\gamma_i$:
$\beta_1 = y_2 - y_3 = 0 - 1 = -1$
$\gamma_1 = x_3 - x_2 = 0 - 1 = -1$

$\beta_2 = y_3 - y_1 = 1 - 0 = 1$
$\gamma_2 = x_1 - x_3 = 0 - 0 = 0$

$\beta_3 = y_1 - y_2 = 0 - 0 = 0$
$\gamma_3 = x_2 - x_1 = 1 - 0 = 1$

$2A_{ele} = 1$

The $[\mathbf{B}]$ matrix:
$[\mathbf{B}] = \frac{1}{1} \begin{bmatrix}
-1 & 0 & 1 & 0 & 0 & 0 \\
0 & -1 & 0 & 0 & 0 & 1 \\
-1 & -1 & 0 & 1 & 1 & 0
\end{bmatrix}$

The material matrix $[D]$ for plane stress:
$E = 200 \times 10^9 Pa$, $\nu = 0.3$, $t = 10 \times 10^{-3} m$.
$\frac{E}{1-\nu^2} = \frac{200 \times 10^9}{1 - (0.3)^2} = \frac{200 \times 10^9}{0.91} \approx 219.78 \times 10^9$

$[D] = 219.78 \times 10^9 \begin{bmatrix}
1 & 0.3 & 0 \\
0.3 & 1 & 0 \\
0 & 0 & 0.35
\end{bmatrix}$

The stiffness matrix $[\mathbf{k}] = t \cdot A_{ele} \cdot [\mathbf{B}]^T [D] [\mathbf{B}]$. This calculation would result in a 6x6 matrix.

**Reference:** Reddy, Chapter 5.2 (Constant Strain Triangle), Bhavikatti, Chapter 10 (Finite Element Analysis of 2D Problems)

---

### Important Points to Remember:

*   **Shape Functions:** The choice of shape functions is critical and dictates the element's behavior (e.g., linear for bar and CST, cubic for beam bending).
*   **Strain-Displacement Matrix [B]:** This matrix is the bridge between nodal displacements and the strains developed within the element.
*   **Constitutive Matrix [D]:** This matrix represents the material's elastic properties and relates stress to strain.
*   **Integration:** The stiffness matrix is obtained by integrating $[\mathbf{B}]^T [D] [\mathbf{B}]$ over the element volume or area.
*   **Symmetry:** Stiffness matrices are always symmetric.
*   **Constant Strain Assumption:** CST elements have constant strain, which can lead to inaccuracies for elements experiencing significant strain gradients. Higher-order elements (like quadratic triangles or quadrilaterals) are used to overcome this.
*   **Degrees of Freedom (DOFs):** The size of the stiffness matrix depends on the number of DOFs per node and the number of nodes in the element.

---

### Practice Questions and Exercises:

**Question 1 (Bar Element):**
A bar element has a length of $L = 2 \text{ m}$, Young's modulus $E = 210 \text{ GPa}$, and cross-sectional area $A = 500 \text{ mm}^2$. Derive the element stiffness matrix for this bar element.

**Answer:**
$A = 500 \text{ mm}^2 = 500 \times 10^{-6} \text{ m}^2$
$E = 210 \text{ GPa} = 210 \times 10^9 \text{ Pa}$
$L = 2 \text{ m}$

$[\mathbf{k}] = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$
$[\mathbf{k}] = \frac{(500 \times 10^{-6} \text{ m}^2)(210 \times 10^9 \text{ Pa})}{2 \text{ m}} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$
$[\mathbf{k}] = \frac{105 \times 10^6}{2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} N/m$
$[\mathbf{k}] = 52.5 \times 10^6 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} N/m$

**Question 2 (Beam Element):**
For a beam element with $E = 200 \text{ GPa}$, $I = 2 \times 10^{-5} \text{ m}^4$, and $L = 4 \text{ m}$, write down the element stiffness matrix for transverse displacement and rotation.

**Answer:**
$[\mathbf{k}_b] = \frac{EI}{L^3} \begin{bmatrix}
12 & 6L & -12 & 6L \\
6L & 4L^2 & -6L & 2L^2 \\
-12 & -6L & 12 & -6L \\
6L & 2L^2 & -6L & 4L^2
\end{bmatrix}$
$EI = (200 \times 10^9)(2 \times 10^{-5}) = 4 \times 10^6 N \cdot m^2$
$L^3 = 4^3 = 64 m^3$
$\frac{EI}{L^3} = \frac{4 \times 10^6}{64} = 0.0625 \times 10^6 N/m^3$
$6L = 6(4) = 24 m$
$4L^2 = 4(4^2) = 64 m^2$
$2L^2 = 2(4^2) = 32 m^2$

$[\mathbf{k}_b] = 0.0625 \times 10^6 \begin{bmatrix}
12 & 24 & -12 & 24 \\
24 & 64 & -24 & 32 \\
-12 & -24 & 12 & -24 \\
24 & 32 & -24 & 64
\end{bmatrix} N \cdot m$

**Question 3 (CST Element):**
A CST element has nodes at $A(1,1), B(4,1), C(1,5)$. Determine the $\beta$ and $\gamma$ values for this element and calculate the terms in the $[\mathbf{B}]$ matrix. Assume plane stress with $E = 70 \text{ GPa}$ and $\nu = 0.3$.

**Answer:**
Node A: $(x_1, y_1) = (1,1)$
Node B: $(x_2, y_2) = (4,1)$
Node C: $(x_3, y_3) = (1,5)$

$2A_{ele} = x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)$
$2A_{ele} = 1(1 - 5) + 4(5 - 1) + 1(1 - 1)$
$2A_{ele} = 1(-4) + 4(4) + 1(0) = -4 + 16 = 12$
$A_{ele} = 6$

Calculate $\beta_i$ and $\gamma_i$:
$\beta_1 = y_2 - y_3 = 1 - 5 = -4$
$\gamma_1 = x_3 - x_2 = 1 - 4 = -3$

$\beta_2 = y_3 - y_1 = 5 - 1 = 4$
$\gamma_2 = x_1 - x_3 = 1 - 1 = 0$

$\beta_3 = y_1 - y_2 = 1 - 1 = 0$
$\gamma_3 = x_2 - x_1 = 4 - 1 = 3$

The $[\mathbf{B}]$ matrix:
$[\mathbf{B}] = \frac{1}{12} \begin{bmatrix}
-4 & 0 & 4 & 0 & 0 & 0 \\
0 & -3 & 0 & 0 & 0 & 3 \\
-3 & -4 & 0 & 4 & 3 & 0
\end{bmatrix}$

The terms in the $[\mathbf{B}]$ matrix are the coefficients of the nodal displacements $u_1, v_1, u_2, v_2, u_3, v_3$ in the strain expressions $\epsilon_x, \epsilon_y, \gamma_{xy}$.

---

This concludes the derivation of stiffness matrices for bar, beam, and CST elements. These fundamental matrices form the building blocks for analyzing more complex structures using the Finite Element Method.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
