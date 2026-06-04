---
title: "Multi degree of freedom systems – Lumped mass systems, shear building frame, Equation of motion."
subject: "STRUCTURAL DYNAMICS"
module: "Module 3: Response to general loading  – Duhamel Integral, damped and undamped systems."
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba81141e"
status: "completed"
scrapedAt: "2026-05-20T19:01:39.696Z"
---
# Structural Dynamics: Module 3 - Response to General Loading

## Topic: Multi-Degree of Freedom (MDOF) Systems

This module delves into the behavior of structures subjected to general dynamic loads, focusing on Multi-Degree of Freedom (MDOF) systems. We will explore how to formulate equations of motion for these systems, starting with simplified lumped mass models and progressing to more realistic representations like shear building frames.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Understand the concept of degrees of freedom (DOFs) in structural systems.**
*   **Differentiate between single-degree-of-freedom (SDOF) and multi-degree-of-freedom (MDOF) systems.**
*   **Formulate the equations of motion for lumped mass MDOF systems.**
*   **Model a shear building frame as an MDOF system.**
*   **Derive the equation of motion for a shear building frame.**
*   **Understand the fundamental principles behind solving MDOF equations of motion (though explicit solution methods will be covered in subsequent modules).**

---

### 1. Introduction to Multi-Degree of Freedom (MDOF) Systems

#### 1.1. Degrees of Freedom (DOFs)

*   **Definition:** A degree of freedom (DOF) is the minimum number of independent coordinates required to completely define the configuration or position of a system.
*   **SDOF vs. MDOF:**
    *   **Single-Degree-of-Freedom (SDOF) System:** A system that can be described by a single coordinate. Examples include a simple mass-spring-damper system. Most of Module 2 was dedicated to SDOF systems.
    *   **Multi-Degree-of-Freedom (MDOF) System:** A system that requires more than one independent coordinate to describe its configuration. Real-world structures are almost always MDOF systems.

#### 1.2. Why MDOF Systems?

*   **Real-world Complexity:** Structures like buildings, bridges, and aircraft have numerous points that can move and deform.
*   **Accurate Representation:** To accurately capture the dynamic response and stresses, we need to consider the behavior of multiple interconnected elements.

#### 1.3. Classification of DOFs

*   **Displacements:** Linear displacements (e.g., horizontal, vertical).
*   **Rotations:** Angular displacements (e.g., rotation about an axis).
*   **Higher-Order Deformations:** Warping, shear deformation (often simplified in lumped mass models).

---

### 2. Lumped Mass Systems

#### 2.1. Concept of Lumped Mass

*   **Simplification:** Lumped mass idealization simplifies complex distributed mass and stiffness properties of a structure into discrete masses concentrated at specific points (nodes or joints).
*   **Assumptions:**
    *   Mass is concentrated at nodes.
    *   Beam/column elements are massless (or their mass is distributed to nodes).
    *   Inertial effects are primarily due to concentrated masses.
    *   Connections between elements are rigid or have defined stiffness.

#### 2.2. Advantages of Lumped Mass Systems

*   **Simplified Formulation:** Easier to derive and manage equations of motion compared to continuous systems.
*   **Computational Efficiency:** Reduces the number of variables in the analysis, making it computationally less demanding.
*   **Good Approximation:** Often provides a reasonably accurate representation of dynamic behavior, especially for modes dominated by inertial effects at the concentrated masses.

#### 2.3. Examples of Lumped Mass Modeling

*   **A simple multi-story building:** Each floor can be treated as a lumped mass, connected by massless columns representing stiffness.
*   **A bridge deck:** The deck can be discretized into several lumped masses, with supporting piers providing stiffness.

#### 2.4. Degrees of Freedom in Lumped Mass Systems

*   The DOFs are typically the independent displacements and rotations at the chosen lumped mass locations.
*   For a system with 'n' lumped masses, if each mass has 'm' degrees of freedom (e.g., horizontal translation, vertical translation, rotation), the system has $N = n \times m$ total DOFs.

---

### 3. Equation of Motion for Lumped Mass MDOF Systems

The equation of motion for an MDOF system can be expressed in matrix form, analogous to the SDOF equation, but involving matrices for mass, damping, and stiffness.

