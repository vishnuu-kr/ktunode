---
title: "Materials and their properties- Elastic and plastic behaviour of metals, ductile and brittle behaviour, shear, bending and torsional stresses, Factor of safety, stress concentration, combined stresses, stress concentration factor."
subject: "MACHINE DESIGN"
module: "Module 1: Introduction to Design"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1551d0cf4804463759"
status: "completed"
scrapedAt: "2026-05-20T18:05:50.656Z"
---
# Machine Design: Module 1 - Introduction to Design

## Topic: Materials and Their Properties

This module introduces fundamental concepts of materials science as they apply to machine design, focusing on how materials behave under stress and the critical parameters used to select them for various applications.

---

### 1. Elastic and Plastic Behaviour of Metals

Understanding how a material deforms under load is crucial for designing safe and reliable machine components.

*   **Stress ($\sigma$)**: The internal resistance offered by the material per unit area to the externally applied force.
    *   Unit: Pascals (Pa) or Megapascals (MPa) or psi.
    *   Formula: $\sigma = \frac{F}{A}$, where $F$ is the applied force and $A$ is the cross-sectional area.

*   **Strain ($\epsilon$)**: The deformation per unit length of the material when subjected to stress.
    *   Unit: Dimensionless (often expressed as mm/mm or %).
    *   Formula: $\epsilon = \frac{\Delta L}{L}$, where $\Delta L$ is the change in length and $L$ is the original length.

*   **Stress-Strain Curve**: A graphical representation of a material's response to applied stress. Key points and regions:
    *   **Elastic Region**: In this region, the deformation is temporary. When the stress is removed, the material returns to its original shape. The relationship between stress and strain is linear and governed by Hooke's Law.
        *   **Hooke's Law**: Within the elastic limit, stress is directly proportional to strain.
            *   Formula: $\sigma = E \epsilon$, where $E$ is the Modulus of Elasticity or Young's Modulus.
    *   **Proportional Limit ($P$)**: The point up to which stress is directly proportional to strain.
    *   **Elastic Limit ($E_L$)**: The maximum stress a material can withstand without experiencing permanent deformation. Beyond this point, some plastic deformation occurs.
    *   **Yield Strength ($\sigma_y$)**: The stress at which the material begins to deform plastically. This is often defined by the 0.2% offset method for materials without a clear yield point.
        *   **Importance**: Crucial for preventing permanent deformation in components under normal operating loads.
        *   *Refer to Norton, Chapter 4: Material Properties and Selection.*
    *   **Plastic Region**: Beyond the elastic limit, the material undergoes permanent deformation. Even after the load is removed, the material will not return to its original shape.
    *   **Ultimate Tensile Strength (UTS) ($\sigma_{UTS}$)**: The maximum stress the material can withstand in tension before necking begins.
    *   **Necking**: The phenomenon where the cross-sectional area of the specimen begins to decrease significantly at a localized point.
    *   **Fracture Point ($F$)**: The stress at which the material breaks.

