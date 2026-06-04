---
title: "bar element assembly and solution procedure."
subject: "FINITE ELEMENT METHODS"
module: "Module 1: Introduction FEM"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464290"
status: "completed"
scrapedAt: "2026-05-20T18:12:53.773Z"
---
# FINITE ELEMENT METHODS - Module 1: Introduction to FEM

## Topic: Bar Element Assembly and Solution Procedure

---

### 1. Introduction to the Finite Element Method (FEM)

The Finite Element Method (FEM) is a powerful numerical technique used to solve complex engineering and mathematical physics problems that are described by partial differential equations (PDEs) or integral equations. It breaks down a complex system into smaller, simpler parts called "finite elements." By approximating the behavior of each element and then assembling them, we can approximate the behavior of the entire system.

**Key Concepts:**

*   **Discretization:** The process of dividing a continuous domain into a finite number of subdomains (elements).
*   **Elements:** The basic building blocks of the FEM. Common examples include bars, beams, trusses, plates, shells, and solids.
*   **Nodes:** Points that connect the elements. The solution is approximated at these nodes.
*   **Degrees of Freedom (DOFs):** The unknown quantities at each node (e.g., displacement, temperature, pressure).
*   **Shape Functions (or Interpolation Functions):** Functions that define the variation of the unknown quantity (e.g., displacement) within an element, based on the nodal values.
*   **Element Stiffness Matrix:** A matrix that relates nodal forces to nodal displacements for a single element.
*   **Global Stiffness Matrix:** The assembled stiffness matrix for the entire system, representing the relationships between all nodal forces and displacements.
*   **Load Vector:** A vector representing the external forces applied to the system.
*   **Boundary Conditions:** Constraints imposed on the system, such as fixed displacements or applied forces.

**Relevance to Course Outcomes:**

*   **CO1 (K2):** Understanding the governing equations and basic procedure of FEM is fundamental to this topic. We'll see how PDEs are transformed into algebraic equations.

**Textbook References:**

*   Reddy, Chapter 1: Introduction to FEM
*   Cook, Chapter 1: Introduction to FEM
*   Bhavikatti, Chapter 1: Introduction to FEM
*   Fish & Belytschko, Chapter 1: Introduction to FEM

---

### 2. The Bar Element

A bar element is a one-dimensional structural element that can be subjected to axial forces. It is characterized by its material properties (Young's Modulus, $E$) and its cross-sectional area ($A$).

**Key Concepts:**

*   **Axial Displacement:** The primary unknown quantity at the nodes of a bar element.
*   **Stress-Strain Relationship:** For a linear elastic material, $\sigma = E\epsilon$.
*   **Strain:** For a bar element, strain $\epsilon = \frac{du}{dx}$, where $u$ is the axial displacement.
*   **Force-Displacement Relationship:** For an element of length $L$, the axial force $F = AE\frac{du}{dx}$.

**Formulation of the Bar Element Stiffness Matrix (Element-Level):**

Let's consider a 1D bar element with two nodes, Node 1 and Node 2, at positions $x_1$ and $x_2$, respectively. The length of the element is $L = x_2 - x_1$. The axial displacements at Node 1 and Node 2 are $u_1$ and $u_2$, respectively.

1.  **Shape Functions:**
    We assume a linear variation of displacement within the element:
    $u(x) = N_1(x)u_1 + N_2(x)u_2$

    The shape functions for a 1D bar element are:
    *   $N_1(x) = \frac{x_2 - x}{L}$
    *   $N_2(x) = \frac{x - x_1}{L}$

    Alternatively, using a local coordinate system $\xi = \frac{x-x_1}{L}$, where $\xi$ ranges from 0 to 1:
    *   $N_1(\xi) = 1 - \xi$
    *   $N_2(\xi) = \xi$

    In matrix form: $u(x) = [N]\{u\}$, where $[N] = [N_1(x) \quad N_2(x)]$ and $\{u\} = \begin{bmatrix} u_1 \\ u_2 \end{bmatrix}$.

2.  **Strain-Displacement Relationship:**
    The strain within the element is:
    $\epsilon(x) = \frac{du}{dx} = \frac{d}{dx}(N_1(x)u_1 + N_2(x)u_2)$
    $\epsilon(x) = \left[\frac{dN_1}{dx} \quad \frac{dN_2}{dx}\right] \begin{bmatrix} u_1 \\ u_2 \end{bmatrix}$
    $\epsilon(x) = [B]\{u\}$

    Where $[B]$ is the strain-displacement matrix:
    *   $\frac{dN_1}{dx} = \frac{d}{dx}\left(\frac{x_2 - x}{L}\right) = -\frac{1}{L}$
    *   $\frac{dN_2}{dx} = \frac{d}{dx}\left(\frac{x - x_1}{L}\right) = \frac{1}{L}$
    *   So, $[B] = \left[-\frac{1}{L} \quad \frac{1}{L}\right]$

3.  **Stress-Strain Relationship:**
    Assuming linear elasticity: $\sigma = E\epsilon$.
    In matrix form for 1D: $\{\sigma\} = [D]\{\epsilon\}$, where $[D] = [E]$ (Young's Modulus).

4.  **Element Stiffness Matrix Calculation:**
    The element stiffness matrix $[k]_e$ is given by:
    $[k]_e = \int_{V_e} [B]^T [D] [B] dV$

    For a bar element, $dV = A \, dx$. The integration is over the element volume.
    $[k]_e = \int_{x_1}^{x_2} [B]^T [D] [B] A \, dx$

    Substituting $[B]$ and $[D]$:
    $[k]_e = \int_{x_1}^{x_2} \begin{bmatrix} -1/L \\ 1/L \end{bmatrix} [E] \begin{bmatrix} -1/L & 1/L \end{bmatrix} A \, dx$
    $[k]_e = AE \int_{x_1}^{x_2} \begin{bmatrix} 1/L^2 & -1/L^2 \\ -1/L^2 & 1/L^2 \end{bmatrix} \, dx$
    $[k]_e = \frac{AE}{L} \int_{x_1}^{x_2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \, dx$

    Integrating with respect to $x$ from $x_1$ to $x_2$ (which is $L$):
    $[k]_e = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \int_{x_1}^{x_2} \, dx$
    $[k]_e = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} [x]_{x_1}^{x_2}$
    $[k]_e = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} (x_2 - x_1)$
    $[k]_e = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} L$

    **Element Stiffness Matrix for a Bar Element:**
    $$ [k]_e = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} $$