#### 3.1. General Form of the Equation of Motion

The general equation of motion for a damped MDOF system subjected to an external force is:

$ \mathbf{M} \ddot{\mathbf{u}}(t) + \mathbf{C} \dot{\mathbf{u}}(t) + \mathbf{K} \mathbf{u}(t) = \mathbf{f}(t) $

Where:

*   $ \mathbf{u}(t) $: Vector of displacements for each DOF at time $t$.
    $ \mathbf{u}(t) = \begin{bmatrix} u_1(t) \\ u_2(t) \\ \vdots \\ u_N(t) \end{bmatrix} $
*   $ \ddot{\mathbf{u}}(t) $: Vector of accelerations for each DOF at time $t$.
*   $ \dot{\mathbf{u}}(t) $: Vector of velocities for each DOF at time $t$.
*   $ \mathbf{M} $: **Mass Matrix** (N x N). This matrix is typically diagonal in lumped mass systems, where $M_{ii}$ represents the mass concentrated at DOF $i$.
*   $ \mathbf{C} $: **Damping Matrix** (N x N). Represents the damping forces in the system. Its form can be complex.
*   $ \mathbf{K} $: **Stiffness Matrix** (N x N). Represents the elastic restoring forces of the system.
*   $ \mathbf{f}(t) $: Vector of external forces applied to the system at time $t$.
    $ \mathbf{f}(t) = \begin{bmatrix} f_1(t) \\ f_2(t) \\ \vdots \\ f_N(t) \end{bmatrix} $

#### 3.2. Mass Matrix ($ \mathbf{M} $)**

*   **Diagonal Matrix:** For lumped mass systems, the mass matrix is usually a diagonal matrix.
*   $ M_{ii} $ = Mass concentrated at the $i$-th DOF.
*   $ M_{ij} = 0 $ for $ i \neq j $.

**Example:** A 2-DOF system with masses $m_1$ and $m_2$ at DOFs 1 and 2 respectively:
$ \mathbf{M} = \begin{bmatrix} m_1 & 0 \\ 0 & m_2 \end{bmatrix} $

#### 3.3. Stiffness Matrix ($ \mathbf{K} $)

*   **Symmetric Matrix:** The stiffness matrix is always symmetric ($ K_{ij} = K_{ji} $).
*   $ K_{ij} $ represents the force in DOF $i$ due to a unit displacement in DOF $j$, assuming all other DOFs are held fixed.
*   It describes how the forces in the system relate to the displacements at different DOFs.

**Example:** Consider two masses ($m_1$, $m_2$) connected by springs ($k_1$, $k_2$, $k_3$) as follows:
(Mass 1) --- $k_2$ --- (Mass 2)
  |             |
 $k_1$         $k_3$
  |             |
(Ground)      (Ground)

Let $u_1$ be the displacement of $m_1$ and $u_2$ be the displacement of $m_2$.

*   **Force in DOF 1:**
    *   From spring $k_1$: $-k_1 u_1$ (force opposing displacement $u_1$)
    *   From spring $k_2$: $-k_2 (u_1 - u_2)$ (force from $k_2$ acting on $m_1$ due to relative displacement)
    *   Total force in DOF 1 = $-k_1 u_1 - k_2 (u_1 - u_2) = -(k_1 + k_2) u_1 + k_2 u_2$

*   **Force in DOF 2:**
    *   From spring $k_2$: $-k_2 (u_2 - u_1)$ (force from $k_2$ acting on $m_2$)
    *   From spring $k_3$: $-k_3 u_2$ (force opposing displacement $u_2$)
    *   Total force in DOF 2 = $k_2 (u_1 - u_2) - k_3 u_2 = k_2 u_1 - (k_2 + k_3) u_2$

So, the stiffness matrix is:
$ \mathbf{K} = \begin{bmatrix} (k_1 + k_2) & -k_2 \\ -k_2 & (k_2 + k_3) \end{bmatrix} $

#### 3.4. Damping Matrix ($ \mathbf{C} $)

