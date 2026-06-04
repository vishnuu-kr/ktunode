---
title: "system design for link without frequency reuse and system design for link with frequency reuse."
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 2: Satellite link design"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff320"
status: "completed"
scrapedAt: "2026-05-23T18:10:46.605Z"
---
# Satellite and Radar Communication - Module 2: Satellite Link Design

## Topic: System Design for Link Without Frequency Reuse and System Design for Link with Frequency Reuse

---

### **Introduction to Satellite Link Design (CO1, CO2 - K2, K3)**

Satellite link design is the process of determining the parameters of a satellite communication system to achieve a desired level of performance, typically measured by the Carrier-to-Noise ratio (C/N) or Energy per bit to Noise Power Spectral Density ratio (Eb/N0). This involves selecting appropriate components, power levels, antenna sizes, and modulation schemes for both the satellite and ground station.

**Key Concepts:**

*   **Uplink:** The transmission path from a ground station to the satellite.
*   **Downlink:** The transmission path from the satellite to a ground station.
*   **Carrier-to-Noise Ratio (C/N):** A fundamental parameter indicating the strength of the desired signal relative to the noise. Higher C/N generally leads to better signal quality.
*   **Energy per bit to Noise Power Spectral Density ratio (Eb/N0):** A measure of signal quality that accounts for the data rate. It is often preferred for digital systems as it directly relates to bit error rate (BER).
*   **Link Budget:** A detailed calculation of all the gains and losses in a communication link to determine the received signal strength and noise level.

**Pratt & Allnutt (3rd Ed., 2021):** Chapter 3, "Link Analysis" provides a foundational understanding of link budget calculations and the factors affecting C/N and Eb/N0.

---

### **1. System Design for Link Without Frequency Reuse (CO2 - K3)**

This approach assumes that a single frequency band is used for communication between Earth stations and the satellite, without employing techniques to reuse the same frequencies in different parts of the coverage area. This is typically simpler but offers limited spectral efficiency.

**Key Considerations and Design Steps:**

1.  **Define System Requirements:**
    *   **Service:** What type of service (e.g., voice, data, video)?
    *   **Data Rate:** The desired speed of data transmission.
    *   **Modulation and Coding Scheme:** Selection impacts spectral efficiency and required Eb/N0 for a given BER.
    *   **Availability:** The percentage of time the link is expected to be operational at the required performance level.
    *   **Bit Error Rate (BER):** The acceptable level of errors in the received data.

2.  **Uplink Design:**
    *   **Transmitter Power (Ground Station):** Determined by the required EIRP to overcome atmospheric losses and achieve the desired received signal power at the satellite.
    *   **Antenna Gain (Ground Station):** Depends on antenna size, aperture efficiency, and operating frequency.
    *   **Effective Isotropic Radiated Power (EIRP):** The product of transmitter power and antenna gain, effectively representing the radiated power in a specific direction.
    *   **Path Loss:** Attenuation of the signal as it travels through free space.
    *   **Atmospheric Losses:** Absorption and scattering by rain, clouds, and atmospheric gases.
    *   **Satellite Receiver Sensitivity:** The minimum signal power the satellite receiver can detect.
    *   **Noise Figure of Satellite Receiver:** Quantifies the noise introduced by the satellite's receiving system.
    *   **Uplink C/N:** Calculated based on the received carrier power at the satellite and the noise power in the receiver's bandwidth.

3.  **Downlink Design:**
    *   **Satellite Transmitter Power:** Limited by the satellite's power budget (e.g., solar panels, batteries).
    *   **Satellite Antenna Gain:** Depends on antenna design and beam coverage (e.g., global, spot beam).
    *   **EIRP (Satellite):** Crucial for the downlink, as it's limited by satellite power.
    *   **Path Loss:** Similar to the uplink.
    *   **Atmospheric Losses:** Can be more significant on the downlink due to rain fade at the ground station.
    *   **Ground Station Receiver Sensitivity:** Minimum signal power the ground station can detect.
    *   **Noise Figure of Ground Station Receiver:** Noise introduced by the ground station's receiving system.
    *   **Downlink C/N:** Calculated based on received carrier power at the ground station and noise power.

4.  **Overall Link C/N:**
    *   In a non-frequency reuse system, the overall C/N is often dominated by the uplink or downlink, whichever has the lower C/N.
    *   $C/N_{total} = (C/N_{uplink}^{-1} + C/N_{downlink}^{-1})^{-1}$

