---
title: "Direct Shear Test"
subject: "GEOTECHNICAL ENGINEERING LAB"
module: "Module 9: Direct Shear Test"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba81100c"
status: "completed"
scrapedAt: "2026-05-20T18:48:56.263Z"
---
# Geotechnical Engineering Lab: Module 9 - Direct Shear Test

## Topic: Direct Shear Test

### 1. Introduction to the Direct Shear Test

**Purpose:**
The Direct Shear Test is a fundamental laboratory test used to determine the **shearing strength** of soil. It directly measures the resistance of a soil sample to shear failure under a defined normal load.

**Key Concept:** Shear Strength
Shear strength is the maximum shear stress a soil can withstand before it fails. It is a critical parameter for the stability analysis of foundations, slopes, retaining walls, and other geotechnical structures.

**Why is it important?**
Understanding soil shear strength is crucial for:
*   **Foundation Design:** Ensuring the soil can support the loads from structures.
*   **Slope Stability:** Predicting and preventing landslides.
*   **Retaining Wall Design:** Determining the earth pressures that a wall needs to resist.
*   **Tunneling and Excavations:** Assessing the stability of underground openings.

**Limitations:**
*   **Drainage Conditions:** The test is typically performed rapidly, which can approximate undrained conditions for clays. However, for sands and more permeable soils, it can approximate drained conditions if performed slowly. The drainage conditions significantly influence shear strength.
*   **Boundary Effects:** The shear box has rigid boundaries, which can influence the stress distribution within the soil sample.
*   **Non-uniform Stress Distribution:** The shear stress is not uniformly distributed across the failure plane.
*   **Strain Localization:** Failure typically occurs along a pre-defined horizontal plane, which may not represent the actual failure mechanism in real structures.

---

### 2. Principle of the Direct Shear Test

**Basic Principle:**
A cylindrical or square soil specimen is placed in a split shear box. A **normal load** is applied vertically to the specimen. The two halves of the shear box are then moved horizontally relative to each other at a constant rate, inducing a **shear force** until the soil sample fails. The shear force required to cause failure is measured.

**Key Components:**
*   **Shear Box:** A rigid metal box, typically split into two halves horizontally. It confines the soil sample.
*   **Loading Frame:** Applies the normal load and the shear force.
*   **Normal Load Application System:** Usually a lever system with weights to apply the normal load.
*   **Shear Force Measurement:** A proving ring or load cell measures the shear force.
*   **Displacement Measurement:** Dial gauges or linear variable differential transformers (LVDTs) measure the horizontal displacement (shear deformation).
*   **Porous Stones:** Placed at the top and bottom of the soil sample to allow for drainage (if applicable).
*   **Base Plate:** Supports the bottom half of the shear box.

---

### 3. Test Procedure

**General Steps:**
1.  **Sample Preparation:**
    *   **Remolded Samples:** Soil is compacted to a desired density and moisture content within the shear box.
    *   **Undisturbed Samples:** Core samples are trimmed to fit the shear box.
2.  **Assembly:**
    *   Place the bottom half of the shear box on the loading frame.
    *   Insert porous stones (if used) at the base of the box.
    *   Place the soil sample into the shear box.
    *   Insert porous stones (if used) on top of the sample.
    *   Place the top half of the shear box and ensure it aligns with the bottom half.
    *   Mount the loading yoke to apply the normal load.
3.  **Applying Normal Load:**
    *   Apply the desired normal load to the specimen. This load creates a normal stress ($\sigma_n$) on the potential failure plane. The normal load is typically applied for a short period before shearing begins, allowing for some consolidation.
4.  **Shearing:**
    *   Start the shearing mechanism to move the bottom half of the shear box at a constant rate of displacement.
    *   Record the shear force (and corresponding shear stress) and horizontal displacement at regular intervals using dial gauges or LVDTs.
    *   Continue shearing until the soil fails, which is indicated by a peak shear resistance or a significant drop in shear force, or until a predetermined displacement is reached.
5.  **Repeat for Different Normal Loads:**
    *   The test is repeated on identical specimens of the same soil at different normal loads (typically 3-4 different values) to obtain a range of shear strengths.

**Important Considerations during Procedure:**
*   **Rate of Strain:** The rate at which the shear box is moved is crucial.
    *   For **clays** (fine-grained soils), a faster rate is used to simulate undrained conditions.
    *   For **sands** (coarse-grained soils), a slower rate is used to simulate drained conditions.
*   **Porous Stones:** Their presence and condition (cleanliness) are important for drainage.
*   **Alignment:** Proper alignment of the shear box halves and the loading frame is essential.

---

### 4. Data Analysis and Interpretation

**Raw Data:**
*   Normal load applied (N)
*   Shear force vs. horizontal displacement readings

