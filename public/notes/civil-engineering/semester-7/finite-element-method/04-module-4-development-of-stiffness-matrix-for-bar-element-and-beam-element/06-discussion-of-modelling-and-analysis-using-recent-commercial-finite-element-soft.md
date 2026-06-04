---
title: "Discussion of modelling and analysis using recent commercial finite element software packages"
subject: "FINITE ELEMENT METHOD"
module: "Module 4: Development of stiffness matrix for bar element and beam element"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba8116e1"
status: "completed"
scrapedAt: "2026-05-20T18:59:05.539Z"
---
# Finite Element Method - Module 4: Development of Stiffness Matrix for Bar and Beam Elements

## Topic: Discussion of Modelling and Analysis using Recent Commercial Finite Element Software Packages

This module focuses on translating the theoretical understanding of bar and beam element stiffness matrices into practical application using modern Finite Element Analysis (FEA) software. We will explore how these software packages simplify the complex manual processes of stiffness matrix assembly, load application, boundary condition implementation, and result interpretation.

---

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   **Understand the role of FEA software in structural analysis:** Appreciate how commercial software automates and streamlines the FEA process.
*   **Identify key components and functionalities in FEA software relevant to bar and beam elements:** Recognize the typical workflows and features used for modelling and analysing structures composed of these elements.
*   **Discuss the process of creating a FEA model for bar and beam elements:** Understand the steps involved in defining geometry, element types, material properties, loads, and boundary conditions.
*   **Explain how FEA software assembles and solves the global stiffness matrix:** Grasp the underlying principles of how software manages the assembly and solution of the system of equations.
*   **Interpret and present results from FEA software for bar and beam elements:** Learn to extract and visualize key results like displacements, stresses, and reactions.
*   **Recognize the advantages and limitations of using commercial FEA software:** Evaluate the benefits and potential pitfalls of relying on software for structural analysis.

---

### 1. Introduction to Commercial FEA Software Packages

*   **Purpose:** Commercial FEA software packages are powerful tools designed to automate and simplify the complex steps involved in the Finite Element Method. They enable engineers to perform sophisticated structural analyses without needing to manually derive and assemble stiffness matrices for each element.
*   **Key Capabilities:**
    *   **Pre-processing:** Building the model, defining geometry, assigning material properties, mesh generation.
    *   **Solution:** Solving the system of equations derived from the FEA formulation.
    *   **Post-processing:** Visualizing and interpreting results (displacements, stresses, strains, reactions).
*   **Popular FEA Software Packages:**
    *   **ANSYS:** Widely used in various industries for structural, thermal, fluid dynamics, and electromagnetic analysis. Offers a comprehensive suite of tools.
    *   **ABAQUS:** Known for its advanced nonlinear analysis capabilities, particularly in material and geometric non-linearity.
    *   **Nastran (MSC Nastran, NX Nastran):** A long-standing and powerful FEA solver, often used in aerospace and automotive industries.
    *   **SolidWorks Simulation:** Integrated CAD-FEA solution, user-friendly for designers and engineers familiar with SolidWorks.
    *   **COMSOL Multiphysics:** Focuses on multiphysics simulations, allowing for coupled analyses of different physical phenomena.
    *   **SAP2000/ETABS (CSI):** Specialized for structural analysis and design, particularly in civil engineering.

---

### 2. Modelling and Analysis of Bar Elements in FEA Software

**2.1. Defining Bar Element Geometry and Connectivity:**

*   **Nodes:** Points in space where elements connect. For bar elements, nodes define the start and end points of each bar.
*   **Elements:** The basic building blocks of the FEA model. A bar element is typically defined by two nodes.
*   **Connectivity:** How elements are connected to each other through nodes. This is crucial for assembling the global stiffness matrix.
    *   **Example:** A truss structure composed of several bars would have nodes shared between adjacent bar elements. The software automatically manages this connectivity.

**2.2. Material Properties:**

*   **Young's Modulus (E):** Relates stress to strain in the elastic region. Essential for stiffness calculation.
*   **Poisson's Ratio (ν):** Relates transverse strain to axial strain (less critical for basic 1D bar elements but important for 2D/3D).
*   **Density (ρ):** Required for static analysis with self-weight or dynamic analysis.
*   **Software Input:** Users typically input these values into a material property database within the software.

