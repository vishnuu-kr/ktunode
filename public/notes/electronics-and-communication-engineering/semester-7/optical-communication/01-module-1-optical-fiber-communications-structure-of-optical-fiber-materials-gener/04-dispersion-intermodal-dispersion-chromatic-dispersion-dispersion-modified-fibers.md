---
title: "Dispersion- Intermodal dispersion, Chromatic dispersion, Dispersion modified fibers, Photonic crystal fibers, Polarization mode dispersion, Nonlinear effects, Solitons."
subject: "OPTICAL COMMUNICATION"
module: "Module 1: Optical fiber Communications: Structure of Optical fiber , materials, General block diagram of optical communication system, Advantages."
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff4ca"
status: "completed"
scrapedAt: "2026-05-23T18:08:20.215Z"
---
# Optical Fiber Communications: Dispersion and Advanced Concepts

## Module 1: Optical Fiber Communications

### Topic: Dispersion, Non-Linear Effects, and Solitons

This module delves into the fundamental limitations imposed by dispersion in optical fibers and introduces advanced concepts like non-linear effects and solitons, crucial for understanding high-speed and long-haul optical communication systems.

---

### 1. Dispersion in Optical Fibers

**Definition:** Dispersion refers to the phenomenon where different spectral components (wavelengths) of an optical signal travel at different speeds within the optical fiber. This causes the signal pulse to spread out in time, leading to intersymbol interference (ISI) and limiting the data rate and transmission distance.

**Key Concepts:**
*   **Pulse Spreading:** The primary consequence of dispersion is the widening of the optical pulse as it propagates.
*   **Intersymbol Interference (ISI):** When dispersed pulses overlap, making it difficult for the receiver to distinguish between consecutive bits.
*   **Bandwidth Limitation:** Dispersion limits the effective bandwidth of the fiber, thereby restricting the achievable data rate.

---

#### 1.1. Intermodal Dispersion

**Applicable to:** Multimode Optical Fibers (MMFs).
**Definition:** Intermodal dispersion arises due to the presence of multiple propagation modes (paths) in a multimode fiber. Different modes travel different optical path lengths, causing them to arrive at the receiver at different times.

**Key Concepts:**
*   **Modes:** Different spatial patterns of light that can propagate in an optical fiber.
*   **Ray Theory:** A way to visualize modal propagation, where rays entering the fiber at different angles represent different modes.
*   **Meridional Rays:** Rays that pass through the fiber axis.
*   **Skew Rays:** Rays that do not pass through the fiber axis.
*   **Higher-order modes:** Tend to travel longer paths and arrive later than lower-order modes.

**Types of Multimode Fibers and their Intermodal Dispersion:**

*   **Step-Index Multimode Fiber (SI-MMF):**
    *   Has a uniform refractive index in the core.
    *   Leads to significant intermodal dispersion because rays traveling at different angles experience different path lengths.
    *   **Example:** A ray entering at a larger angle (higher-order mode) will travel a longer path than a ray entering parallel to the axis (fundamental mode).

*   **Graded-Index Multimode Fiber (GI-MMF):**
    *   Has a refractive index profile that gradually decreases from the core center to the cladding.
    *   **Mechanism:** Rays traveling at higher angles (away from the axis) enter regions of lower refractive index, causing them to speed up. Conversely, rays traveling closer to the axis experience higher refractive indices and travel slower. This graded profile partially compensates for the path length differences of different modes.
    *   **Advantage:** Significantly reduces intermodal dispersion compared to SI-MMF, allowing for higher bandwidth and longer transmission distances.

**Mathematical Representation (Qualitative):**
The time difference ($\Delta t_{intermodal}$) between the arrival of the fastest and slowest modes is roughly proportional to $L/c$, where $L$ is the fiber length and $c$ is the speed of light.

**Textbook Reference:**
*   **Keiser, G. (2021).** Discusses the ray optics approach to understanding modes and the impact of step-index and graded-index profiles on intermodal dispersion.
*   **Senior, J. M. (2014).** Provides detailed explanations and derivations for intermodal dispersion in different fiber types.

---

#### 1.2. Chromatic Dispersion

