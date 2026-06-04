---
title: "Space wave and surface wave"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 4: Radio Wave Propagation"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff788"
status: "completed"
scrapedAt: "2026-05-23T18:12:48.290Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 4: Radio Wave Propagation

### Topic: Space Wave and Surface Wave

---

### 1. Introduction to Radio Wave Propagation

Radio wave propagation describes how electromagnetic waves travel from a transmitting antenna to a receiving antenna. The path taken by these waves is influenced by several factors, including the frequency of the wave, the properties of the Earth's surface, and the atmospheric conditions. Understanding these propagation modes is crucial for designing effective communication systems.

**Key Concept:** The behavior of radio waves in space is governed by Maxwell's equations. Different frequencies interact with the environment in distinct ways, leading to different propagation characteristics.

**Course Outcome Alignment:** CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2). This topic directly addresses the foundational understanding of how radio waves travel.

---

### 2. Space Wave Propagation

Space wave propagation, also known as line-of-sight (LOS) propagation, occurs when radio waves travel directly from the transmitting antenna to the receiving antenna through the atmosphere without significant interaction with the Earth's surface or ionosphere. This mode is dominant for high-frequency waves.

#### 2.1 Characteristics of Space Waves

*   **Direct Path:** The wave travels in a straight line from transmitter to receiver.
*   **Line-of-Sight (LOS):** The antennas must be visible to each other. Obstacles like buildings, terrain, or the curvature of the Earth can block the signal.
*   **Dominant for High Frequencies:** Primarily used for frequencies above 30 MHz (VHF, UHF, Microwave).
*   **Relatively Independent of Earth's Properties:** Less affected by the conductivity and permittivity of the ground compared to surface waves.
*   **Affected by Atmospheric Conditions:** Can be influenced by refraction, diffraction, scattering, and absorption due to atmospheric layers and phenomena.

#### 2.2 Components of Space Wave

Space wave propagation can involve multiple components due to reflections off the Earth's surface or other objects.

*   **Direct Wave:** The wave traveling directly from the transmitting antenna to the receiving antenna.
*   **Ground Reflected Wave:** The wave that travels from the transmitting antenna, reflects off the Earth's surface, and then travels to the receiving antenna.

#### 2.3 Range of Space Wave Propagation

The maximum range of space wave propagation is limited by the curvature of the Earth.

*   **Geometric Horizon:** The theoretical horizon assuming a perfectly smooth Earth.
*   **Effective Earth Radius:** To account for atmospheric refraction, the Earth is often modeled as having an effective radius that is larger than its physical radius. The standard value for the effective Earth radius is $4/3$ times the actual Earth radius. This accounts for the average bending of radio waves due to atmospheric refraction.

    Let $R$ be the radius of the Earth, and $k$ be the effective Earth radius factor. Then, the effective Earth radius is $R_e = kR$. Typically, $k = 4/3$.

*   **Distance to the Horizon:** The distance $d$ from an antenna of height $h$ to the geometric horizon on a spherical Earth can be calculated using the Pythagorean theorem.

    For a smooth Earth:
    $d \approx \sqrt{2Rh}$

    For an effective Earth radius:
    $d_e \approx \sqrt{2R_e h}$

*   **Maximum Communication Distance:** The maximum distance between two antennas of heights $h_1$ and $h_2$ in space wave propagation is the sum of their respective distances to the horizon:

    $D_{max} \approx d_{e1} + d_{e2}$
    $D_{max} \approx \sqrt{2R_e h_1} + \sqrt{2R_e h_2}$

    **Example:** Calculate the maximum distance for LOS communication between two antennas, each at a height of 100 meters, considering the effective Earth radius.
    Given: $h_1 = 100 \, m$, $h_2 = 100 \, m$, $R_e = (4/3) \times 6371 \, km \approx 8495 \, km = 8.495 \times 10^6 \, m$.

    $d_{e1} \approx \sqrt{2 \times 8.495 \times 10^6 \, m \times 100 \, m} \approx \sqrt{1.699 \times 10^9 \, m^2} \approx 41220 \, m \approx 41.2 \, km$
    $d_{e2} \approx 41.2 \, km$

    $D_{max} \approx 41.2 \, km + 41.2 \, km = 82.4 \, km$

