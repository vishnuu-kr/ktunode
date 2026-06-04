---
title: "Ionospheric propagation"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 4: Radio Wave Propagation"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7f8"
status: "completed"
scrapedAt: "2026-05-23T18:12:13.062Z"
---
# ANTENNA THEORY AND DESIGN: Module 4 - Radio Wave Propagation

## Topic: Ionospheric Propagation

**Course Outcomes Alignment:**

*   **CO4:** Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2). This topic directly addresses the understanding of how radio waves propagate through the ionosphere, a crucial mode of propagation.

---

### 1. Introduction to Ionospheric Propagation

Ionospheric propagation refers to the phenomenon where radio waves are reflected or refracted by the ionized layers of the Earth's upper atmosphere, known as the ionosphere. This mode of propagation is essential for long-distance communication, particularly in the High Frequency (HF) band (3-30 MHz).

**Key Concepts:**

*   **Ionosphere:** A region of Earth's upper atmosphere (from about 60 km to 1000 km) that is ionized by solar radiation (ultraviolet and X-rays).
*   **Ionization:** The process by which atoms or molecules lose or gain electrons, creating charged particles (ions and free electrons).
*   **Radio Wave Interaction:** Radio waves interact with the free electrons in the ionosphere. This interaction can lead to absorption, reflection, or refraction, depending on the frequency of the wave and the characteristics of the ionosphere.

**Textbook References:**

*   **Balanis, Chapter 10 (Wave Propagation):** Balanis provides a foundational understanding of wave propagation, including discussions on the ionosphere as a medium. He elaborates on how the electromagnetic wave interacts with the plasma.
*   **Collin, Chapter 7 (Propagation of Radio Waves):** Collin delves into the physics of radio wave propagation and discusses the role of the ionosphere in reflecting HF waves for beyond-line-of-sight communication.
*   **Kraus, Chapter 22 (Radio Wave Propagation):** Kraus offers insights into various propagation modes, with a dedicated section on ionospheric propagation and its importance for amateur radio and shortwave broadcasting.

---

### 2. Structure of the Ionosphere

The ionosphere is not a uniform layer but rather consists of several distinct regions or layers, each with different ionization densities and characteristics. These layers are primarily formed by the absorption of solar radiation.

**Key Concepts & Layers:**

*   **D Layer (approx. 60-90 km):**
    *   Lowest layer.
    *   Forms during daylight hours and disappears at night.
    *   Highly absorptive of MF and lower HF frequencies (below ~3 MHz).
    *   Contributes to the attenuation of signals.
*   **E Layer (approx. 90-140 km):**
    *   More stable than the D layer.
    *   Reflects frequencies up to about 20 MHz.
    *   Can exhibit sporadic E (Es) phenomena, which can cause unexpected F2 layer-like propagation at VHF frequencies.
*   **F Layer (approx. 140-1000 km):**
    *   Highest and most important layer for long-distance HF communication.
    *   During the day, it splits into two sub-layers:
        *   **F1 Layer (approx. 140-210 km):** Reflects frequencies up to about 25 MHz.
        *   **F2 Layer (approx. 210-1000 km):** Most ionized layer, reflects frequencies up to 30 MHz and sometimes higher. It is the primary layer for very long-distance HF propagation.
    *   At night, the F1 and F2 layers often combine to form a single, weaker F layer.

**Factors Affecting Ionization:**

*   **Solar Activity:** The degree of solar radiation (sunspot number, solar flares) significantly impacts ionization levels.
*   **Time of Day:** Ionization is generally higher during the day and lower at night due to the absence of direct solar radiation.
*   **Season:** Seasonal variations in solar angle affect ionization.
*   **Geographic Location:** Latitude and magnetic field lines influence ionization.

**Textbook References:**

*   **Balanis, Chapter 10:** Discusses the ionosphere as a plasma medium and the variations in its properties.
*   **Collin, Chapter 7:** Explains the stratification of the ionosphere and the physical processes leading to ionization.
*   **Raju, Chapter 12 (Ionospheric Propagation):** Provides a detailed explanation of the different ionospheric layers and their characteristics.

