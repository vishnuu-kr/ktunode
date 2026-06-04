---
title: "Measurement of Antenna Range"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 2: Microstrip antennas: Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7e2"
status: "completed"
scrapedAt: "2026-05-23T18:11:56.634Z"
---
# ANTENNA THEORY AND DESIGN - Module 2: Microstrip Antennas: Radiation Mechanism

## Topic: Measurement of Antenna Range

### 1. Introduction to Antenna Measurements

Antenna measurements are crucial for validating the theoretical designs and ensuring that an antenna performs as expected in a real-world scenario. These measurements are typically conducted in an **anechoic chamber** or an **open-field test site** to minimize unwanted reflections and interference.

**Key Concept:** An anechoic chamber is a specially constructed room designed to absorb electromagnetic waves, preventing reflections and creating a free-space environment for accurate antenna measurements.

**Importance:** Accurate measurements are essential for:
*   Verifying antenna parameters (gain, radiation pattern, VSWR, impedance, etc.).
*   Characterizing antenna performance under various conditions.
*   Troubleshooting and optimizing antenna designs.
*   Ensuring compliance with regulatory standards.

### 2. Essential Antenna Parameters to be Measured

When evaluating the performance of any antenna, including microstrip antennas, several key parameters are typically measured.

#### 2.1 Radiation Pattern
The radiation pattern describes how an antenna radiates or receives electromagnetic energy in different directions. It's usually presented as a plot in polar coordinates.

*   **Types of Radiation Patterns:**
    *   **Omnidirectional:** Radiates/receives equally in all directions in a specific plane.
    *   **Directional:** Concentrates radiation/reception in a specific direction.
*   **Main Lobe:** The direction of maximum radiation.
*   **Side Lobes:** Smaller lobes of radiation in directions other than the main lobe.
*   **Nulls:** Directions of minimum radiation.
*   **Beamwidth:** The angular width of the main lobe, often defined at the half-power points (Half-Power Beamwidth - HPBW).
*   **Front-to-Back Ratio (FBR):** The ratio of the radiation in the main lobe to the radiation in the opposite direction (back lobe).

**Relevant Textbook Reference:**
*   **Balanis (4th Edition):** Chapter 2 extensively discusses radiation patterns and their measurement.
*   **Kraus (3rd Edition):** Chapter 4 provides a fundamental understanding of radiation patterns and measurement techniques.

#### 2.2 Gain
Gain is a measure of how effectively an antenna converts input power into radio waves directed in a specific direction, compared to an isotropic antenna. It's usually expressed in decibels (dB).

*   **Definition:** Gain = Directivity × Efficiency
*   **Absolute Gain:** Gain relative to a lossless isotropic radiator.
*   **Gain over a Dipole:** Gain relative to a half-wave dipole.
*   **Measurement:** Gain is typically measured by comparing the received signal strength from the antenna under test with that from a reference antenna (e.g., a calibrated gain standard) at the same distance and with the same transmitted power.

**Key Concept:** **Directivity** is a measure of how concentrated the radiation is in a particular direction, irrespective of losses. **Efficiency** accounts for all losses within the antenna.

**Relevant Textbook Reference:**
*   **Balanis (4th Edition):** Chapter 2 covers directivity and gain, and Chapter 16 discusses measurement techniques for gain.
*   **Collin (2nd Edition):** Chapter 11 provides detailed information on antenna gain and its measurement.

#### 2.3 Efficiency
Efficiency is the ratio of the power radiated by the antenna to the power delivered to its terminals. It accounts for all losses, including dielectric losses, conductor losses, and impedance mismatch losses.

*   **Radiation Efficiency ($\eta_r$):** Ratio of power radiated to power accepted by the antenna.
*   **Total Efficiency ($\eta_t$):** Ratio of power radiated to power delivered to the antenna terminals.
*   **Measurement:** Efficiency can be calculated from measured gain and directivity, or by measuring the various components of loss (ohmic, dielectric, mismatch).

**Key Concept:** Microstrip antennas, due to their substrate material and conductor losses, often exhibit lower efficiencies compared to other antenna types.

**Relevant Textbook Reference:**
*   **Garg (2001):** Chapter 1 discusses antenna efficiency and the factors affecting it in microstrip antennas.
*   **Balanis (4th Edition):** Chapter 2 elaborates on antenna efficiency.

#### 2.4 Impedance and VSWR (Voltage Standing Wave Ratio)
These parameters describe how well the antenna is matched to the transmission line connecting it to the transmitter or receiver.