**2.3. Element Properties:**

*   **Cross-sectional Area (A):** The area perpendicular to the longitudinal axis of the bar.
*   **Moments of Inertia (I):** For bending in beam elements, but for pure axial bar elements, only the cross-sectional area is directly used for axial stiffness.
*   **Software Input:** These properties are assigned to the elements. Often, the software allows defining beam/bar sections with predefined shapes (e.g., circular, rectangular) from a library, or users can input custom dimensions.

**2.4. Loads:**

*   **Nodal Loads:** Forces or moments applied directly to nodes.
    *   **Example:** A concentrated force applied at a joint in a truss.
*   **Element Loads:** Loads distributed along the length of an element.
    *   **Example:** Uniformly distributed load (UDL) on a member.
    *   **How it works:** The software converts these distributed loads into equivalent nodal loads (using consistent or lumped load vectors) for the stiffness matrix formulation.

**2.5. Boundary Conditions (Constraints):**

*   **Fixed Supports:** Restrain all degrees of freedom at a node (e.g., zero displacement and rotation).
*   **Pinned Supports:** Restrain translational degrees of freedom but allow rotation.
*   **Roller Supports:** Restrain displacement in a specific direction.
*   **Software Input:** Users select nodes and apply specific constraints to their degrees of freedom. This is crucial for preventing rigid body motion and defining the structure's behaviour.

**2.6. Mesh Generation:**

*   **Meshing:** Discretizing the continuous geometry into a finite number of elements.
*   **Element Type:** For bar analysis, the software will automatically use the 1D bar element formulation.
*   **Mesh Density:** The number of elements used to represent a particular component. A finer mesh generally leads to more accurate results but increases computational cost.
    *   **Example:** A long bar might be represented by a single element, or if stress concentrations are expected, it could be discretized into multiple elements.

**2.7. Stiffness Matrix Assembly and Solution:**

*   **Global Stiffness Matrix [K]:** The software internally assembles the individual element stiffness matrices into a larger global matrix that represents the entire structure. The process involves mapping element degrees of freedom to global degrees of freedom based on connectivity.
*   **Load Vector {F}:** The software creates a global load vector by combining all applied nodal loads and the equivalent nodal loads from distributed element loads.
*   **Boundary Condition Application:** Constraints are imposed on the global stiffness matrix and load vector, effectively reducing the number of unknown displacements.
*   **Solving the System of Equations:** The software solves the system of linear algebraic equations: **[K]{u} = {F}** for the unknown nodal displacements {u}.

---

### 3. Modelling and Analysis of Beam Elements in FEA Software

**3.1. Beam Element Degrees of Freedom:**

*   **Axial Displacement (u):** Along the longitudinal axis.
*   **Transverse Displacement (v):** Perpendicular to the longitudinal axis.
*   **Rotation (θ):** Rotation about the longitudinal axis.
*   **Software Handling:** Beam elements in FEA software typically account for both axial and bending behaviour, and potentially shear deformation (depending on the element formulation used by the software).

**3.2. Beam Cross-sectional Properties:**

*   **Area (A):** For axial stiffness.
*   **Area Moment of Inertia (I):** For bending stiffness (typically I_x and I_y).
*   **Shear Area (A_s):** For shear stiffness (important for Timoshenko beam theory).
*   **Section Modulus:** Used in design checks, derived from I and depth.
*   **Software Libraries:** Most software packages offer extensive libraries of standard beam sections (I-beams, channels, tubes, etc.) which automatically provide these properties. Custom sections can also be defined.

**3.3. Loads on Beam Elements:**

*   **Nodal Loads:** Forces and moments applied directly at nodes.
*   **Distributed Loads:**
    *   **Uniformly Distributed Load (UDL):** Constant load along the length.
    *   **Varying Distributed Load:** Load that changes linearly or non-linearly along the length.
    *   **Concentrated Moments:** Applied at specific points along the beam.
*   **Load Combinations:** Software allows defining various load cases (e.g., dead load, live load) and combining them according to design codes for analysis.

