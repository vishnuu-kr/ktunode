---
title: "sonar manometers"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 3: Force measuring devices: Torque and shaft power measurement"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446431b"
status: "completed"
scrapedAt: "2026-05-20T18:11:44.488Z"
---
# Engineering Instruments and Measurements

## Module 3: Force Measuring Devices: Torque and Shaft Power Measurement

### Topic: Sonar Manometers

**Understanding the Scope:**

This topic, "Sonar Manometers," appears to be a misnomer or a misunderstanding within the context of Module 3. Module 3 focuses on Torque and Shaft Power Measurement, which are direct applications of force measurement. "Manometers," on the other hand, are primarily used for measuring **pressure**. While pressure and force are related (Pressure = Force/Area), manometers are not typically classified as devices for measuring torque or shaft power directly.

It is highly probable that the intended topic was related to pressure measurement using manometers, and perhaps there's a misunderstanding in the term "sonar." "Sonar" (SOund Navigation And Ranging) uses sound waves for detection and measurement, which is distinct from how manometers operate.

**Therefore, this study guide will address the topic of Manometers as pressure measuring devices, as this aligns with the general principles of force (related to pressure) and is a common topic in instrumentation.** If there is a specific, lesser-known application of "sonar manometers" related to torque or shaft power, it is not a standard or widely recognized concept within the field of engineering instrumentation.

**CO Alignment:**

This topic primarily aligns with:

*   **CO3:** To examine various devices to measure force, pressure accurately using a variety of devices and techniques (Knowledge Level: K5). Understanding pressure measurement through manometers is a fundamental aspect of measuring force indirectly.

**Textbook References:**

*   **Mechanical Measurements and Instrumentation & Control by A.K. Sawhney & Puneet Sawhney:** Likely to have comprehensive coverage of various manometer types and their working principles.
*   **Instrumentation Measurement and Analysis by B.C. Nakra and K.K. Chaudhry:** Will offer theoretical background and practical aspects of pressure measurement using manometers.
*   **Measurement Systems (Applications and Design) by E.O. Dobelin:** May discuss manometers in the context of pressure sensing elements within broader measurement systems.

---

### 1. Introduction to Pressure Measurement

*   **Definition of Pressure:** Pressure is defined as the force applied perpendicular to the surface of an object per unit area over which that force is distributed.
    *   Mathematically: $P = F/A$
    *   Units: Pascal (Pa), N/m², psi (pounds per square inch), bar, atm (atmosphere).

*   **Types of Pressure:**
    *   **Absolute Pressure:** Pressure measured with respect to perfect vacuum.
    *   **Gauge Pressure:** Pressure measured with respect to atmospheric pressure.
    *   **Vacuum Pressure:** Pressure below atmospheric pressure (negative gauge pressure).

---

### 2. Manometers: Principles and Types

Manometers are pressure measuring instruments that utilize the principle of liquid displacement in a U-tube or a well to measure pressure. They are based on the hydrostatic principle, where the pressure difference is balanced by the difference in the liquid levels in the manometer.

**2.1 Basic Principle:**

The fundamental principle is that the pressure at any point in a fluid at rest is the same in all directions. In a manometer, the pressure to be measured is opposed by the pressure exerted by a column of liquid, and the difference in liquid levels indicates the pressure.

**2.2 Types of Manometers:**

**A. U-Tube Manometers:**

*   **Description:** Consists of a U-shaped tube containing a liquid (manometric fluid). One end is connected to the pressure source, and the other is either open to the atmosphere (for gauge pressure) or connected to another pressure source (for differential pressure).
*   **Working Principle:** When a pressure is applied to one end, the liquid level in that limb will go down, and the liquid level in the other limb will rise, creating a difference in height ($h$). This height difference is directly proportional to the pressure difference.
*   **Manometric Fluids:**
    *   **Water:** Used for low-pressure measurements.
    *   **Mercury:** Used for higher pressures due to its high density, minimizing the height of the liquid column.
    *   **Alcohol:** Used for very low pressures, as it has low surface tension and low density.

