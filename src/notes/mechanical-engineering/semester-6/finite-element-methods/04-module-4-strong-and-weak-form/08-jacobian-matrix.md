---
title: "Jacobian matrix"
subject: "FINITE ELEMENT METHODS"
module: "Module 4: Strong and Weak form"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf480446385c"
status: "completed"
scrapedAt: "2026-05-20T18:04:11.073Z"
---
# FINITE ELEMENT METHODS - Module 4: Strong and Weak Form

## Topic: Jacobian Matrix

### 1. Introduction and Motivation

The Finite Element Method (FEM) often involves integrating functions over complex geometrical domains (elemental domains). Direct integration over these irregular shapes can be computationally challenging. To overcome this, we frequently map these physical, irregular elements to a simpler, standard or reference element in a local coordinate system. This mapping involves a coordinate transformation. The **Jacobian matrix** is a fundamental tool that facilitates this coordinate transformation and plays a crucial role in correctly evaluating integrals in the transformed coordinate system.

**Relevance to FEM:**

*   **Integration over Reference Element:** Most FEM formulations involve integrating shape functions and their derivatives over the elemental domain. By mapping the physical element to a reference element, these integrals become standard and can be evaluated using numerical integration techniques like Gaussian quadrature.
*   **Coordinate Transformation:** The Jacobian matrix allows us to relate derivatives and differentials in the physical coordinate system to those in the local coordinate system. This is essential for deriving element stiffness matrices and load vectors.
*   **Isoparametric Formulations:** The Jacobian is particularly important in isoparametric elements where both the geometry and the field variables are approximated using the same set of shape functions.

**Knowledge Level Alignment:**

*   **CO1 (K2):** Understanding the basic procedure of FEM, which includes the need for coordinate transformations.
*   **CO2 (K3):** Applying coordinate transformation, which is directly facilitated by the Jacobian.
*   **CO3 (K4):** Formulating shape functions and element strain-displacement matrices often requires derivatives with respect to physical coordinates, which are obtained using the Jacobian.
*   **CO5 (K4):** Analyzing isoparametric formulations heavily relies on the Jacobian for the geometric mapping.

### 2. What is a Jacobian Matrix?

The Jacobian matrix (or simply the Jacobian) is a square matrix of partial derivatives of a vector-valued function with respect to a vector of its variables. In the context of FEM, it represents the transformation between the physical (global or element) coordinate system ($x, y, z$) and the local or natural coordinate system ($\xi, \eta, \zeta$).

For a transformation from $(\xi, \eta)$ in the reference element to $(x, y)$ in the physical element, the Jacobian matrix is defined as:

$$
\mathbf{J} = \begin{bmatrix}
\frac{\partial x}{\partial \xi} & \frac{\partial x}{\partial \eta} \\
\frac{\partial y}{\partial \xi} & \frac{\partial y}{\partial \eta}
\end{bmatrix}
$$

For a 3D case, the transformation from $(\xi, \eta, \zeta)$ to $(x, y, z)$ would result in a $3 \times 3$ Jacobian matrix:

$$
\mathbf{J} = \begin{bmatrix}
\frac{\partial x}{\partial \xi} & \frac{\partial x}{\partial \eta} & \frac{\partial x}{\partial \zeta} \\
\frac{\partial y}{\partial \xi} & \frac{\partial y}{\partial \eta} & \frac{\partial y}{\partial \zeta} \\
\frac{\partial z}{\partial \xi} & \frac{\partial z}{\partial \eta} & \frac{\partial z}{\partial \zeta}
\end{bmatrix}
$$

### 3. Jacobian Determinant

The **determinant of the Jacobian matrix**, denoted as $|\mathbf{J}|$ or $J$, is a scalar value that represents the ratio of a small area (or volume) in the physical coordinate system to the corresponding small area (or volume) in the reference coordinate system.

$$
dA_{xy} = |\mathbf{J}| \, dA_{\xi\eta}
$$
or
$$
dV_{xyz} = |\mathbf{J}| \, dV_{\xi\eta\zeta}
$$

where:
*   $dA_{xy}$ is an infinitesimal area element in the physical $(x, y)$ coordinate system.
*   $dA_{\xi\eta}$ is the corresponding infinitesimal area element in the reference $(\xi, \eta)$ coordinate system.
*   $|\mathbf{J}|$ is the determinant of the Jacobian matrix.

The Jacobian determinant is crucial for **changing the variable of integration**. When we transform an integral from the physical domain to the reference domain, we use the Jacobian determinant as the differential area/volume element:

