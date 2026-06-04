---
title: "Perform a fatigue analysis using FEA software."
subject: "COMPUTER AIDED DESIGN AND ANALYSIS LAB"
module: "Module 9: Perform a fatigue analysis using FEA software."
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463c27"
status: "completed"
scrapedAt: "2026-05-20T18:03:46.437Z"
---
# Computer Aided Design and Analysis Lab - Module 9: Fatigue Analysis using FEA Software

## Introduction to Fatigue Analysis

Fatigue is a phenomenon where a material fails under repeated or fluctuating stresses that are significantly lower than the material's yield strength. This often leads to catastrophic failure without any obvious signs of yielding. Fatigue analysis is crucial in designing components that are subjected to cyclic loading to ensure their longevity and prevent premature failure.

**Key Concept:** Fatigue is a *progressive* and *localized* process that occurs under *cyclic loading*.

**Why is Fatigue Analysis Important?**

*   **Safety:** Prevents unexpected failures that can lead to injuries, fatalities, and damage to equipment.
*   **Reliability:** Ensures products function as intended for their designed lifespan.
*   **Cost-Effectiveness:** Avoids costly repairs, recalls, and warranty claims due to premature failures.
*   **Design Optimization:** Helps in identifying critical areas and optimizing designs to withstand cyclic stresses.

## Learning Outcomes for Module 9:

By the end of this module, you will be able to:

*   **Understand the fundamental principles of fatigue failure.** (Relates to CO3 - Knowledge Level: K5 - Conduct thermal and stress analysis)
*   **Identify different types of fatigue loading and their characteristics.** (Relates to CO3 - Knowledge Level: K5)
*   **Explain the common fatigue analysis methodologies (e.g., stress-life, strain-life).** (Relates to CO3 - Knowledge Level: K5)
*   **Perform a fatigue analysis on a given mechanical component using FEA software.** (Relates to CO1 - Knowledge Level: K3 - Apply CAD and FEA tools)
*   **Interpret and evaluate fatigue analysis results, including stress concentrations and fatigue life predictions.** (Relates to CO3 - Knowledge Level: K5)
*   **Propose design modifications to improve the fatigue life of a component based on FEA results.** (Relates to CO3 - Knowledge Level: K5, and indirectly CO4 - Knowledge Level: K6)

## 1. Fundamental Principles of Fatigue Failure

Fatigue failure is typically a three-stage process:

1.  **Crack Initiation:** Microscopic cracks begin to form at points of high stress concentration, such as surface imperfections, material defects, or geometric discontinuities.
2.  **Crack Propagation:** Once initiated, the crack grows incrementally with each stress cycle. This stage is characterized by a relatively slow but steady increase in crack length.
3.  **Final Fracture (Rupture):** When the crack reaches a critical size, the remaining cross-sectional area can no longer support the applied load, leading to rapid, brittle fracture.

**Key Factors Influencing Fatigue Life:**

*   **Stress Amplitude/Range:** The magnitude of stress fluctuation. Higher stress amplitudes lead to shorter fatigue lives.
*   **Mean Stress:** The average stress over a cycle. Tensile mean stresses generally reduce fatigue life, while compressive mean stresses can improve it.
*   **Stress Concentration Factors:** Geometric features like holes, notches, and sharp corners can significantly amplify local stresses, accelerating crack initiation.
*   **Surface Finish:** Rough surfaces are more prone to crack initiation than smooth surfaces. Surface treatments (e.g., shot peening) can induce compressive residual stresses, improving fatigue life.
*   **Material Properties:** The intrinsic fatigue strength and ductility of the material play a significant role.
*   **Environmental Factors:** Corrosive environments can contribute to fatigue damage (corrosion fatigue).

**Reference:** *Finite Element Analysis: Theory and Application with ANSYS* by Saeed Moaveni provides a detailed theoretical background on stress analysis, which is foundational to understanding fatigue.

## 2. Types of Fatigue Loading

