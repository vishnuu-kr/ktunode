---
title: "communication subsystem"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 1: Satellite orbit and orbital equations"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff8a0"
status: "completed"
scrapedAt: "2026-05-23T18:57:14.320Z"
---
# Satellite and Radar Communication

## Module 1: Satellite Orbit and Orbital Equations

### Topic: Communication Subsystem

**Knowledge Level (K2):** Illustrate the principles of satellite communication.

---

### 1. Introduction to Satellite Communication Subsystem

A satellite communication subsystem is the heart of any satellite system, responsible for transmitting and receiving signals between the ground and the satellite. It comprises various interconnected components that enable the relay of information across vast distances.

**Key Concept:** The communication subsystem's primary function is to establish a reliable and efficient link between Earth stations, often referred to as the "uplink" (ground to satellite) and "downlink" (satellite to ground).

**Reference:** Pratt & Allnutt, Chapter 2: "Satellite System Architecture" (discusses the overall structure and the role of the communication subsystem).

---

### 2. Core Components of the Communication Subsystem

The communication subsystem is typically divided into two main sections: the **transponder** (onboard the satellite) and the **ground station equipment** (on Earth).

#### 2.1 Transponder (Onboard the Satellite)

The transponder is the most critical part of the satellite's communication payload. It receives signals from the ground, amplifies them, changes their frequency, and retransmits them back to Earth.

**2.1.1 Antenna Subsystem:**
*   **Purpose:** To efficiently radiate and receive radio frequency (RF) signals in specific directions.
*   **Types:**
    *   **Omnidirectional Antennas:** Transmit/receive signals in all directions. Used for initial acquisition and wider coverage.
    *   **Directional Antennas (e.g., Parabolic Reflectors, Horn Antennas):** Focus RF energy in a specific beam, providing higher gain and narrower coverage. Essential for efficient transmission and reception.
*   **Key Parameters:** Gain, Beamwidth, Radiation Pattern.
*   **Reference:** Pratt & Allnutt, Chapter 3: "Satellite Antennas."

**2.1.2 Receiver Subsystem:**
*   **Purpose:** To capture the weak RF signals from the ground station, filter out unwanted noise and interference, and down-convert the signal to an intermediate frequency (IF) for further processing.
*   **Key Components:**
    *   **Low-Noise Amplifier (LNA):** Crucial for amplifying the very weak incoming signal with minimal added noise. This is a critical component for link budget calculations.
    *   **Mixer:** Down-converts the RF signal to an IF.
    *   **Filters:** Select the desired signal frequency band and reject out-of-band signals.
*   **Reference:** Pratt & Allnutt, Chapter 4: "Satellite Receivers."

**2.1.3 Frequency Converter (Transponder Channelizer):**
*   **Purpose:** To shift the incoming uplink frequency to a different downlink frequency. This prevents interference between the uplink and downlink signals.
*   **How it works:** Uses a local oscillator and a mixer.
*   **Example:** Uplink at 6 GHz, Downlink at 4 GHz (common in C-band satellites).
*   **Reference:** Ha, Chapter 3: "Transponder Design."

**2.1.4 Power Amplifier Subsystem:**
*   **Purpose:** To amplify the processed signal to a sufficient power level for transmission back to Earth.
*   **Types:**
    *   **Traveling-Wave Tube (TWT):** High-power, broadband amplifier.
    *   **Solid-State Power Amplifier (SSPA):** More efficient for lower power applications, becoming increasingly prevalent.
*   **Key Parameters:** Output Power, Efficiency, Linearity.
*   **Reference:** Pratt & Allnutt, Chapter 5: "Satellite Transmitters."

**2.1.5 Transmitter Subsystem:**
*   **Purpose:** To modulate the amplified signal onto the downlink carrier frequency and feed it to the antenna for transmission.

#### 2.2 Ground Station Equipment

Ground stations are responsible for transmitting signals to the satellite and receiving signals from it.

**2.2.1 Antennas:**
*   **Purpose:** Similar to satellite antennas but designed for Earth-based deployment, often with parabolic reflectors for high gain.
*   **Key Parameters:** Aperture size, Gain, Tracking capability.
*   **Reference:** Skolnik, Chapter 10: "Antennas."

**2.2.2 Transmitters:**
*   **Purpose:** To generate and amplify the uplink RF signal. Includes modulators, frequency converters, and power amplifiers.
*   **Reference:** Ha, Chapter 4: "Ground Station Equipment."

**2.2.3 Receivers:**
*   **Purpose:** To capture and process the downlink signals. Includes LNAs, mixers, filters, and demodulators.
*   **Reference:** Ha, Chapter 4: "Ground Station Equipment."

