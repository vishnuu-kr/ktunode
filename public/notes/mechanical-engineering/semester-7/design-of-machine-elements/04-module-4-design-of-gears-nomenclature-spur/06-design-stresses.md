---
title: "design stresses"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 4: Design of gears: Nomenclature: spur"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d82"
status: "completed"
scrapedAt: "2026-05-20T18:11:12.457Z"
---
# DESIGN OF MACHINE ELEMENTS

## Module 4: Design of Gears: Nomenclature: Spur

### Topic: Design Stresses in Spur Gears

---

### Learning Outcome(s) Covered:

*   **Design Stresses:** Understand the various stresses experienced by gear teeth and the factors influencing them.
*   **Tooth Strength:** Analyze the bending and surface stresses in gear teeth to ensure adequate strength and prevent failure.
*   **Service Factors:** Apply service factors to account for varying operating conditions and their impact on gear life.

---

### 1. Introduction to Gear Stresses

Gears are critical components in power transmission systems. Their teeth are subjected to complex loading conditions that can lead to various modes of failure. Understanding and calculating these stresses is fundamental to designing a robust and reliable gear drive. The primary stresses experienced by gear teeth are:

*   **Bending Stress (or Tooth Root Stress):** This occurs at the root of the gear tooth due to the tangential force acting on the tooth. It can lead to fatigue failure (cracking and fracture) at the root.
*   **Surface Stress (or Contact Stress/Pitting Resistance):** This is a compressive stress occurring at the point of contact between meshing teeth. It can lead to surface fatigue failure known as pitting.
*   **Shear Stress:** While generally less critical than bending or surface stress for most spur gear designs, shear stress can be present, especially in the web of the gear.
*   **Bearing Stress:** This is also a form of compressive stress that occurs at the contact surface, related to the elastic deformation of the tooth surface.

---

### 2. Bending Stress in Gear Teeth

The bending stress is the primary consideration for preventing **tooth breakage**. The design for bending strength aims to ensure that the tooth can withstand the applied load without fracturing.

#### 2.1. Lewis Equation (Historical Context & Foundation)

While modern design methods are more refined, the Lewis equation provides a foundational understanding of bending stress. It treats the gear tooth as a cantilever beam.

*   **Assumptions:**
    *   The entire tangential load is assumed to act at the most unfavorable point on the tooth, which is the addendum circle.
    *   The tooth is assumed to be a beam fixed at the base and loaded at the tip.
    *   The stress distribution is assumed to be uniform across the tooth width.

*   **Formula:**
    $\sigma_b = \frac{W_t \times p}{f \times y}$

    Where:
    *   $\sigma_b$: Bending stress at the root of the tooth (MPa or psi)
    *   $W_t$: Tangential load acting on the tooth (N or lb)
    *   $p$: Circular pitch ($p = \pi m$, where $m$ is module) (mm or inches)
    *   $f$: Face width of the gear (mm or inches)
    *   $y$: Lewis form factor (dimensionless, depends on tooth form and number of teeth)

#### 2.2. Modern Design Approach for Bending Stress (AGMA/ISO Standards)

Modern gear design standards (like AGMA - American Gear Manufacturers Association, and ISO) provide more accurate methods that account for various factors influencing bending stress. These methods are generally based on the **strength of the tooth root**.

*   **Key Factors Considered:**
    *   **Tangential Force ($W_t$):** This is the force that causes the gear to rotate. It's calculated from the transmitted power ($P$) and the pitch line velocity ($v$): $W_t = \frac{2P}{v}$ (for power in Watts and velocity in m/s).
    *   **Face Width ($F$):** The width of the gear face.
    *   **Module ($m$):** The size of the gear tooth.
    *   **Tooth Form Factor ($Y$):** This replaces the Lewis form factor ($y$) and is a more comprehensive factor accounting for tooth shape, pressure angle, and addendum modifications. It is typically obtained from tables or charts provided by standards organizations or gear manufacturers.
    *   **Stress Concentration Factor ($K_t$):** Accounts for the stress concentration at the root fillet of the tooth.
    *   **Dynamic Factor ($C_v$):** Accounts for the impact and vibration loads due to gear inaccuracies and pitch line velocity. Higher speeds and poorer accuracy lead to higher dynamic factors.
    *   **Overload Factor ($K_o$):** Accounts for unexpected load fluctuations.
    *   **Size Factor ($K_s$):** Accounts for the effect of the size of the gear tooth on its strength.
    *   **Life Factor ($K_L$):** Accounts for the desired fatigue life of the gear teeth.

