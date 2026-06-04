---
title: "Solve a steady-state heat conduction problem using FEA software to determine the 
temperature distribution within a solid material."
subject: "COMPUTER AIDED DESIGN AND ANALYSIS LAB"
module: "Module 10: Solve a steady"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463c29"
status: "completed"
scrapedAt: "2026-05-20T18:03:47.138Z"
---
# COMPUTER AIDED DESIGN AND ANALYSIS LAB

## Module 10: Solve a Steady-State Heat Conduction Problem

### Topic: Solve a steady-state heat conduction problem using FEA software to determine the temperature distribution within a solid material.

---

### 1. Introduction to Steady-State Heat Conduction

**Key Concepts:**

*   **Heat Conduction:** The transfer of thermal energy through a material without the bulk movement of the material itself. It occurs due to the vibration and collision of adjacent atoms and molecules.
*   **Steady-State:** A condition where the temperature at any point within the material does not change with time. This implies that the rate of heat entering a control volume is equal to the rate of heat leaving it, and there is no accumulation or depletion of thermal energy.
*   **Heat Flux:** The rate of heat transfer per unit area. It is a vector quantity and points in the direction of the heat flow.
*   **Thermal Conductivity (k):** A material property that quantifies its ability to conduct heat. Materials with high thermal conductivity (e.g., metals) transfer heat more efficiently than materials with low thermal conductivity (e.g., insulators).
*   **Fourier's Law of Heat Conduction:** The fundamental law governing heat conduction. For one-dimensional conduction, it states:
    $q'' = -k \frac{dT}{dx}$
    where:
    *   $q''$ is the heat flux (W/m²)
    *   $k$ is the thermal conductivity (W/m·K)
    *   $\frac{dT}{dx}$ is the temperature gradient in the x-direction (K/m)

**Relevant Textbooks:**

*   **Fundamentals of Heat and Mass Transfer by Bergman, Lavine, Incropera, and DeWitt:** This textbook provides a thorough foundation in heat transfer principles, including steady-state conduction. Chapter 2, "One-Dimensional, Steady-State Conduction," is particularly relevant.

---

### 2. Finite Element Analysis (FEA) for Heat Conduction

**Key Concepts:**

*   **Discretization:** The process of dividing a continuous domain (the solid material) into a finite number of smaller, simpler shapes called elements (e.g., triangles, quadrilaterals, tetrahedrons, hexahedrons).
*   **Nodes:** Points where the elements are connected. These are the locations where the unknown variable (temperature in this case) will be solved.
*   **Element Stiffness Matrix:** For heat conduction, each element has a conductivity matrix that relates the nodal temperatures to the heat fluxes at the nodes. This matrix is derived from Fourier's Law and the element geometry.
*   **Global Stiffness Matrix:** The assembly of all element stiffness matrices into a single, large matrix that represents the entire system.
*   **Boundary Conditions:** Essential information that defines the physical constraints of the problem. For heat conduction, these typically include:
    *   **Prescribed Temperature (Dirichlet Boundary Condition):** The temperature is fixed at certain nodes (e.g., one side of the object is held at a constant temperature).
    *   **Prescribed Heat Flux (Neumann Boundary Condition):** A specified heat flux is applied to a surface. This often translates to specifying the heat flow entering or leaving a boundary.
    *   **Convection Boundary Condition:** Heat transfer between a surface and a surrounding fluid. This is characterized by a convective heat transfer coefficient ($h$) and the fluid temperature ($T_\infty$). It is often represented as a heat flux proportional to $(T_{surface} - T_\infty)$.

**Relevant Textbooks:**

*   **Finite Element Analysis: Theory and Application with ANSYS by Saeed Moaveni:** This book offers a comprehensive guide to FEA principles and their application using ANSYS, a popular FEA software. Chapters on thermal analysis will be highly beneficial.
*   **Engineering Design with SolidWorks 2019 by David C. Planchard and Marie P. Planchard:** While focused on SolidWorks for design, it may also cover aspects of thermal simulation within the software.
*   **Creo Parametric 6.0 for Engineers and Designers by Prof. Sham Tickoo:** Similar to SolidWorks, this text might touch upon thermal analysis capabilities within Creo.

**Alignment with Course Outcomes:**

*   **CO1: Apply CAD and FEA tools to design and simulate mechanical systems.** (Knowledge Level: K3) - This topic directly involves using FEA software (an FEA tool) to simulate a physical phenomenon (heat conduction).
*   **CO3: Conduct thermal and stress analysis on mechanical components under different loading conditions.** (Knowledge Level: K5) - This topic is a fundamental aspect of thermal analysis.

---

### 3. Steps in Performing a Steady-State Heat Conduction Analysis using FEA Software

The general workflow for solving a steady-state heat conduction problem using FEA software (e.g., ANSYS, SolidWorks Simulation, Creo Simulate) is as follows:

**3.1. Preprocessing:**

