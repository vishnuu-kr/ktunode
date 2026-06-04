---
title: "Perform a structural analysis of an axial bar with varying cross-sectional areas under 
axial load using FEA software to determine the stress distribution, strain distribution, 
and total deformation."
subject: "COMPUTER AIDED DESIGN AND ANALYSIS LAB"
module: "Module 3: Perform a structural analysis of an axial bar with varying cross"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463c1b"
status: "completed"
scrapedAt: "2026-05-20T18:03:42.243Z"
---
# Computer-Aided Design and Analysis Lab: Module 3 - Structural Analysis of Axial Bar with Varying Cross-Section

## Topic: Perform a structural analysis of an axial bar with varying cross-sectional areas under axial load using FEA software to determine the stress distribution, strain distribution, and total deformation.

This module focuses on applying Finite Element Analysis (FEA) to understand the behavior of a fundamental structural element – an axial bar – subjected to an axial load, with a key consideration for varying cross-sectional areas. This is a crucial step in bridging the gap between theoretical understanding and practical application of structural mechanics using modern engineering tools.

---

### Learning Outcomes:

Upon successful completion of this module, students will be able to:

*   **LO1: Model an axial bar with varying cross-sectional areas in CAD software.** (Links to CO1)
*   **LO2: Prepare the geometric model for FEA, including meshing.** (Links to CO1)
*   **LO3: Apply material properties and boundary conditions (axial load and constraints) to the model.** (Links to CO1, CO3)
*   **LO4: Perform a static structural analysis using FEA software.** (Links to CO1, CO3)
*   **LO5: Interpret and visualize the results of the FEA, including stress distribution, strain distribution, and total deformation.** (Links to CO1, CO3)
*   **LO6: Compare FEA results with theoretical calculations (where applicable) for validation.** (Links to CO1, CO3)

---

### Key Concepts and Definitions:

*   **Axial Bar:** A structural element designed to resist forces acting along its longitudinal axis.
*   **Axial Load:** A force applied perpendicular to the cross-section of a bar, causing either tension or compression.
*   **Varying Cross-Sectional Area:** The cross-sectional area of the bar changes along its length. This is common in real-world components to optimize weight or performance.
*   **Finite Element Analysis (FEA):** A numerical method used to predict how a product reacts to real-world forces, vibration, heat, fluid flow, and other physical effects. It works by dividing a complex object into many small, simple pieces called "finite elements."
*   **Stress ($\sigma$):** The internal force per unit area within a material. For an axial bar under axial load, $\sigma = P/A$, where $P$ is the axial force and $A$ is the cross-sectional area.
*   **Strain ($\epsilon$):** The deformation per unit length of a material. For an axial bar, $\epsilon = \Delta L / L$, where $\Delta L$ is the change in length and $L$ is the original length.
*   **Hooke's Law:** For elastic materials, stress is directly proportional to strain: $\sigma = E \epsilon$, where $E$ is the Young's Modulus of the material.
*   **Young's Modulus (E):** A measure of a material's stiffness or resistance to elastic deformation under tensile or compressive stress.
*   **Deformation ($\Delta L$):** The change in the shape or size of an object due to applied forces. For an axial bar, this is the change in length.
*   **Finite Element Method (FEM):** The mathematical framework behind FEA. It involves discretizing the domain into elements, approximating the solution within each element using shape functions, and assembling the element equations into a global system of equations.
*   **Meshing:** The process of dividing a geometric model into a collection of finite elements (e.g., line elements, triangular elements, tetrahedral elements). The quality and density of the mesh significantly impact the accuracy of the FEA results.
*   **Boundary Conditions:** These define how the object interacts with its environment. For this problem, they include:
    *   **Constraints:** Fixing certain degrees of freedom (e.g., preventing displacement at one end of the bar).
    *   **Loads:** Applying forces or pressures to the model.
*   **Degrees of Freedom (DOF):** The independent parameters that define the position and orientation of a body. In 2D, a node can have 2 translational DOFs; in 3D, it can have 3 translational and 3 rotational DOFs.
*   **Element Stiffness Matrix ($[k]$):** A matrix that relates the nodal forces to the nodal displacements for a single finite element.
*   **Global Stiffness Matrix ($[K]$):** The assembled stiffness matrix for the entire structure, relating all nodal forces to all nodal displacements.
*   **Stress Concentration:** An increase in stress in a localized region of a component due to discontinuities or abrupt changes in geometry. Varying cross-sections can lead to stress concentrations.

