---
title: "Measurement of Antenna Range"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 2: Microstrip antennas : Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff775"
status: "completed"
scrapedAt: "2026-05-23T18:12:34.001Z"
---
# Module 2: Microstrip Antennas - Radiation Mechanism

## Topic: Measurement of Antenna Range

### 1. Introduction to Antenna Range Measurements

Antenna range measurements are crucial for characterizing the performance of an antenna. They involve evaluating various antenna parameters in a controlled environment to ensure the accuracy and reliability of the measurements. This topic focuses on understanding the fundamental principles and practical aspects of setting up and conducting antenna range measurements, particularly relevant for microstrip antennas.

**Key Concept:** An antenna range is a facility designed to measure the electromagnetic radiation characteristics of an antenna under test (AUT).

**Importance:**
*   **Validation of Design:** To confirm if the fabricated antenna meets the design specifications.
*   **Parameter Extraction:** To accurately measure parameters like radiation pattern, gain, directivity, impedance, etc.
*   **Quality Control:** To ensure consistency and performance of manufactured antennas.
*   **Troubleshooting:** To identify and diagnose issues with antenna performance.

### 2. Fundamental Principles of Antenna Range Measurements

The core principle behind antenna range measurements is to create a controlled electromagnetic environment where the AUT can radiate or receive signals without significant interference or distortion from its surroundings. This is typically achieved by maintaining a sufficient separation distance between the transmitting antenna, receiving antenna, and the AUT.

**Key Concepts:**
*   **Far-field:** The region where the electromagnetic field behaves as a plane wave. This is the ideal region for measuring radiation patterns.
*   **Near-field:** The region close to the antenna where the field structure is complex and strongly dependent on the antenna's physical dimensions and current distribution.
*   **Fresnel Region:** The transition region between the near-field and far-field.
*   **Friis Transmission Formula:** A fundamental equation used to relate the power received to the power transmitted in a free-space environment.
    *   $P_r = P_t G_t G_r \left(\frac{\lambda}{4\pi R}\right)^2$
    *   Where:
        *   $P_r$: Received power
        *   $P_t$: Transmitted power
        *   $G_t$: Gain of the transmitting antenna
        *   $G_r$: Gain of the receiving antenna
        *   $\lambda$: Wavelength
        *   $R$: Distance between antennas

**Learning Outcome Addressed:**
*   CO1: Analyze the radiation mechanism of antennas (K3) - Understanding far-field and the Friis formula helps in analyzing how antennas radiate power.
*   CO2: Design and measure the parameters of a microstrip antenna (K4) - This topic directly supports the measurement aspect of this CO.

### 3. Types of Antenna Ranges

Antenna ranges are classified based on the separation distance between the transmitting antenna and the AUT. The choice of range type depends on the antenna's size, frequency of operation, and the accuracy required.

#### 3.1. Far-Field Range

This is the most common type of range for measuring radiation patterns and gain.

**Key Concept:** The separation distance ($R$) between the transmitting antenna and the AUT is large enough to ensure that the AUT is illuminated by a plane wave.

**Range Requirements (based on Balanis, 4th Ed. and Garg, 1/e):**
*   **Far-Field Criterion 1:** $R \ge 2D^2/\lambda$, where $D$ is the largest dimension of the AUT.
*   **Far-Field Criterion 2:** $R \ge 10\lambda$ (a commonly used rule of thumb for many applications).
*   **Far-Field Criterion 3:** $R \ge \sqrt{20L^3/\lambda}$, where $L$ is the aperture dimension.

**Practical Considerations:**
*   **Large Open Area:** Requires a significant amount of land.
*   **Reduced Incidence Angle Variation:** The transmitting antenna should be far enough so that the phase variation across the aperture of the AUT is minimal. The maximum phase error should be less than $\pi/8$ or $\pi/4$ radians. This leads to the requirement:
    *   $R \ge \frac{\pi D^2}{8\lambda}$ (for $\pi/8$ phase variation)
    *   $R \ge \frac{D^2}{2\lambda}$ (for $\pi/4$ phase variation, derived from geometric optics)

