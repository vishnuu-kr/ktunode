---
title: "Orientation of strain gauges for force and torque measurement"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 2: Displacement measurement: Transducers for displacement measurement – Potentiometers"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464312"
status: "completed"
scrapedAt: "2026-05-20T18:11:38.917Z"
---
# Engineering Instruments and Measurements: Module 2 - Displacement Measurement: Transducers for Displacement Measurement - Potentiometers

## Topic: Orientation of Strain Gauges for Force and Torque Measurement

**Course Outcomes Addressed:**

*   **CO1:** To identify and classify different measuring instruments and their static and dynamic characteristics, ensuring proper selection and usage for various engineering applications (Knowledge Level: K2)
*   **CO2:** To measure and analyse displacement, strain and surface characteristics using appropriate techniques and devices, ensuring quality control and performance optimization in manufacturing and engineering processes (Knowledge Level: K3)
*   **CO3:** To examine various devices to measure force, pressure accurately using a variety of devices and techniques (Knowledge Level: K5)
*   **CO5:** To select measurement system for engineering applications (Knowledge Level: K3)

**Learning Outcomes:**

*   Understand the fundamental principles of strain gauges.
*   Learn how strain gauges are used for force and torque measurement.
*   Comprehend the importance of strain gauge orientation for accurate measurements.
*   Apply knowledge of strain gauge configurations (e.g., Wheatstone bridge) for force and torque sensing.

---

### 1. Introduction to Strain Gauges

Strain gauges are transducers that change their electrical resistance in proportion to the amount of strain they are subjected to. They are widely used for measuring mechanical strain, which is directly related to stress. In the context of force and torque measurement, strain gauges are bonded to the surface of a component that deforms under the applied force or torque. The deformation (strain) is then converted into an electrical signal.

**Key Concepts:**

*   **Strain:** A measure of deformation representing the displacement between particles in a body, divided by the distance between those particles. Mathematically, strain ($\epsilon$) is defined as the change in length ($\Delta L$) divided by the original length ($L_0$):
    $\epsilon = \frac{\Delta L}{L_0}$
