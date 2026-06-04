---
title: "Antenna Measurements"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 2: Microstrip antennas: Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7e1"
status: "completed"
scrapedAt: "2026-05-23T18:11:55.812Z"
---
# ANTENNA THEORY AND DESIGN
## Module 2: Microstrip Antennas: Radiation Mechanism
### Topic: Antenna Measurements

---

### Introduction

Antenna measurements are crucial for validating theoretical designs and ensuring that antennas perform as intended in real-world applications. For microstrip antennas, which are widely used in modern wireless communication systems, accurate measurement of their parameters is essential for their successful implementation. This topic will delve into the fundamental principles and practical aspects of antenna measurements, with a focus on microstrip antennas.

**Objective:** To understand the importance of antenna measurements, the key parameters measured, the measurement setup, and the techniques employed for characterizing microstrip antennas.

---

### 1. Importance of Antenna Measurements

*   **Validation of Theoretical Models:** Antenna theory provides analytical models for predicting antenna performance. Measurements are vital to confirm whether the designed antenna behaves according to these predictions.
*   **Quality Control:** In manufacturing, measurements ensure that each antenna meets the specified performance criteria.
*   **Troubleshooting and Optimization:** Measurement data can help identify performance issues and guide the optimization process for improved antenna characteristics.
*   **System Integration:** Understanding antenna performance through measurements is critical for its successful integration into a larger wireless system.
*   **Regulatory Compliance:** Certain antenna parameters are subject to regulatory standards, necessitating precise measurements.

---

### 2. Key Antenna Parameters Measured

Antenna measurements focus on characterizing the antenna's ability to transmit and receive electromagnetic waves efficiently and in specific directions. The following are the most commonly measured parameters:

#### 2.1. Radiation Pattern

*   **Definition:** The radiation pattern describes how an antenna radiates or receives electromagnetic energy in different directions. It's a graphical representation of the spatial distribution of radiated power.
*   **Types:**
    *   **Azimuth Pattern:** Radiation intensity in the horizontal plane (constant elevation).
    *   **Elevation Pattern:** Radiation intensity in the vertical plane (constant azimuth).
*   **Key Features of a Radiation Pattern:**
    *   **Main Lobe:** The direction of maximum radiation intensity.
    *   **Side Lobes:** Smaller lobes of radiation in directions other than the main lobe.
    *   **Nulls:** Directions where the radiation intensity is zero.
    *   **Beamwidth:** The angular width of the main lobe, typically measured at the half-power points (Half Power Beamwidth - HPBW).
    *   **Directivity:** The ratio of the radiation intensity in a given direction to the average radiation intensity in all directions.
    *   **Gain:** Directivity multiplied by the radiation efficiency.
*   **Measurement Principle:** An antenna under test (AUT) is placed at a known distance from a transmitting or receiving antenna (probe antenna) and rotated around one or more axes. The signal strength received by the probe antenna is recorded as a function of the AUT's orientation.

#### 2.2. Gain and Directivity

*   **Definition:**
    *   **Directivity (D):** Measures the ability of an antenna to concentrate power in a particular direction. It's the ratio of the radiation intensity in the direction of the main lobe to the average radiation intensity over all directions.
    *   **Gain (G):** Similar to directivity but also accounts for the antenna's efficiency (losses due to mismatch and resistive losses). $G = \eta_r D$, where $\eta_r$ is the radiation efficiency.
*   **Measurement Techniques:**
    *   **Three-Antenna Method (Gain Comparison):** This is a common method for measuring gain. It involves comparing the received signal from the AUT with known reference antennas (e.g., standard gain horns).
        1.  Transmit from a known source to a receiving antenna (reference antenna 1), measure received power ($P_{R1}$).
        2.  Transmit from the same source to another receiving antenna (reference antenna 2), measure received power ($P_{R2}$).
        3.  Transmit from the same source to the AUT, measure received power ($P_{RAUT}$).
        4.  Using Friis transmission formula and relationships between power and gain, the gain of the AUT can be determined.
        *   **Formula (simplified):** $G_{AUT} = G_{R1} \times 10^{\frac{P_{RAUT} - P_{R1}}{10}}$ (assuming $G_{R1}$ is known and AUT and R1 are in the same far-field).
    *   **Absolute Gain Measurement:** Using a calibrated signal generator and a known antenna, absolute power levels can be determined, allowing for direct gain calculation.

#### 2.3. Radiation Efficiency ($\eta_r$)

*   **Definition:** The ratio of the power radiated by the antenna to the power delivered to the antenna terminals.
    $\eta_r = \frac{P_{rad}}{P_{in}}$, where $P_{rad}$ is the radiated power and $P_{in}$ is the input power.
