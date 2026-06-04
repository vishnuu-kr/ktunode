---
title: "Traveling Wave and Broadband Antennas"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 1: Antenna theory: Radiation mechanism from an antenna"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7cc"
status: "completed"
scrapedAt: "2026-05-23T18:11:38.752Z"
---
# ANTENNA THEORY AND DESIGN: Module 1: Antenna Theory: Radiation Mechanism from an Antenna

## Topic: Traveling Wave and Broadband Antennas

### 1. Introduction to Traveling Wave Antennas

Traveling wave antennas are a class of antennas characterized by their ability to support the propagation of electromagnetic waves along their structure, much like a transmission line. Unlike resonant antennas which rely on standing waves for radiation, traveling wave antennas radiate energy continuously as the wave propagates along their length. This continuous radiation leads to a unique radiation pattern and generally broader bandwidth characteristics.

**Key Concepts & Definitions:**

*   **Traveling Wave:** An electromagnetic wave that propagates along a conductor or structure without significant reflections. The current and voltage on the structure exist as traveling waves.
*   **Resonant Antenna:** An antenna where the physical length is a significant fraction of the wavelength, leading to standing waves and efficient radiation.
*   **Non-resonant Antenna:** An antenna where reflections are minimized, allowing waves to propagate through and radiate along the structure.
*   **Radiation Efficiency:** The ratio of power radiated by the antenna to the total power delivered to the antenna terminals.
*   **Bandwidth:** The range of frequencies over which an antenna can operate effectively, typically defined by a certain acceptable level of performance (e.g., VSWR < 2).

**Learning Outcomes Covered:**

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)** - Understanding the continuous radiation process in traveling wave antennas.
*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4)** - This topic is foundational for designing broadband and more complex antenna structures.

**Textbook References:**

*   **Balanis (4th Ed.):** Chapter 7 (Broadband Antennas), Chapter 8 (Wire Antennas).
*   **Collin (2nd Ed.):** Chapter 5 (Wire Antennas).
*   **Kraus (3rd Ed.):** Chapter 7 (Broadband Antennas), Chapter 8 (Log-Periodic Antennas), Chapter 9 (Spiral Antennas).

### 2. Radiation Mechanism in Traveling Wave Antennas

The fundamental principle behind traveling wave antennas is that currents flowing along the antenna structure generate radiated fields. In a traveling wave antenna, the current is not standing still but is propagating along the antenna. As this propagating current encounters a change in the transmission medium (e.g., reaching the end of the conductor, encountering a load), a portion of the wave is reflected, but in an ideal traveling wave antenna, this reflection is minimized, allowing most of the energy to be radiated or absorbed by a terminating load.

**Key Concepts & Definitions:**

*   **Current Distribution:** In a traveling wave antenna, the current distribution is typically exponential in decay along the antenna, indicating that the wave is losing energy due to radiation.
*   **Radiation Pattern:** The radiation pattern of a traveling wave antenna is generally unidirectional, with the main lobe directed along the axis of the antenna, pointing in the direction of wave propagation.
*   **Termination:** Many traveling wave antennas are terminated with a resistive load matched to the characteristic impedance of the antenna structure to absorb the traveling wave and prevent reflections.
*   **Phase Velocity ($v_p$):** The speed at which a phase point of a monochromatic plane wave propagates. In a traveling wave antenna, the current wave propagates with a phase velocity.
*   **Group Velocity ($v_g$):** The speed at which the envelope of a wave packet propagates.

**Balanis (4th Ed.) Perspective:**
Balanis discusses that the radiation from a traveling wave structure arises from the incremental current elements along its length. The phase and amplitude of these currents vary as the wave propagates, contributing to a directional radiation pattern. The directive gain is often associated with the total length of the antenna and the velocity of propagation of the wave.