*   **Types of U-Tube Manometers:**

    *   **Simple U-Tube Manometer (Open to Atmosphere):**
        *   **Application:** Measures gauge pressure.
        *   **Setup:** One end connected to the pressure source ($P_1$), the other open to atmosphere ($P_{atm}$).
        *   **Derivation:**
            Let $P_1$ be the pressure to be measured.
            Let $P_{atm}$ be the atmospheric pressure.
            Let $\rho_m$ be the density of the manometric fluid.
            Let $h$ be the difference in liquid levels in the U-tube.
            Consider a point at the same horizontal level in the U-tube. The pressure at this point in both limbs must be equal.
            Pressure in the left limb = $P_1 + \rho_m \cdot g \cdot y$ (where $y$ is the length of liquid column in the left limb above the reference level)
            Pressure in the right limb = $P_{atm} + \rho_m \cdot g \cdot (y+h)$
            Equating the pressures: $P_1 + \rho_m \cdot g \cdot y = P_{atm} + \rho_m \cdot g \cdot (y+h)$
            $P_1 = P_{atm} + \rho_m \cdot g \cdot h$
            Gauge Pressure, $P_{gauge} = P_1 - P_{atm} = \rho_m \cdot g \cdot h$

    *   **U-Tube Differential Manometer:**
        *   **Application:** Measures the pressure difference between two points ($P_1$ and $P_2$).
        *   **Setup:** One end connected to $P_1$, the other to $P_2$.
        *   **Derivation:**
            Let the pressure difference be $P_1 - P_2$.
            Let $h$ be the difference in liquid levels in the U-tube.
            Let $\rho_m$ be the density of the manometric fluid.
            Let $\rho_1$ be the density of the fluid in the pipe connected to $P_1$ and $\rho_2$ be the density of the fluid in the pipe connected to $P_2$, above the level of the manometric fluid in the U-tube.
            Consider a point at the same horizontal level in the U-tube.
            Pressure in the left limb = $P_1 - \rho_1 \cdot g \cdot h_1$ (where $h_1$ is the height of the fluid column above the reference level in the left pipe)
            Pressure in the right limb = $P_2 - \rho_2 \cdot g \cdot h_2$ (where $h_2$ is the height of the fluid column above the reference level in the right pipe)
            If the fluids in the pipes are the same and the connections are made at the same level, $h_1 = h_2 = h'$ and $\rho_1 = \rho_2 = \rho$.
            Then, pressure in the left limb = $P_1 - \rho \cdot g \cdot h'$
            Pressure in the right limb = $P_2 - \rho \cdot g \cdot h'$
            The pressure from the manometric fluid will add to this.
            Let's reconsider the reference level at the interface of the manometric fluid and the fluid in the pipe.
            Pressure at the lower level of the U-tube:
            Left limb: $P_1 - \rho_1 \cdot g \cdot h_1$
            Right limb: $P_2 - \rho_2 \cdot g \cdot h_2 + \rho_m \cdot g \cdot h$
            Assuming connections are at the same level and the fluids in the pipes are the same:
            $P_1 - \rho \cdot g \cdot h' = P_2 - \rho \cdot g \cdot h' + \rho_m \cdot g \cdot h$
            $P_1 - P_2 = \rho_m \cdot g \cdot h$
            This is for the case where the fluid in the U-tube is denser than the fluid in the pipes and the connections are at the same level.

            **More general case for U-tube differential manometer:**
            Let $h$ be the difference in levels of the manometric fluid.
            Let $P_1$ and $P_2$ be the pressures at the connection points.
            Let $\rho_1$ and $\rho_2$ be the densities of the fluid in the pipes connected to $P_1$ and $P_2$ respectively.
            Let $\rho_m$ be the density of the manometric fluid.
            Let $h_1$ be the height of the fluid column above the lower meniscus of the manometric fluid in the limb connected to $P_1$.
            Let $h_2$ be the height of the fluid column above the lower meniscus of the manometric fluid in the limb connected to $P_2$.
            The lower meniscus is in the limb connected to the higher pressure (or the one with lower fluid level). Let's assume $P_1 > P_2$.
            Pressure at the level of the lower meniscus (say, in the right limb):
            $P_2 + \rho_2 \cdot g \cdot h_2 = P_1 + \rho_m \cdot g \cdot h_{manometer\_right}$ (This is incorrect. $h$ is the difference, not the absolute height)

            Let's draw a diagram and define the levels clearly:
            Assume $P_1$ is connected to the left limb and $P_2$ to the right limb.
            Let the level of the manometric fluid in the left limb be $L_1$ and in the right limb be $L_2$.
            Let the difference in levels $h = |L_2 - L_1|$.
            Let the fluid in the pipe connected to $P_1$ have density $\rho_1$ and height $H_1$ above the reference level.
            Let the fluid in the pipe connected to $P_2$ have density $\rho_2$ and height $H_2$ above the reference level.
            Consider a horizontal reference plane at the level of the lower meniscus.

            **Case 1: Manometric fluid is denser than the fluid in the pipes ($\rho_m > \rho_1, \rho_m > \rho_2$)**
            Assume the left limb has a lower fluid level (meaning $P_1$ is higher or $P_2$ is lower).
            Let $h_a$ be the height of fluid in the left pipe above the reference level.
            Let $h_b$ be the height of fluid in the right pipe above the reference level.
            Let $h$ be the difference in the manometric fluid levels.
            Pressure at the reference level in the left limb: $P_1 + \rho_1 \cdot g \cdot h_a$
            Pressure at the reference level in the right limb: $P_2 + \rho_2 \cdot g \cdot h_b + \rho_m \cdot g \cdot h$
            For a U-tube manometer, the difference in levels of the manometric fluid is $h$.
            If the connecting pipes are at the same level and filled with the same fluid of density $\rho$:
            $P_1 + \rho \cdot g \cdot h_{pipe} = P_2 + \rho \cdot g \cdot h_{pipe} + \rho_m \cdot g \cdot h$
            $P_1 = P_2 + \rho_m \cdot g \cdot h$
            $P_1 - P_2 = \rho_m \cdot g \cdot h$

            If the connections are at different levels, say the left connection is at a height $z$ above the right connection.
            $P_1 + \rho_1 \cdot g \cdot H_1 = P_2 + \rho_2 \cdot g \cdot H_2$
            The actual calculation involves carefully considering the heights of all fluid columns above a common datum.
            If the manometric fluid is in the U-tube, and the pipes connect to points at the same level:
            Pressure at the level of the lower meniscus:
            $P_1 + \rho_1 g h_{1, above} = P_2 + \rho_2 g h_{2, above} + \rho_m g h_{manometer}$
            where $h_{1, above}$ and $h_{2, above}$ are heights of the fluid columns in the pipes above the reference level (which is the lower meniscus of the manometric fluid).
            If the pipes are connected at the same level and contain the same fluid of density $\rho$, and the manometric fluid has density $\rho_m$:
            $P_1 + \rho g h_{pipe} = P_2 + \rho g h_{pipe} + \rho_m g h$
            $P_1 - P_2 = \rho_m g h$. This formula is commonly used when connections are at the same level.

    *   **Inclined U-Tube Manometer:**
        *   **Application:** To measure very small pressure differences with greater accuracy.
        *   **Setup:** One limb of the U-tube is inclined at an angle $\theta$ to the horizontal.
        *   **Advantage:** A small vertical difference ($h$) results in a larger inclined length ($L$), making the reading easier and more precise.
        *   **Derivation:**
            Let $h$ be the vertical difference in liquid levels.
            Let $L$ be the displacement along the inclined tube.
            Then, $h = L \sin \theta$.
            For gauge pressure: $P_{gauge} = \rho_m \cdot g \cdot h = \rho_m \cdot g \cdot L \sin \theta$.
            The reading is taken as $L$.

