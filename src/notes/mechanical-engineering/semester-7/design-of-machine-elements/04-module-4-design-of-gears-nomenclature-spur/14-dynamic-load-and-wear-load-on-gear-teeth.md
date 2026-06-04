---
title: "Dynamic load and wear load on gear teeth"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 4: Design of gears: Nomenclature: spur"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d8a"
status: "completed"
scrapedAt: "2026-05-20T18:11:18.046Z"
---
# DESIGN OF MACHINE ELEMENTS - MODULE 4: DESIGN OF GEARS: NOMENCLATURE: SPUR

## Topic: Dynamic Load and Wear Load on Gear Teeth

### 1. Introduction to Gear Tooth Loading

Gears are critical components in power transmission systems. The design of gear teeth involves considering various loads they experience, which significantly impact their performance, durability, and lifespan. This module focuses on understanding the forces acting on spur gear teeth, specifically **dynamic loads** and **wear loads**, and how these influence the design process.

**Course Outcome Alignment:**
*   **CO5: Model suitable spur or helical gear drive based on the industrial requirements.** (Understanding dynamic and wear loads is fundamental to accurately modeling gear drives.)
*   **CO1: Model suitable transmission system for the stated conditions.** (Gear drives are a primary transmission system, and their design is heavily influenced by these load considerations.)

### 2. Gear Tooth Forces: Static vs. Dynamic

Before diving into dynamic loads, it's important to understand the basic forces acting on a gear tooth under static conditions.

*   **Tangential Force ($F_t$)**: This is the force acting perpendicular to the line of action of the tooth profile, tangential to the pitch circle. It's responsible for transmitting power.
    *   $F_t = \frac{2T}{d}$
        *   Where, $T$ is the torque transmitted, and $d$ is the pitch diameter.
*   **Radial Force ($F_r$)**: This force acts radially outwards from the center of the gear, perpendicular to the tangential force. It tends to bend the teeth outwards.
    *   $F_r = F_t \tan(\phi)$
        *   Where, $\phi$ is the pressure angle.
*   **Axial Force ($F_a$)**: This force acts along the axis of the gear, primarily present in helical gears due to the helix angle. For spur gears, $F_a = 0$.

**Key Concept:** Static analysis provides a baseline understanding of forces. However, in reality, gears operate dynamically, and the actual loads can be significantly higher due to various factors.

### 3. Dynamic Load on Gear Teeth

Dynamic loads are the additional forces that arise due to the imperfections in gear teeth profiles, manufacturing errors, shaft deflections, and rotational inertia, causing the load to vary cyclically as teeth mesh and unmesh. These dynamic loads can be considerably higher than the static tangential load.

**Factors contributing to Dynamic Load:**

*   **Manufacturing Errors:** Pitch errors, profile errors, lead errors (in helical gears), and runout contribute to uneven load distribution and impact.
*   **Tooth Deflection:** Elastic deformation of the gear teeth under load.
*   **Shaft and Bearing Stiffness:** Deflection of shafts and supports.
*   **Centrifugal Force:** Of the rotating gears, especially at high speeds.
*   **Lubrication Effects:** Intermittent film formation.
*   **Impact:** Due to sudden engagement and disengagement of teeth.

**3.1. Lewis Formula (Historical Context):**

The Lewis formula, developed by Wilfred Lewis, was an early attempt to account for the bending stress in gear teeth. It assumes the entire tangential load is concentrated at the outermost point of the tooth, and the tooth is treated as a cantilever beam.

*   **Lewis Equation for Bending Stress ($\sigma_b$)**:
    *   $\sigma_b = \frac{W_t \times p}{b \times y}$
        *   $W_t$: Tangential load (Static)
        *   $p$: Circular pitch
        *   $b$: Face width
        *   $y$: Lewis form factor (depends on tooth form and pressure angle)

**Limitation of Lewis Formula:** It doesn't directly account for dynamic loads and is primarily used for initial stress analysis.

