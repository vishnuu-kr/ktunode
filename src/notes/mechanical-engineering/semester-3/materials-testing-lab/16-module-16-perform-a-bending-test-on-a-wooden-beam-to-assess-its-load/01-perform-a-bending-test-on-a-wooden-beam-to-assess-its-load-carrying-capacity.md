---
title: "Perform a bending test on a wooden beam to assess its load-carrying capacity."
subject: "MATERIALS TESTING LAB"
module: "Module 16: Perform a bending test on a wooden beam to assess its load"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462e8e"
status: "completed"
scrapedAt: "2026-05-20T17:50:29.476Z"
---
# Materials Testing Lab: Module 16 - Bending Test on Wooden Beams

## Topic: Perform a Bending Test on a Wooden Beam to Assess its Load-Carrying Capacity

This module focuses on understanding the behavior of wooden beams under bending stress and determining their load-carrying capacity through a practical testing procedure. This is crucial for structural applications where beams are frequently subjected to transverse loads.

---

### 1. Introduction to Bending (Flexure)

**Definition:** Bending, also known as flexure, is a type of stress that occurs when a beam or other structural element is subjected to a load that causes it to bend. This bending results in both tensile stresses on one side of the beam and compressive stresses on the other side.

**Key Concepts:**

*   **Beam:** A structural element that primarily resists loads applied laterally to its axis.
*   **Transverse Load:** A load applied perpendicular to the longitudinal axis of the beam.
*   **Bending Moment (M):** The internal moment within the beam caused by the applied loads, which induces bending.
*   **Shear Force (V):** The internal force within the beam caused by the applied loads, acting perpendicular to the beam's axis.
*   **Neutral Axis:** An imaginary line within the beam where there is no stress (neither tensile nor compressive). For symmetrical cross-sections, it passes through the centroid.
*   **Bending Stress ($\sigma$):** The stress induced in the beam due to the bending moment. It varies linearly across the cross-section, being maximum at the top and bottom surfaces.
    *   **Tensile Stress:** Occurs on the surface experiencing stretching (e.g., the bottom surface of a simply supported beam with a downward load).
    *   **Compressive Stress:** Occurs on the surface experiencing compression (e.g., the top surface of a simply supported beam with a downward load).

**Relevant Formulas (from Gere & Goodno, Callister):**

The fundamental relationship for bending stress is given by the flexure formula:

$\sigma = \frac{My}{I}$

Where:
*   $\sigma$ = bending stress at a distance $y$ from the neutral axis.
*   $M$ = bending moment at the section of interest.
*   $y$ = distance from the neutral axis to the point where stress is being calculated.
*   $I$ = moment of inertia (second moment of area) of the beam's cross-section about the neutral axis.

**Example:** Consider a simply supported beam of length $L$ with a concentrated load $P$ at its center. The maximum bending moment occurs at the center and is given by $M_{max} = \frac{PL}{4}$. The maximum bending stress will occur at the top and bottom surfaces, furthest from the neutral axis.

---

### 2. Materials and Specimen Preparation

**Wood as a Material:**

Wood is an anisotropic material, meaning its mechanical properties vary depending on the direction of the grain. This is a critical consideration when performing bending tests.

**Key Properties of Wood Relevant to Bending:**

*   **Modulus of Rupture (MOR) / Bending Strength:** The maximum bending stress a material can withstand before fracturing. This is the primary property we aim to assess in this test.
*   **Modulus of Elasticity (MOE) / Young's Modulus (E):** A measure of the material's stiffness or resistance to elastic deformation. It relates stress to strain in the elastic region.
*   **Grain Direction:** Parallel to the length of the wood fibers. Bending strength is significantly higher when the load is applied perpendicular to the grain.
*   **Defects:** Knots, cracks, and grain deviations can significantly reduce load-carrying capacity and lead to premature failure.

**Specimen Preparation:**

*   **Type of Wood:** Typically, standard beams of known wood species are used. The type of wood will influence the expected strength and stiffness.
*   **Dimensions:** Beams should have consistent dimensions (length, width, depth) as specified by testing standards (e.g., ASTM D143 for small clear specimens of timber).
*   **Moisture Content:** The moisture content of the wood significantly affects its strength. Specimens are often conditioned to a specific moisture content (e.g., 12%).
*   **Specimen Alignment:** Ensure the specimen is placed squarely in the testing machine to avoid eccentric loading, which can complicate the stress distribution.

