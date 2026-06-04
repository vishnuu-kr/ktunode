---
title: "Antenna theory : Radiation mechanism from an antenna"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 1: Antenna theory : Radiation mechanism from an antenna"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff760"
status: "completed"
scrapedAt: "2026-05-23T18:12:17.829Z"
---
Here are comprehensive study notes for "Module 1: Antenna theory: Radiation mechanism from an antenna" in ANTENNA THEORY AND WAVE PROPAGATION, aligned with your provided information.

---

# Module 1: Antenna Theory - Radiation Mechanism from an Antenna

## 1.1 Introduction to Antennas

*   **Definition:** An antenna is a transducer that converts electrical energy into electromagnetic waves for transmission, or electromagnetic waves into electrical energy for reception. (Balanis, Ch 1.1)
*   **Fundamental Role:** Antennas are essential components in wireless communication systems, enabling the transmission and reception of information via electromagnetic waves.
*   **Key Function:** To efficiently radiate or receive electromagnetic energy into or from free space.

## 1.2 The Nature of Electromagnetic Waves

*   **Source of EM Waves:** Accelerating charges are the fundamental source of electromagnetic radiation. (Balanis, Ch 1.1)
*   **Maxwell's Equations:** These fundamental equations govern the behavior of electric and magnetic fields and are the basis for understanding electromagnetic wave propagation.
    *   $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$ (Faraday's Law)
    *   $\nabla \times \mathbf{H} = \mathbf{J} + \frac{\partial \mathbf{D}}{\partial t}$ (Ampere-Maxwell Law)
    *   $\nabla \cdot \mathbf{D} = \rho$ (Gauss's Law for Electricity)
    *   $\nabla \cdot \mathbf{B} = 0$ (Gauss's Law for Magnetism)
*   **Wave Propagation:** Time-varying electric and magnetic fields, when coupled, propagate through space as electromagnetic waves. These waves consist of oscillating electric and magnetic fields perpendicular to each other and to the direction of propagation.

## 1.3 Radiation from Current Elements

This section delves into the fundamental mechanism of how antennas radiate by considering idealized current distributions.

### 1.3.1 The Elementary Electric Dipole (Hertzian Dipole)

*   **Concept:** An idealized, infinitesimally short conductor carrying a uniform, time-harmonic current. This is a fundamental building block for understanding more complex antennas. (Balanis, Ch 2.2)
*   **Assumptions:**
    *   Length $l$ is very small compared to the wavelength ($\lambda$) of the radiated wave ($l \ll \lambda$).
    *   The current $I$ is assumed to be uniform along the length of the dipole and has a sinusoidal time variation, $I(t) = I_0 e^{j\omega t}$. The current is often represented as $I = I_0 e^{j\omega t}$ in phasor form, with $I_0$ being the peak current.
    *   The charge distribution is assumed to be such that it satisfies continuity.
*   **Far-Field Radiation:** In the far-field region (far from the antenna), the fields are approximately transverse to the direction of propagation and behave like plane waves.
    *   **Electric Field ($E_\theta$):**
        $$E_\theta \approx \frac{j \omega \mu_0 l I_0}{4\pi r} e^{-j\beta r} \sin\theta$$
        *   $\omega$: Angular frequency
        *   $\mu_0$: Permeability of free space
        *   $l$: Length of the dipole
        *   $I_0$: Peak current
        *   $r$: Distance from the dipole
        *   $\beta$: Wavenumber ($\beta = 2\pi/\lambda$)
        *   $\theta$: Angle from the dipole axis
    *   **Magnetic Field ($H_\phi$):**
        $$H_\phi \approx \frac{j \omega \epsilon_0 l I_0}{4\pi r} e^{-j\beta r} \sin\theta$$
        *   $\epsilon_0$: Permittivity of free space
*   **Radiation Pattern:** The distribution of radiated power in various directions. For a Hertzian dipole, the radiation pattern is omnidirectional in the azimuth plane ($\phi$) and has a figure-eight shape in the elevation plane ($\theta$).
*   **Total Radiated Power:**
    $$P_{total} = \frac{\pi}{6} I_0^2 \left(\frac{l}{\lambda}\right)^2 Z_0$$
    *   $Z_0$: Impedance of free space ($\approx 377 \Omega$)
*   **Radiation Resistance ($R_r$):** The equivalent resistance that would dissipate the same power as radiated by the antenna if the same current were passed through it.
    $$R_r = \frac{\pi}{6} Z_0 \left(\frac{l}{\lambda}\right)^2$$
    *   **Important Point:** For a Hertzian dipole, $R_r$ is very small, indicating poor efficiency for such a short element.

### 1.3.2 The Short Electric Dipole

*   **Concept:** Similar to the Hertzian dipole, but the current is not necessarily uniform. It's assumed to vary linearly from a maximum at the center to zero at the ends. (Balanis, Ch 2.4)
*   **Current Distribution:** $I(z) = I_0 (1 - \frac{|z|}{l/2})$
*   **Far-Field Expressions:** More complex than the Hertzian dipole due to the varying current, but the general behavior is similar.
*   **Radiation Resistance:** For a short dipole (length $l \ll \lambda$), the radiation resistance is:
    $$R_r \approx 20 \pi^2 \left(\frac{l}{\lambda}\right)^2$$
    *   **Important Point:** Still shows a quadratic dependence on $l/\lambda$, indicating inefficiency for short lengths.

### 1.3.3 The Elementary Magnetic Dipole (Loop)

*   **Concept:** An idealized, infinitesimally small loop carrying a uniform current. This is dual to the electric dipole. (Balanis, Ch 2.7)
*   **Assumptions:**
    *   Loop area $A$ is very small compared to the wavelength ($\sqrt{A} \ll \lambda$).
    *   Current $I$ is uniform around the loop.
*   **Far-Field Radiation:**
    *   **Electric Field ($E_\phi$):**
        $$E_\phi \approx \frac{j \omega \mu_0 I_0 A}{4\pi r} e^{-j\beta r} \sin\theta$$
    *   **Magnetic Field ($H_\theta$):**
        $$H_\theta \approx -\frac{j \omega \epsilon_0 I_0 A}{4\pi r} e^{-j\beta r} \sin\theta$$
*   **Radiation Pattern:** Similar to the electric dipole (figure-eight in elevation, omnidirectional in azimuth).
*   **Radiation Resistance:**
    $$R_r = 20 \pi^2 \left(\frac{A}{\lambda^2}\right) \left(\frac{1}{\pi}\right)^2 Z_0 = 20 \pi^2 \left(\frac{A}{\lambda^2}\right)$$
    *   **Important Point:** Also shows poor radiation resistance for small loops.

### 1.3.4 Current Elements as Building Blocks

*   **Principle of Superposition:** More complex antenna structures can be analyzed by considering them as combinations of elementary current elements. The total fields are the vector sum of the fields radiated by each element. (Balanis, Ch 1.2, 1.3)
*   **Example:** A half-wave dipole can be viewed as two short dipole elements with a specific current distribution.

## 1.4 Radiation from Loops (Finite Size)

*   **Concept:** When the circumference of a loop becomes comparable to or larger than a wavelength, the current distribution is no longer uniform, and the radiation characteristics change significantly. (Balanis, Ch 2.8, 2.9)
*   **Small Loop (Circumference $C < \lambda$):** The analysis is similar to the elementary magnetic dipole, with minor corrections for the finite size and non-uniform current.
*   **Large Loop (Circumference $C \approx \lambda$):**
    *   **Current Distribution:** Becomes more complex, with standing wave patterns.
    *   **Radiation Pattern:** Can become more directional. For a loop with circumference around $\lambda$, the radiation can be concentrated in directions perpendicular to the plane of the loop.
    *   **Types:**
        *   **Thin-wire loops:**
            *   **Circumference $\approx \lambda$:** Radiates primarily in directions perpendicular to the plane of the loop. (Kraus, Ch 7)
            *   **Circumference $\approx 1.5\lambda$:** Can exhibit bidirectional or bidirectional patterns.
        *   **Helix antennas:** Loops arranged in a helical shape.
*   **Loop Impedance:** Changes significantly with loop size and can be inductive or capacitive.

## 1.5 Radiation from Aperture Antennas

*   **Concept:** Antennas that radiate from an opening (aperture) in a conducting surface. The fields in the aperture are used to determine the radiated fields. (Balanis, Ch 5.1)
*   **Methods of Analysis:**
    *   **Huygens' Principle:** The aperture can be considered as a source of secondary wavelets that combine to produce the far-field radiation.
    *   **Equivalent Electric and Magnetic Surface Currents:** The fields in the aperture are represented by equivalent electric currents ($\mathbf{J}_{eq}$) and magnetic currents ($\mathbf{M}_{eq}$) on an infinite conducting plane.
        *   $\mathbf{J}_{eq} = \hat{\mathbf{n}} \times \mathbf{H}_{aperture}$ (on the aperture surface)
        *   $\mathbf{M}_{eq} = -\mathbf{E}_{aperture} \times \hat{\mathbf{n}}$ (on the aperture surface)
        *   $\hat{\mathbf{n}}$ is the outward normal to the aperture surface.
    *   **Far-Field Calculation:** The far-field is calculated by integrating the contributions from these equivalent currents over the aperture area.
*   **Examples:**
    *   **Horn Antennas:** Waveguide fed radiators with a flared opening to match to free space. Radiation is determined by the fields in the horn aperture. (Balanis, Ch 6.2)
    *   **Reflector Antennas:** Use a reflecting surface to shape the radiation pattern. The feed antenna illuminates a reflector, and the effective aperture is determined by the size and shape of the reflector. (Balanis, Ch 8.1)
    *   **Slot Antennas:** A slot in a conducting surface. The fields in the slot are related to the currents that would exist on the conducting surface if the slot were not present (Babinet's Principle). (Balanis, Ch 5.5)

## 1.6 Radiation from Aperture Antennas using Duality

*   **Babinet's Principle:** States that the far-field radiation pattern of a slot antenna is the same as that of a complementary dipole antenna, provided that the incident wave is the same for both and the slot is small compared to the wavelength. More generally, the fields radiated by a complementary structure are related. (Balanis, Ch 5.5)
*   **Application:** If we know the radiation from a dipole, we can infer the radiation from a complementary slot antenna.

## 1.7 Radiation from Traveling Wave Antennas

*   **Concept:** Antennas where the current is not a standing wave but a traveling wave, meaning the current magnitude decreases along the antenna length. (Balanis, Ch 7.1)
*   **Mechanism:** The wave propagates along the antenna structure and radiates continuously. The phase and amplitude of the radiating current at different points along the antenna determine the overall radiation pattern.
*   **Examples:**
    *   **Long Wire Antennas:** A straight wire whose length is several wavelengths. (Balanis, Ch 7.2)
        *   **$1\lambda$ Dipole:** Radiates broadside and endfire.
        *   **$1.5\lambda$ Dipole:** Exhibits a more complex pattern.
        *   **Very Long Wires (many wavelengths):** Can produce a broadside beam.
    *   **V-Antennas:** Two wire segments forming a V-shape. Can be designed for broadside or endfire radiation.
    *   **Rhombic Antennas:** A diamond-shaped arrangement of four wire segments. Typically designed for endfire radiation and broadband operation. (Balanis, Ch 7.6)
    *   **Yagi-Uda Antennas:** A directional antenna consisting of a driven element (dipole), a reflector, and one or more directors. The directors and reflector are parasitic elements that influence the current on the driven element and shape the radiation pattern. (Balanis, Ch 7.7)
    *   **Log-Periodic Antennas:** A series of dipoles of varying lengths and spacing, designed for broadband operation across a wide range of frequencies. (Balanis, Ch 7.9)
    *   **Spiral Antennas:** Produce circularly polarized radiation and are useful for broadband and frequency-independent applications. (Balanis, Ch 7.10)

## 1.8 Array Antennas

*   **Concept:** A collection of radiating elements (like dipoles or loops) arranged in a specific geometric configuration and fed with controlled excitation (amplitude and phase). (Balanis, Ch 4.1)
*   **Purpose:** To achieve directional radiation, increased gain, and specific beam shapes.
*   **Key Principle:** The radiation pattern of an array is the product of the pattern of a single element and the array factor, which accounts for the geometric arrangement and excitation of the elements.
    *   Pattern = Element Pattern $\times$ Array Factor
*   **Types of Arrays:**
    *   **Broadside Array:** Elements are arranged perpendicular to the array axis, and the main beam is directed perpendicular to the array axis.
    *   **Endfire Array:** Elements are arranged along the array axis, and the main beam is directed along the array axis.
    *   **Uniform Array:** All elements have the same amplitude excitation.
    *   **Non-uniform Array:** Elements have varying amplitude excitations (e.g., for sidelobe reduction).
    *   **Linear Array:** Elements arranged along a line.
    *   **Planar Array:** Elements arranged on a plane.
    *   **Grating Lobe:** An unwanted secondary maximum in the radiation pattern that occurs when the element spacing is too large or when the beam is steered off broadside. (Balanis, Ch 4.3)
*   **Synthesis of Array Patterns:** Techniques used to design arrays with desired radiation patterns, such as the Dolph-Chebyshev array for minimizing sidelobes. (Balanis, Ch 4.7)

## 1.9 Antenna Parameters (Related to Radiation Mechanism)

*   **Radiation Intensity ($U$):** Power per unit solid angle, often expressed in Watts/steradian.
    *   $U = r^2 \times \text{Power Density}$
    *   **Example:** For a Hertzian dipole, $U(\theta) = \frac{\omega^2 \mu_0 l^2 I_0^2}{32\pi^2 r^2} \sin^2\theta$.
*   **Directivity ($D$):** The ratio of the radiation intensity in a given direction to the average radiation intensity over all directions. It measures how well an antenna concentrates power in a particular direction.
    $$D = \frac{U(\theta, \phi)}{U_{avg}} = \frac{4\pi U(\theta, \phi)}{\int_0^{2\pi} \int_0^{\pi} U(\theta, \phi) \sin\theta d\theta d\phi}$$
    *   **Maximum Directivity ($D_0$):** The directivity in the direction of maximum radiation.
    *   **For a Hertzian Dipole:** $D_0 = 1.5$.
*   **Gain ($G$):** The ratio of the radiation intensity in a given direction to the radiation intensity of a reference antenna (usually an isotropic antenna) fed with the same input power. Gain accounts for both directivity and the antenna's efficiency.
    $$G(\theta, \phi) = \eta_r D(\theta, \phi)$$
    *   $\eta_r$: Radiation efficiency (ratio of radiated power to input power).
    *   **Maximum Gain ($G_0$):** The gain in the direction of maximum radiation.
*   **Radiation Efficiency ($\eta_r$):** The ratio of the power radiated by the antenna to the total power accepted by the antenna at its terminals. It accounts for losses due to finite conductivity of the conductors (ohmic losses) and dielectric losses.
    $$\eta_r = \frac{R_r}{R_{in}} = \frac{P_{radiated}}{P_{accepted}}$$
    *   $R_{in}$: Input resistance of the antenna.
*   **Bandwidth:** The range of frequencies over which the antenna's performance is satisfactory. Related to how the radiation mechanism changes with frequency.

## 1.10 Key Concepts and Takeaways (Module 1)

*   **Radiation is caused by accelerating charges.**
*   **Electromagnetic waves consist of oscillating electric and magnetic fields propagating through space.**
*   **The Hertzian dipole and elementary magnetic loop are fundamental models for understanding radiation.**
*   **The radiation pattern describes the spatial distribution of radiated power.**
*   **Radiation resistance quantifies the efficiency of radiating power.**
*   **Aperture antennas radiate from openings, and their fields can be analyzed using equivalent currents and Huygens' principle.**
*   **Traveling wave antennas radiate from currents that propagate along the structure.**
*   **Arrays combine multiple elements to achieve directional radiation.**
*   **Directivity and gain measure how effectively an antenna concentrates power.**
*   **Radiation efficiency accounts for losses within the antenna.**

## 1.11 Examples and Applications

*   **Radio and TV Broadcasting:** Dipole antennas, Yagi-Uda antennas are used for transmission.
*   **Mobile Communications:** Patch antennas (a type of aperture antenna), helical antennas are common.
*   **Radar:** Parabolic reflector antennas are used for their high directivity.
*   **Satellite Communications:** High-gain parabolic antennas.
*   **Wi-Fi:** Dipole antennas, patch antennas.

## 1.12 Practice Questions

1.  **What is the fundamental physical phenomenon that causes an antenna to radiate electromagnetic waves?**
2.  **Explain the far-field radiation components ($E_\theta$ and $H_\phi$) for a Hertzian dipole. What do these expressions tell us about its radiation pattern?**
3.  **Derive the radiation resistance of a short electric dipole of length $l \ll \lambda$. How does it depend on the length and wavelength?**
4.  **What is Huygens' principle, and how is it applied to analyze the radiation from aperture antennas?**
5.  **Describe the concept of an array antenna. How is the radiation pattern of an array related to the pattern of a single element and the array factor?**
6.  **Define Directivity and Gain. What is the relationship between them and Radiation Efficiency?**
7.  **Consider a half-wave dipole antenna ($\lambda/2$). How does its radiation mechanism differ from that of a Hertzian dipole? What is its approximate radiation resistance?** (Hint: Balanis, Ch 3)

## 1.13 Answers to Practice Questions

1.  **Answer:** The fundamental cause of electromagnetic radiation from an antenna is the acceleration of electric charges. When charges are in motion and their velocity changes (acceleration), they produce time-varying electric and magnetic fields that propagate as electromagnetic waves.
2.  **Answer:** For a Hertzian dipole oriented along the z-axis, the far-field components are approximately:
    *   $E_\theta \approx \frac{j \omega \mu_0 l I_0}{4\pi r} e^{-j\beta r} \sin\theta$
    *   $H_\phi \approx \frac{j \omega \epsilon_0 l I_0}{4\pi r} e^{-j\beta r} \sin\theta$
    These expressions show that the fields are proportional to $\sin\theta$, meaning the radiation is maximum broadside ($\theta=90^\circ$) and zero along the axis of the dipole ($\theta=0^\circ, 180^\circ$). The pattern is omnidirectional in the $\phi$ (azimuth) plane.
3.  **Answer:** The radiation resistance of a short electric dipole ($l \ll \lambda$) with uniform current $I_0$ is approximately:
    $$R_r \approx 20 \pi^2 \left(\frac{l}{\lambda}\right)^2$$
    This shows that $R_r$ is proportional to the square of the ratio of the dipole length to the wavelength. For very short dipoles ($l \ll \lambda$), $R_r$ is very small, indicating poor radiation efficiency.
4.  **Answer:** Huygens' principle states that every point on a wavefront can be considered as a source of secondary spherical wavelets, and the subsequent wavefront is the envelope of these wavelets. For aperture antennas, the fields present in the aperture of the antenna are treated as a distribution of equivalent electric and magnetic surface currents ($\mathbf{J}_{eq}$ and $\mathbf{M}_{eq}$). The integral of the radiation from these equivalent currents over the entire aperture surface gives the far-field radiation pattern of the antenna.
5.  **Answer:** The radiation pattern of an array antenna is the product of the radiation pattern of a single element and the array factor. The element pattern describes the radiation characteristics of an individual antenna element, while the array factor accounts for the constructive and destructive interference of waves from multiple elements based on their spatial arrangement and the phase and amplitude of their excitations.
    Pattern (Array) = Pattern (Element) $\times$ Array Factor
6.  **Answer:**
    *   **Directivity ($D$)** is the ratio of the radiation intensity in a specific direction to the average radiation intensity in all directions. It measures the antenna's ability to concentrate power.
    *   **Gain ($G$)** is the ratio of the radiation intensity in a specific direction to the radiation intensity of a reference antenna (e.g., isotropic) fed with the same input power. It accounts for both directivity and the antenna's efficiency.
    *   The relationship is: $G(\theta, \phi) = \eta_r D(\theta, \phi)$, where $\eta_r$ is the radiation efficiency. Gain is always less than or equal to directivity.
7.  **Answer:** A half-wave dipole ($\lambda/2$) has a resonant length, meaning its length is approximately half the wavelength. The current distribution along a half-wave dipole is not uniform; it is sinusoidal, with maximum current at the center and zero current at the ends. This is a standing wave.
    *   **Radiation Mechanism:** The sinusoidal current distribution means that different parts of the dipole radiate with different amplitudes and phases, leading to a more directional pattern than a Hertzian dipole. The radiation is maximum broadside and zero along the axis.
    *   **Radiation Resistance:** The radiation resistance of a half-wave dipole is approximately $R_r \approx 73 \Omega$ (in free space). This is significantly higher than that of a short dipole, making it much more efficient for radiation. (Balanis, Ch 3.3.1)

## 1.14 Important Points to Remember

*   **Fundamental Principle:** Accelerating charges are the source of EM radiation.
*   **Hertzian Dipole:** The simplest radiating element; its characteristics ($E_\theta \propto \sin\theta$, $R_r \propto (l/\lambda)^2$) are foundational.
*   **Radiation Pattern:** Crucial for understanding antenna performance; depends on current distribution and geometry.
*   **Aperture vs. Current Antennas:** Different radiation mechanisms; aperture analysis relies on equivalent currents and Huygens' principle.
*   **Array Factor:** Key to understanding how multiple elements create directional patterns through constructive/destructive interference.
*   **Efficiency Matters:** Low radiation resistance ($R_r$) for short elements leads to low efficiency. Higher $R_r$ (like in a resonant dipole) implies better radiation.
*   **Balanis is your primary reference for detailed derivations and theory.**

---

This set of notes covers the essential aspects of the radiation mechanism from antennas as outlined in Module 1. It incorporates theoretical concepts, fundamental formulas, key antenna types, and relevant parameters, aligning with the learning outcomes and course outcomes specified. Remember to consult Balanis' textbook for in-depth derivations and further examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
