---
title: "Perform the modal analysis of a cantilever beam"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS LAB"
module: "Module 6: Perform the modal analysis of a cantilever beam"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463c21"
status: "completed"
scrapedAt: "2026-05-20T18:03:44.334Z"
---
# COMPUTER AIDED DESIGN AND ANALYSIS LAB

## Module 6: Perform the Modal Analysis of a Cantilever Beam

### Topic: Perform the Modal Analysis of a Cantilever Beam

---

### 1. Introduction to Modal Analysis

Modal analysis is a fundamental technique in structural dynamics that determines the inherent vibration characteristics of a structure. It identifies the **natural frequencies** and **mode shapes** of a system.

**Key Concepts:**

*   **Natural Frequency:** The frequency at which a system will oscillate if disturbed from its equilibrium position and allowed to vibrate freely. A system can have multiple natural frequencies.
*   **Mode Shape:** The characteristic pattern of deformation corresponding to a specific natural frequency. It describes how the structure deforms at that particular frequency.
*   **Resonance:** A phenomenon that occurs when the excitation frequency of an external force matches one of the natural frequencies of a structure. This can lead to dangerously large vibrations.

**Importance of Modal Analysis:**

*   **Avoid Resonance:** Crucial for preventing catastrophic failures caused by resonance in vibrating machinery, bridges, aircraft, etc.
*   **System Design:** Helps in designing structures that can withstand dynamic loads without excessive vibration.
*   **Vibration Control:** Provides insights for designing vibration damping systems.
*   **Finite Element Analysis (FEA) Foundation:** Modal analysis is often a prerequisite for other dynamic FEA simulations like transient analysis or harmonic analysis.

---

### 2. Theoretical Background of Modal Analysis

The behavior of a vibrating structure can be represented by the equation of motion:

$M\ddot{u} + C\dot{u} + Ku = F(t)$

Where:
*   $M$: Mass matrix
*   $C$: Damping matrix
*   $K$: Stiffness matrix
*   $\ddot{u}$: Acceleration vector
*   $\dot{u}$: Velocity vector
*   $u$: Displacement vector
*   $F(t)$: External force vector

For **undamped free vibration**, the equation simplifies to:

$M\ddot{u} + Ku = 0$

We assume harmonic motion of the form $u(t) = \phi e^{i\omega t}$, where:
*   $\phi$: Mode shape vector (spatial distribution of displacement)
*   $\omega$: Natural frequency (angular frequency)
*   $i$: Imaginary unit

Substituting this into the undamped free vibration equation:

$M(-\omega^2 \phi e^{i\omega t}) + K(\phi e^{i\omega t}) = 0$

Since $e^{i\omega t}$ is not zero, we can divide by it:

$-\omega^2 M\phi + K\phi = 0$

Rearranging, we get the **eigenvalue problem**:

$(K - \omega^2 M)\phi = 0$

To have a non-trivial solution for $\phi$, the determinant of $(K - \omega^2 M)$ must be zero:

$det(K - \omega^2 M) = 0$

Solving this equation yields the natural frequencies ($\omega$) and the corresponding mode shapes ($\phi$).

**Reference:** *Finite Element Analysis: Theory and Application with ANSYS* by Saeed Moaveni (Pearson) provides a detailed theoretical foundation for these equations and their application in FEA.

---

### 3. Steps for Performing Modal Analysis in CAD/FEA Software

The general workflow for modal analysis using FEA software (like ANSYS, SolidWorks Simulation, Creo Simulate, CATIA Analysis) involves the following steps:

#### Step 1: Model Creation and Preparation

1.  **Geometry Creation:**
    *   Create the geometric model of the cantilever beam using CAD software (SolidWorks, Creo, CATIA, etc.).
    *   **Focus:** Ensure the geometry is clean, with no gaps, overlaps, or self-intersections.
    *   **Example:** A simple rectangular beam can be extruded from a sketch.

2.  **Material Assignment:**
    *   Assign appropriate material properties to the beam.
    *   **Key Properties:**
        *   **Young's Modulus (E):** Relates stress to strain.
        *   **Poisson's Ratio ($\nu$):** Relates lateral strain to axial strain.
        *   **Density ($\rho$):** Crucial for calculating mass and inertia properties, which directly influence natural frequencies.
    *   **Reference:** *Engineering Design with SolidWorks 2019* by Planchard & Planchard and *Creo Parametric 6.0 for Engineers and Designers* by Prof. Sham Tickoo provide guidance on material definition within their respective software.