**Calculations:**
1.  **Normal Stress ($\sigma_n$):**
    $\sigma_n = \frac{N}{A}$
    Where:
    *   $N$ = Normal load (N or kN)
    *   $A$ = Cross-sectional area of the shear box (mm² or m²)
    *   *Note: For circular shear boxes, $A = \frac{\pi D^2}{4}$ where D is the diameter. For square shear boxes, $A = L^2$ where L is the side length.*
2.  **Shear Stress ($\tau$):**
    $\tau = \frac{S}{A_{avg}}$
    Where:
    *   $S$ = Shear force (N or kN)
    *   $A_{avg}$ = Average area at failure. As the sample deforms, the area of the shear plane reduces. For simplicity in the Direct Shear Test, the initial area is often used, or an average area is sometimes considered as the sample elongates.
        *   **Common Practice:** For simplicity, the initial area is often used for calculations. A more refined approach might consider the area reduction, especially for large deformations.
        *   $A_{avg} \approx A_{initial}$

3.  **Shear Stress vs. Displacement Plot:** For each normal load, plot the shear stress ($\tau$) on the y-axis against the horizontal displacement on the x-axis. This will typically show a peak shear stress followed by a decrease or plateau.

4.  **Peak Shear Strength:** Identify the **peak shear stress** ($\tau_{peak}$) from each $\tau$ vs. displacement curve for each normal load.

5.  **Shear Strength Envelope (Mohr-Coulomb Failure Criterion):**
    *   Plot the peak shear stress ($\tau_{peak}$) on the y-axis against the corresponding normal stress ($\sigma_n$) on the x-axis for all tested specimens.
    *   Fit a straight line through these points. This line is the **Mohr-Coulomb failure envelope**.
    *   The equation of the failure envelope is:
        $\tau_f = c + \sigma_n \tan \phi$
        Where:
        *   $\tau_f$ = Shear strength at failure
        *   $c$ = **Cohesion** (the intercept of the failure envelope with the shear stress axis)
        *   $\sigma_n$ = Normal stress
        *   $\phi$ = **Angle of internal friction** (the angle the failure envelope makes with the normal stress axis)

---

### 5. Determining Shear Strength Parameters ($c$ and $\phi$)

**Cohesion ($c$)**
*   Represents the inherent shear strength of a soil when there is no normal stress.
*   For purely cohesive soils (like saturated clays), $c$ is significant, and $\phi$ is close to zero.
*   For cohesionless soils (like sands and gravels), $c \approx 0$.

**Angle of Internal Friction ($\phi$)**
*   Represents the shear strength contribution due to the interlocking and friction between soil particles.
*   It's higher for granular soils (sands, gravels) due to their interlocking.
*   Clays have a lower $\phi$ compared to sands.

**How to get $c$ and $\phi$ from the plot:**
*   **Cohesion ($c$):** The value where the failure envelope intersects the $\tau$-axis (when $\sigma_n = 0$).
*   **Angle of Internal Friction ($\phi$):** The angle ($\theta$) the failure envelope makes with the $\sigma_n$-axis. $\phi = \theta$.

**Residual Strength:**
For some soils, particularly clays that have experienced significant deformation, the shear strength may decrease after the peak to a lower, constant value known as **residual strength**. This is also plotted against normal stress to determine residual $c$ and $\phi$.

---

### 6. Factors Affecting Shear Strength

*   **Normal Stress:** Higher normal stress generally leads to higher shear strength.
*   **Moisture Content:** Affects the pore water pressure and the effective stress, which in turn influences shear strength.
    *   For **clays**, increasing moisture content generally reduces shear strength due to lower effective stress.
    *   For **sands**, moisture can provide apparent cohesion (due to surface tension of water in the pores) at low saturations, but this effect is lost at higher saturations or when fully saturated and under load.
*   **Soil Type:**
    *   **Gravels and Sands:** High $\phi$, low or zero $c$. Strength depends on particle interlocking and friction.
    *   **Silts:** Intermediate properties between sands and clays.
    *   **Clays:** Significant $c$, low $\phi$. Strength depends on interparticle forces, plasticity, and mineralogy.
*   **Density/Compaction:** Denser soils are generally stronger.
*   **Drainage Conditions:**
    *   **Drained Conditions:** Pore water pressure changes are negligible, and shear strength is governed by effective stresses. Typically tested at slow strain rates.
    *   **Undrained Conditions:** Pore water pressure changes are significant, and shear strength is often considered in terms of total stresses. Typically tested at rapid strain rates.
*   **Strain Rate:** Affects pore water pressure generation and dissipation, thus influencing shear strength, especially in clays.
*   **Sample Disturbance:** Undisturbed samples generally exhibit higher shear strength than remolded samples of the same soil.
*   **Particle Shape and Gradation:** Angular, well-graded particles tend to interlock better, leading to higher friction angles.

---

### 7. Practice Questions and Exercises

**Question 1:**
A direct shear test was performed on a sandy soil. The following results were obtained:

| Specimen | Normal Load (kN) | Area (mm²) | Peak Shear Force (kN) |
| :------- | :--------------- | :--------- | :-------------------- |
| 1        | 2.0              | 3000       | 1.5                   |
| 2        | 4.0              | 3000       | 2.8                   |
| 3        | 6.0              | 3000       | 4.2                   |

Calculate the normal stress and peak shear stress for each specimen.

**Answer 1:**
*   **Specimen 1:**
    *   Normal Stress ($\sigma_n$) = 2.0 kN / 3000 mm² = 0.000667 kN/mm² = 0.667 kPa
    *   Peak Shear Stress ($\tau_{peak}$) = 1.5 kN / 3000 mm² = 0.0005 kN/mm² = 0.5 kPa
*   **Specimen 2:**
    *   Normal Stress ($\sigma_n$) = 4.0 kN / 3000 mm² = 0.00133 kN/mm² = 1.33 kPa
    *   Peak Shear Stress ($\tau_{peak}$) = 2.8 kN / 3000 mm² = 0.000933 kN/mm² = 0.933 kPa
*   **Specimen 3:**
    *   Normal Stress ($\sigma_n$) = 6.0 kN / 3000 mm² = 0.002 kN/mm² = 2.0 kPa
    *   Peak Shear Stress ($\tau_{peak}$) = 4.2 kN / 3000 mm² = 0.0014 kN/mm² = 1.4 kPa

**Question 2:**
Using the results from Question 1, plot the peak shear stress against the normal stress. Determine the cohesion ($c$) and angle of internal friction ($\phi$) for the sandy soil.

**Answer 2:**
*   **Plotting:** Plot (0.667 kPa, 0.5 kPa), (1.33 kPa, 0.933 kPa), (2.0 kPa, 1.4 kPa).
*   **Fitting a line:** By drawing a best-fit line through these points, we can estimate $c$ and $\phi$.
    *   Let's assume the line passes approximately through (0, 0) and (2.0 kPa, 1.4 kPa) as a rough estimate for a sandy soil where $c \approx 0$.
    *   If the line passes through (0.667, 0.5) and (2.0, 1.4):
        *   Slope ($m$) = $\frac{1.4 - 0.5}{2.0 - 0.667} = \frac{0.9}{1.333} \approx 0.675$
        *   The slope is $\tan \phi$. So, $\tan \phi = 0.675$.
        *   $\phi = \arctan(0.675) \approx 34^\circ$.
        *   The intercept ($c$) would be close to 0 for a sandy soil.
    *   **Therefore, for this sandy soil, we can estimate $c \approx 0$ kPa and $\phi \approx 34^\circ$.**

**Question 3:**
Why is the rate of strain important in the Direct Shear Test?

**Answer 3:**
The rate of strain is crucial because it dictates the drainage conditions within the soil sample.
*   **Fast strain rates** prevent pore water pressure from dissipating, leading to undrained conditions (especially in low-permeability clays).
*   **Slow strain rates** allow pore water pressure to dissipate, leading to drained conditions (especially in high-permeability sands and gravels), where shear strength is governed by effective stress.

---

### 8. Important Points to Remember

*   **Direct Shear Test measures shear strength directly.**
*   It determines the **cohesion ($c$)** and **angle of internal friction ($\phi$)** of the soil.
*   The **Mohr-Coulomb failure criterion** ($\tau_f = c + \sigma_n \tan \phi$) is used to represent shear strength.
*   The **rate of strain** is critical for simulating appropriate drainage conditions (drained vs. undrained).
*   **Boundary effects and non-uniform stress distribution** are limitations of the test.
*   Repeat the test on **multiple identical specimens** with varying normal loads to establish the failure envelope.
*   **Careful sample preparation** is essential for accurate results.
*   The test failure plane is **pre-determined** by the shear box.

---

### 9. Learning Outcomes Covered

This study guide covers the following learning outcomes for the Direct Shear Test:

*   **Understanding the purpose and importance of the Direct Shear Test in determining soil shear strength.** (Section 1)
*   **Explaining the principle behind the Direct Shear Test and its key components.** (Section 2)
*   **Describing the step-by-step procedure for conducting a Direct Shear Test, including sample preparation and data recording.** (Section 3)
*   **Performing calculations to determine normal stress and shear stress from raw data.** (Section 4)
*   **Interpreting shear stress-displacement curves to identify peak shear strength.** (Section 4)
*   **Plotting shear strength envelopes and determining the cohesion ($c$) and angle of internal friction ($\phi$) using the Mohr-Coulomb failure criterion.** (Section 4 & 5)
*   **Identifying and discussing factors that affect the shear strength of soils, as measured by the Direct Shear Test.** (Section 6)
*   **Applying knowledge through practice questions and exercises.** (Section 7)

This comprehensive set of notes should provide a strong foundation for understanding and performing the Direct Shear Test in the Geotechnical Engineering Lab.
