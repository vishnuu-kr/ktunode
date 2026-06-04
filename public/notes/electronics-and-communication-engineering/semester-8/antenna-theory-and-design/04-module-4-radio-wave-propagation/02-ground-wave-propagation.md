---
title: "Ground wave propagation"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 4: Radio Wave Propagation"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7f1"
status: "completed"
scrapedAt: "2026-05-23T18:12:07.444Z"
---
# ANTENNA THEORY AND DESIGN: Module 4: Radio Wave Propagation - Ground Wave Propagation

## 1. Introduction to Ground Wave Propagation

Ground wave propagation is a mode of radio wave propagation that involves the propagation of electromagnetic waves along the surface of the Earth. This mode is particularly effective for **low to medium frequencies (LF and MF)** and is crucial for **terrestrial communications over the horizon**.

**Key Concepts:**

*   **Surface Wave:** The portion of the radio wave that travels along the Earth's surface, being guided by the ground.
*   **Earth's Conductivity:** A critical factor in ground wave propagation. Higher conductivity leads to less attenuation of the wave.
*   **Earth's Curvature:** The spherical nature of the Earth limits the range of ground wave propagation, as the wave follows the curvature.
*   **Frequency Dependence:** The effectiveness of ground wave propagation is highly dependent on the frequency of the radio wave. Higher frequencies are more attenuated.
*   **Polarization:** The polarization of the transmitting antenna significantly impacts ground wave propagation.

**Relationship to Course Outcomes:**

*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)** - This section directly addresses the understanding of ground wave propagation as a mode of radio wave propagation.

**References:**

*   **Balanis (4th Ed., 2016):** Likely discusses ground wave propagation in the context of wave propagation over surfaces.
*   **Collin (2nd Ed., 2001):** Expected to provide a detailed theoretical treatment of wave propagation along curved surfaces and over imperfectly conducting Earth.
*   **Kraus (3rd Ed., 2002):** May offer practical insights into the applications and limitations of ground wave propagation for different frequency bands.

---

## 2. Mechanisms of Ground Wave Propagation

Ground wave propagation occurs through a combination of two main mechanisms:

### 2.1 Surface Wave Component

*   The surface wave is a horizontally polarized wave that propagates along the Earth's surface.
*   It is associated with the **surface current induced in the Earth by the vertically polarized electric field of the transmitted wave**.
*   This current then reradiates energy in the direction of propagation, effectively "gluing" the wave to the surface.
*   **Key characteristic:** The strength of the surface wave is strongly dependent on the **electrical properties of the Earth (conductivity and permittivity)** and the **frequency of the radio wave**.

### 2.2 Space Wave Component (Tropospheric Propagation)

*   While not strictly "ground wave," the ground wave also includes a component that travels in the Earth's atmosphere and reflects off the Earth's surface. This is often referred to as the **space wave component** or **line-of-sight (LOS) propagation** over shorter distances.
*   This component is less affected by the Earth's conductivity but is limited by the **Earth's curvature**.
*   For ground wave propagation, the dominant component for extended ranges is the surface wave.

**Important Points to Remember:**

*   Surface waves are primarily associated with **vertically polarized antennas**. Horizontally polarized waves do not effectively couple with the Earth's surface to generate significant surface currents.
*   The Earth's surface acts as a **dielectric interface**, and the interaction of the wave with this interface is crucial.

**References:**

*   **Balanis (4th Ed., 2016):** Likely provides detailed mathematical formulations for the surface wave and its interaction with a conducting Earth.
*   **Collin (2nd Ed., 2001):** Will offer rigorous analysis of wave propagation over spherical, imperfectly conducting surfaces, including the surface wave.

---

## 3. Factors Affecting Ground Wave Propagation

The range and strength of ground wave propagation are influenced by several factors:

### 3.1 Frequency