*   **Measurement Techniques:**
    *   **Gain Method:** Radiation efficiency can be calculated from measured gain and directivity: $\eta_r = G/D$. Directivity can be calculated from the radiation pattern.
    *   **Input Power Measurement:** Measure the power delivered to the antenna terminals.
    *   **Radiated Power Measurement:** Measure the total power radiated over all directions (can be complex).
    *   **Loss Tangent Method:** For microstrip antennas, the dielectric loss tangent of the substrate can be estimated, and combined with conductor and surface wave losses, to approximate efficiency.

#### 2.4. Input Impedance ($Z_{in}$) and Return Loss (RL) / Voltage Standing Wave Ratio (VSWR)

*   **Definition:**
    *   **Input Impedance:** The impedance seen at the antenna's feed point.
    *   **Return Loss (RL):** A measure of the power reflected back to the source due to impedance mismatch. It's expressed in decibels (dB). Higher RL means better match. $RL = -20 \log_{10} |\Gamma|$, where $\Gamma$ is the reflection coefficient.
    *   **Voltage Standing Wave Ratio (VSWR):** Another measure of impedance mismatch, representing the ratio of the maximum to minimum voltage on the transmission line. Lower VSWR indicates a better match. $VSWR = \frac{1 + |\Gamma|}{1 - |\Gamma|}$.
*   **Measurement Techniques:**
    *   **Vector Network Analyzer (VNA):** This is the primary instrument for measuring input impedance, return loss, and VSWR. The AUT is connected to one port of the VNA, and the VNA measures the reflection coefficient ($\Gamma$) as a function of frequency.
    *   **Calibration:** Proper calibration of the VNA is crucial for accurate measurements. This involves performing measurements with known standards (open, short, load, through).

#### 2.5. Bandwidth

*   **Definition:** The range of frequencies over which the antenna meets specified performance criteria (e.g., a minimum gain, a maximum VSWR of 2:1, or a specified radiation pattern).
*   **Types:**
    *   **Impedance Bandwidth:** Based on the return loss or VSWR (e.g., frequency range where VSWR < 2).
    *   **Gain Bandwidth:** Based on the variation of gain over frequency.
    *   **Pattern Bandwidth:** Based on the stability of the radiation pattern over frequency.
*   **Measurement:** Determined by sweeping the frequency and observing the behavior of the relevant parameter (RL, VSWR, gain, etc.) over that range.

#### 2.6. Polarization

*   **Definition:** The orientation of the electric field vector of the radiated wave. Can be linear (vertical, horizontal), circular (left-hand or right-hand), or elliptical.
*   **Measurement Techniques:**
    *   **Cross-Polarization Measurement:** Measure the antenna's response to signals with orthogonal polarization. The ratio of the co-polarized signal to the cross-polarized signal indicates the polarization purity.
    *   **Circular Polarization Measurement:** Requires specialized techniques and probes to determine the axial ratio and sense of rotation.

---

### 3. Antenna Measurement Setup

A typical antenna measurement setup involves the following components:

*   **Antenna Under Test (AUT):** The antenna whose characteristics are being measured.
*   **Transmitting Antenna (or Source Antenna):** Used to generate the electromagnetic field in which the AUT is placed. This could be a standard gain horn or another antenna.
*   **Receiving Antenna (Probe Antenna):** Used to capture the radiated field from the AUT.
*   **Positioning System:** A controlled mechanical system (e.g., an anechoic chamber with a turntable, elevation over azimuth positioner) to orient the AUT in various directions to map the radiation pattern.
*   **Signal Source:** A signal generator providing a stable RF signal at the desired frequencies.
*   **Receiving Equipment:**
    *   **Spectrum Analyzer or Spectrum Analyzer with Tracking Generator:** To measure signal power over a frequency range.
    *   **Vector Network Analyzer (VNA):** Essential for impedance and reflection measurements.
    *   **Power Meter:** For absolute power measurements.
*   **Data Acquisition and Processing System:** Computer software to control the measurement instruments, positioner, and process the acquired data to generate plots and reports.

#### 3.1. Measurement Environments

The choice of measurement environment is crucial to obtain accurate results and avoid interference.

*   **Anechoic Chamber:**
    *   **Description:** A specially designed room whose internal surfaces are lined with RF absorbing materials (pyramids or wedges made of ferrite or foam). This minimizes reflections from the walls, floor, and ceiling, creating a "free-space" environment.
    *   **Purpose:** Essential for accurate radiation pattern and gain measurements by simulating far-field conditions and preventing unwanted reflections from interfering with the measurement.
    *   **Reference:** Balanis (4th Ed.) Chapter 13 discusses measurement techniques and environments.

*   **Open Field Range:**
    *   **Description:** An outdoor area, ideally far from reflective surfaces (buildings, trees, ground).
    *   **Requirements:** Requires careful site selection and often utilizes ground screens or absorbing materials to mitigate ground reflections.
    *   **Limitations:** Susceptible to external interference from radio transmissions and environmental conditions.

