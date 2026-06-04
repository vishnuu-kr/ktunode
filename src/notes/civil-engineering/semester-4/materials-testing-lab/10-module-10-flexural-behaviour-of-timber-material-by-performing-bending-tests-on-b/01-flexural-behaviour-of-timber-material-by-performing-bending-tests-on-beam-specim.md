---
title: "Flexural behaviour of timber material by performing bending tests on beam specimens."
subject: "MATERIALS TESTING LAB"
module: "Module 10: Flexural behaviour of timber material by performing bending tests on beam specimens."
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810d13"
status: "completed"
scrapedAt: "2026-05-20T18:45:46.142Z"
---
# Materials Testing Lab: Module 10 - Flexural Behaviour of Timber

## Topic: Flexural Behaviour of Timber Material by Performing Bending Tests on Beam Specimens

This module focuses on understanding how timber behaves under bending loads. We will achieve this by conducting bending tests on timber beam specimens.

---

### Learning Outcomes:

*   **LO1: To understand the fundamental principles of flexural behaviour of timber.**
*   **LO2: To be able to perform bending tests on timber beam specimens.**
*   **LO3: To be able to record and analyze the results of bending tests.**
*   **LO4: To be able to determine material properties such as Modulus of Elasticity (MOE) and Modulus of Rupture (MOR) from bending test data.**
*   **LO5: To understand the significance of these properties in timber design and application.**

---

### 1. Introduction to Flexural Behaviour of Timber

#### 1.1 What is Flexure?

*   **Flexure** refers to the bending of a structural element under a transverse load (a load applied perpendicular to the longitudinal axis of the member).
*   In timber, flexure is a critical mode of failure as timber is commonly used as beams, joists, and planks.

#### 1.2 Stress Distribution in a Bent Beam

*   When a beam is subjected to a bending moment, stresses develop within the material.
*   **Tensile Stresses:** Occur on the bottom surface of the beam, pulling the material apart.
*   **Compressive Stresses:** Occur on the top surface of the beam, pushing the material together.
*   **Neutral Axis:** An imaginary plane within the beam where the stress is zero. This axis is located at the centroid of the beam's cross-section.
*   The stress varies linearly from the neutral axis to the extreme fibers (top and bottom surfaces).

#### 1.3 Timber as a Structural Material

*   Timber is an **anisotropic** material, meaning its mechanical properties vary depending on the direction of the applied force relative to its grain.
*   **Parallel to the grain:** Timber is strong in tension and compression.
*   **Perpendicular to the grain:** Timber is much weaker in tension and compression.
*   In bending, the top and bottom surfaces experience compression and tension parallel to the grain, respectively, which are the stronger directions. This is why timber is effective as a beam.

---

### 2. Performing Bending Tests on Timber Beam Specimens

#### 2.1 Objective of Bending Tests

*   To experimentally determine the strength and stiffness of timber in bending.
*   To observe the failure modes under bending.
*   To calculate key mechanical properties.

#### 2.2 Types of Bending Tests

*   **Three-Point Bending Test:** A single load is applied at the mid-span of the beam, supported at two points at the ends. This is the most common test for timber.
*   **Four-Point Bending Test:** Two loads are applied symmetrically, creating a constant bending moment in the central portion of the beam. This test allows for more uniform stress distribution in a specific region.

#### 2.3 Standard Test Setup (Three-Point Bending)

*   **Specimen:** A rectangular timber beam of known dimensions (length, width, depth).
*   **Supports:** Two rigid supports placed at a specified distance apart (the span, L). These supports are typically rollers to allow for free rotation.
*   **Loading Mechanism:** A machine capable of applying a controlled and increasing load (e.g., Universal Testing Machine - UTM).
*   **Load Application Point:** The load is applied precisely at the mid-span of the beam.
*   **Measurement Devices:**
    *   **Load Cell:** Measures the applied load.
    *   **Deflection Gauge/LVDT (Linear Variable Differential Transformer):** Measures the vertical deflection of the beam at the mid-span.

#### 2.4 Test Procedure (General Steps)

1.  **Specimen Preparation:**
    *   Ensure specimens are dry and free from defects (knots, cracks, etc.) according to relevant standards (e.g., ASTM D143).
    *   Measure and record the specimen's dimensions (width 'b', depth 'h', and length 'L').
2.  **Machine Setup:**
    *   Place the specimen on the supports with the correct span (L).
    *   Ensure the load is applied at the mid-span.
    *   Calibrate the load cell and deflection gauge.
3.  **Load Application:**
    *   Apply the load gradually and continuously at a constant rate. The rate of loading is crucial and should be specified by the testing standard.
    *   Simultaneously record the applied load and the corresponding deflection at regular intervals.
