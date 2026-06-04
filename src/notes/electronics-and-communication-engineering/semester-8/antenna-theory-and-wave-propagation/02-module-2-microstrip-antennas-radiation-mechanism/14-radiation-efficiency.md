---
title: "Radiation Efficiency"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 2: Microstrip antennas : Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff778"
status: "completed"
scrapedAt: "2026-05-23T18:12:36.400Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 2: Microstrip Antennas: Radiation Mechanism

### Topic: Radiation Efficiency

---

**Course Outcomes Addressed:**
*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)** - Understanding radiation efficiency is crucial for analyzing the overall performance and energy transfer capabilities of microstrip antennas.
*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)** - Radiation efficiency is a key parameter that needs to be considered during the design phase and is often measured experimentally.
*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4)** - Concepts learned about radiation efficiency in microstrip antennas are foundational for understanding and designing more complex antenna structures.

---

### 1. Introduction to Radiation Efficiency

**Definition:**
Radiation efficiency ($\eta_r$) is defined as the ratio of the power radiated by an antenna to the net power accepted by the antenna at its input terminals. It quantifies how effectively an antenna converts the input electrical power into radiated electromagnetic power, as opposed to losses.

**Importance in Microstrip Antennas:**
Microstrip antennas, due to their planar nature and fabrication methods, are prone to various loss mechanisms. Understanding and maximizing radiation efficiency is crucial for achieving high-performance and practical microstrip antenna designs.

---

### 2. Components of Antenna Efficiency

Antenna efficiency is generally considered as a product of two main components:

*   **Radiation Efficiency ($\eta_r$):** This is the primary focus of this topic and is influenced by various loss mechanisms within the antenna structure.
*   **Efficiency due to Mismatch ($\eta_m$):** This accounts for the power that is reflected back towards the source due to impedance mismatch at the antenna's feed point.

The **total antenna efficiency** ($\eta_t$) is given by:
$\eta_t = \eta_r \times \eta_m$

This topic will focus on $\eta_r$.

---

### 3. Loss Mechanisms Affecting Radiation Efficiency in Microstrip Antennas

In microstrip antennas, radiation efficiency is primarily degraded by three types of losses:

*   **Conductor Losses ($R_c$):** These losses are due to the finite conductivity of the metallic conductors (patch, ground plane, and feed lines) used in the microstrip antenna structure.
    *   **Mechanism:** As RF current flows through the conductors, it encounters resistance, leading to ohmic heating and power dissipation.
    *   **Factors Influencing Conductor Losses:**
        *   **Conductivity of the metal:** Higher conductivity (e.g., copper, silver) leads to lower losses.
        *   **Thickness of the metal:** Thicker conductors generally result in lower losses.
        *   **Surface roughness:** At higher frequencies, the current tends to flow on the surface of the conductor (skin effect). Surface roughness increases the effective surface area, leading to higher resistance and losses. (Balanis, 4th Ed., Chapter 2).
        *   **Frequency:** Skin depth decreases with increasing frequency, concentrating current on the surface and potentially increasing losses due to surface roughness.
    *   **Modeling:** Conductor losses are often modeled as a series resistance ($R_c$) in the equivalent circuit of the antenna.

*   **Dielectric Losses ($R_d$):** These losses occur in the dielectric substrate material separating the radiating patch from the ground plane.
    *   **Mechanism:** The alternating electric field within the dielectric material causes polarization of the dielectric molecules. This polarization process is not perfectly efficient, and some energy is dissipated as heat. This is characterized by the dielectric loss tangent ($\tan \delta$).
    *   **Factors Influencing Dielectric Losses:**
        *   **Loss tangent ($\tan \delta$) of the substrate:** Lower loss tangent materials (e.g., RT/duroid 5880, Rogers 4003) are preferred for high-efficiency antennas.
        *   **Dielectric constant ($\epsilon_r$):** While not directly a loss mechanism, a higher $\epsilon_r$ can lead to a higher electric field intensity within the substrate, potentially exacerbating dielectric losses.
        *   **Thickness of the substrate:** Thicker substrates generally lead to higher dielectric losses as more energy is stored and dissipated within the dielectric.
        *   **Electric field distribution:** The extent to which the electric field penetrates the dielectric material influences dielectric losses.
    *   **Modeling:** Dielectric losses are typically modeled as a parallel resistance ($R_d$) associated with the radiating elements, representing energy dissipated in the dielectric.