---

### 3. Mechanism of Ionospheric Propagation

Radio waves interact with the free electrons in the ionosphere. The key mechanism is the **refraction** of radio waves. When a radio wave enters the ionosphere, its velocity changes due to the interaction with the ionized plasma. This change in velocity causes the wave to bend.

**Key Concepts:**

*   **Plasma Frequency ($\omega_p$ or $f_p$):** The natural resonant frequency of oscillation of electrons in a plasma. It is given by:
    $$ \omega_p = \sqrt{\frac{Ne^2}{\epsilon_0m_e}} $$
    or in Hertz:
    $$ f_p = \sqrt{\frac{Ne^2}{4\pi^2\epsilon_0m_e}} \approx 9\sqrt{N} \text{ kHz} $$
    where:
    *   $N$ is the electron density (electrons/m³).
    *   $e$ is the charge of an electron (1.602 x 10⁻¹⁹ C).
    *   $\epsilon_0$ is the permittivity of free space (8.854 x 10⁻¹² F/m).
    *   $m_e$ is the mass of an electron (9.109 x 10⁻³¹ kg).

*   **Critical Frequency ($f_c$ or $\omega_c$):** The highest frequency that will be reflected back to Earth by a particular ionospheric layer when the wave is incident vertically. At the critical frequency, the wave's frequency is equal to the plasma frequency of the layer.
    $$ f_c = f_p = \sqrt{\frac{Ne^2}{4\pi^2\epsilon_0m_e}} $$
    Waves with frequencies *above* the critical frequency will pass through the ionosphere without being reflected.

*   **Index of Refraction ($n$):** For an electromagnetic wave propagating in an ionized medium, the refractive index is given by:
    $$ n = \sqrt{1 - \frac{f_p^2}{f^2}} $$
    where $f$ is the operating frequency of the radio wave.
    *   If $f < f_p$, $n$ is imaginary, meaning the wave is attenuated (absorbed) rather than propagated.
    *   If $f = f_p$, $n = 0$, leading to reflection.
    *   If $f > f_p$, $n$ is real and less than 1, causing refraction (bending).

