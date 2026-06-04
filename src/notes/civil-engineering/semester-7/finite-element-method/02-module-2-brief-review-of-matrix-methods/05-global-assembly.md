---
title: "global assembly"
subject: "FINITE ELEMENT METHOD"
module: "Module 2: Brief review of matrix methods"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba8116d1"
status: "completed"
scrapedAt: "2026-05-20T18:58:54.786Z"
---
# Finite Element Method: Module 2 - Brief Review of Matrix Methods

## Topic: Global Assembly

This module revisits fundamental matrix operations crucial for understanding the Finite Element Method (FEM). Global assembly is the process of systematically combining the element-level stiffness matrices and force vectors into a single global system of equations that represents the entire physical domain.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the concept of global assembly in FEM.
*   Identify the process of mapping local element degrees of freedom (DOFs) to global DOFs.
*   Explain how element stiffness matrices and force vectors are added to form the global matrices.
*   Apply boundary conditions to the global system of equations.
*   Solve the resulting global system of linear equations.

---

### Key Concepts and Definitions:

*   **Degrees of Freedom (DOFs):** The unknown variables at each node of the finite element mesh. For example, in a 1D bar element, a DOF could be the displacement at a node. In a 2D problem, DOFs might include both x and y displacements at each node.
*   **Element Stiffness Matrix ($[k^{(e)}]$):** A matrix that relates the nodal forces to the nodal displacements for a single element. It's derived from the constitutive laws and the element's geometry.
*   **Element Force Vector ($\{f^{(e)}\}$):** A vector representing the forces (or prescribed loads) acting on the nodes of a single element.
*   **Global Stiffness Matrix ($[K]$):** The assembled stiffness matrix for the entire domain, encompassing all elements and their contributions. It's a large, sparse, and symmetric matrix.
*   **Global Force Vector ($\{F\}$):** The assembled force vector for the entire domain, representing all applied loads and boundary conditions.
*   **Global Displacement Vector ($\{U\}$):** The vector of all unknown nodal displacements for the entire domain.
*   **Mapping:** The process of assigning a unique global DOF index to each local DOF of an element. This ensures that contributions from different elements are correctly added to the global matrices.
*   **Sparsity:** The property of a matrix where most of its entries are zero. Global stiffness matrices are typically sparse because each element only interacts with its neighboring elements.
*   **Symmetry:** The property of a matrix where $[K] = [K]^T$. Global stiffness matrices derived from conservative physical systems are usually symmetric.
*   **Boundary Conditions (BCs):** Constraints imposed on the DOFs at specific nodes (e.g., fixed displacement, prescribed force). These are crucial for solving the system uniquely.

---

### The Global Assembly Process:

The core idea of global assembly is to build the system of equations:

$[K]\{U\} = \{F\}$

where:
*   $[K]$ is the global stiffness matrix.
*   $\{U\}$ is the global displacement vector.
*   $\{F\}$ is the global force vector.

This is achieved by systematically combining the element matrices.

#### 1. Numbering of Nodes and DOFs:

*   **Node Numbering:** Each node in the discretized domain is assigned a unique identifier.
*   **DOF Numbering:** Each DOF at each node is also assigned a unique global index. For example, if we have a problem with displacements and rotations at nodes, the displacement in the x-direction at node 5 might be DOF number 12, and the rotation at node 5 might be DOF number 13.

#### 2. Mapping Local DOFs to Global DOFs:

This is a critical step. For each element, its local DOFs are mapped to their corresponding global DOF numbers. This mapping determines where the values from the element stiffness matrix $[k^{(e)}]$ and element force vector $\{f^{(e)}\}$ are placed in the global matrices $[K]$ and $\{F\}$.

**Example:** Consider a 1D bar discretized into two elements.

*   **Mesh:** 3 nodes (Node 1, Node 2, Node 3).
*   **Elements:** Element 1 (Nodes 1-2), Element 2 (Nodes 2-3).
*   **DOFs:** Displacement at each node. Let's say we have 3 DOFs in total: U1 (displacement at Node 1), U2 (displacement at Node 2), U3 (displacement at Node 3).

**Element 1:**
*   Local DOFs: $u_1^{(1)}$ (at Node 1), $u_2^{(1)}$ (at Node 2).
*   Mapping: $u_1^{(1)}$ maps to global DOF 1, $u_2^{(1)}$ maps to global DOF 2.
*   Element stiffness matrix: $[k^{(1)}]$ (2x2)
*   Element force vector: $\{f^{(1)}\}$ (2x1)