*   **AGMA Bending Stress Formula:**
    $\sigma_b = \frac{W_t \times K_o \times K_v \times K_s \times K_f}{F \times m \times Y}$ (Simplified form, actual AGMA formula is more complex)

    *Note: Many resources and design handbooks use an equivalent stress term incorporating pitch diameter, module, and face width. A common representation related to bending stress is:*

    $\sigma_b = \frac{W_t}{F \times m \times Y_j}$
    Where $Y_j$ is the J-factor which incorporates the Lewis form factor and stress concentration.

    *For practical design, the AGMA or ISO formulas, often found in design handbooks, are used directly. They typically express the required **tangential load-carrying capacity** or the **allowable bending stress**. A common form is:*

    $W_t = \frac{\sigma_b \times F \times m \times Y_j}{K_o \times K_v}$

    *Or, in terms of allowable bending stress:*

    $\sigma_{allowable\_bending} = \frac{W_t \times K_o \times K_v \times K_s \times K_f}{F \times m \times Y_j}$

*   **Allowable Bending Stress ($\sigma_{allowable\_bending}$):** This is derived from the material's fatigue strength (endurance limit) and safety factors. It's often referred to as the **fatigue strength in bending**.

#### 2.3. Factors Affecting Bending Stress

*   **Tangential Force ($W_t$):** Directly proportional to bending stress. Higher transmitted power or lower pitch line velocity increases $W_t$.
*   **Tooth Geometry (Y-factor):** Teeth with a greater radius of curvature at the root (thicker teeth) have lower bending stress. This is influenced by the number of teeth, pressure angle, and addendum.
*   **Face Width ($F$):** Inversely proportional to bending stress. A wider face distributes the load over a larger area, reducing stress.
*   **Dynamic Load ($K_v$):** Increases with pitch line velocity and inaccuracies in tooth profiling, meshing, and mounting.
*   **Load Distribution ($K_o$):** Accounts for shock or impact loads.
*   **Surface Finish & Fillet Radius ($K_f$):** Stress concentration at the root fillet.

#### 2.4. Design for Bending Strength

The design criterion is to ensure that the **calculated bending stress ($\sigma_b$) does not exceed the allowable bending stress ($\sigma_{allowable\_bending}$)** for the gear material and desired life.

$\sigma_b \le \sigma_{allowable\_bending}$

*   **$\sigma_{allowable\_bending}$** is typically calculated as:
    $\sigma_{allowable\_bending} = \frac{S_a}{S.F.}$
    Where:
    *   $S_a$: Allowable bending stress number (fatigue strength in bending), obtained from material properties and service life considerations.
    *   $S.F.$: Factor of safety.

---

### 3. Surface Stress (Contact Stress)

The surface stress is critical for preventing **pitting**, which is the fatigue failure of the tooth surface due to repeated contact stresses. This analysis is often referred to as **surface durability**.

#### 3.1. Hertzian Contact Stress Theory

The surface stress calculation is based on Hertz's theory of elastic contact, which deals with the stresses developed when two curved surfaces come into contact.

*   **Key Factors:**
    *   **Tangential Force ($W_t$):** The force causing contact.
    *   **Face Width ($F$):** The width of the contact area.
    *   **Radius of Curvature of Teeth:** This is crucial and depends on the geometry of both the pinion and gear teeth at the point of contact. The **radius of curvature of the instantaneous radius of curvature** of the contacting surfaces is used.
    *   **Materials of Pinion and Gear:** The elastic properties (Young's Modulus, Poisson's Ratio) of the materials.
    *   **Surface Hardness:** Affects the allowable surface stress.

*   **AGMA/ISO Surface Stress Formula:**
    The AGMA/ISO approach involves calculating the **surface stress number ($\sigma_c$)** and comparing it to the **allowable surface stress number ($\sigma_{ca}$)**.

    $\sigma_c = C_p \sqrt{\frac{W_t C_a C_m C_c C_l}{F d C_v}} \sqrt{\frac{1}{I \times Z}}$

    Where:
    *   $\sigma_c$: Calculated surface stress (MPa or psi)
    *   $C_p$: Elastic coefficient, dependent on the materials of the meshing teeth (based on Hertzian constants).
    *   $W_t$: Tangential force at the pitch line (N or lb).
    *   $C_a$: Application factor (combines overload, impact, and shock effects).
    *   $C_m$: Load distribution factor (accounts for inaccuracies in mounting and tooth alignment).
    *   $C_c$: Crown factor (accounts for any crowning on teeth).
    *   $C_l$: Life factor (accounts for the desired fatigue life).
    *   $F$: Face width (mm or inches).
    *   $d$: Pinion diameter (mm or inches).
    *   $C_v$: Dynamic factor (accounts for dynamic effects due to velocity and accuracy).
    *   $I$: Buckingham's geometry factor (depends on tooth form, pressure angle, and helix angle for helical gears, but for spur gears, it's often simplified). It relates to the curvature of the teeth.
    *   $Z$: Factor related to the relative radius of curvature of the mating teeth.

    *Note: The AGMA and ISO standards provide detailed tables and methods to determine these factors. For spur gears, the geometry factor $I$ and $Z$ are specific to the tooth profile and pressure angle.*