*   **Angle of Incidence and Refraction (Snell's Law):** As a wave enters a region with a changing refractive index, it bends according to Snell's Law. For a wave incident at an angle $\theta_i$ with respect to the vertical, into a medium with refractive index $n$, the angle of refraction $\theta_r$ is given by:
    $$ n \sin(\theta_r) = \sin(\theta_i) $$
    Since the ionosphere's refractive index ($n$) is less than 1 for frequencies above the plasma frequency, this equation can be rewritten to describe the bending:
    $$ \sin(\theta_r) = n \sin(\theta_i) $$
    However, it is often more useful to consider the angle with respect to the vertical. Let $\theta_v$ be the angle of incidence with respect to the vertical. The wave enters the ionosphere with a refractive index of approximately 1 and then enters the ionospheric plasma.
    $$ 1 \cdot \sin(\theta_v) = n \cdot \sin(\theta_{iono}) $$
    where $\theta_{iono}$ is the angle within the ionosphere relative to the vertical. As $n$ decreases with increasing frequency (or as $f_p/f$ decreases), the angle $\theta_{iono}$ increases, bending the wave away from the vertical.

*   **Maximum Usable Frequency (MUF):** The highest frequency that can be used for communication between two specific points on Earth via ionospheric reflection. The MUF is dependent on the critical frequency of the reflecting layer and the angle of incidence.
    $$ MUF = f_c \cdot \sec(\theta_i) $$
    where $\theta_i$ is the angle of incidence with respect to the vertical at the ionospheric reflection point.

*   **Lowest Usable Frequency (LUF):** The lowest frequency that can be used for reliable communication. Below the LUF, absorption in the D layer becomes too significant, leading to signal loss.

*   **Frequency Range for Ionospheric Propagation:** Typically from 3 MHz to 30 MHz (HF band). Lower frequencies are absorbed, and higher frequencies pass through the ionosphere.

**Example:**
If a radio wave with a frequency of 10 MHz enters an ionospheric layer with a plasma frequency of 8 MHz, the refractive index is:
$$ n = \sqrt{1 - \frac{8^2}{10^2}} = \sqrt{1 - 0.64} = \sqrt{0.36} = 0.6 $$
Since $n < 1$, the wave is refracted. If the wave is incident vertically ($\theta_i = 0^\circ$), it will bend away from the vertical. If the wave were incident at an angle, it would bend further.

**Textbook References:**

*   **Balanis, Chapter 10:** Provides the detailed mathematical formulation for the refractive index of a plasma and discusses the concept of critical frequency.
*   **Collin, Chapter 7:** Explains the interaction of EM waves with the ionosphere using the concept of plasma frequency and refractive index.
*   **Raju, Chapter 12:** Offers a thorough explanation of plasma frequency, critical frequency, and the factors influencing them.

---

### 4. Modes of Ionospheric Propagation

Ionospheric propagation involves different ways radio waves can travel long distances by interacting with the ionosphere.

**Key Concepts & Modes:**

*   **Sky Wave Propagation:** The primary mode. Radio waves are transmitted upwards, refracted by the ionosphere, and then reflected back towards the Earth at a distant location. This allows for communication beyond the line of sight.
    *   **Single Hop:** Wave reflects once from the ionosphere.
    *   **Multiple Hops:** Wave reflects multiple times between the Earth and the ionosphere, enabling very long-distance communication (e.g., intercontinental).
*   **Ground Wave Propagation:** For lower frequencies (MF and lower), waves can follow the curvature of the Earth along the ground. This is less effective at HF.
*   **Backscatter:** When a sky wave is reflected off a distant ionospheric region and then backscattered off the Earth's surface towards the originating area. This can be used to detect distant targets or for long-range communication over very large distances.
*   **Sporadic E (Es) Propagation:** An abnormal ionization in the E layer that can cause unexpected propagation at VHF frequencies (30-300 MHz), especially during summer. This can enable short-to-medium distance communication on frequencies usually limited by line-of-sight.

**Important Considerations:**

*   **Skip Distance:** The minimum distance from the transmitter at which a signal transmitted at a particular frequency will be returned to Earth by the ionosphere.
*   **Maximum Range:** The maximum distance that can be covered by a single hop of sky wave propagation. This depends on the height of the ionosphere and the angle of transmission.
*   **Fading:** Variations in signal strength due to changes in the ionosphere's properties, multipath propagation, and other atmospheric effects.

**Textbook References:**

*   **Balanis, Chapter 10:** Discusses sky-wave propagation and its dependence on frequency and ionospheric conditions.
*   **Collin, Chapter 7:** Details the various modes of sky-wave propagation, including multi-hop.
*   **Kraus, Chapter 22:** Provides practical aspects of sky-wave propagation for amateur radio operators, including skip distance and maximum range.
*   **Raju, Chapter 12:** Explains multi-hop propagation and the concept of skip distance.

---

### 5. Factors Affecting Ionospheric Propagation Performance

The effectiveness of ionospheric propagation is influenced by several dynamic factors.

**Key Factors:**

*   **Frequency:**
    *   **Lower frequencies (< 3 MHz):** High absorption in the D layer, limited usable range.
    *   **3-30 MHz (HF):** Most suitable band for ionospheric propagation due to reflection and lower absorption.
    *   **> 30 MHz:** Frequencies tend to pass through the ionosphere, unless exceptional conditions (e.g., sporadic E) exist.
*   **Electron Density (N):** Higher electron density leads to a higher plasma frequency and critical frequency, allowing higher frequencies to be reflected.
*   **Solar Activity:**
    *   **Sunspot Cycle:** Generally, higher solar activity (more sunspots) leads to increased ionization, higher critical frequencies, and MUFs, enabling longer-distance communication.
    *   **Solar Flares:** Can cause sudden ionospheric disturbances (SIDs), leading to increased absorption (radio blackouts) or temporary enhancements in ionization.
*   **Time of Day:**
    *   **Daytime:** D layer is present and absorptive. F1 and F2 layers are well-formed.
    *   **Nighttime:** D layer disappears, reducing absorption. E and F layers weaken or combine, potentially reducing reflection heights and MUFs.
*   **Season and Latitude:** Affect the angle of solar incidence, influencing ionization levels.
*   **Antenna Type and Directivity:** The efficiency and radiation pattern of the transmitting and receiving antennas are crucial for coupling energy into and out of the ionosphere.

**Textbook References:**

*   **Balanis, Chapter 10:** Emphasizes the dependence of propagation on frequency and the ionospheric medium.
*   **Collin, Chapter 7:** Discusses the impact of solar activity, time of day, and season on ionospheric propagation.
*   **Raju, Chapter 12:** Provides a comprehensive overview of factors affecting ionospheric communication, including solar influences and diurnal variations.

---

### 6. Practical Applications and Design Considerations

Understanding ionospheric propagation is vital for designing communication systems.

**Key Applications:**

*   **Shortwave Broadcasting:** Long-distance radio broadcasts.
*   **Amateur Radio (Ham Radio):** Enables global communication for hobbyists.
*   **Over-the-horizon Radar:** Detecting targets beyond the visual horizon.
*   **Voice of America (VOA), BBC World Service:** International broadcasting.
*   **Military Communications:** Long-range, reliable communication.

**Design Considerations for Antennas:**

*   **Frequency Selection:** Choose antennas that operate efficiently within the HF band (3-30 MHz).
*   **Radiation Pattern:** Antennas with low radiation angles (downward, towards the horizon) are generally preferred for maximizing the range of single-hop sky wave propagation.
*   **Gain:** Higher gain antennas can improve the signal-to-noise ratio.
*   **Polarization:** Vertical polarization is often used for ground wave, but horizontal polarization can be more effective for sky wave as it tends to experience less absorption and bending.
*   **Efficiency:** Antennas should be efficient to minimize losses.
*   **Matching:** Proper impedance matching is crucial for efficient power transfer.

**Examples of Antennas used for Ionospheric Propagation:**

*   **Dipole Antennas:** Simple and effective, often used at lower HF frequencies.
*   **Long Wire Antennas:** Multi-band operation possible.
*   **Yagi-Uda Antennas:** Directional, can be stacked or phased to achieve lower radiation angles and higher gain.
*   **Vertical Antennas:** Ground-mounted or elevated, often used with extensive ground radial systems for efficient sky wave radiation.
*   **Loop Antennas:** Can be effective, especially for receiving.

**Textbook References:**

*   **Balanis, Chapters on Antenna Types and Arrays:** Balanis's comprehensive coverage of antenna types provides the necessary background for selecting appropriate antennas for HF communication.
*   **Kraus, Chapters on Antenna Types:** Kraus offers practical advice on antenna selection and construction for amateur radio applications, which heavily rely on ionospheric propagation.
*   **Milligan, Chapter 6 (Antennas for HF Communications):** Milligan specifically addresses antennas suitable for the HF band and discusses their performance in various propagation environments.

---

### 7. Practice Questions and Exercises

**Question 1:**
Define the following terms:
a) Ionosphere
b) Plasma Frequency
c) Critical Frequency
d) MUF