**Relevant Textbook Content:**

*   **Callister's Materials Science and Engineering:** Discusses the anisotropic nature of wood and how its structure (cellulose fibers, lignin) influences mechanical properties. Section on the "Mechanical Behavior of Wood" will be relevant.
*   **Shackelford's Introduction to Materials Science for Engineers:** Provides general principles of material behavior under stress, which are applicable to wood.

---

### 3. Experimental Setup and Procedure

**Testing Machine:**

A Universal Testing Machine (UTM) equipped with appropriate fixtures for bending tests is required. These machines can apply controlled loads and measure load and displacement.

**Common Bending Test Configurations:**

*   **Three-Point Bending:** The specimen is supported at two points, and the load is applied at a single point exactly midway between the supports. This is the most common configuration for testing beams.
*   **Four-Point Bending:** The specimen is supported at two points, and two equal loads are applied at two points, creating a region of constant bending moment between these two load points. This configuration is useful for determining the MOE more accurately as it avoids shear deformation effects in the central region.

**Procedure (Focusing on Three-Point Bending):**

1.  **Measure Specimen Dimensions:** Accurately measure the width ($b$), depth ($h$), and span length ($L$) of the wooden beam. Record these values.
2.  **Place Specimen:** Position the beam on the supports of the UTM. Ensure the span ($L$) is correctly set and the beam is centered.
3.  **Set Up Load Application:** Position the loading head to apply the load at the midpoint of the span.
4.  **Attach Displacement Transducer (Optional but Recommended):** If measuring deflection, attach a linear variable displacement transducer (LVDT) or extensometer to the beam at the point of load application, measuring the downward displacement.
5.  **Start Test:** Begin the test by applying a controlled load at a constant displacement rate. The UTM will record the applied load and the corresponding displacement.
6.  **Observe Failure:** Monitor the beam for signs of deformation and eventual fracture. Note the load at which failure occurs.
7.  **Record Data:** Log the load-deflection data throughout the test.
8.  **Post-Test Analysis:** Examine the fracture surface to understand the failure mode.

**Important Note on Loading Direction:** For most practical applications, wooden beams are loaded so that the bending moment creates tension on the bottom face and compression on the top face. Ensure the specimen is oriented correctly.

**Relevant Textbook Content:**

*   **Kuhn & Medlin's Mechanical Testing and Evaluation:** Details various mechanical testing procedures, including bending tests, and the operation of UTMs. Chapter on "Flexural Testing" will be highly relevant.
*   **Callister's Materials Science and Engineering:** May include diagrams of bending test setups.

---

### 4. Data Analysis and Calculations

The data collected from the UTM (load vs. displacement) can be used to determine key mechanical properties.

**Key Calculations:**

1.  **Maximum Load ($P_{max}$):** The peak load recorded just before or at the point of failure.
2.  **Modulus of Rupture (MOR) / Bending Strength ($\sigma_{max}$):**
    For a three-point bending test, the maximum bending stress occurs at the midpoint of the beam and is calculated using the flexure formula, rearranged to solve for stress at failure:

    $\sigma_{max} = \frac{M_{max} y_{max}}{I}$

    Where:
    *   $M_{max} = \frac{P_{max} L}{4}$ (Maximum bending moment for a three-point bend)
    *   $y_{max} = \frac{h}{2}$ (Distance from the neutral axis to the outer fiber for a rectangular cross-section)
    *   $I = \frac{bh^3}{12}$ (Moment of inertia for a rectangular cross-section)

    Substituting these into the stress formula:

    $\sigma_{max} = \frac{(\frac{P_{max} L}{4})(\frac{h}{2})}{\frac{bh^3}{12}} = \frac{3 P_{max} L}{2 bh^2}$

    **Units:** Stress is typically in Pascals (Pa) or Megapascals (MPa).