**Kraus (3rd Ed.) Perspective:**
Kraus emphasizes that in traveling wave antennas, the current magnitude decreases exponentially along the antenna, indicating that energy is being radiated progressively. The antenna's dimensions are often larger than a half-wavelength to ensure a traveling wave mode.

**Examples:**

*   **Traveling Wave Wire Antennas:** Such as rhombic antennas and V antennas.
*   **Long Wire Antennas:** Where the length is significantly greater than a wavelength.
*   **Helical Antennas:** (When operated in axial mode).
*   **Yagi-Uda Antennas:** While primarily resonant, the driven element and directors/reflectors can be viewed as supporting wave propagation to some extent, though the emphasis is on resonance.

**Important Points to Remember:**

*   The absence of significant standing waves is a defining characteristic.
*   Energy is radiated continuously along the antenna's length.
*   Directional radiation pattern is typically achieved.

### 3. Types of Traveling Wave Antennas

Traveling wave antennas encompass a variety of structures, each with specific design considerations and radiation characteristics.

**3.1. Long Wire Antennas**

A long wire antenna is simply a straight wire whose length is significantly greater than a wavelength (typically $L \ge \lambda$). When fed appropriately, it can support a traveling wave of current.

**Key Concepts & Definitions:**

*   **Length-to-Wavelength Ratio ($L/\lambda$):** A crucial parameter determining the radiation characteristics.
*   **Feed Point:** Often at one end or the center.
*   **Termination:** A matched load at the far end is essential to prevent reflections and maintain the traveling wave nature.

**Radiation Mechanism:**
The current distribution along the long wire is approximately exponential. Radiation occurs from each current element along the wire. The overall radiation pattern depends on the total length and the phase velocity of the wave.

**Balanis (4th Ed.) Perspective:**
Balanis analyzes long wire antennas using the current distribution. For very long wires, the radiation pattern can become complex, with multiple lobes. The angle of maximum radiation is related to the effective velocity of the wave.

**Kraus (3rd Ed.) Perspective:**
Kraus explains that as the length of the wire increases relative to the wavelength, the radiation pattern becomes more directive and shifts towards the end of the wire where the current is propagating.

**Examples:**

*   A wire antenna 3 wavelengths long fed at one end and terminated with a 600-ohm resistor to ground.

**3.2. Rhombic Antennas**

A rhombic antenna is a diamond-shaped structure formed by four wire segments. It's a broadband antenna that radiates in a direction along the axis of the diamond.

**Key Concepts & Definitions:**

*   **Leg Length ($L$):** The length of each of the four wire segments.
*   **Apex Angle ($\alpha$):** The angle at the vertices of the rhombus.
*   **Height ($H$):** The vertical distance from the ground.
*   **Characteristic Impedance:** The impedance of the wire and its immediate surroundings.
*   **Termination:** A matched load at one end and often an open circuit at the other (though feeding at the center with balanced lines is also possible).

**Radiation Mechanism:**
The four wire segments collectively support a traveling wave. The phase of the wave is such that radiation is maximum along the axis of the rhombus. The shape and dimensions are designed to achieve broad bandwidth.

**Balanis (4th Ed.) Perspective:**
Balanis provides detailed analysis of the rhombic antenna, relating its radiation pattern and gain to the leg length, apex angle, and height. He highlights its suitability for point-to-point communication.

**Garg (2001) Perspective:**
While Garg's handbook focuses on microstrip antennas, the principles of broadband antenna design are applicable. Rhombic antennas are discussed in general antenna textbooks as classic broadband examples.

**Kraus (3rd Ed.) Perspective:**
Kraus describes the rhombic antenna as a widely used broadband antenna for medium and high frequencies, explaining its unidirectional radiation and how its impedance and pattern can be tailored by adjusting its geometry.

**Examples:**

*   A rhombic antenna used for shortwave broadcasting or long-distance communication.

**3.3. Helical Antennas**

Helical antennas can be operated in two main modes: normal mode and axial mode. The axial mode operation is characteristic of traveling wave antennas, producing a circularly polarized, end-fire radiation pattern.