**Relevance to Course Outcomes:**

*   **CO2 (K3):** Formulating shape functions for the bar element.
*   **CO3 (K4):** Evaluating the strain-displacement matrix $[B]$ and understanding how it relates nodal displacements to strains.
*   **CO4 (K5):** The calculation of $[k]_e$ implicitly uses the energy method (where stiffness is related to the strain energy stored in the element).

**Textbook References:**

*   Reddy, Chapter 3: One-Dimensional Finite Elements (Bar Elements)
*   Cook, Chapter 3: One-Dimensional Elements (Bar Elements)
*   Bhavikatti, Chapter 3: One-Dimensional Finite Elements
*   Fish & Belytschko, Chapter 3: One-Dimensional Finite Elements

---

### 3. Assembly of the Global Stiffness Matrix

The global stiffness matrix $[K]$ relates the global nodal forces $\{F\}$ to the global nodal displacements $\{U\}$ for the entire structure:
$$ [K]\{U\} = \{F\} $$

Assembly is the process of combining the individual element stiffness matrices into a single global stiffness matrix for the entire structure. This is done by summing the contributions of each element to the appropriate locations in the global matrix, based on the connectivity of the elements.

**Key Concepts:**

*   **Connectivity:** How elements are connected to each other at nodes.
*   **Element Nodal Ordering:** The order in which nodes are defined for each element.
*   **Global Node Numbering:** A consistent numbering scheme for all nodes in the entire structure.
*   **Direct Stiffness Method:** The common procedure for assembling the global stiffness matrix.

**Procedure for Assembly:**

1.  **Determine the total number of nodes and elements.**
2.  **Establish a global numbering scheme for all nodes.**
3.  **For each element:**
    *   Identify the global node numbers corresponding to its local nodes.
    *   Map the element stiffness matrix $[k]_e$ to the correct positions in the global stiffness matrix $[K]$.
    *   If element $e$ connects global nodes $i$ and $j$, its stiffness matrix $[k]_e$ contributes to the following entries in $[K]$:
        *   $[k]_e(1,1)$ contributes to $[K](i,i)$
        *   $[k]_e(1,2)$ contributes to $[K](i,j)$
        *   $[k]_e(2,1)$ contributes to $[K](j,i)$
        *   $[k]_e(2,2)$ contributes to $[K](j,j)$
    *   If a node is shared by multiple elements, the corresponding entries in the global stiffness matrix are summed.
