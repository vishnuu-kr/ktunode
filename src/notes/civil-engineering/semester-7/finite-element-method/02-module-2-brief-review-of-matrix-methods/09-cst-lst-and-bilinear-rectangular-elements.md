---
title: "CST, LST and bilinear rectangular elements"
subject: "FINITE ELEMENT METHOD"
module: "Module 2: Brief review of matrix methods"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba8116d5"
status: "completed"
scrapedAt: "2026-05-20T18:58:57.935Z"
---
# Finite Element Method: Module 2 - Brief Review of Matrix Methods

## Topic: CST, LST and Bilinear Rectangular Elements

This module provides a foundational understanding of common element types used in the Finite Element Method (FEM). We will explore the Constant Strain Triangle (CST), Linear Strain Triangle (LST), and Bilinear Rectangular (or Serendipity) elements, focusing on their shape functions, stiffness matrices, and basic properties.

---

### 1. Introduction to Elements in FEM

*   **What are Elements?** In FEM, a complex continuous domain (like a physical object) is discretized into smaller, simpler subdomains called "elements."
*   **Nodes:** Elements are connected at discrete points called "nodes." These nodes are where the unknown variables (e.g., displacements, temperatures) are calculated.
*   **Shape Functions (or Interpolation Functions):** Within each element, the variation of the unknown variable is approximated using shape functions. These functions are defined in terms of the nodal values of the unknown variable and the element's nodal coordinates.
*   **Why Different Element Types?** Different element types have varying complexity, accuracy, and computational cost. The choice of element depends on the problem being solved, desired accuracy, and available computational resources.

---

### 2. Constant Strain Triangle (CST) Element

The CST is the simplest type of triangular element used in structural analysis. It's often referred to as the "3-node triangular element."

#### 2.1. Geometry and Nodes

*   **Shape:** A triangle.
*   **Number of Nodes:** 3.
*   **Node Numbering:** Typically numbered 1, 2, and 3 counter-clockwise.
*   **Degrees of Freedom (DOFs):** In 2D structural analysis, each node typically has 2 DOFs: horizontal displacement ($u$) and vertical displacement ($v$). Therefore, a CST element has $3 \times 2 = 6$ DOFs.

#### 2.2. Displacement Approximation

*   The displacements ($u$ and $v$) within the CST element are approximated using linear polynomials.
*   $u(x, y) = \alpha_1 + \alpha_2 x + \alpha_3 y$
*   $v(x, y) = \beta_1 + \beta_2 x + \beta_3 y$
*   These polynomials have 6 coefficients ($\alpha_1, \alpha_2, \alpha_3, \beta_1, \beta_2, \beta_3$). These coefficients are determined by enforcing the displacement field at the element's three nodes.

#### 2.3. Shape Functions ($N_i$)

Shape functions $N_i(x, y)$ relate the displacement at any point $(x, y)$ within the element to the nodal displacements. They have the property that $N_i$ is 1 at node $i$ and 0 at all other nodes.

For a CST element with nodes $(x_1, y_1)$, $(x_2, y_2)$, and $(x_3, y_3)$:

*   $u(x, y) = N_1 u_1 + N_2 u_2 + N_3 u_3$
*   $v(x, y) = N_1 v_1 + N_2 v_2 + N_3 v_3$

The shape functions are given by:

*   $N_1 = \frac{1}{2A} (a_1 + b_1 x + c_1 y)$
*   $N_2 = \frac{1}{2A} (a_2 + b_2 x + c_2 y)$
*   $N_3 = \frac{1}{2A} (a_3 + b_3 x + c_3 y)$

where:
*   $A$ is the area of the triangle.
*   $2A = \det \begin{pmatrix} 1 & x_1 & y_1 \\ 1 & x_2 & y_2 \\ 1 & x_3 & y_3 \end{pmatrix} = (x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2))$
*   $a_1 = x_2 y_3 - x_3 y_2$, $b_1 = y_2 - y_3$, $c_1 = x_3 - x_2$
*   $a_2 = x_3 y_1 - x_1 y_3$, $b_2 = y_3 - y_1$, $c_2 = x_1 - x_3$
*   $a_3 = x_1 y_2 - x_2 y_1$, $b_3 = y_1 - y_2$, $c_3 = x_2 - x_1$

**Key Property of CST Shape Functions:** The sum of the shape functions is always 1: $N_1 + N_2 + N_3 = 1$. This ensures constant displacement if all nodal displacements are the same (rigid body motion).

#### 2.4. Strain-Displacement Matrix ($[B]$)

