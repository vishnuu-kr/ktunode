---
title: "Direct stiffness method"
subject: "FINITE ELEMENT METHOD"
module: "Module 2: Brief review of matrix methods"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba8116ce"
status: "completed"
scrapedAt: "2026-05-20T18:58:52.514Z"
---
# Finite Element Method: Module 2 - Brief Review of Matrix Methods

## Topic: Direct Stiffness Method

### Introduction to the Direct Stiffness Method

The Direct Stiffness Method (DSM) is a fundamental approach used in structural analysis, particularly within the Finite Element Method (FEM). It's a systematic way to assemble the stiffness of a structure from the stiffness of its individual elements. The core idea is to relate the forces acting on a structure to the displacements of its nodal points using a global stiffness matrix.

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Understand the fundamental principle of the direct stiffness method.**
*   **Define and explain the concept of element stiffness matrices.**
*   **Explain the process of assembling the global stiffness matrix.**
*   **Apply boundary conditions to the global stiffness matrix.**
*   **Solve for nodal displacements.**
*   **Calculate element forces and stresses.**

---

### 1. Fundamental Principle of the Direct Stiffness Method

The DSM is based on the principle of **equilibrium**. For a structure in equilibrium, the sum of forces acting at each nodal point is zero. In a stiffness-based approach, this equilibrium is expressed in terms of stiffness and displacements.

**Key Concept:** The displacement of a structure is directly proportional to the applied forces, with the proportionality constant being the stiffness of the structure.

Mathematically, this is represented by the **global stiffness equation**:

$$[K]\{D\} = \{F\}$$

Where:
*   $[K]$ is the **global stiffness matrix** representing the stiffness of the entire structure.
*   $\{D\}$ is the **global displacement vector** containing the unknown displacements of all nodal points.
*   $\{F\}$ is the **global force vector** containing the known external forces acting at all nodal points.

---

### 2. Element Stiffness Matrices

The DSM starts by defining the stiffness characteristics of individual structural elements (e.g., bars, beams, trusses). Each element has its own stiffness matrix, which relates the forces and moments at its ends to the displacements and rotations at its ends.

