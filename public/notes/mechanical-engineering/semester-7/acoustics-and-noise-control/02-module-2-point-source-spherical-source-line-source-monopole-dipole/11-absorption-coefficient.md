---
title: "Absorption coefficient"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 2: Point source, spherical source, Line source, Monopole, dipole"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463fe7"
status: "completed"
scrapedAt: "2026-05-20T18:09:38.435Z"
---
# ACOUSTICS AND NOISE CONTROL

## Module 2: Point Source, Spherical Source, Line Source, Monopole, Dipole

### Topic: Absorption Coefficient

**Course Outcomes Alignment:**

*   **CO1: To define various acoustic terminologies and understand the physics behind acoustic wave propagation (Knowledge Level: K2)** - This topic directly contributes by defining and explaining the acoustic property of absorption.
*   **CO2: To analyse the transmission of sound through different media and tubes (Knowledge Level: K4)** - Understanding absorption is crucial for analyzing how sound energy is lost or transmitted through various materials and environments.
*   **CO4: To explain various noise reducing measures (Knowledge Level: K2)** - Absorption is a fundamental principle behind many noise reduction strategies.

---

### 1. Introduction to Sound Absorption

Sound energy, upon encountering a surface, can undergo three primary processes:

*   **Reflection:** The sound wave bounces off the surface.
*   **Transmission:** The sound wave passes through the surface into the medium beyond.
*   **Absorption:** The sound energy is converted into other forms of energy, primarily heat, within the material.

The **absorption coefficient** is a measure of how effectively a material absorbs sound energy. It is a crucial parameter in understanding sound propagation, reverberation, and the design of acoustically treated spaces.

**Key Concept:** The amount of sound energy absorbed by a material is dependent on the material's properties, the angle of incidence of the sound wave, and the frequency of the sound.

---

### 2. Definition of Absorption Coefficient ($\alpha$)

The **absorption coefficient ($\alpha$)** of a material is defined as the ratio of the sound energy absorbed by the material to the incident sound energy.

Mathematically, it is expressed as:

$$ \alpha = \frac{\text{Absorbed Sound Energy}}{\text{Incident Sound Energy}} $$

*   **Range of $\alpha$**: The absorption coefficient ranges from 0 to 1.
    *   $\alpha = 0$: The material is a perfect reflector, absorbing no sound energy. (e.g., a very hard, smooth, and dense surface like polished steel).
    *   $\alpha = 1$: The material is a perfect absorber, absorbing all incident sound energy. (e.g., an anechoic wedge, although a truly perfect absorber is theoretical).

**Important Point:** The absorption coefficient is not a single value but varies with the **frequency** of the sound. Therefore, it is typically presented as a set of values for different octave bands or one-third octave bands of frequency.

**Reference (Ver & Beranek, Chapter 2):** Ver and Beranek's text emphasizes that absorption coefficient is a frequency-dependent property and is crucial for calculating reverberation time and sound transmission loss.

---

### 3. Types of Absorption Coefficients

Based on how the sound energy is measured, there are different types of absorption coefficients:

#### 3.1. Random Incidence Absorption Coefficient ($\alpha_{rand}$ or $\alpha_{∞}$)

*   **Definition:** This is the most commonly used absorption coefficient. It is the ratio of absorbed sound energy to incident sound energy when the sound waves arrive at the surface from all directions with equal probability (i.e., under diffuse sound field conditions).
*   **Measurement:** Typically measured in reverberation rooms using the Sabine or Eyring reverberation time formulas.
*   **Significance:** Represents the performance of a material in typical room acoustics scenarios where sound waves are reflected from multiple surfaces.

#### 3.2. Normal Incidence Absorption Coefficient ($\alpha_{normal}$ or $\alpha_n$)

*   **Definition:** This is the ratio of absorbed sound energy to incident sound energy when the sound waves strike the surface perpendicularly (at normal incidence).
*   **Measurement:** Typically measured in impedance tubes (also known as standing wave tubes).
*   **Significance:** Useful for understanding the fundamental absorption mechanism of a material and for theoretical calculations. It is generally different from the random incidence absorption coefficient.

**Reference (Ekinsler, Frey, Coppens, Sanders, Chapter 14):** Ekinsler et al. discuss the measurement of absorption and reflection coefficients using impedance tubes, highlighting the distinction between normal and diffuse incidence.

---

### 4. Factors Affecting Absorption Coefficient

The absorption coefficient of a material is influenced by several factors:

*   **Material Properties:**
    *   **Porosity:** Open-cell porous materials (e.g., fiberglass, mineral wool, acoustic foam) are generally good absorbers. The pores allow sound waves to penetrate, where viscous losses and thermal effects convert sound energy into heat.
    *   **Density:** While porosity is key, density plays a role. Very dense materials tend to reflect more sound.
    *   **Flow Resistance:** A critical parameter for porous absorbers. It quantifies the resistance to airflow through the material. Optimal flow resistance exists for maximum absorption.
    *   **Thickness:** Thicker materials generally provide better absorption, especially at lower frequencies, as they allow for more energy dissipation.
    *   **Air Cavity behind the material:** A sealed air cavity behind a porous absorber can significantly enhance its low-frequency absorption through resonance and membrane action.
