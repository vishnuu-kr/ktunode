---
title: "Direct stiffness method:  Introduction to direct stiffness method-Rotation of axes in two dimensions, stiffness matrix of elements in global co- ordinates from element co-ordinates- assembly of load vector and stiffness matrix, solution of two span continuous beam-single bay single storey portal frame."
subject: "ADVANCED STRUCTURAL ANALYSIS"
module: "Module 2: Direct stiffness method:  Introduction to direct stiffness method"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e6e"
status: "completed"
scrapedAt: "2026-05-20T18:47:17.487Z"
---
# ADVANCED STRUCTURAL ANALYSIS: Module 2 - Direct Stiffness Method: Introduction

## Topic: Direct Stiffness Method: Rotation of Axes, Element Stiffness in Global Coordinates, Assembly, and Solution of Example Structures

This module introduces the Direct Stiffness Method (DSM), a powerful numerical technique for analyzing indeterminate structures. We will explore how to represent structural elements, transform their stiffness properties to a global coordinate system, assemble the overall structural stiffness, and solve for displacements and forces.

---

### Learning Outcomes Covered:

*   Understand the fundamental principles of the Direct Stiffness Method.
*   Learn how to transform element stiffness matrices from local to global coordinate systems using the transformation matrix.
*   Understand the process of assembling the global stiffness matrix and load vector for a structure.
*   Apply the DSM to solve for displacements and internal forces in a two-span continuous beam.
*   Apply the DSM to solve for displacements and internal forces in a single-bay, single-storey portal frame.

---

### 1. Introduction to the Direct Stiffness Method (DSM)

The Direct Stiffness Method is a displacement-based finite element method. Its core principle is to relate the forces and displacements at the nodes of a structure.

*   **Fundamental Equation:** The governing equation for the DSM is:
    $F = KU$
    Where:
    *   $F$: Global force vector (external loads and support reactions).
    *   $K$: Global stiffness matrix of the structure.
    *   $U$: Global displacement vector (displacements and rotations at the nodes).

*   **Key Idea:** The method works by discretizing the structure into a series of interconnected elements (e.g., beams, trusses). The stiffness of each element is determined, and these element stiffness matrices are combined to form the overall stiffness matrix of the structure.

*   **Steps Involved:**
    1.  **Element Formulation:** Determine the stiffness matrix for each structural element in its local coordinate system.
    2.  **Coordinate Transformation:** Transform the element stiffness matrices from the local coordinate system to the global coordinate system.
    3.  **Assembly:** Assemble the transformed element stiffness matrices and the external load vector into a global stiffness matrix and a global load vector.
    4.  **Solution:** Solve the global stiffness equation ($F = KU$) to obtain the nodal displacements.
    5.  **Element Force Calculation:** Use the nodal displacements to calculate the internal forces within each element.

---

### 2. Rotation of Axes in Two Dimensions

Structural elements can be oriented at various angles within a structure. To analyze these elements within a unified global coordinate system, we need to transform their properties using rotation matrices.

*   **Local Coordinate System:** For a 2D beam element, the local coordinate system is typically aligned with the element's axis.
    *   Displacements: $u_1, v_1, \theta_1$ (at node 1), $u_2, v_2, \theta_2$ (at node 2).
    *   Forces: $P_{x1}, P_{y1}, M_1$ (at node 1), $P_{x2}, P_{y2}, M_2$ (at node 2).
    *   Local stiffness matrix for a beam element ($k_{local}$) relates these forces and displacements.

*   **Global Coordinate System:** The global coordinate system is a fixed reference frame for the entire structure (e.g., x-horizontal, y-vertical).

