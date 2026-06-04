---
title: "Iso parametric elements"
subject: "FINITE ELEMENT METHODS"
module: "Module 4: Strong and Weak form"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf480446385a"
status: "completed"
scrapedAt: "2026-05-20T18:04:09.682Z"
---
# FINITE ELEMENT METHODS - Module 4: Strong and Weak Form

## Topic: Isoparametric Elements

**Learning Outcomes:**

*   Understand the concept of isoparametric elements and their necessity in FEM.
*   Explain the process of coordinate transformation for isoparametric elements.
*   Formulate shape functions for isoparametric elements in both global and local coordinate systems.
*   Derive the Jacobian matrix and its determinant for isoparametric elements.
*   Understand how isoparametric elements are used in the formulation of stiffness matrices and load vectors.
*   Analyze the advantages and limitations of isoparametric elements.

---

### 1. Introduction to Isoparametric Elements

**CO1 (K2):** To understand the governing equations of various physical phenomena and basic procedure of FEM.
**CO5 (K4):** Study the concept of iso parametric elements and analyze iso parametric formulations.

**1.1 The Need for Isoparametric Elements:**

In the Finite Element Method (FEM), we discretize a continuous domain into smaller, simpler subdomains called elements. For simple geometries (e.g., rectangular or triangular elements in Cartesian coordinates), the formulation of shape functions and the integration process are relatively straightforward.

However, real-world engineering problems often involve complex geometries with curved boundaries. Representing these curved boundaries accurately using simple polynomial shape functions in global Cartesian coordinates can be challenging and may require a very large number of elements, leading to computational inefficiency.

Isoparametric elements address this limitation by using the **same interpolation functions (shape functions)** to define both the **geometry** of the element and the **variation of the unknown field variable** (e.g., displacement, temperature) within the element.

**Key Concept:**
*   **Isoparametric:** The term "iso" means "same," and "parametric" refers to using parameters. Therefore, isoparametric elements use the same parametric representation for both geometry and the field variable.

**1.2 Advantages of Isoparametric Elements:**

*   **Accurate Representation of Curved Boundaries:** Allows for the modeling of complex geometries with fewer elements compared to using only simple elements.
*   **Unified Formulation:** A single formulation can handle elements of various shapes and complexities (e.g., linear, quadratic, cubic).
*   **Simpler Integration:** By transforming the element geometry and field variable into a standard, simple local coordinate system (e.g., a square or a triangle), numerical integration (like Gaussian quadrature) becomes more manageable.
*   **Flexibility:** Can handle different types of elements (e.g., quadrilateral, triangular, hexahedral, tetrahedral) within the same analysis.

---

### 2. Coordinate Transformation

**CO2 (K3):** To apply the coordinate transformation and formulation of shape functions of various element.

To simplify the analysis and integration, we transform the global Cartesian coordinates $(x, y)$ of the element to a set of local or natural coordinates $(\xi, \eta)$. This transformation maps the complex physical element in the global system to a simple, standard parent element in the local system.

**2.1 Parent Element:**

The parent element is a standard element defined in the local coordinate system. Common parent elements include:
*   **For 2D:** A square with vertices at $(\pm 1, \pm 1)$ in the $(\xi, \eta)$ plane.
*   **For 1D:** A line segment with vertices at $\xi = \pm 1$.

**2.2 Mapping from Local to Global Coordinates:**

The relationship between the global coordinates $(x, y)$ and the local coordinates $(\xi, \eta)$ is established using **shape functions** ($N_i$). These are the same shape functions used for interpolating the field variable.

For a 2D element with $n$ nodes, the global coordinates of any point within the element can be expressed as:

$x = \sum_{i=1}^{n} N_i(\xi, \eta) x_i$
$y = \sum_{i=1}^{n} N_i(\xi, \eta) y_i$

where:
*   $x_i, y_i$ are the global Cartesian coordinates of the $i$-th node.
*   $N_i(\xi, \eta)$ are the shape functions defined in the local coordinate system.

**2.3 Shape Functions for Isoparametric Elements:**

The form of the shape functions depends on the type of isoparametric element (e.g., linear, quadratic). They are typically defined in the local coordinate system.

**Example: 4-Node Isoparametric Quadrilateral (Bilinear Quadrilateral)**

The parent element is a square in the $(\xi, \eta)$ plane with nodes at:
Node 1: $(-1, -1)$
Node 2: $(1, -1)$
Node 3: $(1, 1)$
Node 4: $(-1, 1)$

The shape functions for these nodes are:

$N_1(\xi, \eta) = \frac{1}{4}(1 - \xi)(1 - \eta)$
$N_2(\xi, \eta) = \frac{1}{4}(1 + \xi)(1 - \eta)$
$N_3(\xi, \eta) = \frac{1}{4}(1 + \xi)(1 + \eta)$
$N_4(\xi, \eta) = \frac{1}{4}(1 - \xi)(1 + \eta)$

**Important Point:**
*   The shape functions satisfy the Kronecker delta property: $N_i(\xi_j, \eta_j) = \delta_{ij}$ (where $\delta_{ij} = 1$ if $i=j$ and $0$ if $i \neq j$). This ensures that at node $j$, the interpolated value is equal to the nodal value.

**Example: 8-Node Isoparametric Quadrilateral (Biquadratic Quadrilateral)**

This element has 4 corner nodes and 4 mid-side nodes.

Corner nodes shape functions are similar to serendipity elements. Mid-side nodes have shape functions that are linear in one coordinate and zero at the ends of the other.

For example, shape function for node 1 (corner): $N_1 = \frac{1}{4}(1-\xi)(1-\eta)(-\xi-\eta-1)$ (This is for serendipity formulation, $\frac{1}{4}(1-\xi)(1-\eta)$ is simpler if only corner nodes are considered for geometry).

Let's consider the standard Lagrange polynomial formulation for clarity. For an 8-node quadrilateral, the shape functions for the corner nodes are:

$N_1(\xi, \eta) = \frac{1}{4}(1-\xi)(1-\eta)(-\xi-\eta-1)$ (Error in original thought, this is for 9 node. For 8 node serendipity, the corner shape functions are slightly different).

**Correct formulation for 8-node serendipity quadrilateral:**