$$
\iint_{\text{physical element}} f(x, y) \, dx \, dy = \iint_{\text{reference element}} f(x(\xi, \eta), y(\xi, \eta)) \, |\mathbf{J}| \, d\xi \, d\eta
$$

**Important Point:** The Jacobian determinant must be non-zero and positive for a valid coordinate transformation. A negative determinant implies that the mapping is inverted in that region, which is physically impossible for element mapping.

### 4. Calculating the Jacobian Matrix

The elements of the Jacobian matrix are computed using the shape functions that define the coordinate transformation. If the coordinates $(x, y)$ of a point within a physical element are expressed in terms of the nodal coordinates $(x_i, y_i)$ and the shape functions $N_i(\xi, \eta)$ as:

$$
x = \sum_{i=1}^{n} N_i(\xi, \eta) x_i \quad \text{and} \quad y = \sum_{i=1}^{n} N_i(\xi, \eta) y_i
$$

Then, the partial derivatives of $x$ and $y$ with respect to $\xi$ and $\eta$ are:

$$
\frac{\partial x}{\partial \xi} = \sum_{i=1}^{n} \frac{\partial N_i}{\partial \xi} x_i \quad \text{and} \quad \frac{\partial x}{\partial \eta} = \sum_{i=1}^{n} \frac{\partial N_i}{\partial \eta} x_i
$$

$$
\frac{\partial y}{\partial \xi} = \sum_{i=1}^{n} \frac{\partial N_i}{\partial \xi} y_i \quad \text{and} \quad \frac{\partial y}{\partial \eta} = \sum_{i=1}^{n} \frac{\partial N_i}{\partial \eta} y_i
$$

These can be compactly written in matrix form. Let $\mathbf{N}_{,\xi} = [\frac{\partial N_1}{\partial \xi}, \frac{\partial N_2}{\partial \xi}, \dots, \frac{\partial N_n}{\partial \xi}]$ and $\mathbf{N}_{,\eta} = [\frac{\partial N_1}{\partial \eta}, \frac{\partial N_2}{\partial \eta}, \dots, \frac{\partial N_n}{\partial \eta}]$. Let $\mathbf{x}_e = [x_1, x_2, \dots, x_n]^T$ and $\mathbf{y}_e = [y_1, y_2, \dots, y_n]^T$.

Then:
*   $\frac{\partial x}{\partial \xi} = \mathbf{N}_{,\xi} \mathbf{x}_e^T$
*   $\frac{\partial x}{\partial \eta} = \mathbf{N}_{,\eta} \mathbf{x}_e^T$
*   $\frac{\partial y}{\partial \xi} = \mathbf{N}_{,\xi} \mathbf{y}_e^T$
*   $\frac{\partial y}{\partial \eta} = \mathbf{N}_{,\eta} \mathbf{y}_e^T$

Alternatively, using matrix notation more directly for the Jacobian:

Let $\mathbf{N}'_{\xi} = \begin{bmatrix} \frac{\partial N_1}{\partial \xi} & \frac{\partial N_2}{\partial \xi} & \dots & \frac{\partial N_n}{\partial \xi} \end{bmatrix}$ and $\mathbf{N}'_{\eta} = \begin{bmatrix} \frac{\partial N_1}{\partial \eta} & \frac{\partial N_2}{\partial \eta} & \dots & \frac{\partial N_n}{\partial \eta} \end{bmatrix}$.

Let $\mathbf{x}_{node} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}$ and $\mathbf{y}_{node} = \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{bmatrix}$.

Then, the Jacobian matrix elements are:
*   $J_{11} = \frac{\partial x}{\partial \xi} = \mathbf{N}'_{\xi} \mathbf{x}_{node}$
*   $J_{12} = \frac{\partial x}{\partial \eta} = \mathbf{N}'_{\eta} \mathbf{x}_{node}$
*   $J_{21} = \frac{\partial y}{\partial \xi} = \mathbf{N}'_{\xi} \mathbf{y}_{node}$
*   $J_{22} = \frac{\partial y}{\partial \eta} = \mathbf{N}'_{\eta} \mathbf{y}_{node}$

So, the Jacobian matrix $\mathbf{J}$ can be written as:

$$
\mathbf{J} = \begin{bmatrix}
\mathbf{N}'_{\xi} \mathbf{x}_{node} & \mathbf{N}'_{\eta} \mathbf{x}_{node} \\
\mathbf{N}'_{\xi} \mathbf{y}_{node} & \mathbf{N}'_{\eta} \mathbf{y}_{node}
\end{bmatrix}
$$

