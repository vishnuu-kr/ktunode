---
title: "Eddy Current Testing: physics aspects of ECT."
subject: "NON – DESTRUCTIVE TESTING"
module: "Module 2: Magnetic Particle Testing: Methods of magnetization, magnetization techniques such as head shot technique, cold shot technique, central conductor testing, and magnetization using yokes."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044642d8"
status: "completed"
scrapedAt: "2026-05-20T18:15:42.377Z"
---
# Non-Destructive Testing: Module 2 - Magnetic Particle Testing & Eddy Current Testing

## Topic: Eddy Current Testing: Physics Aspects of ECT

This module explores two crucial Non-Destructive Testing (NDT) methods: Magnetic Particle Testing (MPT) and Eddy Current Testing (ECT). While MPT focuses on surface and near-surface crack detection in ferromagnetic materials, this section delves into the fundamental physics behind Eddy Current Testing, a versatile technique used for detecting surface and near-surface defects in conductive materials.

---

### Learning Outcomes Covered:

*   **CO1:** Have a basic knowledge of NDT Techniques which enables to carry out various inspections in accordance with the established procedures. (Knowledge Level: K2)
*   **CO2:** Familiarize with basic principles of electromagnetic NDT methods (Knowledge Level: K2)
*   **CO4:** Have a better knowledge in the field of advanced techniques in NDT (Knowledge Level: K2)

---

### Key Concepts and Definitions:

*   **Eddy Currents:** Circulating electrical currents induced within a conductive material by a time-varying magnetic field. These currents are named after the whirlpool-like motion of water.
*   **Electromagnetic Induction:** The production of an electromotive force (voltage) across an electrical conductor in a changing magnetic field. This is the fundamental principle behind ECT, as described by Faraday's Law of Induction.
*   **Faraday's Law of Induction:** States that the magnitude of the electromotive force (EMF) induced in any closed circuit is equal to the rate of change of the magnetic flux through the circuit. Mathematically, $EMF = -N \frac{d\Phi_B}{dt}$, where $N$ is the number of turns in the coil and $\frac{d\Phi_B}{dt}$ is the rate of change of magnetic flux.
*   **Lenz's Law:** States that the direction of the induced current is such that it opposes the change in magnetic flux that produced it. This is represented by the negative sign in Faraday's Law.
*   **Magnetic Flux:** The measure of the total magnetic field passing through a given area. It is represented by the symbol $\Phi_B$.
*   **Conductivity ($\sigma$):** A measure of a material's ability to conduct electric current. Higher conductivity materials are more susceptible to eddy current induction.
*   **Permeability ($\mu$):** A measure of a material's ability to support the formation of a magnetic field within itself. It influences how readily a material can be magnetized and how the magnetic field interacts with it.
*   **Frequency (f):** The rate at which the alternating current (AC) in the exciting coil changes direction. Frequency significantly influences the depth of penetration and the sensitivity of ECT.
*   **Depth of Penetration (Skin Depth, $\delta$):** The depth at which the amplitude of eddy currents decreases to approximately 37% (1/e) of their value at the surface. It is inversely proportional to the square root of conductivity, permeability, and frequency. The formula is:
    $$ \delta = \sqrt{\frac{2}{\omega \mu \sigma}} = \sqrt{\frac{1}{\pi f \mu \sigma}} $$
    where $\omega = 2\pi f$.
*   **Defect:** Any discontinuity in the material, such as cracks, voids, inclusions, or variations in material properties, that deviates from the intended configuration.
*   **Probe/Coil:** The essential component of an ECT system that generates the time-varying magnetic field and detects the changes in eddy current flow.

---

### Physics Aspects of Eddy Current Testing:

Eddy Current Testing relies on the principles of **electromagnetic induction** to detect flaws in conductive materials. Here's a breakdown of the key physics involved:

#### 1. Generation of Eddy Currents:

*   **Excitation Coil:** An alternating current (AC) flows through a coil (the excitation coil or probe) placed near the surface of the conductive test piece.
*   **Time-Varying Magnetic Field:** The AC in the coil produces a **time-varying magnetic field** that penetrates into the conductive material.
*   **Faraday's Law in Action:** As this changing magnetic field passes through the material, it induces **circulating currents** within the material itself. These are the **eddy currents**. The magnitude of the induced voltage, and hence the eddy currents, is directly proportional to the rate of change of magnetic flux (Faraday's Law).

#### 2. Interaction of Eddy Currents with Material Properties:

*   **Conductivity:** Eddy currents are induced more readily in materials with higher electrical conductivity. Therefore, variations in conductivity (due to material composition or heat treatment) will affect the strength of the eddy currents.
*   **Permeability:** Materials with higher magnetic permeability allow the magnetic field to penetrate more easily. However, eddy currents tend to oppose magnetization. For highly permeable materials, the interaction between eddy currents and the magnetic field is complex.

#### 3. Effect of Defects on Eddy Currents:

*   **Disruption of Flow:** When eddy currents encounter a defect (e.g., a crack, void, or inclusion), their path is disrupted. This disruption causes a change in the resistance to flow and a reduction in the overall eddy current density.
*   **Change in Magnetic Field:** The altered flow of eddy currents creates a change in the secondary magnetic field that they generate.
*   **Detection:** The ECT probe, which typically contains both an excitation coil and a sensing coil (or the same coil acts as both), detects these changes in the magnetic field. The sensing coil picks up the changes in the magnetic flux produced by the eddy currents.

#### 4. Factors Influencing Eddy Current Behavior:

*   **Frequency:** This is a critical parameter.
    *   **Low Frequency:** Eddy currents penetrate deeper into the material. This is useful for detecting subsurface defects.
    *   **High Frequency:** Eddy currents remain closer to the surface. This is ideal for detecting surface flaws. The phenomenon of eddy currents being confined to the surface at high frequencies is known as the **"skin effect."**
    *   **Depth of Penetration ($\delta$):** The formula $\delta = \sqrt{\frac{1}{\pi f \mu \sigma}}$ quantifies this. As frequency ($f$) increases, the depth of penetration ($\delta$) decreases.
*   **Coil Geometry and Size:** The shape and size of the probe influence the magnetic field distribution and the area inspected. Different coil configurations (e.g., absolute coils, differential coils) are used for specific applications.
*   **Distance Between Coil and Material (Lift-off):** The distance between the ECT probe and the surface of the test piece is crucial. Any variation in lift-off will change the magnetic coupling and can be misinterpreted as a defect. Modern ECT systems often have lift-off compensation mechanisms.

#### 5. Signal Formation and Interpretation:

*   **Impedance Change:** The presence of defects causes a change in the **impedance** of the ECT coil. Impedance is the total opposition to alternating current flow, comprising resistance and reactance.
*   **Phase and Amplitude:** The changes in eddy current flow are typically displayed as variations in the **amplitude** and **phase** of the signal received by the sensing coil.
    *   **Amplitude:** Generally relates to the severity or size of the defect.
    *   **Phase:** Can provide information about the type or depth of the defect.
*   **Display:** The detected signals are processed and displayed on a screen, often as a trace on an impedance plane or as a time-based waveform.

#### 6. Material Properties' Influence on Signals:

*   **Conductivity Variations:** Cause changes in eddy current magnitude, affecting the signal amplitude.
*   **Permeability Variations:** Affect the magnetic flux linkage and thus the induced eddy currents, influencing both amplitude and phase.
*   **Surface Roughness:** Can also introduce noise or affect the signal, similar to lift-off.

---

### Example Applications:

*   **Surface Crack Detection:** Detecting fine cracks in aircraft components (e.g., turbine blades, fuselage skins) made of aluminum or titanium alloys.
*   **Material Sorting:** Distinguishing between different metal alloys based on their conductivity and permeability.
*   **Coating Thickness Measurement:** Measuring the thickness of non-conductive coatings on conductive substrates or conductive coatings on conductive substrates.
*   **Heat Damage Detection:** Identifying areas of heat-affected zones (HAZ) in welded structures, which might have altered material properties.
*   **Corrosion Detection:** Detecting subsurface corrosion under paint layers in metallic structures.

---

### Important Points to Remember:

*   **Conductive Materials Only:** ECT can only be applied to materials that can conduct electricity.
*   **Surface and Near-Surface Defects:** ECT is primarily sensitive to surface and near-surface flaws. The depth of detection is limited by the depth of penetration.
*   **Frequency is Key:** Manipulating the test frequency is essential for optimizing sensitivity to different types of defects and depths.
*   **Lift-off is Critical:** Maintaining a consistent distance between the probe and the test surface is vital for accurate readings.
*   **Material Properties Matter:** Changes in conductivity, permeability, and even surface finish can significantly influence ECT signals.

---

### Practice Questions and Exercises:

**Question 1:**
According to Faraday's Law of Induction, what factor directly influences the magnitude of the induced electromotive force (EMF) in a conductor when subjected to a changing magnetic field?

**Answer:**
The rate of change of magnetic flux through the circuit.

**Question 2:**
Explain the relationship between the frequency of the eddy currents and the depth of penetration into a conductive material. Use the concept of skin depth.

**Answer:**
The depth of penetration (skin depth, $\delta$) is inversely proportional to the square root of the frequency ($f$). As frequency increases, the depth of penetration decreases, meaning eddy currents are confined more to the surface. Conversely, lower frequencies allow eddy currents to penetrate deeper into the material. The formula is $\delta = \sqrt{\frac{1}{\pi f \mu \sigma}}$.

**Question 3:**
A technician is performing ECT on an aluminum aircraft component. They notice a significant change in the reading when they slightly change the distance between the probe and the surface. What is this phenomenon called, and why is it important in ECT?

**Answer:**
This phenomenon is called "lift-off." It is important because variations in lift-off can significantly alter the magnetic coupling between the probe and the material, leading to false indications or obscuring genuine defects. Consistent lift-off is crucial for accurate ECT readings, and often, lift-off compensation techniques are employed.

**Question 4:**
Which of the following material properties would NOT be directly detectable by standard Eddy Current Testing?
a) Variations in electrical conductivity
b) Surface cracks
c) Subsurface voids
d) Non-conductive internal inclusions

**Answer:**
d) Non-conductive internal inclusions. ECT relies on the interaction of eddy currents with conductive materials. Non-conductive inclusions will not affect the flow of eddy currents and therefore cannot be detected by standard ECT.

**Question 5:**
A defect like a crack disrupts the flow of eddy currents. How does this disruption ultimately lead to a detectable signal in ECT?

**Answer:**
The disrupted flow of eddy currents alters the secondary magnetic field they generate. The sensing coil in the ECT probe detects these changes in the magnetic field. These changes manifest as a change in the impedance (voltage, phase, and amplitude) of the probe, which is then processed and displayed as a signal.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### References and Further Reading:

*   **Practical Non- destructive testing by Baldev Raj (Alpha Science International, 2008):** Provides a foundational understanding of various NDT methods, including the principles of electromagnetic testing.
*   **Non - destructive testing by Hull V and V John (McMillan, 2012):** Offers comprehensive coverage of NDT principles and applications, likely detailing the physics of eddy currents.
*   **New Technologies in electromagnetic non-destructive Testing by Songling Huang & Shen Wang (Springer, 2016):** This reference will offer insights into advanced aspects and modern developments in electromagnetic NDT, including eddy current testing.

---