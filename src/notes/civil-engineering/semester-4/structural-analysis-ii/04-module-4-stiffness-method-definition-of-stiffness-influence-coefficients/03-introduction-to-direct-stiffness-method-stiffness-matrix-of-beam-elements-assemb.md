---
title: "Introduction to direct stiffness method- stiffness matrix of beam elements, assembly of load vector and stiffness matrix, solution of two span continuous beams."
subject: "STRUCTURAL ANALYSIS - II"
module: "Module 4: Stiffness method: Definition of stiffness influence coefficients "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109a5"
status: "completed"
scrapedAt: "2026-05-20T18:47:14.646Z"
---
# Structural Analysis - II: Module 4 - Stiffness Method

## Topic: Introduction to Direct Stiffness Method: Stiffness Matrix of Beam Elements, Assembly of Load Vector and Stiffness Matrix, Solution of Two Span Continuous Beams

---

### Learning Outcomes:

*   Understand the fundamental concept of the direct stiffness method.
*   Derive the stiffness matrix for a beam element.
*   Assemble the global stiffness matrix and load vector for a given structure.
*   Solve for displacements and forces in a two-span continuous beam using the direct stiffness method.

---

### 1. Introduction to the Direct Stiffness Method

The Direct Stiffness Method (DSM) is a powerful and systematic approach for analyzing indeterminate structures. It's a member-by-member approach that relies on the concept of element stiffness to build a global system of equations. This method is the foundation of most finite element analysis software.

**Key Concepts:**

*   **Stiffness:** The resistance of an elastic body to deformation under the action of applied forces. It's the force required to produce a unit displacement.
*   **Element Stiffness:** The relationship between forces and displacements at the nodes of a single structural element (e.g., a beam, truss).
*   **Global Stiffness:** The relationship between all external forces applied to the structure and all resulting nodal displacements.
*   **Degrees of Freedom (DOF):** The independent parameters (displacements and rotations) that define the deformed shape of a structure.
*   **System of Equations:** The DSM formulates the equilibrium of the structure as a system of linear algebraic equations in the form:
    $$[K] \{D\} = \{F\}$$
    Where:
    *   $[K]$ is the **global stiffness matrix**.
    *   $\{D\}$ is the **global displacement vector** (unknown nodal displacements).
    *   $\{F\}$ is the **global load vector** (external forces and moments applied at nodes).

**Steps of the Direct Stiffness Method:**

1.  **Discretization:** Divide the structure into a series of discrete elements.
2.  **DOF Identification:** Identify all degrees of freedom (displacements and rotations) at each node of the structure.
3.  **Element Stiffness Matrix Derivation:** Derive the stiffness matrix for each type of structural element (e.g., beam, truss, frame).
4.  **Element Load Vector Derivation:** Determine the equivalent nodal forces and moments for any distributed loads or fixed-end moments acting on each element.
5.  **Assembly:** Assemble the individual element stiffness matrices and load vectors into a global stiffness matrix and a global load vector. This is done by mapping element nodal degrees of freedom to global degrees of freedom.
6.  **Boundary Conditions:** Apply the known displacements (or rotations) at the supports (e.g., zero displacement at a fixed support) by modifying the global stiffness matrix and load vector.
7.  **Solution:** Solve the system of linear equations $[K] \{D\} = \{F\}$ for the unknown nodal displacements $\{D\}$.
8.  **Force Calculation:** Calculate the forces (axial, shear, moment) within each element using the calculated nodal displacements and the element stiffness matrices.

---

### 2. Stiffness Matrix of Beam Elements

Consider a single prismatic beam element with length $L$, Young's modulus $E$, and moment of inertia $I$. The element has two nodes, say node $i$ and node $j$. At each node, there are two degrees of freedom: vertical displacement ($v$) and rotation ($\theta$).

**Local Coordinate System:**

*   Let the local coordinate system be defined along the beam axis.
*   The degrees of freedom at node $i$ are $v_i$ and $\theta_i$.
*   The degrees of freedom at node $j$ are $v_j$ and $\theta_j$.

**Relationship between Nodal Forces and Displacements:**

The stiffness matrix relates the nodal forces and moments at the ends of the element to the nodal displacements and rotations.