This can be further organized. Define a matrix $\mathbf{B}_x = [\mathbf{N}'_{\xi}^T, \mathbf{N}'_{\eta}^T]$. Then:

$$
\begin{bmatrix} \frac{\partial x}{\partial \xi} \\ \frac{\partial y}{\partial \xi} \end{bmatrix} = \begin{bmatrix} \mathbf{N}'_{\xi} \\ \mathbf{N}'_{\xi} \end{bmatrix} \begin{bmatrix} \mathbf{x}_{node} & \mathbf{y}_{node} \end{bmatrix}
$$

A more structured way often used in FEM formulation is to define a matrix related to the geometric derivatives:

Let $\mathbf{x} = \begin{bmatrix} x \\ y \end{bmatrix}$ and $\boldsymbol{\xi} = \begin{bmatrix} \xi \\ \eta \end{bmatrix}$.
The transformation is $\mathbf{x} = \mathbf{T}(\boldsymbol{\xi})$.
The Jacobian is $\mathbf{J} = \frac{\partial \mathbf{x}}{\partial \boldsymbol{\xi}}$.

We can express this using shape functions and nodal coordinates.
Define $\mathbf{N}_{\boldsymbol{\xi}} = \begin{bmatrix} \frac{\partial N_1}{\partial \xi} & \frac{\partial N_2}{\partial \xi} & \dots & \frac{\partial N_n}{\partial \xi} \\ \frac{\partial N_1}{\partial \eta} & \frac{\partial N_2}{\partial \eta} & \dots & \frac{\partial N_n}{\partial \eta} \end{bmatrix}$ and $\mathbf{X}_{node} = \begin{bmatrix} x_1 & y_1 \\ x_2 & y_2 \\ \vdots & \vdots \\ x_n & y_n \end{bmatrix}$.

Then, $\mathbf{J} = \mathbf{N}_{\boldsymbol{\xi}} \mathbf{X}_{node}^T$.

$$
\mathbf{J} = \begin{bmatrix}
\frac{\partial N_1}{\partial \xi} & \frac{\partial N_2}{\partial \xi} & \dots & \frac{\partial N_n}{\partial \xi} \\
\frac{\partial N_1}{\partial \eta} & \frac{\partial N_2}{\partial \eta} & \dots & \frac{\partial N_n}{\partial \eta}
\end{bmatrix} \begin{bmatrix}
x_1 & y_1 \\
x_2 & y_2 \\
\vdots & \vdots \\
x_n & y_n
\end{bmatrix}
= \begin{bmatrix}
\sum \frac{\partial N_i}{\partial \xi} x_i & \sum \frac{\partial N_i}{\partial \xi} y_i \\
\sum \frac{\partial N_i}{\partial \eta} x_i & \sum \frac{\partial N_i}{\partial \eta} y_i
\end{bmatrix}
$$

### 5. Relationship between Derivatives

The Jacobian matrix is crucial for transforming derivatives from the local coordinate system to the physical coordinate system and vice-versa.

**From local to physical derivatives:**

To compute derivatives of a function $\phi(\xi, \eta)$ with respect to physical coordinates $(x, y)$, we use the chain rule:

$$
\frac{\partial \phi}{\partial x} = \frac{\partial \phi}{\partial \xi} \frac{\partial \xi}{\partial x} + \frac{\partial \phi}{\partial \eta} \frac{\partial \eta}{\partial x}
$$

$$
\frac{\partial \phi}{\partial y} = \frac{\partial \phi}{\partial \xi} \frac{\partial \xi}{\partial y} + \frac{\partial \phi}{\partial \eta} \frac{\partial \eta}{\partial y}
$$

In matrix form:

$$
\begin{bmatrix} \frac{\partial \phi}{\partial x} \\ \frac{\partial \phi}{\partial y} \end{bmatrix} = \begin{bmatrix}
\frac{\partial \xi}{\partial x} & \frac{\partial \eta}{\partial x} \\
\frac{\partial \xi}{\partial y} & \frac{\partial \eta}{\partial y}
\end{bmatrix} \begin{bmatrix} \frac{\partial \phi}{\partial \xi} \\ \frac{\partial \phi}{\partial \eta} \end{bmatrix}
$$

The matrix in the middle is the **inverse of the Jacobian matrix**, $\mathbf{J}^{-1}$:

$$
\mathbf{J}^{-1} = \begin{bmatrix}
\frac{\partial \xi}{\partial x} & \frac{\partial \eta}{\partial x} \\
\frac{\partial \xi}{\partial y} & \frac{\partial \eta}{\partial y}
\end{bmatrix}
$$

Therefore:

$$
\begin{bmatrix} \frac{\partial \phi}{\partial x} \\ \frac{\partial \phi}{\partial y} \end{bmatrix} = \mathbf{J}^{-1} \begin{bmatrix} \frac{\partial \phi}{\partial \xi} \\ \frac{\partial \phi}{\partial \eta} \end{bmatrix}
$$

**From physical to local derivatives:**

The relationship is more direct:

$$
\begin{bmatrix} \frac{\partial \phi}{\partial \xi} \\ \frac{\partial \phi}{\partial \eta} \end{bmatrix} = \begin{bmatrix}
\frac{\partial x}{\partial \xi} & \frac{\partial y}{\partial \xi} \\
\frac{\partial x}{\partial \eta} & \frac{\partial y}{\partial \eta}
\end{bmatrix} \begin{bmatrix} \frac{\partial \phi}{\partial x} \\ \frac{\partial \phi}{\partial y} \end{bmatrix} = \mathbf{J} \begin{bmatrix} \frac{\partial \phi}{\partial x} \\ \frac{\partial \phi}{\partial y} \end{bmatrix}
$$

This latter relationship is particularly useful when calculating the strain-displacement matrix ($\mathbf{B}$ matrix), which relates nodal strains to nodal displacements. Strains often involve derivatives with respect to physical coordinates, which are calculated from derivatives of shape functions with respect to local coordinates using $\mathbf{J}^{-1}$.

**Textbook Reference:**
*   **Reddy (2009), Chapter 4:** Discusses coordinate transformations and the Jacobian matrix in detail for various element types and dimensions.
*   **Cook (2008), Chapter 7:** Explains the role of the Jacobian in mapping and numerical integration for isoparametric elements.
*   **Bhavikatti (2008), Chapter 4:** Covers transformations and the Jacobian for both 2D and 3D elements.
*   **Fish & Belytschko (2007), Chapter 8:** Provides a comprehensive treatment of isoparametric formulations, emphasizing the Jacobian's role in numerical integration and derivative calculation.

### 6. Example: 2D Linear Isoparametric Quadrilateral Element

Consider a 2D linear isoparametric quadrilateral element. The physical coordinates $(x, y)$ are related to the local coordinates $(\xi, \eta)$ through shape functions $N_i(\xi, \eta)$:

$$
x = \sum_{i=1}^{4} N_i(\xi, \eta) x_i \quad \text{and} \quad y = \sum_{i=1}^{4} N_i(\xi, \eta) y_i
$$

The standard shape functions for a 4-node quadrilateral in the $\xi-\eta$ plane are:

$$
N_1 = \frac{1}{4}(1-\xi)(1-\eta) \quad N_2 = \frac{1}{4}(1+\xi)(1-\eta) \quad N_3 = \frac{1}{4}(1+\xi)(1+\eta) \quad N_4 = \frac{1}{4}(1-\xi)(1+\eta)
$$

The reference element is a square defined by $-1 \le \xi \le 1$ and $-1 \le \eta \le 1$. The nodes are at $(\xi, \eta)$: Node 1: $(-1, -1)$, Node 2: $(1, -1)$, Node 3: $(1, 1)$, Node 4: $(-1, 1)$.

Let's calculate the partial derivatives of the shape functions:

$$
\frac{\partial N_1}{\partial \xi} = -\frac{1}{4}(1-\eta) \quad \frac{\partial N_1}{\partial \eta} = -\frac{1}{4}(1-\xi)
$$

$$
\frac{\partial N_2}{\partial \xi} = \frac{1}{4}(1-\eta) \quad \frac{\partial N_2}{\partial \eta} = -\frac{1}{4}(1+\xi)
$$

$$
\frac{\partial N_3}{\partial \xi} = \frac{1}{4}(1+\eta) \quad \frac{\partial N_3}{\partial \eta} = \frac{1}{4}(1+\xi)
$$

$$
\frac{\partial N_4}{\partial \xi} = -\frac{1}{4}(1+\eta) \quad \frac{\partial N_4}{\partial \eta} = \frac{1}{4}(1-\xi)
$$

Now, we can compute the elements of the Jacobian matrix:

$$
J_{11} = \frac{\partial x}{\partial \xi} = \sum_{i=1}^{4} \frac{\partial N_i}{\partial \xi} x_i = \frac{1}{4} [-\!(1-\eta)x_1 + (1-\eta)x_2 + (1+\eta)x_3 - (1+\eta)x_4]
$$

$$
J_{12} = \frac{\partial x}{\partial \eta} = \sum_{i=1}^{4} \frac{\partial N_i}{\partial \eta} x_i = \frac{1}{4} [-\!(1-\xi)x_1 - (1+\xi)x_2 + (1+\xi)x_3 + (1-\xi)x_4]
$$

$$
J_{21} = \frac{\partial y}{\partial \xi} = \sum_{i=1}^{4} \frac{\partial N_i}{\partial \xi} y_i = \frac{1}{4} [-\!(1-\eta)y_1 + (1-\eta)y_2 + (1+\eta)y_3 - (1+\eta)y_4]
$$

$$
J_{22} = \frac{\partial y}{\partial \eta} = \sum_{i=1}^{4} \frac{\partial N_i}{\partial \eta} y_i = \frac{1}{4} [-\!(1-\xi)y_1 - (1+\xi)y_2 + (1+\xi)y_3 + (1-\xi)y_4]
$$

**Determinant of the Jacobian:**

$$
|\mathbf{J}| = J_{11} J_{22} - J_{12} J_{21}
$$

The Jacobian and its determinant will vary depending on the $(\xi, \eta)$ coordinates and the nodal coordinates $(x_i, y_i)$. For numerical integration (e.g., Gaussian quadrature), we evaluate the Jacobian at specific integration points within the reference element.

**Example Calculation:** Consider a square physical element with nodes at (0,0), (1,0), (1,1), (0,1). Let's map this to the reference element using the shape functions.

For instance, if we map node 1 $(\xi=-1, \eta=-1)$ to $(x,y)=(0,0)$, node 2 $(\xi=1, \eta=-1)$ to $(x,y)=(1,0)$, node 3 $(\xi=1, \eta=1)$ to $(x,y)=(1,1)$, and node 4 $(\xi=-1, \eta=1)$ to $(x,y)=(0,1)$.

Let's evaluate the Jacobian at the center of the reference element: $\xi = 0, \eta = 0$.

At $(\xi, \eta) = (0, 0)$:
$\frac{\partial N_1}{\partial \xi} = -\frac{1}{4}, \frac{\partial N_1}{\partial \eta} = -\frac{1}{4}$
$\frac{\partial N_2}{\partial \xi} = \frac{1}{4}, \frac{\partial N_2}{\partial \eta} = -\frac{1}{4}$
$\frac{\partial N_3}{\partial \xi} = \frac{1}{4}, \frac{\partial N_3}{\partial \eta} = \frac{1}{4}$
$\frac{\partial N_4}{\partial \xi} = -\frac{1}{4}, \frac{\partial N_4}{\partial \eta} = \frac{1}{4}$

$x_1=0, y_1=0$
$x_2=1, y_2=0$
$x_3=1, y_3=1$
$x_4=0, y_4=1$

$J_{11} = \frac{1}{4}[-(1)x_1 + (1)x_2 + (1)x_3 - (1)x_4] = \frac{1}{4}[-0 + 1 + 1 - 0] = \frac{2}{4} = 0.5$
$J_{12} = \frac{1}{4}[-(1)x_1 - (1)x_2 + (1)x_3 + (1)x_4] = \frac{1}{4}[-0 - 1 + 1 + 0] = 0$
$J_{21} = \frac{1}{4}[-(1)y_1 + (1)y_2 + (1)y_3 - (1)y_4] = \frac{1}{4}[-0 + 0 + 1 - 1] = 0$
$J_{22} = \frac{1}{4}[-(1)y_1 - (1)y_2 + (1)y_3 + (1)y_4] = \frac{1}{4}[-0 - 0 + 1 + 1] = \frac{2}{4} = 0.5$

So, at the center, $\mathbf{J} = \begin{bmatrix} 0.5 & 0 \\ 0 & 0.5 \end{bmatrix}$.
The determinant $|\mathbf{J}| = (0.5)(0.5) - (0)(0) = 0.25$.

This indicates that an area of $dA_{\xi\eta}$ in the reference element corresponds to an area of $0.25 \, dA_{\xi\eta}$ in the physical element at this point. This is correct for a unit square mapped to a unit square where the mapping is linear.

### 7. Role of Jacobian in FEM Matrices

