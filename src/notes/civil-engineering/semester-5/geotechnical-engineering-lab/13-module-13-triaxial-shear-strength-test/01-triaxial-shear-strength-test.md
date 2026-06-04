---
title: "Triaxial Shear strength Test"
subject: "GEOTECHNICAL ENGINEERING LAB"
module: "Module 13: Triaxial Shear strength Test"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba811015"
status: "completed"
scrapedAt: "2026-05-20T18:49:00.367Z"
---
# Geotechnical Engineering Lab - Module 13: Triaxial Shear Strength Test

## 1. Introduction to Triaxial Shear Strength Test

The Triaxial Shear Strength Test is a fundamental laboratory test used to determine the shear strength parameters of soil. It is considered one of the most reliable methods for evaluating the shear strength because it allows for controlled application of stresses and accurate measurement of pore water pressure.

**Key Concepts:**

*   **Shear Strength:** The ability of a soil mass to resist sliding along a plane of failure. It is a crucial parameter for the design of foundations, slopes, retaining walls, and other geotechnical structures.
*   **Stress:** Force applied per unit area. In geotechnical engineering, we are concerned with effective stress and total stress.
*   **Effective Stress:** The stress carried by the soil skeleton (solid particles and pore water). It is the stress that controls the strength and deformation of soil.
    *   **Formula:** $\sigma' = \sigma - u$, where $\sigma'$ is effective stress, $\sigma$ is total stress, and $u$ is pore water pressure.
*   **Total Stress:** The total force per unit area, including the contribution of pore water pressure.

**Purpose of the Triaxial Test:**

*   To determine the shear strength parameters: cohesion ($c$) and angle of internal friction ($\phi$).
*   To understand the stress-strain behavior of soil.
*   To measure pore water pressure generated during shearing.
*   To investigate the effect of drainage conditions on shear strength.

## 2. Types of Triaxial Tests

The triaxial test can be performed under different drainage conditions, which simulate various field loading conditions. The choice of drainage condition depends on the type of soil and the expected loading rate.

*   **Consolidated Drained (CD) Test (Slow Test):**
    *   **Description:** The specimen is first consolidated under a confining pressure, and then sheared slowly enough to allow for complete dissipation of pore water pressure. Drainage is permitted throughout the consolidation and shearing phases.
    *   **Application:** Suitable for saturated cohesive soils (clays) under slow loading conditions (e.g., embankment construction over a long period).
    *   **Key Feature:** No excess pore water pressure is generated. The test essentially measures the shear strength under drained conditions.
    *   **Drainage:** Allowed during consolidation and shearing.

*   **Consolidated Undrained (CU) Test (Quick Test):**
    *   **Description:** The specimen is first consolidated under a confining pressure, and then sheared at a relatively fast rate without allowing drainage. Pore water pressure is measured.
    *   **Application:** Suitable for saturated cohesive soils (clays) under rapid loading conditions (e.g., rapid construction, seismic events).
    *   **Key Feature:** Excess pore water pressure is generated, and its effect on shear strength is accounted for.
    *   **Drainage:** Allowed during consolidation, but prevented during shearing.

*   **Unconsolidated Undrained (UU) Test (Quick Test):**
    *   **Description:** The specimen is subjected to a confining pressure without allowing drainage, and then sheared at a relatively fast rate without allowing drainage. Pore water pressure is measured.
    *   **Application:** Suitable for saturated cohesive soils (clays) where no consolidation is expected to occur during the loading period (e.g., temporary excavations, rapid loading of clays).
    *   **Key Feature:** The test measures the undrained shear strength, which is primarily a function of the soil's cohesion.
    *   **Drainage:** Prevented during both consolidation and shearing.

**Important Note:** For granular soils (sands and gravels), the drainage is usually very rapid, so CD conditions are most representative. For cohesive soils (clays), the drainage is slower, and CU or UU tests are often more appropriate for transient loading conditions.

## 3. Apparatus and Specimen Preparation

**Apparatus:**