Nodes are typically ordered as:
1, 2, 3, 4 (corners)
5, 6, 7, 8 (mid-sides)

Shape functions for corner nodes (e.g., node 1 at (-1, -1)):
$N_1 = \frac{1}{4}(1-\xi)(1-\eta)(-\xi-\eta-1)$  (No, this is for 9-node)

Let's use the common convention for isoparametric elements where the shape functions are defined such that they naturally incorporate the geometry.

**For a 4-node quadrilateral (bilinear):**
$N_1 = \frac{1}{4}(1-\xi)(1-\eta)$
$N_2 = \frac{1}{4}(1+\xi)(1-\eta)$
$N_3 = \frac{1}{4}(1+\xi)(1+\eta)$
$N_4 = \frac{1}{4}(1-\xi)(1+\eta)$

These functions are also used to define the geometry:
$x(\xi, \eta) = \sum_{i=1}^{4} N_i(\xi, \eta) x_i$
$y(\xi, \eta) = \sum_{i=1}^{4} N_i(\xi, \eta) y_i$

**For a 8-node quadrilateral (biquadratic):**
The element has 8 nodes (4 corners, 4 mid-sides).
Shape functions for corner nodes (e.g., node 1 at (-1,-1)):
$N_1 = \frac{1}{4}(1-\xi)(1-\eta)(-\xi-\eta-1)$ (This is the common form for 9-node Lagrange, not 8-node serendipity)

Let's clarify the shape function definition for isoparametric elements as per standard texts like Reddy and Cook.

**Reddy (3rd Ed., Chapter 3):**
For an $m$-node element in global coordinates $(x,y)$ and local coordinates $(\xi, \eta)$, the coordinates are related by:
$x = \sum_{i=1}^{m} N_i(\xi, \eta) x_i$
$y = \sum_{i=1}^{m} N_i(\xi, \eta) y_i$

The field variable $u$ is also interpolated using the same shape functions:
$u(\xi, \eta) = \sum_{i=1}^{m} N_i(\xi, \eta) u_i$

**Example: 8-node quadrilateral (serendipity)**
Nodes are typically ordered as:
Corners: 1, 2, 3, 4
Mid-sides: 5 (between 1&2), 6 (between 2&3), 7 (between 3&4), 8 (between 4&1)

Shape functions for corner nodes:
$N_1 = \frac{1}{4}(1-\xi)(1-\eta)(-\xi-\eta-1)$ (Still incorrect for 8-node).

Let's stick to a clearer definition of shape functions for common isoparametric elements.

**Standard Shape Functions for Isoparametric Elements:**

**4-Node Quadrilateral (Serendipity-like, often called Bilinear):**
Parent element square: $-1 \le \xi \le 1$, $-1 \le \eta \le 1$.
Nodes at corners: $(\pm 1, \pm 1)$.
$N_1 = \frac{1}{4}(1-\xi)(1-\eta)$
$N_2 = \frac{1}{4}(1+\xi)(1-\eta)$
$N_3 = \frac{1}{4}(1+\xi)(1+\eta)$
$N_4 = \frac{1}{4}(1-\xi)(1+\eta)$

**8-Node Quadrilateral (Serendipity):**
Nodes: 4 corners at $(\pm 1, \pm 1)$, 4 mid-sides at $(\pm 1, 0)$ or $(0, \pm 1)$.
Shape functions for corner nodes (e.g., node 1 at (-1,-1)):
$N_1 = \frac{1}{4}(1-\xi)(1-\eta)(-1-\xi-\eta)$ (This is the correct form for serendipity lagrangian)

Let's use the simpler linear mapping for the midpoint nodes for serendipity.

Shape functions for mid-side nodes (e.g., node 5 on $\xi=0, \eta=-1$):
$N_5 = \frac{1}{2}(1-\xi^2)(1-\eta)$
$N_6 = \frac{1}{2}(1+\xi)(1-\eta^2)$
$N_7 = \frac{1}{2}(1-\xi^2)(1+\eta)$
$N_8 = \frac{1}{2}(1-\xi)(1-\eta^2)$

**Important Note:** The choice of shape functions dictates the element's approximation capability and its geometric representation.

---

### 3. Jacobian Matrix and Determinant

**CO2 (K3):** To apply the coordinate transformation and formulation of shape functions of various element.

To perform integration in the local coordinate system, we need to relate the differential area/volume elements in both coordinate systems. This is achieved using the Jacobian matrix and its determinant.

**3.1 Definition of the Jacobian Matrix:**

The Jacobian matrix, denoted by $[J]$, relates the differentials of the global coordinates $(dx, dy)$ to the differentials of the local coordinates $(d\xi, d\eta)$. For a 2D element:

$[J] = \begin{bmatrix}
\frac{\partial x}{\partial \xi} & \frac{\partial x}{\partial \eta} \\
\frac{\partial y}{\partial \xi} & \frac{\partial y}{\partial \eta}
\end{bmatrix}$

The partial derivatives are computed using the shape functions and nodal coordinates:

$\frac{\partial x}{\partial \xi} = \sum_{i=1}^{n} \frac{\partial N_i}{\partial \xi} x_i$
$\frac{\partial x}{\partial \eta} = \sum_{i=1}^{n} \frac{\partial N_i}{\partial \eta} x_i$
$\frac{\partial y}{\partial \xi} = \sum_{i=1}^{n} \frac{\partial N_i}{\partial \xi} y_i$
$\frac{\partial y}{\partial \eta} = \sum_{i=1}^{n} \frac{\partial N_i}{\partial \eta} y_i$

**3.2 Determinant of the Jacobian ($J$):**

The determinant of the Jacobian matrix, $J$, is crucial for the change of variables in integration:

$J = \det([J]) = \frac{\partial x}{\partial \xi} \frac{\partial y}{\partial \eta} - \frac{\partial x}{\partial \eta} \frac{\partial y}{\partial \xi}$

**3.3 Relationship between Differential Elements:**

The differential area element in the global system ($dA = dx \, dy$) is related to the differential area element in the local system ($d\xi \, d\eta$) by the determinant of the Jacobian:

$dx \, dy = |J| \, d\xi \, d\eta$

