---
title: "Biconical antenna"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 1: Antenna theory: Radiation mechanism from an antenna"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7ca"
status: "completed"
scrapedAt: "2026-05-23T18:11:37.066Z"
---
# ANTENNA THEORY AND DESIGN - Module 1: Antenna Theory: Radiation Mechanism from an Antenna

## Topic: Biconical Antenna

---

### 1. Introduction and Overview

The biconical antenna is a fundamental and widely studied antenna type, offering a smooth transition from a transmission line to free space. It's essentially two conical conductors placed tip-to-tip, fed at the apex. This structure provides a broader bandwidth and a more omnidirectional radiation pattern compared to a simple dipole antenna. Understanding the biconical antenna is crucial for grasping the principles of radiation from conducting structures.

**Key Concepts:**

*   **Monopole vs. Dipole:** While a single cone fed against a ground plane acts as a monopole, the biconical antenna is a balanced structure, analogous to a dipole.
*   **Transition Structure:** It facilitates a smooth impedance transformation from a coaxial line (or two-wire transmission line) to free space.
*   **Radiation Mechanism:** Similar to a dipole, the time-varying current distribution along the conductor surfaces generates electromagnetic waves.

**References:**

*   **Balanis:** Chapter 6 (Linear Antennas), specifically discusses biconical antennas as an extension of the dipole.
*   **Kraus:** Chapter 5 (Radiation and the Radiation Mechanism), will provide fundamental understanding of current distribution and radiation.

---

### 2. Physical Structure and Configuration

A biconical antenna consists of two conical conductors, typically made of metallic material, joined at their apexes. The feed point is located at the apex where the two cones meet.

**Key Components:**

*   **Cones:** Two conical conductors with a semi-vertical angle $\alpha$.
*   **Apex:** The point where the two cones meet, serving as the feed point.
*   **Feed Line:** Usually a coaxial cable or a two-wire transmission line connected to the apex.

**Parameters:**

*   **Semi-vertical Angle ($\alpha$):** The angle between the cone axis and its slant edge. This angle significantly influences the antenna's impedance and radiation characteristics.
*   **Cone Length (L):** The axial length of each cone.
*   **Cone Radius at Base ($a$):** The radius of the circular base of each cone.
*   **Separation Distance:** The distance between the apex and the base of each cone.

**Configuration Examples:**

*   **Symmetric Biconical Antenna:** The two cones are identical and symmetrically placed.
*   **Asymmetric Biconical Antenna:** The cones may differ in size or angle.

**References:**

*   **Balanis:** Section 6.3 (Biconical Antenna) provides detailed descriptions and diagrams.
*   **Kraus:** Chapter 11 (Conical Antennas), section 11-1, will cover the geometry.

---

### 3. Radiation Mechanism and Current Distribution

The radiation from a biconical antenna is due to the oscillating currents flowing along the surfaces of the conical conductors. The current distribution is not uniform and is influenced by the antenna's geometry, particularly the semi-vertical angle.

**Key Concepts:**

*   **Electromotive Force (EMF) Distribution:** The voltage applied at the apex drives currents along the cones.
*   **Current Wave:** The current can be visualized as a wave traveling along the cone surface, reflecting at the base.
*   **Approximations:** For analysis, various approximations are made for the current distribution.

**Balanis's Approach (Approximate Current):**

Balanis approximates the current on the cone surface as a sinusoidal distribution, similar to a dipole, but modified for the conical geometry. For a cone with semi-vertical angle $\alpha$ and length $L$, the current can be expressed as:

$I(l') = I_0 \frac{\sin[k(L-l')]}{\sin(kL)}$

where:
*   $l'$ is the distance from the apex along the cone surface.
*   $k$ is the free-space wave number ($2\pi/\lambda$).
*   $I_0$ is the current at the apex.

**Effect of Semi-vertical Angle ($\alpha$):**