**Example:** For a microstrip patch antenna with a diameter of 5 cm operating at 10 GHz ($\lambda = 3$ cm), the minimum far-field distance would be:
*   Using $R \ge 2D^2/\lambda$: $R \ge 2 \times (0.05)^2 / 0.03 \approx 0.167$ meters.
*   Using $R \ge 10\lambda$: $R \ge 10 \times 0.03 = 0.3$ meters.
*   Using $R \ge D^2/(2\lambda)$: $R \ge (0.05)^2 / (2 \times 0.03) \approx 0.042$ meters.
*   Using $R \ge \pi D^2/(8\lambda)$: $R \ge \pi \times (0.05)^2 / (8 \times 0.03) \approx 0.082$ meters.

The most stringent criterion typically dictates the minimum distance. In this case, $0.167$ meters or $0.3$ meters are more realistic for achieving good plane wave illumination.

#### 3.2. Near-Field Range

Used for detailed characterization of the antenna's near-field behavior.

**Key Concept:** The AUT is placed in the near-field or Fresnel region of the transmitting antenna.

**Types of Near-Field Ranges:**
*   **Near-Field Planar Scanner:** The AUT is moved along a planar surface, and the received signal is measured at various points. This data is then processed using mathematical transforms (like Fourier transforms) to obtain far-field patterns.
*   **Near-Field Spherical Scanner:** The AUT is rotated on a spherical surface.
*   **Near-Field Cylindrical Scanner:** The AUT is rotated around a cylindrical path.

**Advantages:**
*   **Compact:** Requires less physical space than far-field ranges.
*   **Detailed Information:** Provides information about the near-field distribution, which can be useful for understanding the radiation mechanism.

**Disadvantages:**
*   **Complex Data Processing:** Requires sophisticated algorithms and equipment.
*   **Susceptible to Reflections:** More prone to multipath interference.

**Learning Outcome Addressed:**
*   CO1: Analyze the radiation mechanism of antennas (K3) - Near-field measurements directly probe the complex fields close to the antenna.
*   CO2: Design and measure the parameters of a microstrip antenna (K4) - Allows for detailed characterization and validation of microstrip antenna designs.

#### 3.3. Compact Range

A compromise between far-field and near-field ranges, often used for larger antennas or when space is limited.

**Key Concept:** Uses a parabolic reflector to collimate the electromagnetic waves from a feed antenna into a plane wave that illuminates the AUT.

**Working Principle:**
1.  A feed antenna (usually a horn) illuminates a large parabolic reflector.
2.  The reflector converts the spherical wavefront from the feed into a plane wave.
3.  This plane wave illuminates the AUT, creating a simulated far-field environment in a relatively smaller space.

**Advantages:**
*   **Reduced Space Requirement:** Significantly smaller than a conventional far-field range.
*   **Improved Plane Wave Quality:** Can achieve good plane wave illumination over a substantial area.

**Disadvantages:**
*   **High Cost:** Requires precise fabrication of large reflectors.
*   **Reflector-Induced Errors:** Side lobes and diffraction from the reflector can introduce errors.
*   **Edge Illumination:** The edges of the reflector can cause unwanted reflections.

**Reference:** Balanis (4th Ed.) and Garg (1/e) discuss the design and challenges of compact ranges.

**Learning Outcome Addressed:**
*   CO2: Design and measure the parameters of a microstrip antenna (K4) - Essential for measuring large microstrip arrays or when space is a constraint.

### 4. Key Components of an Antenna Range

Regardless of the type, an antenna range typically consists of the following key components:

#### 4.1. Transmitting and Receiving Antennas

*   **Transmitting Antenna:** Generates the electromagnetic signal. Often a standard gain horn or a calibrated antenna.
*   **Receiving Antenna:** The Antenna Under Test (AUT).
*   **Reference Antenna:** Used for calibration and to establish a baseline measurement (e.g., to determine free-space path loss).

#### 4.2. Positioners