*   **Impedance (Z):** The complex ratio of voltage to current at the antenna's input terminals. It should ideally be matched to the characteristic impedance of the transmission line (typically 50 Ohms).
*   **VSWR:** A measure of impedance mismatch. A VSWR of 1:1 indicates a perfect match. Higher VSWR values indicate greater mismatch and power reflection.
*   **Measurement:** Measured using a Vector Network Analyzer (VNA).

**Key Concept:** A good impedance match is crucial for efficient power transfer from the source to the antenna (or vice-versa). Microstrip antennas are susceptible to impedance variations with frequency and substrate properties.

**Relevant Textbook Reference:**
*   **Pozar (4th Edition):** Chapter 9 discusses impedance matching and VSWR measurements in microwave circuits and antennas.
*   **Raju (1st Edition):** Chapter 6 covers impedance matching techniques and VSWR.

#### 2.5 Bandwidth
The range of frequencies over which the antenna meets specified performance criteria (e.g., VSWR $\le$ 2:1, gain variation within a certain limit).

*   **Types of Bandwidth:**
    *   **VSWR Bandwidth:** Frequency range where VSWR $\le$ specified value.
    *   **Gain Bandwidth:** Frequency range where gain is within a specified tolerance.
    *   **Radiation Pattern Bandwidth:** Frequency range where the radiation pattern shape remains within specified limits.
*   **Measurement:** By sweeping the frequency and measuring the relevant parameter (e.g., VSWR) over the desired range.

**Key Concept:** Microstrip antennas often have narrow bandwidths due to their resonant nature. Various techniques are employed to enhance their bandwidth.

**Relevant Textbook Reference:**
*   **Garg (2001):** Chapter 5 is dedicated to bandwidth enhancement techniques for microstrip antennas.
*   **Balanis (4th Edition):** Chapter 16 discusses bandwidth measurement procedures.

#### 2.6 Polarization
Polarization describes the orientation of the electric field vector of the radiated wave.

*   **Types of Polarization:**
    *   **Linear Polarization:** Electric field vector oscillates along a straight line (Vertical, Horizontal).
    *   **Circular Polarization:** Electric field vector rotates in a circle (Right-Hand Circular Polarization - RHCP, Left-Hand Circular Polarization - LHCP).
    *   **Elliptical Polarization:** Electric field vector traces out an ellipse.
*   **Measurement:** Measured by rotating the receiving antenna and observing the received signal strength. For circular polarization, the Axial Ratio (AR) is a key parameter, representing the ratio of the major to minor axis of the polarization ellipse.

**Key Concept:** Microstrip antennas can be designed to be linearly, circularly, or elliptically polarized by adjusting their geometry and feeding mechanism.

**Relevant Textbook Reference:**
*   **Balanis (4th Edition):** Chapter 2 explains polarization, and Chapter 16 details measurement techniques for polarization.
*   **Kraus (3rd Edition):** Chapter 4 provides a thorough explanation of antenna polarization.

### 3. Measurement Setup and Techniques

Accurate measurements require a controlled environment and appropriate equipment.

#### 3.1 Anechoic Chamber
As mentioned earlier, an anechoic chamber is essential to simulate free-space conditions.

*   **Components:**
    *   **RF Absorbing Material:** Pyramidal or wedge-shaped absorbers line the walls, ceiling, and floor to absorb incident RF energy, preventing reflections.
    *   **Antenna Mounts:** Non-metallic or RF-transparent structures to support the antennas.
    *   **Positioners:** Turntables and elevation positioners to rotate the antennas and trace radiation patterns.
    *   **Measurement Equipment:** Signal generator, spectrum analyzer, network analyzer.

**Relevant Textbook Reference:**
*   **Milligan (2nd Edition):** Chapter 4 provides practical guidance on setting up antenna measurement facilities, including anechoic chambers.
*   **Balanis (4th Edition):** Chapter 16 discusses measurement ranges and environments.

#### 3.2 Open-Field Test Site (OFTS)
An OFTS is an outdoor site that is naturally free from reflections or has controlled reflections.

*   **Characteristics:** Large, flat, open area, often with a ground screen (if needed) to simulate an infinite ground plane.
*   **Advantages:** Can accommodate larger antennas and higher frequencies where anechoic chambers might be impractical.
*   **Disadvantages:** Susceptible to environmental interference and weather conditions.

**Relevant Textbook Reference:**
*   **Balanis (4th Edition):** Chapter 16 describes OFTS and their usage.

#### 3.3 Measurement Equipment
The choice of equipment depends on the parameter being measured.