*   **Transformation Matrix ($T$):** This matrix relates the local displacement vector to the global displacement vector. For a beam element with an angle $\theta$ with respect to the global x-axis:

    Consider a node with local displacements $(u_{local}, v_{local})$ and global displacements $(u_{global}, v_{global})$. The relationship is:
    $u_{local} = u_{global} \cos\theta + v_{global} \sin\theta$
    $v_{local} = -u_{global} \sin\theta + v_{global} \cos\theta$

    For a 2D beam element, the displacement vector in local coordinates is $U_{local} = [u_1, v_1, \theta_1, u_2, v_2, \theta_2]^T$.
    The displacement vector in global coordinates is $U_{global} = [u_1, v_1, \theta_1, u_2, v_2, \theta_2]^T$.

    The transformation matrix $T$ relates these: $U_{local} = T \cdot U_{global}$.
    For a beam element, the transformation matrix for displacements is:

    $$
    T_{disp} = \begin{bmatrix}
    \cos\theta & \sin\theta & 0 & 0 & 0 & 0 \\
    -\sin\theta & \cos\theta & 0 & 0 & 0 & 0 \\
    0 & 0 & 1 & 0 & 0 & 0 \\
    0 & 0 & 0 & \cos\theta & \sin\theta & 0 \\
    0 & 0 & 0 & -\sin\theta & \cos\theta & 0 \\
    0 & 0 & 0 & 0 & 0 & 1
    \end{bmatrix}
    $$

    **Important Note:** For force transformation, the transpose of the displacement transformation matrix is used: $F_{global} = T_{disp}^T \cdot F_{local}$.

*   **Stiffness Matrix Transformation:** The element stiffness matrix in global coordinates ($k_{global}$) is related to the local stiffness matrix ($k_{local}$) and the transformation matrix ($T_{disp}$) by:

    $k_{global} = T_{disp}^T \cdot k_{local} \cdot T_{disp}$

    This transformation is crucial for ensuring that the element stiffness is correctly represented in the global frame.

---

### 3. Stiffness Matrix of Elements in Global Coordinates from Element Coordinates

Let's consider the local stiffness matrix for a 2D beam element.

*   **Local Stiffness Matrix ($k_{local}$):** This matrix relates the forces and moments at the ends of a beam to the displacements and rotations at those ends, assuming the element is aligned with the local axes.

    For a beam element with length $L$, Young's Modulus $E$, and Moment of Inertia $I$, the local stiffness matrix is:

    $$
    k_{local} = \frac{EI}{L^3} \begin{bmatrix}
    12 & 6L & -12 & 6L \\
    6L & 4L^2 & -6L & 2L^2 \\
    -12 & -6L & 12 & -6L \\
    6L & 2L^2 & -6L & 4L^2
    \end{bmatrix}
    $$

    *Note: This is a simplified representation. A more complete local stiffness matrix for a 2D beam element includes axial, shear, and moment effects, resulting in a 12x12 matrix (6 degrees of freedom per node).*

    Let's consider the 12x12 local stiffness matrix for a 2D beam element:
    Degrees of freedom (DOF) at node 1: $u_{l1}, v_{l1}, \theta_{l1}$
    Degrees of freedom (DOF) at node 2: $u_{l2}, v_{l2}, \theta_{l2}$

    Local Force/Moment Vector: $f_{local} = [P_{x1}, P_{y1}, M_1, P_{x2}, P_{y2}, M_2]^T$
    Local Displacement/Rotation Vector: $u_{local} = [u_{l1}, v_{l1}, \theta_{l1}, u_{l2}, v_{l2}, \theta_{l2}]^T$

    The local stiffness matrix is:
    $$
    k_{local} = \begin{bmatrix}
    AE/L & 0 & 0 & -AE/L & 0 & 0 \\
    0 & 12EI/L^3 & 6EI/L^2 & 0 & -12EI/L^3 & 6EI/L^2 \\
    0 & 6EI/L^2 & 4EI/L & 0 & -6EI/L^2 & 2EI/L \\
    -AE/L & 0 & 0 & AE/L & 0 & 0 \\
    0 & -12EI/L^3 & -6EI/L^2 & 0 & 12EI/L^3 & -6EI/L^2 \\
    0 & 6EI/L^2 & 2EI/L & 0 & -6EI/L^2 & 4EI/L
    \end{bmatrix}
    $$
    Where:
    *   $A$: Cross-sectional area
    *   $E$: Young's modulus
    *   $I$: Moment of inertia
    *   $L$: Element length
    *   $AE/L$: Axial stiffness