Understanding the nature of the applied loads is crucial for accurate fatigue analysis. Common types include:

*   **Completely Reversed Loading:** The stress oscillates symmetrically around zero (e.g., from +σ_max to -σ_max).
*   **Fluctuating Loading:** The stress varies between a minimum and maximum value, with the mean stress being non-zero.
    *   **Repeated Stressing:** The stress varies from zero to a maximum value.
    *   **Varying Stressing:** The stress varies between two non-zero values.
*   **Torsional Fatigue:** Cyclic loading applied in torsion.
*   **Vibratory Fatigue:** Failure due to sustained vibrations, often leading to resonance and high stress amplitudes.

**Example:** A rotating shaft subjected to a bending moment experiences completely reversed bending stress at any given point on its surface. A component subjected to a constant load that is switched on and off would experience fluctuating stress.

## 3. Common Fatigue Analysis Methodologies

FEA software typically employs one or more of these methodologies:

### 3.1. Stress-Life (S-N) Approach

This is the most common approach for analyzing fatigue under high-cycle fatigue conditions (typically > 10^5 cycles). It relies on the material's S-N curve.

*   **S-N Curve:** A plot of stress amplitude (S) versus the number of cycles to failure (N) on a log-log scale.
*   **Endurance Limit (or Fatigue Limit):** The stress level below which a material can theoretically withstand an infinite number of cycles without fatigue failure. This is primarily observed in ferrous metals.
*   **Fatigue Strength:** The stress level a material can withstand for a specific number of cycles.

**Calculation Steps (Simplified):**

1.  **Static FEA:** Perform a static stress analysis to determine the stresses in the component under the applied load.
2.  **Stress Concentration:** Account for geometric stress concentrations using stress concentration factors. For FEA, meshing finer at discontinuities automatically captures these.
3.  **Fatigue Stress Calculation:** Determine the alternating stress component and mean stress.
4.  **Apply Fatigue Criteria:** Use fatigue failure theories (e.g., Goodman, Soderberg, Gerber) to predict failure based on the S-N curve and mean stress.
5.  **Fatigue Life Prediction:** Determine the number of cycles to failure for each element based on the calculated stress and the material's S-N data.

**Reference:** *Engineering Design with SolidWorks 2019* by David C. Planchard and Marie P. Planchard might offer practical examples of incorporating material properties, including fatigue data, into design simulations.

### 3.2. Strain-Life (ε-N) Approach

This approach is generally used for low-cycle fatigue (typically < 10^5 cycles) where plastic deformation is significant. It relates the strain amplitude to the number of cycles to failure.

*   **Coefficients:** This method uses material properties like fatigue strength exponent and fatigue ductility exponent.
*   **Neuber's Rule:** Often used to relate the nominal stress and strain to local stresses and strains at notches.

**Calculation Steps (Simplified):**

1.  **Static or Transient FEA:** Perform a stress/strain analysis, potentially a non-linear analysis if significant plastic deformation is expected.
2.  **Calculate Strain Components:** Determine the local strain range.
3.  **Apply Strain-Life Equations:** Use established equations (e.g., Manson-Coffin relation) to predict fatigue life based on strain amplitude and material properties.

### 3.3. Fracture Mechanics Approach

This approach focuses on the propagation of pre-existing cracks. It's useful for components that are known to have flaws or for predicting the remaining life of a component with a detected crack.

*   **Stress Intensity Factor (K):** A parameter that characterizes the stress state at the crack tip.
*   **Crack Growth Rate:** Typically described by Paris's Law (da/dN = C(ΔK)^m).

**When to Use Which Approach:**

*   **Stress-Life:** High cycles, elastic stress range.
*   **Strain-Life:** Low cycles, significant plastic strain.
*   **Fracture Mechanics:** For analyzing crack growth in existing flaws.

## 4. Performing Fatigue Analysis in FEA Software (General Steps)