**Applicable to:** All types of optical fibers (Single-Mode and Multimode).
**Definition:** Chromatic dispersion occurs because the refractive index of the fiber material and the propagation speed of light are dependent on the wavelength of the light. Therefore, different wavelengths within a signal pulse travel at different speeds, causing pulse spreading.

**Key Concepts:**
*   **Wavelength Dependence:** The core of the phenomenon.
*   **Spectral Width:** The range of wavelengths present in an optical signal (e.g., from a laser or LED).

**Types of Chromatic Dispersion:**

*   **Material Dispersion:**
    *   **Origin:** The variation of the refractive index of the core material (e.g., silica glass) with wavelength.
    *   **Mechanism:** Different wavelengths of light are slowed down differently by the glass molecules.
    *   **Equation (Qualitative):** $\Delta t_{material} \propto L \cdot \lambda \cdot \frac{d^2n}{d\lambda^2}$ (pulse spreading is proportional to length, wavelength, and the second derivative of refractive index with respect to wavelength).
    *   **Example:** A semiconductor laser with a broad spectral width will experience significant material dispersion.

*   **Waveguide Dispersion:**
    *   **Origin:** The way in which the optical power is distributed between the core and the cladding, and how this distribution changes with wavelength. This is a property of the fiber geometry (core radius, refractive index difference).
    *   **Mechanism:** In single-mode fibers, the fundamental mode's propagation characteristics are influenced by the fiber structure. As wavelength changes, the effective index of the mode changes, leading to different propagation times.
    *   **Behavior:** Waveguide dispersion can be either positive or negative, depending on the fiber design and wavelength. It can be used to control the overall chromatic dispersion.

**Total Chromatic Dispersion ($D_{\lambda}$):**
*   The sum of material and waveguide dispersion.
*   Expressed in units of ps/(nm·km).
*   **Equation (Qualitative):** $D_{\lambda} = D_{material} + D_{waveguide}$
*   **Calculation:** $D_{\lambda} = -\frac{\lambda}{c} \frac{d^2n_{eff}}{d\lambda^2}$, where $n_{eff}$ is the effective refractive index of the mode.

**Zero Dispersion Wavelength ($\lambda_0$):**
*   The wavelength at which the total chromatic dispersion is zero ($D_{\lambda} = 0$).
*   For standard SMF, $\lambda_0$ is around 1310 nm.
*   **Significance:** Operating at $\lambda_0$ minimizes chromatic dispersion, allowing for higher data rates and longer distances.

**Textbook Reference:**
*   **Palais, J. C. (2013).** Provides a clear explanation of material and waveguide dispersion and their contributions to total chromatic dispersion.
*   **Agrawal, G. P. (2019).** Offers in-depth analysis of chromatic dispersion, including the calculation of material and waveguide dispersion parameters for different fiber designs.

---

#### 1.3. Dispersion Modified Fibers

**Purpose:** To minimize or control the effects of dispersion, particularly chromatic dispersion, in optical communication systems.

**Key Concepts:**
*   **Dispersion Shifted Fiber (DSF):**
    *   **Design:** The refractive index profile is modified to shift the zero dispersion wavelength ($\lambda_0$) from 1310 nm to the 1550 nm region.
    *   **Advantage:** Allows operation at 1550 nm, where optical amplifiers (like EDFA) have their lowest loss and highest gain. This is crucial for long-haul systems.
    *   **Issue:** DSFs often exhibit higher attenuation at 1310 nm and can suffer from Four-Wave Mixing (FWM) effects when multiple carriers are used in WDM systems operating near $\lambda_0$.

*   **Dispersion Flattened Fiber (DFF):**
    *   **Design:** Further modification of the refractive index profile to achieve near-zero chromatic dispersion over a broad range of wavelengths (e.g., 1530 nm to 1565 nm).
    *   **Advantage:** Ideal for Wavelength Division Multiplexing (WDM) systems, as it minimizes dispersion for all the multiplexed channels.
    *   **Complexity:** DFFs are more complex to design and manufacture, leading to higher costs.

**Textbook Reference:**
*   **Mishra & Ugale (2019).** Covers the design principles and applications of dispersion-shifted and dispersion-flattened fibers.
*   **Raghuwanshi, S. K. (2015).** Explains how specific refractive index profiling techniques are used to achieve these dispersion modifications.

---

#### 1.4. Photonic Crystal Fibers (PCFs)

