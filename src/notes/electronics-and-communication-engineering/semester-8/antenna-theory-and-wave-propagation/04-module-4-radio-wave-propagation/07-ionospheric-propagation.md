---
title: "Ionospheric propagation"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 4: Radio Wave Propagation"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff78b"
status: "completed"
scrapedAt: "2026-05-23T18:12:50.561Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 4: Radio Wave Propagation

### Topic: Ionospheric Propagation

This topic explores how radio waves travel by reflecting off or bending through the Earth's ionosphere. This phenomenon is crucial for long-distance communication, particularly in the High Frequency (HF) and Medium Frequency (MF) bands.

---

### 1. Learning Outcomes Covered:

*   **Understanding the Ionosphere:** Describe the structure, composition, and formation of the ionosphere.
*   **Mechanism of Ionospheric Propagation:** Explain the interaction of radio waves with ionized regions and the concept of critical frequency and skip distance.
*   **Factors Affecting Ionospheric Propagation:** Discuss the influence of solar activity, time of day, season, and geographic location.
*   **Modes of Ionospheric Propagation:** Detail different propagation modes like Skywave, Ducting, and Ionospheric Absorption.
*   **Applications and Limitations:** Identify the advantages and disadvantages of ionospheric propagation for communication systems.

---

### 2. Key Concepts and Definitions:

*   **Ionosphere:** A region of Earth's upper atmosphere, approximately 60 km to 1000 km above the surface, that is ionized by solar radiation. It consists of free electrons and ions.
    *   *Reference:* Balanis, *Antenna Theory: Analysis and Design*, Chapter 12.
*   **Ionization:** The process of creating ions and free electrons from neutral atoms or molecules. This is primarily caused by ultraviolet (UV) and X-ray radiation from the sun.
*   **Electron Density (Ne):** The number of free electrons per unit volume in the ionosphere. This is a critical parameter determining wave propagation.
*   **Plasma Frequency ($\omega_p$ or $f_p$):** The natural resonant frequency of the ionospheric plasma. A radio wave with a frequency below the plasma frequency will be reflected.
    *   $f_p = \sqrt{\frac{Ne \cdot e^2}{\epsilon_0 \cdot m_e}} \approx 9 \sqrt{Ne}$ (where $Ne$ is in electrons/m³, $f_p$ is in Hz)
    *   $e$: charge of an electron (1.602 x 10⁻¹⁹ C)
    *   $m_e$: mass of an electron (9.108 x 10⁻³¹ kg)
    *   $\epsilon_0$: permittivity of free space (8.854 x 10⁻¹² F/m)
*   **Critical Frequency ($f_c$):** The highest frequency that can be reflected by a specific ionospheric layer for vertical incidence.
    *   $f_c = f_p$ (for vertical incidence)
*   **Maximum Usable Frequency (MUF):** The highest frequency that can be used for communication between two points via ionospheric reflection, considering oblique incidence. It is always higher than the critical frequency.
    *   MUF = $f_c \cdot \sec(\theta_i)$ (where $\theta_i$ is the angle of incidence with respect to the vertical)
    *   *Reference:* Collin, *Antennas and Radio Wave Propagation*, Chapter 10.
