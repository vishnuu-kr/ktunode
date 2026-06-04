---
title: "Acoustic energy density"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 1: Acoustics, sound and noise, generation of sound"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463fd6"
status: "completed"
scrapedAt: "2026-05-20T18:09:27.169Z"
---
# ACOUSTICS AND NOISE CONTROL

## Module 1: Acoustics, Sound and Noise, Generation of Sound

### Topic: Acoustic Energy Density

---

### 1. Introduction to Acoustic Energy Density

**Objective:** To introduce the concept of acoustic energy density as a fundamental measure of sound intensity in a medium.

**Key Concepts:**

*   **Sound Wave:** A mechanical wave that propagates through a medium by causing localized compressions and rarefactions of that medium.
*   **Energy:** The capacity to do work. In acoustics, we are concerned with the mechanical energy associated with the vibration of the medium.
*   **Medium:** The substance (e.g., air, water, solids) through which a sound wave travels.
*   **Density:** Mass per unit volume.

**Definition:**
**Acoustic Energy Density** is the amount of acoustic energy contained within a unit volume of the medium through which a sound wave is propagating. It represents the energy stored per unit volume in the sound field.

**Relevance to Course Outcomes:**

*   **CO1 (K2):** Defining acoustic terminology (energy density) and understanding the physics of sound wave propagation (energy stored within the wave).

---

### 2. Physical Basis of Acoustic Energy Density

**Objective:** To understand how acoustic energy is stored in a sound wave and how this relates to the physical properties of the medium.

**Key Concepts:**

*   **Kinetic Energy:** The energy possessed by a mass due to its motion. In a sound wave, this is associated with the velocity of the particles in the medium.
*   **Potential Energy:** The energy possessed by a system due to its position or configuration. In a sound wave, this is associated with the compression and expansion (density changes) of the medium.
*   **Particle Velocity (v):** The instantaneous velocity of a small volume element of the medium as it oscillates due to the passage of the sound wave.
*   **Pressure Variation (p):** The instantaneous deviation from the ambient pressure caused by the compressions and rarefactions of the sound wave.
*   **Density of the Medium ($\rho$):** The mass per unit volume of the undisturbed medium.
*   **Bulk Modulus (K):** A measure of a fluid's resistance to compression. It's defined as the ratio of pressure change to the relative volume change. For a fluid, $K = -\frac{\Delta p}{\Delta V/V}$.

**Explanation:**
A sound wave consists of oscillating particles within the medium. These oscillations involve both motion and changes in density/pressure. Consequently, acoustic energy is stored in two forms:

1.  **Kinetic Energy:** Associated with the motion of the particles in the medium. For a unit volume, this energy is proportional to the square of the particle velocity.
2.  **Potential Energy:** Associated with the compression and expansion of the medium. This energy is stored in the elastic deformation of the medium and is related to the pressure variations and the medium's stiffness (represented by the bulk modulus).

**Formulas (as derived in textbooks):**

Consider a plane sound wave propagating in a fluid.
*   **Kinetic Energy Density ($e_k$):** The energy of a unit volume of fluid moving with velocity $v$.
    $e_k = \frac{1}{2} \rho v^2$
    where:
    *   $\rho$ is the density of the medium.
    *   $v$ is the instantaneous particle velocity.

*   **Potential Energy Density ($e_p$):** The energy stored due to pressure variations. For a small pressure change $\Delta p$, the volume change is $\Delta V$. The work done to compress the fluid by $\Delta V$ is related to the pressure.
    $e_p = \frac{1}{2} \frac{p^2}{K}$
    where:
    *   $p$ is the instantaneous pressure variation.
    *   $K$ is the bulk modulus of the medium.

**Important Relationship:**
For a simple harmonic plane wave, it can be shown that the instantaneous kinetic energy density is equal to the instantaneous potential energy density.

**Total Acoustic Energy Density ($e$):**
The total acoustic energy density is the sum of the kinetic and potential energy densities.
$e = e_k + e_p$

For a simple harmonic wave where $e_k = e_p$ at any instant, the total energy density is twice the kinetic energy density (or twice the potential energy density).
$e = \rho v^2 = \frac{p^2}{K}$

**Note:** This simplified relationship ($e_k = e_p$) holds for specific wave types (like plane waves) and for the instantaneous values. When considering average energy density over a cycle or for more complex waves, the averaging process is important.

**References:**

*   **E Kinsler et al. (Fundamentals of Acoustics):** Provides a thorough derivation of kinetic and potential energy densities for plane waves, establishing the relationship $e = \rho v^2 = p^2/K$.
*   **Ver & Beranek (Noise and Vibration Control Engineering):** Discusses energy concepts in the context of wave propagation and energy transmission in acoustic systems.