The strains within the element are derived from the displacement field. For a CST, the strains are assumed to be constant.

*   Strain-displacement relations (for plane stress/strain):
    *   $\epsilon_x = \frac{\partial u}{\partial x}$
    *   $\epsilon_y = \frac{\partial v}{\partial y}$
    *   $\gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}$

*   Substituting the shape function expressions for $u$ and $v$:
    *   $\epsilon_x = (b_1/2A) u_1 + (b_2/2A) u_2 + (b_3/2A) u_3$
    *   $\epsilon_y = (c_1/2A) v_1 + (c_2/2A) v_2 + (c_3/2A) v_3$
    *   $\gamma_{xy} = (c_1/2A) u_1 + (c_2/2A) u_2 + (c_3/2A) u_3 + (b_1/2A) v_1 + (b_2/2A) v_2 + (b_3/2A) v_3$

*   In matrix form, $\{\epsilon\} = [B] \{\delta\}_{el}$:
    *   $\{\epsilon\} = \begin{Bmatrix} \epsilon_x \\ \epsilon_y \\ \gamma_{xy} \end{Bmatrix}$
    *   $\{\delta\}_{el} = \begin{Bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \\ u_3 \\ v_3 \end{Bmatrix}$

    The $[B]$ matrix for a CST element is:
    $
    [B]_{el} = \frac{1}{2A} \begin{pmatrix}
    b_1 & 0 & b_2 & 0 & b_3 & 0 \\
    0 & c_1 & 0 & c_2 & 0 & c_3 \\
    c_1 & b_1 & c_2 & b_2 & c_3 & b_3
    \end{pmatrix}
    $

#### 2.5. Element Stiffness Matrix ($[k]_{el}$)

The element stiffness matrix relates the nodal forces to nodal displacements: $\{\textrm{F}\}_{el} = [k]_{el} \{\delta\}_{el}$.

*   It is computed using the formula: $[k]_{el} = \int_V [B]^T [D] [B] dV$.
*   For a 2D element of constant thickness $t$: $[k]_{el} = t \int_A [B]^T [D] [B] dA$.
*   Since $[B]$ and $[D]$ are constant for a CST, the integration simplifies:
    $[k]_{el} = A t [B]^T [D] [B]$

*   $[D]$ is the material constitutive matrix. For plane stress:
    $
    [D] = \frac{E}{1-\nu^2} \begin{pmatrix}
    1 & \nu & 0 \\
    \nu & 1 & 0 \\
    0 & 0 & \frac{1-\nu}{2}
    \end{pmatrix}
    $
    where $E$ is Young's modulus and $\nu$ is Poisson's ratio.

#### 2.6. Limitations of CST

*   **Constant Strain:** The CST assumes that the strains (and therefore stresses) are constant throughout the element. This is a significant simplification and can lead to inaccuracies, especially in regions with stress gradients.
*   **Drilling Degrees of Freedom:** CST elements are not suitable for problems involving "drilling" DOF (rotation about the in-plane axis) because their shape functions cannot represent pure bending.
*   **Lacks Patch Test:** CST elements fail the "patch test" for pure bending, meaning they cannot accurately represent a state of pure bending when assembled in a patch of elements. This is a fundamental limitation for many engineering problems.

---

### 3. Linear Strain Triangle (LST) Element

The LST, also known as the 6-node triangular element, is an improvement over the CST. It incorporates linear variations of strain.

#### 3.1. Geometry and Nodes

*   **Shape:** A triangle.
*   **Number of Nodes:** 6.
*   **Node Arrangement:** 3 nodes at the vertices and 3 nodes at the midpoints of the sides.
*   **DOFs:** $6 \times 2 = 12$ DOFs in 2D.

#### 3.2. Displacement Approximation

*   The displacements ($u$ and $v$) are approximated using quadratic polynomials.
*   $u(x, y) = c_1 + c_2 x + c_3 y + c_4 x^2 + c_5 y^2 + c_6 xy$
*   $v(x, y) = d_1 + d_2 x + d_3 y + d_4 x^2 + d_5 y^2 + d_6 xy$
*   These polynomials have 6 coefficients each, totaling 12 coefficients for $u$ and $v$. These are determined by the 12 nodal displacements.

#### 3.3. Shape Functions ($N_i$)

The shape functions for LST elements are quadratic and are constructed using Lagrange polynomials. For a node at a vertex, it's similar to CST, but for mid-side nodes, the function is zero at the vertices and non-zero along the side.

Let the natural coordinate system $(\xi, \eta)$ be used, with origin at the element centroid.
For vertex nodes, shape functions are linear. For mid-side nodes, they are quadratic.

The displacement field is expressed as:
*   $u(x, y) = \sum_{i=1}^6 N_i(x, y) u_i$
*   $v(x, y) = \sum_{i=1}^6 N_i(x, y) v_i$

The LST element is often formulated using natural coordinates $(\xi, \eta)$. The shape functions are derived based on the nodal locations in this system.

**Key Property of LST Shape Functions:** They are quadratic, allowing for linear strain variations.

#### 3.4. Strain-Displacement Matrix ($[B]$)

Since the displacement field is quadratic, the strains are linear.
*   $\epsilon_x = \frac{\partial u}{\partial x}$ (linear in $x, y$)
*   $\epsilon_y = \frac{\partial v}{\partial y}$ (linear in $x, y$)
*   $\gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}$ (linear in $x, y$)

