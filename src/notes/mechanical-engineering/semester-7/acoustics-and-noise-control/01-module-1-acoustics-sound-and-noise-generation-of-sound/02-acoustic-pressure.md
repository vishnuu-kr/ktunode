---
title: "Acoustic pressure"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 1: Acoustics, sound and noise, generation of sound"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463fd1"
status: "completed"
scrapedAt: "2026-05-20T18:09:23.588Z"
---
# ACOUSTICS AND NOISE CONTROL

## Module 1: Acoustics, Sound and Noise, Generation of Sound

### Topic: Acoustic Pressure

---

### Learning Outcomes Covered:

*   **LO 1:** Define acoustic pressure and its role in sound waves.
*   **LO 2:** Understand the relationship between acoustic pressure and other acoustic quantities.
*   **LO 3:** Explore the physical significance and measurement of acoustic pressure.

---

### Course Outcomes Addressed:

*   **CO1 (K2):** Define various acoustic terminologies and understand the physics behind acoustic wave propagation. (This topic directly addresses the definition and physical basis of acoustic pressure as a fundamental acoustic quantity).

---

### 1. Introduction to Acoustic Pressure

**Acoustic pressure** (often denoted as $p$ or $p_{ac}$) is a fundamental quantity in acoustics that describes the fluctuations in pressure around the ambient static pressure caused by the passage of a sound wave.

*   **Key Concept:** Sound waves are mechanical waves that propagate through a medium (like air, water, or solids) by causing vibrations in the particles of that medium. These vibrations lead to compressions and rarefactions, which are essentially localized increases and decreases in pressure.
*   **Analogy:** Imagine pushing a slinky. The compressions and expansions that travel along the slinky are analogous to the pressure variations in a sound wave.

**1.1. Static vs. Dynamic Pressure:**

*   **Static Pressure ($p_0$):** The ambient pressure of the medium in the absence of a sound wave. For air at sea level, this is approximately 101,325 Pascals (Pa) or 1 atmosphere (atm).
*   **Dynamic Pressure ($p_{ac}$):** The fluctuating pressure superimposed on the static pressure due to the sound wave. This is the quantity we refer to as acoustic pressure.

**1.2. Relationship to Medium Displacement and Particle Velocity:**

Acoustic pressure is intimately linked to the motion of particles within the medium.

*   **Displacement ($s$ or $\xi$):** The small distance a particle in the medium moves from its equilibrium position due to the sound wave.
*   **Particle Velocity ($u$ or $v$):** The rate of change of displacement with respect to time ($u = \frac{\partial s}{\partial t}$).

*   **Textbook Reference:** Kinsler, Frey, Coppens, & Sanders (2000) extensively discuss the relationship between pressure, displacement, and velocity in Chapters 1 and 2, laying the groundwork for understanding acoustic phenomena.
*   **Key Relationship:** In a plane wave propagating in a lossless medium, acoustic pressure is directly proportional to particle velocity and the specific acoustic impedance of the medium.

**1.3. Mathematical Representation:**

For a simple plane harmonic sound wave, the acoustic pressure can be described as:

$p(x, t) = p_{max} \cos(kx - \omega t + \phi)$

Where:
*   $p(x, t)$: Acoustic pressure at position $x$ and time $t$.
*   $p_{max}$: The **acoustic pressure amplitude** (also called peak pressure). This is the maximum deviation of the acoustic pressure from the ambient static pressure.
*   $k$: The **wave number**, related to the wavelength ($\lambda$) by $k = \frac{2\pi}{\lambda}$.
*   $\omega$: The **angular frequency**, related to the frequency ($f$) by $\omega = 2\pi f$.
*   $\phi$: The **phase constant**.

---

### 2. Units and Measurement of Acoustic Pressure

**2.1. Units of Acoustic Pressure:**

*   The SI unit for pressure is the **Pascal (Pa)**, which is equivalent to one Newton per square meter ($N/m^2$).
*   Acoustic pressure values are often very small compared to atmospheric pressure, so we typically deal with Pascals or kilopascals.

**2.2. Sound Pressure Level (SPL):**

Directly measuring acoustic pressure in Pascals is often impractical for expressing loudness. Instead, a logarithmic scale called the **Sound Pressure Level (SPL)** is used.