*   **Small $\alpha$ (close to dipole):** The current distribution approaches that of a thin linear dipole.
*   **Large $\alpha$ (wide cone angle):** The current distribution becomes more uniform, leading to broader bandwidth.

**References:**

*   **Balanis:** Section 6.3.1 (Current Distribution) delves into the mathematical representation of current.
*   **Collin:** Chapter 4 (Conical and Horn Antennas), discusses the current distribution and its relation to radiation.

---

### 4. Radiation Pattern and Parameters

The biconical antenna exhibits a radiation pattern that is generally more omnidirectional in the plane containing the antenna axis, and it is shaped by the cone angle.

**Key Parameters:**

*   **Radiation Pattern:** The spatial distribution of radiated power. For a biconical antenna, the pattern is often described by its main lobe and nulls.
*   **Directivity (D):** A measure of how concentrated the radiation is in a particular direction.
*   **Gain (G):** Directivity multiplied by the antenna's efficiency.
*   **Beamwidth:** The angular width of the main lobe.
*   **Bandwidth:** The range of frequencies over which the antenna operates effectively. The biconical antenna is known for its broad bandwidth.
*   **Input Impedance ($Z_{in}$):** The impedance seen at the antenna terminals. This is crucial for matching to the transmission line.

**Radiation Pattern Characteristics:**

*   **Omnidirectional in the $E$-plane (azimuth plane, containing the antenna axis):** For thin cones, the pattern is close to omnidirectional.
*   **Directional in the $H$-plane (elevation plane, perpendicular to the antenna axis):** The pattern has a main lobe directed perpendicular to the antenna axis.
*   **Effect of $\alpha$:**
    *   **Small $\alpha$:** More omnidirectional pattern in the $E$-plane, similar to a dipole.
    *   **Large $\alpha$:** The pattern tends to become more flattened in the $E$-plane and slightly more directional in the $H$-plane. The nulls at the ends of the antenna axis tend to fill in.

**Bandwidth:**

The biconical antenna's broad bandwidth is attributed to its gradual transition from the transmission line to free space. The wider the cone angle, the broader the bandwidth.

**Input Impedance:**

The input impedance of a biconical antenna depends significantly on the cone angle, length, and the feeding mechanism. For a biconical antenna with a very small apex angle, its impedance is approximately $120 \ln(\cot(\alpha/2))$ ohms. As the cone angle increases, the impedance changes.

**References:**

*   **Balanis:** Section 6.3.2 (Radiation from Biconical Antenna) discusses the radiation pattern and impedance.
*   **Kraus:** Chapter 11 (Conical Antennas), sections 11-3 and 11-4, will cover radiation patterns and impedance.
*   **Milligan:** Chapter 5 (Broadband Antennas), might offer insights into the bandwidth characteristics of biconical antennas.

---

### 5. Design Considerations and Applications

The design of a biconical antenna involves selecting appropriate parameters to achieve desired performance characteristics like impedance matching, radiation pattern, and bandwidth.

**Design Steps:**

1.  **Determine Operating Frequency:** This sets the wavelength ($\lambda$).
2.  **Select Semi-vertical Angle ($\alpha$):** This is a key parameter that influences impedance and bandwidth.
    *   For a half-wave biconical antenna, the total length $2L \approx \lambda$.
    *   For broadband applications, larger $\alpha$ values are preferred.
    *   For a general-purpose antenna, $\alpha \approx 30^\circ$ to $60^\circ$ is common.
3.  **Determine Cone Length (L):** Typically chosen such that the total length ($2L$) is around half a wavelength for resonance.
4.  **Calculate Input Impedance:** Use formulas or simulation tools to estimate the impedance for the chosen geometry.
5.  **Impedance Matching:** If the impedance doesn't match the feed line (e.g., 50-ohm coaxial cable), matching networks are required. The gradual tapering of the biconical structure inherently provides good impedance matching over a wide frequency range.

**Applications:**