*   **Symmetric Matrix:** Typically, $ C_{ij} = C_{ji} $.
*   $ C_{ij} $ represents the damping force in DOF $i$ due to a unit velocity in DOF $j$.
*   **Rayleigh Damping:** A common assumption is Rayleigh damping, where $ \mathbf{C} = \alpha \mathbf{M} + \beta \mathbf{K} $. This simplifies analysis but is an approximation. Other forms exist.
*   If damping is neglected, $ \mathbf{C} = \mathbf{0} $.

**Example:** If damping is proportional to mass and stiffness (Rayleigh damping) for the previous system:
$ \mathbf{C} = \alpha \begin{bmatrix} m_1 & 0 \\ 0 & m_2 \end{bmatrix} + \beta \begin{bmatrix} (k_1 + k_2) & -k_2 \\ -k_2 & (k_2 + k_3) \end{bmatrix} $

#### 3.5. Force Vector ($ \mathbf{f}(t) $)

*   $ f_i(t) $ is the external force applied at the $i$-th DOF at time $t$.
*   If no force is applied at a DOF, the corresponding entry is zero.

**Example:** If a force $P(t)$ is applied to mass $m_1$ (DOF 1) and no force to $m_2$:
$ \mathbf{f}(t) = \begin{bmatrix} P(t) \\ 0 \end{bmatrix} $

#### 3.6. Undamped Systems

For undamped systems, $ \mathbf{C} = \mathbf{0} $. The equation of motion simplifies to:

$ \mathbf{M} \ddot{\mathbf{u}}(t) + \mathbf{K} \mathbf{u}(t) = \mathbf{f}(t) $

---

### 4. Shear Building Frame

#### 4.1. Concept of a Shear Building

*   **Idealization:** A shear building is a simplified model of a multi-story building where the lateral resistance to earthquake or wind loads is primarily provided by the shear deformation of the columns.
*   **Assumptions:**
    *   Floors are rigid diaphragms, meaning they deform only as a rigid plane in their own plane. All points on a floor move the same amount horizontally.
    *   Columns are assumed to be pin-ended at the floor levels (or have negligible bending stiffness). Their contribution to lateral stiffness is due to shear deformation.
    *   Walls (if present) are also modeled as contributing to shear stiffness.
    *   Masses are concentrated at the floor levels.
    *   Lateral loads are resisted by shear forces in the vertical structural elements.

#### 4.2. Modeling a Shear Building as an MDOF System

Consider a shear building with 'N' stories.

*   **Degrees of Freedom:** The lateral displacement of each floor is taken as a DOF. Let $u_i$ be the lateral displacement of the $i$-th floor from its equilibrium position ($i=1$ for the top floor, $N$ for the ground floor).
*   **Lumped Masses:** Each floor $i$ is assigned a mass $m_i$. These are the lumped masses.
*   **Stiffness:** The lateral stiffness between adjacent floors is provided by the columns (and walls). Let $k_i$ be the stiffness of the columns connecting floor $i$ to floor $i-1$ (where $i=1$ is the top story, so $k_1$ connects floor 1 to floor 2, and $k_N$ connects floor N to the ground). The stiffness $k_i$ represents the force required to produce a unit relative lateral displacement between floor $i$ and floor $i-1$.

#### 4.3. Deriving the Equation of Motion for a Shear Building

Let's consider a 3-story shear building with masses $m_1, m_2, m_3$ and inter-story stiffnesses $k_1, k_2, k_3$.
The DOFs are $u_1, u_2, u_3$ representing the lateral displacement of the 1st, 2nd, and 3rd floors, respectively (from top to bottom).

**Forces at each DOF:**

*   **DOF 1 (Top Floor):**
    *   Inertial force: $-m_1 \ddot{u}_1$
    *   Force from spring $k_1$ (connecting floor 1 to floor 2): $-k_1 (u_1 - u_2)$
    *   Applied external force: $f_1(t)$

    Equation for DOF 1:
    $ -m_1 \ddot{u}_1 - k_1 (u_1 - u_2) = f_1(t) $
    $ m_1 \ddot{u}_1 + k_1 u_1 - k_1 u_2 = -f_1(t) $  (Note: We usually bring forces to the right side as positive if they are acting in the direction of displacement)
    $ m_1 \ddot{u}_1 + k_1 u_1 - k_1 u_2 = f_1(t) $ (Assuming $f_1(t)$ is the force applied *to* the mass in the positive displacement direction)

