---
title: "Transmission and reflection coefficients (pressure, intensity and power), transmission loss"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 2: Point source, spherical source, Line source, Monopole, dipole"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463fe6"
status: "completed"
scrapedAt: "2026-05-20T18:09:37.734Z"
---
# ACOUSTICS AND NOISE CONTROL - Module 2: Point Source, Spherical Source, Line Source, Monopole, Dipole

## Topic: Transmission and Reflection Coefficients, Transmission Loss

**Module Focus:** Understanding how sound waves interact with boundaries, leading to transmission and reflection, and quantifying the reduction in sound power due to these interactions.

**Course Outcomes Addressed:**
*   **CO1:** Define various acoustic terminologies and understand the physics behind acoustic wave propagation. (K2)
*   **CO2:** Analyze the transmission of sound through different media and tubes. (K4)

---

### 1. Introduction to Sound Transmission and Reflection

When a sound wave encounters a boundary between two different media (e.g., air to a wall, water to air), a portion of the sound energy is reflected back into the incident medium, and another portion is transmitted into the second medium. This phenomenon is governed by the acoustic properties of both media.

*   **Reflection:** The bouncing back of sound waves from a surface.
*   **Transmission:** The passage of sound waves through a surface into another medium.

**Key Concept:** The principle of conservation of energy dictates that the incident sound energy must be accounted for by the reflected and transmitted energy. Losses can occur due to absorption within the media or at the boundary.

**Reference:**
*   **Ekinsler, Frey, Coppens, Sanders (2000), Chapter 6: Transmission and Reflection:** Discusses the fundamental principles of wave propagation across interfaces.
*   **Ver & Beranek (2006), Chapter 4: Sound Propagation and Effects:** Provides an overview of how sound interacts with surfaces.

---

### 2. Acoustic Properties of Media

To understand transmission and reflection, we need to define the acoustic properties of the media involved.

*   **Specific Acoustic Impedance (z):** A measure of the resistance a medium offers to the propagation of sound waves. It is the product of the density of the medium ($\rho$) and the speed of sound in the medium ($c$).
    *   **Formula:** $z = \rho c$
    *   **Units:** Rayls (Pa·s/m or N·s/m³)
    *   **Importance:** A large difference in specific acoustic impedance between two media leads to high reflection and low transmission.

*   **Characteristic Impedance:** The specific acoustic impedance of a medium in free space (e.g., air, water).

**Examples:**
*   Air at room temperature ($20^\circ C$): $\rho \approx 1.2 \, \text{kg/m}^3$, $c \approx 343 \, \text{m/s}$.
    *   $z_{\text{air}} \approx 1.2 \times 343 \approx 412 \, \text{Rayls}$.
*   Water at room temperature ($20^\circ C$): $\rho \approx 1000 \, \text{kg/m}^3$, $c \approx 1480 \, \text{m/s}$.
    *   $z_{\text{water}} \approx 1000 \times 1480 \approx 1.48 \times 10^6 \, \text{Rayls}$.
    *   **Observation:** The impedance mismatch between air and water is enormous, leading to almost complete reflection at the air-water interface.

*   **Acoustic Resistance (R) and Reactance (X):** For more complex media or structures (like porous materials), the impedance can be represented as $z = R + jX$, where $R$ is resistance and $X$ is reactance.

**Reference:**
*   **Ekinsler, Frey, Coppens, Sanders (2000), Chapter 2: Acoustic Properties of Fluids and Solids:** Details the concepts of density, sound speed, and acoustic impedance.
*   **Munjal (2013), Chapter 2: Acoustic Properties of Media:** Provides a deeper dive into the impedance concept.

---

### 3. Transmission and Reflection Coefficients

These coefficients quantify the ratio of transmitted or reflected quantities (pressure, intensity, power) to the incident quantities. They are crucial for predicting how much sound will pass through or bounce off a barrier.

#### 3.1. Pressure Transmission and Reflection Coefficients

These coefficients relate to the acoustic pressure.

