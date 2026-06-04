---
title: "Beam width"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 2: Point source, spherical source, Line source, Monopole, dipole"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463fe3"
status: "completed"
scrapedAt: "2026-05-20T18:09:35.610Z"
---
# ACOUSTICS AND NOISE CONTROL - Module 2: Point source, spherical source, Line source, Monopole, Dipole

## Topic: Beam Width

### Introduction to Sound Directivity and Beam Width

In acoustics, sound sources do not always radiate sound equally in all directions. The directional property of a sound source is called **directivity**. For directional sound sources, the sound intensity varies with the angle of radiation. **Beam width** is a quantitative measure of this directivity, describing how concentrated the sound energy is in a particular direction.

This topic focuses on understanding beam width for different types of sound sources commonly encountered in acoustics and noise control.

### Learning Outcomes Covered:

*   **LO: To understand the concept of beam width and its significance in characterizing sound sources.** (Implied understanding of directivity from Module 2 concepts)
*   **LO: To relate beam width to the physical characteristics of various acoustic sources like monopoles, dipoles, and line sources.**
*   **LO: To interpret beam width in the context of sound propagation and its impact on noise control strategies.**

### Course Outcomes Addressed:

*   **CO1: To define various acoustic terminologies and understand the physics behind acoustic wave propagation.** (K2 - Understanding directivity and beam width as acoustic terminologies, and relating them to wave propagation physics).
*   **CO2: To analyse the transmission of sound through different media and tubes.** (K4 - Analyzing how source directivity, characterized by beam width, affects sound transmission and energy distribution in different environments).

---

### 1. Fundamentals of Directivity and Beam Width

#### 1.1 Directivity Index (DI) and Directivity Factor (Q)

*   **Directivity Index (DI):** A measure of how much more sound energy a source radiates in a specific direction compared to an omnidirectional source (a source radiating equally in all directions). It is usually expressed in decibels (dB).
    $DI = 10 \log_{10} \left( \frac{I(\theta, \phi)}{I_{avg}} \right)$
    where:
    *   $I(\theta, \phi)$ is the sound intensity at a given angle $(\theta, \phi)$.
    *   $I_{avg}$ is the average sound intensity over all directions.

*   **Directivity Factor (Q):** The ratio of sound intensity in a particular direction to the average sound intensity.
    $Q = \frac{I(\theta, \phi)}{I_{avg}}$
    *   For an omnidirectional source, $Q = 1$ and $DI = 0$ dB.
    *   As a source becomes more directional, $Q$ increases, and $DI$ becomes positive.

#### 1.2 Beam Width Definitions

Beam width quantifies the angular extent of the main lobe of the directional pattern of a sound source. There are several common definitions:

*   **Half-Power Beamwidth (HPBW):** The angular width over which the sound intensity is greater than or equal to half of its maximum value. This is the most common definition. Since intensity is proportional to the square of the pressure amplitude ($I \propto p^2$), half-power corresponds to a pressure amplitude of $1/\sqrt{2}$ (approximately 0.707) of the maximum pressure amplitude.
    *   In decibels, this corresponds to a 3 dB reduction from the peak level.
    *   $DI_{3dB} = 10 \log_{10} (2) \approx 3$ dB.

*   **Beamwidth at Nulls:** The angular separation between the first nulls on either side of the main lobe. This is relevant for sources with distinct directional patterns.

*   **Beamwidth to First Sidelobe:** The angular separation between points where the directivity drops to the level of the first sidelobe.

**Important Note:** The beam width is typically measured in degrees (°). A smaller beam width indicates a more directional source, with sound concentrated into a narrower beam.

#### 1.3 Relationship between Directivity and Beam Width

A more directional source will have a narrower beam width. Conversely, a source with a wider beam width is less directional, radiating sound more broadly.

**Key Concept:** Beam width is an inverse measure of directivity. A narrower beam width implies higher directivity.

---

### 2. Beam Width of Basic Acoustic Sources

Understanding the beam width of fundamental acoustic sources helps in analyzing more complex scenarios.