The exact steps vary between FEA software (e.g., ANSYS, SolidWorks Simulation, Creo Simulate, Abaqus, CATIA V5, UG NX), but the general workflow is as follows:

**Prerequisites:**

*   **CAD Model:** A fully defined 3D model of the component.
*   **Material Properties:** Accurate material data, including Young's Modulus, Poisson's Ratio, Yield Strength, Ultimate Tensile Strength, and crucially for fatigue, S-N curve data or strain-life parameters.

**Steps:**

1.  **Static Stress Analysis:**
    *   **Geometry Preparation:** Clean up the CAD model, remove unnecessary features, and ensure it's suitable for meshing.
    *   **Material Assignment:** Assign the correct material with appropriate properties.
    *   **Meshing:** Create a mesh. **Crucially, use a finer mesh in areas of high stress concentration (e.g., fillets, holes, sharp corners) to accurately capture stress gradients.** Refinement studies might be necessary.
    *   **Boundary Conditions:** Apply constraints (fixed supports, etc.) to prevent rigid body motion.
    *   **Loads:** Apply the static or cyclic loads that the component will experience. For fatigue, you'll need to define the *nature* of the loading (e.g., alternating, fluctuating).
    *   **Solve:** Run the static stress analysis to obtain stress and strain results.

2.  **Fatigue Analysis Setup:**
    *   **Activate Fatigue Module:** Navigate to the fatigue analysis section of the software.
    *   **Load Definition for Fatigue:** Specify how the loads will vary over time. This typically involves defining:
        *   **Load Cases:** Different loading scenarios.
        *   **Load Amplitude and Mean:** Defining the alternating and mean stress components.
        *   **Stress Ratio (R):** The ratio of minimum stress to maximum stress (R = σ_min / σ_max).
        *   **Loading Spectrum (Optional):** For complex, non-periodic loading histories.
    *   **Fatigue Analysis Type Selection:** Choose between Stress-Life (S-N) or Strain-Life (ε-N) based on expected fatigue regime.
    *   **Material Fatigue Properties:** Load or input the material's fatigue data (S-N curve, fatigue strength coefficient, fatigue ductility coefficient, etc.).
    *   **Fatigue Analysis Options:**
        *   **Mean Stress Correction:** Select an appropriate mean stress correction model (e.g., Goodman, Gerber).
        *   **Fatigue Calculation Type:** Specify whether to calculate fatigue life (cycles to failure) or fatigue strength (allowable stress amplitude).
        *   **Endurance Limit Handling:** Define how the endurance limit is considered.
        *   **Stress Component Selection:** Choose which stress component to use for fatigue calculation (e.g., von Mises, principal stresses).
        *   **Safety Factor:** Specify a desired safety factor against fatigue.

3.  **Run Fatigue Analysis:** Execute the fatigue analysis solver.

4.  **Results Interpretation:**
    *   **Fatigue Life (Cycles to Failure):** Displayed as contours on the model. Areas with lower life values are critical.
    *   **Fatigue Strength (Allowable Stress):** Shows the maximum stress amplitude the component can withstand for an infinite life (or specified life) at each location.
    *   **Fatigue Safety Factor:** A ratio indicating how many times the applied stress amplitude can be increased before failure occurs for a given life. A safety factor less than the desired value indicates potential failure.
    *   **Damage Index:** A measure of the accumulated fatigue damage.

**Reference:** *Manuals of software such as CatiaV and UG NX by Respective OEM* will provide specific commands and workflows for these steps within those particular software packages. *Finite Element Analysis: Theory and Application with ANSYS* by Saeed Moaveni is excellent for understanding the underlying theory behind the results.

**Example Scenario (Conceptual):**

Imagine analyzing a connecting rod in an engine. It experiences fluctuating tensile and compressive stresses due to combustion forces and inertia. You would:

1.  Perform a static FEA under peak load conditions to find stresses.
2.  Activate the fatigue module, define the load cycle (e.g., R = -0.5 for a fluctuating tensile load with a significant compressive component), and input the connecting rod material's S-N curve.
3.  Select the S-N approach with Goodman mean stress correction.
4.  Run the analysis to predict the number of cycles the connecting rod can withstand before fatigue failure.

## 5. Interpreting and Evaluating Fatigue Analysis Results

This is a critical step to draw meaningful conclusions and make informed design decisions.

*   **Identify Critical Regions:** Look for areas with the lowest fatigue life (fewer cycles to failure) or safety factors below the target. These are typically areas of high stress concentration.
*   **Analyze Stress Concentration Effects:** Understand how geometric features (fillets, holes) are influencing fatigue life.
*   **Compare Results with Design Requirements:** Does the predicted fatigue life meet the service life requirement? Is the safety factor adequate?
*   **Sensitivity Analysis:** Consider how variations in material properties, loads, or geometry might affect the fatigue life.
*   **Potential Failure Modes:** High stress concentrations leading to crack initiation are the primary concern.

**Example Interpretation:** If the fatigue life contour shows that a critical fillet radius on a shaft can only withstand 50,000 cycles, but the shaft is designed for 1 million cycles, then the design is inadequate. The safety factor plot might show a value of 0.5 in that region, confirming the deficiency.

## 6. Proposing Design Modifications for Improved Fatigue Life

Based on the FEA results, you can suggest specific design changes:

*   **Reduce Stress Concentrations:**
    *   **Increase Fillet Radii:** Rounding off sharp corners significantly reduces stress concentration.
    *   **Add Generous Radii at Holes and Notches:** Similar to fillets, this smooths out stress flow.
    *   **Taper Transitions:** Gradual changes in cross-section are better than abrupt ones.
*   **Modify Geometry to Lower Overall Stress:**
    *   **Increase Cross-Sectional Area:** In highly stressed regions.
    *   **Change Component Shape:** To distribute stresses more evenly.
*   **Improve Surface Finish:** Recommend surface treatments like shot peening or polishing to induce beneficial compressive residual stresses.
*   **Material Selection:** Consider using materials with higher fatigue strength or endurance limits.
*   **Load Optimization (if possible):** Sometimes, redesigning the loading mechanism can reduce stress amplitudes.

**Reference:** *Engineering Design with SolidWorks 2019* likely emphasizes design for manufacturability and assembly, which often includes considerations for stress reduction in critical areas.

**Example Modification:** If the analysis shows a low fatigue life at a keyway in a shaft, one modification would be to increase the radius of the keyway fillet. Another could be to add a relief groove at the base of the keyway.

## Course Outcome Alignment:

*   **CO1: Apply CAD and FEA tools to design and simulate mechanical systems.**
    *   This module directly addresses this by teaching the application of FEA software for a specific type of simulation – fatigue analysis. The practical steps outlined in Section 4 demonstrate this application. (Knowledge Level: K3)
*   **CO2: Perform dynamic simulations of mechanical systems and analyze their kinematic behavior.**
    *   While this module focuses on fatigue (a static or quasi-static analysis of cyclic loading), the understanding of fluctuating loads is related to dynamic behavior. The concept of cycles implies a time-dependent loading, which is part of dynamic systems. However, the primary focus here is stress/strain response to cyclic load, not the motion itself. (Indirect relation, Knowledge Level: K4)
*   **CO3: Conduct thermal and stress analysis on mechanical components under different loading conditions.**
    *   This is the core outcome addressed. Fatigue analysis is a specialized form of stress analysis that considers cyclic loading conditions. Understanding stress concentrations and their impact on life directly aligns with this outcome. (Knowledge Level: K5)
*   **CO4: Design optimized mechanical components and airflow systems using Computational Fluid Dynamics (CFD) software.**
    *   While this module doesn't directly involve CFD, the process of using FEA results to propose design modifications for improved performance (fatigue life) is a form of design optimization. The iterative process of analyzing and redesigning is common to both FEA and CFD-based optimization. (Indirect relation, Knowledge Level: K6)

