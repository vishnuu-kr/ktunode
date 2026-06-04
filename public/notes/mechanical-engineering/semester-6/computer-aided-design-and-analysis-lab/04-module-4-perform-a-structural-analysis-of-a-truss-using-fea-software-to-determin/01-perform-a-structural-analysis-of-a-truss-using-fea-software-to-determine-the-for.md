---
title: "Perform a structural analysis of a truss using FEA software to determine the force in 
each member, identify if the members are in tension or compression, and calculate the 
support reactions."
subject: "COMPUTER AIDED DESIGN AND ANALYSIS LAB"
module: "Module 4: Perform a structural analysis of a truss using FEA software to determine the force in 
each member, identify if the members are in tension or compression, and calculate the 
support reactions."
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463c1d"
status: "completed"
scrapedAt: "2026-05-20T18:03:42.940Z"
---
# COMPUTER AIDED DESIGN AND ANALYSIS LAB

## Module 4: Structural Analysis of Trusses using FEA Software

### Topic: Performing a Structural Analysis of a Truss

This module focuses on utilizing Finite Element Analysis (FEA) software to analyze truss structures. We will learn to determine member forces (tension/compression) and support reactions, aligning with our ability to apply FEA tools for mechanical system simulation (CO1) and conduct stress analysis (CO3).

---

### 1. Introduction to Trusses and Truss Analysis

**1.1 What is a Truss?**

*   **Definition:** A truss is a structural framework composed of slender members, typically straight, connected at their ends by joints. These members are usually arranged in a triangular pattern.
*   **Key Characteristics:**
    *   Members are connected by pin joints (assumed ideal in classical analysis, but FEA accounts for real-world connections).
    *   Loads are applied only at the joints.
    *   Members are subjected only to axial forces (tension or compression).
*   **Applications:** Bridges, roofs, towers, cranes, aircraft structures.

**1.2 Why Analyze Trusses?**

*   **Determine Member Forces:** Crucial for selecting appropriate materials and member sizes to prevent failure.
*   **Identify Tension vs. Compression:** Different materials and geometries behave differently under tension and compression.
*   **Calculate Support Reactions:** Essential for designing foundation or anchoring systems.
*   **Ensure Structural Integrity:** Prevent buckling, yielding, or fracture under applied loads.

**1.3 Classical Truss Analysis Methods (Brief Overview):**

While FEA is the focus, understanding classical methods provides a foundational understanding:

