---
title: "Antenna Measurements"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 2: Microstrip antennas : Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff774"
status: "completed"
scrapedAt: "2026-05-23T18:12:33.158Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 2: Microstrip Antennas: Radiation Mechanism

### Topic: Antenna Measurements

This topic focuses on the essential practical aspects of evaluating the performance of antennas, particularly in the context of microstrip antennas. It builds upon the theoretical understanding of radiation mechanisms by outlining how to quantify these characteristics in a real-world setting.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental principles and methodologies for measuring antenna parameters.
*   Identify and utilize standard test equipment for antenna measurements.
*   Perform common antenna measurements such as gain, radiation pattern, impedance, and VSWR.
*   Analyze the results of antenna measurements and compare them with theoretical predictions.
*   Apply measurement techniques to characterize microstrip antennas.

---

### Course Outcomes Addressed:

*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)**
    *   This topic directly supports the measurement aspect of CO2 by providing the necessary knowledge and techniques to practically evaluate microstrip antenna performance.
*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)**
    *   While this topic is about measurement, understanding what parameters to measure (like radiation patterns) is crucial for validating theoretical models of radiation mechanisms.

---

### 1. Introduction to Antenna Measurements

Antenna measurements are crucial for verifying the theoretical design and performance of any antenna, including microstrip antennas. They provide a quantitative assessment of how well an antenna performs in practice, allowing for validation, optimization, and comparison with specifications.

**Key Concepts:**

*   **Antenna Parameters:** Measurable characteristics that define an antenna's performance (e.g., gain, directivity, radiation pattern, impedance, VSWR, polarization).
*   **Measurement Environment:** The physical space and conditions where measurements are taken, which can significantly influence results (e.g., anechoic chamber, open-field site).
*   **Test Equipment:** Specialized instruments used to generate signals, measure received power, analyze impedance, and record data.

**Importance:**

*   **Design Validation:** Confirming that the designed antenna meets its intended specifications.
*   **Performance Characterization:** Providing detailed information about the antenna's behavior.
*   **Troubleshooting:** Identifying issues in the antenna or its feeding network.
*   **Comparison:** Evaluating different antenna designs or modifications.
*   **Calibration:** Ensuring the accuracy of other RF components and systems.

---

### 2. Essential Antenna Parameters and Their Measurement

This section details the key antenna parameters and the common methods for their measurement.

#### 2.1 Radiation Pattern Measurement

The radiation pattern describes how an antenna radiates or receives electromagnetic waves in different directions. It is typically plotted in polar coordinates as a function of elevation and azimuth angles.

**Key Concepts:**

*   **Types of Patterns:**
    *   **Omnidirectional:** Radiates equally in all directions in a plane.
    *   **Directional:** Concentrates radiation in a specific direction.
*   **Major Lobe:** The direction of maximum radiation.
*   **Minor Lobes (Sidelobes):** Lobes in directions other than the major lobe.
*   **Nulls:** Directions where radiation is minimal or zero.
*   **Beamwidth:** The angular width of the major lobe (e.g., Half-Power Beamwidth - HPBW).
*   **Front-to-Back Ratio:** The ratio of the power radiated in the forward direction to that radiated in the backward direction.
*   **Front-to-Side Ratio:** The ratio of the power radiated in the forward direction to that radiated in the side directions.

**Measurement Setup:**

*   **Anechoic Chamber:** A room designed to absorb electromagnetic waves, eliminating reflections and providing a controlled environment for accurate pattern measurements. This is crucial for avoiding multipath interference.
*   **Transmitting Antenna (Source Antenna):** Generates the RF signal.
*   **Receiving Antenna (Test Antenna):** The antenna being measured.
*   **Turntable/Positioner:** Rotates the test antenna or the source antenna to scan the radiation pattern in different planes (e.g., E-plane and H-plane).
*   **Signal Generator:** Provides the RF signal to the source antenna.
*   **Spectrum Analyzer/Network Analyzer:** Measures the received signal strength.

