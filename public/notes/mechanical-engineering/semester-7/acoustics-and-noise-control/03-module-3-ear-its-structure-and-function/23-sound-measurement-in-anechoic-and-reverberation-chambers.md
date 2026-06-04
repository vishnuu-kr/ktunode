---
title: "Sound measurement in anechoic and reverberation chambers"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 3: Ear its structure and function"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464001"
status: "completed"
scrapedAt: "2026-05-20T18:09:55.754Z"
---
# ACOUSTICS AND NOISE CONTROL - Module 3: Ear its structure and function

## Topic: Sound Measurement in Anechoic and Reverberation Chambers

This topic delves into the specialized environments used for accurate sound measurements: anechoic and reverberation chambers. Understanding these chambers is crucial for characterizing the acoustic properties of materials, products, and sound sources, directly impacting noise control engineering.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the fundamental principles and purposes of anechoic and reverberation chambers.
*   Explain the design features and acoustic treatments employed in each type of chamber.
*   Describe the types of sound measurements conducted in each chamber and their applications.
*   Relate the use of these chambers to the broader context of noise and vibration control engineering.
*   Identify the challenges and limitations associated with sound measurements in these specialized environments.

---

### Course Outcomes Alignment:

This topic directly contributes to:

*   **CO1: To define various acoustic terminologies and understand the physics behind acoustic wave propagation (Knowledge Level: K2)**: Understanding how sound behaves in these chambers helps define terms like absorption, reflection, and diffusion.
*   **CO3: To understand the mechanism of hearing, noise regulations and noise measuring devices (Knowledge Level: K2)**: The measurements performed in these chambers inform product design to meet noise regulations and are conducted using specific noise measuring devices.
*   **CO4: To explain various noise reducing measures (Knowledge Level: K2)**: The data obtained from these chambers is fundamental to developing and validating noise reducing measures for products and environments.

---

### Key Concepts and Definitions:

*   **Anechoic Chamber:** A room designed to absorb virtually all sound energy incident upon its boundaries. This creates an "echo-free" environment, simulating free-field conditions.
*   **Reverberation Chamber:** A room designed to create a diffuse sound field, where sound energy is reflected and scattered uniformly throughout the space.
*   **Sound Absorption Coefficient ($\alpha$)**: The ratio of the sound energy absorbed by a material to the sound energy incident on it. Measured in anechoic chambers.
*   **Sound Power Level ($L_W$)**: A measure of the total sound energy radiated by a source per unit time. Measured for sound sources in controlled environments like anechoic chambers.
*   **Sound Transmission Class (STC)**: A single-number rating system for the airborne sound transmission loss of building partitions and elements. Materials tested for STC are often measured in reverberation chambers.
*   **Diffuse Sound Field:** A sound field where the time-averaged intensity is the same at all points and in all directions. Achieved in reverberation chambers.
*   **Sabine's Formula:** A fundamental equation in acoustics relating reverberation time ($T$), room volume ($V$), and total absorption ($A$): $T = 0.161 \times V / A$. Used in reverberation chamber design and analysis.
*   **Absorption Area ($A$)**: The equivalent area of a perfectly absorbing surface. $A = \sum S_i \alpha_i$, where $S_i$ is the surface area of the $i$-th surface and $\alpha_i$ is its absorption coefficient.
*   **Reverberation Time ($T_{60}$)**: The time it takes for the sound pressure level in a room to decay by 60 dB after the sound source is stopped. A key parameter measured in reverberation chambers.

---

### 1. Anechoic Chambers

#### 1.1 Purpose and Principle

*   **Purpose:** To provide a free-field acoustic environment where sound waves propagate outwards from a source without significant reflections from boundaries. This allows for accurate measurement of the direct sound emitted by a source.
*   **Principle:** Achieved by lining the walls, ceiling, and floor of the chamber with highly sound-absorbent materials. These materials are typically wedge-shaped to maximize the path length for sound waves to be absorbed.

