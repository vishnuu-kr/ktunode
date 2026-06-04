---
title: "stiffness matrix"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS"
module: "Module 4: Introduction to finite element analysis"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463515"
status: "completed"
scrapedAt: "2026-05-20T17:59:06.080Z"
---
# Module 4: Introduction to Finite Element Analysis - Stiffness Matrix

## Topic: Stiffness Matrix

This module introduces the fundamental concept of the stiffness matrix within the Finite Element Analysis (FEA) framework. Understanding the stiffness matrix is crucial for analyzing the behavior of structures under various loads, a core application of Computer-Aided Design and Analysis (CADA).

---

### 1. Learning Outcomes Covered

This set of notes aims to address the following learning outcomes related to the stiffness matrix:

*   **Understand the role of the stiffness matrix in FEA:** How it relates internal forces to external displacements.
*   **Formulate the stiffness matrix for basic structural elements:** Focus on simple one-dimensional elements (e.g., truss/bar elements).
*   **Explain the concept of element stiffness matrix:** Its meaning and physical interpretation.
*   **Explain the concept of global stiffness matrix:** How element matrices are assembled into a system matrix.
*   **Understand the assembly process of the stiffness matrix:** From element matrices to the global system.
*   **Recognize the importance of boundary conditions in modifying the stiffness matrix:** How constraints affect the system.

---

### 2. Course Outcomes Alignment

The content of this topic directly aligns with:

*   **CO4: Understand finite element analysis (FEA) and finite volume methods (FVM) including discretization, formulation, and boundary condition implementation for simple structural and fluid flow problems. (Knowledge Level: K2)**
    *   Specifically, this topic focuses on the "formulation" aspect of FEA for simple structural problems by explaining the derivation and assembly of the stiffness matrix. Understanding boundary condition implementation is also touched upon in relation to modifying the global stiffness matrix.

---

### 3. Key Concepts and Definitions

#### 3.1 What is a Stiffness Matrix?

The **stiffness matrix**, often denoted by **[K]**, is a fundamental component in the formulation of the Finite Element Method (FEM). It's a square matrix that mathematically relates the nodal forces in a system to the nodal displacements.

*   **Definition:** The stiffness matrix represents the inherent stiffness of an element or a structure. It quantifies how much force is required to produce a unit displacement at the nodes.
*   **Relationship:** The fundamental equation for structural analysis in FEM is:
    $$ \{F\} = [K] \{u\} $$
    Where:
    *   $\{F\}$ is the vector of nodal forces (external applied forces).
    *   $[K]$ is the stiffness matrix.
    *   $\{u\}$ is the vector of nodal displacements.

#### 3.2 Element Stiffness Matrix

For each individual finite element, we can derive an **element stiffness matrix**, denoted by $[k^e]$. This matrix describes the stiffness characteristics of that specific element.

