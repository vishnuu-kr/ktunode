---
title: "Iso parametric elements"
subject: "FINITE ELEMENT METHODS"
module: "Module 4: Strong and Weak form"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044642a7"
status: "completed"
scrapedAt: "2026-05-20T18:13:07.765Z"
---
# FINITE ELEMENT METHODS: Module 4 - Strong and Weak Form

## Topic: Isoparametric Elements

**Course Outcomes Addressed:** CO5 (Study the concept of iso parametric elements and analyze iso parametric formulations - Knowledge Level: K4)

**Learning Outcomes Covered:**

*   Understand the concept of isoparametric elements and their advantages.
*   Formulate isoparametric elements and their corresponding shape functions.
*   Understand the mapping between global and local coordinate systems.
*   Calculate Jacobian matrix and its inverse for isoparametric elements.
*   Formulate element stiffness matrices and load vectors using isoparametric concepts.
*   Apply numerical integration (Gaussian Quadrature) for evaluating integrals in isoparametric formulations.

---

### 1. Introduction to Isoparametric Elements

**Key Concept:** Isoparametric elements are a powerful generalization in FEM where the geometry of the element is described using the *same* interpolation (shape) functions that are used to interpolate the unknown field variable (e.g., displacement, temperature).

**Why Isoparametric Elements?**

*   **Geometric Flexibility:** They can accurately represent curved boundaries and complex geometries that are difficult to model with simple rectangular or triangular elements (Lagrangian elements). This is crucial for real-world engineering problems (e.g., curved pipes, aerodynamic surfaces).
*   **Simplicity in Formulation:** Using the same shape functions for geometry and the field variable simplifies the mathematical formulation and implementation.
*   **Unified Approach:** Allows for a consistent framework for elements of different orders (linear, quadratic, cubic, etc.) and dimensions (1D, 2D, 3D).

**Comparison with Subparametric and Superparametric Elements:**

*   **Isoparametric:** Shape functions used for geometry interpolation = Shape functions used for field variable interpolation. (Cook, Reddy)
*   **Subparametric:** Shape functions used for geometry interpolation < Shape functions used for field variable interpolation. (Geometry is represented with lower-order elements than the field variable.)
*   **Superparametric:** Shape functions used for geometry interpolation > Shape functions used for field variable interpolation. (Geometry is represented with higher-order elements than the field variable.)

**Recommendation:** Isoparametric elements are generally preferred due to their balance of accuracy and computational efficiency.

---

### 2. Mapping Between Global and Local Coordinate Systems

**Key Concept:** To handle arbitrary element shapes and curved boundaries, a transformation from the global Cartesian coordinates (x, y, z) to a simpler, normalized local coordinate system (ξ, η, ζ) is employed.

**Local Coordinate System (Natural Coordinate System):**

*   Defined within a reference or parent element (e.g., a square in 2D, a cube in 3D).
*   Ranges typically from -1 to +1 for each local coordinate.
*   This simplifies integration and element formulation.

**Transformation Equations:**

For an *N*-node element, the global coordinates (x, y) of any point within the element can be expressed in terms of the local coordinates (ξ, η) and the nodal coordinates of the element. This is achieved using the *same* shape functions ($N_i$) that define the field variable.

**2D Example (Quadrilateral Element):**

Let the global coordinates of the $i$-th node be $(x_i, y_i)$ and the local coordinates be $(\xi, \eta)$.
The transformation is given by:

$x = \sum_{i=1}^{N} N_i(\xi, \eta) x_i$
$y = \sum_{i=1}^{N} N_i(\xi, \eta) y_i$

where $N_i(\xi, \eta)$ are the shape functions defined in the local coordinate system.

**3D Example (Hexahedral Element):**

$x = \sum_{i=1}^{N} N_i(\xi, \eta, \zeta) x_i$
$y = \sum_{i=1}^{N} N_i(\xi, \eta, \zeta) y_i$
$z = \sum_{i=1}^{N} N_i(\xi, \eta, \zeta) z_i$

**Important Note:** The shape functions $N_i$ are defined in the local coordinate system and must be capable of interpolating a polynomial. For an *N*-node isoparametric element, $N$ shape functions are used.

---

### 3. Shape Functions for Isoparametric Elements

The choice of shape functions depends on the type and order of the element. They are constructed to satisfy the Kronecker delta property: $N_i(\xi_j, \eta_j) = \delta_{ij}$, where $(\xi_j, \eta_j)$ are the local coordinates of the $j$-th node.

**Common Examples:**

*   **Bilinear Quadrilateral (4-node):**
    *   $N_1(\xi, \eta) = \frac{1}{4}(1-\xi)(1-\eta)$
    *   $N_2(\xi, \eta) = \frac{1}{4}(1+\xi)(1-\eta)$
    *   $N_3(\xi, \eta) = \frac{1}{4}(1+\xi)(1+\eta)$
    *   $N_4(\xi, \eta) = \frac{1}{4}(1-\xi)(1+\eta)$
    (Cook, Bhavikatti)

