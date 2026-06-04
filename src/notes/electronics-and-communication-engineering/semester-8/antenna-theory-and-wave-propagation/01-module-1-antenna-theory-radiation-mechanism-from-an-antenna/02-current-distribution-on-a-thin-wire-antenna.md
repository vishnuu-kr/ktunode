---
title: "Current Distribution on a Thin Wire Antenna"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 1: Antenna theory : Radiation mechanism from an antenna"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff761"
status: "completed"
scrapedAt: "2026-05-23T18:12:18.543Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 1: Antenna Theory: Radiation Mechanism from an Antenna

### Topic: Current Distribution on a Thin Wire Antenna

---

### **1. Introduction: The Foundation of Radiation**

The radiation mechanism of an antenna is fundamentally linked to the distribution of electric currents on its surface. For a thin wire antenna, understanding how these currents flow is crucial for predicting its radiation pattern, impedance, and overall performance. This topic delves into the theoretical models used to describe current distribution, their impact on radiation, and how these concepts are applied in antenna design.

**Key Concept:** An antenna radiates electromagnetic waves because of the accelerating or oscillating electric charges within it, which are driven by the impressed voltages and currents. The distribution of these currents dictates the nature and direction of the radiated fields.

---

### **2. Idealizations and Assumptions for Thin Wire Antennas**

To simplify the analysis of current distribution on a wire, several idealizations are commonly made:

*   **Thin Wire:** The radius of the wire ($a$) is much smaller than its length ($l$), i.e., $a \ll l$. This allows us to treat the current as flowing along a line.
*   **Perfect Conductor:** The wire is assumed to be made of a material with infinite conductivity, meaning there are no resistive losses along the wire.
*   **Uniform Radius:** The radius of the wire is constant along its length.

**Reference:** Balanis, Chapter 4: "Linear Dipole Antennas," often starts by introducing the thin wire approximation.

---

### **3. Types of Current Distribution**

The nature of the current distribution on a wire antenna depends on its length relative to the wavelength of the exciting signal and how it is driven.

#### **3.1. Short Dipole (Length $\ll \lambda$)**

*   **Description:** For a dipole antenna significantly shorter than the wavelength of the signal, the current is assumed to be uniformly distributed along its length.
*   **Current Distribution:** $I(z) = I_0$ (constant)
    *   $I_0$ is the current at the feed point.
    *   $z$ is the position along the antenna, typically measured from the center.
*   **Radiation:** This uniform current results in a simple radiation pattern, with maximum radiation perpendicular to the antenna axis.
*   **Example:** A very short piece of wire connected to a transmitter.

#### **3.2. Infinitely Long Wire**

*   **Description:** While not practically realizable, analyzing an infinitely long wire provides a baseline for understanding wave propagation along conductors.
*   **Current Distribution:** $I(z) = I_0 e^{-\gamma z}$
    *   $\gamma$ is the propagation constant, which includes both attenuation and phase shift.
    *   For a lossless conductor, $\gamma = j\beta$, where $\beta$ is the phase constant. This represents a traveling wave.
*   **Radiation:** This scenario primarily describes wave propagation along the wire, with radiation being a secondary effect.

#### **3.3. Finite Length Dipole Antenna**

This is the most common and practically important case. The current distribution is non-uniform and depends on the electrical length of the antenna.

*   **Sinusoidal Current Distribution:** For a center-fed dipole antenna of length $l$, the current distribution can be approximated by a sinusoid.
    *   **General Form:** $I(z) = I_0 \sin(\beta(l/2 - |z|))$
        *   $I_0$ is the maximum current at the feed point (center).
        *   $\beta = 2\pi/\lambda$ is the phase constant.
        *   $z$ is the position along the antenna, measured from the center.
        *   $|z|$ is the absolute value of the position.
    *   **Half-Wave Dipole ($l = \lambda/2$):**
        *   The current distribution is $I(z) = I_0 \cos(\beta z)$, with maximum current at the center ($z=0$) and zero current at the ends ($z=\pm l/2$).
        *   This is a very common and efficient antenna configuration.
    *   **Full-Wave Dipole ($l = \lambda$):**
        *   The current distribution has two loops, with maximum current at the feed point (center) and nulls at the ends and the center of each half-wavelength section.
    *   **Resonant Antennas:** Antennas whose lengths are integer or half-integer multiples of a half-wavelength are called resonant antennas because their input impedance is purely resistive (ideally).
*   **Non-Resonant Antennas:** Antennas that are not resonant will have a reactive component in their input impedance, requiring matching networks.

**Example:** A dipole antenna approximately 150 meters long operating at 1 MHz ($\lambda = 300$ m) would be a half-wave dipole. Its current would be maximum at the center and zero at the ends.

**Reference:** Balanis, Chapter 4, extensively discusses the sinusoidal current distribution for finite dipoles.

---

### **4. Factors Affecting Current Distribution**

The idealized sinusoidal current distribution is a good approximation, but real-world antennas can have deviations due to several factors:

*   **Antenna Thickness (Finite Conductivity):** Even for thin wires, finite conductivity leads to some attenuation of the current as it travels along the wire. This makes the current distribution slightly less sinusoidal and introduces resistive losses.
*   **End Effects:** The ends of the antenna can cause slight variations in the current distribution compared to the pure sinusoidal model.
*   **Proximity of Other Conductors:** The presence of nearby objects, ground, or other antennas can significantly alter the current distribution on a wire antenna due to mutual coupling and induced currents.
*   **Excitation Method:** The location and method of feeding the antenna can also influence the current distribution, especially for non-standard feed points.
*   **Dielectric Loading:** If the antenna is coated with or surrounded by a dielectric material, it can affect the effective wavelength and hence the current distribution.