*   **Derivation:** The element stiffness matrix is derived based on the material properties (e.g., Young's modulus, $E$), geometric properties (e.g., cross-sectional area, $A$, length, $L$), and the assumed displacement behavior (shape functions) within the element.
*   **Physical Meaning:** Each entry $k_{ij}^e$ in the element stiffness matrix represents the force required at node $i$ to produce a unit displacement at node $j$, while all other nodes are held fixed.

#### 3.3 Global Stiffness Matrix

The **global stiffness matrix**, denoted by $[K]$, represents the stiffness of the entire structure or assembly of elements. It is formed by assembling the individual element stiffness matrices.

*   **Assembly Process:** This is a crucial step in FEA. Element stiffness matrices are mapped to their corresponding degrees of freedom (DOFs) in the global system and then summed up. This process ensures that the equilibrium and compatibility conditions are satisfied at the interfaces between elements.

#### 3.4 Degrees of Freedom (DOFs)

Degrees of freedom represent the independent movements or rotations that a node can undergo. For a simple truss/bar element, DOFs typically include axial displacement.

*   **Example (1D Bar Element):** A 1D bar element with two nodes (node 1 and node 2) will have two DOFs:
    *   $u_1$: Axial displacement at node 1.
    *   $u_2$: Axial displacement at node 2.
    Thus, the element stiffness matrix $[k^e]$ for a 1D bar element will be a 2x2 matrix.

#### 3.5 Shape Functions (Brief Mention)

Shape functions, often denoted by $N_i$, are polynomial functions that describe the displacement within an element as a function of the nodal displacements. These are essential for deriving the element stiffness matrix.

*   **Reference:** Chandrupatla and Belegundu (2001) extensively discuss the derivation of element stiffness matrices using shape functions for various element types.

---

### 4. Formulation of the Stiffness Matrix for a 1D Bar Element

Let's consider a simple one-dimensional bar element with two nodes, 1 and 2. Assume the element is subjected to axial forces.

*   **Assumptions:**
    *   The element is homogeneous and isotropic.
    *   The material obeys Hooke's Law ($ \sigma = E \epsilon $).
    *   Plane sections remain plane and perpendicular to the axis (no shear deformation).
    *   The cross-sectional area $A$ and Young's modulus $E$ are constant along the length $L$.

*   **Strain-Displacement Relationship:**
    The axial strain $\epsilon$ within the element is related to the displacement gradient:
    $$ \epsilon = \frac{du}{dx} $$

*   **Displacement Interpolation (Using Linear Shape Functions):**
    The displacement $u(x)$ at any point $x$ within the element can be approximated using linear shape functions:
    $$ u(x) = N_1(x) u_1 + N_2(x) u_2 $$
    where $u_1$ and $u_2$ are the axial displacements at nodes 1 and 2, respectively.
    The linear shape functions are:
    $$ N_1(x) = 1 - \frac{x}{L} $$
    $$ N_2(x) = \frac{x}{L} $$
    Here, $x$ is measured from node 1, and $L$ is the element length.

*   **Strain in terms of Nodal Displacements:**
    Differentiating the displacement with respect to $x$:
    $$ \epsilon = \frac{du}{dx} = \frac{d}{dx} (N_1(x) u_1 + N_2(x) u_2) $$
    $$ \epsilon = \left(\frac{dN_1}{dx}\right) u_1 + \left(\frac{dN_2}{dx}\right) u_2 $$
    $$ \frac{dN_1}{dx} = -\frac{1}{L} $$
    $$ \frac{dN_2}{dx} = \frac{1}{L} $$
    So,
    $$ \epsilon = \left[-\frac{1}{L} \quad \frac{1}{L}\right] \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix} $$
    This can be written in matrix form as:
    $$ \epsilon = [B] \{u^e\} $$
    where $[B] = [-\frac{1}{L} \quad \frac{1}{L}]$ is the strain-displacement matrix, and $\{u^e\} = \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix}$ is the element displacement vector.

*   **Stress-Strain Relationship (Constitutive Matrix):**
    For a 1D elastic material, stress $\sigma$ is related to strain $\epsilon$ by Young's modulus $E$:
    $$ \sigma = E \epsilon $$
    In matrix form:
    $$ \sigma = [D] \epsilon $$
    where $[D] = [E]$.

*   **Force-Displacement Relationship (Element Stiffness Matrix Derivation):**
    The nodal forces $\{F^e\}$ are related to stress $\sigma$ by integrating stress over the cross-sectional area and along the element length. The element stiffness matrix $[k^e]$ is derived using the principle of virtual work or direct equilibrium. The general formula for the element stiffness matrix is:
    $$ [k^e] = \int_{V} [B]^T [D] [B] dV $$
    For a 1D bar element, this simplifies to:
    $$ [k^e] = \int_{0}^{L} A E \left[-\frac{1}{L} \quad \frac{1}{L}\right]^T \left[-\frac{1}{L} \quad \frac{1}{L}\right] dx $$
    $$ [k^e] = A E \int_{0}^{L} \begin{Bmatrix} -1/L \\ 1/L \end{Bmatrix} \begin{Bmatrix} -1/L & 1/L \end{Bmatrix} dx $$
    $$ [k^e] = A E \int_{0}^{L} \begin{bmatrix} 1/L^2 & -1/L^2 \\ -1/L^2 & 1/L^2 \end{bmatrix} dx $$
    Integrating with respect to $x$:
    $$ [k^e] = A E \begin{bmatrix} 1/L & -1/L \\ -1/L & 1/L \end{bmatrix} \left[x\right]_0^L $$
    $$ [k^e] = A E \begin{bmatrix} 1/L & -1/L \\ -1/L & 1/L \end{Bmatrix} (L) $$
    $$ [k^e] = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} $$

*   **Physical Interpretation of the 1D Bar Element Stiffness Matrix:**
    *   $k_{11} = \frac{AE}{L}$: Force at node 1 required for unit displacement at node 1 (node 2 fixed). This is the stiffness of the bar.
    *   $k_{12} = -\frac{AE}{L}$: Force at node 1 required for unit displacement at node 2 (node 1 fixed). This is a reaction force.
    *   $k_{21} = -\frac{AE}{L}$: Force at node 2 required for unit displacement at node 1 (node 2 fixed). This is a reaction force.
    *   $k_{22} = \frac{AE}{L}$: Force at node 2 required for unit displacement at node 2 (node 1 fixed). This is the stiffness of the bar.