*   **Method of Joints:** Analyzing equilibrium at each joint.
*   **Method of Sections:** Cutting through the truss and analyzing equilibrium of a section.
*   **Graphical Methods (e.g., Maxwell's Diagrams):** Less common with FEA.

---

### 2. Finite Element Analysis (FEA) for Trusses

FEA is a numerical method that breaks down a complex structure into smaller, simpler elements (finite elements). These elements are connected at nodes, and the behavior of the entire structure is approximated by analyzing the behavior of these elements and their interactions.

**2.1 Key Concepts in FEA for Trusses:**

*   **Nodes:** Points where members are connected. They have degrees of freedom (DOFs) representing potential movements (translations and rotations). For 2D trusses, each node typically has 2 DOFs (horizontal and vertical displacement).
*   **Elements:** The individual members of the truss. In truss analysis, these are typically modeled as **bar elements** or **truss elements**.
*   **Degrees of Freedom (DOFs):** The independent variables that describe the displacement of each node. For a 2D truss, each node has two DOFs: horizontal displacement ($u$) and vertical displacement ($v$).
*   **Stiffness Matrix ($[k]$):** A matrix that relates the forces applied at the nodes of an element to the displacements of those nodes. For a truss element, the stiffness matrix depends on the material's Young's Modulus ($E$), the element's cross-sectional area ($A$), and its length ($L$).
    *   The element stiffness matrix for a 2D truss element with local coordinates (along the element axis) is:
        $$
        [k_{local}] = \frac{AE}{L}
        \begin{bmatrix}
        1 & 0 & -1 & 0 \\
        0 & 0 & 0 & 0 \\
        -1 & 0 & 1 & 0 \\
        0 & 0 & 0 & 0
        \end{bmatrix}
        $$
        *(Note: This simplified form assumes axial stiffness only. The full 2D element matrix also includes terms for rotation, which are constrained in ideal truss elements)*
    *   To use this matrix in a global coordinate system, it needs to be transformed using a **transformation matrix** based on the element's angle ($\theta$) with respect to the global x-axis.
        $$
        [k_{global}] = [T]^T [k_{local}] [T]
        $$
        where $[T]$ is the transformation matrix.
*   **Global Stiffness Matrix ($[K]$):** The assembly of all individual element stiffness matrices into a single matrix representing the entire structure.
*   **Force-Displacement Relationship:** The fundamental equation in FEA:
    $$
    \{F\} = [K] \{u\}
    $$
    where:
    *   $\{F\}$ is the vector of nodal forces.
    *   $[K]$ is the global stiffness matrix.
    *   $\{u\}$ is the vector of nodal displacements.
*   **Boundary Conditions:** Constraints applied to the structure, such as fixed supports or roller supports, which define the known displacements (often zero) at specific nodes.
*   **Load Vector ($\{P\}$):** A vector representing the external forces applied at the nodes.

**2.2 Steps in FEA for Truss Analysis:**

1.  **Preprocessing:**
    *   **Geometry Definition:** Model the truss structure by defining the coordinates of each joint (node) and connecting them to form the members (elements).
    *   **Material Properties:** Define the material of the truss members (e.g., Steel, Aluminum) by specifying its Young's Modulus ($E$) and Poisson's Ratio ($\nu$, though less critical for axial-only truss elements).
    *   **Section Properties:** Define the cross-sectional area ($A$) of each truss member.
    *   **Boundary Conditions:** Define the constraints at the supports (e.g., fixed support restricts both horizontal and vertical movement; roller support restricts movement perpendicular to the roller surface).
    *   **Load Application:** Apply the external forces at the appropriate nodes.

2.  **Solving:**
    *   **Assembly of Global Stiffness Matrix:** The software assembles the global stiffness matrix $[K]$ from the individual element stiffness matrices.
    *   **Application of Boundary Conditions:** Degrees of freedom corresponding to supports are constrained.
    *   **Solution of Equations:** The system of linear equations $\{F\} = [K] \{u\}$ is solved to determine the unknown nodal displacements $\{u\}$. This often involves matrix inversion or iterative methods.

3.  **Postprocessing:**
    *   **Displacement Analysis:** Visualize the deformed shape of the truss and obtain the displacement values at each node.
    *   **Force Calculation:**
        *   **Element Forces:** Calculate the axial force within each member by multiplying the element's stiffness matrix by the nodal displacements of that element: $\{f_{element}\} = [k_{element}] \{u_{element}\}$.
        *   **Tension/Compression Identification:** A positive force indicates tension, and a negative force indicates compression.
    *   **Support Reaction Calculation:** Calculate the forces exerted by the supports by considering the equilibrium at the supported nodes. These are typically found by substituting the calculated nodal displacements back into the global force-displacement equation for the supported nodes, or by ensuring overall equilibrium.

---

### 3. Using FEA Software (General Workflow)

The specific steps will vary slightly depending on the FEA software used (e.g., SolidWorks Simulation, Creo Simulate, ANSYS, Abaqus, NX Nastran). However, the general workflow remains consistent.

**Example Software: SolidWorks Simulation (Conceptual Steps)**

**Reference:** *Engineering Design with SolidWorks 2019* by Planchard and Planchard provides excellent guidance on using SolidWorks Simulation for various analyses. Chapter 12 focuses on "Simulation Xpress," and later chapters delve into more advanced simulation studies. While it might not specifically detail truss analysis in the chapter headings, the principles of defining geometry, applying loads, constraints, and interpreting results are directly applicable.

**3.1 Preprocessing in SolidWorks Simulation:**

1.  **Create Truss Geometry:**
    *   Model the truss as a 3D sketch or a series of 2D sketches in SolidWorks.
    *   Ensure all connections are at joint locations.
2.  **Convert to Simulation Study:**
    *   Go to the "Simulation" tab.
    *   Click "New Study" and select "Static" (as truss analysis is typically static).
3.  **Define Analysis Type:**
    *   In the Simulation study tree, right-click "Static" and choose "Properties."
    *   Under "Analysis Type," select "Truss" (if available as a specific element type). If not, you might model members as "Beams" with specific cross-sections and ensure loads are only at joints and the analysis is conducted assuming axial loads. Some FEA packages have dedicated "Truss" elements that are optimized for this.
4.  **Apply Material:**
    *   Right-click "Material" and select "Apply/Edit Material."
    *   Choose a suitable material (e.g., Steel).
5.  **Define Section Properties (if not modeled as beams):**
    *   If using dedicated truss elements, you'll define the cross-sectional area for each member.
    *   If modeling as beams, you'll create a "Beam Section" (e.g., circular tube, square tube) and apply it to the truss members. Ensure the beam orientation is consistent.
6.  **Apply Fixtures (Supports):**
    *   Right-click "Fixtures" and select appropriate support types:
        *   **Fixed:** Prevents all translation and rotation.
        *   **Hinged (or Pin):** Prevents translation but allows rotation.
        *   **Roller:** Prevents translation in a specific direction (e.g., vertical for a horizontal roller).
    *   Apply these to the nodes representing the supports.
7.  **Apply Loads:**
    *   Right-click "Loads" and select "Force."
    *   Select the nodes where forces are applied.
    *   Specify the direction and magnitude of the applied forces.

**3.2 Solving:**

1.  **Run the Study:**
    *   Click the "Run" button on the Simulation tab.
    *   The software will solve the FEA equations.

**3.3 Postprocessing in SolidWorks Simulation:**

1.  **Displacements:**
    *   Right-click "Results" and select "Displacement."
    *   Choose "Displacement" (scalar) or "X Displacement" and "Y Displacement" for nodal displacements.
    *   You can also select "Deformed Plot" to visualize the deflected shape.
2.  **Forces in Members:**
    *   This is crucial for truss analysis. In SolidWorks, when using beam elements for a truss, you can get "Beam Forces."
    *   Right-click "Results" and select "Beams" -> "Show Beam Forces."
    *   Select the desired force component (Axial Force is the key one for truss members).
    *   You can also get "Beam End Forces" to see forces at the ends of each member.
    *   **Interpretation:**
        *   **Positive Axial Force:** Tension in the member.
        *   **Negative Axial Force:** Compression in the member.
3.  **Support Reactions:**
    *   Right-click "Results" and select "Frequencies" (this is for modal analysis, not reactions). Look for "Reaction Forces."
    *   Right-click "Fixtures" and select "Show Reaction Forces."
    *   This will display the forces exerted by the supports to maintain equilibrium.
4.  **Creating Reports:**
    *   Generate a comprehensive report summarizing the model, loads, constraints, results (displacements, stresses, forces, reactions), and any warnings or errors.

---

### 4. Example Problem and Solution (Conceptual)

Let's consider a simple triangular truss (Planar Truss).

**Problem Statement:**
A simple triangular truss is supported by a pin at joint A and a roller at joint B. Joint C is free. A downward vertical load of 10 kN is applied at joint C. All members are made of steel ($E = 200$ GPa) and have a cross-sectional area of $500 \, \text{mm}^2$.

*   Joint A: (0, 0)
*   Joint B: (4, 0)
*   Joint C: (2, 3)

**Learning Outcomes Covered:**
*   **CO1 (Apply CAD and FEA tools):** We will outline the steps to create this in FEA software.
*   **CO3 (Conduct thermal and stress analysis):** While primarily a stress analysis, member forces directly relate to stresses.

**Conceptual FEA Steps:**

1.  **Geometry:**
    *   Define Node A at (0,0), Node B at (4,0), Node C at (2,3).
    *   Create Member AC (connecting A and C).
    *   Create Member BC (connecting B and C).
    *   Create Member AB (connecting A and B).

2.  **Material:** Steel, $E = 200 \, \text{GPa} = 200 \times 10^9 \, \text{N/m}^2$.
3.  **Section Properties:** $A = 500 \, \text{mm}^2 = 500 \times 10^{-6} \, \text{m}^2$.
4.  **Fixtures:**
    *   Joint A: Pin support (Restrain X and Y displacement).
    *   Joint B: Roller support (Restrain Y displacement only).
5.  **Loads:**
    *   Joint C: Downward force of 10 kN ($-10,000$ N in the Y direction).

**Expected Results (Analytical Calculation for Verification):**

*   **Support Reactions:**
    *   From overall equilibrium $\sum F_y = 0$: $R_{Ay} + R_{By} - 10 = 0$.
    *   From moment equilibrium about A, $\sum M_A = 0$: $R_{By} \times 4 - 10 \times 2 = 0 \Rightarrow R_{By} = 5 \, \text{kN}$.
    *   Then, $R_{Ay} = 10 - 5 = 5 \, \text{kN}$.
    *   $R_{Ax} = 0$ due to pin support and no horizontal loads.
*   **Member Forces:**
    *   **Method of Joints at C:**
        *   $\sum F_y = 0$: $F_{ACy} + F_{BCy} - 10 = 0$.
        *   $\sum F_x = 0$: $F_{ACx} + F_{BCx} = 0$.
        *   For member AC: Angle with horizontal $\theta_{AC} = \arctan(3/2) \approx 56.31^\circ$. $F_{ACx} = F_{AC} \cos(\theta_{AC})$, $F_{ACy} = F_{AC} \sin(\theta_{AC})$.
        *   For member BC: Angle with horizontal $\theta_{BC} = \arctan(3/-2) \approx -56.31^\circ$. $F_{BCx} = F_{BC} \cos(\theta_{BC})$, $F_{BCy} = F_{BC} \sin(\theta_{BC})$.
        *   Since $\cos(\theta_{AC}) = \cos(\theta_{BC})$ and $\sin(\theta_{AC}) = -\sin(\theta_{BC})$, and $F_{ACx} = -F_{BCx}$, we get $F_{AC} \cos(\theta_{AC}) - F_{BC} \cos(\theta_{AC}) = 0 \Rightarrow F_{AC} = F_{BC}$.
        *   From $\sum F_y = 0$: $2 \times F_{AC} \sin(\theta_{AC}) - 10 = 0 \Rightarrow 2 \times F_{AC} \times (3/\sqrt{13}) = 10 \Rightarrow F_{AC} = 10 \sqrt{13} / 6 \approx 6.01 \, \text{kN}$.
        *   Since the vertical components of forces in AC and BC are acting upwards at C, and the load is downwards, these forces are in **tension**.
    *   **Member AB:** This member carries the horizontal components.
        *   $\sum F_x$ at A: $R_{Ax} + F_{ACx} + F_{AB} = 0$.
        *   $F_{AB} = -F_{ACx} = -F_{AC} \cos(\theta_{AC}) = -6.01 \times (2/\sqrt{13}) \approx -2.23 \, \text{kN}$.
        *   The negative sign indicates **compression**.

**FEA Software Verification:**

*   Run the simulation in your chosen FEA software.
*   Check the nodal displacements (should be small).
*   Examine the "Beam Forces" or "Member Forces" for Axial Force.
    *   Member AC: Should show a positive axial force of approximately 6.01 kN.
    *   Member BC: Should show a positive axial force of approximately 6.01 kN.
    *   Member AB: Should show a negative axial force of approximately -2.23 kN.
*   Check the "Reaction Forces" at supports A and B.
    *   Support A: Reaction force of 5 kN in the +Y direction.
    *   Support B: Reaction force of 5 kN in the +Y direction.

---

### 5. Practice Questions and Exercises

**Question 1:**
For the following simply supported truss:

```
      C
     / \
    /   \
   A-----B
```

*   A downward vertical load of 5 kN is applied at C.
*   Member AC and BC are 3 meters long. Member AB is 6 meters long.
*   Supports: Pin at A, Roller at B (resting on horizontal surface).
*   All members have a cross-sectional area of $1000 \, \text{mm}^2$.

What are the forces in members AC, BC, and AB? Identify if they are in tension or compression. What are the support reactions at A and B?

**Answer 1:**

This is a symmetrical case. The load at C will be equally distributed to the supports.

*   **Support Reactions:**
    *   By symmetry, the vertical reaction at A ($R_{Ay}$) and B ($R_{By}$) will be equal.
    *   $\sum F_y = 0 \Rightarrow R_{Ay} + R_{By} - 5 = 0$.
    *   $R_{Ay} = R_{By} = 2.5 \, \text{kN}$.
    *   Support A has a pin support, so $R_{Ax}$ must also be calculated.
    *   Consider horizontal equilibrium at joint C. Angles at A and B with the horizontal are $45^\circ$.
    *   $\sum F_x$ at C: $F_{ACx} + F_{BCx} = 0$.
    *   $F_{AC} \cos(45^\circ) + F_{BC} \cos(45^\circ) = 0$. Since AC and BC have the same length and material properties, their magnitudes will be the same. $F_{AC} = F_{BC}$.
    *   The horizontal component of force in AC is pushing to the left at C, and in BC is pushing to the right at C.
    *   $\sum F_y$ at C: $F_{ACy} + F_{BCy} - 5 = 0$.
    *   $F_{AC} \sin(45^\circ) + F_{BC} \sin(45^\circ) - 5 = 0$.
    *   $2 \times F_{AC} \times (1/\sqrt{2}) - 5 = 0 \Rightarrow F_{AC} \sqrt{2} = 5 \Rightarrow F_{AC} = 5/\sqrt{2} \approx 3.54 \, \text{kN}$.
    *   Since the vertical components at C are upwards, AC and BC are in **tension**.
    *   Now consider horizontal equilibrium at A: $\sum F_x$ at A: $R_{Ax} + F_{ACx} + F_{AB} = 0$.
    *   $F_{ACx} = F_{AC} \cos(45^\circ) = (5/\sqrt{2}) \times (1/\sqrt{2}) = 2.5 \, \text{kN}$. This is a force pushing to the right at A.
    *   $R_{Ax}$ must balance this horizontal push from the pin, so $R_{Ax} = -2.5 \, \text{kN}$ (pushing to the left).
    *   However, for the member AB, its force is determined by the horizontal equilibrium of joint B.
    *   $\sum F_x$ at B: $-R_{Bx} + F_{BCx} + F_{AB} = 0$. (Assuming B is at (6,0) and A at (0,0), C at (3,3)).
    *   $F_{BCx} = F_{BC} \cos(45^\circ) = (5/\sqrt{2}) \times (1/\sqrt{2}) = 2.5 \, \text{kN}$. This is a force pushing to the left at B.
    *   The roller at B only constrains vertical motion, so $R_{Bx}$ is not constrained.
    *   Let's re-evaluate using horizontal equilibrium for the entire truss: $\sum F_x = R_{Ax} + R_{Bx} = 0$.
    *   Using the method of joints at B, considering the forces acting on joint B: $R_{Bx}$ (horizontal reaction at B, if any), $F_{BC}$ (acting towards A at $45^\circ$), $F_{AB}$ (acting towards A).
    *   Let's reconsider the setup. A (0,0), B (6,0), C (3,3). Load at C is -5kN vertical.
    *   $R_{Ay}$ and $R_{By}$ are vertical. Pin at A means $R_{Ax}$ is also present. Roller at B means only $R_{By}$ is present.
    *   $\sum F_y = R_{Ay} + R_{By} - 5 = 0$.
    *   $\sum M_A = R_{By} \times 6 - 5 \times 3 = 0 \Rightarrow R_{By} = 2.5 \, \text{kN}$.
    *   $R_{Ay} = 5 - 2.5 = 2.5 \, \text{kN}$.
    *   Now, analyze joint C. Angles are $45^\circ$.
    *   $\sum F_x$ at C: $F_{AC,x} + F_{BC,x} = 0$. $F_{AC} \cos(45^\circ) + F_{BC} \cos(45^\circ) = 0$. If forces are towards the joint, then $-F_{AC,x} - F_{BC,x} = 0$.
    *   Let's assume positive force is tension. Forces in AC and BC act away from C.
    *   Horizontal forces from AC and BC at C: $F_{AC} \cos(45^\circ)$ (to the left) and $F_{BC} \cos(45^\circ)$ (to the right).
    *   $\sum F_x$ at C: $-F_{AC} \cos(45^\circ) + F_{BC} \cos(45^\circ) = 0 \Rightarrow F_{AC} = F_{BC}$.
    *   $\sum F_y$ at C: $-F_{AC} \sin(45^\circ) - F_{BC} \sin(45^\circ) - 5 = 0$.
    *   $-2 F_{AC} (1/\sqrt{2}) - 5 = 0 \Rightarrow F_{AC} = -5 / \sqrt{2} \approx -3.54 \, \text{kN}$.
    *   This means AC and BC are in **compression**.
    *   Now, analyze joint A. Forces acting on A: $R_{Ax}$ (horizontal, positive to the right), $R_{Ay}$ (vertical, positive upwards), $F_{AC}$ (acting away from A, towards C), $F_{AB}$ (acting away from A, towards B).
    *   $\sum F_x$ at A: $R_{Ax} + F_{AC} \cos(45^\circ) + F_{AB} = 0$.
    *   $R_{Ax} + (-3.54) \times (1/\sqrt{2}) + F_{AB} = 0$.
    *   $R_{Ax} - 2.5 + F_{AB} = 0$.
    *   Now analyze joint B. Forces acting on B: $R_{By}$ (vertical, positive upwards), $F_{BC}$ (acting away from B, towards C), $F_{AB}$ (acting away from B, towards A).
    *   $\sum F_x$ at B: $F_{BC} \cos(45^\circ) + F_{AB} = 0$. (Assuming forces from members are pulling away from the joint).
    *   $(-3.54) \times (1/\sqrt{2}) + F_{AB} = 0 \Rightarrow F_{AB} = 2.5 \, \text{kN}$.
    *   This means AB is in **tension**.
    *   Substitute $F_{AB}$ into the equation for joint A: $R_{Ax} - 2.5 + 2.5 = 0 \Rightarrow R_{Ax} = 0$. This is consistent with the pin support if there are no external horizontal forces.

*   **Final Answer for Question 1:**
    *   Member AC: Compression, 3.54 kN.
    *   Member BC: Compression, 3.54 kN.
    *   Member AB: Tension, 2.5 kN.
    *   Support Reactions: At A, $R_{Ax} = 0$, $R_{Ay} = 2.5 \, \text{kN}$ (upwards). At B, $R_{By} = 2.5 \, \text{kN}$ (upwards).

**Question 2:**
Why is it important to apply loads only at the joints in classical truss analysis, and how does FEA handle loads applied elsewhere?

**Answer 2:**

*   **Classical Truss Analysis:** The fundamental assumption is that all members are connected by ideal pin joints. This means that members are only subjected to axial forces (tension or compression) and do not experience bending moments. If a load were applied *between* joints on a member, it would induce bending in that member, violating the core assumption of truss behavior. This bending would then lead to shear forces and moments, making the analysis more complex than simple axial force calculations.
*   **FEA Handling of Off-Joint Loads:** FEA software can accurately model loads applied at any point on a member. When a load is applied to the mid-span of an element (e.g., a beam element used to model a truss member), the FEA solver will incorporate this load into the element's stiffness matrix and load vector. This means the member will experience not only axial forces but also bending moments and shear forces, which are calculated by the FEA as part of the solution. In SolidWorks Simulation, if you model truss members as beams, you can apply loads at any point along the beam.

---

### 6. Important Points to Remember

*   **Truss Element Assumptions:** Ideally, loads only at joints, pin connections, members resist only axial forces.
*   **FEA Element Types:** Use dedicated "Truss Elements" if available, or "Beam Elements" with appropriate cross-sections and ensure loads are applied at nodes if you want to emulate classical truss behavior.
*   **Coordinate Systems:** Be mindful of global vs. local coordinate systems when interpreting element stiffness matrices and forces. FEA software handles transformations automatically.
*   **Units:** Maintain consistent units throughout your FEA model (e.g., N, mm, MPa or N, m, Pa).
*   **Postprocessing Interpretation:**
    *   Positive axial force = Tension.
    *   Negative axial force = Compression.
    *   Support reactions are forces exerted by the supports to maintain equilibrium.
*   **Verification:** Whenever possible, verify FEA results with analytical calculations or experimental data, especially for simpler structures.
*   **Software Specifics:** Familiarize yourself with the specific FEA software's interface and element types for truss analysis. Consult software manuals for detailed instructions. (Referencing *Engineering Design with SolidWorks 2019* or *Finite Element Analysis: Theory and Application with ANSYS* by Moaveni for detailed FEA procedures is highly recommended).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 7. Textbook References and Relevance

*   **Engineering Design with SolidWorks 2019 by David C. Planchard and Marie P. Planchard:** Crucial for understanding the practical implementation of FEA within SolidWorks. Chapters on Simulation basics, material properties, loads, fixtures, and interpreting results will be directly applicable. While a dedicated "truss analysis" chapter might not exist, the principles for beam and static analysis are transferable.
*   **Finite Element Analysis: Theory and Application with ANSYS by Saeed Moaveni:** Provides a deeper theoretical understanding of FEA principles, including stiffness matrices, element formulations, and solution techniques. This is excellent for understanding *why* the software produces the results it does, aligning with **CO1** and **CO3** (understanding the stress analysis process).
*   **Creo Parametric 6.0 for Engineers and Designers by Prof. Sham Tickoo:** Similar to the SolidWorks book, this provides practical guidance for using Creo Simulate for structural analysis, directly supporting **CO1**.
*   **Manuals of software such as CatiaV and UG NX by Respective OEM:** These manuals are the definitive source for the specific workflow and features within those FEA packages, essential for practical application in **CO1**.

---

### 8. Alignment with Course Outcomes

*   **CO1: Apply CAD and FEA tools to design and simulate mechanical systems.** (Knowledge Level: K3)
    *   This module directly addresses this CO by guiding students through the process of using FEA software to create and analyze a truss, a fundamental mechanical system.
*   **CO3: Conduct thermal and stress analysis on mechanical components under different loading conditions.** (Knowledge Level: K5)
    *   Truss analysis is a form of stress analysis. Determining member forces allows for the calculation of axial stresses ($\sigma = F/A$) and helps engineers understand the stress state of the members under applied loads, fulfilling the "stress analysis" aspect of this CO.

This module provides hands-on experience with essential FEA tools, contributing significantly to the practical skills required by the course.