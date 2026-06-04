---
title: "Radiation Patterns"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 2: Microstrip antennas: Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7e3"
status: "completed"
scrapedAt: "2026-05-23T18:11:57.456Z"
---
# ANTENNA THEORY AND DESIGN - Module 2: Microstrip Antennas: Radiation Mechanism

## Topic: Radiation Patterns

### 1. Introduction to Radiation Patterns

**What is a Radiation Pattern?**

A radiation pattern describes how an antenna radiates or receives electromagnetic energy as a function of direction away from the antenna. It is a graphical representation of the spatial distribution of radiated power.

**Why are Radiation Patterns Important?**

*   **Performance Assessment:** They are crucial for evaluating antenna performance in terms of directivity, beamwidth, sidelobe levels, and gain.
*   **System Design:** Understanding the radiation pattern is essential for designing communication systems, ensuring proper signal coverage, minimizing interference, and optimizing antenna placement.
*   **Antenna Selection:** Different applications require antennas with specific radiation characteristics.

**Key Concepts & Definitions:**

*   **Isotropic Radiator:** A hypothetical antenna that radiates or receives energy equally in all directions. It serves as a reference point.
*   **Omnidirectional Radiator:** An antenna that radiates or receives energy equally in a specific plane (e.g., horizontal plane) but may have different patterns in other planes.
*   **Directional Radiator:** An antenna that concentrates its radiated energy in one or more specific directions.
*   **Far-Field Region:** The region around an antenna where the electromagnetic field can be approximated as a plane wave. Radiation patterns are typically measured or predicted in the far-field.
*   **Near-Field Region:** The region close to the antenna where the fields are more complex and exhibit reactive components.

**Textbook References:**

*   Balanis, Chapter 1: Introduction to Antennas
*   Kraus, Chapter 2: Antennas and Their Radiation Patterns

### 2. Representation of Radiation Patterns

Radiation patterns are typically represented in two ways:

*   **Two-Dimensional (2D) Patterns:** These are cross-sections of the three-dimensional pattern, usually taken in the principal planes.
    *   **E-Plane Pattern:** The pattern in the plane containing the electric field vector and the direction of maximum radiation.
    *   **H-Plane Pattern:** The pattern in the plane containing the magnetic field vector and the direction of maximum radiation.
*   **Three-Dimensional (3D) Patterns:** A spherical representation showing the radiation intensity in all directions.

**Common Display Formats:**

*   **Cartesian Coordinates:** Linear plots of radiation intensity or field strength versus angle.
*   **Polar Coordinates:** Radiation intensity is plotted as a radius vector from the origin, with the angle representing the direction.
*   **Logarithmic (dB) Scale:** Used to represent a wide range of radiation intensities, particularly useful for visualizing sidelobe levels.

**Key Concepts & Definitions:**

*   **Radiation Intensity (U):** Power per unit solid angle. $U = r^2 \times P_{rad}$, where $r$ is the distance from the antenna and $P_{rad}$ is the radiated power density.
*   **Normalized Radiation Pattern:** The radiation pattern plotted as a function of direction, normalized to its maximum value. This makes it easier to compare patterns from different antennas.
*   **Beamwidth:** The angular width of the main lobe, typically measured at the half-power points.
    *   **Half-Power Beamwidth (HPBW):** The angular separation between the two points on the main lobe where the radiation intensity is half of the maximum. This corresponds to -3 dB from the peak.
    *   **First-Null Beamwidth (FNBW):** The angular separation between the first nulls on either side of the main lobe.

**Textbook References:**

*   Balanis, Chapter 1: Radiation Patterns
*   Collins, Chapter 2: Antenna Patterns

### 3. Characteristics of Radiation Patterns

Understanding the characteristics of a radiation pattern is vital for evaluating antenna performance.

**Key Features:**