Let the nodal forces and moments be:
*   At node $i$: Vertical force $P_i$ and moment $M_i$.
*   At node $j$: Vertical force $P_j$ and moment $M_j$.

The force-displacement relationship for the beam element in its local coordinate system is:

$$
\begin{bmatrix}
P_i \\
M_i \\
P_j \\
M_j
\end{bmatrix}
=
\begin{bmatrix}
k_{11} & k_{12} & k_{13} & k_{14} \\
k_{21} & k_{22} & k_{23} & k_{24} \\
k_{31} & k_{32} & k_{33} & k_{34} \\
k_{41} & k_{42} & k_{43} & k_{44}
\end{bmatrix}
\begin{bmatrix}
v_i \\
\theta_i \\
v_j \\
\theta_j
\end{bmatrix}
$$

The elements of the stiffness matrix $[k]$ are the stiffness influence coefficients. $k_{pq}$ is the force at DOF $p$ due to a unit displacement at DOF $q$, with all other DOFs held at zero.

**Derivation of Beam Element Stiffness Matrix:**

We can derive the stiffness matrix by considering unit displacements at each DOF while restraining the others.

**Case 1: Unit Vertical Displacement at Node $i$ ($v_i = 1$, $\theta_i = 0$, $v_j = 0$, $\theta_j = 0$)**

This creates a deflection shape that is a cubic polynomial. Using beam deflection equations (e.g., Euler-Bernoulli beam theory), we can find the forces and moments.

*   $P_i$ (vertical force at $i$) = $12EI/L^3$
*   $M_i$ (moment at $i$) = $6EI/L^2$
*   $P_j$ (vertical force at $j$) = $-12EI/L^3$ (equal and opposite to $P_i$ for equilibrium)
*   $M_j$ (moment at $j$) = $-6EI/L^2$ (required to maintain zero rotation at $j$ and equilibrium)

This gives the first column of the stiffness matrix:
$$
\begin{bmatrix}
12EI/L^3 \\
6EI/L^2 \\
-12EI/L^3 \\
-6EI/L^2
\end{bmatrix}
$$

**Case 2: Unit Rotation at Node $i$ ($\theta_i = 1$, $v_i = 0$, $v_j = 0$, $\theta_j = 0$)**

This is a classic slope-deflection case.

*   $P_i$ = $6EI/L^2$
*   $M_i$ = $4EI/L$
*   $P_j$ = $-6EI/L^2$
*   $M_j$ = $2EI/L$

This gives the second column of the stiffness matrix:
$$
\begin{bmatrix}
6EI/L^2 \\
4EI/L \\
-6EI/L^2 \\
2EI/L
\end{bmatrix}
$$

**Case 3: Unit Vertical Displacement at Node $j$ ($v_j = 1$, $v_i = 0$, $\theta_i = 0$, $\theta_j = 0$)**

This is the same as Case 1, but with displacement at node $j$.

*   $P_i$ = $-12EI/L^3$
*   $M_i$ = $-6EI/L^2$
*   $P_j$ = $12EI/L^3$
*   $M_j$ = $6EI/L^2$

This gives the third column of the stiffness matrix:
$$
\begin{bmatrix}
-12EI/L^3 \\
-6EI/L^2 \\
12EI/L^3 \\
6EI/L^2
\end{bmatrix}
$$

**Case 4: Unit Rotation at Node $j$ ($\theta_j = 1$, $v_i = 0$, $\theta_i = 0$, $v_j = 0$)**

This is the same as Case 2, but with rotation at node $j$.

*   $P_i$ = $-6EI/L^2$
*   $M_i$ = $2EI/L$
*   $P_j$ = $6EI/L^2$
*   $M_j$ = $4EI/L$

This gives the fourth column of the stiffness matrix:
$$
\begin{bmatrix}
-6EI/L^2 \\
2EI/L \\
6EI/L^2 \\
4EI/L
\end{bmatrix}
$$

**The Local Beam Element Stiffness Matrix $[k_{local}]$:**

$$
[k_{local}] = \frac{EI}{L^3}
\begin{bmatrix}
12 & 6L & -12 & 6L \\
6L & 4L^2 & -6L & 2L^2 \\
-12 & -6L & 12 & -6L \\
6L & 2L^2 & -6L & 4L^2
\end{bmatrix}
$$