*   **Biquadratic Quadrilateral (8-node):** (Includes corner nodes and mid-side nodes)
    *   Corner nodes (e.g., node 1 at (-1, -1)): $N_1(\xi, \eta) = \frac{1}{4}(1-\xi)(1-\eta)(1+\xi+\eta)$
    *   Mid-side nodes (e.g., node 5 on the edge between node 1 and 2): $N_5(\xi, \eta) = \frac{1}{2}(1-\xi^2)(1-\eta)$
    (Reddy, Fish & Belytschko)

*   **Bilinear Triangle (3-node):**
    *   $N_1(\xi, \eta) = 1 - \xi - \eta$
    *   $N_2(\xi, \eta) = \xi$
    *   $N_3(\xi, \eta) = \eta$
    (Segerlind, Ramamurthi)

*   **Serendipity Quadrilateral (8-node):** (Only corner nodes and mid-side nodes on the edges, no center node)

**Key Property:** The sum of shape functions at any point within the element must be equal to 1: $\sum_{i=1}^{N} N_i(\xi, \eta) = 1$. This ensures constant strain/stress states are preserved.

---

### 4. Derivatives in Global Coordinates: The Jacobian Matrix

**Key Concept:** To relate derivatives in the local coordinate system to derivatives in the global coordinate system, we use the chain rule. This involves the Jacobian matrix.

**Chain Rule:**
For a function $\phi(\xi, \eta)$, its partial derivatives with respect to x and y are related to its partial derivatives with respect to ξ and η by:

$\{\frac{\partial \phi}{\partial x}\} = [J]^{-1} \{\frac{\partial \phi}{\partial \xi}\}$
$\{\frac{\partial \phi}{\partial y}\}$

where $[J]$ is the Jacobian matrix.

**Jacobian Matrix for 2D:**

The Jacobian matrix $[J]$ is defined as:

$[J] = \begin{bmatrix} \frac{\partial x}{\partial \xi} & \frac{\partial y}{\partial \xi} \\ \frac{\partial x}{\partial \eta} & \frac{\partial y}{\partial \eta} \end{bmatrix}$

We know:
$x = \sum N_i x_i$  $\implies$ $\frac{\partial x}{\partial \xi} = \sum \frac{\partial N_i}{\partial \xi} x_i$
$y = \sum N_i y_i$  $\implies$ $\frac{\partial y}{\partial \xi} = \sum \frac{\partial N_i}{\partial \xi} y_i$

And similarly for $\frac{\partial x}{\partial \eta}$ and $\frac{\partial y}{\partial \eta}$.

So, $[J] = \begin{bmatrix} \sum \frac{\partial N_i}{\partial \xi} x_i & \sum \frac{\partial N_i}{\partial \xi} y_i \\ \sum \frac{\partial N_i}{\partial \eta} x_i & \sum \frac{\partial N_i}{\partial \eta} y_i \end{bmatrix}$

The inverse of the Jacobian matrix, $[J]^{-1}$, is needed for the transformation of derivatives.

**Determinant of the Jacobian (det[J]):**

The determinant of the Jacobian, $|J|$, is crucial for changing the integration variable from $dx \, dy$ to $d\xi \, d\eta$.

$dx \, dy = |J| \, d\xi \, d\eta$

**Important Points:**

*   The Jacobian matrix and its determinant vary across the element for non-linear mapping (curved elements).
*   $|J|$ must be non-zero for a valid transformation. If $|J|=0$, it indicates a degenerate element.
*   $|J|$ must be positive for a unique mapping.

**3D Example:**

$[J] = \begin{bmatrix} \frac{\partial x}{\partial \xi} & \frac{\partial y}{\partial \xi} & \frac{\partial z}{\partial \xi} \\ \frac{\partial x}{\partial \eta} & \frac{\partial y}{\partial \eta} & \frac{\partial z}{\partial \eta} \\ \frac{\partial x}{\partial \zeta} & \frac{\partial y}{\partial \zeta} & \frac{\partial z}{\partial \zeta} \end{bmatrix}$

$dx \, dy \, dz = |J| \, d\xi \, d\eta \, d\zeta$

---

### 5. Formulation of Element Matrices

The isoparametric concept is used to formulate the element stiffness matrix $[k^e]$ and element load vector $\{f^e\}$ for arbitrary shapes. This involves transforming the integrals from global coordinates to local coordinates using the Jacobian.

**General Weak Form and Element Matrices:**

The general form of the weak form (Galerkin method) for a linear problem often leads to integrals of the form:

$\int_{\Omega^e} B^T D B \, dV$ (for stiffness matrix)
$\int_{\Omega^e} N^T f \, dV$ (for load vector)

where $B$ is the strain-displacement matrix, $D$ is the material property matrix, $N$ are shape functions, and $f$ is the load.

