---
title: "Perform the structural analysis of a thin plate (plane stress case) subjected to in plane 
loads"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS LAB"
module: "Module 5: Perform the structural analysis of a thin plate (plane stress case) subjected to in plane 
loads"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463c1f"
status: "completed"
scrapedAt: "2026-05-20T18:03:43.636Z"
---
# COMPUTER AIDED DESIGN AND ANALYSIS LAB: Module 5 - Structural Analysis of Thin Plates (Plane Stress)

This module focuses on understanding and performing the structural analysis of thin plates subjected to in-plane loads, specifically within the framework of the plane stress assumption. This is a fundamental topic in mechanical design and analysis, allowing engineers to predict how thin structures will deform and how stresses will distribute under load.

## Learning Outcomes:

Upon successful completion of this module, students will be able to:

*   **LO1:** Understand the concept of plane stress and its applicability to thin plates.
*   **LO2:** Identify and apply appropriate finite element analysis (FEA) techniques for thin plate analysis.
*   **LO3:** Model a thin plate with in-plane loads using CAD software.
*   **LO4:** Set up and execute a structural analysis simulation in FEA software.
*   **LO5:** Interpret and analyze the results of a stress and displacement analysis for a thin plate.
*   **LO6:** Evaluate the accuracy and limitations of the FEA results based on the plane stress assumption.

## Course Outcomes Alignment:

This module directly contributes to the following Course Outcomes:

*   **CO1: Apply CAD and FEA tools to design and simulate mechanical systems.** (Knowledge Level: K3) - Students will use CAD to model the plate and FEA tools to simulate its behavior.
*   **CO3: Conduct thermal and stress analysis on mechanical components under different loading conditions.** (Knowledge Level: K5) - This module specifically addresses stress analysis under in-plane loading.

## 1. Introduction to Thin Plates and Plane Stress

### 1.1 What is a Thin Plate?

A thin plate is a structural element where one dimension (thickness) is significantly smaller than the other two dimensions (length and width). This geometric characteristic allows for certain simplifying assumptions in structural analysis.

### 1.2 The Plane Stress Assumption

**Definition:** Plane stress is a state of stress in a thin plate where the stress components perpendicular to the plane of the plate are assumed to be zero.

*   In Cartesian coordinates (x, y, z), where the plate lies in the xy-plane and z is the thickness direction:
    *   $\sigma_z = 0$ (Normal stress in the z-direction is zero)
    *   $\tau_{xz} = 0$ (Shear stress on the xz-plane is zero)
    *   $\tau_{yz} = 0$ (Shear stress on the yz-plane is zero)

**Applicability:** This assumption is valid when the applied loads are within the plane of the plate (in-plane loads) and the thickness of the plate is small compared to its other dimensions. Examples include:

*   Sheet metal components
*   Diaphragms
*   Bridges (deck analysis)
*   Aerospace panels

**Why is it useful?** By making the plane stress assumption, we reduce a 3D stress problem to a 2D problem, significantly simplifying the mathematical formulation and computational effort.

**Reference:** Moaveni's "Finite Element Analysis: Theory and Application with ANSYS" often discusses assumptions like plane stress and plane strain in the context of FEA element formulation.

### 1.3 Types of In-Plane Loads

In-plane loads are forces or pressures applied parallel to the plane of the thin plate. Common examples include:

*   **Uniform Tensile/Compressive Loads:** Applied uniformly across an edge or surface.
*   **Concentrated Loads:** Applied at specific points.
*   **Pressure Loads:** Distributed uniformly or non-uniformly over a surface.
*   **Shear Loads:** Applied parallel to the surface.

## 2. Theoretical Basis: Elasticity and Strain-Displacement Relations

While this lab focuses on FEA, understanding the underlying mechanics is crucial.

### 2.1 Hooke's Law in 2D (Plane Stress)

For an isotropic, linear elastic material, Hooke's Law relates stress and strain:

$\epsilon_x = \frac{1}{E}(\sigma_x - \nu \sigma_y)$
$\epsilon_y = \frac{1}{E}(\sigma_y - \nu \sigma_x)$
$\gamma_{xy} = \frac{1}{G}\tau_{xy}$

Where:
*   $\epsilon_x, \epsilon_y$: Normal strains in the x and y directions.
*   $\gamma_{xy}$: Shear strain in the xy plane.
*   $\sigma_x, \sigma_y$: Normal stresses in the x and y directions.
*   $\tau_{xy}$: Shear stress in the xy plane.
*   $E$: Young's Modulus (Modulus of Elasticity)
*   $\nu$: Poisson's Ratio
*   $G$: Shear Modulus

