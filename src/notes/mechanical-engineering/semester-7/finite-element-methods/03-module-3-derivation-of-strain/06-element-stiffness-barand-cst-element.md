---
title: "Element stiffness-bar,and CST element"
subject: "FINITE ELEMENT METHODS"
module: "Module 3: Derivation of strain "
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446429f"
status: "completed"
scrapedAt: "2026-05-20T18:13:02.827Z"
---
# Finite Element Methods - Module 3: Derivation of Strain

## Topic: Element Stiffness - Bar and CST Element

This module focuses on deriving the stiffness matrices for fundamental finite elements, specifically the 1D bar element and the 2D Constant Strain Triangle (CST) element. Understanding these derivations is crucial for building the global stiffness matrix and solving structural mechanics problems using the Finite Element Method (FEM).

---

### Module 3: Learning Outcomes

Upon successful completion of this module, you will be able to:

*   **LO1:** Understand the fundamental concepts of strain and its relationship with displacements in continuum mechanics.
*   **LO2:** Derive the strain-displacement relationship for one-dimensional (bar) elements.
*   **LO3:** Derive the strain-displacement relationship for two-dimensional (CST) elements.
*   **LO4:** Formulate the element stiffness matrix for a 1D bar element.
*   **LO5:** Formulate the element stiffness matrix for a 2D CST element.
*   **LO6:** Relate the derived stiffness matrices to the governing equations and basic FEM procedures.

---

### Course Outcomes Alignment

*   **CO1 (K2):** Understand governing equations and basic FEM procedure. (Underpinning understanding of how strain relates to displacement, which is fundamental to the governing equations of elasticity).
*   **CO2 (K3):** Apply coordinate transformation and formulate shape functions. (While not the primary focus here, the derivation of strain inherently uses shape functions. Coordinate transformations will be relevant for more complex elements, but the basic concepts are introduced here).
*   **CO3 (K4):** Formulate shape functions and element strain displacement matrix. (This is the core of this topic – deriving the $[\mathbf{B}]$ matrix).
*   **CO4 (K5):** Evaluate element stress using energy method and study Galekin weight residual formulations. (The derived stiffness matrix is a precursor to stress calculation and is often derived using energy methods or weighted residuals).
*   **CO5 (K4):** Study the concept of iso parametric elements and analyze iso parametric formulations. (The CST element is a simple, non-isoparametric element, serving as a foundation for understanding isoparametric concepts later).

---

### 1. Introduction to Strain

**Definition:** Strain is a measure of deformation representing the displacement between nearby points in a continuous body. It is a tensor quantity that describes how the shape and size of a material change under stress.

**Key Concepts:**

*   **Normal Strain ($\epsilon$):** Change in length per unit original length in a particular direction.
*   **Shear Strain ($\gamma$):** Change in angle between two initially perpendicular lines.
*   **Infinitesimal Strain:** For small deformations, the strain components can be expressed in terms of partial derivatives of the displacement components.

**Strain-Displacement Relationship (General 2D Case):**

Consider a small displacement vector $ \mathbf{u} = [u, v]^T $, where $u$ and $v$ are displacements in the x and y directions, respectively. The strain tensor $\boldsymbol{\epsilon}$ is given by:

$ \boldsymbol{\epsilon} = \begin{bmatrix} \epsilon_x \\ \epsilon_y \\ \gamma_{xy} \end{bmatrix} $

where:
*   $ \epsilon_x = \frac{\partial u}{\partial x} $ (Normal strain in x-direction)
*   $ \epsilon_y = \frac{\partial v}{\partial y} $ (Normal strain in y-direction)
*   $ \gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x} $ (Shear strain)

---

### 2. Element Stiffness - Bar Element (1D)

**Description:** A bar element is a 1D element that can only experience axial deformation (stretching or compression) along its axis.

**Assumptions:**

*   The element is linear.
*   Deformations are small.
*   Stress is uniform along the cross-section.
*   Only axial forces are considered.

**Derivation:**

Let's consider a 1D bar element with two nodes, 1 and 2, at positions $x_1$ and $x_2$ respectively.
The displacement at any point $x$ within the element can be expressed using shape functions:

$ u(x) = N_1(x) u_1 + N_2(x) u_2 $

where $u(x)$ is the displacement at $x$, $u_1$ and $u_2$ are the nodal displacements, and $N_1(x)$ and $N_2(x)$ are the linear shape functions.

**Shape Functions for a 1D Bar Element:**

Using local coordinates $ \xi = \frac{x - x_1}{L} $, where $L = x_2 - x_1$ is the element length:

$ N_1(\xi) = \frac{1 - \xi}{2} $
$ N_2(\xi) = \frac{1 + \xi}{2} $

In terms of global coordinates $x$:

$ N_1(x) = \frac{x_2 - x}{L} $
$ N_2(x) = \frac{x - x_1}{L} $

**Strain-Displacement Relationship (\[B] Matrix):**

For a 1D bar element, there is only one strain component, the axial strain $\epsilon_x$:

$ \epsilon_x = \frac{du}{dx} $

Substituting the shape function interpolation for $u(x)$:

$ \frac{du}{dx} = \frac{d}{dx}(N_1(x) u_1 + N_2(x) u_2) $
$ \frac{du}{dx} = \left( \frac{dN_1}{dx} N_2 \right) \begin{bmatrix} u_1 \\ u_2 \end{bmatrix} $

Let's find the derivatives of the shape functions with respect to $x$:

$ \frac{dN_1}{dx} = \frac{d}{dx}\left(\frac{x_2 - x}{L}\right) = -\frac{1}{L} $
$ \frac{dN_2}{dx} = \frac{d}{dx}\left(\frac{x - x_1}{L}\right) = +\frac{1}{L} $

So, the strain can be written in matrix form:

$ \epsilon_x = \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix} \begin{bmatrix} u_1 \\ u_2 \end{bmatrix} $

The strain-displacement matrix $[\mathbf{B}]$ for the 1D bar element is:

$ [\mathbf{B}] = \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix} $

**(Reference: Reddy, Chapter 3; Cook, Chapter 4; Bhavikatti, Chapter 5)**

**Element Stiffness Matrix \[k]:**

The stiffness matrix relates nodal forces to nodal displacements: $ \{\mathbf{f}\} = [\mathbf{k}] \{\mathbf{u}\} $.
The element stiffness matrix is derived using the principle of minimum potential energy or the virtual work principle. For elastic materials with stress-strain relationship $ \sigma = E \epsilon $, where $E$ is the Young's modulus:

$ [\mathbf{k}] = \int_V [\mathbf{B}]^T [\mathbf{D}] [\mathbf{B}] dV $

For a 1D bar element with cross-sectional area $A$ and Young's modulus $E$, the material property matrix $[\mathbf{D}]$ is simply $E$. The volume element is $dV = A \, dx$.

$ [\mathbf{k}] = \int_{x_1}^{x_2} [\mathbf{B}]^T E [\mathbf{B}] A \, dx $

Substitute $[\mathbf{B}]$:

$ [\mathbf{k}] = \int_{0}^{L} \begin{bmatrix} -1/L \\ 1/L \end{bmatrix} E \begin{bmatrix} -1/L & 1/L \end{bmatrix} A \, dx $

$ [\mathbf{k}] = AE \int_{0}^{L} \begin{bmatrix} 1/L^2 & -1/L^2 \\ -1/L^2 & 1/L^2 \end{bmatrix} \, dx $

Integrate with respect to $x$:

$ [\mathbf{k}] = AE \begin{bmatrix} 1/L^2 & -1/L^2 \\ -1/L^2 & 1/L^2 \end{bmatrix} [x]_0^L $

$ [\mathbf{k}] = AE \begin{bmatrix} 1/L^2 & -1/L^2 \\ -1/L^2 & 1/L^2 \end{bmatrix} L $

$ [\mathbf{k}] = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} $

This is the stiffness matrix for a 1D bar element in its local coordinate system (along its axis). For analysis in a global coordinate system, a coordinate transformation matrix is required.

**(Reference: Reddy, Chapter 3; Cook, Chapter 4; Bhavikatti, Chapter 5; Fish & Belytschko, Chapter 3)**

---

### 3. Element Stiffness - Constant Strain Triangle (CST) Element (2D)

**Description:** The Constant Strain Triangle (CST) element is a 2D triangular element with three nodes, each having two degrees of freedom (displacements in x and y directions). It's a foundational element in 2D FEM for stress analysis.

**Assumptions:**

*   Linear displacement field within the element.
*   Strain is constant throughout the element (hence "Constant Strain").
*   Small deformations.

**Derivation:**

Consider a triangular element with nodes 1, 2, and 3 at coordinates $ (x_1, y_1) $, $ (x_2, y_2) $, and $ (x_3, y_3) $ respectively.
The nodal displacement vector is:

$ \{\mathbf{u}^e\} = \begin{bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \\ u_3 \\ v_3 \end{bmatrix} $

The displacement field within the element is interpolated using shape functions:

$ u(x, y) = N_1(x,y) u_1 + N_2(x,y) u_2 + N_3(x,y) u_3 = \sum_{i=1}^3 N_i u_i $
$ v(x, y) = N_1(x,y) v_1 + N_2(x,y) v_2 + N_3(x,y) v_3 = \sum_{i=1}^3 N_i v_i $

where $N_i(x,y)$ are the linear shape functions.

**Shape Functions for a CST Element:**

The linear shape functions for a triangular element are:

$ N_1(x,y) = \frac{1}{2A_e} (a_1 + b_1 x + c_1 y) $
$ N_2(x,y) = \frac{1}{2A_e} (a_2 + b_2 x + c_2 y) $
$ N_3(x,y) = \frac{1}{2A_e} (a_3 + b_3 x + c_3 y) $

where $A_e$ is the area of the triangular element. The coefficients are related to the nodal coordinates:

$ a_1 = x_2 y_3 - x_3 y_2 $, $ b_1 = y_2 - y_3 $, $ c_1 = x_3 - x_2 $
$ a_2 = x_3 y_1 - x_1 y_3 $, $ b_2 = y_3 - y_1 $, $ c_2 = x_1 - x_3 $
$ a_3 = x_1 y_2 - x_2 y_1 $, $ b_3 = y_1 - y_2 $, $ c_3 = x_2 - x_1 $

The area $A_e$ can be calculated as:

$ 2A_e = x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2) $
or $ 2A_e = \begin{vmatrix} 1 & x_1 & y_1 \\ 1 & x_2 & y_2 \\ 1 & x_3 & y_3 \end{vmatrix} $

Note that $b_i$ and $c_i$ terms are constants. This implies that the derivatives of shape functions are constant:

$ \frac{\partial N_i}{\partial x} = \frac{b_i}{2A_e} $
$ \frac{\partial N_i}{\partial y} = \frac{c_i}{2A_e} $

**Strain-Displacement Relationship (\[B] Matrix):**

The strain vector for a 2D plane stress/strain problem is:

$ \{\boldsymbol{\epsilon}\} = \begin{bmatrix} \epsilon_x \\ \epsilon_y \\ \gamma_{xy} \end{bmatrix} $

We can express this as $ \{\boldsymbol{\epsilon}\} = [\mathbf{B}] \{\mathbf{u}^e\} $. Let's expand the strain components using the interpolated displacements:

$ \epsilon_x = \frac{\partial u}{\partial x} = \sum_{i=1}^3 \frac{\partial N_i}{\partial x} u_i $
$ \epsilon_y = \frac{\partial v}{\partial y} = \sum_{i=1}^3 \frac{\partial N_i}{\partial y} v_i $
$ \gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x} = \sum_{i=1}^3 \left( \frac{\partial N_i}{\partial y} u_i + \frac{\partial N_i}{\partial x} v_i \right) $

Rearranging to match the nodal displacement vector $ \{\mathbf{u}^e\} $:

$ \epsilon_x = \sum_{i=1}^3 \frac{\partial N_i}{\partial x} u_i + 0 \cdot v_i $
$ \epsilon_y = \sum_{i=1}^3 0 \cdot u_i + \frac{\partial N_i}{\partial y} v_i $
$ \gamma_{xy} = \sum_{i=1}^3 \frac{\partial N_i}{\partial y} u_i + \frac{\partial N_i}{\partial x} v_i $

Now, we can construct the $[\mathbf{B}]$ matrix:

$ [\mathbf{B}] = \frac{1}{2A_e} \begin{bmatrix} b_1 & 0 & b_2 & 0 & b_3 & 0 \\ 0 & c_1 & 0 & c_2 & 0 & c_3 \\ c_1 & b_1 & c_2 & b_2 & c_3 & b_3 \end{bmatrix} $

Since $b_i$ and $c_i$ are constants, the strain components ($\epsilon_x, \epsilon_y, \gamma_{xy}$) are constant throughout the CST element.

**(Reference: Reddy, Chapter 4; Cook, Chapter 7; Bhavikatti, Chapter 9; Fish & Belytschko, Chapter 5)**

**Element Stiffness Matrix \[k]:**

For a 2D CST element under plane stress conditions, the material property matrix $[\mathbf{D}]$ is:

$ [\mathbf{D}] = \frac{E}{1-\nu^2} \begin{bmatrix} 1 & \nu & 0 \\ \nu & 1 & 0 \\ 0 & 0 & \frac{1-\nu}{2} \end{bmatrix} $