**Element 2:**
*   Local DOFs: $u_1^{(2)}$ (at Node 2), $u_2^{(2)}$ (at Node 3).
*   Mapping: $u_1^{(2)}$ maps to global DOF 2, $u_2^{(2)}$ maps to global DOF 3.
*   Element stiffness matrix: $[k^{(2)}]$ (2x2)
*   Element force vector: $\{f^{(2)}\}$ (2x1)

#### 3. Assembling the Global Matrices:

The element stiffness matrices and force vectors are added (or "assembled") into the global matrices based on the DOF mapping.

**Contribution of Element 1 to Global Matrices:**
*   $[k^{(1)}]_{11}$ contributes to $[K]_{11}$
*   $[k^{(1)}]_{12}$ contributes to $[K]_{12}$
*   $[k^{(1)}]_{21}$ contributes to $[K]_{21}$
*   $[k^{(1)}]_{22}$ contributes to $[K]_{22}$
*   $\{f^{(1)}\}_1$ contributes to $\{F\}_1$
*   $\{f^{(1)}\}_2$ contributes to $\{F\}_2$

**Contribution of Element 2 to Global Matrices:**
*   $[k^{(2)}]_{11}$ contributes to $[K]_{22}$ (because local DOF 1 of element 2 maps to global DOF 2)
*   $[k^{(2)}]_{12}$ contributes to $[K]_{23}$ (local DOF 1 to global DOF 2, local DOF 2 to global DOF 3)
*   $[k^{(2)}]_{21}$ contributes to $[K]_{32}$
*   $[k^{(2)}]_{22}$ contributes to $[K]_{33}$
*   $\{f^{(2)}\}_1$ contributes to $\{F\}_2$
*   $\{f^{(2)}\}_2$ contributes to $\{F\}_3$

**General Assembly Rule:**
For an element stiffness matrix $[k^{(e)}]$ and force vector $\{f^{(e)}\}$, where the local DOF $i$ of the element maps to the global DOF $p$, and the local DOF $j$ maps to the global DOF $q$:

*   $[K]_{pq} = [K]_{pq} + [k^{(e)}]_{ij}$
*   $\{F\}_q = \{F\}_q + \{f^{(e)}\}_i$

**Important:** If multiple elements share a node (and thus contribute to the same global DOF), their contributions are directly summed. This is evident in the example where both elements contribute to global DOF 2.

#### 4. Applying Boundary Conditions:

Before solving the global system, boundary conditions must be incorporated. This is typically done by modifying the global matrices.

*   **Prescribed Displacements (Dirichlet BCs):** If a displacement $U_k$ is prescribed at global DOF $k$, we can handle this in several ways:
    *   **Method 1: Elimination/Substitution:** Remove row $k$ and column $k$ from $[K]$ and $\{F\}$, then adjust the force vector using the known displacement. This is conceptually simple but can be computationally intensive if done naively for many BCs.
    *   **Method 2: Penalty Method:** Add a very large number (penalty parameter, $P$) to the diagonal term $[K]_{kk}$ and set $\{F\}_k = P \times U_k$. This effectively forces the displacement to the prescribed value by making it very costly for the system to deviate.
    *   **Method 3: Matrix Modification (Most Common):**
        *   For each known displacement $U_k$ at DOF $k$:
            *   For all $j \neq k$: $[K]_{kj} = 0$, $[K]_{jk} = 0$.
            *   Set $[K]_{kk}$ to a very large value (e.g., $10^{10}$ times the largest diagonal entry of $[K]$).
            *   Set $\{F\}_k = [K]_{kk} \times U_k$.

*   **Prescribed Forces (Neumann BCs):** If a force $F_k$ is prescribed at global DOF $k$, this is usually directly incorporated into the global force vector $\{F\}_k$. If a force is distributed over an element (e.g., pressure on a surface), it needs to be converted into equivalent nodal forces using shape functions.

#### 5. Solving the Global System:

Once the global system $[K]\{U\} = \{F\}$ is assembled and boundary conditions are applied, it is solved for the unknown displacements $\{U\}$. Common methods include:

*   **Direct Solvers:** Gaussian elimination, LU decomposition, Cholesky decomposition (for symmetric positive-definite matrices). These are suitable for smaller to medium-sized problems.
*   **Iterative Solvers:** Conjugate gradient method, Jacobi method, Gauss-Seidel method. These are more efficient for large, sparse matrices, especially when the matrix is ill-conditioned or when only an approximate solution is needed.

---

### Example: Global Assembly in 1D

Consider a bar of length $L$ divided into two elements.
*   Node 1 at $x=0$.
*   Node 2 at $x=L/2$.
*   Node 3 at $x=L$.

Let the stiffness of element 1 be $k_1$ and element 2 be $k_2$.
The element stiffness matrices for a 1D bar element with DOFs $u_i$ and $u_j$ are:

$[k^{(e)}] = \frac{A E}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} = K_e \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$

where $K_e = AE/L$ is the element stiffness.

**Element 1 (Nodes 1, 2):**
*   Local DOFs: $u_1, u_2$.
*   Global DOFs: 1, 2.
*   $[k^{(1)}] = K_1 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$
*   $\{f^{(1)}\} = \{f_1^{(1)}, f_2^{(1)}\}^T$

**Element 2 (Nodes 2, 3):**
*   Local DOFs: $u_1', u_2'$.
*   Global DOFs: 2, 3.
*   $[k^{(2)}] = K_2 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$
*   $\{f^{(2)}\} = \{f_2^{(2)}, f_3^{(2)}\}^T$

**Assembly:**

Global DOFs are $U_1, U_2, U_3$.
Initial global matrices (size 3x3 for $[K]$ and 3x1 for $\{F\}$):

$[K] = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}$, $\{F\} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$

**Adding Element 1:**
*   $[k^{(1)}]_{11}$ (DOF 1 to DOF 1) $\rightarrow [K]_{11}$
*   $[k^{(1)}]_{12}$ (DOF 1 to DOF 2) $\rightarrow [K]_{12}$
*   $[k^{(1)}]_{21}$ (DOF 2 to DOF 1) $\rightarrow [K]_{21}$
*   $[k^{(1)}]_{22}$ (DOF 2 to DOF 2) $\rightarrow [K]_{22}$
*   $\{f^{(1)}\}_1$ (DOF 1) $\rightarrow \{F\}_1$
*   $\{f^{(1)}\}_2$ (DOF 2) $\rightarrow \{F\}_2$

$[K] = \begin{bmatrix} K_1 & -K_1 & 0 \\ -K_1 & K_1 & 0 \\ 0 & 0 & 0 \end{bmatrix}$, $\{F\} = \begin{bmatrix} f_1^{(1)} \\ f_2^{(1)} \\ 0 \end{bmatrix}$

