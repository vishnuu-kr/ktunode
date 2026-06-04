---
title: "Evaluate the flexural stiffness (flexural rigidity) of mild steel/copper/brass specimens using a three-point bend test on a Universal Testing Machine (UTM)"
subject: "MATERIALS TESTING LAB"
module: "Module 7: Evaluate the flexural stiffness (flexural rigidity) of mild steel/copper/brass specimens using a three"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462e7c"
status: "completed"
scrapedAt: "2026-05-20T17:50:23.042Z"
---
# Materials Testing Lab: Module 7 - Flexural Stiffness Evaluation

## Topic: Evaluate the flexural stiffness (flexural rigidity) of mild steel/copper/brass specimens using a three-point bend test on a Universal Testing Machine (UTM)

### 1. Introduction & Learning Outcomes

This module focuses on experimentally determining the flexural stiffness, also known as flexural rigidity, of common engineering materials like mild steel, copper, and brass. This is achieved through a three-point bend test conducted on a Universal Testing Machine (UTM).

**Learning Outcomes:** Upon successful completion of this module, you will be able to:

*   Understand the principles of the three-point bend test.
*   Operate a Universal Testing Machine (UTM) for bend testing.
*   Measure load and deflection data during a flexural test.
*   Calculate the flexural stiffness (flexural rigidity) of the tested specimens.
*   Relate the calculated flexural stiffness to the material's Young's Modulus.
*   Compare the flexural stiffness of different materials (mild steel, copper, brass).
*   Discuss the factors influencing flexural stiffness.

### 2. Key Concepts and Definitions

*   **Flexural Stiffness (EI):** A measure of a beam's resistance to bending. It is the product of the material's Young's Modulus ($E$) and the specimen's cross-sectional second moment of area ($I$). A higher EI indicates greater resistance to bending.
    *   *Reference:* Callister & Rethwisch (10th Ed.) likely discusses Young's Modulus as a fundamental material property related to stiffness. Kuhn & Medlin (Vol. 8) will delve deeper into mechanical testing methods.
*   **Flexural Rigidity:** Synonymous with flexural stiffness.
*   **Young's Modulus ($E$):** A material property that describes its stiffness or resistance to elastic deformation under tensile or compressive stress. It represents the slope of the stress-strain curve in the elastic region.
    *   *Reference:* Callister & Rethwisch (10th Ed.) will define Young's Modulus and its significance. Gere & Goodno (9th Ed.) will provide a thorough understanding of stress and strain relationships.
*   **Second Moment of Area ($I$):** A geometric property of a cross-section that indicates how the area is distributed with respect to an axis. For a rectangular cross-section of width $b$ and height $h$, $I = \frac{bh^3}{12}$.
    *   *Reference:* Gere & Goodno (9th Ed.) is the primary reference for beam bending theory and calculating the second moment of area.
*   **Three-Point Bend Test:** A standard mechanical test where a beam specimen is supported at two points, and a load is applied at a single point midway between the supports. This creates a bending moment within the specimen.
    *   *Reference:* Kuhn & Medlin (Vol. 8) will detail various bending test configurations, including the three-point bend test.
*   **Universal Testing Machine (UTM):** A versatile testing machine capable of performing various mechanical tests, including tensile, compression, and bending tests, by applying controlled forces and measuring displacement.
*   **Load:** The force applied to the specimen during the test.
*   **Deflection:** The displacement of the specimen at the point of load application, measured perpendicular to the neutral axis.
*   **Elastic Deformation:** Deformation that is temporary and reversible. When the load is removed, the material returns to its original shape.
*   **Plastic Deformation:** Permanent deformation that remains even after the load is removed. This occurs when the stress exceeds the material's yield strength.
*   **Span Length ($L$):** The distance between the two support points in a three-point bend test.
*   **Neutral Axis:** An imaginary line within a beam where the material is neither in tension nor compression during bending.

### 3. Theoretical Background (Three-Point Bend Test)

For a simply supported beam subjected to a concentrated load ($P$) at its center, the maximum deflection ($\delta$) at the center is given by the following formula:

$\delta = \frac{PL^3}{48EI}$

Where:
*   $\delta$ = deflection at the center
*   $P$ = applied load
*   $L$ = span length between supports
*   $E$ = Young's Modulus of the material
*   $I$ = Second moment of area of the specimen's cross-section

Rearranging this equation to solve for flexural stiffness ($EI$):

$EI = \frac{PL^3}{48\delta}$

This equation forms the basis for calculating the flexural stiffness from the experimental data obtained during the three-point bend test.

**Relationship to Young's Modulus:**

If the second moment of area ($I$) of the specimen's cross-section is known, the Young's Modulus ($E$) can be calculated:

$E = \frac{EI}{I}$

### 4. Experimental Procedure on a UTM

**Objective:** To measure the load-deflection relationship for a specimen under a three-point bend test and subsequently calculate its flexural stiffness.

**Materials:**
*   Mild Steel specimen
*   Copper specimen
*   Brass specimen (typically rectangular cross-section)
*   Universal Testing Machine (UTM) equipped with bending fixture
*   Calipers or micrometer for measuring specimen dimensions

