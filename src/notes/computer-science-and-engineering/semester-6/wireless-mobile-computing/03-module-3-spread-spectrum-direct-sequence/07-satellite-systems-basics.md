---
title: "Satellite Systems – Basics"
subject: "WIRELESS & MOBILE COMPUTING"
module: "Module 3: Spread spectrum – Direct sequence"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb84"
status: "completed"
scrapedAt: "2026-05-20T16:58:00.561Z"
---
## Wireless & Mobile Computing: Module 3 - Spread Spectrum (Direct Sequence)
### Topic: Satellite Systems – Basics

**Learning Outcomes:**

*   Understand the basic architecture of satellite communication systems.
*   Describe different satellite orbits and their characteristics (LEO, MEO, GEO).
*   Explain the applications of satellite communication.
*   Identify the advantages and disadvantages of satellite communication systems.
*   Understand the concept of satellite footprint and coverage.
*   Describe key satellite communication parameters like uplink, downlink, and transponder.

---

**1. Introduction to Satellite Communication Systems**

*   **Definition:** A satellite communication system is a wireless communication system that uses artificial satellites as relay stations to connect two or more ground stations (also called Earth stations).
*   **Key Components:**
    *   **Satellite:** The orbiting spacecraft containing transponders that receive, amplify, and retransmit signals.
    *   **Uplink:** The radio frequency (RF) link used to transmit signals from the ground station to the satellite.
    *   **Downlink:** The RF link used to transmit signals from the satellite to the ground station.
    *   **Ground Station (Earth Station):** A terrestrial station equipped with antennas and electronic equipment for transmitting and receiving signals to and from the satellite.  Can be fixed or mobile.
    *   **Transponder:** The electronic equipment on the satellite that receives the uplink signal, amplifies it, changes its frequency, and transmits it on the downlink frequency.  Multiple transponders can be present on a single satellite.
*   **Architecture Overview:** A ground station transmits an uplink signal to the satellite. The satellite's transponder processes the signal and retransmits it back to a different ground station via the downlink.

**2. Satellite Orbits**

Satellites are placed in different orbits around the Earth depending on the application and coverage requirements.  Key orbit types include:

*   **Geostationary Orbit (GEO):**
    *   **Altitude:** Approximately 35,786 km (22,236 miles) above the Earth's equator.
    *   **Period:** Orbit period matches the Earth's rotation period (approximately 24 hours).
    *   **Characteristics:** Appears stationary relative to a fixed point on Earth. One satellite can cover approximately one-third of the Earth's surface. Requires high-power transmission. Suffers from significant propagation delay.
    *   **Applications:** Television broadcasting, weather forecasting, and communication.
    *   **Advantages:**
        *   Fixed antenna direction.
        *   Wide coverage area.
    *   **Disadvantages:**
        *   High latency (propagation delay).
        *   High power requirements for uplink.
        *   Lower signal strength due to distance.
*   **Medium Earth Orbit (MEO):**
    *   **Altitude:** Approximately 2,000 km to 35,786 km.
    *   **Period:** Typically a few hours.
    *   **Characteristics:** Requires a constellation of satellites to provide continuous coverage. Lower propagation delay compared to GEO.
    *   **Applications:** GPS (Global Positioning System), Galileo.
    *   **Advantages:**
        *   Lower latency than GEO.
        *   Lower power requirements than GEO.
    *   **Disadvantages:**
        *   Requires a constellation of satellites.
        *   More complex tracking due to satellite movement.
        *   Smaller coverage area per satellite than GEO.
*   **Low Earth Orbit (LEO):**
    *   **Altitude:** Approximately 160 km to 2,000 km.
    *   **Period:** Approximately 90 minutes to 2 hours.
    *   **Characteristics:** Requires a large constellation of satellites for global coverage. Very low latency. Lower power requirements.
    *   **Applications:** Iridium, Globalstar (mobile communication), Earth observation, scientific research.
    *   **Advantages:**
        *   Very low latency.
        *   Low power requirements.
        *   High signal strength due to proximity.
    *   **Disadvantages:**
        *   Requires a large constellation of satellites.
        *   Complex tracking due to rapid satellite movement.
        *   Small coverage area per satellite.

**Important Points to Remember:**

*   Altitude and orbital period are inversely related: Lower altitudes result in shorter orbital periods.
*   The higher the altitude, the wider the coverage area of a single satellite, but also the higher the latency and required transmit power.
*   The choice of orbit depends on the specific application requirements, balancing coverage, latency, and cost.

**3. Applications of Satellite Communication**

*   **Telecommunications:** Voice, data, and video communication to remote areas or regions with underdeveloped terrestrial infrastructure.
*   **Broadcasting:** Television and radio broadcasting to a wide geographical area (e.g., satellite TV).
*   **Navigation:** GPS, Galileo, GLONASS (global navigation satellite systems) provide location and timing information.
*   **Earth Observation:** Remote sensing satellites collect data for weather forecasting, environmental monitoring, and resource management.
*   **Military Applications:** Secure communication, surveillance, and reconnaissance.
*   **Disaster Relief:** Providing communication infrastructure in areas affected by natural disasters.
*   **Internet Access:**  Providing broadband internet access to remote or underserved areas.