4.  **Observation:**
    *   Observe the behaviour of the specimen as the load increases. Note any signs of cracking, crushing, or localized deformation.
    *   Continue loading until the specimen fails.
5.  **Failure:**
    *   Record the maximum load reached before failure.
    *   Examine and record the type of failure (e.g., tensile failure at the bottom, compressive failure at the top, shear failure).

---

### 3. Recording and Analyzing Bending Test Results

#### 3.1 Data Collection

*   Create a data table to record the load and corresponding deflection values.
*   Example Data Table:

| Load (N) | Deflection (mm) |
| :------- | :-------------- |
| 0        | 0               |
| 100      | 0.5             |
| 200      | 1.1             |
| 300      | 1.8             |
| ...      | ...             |
| P_max    | δ_max           |

#### 3.2 Load-Deflection Curve

*   Plot the collected data with Load on the y-axis and Deflection on the x-axis.
*   This graph visually represents the flexural behaviour of the timber specimen.
*   **Key Features of the Curve:**
    *   **Elastic Region:** The initial portion of the curve where the deformation is proportional to the load. The material returns to its original shape when the load is removed.
    *   **Yield Point (if applicable):** A point where the deformation starts to increase significantly with little or no increase in load. Timber often fails abruptly without a distinct yield point.
    *   **Ultimate Load (P_max):** The maximum load the specimen can withstand before failure.
    *   **Failure Point:** The point at which the specimen fractures or undergoes significant permanent deformation.

#### 3.3 Calculating Material Properties

*   **Modulus of Elasticity (MOE) - Stiffness:**
    *   Represents the stiffness or resistance to elastic deformation.
    *   Determined from the **elastic region** of the load-deflection curve.
    *   Formula for MOE (E) in a three-point bending test:

        $$ E = \frac{P L^3}{4 b h^3 \delta} $$

        Where:
        *   $E$ = Modulus of Elasticity (e.g., in GPa or psi)
        *   $P$ = Load within the elastic limit (usually from the initial linear portion of the curve)
        *   $L$ = Span length of the beam (distance between supports)
        *   $b$ = Width of the beam
        *   $h$ = Depth of the beam
        *   $\delta$ = Corresponding deflection at load $P$

    *   **Important Note:** For timber, it's common to use a secant modulus calculated from a specific load point (e.g., 40% of the ultimate load) or by fitting a line to the initial linear portion.

*   **Modulus of Rupture (MOR) - Strength:**
    *   Represents the maximum bending stress the material can withstand before failure.
    *   Calculated using the ultimate load ($P_{max}$).
    *   Formula for MOR ($\sigma_{max}$) in a three-point bending test:

        $$ \sigma_{max} = \frac{3 P_{max} L}{2 b h^2} $$

        Where:
        *   $\sigma_{max}$ = Modulus of Rupture (e.g., in MPa or psi)
        *   $P_{max}$ = Ultimate load at failure
        *   $L$ = Span length of the beam
        *   $b$ = Width of the beam
        *   $h$ = Depth of the beam

#### 3.4 Failure Modes Analysis

*   **Tensile Failure:** Occurs at the bottom surface of the beam, where tensile stresses are highest. The wood fibers are pulled apart.
*   **Compressive Failure:** Occurs at the top surface of the beam, where compressive stresses are highest. The wood fibers crush.
*   **Shear Failure:** Typically occurs near the supports, where shear stresses are significant. The wood fails along planes parallel to the grain.
*   **Splintering/Crushing:** Localized failure due to stress concentrations.
*   **Observation is key to understanding the material's behaviour.**

---

### 4. Significance of MOE and MOR in Timber Design

#### 4.1 Modulus of Elasticity (MOE)

*   **Stiffness Indicator:** A higher MOE means the timber is stiffer and will deflect less under a given load.
*   **Serviceability Limit State:** Crucial for ensuring that timber elements do not deflect excessively in service, which can affect the appearance and function of the structure (e.g., cracking of finishes, sagging floors).
*   **Design Consideration:** Used to calculate deflections and ensure they remain within acceptable limits.

#### 4.2 Modulus of Rupture (MOR)

*   **Strength Indicator:** A higher MOR means the timber can withstand higher bending stresses before failing.
*   **Ultimate Limit State:** Represents the bending strength of the timber.
*   **Design Consideration:** Used to determine the load-carrying capacity of timber members and ensure they do not fail under expected loads.

#### 4.3 Factors Affecting MOE and MOR in Timber

