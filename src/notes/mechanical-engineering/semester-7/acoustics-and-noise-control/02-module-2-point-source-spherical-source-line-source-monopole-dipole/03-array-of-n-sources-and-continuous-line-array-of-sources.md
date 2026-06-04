---
title: "Array of N sources and continuous line array of sources"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 2: Point source, spherical source, Line source, Monopole, dipole"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463fdf"
status: "completed"
scrapedAt: "2026-05-20T18:09:32.744Z"
---
# ACOUSTICS AND NOISE CONTROL

## Module 2: Point Source, Spherical Source, Line Source, Monopole, Dipole

### Topic: Array of N Sources and Continuous Line Array of Sources

---

### 1. Introduction to Source Arrays and their Significance

*   **Concept:** When multiple sound sources are placed in close proximity, their individual sound fields combine to create a complex, resultant sound field. This phenomenon is crucial for understanding noise from machinery with multiple components, loudspeaker arrays, and even the acoustic behavior of vibrating surfaces.
*   **Significance:**
    *   **Constructive and Destructive Interference:** The combined sound pressure at any point in space is the vector sum of the sound pressures from each individual source. This can lead to areas of amplified sound (constructive interference) and areas of reduced sound (destructive interference).
    *   **Directionality:** By arranging sources in specific patterns (arrays), we can control the directionality of the emitted sound, focusing it in desired directions or reducing it in others. This is the principle behind phased arrays in radar and sonar, and also in audio systems.
    *   **Noise Control:** Understanding source arrays is vital for predicting the combined noise output of complex machinery and for designing effective noise mitigation strategies.
*   **Textbook Reference:** *Noise and Vibration Control Engineering* by Ver & Beranek discusses the concept of multiple sources contributing to the overall sound field, particularly in the context of machinery noise. *Fundamentals of Acoustics* by Kinsler et al. provides the foundational principles of wave superposition and interference, essential for understanding array behavior.
*   **Course Outcome Alignment:** This section directly supports **CO1** by defining acoustic terminology related to wave superposition and **CO2** by analyzing how sound transmission from multiple sources interacts.

---

### 2. Array of N Discrete Sources

#### 2.1. Basic Principles: Superposition and Interference

*   **Princ of Superposition:** The total sound pressure at a point in space due to multiple sources is the algebraic sum of the sound pressures that would be produced by each source acting alone, provided the sources are linear. In acoustics, this means:
    $p_{total}(r, t) = \sum_{i=1}^{N} p_i(r, t)$
    where $p_{total}$ is the total sound pressure, $p_i$ is the sound pressure from the $i$-th source, $N$ is the number of sources, and $r$ is the observation point.
*   **Phasor Representation:** Sound waves are sinusoidal. Their amplitudes and phases can be represented by phasors (complex numbers). The resultant sound pressure is the vector sum of these phasors.
    $P_{total} = \sum_{i=1}^{N} P_i e^{j\phi_i}$
    where $P_i$ is the amplitude of the $i$-th source and $\phi_i$ is its phase.
*   **Coherent vs. Incoherent Sources:**
    *   **Coherent Sources:** Emit waves with a constant phase difference. Their contributions add constructively or destructively depending on the phase difference.
    *   **Incoherent Sources:** Emit waves with random phase differences. Their contributions to intensity (and therefore power) add arithmetically.
    $I_{total} = \sum_{i=1}^{N} I_i$
    This is typically observed when sources are far apart or uncorrelated.

#### 2.2. Simple Array Configurations

*   **Two Identical Sources:**
    *   Let two identical monopole sources with volume velocity $Q_0$ be placed at positions $x_1$ and $x_2$.
    *   At a far-field point $r$, the sound pressure from source 1 is $p_1 \approx \frac{j \rho_0 c k Q_0 e^{-jkr_1}}{4\pi r_1}$ and from source 2 is $p_2 \approx \frac{j \rho_0 c k Q_0 e^{-jkr_2}}{4\pi r_2}$.
    *   The phase difference $\Delta\phi = k(r_2 - r_1)$ becomes significant in determining the interference pattern.
    *   If the sources are in phase, constructive interference occurs when $r_2 - r_1 = n\lambda$ (where $n$ is an integer), leading to higher sound pressure levels.
    *   If the sources are out of phase ($\pi$), destructive interference occurs when $r_2 - r_1 = (n + 1/2)\lambda$, leading to lower sound pressure levels.