**Measurement Procedure:**

1.  **Setup:** Place the source antenna and test antenna at a sufficient distance (Far-field condition, $R \ge 2D^2/\lambda$, where $D$ is the largest dimension of the antenna and $\lambda$ is the wavelength). The test antenna is placed on a turntable.
2.  **Alignment:** Ensure proper polarization alignment between the source and test antennas.
3.  **Scanning:** Rotate the test antenna (or the source antenna) through desired angles (azimuth and elevation).
4.  **Data Acquisition:** Record the received signal strength at each angular position using a spectrum analyzer or network analyzer.
5.  **Plotting:** Plot the received power versus angle to generate the radiation pattern. The E-plane pattern is typically measured when the antenna's polarization aligns with the electric field of the source, and the H-plane pattern when it aligns with the magnetic field.

**Example (Microstrip Patch Antenna):** To measure the radiation pattern of a microstrip patch antenna, it would be placed on the turntable within an anechoic chamber. A linearly polarized horn antenna could be used as the source. The receiving system would measure the power received by the patch as it rotates in azimuth and elevation.

---

#### 2.2 Gain Measurement

Antenna gain is a measure of how effectively an antenna converts input power into radio waves radiated in a particular direction. It accounts for both directivity and antenna efficiency.

**Key Concepts:**

*   **Gain (G):** $G = \eta D$, where $\eta$ is the antenna efficiency and $D$ is the directivity.
*   **Directivity (D):** The ratio of the radiation intensity in a given direction to the average radiation intensity over all directions.
*   **Antenna Efficiency ($\eta$):** The ratio of power radiated by the antenna to the power accepted by the antenna.

**Measurement Methods:**

*   **Absolute Gain Measurement:**
    *   **Standard Antenna Method:** Compare the received signal from the test antenna with a known calibrated antenna (standard gain antenna) under identical conditions.
    *   **Turntable Method (Gain Transfer Method):** Used for directional antennas. A known gain antenna is used as the source. The received power is measured when the known antenna transmits to the test antenna, and then the test antenna is replaced by a known reference antenna (with gain $G_{ref}$). The gain of the test antenna can be calculated using the Friis transmission formula.

        Friis Transmission Formula:
        $\frac{P_r}{P_t} = G_t G_r \left(\frac{\lambda}{4\pi R}\right)^2$

        Where:
        *   $P_r$: Received power
        *   $P_t$: Transmitted power
        *   $G_t$: Gain of transmitting antenna
        *   $G_r$: Gain of receiving antenna
        *   $\lambda$: Wavelength
        *   $R$: Distance between antennas

    *   **Procedure (Gain Transfer):**
        1.  Transmit with the source antenna ($G_{source}$) and receive with the test antenna ($G_{test}$). Record received power $P_{r, test}$.
        2.  Replace the test antenna with a known reference antenna ($G_{ref}$) and receive the signal from the source antenna. Record received power $P_{r, ref}$.
        3.  Assuming $P_t$, $G_{source}$, and $R$ are the same for both measurements:
            $\frac{P_{r, test}}{P_t G_{source} G_{test}} = \left(\frac{\lambda}{4\pi R}\right)^2$
            $\frac{P_{r, ref}}{P_t G_{source} G_{ref}} = \left(\frac{\lambda}{4\pi R}\right)^2$
        4.  Equating the two:
            $\frac{P_{r, test}}{G_{test}} = \frac{P_{r, ref}}{G_{ref}}$
            $G_{test} = G_{ref} \frac{P_{r, test}}{P_{r, ref}}$

*   **Gain Measurement using a Network Analyzer (Two-Port Measurement):**
    *   This method measures the insertion loss between two antennas and uses the Friis transmission formula. It requires calibration for accurate results.
    *   Measure the S21 parameter (forward transmission coefficient) between the source and test antenna.
    *   $|S_{21}|^2 = \frac{P_r}{P_t} = G_t G_r \left(\frac{\lambda}{4\pi R}\right)^2$
    *   If $G_t$ is known (e.g., a calibrated horn antenna) and the measurement is performed in the far-field, $G_r$ (gain of the test antenna) can be determined.