**Reference:** This derivation is standard and can be found in detail in Chandrupatla and Belegundu (2001) and Logan (2007).

---

### 5. Assembly of the Global Stiffness Matrix

The global stiffness matrix $[K]$ is constructed by assembling the element stiffness matrices. This process involves mapping the DOFs of each element to the global DOFs of the structure.

*   **Process:**
    1.  **Identify Global DOFs:** Determine the total number of DOFs in the structure.
    2.  **Initialize Global Matrix:** Create a global stiffness matrix $[K]$ of size (total DOFs) x (total DOFs) and initialize it with zeros.
    3.  **Map Element Matrices:** For each element $[k^e]$:
        *   Identify the global node numbers associated with the element's nodes.
        *   Map the element stiffness coefficients $k_{ij}^e$ to the corresponding positions in the global stiffness matrix $[K]$ based on the global DOFs of the connected nodes.
    4.  **Sum Contributions:** Add the contributions of each element's stiffness coefficients to the appropriate locations in the global stiffness matrix.

*   **Example:** Consider a simple structure with two 1D bar elements connected at a common node.
    *   Element 1: Nodes 1 and 2. Stiffness matrix $[k^1]$. Global DOFs: $u_1, u_2$.
    *   Element 2: Nodes 2 and 3. Stiffness matrix $[k^2]$. Global DOFs: $u_2, u_3$.
    *   The structure has 3 nodes and 3 DOFs ($u_1, u_2, u_3$). The global stiffness matrix $[K]$ will be 3x3.

    $$ [k^1] = \frac{AE}{L_1} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} $$
    $$ [k^2] = \frac{AE}{L_2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{Bmatrix} $$

    Assembly:
    *   The DOFs for element 1 are 1 and 2.
    *   The DOFs for element 2 are 2 and 3.

    $$ [K] = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} $$

    Add $[k^1]$ to $[K]$:
    $$ [K] = \begin{bmatrix} k^1_{11} & k^1_{12} & 0 \\ k^1_{21} & k^1_{22} & 0 \\ 0 & 0 & 0 \end{bmatrix} = \frac{AE}{L_1} \begin{bmatrix} 1 & -1 & 0 \\ -1 & 1 & 0 \\ 0 & 0 & 0 \end{bmatrix} $$

    Add $[k^2]$ to $[K]$: Note that $k^1_{22}$ and $k^2_{11}$ both correspond to the DOF $u_2$ at node 2.
    $$ [K] = \begin{bmatrix} \frac{AE}{L_1} & -\frac{AE}{L_1} & 0 \\ -\frac{AE}{L_1} & \frac{AE}{L_1} + \frac{AE}{L_2} & -\frac{AE}{L_2} \\ 0 & -\frac{AE}{L_2} & \frac{AE}{L_2} \end{bmatrix} $$

    This assembled matrix $[K]$ represents the stiffness of the entire two-element structure.

**Reference:** Groover & Zimmers (2014) and Zeid & Sivasubramanian (2009) provide conceptual overviews of assembly in CAD/CAM contexts, which often involve FEA. Logan (2007) offers a detailed computational explanation.

---

### 6. Boundary Conditions and their Impact on the Stiffness Matrix

Boundary conditions (BCs) are essential for uniquely determining the displacements and forces in a structure. They represent constraints applied to the structure, such as fixed supports or applied displacements.

*   **Types of Boundary Conditions:**
    *   **Prescribed Displacements (Essential Boundary Conditions):** Setting nodal displacements to known values (e.g., $u=0$ at a fixed support).
    *   **Prescribed Forces (Natural Boundary Conditions):** Applying known forces at nodes.