**Definition:** PCFs are a class of optical fibers that guide light through microstructured arrangements of tiny air holes running along the fiber length. The light is guided either by total internal reflection (TIR) or by the photonic bandgap effect.

**Key Concepts:**
*   **Periodic Structure:** The defining characteristic of PCFs – a repeating pattern of air holes in the cladding.
*   **Solid Core PCF (Index-Guiding PCF):**
    *   **Guiding Mechanism:** Relies on the high index difference between the solid silica core and the surrounding air holes. Light is guided by modified TIR.
    *   **Dispersion Control:** PCFs offer exceptional control over dispersion due to the strong dependence of mode confinement on the air-hole structure. They can be designed to have:
        *   **Anomalously high positive waveguide dispersion:** Can shift $\lambda_0$ to very short or very long wavelengths.
        *   **Very flat dispersion:** Similar to DFFs.
        *   **Controlled negative dispersion:** Can be used to compensate for material dispersion.
*   **Hollow Core PCF (Photonic Bandgap PCF):**
    *   **Guiding Mechanism:** Light is guided by the photonic bandgap effect, where light is forbidden to propagate in the periodic structure. The core is often hollow, with light confined within it by the bandgap of the surrounding microstructured cladding.
    *   **Advantages:** Can achieve very low nonlinearity and potentially lower loss than solid core fibers.
    *   **Dispersion:** The dispersion in hollow-core PCFs is generally very different and can be even more extreme than in solid-core PCFs.

**Applications:**
*   Supercontinuum generation.
*   Wavelength conversion.
*   High-power fiber lasers.
*   Dispersion compensation.

**Textbook Reference:**
*   **Agrawal, G. P. (2019).** Dedicates significant sections to PCFs, explaining their structure, guiding mechanisms, and unique dispersion properties.
*   **Senior, J. M. (2014).** Provides an introduction to the concept of microstructured fibers and their potential.

---

#### 1.5. Polarization Mode Dispersion (PMD)

**Applicable to:** Single-Mode Fibers (SMFs).
**Definition:** PMD is the phenomenon where different polarization states of light travel at different speeds in an optical fiber. This is caused by imperfections in the fiber's circular symmetry, such as slight ellipticity of the core or stress birefringence.

**Key Concepts:**
*   **Birefringence:** The property of a material having a refractive index that depends on the polarization and propagation direction of light. In optical fibers, this arises from manufacturing imperfections.
*   **Polarization States:** Light waves can oscillate in different planes (e.g., linear, circular, elliptical).
*   **Principal States of Polarization (PSPs):** Two orthogonal polarization states that propagate with different speeds in a birefringent fiber.
*   **Time Delay Difference ($\Delta t_{PMD}$):** The difference in arrival time between the two PSPs.

**Causes of PMD:**
*   **Geometric Birefringence:** Imperfections in the circular shape of the core.
*   **Stress Birefringence:** Uneven stress induced during manufacturing or cabling.
*   **Stray Birefringence:** Induced by bends, twists, or external forces.

**Impact:**
*   Significant for high-bit-rate systems (e.g., >10 Gbps).
*   Causes pulse spreading, similar to chromatic dispersion.
*   PMD is a **stochastic process**, meaning it fluctuates randomly over time due to environmental changes affecting the fiber (temperature, vibration).

**Measurement:**
*   Typically measured in units of ps/$\sqrt{km}$. The total PMD for a fiber of length $L$ is approximately $PMD_{total} = PMD_{measured} \cdot \sqrt{L}$.

**Mitigation:**
*   **Fiber Design:** Manufacturing fibers with higher degrees of circularity.
*   **Active Compensation:** Using polarization controllers to dynamically equalize the arrival times of the two polarization states.
*   **Passive Compensation:** Using special fibers designed to have low or zero PMD.

**Textbook Reference:**
*   **Keiser, G. (2021).** Explains the origin of PMD, its impact on signal quality, and the statistical nature of PMD.
*   **Agrawal, G. P. (2019).** Provides a more detailed mathematical treatment of PMD, including the Jones matrix formalism and the concept of the PMD vector.

---

### 2. Nonlinear Effects in Optical Fibers

