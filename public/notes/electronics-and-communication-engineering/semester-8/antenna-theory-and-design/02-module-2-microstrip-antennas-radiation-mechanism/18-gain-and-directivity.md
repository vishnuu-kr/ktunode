---
title: "Gain and Directivity"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 2: Microstrip antennas: Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7e4"
status: "completed"
scrapedAt: "2026-05-23T18:11:58.256Z"
---
# ANTENNA THEORY AND DESIGN - Module 2: Microstrip Antennas: Radiation Mechanism

## Topic: Gain and Directivity

---

### 1. Introduction to Gain and Directivity

*   **Concept:** Gain and directivity are fundamental parameters used to describe the directional properties of an antenna. They quantify how effectively an antenna concentrates radiated power in a specific direction compared to an isotropic radiator or a reference antenna.
*   **Importance:** Understanding gain and directivity is crucial for optimizing antenna performance in applications where signal strength in a particular direction is critical, such as satellite communications, radar, and wireless networks.

---

### 2. Directivity (D)

#### 2.1 Definition

*   **Description:** Directivity is a dimensionless quantity that measures the ratio of the radiation intensity in a given direction to the average radiation intensity over all directions. It describes the "focusing ability" of an antenna without considering its efficiency.
*   **Mathematical Definition:**
    $$D(\theta, \phi) = \frac{U(\theta, \phi)}{U_{avg}}$$
    Where:
    *   $U(\theta, \phi)$ is the radiation intensity in the direction $(\theta, \phi)$.
    *   $U_{avg}$ is the average radiation intensity over all directions.
*   **Relationship to Radiation Intensity:** $U_{avg} = \frac{1}{4\pi} \int_0^{2\pi} \int_0^{\pi} U(\theta, \phi) \sin(\theta) d\theta d\phi$.
*   **Key Insight:** Directivity is solely a function of the antenna's radiation pattern, not its physical size or losses.

#### 2.2 Calculation of Directivity

*   **From Radiation Intensity:** If the radiation intensity $U(\theta, \phi)$ is known, directivity can be calculated by first finding the average radiation intensity and then taking the ratio.
*   **From Radiation Pattern:** Often, directivity is calculated from the normalized radiation pattern $F(\theta, \phi) = U(\theta, \phi) / U_{max}$. In this case, the average radiation intensity is:
    $$U_{avg} = \frac{U_{max}}{4\pi} \int_0^{2\pi} \int_0^{\pi} F(\theta, \phi) \sin(\theta) d\theta d\phi$$
    And the directivity in the direction of maximum radiation $(\theta_0, \phi_0)$ is:
    $$D_{max} = \frac{U_{max}}{U_{avg}} = \frac{4\pi}{\int_0^{2\pi} \int_0^{\pi} F(\theta, \phi) \sin(\theta) d\theta d\phi}$$
*   **For Isotropic Radiator:** An isotropic radiator radiates equally in all directions. Its directivity is $D = 1$ or 0 dBi.

#### 2.3 Directivity of Common Antennas

*   **Half-Wave Dipole:** Balanis (4th Ed., Chapter 3) shows that the maximum directivity of a half-wave dipole is approximately 1.64 (or 2.15 dBi).
*   **Uniformly Illuminated Aperture (e.g., Reflector Antenna):** For a circular aperture of diameter D, the directivity is approximately $D \approx \frac{4\pi A_e}{\lambda^2}$, where $A_e$ is the effective aperture area and $\lambda$ is the wavelength. For a uniformly illuminated circular aperture, $A_e = \pi (D/2)^2$, so $D \approx \pi (\frac{D}{\lambda})^2$.

#### 2.4 Relationship to Beam Solid Angle

*   **Definition:** The beam solid angle $(\Omega_A)$ is the solid angle over which the antenna concentrates its radiation. It's approximately equal to the inverse of the directivity.
*   **Formula:** $D \approx \frac{4\pi}{\Omega_A}$
*   **Significance:** A smaller beam solid angle implies higher directivity.

#### 2.5 Directivity of Microstrip Antennas

*   **Characteristics:** Microstrip antennas, due to their planar structure and thin substrates, typically have broad radiation patterns.
*   **Factors Affecting Directivity:**
    *   **Element Size:** Larger elements generally lead to higher directivity (as seen in aperture antennas).
    *   **Substrate Thickness and Dielectric Constant:** Thicker substrates and higher dielectric constants can influence the pattern and directivity.
    *   **Feed Network:** The feed network can also contribute to the overall radiation pattern.
    *   **Array Configuration:** For arrays of microstrip elements, the directivity is highly dependent on the number of elements, their spacing, and the excitation amplitudes and phases.
*   **Typical Values:** Individual microstrip patch antennas typically have directivities in the range of 5-9 dBi. Arrays can achieve much higher directivities.

---

### 3. Gain (G)

#### 3.1 Definition

