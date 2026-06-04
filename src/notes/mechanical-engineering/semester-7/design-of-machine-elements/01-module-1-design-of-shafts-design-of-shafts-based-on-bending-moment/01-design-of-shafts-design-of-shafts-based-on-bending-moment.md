---
title: "Design of Shafts: Design of Shafts Based on Bending Moment"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 1: Design of Shafts: Design of Shafts Based on Bending Moment"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d59"
status: "completed"
scrapedAt: "2026-05-20T18:10:45.628Z"
---
# DESIGN OF MACHINE ELEMENTS: MODULE 1 - DESIGN OF SHAFTS

## Topic: Design of Shafts Based on Bending Moment

---

### 1. Introduction to Shafts

*   **Definition:** A shaft is a rotating machine element that transmits power and torque from one machine component to another. It is usually subjected to bending, torsion, and axial loads.
*   **Function:**
    *   Transmit torque from a prime mover (e.g., engine, motor) to a driven machine (e.g., gears, pulleys, sprockets).
    *   Support rotating elements like gears, pulleys, flywheels, and bearings.
    *   Transmit axial forces in some cases (e.g., propeller shafts).
*   **Types of Shafts:**
    *   **Transmission Shafts:** Transmit power between the source and driven machines. Examples: axle shafts, crank shafts, line shafts.
    *   **Axles:** Do not transmit torque but support bending loads. Examples: axle of a train or carriage.
*   **Common Loadings on Shafts:**
    *   **Torque (T):** Due to power transmission.
    *   **Bending Moment (M):** Due to weights of components, belt tensions, gear forces, etc.
    *   **Axial Load (F):** Due to thrust bearings, etc.

---

### 2. Design of Shafts Based on Bending Moment

This section focuses on designing shafts primarily subjected to bending stresses. While shafts are often subjected to combined bending and torsion, understanding the design based on bending alone is a fundamental step.

#### 2.1 Stresses Induced by Bending Moment

When a shaft is subjected to a bending moment ($M$), it experiences bending stresses.

*   **Bending Stress ($\sigma_b$):**
    *   According to the bending stress formula: $\sigma_b = \frac{My}{I}$
        *   Where:
            *   $M$ = Bending Moment at a particular section of the shaft.
            *   $y$ = Distance of the fiber from the neutral axis.
            *   $I$ = Moment of Inertia of the shaft's cross-section about the neutral axis.

*   **Maximum Bending Stress:** Occurs at the outermost fiber, where $y$ is maximum. For a solid circular shaft of diameter $d$, $y_{max} = d/2$.
    *   The Section Modulus ($Z$) for a solid circular shaft is $Z = \frac{\pi d^3}{32}$.
    *   Therefore, the maximum bending stress is: $\sigma_{b, max} = \frac{M}{Z} = \frac{32M}{\pi d^3}$.

*   **Hole/Keyway Effects:** The presence of holes (e.g., for bearings) or keyways reduces the load-carrying capacity of the shaft. Stress concentration factors need to be considered if fatigue is involved, but for static design based on bending moment, we primarily consider the reduced cross-sectional area and thus a reduced section modulus.

#### 2.2 Design Procedure for Shafts Based on Bending Moment

The fundamental principle of shaft design is to ensure that the induced stresses do not exceed the allowable stresses of the material used.

**Step 1: Determine the Bending Moment ($M$)**

*   **Free Body Diagram:** Draw a free body diagram of the shaft considering all applied forces and reactions.
*   **Shear Force and Bending Moment Diagrams:** Construct shear force and bending moment diagrams along the length of the shaft. This helps identify the section with the maximum bending moment ($M_{max}$).
*   **Sources of Bending Moment:**
    *   **Weight of Components:** Gears, pulleys, flywheels, etc., supported on the shaft.
    *   **Forces from Power Transmission Elements:**
        *   **Pulleys:** Belt tensions create forces that can cause bending. The resultant force due to belt tensions is often considered as a radial force and a tangential force (for torque).
        *   **Gears:** Tooth forces (radial, tangential, axial) act at the pitch circle.
    *   **Support Reactions:** Forces exerted by bearings on the shaft.