#### 2.4 Factors Affecting Space Wave Propagation

*   **Antenna Height:** Higher antennas increase the LOS distance, improving the range.
*   **Curvature of the Earth:** Limits the maximum range.
*   **Atmospheric Refraction:** Bending of waves due to variations in the refractive index of the atmosphere. Typically, it extends the range beyond the geometric horizon.
*   **Knife-Edge Diffraction:** When the propagation path is obstructed by a sharp, elevated terrain feature (like a mountain edge), waves can diffract around it, allowing communication beyond the geometric horizon.
*   **Tropospheric Scattering:** At frequencies above 1 GHz, scattering from irregularities in the troposphere can enable communication beyond the LOS.
*   **Reflection from Objects:** Reflections from buildings, trees, and other structures can cause multipath propagation, leading to fading.

#### 2.5 Applications of Space Wave Propagation

*   **Television and FM Broadcasting:** Frequencies are high enough for LOS propagation.
*   **Microwave Links:** Point-to-point communication systems using parabolic antennas.
*   **Satellite Communication:** Waves travel through space, largely unaffected by the Earth's surface.
*   **Radar:** Operates in the microwave and higher frequency bands.
*   **Mobile Communication (Cellular):** Base stations communicate with mobile units via space waves.

**Textbook Reference:** Balanis (4th Ed.) Chapter 12, "Propagation of Waves" discusses various propagation mechanisms, including space wave propagation. Collin (2nd Ed.) Chapter 9, "Radio Wave Propagation" also covers this topic.

**Important Point:** Space wave propagation is crucial for frequencies where ionospheric reflection is negligible and the Earth's surface effects are minimized.

---

### 3. Surface Wave Propagation

Surface wave propagation, also known as ground wave propagation, involves radio waves that follow the curvature of the Earth by being guided along the surface. This mode is particularly effective for lower frequencies.

#### 3.1 Characteristics of Surface Waves

*   **Follows Earth's Curvature:** The wave is guided by the interface between the Earth and the atmosphere.
*   **Dominant for Low Frequencies:** Most effective for frequencies below 3 MHz (LF, MF bands).
*   **Dependent on Earth's Properties:** Strongly influenced by the conductivity ($\sigma$) and permittivity ($\epsilon_r$) of the Earth's surface.
*   **Attenuation:** The wave is attenuated as it propagates due to:
    *   **Spreading Loss:** Similar to space waves, energy spreads out.
    *   **Ground Absorption:** Energy is absorbed by the Earth's surface, especially from the component of the electric field perpendicular to the surface. This absorption is greater for conductive surfaces.
    *   **Curvature Loss:** The wave gradually "falls off" the Earth's surface as it propagates, leading to attenuation.

#### 3.2 Mechanism of Surface Wave Propagation

The surface wave is essentially a wave that propagates along the surface of the Earth, with its electromagnetic field having a component that is perpendicular to the surface. This perpendicular component interacts with the ground.

*   **Vertical Polarization:** Surface wave propagation is most effective for vertically polarized waves, where the electric field vector is perpendicular to the Earth's surface. This allows for maximum interaction and guidance along the surface. Horizontal polarization is less effective because the electric field is parallel to the ground, leading to less interaction and more rapid attenuation.

    **Reference:** Balanis (4th Ed.) states that for good conductors, the surface wave is predominantly vertically polarized.

*   **Effect of Earth's Conductivity:**
    *   **Good Conductors (e.g., seawater, wet soil):** Result in lower attenuation because less energy is absorbed.
    *   **Poor Conductors (e.g., dry soil, rock):** Result in higher attenuation due to greater energy absorption.

*   **Effect of Earth's Permittivity:** The permittivity of the Earth also plays a role, influencing the wave impedance at the surface.

#### 3.3 Range of Surface Wave Propagation

The range of surface wave propagation is significantly longer than space wave propagation at lower frequencies, extending to thousands of kilometers.