**Important Point:**
*   The determinant $J$ must be non-zero for the transformation to be valid and for the element to be well-defined. A negative $J$ indicates an inversion of the mapping, which is physically impossible for a valid element.

**Cook (3rd Ed., Chapter 9):** Explains that the Jacobian matrix is essential for transforming integrations from the physical domain (global coordinates) to the standard domain (local coordinates) of the parent element.

**Example: 4-Node Isoparametric Quadrilateral**

Let's calculate the Jacobian for a quadrilateral with nodes at:
Node 1: $(0, 0)$
Node 2: $(2, 0)$
Node 3: $(2, 2)$
Node 4: $(0, 2)$

Shape functions are as given before.
Let's calculate the partial derivatives of shape functions with respect to $\xi$ and $\eta$:

$\frac{\partial N_1}{\partial \xi} = -\frac{1}{4}(1-\eta)$
$\frac{\partial N_1}{\partial \eta} = -\frac{1}{4}(1-\xi)$

$\frac{\partial N_2}{\partial \xi} = \frac{1}{4}(1-\eta)$
$\frac{\partial N_2}{\partial \eta} = -\frac{1}{4}(1+\xi)$

$\frac{\partial N_3}{\partial \xi} = \frac{1}{4}(1+\eta)$
$\frac{\partial N_3}{\partial \eta} = \frac{1}{4}(1+\xi)$

$\frac{\partial N_4}{\partial \xi} = -\frac{1}{4}(1+\eta)$
$\frac{\partial N_4}{\partial \eta} = \frac{1}{4}(1-\xi)$

Now, calculate the components of the Jacobian matrix at a specific point, say $(\xi, \eta) = (0, 0)$ (the center of the parent square):

$\frac{\partial x}{\partial \xi} = \sum_{i=1}^{4} \frac{\partial N_i}{\partial \xi} x_i = \frac{\partial N_1}{\partial \xi}x_1 + \frac{\partial N_2}{\partial \xi}x_2 + \frac{\partial N_3}{\partial \xi}x_3 + \frac{\partial N_4}{\partial \xi}x_4$
At $(\xi, \eta) = (0, 0)$: $\frac{\partial N_1}{\partial \xi} = -\frac{1}{4}$, $\frac{\partial N_2}{\partial \xi} = \frac{1}{4}$, $\frac{\partial N_3}{\partial \xi} = \frac{1}{4}$, $\frac{\partial N_4}{\partial \xi} = -\frac{1}{4}$
$\frac{\partial x}{\partial \xi} |_{0,0} = (-\frac{1}{4})(0) + (\frac{1}{4})(2) + (\frac{1}{4})(2) + (-\frac{1}{4})(0) = 1 + 1 = 2$

$\frac{\partial y}{\partial \xi} = \sum_{i=1}^{4} \frac{\partial N_i}{\partial \xi} y_i$
At $(\xi, \eta) = (0, 0)$:
$\frac{\partial y}{\partial \xi} |_{0,0} = (-\frac{1}{4})(0) + (\frac{1}{4})(0) + (\frac{1}{4})(2) + (-\frac{1}{4})(2) = 0 + 0 = 0$

$\frac{\partial x}{\partial \eta} = \sum_{i=1}^{4} \frac{\partial N_i}{\partial \eta} x_i$
At $(\xi, \eta) = (0, 0)$: $\frac{\partial N_1}{\partial \eta} = -\frac{1}{4}$, $\frac{\partial N_2}{\partial \eta} = -\frac{1}{4}$, $\frac{\partial N_3}{\partial \eta} = \frac{1}{4}$, $\frac{\partial N_4}{\partial \eta} = \frac{1}{4}$
$\frac{\partial x}{\partial \eta} |_{0,0} = (-\frac{1}{4})(0) + (-\frac{1}{4})(2) + (\frac{1}{4})(2) + (\frac{1}{4})(0) = 0 - 1 + 1 + 0 = 0$

$\frac{\partial y}{\partial \eta} = \sum_{i=1}^{4} \frac{\partial N_i}{\partial \eta} y_i$
At $(\xi, \eta) = (0, 0)$:
$\frac{\partial y}{\partial \eta} |_{0,0} = (-\frac{1}{4})(0) + (-\frac{1}{4})(0) + (\frac{1}{4})(2) + (\frac{1}{4})(2) = 0 + 0 + 1 + 1 = 2$

So, at $(\xi, \eta) = (0, 0)$:
$[J] = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$
$J = \det([J]) = (2)(2) - (0)(0) = 4$

For a rectangular element with sides parallel to axes, the Jacobian is constant. For a general quadrilateral or a higher-order element, $J$ will vary within the element.

---

### 4. Formulation of Element Matrices

**CO3 (K4):** Formulate shape functions and element strain displacement matrix of various element.
**CO5 (K4):** Study the concept of iso parametric elements and analyze iso parametric formulations.

The core of FEM involves assembling element stiffness matrices $[k]_e$ and load vectors $\{f\}_e$. Isoparametric elements allow us to compute these matrices in the local coordinate system using numerical integration.

**4.1 Element Strain-Displacement Matrix $[B]_e$:**

The strain $\epsilon$ is related to the displacement gradient. For a 2D problem, the strain vector is $\boldsymbol{\epsilon} = \{\epsilon_x, \epsilon_y, \gamma_{xy}\}^T$.
The displacement $u$ (in x-direction) and $v$ (in y-direction) are interpolated using the same shape functions:

$u(\xi, \eta) = \sum_{i=1}^{n} N_i(\xi, \eta) u_i$
$v(\xi, \eta) = \sum_{i=1}^{n} N_i(\xi, \eta) v_i$

The nodal displacement vector for the element is $\{\delta\}_e = \{u_1, v_1, u_2, v_2, \ldots, u_n, v_n\}^T$.

The strains are given by:
$\epsilon_x = \frac{\partial u}{\partial x}$, $\epsilon_y = \frac{\partial v}{\partial y}$, $\gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}$

Using the chain rule, we can express these derivatives in terms of local coordinates:

$\frac{\partial}{\partial x} = \frac{\partial}{\partial \xi} \frac{\partial \xi}{\partial x} + \frac{\partial}{\partial \eta} \frac{\partial \eta}{\partial x}$
$\frac{\partial}{\partial y} = \frac{\partial}{\partial \xi} \frac{\partial \xi}{\partial y} + \frac{\partial}{\partial \eta} \frac{\partial \eta}{\partial y}$

