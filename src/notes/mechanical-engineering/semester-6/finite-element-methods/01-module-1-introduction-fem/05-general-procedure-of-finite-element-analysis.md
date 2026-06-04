---
title: "General procedure of Finite Element analysis"
subject: "FINITE ELEMENT METHODS"
module: "Module 1: Introduction FEM"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463840"
status: "completed"
scrapedAt: "2026-05-20T18:03:53.315Z"
---
# FINITE ELEMENT METHODS

## Module 1: Introduction to FEM

### Topic: General Procedure of Finite Element Analysis

This module introduces the fundamental concepts and the systematic approach of the Finite Element Method (FEM). Understanding the general procedure is crucial for applying FEM to solve a wide range of engineering and scientific problems.

---

### 1. Introduction to Finite Element Analysis

The Finite Element Method (FEM) is a powerful numerical technique used to find approximate solutions to boundary value problems for partial differential equations. It is particularly well-suited for problems involving complex geometries, material properties, and boundary conditions that are difficult or impossible to solve analytically.

**Key Concept:** FEM works by dividing a complex problem domain (like a structure, fluid, or heat distribution) into a finite number of smaller, simpler subdomains called **finite elements**. The behavior of the entire domain is then approximated by assembling the behavior of these individual elements.

---

### 2. The General Procedure of Finite Element Analysis

The general procedure for performing a Finite Element analysis can be broken down into the following key steps:

#### **Step 1: Preprocessing**

This stage involves preparing the problem for analysis. It's all about defining the physical problem in a format that the FEM software or our manual calculations can understand.

*   **Problem Definition and Geometry:**
    *   **Key Concept:** Clearly define the physical problem, its boundaries, and the governing physical laws (e.g., equations of elasticity for structural analysis, heat conduction equation for thermal analysis).
    *   **Example:** For a bridge truss, define the material of each member, the loads applied, and the support conditions.
    *   **Textbook Reference:** Reddy, Chapter 1.
*   **Discretization (Meshing):**
    *   **Key Concept:** Divide the continuous problem domain into a finite number of smaller, interconnected subdomains called **finite elements**. These elements are connected at specific points called **nodes**.
    *   **Element Types:** Common element types include:
        *   **1D Elements:** Line segments (e.g., truss elements, beam elements)
        *   **2D Elements:** Triangles, quadrilaterals (e.g., for plane stress, plane strain, plate bending)
        *   **3D Elements:** Tetrahedrons, Hexahedrons (e.g., for solid mechanics, heat transfer in solids)
    *   **Mesh Quality:** The size and shape of elements significantly impact the accuracy of the solution. A finer mesh generally leads to higher accuracy but requires more computational resources.
    *   **Textbook Reference:** Cook, Chapter 3; Bhavikatti, Chapter 2.
    *   **Important Point:** The choice of element type depends on the dimensionality and complexity of the problem.
*   **Element Property Definition:**
    *   **Key Concept:** Define the material properties (e.g., Young's modulus, Poisson's ratio, thermal conductivity) and geometric properties (e.g., cross-sectional area, moment of inertia) for each element.
    *   **Example:** For a steel beam element, define its Young's modulus and its moment of inertia.
    *   **Textbook Reference:** Reddy, Chapter 2.
*   **Node and Element Numbering:**
    *   **Key Concept:** Assign unique numbers to each node and element. This numbering scheme affects the bandwidth of the global stiffness matrix, which is important for computational efficiency.
    *   **Important Point:** A good numbering scheme minimizes the bandwidth of the stiffness matrix.
    *   **Textbook Reference:** Bhavikatti, Chapter 2.
*   **Application of Boundary Conditions:**
    *   **Key Concept:** Define the constraints on the domain, such as fixed supports, applied loads, prescribed temperatures, or boundary fluxes.
    *   **Example:** In a structural analysis, a fixed support means that the displacement at that node is zero in all directions.
    *   **Textbook Reference:** Reddy, Chapter 1; Segerlind, Chapter 4.

#### **Step 2: Element Formulation**

This is where the mathematical representation of the physical behavior within each element is established.