*   **Broadband Dipole Replacement:** Used where a wider operating frequency range than a standard dipole is needed.
*   **VHF/UHF Communications:** Common in ground-based and airborne communication systems.
*   **Radar Systems:** Can be used as transmissive or receiving antennas.
*   **Test and Measurement Antennas:** Their predictable characteristics make them suitable for calibration.

**Examples:**

*   **A biconical antenna designed for operation around 300 MHz.** If the semi-vertical angle is $45^\circ$, the length of each cone might be chosen to be around $L = \lambda/4 = (3 \times 10^8 \text{ m/s}) / (4 \times 300 \times 10^6 \text{ Hz}) = 0.25$ meters. The input impedance would be calculated based on this geometry.
*   **Wideband biconical antenna for EW applications:** Might feature larger cone angles (e.g., $90^\circ$ total angle, meaning $\alpha = 45^\circ$) to achieve a bandwidth of several octaves.

**References:**

*   **Balanis:** Section 6.3.3 (Design Considerations) and various examples throughout the text.
*   **Milligan:** Chapter 5 discusses design strategies for broadband antennas, often including biconical types.
*   **Garg:** Might include practical design aspects for microwave antennas.

---

### 6. Relationship to Other Antenna Types

The biconical antenna can be seen as a generalization or extension of other fundamental antenna types.

**Comparison:**

*   **Biconical vs. Dipole:** A biconical antenna with very small cone angles approaches the radiation characteristics and impedance of a thin linear dipole. The biconical structure offers better bandwidth and a smoother impedance transformation.
*   **Biconical vs. Monopole:** A single cone of a biconical antenna fed against an infinite ground plane is equivalent to a conical monopole.
*   **Biconical vs. Horn Antenna:** Both are broadband antennas, but horn antennas typically use a waveguide transition to a flared section, while biconical antennas use conical conductors. The biconical antenna is essentially a "wire" analogue of a sectoral or pyramidal horn.

**References:**

*   **Balanis:** Chapter 6 extensively compares dipoles and biconical antennas.
*   **Collin:** Chapter 4 on Conical and Horn Antennas directly compares their characteristics.
*   **Kraus:** Chapters on dipoles and conical antennas will provide comparative analysis.

---

### 7. Learning Outcomes Coverage

This topic directly contributes to the following course outcomes:

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3):**
    *   Understanding the current distribution on the cones and how it generates electromagnetic waves.
    *   Analyzing how the geometry (cone angle, length) affects the radiation pattern.
    *   Explaining the transition from transmission line to radiation in free space.

*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4):**
    *   The biconical antenna serves as a foundation for understanding more complex broadband and high-performance antennas.
    *   Design considerations for impedance matching and bandwidth are key to applying knowledge to advanced designs.

---

### 8. Key Points to Remember

*   **Structure:** Two cones joined at the apex, fed at the apex.
*   **Radiation:** Caused by oscillating currents on the cone surfaces.
*   **Current Distribution:** Sinusoidal-like, influenced by cone angle and length.
*   **Radiation Pattern:** Omnidirectional in the E-plane (azimuth), directional in the H-plane.
*   **Bandwidth:** Inherently broadband due to its gradual transition. Wider cone angles increase bandwidth.
*   **Input Impedance:** Dependent on cone angle and length; can be matched to transmission lines.
*   **$\alpha$ Significance:** Crucial parameter affecting impedance, pattern, and bandwidth.
*   **Analogy:** A broadened and improved dipole antenna.

---

### 9. Practice Questions and Exercises

**Question 1:**
Describe the physical structure of a biconical antenna. What are its main advantages over a thin linear dipole?
**Answer:**
A biconical antenna consists of two conical conductors joined at their apexes, with the feed point located at the apex. Its main advantages over a thin linear dipole are its significantly broader bandwidth and more robust mechanical construction, often leading to better impedance matching over a wider frequency range due to the gradual transition from the transmission line to free space.

