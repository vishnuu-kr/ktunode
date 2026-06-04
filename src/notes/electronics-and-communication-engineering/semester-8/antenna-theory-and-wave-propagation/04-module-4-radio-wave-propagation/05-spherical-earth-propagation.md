---
title: "Spherical earth propagation"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 4: Radio Wave Propagation"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff789"
status: "completed"
scrapedAt: "2026-05-23T18:12:49.037Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 4: Radio Wave Propagation

### Topic: Spherical Earth Propagation

This topic delves into the complexities of radio wave propagation over a spherical Earth, considering its impact on signal coverage and the design of communication systems. We will explore how the Earth's curvature influences the propagation paths of different radio waves, leading to concepts like line-of-sight communication and the role of atmospheric refraction.

---

### Learning Outcomes:

*   **Understand the fundamental principles of radio wave propagation over a curved Earth:** This involves grasping how the spherical geometry affects the reach and behavior of radio signals.
*   **Differentiate between various propagation modes influenced by Earth's curvature:** We will distinguish between line-of-sight, ground wave, and skywave propagation in the context of a spherical Earth.
*   **Analyze the factors affecting radio horizon and its impact on coverage:** Understanding what limits the visible horizon for radio waves is crucial for system planning.
*   **Explain the role of atmospheric refraction in extending radio coverage:** How the atmosphere can bend radio waves and effectively increase the communication range.
*   **Calculate key parameters related to spherical Earth propagation, such as radio horizon distance and effective Earth radius:** Applying mathematical models to quantify propagation characteristics.

---

### Course Outcomes Alignment:

*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2):** This topic directly addresses CO4 by explaining propagation modes (ground wave, skywave, line-of-sight) and parameters (radio horizon, effective Earth radius) as influenced by the spherical Earth.

---

### Key Concepts and Definitions:

#### 1. Line-of-Sight (LOS) Propagation over a Spherical Earth

*   **Definition:** The direct path between a transmitting antenna and a receiving antenna that is unobstructed by the Earth's curvature.
*   **Impact of Spherical Earth:** On a flat Earth, LOS propagation would extend infinitely. However, the Earth's curvature limits LOS to the **radio horizon**.
*   **Radio Horizon:** The furthest point on the Earth's surface that is visible to a transmitting antenna (and vice-versa for a receiving antenna).
*   **Important Note:** For LOS, both antennas must be above the radio horizon of each other.

#### 2. Radio Horizon Distance (d_h)

*   **Concept:** The distance from an antenna to the point where the radio wave grazes the Earth's surface due to its curvature.
*   **Derivation (Simplified, neglecting refraction):**
    *   Consider a transmitting antenna of height $h_t$ above the Earth's surface, and the Earth as a sphere of radius $R_e$.
    *   The line of sight from the antenna to the horizon is tangential to the Earth's surface.
    *   Using the Pythagorean theorem on the right-angled triangle formed by the Earth's center, the antenna's position, and the horizon point:
        $(R_e + h_t)^2 = R_e^2 + d_h^2$
    *   Expanding this: $R_e^2 + 2R_e h_t + h_t^2 = R_e^2 + d_h^2$
    *   Since $h_t << R_e$, $h_t^2$ can be neglected.
    *   $2R_e h_t \approx d_h^2$
    *   **$d_h \approx \sqrt{2R_e h_t}$**
*   **Units:**
    *   If $R_e$ is in kilometers and $h_t$ is in meters, then $d_h$ can be conveniently expressed in kilometers.
    *   Let $R_e \approx 6371$ km.
    *   $d_h \text{ (km)} \approx \sqrt{2 \times 6371 \text{ km} \times h_t \text{ (m)} / 1000}$
    *   **$d_h \text{ (km)} \approx 3.57 \sqrt{h_t \text{ (m)}}$** (This is a commonly used approximation)

#### 3. Effective Earth Radius (a_e) and Atmospheric Refraction

*   **Concept:** The Earth's atmosphere is not uniform; its refractive index varies with altitude. This variation causes radio waves to bend, or refract, towards the Earth's surface.
*   **Effect of Refraction:** Refraction effectively makes the Earth appear less curved or even flatter, thus extending the radio horizon beyond what is predicted by the geometric horizon.
*   **Effective Earth Radius Model:** To simplify calculations and account for average atmospheric conditions, we use an "effective Earth radius" ($a_e$) which is larger than the actual Earth radius ($R_e$).
*   **Standard Refraction:** Under standard atmospheric conditions, the bending of radio waves is such that the effective Earth radius is approximately $4/3$ times the actual Earth radius.
    *   **$a_e = (4/3) R_e$**
*   **Modified Radio Horizon Distance (with refraction):** The formula for the radio horizon distance is modified using $a_e$ instead of $R_e$:
    *   $d_{h, \text{eff}} \approx \sqrt{2a_e h_t}$
    *   Substituting $a_e = (4/3)R_e$:
    *   $d_{h, \text{eff}} \approx \sqrt{2(4/3)R_e h_t} = \sqrt{4/3} \sqrt{2R_e h_t}$
    *   **$d_{h, \text{eff}} \approx 1.155 d_h$** (The horizon is extended by about 15.5%)