**Relationship between $E$, $\nu$, and $G$:** $G = \frac{E}{2(1+\nu)}$

### 2.2 Strain-Displacement Relations in 2D

These relations link the strains to the displacement components ($u$ in x and $v$ in y):

$\epsilon_x = \frac{\partial u}{\partial x}$
$\epsilon_y = \frac{\partial v}{\partial y}$
$\gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}$

**Important Point:** FEA approximates these continuous relations using discrete elements and nodal displacements.

## 3. Finite Element Analysis (FEA) for Thin Plates

FEA is a numerical method that breaks down a complex problem into smaller, simpler parts called "finite elements." These elements are interconnected at points called "nodes."

### 3.1 FEA Process Overview

1.  **Preprocessing:**
    *   **Geometry Definition:** Creating the shape of the plate.
    *   **Material Properties:** Assigning Young's Modulus, Poisson's Ratio, etc.
    *   **Meshing:** Discretizing the geometry into finite elements (e.g., triangles, quadrilaterals).
    *   **Boundary Conditions:** Defining constraints (fixed supports, rollers) and applied loads (forces, pressures).
2.  **Solution:**
    *   The FEA software solves a system of algebraic equations (typically $[K]\{u\} = \{F\}$) to determine nodal displacements.
    *   $[K]$: Global stiffness matrix
    *   $\{u\}$: Vector of nodal displacements
    *   $\{F\}$: Vector of nodal forces
3.  **Postprocessing:**
    *   Interpreting and visualizing the results (stresses, strains, displacements).

### 3.2 Element Types for Thin Plate Analysis (Plane Stress)

Commonly used elements in FEA for plane stress analysis of thin plates include:

*   **2D Isoparametric Elements:**
    *   **Quadrilateral Elements (Q4, Q8):** Generally offer higher accuracy for a given number of nodes compared to triangles.
    *   **Triangular Elements (T3, T6):** Simpler to mesh complex geometries but might require a finer mesh for comparable accuracy.

**Reference:** Moaveni's "Finite Element Analysis: Theory and Application with ANSYS" provides detailed explanations of different element types, their stiffness matrix formulations, and their suitability for various problems.

### 3.3 Modeling a Thin Plate in CAD Software

*   **Software:** SolidWorks, Creo Parametric, CATIA, NX are all capable CAD tools.
*   **Process:**
    1.  **Sketching:** Draw the 2D profile of the plate.
    2.  **Extrude (Thin Feature):** Create the plate geometry. For FEA, it's often beneficial to keep the thickness well-defined. Alternatively, one can create a 2D planar surface for direct 2D FEA.
    3.  **Save:** Save the model in a format compatible with FEA software (e.g., STEP, IGES).

**Example (SolidWorks/Creo):**
Imagine a rectangular plate of size 100mm x 50mm with a thickness of 2mm.
1.  Start a new part.
2.  Create a sketch of a rectangle on a plane (e.g., Front Plane). Dimension it 100mm x 50mm.
3.  Use the "Extruded Boss/Base" feature and specify a thickness of 2mm.
4.  Alternatively, if the FEA software can directly import 2D sketches or surfaces, you might only need to create the 100mm x 50mm rectangle on a plane and save it as a 2D entity.

### 3.4 Setting Up and Executing the FEA Simulation

This is where you interact with FEA software like ANSYS Workbench, SolidWorks Simulation, Creo Simulate, CATIA Analysis & Simulation, or NX Nastran.

**General Steps:**

1.  **Import Geometry:** Load the CAD model.
2.  **Define Analysis Type:** Select "Static Structural" or "Static Analysis."
3.  **Assign Material:**
    *   Select a material from the library or define custom properties (e.g., Steel: E = 200 GPa, $\nu$ = 0.3).
    *   **Important:** Ensure the material properties are appropriate for plane stress analysis. FEA software usually has specific settings for this.
4.  **Meshing:**
    *   Generate a mesh on the plate geometry.
    *   **Mesh Size:** Control the element size. Finer meshes generally lead to more accurate results but require more computational resources.
    *   **Element Type:** Select appropriate 2D elements (e.g., Plane 182 or Plane 82 in ANSYS Mechanical).