*   **Lower Frequencies (LF/MF):** Ground wave propagation is most effective at these frequencies (typically 30 kHz to 3 MHz). The attenuation rate is lower, allowing for longer ranges.
*   **Higher Frequencies (HF and above):** As frequency increases, the attenuation of the surface wave by the Earth increases significantly. Above the MF band, ground wave propagation becomes less practical for long-distance communication.

### 3.2 Earth's Electrical Properties

*   **Conductivity ($\sigma$):** Higher conductivity leads to lower attenuation.
    *   **Good Conductors (e.g., saltwater, moist soil):** Support longer ground wave ranges.
    *   **Poor Conductors (e.g., dry sandy soil, rocky terrain):** Result in rapid attenuation.
*   **Permittivity ($\epsilon_r$):** The relative permittivity of the Earth also plays a role, though conductivity is generally the dominant factor for ground wave propagation.

### 3.3 Polarization

*   **Vertical Polarization:** Essential for efficient ground wave propagation. The electric field is perpendicular to the Earth's surface, inducing surface currents.
*   **Horizontal Polarization:** Not suitable for ground wave propagation. The electric field is parallel to the Earth's surface, and minimal surface currents are induced.

### 3.4 Antenna Height and Radiation Pattern

*   The height of the transmitting and receiving antennas affects the strength of the ground wave. Higher antennas can provide a stronger signal, especially at the boundary where the ground wave starts to diffract around the Earth.
*   The radiation pattern of the antenna influences the distribution of power along the Earth's surface. Antennas with a lobe directed along the ground are advantageous.

### 3.5 Earth's Curvature

*   The spherical shape of the Earth limits the direct line-of-sight path. The ground wave, however, follows the curvature to some extent, extending the range beyond the geometric horizon.
*   **Range:** The geometric horizon for a 10-meter antenna is approximately 11.3 km. Ground wave propagation can extend this significantly.

### 3.6 Atmospheric Conditions

*   While less impactful than for skywave propagation, extreme atmospheric conditions like fog or heavy precipitation can cause some minor attenuation.

**Examples:**

*   **AM Radio Broadcasting (530 kHz - 1710 kHz):** Relies heavily on ground wave propagation for local coverage. During the day, ground wave provides consistent coverage. At night, skywave propagation becomes dominant, leading to interference.
*   **Long Wave Broadcasting (LF band, e.g., 150 kHz - 285 kHz):** Offers very stable and long-range ground wave coverage, often used for national broadcasting and navigation systems.

**Important Points to Remember:**

*   **Conductivity is King:** Always remember that Earth's conductivity is the most crucial factor for ground wave propagation.
*   **Vertical Polarization is a Must:** If you want to utilize ground waves, your antenna *must* be vertically polarized.

**References:**

*   **Garg (2001):** May discuss the impact of soil types and their electrical properties on antenna performance, which is directly related to ground wave propagation.
*   **Raju (1st Ed., 2009):** Likely dedicates sections to the parameters affecting radio wave propagation, including ground wave.
*   **Milligan (2nd Ed., 2005):** Might provide practical design considerations for antennas operating in frequency bands where ground wave propagation is important.

---

## 4. Range of Ground Wave Propagation

The range of ground wave propagation is determined by the signal strength at the receiving antenna and the attenuation experienced by the wave.

### 4.1 Factors Determining Range

*   **Transmitter Power:** Higher power generally results in a longer range.
*   **Antenna Height:** Taller antennas can extend the range.
*   **Frequency:** Lower frequencies provide longer ranges.
*   **Earth's Conductivity:** Better conductivity leads to longer ranges.
*   **Receiver Sensitivity:** A more sensitive receiver can detect weaker signals, effectively increasing the range.

### 4.2 Range Estimation

*   **Empirical Formulas and Charts:** Historically, various empirical formulas and charts have been developed to estimate ground wave range based on the factors mentioned above. These are often specific to certain frequency bands and Earth conditions.
*   **Theoretical Models:** More complex theoretical models, often involving numerical integration or specialized propagation models, can provide more accurate range estimations. These models consider the Earth's curvature and the complex permittivity of the ground.