The inverse of the Jacobian matrix, $[J]^{-1}$, relates the local derivatives to the global derivatives:

$[J]^{-1} = \begin{bmatrix}
\frac{\partial \xi}{\partial x} & \frac{\partial \xi}{\partial y} \\
\frac{\partial \eta}{\partial x} & \frac{\partial \eta}{\partial y}
\end{bmatrix} = \frac{1}{J} \begin{bmatrix}
\frac{\partial y}{\partial \eta} & -\frac{\partial x}{\partial \eta} \\
-\frac{\partial y}{\partial \xi} & \frac{\partial x}{\partial \xi}
\end{bmatrix}$

So,
$\frac{\partial}{\partial x} = \frac{\partial \xi}{\partial x} \frac{\partial}{\partial \xi} + \frac{\partial \eta}{\partial x} \frac{\partial}{\partial \eta}$
$\frac{\partial}{\partial y} = \frac{\partial \xi}{\partial y} \frac{\partial}{\partial \xi} + \frac{\partial \eta}{\partial y} \frac{\partial}{\partial \eta}$

Now, consider the derivatives of the displacement components:
$\frac{\partial u}{\partial x} = \frac{\partial}{\partial x} \left( \sum_{i=1}^{n} N_i u_i \right) = \sum_{i=1}^{n} \left( \frac{\partial N_i}{\partial x} u_i \right) = \sum_{i=1}^{n} \left( (\frac{\partial N_i}{\partial \xi}\frac{\partial \xi}{\partial x} + \frac{\partial N_i}{\partial \eta}\frac{\partial \eta}{\partial x}) u_i \right)$

This can be written in matrix form.
$\{\epsilon\}_e = [B]_e \{\delta\}_e$

The $[B]_e$ matrix contains derivatives of shape functions. For example, the first row of $[B]_e$ (for $\epsilon_x$) will involve $\frac{\partial N_i}{\partial x}$ for all $i$.

$\frac{\partial N_i}{\partial x} = \frac{\partial N_i}{\partial \xi} \frac{\partial \xi}{\partial x} + \frac{\partial N_i}{\partial \eta} \frac{\partial \eta}{\partial x}$
$\frac{\partial N_i}{\partial y} = \frac{\partial N_i}{\partial \xi} \frac{\partial \xi}{\partial y} + \frac{\partial N_i}{\partial \eta} \frac{\partial \eta}{\partial y}$

The strain vector components are:
$\epsilon_x = \sum_{i=1}^{n} \frac{\partial N_i}{\partial x} u_i$
$\epsilon_y = \sum_{i=1}^{n} \frac{\partial N_i}{\partial y} v_i$
$\gamma_{xy} = \sum_{i=1}^{n} (\frac{\partial N_i}{\partial y} u_i + \frac{\partial N_i}{\partial x} v_i)$

Arranging this into $\{\epsilon\}_e = [B]_e \{\delta\}_e$:

$[B]_e = \begin{bmatrix}
\frac{\partial N_1}{\partial x} & 0 & \frac{\partial N_2}{\partial x} & 0 & \cdots & \frac{\partial N_n}{\partial x} & 0 \\
0 & \frac{\partial N_1}{\partial y} & 0 & \frac{\partial N_2}{\partial y} & \cdots & 0 & \frac{\partial N_n}{\partial y} \\
\frac{\partial N_1}{\partial y} & \frac{\partial N_1}{\partial x} & \frac{\partial N_2}{\partial y} & \frac{\partial N_2}{\partial x} & \cdots & \frac{\partial N_n}{\partial y} & \frac{\partial N_n}{\partial x}
\end{bmatrix}$

**CO3 (K4):** Formulate shape functions and element strain displacement matrix of various element.
The formulation of $[B]_e$ is a direct consequence of the chosen shape functions $N_i$ and the coordinate transformation via the Jacobian.

**4.2 Element Stiffness Matrix $[k]_e$:**

The element stiffness matrix is computed using the strain-displacement matrix $[B]_e$, the material constitutive matrix $[D]$, and integrating over the element volume (or area in 2D).

$[k]_e = \int_{V_e} [B]_e^T [D] [B]_e \, dV$

In 2D, $dV = dx \, dy = J \, d\xi \, d\eta$.
So, the integration is performed in the local coordinate system:

$[k]_e = \int_{-1}^{1} \int_{-1}^{1} [B]_e(\xi, \eta)^T [D] [B]_e(\xi, \eta) J(\xi, \eta) \, d\xi \, d\eta$

**Important Point:**
*   Because $[B]_e$ and $J$ are generally functions of $\xi$ and $\eta$, the integral is usually computed using **numerical integration**, most commonly **Gaussian Quadrature**.

**4.3 Element Load Vector $\{f\}_e$:**

The element load vector $\{f\}_e$ accounts for external forces (e.g., body forces, surface forces).

*   **Body Forces (e.g., gravity):** $\{f\}_e^{body} = \int_{V_e} [N]_e^T \{b\} \, dV = \int_{-1}^{1} \int_{-1}^{1} [N]_e^T \{b\} J \, d\xi \, d\eta$
    where $\{b\}$ is the vector of body force per unit volume.
*   **Surface Forces (e.g., pressure on an edge):** For a surface force $\{t\}$ acting on a boundary edge with length $ds$ in the global system, the corresponding term in the local system is $\frac{1}{2} \{N\}_e^T \{t\} ds$. The integral is performed along the edge in the local coordinate system.

**Reddy (3rd Ed., Chapter 5):** Provides detailed derivations for the formation of $[B]$ and $[k]$ matrices for various isoparametric elements like 4-node quadrilateral and 8-node quadrilateral.

---

### 5. Gaussian Quadrature

**CO4 (K5):** Evaluate element stress using energy method and study Galekin weight residual formulations.
**CO5 (K4):** Study the concept of iso parametric elements and analyze iso parametric formulations.

As mentioned, the integrals for stiffness matrices and load vectors are often not analytically solvable for isoparametric elements. Gaussian quadrature is a numerical technique for approximating definite integrals.