*   **Frequency of Sound:**
    *   Porous absorbers are typically more effective at mid to high frequencies.
    *   Resonant absorbers (e.g., panel absorbers, Helmholtz resonators) are designed to be effective at specific low frequencies.
*   **Angle of Incidence:** The absorption coefficient can vary with the angle at which the sound wave strikes the surface. Normal incidence is usually lower than random incidence for porous materials.
*   **Surface Characteristics:** Smooth surfaces tend to reflect more, while rough or textured surfaces can contribute to scattering and some absorption.

**Reference (Munjal, Chapter 3):** Munjal elaborates on the physical mechanisms of sound absorption in porous materials, discussing viscous and thermal losses, and the importance of flow resistivity.

---

### 5. Common Types of Sound Absorbing Materials and Their Properties

Understanding common materials helps in applying the concept of absorption coefficient:

*   **Porous Absorbers:**
    *   **Materials:** Fiberglass, mineral wool, acoustic foam, felt, carpeting.
    *   **Mechanism:** Sound waves penetrate the porous structure, and the friction of air particles moving within the pores converts acoustic energy into heat due to viscous and thermal effects.
    *   **Typical $\alpha$ values:** Can range from 0.1 at low frequencies to 0.8-1.0 at high frequencies for appropriately thick materials.
    *   **Example:** Fiberglass ceiling tiles are widely used to reduce reverberation in offices and classrooms.

*   **Panel/Membrane Absorbers:**
    *   **Materials:** Thin panels of wood, metal, gypsum board, or flexible membranes mounted over an air cavity.
    *   **Mechanism:** The panel or membrane vibrates when struck by sound waves. This vibration causes the air in the cavity behind it to compress and expand, leading to viscous losses at the panel surface and in the air. Damping material can be added to the cavity to increase absorption.
    *   **Typical $\alpha$ values:** Most effective at low frequencies, often around their resonant frequency. Can be tuned to specific frequencies.
    *   **Example:** A wooden panel mounted on a wall with an air gap behind it can absorb low-frequency hum from machinery.

*   **Resonant Absorbers (Helmholtz Resonators):**
    *   **Materials:** Typically constructed as a cavity with a narrow neck or opening.
    *   **Mechanism:** The air in the neck acts as a mass, and the air in the cavity acts as a spring. This combination creates a resonant system that vibrates strongly at its natural frequency, absorbing sound energy through viscous losses in the neck and thermal losses at the neck walls.
    *   **Typical $\alpha$ values:** Very high absorption coefficient at a narrow band of low frequencies.
    *   **Example:** Perforated panels backed by an air cavity filled with porous material form a common type of Helmholtz resonator system for broad-band low-frequency absorption.

**Reference (Crocker, Chapter 6):** Crocker's handbook provides detailed information on various types of acoustic materials, their properties, and applications, including typical absorption coefficient data for different materials and frequencies.

---

### 6. Applications of Absorption Coefficient in Acoustics and Noise Control

The absorption coefficient is a fundamental parameter used in various acoustic design and noise control applications:

*   **Reverberation Time Calculation (Sabine's Formula):**
    *   The Sabine formula relates reverberation time ($T_{60}$, the time for sound pressure level to decay by 60 dB) to room volume ($V$) and total absorption ($A$).
    *   $T_{60} = \frac{0.161 V}{A}$
    *   Total absorption ($A$) is the sum of the absorption of all surfaces in the room, calculated as $A = \sum_{i} S_i \alpha_i$, where $S_i$ is the area of surface $i$ and $\alpha_i$ is its absorption coefficient.
    *   **Impact:** Higher absorption coefficients lead to shorter reverberation times, which is desirable in spaces like concert halls and classrooms for speech intelligibility and musical clarity.

*   **Sound Insulation Design:**
    *   While sound insulation is primarily about transmission loss, absorption within a room can indirectly affect the measured insulation. High absorption in the receiving room can reduce the build-up of sound energy, leading to a lower measured noise level.

*   **Noise Control Treatments:**
    *   Applying sound-absorbing materials to walls, ceilings, and baffles in noisy environments (e.g., factories, gymnasiums) reduces reverberant sound levels, improving the acoustic comfort and intelligibility of speech.

*   **Anechoic Chambers:**
    *   Designed for acoustic testing, these chambers use highly absorptive wedges (with $\alpha$ close to 1) to minimize reflections and create a free-field environment.

**Reference (Barron, Chapter 3 & 5):** Barron's book covers practical aspects of noise control, including the use of absorptive materials to reduce noise levels in industrial settings and the application of acoustic principles in room design.

---

### 7. Units and Measurement of Absorption Coefficient

*   **Unitless:** The absorption coefficient is a ratio and therefore unitless.
*   **Sabins:** Sometimes, the total absorption of a surface is expressed in Sabins (or metric Sabins).
    *   1 Sabin = 1 square foot of perfectly absorbing material.
    *   1 metric Sabin = 1 square meter of perfectly absorbing material.
    *   When calculating total absorption ($A$), if areas are in square meters and absorption coefficients are used, the result is in metric Sabins.

**Measurement Techniques:**

*   **Reverberation Room Method:** The standard method for measuring random incidence absorption coefficients. It involves measuring the reverberation time of a room with and without the sample material and using acoustic formulas to derive the absorption.
*   **Impedance Tube Method:** Used for measuring normal incidence absorption coefficients. A sound source creates a standing wave in a tube, and the sample is placed at one end. The ratio of reflected to incident sound pressure is measured to determine absorption.

**Important Point:** The reverberation room method is more representative of real-world conditions for most applications.

---

### 8. Practice Questions and Answers

**Question 1:**
Define the absorption coefficient and state its typical range. Explain the difference between normal incidence and random incidence absorption coefficients.

**Answer 1:**
The absorption coefficient ($\alpha$) is the ratio of absorbed sound energy to incident sound energy. Its range is from 0 (perfect reflector) to 1 (perfect absorber).
*   **Normal incidence absorption coefficient ($\alpha_{normal}$):** Measured when sound waves strike the surface perpendicularly.
*   **Random incidence absorption coefficient ($\alpha_{rand}$):** Measured under diffuse sound field conditions where sound waves arrive from all directions equally. $\alpha_{rand}$ is generally higher than $\alpha_{normal}$ for porous materials.

**Question 2:**
A rectangular room has dimensions 10m x 8m x 3m. The ceiling is covered with acoustic tiles having an average absorption coefficient of 0.7 at 1000 Hz. The walls and floor have an average absorption coefficient of 0.2 at 1000 Hz. Calculate the total absorption of the room at 1000 Hz.

**Answer 2:**
*   Volume ($V$) = 10m x 8m x 3m = 240 m³
*   Area of ceiling ($S_{ceiling}$) = 10m x 8m = 80 m²
*   Area of walls ($S_{walls}$) = 2 * (10m x 3m) + 2 * (8m x 3m) = 2 * 30 m² + 2 * 24 m² = 60 m² + 48 m² = 108 m²
*   Area of floor ($S_{floor}$) = 10m x 8m = 80 m²
*   Total surface area ($S_{total}$) = 80 + 108 + 80 = 268 m²

*   Absorption of ceiling ($A_{ceiling}$) = $S_{ceiling} \times \alpha_{ceiling}$ = 80 m² x 0.7 = 56 metric Sabins
*   Absorption of walls ($A_{walls}$) = $S_{walls} \times \alpha_{walls}$ = 108 m² x 0.2 = 21.6 metric Sabins
*   Absorption of floor ($A_{floor}$) = $S_{floor} \times \alpha_{floor}$ = 80 m² x 0.2 = 16 metric Sabins

*   Total Absorption ($A$) = $A_{ceiling} + A_{walls} + A_{floor}$ = 56 + 21.6 + 16 = **93.6 metric Sabins**

**Question 3:**
Which type of sound-absorbing material is generally most effective at low frequencies? Explain the mechanism.

**Answer 3:**
Panel/membrane absorbers and resonant absorbers (like Helmholtz resonators) are generally most effective at low frequencies.
*   **Panel absorbers** work by vibrating in response to sound, converting sound energy into heat through internal damping and air movement in the cavity. Their effectiveness can be tuned to specific low frequencies by adjusting the panel's mass, stiffness, and the air gap.
*   **Helmholtz resonators** utilize a mass-spring system (air in the neck is the mass, air in the cavity is the spring) to resonate at a specific low frequency, absorbing sound energy through viscous losses in the narrow neck.

**Question 4:**
True or False: An acoustic foam tile with an absorption coefficient of 0.9 at 500 Hz will absorb 90% of all sound energy hitting it, regardless of the frequency.

**Answer 4:**
False. The absorption coefficient is frequency-dependent. An $\alpha$ of 0.9 at 500 Hz means it absorbs 90% of the sound energy *at that specific frequency* or within the bandwidth of the measurement. Its performance at other frequencies (e.g., 100 Hz or 4000 Hz) will likely be different.

---

### 9. Important Points to Remember

*   **Frequency Dependence:** Absorption coefficient is always frequency-dependent. Present it with frequency data.
*   **Material Type Matters:** Porous, panel, and resonant absorbers have distinct absorption characteristics and are suited for different applications and frequency ranges.
*   **Diffuse Field:** Random incidence absorption coefficient is the most relevant for typical room acoustics.
*   ** Sabine's Formula:** Absorption is key to calculating reverberation time, a critical parameter for room acoustics.
*   **Practical Application:** Understanding absorption coefficients allows engineers to select appropriate materials for noise reduction and acoustic treatment.

---

This comprehensive study note covers the fundamental concepts of absorption coefficient, its types, influencing factors, applications, and measurement, drawing upon the principles outlined in the provided textbooks. It is designed to align with the learning outcomes and course objectives for Module 2 of Acoustics and Noise Control.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