5.  **Eb/N0 Calculation:**
    *   Once C/N is known, Eb/N0 can be calculated using the relationship:
        $Eb/N0 = (C/N) \times (B/R_b)$
        where $B$ is the bandwidth and $R_b$ is the data rate.

**Example (Simplified):**

Let's design a simple downlink for a direct broadcast satellite (DBS) system.

*   **Satellite EIRP:** 55 dBW
*   **Path Loss:** 200 dB
*   **Ground Station Antenna Gain:** 30 dB
*   **Ground Station Receiver Noise Temperature:** 100 K
*   **System Bandwidth:** 36 MHz
*   **Data Rate:** 20 Mbps

**Calculations:**

*   **Received Signal Power at Ground Station:** $P_r = EIRP - Path Loss + G_{rx}$
    $P_r = 55 \text{ dBW} - 200 \text{ dB} + 30 \text{ dB} = -115 \text{ dBW} = -115 + 167 \text{ dBm} = 52 \text{ dBm}$
*   **Noise Power Spectral Density (N0):** $N_0 = k \times T_{sys}$
    where $k$ is Boltzmann's constant ($1.38 \times 10^{-23} \text{ J/K}$) and $T_{sys}$ is the system noise temperature.
    $N_0 = 1.38 \times 10^{-23} \text{ J/K} \times 100 \text{ K} = 1.38 \times 10^{-21} \text{ W/Hz}$
    In dBW/Hz: $N_0 = 10 \log_{10}(1.38 \times 10^{-21}) + 167 \text{ dBW/Hz} = -178.6 \text{ dBW/Hz}$
*   **Noise Power (N) in Bandwidth B:** $N = N_0 + 10 \log_{10}(B)$
    $N = -178.6 \text{ dBW/Hz} + 10 \log_{10}(36 \times 10^6 \text{ Hz}) = -178.6 \text{ dBW/Hz} + 75.56 \text{ dBHz} = -103.04 \text{ dBW}$
*   **Downlink C/N:** $C/N = P_r - N$
    $C/N = 52 \text{ dBm} - (-103.04 \text{ dBW}) = 52 \text{ dBm} + 103.04 \text{ dBW}$
    Convert $P_r$ to dBW: $52 \text{ dBm} = -98 \text{ dBW}$
    $C/N = -98 \text{ dBW} - (-103.04 \text{ dBW}) = 5.04 \text{ dB}$
*   **Eb/N0:** $Eb/N0 = (C/N) \times (B/R_b)$
    $Eb/N0 = (10^{5.04/10}) \times (36 \times 10^6 \text{ Hz} / 20 \times 10^6 \text{ bps}) = 3.47 \times 1.8 = 6.246$
    In dB: $Eb/N0 = 10 \log_{10}(6.246) \approx 7.96 \text{ dB}$

**Pratt & Allnutt (3rd Ed., 2021):** Chapter 3 provides detailed step-by-step calculations for link budgets for both uplink and downlink, considering various atmospheric conditions and system parameters.

---

### **2. System Design for Link with Frequency Reuse (CO2 - K3)**

Frequency reuse is a technique employed to increase the spectral efficiency of satellite communication systems. It involves using the same frequency bands in different geographic areas or at different polarizations within the same coverage area, thereby allowing multiple independent transmissions to occur simultaneously.

**Key Concepts and Techniques:**

*   **Spatial Frequency Reuse:** Dividing the satellite's coverage area into multiple smaller beams (e.g., spot beams) and assigning the same frequency band to non-adjacent beams. This relies on the fact that the antenna gain in the direction of a distant beam is low, minimizing interference.
*   **Polarization Frequency Reuse:** Utilizing the orthogonal polarization properties of electromagnetic waves. The same frequency band can be used simultaneously for two separate transmissions by assigning them to different polarization states (e.g., horizontal and vertical, or left-hand and right-hand circular polarization).

**Design Considerations for Frequency Reuse:**

1.  **Interference:** The primary challenge in frequency reuse systems is managing interference between co-channel users.
    *   **Co-channel Interference (CCI):** Interference received from other beams or polarizations operating on the same frequency.
    *   **Adjacent Channel Interference (ACI):** Interference from neighboring frequency channels, managed by channel filters.

2.  **Carrier-to-Interference Ratio (C/I):** This becomes a critical parameter in frequency reuse systems, in addition to C/N. The overall link performance is determined by both C/N and C/I.