**Step 2: Select the Material and Determine Allowable Stress ($\sigma_{allow}$)**

*   **Common Shaft Materials:** Carbon steels (e.g., AISI 1020, 1045), alloy steels (e.g., AISI 4140, 4340), stainless steels.
*   **Allowable Bending Stress:** This is typically taken as a fraction of the yield strength or ultimate tensile strength of the material, considering a factor of safety ($FS$).
    *   $\sigma_{allow} = \frac{\sigma_y}{FS}$ or $\sigma_{allow} = \frac{\sigma_{ut}}{FS}$
    *   The factor of safety depends on the type of loading (static, shock), reliability requirements, material properties, and precision of calculations. Typical values for static bending can range from 2 to 5.

**Step 3: Calculate the Required Section Modulus ($Z_{req}$) based on Bending Stress**

*   The maximum bending stress induced in the shaft must be less than or equal to the allowable bending stress:
    *   $\sigma_{b, max} \le \sigma_{allow}$
    *   $\frac{M_{max}}{Z} \le \sigma_{allow}$
*   Rearranging to find the required section modulus:
    *   $Z_{req} = \frac{M_{max}}{\sigma_{allow}}$

**Step 4: Determine the Shaft Diameter ($d$)**

*   For a solid circular shaft, the section modulus is $Z = \frac{\pi d^3}{32}$.
*   Equating the required section modulus to the formula:
    *   $\frac{\pi d^3}{32} = Z_{req}$
    *   $d^3 = \frac{32 Z_{req}}{\pi}$
    *   $d = \left(\frac{32 Z_{req}}{\pi}\right)^{1/3}$

*   **For Hollow Circular Shafts:**
    *   Let $d_o$ be the outer diameter and $d_i$ be the inner diameter.
    *   The section modulus is $Z = \frac{\pi (d_o^4 - d_i^4)}{32 d_o}$.
    *   The design often involves selecting an outer diameter and then determining the required wall thickness or inner diameter. Alternatively, a diameter ratio ($d_i/d_o$) can be assumed.

**Step 5: Consider Modifications and Standard Sizes**

*   **Standard Diameters:** Shafts are manufactured in standard diameters. The calculated diameter should be rounded up to the nearest standard size.
*   **Keyways:** If keyways are present, they introduce stress concentrations, which are more critical under fatigue loading. For static bending, the reduction in material is accounted for by using a reduced section modulus or adjusting the allowable stress. A common empirical approach is to reduce the allowable stress or use a modified section modulus.
*   **Shoulders and Steps:** Shafts often have steps or shoulders to mount components or provide bearing seats. These transitions can also cause stress concentrations.

---

#### 2.3 Examples and Applications

**Example 1: Simply Supported Shaft with a Central Transverse Load**

Consider a steel shaft supported at two bearings 1 meter apart. A pulley weighing 500 N is mounted at the center of the shaft. The belt tensions on the pulley result in a resultant radial force of 1000 N at the center. The shaft is made of AISI 1045 steel (Yield Strength $\sigma_y = 350$ MPa). Assume a factor of safety $FS = 5$.

**Solution:**

1.  **Bending Moment:**
    *   The shaft is simply supported, and the load is at the center.
    *   Total load $P = 500 \text{ N} + 1000 \text{ N} = 1500 \text{ N}$.
    *   Span $L = 1$ m $= 1000$ mm.
    *   Maximum Bending Moment $M_{max} = \frac{PL}{4} = \frac{1500 \text{ N} \times 1000 \text{ mm}}{4} = 375,000 \text{ N-mm} = 375 \text{ kN-mm}$.

2.  **Allowable Stress:**
    *   $\sigma_y = 350$ MPa $= 350$ N/mm$^2$.
    *   $\sigma_{allow} = \frac{\sigma_y}{FS} = \frac{350 \text{ N/mm}^2}{5} = 70 \text{ N/mm}^2$.

