---
title: "Arch dams- thin cylinder theory"
subject: "DESIGN OF HYDRAULIC STRUCTURES"
module: "Module 4: Earth dams"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba811719"
status: "completed"
scrapedAt: "2026-05-20T18:57:55.394Z"
---
# Design of Hydraulic Structures - Module 4: Earth Dams

## Topic: Arch Dams - Thin Cylinder Theory

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the basic principles of arch action in dams.
*   Derive and apply the thin cylinder theory to analyze stresses in arch dams.
*   Calculate the hoop stress and radial stress in arch dams using the thin cylinder theory.
*   Discuss the assumptions and limitations of the thin cylinder theory for arch dam analysis.
*   Recognize the role of the thin cylinder theory in preliminary design of arch dams.

---

### 1. Introduction to Arch Dams

Arch dams are a type of concrete dam that utilize the principle of **arch action** to resist the force of water. Instead of relying solely on their mass (like gravity dams), arch dams transfer the water pressure horizontally through the arch structure to the abutments (the rock formations on the sides of the valley).

*   **Key Concept: Arch Action:** The ability of a curved structure to transmit loads through its curvature to supports. In arch dams, the water pressure, which acts horizontally, is converted into compressive forces along the arch, which are then transmitted to the valley sides.

*   **Advantages of Arch Dams:**
    *   Can be used in narrow, steep-sided valleys where other dam types might be impractical.
    *   Require less concrete compared to gravity dams for the same height.
    *   Economical in areas with strong rock abutments.

*   **Disadvantages of Arch Dams:**
    *   Require very strong and stable abutments.
    *   More complex to design and construct than gravity dams.
    *   Susceptible to thermal stresses and foundation deformations.

---

### 2. Thin Cylinder Theory for Arch Dams

The **Thin Cylinder Theory** is a simplified analytical method used for the preliminary design and analysis of arch dams, particularly for determining the stresses induced by hydrostatic pressure. It treats the dam as a thin, curved shell subjected to internal pressure.

*   **Core Principle:** The theory assumes that the dam can be approximated as a thin cylinder or ring subjected to internal pressure from the reservoir water. The stresses are primarily hoop stress (circumferential) and radial stress.

*   **Application to Arch Dams:** While arch dams are not perfect cylinders, this theory provides a fundamental understanding of how curvature resists pressure. The valley shape often dictates the curvature of the arch dam, which can be approximated as a segment of a cylinder or a sphere.

---

### 3. Derivation of Stresses in a Thin Cylinder

Consider a thin cylindrical shell subjected to an internal pressure $p$.

*   **Assumptions of Thin Cylinder Theory:**
    1.  The shell thickness is small compared to the radius (typically, radius/thickness > 10).
    2.  The material is homogeneous, isotropic, and elastic.
    3.  The pressure is uniform and acts perpendicular to the inner surface.
    4.  The stresses acting perpendicular to the plane of the shell (through the thickness) are negligible.
    5.  The stresses are uniformly distributed across the thickness.
    6.  The longitudinal stresses (along the axis of the cylinder) are less significant for a ring-like element.

*   **Analysis of Hoop Stress ($\sigma_h$) and Radial Stress ($\sigma_r$)**

    Let:
    *   $p$ = internal pressure
    *   $r$ = inner radius of the cylinder
    *   $t$ = thickness of the cylinder wall
    *   $L$ = length of the cylinder (for longitudinal stress calculation, not primarily for arch dams in this context)

    Consider a small segment of the cylinder of length $dx$. The pressure acting on this segment is $p \cdot 2r \cdot dx$. This pressure is resisted by the tensile forces in the hoop stress acting on the cross-sectional area of the shell wall.

    The total force acting outward due to pressure on a semi-circular arc is $p \times (\text{diameter}) \times (\text{length}) = p \times 2r \times dx$.

    The resisting force due to hoop stress is $2 \times \sigma_h \times t \times dx$.

    Equating the outward force and the resisting force:
    $p \times 2r \times dx = 2 \times \sigma_h \times t \times dx$

    Simplifying, we get the **hoop stress**:
    $$ \sigma_h = \frac{pr}{t} $$

    Now, consider the radial stress ($\sigma_r$). The pressure acts radially outward. The hoop stress acts tangentially. For a thin cylinder, the radial stress is often assumed to be small compared to hoop stress and is distributed across the thickness.

    Consider a radial section. The internal pressure is $p$. The hoop stress acts tangentially. For equilibrium of a small element, the radial stress at the outer surface is zero, and it is maximum at the inner surface, equal to the internal pressure. However, for thin shells, the radial stress is often approximated as constant and equal to the pressure, or its effect is considered within the hoop stress calculation.

    A more precise analysis for thick cylinders shows a variation of radial and hoop stress across the thickness. However, for thin cylinders:

    The **radial stress** ($\sigma_r$) can be related to the hoop stress and the internal pressure. For a thin cylinder, the radial stress is generally much smaller than the hoop stress.
    In many simplified analyses for arch dams using the thin cylinder analogy, the radial stress is often considered to be equal to the hydrostatic pressure at the inner face and zero at the outer face. However, a more accurate representation for a ring under internal pressure $p$ would involve the radial stress being equal to $p$ at the inner surface and varying across the thickness.

    For the context of arch dams and thin cylinder theory, the primary stress of concern transferred to the abutments is the hoop stress, which is compressive in the arch. The radial stress represents the pressure from the water.

    **Important Note:** The thin cylinder theory is a simplified model. In reality, arch dams are often curved in two directions (e.g., spherical or cylindrical segments), and the valley shape is irregular. This necessitates more advanced analysis methods.

