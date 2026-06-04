---
title: "terrestrial interference"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 2: Satellite link design"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff31b"
status: "completed"
scrapedAt: "2026-05-23T18:10:42.569Z"
---
# SATELLITE AND RADAR COMMUNICATION

## Module 2: Satellite Link Design

## Topic: Terrestrial Interference

---

### **1. Introduction to Terrestrial Interference**

Terrestrial interference refers to unwanted radio frequency signals originating from ground-based (terrestrial) sources that can disrupt or degrade satellite communication links. These terrestrial sources can include a wide range of radio transmitters, such as:

*   **Radio and Television Broadcast Transmitters:** High-power terrestrial transmitters in adjacent or harmonic frequency bands can spill over into the satellite receive bands.
*   **Land Mobile Radio Systems:** Two-way radio communication systems used by public safety, businesses, and private users.
*   **Fixed Point-to-Point Microwave Links:** Dedicated terrestrial communication links that often operate in frequency bands close to satellite bands.
*   **Radar Systems:** Ground-based radar systems, particularly those operating in similar or harmonically related frequency bands.
*   **Industrial, Scientific, and Medical (ISM) Devices:** Devices like microwave ovens, wireless local area networks (WLANs), and certain industrial equipment that can emit spurious radiation.
*   **Satellite Earth Stations Themselves:** While the focus is on external terrestrial interference, interference *between* earth stations can also occur if not properly managed.

**Importance:** Understanding and mitigating terrestrial interference is crucial for ensuring the reliability, quality, and availability of satellite communication services. It directly impacts the signal-to-noise ratio (SNR) at the satellite receiver, which is a key parameter in satellite link design.

**Learning Outcome Alignment:** This section directly supports **CO1** (Illustrate the principles of satellite communication) by explaining a critical factor affecting signal reception.

---

### **2. Sources and Mechanisms of Terrestrial Interference**

Terrestrial interference can enter a satellite communication system through several mechanisms:

#### **2.1. Overlapping Frequency Bands**

The most direct cause of interference is when terrestrial transmitters operate in frequency bands that are adjacent to or overlap with the satellite communication bands.

*   **Example:** If a terrestrial microwave link operates in a frequency band very close to the uplink or downlink band used by a satellite, its signals can be picked up by the satellite earth station's antenna.

#### **2.2. Spurious Radiation**

Transmitting equipment is designed to radiate power in a specific frequency band. However, they also emit small amounts of power at frequencies outside their intended operating band. These are known as spurious emissions.

*   **Harmonics:** Multiples of the fundamental operating frequency.
*   **Spurious Components:** Unwanted emissions at any frequency other than harmonics or the fundamental.
*   **Intermodulation Products:** Generated when multiple signals mix in non-linear components of the transmitter or transmission path, creating new frequencies.

#### **2.3. Direct Illumination of Earth Station Antennas**

Terrestrial transmitters can directly illuminate the satellite earth station's parabolic antenna, causing interference. The main lobe or side lobes of a terrestrial antenna can point towards an earth station antenna.

*   **Pratt, Allnutt (3rd Ed., 2021):** Discusses antenna patterns and the susceptibility of side lobes to pick up off-axis signals. (Chapter 4 - Earth Station Antennas)

#### **2.4. Up-Path Interference**

This occurs when terrestrial transmitters interfere with the satellite's receive antenna.

*   **Mechanism:** The terrestrial transmitter's signal is received by the satellite's antenna, and if it falls within the satellite's receive bandwidth, it adds to the desired signal, increasing the noise floor.
*   **Impact:** This is particularly problematic for geostationary satellites as they have a broad field of view, and terrestrial signals from various locations can reach them.

#### **2.5. Down-Path Interference**

This occurs when terrestrial transmitters interfere with the satellite earth station's receive antenna.

*   **Mechanism:** The terrestrial transmitter's signal is received by the earth station's antenna, typically through its main beam or side lobes.
*   **Impact:** Directly degrades the received signal quality at the earth station.

#### **2.6. Out-of-Band Emissions**

Terrestrial transmitters may have emissions that fall outside their allocated bandwidth, which can then propagate into adjacent satellite frequency bands.

