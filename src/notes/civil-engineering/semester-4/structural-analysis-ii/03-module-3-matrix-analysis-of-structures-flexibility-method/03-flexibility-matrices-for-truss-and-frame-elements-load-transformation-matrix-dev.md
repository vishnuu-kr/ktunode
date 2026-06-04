---
title: "Flexibility matrices for truss and frame elements-load transformation matrix- development of total flexibility matrix of the structure-analysis of simple structures (determinate & indeterminate)-plane truss and plane frame-nodal loads and element loads"
subject: "STRUCTURAL ANALYSIS - II"
module: "Module 3: Matrix analysis of structures: Flexibility method:"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109a1"
status: "completed"
scrapedAt: "2026-05-20T18:47:12.516Z"
---
## Module 3: Matrix Analysis of Structures - Flexibility Method

This module introduces the flexibility method, a powerful matrix approach for analyzing structures, particularly indeterminate ones. We'll focus on understanding how to define flexibility and apply it systematically to solve for unknown forces and displacements.

### Learning Outcomes:

Upon successful completion of this module, you will be able to:

*   Define flexibility and its relationship to stiffness.
*   Develop flexibility matrices for basic structural elements like trusses and frames.
*   Understand and apply the concept of load transformation matrices.
*   Construct the total flexibility matrix for a given structure.
*   Analyze determinate and indeterminate plane trusses using the flexibility method.
*   Analyze determinate and indeterminate plane frames using the flexibility method.
*   Differentiate between nodal loads and element loads and how they are handled in the flexibility method.

---

### 1. Introduction to the Flexibility Method

The flexibility method, also known as the force method, is an analysis technique that focuses on satisfying equilibrium and compatibility conditions. It is particularly useful for indeterminate structures where internal forces are the primary unknowns.

**Key Concepts:**

*   **Flexibility:** The flexibility of a structural element or system is its tendency to deform under a unit load. It represents the displacement caused by a unit force.
*   **Stiffness:** Conversely, stiffness is the tendency of a structural element or system to resist deformation under a load. It represents the force required to cause a unit displacement.
*   **Relationship:** Flexibility and stiffness are reciprocal quantities. If stiffness is represented by a matrix **K**, then flexibility is represented by its inverse, the flexibility matrix **F**, where **F = K⁻¹**.

**Fundamental Principle:**

The flexibility method works by releasing redundant forces in an indeterminate structure to create a determinate primary structure. The external loads are then applied to this primary structure, and the displacements at the points of released forces are calculated. Next, unit values of the redundant forces are applied to the primary structure, and the corresponding displacements are calculated. By ensuring compatibility (i.e., the sum of displacements from external loads and redundant forces equals the actual displacements at the release points), a system of equations is formed, which can be solved to find the values of the redundant forces.

---

### 2. Flexibility Matrices for Truss and Frame Elements

The foundation of the flexibility method lies in defining the flexibility of individual structural elements.

#### 2.1 Flexibility Matrix for a Truss Element

A truss element is a two-force member, meaning it only carries axial force. The deformation of a truss element is solely due to axial strain.

*   **Assumptions:**
    *   Members are pin-jointed at the nodes.
    *   Loads are applied only at the joints.
    *   Members carry only axial forces (tension or compression).