**Example:** To measure the gain of a microstrip patch antenna operating at 2.4 GHz, a calibrated horn antenna with a known gain ($G_{horn}$) is used as the source. The microstrip antenna is placed at the far-field distance. The received power ($P_{r, patch}$) by the microstrip antenna is measured. Then, the microstrip antenna is replaced by another calibrated antenna ($G_{ref}$) and the received power ($P_{r, ref}$) is measured. The gain of the microstrip antenna ($G_{patch}$) is calculated using the gain transfer formula.

**Reference:** Balanis, Chapter 11 (Gain and Directivity).

---

#### 2.3 Impedance Measurement (VSWR/Return Loss)

Impedance matching is crucial for efficient power transfer from the transmission line to the antenna. Mismatches result in reflections, leading to standing waves and reduced power delivery.

**Key Concepts:**

*   **Input Impedance ($Z_{in}$):** The impedance seen at the antenna terminals.
*   **Characteristic Impedance ($Z_0$):** The impedance of the transmission line.
*   **Voltage Standing Wave Ratio (VSWR):** The ratio of the maximum to minimum voltage on the transmission line. A VSWR of 1:1 indicates perfect matching.
*   **Return Loss (RL):** The ratio of the power reflected from the antenna to the incident power. It is usually expressed in decibels (dB). Higher return loss indicates better matching.
    $RL = -20 \log_{10} |\Gamma|$, where $\Gamma$ is the reflection coefficient.
*   **Reflection Coefficient ($\Gamma$):** The ratio of the reflected voltage wave to the incident voltage wave.
    $\Gamma = \frac{Z_{in} - Z_0}{Z_{in} + Z_0}$
    VSWR can be related to $\Gamma$ by: $VSWR = \frac{1 + |\Gamma|}{1 - |\Gamma|}$

**Measurement Equipment:**

*   **Vector Network Analyzer (VNA):** The primary instrument for measuring impedance parameters. It measures the reflection coefficient ($\Gamma$ or $S_{11}$) as a function of frequency.

**Measurement Procedure (using VNA):**

1.  **Calibration:** The VNA must be calibrated using standards (e.g., Short, Open, Load, Through) to account for the characteristics of the cables and connectors.
2.  **Connection:** Connect the test antenna to one port of the VNA (usually Port 1).
3.  **Measurement:** Sweep the frequency range of interest and record the $S_{11}$ parameter (magnitude and phase).
4.  **Analysis:**
    *   **VSWR Plot:** The VNA software can directly display the VSWR as a function of frequency.
    *   **Return Loss Plot:** Similarly, return loss can be plotted.
    *   **Smith Chart:** The reflection coefficient can be displayed on a Smith Chart, which visually represents the impedance.

**Example:** For a microstrip patch antenna designed for Wi-Fi frequencies (around 2.4 GHz), a VNA is used to measure its input impedance. The antenna is connected to the VNA, and the $S_{11}$ parameter is measured across a frequency band. A low VSWR (e.g., < 2:1) or high return loss (e.g., > 10 dB) over the desired operating band indicates good impedance matching.

**Reference:** Pozar, Chapter 4 (Impedance Matching). Garg, Chapter 3 (Microstrip Line and Components).

---

#### 2.4 Polarization Measurement

Polarization describes the orientation of the electric field vector of the radiated wave.

**Key Concepts:**

*   **Linear Polarization:** The electric field vector oscillates along a straight line.
    *   **Vertical Polarization (VP):** Electric field is vertical.
    *   **Horizontal Polarization (HP):** Electric field is horizontal.
*   **Circular Polarization (CP):** The electric field vector rotates in a circle.
    *   **Right-Hand Circular Polarization (RHCP):** Vector rotates clockwise when viewed from the source.
    *   **Left-Hand Circular Polarization (LHCP):** Vector rotates counter-clockwise when viewed from the source.