**Steps:**

1.  **Specimen Preparation:**
    *   Measure the width ($b$) and height ($h$) of the specimen's rectangular cross-section accurately using calipers or a micrometer. Record these values.
    *   Calculate the second moment of area ($I$) for the rectangular cross-section: $I = \frac{bh^3}{12}$.
    *   Ensure the specimen is free from any surface defects that might initiate premature failure.

2.  **UTM Setup:**
    *   Install the appropriate bending fixture onto the UTM. This typically involves two lower support anvils and an upper loading anvil.
    *   Position the two support anvils at the desired span length ($L$). Ensure the span is consistent for all tests.
    *   Carefully place the specimen onto the support anvils, ensuring it is centered and rests securely.
    *   Position the upper loading anvil directly at the center of the specimen's span.

3.  **Data Acquisition Setup:**
    *   Connect a suitable extensometer or displacement transducer to measure the deflection of the specimen at the point of load application. Ensure it is correctly zeroed.
    *   Configure the UTM software to record load and deflection data simultaneously.

4.  **Performing the Test:**
    *   **Set Test Parameters:**
        *   **Loading Rate:** A slow, controlled loading rate is crucial to ensure accurate data acquisition and to stay within the elastic limit initially. The UTM should be set to apply load at a constant rate or displacement at a constant rate.
        *   **Pre-load (Optional but Recommended):** A small initial load can be applied to seat the specimen properly and remove any slack in the system.
    *   **Apply Load Gradually:** Start the test. The UTM will begin applying load through the central anvil.
    *   **Record Data:** The UTM software will automatically record pairs of load ($P$) and corresponding deflection ($\delta$) values. Record data points throughout the elastic region of the material.
    *   **Observe Behavior:** Visually observe the specimen for any signs of yielding or deformation.
    *   **Continue to Failure (Optional):** For some tests, you might continue loading until the specimen fractures. However, for determining flexural stiffness, data within the elastic limit is sufficient.

5.  **Data Analysis:**
    *   **Plot Load vs. Deflection:** Plot the recorded load ($P$) on the y-axis and the corresponding deflection ($\delta$) on the x-axis.
    *   **Identify the Elastic Region:** The initial portion of the load-deflection curve should be a straight line, representing elastic deformation.
    *   **Calculate the Slope:** Determine the slope of the linear elastic region of the load-deflection curve. This slope is equal to $\frac{P}{\delta}$.
    *   **Calculate Flexural Stiffness (EI):** Using the formula derived earlier, where $EI = \frac{PL^3}{48\delta}$:
        *   You can pick a specific load-deflection point ($P, \delta$) from the linear region, or
        *   More accurately, use the slope ($m = \frac{P}{\delta}$) obtained from the linear regression of the elastic region: $EI = \frac{mL^3}{48}$.
    *   **Calculate Young's Modulus (E):** Once $EI$ and $I$ are known, calculate $E = \frac{EI}{I}$.

6.  **Repeat for Other Materials:** Perform the same procedure for copper and brass specimens.

7.  **Compare Results:** Compare the calculated flexural stiffness ($EI$) and Young's Modulus ($E$) values for mild steel, copper, and brass.

### 5. Interpreting Results and Relating to Material Properties

*   **Mild Steel:** Generally exhibits high strength and stiffness due to its iron-carbon microstructure and potential for alloying. Expect a relatively high $E$ value.
*   **Copper:** Softer and more ductile than steel, with a lower Young's Modulus. Its FCC crystal structure contributes to its ductility.
*   **Brass:** An alloy of copper and zinc, its properties can vary depending on the composition. It is typically stronger and stiffer than pure copper but less stiff than steel.

**Factors Affecting Flexural Stiffness:**