*   **Description:** Gain is a parameter that accounts for both the directivity of an antenna and its efficiency. It represents the ratio of the radiation intensity in a given direction to the power accepted by the antenna at its input terminals.
*   **Mathematical Definition:**
    $$G(\theta, \phi) = \eta_r D(\theta, \phi)$$
    Where:
    *   $\eta_r$ is the **radiation efficiency** of the antenna.
    *   $D(\theta, \phi)$ is the directivity in the direction $(\theta, \phi)$.
*   **Key Insight:** Gain is always less than or equal to directivity, as losses (due to conductor resistance, dielectric losses, mismatch losses) reduce the radiated power.

#### 3.2 Radiation Efficiency ($\eta_r$)

*   **Description:** Radiation efficiency is the ratio of the power radiated by the antenna to the power accepted by the antenna at its input terminals.
*   **Mathematical Definition:**
    $$\eta_r = \frac{P_{rad}}{P_{in}} = \frac{P_{rad}}{P_{rad} + P_{loss}}$$
    Where:
    *   $P_{rad}$ is the power radiated by the antenna.
    *   $P_{in}$ is the power accepted by the antenna at its input terminals.
    *   $P_{loss}$ is the total power lost within the antenna.
*   **Components of Losses:**
    *   **Conduction Losses ($P_{cu}$):** Due to the finite conductivity of the antenna conductors.
    *   **Dielectric Losses ($P_{diel}$):** Due to the dielectric material used (especially in microstrip antennas).
    *   **Mismatch Losses ($P_{mism}$):** Due to impedance mismatch at the antenna terminals. These are often handled separately by considering the **efficiency** which is related to **gain**, rather than **directivity**. However, for the definition of gain, it implicitly assumes the antenna is matched or considers the power delivered to the antenna *after* mismatch. If we consider power accepted $P_{accepted}$, then $\eta_r = \frac{P_{rad}}{P_{accepted}}$.

#### 3.3 Calculation of Gain

*   **From Directivity and Efficiency:** $G_{max} = \eta_r D_{max}$ (in linear scale).
    In decibels: $G_{dB} = D_{dB} + \eta_{r,dB}$ (where $\eta_{r,dB} = 10 \log_{10}(\eta_r)$).
*   **From Radiation Intensity and Input Power:**
    $$G(\theta, \phi) = \frac{4\pi U(\theta, \phi)}{P_{in}}$$
    Where $P_{in}$ is the input power accepted by the antenna.

#### 3.4 Gain of Microstrip Antennas

*   **Factors Affecting Gain:**
    *   **Directivity:** As discussed above, element size, array configuration, etc.
    *   **Radiation Efficiency:** This is a critical factor for microstrip antennas.
        *   **Conductor Losses:** Primarily due to the finite conductivity of the radiating patch and ground plane.
        *   **Dielectric Losses:** Significant for microstrip antennas, especially with thicker substrates and higher dielectric constant materials (like FR4). Balanis (4th Ed., Chapter 13) and Garg (Chapter 4) discuss these losses in detail.
        *   **Surface Waves:** In microstrip antennas, particularly on thicker substrates, power can be lost to surface waves, which do not radiate efficiently into free space.
        *   **Spurious Radiation:** Energy can also be lost to spurious radiation from feed lines and discontinuities.
*   **Typical Values:** Individual microstrip patch antennas typically have gains in the range of 5-9 dBi, but their efficiency can be significantly lower than higher-order antennas, often ranging from 70% to 95% depending on the design and materials. This means their gain is often slightly lower than their directivity. Garg (Chapter 4) provides methods to estimate these losses.
*   **Arrays for Higher Gain:** To achieve higher gains, microstrip antennas are often used in arrays. The gain of an array is approximately the gain of a single element multiplied by the number of elements, provided the elements are closely spaced and the array aperture is efficient.

---

### 4. Important Relationships and Considerations

*   **Gain vs. Directivity:** Gain is always less than or equal to directivity.
*   **Isotropic Radiator:** Gain = Directivity = 1 (0 dBi).
*   **Efficiency:** $\eta_r = G/D$.
*   **Antenna Parameters:** Directivity is related to the shape of the radiation pattern, while gain includes the effect of losses.
*   **Balanis (4th Ed., Chapter 13):** Discusses the fundamental parameters of microstrip antennas, including directivity and gain, and the factors influencing them, such as substrate thickness, dielectric constant, and element size.
*   **Garg (Chapter 4):** Provides detailed analysis of losses in microstrip antennas (conductor, dielectric, surface wave) which directly impact the radiation efficiency and thus the gain. He also discusses methods for calculating directivity and gain for various microstrip configurations.
*   **Pozar (4th Ed., Chapter 10):** Discusses aperture antennas and relates directivity to the effective aperture area. While not specific to microstrip, the concepts are transferable.

---

### 5. Practical Examples