*   **Elliptical Polarization:** The electric field vector traces an ellipse.
*   **Cross-Polarization:** The component of the electric field perpendicular to the desired polarization. For a linearly polarized antenna, this is the orthogonal linear component (e.g., horizontal component for a vertically polarized antenna).
*   **Cross-Polarization Discrimination (XPD):** The ratio of the power received in the desired polarization to the power received in the cross-polarization.

**Measurement Setup:**

*   Similar to pattern measurement, but requires careful selection and rotation of both source and test antennas to determine the polarization characteristics.

**Measurement Procedure:**

1.  **Reference Measurement:** Measure the received power with the source and test antennas aligned for maximum signal transfer (co-polarization).
2.  **Cross-Polarization Measurement:**
    *   **Linear Polarization:** Rotate the test antenna by 90 degrees relative to the source antenna's polarization. Measure the received power. The ratio of co-polar to cross-polar power gives the XPD.
    *   **Circular Polarization:** Use a source antenna with the opposite sense of circular polarization (e.g., RHCP source for LHCP test).
3.  **Axial Ratio Measurement (for CP):** The axial ratio is the ratio of the major axis to the minor axis of the ellipse traced by the electric field vector. It can be measured by varying the phase difference between two orthogonal linear components of the received signal.

**Example:** To measure the polarization of a microstrip patch antenna designed for circular polarization, a linearly polarized horn antenna is used as the source. The received power is measured as the horn antenna is rotated. For CP antennas, the radiation pattern in two orthogonal planes will be similar. To measure the axial ratio of a CP microstrip antenna, two linearly polarized receiving antennas (one horizontal, one vertical) are typically used, and their outputs are combined with a 90-degree phase difference to simulate CP reception.

**Reference:** Balanis, Chapter 14 (Polarization).

---

#### 2.5 Efficiency Measurement

Antenna efficiency is the ratio of power radiated to power accepted. It is affected by dielectric losses, conductor losses, and impedance mismatch losses.

**Key Concepts:**

*   **Radiation Efficiency ($\eta_r$):** Ratio of power radiated to power accepted. $P_{rad}/P_{in}$.
*   **Conduction and Dielectric Losses:** Causes of inefficiency within the antenna structure.
*   **Mismatch Loss:** Due to impedance mismatch between the antenna and the transmission line.

**Measurement Methods:**

*   **Gain Measurement and Directivity Calculation:** If the directivity can be accurately calculated from the radiation pattern and the gain is measured, the efficiency can be derived: $\eta = G/D$.
*   **Calorimetric Method:** Measures the temperature rise of a load due to absorbed power.
*   **Power Meter Method:** Measuring input power and radiated power.
*   **Substitution Method:**
    *   Measure the total loss in a system with the antenna.
    *   Replace the antenna with a known loss standard and measure the loss.
    *   The difference helps in estimating antenna efficiency.

**Example:** For a microstrip antenna fabricated on a lossy substrate, measuring its gain (using the gain transfer method) and calculating its directivity (from its measured radiation pattern) will allow for the determination of its radiation efficiency.

---

### 3. Measurement Techniques for Microstrip Antennas

Microstrip antennas present some unique challenges and advantages in their measurement due to their planar structure and integration with transmission lines.

**Specific Considerations for Microstrip Antennas:**

*   **Feed Point Impedance:** Accurate characterization of the feed point impedance is critical. Probe feeding, aperture coupling, and edge feeding all have different impedance characteristics.
*   **Substrate Effects:** The dielectric constant and loss tangent of the substrate significantly affect the antenna's performance (bandwidth, efficiency, radiation pattern). These need to be considered during measurements and design.
*   **Surface Waves:** Microstrip antennas can excite surface waves, which propagate along the substrate interface and can cause spurious radiation, affecting the radiation pattern and efficiency.
*   **Bandwidth Measurement:** The bandwidth of a microstrip antenna is often limited. Measurements are needed to determine the frequency range over which key parameters (VSWR, gain) meet specifications.
*   **Proximity Effects:** When multiple microstrip antennas are placed close together (arrays), their mutual coupling can affect their individual radiation patterns and impedance.