**4. Advantages and Disadvantages of Satellite Communication Systems**

*   **Advantages:**
    *   **Wide Coverage:** Can cover large geographical areas, including remote and sparsely populated regions.
    *   **Cost-Effective for Broadcasting:** Ideal for broadcasting signals to multiple receivers.
    *   **Independent of Terrestrial Infrastructure:** Useful in areas with limited or damaged terrestrial communication infrastructure.
    *   **Mobility:** Allows communication with mobile users.
*   **Disadvantages:**
    *   **High Initial Cost:**  Significant investment required for satellite construction, launch, and ground station infrastructure.
    *   **Propagation Delay:**  Significant latency, particularly with GEO satellites.
    *   **Environmental Factors:** Susceptible to atmospheric interference (rain fade), solar flares, and other space weather events.
    *   **Security Concerns:** Vulnerable to jamming and interception.
    *   **Complex Technology:** Requires specialized expertise for design, deployment, and maintenance.

**5. Satellite Footprint and Coverage**

*   **Satellite Footprint:** The area on the Earth's surface that a satellite's signal can reach.
*   **Coverage:** The total area covered by a satellite or a constellation of satellites.  Coverage is determined by the satellite's altitude, antenna design, and power.
*   **Factors Affecting Footprint Size:**
    *   **Altitude:** Higher altitude results in a larger footprint.
    *   **Antenna Beamwidth:** Wider beamwidth results in a larger footprint but lower signal strength per unit area.
    *   **Antenna Pointing:** Misalignment of the antenna can affect the footprint's location and shape.
*   **Spot Beams:**  Concentrated, narrow beams used to provide high signal strength and increased capacity in specific regions.  Used to increase frequency reuse.

**6. Key Satellite Communication Parameters**

*   **Uplink Frequency:** The frequency used for transmitting signals from the ground station to the satellite.
*   **Downlink Frequency:** The frequency used for transmitting signals from the satellite to the ground station.  Downlink frequency is different from uplink frequency to avoid interference.
*   **Transponder:** A repeater on the satellite that receives the uplink signal, amplifies it, converts its frequency, and retransmits it on the downlink frequency.  The number of transponders on a satellite determines its capacity.
*   **Bandwidth:** The range of frequencies available for communication.  Determines the data carrying capacity of the system.
*   **Effective Isotropic Radiated Power (EIRP):** The amount of power that a theoretical isotropic antenna would have to radiate to produce the same signal strength in the direction of maximum radiation as the actual antenna.
*   **Gain-to-Noise Temperature (G/T) Ratio:** A measure of the performance of a satellite receiver or ground station receiver.  A higher G/T ratio indicates better performance.
*   **Link Budget:**  A detailed calculation of all the gains and losses in a satellite communication link, used to determine the signal strength at the receiver and ensure reliable communication.

---

**Practice Questions & Exercises**

1.  **What are the three main components of a satellite communication system, and what is the function of each?**
    *   **Answer:** Satellite (repeater), Uplink (transmission from ground to satellite), Downlink (transmission from satellite to ground).
2.  **Describe the key characteristics of GEO, MEO, and LEO satellite orbits.  What are the advantages and disadvantages of each?**
    *   **Answer:** (See section 2 above for details)
3.  **Give three examples of applications for satellite communication.**
    *   **Answer:** Television broadcasting, GPS navigation, Broadband internet access.
4.  **Explain the concept of satellite footprint and how it relates to satellite coverage.**
    *   **Answer:** Satellite footprint is the area on Earth covered by the satellite's signal. Coverage is the total area covered by a satellite or constellation, determined by footprint size and location.
5.  **What is a transponder, and what role does it play in a satellite communication system?**
    *   **Answer:** A transponder is a repeater on the satellite that receives, amplifies, frequency-shifts, and retransmits the signal on the downlink. It is crucial for enabling communication.
6.  **Why is the downlink frequency different from the uplink frequency?**
    *   **Answer:** To prevent interference between the transmitted and received signals at the satellite.
7.  **List three advantages and three disadvantages of satellite communication systems.**
    *   **Answer:** (See section 4 above for details)

---

**Important Points to Remember (Recap):**

*   Satellite communication relies on satellites as relays to transmit signals over long distances.
*   GEO satellites offer wide coverage but high latency, while LEO satellites offer low latency but require large constellations.
*   The choice of orbit depends on the application and desired trade-offs between coverage, latency, and cost.
*   Satellite footprints determine the area covered by a satellite's signal.
*   Transponders are essential components that process and retransmit signals on the satellite.
*   Understanding uplink, downlink, and transponder characteristics is crucial for analyzing satellite communication links.