**Question 2:**
How does the semi-vertical angle ($\alpha$) of a biconical antenna affect its radiation pattern and input impedance?
**Answer:**
The semi-vertical angle ($\alpha$) is a critical parameter.
*   **Radiation Pattern:** For small $\alpha$, the pattern is more omnidirectional in the plane containing the antenna axis, similar to a dipole. As $\alpha$ increases, the pattern tends to become more flattened in this plane, and the nulls at the ends of the antenna axis tend to fill in.
*   **Input Impedance:** The input impedance changes with $\alpha$. For very small $\alpha$, it approaches $120 \ln(\cot(\alpha/2))$. As $\alpha$ increases, the impedance generally decreases and becomes less sensitive to changes in length, contributing to broader bandwidth.

**Question 3:**
A biconical antenna is to be designed to operate around a frequency of $f = 500$ MHz. If the semi-vertical angle is chosen as $\alpha = 30^\circ$, estimate a suitable length for each cone to achieve resonance, assuming it behaves like a half-wave antenna. What is the approximate impedance of such an antenna if the cone angle is very small?
**Answer:**
*   **Resonance:** For resonance, the total length $2L$ is approximately half a wavelength: $2L \approx \lambda/2$.
    $\lambda = c/f = (3 \times 10^8 \text{ m/s}) / (500 \times 10^6 \text{ Hz}) = 0.6$ meters.
    So, $2L \approx 0.6/2 = 0.3$ meters.
    The length of each cone is $L \approx 0.15$ meters.
*   **Approximate Impedance (for very small $\alpha$):**
    Using the formula $Z_{in} \approx 120 \ln(\cot(\alpha/2))$:
    $Z_{in} \approx 120 \ln(\cot(30^\circ/2)) = 120 \ln(\cot(15^\circ))$
    $\cot(15^\circ) \approx 3.732$
    $Z_{in} \approx 120 \ln(3.732) \approx 120 \times 1.317 \approx 158.04$ ohms.
    *(Note: This is an approximation for very small angles. For $\alpha = 30^\circ$, the actual impedance will differ but this gives an estimate of the behavior).*

**Question 4:**
Why is the biconical antenna considered a broadband antenna?
**Answer:**
The biconical antenna is considered broadband because its physical structure provides a gradual transition from the characteristic impedance of the transmission line to the impedance of radiation into free space. Unlike a thin dipole, which has a sharper resonance, the conical shape effectively matches a wider range of frequencies, reducing the frequency sensitivity of its impedance and radiation pattern. Wider cone angles enhance this broadband characteristic.

**Question 5 (Conceptual):**
If you were to double the semi-vertical angle of a biconical antenna (e.g., from $15^\circ$ to $30^\circ$), how would you expect its input impedance and radiation efficiency to change, assuming the length remains appropriate for resonance at the same frequency?
**Answer:**
*   **Input Impedance:** Doubling the semi-vertical angle (moving from a very narrow cone towards a wider cone) would generally *decrease* the input impedance. The increased surface area and capacitance contribute to this effect.
*   **Radiation Efficiency:** For typical operating frequencies and reasonable cone angles, increasing the cone angle generally *improves* radiation efficiency. This is because the current distribution becomes more uniform and less prone to losses associated with sharp current gradients seen in very thin structures.

---

### 10. Further Exploration (Optional)

*   Investigate the detailed mathematical derivation of the current distribution and radiated fields for a biconical antenna using integral equations. (Refer to Balanis, Collin).
*   Explore the design of impedance matching networks for biconical antennas using techniques described in microwave engineering texts. (Refer to Pozar).
*   Study the use of biconical antennas in specific applications like ultra-wideband (UWB) systems. (This might be covered in later modules or reference books on specialized antennas).

---
This comprehensive set of notes covers the fundamental aspects of the biconical antenna, aligning with the learning outcomes and course objectives. Remember to consult the referenced textbooks for deeper theoretical understanding and detailed mathematical treatments.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