## Important Points to Remember:

*   **Meshing is Critical:** Fine meshing at stress concentrations is paramount for accurate fatigue life prediction.
*   **Material Data is Key:** The quality of fatigue life prediction heavily relies on accurate material S-N curves or strain-life parameters.
*   **Understand Loading:** Precisely define the stress ratio (R) and load amplitude/mean for the fatigue analysis.
*   **Choose the Right Method:** S-N for high cycles, Strain-Life for low cycles.
*   **Interpret Results Carefully:** Always consider safety factors and design requirements.
*   **Fatigue is a Design Tool:** Use it proactively to prevent failures, not just to diagnose them.
*   **Surface Finish Matters:** Always consider its impact on fatigue.

## Practice Questions and Exercises:

**Question 1:** What are the three stages of fatigue failure?
**Answer:** Crack initiation, crack propagation, and final fracture (rupture).

**Question 2:** Explain the difference between the Stress-Life (S-N) and Strain-Life (ε-N) approaches to fatigue analysis. When would you typically use each?
**Answer:**
*   **S-N Approach:** Used for high-cycle fatigue (>10^5 cycles) and assumes elastic stress behavior. Relates stress amplitude to cycles to failure using an S-N curve.
*   **Strain-Life Approach:** Used for low-cycle fatigue (<10^5 cycles) where significant plastic deformation occurs. Relates strain amplitude to cycles to failure.

**Question 3:** A component experiences a load that varies from 100 MPa to 500 MPa. Calculate the stress amplitude and mean stress. If the stress ratio R = 0.2, what is this type of loading called?
**Answer:**
*   Maximum Stress (σ_max) = 500 MPa
*   Minimum Stress (σ_min) = 100 MPa
*   Stress Amplitude (σ_a) = (σ_max - σ_min) / 2 = (500 - 100) / 2 = 200 MPa
*   Mean Stress (σ_m) = (σ_max + σ_min) / 2 = (500 + 100) / 2 = 300 MPa
*   Stress Ratio (R) = σ_min / σ_max = 100 / 500 = 0.2
*   This is **fluctuating tensile loading** (or varying stress) because the stress remains positive but fluctuates.

**Question 4 (Practical Exercise):**

Using your FEA software (e.g., SolidWorks Simulation, ANSYS Workbench, Creo Simulate):

1.  **Take a provided simple component model (e.g., a plate with a hole or a shaft with a fillet).**
2.  **Perform a static stress analysis on it.**
3.  **Apply a cyclic load, for example, a load that reverses direction or fluctuates between two values.**
4.  **Set up and run a fatigue analysis using the Stress-Life (S-N) approach.**
5.  **Identify the area with the lowest fatigue life and determine the safety factor in that region.**
6.  **Suggest one design modification that could improve the fatigue life in the critical area.**

**Example Solution for Question 4 (Conceptual Output):**

*   **Component:** A steel plate with a central hole, subjected to a tensile load that fluctuates between 100 N and 500 N applied over the plate's width.
*   **Static Analysis:** Max von Mises stress is found to be 350 MPa around the hole.
*   **Fatigue Analysis Setup:**
    *   Load: Fluctuating, R = 100/500 = 0.2.
    *   Material: Steel with known S-N curve data.
    *   Mean Stress Correction: Goodman.
*   **Fatigue Results:**
    *   Lowest fatigue life (e.g., 80,000 cycles) is predicted at the edges of the hole.
    *   Safety Factor in this region is 0.7.
*   **Design Modification Suggestion:** Increase the radius of the fillet at the edge of the hole to reduce the stress concentration factor. Alternatively, reduce the applied load magnitude or consider a material with a higher fatigue strength.

By working through these exercises and understanding the principles, you'll be well-equipped to perform and interpret fatigue analyses in your CAD/FEA lab sessions.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