**Isoparametric Transformation for Integrals:**

*   **Stiffness Matrix:**
    $[k^e] = \int_{-1}^{1} \int_{-1}^{1} B(\xi, \eta)^T D B(\xi, \eta) |J| \, d\xi \, d\eta$ (for 2D quadrilateral)

*   **Load Vector (Body Forces):**
    $\{f^e_{body}\} = \int_{-1}^{1} \int_{-1}^{1} N(\xi, \eta)^T f \, |J| \, d\xi \, d\eta$

*   **Load Vector (Traction Forces on Boundary):**
    $\{f^e_{traction}\} = \int_{\Gamma^e} N(\xi, \eta)^T t \, ds$
    This integral also needs transformation. For an edge on the boundary where $ds$ is the arc length, using local coordinates and the Jacobian for the edge:
    $ds = \sqrt{(\frac{\partial x}{\partial \xi})^2 + (\frac{\partial y}{\partial \xi})^2} \, d\xi$ (if mapping is along $\xi$ direction on an edge)

**Strain-Displacement Matrix (B):**

The strain-displacement matrix $B$ relates the nodal displacements $\{u^e\}$ to the strains $\{\epsilon\}$. In 2D, for plane stress/strain:

$\{\epsilon\} = \begin{Bmatrix} \epsilon_x \\ \epsilon_y \\ \gamma_{xy} \end{Bmatrix}$
$\{u^e\} = \begin{Bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \\ \vdots \\ u_N \\ v_N \end{Bmatrix}$

$\{\epsilon\} = [B] \{u^e\}$

The components of the $B$ matrix are derived from the strain-displacement relations and the derivatives of the shape functions in global coordinates:

$\epsilon_x = \frac{\partial u}{\partial x}$
$\epsilon_y = \frac{\partial v}{\partial y}$
$\gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}$

Since $u = \sum N_i u_i$ and $v = \sum N_i v_i$, we need $\frac{\partial N_i}{\partial x}$ and $\frac{\partial N_i}{\partial y}$. Using the Jacobian inverse:

$\begin{Bmatrix} \frac{\partial N_i}{\partial x} \\ \frac{\partial N_i}{\partial y} \end{Bmatrix} = [J]^{-1} \begin{Bmatrix} \frac{\partial N_i}{\partial \xi} \\ \frac{\partial N_i}{\partial \eta} \end{Bmatrix}$

Let $[J]^{-1} = \begin{bmatrix} J_{11} & J_{12} \\ J_{21} & J_{22} \end{bmatrix}$. Then:
$\frac{\partial N_i}{\partial x} = J_{11} \frac{\partial N_i}{\partial \xi} + J_{12} \frac{\partial N_i}{\partial \eta}$
$\frac{\partial N_i}{\partial y} = J_{21} \frac{\partial N_i}{\partial \xi} + J_{22} \frac{\partial N_i}{\partial \eta}$

The $B$ matrix will be assembled using these derivatives. For example, for the $i$-th node's contribution to the $B$ matrix:

$B_i = \begin{bmatrix} \frac{\partial N_i}{\partial x} & 0 \\ 0 & \frac{\partial N_i}{\partial y} \\ \frac{\partial N_i}{\partial y} & \frac{\partial N_i}{\partial x} \end{bmatrix}$

The full $B$ matrix is a sum of $B_i$ for all nodes.

---

### 6. Numerical Integration: Gaussian Quadrature

**Key Concept:** For most isoparametric elements, the integrand involving shape functions, Jacobian, and material properties does not have a simple analytical solution. Therefore, numerical integration techniques are required. Gaussian Quadrature is highly effective for this.

**Gaussian Quadrature Formula:**

$\int_{a}^{b} f(x) dx \approx \sum_{i=1}^{n} w_i f(x_i)$

where $x_i$ are the Gauss points and $w_i$ are the corresponding weights.

For integration over the local coordinate system (e.g., from -1 to 1):

$\int_{-1}^{1} f(\xi) d\xi \approx \sum_{i=1}^{n} w_i f(\xi_i)$

**2D Integration:**

$\int_{-1}^{1} \int_{-1}^{1} f(\xi, \eta) |J| \, d\xi \, d\eta \approx \sum_{i=1}^{n_\xi} \sum_{j=1}^{n_\eta} w_i w_j f(\xi_i, \eta_j) |J(\xi_i, \eta_j)|$

where $n_\xi$ and $n_\eta$ are the number of Gauss points in each direction.

**Common Gauss Point Schemes:**

| Number of Gauss Points per Direction (n) | Integration Order Achieved | Gauss Points (ξ) | Weights (w) |
| :------------------------------------- | :------------------------- | :--------------- | :---------- |
| 1                                      | Linear                     | 0                | 2           |
| 2                                      | Cubic                      | -1/√3, 1/√3      | 1, 1        |
| 3                                      | Quintic                    | -√(3/5), 0, √(3/5) | 5/9, 8/9, 5/9 |