**2.2.4 Modulators and Demodulators:**
*   **Purpose:**
    *   **Modulator:** Imposes the information signal onto the carrier wave for transmission.
    *   **Demodulator:** Recovers the original information signal from the received carrier wave.
*   **Types of Modulation:** Amplitude Modulation (AM), Frequency Modulation (FM), Phase Modulation (PM), Digital Modulation schemes (PSK, QAM). The choice depends on bandwidth, noise immunity, and data rate requirements.
*   **Reference:** Pratt & Allnutt, Chapter 6: "Modulation and Multiplexing Techniques."

**2.2.5 Channelizers and Multiplexers:**
*   **Purpose:**
    *   **Channelizer:** Divides the available satellite bandwidth into smaller frequency channels, allowing multiple users or services to share the satellite's capacity.
    *   **Multiplexer:** Combines multiple signals for transmission over a single carrier or channel.
*   **Techniques:**
    *   **Frequency Division Multiplexing (FDM):** Divides bandwidth into frequency slots.
    *   **Time Division Multiplexing (TDM):** Divides time into slots for different users.
    *   **Code Division Multiplexing (CDM):** Uses unique codes to differentiate users.
*   **Reference:** Pratt & Allnutt, Chapter 6: "Modulation and Multiplexing Techniques."

---

### 3. Principles of Satellite Communication

The fundamental principle of satellite communication is to use a satellite in orbit as a relay station to establish communication links between widely separated points on Earth.

**3.1 Uplink and Downlink:**
*   **Uplink:** The radio link from a ground station to the satellite.
*   **Downlink:** The radio link from the satellite to a ground station.
*   **Frequency Bands:** Satellites operate in various frequency bands, each with different propagation characteristics and available bandwidth. Common bands include:
    *   **L-band (1-2 GHz):** Used for mobile satellite services.
    *   **S-band (2-4 GHz):** Used for mobile satellite services, weather radar.
    *   **C-band (4-8 GHz):** Widely used for satellite TV broadcasting and VSAT networks.
    *   **Ku-band (11-17 GHz):** Used for direct broadcast satellite (DBS) services, satellite broadband.
    *   **Ka-band (26-40 GHz):** Emerging for high-throughput satellites (HTS), offers larger bandwidth.
*   **Reference:** Pratt & Allnutt, Chapter 1: "Introduction to Satellite Communications."

**3.2 Satellite Orbits:**
The type of orbit significantly impacts communication system design.
*   **Geostationary Earth Orbit (GEO):**
    *   Altitude: ~35,786 km.
    *   Characteristics: Appears stationary relative to a point on Earth's surface. Provides continuous coverage to a specific region. Requires large antennas and has higher latency.
    *   Use: Broadcasting, fixed satellite services.
*   **Medium Earth Orbit (MEO):**
    *   Altitude: 2,000 - 35,786 km.
    *   Characteristics: Satellites move relative to Earth. A constellation is needed for continuous global coverage. Lower latency than GEO.
    *   Use: Navigation systems (GPS, GLONASS), some communication constellations (e.g., O3b).
*   **Low Earth Orbit (LEO):**
    *   Altitude: 160 - 2,000 km.
    *   Characteristics: Satellites move rapidly across the sky. A large constellation is required for continuous global coverage. Very low latency. Requires sophisticated handover mechanisms.
    *   Use: Satellite internet (Starlink, OneWeb), remote sensing, scientific missions.
*   **Reference:** Pratt & Allnutt, Chapter 2: "Satellite System Architecture" (discusses orbit types and their implications).

**3.3 Signal Propagation:**
*   **Free-Space Path Loss:** The primary cause of signal attenuation, which is the reduction in signal strength as it travels through space. It increases with distance and frequency.
*   **Atmospheric Effects:** Rain, fog, and atmospheric gases can cause attenuation and depolarization, especially at higher frequencies (Ku and Ka-bands).
*   **Reference:** Pratt & Allnutt, Chapter 7: "Satellite Link Design" (covers path loss and atmospheric effects).

---

### 4. Key Concepts and Definitions

