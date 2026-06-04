---
title: "formulation of element equations for 1D bar element, 1D beam element and CST element."
subject: "FINITE ELEMENT METHOD"
module: "Module 3: Formulation techniques"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba8116d9"
status: "completed"
scrapedAt: "2026-05-20T18:59:00.278Z"
---
# Finite Element Method: Module 3 - Formulation Techniques

## Introduction

This module focuses on the core process of deriving the mathematical equations that represent individual structural elements in the Finite Element Method (FEM). We will explore the formulation of element equations for three fundamental element types: the 1D bar element, the 1D beam element, and the Constant Strain Triangle (CST) element. Understanding these formulation techniques is crucial for building a solid foundation in FEM.

---

## Learning Outcomes

By the end of this module, you will be able to:

*   Formulate the stiffness matrix and load vector for a 1D bar element.
*   Formulate the stiffness matrix and load vector for a 1D beam element.
*   Formulate the stiffness matrix and load vector for a Constant Strain Triangle (CST) element.
*   Understand the principles of deriving element characteristic equations using variational principles or weighted residual methods.
*   Apply displacement-based formulation to derive element equations.

---

## 3.1 Formulation of Element Equations for 1D Bar Element

### 3.1.1 Key Concepts and Definitions

*   **Bar Element:** A structural element that can resist axial forces only. It has two nodes, and each node has one degree of freedom (DOF) associated with axial displacement.
*   **Degrees of Freedom (DOF):** The independent variables that describe the displacement state of an element. For a 1D bar element, the DOFs are the axial displacements at each node.
*   **Stiffness Matrix ($\mathbf{k}^e$):** A matrix that relates the nodal forces to the nodal displacements for a single element. It represents the element's resistance to deformation.
*   **Load Vector ($\mathbf{f}^e$):** A vector that represents the external forces applied to the element at its nodes, or equivalent nodal forces due to distributed loads.
*   **Material Properties:** Young's modulus ($E$) and cross-sectional area ($A$).
*   **Element Length ($L$):** The length of the bar element.
*   **Assumptions for 1D Bar Element:**
    *   Linear elastic material behavior (Hooke's Law).
    *   Small deformations.
    *   Plane sections remain plane and perpendicular to the axis of the bar.
    *   No shear deformation.
    *   Axial forces only.

### 3.1.2 Displacement-Based Formulation (Stiffness Matrix Derivation)

The most common approach to formulating element equations is the **displacement-based formulation**, which relies on the principle of minimum potential energy or virtual work.

#### 3.1.2.1 Strain-Displacement Relationship

Consider a 1D bar element with length $L$. Let the nodes be at positions $x=0$ and $x=L$. The axial displacement at any point $x$ within the element, denoted by $u(x)$, can be approximated using shape functions. For a simple linear approximation, we use linear shape functions:

$\mathbf{u}^e(x) = \begin{bmatrix} u_1 \\ u_2 \end{bmatrix}$

where $u_1$ and $u_2$ are the axial displacements at node 1 and node 2, respectively.

The displacement field within the element can be expressed as:

$u(x) = N_1(x)u_1 + N_2(x)u_2$

Using linear shape functions:
$N_1(x) = 1 - \frac{x}{L}$
$N_2(x) = \frac{x}{L}$

In matrix form:
$u(x) = \mathbf{N}(x) \mathbf{u}^e$
where $\mathbf{N}(x) = \begin{bmatrix} 1 - \frac{x}{L} & \frac{x}{L} \end{bmatrix}$ and $\mathbf{u}^e = \begin{bmatrix} u_1 \\ u_2 \end{bmatrix}$.

The axial strain $\epsilon_x(x)$ is the derivative of the displacement with respect to $x$:

$\epsilon_x(x) = \frac{du}{dx} = \frac{d}{dx} (N_1(x)u_1 + N_2(x)u_2)$
$\epsilon_x(x) = \frac{dN_1}{dx} u_1 + \frac{dN_2}{dx} u_2$

$\frac{dN_1}{dx} = -\frac{1}{L}$
$\frac{dN_2}{dx} = \frac{1}{L}$

In matrix form:
$\epsilon_x(x) = \mathbf{B}(x) \mathbf{u}^e$
where $\mathbf{B}(x) = \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix}$.

#### 3.1.2.2 Stress-Strain Relationship (Constitutive Law)

For a 1D bar element, stress is related to strain by Young's modulus:

$\sigma_x(x) = E \epsilon_x(x)$

In matrix form:
$\sigma_x(x) = D \epsilon_x(x)$
where $D = E$ (for 1D stress).

#### 3.1.2.3 Strain Energy ($\Pi_E$)

The strain energy stored in the element is given by:

$\Pi_E = \frac{1}{2} \int_{V} \sigma_x \epsilon_x dV$

Substituting $\sigma_x = D \epsilon_x$:
$\Pi_E = \frac{1}{2} \int_{V} D \epsilon_x^2 dV$

Substituting $\epsilon_x = \mathbf{B} \mathbf{u}^e$:
$\Pi_E = \frac{1}{2} \int_{V} D (\mathbf{B} \mathbf{u}^e)^T (\mathbf{B} \mathbf{u}^e) dV$
$\Pi_E = \frac{1}{2} \int_{V} D (\mathbf{u}^e)^T \mathbf{B}^T \mathbf{B} \mathbf{u}^e dV$

Assuming $D$, $A$ (cross-sectional area), and $L$ are constant over the element, and integrating over the volume ($dV = A \, dx$):

$\Pi_E = \frac{1}{2} (\mathbf{u}^e)^T \left( \int_{0}^{L} E A \mathbf{B}^T \mathbf{B} \, dx \right) \mathbf{u}^e$

The term in the parenthesis is the element stiffness matrix $\mathbf{k}^e$:

$\mathbf{k}^e = \int_{0}^{L} E A \mathbf{B}^T \mathbf{B} \, dx$

Substituting $\mathbf{B} = \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix}$:
$\mathbf{B}^T \mathbf{B} = \begin{bmatrix} -\frac{1}{L} \\ \frac{1}{L} \end{bmatrix} \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix} = \begin{bmatrix} \frac{1}{L^2} & -\frac{1}{L^2} \\ -\frac{1}{L^2} & \frac{1}{L^2} \end{bmatrix}$