**Definition:** Nonlinear effects occur when the optical power propagating through the fiber becomes high enough to induce changes in the fiber's optical properties. These changes are proportional to higher powers of the optical electric field, unlike linear effects which are proportional to the first power.

**Key Concepts:**
*   **High Optical Power:** Necessary for nonlinear effects to become significant. Typically observed in high-bit-rate, long-haul, or amplified systems.
*   **Kerr Effect:** The dominant nonlinear effect in silica fibers, where the refractive index of the fiber material changes with the intensity of the light: $n(I) = n_0 + n_2 I$, where $n_0$ is the linear refractive index, $n_2$ is the nonlinear refractive index coefficient, and $I$ is the optical intensity.

**Major Nonlinear Effects:**

*   **Self-Phase Modulation (SPM):**
    *   **Mechanism:** The intensity-dependent refractive index (Kerr effect) causes a time-varying phase shift across the optical pulse. This phase shift is equivalent to a time-varying frequency shift, leading to spectral broadening of the pulse.
    *   **Impact:** Can worsen chromatic dispersion effects. Can be used for spectral shaping.

*   **Cross-Phase Modulation (XPM):**
    *   **Mechanism:** The intensity of one optical channel (or wavelength) affects the refractive index experienced by another optical channel, leading to a phase shift on the second channel.
    *   **Impact:** Significant in WDM systems, causing inter-channel interference.

*   **Four-Wave Mixing (FWM):**
    *   **Mechanism:** When multiple optical frequencies ($f_1, f_2, f_3$) propagate, nonlinear interaction can generate new frequencies, such as $f_4 = f_1 + f_2 - f_3$.
    *   **Impact:** Creates "ghost" or "phantom" signals that can interfere with legitimate channels, especially in WDM systems operating close to the zero-dispersion wavelength of standard fibers.

*   **Stimulated Raman Scattering (SRS):**
    *   **Mechanism:** An inelastic scattering process where a photon transfers energy to the molecular vibrations of the fiber material, creating a longer wavelength photon and a phonon. The scattered photon has a lower frequency (longer wavelength).
    *   **Impact:** Leads to power transfer from shorter wavelengths to longer wavelengths in WDM systems, flattening the spectrum of channels at shorter wavelengths and depleting channels at longer wavelengths.

*   **Stimulated Brillouin Scattering (SBS):**
    *   **Mechanism:** An inelastic scattering process where a photon interacts with acoustic waves (phonons) in the fiber, creating a longer wavelength photon and a phonon. The scattered photon is at a slightly lower frequency (longer wavelength) and is scattered backward.
    *   **Impact:** Primarily a power limitation in single-channel systems, as it can convert forward propagating power into backward propagating power, limiting the maximum launched power.

**Textbook Reference:**
*   **Agrawal, G. P. (2019).** Provides comprehensive coverage of all major nonlinear effects, including detailed theoretical treatments and their impact on system performance.
*   **Keiser, G. (2021).** Introduces nonlinear effects as limitations in optical systems, focusing on their practical implications for signal integrity.

---

### 3. Solitons

**Definition:** Solitons are self-reinforcing, localized wave packets that maintain their shape as they propagate. In optical fibers, the phenomenon of **optical solitons** arises from the delicate balance between two effects:
1.  **Dispersion:** Which tends to spread the pulse.
2.  **Nonlinearity (SPM):** Which can cause spectral broadening that, when coupled with the fiber's anomalous dispersion, can lead to pulse compression.

**Key Concepts:**
*   **Anomalous Dispersion:** For optical solitons to exist in the standard form, the fiber must exhibit anomalous dispersion, where longer wavelengths travel faster than shorter wavelengths ($\frac{d^2\beta}{d\lambda^2} > 0$, where $\beta$ is the propagation constant). This is typically the case for SMF at wavelengths above 1310 nm.
*   **Nonlinear Schrödinger Equation (NLSE):** The fundamental equation that describes pulse propagation in optical fibers, encompassing both dispersion and nonlinearity. Soliton solutions are derived from the NLSE.
*   **Higher-Order Solitons:**
    *   **First-Order Soliton:** The simplest form, which propagates without changing its shape. It requires a specific input pulse shape (e.g., hyperbolic secant) and intensity.
    *   **Higher-Order Solitons (N > 1):** Exhibit periodic behavior. They compress, then broaden, then compress again as they propagate. At certain points, they can break up into multiple fundamental solitons.