**Adding Element 2:**
*   $[k^{(2)}]_{11}$ (DOF 1' to DOF 2) $\rightarrow [K]_{22}$
*   $[k^{(2)}]_{12}$ (DOF 1' to DOF 3) $\rightarrow [K]_{23}$
*   $[k^{(2)}]_{21}$ (DOF 2' to DOF 2) $\rightarrow [K]_{32}$
*   $[k^{(2)}]_{22}$ (DOF 2' to DOF 3) $\rightarrow [K]_{33}$
*   $\{f^{(2)}\}_1$ (DOF 1') $\rightarrow \{F\}_2$
*   $\{f^{(2)}\}_2$ (DOF 2') $\rightarrow \{F\}_3$

$[K] = \begin{bmatrix} K_1 & -K_1 & 0 \\ -K_1 & K_1 + K_2 & -K_2 \\ 0 & -K_2 & K_2 \end{bmatrix}$, $\{F\} = \begin{bmatrix} f_1^{(1)} \\ f_2^{(1)} + f_2^{(2)} \\ f_3^{(2)} \end{bmatrix}$

**Applying Boundary Conditions:**
Suppose the left end is fixed, meaning $U_1 = 0$.
Using Method 3 (Matrix Modification):
*   Set $[K]_{11} = 10^{10} \times (\text{largest diagonal entry})$. Let's assume $K_1, K_2$ are positive, so the largest diagonal might be $K_1+K_2$. Let $P = 10^{10} \times \max(K_1, K_2)$.
*   $[K]_{11} = P$.
*   Set $[K]_{12} = 0$, $[K]_{21} = 0$.
*   Set $\{F\}_1 = P \times U_1 = P \times 0 = 0$.

The modified system becomes:

$[K] = \begin{bmatrix} P & 0 & 0 \\ 0 & K_1 + K_2 & -K_2 \\ 0 & -K_2 & K_2 \end{bmatrix}$, $\{F\} = \begin{bmatrix} 0 \\ f_2^{(1)} + f_2^{(2)} \\ f_3^{(2)} \end{bmatrix}$

Now, we can solve this reduced system for $U_2$ and $U_3$. If there were prescribed forces at nodes, they would be added to the corresponding entries in $\{F\}$.

---

### Important Points to Remember:

*   **Consistent Node and DOF Numbering:** Crucial for correct assembly.
*   **Element Connectivity:** Understanding how elements are connected defines the DOF mapping.
*   **Summation at Shared Nodes:** Contributions from all elements connected to a node are summed up in the global matrices.
*   **Sparsity and Symmetry:** Exploit these properties for efficient storage and solution.
*   **Boundary Condition Handling:** Correct application of BCs is vital for obtaining a unique and physically meaningful solution.
*   **Global System is Square:** The number of DOFs dictates the size of the global matrices.

---

### Practice Questions:

1.  **Concept Check:** What is the primary goal of global assembly in FEM?
2.  **Assembly Scenario:** Consider a 2D problem with 4 nodes.
    *   Node 1: (0,0), Node 2: (1,0), Node 3: (1,1), Node 4: (0,1)
    *   Elements: Element A (Nodes 1, 2, 3) and Element B (Nodes 1, 3, 4). Assume a triangular element formulation where each node has two DOFs: $u_x$ and $u_y$.
    *   Map the local DOFs of Element A and Element B to global DOFs.
    *   If element A has a stiffness matrix $[k^{(A)}]$ and force vector $\{f^{(A)}\}$, and element B has $[k^{(B)}]$ and $\{f^{(B)}\}$, how would you show their contribution to the global stiffness matrix $[K]$ and global force vector $\{F\}$? Focus on a specific entry, e.g., the contribution to $[K]_{33}$ and $\{F\}_3$.
3.  **Boundary Condition Application:** Given the 1D bar example from before, with $K_1 = 100$ and $K_2 = 200$.
    *   The system without BCs was:
        $[K] = \begin{bmatrix} 100 & -100 & 0 \\ -100 & 300 & -200 \\ 0 & -200 & 200 \end{bmatrix}$, $\{F\} = \begin{bmatrix} f_1^{(1)} \\ f_2^{(1)} + f_2^{(2)} \\ f_3^{(2)} \end{bmatrix}$
    *   Apply the boundary condition that the displacement at Node 2 is fixed to $U_2 = 0.5$. Show the modified global matrix and force vector.
4.  **Problem Interpretation:** Why is it important to have a consistent numbering scheme for nodes and DOFs when performing global assembly?

---

### Answers to Practice Questions:

1.  **Concept Check:** The primary goal of global assembly is to combine the contributions of all individual finite elements into a single, large system of linear equations ($[K]\{U\} = \{F\}$) that represents the behavior of the entire physical domain. This system can then be solved to find the unknown displacements (or other nodal quantities) for the entire structure.

2.  **Assembly Scenario:**
    Let's assume a standard ordering of DOFs per node: $(u_x, u_y)$.
    *   Node 1: DOF 1 ($u_{x1}$), DOF 2 ($u_{y1}$)
    *   Node 2: DOF 3 ($u_{x2}$), DOF 4 ($u_{y2}$)
    *   Node 3: DOF 5 ($u_{x3}$), DOF 6 ($u_{y3}$)
    *   Node 4: DOF 7 ($u_{x4}$), DOF 8 ($u_{y4}$)

    **Element A (Nodes 1, 2, 3):**
    *   Local DOFs: $(u_{x1}^{(A)}, u_{y1}^{(A)}, u_{x2}^{(A)}, u_{y2}^{(A)}, u_{x3}^{(A)}, u_{y3}^{(A)})$
    *   Mapping to Global DOFs: (1, 2, 3, 4, 5, 6)
    *   $[k^{(A)}]$ is a 6x6 matrix. $\{f^{(A)}\}$ is a 6x1 vector.

    **Element B (Nodes 1, 3, 4):**
    *   Local DOFs: $(u_{x1}^{(B)}, u_{y1}^{(B)}, u_{x3}^{(B)}, u_{y3}^{(B)}, u_{x4}^{(B)}, u_{y4}^{(B)})$
    *   Mapping to Global DOFs: (1, 2, 5, 6, 7, 8)
    *   $[k^{(B)}]$ is a 6x6 matrix. $\{f^{(B)}\}$ is a 6x1 vector.

    **Contribution to $[K]_{33}$ and $\{F\}_3$:**
    *   **Global DOF 3:** This corresponds to $u_{x2}$ (from Node 2).
    *   **Element A:** $[k^{(A)}]_{33}$ contributes to $[K]_{33}$ (local DOF 3 of element A maps to global DOF 3).
    *   **Element B:** Element B does not have Node 2. Thus, it contributes nothing to $[K]_{33}$ or $\{F\}_3$.
    *   **Result:** $[K]_{33} = [k^{(A)}]_{33}$, and $\{F\}_3 = \{f^{(A)}\}_3$.

    Let's consider the contribution to **Global DOF 5 and 6** (from Node 3: $u_{x3}, u_{y3}$):
    *   **Element A:**
        *   $[k^{(A)}]_{55}$ contributes to $[K]_{55}$
        *   $[k^{(A)}]_{56}$ contributes to $[K]_{56}$
        *   $[k^{(A)}]_{65}$ contributes to $[K]_{65}$
        *   $[k^{(A)}]_{66}$ contributes to $[K]_{66}$
        *   $\{f^{(A)}\}_5$ contributes to $\{F\}_5$
        *   $\{f^{(A)}\}_6$ contributes to $\{F\}_6$
    *   **Element B:**
        *   $[k^{(B)}]_{33}$ contributes to $[K]_{55}$ (local DOF 3 of element B maps to global DOF 5)
        *   $[k^{(B)}]_{34}$ contributes to $[K]_{56}$ (local DOF 3 to global DOF 5, local DOF 4 to global DOF 6)
        *   $[k^{(B)}]_{43}$ contributes to $[K]_{65}$
        *   $[k^{(B)}]_{44}$ contributes to $[K]_{66}$
        *   $\{f^{(B)}\}_3$ contributes to $\{F\}_5$
        *   $\{f^{(B)}\}_4$ contributes to $\{F\}_6$

    *   **Result for $[K]_{55}$:** $[K]_{55} = [k^{(A)}]_{55} + [k^{(B)}]_{33}$
    *   **Result for $\{F\}_5$:** $\{F\}_5 = \{f^{(A)}\}_5 + \{f^{(B)}\}_3$

3.  **Boundary Condition Application:**
    Given:
    $[K] = \begin{bmatrix} 100 & -100 & 0 \\ -100 & 300 & -200 \\ 0 & -200 & 200 \end{bmatrix}$, $\{F\} = \begin{bmatrix} f_1^{(1)} \\ f_2^{(1)} + f_2^{(2)} \\ f_3^{(2)} \end{bmatrix}$
    Boundary Condition: $U_2 = 0.5$

    Using the penalty method (Method 3):
    We need to choose a large penalty number, say $P$. Let's use $P = 10^{10} \times 300$ (since 300 is the largest diagonal entry).

    *   Modify row 2 and column 2 of $[K]$:
        *   $[K]_{21} = 0$, $[K]_{12} = 0$.
        *   $[K]_{22} = P$.
    *   Modify the force vector:
        *   $\{F\}_2 = P \times U_2 = P \times 0.5$.

    The modified system is:

    $[K]_{modified} = \begin{bmatrix} 100 & 0 & 0 \\ 0 & P & -200 \\ 0 & -200 & 200 \end{bmatrix}$

    $\{F\}_{modified} = \begin{bmatrix} f_1^{(1)} \\ P \times 0.5 \\ f_3^{(2)} \end{bmatrix}$

    This modified system can now be solved for $U_1, U_2, U_3$. Note that $U_2$ will be very close to 0.5 due to the large penalty.

4.  **Problem Interpretation:** A consistent numbering scheme is essential for two main reasons:
    *   **Correct Mapping:** It ensures that each local degree of freedom of an element is correctly associated with its unique global degree of freedom. Without this, element stiffness contributions would be placed in the wrong locations in the global matrices, leading to an incorrect representation of the physical problem.
    *   **Accurate Summation:** It allows for the correct summation of stiffness contributions from different elements that share a common node. If numbering is inconsistent, the contributions at shared nodes will not be added together properly, violating the principle of continuity and equilibrium. It also ensures that the final global system is properly structured for solution.
