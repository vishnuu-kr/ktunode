---
title: "coordinate transformation Plane truss stiffness formulation and its assembly"
subject: "FINITE ELEMENT METHODS"
module: "Module 2: Types of coordinate system in FEM"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464293"
status: "completed"
scrapedAt: "2026-05-20T18:12:55.166Z"
---
# Module 2: Types of Coordinate Systems in FEM

## Topic: Coordinate Transformation, Plane Truss Stiffness Formulation and Assembly

### Introduction

This module delves into the fundamental concepts of coordinate systems and their crucial role in Finite Element Method (FEM) analysis. We will specifically focus on how coordinate transformations are applied to the stiffness formulation of a 2D plane truss element and the subsequent assembly process to create a global system of equations for a complex structure. This understanding is vital for accurately predicting the behavior of structures under various loading conditions.

### Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the necessity and methods of coordinate transformation in FEM.
*   Formulate the stiffness matrix for a 2D plane truss element in its local coordinate system.
*   Derive the transformation matrix to relate local and global coordinate systems.
*   Transform the element stiffness matrix from local to global coordinates.
*   Understand the process of assembling element stiffness matrices into a global stiffness matrix.
*   Apply these concepts to solve simple plane truss problems.

### Course Outcomes Addressed

*   **CO1 (K2):** Understand the governing equations of various physical phenomena and basic procedure of FEM. (This topic contributes by showing how physical phenomena at the element level are translated into mathematical matrices within the FEM framework).
*   **CO2 (K3):** Apply the coordinate transformation and formulation of shape functions of various element. (This topic directly addresses coordinate transformation and the formulation of stiffness matrices, which are derived using shape functions).
*   **CO3 (K4):** Formulate shape functions and element strain displacement matrix of various element. (While shape functions aren't explicitly derived here, the strain-displacement relationship, which relies on them, is implicitly used in the stiffness matrix derivation for trusses).

### 1. Coordinate Systems in FEM

#### 1.1 Importance of Coordinate Systems

In FEM, we analyze complex structures by discretizing them into smaller, simpler elements. Each element can be analyzed in its own convenient coordinate system, often referred to as the **local or element coordinate system**. However, to understand the behavior of the entire structure, these element responses must be combined and expressed in a common **global or system coordinate system**. This necessitates the use of coordinate transformations.

*   **Local Coordinate System:** Usually defined for each element, aligning with its geometry (e.g., along the element's axis). This simplifies the derivation of element properties like stiffness.
*   **Global Coordinate System:** A single, fixed coordinate system for the entire structure, allowing for the summation of element contributions and the imposition of boundary conditions.

**Reference:** Reddy, J. N., Chapter 2.
**Reference:** Cook, R. D., Chapter 5.

#### 1.2 Types of Coordinate Systems

*   **Cartesian Coordinates (Rectangular):** The most common system, using $(x, y, z)$ axes that are mutually perpendicular. This is typically used for the global system.
*   **Natural Coordinates:** These are dimensionless coordinates that are inherently defined for an element and are independent of its orientation or location in global space. For a 1D bar or truss element, a single natural coordinate ($\xi$) ranging from -1 to +1 is often used. For 2D elements, two natural coordinates ($\xi, \eta$) are used. While not directly used for the stiffness matrix transformation in this topic, natural coordinates are crucial for defining shape functions, especially for higher-order elements.

**Reference:** Fish, J. & Belytschko, T., Chapter 3.

### 2. Plane Truss Element Stiffness Formulation (Local Coordinates)

A plane truss is a structure composed of slender members connected at their ends by frictionless pins. These members are assumed to carry only axial forces (tension or compression).

#### 2.1 Assumptions for Plane Truss Elements

*   Members are connected by pinned joints (no moments are transferred).
*   All loads are applied at the joints.
*   Members are straight and slender.
*   Each member carries only axial force.
*   The material is linear elastic, isotropic, and homogeneous.

#### 2.2 Degrees of Freedom (DOF)

For a 2D plane truss element with two nodes (say, node 1 and node 2), each node can have displacements in the $x$ and $y$ directions. Therefore, there are 4 degrees of freedom per element:

*   $u_1$: Displacement of node 1 in the global x-direction.
*   $v_1$: Displacement of node 1 in the global y-direction.
*   $u_2$: Displacement of node 2 in the global x-direction.
*   $v_2$: Displacement of node 2 in the global y-direction.

In the **local coordinate system** aligned with the element's axis (say, $\bar{x}$), only axial displacement matters. Let:

*   $\bar{u}_1$: Axial displacement of node 1.
*   $\bar{u}_2$: Axial displacement of node 2.

The element stiffness matrix in the local coordinate system, denoted as $[\bar{k}]$, relates nodal axial forces to nodal axial displacements. For a truss element of length $L$, cross-sectional area $A$, and Young's modulus $E$, the stiffness in the axial direction is given by $k = \frac{EA}{L}$.

The local stiffness matrix is:

$$
[\bar{k}] = \frac{EA}{L} \begin{bmatrix}
1 & -1 \\
-1 & 1
\end{bmatrix}
$$

This matrix relates the nodal axial forces $[\bar{F}] = \begin{bmatrix} \bar{F}_1 & \bar{F}_2 \end{bmatrix}^T$ to the nodal axial displacements $[\bar{u}] = \begin{bmatrix} \bar{u}_1 & \bar{u}_2 \end{bmatrix}^T$ as:

$$
[\bar{F}] = [\bar{k}] [\bar{u}]
$$

**Important Point:** For a truss element, the axial displacement is the component of the global displacement along the element's axis.

**Reference:** Reddy, J. N., Chapter 3.
**Reference:** Bhavikatti, S. S., Chapter 4.

### 3. Coordinate Transformation

#### 3.1 Transformation Matrix for a 2D Plane Truss Element

Consider a plane truss element in the global Cartesian coordinate system $(x, y)$. Let the coordinates of node 1 be $(x_1, y_1)$ and node 2 be $(x_2, y_2)$. The length of the element is $L = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$.

Let $\theta$ be the angle the element makes with the positive global x-axis.

$$
\cos \theta = \frac{x_2 - x_1}{L} = \lambda_x
$$

$$
\sin \theta = \frac{y_2 - y_1}{L} = \lambda_y
$$

The displacement vector in the global coordinate system is:

$$
\{u\} = \begin{bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \end{bmatrix}
$$

The displacement vector in the local coordinate system (along the element's axis) is:

$$
\{\bar{u}\} = \begin{bmatrix} \bar{u}_1 \\ \bar{u}_2 \end{bmatrix}
$$

The axial displacement $\bar{u}_1$ at node 1 is the projection of the global displacement vector $\{u_1, v_1\}$ onto the element's axis. Similarly, $\bar{u}_2$ at node 2 is the projection of $\{u_2, v_2\}$ onto the element's axis.

$$
\bar{u}_1 = u_1 \cos \theta + v_1 \sin \theta = u_1 \lambda_x + v_1 \lambda_y
$$

$$
\bar{u}_2 = u_2 \cos \theta + v_2 \sin \theta = u_2 \lambda_x + v_2 \lambda_y
$$

We can express this relationship in matrix form:

$$
\{\bar{u}\} = [T] \{u\}
$$

Where $[T]$ is the transformation matrix. However, it's more convenient to relate the forces first.

#### 3.2 Force Transformation

The axial force in the local coordinate system $[\bar{F}]$ is related to the global forces $[F]$ acting at the nodes. The axial force $\bar{F}_1$ is the component of global forces $(F_{x1}, F_{y1})$ along the element's axis. Similarly, $\bar{F}_2$ is the component of $(F_{x2}, F_{y2})$ along the element's axis.

$$
\bar{F}_1 = F_{x1} \cos \theta + F_{y1} \sin \theta = F_{x1} \lambda_x + F_{y1} \lambda_y
$$

$$
\bar{F}_2 = F_{x2} \cos \theta + F_{y2} \sin \theta = F_{x2} \lambda_x + F_{y2} \lambda_y
$$

In matrix form:

$$
\{\bar{F}\} = [T'] \{F\}
$$

Where $\{F\} = \begin{bmatrix} F_{x1} & F_{y1} & F_{x2} & F_{y2} \end{bmatrix}^T$ and $[T']$ is the force transformation matrix.

$$
[T'] = \begin{bmatrix}
\lambda_x & \lambda_y & 0 & 0 \\
0 & 0 & \lambda_x & \lambda_y
\end{bmatrix}
$$

#### 3.3 Displacement Transformation

Similarly, for displacements:

$$
\{\bar{u}\} = [T''] \{u\}
$$

$$
[T''] = \begin{bmatrix}
\lambda_x & \lambda_y & 0 & 0 \\
0 & 0 & \lambda_x & \lambda_y
\end{bmatrix}
$$

Notice that $[T''] = [T']$.

#### 3.4 Relating Local and Global Stiffness Matrices

We know the relationship in local coordinates: $\{\bar{F}\} = [\bar{k}] \{\bar{u}\}$.
Substituting the transformations:

$$
[T'] \{F\} = [\bar{k}] [T''] \{u\}
$$

$$
\{F\} = ([T''])^{-1} [\bar{k}] [T''] \{u\}
$$

The global stiffness matrix $[k]$ is defined as $\{F\} = [k] \{u\}$. Therefore:

$$
[k] = ([T''])^{-1} [\bar{k}] [T'']
$$

The inverse of $[T'']$ is its transpose, since $[T''] [T'']^T$ is an identity matrix (this is a property of transformation matrices relating vectors in different coordinate systems).

$$
[T'']^T = \begin{bmatrix}
\lambda_x & 0 \\
\lambda_y & 0 \\
0 & \lambda_x \\
0 & \lambda_y
\end{bmatrix}
$$

So, the transformation of the stiffness matrix from local to global coordinates is given by:

$$
[k] = [T'']^T [\bar{k}] [T'']
$$

Substituting the matrices:

$$
[k] = \begin{bmatrix}
\lambda_x & 0 \\
\lambda_y & 0 \\
0 & \lambda_x \\
0 & \lambda_y
\end{bmatrix}
\frac{EA}{L} \begin{bmatrix}
1 & -1 \\
-1 & 1
\end{bmatrix}
\begin{bmatrix}
\lambda_x & \lambda_y & 0 & 0 \\
0 & 0 & \lambda_x & \lambda_y
\end{bmatrix}
$$

Performing the matrix multiplication:

$$
[k] = \frac{EA}{L} \begin{bmatrix}
\lambda_x & 0 \\
\lambda_y & 0 \\
0 & \lambda_x \\
0 & \lambda_y
\end{bmatrix}
\begin{bmatrix}
\lambda_x & \lambda_y & -\lambda_x & -\lambda_y \\
-\lambda_x & -\lambda_y & \lambda_x & \lambda_y
\end{bmatrix}
$$

$$
[k] = \frac{EA}{L} \begin{bmatrix}
\lambda_x^2 & \lambda_x \lambda_y & -\lambda_x^2 & -\lambda_x \lambda_y \\
\lambda_x \lambda_y & \lambda_y^2 & -\lambda_x \lambda_y & -\lambda_y^2 \\
-\lambda_x^2 & -\lambda_x \lambda_y & \lambda_x^2 & \lambda_x \lambda_y \\
-\lambda_x \lambda_y & -\lambda_y^2 & \lambda_x \lambda_y & \lambda_y^2
\end{bmatrix}
$$

Where $\lambda_x = \frac{x_2 - x_1}{L}$ and $\lambda_y = \frac{y_2 - y_1}{L}$.

**Important Point:** The element stiffness matrix in global coordinates $[k]$ is a $4 \times 4$ matrix, reflecting the 4 DOFs of the element in the global system.

**Reference:** Reddy, J. N., Chapter 3.
**Reference:** Cook, R. D., Chapter 5.
**Reference:** Segerlind, L. J., Chapter 4.

### 4. Assembly of Element Stiffness Matrices

Once the element stiffness matrices $[k]$ are formulated in the global coordinate system for each element in the structure, they need to be assembled into a single **global stiffness matrix** $[K]$. This matrix represents the stiffness of the entire structure.

#### 4.1 Procedure for Assembly

1.  **Identify Global DOFs:** Determine the total number of DOFs for the entire structure. This depends on the number of nodes and the DOFs per node.
2.  **Create Global Stiffness Matrix:** Initialize a large matrix $[K]$ with dimensions equal to the total number of global DOFs, filled with zeros.
3.  **Element Mapping:** For each element, identify which global DOFs correspond to its local DOFs. This mapping is crucial.
4.  **Contribute Element Stiffness:** For each element, add its element stiffness matrix $[k]$ to the appropriate locations in the global stiffness matrix $[K]$ based on the DOF mapping.

**Example:** Consider a simple 2-element truss.
Element 1 has nodes $i$ and $j$. Its DOFs are $2i-1, 2i, 2j-1, 2j$ in the global system.
Element 2 has nodes $j$ and $k$. Its DOFs are $2j-1, 2j, 2k-1, 2k$ in the global system.

If $[k^{(e)}]$ is the stiffness matrix for element $e$ with DOFs $d_1, d_2, d_3, d_4$, then the contribution to the global stiffness matrix $[K]$ is:

$K_{d_1, d_1} = K_{d_1, d_1} + k^{(e)}_{11}$
$K_{d_1, d_2} = K_{d_1, d_2} + k^{(e)}_{12}$
... and so on for all entries of $[k^{(e)}]$.

**Important Point:** The assembly process relies on the fact that forces and displacements are additive at nodes where elements are connected. The connectivity of the structure dictates how the element matrices are assembled.

**Reference:** Bhavikatti, S. S., Chapter 5.
**Reference:** Hutton, D. V., Chapter 3.

### 5. Solving the Global System of Equations

Once the global stiffness matrix $[K]$ is assembled, the system of equations for the entire structure is:

$$
[K] \{U\} = \{F_{global}\}
$$

Where:
*   $[K]$ is the global stiffness matrix.
*   $\{U\}$ is the vector of global nodal displacements.
*   $\{F_{global}\}$ is the vector of global nodal forces.

This system of linear equations is solved for the unknown nodal displacements $\{U\}$. Once $\{U\}$ is known, element strains and stresses can be calculated.

### 6. Example: A Single Plane Truss Element

Consider a plane truss element with nodes 1 and 2.
Node 1: $(x_1, y_1) = (0, 0)$
Node 2: $(x_2, y_2) = (3, 4)$
Young's Modulus $E = 200$ GPa
Area $A = 100$ mm$^2 = 100 \times 10^{-6}$ m$^2$
Length $L = \sqrt{(3-0)^2 + (4-0)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$ m.

**Step 1: Calculate $\lambda_x$ and $\lambda_y$.**
$\lambda_x = \frac{x_2 - x_1}{L} = \frac{3 - 0}{5} = 0.6$
$\lambda_y = \frac{y_2 - y_1}{L} = \frac{4 - 0}{5} = 0.8$

Check: $\lambda_x^2 + \lambda_y^2 = (0.6)^2 + (0.8)^2 = 0.36 + 0.64 = 1$.

**Step 2: Calculate the stiffness in local coordinates.**
$EA = (200 \times 10^9 \text{ N/m}^2) \times (100 \times 10^{-6} \text{ m}^2) = 20000 \text{ N}$.
$\frac{EA}{L} = \frac{20000 \text{ N}}{5 \text{ m}} = 4000 \text{ N/m}$.

Local stiffness matrix:
$$
[\bar{k}] = 4000 \begin{bmatrix}
1 & -1 \\
-1 & 1
\end{bmatrix}
$$

**Step 3: Transform to global stiffness matrix.**
$$
[k] = \frac{EA}{L} \begin{bmatrix}
\lambda_x^2 & \lambda_x \lambda_y & -\lambda_x^2 & -\lambda_x \lambda_y \\
\lambda_x \lambda_y & \lambda_y^2 & -\lambda_x \lambda_y & -\lambda_y^2 \\
-\lambda_x^2 & -\lambda_x \lambda_y & \lambda_x^2 & \lambda_x \lambda_y \\
-\lambda_x \lambda_y & -\lambda_y^2 & \lambda_x \lambda_y & \lambda_y^2
\end{bmatrix}
$$

Substitute values: $\lambda_x = 0.6$, $\lambda_y = 0.8$, $\frac{EA}{L} = 4000$.
$\lambda_x^2 = 0.36$
$\lambda_y^2 = 0.64$
$\lambda_x \lambda_y = 0.48$

$$
[k] = 4000 \begin{bmatrix}
0.36 & 0.48 & -0.36 & -0.48 \\
0.48 & 0.64 & -0.48 & -0.64 \\
-0.36 & -0.48 & 0.36 & 0.48 \\
-0.48 & -0.64 & 0.48 & 0.64
\end{bmatrix} \text{ N/m}
$$

This is the element stiffness matrix for this truss element in the global coordinate system.

### 7. Practice Questions and Exercises

**Question 1:**
A plane truss element has nodes at $A(1, 2)$ and $B(4, 6)$. Its length is $L=5$ m. Calculate $\lambda_x$ and $\lambda_y$ for this element.

**Answer 1:**
$L = \sqrt{(4-1)^2 + (6-2)^2} = \sqrt{3^2 + 4^2} = \sqrt{9+16} = 5$ m.
$\lambda_x = \frac{x_B - x_A}{L} = \frac{4-1}{5} = \frac{3}{5} = 0.6$
$\lambda_y = \frac{y_B - y_A}{L} = \frac{6-2}{5} = \frac{4}{5} = 0.8$

**Question 2:**
For the truss element in Question 1, with $E = 210$ GPa and $A = 50$ mm$^2$, calculate the element stiffness matrix in the global coordinate system. (Assume units are consistent, e.g., N and m).

**Answer 2:**
$E = 210 \times 10^9 \text{ N/m}^2$
$A = 50 \text{ mm}^2 = 50 \times 10^{-6} \text{ m}^2$
$L = 5$ m
$\frac{EA}{L} = \frac{(210 \times 10^9) \times (50 \times 10^{-6})}{5} = \frac{10500}{5} = 2100$ N/m.

$\lambda_x = 0.6$, $\lambda_y = 0.8$
$\lambda_x^2 = 0.36$, $\lambda_y^2 = 0.64$, $\lambda_x \lambda_y = 0.48$

$$
[k] = 2100 \begin{bmatrix}
0.36 & 0.48 & -0.36 & -0.48 \\
0.48 & 0.64 & -0.48 & -0.64 \\
-0.36 & -0.48 & 0.36 & 0.48 \\
-0.48 & -0.64 & 0.48 & 0.64
\end{bmatrix} \text{ N/m}
$$

**Question 3:**
Consider a structure with two truss elements.
Element 1: Nodes 1(0,0) and 2(3,0). $E=200$ GPa, $A=100$ mm$^2$.
Element 2: Nodes 2(3,0) and 3(3,4). $E=200$ GPa, $A=100$ mm$^2$.
Formulate the element stiffness matrices in global coordinates, and then show how they would be assembled into a global stiffness matrix for the 3-node structure. Assume consistent units (N, m).

**Answer 3:**

**Element 1 (Nodes 1, 2):**
$L_1 = 3$ m. $\theta_1 = 0^\circ$.
$\lambda_{x1} = \frac{3-0}{3} = 1$, $\lambda_{y1} = \frac{0-0}{3} = 0$.
$\frac{EA}{L_1} = \frac{20000}{3} \approx 6666.7$ N/m.

$$
[k^{(1)}] = 6666.7 \begin{bmatrix}
1^2 & 1 \cdot 0 & -1^2 & -1 \cdot 0 \\
1 \cdot 0 & 0^2 & -1 \cdot 0 & -0^2 \\
-1^2 & -1 \cdot 0 & 1^2 & 1 \cdot 0 \\
-1 \cdot 0 & -0^2 & 1 \cdot 0 & 0^2
\end{bmatrix} = 6666.7 \begin{bmatrix}
1 & 0 & -1 & 0 \\
0 & 0 & 0 & 0 \\
-1 & 0 & 1 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

DOFs for Element 1 are: Node 1 (1, 2), Node 2 (3, 4).

**Element 2 (Nodes 2, 3):**
$L_2 = 4$ m. $\theta_2 = 90^\circ$.
$\lambda_{x2} = \frac{3-3}{4} = 0$, $\lambda_{y2} = \frac{4-0}{4} = 1$.
$\frac{EA}{L_2} = \frac{20000}{4} = 5000$ N/m.

$$
[k^{(2)}] = 5000 \begin{bmatrix}
0^2 & 0 \cdot 1 & -0^2 & -0 \cdot 1 \\
0 \cdot 1 & 1^2 & -0 \cdot 1 & -1^2 \\
-0^2 & -0 \cdot 1 & 0^2 & 0 \cdot 1 \\
-0 \cdot 1 & -1^2 & 0 \cdot 1 & 1^2
\end{bmatrix} = 5000 \begin{bmatrix}
0 & 0 & 0 & 0 \\
0 & 1 & 0 & -1 \\
0 & 0 & 0 & 0 \\
0 & -1 & 0 & 1
\end{bmatrix}
$$

DOFs for Element 2 are: Node 2 (3, 4), Node 3 (5, 6).

**Assembly:**
Global stiffness matrix $[K]$ is $6 \times 6$ (3 nodes, 2 DOFs per node).

$$
[K] = [k^{(1)}] + [k^{(2)}]
$$

Mapping of DOFs:
Element 1: DOF 1 to 1, DOF 2 to 2, DOF 3 to 3, DOF 4 to 4.
Element 2: DOF 1 to 3, DOF 2 to 4, DOF 3 to 5, DOF 4 to 6.

$$
[K] = \begin{bmatrix}
k^{(1)}_{11} & k^{(1)}_{12} & k^{(1)}_{13} & k^{(1)}_{14} & 0 & 0 \\
k^{(1)}_{21} & k^{(1)}_{22} & k^{(1)}_{23} & k^{(1)}_{24} & 0 & 0 \\
k^{(1)}_{31} & k^{(1)}_{32} & k^{(1)}_{33} & k^{(1)}_{34} & 0 & 0 \\
k^{(1)}_{41} & k^{(1)}_{42} & k^{(1)}_{43} & k^{(1)}_{44} & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0
\end{bmatrix} +
\begin{bmatrix}
0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & k^{(2)}_{11} & k^{(2)}_{12} & k^{(2)}_{13} & k^{(2)}_{14} \\
0 & 0 & k^{(2)}_{21} & k^{(2)}_{22} & k^{(2)}_{23} & k^{(2)}_{24} \\
0 & 0 & k^{(2)}_{31} & k^{(2)}_{32} & k^{(2)}_{33} & k^{(2)}_{34} \\
0 & 0 & k^{(2)}_{41} & k^{(2)}_{42} & k^{(2)}_{43} & k^{(2)}_{44}
\end{bmatrix}
$$

$$
[K] = \begin{bmatrix}
6666.7 & 0 & -6666.7 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 \\
-6666.7 & 0 & 6666.7 + 0 & 0 + 0 & 0 + 0 & 0 + 0 \\
0 & 0 & 0 + 0 & 0 + 5000 & 0 + 0 & 0 - 5000 \\
0 & 0 & 0 + 0 & 0 + 0 & 0 & 0 \\
0 & 0 & 0 & -5000 & 0 & 5000
\end{bmatrix}
$$

$$
[K] = \begin{bmatrix}
6666.7 & 0 & -6666.7 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 \\
-6666.7 & 0 & 6666.7 & 0 & 0 & 0 \\
0 & 0 & 0 & 5000 & 0 & -5000 \\
0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & -5000 & 0 & 5000
\end{bmatrix}
$$
This is the assembled global stiffness matrix.

### 8. Key Points to Remember

*   **Coordinate Transformation:** Essential for relating element-level analysis to the global structure.
*   **Plane Truss Assumptions:** Critical for the validity of the stiffness formulation.
*   **Local vs. Global Stiffness:** $[k]$ is $4 \times 4$ in global coordinates for a 2D truss element, while $[\bar{k}]$ is $2 \times 2$ in local coordinates.
*   **Transformation Formula:** $[k] = [T]^T [\bar{k}] [T]$, where $[T]$ contains direction cosines.
*   **Assembly:** Add element stiffness contributions to the global stiffness matrix based on connectivity and DOF mapping.
*   **Symmetry and Bandwidth:** Global stiffness matrices are always symmetric. Proper assembly maintains this symmetry.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 9. References and Further Reading

*   **An introduction to Finite Element Method by J N Reddy (McGrawHillEducation, ThirdEdition,2009):** Chapter 2 (Discretization and FEM), Chapter 3 (Formulation of Element Equations).
*   **Concept and application of Finite Element method by Robert D Cook (Wiley, ThirdEdition,2008):** Chapter 5 (Two-Dimensional Stress Elements - Plane Truss Element).
*   **Finite Element Analysis, by S SBhavikatti, (New Age Publisher, Third edition,2008):** Chapter 4 (Plane truss analysis), Chapter 5 (Assembly of stiffness matrices).
*   **A First Course in Finite Elements by Jacob Fish Rensselaer ,Ted Belytschko (John Wiley & Sons, Ltd, Second edition,2007):** Chapter 2 (Basic Concepts), Chapter 3 (Bars, Trusses, and Cables).
*   **Applied Finite Element Analysis by Larry J Segerlind (Johny Wiley and sons, Second Edition,2010):** Chapter 4 (Truss Element).
*   **Fundamentals of Finite Element Methods by David V Hutton (McGrawHillEducation, ThirdEdition,2009):** Chapter 3 (Element Stiffness Matrices).

This topic provides the foundational understanding of how to derive and assemble element stiffness matrices for plane truss structures, a crucial step in solving real-world engineering problems using the Finite Element Method.