**5.1 The Concept:**

Gaussian quadrature approximates an integral of a function $f(x)$ over an interval $[-1, 1]$ as a weighted sum of function evaluations at specific points (Gauss points):

$\int_{-1}^{1} f(x) \, dx \approx \sum_{k=1}^{m} w_k f(x_k)$

where:
*   $w_k$ are the **weights**.
*   $x_k$ are the **Gauss points** (abscissas).

The key advantage is that for a polynomial of degree $2m-1$, $m$ Gauss points can integrate it exactly. For 2D, a similar formula is used:

$\int_{-1}^{1} \int_{-1}^{1} f(\xi, \eta) \, d\xi \, d\eta \approx \sum_{k=1}^{m} \sum_{l=1}^{m} w_k w_l f(\xi_k, \eta_l)$

**5.2 Common Integration Schemes:**

*   **2-Point Gaussian Quadrature (1D):**
    *   Gauss points: $\xi_1 = -1/\sqrt{3}$, $\xi_2 = 1/\sqrt{3}$
    *   Weights: $w_1 = 1$, $w_2 = 1$
    This scheme can exactly integrate polynomials up to degree 3.

*   **2x2 Gaussian Quadrature (2D):**
    *   Gauss points: $(\pm 1/\sqrt{3}, \pm 1/\sqrt{3})$ (4 points)
    *   Weights: $w_1 = 1, w_2 = 1$ for both $\xi$ and $\eta$.
    This scheme can exactly integrate polynomials up to degree 3 in each variable.

*   **3-Point Gaussian Quadrature (1D):**
    *   Gauss points: $\xi_1 = -\sqrt{3/5}$, $\xi_2 = 0$, $\xi_3 = \sqrt{3/5}$
    *   Weights: $w_1 = 5/9$, $w_2 = 8/9$, $w_3 = 5/9$
    This scheme can exactly integrate polynomials up to degree 5.

**5.3 Application to Isoparametric Elements:**

The integral for the stiffness matrix becomes:

$[k]_e \approx \sum_{k=1}^{m} \sum_{l=1}^{m} [B]_e(\xi_k, \eta_l)^T [D] [B]_e(\xi_k, \eta_l) J(\xi_k, \eta_l) w_k w_l$

The number of Gauss points ($m$) needed depends on the polynomial order of the shape functions and the $[D]$ matrix. For linear strain elements, 2x2 Gaussian quadrature is often sufficient. For quadratic elements, higher-order quadrature might be needed for exact integration of polynomial terms.

**Bhavikatti (3rd Ed., Chapter 10):** Details the application of Gaussian quadrature for evaluating stiffness matrices of various isoparametric elements.

---

### 6. Evaluating Stresses and Strains

**CO4 (K5):** Evaluate element stress using energy method and study Galekin weight residual formulations.
**CO5 (K4):** Study the concept of iso parametric elements and analyze iso parametric formulations.

Once the nodal displacements $\{\delta\}_e$ for an element are known (after solving the global system of equations), strains and stresses can be computed at any point within the element using the $[B]_e$ matrix.

$\{\epsilon\}_e = [B]_e (\xi, \eta) \{\delta\}_e$
$\{\sigma\}_e = [D] \{\epsilon\}_e = [D] [B]_e (\xi, \eta) \{\delta\}_e$

**Important Points:**
*   Stresses and strains are generally not constant within an element, especially for higher-order elements or elements with curved sides.
*   Evaluation is typically done at Gauss points, element corners, or element centroids. Evaluating at Gauss points often gives more accurate results.