*   **Main Lobe (Major Lobe):** The lobe in the direction of maximum radiation.
*   **Sidelobes (Minor Lobes):** Lobes in directions other than the main lobe. Ideally, sidelobes should be minimized to reduce interference.
*   **Nulls:** Directions where the radiation intensity is zero or very close to zero.
*   **Beamwidth:** As defined above, indicating the directivity of the antenna.

**Measures of Pattern Characteristics:**

*   **Directivity (D):** A dimensionless quantity that measures how concentrated the radiation is in a particular direction compared to an isotropic radiator.
    $D = \frac{4\pi U_{max}}{P_{total}} = \frac{U_{max}}{\bar{U}}$
    where $U_{max}$ is the maximum radiation intensity, $P_{total}$ is the total radiated power, and $\bar{U}$ is the average radiation intensity over all directions.
*   **Gain (G):** Similar to directivity but also takes into account the efficiency of the antenna.
    $G = \eta_r D$
    where $\eta_r$ is the radiation efficiency.
*   **Sidelobe Level (SLL):** The ratio of the radiation intensity of the strongest sidelobe to the radiation intensity of the main lobe, usually expressed in dB.
*   **Front-to-Back Ratio (FBR):** The ratio of the radiation intensity in the forward direction (main lobe) to the radiation intensity in the backward direction.

**Textbook References:**

*   Balanis, Chapter 1: Directivity, Gain
*   Raju, Chapter 3: Antenna Parameters

### 4. Radiation Mechanism of Microstrip Antennas

Microstrip antennas are planar antennas consisting of a radiating patch on one side of a dielectric substrate and a ground plane on the other. They radiate primarily from the **fringing fields** at the edges of the radiating patch.

**How Fringing Fields Create Radiation:**

1.  **Surface Current Distribution:** When the microstrip antenna is excited, surface currents flow on the radiating patch and the ground plane.
2.  **Open Circuits at Edges:** The edges of the radiating patch behave like open circuits, leading to a discontinuity in the current flow.
3.  **Fringing Fields:** This current discontinuity creates fringing fields that extend into the space above and below the patch. These fringing fields are essentially equivalent to electric dipoles or magnetic loops.
4.  **Radiation:** These equivalent current elements (dipoles and loops) radiate electromagnetic waves. The dominant radiation is typically from the **open circuit ends** of the patch, which are often modeled as magnetic current sheets.

**Radiation from Different Microstrip Antenna Configurations:**

*   **Microstrip Patch Antenna:** The most basic form. Radiation occurs from the fringing fields at the two radiating edges. The antenna acts like a pair of slots (in the magnetic current model) or dipoles.
    *   **Dominant Modes:** The fundamental mode is typically the $\text{TM}_{10}$ mode. Higher-order modes ($\text{TM}_{11}$, $\text{TM}_{20}$, etc.) can also be excited, leading to different radiation patterns.
    *   **Radiation Pattern Characteristics:** Typically exhibits a broad main lobe, with lower sidelobes and moderate directivity. The pattern is influenced by the patch shape, dimensions, substrate permittivity, and thickness.
*   **Proximity-Coupled Microstrip Antennas:** These have a separate feed line underneath the radiating patch, with a gap. Radiation is still from fringing fields, but the coupling mechanism can influence the pattern.
*   **Slot-Fed Microstrip Antennas:** A slot in the ground plane is used to excite the patch. Radiation patterns are largely determined by the patch itself, but the slot can also contribute.
*   **Linearly Polarized Patches:** Often have a dominant lobe in the broadside direction (perpendicular to the patch surface). The pattern can be influenced by the feed point and the shape of the patch.
*   **Circularly Polarized Patches:** Often achieved by using a square patch with perturbations or by using a circular patch. The radiation pattern can be similar to linearly polarized patches, but the polarization characteristics are also important.

**Textbook References:**

*   Balanis, Chapter 12: Microstrip Antennas (specifically the radiation mechanism and equivalent circuits)
*   Garg, Chapter 3: Microstrip Antenna Design Principles (discusses modes and radiation)
*   Pozar, Chapter 9: Microstrip Antennas (covers the radiating edges and equivalent circuit models)

