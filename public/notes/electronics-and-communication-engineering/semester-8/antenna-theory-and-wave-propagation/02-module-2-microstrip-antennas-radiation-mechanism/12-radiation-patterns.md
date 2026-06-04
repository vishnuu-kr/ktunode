---
title: "Radiation Patterns"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 2: Microstrip antennas : Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff776"
status: "completed"
scrapedAt: "2026-05-23T18:12:34.819Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 2: Microstrip Antennas: Radiation Mechanism

### Topic: Radiation Patterns

**Learning Outcomes:**

*   Understand the fundamental concepts of radiation patterns for antennas, particularly in the context of microstrip antennas.
*   Define and differentiate various types of radiation patterns (e.g., isotropic, directional, uniform, non-uniform).
*   Explain the geometrical representation of radiation patterns, including Cartesian and polar plots.
*   Identify and explain key pattern parameters such as beamwidth, directivity, gain, sidelobe levels, and nulls.
*   Analyze the relationship between antenna geometry and its radiation pattern characteristics.
*   Understand how to measure and characterize the radiation pattern of a microstrip antenna.

**Course Outcomes Alignment:**

*   **CO1 (K3):** This topic directly addresses the analysis of radiation mechanisms, with radiation patterns being a primary descriptor of how an antenna radiates. Students will need to apply their knowledge to understand and interpret these patterns.
*   **CO2 (K4):** Designing and measuring the parameters of a microstrip antenna necessitates a deep understanding of its radiation pattern. This topic provides the foundational knowledge for CO2.
*   **CO3 (K4):** While focusing on microstrip antennas, the fundamental concepts of radiation patterns are applicable to advanced antennas as well. Understanding pattern characteristics is crucial for analyzing and designing more complex structures.

---

### 1. Introduction to Radiation Patterns

A **radiation pattern** describes how an antenna radiates or receives electromagnetic energy in different directions. It is essentially a graphical representation of the spatial distribution of the radiated power as a function of direction.

**Key Concepts:**

*   **Isotropic Radiator:** An idealized antenna that radiates or receives power equally in all directions. It serves as a reference point. Real antennas are always directional.
*   **Directional Radiator:** An antenna that radiates or receives power preferentially in one or more directions.
*   **Far-Field Region:** The region around an antenna where the electromagnetic field can be considered as propagating outwards as plane waves. Radiation pattern measurements are typically performed in the far-field.
*   **Near-Field Region:** The region close to the antenna where the reactive fields dominate and the wave is not yet well-defined as a propagating wave.

**Importance of Radiation Patterns:**

*   **Performance Evaluation:** Characterizes antenna efficiency and effectiveness in transmitting/receiving signals.
*   **System Design:** Crucial for understanding coverage areas, interference potential, and antenna placement in communication systems.
*   **Antenna Classification:** Helps categorize antennas based on their directional properties.

---

### 2. Representing Radiation Patterns

Radiation patterns are typically represented in three dimensions, but for practical purposes, they are often visualized using two-dimensional cuts or projections.

**2.1. Coordinate Systems:**

*   **Spherical Coordinates (r, θ, φ):** Used to define a point in space relative to the antenna.
    *   `r`: Distance from the antenna.
    *   `θ`: Zenith angle (polar angle), typically measured from the z-axis (antenna axis).
    *   `φ`: Azimuth angle, measured in the xy-plane from the x-axis.

**2.2. Pattern Representation:**

*   **Electric Field (E-field) Pattern:** Shows the variation of the electric field strength with direction.
*   **Power Pattern:** Shows the variation of the radiated power density with direction. It is proportional to the square of the E-field pattern.
*   **Absolute vs. Relative Patterns:**
    *   **Absolute:** Expressed in units of power density (e.g., W/m²).
    *   **Relative:** Normalized to the maximum value, typically expressed in dB or as a linear scale (0 to 1).

**2.3. Graphical Representations:**

*   **Cartesian Plot:**
    *   **E-plane Pattern:** A plot of field strength versus the angle in the plane containing the electric field vector and the direction of maximum radiation.
    *   **H-plane Pattern:** A plot of field strength versus the angle in the plane containing the magnetic field vector and the direction of maximum radiation.
    *   For microstrip antennas, the principal planes are often the longitudinal cut (along the length of the radiating element) and the transverse cut (perpendicular to the length).

*   **Polar Plot:**
    *   Uses polar coordinates to represent the pattern. The distance from the origin represents the field strength or power, and the angle represents the direction.
    *   Provides an intuitive visual of the directional properties.

**Reference (Balanis, Ch. 1):** Balanis provides a comprehensive explanation of pattern representations, including spherical coordinates and various plotting techniques. He emphasizes the importance of understanding the E-plane and H-plane cuts for characterizing an antenna's directivity.