**Important Points:**

*   The stiffness matrix is symmetric ($k_{pq} = k_{qp}$).
*   The sum of forces in any column is zero (except for rigid body motion).
*   The matrix represents the relationship between nodal forces and displacements in the element's local coordinate system.

---

### 3. Assembly of Load Vector and Stiffness Matrix

The process of assembling the global stiffness matrix and load vector from individual element matrices is crucial.

**Assembly of Global Stiffness Matrix $[K]$:**

The global stiffness matrix is formed by summing the contributions of each element's stiffness matrix into the appropriate positions corresponding to the global degrees of freedom.

**Steps:**

1.  **Define Global DOF:** Number all degrees of freedom for the entire structure. For a continuous beam with $n$ nodes, there are $2n$ DOFs (vertical displacement and rotation at each node).
2.  **Element Stiffness Matrix Transformation (if necessary):** If elements are not aligned with the global coordinate system (e.g., inclined members), transformation matrices are used. For beam elements aligned with the global axis, the local stiffness matrix can be directly used if the DOFs are ordered consistently.
3.  **Mapping:** For each element, identify the global DOF numbers corresponding to its local DOFs. Place the values from the element stiffness matrix $[k_{element}]$ into the corresponding positions in the larger global stiffness matrix $[K]$.
    *   If element $e$ has local DOFs corresponding to global DOFs $p, q, r, s$, then the submatrix $[k_{element}]$ is added to $[K]$ at the rows/columns $p, q, r, s$.

**Example of Assembly:**

Consider a structure with 3 nodes (0, 1, 2).
*   Node 0: DOFs 1 (v0), 2 (theta0)
*   Node 1: DOFs 3 (v1), 4 (theta1)
*   Node 2: DOFs 5 (v2), 6 (theta2)

Structure is made of Element 1 (nodes 0-1) and Element 2 (nodes 1-2).

*   **Element 1 (nodes 0-1):**
    *   Local DOF 1 -> Global DOF 1 ($v_0$)
    *   Local DOF 2 -> Global DOF 2 ($\theta_0$)
    *   Local DOF 3 -> Global DOF 3 ($v_1$)
    *   Local DOF 4 -> Global DOF 4 ($\theta_1$)
    The $[k_{element1}]$ matrix (4x4) is placed into the global $[K]$ matrix (6x6) at positions corresponding to these global DOFs.

*   **Element 2 (nodes 1-2):**
    *   Local DOF 1 -> Global DOF 3 ($v_1$)
    *   Local DOF 2 -> Global DOF 4 ($\theta_1$)
    *   Local DOF 3 -> Global DOF 5 ($v_2$)
    *   Local DOF 4 -> Global DOF 6 ($\theta_2$)
    The $[k_{element2}]$ matrix (4x4) is placed into the global $[K]$ matrix (6x6) at positions corresponding to these global DOFs.

When an element's DOF corresponds to a DOF that is already occupied by another element (e.g., node 1), the stiffness values are **added** to the global matrix.

**Assembly of Global Load Vector $\{F\}$:**

The global load vector $\{F\}$ contains the external forces and moments applied at each node of the structure, corresponding to the global degrees of freedom.

**Steps:**

1.  **Identify External Loads:** Determine all applied forces (vertical, horizontal) and moments at each node.
2.  **Assign to Global DOFs:** Place these loads into the global load vector $\{F\}$ at the positions corresponding to the respective global DOFs.
3.  **Distributed Loads:** Distributed loads on an element must be converted into equivalent nodal forces and moments. These are often called "fixed-end forces" or "equivalent nodal loads." These equivalent loads are then added to the global load vector at the appropriate DOF positions.

**Example of Load Assembly:**

If there's a downward force of $P$ at node 1 (global DOF 3) and a clockwise moment of $M$ at node 2 (global DOF 6), the load vector would look like:

$$
\{F\} = \begin{bmatrix}
0 \\
0 \\
-P \\
0 \\
0 \\
M
\end{bmatrix}
$$
(Assuming upward is positive for vertical forces and counter-clockwise for moments).