Used to orient the AUT in specific directions to measure different aspects of its radiation pattern.

*   **Gimbal Systems:** Allow rotation in two or three orthogonal axes (e.g., azimuth and elevation).
*   **Linear Positioners:** Move antennas along a straight line.

**Importance:** Crucial for obtaining full 3D radiation patterns.

#### 4.3. Measurement Equipment

*   **Vector Network Analyzer (VNA):** Measures scattering parameters (S-parameters), including reflection coefficient (S11) for impedance matching and transmission coefficient (S21) for gain and radiation pattern measurements.
*   **Signal Generator:** Provides the RF signal.
*   **Spectrum Analyzer:** Analyzes the frequency content of the received signal.
*   **Power Meter:** Measures signal power.
*   **Data Acquisition and Control System:** Automates the measurement process and records data.

#### 4.4. Measurement Environment

*   **Anechoic Chamber:** A specially designed room with RF-absorbent materials on its walls, ceiling, and floor to minimize reflections and create an "echo-free" environment. This is essential for accurate measurements.
*   **Outdoor Range:** A large, open area with minimal reflective surfaces. May require mitigation techniques for reflections.

**Key Concept:** Anechoic chambers are designed to absorb electromagnetic waves incident upon their surfaces, mimicking free-space conditions. The absorption levels are specified by standards like IEEE.

**Learning Outcome Addressed:**
*   CO2: Design and measure the parameters of a microstrip antenna (K4) - Understanding these components is vital for designing and executing measurement procedures.

### 5. Measurement of Antenna Parameters

Antenna range measurements are used to quantify various antenna characteristics.

#### 5.1. Radiation Pattern Measurement

**Definition:** The radiation pattern describes how the power radiated by an antenna is distributed in space. It is typically plotted in polar coordinates as a function of angle.

*   **3D Radiation Pattern:** A three-dimensional representation of the radiated power.
*   **2D Radiation Pattern:** Cross-sections of the 3D pattern, usually in the principal planes (e.g., azimuth and elevation planes).
*   **Main Lobe:** The direction of maximum radiation.
*   **Side Lobes:** Lobes of radiation in directions other than the main lobe.
*   **Back Lobe:** The lobe in the direction opposite to the main lobe.
*   **Beamwidth:** The angular width of the main lobe, usually measured at the half-power points (HPBW - Half Power Beamwidth).
*   **Nulls:** Directions where the radiated power is zero.

**Measurement Procedure (Far-Field Range):**
1.  Place the transmitting antenna and the AUT at a sufficient far-field distance.
2.  Connect the transmitting antenna to a signal generator and the AUT to a receiver or VNA.
3.  Rotate the AUT using the positioner to cover the desired angular range (e.g., 0-360 degrees in azimuth and 0-180 degrees in elevation).
4.  Record the received signal strength at each angular position.
5.  Plot the recorded data to obtain the radiation pattern.

**Learning Outcome Addressed:**
*   CO1: Analyze the radiation mechanism of antennas (K3) - Directly measures the outcome of the radiation mechanism.
*   CO2: Design and measure the parameters of a microstrip antenna (K4) - Essential for validating radiation characteristics.

#### 5.2. Gain Measurement

**Definition:** The gain of an antenna is a measure of how effectively it converts input power into radio waves radiated in a specific direction, compared to an isotropic radiator. It includes directivity and takes into account antenna efficiency.

*   **Gain (G):** $G = \eta D$, where $\eta$ is the antenna efficiency and $D$ is the directivity.
*   **Absolute Gain Measurement:** Comparing the received power from the AUT with a known calibrated antenna.
*   **Gain Transfer Method (Relative Gain):** Comparing the received power from the AUT to that of a reference antenna with a known gain.