---

### 3. Acoustic Energy Density and Other Acoustic Quantities

**Objective:** To relate acoustic energy density to other commonly used acoustic parameters like sound intensity and sound pressure level.

**Key Concepts:**

*   **Sound Intensity (I):** The average rate of energy flow per unit area perpendicular to the direction of propagation. Measured in Watts per square meter ($W/m^2$).
*   **Sound Pressure Level (SPL):** A logarithmic measure of the effective sound pressure relative to a reference value. Measured in decibels (dB).
*   **Root Mean Square (RMS) Value:** The square root of the mean of the squares of a varying quantity. For sinusoidal waves, $v_{rms} = v_{max}/\sqrt{2}$ and $p_{rms} = p_{max}/\sqrt{2}$.

**Relationship between Energy Density and Sound Intensity:**

Sound intensity ($I$) is the product of the acoustic energy density ($e$) and the speed of sound ($c$) in the medium. For a plane wave propagating in the x-direction:

$I = e \cdot c$

The speed of sound in a fluid is given by $c = \sqrt{K/\rho}$.

Using the relationship $e = \frac{p^2}{K}$ (for instantaneous values), we can derive the intensity:
$I = \frac{p^2}{K} \cdot c = \frac{p^2}{K} \cdot \sqrt{\frac{K}{\rho}} = \frac{p^2}{\sqrt{\rho K}}$

Since $\rho K$ is the specific acoustic impedance ($Z_0$) of the medium ($Z_0 = \rho c$), we have:
$I = \frac{p^2}{\rho c} = \frac{p_{rms}^2}{\rho c}$

This is a fundamental relationship connecting sound intensity to the RMS sound pressure and the acoustic impedance of the medium.

**Relationship with Acoustic Energy Density (Averaged):**

When considering energy over a period of time, we often use RMS values.
The RMS acoustic energy density ($e_{rms}$) can be related to the RMS pressure and velocity.
For a plane wave:
$e_{rms} = \frac{1}{2} \rho v_{rms}^2 + \frac{1}{2} \frac{p_{rms}^2}{K}$
Since $v_{rms} = p_{rms} / (\rho c)$, and $K = \rho c^2$:
$e_{rms} = \frac{1}{2} \rho \left(\frac{p_{rms}}{\rho c}\right)^2 + \frac{1}{2} \frac{p_{rms}^2}{\rho c^2} = \frac{1}{2} \frac{p_{rms}^2}{\rho c^2} + \frac{1}{2} \frac{p_{rms}^2}{\rho c^2} = \frac{p_{rms}^2}{\rho c^2}$
This doesn't seem right. Let's re-evaluate using the equal instantaneous energy relationship.

The average energy density over a full cycle of a sinusoidal wave is equal to the RMS energy density.
From $e = \rho v^2$ and $e = p^2/K$, and knowing that for sinusoidal waves $v_{rms} = v_{max}/\sqrt{2}$ and $p_{rms} = p_{max}/\sqrt{2}$, and that $v_{max} = p_{max}/(\rho c)$, we can show:

$e_{rms} = \frac{1}{2} \rho v_{rms}^2 = \frac{1}{2} \rho \left(\frac{p_{rms}}{\rho c}\right)^2 = \frac{1}{2} \frac{p_{rms}^2}{\rho c^2}$ (This is incorrect)

Let's use the fact that $e_k = e_p$ for sinusoidal plane waves.
$e_{avg} = \langle e_k + e_p \rangle = \langle 2 e_k \rangle = 2 \langle \frac{1}{2} \rho v^2 \rangle = \rho \langle v^2 \rangle = \rho v_{rms}^2$
$e_{avg} = \rho \left(\frac{v_{max}}{\sqrt{2}}\right)^2 = \frac{1}{2} \rho v_{max}^2$