*   **Definition:** SPL is a logarithmic measure of the effective sound pressure of a sound relative to a reference value.
*   **Formula:**
    $L_p = 20 \log_{10} \left(\frac{p_{rms}}{p_{ref}}\right)$ dB
    Where:
    *   $L_p$: Sound Pressure Level in decibels (dB).
    *   $p_{rms}$: The root-mean-square (RMS) value of the acoustic pressure.
    *   $p_{ref}$: The reference sound pressure, which is conventionally $20 \mu Pa$ (micropascals) in air. This value is approximately the threshold of human hearing at $1000 \, \text{Hz}$.

*   **Importance of RMS:** The RMS value of acoustic pressure is used because it relates to the power or intensity of the sound wave, which is proportional to the square of the pressure amplitude.
    $p_{rms} = \frac{p_{max}}{\sqrt{2}}$ for a sinusoidal wave.

*   **Textbook Reference:** Both Ver & Beranek (2006) and Kinsler et al. (2000) dedicate significant portions to the concept of sound pressure level and decibels, explaining their importance in noise measurement and perception. Crocker (2007) also provides comprehensive coverage in its handbook.

**2.3. Measurement Devices:**

*   **Microphone:** The primary transducer for converting acoustic pressure waves into an electrical signal. Microphones are essentially sensitive diaphragms that vibrate in response to pressure fluctuations.
*   **Sound Level Meter (SLM):** An instrument that combines a microphone, amplifier, and signal processing circuitry to measure and display the sound pressure level. SLMs often include weighting filters (like A-weighting) to simulate human hearing response.

---

### 3. Physical Significance and Properties of Acoustic Pressure

**3.1. Relation to Sound Intensity:**

Sound intensity ($I$) is the average rate at which sound energy is transferred per unit area. It is a vector quantity.

*   **Formula (for plane waves in a lossless medium):**
    $I = \frac{p_{rms}^2}{\rho_0 c_0}$

    Where:
    *   $\rho_0$: Density of the medium.
    *   $c_0$: Speed of sound in the medium.
    *   $\rho_0 c_0$: This product is known as the **characteristic acoustic impedance** ($z_0$) of the medium.

*   **Key Insight:** The intensity of a sound wave is proportional to the square of the acoustic pressure. This is why SPL is a logarithmic scale related to $p^2$.

**3.2. Relation to Acoustic Impedance:**

*   **Definition:** Acoustic impedance ($z$) is a measure of the opposition that a system presents to the flow of acoustic energy. It is the ratio of acoustic pressure to particle velocity.
    $z = \frac{p}{u}$
*   **Characteristic Acoustic Impedance ($z_0$):** For a plane wave in a plane medium, this is $\rho_0 c_0$.
*   **Importance:** Acoustic impedance plays a crucial role in understanding how sound waves are transmitted, reflected, and absorbed at interfaces between different media. For example, a large impedance mismatch leads to high reflection.

    *   **Example:** Air has a low acoustic impedance ($z_{air} \approx 415 \, \text{Pa s/m}$), while water has a much higher acoustic impedance ($z_{water} \approx 1.48 \times 10^6 \, \text{Pa s/m}$). This is why sound does not easily pass from air to water without significant reflection and loss.

*   **Textbook Reference:** Ver & Beranek (2006) and Kinsler et al. (2000) provide detailed explanations of acoustic impedance and its implications in wave propagation and transmission. Munjal (2013) delves into acoustic impedance in the context of duct acoustics and silencers.

**3.3. Medium Properties Dependence:**

The acoustic pressure generated by a source depends on:

*   **Source Strength:** How much acoustic energy the source is producing.
*   **Properties of the Medium:** Density ($\rho_0$), speed of sound ($c_0$), and attenuation characteristics.
*   **Geometry of the Propagation Path:** Distance from the source, presence of boundaries, reflections, and absorption.

---

### 4. Generation of Sound and Acoustic Pressure

Sound is generated by vibrating objects that disturb the surrounding medium.