3.  **Beam Design (Spatial Reuse):**
    *   **Number of Beams:** More beams allow for greater frequency reuse but require more complex onboard processing and ground station equipment.
    *   **Beam Isolation:** The degree to which signals from one beam are attenuated in another. This is crucial for minimizing CCI. Antenna design plays a vital role here.
    *   **Coverage Pattern:** The shape and size of the beams influence how the frequency reuse is implemented.

4.  **Polarization Isolation (Polarization Reuse):**
    *   **Polarization Purity:** The degree to which the transmitted signal is purely in the intended polarization state. Imperfect polarization purity can lead to cross-polarization interference.
    *   **Antenna Technology:** Orthomode transducers (OMTs) and dual-polarized antennas are essential for polarization reuse.

5.  **Link Budget Modifications:**
    *   The link budget must now include terms for interference power.
    *   The desired signal-to-interference ratio (S/I or C/I) is added as a requirement, often in conjunction with C/N.
    *   The combined ratio, often expressed as a "figure of merit" like (C/N) + (C/I), needs to meet the system's performance requirements.

6.  **Modulation and Coding:**
    *   Advanced modulation and coding schemes may be necessary to achieve the required Eb/N0 in the presence of interference, while also maintaining spectral efficiency.

**Pratt & Allnutt (3rd Ed., 2021):** Chapter 7, "Multiple Access Techniques," and Chapter 8, "Frequency Reuse," delve into the complexities of designing systems with frequency reuse, including spatial and polarization techniques, and their impact on interference and link performance.

**Tri, T. Ha (2nd Ed., 2017):** Chapter 6, "Digital Satellite Communication Systems," and Chapter 7, "Satellite Link Design," provide insights into the design trade-offs and calculations involved in frequency reuse.

**Example Scenario (Spatial Frequency Reuse):**

Consider a satellite covering a continent with a single wide beam. Without frequency reuse, all users in the continent share the same frequency band.

With spatial frequency reuse, the continent is divided into several spot beams. The satellite uses the same frequency band for two non-adjacent beams (e.g., beam A and beam C, while beams B and D use different frequencies).

*   **Beam A:** Transmits on Frequency F1, Polarization P1.
*   **Beam B:** Transmits on Frequency F2, Polarization P1.
*   **Beam C:** Transmits on Frequency F1, Polarization P1. (Non-adjacent to Beam A)
*   **Beam D:** Transmits on Frequency F2, Polarization P1. (Non-adjacent to Beam B)

**Challenges:**

*   Users in Beam A will experience interference from Beam C due to the shared frequency.
*   The satellite antenna must have sufficient isolation between beams A and C to keep the C/I ratio acceptable.

**Calculation Example (Adding Interference):**

Let's say for a specific link in Beam A:

*   Downlink C/N = 20 dB
*   Interference from Beam C (Co-channel Interference) is measured as C/I = 18 dB

The overall signal quality metric would be a combination of noise and interference. One common way to represent this is by converting both to power ratios and summing them:

*   $(C/N)_{power} = 10^{20/10} = 100$
*   $(C/I)_{power} = 10^{18/10} = 63.1$

Total Noise and Interference Power relative to Carrier Power:
$N_{total}/C = N/C + I/C = (1/100) + (1/63.1) = 0.01 + 0.0158 = 0.0258$

$(C/(N+I))_{power} = 1 / 0.0258 \approx 38.76$

In dB: $(C/(N+I))_{dB} = 10 \log_{10}(38.76) \approx 15.88 \text{ dB}$

This combined ratio of 15.88 dB needs to be compared against the required performance metric for the modulation and coding scheme.

---

### **Practice Questions and Exercises**

**Question 1:**

A satellite downlink operates with the following parameters:
Satellite EIRP = 45 dBW
Free-space path loss = 205 dB
Atmospheric losses = 2 dB
Ground station antenna gain = 35 dB
Ground station receiver noise temperature = 75 K
System bandwidth = 20 MHz
Data rate = 15 Mbps

Calculate the received signal power at the ground station and the downlink C/N ratio. Assume Boltzmann's constant $k = 1.38 \times 10^{-23}$ J/K. (CO2 - K3)

**Answer 1:**

*   **Received Signal Power ($P_r$):**
    $P_r = EIRP - \text{Path Loss} - \text{Atmospheric Losses} + G_{rx}$
    $P_r = 45 \text{ dBW} - 205 \text{ dB} - 2 \text{ dB} + 35 \text{ dB} = -127 \text{ dBW}$

