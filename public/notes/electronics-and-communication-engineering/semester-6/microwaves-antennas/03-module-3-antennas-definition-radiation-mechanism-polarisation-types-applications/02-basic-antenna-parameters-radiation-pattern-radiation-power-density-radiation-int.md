---
title: "Basic antenna parameters : Radiation Pattern, Radiation Power Density, Radiation Intensity, Radiation resistance, Beamwidth, Directivity, Antenna Efficiency, Gain, Beam Efficiency, Bandwidth, Input Impedance, Antenna Radiation Efficiency, Effective aperture area, Effective height, Antenna noise temperature"
subject: "MICROWAVES & ANTENNAS"
module: "Module 3: Antennas : Definition, Radiation mechanism, Polarisation, Types, Applications"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fedae"
status: "completed"
scrapedAt: "2026-05-23T18:01:42.341Z"
---
This document provides comprehensive study notes for the topic "Basic Antenna Parameters" within the "Antennas" module of the "MICROWAVES & ANTENNAS" course. These notes aim to align with the stated learning outcomes and course outcomes, referencing the provided textbooks.

---

# MICROWAVES & ANTENNAS

## Module 3: Antennas - Definition, Radiation Mechanism, Polarization, Types, Applications

### Topic: Basic Antenna Parameters

---

### Introduction to Antenna Parameters

Antennas are crucial components in any wireless communication system, responsible for efficiently converting electrical signals into electromagnetic waves for transmission and vice-versa for reception. To characterize their performance, several key parameters are defined. Understanding these parameters is essential for selecting, designing, and analyzing antennas for specific applications.

This topic focuses on understanding these fundamental antenna parameters and their significance.

---

### 1. Radiation Pattern

**Definition:** The radiation pattern of an antenna describes how the radio power radiated from the antenna is distributed in space. It's a graphical representation of the antenna's radiated power as a function of direction.

**Key Concepts:**

*   **Isotropic Radiator:** An ideal, hypothetical antenna that radiates power uniformly in all directions. Its radiation pattern is a perfect sphere. Real antennas approximate this behavior in some directions.
*   **Directional Antenna:** An antenna that radiates or receives electromagnetic waves more effectively in one direction than others.
*   **Omnidirectional Antenna:** An antenna that radiates or receives equally well in all horizontal directions, typically having a donut-shaped radiation pattern.

**Representation:**

*   **3D Spherical Plot:** The most complete representation, showing power density as a function of both azimuth ($\phi$) and elevation ($\theta$) angles.
*   **2D Polar Plots:** Commonly used to show the pattern in a specific plane (e.g., E-plane or H-plane).
    *   **E-plane Pattern:** The radiation pattern in the plane containing the electric field vector.
    *   **H-plane Pattern:** The radiation pattern in the plane containing the magnetic field vector.

**Important Components of a Radiation Pattern:**

*   **Major Lobe (Main Lobe):** The lobe in the direction of maximum radiation.
*   **Minor Lobes (Side Lobes):** Lobes in directions other than the major lobe, representing radiation in undesired directions.
*   **Nulls:** Directions where the radiation is zero.

**Example:** A dipole antenna has a toroidal (donut-shaped) radiation pattern with maximum radiation perpendicular to its axis and nulls along its axis.

**Referenced in Textbooks:**

*   **Krauss, Marhefka, Khan (Antennas for all Applications):** Chapters dedicated to radiation patterns, illustrating various types with detailed plots.
*   **Raju (Antennas and Wave Propagation):** Provides a clear explanation of radiation pattern plots and their interpretation.

**Course Outcome Alignment:** CO3 (Illustrate the basic concepts of antenna radiation antenna parameters and their measurement techniques - Knowledge Level: K2). Understanding radiation patterns is fundamental to this outcome.

---

### 2. Radiation Power Density

**Definition:** Radiation power density at a point in space is the power radiated per unit solid angle in a specific direction. It is usually expressed in watts per steradian (W/sr).

**Key Concepts:**

*   **Solid Angle ($\Omega$):** The angular extent of an object as seen from a particular point. Measured in steradians (sr). A full sphere has a solid angle of $4\pi$ sr.
*   **Power Flux Density (P):** The total power flowing through a unit area perpendicular to the direction of propagation. Typically measured in W/m².