$\mathbf{k}^e = \int_{0}^{L} E A \begin{bmatrix} \frac{1}{L^2} & -\frac{1}{L^2} \\ -\frac{1}{L^2} & \frac{1}{L^2} \end{bmatrix} dx$
$\mathbf{k}^e = E A \begin{bmatrix} \frac{1}{L^2} & -\frac{1}{L^2} \\ -\frac{1}{L^2} & \frac{1}{L^2} \end{bmatrix} \int_{0}^{L} dx$
$\mathbf{k}^e = E A \begin{bmatrix} \frac{1}{L^2} & -\frac{1}{L^2} \\ -\frac{1}{L^2} & \frac{1}{L^2} \end{bmatrix} [x]_0^L$
$\mathbf{k}^e = E A \begin{bmatrix} \frac{1}{L^2} & -\frac{1}{L^2} \\ -\frac{1}{L^2} & \frac{1}{L^2} \end{bmatrix} L$

**Element Stiffness Matrix for 1D Bar Element:**
$\mathbf{k}^e = \frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$

#### 3.1.2.4 Potential Energy due to External Loads ($\Pi_P$)

The potential energy due to external nodal forces $\mathbf{F}^e = \begin{bmatrix} F_1 \\ F_2 \end{bmatrix}$ (where $F_1$ and $F_2$ are axial forces at nodes 1 and 2) is:

$\Pi_P = - (\mathbf{u}^e)^T \mathbf{F}^e$

#### 3.1.2.5 Total Potential Energy ($\Pi$)

The total potential energy is the sum of strain energy and potential energy due to loads:

$\Pi = \Pi_E + \Pi_P = \frac{1}{2} (\mathbf{u}^e)^T \mathbf{k}^e \mathbf{u}^e - (\mathbf{u}^e)^T \mathbf{F}^e$

#### 3.1.2.6 Principle of Minimum Potential Energy

According to the principle of minimum potential energy, the equilibrium state is achieved when the total potential energy is minimized. This means the partial derivatives of $\Pi$ with respect to each nodal displacement are zero:

$\frac{\partial \Pi}{\partial u_1} = 0$
$\frac{\partial \Pi}{\partial u_2} = 0$

Mathematically, this is equivalent to:
$\nabla \Pi = \mathbf{0}$

$\nabla \left( \frac{1}{2} (\mathbf{u}^e)^T \mathbf{k}^e \mathbf{u}^e - (\mathbf{u}^e)^T \mathbf{F}^e \right) = \mathbf{0}$
$\mathbf{k}^e \mathbf{u}^e - \mathbf{F}^e = \mathbf{0}$

**Element Equation:**
$\mathbf{k}^e \mathbf{u}^e = \mathbf{F}^e$

### 3.1.3 Load Vector Derivation

The load vector $\mathbf{F}^e$ represents the equivalent nodal forces.

#### 3.1.3.1 Point Loads

If there are point loads $P_1$ and $P_2$ applied directly at nodes 1 and 2, respectively, then:

$\mathbf{F}^e = \begin{bmatrix} P_1 \\ P_2 \end{bmatrix}$

#### 3.1.3.2 Distributed Loads

If a distributed load of intensity $q(x)$ (force per unit length) is applied along the element. The equivalent nodal forces are obtained by integrating the work done by the distributed load over the element length, using the shape functions.

The work done by the distributed load $q(x)$ is:
$W_{ext} = \int_{0}^{L} q(x) u(x) \, dx$
$W_{ext} = \int_{0}^{L} q(x) (N_1(x)u_1 + N_2(x)u_2) \, dx$
$W_{ext} = \left( \int_{0}^{L} q(x) N_1(x) \, dx \right) u_1 + \left( \int_{0}^{L} q(x) N_2(x) \, dx \right) u_2$

This work done is equal to the work done by equivalent nodal forces:
$W_{ext} = F_1 u_1 + F_2 u_2$

So, the equivalent nodal forces are:
$F_1 = \int_{0}^{L} q(x) N_1(x) \, dx$
$F_2 = \int_{0}^{L} q(x) N_2(x) \, dx$

In matrix form:
$\mathbf{F}^e = \int_{0}^{L} \mathbf{N}^T(x) q(x) \, dx$

**Example: Uniform Distributed Load $q$**

$F_1 = \int_{0}^{L} q \left(1 - \frac{x}{L}\right) dx = q \left[ x - \frac{x^2}{2L} \right]_0^L = q \left( L - \frac{L^2}{2L} \right) = q \left( L - \frac{L}{2} \right) = \frac{qL}{2}$
$F_2 = \int_{0}^{L} q \left(\frac{x}{L}\right) dx = q \left[ \frac{x^2}{2L} \right]_0^L = q \left( \frac{L^2}{2L} \right) = \frac{qL}{2}$

So, for a uniform distributed load $q$, the load vector is:
$\mathbf{F}^e = \begin{bmatrix} \frac{qL}{2} \\ \frac{qL}{2} \end{bmatrix}$

### 3.1.4 Example Calculation

Consider a bar element with length $L = 1$ m, Young's modulus $E = 200$ GPa, and cross-sectional area $A = 0.001$ m$^2$.

**Calculate the element stiffness matrix:**
$\mathbf{k}^e = \frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$
$EA = (200 \times 10^9 \, \text{N/m}^2) \times (0.001 \, \text{m}^2) = 200 \times 10^6 \, \text{N}$
$\mathbf{k}^e = \frac{200 \times 10^6 \, \text{N}}{1 \, \text{m}} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} = 200 \times 10^6 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \, \text{N/m}$

**If a point load of $100$ kN is applied at node 1, and node 2 is fixed ($u_2=0$), calculate the displacement at node 1.**

The global system of equations will be formed by assembling element stiffness matrices and load vectors. For a single element, the equation is:
$\begin{bmatrix} k_{11} & k_{12} \\ k_{21} & k_{22} \end{bmatrix} \begin{bmatrix} u_1 \\ u_2 \end{bmatrix} = \begin{bmatrix} F_1 \\ F_2 \end{bmatrix}$