5.  **Apply Boundary Conditions:**
    *   **Supports:**
        *   *Fixed Support:* Restrains all degrees of freedom (translation and rotation if applicable).
        *   *Displacement:* Constrain specific degrees of freedom (e.g., fix edges in certain directions).
        *   *Symmetry:* If the geometry and loading are symmetric, you can model only a portion and apply symmetry boundary conditions.
    *   **Loads:**
        *   *Force:* Apply forces at nodes or on edges/surfaces.
        *   *Pressure:* Apply pressure loads on faces.
        *   *Traction:* Apply forces per unit area in specific directions.
6.  **Solve:** Initiate the FEA solver.

**Example Scenario:**
A rectangular steel plate (100mm x 50mm x 2mm) with one short edge fixed and a uniform tensile load of 1000 N applied to the opposite short edge.

*   **Geometry:** Rectangular plate.
*   **Material:** Steel (E=200 GPa, $\nu$=0.3).
*   **Mesh:** Use quadrilateral elements with a mesh size that provides reasonable detail without being overly dense.
*   **Boundary Conditions:**
    *   Fixed support on one 50mm edge (all DOFs constrained).
    *   Normal load of 1000 N applied as a force or pressure on the opposite 50mm edge (e.g., distributed as 1000 N / 50 mm = 20 N/mm on the edge).
*   **Analysis:** Static structural.

**Reference:** "Engineering Design with SolidWorks 2019" and "Creo Parametric 6.0 for Engineers and Designers" provide hands-on guidance on setting up simulations within their respective software environments. "Finite Element Analysis: Theory and Application with ANSYS" is invaluable for understanding the underlying principles and specific ANSYS commands.

## 4. Postprocessing and Interpretation of Results

Once the FEA solver has finished, the results need to be analyzed.

### 4.1 Key Results to Analyze

*   **Displacements:**
    *   Maximum displacement in relevant directions.
    *   Deformed shape of the plate.
*   **Stresses:**
    *   Von Mises stress: A scalar measure of equivalent stress that indicates yielding.
    *   Principal Stresses ($\sigma_1, \sigma_2, \sigma_3$): The maximum and minimum normal stresses. In plane stress, $\sigma_3$ is typically 0.
    *   Shear Stresses ($\tau_{xy}$).
*   **Strains:**
    *   Normal strains ($\epsilon_x, \epsilon_y$).
    *   Shear strains ($\gamma_{xy}$).

### 4.2 Visualizing Results

FEA software provides powerful visualization tools:

*   **Contour Plots:** Display stress or displacement values across the entire model using color gradients.
*   **Deformed Shape Plots:** Show the exaggerated deformed geometry.
*   **Vector Plots:** Visualize stress or strain directions.
*   **Probe/Query Tools:** Inspect specific values at individual points or elements.

### 4.3 Evaluating Accuracy and Limitations

*   **Mesh Convergence:**
    *   Run the analysis with progressively finer meshes.
    *   Observe if the results (e.g., maximum stress) stabilize. If they change significantly, the initial mesh was too coarse.
*   **Plane Stress Assumption Limitations:**
    *   **Thick Plates:** The assumption breaks down for thick plates where through-thickness stresses become significant.
    *   **Concentrated Loads/Supports:** Stress concentrations can occur near points of load application or geometric discontinuities. The plane stress assumption might not be perfectly accurate at these highly localized regions. FEA might predict infinite stresses at sharp corners, which is a singularity due to the idealization.
    *   **Through-Thickness Gradients:** If strains or stresses vary significantly through the thickness, plane stress is not appropriate.
*   **Material Behavior:** Assumes linear elasticity. Non-linear material behavior (plasticity, hyperelasticity) requires different analysis types.
*   **Boundary Conditions:** The accuracy of the simulation heavily depends on how realistically the boundary conditions and loads are applied.

**Important Point:** FEA results are approximations. Understanding the underlying theory and the assumptions made is crucial for interpreting these results correctly.

## 5. Practice Questions and Exercises

These questions are designed to reinforce your understanding.

---

### Question 1: Conceptual Understanding

**Scenario:** Consider a thin square steel plate with sides of 100 mm and a thickness of 1 mm. It is subjected to a uniform tensile stress of 50 MPa applied along one pair of opposite edges, with the other pair of edges free.

**Question:**
a) What are the primary assumptions made in the plane stress analysis for this plate?
b) If the plate is made of steel with E = 200 GPa and $\nu$ = 0.3, what is the expected strain in the direction of the applied stress? (Assume elastic behavior).
c) What would be the expected strain in the perpendicular direction?

---

### Question 2: FEA Setup

**Scenario:** You need to analyze a circular thin aluminum plate (Radius = 50 mm, Thickness = 2 mm) with its edge fixed. A uniform pressure of 5 MPa is applied to one of its faces.