**Key Concept:** The element stiffness matrix $[k]$ is derived based on the material properties (e.g., Young's Modulus $E$), geometric properties (e.g., Area $A$, Moment of Inertia $I$), and the element's connectivity.

#### 2.1. Example: 1D Bar Element

Consider a simple 1D bar element with length $L$, cross-sectional area $A$, and Young's modulus $E$. Let the nodal displacements be $d_1$ and $d_2$ at its ends. The force-displacement relationship for this element is:

$$
\begin{bmatrix}
F_1 \\
F_2
\end{bmatrix}
=
\frac{AE}{L}
\begin{bmatrix}
1 & -1 \\
-1 & 1
\end{bmatrix}
\begin{bmatrix}
d_1 \\
d_2
\end{bmatrix}
$$

The element stiffness matrix for a 1D bar element is:

$$[k]_{element} = \frac{AE}{L} \begin{bmatrix}
1 & -1 \\
-1 & 1
\end{bmatrix}$$

*   $F_1, F_2$: Forces at nodes 1 and 2 respectively.
*   $d_1, d_2$: Displacements at nodes 1 and 2 respectively.

**Important Point:** The size of the element stiffness matrix is $2n \times 2n$, where $n$ is the number of degrees of freedom (DOFs) per node. For a 1D bar, each node has one DOF (translation), so it's $2 \times 2$.

#### 2.2. Degrees of Freedom (DOFs)

The DOFs represent the independent movements or rotations that a node can undergo.
*   **1D Bar:** Translational DOF at each node.
*   **2D Truss:** Translational DOFs (horizontal and vertical) at each node.
*   **2D Beam:** Translational DOFs (horizontal and vertical) and rotational DOF at each node.

---

### 3. Assembling the Global Stiffness Matrix $[K]$

The global stiffness matrix $[K]$ represents the stiffness of the entire structure. It is formed by systematically combining the individual element stiffness matrices $[k]$ based on how the elements are connected at the nodes.

**Key Concept:** The process of assembly ensures that the equilibrium of forces at each node is satisfied and that the compatibility of displacements between connected elements is maintained.

**Assembly Process:**

1.  **Identify Nodes and DOFs:** Determine the total number of nodes and the DOFs associated with each node in the structure. The size of the global stiffness matrix will be (Total DOFs) $\times$ (Total DOFs).
2.  **Define Element Connectivity:** Establish which nodes each element connects.
3.  **Transform Element Stiffness Matrices (if necessary):** For elements that are not aligned with the global coordinate system (e.g., inclined truss members), a transformation matrix is used to convert the element stiffness matrix to the global coordinate system. This involves rotation.
4.  **Populate the Global Stiffness Matrix:** For each element stiffness matrix $[k]_{element}$, its entries are added to the corresponding locations in the global stiffness matrix $[K]$. The location in $[K]$ is determined by the DOFs of the nodes connected by the element.

**Example: Assembling for a 2-Bar Structure**

Consider two bar elements (1 and 2) connected end-to-end at a single node (node 2). Node 1 is fixed, and node 3 is free to move horizontally.

*   **Nodes:** 1, 2, 3
*   **DOFs:** $d_1, d_2, d_3$ (horizontal displacement at each node).
*   **Element 1:** Connects nodes 1 and 2.
*   **Element 2:** Connects nodes 2 and 3.

Assume the element stiffness matrices are:

*   $[k]_1 = \frac{AE}{L_1} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$ (for nodes 1 and 2)
*   $[k]_2 = \frac{AE}{L_2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$ (for nodes 2 and 3)

**Assembly Steps:**

*   The global stiffness matrix $[K]$ will be $3 \times 3$ (since there are 3 DOFs).

    Initialize $[K]$ as a zero matrix:
    $$[K] = \begin{bmatrix}
    0 & 0 & 0 \\
    0 & 0 & 0 \\
    0 & 0 & 0
    \end{bmatrix}$$

*   **Add $[k]_1$ contributions:**
    *   $k_{11}$ to $K_{11}$
    *   $k_{12}$ to $K_{12}$
    *   $k_{21}$ to $K_{21}$
    *   $k_{22}$ to $K_{22}$

    $$[K] = \begin{bmatrix}
    \frac{AE}{L_1} & -\frac{AE}{L_1} & 0 \\
    -\frac{AE}{L_1} & \frac{AE}{L_1} & 0 \\
    0 & 0 & 0
    \end{bmatrix}$$

*   **Add $[k]_2$ contributions:**
    *   The DOFs for $[k]_2$ are $d_2$ and $d_3$. The corresponding matrix indices in $[K]$ are (2,2), (2,3), (3,2), (3,3).
    *   $k_{11}$ from $[k]_2$ adds to $K_{22}$.
    *   $k_{12}$ from $[k]_2$ adds to $K_{23}$.
    *   $k_{21}$ from $[k]_2$ adds to $K_{32}$.
    *   $k_{22}$ from $[k]_2$ adds to $K_{33}$.

    $$[K] = \begin{bmatrix}
    \frac{AE}{L_1} & -\frac{AE}{L_1} & 0 \\
    -\frac{AE}{L_1} & \frac{AE}{L_1} + \frac{AE}{L_2} & -\frac{AE}{L_2} \\
    0 & -\frac{AE}{L_2} & \frac{AE}{L_2}
    \end{bmatrix}$$

**Important Point:** The stiffness matrix is symmetric. The diagonal entries represent the stiffness of the node in that DOF, and off-diagonal entries represent the stiffness influence between nodes.

---

### 4. Applying Boundary Conditions

Boundary conditions specify known displacements (e.g., fixed supports have zero displacement) or known forces at certain nodal points. These conditions are essential for solving the system of linear equations.

**Key Concept:** Boundary conditions are imposed on the global stiffness equation $[K]\{D\} = \{F\}$ to transform it into a solvable system.

**Methods for Applying Boundary Conditions:**

*   **Method 1: Elimination (or Removal)**
    1.  Identify rows and columns corresponding to known displacements (usually zero).
    2.  Remove these rows and columns from $[K]$ and the corresponding entries from $\{F\}$.
    3.  Solve the reduced system.
    4.  Reintroduce the removed entries based on the calculated displacements.

*   **Method 2: Penalty Method**
    1.  For known displacements (e.g., $d_i = 0$), add a very large number (penalty number, $P$) to the diagonal entry $K_{ii}$.
    2.  Set the corresponding force $F_i$ to $P \times d_i$. If $d_i=0$, $F_i$ becomes 0.
    3.  This effectively "forces" the displacement to be zero without altering the matrix size.

*   **Method 3: Modification of the Global Equation (Commonly used)**
    1.  For each known displacement $d_j = \bar{d}_j$:
        *   For all $i \neq j$, update $F_i = F_i - K_{ij} \bar{d}_j$. (Modify the force vector based on the known displacement's influence).
        *   Set $K_{jj}$ to a very large number (e.g., $10^{10}$ times the sum of other terms in the row) to enforce the displacement.
        *   Set $F_j = K_{jj} \bar{d}_j$. (Typically $F_j = 0$ for zero displacement).
        *   Set the rest of the $j$-th row and $j$-th column to zero, except for $K_{jj}$.

    Let's illustrate with Method 3 for the two-bar example where node 1 is fixed ($d_1=0$).

    Original global equation:
    $$
    \begin{bmatrix}
    K_{11} & K_{12} & K_{13} \\
    K_{21} & K_{22} & K_{23} \\
    K_{31} & K_{32} & K_{33}
    \end{bmatrix}
    \begin{bmatrix}
    d_1 \\
    d_2 \\
    d_3
    \end{bmatrix}
    =
    \begin{bmatrix}
    F_1 \\
    F_2 \\
    F_3
    \end{bmatrix}
    $$

    Apply $d_1 = 0$ (Node 1 is fixed):
    1.  **Modify forces:**
        *   $F_2 = F_2 - K_{21} d_1 = F_2 - K_{21} \times 0 = F_2$
        *   $F_3 = F_3 - K_{31} d_1 = F_3 - K_{31} \times 0 = F_3$
        (No change in forces in this case because $d_1$ is already 0).

    2.  **Modify stiffness matrix for $d_1=0$:**
        *   Set $K_{11}$ to a large number (e.g., $P$).
        *   Set $F_1 = P \times d_1 = P \times 0 = 0$.
        *   Zero out the rest of the first row and first column (except $K_{11}$).

    The modified global equation becomes:
    $$
    \begin{bmatrix}
    P & 0 & 0 \\
    0 & K_{22} & K_{23} \\
    0 & K_{32} & K_{33}
    \end{bmatrix}
    \begin{bmatrix}
    d_1 \\
    d_2 \\
    d_3
    \end{bmatrix}
    =
    \begin{bmatrix}
    0 \\
    F_2 \\
    F_3
    \end{bmatrix}
    $$

    Now, we can solve for the unknown displacements $d_2$ and $d_3$ from the reduced $2 \times 2$ system:
    $$
    \begin{bmatrix}
    K_{22} & K_{23} \\
    K_{32} & K_{33}
    \end{bmatrix}
    \begin{bmatrix}
    d_2 \\
    d_3
    \end{bmatrix}
    =
    \begin{bmatrix}
    F_2 \\
    F_3
    \end{bmatrix}
    $$

---

### 5. Solving for Nodal Displacements $\{D\}$

Once the global stiffness matrix $[K]$ is assembled and boundary conditions are applied, the system of linear equations $[K']\{D'\} = \{F'\}$ (where primes indicate the modified system) can be solved for the unknown nodal displacements $\{D'\}$.

**Key Concept:** Solving this system of linear equations yields the displacement (and rotation, if applicable) at each unconstrained DOF.

**Solution Methods:**

*   **Matrix Inversion:** $\{D'\} = [K']^{-1}\{F'\}$
*   **Gaussian Elimination:** A systematic elimination process.
*   **Iterative Methods:** (e.g., Jacobi, Gauss-Seidel) - for very large systems.

**Important Point:** For practical structural analysis with FEM, numerical solvers are used to handle the potentially large and complex systems of equations.

---

### 6. Calculating Element Forces and Stresses

After obtaining the nodal displacements, the forces and stresses within each element can be calculated.

**Key Concept:** The element stiffness matrix and the calculated nodal displacements for that element are used to determine the internal forces (and moments) and stresses.

**Process:**

1.  **Determine Element Nodal Displacements:** Extract the relevant displacements from the global displacement vector $\{D\}$ corresponding to the nodes of a specific element.
2.  **Calculate Element Forces:** Use the element stiffness equation:
    $$
    \{f\}_{element} = [k]_{element} \{d\}_{element}
    $$
    Where:
    *   $\{f\}_{element}$ is the vector of forces/moments at the element's nodes.
    *   $[k]_{element}$ is the element stiffness matrix.
    *   $\{d\}_{element}$ is the vector of nodal displacements for that element.

**Example: Forces in the 1D Bar Element**

Using the element stiffness matrix from Section 2.1:

$$
\begin{bmatrix}
F_1 \\
F_2
\end{bmatrix}
=
\frac{AE}{L}
\begin{bmatrix}
1 & -1 \\
-1 & 1
\end{bmatrix}
\begin{bmatrix}
d_1 \\
d_2
\end{bmatrix}
$$

Where $d_1$ and $d_2$ are the displacements of the element's nodes (obtained from the global solution).

*   $F_1$ is the force at node 1 of the element.
*   $F_2$ is the force at node 2 of the element.

**Important Point:** The sign convention for forces must be consistent. If $F_2$ is calculated as positive, it means the force is acting in the positive direction on node 2. This is often an internal tensile force within the element.

---

### Practice Questions & Exercises

**Question 1:**
A single bar element of length $L=1000$ mm, Area $A=200$ mm$^2$, and Young's Modulus $E=200$ GPa is subjected to a tensile force of $10$ kN at its free end. One end is fixed. Determine:
a) The element stiffness matrix.
b) The global stiffness matrix (consider the fixed end as node 1 and the loaded end as node 2).
c) The nodal displacement.
d) The force in the bar.