*   **Pressure Reflection Coefficient ($R_p$):** The ratio of the reflected acoustic pressure to the incident acoustic pressure.
    *   **Formula for normal incidence:** $R_p = \frac{z_2 - z_1}{z_2 + z_1}$
    *   Where:
        *   $z_1$: Specific acoustic impedance of the incident medium.
        *   $z_2$: Specific acoustic impedance of the transmission medium.

*   **Pressure Transmission Coefficient ($T_p$):** The ratio of the transmitted acoustic pressure to the incident acoustic pressure.
    *   **Formula for normal incidence:** $T_p = \frac{2z_2}{z_2 + z_1}$
    *   **Relationship:** $1 + R_p = T_p$ (This holds for pressure at normal incidence).

**Important Note:** These formulas are simplified and assume normal (perpendicular) incidence of the sound wave onto the boundary. For oblique incidence, the formulas become more complex, involving angles.

**Example (Normal Incidence): Air to Concrete Wall**
*   Air: $z_1 \approx 412 \, \text{Rayls}$
*   Concrete: $\rho \approx 2400 \, \text{kg/m}^3$, $c \approx 3500 \, \text{m/s}$ (approximate values, varies with type)
    *   $z_2 \approx 2400 \times 3500 \approx 8.4 \times 10^6 \, \text{Rayls}$

*   **Pressure Reflection Coefficient:**
    *   $R_p = \frac{8.4 \times 10^6 - 412}{8.4 \times 10^6 + 412} \approx \frac{8.4 \times 10^6}{8.4 \times 10^6} \approx 1$
    *   This indicates very high reflection of pressure waves.

*   **Pressure Transmission Coefficient:**
    *   $T_p = \frac{2 \times 8.4 \times 10^6}{8.4 \times 10^6 + 412} \approx \frac{16.8 \times 10^6}{8.4 \times 10^6} \approx 2$
    *   **Wait!** A transmission coefficient greater than 1 seems counterintuitive. This is because $T_p$ is a ratio of pressure amplitudes, and the transmitted pressure can be higher than the incident pressure due to impedance matching effects and wave phenomena at the boundary, especially in the very short time before the reflected wave from the back of the material returns. However, **it does not imply that more energy is transmitted**. Energy is always conserved.

**Reference:**
*   **Ekinsler, Frey, Coppens, Sanders (2000), Chapter 6: Transmission and Reflection:** Detailed derivation of coefficients for normal incidence.
*   **Ver & Beranek (2006), Chapter 4: Sound Propagation and Effects:** Discusses the concept of acoustic impedance mismatch and its effect on transmission and reflection.

---

#### 3.2. Intensity Transmission and Reflection Coefficients

These coefficients relate to the acoustic intensity, which represents the power flow per unit area. Intensity is proportional to the square of the pressure and inversely proportional to the impedance.

*   **Intensity Reflection Coefficient ($R_I$):** The ratio of the reflected sound intensity to the incident sound intensity.
    *   **Formula for normal incidence:** $R_I = \left(\frac{z_2 - z_1}{z_2 + z_1}\right)^2 = R_p^2$
    *   **Interpretation:** This coefficient is always between 0 and 1, representing the fraction of incident *power* that is reflected.

*   **Intensity Transmission Coefficient ($T_I$):** The ratio of the transmitted sound intensity to the incident sound intensity.
    *   **Formula for normal incidence:** $T_I = \frac{I_{\text{transmitted}}}{I_{\text{incident}}} = \frac{4z_1 z_2}{(z_2 + z_1)^2}$
    *   **Relationship:** $R_I + T_I = 1$ (This holds for intensity at normal incidence, assuming no absorption within the interface itself).

**Example (Continuing Air to Concrete):**
*   $R_p \approx 1$
*   **Intensity Reflection Coefficient:** $R_I = R_p^2 \approx 1^2 = 1$.
    *   This means approximately 100% of the sound intensity is reflected, and almost none is transmitted into the concrete *at the boundary*. This is a simplification; real walls have mass, damping, and resonance effects.

