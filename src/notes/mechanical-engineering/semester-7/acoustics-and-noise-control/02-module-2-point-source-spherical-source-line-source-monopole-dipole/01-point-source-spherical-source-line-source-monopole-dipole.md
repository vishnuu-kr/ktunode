---
title: "Point source, spherical source, Line source, Monopole, dipole"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 2: Point source, spherical source, Line source, Monopole, dipole"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463fdd"
status: "completed"
scrapedAt: "2026-05-20T18:09:31.386Z"
---
# ACOUSTICS AND NOISE CONTROL - MODULE 2: SOURCE MODELS

## Introduction

This module delves into fundamental acoustic source models that are crucial for understanding how sound is generated and how its intensity changes with distance. We will explore the characteristics of point sources, spherical sources, line sources, monopoles, and dipoles, building a foundation for analyzing sound propagation and developing noise control strategies. These concepts are essential for achieving Course Outcome 1 (CO1) by defining acoustic terminologies and understanding wave propagation physics, and for CO2 by analyzing sound transmission.

**Key Textbooks:**
*   Noise and vibration control engineering by Istvan L. Ver & Leo L. Beranek (Wiley, Second edition, 2006)
*   Fundamentals of Acoustics by Lawrence Ekinsler, Austin R Frey, Alan B Coppens, James V Sanders (Wiley, Fourth edition, 2000)

**Key Reference Books:**
*   Noise and Vibration Control by M L Munjal (World Scientific publishing, 2013)
*   Handbook of Noise and Vibration Control by Malcom J Crocker (2007)

---

## 1. Point Source

A point source is a theoretical construct representing a sound source that is infinitesimally small and radiates sound uniformly in all directions. In reality, no sound source is a true point source, but this model is a useful approximation for sources that are small compared to the wavelengths of the sound they produce, and when observing from distances much larger than the source's dimensions.

### 1.1. Characteristics

*   **Omnidirectional Radiation:** Sound energy is radiated equally in all directions.
*   **Spherical Wavefronts:** The sound waves propagate outwards in perfect spheres.
*   **Inverse Square Law:** The sound intensity decreases with the square of the distance from the source.

### 1.2. Mathematical Representation

For a simple harmonic point source radiating sound power $W$ (Watts), the acoustic intensity $I$ at a distance $r$ from the source is given by:

$I(r) = \frac{W}{4\pi r^2}$

**Explanation:**
*   $W$: Acoustic power of the source.
*   $4\pi r^2$: Surface area of a sphere with radius $r$.

This equation demonstrates the **inverse square law**: if you double the distance from a point source, the intensity of the sound decreases by a factor of four ($2^2$).

### 1.3. Sound Pressure Level (SPL)

The sound pressure level ($L_p$) at a distance $r$ from a point source is related to the acoustic intensity by:

$L_p(r) = 10 \log_{10} \left( \frac{I(r)}{I_{ref}} \right)$

where $I_{ref}$ is the reference intensity ($10^{-12} \text{ W/m}^2$).

Substituting the intensity formula:

$L_p(r) = 10 \log_{10} \left( \frac{W}{4\pi r^2 I_{ref}} \right)$

$L_p(r) = 10 \log_{10} \left( \frac{W}{4\pi I_{ref}} \right) - 10 \log_{10} (r^2)$

$L_p(r) = L_{p, ref} - 20 \log_{10} (r)$

where $L_{p, ref}$ is the sound pressure level at a reference distance (e.g., 1 meter). This shows that for every doubling of distance, the SPL decreases by approximately 6 dB.

### 1.4. Examples

*   A small, high-frequency loudspeaker operating in an anechoic (non-reflective) environment, viewed from a distance significantly greater than its dimensions.
*   A compact engine exhaust port.
*   A small, vibrating object emitting sound.

### 1.5. Important Points to Remember

*   The point source is an idealization.
*   It's a good model for sources much smaller than the wavelength of sound.
*   The intensity follows the inverse square law ($1/r^2$).
*   The sound pressure level decreases by 6 dB per doubling of distance.

**Textbook Reference:** Ekinsler et al. (2000), Chapter 4, discusses spherical waves and their relationship to point sources. Ver & Beranek (2006), Chapter 2, introduces basic acoustic principles and source models.

---

## 2. Spherical Source

A spherical source is a sound source that radiates sound uniformly outwards from a spherical surface. This is a more realistic model for certain types of sound sources compared to a point source, especially when the source has a finite but relatively uniform radiating surface.

### 2.1. Characteristics