*   **Mechanism:** A vibrating object (e.g., a loudspeaker cone, a vibrating string, a piston) imparts kinetic energy to the adjacent particles of the medium. This initial disturbance propagates outwards as a pressure wave.
*   **Example: Loudspeaker:**
    1.  The diaphragm of a loudspeaker moves outwards, compressing the air in front of it, increasing the pressure (creating a compression).
    2.  As the diaphragm moves inwards, it creates a region of lower pressure behind it (creating a rarefaction).
    3.  This cycle of compressions and rarefactions propagates through the air as a sound wave, characterized by fluctuations in acoustic pressure.

*   **Textbook Reference:** Kinsler et al. (2000) and Ver & Beranek (2006) discuss various sound sources and the fundamental mechanisms of sound generation in their initial chapters. Barron (2001) touches upon industrial noise sources and their generation of acoustic pressure.

---

### 5. Key Points to Remember

*   **Acoustic pressure ($p_{ac}$)** is the fluctuation in pressure around the static ambient pressure caused by a sound wave.
*   Acoustic pressure is a key parameter describing the magnitude of a sound wave.
*   The **acoustic pressure amplitude** ($p_{max}$) is the peak deviation from static pressure.
*   **Sound Pressure Level (SPL)**, measured in decibels (dB), is the logarithmic scale used to quantify loudness, referencing the RMS pressure.
*   $L_p = 20 \log_{10} \left(\frac{p_{rms}}{p_{ref}}\right)$, with $p_{ref} = 20 \mu Pa$.
*   Acoustic pressure is related to particle velocity and acoustic impedance ($z = p/u$).
*   Sound intensity ($I$) is proportional to the square of the acoustic pressure ($I \propto p_{rms}^2$).
*   Microphones and Sound Level Meters are used to measure acoustic pressure and SPL.
*   Sound generation involves vibrating sources disturbing a medium, creating pressure variations.

---

### 6. Practice Questions and Exercises

**Question 1:**
Define acoustic pressure and differentiate it from static pressure.

**Answer 1:**
Acoustic pressure ($p_{ac}$) is the oscillating pressure variation in a medium caused by the passage of a sound wave, superimposed on the ambient static pressure ($p_0$). Static pressure is the constant atmospheric pressure of the medium in the absence of sound.

---

**Question 2:**
If the RMS acoustic pressure of a sound wave is $2 \, Pa$, what is the Sound Pressure Level (SPL) in decibels? (Assume $p_{ref} = 20 \, \mu Pa$)

**Answer 2:**
$L_p = 20 \log_{10} \left(\frac{p_{rms}}{p_{ref}}\right)$
$L_p = 20 \log_{10} \left(\frac{2 \, Pa}{20 \times 10^{-6} \, Pa}\right)$
$L_p = 20 \log_{10} \left(\frac{2}{20 \times 10^{-6}}\right)$
$L_p = 20 \log_{10} (100 \times 10^6)$
$L_p = 20 \log_{10} (10^8)$
$L_p = 20 \times 8$
$L_p = 160 \, \text{dB}$

---

**Question 3:**
What is the unit of acoustic pressure? What is the reference pressure used for Sound Pressure Level (SPL) in air?

**Answer 3:**
The SI unit of acoustic pressure is the Pascal (Pa). The reference pressure for SPL in air is $20 \mu Pa$ (micropascals).

---

**Question 4:**
Explain the relationship between acoustic pressure and sound intensity.

**Answer 4:**
Sound intensity ($I$) is the average rate of energy transfer per unit area. For plane waves in a lossless medium, sound intensity is proportional to the square of the RMS acoustic pressure: $I = \frac{p_{rms}^2}{\rho_0 c_0}$. This means that if the acoustic pressure doubles, the sound intensity increases by a factor of four.

---

**Question 5:**
What is acoustic impedance, and why is it important in acoustics?

**Answer 5:**
Acoustic impedance ($z$) is the ratio of acoustic pressure to particle velocity ($z = p/u$). It quantifies the opposition a medium or system presents to the flow of acoustic energy. It is important because it governs how sound waves are transmitted, reflected, and absorbed at interfaces between different media, and it relates pressure to velocity within a medium.

---

This concludes Module 1, Topic 1 on Acoustic Pressure. The next topics will build upon these fundamental concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