**Key Concepts & Definitions:**

*   **Circumference ($C$):** The circumference of the helix.
*   **Pitch Angle ($\alpha$):** The angle between the axis of the helix and the plane of the circumference.
*   **Axial Ratio:** A measure of the ellipticity of the polarization. For good circular polarization, the axial ratio should be close to 1.
*   **Handedness:** Right-handed or left-handed helix.

**Radiation Mechanism (Axial Mode):**
The helix acts as a slow-wave structure. When the circumference is approximately one wavelength ($C \approx \lambda$) and the pitch angle is around 12-15 degrees, the radiation from the current elements along the helix is in phase along the axis, leading to end-fire radiation. The wave propagates along the helix with a phase velocity close to the speed of light.

**Balanis (4th Ed.) Perspective:**
Balanis dedicates significant coverage to helical antennas, explaining the conditions for normal and axial mode operation. He details the design parameters (diameter, pitch, number of turns) affecting gain, beamwidth, and polarization for axial mode operation.

**Kraus (3rd Ed.) Perspective:**
Kraus thoroughly discusses helical antennas, particularly their axial mode. He emphasizes the conditions for broadside (normal mode) and end-fire (axial mode) radiation and the design considerations for achieving circular polarization.

**Examples:**

*   Used in satellite communication, GPS receivers, and telemetry systems where circular polarization is advantageous.

**Important Points to Remember:**

*   Helical antennas in axial mode are inherently circularly polarized.
*   The helix circumference and pitch angle are critical for axial mode operation.

### 4. Broadband Antennas: Concepts and Principles

Broadband antennas are designed to operate effectively over a wide range of frequencies. Traveling wave antennas, due to their non-resonant nature and gradual radiation, often exhibit broadband characteristics.

**Key Concepts & Definitions:**

*   **Bandwidth:** The frequency range over which the antenna's performance (e.g., VSWR, gain, radiation pattern) remains within acceptable limits.
*   **Impedance Matching:** Crucial for broadband antennas to ensure efficient power transfer over the entire frequency band.
*   **Self-Complementary Antennas:** Antennas whose complementary structure has the same shape as the original antenna. These antennas have a theoretically infinite bandwidth and a characteristic impedance of 30$\pi$ $\approx$ 73 ohms (e.g., a bowtie antenna).
*   **Log-Periodic Antennas:** Arrays of dipole elements of varying lengths and spacings, designed to have a self-similar structure across a range of frequencies.
*   **Spiral Antennas:** Antennas with spiral-shaped arms, offering broad bandwidth and circular polarization.

**Learning Outcomes Covered:**

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)** - Understanding how different broadband antenna structures achieve radiation.
*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4)** - This section directly addresses advanced antenna types.

**Textbook References:**

*   **Balanis (4th Ed.):** Chapter 7 (Broadband Antennas).
*   **Kraus (3rd Ed.):** Chapter 8 (Log-Periodic Antennas), Chapter 9 (Spiral Antennas).
*   **Milligan (2nd Ed.):** Chapter 4 (Broadband Antennas).

### 5. Specific Broadband Antenna Designs

**5.1. Log-Periodic Antennas (LPDA)**

Log-periodic antennas consist of a series of dipole elements of varying lengths and spacings, arranged in a way that their performance is periodic with the logarithm of frequency. This leads to a broadband characteristic.

**Key Concepts & Definitions:**

*   **Active Element:** At any given frequency, only a few elements near resonance radiate effectively, forming the "active region."
*   **Logarithmic Periodicity:** The design parameters (element lengths, spacing) are related by a constant scaling factor for each subsequent element.
*   **Directivity:** Generally bidirectional unless truncated or modified.
*   **Impedance:** The input impedance is relatively constant over the operating band.