**Answer 1:**
a) $E = 200 \times 10^3$ N/mm$^2$
   $[k]_{element} = \frac{AE}{L} = \frac{200 \text{ mm}^2 \times 200 \times 10^3 \text{ N/mm}^2}{1000 \text{ mm}} = 40 \times 10^3$ N/mm
   $[k]_{element} = \begin{bmatrix}
   40000 & -40000 \\
   -40000 & 40000
   \end{bmatrix}$ N/mm

b) Node 1 is fixed ($d_1=0$), Node 2 has displacement $d_2$. Global matrix size is $2 \times 2$.
   Global equation: $[K]\{D\} = \{F\}$
   $[K] = [k]_{element} = \begin{bmatrix}
   40000 & -40000 \\
   -40000 & 40000
   \end{bmatrix}$
   Apply boundary condition $d_1=0$ (using modification method):
   Modified $[K'] = \begin{bmatrix}
   P & 0 \\
   0 & 40000
   \end{bmatrix}$ (where $P$ is a large number)
   Modified $\{F'\} = \begin{bmatrix}
   0 \\
   10000
   \end{bmatrix}$ N

c) Solving the reduced $1 \times 1$ system (from the second row):
   $40000 \times d_2 = 10000$
   $d_2 = \frac{10000}{40000} = 0.25$ mm

   So, $\{D\} = \begin{bmatrix} 0 \\ 0.25 \end{bmatrix}$ mm

d) Using the element stiffness equation:
   $\{f\}_{element} = [k]_{element} \{d\}_{element}$
   $\begin{bmatrix}
   F_1 \\
   F_2
   \end{bmatrix} = \begin{bmatrix}
   40000 & -40000 \\
   -40000 & 40000
   \end{bmatrix} \begin{bmatrix}
   0 \\
   0.25
   \end{bmatrix}$
   $F_1 = 40000 \times 0 + (-40000) \times 0.25 = -10000$ N
   $F_2 = (-40000) \times 0 + 40000 \times 0.25 = 10000$ N
   The force in the bar is $10000$ N (tensile), indicated by $F_2$. $F_1$ is the reaction force at the fixed end.