*   **Applying Transformation to $k_{local}$:** As derived earlier, $k_{global} = T_{disp}^T \cdot k_{local} \cdot T_{disp}$. This operation transforms the element's stiffness contributions from its local orientation to the global orientation. The $T_{disp}$ matrix is constructed using the angle $\theta$ of the element with respect to the global x-axis.

    **Example Calculation (Conceptual):**
    Let's consider a single term in the $k_{local}$ matrix, say the axial stiffness $AE/L$ at node 1 in the x-direction. When transforming to global coordinates, this axial stiffness will contribute to both the global X and Y directions at node 1, scaled by $\cos\theta$ and $\sin\theta$ respectively. The full matrix multiplication accounts for all these transformations.

---

### 4. Assembly of Load Vector and Stiffness Matrix

Once the element stiffness matrices are in the global coordinate system, they are assembled into a global stiffness matrix for the entire structure.

*   **Global Stiffness Matrix ($K$):** This is a square matrix whose size is equal to the total number of degrees of freedom (DOFs) in the structure. The entries in $K$ represent the force required at a DOF to produce a unit displacement at another DOF, with all other DOFs held fixed.

    *   **Assembly Process:** For each element, its global stiffness matrix ($k_{global}$) is placed into the larger global stiffness matrix ($K$) at positions corresponding to the global DOFs of the element's nodes.
    *   **Direct Stiffness Summation:** If multiple elements share a common DOF (i.e., a node), their contributions to that DOF in the global stiffness matrix are directly added.

*   **Global Load Vector ($F$):** This vector contains the external forces and moments applied at each DOF of the structure.

    *   **Assembly Process:** Applied loads at nodes are directly placed in the load vector corresponding to their DOF.
    *   **Fixed-End Forces (for distributed loads):** If loads are distributed along an element (e.g., uniform load on a beam), they are first converted into equivalent nodal forces and moments (fixed-end forces). These equivalent forces are then added to the global load vector.

*   **Element Load Vectors:** Each element will also have its own load vector representing the applied loads and fixed-end forces acting on that element, expressed in global coordinates. These are also assembled into the global load vector.

**Example of Assembly (Conceptual):**

Consider a structure with 3 nodes, and each node has 3 DOFs (e.g., 2 translations, 1 rotation). The global stiffness matrix $K$ will be 9x9, and the global displacement and load vectors $U$ and $F$ will be 9x1.

Let's say we have an element 'e' connecting nodes 2 and 3. Its global stiffness matrix $k_{global}^e$ will be 6x6 (assuming 3 DOFs per node and 2 nodes per element).
The DOFs for this element in the global system would be: $U_{DOF_{global\_2}}, U_{DOF_{global\_3}}$.
So, the 6x6 $k_{global}^e$ is mapped into the larger 9x9 $K$ matrix. If node 2 has DOFs 4, 5, 6 and node 3 has DOFs 7, 8, 9:

$K_{4,4} = K_{4,4} + k_{global}^e(1,1)$
$K_{4,5} = K_{4,5} + k_{global}^e(1,2)$
...
$K_{7,7} = K_{7,7} + k_{global}^e(4,4)$
... and so on for all 36 entries of $k_{global}^e$.

---

### 5. Solution of Two-Span Continuous Beam

Let's consider a two-span continuous beam supported at three points.

**Problem Setup:**

*   Two spans of length $L$.
*   Supports at Node 1 (pinned), Node 2 (roller), Node 3 (pinned).
*   Applied load $P$ at the mid-span of the first segment.
*   Uniformly distributed load $w$ on the second segment.
*   Assume $E$ and $I$ are constant.

**DSM Steps:**