**3.4. Boundary Conditions for Beams:**

*   **Fixed End:** Restrains translation and rotation at a node.
*   **Pinned End:** Restrains translation but allows rotation.
*   **Roller Support:** Restrains translation in a specific direction, allowing rotation and translation in other directions.
*   **Elastic Supports:** Springs with defined stiffness can be applied to nodes.
*   **Software Implementation:** Users specify these conditions by selecting nodes and prescribing displacement/rotation values (often zero for fixed/pinned/roller).

**3.5. Meshing for Beams:**

*   **Discretization:** Beams are typically discretized into a series of beam elements.
*   **Mesh Refinement:** For areas with high bending moments or stress concentrations, a finer mesh (more elements) is often required for accuracy.
*   **Element Formulation:** Software might use Euler-Bernoulli beam theory (neglecting shear deformation) or Timoshenko beam theory (including shear deformation). The choice of element formulation affects the stiffness matrix and results.

**3.6. Analysis Process (Similar to Bar Elements but with more DOF):**

*   **Stiffness Matrix Assembly:** The software builds the global stiffness matrix incorporating both axial and bending stiffness terms for each beam element.
*   **Load Application:** Nodal loads and equivalent nodal loads from distributed loads are assembled into the global load vector.
*   **Boundary Condition Enforcement:** Constraints are applied to the system.
*   **Solving for Displacements and Rotations:** The system **[K]{u} = {F}** is solved, where {u} now includes translational and rotational displacements at each node.

---

### 4. Interpreting and Presenting FEA Results

*   **Displacement Plots:** Visualizing the deformed shape of the structure. Scaling factors are often used to exaggerate small displacements for clarity.
*   **Stress Contour Plots:** Displaying the distribution of stress (e.g., Von Mises stress, axial stress, bending stress) throughout the structure.
*   **Strain Contour Plots:** Visualizing the distribution of strain.
*   **Reaction Force Plots:** Displaying the forces and moments at the supports.
*   **Force/Moment Diagrams:** For beam elements, FEA software can often generate shear force diagrams (SFD) and bending moment diagrams (BMD) along the length of individual elements or the entire beam.
*   **Data Tables:** Extracting numerical values for displacements, stresses, forces at specific nodes or elements.
*   **Animation:** Showing the deformation as loads are applied or varying over time (for dynamic analysis).

---

### 5. Advantages and Limitations of Commercial FEA Software

**5.1. Advantages:**

*   **Automation:** Significantly reduces manual calculation effort.
*   **Complexity Handling:** Can model and analyze complex geometries, material behaviors, and loading conditions that are difficult or impossible to solve analytically.
*   **Speed and Efficiency:** Faster analysis turnaround times compared to manual methods.
*   **Visualization:** Powerful post-processing tools provide clear insights into structural behaviour.
*   **Design Iteration:** Facilitates rapid testing of design changes.
*   **Accuracy:** Can achieve high accuracy with appropriate meshing and element selection.
*   **Industry Standard:** Widely accepted in engineering practice and for design validation.

**5.2. Limitations:**

*   **"Black Box" Effect:** Users might not fully understand the underlying FEA principles, leading to misuse or misinterpretation of results.
*   **Garbage In, Garbage Out (GIGO):** The accuracy of the results is highly dependent on the quality of the input model (geometry, material properties, loads, boundary conditions) and meshing.
*   **Mesh Dependency:** Results can be sensitive to mesh density and element quality.
*   **Computational Cost:** Complex models and analyses can require significant computational resources and time.
*   **Cost of Software:** Commercial FEA software can be expensive.
*   **Learning Curve:** While automating calculations, mastering the software and its capabilities requires significant training.
*   **Simplifications:** Software often relies on pre-defined element formulations, which might have inherent limitations (e.g., Euler-Bernoulli vs. Timoshenko beam theory).

---

### 6. Key Concepts to Remember