*   **Element Stiffness Matrix ($\mathbf{k}_e$):**
    For a 2D elasticity problem, the element stiffness matrix is typically computed as:
    $$ \mathbf{k}_e = \iint_{V_e} \mathbf{B}^T \mathbf{D} \mathbf{B} \, dV $$
    where $\mathbf{B}$ is the strain-displacement matrix and $\mathbf{D}$ is the material constitutive matrix.
    When using isoparametric elements, this integral is transformed to the reference element:
    $$ \mathbf{k}_e = \iint_{V_{ref}} \mathbf{B}^T \mathbf{D} \mathbf{B} \, |\mathbf{J}| \, dV_{ref} $$
    The strain-displacement matrix $\mathbf{B}$ relates strains to nodal displacements. Strains involve spatial derivatives of displacements, which are expressed using shape functions. Derivatives of shape functions are with respect to physical coordinates. Using the chain rule and the Jacobian inverse:
    $$ \boldsymbol{\epsilon} = \mathbf{B} \mathbf{u} $$
    $$ \begin{bmatrix} \epsilon_{xx} \\ \epsilon_{yy} \\ \gamma_{xy} \end{bmatrix} = \begin{bmatrix} \frac{\partial}{\partial x} & 0 & \dots \\ 0 & \frac{\partial}{\partial y} & \dots \\ \frac{\partial}{\partial y} & \frac{\partial}{\partial x} & \dots \end{bmatrix} \begin{bmatrix} \mathbf{u}_x \\ \mathbf{u}_y \\ \vdots \end{bmatrix} $$
    Each derivative operator $\frac{\partial}{\partial x}$ or $\frac{\partial}{\partial y}$ is replaced by:
    $$ \frac{\partial}{\partial x} = \frac{\partial \xi}{\partial x} \frac{\partial}{\partial \xi} + \frac{\partial \eta}{\partial x} \frac{\partial}{\partial \eta} = (\mathbf{J}^{-1})_{11} \frac{\partial}{\partial \xi} + (\mathbf{J}^{-1})_{12} \frac{\partial}{\partial \eta} $$
    and similarly for $\frac{\partial}{\partial y}$. The $\mathbf{B}$ matrix is thus constructed using derivatives of shape functions with respect to $\xi$ and $\eta$, scaled by the Jacobian inverse.

*   **Element Load Vector ($\mathbf{f}_e$):**
    For a distributed load $q$ acting on a boundary of length $ds$, the load vector is:
    $$ \mathbf{f}_e = \int_{S_e} N^T q \, ds $$
    When this integration is performed on the reference element, the differential arc length $ds$ needs to be transformed. For a 2D boundary curve parameterized by $\xi$:
    $$ ds = \sqrt{\left(\frac{\partial x}{\partial \xi}\right)^2 + \left(\frac{\partial y}{\partial \xi}\right)^2} \, d\xi $$
    The terms $\frac{\partial x}{\partial \xi}$ and $\frac{\partial y}{\partial \xi}$ are elements of the Jacobian matrix ($J_{11}, J_{21}$ for a boundary along $\eta=const$).
    $$ \mathbf{f}_e = \int_{\xi_{min}}^{\xi_{max}} \mathbf{N}^T q \sqrt{\left(\frac{\partial x}{\partial \xi}\right)^2 + \left(\frac{\partial y}{\partial \xi}\right)^2} \, d\xi $$

**Textbook Reference:**
*   **Segerlind (2010), Chapter 5:** Detailed explanation of how the Jacobian is used in the transformation of integrals for stiffness matrices.
*   **Ramamurthi (2010), Chapter 6:** Discusses the computation of element matrices using numerical integration and the role of the Jacobian determinant.
*   **Hutton (2009), Chapter 8:** Covers isoparametric concepts, including the Jacobian and its application in calculating element properties.

### 8. Higher Order and Higher Dimensional Elements

The concept of the Jacobian matrix extends naturally to higher-order elements (e.g., quadratic or cubic shape functions) and higher dimensions (3D elements).