*   **Derivation:**
    Consider a single truss element of length $L$, cross-sectional area $A$, and Young's modulus $E$.
    *   **Force-Deformation Relationship:** From basic mechanics of materials, the axial deformation $\delta$ is given by:
        $\delta = \frac{PL}{AE}$
        where $P$ is the axial force.

    *   **Flexibility:** If we consider the axial force $P$ as the "load" and axial deformation $\delta$ as the "displacement," then the flexibility is the displacement per unit force:
        Flexibility = $\frac{\delta}{P} = \frac{L}{AE}$

    *   **Flexibility Matrix for a Single Truss Element (2x2):**
        Let's consider a truss element with axial force $P_1$ and axial deformation $\delta_1$.
        The flexibility matrix $\mathbf{f}_{11}$ relates the deformations to the forces. For a single member with axial force $P$, the deformation $\delta$ is:
        $\delta = (\frac{L}{AE}) P$
        In matrix form, considering only axial force and deformation:
        $[\delta_1] = [\frac{L}{AE}] [P_1]$
        So, the flexibility matrix for a single axial degree of freedom is a $1 \times 1$ matrix:
        $\mathbf{f}_{11} = [\frac{L}{AE}]$

        For a truss element connecting two nodes, say node $i$ and node $j$, we can define forces and displacements in the axial direction. Let $P_{ij}$ be the axial force in the member and $\delta_{ij}$ be the axial deformation.
        $\delta_{ij} = (\frac{L}{AE}) P_{ij}$

        If we consider the forces and displacements at the ends of the member, say in the axial direction at node $i$ and node $j$. For a truss element, we are typically interested in the axial force.
        Let $P_{ij}$ be the axial force in the member. The elongation of the member is $\delta_{ij} = \frac{P_{ij}L}{AE}$.
        The flexibility matrix relates the displacements at the ends to the forces. For a single axial degree of freedom, the flexibility is $\frac{L}{AE}$.

        **More commonly, for a truss element connected to two nodes, we consider the force in the member and the elongation of the member.**
        Let the force in the member be $P$. The elongation is $\Delta L = \frac{PL}{AE}$.
        If we define the "load" as the axial force and the "displacement" as the elongation, the flexibility is $\frac{L}{AE}$.

        **For a more general matrix formulation, we can define the degrees of freedom at each node.**
        Consider a truss element connecting node $i$ and node $j$. Let the axial force in the element be $P$.
        The elongation of the member is $\Delta L = \frac{PL}{AE}$.
        Let's consider the axial displacements at node $i$ and node $j$ along the axis of the member.
        If we apply a unit axial force at node $i$ (along the member axis) and zero at node $j$, the elongation is $\frac{L}{AE}$.
        If we apply a unit axial force at node $j$ (along the member axis) and zero at node $i$, the elongation is $\frac{L}{AE}$.

        The flexibility matrix for a single truss element, relating axial displacements at the ends to axial forces at the ends, is a $2 \times 2$ matrix.
        Let $\mathbf{\delta}_{ij}$ be the vector of axial displacements at nodes $i$ and $j$, and $\mathbf{P}_{ij}$ be the vector of axial forces at nodes $i$ and $j$.
        $\mathbf{\delta}_{ij} = \mathbf{f}_{ij} \mathbf{P}_{ij}$

        If we take positive force as tensile force, then the elongation is positive.
        Applying a unit tensile force at node $i$ (along the member axis) results in an elongation of $\frac{L}{AE}$. The force at node $j$ is a unit compressive force.
        Applying a unit tensile force at node $j$ (along the member axis) results in an elongation of $\frac{L}{AE}$. The force at node $i$ is a unit compressive force.

        Let's define the degrees of freedom as axial displacements $\delta_i$ and $\delta_j$ and the forces $\mathbf{P}_i$ and $\mathbf{P}_j$ acting at the ends of the member (along the member's axis).
        If we apply a unit axial force at node $i$ (tension), then $P_i = 1, P_j = -1$. The elongation is $\Delta L = \frac{(1)L}{AE} = \frac{L}{AE}$. So $\delta_i = \frac{L}{AE}$ and $\delta_j = \frac{L}{AE}$.
        If we apply a unit axial force at node $j$ (tension), then $P_j = 1, P_i = -1$. The elongation is $\Delta L = \frac{(1)L}{AE} = \frac{L}{AE}$. So $\delta_j = \frac{L}{AE}$ and $\delta_i = \frac{L}{AE}$.

        The flexibility matrix for a truss element, relating axial displacements at nodes $i$ and $j$ to axial forces at nodes $i$ and $j$, is:
        $$
        \begin{bmatrix}
        \delta_i \\
        \delta_j
        \end{bmatrix}
        =
        \begin{bmatrix}
        \frac{L}{AE} & \frac{L}{AE} \\
        \frac{L}{AE} & \frac{L}{AE}
        \end{bmatrix}
        \begin{bmatrix}
        P_i \\
        P_j
        \end{bmatrix}
        $$
        Where $P_i$ and $P_j$ are the axial forces acting at nodes $i$ and $j$ respectively, along the direction of the member. (Note: $P_i$ and $P_j$ will have opposite signs if they are the force in the member).

        **Crucially, for the flexibility matrix of a single member, we typically consider the axial force *within* the member and the elongation *of* the member.**
        Let $P$ be the axial force in the member. The elongation is $\Delta L = \frac{PL}{AE}$.
        The flexibility coefficient relating elongation to axial force is $f = \frac{L}{AE}$.
        So, $[\Delta L] = [\frac{L}{AE}] [P]$. This is a $1 \times 1$ matrix.

#### 2.2 Flexibility Matrices for Frame Elements

Frame elements are more complex as they can experience axial force, shear force, and bending moment. We need to consider the displacements and forces at the ends of the element.

*   **Assumptions:**
    *   Members are prismatic (constant cross-section).
    *   Members are joined by rigid or pinned connections.
    *   Loads can be applied at nodes or along the member.