**Relationship:** Radiation power density ($U$) is related to the power flux density ($P$) by:

$P = U \cdot \Omega$ (This is a simplification; more precisely, power density is power per unit solid angle).

**Measurement:** Measured using a field strength meter or by analyzing the antenna's performance.

**Referenced in Textbooks:**

*   **Das & Das (Microwave Engineering):** Discusses power density in the context of electromagnetic field propagation from antennas.
*   **Jordan & Balmain (Electromagnetic Waves and Radiating Systems):** Provides a rigorous mathematical treatment of power density.

**Course Outcome Alignment:** CO3 (Knowledge Level: K2). This parameter is a fundamental aspect of radiated power.

---

### 3. Radiation Intensity

**Definition:** Radiation intensity ($U$) is the power radiated per unit solid angle in a given direction. It is the most fundamental measure of the directional properties of an antenna and is directly related to the radiation pattern.

**Key Concepts:**

*   **Units:** Watts per steradian (W/sr).
*   **Isotropic Radiator:** Has a constant radiation intensity of $P_{total} / (4\pi)$ W/sr in all directions, where $P_{total}$ is the total radiated power.
*   **Directional Antenna:** Has varying radiation intensity with direction.

**Formula:**

$U(\theta, \phi) = R^2 \cdot P(\theta, \phi)$

where:
*   $U(\theta, \phi)$ is the radiation intensity in the direction $(\theta, \phi)$.
*   $R$ is the distance from the antenna.
*   $P(\theta, \phi)$ is the power flux density in the direction $(\theta, \phi)$.

**Relationship to Total Radiated Power:** The total radiated power ($P_{rad}$) is the integral of the radiation intensity over all solid angles:

$P_{rad} = \int_{0}^{2\pi} \int_{0}^{\pi} U(\theta, \phi) \sin(\theta) d\theta d\phi$

**Example:** If an antenna radiates 100 W in a particular direction corresponding to a solid angle of 0.01 sr, its radiation intensity in that direction is $100 \text{ W} / 0.01 \text{ sr} = 10,000$ W/sr.

**Referenced in Textbooks:**

*   **Krauss, Marhefka, Khan (Antennas for all Applications):** Emphasizes radiation intensity as a key descriptor of an antenna's directional capabilities.
*   **Raju (Antennas and Wave Propagation):** Defines radiation intensity and its connection to power density and total radiated power.

**Course Outcome Alignment:** CO3 (Knowledge Level: K2). Directly relates to the directional distribution of radiated power.

---

### 4. Radiation Resistance ($R_r$)

**Definition:** Radiation resistance is the equivalent resistance that, if inserted in series with an antenna's terminals, would dissipate the same amount of power as the antenna radiates.

**Key Concepts:**

*   **Power Dissipation:** The power dissipated by the antenna can be divided into radiated power and ohmic losses.
*   **Ohmic Resistance:** The resistance due to the finite conductivity of the antenna material.
*   **Total Antenna Impedance:** $Z_{in} = R_{in} + jX_{in}$, where $R_{in} = R_r + R_{loss}$ and $X_{in}$ is the reactance.

**Formula:**

$P_{rad} = I_{rms}^2 \cdot R_r$

where:
*   $P_{rad}$ is the total power radiated by the antenna.
*   $I_{rms}$ is the root-mean-square current at the antenna terminals.

**Significance:** A higher radiation resistance generally leads to more efficient radiation, assuming ohmic losses are minimal.

**Example:** A short dipole antenna has a very low radiation resistance (e.g., a few ohms), while a resonant half-wave dipole has a radiation resistance of approximately 73 ohms in free space.

**Referenced in Textbooks:**

*   **Liao (Microwave Devices & Circuits):** Explains radiation resistance in the context of antenna impedance.
*   **Rao (Microwave Engineering):** Provides methods for calculating radiation resistance for different antenna types.
*   **Saurabh Shukla & Sanjay Kumar (Concepts & Applications of Microwave Engineering):** Offers practical insights into radiation resistance.

**Course Outcome Alignment:** CO3 (Knowledge Level: K2). Essential for understanding power transfer and efficiency.

---

### 5. Beamwidth