$\begin{bmatrix} 200 \times 10^6 & -200 \times 10^6 \\ -200 \times 10^6 & 200 \times 10^6 \end{bmatrix} \begin{bmatrix} u_1 \\ u_2 \end{bmatrix} = \begin{bmatrix} 100 \times 10^3 \\ 0 \end{bmatrix}$

Given boundary condition: $u_2 = 0$.
The equations become:
$200 \times 10^6 u_1 - 200 \times 10^6 u_2 = 100 \times 10^3$
$-200 \times 10^6 u_1 + 200 \times 10^6 u_2 = 0$

Substitute $u_2 = 0$ into the first equation:
$200 \times 10^6 u_1 = 100 \times 10^3$
$u_1 = \frac{100 \times 10^3}{200 \times 10^6} = \frac{100}{200000} = \frac{1}{2000} = 0.0005$ m = 0.5 mm

---

## 3.2 Formulation of Element Equations for 1D Beam Element

### 3.2.1 Key Concepts and Definitions

*   **Beam Element:** A structural element that can resist axial forces, shear forces, and bending moments. It typically has two nodes. Each node has two DOFs: vertical displacement and rotation.
*   **Degrees of Freedom (DOF):** For a 1D beam element, each node has two DOFs: vertical displacement ($v$) and rotation ($\theta$). So, a 2-node beam element has 4 DOFs in total, usually ordered as $v_1, \theta_1, v_2, \theta_2$.
*   **Material Properties:** Young's modulus ($E$) and moment of inertia ($I$).
*   **Element Length ($L$):** The length of the beam element.
*   **Assumptions for 1D Beam Element (Euler-Bernoulli Beam Theory):**
    *   Linear elastic material behavior.
    *   Small deformations.
    *   Plane sections remain plane and perpendicular to the neutral axis (no shear deformation is considered in Euler-Bernoulli theory).
    *   Bending is the primary mode of deformation.
    *   Shear deformation is neglected.

### 3.2.2 Displacement-Based Formulation (Stiffness Matrix Derivation)

The formulation for a beam element is more complex due to the introduction of bending. We'll use a displacement-based approach using polynomial shape functions that satisfy the governing differential equation for beam bending.

#### 3.2.2.1 Governing Equation for Bending

The governing differential equation for a beam under distributed load $q(x)$ is:

$EI \frac{d^4v}{dx^4} = q(x)$

For an element without distributed load ($q(x)=0$), the equation is:
$EI \frac{d^4v}{dx^4} = 0$

The general solution for $v(x)$ is a cubic polynomial:
$v(x) = c_1 + c_2 x + c_3 x^2 + c_4 x^3$

The nodal DOFs are $v_1, \theta_1, v_2, \theta_2$. The relationship between $v(x)$, its slope $v'(x) = \frac{dv}{dx}$, and the constants $c_i$ are:

At node 1 ($x=0$):
$v_1 = v(0) = c_1$
$\theta_1 = v'(0) = c_2$

At node 2 ($x=L$):
$v_2 = v(L) = c_1 + c_2 L + c_3 L^2 + c_4 L^3$
$\theta_2 = v'(L) = c_2 + 2 c_3 L + 3 c_4 L^2$

We can express the displacement $v(x)$ in terms of the nodal DOFs $\mathbf{v}^e = \begin{bmatrix} v_1 \\ \theta_1 \\ v_2 \\ \theta_2 \end{bmatrix}$ using shape functions:

$v(x) = N_1(x)v_1 + N_2(x)\theta_1 + N_3(x)v_2 + N_4(x)\theta_2$
$v(x) = \mathbf{N}(x) \mathbf{v}^e$

The shape functions for a beam element are derived by solving the system of equations for $c_1, c_2, c_3, c_4$ in terms of $v_1, \theta_1, v_2, \theta_2$ and substituting them back into the polynomial. The resulting shape functions are:

$N_1(x) = 1 - 3\left(\frac{x}{L}\right)^2 + 2\left(\frac{x}{L}\right)^3$
$N_2(x) = x - 2\frac{x^2}{L} + \frac{x^3}{L^2}$
$N_3(x) = 3\left(\frac{x}{L}\right)^2 - 2\left(\frac{x}{L}\right)^3$
$N_4(x) = \frac{x^2}{L} - \frac{x^3}{L^2}$

#### 3.2.2.2 Strain-Curvature Relationship

For Euler-Bernoulli beams, the curvature $\kappa(x)$ is approximately equal to the second derivative of the displacement:

$\kappa(x) = \frac{d^2v}{dx^2}$

In matrix form:
$\kappa(x) = \mathbf{B}(x) \mathbf{v}^e$
where $\mathbf{B}(x) = \frac{d^2\mathbf{N}}{dx^2}$.

Calculating the second derivatives of the shape functions:
$\frac{d^2N_1}{dx^2} = -\frac{6}{L^2} + \frac{6x}{L^3}$
$\frac{d^2N_2}{dx^2} = -\frac{4}{L} + \frac{6x}{L^2}$
$\frac{d^2N_3}{dx^2} = \frac{6}{L^2} - \frac{6x}{L^3}$
$\frac{d^2N_4}{dx^2} = \frac{4}{L} - \frac{6x}{L^2}$

So, $\mathbf{B}(x) = \begin{bmatrix} -\frac{6}{L^2} + \frac{6x}{L^3} & -\frac{4}{L} + \frac{6x}{L^2} & \frac{6}{L^2} - \frac{6x}{L^3} & \frac{4}{L} - \frac{6x}{L^2} \end{bmatrix}$

#### 3.2.2.3 Stress-Strain Relationship (Constitutive Law)

For beam bending, the axial stress $\sigma_x$ is related to the strain by Young's modulus $E$. The bending moment $M(x)$ is related to the curvature:

$M(x) = EI \kappa(x)$

This is analogous to the 1D bar case, where the constitutive matrix is $D=E$, and here, it's $EI$.

#### 3.2.2.4 Strain Energy ($\Pi_E$)

