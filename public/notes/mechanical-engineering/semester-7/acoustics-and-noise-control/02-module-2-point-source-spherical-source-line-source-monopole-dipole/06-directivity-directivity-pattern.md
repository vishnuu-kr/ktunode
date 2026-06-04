---
title: "Directivity: Directivity pattern"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 2: Point source, spherical source, Line source, Monopole, dipole"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463fe2"
status: "completed"
scrapedAt: "2026-05-20T18:09:34.889Z"
---
# ACOUSTICS AND NOISE CONTROL - Module 2: Point Source, Spherical Source, Line Source, Monopole, Dipole

## Topic: Directivity: Directivity Pattern

**Learning Outcomes Covered:**

*   Understanding the fundamental acoustic principles related to different sound source types (supports CO1).
*   Analyzing how sound intensity varies with direction for different source types (supports CO2).
*   (Implicitly) Understanding the behavior of sound sources, which is foundational for noise control measures (supports CO4).

**Course Outcomes Alignment:**

*   **CO1 (K2):** This topic directly addresses acoustic terminology (directivity, directivity pattern) and the physics of sound propagation from various source types.
*   **CO2 (K4):** By analyzing directivity patterns, we are examining the directional transmission of sound intensity, a key aspect of sound transmission.

---

### 1. Introduction to Directivity

*   **Definition:** Directivity refers to the property of a sound source to radiate sound energy more efficiently or with higher intensity in certain directions than in others. It quantifies how directional a sound source is.

*   **Importance in Noise Control:** Understanding directivity is crucial for:
    *   Predicting sound propagation paths.
    *   Designing effective noise barriers and enclosures.
    *   Identifying dominant noise sources in complex environments.
    *   Optimizing loudspeaker or sound system placement.

*   **Reference:**
    *   *Noise and Vibration Control Engineering* by Ver & Beranek: Discusses directivity in the context of various noise sources like machinery and engines, emphasizing its impact on sound levels at different receiver locations.
    *   *Fundamentals of Acoustics* by Kinsler et al.: Provides the foundational mathematical descriptions of sound fields and how source characteristics influence them, including directional radiation.

---

### 2. Directivity Pattern

*   **Definition:** A directivity pattern is a graphical representation or mathematical function that describes the variation of sound intensity or sound pressure level (SPL) emitted by a source as a function of direction.

*   **How it's Represented:**
    *   **Polar Plots:** Commonly used to visualize directivity patterns. These plots show the sound pressure or intensity on a radial scale, with the angle from a reference axis indicating the direction.
    *   **Cartesian Plots:** Can also be used, plotting SPL or intensity against angle.
    *   **Mathematical Functions:** Directivity can be expressed mathematically, often involving spherical harmonics or simpler angular functions.

*   **Key Features of a Directivity Pattern:**
    *   **Main Lobe (or Lobes):** The direction(s) of maximum sound radiation.
    *   **Side Lobes:** Smaller lobes of radiation in directions other than the main lobe.
    *   **Nulls:** Directions where the radiated sound is minimal or zero.
    *   **Beamwidth:** The angular width of the main lobe.

*   **Reference:**
    *   *Noise and Vibration Control* by Munjal: Likely covers the mathematical formulation and graphical representation of directivity patterns for various acoustic radiators.

---

### 3. Types of Sound Sources and Their Directivity

This section explores the directivity patterns of foundational acoustic source models.

#### 3.1. Point Source (Monopole)

*   **Concept:** An idealized sound source that radiates sound equally in all directions. It's infinitesimally small and its velocity is uniform over its surface.

*   **Directivity Pattern:**
    *   **Isotropic:** The sound intensity is the same in all directions.
    *   **Directivity Index (DI):** DI = 0 dB. This means there is no preference for any direction.
    *   **Graphical Representation:** A circle in a polar plot.

*   **Formula (Sound Power):** The sound power radiated by a monopole is given by $W = \frac{1}{2} \rho_0 c k^2 |u_0|^2 S$, where:
    *   $\rho_0$ is the density of the medium.
    *   $c$ is the speed of sound.
    *   $k = 2\pi f/c$ is the wavenumber.
    *   $|u_0|$ is the particle velocity amplitude.
    *   $S$ is the surface area of the source.

*   **Formula (Sound Intensity at Distance r):** $I = \frac{W}{4\pi r^2}$. The intensity decreases with the square of the distance, but is constant with direction.