3.  **Required Section Modulus:**
    *   $Z_{req} = \frac{M_{max}}{\sigma_{allow}} = \frac{375,000 \text{ N-mm}}{70 \text{ N/mm}^2} \approx 5357.14 \text{ mm}^3$.

4.  **Shaft Diameter:**
    *   For a solid circular shaft, $Z = \frac{\pi d^3}{32}$.
    *   $d^3 = \frac{32 Z_{req}}{\pi} = \frac{32 \times 5357.14 \text{ mm}^3}{\pi} \approx 54656.6 \text{ mm}^3$.
    *   $d = (54656.6)^{1/3} \approx 37.95$ mm.

5.  **Standard Size:** The nearest standard shaft diameter is 40 mm.

**Therefore, the required diameter of the shaft is approximately 40 mm.**

**Reference (Bhandari, 5th Ed., Chapter 12 - Shafts and Axles):** Bhandari's text provides detailed methods for calculating bending moments due to various power transmission elements like pulleys and gears, along with formulas for section modulus and design procedures.

---

#### 2.4 Key Concepts and Definitions

*   **Bending Moment (M):** The algebraic sum of the moments of all external forces acting on one side of a section of a shaft. It causes bending stresses.
*   **Shear Force:** The algebraic sum of all vertical forces acting on one side of a section of a shaft. It causes shear stresses.
*   **Moment of Inertia (I):** A geometric property of a cross-section that quantributes to its resistance to bending. For a solid circle, $I = \frac{\pi d^4}{64}$.
*   **Section Modulus (Z):** The ratio of the moment of inertia ($I$) to the distance from the neutral axis ($y$) to the outermost fiber ($Z = I/y$). It represents the resistance of the cross-section to bending. For a solid circle, $Z = \frac{\pi d^3}{32}$.
*   **Factor of Safety (FS):** The ratio of the ultimate strength (or yield strength) of a material to the allowable working stress. It accounts for uncertainties in material properties, loading, manufacturing, and operating conditions.
*   **Allowable Stress ($\sigma_{allow}$):** The maximum stress that a material is permitted to have under working conditions.

---

#### 2.5 Important Points to Remember

*   **Maximum Bending Moment is Crucial:** Accurately determining the section with the maximum bending moment from the bending moment diagram is vital for correct design.
*   **Material Properties:** The yield strength or ultimate tensile strength of the chosen shaft material directly influences the allowable stress and hence the required diameter.
*   **Factor of Safety:** A sufficiently high factor of safety is essential, especially for static loading, to account for unforeseen circumstances.
*   **Hollow Shafts:** Hollow shafts are often preferred for their higher strength-to-weight ratio and torsional stiffness compared to solid shafts of the same weight.
*   **Stress Concentration:** While this section focuses on bending moment design, remember that stress concentrations due to shoulders, keyways, and holes become significant under fatigue loading. These will be covered in later modules.
*   **Static Design:** The procedures discussed here are primarily for static design. Dynamic loading and fatigue analysis are critical for shafts subjected to fluctuating loads.

---

#### 2.6 Practice Questions and Exercises

**Question 1:** A shaft is supported on two bearings 1.2 meters apart. A 400 N gear is mounted at the center. The radial load due to the gear is 1200 N. If the shaft material has a yield strength of 300 MPa and a factor of safety of 4 is to be used, calculate the minimum diameter of the shaft to withstand the bending moment. (Assume a solid circular shaft).

**Answer:**
1.  Total load $P = 400 \text{ N} + 1200 \text{ N} = 1600 \text{ N}$.
2.  Span $L = 1.2 \text{ m} = 1200 \text{ mm}$.
3.  Maximum Bending Moment $M_{max} = \frac{PL}{4} = \frac{1600 \text{ N} \times 1200 \text{ mm}}{4} = 480,000 \text{ N-mm}$.
4.  Allowable stress $\sigma_{allow} = \frac{\sigma_y}{FS} = \frac{300 \text{ N/mm}^2}{4} = 75 \text{ N/mm}^2$.
5.  Required Section Modulus $Z_{req} = \frac{M_{max}}{\sigma_{allow}} = \frac{480,000 \text{ N-mm}}{75 \text{ N/mm}^2} = 6400 \text{ mm}^3$.
6.  Shaft diameter $d = \left(\frac{32 Z_{req}}{\pi}\right)^{1/3} = \left(\frac{32 \times 6400}{\pi}\right)^{1/3} \approx 40.65$ mm.
7.  The minimum diameter is approximately **41 mm**.