**CO Alignment:**

*   **CO1: Analyze the radiation mechanism of antennas (Knowledge Level: K3):** This section directly addresses how microstrip antennas radiate, linking it to current distributions and fringing fields.

### 5. Microstrip Antenna Radiation Pattern Characteristics

The radiation pattern of a microstrip antenna is influenced by several factors:

**Factors Affecting the Radiation Pattern:**

*   **Patch Shape and Dimensions:** The length and width of the patch determine the resonant frequency and the beamwidth. Longer patches generally lead to narrower beams.
*   **Substrate Properties:**
    *   **Permittivity ($\epsilon_r$):** Higher permittivity materials tend to increase fringing fields and reduce beamwidth, leading to higher directivity.
    *   **Thickness (h):** Thicker substrates with lower permittivity tend to enhance radiation efficiency and bandwidth, but can also lead to wider beamwidths and higher-order modes.
*   **Feed Mechanism:** The way the antenna is fed (e.g., probe feed, microstrip line feed, aperture coupling) can influence the excitation of different modes and thus the radiation pattern.
*   **Excited Mode:** The specific mode ($\text{TM}_{10}$, $\text{TM}_{11}$, etc.) that is dominant will dictate the general shape of the radiation pattern.
*   **Mutual Coupling:** If multiple patches are used in an array, mutual coupling between elements can affect the overall radiation pattern.

**Typical Radiation Patterns of Basic Microstrip Patch Antennas:**

*   **Broadside Radiation:** For the fundamental $\text{TM}_{10}$ mode, the main lobe is typically directed broadside (normal) to the patch surface.
*   **Half-Power Beamwidth (HPBW):** Generally wider than resonant antennas like dipoles or monopoles, typically ranging from 60° to 120° in the principal planes for a single patch.
*   **Sidelobe Levels:** Usually relatively low, making them suitable for applications where low sidelobes are desired.
*   **Cross-Polarization:** Microstrip antennas can exhibit significant cross-polarization, especially for non-square patches or due to asymmetries in the feed. This is an important design consideration.

**Examples:**

*   **Square Patch Antenna:** For a $\text{TM}_{10}$ mode, the E-plane pattern (containing the length dimension) is typically broader than the H-plane pattern (containing the width dimension), especially if the patch is not perfectly square or the feed is asymmetric. If fed symmetrically, they can exhibit similar E and H plane patterns.
*   **Rectangular Patch Antenna:** The HPBW in the plane parallel to the longer dimension is typically narrower than in the plane parallel to the shorter dimension.

**Textbook References:**

*   Garg, Chapter 3: Microstrip Antenna Design Principles (discusses the influence of parameters on patterns)
*   Milligan, Chapter 3: Microstrip Antennas (details the radiation characteristics and design trade-offs)

**CO Alignment:**

*   **CO1: Analyze the radiation mechanism of antennas (Knowledge Level: K3):** Understanding how different parameters affect the pattern is part of analyzing the mechanism.
*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4):** Knowledge of these characteristics is essential for designing an antenna with a desired pattern.

### 6. Advanced Microstrip Antennas and Their Patterns

The basic microstrip patch antenna can be modified to achieve more complex and desirable radiation patterns.

**Examples of Advanced Microstrip Antennas:**

*   **Microstrip Patch Arrays:**
    *   **Linear Arrays:** Multiple patches arranged in a line. Can achieve higher directivity and narrower beamwidths. The overall pattern is a combination of the individual element patterns and the array factor.
    *   **Planar Arrays:** Patches arranged in a 2D grid. Allow for much higher directivity and beam shaping capabilities.
    *   **Applications:** Radar, satellite communications, mobile base stations.