*   **DOF 2 (Second Floor):**
    *   Inertial force: $-m_2 \ddot{u}_2$
    *   Force from spring $k_1$ (connecting floor 2 to floor 1): $-k_1 (u_2 - u_1)$
    *   Force from spring $k_2$ (connecting floor 2 to floor 3): $-k_2 (u_2 - u_3)$
    *   Applied external force: $f_2(t)$

    Equation for DOF 2:
    $ -m_2 \ddot{u}_2 - k_1 (u_2 - u_1) - k_2 (u_2 - u_3) = f_2(t) $
    $ m_2 \ddot{u}_2 + k_1 u_1 - (k_1 + k_2) u_2 + k_2 u_3 = f_2(t) $

*   **DOF 3 (Third Floor - Ground Level):**
    *   Inertial force: $-m_3 \ddot{u}_3$
    *   Force from spring $k_2$ (connecting floor 3 to floor 2): $-k_2 (u_3 - u_2)$
    *   Force from spring $k_3$ (connecting floor 3 to ground): $-k_3 (u_3 - 0) = -k_3 u_3$
    *   Applied external force: $f_3(t)$

    Equation for DOF 3:
    $ -m_3 \ddot{u}_3 - k_2 (u_3 - u_2) - k_3 u_3 = f_3(t) $
    $ m_3 \ddot{u}_3 + k_2 u_2 - (k_2 + k_3) u_3 = f_3(t) $

**Matrix Form for the 3-Story Shear Building (Undamped):**

$ \begin{bmatrix} m_1 & 0 & 0 \\ 0 & m_2 & 0 \\ 0 & 0 & m_3 \end{bmatrix} \begin{bmatrix} \ddot{u}_1(t) \\ \ddot{u}_2(t) \\ \ddot{u}_3(t) \end{bmatrix} + \begin{bmatrix} k_1 & -k_1 & 0 \\ -k_1 & (k_1+k_2) & -k_2 \\ 0 & -k_2 & (k_2+k_3) \end{bmatrix} \begin{bmatrix} u_1(t) \\ u_2(t) \\ u_3(t) \end{bmatrix} = \begin{bmatrix} f_1(t) \\ f_2(t) \\ f_3(t) \end{bmatrix} $

This is in the form $ \mathbf{M} \ddot{\mathbf{u}}(t) + \mathbf{K} \mathbf{u}(t) = \mathbf{f}(t) $, where:

$ \mathbf{M} = \begin{bmatrix} m_1 & 0 & 0 \\ 0 & m_2 & 0 \\ 0 & 0 & m_3 \end{bmatrix} $

$ \mathbf{K} = \begin{bmatrix} k_1 & -k_1 & 0 \\ -k_1 & (k_1+k_2) & -k_2 \\ 0 & -k_2 & (k_2+k_3) \end{bmatrix} $

$ \mathbf{u}(t) = \begin{bmatrix} u_1(t) \\ u_2(t) \\ u_3(t) \end{bmatrix} $, $ \mathbf{f}(t) = \begin{bmatrix} f_1(t) \\ f_2(t) \\ f_3(t) \end{bmatrix} $

**Generalization to N-Story Shear Building:**

*   **Mass Matrix ($ \mathbf{M} $):** A diagonal matrix with $m_i$ on the diagonal.
    $ \mathbf{M} = diag(m_1, m_2, \dots, m_N) $
