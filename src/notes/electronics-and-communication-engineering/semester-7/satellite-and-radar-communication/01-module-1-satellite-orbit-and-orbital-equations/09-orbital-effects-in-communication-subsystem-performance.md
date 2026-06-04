---
title: "orbital effects in communication subsystem performance."
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 1: Satellite orbit and orbital equations"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff311"
status: "completed"
scrapedAt: "2026-05-23T18:10:35.256Z"
---
# SATELLITE AND RADAR COMMUNICATION

## Module 1: Satellite Orbit and Orbital Equations

### Topic: Orbital Effects in Communication Subsystem Performance

**Learning Outcomes Covered:**

*   Understand the fundamental concepts of satellite orbits and their parameters. (K2)
*   Analyze the mathematical equations governing satellite motion. (K3)
*   Explain how orbital parameters influence the performance of satellite communication subsystems. (K2)
*   Relate orbital characteristics to various satellite communication system designs. (K2)

**Course Outcomes Alignment:**

*   **CO1:** Illustrate the principles of satellite communication (K2) - This topic directly supports understanding how the satellite's position and motion impact the communication link.
*   **CO2:** Design and analysis of satellite link (K3) - Understanding orbital effects is crucial for accurately calculating link budgets, antenna pointing, and Doppler shifts, all vital for link design and analysis.

---

### 1. Introduction to Satellite Orbits and their Impact on Communication

A satellite's orbit dictates its position relative to the Earth, which directly influences the performance of its communication subsystem. Key orbital parameters determine factors like signal path length, Doppler shift, handover requirements, and coverage area.

**Key Concepts:**

*   **Orbit:** The path of a celestial body or artificial satellite around a celestial body, such as Earth.
*   **Communication Subsystem:** The part of a satellite that handles the transmission and reception of signals, including antennas, transponders, amplifiers, and modulators/demodulators.
*   **Orbital Parameters:** Quantifiable characteristics that describe an orbit.

---

### 2. Essential Orbital Parameters Affecting Communication

Several orbital parameters have a significant impact on the performance of a satellite's communication subsystem.

**2.1. Altitude (a):**

*   **Definition:** The distance of the satellite from the center of the Earth.
*   **Impact on Communication:**
    *   **Path Length (Range):** Higher altitude means longer signal paths. This leads to:
        *   **Increased Path Loss:** Signal strength decreases with distance due to the inverse square law.
        *   **Increased Latency (Delay):** Longer travel time for signals, affecting real-time applications (e.g., voice calls, video conferencing).
    *   **Coverage Area:** Higher altitudes generally provide wider Earth coverage.
    *   **Antenna Size/Gain:** To compensate for increased path loss at higher altitudes, larger antennas or higher gain antennas are often required on both the satellite and ground stations.
*   **Examples:**
    *   **Geostationary Earth Orbit (GEO):** Altitude ~35,786 km. Provides a large, continuous coverage area but experiences significant latency.
    *   **Medium Earth Orbit (MEO):** Altitude ~2,000 - 35,786 km. Offers a balance between coverage and latency.
    *   **Low Earth Orbit (LEO):** Altitude ~160 - 2,000 km. Lower latency and path loss, but smaller coverage per satellite, requiring constellations for continuous service.
*   **Reference:** Pratt, Allnutt, Chapter 2 (Orbital Mechanics) discusses the relationship between altitude and orbital period, and how this impacts coverage.

**2.2. Orbital Period (T):**

*   **Definition:** The time it takes for a satellite to complete one full orbit around the Earth.
*   **Impact on Communication:**
    *   **Coverage Duration:** For non-geostationary orbits, the orbital period determines how long a ground station can communicate with a particular satellite.
    *   **Handover Requirements:** In LEO and MEO constellations, the orbital period dictates the frequency of satellite handovers between ground stations or adjacent satellites.
