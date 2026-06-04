---
title: "General procedure of Finite Element analysis"
subject: "FINITE ELEMENT METHODS"
module: "Module 1: Introduction FEM"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446428d"
status: "completed"
scrapedAt: "2026-05-20T18:12:51.672Z"
---
# FINITE ELEMENT METHODS - Module 1: Introduction to FEM

## Topic: General Procedure of Finite Element Analysis

### 1. Introduction

The Finite Element Method (FEM) is a powerful numerical technique used to obtain approximate solutions to boundary value problems governed by partial differential equations. It is widely used in engineering and applied mathematics to solve complex problems that cannot be solved analytically. FEM works by discretizing a continuous domain into smaller, simpler subdomains called finite elements. The governing equations are then applied to each element, and the solutions from all elements are assembled to obtain an approximate solution for the entire domain.

**Key Concept:** Discretization of a continuous domain into a finite number of smaller elements.

**Learning Outcome:** Understand the basic procedure of FEM. (Aligns with CO1 - K2)

**Textbook References:**
*   Reddy, J. N. (2009). *An Introduction to the Finite Element Method*. McGraw-Hill Education. (Chapter 1)
*   Cook, R. D. (2008). *Concepts and Applications of Finite Element Method*. Wiley. (Chapter 1)
*   Bhavikatti, S. S. (2008). *Finite Element Analysis*. New Age Publisher. (Chapter 1)
*   Fish, J., & Belytschko, T. (2007). *A First Course in Finite Elements*. John Wiley & Sons, Ltd. (Chapter 1)

### 2. General Procedure of Finite Element Analysis

The general procedure for carrying out a Finite Element analysis can be broken down into several key steps:

**Step 1: Discretization (Meshing)**

*   **Definition:** The process of dividing the continuous physical domain (the structure or object being analyzed) into a finite number of smaller, simpler geometric shapes called **finite elements**.
*   **Elements:** Common element shapes include:
    *   **1D:** Line elements (e.g., for truss or beam analysis)
    *   **2D:** Triangles, quadrilaterals (e.g., for plate or shell analysis)
    *   **3D:** Tetrahedrons, hexahedrons (e.g., for solid mechanics analysis)
*   **Nodes:** The points where the elements are connected. Nodes are typically located at the corners and sometimes along the edges or within the elements.
*   **Connectivity:** The information that defines how the elements are connected to each other at the nodes. This is crucial for assembling the global system of equations.
*   **Mesh Quality:** The quality of the mesh (e.g., aspect ratio of elements, skewness) significantly impacts the accuracy of the results.
*   **Example:** Consider a simply supported beam. It can be discretized into several 1D line elements connected by nodes along its length.

**Step 2: Element Formulation (Deriving Element Equations)**

*   **Definition:** For each element, we need to derive a set of equations that relate the unknown nodal values (e.g., displacements, temperatures) to the known forces or applied loads.
*   **Approximation:** Within each element, the behavior of the unknown field variable (e.g., displacement) is approximated using **shape functions** (also known as interpolation functions or basis functions). These functions are typically polynomials and are defined in terms of the nodal values of the element.
    *   $u(x) \approx \hat{u}(x) = \sum_{i=1}^{n} N_i(x) u_i$
    where:
        *   $u(x)$ is the approximate displacement at a point $x$.
        *   $\hat{u}(x)$ is the interpolated displacement.
        *   $N_i(x)$ are the shape functions for node $i$.
        *   $u_i$ are the nodal values of the unknown variable.
*   **Governing Equations:** The governing differential equations of the physical phenomenon (e.g., equilibrium equations in structural mechanics, heat conduction equation) are then used to derive the element equations.
*   **Weak Form / Variational Methods:** Often, the strong form of the governing differential equation is converted into a weak form using methods like the **Galerkin method** or the **Principle of Virtual Work**. This allows the use of lower-order continuity shape functions.
    *   **Galerkin Method:** This method ensures that the residual (the difference between the true solution and the approximate solution) is orthogonal to the chosen shape functions.
    *   **Principle of Virtual Work:** This principle states that the internal virtual work done by stresses is equal to the external virtual work done by applied forces.
