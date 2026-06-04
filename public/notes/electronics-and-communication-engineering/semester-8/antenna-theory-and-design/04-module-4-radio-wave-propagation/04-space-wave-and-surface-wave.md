---
title: "Space wave and surface wave"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 4: Radio Wave Propagation"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7f3"
status: "completed"
scrapedAt: "2026-05-23T18:12:09.037Z"
---
# ANTENNA THEORY AND DESIGN

## Module 4: Radio Wave Propagation

### Topic: Space Wave and Surface Wave

---

### **Learning Outcomes Covered:**

*   **LO 4.1:** Explain the characteristics of space wave propagation.
*   **LO 4.2:** Describe the factors affecting space wave propagation.
*   **LO 4.3:** Explain the phenomenon of surface wave propagation.
*   **LO 4.4:** Analyze the conditions for surface wave propagation.
*   **LO 4.5:** Differentiate between space wave and surface wave propagation.

---

### **Course Outcomes Addressed:**

*   **CO4:** Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2).

---

### **Introduction**

Radio wave propagation describes how radio waves travel from a transmitting antenna to a receiving antenna. The nature of propagation depends heavily on the frequency of the radio wave, the characteristics of the transmitting and receiving antennas, and the properties of the Earth's surface and atmosphere. In this topic, we will delve into two fundamental modes of propagation: **space wave** and **surface wave**. Understanding these modes is crucial for effective antenna design and system planning.

---

### **1. Space Wave Propagation**

Space wave propagation, also known as **line-of-sight (LOS) propagation**, occurs when radio waves travel directly from the transmitting antenna to the receiving antenna without significant interaction with the Earth's surface or the ionosphere. This mode is dominant at **high frequencies (HF), VHF, UHF, and microwave frequencies**.

#### **1.1 Characteristics of Space Wave Propagation**

*   **Direct Path:** The wave travels in a straight line from transmitter to receiver.
*   **No Reflection/Refraction:** Minimal bending or reflection from the Earth's surface or the ionosphere.
*   **Line-of-Sight:** Requires an unobstructed path between the transmitting and receiving antennas.
*   **Frequency Dependent:** Becomes increasingly dominant as frequency increases.
*   **Antenna Height is Crucial:** The height of both transmitting and receiving antennas significantly impacts the range of communication.
*   **Refraction in Atmosphere:** While primarily a direct path, slight bending (refraction) due to atmospheric conditions can extend the range beyond the geometric horizon.

#### **1.2 Factors Affecting Space Wave Propagation**

*   **Antenna Height:**
    *   **Geometric Horizon:** The maximum distance a wave can travel in a straight line to a perfectly smooth Earth.
    *   The distance to the geometric horizon ($d_g$) from a height $h$ above the Earth's surface can be approximated by:
        $$d_g \approx \sqrt{2Rh}$$
        Where $R$ is the radius of the Earth (approximately 6371 km) and $h$ is the antenna height.
    *   For both transmitting and receiving antennas at heights $h_1$ and $h_2$, the maximum distance for LOS communication is:
        $$d_{max} \approx \sqrt{2Rh_1} + \sqrt{2Rh_2}$$
        *(Reference: Balanis, Chapter 7)*
*   **Earth's Curvature:** The spherical nature of the Earth limits the direct LOS range.
*   **Atmospheric Refraction:** The Earth's atmosphere has varying densities and refractive indices. This causes radio waves to bend or refract downwards, extending the effective range beyond the geometric horizon.
    *   **Effective Earth Radius (k-factor):** To account for standard atmospheric refraction, the Earth's radius ($R$) is often modified by an "effective Earth radius" ($R_e = kR$). The factor $k$ is typically around 4/3 (i.e., $R_e = 4R/3$), implying that the effective Earth's curvature is 4/3 times that of the actual Earth.
    *   With the effective Earth radius, the maximum communication distance becomes:
        $$d_{max,eff} \approx \sqrt{2R_ekh_1} + \sqrt{2R_ekh_2}$$
        *(Reference: Collins, Chapter 4)*
*   **Obstacles:**
    *   Buildings, mountains, trees, and other physical obstructions can block the direct path, causing signal attenuation or complete blockage.
    *   **Fresnel Zones:** These are elliptical regions between the transmitter and receiver. For good reception, the direct ray should not be significantly obstructed by these zones. Obstruction of more than 60% of the first Fresnel zone can cause significant signal degradation.
        *(Reference: Milligan, Chapter 4)*
*   **Antenna Polarization:** Polarization matching between transmitting and receiving antennas is crucial for optimal signal reception.
*   **Antenna Gain and Directivity:** Higher gain and more directive antennas can improve the signal strength and extend the range, especially when aimed accurately.
*   **Frequency:** Higher frequencies are less affected by atmospheric conditions and obstacles, making space wave propagation more reliable at these frequencies.

#### **1.3 Examples of Space Wave Propagation**