**Energy Method Connection (CO4):**
While not directly calculating stress via energy method (like Castigliano's theorem), the formulation of stiffness matrices relies on minimizing the potential energy (or using variational principles like principle of minimum potential energy), which is rooted in energy concepts. The stiffness matrix $[k]_e$ is derived from the strain energy density.

**Galerkin Method Connection (CO4):**
The FEM formulation is a direct application of the Galerkin method (a weighted residual method). The shape functions $N_i$ are used as weight functions to minimize the residual of the governing differential equation. The process of deriving the stiffness matrix by integrating $[B]^T [D] [B]$ is precisely the Galerkin procedure applied to the weak form.

---

### 7. Types of Isoparametric Elements

**CO5 (K4):** Study the concept of iso parametric elements and analyze iso parametric formulations.

The concept of isoparametric formulation can be applied to elements of different polynomial orders and dimensions.

*   **Subparametric Elements:** The geometry is interpolated using lower-order shape functions than the field variable. This is generally not preferred.
*   **Superparametric Elements:** The geometry is interpolated using higher-order shape functions than the field variable. This can be useful for very accurate geometric representation but might require more complex interpolation for the field variable.
*   **Isoparametric Elements:** Same order shape functions for both geometry and field variable. This is the most common and practical approach.

**Common Isoparametric Elements:**

*   **1D:**
    *   **Line element (2-node):** Linear interpolation for both geometry and field variable.
    *   **Line element (3-node):** Quadratic interpolation for both geometry and field variable.
*   **2D:**
    *   **Quadrilateral (4-node, bilinear):** Linear interpolation.
    *   **Quadrilateral (8-node, serendipity):** Quadratic interpolation.
    *   **Quadrilateral (9-node, Lagrange):** Quadratic interpolation.
    *   **Triangle (3-node, linear):** Linear interpolation.
    *   **Triangle (6-node, quadratic):** Quadratic interpolation.
*   **3D:**
    *   **Hexahedron (8-node, trilinear):** Linear interpolation.
    *   **Hexahedron (20-node, biquadratic/triquadratic):** Quadratic interpolation.
    *   **Tetrahedron (4-node, linear):** Linear interpolation.
    *   **Tetrahedron (10-node, quadratic):** Quadratic interpolation.

**Segerlind (2nd Ed., Chapter 8):** Discusses the advantages of using isoparametric elements, particularly for handling curved boundaries and for unifying the element formulation. He emphasizes the role of the Jacobian for 2D and 3D elements.

**Fish & Belytschko (2nd Ed., Chapter 4):** Provides a thorough treatment of mapping and coordinate transformations, including the Jacobian, for isoparametric elements in structural mechanics. They illustrate the formulation for 2D and 3D elements.

---

### 8. Practice Questions

**Question 1 (CO2, CO5):**
Consider a 4-node isoparametric quadrilateral element with nodes at $P_1(0,0)$, $P_2(2,0)$, $P_3(2,2)$, and $P_4(0,2)$.
Calculate the Jacobian matrix and its determinant at $\xi = 0.5$ and $\eta = 0.5$.

**Answer 1:**
Shape functions:
$N_1 = \frac{1}{4}(1-\xi)(1-\eta)$
$N_2 = \frac{1}{4}(1+\xi)(1-\eta)$
$N_3 = \frac{1}{4}(1+\xi)(1+\eta)$
$N_4 = \frac{1}{4}(1-\xi)(1+\eta)$

Partial derivatives of shape functions:
$\frac{\partial N_1}{\partial \xi} = -\frac{1}{4}(1-\eta)$, $\frac{\partial N_1}{\partial \eta} = -\frac{1}{4}(1-\xi)$
$\frac{\partial N_2}{\partial \xi} = \frac{1}{4}(1-\eta)$, $\frac{\partial N_2}{\partial \eta} = -\frac{1}{4}(1+\xi)$
$\frac{\partial N_3}{\partial \xi} = \frac{1}{4}(1+\eta)$, $\frac{\partial N_3}{\partial \eta} = \frac{1}{4}(1+\xi)$
$\frac{\partial N_4}{\partial \xi} = -\frac{1}{4}(1+\eta)$, $\frac{\partial N_4}{\partial \eta} = \frac{1}{4}(1-\xi)$

Nodal coordinates: $x_1=0, y_1=0$; $x_2=2, y_2=0$; $x_3=2, y_3=2$; $x_4=0, y_4=2$.

At $\xi = 0.5, \eta = 0.5$:
$\frac{\partial N_1}{\partial \xi} = -\frac{1}{4}(0.5) = -0.125$
$\frac{\partial N_1}{\partial \eta} = -\frac{1}{4}(0.5) = -0.125$

$\frac{\partial N_2}{\partial \xi} = \frac{1}{4}(0.5) = 0.125$
$\frac{\partial N_2}{\partial \eta} = -\frac{1}{4}(1.5) = -0.375$

$\frac{\partial N_3}{\partial \xi} = \frac{1}{4}(1.5) = 0.375$
$\frac{\partial N_3}{\partial \eta} = \frac{1}{4}(1.5) = 0.375$

$\frac{\partial N_4}{\partial \xi} = -\frac{1}{4}(1.5) = -0.375$
$\frac{\partial N_4}{\partial \eta} = \frac{1}{4}(0.5) = 0.125$

Jacobian components:
$\frac{\partial x}{\partial \xi} = (-0.125)(0) + (0.125)(2) + (0.375)(2) + (-0.375)(0) = 0 + 0.25 + 0.75 + 0 = 1$
$\frac{\partial x}{\partial \eta} = (-0.125)(0) + (-0.375)(0) + (0.375)(2) + (0.125)(2) = 0 + 0 + 0.75 + 0.25 = 1$
$\frac{\partial y}{\partial \xi} = (-0.125)(0) + (-0.375)(0) + (0.375)(2) + (0.125)(2) = 0 + 0 + 0.75 + 0.25 = 1$
$\frac{\partial y}{\partial \eta} = (-0.125)(0) + (-0.375)(0) + (0.375)(2) + (0.125)(2) = 0 + 0 + 0.75 + 0.25 = 1$

$[J] = \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}$
$J = \det([J]) = (1)(1) - (1)(1) = 0$

**Wait! Something is wrong.** Let's recheck the calculation.
The given element is a square with sides parallel to axes.
$x(\xi, \eta) = N_1 x_1 + N_2 x_2 + N_3 x_3 + N_4 x_4$
$x(\xi, \eta) = \frac{1}{4}(1-\xi)(1-\eta)(0) + \frac{1}{4}(1+\xi)(1-\eta)(2) + \frac{1}{4}(1+\xi)(1+\eta)(2) + \frac{1}{4}(1-\xi)(1+\eta)(0)$
$x(\xi, \eta) = \frac{1}{2}(1+\xi)(1-\eta) + \frac{1}{2}(1+\xi)(1+\eta)$
$x(\xi, \eta) = \frac{1}{2}(1+\xi) [(1-\eta) + (1+\eta)] = \frac{1}{2}(1+\xi)(2) = 1+\xi$

$y(\xi, \eta) = N_1 y_1 + N_2 y_2 + N_3 y_3 + N_4 y_4$
$y(\xi, \eta) = \frac{1}{4}(1-\xi)(1-\eta)(0) + \frac{1}{4}(1+\xi)(1-\eta)(0) + \frac{1}{4}(1+\xi)(1+\eta)(2) + \frac{1}{4}(1-\xi)(1+\eta)(2)$
$y(\xi, \eta) = \frac{1}{2}(1+\xi)(1+\eta) + \frac{1}{2}(1-\xi)(1+\eta)$
$y(\xi, \eta) = \frac{1}{2}(1+\eta) [(1+\xi) + (1-\xi)] = \frac{1}{2}(1+\eta)(2) = 1+\eta$

Now, calculate derivatives of $x=1+\xi$ and $y=1+\eta$:
$\frac{\partial x}{\partial \xi} = 1$, $\frac{\partial x}{\partial \eta} = 0$
$\frac{\partial y}{\partial \xi} = 0$, $\frac{\partial y}{\partial \eta} = 1$

$[J] = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$
$J = \det([J]) = 1$

The Jacobian is constant for a rectangle. This makes sense, as the mapping is linear. My initial calculation of partial derivatives of shape functions was correct, but summing them up with nodal coordinates was where the error occurred. The simpler analytical form for $x$ and $y$ is preferred.

**Correct Answer:**
$[J] = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$
$J = 1$

**Question 2 (CO3, CO5):**
For a 4-node isoparametric quadrilateral element, derive the expression for the $[B]_e$ matrix in terms of shape function derivatives with respect to $\xi$ and $\eta$ and the Jacobian matrix inverse.