*   **Factors Influencing Range:**
    *   **Frequency:** Lower frequencies propagate further.
    *   **Earth's Conductivity:** Higher conductivity increases the range.
    *   **Transmitting Antenna Height:** While the wave follows the surface, a slightly higher antenna can improve the initial coupling to the surface wave and slightly extend the range.
    *   **Polarization:** Vertical polarization is essential for effective surface wave propagation.

#### 3.4 Applications of Surface Wave Propagation

*   **AM Broadcasting:** Used for medium wave (MW) broadcasting, allowing signals to travel beyond the horizon.
*   **Maritime Communication:** Effective for ship-to-ship and ship-to-shore communication, especially at lower frequencies.
*   **Some Military Communications:** Used for long-range communication in specific scenarios.

**Textbook Reference:** Balanis (4th Ed.) Chapter 12, "Propagation of Waves" covers ground wave (surface wave) propagation in detail. Collin (2nd Ed.) Chapter 9, "Radio Wave Propagation" also discusses ground wave propagation.

**Important Point:** Surface wave propagation is primarily effective for vertically polarized waves at frequencies below 3 MHz due to the guiding effect of the Earth's surface and the influence of ground conductivity.

---

### 4. Comparison of Space Wave and Surface Wave Propagation

| Feature             | Space Wave Propagation                                      | Surface Wave Propagation                                       |
| :------------------ | :---------------------------------------------------------- | :------------------------------------------------------------- |
| **Frequency Range** | VHF, UHF, Microwaves (above 30 MHz)                         | LF, MF (below 3 MHz)                                           |
| **Propagation Path**| Direct line-of-sight; reflection from Earth (ground wave component may be present but not dominant) | Follows Earth's curvature; guided by the Earth-atmosphere interface |
| **Earth Interaction**| Minimal influence of Earth's surface properties (except for reflection); affected by atmospheric refraction | Strong dependence on Earth's conductivity and permittivity; significant attenuation due to absorption and spreading |
| **Polarization**    | Both horizontal and vertical polarizations are effective.   | Primarily effective for vertical polarization.                  |
| **Range**           | Limited by the Earth's curvature (horizon); effective range increases with antenna height. | Much longer range than space waves at lower frequencies; extends far beyond the horizon. |
| **Applications**    | TV broadcasting, FM radio, microwave links, satellite comms, cellular systems. | AM broadcasting, maritime communication.                       |
| **Antenna Height**  | Crucial for increasing LOS range.                           | Less critical for range, more for initial coupling.            |
| **Obstacles**       | Blocked by terrain, buildings, Earth's curvature.         | Can diffract around some obstacles; heavily attenuated by highly resistive surfaces. |

**Course Outcome Alignment:** CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2). The comparison highlights the distinct characteristics of these two fundamental propagation modes.

---

### 5. Practical Considerations and Examples

*   **FM Radio (88-108 MHz):** Primarily uses space wave propagation. The range is limited by the horizon, which is why FM antennas are often placed on high towers. The range can be extended by atmospheric ducting, but this is less predictable.
*   **AM Radio (530-1710 kHz):** Uses a combination of space wave (during the day) and surface wave propagation (especially at night). The surface wave allows AM signals to travel much further than the LOS distance, particularly over conductive ground.
*   **Cellular Networks:** Base stations transmit to mobile phones using space waves. The range of a cell is limited by the height of the base station antenna and the surrounding urban environment (buildings causing blockage and multipath).
*   **Shortwave Radio (HF, 3-30 MHz):** While not strictly surface wave or space wave in the typical sense discussed here, HF relies heavily on ionospheric reflection (skywave propagation), which is a third major propagation mode not covered in this specific topic. However, at the lower end of the HF band, ground wave can still contribute to propagation at shorter distances.

**Example:** Why can you often hear AM radio stations from hundreds of kilometers away, even though the transmitting towers are much lower than FM towers?
**Answer:** This is due to surface wave propagation, which allows AM (MF band) waves to follow the Earth's curvature over long distances, especially when propagating over conductive ground. FM (VHF band) waves are primarily limited by line-of-sight propagation.