*   **VHF/UHF Television Broadcasting:** Transmitters are located on high towers, and receivers typically have antennas on rooftops or elevated positions to achieve LOS.
*   **Microwave Links:** Point-to-point communication using highly directional antennas (parabolic dishes) on towers.
*   **Satellite Communication:** Waves travel from Earth to a satellite and back.
*   **Wi-Fi and Mobile Phone Communication (Short to Medium Range):** While often influenced by reflections and scattering, the primary path is often line-of-sight or near-line-of-sight.

---

### **2. Surface Wave Propagation**

Surface wave propagation, also known as **ground wave propagation**, occurs when radio waves closely follow the curvature of the Earth's surface. This mode is primarily effective at **lower frequencies (LF, MF)**. The wave is guided by the Earth's surface, and its strength diminishes with increasing frequency and distance.

#### **2.1 Phenomenon of Surface Wave Propagation**

*   **Ground Wave:** The wave travels along the Earth's surface, hugging its contour.
*   **Interaction with Earth:** The wave has a component that couples with the Earth's surface and propagates along it.
*   **Diffraction:** The wave can bend around the curvature of the Earth, allowing communication beyond the geometric horizon.
*   **Frequency and Conductivity Dependence:** The effectiveness of surface wave propagation is strongly dependent on:
    *   **Frequency:** More effective at lower frequencies (LF, MF). Becomes negligible at VHF and above.
    *   **Earth's Conductivity:** Higher conductivity (e.g., sea water) leads to less attenuation. Lower conductivity (e.g., dry soil, rocky terrain) results in greater signal loss.
    *   **Earth's Permittivity (Dielectric Constant):** Affects the wave's interaction with the Earth.
*   **Antenna Height Influence:** While the wave follows the surface, the height of the transmitting antenna influences the initial launching of the wave and its subsequent interaction with the ground. For receiving antennas, height can influence how much of the ground wave is intercepted.
    *(Reference: Balanis, Chapter 7)*
    *(Reference: Collin, Chapter 4)*

#### **2.2 Conditions for Surface Wave Propagation**

*   **Low Frequencies:** Typically below 30 MHz (LF and MF bands).
*   **High Earth Conductivity:** Sea water and moist soil are good conductors.
*   **Transmitting Antenna Height:** While the wave follows the surface, the transmitting antenna is usually placed at a significant height to launch the wave effectively and ensure it couples with the ground. The polarization is usually **vertical** for efficient ground wave propagation. Horizontal polarization tends to be absorbed by the Earth.
    *(Reference: Kraus, Chapter 12)*
*   **Receiver Location:** The receiver is also located on the Earth's surface.

#### **2.3 Attenuation of Surface Waves**

Surface waves are subject to attenuation due to:

*   **Curvature of the Earth:** As the wave propagates further, the coupling with the ground decreases, and the wave spreads out.
*   **Earth's Non-Uniformity:** Variations in conductivity and dielectric constant along the path cause signal loss.
*   **Atmospheric Absorption:** While less significant than for sky waves, it can still play a role.

The attenuation rate is higher at higher frequencies and for lower conductivity Earth.

#### **2.4 Examples of Surface Wave Propagation**

*   **AM Radio Broadcasting (MF band):** This is the most common example. AM stations transmit at frequencies around 530-1710 kHz, and their signals can be heard over hundreds or even thousands of kilometers, especially at night, due to ground wave propagation (and also skywave propagation at night).
*   **Long-Range Military and Maritime Communication (LF band):** Used for very long-distance communication due to the excellent ground wave propagation characteristics at these low frequencies.

---

### **3. Comparison: Space Wave vs. Surface Wave**

| Feature                | Space Wave Propagation                               | Surface Wave Propagation                                   |
| :--------------------- | :--------------------------------------------------- | :--------------------------------------------------------- |
| **Frequency Range**    | VHF, UHF, Microwaves (above 30 MHz)                  | LF, MF (below 30 MHz)                                      |
| **Path**               | Direct line-of-sight, or near LOS                    | Follows Earth's curvature (ground hugging)                 |
| **Interaction with Earth** | Minimal; can be reflected or diffracted slightly     | Strong coupling and propagation along the surface          |
| **Dominant Mechanism** | Direct propagation, atmospheric refraction           | Diffraction around Earth's curvature, ground coupling      |
| **Antenna Height**     | Crucial for LOS range                                | Important for launching the wave, less critical for range beyond LOS |
| **Earth's Curvature**  | Limits the geometric horizon                         | Allows propagation beyond the geometric horizon            |
| **Earth's Properties** | Less significant (unless there are major obstructions) | Highly significant (conductivity and permittivity)         |
| **Polarization**       | Both Horizontal and Vertical are effective           | Primarily **Vertical** polarization is effective           |
| **Range**              | Limited by LOS (geometric horizon, effective horizon) | Can extend beyond LOS, especially at lower frequencies and higher conductivity |
| **Applications**       | TV broadcasting, FM radio, radar, satellite comms, mobile phones | AM radio broadcasting, long-range maritime/military comms |

*(Reference: Raju, Chapter 9)*

---

### **4. Advanced Considerations (Briefly)**