*   **Omnidirectional Radiation (ideally):** Similar to a point source, ideally radiates sound equally in all directions.
*   **Spherical Wavefronts:** Produces spherical wavefronts.
*   **Inverse Square Law (for far field):** In the far field (distances much larger than the source's radius), the intensity still follows the inverse square law. However, in the near field, the behavior is more complex.

### 2.2. Mathematical Representation

For a spherical source of radius $a$, the acoustic intensity $I$ at a distance $r$ from the center of the source is still often approximated by the inverse square law for $r \gg a$:

$I(r) \approx \frac{W}{4\pi r^2}$

However, the sound pressure and particle velocity are more directly related to the source's surface velocity and area.

The acoustic impedance is crucial here. For a simple spherical radiator vibrating with velocity $v_s$ over its surface area $S = 4\pi a^2$, the acoustic radiation impedance $Z_{rad}$ is frequency-dependent and complex. For low frequencies ($ka \ll 1$, where $k$ is the wavenumber and $a$ is the radius), the radiation impedance is dominated by mass. For high frequencies ($ka \gg 1$), it approaches the characteristic impedance of the medium ($\rho c$).

The acoustic power $W$ radiated by the sphere is given by:

$W = \int_S \frac{1}{2} \text{Re}(p \cdot v^*) dS$

where $p$ is the acoustic pressure and $v$ is the particle velocity at the surface, and $*$ denotes the complex conjugate.

### 2.3. Near-Field vs. Far-Field

*   **Near-Field ($r \lesssim a$ or $ka \lesssim 1$):** The acoustic pressure and particle velocity are out of phase, and the intensity distribution is complex. Reactive energy (stored energy) dominates over radiated energy.
*   **Far-Field ($r \gg a$ or $ka \gg 1$):** The acoustic pressure and particle velocity are in phase, and the intensity follows the inverse square law. This is where the spherical source behaves much like a point source.

### 2.4. Examples

*   A vibrating sphere in a fluid.
*   A pulsating sphere.
*   Some types of domes or diaphragms that approximate a spherical shape.

### 2.5. Important Points to Remember

*   A more realistic model than a point source for certain vibrating surfaces.
*   Exhibits complex near-field behavior.
*   Approximates point source behavior in the far-field.
*   The concept of radiation impedance is important for analyzing spherical sources.

**Textbook Reference:** Ekinsler et al. (2000), Chapter 11, provides detailed analysis of spherical radiators. Ver & Beranek (2006), Chapter 2, also touches upon spherical wave propagation.

---

## 3. Monopole

A monopole is the simplest acoustic source model, representing a pulsating volume or a source that oscillates in volume. It is a fundamental building block for understanding more complex sound sources. A point source is often considered a special case of a monopole where the volume oscillation is localized at a single point.

### 3.1. Characteristics

*   **Volume Oscillation:** The source expands and contracts, displacing fluid.
*   **Spherical Wavefronts:** Radiates sound in spherical waves.
*   **Omnidirectional Radiation:** Emits sound equally in all directions.
*   **Inverse Square Law:** The acoustic intensity follows the inverse square law ($1/r^2$).

### 3.2. Mathematical Representation

The strength of a monopole is characterized by its **volume velocity**, $U$, which is the rate of volume displacement. The acoustic pressure $p$ at a distance $r$ from a simple harmonic monopole source in a free field is given by:

$p(r) = \frac{j \rho c k U e^{-jkr}}{4\pi r}$

where:
*   $\rho$: Density of the medium.
*   $c$: Speed of sound in the medium.
*   $k = \omega/c$: Wavenumber ($\omega$ is angular frequency).
*   $U$: Volume velocity of the source.
*   $j$: Imaginary unit.
*   $e^{-jkr}$: Spherical wave propagation term.

The acoustic intensity $I$ is given by:

$I(r) = \frac{1}{2} \text{Re}(p \cdot v^*)$

where $v$ is the particle velocity. The particle velocity $v$ associated with this pressure wave is:

$v(r) = \frac{p}{\rho c} = \frac{j k U e^{-jkr}}{4\pi r}$

This indicates that pressure and velocity are in phase in the far field, as expected for a radiating wave.

The acoustic intensity in the far field ($kr \gg 1$) becomes:

$I(r) = \frac{(\rho c k U)^2}{32\pi^2 r^2}$

This again confirms the $1/r^2$ dependence.

The acoustic power $W$ radiated by the monopole is related to its volume velocity and the characteristic impedance of the medium:

$W = \frac{1}{2} \rho c k^2 |U|^2 \cdot (\text{radiation resistance})$

For a small oscillating sphere (a classic monopole model), the radiation resistance is proportional to $(\frac{2\pi a}{\lambda})^4$ for low frequencies, meaning power output is very low for small sources at low frequencies.

### 3.3. Relationship to Point Source

A point source is essentially a monopole located at a single point. The strength of the point source is its acoustic power, while the strength of a monopole is its volume velocity. These are related through the medium's properties and frequency.

### 3.4. Examples

*   A pulsating sphere or bubble.
*   A small, vibrating diaphragm that predominantly moves in and out without significant bending.
*   An organ pipe with a fundamental mode of oscillation.
*   A simple acoustic source where the net volume displacement is the primary mechanism of sound generation.

### 3.5. Important Points to Remember

*   The fundamental acoustic source model.
*   Characterized by volume velocity.
*   Radiates omnidirectionally in spherical waves.
*   Intensity follows the inverse square law ($1/r^2$).
*   A key building block for more complex source models (e.g., by combining monopoles).

**Textbook Reference:** Ekinsler et al. (2000), Chapter 4, extensively covers the monopole as a fundamental source. Ver & Beranek (2006), Chapter 2, introduces the concept of acoustic sources and their power. Munjal (2013) discusses monopole sources in the context of duct acoustics and radiation.

---

## 4. Dipole

A dipole acoustic source consists of two equal and opposite monopoles separated by a small distance. This model is used to represent sources that generate sound due to oscillating forces, such as a vibrating rigid surface moving back and forth, or an oscillating body.

### 4.1. Characteristics

*   **Oscillating Force:** Sound is generated by the net force exerted on the fluid.
*   **Directional Radiation:** Unlike monopoles, dipoles do not radiate sound equally in all directions. They exhibit directional characteristics.
*   **Minimum Radiation at Ends:** Sound intensity is lowest along the axis connecting the two monopoles.
*   **Maximum Radiation Perpendicular to Axis:** Sound intensity is highest perpendicular to the axis connecting the two monopoles.
*   **Intensity Decay:** The intensity in the far-field falls off as $1/r^2$, but the overall sound power radiated is different from a monopole.

### 4.2. Mathematical Representation

Consider two monopoles of equal and opposite volume velocity $U$ and $-U$, separated by a distance $d$ along the z-axis. The acoustic pressure $p$ at a distance $r$ from the center of the dipole can be approximated for the far-field ($r \gg d$) as:

$p(r, \theta) = \frac{j \rho c k U d \cos\theta e^{-jkr}}{2\pi r}$

where $\theta$ is the angle with respect to the dipole axis (the z-axis).

**Explanation:**
*   The $\cos\theta$ term indicates the directional dependence.
    *   When $\theta = 0^\circ$ or $180^\circ$ (along the dipole axis), $p = 0$, meaning no sound is radiated directly along the axis.
    *   When $\theta = 90^\circ$ (perpendicular to the dipole axis), $|p|$ is maximum.

The acoustic intensity $I(r, \theta)$ in the far-field is proportional to $p^2$:

$I(r, \theta) \propto \frac{(\rho c k U d)^2 \cos^2\theta}{4\pi^2 r^2}$

The total radiated acoustic power $W$ from a dipole is proportional to:

$W \propto (\rho c k^2 |U|^2 d^2)$

Notice that the radiated power is proportional to the square of the frequency (due to $k^2$) and the square of the separation distance ($d^2$). This means dipoles are more effective radiators at higher frequencies and for larger source sizes (larger $d$).

### 4.3. Relationship to Point Source and Monopole

*   A dipole can be thought of as two opposing monopoles.
*   Its radiation pattern is directional, unlike a monopole.
*   Its sound power output scales with frequency squared, whereas a monopole's power is generally proportional to frequency squared for low frequencies (due to $k^2$ and radiation resistance terms).

### 4.4. Examples

*   A vibrating rigid sphere.
*   A small vibrating plate or panel.
*   The sound generated by a rotating propeller blade.
*   The flow-induced vibration of a cylindrical rod.
*   A loudspeaker cone vibrating back and forth.

### 4.5. Important Points to Remember

*   Represents sources with oscillating forces or momentum changes.
*   Has a characteristic directional radiation pattern (figure-of-eight pattern in the far-field).
*   Minimum radiation along the dipole axis; maximum perpendicular to it.
*   Radiated power increases with frequency squared.
*   Important for understanding noise from vibrating surfaces and machinery.

**Textbook Reference:** Ekinsler et al. (2000), Chapter 4, introduces the dipole and its characteristics. Ver & Beranek (2006), Chapter 2, discusses dipole sources and their relation to oscillating bodies. Munjal (2013) often uses dipole analysis for pipe openings and vibrating surfaces.

---

## 5. Line Source

A line source is a theoretical model representing a continuous distribution of sound sources along a straight line. This model is useful for analyzing noise radiated from long, slender objects or structures.

### 5.1. Characteristics

*   **Continuous Distribution:** Sound is emitted from a line of finite length.
*   **Directional Radiation (for finite length):** For a finite line source, the radiation is directional, with a maximum intensity perpendicular to the line and decreasing intensity at the ends.
*   **Intensity Decay:** The intensity decreases with distance, but not as rapidly as a point source. For a long line source, intensity decreases as $1/r$.

### 5.2. Mathematical Representation

Consider a line source of length $L$ emitting sound. For distances $r$ much larger than the length $L$ ($r \gg L$), and perpendicular to the source ($ \theta = 90^\circ$ in cylindrical coordinates), the acoustic intensity $I$ from a uniform line source with source strength per unit length $q$ is approximately:

$I(r) \approx \frac{q^2}{2\pi r \rho c}$

where:
*   $q$: Source strength per unit length (e.g., volume velocity per unit length).
*   $r$: Distance from the line source.

**Explanation:**
*   The $1/r$ dependence for intensity signifies that a line source radiates more effectively at larger distances compared to a point source. If you double the distance, the intensity only halves.

The sound pressure level (SPL) from a line source decreases by 3 dB per doubling of distance:

$L_p(r) \approx L_{p, ref} - 10 \log_{10} (r/r_{ref})$

### 5.3. Examples

*   A long, vibrating pipe or duct.
*   A row of loudspeakers placed side-by-side.
*   Noise from a long conveyor belt or a train.
*   Traffic noise along a highway (can be approximated as a line source).

### 5.4. Important Points to Remember

*   Model for extended sources along a line.
*   Intensity decays as $1/r$ in the far-field for long line sources.
*   SPL decreases by 3 dB per doubling of distance.
*   Useful for analyzing noise from pipes, ducts, and linear machinery.

**Textbook Reference:** Ekinsler et al. (2000), Chapter 6, discusses line sources and their radiation characteristics. Ver & Beranek (2006) may discuss line sources in practical noise control scenarios, such as noise from highways or industrial equipment. Crocker (2007) and Barron (2001) are likely to have sections on practical line source modeling for industrial noise.

---

## 6. Other Source Models (Brief Mention)

While the module focuses on monopole, dipole, and line sources, it's worth noting that more complex sources can be synthesized by combining these fundamental elements.

*   **Quadrupole:** Consists of four monopoles, two positive and two negative, arranged in a specific configuration. It represents sources with oscillating mass flow or higher-order spatial derivatives of source terms. Quadrupoles radiate sound much less efficiently than monopoles and dipoles, with their power output typically increasing with the fourth power of frequency. They are important for understanding noise from turbulent flows.
    *   **Example:** Turbulent flow in a pipe or jet.
    *   **Textbook Reference:** Ekinsler et al. (2000), Chapter 4, introduces quadrupoles.

---

## 7. Application to Noise Control (CO4)

Understanding these source models is fundamental to designing effective noise control strategies.

*   **Point/Monopole:** For point sources, reducing the source strength ($W$ or $U$) is key. This can involve using quieter machinery or insulating the source. If source reduction is not possible, increasing the distance ($r$) will reduce the received sound level due to the $1/r^2$ decay.
*   **Dipole:** For dipole sources (like vibrating panels), the solution can involve reducing the vibration amplitude, increasing stiffness to raise the natural frequency, or decoupling the vibration from the radiating surface. Changing the orientation can also be considered if the radiation is directional.
*   **Line Source:** For line sources, strategies might include enclosing the entire line, using barriers to block the sound, or reducing the sound output per unit length. Increasing distance is also effective due to the $1/r$ decay.

**CO4 Alignment:** By understanding how different source types radiate sound and how this radiation changes with distance, we can choose the most appropriate noise reduction techniques.

---

## 8. Summary of Source Models and Radiation

| Source Type    | Description                                 | Radiation Pattern         | Intensity Decay ($1/r^n$) | Key Characteristic          | Examples                                                                 |
| :------------- | :------------------------------------------ | :------------------------ | :------------------------ | :-------------------------- | :----------------------------------------------------------------------- |
| **Point Source** | Infinitesimally small, omnidirectional | Spherical                 | $n=2$                     | Acoustic Power ($W$)        | Small loudspeaker, exhaust port                                          |
| **Monopole**   | Pulsating volume, omnidirectional         | Spherical                 | $n=2$                     | Volume Velocity ($U$)       | Pulsating bubble, vibrating diaphragm                                    |
| **Dipole**     | Two opposite monopoles, oscillating force | Directional (figure-of-eight) | $n=2$ (far-field)         | Force/Momentum Change ($d^2 f^2$) | Vibrating panel, loudspeaker cone                                        |
| **Line Source**| Continuous sources along a line           | Directional (for finite)  | $n=1$ (long line)         | Source/length ($q$)         | Long pipe, row of speakers, traffic                                      |
| **Quadrupole** | Four monopoles, oscillating mass flow     | Directional               | $n=3$ (far-field)         | Turbulent flow characteristics | Turbulent jet, flow noise                                              |

---

## Practice Questions and Answers

**Question 1:**
An industrial fan acts as a point source. At a distance of 5 meters, the sound pressure level is 80 dB. What will be the sound pressure level at a distance of 10 meters, assuming free-field conditions? (CO1, CO2)

**Answer 1:**
For a point source in the far field, the sound pressure level decreases by 6 dB for every doubling of distance.
Distance increases from 5 m to 10 m (doubled).
Therefore, the SPL will decrease by 6 dB.
New SPL = 80 dB - 6 dB = 74 dB.

**Question 2:**
Explain why a vibrating panel in a machine casing is often modeled as a dipole source. (CO1, CO4)

**Answer 2:**
A vibrating panel typically moves back and forth, pushing and pulling on the surrounding air. This opposing motion of air is characteristic of a force acting on the fluid, which is the fundamental mechanism of a dipole. It's not a simple volume displacement like a monopole, nor is it localized to a single point. The vibration causes the air on one side of the panel to be compressed while the air on the other side is rarefied, and these opposing actions at a small separation constitute a dipole.

**Question 3:**
What is the main difference in the intensity decay with distance between a point source and a long line source? (CO1, CO2)

**Answer 3:**
The intensity from a point source decays with the square of the distance ($1/r^2$), meaning it reduces by a factor of 4 for every doubling of distance. The intensity from a long line source decays linearly with distance ($1/r$), meaning it reduces by a factor of 2 for every doubling of distance. This makes line sources more significant at greater distances compared to point sources of equivalent total power.

**Question 4:**
A small loudspeaker emits sound. If you want to reduce the sound pressure level by 12 dB at your listening position, by what factor must you increase your distance from the loudspeaker, assuming it behaves as a point source? (CO1)

**Answer 4:**
The SPL from a point source decreases by 6 dB per doubling of distance.
To achieve a 12 dB reduction, you need two doublings of distance.
Factor of increase = $2 \times 2 = 4$.
You must increase your distance by a factor of 4.

**Question 5:**
Describe a scenario where a monopole source model would be appropriate. (CO1, CO4)

**Answer 5:**
A monopole source model is appropriate for sources that radiate sound due to pulsations in volume. For example, a small, rigid sphere vibrating uniformly in and out in a fluid would be approximated as a monopole. Another example is a bubble oscillating in size underwater, which displaces fluid and creates sound waves. These sources radiate omnidirectionally and their sound output is related to their volume velocity.

---

## Important Points to Remember for the Module

*   **Idealizations:** Point sources, monopoles, and dipoles are idealizations used to simplify acoustic analysis.
*   **Inverse Square Law ($1/r^2$):** Characteristic of omnidirectional sources like monopoles and point sources in the far field. SPL decreases by 6 dB per doubling of distance.
*   **Dipole Directionality:** Dipoles have a figure-of-eight radiation pattern, with nulls along the dipole axis and maximum radiation perpendicular to it. Their radiated power increases with the square of frequency.
*   **Line Source Decay ($1/r$):** For long line sources, intensity decreases linearly with distance. SPL decreases by 3 dB per doubling of distance.
*   **Source Strength:** Monopoles are characterized by volume velocity ($U$), while point sources are characterized by acoustic power ($W$). Dipoles are related to oscillating forces or momentum changes.
*   **Applications:** Understanding these models is crucial for diagnosing noise sources and implementing effective noise control measures (e.g., distance, shielding, source modification).
*   **Frequency Dependence:** The effectiveness and characteristics of different source models can be frequency-dependent, especially for dipoles and quadrupoles.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