---

### 4. Solution of Two Span Continuous Beams

Let's illustrate the DSM with a two-span continuous beam example.

**Problem Statement:**

Consider a two-span continuous beam $ABC$, simply supported at $A$ and $C$, and continuous over $B$.
*   Span $AB$ has length $L_1$, $EI$ is constant.
*   Span $BC$ has length $L_2$, $EI$ is constant.
*   A vertical load $P$ is applied at the mid-span of $AB$.
*   A moment $M$ is applied at node $B$.

**Objective:** Determine the vertical displacements and rotations at nodes $A, B, C$, and internal forces (shear and moment) in each span.

**Solution Steps:**

**Step 1: Discretization and DOF Identification**

*   Nodes: $A$, $B$, $C$.
*   Let's consider node numbering: Node $A$ as 1, Node $B$ as 2, Node $C$ as 3.
*   Degrees of Freedom:
    *   Node $A$: $v_1$ (vertical displacement), $\theta_1$ (rotation). (Node A is pinned, so $v_1=0$, $\theta_1$ is not necessarily zero unless it's a fixed support or there are no applied moments at A). Assuming pinned support at A, DOF 1 is $v_1=0$. If it's a roller and pinned in the x-direction, we only care about $v_1$ and $\theta_1$.
    *   Node $B$: $v_2$ (vertical displacement), $\theta_2$ (rotation).
    *   Node $C$: $v_3$ (vertical displacement), $\theta_3$ (rotation). (Node C is pinned, so $v_3=0$).

*   Total DOFs = 6. However, we know $v_1=0$ and $v_3=0$. This means we have 4 unknown DOFs: $\theta_1, v_2, \theta_2, \theta_3$. We'll handle boundary conditions later.
*   Let's define global DOFs as: 1: $v_A$, 2: $\theta_A$, 3: $v_B$, 4: $\theta_B$, 5: $v_C$, 6: $\theta_C$.
*   Since A and C are pinned, $v_A = 0$ and $v_C = 0$. The unknown DOFs are $\theta_A, v_B, \theta_B, \theta_C$.

**Step 2: Element Stiffness Matrices**

*   **Element 1 (Beam AB):** Length $L_1$, $EI_1$.
    *   Nodes: $A$ (local node 1), $B$ (local node 2).
    *   Local DOFs: $v_A, \theta_A, v_B, \theta_B$.
    *   Global DOFs: 1, 2, 3, 4.

    $$
    [k_{e1}] = \frac{EI_1}{L_1^3}
    \begin{bmatrix}
    12 & 6L_1 & -12 & 6L_1 \\
    6L_1 & 4L_1^2 & -6L_1 & 2L_1^2 \\
    -12 & -6L_1 & 12 & -6L_1 \\
    6L_1 & 2L_1^2 & -6L_1 & 4L_1^2
    \end{bmatrix}
    $$

*   **Element 2 (Beam BC):** Length $L_2$, $EI_2$.
    *   Nodes: $B$ (local node 1), $C$ (local node 2).
    *   Local DOFs: $v_B, \theta_B, v_C, \theta_C$.
    *   Global DOFs: 3, 4, 5, 6.

    $$
    [k_{e2}] = \frac{EI_2}{L_2^3}
    \begin{bmatrix}
    12 & 6L_2 & -12 & 6L_2 \\
    6L_2 & 4L_2^2 & -6L_2 & 2L_2^2 \\
    -12 & -6L_2 & 12 & -6L_2 \\
    6L_2 & 2L_2^2 & -6L_2 & 4L_2^2
    \end{bmatrix}
    $$

**Step 3: Element Load Vectors (Equivalent Nodal Loads)**

*   **Element 1 (Beam AB):**
    *   A downward load $P$ at the mid-span of $AB$.
    *   The equivalent nodal loads for a uniform load $w$ over the entire span are $wL/2$ and $wL^2/12$ for forces and moments, respectively.
    *   For a concentrated load $P$ at mid-span, the equivalent nodal forces and moments are:
        *   At node $A$ (local DOF 1): Force = $P/2$ (downward), Moment = $PL/8$ (counter-clockwise)
        *   At node $B$ (local DOF 3): Force = $P/2$ (downward), Moment = $-PL/8$ (clockwise)

    *   Let's use upward force as positive.
    *   Local element load vector for $e1$ (considering only the $P$ load):
        $$
        \{f_{e1}\} = \begin{bmatrix}
        -P/2 \\
        -PL/8 \\
        -P/2 \\
        PL/8
        \end{bmatrix}
        $$
        (Where the first two entries correspond to $v_A, \theta_A$, and the last two to $v_B, \theta_B$)

*   **Element 2 (Beam BC):**
    *   No distributed loads on $BC$.
    *   The applied moment $M$ is at node $B$, which is handled when assembling the global load vector.

**Step 4: Assembly of Global Stiffness Matrix $[K]$ and Load Vector $\{F\}$**

*   The global stiffness matrix will be 6x6.
*   The global load vector will be 6x1.

**Assembly of $[K]$:**

Map $[k_{e1}]$ and $[k_{e2}]$ into the 6x6 global matrix.

*   $[k_{e1}]$ contributes to rows/columns 1, 2, 3, 4.
*   $[k_{e2}]$ contributes to rows/columns 3, 4, 5, 6.

At shared DOFs (e.g., node $B$, DOFs 3 and 4), the corresponding stiffness values are **added**.

Let's denote the terms of $[k_{e1}]$ as $k_{ij}^{(1)}$ and $[k_{e2}]$ as $k_{ij}^{(2)}$.

$$
[K] = \begin{bmatrix}
k_{11}^{(1)} & k_{12}^{(1)} & k_{13}^{(1)} & k_{14}^{(1)} & 0 & 0 \\
k_{21}^{(1)} & k_{22}^{(1)} & k_{23}^{(1)} & k_{24}^{(1)} & 0 & 0 \\
k_{31}^{(1)} & k_{32}^{(1)} & k_{33}^{(1)}+k_{11}^{(2)} & k_{34}^{(1)}+k_{12}^{(2)} & k_{13}^{(2)} & k_{14}^{(2)} \\
k_{41}^{(1)} & k_{42}^{(1)} & k_{43}^{(1)}+k_{21}^{(2)} & k_{44}^{(1)}+k_{22}^{(2)} & k_{23}^{(2)} & k_{24}^{(2)} \\
0 & 0 & k_{31}^{(2)} & k_{32}^{(2)} & k_{33}^{(2)} & k_{34}^{(2)} \\
0 & 0 & k_{41}^{(2)} & k_{42}^{(2)} & k_{43}^{(2)} & k_{44}^{(2)}
\end{bmatrix}
$$

**Assembly of $\{F\}$:**

*   Initial load vector from element loads:
    $$
    \{F_{loads}\} = \begin{bmatrix}
    0 \\
    0 \\
    -P/2 \\
    PL/8 \\
    0 \\
    0
    \end{bmatrix}
    $$
    (This is for $v_A, \theta_A, v_B, \theta_B, v_C, \theta_C$)

*   Add applied external loads:
    *   The applied moment $M$ at node $B$ is a clockwise moment. Let's assume clockwise is positive for external moments.
    $$
    \{F_{applied}\} = \begin{bmatrix}
    0 \\
    0 \\
    0 \\
    M \\
    0 \\
    0
    \end{bmatrix}
    $$

*   Total global load vector:
    $$
    \{F\} = \{F_{loads}\} + \{F_{applied}\} = \begin{bmatrix}
    0 \\
    0 \\
    -P/2 \\
    PL/8 + M \\
    0 \\
    0
    \end{bmatrix}
    $$

**Step 5: Apply Boundary Conditions**

We know $v_A=0$ (DOF 1) and $v_C=0$ (DOF 5).

There are several ways to handle this:

*   **Partitioning Method:** Remove the rows and columns corresponding to known zero displacements.
    *   We are left with DOFs 2 ($\theta_A$), 3 ($v_B$), 4 ($\theta_B$), 6 ($\theta_C$).
    *   The reduced system becomes:
        $$
        [K'] \{D'\} = \{F'\}
        $$
        Where $[K']$ is the 4x4 matrix obtained by removing rows 1 and 5, and columns 1 and 5 from $[K]$.
        $\{D'\} = \begin{bmatrix} \theta_A \\ v_B \\ \theta_B \\ \theta_C \end{bmatrix}$
        $\{F'\}$ is the vector obtained by removing the 1st and 5th elements from $\{F\}$.

*   **Penalty Method / Modification Method:** Modify the global matrix and load vector. For each known zero displacement $D_k = 0$:
    *   Set the diagonal element $K_{kk} = 1$ (or a very large number for numerical stability).
    *   Set all other elements in row $k$ and column $k$ to zero.
    *   Set the corresponding load $F_k = 0$.

Let's use the partitioning method for clarity here.

The modified system will be 4x4.
The unknown displacements are $D' = [\theta_A, v_B, \theta_B, \theta_C]^T$.

**Step 6: Solve the System of Equations**

Solve the reduced system: $[K'] \{D'\} = \{F'\}$ for $\{D'\}$.

$$
\begin{bmatrix}
K'_{22} & K'_{23} & K'_{24} & K'_{26} \\
K'_{32} & K'_{33} & K'_{34} & K'_{36} \\
K'_{42} & K'_{43} & K'_{44} & K'_{46} \\
K'_{62} & K'_{63} & K'_{64} & K'_{66}
\end{bmatrix}
\begin{bmatrix}
\theta_A \\
v_B \\
\theta_B \\
\theta_C
\end{bmatrix}
=
\begin{bmatrix}
F'_2 \\
F'_3 \\
F'_4 \\
F'_6
\end{bmatrix}
$$

After solving this system (e.g., using Gaussian elimination or matrix inversion), we get the values for $\theta_A, v_B, \theta_B, \theta_C$.

The full displacement vector will be $\{D\} = [0, \theta_A, v_B, \theta_B, 0, \theta_C]^T$.

**Step 7: Calculate Element Forces**

Once nodal displacements are known, element forces and moments can be calculated using the element stiffness matrix and the relationship:
$$
\{P_{e}\} = [k_{local, e}] \{d_{e}\} + \{f_{e, fixed\_end}\}
$$
Where:
*   $\{P_e\}$ is the vector of nodal forces and moments at the ends of element $e$ in its local coordinate system.
*   $[k_{local, e}]$ is the local stiffness matrix of element $e$.
*   $\{d_e\}$ is the vector of nodal displacements and rotations for element $e$ in its local coordinate system.
*   $\{f_{e, fixed\_end}\}$ is the vector of equivalent nodal loads (fixed-end forces) for any distributed loads on element $e$.

For our example:

*   **Element 1 (AB):**
    *   Local displacements $\{d_{e1}\} = [v_A, \theta_A, v_B, \theta_B]^T = [0, \theta_A, v_B, \theta_B]^T$.
    *   $\{f_{e1, fixed\_end}\} = [-P/2, -PL/8, -P/2, PL/8]^T$ (as derived earlier, for downward $P$).
    *   Calculate $\{P_{e1}\} = [P_A, M_A, P_B, M_B]^T$ using $[k_{e1}]$.

*   **Element 2 (BC):**
    *   Local displacements $\{d_{e2}\} = [v_B, \theta_B, v_C, \theta_C]^T = [v_B, \theta_B, 0, \theta_C]^T$.
    *   $\{f_{e2, fixed\_end}\} = [0, 0, 0, 0]^T$ (since there are no distributed loads).
    *   Calculate $\{P_{e2}\} = [P_B', M_B', P_C, M_C]^T$ using $[k_{e2}]$.

**Important Note on Sign Conventions:** Be consistent with the sign conventions for forces, moments, and displacements. The derived beam stiffness matrix assumes upward displacement and counter-clockwise rotation as positive. Applied loads must also follow this convention.

---

### Practice Questions and Exercises:

1.  **Derive the stiffness matrix for a truss element.** (This is a simpler case, only axial force and displacement).
    *   **Answer:** For a truss element with length $L$, Young's modulus $E$, and cross-sectional area $A$, the stiffness matrix relating axial force and axial displacement is:
        $$
        [k] = \frac{AE}{L}
        \begin{bmatrix}
        1 & -1 \\
        -1 & 1
        \end{bmatrix}
        $$

2.  **Consider a single beam element of length 10m, $EI = 5000 \, kNm^2$. Write its stiffness matrix.**
    *   **Solution:**
        *   $12EI/L^3 = 12 \times 5000 / 10^3 = 60 kNm^{-2}$
        *   $6EI/L^2 = 6 \times 5000 / 10^2 = 300 kNm^{-1}$
        *   $4EI/L = 4 \times 5000 / 10 = 2000 kNm$
        *   $2EI/L = 2 \times 5000 / 10 = 1000 kNm$

        $$
        [k] = \frac{5000}{10^3}
        \begin{bmatrix}
        12 & 6(10) & -12 & 6(10) \\
        6(10) & 4(10)^2 & -6(10) & 2(10)^2 \\
        -12 & -6(10) & 12 & -6(10) \\
        6(10) & 2(10)^2 & -6(10) & 4(10)^2
        \end{bmatrix}
        =
        5
        \begin{bmatrix}
        12 & 60 & -12 & 60 \\
        60 & 400 & -60 & 200 \\
        -12 & -60 & 12 & -60 \\
        60 & 200 & -60 & 400
        \end{bmatrix}
        =
        \begin{bmatrix}
        60 & 300 & -60 & 300 \\
        300 & 2000 & -300 & 1000 \\
        -60 & -300 & 60 & -300 \\
        300 & 1000 & -300 & 2000
        \end{bmatrix} \, kNm, \, kNm/rad, \, kN, \, kNm
        $$
        (Note: Units of matrix entries are Force, Moment/Displacement, Moment/Rotation, etc. The actual units depend on how you define the DOF vector. For $[k]\{d\}=\{f\}$ where $\{d\}$ is in meters and radians, $\{f\}$ will be in kN and kNm).

3.  **Consider a propped cantilever beam with a vertical load at the free end. Draw the structure, identify DOFs, assemble the global stiffness matrix and load vector, and set up the equations for solving displacements.**
    *   **Structure:** Beam fixed at $A$ (node 1), free at $B$ (node 2). Length $L$. Load $P$ at $B$.
    *   **DOFs:** $v_A, \theta_A, v_B, \theta_B$.
    *   **Boundary Conditions:** $v_A = 0$, $\theta_A = 0$.
    *   **Element 1 (AB):**
        $$
        [k_{e1}] = \frac{EI}{L^3}
        \begin{bmatrix}
        12 & 6L & -12 & 6L \\
        6L & 4L^2 & -6L & 2L^2 \\
        -12 & -6L & 12 & -6L \\
        6L & 2L^2 & -6L & 4L^2
        \end{bmatrix}
        $$
    *   **Global Matrix and Vector:** Since there's only one element, the global matrix is the element matrix $[K] = [k_{e1}]$. The global load vector is $\{F\} = [0, 0, -P, 0]^T$ (assuming upward is positive).
    *   **Apply Boundary Conditions ($v_A=0, \theta_A=0$):** Remove rows and columns 1 and 2.
        *   Reduced system:
            $$
            \frac{EI}{L^3}
            \begin{bmatrix}
            12 & -6L \\
            -6L & 4L^2
            \end{bmatrix}
            \begin{bmatrix}
            v_B \\
            \theta_B
            \end{bmatrix}
            =
            \begin{bmatrix}
            -P \\
            0
            \end{bmatrix}
            $$
    *   **Solve:** Solve these two equations for $v_B$ and $\theta_B$.

---

### Highlight Important Points to Remember:

*   **Systematic Approach:** The DSM provides a structured way to solve complex structures.
*   **Element Independence:** Each element's stiffness matrix is derived independently, simplifying the process.
*   **Assembly is Key:** Correctly mapping and adding element contributions to the global stiffness matrix is crucial.
*   **DOF Identification:** Clearly define and number all degrees of freedom.
*   **Boundary Conditions:** Properly applying boundary conditions is essential for a correct solution.
*   **Sign Conventions:** Maintain consistent sign conventions for forces, moments, and displacements throughout the analysis.
*   **Equivalent Nodal Loads:** Distributed loads must be converted to equivalent nodal loads for assembly.
*   **Software Foundation:** The DSM is the basis for all modern structural analysis software.

---