*   **Geometry Creation/Import:**
    *   Define the physical domain of the solid material. This can be done by creating the geometry directly within the FEA software or importing it from CAD software (e.g., SolidWorks, Creo, CATIA, NX).
    *   **Example:** Designing a rectangular metal plate.
*   **Material Property Definition:**
    *   Assign appropriate material properties to the geometry. The most crucial property for this analysis is **thermal conductivity (k)**. Other relevant properties might include density and specific heat, although they are not directly used in steady-state analysis but are important for transient analysis.
    *   **Example:** Assigning aluminum with a thermal conductivity of 205 W/m·K to the rectangular plate.
*   **Meshing:**
    *   Discretize the geometry into a mesh of finite elements. The choice of element type (e.g., 2D quadrilateral, 3D hexahedral) depends on the geometry and the desired accuracy.
    *   **Mesh Density:** A finer mesh generally leads to more accurate results but increases computation time. Mesh convergence studies are important to ensure results are independent of mesh size.
    *   **Example:** Creating a mesh of triangular or quadrilateral elements on the rectangular plate.
*   **Applying Boundary Conditions:**
    *   Define the thermal boundary conditions on the surfaces of the model.
    *   **Temperature Boundary Condition:** Specify a fixed temperature on one or more surfaces.
        *   **Example:** Setting the temperature of the left edge of the plate to 100°C.
    *   **Heat Flux Boundary Condition:** Specify a heat flux entering or leaving a surface.
        *   **Example:** Applying a heat flux of 5000 W/m² to the bottom edge of the plate.
    *   **Convection Boundary Condition:** Specify a convective heat transfer coefficient and the ambient fluid temperature.
        *   **Example:** Applying a convection coefficient of 10 W/m²·K to the top edge of the plate with an ambient temperature of 20°C.

**3.2. Solution:**

*   **Solving the System of Equations:**
    *   The FEA software assembles the global stiffness matrix and the load vectors (derived from boundary conditions).
    *   It then solves the system of linear equations: $[K]\{T\} = \{F\}$, where:
        *   $[K]$ is the global conductivity matrix.
        *   $\{T\}$ is the vector of unknown nodal temperatures.
        *   $\{F\}$ is the vector of nodal heat fluxes.
*   **Computational Aspects:** The solver uses numerical techniques (e.g., direct solvers or iterative solvers) to find the temperature at each node.

**3.3. Postprocessing:**

*   **Visualization of Results:**
    *   Display the computed temperature distribution across the model, often as a color contour plot.
    *   **Example:** A heat map showing the temperature gradient across the rectangular plate.
*   **Data Extraction:**
    *   Extract specific temperature values at particular points or along lines.
    *   Calculate derived quantities like heat flux, heat flow rate, and thermal gradients.
*   **Verification and Validation:**
    *   Compare FEA results with analytical solutions (if available for simplified cases) or experimental data to validate the accuracy of the model and results.
    *   **Example:** If an analytical solution exists for a 1D bar with fixed ends and a heat source, compare the FEA results to it.

**Relevant Textbooks:**

*   **Finite Element Analysis: Theory and Application with ANSYS by Saeed Moaveni:** Chapters on thermal analysis will detail the application of these steps within ANSYS.

---

### 4. Example: Steady-State Heat Conduction in a Rectangular Plate

**Problem Statement:**

Consider a rectangular plate of dimensions 0.2m x 0.1m made of aluminum (k = 205 W/m·K). The left edge (at x=0) is maintained at a constant temperature of 100°C. The right edge (at x=0.2m) is exposed to convection to the ambient air at 20°C with a convective heat transfer coefficient of 15 W/m²·K. The top and bottom edges are insulated (adiabatic, meaning no heat transfer across them). Determine the steady-state temperature distribution within the plate.

**FEA Software Steps (Conceptual - specific commands vary by software):**

1.  **Create Geometry:** Sketch a rectangle with width 0.2m and height 0.1m.
2.  **Assign Material:** Create a new material named "Aluminum" and set its thermal conductivity to 205 W/m·K. Assign this material to the rectangular plate.
3.  **Mesh the Geometry:** Generate a mesh. Start with a reasonably fine mesh and consider refining it if necessary to achieve mesh convergence.
4.  **Apply Boundary Conditions:**
    *   Select the left edge (x=0) and apply a "Temperature" boundary condition of 100°C.
    *   Select the right edge (x=0.2m) and apply a "Convection" boundary condition with a heat transfer coefficient of 15 W/m²·K and an ambient temperature of 20°C.
    *   Select the top and bottom edges and apply an "Insulation" or "Adiabatic" boundary condition.
5.  **Solve:** Initiate the steady-state thermal analysis.
6.  **Postprocess:**
    *   View the temperature contour plot to visualize the temperature distribution.
    *   Examine the temperature along the center line (y=0.05m) from x=0 to x=0.2m to see how the temperature changes.

**Expected Results:**