*   **Compact Range:**
    *   **Description:** An indoor facility that uses a large parabolic reflector to create a plane wave illumination of the AUT. It simulates far-field conditions in a smaller indoor space.
    *   **Advantages:** Offers controlled environment and can be more cost-effective than large anechoic chambers for certain applications.

#### 3.2. Far-Field vs. Near-Field Measurements

*   **Far-Field:** The region where the electromagnetic field can be approximated as a plane wave, and the phase variation across the antenna aperture is negligible.
    *   **Far-Field Distance ($R_{ff}$):** Typically defined by $R_{ff} \geq \frac{2D^2}{\lambda}$ (Fraunhofer region) or $R_{ff} \geq \frac{20D^2}{\lambda}$ (more stringent) or $R_{ff} \geq 10\lambda$, where $D$ is the largest dimension of the antenna and $\lambda$ is the wavelength.
    *   **Measurement:** Requires a significant separation between the transmitting and receiving antennas.

*   **Near-Field:** The region close to the antenna where the field distribution is complex and includes reactive components.
    *   **Near-Field Measurement:** Involves scanning the AUT in its near-field region using a probe antenna. The measured near-field data is then processed using mathematical transformations (e.g., Fourier transforms) to synthesize the far-field characteristics.
    *   **Advantages:** Allows for measurements in smaller spaces, can be faster, and provides more detailed information about the antenna's amplitude and phase distribution.
    *   **Disadvantages:** Requires sophisticated data processing techniques and precise mechanical scanning.
    *   **Reference:** Balanis (4th Ed.) Chapter 13 provides a good overview of near-field measurements.

---

### 4. Measurement of Microstrip Antennas

Microstrip antennas present specific challenges and considerations during measurement due to their planar structure and potential substrate effects.

#### 4.1. Feed Point Characterization

*   **Coaxial Probe Feed:** The most common method for feeding microstrip antennas. The impedance matching at the probe feed point is critical.
    *   **Measurement:** VNA is used to measure the return loss and VSWR at the probe. The position of the probe affects the input impedance, and measurement helps optimize this position for broadband matching.
    *   **Example:** A microstrip patch antenna fed by a coaxial probe might show a VSWR of 1.2:1 at its resonant frequency when optimally probed.

*   **Line Feed (Edge Feed):** The microstrip line directly connects to the radiating patch.
    *   **Measurement:** Requires characterizing the transition from the microstrip line to the radiating patch. VNA measurements are used to find the impedance match and resonant frequency.

*   **Coupled Feed (Slot-Coupled, Aperture-Coupled):** Feed mechanism is located on a separate layer and coupled via an aperture or slot.
    *   **Measurement:** Requires measuring the performance of both the feed structure and the radiating patch, often necessitating consideration of the entire stacked structure.

#### 4.2. Radiation Pattern Measurement of Microstrip Antennas

*   **Setup:** Typically performed in an anechoic chamber.
    *   The AUT is mounted on a non-metallic support structure.
    *   A source antenna (often a linearly polarized horn antenna) transmits a signal.
    *   The AUT is rotated using a positioner.
    *   The signal received by a probe antenna (or the AUT itself, if used for reception) is recorded.
*   **Polarization Considerations:**
    *   For linearly polarized microstrip antennas, the polarization of the source antenna should match the desired polarization of the AUT's main lobe.
    *   To measure cross-polarization, the source antenna's polarization is rotated by 90 degrees relative to the AUT's main polarization.
*   **Example:** To measure the principal E-plane pattern of a linear patch antenna, the source antenna's polarization would be aligned with the direction of the patch's dominant electric field, and the AUT would be rotated in the plane containing that field.

#### 4.3. Bandwidth Measurement of Microstrip Antennas