*   **Selection of Displacement/Field Variable Functions (Shape Functions):**
    *   **Key Concept:** Within each element, the variation of the primary field variable (e.g., displacement in structural analysis, temperature in heat transfer) is approximated using **interpolation functions**, also known as **shape functions**. These functions are typically polynomial functions.
    *   **Properties of Shape Functions:**
        *   Sum of shape functions over an element equals 1.
        *   Shape function has a value of 1 at its own node and 0 at all other nodes of the element.
    *   **Example:** For a 1D linear element (two nodes), the shape functions are linear: $N_1(\xi) = (1-\xi)/2$ and $N_2(\xi) = (1+\xi)/2$, where $\xi$ is the natural coordinate.
    *   **Learning Outcome:** CO2, CO3
    *   **Textbook Reference:** Reddy, Chapter 2; Cook, Chapter 4; Fish & Belytschko, Chapter 3.
*   **Derivation of Element Stiffness Matrix ([k] or [K]<sup>e</sup>):**
    *   **Key Concept:** The element stiffness matrix relates the nodal forces to the nodal displacements (or nodal values of the field variable). It is derived using the governing differential equations of the physical phenomenon and the chosen shape functions. Common methods include:
        *   **Principle of Minimum Potential Energy (for elastic solids):** This principle states that the equilibrium configuration of a structure is the one that minimizes its total potential energy.
        *   **Galerkin Method (for general PDEs):** This is a weighted residual method where the weighted functions are the same as the trial functions (shape functions).
    *   **Formulation for Structural Mechanics (Stiffness Matrix):**
        *   The relationship between strain ($\{\epsilon\}$) and displacement ($\{u\}$) is given by the strain-displacement matrix, $[B]$: $\{\epsilon\} = [B]\{u\}$.
        *   The relationship between stress ($\{\sigma\}$) and strain ($\{\epsilon\}$) is given by the material constitutive law, often represented by the stress-strain matrix, $[D]$: $\{\sigma\} = [D]\{\epsilon\}$.
        *   The element stiffness matrix is then calculated as: $[k]^e = \int_{V}[B]^T[D][B] dV$.
    *   **Learning Outcome:** CO3, CO4
    *   **Textbook Reference:** Reddy, Chapter 2; Cook, Chapter 4; Bhavikatti, Chapter 3; Segerlind, Chapter 3; Hutton, Chapter 3.
    *   **Important Point:** The stiffness matrix is symmetric and positive definite for stable elements.
*   **Derivation of Element Force Vector ({f} or {F}<sup>e</sup>):**
    *   **Key Concept:** This vector represents the equivalent nodal forces resulting from applied loads, body forces, and surface tractions.
    *   **Formulation for Structural Mechanics (Force Vector):** For forces applied directly at nodes, the force vector is straightforward. For distributed loads or body forces, they are distributed to the nodes using shape functions.
    *   **Example:** For a uniformly distributed load $q$ on a 1D beam element of length $L$, the equivalent nodal forces are $qL/2$ at each node.
    *   **Textbook Reference:** Reddy, Chapter 2; Cook, Chapter 4.

#### **Step 3: Assembly of Global Matrices**

The individual element matrices and vectors are assembled into global system matrices and vectors that represent the entire problem domain.

*   **Assembly of Global Stiffness Matrix ([K]):**
    *   **Key Concept:** The element stiffness matrices are assembled into a single global stiffness matrix. This is done by matching the nodal degrees of freedom (DOFs) of adjacent elements. The global stiffness matrix represents the stiffness of the entire structure.
    *   **Process:** For each element's stiffness matrix $[k]^e$, its entries are added to the corresponding positions in the global stiffness matrix $[K]$ based on the global node numbers.
    *   **Example:** If node $i$ of element 1 is connected to node $p$ globally, and node $j$ of element 1 is connected to node $q$ globally, then the entry $k_{ij}$ of $[k]^e$ contributes to the entry $K_{pq}$ of $[K]$.
    *   **Textbook Reference:** Reddy, Chapter 3; Cook, Chapter 5; Bhavikatti, Chapter 4.
    *   **Important Point:** The global stiffness matrix is sparse and symmetric.
*   **Assembly of Global Force Vector ({F}):**
    *   **Key Concept:** The element force vectors are assembled into a single global force vector, representing all external forces acting on the structure at the nodes.
    *   **Process:** Similar to the stiffness matrix, element force vectors are summed up at corresponding nodal DOFs in the global force vector.
    *   **Textbook Reference:** Reddy, Chapter 3; Cook, Chapter 5.

#### **Step 4: Application of Boundary Conditions (Modified System)**

After assembly, the system of equations is modified to incorporate the prescribed boundary conditions.