#### 1.2 Design Features

*   **Wedge Absorbers:** The most distinctive feature. Made from porous materials (e.g., fiberglass, mineral wool) shaped into wedges.
    *   **Geometry:** The length, depth, and spacing of the wedges are critical for achieving high absorption across a wide frequency range. Longer and deeper wedges are more effective at lower frequencies.
    *   **Materials:** The facing material of the wedges is designed to be acoustically transparent but structurally sound.
*   **Floating Floor:** A raised floor, acoustically isolated from the main chamber structure, is often used to prevent structure-borne noise from entering the measurement area. This floor can also be covered with absorbent material or a wire mesh.
*   **Suspended Grating:** A wire mesh or grating is suspended above the wedges to provide a walking surface without disturbing the wedge structure.
*   **Isolation:** The entire chamber is typically constructed with heavy, sound-insulating walls and a carefully designed ventilation system to minimize external noise ingress.
*   **Ventilation:** Essential for comfort and equipment, but must be designed to minimize acoustic leakage and the introduction of unwanted noise. Silencers are used in the ductwork.

#### 1.3 Sound Measurements Conducted

*   **Sound Power Measurement:** Measuring the total sound energy radiated by a noise source. This is a primary application.
    *   **Method:** Sound intensity probes or microphones are placed at various locations on an imaginary surface enclosing the source. The sound pressure is measured, and sound power is calculated using standardized procedures (e.g., ISO 3744).
    *   **Example:** Determining the sound power output of a fan, air conditioner unit, or a piece of machinery.
*   **Sound Intensity Measurement:** Measuring the sound energy flow per unit area.
    *   **Method:** Using a two-microphone probe to measure the pressure and particle velocity, which together determine sound intensity.
    *   **Application:** Pinpointing noise sources on a product, mapping sound fields.
*   **Directivity Patterns:** Characterizing how a sound source radiates sound in different directions.
    *   **Method:** Rotating the source or the measuring microphone around the source to capture sound pressure levels at various angles.
*   **Insertion Loss/Isolation:** Measuring the reduction in sound transmission achieved by inserting a barrier or device into a sound path.

#### 1.4 Important Points to Remember (Anechoic Chambers)

*   **Free-field conditions are approximated.** There are always some residual reflections, especially at lower frequencies.
*   **The cut-off frequency** of an anechoic chamber is the lowest frequency at which it can effectively simulate free-field conditions. It's determined by the depth of the wedges.
*   **Strict environmental controls** (temperature, humidity, background noise) are crucial for accurate measurements.
*   **Referenced in Textbooks:** Beranek and Ver (2006) and Ekinsler et al. (2000) provide detailed explanations of anechoic chamber design and measurement techniques.

---

### 2. Reverberation Chambers

#### 2.1 Purpose and Principle

*   **Purpose:** To create a diffuse sound field and measure the reverberation time or other acoustic properties of materials and spaces under diffuse conditions.
*   **Principle:** The chamber is designed with hard, reflective surfaces and diffusing elements to ensure that sound waves are reflected and scattered repeatedly, leading to a uniform distribution of sound energy over time and space.

#### 2.2 Design Features

*   **Hard, Reflective Surfaces:** Walls, ceiling, and floor are typically constructed from smooth, hard materials like concrete, plaster, or steel, which have low sound absorption coefficients.
*   **Irregular Geometry:** The shape of the room is often non-parallel to avoid strong, directional reflections and standing waves that could create significant spatial variations in the sound field.
*   **Diffusers:** Rotating panels, irregular shapes on the walls, or any element that breaks up plane wave reflections and scatters sound energy are used to enhance diffusion.
    *   **Rotating Vanes:** Historically, large rotating vanes were used to constantly change the room's geometry and create a more uniform sound field.
*   **Volume:** Reverberation chambers are typically large to achieve a sufficiently diffuse sound field and to test large samples.
*   **Controlled Background Noise:** Minimizing external noise ingress is still important, but the focus is on achieving a high level of internal sound reflection.