**Advantages of Soliton Transmission:**
*   **Dispersionless Propagation:** The primary advantage is the ability to transmit pulses over very long distances without significant spreading, overcoming the limitations of dispersion.
*   **High Bit Rates:** Enables higher data rates due to the sharp pulse shapes.

**Challenges:**
*   **Requires Anomalous Dispersion:** Limits operating wavelengths for standard fibers.
*   **High Peak Power:** Solitons require high peak powers to counteract dispersion, which can excite other nonlinear effects.
*   **Bit-rate Dependence:** The period of higher-order soliton evolution depends on the pulse width and fiber parameters, making it sensitive to data rates.
*   **Gordon-Haus Effect:** A random timing jitter caused by the amplification of noise by nonlinear effects, which broadens the soliton spectrum and shifts its central frequency. Requires periodic re-amplification and dispersion management.

**Textbook Reference:**
*   **Agrawal, G. P. (2019).** Provides a thorough explanation of optical solitons, the NLSE, and the conditions for their existence and propagation.
*   **Senior, J. M. (2014).** Introduces the concept of solitons as a consequence of the interplay between dispersion and nonlinearity.

---

### Summary of Dispersion Types and Their Impact

| Dispersion Type        | Cause                                                              | Applicable To                  | Primary Impact                               | Mitigation Strategies                                                                       |
| :--------------------- | :----------------------------------------------------------------- | :----------------------------- | :------------------------------------------- | :------------------------------------------------------------------------------------------ |
| **Intermodal**         | Multiple propagation modes in MMFs                                 | Multimode Fibers               | Pulse spreading, limited bandwidth           | Graded-index profiles, single-mode fibers (SMF)                                             |
| **Chromatic**          | Wavelength-dependent refractive index & group velocity             | All fiber types                | Pulse spreading, ISI, limited data rate      | Dispersion-shifted fibers (DSF), dispersion-flattened fibers (DFF), dispersion compensating fibers (DCF) |
| **Polarization Mode**  | Imperfections causing birefringence                              | Single-Mode Fibers (SMF)       | Pulse spreading, ISI, signal degradation     | Fiber manufacturing improvements, PMD compensators, polarization-maintaining fibers         |

---

### Important Points to Remember:

*   **Dispersion is the primary enemy of high-speed, long-distance optical communication.**
*   **Intermodal dispersion is dominant in MMFs and is reduced by GI profiles.**
*   **Chromatic dispersion is present in all fibers and is a combination of material and waveguide dispersion.**
*   **Zero dispersion wavelength ($\lambda_0$) for standard SMF is around 1310 nm.**
*   **DSFs shift $\lambda_0$ to 1550 nm for amplifier compatibility, while DFFs flatten dispersion over a wide band.**
*   **PCFs offer unprecedented control over dispersion through microstructured designs.**
*   **PMD is caused by birefringence and is a stochastic process that affects high-speed SMF systems.**
*   **Nonlinear effects become significant at high optical powers and can degrade signal quality (SPM, XPM, FWM, SRS, SBS).**
*   **Solitons are self-reinforcing pulses that balance dispersion and nonlinearity, enabling dispersionless propagation.**
*   **Soliton formation typically requires anomalous dispersion and specific pulse shapes/intensities.**

---

### Practice Questions

**Level K2 (Knowledge)**

1.  Define dispersion in optical fibers.
    *   **Answer:** Dispersion is the phenomenon where different spectral components (wavelengths) of an optical signal travel at different speeds within the fiber, causing the signal pulse to spread out in time.

2.  What are the two main types of dispersion that occur in optical fibers?
    *   **Answer:** Chromatic dispersion and intermodal dispersion. (PMD is also a type of dispersion).

3.  In which type of optical fiber is intermodal dispersion a significant problem?
    *   **Answer:** Multimode optical fibers (MMFs).

4.  What causes material dispersion?
    *   **Answer:** The variation of the refractive index of the core material with wavelength.

5.  What causes waveguide dispersion?
    *   **Answer:** The way in which optical power is distributed between the core and cladding, and how this distribution changes with wavelength, affecting the mode propagation characteristics.