**Choice of Gauss Points:**

*   The number of Gauss points must be sufficient to accurately integrate the integrand.
*   For an element of polynomial order $p$, the integrand (e.g., $B^T D B |J|$) will be a polynomial of order up to $2p$ (or more, depending on $|J|$).
*   To integrate a polynomial of degree $m$, $n$ Gauss points are needed, where $2n-1 \ge m$.

**Example:**

*   **Linear Quadrilateral (4-node):** Shape functions are linear. $B$ matrix involves derivatives of linear functions, so $B$ is constant. $B^TDB$ is constant. $|J|$ can be linear. The product can be quadratic. Thus, **2x2 Gaussian Quadrature** is usually sufficient. (Reddy, Cook)
*   **Quadratic Quadrilateral (8-node):** Shape functions are quadratic. $B$ matrix involves derivatives of quadratic functions, so $B$ is linear. $B^TDB$ is quadratic. $|J|$ can be linear. The product can be cubic. Thus, **3x3 Gaussian Quadrature** is typically required to capture the strain variation accurately. (Bhavikatti, Fish & Belytschko)

**Lumping vs. Fully Integrated Elements:**

*   **Fully Integrated Elements:** Use sufficient Gauss points (as determined above) to accurately integrate. These elements are generally more accurate but computationally more expensive.
*   **Reduced Integration:** Using fewer Gauss points than required for exact integration can sometimes alleviate issues like locking (especially in elements with reduced degrees of freedom or for certain material behaviors like nearly incompressible elasticity). However, it can lead to spurious zero-energy modes (hourglassing modes).

---

### 7. Advantages and Disadvantages of Isoparametric Elements

**Advantages:**

*   **Geometric Accuracy:** Can represent curved boundaries and complex shapes accurately.
*   **Unified Formulation:** Simplifies the coding and conceptual understanding of FEM.
*   **Versatility:** Applicable to 1D, 2D, and 3D problems with various element types and orders.
*   **Improved Accuracy:** Can achieve higher accuracy with fewer elements compared to Lagrangian elements for the same problem.

**Disadvantages:**

*   **Increased Complexity:** Derivatives and Jacobian calculations are more involved.
*   **Computational Cost:** Numerical integration (Gaussian Quadrature) adds computational overhead.
*   **Potential for Distortion:** Ill-conditioning of the Jacobian can occur for highly distorted elements, leading to numerical instability.
*   **Hourglassing:** Reduced integration schemes can introduce spurious zero-energy modes.

---

### 8. Examples and Practice Questions

**Example 1: Bilinear Quadrilateral Element**

Consider a 4-node quadrilateral element with nodes at:
Node 1: (-1, -1)
Node 2: (1, -1)
Node 3: (1, 1)
Node 4: (-1, 1)

Local coordinates $(\xi, \eta)$ range from -1 to 1.
Shape functions:
$N_1 = \frac{1}{4}(1-\xi)(1-\eta)$
$N_2 = \frac{1}{4}(1+\xi)(1-\eta)$
$N_3 = \frac{1}{4}(1+\xi)(1+\eta)$
$N_4 = \frac{1}{4}(1-\xi)(1+\eta)$

Global coordinates mapping:
$x = N_1 x_1 + N_2 x_2 + N_3 x_3 + N_4 x_4$
$y = N_1 y_1 + N_2 y_2 + N_3 y_3 + N_4 y_4$

For this specific element, the mapping is linear, so $x=\xi$ and $y=\eta$.
Jacobian matrix:
$\frac{\partial x}{\partial \xi} = \sum \frac{\partial N_i}{\partial \xi} x_i$
$\frac{\partial N_1}{\partial \xi} = -\frac{1}{4}(1-\eta)$
$\frac{\partial N_2}{\partial \xi} = +\frac{1}{4}(1-\eta)$
$\frac{\partial N_3}{\partial \xi} = +\frac{1}{4}(1+\eta)$
$\frac{\partial N_4}{\partial \xi} = -\frac{1}{4}(1+\eta)$

$\frac{\partial x}{\partial \xi} = (-\frac{1}{4}(1-\eta)x_1 + \frac{1}{4}(1-\eta)x_2 + \frac{1}{4}(1+\eta)x_3 - \frac{1}{4}(1+\eta)x_4)$
For $x_1=-1, x_2=1, x_3=1, x_4=-1$:
$\frac{\partial x}{\partial \xi} = (-\frac{1}{4}(1-\eta)(-1) + \frac{1}{4}(1-\eta)(1) + \frac{1}{4}(1+\eta)(1) - \frac{1}{4}(1+\eta)(-1))$
$= \frac{1}{4}(1-\eta) + \frac{1}{4}(1-\eta) + \frac{1}{4}(1+\eta) + \frac{1}{4}(1+\eta)$
$= \frac{1}{4}(1-\eta+1-\eta+1+\eta+1+\eta) = \frac{1}{4}(4) = 1$

