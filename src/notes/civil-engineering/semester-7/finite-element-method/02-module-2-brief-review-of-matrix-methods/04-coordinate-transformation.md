---
title: "Coordinate transformation"
subject: "FINITE ELEMENT METHOD"
module: "Module 2: Brief review of matrix methods"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba8116d0"
status: "completed"
scrapedAt: "2026-05-20T18:58:54.040Z"
---
# FINITE ELEMENT METHOD - Module 2: Brief Review of Matrix Methods

## Topic: Coordinate Transformation

### Learning Outcomes:

*   Understand the need for coordinate transformation in FEM.
*   Learn how to perform coordinate transformations for vectors and matrices.
*   Apply coordinate transformations to element stiffness matrices.
*   Understand the concept of global and local coordinate systems.
*   Familiarize with the rotation matrix and its properties.

---

### 1. Introduction to Coordinate Transformation

In the Finite Element Method (FEM), we often analyze structures or physical phenomena that are complexly shaped or oriented. To simplify the analysis, we typically:

*   **Discretize:** Divide the domain into smaller, simpler elements.
*   **Local Analysis:** Formulate element stiffness matrices and load vectors in a *local* coordinate system associated with each element.
*   **Global Assembly:** Assemble these element contributions into a global system of equations that describes the behavior of the entire structure in a *global* coordinate system.

**Coordinate transformation** is the fundamental mathematical tool that bridges the gap between these local element descriptions and the global system. It allows us to express quantities defined in one coordinate system in terms of another.

**Why is it necessary?**

*   **Element Orientation:** Elements can be oriented at arbitrary angles within the global domain. Their stiffness matrices need to be expressed in terms of the global coordinate system for assembly.
*   **Simplification of Integration:** Integration of shape functions and their derivatives is often simpler in a local, dimensionless coordinate system (e.g., natural coordinates).
*   **Generalization:** Allows for the development of general element formulations that can be easily adapted to different orientations and geometries.

---

### 2. Coordinate Systems

#### 2.1 Global Coordinate System ($\mathbf{x}, \mathbf{y}$)

*   This is the primary coordinate system used to describe the entire structure or domain.
*   All physical displacements, forces, and stiffnesses are ultimately referenced in this system.
*   Typically Cartesian coordinates (x, y, z).

#### 2.2 Local (Element) Coordinate System ($\mathbf{x}', \mathbf{y}'$)

*   This coordinate system is defined for each individual element.
*   It's often chosen for convenience in defining the element's geometry and in performing integrations.
*   Common choices include:
    *   **Natural Coordinates:** Dimensionless coordinates (e.g., $\xi$, $\eta$, $\zeta$) that range from -1 to 1 or 0 to 1, simplifying integration and shape function definitions.
    *   **Element-Aligned Coordinates:** A Cartesian system aligned with one or more sides of the element, simplifying local stiffness matrix calculations.

---

### 3. Transformation of Vectors

Vectors represent quantities with both magnitude and direction. When we change the coordinate system, the components of a vector change, but its magnitude and direction (relative to the physical space) remain the same.

Let a vector $\mathbf{v}$ have components in the global system as $\{v_x, v_y\}^T$ and in the local system as $\{v_{x'}, v_{y'}\}^T$.

#### 3.1 Transformation from Local to Global Coordinates

Assume the local coordinate system ($x', y'$) is rotated by an angle $\theta$ counterclockwise with respect to the global system ($x, y$).

**Geometric Relationship:**

*   $v_x = v_{x'} \cos \theta - v_{y'} \sin \theta$
*   $v_y = v_{x'} \sin \theta + v_{y'} \cos \theta$

**Matrix Form:**