*   **Surface Wave Losses ($R_s$):** In microstrip antennas, especially those fabricated on substrates with higher dielectric constants and thickness, electromagnetic energy can be converted into surface waves that propagate along the dielectric-conductor interface. These surface waves do not radiate effectively into space and represent a loss of power.
    *   **Mechanism:** When the substrate thickness ($h$) and dielectric constant ($\epsilon_r$) are large enough, the structure can support surface wave modes. Energy coupled into these modes is guided along the substrate and is not radiated efficiently.
    *   **Factors Influencing Surface Wave Losses:**
        *   **Dielectric constant ($\epsilon_r$):** Higher $\epsilon_r$ substrates are more prone to surface wave excitation.
        *   **Substrate thickness ($h$):** Thicker substrates increase the likelihood of surface wave propagation.
        *   **Antenna size and shape:** The geometry of the radiating element can influence the coupling to surface waves.
        *   **Frequency:** Surface wave excitation is generally more pronounced at higher frequencies.
    *   **Mitigation:**
        *   Using substrates with lower dielectric constants.
        *   Using thinner substrates.
        *   Employing techniques like "shorting pins" or "absorbent layers" around the antenna periphery to suppress surface waves. (Garg, Chapter 3).
        *   Designing the antenna geometry to minimize coupling to surface wave modes.

---

### 4. Calculating Radiation Efficiency

The radiation efficiency ($\eta_r$) can be expressed in terms of the various resistive losses and the radiation resistance ($R_{rad}$).

**Definition based on Resistances:**
$\eta_r = \frac{R_{rad}}{R_{rad} + R_{loss}}$

where:
*   $R_{rad}$ is the radiation resistance of the antenna, representing the equivalent resistance that radiates power into free space.
*   $R_{loss}$ is the total equivalent resistance representing all the loss mechanisms (conductor and dielectric losses). $R_{loss} = R_c + R_d$.

**Incorporating Surface Wave Losses:**
Surface wave losses are often implicitly included or accounted for in the measured or simulated radiation resistance. However, a more detailed analysis might explicitly consider the power lost to surface waves. If we consider power lost to surface waves as $P_{sw}$, then:

$\eta_r = \frac{P_{rad}}{P_{in}} = \frac{P_{rad}}{P_{rad} + P_{cond} + P_{dielectric} + P_{sw}}$

where:
*   $P_{rad}$ is the radiated power.
*   $P_{cond}$ is the power dissipated due to conductor losses.
*   $P_{dielectric}$ is the power dissipated due to dielectric losses.
*   $P_{sw}$ is the power lost to surface waves.

In terms of resistances, if $R_{rad}$ is the resistance associated with radiation and $R_{loss}$ is the sum of resistances associated with conductor and dielectric losses, and $R_{sw}$ is the equivalent resistance for surface wave losses, then:

$\eta_r = \frac{R_{rad}}{R_{rad} + R_c + R_d + R_{sw}}$

**Approximation for Microstrip Antennas:**
For many microstrip antenna designs, the dominant losses are conductor and dielectric losses. Surface wave losses are more significant for substrates with high $\epsilon_r$ and large $h$.

$\eta_r \approx \frac{R_{rad}}{R_{rad} + R_c + R_d}$

**Relationship with Quality Factor (Q):**
Radiation efficiency can also be related to the antenna's $Q$ factor.
$\eta_r = \frac{Q_0}{Q_0 + Q_c + Q_d + Q_{sw}}$
where $Q_0$ is the radiation $Q$ factor (related to $R_{rad}$), and $Q_c, Q_d, Q_{sw}$ are the $Q$ factors associated with conductor, dielectric, and surface wave losses, respectively.

---

### 5. Factors Affecting Radiation Efficiency in Microstrip Antennas

*   **Substrate Properties:**
    *   **Dielectric constant ($\epsilon_r$):** Lower $\epsilon_r$ generally leads to higher radiation efficiency by reducing dielectric losses and surface wave excitation.
    *   **Loss tangent ($\tan \delta$):** Lower $\tan \delta$ is crucial for reducing dielectric losses. Materials like RT/duroid 5880 ($\epsilon_r \approx 2.2$, $\tan \delta \approx 0.0002$) are preferred over FR4 ($\epsilon_r \approx 4.4$, $\tan \delta \approx 0.018$) for high-efficiency applications. (Pozar, 4th Ed., Chapter 6).
    *   **Substrate thickness ($h$):** Thicker substrates can increase radiation efficiency by increasing the radiation resistance and reducing the effect of conductor losses (as current has more "room" to flow). However, thicker substrates also increase the potential for surface waves. An optimal thickness is often sought. (Balanis, 4th Ed., Chapter 11).