1.  **Discretization:** Divide the beam into two elements: Element 1 (Node 1 to Node 2) and Element 2 (Node 2 to Node 3).
2.  **Degrees of Freedom:**
    *   Node 1: $u_1, v_1, \theta_1$ (pinned support means $u_1=0, v_1=0$).
    *   Node 2: $u_2, v_2, \theta_2$.
    *   Node 3: $u_3, v_3, \theta_3$ (pinned support means $v_3=0$).
    *   Total DOFs = 9 (but boundary conditions will reduce the number of unknowns).
    *   Independent DOFs = $u_2, v_2, \theta_2, u_3$. (4 DOFs)
3.  **Local Stiffness Matrices:** Write the 6x6 $k_{local}$ for Element 1 and Element 2.
4.  **Coordinate Transformation:**
    *   Both elements are horizontal, so $\theta = 0$.
    *   The transformation matrix $T_{disp}$ becomes an identity matrix for $\theta=0$.
    *   Therefore, $k_{global}^1 = k_{local}^1$ and $k_{global}^2 = k_{local}^2$.
5.  **Assembly of Global Stiffness Matrix ($K$):**
    *   The size of $K$ will be $9 \times 9$ initially.
    *   Map the DOFs of Element 1 (DOFs 1, 2, 3 for node 1; DOFs 4, 5, 6 for node 2) into $K$.
    *   Map the DOFs of Element 2 (DOFs 4, 5, 6 for node 2; DOFs 7, 8, 9 for node 3) into $K$.
    *   Sum contributions at shared DOFs (Node 2).
6.  **Assembly of Global Load Vector ($F$):**
    *   Initialize $F$ as a zero vector of size 9x1.
    *   **Element 1:** Applied load $P$ at mid-span. This needs to be converted to equivalent nodal forces and moments for the element. For a concentrated load $P$ at mid-span (L/2):
        *   $P_{y1} = P/2$, $M_1 = PL/8$
        *   $P_{y2} = P/2$, $M_2 = -PL/8$
        *   These are in local coordinates, and since $\theta=0$, they are the same in global coordinates.
        *   Add these to $F$ at DOFs 2 (Node 1 vertical), 6 (Node 2 vertical), and DOFs for moments.
    *   **Element 2:** Uniformly distributed load $w$. Convert to equivalent nodal forces and moments:
        *   $P_{y1} = wL/2$, $M_1 = wL^2/12$
        *   $P_{y2} = wL/2$, $M_2 = -wL^2/12$
        *   These are in local coordinates and then global.
        *   Add these to $F$ at DOFs 5 (Node 2 vertical), 9 (Node 3 vertical), and DOFs for moments.
7.  **Apply Boundary Conditions:**
    *   $u_1 = 0, v_1 = 0$
    *   $v_3 = 0$
    *   This means we can eliminate rows and columns corresponding to these fixed DOFs.
    *   Alternatively, we can use penalty methods or modify the matrix by setting diagonal elements to a large number and the corresponding load to that number.

    After applying BCs, we solve for the unknown displacements (e.g., $u_2, v_2, \theta_2, u_3$).
8.  **Solve for Displacements:** Solve the reduced system of equations $F_{reduced} = K_{reduced} \cdot U_{reduced}$.
9.  **Calculate Element Forces:** Use the computed nodal displacements to find forces and moments in each element using the element stiffness matrices.

---

### 6. Solution of Single Bay Single Storey Portal Frame

**Problem Setup:**

*   Two vertical columns of height $H$.
*   One horizontal beam of length $B$.
*   Connections at the base are pinned or fixed.
*   Loads can be vertical (gravity) or horizontal (wind).
*   Assume $E$ and $I$ are constant for all members.

**DSM Steps:**

1.  **Discretization:**
    *   Column 1: Node 1 (base) to Node 2 (top).
    *   Beam: Node 2 (left) to Node 3 (right).
    *   Column 2: Node 3 (top) to Node 4 (base).