*   **Tropospheric Propagation:** At higher frequencies, refraction and reflection from irregularities in the troposphere (lower atmosphere) can extend the range beyond the normal LOS. This is sometimes considered a subset of space wave or a separate mode.
*   **Surface Wave with Antenna Height:** While surface waves are "ground hugging," the effective range and signal strength can be influenced by the height of the transmitting antenna. A taller antenna launches the wave with a steeper angle, allowing it to couple with the ground over a larger area, potentially improving coverage. However, the fundamental mechanism is still the wave propagating along the surface.

---

### **Important Points to Remember**

*   **Frequency is Key:** The choice between space wave and surface wave propagation is primarily dictated by the operating frequency.
*   **Line-of-Sight for Space Waves:** Always think of an unobstructed path for space wave.
*   **Ground Following for Surface Waves:** Visualize surface waves hugging the Earth.
*   **Antenna Height Matters for Both:** Although the impact differs, antenna height is a critical design parameter for both modes.
*   **Vertical Polarization for Surface Waves:** Crucial for efficient ground wave propagation.
*   **Earth's Properties are Paramount for Surface Waves:** Conductivity is the most significant factor.

---

### **Practice Questions and Exercises**

**Question 1:**
Which mode of propagation is predominantly used for FM radio broadcasting (88-108 MHz)?
a) Surface wave
b) Sky wave
c) Space wave
d) Ground wave

**Answer 1:**
c) Space wave

**Question 2:**
A transmitting antenna is placed at a height of 50 meters. If the Earth's radius is 6371 km, calculate the distance to the geometric horizon.
a) 25.4 km
b) 12.7 km
c) 31.8 km
d) 50.0 km

**Answer 2:**
Using the formula $d_g \approx \sqrt{2Rh}$:
$R = 6371 \text{ km} = 6.371 \times 10^6 \text{ m}$
$h = 50 \text{ m}$
$d_g \approx \sqrt{2 \times (6.371 \times 10^6 \text{ m}) \times 50 \text{ m}}$
$d_g \approx \sqrt{6.371 \times 10^8 \text{ m}^2}$
$d_g \approx 25240 \text{ m} = 25.24 \text{ km}$
The closest answer is (a) 25.4 km.

**Question 3:**
What are the two primary factors that influence the effectiveness of surface wave propagation?

**Answer 3:**
The two primary factors are:
1.  **Frequency:** Lower frequencies (LF, MF) are more effective.
2.  **Earth's Conductivity:** Higher conductivity (e.g., seawater) leads to less attenuation.

**Question 4:**
Explain why vertical polarization is preferred for surface wave propagation.

**Answer 4:**
Vertical polarization is preferred for surface wave propagation because it couples more effectively with the Earth's surface. The electric field lines of a vertically polarized wave are roughly parallel to the Earth's surface, allowing for better energy transfer and propagation along it. Horizontally polarized waves, with their electric field lines perpendicular to the direction of propagation and parallel to the Earth's surface, tend to induce currents that are more easily absorbed by the conductive Earth, leading to greater attenuation. *(Reference: Balanis, Chapter 7)*

**Question 5:**
A communication system operating at 150 MHz needs to communicate between two points separated by 50 km. The antennas are at heights of 20 m and 10 m respectively. Calculate the maximum possible distance for line-of-sight communication considering standard atmospheric refraction (k=4/3).

**Answer 5:**
We use the formula for the maximum distance with effective Earth radius: $d_{max,eff} \approx \sqrt{2R_ekh_1} + \sqrt{2R_ekh_2}$
Given:
$h_1 = 20 \text{ m}$
$h_2 = 10 \text{ m}$
$R = 6371 \text{ km} = 6.371 \times 10^6 \text{ m}$
$k = 4/3$
$R_e = kR = (4/3) \times (6.371 \times 10^6 \text{ m}) \approx 8.495 \times 10^6 \text{ m}$

$d_1 = \sqrt{2R_ekh_1} = \sqrt{2 \times (4/3) \times (6.371 \times 10^6 \text{ m}) \times 20 \text{ m}}$
$d_1 = \sqrt{1.066 \times 10^9 \text{ m}^2} \approx 32650 \text{ m} = 32.65 \text{ km}$

$d_2 = \sqrt{2R_ekh_2} = \sqrt{2 \times (4/3) \times (6.371 \times 10^6 \text{ m}) \times 10 \text{ m}}$
$d_2 = \sqrt{5.33 \times 10^8 \text{ m}^2} \approx 23087 \text{ m} = 23.09 \text{ km}$

$d_{max,eff} = d_1 + d_2 = 32.65 \text{ km} + 23.09 \text{ km} = 55.74 \text{ km}$

The communication distance required is 50 km, and the maximum possible LOS distance is approximately 55.74 km. Therefore, the communication is possible via space wave under these conditions, assuming no other obstructions.

---

This concludes the study notes for Space Wave and Surface Wave propagation. These concepts are fundamental to understanding how radio signals travel and are essential for antenna selection and placement in various communication systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