#### 2.1 Monopole (Point Source)

*   **Definition:** A monopole is an idealized acoustic source that radiates sound equally in all directions (omnidirectional). It represents a pulsating volume.
*   **Directional Pattern:** Spherical. The sound pressure level (and intensity) is the same at any point at a given distance from the source.
*   **Beam Width:** By definition, an omnidirectional source has no preferred direction. Therefore, its directivity is zero, and its beam width is **360 degrees**.
*   **Mathematical Representation:** The sound field from a monopole is proportional to $e^{ikr}/r$, where $r$ is the distance from the source and $k$ is the wave number. The intensity is proportional to $1/r^2$.

**Example:** A small, vibrating sphere that expands and contracts uniformly, or a small loudspeaker operating in its free-field, low-frequency behavior where it acts like a pulsating sphere.

**Textbook Reference:** Ekinsler et al. (2000) discusses the monopole as a fundamental building block for understanding acoustic fields.

---

#### 2.2 Dipole

*   **Definition:** A dipole consists of two equal and opposite monopoles separated by a small distance. It represents a force acting on the fluid, or a source with linear motion.
*   **Directional Pattern:** Figure-eight pattern. Sound is radiated most strongly in directions perpendicular to the axis joining the two monopoles and is zero along the axis.
*   **Beam Width:**
    *   The main lobe is along the axis perpendicular to the dipole axis.
    *   The nulls are along the axis of the dipole.
    *   The **beam width at the nulls** is **0 degrees**.
    *   The **half-power beamwidth** for a simple dipole is **90 degrees**. This means the intensity drops to half its maximum value at $\pm 45$ degrees from the broadside direction.
*   **Mathematical Representation:** The sound field from a dipole is proportional to $(kr \cos\theta - i) e^{ikr}/r^2$, where $\theta$ is the angle with respect to the dipole axis. The intensity is proportional to $(kr)^2 \cos^2\theta + 1 / r^4$. At large distances ($kr \gg 1$), it approximates $(kr \cos\theta)^2 e^{2ikr}/r^2$, resulting in a $\cos^2\theta$ dependence for the intensity, which is characteristic of a figure-eight pattern.

**Example:** A piston vibrating in a baffle, a simple loudspeaker, or a resonating rod.

**Textbook Reference:** Ver and Beranek (2006) extensively cover dipoles and their radiation patterns in the context of loudspeaker design and noise sources.

---

#### 2.3 Line Source

*   **Definition:** A line source is a continuous distribution of acoustic sources along a line.
*   **Directional Pattern:** Depends on the length of the line source and the frequency.
    *   **Short Line Source (compared to wavelength):** Tends to be more omnidirectional, similar to a monopole.
    *   **Long Line Source (compared to wavelength):** Becomes directional. Sound is radiated most strongly perpendicular to the line.
*   **Beam Width:**
    *   For a line source of length $L$, the beam width depends on the product of the wave number ($k$) and the source length ($L$), i.e., $kL$.
    *   As $kL$ increases (longer source or higher frequency), the source becomes more directional, and the beam width narrows.
    *   The directionality of a long line source is often described by the angle of the first nulls. For a uniform line source, the first nulls occur at angles $\theta$ such that $kL \cos\theta = \pm \pi$.
    *   The **half-power beamwidth** of a long, uniform line source is approximately given by:
        $HPBW \approx 2 \arcsin \left( \frac{0.443 \lambda}{L} \right)$
        where $\lambda$ is the wavelength.
        For $kL \gg \pi$, this can be approximated as:
        $HPBW \approx \frac{2 \lambda}{L}$ (in radians) or $\frac{114.6 \lambda}{L}$ (in degrees).

**Example:** A long array of loudspeakers, a vibrating pipe, or a noisy road surface (approximated as a line source of noise).

**Textbook Reference:** Ekinsler et al. (2000) provides a detailed analysis of radiation from line sources, including their directional patterns and beam widths.

---

#### 2.4 Spherical Source

