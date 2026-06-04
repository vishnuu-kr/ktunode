---
title: "Flexural behaviour of steel by conducting a bending test on Rolled steel sections (I cross section)"
subject: "MATERIALS TESTING LAB"
module: "Module 3: Flexural behaviour of steel by conducting a bending test on Rolled steel sections (I cross section)"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810d05"
status: "completed"
scrapedAt: "2026-05-20T18:45:41.251Z"
---
# Materials Testing Lab: Module 3 - Flexural Behaviour of Steel (I-Section)

## Introduction to Flexural Behaviour

This module explores the **flexural behaviour** of rolled steel sections, specifically **I-sections**, when subjected to a **bending test**. Understanding how these structural elements deform and resist bending loads is crucial for safe and efficient design in civil engineering.

### Key Concepts and Definitions

*   **Flexure/Bending:** The deformation of a structural element when subjected to external forces or moments that cause it to curve.
*   **Bending Moment (M):** An internal or external moment that causes bending. It's a measure of the tendency of a force to cause rotation.
*   **Shear Force (V):** An internal or external force acting perpendicular to the longitudinal axis of a structural element, causing it to shear or slide.
*   **Stress (σ):** The internal resistance of a material to an applied external force, measured as force per unit area.
    *   **Tensile Stress:** Stress that arises from forces pulling apart a material.
    *   **Compressive Stress:** Stress that arises from forces pushing together a material.
*   **Strain (ε):** The deformation of a material in response to stress, measured as the change in length per unit original length.
*   **Neutral Axis (NA):** An imaginary line within a cross-section where the bending stress is zero. For symmetric sections, it coincides with the centroidal axis.
*   **Moment of Inertia (I):** A geometric property of a cross-section that represents its resistance to bending. A higher moment of inertia indicates greater stiffness.
*   **Section Modulus (S):** A geometric property of a cross-section that relates the bending moment to the maximum bending stress. $S = I/y$, where 'y' is the distance from the neutral axis to the outermost fiber.
*   **Yield Strength (σ_y):** The stress at which a material begins to deform plastically (permanently).
*   **Ultimate Tensile Strength (UTS):** The maximum stress a material can withstand before fracturing.
*   **Modulus of Elasticity (E):** A material property that describes its stiffness or resistance to elastic deformation. Also known as Young's Modulus.
*   **Deflection:** The displacement of a structural element from its original position under load.

### Rolled Steel I-Sections

*   **Description:** I-sections, also known as Universal Beams (UB) or Wide Flange Beams (WFB), are common structural shapes consisting of two flanges connected by a web. They are designed for optimal strength-to-weight ratio in bending applications.
*   **Key Components:**
    *   **Flanges:** The horizontal elements at the top and bottom of the 'I'. They resist the majority of the bending moment.
    *   **Web:** The vertical element connecting the flanges. It resists the shear forces.
    *   **Fillet:** The radius connecting the web to the flange.
*   **Advantages in bending:** The distribution of material in the flanges, far from the neutral axis, maximizes the moment of inertia, making I-sections efficient in resisting bending.

## The Bending Test on I-Sections

### Learning Outcomes Covered:

*   **Understanding the objective of the bending test:** To investigate the flexural behaviour of steel I-sections.
*   **Familiarity with the experimental setup:** The equipment and procedure used in the test.
*   **Ability to determine the neutral axis:** For a given I-section.
*   **Ability to calculate bending stresses:** Tensile and compressive stresses in the I-section.
*   **Ability to calculate bending moments:** Internal and external moments.
*   **Ability to plot load-deflection curves:** And interpret their meaning.
*   **Ability to determine material properties:** Such as Modulus of Elasticity (E) and Yield Strength (σ_y) from the test data.
*   **Ability to analyze the failure modes:** Of the I-section under bending.

### Experimental Setup and Procedure

**1. Equipment:**

*   **Universal Testing Machine (UTM):** The primary machine used to apply the load and measure it.
*   **Rolled Steel I-section Specimen:** The sample being tested.
*   **Deflection Measuring Device:** Dial gauge, LVDT (Linear Variable Differential Transformer), or extensometer to measure deflection at mid-span.
*   **Brackets/Supports:** To hold the specimen in a simply supported or cantilever configuration (typically simply supported for this test).
*   **Loading Mechanism:** For applying the load at specific points (e.g., three-point bending or four-point bending).
*   **Data Acquisition System:** To record load and deflection readings.

**2. Test Configuration (Typical: Three-Point Bending):**

*   The I-section specimen is supported at two points, creating a span.
*   A single point load is applied at the center of the span.
*   This configuration creates a region of constant maximum bending moment at the center.

**3. Procedure:**

*   **Specimen Preparation:**
    *   Measure and record the dimensions of the I-section (flange width, flange thickness, web height, web thickness, overall depth, span length).
    *   Identify the top and bottom surfaces of the specimen.
*   **Setup:**
    *   Place the I-section specimen on the supports in the UTM.
    *   Position the deflection measuring device to accurately record deflection at the center of the span.
    *   Ensure proper alignment of the specimen and loading point.