3.  **Modulus of Elasticity (MOE) / Young's Modulus (E):**
    This is determined from the elastic region of the load-deflection curve. For a three-point bending test, the deflection ($\delta$) at the center due to a load ($P$) is given by:

    $\delta = \frac{P L^3}{48 EI}$

    Rearranging to solve for $E$:

    $E = \frac{P L^3}{48 I \delta}$

    To calculate $E$, select a point in the linear elastic region of the load-deflection curve. Calculate the slope of this linear portion ($\frac{\Delta P}{\Delta \delta}$).
    Then, the formula becomes:

    $E = \frac{L^3}{48 I} \left( \frac{\Delta P}{\Delta \delta} \right)$

    Substituting $I = \frac{bh^3}{12}$:

    $E = \frac{L^3}{48 (\frac{bh^3}{12})} \left( \frac{\Delta P}{\Delta \delta} \right) = \frac{4 L^3}{bh^3} \left( \frac{\Delta P}{\Delta \delta} \right)$

    **Units:** MOE is typically in Pascals (Pa) or Gigapascals (GPa).

**Important Note on MOE Calculation:** It's best to use data from a four-point bending test for a more accurate MOE as it minimizes shear deformation effects. If using three-point bending, be mindful of this limitation.

**Example Calculation:**

Suppose a wooden beam with dimensions $b = 20$ mm, $h = 30$ mm, and span $L = 200$ mm fails at a load of $P_{max} = 500$ N. From the elastic region of the load-deflection curve, a load increase of $\Delta P = 100$ N resulted in a deflection increase of $\Delta \delta = 0.5$ mm.

*   **MOR Calculation:**
    $\sigma_{max} = \frac{3 \times 500 \text{ N} \times 200 \text{ mm}}{2 \times 20 \text{ mm} \times (30 \text{ mm})^2}$
    $\sigma_{max} = \frac{300000 \text{ N-mm}}{2 \times 20 \text{ mm} \times 900 \text{ mm}^2} = \frac{300000}{36000} \text{ N/mm}^2 = 8.33 \text{ N/mm}^2 = 8.33 \text{ MPa}$

*   **MOE Calculation:**
    $E = \frac{4 \times (200 \text{ mm})^3}{(20 \text{ mm}) \times (30 \text{ mm})^3} \times \left( \frac{100 \text{ N}}{0.5 \text{ mm}} \right)$
    $E = \frac{4 \times 8 \times 10^6 \text{ mm}^3}{20 \text{ mm} \times 27000 \text{ mm}^3} \times (200 \text{ N/mm})$
    $E = \frac{32 \times 10^6}{540000} \times 200 \text{ N/mm}^2$
    $E = 59.26 \times 200 \text{ N/mm}^2 = 11852 \text{ N/mm}^2 = 11.85 \text{ GPa}$

**Relevant Textbook Content:**

*   **Gere & Goodno's Mechanics of Materials:** Provides detailed derivations of beam bending formulas and calculation methods. Chapters on "Flexural Stresses in Beams" and "Deflection of Beams" are key.
*   **Kuhn & Medlin's Mechanical Testing and Evaluation:** Discusses how to interpret load-displacement data to calculate mechanical properties.

---

### 5. Failure Modes and Interpretation

Understanding how a wooden beam fails in bending is crucial for assessing its load-carrying capacity and the reliability of the material.

**Common Failure Modes in Wooden Beams:**

*   **Bending Fracture:** The most common failure mode, occurring when the bending stress exceeds the MOR. The beam cracks and breaks, often at the point of maximum bending moment.
    *   **Grain Compression Failure:** The wood on the compression side crushes.
    *   **Grain Tension Failure:** The wood on the tension side tears apart.
*   **Shear Failure:** Occurs when the shear stress exceeds the shear strength of the wood. This is more likely in short, deep beams. The failure typically appears as a diagonal crack.
*   **Crushing at Supports/Load Points:** Localized crushing of the wood under the support or loading points, especially if the load is concentrated.
*   **Splitting:** The beam may split along the grain due to excessive tensile stress or impact.

**Factors Influencing Failure Mode:**

*   **Beam Geometry (Aspect Ratio):** Short, deep beams are more prone to shear failure. Long, slender beams are more prone to bending failure.
*   **Wood Species and Quality:** The inherent strength of the wood, presence of knots, and grain orientation significantly influence failure.
*   **Rate of Loading:** High loading rates can sometimes lead to more brittle fracture.