*   **Transponder:** A unit on a satellite that receives, amplifies, and retransmits signals.
*   **Uplink:** Ground station to satellite.
*   **Downlink:** Satellite to ground station.
*   **Gain:** The ratio of output power to input power, usually expressed in decibels (dB).
*   **Noise Figure (NF):** A measure of the noise added by a component or system.
*   **Effective Isotropic Radiated Power (EIRP):** The product of the power supplied to the antenna and the antenna's gain in a given direction, measured in dBW.
*   **Figure of Merit (G/T):** The ratio of antenna gain to system noise temperature, a key parameter for receiver sensitivity, measured in dB/K.
*   **Latency (Propagation Delay):** The time it takes for a signal to travel from the transmitter to the receiver. It's primarily due to the speed of light and the distance.
*   **Bandwidth:** The range of frequencies a signal occupies.
*   **Carrier-to-Noise Ratio (C/N):** A measure of signal quality, indicating the ratio of the desired signal power to the noise power.
*   **Link Budget:** A calculation that accounts for all gains and losses in a communication link to determine the received signal strength and assess the feasibility of the link.
*   **Reference:** Pratt & Allnutt, Chapter 7: "Satellite Link Design."

---

### 5. Examples

*   **Broadcasting a TV signal:** A ground station transmits a TV signal to a GEO satellite in the Ku-band (e.g., 14 GHz uplink). The satellite transponder receives the signal, shifts it to a different frequency (e.g., 12 GHz downlink), amplifies it, and broadcasts it to many home receiving antennas (dishes) over a wide geographical area.
*   **Satellite Internet (LEO constellation):** A user on Earth sends data via a ground terminal to a LEO satellite. The satellite, as it moves, passes the data to another satellite in the constellation or directly to a ground gateway. This requires rapid handovers between satellites and ground stations.

---

### 6. Important Points to Remember

*   The communication subsystem is responsible for the actual transmission and reception of information.
*   Frequency conversion in the transponder is crucial to avoid self-interference.
*   The choice of orbit significantly impacts system design, coverage, and latency.
*   Antenna gain and system noise temperature (G/T) are critical parameters for satellite receiver performance.
*   EIRP is a measure of the power transmitted by the satellite in a specific direction.
*   Signal propagation losses (especially path loss) must be carefully accounted for in link budget calculations.
*   Modulation and multiplexing techniques determine the efficiency and capacity of the communication link.

---

### 7. Practice Questions

**Question 1 (CO1):** Briefly describe the main functions of the transponder onboard a satellite.

**Question 2 (CO1):** Differentiate between an uplink and a downlink in satellite communication.

**Question 3 (CO1):** What is the primary purpose of frequency conversion in a satellite transponder?

**Question 4 (CO1):** Name two types of satellite orbits and one advantage and disadvantage of each for communication systems.

**Question 5 (CO1):** Define EIRP and G/T and explain their significance in satellite communication.

---

### 8. Answers to Practice Questions

**Answer 1:** The main functions of a satellite transponder are to receive the weak RF signal from the ground station, amplify it, shift its frequency (to avoid interference between uplink and downlink), and retransmit it back to Earth with sufficient power.

**Answer 2:** An uplink is the communication link from a ground station on Earth to the satellite. A downlink is the communication link from the satellite back to a ground station on Earth.

**Answer 3:** The primary purpose of frequency conversion in a satellite transponder is to prevent interference between the strong uplink transmission and the weaker downlink transmission. By shifting the frequency, the receiver on the satellite and the transmitter on the satellite operate on different frequencies.

**Answer 4:**
*   **Geostationary Earth Orbit (GEO):**
    *   **Advantage:** Appears stationary from Earth, providing continuous coverage to a large geographical area, simplifying ground antenna tracking.
    *   **Disadvantage:** High altitude leads to significant latency (propagation delay) and requires higher power for transmission.
*   **Low Earth Orbit (LEO):**
    *   **Advantage:** Low altitude results in very low latency, making it suitable for real-time applications. Lower transmission power is required.
    *   **Disadvantage:** Satellites move rapidly, requiring a large constellation for continuous coverage and complex handover procedures between satellites and ground stations.

**Answer 5:**
*   **EIRP (Effective Isotropic Radiated Power):** It is the product of the power supplied to the antenna and the antenna's gain in a particular direction. It's a measure of how effectively a transmitting antenna is radiating power in a specific direction. Higher EIRP generally means a stronger signal can be sent to the receiver.
*   **G/T (Figure of Merit):** It is the ratio of the receiving antenna's gain to the system's noise temperature (Gain / Noise Temperature). It is a measure of the receiving system's sensitivity. A higher G/T indicates a better ability to receive weak signals in the presence of noise.

---
**Note:** This module focuses on the foundational understanding of the communication subsystem. Subsequent modules will delve deeper into link design, modulation schemes, and specific application aspects, directly contributing to CO2 and other course outcomes. The concepts presented here are essential for understanding how radar systems might also utilize similar principles for signal transmission and reception, although the applications and specific technologies differ.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