**Definition:** Beamwidth is a measure of the angular width of a radiation pattern lobe, typically the major lobe. It quantifies how directive the antenna is in a particular plane.

**Key Concepts:**

*   **Half-Power Beamwidth (HPBW) / Beamwidth Between Half-Power Points:** The angular separation between the two points on the major lobe where the radiated power is half of the maximum radiated power (i.e., -3 dB points). This is the most commonly used measure.
*   **First Null Beamwidth (FNBW):** The angular separation between the first nulls on either side of the major lobe.
*   **Beamwidth Between First Nulls (BWFN):** Similar to FNBW.

**Representation:** Usually specified in degrees.

**Significance:** A narrower beamwidth indicates a more directive antenna, focusing its energy in a specific direction, which is beneficial for long-range communication or radar. A wider beamwidth is suitable for broadcasting or coverage over a wider area.

**Example:** A parabolic dish antenna has a very narrow beamwidth, allowing for highly directional communication, while a simple whip antenna might have a much wider beamwidth.

**Referenced in Textbooks:**

*   **Krauss, Marhefka, Khan (Antennas for all Applications):** Detailed discussion on various beamwidth definitions and their calculation.
*   **Raju (Antennas and Wave Propagation):** Explains beamwidth as a crucial parameter for antenna directivity.

**Course Outcome Alignment:** CO3 (Knowledge Level: K2). Directly relates to the shape and directivity of the radiation pattern.

---

### 6. Directivity ($D$)

**Definition:** Directivity is a dimensionless quantity that describes how well an antenna concentrates its radiated power in a particular direction compared to an isotropic radiator. It is the ratio of the radiation intensity in a given direction to the average radiation intensity over all directions.

**Key Concepts:**

*   **Maximum Directivity ($D_0$):** The directivity in the direction of the major lobe's peak radiation.
*   **Isotropic Radiator:** Has a directivity of 1 (or 0 dBi).

**Formula:**

$D(\theta, \phi) = \frac{U(\theta, \phi)}{U_{avg}}$

where:
*   $U(\theta, \phi)$ is the radiation intensity in the direction $(\theta, \phi)$.
*   $U_{avg} = \frac{P_{rad}}{4\pi}$ is the average radiation intensity.

**Maximum Directivity Formula:**

$D_0 = \frac{U_{max}}{U_{avg}} = \frac{4\pi U_{max}}{P_{rad}}$

**Relationship to Beamwidth:** Generally, antennas with narrower beamwidths have higher directivity.

**Example:** A highly directional antenna might have a directivity of 100 (or 20 dBi).

**Referenced in Textbooks:**

*   **Krauss, Marhefka, Khan (Antennas for all Applications):** Comprehensive treatment of directivity and its relationship with radiation patterns.
*   **Das & Das (Microwave Engineering):** Explains directivity as a measure of power concentration.
*   **Jordan & Balmain (Electromagnetic Waves and Radiating Systems):** Provides the theoretical foundation for directivity.

**Course Outcome Alignment:** CO3 (Knowledge Level: K2). Quantifies the antenna's ability to focus energy.

---

### 7. Antenna Efficiency ($\eta_A$)

**Definition:** Antenna efficiency is the ratio of the total power radiated by the antenna to the net power delivered to the antenna terminals. It accounts for losses within the antenna structure itself.

**Key Concepts:**

*   **Efficiency is Less Than 1 (or 100%):** Real antennas always have some losses.
*   **Types of Losses:**
    *   **Conduction Losses (Ohmic Losses):** Due to the finite conductivity of the antenna material.
    *   **Dielectric Losses:** Due to dielectric materials used in the antenna structure (e.g., insulators).
    *   **Reflection Losses:** Due to impedance mismatch at the antenna terminals.

**Formula:**

$\eta_A = \frac{P_{rad}}{P_{in}}$

where:
*   $P_{rad}$ is the total power radiated.
*   $P_{in}$ is the net power accepted by the antenna at its terminals.

**Relationship to Radiation and Ohmic Resistance:**

$\eta_A = \frac{R_r}{R_r + R_{loss}} = \frac{R_r}{R_{in}}$

**Significance:** High efficiency is crucial for maximizing radiated power and minimizing wasted energy.

**Example:** A well-designed resonant dipole might have an efficiency of 90%, while a poorly designed or lossy antenna could have much lower efficiency.