**Answer 1:**
a) **Ionosphere:** A region of Earth's upper atmosphere (60-1000 km) that is ionized by solar radiation, affecting radio wave propagation.
b) **Plasma Frequency ($f_p$):** The natural resonant frequency of oscillation of electrons in a plasma, given by $f_p \approx 9\sqrt{N}$ kHz.
c) **Critical Frequency ($f_c$):** The highest frequency that will be reflected back to Earth by an ionospheric layer when the wave is incident vertically. It is equal to the plasma frequency.
d) **MUF (Maximum Usable Frequency):** The highest frequency that can be used for communication between two points via ionospheric reflection under given conditions.

---

**Question 2:**
A radio wave with a frequency of 15 MHz is incident vertically on an ionospheric layer with a plasma frequency of 12 MHz.
a) Calculate the refractive index of the ionospheric layer for this wave.
b) Will the wave be reflected or pass through the ionosphere?

**Answer 2:**
a) The refractive index $n$ is calculated as:
   $$ n = \sqrt{1 - \frac{f_p^2}{f^2}} = \sqrt{1 - \frac{12^2}{15^2}} = \sqrt{1 - \frac{144}{225}} = \sqrt{1 - 0.64} = \sqrt{0.36} = 0.6 $$
b) Since the operating frequency (15 MHz) is greater than the plasma frequency (12 MHz), the refractive index is real and less than 1 ($n=0.6$). This means the wave will be refracted (bent) and will pass through the ionosphere if the angle of incidence is small enough. If the angle of incidence were larger, or the frequency closer to the plasma frequency, it would be reflected.