---

### Theoretical Background:

For a simple axial bar with a *uniform* cross-sectional area $A$ under an axial load $P$, the stress and strain are uniform throughout the bar:

*   **Stress:** $\sigma = \frac{P}{A}$
*   **Strain:** $\epsilon = \frac{\sigma}{E} = \frac{P}{AE}$
*   **Total Deformation:** $\Delta L = \epsilon \times L = \frac{PL}{AE}$

When the cross-sectional area *varies*, these simple formulas are no longer directly applicable to the entire bar. The stress and strain will vary along the length. For a continuous variation of area $A(x)$, where $x$ is the position along the length, the differential equation governing axial deformation is:

$\frac{d}{dx}\left(A(x) E \frac{du}{dx}\right) + f(x) = 0$

where $u(x)$ is the axial displacement at position $x$, and $f(x)$ is the distributed axial load per unit length.

FEA approximates the solution to this equation by discretizing the bar into elements. For each element, the area can be considered constant or varying based on the element type and meshing strategy.

---

### Practical Steps using FEA Software (General Workflow):

The exact steps will vary slightly depending on the specific FEA software used (e.g., ANSYS, SolidWorks Simulation, Creo Simulate, Abaqus, Nastran). This outline provides a general workflow:

**1. Geometric Modeling (CAD Phase):**

*   **Objective:** Create the 3D or 2D representation of the axial bar with its specified varying cross-sectional areas.
*   **Tools:** CAD software (SolidWorks, Creo, Catia, UG NX).
*   **Process:**
    *   Start with a basic sketch of the bar's profile.
    *   Use features like **Extrude**, **Sweep**, or **Revolve** to create the 3D geometry.
    *   To achieve varying cross-sections, techniques include:
        *   **Creating multiple sketches along the length and connecting them with lofting/sweeping features.** (Most common and versatile)
        *   **Using equation-driven curves to define the cross-section's dimensions as a function of length.**
        *   **Creating a simple bar and then using a "cut" or "sweep cut" feature with a varying profile to modify the area.**
*   **Example:** To create a bar that tapers from a diameter $D_1$ to $D_2$ over a length $L$:
    *   Create a sketch of a circle with diameter $D_1$ at one end.
    *   Create another sketch of a circle with diameter $D_2$ at the other end.
    *   Use the **Loft** feature to create the solid body between these two sketches.

**2. Pre-processing (FEA Setup):**

*   **Objective:** Prepare the geometric model for analysis by defining material properties, boundary conditions, and discretizing the model into finite elements.
*   **Transition:** Import the CAD model into the FEA environment.
*   **Steps:**
    *   **Material Properties:**
        *   Assign a material to the bar. For this problem, it's typically a linear elastic material.
        *   Key properties: **Young's Modulus (E)**, **Poisson's Ratio ($\nu$)**, **Density** (if gravity or dynamic analysis is involved, though not primary here).
        *   *Reference:* Moaveni's "Finite Element Analysis: Theory and Application with ANSYS" provides detailed discussions on material models and properties.
    *   **Boundary Conditions:**
        *   **Constraints (Supports):**
            *   Typically, one end of the bar is fixed to prevent translation. This is done by applying "Fixed Support" or by defining zero displacement for all relevant DOFs at a selected face, edge, or node.
            *   *Example:* Select the face at one end and apply a "Fixed Support."
        *   **Loads:**
            *   Apply the axial load $P$. This is usually applied as a "Force" on a face, edge, or node at the opposite end of the bar. Ensure the force is applied in the axial direction.
            *   *Example:* Select the face at the free end and apply a force of magnitude $P$ in the axial direction.
    *   **Meshing:**
        *   **Objective:** Discretize the geometry into finite elements. The choice of element type and mesh density is crucial for accuracy.
        *   **Element Type:** For axial bars, especially in simpler 2D or 1D analyses, **beam elements** or **truss elements** are highly efficient and accurate. If you are analyzing a full 3D solid model, you will use **tetrahedral** or **hexahedral** elements (solid elements). For this topic, using 1D beam/truss elements is often assumed for simplicity and efficiency, but a full 3D solid element analysis is also common.
            *   **1D/Beam/Truss Elements:** These represent the bar as a line. They are computationally efficient and suitable for problems where the cross-section doesn't vary drastically along the length or when the variation is handled by breaking the bar into multiple elements. Each element has axial stiffness.
            *   **3D Solid Elements:** These represent the actual volume of the bar. They capture stress concentrations more accurately, especially at geometric discontinuities, but are computationally more expensive.
        *   **Mesh Density:**
            *   Finer meshes (smaller elements) generally lead to more accurate results but increase computation time.
            *   For varying cross-sections, it's important to have denser meshing in regions where the area changes significantly to capture the local stress and strain variations accurately.
            *   **Mesh Controls:** Use element size controls, inflation, or mapped meshing to refine the mesh in critical areas.
        *   *Reference:* Chapter 4 of Moaveni's book delves into meshing strategies and element types.
        *   **Example:** If your bar tapers, ensure you have multiple elements along the length, especially in the tapering region, to approximate the changing area reasonably well.

