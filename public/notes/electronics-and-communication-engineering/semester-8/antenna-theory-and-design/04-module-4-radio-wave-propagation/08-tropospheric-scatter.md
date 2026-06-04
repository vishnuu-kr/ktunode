---
title: "Tropospheric scatter"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 4: Radio Wave Propagation"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7f7"
status: "completed"
scrapedAt: "2026-05-23T18:12:12.242Z"
---
# ANTENNA THEORY AND DESIGN

## Module 4: Radio Wave Propagation

### Topic: Tropospheric Scatter

---

### Introduction to Tropospheric Scatter

Tropospheric scatter, also known as troposcatter or UHF scatter, is a mode of radio wave propagation that allows communication beyond the normal line-of-sight (LOS) range. It relies on the scattering of radio waves by irregularities and variations in the refractive index of the atmosphere within the troposphere. This phenomenon is particularly important for extending the range of ultra-high frequency (UHF) and microwave frequencies, typically between 300 MHz and 3 GHz, though it can extend to higher frequencies.

This topic aligns with **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)**.

---

### 1. The Troposphere and Its Role in Propagation

*   **Definition of Troposphere:** The troposphere is the lowest layer of Earth's atmosphere, extending from the surface up to about 7-15 km (4-9 miles) depending on latitude and season. It is characterized by significant variations in temperature, pressure, and water vapor content.
*   **Refractive Index of the Atmosphere:** The refractive index ($n$) of the atmosphere is slightly greater than 1 and varies with atmospheric conditions. It is defined as $n = 1 + \delta$, where $\delta$ is a small quantity. The variation in refractive index is influenced by:
    *   **Temperature:** Decreases with altitude.
    *   **Pressure:** Decreases with altitude.
    *   **Water Vapor:** Varies significantly with altitude and location, and has a strong impact on the refractive index.
*   **Refractive Index Gradient:** The rate of change of the refractive index with altitude ($\frac{dn}{dh}$) is crucial. In the troposphere, the refractive index generally decreases with altitude, causing radio waves to bend or refract towards the Earth's surface.
*   **Standard Atmosphere vs. Non-Standard Atmosphere:**
    *   **Standard Atmosphere:** A theoretical model where the refractive index decreases uniformly with altitude. This leads to standard refraction, where radio waves follow a slightly curved path.
    *   **Non-Standard Atmosphere:** Occurs when atmospheric conditions deviate from the standard, leading to anomalous refraction, ducting, or fading. Tropospheric scatter is a result of such non-standard conditions, specifically localized turbulence and variations in the refractive index.

---

### 2. The Mechanism of Tropospheric Scatter

*   **Scattering by Irregularities:** Tropospheric scatter relies on the scattering of radio waves by small-scale, turbulent, and randomly distributed variations in the atmospheric refractive index. These variations act as effective scatterers.
*   **Rayleigh Scattering vs. Mie Scattering:**
    *   **Rayleigh Scattering:** Occurs when the scattering particles (refractive index variations) are much smaller than the wavelength of the radio wave ($\lambda$). This is typical for lower frequencies and smaller atmospheric fluctuations.
    *   **Mie Scattering:** Occurs when the scattering particles are comparable in size to the wavelength. This is more relevant for higher frequencies and larger atmospheric fluctuations.
*   **Volume Scattering:** The scattering process is considered to be a volume scattering phenomenon, where the radio waves are scattered in many directions by a large volume of the troposphere.
*   **Forward Scatter:** The most effective scattering for tropospheric scatter communication is forward scatter, where the scattered energy is directed generally in the direction of propagation.
*   **Antenna Beam Overlap:** For effective tropospheric scatter communication, the antenna beams of the transmitting and receiving stations must intersect at a common volume within the troposphere. This common volume is where the scattering occurs.

**Key Concept (Balanis, Chapter 12):** The propagation of radio waves through the troposphere is significantly influenced by the variations in the dielectric constant of the atmosphere. These variations, particularly turbulent fluctuations, can cause scattering of electromagnetic energy.

---

### 3. Key Parameters and Characteristics of Tropospheric Scatter Links