*   **Linear Array of N Identical Sources:**
    *   Consider $N$ identical monopole sources placed along a line (e.g., the x-axis) with spacing $d$.
    *   The sources are typically assumed to be in phase or with a specific phase progression.
    *   **Far-field Pressure:** The far-field pressure at an angle $\theta$ relative to the array axis is proportional to the array factor, which accounts for the phase differences due to the path length differences from each source to the observation point.
        $AF = \sum_{n=0}^{N-1} e^{j(n d k \cos\theta + n\delta)}$
        where $\delta$ is the phase difference between adjacent sources.
    *   **Directionality Pattern:** The array factor determines the directivity of the array. For $N$ sources in phase, the main lobe is perpendicular to the array axis (broadside radiation). For sources with a progressive phase, the main lobe can be steered.
*   **Reference Book Inclusion:** *Handbook of Noise and Vibration Control* by Crocker often includes detailed examples and discussions on array theory for practical noise applications. *Industrial Noise Control and Acoustics* by Barron might touch upon the acoustic behavior of machinery with multiple vibrating components.

#### 2.3. Key Concepts and Definitions

*   **Array Factor (AF):** A mathematical expression that describes the directional properties of an array of antennas or sources. It represents the ratio of the radiation in a given direction to the radiation in the direction of the main beam.
*   **Beamwidth:** The angular width of the main lobe in the directivity pattern, often measured at the half-power points. A narrower beamwidth indicates a more directional source.
*   **Sidelobes:** Secondary lobes in the directivity pattern that are less intense than the main lobe but can still contribute to sound propagation in undesired directions.
*   **Phase Steering:** Adjusting the phase of the signals fed to individual sources in an array to direct the main lobe of radiation to a specific angle.
*   **Constructive Interference:** When waves from multiple sources combine to produce a resultant wave with a larger amplitude than the individual waves.
*   **Destructive Interference:** When waves from multiple sources combine to produce a resultant wave with a smaller amplitude (or zero amplitude) than the individual waves.

#### 2.4. Examples and Applications

*   **Loudspeaker Arrays:** Used in concert halls and public address systems to provide uniform sound coverage and overcome acoustic diffraction.
*   **Engine Noise:** Cylinders in an engine can be considered as an array of sources. The combined noise depends on the firing order and spacing.
*   **Vibrating Surfaces:** A complex vibrating surface can be viewed as an array of point sources, and its sound radiation characteristics depend on the spatial correlation of the vibrations.
*   **Sonar and Radar:** Phased arrays are fundamental to steering beams electronically without physical movement.

#### 2.5. Important Points to Remember

*   The phase relationship between sources is critical for determining the combined sound field.
*   Incoherent sources simply add their intensities.
*   Coherent sources add their pressures vectorially, leading to interference effects.
*   Array design allows for control over directionality and the overall sound power output.

---

### 3. Continuous Line Array of Sources

#### 3.1. Mathematical Formulation