**Referenced in Textbooks:**

*   **Krauss, Marhefka, Khan (Antennas for all Applications):** Discusses antenna efficiency and its impact on system performance.
*   **Rao (Microwave Engineering):** Details how to calculate antenna efficiency based on physical parameters.
*   **Liao (Microwave Devices & Circuits):** Links efficiency to impedance matching and component losses.

**Course Outcome Alignment:** CO3 (Knowledge Level: K2). Crucial for understanding power transfer and system performance.

---

### 8. Gain ($G$)

**Definition:** Antenna gain is a measure of the effectiveness of an antenna in transmitting or receiving electromagnetic waves in a particular direction. It is the ratio of the radiation intensity in a given direction to the radiation intensity that would be obtained if the power accepted by the antenna were radiated isotropically.

**Key Concepts:**

*   **Gain vs. Directivity:** Gain accounts for both the directivity of the antenna and its efficiency.
*   **Reference Antenna:** Gain is often compared to a dipole antenna or a half-wave dipole.
*   **Absolute Gain:** Compared to an isotropic radiator.

**Formula:**

$G = \eta_A \cdot D$

where:
*   $\eta_A$ is the antenna efficiency.
*   $D$ is the directivity.

**Expressed in Decibels (dB):**

$G_{dB} = 10 \log_{10} (\eta_A \cdot D)$

If $\eta_A = 1$ (ideal efficiency), then Gain = Directivity.

**Common Gain Units:**

*   **dBi:** Decibels relative to an isotropic radiator.
*   **dBd:** Decibels relative to a half-wave dipole (1 dBi $\approx$ 2.15 dBd).

**Significance:** Gain is a critical parameter for determining the range and link budget of a wireless system. Higher gain means more power is concentrated in a specific direction.

**Example:** An antenna with a directivity of 10 and an efficiency of 80% has a gain of $0.8 \times 10 = 8$. In dB, this is $10 \log_{10}(8) \approx 9.03$ dBi.

**Referenced in Textbooks:**

*   **Krauss, Marhefka, Khan (Antennas for all Applications):** Provides a comprehensive understanding of gain and its relation to directivity and efficiency.
*   **Raju (Antennas and Wave Propagation):** Clearly defines gain and its different reference points.
*   **Das & Das (Microwave Engineering):** Discusses gain in the context of microwave system performance.

**Course Outcome Alignment:** CO3 (Knowledge Level: K2). Crucial for understanding the "effectiveness" of an antenna.

---

### 9. Beam Efficiency ($\eta_{BE}$)

**Definition:** Beam efficiency is the ratio of the power radiated in the main beam to the total power radiated by the antenna. It quantifies how much of the radiated power is contained within the main beam, as opposed to being in side lobes.

**Key Concepts:**

*   **Main Beam Definition:** The angular region defining the main lobe (often defined by the HPBW).
*   **Side Lobe Power:** Power radiated in directions outside the main beam.

**Formula:**

$\eta_{BE} = \frac{\text{Power in Main Beam}}{\text{Total Radiated Power}}$

**Significance:** Important for applications where interference from side lobes needs to be minimized, such as radar or satellite communications.

**Example:** An antenna with high directivity might have significant side lobes. If 90% of its power is in the main beam, its beam efficiency is 90%.

**Referenced in Textbooks:**

*   **Krauss, Marhefka, Khan (Antennas for all Applications):** Discusses beam efficiency in relation to side lobe levels.
*   **Jordan & Balmain (Electromagnetic Waves and Radiating Systems):** Provides a theoretical framework for calculating beam efficiency.

**Course Outcome Alignment:** CO3 (Knowledge Level: K2). Relates to the purity of the main beam.

---

### 10. Bandwidth ($BW$)

**Definition:** Bandwidth is the range of frequencies over which an antenna operates effectively and maintains its desired characteristics within specified limits.

**Key Concepts:**

*   **VSWR (Voltage Standing Wave Ratio) Bandwidth:** The frequency range over which the VSWR is below a certain threshold (e.g., 2:1).
*   **Gain Bandwidth:** The frequency range over which the antenna gain remains within a specified percentage of its maximum value.
*   **Radiation Pattern Bandwidth:** The frequency range over which the radiation pattern remains relatively stable.
*   **Impedance Bandwidth:** The frequency range over which the antenna's input impedance is well-matched to the transmission line.