Similarly, $\frac{\partial x}{\partial \eta} = 0$, $\frac{\partial y}{\partial \xi} = 0$, $\frac{\partial y}{\partial \eta} = 1$.
So, $[J] = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$. $|J| = 1$.
This shows that for a square parent element, the Jacobian is constant.

**Example 2: Quadrilateral Element with Curved Sides**

Consider a 4-node quadrilateral element with nodes at:
Node 1: (0,0)
Node 2: (2,0)
Node 3: (3,2)
Node 4: (1,2)

The mapping from local $(\xi, \eta)$ to global $(x, y)$ would use the shape functions $N_i(\xi, \eta)$ and the nodal coordinates $(x_i, y_i)$. For example, at the center of the element $(\xi=0, \eta=0)$, $N_i(0,0) = 1/4$.
$x = \frac{1}{4}(x_1+x_2+x_3+x_4) = \frac{1}{4}(0+2+3+1) = \frac{6}{4} = 1.5$
$y = \frac{1}{4}(y_1+y_2+y_3+y_4) = \frac{1}{4}(0+0+2+2) = \frac{4}{4} = 1$
The point (1.5, 1) in global coordinates corresponds to the point (0,0) in local coordinates.

To calculate the Jacobian at this point, we would first need to find the derivatives of the shape functions $\frac{\partial N_i}{\partial \xi}$ and $\frac{\partial N_i}{\partial \eta}$. For a general quadrilateral, these are:
$\frac{\partial N_1}{\partial \xi} = -\frac{1}{4}(1-\eta)$, $\frac{\partial N_1}{\partial \eta} = -\frac{1}{4}(1-\xi)$
$\frac{\partial N_2}{\partial \xi} = \frac{1}{4}(1-\eta)$, $\frac{\partial N_2}{\partial \eta} = -\frac{1}{4}(1+\xi)$
$\frac{\partial N_3}{\partial \xi} = \frac{1}{4}(1+\eta)$, $\frac{\partial N_3}{\partial \eta} = \frac{1}{4}(1+\xi)$
$\frac{\partial N_4}{\partial \xi} = -\frac{1}{4}(1+\eta)$, $\frac{\partial N_4}{\partial \eta} = \frac{1}{4}(1-\xi)$

Then calculate $\frac{\partial x}{\partial \xi}$, $\frac{\partial x}{\partial \eta}$, $\frac{\partial y}{\partial \xi}$, $\frac{\partial y}{\partial \eta}$ using the nodal coordinates.
For instance, at $(\xi, \eta) = (0,0)$:
$\frac{\partial N_1}{\partial \xi}|_{(0,0)} = -1/4$, $\frac{\partial N_1}{\partial \eta}|_{(0,0)} = -1/4$
$\frac{\partial N_2}{\partial \xi}|_{(0,0)} = 1/4$, $\frac{\partial N_2}{\partial \eta}|_{(0,0)} = -1/4$
$\frac{\partial N_3}{\partial \xi}|_{(0,0)} = 1/4$, $\frac{\partial N_3}{\partial \eta}|_{(0,0)} = 1/4$
$\frac{\partial N_4}{\partial \xi}|_{(0,0)} = -1/4$, $\frac{\partial N_4}{\partial \eta}|_{(0,0)} = 1/4$

$x_1=0, y_1=0$; $x_2=2, y_2=0$; $x_3=3, y_3=2$; $x_4=1, y_4=2$

$\frac{\partial x}{\partial \xi}|_{(0,0)} = \sum \frac{\partial N_i}{\partial \xi}|_{(0,0)} x_i = (-\frac{1}{4})(0) + (\frac{1}{4})(2) + (\frac{1}{4})(3) + (-\frac{1}{4})(1) = 0 + 0.5 + 0.75 - 0.25 = 1$
$\frac{\partial x}{\partial \eta}|_{(0,0)} = \sum \frac{\partial N_i}{\partial \eta}|_{(0,0)} x_i = (-\frac{1}{4})(0) + (-\frac{1}{4})(2) + (\frac{1}{4})(3) + (\frac{1}{4})(1) = 0 - 0.5 + 0.75 + 0.25 = 0.5$
$\frac{\partial y}{\partial \xi}|_{(0,0)} = \sum \frac{\partial N_i}{\partial \xi}|_{(0,0)} y_i = (-\frac{1}{4})(0) + (\frac{1}{4})(0) + (\frac{1}{4})(2) + (-\frac{1}{4})(2) = 0 + 0 + 0.5 - 0.5 = 0$
$\frac{\partial y}{\partial \eta}|_{(0,0)} = \sum \frac{\partial N_i}{\partial \eta}|_{(0,0)} y_i = (-\frac{1}{4})(0) + (-\frac{1}{4})(0) + (\frac{1}{4})(2) + (\frac{1}{4})(2) = 0 + 0 + 0.5 + 0.5 = 1$