*   **Key Concept:** Boundary conditions (e.g., prescribed displacements at supports) are imposed on the global system of equations to make the system solvable and to reflect the physical constraints.
*   **Methods for Imposing Boundary Conditions:**
    *   **Penalty Method:** Large stiffness values are added to the diagonal of the global stiffness matrix at nodes with prescribed displacements.
    *   **Elimination Method (or Direct Method):** Rows and columns corresponding to prescribed nodal DOFs are removed from the global stiffness matrix and force vector.
*   **Example:** If displacement $u_p$ at node $p$ is known to be $U_p$, the $p$-th equation in the system $\{F\} = [K]\{U\}$ is replaced by $U_p = U_p$.
*   **Textbook Reference:** Reddy, Chapter 3; Cook, Chapter 5; Bhavikatti, Chapter 4; Segerlind, Chapter 4.
*   **Important Point:** Properly imposing boundary conditions is critical for obtaining a physically meaningful solution.

#### **Step 5: Solution of Global System of Equations**

The modified global system of linear algebraic equations is solved to determine the unknown nodal values.

*   **The System of Equations:** The assembled and modified system of equations takes the form:
    $[K]\{U\} = \{F\}$
    where:
    *   $[K]$ is the global stiffness matrix.
    *   $\{U\}$ is the vector of unknown nodal displacements (or field variables).
    *   $\{F\}$ is the global force vector.
*   **Solution Methods:**
    *   **Direct Methods:** Gaussian elimination, LU decomposition, Cholesky decomposition. These are suitable for smaller systems or when high accuracy is required.
    *   **Iterative Methods:** Jacobi method, Gauss-Seidel method, Conjugate gradient method. These are often preferred for large systems due to lower memory requirements and faster convergence.
*   **Textbook Reference:** Reddy, Chapter 3; Cook, Chapter 5; Bhavikatti, Chapter 4.
*   **Important Point:** The choice of solution method depends on the size and characteristics of the global stiffness matrix.

#### **Step 6: Postprocessing**

Once the nodal values are determined, this stage involves calculating derived quantities and interpreting the results.

*   **Calculation of Element Strains and Stresses:**
    *   **Key Concept:** Using the calculated nodal displacements $\{U\}$ and the element strain-displacement matrix $[B]$, the strains $\{\epsilon\}$ within each element are computed: $\{\epsilon\}^e = [B]^e\{u\}^e$.
    *   Then, using the stress-strain relationship $[D]$, the stresses $\{\sigma\}$ are calculated: $\{\sigma\}^e = [D]^e\{\epsilon\}^e$.
    *   **Learning Outcome:** CO4
    *   **Textbook Reference:** Reddy, Chapter 2; Cook, Chapter 4.
*   **Calculation of Other Quantities:** Depending on the physics of the problem, other quantities like reaction forces, heat fluxes, etc., can be calculated.
*   **Visualization and Interpretation:**
    *   **Key Concept:** The computed results (displacements, stresses, temperatures, etc.) are visualized (e.g., contour plots, deformed shapes) to understand the behavior of the system and identify critical regions.
    *   **Example:** Displaying a stress contour plot on a component to identify areas of high stress concentration.
    *   **Textbook Reference:** Bhavikatti, Chapter 1.
*   **Verification and Validation:**
    *   **Key Concept:** Compare FEM results with analytical solutions (if available), experimental data, or results from different FEM models to ensure accuracy and reliability.
    *   **Learning Outcome:** All COs (implicitly, as validation is a general practice)

---

### 3. Learning Outcomes Covered in the General Procedure:

*   **CO1: To understand the governing equations of various physical phenomena and basic procedure of FEM.**
    *   This is the overarching outcome. The general procedure provides the framework for understanding how FEM tackles physical problems. Understanding the governing equations (e.g., equilibrium equations, heat diffusion equation) is a prerequisite for deriving element equations. The seven steps outline the basic procedure.
    *   **Knowledge Level:** K2 (Understand)

*   **CO2: To apply the coordinate transformation and formulation of shape functions of various element.**
    *   Step 2 (Element Formulation) heavily relies on this. Shape functions are crucial for interpolating the field variable within an element, and coordinate transformations (e.g., from global to natural coordinates) are often used to simplify integration and formulation.
    *   **Knowledge Level:** K3 (Apply)

*   **CO3: Formulate shape functions and element strain displacement matrix of various element.**
    *   Step 2 (Element Formulation) directly addresses this. The formulation of shape functions and the derivation of the $[B]$ matrix (strain-displacement matrix) are core to developing the element stiffness matrix.
    *   **Knowledge Level:** K4 (Analyze - implicitly, as formulating these matrices requires analysis of element behavior)