**Question 2:**
Consider two bar elements, 1 and 2, connected in series. Element 1 connects nodes 1 and 2, and Element 2 connects nodes 2 and 3. Node 1 is fixed. A force of $F$ is applied at node 3. The properties of both elements are identical ($\frac{AE}{L} = K_0$). Assemble the global stiffness matrix and solve for the displacements $d_2$ and $d_3$.

**Answer 2:**
Element 1 stiffness: $[k]_1 = K_0 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$ (for nodes 1, 2)
Element 2 stiffness: $[k]_2 = K_0 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$ (for nodes 2, 3)

Global stiffness matrix $[K]$ (size $3 \times 3$):
$$[K] = \begin{bmatrix}
K_0 & -K_0 & 0 \\
-K_0 & K_0 + K_0 & -K_0 \\
0 & -K_0 & K_0
\end{bmatrix}
= K_0 \begin{bmatrix}
1 & -1 & 0 \\
-1 & 2 & -1 \\
0 & -1 & 1
\end{bmatrix}$$

Global equation: $[K]\{D\} = \{F\}$
$$K_0 \begin{bmatrix}
1 & -1 & 0 \\
-1 & 2 & -1 \\
0 & -1 & 1
\end{bmatrix} \begin{bmatrix}
d_1 \\
d_2 \\
d_3
\end{bmatrix} = \begin{bmatrix}
0 \\
0 \\
F
\end{bmatrix}$$