4.  **Initialize the global stiffness matrix $[K]$ to all zeros.**
5.  **Iterate through each element and add its stiffness matrix contributions to the global matrix.**

**Example:** Consider a bar structure made of two bar elements.

*   **Element 1:** Nodes 1 and 2. Properties: $A_1, E_1, L_1$.
    $$ [k]_1 = \frac{A_1E_1}{L_1} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} $$
    This contributes to the global matrix entries related to nodes 1 and 2.

*   **Element 2:** Nodes 2 and 3. Properties: $A_2, E_2, L_2$.
    $$ [k]_2 = \frac{A_2E_2}{L_2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} $$
    This contributes to the global matrix entries related to nodes 2 and 3.

**Assembly Process:**

Let the global displacement vector be $\{U\} = \begin{bmatrix} u_1 \\ u_2 \\ u_3 \end{bmatrix}$ and the global force vector be $\{F\} = \begin{bmatrix} F_1 \\ F_2 \\ F_3 \end{bmatrix}$. The global stiffness matrix $[K]$ will be $3 \times 3$.

$$ [K] = \begin{bmatrix} K_{11} & K_{12} & K_{13} \\ K_{21} & K_{22} & K_{23} \\ K_{31} & K_{32} & K_{33} \end{bmatrix} $$

*   **Element 1 contributions (nodes 1 and 2):**
    *   $K_{11} = K_{11} + [k]_1(1,1) = 0 + \frac{A_1E_1}{L_1}(1)$
    *   $K_{12} = K_{12} + [k]_1(1,2) = 0 + \frac{A_1E_1}{L_1}(-1)$
    *   $K_{21} = K_{21} + [k]_1(2,1) = 0 + \frac{A_1E_1}{L_1}(-1)$
    *   $K_{22} = K_{22} + [k]_1(2,2) = 0 + \frac{A_1E_1}{L_1}(1)$

*   **Element 2 contributions (nodes 2 and 3):**
    *   $K_{22} = K_{22} + [k]_2(1,1) = \frac{A_1E_1}{L_1} + \frac{A_2E_2}{L_2}(1)$
    *   $K_{23} = K_{23} + [k]_2(1,2) = 0 + \frac{A_2E_2}{L_2}(-1)$
    *   $K_{32} = K_{32} + [k]_2(2,1) = 0 + \frac{A_2E_2}{L_2}(-1)$
    *   $K_{33} = K_{33} + [k]_2(2,2) = 0 + \frac{A_2E_2}{L_2}(1)$

The final global stiffness matrix for this two-element bar will be:
$$ [K] = \begin{bmatrix} \frac{A_1E_1}{L_1} & -\frac{A_1E_1}{L_1} & 0 \\ -\frac{A_1E_1}{L_1} & \frac{A_1E_1}{L_1} + \frac{A_2E_2}{L_2} & -\frac{A_2E_2}{L_2} \\ 0 & -\frac{A_2E_2}{L_2} & \frac{A_2E_2}{L_2} \end{bmatrix} $$

**Important Point to Remember:** The assembly process inherently ensures the satisfaction of equilibrium at the internal nodes.

**Textbook References:**

*   Reddy, Chapter 3: Assembly of Element Matrices
*   Cook, Chapter 4: Assembly of Equations
*   Bhavikatti, Chapter 3: Assembly of Global Stiffness Matrix
*   Fish & Belytschko, Chapter 3: Assembly of Global Matrices

---

### 4. Applying Boundary Conditions

After assembling the global stiffness matrix and the global load vector, we need to incorporate the boundary conditions to solve the system of equations. Boundary conditions typically involve known nodal displacements or known nodal forces.

**Types of Boundary Conditions:**

1.  **Essential (Dirichlet) Boundary Conditions:** Specify the value of the primary variable (e.g., displacement).
    *   Example: $u_1 = 0$ (fixed end).
2.  **Natural (Neumann) Boundary Conditions:** Specify the value of the derivative of the primary variable or fluxes (e.g., force).
    *   Example: $F_3 = 100$ N (applied force at node 3).

**Methods for Applying Boundary Conditions (for Essential BCs like fixed displacement):**