*   **Higher Order Elements:** The shape functions $N_i$ and their derivatives $\frac{\partial N_i}{\partial \xi}, \frac{\partial N_i}{\partial \eta}$ will be more complex polynomials in $\xi$ and $\eta$. The calculation of the Jacobian matrix elements and its determinant follows the same principles, but the expressions become more involved.
*   **3D Elements:** For a 3D element, we would have a transformation from $(\xi, \eta, \zeta)$ to $(x, y, z)$. The Jacobian would be a $3 \times 3$ matrix:
    $$
    \mathbf{J} = \begin{bmatrix}
    \frac{\partial x}{\partial \xi} & \frac{\partial x}{\partial \eta} & \frac{\partial x}{\partial \zeta} \\
    \frac{\partial y}{\partial \xi} & \frac{\partial y}{\partial \eta} & \frac{\partial y}{\partial \zeta} \\
    \frac{\partial z}{\partial \xi} & \frac{\partial z}{\partial \eta} & \frac{\partial z}{\partial \zeta}
    \end{bmatrix}
    $$
    The volume integral transformation would be:
    $$ dV_{xyz} = |\mathbf{J}| \, dV_{\xi\eta\zeta} $$
    And the derivative transformations would involve the inverse of this $3 \times 3$ Jacobian.

### 9. Practice Questions and Exercises

**Question 1:**
The coordinates $(x,y)$ of a point within a 4-node quadrilateral element are given by:
$x = N_1 x_1 + N_2 x_2 + N_3 x_3 + N_4 x_4$
$y = N_1 y_1 + N_2 y_2 + N_3 y_3 + N_4 y_4$
where $N_i$ are the standard bilinear shape functions. The Jacobian matrix is defined as:
$$
\mathbf{J} = \begin{bmatrix}
\frac{\partial x}{\partial \xi} & \frac{\partial x}{\partial \eta} \\
\frac{\partial y}{\partial \xi} & \frac{\partial y}{\partial \eta}
\end{bmatrix}
$$
Which of the following statements is INCORRECT regarding the Jacobian matrix in FEM?

(a) It relates differentials in physical coordinates to differentials in natural coordinates.
(b) Its determinant is used to transform integration domains.
(c) Its inverse is used to transform derivatives from natural coordinates to physical coordinates.
(d) It is always a constant matrix for any element type.

**Answer 1:** (d) The Jacobian matrix is generally not constant for isoparametric elements unless the physical element is a rectangle and the mapping is linear. For higher-order elements or distorted shapes, the Jacobian will vary with $\xi$ and $\eta$.

---

**Question 2:**
Consider a 2D linear isoparametric triangular element with nodes at $(\xi, \eta)$ = (0,0), (1,0), (0,1). The shape functions are:
$N_1 = 1 - \xi - \eta$
$N_2 = \xi$
$N_3 = \eta$

The physical coordinates $(x,y)$ are related to nodal coordinates $(x_i, y_i)$ and shape functions as:
$x = N_1 x_1 + N_2 x_2 + N_3 x_3$
$y = N_1 y_1 + N_2 y_2 + N_3 y_3$

Calculate the Jacobian matrix $\mathbf{J}$ at the centroid of the triangle $(\xi = 1/3, \eta = 1/3)$.

**Solution 2:**
First, calculate the partial derivatives of the shape functions:
$\frac{\partial N_1}{\partial \xi} = -1$, $\frac{\partial N_1}{\partial \eta} = -1$
$\frac{\partial N_2}{\partial \xi} = 1$, $\frac{\partial N_2}{\partial \eta} = 0$
$\frac{\partial N_3}{\partial \xi} = 0$, $\frac{\partial N_3}{\partial \eta} = 1$

Now, evaluate these derivatives at $\xi = 1/3, \eta = 1/3$. The derivatives are constant for linear shape functions.
$\frac{\partial N_1}{\partial \xi} = -1$, $\frac{\partial N_1}{\partial \eta} = -1$
$\frac{\partial N_2}{\partial \xi} = 1$, $\frac{\partial N_2}{\partial \eta} = 0$
$\frac{\partial N_3}{\partial \xi} = 0$, $\frac{\partial N_3}{\partial \eta} = 1$

The elements of the Jacobian matrix are:
$J_{11} = \frac{\partial x}{\partial \xi} = \sum_{i=1}^{3} \frac{\partial N_i}{\partial \xi} x_i = (-1)x_1 + (1)x_2 + (0)x_3 = x_2 - x_1$
$J_{12} = \frac{\partial x}{\partial \eta} = \sum_{i=1}^{3} \frac{\partial N_i}{\partial \eta} x_i = (-1)x_1 + (0)x_2 + (1)x_3 = x_3 - x_1$
$J_{21} = \frac{\partial y}{\partial \xi} = \sum_{i=1}^{3} \frac{\partial N_i}{\partial \xi} y_i = (-1)y_1 + (1)y_2 + (0)y_3 = y_2 - y_1$
$J_{22} = \frac{\partial y}{\partial \eta} = \sum_{i=1}^{3} \frac{\partial N_i}{\partial \eta} y_i = (-1)y_1 + (0)y_2 + (1)y_3 = y_3 - y_1$