---

### 6. Practice Questions and Answers

**Question 1:** Which type of radio wave propagation is dominant for frequencies above 30 MHz?
    a) Surface wave
    b) Space wave
    c) Sky wave
    d) Ground wave

**Answer 1:** b) Space wave

**Question 2:** For effective surface wave propagation, the transmitting antenna should be polarized:
    a) Horizontally
    b) Vertically
    c) Circularly
    d) Elliptically

**Answer 2:** b) Vertically

**Question 3:** The range of space wave propagation is primarily limited by:
    a) Earth's conductivity
    b) Ionospheric conditions
    c) The curvature of the Earth
    d) Atmospheric absorption

**Answer 3:** c) The curvature of the Earth

**Question 4:** Calculate the distance to the radio horizon for an antenna of height 50 meters, assuming an effective Earth radius of $R_e = 8.5 \times 10^6$ meters.
    a) 29.15 km
    b) 41.23 km
    c) 50.00 km
    d) 82.46 km

**Answer 4:**
Using the formula $d_e \approx \sqrt{2R_e h}$:
$d_e \approx \sqrt{2 \times (8.5 \times 10^6 \, m) \times 50 \, m}$
$d_e \approx \sqrt{8.5 \times 10^8 \, m^2}$
$d_e \approx 29155 \, m \approx 29.16 \, km$
So, the answer is a) 29.15 km.

**Question 5:** Explain why surface wave propagation is more effective over seawater than over dry desert sand.
**Answer 5:** Seawater is a much better electrical conductor than dry desert sand. Surface wave propagation is significantly influenced by the Earth's conductivity. Higher conductivity leads to lower attenuation of the surface wave, allowing it to propagate further. The electric field component of the wave perpendicular to the surface interacts with the conductive ground, and in highly conductive materials like seawater, this interaction causes less energy loss compared to resistive materials like dry sand.

**Question 6:** A microwave link operating at 10 GHz uses two antennas, each at a height of 30 meters. What is the maximum approximate distance the link can operate reliably before the signal is significantly affected by Earth blockage (assume effective Earth radius $R_e = 8495 \, km$)?

**Answer 6:**
This is a space wave propagation scenario.
$h_1 = 30 \, m$, $h_2 = 30 \, m$.
$R_e = 8495 \, km = 8.495 \times 10^6 \, m$.

Distance to horizon from each antenna:
$d_e \approx \sqrt{2R_e h}$
$d_e \approx \sqrt{2 \times (8.495 \times 10^6 \, m) \times 30 \, m}$
$d_e \approx \sqrt{5.097 \times 10^8 \, m^2}$
$d_e \approx 22577 \, m \approx 22.58 \, km$

Maximum communication distance:
$D_{max} \approx d_{e1} + d_{e2}$
$D_{max} \approx 22.58 \, km + 22.58 \, km = 45.16 \, km$

The maximum approximate distance the link can operate reliably before being affected by Earth blockage is about 45.16 km.

---

### 7. Important Points to Remember

*   **Space Wave:** LOS, high frequencies (VHF, UHF, Microwaves), limited by Earth's curvature, influenced by antenna height and atmospheric refraction.
*   **Surface Wave:** Follows Earth's curvature, low frequencies (LF, MF), highly dependent on Earth's conductivity, effective for vertical polarization, long range.
*   **Effective Earth Radius:** Used to account for atmospheric refraction in space wave calculations, typically $4/3$ times the actual Earth radius.
*   **Vertical Polarization:** Crucial for surface wave propagation; horizontal polarization is largely ineffective.
*   **Trade-off:** At lower frequencies, surface wave dominates for extended range. At higher frequencies, space wave is used, and antenna height becomes critical for range.

---

### 8. Alignment with Course Outcomes

*   **CO4 (K2):** This entire topic is dedicated to explaining different modes of radio wave propagation (space wave and surface wave), fulfilling CO4 at a knowledge level of K2. Students are expected to recall and describe the characteristics and differences between these modes. The comparison table and detailed descriptions directly support this outcome.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