---

### 3. Key Radiation Pattern Parameters

These parameters quantify the performance and characteristics of an antenna's radiation pattern.

**3.1. Beamwidth:**

The angular width of the main lobe.

*   **Half-Power Beamwidth (HPBW) or Beamwidth between Half-Power Points (BHPP):** The angular width of the main lobe between the two directions where the radiated power is half of the maximum radiated power. This corresponds to a field strength that is $1/\sqrt{2}$ (or -3 dB) of the maximum.
*   **First Sidelobe Width (FSLW):** The angular width between the first nulls on either side of the main lobe.

**3.2. Directivity (D):**

A measure of how concentrated the radiation is in a particular direction. It is the ratio of the radiation intensity in a given direction to the average radiation intensity over all directions.

*   **Formula:** $D(\theta, \phi) = \frac{U(\theta, \phi)}{U_{avg}}$
    *   $U(\theta, \phi)$: Radiation intensity in the direction $(\theta, \phi)$.
    *   $U_{avg}$: Average radiation intensity over all directions.
    *   $U_{avg} = \frac{1}{4\pi} \int_{0}^{2\pi} \int_{0}^{\pi} U(\theta, \phi) \sin \theta \, d\theta \, d\phi$

*   **Maximum Directivity ($D_0$):** The directivity in the direction of maximum radiation.
*   **Relationship with Beam Solid Angle ($\Omega_A$):** $D_0 = \frac{4\pi}{\Omega_A}$, where $\Omega_A$ is the effective area of the beam (solid angle over which the power is essentially constant).

**3.3. Gain (G):**

Similar to directivity, but also accounts for the antenna's efficiency. It is the ratio of the radiation intensity in a given direction to the total power accepted by the antenna.

*   **Formula:** $G(\theta, \phi) = \eta_r D(\theta, \phi)$
    *   $\eta_r$: Radiation efficiency (ratio of radiated power to input power).
*   **Maximum Gain ($G_0$):** $G_0 = \eta_r D_0$.
*   **Absolute Gain:** Expressed in dB relative to an isotropic radiator (dBi).

**3.4. Sidelobes:**

Lesser lobes of radiation that occur in directions other than the main lobe.

*   **Sidelobe Level (SLL):** The ratio of the radiation intensity of a sidelobe to the radiation intensity of the main lobe, usually expressed in dB.
*   **First Sidelobe Level (FSLL):** The level of the strongest sidelobe adjacent to the main lobe.
*   **Sidelobe Reduction:** Desirable to minimize interference with other systems.

**3.5. Nulls:**

Directions where the radiation intensity is zero or very close to zero.

*   **Minimizing Nulls:** Can lead to coverage gaps.

**Reference (Balanis, Ch. 2 & 3):** Balanis provides detailed mathematical derivations for directivity and gain, explaining their relationship to the radiation pattern and radiation efficiency. He also discusses beamwidths and sidelobe characteristics.

---

### 4. Radiation Mechanism of Microstrip Antennas and their Patterns

Microstrip antennas, due to their planar structure and fringing fields, exhibit specific radiation characteristics that influence their patterns.

**4.1. Radiation from Microstrip Patch Antennas:**

*   **Primary Source of Radiation:** The **fringing fields** that extend beyond the edges of the patch.
*   **Equivalent Slot Radiators:** The edges of the patch can be modeled as pairs of **infinitely long slots** carrying currents.
    *   **Longitudinal Edges:** These slots are oriented parallel to the direction of current flow on the patch and radiate primarily in the **broadside direction** (perpendicular to the patch surface). They contribute to the main lobe.
    *   **Transverse Edges:** These slots radiate more strongly in the **end-fire direction** (parallel to the patch surface). Their contribution to the main broadside lobe is usually smaller and can lead to cross-polarization.

**4.2. Pattern Characteristics of a Basic Rectangular Microstrip Patch Antenna:**

*   **Main Lobe:** Typically directed towards the **broadside direction** (zenith). This is the dominant lobe.
*   **Polarization:** Primarily **linear polarization**, dictated by the direction of the dominant current flow on the patch. For a rectangular patch fed along its length, the polarization is along the length.
*   **Beamwidth:** Generally **wide beamwidths** (around 70-100 degrees in the principal planes) compared to traditional antennas like dipoles or horns. This makes them suitable for applications requiring wide coverage.
*   **Sidelobe Levels:** Usually **moderate to high** sidelobe levels. This is a drawback for applications sensitive to interference. The fringing fields at the edges, especially the transverse edges, contribute to these sidelobes.
*   **Nulls:** Nulls typically occur in the **end-fire directions** (parallel to the patch surface).
*   **Cross-Polarization:** Significant cross-polarization can be observed, particularly in the principal planes and at angles away from the main beam. This is mainly due to the radiation from the transverse edges.