---

**Question 3:**
Explain why the HF band (3-30 MHz) is most suitable for ionospheric propagation, and what happens to frequencies below and above this band.

**Answer 3:**
The HF band is most suitable because:
*   **Frequencies in the HF band (3-30 MHz):** Their frequencies are generally higher than the plasma frequencies of the E and F layers under normal conditions, allowing for refraction and reflection back to Earth. However, they are low enough to be significantly refracted rather than passing straight through.
*   **Frequencies below 3 MHz:** These frequencies are often lower than the plasma frequencies of the ionosphere, especially the D layer which is present during the day. This leads to significant absorption, causing signal loss and limiting their useful range.
*   **Frequencies above 30 MHz:** These frequencies are generally higher than the plasma frequencies of most ionospheric layers. As a result, they pass through the ionosphere and are not reflected back to Earth, limiting propagation to line-of-sight or requiring different propagation mechanisms (like tropospheric or satellite propagation). Sporadic E can be an exception, allowing some VHF propagation.

---

**Question 4:**
Describe the role of the D, E, and F layers in ionospheric propagation. Which layer is most important for long-distance HF communication?

**Answer 4:**
*   **D Layer (60-90 km):** Present during the day, it is highly absorptive for radio waves, particularly in the lower HF and MF bands. It attenuates signals and is responsible for reducing the usable range of frequencies below the optimum HF range. It disappears at night.
*   **E Layer (90-140 km):** Reflects frequencies up to about 20 MHz. It contributes to medium-distance communication. Sporadic E (Es) can occur, allowing for unexpected VHF propagation.
*   **F Layer (140-1000 km):** Comprises the F1 and F2 sub-layers during the day. The **F2 layer** is the most ionized and therefore reflects the highest frequencies (up to 30 MHz or more). It is the **most important layer for long-distance HF communication** because its height and ionization density allow for efficient reflection of signals over vast distances, enabling multi-hop propagation. At night, the F1 and F2 layers often combine into a single, weaker F layer.

---

### 8. Important Points to Remember

*   Ionospheric propagation is crucial for HF (3-30 MHz) communication beyond line-of-sight.
*   The ionosphere is a plasma characterized by its electron density ($N$) and plasma frequency ($f_p$).
*   The critical frequency ($f_c$) is the maximum frequency reflected by a layer for vertical incidence.
*   The refractive index ($n = \sqrt{1 - f_p^2/f^2}$) determines how a radio wave interacts with the ionosphere. Reflection occurs when $f \le f_p$, and refraction when $f > f_p$.
*   Sky wave propagation involves reflection from the ionosphere, enabling multi-hop communication.
*   Factors like solar activity, time of day, season, and frequency significantly impact the effectiveness of ionospheric propagation.
*   Antenna design for ionospheric propagation often favors low radiation angles and efficient operation in the HF band.

---

This comprehensive study note covers the fundamental aspects of ionospheric propagation, aligning with the learning outcomes and course objectives for Antenna Theory and Design. The inclusion of textbook references and practice questions aims to facilitate a deeper understanding of the subject.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