**Answer 2:**
The strain vector is $\boldsymbol{\epsilon} = \{\epsilon_x, \epsilon_y, \gamma_{xy}\}^T$.
The displacement vector is $\{\delta\}_e = \{u_1, v_1, u_2, v_2, u_3, v_3, u_4, v_4\}^T$.
We need to express strains in terms of nodal displacements: $\boldsymbol{\epsilon} = [B]_e \{\delta\}_e$.

The relationship between global and local derivatives is:
$\begin{bmatrix} \frac{\partial}{\partial x} \\ \frac{\partial}{\partial y} \end{bmatrix} = [J]^{-1} \begin{bmatrix} \frac{\partial}{\partial \xi} \\ \frac{\partial}{\partial \eta} \end{bmatrix}$

where $[J]^{-1} = \frac{1}{J} \begin{bmatrix} \frac{\partial y}{\partial \eta} & -\frac{\partial x}{\partial \eta} \\ -\frac{\partial y}{\partial \xi} & \frac{\partial x}{\partial \xi} \end{bmatrix}$.

Let $\frac{\partial N_i}{\partial \xi} = N_{i,\xi}$ and $\frac{\partial N_i}{\partial \eta} = N_{i,\eta}$.
Then, $\frac{\partial N_i}{\partial x} = N_{i,\xi} \frac{\partial \xi}{\partial x} + N_{i,\eta} \frac{\partial \eta}{\partial x}$
And $\frac{\partial N_i}{\partial y} = N_{i,\xi} \frac{\partial \xi}{\partial y} + N_{i,\eta} \frac{\partial \eta}{\partial y}$

The $[B]_e$ matrix for a 2D quadrilateral element is structured as:
$[B]_e = \begin{bmatrix}
\frac{\partial N_1}{\partial x} & 0 & \frac{\partial N_2}{\partial x} & 0 & \cdots & \frac{\partial N_4}{\partial x} & 0 \\
0 & \frac{\partial N_1}{\partial y} & 0 & \frac{\partial N_2}{\partial y} & \cdots & 0 & \frac{\partial N_4}{\partial y} \\
\frac{\partial N_1}{\partial y} & \frac{\partial N_1}{\partial x} & \frac{\partial N_2}{\partial y} & \frac{\partial N_2}{\partial x} & \cdots & \frac{\partial N_4}{\partial y} & \frac{\partial N_4}{\partial x}
\end{bmatrix}$

Substituting the expressions for $\frac{\partial N_i}{\partial x}$ and $\frac{\partial N_i}{\partial y}$:

$[B]_e = \begin{bmatrix}
(N_{1,\xi} \frac{\partial \xi}{\partial x} + N_{1,\eta} \frac{\partial \eta}{\partial x}) & 0 & \cdots \\
0 & (N_{1,\xi} \frac{\partial \xi}{\partial y} + N_{1,\eta} \frac{\partial \eta}{\partial y}) & \cdots \\
(N_{1,\xi} \frac{\partial \xi}{\partial y} + N_{1,\eta} \frac{\partial \eta}{\partial y}) & (N_{1,\xi} \frac{\partial \xi}{\partial x} + N_{1,\eta} \frac{\partial \eta}{\partial x}) & \cdots
\end{bmatrix}$

This can be written more compactly by grouping terms for each node $i$:
Let $\mathbf{b}_{i} = \begin{bmatrix} \frac{\partial N_i}{\partial x} \\ \frac{\partial N_i}{\partial y} \end{bmatrix}$ and $\{\delta_i\} = \{u_i, v_i\}^T$.
Then $\{\epsilon\}_e = \sum_{i=1}^4 \begin{bmatrix} \frac{\partial N_i}{\partial x} & 0 \\ 0 & \frac{\partial N_i}{\partial y} \\ \frac{\partial N_i}{\partial y} & \frac{\partial N_i}{\partial x} \end{bmatrix} \{\delta_i\} = \sum_{i=1}^4 [\hat{B}_i] \{\delta_i\}$

$[B]_e = \begin{bmatrix}
\hat{B}_1 & \hat{B}_2 & \hat{B}_3 & \hat{B}_4
\end{bmatrix}$
where $\hat{B}_i = \begin{bmatrix}
\frac{\partial N_i}{\partial x} & 0 \\
0 & \frac{\partial N_i}{\partial y} \\
\frac{\partial N_i}{\partial y} & \frac{\partial N_i}{\partial x}
\end{bmatrix}$.

The formulation in terms of local derivatives is:
Let $[L] = \begin{bmatrix} \frac{\partial \xi}{\partial x} & \frac{\partial \eta}{\partial x} \\ \frac{\partial \xi}{\partial y} & \frac{\partial \eta}{\partial y} \end{bmatrix} = [J]^{-1}$.
$\frac{\partial N_i}{\partial x} = \frac{\partial N_i}{\partial \xi} \frac{\partial \xi}{\partial x} + \frac{\partial N_i}{\partial \eta} \frac{\partial \eta}{\partial x} = [N_{i,\xi} \quad N_{i,\eta}] \begin{bmatrix} \frac{\partial \xi}{\partial x} \\ \frac{\partial \eta}{\partial x} \end{bmatrix}$
$\frac{\partial N_i}{\partial y} = \frac{\partial N_i}{\partial \xi} \frac{\partial \xi}{\partial y} + \frac{\partial N_i}{\partial \eta} \frac{\partial \eta}{\partial y} = [N_{i,\xi} \quad N_{i,\eta}] \begin{bmatrix} \frac{\partial \xi}{\partial y} \\ \frac{\partial \eta}{\partial y} \end{bmatrix}$

This can be compactly written as:
$\hat{B}_i = \begin{bmatrix}
N_{i,\xi} & N_{i,\eta} \\
0 & 0 \\
0 & 0
\end{bmatrix} [L]_1 + \begin{bmatrix}
0 & 0 \\
N_{i,\xi} & N_{i,\eta} \\
0 & 0
\end{bmatrix} [L]_2 + \begin{bmatrix}
0 & 0 \\
0 & 0 \\
N_{i,\xi} & N_{i,\eta}
\end{bmatrix} [L]_3$

Where $[L]_1 = \begin{bmatrix} \frac{\partial \xi}{\partial x} \\ \frac{\partial \eta}{\partial x} \end{bmatrix}$, $[L]_2 = \begin{bmatrix} \frac{\partial \xi}{\partial y} \\ \frac{\partial \eta}{\partial y} \end{bmatrix}$, etc. (This is getting too complex for a note).