*   **Practical Formula (with refraction):**
    *   **$d_{h, \text{eff}} \text{ (km)} \approx 3.57 \sqrt{h_t \text{ (m)}} \times (4/3)^{1/2} \approx 4.12 \sqrt{h_t \text{ (m)}}$**
*   **Variations in Refraction:**
    *   **Sub-refraction:** If the upper atmosphere is more dense than normal, waves bend less, and the effective Earth radius is smaller than $4/3 R_e$. This reduces coverage.
    *   **Super-refraction:** If the upper atmosphere is less dense than normal, waves bend more, and the effective Earth radius is larger than $4/3 R_e$. This can significantly increase coverage, sometimes leading to tropospheric ducting.
    *   **For these variations, the effective radius $a_e$ will be different, leading to different coverage calculations.**

#### 4. Total Range of LOS Communication between Two Antennas

*   **Concept:** The maximum distance between two antennas for LOS communication is the sum of their individual radio horizon distances.
*   **Formula:**
    *   Let the heights of the transmitting and receiving antennas be $h_t$ and $h_r$ respectively.
    *   The total range $d_{\text{total}}$ is the sum of their effective radio horizon distances:
    *   **$d_{\text{total}} = d_{h, \text{eff}}(h_t) + d_{h, \text{eff}}(h_r)$**
    *   Using the practical formula:
    *   **$d_{\text{total}} \text{ (km)} \approx 4.12 (\sqrt{h_t \text{ (m)}} + \sqrt{h_r \text{ (m)}})$**

#### 5. Ground Wave Propagation

*   **Concept:** This mode involves radio waves that travel along the surface of the Earth. It is significant for lower frequencies (MF and lower HF).
*   **Mechanism:** The wave "hugs" the Earth's surface and is guided by it. The conductivity and permittivity of the Earth play a crucial role.
*   **Spherical Earth Influence:** The curvature of the Earth limits the range of ground waves. Unlike on a flat Earth where they might theoretically extend indefinitely, on a spherical Earth, they follow the curvature.
*   **Frequency Dependence:** Ground wave propagation is highly dependent on frequency.
    *   **Low Frequencies (LF) and Medium Frequencies (MF):** Ground waves are effective and can travel over the horizon to some extent due to diffraction and the Earth's conductivity. Their range is several hundred to a few thousand kilometers.
    *   **High Frequencies (HF) and above:** Ground wave attenuation becomes too high, and they are generally not used for long-distance communication. LOS or skywave propagation becomes dominant.
*   **Reference:** Balanis (4th Ed.) discusses ground wave propagation in detail, including its dependence on Earth's constants. Chapter 7 "Antenna Near the Ground" and Chapter 10 "Antenna Arrays and Their Radiation Characteristics" (when considering reflections from ground) are relevant. Collin (2nd Ed.) also covers wave propagation phenomena.

#### 6. Skywave Propagation (Ionospheric Propagation)

*   **Concept:** Radio waves in the HF band (and some VHF) are reflected or refracted by the ionized layers in the Earth's upper atmosphere, known as the ionosphere.
*   **Spherical Earth Influence:** While the ionosphere is the primary factor, the spherical Earth's geometry determines the angles at which waves reach the ionosphere and are reflected back to different points on the Earth's surface.
*   **Mechanism:** The angle of incidence at the ionosphere and the curvature of the Earth determine the skip distance and the maximum usable frequency (MUF).
*   **"Skywave" Term:** The wave travels upwards, bounces off the ionosphere, and returns to Earth.
*   **Range:** Can achieve very long distances (global communication) by multiple hops between the ionosphere and the Earth's surface.
*   **Reference:** Balanis (4th Ed.) discusses ionospheric propagation in Chapter 13 "Propagation and Its Effect on Antenna Performance," explaining how the ionosphere influences signal strength and coverage. Collin's book also provides insights into wave propagation phenomena.

#### 7. Diffraction

*   **Concept:** The bending of radio waves around obstacles or the Earth's curved surface.
*   **Spherical Earth Influence:** Diffraction is what allows radio waves (especially ground waves at lower frequencies) to propagate slightly beyond the geometric radio horizon.
*   **Frequency Dependence:** Diffraction is more significant at lower frequencies and for smaller obstacles relative to the wavelength.
*   **Reference:** Balanis (4th Ed.) covers diffraction in Chapter 13, explaining its contribution to propagation beyond the horizon.

---

### Practical Examples and Applications:

*   **VHF/UHF Communication (e.g., FM radio, TV broadcasting, land mobile radio):**
    *   Propagation is primarily LOS. The range is limited by the radio horizon of the transmitting and receiving antennas.
    *   Higher transmitting antennas are crucial for extended coverage.
    *   Atmospheric refraction is considered for reliable coverage predictions.
*   **AM Radio Broadcasting (MF Band):**
    *   During the day, ground wave propagation is dominant, providing coverage of a few hundred kilometers.
    *   At night, the ionosphere becomes less ionized, and skywave propagation can lead to signals traveling much further, sometimes causing interference. Ground waves still propagate along the surface, limited by curvature and attenuation.