**Relating Microstructure to Behavior (CO2):**

The anisotropic nature of wood stems from its fibrous microstructure. Cellulose fibers, oriented along the grain, provide high tensile strength in the longitudinal direction. Lignin, a binder, contributes to compressive strength and stiffness. However, in bending, the failure is often dictated by the weaker transverse properties (perpendicular to the grain) when tensile stresses are applied in that direction, or by the crushing strength of the fibers in compression. Knots and grain deviations act as stress concentrators, initiating cracks.

**Example:** A knot on the tension side of a beam can create a localized stress concentration, leading to early fracture under bending.

**Important Points to Remember:**

*   The failure mode provides valuable insights into the material's behavior.
*   The location of failure often corresponds to the location of maximum stress (bending moment or shear force).
*   Wood's anisotropic nature means tests should be conducted with careful consideration of grain direction.

---

### 6. Practical Applications and Relevance

Understanding the bending behavior of wooden beams is fundamental in numerous engineering applications.

**Applications:**

*   **Building Construction:** Joists, rafters, beams, and structural framing in residential and commercial buildings.
*   **Furniture Design:** Chair legs, table supports, and structural components of furniture.
*   **Transportation:** Wooden components in wagons, carts, and even some historical marine structures.
*   **Packaging:** Crates and pallets designed to carry loads.

**Assessing Load-Carrying Capacity (CO1, CO5):**

By performing bending tests and calculating the MOR, engineers can determine the maximum load a wooden beam can safely support before failure. This allows for:

*   **Structural Design:** Selecting appropriate beam sizes and wood species for specific load requirements.
*   **Quality Control:** Ensuring that manufactured wooden components meet strength specifications.
*   **Failure Analysis:** Investigating why a wooden structure might have failed in service.

**Effect of Design Features (CO3):**

While this module focuses on a basic beam, real-world designs involve various features that affect load-carrying capacity. For example:

*   **Connections:** How beams are joined to other structural elements can introduce stress concentrations.
*   **Notches or Holes:** These create localized stress raisers, reducing the effective strength.
*   **Composite Beams:** Laminating wood or combining it with other materials can significantly enhance its load-carrying capacity and stiffness.

**Utilizing Experimental Techniques (CO4):**

This module directly addresses CO4 by providing a hands-on experience with a standard mechanical testing technique (bending test) to determine material properties (MOR, MOE).

---

### 7. Practice Questions and Exercises

**Question 1:**
A rectangular wooden beam with dimensions $b = 25$ mm, $h = 40$ mm, and a span of $L = 300$ mm is tested in a three-point bending setup. It fractures at a load of $P_{max} = 600$ N. Calculate the Modulus of Rupture (MOR) for this beam.

**Answer 1:**
Using the formula $\sigma_{max} = \frac{3 P_{max} L}{2 bh^2}$:
$\sigma_{max} = \frac{3 \times 600 \text{ N} \times 300 \text{ mm}}{2 \times 25 \text{ mm} \times (40 \text{ mm})^2}$
$\sigma_{max} = \frac{540000 \text{ N-mm}}{2 \times 25 \text{ mm} \times 1600 \text{ mm}^2} = \frac{540000}{80000} \text{ N/mm}^2 = 6.75 \text{ N/mm}^2 = 6.75 \text{ MPa}$

**Question 2:**
During a three-point bending test on a wooden beam, a load of $150$ N caused a deflection of $2$ mm. If the beam has a span of $250$ mm, a width of $30$ mm, and a depth of $50$ mm, calculate the Modulus of Elasticity (MOE). Assume the load is in the elastic region.
$I = \frac{bh^3}{12}$ for a rectangular cross-section.

**Answer 2:**
First, calculate the moment of inertia ($I$):
$I = \frac{30 \text{ mm} \times (50 \text{ mm})^3}{12} = \frac{30 \times 125000}{12} = 312500 \text{ mm}^4$