The strain energy stored in the element is:
$\Pi_E = \frac{1}{2} \int_{0}^{L} EI \kappa(x)^2 \, dx$

Substituting $\kappa(x) = \mathbf{B}(x) \mathbf{v}^e$:
$\Pi_E = \frac{1}{2} \int_{0}^{L} EI (\mathbf{B}(x) \mathbf{v}^e)^T (\mathbf{B}(x) \mathbf{v}^e) \, dx$
$\Pi_E = \frac{1}{2} (\mathbf{v}^e)^T \left( \int_{0}^{L} EI \mathbf{B}^T(x) \mathbf{B}(x) \, dx \right) \mathbf{v}^e$

The term in the parenthesis is the element stiffness matrix $\mathbf{k}^e$:

$\mathbf{k}^e = \int_{0}^{L} EI \mathbf{B}^T(x) \mathbf{B}(x) \, dx$

This integration results in the following standard 4x4 stiffness matrix for a 1D beam element (Euler-Bernoulli):

**Element Stiffness Matrix for 1D Beam Element:**
$\mathbf{k}^e = \frac{EI}{L^3} \begin{bmatrix}
12 & 6L & -12 & 6L \\
6L & 4L^2 & -6L & 2L^2 \\
-12 & -6L & 12 & -6L \\
6L & 2L^2 & -6L & 4L^2
\end{bmatrix}$

The DOFs are typically ordered as: $[v_1, \theta_1, v_2, \theta_2]^T$.

#### 3.2.2.5 Potential Energy due to External Loads ($\Pi_P$)

External loads on a beam element can be in the form of nodal forces ($V_1, V_2$), nodal moments ($M_1, M_2$), and distributed loads ($q(x)$). The potential energy is:

$\Pi_P = - (\mathbf{v}^e)^T \mathbf{F}^e$

where $\mathbf{F}^e = \begin{bmatrix} V_1 \\ M_1 \\ V_2 \\ M_2 \end{bmatrix}$ are the equivalent nodal forces and moments.

#### 3.2.2.6 Element Equation

Applying the principle of minimum potential energy, we get the element equation:

$\mathbf{k}^e \mathbf{v}^e = \mathbf{F}^e$

### 3.2.3 Load Vector Derivation

#### 3.2.3.1 Point Loads and Moments

If a vertical force $V_1$ and a moment $M_1$ are applied at node 1, and $V_2, M_2$ at node 2, then these directly contribute to the load vector:

$\mathbf{F}^e = \begin{bmatrix} V_1 \\ M_1 \\ V_2 \\ M_2 \end{bmatrix}$

#### 3.2.3.2 Distributed Loads

For a distributed load $q(x)$ (force per unit length) along the element, the equivalent nodal forces and moments are found by integrating the work done by the distributed load with the shape functions:

$\mathbf{F}^e = \int_{0}^{L} \mathbf{N}^T(x) q(x) \, dx$

**Example: Uniform Distributed Load $q$**

This integration is more involved for beam shape functions. The resulting equivalent nodal forces and moments for a uniform distributed load $q$ are:

$V_1 = \frac{qL}{2}$
$M_1 = \frac{qL^2}{12}$
$V_2 = \frac{qL}{2}$
$M_2 = -\frac{qL^2}{12}$

So, the load vector for a uniform distributed load $q$ is:
$\mathbf{F}^e = \begin{bmatrix} \frac{qL}{2} \\ \frac{qL^2}{12} \\ \frac{qL}{2} \\ -\frac{qL^2}{12} \end{bmatrix}$

### 3.2.4 Example Calculation

Consider a beam element of length $L = 4$ m, with $E = 200$ GPa and $I = 10^{-5}$ m$^4$. The beam is subjected to a uniform distributed load $q = 10$ kN/m.

**Calculate the element stiffness matrix:**
$EI = (200 \times 10^9 \, \text{N/m}^2) \times (10^{-5} \, \text{m}^4) = 2 \times 10^6 \, \text{Nm}^2$
$\frac{EI}{L^3} = \frac{2 \times 10^6 \, \text{Nm}^2}{(4 \, \text{m})^3} = \frac{2 \times 10^6}{64} \, \text{N/m} = 31250 \, \text{N/m}$

$\mathbf{k}^e = 31250 \begin{bmatrix}
12 & 24 & -12 & 24 \\
24 & 16 \times 16 & -24 & 2 \times 16 \\
-12 & -24 & 12 & -24 \\
24 & 32 & -24 & 16
\end{bmatrix} \begin{bmatrix}
12 & 6(4) & -12 & 6(4) \\
6(4) & 4(4)^2 & -6(4) & 2(4)^2 \\
-12 & -6(4) & 12 & -6(4) \\
6(4) & 2(4)^2 & -6(4) & 4(4)^2
\end{bmatrix}$

$\mathbf{k}^e = \frac{2 \times 10^6}{4^3} \begin{bmatrix}
12 & 24 & -12 & 24 \\
24 & 64 & -24 & 32 \\
-12 & -24 & 12 & -24 \\
24 & 32 & -24 & 64
\end{bmatrix}$

$\mathbf{k}^e = 31250 \begin{bmatrix}
12 & 24 & -12 & 24 \\
24 & 64 & -24 & 32 \\
-12 & -24 & 12 & -24 \\
24 & 32 & -24 & 64
\end{bmatrix} \, \text{N/m, Nm}$

**Calculate the load vector for the uniform distributed load $q = 10$ kN/m:**
$q = 10 \times 10^3 \, \text{N/m}$
$L = 4$ m

$V_1 = \frac{(10 \times 10^3)(4)}{2} = 20 \times 10^3 \, \text{N}$
$M_1 = \frac{(10 \times 10^3)(4)^2}{12} = \frac{160 \times 10^3}{12} \approx 13.33 \times 10^3 \, \text{Nm}$
$V_2 = \frac{(10 \times 10^3)(4)}{2} = 20 \times 10^3 \, \text{N}$
$M_2 = -\frac{(10 \times 10^3)(4)^2}{12} \approx -13.33 \times 10^3 \, \text{Nm}$