---

### 4. Application to Arch Dams

While the derivation is for a cylinder, the principle of **hoop tension** (which becomes **hoop compression** in an arch dam resisting outward pressure) is fundamental.

*   **Arch Dams as Curved Beams:** Arch dams can be conceptualized as a series of horizontal arches. Each arch resists the water pressure acting on it.

*   **Stress Distribution:**
    *   **Hoop Stress ($\sigma_h$):** This is the dominant stress and acts tangentially to the arch. In an arch dam resisting outward water pressure, this hoop stress is compressive. The magnitude depends on the radius of the arch, the water pressure, and the thickness of the dam at that level.
    *   **Radial Stress ($\sigma_r$):** This is the stress acting perpendicular to the arch, essentially the pressure from the water.
    *   **Vertical Stress ($\sigma_v$):** This is induced by the weight of the dam itself and also by the arch action transmitting vertical loads from the abutments.

*   **Calculation for Arch Dams (using thin cylinder analogy):**

    For a horizontal arch element at a depth $h$ from the free surface, the hydrostatic pressure $p = \rho g h$ acts on the inner face.

    If we approximate a section of the arch dam as a segment of a thin cylinder with radius $R$ and thickness $t$:

    The compressive hoop stress ($\sigma_h$) can be estimated as:
    $$ \sigma_h \approx \frac{p \cdot R}{t} $$
    where:
    *   $p = \rho g h$ (hydrostatic pressure)
    *   $R$ = radius of the arch at that level
    *   $t$ = thickness of the arch at that level

    **Important Distinction:** In a pressure vessel (thin cylinder), the hoop stress is tensile. In an arch dam resisting water pressure, the arch is under **compression**, effectively resisting the outward push of the water. The formula remains the same in terms of magnitude, but the nature of the stress is compressive.

*   **Example:**
    Consider a section of an arch dam at a depth of 20 meters. The radius of the arch at this section is 50 meters, and the thickness of the dam is 5 meters.
    Assume the density of water $\rho = 1000 \, \text{kg/m}^3$ and acceleration due to gravity $g = 9.81 \, \text{m/s}^2$.

    1.  Calculate the hydrostatic pressure ($p$):
        $p = \rho g h = 1000 \, \text{kg/m}^3 \times 9.81 \, \text{m/s}^2 \times 20 \, \text{m} = 196,200 \, \text{N/m}^2 = 0.1962 \, \text{MPa}$

    2.  Calculate the compressive hoop stress ($\sigma_h$) using the thin cylinder analogy:
        $\sigma_h = \frac{p \cdot R}{t} = \frac{0.1962 \, \text{MPa} \times 50 \, \text{m}}{5 \, \text{m}} = 1.962 \, \text{MPa}$

    This value of 1.962 MPa represents the approximate compressive stress in the arch at that depth due to the water pressure.

---

### 5. Assumptions and Limitations of Thin Cylinder Theory for Arch Dams

While useful for initial estimates, the thin cylinder theory has significant limitations when applied to arch dams:

*   **Assumptions:**
    *   **Thin Shell:** Assumes the dam thickness is much smaller than the radius. Many arch dams, especially at the base, are not "thin" by this definition.
    *   **Uniform Pressure:** Assumes uniform internal pressure, neglecting variations due to seepage or uplift.
    *   **No Abutment Deformation:** Assumes rigid abutments, which is not true in reality. Valley deformation can significantly affect stress distribution.
    *   **Neglects Temperature Effects:** Does not account for thermal stresses caused by temperature fluctuations, which can be substantial in concrete dams.
    *   **Neglects Arch Curvature Effects:** The theory is for a full cylinder. Arch dams are segments, and the behavior at the abutments is complex.
    *   **Neglects Vertical Loads:** Primarily focuses on hoop stresses and does not fully account for vertical loads from the dam's weight or from shear and bending at the abutments.
    *   **Neglects Poisson's Ratio Effects:** The simple derivation often doesn't fully incorporate the Poisson effect which links stresses in different directions.