*   **Effective Earth Radius:** To simplify calculations involving refraction, the Earth's radius is often modified. For standard refraction, the effective Earth radius ($kR_e$) is typically $4/3$ times the actual Earth radius ($R_e$), accounting for the average decrease in refractive index with altitude.
*   **Scattering Angle ($\theta$):** The angle between the direction of the transmitted wave and the direction of the received wave. This is a critical parameter affecting the strength of the scattered signal. Smaller scattering angles generally result in stronger signals.
*   **Antenna Beamwidth and Gain:** Wide antenna beams are often used in tropospheric scatter to illuminate a larger scattering volume. High antenna gain is also beneficial to compensate for the loss of signal strength due to scattering.
*   **Frequency Dependence:** Tropospheric scatter is most effective in the UHF band (300 MHz - 3 GHz). As frequency increases, the scattering becomes less efficient, and the size of atmospheric irregularities required for effective scattering becomes comparable to the wavelength. Higher frequencies are also more susceptible to atmospheric absorption by water vapor and oxygen.
*   **Distance:** Tropospheric scatter can extend communication distances from approximately 150 km to 1000 km, significantly beyond the LOS range.
*   **Fading:** Tropospheric scatter signals are subject to significant fading due to:
    *   **Turbulence Fluctuations:** Variations in the intensity and location of scattering regions.
    *   **Multipath Effects:** Scattering from different regions at slightly different times.
    *   **Atmospheric Absorption:** Especially at higher frequencies.
    *   **Antenna Pattern Variations:** Beam pointing errors.
*   **Diversity Techniques:** To combat fading, diversity techniques are commonly employed, such as:
    *   **Frequency Diversity:** Using two or more frequencies simultaneously.
    *   **Space Diversity:** Using two or more antennas at different locations.
    *   **Polarization Diversity:** Using different polarizations for transmission and reception.

**Key Concept (Collin, Chapter 9):** The analysis of tropospheric scatter involves understanding the interaction of radio waves with turbulent atmospheric volumes. The scattering cross-section of these volumes determines the efficiency of the propagation mechanism.

---

### 4. Antenna Requirements for Tropospheric Scatter

*   **High Gain:** Essential to provide sufficient power to the scattering volume and to capture the weak scattered signals.
*   **Narrow Beamwidth (in the vertical plane):** To direct the energy into a specific scattering volume and minimize interference.
*   **Wide Beamwidth (in the horizontal plane):** To allow for some misalignment due to atmospheric drift or imprecise aiming.
*   **Parabolic Reflectors (Dish Antennas):** Commonly used due to their high gain and ability to focus energy.
*   **Horn Antennas:** Can also be used, especially for shorter ranges or as feeds for reflectors.
*   **Antenna Height:** The height of the antennas is critical for determining the location of the common scattering volume and the grazing angle of the beams. Higher antennas generally result in longer ranges.

**Example (Balanis, Chapter 12):** A typical troposcatter link might use two parabolic antennas with diameters of 10-30 meters, providing gains of 40-50 dB at frequencies around 1 GHz.

**Key Concept (Kraus, Chapter 15):** High-gain, directional antennas are paramount for tropospheric scatter systems to effectively illuminate the scattering volume and capture the scattered signal.

---

### 5. Tropospheric Scatter Link Budget

A link budget analysis is essential to determine the feasibility of a tropospheric scatter link and to estimate the required transmitter power and antenna gains. The basic equation for received power ($P_r$) is:

$P_r = P_t \cdot G_t \cdot G_r \cdot \left(\frac{\lambda}{4\pi}\right)^2 \cdot \frac{\sigma_v}{V} \cdot \frac{1}{R_{sc}^2}$

Where:
*   $P_t$: Transmitted power.
*   $G_t$: Transmit antenna gain.
*   $G_r$: Receive antenna gain.
*   $\lambda$: Wavelength.
*   $\sigma_v$: Volume scattering cross-section per unit volume (dependent on atmospheric conditions and frequency).
*   $V$: Volume of the common scattering region.
*   $R_{sc}$: Distance to the scattering region.

**Important Note:** This is a simplified representation. Detailed link budget calculations involve atmospheric propagation factors, antenna beam coupling, and statistical models for fading.

**Key Concept (Raju, Chapter 10):** The link budget for troposcatter links must account for the significant losses associated with scattering and the reduction in signal strength due to the vast distances and atmospheric effects.

---

### 6. Applications of Tropospheric Scatter

*   **Long-Range Communication:** Used for extending communication links beyond the horizon where LOS is not possible.
*   **Military Communications:** Reliable communication in challenging terrain and over long distances.
*   **Remote Area Communication:** Connecting isolated communities or installations.
*   **Backup for Terrestrial Links:** Providing redundancy for microwave links.
*   **Point-to-Point Communication:** Establishing communication between two fixed points.

---

### 7. Comparison with Other Propagation Modes