**Example:**

*   A typical AM broadcast station operating at 1 MHz with a few kilowatts of power and a moderately tall vertical antenna might achieve reliable ground wave coverage of 50-100 km over average terrain. This range can be significantly extended at night due to skywave, but that's a different propagation mode.

**Important Points to Remember:**

*   Range is not a fixed value but rather a function of many variables.
*   **Daytime vs. Nighttime:** Ground wave coverage is typically more stable and predictable during the day. At night, ionospheric effects can significantly alter the propagation environment, often leading to much longer (but less reliable) ranges due to skywave propagation.

**References:**

*   **Balanis (4th Ed., 2016):** May present simplified models or refer to standard propagation charts for estimating ground wave range.
*   **Kraus (3rd Ed., 2002):** Likely provides practical guidance and examples related to the range of ground wave propagation for specific applications like AM broadcasting.

---

## 5. Ground Wave Propagation and Antenna Design

The principles of ground wave propagation have direct implications for antenna design, especially for terrestrial communication systems operating in LF and MF bands.

### 5.1 Antenna Types for Ground Wave Propagation

*   **Vertical Monopoles and Dipoles:** These are the most common antennas for ground wave propagation due to their vertical polarization.
    *   **Monopoles:** Typically mounted over a ground plane (which can be the Earth itself or an artificial ground screen). The efficiency of the monopole is highly dependent on the quality of the ground plane.
    *   **Dipoles:** Can be mounted vertically to achieve vertical polarization.

### 5.2 Ground Systems

*   **Artificial Ground Planes/Radials:** For locations where the Earth's conductivity is poor, an artificial ground system consisting of a network of radial wires is often used. This system improves the efficiency of vertical antennas by providing a low-impedance path for the return current.
*   **Counterpoise:** A system of wires elevated above the ground, acting as a substitute for the Earth ground.

### 5.3 Antenna Height and Efficiency

*   **Tower/Mast Antennas:** Tall towers or masts are used to elevate vertical antennas, increasing the effective height and thus extending the ground wave range.
*   **Loading Coils:** To make antennas electrically resonant at lower frequencies with limited physical height, loading coils are often incorporated. However, loading coils can introduce losses, reducing antenna efficiency.

### 5.4 Impedance Matching

*   Proper impedance matching between the antenna and the transmission line is crucial for efficient power transfer. Ground effects can influence the antenna's input impedance.

**Relationship to Course Outcomes:**

*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)** - While microstrip antennas are typically used at higher frequencies, understanding general antenna design principles in relation to propagation modes is important. The concepts of impedance matching, radiation pattern, and efficiency are transferable.
*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4)** - Understanding ground wave propagation informs the design of antennas for specific terrestrial communication applications, even if those applications don't exclusively use ground wave.
*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)** - The interaction of vertically polarized antennas with the Earth to induce surface currents is a direct consequence of the antenna's radiation mechanism in the presence of a conducting surface.

**Examples:**

*   **AM Radio Station Towers:** These are often very tall structures supporting a vertical radiator, optimized for ground wave coverage over a broad area. The ground system beneath the tower is extensive and crucial for performance.
*   **Shortwave Antennas:** While primarily used for skywave, many shortwave antennas are also designed with some consideration for ground wave performance, especially for shorter-range links.

**Important Points to Remember:**

*   **Antenna choice is driven by propagation mode:** For ground wave, vertical polarization is paramount.
*   **Ground conductivity dictates the need for artificial grounds:** If the Earth is not conductive enough, an artificial ground system is essential for efficient operation of vertically polarized antennas.

**References:**