*   **Limitations:**
    *   **Inaccurate for Thick Sections:** The thin cylinder theory significantly underestimates stresses in thicker portions of the dam.
    *   **Ignores Foundation and Abutment Flexibility:** Real abutments deform, which redistpples stresses.
    *   **Does Not Account for Crown Cantilevering:** Arch dams also act as vertical cantilevers, a behavior not captured by pure hoop action analysis.
    *   **Inadequate for Thermal Stresses:** Thermal expansion/contraction can induce significant tensile and compressive stresses, not covered here.
    *   **Not Sufficient for Final Design:** For detailed design and analysis of actual arch dams, more sophisticated methods like finite element analysis (FEA) are essential.

---

### 6. Role in Preliminary Design

Despite its limitations, the thin cylinder theory plays a crucial role in the preliminary stages of arch dam design:

*   **Conceptual Understanding:** Provides a fundamental grasp of how arch dams transfer water loads.
*   **Initial Sizing:** Helps in estimating the required thickness of the dam at different levels to resist hydrostatic pressure.
*   **Economic Considerations:** Allows for a rough estimation of concrete volume and thus the initial cost.
*   **Comparison with Other Dam Types:** Facilitates preliminary comparisons with gravity dams or other structures for feasibility studies.

---

### 7. Practice Questions and Exercises

**Question 1:**
A horizontal section of an arch dam at a certain depth is approximated as a thin cylinder segment with an internal radius of 40 meters and a thickness of 4 meters. The hydrostatic pressure at this depth is 0.15 MPa. Using the thin cylinder theory, calculate the approximate compressive hoop stress in the arch at this section.

**Answer 1:**
Given:
*   Internal radius, $R = 40 \, \text{m}$
*   Thickness, $t = 4 \, \text{m}$
*   Hydrostatic pressure, $p = 0.15 \, \text{MPa}$

Using the formula $\sigma_h = \frac{pR}{t}$:
$\sigma_h = \frac{0.15 \, \text{MPa} \times 40 \, \text{m}}{4 \, \text{m}}$
$\sigma_h = \frac{6 \, \text{MPa} \cdot \text{m}}{4 \, \text{m}}$
$\sigma_h = 1.5 \, \text{MPa}$

The approximate compressive hoop stress is 1.5 MPa.

**Question 2:**
List three key assumptions of the thin cylinder theory as applied to arch dams and explain why each assumption limits the accuracy of the theory for detailed design.

**Answer 2:**

1.  **Assumption:** The shell thickness is small compared to the radius ($R/t > 10$).
    *   **Limitation:** Many arch dams, especially at the base, have thicknesses that do not satisfy this condition. In thicker sections, radial stresses and variations in hoop stress across the thickness become significant and are not accurately captured by this theory.

2.  **Assumption:** Rigid and fixed abutments.
    *   **Limitation:** Real rock abutments are not perfectly rigid and can deform under the immense load of the dam. This deformation can alter the stress distribution, potentially reducing peak stresses in some areas and increasing them in others. Foundation conditions also play a crucial role.

3.  **Assumption:** Neglects thermal stresses.
    *   **Limitation:** Concrete dams experience significant temperature fluctuations. Expansion and contraction due to these changes induce considerable stresses (tensile and compressive) within the dam, which can be critical for its stability. The thin cylinder theory does not account for these self-induced stresses.

**Question 3:**
What is the primary stress resisted by an arch dam due to water pressure, and what is its nature (tensile/compressive) in the arch?

**Answer 3:**
The primary stress resisted by an arch dam due to water pressure is the **hoop stress**. In an arch dam, this hoop stress is **compressive**. The water pressure pushes outwards on the curved face of the dam, and this outward force is resisted by compressive forces acting tangentially along the arch, which are then transferred to the abutments.

---

### 8. Important Points to Remember

*   Arch dams utilize **arch action** to transfer water loads to the abutments.
*   The **thin cylinder theory** provides a simplified method for analyzing hoop stresses in arch dams.
*   The formula for hoop stress ($\sigma_h = \frac{pR}{t}$) is fundamental, where $p$ is hydrostatic pressure, $R$ is the radius, and $t$ is the thickness.
*   In arch dams, the hoop stress is **compressive**, not tensile like in a pressure vessel.
*   The theory's assumptions (thin shell, rigid abutments, no thermal effects) lead to significant **limitations** for detailed design.
*   Despite limitations, it's valuable for **preliminary design** and conceptual understanding.
*   Arch dams also act as **vertical cantilevers**, a behavior not explained by the thin cylinder theory.
*   More advanced methods like **finite element analysis (FEA)** are required for accurate and detailed design of arch dams.