#### 2.3 Sound Measurements Conducted

*   **Sound Absorption Coefficient ($\alpha$) of Materials:** This is a primary measurement performed in reverberation chambers.
    *   **Method:** A large sample of the material is placed in the center of the chamber. The reverberation time ($T_1$) is measured with the empty chamber, and then again ($T_2$) with the sample. Using Sabine's formula (or more advanced methods like Eyring or statistical absorption area), the absorption area of the sample is calculated, and from that, the absorption coefficient.
    *   **Example:** Determining the sound absorption properties of acoustic ceiling tiles, carpets, or wall panels.
*   **Sound Transmission Loss (STL) / Insertion Loss of Barriers:**
    *   **Method:** Two reverberation chambers are used: a source room and a receiving room, separated by a partition (the sample). Sound is introduced into the source room, and the sound pressure level is measured in both rooms. The transmission loss is calculated based on the difference in sound levels and the area of the partition.
    *   **Example:** Measuring the ability of a wall construction or a window to block sound.
*   **Reverberation Time ($T_{60}$):** Measuring the decay rate of sound in a space, which is influenced by the absorption properties of the surfaces. This is crucial for architectural acoustics design.

#### 2.4 Important Points to Remember (Reverberation Chambers)

*   **Diffuse sound field is an idealization.** There will always be some spatial and temporal variations.
*   **Sabine's formula has limitations** at high absorption levels or small rooms. Eyring's formula and other corrections are often used.
*   **The size of the sample** tested for absorption can influence the results, especially at higher frequencies.
*   **Referenced in Textbooks:** Ekinsler et al. (2000) provides the theoretical basis for reverberation chamber measurements, including Sabine's and Eyring's formulas. Munjal (2013) offers insights into the practical aspects of acoustic testing in reverberation chambers.

---

### 3. Comparison of Anechoic and Reverberation Chambers

| Feature           | Anechoic Chamber                                 | Reverberation Chamber                               |
| :---------------- | :----------------------------------------------- | :-------------------------------------------------- |
| **Primary Goal**  | Simulate free-field conditions; minimize reflections. | Create a diffuse sound field; maximize reflections. |
| **Wall Treatment** | Highly sound-absorbent wedges.                   | Hard, reflective surfaces; diffusing elements.      |
| **Sound Field**   | Direct sound, no reflected sound.                | Diffuse sound, reflections from all surfaces.       |
| **Key Measurements** | Sound power, sound intensity, directivity.       | Sound absorption coefficient, transmission loss.    |
| **Typical Frequency Range** | Effective from higher frequencies down to the cut-off frequency of wedges. | Effective across a broader range, dependent on room size and diffusion. |
| **Application**   | Measuring sound emitted by sources.              | Measuring how materials interact with sound.        |

---

### 4. Practical Considerations and Challenges

*   **Frequency Dependence:** Both chambers have limitations at certain frequencies. Anechoic chambers are less effective at very low frequencies due to wedge length. Reverberation chambers can have issues with standing waves at low frequencies and may require larger rooms for better diffusion.
*   **Background Noise:** Minimizing unwanted background noise is critical for both types of chambers. This requires careful construction, isolation, and ventilation design.
*   **Measurement Standards:** Adherence to international standards (ISO, ASTM) is essential for comparability and validity of measurements.
*   **Calibration:** All measuring instruments (microphones, sound level meters, sound intensity probes) must be regularly calibrated.
*   **Sample Size and Placement:** The size and placement of samples in reverberation chambers can significantly affect the results, particularly for sound absorption.

---

### 5. Relevance to Noise and Vibration Control Engineering