*   **VSWR/Return Loss Bandwidth:** The frequency range where VSWR $\leq$ 2 (or RL $\geq$ 10 dB). VNA measurements are key.
*   **Gain Bandwidth:** The frequency range where the gain is within a specified tolerance (e.g., $\pm$ 1 dB of peak gain). Requires gain comparison measurements over a frequency sweep.
*   **Pattern Bandwidth:** The frequency range where the radiation pattern remains relatively stable (e.g., main lobe direction and beamwidth don't change drastically).

#### 4.4. Substrate and Dielectric Effects

*   **Influence:** The dielectric constant and thickness of the substrate significantly affect the performance of microstrip antennas, including resonant frequency, bandwidth, and radiation efficiency.
*   **Measurement Challenges:**
    *   Variations in substrate material properties can lead to discrepancies between simulated and measured results.
    *   Surface wave excitation on thicker substrates can affect radiation patterns and efficiency.
*   **Mitigation:**
    *   Precise characterization of the substrate material properties using techniques like resonant cavity methods or specialized VNA probes.
    *   Ensuring the measurement environment and setup account for potential surface wave propagation.

---

### 5. Calibration of Measurement Equipment

*   **Importance:** Accurate antenna measurements are highly dependent on the proper calibration of all test equipment.
*   **VNA Calibration:**
    *   **SOLT (Short, Open, Load, Through):** A standard calibration method for two-port network measurements.
    *   **TOSL (Through, Open, Short, Load):** Another common calibration procedure.
    *   **User Calibration:** Ensures that the measurement system accurately represents the signal at the reference plane (e.g., the end of the coaxial cable connected to the AUT).
*   **Antenna Calibration:**
    *   **Standard Gain Antennas:** Used to calibrate the gain of other antennas through comparison methods.
    *   **Certified Reference Antennas:** Antennas with precisely known characteristics, used as a benchmark.

---

### 6. Standards and Regulations

*   **IEEE Standards:** The Institute of Electrical and Electronics Engineers (IEEE) publishes standards for antenna measurements, such as IEEE Std 149-2007 (Standard for Antenna Measurements).
*   **International Standards:** Organizations like the International Telecommunication Union (ITU) also have recommendations and standards related to antenna performance.

---

### 7. Important Points to Remember

*   **Far-field conditions** are essential for accurate radiation pattern and gain measurements.
*   **Anechoic chambers** are the preferred environment for minimizing reflections.
*   **Vector Network Analyzers (VNAs)** are indispensable for characterizing impedance, return loss, and VSWR.
*   **Calibration** of all test equipment is paramount for reliable results.
*   **Substrate properties** significantly influence microstrip antenna performance and must be considered during measurement.
*   **Polarization matching** between the source and AUT is crucial for accurate pattern measurements.
*   **Near-field measurements** offer an alternative but require advanced processing.
*   **Reference textbooks like Balanis** provide detailed theoretical background and practical guidance on antenna measurement techniques.

---

### Practice Questions

1.  **Explain the necessity of antenna measurements in antenna theory and design.** (CO1, K3)
    *   **Answer:** Antenna measurements are vital for validating theoretical models, ensuring manufactured antennas meet specifications, troubleshooting performance issues, aiding system integration, and complying with regulatory requirements. They bridge the gap between theoretical predictions and real-world performance.

2.  **Describe the process of measuring the radiation pattern of a microstrip patch antenna.** What environmental conditions are ideal for this measurement? (CO2, K4)
    *   **Answer:** The radiation pattern is measured by rotating the Antenna Under Test (AUT) in a controlled environment while a transmitting antenna illuminates it. The signal received by a probe antenna (or the AUT itself) is recorded as a function of the AUT's orientation. Ideal conditions involve an anechoic chamber to minimize reflections. The source antenna's polarization must be aligned with the expected polarization of the AUT's main lobe.

3.  **What is Return Loss, and how is it measured using a Vector Network Analyzer (VNA)?** How does Return Loss relate to VSWR? (CO2, K4)
    *   **Answer:** Return Loss (RL) measures the power reflected back due to impedance mismatch, expressed in dB. A VNA measures the reflection coefficient ($\Gamma$) by transmitting a signal and analyzing the reflected signal. RL is calculated as $RL = -20 \log_{10} |\Gamma|$. A higher RL indicates a better impedance match. VSWR is related by $VSWR = \frac{1 + |\Gamma|}{1 - |\Gamma|}$. A good match (high RL) corresponds to a low VSWR.

4.  **Discuss the advantages and disadvantages of near-field versus far-field antenna measurements.** (CO1, K3)
    *   **Answer:**
        *   **Far-field:** Simulates real-world conditions more directly; requires large separation distances, demanding large measurement spaces (anechoic chambers or open fields).
        *   **Near-field:** Can be performed in smaller spaces; provides detailed field distribution; requires complex mathematical processing to convert near-field to far-field data; susceptible to probe positioning errors.

5.  **For a microstrip patch antenna, what specific parameters related to its input are measured using a VNA, and why are they important?** (CO2, K4)
    *   **Answer:** The key parameters measured using a VNA are **input impedance ($Z_{in}$)** and **return loss (RL) / VSWR**. These are crucial for ensuring efficient power transfer from the feed line to the antenna, minimizing reflections, and determining the antenna's bandwidth. An impedance match is essential for the antenna to radiate effectively.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### References

*   **Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.). Wiley.** (Chapters on Measurement Techniques)
*   **Garg, R. (2001). *Microstrip Antenna Design Handbook*. Artech.** (Sections on characterization and measurement of microstrip antennas)
*   **Pozar, D. M. (2012). *Microwave Engineering* (4th ed.). Wiley India.** (Chapters on microwave measurements and VNAs)
*   **Milligan, T. A. (2005). *Modern Antenna Design* (2nd ed.). IEEE PRESS, Wiley Interscience.** (Sections on practical antenna measurements)