The $[B]$ matrix for an LST element will contain terms linear in $x$ and $y$. Deriving the explicit form of $[B]$ involves taking derivatives of the quadratic shape functions. This is more complex than for CST.

#### 3.5. Element Stiffness Matrix ($[k]_{el}$)

*   $[k]_{el} = \int_V [B]^T [D] [B] dV$.
*   For a 2D element of thickness $t$: $[k]_{el} = t \int_A [B]^T [D] [B] dA$.
*   Since $[B]$ varies linearly with $x$ and $y$ and $[D]$ is constant, the integration is performed numerically (e.g., using Gaussian quadrature) or analytically by considering the variation.

#### 3.6. Advantages of LST over CST

*   **Can capture linear strain variations:** This leads to more accurate stress results.
*   **Passes the patch test for bending:** LST elements can accurately model bending behavior.
*   **Better for problems with stress gradients:** The improved approximation of displacement allows for better representation of how stresses change within an element.

---

### 4. Bilinear Rectangular Element (Quadrilateral Element)

The bilinear rectangular element is a four-node element used to discretize rectangular or near-rectangular domains. It's also often referred to as the 4-node quadrilateral element or Serendipity element (though strictly speaking, 4-node quadrilaterals are simpler than full Serendipity elements).

#### 4.1. Geometry and Nodes

*   **Shape:** A rectangle (or quadrilateral).
*   **Number of Nodes:** 4.
*   **Node Arrangement:** At the corners of the rectangle.
*   **DOFs:** $4 \times 2 = 8$ DOFs in 2D.

#### 4.2. Displacement Approximation

*   The displacements ($u$ and $v$) are approximated using bilinear polynomials.
*   $u(x, y) = \alpha_1 + \alpha_2 x + \alpha_3 y + \alpha_4 xy$
*   $v(x, y) = \beta_1 + \beta_2 x + \beta_3 y + \beta_4 xy$
*   These polynomials have 4 coefficients each, totaling 8 coefficients, which are determined by the 8 nodal displacements.

#### 4.3. Shape Functions ($N_i$)

Shape functions are defined using the natural coordinate system $(\xi, \eta)$, where the origin is at the center of the rectangle and the axes are aligned with the sides. $\xi = \frac{2x}{L}$ and $\eta = \frac{2y}{W}$ for a rectangle of length $L$ and width $W$.

The shape functions for the 4-node quadrilateral element are:

*   $N_1(\xi, \eta) = \frac{1}{4}(1-\xi)(1-\eta)$ (for node at $\xi=-1, \eta=-1$)
*   $N_2(\xi, \eta) = \frac{1}{4}(1+\xi)(1-\eta)$ (for node at $\xi=+1, \eta=-1$)
*   $N_3(\xi, \eta) = \frac{1}{4}(1+\xi)(1+\eta)$ (for node at $\xi=+1, \eta=+1$)
*   $N_4(\xi, \eta) = \frac{1}{4}(1-\xi)(1+\eta)$ (for node at $\xi=-1, \eta=+1$)

The displacement field is expressed as:
*   $u(x, y) = \sum_{i=1}^4 N_i(\xi, \eta) u_i$
*   $v(x, y) = \sum_{i=1}^4 N_i(\xi, \eta) v_i$

**Key Property of Bilinear Rectangular Shape Functions:** They are bilinear, ensuring that displacement is linear along each edge and constant at the corners. The sum of shape functions is 1, ensuring rigid body motion.

#### 4.4. Strain-Displacement Matrix ($[B]$)

The strains derived from bilinear shape functions are constant.