*   **Stiffness Matrix ($ \mathbf{K} $):**
    *   Diagonal elements: $ K_{ii} = k_i + k_{i+1} $ (with $k_{N+1}=0$)
    *   Off-diagonal elements: $ K_{i, i+1} = K_{i+1, i} = -k_{i+1} $
    *   All other elements are zero.

    $ \mathbf{K} = \begin{bmatrix}
    k_1 & -k_1 & 0 & \dots & 0 \\
    -k_1 & k_1+k_2 & -k_2 & \dots & 0 \\
    0 & -k_2 & k_2+k_3 & \dots & 0 \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & 0 & \dots & k_N
    \end{bmatrix} $
    (Note: The last diagonal element should be $k_N$ if ground is fixed. If $k_N$ is the stiffness of the last story, then the bottom-right element is $k_N$ if the stiffness is only for the connection to the ground. If $k_N$ is the stiffness of the Nth story itself, the interpretation changes. In the context of inter-story stiffness, $k_N$ is the stiffness between floor N and ground).

    **Correction for N-story Shear Building Stiffness Matrix:**
    Let $u_i$ be the displacement of the $i$-th floor from the ground.
    Let $k_i$ be the stiffness of the $i$-th story columns (connecting floor $i$ to $i-1$).
    Masses are $m_1, m_2, ..., m_N$ at floors $1, 2, ..., N$.
    $k_1$ connects floor 1 to floor 2. $k_2$ connects floor 2 to floor 3. $k_N$ connects floor N to ground.
    The relative displacement of story $i$ is $(u_i - u_{i+1})$ for $i=1, \dots, N-1$, and $u_N$ for the ground floor connection.

    *   **DOF $i$ (1 ≤ $i$ < $N$):**
        Force from spring $k_i$: $k_i(u_i - u_{i+1})$
        Force from spring $k_{i-1}$: $k_{i-1}(u_i - u_{i-1})$ (This is the force acting *on* mass $i$ from the spring above it)
        Let's re-evaluate the forces based on relative displacements and standard matrix assembly.

    **Let's re-define DOFs and stiffness for clarity:**
    Let $u_i$ be the lateral displacement of the $i$-th floor from the ground.
    Let $m_i$ be the mass of the $i$-th floor.
    Let $k_i$ be the stiffness of the $i$-th story columns (connecting floor $i$ to floor $i-1$). So $k_1$ is for the first story, $k_N$ for the Nth story.

    For an N-story building:
    DOFs: $u_1, u_2, ..., u_N$ (displacements of floors 1 to N).
    Masses: $m_1, m_2, ..., m_N$.

    *   **Consider forces acting *on* mass $i$ at floor $i$:**
        *   Inertial force: $-m_i \ddot{u}_i$
        *   Force from spring $k_{i-1}$ (connecting floor $i-1$ to $i$): $k_{i-1} (u_{i-1} - u_i)$ (assuming $k_0=0$)
        *   Force from spring $k_i$ (connecting floor $i$ to $i+1$): $k_i (u_i - u_{i+1})$ (assuming $k_N=0$ for the last story connection to ground, rather this should be $k_N$ connecting floor N to ground).

    Let's use the standard matrix assembly from Finite Element Method or direct stiffness method perspective:
    Force in DOF $i$ = Inertial force + Spring forces at DOF $i$.
    $f_i(t) - m_i \ddot{u}_i = \text{Sum of forces from springs attached to DOF } i$.

    Let's consider the story stiffness $k_i$ as the force required to produce a unit relative displacement between floor $i$ and floor $i-1$.
    Story 1: stiffness $k_1$, mass $m_1$. Rel displacement $u_1$. Force $k_1 u_1$.
    Story 2: stiffness $k_2$, mass $m_2$. Rel displacement $u_2-u_1$. Force $k_2 (u_2-u_1)$.
    Story i: stiffness $k_i$, mass $m_i$. Rel displacement $u_i-u_{i-1}$. Force $k_i (u_i-u_{i-1})$.

    **The stiffness matrix construction is about finding the force in DOF $i$ due to unit displacement in DOF $j$.**

    Let's re-evaluate for an N-story shear building.
    $u_1$: displacement of floor 1.
    $u_2$: displacement of floor 2.
    ...
    $u_N$: displacement of floor N (ground floor).

    $k_1$: stiffness of story 1 (connection between floor 1 and ground).
    $k_2$: stiffness of story 2 (connection between floor 2 and floor 1).
    $k_N$: stiffness of story N (connection between floor N and floor N-1).

    Equation of motion for mass $m_i$:
    $ m_i \ddot{u}_i + F_{i, \text{springs}} = f_i(t) $

    *   For $i=1$ (Top floor):
        $ m_1 \ddot{u}_1 + k_1(u_1 - u_2) = f_1(t) $ (assuming $u_2$ is displacement of floor below)
        $m_1 \ddot{u}_1 + k_1 u_1 - k_1 u_2 = f_1(t)$
        This implies $K_{11} = k_1$, $K_{12} = -k_1$.

    *   For $i$ (intermediate floor, 1 < $i$ < N):
        $ m_i \ddot{u}_i + k_i(u_i - u_{i+1}) + k_{i-1}(u_i - u_{i-1}) = f_i(t) $
        $ m_i \ddot{u}_i + k_{i-1}u_{i-1} - (k_{i-1} + k_i)u_i + k_i u_{i+1} = f_i(t) $
        This implies $K_{ii} = k_{i-1} + k_i$, $K_{i, i-1} = -k_{i-1}$, $K_{i, i+1} = -k_i$.

    *   For $i=N$ (Ground floor):
        $ m_N \ddot{u}_N + k_{N-1}(u_N - u_{N-1}) = f_N(t) $
        $ m_N \ddot{u}_N - k_{N-1}u_{N-1} + k_{N-1}u_N = f_N(t) $
        This implies $K_{N, N-1} = -k_{N-1}$, $K_{NN} = k_{N-1}$.

    **Revised Stiffness Matrix for N-story Shear Building:**
    Let $u_i$ be the displacement of the $i$-th floor from the ground, $i=1$ (top) to $N$ (ground).
    Let $k_i$ be the stiffness of the $i$-th story, connecting floor $i$ to floor $i-1$. So $k_1$ connects floor 1 to ground, $k_2$ connects floor 2 to floor 1, ..., $k_N$ connects floor N to floor N-1.
    Masses $m_1, m_2, ..., m_N$ at floors $1, ..., N$.

    Equation of motion for mass $m_i$:
    $ m_i \ddot{u}_i + k_i(u_i - u_{i+1}) + k_{i-1}(u_i - u_{i-1}) = f_i(t) $
    (Defining $u_0 = 0$, $k_0 = 0$, $u_{N+1} = 0$, $k_N=0$ for convenience in the formula)

    *   For $i=1$:
        $ m_1 \ddot{u}_1 + k_1(u_1 - u_2) = f_1(t) $
        $ m_1 \ddot{u}_1 + k_1 u_1 - k_1 u_2 = f_1(t) $
        $K_{11} = k_1$, $K_{12} = -k_1$.

    *   For $1 < i < N$:
        $ m_i \ddot{u}_i + k_i(u_i - u_{i+1}) + k_{i-1}(u_i - u_{i-1}) = f_i(t) $
        $ m_i \ddot{u}_i - k_{i-1} u_{i-1} + (k_{i-1} + k_i) u_i - k_i u_{i+1} = f_i(t) $
        $K_{i, i-1} = -k_{i-1}$, $K_{ii} = k_{i-1} + k_i$, $K_{i, i+1} = -k_i$.

    *   For $i=N$:
        $ m_N \ddot{u}_N + k_N(u_N - u_{N+1}) + k_{N-1}(u_N - u_{N-1}) = f_N(t) $
        With $u_{N+1} = 0$:
        $ m_N \ddot{u}_N + k_N u_N + k_{N-1}(u_N - u_{N-1}) = f_N(t) $
        $ m_N \ddot{u}_N - k_{N-1} u_{N-1} + (k_{N-1} + k_N) u_N = f_N(t) $
        $K_{N, N-1} = -k_{N-1}$, $K_{NN} = k_{N-1} + k_N$.

    **Correct Stiffness Matrix for N-story Shear Building:**
    $ \mathbf{K} = \begin{bmatrix}
    k_1 & -k_1 & 0 & \dots & 0 \\
    -k_1 & k_1+k_2 & -k_2 & \dots & 0 \\
    0 & -k_2 & k_2+k_3 & \dots & 0 \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & 0 & \dots & k_{N-1}+k_N
    \end{bmatrix} $

    This is the most common representation.