**Measurement Procedure (Gain Transfer Method):**
1.  **Calibration:** Place a reference antenna with known gain ($G_{ref}$) at the AUT's position and measure the received power ($P_{rx,ref}$).
2.  **AUT Measurement:** Replace the reference antenna with the AUT and measure the received power ($P_{rx,AUT}$).
3.  **Gain Calculation:**
    *   Using Friis Transmission formula, we have:
        *   $P_{rx,ref} = P_{tx} G_{ref} G_{tx} \left(\frac{\lambda}{4\pi R}\right)^2$
        *   $P_{rx,AUT} = P_{tx} G_{AUT} G_{tx} \left(\frac{\lambda}{4\pi R}\right)^2$
    *   Dividing the two equations:
        *   $\frac{P_{rx,AUT}}{P_{rx,ref}} = \frac{G_{AUT}}{G_{ref}}$
    *   Therefore, $G_{AUT} = G_{ref} \times \frac{P_{rx,AUT}}{P_{rx,ref}}$

**Important Point:** Ensure that the transmitting antenna's beam is directed towards the AUT in all measurement positions for accurate gain comparison.

**Learning Outcome Addressed:**
*   CO2: Design and measure the parameters of a microstrip antenna (K4) - Directly measures a key performance parameter.

#### 5.3. Impedance Measurement (S11 Measurement)

**Definition:** The input impedance of an antenna determines how well it is matched to the transmission line connecting it to the transmitter or receiver. A good impedance match minimizes reflections and maximizes power transfer.

**Measurement Method:**
*   Using a Vector Network Analyzer (VNA).
*   The AUT is connected to one port of the VNA.
*   The VNA measures the reflection coefficient ($\Gamma$), which is related to the S11 parameter.
*   The reflection coefficient is typically expressed in dB as Return Loss (RL): $RL = -20 \log_{10} |\Gamma|$.
*   For microstrip antennas, the impedance is often designed to be 50 ohms for compatibility with standard coaxial connectors and transmission lines.

**Measurement Procedure:**
1.  Calibrate the VNA.
2.  Connect the AUT to the calibrated VNA.
3.  Measure the S11 parameter over the desired frequency range.
4.  Analyze the S11 plot (e.g., Smith Chart or return loss plot) to determine the impedance match and bandwidth.

**Learning Outcome Addressed:**
*   CO2: Design and measure the parameters of a microstrip antenna (K4) - Crucial for assessing the suitability of a microstrip antenna for a system.

#### 5.4. Bandwidth Measurement

**Definition:** The bandwidth of an antenna is the range of frequencies over which its performance is acceptable. Common criteria for bandwidth include:
*   **VSWR (Voltage Standing Wave Ratio):** Typically defined as the frequency range for which VSWR $\le$ 2.
*   **Return Loss:** Typically defined as the frequency range for which RL $\ge$ 10 dB.
*   **Gain Bandwidth:** The frequency range over which the gain does not drop by more than a specified amount (e.g., 1 dB or 3 dB).
*   **Radiation Pattern Bandwidth:** The frequency range over which the radiation pattern characteristics (e.g., beamwidth, side lobe levels) remain within specifications.

**Measurement Procedure:**
*   Measure the relevant parameter (VSWR, RL, Gain, or Radiation Pattern) over a wide frequency range.
*   Identify the frequency limits where the specified performance criteria are met.

**Learning Outcome Addressed:**
*   CO2: Design and measure the parameters of a microstrip antenna (K4) - Assesses the operational frequency range of the microstrip antenna.

### 6. Sources of Error in Antenna Range Measurements

Minimizing errors is critical for obtaining accurate results.

#### 6.1. Environmental Errors

*   **Reflections:** Signals reflected from objects in the environment (walls, ground, equipment) can interfere with the direct signal, causing ripples in the measured pattern. Anechoic chambers are designed to minimize this.
*   **Atmospheric Effects:** Humidity, temperature gradients, and wind can affect propagation, especially at higher frequencies.
*   **Interference:** Unwanted signals from external sources.

#### 6.2. Equipment Errors

*   **Calibration Errors:** Imperfect calibration of test equipment.
*   **Connector Mismatches:** Poor quality or incompatible connectors.
*   **System Drift:** Changes in equipment performance over time.
*   **Noise:** Random fluctuations in the received signal.