*   **Stress:** The internal force per unit area within a deformable body. It is related to strain through material properties (e.g., Young's Modulus).
*   **Gauge Factor (GF):** A characteristic property of a strain gauge that relates the change in its electrical resistance to the applied strain. It is defined as:
    $GF = \frac{\Delta R / R_0}{\epsilon}$
    where:
    *   $\Delta R$ is the change in resistance
    *   $R_0$ is the initial resistance of the strain gauge
    *   $\epsilon$ is the strain

**Reference:**
*   **Dobelin, E.O. (1990). Measurement Systems (Applications and Design).** Chapter on strain gauges will provide detailed information on their operating principles and characteristics.
*   **Sawhney & Sawhney (2009). Mechanical Measurements and Instrumentation & Control.** Likely covers the basic physics of resistance change with deformation.

---

### 2. Strain Gauges for Force Measurement

When a force is applied to an object, it typically results in deformation (strain) within that object. Strain gauges can be attached to the object at locations where the strain is directly proportional to the applied force.

**Principle:**

1.  A strain gauge is bonded to a component (e.g., a load cell) that will deform under the applied force.
2.  As the force is applied, the component deforms, causing strain in the attached strain gauge.
3.  The strain causes a change in the electrical resistance of the strain gauge due to two primary effects:
    *   **Piezoresistive effect:** The intrinsic property of the semiconductor material to change its resistance when subjected to mechanical strain.
    *   **Geometrical effect:** The change in length and cross-sectional area of the resistive element due to strain, altering its resistance according to $R = \rho \frac{L}{A}$.
4.  This change in resistance is then measured, typically using a Wheatstone bridge circuit, and converted into a voltage signal proportional to the applied force.

**Example:**

*   **Load Cells:** Load cells are common force-measuring devices that utilize strain gauges. They are designed with specific geometries (e.g., a prismatic bar, a diaphragm) that experience predictable strain patterns under load. Strain gauges are strategically placed on these components to maximize sensitivity to the applied force and minimize sensitivity to other factors like temperature.

**Important Points to Remember:**

*   The location of strain gauge placement is crucial for accurate force measurement. It must be on a surface where the strain is directly proportional to the force and ideally in a region of uniform stress.
*   The strain gauge must be securely bonded to the surface for reliable transfer of strain.

---

### 3. Strain Gauges for Torque Measurement

Torque, or twisting moment, causes shear stress and shear strain in a component. Strain gauges can be oriented to measure this shear strain.

**Principle:**

1.  When a torque is applied to a shaft, it experiences shear stress and shear strain.
2.  Shear strain occurs at an angle of 45 degrees to the axis of the shaft.
3.  Strain gauges are typically mounted at 45 degrees to the shaft's axis to measure this shear strain.
4.  A common configuration for torque measurement involves using two strain gauges mounted at $+45^\circ$ and $-45^\circ$ to the shaft axis.

**Configurations for Torque Measurement:**

*   **Single Gauge (Less Common):** A single strain gauge placed at 45 degrees can measure the shear strain, but this configuration is sensitive to bending moments and axial forces.
*   **Two-Gauge Configuration:** Two strain gauges are applied at 45 degrees to the shaft's axis, with one gauge on the top surface and the other on the bottom surface, oriented at $+45^\circ$ and $-45^\circ$ respectively. These gauges measure shear strains that are equal in magnitude but opposite in sign. When connected in a Wheatstone bridge, they cancel out any strains due to axial load or bending, making the measurement primarily sensitive to torque.
*   **Four-Gauge Configuration (Full Bridge):** This is the most common and accurate method. Four strain gauges are used:
    *   Two gauges are placed at $+45^\circ$ to the shaft axis, on opposite sides.
    *   Two gauges are placed at $-45^\circ$ to the shaft axis, on opposite sides.
    This configuration, when wired in a full Wheatstone bridge, provides maximum sensitivity to torque and excellent rejection of bending and axial loads.

**Example:**

*   **Torque Measurement on Rotating Shafts:** In applications like automotive testing or industrial machinery, strain gauges are bonded to shafts to measure the torque being transmitted. The gauges are often incorporated into a telemetry system to transmit the measured strain wirelessly from the rotating shaft.

**Important Points to Remember:**

*   The orientation of the strain gauges is critical for differentiating between torque and other types of strain (bending, axial).
*   A 45-degree orientation is key for measuring shear strain caused by torque.
*   Wheatstone bridge configurations are essential for canceling out unwanted strains and maximizing the output signal for torque.

**Reference:**
*   **Nakra & Chaudhry (2009). Instrumentation Measurement and Analysis.** This textbook should provide detailed explanations on bridge configurations and their application in torque measurement using strain gauges.
*   **Raghavendra (2013). Engineering metrology and Measurements.** May offer practical insights into strain gauge application techniques.
*   **Jain (2022). A Text Book of Engineering Metrology.** Likely includes chapters on stress analysis and transducer applications.

---

### 4. Wheatstone Bridge Configurations for Force and Torque Measurement

The Wheatstone bridge is the most common circuit used to measure the small changes in resistance of strain gauges. It allows for the detection of these small changes by converting them into a measurable voltage output.

**Basic Wheatstone Bridge:**

A Wheatstone bridge consists of four resistive arms. When the bridge is balanced, the voltage output is zero. When one or more of the resistances change, the bridge becomes unbalanced, producing a voltage output proportional to the change.

**Configurations:**

*   **Quarter Bridge:**
    *   Uses one active strain gauge.
    *   The other three arms are fixed resistors.
    *   Sensitivity is lower, and it is susceptible to temperature changes and errors from lead wire resistance.
    *   **Application:** Simple force measurement where high accuracy is not paramount or where compensation for temperature is handled externally.

*   **Half Bridge:**
    *   Uses two active strain gauges.
    *   **Type 1 (Adjacent arms):** One strain gauge in an active arm and another active gauge in an adjacent arm. This configuration cancels out temperature effects if both gauges are subjected to the same temperature. It provides twice the sensitivity of a quarter bridge.
    *   **Type 2 (Opposite arms):** One strain gauge in an active arm and another active gauge in the opposite arm. This configuration is ideal for cancelling out strains due to bending or axial loads, while remaining sensitive to shear strain (used in torque measurement). It provides twice the sensitivity of a quarter bridge.
    *   **Application:** Improved accuracy and temperature compensation, suitable for torque measurement (Type 2).

*   **Full Bridge:**
    *   Uses four active strain gauges.
    *   **Application for Force:** All four gauges are placed such that they experience strain directly proportional to the force. Two gauges are typically placed in tension and two in compression, or all four are arranged to measure tensile strain in different locations. This configuration offers maximum sensitivity and excellent compensation for temperature and spurious strains.
    *   **Application for Torque:** As described earlier, two gauges at +45 degrees and two at -45 degrees on opposite sides of the shaft. This configuration is highly sensitive to torque and rejects bending and axial loads effectively.
    *   **Advantages:** Highest sensitivity, best linearity, excellent temperature compensation, and highest immunity to parasitic effects.

**Reference:**
*   **Dobelin, E.O. (1990). Measurement Systems (Applications and Design).** Chapter on bridge circuits will provide detailed analysis of their operation and sensitivity.
*   **Sawhney & Sawhney (2009). Mechanical Measurements and Instrumentation & Control.** Will cover the practical aspects of bridge configurations and wiring.
*   **Kumar (2012). Mechanical Measurement and Control.** Might offer examples of bridge circuits for specific force/torque applications.
*   **Singh (2009). Industrial Instrumentation and Control.** Will likely discuss industrial applications of bridge circuits.
*   **Rajput (2006). Mechanical Measurements and Instrumentation.** Provides fundamental understanding of bridge circuits in instrumentation.

---

### 5. Important Considerations for Strain Gauge Orientation

*   **Sensitivity:** The orientation should maximize the change in resistance for the specific type of stress being measured (tension/compression for force, shear for torque).
*   **Selectivity:** The orientation should minimize the measurement of unwanted stresses (e.g., bending, axial load when measuring torque).
*   **Uniformity of Strain:** Gauges should be placed in regions where the strain is uniform across the gauge length. Non-uniform strain can lead to inaccuracies.
*   **Bonding:** Proper bonding is essential. The adhesive must be strong enough to transfer the strain accurately from the component to the gauge.
*   **Temperature Compensation:** Due to the temperature dependence of resistance and material properties, compensation techniques (e.g., using dummy gauges or specific bridge configurations) are vital.
*   **Direction of Applied Load:** The strain gauge should be oriented along the direction of the principal strain caused by the applied load.

---

### Practice Questions and Answers

**Question 1:**
A strain gauge with a Gauge Factor (GF) of 2 is bonded to a component that experiences a strain of 500 microstrain ($\mu\epsilon$). What is the percentage change in resistance of the strain gauge?
(a) 0.1%
(b) 0.2%
(c) 1.0%
(d) 0.5%

**Answer:**
The formula for Gauge Factor is $GF = \frac{\Delta R / R_0}{\epsilon}$.
We are given GF = 2 and $\epsilon = 500 \mu\epsilon = 500 \times 10^{-6}$.
Rearranging the formula to find the fractional change in resistance: $\frac{\Delta R}{R_0} = GF \times \epsilon$.
$\frac{\Delta R}{R_0} = 2 \times (500 \times 10^{-6}) = 1000 \times 10^{-6} = 1 \times 10^{-3}$.
To express this as a percentage: $(1 \times 10^{-3}) \times 100\% = 0.1\%$.
**Correct Answer: (a)**

**Question 2:**
For accurate torque measurement on a shaft, in what direction should strain gauges ideally be oriented relative to the shaft axis?
(a) Parallel to the shaft axis
(b) Perpendicular to the shaft axis
(c) At 45 degrees to the shaft axis
(d) At 90 degrees to the shaft axis

**Answer:**
Torque induces shear stress and shear strain in a shaft, and these shear strains are maximum at an angle of 45 degrees to the axis of the shaft. Therefore, strain gauges should be oriented at 45 degrees to the shaft axis to measure torque.
**Correct Answer: (c)**

**Question 3:**
Explain the advantage of using a full bridge Wheatstone configuration with four strain gauges for torque measurement compared to a quarter bridge.

**Answer:**
A full bridge configuration for torque measurement typically uses four strain gauges: two oriented at +45 degrees and two at -45 degrees to the shaft axis, strategically placed on opposite sides.
*   **Increased Sensitivity:** All four gauges contribute to the output signal, leading to a higher output voltage for a given torque compared to a single gauge (quarter bridge).
*   **Cancellation of Bending and Axial Loads:** Gauges placed at +45 degrees and -45 degrees on opposite sides experience strains of opposite signs due to bending or axial loads. When wired in a full bridge, these strains cancel each other out in the output, making the measurement predominantly sensitive to torque. A quarter bridge only has one active gauge and is highly susceptible to errors from bending and axial forces.
*   **Temperature Compensation:** If all four gauges are subjected to the same temperature variations, their resistance changes will largely cancel out in the bridge output, providing better temperature stability.

**Question 4:**
Describe one scenario where a half-bridge configuration for strain gauges would be preferred over a quarter bridge.

**Answer:**
A half-bridge configuration (using two active strain gauges) is preferred over a quarter bridge when improved sensitivity and cancellation of unwanted strains are required. For example, in torque measurement, a half-bridge can be configured with one gauge at +45 degrees and another at -45 degrees on opposite sides of the shaft. This configuration will cancel out any strain caused by bending or axial forces, and the output will be primarily due to torque. This is a significant advantage over a quarter bridge, which would register significant errors from bending and axial loads.

---

### Summary and Key Takeaways

*   **Strain gauges are essential for force and torque measurement** by converting mechanical strain into electrical resistance changes.
*   **Orientation is critical:** For force, gauges are aligned with the direction of principal strain. For torque, a 45-degree orientation to the shaft axis is used to measure shear strain.
*   **Wheatstone bridge circuits** are used to measure the small resistance changes from strain gauges.
*   **Full bridge configurations offer the highest accuracy, sensitivity, and compensation** for temperature and unwanted stresses, making them ideal for critical force and torque measurements.
*   **Half-bridge configurations provide improved performance** over quarter bridges by offering higher sensitivity and some compensation for parasitic effects.
*   **Understanding the stress patterns** in the component under load is fundamental to selecting the correct strain gauge orientation and Wheatstone bridge configuration.

---
This study material covers the orientation of strain gauges for force and torque measurement, aligning with the specified learning outcomes and referencing the provided textbooks. The inclusion of key concepts, examples, and practice questions aims to enhance understanding for the student.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