**Measurement Techniques Tailored for Microstrip Antennas:**

*   **VNA Measurements for Impedance and Bandwidth:** As discussed, VNA is essential for characterizing the input impedance and determining the operational bandwidth based on VSWR or return loss criteria.
*   **Anechoic Chamber Measurements for Radiation Patterns and Gain:** Standard anechoic chamber techniques are used to measure the radiation characteristics. The orientation and setup need to be optimized for the planar nature of the microstrip antenna.
*   **Probe Station Measurements:** For on-wafer characterization of active microstrip components or to accurately measure the impedance of very small antennas, a probe station can be used to directly contact the antenna feed points with RF probes.
*   **Near-Field Measurements:** While far-field measurements are preferred, near-field scanning techniques can also be used to characterize antennas, especially when the far-field distance is not practically achievable. This involves scanning the electromagnetic field in the near-field region and using mathematical transformations to calculate the far-field characteristics.
*   **Calibration Standards:** Using appropriate calibration standards that mimic the antenna's feed structure is crucial for accurate VNA measurements. For microstrip antennas, this might involve using TRL (Thru-Reflect-Line) calibration if the antenna is directly connected to a transmission line.

**Reference:** Garg, Chapter 10 (Antenna Measurements). Milligan, Chapter 10 (Antenna Measurements).

---

### 4. Test Equipment for Antenna Measurements

A range of specialized test equipment is required for accurate antenna measurements.

*   **Signal Generator:** Produces the RF signal at the desired frequency and power level.
    *   **Requirements:** Stable frequency, adjustable power output, good spectral purity.
*   **Spectrum Analyzer:** Measures the power of signals as a function of frequency. Used for signal detection and level measurements in pattern and gain measurements.
    *   **Requirements:** Wide dynamic range, good sensitivity, accurate frequency and amplitude measurements.
*   **Vector Network Analyzer (VNA):** Measures the scattering parameters (S-parameters) of RF components, including reflection coefficient ($S_{11}$) for impedance matching and transmission coefficient ($S_{21}$) for gain measurements.
    *   **Requirements:** Wide frequency range, high accuracy, calibration capabilities.
*   **Power Meter:** Measures the absolute power level of an RF signal.
*   **Antenna Positioner/Turntable:** Rotates the antenna in azimuth and elevation to scan the radiation pattern.
    *   **Requirements:** Precision, smooth rotation, stability.
*   **Anechoic Chamber:** A shielded room with RF absorbing materials to minimize reflections, ensuring free-space measurement conditions.
*   **Calibrated Antennas:** Standard gain antennas or reference antennas with known gain and radiation patterns are used for gain and pattern comparison measurements.
*   **RF Cables and Connectors:** High-quality, low-loss, and phase-stable cables and connectors are essential for accurate measurements, especially at higher frequencies.

**Reference:** Milligan, Chapter 10 (Antenna Measurements).

---

### 5. Practical Aspects and Challenges

*   **Far-Field vs. Near-Field:** Ensuring the measurement distance is in the far-field region to avoid near-field effects. If not possible, near-field scanning techniques can be used.
*   **Environmental Influences:** External RF interference, temperature variations, and humidity can affect measurements. Anechoic chambers help mitigate these.
*   **Cable Losses and Phase Shifts:** Losses and phase shifts in cables connecting the test equipment to the antennas can introduce significant errors, especially at higher frequencies. Calibration procedures (e.g., VNA calibration) are crucial to compensate for these.
*   **Mutual Coupling:** In antenna arrays or when measuring antenna performance in the presence of other objects, mutual coupling can alter the antenna's characteristics.
*   **Probe Loading:** The presence of a measurement probe can perturb the electromagnetic field around the antenna, affecting the measurement.
*   **Time Synchronization:** For complex measurements involving multiple instruments, precise time synchronization might be necessary.
*   **Data Analysis and Interpretation:** Properly analyzing the raw measurement data and interpreting it in the context of the antenna's intended application is vital.