**3.2. Buckingham's Dynamic Load Formula:**

Buckingham's formula is a more comprehensive approach to calculating the dynamic load ($W_d$) on gear teeth. It considers the effect of inaccuracies and elasticity.

*   **Buckingham's Formula:**
    *   $W_d = W_t \left( \frac{C_v C_d + W_t}{C_d} \right)$
    *   Where:
        *   $W_d$: Dynamic load, N
        *   $W_t$: Tangential load, N (calculated from torque)
        *   $C_v$: Velocity factor, a dimensionless factor that accounts for the effect of speed on the impact load.
        *   $C_d$: Factor of dynamic load or stiffness factor, N/mm (or $\frac{m}{mm}$) which represents the stiffness of the mating teeth.

**3.2.1. Velocity Factor ($C_v$)**:

The velocity factor reduces the impact load as speed decreases and increases it as speed increases. It's a crucial component in dynamic load calculations.

*   **Vito's Formula for $C_v$**:
    *   $C_v = \frac{6.1 + V}{6.1}$ (For cut gears, often used in conjunction with AGMA standards)
    *   $C_v = \frac{12.4 + V}{12.4}$ (For generated gears)
    *   Where, $V$ is the pitch line velocity in m/s.
    *   $V = \frac{\pi d n}{60000}$ (if d is in mm and n in rpm)

*   **AGMA (American Gear Manufacturers Association) Standards:** AGMA provides more refined velocity factors based on precision of gear cutting and finishing.
    *   $C_v$ values are typically provided in tables or graphs based on pitch line velocity and gear quality number.
    *   For high speeds, $C_v$ tends to increase significantly.

**3.2.2. Factor of Dynamic Load ($C_d$)**:

This factor represents the elastic properties of the gear teeth and is related to the stiffness of the contacting teeth. It depends on the material of the gears and the geometry of the teeth.

*   **$C_d$ values are generally obtained from tables or empirical formulas provided by standards like AGMA.**
*   Higher $C_d$ implies stiffer teeth, leading to lower dynamic loads.
*   Factors influencing $C_d$: Modulus of elasticity of the gear material, geometry of the tooth profile, and mounting conditions.

**3.2.3. Buckingham's Formula Derivation/Concept:**

The formula essentially states that the dynamic load is the static load plus an additional impact load. The term $\frac{C_v W_t}{C_d}$ represents the impact load arising from the velocity and stiffness of the teeth. The entire expression is then modified by $C_v$ to account for its effect on both the initial static load and the impact.

**Revised Buckingham's Formula (often cited):**

*   $W_d = W_t + W_i$
    *   $W_i = \frac{C_v W_t}{C_d}$ (Impact load)

This can be rearranged to: $W_d = W_t \left(1 + \frac{C_v}{C_d}\right)$.

**Important Note on Buckingham's Formula:** The exact form and constants might vary slightly depending on the source and the specific standards being followed (e.g., AGMA). Always refer to the relevant design codes or textbooks for precise formulas.

**Example:**

Consider a spur gear drive transmitting 5 kW at 1000 rpm. The pitch diameter is 100 mm, and the face width is 50 mm. The pressure angle is 20 degrees. Assume the pitch line velocity is 5.24 m/s. Let's assume $C_d = 100000$ N/mm for the gear teeth material and construction.

1.  **Calculate Tangential Force ($W_t$):**
    *   Torque, $T = \frac{P \times 60}{2 \pi N} = \frac{5 \times 10^3 \times 60}{2 \pi \times 1000} = 477.46$ Nm
    *   $W_t = \frac{2T}{d} = \frac{2 \times 477.46 \times 10^3}{100} = 9549.2$ N

2.  **Calculate Velocity Factor ($C_v$):**
    *   Using Vito's formula for cut gears: $C_v = \frac{6.1 + V}{6.1} = \frac{6.1 + 5.24}{6.1} = \frac{11.34}{6.1} \approx 1.86$