$\mathbf{F}^e = \begin{bmatrix} 20 \times 10^3 \\ 13.33 \times 10^3 \\ 20 \times 10^3 \\ -13.33 \times 10^3 \end{bmatrix} \, \text{N, Nm}$

---

## 3.3 Formulation of Element Equations for Constant Strain Triangle (CST) Element

### 3.3.1 Key Concepts and Definitions

*   **Constant Strain Triangle (CST) Element:** A 2D triangular element with three nodes, where each node has two DOFs: horizontal displacement ($u$) and vertical displacement ($v$). So, a CST element has 6 DOFs in total, typically ordered as $u_1, v_1, u_2, v_2, u_3, v_3$.
*   **Degrees of Freedom (DOF):** For a CST element, each node has two DOFs: $u$ and $v$. Total DOFs = 3 nodes * 2 DOFs/node = 6 DOFs.
*   **Material Properties:** Plane stress or plane strain conditions, described by Young's modulus ($E$) and Poisson's ratio ($\nu$). For plane stress, the material property matrix is $D = \frac{E}{1-\nu^2} \begin{bmatrix} 1 & \nu & 0 \\ \nu & 1 & 0 \\ 0 & 0 & \frac{1-\nu}{2} \end{bmatrix}$.
*   **Assumptions for CST Element:**
    *   Linear elastic material behavior.
    *   Small deformations.
    *   **Constant Strain:** Within the element, the strains ($\epsilon_x, \epsilon_y, \gamma_{xy}$) are assumed to be constant. This is a significant simplification.
    *   Displacements vary linearly within the element.

### 3.3.2 Displacement-Based Formulation (Stiffness Matrix Derivation)

The formulation for 2D elements involves strain-displacement and stress-strain relationships in matrix form.

#### 3.3.2.1 Displacement Field

The displacement vector at any point $(x, y)$ in the element is $\mathbf{u}(x, y) = \begin{bmatrix} u(x, y) \\ v(x, y) \end{bmatrix}$.
The displacements within the CST element are approximated by linear shape functions (also called plane harmonic polynomials):

$u(x, y) = N_1(x, y) u_1 + N_2(x, y) u_2 + N_3(x, y) u_3$
$v(x, y) = N_1(x, y) v_1 + N_2(x, y) v_2 + N_3(x, y) v_3$

where $N_i(x, y)$ are the linear shape functions:
$N_i(x, y) = \frac{1}{2A} (a_i + b_i x + c_i y)$

where $A$ is the area of the triangle and $a_i, b_i, c_i$ are constants related to the nodal coordinates:
Node 1: $(x_1, y_1)$
Node 2: $(x_2, y_2)$
Node 3: $(x_3, y_3)$

The constants are:
$a_1 = x_2 y_3 - x_3 y_2$
$b_1 = y_2 - y_3$
$c_1 = x_3 - x_2$

and similarly for nodes 2 and 3 (cyclically permuting indices).
The area $A$ is given by $A = \frac{1}{2} \det \begin{bmatrix} 1 & x_1 & y_1 \\ 1 & x_2 & y_2 \\ 1 & x_3 & y_3 \end{bmatrix} = \frac{1}{2} (x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2))$.

The displacement vector can be written in matrix form:
$\mathbf{u}^e(x,y) = \begin{bmatrix} u(x,y) \\ v(x,y) \end{bmatrix} = \begin{bmatrix} N_1 & 0 & N_2 & 0 & N_3 & 0 \\ 0 & N_1 & 0 & N_2 & 0 & N_3 \end{bmatrix} \begin{bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \\ u_3 \\ v_3 \end{bmatrix}$
$\mathbf{u}^e(x,y) = \mathbf{N}(x,y) \mathbf{\delta}^e$

where $\mathbf{\delta}^e = \begin{bmatrix} u_1 & v_1 & u_2 & v_2 & u_3 & v_3 \end{bmatrix}^T$ is the vector of nodal displacements, and $\mathbf{N}(x,y)$ is the matrix of shape functions.

#### 3.3.2.2 Strain-Displacement Relationship

The strains in a 2D element are $\mathbf{\epsilon} = \begin{bmatrix} \epsilon_x \\ \epsilon_y \\ \gamma_{xy} \end{bmatrix}$.
The strain-displacement relationship is:
$\epsilon_x = \frac{\partial u}{\partial x}$
$\epsilon_y = \frac{\partial v}{\partial y}$
$\gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}$

In matrix form:
$\mathbf{\epsilon}(x,y) = \mathbf{B}(x,y) \mathbf{\delta}^e$

Let's find the $\mathbf{B}$ matrix.
$\frac{\partial N_i}{\partial x} = \frac{b_i}{2A}$
$\frac{\partial N_i}{\partial y} = \frac{c_i}{2A}$

$\frac{\partial u}{\partial x} = \sum_{i=1}^3 \frac{\partial N_i}{\partial x} u_i = \sum_{i=1}^3 \frac{b_i}{2A} u_i$
$\frac{\partial v}{\partial y} = \sum_{i=1}^3 \frac{\partial N_i}{\partial y} v_i = \sum_{i=1}^3 \frac{c_i}{2A} v_i$
$\frac{\partial u}{\partial y} = \sum_{i=1}^3 \frac{\partial N_i}{\partial y} u_i = \sum_{i=1}^3 \frac{c_i}{2A} u_i$
$\frac{\partial v}{\partial x} = \sum_{i=1}^3 \frac{\partial N_i}{\partial x} v_i = \sum_{i=1}^3 \frac{b_i}{2A} v_i$

Therefore, the $\mathbf{B}$ matrix is:
$\mathbf{B} = \frac{1}{2A} \begin{bmatrix}
b_1 & 0 & b_2 & 0 & b_3 & 0 \\
0 & c_1 & 0 & c_2 & 0 & c_3 \\
c_1 & b_1 & c_2 & b_2 & c_3 & b_3
\end{bmatrix}$

Notice that the $\mathbf{B}$ matrix is constant for the CST element because $A, b_i, c_i$ are constants. This leads to the assumption of constant strains.

#### 3.3.2.3 Stress-Strain Relationship (Constitutive Matrix)