#### Step 2: Meshing

1.  **Discretization:** Divide the continuous geometric model into a finite number of smaller elements (e.g., beam elements, solid elements). This is the core of the Finite Element Method.
2.  **Element Type:**
    *   **Beam Elements:** Efficient for slender structures like beams, capturing axial, shear, bending, and torsional behavior.
    *   **Solid Elements:** Used for more complex geometries or when through-thickness stresses are critical.
3.  **Mesh Quality:**
    *   **Mesh Size/Density:** Finer meshes generally yield more accurate results but increase computation time. A balance is needed.
    *   **Aspect Ratio:** The ratio of the longest edge to the shortest edge of an element. High aspect ratios can reduce accuracy.
    *   **Skewness:** Measures the deviation of an element from its ideal shape.
    *   **Reference:** *Finite Element Analysis: Theory and Application with ANSYS* by Saeed Moaveni extensively covers meshing strategies and element types.

#### Step 3: Applying Boundary Conditions and Loads

1.  **Fixed End (Cantilever):** For a cantilever beam, one end is fixed. This means all degrees of freedom (translation in x, y, z; rotation about x, y, z) at that end are constrained to zero.
    *   **Simulation Terminology:** Typically set as "Fixed" or "Encastre" constraint.
2.  **Free End:** The other end is free, meaning no constraints are applied here.
3.  **Loads (for Modal Analysis):** **Crucially, no external loads are applied during a basic modal analysis.** We are interested in the system's inherent vibration characteristics when disturbed, not its response to external forces. However, in some advanced modal analyses, gravity might be considered as a prestress that can affect natural frequencies.

#### Step 4: Setting Up the Modal Analysis Study

1.  **Analysis Type:** Select "Modal Analysis" or "Natural Frequency Analysis."
2.  **Number of Modes:** Specify how many natural frequencies and mode shapes you want to compute. It's generally recommended to request more modes than you expect to encounter, as lower modes are often of most interest.
3.  **Solver Settings:** The software typically uses iterative solvers or direct solvers for the eigenvalue problem.

#### Step 5: Running the Analysis

1.  Execute the simulation. The software will perform the calculations to solve the eigenvalue problem $(K - \omega^2 M)\phi = 0$.

#### Step 6: Post-processing and Interpretation of Results

1.  **Natural Frequencies:**
    *   Obtain a list of natural frequencies (usually in Hz or rad/s).
    *   Identify the **lowest natural frequency**, often referred to as the fundamental frequency.
2.  **Mode Shapes:**
    *   Visualize the deformation pattern for each natural frequency.
    *   Observe how the beam deforms (e.g., bending in y-direction, bending in z-direction, torsion).
    *   **Animation:** Software often provides animations of the mode shapes to clearly illustrate the deformation.
3.  **Verification:**
    *   Compare results with theoretical calculations for simple cases (if available).
    *   Check convergence by refining the mesh and re-running the analysis. If frequencies change significantly, the initial mesh was likely too coarse.

---

### 4. Performing Modal Analysis of a Cantilever Beam: A Practical Example (Conceptual Steps)

Let's assume we are using a software like SolidWorks Simulation or ANSYS Workbench.

**Objective:** Find the first three natural frequencies and corresponding mode shapes of a steel cantilever beam with specific dimensions.

**Beam Properties:**
*   Length ($L$): 1 meter
*   Cross-section: Rectangular, 20 mm (width) x 50 mm (height)
*   Material: Steel
    *   Young's Modulus ($E$): 200 GPa (200 x 10^9 N/m^2)
    *   Poisson's Ratio ($\nu$): 0.3
    *   Density ($\rho$): 7850 kg/m^3

**Theoretical Calculation for Fundamental Bending Frequency (Simplified Case):**

For a uniform cantilever beam undergoing transverse vibration (bending in one plane), the fundamental natural frequency ($\omega_1$) can be approximated by:

$\omega_n = \left(\frac{n\pi}{L}\right)^2 \sqrt{\frac{EI}{\mu}}$

Where:
*   $n$: Mode number (1 for fundamental)
*   $L$: Length of the beam
*   $E$: Young's Modulus
*   $I$: Area moment of inertia of the cross-section
*   $\mu$: Mass per unit length

First, calculate $I$ for a rectangular cross-section ($b \times h$):
$I = \frac{bh^3}{12}$
For our beam, $b = 0.02$ m, $h = 0.05$ m.
$I = \frac{(0.02 \, \text{m})(0.05 \, \text{m})^3}{12} = \frac{0.02 \times 0.000125}{12} = \frac{0.0000025}{12} \approx 2.083 \times 10^{-7} \, \text{m}^4$

