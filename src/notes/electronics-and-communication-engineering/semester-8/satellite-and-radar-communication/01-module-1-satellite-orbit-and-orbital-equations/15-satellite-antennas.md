---
title: "satellite antennas."
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 1: Satellite orbit and orbital equations"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff8a1"
status: "completed"
scrapedAt: "2026-05-23T18:57:15.063Z"
---
# Module 1: Satellite Orbit and Orbital Equations - Topic: Satellite Antennas

## 1. Introduction to Satellite Antennas

Satellite antennas are crucial components of a satellite communication system, responsible for transmitting and receiving radio frequency (RF) signals between the satellite and ground stations. Their design and performance significantly impact the overall link budget and communication quality.

### 1.1 Purpose of Satellite Antennas

*   **Transmission:** To radiate RF signals from the satellite towards the Earth's surface (downlink).
*   **Reception:** To capture RF signals transmitted from Earth's surface to the satellite (uplink).
*   **Focusing Energy:** To concentrate the radiated power in a specific direction, maximizing signal strength towards the intended ground stations and minimizing interference to other areas.
*   **Directivity:** To ensure that the antenna beam is precisely pointed towards the desired coverage area.

### 1.2 Key Antenna Parameters (Pratt, Allnutt, Ch. 5)

Understanding these parameters is essential for analyzing antenna performance in satellite links.

*   **Radiation Pattern:**
    *   **Definition:** A graphical representation of how the antenna radiates or receives energy in different directions. It typically plots the power or field strength as a function of angle.
    *   **Types:**
        *   **Isotropic Antenna:** Radiates equally in all directions (theoretical, not realizable).
        *   **Omnidirectional Antenna:** Radiates equally in a plane, but can be directional in another.
        *   **Directional Antenna:** Concentrates radiation in a specific direction.
    *   **Key Features:**
        *   **Main Lobe:** The direction of maximum radiation.
        *   **Sidelobes:** Minor lobes in directions other than the main lobe. Lower sidelobes are desirable to reduce interference.
        *   **Nulls:** Directions where radiation is zero or near zero.

*   **Gain (G):**
    *   **Definition:** A measure of how effectively an antenna concentrates radiated power in a specific direction compared to an isotropic antenna. It's a dimensionless quantity, often expressed in decibels (dB).
    *   **Formula:** $G = \eta (\frac{4\pi A_e}{\lambda^2})$ where $\eta$ is the aperture efficiency, $A_e$ is the effective aperture area, and $\lambda$ is the wavelength.
    *   **Relationship to Directivity (D):** $G = \eta D$. Gain accounts for losses (efficiency), while directivity is a purely geometric property.
    *   **Importance:** Higher gain allows for stronger signals at the receiver, reducing the need for higher transmitter power or more sensitive receivers. This is crucial for satellite communication due to vast distances.

*   **Directivity (D):**
    *   **Definition:** The ratio of the radiation intensity in a given direction to the average radiation intensity over all directions. It's a measure of the antenna's ability to focus energy.
    *   **Formula:** $D = \frac{U_{max}}{U_{avg}}$, where $U_{max}$ is the maximum radiation intensity and $U_{avg}$ is the average radiation intensity.
    *   **Relation to Beamwidth:** Higher directivity generally implies narrower beamwidths.

*   **Beamwidth (BW):**
    *   **Definition:** The angular width of the main lobe of the radiation pattern. It's usually specified as the angle between the points where the radiation intensity drops to half the maximum value (Half-Power Beamwidth, HPBW).
    *   **Importance:** A narrow beamwidth is desirable for focusing the signal towards a specific ground station, improving link efficiency and reducing interference. Conversely, a wide beamwidth is needed for broadcasting to a large geographical area.

*   **Effective Aperture ($A_e$):**
    *   **Definition:** The effective area of the antenna that captures electromagnetic energy. It's related to the physical size of the antenna and its efficiency.
    *   **Formula:** $A_e = \eta A$, where $\eta$ is the aperture efficiency and $A$ is the physical aperture area.
    *   **Relationship to Gain:** $G = \frac{4\pi A_e}{\lambda^2}$. This formula highlights that gain is proportional to the effective aperture and inversely proportional to the square of the wavelength.