**Units:** Hertz (Hz), Kilohertz (kHz), Megahertz (MHz), Gigahertz (GHz).

**Types of Antennas based on Bandwidth:**

*   **Narrowband Antennas:** Operate over a limited frequency range (e.g., resonant dipoles, loop antennas).
*   **Broadband Antennas:** Operate over a wide frequency range (e.g., log-periodic antennas, spiral antennas).

**Significance:** Essential for applications that operate across a range of frequencies (e.g., wireless communication systems, radar).

**Referenced in Textbooks:**

*   **Krauss, Marhefka, Khan (Antennas for all Applications):** Dedicated chapters on broadband antenna design and bandwidth considerations.
*   **Raju (Antennas and Wave Propagation):** Explains different types of bandwidth and their measurement.
*   **Kar (Microwave Engineering: Fundamentals, Design and Applications):** Discusses the trade-offs in antenna design related to bandwidth.

**Course Outcome Alignment:** CO4 (Illustrate the basic concepts of antenna radiation antenna parameters and their measurement techniques - Knowledge Level: K3). This outcome directly involves designing broadband antennas.

---

### 11. Input Impedance ($Z_{in}$)

**Definition:** Input impedance is the complex ratio of the voltage to the current at the antenna's input terminals. It determines how well the antenna is matched to the transmission line and the source.

**Key Concepts:**

*   **Real Part (Resistance):** Includes radiation resistance and loss resistance.
*   **Imaginary Part (Reactance):** Capacitive or inductive reactance.
*   **Impedance Matching:** Crucial for efficient power transfer. Mismatches lead to reflections and power loss.
*   **VSWR (Voltage Standing Wave Ratio):** A measure of impedance mismatch.

**Formula:**

$Z_{in} = R_{in} + jX_{in}$

where $R_{in} = R_r + R_{loss}$.

**Significance:** A well-matched antenna (e.g., $Z_{in} \approx 50 \Omega$ or $75 \Omega$ depending on the system) maximizes the power delivered to the antenna for radiation and minimizes reflections.

**Example:** A half-wave dipole in free space has an input impedance of approximately $73 + j42.5 \Omega$. To match this to a 50 $\Omega$ transmission line, a matching network is required.

**Referenced in Textbooks:**

*   **Liao (Microwave Devices & Circuits):** Detailed coverage of impedance, matching networks, and VSWR.
*   **Das & Das (Microwave Engineering):** Explains input impedance in the context of microwave circuit analysis and antenna design.
*   **Raju (Antennas and Wave Propagation):** Provides formulas and methods for calculating input impedance.

**Course Outcome Alignment:** CO2 (Apply the S parameter theory to obtain the S matrices of various microwave hybrid circuits - Knowledge Level: K3). Understanding impedance is fundamental to S-parameter analysis and matching.

---

### 12. Antenna Radiation Efficiency ($\eta_{rad}$)

**Definition:** This is often used interchangeably with Antenna Efficiency ($\eta_A$), but sometimes it specifically refers to the ratio of power radiated to the power *accepted* by the antenna, excluding the contribution of ohmic losses in the calculation of radiated power itself. However, the most common definition is as given in point 7.

**Clarification:** In many texts, $\eta_A$ is the accepted term for the overall efficiency. If a distinction is made, radiation efficiency might focus purely on the electrical-to-electromagnetic conversion without considering conductor losses.

**Important Note:** Always clarify the definition being used if there is ambiguity in a specific context. For practical purposes in most microwave engineering courses, **Antenna Efficiency ($\eta_A$)** as defined earlier is the primary parameter.

---

### 13. Effective Aperture Area ($A_e$)

**Definition:** Effective aperture area is a measure of the ability of an antenna to capture incident electromagnetic power. It represents the effective area that an antenna presents to an incident plane wave for the transfer of power to the load.

**Key Concepts:**

*   **Area:** An effective area, not a physical area.
*   **Power Capture:** How much power the antenna can "intercept."

**Formula:**

$A_e = \frac{\lambda^2}{4\pi} G$