*   **Balanis (4th Ed., 2016):** Will have extensive sections on various antenna types, including monopoles, and their performance over ground planes.
*   **Garg (2001):** Likely discusses the design of antennas for different frequency bands and their interaction with the environment, relevant for ground wave considerations.
*   **Milligan (2nd Ed., 2005):** Will offer practical antenna design techniques, including ground system design and impedance matching for different antenna configurations.
*   **Kraus (3rd Ed., 2002):** Provides a wealth of information on antenna types and their practical implementation, including details on ground systems for vertical antennas.

---

## 6. Limitations of Ground Wave Propagation

While effective for certain applications, ground wave propagation has significant limitations:

*   **Frequency Dependence:** Becomes highly attenuated at frequencies above the MF band.
*   **Earth's Conductivity:** Poor conductivity significantly limits the range.
*   **Antenna Polarization:** Requires vertical polarization, limiting flexibility.
*   **Line of Sight:** While it follows the curvature, the effective range is still limited compared to other modes like skywave propagation at higher frequencies.
*   **Interference:** At frequencies where ground wave is used (e.g., AM broadcast), other propagation modes (like skywave) can cause interference, especially at night.
*   **Ground Losses:** Energy is continuously lost to the Earth as heat, leading to attenuation.

**Important Points to Remember:**

*   Ground wave is not a universal solution; it's optimized for specific frequency bands and terrestrial communication needs.

---

## 7. Practice Questions and Answers

**Question 1:** Which polarization is most effective for ground wave propagation and why?
**Answer:** Vertical polarization is most effective. The vertically oriented electric field of the wave induces currents in the Earth's surface, which in turn reradiate the wave along the surface, effectively guiding it. Horizontally polarized waves do not induce significant surface currents. (Relates to CO4)

**Question 2:** How does the conductivity of the Earth affect ground wave propagation?
**Answer:** Higher conductivity leads to lower attenuation of the ground wave, resulting in longer propagation ranges. Conversely, low conductivity (e.g., dry sandy soil) causes rapid attenuation and short ranges. (Relates to CO4)

**Question 3:** What are the primary frequency bands where ground wave propagation is most utilized?
**Answer:** Low Frequencies (LF) and Medium Frequencies (MF) are the primary bands for ground wave propagation. Examples include long wave broadcasting (LF) and AM radio broadcasting (MF). (Relates to CO4)

**Question 4:** An AM radio station wants to improve its ground wave coverage in an area with sandy soil. What are two practical measures they could take?
**Answer:**
1.  **Increase Transmitter Power:** This provides a stronger initial signal.
2.  **Improve the Ground System:** Install a more extensive network of radial wires beneath the antenna to act as an artificial ground with better conductivity.
3.  **Increase Antenna Height:** A taller antenna can improve the signal strength at the horizon. (Relates to CO2, CO3, CO4)

**Question 5:** True or False: Ground wave propagation is generally unaffected by the curvature of the Earth.
**Answer:** False. While the wave "sticks" to the surface, the Earth's curvature does limit the range of ground wave propagation to beyond the geometric horizon. The ground wave follows the curvature to some extent. (Relates to CO4)

---

## Summary and Key Takeaways

*   **Ground wave propagation** is a crucial mode for terrestrial communications, particularly in LF and MF bands.
*   It relies on a **surface wave** that propagates along the Earth's surface, guided by the Earth's conductivity.
*   **Vertical polarization** is essential for efficient ground wave propagation.
*   **Earth's conductivity** is the most significant factor determining the range, with higher conductivity leading to longer ranges.
*   **Frequency** plays a vital role; lower frequencies are attenuated less.
*   Antenna design for ground wave applications requires **vertically polarized antennas**, often with robust **ground systems** to compensate for poor Earth conductivity.
*   The **Earth's curvature** limits the practical range, though the ground wave can propagate beyond the geometric horizon.

This module provides a foundational understanding of how radio waves interact with the Earth's surface, which is critical for designing and deploying effective terrestrial communication systems. Understanding these principles directly contributes to achieving **CO4** and informs the practical design considerations for antennas discussed in **CO2** and **CO3**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
