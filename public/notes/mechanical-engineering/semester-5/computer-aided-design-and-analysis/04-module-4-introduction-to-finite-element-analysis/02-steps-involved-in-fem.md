---
title: "steps involved in FEM"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS"
module: "Module 4: Introduction to finite element analysis"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463511"
status: "completed"
scrapedAt: "2026-05-20T17:59:03.233Z"
---
# COMPUTER AIDED DESIGN AND ANALYSIS - Module 4: Introduction to Finite Element Analysis

## Topic: Steps Involved in Finite Element Analysis (FEA)

---

### **Learning Outcomes:**

*   Understand the fundamental steps involved in the Finite Element Analysis (FEA) process.
*   Describe the purpose and significance of each step in FEA.
*   Relate the FEA process to solving complex engineering problems using CAD.

---

### **Course Outcomes Alignment:**

*   **CO4:** Understand finite element analysis (FEA) and finite volume methods (FVM) including discretization, formulation, and boundary condition implementation for simple structural and fluid flow problems. (Knowledge Level: K2) - This topic directly addresses the foundational understanding of the FEA process, which is essential for implementing and understanding the later stages mentioned in CO4.

---

### **Key Concepts and Definitions:**

*   **Finite Element Analysis (FEA):** A numerical method used to obtain approximate solutions to boundary value problems in engineering and physics. It is particularly well-suited for complex geometries and material properties that cannot be solved analytically.
*   **Discretization/Meshing:** The process of dividing a continuous physical domain (the problem geometry) into a finite number of smaller, simpler subdomains called "finite elements."
*   **Element Types:** Different shapes of finite elements (e.g., triangles, quadrilaterals in 2D; tetrahedrons, hexahedrons in 3D) used to represent the geometry.
*   **Nodes:** Points where the elements are connected. The unknown values (e.g., displacements, temperatures) are calculated at these nodes.
*   **Shape Functions/Interpolation Functions:** Polynomial functions used to approximate the variation of the unknown quantity within an element based on its nodal values.
*   **Element Stiffness Matrix:** A matrix that relates the nodal forces to the nodal displacements for a single finite element.
*   **Global Stiffness Matrix:** The assembled stiffness matrix for the entire discretized domain, representing the overall structural behavior.
*   **Force Vector:** A vector representing external forces or loads applied to the structure.
*   **Boundary Conditions:** Constraints imposed on the solution, such as fixed supports (prescribed displacements) or applied loads (prescribed forces).
*   **Assembly:** The process of combining the individual element stiffness matrices and force vectors into a global system of equations.
*   **Solution:** Solving the system of algebraic equations to determine the unknown nodal values (e.g., displacements, temperatures).
*   **Post-processing:** Analyzing and interpreting the results obtained from the solution phase, often involving visualization of stress, strain, temperature contours, etc.

---

### **Steps Involved in Finite Element Analysis (FEA):**

FEA is a systematic procedure that breaks down a complex continuous problem into a series of smaller, manageable steps. The typical steps involved are:

#### **1. Pre-processing:**

This is the initial stage where the problem is defined and prepared for analysis.

*   **a) Problem Definition & Geometry Definition:**
    *   Clearly state the problem to be solved (e.g., stress analysis of a beam, heat transfer in a plate).
    *   Define the geometry of the physical domain representing the problem. This is often done using CAD software.
    *   *Reference:* Ulrich & Eppinger (2020) emphasize the importance of clear problem definition in product development, which extends to defining the geometry accurately for analysis.

*   **b) Material Property Definition:**
    *   Assign material properties to the geometry. These properties depend on the type of analysis.
    *   **For Structural Analysis:** Young's Modulus (E), Poisson's Ratio (ν), Density (ρ), Yield Strength, etc. (Chandrupatla & Belegundu, 2001).
    *   **For Thermal Analysis:** Thermal Conductivity (k), Specific Heat (c), Density (ρ).
    *   **For Fluid Flow Analysis:** Viscosity, Density, etc.