*   **Vector Network Analyzer (VNA):** Measures impedance, VSWR, S-parameters (S11 for reflection coefficient, S21 for transmission), and is used for characterizing antennas over a frequency range.
*   **Spectrum Analyzer:** Used in conjunction with a signal generator to measure received power levels, which are essential for gain and radiation pattern measurements.
*   **Signal Generator:** Provides the RF signal to be transmitted by the source antenna.
*   **Power Meters:** Measure power levels accurately.
*   **Antenna Positioners:** Precisely control the orientation of the antennas.

**Relevant Textbook Reference:**
*   **Pozar (4th Edition):** Chapters on measurement techniques and instruments are relevant.
*   **Milligan (2nd Edition):** Chapter 5 provides details on test equipment for antenna measurements.

#### 3.4 Measurement Procedures

*   **Radiation Pattern Measurement:**
    1.  Set up the transmit antenna (source) and the receive antenna (under test) at a sufficient distance to be in the far-field region of the antenna under test. The minimum far-field distance ($R_{min}$) is given by $R_{min} \approx \frac{2D^2}{\lambda}$ (where D is the largest dimension of the antenna and $\lambda$ is the wavelength) or $R_{min} \approx 10\lambda$.
    2.  Connect the transmit antenna to the signal generator.
    3.  Connect the receive antenna to the spectrum analyzer or VNA.
    4.  Rotate the antenna under test using the positioner and record the received signal strength for each angular position.
    5.  Plot the recorded data to obtain the radiation pattern.

*   **Gain Measurement (Two-Antenna Method):**
    1.  Measure the received power ($P_{R1}$) when the transmit antenna is transmitting and the receive antenna (under test) is at the measurement position.
    2.  Replace the antenna under test with a calibrated gain standard antenna (e.g., a standard gain horn) and measure the received power ($P_{R2}$) under the same conditions.
    3.  The gain of the antenna under test ($G_{UT}$) can be calculated using:
        $G_{UT} = G_{std} + 10 \log_{10} \left( \frac{P_{R1}}{P_{R2}} \right)$
        where $G_{std}$ is the gain of the standard antenna.

*   **VSWR and Impedance Measurement:**
    1.  Connect the antenna under test to one port of the VNA (typically port 1).
    2.  Calibrate the VNA to account for losses in cables and connectors.
    3.  Measure the S11 parameter (reflection coefficient) over the desired frequency range.
    4.  The VSWR can be calculated from S11 using:
        $VSWR = \frac{1 + |S_{11}|}{1 - |S_{11}|}$
    5.  The impedance can be directly displayed by the VNA in Smith Chart format.

**Relevant Textbook Reference:**
*   **Balanis (4th Edition):** Chapter 16 provides detailed step-by-step procedures for various antenna measurements.
*   **Milligan (2nd Edition):** Chapter 6 offers practical measurement techniques.

### 4. Considerations for Microstrip Antennas

Microstrip antennas have specific characteristics that influence their measurement.

*   **Substrate Properties:** Dielectric constant ($\epsilon_r$) and loss tangent ($\tan \delta$) of the substrate significantly affect impedance, bandwidth, and efficiency. These properties can vary with frequency and temperature.
*   **Parasitic Elements:** The microstrip structure itself can introduce parasitic radiation and losses, which are accounted for during measurements.
*   **Feed Point:** The impedance at the feed point is critical and is heavily influenced by the feeding method (e.g., inset feed, microstrip line feed, aperture coupled feed).
*   **Mutual Coupling:** When measuring an array of microstrip antennas, mutual coupling between elements can affect individual element patterns and overall array performance, requiring careful consideration during measurement.
*   **Bandwidth Limitation:** Due to their resonant nature, microstrip antennas often have narrow bandwidths, making it important to characterize their performance across the relevant frequency band.

**Relevant Textbook Reference:**
*   **Garg (2001):** Various chapters discuss the impact of substrate properties, feed methods, and bandwidth limitations on microstrip antenna performance and measurement.
*   **Singh, Abegaonkar, Koul (2nd Edition):** Discusses metamaterials for antenna applications, which can influence measurement techniques for antennas employing such materials.

### 5. Practice Questions and Exercises

**Question 1:**
Explain the significance of an anechoic chamber in antenna measurements. What are the key components of an anechoic chamber? (CO1, K3)

**Answer 1:**
An anechoic chamber is vital for antenna measurements as it simulates free-space conditions by absorbing electromagnetic waves and preventing reflections. This eliminates unwanted interference from the environment, allowing for accurate measurement of the antenna's intrinsic radiation characteristics. Key components include RF absorbing materials (pyramids/wedges), antenna mounts, positioners, and measurement equipment.