**Simpler final form:**
The $[B]_e$ matrix for an $n$-node element is composed of $n$ sub-matrices $[\hat{B}_i]$, each of size $(3 \times 2)$:
$[\hat{B}_i] = \begin{bmatrix}
N_{i,\xi} (\frac{\partial \xi}{\partial x}) + N_{i,\eta} (\frac{\partial \eta}{\partial x}) & N_{i,\xi} (\frac{\partial \xi}{\partial y}) + N_{i,\eta} (\frac{\partial \eta}{\partial y}) \\
0 & 0 \\
0 & 0
\end{bmatrix} + \begin{bmatrix}
0 & 0 \\
N_{i,\xi} (\frac{\partial \xi}{\partial x}) + N_{i,\eta} (\frac{\partial \eta}{\partial x}) & N_{i,\xi} (\frac{\partial \xi}{\partial y}) + N_{i,\eta} (\frac{\partial \eta}{\partial y}) \\
0 & 0
\end{bmatrix} + \begin{bmatrix}
0 & 0 \\
0 & 0 \\
N_{i,\xi} (\frac{\partial \xi}{\partial x}) + N_{i,\eta} (\frac{\partial \eta}{\partial x}) & N_{i,\xi} (\frac{\partial \xi}{\partial y}) + N_{i,\eta} (\frac{\partial \eta}{\partial y})
\end{bmatrix}$

This can be expressed more directly as:
$[B]_e = \sum_{i=1}^{n} [\hat{B}_i]$ where
$\hat{B}_i = \begin{bmatrix}
\frac{\partial N_i}{\partial x} & 0 \\
0 & \frac{\partial N_i}{\partial y} \\
\frac{\partial N_i}{\partial y} & \frac{\partial N_i}{\partial x}
\end{bmatrix}$

And using the Jacobian inverse relations:
$\frac{\partial N_i}{\partial x} = (\frac{\partial N_i}{\partial \xi} \frac{\partial y}{\partial \eta} - \frac{\partial N_i}{\partial \eta} \frac{\partial y}{\partial \xi}) / J$
$\frac{\partial N_i}{\partial y} = (-\frac{\partial N_i}{\partial \xi} \frac{\partial x}{\partial \eta} + \frac{\partial N_i}{\partial \eta} \frac{\partial x}{\partial \xi}) / J$

This leads to the components of $[B]_e$ being expressed in terms of $N_{i,\xi}, N_{i,\eta}$ and the Jacobian components.

**Question 3 (CO5):**
What is the fundamental difference between isoparametric elements and elements that use only Cartesian shape functions (e.g., constant strain triangle in Cartesian)?

**Answer 3:**
The fundamental difference lies in how they represent the **geometry** of the element and the **interpolation of the field variable**.

*   **Cartesian Shape Functions (e.g., CST):** These elements typically use polynomial shape functions defined directly in global Cartesian coordinates ($x, y$). For simple elements like the CST, the geometry is limited to linear facets (straight lines). The shape functions are also polynomials of a certain order in $x, y$. They are well-suited for regions with straight boundaries.

*   **Isoparametric Elements:** These elements use the **same set of interpolation functions (shape functions)** to describe both the **geometry** of the element and the variation of the **field variable** within the element. These shape functions are defined in a local/natural coordinate system ($\xi, \eta$). This allows for the accurate representation of **curved boundaries** and complex geometries, which is a significant advantage over elements restricted to Cartesian coordinate approximations. The transformation to a standard parent element simplifies integration and analysis.

**Question 4 (CO4, CO5):**
Explain why Gaussian Quadrature is essential for isoparametric element formulations.

**Answer 4:**
Gaussian Quadrature is essential for isoparametric element formulations primarily because:

1.  **Non-polynomial Jacobian:** The Jacobian determinant ($J$) for isoparametric elements (especially higher-order or non-rectangular ones) is generally a function of the local coordinates ($\xi, \eta$). This means $J$ varies across the element.
2.  **Polynomial Shape Functions:** The strain-displacement matrix $[B]_e$ is constructed using derivatives of the shape functions, which are polynomials in $\xi, \eta$. Therefore, the integrand in the stiffness matrix integral ($[B]_e^T [D] [B]_e J$) is a product of polynomials and is itself a polynomial in $\xi, \eta$.
3.  **Intractability of Analytical Integration:** For complex shape functions (like those for quadratic or cubic elements) and varying Jacobians, the analytical integration of the stiffness matrix and load vector integrals in the local coordinate system becomes extremely difficult or impossible.
4.  **Efficient and Accurate Approximation:** Gaussian Quadrature provides an efficient and accurate method for approximating these definite integrals. By choosing the correct number of Gauss points and their corresponding weights, we can achieve exact integration of polynomial integrands up to a certain degree, which is crucial for obtaining accurate element matrices.

In summary, Gaussian Quadrature allows us to transform complex integrals from the physical element domain to a standard parent element domain, enabling numerical computation of element properties.

---

### 9. Important Points to Remember

*   **Isoparametric concept:** Same shape functions for geometry and field variable interpolation.
*   **Local vs. Global Coordinates:** Transformation from physical ($x, y$) to natural ($\xi, \eta$) coordinates.
*   **Jacobian Matrix:** Relates differential elements ($dx dy = J d\xi d\eta$) and is crucial for integration. $J$ must be positive.
*   **Shape Function Properties:** Must satisfy Kronecker delta property and sum to 1 for completeness.
*   **Element Matrix Calculation:** Integrals for $[k]_e$ and $\{f\}_e$ are performed in the local coordinate system using the Jacobian.
*   **Gaussian Quadrature:** Essential for numerical integration of these integrals due to polynomial nature and varying Jacobian.
*   **Flexibility:** Isoparametric elements can accurately model curved boundaries, leading to better approximations with fewer elements.
*   **$[B]_e$ matrix:** Constructed using derivatives of shape functions with respect to global coordinates, which are obtained via the Jacobian.

This concludes the notes on Isoparametric Elements. Remember to consult the provided textbooks for more detailed derivations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