*   **Nodes and Elements:** The fundamental building blocks of any FEA model.
*   **Degrees of Freedom (DOF):** The independent parameters that define the configuration of a node (e.g., translation in x, y, z; rotation about x, y, z). Bar elements typically have 2 DOF per node (translations), while beam elements have 3 DOF per node (translations and rotation).
*   **Stiffness Matrix:** Relates nodal forces/moments to nodal displacements/rotations for an element or the entire structure.
*   **Assembly:** The process of combining individual element stiffness matrices into a global stiffness matrix.
*   **Boundary Conditions:** Essential for defining how the structure is supported and preventing rigid body motion.
*   **Loads:** Applied forces, moments, or thermal effects that induce deformation and stress.
*   **Meshing:** The process of discretizing the continuous domain into elements.
*   **Post-processing:** Interpreting and visualizing the computed results.
*   **Verification and Validation:** Always crucial. Compare FEA results with analytical solutions (for simple cases) or experimental data to ensure accuracy.

---

### 7. Practice Questions and Exercises

**Question 1 (Conceptual):**

When modelling a simply supported beam with a UDL using FEA software, what are the key inputs you would need to define for the software to perform the analysis? List at least five.

**Question 2 (Conceptual):**

Explain the "Garbage In, Garbage Out" (GIGO) principle in the context of using FEA software for structural analysis. How can you mitigate the risks associated with GIGO?

**Question 3 (Scenario-based):**

You are tasked with analyzing a steel truss bridge.

*   **a)** What type of FEA elements would you primarily use to model the individual truss members?
*   **b)** What material properties would you need to input for these elements?
*   **c)** What are the typical degrees of freedom associated with the nodes of these elements?
*   **d)** Where would you typically apply boundary conditions to represent a pinned support at the end of the bridge?

**Question 4 (Software Workflow):**

Describe the general workflow (steps) you would follow in a commercial FEA software package to model and analyze a cantilever beam subjected to a point load at its free end.

**Question 5 (Result Interpretation):**

After performing an analysis of a beam, the software shows a displacement of 10 mm at the free end. What are some factors that could influence this displacement value, and how might you verify the accuracy of this result?

---

### 8. Answers to Practice Questions

**Answer 1:**

The key inputs would be:
1.  **Geometry:** Defining the length of the beam.
2.  **Element Type:** Selecting a beam element.
3.  **Material Properties:** Young's Modulus (E), Moment of Inertia (I), Area (A), and potentially Shear Area (A_s) depending on the element formulation.
4.  **Boundary Conditions:** Specifying the support conditions at each end (e.g., pinned at one end, roller at the other).
5.  **Loads:** Defining the uniformly distributed load (UDL) along the beam.
6.  **Mesh Density:** Deciding how many elements to discretize the beam into.

**Answer 2:**

The GIGO principle means that the quality and accuracy of the results produced by the FEA software are directly dependent on the quality of the input data provided by the user. If incorrect material properties, loads, boundary conditions, or poor meshing are used, the software will still produce results, but these results will be erroneous and misleading.

To mitigate GIGO risks:
*   **Thorough Pre-processing:** Carefully define all input parameters.
*   **Validate Inputs:** Cross-check material properties, dimensions, and load values with design specifications or experimental data.
*   **Mesh Sensitivity Study:** Refine the mesh and re-run the analysis to check if the results change significantly. If they do, the initial mesh was likely too coarse.
*   **Sanity Checks:** Compare FEA results with simple analytical solutions (where possible) or with expected behaviour based on engineering judgment.
*   **Understand Element Formulations:** Be aware of the assumptions made by the software's element formulations (e.g., Euler-Bernoulli vs. Timoshenko).
*   **Post-processing Verification:** Examine stress concentrations, displacement patterns, and reaction forces for physical reasonableness.

**Answer 3:**

*   **a)** Truss members are typically modelled using **1D bar elements** (or axial elements). These elements are designed to carry axial tension and compression only.
*   **b)** The essential material property for bar elements is the **Young's Modulus (E)**. The **cross-sectional area (A)** of each member is also a crucial element property.
*   **c)** The nodes of bar elements typically have **two translational degrees of freedom**: one along the axis of the bar and one perpendicular to it (though only the axial one is active for stiffness contribution in many formulations, while the transverse might be used for geometric non-linearity or specific element types). For a 2D truss, each node would have DOF for translation in the x and y directions. For a 3D truss, it would be x, y, and z translations.
*   **d)** To represent a pinned support at the end of the bridge, you would typically apply **zero displacement constraints** to **all translational degrees of freedom** of the node at that end. In a 2D analysis, this means setting displacements in both the X and Y directions to zero. In a 3D analysis, X, Y, and Z displacements would be set to zero.