*   **Slotted Microstrip Antennas:** Slots etched into the patch or ground plane can modify the radiation pattern, polarization, and impedance matching.
*   **Reconfigurable Microstrip Antennas:** These antennas can change their radiation characteristics (e.g., beam direction, polarization, frequency) electronically. This is often achieved using switching elements (PIN diodes, MEMS) or varactor diodes.
    *   **Applications:** Adaptive beamforming, electronic steering, polarization diversity.
*   **Metamaterial-Based Microstrip Antennas:** Incorporating metamaterials can enhance bandwidth, directivity, or enable novel radiation patterns.
    *   **Applications:** Miniaturization, achieving negative refractive indices for directive beams.

**Pattern Characteristics of Advanced Antennas:**

*   **Arrays:**
    *   **Increased Directivity:** By increasing the number of elements and controlling the excitation (amplitude and phase), the main lobe can be made much narrower and more directive.
    *   **Sidelobe Control:** Techniques like tapering the excitation amplitudes can reduce sidelobe levels.
    *   **Beam Steering:** By varying the phase of the excitation of array elements, the main beam can be electronically steered in different directions without physically moving the antenna. This is crucial for phased arrays.
*   **Reconfigurable Antennas:**
    *   **Beam Switching:** The beam can be switched between different fixed directions.
    *   **Beam Scanning:** The beam can be continuously scanned over a range of angles.
    *   **Polarization Agility:** The antenna can switch between linear and circular polarization or change the orientation of linear polarization.
*   **Metamaterial Antennas:**
    *   **Enhanced Directivity:** Can achieve narrower beams with fewer elements compared to conventional arrays.
    *   **Unusual Radiation Properties:** Can exhibit negative radiation or other exotic pattern shapes.

**Textbook References:**

*   Garg, Chapters on Arrays, Reconfigurable Antennas
*   Singh, Abegaonkar, Koul, Chapters on Metamaterial Antennas
*   Choudhury, Chapters on Reconfigurable Antennas
*   Kraus, Chapter 11: Antenna Arrays

**CO Alignment:**

*   **CO1: Analyze the radiation mechanism of antennas (Knowledge Level: K3):** Understanding array theory and how element patterns combine.
*   **CO3: Analyze and design advanced antennas (Knowledge Level: K4):** This section directly covers the analysis and design of arrays, reconfigurable, and metamaterial antennas.

### 7. Radiation Pattern Measurements

While theoretical analysis is crucial, actual antenna performance must be verified through measurements.

**Measurement Setup:**

*   **Anechoic Chamber:** A shielded room designed to absorb electromagnetic waves, preventing reflections. This ensures that the measured pattern is purely from the antenna under test (AUT) and not from its environment.
*   **Antenna Positioner:** A motorized device that rotates the AUT or a transmitting antenna to scan through different angles.
*   **Transmitting Antenna:** A known antenna (often a standard gain horn or a calibrated reference antenna) used to illuminate the AUT.
*   **Receiving Antenna:** A calibrated antenna used to measure the received power at different directions.
*   **Spectrum Analyzer or Network Analyzer:** Used to measure the received signal strength or the S-parameters.

**Measurement Procedure:**

1.  **Setup:** Place the AUT at a sufficient distance from the transmitting and receiving antennas in the anechoic chamber. The distance is typically in the far-field region (e.g., $2D^2/\lambda$, where $D$ is the antenna aperture dimension and $\lambda$ is the wavelength).
2.  **Calibration:** Calibrate the system to account for cable losses and the gain of the transmitting/receiving antennas.
3.  **Rotation:** Rotate the AUT or the receiving antenna to sweep through the desired angles in the principal planes (E and H planes) or in 3D.
4.  **Data Acquisition:** Record the received power (or voltage) at each angular position.
5.  **Normalization:** Normalize the recorded data to the maximum received value to obtain the normalized radiation pattern.
6.  **Data Processing:** Convert the data to dB and plot the pattern using polar or Cartesian coordinates.

**Key Considerations:**