*   **Polarization:**
    *   **Definition:** The orientation of the electric field vector of the electromagnetic wave.
    *   **Types:**
        *   **Linear Polarization:** Electric field oscillates along a straight line (e.g., vertical, horizontal).
        *   **Circular Polarization:** Electric field vector rotates in a circle (e.g., right-hand circular polarization - RHCP, left-hand circular polarization - LHCP).
        *   **Elliptical Polarization:** The electric field vector traces out an ellipse.
    *   **Importance:** Matching polarization between transmitting and receiving antennas is crucial for maximum signal transfer. In satellite communication, circular polarization is often used to mitigate Faraday rotation (rotation of polarization in the ionosphere) and allows for frequency reuse by using orthogonal polarizations (RHCP and LHCP) on the same frequency.

*   **Efficiency ($\eta$):**
    *   **Definition:** The ratio of power delivered to the antenna terminals to the power radiated by the antenna. It accounts for losses within the antenna structure itself (e.g., conductor losses, dielectric losses).
    *   **Types:**
        *   **Radiation Efficiency:** Ratio of radiated power to power delivered to the antenna terminals.
        *   **Aperture Efficiency:** Measures how uniformly the aperture is illuminated and accounts for blockage by the feed.

## 2. Types of Satellite Antennas

The choice of antenna type depends on the satellite's mission, coverage requirements, and frequency band.

### 2.1 By Radiation Pattern

*   **Omnidirectional Antennas:**
    *   **Description:** Radiate power equally in all directions in a plane, typically with a donut-shaped radiation pattern.
    *   **Usage:** Used for broadcasting to a very wide area, such as during initial satellite deployment or for simple telemetry and command.
    *   **Examples:** Dipole antennas, certain types of helix antennas.
    *   **Limitations:** Low gain, inefficient for targeted communication.

*   **Directional Antennas:**
    *   **Description:** Focus power into a specific beam, offering higher gain.
    *   **Usage:** The most common type for satellite communication.
    *   **Subtypes:**

        *   **Spot Beam Antennas:**
            *   **Description:** Produce a narrow, high-gain beam that covers a small geographical area (a "spot").
            *   **Usage:** High-capacity satellites serving specific regions, cellular backhaul, broadband services. Multiple spot beams can be used to cover different regions.
            *   **Advantages:** Higher gain, reduced interference, frequency reuse across different spots.
            *   **Example:** Phased array antennas can electronically steer spot beams.

        *   **Coverage Antennas (e.g., Earth Coverage Antennas):**
            *   **Description:** Designed to cover a large geographical region, such as an entire continent or hemisphere.
            *   **Usage:** Broadcasting to a wide audience, early satellite systems.
            *   **Advantages:** Wide coverage.
            *   **Limitations:** Lower gain compared to spot beams.
            *   **Examples:** Horn antennas, parabolic reflectors with wide beam illumination.

### 2.2 By Physical Design

*   **Parabolic Reflector Antennas:**
    *   **Description:** Consist of a parabolic dish that reflects and focuses electromagnetic waves. A feed antenna (e.g., horn, dipole) is placed at the focal point.
    *   **Usage:** Widely used for both satellite and ground station antennas due to their high gain and efficiency.
    *   **Types:**
        *   **Prime Focus:** Feed is placed at the focal point.
        *   **Cassegrain:** A sub-reflector is used to redirect the signal from the main reflector to a feed located behind the main reflector. This reduces blockage from the feed and allows for a more compact design.
        *   **Gregorian:** Similar to Cassegrain but uses a different sub-reflector shape.
    *   **Advantages:** High gain, good directivity, relatively simple design.
    *   **Disadvantages:** Can be bulky, sensitive to pointing errors, blockage from feed in prime focus. (Pratt, Allnutt, Ch. 5)

*   **Horn Antennas:**
    *   **Description:** A simple waveguide structure that flares out to match the impedance of free space, allowing efficient radiation of electromagnetic waves.
    *   **Usage:** Often used as feed antennas for parabolic reflectors, or as standalone antennas for simpler applications like telemetry and command.
    *   **Types:**
        *   **Pyramidal Horn:** Rectangular flare.
        *   **Conical Horn:** Circular flare.
        *   **Corrugated Horn:** Provides improved radiation patterns with low sidelobes and symmetrical beamwidth.
    *   **Advantages:** Simple to manufacture, robust, good bandwidth, can be designed for specific beamwidths.
    *   **Disadvantages:** Lower gain compared to large reflectors.