**Reference:** Skolnik (2nd Ed., 2017) touches upon unwanted emissions in radar systems, which is analogous to terrestrial interference sources. (Chapter 1 - Introduction to Radar)

**Important Point to Remember:** The susceptibility to interference is directly related to the bandwidth of the receiving system and the power levels of the interfering signals.

---

### **3. Quantifying Terrestrial Interference**

To design a satellite link that can tolerate terrestrial interference, we need to quantify its impact. This is typically done by introducing an interference-to-noise ratio (I/N) or by converting the interference power into an equivalent noise power.

#### **3.1. Interference Power (P_int)**

The power of the interfering signal received at the earth station or satellite. This depends on:

*   **Transmitter Power (P_tx):** The power output of the terrestrial transmitter.
*   **Antenna Gain of Transmitter (G_tx):** The gain of the terrestrial antenna in the direction of the satellite/earth station.
*   **Effective Isotropic Radiated Power (EIRP_tx):** $EIRP_{tx} = P_{tx} \times G_{tx}$
*   **Free Space Path Loss (FSPL):** The loss incurred as the signal propagates through space.
*   **Antenna Gain of Receiver (G_rx):** The gain of the satellite or earth station antenna in the direction of the terrestrial transmitter.
*   **Other Losses:** Atmospheric attenuation, polarization mismatch, etc.

#### **3.2. Equivalent Noise Temperature (T_int)**

A common way to represent interference is to convert its power into an equivalent noise temperature. If the interfering signal has a power $P_{int}$ and bandwidth $B$, it can be represented as a noise source with an equivalent noise temperature $T_{int}$ such that:

$P_{int} = k \times T_{int} \times B$

where:
*   $k$ is Boltzmann's constant ($1.38 \times 10^{-23}$ J/K).

This allows the interference power to be added to the thermal noise power in the link budget calculation.

#### **3.3. Carrier-to-Interference Ratio (C/I)**

This is a critical parameter used in link design. It represents the ratio of the desired signal power (carrier power, $P_c$) to the interfering signal power ($P_{int}$).

$C/I = P_c / P_{int}$

Alternatively, if expressed in dB:

$(C/I)_{dB} = P_{c,dB} - P_{int,dB}$

**Pratt, Allnutt (3rd Ed., 2021):** Provides detailed methods for calculating interference levels in link budgets and the importance of C/I. (Chapter 3 - Link Budget Calculation)

**CO2 Alignment:** This section directly supports **CO2** (Design and analysis of satellite link) by introducing key metrics used in the analysis.

---

### **4. Impact of Terrestrial Interference on Link Performance**

Terrestrial interference can significantly degrade the performance of a satellite link, leading to:

#### **4.1. Reduction in Signal-to-Noise Ratio (SNR) or Carrier-to-Noise Ratio (C/N)**

The most direct impact is the increase in the total noise power at the receiver. The total noise power is the sum of thermal noise and interference power.

$N_{total} = N_{thermal} + P_{int}$

The overall carrier-to-noise ratio becomes:

$C/N_{total} = P_c / (N_{thermal} + P_{int})$

This is often expressed in terms of the desired carrier-to-thermal noise ratio ($C/N_0$) and the carrier-to-interference ratio ($C/I_0$) per Hz:

$(C/N_0)_{total} = (C/N_0)_{thermal} + (C/I_0)_{interference}$

#### **4.2. Degradation of Bit Error Rate (BER)**

For digital satellite links, a reduced $C/N$ directly translates to a higher BER, meaning more errors in the transmitted data.

#### **4.3. Increased System Costs**

To overcome interference, designers may need to:

*   Use larger earth station antennas with narrower beamwidths to reduce susceptibility to off-axis signals.
*   Employ higher transmit power.
*   Use more sophisticated modulation and coding schemes that are more robust to noise and interference.
*   Implement frequency coordination and exclusion zones.

#### **4.4. Reduced Availability and Reliability**

High levels of interference can lead to intermittent outages or a complete loss of service, reducing the overall availability and reliability of the satellite communication system.

**Pratt, Allnutt (3rd Ed., 2021):** Discusses the relationship between $C/N$ and BER for various modulation schemes, highlighting how interference affects performance. (Chapter 5 - Digital Satellite Communications)

---

### **5. Mitigation Techniques for Terrestrial Interference**