2.  **Degrees of Freedom:** (Assuming pinned bases)
    *   Node 1: $u_1, v_1, \theta_1$ (pinned supports means $u_1=0, v_1=0$).
    *   Node 2: $u_2, v_2, \theta_2$.
    *   Node 3: $u_3, v_3, \theta_3$.
    *   Node 4: $u_4, v_4, \theta_4$ (pinned supports means $u_4=0, v_4=0$).
    *   Total DOFs = 12.
    *   Independent DOFs = $u_2, v_2, \theta_2, u_3, v_3, \theta_3$. (6 DOFs)

3.  **Local Stiffness Matrices:** Write the 6x6 $k_{local}$ for each member (Column 1, Beam, Column 2).

4.  **Coordinate Transformation:**
    *   **Columns:** These are vertical, so their angle with the global x-axis is $\theta = 90^\circ$ or $\theta = -90^\circ$.
        *   For Column 1 (Node 1 to Node 2): $\theta = 90^\circ$. $\cos(90^\circ)=0, \sin(90^\circ)=1$.
        *   For Column 2 (Node 3 to Node 4): $\theta = -90^\circ$. $\cos(-90^\circ)=0, \sin(-90^\circ)=-1$.
        *   The transformation matrix $T_{disp}$ will involve these values.
    *   **Beam:** This is horizontal, so $\theta = 0^\circ$. $T_{disp}$ will be an identity matrix.
    *   Calculate $k_{global}^1 = T_{disp1}^T \cdot k_{local}^1 \cdot T_{disp1}$ for Column 1.
    *   Calculate $k_{global}^{beam} = T_{disp}^{beam} \cdot k_{local}^{beam} \cdot T_{disp}^{beam}$ for the Beam.
    *   Calculate $k_{global}^2 = T_{disp2}^T \cdot k_{local}^2 \cdot T_{disp2}$ for Column 2.

5.  **Assembly of Global Stiffness Matrix ($K$):**
    *   The size of $K$ will be $12 \times 12$.
    *   Map the DOFs of Column 1 (DOFs 1-6) into $K$.
    *   Map the DOFs of the Beam (DOFs 4-9) into $K$.
    *   Map the DOFs of Column 2 (DOFs 7-12) into $K$.
    *   Sum contributions at shared DOFs (Node 2: DOFs 4, 5, 6; Node 3: DOFs 7, 8, 9).

6.  **Assembly of Global Load Vector ($F$):**
    *   Initialize $F$ as a zero vector of size 12x1.
    *   Add applied loads at nodes. For example, a horizontal force $H$ at Node 2 and a vertical force $V$ at Node 3.
    *   If there are distributed loads on members, convert them to fixed-end forces and add them to the appropriate nodal DOFs in $F$.

7.  **Apply Boundary Conditions:**
    *   $u_1=0, v_1=0, \theta_1=0$ (for pinned base at Node 1).
    *   $u_4=0, v_4=0, \theta_4=0$ (for pinned base at Node 4).
    *   Modify or reduce the system to solve for the 6 unknown displacements ($u_2, v_2, \theta_2, u_3, v_3, \theta_3$).

8.  **Solve for Displacements:** Solve $F_{reduced} = K_{reduced} \cdot U_{reduced}$.

9.  **Calculate Element Forces:** Use the computed nodal displacements to find forces and moments in each member by transforming them back to local coordinates or by directly using the global stiffness matrices and displacements.

---

### Important Points to Remember:

*   **Sign Convention:** Be consistent with sign conventions for forces, moments, displacements, and rotations in both local and global systems.
*   **Coordinate Transformation Matrix:** The accuracy of the transformation matrix is critical. Double-check the $\cos\theta$ and $\sin\theta$ values and their placement.
*   **Assembly:** Proper summation of stiffness contributions at shared nodes is fundamental.
*   **Boundary Conditions:** Correctly applying boundary conditions significantly reduces the size of the system to be solved.
*   **Fixed-End Forces:** For distributed loads, accurate calculation of fixed-end forces is essential.
*   **Degrees of Freedom:** Ensure all DOFs are accounted for and correctly mapped during assembly.
*   **Matrix Inversion/Solution:** Solving $F=KU$ requires matrix inversion or Gaussian elimination. This is typically done computationally.