*   **Penalty Method:** Add a large number (penalty parameter, $P$) to the diagonal entry of the global stiffness matrix corresponding to the constrained DOF and set the corresponding entry in the force vector to $P$ times the constrained displacement.
    *   If $u_i = \bar{u}_i$ (a known value), then $K_{ii} \leftarrow K_{ii} + P$ and $F_i \leftarrow F_i + P \bar{u}_i$.
    *   If $\bar{u}_i = 0$, then $K_{ii} \leftarrow K_{ii} + P$ and $F_i \leftarrow F_i$.
*   **Stiffness Matrix Modification (Direct Method):**
    1.  **For specified non-zero displacement $\bar{u}_i$ at node $i$:**
        *   For all $j \neq i$, modify the $j$-th row and $j$-th column.
        *   $F_j \leftarrow F_j - K_{ij}\bar{u}_i$
        *   $K_{jk} \leftarrow K_{jk}$ (no change for $k \neq i$)
        *   Set the $i$-th row and $i$-th column of $[K]$ to zero, except for $K_{ii} = 1$.
        *   Set $F_i = \bar{u}_i$.
    2.  **For specified zero displacement $u_i = 0$ at node $i$:**
        *   For all $j \neq i$, modify the $j$-th row and $j$-th column.
        *   $F_j \leftarrow F_j - K_{ij}(0)$ which means $F_j \leftarrow F_j$ (no change in force vector for other DOFs).
        *   Set the $i$-th row and $i$-th column of $[K]$ to zero, except for $K_{ii} = 1$.
        *   Set $F_i = 0$.

**Applying Natural Boundary Conditions:** Natural boundary conditions (applied forces) are directly incorporated into the global load vector $\{F\}$.

**Relevance to Course Outcomes:**

*   **CO1 (K2):** Understanding how boundary conditions are crucial for obtaining a unique and correct solution.

**Textbook References:**

*   Reddy, Chapter 3: Boundary Conditions
*   Cook, Chapter 4: Boundary Conditions
*   Bhavikatti, Chapter 3: Boundary Conditions
*   Fish & Belytschko, Chapter 3: Boundary Conditions

---

### 5. Solution Procedure

Once the global stiffness matrix $[K]$, the global load vector $\{F\}$, and boundary conditions are properly applied, we have a system of linear algebraic equations:
$$ [K]\{U\} = \{F\} $$
where $\{U\}$ is the vector of unknown nodal displacements.

**Solving the System of Equations:**

The goal is to solve for the unknown nodal displacements $\{U\}$. This is typically done using standard numerical linear algebra techniques.

1.  **Direct Solvers:**
    *   **Gaussian Elimination:** A systematic method to transform the system into an upper triangular form and then solve by back-substitution.
    *   **LU Decomposition:** Factoring the stiffness matrix $K$ into lower ($L$) and upper ($U$) triangular matrices ($K = LU$), then solving $Ly = F$ for $y$ and $Ux = y$ for $x$ (where $x$ represents the displacements).
    *   **Cholesky Decomposition:** A special case of LU decomposition for symmetric positive-definite matrices (which the stiffness matrix usually is).

2.  **Iterative Solvers:** (More common for large systems)
    *   **Jacobi Method**
    *   **Gauss-Seidel Method**
    *   **Conjugate Gradient Method**

The choice of solver depends on the size and properties of the stiffness matrix. For typical small examples in introductory courses, direct methods are often sufficient.

**Calculating Element Forces and Stresses:**

After solving for the global nodal displacements $\{U\}$, we can calculate the stresses and forces in each element.

1.  **For each element $e$:**
    *   Extract the nodal displacements corresponding to that element from the global displacement vector $\{U\}$. Let these be $\{u\}_e$.
    *   Calculate the element strain using the strain-displacement matrix: $\{\epsilon\}_e = [B]_e \{u\}_e$.
    *   Calculate the element stress using the constitutive relation: $\{\sigma\}_e = [D]_e \{\epsilon\}_e$.
    *   Calculate the element forces. For a bar element, the forces at the nodes are given by $F_{node} = [k]_e \{u\}_e$. The axial force within the element is constant and equal to the value calculated from stress and area: $F_{element} = \sigma_e A$.

**Relevance to Course Outcomes:**

*   **CO1 (K2):** This is the culmination of the FEM procedure, leading to the solution of the governing equations.

**Textbook References:**

*   Reddy, Chapter 3: Solution of System of Equations
*   Cook, Chapter 4: Solution of Simultaneous Equations
*   Bhavikatti, Chapter 3: Solution of System of Equations
*   Fish & Belytschko, Chapter 3: Solution Techniques

---