*   **Intensity Transmission Coefficient:**
    *   $T_I = 1 - R_I = 1 - 1 = 0$.
    *   Alternatively, using the formula:
        $T_I = \frac{4 \times 412 \times 8.4 \times 10^6}{(8.4 \times 10^6 + 412)^2} \approx \frac{4 \times 412 \times 8.4 \times 10^6}{(8.4 \times 10^6)^2} \approx \frac{4 \times 412 \times 8.4 \times 10^6}{70.56 \times 10^{12}} \approx \frac{1.38 \times 10^{10}}{7.056 \times 10^{13}} \approx 0.000195$
    *   **Important Discrepancy:** The direct calculation of $T_I$ gives a very small value, much closer to what we intuitively expect for a solid wall. The reason for the discrepancy between $T_I = 1 - R_I$ and the direct calculation is subtle. The formula $T_p = \frac{2z_2}{z_2 + z_1}$ and its relation to $R_p$ are for the acoustic field *at the boundary*. When we move into the second medium, the intensity is related to $p^2/z$. The formula $T_I = \frac{4z_1 z_2}{(z_2 + z_1)^2}$ is derived from $I_{\text{transmitted}} = \frac{p_{\text{transmitted}}^2}{z_2}$ and $I_{\text{incident}} = \frac{p_{\text{incident}}^2}{z_1}$. If we use $p_{\text{transmitted}} = T_p \cdot p_{\text{incident}}$, then $I_{\text{transmitted}} = \frac{(T_p \cdot p_{\text{incident}})^2}{z_2} = \frac{T_p^2 \cdot p_{\text{incident}}^2}{z_2}$. Then $T_I = \frac{I_{\text{transmitted}}}{I_{\text{incident}}} = \frac{T_p^2 \cdot p_{\text{incident}}^2 / z_2}{p_{\text{incident}}^2 / z_1} = T_p^2 \frac{z_1}{z_2}$.
    *   Let's re-calculate $T_I$ using this correct relation:
        $T_I = \left(\frac{2z_2}{z_2 + z_1}\right)^2 \frac{z_1}{z_2} = \frac{4z_2^2}{(z_2 + z_1)^2} \frac{z_1}{z_2} = \frac{4z_1 z_2}{(z_2 + z_1)^2}$
    *   This confirms the formula for $T_I$. The value calculated, $\approx 0.000195$, is indeed very small.
    *   **Crucial Point:** The formula $R_I + T_I = 1$ is valid when there is no absorption in the medium or at the boundary. In reality, a concrete wall will absorb some sound energy, meaning $R_I + T_I < 1$. The calculated $T_I$ is the *unabsorbed* transmitted intensity.

**Reference:**
*   **Ekinsler, Frey, Coppens, Sanders (2000), Chapter 6: Transmission and Reflection:** Provides detailed formulas for intensity coefficients.
*   **Munjal (2013), Chapter 2: Acoustic Properties of Media:** Explains the link between pressure and intensity coefficients.

---

#### 3.3. Power Transmission and Reflection Coefficients

While intensity is power per area, transmission and reflection coefficients can also be considered for total acoustic power. For diffuse field conditions or when considering total power flow through a large area, these are effectively the same as intensity coefficients.