*   **c) Discretization (Meshing):**
    *   Divide the continuous geometry into a finite number of discrete elements (e.g., triangles, quadrilaterals, tetrahedrons, hexahedrons).
    *   The collection of these elements and their connecting nodes is called the "mesh."
    *   The quality and density of the mesh significantly impact the accuracy and computational cost of the analysis. Finer meshes generally lead to more accurate results but require more computational resources.
    *   *Example:* A simple square plate might be meshed into smaller square or triangular elements.
    *   *Reference:* Chandrupatla & Belegundu (2001) provide detailed coverage of element types and meshing strategies. Logan (2007) also discusses various meshing techniques.

*   **d) Element Formulation (Derivation of Element Matrices):**
    *   For each element, derive the element stiffness matrix (e.g., $[k^e]$) and the element force vector (e.g., $\{f^e\}$).
    *   This involves using **shape functions** (or interpolation functions) to approximate the variation of the unknown quantity (e.g., displacement) within the element.
    *   The stiffness matrix represents the relationship between nodal forces and nodal displacements for that element (e.g., $\{F^e\} = [k^e]\{u^e\}$).
    *   *Key Concept:* The choice of shape functions (e.g., linear, quadratic) influences the accuracy of the element's representation.

*   **e) Boundary Condition Application:**
    *   Apply constraints and loads to the model.
    *   **Essential Boundary Conditions (Dirichlet Boundary Conditions):** Prescribed values of the unknown variable at certain nodes (e.g., fixed supports where displacement is zero, specific displacements applied).
    *   **Natural Boundary Conditions (Neumann Boundary Conditions):** Prescribed values of derivatives of the unknown variable (e.g., applied forces, heat fluxes).
    *   *Example:* In a cantilever beam fixed at one end, the displacement at all nodes on the fixed end is set to zero. A load applied at the free end is also a boundary condition.

#### **2. Solution:**

This stage involves solving the system of equations derived from the discretized model.

*   **a) Assembly of Global Matrices:**
    *   Combine the individual element stiffness matrices and force vectors into a global stiffness matrix ($[K]$) and a global force vector ($\{F\}$).
    *   This is done by considering the connectivity of elements and ensuring continuity of the unknown variable at the nodes.
    *   The assembly process ensures that the global system of equations accurately represents the behavior of the entire discretized domain.

*   **b) Formation of the System of Algebraic Equations:**
    *   The assembled global stiffness matrix and force vector, along with the applied boundary conditions, form a system of linear algebraic equations.
    *   For structural analysis, this is typically represented as: $[K]\{u\} = \{F\}$
        *   $[K]$ is the global stiffness matrix.
        *   $\{u\}$ is the vector of unknown nodal displacements.
        *   $\{F\}$ is the global force vector, incorporating applied loads and modified boundary conditions.

*   **c) Solution of Equations:**
    *   Solve the system of algebraic equations to determine the unknown nodal values (e.g., nodal displacements $\{u\}$).
    *   Various numerical methods are used for solving these equations, such as Gaussian elimination, LU decomposition, or iterative solvers (like conjugate gradient method), depending on the size and nature of the matrix $[K]$.
    *   *Reference:* Groover & Zimmers (2014) discuss numerical methods relevant to CAD/CAM, which can be extended to understanding the solution phase in FEA.

#### **3. Post-processing:**

This is the final stage where the results are interpreted and visualized.

*   **a) Calculation of Element Strains and Stresses (or other derived quantities):**
    *   Once the nodal displacements (or other primary unknowns) are known, the strains and stresses within each element are calculated using the element shape functions and material properties.
    *   *Example:* Stress = Young's Modulus × Strain.
    *   *Reference:* Chandrupatla & Belegundu (2001) provide the equations for calculating strains and stresses from displacements.