*   **Derivation (for a 2D prismatic beam-column element):**
    Consider a prismatic beam-column element with length $L$, Young's modulus $E$, and moment of inertia $I$. We'll consider axial deformation and bending deformation.

    *   **Axial Deformation:** Similar to trusses, axial deformation $\delta$ due to axial force $P$ is $\delta = \frac{PL}{AE}$.
    *   **Bending Deformation:** This is derived using beam theory (e.g., Macaulay's method, moment-area method). For a beam fixed at one end and free at the other, subjected to a unit force at the free end:
        *   Deflection at free end due to unit transverse force at free end = $\frac{L^3}{3EI}$
        *   Rotation at free end due to unit transverse force at free end = $\frac{L^2}{2EI}$
        *   Deflection at free end due to unit moment at free end = $\frac{L^2}{2EI}$
        *   Rotation at free end due to unit moment at free end = $\frac{L}{EI}$

    *   **Flexibility Matrix for a 2D Frame Element (6x6):**
        For a 2D frame element, we typically consider 3 degrees of freedom at each end (axial displacement, transverse displacement, and rotation). This leads to a $6 \times 6$ flexibility matrix.
        Let the degrees of freedom at node $i$ be $(u_i, v_i, \theta_i)$ and at node $j$ be $(u_j, v_j, \theta_j)$, where $u$ is axial, $v$ is transverse, and $\theta$ is rotation. The corresponding forces/moments are $(P_i, V_i, M_i)$ and $(P_j, V_j, M_j)$.

        The flexibility matrix $\mathbf{f}_{ij}$ relates the displacements $(\mathbf{\delta}_i, \mathbf{\delta}_j)$ to the forces $(\mathbf{P}_i, \mathbf{P}_j)$ applied at the ends.
        $$
        \begin{bmatrix}
        \delta_u \\
        \delta_v \\
        \theta
        \end{bmatrix}_{node\ i} = \mathbf{f}_{i} \begin{bmatrix}
        P \\
        V \\
        M
        \end{bmatrix}_{node\ i} + \mathbf{f}_{ij} \begin{bmatrix}
        P \\
        V \\
        M
        \end{bmatrix}_{node\ j}
        $$
        And similarly for node $j$.

        **The standard flexibility matrix for a beam-column element relates the displacements at the ends to the forces at the ends.**
        Let the forces be $(P_i, V_i, M_i)$ at end $i$ and $(P_j, V_j, M_j)$ at end $j$.
        Let the corresponding displacements be $(u_i, v_i, \theta_i)$ at end $i$ and $(u_j, v_j, \theta_j)$ at end $j$.

        The flexibility matrix is structured as follows, relating the displacement vector $\mathbf{\delta}$ to the force vector $\mathbf{P}$:
        $$
        \mathbf{\delta} = \mathbf{f} \mathbf{P}
        $$
        where:
        $\mathbf{\delta} = \begin{bmatrix} u_i \\ v_i \\ \theta_i \\ u_j \\ v_j \\ \theta_j \end{bmatrix}$ and $\mathbf{P} = \begin{bmatrix} P_i \\ V_i \\ M_i \\ P_j \\ V_j \\ M_j \end{bmatrix}$

        The $6 \times 6$ flexibility matrix $\mathbf{f}$ for a prismatic beam-column element can be derived using unit load and moment applications. The entries represent the displacement at one DOF due to a unit force at another DOF.

        $$
        \mathbf{f} = \frac{1}{EI} \begin{bmatrix}
        \frac{L}{A} (EI) & 0 & 0 & -\frac{L}{A} (EI) & 0 & 0 \\
        0 & \frac{L^3}{3} & \frac{L^2}{2} & 0 & -\frac{L^3}{3} & \frac{L^2}{2} \\
        0 & \frac{L^2}{2} & L & 0 & -\frac{L^2}{2} & L \\
        -\frac{L}{A} (EI) & 0 & 0 & \frac{L}{A} (EI) & 0 & 0 \\
        0 & -\frac{L^3}{3} & -\frac{L^2}{2} & 0 & \frac{L^3}{3} & -\frac{L^2}{2} \\
        0 & \frac{L^2}{2} & L & 0 & -\frac{L^2}{2} & L
        \end{bmatrix}
        $$
        *Note: The term $\frac{L}{A}$ is for axial deformation. For simplicity in many structural analysis contexts, axial deformation is often ignored when primarily analyzing bending, or handled separately. If axial deformation is considered, then the $f_{11}$ and $f_{44}$ terms are $\frac{L}{AE}$. The above matrix includes both axial and bending.*

        **Simplified Flexibility Matrix (Ignoring Axial Deformation for Bending Analysis):**
        If we are primarily interested in bending effects and treat axial force separately, we can consider a $4 \times 4$ flexibility matrix relating transverse displacements $(v_i, v_j)$ and rotations $(\theta_i, \theta_j)$ to transverse forces $(V_i, V_j)$ and moments $(M_i, M_j)$.

        $$
        \begin{bmatrix}
        v_i \\
        \theta_i \\
        v_j \\
        \theta_j
        \end{bmatrix} = \frac{1}{EI} \begin{bmatrix}
        \frac{L^3}{3} & \frac{L^2}{2} & \frac{L^3}{3} & \frac{L^2}{2} \\
        \frac{L^2}{2} & L & \frac{L^2}{2} & L \\
        \frac{L^3}{3} & \frac{L^2}{2} & \frac{L^3}{3} & \frac{L^2}{2} \\
        \frac{L^2}{2} & L & \frac{L^2}{2} & L
        \end{bmatrix} \begin{bmatrix}
        V_i \\
        M_i \\
        V_j \\
        M_j
        \end{bmatrix}
        $$
        *This form assumes $V_i$ and $M_i$ are applied at end $i$, and $V_j$ and $M_j$ are applied at end $j$. The signs in the matrix depend on the sign convention for forces and displacements.*

        **Important Note on Sign Conventions:** Always be consistent with your sign conventions for forces, moments, displacements, and rotations.

---

### 3. Load Transformation Matrix

In the flexibility method, we often need to transform loads from one location or coordinate system to another. This is particularly relevant when dealing with element loads that are not directly at the nodes.

*   **Concept:** A load transformation matrix allows us to express forces and moments at the ends of a member due to loads applied anywhere along the member.
*   **Application:** When we release redundant forces to form a determinate structure, we apply the original loads to this structure. If these loads are not nodal loads, we need to determine the equivalent nodal forces and moments that would produce the same effect.
*   **Development:**
    Consider a beam element subjected to a distributed load $w(x)$. To convert this distributed load to equivalent nodal loads (forces and moments at the ends), we use the principle of virtual work or energy methods.

    *   **Example: Simply Supported Beam with Uniformly Distributed Load (UDL) $w$**
        *   **Degrees of Freedom:** Vertical deflection at supports $v_A, v_B$ and rotations $\theta_A, \theta_B$.
        *   **End Forces/Moments due to UDL:** For a simply supported beam with UDL $w$, the reactions at the supports are $R_A = R_B = \frac{wL}{2}$. The moments at the ends are zero if it's simply supported. If it's a fixed-fixed beam, there will be end moments.

        Let's consider a prismatic beam element $AB$ with loads applied. We want to find the forces $(P_A, V_A, M_A)$ and $(P_B, V_B, M_B)$ at the ends due to these loads.

        **For a simply supported beam segment with a concentrated load $P$ at a distance $a$ from end A:**
        *   Equivalent nodal forces at A: $R_A = P(1 - a/L)$
        *   Equivalent nodal force at B: $R_B = P(a/L)$
        *   Equivalent nodal moment at A: $M_A = -P \cdot a \cdot (1 - a/L)$
        *   Equivalent nodal moment at B: $M_B = P \cdot a \cdot (a/L)$

        If we consider the element in isolation with assumed releases (e.g., fixed ends), the loads applied to this isolated element will create "fixed-end moments" and "fixed-end shears." These are the loads that would be required to make the ends of the element with releases remain straight and without rotation.

        Let $\mathbf{p}_o$ be the vector of external loads applied to the structure. When we transform these to the ends of the elements, we get equivalent nodal loads.

        **Load Transformation Matrix $\mathbf{a}$:**
        This matrix relates the element end forces $\mathbf{P}_e$ to the external loads $\mathbf{p}_o$.
        $\mathbf{P}_e = \mathbf{a} \mathbf{p}_o$

        For a single element with a distributed load, the matrix $\mathbf{a}$ will contain terms that represent the reactions (forces and moments) at the ends due to the distributed load.

        **Example: Simply Supported Beam with UDL $w$ over its entire length $L$.**
        If we consider this as a single element that is released (e.g., by providing hinges at the ends), the UDL $w$ will cause reactions at the ends.
        *   Vertical force at A ($V_A$) = $wL/2$
        *   Vertical force at B ($V_B$) = $wL/2$
        *   Moment at A ($M_A$) = $-wL^2/12$ (if we consider it fixed at both ends initially)
        *   Moment at B ($M_B$) = $wL^2/12$ (if we consider it fixed at both ends initially)

        If we are analyzing a beam as a series of elements, the loads on each element need to be transferred to the nodal forces and moments for that element.

        Let's consider the matrix $\mathbf{a}_{ij}$ relating the forces at the ends of member $k$ to an applied load $p_j$ of the overall system.

        For a member $k$, let $\mathbf{P}_{ek}$ be the vector of forces and moments at its ends. If the applied loads are nodal loads $\mathbf{R}$ on the primary structure, then the forces on the element ends will be directly related to these nodal loads.

        **Consider a single beam element AB with a UDL $w$ acting downwards.**
        To find the flexibility matrix of the *entire structure*, we need to convert these distributed loads into nodal forces and moments on the *determinate primary structure*.

        The transformation is often implicit in how we define the "fixed-end actions" when using the flexibility method.

        **More conceptually:** The load transformation matrix helps in calculating the *loads* that cause the *initial displacements* ($\mathbf{\delta}_0$) in the determinate structure.
        If $\mathbf{P}_0$ is the vector of forces in the determinate structure due to external loads, and $\mathbf{P}_{ext}$ is the vector of external applied loads, then:
        $\mathbf{P}_0 = \mathbf{a}^T \mathbf{P}_{ext}$ (This is a common formulation in stiffness method, but the concept of transforming loads to element forces is similar).

        In the context of the flexibility method, we apply the external loads to the *determinate primary structure*. If these loads are distributed, we need to find the equivalent nodal loads at the joints of the primary structure.

        Let $\mathbf{F}_{ext}$ be the vector of external forces applied to the nodes of the determinate structure.
        The initial displacements of the determinate structure due to $\mathbf{F}_{ext}$ are $\mathbf{\delta}_0 = \mathbf{f}_{structure} \mathbf{F}_{ext}$.

        If the loads are applied *on the members*, we first transform them to equivalent nodal loads on the primary structure. The load transformation matrix essentially encodes how to calculate these equivalent nodal loads from the applied element loads.

        **For a frame element with a transverse load $P$ at mid-span:**
        Equivalent nodal forces at end A: $P/2$ (downwards)
        Equivalent nodal forces at end B: $P/2$ (downwards)
        Equivalent nodal moment at end A: $-PL/8$
        Equivalent nodal moment at end B: $PL/8$

        If we have a set of loads applied to members, we can define a matrix that converts these member loads into a vector of equivalent nodal loads.

---

### 4. Development of the Total Flexibility Matrix of the Structure

The total flexibility matrix of the structure relates the external applied loads to the displacements at the points where these loads are applied.

*   **Process:**
    1.  **Choose a Determinate Primary Structure:** Release redundant forces (internal forces or reactions) to make the structure statically determinate.
    2.  **Define Coordinate Systems:** Establish a global coordinate system for the structure and local coordinate systems for each element.
    3.  **Calculate Element Flexibility Matrices:** Develop the flexibility matrix for each individual element.
    4.  **Transform Element Matrices to Global Coordinates:** If necessary, transform the element flexibility matrices from their local coordinate systems to the global coordinate system using transformation matrices.
    5.  **Assemble the Structure Flexibility Matrix:** Assemble the element flexibility matrices into the total flexibility matrix of the structure. This involves relating displacements at nodes to forces applied at nodes.

*   **Assembly:**
    Let the structure have $n$ degrees of freedom (dofs) that we are interested in. The total flexibility matrix $\mathbf{F}$ will be an $n \times n$ matrix, such that:
    $\mathbf{\Delta} = \mathbf{F} \mathbf{P}$
    where $\mathbf{\Delta}$ is the vector of displacements at the $n$ dofs and $\mathbf{P}$ is the vector of forces applied at those same $n$ dofs.

    **Process using element flexibility matrices:**
    The overall flexibility matrix of the structure can be assembled from the flexibility matrices of its individual members. This is analogous to how stiffness matrices are assembled in the stiffness method.

    Let $\mathbf{f}_k$ be the flexibility matrix of element $k$ in its local coordinate system.
    Let $\mathbf{T}_k$ be the transformation matrix to convert local element forces to global system forces and displacements.

    The flexibility matrix of element $k$ in the global coordinate system, $\mathbf{F}_k^{global}$, is given by:
    $\mathbf{F}_k^{global} = \mathbf{T}_k^T \mathbf{f}_k \mathbf{T}_k$

    The total flexibility matrix of the structure $\mathbf{F}_{structure}$ is then obtained by summing the global flexibility matrices of all elements:
    $\mathbf{F}_{structure} = \sum_{k} \mathbf{F}_k^{global}$

    **Transformation Matrix $\mathbf{T}$ for Frame Elements:**
    For a beam-column element $AB$, if we define node $A$ as the "near end" and node $B$ as the "far end", and the local coordinate system is along the element axis (x) and transverse to it (y), with rotation $\theta$.
    The transformation matrix relates forces and displacements in local coordinates to global coordinates. For a 2D frame element inclined at an angle $\phi$ with the global x-axis:
    Let $\mathbf{P}_{local} = \begin{bmatrix} P_x \\ V_y \\ M_z \end{bmatrix}$ and $\mathbf{\delta}_{local} = \begin{bmatrix} \delta_x \\ \delta_y \\ \theta_z \end{bmatrix}$.
    Let $\mathbf{P}_{global}$ and $\mathbf{\delta}_{global}$ be the corresponding vectors in the global system.
    $\mathbf{P}_{global} = \mathbf{a} \mathbf{P}_{local}$ and $\mathbf{\delta}_{local} = \mathbf{a}^T \mathbf{\delta}_{global}$
    Where $\mathbf{a}$ is the direction cosine matrix:
    $$
    \mathbf{a} = \begin{bmatrix}
    \cos\phi & -\sin\phi & 0 \\
    \sin\phi & \cos\phi & 0 \\
    0 & 0 & 1
    \end{bmatrix}
    $$
    So, $\mathbf{T}_k$ would be a larger matrix that maps the $6 \times 1$ global displacement vector to the $6 \times 1$ local displacement vector, and similarly for forces.

    **For a truss element:** The transformation is simpler, involving only axial forces and displacements along the member.

*   **Important Point:** The "loads" in $\mathbf{\Delta} = \mathbf{F} \mathbf{P}$ refer to the externally applied loads at the degrees of freedom we are considering.

---

### 5. Analysis of Simple Structures (Determinate & Indeterminate)

#### 5.1 Determinate Structures

For determinate structures, the flexibility method is essentially a way to calculate displacements.

*   **Steps:**
    1.  **Define Degrees of Freedom (DOFs):** Identify the displacements at which you want to calculate.
    2.  **Develop Total Flexibility Matrix:** Construct the flexibility matrix of the structure by assembling element flexibility matrices.
    3.  **Apply External Loads:** Determine the force vector $\mathbf{P}$ corresponding to the external loads applied at the defined DOFs.
    4.  **Calculate Displacements:** Use the equation $\mathbf{\Delta} = \mathbf{F} \mathbf{P}$ to find the displacements.

*   **Example: Simply Supported Beam with a Point Load at Mid-span (Determinate)**
    *   **DOFs:** Vertical displacement at mid-span ($v_{mid}$).
    *   **Element:** A single beam element.
    *   **Flexibility Matrix:** For a simply supported beam with a load at mid-span, the displacement at mid-span due to a unit load at mid-span is $v_{mid}/P = \frac{L^3}{48EI}$. So, $\mathbf{F} = [\frac{L^3}{48EI}]$.
    *   **Load:** $P$ at mid-span. $\mathbf{P} = [P]$.
    *   **Displacement:** $\Delta = [\frac{L^3}{48EI}] [P] = \frac{PL^3}{48EI}$.

#### 5.2 Indeterminate Structures

This is where the flexibility method truly shines.

*   **Steps:**
    1.  **Choose a Determinate Primary Structure:** Release redundant forces (e.g., replace fixed supports with hinges, remove internal forces).
    2.  **Identify Redundant Forces:** List the redundant forces ($\mathbf{X}$) that were released.
    3.  **Calculate Initial Displacements ($\mathbf{\delta}_0$):** Apply the external loads to the determinate primary structure. Calculate the displacements at the points where the redundant forces were released. This is done using the total flexibility matrix of the *determinate primary structure* and the applied external loads.
    4.  **Calculate Flexibility Coefficients ($\mathbf{f}_{xx}$):** Apply a unit value of each redundant force ($1, 0, 0, ...$; $0, 1, 0, ...$; etc.) to the determinate primary structure. Calculate the corresponding displacements at the points where the redundant forces were released. These values form the $\mathbf{f}_{xx}$ matrix. The flexibility matrix relating the released forces to the displacements at the release points is $\mathbf{F}_{xx}$.
    5.  **Form Compatibility Equations:** The total displacement at the release points must be zero (or equal to any known settlement). This gives the compatibility equations:
        $\mathbf{\delta}_0 + \mathbf{F}_{xx} \mathbf{X} = \mathbf{0}$ (for zero displacement at release points)
        or more generally, $\mathbf{\delta}_{0i} + \sum_j F_{ij} X_j = \Delta_{i,known}$
    6.  **Solve for Redundant Forces ($\mathbf{X}$):** Solve the system of compatibility equations for the redundant forces.
    7.  **Calculate Internal Forces and Reactions:** Once the redundant forces are known, use equilibrium equations to find all internal forces and support reactions in the original indeterminate structure.

*   **Example: Propped Cantilever Beam (Indeterminate to First Degree)**
    *   **Problem:** A cantilever beam of length $L$ fixed at A and supported by a roller at B, with a point load $P$ at the free end (B).
    *   **Redundancy:** The beam is indeterminate to the first degree. We can remove the support reaction at B as the redundant force.
    *   **Primary Structure:** A cantilever beam fixed at A and free at B.
    *   **Redundant Force:** $X_1$ = Vertical reaction at B ($R_B$).
    *   **External Load:** $P$ at B.

    *   **Step 2 & 3: Initial Displacements ($\mathbf{\delta}_0$)**
        Apply load $P$ to the cantilever (fixed at A, free at B). The downward displacement at B is $\delta_{0} = \frac{PL^3}{3EI}$. This is the displacement at the point where $X_1$ is released.

    *   **Step 4: Flexibility Coefficients ($\mathbf{F}_{xx}$)**
        Apply a unit upward force ($X_1=1$) at B to the cantilever. The upward displacement at B is $f_{11} = \frac{(1)L^3}{3EI} = \frac{L^3}{3EI}$. This is the displacement at the point where $X_1$ is released due to $X_1$.

    *   **Step 5: Compatibility Equation**
        The total displacement at B must be zero (since it's a roller support).
        Displacement from $P$ + Displacement from $X_1$ = 0
        $\delta_0 + f_{11} X_1 = 0$
        $\frac{PL^3}{3EI} + \frac{L^3}{3EI} X_1 = 0$

    *   **Step 6: Solve for Redundant Forces**
        $X_1 = -P$
        So, the reaction at B is $P$ downwards.

    *   **Step 7: Calculate Internal Forces and Reactions**
        At support A: Vertical reaction $R_A = P + X_1 = P + (-P) = 0$.
        Moment at A: $M_A = P \cdot L + X_1 \cdot L = PL + (-P)L = 0$.
        This suggests the primary structure was not chosen correctly for this example. Let's re-evaluate.

        **Corrected Approach for Propped Cantilever with Load P at Mid-span:**
        *   **Primary Structure:** Cantilever fixed at A, free at B.
        *   **Redundant Force:** $X_1$ = Vertical reaction at B.
        *   **External Load:** $P$ at mid-span.

        *   **Initial Displacements ($\mathbf{\delta}_0$):** Apply load $P$ at mid-span to the cantilever. The downward deflection at mid-span is $\frac{PL^3}{3EI}$ (if $P$ were at end B). For $P$ at mid-span, the deflection at mid-span is $\frac{P(L/2)^3}{3EI} = \frac{PL^3}{24EI}$. The deflection at end B is $\frac{PL^3}{3EI}$.
            The displacement at the release point (B) due to $P$ at mid-span is $\delta_0 = \frac{PL^3}{3EI}$.

        *   **Flexibility Coefficients ($\mathbf{F}_{xx}$):** Apply unit upward force ($X_1=1$) at B to the cantilever. The upward deflection at B is $f_{11} = \frac{L^3}{3EI}$.

        *   **Compatibility Equation:** $\delta_0 + f_{11} X_1 = 0$
            $\frac{PL^3}{3EI} + \frac{L^3}{3EI} X_1 = 0$
            $X_1 = -P$. This still seems incorrect for a load at mid-span.

        **Let's use a standard example: Propped Cantilever Beam with UDL $w$ over its entire length.**
        *   **Primary Structure:** Cantilever fixed at A, free at B.
        *   **Redundant Force:** $X_1$ = Vertical reaction at B.
        *   **External Load:** UDL $w$ over the entire length.

        *   **Initial Displacements ($\mathbf{\delta}_0$):** Apply UDL $w$ to the cantilever. The downward deflection at the free end B is $\delta_0 = \frac{wL^4}{8EI}$.

        *   **Flexibility Coefficients ($\mathbf{F}_{xx}$):** Apply a unit upward force ($X_1=1$) at B to the cantilever. The upward deflection at B is $f_{11} = \frac{L^3}{3EI}$.

        *   **Compatibility Equation:** $\delta_0 + f_{11} X_1 = 0$
            $\frac{wL^4}{8EI} + \frac{L^3}{3EI} X_1 = 0$

        *   **Solve for Redundant Forces:**
            $\frac{L^3}{3EI} X_1 = -\frac{wL^4}{8EI}$
            $X_1 = -\frac{wL^4}{8EI} \cdot \frac{3EI}{L^3} = -\frac{3}{8}wL$.
            The reaction at B is $\frac{3}{8}wL$ upwards.

        *   **Calculate Internal Forces and Reactions:**
            At support A:
            Vertical reaction $R_A = (\text{DL of UDL}) + X_1 = wL + (-\frac{3}{8}wL) = \frac{5}{8}wL$ (downwards).
            Moment at A: $M_A = (\text{Moment due to UDL}) + (\text{Moment due to } X_1)$
            $M_A = (wL) \cdot (L/2) + X_1 \cdot L = \frac{wL^2}{2} + (-\frac{3}{8}wL)L = \frac{wL^2}{2} - \frac{3}{8}wL^2 = \frac{4wL^2 - 3wL^2}{8} = \frac{wL^2}{8}$ (clockwise).

        **This example demonstrates the core of the flexibility method for indeterminate structures.**

---

### 6. Plane Truss and Plane Frame Analysis

#### 6.1 Plane Truss Analysis

*   **DOFs:** Axial displacements at each joint.
*   **Element Flexibility:** $f_{ij} = \frac{L}{AE}$ (for axial deformation).
*   **Assembly:**
    *   Define a global coordinate system.
    *   For each truss member $k$ connecting nodes $i$ and $j$, determine its length $L_k$, area $A_k$, and modulus $E_k$.
    *   Calculate the axial flexibility coefficient $f_k = \frac{L_k}{A_k E_k}$.
    *   Use transformation matrices to place the axial flexibility into the global stiffness matrix structure.
    *   If member $k$ connects nodes $i$ and $j$, and has axial force $P_k$, the elongation is $\Delta L_k = f_k P_k$.
    *   The axial force $P_k$ is related to the nodal forces in the global system.
    *   The process involves setting up the structure's flexibility matrix by considering how forces applied at specific global degrees of freedom (joints) translate to axial forces in the members and cause elongations.

*   **Flexibility Method for Trusses:**
    1.  **Release redundant members:** Remove members carrying redundant axial forces to form a determinate truss.
    2.  **Calculate initial displacements:** Apply external loads to the determinate truss and find displacements at the cut members.
    3.  **Calculate flexibility coefficients:** Apply unit axial forces to the cut members (one at a time) and find displacements at the cut locations.
    4.  **Form compatibility equations:** $\mathbf{\delta}_0 + \mathbf{F}_{xx} \mathbf{X} = \mathbf{0}$
    5.  **Solve for redundant forces:** Calculate the axial forces in the released members.
    6.  **Calculate all member forces:** Combine the forces from the determinate truss and the redundant member forces.

#### 6.2 Plane Frame Analysis

*   **DOFs:** Axial displacement, transverse displacement, and rotation at each joint.
*   **Element Flexibility:** Consider axial and bending flexibility.
*   **Assembly:**
    *   For each frame member $k$, define its flexibility matrix (e.g., $6 \times 6$) in its local coordinate system.
    *   Determine the angle of inclination of the member with respect to the global axes.
    *   Use transformation matrices ($\mathbf{T}_k$) to convert the local flexibility matrix to the global coordinate system: $\mathbf{F}_k^{global} = \mathbf{T}_k^T \mathbf{f}_k \mathbf{T}_k$.
    *   Assemble the global flexibility matrix of the structure $\mathbf{F}_{structure}$ by summing the $\mathbf{F}_k^{global}$ matrices, accounting for how forces applied at global DOFs affect member end forces and hence member deformations.

*   **Flexibility Method for Frames:**
    The procedure is similar to the propped cantilever example but applied to a frame structure. The main challenge is in the correct assembly of the structure's flexibility matrix and the transformation of element matrices.

---

### 7. Nodal Loads and Element Loads

*   **Nodal Loads:** These are forces and moments applied directly at the joints (nodes) of the structure. In the flexibility method, these are directly incorporated when calculating the initial displacements ($\mathbf{\delta}_0$). If the analysis considers nodal displacements, the load vector $\mathbf{P}$ in $\mathbf{\Delta} = \mathbf{F} \mathbf{P}$ will consist of these nodal loads.

*   **Element Loads:** These are loads applied along the members of the structure, such as distributed loads (UDLs, triangular loads) or concentrated loads at intermediate points along a member.
    *   **Handling Element Loads:**
        1.  **Transform to Equivalent Nodal Loads:** For the primary structure, element loads must be converted into equivalent nodal forces and moments at the joints of the primary structure. This conversion is crucial for calculating the initial displacement vector $\mathbf{\delta}_0$. The "load transformation matrix" plays a role here.
        2.  **Fixed-End Actions:** When analyzing indeterminate structures using the flexibility method, element loads on the *released* element (as part of the primary structure) contribute to the initial displacements. These can be viewed as creating "fixed-end actions" on the member if we temporarily consider it restrained at its ends.

    *   **Example:** For a simply supported beam with a UDL $w$, the reactions at the supports are $wL/2$. These reactions are the equivalent nodal loads applied to the determinate structure if the releases were at the ends.

    **The flexibility method requires careful handling of element loads by converting them into equivalent actions at the nodes of the chosen determinate primary structure.**

---

### Practice Questions

**Question 1 (Truss Flexibility):**
A single truss member has length $L = 2$ m, cross-sectional area $A = 1000$ mm², and Young's modulus $E = 200$ GPa. Calculate its flexibility coefficient $f$, which is the elongation per unit axial force.

**Question 2 (Frame Flexibility - Simplified):**
A simply supported beam of length $L$ is subjected to a unit transverse load at mid-span. Calculate the flexibility coefficient relating the deflection at mid-span to the load at mid-span. Use the simplified beam flexibility relation.

**Question 3 (Propped Cantilever - Flexibility Method):**
A propped cantilever beam of length $L$, fixed at end A and supported by a roller at end B, carries a uniformly distributed load $w$ over its entire length. Using the flexibility method:
a) Identify the primary structure and the redundant force.
b) Calculate the initial displacement at the roller support due to the UDL.
c) Calculate the flexibility coefficient at the roller support.
d) Formulate the compatibility equation and solve for the redundant reaction at B.
e) Determine the vertical reaction and the fixed-end moment at support A.