*   **Definition:** A spherical source is a source that radiates sound from the surface of a sphere. It can be a pulsating sphere (monopole-like behavior), a vibrating sphere with tangential motion (dipole-like behavior), or a more complex vibration pattern.
*   **Directional Pattern:**
    *   A uniformly pulsating sphere ($v_r$ radial, $v_\theta=v_\phi=0$) behaves as a **monopole**. Its directivity is spherical, and beam width is **360 degrees**.
    *   A sphere vibrating tangentially ($v_\theta \neq 0$, $v_r=v_\phi=0$) behaves as a **dipole**. Its directivity is a figure-eight pattern with a beam width of **90 degrees (HPBW)**.
    *   More complex vibration modes (e.g., quadrupoles, octupoles) lead to more complex directional patterns and different beam widths. These are higher-order sources.

**Example:** A loudspeaker cone (approximated as a vibrating surface), a vibrating sphere.

**Textbook Reference:** Ver and Beranek (2006) discusses the acoustic radiation from vibrating surfaces, including spheres, and how different vibration modes contribute to directivity.

---

### 3. Factors Affecting Beam Width

The beam width of a sound source is primarily influenced by:

*   **Source Size relative to Wavelength ($ka$):** This is the most crucial factor.
    *   **Small Source ($ka \ll 1$):** The source is acoustically small, and it tends to be omnidirectional (monopole-like). The beam width is large (approaching 360°).
    *   **Large Source ($ka \gg 1$):** The source becomes directional, and the beam width narrows. The sound is concentrated in a particular direction (often perpendicular to the surface for vibrating surfaces).
    *   Where '$k$' is the wave number ($k = 2\pi/\lambda$) and '$a$' is a characteristic dimension of the source (e.g., radius of a sphere, half-length of a line source, radius of a piston).

*   **Source Geometry and Distribution:** The shape and arrangement of the radiating elements. For example, a line source versus a point source, or a flat piston versus a curved piston.

*   **Frequency:** Higher frequencies (shorter wavelengths) tend to make sources more directional for a given physical size because the $ka$ value increases.

*   **Radiation Mechanism:** Whether the source is a volume displacement (monopole), a force (dipole), or higher-order modes.

---

### 4. Significance of Beam Width in Noise Control

Understanding beam width is vital for effective noise control:

*   **Source Identification and Localization:** Highly directional sources can be more easily located by their narrow beam of sound. This helps in identifying and prioritizing noise sources for mitigation.

*   **Noise Mitigation Strategies:**
    *   **Shielding:** For directional sources, placing barriers directly in the path of the main beam of sound is highly effective. Barriers are less effective if the source radiates omnidirectionally.
    *   **Absorption:** Acoustic absorption materials are more effective in reducing reverberant sound. Understanding the directionality helps in optimizing absorber placement to capture sound that would otherwise reflect.
    *   **Enclosures:** Enclosing a directional source can effectively contain its sound, especially if the enclosure is designed to block the main sound beam.

*   **Sound Propagation Prediction:** Knowing the directivity of a source allows for more accurate prediction of sound levels at different locations. Highly directional sources will have higher levels in their main beam and lower levels off-axis.

*   **Equipment Selection:** Choosing equipment with lower directivity can be beneficial in environments where sound needs to spread broadly (e.g., public address systems), while highly directional sources are preferred for focused sound delivery.

**Example:** A high-frequency fan might have a narrow beam of noise emanating from its outlet. A noise barrier placed directly in front of this outlet will be more effective than if the fan were omnidirectional. Conversely, a low-frequency vibrating machine might radiate sound more uniformly, requiring different mitigation strategies.

**Textbook Reference:** Barron (2001) and Crocker (2007) discuss practical applications of source directivity and beam width in industrial noise control, including barrier design and enclosure effectiveness.

---

### 5. Practice Questions and Answers

**Question 1:**
An idealized acoustic source that radiates sound uniformly in all directions is called a:
a) Dipole
b) Line Source
c) Monopole
d) Quadrupole