Apply boundary condition $d_1 = 0$:
Modified matrix and force vector (using elimination for the $1 \times 1$ system):
$$K_0 \begin{bmatrix}
2 & -1 \\
-1 & 1
\end{bmatrix} \begin{bmatrix}
d_2 \\
d_3
\end{bmatrix} = \begin{bmatrix}
F \\
F
\end{bmatrix}$$

Solving this $2 \times 2$ system:
1. $2K_0 d_2 - K_0 d_3 = F$
2. $-K_0 d_2 + K_0 d_3 = F$

Adding equation (1) and (2):
$K_0 d_2 = 2F \implies d_2 = \frac{2F}{K_0}$

Substitute $d_2$ into equation (2):
$-K_0 (\frac{2F}{K_0}) + K_0 d_3 = F$
$-2F + K_0 d_3 = F$
$K_0 d_3 = 3F \implies d_3 = \frac{3F}{K_0}$

Displacements: $d_2 = \frac{2F}{K_0}$, $d_3 = \frac{3F}{K_0}$.

---

### Important Points to Remember

*   **Systematic Assembly:** The core of DSM is the methodical assembly of the global stiffness matrix from element stiffness matrices.
*   **Degrees of Freedom:** Correctly identifying and accounting for all DOFs is crucial.
*   **Boundary Conditions:** Applying boundary conditions transforms the system into a solvable one. The method of application (elimination, penalty, modification) should be understood.
*   **Symmetry:** Stiffness matrices are always symmetric.
*   **Equilibrium and Compatibility:** The DSM inherently satisfies equilibrium at nodes and compatibility of displacements between elements.
*   **Stiffness is Positive Definite:** For a stable structure, the stiffness matrix is positive definite, ensuring a unique solution.

---