The temperature will be highest (100°C) at the left edge and will decrease towards the right edge. The temperature gradient will be more significant on the right side due to convection. The insulated top and bottom edges will prevent heat loss in the y-direction, leading to a temperature distribution that primarily varies along the x-axis.

---

### 5. Key Points to Remember

*   **Steady-State Assumption:** Ensure that the problem you are analyzing is indeed steady-state, meaning temperatures do not change with time.
*   **Material Properties are Crucial:** The accuracy of your results is highly dependent on the correct thermal conductivity values.
*   **Boundary Conditions are Everything:** Incorrect or missing boundary conditions will lead to erroneous results. Pay close attention to specifying temperatures, heat fluxes, and convection accurately.
*   **Mesh Quality and Density:** A poorly meshed or insufficiently dense mesh can lead to inaccurate results. Always consider mesh convergence.
*   **Units:** Maintain consistency in units throughout the analysis (e.g., all in SI units).
*   **Verification:** If possible, compare your FEA results with analytical solutions for simpler cases to build confidence in your approach.

---

### 6. Practice Questions and Exercises

**Question 1:**

A thin, square plate (100mm x 100mm) is made of Bakelite (k = 0.46 W/m·K). The left edge is held at 100°C, and the right edge is held at 20°C. The top and bottom edges are insulated. Using FEA software, determine the maximum temperature gradient in the plate and the heat flow rate across the left edge.

**Answer Outline:**

1.  **Geometry:** Create a 100mm x 100mm square.
2.  **Material:** Define Bakelite with k = 0.46 W/m·K.
3.  **Meshing:** Mesh the square.
4.  **Boundary Conditions:**
    *   Left edge: Temperature = 100°C.
    *   Right edge: Temperature = 20°C.
    *   Top and Bottom edges: Insulation.
5.  **Solve:** Run the steady-state thermal analysis.
6.  **Postprocessing:**
    *   Locate the area with the steepest color gradient in the contour plot to identify the maximum temperature gradient. You might need to plot temperature along lines and analyze the slope.
    *   Calculate the heat flow rate across the left edge by summing the heat flux contributions from the elements on that edge, or by using the software's built-in feature to calculate heat flow through a boundary.

**Question 2:**

Consider a long fin with a rectangular cross-section (10mm x 5mm) and a thermal conductivity of 200 W/m·K. The base of the fin is at 80°C. The fin is exposed to ambient air at 25°C with a convective heat transfer coefficient of 25 W/m²·K. The tip of the fin can be assumed to be adiabatic for simplification in this exercise.

Using FEA software:
a) Model the fin and apply the boundary conditions.
b) Determine the temperature distribution along the length of the fin.
c) Calculate the heat transfer rate from the fin.

**Answer Outline:**

1.  **Geometry:** Create a 2D rectangle representing the fin's cross-section and extrude it to a length representing the fin. For simplicity, a 1D element representation along the length might suffice if the cross-section is uniform and heat loss is uniform along the length. However, a 2D or 3D model is more accurate. Let's assume a 2D model for demonstration. Create a rectangle of 10mm x 5mm and then either consider it a 2D object with a thickness of 1mm (for example) and apply heat transfer coefficients on the surfaces, or model a 1D bar and apply convective losses per unit length. For this problem, let's focus on a 1D simplification for clarity. Create a line element of 100mm (assuming a "long" fin for analysis).
2.  **Material:** Define a material with k = 200 W/m·K.
3.  **Meshing:** Mesh the line element.
4.  **Boundary Conditions:**
    *   Base (x=0): Temperature = 80°C.
    *   Along the length (all surfaces exposed to convection): Apply a convective boundary condition. If modeling as a 1D bar, this would be a convective heat loss per unit length. For a 2D cross-section extruded, apply convection to the outer surfaces.
    *   Tip (x=100mm): Adiabatic (no heat transfer).
5.  **Solve:** Run the steady-state thermal analysis.
6.  **Postprocessing:**
    *   Plot temperature vs. position along the fin's length.
    *   Calculate the heat flow rate at the base of the fin.

**Note:** Modeling the convective heat loss accurately in a 1D or 2D FEA requires careful application of boundary conditions representing the heat transfer from the fin's surface area to the ambient fluid. For a 1D line element, this might involve using specialized thermal elements or applying a "convective heat flux" per unit length. For a 2D cross-section, convection is applied to the exposed edges.

---

### 7. Further Learning Resources

*   **Fundamentals of Heat and Mass Transfer by Bergman, Lavine, Incropera, and DeWitt:** For a deeper understanding of heat transfer theory.
*   **Finite Element Analysis: Theory and Application with ANSYS by Saeed Moaveni:** For practical implementation of FEA in thermal analysis.
*   **Software Manuals (e.g., ANSYS Thermal Analysis Guide, SolidWorks Simulation Thermal Analysis Guide, Creo Simulate Thermal Analysis Guide):** Essential for learning the specific commands and workflows of the FEA software you are using.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