**Question 2:**
Define antenna gain and explain the difference between directivity and efficiency. How is antenna gain typically measured? (CO1, K3)

**Answer 2:**
Antenna gain is a measure of how effectively an antenna concentrates power in a specific direction compared to an isotropic radiator.
*   **Directivity:** Measures the concentration of radiated power in a particular direction, ignoring losses.
*   **Efficiency:** Accounts for all losses within the antenna (ohmic, dielectric, mismatch) and is the ratio of radiated power to input power.
Gain = Directivity $\times$ Efficiency.
Antenna gain is typically measured using the two-antenna method, comparing the received signal from the antenna under test with that of a calibrated standard gain antenna.

**Question 3:**
A microstrip patch antenna is being tested. The VSWR measured by a VNA is 2.5:1 at its operating frequency. What does this VSWR value imply about the impedance match between the antenna and the 50 Ohm transmission line? Calculate the reflection coefficient $|\Gamma|$ from the VSWR. (CO2, K4)

**Answer 3:**
A VSWR of 2.5:1 indicates a significant impedance mismatch between the antenna and the 50 Ohm transmission line. This means a substantial portion of the incident power is being reflected back towards the source, leading to inefficient power transfer and potentially affecting the antenna's performance.

The reflection coefficient $|\Gamma|$ can be calculated using the formula:
$VSWR = \frac{1 + |\Gamma|}{1 - |\Gamma|}$

Rearranging for $|\Gamma|$:
$|\Gamma| = \frac{VSWR - 1}{VSWR + 1}$
$|\Gamma| = \frac{2.5 - 1}{2.5 + 1} = \frac{1.5}{3.5} \approx 0.4286$

So, approximately 42.86% of the incident power is reflected back.

**Question 4:**
List three important parameters of a microstrip antenna that would be measured during its characterization and explain why each is important. (CO2, K4)

**Answer 4:**
Three important parameters for microstrip antenna characterization are:
1.  **Radiation Pattern:** Crucial for understanding how the antenna radiates energy in different directions. It determines the antenna's coverage area, directivity, and the presence of sidelobes, which is vital for beamforming and interference mitigation.
2.  **Impedance (and VSWR):** Essential for ensuring efficient power transfer from the transmitter/receiver to the antenna. A good impedance match (low VSWR) minimizes reflected power and maximizes signal transmission.
3.  **Gain:** Quantifies how well the antenna transmits or receives power in its intended direction compared to a reference antenna. It directly impacts the link budget and the range of a wireless communication system.

### 6. Important Points to Remember

*   **Far-field condition:** Ensure the measurement distance is adequate to be in the far-field of the antenna.
*   **Calibration:** Proper calibration of test equipment (VNA, spectrum analyzer) is critical for accurate measurements.
*   **Environment:** Measurements should be performed in a controlled environment (anechoic chamber or OFTS) to minimize reflections and interference.
*   **Frequency dependence:** Antenna parameters (gain, VSWR, pattern) are frequency-dependent, so measurements should cover the intended operating bandwidth.
*   **Reference standards:** Use calibrated reference antennas for accurate gain measurements.
*   **Microstrip antenna specifics:** Be aware of the influence of substrate properties, feed mechanisms, and potential bandwidth limitations when measuring microstrip antennas.

### 7. Alignment with Course Outcomes

*   **CO1 (Analyze the radiation mechanism of antennas):** Understanding the radiation pattern measurement directly contributes to analyzing how an antenna radiates, which is fundamental to understanding its mechanism. (K3)
*   **CO2 (Design and measure the parameters of a microstrip antenna):** This entire topic is dedicated to the measurement of parameters for antennas, with a specific focus on microstrip antennas implicitly through the context of Module 2. The practice questions directly assess this. (K4)
*   **CO3 (Analyze and design advanced antennas):** While this topic focuses on measurement, the ability to accurately measure and characterize an antenna is a prerequisite for analyzing and designing advanced antennas, including those with novel radiation mechanisms or configurations. (K4)
*   **CO4 (Explain the different modes and parameters of radio wave propagation):** While not directly about propagation modes, understanding antenna parameters like gain and radiation pattern is essential for analyzing how antennas interact with radio waves during propagation. (K2)

This comprehensive set of notes covers the essential aspects of antenna range measurements, crucial for validating the design and performance of microstrip antennas. The references to the textbooks provide avenues for deeper study.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