So, the Jacobian matrix is:
$$
\mathbf{J} = \begin{bmatrix}
x_2 - x_1 & x_3 - x_1 \\
y_2 - y_1 & y_3 - y_1
\end{bmatrix}
$$
The determinant of the Jacobian is:
$|\mathbf{J}| = (x_2 - x_1)(y_3 - y_1) - (x_3 - x_1)(y_2 - y_1)$. This is twice the area of the triangle.

---

**Question 3:**
For a 2D element, the relationship between derivatives in physical and natural coordinates is given by:
$$
\begin{bmatrix} \frac{\partial \phi}{\partial x} \\ \frac{\partial \phi}{\partial y} \end{bmatrix} = \mathbf{J}^{-1} \begin{bmatrix} \frac{\partial \phi}{\partial \xi} \\ \frac{\partial \phi}{\partial \eta} \end{bmatrix}
$$
If $\mathbf{J} = \begin{bmatrix} 2 & 1 \\ 1 & 3 \end{bmatrix}$, find $\mathbf{J}^{-1}$ and use it to compute $\frac{\partial \phi}{\partial x}$ and $\frac{\partial \phi}{\partial y}$ at a point where $\frac{\partial \phi}{\partial \xi} = 5$ and $\frac{\partial \phi}{\partial \eta} = 2$.

**Solution 3:**
First, calculate the determinant of $\mathbf{J}$:
$|\mathbf{J}| = (2)(3) - (1)(1) = 6 - 1 = 5$.

The inverse of a $2 \times 2$ matrix $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$ is $\frac{1}{ad-bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$.
So, $\mathbf{J}^{-1} = \frac{1}{5} \begin{bmatrix} 3 & -1 \\ -1 & 2 \end{bmatrix} = \begin{bmatrix} 0.6 & -0.2 \\ -0.2 & 0.4 \end{bmatrix}$.

Now, compute the physical derivatives:
$$
\begin{bmatrix} \frac{\partial \phi}{\partial x} \\ \frac{\partial \phi}{\partial y} \end{bmatrix} = \begin{bmatrix} 0.6 & -0.2 \\ -0.2 & 0.4 \end{bmatrix} \begin{bmatrix} 5 \\ 2 \end{bmatrix} = \begin{bmatrix} (0.6)(5) + (-0.2)(2) \\ (-0.2)(5) + (0.4)(2) \end{bmatrix} = \begin{bmatrix} 3.0 - 0.4 \\ -1.0 + 0.8 \end{bmatrix} = \begin{bmatrix} 2.6 \\ -0.2 \end{bmatrix}
$$
Therefore, $\frac{\partial \phi}{\partial x} = 2.6$ and $\frac{\partial \phi}{\partial y} = -0.2$.

### 10. Important Points to Remember

*   The Jacobian matrix is the matrix of partial derivatives of the physical coordinates with respect to the natural coordinates: $\mathbf{J}_{ij} = \frac{\partial x_i}{\partial \xi_j}$.
*   The determinant of the Jacobian, $|\mathbf{J}|$, is the ratio of the differential area/volume in physical space to that in natural space. It's essential for transforming integrals: $dV_{phys} = |\mathbf{J}| dV_{nat}$.
*   The Jacobian is computed using the shape functions and nodal coordinates of the element.
*   The inverse of the Jacobian, $\mathbf{J}^{-1}$, is used to transform derivatives from natural coordinates to physical coordinates: $\frac{\partial}{\partial x} = \mathbf{J}^{-1} \frac{\partial}{\partial \boldsymbol{\xi}}$. This is crucial for forming the $\mathbf{B}$ matrix.
*   The Jacobian and its determinant must be evaluated at the specific points (usually Gaussian integration points) where the integration is performed in the reference element.
*   For valid element mapping, $|\mathbf{J}|$ must be non-zero and positive.
*   The Jacobian depends on the element's geometry (nodal coordinates) and the chosen mapping.

### 11. Conclusion

The Jacobian matrix is a fundamental mathematical tool in the Finite Element Method, particularly in the context of isoparametric formulations. It enables the transformation of integration domains and derivative calculations between physical and natural coordinate systems, allowing for the efficient and accurate computation of element stiffness matrices and load vectors for complex geometries and higher-order elements. Understanding its calculation and properties is vital for anyone working with modern FEM implementations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