---

### 6. Practice Questions and Answers

**Question 1:** What is the primary instrument used to measure the impedance matching of an antenna?
**(a) Spectrum Analyzer**
**(b) Signal Generator**
**(c) Vector Network Analyzer (VNA)**
**(d) Power Meter**

**Answer:** (c) Vector Network Analyzer (VNA). The VNA measures the reflection coefficient ($S_{11}$), which is directly related to impedance matching parameters like VSWR and return loss.

---

**Question 2:** An antenna is characterized by a VSWR of 2:1. What is the corresponding reflection coefficient magnitude $|\Gamma|$?
**(a) 0.5**
**(b) 0.333**
**(c) 0.25**
**(d) 0.1**

**Derivation:**
VSWR $= \frac{1 + |\Gamma|}{1 - |\Gamma|}$
$2 = \frac{1 + |\Gamma|}{1 - |\Gamma|}$
$2(1 - |\Gamma|) = 1 + |\Gamma|$
$2 - 2|\Gamma| = 1 + |\Gamma|$
$1 = 3|\Gamma|$
$|\Gamma| = \frac{1}{3} \approx 0.333$

**Answer:** (b) 0.333

---

**Question 3:** In a gain transfer measurement, if the received power by the test antenna is $P_{r, test}$ and by the reference antenna is $P_{r, ref}$, and the reference antenna has gain $G_{ref}$, what is the gain of the test antenna, $G_{test}$?

**Answer:**
Using the gain transfer formula derived from the Friis transmission:
$G_{test} = G_{ref} \frac{P_{r, test}}{P_{r, ref}}$

---

**Question 4:** Briefly describe the purpose of an anechoic chamber in antenna measurements.

**Answer:** An anechoic chamber is designed to absorb electromagnetic waves, minimizing reflections from its walls. This creates a controlled, free-space environment, preventing multipath interference and allowing for accurate measurement of an antenna's true radiation characteristics (patterns, gain) without external distortions.

---

**Question 5:** What are two key parameters that define the bandwidth of a microstrip antenna, and how are they typically measured?

**Answer:**
Two key parameters defining bandwidth are:
1.  **VSWR (Voltage Standing Wave Ratio):** Typically measured using a Vector Network Analyzer (VNA) across a range of frequencies. The bandwidth is often defined as the frequency range where VSWR is below a certain threshold (e.g., 2:1).
2.  **Gain:** The antenna's gain is also a critical parameter. Its bandwidth is the frequency range over which the gain remains within acceptable limits (e.g., ±1 dB of the peak gain). Gain is typically measured using gain transfer or comparison methods in an anechoic chamber.

---

### 7. Important Points to Remember:

*   **Measurement Accuracy:** Depends heavily on the quality of test equipment, calibration, and measurement environment.
*   **Far-Field Condition:** Always ensure the measurement distance ($R$) satisfies $R \ge 2D^2/\lambda$ for far-field pattern measurements.
*   **Calibration is Key:** Proper calibration of VNAs and other instruments is essential to remove systematic errors.
*   **Microstrip Specifics:** Consider substrate losses, surface waves, and feed point characteristics when measuring microstrip antennas.
*   **Parameter Interdependence:** Parameters like impedance, radiation pattern, and gain are interconnected. Changes in one can affect others.
*   **Reference Books for Depth:**
    *   **Balanis, 4th Ed:** Chapters on Antenna Measurements, Gain, Directivity, Polarization.
    *   **Garg:** Chapters on Microstrip Antenna Measurements, Design of Microstrip Antennas.
    *   **Pozar:** Chapters on Impedance Matching, S-parameters.
    *   **Milligan:** Chapters on Antenna Measurements, Test Equipment.

---
This concludes the study notes for Antenna Measurements in the context of Microstrip Antennas. Remember that practical experience in a lab setting is invaluable for fully grasping these concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