**4.3. Factors Affecting the Radiation Pattern:**

*   **Patch Dimensions:**
    *   **Length:** Primarily influences the resonant frequency and the beamwidth in the longitudinal plane.
    *   **Width:** Influences the beamwidth in the transverse plane and the impedance bandwidth. Wider patches generally have narrower beamwidths.
*   **Substrate Thickness (h):**
    *   Thicker substrates lead to **wider beamwidths**, **higher directivity**, **lower sidelobe levels**, and **improved radiation efficiency**. However, they also increase the spurious radiation and the dielectric loss.
*   **Dielectric Constant of Substrate ($\epsilon_r$):**
    *   Higher $\epsilon_r$ leads to **narrower beamwidths** and **lower directivity**.
*   **Feed Location and Type:**
    *   **Probe Feed:** Can introduce some asymmetry and cross-polarization. The location of the probe affects the impedance matching and the excitation of higher-order modes.
    *   **Edge Feed (Microstrip Line):** Tends to excite the longitudinal edge currents more effectively, leading to better co-polarization.
    *   **Gap-Fed (Coupled Lines):** Can offer different polarization characteristics.
*   **Ground Plane Size:** A finite ground plane can affect the radiation pattern, especially at lower frequencies or for wider beamwidth antennas. The pattern is generally shaped by the ground plane.
*   **Antenna Configuration (e.g., Arrays):** Multiple patches arranged in an array can be used to shape the radiation pattern, achieve higher gain, and control beam steering.

**Reference (Garg, Ch. 3 & 8):** Garg's handbook delves deeply into the radiation mechanism of microstrip antennas. Chapter 3 discusses the slot-line model and the contributions of different edges to the radiation field. Chapter 8 focuses on the measured radiation patterns and the influence of various parameters like substrate thickness, dielectric constant, and feed position.

**Reference (Pozar, Ch. 9):** Pozar's Microwave Engineering provides a good overview of microstrip antenna theory, including the concept of fringing fields and their role in radiation. He also touches upon pattern characteristics and bandwidth.

---

### 5. Measuring and Characterizing Radiation Patterns

Measuring radiation patterns is crucial for validating antenna designs.

**5.1. Measurement Setup:**

*   **Anechoic Chamber:** A shielded room with absorbing materials to prevent reflections, ensuring that only direct radiation from the antenna under test (AUT) is measured.
*   **Transmitting Antenna:** A known, well-characterized antenna (e.g., horn antenna) to illuminate the AUT or to serve as the receiving antenna if the AUT is transmitting.
*   **Positioning System:** A system to rotate the AUT or the receiving antenna to cover all directions of interest (e.g., gantry or spherical scanner).
*   **Signal Generator/Network Analyzer:** To provide the RF signal.
*   **Power Meter/Spectrum Analyzer/Network Analyzer:** To measure the received power level.

**5.2. Measurement Procedure:**

1.  **Setup:** Place the AUT in the anechoic chamber, either transmitting or receiving. Position the transmitting/receiving antenna at a sufficient distance in the far-field.
2.  **Calibration:** Calibrate the system to account for cable losses and the gain of the reference antenna.
3.  **Data Acquisition:**
    *   **For Transmitting Antenna:** Rotate the receiving antenna (or the AUT) through the desired angles ($\theta, \phi$) and record the received power.
    *   **For Receiving Antenna:** Rotate the AUT and record the received power from a fixed transmitting antenna.
4.  **Normalization:** Normalize the measured data to the maximum received power to obtain the relative pattern.
5.  **Plotting:** Plot the pattern in Cartesian or polar formats.

**5.3. Analyzing Measured Patterns:**

*   **Identify Main Lobe:** Locate the direction of maximum radiation.
*   **Determine Beamwidth:** Find the angles where the power drops to -3 dB of the maximum.
*   **Assess Sidelobe Levels:** Measure the power levels of the sidelobes relative to the main lobe.
*   **Check for Nulls:** Identify directions with minimal radiation.
*   **Evaluate Polarization:** Measure the pattern for the desired polarization and the orthogonal polarization to assess cross-polarization levels.

**Reference (Kraus, Ch. 16):** Kraus's "Antennas for All Applications" provides a classic and detailed explanation of antenna measurement techniques, including practical considerations for setting up and performing pattern measurements.

**Reference (Milligan, Ch. 5):** Milligan's "Modern Antenna Design" also covers antenna measurement practices and the interpretation of measured data, including the effects of the measurement environment.

---

### 6. Examples and Applications

**Example 1: Rectangular Microstrip Patch Pattern**

Consider a rectangular patch antenna. The dominant currents flow along the length of the patch.