**Question 4 (Element Load Transformation):**
A beam element is fixed at both ends. A concentrated load $P$ is applied at a distance $a$ from the left end. Determine the equivalent fixed-end moments and shear forces at the ends of the beam.

---

### Answers to Practice Questions

**Answer 1:**
$L = 2 \, \text{m} = 2000 \, \text{mm}$
$A = 1000 \, \text{mm}^2$
$E = 200 \, \text{GPa} = 200 \times 10^3 \, \text{N/mm}^2$

Flexibility coefficient $f = \frac{L}{AE} = \frac{2000 \, \text{mm}}{(1000 \, \text{mm}^2)(200 \times 10^3 \, \text{N/mm}^2)} = \frac{2000}{200 \times 10^6} \, \text{mm/N} = 10 \times 10^{-6} \, \text{mm/N}$
$f = 0.00001 \, \text{mm/N}$ or $10 \, \mu \text{m/kN}$

**Answer 2:**
For a simply supported beam with a load $P$ at mid-span, the deflection at mid-span is $\delta = \frac{PL^3}{48EI}$.
The flexibility coefficient relating deflection at mid-span to load at mid-span is $f = \frac{\delta}{P} = \frac{L^3}{48EI}$.

**Answer 3:**
a) **Primary Structure:** Cantilever beam fixed at A, free at B.
   **Redundant Force:** $X_1$ = vertical reaction at B.