$[J]_{(0,0)} = \begin{bmatrix} 1 & 0.5 \\ 0 & 1 \end{bmatrix}$. $|J|_{(0,0)} = 1$.

The inverse Jacobian is:
$[J]^{-1} = \frac{1}{1} \begin{bmatrix} 1 & -0.5 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & -0.5 \\ 0 & 1 \end{bmatrix}$

Now, derivatives of shape functions in global coordinates can be found. For example:
$\frac{\partial N_1}{\partial x}|_{(0,0)} = \frac{\partial N_1}{\partial \xi}|_{(0,0)} \frac{\partial x}{\partial \xi} + \frac{\partial N_1}{\partial \eta}|_{(0,0)} \frac{\partial y}{\partial \xi} = (-1/4)(1) + (-1/4)(0) = -1/4$
$\frac{\partial N_1}{\partial y}|_{(0,0)} = \frac{\partial N_1}{\partial \xi}|_{(0,0)} \frac{\partial x}{\partial \eta} + \frac{\partial N_1}{\partial \eta}|_{(0,0)} \frac{\partial y}{\partial \eta} = (-1/4)(0.5) + (-1/4)(1) = -0.125 - 0.25 = -0.375$
Wait, mistake in formula application.
Corrected:
$\{\frac{\partial N_i}{\partial x}\} = [J]^{-1} \{\frac{\partial N_i}{\partial \xi}\}$
$\{\frac{\partial N_i}{\partial y}\}$

$\begin{Bmatrix} \frac{\partial N_1}{\partial x} \\ \frac{\partial N_1}{\partial y} \end{Bmatrix}_{(0,0)} = \begin{bmatrix} 1 & -0.5 \\ 0 & 1 \end{bmatrix} \begin{Bmatrix} \frac{\partial N_1}{\partial \xi} \\ \frac{\partial N_1}{\partial \eta} \end{Bmatrix}_{(0,0)} = \begin{bmatrix} 1 & -0.5 \\ 0 & 1 \end{bmatrix} \begin{Bmatrix} -1/4 \\ -1/4 \end{Bmatrix} = \begin{Bmatrix} (-1/4) - (-0.5)(-1/4) \\ (1)(-1/4) \end{Bmatrix} = \begin{Bmatrix} -1/4 - 1/8 \\ -1/4 \end{Bmatrix} = \begin{Bmatrix} -3/8 \\ -1/4 \end{Bmatrix}$
So, $\frac{\partial N_1}{\partial x}|_{(0,0)} = -3/8$ and $\frac{\partial N_1}{\partial y}|_{(0,0)} = -1/4$.

This demonstrates how derivatives in global coordinates are calculated for a general quadrilateral.

---

### Practice Questions

1.  **Concept Check:**
    *   What is the fundamental difference between isoparametric, subparametric, and superparametric elements?
    *   Why are isoparametric elements preferred for problems with curved boundaries?
    *   State the Kronecker delta property for shape functions.
    *   What is the role of the Jacobian matrix in isoparametric formulations?
    *   Why is Gaussian Quadrature commonly used in FEM for isoparametric elements?

2.  **Shape Function Calculation:**
    For a 3-node triangular element, list the shape functions $N_1, N_2, N_3$ in terms of local coordinates $\xi, \eta$. (Referencing Bhavikatti, Segerlind)

3.  **Jacobian Calculation:**
    Consider a 4-node quadrilateral element with nodes at:
    Node 1: (0,0)
    Node 2: (2,0)
    Node 3: (2,2)
    Node 4: (0,2)
    This is a square in global coordinates, so mapping is $x=\xi+2$, $y=\eta+2$.
    Calculate the Jacobian matrix and its determinant at the center of the element $(\xi=0, \eta=0)$.

4.  **Jacobian Calculation for a Skewed Element:**
    Consider a 4-node quadrilateral element with nodes at:
    Node 1: (0,0)
    Node 2: (3,0)
    Node 3: (4,2)
    Node 4: (1,2)
    Calculate the Jacobian matrix and its determinant at the center of the element $(\xi=0, \eta=0)$. (Assume standard bilinear shape functions).

5.  **Numerical Integration:**
    Evaluate the integral $\int_{-1}^{1} \int_{-1}^{1} (\xi^2 + \eta^2) \, d\xi \, d\eta$ using:
    a) 1x1 Gaussian Quadrature
    b) 2x2 Gaussian Quadrature
    Compare the results with the exact analytical solution.

---

### Answers to Practice Questions

1.  **Concept Check Answers:**
    *   **Isoparametric:** Same shape functions for geometry and field variable.
    *   **Subparametric:** Shape functions for geometry < Shape functions for field variable.
    *   **Superparametric:** Shape functions for geometry > Shape functions for field variable.
    *   **Why preferred:** Accurately represent curved boundaries and complex geometries.
    *   **Kronecker delta property:** $N_i(\xi_j, \eta_j) = \delta_{ij}$ (equal to 1 at its own node and 0 at other nodes).
    *   **Role of Jacobian:** To transform derivatives from local to global coordinates and to change integration variables from $dx \, dy$ to $d\xi \, d\eta$.
    *   **Why Gaussian Quadrature:** To accurately integrate polynomial functions arising from the formulation, especially when the Jacobian is not constant.