*   **Longitudinal Plane (E-plane):** This plane typically contains the length of the patch. The pattern in this plane will show a main lobe directed broadside, with significant radiation out to angles of $\pm 45^\circ$ or more. Nulls are expected towards the ends.
*   **Transverse Plane (H-plane):** This plane is perpendicular to the length. The pattern here will also show a broadside main lobe, but often with higher sidelobes and potentially more cross-polarization compared to the longitudinal plane due to the influence of the transverse edges.
*   **3D Pattern:** Resembles a broad cone or a hemisphere, with the maximum intensity pointing directly away from the patch surface.

**Example 2: Effect of Substrate Thickness**

*   **Thin Substrate:** The fringing fields are more confined, leading to narrower beamwidths, lower directivity, and potentially higher sidelobes. The radiation is less efficient.
*   **Thick Substrate:** Fringing fields spread out more. This results in wider beamwidths, lower directivity (more distributed radiation), but also generally lower sidelobe levels and improved radiation efficiency.

**Example 3: Array of Microstrip Patches**

*   By arranging multiple patches in an array and controlling the phase and amplitude of the signals fed to each patch, the overall radiation pattern can be shaped.
*   **Broadside Array:** Can increase the gain and narrow the beamwidth in the broadside direction.
*   **End-fire Array:** Can be used to steer the beam in the end-fire direction.
*   **Phased Arrays:** Can electronically steer the beam without physical movement, by changing the phase shifts between the elements. This significantly alters the overall pattern as a function of the steering angle.

---

### 7. Important Points to Remember

*   **Radiation pattern is a fundamental descriptor of antenna performance.**
*   **Microstrip antennas radiate primarily due to fringing fields at their edges.**
*   **Longitudinal edges contribute to the broadside radiation, while transverse edges contribute to end-fire radiation and sidelobes.**
*   **Key parameters include beamwidth, directivity, gain, sidelobe levels, and nulls.**
*   **Substrate thickness, dielectric constant, and patch dimensions significantly influence the radiation pattern.**
*   **Thicker substrates generally lead to wider beams, lower sidelobes, and better efficiency.**
*   **Radiation patterns are typically measured in anechoic chambers in the far-field.**
*   **Microstrip antennas generally have wide beamwidths and moderate to high sidelobe levels.**
*   **Cross-polarization is an important consideration for microstrip antennas, especially those fed at the edge or with specific geometries.**

---

### Practice Questions and Answers

**Question 1:** Define the Half-Power Beamwidth (HPBW) and explain its significance in characterizing an antenna's radiation pattern.

**Answer:** HPBW is the angular width of the main lobe between the two points where the radiated power is half of the maximum radiated power (-3 dB). It indicates how directive the antenna is in its main beam. A smaller HPBW signifies a more directive antenna with a narrower beam.

**Question 2:** What are the primary sources of radiation from a rectangular microstrip patch antenna, and how do they differ in their contribution to the radiation pattern?

**Answer:** The primary sources of radiation are the fringing fields at the edges of the patch.
*   **Longitudinal edges:** Radiate primarily in the broadside direction, contributing to the main lobe.
*   **Transverse edges:** Radiate more strongly in the end-fire direction and contribute to sidelobes and cross-polarization.

**Question 3:** How does increasing the substrate thickness affect the radiation pattern of a microstrip patch antenna?

**Answer:** Increasing the substrate thickness generally leads to:
*   Wider beamwidths.
*   Lower directivity.
*   Lower sidelobe levels.
*   Improved radiation efficiency.
*   Increased spurious radiation.

**Question 4:** Describe the typical radiation pattern characteristics of a basic microstrip patch antenna, including its main lobe, sidelobes, and nulls.

**Answer:** A basic microstrip patch antenna typically exhibits:
*   **Main Lobe:** Directed towards the broadside direction (perpendicular to the patch).
*   **Beamwidth:** Wide beamwidth (e.g., 70-100 degrees).
*   **Sidelobes:** Moderate to high sidelobe levels, especially in the plane perpendicular to the dominant current flow.
*   **Nulls:** Occur in the end-fire directions (parallel to the patch surface).

**Question 5:** Explain the concept of directivity and how it is related to the radiation pattern.

**Answer:** Directivity is a measure of how concentrated an antenna's radiation is in a particular direction, relative to an isotropic radiator. It is calculated from the radiation intensity pattern. A highly directional antenna has a main lobe with high radiation intensity in a specific direction and low intensity in other directions, resulting in a high directivity value. It is inversely proportional to the beam solid angle.

---

This comprehensive set of notes covers the fundamental aspects of radiation patterns as applied to microstrip antennas, drawing upon the principles and concepts discussed in the recommended textbooks. The structure, definitions, examples, and practice questions aim to facilitate a thorough understanding for students aiming to achieve the specified learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