*   **Species of Wood:** Different wood species have inherently different strengths and stiffnesses.
*   **Moisture Content:** Higher moisture content generally leads to lower strength and stiffness.
*   **Grain Orientation:** As discussed, properties are significantly higher parallel to the grain.
*   **Presence of Defects:** Knots, checks, splits, and grain deviations significantly reduce strength and stiffness.
*   **Density:** Higher density timbers are generally stronger and stiffer.
*   **Temperature:** Can influence mechanical properties, though this is less critical in typical building applications.

#### 4.4 Timber Grading

*   Timber is often graded based on its visual characteristics and mechanical properties.
*   Grading systems aim to sort timber into categories that can be used predictably for structural purposes, taking into account factors like knot size and location.

---

### 5. Practice Questions and Exercises

**Question 1:**
A timber beam with a width of 50 mm and a depth of 100 mm is tested in a three-point bending setup with a span of 800 mm. The load-deflection curve shows a linear behaviour up to a load of 2000 N, at which point the deflection is measured to be 5 mm.

a) Calculate the Modulus of Elasticity (MOE) of the timber.
b) If the beam fails at a load of 4500 N, calculate the Modulus of Rupture (MOR).

**Answer 1:**

Given:
*   b = 50 mm = 0.05 m
*   h = 100 mm = 0.1 m
*   L = 800 mm = 0.8 m

a) For MOE:
*   P = 2000 N
*   δ = 5 mm = 0.005 m

$$ E = \frac{P L^3}{4 b h^3 \delta} $$
$$ E = \frac{(2000 \text{ N}) \times (0.8 \text{ m})^3}{4 \times (0.05 \text{ m}) \times (0.1 \text{ m})^3 \times (0.005 \text{ m})} $$
$$ E = \frac{2000 \times 0.512}{4 \times 0.05 \times 0.0001 \times 0.005} $$
$$ E = \frac{1024}{0.0000001} $$
$$ E = 10.24 \times 10^9 \text{ N/m}^2 = 10.24 \text{ GPa} $$

b) For MOR:
*   $P_{max}$ = 4500 N

$$ \sigma_{max} = \frac{3 P_{max} L}{2 b h^2} $$
$$ \sigma_{max} = \frac{3 \times (4500 \text{ N}) \times (0.8 \text{ m})}{2 \times (0.05 \text{ m}) \times (0.1 \text{ m})^2} $$
$$ \sigma_{max} = \frac{3 \times 4500 \times 0.8}{2 \times 0.05 \times 0.01} $$
$$ \sigma_{max} = \frac{10800}{0.001} $$
$$ \sigma_{max} = 10,800,000 \text{ N/m}^2 = 10.8 \text{ MPa} $$

**Question 2:**
Describe the difference between Modulus of Elasticity (MOE) and Modulus of Rupture (MOR) and explain their significance in timber engineering.

**Answer 2:**
*   **Modulus of Elasticity (MOE):** Measures the stiffness of the material. It's the slope of the stress-strain curve in the elastic region. A higher MOE indicates a stiffer material that deforms less under load. Its significance lies in controlling deflections under service loads, ensuring the serviceability of timber structures.
*   **Modulus of Rupture (MOR):** Measures the maximum bending strength of the material before failure. It's the maximum bending stress the material can withstand. Its significance lies in determining the ultimate load-carrying capacity of timber members and preventing catastrophic failure.

**Question 3:**
What are some common failure modes observed in timber bending tests? Briefly explain each.

**Answer 3:**
*   **Tensile Failure:** Fibers at the bottom of the beam break due to excessive tension.
*   **Compressive Failure:** Fibers at the top of the beam crush due to excessive compression.
*   **Shear Failure:** The beam fails near the supports due to high shear stresses, often appearing as a diagonal crack.
*   **Splintering/Crushing:** Localized failure due to stress concentrations, often associated with knots or defects.

---

### Important Points to Remember:

*   **Anisotropy:** Timber properties vary with grain direction. Bending tests utilize the stronger parallel-to-grain properties.
*   **Three-Point vs. Four-Point Bending:** Understand the stress distribution differences. Three-point is common for timber.
*   **Accurate Measurement:** Precise measurement of dimensions (b, h, L), load, and deflection is crucial for accurate calculations.
*   **Loading Rate:** The speed at which the load is applied affects the results. Follow standard specifications.
*   **Elastic Region:** MOE is calculated from the initial linear portion of the load-deflection curve.
*   **Ultimate Load:** MOR is calculated using the maximum load before failure.
*   **Failure Modes:** Observe and record failure modes for a comprehensive understanding of the material's behaviour.
*   **MOE vs. MOR:** MOE is about stiffness (deflection), MOR is about strength (load capacity). Both are vital for structural design.

---