For plane stress, the constitutive matrix $\mathbf{D}$ is:
$\mathbf{D} = \frac{E}{1-\nu^2} \begin{bmatrix}
1 & \nu & 0 \\
\nu & 1 & 0 \\
0 & 0 & \frac{1-\nu}{2}
\end{bmatrix}$

For plane strain, it's slightly different (replace $\nu$ with $\frac{\nu}{1-\nu}$). We'll use plane stress for this explanation.

The stress vector is $\mathbf{\sigma} = \begin{bmatrix} \sigma_x \\ \sigma_y \\ \tau_{xy} \end{bmatrix}$.
$\mathbf{\sigma} = \mathbf{D} \mathbf{\epsilon}$

#### 3.3.2.4 Strain Energy ($\Pi_E$)

The strain energy density is $\frac{1}{2} \mathbf{\epsilon}^T \mathbf{\sigma} = \frac{1}{2} \mathbf{\epsilon}^T \mathbf{D} \mathbf{\epsilon}$.
The total strain energy in the element is:
$\Pi_E = \frac{1}{2} \int_{V} \mathbf{\epsilon}^T \mathbf{D} \mathbf{\epsilon} \, dV$

For a 2D element, $dV = t \, dA$, where $t$ is the thickness (if any). For simplicity, assume $t=1$ or consider it as part of the material properties.
$\Pi_E = \frac{1}{2} \int_{A} \mathbf{\epsilon}^T \mathbf{D} \mathbf{\epsilon} \, dA$

Substituting $\mathbf{\epsilon} = \mathbf{B} \mathbf{\delta}^e$:
$\Pi_E = \frac{1}{2} \int_{A} (\mathbf{B} \mathbf{\delta}^e)^T \mathbf{D} (\mathbf{B} \mathbf{\delta}^e) \, dA$
$\Pi_E = \frac{1}{2} (\mathbf{\delta}^e)^T \left( \int_{A} \mathbf{B}^T \mathbf{D} \mathbf{B} \, dA \right) \mathbf{\delta}^e$

Since $\mathbf{B}$ and $\mathbf{D}$ are constant for the CST element, the integration is straightforward:
$\mathbf{k}^e = \int_{A} \mathbf{B}^T \mathbf{D} \mathbf{B} \, dA = A (\mathbf{B}^T \mathbf{D} \mathbf{B})$

This integration results in a 6x6 stiffness matrix. The calculation of $\mathbf{B}^T \mathbf{D} \mathbf{B}$ involves matrix multiplication of the constant matrices.

**Element Stiffness Matrix for CST Element:**
The calculation is tedious but follows the formula $\mathbf{k}^e = A (\mathbf{B}^T \mathbf{D} \mathbf{B})$.
The resulting matrix $\mathbf{k}^e$ is symmetric and positive definite.

Let's illustrate the calculation for a single component, say $k_{11}$:
$k_{11} = \int_A (\mathbf{B}_{1 \cdot}) \mathbf{D} (\mathbf{B}_{1 \cdot})^T dA = A (\mathbf{B}_{1 \cdot}) \mathbf{D} (\mathbf{B}_{1 \cdot})^T$
where $\mathbf{B}_{1 \cdot}$ is the first row of the $\mathbf{B}$ matrix.
$\mathbf{B}_{1 \cdot} = \begin{bmatrix} b_1 & 0 & b_2 & 0 & b_3 & 0 \end{bmatrix} / (2A)$

Consider the first column of $\mathbf{k}^e$:
$\mathbf{k}_{11} = \frac{1}{4A} (b_1^2) (\frac{E}{1-\nu^2}) + \frac{1}{4A} (c_1^2) (\frac{E(1-\nu)}{2(1-\nu^2)}) = \frac{E}{4A(1-\nu^2)} (b_1^2 + \frac{1-\nu}{2} c_1^2)$
This is just one element of the 6x6 matrix.

#### 3.3.2.5 Potential Energy due to External Loads ($\Pi_P$)

External forces are applied at the nodes as point loads.
$\Pi_P = - \mathbf{\delta}^e \cdot \mathbf{F}^e$
where $\mathbf{F}^e = \begin{bmatrix} F_{x1} & F_{y1} & F_{x2} & F_{y2} & F_{x3} & F_{y3} \end{bmatrix}^T$ is the nodal force vector.

#### 3.3.2.6 Element Equation

$\mathbf{k}^e \mathbf{\delta}^e = \mathbf{F}^e$

### 3.3.3 Load Vector Derivation

The load vector $\mathbf{F}^e$ consists of the nodal forces corresponding to the DOFs.

#### 3.3.3.1 Point Loads

If point forces $F_{x1}, F_{y1}, F_{x2}, F_{y2}, F_{x3}, F_{y3}$ are applied at the nodes, they are directly placed in the load vector.

#### 3.3.3.2 Distributed Loads (Surface Loads)

If a distributed load $p_x(x,y)$ and $p_y(x,y)$ are applied over the surface of the element, the equivalent nodal forces are calculated by work equivalence:

$\mathbf{F}^e = \int_{A} \mathbf{N}^T(x,y) \mathbf{p}(x,y) \, dA$
where $\mathbf{p}(x,y) = \begin{bmatrix} p_x(x,y) \\ p_y(x,y) \end{bmatrix}$.

For constant surface loads, $p_x$ and $p_y$:
$\mathbf{F}^e = \begin{bmatrix} p_x A/3 \\ p_y A/3 \\ p_x A/3 \\ p_y A/3 \\ p_x A/3 \\ p_y A/3 \end{bmatrix}$

### 3.3.4 Example Calculation

Consider a CST element with nodes at:
Node 1: (0, 0)
Node 2: (1, 0)
Node 3: (0, 1)

Let the material be steel with $E = 200$ GPa and $\nu = 0.3$. Assume plane stress and thickness $t=1$ mm.

#### 1. Calculate the area $A$:
$A = \frac{1}{2} [x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2)]$
$A = \frac{1}{2} [0(0-1) + 1(1-0) + 0(0-0)] = \frac{1}{2} [0 + 1 + 0] = 0.5$