**Question 2:** A shaft carries a pulley at its mid-span, supported by bearings at its ends. The distance between the bearings is 1 m. The diameter of the pulley is 300 mm, and the angle of wrap of the belt is 180 degrees. The tensions in the belt are $T_1 = 1000$ N and $T_2 = 300$ N. Calculate the bending moment on the shaft at the pulley location and determine the required diameter of a solid steel shaft if the allowable bending stress is 100 MPa.

**Answer:**
1.  Tangential force $F_t = T_1 - T_2 = 1000 - 300 = 700$ N. This force causes torque.
2.  Radial force $F_r = T_1 + T_2 = 1000 + 300 = 1300$ N. This force causes bending.
3.  The pulley is at the mid-span, so the load is distributed across the span. The maximum bending moment occurs at the pulley.
4.  Treating the radial force as a point load at the center for simplicity in this context of bending moment calculation:
    *   Maximum Bending Moment $M_{max} = \frac{F_r \times L}{4} = \frac{1300 \text{ N} \times 1000 \text{ mm}}{4} = 325,000 \text{ N-mm}$.
5.  Allowable bending stress $\sigma_{allow} = 100$ MPa $= 100$ N/mm$^2$.
6.  Required Section Modulus $Z_{req} = \frac{M_{max}}{\sigma_{allow}} = \frac{325,000 \text{ N-mm}}{100 \text{ N/mm}^2} = 3250 \text{ mm}^3$.
7.  Shaft diameter $d = \left(\frac{32 Z_{req}}{\pi}\right)^{1/3} = \left(\frac{32 \times 3250}{\pi}\right)^{1/3} \approx 30.63$ mm.
8.  The required diameter of the shaft is approximately **31 mm**.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


#### 2.7 Textbooks and Reference Material Integration

*   **V. B. Bhandari (5th Ed.):** Chapter 12 is dedicated to Shafts and Axles. It provides comprehensive coverage of load calculations for pulleys and gears, bending moment diagrams, and the design procedure for shafts under various loading conditions, including bending. It emphasizes the importance of considering combined stresses but also lays the groundwork for understanding the bending component.
*   **R. L. Norton (5th Ed.):** Norton's "Machine Design – An Integrated Approach" also covers shafts extensively, focusing on the practical aspects of design and manufacturing. It would likely present the stress analysis and design steps in a similar manner, perhaps with different illustrative examples.
*   **PSG Design Data:** The PSG Design Data Handbook is an invaluable resource for obtaining standard shaft diameters, material properties, and recommended factors of safety. It can be used to verify calculated values and select appropriate standard sizes.
*   **Shigley's Mechanical Engineering Design:** Shigley is a classic text. It provides rigorous theoretical treatment of stress analysis, including bending stress calculations, section modulus, and the fundamental design equations that form the basis of shaft design.

---

#### 2.8 Alignment with Course Outcomes

This topic directly contributes to the foundational understanding required for several course outcomes, particularly those related to transmitting power and designing components that are part of a transmission system.

*   **CO1: Model suitable transmission system for the stated conditions:** Understanding shaft design is crucial for selecting appropriate shaft sizes and materials within a transmission system. The ability to calculate bending moments and stresses allows engineers to specify the correct shaft for power transmission.
*   **CO5: Model suitable spur or helical gear drive based on the industrial requirements:** Gears are typically mounted on shafts. The design of the shaft must accommodate the forces transmitted by the gears, including the bending moments created by these forces.

---

This concludes the study notes for the design of shafts based on bending moment. The next steps in shaft design typically involve considering torsional loads and then combining bending and torsional loads, followed by fatigue analysis.