*   **Examples:**
    *   A very small, vibrating sphere (much smaller than the wavelength of the sound).
    *   A distant explosion (approximated as isotropic at large distances).
    *   An ideal loudspeaker producing omnidirectional sound (rare in practice for high frequencies).

*   **Reference:**
    *   *Fundamentals of Acoustics* by Kinsler et al.: Provides a detailed mathematical derivation of the monopole's radiation characteristics, including its isotropic nature.
    *   *Noise and Vibration Control Engineering* by Ver & Beranek: Uses the monopole as a building block for understanding more complex sources and often discusses its ideal isotropic radiation.

#### 3.2. Spherical Source

*   **Concept:** A vibrating sphere. For a pulsating sphere (uniformly expanding and contracting), it acts as a monopole. However, if the sphere vibrates in a more complex manner (e.g., causing surface velocity variations), its directivity can change.

*   **Directivity Pattern:**
    *   **Pulsating Sphere (Uniform Surface Velocity):** Acts as a monopole, hence isotropic (DI = 0 dB).
    *   **Vibrating Sphere (Non-uniform Velocity):** Can exhibit some directivity, especially at higher frequencies where the surface motion becomes more complex relative to the wavelength.

*   **Formula (Sound Pressure for Pulsating Sphere):** $p(r, \theta) = \frac{j k \rho_0 c U_0 a e^{-jkr}}{r} \cos \theta$, where:
    *   $U_0$ is the radial velocity amplitude.
    *   $a$ is the sphere's radius.
    *   $\theta$ is the angle from the polar axis.
    *   Note: The $\cos \theta$ term is characteristic of a **dipole**, not a simple pulsating sphere (monopole). This highlights that how a source vibrates is critical. A *purely* pulsating sphere is isotropic.

*   **Important Distinction:** A simple, uniformly expanding and contracting sphere (monopole) is isotropic. More complex surface vibrations lead to different directivity.

*   **Reference:**
    *   *Fundamentals of Acoustics* by Kinsler et al.: Explains the acoustic radiation from spheres, distinguishing between pulsating and other modes of vibration.

#### 3.3. Line Source

*   **Concept:** A source distributed along a line.
    *   **Infinite Line Source:** Radiates sound outwards perpendicular to the line.
    *   **Finite Line Source:** Radiates sound with more complex directional characteristics.

*   **Directivity Pattern (Infinite Line Source):**
    *   **Radiates outwards perpendicular to the line.**
    *   **No directivity in the plane parallel to the line.**
    *   **Directivity in the plane perpendicular to the line:** Sound intensity is uniform in this plane, decreasing with distance.
    *   **Directivity Index (DI):** Approaching 0 dB in the plane of radiation.

*   **Formula (Sound Pressure for Infinite Line Source):** $p(r, \phi) \approx \sqrt{\frac{j \rho_0 c W}{2\pi r}} e^{-jkr}$ (approximately, for far field, where W is power per unit length). The sound field depends only on the radial distance `r` from the line, not on the angle $\phi$ in the perpendicular plane.

*   **Directivity Pattern (Finite Line Source):**
    *   Exhibits directivity, especially at higher frequencies where the source length becomes comparable to or larger than the wavelength.
    *   The main lobe of radiation is typically along the axis perpendicular to the line.
    *   Nulls occur at angles determined by the source length and frequency.

*   **Examples:**
    *   A long, vibrating pipe.
    *   A row of loudspeakers or noise-emitting elements placed in a line.
    *   Traffic noise from a highway viewed from a distance, perpendicular to the road.

*   **Reference:**
    *   *Noise and Vibration Control Engineering* by Ver & Beranek: Discusses line sources in the context of industrial noise (e.g., pipelines) and traffic noise, analyzing their far-field behavior.
    *   *Fundamentals of Acoustics* by Kinsler et al.: Provides detailed mathematical treatments for infinite and finite line sources, including their radiation patterns.

#### 3.4. Dipole

*   **Concept:** A source consisting of two equal and opposite monopoles separated by a small distance. This represents sources with oscillating forces or velocities acting at a point.

*   **Directivity Pattern:**
    *   **Bidirectional:** Radiates sound most strongly in two opposite directions (along the axis connecting the two monopoles) and has nulls in the perpendicular directions.
    *   **Directivity Index (DI):** Maximum DI is approximately 4.77 dB at the directions of maximum radiation.
    *   **Graphical Representation:** A figure-eight shape in a polar plot.