**Answer 4:**

1.  **Launch FEA Software:** Open your chosen FEA software package.
2.  **Create New Project/Model:** Start a new analysis file.
3.  **Define Geometry:**
    *   Select a 2D or 3D Cartesian coordinate system.
    *   Create two keypoints (nodes) defining the start and end of the cantilever beam.
4.  **Define Material Properties:**
    *   Create a new material.
    *   Input the Young's Modulus (E) for steel.
    *   Input Poisson's Ratio (ν) for steel (optional for this specific analysis but good practice).
5.  **Define Element Properties (Section):**
    *   Create a beam section.
    *   Choose a standard cross-section (e.g., rectangular, circular) or input custom dimensions (e.g., width and height for a rectangular beam).
    *   Assign the appropriate Area (A) and Area Moment of Inertia (I) for bending.
6.  **Create Elements:**
    *   Select the beam element type.
    *   Connect the two keypoints created earlier to form a single beam element.
    *   Assign the defined material and section properties to this beam element.
7.  **Apply Boundary Conditions:**
    *   Select the node at the fixed end of the cantilever.
    *   Apply a "Fixed" constraint, which typically restricts all translational and rotational degrees of freedom to zero.
8.  **Apply Loads:**
    *   Select the node at the free end of the cantilever.
    *   Apply a point load (force) in the appropriate direction (e.g., downwards in the Y direction). Specify the magnitude of the load.
9.  **Mesh the Model:**
    *   If the beam was created as a single element, meshing might not be explicitly required unless the software defaults to a minimum element count. If multiple elements were used, ensure the mesh is appropriate.
10. **Solve:**
    *   Initiate the static structural analysis. The software will assemble the global stiffness matrix, incorporate loads and boundary conditions, and solve for the displacements and stresses.
11. **Post-process Results:**
    *   **Displacement:** View the deformed shape and check the maximum displacement at the free end.
    *   **Stress:** Examine the stress distribution along the beam (typically maximum bending stress at the fixed end).
    *   **Reaction Forces:** Check the reactions (shear force and bending moment) at the fixed support.

**Answer 5:**

Factors influencing the displacement of 10 mm:
*   **Applied Load Magnitude:** A larger load will result in larger displacement.
*   **Beam Length (L):** Displacement is highly sensitive to length (e.g., proportional to L³ for a cantilever with a tip load in Euler-Bernoulli theory).
*   **Young's Modulus (E):** A lower E (softer material) will result in larger displacement.
*   **Area Moment of Inertia (I):** A lower I (less stiff cross-section against bending) will result in larger displacement.
*   **Mesh Density:** While less impactful for a single element beam, if the beam was discretized into multiple elements, the accuracy of the displacement calculation can depend on the mesh.
*   **Shear Deformation:** If the element formulation used by the software includes shear deformation (Timoshenko beam theory), this can slightly increase the displacement compared to Euler-Bernoulli theory, especially for shorter, deeper beams.
*   **Boundary Conditions:** Incorrectly defined boundary conditions could lead to erroneous results.

**Verification:**
*   **Analytical Solution:** For a cantilever beam with a point load P at the free end, the maximum deflection is $\delta = \frac{PL^3}{3EI}$ (Euler-Bernoulli). Calculate this value and compare it to the FEA result.
*   **Mesh Refinement Study:** If the beam was modelled with multiple elements, refine the mesh (use more elements) and re-run the analysis. If the displacement converges to a consistent value, the mesh is likely adequate.
*   **Sanity Check:** Does the 10 mm displacement seem reasonable given the dimensions, material, and load applied? If you expect a very small deflection, 10 mm might indicate an error.

---

This concludes Module 4's discussion on modelling and analysis using commercial FEA software packages. Remember that while software automates calculations, a strong understanding of the FEA fundamentals is essential for its effective and accurate application.