### 6. Example Problem: A Two-Bar Truss

Consider a simple truss consisting of two bar elements, as described in the assembly example.

**Problem Statement:**
A two-bar truss is subjected to an axial load.
*   Element 1: Length $L_1 = 1$ m, Area $A_1 = 1 \text{ cm}^2 = 0.0001 \text{ m}^2$, Young's Modulus $E_1 = 200 \text{ GPa} = 200 \times 10^9 \text{ N/m}^2$.
*   Element 2: Length $L_2 = 1$ m, Area $A_2 = 1.5 \text{ cm}^2 = 0.00015 \text{ m}^2$, Young's Modulus $E_2 = 200 \text{ GPa} = 200 \times 10^9 \text{ N/m}^2$.
The truss is fixed at Node 1 ($u_1 = 0$) and a force $F_3 = 1000$ N is applied at Node 3 in the axial direction. Node 2 is an internal node connecting Element 1 and Element 2.

**Solution Steps:**

1.  **Calculate Element Stiffness Matrices:**

    *   For Element 1:
        $\frac{A_1E_1}{L_1} = \frac{(0.0001 \text{ m}^2)(200 \times 10^9 \text{ N/m}^2)}{1 \text{ m}} = 20000 \text{ N/m}$
        $$ [k]_1 = 20000 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \text{ N/m} $$

    *   For Element 2:
        $\frac{A_2E_2}{L_2} = \frac{(0.00015 \text{ m}^2)(200 \times 10^9 \text{ N/m}^2)}{1 \text{ m}} = 30000 \text{ N/m}$
        $$ [k]_2 = 30000 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \text{ N/m} $$

2.  **Assemble the Global Stiffness Matrix and Load Vector:**

    Global DOFs are $u_1, u_2, u_3$.
    Global stiffness matrix $[K]$ is $3 \times 3$. Global load vector $\{F\}$ is $3 \times 1$.

    Initialize:
    $$ [K] = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}, \quad \{F\} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix} $$

    *   Element 1 (Nodes 1, 2):
        $$ [K] \leftarrow [K] + \begin{bmatrix} 20000 & -20000 & 0 \\ -20000 & 20000 & 0 \\ 0 & 0 & 0 \end{bmatrix} $$
        $$ \{F\} \leftarrow \{F\} + \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix} $$

    *   Element 2 (Nodes 2, 3):
        $$ [K] \leftarrow [K] + \begin{bmatrix} 0 & 0 & 0 \\ 0 & 30000 & -30000 \\ 0 & -30000 & 30000 \end{bmatrix} $$
        $$ \{F\} \leftarrow \{F\} + \begin{bmatrix} 0 \\ 0 \\ 1000 \end{bmatrix} $$

    Resulting system before BCs:
    $$ [K] = \begin{bmatrix} 20000 & -20000 & 0 \\ -20000 & 50000 & -30000 \\ 0 & -30000 & 30000 \end{bmatrix}, \quad \{F\} = \begin{bmatrix} 0 \\ 0 \\ 1000 \end{bmatrix} $$

3.  **Apply Boundary Conditions:**
    We have $u_1 = 0$. Let's use the stiffness matrix modification method.

    *   Modify the first row and first column:
        *   Set row 1 of $[K]$ to zero except $K_{11} = 1$.
        *   Set column 1 of $[K]$ to zero except $K_{11} = 1$.
        *   Set $F_1 = 0$.

    The modified system becomes:
    $$ [K] = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 50000 & -30000 \\ 0 & -30000 & 30000 \end{bmatrix}, \quad \{F\} = \begin{bmatrix} 0 \\ 0 \\ 1000 \end{bmatrix} $$
    *Note: For a non-zero displacement constraint, we'd adjust $F_j$ for $j \neq i$ and set $F_i$ to the constrained value.*

4.  **Solve for Nodal Displacements:**
    We need to solve the reduced system for $u_2$ and $u_3$:
    $$ \begin{bmatrix} 50000 & -30000 \\ -30000 & 30000 \end{bmatrix} \begin{bmatrix} u_2 \\ u_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 1000 \end{bmatrix} $$

    From the first equation: $50000 u_2 - 30000 u_3 = 0 \implies 5 u_2 = 3 u_3 \implies u_2 = \frac{3}{5} u_3$.
    Substitute into the second equation:
    $-30000 \left(\frac{3}{5} u_3\right) + 30000 u_3 = 1000$
    $-18000 u_3 + 30000 u_3 = 1000$
    $12000 u_3 = 1000$
    $u_3 = \frac{1000}{12000} = \frac{1}{12} \text{ m} \approx 0.0833 \text{ m}$

    Now find $u_2$:
    $u_2 = \frac{3}{5} u_3 = \frac{3}{5} \left(\frac{1}{12}\right) = \frac{1}{20} \text{ m} = 0.05 \text{ m}$

    So, the global displacement vector is $\{U\} = \begin{bmatrix} 0 \\ 0.05 \\ 0.0833 \end{bmatrix}$ m.