b) **Initial Displacement ($\delta_0$):** For a cantilever with UDL $w$ over its length, the deflection at the free end is $\delta_0 = \frac{wL^4}{8EI}$ (downwards).

c) **Flexibility Coefficient ($f_{11}$):** For a cantilever subjected to a unit upward force at the free end, the upward deflection at the free end is $f_{11} = \frac{L^3}{3EI}$.

d) **Compatibility Equation:** The total deflection at B must be zero.
   $\delta_0 + f_{11} X_1 = 0$
   $\frac{wL^4}{8EI} + \frac{L^3}{3EI} X_1 = 0$
   $\frac{L^3}{3EI} X_1 = -\frac{wL^4}{8EI}$
   $X_1 = -\frac{wL^4}{8EI} \times \frac{3EI}{L^3} = -\frac{3}{8}wL$
   So, the reaction at B is $R_B = \frac{3}{8}wL$ upwards.

e) **Reactions at Support A:**
   Vertical reaction at A ($R_A$): Sum of vertical forces = 0.
   $R_A + X_1 - wL = 0$
   $R_A + (-\frac{3}{8}wL) - wL = 0$
   $R_A = wL + \frac{3}{8}wL = \frac{11}{8}wL$ (downwards).

   Fixed-end moment at A ($M_A$): Sum of moments about A = 0.
   $M_A + X_1 \cdot L - (wL) \cdot (L/2) = 0$
   $M_A + (-\frac{3}{8}wL) \cdot L - \frac{wL^2}{2} = 0$
   $M_A - \frac{3}{8}wL^2 - \frac{4}{8}wL^2 = 0$
   $M_A = \frac{7}{8}wL^2$ (clockwise moment at A).