*   **Phased Array Antennas:**
    *   **Description:** Consist of multiple small antenna elements arranged in an array. The phase of the signal fed to each element is controlled electronically to steer the main beam without mechanical movement.
    *   **Usage:** Modern satellites for flexible coverage, electronic scanning, forming multiple beams.
    *   **Advantages:** Rapid beam steering, ability to form multiple beams simultaneously, no moving parts, potentially higher reliability.
    *   **Disadvantages:** Complex electronics, higher cost, can be susceptible to element failures. (Pratt, Allnutt, Ch. 5)

*   **Helical Antennas:**
    *   **Description:** Consist of a helical conductor. Can operate in normal mode (short helix) or axial mode (long helix).
    *   **Usage:** Axial mode helical antennas are known for producing circular polarization and have a relatively broad beam. Used for telemetry, command, and sometimes as main antennas in specific applications.
    *   **Advantages:** Produces circular polarization, good for dealing with Faraday rotation.
    *   **Disadvantages:** Moderate gain, wider beamwidth compared to reflectors.

## 3. Antenna Selection and Considerations for Satellite Systems

Choosing the right antenna involves balancing various factors related to the satellite's mission and the communication link.

### 3.1 Coverage Requirements (CO1)

*   **Global Coverage:** Requires antennas with wide beamwidths, potentially multiple antennas, to cover the entire Earth's surface visible from the satellite.
*   **Regional Coverage:** Uses antennas with moderate beamwidths to cover continents or large regions.
*   **Spot Coverage:** Employs high-gain, narrow-beam antennas to focus on specific areas, enabling frequency reuse and higher data rates.
*   **Contiguous Coverage:** Ensuring no gaps in the service area.

### 3.2 Frequency Bands (Pratt, Allnutt, Ch. 5)

*   **L-band (1-2 GHz):** Larger antennas are needed for a given beamwidth due to longer wavelengths. Used for mobile satellite services.
*   **C-band (4-8 GHz):** Common for traditional satellite TV and communication. Antenna sizes are moderate.
*   **Ku-band (11-17 GHz):** Allows for smaller antennas on both the satellite and ground segment due to shorter wavelengths. Used for broadband and direct broadcast services.
*   **Ka-band (26-40 GHz):** Enables even smaller antennas and higher data rates, but is more susceptible to atmospheric attenuation (rain fade).

### 3.3 Antenna Gain and Beamwidth Trade-off

*   A higher gain generally means a narrower beamwidth.
*   For broadcasting to a wide area, a wider beamwidth with lower gain is needed.
*   For targeted communication with specific ground stations, a narrower beamwidth with higher gain is preferred.

### 3.4 Polarization Considerations

*   **Orthogonal Polarization:** Using RHCP and LHCP on the same frequency allows for frequency reuse, doubling the capacity. This is a key aspect of modern satellite systems.
*   **Faraday Rotation:** The ionosphere can rotate the polarization of linearly polarized signals. Circularly polarized antennas are less affected by this.

### 3.5 Environmental Factors and Reliability

*   **Space Environment:** Antennas must withstand vacuum, temperature extremes, and radiation.
*   **Deployment Mechanisms:** For large reflector antennas, reliable deployment mechanisms are critical.
*   **Pointing Accuracy:** Directional antennas require precise pointing towards ground stations.

### 3.6 Link Budget Implications (CO2)

Antenna gain is a direct input into the satellite link budget equation.

*   **Uplink and Downlink Gain:** The gain of both the transmitting and receiving antennas on the satellite and ground station contribute to the received signal strength.
*   **Effective Isotropic Radiated Power (EIRP):** For the satellite, $EIRP = P_T \cdot G_T$, where $P_T$ is the transmitter power and $G_T$ is the transmitting antenna gain. Higher EIRP leads to a stronger signal at the ground station.
*   **Receive Antenna Sensitivity:** Higher receiving antenna gain on the ground station increases the received signal power, improving the signal-to-noise ratio (SNR).

## 4. Radar Antennas (Brief Mention in Context of Satellite Communication - CO3)

While this module primarily focuses on satellite communication, it's worth noting that satellites can also carry radar payloads.

*   **Radar Antennas:** Designed to transmit pulses and receive reflected signals from targets.
*   **Key Differences:** Radar antennas often need to scan large areas rapidly and may have specific requirements for beam shape and sidelobe levels to distinguish targets and avoid clutter.
*   **Examples of Radar Antennas on Satellites:** Synthetic Aperture Radar (SAR) antennas are often large, planar arrays that achieve high resolution by synthesizing a large aperture through the satellite's motion.