2.  **Shape Function Calculation (3-node Triangle):**
    Let the vertices of the triangle be (0,0), (1,0), (0,1) in a coordinate system (L1, L2, L3) where L1+L2+L3=1. If using $(\xi, \eta)$, the mapping would be more complex. Assuming a standard formulation with $\xi, \eta$ where vertices correspond to specific $(\xi, \eta)$ values (e.g., (0,0), (1,0), (0,1) for a specific type of triangle):
    $N_1(\xi, \eta) = 1 - \xi - \eta$
    $N_2(\xi, \eta) = \xi$
    $N_3(\xi, \eta) = \eta$
    (Note: The precise form of $N_i(\xi, \eta)$ depends on the definition of the $(\xi, \eta)$ system and its correspondence to the element's vertices).

3.  **Jacobian Calculation (Square Element):**
    Nodes: (0,0), (2,0), (2,2), (0,2)
    Shape functions $N_i(\xi, \eta)$:
    $N_1 = \frac{1}{4}(1-\xi)(1-\eta)$, $N_2 = \frac{1}{4}(1+\xi)(1-\eta)$, $N_3 = \frac{1}{4}(1+\xi)(1+\eta)$, $N_4 = \frac{1}{4}(1-\xi)(1+\eta)$
    $x_1=0, y_1=0$; $x_2=2, y_2=0$; $x_3=2, y_3=2$; $x_4=0, y_4=2$

    At $(\xi, \eta) = (0,0)$:
    $\frac{\partial N_1}{\partial \xi}|_{(0,0)} = -1/4$, $\frac{\partial N_1}{\partial \eta}|_{(0,0)} = -1/4$
    $\frac{\partial N_2}{\partial \xi}|_{(0,0)} = 1/4$, $\frac{\partial N_2}{\partial \eta}|_{(0,0)} = -1/4$
    $\frac{\partial N_3}{\partial \xi}|_{(0,0)} = 1/4$, $\frac{\partial N_3}{\partial \eta}|_{(0,0)} = 1/4$
    $\frac{\partial N_4}{\partial \xi}|_{(0,0)} = -1/4$, $\frac{\partial N_4}{\partial \eta}|_{(0,0)} = 1/4$

    $\frac{\partial x}{\partial \xi}|_{(0,0)} = \sum \frac{\partial N_i}{\partial \xi}|_{(0,0)} x_i = (-\frac{1}{4})(0) + (\frac{1}{4})(2) + (\frac{1}{4})(2) + (-\frac{1}{4})(0) = 0 + 0.5 + 0.5 + 0 = 1$
    $\frac{\partial x}{\partial \eta}|_{(0,0)} = \sum \frac{\partial N_i}{\partial \eta}|_{(0,0)} x_i = (-\frac{1}{4})(0) + (-\frac{1}{4})(2) + (\frac{1}{4})(2) + (\frac{1}{4})(0) = 0 - 0.5 + 0.5 + 0 = 0$
    $\frac{\partial y}{\partial \xi}|_{(0,0)} = \sum \frac{\partial N_i}{\partial \xi}|_{(0,0)} y_i = (-\frac{1}{4})(0) + (\frac{1}{4})(0) + (\frac{1}{4})(2) + (-\frac{1}{4})(2) = 0 + 0 + 0.5 - 0.5 = 0$
    $\frac{\partial y}{\partial \eta}|_{(0,0)} = \sum \frac{\partial N_i}{\partial \eta}|_{(0,0)} y_i = (-\frac{1}{4})(0) + (-\frac{1}{4})(0) + (\frac{1}{4})(2) + (\frac{1}{4})(2) = 0 + 0 + 0.5 + 0.5 = 1$

    $[J]_{(0,0)} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$
    $|J|_{(0,0)} = 1$

4.  **Jacobian Calculation (Skewed Element):**
    Nodes: (0,0), (3,0), (4,2), (1,2)
    $x_1=0, y_1=0$; $x_2=3, y_2=0$; $x_3=4, y_3=2$; $x_4=1, y_4=2$

    At $(\xi, \eta) = (0,0)$:
    Derivatives of $N_i$ are the same as in Q3.

    $\frac{\partial x}{\partial \xi}|_{(0,0)} = \sum \frac{\partial N_i}{\partial \xi}|_{(0,0)} x_i = (-\frac{1}{4})(0) + (\frac{1}{4})(3) + (\frac{1}{4})(4) + (-\frac{1}{4})(1) = 0 + 0.75 + 1 - 0.25 = 1.5$
    $\frac{\partial x}{\partial \eta}|_{(0,0)} = \sum \frac{\partial N_i}{\partial \eta}|_{(0,0)} x_i = (-\frac{1}{4})(0) + (-\frac{1}{4})(3) + (\frac{1}{4})(4) + (\frac{1}{4})(1) = 0 - 0.75 + 1 + 0.25 = 0.5$
    $\frac{\partial y}{\partial \xi}|_{(0,0)} = \sum \frac{\partial N_i}{\partial \xi}|_{(0,0)} y_i = (-\frac{1}{4})(0) + (\frac{1}{4})(0) + (\frac{1}{4})(2) + (-\frac{1}{4})(2) = 0 + 0 + 0.5 - 0.5 = 0$
    $\frac{\partial y}{\partial \eta}|_{(0,0)} = \sum \frac{\partial N_i}{\partial \eta}|_{(0,0)} y_i = (-\frac{1}{4})(0) + (-\frac{1}{4})(0) + (\frac{1}{4})(2) + (\frac{1}{4})(2) = 0 + 0 + 0.5 + 0.5 = 1$

    $[J]_{(0,0)} = \begin{bmatrix} 1.5 & 0.5 \\ 0 & 1 \end{bmatrix}$
    $|J|_{(0,0)} = (1.5)(1) - (0.5)(0) = 1.5$

5.  **Numerical Integration:**
    Function $f(\xi, \eta) = \xi^2 + \eta^2$.
    Exact Analytical Solution:
    $\int_{-1}^{1} \int_{-1}^{1} (\xi^2 + \eta^2) \, d\xi \, d\eta = \int_{-1}^{1} [\frac{\xi^3}{3} + \xi\eta^2]_{-1}^{1} \, d\eta$
    $= \int_{-1}^{1} [(\frac{1}{3} + \eta^2) - (-\frac{1}{3} - \eta^2)] \, d\eta = \int_{-1}^{1} (\frac{2}{3} + 2\eta^2) \, d\eta$
    $= [\frac{2}{3}\eta + \frac{2\eta^3}{3}]_{-1}^{1} = (\frac{2}{3} + \frac{2}{3}) - (-\frac{2}{3} - \frac{2}{3}) = \frac{4}{3} - (-\frac{4}{3}) = \frac{8}{3} \approx 2.6667$

    a) **1x1 Gaussian Quadrature:**
    Gauss point: $\xi_1=0, \eta_1=0$. Weight $w_1=2$.
    Integral $\approx w_1 w_1 f(0,0) |J|$
    Assuming $|J|=1$ for simplicity for this integration exercise.
    Integral $\approx (2)(2) (0^2 + 0^2) = 0$. (Very inaccurate for this function).

    b) **2x2 Gaussian Quadrature:**
    Gauss points: $(\pm 1/\sqrt{3}, \pm 1/\sqrt{3})$. Weights $w=1$.
    $f(\xi, \eta) = \xi^2 + \eta^2$.
    The integral is a sum over 4 points:
    $I \approx \sum_{i=1}^{2} \sum_{j=1}^{2} w_i w_j (\xi_i^2 + \eta_j^2) |J|$
    Let $\xi_1 = -1/\sqrt{3}, \xi_2 = 1/\sqrt{3}$, $\eta_1 = -1/\sqrt{3}, \eta_2 = 1/\sqrt{3}$.
    $\xi_1^2 = 1/3$, $\xi_2^2 = 1/3$. $\eta_1^2 = 1/3$, $\eta_2^2 = 1/3$.
    All $f(\xi_i, \eta_j)$ will be $1/3 + 1/3 = 2/3$.
    Weights are $w_1=1, w_2=1$.
    Integral $\approx (1)(1)(2/3) + (1)(1)(2/3) + (1)(1)(2/3) + (1)(1)(2/3)$
    $= 4 \times (1 \times 1 \times 2/3) = 8/3 \approx 2.6667$. (Exact for quadratic and cubic polynomials).

---

### Important Points to Remember

*   **Same Interpolation:** Isoparametric elements use the same shape functions for geometric description and field variable interpolation.
*   **Local Coordinates:** Transformations to local $(\xi, \eta, \zeta)$ coordinates simplify integration and formulation.
*   **Jacobian is Key:** The Jacobian matrix and its determinant are essential for mapping between coordinate systems and changing integration variables.
*   **Numerical Integration:** Gaussian Quadrature is crucial for evaluating integrals in isoparametric formulations.
*   **Order Matters:** The order of the element dictates the complexity of the shape functions and the required number of Gauss points.
*   **Degeneracy:** Avoid highly distorted elements as they can lead to singular or ill-conditioned Jacobians.
*   **Accuracy vs. Cost:** Choose the element order and number of Gauss points carefully to balance accuracy requirements with computational cost.

---
This concludes the study notes for Isoparametric Elements. Ensure to refer to your textbooks for detailed derivations and specific examples related to different element types.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