*   **Impact on the Stiffness Matrix:**
    Boundary conditions are typically imposed on the global system of equations:
    $$ [K] \{u\} = \{F\} $$

    *   **Prescribed Displacements:** When a displacement $u_i$ is known (e.g., $u_i = \bar{u}_i$), the corresponding row and column in the stiffness matrix $[K]$ are modified. There are several methods for enforcing prescribed displacements, with the most common being:
        1.  **Penalty Method:** Large numbers are added to the diagonal of the stiffness matrix corresponding to the constrained DOF, and the force vector is adjusted.
        2.  **Modification Method (Gauss Elimination):** For a constrained displacement $u_i = \bar{u}_i$:
            *   For all $j \neq i$, update $K_{ji} = 0$ and $K_{ij} = 0$.
            *   Set $K_{ii} = 1$ (or a very large number).
            *   Modify the force vector $F_i$ to $F_i - \sum_{j \neq i} K_{ij} \bar{u}_j$, where $K_{ij}$ are the values *before* modification. The force at the constrained node $F_i$ is effectively set to $\bar{u}_i$ (or a large number times $\bar{u}_i$ if $K_{ii}$ was modified).

    *   **Prescribed Forces:** These are directly incorporated into the force vector $\{F\}$.

*   **Why Modify Stiffness Matrix for Prescribed Displacements?**
    The goal is to ensure that when we solve $\{u\} = [K]^{-1}\{F\}$, the solution for the constrained displacement $u_i$ is indeed $\bar{u}_i$. Modifying the matrix ensures that the system of equations reflects these constraints, preventing spurious displacements.

**Reference:** Chandrupatla and Belegundu (2001) and Logan (2007) provide detailed explanations and various methods for applying boundary conditions in FEA.

---

### 7. Importance and Applications

*   **Structural Analysis:** Calculating stresses, strains, and displacements in beams, trusses, plates, shells, and complex assemblies under static, dynamic, and thermal loads.
*   **Foundation for FEA:** The stiffness matrix is the bedrock of static structural analysis in FEA.
*   **Computer-Aided Design:** FEA, driven by stiffness matrices, allows engineers to simulate the performance of designs before physical prototyping, saving time and cost. This directly relates to **CO1** and **CO4**.
*   **Solving Complex Systems:** For large structures with many elements and DOFs, the global stiffness matrix can be very large. Efficient numerical techniques (e.g., sparse matrix solvers) are used to solve the system $[K]\{u\} = \{F\}$.

**Reference:** Groover & Zimmers (2014) and Ulrich & Eppinger (2020) discuss how FEA is integral to product design and development, enabling performance evaluation.

---

### 8. Important Points to Remember

*   The stiffness matrix **[K]** quantifies the stiffness of a structure or its elements.
*   It relates nodal forces **{F}** to nodal displacements **{u}** via **{F} = [K]{u}**.
*   The **element stiffness matrix [k<sup>e</sup>]** is derived for individual elements based on material and geometric properties.
*   The **global stiffness matrix [K]** is formed by assembling element stiffness matrices.
*   The assembly process involves mapping element DOFs to global DOFs and summing contributions.
*   Boundary conditions, especially prescribed displacements, are enforced by modifying the global stiffness matrix and the force vector.
*   The stiffness matrix is always a symmetric, positive-definite matrix for a stable structure.

---

### 9. Practice Questions and Exercises

**Question 1:**
What is the fundamental equation that relates nodal forces, stiffness matrix, and nodal displacements in Finite Element Analysis?
*   **(a)** $\{u\} = [K] \{F\}$
*   **(b)** $\{F\} = [K] \{u\}$
*   **(c)** $\{F\} = [C] \{u\}$
*   **(d)** $\{u\} = [M] \{F\}$

**Answer:** (b) $\{F\} = [K] \{u\}$

**Question 2:**
For a 1D bar element with Young's modulus $E$, cross-sectional area $A$, and length $L$, what is its element stiffness matrix $[k^e]$?
*   **(a)** $\frac{AE}{L} \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}$
*   **(b)** $\frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$
*   **(c)** $AE L \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$
*   **(d)** $\frac{L}{AE} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$

**Answer:** (b) $\frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$

**Question 3 (Conceptual):**
Explain the physical meaning of an entry $k_{12}$ in the element stiffness matrix of a 1D bar element.

**Answer:** $k_{12}$ represents the force that needs to be applied at node 1 to produce a unit displacement at node 2, assuming node 1 is held fixed. For a 1D bar element, this value is $-\frac{AE}{L}$, indicating that a displacement at node 2 induces an opposite force at node 1 due to axial strain.

**Question 4 (Assembly Exercise):**
Consider a rod made of two identical bar elements connected end-to-end. Element 1 connects nodes 1 and 2, and Element 2 connects nodes 2 and 3. Both elements have the same material properties ($E, A$) and length ($L$). If the stiffness matrix for each element is:
$$ [k^e] = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} $$
Determine the global stiffness matrix $[K]$ for the three-node rod.