$$
\begin{bmatrix} v_x \\ v_y \end{bmatrix} = \begin{bmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{bmatrix} \begin{bmatrix} v_{x'} \\ v_{y'} \end{bmatrix}
$$

Let $\mathbf{a}$ be the transformation matrix from local to global coordinates:

$$
\mathbf{a} = \begin{bmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{bmatrix}
$$

So, $\mathbf{v}_{\text{global}} = \mathbf{a} \mathbf{v}_{\text{local}}$.

#### 3.2 Transformation from Global to Local Coordinates

To transform back from global to local, we can use the inverse of the transformation matrix. The inverse of a rotation matrix is its transpose.

**Geometric Relationship:**

*   $v_{x'} = v_x \cos \theta + v_y \sin \theta$
*   $v_{y'} = -v_x \sin \theta + v_y \cos \theta$

**Matrix Form:**

$$
\begin{bmatrix} v_{x'} \\ v_{y'} \end{bmatrix} = \begin{bmatrix} \cos \theta & \sin \theta \\ -\sin \theta & \cos \theta \end{bmatrix} \begin{bmatrix} v_x \\ v_y \end{bmatrix}
$$

Let $\mathbf{a}^T$ be the transformation matrix from global to local coordinates:

$$
\mathbf{a}^T = \begin{bmatrix} \cos \theta & \sin \theta \\ -\sin \theta & \cos \theta \end{bmatrix}
$$

So, $\mathbf{v}_{\text{local}} = \mathbf{a}^T \mathbf{v}_{\text{global}}$.

#### 3.3 Rotation Matrix Properties

The transformation matrix $\mathbf{a}$ is a **rotation matrix**. It has the following important properties:

*   **Orthogonal:** $\mathbf{a}^T \mathbf{a} = \mathbf{a} \mathbf{a}^T = \mathbf{I}$ (Identity matrix). This means the inverse is its transpose.
*   **Determinant is 1:** $|\mathbf{a}| = \cos^2 \theta - (-\sin^2 \theta) = \cos^2 \theta + \sin^2 \theta = 1$. This ensures that the transformation preserves orientation and doesn't flip the coordinate system.
*   **Preserves Length (Magnitude):** $||\mathbf{v}_{\text{global}}|| = ||\mathbf{v}_{\text{local}}||$.

---

### 4. Transformation of Matrices

Matrices in FEM typically represent tensors, such as stiffness matrices or stress/strain tensors.

Let $\mathbf{K}_{\text{local}}$ be a stiffness matrix expressed in the local coordinate system, and $\mathbf{K}_{\text{global}}$ be the stiffness matrix expressed in the global coordinate system.

#### 4.1 Transformation of Stiffness Matrices

The relationship between stiffness matrices in different coordinate systems is given by:

$$
\mathbf{K}_{\text{global}} = \mathbf{a} \mathbf{K}_{\text{local}} \mathbf{a}^T
$$

Where:
*   $\mathbf{K}_{\text{global}}$ is the stiffness matrix in the global coordinate system.
*   $\mathbf{a}$ is the rotation matrix transforming local components to global components.
*   $\mathbf{K}_{\text{local}}$ is the stiffness matrix in the local coordinate system.
*   $\mathbf{a}^T$ is the rotation matrix transforming global components to local components.

**Derivation Intuition:**
Consider a force-displacement relationship: $\mathbf{F} = \mathbf{K} \mathbf{u}$.
If we transform $\mathbf{F}$ and $\mathbf{u}$ to a new coordinate system using matrix $\mathbf{a}$, we have $\mathbf{F}_{\text{global}} = \mathbf{a} \mathbf{F}_{\text{local}}$ and $\mathbf{u}_{\text{global}} = \mathbf{a} \mathbf{u}_{\text{local}}$.
Substituting these into the original equation:
$\mathbf{a} \mathbf{F}_{\text{local}} = \mathbf{K}_{\text{global}} (\mathbf{a} \mathbf{u}_{\text{local}})$
Now, we want to express $\mathbf{F}_{\text{local}}$ in terms of $\mathbf{u}_{\text{local}}$:
$\mathbf{F}_{\text{local}} = \mathbf{K}_{\text{local}} \mathbf{u}_{\text{local}}$
Multiply the equation by $\mathbf{a}^T$ from the left:
$\mathbf{a}^T (\mathbf{a} \mathbf{F}_{\text{local}}) = \mathbf{a}^T (\mathbf{K}_{\text{global}} \mathbf{a} \mathbf{u}_{\text{local}})$
$\mathbf{F}_{\text{local}} = \mathbf{a}^T \mathbf{K}_{\text{global}} \mathbf{a} \mathbf{u}_{\text{local}}$
Comparing this with $\mathbf{F}_{\text{local}} = \mathbf{K}_{\text{local}} \mathbf{u}_{\text{local}}$, we get:
$\mathbf{K}_{\text{local}} = \mathbf{a}^T \mathbf{K}_{\text{global}} \mathbf{a}$
Rearranging this to solve for $\mathbf{K}_{\text{global}}$:
$\mathbf{K}_{\text{global}} = \mathbf{a} \mathbf{K}_{\text{local}} \mathbf{a}^T$

#### 4.2 Transformation of Stress and Strain Tensors

Stress ($\boldsymbol{\sigma}$) and strain ($\boldsymbol{\epsilon}$) are represented by second-order tensors, which are typically symmetric matrices. Their transformation follows a similar pattern:

$$
\boldsymbol{\sigma}_{\text{global}} = \mathbf{a} \boldsymbol{\sigma}_{\text{local}} \mathbf{a}^T
$$
$$
\boldsymbol{\epsilon}_{\text{global}} = \mathbf{a} \boldsymbol{\epsilon}_{\text{local}} \mathbf{a}^T
$$

---

### 5. Example: Transformation of a 2D Bar Element

Consider a 2D truss (bar) element. The stiffness matrix in its local axial direction ($\mathbf{K}'$) is well-known. We need to transform it to the global coordinate system.

Let the local coordinate system ($x', y'$) be aligned with the axis of the bar. The global system is ($x, y$).
Let the angle between the global $x$-axis and the local $x'$-axis be $\theta$.

**Local Stiffness Matrix for a 2D Bar Element (along $x'$-axis):**

Assume the element has length $L$ and cross-sectional area $A$ and Young's modulus $E$.
The axial stiffness is $EA/L$.
The nodal displacements in the local system are $\{u'_1, v'_1, u'_2, v'_2\}^T$.
The stiffness matrix in local coordinates, considering only axial deformation, is:

$$
\mathbf{K}' = \frac{EA}{L} \begin{bmatrix}
1 & 0 & -1 & 0 \\
0 & 0 & 0 & 0 \\
-1 & 0 & 1 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$
*(Note: The zeros in rows 2 and 4 are because in a purely axial element, there's no stiffness associated with transverse displacements in the local system. In more general beam elements, these would be non-zero.)*

**Rotation Matrix $\mathbf{a}$:**
To transform nodal displacements from local $\{u'_1, v'_1, u'_2, v'_2\}^T$ to global $\{u_1, v_1, u_2, v_2\}^T$:

$$
\begin{bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \end{bmatrix} = \begin{bmatrix}
\cos \theta & -\sin \theta & 0 & 0 \\
\sin \theta & \cos \theta & 0 & 0 \\
0 & 0 & \cos \theta & -\sin \theta \\
0 & 0 & \sin \theta & \cos \theta
\end{bmatrix} \begin{bmatrix} u'_1 \\ v'_1 \\ u'_2 \\ v'_2 \end{bmatrix}
$$

This can be written as:
$$
\mathbf{u}_{\text{global}} = \mathbf{T} \mathbf{u}_{\text{local}}
$$
where $\mathbf{T}$ is the transformation matrix for nodal displacements.

The local stiffness matrix $\mathbf{K}'$ is a $2 \times 2$ matrix related to the axial displacement only:
Let $k = EA/L$.
$$
\mathbf{K}'_{\text{axial}} = k \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}
$$
This matrix operates on the axial displacements $\{u'_1, u'_2\}^T$.

To get the global stiffness matrix for the element, we need to account for the orientation. The transformation matrix $\mathbf{a}$ that relates **physical vectors** in local and global systems is a $2 \times 2$ rotation matrix for a single displacement component.

Let the axial displacement at node 1 in local coords be $u'_1$ and in global be $u_1$.
$u_1 = u'_1 \cos \theta + v'_1 \sin \theta$ (This is for a vector point's coordinate transformation)
*Correction:* For nodal displacements, we are relating components of the same physical displacement vector at each node.
The displacement vector at node 1 in the local system is $\mathbf{d}_{1, \text{local}} = \{u'_1, v'_1\}^T$.
The displacement vector at node 1 in the global system is $\mathbf{d}_{1, \text{global}} = \{u_1, v_1\}^T$.
The transformation is $\mathbf{d}_{1, \text{global}} = \mathbf{a} \mathbf{d}_{1, \text{local}}$.

The axial displacement in local coords $u'_1$ can be related to global displacements as:
$u'_1 = u_1 \cos \theta + v_1 \sin \theta$
And $u'_2 = u_2 \cos \theta + v_2 \sin \theta$

The stiffness matrix $\mathbf{K}'$ relates axial forces to axial displacements:
$F'_1 = k (u'_1 - u'_2)$
$F'_2 = k (u'_2 - u'_1)$

Substituting the global relationships for $u'_1$ and $u'_2$:
$F'_1 = k [(u_1 \cos \theta + v_1 \sin \theta) - (u_2 \cos \theta + v_2 \sin \theta)]$
$F'_1 = k \cos \theta (u_1 - u_2) + k \sin \theta (v_1 - v_2)$

Similarly, $F'_2 = k \cos \theta (u_2 - u_1) + k \sin \theta (v_2 - v_1)$.

The forces also transform: $\mathbf{F}_{\text{global}} = \mathbf{a} \mathbf{F}_{\text{local}}$.
So, the global forces at node 1 are:
$F_{x1} = F'_1 \cos \theta - F'_1 \sin \theta$ (Incorrect, this assumes $F'_1$ and $F'_1$ are vector components)

Let's go back to the matrix transformation for stiffness: $\mathbf{K}_{\text{global}} = \mathbf{a} \mathbf{K}_{\text{local}} \mathbf{a}^T$.

The local stiffness matrix $\mathbf{K}'$ operates on the nodal displacement vector in the local coordinate system, $\mathbf{u}' = \{u'_1, v'_1, u'_2, v'_2\}^T$.
$\mathbf{F}' = \mathbf{K}' \mathbf{u}'$

We know that $\mathbf{u}' = \mathbf{T}^T \mathbf{u}_{\text{global}}$.
Where $\mathbf{T}$ is the displacement transformation matrix derived earlier, and $\mathbf{T}^T$ is the transformation from global displacements to local displacements.
$\mathbf{T}^T = \begin{bmatrix}
\cos \theta & \sin \theta & 0 & 0 \\
-\sin \theta & \cos \theta & 0 & 0 \\
0 & 0 & \cos \theta & \sin \theta \\
0 & 0 & -\sin \theta & \cos \theta
\end{bmatrix}$

The force vector also transforms: $\mathbf{F}_{\text{global}} = \mathbf{T} \mathbf{F}'$.
Substituting $\mathbf{F}' = \mathbf{K}' \mathbf{u}'$ and $\mathbf{u}' = \mathbf{T}^T \mathbf{u}_{\text{global}}$:
$\mathbf{F}_{\text{global}} = \mathbf{T} \mathbf{K}' (\mathbf{T}^T \mathbf{u}_{\text{global}})$
$\mathbf{F}_{\text{global}} = (\mathbf{T} \mathbf{K}' \mathbf{T}^T) \mathbf{u}_{\text{global}}$

Therefore, the global stiffness matrix for the element is $\mathbf{K}_{\text{global}} = \mathbf{T} \mathbf{K}' \mathbf{T}^T$.

Let's construct the $4 \times 4$ transformation matrices from the $2 \times 2$ rotation matrix $\mathbf{a}$:
$\mathbf{a} = \begin{bmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{bmatrix}$
$\mathbf{a}^T = \begin{bmatrix} \cos \theta & \sin \theta \\ -\sin \theta & \cos \theta \end{bmatrix}$

The $4 \times 4$ displacement transformation matrix $\mathbf{T}$ is structured as:
$$
\mathbf{T} = \begin{bmatrix}
\mathbf{a} & \mathbf{0} \\
\mathbf{0} & \mathbf{a}
\end{bmatrix}
= \begin{bmatrix}
\cos \theta & -\sin \theta & 0 & 0 \\
\sin \theta & \cos \theta & 0 & 0 \\
0 & 0 & \cos \theta & -\sin \theta \\
0 & 0 & \sin \theta & \cos \theta
\end{bmatrix}
$$
And $\mathbf{T}^T = \begin{bmatrix}
\mathbf{a}^T & \mathbf{0} \\
\mathbf{0} & \mathbf{a}^T
\end{bmatrix}$.

Now, perform the multiplication $\mathbf{K}_{\text{global}} = \mathbf{T} \mathbf{K}' \mathbf{T}^T$.
Let $k = EA/L$.
$\mathbf{K}' = k \begin{bmatrix}
1 & 0 & -1 & 0 \\
0 & 0 & 0 & 0 \\
-1 & 0 & 1 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix}$

First, $\mathbf{K}' \mathbf{T}^T$:
$$
\mathbf{K}' \mathbf{T}^T = k \begin{bmatrix}
1 & 0 & -1 & 0 \\
0 & 0 & 0 & 0 \\
-1 & 0 & 1 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix} \begin{bmatrix}
c & s & 0 & 0 \\
-s & c & 0 & 0 \\
0 & 0 & c & s \\
0 & 0 & -s & c
\end{bmatrix}
$$
where $c = \cos \theta, s = \sin \theta$.
$$
= k \begin{bmatrix}
c & s & -c & -s \\
0 & 0 & 0 & 0 \\
-c & -s & c & s \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

Now, $\mathbf{T} (\mathbf{K}' \mathbf{T}^T)$:
$$
\mathbf{K}_{\text{global}} = \begin{bmatrix}
c & -s & 0 & 0 \\
s & c & 0 & 0 \\
0 & 0 & c & -s \\
0 & 0 & s & c
\end{bmatrix} k \begin{bmatrix}
c & s & -c & -s \\
-s & c & s & c \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$
$$
\mathbf{K}_{\text{global}} = k \begin{bmatrix}
c^2+s^2 & cs-sc & -c^2-s^2 & -cs-sc \\
cs-sc & s^2+c^2 & -sc-cs & -s^2-c^2 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$
Using $c^2+s^2 = 1$ and $cs-sc=0$:
$$
\mathbf{K}_{\text{global}} = k \begin{bmatrix}
1 & 0 & -1 & 0 \\
0 & 1 & 0 & -1 \\
-1 & 0 & 1 & 0 \\
0 & -1 & 0 & 1
\end{bmatrix}
$$

This is the correct global stiffness matrix for a 2D bar element, considering axial and transverse displacements and their coupling due to rotation.

**Important Point:** The local stiffness matrix was defined based on axial displacements only. The transformation process naturally introduces terms related to shear and bending effects if the element formulation inherently includes them. For a simple bar, this transformation correctly maps the axial stiffness along the inclined axis.

If $\mathbf{K}'$ was the $2 \times 2$ matrix for axial stiffness only:
$\mathbf{K}'_{\text{axial}} = k \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$
The transformation is $\mathbf{K}_{\text{global, axial}} = \mathbf{a} \mathbf{K}'_{\text{axial}} \mathbf{a}^T$.
$$
\mathbf{K}_{\text{global, axial}} = \begin{bmatrix} c & -s \\ s & c \end{bmatrix} k \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \begin{bmatrix} c & s \\ -c & c \end{bmatrix}
$$
$$
= k \begin{bmatrix} c & -s \\ s & c \end{bmatrix} \begin{bmatrix} c+c & s+c \\ -c-c & -s+c \end{bmatrix}
$$
$$
= k \begin{bmatrix} c & -s \\ s & c \end{bmatrix} \begin{bmatrix} 2c & s+c \\ -2c & c-s \end{bmatrix}
$$
This is not the correct approach for the $4 \times 4$ matrix. The $4 \times 4$ matrix method using $\mathbf{T}$ is generally more robust.

Let's re-examine $\mathbf{K}_{\text{global}} = \mathbf{T} \mathbf{K}' \mathbf{T}^T$ with the original $\mathbf{K}'$ that has zero rows/columns for transverse motion.
$$
\mathbf{K}_{\text{global}} = \frac{EA}{L} \begin{bmatrix}
c^2 & cs & -c^2 & -cs \\
cs & s^2 & -cs & -s^2 \\
-c^2 & -cs & c^2 & cs \\
-cs & -s^2 & cs & s^2
\end{bmatrix}
$$
This is the correct form for a bar element when considering it in the global system. Note that this matrix only accounts for axial forces and displacements.

Let's re-evaluate:
$\mathbf{K}_{\text{global}} = k \begin{bmatrix}
c & -s & 0 & 0 \\
s & c & 0 & 0 \\
0 & 0 & c & -s \\
0 & 0 & s & c
\end{bmatrix} \begin{bmatrix}
1 & 0 & -1 & 0 \\
0 & 0 & 0 & 0 \\
-1 & 0 & 1 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix} \begin{bmatrix}
c & s & 0 & 0 \\
-s & c & 0 & 0 \\
0 & 0 & c & s \\
0 & 0 & -s & c
\end{bmatrix}$

Let's do the middle multiplication first:
$k \begin{bmatrix}
1 & 0 & -1 & 0 \\
0 & 0 & 0 & 0 \\
-1 & 0 & 1 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix} \begin{bmatrix}
c & s & 0 & 0 \\
-s & c & 0 & 0 \\
0 & 0 & c & s \\
0 & 0 & -s & c
\end{bmatrix} = k \begin{bmatrix}
c & s & -c & -s \\
0 & 0 & 0 & 0 \\
-c & -s & c & s \\
0 & 0 & 0 & 0
\end{bmatrix}$ (Same as before)

Now, $\mathbf{T}$ times this result:
$$
k \begin{bmatrix}
c & -s & 0 & 0 \\
s & c & 0 & 0 \\
0 & 0 & c & -s \\
0 & 0 & s & c
\end{bmatrix} \begin{bmatrix}
c & s & -c & -s \\
0 & 0 & 0 & 0 \\
-c & -s & c & s \\
0 & 0 & 0 & 0
\end{bmatrix}
$$
$$
= k \begin{bmatrix}
c^2 & cs & -c^2 & -cs \\
cs & s^2 & -cs & -s^2 \\
-c^2 & -cs & c^2 & cs \\
-cs & -s^2 & cs & s^2
\end{bmatrix}
$$
This final matrix correctly represents the element stiffness in the global coordinate system, where the local $x'$ axis is aligned with the bar.

---

### 6. Practice Questions

**Question 1:**
A vector $\mathbf{v}$ has components $\{3, 4\}^T$ in the global Cartesian coordinate system ($x, y$). If the local $x'$-axis is rotated by $+30^\circ$ counterclockwise with respect to the global $x$-axis, what are the components of $\mathbf{v}$ in the local coordinate system?

**Question 2:**
The local stiffness matrix of a 2D element is given by:
$$
\mathbf{K}' = \begin{bmatrix}
100 & 20 \\
20 & 50
\end{bmatrix}
$$
If the local coordinate system ($x', y'$) is rotated by $-45^\circ$ (clockwise) with respect to the global coordinate system ($x, y$), what is the stiffness matrix in the global coordinate system, $\mathbf{K}_{\text{global}}$?

**Question 3:**
Explain the difference between the transformation matrix $\mathbf{a}$ for vector components and the displacement transformation matrix $\mathbf{T}$ for nodal degrees of freedom in a 2D element.

---

### 7. Answers

**Answer 1:**
We need to transform from global to local. The rotation angle is $\theta = 30^\circ$.
The transformation matrix from global to local is $\mathbf{a}^T$:
$$
\mathbf{a}^T = \begin{bmatrix} \cos \theta & \sin \theta \\ -\sin \theta & \cos \theta \end{bmatrix}
$$
With $\theta = 30^\circ$, $\cos 30^\circ = \sqrt{3}/2$ and $\sin 30^\circ = 1/2$.
$$
\mathbf{a}^T = \begin{bmatrix} \sqrt{3}/2 & 1/2 \\ -1/2 & \sqrt{3}/2 \end{bmatrix}
$$
The local components are $\mathbf{v}_{\text{local}} = \mathbf{a}^T \mathbf{v}_{\text{global}}$:
$$
\mathbf{v}_{\text{local}} = \begin{bmatrix} \sqrt{3}/2 & 1/2 \\ -1/2 & \sqrt{3}/2 \end{bmatrix} \begin{bmatrix} 3 \\ 4 \end{bmatrix} = \begin{bmatrix}
(3\sqrt{3}/2) + (4/2) \\
(-3/2) + (4\sqrt{3}/2)
\end{bmatrix} = \begin{bmatrix}
1.5\sqrt{3} + 2 \\
-1.5 + 2\sqrt{3}
\end{bmatrix}
$$
Calculating the numerical values:
$v_{x'} \approx 1.5 \times 1.732 + 2 = 2.598 + 2 = 4.598$
$v_{y'} \approx -1.5 + 2 \times 1.732 = -1.5 + 3.464 = 1.964$

So, $\mathbf{v}_{\text{local}} \approx \{4.598, 1.964\}^T$.

**Answer 2:**
We need to transform $\mathbf{K}'$ to $\mathbf{K}_{\text{global}}$ using $\mathbf{K}_{\text{global}} = \mathbf{a} \mathbf{K}' \mathbf{a}^T$.
The local $x'$-axis is rotated by $\theta = -45^\circ$ relative to the global $x$-axis.
$\cos(-45^\circ) = \cos(45^\circ) = 1/\sqrt{2}$
$\sin(-45^\circ) = -\sin(45^\circ) = -1/\sqrt{2}$

The rotation matrix $\mathbf{a}$ from local to global components of a vector is:
$$
\mathbf{a} = \begin{bmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{bmatrix} = \begin{bmatrix} 1/\sqrt{2} & -(-1/\sqrt{2}) \\ -1/\sqrt{2} & 1/\sqrt{2} \end{bmatrix} = \begin{bmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ -1/\sqrt{2} & 1/\sqrt{2} \end{bmatrix}
$$
And $\mathbf{a}^T = \begin{bmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} \end{bmatrix}$.

Now, calculate $\mathbf{K}_{\text{global}} = \mathbf{a} \mathbf{K}' \mathbf{a}^T$:
$$
\mathbf{K}_{\text{global}} = \begin{bmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ -1/\sqrt{2} & 1/\sqrt{2} \end{bmatrix} \begin{bmatrix} 100 & 20 \\ 20 & 50 \end{bmatrix} \begin{bmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} \end{bmatrix}
$$
First, $\mathbf{K}' \mathbf{a}^T$:
$$
\begin{bmatrix} 100 & 20 \\ 20 & 50 \end{bmatrix} \begin{bmatrix} 1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} \end{bmatrix} = \begin{bmatrix}
100/\sqrt{2} + 20/\sqrt{2} & -100/\sqrt{2} + 20/\sqrt{2} \\
20/\sqrt{2} + 50/\sqrt{2} & -20/\sqrt{2} + 50/\sqrt{2}
\end{bmatrix} = \begin{bmatrix}
120/\sqrt{2} & -80/\sqrt{2} \\
70/\sqrt{2} & 30/\sqrt{2}
\end{bmatrix}
$$
Now, $\mathbf{a}$ times the result:
$$
\begin{bmatrix} 1/\sqrt{2} & 1/\sqrt{2} \\ -1/\sqrt{2} & 1/\sqrt{2} \end{bmatrix} \begin{bmatrix} 120/\sqrt{2} & -80/\sqrt{2} \\ 70/\sqrt{2} & 30/\sqrt{2} \end{bmatrix}
$$
$$
= \begin{bmatrix}
(1/\sqrt{2})(120/\sqrt{2}) + (1/\sqrt{2})(70/\sqrt{2}) & (1/\sqrt{2})(-80/\sqrt{2}) + (1/\sqrt{2})(30/\sqrt{2}) \\
(-1/\sqrt{2})(120/\sqrt{2}) + (1/\sqrt{2})(70/\sqrt{2}) & (-1/\sqrt{2})(-80/\sqrt{2}) + (1/\sqrt{2})(30/\sqrt{2})
\end{bmatrix}
$$
$$
= \begin{bmatrix}
120/2 + 70/2 & -80/2 + 30/2 \\
-120/2 + 70/2 & 80/2 + 30/2
\end{bmatrix}
= \begin{bmatrix}
60 + 35 & -40 + 15 \\
-60 + 35 & 40 + 15
\end{bmatrix}
= \begin{bmatrix}
95 & -25 \\
-25 & 55
\end{bmatrix}
$$
So, $\mathbf{K}_{\text{global}} = \begin{bmatrix} 95 & -25 \\ -25 & 55 \end{bmatrix}$.

**Answer 3:**
*   **$\mathbf{a}$ (Rotation Matrix for Vector Components):** This is a $2 \times 2$ matrix (or $3 \times 3$ in 3D) that transforms the *components* of a physical vector from one coordinate system to another. For example, if $\mathbf{v}_{\text{global}} = \{v_x, v_y\}^T$ and $\mathbf{v}_{\text{local}} = \{v_{x'}, v_{y'}\}^T$, then $\mathbf{v}_{\text{global}} = \mathbf{a} \mathbf{v}_{\text{local}}$. It represents the geometric rotation of the coordinate axes.

*   **$\mathbf{T}$ (Displacement Transformation Matrix for Nodal Dof):** This is a larger matrix (e.g., $4 \times 4$ for a 2D element with 2 nodes, each having 2 DOFs) that transforms the *entire vector of nodal displacements* from one coordinate system to another. It is formed by stacking the $2 \times 2$ rotation matrices ($\mathbf{a}$ or $\mathbf{a}^T$) on the diagonal. For a 2D element with nodes 1 and 2, each with $u$ and $v$ displacements, the transformation from local nodal displacements $\mathbf{u}' = \{u'_1, v'_1, u'_2, v'_2\}^T$ to global nodal displacements $\mathbf{u}_{\text{global}} = \{u_1, v_1, u_2, v_2\}^T$ is given by $\mathbf{u}_{\text{global}} = \mathbf{T} \mathbf{u}_{\text{local}}$. The matrix $\mathbf{T}$ is structured as:
    $$
    \mathbf{T} = \begin{bmatrix}
    \mathbf{a} & \mathbf{0} \\
    \mathbf{0} & \mathbf{a}
    \end{bmatrix}
    $$
    where $\mathbf{a}$ transforms the displacement vector at each node. The stiffness matrix transformation uses this larger matrix: $\mathbf{K}_{\text{global}} = \mathbf{T} \mathbf{K}_{\text{local}} \mathbf{T}^T$.

The key difference is the dimension and scope: $\mathbf{a}$ operates on a single vector's components, while $\mathbf{T}$ operates on the collection of all nodal displacements for an element.

---

### 8. Important Points to Remember

*   **Purpose of Coordinate Transformation:** To reconcile element-specific descriptions (often in a convenient local system) with the overall structure description (in a global system).
*   **Rotation Matrix ($\mathbf{a}$):** Orthogonal matrix ($\mathbf{a}^T = \mathbf{a}^{-1}$), determinant is 1, preserves length and orientation.
*   **Vector Transformation:** $\mathbf{v}_{\text{global}} = \mathbf{a} \mathbf{v}_{\text{local}}$ (transforming components).
*   **Matrix Transformation (Stiffness):** $\mathbf{K}_{\text{global}} = \mathbf{a} \mathbf{K}_{\text{local}} \mathbf{a}^T$ (for general tensors, but for element stiffness matrices, the $\mathbf{T}$ matrix derived from $\mathbf{a}$ is used, leading to $\mathbf{K}_{\text{global}} = \mathbf{T} \mathbf{K}_{\text{local}} \mathbf{T}^T$).
*   **Displacement Transformation Matrix ($\mathbf{T}$):** Constructed by block-diagonal placement of $\mathbf{a}$ (for global to local displacement component transformation) or $\mathbf{a}^T$ (for local to global displacement component transformation) for each node.
*   **Consistency is Key:** Ensure the angle $\theta$ and the choice of $\mathbf{a}$ or $\mathbf{a}^T$ are consistent with the direction of transformation and the definition of the local system.

---