where:
*   $\lambda$ is the wavelength of the electromagnetic wave.
*   $G$ is the antenna gain.

**Relationship to Gain:** Direct proportionality between effective aperture area and gain. Higher gain implies a larger effective aperture.

**Significance:** Crucial for understanding the receiving capabilities of an antenna. It helps in calculating the power received by the antenna from a distant source.

**Example:** A highly directional antenna with high gain will have a larger effective aperture area.

**Referenced in Textbooks:**

*   **Krauss, Marhefka, Khan (Antennas for all Applications):** Explains the concept of effective aperture and its relationship to gain and reception.
*   **Jordan & Balmain (Electromagnetic Waves and Radiating Systems):** Provides the theoretical basis for effective aperture area.
*   **Raju (Antennas and Wave Propagation):** Connects effective aperture to antenna performance in receiving mode.

**Course Outcome Alignment:** CO3 (Knowledge Level: K2). Relates to antenna performance in reception.

---

### 14. Effective Height ($h_e$)

**Definition:** Effective height is a parameter used for antennas that are significantly smaller than the wavelength (electrically small antennas). It relates the induced voltage at the antenna terminals to the incident electric field strength.

**Key Concepts:**

*   **Electrically Small Antennas:** Antennas with dimensions much smaller than $\lambda$.
*   **Voltage Induction:** How effectively an antenna converts an incident electric field into a voltage.

**Formula (for a linear antenna):**

$V_{open} = E_0 \cdot h_e$

where:
*   $V_{open}$ is the open-circuit voltage induced at the terminals.
*   $E_0$ is the incident electric field strength.
*   $h_e$ is the effective height.

**Relationship to Radiation Resistance:** For an electrically small dipole of length $l$, the effective height is $l/2$. The radiation resistance is proportional to $(l/\lambda)^2$.

**Significance:** Important for analyzing the performance of small antennas used in portable devices or at very low frequencies.

**Example:** For a short dipole antenna of length $l$, its effective height is approximately $l/2$.

**Referenced in Textbooks:**

*   **Raju (Antennas and Wave Propagation):** Details the concept of effective height for electrically small antennas.
*   **Krauss, Marhefka, Khan (Antennas for all Applications):** Discusses effective height in the context of antenna theory.

**Course Outcome Alignment:** CO3 (Knowledge Level: K2). Relevant for understanding the behavior of certain types of antennas.

---

### 15. Antenna Noise Temperature ($T_A$)

**Definition:** Antenna noise temperature is a conceptual temperature that represents the noise power received by an antenna in a particular direction, normalized to a resistance of 1 Ohm. It quantifies the contribution of the antenna to the overall noise in a receiving system.

**Key Concepts:**

*   **Noise Sources:**
    *   **Cosmic Noise:** Radiation from celestial bodies.
    *   **Atmospheric Noise:** Ionospheric effects, lightning.
    *   **Man-made Noise:** Interference from electronic devices.
    *   **Antenna Thermal Noise:** Thermal agitation of charge carriers within the antenna structure and surrounding environment.
*   **System Noise Temperature ($T_{sys}$):** The sum of the antenna noise temperature and the receiver noise temperature.
*   **Brightness Temperature ($T_b$):** The equivalent temperature of a blackbody radiator that would produce the same power density as the source.

**Formula (Simplified):**

$T_A = \frac{P_{noise}}{k \cdot B}$

where:
*   $P_{noise}$ is the noise power received by the antenna.
*   $k$ is Boltzmann's constant ($1.38 \times 10^{-23}$ J/K).
*   $B$ is the bandwidth of the receiver.

**Significance:** Crucial for the design of sensitive receiving systems, especially in radio astronomy or deep-space communication. A lower antenna noise temperature is desirable for better signal-to-noise ratio.

**Example:** An antenna pointed towards a quiet part of the sky might have a noise temperature of a few Kelvin, while an antenna pointed towards the Sun could have a noise temperature of thousands of Kelvin.

**Referenced in Textbooks:**

*   **Krauss, Marhefka, Khan (Antennas for all Applications):** Discusses noise sources and antenna noise temperature in receiving systems.
*   **Das & Das (Microwave Engineering):** Covers noise analysis in microwave systems, including antenna contributions.
*   **Jordan & Balmain (Electromagnetic Waves and Radiating Systems):** Provides a detailed theoretical treatment of noise temperature.