#### 6.3. Range Setup Errors

*   **Insufficient Range Length:** Not meeting the far-field criteria leads to phase and amplitude errors in the illumination of the AUT.
*   **Antenna Alignment:** Improper alignment of the transmitting and receiving antennas.
*   **Positioner Accuracy:** Mechanical inaccuracies in the positioners.
*   **Non-Ideal Illumination:** The transmitting antenna's beam may not be perfectly plane or may have sidelobes that illuminate the AUT in unintended directions.

#### 6.4. AUT-Related Errors

*   **Antenna Support Structure:** The structure holding the AUT can scatter or absorb electromagnetic waves.
*   **Cabling:** Cables connecting to the AUT can affect its performance.
*   **Operator Error:** Incorrect setup or operation of the equipment.

**Mitigation Strategies:**
*   Use well-designed anechoic chambers.
*   Employ proper calibration procedures.
*   Utilize specialized techniques like the "three-antenna method" or "three-position method" for gain measurement to mitigate system uncertainties.
*   Ensure sufficient separation distances for far-field measurements.
*   Careful alignment and selection of positioners.
*   Use low-loss cables and appropriate connectors.

**Learning Outcome Addressed:**
*   CO2: Design and measure the parameters of a microstrip antenna (K4) - Understanding errors helps in designing better measurement strategies and interpreting results.

### 7. Microstrip Antenna Specific Measurement Considerations

Microstrip antennas, due to their planar nature and specific substrates, can have unique measurement considerations.

*   **Substrate Effects:** The dielectric properties of the substrate can influence impedance and radiation. Measurements should be performed on the actual substrate.
*   **Edge Effects:** The edges of the microstrip substrate can contribute to radiation, affecting the pattern.
*   **Probing:** For impedance measurements during design and tuning, direct probing of the feed point is common. Care must be taken not to perturb the fields significantly.
*   **Mounting:** The way the microstrip antenna is mounted (e.g., flush with a ground plane, on a chassis) can affect its performance. Measurements should reflect the intended application environment.
*   **Mutual Coupling:** For arrays of microstrip antennas, mutual coupling between elements needs to be considered and can be measured using S-parameters.

**Reference:** Garg (1/e) and Balanis (4th Ed.) provide detailed insights into the design and measurement of microstrip antennas.

**Learning Outcome Addressed:**
*   CO2: Design and measure the parameters of a microstrip antenna (K4) - Highlights the nuances of measuring microstrip antennas.

### 8. Practice Questions

1.  **Explain why antenna range measurements are essential for validating microstrip antenna designs.**
    *   **Answer:** Antenna range measurements are crucial because they provide empirical data that confirms whether a fabricated microstrip antenna meets the designed specifications for parameters like radiation pattern, gain, impedance, and bandwidth. This empirical validation is necessary because theoretical models often involve approximations, and real-world manufacturing tolerances can lead to deviations from expected performance. Without these measurements, the antenna's suitability for its intended application cannot be reliably ascertained.

2.  **What are the three common criteria for establishing the far-field distance ($R$) between two antennas? Provide their formulas and explain the physical significance of each.**
    *   **Answer:**
        1.  $R \ge 2D^2/\lambda$: This criterion ensures that the phase variation across the aperture of the AUT due to the curvature of the wavefront from the transmitting antenna is less than $\pi/2$. It's derived from geometric optics.
        2.  $R \ge 10\lambda$: This is a rule of thumb that provides a generous separation, generally ensuring good plane wave conditions for most practical antennas.
        3.  $R \ge \pi D^2/(8\lambda)$: This criterion ensures a smaller phase variation ($\pi/8$ radians) across the AUT's aperture, leading to more accurate radiation pattern measurements, especially for highly directive antennas.
        The physical significance of these criteria is to guarantee that the AUT is illuminated by a sufficiently plane electromagnetic wave, simulating the conditions in the far-field where the antenna's radiation characteristics are measured.