---

### Practice Questions/Exercises:

**Question 1: Transformation of Stiffness Matrix**

A beam element has a local stiffness matrix $k_{local}$ for axial stiffness of $AE/L$. If this element is inclined at an angle $\theta = 30^\circ$ with respect to the global x-axis, what are the contributions of this axial stiffness to the global stiffness matrix?

**Answer:**
The axial stiffness $AE/L$ acts along the local x-axis. When transformed to global coordinates, this stiffness component will be distributed to the global x and y degrees of freedom.
The contribution to the global stiffness matrix is given by $T^T k_{local} T$.
For axial stiffness along the local x-axis, consider a 2x2 matrix representing axial force and displacement: $k_{local\_axial} = \begin{bmatrix} AE/L & -AE/L \\ -AE/L & AE/L \end{bmatrix}$.
The transformation matrix for axial displacement is $T_{axial} = \begin{bmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{bmatrix}$.
The transformed axial stiffness matrix is $k_{global\_axial} = T_{axial}^T k_{local\_axial} T_{axial}$.
Let $c = \cos\theta$ and $s = \sin\theta$.
$T_{axial}^T = \begin{bmatrix} c & -s \\ s & c \end{bmatrix}$.
$k_{global\_axial} = \begin{bmatrix} c & -s \\ s & c \end{bmatrix} \begin{bmatrix} AE/L & -AE/L \\ -AE/L & AE/L \end{bmatrix} \begin{bmatrix} c & s \\ -s & c \end{bmatrix}$
$k_{global\_axial} = \begin{bmatrix} c & -s \\ s & c \end{bmatrix} \begin{bmatrix} (AE/L)c + (AE/L)s & (AE/L)s - (AE/L)c \\ -(AE/L)s - (AE/L)c & -(AE/L)c + (AE/L)s \end{bmatrix}$
$k_{global\_axial} = \frac{AE}{L} \begin{bmatrix} c & -s \\ s & c \end{bmatrix} \begin{bmatrix} c+s & s-c \\ -(s+c) & -(c-s) \end{bmatrix}$
$k_{global\_axial} = \frac{AE}{L} \begin{bmatrix} c(c+s) + s(s+c) & c(s-c) + s(-(c-s)) \\ s(c+s) - c(s+c) & s(s-c) - c(c-s) \end{bmatrix}$
$k_{global\_axial} = \frac{AE}{L} \begin{bmatrix} c^2+cs+s^2+sc & cs-c^2-sc+s^2 \\ sc+s^2-sc-c^2 & s^2-sc-c^2+sc \end{bmatrix}$
$k_{global\_axial} = \frac{AE}{L} \begin{bmatrix} c^2+s^2+2sc & s^2-c^2 \\ s^2-c^2 & s^2+c^2-2sc \end{bmatrix} = \frac{AE}{L} \begin{bmatrix} 1+2sc & s^2-c^2 \\ s^2-c^2 & 1-2sc \end{bmatrix}$

For $\theta = 30^\circ$, $c = \cos 30^\circ = \sqrt{3}/2$, $s = \sin 30^\circ = 1/2$.
$c^2 = 3/4$, $s^2 = 1/4$, $sc = \sqrt{3}/4$.
$k_{global\_axial} = \frac{AE}{L} \begin{bmatrix} 1 + 2(\sqrt{3}/4) & 1/4 - 3/4 \\ 1/4 - 3/4 & 1 - 2(\sqrt{3}/4) \end{bmatrix} = \frac{AE}{L} \begin{bmatrix} 1 + \sqrt{3}/2 & -1/2 \\ -1/2 & 1 - \sqrt{3}/2 \end{bmatrix}$
The contribution to the global stiffness matrix entries would be:
$K_{xx} = \frac{AE}{L} (1 + \sqrt{3}/2)$
$K_{xy} = \frac{AE}{L} (-1/2)$
$K_{yx} = \frac{AE}{L} (-1/2)$
$K_{yy} = \frac{AE}{L} (1 - \sqrt{3}/2)$

**Question 2: Assembly of Stiffness Matrix**

Consider two beam elements connected at a node.
Element 1 connects Node A to Node B. Element 2 connects Node B to Node C.
Assume each node has 3 DOFs: $u, v, \theta$.
Element 1 has DOFs {1, 2, 3} at A and {4, 5, 6} at B.
Element 2 has DOFs {4, 5, 6} at B and {7, 8, 9} at C.
The global stiffness matrix for Element 1 is $k_1$ (6x6), and for Element 2 is $k_2$ (6x6).
Show how $k_1$ and $k_2$ are assembled into the global stiffness matrix $K$ (9x9).

**Answer:**
The global stiffness matrix $K$ will be 9x9.
The 6x6 matrix $k_1$ will be placed into $K$ as follows:
*   Entries corresponding to DOFs {1, 2, 3} of Element 1 (Node A) will go into rows 1-3 and columns 1-3 of $K$.
*   Entries corresponding to DOFs {4, 5, 6} of Element 1 (Node B) will go into rows 4-6 and columns 4-6 of $K$.

The 6x6 matrix $k_2$ will be placed into $K$ as follows:
*   Entries corresponding to DOFs {4, 5, 6} of Element 2 (Node B) will go into rows 4-6 and columns 4-6 of $K$.
*   Entries corresponding to DOFs {7, 8, 9} of Element 2 (Node C) will go into rows 7-9 and columns 7-9 of $K$.

When assembling, the contributions to the shared DOFs (Node B, DOFs 4, 5, 6) are added:
$K_{4,4} = k_1(1,1) + k_2(1,1)$
$K_{4,5} = k_1(1,2) + k_2(1,2)$
...
$K_{6,6} = k_1(3,3) + k_2(3,3)$

All other entries of $K$ are filled directly from $k_1$ and $k_2$ at their respective DOF positions.

**Question 3: Portal Frame DOFs and Boundary Conditions**

Consider a single-bay, single-storey portal frame with pinned bases at the bottom of both columns.
*   Node 1: Bottom of Column 1.
*   Node 2: Top of Column 1 / Left of Beam.
*   Node 3: Right of Beam / Top of Column 2.
*   Node 4: Bottom of Column 2.

List the DOFs for each node and state the boundary conditions for this portal frame.

**Answer:**
Assume 3 DOFs per node: $u$ (horizontal translation), $v$ (vertical translation), $\theta$ (rotation).

*   **Node 1 (Bottom of Column 1):**
    *   DOFs: $u_1, v_1, \theta_1$
    *   Boundary Conditions: Pinned base. $u_1 = 0$, $v_1 = 0$, $\theta_1 = 0$.

*   **Node 2 (Top of Column 1 / Left of Beam):**
    *   DOFs: $u_2, v_2, \theta_2$
    *   Boundary Conditions: None (free to translate and rotate).

*   **Node 3 (Right of Beam / Top of Column 2):**
    *   DOFs: $u_3, v_3, \theta_3$
    *   Boundary Conditions: None (free to translate and rotate).

*   **Node 4 (Bottom of Column 2):**
    *   DOFs: $u_4, v_4, \theta_4$
    *   Boundary Conditions: Pinned base. $u_4 = 0$, $v_4 = 0$, $\theta_4 = 0$.

Total DOFs = 12.
The independent DOFs that need to be solved for are those at Nodes 2 and 3: $u_2, v_2, \theta_2, u_3, v_3, \theta_3$. There are 6 independent DOFs.

---

This concludes Module 2. You should now have a solid understanding of the basic principles of the Direct Stiffness Method, including coordinate transformations, assembly, and application to simple structures.