5.  **Calculate Element Forces and Stresses:**

    *   **Element 1 (Nodes 1, 2):**
        Nodal displacements for Element 1: $\{u\}_1 = \begin{bmatrix} u_1 \\ u_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0.05 \end{bmatrix}$ m.
        $[k]_1 = 20000 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$ N/m.
        Element forces at nodes: $\{F\}_1 = [k]_1 \{u\}_1 = 20000 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 0.05 \end{bmatrix} = 20000 \begin{bmatrix} -0.05 \\ 0.05 \end{bmatrix} = \begin{bmatrix} -1000 \\ 1000 \end{bmatrix}$ N.
        The force at Node 1 is -1000 N (compression), and at Node 2 is 1000 N (tension).

        Strain in Element 1:
        $[B]_1 = \frac{1}{L_1} \begin{bmatrix} -1 & 1 \end{bmatrix} = \begin{bmatrix} -1 & 1 \end{bmatrix}$ m$^{-1}$.
        $\epsilon_1 = [B]_1 \{u\}_1 = \begin{bmatrix} -1 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 0.05 \end{bmatrix} = 0.05$ m/m.
        Stress in Element 1:
        $\sigma_1 = E_1 \epsilon_1 = (200 \times 10^9 \text{ N/m}^2)(0.05) = 10 \times 10^9 \text{ N/m}^2 = 10 \text{ GPa}$.
        Axial Force in Element 1: $F_{element1} = \sigma_1 A_1 = (10 \times 10^9 \text{ N/m}^2)(0.0001 \text{ m}^2) = 1000$ N.

    *   **Element 2 (Nodes 2, 3):**
        Nodal displacements for Element 2: $\{u\}_2 = \begin{bmatrix} u_2 \\ u_3 \end{bmatrix} = \begin{bmatrix} 0.05 \\ 0.0833 \end{bmatrix}$ m.
        $[k]_2 = 30000 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$ N/m.
        Element forces at nodes: $\{F\}_2 = [k]_2 \{u\}_2 = 30000 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \begin{bmatrix} 0.05 \\ 0.0833 \end{bmatrix} = 30000 \begin{bmatrix} 0.05 - 0.0833 \\ -0.05 + 0.0833 \end{bmatrix} = 30000 \begin{bmatrix} -0.0333 \\ 0.0333 \end{bmatrix} = \begin{bmatrix} -1000 \\ 1000 \end{bmatrix}$ N.
        The force at Node 2 is -1000 N (compression), and at Node 3 is 1000 N (tension).

        Strain in Element 2:
        $[B]_2 = \frac{1}{L_2} \begin{bmatrix} -1 & 1 \end{bmatrix} = \begin{bmatrix} -1 & 1 \end{bmatrix}$ m$^{-1}$.
        $\epsilon_2 = [B]_2 \{u\}_2 = \begin{bmatrix} -1 & 1 \end{bmatrix} \begin{bmatrix} 0.05 \\ 0.0833 \end{bmatrix} = -0.05 + 0.0833 = 0.0333$ m/m.
        Stress in Element 2:
        $\sigma_2 = E_2 \epsilon_2 = (200 \times 10^9 \text{ N/m}^2)(0.0333) = 6.66 \times 10^9 \text{ N/m}^2 = 6.66 \text{ GPa}$.
        Axial Force in Element 2: $F_{element2} = \sigma_2 A_2 = (6.66 \times 10^9 \text{ N/m}^2)(0.00015 \text{ m}^2) \approx 1000$ N.

    **Check Equilibrium at Node 2:**
    From Element 1, force at Node 2 is 1000 N (tension).
    From Element 2, force at Node 2 is -1000 N (compression).
    Sum of forces at Node 2 = 1000 N + (-1000 N) = 0 N. This confirms equilibrium at the internal node.

**Relevance to Course Outcomes:**