*   **Line-of-Sight (LOS) Propagation:** Direct path between antennas. Limited by Earth's curvature and obstructions. Higher frequencies (microwaves) typically use LOS.
*   **Ground Wave Propagation:** Follows the curvature of the Earth, especially at lower frequencies (LF, MF). Range is limited by Earth's conductivity and frequency.
*   **Skywave Propagation:** Radio waves reflected or refracted by the ionosphere. Effective for HF frequencies (3-30 MHz). Range and reliability depend on ionospheric conditions.
*   **Tropospheric Scatter:** Extends UHF/microwave communication beyond LOS by scattering off atmospheric irregularities. Subject to fading and requires high-gain antennas.

---

### Important Points to Remember

*   Tropospheric scatter relies on **scattering by atmospheric irregularities** in the troposphere.
*   It is effective for **UHF and microwave frequencies** (300 MHz - 3 GHz).
*   It extends communication range **beyond the line-of-sight**.
*   **Antenna beam overlap** in a common scattering volume is crucial.
*   **High-gain antennas** are essential.
*   The mode is characterized by significant **fading**, necessitating diversity techniques.
*   **Frequency and distance** are key parameters affecting performance.

---

### Practice Questions and Exercises

**Question 1:**
What is the primary mechanism responsible for tropospheric scatter propagation?
a) Reflection from the ionosphere
b) Diffraction around Earth's curvature
c) Scattering by turbulent irregularities in the troposphere
d) Refraction due to the Earth's magnetic field

**Answer:** c) Scattering by turbulent irregularities in the troposphere

**Question 2:**
Which frequency range is typically most suitable for tropospheric scatter communication?
a) HF (3-30 MHz)
b) VHF (30-300 MHz)
c) UHF (300 MHz - 3 GHz)
d) EHF (30-300 GHz)

**Answer:** c) UHF (300 MHz - 3 GHz)

**Question 3:**
Explain why high-gain antennas are necessary for tropospheric scatter links. (Knowledge Level: K2)

**Answer:** High-gain antennas are necessary to concentrate the transmitted power into the relatively small scattering volume in the troposphere and to efficiently capture the weak scattered signals that are dispersed in many directions. This compensates for the significant signal loss inherent in the scattering process.

**Question 4:**
Describe two types of fading encountered in tropospheric scatter and one technique to mitigate it. (Knowledge Level: K2)

**Answer:**
*   **Types of Fading:**
    1.  **Turbulence Fading:** Caused by variations in the intensity, size, and location of refractive index irregularities within the scattering volume.
    2.  **Multipath Fading:** Occurs when signals scattered from different atmospheric regions arrive at the receiver with slightly different time delays, causing constructive or destructive interference.
*   **Mitigation Technique:** **Frequency Diversity** can be used. By transmitting and receiving on two or more frequencies simultaneously, there is a higher probability that at least one of the signals will experience less fading at any given time.

**Question 5:**
A tropospheric scatter link operates at 1 GHz. The antennas have a gain of 45 dB each. If the transmitter power is 1 kW, estimate the received power assuming ideal scattering conditions (this is a conceptual question and does not require detailed calculations, focus on the principles). What factors would reduce the actual received power? (Knowledge Level: K2 for principles, K4 for analysis of factors)

**Answer:**
*   **Conceptual Estimation:** A 1 kW transmitter with 45 dB gain antennas suggests a powerful link. However, tropospheric scatter is inherently a lossy propagation mode due to scattering. The received power will be significantly lower than what might be expected from a simple free-space path calculation due to:
    *   The scattering process itself (energy is dispersed).
    *   The vast distances involved (hundreds of kilometers).
    *   Atmospheric absorption and turbulence.
    *   The efficiency of the common volume coupling.
    *   The received power will likely be in the micro-watt or milli-watt range, requiring sensitive receivers.

*   **Factors Reducing Actual Received Power:**
    1.  **Atmospheric Attenuation:** Absorption by water vapor and oxygen, especially at higher frequencies.
    2.  **Fading:** As discussed in Question 4, due to turbulence and multipath.
    3.  **Antenna Misalignment:** If the antennas are not precisely pointed to create the optimal common scattering volume.
    4.  **Non-ideal Scattering:** The scattering cross-section ($\sigma_v$) is not constant and depends on atmospheric conditions.
    5.  **Interference:** From other radio sources.
    6.  **Noise:** Thermal noise in the receiver system.

---

This concludes the study notes on Tropospheric Scatter. Ensure to review the relevant chapters in Balanis, Collin, and other recommended textbooks for a deeper understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