6.  At what wavelength is the zero dispersion wavelength for standard single-mode fiber?
    *   **Answer:** Approximately 1310 nm.

7.  What is the primary purpose of Dispersion Shifted Fiber (DSF)?
    *   **Answer:** To shift the zero dispersion wavelength to the 1550 nm region, where optical amplifiers have lower loss.

8.  Define Polarization Mode Dispersion (PMD).
    *   **Answer:** PMD is the phenomenon where different polarization states of light travel at different speeds in an optical fiber due to birefringence caused by imperfections.

9.  What is the primary nonlinear effect that leads to optical solitons?
    *   **Answer:** Self-Phase Modulation (SPM), in conjunction with anomalous dispersion.

10. What is the defining characteristic of a photonic crystal fiber (PCF)?
    *   **Answer:** It guides light through microstructured arrangements of air holes running along its length.

---

**Short Answer Questions**

1.  Explain the difference between intermodal dispersion and chromatic dispersion.
    *   **Answer:** Intermodal dispersion occurs in multimode fibers due to different propagation paths for various modes, while chromatic dispersion occurs in all fibers due to the wavelength-dependent refractive index and group velocity of the material and waveguide structure.

2.  How does a graded-index multimode fiber reduce intermodal dispersion compared to a step-index multimode fiber?
    *   **Answer:** In GI-MMF, the refractive index gradually decreases from the core center. This causes light rays traveling at larger angles (away from the axis) to speed up in the lower refractive index regions, partially compensating for their longer path lengths and reducing the time difference between modes.

3.  Briefly describe the two components of chromatic dispersion.
    *   **Answer:** Material dispersion, arising from the wavelength dependence of the core material's refractive index, and waveguide dispersion, arising from the wavelength dependence of the mode's effective index due to the fiber's geometrical structure.

4.  What are the advantages of operating at the zero dispersion wavelength?
    *   **Answer:** Operating at $\lambda_0$ minimizes chromatic dispersion, allowing for higher bandwidth and longer transmission distances without significant pulse spreading.

5.  What is Four-Wave Mixing (FWM), and why is it a problem in WDM systems?
    *   **Answer:** FWM is a nonlinear effect where new frequencies are generated through the interaction of multiple optical signals. In WDM systems, these new frequencies can fall on other channels, causing interference and signal degradation.

---

**Application-Based Questions**

1.  Consider a 100 km long optical fiber link with a chromatic dispersion of 17 ps/(nm·km) at the operating wavelength. If the optical transmitter uses a laser with a spectral width of 0.1 nm, estimate the amount of pulse spreading due to chromatic dispersion.
    *   **Calculation:** Pulse spreading ($\Delta t$) = Dispersion ($D_\lambda$) $\times$ Length ($L$) $\times$ Spectral Width ($\Delta \lambda$)
        $\Delta t = (17 \text{ ps/(nm}\cdot\text{km)}) \times (100 \text{ km}) \times (0.1 \text{ nm})$
        $\Delta t = 170 \text{ ps}$
    *   **Answer:** The estimated pulse spreading is 170 picoseconds.

2.  Why would a telecommunication company choose Dispersion Flattened Fiber (DFF) for a high-capacity Wavelength Division Multiplexing (WDM) system?
    *   **Answer:** DFF is chosen because it provides near-zero chromatic dispersion over a broad range of wavelengths. This is crucial for WDM systems where multiple optical channels, each with its own wavelength, are transmitted simultaneously. By minimizing dispersion for all channels, DFF ensures that all signals arrive at the receiver without significant spreading and inter-channel interference, thus maximizing the system's capacity and performance.

3.  Explain how a higher-order soliton's periodic behavior could be both an advantage and a disadvantage in optical communication.
    *   **Answer:**
        *   **Advantage:** At the point of maximum compression, the pulse is sharper, potentially allowing for higher bit rates.
        *   **Disadvantage:** The periodic nature means the pulse shape changes as it propagates. If the system requires a stable pulse shape for reliable detection, this periodic variation can be problematic. Furthermore, the evolution period is sensitive to initial conditions and data rates, making it challenging to manage without precise control.

---
This comprehensive study material covers the key aspects of dispersion, nonlinear effects, and solitons in optical communication, referencing the provided textbooks and aligning with the stated learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