*   **Material Properties (Young's Modulus, E):** Higher $E$ leads to higher $EI$.
*   **Cross-sectional Geometry (Second Moment of Area, I):** A larger $I$ leads to higher $EI$. For a rectangle, increasing the height ($h$) has a much greater impact than increasing the width ($b$) due to the $h^3$ term.
*   **Span Length (L):** While not part of the $EI$ definition, a longer span makes a beam more flexible (more deflection for the same load and material/geometry). The formula $EI = \frac{PL^3}{48\delta}$ implicitly shows that for the same load and material properties, a longer span requires a larger $EI$ to achieve the same deflection.

**Connection to Course Outcomes:**

*   **CO1 (Evaluate Mechanical Properties):** Directly addressed by calculating flexural stiffness and Young's Modulus.
*   **CO2 (Relate Microstructure to Behavior):** Understanding the typical differences in $E$ between steel, copper, and brass can be linked to their crystal structures (BCC for steel, FCC for copper and brass) and alloying elements.
*   **CO3 (Analyze Design Features):** The importance of the second moment of area ($I$) highlights how cross-sectional design significantly impacts a component's bending resistance.
*   **CO4 (Utilize Experimental Techniques):** The core of this module is hands-on experience with UTM and bend testing.
*   **CO5 (Apply Engineering Principles):** The application of beam bending theory and formulas is central to this module.

### 6. Important Points to Remember

*   **Elastic Limit:** Ensure your data is collected within the elastic region of the material. The load-deflection plot should be linear.
*   **Accurate Measurements:** Precise measurement of specimen dimensions and span length is critical for accurate calculations.
*   **Consistent Setup:** Maintain a consistent span length and loading point for all specimens.
*   **Controlled Loading:** Use a slow and steady loading rate to prevent dynamic effects and allow for accurate data recording.
*   **Units:** Ensure consistency in units throughout your calculations (e.g., mm for dimensions, N for load, MPa for stress, GPa for modulus).
*   **Second Moment of Area:** Double-check your calculation of $I$ based on the cross-sectional dimensions.
*   **Temperature:** Room temperature variations can have a minor effect on material properties.

### 7. Practice Questions and Exercises

**Exercise 1: Calculation of Second Moment of Area and Flexural Stiffness**

A rectangular mild steel specimen has a width of 12 mm and a height of 6 mm. It is tested in a three-point bend test with a span length ($L$) of 100 mm. During the test, a load of 500 N is applied, resulting in a deflection of 2 mm within the elastic region.

**Questions:**

a) Calculate the second moment of area ($I$) of the specimen's cross-section.
b) Calculate the flexural stiffness ($EI$) of the specimen.
c) Calculate the Young's Modulus ($E$) of the mild steel. (Assume the deflection of 2 mm at 500 N is representative of the linear elastic region).

**Answer 1:**

a) $b = 12$ mm, $h = 6$ mm
   $I = \frac{bh^3}{12} = \frac{(12 \text{ mm})(6 \text{ mm})^3}{12} = \frac{(12)(216)}{12} \text{ mm}^4 = 216 \text{ mm}^4$

b) $P = 500$ N, $L = 100$ mm, $\delta = 2$ mm
   $EI = \frac{PL^3}{48\delta} = \frac{(500 \text{ N})(100 \text{ mm})^3}{48(2 \text{ mm})} = \frac{(500)(1,000,000)}{96} \text{ N}\cdot\text{mm}^2 = \frac{500,000,000}{96} \text{ N}\cdot\text{mm}^2 \approx 5,208,333 \text{ N}\cdot\text{mm}^2$

c) Convert $I$ to m$^4$ and $EI$ to N$\cdot$m$^2$ for standard units of E (MPa or GPa):
   $I = 216 \text{ mm}^4 = 216 \times (10^{-3} \text{ m})^4 = 216 \times 10^{-12} \text{ m}^4$
   $EI \approx 5,208,333 \text{ N}\cdot\text{mm}^2 = 5,208,333 \times (10^{-3} \text{ m})^2 = 5,208,333 \times 10^{-6} \text{ N}\cdot\text{m}^2 = 5208.33 \text{ N}\cdot\text{m}^2$

   $E = \frac{EI}{I} = \frac{5208.33 \text{ N}\cdot\text{m}^2}{216 \times 10^{-12} \text{ m}^4} \approx 2.41 \times 10^{10} \text{ N/m}^2 = 24.1 \times 10^9 \text{ N/m}^2 = 24.1 \text{ GPa}$

   *Note: Typical Young's Modulus for mild steel is around 200 GPa. This significant difference indicates that the assumed deflection might be outside the true elastic limit or there are experimental errors.*

**Exercise 2: Conceptual Understanding**

Consider two beams of the same material, with identical lengths and widths. Beam A has a square cross-section, while Beam B has a rectangular cross-section with twice the height and half the width of Beam A.

**Question:** Which beam has a higher flexural stiffness ($EI$), and why?

**Answer 2:**

Beam B will have a significantly higher flexural stiffness ($EI$).
This is because flexural stiffness is directly proportional to the second moment of area ($I$). For a rectangular cross-section, $I = \frac{bh^3}{12}$.

Let Beam A have dimensions $b_A = b$ and $h_A = h$.
$I_A = \frac{b h^3}{12}$

Let Beam B have dimensions $b_B = b/2$ and $h_B = 2h$.
$I_B = \frac{b_B h_B^3}{12} = \frac{(b/2)(2h)^3}{12} = \frac{(b/2)(8h^3)}{12} = \frac{8bh^3}{24} = \frac{bh^3}{3}$

Comparing $I_A$ and $I_B$:
$I_B = 4 \times (\frac{bh^3}{12}) = 4 \times I_A$

Since the Young's Modulus ($E$) is the same for both beams, and $I_B$ is 4 times larger than $I_A$, the flexural stiffness of Beam B ($EI_B$) will be 4 times greater than Beam A ($EI_A$). This demonstrates that the height of the cross-section has a cubic effect on its resistance to bending.

---

This comprehensive study guide provides the theoretical foundation, practical procedures, and analytical methods required to successfully evaluate the flexural stiffness of materials using a three-point bend test on a UTM. Remember to consult your lab manual for specific machine operating instructions and data recording formats.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