*   **Noise Power Spectral Density ($N_0$):**
    $N_0 = k \times T_{sys}$
    $N_0 = 1.38 \times 10^{-23} \text{ J/K} \times 75 \text{ K} = 1.035 \times 10^{-21} \text{ W/Hz}$
    In dBW/Hz: $N_0 = 10 \log_{10}(1.035 \times 10^{-21}) + 167 \text{ dBW/Hz} \approx -179.85 \text{ dBW/Hz}$

*   **Noise Power (N) in Bandwidth B:**
    $B = 20 \text{ MHz} = 20 \times 10^6 \text{ Hz}$
    $N = N_0 + 10 \log_{10}(B)$
    $N = -179.85 \text{ dBW/Hz} + 10 \log_{10}(20 \times 10^6 \text{ Hz})$
    $N = -179.85 \text{ dBW/Hz} + 73.01 \text{ dBHz} = -106.84 \text{ dBW}$

*   **Downlink C/N Ratio:**
    $C/N = P_r - N$
    $C/N = -127 \text{ dBW} - (-106.84 \text{ dBW}) = -20.16 \text{ dB}$
    *(Note: A negative C/N indicates that noise power is greater than carrier power, which is an unacceptable link performance. This highlights the importance of proper link budgeting to ensure positive C/N values.)*

**Question 2:**

A satellite system employs polarization frequency reuse. Two beams operate on the same frequency band, one with horizontal polarization (H) and the other with vertical polarization (V). Both beams have a downlink C/N of 22 dB. However, due to imperfect polarization isolation, the beam with horizontal polarization experiences co-channel interference from the vertically polarized beam, resulting in a C/I ratio of 20 dB. Calculate the combined $(C/(N+I))$ ratio in dB for the horizontally polarized beam. (CO2 - K3)

**Answer 2:**

*   Convert ratios to power ratios:
    $(C/N)_{power} = 10^{22/10} = 158.49$
    $(C/I)_{power} = 10^{20/10} = 100$

*   Calculate the noise and interference power relative to the carrier power:
    $N/C = 1 / (C/N)_{power} = 1 / 158.49 \approx 0.00631$
    $I/C = 1 / (C/I)_{power} = 1 / 100 = 0.01$

*   Calculate the total noise and interference power relative to carrier power:
    $(N+I)/C = N/C + I/C = 0.00631 + 0.01 = 0.01631$

*   Calculate the combined $(C/(N+I))$ in power ratio:
    $(C/(N+I))_{power} = 1 / ((N+I)/C) = 1 / 0.01631 \approx 61.31$

*   Convert to dB:
    $(C/(N+I))_{dB} = 10 \log_{10}(61.31) \approx 17.87 \text{ dB}$

---

### **Important Points to Remember:**

*   **Link Budget is Key:** A thorough link budget is essential for both non-frequency reuse and frequency reuse systems to ensure adequate signal quality.
*   **Trade-offs:** System design involves balancing various parameters like power, antenna size, data rate, and spectral efficiency.
*   **Interference Management:** For frequency reuse, minimizing and managing co-channel interference (C/I) is as critical as managing noise (C/N).
*   **Atmospheric Effects:** Rain, fog, and other atmospheric phenomena can significantly impact link performance, especially at higher frequencies (e.g., Ka-band). Link design must account for these fading effects.
*   **Modulation and Coding:** The choice of modulation and coding scheme directly affects the required Eb/N0 for a given BER and influences spectral efficiency.
*   **Antenna Performance:** Antenna gain, beamwidth, and sidelobe levels are crucial for both signal strength and interference isolation, especially in frequency reuse scenarios.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **References:**

*   **Satellite Communications** by Timothy Pratt, Jeremy Allnutt (Wiley, 3rd Edition, 2021) - *Crucial for understanding link budgets and fundamental design principles.*
*   **Digital Satellite Communications** by Tri, T.Ha (McGraw-Hill Education, 2nd Edition, 2017) - *Provides insights into digital aspects of link design and frequency reuse.*
*   **Satellite Communications Systems Engineering** by Pritchard (Pearson Education, 2nd Edition, 2006) - *Offers a systems-level perspective on satellite communication design.*

*(Note: Skolnik's "Introduction to Radar Systems" and Edde's "Radar: Principles, Technology, Applications" are relevant for the Radar portion of the course but are not directly cited in this specific topic on satellite link design.)*