Next, calculate the mass per unit length ($\mu$):
Area of cross-section ($A$) $= b \times h = 0.02 \, \text{m} \times 0.05 \, \text{m} = 0.001 \, \text{m}^2$
$\mu = \rho \times A = 7850 \, \text{kg/m}^3 \times 0.001 \, \text{m}^2 = 7.85 \, \text{kg/m}$

Now, calculate the fundamental natural frequency in rad/s:
$\omega_1 = \left(\frac{1\pi}{1 \, \text{m}}\right)^2 \sqrt{\frac{(200 \times 10^9 \, \text{N/m}^2)(2.083 \times 10^{-7} \, \text{m}^4)}{7.85 \, \text{kg/m}}}$
$\omega_1 = \pi^2 \sqrt{\frac{41.66}{7.85}} = \pi^2 \sqrt{5.307} \approx 9.869 \times 2.304 \approx 22.73 \, \text{rad/s}$

Convert to Hz:
$f_1 = \frac{\omega_1}{2\pi} = \frac{22.73}{2\pi} \approx 3.62 \, \text{Hz}$

**Software Procedure (Conceptual):**

1.  **Design:** Create a 1m long beam with a 20x50mm rectangular cross-section in the CAD environment.
2.  **Simulation Setup:**
    *   Activate the simulation add-in (e.g., SolidWorks Simulation).
    *   Create a new "Static" or "Study" and change its type to "Frequency" or "Modal."
3.  **Material:** Apply the steel material properties.
4.  **Meshing:**
    *   Generate a mesh. A mesh containing primarily beam elements is efficient for this geometry. The element size should be chosen to capture the expected deformation modes. Start with a reasonable mesh size and refine if necessary.
5.  **Boundary Conditions:**
    *   Select the cantilever end face.
    *   Apply a "Fixed" or "Encastre" fixture to this end face, constraining all degrees of freedom.
6.  **Analysis Options:**
    *   Specify the number of desired natural frequencies (e.g., 3 or 5).
7.  **Run:** Run the simulation.
8.  **Results:**
    *   The software will list the natural frequencies. Expect the first few to be close to the theoretical 3.62 Hz (for fundamental bending). There will be other frequencies related to bending in the perpendicular direction and torsion.
    *   Visualize the mode shapes.
        *   **Mode 1:** Typically shows the fundamental bending mode.
        *   **Mode 2:** Might be bending in the perpendicular plane.
        *   **Mode 3:** Could be the second bending mode in the first plane or a torsional mode.

---

### 5. Key Concepts and Definitions Summary

*   **Modal Analysis:** Process to determine natural frequencies and mode shapes.
*   **Natural Frequency (f or $\omega$):** Frequency of free vibration.
*   **Mode Shape ($\phi$):** Pattern of deformation at a natural frequency.
*   **Resonance:** Amplified vibration when excitation frequency matches a natural frequency.
*   **Eigenvalue Problem:** The mathematical formulation $(K - \omega^2 M)\phi = 0$ that governs modal analysis.
*   **Stiffness Matrix ($K$):** Relates forces/moments to displacements/rotations.
*   **Mass Matrix ($M$):** Relates inertia forces to accelerations.
*   **Cantilever Beam:** A beam fixed at one end and free at the other.
*   **FEA:** Finite Element Analysis - a numerical method to solve complex engineering problems.
*   **Meshing:** Discretization of geometry into finite elements.
*   **Boundary Conditions:** Constraints applied to the model (e.g., fixed support).
*   **Degrees of Freedom (DOF):** The independent movements a body can make (translations and rotations).

---

### 6. Important Points to Remember

*   **Density is Crucial:** Mass properties, directly influenced by density, are fundamental to determining natural frequencies.
*   **No Loads in Basic Modal Analysis:** External forces are *not* applied during standard modal analysis. We are interested in free vibration.
*   **Mesh Quality Matters:** Poor mesh quality can lead to inaccurate frequencies and mode shapes.
*   **Boundary Conditions Define the Problem:** Correctly applying the fixed end for a cantilever is essential.
*   **Number of Modes:** Requesting enough modes is important, as the lowest frequencies are often of primary concern, but higher modes can also be critical.
*   **Mode Shape Interpretation:** Understand that mode shapes represent relative displacements. The amplitude is arbitrary unless normalized.
*   **Verification:** Always try to compare with theoretical results for simple cases or perform a mesh convergence study.
*   **Two Sets of Frequencies:** For a beam, expect natural frequencies related to bending in different planes (e.g., y-z plane, x-z plane) and torsional modes.