*   **b) Visualization and Interpretation of Results:**
    *   The calculated nodal values and element quantities are typically visualized using graphical representations.
    *   Common visualizations include:
        *   **Deformed Shape:** Showing how the structure deforms under the applied loads.
        *   **Contour Plots:** Displaying the distribution of stresses (e.g., Von Mises stress), strains, temperatures, etc., across the model.
        *   **Vector Plots:** Showing displacement vectors or velocity vectors.
    *   The results are then interpreted to evaluate the performance of the design, identify critical areas (e.g., high stress concentrations), and validate against design requirements.
    *   *Example:* A contour plot of stress on a mechanical part can highlight areas where the stress exceeds the material's yield strength, indicating potential failure.
    *   *Reference:* Hearn, Baker & Carithers (2001) discuss computer graphics techniques essential for visualizing FEA results. Rogers & Adams (1990) also cover fundamental graphics principles used in engineering analysis visualization.

---

### **Summary of FEA Steps:**

1.  **Pre-processing:**
    *   Define Geometry & Problem
    *   Define Material Properties
    *   Discretize (Mesh) the Geometry
    *   Formulate Element Matrices (Shape Functions)
    *   Apply Boundary Conditions

2.  **Solution:**
    *   Assemble Global Matrices & Force Vector
    *   Form System of Algebraic Equations
    *   Solve the Equations for Unknowns

3.  **Post-processing:**
    *   Calculate Derived Quantities (Strains, Stresses, etc.)
    *   Visualize and Interpret Results

---

### **Important Points to Remember:**

*   FEA is an **approximation technique**. The accuracy of the results depends heavily on the quality of the mesh, the choice of element type, and the formulation of element equations.
*   The **pre-processing stage is crucial** for the success of an FEA. Errors in meshing or boundary condition application will lead to incorrect results.
*   **Understanding the underlying physics** of the problem is essential for correctly applying boundary conditions and interpreting the results.
*   **CAD software plays a vital role** in defining the geometry and often in generating the mesh during the pre-processing stage.
*   **Post-processing is not just about creating pretty pictures**; it's about gaining engineering insights from the computed data.

---

### **Practice Questions:**

1.  **List the three main stages of the Finite Element Analysis process.**
    *   **Answer:** Pre-processing, Solution, and Post-processing.

2.  **What is the primary goal of the "Discretization" step in FEA?**
    *   **Answer:** To divide a continuous geometric domain into a finite number of smaller, simpler subdomains (elements) connected at nodes.

3.  **Differentiate between Essential (Dirichlet) and Natural (Neumann) Boundary Conditions.** Provide an example for each in a structural analysis context.
    *   **Answer:**
        *   **Essential Boundary Conditions (Dirichlet):** Prescribe the value of the unknown variable itself.
            *   *Example:* A fixed end of a beam has zero displacement at all its nodes.
        *   **Natural Boundary Conditions (Neumann):** Prescribe the value of the derivative of the unknown variable.
            *   *Example:* A force applied to the end of a beam represents a natural boundary condition.

4.  **Why is the "Assembly" step important in the Solution stage of FEA?**
    *   **Answer:** Assembly combines the individual element stiffness matrices and force vectors into global matrices, representing the behavior of the entire discretized domain and forming the system of equations to be solved.

5.  **What are the typical outputs visualized in the Post-processing stage of a structural FEA?**
    *   **Answer:** Deformed shape, stress contours (e.g., Von Mises stress), strain contours, displacement contours.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### **Further Reading/References:**

*   **Chandrupatla, T. R., & Belegundu, A. D. (2001).** *Introduction to Finite Elements in Engineering.* Pearson Education. (Chapters on FEA procedure, element formulation).
*   **Logan, D. (2007).** *A First Course in Finite Element Method.* Thomson Learning. (Comprehensive coverage of FEA steps and theory).
*   **Groover, M. P., & Zimmers, E. M. (2014).** *CAD/CAM Computer Aided Design and Manufacturing.* Prentice Hall of India. (While not solely FEA focused, it provides context for CAD integration with analysis).
*   **Zeid, I., & Sivasubramanian, R. (2009).** *CAD/CAM: Theory and Practice.* McGraw Hill Education. (Discusses the role of analysis in the design process).

---