*   **Scenario 1: Satellite Communication:** A satellite dish (often a parabolic reflector, which acts like a large aperture antenna) needs high directivity to focus the weak signal from a satellite onto a receiver. Its gain is crucial for achieving a good signal-to-noise ratio.
*   **Scenario 2: Wi-Fi Router Antenna:** A small omnidirectional antenna on a Wi-Fi router has low directivity but is designed to radiate power in all directions to cover a room. Its gain is relatively low.
*   **Scenario 3: Microstrip Patch Antenna for GPS:** A typical GPS patch antenna might have a directivity of around 6 dBi. If its radiation efficiency is 85%, its gain would be approximately $0.85 \times 6 \text{ dBi} \approx 5.5 \text{ dBi}$.

---

### 6. Practice Questions and Exercises

**Question 1:**
Define directivity and gain. Explain the relationship between them and the role of radiation efficiency.

**Answer 1:**
*   **Directivity (D):** The ratio of the radiation intensity in a given direction to the average radiation intensity over all directions. It indicates how well an antenna focuses power.
*   **Gain (G):** The ratio of the radiation intensity in a given direction to the power accepted by the antenna at its input terminals. It accounts for both directivity and antenna efficiency.
*   **Relationship:** $G = \eta_r D$, where $\eta_r$ is the radiation efficiency. Gain is always less than or equal to directivity because losses reduce the radiated power.

**Question 2:**
An antenna has a maximum directivity of 10 dBi. If its radiation efficiency is 80%, calculate its maximum gain in dB.

**Answer 2:**
Given:
$D_{max} = 10 \text{ dBi}$
$\eta_r = 80\% = 0.80$

First, convert directivity from dB to linear scale:
$D_{max, linear} = 10^{10/10} = 10$

Now, calculate the gain in linear scale:
$G_{max, linear} = \eta_r \times D_{max, linear} = 0.80 \times 10 = 8$

Finally, convert the gain back to dB:
$G_{max, dB} = 10 \log_{10}(G_{max, linear}) = 10 \log_{10}(8) \approx 9.03 \text{ dBi}$

**Alternatively, using dB directly:**
$D_{max, dB} = 10 \text{ dBi}$
$\eta_{r, dB} = 10 \log_{10}(0.80) \approx -0.97 \text{ dB}$

$G_{max, dB} = D_{max, dB} + \eta_{r, dB} = 10 \text{ dBi} + (-0.97 \text{ dB}) \approx 9.03 \text{ dBi}$

**Question 3:**
What are the primary sources of loss that reduce the gain of a microstrip patch antenna compared to its directivity? Briefly explain each.

**Answer 3:**
The primary sources of loss in a microstrip patch antenna are:
1.  **Conductor Losses:** Due to the finite conductivity of the metal radiating patch and the ground plane. This causes ohmic losses ($I^2R$ losses) as currents flow through these conductors.
2.  **Dielectric Losses:** Caused by the dielectric material of the substrate. When the electromagnetic wave propagates through the dielectric, energy is dissipated due to the dielectric loss tangent ($\tan \delta$). This is particularly significant for microstrip antennas with thick substrates and high dielectric constant materials.
3.  **Surface Waves:** On thicker substrates with lower dielectric constants, power can be lost to surface waves that propagate along the interface between the dielectric and the ground plane without radiating into free space.
4.  **Spurious Radiation:** Energy can be lost due to radiation from discontinuities in the transmission lines used for feeding the patch or from the edges of the substrate.

**Question 4:**
An isotropic antenna has a directivity of 1. If its radiation efficiency is 90%, what is its gain?

**Answer 4:**
For an isotropic antenna, $D = 1$.
$\eta_r = 0.90$.
$G = \eta_r \times D = 0.90 \times 1 = 0.90$.
In dB, $G_{dB} = 10 \log_{10}(0.90) \approx -0.46 \text{ dB}$.

---

### 7. Important Points to Remember

*   **Directivity** is a measure of how "focused" the antenna's radiation pattern is.
*   **Gain** is a measure of how much power is radiated in a specific direction, taking into account both the focusing ability (directivity) and the antenna's efficiency.
*   **Gain $\leq$ Directivity**.
*   **Radiation efficiency** is critical for microstrip antennas due to dielectric and conductor losses.
*   Increasing the size of the radiating element (or the aperture of an array) generally **increases directivity**.
*   Higher dielectric constants and thicker substrates in microstrip antennas can **reduce efficiency** due to increased dielectric and surface wave losses.

---

### 8. Alignment with Course Outcomes

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3):** This topic directly contributes to understanding how an antenna's physical structure (related to its directivity) and its material properties and losses (related to efficiency) influence the effective radiated power in different directions.
*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4):** Knowledge of gain and directivity is essential for designing microstrip antennas that meet performance specifications. Measurement of these parameters is a key part of antenna characterization.
*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4):** For antenna arrays and other advanced configurations, maximizing gain while maintaining desired directivity is a primary design goal.
*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2):** While not directly about propagation modes, understanding antenna gain and directivity is fundamental to how signals are transmitted and received, impacting the propagation link budget.

---
This concludes the study notes for Gain and Directivity in Module 2. Refer to Balanis and Garg for deeper mathematical derivations and specific examples related to microstrip antennas.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