*   **Loading:**
    *   Apply the load gradually and continuously using the UTM.
    *   Record the applied load and the corresponding deflection at regular intervals.
    *   Continue loading until the specimen fails or a significant portion of its plastic capacity is reached.
*   **Data Recording:**
    *   Create a table to record Load (P) vs. Deflection (δ).
    *   Note any observations during the test, such as yielding, buckling, or fracture.

### Determining the Neutral Axis

*   For a **symmetric I-section**, the neutral axis is located at the **centroidal axis**, which is exactly in the middle of the web.
*   **Experimental determination (if needed for asymmetric sections or verification):**
    *   Mark a longitudinal line on the specimen.
    *   As the load is applied, observe where the material is neither stretching (tension) nor compressing. This line represents the neutral axis. This can be done using strain gauges or by observing the deformation of markings on the surface. For a standard I-section, this is generally assumed to be at the geometric center.

### Calculations

**1. Bending Moment (M):**

For a three-point bending test with a load $P$ applied at the center of a span $L$, the bending moment at the center is:

$M = (P * L) / 4$

**2. Bending Stresses (σ):**

The bending stress at a distance 'y' from the neutral axis is given by the flexure formula:

$σ = (M * y) / I$

*   **Tensile stress:** Occurs on the surface furthest from the neutral axis in the direction opposite to the applied load (e.g., the bottom flange in a downward loading scenario).
*   **Compressive stress:** Occurs on the surface furthest from the neutral axis in the same direction as the applied load (e.g., the top flange in a downward loading scenario).

**3. Modulus of Inertia (I):**

The moment of inertia for an I-section needs to be calculated based on its geometric dimensions. The formula for the moment of inertia of an I-section about its strong axis (the axis parallel to the flanges) is a bit more involved, typically calculated by considering the flanges and web as rectangular areas:

$I = Σ (I_element + A_element * d^2)$

Where:
*   $I_{element}$: Moment of inertia of the individual element (flange or web) about its own centroidal axis parallel to the neutral axis of the whole section.
*   $A_{element}$: Area of the individual element.
*   $d$: Distance from the centroid of the individual element to the neutral axis of the whole section.

**For a typical I-section:**

Let:
*   $b_f$: Width of the flange
*   $t_f$: Thickness of the flange
*   $h_w$: Height of the web
*   $t_w$: Thickness of the web
*   $H$: Overall depth of the I-section

The neutral axis is at $H/2$ from the top and bottom.

**Moment of Inertia of the flanges:**
$I_{flanges} = 2 * [ (b_f * t_f^3) / 12 + (b_f * t_f) * (H/2 - t_f/2)^2 ]$

**Moment of Inertia of the web:**
$I_{web} = (t_w * h_w^3) / 12$

**Total Moment of Inertia:**
$I = I_{flanges} + I_{web}$