**Radiation Mechanism:**
As the frequency changes, the active region shifts along the antenna. At lower frequencies, longer elements are active, and at higher frequencies, shorter elements are active. The feeding arrangement ensures that the elements in the active region are driven with the correct phase and amplitude to produce a directional beam.

**Balanis (4th Ed.) Perspective:**
Balanis thoroughly covers log-periodic antennas, explaining their construction, electrical characteristics, and design procedures. He discusses the scaling factor and its impact on bandwidth and gain.

**Kraus (3rd Ed.) Perspective:**
Kraus provides a detailed explanation of log-periodic antennas, including their frequency-independent properties and design considerations for achieving specific bandwidths and gain.

**Examples:**

*   TV antennas (UHF/VHF), antenna test ranges.

**Important Points to Remember:**

*   The active region is key to understanding its operation at different frequencies.
*   The design is based on logarithmic scaling of element lengths and spacings.

**5.2. Spiral Antennas**

Spiral antennas consist of two or more conductive arms wound in a spiral shape. They are inherently broadband and often produce circularly polarized radiation.

**Key Concepts & Definitions:**

*   **Arm Width ($w$):** The width of the conductive arms.
*   **Arm Spacing ($s$):** The distance between adjacent arms.
*   **Inner Radius ($r_i$):** The radius of the innermost turn.
*   **Outer Radius ($r_o$):** The radius of the outermost turn.
*   **Mode of Operation:** The radiation pattern and frequency range are determined by the mode of propagation along the spiral arms.
*   **Self-Complementary Property:** A spiral antenna with properly chosen parameters can approximate a self-complementary structure, leading to broadband characteristics.

**Radiation Mechanism:**
In the most common mode (monofilar or bifilar spiral), radiation occurs from the portion of the spiral arms where the circumference is approximately one wavelength. As the frequency changes, the location of this "active region" shifts along the spiral arms, maintaining broadband operation. The spiral structure naturally leads to circularly polarized radiation.

**Balanis (4th Ed.) Perspective:**
Balanis dedicates a section to spiral antennas, discussing their structure, modes of operation, and design for broadband and circular polarization.

**Kraus (3rd Ed.) Perspective:**
Kraus extensively covers spiral antennas, including Archimedean spirals and their variations. He explains the radiation mechanism and the conditions for achieving circular polarization and broad bandwidth.

**Examples:**

*   Electronic warfare (EW) systems, electronic intelligence (ELINT), countermeasures (ECM), spectrum monitoring.

**Important Points to Remember:**

*   Spiral antennas are known for their broadband and circular polarization capabilities.
*   Radiation is typically concentrated at the portion of the spiral where the circumference is about one wavelength.

**5.3. Other Broadband Antennas**

*   **V-Antennas and Corner Reflectors:** Can be made broadband by increasing their size and tailoring the elements.
*   **Bowtie Antennas:** A type of planar dipole with flared ends, offering broader bandwidth than a simple dipole. Approximates self-complementary properties.
*   **Conical Antennas:** Similar to V-antennas but with a conical shape, offering broadband performance.

### 6. Advantages and Disadvantages of Traveling Wave and Broadband Antennas

| Feature              | Traveling Wave Antennas                                | Broadband Antennas                                     |
| :------------------- | :----------------------------------------------------- | :----------------------------------------------------- |
| **Advantages**       | - Unidirectional radiation (often)                     | - Operates over a wide frequency range                 |
|                      | - Relatively simple to construct (e.g., long wire)     | - Reduces need for multiple antennas                   |
|                      | - Can achieve high directivity (long wires)           | - Useful for applications with varying frequencies     |
|                      | - Some types are circularly polarized (helical)      | - Log-periodic and spiral are common examples          |
| **Disadvantages**    | - Requires careful termination to prevent reflections  | - May have lower gain compared to resonant antennas    |
|                      | - Radiation pattern can be sensitive to frequency      | - Impedance matching can be challenging over the band  |
|                      | - Can be physically large (long wire)                  | - May have complex geometries                          |
|                      | - Performance sensitive to velocity factor             | - Radiation pattern can vary significantly with frequency |