where $E$ is Young's modulus and $\nu$ is Poisson's ratio. For plane strain, the $[\mathbf{D}]$ matrix is slightly different:

$ [\mathbf{D}] = \frac{E}{(1+\nu)(1-2\nu)} \begin{bmatrix} 1-\nu & \nu & 0 \\ \nu & 1-\nu & 0 \\ 0 & 0 & \frac{1-2\nu}{2} \end{bmatrix} $

The element stiffness matrix is given by:

$ [\mathbf{k}] = \int_{A_e} [\mathbf{B}]^T [\mathbf{D}] [\mathbf{B}] \, dA $

Since $[\mathbf{B}]$ and $[\mathbf{D}]$ are constant for a CST element, the integration is straightforward:

$ [\mathbf{k}] = [\mathbf{B}]^T [\mathbf{D}] [\mathbf{B}] \int_{A_e} \, dA $
$ [\mathbf{k}] = [\mathbf{B}]^T [\mathbf{D}] [\mathbf{B}] A_e $

The resulting stiffness matrix $[\mathbf{k}]$ will be a $6 \times 6$ matrix because there are 6 degrees of freedom for a 3-node triangular element (2 DoFs per node). The calculation of this matrix involves matrix multiplication and is typically performed numerically.

**(Reference: Reddy, Chapter 4; Cook, Chapter 7; Bhavikatti, Chapter 9; Fish & Belytschko, Chapter 5)**

---

### Important Points to Remember

*   **Strain is a deformation measure.** It quantifies how much a material is stretched, compressed, or sheared.
*   **Strain-Displacement Matrix \[B]:** This matrix is the link between nodal displacements and strains within an element. Its derivation is fundamental to FEM.
*   **1D Bar Element:** Simple, only axial strain, $1 \times 2$ $[\mathbf{B}]$ matrix, $2 \times 2$ $[\mathbf{k}]$ matrix.
*   **CST Element:** 2D triangle, linear displacement assumption leads to constant strain within the element. $3 \times 6$ $[\mathbf{B}]$ matrix, $6 \times 6$ $[\mathbf{k}]$ matrix.
*   **Constant Strain:** A key characteristic of the CST element, which can lead to inaccuracies for problems with significant strain gradients.
*   **Plane Stress vs. Plane Strain:** The choice of $[\mathbf{D}]$ matrix depends on whether the problem is considered plane stress or plane strain.
*   **Stiffness Matrix [k]:** Represents the element's resistance to deformation. It is symmetric and positive semi-definite.

---

### Examples

**Example 1: 1D Bar Element Stiffness Matrix**

Consider a bar element of length $L = 100 \text{ mm}$, Young's modulus $E = 200 \text{ GPa} = 200 \times 10^3 \text{ N/mm}^2$, and cross-sectional area $A = 50 \text{ mm}^2$.

Calculate the element stiffness matrix $[\mathbf{k}]$.

**Solution:**
$ \frac{AE}{L} = \frac{50 \text{ mm}^2 \times 200 \times 10^3 \text{ N/mm}^2}{100 \text{ mm}} = 100 \times 10^3 \text{ N/mm} $

$ [\mathbf{k}] = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} = 100 \times 10^3 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \text{ N/mm} $

$ [\mathbf{k}] = \begin{bmatrix} 100 \times 10^3 & -100 \times 10^3 \\ -100 \times 10^3 & 100 \times 10^3 \end{bmatrix} \text{ N/mm} $

**Example 2: CST Element \[B] Matrix Calculation**

Consider a CST element with the following nodal coordinates:
Node 1: (0, 0)
Node 2: (10, 0)
Node 3: (0, 10)

Calculate the $[\mathbf{B}]$ matrix for this element. Assume plane stress and $E=200$ GPa, $\nu=0.3$.

**Solution:**

First, calculate the area $A_e$:
$ 2A_e = x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2) $
$ 2A_e = 0(0 - 10) + 10(10 - 0) + 0(0 - 0) = 100 $
$ A_e = 50 $

Now, calculate the coefficients $b_i$ and $c_i$:
$b_1 = y_2 - y_3 = 0 - 10 = -10$
$c_1 = x_3 - x_2 = 0 - 10 = -10$

$b_2 = y_3 - y_1 = 10 - 0 = 10$
$c_2 = x_1 - x_3 = 0 - 0 = 0$

$b_3 = y_1 - y_2 = 0 - 0 = 0$
$c_3 = x_2 - x_1 = 10 - 0 = 10$

Now, substitute these into the $[\mathbf{B}]$ matrix formula:

$ [\mathbf{B}] = \frac{1}{2A_e} \begin{bmatrix} b_1 & 0 & b_2 & 0 & b_3 & 0 \\ 0 & c_1 & 0 & c_2 & 0 & c_3 \\ c_1 & b_1 & c_2 & b_2 & c_3 & b_3 \end{bmatrix} $

$ [\mathbf{B}] = \frac{1}{100} \begin{bmatrix} -10 & 0 & 10 & 0 & 0 & 0 \\ 0 & -10 & 0 & 0 & 0 & 10 \\ -10 & -10 & 0 & 10 & 10 & 0 \end{bmatrix} $

$ [\mathbf{B}] = \begin{bmatrix} -0.1 & 0 & 0.1 & 0 & 0 & 0 \\ 0 & -0.1 & 0 & 0 & 0 & 0.1 \\ -0.1 & -0.1 & 0 & 0.1 & 0.1 & 0 \end{bmatrix} $

This is the strain-displacement matrix for the given CST element.

---

### Practice Questions / Exercises

**Question 1 (1D Bar Element):**
A steel bar element has a length of 2 meters, a Young's modulus of $E = 200 \text{ GPa}$, and a cross-sectional area of $A = 1000 \text{ mm}^2$. Calculate the element stiffness matrix.

**Answer 1:**
Convert units: $L = 2000 \text{ mm}$, $E = 200 \times 10^3 \text{ N/mm}^2$, $A = 1000 \text{ mm}^2$.
$ \frac{AE}{L} = \frac{1000 \text{ mm}^2 \times 200 \times 10^3 \text{ N/mm}^2}{2000 \text{ mm}} = 100 \times 10^3 \text{ N/mm} $
$ [\mathbf{k}] = 100 \times 10^3 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \text{ N/mm} $

**Question 2 (CST Element Shape Functions):**
For a CST element with nodes at P1(1, 2), P2(5, 3), and P3(3, 7), calculate the area and the coefficients ($b_1, c_1, b_2, c_2, b_3, c_3$).

**Answer 2:**
$x_1=1, y_1=2$; $x_2=5, y_2=3$; $x_3=3, y_3=7$

$ 2A_e = x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2) $
$ 2A_e = 1(3 - 7) + 5(7 - 2) + 3(2 - 3) = 1(-4) + 5(5) + 3(-1) = -4 + 25 - 3 = 18 $
$ A_e = 9 $

$b_1 = y_2 - y_3 = 3 - 7 = -4$
$c_1 = x_3 - x_2 = 3 - 5 = -2$

$b_2 = y_3 - y_1 = 7 - 2 = 5$
$c_2 = x_1 - x_3 = 1 - 3 = -2$

$b_3 = y_1 - y_2 = 2 - 3 = -1$
$c_3 = x_2 - x_1 = 5 - 1 = 4$

**Question 3 (CST Element \[B] Matrix):**
Using the results from Question 2, write down the $[\mathbf{B}]$ matrix for this CST element.

**Answer 3:**
$ [\mathbf{B}] = \frac{1}{2A_e} \begin{bmatrix} b_1 & 0 & b_2 & 0 & b_3 & 0 \\ 0 & c_1 & 0 & c_2 & 0 & c_3 \\ c_1 & b_1 & c_2 & b_2 & c_3 & b_3 \end{bmatrix} $
$ [\mathbf{B}] = \frac{1}{18} \begin{bmatrix} -4 & 0 & 5 & 0 & -1 & 0 \\ 0 & -2 & 0 & -2 & 0 & 4 \\ -2 & -4 & -2 & 5 & 4 & -1 \end{bmatrix} $

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### References Used

*   **Reddy, J. N. (2009).** *An Introduction to the Finite Element Method* (3rd ed.). McGrawHillEducation. (Chapter 3 for 1D, Chapter 4 for 2D)
*   **Cook, R. D. (2008).** *Concepts and Applications of Finite Element Analysis* (3rd ed.). Wiley. (Chapter 4 for 1D, Chapter 7 for 2D)
*   **Bhavikatti, S. S. (2008).** *Finite Element Analysis* (3rd ed.). New Age Publisher. (Chapter 5 for 1D, Chapter 9 for 2D)
*   **Fish, J., & Belytschko, T. (2007).** *A First Course in Finite Elements* (2nd ed.). John Wiley & Sons, Ltd. (Chapter 3 for 1D, Chapter 5 for 2D)

These notes cover the derivation of strain and the formulation of stiffness matrices for basic 1D bar and 2D CST elements, aligning with the learning outcomes and course outcomes specified.