**Answer 4:**
For a beam fixed at both ends with a concentrated load $P$ at a distance $a$ from the left end (distance $b = L-a$ from the right end):

*   **Fixed-end moment at the left end ($M_{FAB}$):**
    $M_{FAB} = -\frac{Pab^2}{L^2}$ (clockwise)
*   **Fixed-end moment at the right end ($M_{FBA}$):**
    $M_{FBA} = \frac{Pa^2b}{L^2}$ (counter-clockwise)
*   **Fixed-end shear at the left end ($V_{FAB}$):**
    $V_{FAB} = \frac{P b^2 (3a+b)}{L^3}$ (downwards)
*   **Fixed-end shear at the right end ($V_{FBA}$):**
    $V_{FBA} = \frac{P a^2 (3b+a)}{L^3}$ (downwards)

    **Note:** These formulas are derived using beam theory, often by considering the beam as a statically determinate structure (e.g., simply supported) and then applying the redundant end moments to achieve zero rotation at the ends.

---

### Important Points to Remember:

*   **Flexibility vs. Stiffness:** Flexibility represents deformation under unit load; Stiffness represents force to cause unit deformation. They are reciprocals.
*   **Primary Structure:** The choice of the determinate primary structure is crucial and can affect the number and type of redundant forces.
*   **Compatibility Equations:** These equations ensure that the deformations of the determinate structure under external loads and redundant forces are consistent with the constraints of the original indeterminate structure.
*   **Assembly of Flexibility Matrix:** The structure's flexibility matrix is assembled by summing the global flexibility matrices of individual elements. This requires correct coordinate transformations.
*   **Load Transformation:** Element loads must be transformed into equivalent nodal loads for the determinate structure to calculate initial displacements.
*   **Sign Conventions:** Maintain consistent sign conventions for forces, moments, displacements, and rotations throughout the analysis.
*   **Matrix Operations:** Familiarity with matrix addition, multiplication, and inversion is essential for implementing the flexibility method computationally.