**B. Well-Type (or Cistern) Manometers:**

*   **Description:** Consists of a large reservoir (well) and a smaller tube connected to it. The pressure is applied to either the well or the tube.
*   **Working Principle:** The large cross-sectional area of the well ensures that the change in liquid level in the well is negligible when the liquid level in the narrow tube changes. This simplifies the reading as the pressure is directly related to the height difference in the narrow tube.
*   **Types:**
    *   **Vertical Well-Type Manometer:** The narrow tube is vertical.
    *   **Inclined Well-Type Manometer:** The narrow tube is inclined for increased sensitivity.

*   **Derivation (Vertical Well-Type):**
    Let $A$ be the cross-sectional area of the well and $a$ be the cross-sectional area of the narrow tube.
    Let $P_1$ be the pressure applied to the well, and the narrow tube is open to atmosphere.
    Let $h$ be the rise in the liquid level in the narrow tube.
    The drop in the liquid level in the well will be $h_w$.
    Volume displaced from the well = $A \cdot h_w$.
    Volume entering the narrow tube = $a \cdot h$.
    Since the fluid is incompressible, $A \cdot h_w = a \cdot h$.
    So, $h_w = (a/A) \cdot h$.
    The effective height difference is the sum of the rise in the tube and the drop in the well: $H_{effective} = h + h_w$.
    $H_{effective} = h + (a/A) \cdot h = h (1 + a/A)$.
    The gauge pressure is $P_{gauge} = \rho_m \cdot g \cdot H_{effective} = \rho_m \cdot g \cdot h (1 + a/A)$.
    If $A \gg a$, then $a/A \approx 0$, and $P_{gauge} \approx \rho_m \cdot g \cdot h$. This makes it similar to a U-tube manometer but with a fixed reference level in the well.