*   To derive $[B]$, we need to relate derivatives with respect to $x, y$ to derivatives with respect to $\xi, \eta$ using the Jacobian matrix.
    $
    \begin{Bmatrix} \frac{\partial}{\partial x} \\ \frac{\partial}{\partial y} \end{Bmatrix} = \frac{1}{J} \begin{pmatrix} \frac{\partial y}{\partial \eta} & -\frac{\partial y}{\partial \xi} \\ -\frac{\partial x}{\partial \eta} & \frac{\partial x}{\partial \xi} \end{pmatrix} \begin{Bmatrix} \frac{\partial}{\partial \xi} \\ \frac{\partial}{\partial \eta} \end{Bmatrix}
    $
    where $J = \frac{\partial x}{\partial \xi}\frac{\partial y}{\partial \eta} - \frac{\partial x}{\partial \eta}\frac{\partial y}{\partial \xi}$ is the determinant of the Jacobian.

*   For a rectangle aligned with axes, $x = \xi \frac{L}{2}$, $y = \eta \frac{W}{2}$.
    *   $\frac{\partial x}{\partial \xi} = \frac{L}{2}$, $\frac{\partial x}{\partial \eta} = 0$
    *   $\frac{\partial y}{\partial \xi} = 0$, $\frac{\partial y}{\partial \eta} = \frac{W}{2}$
    *   $J = \frac{L}{2} \frac{W}{2} = \frac{LW}{4}$

*   The derivatives of shape functions with respect to $x$ and $y$ are found, leading to the $[B]$ matrix. For a bilinear element, the strains $\epsilon_x, \epsilon_y, \gamma_{xy}$ are constant.

#### 4.5. Element Stiffness Matrix ($[k]_{el}$)

*   $[k]_{el} = \int_V [B]^T [D] [B] dV$.
*   For a 2D element of thickness $t$: $[k]_{el} = t \int_A [B]^T [D] [B] dA$.
*   Since $[B]$ and $[D]$ are constant, the integration is straightforward: $[k]_{el} = A t [B]^T [D] [B]$, where $A = LW$ is the area of the rectangle.

#### 4.6. Advantages of Bilinear Rectangular Elements

*   **Simpler to implement for rectangular meshes:** Well-suited for problems with rectangular boundaries.
*   **Can handle linear variation of displacement along edges.**
*   **Can capture linear bending:** Unlike CST, bilinear quadrilaterals can pass the patch test for pure bending.

#### 4.7. Limitations of Bilinear Rectangular Elements

*   **Constant Strain:** Similar to CST, they assume constant strain within the element, which can lead to inaccuracies in regions with significant strain gradients.
*   **Can exhibit "locking" behavior:** In certain situations (e.g., nearly incompressible materials or thin structures under bending), they can exhibit spurious stiffness that makes them overly stiff.

---

### 5. Comparison of Element Types

| Feature             | CST (3-node Triangle)          | LST (6-node Triangle)          | Bilinear Rectangular (4-node Quad) |
| :------------------ | :----------------------------- | :----------------------------- | :--------------------------------- |
| **Nodes**           | 3                              | 6                              | 4                                  |
| **DOFs (2D)**       | 6                              | 12                             | 8                                  |
| **Displacement Approx.** | Linear                         | Quadratic                      | Bilinear                           |
| **Strain Approx.**  | Constant                       | Linear                         | Constant                           |
| **Bending Capability** | Poor                           | Good                           | Good                               |
| **Patch Test (Bending)** | Fails                          | Passes                         | Passes                             |
| **Accuracy**        | Lowest                         | Higher                         | Moderate                           |
| **Computational Cost** | Lowest                         | Higher                         | Moderate                           |
| **Stress Result**   | Constant within element        | Varies linearly within element | Constant within element            |

---

### 6. Practice Questions and Exercises

**Question 1: CST Shape Functions**
For a CST element with nodes at $(0,0)$, $(2,0)$, and $(1,3)$, calculate the shape functions $N_1, N_2, N_3$ at the centroid of the triangle.

**Solution 1:**
First, calculate $2A$:
$2A = (0(0-3) + 2(3-0) + 1(0-0)) = 6$
$A = 3$

Now, calculate the coefficients $b_i$ and $c_i$:
Node 1: $(x_1, y_1) = (0,0)$
Node 2: $(x_2, y_2) = (2,0)$
Node 3: $(x_3, y_3) = (1,3)$

$b_1 = y_2 - y_3 = 0 - 3 = -3$
$c_1 = x_3 - x_2 = 1 - 2 = -1$

$b_2 = y_3 - y_1 = 3 - 0 = 3$
$c_2 = x_1 - x_3 = 0 - 1 = -1$