*   **Far-Field Distance:** Ensuring the measurement is performed in the far-field is critical for accurate pattern representation.
*   **Reflections:** Minimizing reflections within the anechoic chamber is paramount.
*   **Antenna Polarization:** For polarization measurements, the polarization of the transmitting and receiving antennas must be controlled.
*   **Bandwidth:** Measurements should be performed across the operating bandwidth of the antenna.

**Textbook References:**

*   Raju, Chapter 10: Antenna Measurements
*   Milligan, Chapter 13: Antenna Measurements

**CO Alignment:**

*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4):** This section covers the practical aspect of measuring radiation patterns.

### 8. Practice Questions and Exercises

**Question 1:** Define the terms "radiation intensity," "main lobe," and "sidelobe." (Knowledge Level: K2)

**Answer:**
*   **Radiation Intensity (U):** Power radiated per unit solid angle.
*   **Main Lobe:** The lobe in the direction of maximum radiation of an antenna.
*   **Sidelobe:** Lobes that appear in directions other than the main lobe, representing undesirable radiation.

**Question 2:** Explain how fringing fields at the edges of a microstrip patch antenna contribute to its radiation. (Knowledge Level: K3)

**Answer:** The discontinuity of surface currents at the open-circuited edges of the microstrip patch leads to fringing fields extending into the surrounding space. These fringing fields can be modeled as equivalent electric dipoles or magnetic current sheets, which radiate electromagnetic waves. The dominant radiation is typically from the edges of the patch.

**Question 3:** A microstrip patch antenna has a maximum radiation intensity of $10 \, \text{W/sr}$. If the total radiated power is $5 \, \text{W}$, calculate its directivity. (Knowledge Level: K3)

**Answer:**
Directivity $D = \frac{4\pi U_{max}}{P_{total}}$
$D = \frac{4\pi \times 10 \, \text{W/sr}}{5 \, \text{W}}$
$D = 8\pi \approx 25.13$

**Question 4:** List three factors that influence the radiation pattern of a microstrip patch antenna. (Knowledge Level: K2)

**Answer:**
1.  Patch shape and dimensions.
2.  Substrate permittivity and thickness.
3.  Feed mechanism.
4.  Excited mode.

**Question 5:** Describe the primary purpose of an anechoic chamber in antenna radiation pattern measurements. (Knowledge Level: K2)

**Answer:** An anechoic chamber is used to create an electromagnetically "quiet" environment by absorbing electromagnetic waves, thereby preventing reflections from the surroundings. This ensures that the measured radiation pattern is solely due to the antenna under test.

**Question 6:** How can an array of microstrip patches be used to achieve beam steering? (Knowledge Level: K4)

**Answer:** By controlling the phase of the excitation signal fed to each element in the array, the constructive interference of the radiated waves can be shifted to a different direction. This allows the main beam of the array to be electronically steered without physical movement of the antenna.

### 9. Important Points to Remember

*   **Fringing Fields are Key:** Microstrip antennas radiate primarily from the fringing fields at the edges of the radiating patch.
*   **Pattern Dependence:** The radiation pattern is highly dependent on the patch dimensions, substrate properties, and feeding method.
*   **Broadside Radiation:** Basic microstrip patches usually radiate broadside to the patch surface.
*   **Beamwidth:** Microstrip patch antennas generally have wider beamwidths than resonant wire antennas.
*   **Arrays for Directivity and Steering:** Arrays are used to increase directivity, control sidelobes, and enable beam steering.
*   **Anechoic Chambers are Crucial for Measurements:** Accurate pattern measurements require a controlled environment free from reflections.
*   **Understanding Parameters is Essential:** Directivity, gain, beamwidth, and sidelobe levels are critical parameters for evaluating antenna performance.

This comprehensive set of notes covers the radiation patterns of microstrip antennas, aligning with the learning outcomes and course objectives. The inclusion of textbook references and practice questions provides a solid foundation for understanding this crucial aspect of antenna theory and design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