*   **Element Stiffness Matrix ($[k^{(e)}$):** This matrix relates the nodal forces ($[F^{(e)}$) to the nodal displacements ($[d^{(e)}$) for an element.
    *   $[k^{(e)}] \{d^{(e)}\} = \{F^{(e)}\}$
*   **Element Load Vector ($\{F^{(e)}\}$):** This vector represents the equivalent forces acting at the nodes of an element due to distributed loads, body forces, or boundary conditions.
*   **Learning Outcomes:** Formulate shape functions and element strain-displacement matrix. (Aligns with CO3 - K4)

**Step 3: Assembly (Global System of Equations)**

*   **Definition:** The individual element equations are combined to form a single, larger system of equations that represents the entire discretized domain. This process is called assembly.
*   **Global Stiffness Matrix ($[K]$):** The element stiffness matrices are added together based on the connectivity of the elements to form the global stiffness matrix.
*   **Global Load Vector ($\{F\}$):** The element load vectors are similarly combined to form the global load vector.
*   **Global Displacement Vector ($\{D\}$):** This vector contains all the unknown nodal displacements for the entire domain.
*   **Global System of Equations:** The assembled equations take the form:
    *   $[K] \{D\} = \{F\}$
*   **Example:** If two beam elements share a node, their stiffness contributions at that shared node are added to the corresponding entries in the global stiffness matrix.

**Step 4: Application of Boundary Conditions**

*   **Definition:** Boundary conditions are constraints imposed on the solution at the boundaries of the domain. These can be essential (e.g., prescribed displacements, fixed supports) or natural (e.g., prescribed forces, applied loads).
*   **Essential Boundary Conditions:** These are typically applied by modifying the global system of equations. Common methods include:
    *   **Penalty Method:** Introducing large stiffness values at the constrained nodes.
    *   **Direct Elimination Method:** Zeroing out rows and columns corresponding to the constrained degrees of freedom.
*   **Natural Boundary Conditions:** These are often incorporated automatically through the element formulation process (e.g., forces applied at nodes).
*   **Example:** For a fixed support at one end of a beam, the displacement at that node is set to zero.

**Step 5: Solution of System of Equations**

*   **Definition:** Once the global system of equations is assembled and boundary conditions are applied, the system is solved for the unknown nodal displacements $\{D\}$.
*   **Methods:** Various numerical techniques are used to solve the system of linear equations, such as:
    *   Gaussian elimination
    *   LU decomposition
    *   Iterative solvers (e.g., Jacobi, Gauss-Seidel, Conjugate Gradient)
*   **Computational Cost:** The size of the matrices and the chosen solution method impact the computational time and memory requirements.

**Step 6: Post-processing**

*   **Definition:** After the nodal displacements are calculated, this step involves calculating other quantities of interest, such as strains, stresses, or heat fluxes, and presenting the results in a meaningful way.
*   **Strain-Displacement Relation:** Strains are computed from the nodal displacements using the strain-displacement matrix ($\mathbf{B}$).
    *   $\{\epsilon^{(e)}\} = [B^{(e)}] \{d^{(e)}\}$
*   **Stress-Strain Relation (Constitutive Law):** Stresses are then calculated from the strains using the material's constitutive law (e.g., Hooke's Law).
    *   $\{\sigma^{(e)}\} = [D] \{\epsilon^{(e)}\}$
    where $[D]$ is the material property matrix.
*   **Visualization:** Results are often visualized using contour plots, color maps, or animations to aid in interpretation.
*   **Verification and Validation:** Comparing the FEM results with analytical solutions, experimental data, or results from other methods is crucial for verifying the accuracy and validity of the model.
*   **Learning Outcomes:** Evaluate element stress using energy method. (Aligns with CO4 - K5)

### 3. Examples and Illustrations

**Example: 1D Bar Element**

Consider a simple 1D bar element with two nodes, 1 and 2, connected by a uniform cross-sectional area $A$ and Young's modulus $E$.

*   **Discretization:** The bar is represented by a single element.
*   **Shape Functions (Linear):**
    *   $N_1(x) = 1 - \frac{x}{L}$
    *   $N_2(x) = \frac{x}{L}$
    where $x$ is the coordinate along the element of length $L$.
*   **Element Stiffness Matrix:** The element stiffness matrix for a 1D bar element is:
    $ [k^{(e)}] = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} $
*   **Element Load Vector:** If a point load $P$ is applied at node 2, $\{F^{(e)}\} = \begin{bmatrix} 0 \\ P \end{bmatrix}$.
*   **Assembly:** For a multi-element bar, these matrices are assembled into global matrices.
*   **Boundary Conditions:** If node 1 is fixed, its displacement is set to zero.
*   **Solution:** Solve $[K]\{D\} = \{F\}$ for $\{D\}$.
*   **Post-processing:** Calculate strain $\epsilon = \frac{du}{dx}$ and stress $\sigma = E\epsilon$.

**Key Concept:** Element stiffness matrix $[k^{(e)}]$ relates nodal forces to nodal displacements.

**Textbook References:**
*   Reddy (Chapter 2)
*   Cook (Chapter 2)
*   Bhavikatti (Chapter 2)
*   Fish & Belytschko (Chapter 2)

### 4. Practice Questions

1.  **Question:** Briefly explain the importance of the discretization step in Finite Element Analysis. (CO1 - K2)
    **Answer:** Discretization divides a complex continuous domain into simpler, manageable finite elements. This allows us to approximate the behavior of the continuous system using a finite number of algebraic equations, which can then be solved numerically. It's the foundational step that makes FEM applicable to real-world problems.

2.  **Question:** What are shape functions, and what is their role in FEM? (CO2 - K3)
    **Answer:** Shape functions (or interpolation functions) are mathematical functions used to approximate the variation of the unknown field variable (e.g., displacement) within an element, based on the values of the variable at the element's nodes. They are crucial for relating nodal quantities to quantities within the element and for formulating the element stiffness matrix.

3.  **Question:** Describe the "assembly" process in FEM. (CO1 - K2)
    **Answer:** Assembly is the process of combining the individual element stiffness matrices and load vectors into global matrices that represent the entire discretized domain. This is done by summing up the contributions of each element based on their connectivity at shared nodes. This leads to a global system of equations $[K]\{D\} = \{F\}$.

4.  **Question:** Given a simple 2-node 1D bar element with length $L$, Young's modulus $E$, and area $A$, write down its element stiffness matrix. (CO3 - K4)
    **Answer:**
    $ [k^{(e)}] = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} $