*   **Modulus of Elasticity (Young's Modulus, $E$)**: A measure of a material's stiffness in tension or compression. It represents the slope of the linear portion of the stress-strain curve.
    *   High $E$ means a stiffer material (less deformation for a given stress).
    *   Low $E$ means a more flexible material (more deformation for a given stress).
    *   *Examples*: Steel has a high $E$ (approx. 200 GPa), Aluminum has a lower $E$ (approx. 70 GPa).

*   **Modulus of Rigidity (Shear Modulus, $G$)**: A measure of a material's resistance to shear deformation.
    *   Formula: $\tau = G \gamma$, where $\tau$ is shear stress and $\gamma$ is shear strain.
    *   *Relation to E*: For isotropic materials, $G \approx \frac{E}{2(1+\nu)}$, where $\nu$ is Poisson's ratio.

*   **Poisson's Ratio ($\nu$)**: The ratio of transverse strain to axial strain in a material subjected to uniaxial stress.
    *   Formula: $\nu = -\frac{\epsilon_{transverse}}{\epsilon_{axial}}$.
    *   *Importance*: Accounts for lateral contraction or expansion when a material is stretched or compressed.

---

### 2. Ductile and Brittle Behaviour

The way a material fails provides significant insight into its suitability for different applications.

*   **Ductile Materials**:
    *   Exhibit significant plastic deformation before fracture.
    *   Characterized by a pronounced yield point and a large elongation at fracture.
    *   Show a clear "necking" phenomenon before breaking.
    *   **Advantages**: Can warn of impending failure by deforming visibly, making them suitable for applications where gradual failure is acceptable or desirable. They can absorb significant energy before fracture.
    *   **Examples**: Most steels, aluminum alloys, copper alloys, mild steel.
    *   *Refer to Bhandari, Chapter 2: Properties of Materials.*

*   **Brittle Materials**:
    *   Undergo very little or no plastic deformation before fracture.
    *   Fracture occurs suddenly with little warning.
    *   The fracture surface is often flat and perpendicular to the applied tensile stress.
    *   **Advantages**: Often have high ultimate tensile strength and hardness.
    *   **Disadvantages**: Failure can be catastrophic. Not suitable for applications where impact or significant deformation is expected.
    *   **Examples**: Cast iron, glass, ceramics, concrete, some high-carbon steels, brass.

*   **Factors Influencing Ductility/Brittleness**:
    *   **Temperature**: Most materials become more brittle at lower temperatures.
    *   **Strain Rate**: High strain rates can make ductile materials behave more brittlely.
    *   **Presence of Flaws/Notches**: Stress concentrations around flaws can initiate fracture in brittle materials.

*   **Ductile-Brittle Transition Temperature**: For some materials (like certain steels), there's a temperature range below which they behave brittlely and above which they behave ductilely.

---

### 3. Shear, Bending, and Torsional Stresses

Machine components are subjected to various types of loads, leading to different types of stresses.

*   **Shear Stress ($\tau$)**:
    *   Occurs when a force acts parallel to a surface.
    *   It causes layers of the material to slide over each other.
    *   **Formula**: $\tau = \frac{V}{A_s}$, where $V$ is the shear force and $A_s$ is the area resisting shear.
    *   **Example**: Bolts in a lap joint, shafts transmitting torque.
    *   *Direct Shear*: The force is directly applied to cause shear.
    *   *Torsional Shear*: Shear stress induced by a twisting moment.

*   **Bending Stress ($\sigma_b$)**:
    *   Occurs when a force or moment causes a beam or shaft to bend.
    *   One side of the material is in tension, while the other is in compression.
    *   The stress varies linearly across the cross-section, from maximum tensile stress on one outer surface to maximum compressive stress on the opposite outer surface.
    *   **Formula**: $\sigma_b = \frac{My}{I}$, where:
        *   $M$ is the bending moment.
        *   $y$ is the distance from the neutral axis.
        *   $I$ is the moment of inertia of the cross-section about the neutral axis.
    *   **Maximum Bending Stress**: Occurs at the outermost fibers ($y_{max}$). $\sigma_{b,max} = \frac{M}{Z}$, where $Z = \frac{I}{y_{max}}$ is the section modulus.
    *   **Example**: Shafts carrying pulleys, beams supporting loads.
    *   *Refer to Sharma & Aggarwal, Chapter 4: Theories of Failure.*

*   **Torsional Stress ($\tau_t$)**:
    *   Occurs when a torque or twisting moment is applied to a shaft.
    *   This induces shear stresses within the material.
    *   These shear stresses are maximum at the outer surface and zero at the center of a solid circular shaft.
    *   **Formula (for solid circular shaft)**: $\tau_t = \frac{Tr}{J}$, where:
        *   $T$ is the applied torque.
        *   $r$ is the radial distance from the center.
        *   $J$ is the polar moment of inertia of the cross-section.
    *   **Maximum Torsional Stress**: Occurs at the outer surface ($r = R$). $\tau_{t,max} = \frac{TR}{J}$, where $R$ is the outer radius.
    *   **For hollow circular shaft**: $J = \frac{\pi}{32}(D_o^4 - D_i^4)$, where $D_o$ is outer diameter and $D_i$ is inner diameter.
    *   **Example**: Drive shafts in vehicles, axles.
    *   *Refer to Bhandari, Chapter 5: Shafts and Axles.*

---

### 4. Factor of Safety (FOS)

The factor of safety is a crucial design parameter used to ensure the reliability and integrity of a component under various operating conditions.

*   **Definition**: The ratio of the ultimate strength (or yield strength) of a material to the actual stress it will experience in service.
    *   **Formula (based on ultimate strength)**: $FOS = \frac{\text{Ultimate Strength}}{\text{Actual Stress}} = \frac{\sigma_{UTS}}{\sigma_{actual}}$
    *   **Formula (based on yield strength)**: $FOS = \frac{\text{Yield Strength}}{\text{Actual Stress}} = \frac{\sigma_y}{\sigma_{actual}}$
*   **Purpose**:
    *   To account for uncertainties in material properties, manufacturing processes, and environmental conditions.
    *   To handle variations in applied loads.
    *   To compensate for imperfections in design calculations and assumptions.
    *   To prevent failure due to fatigue, creep, or other time-dependent effects (though FOS is primarily for static loads).
*   **Selection of FOS**:
    *   Depends on the type of load (static, dynamic, shock).
    *   Reliability required.
    *   Consequences of failure (catastrophic vs. minor).
    *   Accuracy of stress analysis.
    *   Material properties and their variability.
    *   Cost considerations.
*   **Important Point**: Using yield strength for FOS calculation is generally preferred for ductile materials because it relates to permanent deformation, which is often the design limit. Using ultimate strength is more common for brittle materials where failure is sudden.
*   *Refer to Norton, Chapter 4: Material Properties and Selection.*
*   *Refer to Spotts, Shoup, Chapter 3: Stress and Strain.*

---

### 5. Stress Concentration

Stress concentration is the phenomenon where localized stresses are significantly higher than the average stress in a component due to geometric discontinuities.

*   **Geometric Discontinuities**: These include:
    *   Holes
    *   Notches
    *   Keyways
    *   Fillets
    *   Grooves
    *   Changes in cross-section

*   **Why it occurs**: Stress lines (flow lines) are forced to detour around these discontinuities, causing them to crowd together, leading to higher stress levels in the immediate vicinity of the discontinuity.
*   **Impact**:
    *   Can lead to premature failure, especially in brittle materials or under fatigue loading.
    *   Even with ductile materials, if the localized stress exceeds the yield strength, it can initiate plastic deformation.
*   **Location**: Stress concentration occurs at the root of a notch, edge of a hole, etc.
*   *Refer to Shigley, Chapter 2: Material Properties and Stress-Strain Relationships.*
*   *Refer to Budynas & Nisbett, Chapter 3: Stress Analysis.*

---

### 6. Stress Concentration Factor ($K_t$)

The stress concentration factor quantifies the severity of stress concentration.

*   **Definition**: The ratio of the maximum stress at a discontinuity to the nominal (average) stress in the surrounding cross-section.
    *   **Formula**: $K_t = \frac{\sigma_{max}}{\sigma_{nominal}}$
    *   Where:
        *   $\sigma_{max}$ is the maximum localized stress at the discontinuity.
        *   $\sigma_{nominal}$ is the average stress calculated based on the gross cross-sectional area, ignoring the discontinuity.
*   **Values**:
    *   $K_t = 1$ for a uniform cross-section with no discontinuities.
    *   $K_t > 1$ for components with geometric discontinuities. The value depends on the geometry of the discontinuity, the material, and the type of stress.
*   **Applications**:
    *   Used to calculate the actual maximum stress at a discontinuity: $\sigma_{max} = K_t \times \sigma_{nominal}$.
    *   Crucial for fatigue analysis, as high localized stresses are primary drivers of fatigue crack initiation.
*   **Obtaining $K_t$**:
    *   Empirical data and charts (available in design handbooks and textbooks).
    *   Analytical solutions for simple geometries.
    *   Numerical methods (e.g., Finite Element Analysis - FEA).
*   **Notch Sensitivity ($q$)**: For fatigue analysis, the effect of stress concentration is further modified by notch sensitivity. This is a material property that indicates how susceptible a material is to stress concentration.
    *   $K_{fs} = 1 + q(K_t - 1)$, where $K_{fs}$ is the fatigue stress concentration factor.
    *   Brittle materials generally have $q \approx 0$ (not notch sensitive).
    *   Ductile materials have $q \approx 1$ (fully notch sensitive).
*   *Refer to Norton, Chapter 10: Stress Concentration and Contact Stress.*
*   *Refer to Bhandari, Chapter 2: Properties of Materials.*

---

### 7. Combined Stresses

Machine components often experience simultaneous application of different types of stresses (e.g., tensile, compressive, shear, bending, torsion).

*   **Concept**: When multiple stress components act on a body, the resultant state of stress at a point is described by a stress tensor. For plane stress or plane strain conditions, this can be simplified.
*   **Analysis**:
    *   The stresses from each load type are calculated independently.
    *   These stresses are superimposed at critical locations (e.g., surfaces, points of maximum bending).
    *   The resulting combined stress state is then analyzed using theories of failure to predict yielding or fracture.
*   **Common Combinations**:
    *   **Bending and Axial Load**: Resulting stress is $\sigma = \frac{P}{A} \pm \frac{My}{I}$.
    *   **Torsion and Bending**: Bending induces normal stress ($\sigma_b$), while torsion induces shear stress ($\tau_t$).
    *   **Axial Load and Torsion**: Axial load induces normal stress ($\sigma$), while torsion induces shear stress ($\tau_t$).
*   **Types of Combined Stresses**:
    *   **Normal Stresses**: $\sigma_x, \sigma_y, \sigma_z$ (can be tensile or compressive).
    *   **Shear Stresses**: $\tau_{xy}, \tau_{yz}, \tau_{zx}$.
*   **Principal Stresses ($\sigma_1, \sigma_2, \sigma_3$)**: The maximum and minimum normal stresses acting on planes where shear stresses are zero. These are critical for failure analysis.
    *   For a 2D stress state with $\sigma_x, \sigma_y, \tau_{xy}$:
        *   $\sigma_{1,2} = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$
    *   The maximum shear stress is $\tau_{max} = \frac{\sigma_1 - \sigma_3}{2}$.
*   **Mohr's Circle**: A graphical method used to determine principal stresses, maximum shear stress, and the orientation of planes of maximum shear stress.
*   **Theories of Failure**: Used to predict yielding or fracture under combined stress states. Common theories include:
    *   Maximum Principal Stress Theory (Rankine Theory)
    *   Maximum Shear Stress Theory (Tresca Theory)
    *   Maximum Distortion Energy Theory (Von Mises Theory) - widely used for ductile materials.
*   *Refer to Bhandari, Chapter 2: Properties of Materials.*
*   *Refer to Sharma & Aggarwal, Chapter 4: Theories of Failure.*
*   *Refer to Budynas & Nisbett, Chapter 5: Combined Stresses.*

---

### Important Points to Remember:

*   **Stress-Strain Curve**: Understand its key points (Proportional Limit, Elastic Limit, Yield Strength, UTS) and regions (elastic, plastic).
*   **Ductility vs. Brittleness**: Key characteristic for material selection, especially regarding failure modes and safety margins.
*   **Stress Types**: Be able to differentiate and calculate shear, bending, and torsional stresses.
*   **Factor of Safety**: A critical tool to account for uncertainties and ensure component reliability. Yield strength is often the basis for ductile materials.
*   **Stress Concentration**: Geometric discontinuities significantly increase localized stress and must be accounted for, especially in fatigue design.
*   **Stress Concentration Factor ($K_t$)**: Quantifies stress concentration.
*   **Combined Stresses**: Most real-world applications involve multiple stress types. Analyze using Mohr's Circle and Theories of Failure.
*   **Material Properties**: Young's Modulus ($E$) for stiffness, Shear Modulus ($G$) for shear resistance, Poisson's Ratio ($\nu$) for lateral deformation.

---

### Practice Questions and Exercises

**Question 1:**
A steel rod of 20 mm diameter is subjected to a tensile load of 50 kN. Calculate the tensile stress and strain, assuming the material's Young's Modulus is 200 GPa and its original length is 2 m, and it elongates by 1 mm. Is the deformation elastic or plastic?

**Answer 1:**
*   Area, $A = \frac{\pi d^2}{4} = \frac{\pi (20 \text{ mm})^2}{4} = 314.16 \text{ mm}^2 = 314.16 \times 10^{-6} \text{ m}^2$
*   Tensile Stress, $\sigma = \frac{F}{A} = \frac{50 \times 10^3 \text{ N}}{314.16 \times 10^{-6} \text{ m}^2} = 159.15 \times 10^6 \text{ Pa} = 159.15 \text{ MPa}$
*   Tensile Strain, $\epsilon = \frac{\Delta L}{L} = \frac{1 \times 10^{-3} \text{ m}}{2 \text{ m}} = 0.5 \times 10^{-3}$
*   Using Hooke's Law: $\sigma = E \epsilon$
    $159.15 \text{ MPa} = 200 \text{ GPa} \times \epsilon$
    $\epsilon = \frac{159.15 \text{ MPa}}{200 \times 10^3 \text{ MPa}} = 0.79575 \times 10^{-3}$
*   The calculated strain based on stress (0.79575 x 10^-3) is higher than the actual measured strain (0.5 x 10^-3). This indicates that the actual stress (159.15 MPa) is *below* the yield strength of the steel. Therefore, the deformation is **elastic**.
    *(Self-correction: The problem statement provides measured elongation. Let's use that to confirm if it's within elastic limit. If the actual stress is below yield, then the elongation is elastic. Let's assume a typical yield strength for steel is 250 MPa. Since 159.15 MPa < 250 MPa, it's elastic.)*

**Question 2:**
A circular shaft of 50 mm diameter is subjected to a torque of 2 kNm. Calculate the maximum shear stress induced in the shaft. If the yield strength in shear for the material is 150 MPa, determine the factor of safety against yielding due to torsion.

**Answer 2:**
*   Diameter, $D = 50 \text{ mm}$, Radius, $R = 25 \text{ mm} = 0.025 \text{ m}$
*   Torque, $T = 2 \text{ kNm} = 2000 \text{ Nm}$
*   Polar Moment of Inertia, $J = \frac{\pi D^4}{32} = \frac{\pi (50 \text{ mm})^4}{32} = 613592 \text{ mm}^4 = 613.592 \times 10^{-6} \text{ m}^4$
*   Maximum shear stress, $\tau_{max} = \frac{TR}{J} = \frac{(2000 \text{ Nm})(0.025 \text{ m})}{613.592 \times 10^{-6} \text{ m}^4} = 81.49 \times 10^6 \text{ Pa} = 81.49 \text{ MPa}$
*   Factor of Safety (against shear yielding), $FOS = \frac{\text{Yield Strength in Shear}}{\text{Max Shear Stress}} = \frac{150 \text{ MPa}}{81.49 \text{ MPa}} \approx 1.84$

**Question 3:**
A stepped shaft has a diameter of 20 mm for a length of 50 mm, and then a diameter of 10 mm for a length of 50 mm. It is subjected to a tensile load of 10 kN. If the ratio of the diameter at the step is $D/d = 2$, and the stress concentration factor for this geometry is $K_t = 2.0$, calculate the maximum stress in the shaft.

**Answer 3:**
*   Nominal stress in the smaller diameter section (where stress concentration is typically higher):
    *   Area, $A_{nominal} = \frac{\pi d^2}{4} = \frac{\pi (10 \text{ mm})^2}{4} = 78.54 \text{ mm}^2$
    *   Nominal Stress, $\sigma_{nominal} = \frac{F}{A_{nominal}} = \frac{10 \times 10^3 \text{ N}}{78.54 \text{ mm}^2} = 127.32 \text{ MPa}$
*   Maximum stress at the step:
    *   $\sigma_{max} = K_t \times \sigma_{nominal} = 2.0 \times 127.32 \text{ MPa} = 254.64 \text{ MPa}$

**Question 4:**
A beam is subjected to a bending moment $M$ and a torque $T$ simultaneously.
(a) Explain why this is a case of combined stresses.
(b) What are the principal stresses and maximum shear stress in terms of the bending stress ($\sigma_b$) and torsional shear stress ($\tau_t$)?

**Answer 4:**
(a) This is a case of combined stresses because the material element within the beam is experiencing both normal stress (due to bending) and shear stress (due to torsion) simultaneously. These stresses act on different planes and interact to produce a more complex stress state.

(b)
*   Bending stress ($\sigma_b$) is a normal stress (let's assume it acts along the x-axis, so $\sigma_x = \sigma_b$).
*   Torsional shear stress ($\tau_t$) is a shear stress acting on the planes where bending stress occurs (let's assume it's $\tau_{xy} = \tau_t$).
*   For a 2D stress state (plane stress assumption where $\sigma_y = 0$):
    *   **Principal Stresses**:
        $\sigma_{1,2} = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$
        $\sigma_{1,2} = \frac{\sigma_b + 0}{2} \pm \sqrt{\left(\frac{\sigma_b - 0}{2}\right)^2 + \tau_t^2}$
        $\sigma_{1,2} = \frac{\sigma_b}{2} \pm \sqrt{\left(\frac{\sigma_b}{2}\right)^2 + \tau_t^2}$
        So, $\sigma_1 = \frac{\sigma_b}{2} + \sqrt{\frac{\sigma_b^2}{4} + \tau_t^2}$ and $\sigma_2 = \frac{\sigma_b}{2} - \sqrt{\frac{\sigma_b^2}{4} + \tau_t^2}$
    *   **Maximum Shear Stress**:
        $\tau_{max} = \frac{\sigma_1 - \sigma_2}{2} = \frac{1}{2} \left( \left(\frac{\sigma_b}{2} + \sqrt{\frac{\sigma_b^2}{4} + \tau_t^2}\right) - \left(\frac{\sigma_b}{2} - \sqrt{\frac{\sigma_b^2}{4} + \tau_t^2}\right) \right)$
        $\tau_{max} = \frac{1}{2} \left( 2 \sqrt{\frac{\sigma_b^2}{4} + \tau_t^2} \right) = \sqrt{\frac{\sigma_b^2}{4} + \tau_t^2}$

---

### Alignment with Course Outcomes:

*   **CO1: Interpret component behavior subjected to static and fatigue loads and identify the failure criteria (Knowledge Level: K3)**
    *   This module directly addresses material behavior (elastic/plastic, ductile/brittle), types of stresses (static), and the foundational understanding needed to interpret behavior and identify failure criteria (via yield strength, UTS, and the introduction to combined stresses).

*   **CO2, CO3, CO4**: While this module is introductory, the concepts of stresses (shear, bending, torsional), combined stresses, and material properties are the fundamental building blocks for analyzing joints, springs, belts, and pressure vessels covered in later modules.

---

This concludes the detailed study notes for Module 1, Topic: Materials and their Properties. Remember to consult the recommended textbooks for deeper understanding and specific examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