*   **CO4: Evaluate element stress using energy method and study Galerkin weight residual formulations.**
    *   Step 2 (Element Formulation) covers the derivation of element stiffness matrices using methods like the Principle of Minimum Potential Energy (often associated with energy methods) and the Galerkin method.
    *   Step 6 (Postprocessing) covers the evaluation of element stresses using the computed nodal displacements and the element matrices.
    *   **Knowledge Level:** K5 (Evaluate)

---

### 4. Practice Questions and Exercises

**Question 1:**
List and briefly describe the main stages of the general procedure of Finite Element Analysis.
**Answer:**
The main stages are:
1.  **Preprocessing:** Defining the problem, geometry, material properties, meshing, and boundary conditions.
2.  **Element Formulation:** Deriving element matrices (stiffness, force) using shape functions and governing equations.
3.  **Assembly of Global Matrices:** Combining element matrices into global system matrices.
4.  **Application of Boundary Conditions:** Modifying the global system to incorporate constraints.
5.  **Solution of Global System:** Solving the system of linear equations for nodal unknowns.
6.  **Postprocessing:** Calculating derived quantities (stresses, strains) and interpreting results.

**Question 2:**
What is the role of shape functions in FEM? Mention two important properties of shape functions.
**Answer:**
Shape functions are used to approximate the variation of the field variable (e.g., displacement, temperature) within an element. They interpolate the nodal values of the field variable.
Two important properties are:
*   The sum of shape functions over an element is equal to 1.
*   Each shape function has a value of 1 at its own node and 0 at all other nodes of the element.

**Question 3:**
The element stiffness matrix $[k]^e$ is typically derived using which integral form?
a) $\int_{V}[B]^T[D][B] dV$
b) $\int_{V}[B][D][B]^T dV$
c) $\int_{V}[D]^T[B][B] dV$
d) $\int_{V}[D][B]^T[B] dV$
**Answer:**
a) $\int_{V}[B]^T[D][B] dV$
(Where $[B]$ is the strain-displacement matrix and $[D]$ is the material constitutive matrix.)

**Question 4:**
How are boundary conditions typically applied to the global stiffness matrix and force vector?
**Answer:**
Boundary conditions are applied by modifying the global system of equations. Common methods include the penalty method (adding large values to diagonal elements) or the elimination method (removing rows and columns corresponding to known nodal values).

**Question 5:**
In postprocessing, how are element stresses calculated?
**Answer:**
Element stresses are calculated using the computed nodal displacements $\{\boldsymbol{u}\}^e$ for an element and the element's strain-displacement matrix $[B]^e$. The strain is first calculated as $\{\boldsymbol{\epsilon}\}^e = [B]^e \{\boldsymbol{u}\}^e$, and then the stress is found using the material constitutive law: $\{\boldsymbol{\sigma}\}^e = [D]^e \{\boldsymbol{\epsilon}\}^e$.

---

### 5. Important Points to Remember:

*   **FEM is an approximation method:** The accuracy depends on the mesh density, element type, and the order of shape functions.
*   **Discretization is key:** The physical domain is broken down into a finite number of elements connected at nodes.
*   **Shape functions define element behavior:** They interpolate the field variable within an element.
*   **Stiffness matrix relates forces and displacements:** It encapsulates the stiffness characteristics of an element and the entire structure.
*   **Assembly process is crucial:** Correctly assembling element matrices leads to the global system of equations.
*   **Boundary conditions are essential:** They provide the necessary constraints to solve the problem.
*   **Postprocessing provides meaningful results:** It transforms nodal unknowns into physical quantities like stress and strain.
*   **CO1 is the foundational outcome:** Understanding the procedure is the first step to applying FEM.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 6. Textbooks and Reference Material Used:

*   **Textbooks:**
    *   An Introduction to Finite Element Method by J.N. Reddy
    *   Concepts and Application of Finite Element Method by Robert D. Cook
    *   Finite Element Analysis by S.S. Bhavikatti
    *   A First Course in Finite Elements by Jacob Fish and Ted Belytschko
*   **Reference Books:**
    *   Applied Finite Element Analysis by Larry J. Segerlind
    *   Applied Finite Element Analysis by G. Ramamurthi
    *   Fundamentals of Finite Element Methods by David V. Hutton

**(Note: Specific page numbers are not provided as the general procedure is a fundamental concept covered across early chapters of these textbooks. Students are encouraged to refer to Chapter 1-3 of Reddy, Cook, and Bhavikatti for detailed explanations.)**