*   **Formula (Sound Pressure for Small Dipole):** $p(r, \theta) = \frac{j k \rho_0 c U_0 a e^{-jkr}}{r} \cos \theta$, where:
    *   $U_0$ is the characteristic velocity of the dipole.
    *   $a$ is the separation distance (small compared to wavelength).
    *   $\theta$ is the angle from the dipole axis.
    *   The $\cos \theta$ term indicates that maximum pressure is at $\theta = 0^\circ$ and $180^\circ$ (along the axis), and zero pressure is at $\theta = 90^\circ$ (perpendicular to the axis).

*   **Examples:**
    *   A small, vibrating rigid sphere (when the entire sphere is pulsating in and out, it's a monopole; when it's translating back and forth, it's a dipole).
    *   A rotating propeller blade tip (partially acts like a dipole).
    *   A balanced loudspeaker cone (where the front and back pressures cancel in the far field, leaving a dipole-like radiation pattern).
    *   A vibrating beam.

*   **Reference:**
    *   *Fundamentals of Acoustics* by Kinsler et al.: Provides the seminal treatment of the dipole as a fundamental source model, detailing its bidirectional radiation pattern.
    *   *Noise and Vibration Control Engineering* by Ver & Beranek: Explains how many practical noise sources (e.g., rotating machinery, unbalanced rotors) can be approximated by dipole sources and how this affects sound propagation.

---

### 4. Quantifying Directivity

*   **Directivity Index (DI):**
    *   **Definition:** The ratio of the sound intensity in a given direction to the average sound intensity over all directions for the same sound power output.
    *   **Formula:** $DI(\theta, \phi) = 10 \log_{10} \frac{I(\theta, \phi)}{I_{avg}}$, where:
        *   $I(\theta, \phi)$ is the intensity in direction $(\theta, \phi)$.
        *   $I_{avg} = \frac{W}{4\pi r^2}$ is the average intensity (as from an isotropic source with the same power $W$).
    *   **Units:** Decibels (dB).
    *   **Interpretation:**
        *   DI = 0 dB: Isotropic source (monopole).
        *   DI > 0 dB: Directional source (sound is more intense in that direction than average).
        *   DI < 0 dB: Less intense in that direction than average.

*   **Directivity Factor (Q):**
    *   **Definition:** Similar to DI but in linear terms (not logarithmic). It's the ratio of intensities.
    *   **Formula:** $Q(\theta, \phi) = \frac{I(\theta, \phi)}{I_{avg}}$.
    *   **Relation to DI:** $DI = 10 \log_{10} Q$.

*   **Directivity of a Source (Average):** Sometimes, a single "directivity" value is given for a source, representing the average directivity over all angles. This is often related to the Directivity Factor (DF) which is the ratio of the total radiated power to the power radiated in a specific direction, or the average sound pressure level difference from an isotropic source. The concept of "average directivity" can be nuanced.

*   **Reference:**
    *   *Handbook of Noise and Vibration Control* by Crocker: Likely contains tables and explanations of DI values for common noise sources and loudspeaker types.
    *   *Noise and Vibration Control Engineering* by Ver & Beranek: Emphasizes the practical application of DI in predicting sound levels and evaluating source directivity.

---

### 5. Factors Affecting Directivity

*   **Frequency:**
    *   At low frequencies (wavelength $\gg$ source dimension), sources tend to be more omnidirectional.
    *   As frequency increases (wavelength $\approx$ source dimension), sources become more directional. This is because the phase of vibration across the source can lead to constructive interference in certain directions and destructive interference in others.

*   **Source Size and Shape:**
    *   Larger sources generally exhibit higher directivity, especially at higher frequencies.
    *   The shape of the source determines the specific pattern of constructive and destructive interference.

*   **Source Mechanism:**
    *   The way the source vibrates or moves determines whether it acts as a monopole, dipole, quadrupole, etc., each having a distinct fundamental directivity pattern.

*   **Enclosures and Baffles:**
    *   A baffle is used to prevent the sound radiated from the back of a driver (like a loudspeaker) from interfering destructively with the sound from the front. A large baffle makes the source behave more like a monopole (up to a certain frequency), while a small baffle can lead to dipole-like behavior.

*   **Reference:**
    *   *Fundamentals of Acoustics* by Kinsler et al.: Provides the theoretical basis for why frequency and source size dictate directivity through wave interference phenomena.
    *   *Industrial Noise Control and Acoustics* by Barron: Discusses practical aspects of how enclosures and baffles influence the directivity of machinery and loudspeakers.

---

### 6. Examples and Applications

*   **Loudspeakers:**
    *   Small, basic loudspeakers tend to be more omnidirectional at low frequencies.
    *   At higher frequencies, they become directional, with the main lobe of radiation moving forward.
    *   Horn-loaded loudspeakers are designed to be highly directional, concentrating sound into a narrow beam.
    *   Line arrays of loudspeakers can be steered electronically to control directivity.

*   **Machinery:**
    *   Rotating machinery like fans and turbines often have directional noise radiation due to their geometry and vibration modes.
    *   The noise from a fan might be loudest in the direction of airflow and also exhibit significant directivity perpendicular to the fan plane.

*   **Traffic Noise:**
    *   At close distances, individual vehicles are complex sources.
    *   At larger distances, a highway can be approximated as a line source, with noise levels decreasing with distance and some directional characteristics related to vehicle types and engine speeds.

*   **Aircraft Noise:**
    *   Jet engines are highly directional, with the loudest noise typically emitted at an angle behind and to the side of the aircraft, due to jet exhaust velocity and turbulence.

*   **Reference:**
    *   *Mechanical Vibrations and Industrial Noise Control* by Lasithan L G: Likely uses examples of industrial machinery and their acoustic radiation patterns to illustrate directivity concepts.
    *   *Noise and Vibration Control Engineering* by Ver & Beranek: Covers a wide range of industrial and transportation noise sources, analyzing their directivity.

---

### 7. Practice Questions and Answers

**Question 1:** A sound source radiates sound with equal intensity in all directions. What is its directivity index (DI)?

**Answer 1:**
The directivity index (DI) is 0 dB. This describes an isotropic source, such as an ideal monopole.

**Question 2:** Describe the directivity pattern of a small dipole source. What are the directions of maximum and minimum sound radiation?

**Answer 2:**
A small dipole source has a **bidirectional** directivity pattern, often described as a "figure-eight" shape.
*   **Maximum sound radiation** occurs along the axis connecting the two opposite monopoles that constitute the dipole.
*   **Minimum sound radiation (nulls)** occurs in directions perpendicular to the dipole axis.

**Question 3:** How does the directivity of a sound source generally change as the frequency of the sound increases, assuming the source size remains constant?

**Answer 3:**
As the frequency of the sound increases, the wavelength of the sound decreases. When the wavelength becomes comparable to or smaller than the dimensions of the sound source, the source tends to become **more directional**. This is due to constructive and destructive interference of sound waves originating from different parts of the source.

**Question 4:** You are measuring sound levels from a long, vibrating pipe. In which plane would you expect to see the sound intensity varying with direction, and in which plane would it be relatively uniform?

**Answer 4:**
For a long line source like a vibrating pipe:
*   You would expect the sound intensity to vary with direction in the plane **perpendicular to the axis of the pipe**. The sound would radiate outwards from the line.
*   In the plane **parallel to the axis of the pipe**, the sound intensity would be relatively uniform (assuming an infinitely long line source approximation).

**Question 5:** A loudspeaker is designed to project sound primarily forward, creating a focused beam of sound. What type of directivity pattern does this loudspeaker exhibit, and what is its likely DI in the forward direction?

**Answer 5:**
This loudspeaker exhibits a **highly directional** directivity pattern, with a dominant main lobe in the forward direction. Its Directivity Index (DI) in the forward direction would be significantly greater than 0 dB, indicating a stronger radiation in that direction compared to an isotropic source. For a highly focused source like a horn-loaded loudspeaker, DI values could be in the range of 10-20 dB or even higher at its design frequencies.

---

### 8. Important Points to Remember

*   **Directivity** describes how a sound source emits sound unevenly in different directions.
*   A **directivity pattern** visualizes this directional behavior.
*   **Monopoles** are isotropic (DI = 0 dB), radiating equally in all directions.
*   **Dipoles** are bidirectional, with maximum radiation along one axis and nulls perpendicular to it. They have a characteristic $\cos \theta$ dependence in their pressure field.
*   **Line sources** radiate preferentially perpendicular to their axis, with directivity increasing with length and frequency.
*   **Frequency and source size** are the primary factors determining directivity. Higher frequencies and larger sources (relative to wavelength) lead to greater directivity.
*   **The Directivity Index (DI)** quantifies directivity in decibels.
*   Understanding directivity is vital for accurate noise prediction, control, and sound system design.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