**Question:**
Describe the key steps you would follow to set up this analysis in an FEA software (e.g., ANSYS Workbench). Specify:
a) The analysis type.
b) The material properties you would need to define (at least E and $\nu$).
c) The types of boundary conditions and loads to be applied.
d) What kind of elements would be suitable for meshing this circular plate.

---

### Question 3: Result Interpretation

**Scenario:** You have completed an FEA simulation of a cantilevered thin plate subjected to a tip load. The results show a maximum Von Mises stress of 350 MPa at the fixed edge.

**Question:**
a) What does the Von Mises stress value of 350 MPa represent?
b) If the yield strength of the plate material is 300 MPa, what would you conclude about the structural integrity of the plate under this load?
c) What are some potential sources of error or inaccuracy in this FEA result?

---

## Answers to Practice Questions

---

### Answer to Question 1:

a) **Assumptions for Plane Stress:**
    *   The stress perpendicular to the plane of the plate is zero ($\sigma_z = 0$).
    *   The shear stresses acting on the planes perpendicular to the thickness are zero ($\tau_{xz} = 0$, $\tau_{yz} = 0$).
    *   These assumptions are valid because the plate is thin and the loads are applied in-plane.

b) **Strain in the direction of applied stress ($\epsilon_x$):**
    *   Given: $\sigma_x = 50$ MPa, $E = 200$ GPa = $200 \times 10^3$ MPa, $\nu = 0.3$.
    *   Under plane stress, $\sigma_y = 0$ (since the edges are free to expand/contract in that direction).
    *   Using Hooke's Law: $\epsilon_x = \frac{1}{E}(\sigma_x - \nu \sigma_y)$
    *   $\epsilon_x = \frac{1}{200 \times 10^3 \text{ MPa}}(50 \text{ MPa} - 0.3 \times 0 \text{ MPa})$
    *   $\epsilon_x = \frac{50}{200 \times 10^3} = 0.00025$ or $250 \mu\epsilon$.

c) **Strain in the perpendicular direction ($\epsilon_y$):**
    *   Using Hooke's Law: $\epsilon_y = \frac{1}{E}(\sigma_y - \nu \sigma_x)$
    *   $\epsilon_y = \frac{1}{200 \times 10^3 \text{ MPa}}(0 \text{ MPa} - 0.3 \times 50 \text{ MPa})$
    *   $\epsilon_y = \frac{-15}{200 \times 10^3} = -0.000075$ or $-75 \mu\epsilon$.
    *   The negative sign indicates contraction in the perpendicular direction due to Poisson's effect.

---

### Answer to Question 2:

a) **Analysis Type:** Static Structural (or Static Analysis).

b) **Material Properties:**
    *   **Young's Modulus (E):** Required for stiffness. For aluminum, a typical value is around 70 GPa ($70 \times 10^3$ MPa).
    *   **Poisson's Ratio ($\nu$):** Required for the relationship between stresses and strains. For aluminum, a typical value is around 0.33.
    *   (Optional but good practice: Density, if gravity or other inertial effects were considered).

c) **Boundary Conditions and Loads:**
    *   **Boundary Condition:** Fixed Support on the entire circumference of the circular edge. This constrains all degrees of freedom (translation in x, y, and rotation if 3D elements were used, but for plane stress 2D elements, typically only translations in x and y are constrained).
    *   **Load:** Pressure of 5 MPa applied to the flat face of the plate. The pressure is normal to the surface and will be acting in the through-thickness direction *if* we were considering a 3D thick plate. However, for a 2D plane stress analysis, the pressure would be applied as a force/traction on the circular edge *if* it were acting along the plane. If the pressure is truly applied perpendicular to the plate's plane, then the plane stress assumption may not be the most appropriate; however, if it's a distributed in-plane load, it could be modeled as traction. *Correction for typical interpretation:* If the pressure is on the "face" of the plate, it's typically a normal pressure in the z-direction, which is zero in plane stress. Let's re-interpret the question assuming the "pressure" is an *in-plane* distributed load for a plane stress context. If the pressure is a distributed load on the edge *acting inwards*, it would be a traction boundary condition. Let's assume the question meant a distributed in-plane load on the edge for the sake of plane stress context.
        *   *Alternative Interpretation (most likely for plane stress lab):* The pressure is meant to be interpreted as a uniform load *applied onto the plane* of the plate, perhaps as a distribution along the edge or over a portion of the face. For a circular plate with fixed edge, a common scenario is a pressure load *on the face* leading to radial and hoop stresses. If it's a uniform pressure *acting inwards* on the edge, it would be a traction load. For a plane stress analysis simulating a pressure *on the face*, the FEA software would typically have a "Pressure" load type that acts normal to the surface. If you are doing a 2D plane stress analysis, this pressure might be applied as a force per unit length along the edge if it's a distributed force, or it might be interpreted differently by the software depending on its 2D capabilities. *Assuming the intent is a distributed in-plane load along the edge:* Let's consider a scenario where a uniform outward pressure is applied to the face. This would induce radial stresses. For simplicity in a 2D plane stress, one might consider a load applied to the edge. If the pressure is 5 MPa, and it's acting radially outward on the circumference, and we are doing plane stress, this would be handled differently.
        *   *Clarification for FEA setup:* The most common interpretation of "pressure on one of its faces" for a plane stress problem is an in-plane pressure that causes stresses $\sigma_x, \sigma_y, \tau_{xy}$. If the pressure is truly normal to the plane (z-direction), plane stress is not appropriate. Let's assume the pressure is applied as a distributed traction force along the circular edge, pushing inwards or outwards. If it's pushing inwards, it would be a compressive load. If it's pushing outwards, it would be a tensile load.
        *   Let's assume the pressure is applied as a distributed load along the edge, acting normal to the edge *inwards* (compressive). This would be a **traction boundary condition**. The magnitude would be $P = 5$ MPa.