1.  **Triaxial Cell:** A cylindrical chamber where the soil specimen is placed and subjected to confining pressure and axial load. It typically consists of:
    *   **Base Pedestal:** Supports the soil specimen.
    *   **Cylindrical Chamber:** Holds the specimen and the confining fluid (usually water).
    *   **Top Platen:** Applies axial load to the specimen.
    *   **Membrane:** A thin, flexible rubber membrane that encases the specimen to prevent water from entering the cell and contaminating the specimen.
    *   **Drainage Outlets:** Ports for water to enter or leave the specimen.
2.  **Pressure Control System:**
    *   **Confining Pressure System:** A source of compressed air or water to apply a controlled confining pressure (cell pressure) to the specimen.
    *   **Pore Water Pressure Measurement System:** Transducers and a manometer or digital display to measure pore water pressure within the specimen.
3.  **Load Application System:**
    *   **Loading Frame:** Provides a mechanism to apply a vertical (axial) load to the specimen. This can be a screw-driven or hydraulic ram.
    *   **Load Cell:** Measures the applied axial load.
4.  **Deformation Measurement System:**
    *   **Displacement Transducer (LVDT - Linear Variable Differential Transformer):** Measures the vertical deformation (axial strain) of the specimen.
5.  **Volume Change Measurement System (for CD tests):**
    *   **Burette or Volume Change Device:** Measures the volume of water expelled or absorbed by the specimen during consolidation and shearing.

**Specimen Preparation:**

*   **Sampling:** Undisturbed samples are preferred for accurate strength determination. Disturbed samples may be prepared to a specific density in the laboratory.
*   **Trimming:** The soil specimen is typically trimmed to a cylindrical shape with a standard diameter-to-height ratio (usually 1:2 or 1:2.5). This is crucial for uniform stress distribution.
*   **Membrane Attachment:** A rubber membrane is placed around the specimen and sealed at the top and bottom using O-rings to prevent water leakage.
*   **Porous Stones:** Porous stones are placed at the top and bottom of the specimen to facilitate drainage and prevent soil particles from entering the drainage system.
*   **Saturation:** For CU and UU tests, specimens are often saturated to ensure that pore water pressure can be measured and that the soil behaves as a saturated material. This is done by applying a small confining pressure and flushing the specimen with de-aired water.

## 4. Test Procedure (General Outline)

The specific procedure varies slightly depending on the type of test (CD, CU, UU), but the general steps are as follows:

1.  **Specimen Preparation:** Prepare and set up the soil specimen in the triaxial cell as described above.
2.  **Saturation (if required):** Ensure the specimen is saturated and pore water pressure measurement is zeroed.
3.  **Consolidation Phase:**
    *   Apply the desired **confining pressure (cell pressure, $\sigma_3$)**.
    *   For **CD test:** Allow drainage and wait for consolidation to complete (volume change stops, pore water pressure returns to zero).
    *   For **CU and UU tests:** Apply confining pressure, and for CU, allow consolidation to complete (pore water pressure returns to zero). For UU, consolidation is typically omitted or kept minimal.
4.  **Shearing Phase:**
    *   Close the drainage lines (for CU and UU tests).
    *   Apply axial load (deviator stress, $\Delta\sigma_d$) at a constant rate of strain.
    *   Record axial load, axial deformation, and pore water pressure (for CU and UU) at regular intervals.
    *   Continue shearing until the specimen fails (peak load or significant strain).
5.  **Repeat for Multiple Specimens:** Conduct tests on at least three identical specimens, each subjected to a different confining pressure ($\sigma_3$). This allows for the determination of shear strength parameters.

## 5. Data Analysis and Interpretation

The data collected from the triaxial test is used to determine the shear strength parameters ($c$ and $\phi$) and to analyze the stress-strain behavior.

**Key Parameters Calculated:**

*   **Deviator Stress ($\Delta\sigma_d$):** The applied axial stress difference.
    *   **Formula:** $\Delta\sigma_d = \text{Axial Load} / \text{Original Cross-sectional Area}$
*   **Axial Strain ($\epsilon_a$):** The change in height of the specimen divided by its original height.
    *   **Formula:** $\epsilon_a = \Delta L / L_0$