*   **Frequency of Optimum Traffic (FOT):** A frequency slightly lower than the MUF, usually 85% of MUF, chosen for reliable communication.
*   **Lowest Usable Frequency (LUF):** The lowest frequency that can be used for communication between two points via ionospheric reflection. Below this, absorption in the ionosphere becomes too severe.
*   **Skip Distance:** The minimum distance at which a radio wave, transmitted at a specific frequency above $f_c$, will be reflected back to Earth. For a given frequency, higher frequencies have smaller skip distances.
*   **Virtual Height ($h'$):** The apparent height from which a radio wave is reflected. It is always greater than or equal to the actual height of the reflecting layer due to the bending of the wave.
*   **Absorption:** The loss of radio wave energy as it passes through the ionosphere, primarily in the lower D-layer, due to collisions between electrons and neutral molecules.
*   **Skywave Propagation (or Indirect Wave Propagation):** The mode of propagation where radio waves are reflected or refracted by the ionosphere back to Earth, enabling communication over long distances.
*   **Groundwave Propagation:** The mode of propagation where radio waves travel along the surface of the Earth. Effective for lower frequencies (LF, MF).
*   **Surface Wave:** A groundwave that follows the curvature of the Earth.
*   **Space Wave:** A wave that travels directly from transmitter to receiver, or via reflection from the Earth's surface.

---

### 3. Structure and Formation of the Ionosphere:

The ionosphere is divided into several layers, each with distinct characteristics and effects on radio wave propagation.

*   **Formation Process:**
    1.  **Solar Radiation:** UV and X-ray radiation from the sun strikes the upper atmosphere (primarily above 60 km).
    2.  **Ionization:** This radiation ionizes neutral atoms and molecules, creating free electrons and positive ions.
    3.  **Recombination:** Electrons and ions recombine to form neutral particles, a process that is slower at higher altitudes due to lower density.
    4.  **Dynamic Equilibrium:** A balance is reached between ionization and recombination, resulting in regions of significant ionization.

*   **Key Layers:**
    *   **D-Layer (60-90 km):**
        *   Present only during daytime.
        *   Highly ionized by solar X-rays and Lyman-alpha radiation.
        *   Causes significant absorption of MF and HF waves due to frequent collisions between free electrons and neutral molecules.
        *   Not reflective for HF waves; it refracts them downwards, leading to absorption.
        *   *Reference:* Raju GSN, *Antenna and Wave Propagation*, Chapter 5.
    *   **E-Layer (90-140 km):**
        *   Present during the day, weaker at night.
        *   Ionization primarily by solar UV radiation.
        *   Can reflect HF waves with frequencies up to approximately 20 MHz.
        *   Less absorption than the D-layer.
    *   **F-Layer (140-1000 km):**
        *   The most important layer for long-distance HF communication.
        *   Exists in two parts during the day:
            *   **F1-Layer (140-210 km):** Appears during the day, merges with F2 at night.
            *   **F2-Layer (210-1000 km):** The most intensely ionized layer, present day and night. Its electron density varies significantly with solar activity, time of day, and season.
        *   Capable of reflecting very high frequencies (up to 50 MHz or more).
        *   *Reference:* Balanis, *Antenna Theory: Analysis and Design*, Chapter 12.
    *   **Kennelly-Heaviside Layer:** An older term often used to refer to the E and F layers collectively, as they are responsible for reflecting radio waves.

---

### 4. Mechanism of Ionospheric Propagation (Skywave):

*   **Interaction with Ionized Regions:**
    *   When a radio wave enters the ionosphere, it interacts with the free electrons.
    *   The electric field of the wave causes electrons to oscillate.
    *   If the wave frequency ($f$) is **less than** the plasma frequency ($f_p$) of the region, the electrons oscillate in phase with the wave and re-radiate the energy away from Earth, causing **reflection**.
    *   If the wave frequency ($f$) is **greater than** the plasma frequency ($f_p$), the electrons oscillate out of phase, and the wave passes through the ionosphere with little interaction, causing **refraction** or penetration.
*   **Refraction vs. Reflection:**
    *   The ionosphere's refractive index ($n$) depends on the wave frequency ($f$) and the electron density ($Ne$):
        $n = \sqrt{1 - \frac{Ne \cdot e^2}{\epsilon_0 \cdot m_e \cdot \omega^2}} = \sqrt{1 - \frac{f_p^2}{f^2}}$
    *   As a wave enters a region with higher electron density, $f_p$ increases, and the refractive index $n$ decreases.
    *   According to Snell's Law, as the wave enters regions of decreasing refractive index, it bends away from the normal.
    *   If the wave bends sufficiently, it can be directed back towards Earth. This bending is often referred to as "reflection" for simplicity, although it is a gradual process of refraction.
*   **Critical Frequency ($f_c$):**
    *   At vertical incidence ($\theta_i = 0^\circ$), the wave bends back to Earth if $f \le f_p$. The maximum frequency that can be reflected vertically is when $f = f_p$.
    *   $f_c \approx 9 \sqrt{Ne_{max}}$ (where $Ne_{max}$ is the peak electron density of the layer).
    *   *Example:* If the peak electron density of a layer is $10^{12}$ electrons/m³, $f_c \approx 9 \sqrt{10^{12}} = 9 \times 10^6$ Hz = 9 MHz.
*   **Maximum Usable Frequency (MUF):**
    *   For oblique incidence (at an angle $\theta_i$ to the vertical), the effective plasma frequency becomes $f_p \cos(\theta_i)$.
    *   Reflection occurs when the wave frequency $f$ is less than or equal to the plasma frequency multiplied by the cosine of the angle of incidence.
    *   The maximum frequency that can be reflected at an angle $\theta_i$ is when $f = f_p \cos(\theta_i)$.
    *   Since $f_p = f_c$ at vertical incidence, MUF = $f_c \sec(\theta_i)$.
    *   *Reference:* Milligan, *Modern Antenna Design*, Chapter 7.
    *   *Example:* If a layer has $f_c = 9$ MHz, and the angle of incidence at the layer is $60^\circ$ from the vertical ($\sec(60^\circ) = 2$), then MUF = $9 \times 2 = 18$ MHz. A wave of 18 MHz can be reflected, but a wave of 19 MHz would penetrate.
*   **Skip Distance:**
    *   For a given frequency $f > f_c$, there is a minimum angle of incidence $\theta_i$ (and thus a maximum angle of elevation of the transmitting antenna) for which reflection will occur.
    *   As frequency increases, the required angle of incidence decreases (gets closer to vertical), and the skip distance decreases.
    *   For frequencies close to MUF, the skip distance is minimal.
    *   For frequencies slightly above $f_c$, the skip distance is maximal.
    *   *Reference:* Kraus, *Antennas for All Applications*, Chapter 16.
*   **Virtual Height ($h'$):**
    *   The time it takes for a wave to travel to the ionosphere and back is measured. If this time is the same as it would be to travel a straight path to a height $h'$, then $h'$ is the virtual height.
    *   $h' = c \cdot \Delta t / 2$, where $\Delta t$ is the round trip time and $c$ is the speed of light.
    *   Since the wave path is bent, $h' \ge h$ (actual height).
    *   Virtual height is frequency dependent. As frequency approaches MUF, virtual height decreases.

---

### 5. Factors Affecting Ionospheric Propagation:

The behavior of the ionosphere and thus ionospheric propagation is highly dynamic and influenced by several factors:

*   **Solar Activity:**
    *   **Sunspot Cycle:** The 11-year sunspot cycle directly correlates with solar UV and X-ray radiation.
        *   **Solar Maximum:** Higher solar activity leads to increased ionization, higher electron densities, higher critical frequencies, higher MUFs, and more absorption (especially in the D-layer). This generally improves long-distance communication in the higher HF bands.
        *   **Solar Minimum:** Lower solar activity leads to decreased ionization, lower critical frequencies, and lower MUFs. This can limit communication to lower HF bands.
    *   **Solar Flares and Geomagnetic Storms:**
        *   **Solar Flares:** Cause sudden increases in UV and X-ray radiation, leading to sudden ionospheric disturbances (SIDs), often resulting in radio blackouts (increased D-layer absorption).
        *   **Geomagnetic Storms:** Disturb the Earth's magnetic field, significantly altering the ionosphere, often causing disruptions to radio communication.
*   **Time of Day:**
    *   **Daytime:** D, E, F1, and F2 layers are present. D-layer absorption is significant. F1 and F2 layers have higher electron densities. HF communication is generally good.
    *   **Nighttime:** D and E layers weaken or disappear. F1 layer merges with F2. F2 layer electron density decreases but remains the primary reflecting layer. Absorption is reduced. Communication often shifts to lower frequencies.
*   **Season:**
    *   Summer: Generally higher solar activity and higher electron densities in the ionosphere, leading to higher MUFs.
    *   Winter: Lower solar activity and lower electron densities, leading to lower MUFs.
*   **Geographic Location:**
    *   The Earth's magnetic field influences ionization patterns.
    *   Regions closer to the magnetic poles experience different effects, including auroral phenomena that can disrupt HF communication.
    *   The Zenith Angle of the sun (angle between the sun's rays and the zenith) varies with latitude, impacting ionization levels.

---

### 6. Modes of Ionospheric Propagation:

*   **Skywave Propagation:**
    *   The most common mode for long-distance communication (hundreds to thousands of kilometers).
    *   Radio waves are launched by the antenna at an appropriate angle of elevation.
    *   They are refracted/reflected by the ionospheric layers (primarily E and F2) back to Earth.
    *   **Multi-hop Propagation:** Waves can undergo multiple reflections between the ionosphere and the Earth's surface, enabling very long distances.
    *   *Reference:* Pozar, *Microwave Engineering*, Chapter 9.
*   **Groundwave Propagation:**
    *   Effective for MF and LF bands (below 3 MHz).
    *   The wave follows the curvature of the Earth.
    *   The surface wave is attenuated by the ground conductivity and the frequency. Good ground conductivity (e.g., seawater) is essential for effective groundwave propagation.
    *   Limited range, typically a few hundred kilometers.
*   **Fading:**
    *   Variations in signal strength caused by changes in the ionosphere.
    *   **Polarization Fading:** Due to the different paths taken by the ordinary and extraordinary rays in the presence of the Earth's magnetic field.
    *   **Absorption Fading:** Caused by variations in D-layer absorption.
    *   **Multipath Fading:** Occurs when signals arrive at the receiver via multiple paths (different ionospheric reflections or ground reflections) with slightly different phases, causing constructive or destructive interference.
*   **Ionospheric Ducting:**
    *   Less common than standard skywave.
    *   Occurs when there are specific conditions of ionization stratification, creating a "duct" that traps radio waves.
    *   Can lead to extremely long-range propagation at VHF/UHF frequencies under certain atmospheric conditions.
*   **Ionospheric Absorption:**
    *   Mainly occurs in the D-layer during daytime.
    *   Collisions between oscillating electrons and neutral molecules dissipate RF energy as heat.
    *   Increases with decreasing frequency and increasing electron density/collision frequency.
    *   Can render communication impossible if severe.

---

### 7. Applications and Limitations:

*   **Applications:**
    *   **Long-Distance HF Communication:** Amateur radio, military communication, international broadcasting, maritime and aeronautical communication.
    *   **Over-the-horizon Radar:** Using ionospheric reflection to extend radar range.
    *   **Navigation Systems (e.g., older GPS):** Ionospheric delays can affect accuracy.
*   **Limitations:**
    *   **Frequency Restrictions:** Limited to specific frequency bands (primarily MF and HF).
    *   **Fading and Variability:** Signal strength can vary significantly due to changing ionospheric conditions.
    *   **Dependence on Solar Activity:** Performance is heavily influenced by the sun's cycle.
    *   **Limited Bandwidth:** Often associated with narrower bandwidths compared to satellite or line-of-sight propagation.
    *   **Skip Zone:** A region where groundwave is too weak and skywave has not yet returned to Earth.
    *   **Absorption:** D-layer absorption can cause significant signal loss, especially during the day.

---

### 8. Practice Questions:

1.  **Define and explain the significance of the critical frequency and maximum usable frequency (MUF) in ionospheric propagation.**
    *   **Answer:** Critical frequency ($f_c$) is the highest frequency reflected by an ionospheric layer at vertical incidence. MUF is the highest frequency reflected at oblique incidence for a specific path and is calculated as $f_c \sec(\theta_i)$, where $\theta_i$ is the angle of incidence. Both are crucial for determining the usable frequency range for skywave communication.

2.  **Describe the structure of the ionosphere and the role of each major layer (D, E, F) in radio wave propagation.**
    *   **Answer:** The ionosphere is stratified into D (60-90 km, absorbs HF), E (90-140 km, reflects HF up to ~20 MHz), and F (140-1000 km, especially F2, reflects high HF and even VHF).

3.  **Explain why ionospheric propagation is primarily used for HF communication and is generally not effective for VHF or UHF frequencies.**
    *   **Answer:** For VHF/UHF frequencies, the plasma frequency ($f_p$) of the ionosphere is typically lower than the wave frequency. According to the refractive index formula ($n = \sqrt{1 - f_p^2/f^2}$), if $f > f_p$, then $n < 1$ and the wave passes through with little bending (penetration), rather than reflection. HF frequencies are often closer to or within the range of $f_p$ for significant ionospheric layers, allowing for reflection.

4.  **What is meant by the "skip distance" and how does it relate to frequency?**
    *   **Answer:** Skip distance is the minimum distance from the transmitter at which a skywave signal can be received for a given frequency. Higher frequencies have smaller skip distances because they require a smaller angle of incidence at the ionosphere for reflection, allowing them to return to Earth closer to the transmitter.

5.  **List at least three factors that affect the performance of ionospheric propagation and briefly explain their impact.**
    *   **Answer:**
        *   **Solar Activity (Sunspot Cycle):** Higher activity means higher electron densities, higher MUFs, and potentially more absorption.
        *   **Time of Day:** Daytime means D-layer absorption and higher E/F layer densities. Nighttime means less absorption but lower F-layer densities.
        *   **Frequency:** The relationship between wave frequency and ionospheric plasma frequency determines reflection or penetration.

---

### 9. Important Points to Remember:

*   The ionosphere is a dynamic, ionized region of Earth's upper atmosphere.
*   Ionospheric propagation relies on the **refraction** (often simplified as reflection) of radio waves by ionized layers.
*   The **plasma frequency ($f_p$)** and **critical frequency ($f_c$)** are key parameters determining reflection.
*   A wave will be reflected if its frequency is **less than** the plasma frequency of the ionospheric region it encounters.
*   The **MUF** is crucial for determining the highest usable frequency for a given communication path.
*   The **D-layer** is important for absorption, particularly during the daytime.
*   The **F2-layer** is the most important layer for long-distance HF communication.
*   **Solar activity** (sunspot cycle, flares) significantly impacts ionospheric conditions.
*   **Fading** is a common phenomenon in ionospheric propagation due to variations in the ionosphere.
*   Ionospheric propagation is primarily used for **HF communication**.

---

### 10. Alignment with Course Outcomes:

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3):** While this module focuses on propagation, understanding the launch angle of waves from an antenna is critical for successful ionospheric propagation. The antenna's radiation pattern and polarization affect how well waves enter and are reflected by the ionosphere.
*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4):** Not directly addressed, as this module is about propagation, not antenna design itself.
*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4):** Similar to CO2, this module is about the communication medium, not advanced antenna structures.
*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2):** This module directly addresses this outcome by explaining skywave propagation, its parameters ($f_c$, MUF, skip distance, virtual height), and influencing factors.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