---

### 3. Advantages and Disadvantages of Manometers

**Advantages:**

*   **Simple Construction:** Easy to design and manufacture.
*   **Low Cost:** Relatively inexpensive compared to other pressure sensors.
*   **No Power Supply Required:** Operates based on hydrostatic principles.
*   **Good Accuracy for Low to Moderate Pressures:** Provide reliable readings for specific pressure ranges.
*   **Direct Reading:** Readings are directly observed from the liquid levels.
*   **No Zero Drift:** The zero point is inherently stable.

**Disadvantages:**

*   **Limited Pressure Range:** Not suitable for very high pressures due to the requirement of impractical liquid column heights.
*   **Sensitivity to Vibration and Shock:** Liquid levels can be disturbed, leading to inaccurate readings.
*   **Evaporation of Manometric Fluid:** For open-tube manometers, evaporation can affect accuracy over time.
*   **Surface Tension Effects:** Can introduce errors, especially with narrow tubes or low-density fluids.
*   **Hygroscopic Nature of Manometric Fluid:** Some fluids may absorb moisture, affecting density.
*   **Bulkiness:** Can be quite large for measuring even moderate pressures.
*   **Slow Response:** The liquid column takes time to stabilize, making them unsuitable for rapidly changing pressures.
*   **Parallax Error:** Reading the liquid level can be subject to parallax error if not viewed correctly.

---

### 4. Applications of Manometers

*   **Laboratory Measurements:** Common in educational institutions for demonstrating pressure principles.
*   **Low-Pressure Measurement in HVAC Systems:** Measuring air pressure in ducts.
*   **Fluid Flow Measurement:** Used in conjunction with orifice plates, venturi meters, and pitot tubes to measure differential pressure, which is then related to flow rate.
*   **Calibration of Other Pressure Instruments:** Can be used as a standard for calibrating Bourdon gauges or other pressure transducers.
*   **Manually Operated Systems:** Where direct visual indication is preferred.

---

### 5. Important Points to Remember

*   Manometers measure **pressure**, not directly torque or shaft power.
*   The accuracy of a manometer depends on the **density of the manometric fluid**, the **difference in liquid levels ($h$)**, and **gravitational acceleration ($g$)**.
*   **Manometric fluid selection** is crucial and depends on the pressure range and desired sensitivity.
*   **U-tube manometers** are used for gauge and differential pressure.
*   **Inclined manometers** enhance sensitivity for low-pressure measurements.
*   **Well-type manometers** simplify readings by minimizing the change in the well's liquid level.
*   **Vibrations and parallax error** are significant sources of inaccuracy.
*   Manometers are best suited for **static or slowly varying pressures**.

---

### 6. Practice Questions and Exercises

**Question 1:**
A U-tube manometer is used to measure the gauge pressure of a gas. The manometric fluid has a density of $13600 \, \text{kg/m}^3$. If the difference in the liquid levels in the U-tube is $0.15 \, \text{m}$, calculate the gauge pressure in Pascals. (Assume $g = 9.81 \, \text{m/s}^2$)

**Answer 1:**
The gauge pressure ($P_{gauge}$) is given by $P_{gauge} = \rho_m \cdot g \cdot h$.
Given:
$\rho_m = 13600 \, \text{kg/m}^3$
$g = 9.81 \, \text{m/s}^2$
$h = 0.15 \, \text{m}$

$P_{gauge} = 13600 \, \text{kg/m}^3 \times 9.81 \, \text{m/s}^2 \times 0.15 \, \text{m}$
$P_{gauge} = 20004.6 \, \text{Pa}$