**Answer:** c) Monopole

**Question 2:**
Which of the following definitions of beam width describes the angular extent over which the sound intensity is at least half of its maximum value?
a) Beamwidth at nulls
b) Half-Power Beamwidth (HPBW)
c) Beamwidth to first sidelobe
d) Full Width at Half Maximum (FWHM)

**Answer:** b) Half-Power Beamwidth (HPBW)

**Question 3:**
A source with a narrow beam width is considered:
a) Omnidirectional
b) Highly directional
c) Low intensity
d) Non-radiating

**Answer:** b) Highly directional

**Question 4:**
A loudspeaker operating at very low frequencies, where its cone diameter is much smaller than the wavelength of the sound, will behave most closely like which type of acoustic source?
a) Dipole
b) Line Source
c) Monopole
d) Spherical Source with complex modes

**Answer:** c) Monopole (because $ka \ll 1$)

**Question 5:**
Consider a simple dipole source. What is the angle of the nulls in its radiation pattern?
a) 0° and 180°
b) 90°
c) 45° and 135°
d) 360°

**Answer:** a) 0° and 180° (along the axis joining the two monopoles).

**Question 6 (Calculation):**
A hypothetical line source of length 2 meters radiates sound. If the half-power beamwidth is measured to be approximately 30 degrees at a certain frequency, what can you infer about the source's directivity at that frequency?

**Answer:** A beam width of 30 degrees indicates that the source is quite directional at this frequency. A smaller beam width signifies higher directivity. If it were omnidirectional, the beam width would be 360 degrees.

**Question 7 (Conceptual):**
Explain why understanding the beam width of a machinery noise source is important when designing acoustic barriers to protect workers on one side of the machine.

**Answer:**
Understanding the beam width helps in optimizing the placement and effectiveness of an acoustic barrier. If the machinery noise source has a narrow beam width, meaning the sound is concentrated in a specific direction, the barrier should be placed directly in the path of this main sound beam to achieve maximum attenuation. If the source were omnidirectional (wide beam width), the barrier would need to be designed to shield from all directions, or multiple barriers might be needed, and its effectiveness would be more uniform around the source. For directional sources, a well-positioned barrier can be highly efficient.

---

### 6. Important Points to Remember

*   **Beam width quantifies the angular spread of sound from a directional source.**
*   **Half-Power Beamwidth (HPBW) is the most common measure, defined by a 3 dB reduction in intensity (or a pressure amplitude reduction to 0.707 of the maximum).**
*   **Omnidirectional sources (monopoles) have a beam width of 360°.**
*   **Dipoles have a figure-eight pattern with nulls at 0° and 180° and an HPBW of 90°.**
*   **Source size relative to wavelength ($ka$) is the primary determinant of beam width.** Small sources ($ka \ll 1$) are omnidirectional; large sources ($ka \gg 1$) are directional.
*   **Higher frequencies or larger sources generally lead to narrower beam widths (higher directivity).**
*   **Beam width is critical for effective noise control, influencing barrier design, enclosure effectiveness, and sound propagation prediction.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 7. References

*   **Ver, I. L., & Beranek, L. L. (2006). *Noise and vibration control engineering* (2nd ed.). Wiley.** (Essential for understanding radiation from sources and directivity of loudspeakers/vibrating surfaces).
*   **Ekinsler, L., Frey, A. R., Coppens, A. B., & Sanders, J. V. (2000). *Fundamentals of acoustics* (4th ed.). Wiley.** (Provides theoretical basis for sound radiation from basic sources like monopoles and line sources).
*   **Munjal, M. L. (2013). *Noise and Vibration Control*. World Scientific Publishing.**
*   **Crocker, M. J. (2007). *Handbook of Noise and Vibration Control*. Wiley.**
*   **Barron, R. F. (2001). *Industrial Noise Control and Acoustics*. Marcel Dekker, Inc.**
*   **Lasithan, L. G. (2014). *Mechanical Vibrations and Industrial Noise Control*. PHI Learning.**

---