**3. Solution (Analysis):**

*   **Objective:** Solve the system of equations derived from the FEA formulation to obtain nodal displacements.
*   **Process:**
    *   Select the type of analysis. For this problem, it's a **Static Structural analysis**.
    *   Initiate the solver. The software assembles the global stiffness matrix, applies boundary conditions, and solves for nodal displacements.
    *   Once displacements are known, the software calculates strains and stresses within each element based on material properties and element formulations.

**4. Post-processing (Results Interpretation):**

*   **Objective:** Visualize and analyze the computed results.
*   **Key Outputs to Examine:**
    *   **Total Deformation (Displacement):**
        *   View the displacement vectors or contours.
        *   Observe how the bar deforms under the axial load and constraints.
        *   You can often probe specific points to get displacement values.
        *   *Example:* The free end of the bar should show the maximum displacement, consistent with theoretical calculations.
    *   **Stress Distribution:**
        *   Typically, **Von Mises stress** is plotted for solid elements, which is a good indicator of yielding in ductile materials. For axial bars, **Normal Stress (Sigma X)** is more directly relevant.
        *   Observe how stress varies along the length. In a tapered bar, stress will be inversely proportional to the cross-sectional area, assuming constant force.
        *   *Example:* In a bar where the cross-sectional area decreases, the stress will increase in that region. If using 1D elements, you might directly see axial stress. If using 3D solid elements, you'll see stress concentrations near geometric changes.
    *   **Strain Distribution:**
        *   Similar to stress, you can view **Von Mises strain** or **Normal Strain (Epsilon X)**.
        *   Strain distribution will mirror the stress distribution (assuming linear elastic material).
        *   *Example:* Strain will be higher in the narrower sections of the bar.
*   **Verification:**
    *   **Comparison with Theory:** For a simple, linearly tapering bar, it might be possible to perform some analytical calculations for specific points to compare with FEA results.
    *   **Mesh Convergence Study:** Run the analysis with progressively finer meshes to ensure the results are converging to a stable value. If results change significantly with mesh refinement, the initial mesh was likely too coarse.
    *   **Check Units:** Ensure all units are consistent throughout the modeling and analysis process.

---

### Example Scenario: A Stepped Axial Bar

Let's consider a stepped axial bar subjected to an axial load. This is a simpler case of varying cross-section, often used to illustrate stress concentration.

**Problem Statement:**
A bar consists of two sections:
*   Section 1: Length $L_1 = 100$ mm, Diameter $D_1 = 20$ mm
*   Section 2: Length $L_2 = 100$ mm, Diameter $D_2 = 10$ mm

The bar is fixed at one end of Section 1. An axial tensile load $P = 10,000$ N is applied to the free end of Section 2. The material is Steel with $E = 200$ GPa and Poisson's Ratio $\nu = 0.3$.

**Theoretical Calculation (Simplified):**

Assuming the load is applied axially and the bar is relatively long, we can analyze each section separately.
*   **Force in Section 1 ($P_1$):** $P_1 = P = 10,000$ N
*   **Force in Section 2 ($P_2$):** $P_2 = P = 10,000$ N