*   **Shortwave Radio (HF Band):**
    *   Relies entirely on skywave propagation for long-distance communication.
    *   Global communication is possible by bouncing signals off the ionosphere.
    *   The effectiveness of skywave propagation varies with time of day, season, and solar activity, which affects the ionosphere's properties.

---

### Important Points to Remember:

*   **Earth's curvature is the primary factor limiting direct (LOS) radio wave propagation.**
*   **The radio horizon distance determines the maximum LOS range for a single antenna.**
*   **Atmospheric refraction bends radio waves, effectively increasing the Earth's radius and extending the radio horizon.**
*   **The effective Earth radius ($a_e = 4/3 R_e$) is a standard approximation for refraction's effect.**
*   **Total LOS communication range is the sum of the horizon distances of both antennas.**
*   **Ground wave propagation is important for lower frequencies and follows the Earth's surface, but its range is also limited by curvature and attenuation.**
*   **Skywave propagation utilizes the ionosphere for long-distance communication, particularly in the HF band.**
*   **Frequency, antenna height, and atmospheric conditions are key parameters affecting radio wave propagation over a spherical Earth.**

---

### Practice Questions:

**Question 1:**
A television transmitting antenna is located at a height of 200 meters above the ground. Calculate the distance to the radio horizon assuming a flat Earth. Now, consider the Earth's curvature and calculate the distance to the radio horizon using the standard approximation for atmospheric refraction (effective Earth radius $a_e = 4/3 R_e$).
(Assume Earth's radius $R_e = 6371$ km).

**Answer 1:**

*   **Flat Earth (for reference, not physically accurate for horizon):** On a truly flat Earth, the horizon would be infinitely far in theory. However, the concept of a "geometric" horizon can be derived by setting $R_e$ to infinity in the formula, which doesn't apply here. The primary limitation on a flat Earth would be obstructions.
*   **With Earth's Curvature (No Refraction):**
    *   $h_t = 200$ m
    *   $d_h \approx 3.57 \sqrt{h_t \text{ (m)}}$
    *   $d_h \approx 3.57 \sqrt{200} \approx 3.57 \times 14.14 \approx 50.49$ km
*   **With Earth's Curvature and Standard Refraction:**
    *   $d_{h, \text{eff}} \approx 4.12 \sqrt{h_t \text{ (m)}}$
    *   $d_{h, \text{eff}} \approx 4.12 \sqrt{200} \approx 4.12 \times 14.14 \approx 58.26$ km

**Question 2:**
Two antennas are used for a microwave link. The transmitting antenna is at a height of 50 meters, and the receiving antenna is at a height of 30 meters. What is the maximum communication range between these two antennas, considering the Earth's curvature and standard atmospheric refraction?

**Answer 2:**
*   $h_t = 50$ m
*   $h_r = 30$ m
*   $d_{h, \text{eff}}(h_t) \approx 4.12 \sqrt{50} \approx 4.12 \times 7.07 \approx 29.13$ km
*   $d_{h, \text{eff}}(h_r) \approx 4.12 \sqrt{30} \approx 4.12 \times 5.48 \approx 22.57$ km
*   Total Range $d_{\text{total}} = d_{h, \text{eff}}(h_t) + d_{h, \text{eff}}(h_r)$
*   $d_{\text{total}} \approx 29.13 + 22.57 \approx 51.70$ km

**Question 3:**
Explain why ground wave propagation is more effective at lower frequencies (MF band) compared to higher frequencies (VHF band) when considering propagation over a spherical Earth.

**Answer 3:**
Ground wave propagation relies on the wave "hugging" the Earth's surface and being guided by it. The effectiveness of this mode is significantly influenced by:
1.  **Earth's Conductivity:** The Earth acts as a lossy dielectric. The losses are generally lower for lower frequencies.
2.  **Diffraction:** Lower frequencies diffract more easily around the curvature of the Earth, allowing them to extend slightly beyond the geometric horizon.
3.  **Attenuation:** At higher frequencies (VHF and above), the attenuation of the ground wave due to the Earth's surface interaction becomes very high, making it impractical for long-distance communication. Instead, LOS or skywave propagation becomes dominant.
Therefore, while the spherical Earth limits the range of ground waves at all frequencies, it is the high attenuation at higher frequencies that makes ground wave propagation primarily an MF and LF phenomenon.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### References:

*   **Antenna Theory: Analysis and Design, by Constantine A. Balanis (Wiley, 4th Edition, 2016):**
    *   Chapter 13: Propagation and Its Effect on Antenna Performance (provides a comprehensive overview of propagation modes including ground wave and ionospheric, and discusses factors like diffraction and the Earth's curvature).
*   **Antennas and Radio Wave Propagation by R.E. Collin (McGraw Hill, 2/e, 2001):**
    *   Likely covers wave propagation phenomena in detail, including geometric optics approximations and diffraction effects relevant to spherical Earth.
*   **Antenna and Wave Propagation by Raju GSN (Pearson, 1/e, 2009):**
    *   This book is a core reference for wave propagation and will likely contain sections dedicated to line-of-sight propagation, radio horizon calculations, and the effects of atmospheric refraction.

---