Similarly,
$e_{avg} = \rho v_{rms}^2$
$v_{rms} = p_{rms} / (\rho c)$
$e_{avg} = \rho \left( \frac{p_{rms}}{\rho c} \right)^2 = \frac{p_{rms}^2}{\rho c^2}$ (Still incorrect, there's a factor missing in previous attempts).

Let's go back to basics:
$e = \frac{1}{2} \rho v^2 + \frac{1}{2} \frac{p^2}{K}$
For a sinusoidal wave $p(t) = p_{max} \sin(\omega t)$ and $v(t) = v_{max} \sin(\omega t - \phi)$. For a plane wave, $v$ and $p$ are in phase, so $\phi=0$. $v_{max} = p_{max} / (\rho c)$.
$e(t) = \frac{1}{2} \rho v_{max}^2 \sin^2(\omega t) + \frac{1}{2} \frac{p_{max}^2 \sin^2(\omega t)}{K}$
Since $K = \rho c^2$, and $v_{max} = p_{max} / (\rho c)$, $v_{max}^2 = p_{max}^2 / (\rho^2 c^2)$.
$e(t) = \frac{1}{2} \rho \frac{p_{max}^2}{\rho^2 c^2} \sin^2(\omega t) + \frac{1}{2} \frac{p_{max}^2}{\rho c^2} \sin^2(\omega t)$
$e(t) = \frac{1}{2} \frac{p_{max}^2}{\rho c^2} \sin^2(\omega t) + \frac{1}{2} \frac{p_{max}^2}{\rho c^2} \sin^2(\omega t)$
$e(t) = \frac{p_{max}^2}{\rho c^2} \sin^2(\omega t)$

The **average energy density** over a cycle is $\langle e(t) \rangle = \langle \frac{p_{max}^2}{\rho c^2} \sin^2(\omega t) \rangle$.
Since $\langle \sin^2(\omega t) \rangle = 1/2$,
$e_{avg} = \frac{p_{max}^2}{2 \rho c^2} = \frac{p_{rms}^2}{\rho c^2}$

**This is the correct relationship for average energy density for a plane wave.**

Now, let's relate this average energy density to intensity:
$I = e_{avg} \cdot c = \frac{p_{rms}^2}{\rho c^2} \cdot c = \frac{p_{rms}^2}{\rho c}$
This matches the intensity formula derived earlier.

**Summary of Relationships:**

*   **Average Acoustic Energy Density ($e_{avg}$):**
    $e_{avg} = \frac{p_{rms}^2}{\rho c^2}$ (for plane waves)
    where:
    *   $p_{rms}$ is the RMS sound pressure.
    *   $\rho$ is the density of the medium.
    *   $c$ is the speed of sound in the medium.

*   **Sound Intensity (I):**
    $I = e_{avg} \cdot c = \frac{p_{rms}^2}{\rho c}$ (for plane waves)

*   **Sound Intensity Level (SIL):**
    SIL $= 10 \log_{10} \left( \frac{I}{I_{ref}} \right)$, where $I_{ref} = 10^{-12} W/m^2$.

*   **Sound Pressure Level (SPL):**
    SPL $= 20 \log_{10} \left( \frac{p_{rms}}{p_{ref}} \right)$, where $p_{ref} = 20 \mu Pa$.

**Important Point:** Sound intensity represents the *flow* of energy, while acoustic energy density represents the *storage* of energy per unit volume.

**References:**

*   **Ver & Beranek (Noise and Vibration Control Engineering):** Discusses sound intensity as energy flow and its relation to pressure and particle velocity.
*   **E Kinsler et al. (Fundamentals of Acoustics):** Provides the detailed derivations for energy density and its relation to intensity for plane waves.

---

### 4. Acoustic Energy Density in Different Media

**Objective:** To understand how acoustic energy density varies with the properties of the medium.

**Key Concepts:**

*   **Air:** A common medium for sound transmission. Density ($\rho$) and speed of sound ($c$) are key properties.
*   **Water:** Denser and less compressible than air, leading to a higher speed of sound.
*   **Solids:** Generally denser and stiffer than fluids, resulting in much higher speeds of sound and different wave propagation characteristics.
*   **Specific Acoustic Impedance (Z = $\rho c$):** A measure of the resistance to acoustic wave propagation.

**Comparison:**

*   **Air at standard conditions (20°C, 1 atm):**
    *   $\rho \approx 1.21 kg/m^3$
    *   $c \approx 343 m/s$
    *   $Z = \rho c \approx 415 Pa \cdot s/m$

*   **Water at 20°C:**
    *   $\rho \approx 998 kg/m^3$
    *   $c \approx 1482 m/s$
    *   $Z = \rho c \approx 1.48 \times 10^6 Pa \cdot s/m$

*   **Steel:**
    *   $\rho \approx 7850 kg/m^3$
    *   $c \approx 5100 m/s$ (longitudinal wave)
    *   $Z = \rho c \approx 40 \times 10^6 Pa \cdot s/m$

**Implications:**

*   For a given sound pressure level ($p_{rms}$), the sound intensity ($I = p_{rms}^2 / (\rho c)$) will be much higher in water and solids than in air because their specific acoustic impedance ($\rho c$) is significantly larger.
*   This means that for the same sound pressure, more energy is flowing per unit area in denser media with higher sound speeds.
*   Acoustic energy density is proportional to the square of the sound pressure and inversely proportional to the square of the speed of sound (from $e_{avg} = p_{rms}^2 / (\rho c^2)$). Therefore, for a given sound pressure, the energy density is lower in media where sound travels faster. This is counter-intuitive if we only consider the denominator, but remember that intensity is higher because $I = e \cdot c$.

**Example:**
Consider a sound source producing a pressure of 1 Pa (RMS) in air and water.
*   **In Air:**
    $I_{air} = \frac{(1 Pa)^2}{415 Pa \cdot s/m} \approx 0.0024 W/m^2$
    $e_{avg, air} = I_{air} / c_{air} = 0.0024 W/m^2 / 343 m/s \approx 7 \times 10^{-6} J/m^3$

*   **In Water:**
    $I_{water} = \frac{(1 Pa)^2}{1.48 \times 10^6 Pa \cdot s/m} \approx 6.75 \times 10^{-7} W/m^2$
    $e_{avg, water} = I_{water} / c_{water} = 6.75 \times 10^{-7} W/m^2 / 1482 m/s \approx 4.5 \times 10^{-10} J/m^3$

This example shows that for the same pressure, the intensity is lower in water, and the energy density is also lower in water. This is because the higher impedance of water causes more sound to be reflected at boundaries and a significant portion of the acoustic energy is stored in the kinetic energy of the much denser medium rather than being converted to pressure variations as efficiently as in air. However, it's important to remember that the definition of SPL uses a reference pressure that is typical for air. Comparing absolute energy density or intensity across different media requires careful consideration of the source and propagation conditions.

**Reference:**

*   **Ver & Beranek (Noise and Vibration Control Engineering):** Chapter 2 discusses the properties of different media and their acoustic impedances, which directly impacts energy transmission.
*   **E Kinsler et al. (Fundamentals of Acoustics):** Details the acoustic properties of various substances.

---

### 5. Acoustic Energy Density and Sound Power

**Objective:** To distinguish between acoustic energy density and sound power, and understand their relationship in the context of sound generation.

**Key Concepts:**

*   **Sound Power (W):** The total acoustic energy emitted per unit time by a sound source. Measured in Watts (W).
*   **Sound Intensity (I):** Acoustic energy flow per unit area.
*   **Surface Area (S):** The area over which the sound power is distributed.

**Relationship:**
For a point source radiating uniformly in all directions (spherical spreading), the sound intensity at a distance $r$ from the source is given by:
$I(r) = \frac{W}{4 \pi r^2}$

The acoustic energy density is related to this intensity by $I = e_{avg} \cdot c$.
So, $e_{avg}(r) = \frac{I(r)}{c} = \frac{W}{4 \pi r^2 c}$

**Implications:**

*   **Sound Power** is a property of the *source*. It is independent of the environment (distance, medium) and represents the total acoustic energy output.
*   **Sound Intensity** and **Acoustic Energy Density** are properties of the *sound field* at a specific point in the medium. They depend on the sound power of the source, the distance from the source, and the properties of the medium.

**Important Distinction:**
One cannot directly convert sound power to acoustic energy density without knowing the propagation geometry and medium properties. Sound power is the *cause*, while intensity and energy density are the *effects* observed in the sound field.

**References:**

*   **Ver & Beranek (Noise and Vibration Control Engineering):** Chapters on sound power and sound intensity.
*   **Munjal (Noise and Vibration Control):** Discusses sound power as the fundamental output of a source and its relation to intensity.

---

### 6. Examples and Applications

**Objective:** To illustrate the application of acoustic energy density concepts in practical scenarios.

**Example 1: Sound propagation in a room**

Imagine a small speaker emitting sound in a room. The sound waves propagate outwards. At any point in the room, the medium (air) possesses acoustic energy due to the oscillating particles. If we know the RMS sound pressure at that point and the properties of air, we can calculate the acoustic energy density. If we move closer to the speaker, the sound pressure typically increases, leading to a higher energy density.

**Example 2: Underwater acoustics**

In underwater acoustics, acoustic energy density is a crucial parameter for sonar systems. The energy carried by sound waves is used to detect objects. The properties of water (high density, high sound speed) significantly affect how acoustic energy propagates and interacts with the environment.

**Example 3: Vibration and acoustic energy**

When a vibrating surface (like a machine part) radiates sound, the vibrational energy is converted into acoustic energy. The rate of this conversion is related to the vibrational velocity and the acoustic impedance mismatch between the vibrating surface and the surrounding medium. The acoustic energy density in the air near the surface is a result of this energy conversion.

**Application in Noise Control:**

While direct measurement of acoustic energy density is not as common as sound pressure or intensity, understanding its components (kinetic and potential energy) helps in designing noise control measures. For instance:

*   **Mass Loading:** Increasing the mass of a vibrating structure can reduce particle velocity, thus lowering kinetic energy density associated with vibration and subsequent sound radiation.
*   **Damping:** Damping materials absorb vibrational energy, converting it into heat, thereby reducing the energy available for acoustic radiation.

---

### 7. Practice Questions and Exercises

**Objective:** To test understanding of acoustic energy density and its related concepts.

**Question 1:**
Define acoustic energy density and state its units.

**Answer 1:**
Acoustic energy density is the amount of acoustic energy per unit volume of a medium. Its units are Joules per cubic meter ($J/m^3$).

**Question 2:**
For a plane sound wave in a fluid, relate acoustic energy density to RMS sound pressure ($p_{rms}$), medium density ($\rho$), and speed of sound ($c$).

**Answer 2:**
The average acoustic energy density ($e_{avg}$) for a plane wave is given by:
$e_{avg} = \frac{p_{rms}^2}{\rho c^2}$

**Question 3:**
If the RMS sound pressure in air is 2 Pa, and the density of air is $1.21 kg/m^3$ and the speed of sound is $343 m/s$, calculate the acoustic energy density.

**Answer 3:**
$e_{avg} = \frac{(2 Pa)^2}{(1.21 kg/m^3)(343 m/s)^2}$
$e_{avg} = \frac{4 Pa^2}{(1.21 \times 117649) m^2/s^2}$
$e_{avg} = \frac{4 Pa^2}{142355.29 m^2/s^2}$
Since $1 Pa = 1 N/m^2$ and $1 N = 1 kg \cdot m/s^2$, then $1 Pa^2 = 1 (kg \cdot m/s^2)^2 / m^4 = 1 kg^2 \cdot m^2 / (s^4 \cdot m^4) = 1 kg^2 / (s^4 \cdot m^2)$.
The denominator has units of $(kg/m^3) \cdot (m/s)^2 = kg \cdot m/s^2 / m^3 = N/m^3$.
So, $e_{avg} = \frac{Pa^2}{N/m^3} = \frac{N^2/m^4}{N/m^3} = N/m = J/m^3$.

$e_{avg} = \frac{4}{142355.29} J/m^3$
$e_{avg} \approx 2.81 \times 10^{-5} J/m^3$

**Question 4:**
How does acoustic energy density relate to sound intensity?

**Answer 4:**
Acoustic energy density is the energy stored per unit volume, while sound intensity is the rate of energy flow per unit area. For a plane wave, sound intensity ($I$) is the product of acoustic energy density ($e_{avg}$) and the speed of sound ($c$): $I = e_{avg} \cdot c$.

**Question 5:**
Compare the acoustic energy density in air and water for the same sound power output from a source, assuming spherical spreading. Will it be higher or lower in water? Explain briefly.

**Answer 5:**
For the same sound power ($W$) and assuming spherical spreading, the intensity at a given distance $r$ is $I(r) = W/(4\pi r^2)$. The energy density is $e_{avg}(r) = I(r)/c = W/(4\pi r^2 c)$.
Since the speed of sound ($c$) in water is much higher than in air, the acoustic energy density ($e_{avg}$) will be **lower** in water for the same sound power and distance.

---

### 8. Important Points to Remember

*   **Definition:** Acoustic energy density is energy per unit volume ($J/m^3$).
*   **Components:** It comprises kinetic energy (due to particle motion) and potential energy (due to pressure variations).
*   **Plane Wave Relation:** For plane waves, the average energy density is $e_{avg} = \frac{p_{rms}^2}{\rho c^2}$.
*   **Intensity Link:** Energy density is directly proportional to sound intensity: $I = e_{avg} \cdot c$.
*   **Medium Dependence:** Energy density is influenced by the acoustic impedance ($\rho c$) and speed of sound ($c$) of the medium.
*   **Source vs. Field:** Sound power is a source property, while energy density and intensity describe the sound field.

---

### 9. Conclusion

Acoustic energy density is a fundamental concept in acoustics, quantifying the energy stored within the sound field per unit volume. Understanding its relationship with sound pressure, sound intensity, and the properties of the medium is crucial for analyzing sound propagation and for developing effective noise control strategies. While not directly measured as frequently as sound pressure, its underlying principles are essential for a comprehensive grasp of acoustics and noise control engineering.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