**Solution:**
The global system has 3 DOFs: $u_1, u_2, u_3$.
Element 1 (Nodes 1, 2): DOFs 1, 2.
Element 2 (Nodes 2, 3): DOFs 2, 3.

$[K]$ initialized as a 3x3 zero matrix:
$$ [K] = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} $$

Add $[k^1]$:
$$ [K] = \begin{bmatrix} \frac{AE}{L} & -\frac{AE}{L} & 0 \\ -\frac{AE}{L} & \frac{AE}{L} & 0 \\ 0 & 0 & 0 \end{bmatrix} $$

Add $[k^2]$:
$$ [K] = \begin{bmatrix} \frac{AE}{L} & -\frac{AE}{L} & 0 \\ -\frac{AE}{L} & \frac{AE}{L} + \frac{AE}{L} & -\frac{AE}{L} \\ 0 & -\frac{AE}{L} & \frac{AE}{L} \end{bmatrix} $$

The final global stiffness matrix is:
$$ [K] = \begin{bmatrix} \frac{AE}{L} & -\frac{AE}{L} & 0 \\ -\frac{AE}{L} & \frac{2AE}{L} & -\frac{AE}{L} \\ 0 & -\frac{AE}{L} & \frac{AE}{L} \end{bmatrix} $$

**Question 5 (Boundary Condition Impact):**
Suppose the rod in Question 4 is fixed at node 1 (i.e., $u_1 = 0$). How would you modify the global stiffness matrix $[K]$ and the force vector $\{F\}$ to account for this boundary condition? Assume an external force $F_3$ is applied at node 3, and no force at node 2. The system equation is $[K]\{u\} = \{F\}$.

**Answer:**
The system of equations is:
$$ \begin{bmatrix} \frac{AE}{L} & -\frac{AE}{L} & 0 \\ -\frac{AE}{L} & \frac{2AE}{L} & -\frac{AE}{L} \\ 0 & -\frac{AE}{L} & \frac{AE}{L} \end{bmatrix} \begin{Bmatrix} u_1 \\ u_2 \\ u_3 \end{Bmatrix} = \begin{Bmatrix} F_1 \\ F_2 \\ F_3 \end{Bmatrix} $$
Given $u_1 = 0$, $F_1 = 0$ (no force at node 1), and $F_2 = 0$ (no force at node 2).

Using the modification method:
1.  **Modify Row 1 and Column 1:**
    *   Since $u_1$ is fixed to 0, the first row and first column of $[K]$ are adjusted.
    *   For the first row (corresponding to $u_1$): Since $u_1=0$, the forces generated by the stiffness of the rod at node 1 are only due to $u_2$ and $u_3$. However, by convention, we force $u_1$ to be 0. A common way is to set $K_{11}=1$ and $F_1=0$. All other $K_{1j}$ ($j \neq 1$) are set to 0, and $F_1$ is adjusted.
    *   A simpler and widely used method for $u_1=0$:
        *   Remove the first row and first column from $[K]$.
        *   The force vector's first element is already 0.
        *   The modified system becomes:
            $$ \begin{bmatrix} \frac{2AE}{L} & -\frac{AE}{L} \\ -\frac{AE}{L} & \frac{AE}{L} \end{bmatrix} \begin{Bmatrix} u_2 \\ u_3 \end{Bmatrix} = \begin{Bmatrix} 0 \\ F_3 \end{Bmatrix} $$

**Alternative Modification (Directly):**
If we don't reduce the matrix size:
For $u_1 = \bar{u}_1 = 0$:
*   Modify row 1: $K_{11} \leftarrow 1$, $F_1 \leftarrow \bar{u}_1 = 0$. For $j=2,3$: $F_1 \leftarrow F_1 - K_{1j} \bar{u}_j = 0 - K_{1j} \cdot 0 = 0$.
*   Modify column 1: For $i=2,3$: $K_{i1} \leftarrow 0$.
*   The system becomes:
    $$ \begin{bmatrix} 1 & -\frac{AE}{L} & 0 \\ 0 & \frac{2AE}{L} & -\frac{AE}{L} \\ 0 & -\frac{AE}{L} & \frac{AE}{L} \end{bmatrix} \begin{Bmatrix} u_1 \\ u_2 \\ u_3 \end{Bmatrix} = \begin{Bmatrix} 0 \\ 0 \\ F_3 \end{Bmatrix} $$
    Solving this system will yield $u_1=0$, and the values for $u_2$ and $u_3$.

This completes the notes on the stiffness matrix, a foundational element in FEA within CADA.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