**Course Outcome Alignment:** CO3 (Knowledge Level: K2). Essential for understanding the performance of receiving antennas in noisy environments.

---

### Important Points to Remember

*   **Radiation Pattern:** Visualizes power distribution in space.
*   **Radiation Intensity:** Power per unit solid angle.
*   **Directivity:** Power concentration relative to isotropic.
*   **Gain:** Directivity modified by efficiency.
*   **Efficiency:** Accounts for antenna losses.
*   **Beamwidth:** Angular measure of the main lobe.
*   **Bandwidth:** Frequency range of effective operation.
*   **Input Impedance:** Critical for matching and power transfer.
*   **Effective Aperture:** Antenna's ability to capture power.
*   **Effective Height:** For electrically small antennas.
*   **Antenna Noise Temperature:** Quantifies noise received by the antenna.
*   **Gain vs. Directivity:** Gain includes efficiency, directivity does not.
*   **Relationship:** $G = \eta_A \cdot D$ and $A_e = \frac{\lambda^2}{4\pi} G$.

---

### Practice Questions and Answers

**Question 1:**
An antenna has a radiation intensity of $50 \text{ W/sr}$ in its main beam and a total radiated power of $100 \text{ W}$. If the antenna efficiency is $80\%$, calculate its directivity and gain in dBi.

**Answer:**
1.  **Calculate Average Radiation Intensity ($U_{avg}$):**
    $U_{avg} = \frac{P_{rad}}{4\pi} = \frac{100 \text{ W}}{4\pi \text{ sr}} \approx 7.96 \text{ W/sr}$
2.  **Calculate Directivity ($D$):**
    $D = \frac{U_{max}}{U_{avg}} = \frac{50 \text{ W/sr}}{7.96 \text{ W/sr}} \approx 6.28$
3.  **Calculate Gain ($G$):**
    $G = \eta_A \cdot D = 0.80 \cdot 6.28 \approx 5.024$
4.  **Convert Gain to dBi:**
    $G_{dB} = 10 \log_{10}(G) = 10 \log_{10}(5.024) \approx 7.01 \text{ dBi}$

**Question 2:**
A receiving antenna has a gain of 15 dBi. Calculate its effective aperture area at a frequency of 10 GHz.

**Answer:**
1.  **Convert Gain from dBi to a linear ratio:**
    $G = 10^{\frac{15}{10}} = 10^{1.5} \approx 31.62$
2.  **Calculate the wavelength ($\lambda$):**
    Frequency $f = 10 \text{ GHz} = 10 \times 10^9 \text{ Hz}$
    Speed of light $c = 3 \times 10^8 \text{ m/s}$
    $\lambda = \frac{c}{f} = \frac{3 \times 10^8 \text{ m/s}}{10 \times 10^9 \text{ Hz}} = 0.03 \text{ m}$
3.  **Calculate Effective Aperture Area ($A_e$):**
    $A_e = \frac{\lambda^2}{4\pi} G = \frac{(0.03 \text{ m})^2}{4\pi} \times 31.62 = \frac{0.0009 \text{ m}^2}{12.566} \times 31.62 \approx 0.0000716 \text{ m}^2 \approx 71.6 \text{ cm}^2$

**Question 3:**
What is the primary difference between antenna directivity and antenna gain?

**Answer:**
Directivity measures how well an antenna concentrates power in a specific direction compared to an isotropic radiator, assuming no losses. Antenna gain includes the effect of antenna efficiency, meaning it accounts for the losses within the antenna itself, making it a more practical measure of performance. Gain is always less than or equal to directivity ($G \le D$).

**Question 4:**
List three common sources of noise that contribute to the antenna noise temperature.

**Answer:**
Three common sources of noise contributing to antenna noise temperature are:
1.  Cosmic noise (from outer space, celestial bodies).
2.  Atmospheric noise (from the Earth's atmosphere, lightning).
3.  Man-made noise (from electrical and electronic equipment).
4.  (Also acceptable: Thermal noise from the antenna structure itself).

---

This concludes the study notes for Basic Antenna Parameters. Ensure to revisit these concepts and practice applying them to different antenna scenarios.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