**(Note:** For simplicity in the lab, often the calculated 'I' value for a standard section is provided, or the calculation is simplified assuming the web's contribution is minor if it's very thin compared to the flanges' lever arm).

**4. Modulus of Elasticity (E):**

From the elastic portion of the load-deflection curve (typically the initial straight-line portion), the Modulus of Elasticity can be calculated. For a simply supported beam with a central load, the deflection ($δ$) is related to the load ($P$) by:

$δ = (P * L^3) / (48 * E * I)$

Rearranging to find E:

$E = (P * L^3) / (48 * δ * I)$

**5. Yield Strength (σ_y):**

*   Identify the point on the load-deflection curve where the slope significantly decreases, indicating the onset of plastic deformation.
*   Calculate the corresponding bending moment at this point.
*   Calculate the bending stress at the outermost fiber (flange) using the flexure formula ($σ = (M * y) / I$). This stress is the yield stress for the material.
    *   $y_{max}$ is the distance from the neutral axis to the extreme fiber (half the total depth of the I-section).

**6. Section Modulus (S):**

$S = I / y_{max}$

The yield moment ($M_y$) can also be expressed as:

$M_y = σ_y * S$

### Load-Deflection Curve

*   **X-axis:** Applied Load (P) or Applied Moment (M)
*   **Y-axis:** Deflection (δ)
*   **Elastic Region:** A linear relationship between load and deflection. The slope of this region is related to $EI$.
*   **Yield Point:** The point where the curve starts to deviate from linearity. This indicates the onset of yielding in the extreme fibers.
*   **Plastic Region:** The curve becomes non-linear, and the deflection increases significantly for small increases in load.
*   **Ultimate Load:** The maximum load the specimen can carry.
*   **Failure:** The point at which the specimen fractures or exhibits significant buckling.

### Failure Modes

Under bending, steel I-sections can fail in several ways:

*   **Material Yielding:** The extreme fibers reach the yield strength and begin to deform plastically. This is usually the first sign of significant deformation.
*   **Web Buckling (Local Buckling):** The thin web can buckle under shear or bending stresses, especially if its slenderness ratio (height/thickness) is high. This often occurs as a wave-like deformation.
*   **Flange Buckling (Local Buckling):** The flanges can buckle locally if their width-to-thickness ratio is high.
*   **Lateral-Torsional Buckling (LTB):** The compression flange (top flange in a simply supported beam with downward load) can buckle laterally outwards, and the section twists. This is a common failure mode for slender beams that are not adequately braced.
*   **Shear Failure:** While less common in typical bending tests for I-sections due to the web's efficiency, excessive shear forces can lead to failure of the web.
*   **Fracture:** The material eventually breaks after significant yielding and deformation.

**Important to Note:** The type of failure observed depends on the specimen's dimensions, material properties, and the test conditions (e.g., presence of lateral bracing).

## Practice Questions and Exercises

**Question 1:**
An I-section with the following dimensions is subjected to a three-point bending test over a span of 1 meter. The moment of inertia about the strong axis is calculated to be $4.5 \times 10^{-5} \text{ m}^4$. The overall depth of the section is 100 mm. If a load of 10 kN is applied at the center, what is the maximum bending stress in the section?

**Answer 1:**
*   **Load (P):** 10 kN = 10,000 N
*   **Span (L):** 1 m
*   **Moment of Inertia (I):** $4.5 \times 10^{-5} \text{ m}^4$
*   **Overall Depth:** 100 mm
*   **Distance to extreme fiber (y_max):** 100 mm / 2 = 50 mm = 0.05 m

1.  **Calculate the bending moment (M):**
    $M = (P * L) / 4$
    $M = (10,000 \text{ N} * 1 \text{ m}) / 4 = 2,500 \text{ Nm}$

2.  **Calculate the maximum bending stress (σ_max):**
    $σ = (M * y_{max}) / I$
    $σ = (2,500 \text{ Nm} * 0.05 \text{ m}) / (4.5 \times 10^{-5} \text{ m}^4)$
    $σ = 0.125 \text{ Nm}^2 / (4.5 \times 10^{-5} \text{ m}^4)$
    $σ ≈ 2,777,778 \text{ N/m}^2$
    $σ ≈ 2.78 \text{ MPa}$

**Question 2:**
During a bending test, the load-deflection data in the elastic region showed a load of 2000 N causing a deflection of 2 mm at the mid-span of a simply supported I-section specimen. The span length is 0.8 m, and the calculated moment of inertia is $3.2 \times 10^{-5} \text{ m}^4$. Calculate the Modulus of Elasticity (E) of the steel.

**Answer 2:**
*   **Load (P):** 2000 N
*   **Deflection (δ):** 2 mm = 0.002 m
*   **Span (L):** 0.8 m
*   **Moment of Inertia (I):** $3.2 \times 10^{-5} \text{ m}^4$

1.  **Calculate the Modulus of Elasticity (E):**
    $E = (P * L^3) / (48 * δ * I)$
    $E = (2000 \text{ N} * (0.8 \text{ m})^3) / (48 * 0.002 \text{ m} * 3.2 \times 10^{-5} \text{ m}^4)$
    $E = (2000 \text{ N} * 0.512 \text{ m}^3) / (0.000096 \text{ m}^5 * 48)$
    $E = 1024 \text{ Nm}^2 / (0.004608 \text{ m}^5)$
    $E ≈ 222,222,222 \text{ N/m}^2$
    $E ≈ 222.2 \text{ GPa}$

**Question 3:**
What are the primary components of an I-section and their role in resisting bending?

**Answer 3:**
The primary components of an I-section are the **flanges** and the **web**.
*   **Flanges:** These are the horizontal parts at the top and bottom. They are located furthest from the neutral axis and are primarily responsible for resisting the **bending moment** by carrying tensile and compressive stresses.
*   **Web:** This is the vertical part connecting the flanges. It is located closest to the neutral axis and is primarily responsible for resisting the **shear forces**.

**Question 4:**
Describe two potential failure modes for an I-section under bending other than material yielding.

**Answer 4:**
Two potential failure modes are:
1.  **Lateral-Torsional Buckling (LTB):** This occurs when the compression flange buckles laterally outwards, and the entire section twists. This is more common in slender beams that are not laterally supported.
2.  **Web Buckling:** The thin web can buckle under excessive shear or bending stresses, especially if its height-to-thickness ratio is high. This results in a wave-like deformation of the web.

## Important Points to Remember

*   **Symmetry is Key:** For symmetric I-sections, the neutral axis is at the geometric center. This simplifies stress calculations.
*   **Elastic vs. Plastic:** The behaviour of the steel changes significantly once the yield strength is exceeded. The load-deflection curve transitions from linear (elastic) to non-linear (plastic).
*   **Stress Distribution:** Bending stress is zero at the neutral axis and maximum at the extreme fibers (top and bottom flanges).
*   **Moment of Inertia:** A higher moment of inertia indicates a stiffer section and greater resistance to bending.
*   **Failure Modes:** Be aware of different failure mechanisms like yielding, web buckling, and lateral-torsional buckling, as they dictate the ultimate load-carrying capacity.
*   **Bracing:** Lateral bracing of the compression flange is crucial to prevent lateral-torsional buckling.

This comprehensive set of notes should provide a strong foundation for understanding the flexural behaviour of steel I-sections in your Materials Testing Lab. Remember to pay close attention to the experimental procedure and accurate data recording during the actual test.