5.  **Question:** Why is it necessary to apply boundary conditions in FEM? (CO1 - K2)
    **Answer:** Boundary conditions represent the constraints or loads applied to the physical system at its boundaries. Applying them correctly to the global system of equations is essential to obtain a unique and physically meaningful solution that respects the physical reality of the problem.

### 5. Important Points to Remember

*   **FEM is an approximate method:** The accuracy depends on the mesh density, element type, and the choice of shape functions.
*   **Discretization is the first crucial step:** The quality of the mesh significantly affects the results.
*   **Shape functions define element behavior:** They must satisfy certain properties like being continuous and having unit value at their own node and zero at other nodes (for Kronecker delta property).
*   **Assembly conserves physical principles:** It ensures continuity and equilibrium across element interfaces.
*   **Boundary conditions dictate the specific problem:** Correct implementation is vital.
*   **Post-processing provides the engineer with the actual results:** Stresses, strains, temperatures, etc.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 6. References and Further Reading

*   **Reddy, J. N. (2009).** *An Introduction to the Finite Element Method*. McGraw-Hill Education. (Chapters 1-3 provide a thorough foundation).
*   **Cook, R. D. (2008).** *Concepts and Applications of Finite Element Method*. Wiley. (Excellent for conceptual understanding and practical examples).
*   **Bhavikatti, S. S. (2008).** *Finite Element Analysis*. New Age Publisher. (Covers the fundamentals concisely).
*   **Fish, J., & Belytschko, T. (2007).** *A First Course in Finite Elements*. John Wiley & Sons, Ltd. (Offers a modern perspective and clear explanations).
*   **Segerlind, L. J. (2010).** *Applied Finite Element Analysis*. John Wiley and Sons. (A classic text with many practical examples).

This detailed note covers the general procedure of Finite Element Analysis, aligning with the specified learning outcomes and course objectives. The explanations include definitions, key steps, and examples to facilitate understanding.