3.  **Describe the gain transfer method for measuring antenna gain. What is the formula used, and what assumptions are made?**
    *   **Answer:** The gain transfer method measures the gain of an unknown antenna (AUT) by comparing its received power to that of a reference antenna with a known gain, both illuminated by the same transmitting antenna.
    *   **Procedure:**
        1.  Measure received power ($P_{rx,ref}$) with a reference antenna of known gain ($G_{ref}$).
        2.  Replace the reference antenna with the AUT and measure received power ($P_{rx,AUT}$).
    *   **Formula:** $G_{AUT} = G_{ref} \times \frac{P_{rx,AUT}}{P_{rx,ref}}$
    *   **Assumptions:**
        *   The transmitting antenna and its position remain unchanged.
        *   The distance $R$ is in the far-field for both antennas.
        *   The transmitting antenna's beam is directed towards the receiving antennas in both measurements.
        *   The measuring equipment (receiver, cables, etc.) has the same gain or is calibrated out.
        *   The impedance match of the antennas to their respective cables doesn't significantly alter the received power measurement.

4.  **What is an anechoic chamber, and why is it crucial for antenna measurements?**
    *   **Answer:** An anechoic chamber is a specially designed room lined with RF-absorbent materials (e.g., pyramidal absorbers) on its walls, ceiling, and floor. It is crucial for antenna measurements because it minimizes reflections from the surrounding environment. This creates an "echo-free" or "free-space" like condition, ensuring that the measured signals are primarily from the direct path between antennas and not corrupted by multipath interference, leading to accurate radiation pattern and gain measurements.

5.  **How would you measure the bandwidth of a microstrip patch antenna using a VNA?**
    *   **Answer:** To measure the bandwidth of a microstrip patch antenna using a VNA, you would connect the antenna's feed point to the VNA and measure the S11 parameter (reflection coefficient) over a wide frequency range. The bandwidth is typically defined based on a specific return loss or VSWR criterion. For instance, the bandwidth can be determined as the frequency range where the return loss is greater than or equal to 10 dB (or VSWR $\le$ 2). You would observe the S11 plot (often in dB) and identify the frequencies at which the plot crosses the -10 dB line. The difference between these frequencies gives the bandwidth.

### 9. Important Points to Remember

*   **Far-Field Criterion:** Always ensure sufficient separation ($R \ge 2D^2/\lambda$, $R \ge 10\lambda$, etc.) for far-field measurements.
*   **Anechoic Environment:** Reflections are a major source of error; use anechoic chambers or appropriate mitigation techniques.
*   **Calibration:** Proper calibration of the VNA and other test equipment is essential for accurate measurements.
*   **Antenna Alignment:** Precise alignment of transmitting and receiving antennas is critical.
*   **Parameter Definitions:** Understand the precise definitions of parameters like gain, directivity, and bandwidth.
*   **Microstrip Specifics:** Be aware of substrate effects, edge radiation, and mounting on performance for microstrip antennas.
*   **Systematic Errors:** Identify and attempt to minimize systematic errors through careful setup and advanced measurement techniques.

### 10. Alignment with Course Outcomes

*   **CO1: Analyze the radiation mechanism of antennas (K3):** Understanding far-field conditions, radiation patterns, and near-field behavior directly contributes to analyzing how antennas radiate.
*   **CO2: Design and measure the parameters of a microstrip antenna (K4):** This entire topic is dedicated to the measurement of antenna parameters, providing the practical skills and knowledge required for this CO.
*   **CO3: Analyze and design advanced antennas (K4):** Accurate measurements are foundational for analyzing the performance of advanced antennas and for iteratively refining their designs.
*   **CO4: Explain the different modes and parameters of radio wave propagation (K2):** While this topic focuses on antenna measurements, the context of propagation (e.g., far-field implies plane wave propagation) is implicitly covered.

This comprehensive set of study notes covers the "Measurement of Antenna Range" topic, detailing principles, types of ranges, key components, parameter measurement, error sources, and specific considerations for microstrip antennas, all while aligning with the provided learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