*   **Area of Section 1 ($A_1$):** $\pi (D_1/2)^2 = \pi (20/2)^2 = 100\pi$ mm$^2 \approx 314.16$ mm$^2$
*   **Area of Section 2 ($A_2$):** $\pi (D_2/2)^2 = \pi (10/2)^2 = 25\pi$ mm$^2 \approx 78.54$ mm$^2$

*   **Stress in Section 1 ($\sigma_1$):** $\sigma_1 = P_1 / A_1 = 10000 \, \text{N} / (100\pi \, \text{mm}^2) \approx 31.83$ MPa
*   **Stress in Section 2 ($\sigma_2$):** $\sigma_2 = P_2 / A_2 = 10000 \, \text{N} / (25\pi \, \text{mm}^2) \approx 127.32$ MPa

*   **Strain in Section 1 ($\epsilon_1$):** $\epsilon_1 = \sigma_1 / E = (31.83 \times 10^6 \, \text{Pa}) / (200 \times 10^9 \, \text{Pa}) \approx 0.000159$
*   **Strain in Section 2 ($\epsilon_2$):** $\epsilon_2 = \sigma_2 / E = (127.32 \times 10^6 \, \text{Pa}) / (200 \times 10^9 \, \text{Pa}) \approx 0.000637$

*   **Deformation in Section 1 ($\Delta L_1$):** $\Delta L_1 = \epsilon_1 \times L_1 = 0.000159 \times 100 \, \text{mm} \approx 0.0159$ mm
*   **Deformation in Section 2 ($\Delta L_2$):** $\Delta L_2 = \epsilon_2 \times L_2 = 0.000637 \times 100 \, \text{mm} \approx 0.0637$ mm

*   **Total Deformation:** $\Delta L_{total} = \Delta L_1 + \Delta L_2 \approx 0.0159 + 0.0637 = 0.0796$ mm

**FEA Implementation (Conceptual):**

1.  **CAD Model:** Create a 3D model of the stepped bar. You can model it as two cylinders joined end-to-end or a single body with a diameter change. For the stepped bar, using two cylinders is often easier.
2.  **FEA Setup:**
    *   Import the model.
    *   Assign Steel material properties.
    *   Apply "Fixed Support" to one end face of the larger diameter section.
    *   Apply a tensile force of 10,000 N to the opposite end face of the smaller diameter section, acting along the axial axis.
    *   **Meshing:** Use a mesh with sufficient density. For a stepped bar, ensure there are enough elements in the region where the diameter changes to capture any stress concentration (though for axial load only, stress concentration is minimal in this specific geometry if the transition is smooth. A sharp corner might be an issue, but typically the step is assumed to be a distinct section boundary). Using beam elements is also a valid and efficient approach for this specific problem, where the bar is discretized into two beam elements.
3.  **Solve:** Run the static structural analysis.
4.  **Post-process:**
    *   Examine the **Normal Stress (Sigma X)** plot. You should see a stress value of approximately 31.83 MPa in the larger section and 127.32 MPa in the smaller section.
    *   Examine the **Total Deformation**. You should see a maximum displacement at the loaded end, and the total deformation should be around 0.0796 mm.
    *   Examine the **Normal Strain (Epsilon X)** plot, which will mirror the stress distribution.

---

### Practice Questions:

**Question 1:**
A solid axial bar has a uniform cross-sectional area of $500$ mm$^2$ and a length of $1$ meter. It is made of Aluminum with $E = 70$ GPa. If an axial tensile load of $50$ kN is applied, what is the theoretical axial stress and total elongation of the bar?

**Question 2:**
Consider a tapered axial bar that is $200$ mm long. The cross-section is circular, with a diameter of $30$ mm at one end and $15$ mm at the other end. The diameter varies linearly along the length. The bar is fixed at the end with the larger diameter and subjected to an axial tensile load of $20$ kN at the other end. The material is Steel ($E = 200$ GPa).
(a) Briefly describe how you would model this bar in CAD software for FEA.
(b) What type of FEA element would be most appropriate for this analysis if computational efficiency is a priority?
(c) How would you expect the stress distribution to vary along the length of the bar?

**Question 3:**
You are performing an FEA of a tapered bar with a varying cross-section. You obtain results for stress distribution. If you refine the mesh in the region where the cross-section changes significantly, how would you expect the stress concentration to be affected by this refinement (assuming a sharp geometric transition)?

---

### Answers to Practice Questions:

**Answer 1:**
*   **Area ($A$):** $500$ mm$^2 = 500 \times 10^{-6}$ m$^2$
*   **Load ($P$):** $50$ kN $= 50 \times 10^3$ N
*   **Young's Modulus ($E$):** $70$ GPa $= 70 \times 10^9$ Pa
*   **Length ($L$):** $1$ m

*   **Axial Stress ($\sigma$):**
    $\sigma = \frac{P}{A} = \frac{50 \times 10^3 \, \text{N}}{500 \times 10^{-6} \, \text{m}^2} = 100 \times 10^6 \, \text{Pa} = 100 \, \text{MPa}$

*   **Total Elongation ($\Delta L$):**
    $\Delta L = \frac{PL}{AE} = \frac{(50 \times 10^3 \, \text{N})(1 \, \text{m})}{(500 \times 10^{-6} \, \text{m}^2)(70 \times 10^9 \, \text{Pa})} = \frac{50 \times 10^3}{35 \times 10^6} \, \text{m} = \frac{50}{35000} \, \text{m} \approx 0.001428 \, \text{m}$
    $\Delta L \approx 1.43 \, \text{mm}$

**Answer 2:**
(a) To model the tapered bar:
    *   Start with a sketch of a circle with a diameter of 30 mm at one end.
    *   Create another sketch of a circle with a diameter of 15 mm at the other end.
    *   Use the **Loft** feature in CAD software to create the solid body connecting these two circular sketches, ensuring the diameter variation is linear.
(b) The most appropriate FEA element for computational efficiency would be **1D beam elements** or **truss elements**. These elements are designed to capture axial behavior along a line and can accurately represent the bar's axial load-deformation characteristics, especially if the mesh is refined appropriately. If a full 3D stress analysis including potential bending or shear effects were needed, 3D solid elements would be used, but for a purely axial load case and for efficiency, 1D elements are preferred.
(c) The stress distribution would vary inversely with the cross-sectional area. Since the diameter decreases linearly from 30 mm to 15 mm, the cross-sectional area decreases more rapidly towards the smaller end. Therefore, the axial stress will be lowest at the fixed end (larger area) and highest at the loaded end (smaller area).

**Answer 3:**
If you refine the mesh in the region of a sharp geometric transition (like a fillet or a sharp corner in the cross-section), you would expect the **calculated stress concentration to increase and become more accurate**. A coarser mesh would have smoothed out the sharp geometric feature, leading to an underestimation of the localized stress. A finer mesh allows the FEA solver to better represent the geometry and capture the higher stress gradients that occur at such discontinuities.

---

### Important Points to Remember:

*   **Mesh Quality is Crucial:** The accuracy of FEA results heavily depends on the quality and density of the mesh. For varying cross-sections, ensure sufficient elements in regions of significant geometric change.
*   **Element Type Matters:** Choose element types that are appropriate for the physics of the problem. 1D beam/truss elements are efficient for axial members.
*   **Boundary Conditions:** Precisely define the constraints and loads. An incorrectly applied boundary condition will lead to erroneous results.
*   **Units Consistency:** Always maintain consistency in units throughout the entire FEA workflow.
*   **Verification:** Compare FEA results with theoretical calculations or experimental data whenever possible. Performing a mesh convergence study is a good practice to ensure result reliability.
*   **Understanding Von Mises vs. Normal Stress:** For axial bar problems, while Von Mises stress is a general failure criterion, the **Normal Stress (often $\sigma_x$)** is the most relevant parameter to analyze as it directly relates to the axial force and area.
*   **Software-Specific Features:** Familiarize yourself with the specific meshing tools, load application methods, and result visualization options of the FEA software you are using.

---

### Alignment with Course Outcomes:

*   **CO1: Apply CAD and FEA tools to design and simulate mechanical systems.**
    *   This module directly addresses this by having students model a component in CAD (LO1) and then use FEA tools to simulate its structural behavior under load (LO2-LO5).
*   **CO3: Conduct thermal and stress analysis on mechanical components under different loading conditions.**
    *   This module specifically focuses on stress analysis under an axial loading condition, allowing students to gain practical experience in performing and interpreting stress analysis (LO3-LO5).

---
This concludes the study notes for performing a structural analysis of an axial bar with varying cross-sectional areas under axial load using FEA software. Remember to practice these steps with your chosen FEA software.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