#### 2. Calculate the constants $a_i, b_i, c_i$:
For Node 1 (0,0): $x_1=0, y_1=0$
$a_1 = x_2 y_3 - x_3 y_2 = 1(1) - 0(0) = 1$
$b_1 = y_2 - y_3 = 0 - 1 = -1$
$c_1 = x_3 - x_2 = 0 - 1 = -1$

For Node 2 (1,0): $x_2=1, y_2=0$
$a_2 = x_3 y_1 - x_1 y_3 = 0(0) - 0(1) = 0$
$b_2 = y_3 - y_1 = 1 - 0 = 1$
$c_2 = x_1 - x_3 = 0 - 0 = 0$

For Node 3 (0,1): $x_3=0, y_3=1$
$a_3 = x_1 y_2 - x_2 y_1 = 0(0) - 1(0) = 0$
$b_3 = y_1 - y_2 = 0 - 0 = 0$
$c_3 = x_2 - x_1 = 1 - 0 = 1$

#### 3. Calculate the B matrix:
$\mathbf{B} = \frac{1}{2A} \begin{bmatrix}
b_1 & 0 & b_2 & 0 & b_3 & 0 \\
0 & c_1 & 0 & c_2 & 0 & c_3 \\
c_1 & b_1 & c_2 & b_2 & c_3 & b_3
\end{bmatrix}$
$\mathbf{B} = \frac{1}{2(0.5)} \begin{bmatrix}
-1 & 0 & 1 & 0 & 0 & 0 \\
0 & -1 & 0 & 0 & 0 & 1 \\
-1 & -1 & 0 & 1 & 1 & 0
\end{bmatrix}$
$\mathbf{B} = \begin{bmatrix}
-1 & 0 & 1 & 0 & 0 & 0 \\
0 & -1 & 0 & 0 & 0 & 1 \\
-1 & -1 & 0 & 1 & 1 & 0
\end{bmatrix}$

#### 4. Calculate the D matrix (Plane Stress):
$E = 200 \times 10^9 \, \text{Pa}$, $\nu = 0.3$
$\frac{E}{1-\nu^2} = \frac{200 \times 10^9}{1 - 0.3^2} = \frac{200 \times 10^9}{1 - 0.09} = \frac{200 \times 10^9}{0.91} \approx 219.78 \times 10^9$

$\mathbf{D} = 219.78 \times 10^9 \begin{bmatrix}
1 & 0.3 & 0 \\
0.3 & 1 & 0 \\
0 & 0 & 0.35
\end{bmatrix}$

#### 5. Calculate the Stiffness Matrix $\mathbf{k}^e = A (\mathbf{B}^T \mathbf{D} \mathbf{B})$:
This calculation is very extensive. Let's consider a simplified case of material properties and geometry if asked for a full calculation in an exam. The process involves:
a. Calculate $\mathbf{B}^T$:
$\mathbf{B}^T = \begin{bmatrix}
-1 & 0 & -1 \\
0 & -1 & -1 \\
1 & 0 & 0 \\
0 & 0 & 1 \\
0 & 0 & 1 \\
0 & 1 & 0
\end{bmatrix}$

b. Calculate $\mathbf{D} \mathbf{B}$: This will be a 3x6 matrix.
c. Calculate $\mathbf{B}^T (\mathbf{D} \mathbf{B})$: This will be a 6x6 matrix.
d. Multiply by the area $A = 0.5$.

Example of the first element calculation ($k_{11}$):
$k_{11} = A \sum_{i=1}^3 \sum_{j=1}^3 B_{1i} D_{ij} B_{j1}$
For the first column of $\mathbf{B}$ (which corresponds to $u_1$), $B_{11} = -1$, $B_{21} = 0$, $B_{31} = -1$.
The first column of $\mathbf{D}$ is $[1, 0.3, 0]^T$.

$k_{11} = 0.5 [ (-1)(1)(-1) + (0)(0.3)(0) + (-1)(0)(-1) ] \times (\frac{E}{1-\nu^2})$
$k_{11} = 0.5 [ 1 ] \times 219.78 \times 10^9 \approx 109.89 \times 10^9 \, \text{N/m}$

The full 6x6 matrix is quite large to compute manually.

---

## Practice Questions and Exercises

**Question 1 (1D Bar Element):**
A 1D bar element has length $L=2$ m, $E=210$ GPa, and $A=400$ mm$^2$.
a) Derive the stiffness matrix for this element.
b) If the element is subjected to a uniform distributed load of $50$ kN/m acting upwards along its length, calculate the equivalent nodal forces. Assume the bar is oriented horizontally, so the load is applied to $u$.

**Question 2 (1D Beam Element):**
A 1D beam element has length $L=3$ m, $E=200$ GPa, and $I=20 \times 10^{-6}$ m$^4$.
a) Derive the stiffness matrix for this element.
b) If a moment of $10$ kNm is applied at node 1, and a vertical force of $20$ kN is applied at node 2, what is the nodal force vector for this element?

**Question 3 (CST Element):**
Consider a CST element with nodes at:
Node 1: (0, 0)
Node 2: (2, 0)
Node 3: (1, 1)
Assume plane stress with $E=70$ GPa, $\nu=0.3$, and thickness $t=10$ mm.
a) Calculate the area of the element.
b) Determine the constants $a_i, b_i, c_i$ for each node.
c) Write down the $\mathbf{B}$ matrix for this element.
d) If a point force of $1000$ N acts in the x-direction at node 1, what is the corresponding component of the load vector?

---

## Answers to Practice Questions

**Answer 1:**
a)
$E = 210 \times 10^9 \, \text{Pa}$, $A = 400 \times 10^{-6} \, \text{m}^2$, $L=2$ m
$EA = (210 \times 10^9) \times (400 \times 10^{-6}) = 84 \times 10^6 \, \text{N}$
$\mathbf{k}^e = \frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} = \frac{84 \times 10^6}{2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} = 42 \times 10^6 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \, \text{N/m}$