**Learning Outcomes Covered:**

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)** - Understanding the trade-offs and application suitability.
*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4)** - Evaluating different broadband designs.

### 7. Practice Questions and Answers

**Question 1:**
What is the primary difference between the radiation mechanism of a resonant antenna and a traveling wave antenna?

**Answer:**
A resonant antenna relies on standing waves of current and voltage to radiate efficiently, with radiation occurring primarily at current antinodes. A traveling wave antenna, on the other hand, radiates as an electromagnetic wave propagates along its structure. The current distribution is generally exponential in decay, and energy is radiated continuously along the length of the antenna.

**Question 2:**
For a helical antenna to operate in the axial mode and produce end-fire radiation with circular polarization, what are the approximate conditions for its circumference and pitch angle?

**Answer:**
For axial mode operation, the circumference ($C$) of the helix should be approximately one wavelength ($C \approx \lambda$), and the pitch angle ($\alpha$) should be between 12 and 15 degrees.

**Question 3:**
Describe the principle of operation of a log-periodic antenna.

**Answer:**
A log-periodic antenna consists of multiple dipole elements of varying lengths and spacings, designed with a logarithmic periodicity. At any given frequency, only a segment of the antenna, known as the "active region," where the element lengths are close to resonance, radiates effectively. As the frequency changes, the active region shifts along the antenna, allowing it to maintain broadband performance.

**Question 4:**
What is the significance of terminating a long wire antenna with a matched load?

**Answer:**
Terminating a long wire antenna with a matched load is crucial to absorb the traveling wave of current and prevent reflections from the end of the wire. This ensures that the antenna primarily operates in a traveling wave mode, minimizing standing waves and leading to a more predictable and efficient radiation pattern. Without a matched load, reflections would create standing waves, altering the radiation characteristics and potentially causing impedance mismatches.

**Question 5:**
Name two applications where broadband antennas are particularly useful and explain why.

**Answer:**
1.  **Electronic Warfare (EW) / Electronic Intelligence (ELINT):** EW systems often need to detect, identify, and jam signals across a wide spectrum of frequencies. A broadband antenna allows a single antenna system to cover this entire range, eliminating the need for multiple antennas and rapid switching.
2.  **Spectrum Monitoring:** To monitor the radio frequency spectrum, a wideband antenna is required to capture signals present at various frequencies simultaneously or efficiently scan through different bands.

**Question 6:**
Which type of broadband antenna is often described as approximating a "self-complementary" structure, and what theoretical advantage does this offer?

**Answer:**
The **bowtie antenna** is often described as approximating a self-complementary structure. A theoretically self-complementary antenna has a constant impedance of 30$\pi$ ($\approx$ 73 ohms) and can operate with infinite bandwidth. While practical bowtie antennas have finite bandwidth, this property contributes to their broadband performance.

### 8. Important Points to Remember

*   **Traveling wave antennas radiate energy as the wave propagates along their structure.** This is in contrast to resonant antennas which rely on standing waves.
*   **Minimizing reflections is key** for efficient traveling wave operation, often achieved by terminating the antenna with a matched load.
*   **Long wire antennas, rhombic antennas, and helical antennas (in axial mode) are examples of traveling wave antennas.**
*   **Broadband antennas operate effectively over a wide frequency range.**
*   **Log-periodic and spiral antennas are prominent examples of broadband antennas** that leverage principles of scaling and active regions for their performance.
*   **Circular polarization is a characteristic often associated with helical and spiral antennas.**
*   **The impedance matching** of an antenna is critical for its overall performance, especially for broadband antennas.
*   **The "active region"** is a key concept for understanding the operation of log-periodic antennas at different frequencies.

---

This concludes the study notes for Traveling Wave and Broadband Antennas. Remember to refer to the listed textbooks for more in-depth analysis and mathematical derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