**Important Note:** While the course outcomes mention radar, the specific learning outcomes for this topic are focused on satellite antennas. The detailed study of radar antennas is likely covered in other modules.

## 5. Summary of Key Points

*   Satellite antennas are critical for transmitting and receiving RF signals.
*   Key antenna parameters include radiation pattern, gain, beamwidth, polarization, and efficiency.
*   Gain and beamwidth are crucial for link performance, with a trade-off between them.
*   Common satellite antenna types include parabolic reflectors, horns, and phased arrays.
*   Coverage requirements (global, regional, spot) dictate the antenna's beam characteristics.
*   Polarization is vital for frequency reuse and mitigating ionospheric effects.
*   Antenna gain directly impacts the EIRP and received signal strength in the link budget.

## 6. Practice Questions and Answers

**Question 1:**
Explain the importance of antenna gain in satellite communication. If a satellite antenna has a gain of 20 dB, what is its gain in linear terms?

**Answer:**
Antenna gain in satellite communication is crucial because it allows the antenna to focus radiated power in a specific direction, increasing the signal strength received by the ground station. This higher signal strength improves the signal-to-noise ratio (SNR), allowing for higher data rates and more reliable communication over the long distances involved in satellite links. It also enables the use of lower transmitter power on the satellite or less sensitive receivers on the ground.

Gain in linear terms:
$Gain_{linear} = 10^{(Gain_{dB}/10)} = 10^{(20/10)} = 10^2 = 100$.
So, a gain of 20 dB corresponds to a linear gain of 100.

**Question 2:**
What is the primary advantage of using spot beam antennas on a satellite compared to earth coverage antennas? (CO1)

**Answer:**
The primary advantage of spot beam antennas is their **higher gain** and **narrower beamwidth**. This allows them to focus a significant amount of power onto a smaller geographical area, leading to:
*   **Increased signal strength:** Enabling higher data rates or allowing smaller ground terminals.
*   **Reduced interference:** By transmitting only within a specific region, interference with other services or satellite beams is minimized.
*   **Frequency Reuse:** Multiple spot beams can operate on the same frequency band by covering different, non-overlapping areas, thus increasing the overall system capacity.

**Question 3:**
Describe the trade-off between antenna gain and beamwidth in satellite antennas.

**Answer:**
There is an inherent trade-off between antenna gain and beamwidth. Generally, for a given physical size and operating frequency:
*   **Higher Gain:** Achieved by concentrating the radiated power into a narrower beam. This means the antenna is highly directional, pointing its energy precisely in one direction.
*   **Wider Beamwidth:** Associated with lower gain. The antenna radiates power over a broader angular region, covering a larger geographical area but with less intensity in any single direction.

For example, an antenna designed for global coverage (wide beamwidth) will have lower gain, while an antenna designed for a specific city (narrow beamwidth) will have much higher gain.

**Question 4:**
Why is circular polarization often preferred over linear polarization in satellite communication systems? (CO1)

**Answer:**
Circular polarization is often preferred over linear polarization in satellite communication for two main reasons:
1.  **Mitigation of Faraday Rotation:** The ionosphere can rotate the plane of polarization of linearly polarized radio waves. This rotation, known as Faraday rotation, can cause a mismatch between the transmitting and receiving antenna polarizations, leading to signal loss. Circularly polarized waves are unaffected by Faraday rotation.
2.  **Frequency Reuse:** By using two orthogonal circular polarizations (right-hand circular polarization - RHCP, and left-hand circular polarization - LHCP), the same frequency band can be used twice for independent communication channels without significant interference between them. This effectively doubles the capacity of the satellite system.

## 7. Important Points to Remember

*   **Gain is Key:** Higher gain directly translates to a stronger signal at the receiver.
*   **Beamwidth Defines Coverage:** Narrow beams for specific spots, wide beams for broad coverage.
*   **Parabolic Reflectors Dominate:** For high gain and efficiency.
*   **Phased Arrays Offer Flexibility:** For electronic beam steering and multiple beams.
*   **Polarization Matters:** For frequency reuse and overcoming ionospheric effects.
*   **Antenna Choice is Mission-Dependent:** Balance coverage, gain, frequency, and cost.

---

This concludes the study notes for Satellite Antennas in Module 1. Remember to refer to your textbooks for more in-depth details and derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