**Question 2:**
An inclined manometer has an inclined tube at an angle of $30^\circ$ to the horizontal. The manometric fluid has a density of $800 \, \text{kg/m}^3$. If the liquid level moves by $0.2 \, \text{m}$ along the inclined tube when measuring gauge pressure, calculate the gauge pressure in Pascals. (Assume $g = 9.81 \, \text{m/s}^2$)

**Answer 2:**
The vertical difference in liquid levels ($h$) is related to the displacement along the inclined tube ($L$) by $h = L \sin \theta$.
Given:
$L = 0.2 \, \text{m}$
$\theta = 30^\circ$
$\rho_m = 800 \, \text{kg/m}^3$
$g = 9.81 \, \text{m/s}^2$

First, calculate the vertical height difference:
$h = 0.2 \, \text{m} \times \sin(30^\circ) = 0.2 \, \text{m} \times 0.5 = 0.1 \, \text{m}$

Now, calculate the gauge pressure:
$P_{gauge} = \rho_m \cdot g \cdot h$
$P_{gauge} = 800 \, \text{kg/m}^3 \times 9.81 \, \text{m/s}^2 \times 0.1 \, \text{m}$
$P_{gauge} = 784.8 \, \text{Pa}$

**Question 3:**
A U-tube differential manometer is used to measure the pressure difference between two points in a horizontal pipe. The pipe contains water (density $1000 \, \text{kg/m}^3$). The manometer uses mercury (density $13600 \, \text{kg/m}^3$) as the manometric fluid. If the difference in mercury levels in the U-tube is $0.1 \, \text{m}$, calculate the pressure difference in Pascals.

**Answer 3:**
For a U-tube differential manometer with connections at the same level, the pressure difference is given by $P_1 - P_2 = (\rho_m - \rho) \cdot g \cdot h$, where $\rho_m$ is the density of the manometric fluid and $\rho$ is the density of the fluid in the pipe.
Given:
$\rho_m = 13600 \, \text{kg/m}^3$ (mercury)
$\rho = 1000 \, \text{kg/m}^3$ (water)
$h = 0.1 \, \text{m}$
$g = 9.81 \, \text{m/s}^2$

$P_1 - P_2 = (13600 \, \text{kg/m}^3 - 1000 \, \text{kg/m}^3) \times 9.81 \, \text{m/s}^2 \times 0.1 \, \text{m}$
$P_1 - P_2 = (12600 \, \text{kg/m}^3) \times 9.81 \, \text{m/s}^2 \times 0.1 \, \text{m}$
$P_1 - P_2 = 12360.6 \, \text{Pa}$

**Question 4:**
Consider a well-type manometer where the area of the well is 100 times the area of the narrow tube ($A = 100a$). If the manometric fluid has a density of $800 \, \text{kg/m}^3$, and the liquid level in the narrow tube rises by $0.05 \, \text{m}$ when measuring gauge pressure, calculate the gauge pressure. (Assume $g = 9.81 \, \text{m/s}^2$)

**Answer 4:**
The gauge pressure in a well-type manometer is given by $P_{gauge} = \rho_m \cdot g \cdot h (1 + a/A)$.
Given:
$a/A = 1/100 = 0.01$
$h = 0.05 \, \text{m}$
$\rho_m = 800 \, \text{kg/m}^3$
$g = 9.81 \, \text{m/s}^2$

$P_{gauge} = 800 \, \text{kg/m}^3 \times 9.81 \, \text{m/s}^2 \times 0.05 \, \text{m} \times (1 + 0.01)$
$P_{gauge} = 392.4 \, \text{Pa} \times 1.01$
$P_{gauge} = 396.324 \, \text{Pa}$

---

### 7. Correlation with Course Outcomes (COs)

*   **CO3: To examine various devices to measure force, pressure accurately using a variety of devices and techniques (Knowledge Level: K5).**
    *   This topic directly addresses the measurement of pressure, which is a fundamental aspect of force measurement ($F = P \times A$). Understanding different types of manometers, their working principles, and their limitations allows students to examine and select appropriate devices for pressure measurement. The calculations involved reinforce the application of principles.

---
**End of Topic Notes: Sonar Manometers (Interpreted as Manometers)**

This concludes the study notes on manometers, presented as a likely interpretation of the intended topic within the context of Module 3. Remember to always clarify any ambiguous topic titles with your instructor.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