3.  **Calculate Dynamic Load ($W_d$):**
    *   $W_d = W_t \left( \frac{C_v}{C_d} + 1 \right)$ (Using the form $W_d = W_t (1 + C_v/C_d)$)
    *   $W_d = 9549.2 \left( \frac{1.86}{100000} + 1 \right) \approx 9549.2 \times 1.0000186 \approx 9550.97$ N
    *   *Note: The impact is minimal in this example due to the moderate speed and relatively high $C_d$. At higher speeds and lower $C_d$, the dynamic load would be significantly higher.*

**Textbook References:**

*   **V.B. Bhandari:** Chapter on Gear Design (typically covers Lewis and Buckingham's formulas and velocity factors).
*   **R.L. Norton:** Chapter on Gears (likely includes detailed explanations of dynamic load factors and AGMA methods).
*   **Shigley:** Chapter on Spur Gears (will provide theoretical background on tooth forces and dynamic effects).

### 4. Wear Load on Gear Teeth

Wear is a gradual removal of material from the contacting surfaces of gear teeth due to relative motion and pressure. It primarily occurs at the sliding surfaces of the teeth, especially near the tip and root. Wear can lead to increased backlash, loss of efficiency, noise, and eventual failure if it becomes excessive.

**Types of Wear:**

1.  **Abrasive Wear:** Caused by hard particles (dirt, grit, wear debris) getting trapped between the tooth surfaces. This is often the dominant form of wear in inadequately lubricated or contaminated environments.
2.  **Adhesive Wear:** Occurs when microscopic high points (asperities) on opposing surfaces weld together and then break apart, transferring material. This is more common under high loads and boundary lubrication.
3.  **Surface Fatigue (Pitting and Spalling):** Although not strictly wear in the sense of material removal, surface fatigue is a type of surface distress often discussed alongside wear. It's caused by repeated high contact stresses.
    *   **Pitting:** Formation of small surface depressions.
    *   **Spalling:** Larger flake-like removal of surface material.
4.  **Corrosive Wear:** Caused by chemical reactions between the lubricant, atmosphere, and the gear material.

**Factors affecting Wear:**

*   **Sliding Velocity:** Higher sliding velocities increase the rate of wear, especially abrasive and adhesive wear.
*   **Specific Sliding:** The ratio of sliding velocity to rolling velocity at different points on the tooth profile.
*   **Contact Pressure:** Higher contact pressures increase the tendency for adhesive wear and surface fatigue.
*   **Lubrication:** Proper lubrication reduces friction and the ingress of abrasive particles, thus minimizing wear. Lubricant viscosity, film strength, and presence of additives are crucial.
*   **Material Properties:** Hardness, toughness, and surface finish of the gear teeth material significantly influence wear resistance.
*   **Contamination:** Presence of foreign particles in the lubricant is a major cause of abrasive wear.
*   **Surface Treatment:** Hardening, nitriding, or coatings can improve wear resistance.

**4.1. Wear Load Calculation (Design Considerations):**

The design for wear is typically approached by ensuring that the **contact stress** does not exceed a permissible limit, which is derived from material properties and is often empirically determined. The aim is to prevent excessive abrasive and adhesive wear, as well as surface fatigue.

*   **Hertz Contact Stress ($\sigma_c$)**: This is the maximum compressive stress at the point of contact between two curved bodies. For gear teeth, it's calculated for the line of contact.
    *   Buckingham's formula for contact stress:
        *   $\sigma_c = Z \sqrt{\frac{W_d}{d \cdot b \cdot I}}$ (approximately)
        *   Where:
            *   $W_d$: Dynamic load (as calculated earlier)
            *   $d$: Diameter of the gear at the point of contact
            *   $b$: Face width
            *   $I$: Elasticity factor (depends on the materials of the mating gears)
            *   $Z$: Geometry factor (depends on the curvature of the teeth at the point of contact)

    *   A more detailed form often used in design:
        *   $\sigma_c = C_z \sqrt{\frac{W_t}{d \cdot b \cdot I}}$ (where $C_z$ incorporates the velocity factor effect indirectly or is derived from empirical data)

*   **Permissible Contact Stress ($[\sigma_c]$)**: This is the maximum allowable contact stress for a given gear material and operating conditions. It's usually determined from experimental data and fatigue tests, taking into account the desired lifespan and reliability.
    *   $ [\sigma_c] = K_{op} \cdot [\sigma_{ec}]$
        *   $K_{op}$: Operating stress factor (accounts for load distribution, surface treatment, etc.)
        *   $ [\sigma_{ec}]$: Elastic limit in compression for the weaker material.
    *   AGMA and other standards provide values for allowable contact stress based on material, heat treatment, and desired life.

**Design Equation for Wear:**

The fundamental design equation for ensuring against wear and surface fatigue is:

*   $\sigma_c \le [\sigma_c]$
*   $C_z \sqrt{\frac{W_t}{d \cdot b \cdot I}} \le K_{op} \cdot [\sigma_{ec}]$

**Key Concept:** The design for wear focuses on limiting the contact pressure on the tooth surface to prevent material removal and surface fatigue. This is achieved by selecting appropriate materials, heat treatments, surface finishes, and ensuring adequate lubrication and minimal contamination.

**4.2. Wear Factor ($K$)**:

Some design methodologies introduce a "wear factor" ($K$) which is empirically determined and relates the rate of wear to operating conditions.

*   Wear rate $\propto K \cdot \frac{W_t \cdot v_{slide}}{A_{contact}}$ (Conceptual)
*   $K$ values are usually obtained from charts or tables provided by manufacturers or standards and depend on material combination, lubrication, and environment.

**Design Approach using Wear Factor:**

*   $W_t \le \frac{K \cdot A_{contact}}{v_{slide}}$ (Conceptual relation for permissible tangential load)

**Important Note on Wear:**
*   Wear is a complex phenomenon that is difficult to model precisely with simple formulas.
*   Design for wear relies heavily on empirical data, standards (like AGMA), and experience.
*   The choice of materials, heat treatments (case hardening, nitriding), and surface finishing (grinding, lapping) are crucial for good wear resistance.
*   Proper lubrication is paramount for minimizing wear.

**Textbook References:**

*   **V.B. Bhandari:** Chapter on Gear Design (will cover contact stress and fatigue, and possibly wear considerations).
*   **R.L. Norton:** Chapter on Gears (likely has detailed sections on contact stress, Hertzian theory, and AGMA strength and durability design).
*   **Juvinall & Marshek:** Chapter on Fatigue (will provide background on surface fatigue phenomena like pitting).
*   **PSG Design Data Book / Bhandari Data Book:** These handbooks are invaluable for obtaining values of factors like $I$, $Z$, $[\sigma_{ec}]$, $K_{op}$, and material properties.

### 5. Practice Questions and Exercises

**Question 1 (Dynamic Load):**
A pair of spur gears transmits 10 kW power at a pitch line velocity of 10 m/s. The tangential force at the pitch line is 4000 N. If the factor for dynamic load ($C_d$) is 150,000 N/mm and the velocity factor ($C_v$) is 1.5, calculate the dynamic load on the gear teeth.

**Answer 1:**
Given:
$W_t = 4000$ N
$V = 10$ m/s (implies $C_v = 1.5$ as given)
$C_d = 150,000$ N/mm

Using Buckingham's formula:
$W_d = W_t \left( \frac{C_v}{C_d} + 1 \right)$
$W_d = 4000 \left( \frac{1.5}{150000} + 1 \right)$
$W_d = 4000 \left( 0.00001 + 1 \right)$
$W_d = 4000 \times 1.00001 = 4000.04$ N

*   **Interpretation:** The dynamic load is only slightly higher than the static tangential load, indicating good tooth accuracy and moderate speed.

**Question 2 (Wear Load Concept):**
Explain the primary difference between the design considerations for bending strength and wear on gear teeth.

**Answer 2:**
*   **Design for Bending Strength:** Primarily concerned with preventing the fracture of a tooth due to tensile stress in bending. It focuses on the tangential load and the tooth's cross-sectional shape (Lewis factor, form factor). The Lewis equation and its modern dynamic equivalents are used to ensure the bending stress is below the allowable bending stress.
*   **Design for Wear (and Surface Fatigue):** Primarily concerned with preventing surface degradation due to repeated high contact stresses and sliding. It focuses on the contact stress and the elastic properties of the materials. The Hertzian contact stress equation and permissible contact stress are used to ensure the tooth surfaces can withstand the applied cyclic pressure without excessive wear or pitting.

**Question 3 (Application):**
A pair of spur gears are to transmit 5 kW at 1200 rpm. The pitch diameter of the pinion is 100 mm. The pressure angle is 20 degrees. The tooth system is standard full-depth involute. The gears are of medium accuracy. Using the following data, calculate the dynamic load:
*   Pitch line velocity ($V$) = 6.28 m/s
*   Velocity factor ($C_v$) = 1.8
*   Factor of dynamic load ($C_d$) = 80,000 N/mm

**Answer 3:**
1.  **Calculate Tangential Force ($W_t$):**
    *   Torque, $T = \frac{P \times 60}{2 \pi N} = \frac{5 \times 10^3 \times 60}{2 \pi \times 1200} = 397.89$ Nm
    *   $W_t = \frac{2T}{d} = \frac{2 \times 397.89 \times 10^3}{100} = 7957.8$ N

2.  **Calculate Dynamic Load ($W_d$):**
    *   $W_d = W_t \left( \frac{C_v}{C_d} + 1 \right)$
    *   $W_d = 7957.8 \left( \frac{1.8}{80000} + 1 \right)$
    *   $W_d = 7957.8 \left( 0.0000225 + 1 \right)$
    *   $W_d = 7957.8 \times 1.0000225 \approx 7958.0$ N

**Question 4 (Data Book Usage):**
When designing for wear resistance of a steel gear pair (pinion and gear made of similar steel), what type of factor found in a design data book is crucial for calculating contact stress?

**Answer 4:**
The **elasticity factor (I)** is crucial for calculating contact stress using Hertzian contact stress formulas. This factor depends on the Poisson's ratio and modulus of elasticity of the materials in contact. For steel on steel, specific values for 'I' would be found in design data books.

### 6. Important Points to Remember

*   **Dynamic load is always greater than or equal to the static tangential load.** It accounts for impact and vibrations.
*   The **velocity factor ($C_v$)** increases with speed, amplifying the dynamic load.
*   The **factor of dynamic load ($C_d$)** represents tooth stiffness; a higher $C_d$ means stiffer teeth and a lower dynamic load.
*   **Wear is primarily caused by abrasive particles and high contact pressures leading to surface fatigue.**
*   Design for wear focuses on limiting **Hertzian contact stress** below a permissible limit.
*   **Material properties, heat treatment, surface finish, lubrication, and environmental contamination** are critical for wear resistance.
*   **AGMA standards and design data books** are essential resources for obtaining factors and allowable stresses related to both dynamic load and wear.
*   The design process for gears typically involves checking for both **bending strength and surface durability (wear/fatigue).**

### 7. Conclusion

Understanding and accurately calculating dynamic loads and wear loads are fundamental to designing reliable and durable gear drives. By incorporating factors like velocity, tooth stiffness, contact pressure, and material properties, engineers can ensure that gear teeth can withstand the operating conditions and achieve their intended service life. The principles discussed in this module are essential for meeting the requirements of CO5 and CO1.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