---

### 5. Key Concepts and Definitions

*   **Degree of Freedom (DOF):** An independent coordinate defining system configuration.
*   **Lumped Mass System:** A simplified model where mass is concentrated at discrete points.
*   **Mass Matrix ($ \mathbf{M} $):** Matrix representing inertial properties; usually diagonal in lumped mass systems.
*   **Stiffness Matrix ($ \mathbf{K} $):** Matrix relating forces to displacements; symmetric.
*   **Damping Matrix ($ \mathbf{C} $):** Matrix relating forces to velocities; symmetric.
*   **Shear Building:** A structural model idealizing lateral resistance from shear deformation of vertical elements, with rigid floors.
*   **Inter-story Stiffness ($ k_i $):** Stiffness of a story, representing resistance to relative displacement between adjacent floors.

---

### 6. Practice Questions

**Question 1:**
A 2-DOF system consists of two masses, $m_1$ and $m_2$, connected by springs $k_1$ and $k_2$ in series, with $m_1$ connected to the ground by $k_1$ and $m_2$ connected to $m_1$ by $k_2$. Define the DOFs and write down the mass and stiffness matrices for this system. Assume no damping.

**Answer 1:**
*   **DOFs:** Let $u_1$ be the displacement of $m_1$ and $u_2$ be the displacement of $m_2$.
*   **Mass Matrix ($ \mathbf{M} $):**
    $ \mathbf{M} = \begin{bmatrix} m_1 & 0 \\ 0 & m_2 \end{bmatrix} $