*   **Product Development:** Anechoic chambers are vital for characterizing the noise emissions of products (e.g., appliances, machinery, vehicles) so that designs can be optimized to meet noise regulations and customer expectations.
*   **Material Selection:** Reverberation chambers enable engineers to select and specify acoustic materials (insulators, absorbers, diffusers) for buildings, vehicles, and industrial environments to achieve desired acoustic performance.
*   **Building Acoustics:** Reverberation time measurements inform the design of concert halls, auditoriums, and offices for optimal acoustics. Transmission loss measurements ensure that building elements provide adequate sound insulation.
*   **Standards Compliance:** Many product performance standards (e.g., for noise emissions of HVAC equipment) require testing in specific acoustic environments like anechoic chambers.

---

### Practice Questions and Answers:

**Question 1:** What is the primary purpose of an anechoic chamber?
**Answer:** The primary purpose of an anechoic chamber is to simulate free-field acoustic conditions by absorbing virtually all incident sound energy, thereby minimizing reflections from its boundaries. This allows for accurate measurement of the direct sound emitted by a source. (CO1, CO3)

**Question 2:** Describe the key feature that distinguishes an anechoic chamber from a reverberation chamber in terms of its internal surfaces.
**Answer:** An anechoic chamber's internal surfaces are covered with highly sound-absorbent materials, typically wedge-shaped, to absorb sound. In contrast, a reverberation chamber's surfaces are hard and reflective to promote sound diffusion. (CO1)

**Question 3:** Explain how sound absorption coefficient of a material is measured using a reverberation chamber.
**Answer:** A sample of the material is placed in a reverberation chamber, and the reverberation time is measured with and without the sample. Using Sabine's or Eyring's formula, the increase in absorption due to the sample is calculated, from which the absorption coefficient can be determined. (CO1, CO4)

**Question 4:** Why is a "floating floor" often used in an anechoic chamber?
**Answer:** A floating floor is an acoustically isolated floor designed to prevent structure-borne noise from the outside environment or the chamber's support structure from entering the measurement space, ensuring that only airborne sound from the source is measured. (CO1)

**Question 5:** What type of sound field is created in a reverberation chamber, and why is it important for acoustic measurements?
**Answer:** A diffuse sound field is created in a reverberation chamber. This means that sound energy is distributed uniformly in all directions and at all points, which is essential for accurate measurements of the average sound absorption coefficient of materials and the transmission loss of partitions. (CO1)

---

### Important Points to Remember:

*   **Anechoic chambers = No echoes.** Focus on direct sound from sources.
*   **Reverberation chambers = Lots of echoes (diffuse field).** Focus on material properties and sound transmission.
*   **Wedges are key for anechoic chambers.** Longer wedges = lower cut-off frequency.
*   **Hard, irregular surfaces are key for reverberation chambers.**
*   **Sabine's formula ($T = 0.161V/A$) is central to reverberation chamber calculations.**
*   These chambers are essential tools for engineers to design quieter products and more acoustically comfortable environments.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### References and Further Reading:

*   **Noise and vibration control engineering** by Istvan L. Ver and Leo L. Beranek (Wiley, Second edition, 2006) - Chapters dedicated to acoustic environments and measurement techniques.
*   **Fundamentals of Acoustics** by Lawrence Ekinsler, Austin R Frey, Alan B Coppens, James V Sanders (Wiley, Fourth edition, 2000) - Provides the foundational physics and mathematical basis for these chambers and measurements.
*   **Noise and Vibration Control** by M L Munjal (World Scientific publishing, 2013) - Offers practical insights and advanced topics relevant to acoustic measurements.
*   **Handbook of Noise and Vibration Control** by Malcom J Crocker (Wiley, 2007) - Comprehensive coverage of noise measurement techniques and control strategies.
*   **Industrial Noise Control and Acoustics** by Randall F. Barron (Marcel Dekker, Inc., New York., 2001) - Focuses on practical applications in industrial settings.
*   **Mechanical Vibrations and Industrial Noise Control** by Lasithan L G (PHI Learning, 2014) - Covers broader aspects of noise control, including measurement.