*   All COs are demonstrated in this example: governing equations, shape functions, strain-displacement, assembly, BC application, solution, and stress calculation.

---

### 7. Practice Questions

1.  **Element Stiffness Matrix:** Derive the stiffness matrix for a bar element of length $L$ with Young's modulus $E$ and cross-sectional area $A$.
2.  **Assembly:** Consider a three-bar truss where Element 1 connects nodes 1 and 2, Element 2 connects nodes 2 and 3, and Element 3 connects nodes 3 and 4. Write down the procedure for assembling the global stiffness matrix for this system.
3.  **Boundary Conditions:** A bar is fixed at one end ($u_1 = 0$) and subjected to a force $F_2$ at the other end (Node 2). Show how to modify the global stiffness matrix and load vector to incorporate the fixed boundary condition.
4.  **Problem Solving:** A steel bar of length 2 m, cross-sectional area 200 mm$^2$, and Young's modulus $E = 200$ GPa is supported at both ends, with $u_1 = 0$ and $u_3 = 0$. A concentrated load of 10 kN is applied at the center (Node 2). Determine the displacements at Node 2 and the stress in each half of the bar. (Assume the bar is discretized into two elements).

---

### 8. Answers to Practice Questions

1.  **Element Stiffness Matrix:**
    The element stiffness matrix for a bar element is derived using the principle of virtual work or by direct integration of $[B]^T [D] [B]$.
    The shape functions are $N_1 = (L-x)/L$ and $N_2 = x/L$.
    The strain-displacement matrix is $[B] = [-1/L \quad 1/L]$.
    The material constitutive matrix is $[D] = [E]$.
    The element stiffness matrix is:
    $$ [k]_e = \int_0^L [B]^T [D] [B] A \, dx = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} $$

2.  **Assembly:**
    To assemble the global stiffness matrix $[K]$ for a three-bar truss (1-2, 2-3, 3-4):
    *   **Initialization:** Create a global stiffness matrix $[K]$ of size $4 \times 4$ (for 4 nodes) and a global load vector $\{F\}$ of size $4 \times 1$, both initialized to zero.
    *   **Element 1 (Nodes 1, 2):** Calculate $[k]_1$ and add its entries to $[K]$ at positions $(1,1), (1,2), (2,1), (2,2)$.
    *   **Element 2 (Nodes 2, 3):** Calculate $[k]_2$ and add its entries to $[K]$ at positions $(2,2), (2,3), (3,2), (3,3)$. Note that the contribution to $[K](2,2)$ from Element 2 is added to the existing value from Element 1.
    *   **Element 3 (Nodes 3, 4):** Calculate $[k]_3$ and add its entries to $[K]$ at positions $(3,3), (3,4), (4,3), (4,4)$. Again, the contribution to $[K](3,3)$ from Element 3 is added to the existing value from Element 2.
    *   **Load Vector:** Add any applied forces to the corresponding entries in the global load vector $\{F\}$. For example, if a force $F_{app}$ is applied at node 3, then $F_3 \leftarrow F_3 + F_{app}$.

3.  **Boundary Conditions (Fixed End $u_1 = 0$):**
    Assume the global system is $[K]\{U\} = \{F\}$. To apply $u_1 = 0$:
    *   Modify the first row and first column of $[K]$ and $\{F\}$.
    *   Set the first row of $[K]$ to all zeros, except $K_{11} = 1$.
    *   Set the first column of $[K]$ to all zeros, except $K_{11} = 1$.
    *   Set the first entry of the load vector to zero: $F_1 = 0$.
    The modified system will correctly reflect the constraint $u_1 = 0$.
    *If the constraint was $u_1 = \bar{u}_1 \neq 0$, then $F_j \leftarrow F_j - K_{1j}\bar{u}_1$ for $j \neq 1$, and $F_1 = \bar{u}_1$. The diagonal $K_{11}$ would also be modified if using the penalty method, or set to 1 in the direct modification.*