b) Assuming horizontal orientation means loads affect axial displacement $u$. The question states load acts "upwards along its length", which might be confusing for a 1D bar. If it means axial load:
$q = 50 \, \text{kN/m} = 50 \times 10^3 \, \text{N/m}$
$\mathbf{F}^e = \begin{bmatrix} \frac{qL}{2} \\ \frac{qL}{2} \end{bmatrix} = \begin{bmatrix} \frac{(50 \times 10^3)(2)}{2} \\ \frac{(50 \times 10^3)(2)}{2} \end{bmatrix} = \begin{bmatrix} 50 \times 10^3 \\ 50 \times 10^3 \end{bmatrix} \, \text{N}$
(Note: The problem implies distributed load, which for a bar element is axial unless specified otherwise. If it implies transverse load, that would require a beam element formulation.)

**Answer 2:**
a)
$E = 200 \times 10^9 \, \text{Pa}$, $I = 20 \times 10^{-6} \, \text{m}^4$, $L=3$ m
$EI = (200 \times 10^9) \times (20 \times 10^{-6}) = 4 \times 10^6 \, \text{Nm}^2$
$\frac{EI}{L^3} = \frac{4 \times 10^6}{3^3} = \frac{4 \times 10^6}{27} \approx 148148 \, \text{N/m}$

$\mathbf{k}^e = \frac{EI}{L^3} \begin{bmatrix}
12 & 6L & -12 & 6L \\
6L & 4L^2 & -6L & 2L^2 \\
-12 & -6L & 12 & -6L \\
6L & 2L^2 & -6L & 4L^2
\end{bmatrix}$
$\mathbf{k}^e = 148148 \begin{bmatrix}
12 & 18 & -12 & 18 \\
18 & 36 & -18 & 18 \\
-12 & -18 & 12 & -18 \\
18 & 18 & -18 & 36
\end{bmatrix} \, \text{N/m, Nm}$

b) The load vector directly corresponds to the DOFs: $v_1, \theta_1, v_2, \theta_2$.
$V_1 = 20$ kN $= 20 \times 10^3$ N (vertical force at node 1)
$M_1 = 10$ kNm $= 10 \times 10^3$ Nm (moment at node 1)
$V_2 = 0$ (no vertical force at node 2)
$M_2 = 0$ (no moment at node 2)

$\mathbf{F}^e = \begin{bmatrix} 20 \times 10^3 \\ 10 \times 10^3 \\ 0 \\ 0 \end{bmatrix} \, \text{N, Nm}$

**Answer 3:**
a) Area $A$:
Node 1: (0, 0) -> $x_1=0, y_1=0$
Node 2: (2, 0) -> $x_2=2, y_2=0$
Node 3: (1, 1) -> $x_3=1, y_3=1$
$A = \frac{1}{2} [0(0-1) + 2(1-0) + 1(0-0)] = \frac{1}{2} [0 + 2 + 0] = 1$

b) Constants $a_i, b_i, c_i$:
Node 1 (0,0): $a_1 = 2(1) - 1(0) = 2$, $b_1 = 0 - 1 = -1$, $c_1 = 1 - 2 = -1$
Node 2 (2,0): $a_2 = 1(0) - 0(1) = 0$, $b_2 = 1 - 0 = 1$, $c_2 = 0 - 1 = -1$
Node 3 (1,1): $a_3 = 0(0) - 2(0) = 0$, $b_3 = 0 - 0 = 0$, $c_3 = 2 - 0 = 2$

c) $\mathbf{B}$ matrix:
$\mathbf{B} = \frac{1}{2A} \begin{bmatrix}
b_1 & 0 & b_2 & 0 & b_3 & 0 \\
0 & c_1 & 0 & c_2 & 0 & c_3 \\
c_1 & b_1 & c_2 & b_2 & c_3 & b_3
\end{bmatrix} = \frac{1}{2(1)} \begin{bmatrix}
-1 & 0 & 1 & 0 & 0 & 0 \\
0 & -1 & 0 & -1 & 0 & 2 \\
-1 & -1 & -1 & 1 & 2 & 0
\end{bmatrix}$
$\mathbf{B} = \begin{bmatrix}
-0.5 & 0 & 0.5 & 0 & 0 & 0 \\
0 & -0.5 & 0 & -0.5 & 0 & 1 \\
-0.5 & -0.5 & -0.5 & 0.5 & 1 & 0
\end{bmatrix}$

d) Load vector component for $F_{x1}$:
$F_{x1}$ corresponds to the first DOF. The contribution comes from the first row of $\mathbf{B}$ and the x-component of the load.
The load is $p_x = 1000$ N, $p_y = 0$.
For distributed loads, the force is $A p_x / 3$.
If it's a point load $P_{x1} = 1000$ N, then $F_{x1} = 1000$ N. The question states "point force", so it's directly the force.

$F_{x1} = 1000$ N. This is the first component of the load vector $\mathbf{F}^e$.

---

## Important Points to Remember

*   **Element Type Dictates DOFs and Shape Functions:** Bar elements have axial DOFs and linear shape functions. Beam elements have transverse displacement and rotation DOFs and cubic shape functions. CST elements have in-plane displacement DOFs and linear shape functions.
*   **Stiffness Matrix ($\mathbf{k}^e$):** Represents the element's stiffness and is derived from material properties ($E, I, A$) and geometry ($L$).
*   **Load Vector ($\mathbf{F}^e$):** Represents the equivalent nodal forces and moments due to external loads. Distributed loads are converted to nodal loads using work equivalence (integration with shape functions).
*   **Element Equation:** The fundamental equation for each element is $\mathbf{k}^e \mathbf{\delta}^e = \mathbf{F}^e$, where $\mathbf{\delta}^e$ is the vector of nodal displacements/rotations.
*   **CST Assumption:** The key assumption for CST is constant strain within the element, simplifying the $\mathbf{B}$ matrix and thus the $\mathbf{k}^e$ calculation.
*   **Assembly:** Once element matrices and vectors are formulated, they are assembled into global system matrices and vectors to solve the entire structure. (This is covered in the next module).
*   **Coordinate Systems:** Be mindful of element local coordinate systems versus global coordinate systems. Transformations might be needed for elements not aligned with global axes (especially for beams and truss elements in 2D/3D).
*   **Variational Principles:** Most formulations are based on the principle of minimum potential energy or the principle of virtual work.

---