Several techniques are employed to minimize or eliminate the impact of terrestrial interference:

#### **5.1. Frequency Coordination and Planning**

This is the most fundamental and proactive method. International and national regulatory bodies (e.g., ITU-R, FCC) manage spectrum allocation and assign frequencies to different services.

*   **Process:** Before establishing a new terrestrial or satellite service, extensive coordination is carried out to identify potential interference with existing services.
*   **Assignments:** Frequencies are assigned to minimize overlaps and ensure that power levels are within acceptable limits.
*   **Coordination Zones:** Designated areas around satellite earth stations where certain terrestrial transmissions may be restricted or require special authorization.

#### **5.2. Antenna Design and Siting**

*   **High-Gain Antennas with Low Side Lobes:** Using antennas with very narrow main beams and low side lobe levels reduces the antenna's ability to pick up off-axis terrestrial signals.
    *   **Example:** Parabolic dish antennas with careful feed design and reflector shaping.
*   **Site Selection:** Choosing earth station locations away from major terrestrial transmitters (e.g., airports, industrial areas, large cities) can significantly reduce interference.
    *   **Reference:** Pritchard (2nd Ed., 2006) emphasizes the importance of earth station site selection in system design. (Chapter 6 - Earth Station Engineering)

#### **5.3. Polarization Discrimination**

Using orthogonal polarizations for satellite and terrestrial links operating in the same frequency band can provide significant isolation.

*   **Example:** If a satellite link uses vertical polarization, a terrestrial link in the same frequency band could be assigned horizontal polarization.

#### **5.4. Power Control and Emission Limits**

*   **Terrestrial Transmitters:** Regulatory bodies enforce limits on the power and spurious emissions of terrestrial transmitters.
*   **Adaptive Power Control:** In some advanced systems, the power of terrestrial transmitters might be adjusted to reduce interference during critical periods.

#### **5.5. Filtering**

*   **Band-Pass Filters:** Earth station receivers can employ highly selective band-pass filters to reject signals outside the desired satellite communication channel. This helps remove out-of-band emissions and adjacent channel interference.

#### **5.6. Spread Spectrum Techniques**

Although less common for general satellite communication, spread spectrum techniques can make a signal more resistant to narrowband interference by spreading its energy over a wider bandwidth.

#### **5.7. Interference Cancellation Techniques**

More advanced signal processing techniques can be employed at the receiver to detect and attempt to cancel specific types of interference.

**Pratt, Allnutt (3rd Ed., 2021):** Discusses various antenna types and their radiation patterns, as well as signal processing techniques that can help mitigate interference. (Chapter 4 - Earth Station Antennas, Chapter 5 - Digital Satellite Communications)

---

### **6. Terrestrial Interference in Radar Systems (Briefly)**

While the primary focus is on satellite communication, it's worth noting that radar systems also face terrestrial interference, particularly from other radar systems and communication devices.

*   **Sources:** Other ground-based radars, airborne radars, and even high-power radio transmitters.
*   **Impact:** Can cause false targets, clutter, and degradation of detection performance.
*   **Mitigation:** Frequency agility, pulse compression, Doppler filtering, and sidelobe cancellation are common techniques.

**Skolnik (2nd Ed., 2017):** Provides extensive coverage of radar interference and jamming. (Chapter 14 - Electronic Countermeasures)
**Edde (1st Ed., 2004):** Also covers interference and jamming in radar systems. (Chapter 11 - Radar Interference and Countermeasures)

**CO3 & CO4 Alignment:** While this section is brief, it touches upon the principles of radar which is relevant to **CO3** and **CO4**. The general concept of interference affecting communication is universal.

---

### **7. Key Concepts and Definitions**

*   **Terrestrial Interference:** Unwanted radio signals from ground-based sources.
*   **Spurious Emissions:** Unwanted radio frequency energy emitted by radio transmitting equipment outside of its designated operating frequency band.
*   **EIRP (Effective Isotropic Radiated Power):** The power radiated by a transmitter, amplified by the antenna gain, assuming an isotropic antenna.
*   **FSPL (Free Space Path Loss):** The attenuation of a signal as it propagates through free space.
*   **I/N (Interference-to-Noise Ratio):** The ratio of interference power to noise power.
*   **C/I (Carrier-to-Interference Ratio):** The ratio of the desired signal power to the interfering signal power.
*   **BER (Bit Error Rate):** The number of bit errors per unit time or per unit length.
*   **Frequency Coordination:** The process of managing spectrum allocation to avoid interference.