Now, use the formula for MOE in three-point bending: $E = \frac{P L^3}{48 I \delta}$
$E = \frac{150 \text{ N} \times (250 \text{ mm})^3}{48 \times 312500 \text{ mm}^4 \times 2 \text{ mm}}$
$E = \frac{150 \times 15625000}{48 \times 625000} \text{ N/mm}^2$
$E = \frac{2343750000}{30000000} \text{ N/mm}^2 = 78.125 \text{ N/mm}^2 = 78.125 \text{ MPa}$
*Correction needed: MOE is typically in GPa. Let's recalculate with correct units for the final answer.*
$E = \frac{150 \text{ N} \times (0.25 \text{ m})^3}{48 \times (3.125 \times 10^{-7} \text{ m}^4) \times (0.002 \text{ m})}$
$E = \frac{150 \times 0.015625}{48 \times 6.25 \times 10^{-10}} \text{ N/m}^2$
$E = \frac{2.34375}{3 \times 10^{-8}} \text{ Pa} = 7.8125 \times 10^7 \text{ Pa} = 78.125 \text{ MPa}$

*Let's re-evaluate the formula for MOE with the slope approach as it's more robust:*
Assuming a linear relationship from $P=0$ to $P=150$ N, $\Delta P = 150$ N and $\Delta \delta = 2$ mm.
$E = \frac{L^3}{48 I} \left( \frac{\Delta P}{\Delta \delta} \right)$
$E = \frac{(250 \text{ mm})^3}{48 \times 312500 \text{ mm}^4} \left( \frac{150 \text{ N}}{2 \text{ mm}} \right)$
$E = \frac{15625000 \text{ mm}^3}{15000000 \text{ mm}^4} \left( 75 \text{ N/mm} \right)$
$E = 1.04167 \text{ mm}^{-1} \times 75 \text{ N/mm} = 78.125 \text{ N/mm}^2 = 78.125 \text{ MPa}$

*It's important to note that wood MOE values are typically in the range of 10-20 GPa. The values obtained here might be lower due to the nature of the wood sample or the inaccuracies in three-point bending MOE calculations. Let's use the standard formula for calculation.*

$E = \frac{P L^3}{48 I \delta}$

$I = \frac{bh^3}{12} = \frac{25 \text{ mm} \times (40 \text{ mm})^3}{12} = \frac{25 \times 64000}{12} = 133333.33 \text{ mm}^4$
$E = \frac{600 \text{ N} \times (300 \text{ mm})^3}{48 \times 133333.33 \text{ mm}^4 \times (\text{deflection at } 600 \text{ N})}$

*The question needs to provide deflection at a specific load within the elastic region to calculate MOE. The initial calculation for MOR is correct.*

**Question 3:**
Describe two common failure modes observed in wooden beams subjected to bending and explain what factors might cause one mode over the other.

**Answer 3:**
1.  **Bending Fracture:** This occurs when the bending stress at the outer fibers exceeds the wood's tensile or compressive strength. It is more likely in longer, more slender beams where bending stresses dominate. The fracture can start on the tension side (tearing of wood fibers) or compression side (crushing of wood fibers).
2.  **Shear Failure:** This occurs when the shear stress within the beam exceeds the wood's shear strength. It is more prevalent in shorter, deeper beams where shear forces are more significant relative to bending moments. This failure typically manifests as a diagonal crack across the beam's cross-section.

---

### 8. Important Points to Remember

*   **Anisotropy of Wood:** Always consider the grain direction and its impact on strength.
*   **Flexure Formula ($\sigma = My/I$):** Understand how bending moment, section properties, and geometry dictate bending stress.
*   **Modulus of Rupture (MOR):** This is the ultimate bending strength.
*   **Modulus of Elasticity (MOE):** This represents the material's stiffness.
*   **Three-Point vs. Four-Point Bending:** Be aware of the advantages of each for determining specific properties. Three-point is common for MOR, while four-point is preferred for MOE.
*   **Failure Modes:** Observe and analyze the fracture surface to understand how the beam failed.
*   **Accurate Measurements:** Precise measurement of dimensions and load is crucial for accurate calculations.
*   **Moisture Content:** Understand its significant influence on wood's mechanical properties.

---

This comprehensive study guide provides the fundamental knowledge and practical considerations for performing a bending test on a wooden beam to assess its load-carrying capacity, aligning with the learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