*   **Pore Water Pressure ($u$):** Measured during the CU and UU tests.
*   **Effective Deviator Stress ($\Delta\sigma'_d$):** For CU and UU tests.
    *   **Formula:** $\Delta\sigma'_d = \Delta\sigma_d - u$
*   **Major Principal Stress ($\sigma_1$):** The total stress acting normal to the failure plane.
    *   **For CD Test:** $\sigma_1 = \sigma_3 + \Delta\sigma_d$
    *   **For CU/UU Test:** $\sigma_1 = \sigma_3 + \Delta\sigma_d$
*   **Effective Major Principal Stress ($\sigma'_1$):** For CU/UU tests.
    *   **Formula:** $\sigma'_1 = \sigma'_3 + \Delta\sigma'_d = (\sigma_3 - u) + (\Delta\sigma_d - u)$ (if $\sigma'_3$ is maintained constant)
    *   Alternatively, if pore water pressure is measured directly: $\sigma'_1 = \sigma_1 - u$
*   **Minor Principal Stress ($\sigma_3$):** The confining pressure applied to the specimen. For the CD and UU tests, the effective minor principal stress is $\sigma'_3 = \sigma_3 - u$. For the CD test, $u=0$, so $\sigma'_3 = \sigma_3$.

**Failure Criteria:**

*   **Peak Strength:** The maximum shear stress the soil can sustain, usually occurring at the peak deviator stress.
*   **Residual Strength:** The shear strength of a soil after significant deformation has occurred, where the soil has reached a liquefied or fully softened state. This is typically relevant for heavily fractured or sensitive clays.

**Mohr-Coulomb Failure Criterion:**

The shear strength of soil is often represented by the Mohr-Coulomb failure envelope.

*   **Total Stress Basis:** $\tau_f = c + \sigma \tan\phi$
    *   Where $\tau_f$ is the shear strength on the failure plane, $c$ is the cohesion, $\sigma$ is the normal stress on the failure plane, and $\phi$ is the angle of internal friction.
*   **Effective Stress Basis:** $\tau_f = c' + \sigma' \tan\phi'$
    *   Where $c'$ is the effective cohesion, $\sigma'$ is the effective normal stress on the failure plane, and $\phi'$ is the effective angle of internal friction.

**Graphical Representation:**

1.  **Stress-Strain Curves:** Plot deviator stress ($\Delta\sigma_d$ or $\Delta\sigma'_d$) against axial strain ($\epsilon_a$) for each confining pressure. The peak of these curves represents the shear strength at that confining pressure.
2.  **Mohr's Circles:** For each test, construct a Mohr's circle at failure.
    *   **CD Test:** The center of the circle is at $(\frac{\sigma_1 + \sigma_3}{2}, 0)$. The radius is $\frac{\sigma_1 - \sigma_3}{2}$.
    *   **CU/UU Test:** The center of the circle is at $(\frac{\sigma_1 + \sigma_3}{2}, 0)$ if using total stresses, or $(\frac{\sigma'_1 + \sigma'_3}{2}, 0)$ if using effective stresses. The radius is $\frac{\sigma_1 - \sigma_3}{2}$ or $\frac{\sigma'_1 - \sigma'_3}{2}$ respectively.
3.  **Mohr-Coulomb Envelope:** Draw a common tangent to the Mohr's circles plotted for the different confining pressures.
    *   **Total Stress Envelope:** If plotting total stress Mohr's circles, the tangent is the total stress envelope, giving $c$ and $\phi$.
    *   **Effective Stress Envelope:** If plotting effective stress Mohr's circles, the tangent is the effective stress envelope, giving $c'$ and $\phi'$. This is generally considered more fundamental.

**Example Calculation (Simplified):**

Let's assume we have results from two CD tests:

**Specimen 1:**
*   $\sigma_3 = 100$ kPa
*   Peak $\Delta\sigma_d = 150$ kPa
*   $\sigma_1 = \sigma_3 + \Delta\sigma_d = 100 + 150 = 250$ kPa

**Specimen 2:**
*   $\sigma_3 = 200$ kPa
*   Peak $\Delta\sigma_d = 250$ kPa
*   $\sigma_1 = \sigma_3 + \Delta\sigma_d = 200 + 250 = 450$ kPa

**Plotting Mohr's Circles:**

*   **Specimen 1:** Center at $(\frac{250+100}{2}, 0) = (175, 0)$, Radius = $\frac{250-100}{2} = 75$.
*   **Specimen 2:** Center at $(\frac{450+200}{2}, 0) = (325, 0)$, Radius = $\frac{450-200}{2} = 125$.

**Drawing the Envelope:** Draw a common tangent to these two circles. The angle this tangent makes with the horizontal axis is $\phi$, and the intercept on the shear stress axis (at zero normal stress) is $c$.

Alternatively, using effective stress parameters:
*   For CD test, $\sigma'_3 = \sigma_3$ and $\sigma'_1 = \sigma_1$.
*   **Specimen 1:** $\sigma'_3 = 100$ kPa, $\sigma'_1 = 250$ kPa. Center at $(\frac{250+100}{2}, 0) = (175, 0)$. Radius = 75.
*   **Specimen 2:** $\sigma'_3 = 200$ kPa, $\sigma'_1 = 450$ kPa. Center at $(\frac{450+200}{2}, 0) = (325, 0)$. Radius = 125.
The Mohr-Coulomb envelope for effective stress parameters ($c'$ and $\phi'$) is drawn tangent to these circles.

## 6. Learning Outcomes Covered

By the end of this module, you should be able to:

*   **Understand the purpose and importance of the triaxial shear strength test in geotechnical engineering.** (Covered in Section 1)
*   **Identify the different types of triaxial tests (CD, CU, UU) and their applicability to various soil types and loading conditions.** (Covered in Section 2)
*   **Describe the apparatus used in the triaxial test and the procedures for specimen preparation.** (Covered in Section 3)
*   **Outline the step-by-step procedure for conducting a triaxial shear strength test.** (Covered in Section 4)
*   **Analyze the data obtained from triaxial tests, including calculating deviator stress, axial strain, and pore water pressure.** (Covered in Section 5)
*   **Determine the shear strength parameters (cohesion and angle of internal friction) of a soil using Mohr's circles and the Mohr-Coulomb failure criterion.** (Covered in Section 5)
*   **Interpret the stress-strain behavior of soils under different confining pressures.** (Covered in Section 5)

## 7. Practice Questions and Exercises

**Question 1:**

Explain the difference between consolidated drained (CD) and consolidated undrained (CU) triaxial tests. When would you choose one over the other?

**Answer:**
The CD test allows drainage during both consolidation and shearing, ensuring that pore water pressure remains zero throughout the test. It is suitable for saturated clays under slow loading. The CU test allows drainage during consolidation but prevents drainage during shearing. Pore water pressure is measured and accounted for. It is suitable for saturated clays under rapid loading.

**Question 2:**

A consolidated undrained (CU) triaxial test was performed on a saturated clay specimen. The following data was recorded at failure:
*   Confining pressure ($\sigma_3$) = 200 kPa
*   Axial load = 700 N
*   Specimen dimensions: Diameter = 38 mm, Height = 76 mm
*   Pore water pressure ($u$) = 50 kPa

Calculate the major principal stress ($\sigma_1$) and the effective minor principal stress ($\sigma'_3$).

**Answer:**
*   Original cross-sectional area ($A_0$) = $\pi \times (\text{Diameter}/2)^2 = \pi \times (38/2)^2 = \pi \times 19^2 = 1134.1$ mm$^2$ = $0.0011341$ m$^2$
*   Deviator stress ($\Delta\sigma_d$) = Axial load / $A_0$ = 700 N / $0.0011341$ m$^2$ = 617.2 kPa
*   Major principal stress ($\sigma_1$) = $\sigma_3 + \Delta\sigma_d$ = 200 kPa + 617.2 kPa = 817.2 kPa
*   Effective minor principal stress ($\sigma'_3$) = $\sigma_3 - u$ = 200 kPa - 50 kPa = 150 kPa

**Question 3:**

Three consolidated drained (CD) triaxial tests were performed on a normally consolidated clay. The following results were obtained at peak shear strength:

| Test No. | Confining Pressure ($\sigma_3$, kPa) | Deviator Stress ($\Delta\sigma_d$, kPa) |
| :------- | :----------------------------------- | :-------------------------------------- |
| 1        | 100                                  | 200                                     |
| 2        | 200                                  | 400                                     |
| 3        | 300                                  | 600                                     |

Determine the effective cohesion ($c'$) and the effective angle of internal friction ($\phi'$) for the clay.

**Answer:**
Since these are CD tests on a normally consolidated clay, pore water pressure is zero, so $\sigma'_3 = \sigma_3$ and $\sigma'_1 = \sigma_1$. We can directly plot Mohr's circles using the given stresses and find the effective stress envelope.

**Test 1:**
*   $\sigma'_3 = 100$ kPa
*   $\sigma'_1 = \sigma'_3 + \Delta\sigma_d = 100 + 200 = 300$ kPa
*   Mohr circle center: $(\frac{300+100}{2}, 0) = (200, 0)$
*   Radius: $\frac{300-100}{2} = 100$

**Test 2:**
*   $\sigma'_3 = 200$ kPa
*   $\sigma'_1 = \sigma'_3 + \Delta\sigma_d = 200 + 400 = 600$ kPa
*   Mohr circle center: $(\frac{600+200}{2}, 0) = (400, 0)$
*   Radius: $\frac{600-200}{2} = 200$

**Test 3:**
*   $\sigma'_3 = 300$ kPa
*   $\sigma'_1 = \sigma'_3 + \Delta\sigma_d = 300 + 600 = 900$ kPa
*   Mohr circle center: $(\frac{900+300}{2}, 0) = (600, 0)$
*   Radius: $\frac{900-300}{2} = 300$

Now, plot these circles and draw the common tangent (the Mohr-Coulomb envelope).
*   The slope of this line is $\tan\phi'$.
*   The intercept on the shear stress axis is $c'$.

For a normally consolidated clay, the envelope typically passes through the origin if plotted on effective stress axes, meaning $c' \approx 0$.
Let's check the slope using two points on the envelope. We can assume the envelope passes through the origin for $c'=0$.
The points on the envelope are the radii passing through the centers of the Mohr's circles.
From center of circle 1 (200, 0) with radius 100, the failure points are (200-100, 100) and (200+100, 100) -> (100, 100) and (300, 100).
From center of circle 2 (400, 0) with radius 200, the failure points are (400-200, 200) and (400+200, 200) -> (200, 200) and (600, 200).
From center of circle 3 (600, 0) with radius 300, the failure points are (600-300, 300) and (600+300, 300) -> (300, 300) and (900, 300).

We can see that the points (100, 100), (200, 200), (300, 300) lie on the line $\tau = \sigma$. This indicates $c'=0$ and $\phi'=45^\circ$.

Let's verify using the formula $\tau_f = c' + \sigma' \tan\phi'$.
For Test 1: $100 = c' + 100 \tan\phi'$
For Test 2: $200 = c' + 200 \tan\phi'$
For Test 3: $300 = c' + 300 \tan\phi'$

Subtracting the first equation from the second:
$100 = 100 \tan\phi' \implies \tan\phi' = 1 \implies \phi' = 45^\circ$.
Substitute $\phi' = 45^\circ$ into the first equation:
$100 = c' + 100 \tan(45^\circ) = c' + 100(1)$
$100 = c' + 100 \implies c' = 0$.

Therefore, $c' = 0$ kPa and $\phi' = 45^\circ$.

## 8. Important Points to Remember

*   **Effective Stress Principle:** Shear strength is governed by effective stress, not total stress.
*   **Drainage Conditions:** The choice of CD, CU, or UU test is critical for representing field conditions.
*   **Specimen Homogeneity:** Uniformity of stress and strain within the specimen is essential for reliable results.
*   **Saturation:** Proper saturation is crucial for CU and UU tests to accurately measure pore water pressure.
*   **Mohr-Coulomb Failure Criterion:** This is the most common model used to represent the shear strength of soil.
*   **Effective Stress Envelope ($c'$, $\phi'$):** These parameters are generally preferred for design as they are independent of pore water pressure.
*   **Rate of Strain:** The shearing rate must be controlled to match the drainage conditions (slow for CD, fast for CU/UU).
*   **Error Sources:** Inconsistent specimen preparation, air in the system, leakage, and inaccurate measurements can all affect the results.

This comprehensive set of notes should provide a solid foundation for understanding and performing the Triaxial Shear Strength Test.