4.  **Problem Solving:**
    *   $L = 2$ m, $A = 200 \text{ mm}^2 = 200 \times 10^{-6} \text{ m}^2$, $E = 200 \text{ GPa} = 200 \times 10^9 \text{ N/m}^2$.
    *   Load $P = 10 \text{ kN} = 10000$ N at Node 2.
    *   Fixed supports at Node 1 ($u_1=0$) and Node 3 ($u_3=0$).
    *   Two elements: Element 1 (Nodes 1, 2) and Element 2 (Nodes 2, 3). Each has length $L_e = 1$ m.
    *   $\frac{AE}{L_e} = \frac{(200 \times 10^{-6} \text{ m}^2)(200 \times 10^9 \text{ N/m}^2)}{1 \text{ m}} = 40000 \text{ N/m}$.
    *   Element stiffness matrices:
        $$ [k]_1 = [k]_2 = 40000 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} $$
    *   Global system before BCs:
        $$ [K] = \begin{bmatrix} 40000 & -40000 & 0 \\ -40000 & 80000 & -40000 \\ 0 & -40000 & 40000 \end{bmatrix}, \quad \{F\} = \begin{bmatrix} 0 \\ 10000 \\ 0 \end{bmatrix} $$
    *   Apply BCs $u_1 = 0$ and $u_3 = 0$. Using stiffness matrix modification:
        *   For $u_1 = 0$: Set row 1 and column 1 to zero except $K_{11}=1$, $F_1=0$.
        *   For $u_3 = 0$: Set row 3 and column 3 to zero except $K_{33}=1$, $F_3=0$.
        This leads to the modified system:
        $$ [K] = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 80000 & 0 \\ 0 & 0 & 1 \end{bmatrix}, \quad \{F\} = \begin{bmatrix} 0 \\ 10000 \\ 0 \end{bmatrix} $$
    *   Solve for displacements:
        From the matrix, $1 \cdot u_1 = 0 \implies u_1 = 0$.
        $80000 \cdot u_2 = 10000 \implies u_2 = \frac{10000}{80000} = \frac{1}{8} \text{ m} = 0.125 \text{ m}$.
        $1 \cdot u_3 = 0 \implies u_3 = 0$.
        Displacement at Node 2 is $u_2 = 0.125$ m.
    *   Calculate stress:
        *   Element 1 (Nodes 1, 2): $\{u\}_1 = \begin{bmatrix} 0 \\ 0.125 \end{bmatrix}$ m.
            $[B]_1 = \begin{bmatrix} -1 & 1 \end{bmatrix}$ m$^{-1}$.
            $\epsilon_1 = [B]_1 \{u\}_1 = \begin{bmatrix} -1 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 0.125 \end{bmatrix} = 0.125$ m/m.
            $\sigma_1 = E \epsilon_1 = (200 \times 10^9 \text{ N/m}^2)(0.125) = 25 \times 10^9 \text{ N/m}^2 = 25 \text{ GPa}$.
        *   Element 2 (Nodes 2, 3): $\{u\}_2 = \begin{bmatrix} 0.125 \\ 0 \end{bmatrix}$ m.
            $[B]_2 = \begin{bmatrix} -1 & 1 \end{bmatrix}$ m$^{-1}$.
            $\epsilon_2 = [B]_2 \{u\}_2 = \begin{bmatrix} -1 & 1 \end{bmatrix} \begin{bmatrix} 0.125 \\ 0 \end{bmatrix} = -0.125$ m/m.
            $\sigma_2 = E \epsilon_2 = (200 \times 10^9 \text{ N/m}^2)(-0.125) = -25 \times 10^9 \text{ N/m}^2 = -25 \text{ GPa}$.
        Stress in the left half is 25 GPa (tension), and in the right half is -25 GPa (compression).

---

### 9. Important Points to Remember

*   **Continuity:** The FEM approximates the solution. For bar elements, linear shape functions provide continuity of displacement between elements, which is sufficient.
*   **Equilibrium:** Assembly ensures equilibrium at internal nodes. The global system represents equilibrium for the entire structure.
*   **Stiffness:** The stiffness matrix represents the resistance of the structure to deformation. Higher stiffness means more force is required for a given displacement.
*   **Boundary Conditions are Crucial:** Incorrectly applied boundary conditions will lead to incorrect results. Essential (displacement) BCs are typically applied by modifying the system matrix, while natural (force) BCs are incorporated into the load vector.
*   **Local vs. Global:** Remember to distinguish between local element coordinates/matrices and global system coordinates/matrices. Assembly is the bridge between them.
*   **Symmetry:** The global stiffness matrix $[K]$ for most structural problems is symmetric.
*   **Positive Definiteness:** For stable structures, $[K]$ is usually positive-definite, meaning all eigenvalues are positive. This ensures a unique solution and is important for iterative solvers.

---
This concludes Module 1's introduction to bar element assembly and solution procedures. This foundational knowledge is critical for understanding more complex FEM applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