*   **Simplified Representation (Hertzian Stress Analogy):**
    A simplified expression for contact stress ($\sigma_c$) is often presented as:

    $\sigma_c = Z_e \sqrt{\frac{W_t E'}{F \rho}}$ (where $E'$ is the effective modulus of elasticity and $\rho$ is the relative radius of curvature)

    The full AGMA formula is more comprehensive, incorporating dynamic, life, and load distribution factors.

#### 3.2. Allowable Surface Stress ($\sigma_{ca}$)

The allowable surface stress is based on the **fatigue strength of the surface** and the desired life of the gear.

*   **$\sigma_{ca}$** is typically calculated as:
    $\sigma_{ca} = S_c \times Z_N \times Z_L \times Z_W$
    Where:
    *   $S_c$: Surface fatigue strength number (also called contact strength), determined from material properties, heat treatment, and hardness.
    *   $Z_N$: Factor for the number of stress cycles.
    *   $Z_L$: Life factor.
    *   $Z_W$: Factor for hardness pattern or working stress.

#### 3.3. Design for Surface Durability

The design criterion is to ensure that the **calculated surface stress ($\sigma_c$) does not exceed the allowable surface stress ($\sigma_{ca}$)**.

$\sigma_c \le \sigma_{ca}$

---

### 4. Service Factors and Safety Factors

These factors are multipliers used to account for the deviations of actual operating conditions from ideal design assumptions.

#### 4.1. Service Factor ($K_s$ or $C_a$)

This factor accounts for the nature of the load applied to the gear drive. It's typically a combination of overload, shock, and impact.

*   **Factors Influencing Service Factor:**
    *   **Smooth Loads:** Continuous operation with uniform torque (e.g., electric motor drives).
    *   **Uniform Loads:** Moderate shock (e.g., internal combustion engines with flywheels).
    *   **Medium Shock Loads:** Intermittent heavy loads or moderate impact (e.g., punch presses, reciprocating compressors).
    *   **Heavy Shock Loads:** Severe impact and frequent reversals (e.g., shovel drives, hammer crushers).

*   **Application in Formulas:**
    *   **Bending Stress:** Often included as an overload factor ($K_o$).
    *   **Surface Stress:** Often included as an application factor ($C_a$).

#### 4.2. Safety Factor ($S.F.$)

This factor is applied to the material's ultimate strength or fatigue limit to provide a margin of safety against failure.

*   **Purpose:**
    *   To account for uncertainties in material properties.
    *   To account for uncertainties in manufacturing processes.
    *   To account for the consequences of failure.
    *   To compensate for wear and tear over time.

*   **Selection:** The SF is typically chosen based on the criticality of the application and the desired reliability. Common values range from 1.25 to 3 or more.

---

### 5. Important Points to Remember

*   **Two Primary Design Criteria:**
    1.  **Bending Strength (Tooth Root Strength):** Prevents tooth breakage.
    2.  **Surface Durability (Pitting Resistance):** Prevents surface fatigue (pitting).
*   **Failure Modes:** Always consider both bending and surface failure. One criterion might govern the design more than the other depending on the application and material.
*   **AGMA/ISO Standards:** These are the most widely accepted and comprehensive methods for gear design stress analysis. Always refer to the relevant standards or design handbooks that implement them.
*   **Tooth Geometry:** The shape of the tooth (involute profile, pressure angle, fillet radius) significantly affects both bending and surface stresses.
*   **Dynamic Load:** Pitch line velocity and gear accuracy play a crucial role in dynamic loading. Higher speeds and poorer accuracy increase dynamic loads.
*   **Material Properties:** The choice of material, its heat treatment, and hardness are critical for determining allowable stresses and fatigue life.
*   **Service and Safety Factors:** These are essential for adapting theoretical calculations to real-world operating conditions.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 6. References and Textbook Support

*   **Design of Machine Elements by V B Bhandari:** Chapter on Spur Gears will extensively cover the bending and surface stress calculations, including AGMA/ISO methodologies and formulas for various factors. (See Chapters related to Gear Design).
*   **Machine Design – An Integrated Approach by R. L. Norton:** Likely provides a strong theoretical basis for Hertzian contact stress and beam bending theory applied to gears. (See Chapters on Power Transmission: Gears).
*   **Design of Machine Elements II by Raghavendra K:** This book would likely delve into the practical application of AGMA or similar standards for gear design, including detailed tables for factors.
*   **Machine Design Data Book by V B Bhandari:** This book will be invaluable for obtaining the numerical values of various factors ($Y$, $Z$, $C_v$, $C_a$, etc.) and material properties.
*   **PSG Design Data:** Similar to Bhandari's data book, it will provide crucial tables and charts for design calculations.
*   **Mechanical Engineering Design by J. E. Shigley:** A classic reference that will offer a thorough explanation of the underlying mechanics and theories of contact stress and bending fatigue.

---

### 7. Course Outcomes Alignment

*   **CO5: Model suitable spur or helical gear drive based on the industrial requirements.** Understanding design stresses is fundamental to selecting appropriate materials, face widths, and tooth geometries to meet power transmission requirements and ensure durability, thus enabling the modeling of a suitable gear drive.

---

### 8. Practice Questions and Exercises

**Question 1 (Conceptual):**
What are the two primary modes of failure for gear teeth, and what type of stress is primarily responsible for each?

**Answer:**
The two primary modes of failure are:
1.  **Tooth Breakage:** Caused by excessive bending stress at the root of the tooth.
2.  **Pitting (Surface Fatigue):** Caused by excessive contact stress on the tooth surface.

---

**Question 2 (Calculation - Simplified):**
A spur gear transmits 5 kW of power at a pitch line velocity of 10 m/s. The tangential force is distributed over a face width of 50 mm. The circular pitch is 10 mm, and the Lewis form factor is 0.35. Calculate the bending stress in the gear tooth, assuming the load acts at the tip of the tooth.

**Given:**
*   Power ($P$) = 5 kW = 5000 W
*   Pitch line velocity ($v$) = 10 m/s
*   Face width ($F$) = 50 mm
*   Circular pitch ($p$) = 10 mm
*   Lewis form factor ($y$) = 0.35

**Calculations:**
*   Tangential Force ($W_t$):
    $W_t = \frac{2P}{v} = \frac{2 \times 5000 \text{ W}}{10 \text{ m/s}} = 1000 \text{ N}$

*   Bending Stress ($\sigma_b$):
    $\sigma_b = \frac{W_t \times p}{F \times y} = \frac{1000 \text{ N} \times 10 \text{ mm}}{50 \text{ mm} \times 0.35} = \frac{10000}{17.5} \approx 571.4 \text{ N/mm}^2 \text{ or MPa}$

**Answer:** The bending stress in the gear tooth is approximately 571.4 MPa.

---

**Question 3 (Conceptual):**
Explain the role of the "dynamic factor" ($C_v$) in gear stress calculations. What conditions would lead to a higher dynamic factor?

**Answer:**
The dynamic factor ($C_v$) accounts for the impact and vibration loads that occur due to inaccuracies in the gear tooth profile, meshing, mounting, and the pitch line velocity. It essentially amplifies the static tangential load to represent the dynamic load experienced by the gear tooth during operation.

Conditions that lead to a higher dynamic factor include:
*   **Higher Pitch Line Velocity:** As the gear speed increases, the impact forces become more significant.
*   **Poorer Gear Accuracy:** Manufacturing errors such as incorrect tooth profile, tooth spacing errors, and tooth-to-tooth errors increase the dynamic load.
*   **Misalignment:** Improper mounting of gears can lead to uneven load distribution and increased impact.
*   **Tooth Deflection:** Under load, teeth deflect, which can also contribute to dynamic effects.

---

**Question 4 (Design Consideration):**
When designing a gear for a high-speed application where pitting is a significant concern, which design criterion (bending strength or surface durability) would likely be more critical, and why?

**Answer:**
For a high-speed application where pitting is a significant concern, **surface durability** would likely be more critical.
*   **Reasoning:** High speeds amplify the dynamic loads, which in turn increase the contact stresses between the teeth. Moreover, high-speed operation leads to a greater number of stress cycles in a given time, increasing the likelihood of fatigue failure on the tooth surface. While bending strength is always important, the combination of high speed and the desire to prevent pitting points towards surface durability as the governing criterion.

---

**Question 5 (Using Data Handbooks):**
If designing a gear from hardened and ground steel (e.g., AISI 4340 hardened to 55 HRC) for medium-duty industrial service with a life of 10,000 hours at a specific speed, what key material property would you look up in a design data handbook to determine the **allowable surface stress**?

**Answer:**
You would look up the **Surface Fatigue Strength Number ($S_c$)** or **Contact Strength Rating** for the specific material and hardness. This value, along with life and other factors, would be used to calculate the allowable surface stress ($\sigma_{ca}$). You would also need to find the **Elastic Coefficient ($C_p$)** which depends on the materials of both mating gears.

---