---

### 7. Alignment with Course Outcomes (COs)

*   **CO1: Apply CAD and FEA tools to design and simulate mechanical systems. (Knowledge Level: K3)**
    *   This module directly addresses CO1 by requiring students to use CAD to create the beam geometry and FEA tools (simulation software) to perform the modal analysis. The process involves understanding and applying the simulation workflow.
*   **CO2: Perform dynamic simulations of mechanical systems and analyze their kinematic behavior (Knowledge Level: K4)**
    *   Modal analysis is a foundational dynamic simulation. Understanding natural frequencies and mode shapes is crucial for predicting how a system will dynamically behave when subjected to external forces, which is a core aspect of dynamic simulations. This module helps analyze the system's potential for dynamic response.
*   **CO3: Conduct thermal and stress analysis on mechanical components under different loading conditions. (Knowledge Level: K5)**
    *   While this module is about *modal* analysis, it lays the groundwork for understanding dynamic loads and vibrations, which are critical considerations when performing stress analysis under dynamic conditions or assessing fatigue life. Knowledge of natural frequencies helps avoid resonant conditions that could lead to high stresses.
*   **CO4: Design optimized mechanical components and airflow systems using Computational Fluid Dynamics (CFD) software. (Knowledge Level: K6)**
    *   Although CO4 focuses on CFD, the underlying principle of understanding system behavior through simulation is common. In mechanical design, understanding vibrational characteristics is as important as understanding airflow. Poor vibrational design can lead to component failure, just as poor airflow design can lead to inefficient systems.

---

### 8. Practice Questions and Exercises

**Question 1:**

What are the two primary outputs of a modal analysis?
a) Stress and Strain
b) Natural Frequencies and Mode Shapes
c) Displacement and Velocity
d) Load and Displacement

**Answer:** b) Natural Frequencies and Mode Shapes

---

**Question 2:**

For a cantilever beam, where should the fixed boundary condition be applied in the FEA software?
a) On the free end
b) Along the entire length of the beam
c) On the fixed end
d) Nowhere, the beam is assumed to be free

**Answer:** c) On the fixed end

---

**Question 3:**

Why is the density of the material important for modal analysis?

**Answer:** Density is crucial because it contributes to the mass matrix ($M$) of the system. The mass matrix, along with the stiffness matrix ($K$), is used to solve the eigenvalue problem that determines the natural frequencies. Higher mass generally leads to lower natural frequencies.

---

**Question 4 (Conceptual Application):**

A bridge designer is conducting a modal analysis on a new bridge design. They find that the fundamental natural frequency of the bridge is very close to the expected frequency of wind gusts that will regularly act on it. What is the potential consequence, and what design consideration might be needed?

**Answer:**
*   **Consequence:** This situation can lead to **resonance**. The repetitive wind gusts acting at the bridge's natural frequency can cause large, potentially destructive vibrations.
*   **Design Consideration:** The designer would need to modify the bridge's stiffness or mass distribution to shift its natural frequencies away from the expected excitation frequencies. Alternatively, a damping system might be incorporated to dissipate vibrational energy. This highlights the importance of modal analysis in ensuring structural integrity under dynamic loading.

---

**Question 5 (Hands-on Exercise - if software is available):**

Perform a modal analysis on a cantilever beam (e.g., 500 mm length, 20x20 mm square cross-section, made of aluminum) using your CAD/FEA software.
1.  Model the beam.
2.  Assign aluminum properties (E ≈ 70 GPa, $\nu$ ≈ 0.33, $\rho$ ≈ 2700 kg/m³).
3.  Apply a fixed boundary condition to one end.
4.  Determine the first 5 natural frequencies.
5.  Visualize and briefly describe the mode shapes for the first three frequencies.
6.  Compare your lowest natural frequency (fundamental bending frequency) with the theoretical calculation if possible.

**Expected Outcome (Illustrative):**
You would expect to find several natural frequencies. The lowest would correspond to the fundamental bending mode. The subsequent modes would likely include bending in the perpendicular direction and torsional modes. The values will depend on the mesh quality and the exact properties used, but the first few modes should be interpretable as fundamental bending, second bending, or torsion.

---

This comprehensive set of notes covers the essential aspects of performing modal analysis on a cantilever beam, aligning with the course outcomes and utilizing the principles from the referenced textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