d) **Suitable Elements:**
    *   **Quadrilateral Elements (e.g., Quad 4-node or Quad 8-node)** would be suitable for meshing the circular plate. They generally provide better accuracy than triangular elements for this geometry.
    *   **Triangular Elements (e.g., Tri 3-node or Tri 6-node)** could also be used, especially for complex geometries, but might require a finer mesh for comparable accuracy.

---

### Answer to Question 3:

a) **Von Mises Stress:** The Von Mises stress of 350 MPa represents an equivalent uniaxial stress that would cause the same yielding in a tensile test, based on the Von Mises yield criterion. It's a single value that combines the multi-axial stress state into a scalar quantity for easy comparison with the material's yield strength.

b) **Structural Integrity:** Since the maximum Von Mises stress (350 MPa) is greater than the yield strength of the material (300 MPa), the plate is likely to undergo **plastic deformation** (yielding) at the point of maximum stress. This means the plate will permanently deform and may not return to its original shape after the load is removed. This is generally considered a failure condition for many engineering applications, especially those requiring elastic behavior.

c) **Potential Sources of Error/Inaccuracy:**
    *   **Mesh Coarseness:** The mesh might be too coarse in the region of high stress concentration at the fixed edge, leading to an underestimation or overestimation of the true stress. (A refinement study would check this).
    *   **Plane Stress Assumption:** While likely valid for a thin plate, there might be minor stress gradients through the thickness at the fixed edge that are neglected by the plane stress assumption, especially at the very sharp corner.
    *   **Boundary Condition Simplification:** The "fixed" support is an idealization. Real-world supports may allow for slight rotations or deformations.
    *   **Load Application:** The idealized tip load might not perfectly represent how the load is actually applied.
    *   **Element Formulation:** The specific type of 2D element used and its formulation (e.g., number of integration points) can introduce approximation errors.
    *   **Material Properties:** The assumed Young's Modulus and Poisson's Ratio might not perfectly match the actual material.

---

## Important Points to Remember:

*   **Plane Stress vs. Plane Strain:** Understand the conditions under which each assumption is valid. Plane strain applies to long structures with loads and constraints in the direction of length (e.g., dams, tunnel linings).
*   **Mesh Quality:** A good mesh is critical for accurate FEA results. Pay attention to element aspect ratios and ensure sufficient mesh density in areas of high stress gradients.
*   **Boundary Conditions are Key:** Incorrectly defined boundary conditions will lead to incorrect results, regardless of the mesh quality or material properties.
*   **Stress Concentrations:** Be aware that sharp corners and sudden changes in geometry can lead to high localized stresses, which might be amplified by idealizations.
*   **FEA is an Approximation:** Always critically evaluate your results. Perform mesh convergence studies and compare with theoretical solutions or experimental data where possible.
*   **Von Mises Stress:** A primary indicator for yielding in ductile materials under multi-axial stress states.
*   **Software Manuals:** Refer to the specific manuals for your FEA software (ANSYS, SolidWorks Simulation, etc.) for detailed instructions on element selection, load application, and result interpretation.

This concludes Module 5. You should now have a solid foundation for performing structural analysis of thin plates under in-plane loads using CAD and FEA tools.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