*   **Concept:** Instead of discrete sources, we consider a continuous distribution of acoustic sources along a line. This is a useful approximation for structures like long, vibrating beams or pipes.
*   **Source Density:** The line array can be described by a source density function, $\sigma(x')$, which represents the strength of the source per unit length at position $x'$. For monopole sources, this would be volume velocity per unit length.
*   **Far-field Pressure:** The total sound pressure at a far-field point $r$ is obtained by integrating the contributions from each infinitesimal segment of the line array:
    $p_{total}(r, t) = \int_{-L/2}^{L/2} \frac{j \rho_0 c k \sigma(x') e^{-jkr}}{4\pi r} e^{j k x' \cos\theta} dx'$
    where $L$ is the length of the line array, $x'$ is the source position along the line, and $\theta$ is the angle of observation relative to the array axis.
*   **Simplified Form:**
    $p_{total}(r, t) \propto \frac{e^{-jkr}}{r} \int_{-L/2}^{L/2} \sigma(x') e^{j k x' \cos\theta} dx'$
    The integral term, $\int_{-L/2}^{L/2} \sigma(x') e^{j k x' \cos\theta} dx'$, is the continuous analog of the array factor.

#### 3.2. Radiation Pattern of a Uniform Line Source

*   **Uniform Monopole Line Source:** Consider a line array of length $L$ with constant monopole source density $\sigma_0$.
    $p_{total}(r, t) \propto \frac{e^{-jkr}}{r} \int_{-L/2}^{L/2} \sigma_0 e^{j k x' \cos\theta} dx'$
    $p_{total}(r, t) \propto \frac{e^{-jkr}}{r} \sigma_0 \left[ \frac{e^{j k x' \cos\theta}}{j k \cos\theta} \right]_{-L/2}^{L/2}$
    $p_{total}(r, t) \propto \frac{e^{-jkr}}{r} \sigma_0 \frac{e^{j k (L/2) \cos\theta} - e^{-j k (L/2) \cos\theta}}{j k \cos\theta}$
    $p_{total}(r, t) \propto \frac{e^{-jkr}}{r} \sigma_0 \frac{2j \sin(k(L/2) \cos\theta)}{j k \cos\theta}$
    $p_{total}(r, t) \propto \frac{e^{-jkr}}{r} \sigma_0 \frac{L \sin(\beta)}{\beta}$, where $\beta = k(L/2) \cos\theta$.
*   **Directivity Function:** The term $\frac{\sin(\beta)}{\beta}$ describes the directivity of the uniform line source.
    *   **Main Lobe:** Occurs when $\beta$ is close to zero, i.e., $\cos\theta$ is close to zero (broadside radiation, $\theta = 90^\circ$).
    *   **Nulls:** Occur when $\beta = m\pi$, where $m = \pm 1, \pm 2, \dots$. This means $k(L/2) \cos\theta = m\pi$, or $\cos\theta = \frac{2m\pi}{kL} = \frac{m\lambda}{L}$.
    *   **Beamwidth:** The beamwidth is inversely proportional to the length of the array and directly proportional to the wavelength. A longer array or shorter wavelength leads to a narrower beam.
*   **Comparison to Point Source:** A point source radiates spherically (uniform in all directions, neglecting directivity for a moment). A line source has directivity, with stronger radiation perpendicular to its axis when uniformly excited.

#### 3.3. Effect of Length and Wavelength

*   **Short Line Source ($L \ll \lambda$):** When the length of the line array is much smaller than the wavelength, the term $\sin(\beta)/\beta$ approaches 1 for all angles, and the radiation becomes nearly omnidirectional, similar to a point source.
*   **Long Line Source ($L \gg \lambda$):** As the length increases relative to the wavelength, the directivity increases significantly. The main lobe becomes narrower, and sidelobes appear. The pattern is dominated by the $\sin(\beta)/\beta$ term.
*   **Effect of Frequency (Wavelength):** For a fixed length $L$, increasing the frequency (decreasing wavelength $\lambda$) increases the value of $\beta$ for a given $\cos\theta$. This leads to a narrower main lobe and more sidelobes, meaning increased directionality.

#### 3.4. Examples and Applications

*   **Vibrating Beams and Rods:** The noise radiated by a vibrating beam can be modeled as a line source.
*   **Pipes and Ducts:** Noise emanating from leaks or openings in long pipes can be approximated by a line source.
*   **Linear Speaker Arrays:** Used for targeted sound delivery or achieving specific acoustic effects.
*   **Underwater Acoustics:** Sonar arrays often employ line arrays for beamforming.

#### 3.5. Important Points to Remember

*   Continuous line sources exhibit directional radiation patterns dependent on their

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