*   **Stiffness Matrix ($ \mathbf{K} $):**
    The spring $k_1$ is between $m_1$ and ground. The spring $k_2$ is between $m_1$ and $m_2$.
    Force on $m_1$: $-k_1 u_1 - k_2 (u_1 - u_2) = -(k_1 + k_2)u_1 + k_2 u_2$
    Force on $m_2$: $-k_2 (u_2 - u_1) = k_2 u_1 - k_2 u_2$
    $ \mathbf{K} = \begin{bmatrix} (k_1 + k_2) & -k_2 \\ -k_2 & k_2 \end{bmatrix} $

**Question 2:**
Consider a 2-story shear building with floor masses $m_1$ (top) and $m_2$ (bottom), and story stiffnesses $k_1$ (top story, connecting floor 1 to floor 2) and $k_2$ (bottom story, connecting floor 2 to ground). Write the equation of motion in matrix form for this undamped system.

**Answer 2:**
*   **DOFs:** $u_1$ (displacement of floor 1), $u_2$ (displacement of floor 2).
*   **Mass Matrix ($ \mathbf{M} $):**
    $ \mathbf{M} = \begin{bmatrix} m_1 & 0 \\ 0 & m_2 \end{bmatrix} $
*   **Stiffness Matrix ($ \mathbf{K} $):**
    Using the derived formula for N=2: $k_1$ is the stiffness of the first story (connecting to ground), $k_2$ is the stiffness of the second story (connecting floor 1 to floor 2).
    $K_{11} = k_1$
    $K_{12} = -k_1$
    $K_{21} = -k_1$
    $K_{22} = k_1 + k_2$
    $ \mathbf{K} = \begin{bmatrix} k_1 & -k_1 \\ -k_1 & k_1 + k_2 \end{bmatrix} $

    **Equation of Motion:**
    $ \begin{bmatrix} m_1 & 0 \\ 0 & m_2 \end{bmatrix} \begin{bmatrix} \ddot{u}_1(t) \\ \ddot{u}_2(t) \end{bmatrix} + \begin{bmatrix} k_1 & -k_1 \\ -k_1 & k_1 + k_2 \end{bmatrix} \begin{bmatrix} u_1(t) \\ u_2(t) \end{bmatrix} = \begin{bmatrix} f_1(t) \\ f_2(t) \end{bmatrix} $

**Question 3:**
What are the key assumptions made when modeling a structure as a shear building?

**Answer 3:**
*   Floors act as rigid diaphragms, translating horizontally without deforming.
*   Vertical structural elements (columns, walls) resist lateral loads primarily through shear deformation.
*   Bending stiffness of columns is often neglected or implicitly included in the story shear stiffness.
*   Mass is concentrated at the floor levels.

---

### 7. Important Points to Remember

*   The complexity of a structural system dictates whether it needs to be modeled as an MDOF system.
*   Lumped mass idealization is a common and effective method for simplifying MDOF systems, particularly for dynamic analysis.
*   The equation of motion for an MDOF system is a set of coupled second-order ordinary differential equations.
*   The mass, stiffness, and damping matrices are fundamental to describing the dynamic behavior of an MDOF system.
*   For shear buildings, the stiffness matrix has a characteristic banded structure.
*   Understanding the definition and assembly of these matrices is crucial for the subsequent analysis techniques (e.g., modal analysis).

---