*   **Antenna Geometry:**
    *   **Patch dimensions (length $L$, width $W$):** Affects radiation resistance and current distribution, influencing conductor losses.
    *   **Feed line impedance and type (e.g., microstrip line, probe feed):** Introduces insertion loss and potential for mismatch.
    *   **Ground plane dimensions:** Affects radiation pattern and edge effects.
    *   **Antenna size relative to wavelength:** Smaller antennas tend to have lower radiation resistance, making them more susceptible to losses.

*   **Operating Frequency:**
    *   **Skin effect:** Becomes more pronounced at higher frequencies, increasing conductor losses.
    *   **Surface wave excitation:** More likely at higher frequencies for a given substrate thickness.

*   **Fabrication Tolerances:**
    *   Variations in dielectric thickness, permittivity, and conductor line widths can affect performance and efficiency.
    *   Surface roughness during etching can significantly increase conductor losses.

---

### 6. Design Considerations for High Radiation Efficiency

*   **Substrate Selection:** Choose low-loss dielectric materials with low dielectric constants and low loss tangents.
*   **Substrate Thickness:** Optimize substrate thickness. While thinner substrates reduce surface waves, thicker substrates can increase radiation resistance, potentially improving efficiency. A trade-off needs to be considered.
*   **Conductor Material:** Use highly conductive metals like copper.
*   **Conductor Thickness:** Ensure adequate conductor thickness to minimize skin effect at the operating frequency.
*   **Patch Dimensions:** Design the patch to achieve a desirable radiation resistance, typically in the range of 50-100 $\Omega$ for optimal power transfer with a 50 $\Omega$ transmission line.
*   **Feed Mechanism:** Choose a feed method that minimizes insertion loss and provides a good impedance match. Probes and aperture coupling can be efficient if designed properly.
*   **Surface Wave Suppression:** For substrates prone to surface waves, consider using parasitic elements, shorting pins, or absorbent materials around the antenna to suppress surface wave propagation. (Singh et al., Chapter 4 on Surface Wave Antennas).
*   **Edge Effects:** Minimize losses associated with current flow on the edges of the patch and ground plane, which can be influenced by the antenna geometry and substrate.

---

### 7. Measurement of Radiation Efficiency

Radiation efficiency can be measured using several techniques, often by comparing the antenna's performance to a known reference or by characterizing its loss components.

*   **Method 1: Comparison with a Reference Antenna (e.g., Dipole):**
    *   Measure the gain of the microstrip antenna and a reference antenna (with known efficiency and gain) under identical conditions.
    *   If the radiation patterns are similar, the ratio of gains can give an indication of the efficiency difference. This is an indirect method.

*   **Method 2: Calorimetric Method:**
    *   This method directly measures the heat generated by the antenna due to losses.
    *   The antenna is placed in a thermally controlled environment, and the temperature rise is measured when it is driven by a signal. The power dissipated as heat is related to the antenna's losses. This is generally a complex and time-consuming method.

*   **Method 3: Using Antenna Network Analyzer (ANA) with a Vector Network Analyzer (VNA) and an Anechoic Chamber:**
    *   Measure the antenna's input impedance ($Z_{in} = R_{in} + jX_{in}$).
    *   Measure the antenna's radiation resistance ($R_{rad}$) and total resistance ($R_{total}$) using techniques involving changes in substrate material or by measuring scattering parameters.
    *   Calculate $\eta_r = R_{rad} / R_{total}$. (Choudhury, Chapter 3 on Measurement Techniques).
    *   Alternatively, measure the antenna's gain in an anechoic chamber. If the antenna's input impedance is matched ($S_{11} \approx 0$), the measured gain is approximately the product of directivity and radiation efficiency.
    *   Gain ($G$) = Directivity ($D$) $\times$ Radiation Efficiency ($\eta_r$).
    *   If directivity can be calculated or estimated, and gain is measured, $\eta_r$ can be found.

*   **Method 4: Y-Factor Method:**
    *   This method is used to determine the noise temperature of the antenna and, indirectly, its losses.

---

### 8. Examples

**Example 1: Comparing Substrates**
Consider two identical rectangular microstrip patch antennas designed to resonate at 10 GHz, differing only in their substrate material.

*   **Antenna A:** Substrate with $\epsilon_r = 2.2$, $\tan \delta = 0.0002$ (e.g., RT/duroid 5880).
*   **Antenna B:** Substrate with $\epsilon_r = 4.4$, $\tan \delta = 0.018$ (e.g., FR4).