$b_3 = y_1 - y_2 = 0 - 0 = 0$
$c_3 = x_2 - x_1 = 2 - 0 = 2$

Shape function expressions:
$N_1 = \frac{1}{6} (a_1 + b_1 x + c_1 y) = \frac{1}{6} (a_1 - 3x - y)$
$N_2 = \frac{1}{6} (a_2 + b_2 x + c_2 y) = \frac{1}{6} (a_2 + 3x - y)$
$N_3 = \frac{1}{6} (a_3 + b_3 x + c_3 y) = \frac{1}{6} (a_3 + 0x + 2y)$

Calculate $a_i$:
$a_1 = x_2 y_3 - x_3 y_2 = 2(3) - 1(0) = 6$
$a_2 = x_3 y_1 - x_1 y_3 = 1(0) - 0(3) = 0$
$a_3 = x_1 y_2 - x_2 y_1 = 0(0) - 2(0) = 0$

So, the shape functions are:
$N_1 = \frac{1}{6} (6 - 3x - y)$
$N_2 = \frac{1}{6} (3x - y)$
$N_3 = \frac{2y}{6} = \frac{y}{3}$

Centroid of the triangle:
$x_c = \frac{x_1 + x_2 + x_3}{3} = \frac{0+2+1}{3} = 1$
$y_c = \frac{y_1 + y_2 + y_3}{3} = \frac{0+0+3}{3} = 1$

Evaluate shape functions at $(1,1)$:
$N_1 = \frac{1}{6} (6 - 3(1) - 1) = \frac{1}{6} (6 - 3 - 1) = \frac{2}{6} = \frac{1}{3}$
$N_2 = \frac{1}{6} (3(1) - 1) = \frac{1}{6} (3 - 1) = \frac{2}{6} = \frac{1}{3}$
$N_3 = \frac{1}{3} = \frac{1}{3}$

**Answer:** At the centroid $(1,1)$, $N_1 = 1/3$, $N_2 = 1/3$, $N_3 = 1/3$. This is expected as the centroid is equidistant from all vertices.

**Question 2: Bilinear Rectangular Element - Shape Functions**
For a bilinear rectangular element with nodes at $(-1,-1), (1,-1), (1,1), (-1,1)$, find the shape function $N_1$ at a point $(\xi, \eta) = (0.5, 0.5)$.

**Solution 2:**
The shape function $N_1$ for a corner node ($\xi=-1, \eta=-1$) is given by:
$N_1(\xi, \eta) = \frac{1}{4}(1-\xi)(1-\eta)$

Evaluate at $(\xi, \eta) = (0.5, 0.5)$:
$N_1(0.5, 0.5) = \frac{1}{4}(1 - 0.5)(1 - 0.5)$
$N_1(0.5, 0.5) = \frac{1}{4}(0.5)(0.5)$
$N_1(0.5, 0.5) = \frac{1}{4}(0.25) = \frac{0.25}{4} = 0.0625$ or $\frac{1}{16}$.

**Answer:** $N_1 = 1/16$.

**Question 3: CST vs. LST**
Briefly explain why LST elements are generally preferred over CST elements for structural analysis problems involving bending.

**Answer:** LST elements use quadratic shape functions, which allow for a linear variation of strain within the element. This is crucial for accurately modeling bending, where strains vary linearly across the cross-section. CST elements assume constant strain, which is a poor approximation for bending and leads to significant errors. LST elements also pass the patch test for pure bending, whereas CST elements fail it.

---

### 7. Important Points to Remember

*   **CST:** Simplest triangle, linear displacement, constant strain, fails bending patch test, generally less accurate.
*   **LST:** 6-node triangle, quadratic displacement, linear strain, good for bending, passes bending patch test.
*   **Bilinear Rectangular:** 4-node quadrilateral, bilinear displacement, constant strain (in local coordinates), good for rectangular meshes, can model bending.
*   **Shape functions ($N_i$):** Interpolate displacements within an element, sum to 1 for rigid body motion.
*   **$[B]$ matrix:** Relates nodal strains to nodal displacements. Its form depends on the element type and the derivatives of shape functions.
*   **$[k]_{el}$ matrix:** Relates nodal forces to nodal displacements for an element. Computed using $[B]$, $[D]$, and volume/area integration.
*   **Accuracy:** Higher order elements (like LST) generally provide better accuracy for the same mesh density, but at a higher computational cost.
*   **Patch Test:** A crucial test for element quality. An element must be able to exactly represent a uniform state of stress (or strain) when a patch of these elements is subjected to such conditions.

---