**Reference:** Collin, Chapter 2: "Dipole and Monopole Antennas," discusses corrections to the sinusoidal current distribution.

---

### **5. Relation to Radiation Mechanism (CO1)**

The current distribution is directly responsible for the radiation of electromagnetic waves.

*   **Current Elements:** An antenna can be thought of as a collection of infinitesimal current elements ($I(z)dz$).
*   **Radiated Fields:** Each current element radiates electromagnetic fields. The total radiated field is the vector sum of the fields from all these elements, taking into account their phase relationships (determined by their position and the current distribution).
*   **Far-Field Radiation:** In the far-field, the radiation pattern of a thin wire antenna is largely determined by the spatial distribution of the current. For a sinusoidal distribution, the pattern is directional.
*   **Near-Field:** In the near-field, both electric and magnetic fields are present, and their behavior is more complex, still governed by the current distribution.

**Example:** A half-wave dipole with a sinusoidal current distribution radiates maximum power in directions perpendicular to its axis. A short dipole with a uniform current radiates more uniformly.

**Alignment with CO1:** This section directly addresses how the current distribution (a theoretical concept) translates into observable radiation, fulfilling the objective of analyzing the radiation mechanism.

---

### **6. Mathematical Formulation (Beyond Basic Understanding)**

For a more rigorous analysis, Maxwell's equations are solved for the current distribution. This often involves:

*   **Integral Equation Method:** A common approach is to formulate an integral equation for the current distribution on the antenna surface.
    *   **Pocklington's Integral Equation:** Relates the electric field at the antenna surface to the current distribution.
    *   **Hallén's Integral Equation:** Another form of the integral equation.
*   **Method of Moments (MoM):** A numerical technique used to solve these integral equations by discretizing the antenna into segments and approximating the current as a sum of basis functions.

**Reference:** Balanis, Chapter 4, introduces the integral equation formulation and often uses the sinusoidal approximation as a simplified solution. Pozar, Chapter 6: "Antenna Theory and Design," also delves into these methods for more advanced analysis.

---

### **7. Practice Questions and Exercises**

**Question 1:**
What is the primary assumption made when analyzing a thin wire antenna with a much smaller radius compared to its length?
(a) Uniform current distribution
(b) Infinite conductivity
(c) The wire is treated as a line source
(d) The wire is infinitely long

**Answer:** (c) The wire is treated as a line source. While uniform current is an assumption for *short* dipoles, and infinite conductivity is an idealization, the defining characteristic for analysis is treating it as a line.

**Question 2:**
Describe the current distribution on a half-wave dipole antenna and its significance for radiation.

**Answer:** On a half-wave dipole ($l = \lambda/2$), the current distribution is approximated by $I(z) = I_0 \cos(\beta z)$, where $I_0$ is the maximum current at the center ($z=0$) and the current is zero at the ends ($z = \pm \lambda/4$). This sinusoidal distribution leads to a directional radiation pattern with maximum radiation perpendicular to the antenna axis. It's a resonant antenna.

**Question 3:**
How does the thickness of a wire antenna affect its current distribution compared to the ideal sinusoidal model?

**Answer:** The thickness and finite conductivity of a wire antenna lead to attenuation of the current as it travels along the wire. This causes the current to be slightly less than the ideal sinusoidal distribution, with a reduced amplitude at the ends and potential resistive losses.

**Question 4:**
Explain why understanding current distribution is crucial for analyzing the radiation mechanism of an antenna. (Relates to CO1)

**Answer:** The current distribution on an antenna acts as the source of radiated electromagnetic waves. Accelerating charges, driven by this current, generate time-varying electric and magnetic fields that propagate as waves. The spatial distribution and amplitude of the current directly determine the directionality, efficiency, and overall radiation pattern of the antenna.

---

### **8. Important Points to Remember**

*   **Thin Wire Assumption:** Radius $a \ll$ Length $l$.
*   **Current is the Source:** Accelerating charges (currents) cause radiation.
*   **Sinusoidal Distribution:** A good approximation for finite length dipoles, especially resonant ones.
*   **Half-Wave Dipole:** $I(z) = I_0 \cos(\beta z)$, $l = \lambda/2$, resonant, directional.
*   **Short Dipole:** $I(z) \approx I_0$ (uniform), less directional.
*   **Real-world factors:** Thickness, conductivity, nearby objects, and feed method affect the ideal current distribution.
*   **CO1 Alignment:** The current distribution is the direct link between the antenna structure and its radiating behavior.

---

### **9. Further Exploration (Connecting to Other COs/Books)**

*   **CO2 & CO3 (Design & Advanced Antennas):** The calculated current distribution is fundamental for designing antennas with specific radiation patterns or impedance characteristics. For instance, adjusting the length of a dipole changes its resonant frequency and current distribution, thus altering its behavior. Microstrip antennas, while not simple wires, also have current distributions that determine their radiation.
*   **Pozar's Microwave Engineering:** Provides rigorous electromagnetic field theory background and advanced solution techniques for current distributions on various antenna structures.
*   **Milligan's Modern Antenna Design:** Offers practical insights into how current distributions on real antennas are measured and manipulated for desired performance.
*   **Kraus's Antennas for All Applications:** A classic text that provides extensive practical examples and historical context for understanding antenna current distributions and their implications.

---

This concludes the study notes for "Current Distribution on a Thin Wire Antenna." Mastering this topic is foundational for understanding all subsequent antenna theory and design principles.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