Antenna A, with its lower dielectric constant and significantly lower loss tangent, will exhibit much lower dielectric losses. It will also be less susceptible to surface wave excitation. Consequently, Antenna A will have a significantly higher radiation efficiency compared to Antenna B.

**Example 2: Effect of Thickness**
Consider a microstrip patch antenna on a substrate with $\epsilon_r = 4$.
*   **Case 1:** $h = 0.5$ mm.
*   **Case 2:** $h = 1.6$ mm.

Increasing the substrate thickness from 0.5 mm to 1.6 mm can lead to an increase in radiation efficiency for several reasons:
*   **Increased radiation resistance:** The radiation resistance of a patch antenna generally increases with substrate thickness. This makes the antenna less sensitive to resistive losses.
*   **Reduced conductor loss effect:** The contribution of conductor resistance to the total impedance becomes relatively smaller when the radiation resistance increases.

However, the thicker substrate (Case 2) might also increase surface wave excitation, which could potentially offset the gains in efficiency due to reduced dielectric and conductor loss effects if not properly managed.

---

### 9. Key Points to Remember

*   **Radiation efficiency is the ratio of radiated power to accepted power, excluding mismatch losses.**
*   **Primary loss mechanisms in microstrip antennas are conductor losses, dielectric losses, and surface wave losses.**
*   **Conductor losses are due to the finite conductivity of metals and increase with surface roughness and frequency (skin effect).**
*   **Dielectric losses are due to the dielectric material's loss tangent and the electric field intensity within it.**
*   **Surface wave losses occur when energy is guided along the dielectric-conductor interface and does not radiate effectively.**
*   **Low-loss dielectric materials (low $\epsilon_r$, low $\tan \delta$) are essential for high radiation efficiency.**
*   **Substrate thickness plays a dual role: it can increase radiation resistance (beneficial) but also promote surface waves (detrimental).**
*   **Antenna geometry and operating frequency significantly influence efficiency.**
*   **Minimizing losses is crucial for achieving high radiation efficiency, especially for miniaturized or portable antenna applications.**

---

### 10. Practice Questions and Exercises

**Question 1:**
Define radiation efficiency and list the primary loss mechanisms in microstrip antennas.

**Answer:**
Radiation efficiency ($\eta_r$) is the ratio of the power radiated by an antenna to the net power accepted by the antenna at its input terminals. The primary loss mechanisms in microstrip antennas are conductor losses, dielectric losses, and surface wave losses.

**Question 2:**
How does the loss tangent of the substrate affect the radiation efficiency of a microstrip antenna?

**Answer:**
A higher loss tangent ($\tan \delta$) of the substrate leads to increased dielectric losses. This means more of the input power is dissipated as heat within the dielectric material, reducing the amount of power available for radiation, and thus lowering the radiation efficiency.

**Question 3:**
Explain why thicker substrates can sometimes improve the radiation efficiency of a microstrip antenna, despite potentially increasing surface wave losses.

**Answer:**
Thicker substrates tend to increase the radiation resistance of the patch antenna. A higher radiation resistance makes the antenna less susceptible to resistive losses (conductor and dielectric losses). As the radiation resistance becomes larger relative to the loss resistances, the radiation efficiency increases ($\eta_r = R_{rad} / (R_{rad} + R_{loss})$). However, this benefit needs to be balanced against the increased risk of surface wave excitation.

**Question 4 (Problem-Solving):**
A microstrip patch antenna has a radiation resistance $R_{rad} = 40 \Omega$. The antenna exhibits conductor losses equivalent to $R_c = 10 \Omega$ and dielectric losses equivalent to $R_d = 5 \Omega$. Calculate the radiation efficiency.

**Answer:**
The total loss resistance is $R_{loss} = R_c + R_d = 10 \Omega + 5 \Omega = 15 \Omega$.
The radiation efficiency is calculated as:
$\eta_r = \frac{R_{rad}}{R_{rad} + R_{loss}} = \frac{40 \Omega}{40 \Omega + 15 \Omega} = \frac{40}{55} \approx 0.727$
So, the radiation efficiency is approximately 72.7%.

**Question 5:**
List two techniques to mitigate surface wave losses in microstrip antennas.

**Answer:**
1.  **Use substrates with lower dielectric constants ($\epsilon_r$) and thinner substrates ($h$).**
2.  **Employ techniques like shorting pins or dielectric strips around the radiating patch to break up surface wave propagation.**

---

This concludes the study notes for Radiation Efficiency in Microstrip Antennas. Remember to consult the provided textbooks for more in-depth analysis and mathematical derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