---

### **8. Important Points to Remember**

*   Terrestrial interference is a significant factor in satellite link design that must be addressed proactively.
*   It is caused by a variety of ground-based radio transmitters operating in or near satellite frequency bands.
*   Interference degrades the $C/N$ ratio, leading to increased BER and reduced link performance.
*   Frequency coordination, careful site selection, and antenna design are crucial mitigation techniques.
*   Understanding the source, mechanism, and quantification of terrestrial interference is essential for successful satellite link design.

---

### **9. Practice Questions and Exercises**

**Question 1:**
What are the primary mechanisms by which terrestrial interference can affect a satellite communication link?

**Answer:**
Terrestrial interference can affect satellite links through:
1.  **Overlapping Frequency Bands:** Terrestrial transmitters operating in frequencies close to satellite bands.
2.  **Spurious Radiation:** Unwanted emissions from terrestrial transmitters (harmonics, intermodulation products).
3.  **Direct Illumination:** Terrestrial antennas (main beam or side lobes) pointing towards satellite earth station antennas or the satellite itself.
4.  **Up-Path Interference:** Terrestrial signals interfering with the satellite's receive antenna.
5.  **Down-Path Interference:** Terrestrial signals interfering with the earth station's receive antenna.
6.  **Out-of-Band Emissions:** Emissions from terrestrial transmitters extending beyond their allocated bandwidth.

**Question 2:**
A satellite earth station receives a desired signal with a power of -100 dBW. It also experiences terrestrial interference with a power of -110 dBW. Calculate the Carrier-to-Interference (C/I) ratio in dB.

**Answer:**
Given:
*   Carrier Power ($P_c$) = -100 dBW
*   Interference Power ($P_{int}$) = -110 dBW

The Carrier-to-Interference ratio in dB is calculated as:
$C/I_{dB} = P_c - P_{int}$
$C/I_{dB} = -100 \text{ dBW} - (-110 \text{ dBW})$
$C/I_{dB} = -100 + 110 \text{ dB}$
$C/I_{dB} = 10 \text{ dB}$

**Question 3:**
Explain the role of frequency coordination in mitigating terrestrial interference for satellite services.

**Answer:**
Frequency coordination is a proactive regulatory process where spectrum managers and service operators identify potential interference between existing and proposed radio services. For satellite communication, this involves:
*   **Allocating Spectrum:** Ensuring that terrestrial services do not operate in frequency bands that are critical for satellite uplinks or downlinks without adequate protection.
*   **Defining Coordination Zones:** Establishing geographical areas around satellite earth stations where terrestrial transmissions might require special permission or be restricted to lower power levels.
*   **Setting Emission Limits:** Enforcing strict limits on the spurious and out-of-band emissions of terrestrial transmitters to minimize their impact on adjacent satellite bands.
Through this process, potential conflicts are identified and resolved before services are deployed, significantly reducing the likelihood and severity of terrestrial interference.

**Question 4:**
How can antenna design contribute to mitigating terrestrial interference? (Relate to antenna patterns).

**Answer:**
Antenna design plays a crucial role through its radiation pattern:
*   **Narrow Beamwidth:** Antennas with a narrow main beam (like parabolic dishes used for satellite communication) are more directional and focus their reception (or transmission) in a specific direction. This reduces the likelihood of picking up signals from other directions.
*   **Low Side Lobes:** Side lobes are smaller radiation patterns that extend from the main beam. If terrestrial transmitters are located in a direction corresponding to a satellite earth station antenna's side lobe, interference can occur. By designing antennas with very low side lobes, the susceptibility to these off-axis signals is significantly reduced.
*   **Front-to-Back Ratio:** A high front-to-back ratio indicates good isolation between the main beam and the rear of the antenna, which can also help in rejecting signals originating from the ground directly behind the antenna.

---

This comprehensive study note covers the key aspects of terrestrial interference in satellite link design, aligning with the provided learning outcomes and referencing the suggested textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