*   **Acoustic Transmission Coefficient ($T$):** Represents the fraction of incident *acoustic power* that is transmitted through a barrier.
    *   **For a simple panel (mass-controlled regime):** The transmission coefficient often depends on the mass per unit area ($m'$) of the barrier, the frequency ($f$), and the density ($\rho$) and speed of sound ($c$) of the incident medium.
    *   **Mass Law (simplified):** For thin, rigid, heavy panels in the mass-controlled region (where the panel's stiffness doesn't dominate), the transmission *loss* (discussed below) increases with frequency and mass. The intensity transmission coefficient is roughly inversely proportional to the square of frequency and the square of mass per unit area.
        *   $T_I \propto \frac{1}{(\omega m')^2}$ where $\omega = 2\pi f$.

*   **Acoustic Reflection Coefficient ($R$):** Represents the fraction of incident *acoustic power* that is reflected by a barrier.
    *   **Relationship:** In the absence of absorption within the barrier or at the boundary, $R + T = 1$.

**Reference:**
*   **Ver & Beranek (2006), Chapter 4: Sound Propagation and Effects:** Discusses the Mass Law and its implications for transmission.
*   **Crocker (2007), Chapter 2: Fundamentals of Noise Control:** Covers basic principles of sound transmission and reflection through barriers.

---

### 4. Transmission Loss (TL)

Transmission Loss is a measure of how effectively a barrier reduces the amount of sound power that passes through it. It is typically expressed in decibels (dB).

*   **Definition:** Transmission Loss is defined as the difference between the sound power incident on a barrier and the sound power transmitted through it.
    *   **Formula:** $TL = 10 \log_{10} \left( \frac{W_{\text{incident}}}{W_{\text{transmitted}}} \right) \, \text{dB}$
    *   Where:
        *   $W_{\text{incident}}$: Incident sound power (Watts).
        *   $W_{\text{transmitted}}$: Transmitted sound power (Watts).

*   **Relationship to Intensity Transmission Coefficient:** Since $T_I = W_{\text{transmitted}} / W_{\text{incident}}$, we can rewrite TL as:
    *   $TL = 10 \log_{10} \left( \frac{1}{T_I} \right) \, \text{dB}$
    *   $TL = -10 \log_{10} (T_I) \, \text{dB}$

*   **Relationship to Intensity Reflection Coefficient:** Since $T_I = 1 - R_I$ (assuming no absorption),
    *   $TL = -10 \log_{10} (1 - R_I) \, \text{dB}$

**Interpretation:** A higher Transmission Loss value indicates a greater reduction in sound power, meaning the barrier is more effective at blocking sound.

**Example (Air to Concrete Wall):**
From our previous calculation, for air to concrete at normal incidence, $T_I \approx 0.000195$.
*   **Transmission Loss:**
    *   $TL = -10 \log_{10} (0.000195) \approx -10 \times (-3.71) \approx 37.1 \, \text{dB}$.
    *   This suggests that a concrete wall, under these simplified assumptions, could provide significant sound insulation.

**Reference:**
*   **Ver & Beranek (2006), Chapter 4: Sound Propagation and Effects:** Provides the definition and formula for Transmission Loss.
*   **Munjal (2013), Chapter 4: Sound Transmission Through Barriers:** Focuses on TL and factors affecting it.

---

### 5. Factors Affecting Transmission Loss

Transmission Loss is not a fixed property of a material but depends on several factors:

*   **Frequency:**
    *   **Mass Law:** For simple, rigid panels, TL increases with frequency. Higher frequencies have shorter wavelengths, which interact differently with the panel's mass.
    *   **Resonances:** At certain frequencies, the panel might resonate, leading to dips in TL (areas of increased transmission).
    *   **Coincidence Effect:** At a specific frequency (the coincidence frequency), the wavelength of the sound wave travelling along the surface of the panel matches the wavelength of a flexural wave in the panel. This leads to a significant increase in transmission (a dip in TL).

*   **Mass per Unit Area ($m'$):**
    *   **Mass Law:** TL is directly proportional to the logarithm of the mass per unit area of the barrier. Doubling the mass typically increases TL by about 5-6 dB.
    *   **Formula (Mass Law approximation for TL):** $TL \approx 20 \log_{10}(f) + 20 \log_{10}(m') - 47.4 \, \text{dB}$ (for airborne sound, approximate)

*   **Material Properties:**
    *   **Stiffness and Damping:** While mass is dominant in the high-frequency, mass-controlled region, stiffness becomes important at low frequencies. Damping helps to dissipate energy, reducing vibrations and thus improving TL.
    *   **Porosity:** Porous materials exhibit different transmission characteristics than dense, impervious materials due to internal absorption and viscous losses.

*   **Geometry and Mounting:**
    *   **Thickness:** While mass is the primary factor, thickness plays a role in stiffness and resonance.
    *   **Mounting:** How a barrier is mounted (e.g., rigid mounting versus flexible mounting) significantly affects its ability to transmit sound. Gaps and flanking paths around the barrier can also reduce the overall effective TL.

*   **Angle of Incidence:**
    *   The formulas for $R_p$, $T_p$, $R_I$, and $T_I$ presented earlier were for normal incidence. For oblique incidence (sound hitting at an angle), the transmission and reflection coefficients change, often becoming more complex.

**Reference:**
*   **Ver & Beranek (2006), Chapter 4: Sound Propagation and Effects:** Extensive discussion on mass law, coincidence, and other factors.
*   **Munjal (2013), Chapter 4: Sound Transmission Through Barriers:** Detailed analysis of factors influencing TL.
*   **Barron (2001), Chapter 7: Noise Transmission Through Walls and Partitions:** Covers the practical aspects of sound transmission through building elements.

---

### 6. Sound Transmission Class (STC)

While Transmission Loss (TL) is a frequency-dependent measure, a single-number rating is often used to characterize the sound insulating performance of building partitions for speech and general office noise.

*   **Definition:** The Sound Transmission Class (STC) is a rating system developed by ASTM (American Society for Testing and Materials) that measures how well a building element blocks sound.
*   **Method:** It is derived from the measured Transmission Loss values of a partition across a range of frequencies (typically 125 Hz to 4000 Hz). A reference contour curve is fitted to the measured TL data according to a specific procedure. The STC rating is the value of this contour curve at 500 Hz.
*   **Use:** Higher STC ratings indicate better sound insulation. For example, an STC rating of 50 means the partition provides 50 dB of transmission loss on average for speech frequencies.
*   **Limitations:** STC is a single-number rating and does not fully describe the performance across all frequencies. It is most relevant for airborne sound, particularly speech, and less suitable for impact noise or low-frequency noise like machinery.

**Reference:**
*   **Ver & Beranek (2006), Chapter 11: Airborne Sound Insulation:** Dedicated chapter on STC and other rating systems.
*   **Barron (2001), Chapter 7: Noise Transmission Through Walls and Partitions:** Explains STC and its practical application.

---

### 7. Types of Sound Sources and Their Interaction with Boundaries

The concepts of transmission and reflection apply regardless of the source type, but understanding the source helps in analyzing the overall sound field.

*   **Point Source (Spherical Source):** Emits sound uniformly in all directions. The sound intensity decreases with the square of the distance ($I \propto 1/r^2$). Sound waves propagate spherically.
*   **Line Source:** Emits sound along a line (e.g., a long pipe or a busy road). The sound intensity decreases with distance from the line ($I \propto 1/r$). Sound waves propagate cylindrically.
*   **Monopole:** A theoretical point source of volume velocity. It's a fundamental building block for understanding sound radiation. A pulsating sphere is a physical example.
*   **Dipole:** Represents two closely spaced monopoles of opposite sign (e.g., two pistons moving in and out of phase). It's characteristic of oscillating sources and radiates sound differently than a monopole. The sound intensity from a dipole typically decreases faster with distance than from a monopole (e.g., $I \propto 1/r^3$ at far distances).

**How they interact:**
When any of these sources are placed near a boundary (like a wall), the reflected waves combine with the direct waves, altering the sound intensity and pressure levels at different locations. The transmission and reflection coefficients still govern how much sound passes through or bounces off the boundary itself.

**Reference:**
*   **Ekinsler, Frey, Coppens, Sanders (2000), Chapters 4 & 5:** Covers various sound source types and their radiation.
*   **Ver & Beranek (2006), Chapter 2: Fundamentals of Acoustic Fields:** Discusses source types and wave propagation.

---

### 8. Practice Questions and Answers

**Question 1:**
Calculate the specific acoustic impedance of air at $20^\circ C$ and water at $20^\circ C$. If a sound wave travels from air to water at normal incidence, what are the pressure and intensity reflection coefficients? What does this imply about sound transmission from air to water?

**Answer 1:**
*   **Air ($20^\circ C$):** $\rho \approx 1.2 \, \text{kg/m}^3$, $c \approx 343 \, \text{m/s}$.
    $z_{\text{air}} = \rho c \approx 1.2 \times 343 \approx 412 \, \text{Rayls}$.
*   **Water ($20^\circ C$):** $\rho \approx 1000 \, \text{kg/m}^3$, $c \approx 1480 \, \text{m/s}$.
    $z_{\text{water}} = \rho c \approx 1000 \times 1480 \approx 1.48 \times 10^6 \, \text{Rayls}$.

*   **Pressure Reflection Coefficient ($R_p$):**
    $R_p = \frac{z_{\text{water}} - z_{\text{air}}}{z_{\text{water}} + z_{\text{air}}} = \frac{1.48 \times 10^6 - 412}{1.48 \times 10^6 + 412} \approx \frac{1.48 \times 10^6}{1.48 \times 10^6} \approx 1$.

*   **Intensity Reflection Coefficient ($R_I$):**
    $R_I = R_p^2 \approx 1^2 = 1$.

*   **Implication:** An intensity reflection coefficient of 1 means that almost all the sound intensity is reflected back into the air. The intensity transmission coefficient $T_I = 1 - R_I = 0$. This signifies very poor sound transmission from air to water.

---

**Question 2:**
A partition wall has the following Transmission Loss values at different frequencies:
*   125 Hz: 20 dB
*   250 Hz: 25 dB
*   500 Hz: 30 dB
*   1000 Hz: 35 dB
*   2000 Hz: 40 dB
*   4000 Hz: 45 dB

What is the approximate Intensity Transmission Coefficient ($T_I$) at 1000 Hz? What is the Transmission Loss at 250 Hz?

**Answer 2:**
*   **$T_I$ at 1000 Hz:**
    We know $TL = -10 \log_{10} (T_I)$.
    So, $T_I = 10^{(-TL/10)}$.
    At 1000 Hz, TL = 35 dB.
    $T_I = 10^{(-35/10)} = 10^{-3.5} \approx 0.000316$.

*   **TL at 250 Hz:**
    The Transmission Loss at 250 Hz is directly given as 25 dB.

---

**Question 3:**
According to the Mass Law, if you double the mass per unit area of a partition, by how many decibels would you expect its Transmission Loss to increase, assuming the partition is in the mass-controlled region?

**Answer 3:**
The Mass Law states that $TL \propto 20 \log_{10}(m')$.
If the mass is doubled ($m' \rightarrow 2m'$), the new TL will be:
$TL_{\text{new}} \propto 20 \log_{10}(2m') = 20 (\log_{10}(2) + \log_{10}(m')) = 20 \log_{10}(2) + 20 \log_{10}(m')$.
The increase in TL is $20 \log_{10}(2) \approx 20 \times 0.301 \approx 6.02 \, \text{dB}$.
So, doubling the mass per unit area would increase the Transmission Loss by approximately 6 dB.

---

### 9. Important Points to Remember

*   **Impedance Mismatch:** The greater the difference in specific acoustic impedance ($z = \rho c$) between two media, the higher the reflection and the lower the transmission.
*   **Pressure vs. Intensity Coefficients:** Pressure coefficients ($R_p, T_p$) relate to amplitude and can be greater than 1 or less than -1. Intensity coefficients ($R_I, T_I$) relate to power flow and are always between 0 and 1.
*   **Conservation of Energy:** For intensity, $R_I + T_I = 1$ is true if there is no absorption in the medium or at the boundary.
*   **Transmission Loss (TL):** Quantifies sound reduction in dB. Higher TL is better. $TL = -10 \log_{10}(T_I)$.
*   **Mass Law:** A fundamental principle stating that TL increases with frequency and mass per unit area.
*   **STC:** A single-number rating for building partitions, useful for speech frequencies, but has limitations.
*   **Coincidence Effect:** A phenomenon that can significantly reduce TL at specific frequencies for panels.

---

This concludes Module 2's topic on transmission and reflection coefficients and transmission loss. Understanding these concepts is fundamental to designing effective noise control solutions.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