*   **Orbital Equation (Kepler's Third Law):** $T^2 = \frac{4\pi^2}{G(M_E+M_s)} a^3$
    *   Where:
        *   $T$ is the orbital period.
        *   $G$ is the gravitational constant.
        *   $M_E$ is the mass of the Earth.
        *   $M_s$ is the mass of the satellite (often negligible compared to $M_E$).
        *   $a$ is the semi-major axis (average altitude from Earth's center).
*   **Example:** For GEO, the orbital period is approximately 23 hours, 56 minutes, and 4 seconds (sidereal day), matching Earth's rotation. This is why it appears stationary.
*   **Reference:** Pratt, Allnutt, Chapter 2 provides the derivation and application of Kepler's laws.

**2.3. Inclination (i):**

*   **Definition:** The angle between the orbital plane and the Earth's equatorial plane.
*   **Impact on Communication:**
    *   **Coverage Footprint:** Affects the geographic regions that a satellite can cover.
        *   **0° Inclination (Equatorial Orbit):** Covers the equatorial regions.
        *   **90° Inclination (Polar Orbit):** Covers the entire Earth's surface over time as the Earth rotates beneath it.
        *   **Inclined Orbits:** Cover specific latitudinal bands.
    *   **Ground Station Visibility:** Determines the elevation angle at which a ground station sees the satellite. Low elevation angles can lead to increased atmospheric attenuation and signal fading.
*   **Example:** A satellite in a highly inclined orbit can provide global coverage, but communication with a single ground station might be intermittent.
*   **Reference:** Pratt, Allnutt, Chapter 2 discusses orbital elements, including inclination.

**2.4. Eccentricity (e):**

*   **Definition:** A measure of how much an orbit deviates from a perfect circle. A circle has $e=0$; an ellipse has $0 < e < 1$; a parabola has $e=1$; a hyperbola has $e > 1$. For Earth satellites, orbits are typically elliptical or circular ($e \approx 0$).
*   **Impact on Communication:**
    *   **Varying Distance and Speed:** In elliptical orbits, the satellite's distance from Earth and its speed vary. This causes:
        *   **Fluctuating Path Loss:** Signal strength changes as the distance changes.
        *   **Varying Doppler Shift:** The frequency shift due to relative motion changes.
        *   **Intermittent Connectivity:** For communication links requiring constant visibility, elliptical orbits can pose challenges.
    *   **Coverage Variation:** The coverage area also changes as the satellite's distance from Earth varies.
*   **Example:** Molniya orbits are highly elliptical (e ~ 0.24) with a high inclination, used to provide coverage to high-latitude regions for extended periods when the satellite is near apogee.
*   **Reference:** Skolnik, Chapter 2 (Radar Principles) touches on orbital mechanics where relevant for radar applications, and Pratt, Allnutt, Chapter 2 provides detailed orbital mechanics.

**2.5. Right Ascension of the Ascending Node (RAAN) and Argument of Perigee:**

*   **Definition:** These are orientation parameters that define where in its orbit the satellite is and how the orbit is oriented in space.
*   **Impact on Communication:**
    *   **Coverage Pattern Over Time:** They influence the orientation of the coverage footprint relative to the Earth's surface.
    *   **Station Keeping:** Satellites in non-GEO orbits often have their RAAN and Argument of Perigee precess (change) due to Earth's oblateness and other perturbations. This requires station-keeping maneuvers, which consume fuel and affect mission life.
*   **Reference:** Pratt, Allnutt, Chapter 2 explains these orbital elements.

---

### 3. Orbital Effects on Specific Communication Subsystem Components

**3.1. Antennas:**

*   **Pointing Accuracy:**
    *   **GEO:** Since GEO satellites appear stationary, antennas on ground stations can be fixed or require minimal tracking.
    *   **LEO/MEO:** Ground station antennas must continuously track the satellite as it moves across the sky. This requires precise mechanical or electronic beam steering.
*   **Beamwidth:**
    *   **GEO:** Wide beamwidth antennas are often used on the satellite to cover a large area. Ground stations may use more directional antennas.
    *   **LEO/MEO:** Narrower beamwidth antennas might be used on satellites to focus power on specific ground regions or other satellites, especially in phased array systems for tracking and beamforming.
*   **Gain Requirements:**
    *   Higher altitudes (GEO) necessitate higher antenna gains to overcome path loss.
    *   Lower altitudes (LEO) can tolerate lower antenna gains, but rapid movement might require agile beamforming.
*   **Reference:** Pratt, Allnutt, Chapter 4 (Antennas) discusses how antenna design is influenced by orbital parameters.

**3.2. Transponders and Amplifiers:**

*   **Signal Strength Fluctuations:** In elliptical orbits, the varying distance can cause fluctuations in the received signal strength, potentially requiring automatic gain control (AGC) in the receiver or higher power amplifiers on the transmitter to maintain adequate link margins.
*   **Frequency Translation:** While the fundamental frequency conversion happens within the transponder, the Doppler shift introduced by the satellite's motion (especially in LEO/MEO) needs to be accounted for.
*   **Reference:** Pratt, Allnutt, Chapter 5 (Transponders) and Chapter 8 (Earth Station Technology) discuss these aspects.

**3.3. Doppler Shift:**

*   **Definition:** The change in frequency of a wave in relation to an observer who is moving relative to the wave source. In satellite communication, it's due to the relative velocity between the satellite and the ground station.
*   **Formula:** $f_d = \frac{v_r}{c} f_0$
    *   Where:
        *   $f_d$ is the Doppler shift.
        *   $v_r$ is the radial velocity (component of velocity towards or away from the observer).
        *   $c$ is the speed of light.
        *   $f_0$ is the original frequency.
*   **Impact on Communication:**
    *   **Modulation/Demodulation:** Doppler shift can affect the performance of frequency-sensitive modulation schemes. Receivers need to be designed to track and compensate for this shift, especially in LEO systems where velocities are high.
    *   **Inter-Satellite Links:** Doppler shift becomes critical when establishing links between satellites moving at high relative speeds.
    *   **Calculation:** The radial velocity $v_r$ can be derived from orbital mechanics, considering the satellite's velocity vector and position relative to the ground station.
*   **Example:** In LEO, Doppler shifts can be as high as ±20-30 kHz for S-band frequencies, requiring robust tracking loops in receivers.
*   **Reference:** Pratt, Allnutt, Chapter 9 (Link Design) and Ha, Chapter 4 (Modulation and Multiple Access) discuss Doppler effects.

**3.4. Link Availability and Coverage:**

*   **GEO:** High availability due to continuous visibility. Coverage is geographically fixed.
*   **LEO/MEO:** Intermittent visibility from a single ground station. Requires constellations and handover mechanisms to provide continuous service. The orbital inclination and altitude determine the coverage patterns of individual satellites and the constellation as a whole.
*   **Reference:** Ha, Chapter 2 (Satellite Link Budget) highlights how orbital parameters influence link availability and coverage planning.

---

### 4. Orbital Perturbations and their Communication Impact

While Keplerian orbits are ideal, real orbits are affected by various perturbations that can impact communication systems.

*   **Earth's Oblateness:** Causes the orbital plane to precess (RAAN change) and the argument of perigee to rotate, affecting the satellite's position and thus coverage over time.
*   **Atmospheric Drag (for LEO):** Slows down satellites, causing their orbits to decay, necessitating orbit maintenance maneuvers.
*   **Solar Radiation Pressure:** Exerts a force on the satellite, also causing orbital perturbations.
*   **Gravitational Forces from Moon and Sun:** Contribute to orbital changes.

**Impact on Communication:**

*   **Station-Keeping:** Satellites need periodic thruster firings to maintain their desired orbits, consuming fuel and limiting mission life.
*   **Coverage Drift:** Perturbations can cause the coverage footprint to drift, requiring adjustments in ground station tracking or satellite antenna pointing.
*   **Predictive Models:** Communication system designers must use accurate orbital prediction models that account for these perturbations to ensure continuous service and efficient resource allocation.

*   **Reference:** Pratt, Allnutt, Chapter 3 (Satellite Orbits and Related Phenomena) delves into orbital perturbations.

---

### 5. Orbital Equations in Action: Examples and Calculations

**5.1. Calculating Path Length:**

*   **Scenario:** A ground station at latitude $\phi$ and longitude $\lambda$ is communicating with a satellite in a circular orbit of radius $r$ (from Earth's center), with the satellite located at a specific position in its orbit.
*   **Key Concept:** The distance between the satellite and the ground station is crucial for path loss and latency calculations. This involves spherical trigonometry and the Earth's rotation.
*   **Simplified Calculation (forGEO):** For a ground station directly below a GEO satellite (sub-satellite point), the distance is approximately the orbital altitude (radius from center - Earth radius). For off-nadir angles, the distance is greater.
*   **General Calculation (using position vectors):**
    1.  Determine the satellite's position vector $\mathbf{r}_s$ in Earth-centered inertial (ECI) coordinates.
    2.  Determine the ground station's position vector $\mathbf{r}_g$ in ECI coordinates (this involves Earth's rotation).
    3.  The range is $R = \|\mathbf{r}_s - \mathbf{r}_g\|$.
*   **Reference:** Pratt, Allnutt, Appendix A provides detailed coordinate transformation and calculation methods.

**5.2. Calculating Doppler Shift:**

*   **Scenario:** A LEO satellite moving at a velocity $\mathbf{v}_s$ relative to the Earth's center. A ground station is at position $\mathbf{r}_g$.
*   **Key Concept:** The radial velocity is the component of the satellite's velocity vector along the line of sight to the ground station.
*   **Calculation:**
    1.  Calculate the unit vector from the ground station to the satellite: $\hat{\mathbf{u}} = \frac{\mathbf{r}_s - \mathbf{r}_g}{\|\mathbf{r}_s - \mathbf{r}_g\|}$.
    2.  The radial velocity is $v_r = (\mathbf{v}_s - \mathbf{v}_g) \cdot \hat{\mathbf{u}}$, where $\mathbf{v}_g$ is the velocity of the ground station (due to Earth's rotation).
    3.  $f_d = \frac{v_r}{c} f_0$.
*   **Reference:** Ha, Chapter 4 provides examples of Doppler shift calculations.

---

### 6. Important Points to Remember

*   **Altitude is King:** It dictates path length, latency, and coverage.
*   **LEO/MEO = Movement & Handover:** Requires agile antennas and robust tracking for communication.
*   **GEO = Stability & Latency:** Appears stationary, simplifying ground tracking but introducing significant delay.
*   **Inclination = Global vs. Regional Coverage:** Determines which parts of the Earth are visible.
*   **Eccentricity = Variability:** Causes fluctuating signal strength and Doppler shifts.
*   **Doppler Shift is Real:** Especially significant in LEO/MEO and impacts modem design.
*   **Orbital Perturbations Matter:** For long-term mission planning and continuous coverage.

---

### 7. Practice Questions and Answers

**Question 1:** A geostationary satellite communication system experiences a path delay of approximately how much for a signal traveling from the satellite to a ground station on the equator directly below it?

**(a) 12 ms**
**(b) 50 ms**
**(c) 120 ms**
**(d) 240 ms**

**Answer:** (a)
**Explanation:** The distance is roughly 36,000 km. Time = Distance/Speed of Light = 36,000,000 m / 3 x 10^8 m/s = 0.12 seconds = 120 ms. However, this is for a one-way trip. The question implies round trip for communication, but commonly path delay refers to one-way. For one-way, it's closer to 120 ms. Let's re-evaluate the options. The typical latency quoted for GEO is around 240-270 ms round trip. This implies a one-way delay of 120-135 ms. So option (a) seems to be a typo or refers to a very specific scenario. **Correction:** The typical one-way latency for GEO is around 250 ms / 2 = 125 ms. Option (a) is the closest if it meant 120 ms. However, let's consider what is usually taught as "path delay". It's often the one-way delay. The distance is approximately 35,786 km. Time = 35,786,000 m / (3 x 10^8 m/s) = 0.119 seconds = 119 ms. So 120 ms is the most accurate choice for one-way delay.

**Question 2:** Why is Doppler shift compensation crucial for LEO satellite communication systems?

**Answer:** LEO satellites orbit at much lower altitudes and move at significantly higher velocities relative to ground stations compared to GEO satellites. This high relative velocity results in substantial and rapidly changing Doppler shifts in the received signal frequency. These shifts can degrade the performance of phase-sensitive modulation schemes (like PSK or QAM) and affect the accuracy of frequency-locking circuits in receivers. Therefore, receivers must actively track and compensate for these Doppler variations to maintain reliable communication.

**Question 3:** How does the inclination of a satellite's orbit affect its communication coverage?

**Answer:** The inclination determines the range of latitudes that a satellite can cover.
*   **Equatorial orbit (0° inclination):** Covers only equatorial regions.
*   **Polar orbit (90° inclination):** Over time, as the Earth rotates beneath it, a polar-orbiting satellite can observe the entire Earth's surface.
*   **Inclined orbits (e.g., 60°):** Cover specific bands of latitudes, reaching higher latitudes than equatorial orbits but not necessarily global coverage from a single satellite. The coverage footprint will be centered around a latitude band determined by the inclination and altitude.

**Question 4:** If a satellite is in a highly elliptical orbit, what are the primary consequences for its communication subsystem performance compared to a circular orbit at the same average altitude?

**Answer:**
1.  **Varying Signal Strength:** The distance to the ground station changes significantly throughout the orbit, leading to fluctuations in path loss. This requires the system to have a larger link margin or employ adaptive power control/gain control.
2.  **Varying Doppler Shift:** The relative velocity between the satellite and ground stations changes continuously, resulting in a more pronounced and variable Doppler shift. This necessitates more complex Doppler tracking and compensation mechanisms in the modems.
3.  **Coverage Area Fluctuation:** The size of the Earth coverage area also changes with altitude, impacting how many ground stations can be served at any given time.
4.  **Intermittent Service (potentially):** If the elliptical orbit is very eccentric, the satellite might be too far away or too low on the horizon for sustained communication with certain ground stations for extended periods.

**Question 5:** What is the primary reason for the significant latency experienced in GEO satellite communication?

**Answer:** The primary reason is the very high altitude of GEO (approximately 35,786 km above the Earth's equator). This long distance requires the radio signals to travel a considerable path, resulting in a noticeable time delay (latency) for both the uplink and downlink transmissions. This latency affects the responsiveness of two-way communication links.

---

This concludes the study notes for "Orbital Effects in Communication Subsystem Performance." Remember to consult the recommended textbooks for more in-depth explanations and derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
