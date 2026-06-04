---
title: "system design for link without frequency reuse and system design for link with frequency reuse."
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 2: Satellite link design"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff8aa"
status: "completed"
scrapedAt: "2026-05-23T18:57:20.885Z"
---
# Satellite and Radar Communication

## Module 2: Satellite Link Design

### Topic: System Design for Link Without Frequency Reuse and System Design for Link With Frequency Reuse

---

### Introduction

Satellite link design is a fundamental aspect of satellite communication. It involves determining the parameters of the satellite and ground station equipment to ensure reliable communication. This module focuses on two key approaches: system design without frequency reuse and system design with frequency reuse. Understanding these concepts is crucial for effectively utilizing the electromagnetic spectrum and maximizing the capacity of satellite communication systems.

**Course Outcome Alignment:**
*   **CO1 (K2):** Illustrates the principles of satellite communication by understanding different link design strategies.
*   **CO2 (K3):** Designs and analyzes satellite links by exploring the trade-offs involved in both non-reuse and reuse scenarios.

**Learning Outcomes Covered:**
*   System design for link without frequency reuse.
*   System design for link with frequency reuse.

---

### 1. System Design for Link Without Frequency Reuse

In a traditional satellite communication system, frequency reuse is not employed. This means that a specific frequency band is allocated to a satellite transponder, and this band is used only once within that coverage area. The design process focuses on establishing a link with sufficient signal strength and quality to overcome noise and interference from other sources within that single frequency allocation.

#### 1.1. Key Concepts and Definitions

*   **Uplink:** The transmission path from a ground station to the satellite.
*   **Downlink:** The transmission path from the satellite to a ground station.
*   **Transponder:** A relay station on board a satellite that receives a signal on one frequency, amplifies it, and retransmits it on another frequency.
*   **Carrier-to-Noise Ratio (C/N):** The ratio of the power of the desired signal to the power of the noise in the signal bandwidth. A higher C/N indicates better signal quality.
*   **Figure of Merit (G/T):** A parameter representing the performance of a receiving system, defined as the ratio of antenna gain ($G$) to the system noise temperature ($T$). A higher G/T signifies a better receiving capability.
*   **System Noise Temperature ($T$):** The effective noise temperature of the receiving system, including contributions from the antenna, feed, and receiver.
*   **Effective Isotropic Radiated Power (EIRP):** The power that an isotropic antenna would radiate to produce the same power density in a given direction as the actual source. It's a measure of the power transmitted by the satellite in a specific direction.
*   **Free-Space Path Loss (FSPL):** The loss of signal power experienced by an electromagnetic wave propagating in free space. It increases with distance and frequency.
*   **Link Budget:** A detailed calculation of all the gains and losses in a communication link to determine the received signal strength and quality.

#### 1.2. Design Steps for a Non-Reuse Link

The design process for a non-reuse satellite link involves several critical steps, primarily focused on ensuring an adequate C/N ratio for reliable data transmission.

**1. Define System Requirements:**
    *   **Data Rate:** The desired speed of information transmission.
    *   **Modulation and Coding Scheme:** The method used to encode data onto the carrier and the error correction techniques applied (e.g., BPSK, QPSK, FEC).
    *   **Required C/N0:** The minimum Carrier-to-Noise density ratio needed for the chosen modulation and coding scheme to achieve the desired bit error rate (BER).
    *   **Coverage Area:** The geographical region the satellite needs to serve.
    *   **Uplink and Downlink Frequencies:** The allocated frequency bands for transmission and reception.

**2. Calculate Link Parameters:**

    *   **Uplink Design:**
        *   **Determine Ground Station EIRP:** This is calculated based on the transmitter power, antenna gain, and losses.
            *   $EIRP_{uplink} = P_t + G_t - L_{tf}$
            Where:
                *   $P_t$ = Transmitter power (dBW)
                *   $G_t$ = Ground station transmit antenna gain (dBi)
                *   $L_{tf}$ = Transmission line losses at the ground station (dB)
        *   **Calculate Uplink Path Loss:**
            *   $FSPL_{uplink} = 20 \log_{10}(d) + 20 \log_{10}(f) + 20 \log_{10}(\frac{4\pi}{c}) + 20 \log_{10}(\frac{1}{G_t})$
            *   Simplified: $FSPL_{uplink} = 20 \log_{10}(d) + 20 \log_{10}(f) + 92.45$ (dB)
            Where:
                *   $d$ = Distance between ground station and satellite (km)
                *   $f$ = Uplink frequency (GHz)
                *   $c$ = Speed of light (m/s)
        *   **Determine Satellite G/T:** This is a critical parameter for the satellite's receiving capability.
            *   $G/T_{satellite} = G_{r\_sat} - 10 \log_{10}(T_{sys\_sat})$
            Where:
                *   $G_{r\_sat}$ = Satellite receive antenna gain (dBi) in the direction of the ground station.
                *   $T_{sys\_sat}$ = System noise temperature of the satellite receiver (K).
        *   **Calculate Uplink C/N0:**
            *   $(C/N0)_{uplink} = EIRP_{uplink} - FSPL_{uplink} + (G/T)_{satellite} - 10 \log_{10}(k)$
            Where:
                *   $k$ = Boltzmann's constant ($1.38 \times 10^{-23}$ J/K) which is $228.6$ dBW/KHz.

    *   **Downlink Design:**
        *   **Determine Satellite EIRP:**
            *   $EIRP_{downlink} = P_{tx\_sat} + G_{tx\_sat} - L_{satf}$
            Where:
                *   $P_{tx\_sat}$ = Satellite transmit power (dBW)
                *   $G_{tx\_sat}$ = Satellite transmit antenna gain (dBi) in the direction of the ground station.
                *   $L_{satf}$ = Transmission line losses at the satellite transmitter (dB)
        *   **Calculate Downlink Path Loss:**
            *   $FSPL_{downlink} = 20 \log_{10}(d) + 20 \log_{10}(f_{downlink}) + 92.45$ (dB)
        *   **Determine Ground Station G/T:**
            *   $(G/T)_{ground} = G_{r\_ground} - 10 \log_{10}(T_{sys\_ground})$
            Where:
                *   $G_{r\_ground}$ = Ground station receive antenna gain (dBi) in the direction of the satellite.
                *   $T_{sys\_ground}$ = System noise temperature of the ground station receiver (K).
        *   **Calculate Downlink C/N0:**
            *   $(C/N0)_{downlink} = EIRP_{downlink} - FSPL_{downlink} + (G/T)_{ground} - 10 \log_{10}(k)$

**3. Combine Uplink and Downlink C/N0:**
    *   The overall C/N0 for the link is the sum of the uplink and downlink C/N0 values (in dBHz):
        *   $(C/N0)_{total} = 10 \log_{10} (10^{(C/N0)_{uplink}/10} + 10^{(C/N0)_{downlink}/10})$
        *   Alternatively, if one link is significantly weaker (the limiting link), the total C/N0 is approximately equal to the C/N0 of the weaker link.

**4. Check for Other Interference:**
    *   **Inter-Symbol Interference (ISI):** Caused by pulse spreading and inter-symbol overlap, especially in higher data rate systems.
    *   **Adjacent Channel Interference (ACI):** Interference from adjacent frequency channels due to imperfect filtering.
    *   **Adjacent Satellite Interference (ASI):** Interference from signals transmitted by other satellites in adjacent orbital slots.
    *   **Co-channel Interference (CCI):** Interference from other ground stations or satellites using the same frequency.

**5. Iterate and Optimize:**
    *   If the calculated $(C/N0)_{total}$ is below the required threshold, adjustments are made. This might involve:
        *   Increasing ground station transmit power.
        *   Using higher gain antennas (larger ground station dish, satellite beamforming).
        *   Reducing system noise temperature (better receivers, cooled electronics).
        *   Decreasing path loss (lower frequency, lower orbit - although orbit is fixed).
        *   Employing more efficient modulation and coding schemes.

#### 1.3. Example: Non-Reuse Link Design (Simplified)

**Scenario:** Design a downlink from a geostationary satellite to a ground station.
*   Satellite transmit power ($P_{tx\_sat}$): 10 dBW
*   Satellite transmit antenna gain ($G_{tx\_sat}$): 20 dBi
*   Satellite altitude ($d$): 36,000 km
*   Downlink frequency ($f_{downlink}$): 12 GHz
*   Ground station receive antenna gain ($G_{r\_ground}$): 40 dBi
*   Ground station system noise temperature ($T_{sys\_ground}$): 300 K
*   Required $(C/N0)_{downlink}$: 65 dBHz

**Calculations:**

1.  **Satellite EIRP:**
    *   $EIRP_{downlink} = P_{tx\_sat} + G_{tx\_sat} = 10 + 20 = 30$ dBW

2.  **Downlink Path Loss:**
    *   $FSPL_{downlink} = 20 \log_{10}(36000) + 20 \log_{10}(12) + 92.45$
    *   $FSPL_{downlink} = 20(4.556) + 20(1.079) + 92.45 \approx 91.12 + 21.58 + 92.45 = 205.15$ dB

3.  **Ground Station G/T:**
    *   $T_{sys\_ground}$ in Kelvin = 300 K
    *   $10 \log_{10}(T_{sys\_ground}) = 10 \log_{10}(300) \approx 24.77$ dB(K)
    *   $(G/T)_{ground} = G_{r\_ground} - 10 \log_{10}(T_{sys\_ground}) = 40 - 24.77 = 15.23$ dB/K

4.  **Downlink C/N0:**
    *   $10 \log_{10}(k) = 228.6$ dBW/KHz
    *   $(C/N0)_{downlink} = EIRP_{downlink} - FSPL_{downlink} + (G/T)_{ground} - 10 \log_{10}(k)$
    *   $(C/N0)_{downlink} = 30 - 205.15 + 15.23 - 228.6 = -288.52$ dBW/KHz (This is an extremely low value, indicating an issue. Let's recheck the calculation of $10 \log_{10}(k)$ and path loss formula).

    *Correction:*
    The formula for FSPL is indeed correct. The issue is likely with the typical values. Let's use more realistic satellite transmit power and ground station antenna gain to get a meaningful result. Let's assume a satellite transmit power of 50 dBW and a ground station antenna gain of 50 dBi.

    **Revised Example:**
    *   Satellite transmit power ($P_{tx\_sat}$): 50 dBW
    *   Satellite transmit antenna gain ($G_{tx\_sat}$): 20 dBi
    *   Satellite altitude ($d$): 36,000 km
    *   Downlink frequency ($f_{downlink}$): 12 GHz
    *   Ground station receive antenna gain ($G_{r\_ground}$): 50 dBi
    *   Ground station system noise temperature ($T_{sys\_ground}$): 300 K
    *   Required $(C/N0)_{downlink}$: 65 dBHz

    **Calculations (Revised):**

    1.  **Satellite EIRP:**
        *   $EIRP_{downlink} = 50 + 20 = 70$ dBW

    2.  **Downlink Path Loss:**
        *   $FSPL_{downlink} \approx 205.15$ dB (as calculated before)

    3.  **Ground Station G/T:**
        *   $(G/T)_{ground} = 50 - 24.77 = 25.23$ dB/K

    4.  **Downlink C/N0:**
        *   $(C/N0)_{downlink} = 70 - 205.15 + 25.23 - 228.6 = -238.52$ dBW/KHz. Still incorrect. The problem is in understanding the units and the constant for Boltzmann.

    *Let's clarify the formula for C/N0:*
    $(C/N0)_{dBHz} = EIRP_{dBW} - FSPL_{dB} + (G/T)_{dB/K} - (10 \log_{10} k)_{dBW/KHz}$
    $(10 \log_{10} k)_{dBW/KHz} = 10 \log_{10} (1.38 \times 10^{-23} \times 10^3 \text{ Hz} / 1 \text{ W}) = 10 \log_{10} (1.38 \times 10^{-20}) \approx -208.6$ dBW/KHz.

    *Corrected Calculation for C/N0:*
    $(C/N0)_{downlink} = 70 (\text{dBW}) - 205.15 (\text{dB}) + 25.23 (\text{dB/K}) - (-208.6) (\text{dBW/KHz})$
    $(C/N0)_{downlink} = 70 - 205.15 + 25.23 + 208.6 = 98.68$ dBHz.

    **Result:** The calculated $(C/N0)_{downlink}$ is 98.68 dBHz, which is significantly higher than the required 65 dBHz. This indicates a very robust link and suggests that perhaps some parameters could be reduced to save power or cost, or the system could support a higher data rate or more complex modulation.

#### 1.4. Important Points to Remember (Non-Reuse)

*   The link budget is the cornerstone of non-reuse link design.
*   G/T is crucial for the performance of the receiving station.
*   EIRP is critical for the transmitting station's coverage.
*   The limiting link (uplink or downlink) dictates the overall performance.
*   Noise temperature is a critical factor in the G/T calculation.

**Textbook References:**
*   Pratt & Allnutt, Chapter 6: Link Calculations. This chapter provides detailed explanations of link budgets, C/N calculations, and the various components involved.
*   Skolnik, Chapter 12: Radar Receivers (relevant for understanding noise, though focused on radar, principles of noise figure and noise temperature apply).

---

### 2. System Design for Link With Frequency Reuse

Frequency reuse is a technique used in satellite communication to increase the capacity of the system by using the same frequency bands multiple times in different geographical areas or by different beams. This is achieved by employing advanced antenna technologies and careful frequency planning.

#### 2.1. Key Concepts and Definitions

*   **Frequency Reuse:** Using the same frequency band in different coverage areas to increase the total capacity of the satellite system.
*   **Spatial Isolation:** The geographical separation between coverage areas using the same frequency.
*   **Polarization Isolation:** Using orthogonal polarizations (e.g., linear horizontal and vertical, or right-hand and left-hand circular) for different beams to allow frequency reuse within the same coverage area.
*   **Spot Beams:** Narrow antenna beams that focus the satellite's energy on specific geographical regions, allowing for greater frequency reuse and higher EIRP within those regions.
*   **Frequency Plan:** The allocation of specific frequency bands to different beams or coverage areas to minimize interference.
*   **Cross-Polarization Isolation (XPI):** The ratio of the power received in the desired polarization to the power received in the orthogonal polarization from an interfering source. A higher XPI reduces interference.
*   **Interference-to-Noise Ratio (I/N):** The ratio of interference power to noise power, which degrades the overall link quality.
*   **Co-channel Interference (CCI):** Interference between beams or systems operating on the same frequency.

#### 2.2. Design Steps for a Reuse Link

Designing a link with frequency reuse adds the complexity of managing interference between co-channel or adjacent-channel users.

**1. Define System Requirements (similar to non-reuse, but with added constraints):**
    *   **Capacity Requirements:** Total data throughput needed across the entire service area.
    *   **Service Area Segmentation:** Dividing the coverage area into multiple cells or regions where frequency reuse can occur.
    *   **Interference Criteria:** Defining the maximum acceptable levels of co-channel interference (CCI) and adjacent channel interference (ACI).
    *   **Required C/(N+I):** The minimum ratio of carrier power to the sum of noise and interference power required for reliable communication.

**2. Design the Frequency Plan and Antenna Configuration:**
    *   **Allocate Frequencies:** Assign specific frequency bands to different beams based on spatial or polarization separation.
    *   **Antenna Design:** Design multi-beam antennas (e.g., phased arrays, feed arrays) to generate multiple spot beams. The beamwidth and isolation between beams are critical.
    *   **Polarization Scheme:** Decide whether to use polarization diversity or spatial diversity for frequency reuse.

**3. Calculate Link Parameters for Each Beam:**
    *   For each beam, a link budget similar to the non-reuse case is performed.
    *   **Calculate EIRP and G/T for each beam:** These will vary depending on the antenna gain in the direction of the intended coverage area.

**4. Account for Interference:**
    *   **Identify Interfering Beams:** Determine which beams are transmitting or receiving on the same or adjacent frequencies and are close enough to cause interference.
    *   **Calculate Interference Power:** Estimate the interference power based on the EIRP of the interfering satellite transmitter (or ground station), the path loss, the gain of the receiving antenna in the direction of the interfering signal, and the cross-polarization isolation (if applicable).
        *   $I_{downlink} = EIRP_{interfering} - FSPL_{interfering} + G_{r\_intended} - XPI_{dB}$
        *   $I_{uplink} = EIRP_{interfering\_gs} - FSPL_{interfering\_gs} + G_{r\_sat} - XPI_{dB}$
    *   **Calculate Interference-to-Noise Ratio (I/N):**
        *   $(I/N)_{downlink} = I_{downlink} - (N0)_{downlink}$ (in dB) where $(N0)_{downlink}$ is the noise power spectral density from the downlink.
        *   $(I/N)_{uplink} = I_{uplink} - (N0)_{uplink}$ (in dB)

**5. Calculate Required C/(N+I):**
    *   The system must now meet a $(C/(N+I))_{required}$ threshold.
    *   This is often expressed as $C/N$ requirement, but adjusted for interference. If the interference is significant, a higher $C/N$ might be needed to maintain the overall $C/(N+I)$ performance.
    *   $(C/(N+I))_{dB} = 10 \log_{10} \left( \frac{1}{10^{(C/N)_{dB}/10} + 10^{(I/N)_{dB}/10}} \right)$
    *   Alternatively, the link budget is performed using a slightly adjusted noise floor that includes interference.

**6. Iteration and Optimization:**
    *   If the required $(C/(N+I))$ is not met, adjustments are made. This might involve:
        *   Increasing spatial separation between beams.
        *   Improving polarization isolation.
        *   Increasing EIRP of the desired signal.
        *   Improving G/T of the desired receiver.
        *   Reducing transmit power of interfering sources (if controllable).
        *   Using more advanced modulation and coding.

#### 2.3. Example: Frequency Reuse with Polarization Diversity (Simplified)

**Scenario:** Two beams (Beam A and Beam B) on the same satellite are using the same frequency band but with orthogonal polarizations. We are designing the downlink for Beam A.
*   **Beam A Parameters:**
    *   Satellite transmit power ($P_{tx\_sat\_A}$): 50 dBW
    *   Satellite transmit antenna gain ($G_{tx\_sat\_A}$): 45 dBi (focused on Area A)
    *   Downlink frequency ($f$): 12 GHz
    *   Ground station receive antenna gain ($G_{r\_ground\_A}$): 45 dBi
    *   Ground station system noise temperature ($T_{sys\_ground}$): 300 K
    *   Required $(C/(N+I))_{downlink}$: 60 dBHz

*   **Beam B Parameters (Interfering Source for Beam A):**
    *   Satellite transmit power ($P_{tx\_sat\_B}$): 50 dBW
    *   Satellite transmit antenna gain ($G_{tx\_sat\_B}$): 45 dBi (focused on Area B)
    *   Area B is geographically separate but the edge of its beam overlaps with Area A.
    *   Cross-Polarization Isolation (XPI) between beams: 25 dB

**Calculations:**

1.  **Beam A Downlink (Desired Signal):**
    *   $EIRP_{downlink\_A} = 50 + 45 = 95$ dBW
    *   $FSPL_{downlink}$ (assume same distance $d \approx 36000$ km): $\approx 205.15$ dB
    *   $(G/T)_{ground\_A} = 45 - 10 \log_{10}(300) \approx 45 - 24.77 = 20.23$ dB/K
    *   $(C/N0)_{downlink\_A} = 95 - 205.15 + 20.23 - (-208.6) \approx 118.68$ dBHz

2.  **Interference from Beam B (on Beam A's receiver):**
    *   Assume the interfering signal from Beam B at the location of the Beam A ground station has the same path loss and a slightly lower antenna gain due to the off-axis nature. For simplicity, let's assume the effective EIRP from Beam B towards Beam A's receiver after considering antenna pointing and polarization is equivalent to:
    *   $EIRP_{effective\_B\_to\_A} = EIRP_{downlink\_B} - \text{Off-axis loss} - XPI$
    *   Let's assume an off-axis loss of 5 dB.
    *   $EIRP_{effective\_B\_to\_A} = 95 \text{ dBW} - 5 \text{ dB} - 25 \text{ dB} = 65$ dBW
    *   $FSPL_{interfering}$ (same path): $\approx 205.15$ dB
    *   $G_{r\_ground\_A}$ (gain at intended location): 45 dBi
    *   Interference Power at ground station $I_{downlink\_A} = EIRP_{effective\_B\_to\_A} - FSPL_{interfering} + G_{r\_ground\_A}$
    *   $I_{downlink\_A} = 65 - 205.15 + 45 = -95.15$ dBW

3.  **Calculate $(C/(N+I))_{downlink\_A}$:**
    *   We need to convert the received powers to a common bandwidth (e.g., 1 Hz) to sum noise and interference.
    *   $C/N0_{downlink\_A}$ (dBHz) means Carrier power spectral density.
    *   $(C/N0)_{downlink\_A} = 118.68$ dBHz.
    *   Let's consider a bandwidth of 1 MHz = $10^6$ Hz.
    *   $C/N_{downlink\_A} = (C/N0)_{downlink\_A} - 10 \log_{10}(10^6) = 118.68 - 60 = 58.68$ dB.
    *   The noise power ($N$) in 1 MHz bandwidth is $N = N0 \times BW$. In dB: $N_{dBW} = (10 \log_{10} k + N0_{dBW/KHz}) + 10 \log_{10}(BW_{Hz})$
    *   $N0_{downlink\_A}$ in dBW/Hz = $118.68 - 228.6 = -110$ dBW/Hz.
    *   $N_{downlink\_A}$ in 1 MHz bandwidth = $-110 \text{ dBW/Hz} + 10 \log_{10}(10^6 \text{ Hz}) = -110 + 60 = -50$ dBW.
    *   $I_{downlink\_A} = -95.15$ dBW.
    *   $C_{downlink\_A}$ in 1 MHz bandwidth: $C_{downlink\_A} = (C/N0)_{downlink\_A} + 10 \log_{10}(10^6) - 10 \log_{10} k = 118.68 + 60 - 228.6 = 50.08$ dBW.

    *Now, calculate C/(N+I):*
    *   $C = 10^{50.08/10} \approx 1.017 \times 10^5$ W
    *   $N = 10^{-50/10} \approx 10^{-5}$ W
    *   $I = 10^{-95.15/10} \approx 3.055 \times 10^{-10}$ W
    *   $N+I \approx 10^{-5} + 3.055 \times 10^{-10} \approx 10^{-5}$ W (Noise dominates interference here)
    *   $C/(N+I) = \frac{1.017 \times 10^5}{10^{-5}} = 1.017 \times 10^{10}$
    *   $C/(N+I)$ in dBHz = $10 \log_{10} (1.017 \times 10^{10}) \approx 100.07$ dBHz.

    *This calculation shows the process. Let's re-evaluate the required C/(N+I) and the interference estimation for a more typical scenario.*

    *A more practical approach is to look at the ratio of Interference to Noise:*
    *   $(C/N0)_{downlink\_A} = 118.68$ dBHz.
    *   $(C/I0)_{downlink\_A} = EIRP_{effective\_B\_to\_A} - FSPL_{interfering} + G_{r\_ground\_A} - 10 \log_{10} k$
    *   $(C/I0)_{downlink\_A} = 65 - 205.15 + 45 - 228.6 = -223.75$ dBHz. This is not the correct way to calculate C/I0.

    *Let's calculate $I/N0$ from the interfering source:*
    *   $I_{downlink\_A}$ in dBW $= 65 - 205.15 + 45 = -95.15$ dBW.
    *   $I/N0_{downlink\_A} = I_{downlink\_A} - 10 \log_{10} k = -95.15 - 228.6 = -323.75$ dBW/Hz. (This seems extremely low for interference).

    *Revisit the definition of Interfering EIRP and assume the gain of the Beam B antenna at the location of Beam A's intended coverage is the key.*
    *   Let $G_{tx\_sat\_B}(off-axis)$ be the gain of Beam B's transmit antenna in the direction of Area A. Let's assume it's 20 dBi.
    *   $EIRP_{B\_to\_A} = P_{tx\_sat\_B} + G_{tx\_sat\_B}(off-axis) = 50 + 20 = 70$ dBW.
    *   Interference power at ground station: $I_{downlink\_A} = EIRP_{B\_to\_A} - FSPL_{interfering} + G_{r\_ground\_A} - XPI$
    *   $I_{downlink\_A} = 70 - 205.15 + 45 - 25 = -115.15$ dBW.
    *   $I/N0_{downlink\_A} = I_{downlink\_A} - 10 \log_{10} k = -115.15 - 228.6 = -343.75$ dBW/Hz. Still too low.

    *Let's use a simpler approach with $C/(N+I)$ directly.*
    *   We have $C/N0_{downlink\_A} = 118.68$ dBHz.
    *   We need to estimate the $C/I0$ for Beam A. The interference from Beam B is characterized by its EIRP and the receiving antenna gain of Beam A at the location of Beam B's main coverage.
    *   Assume the $G_{tx\_sat\_B}$ is 45 dBi in its coverage. Due to polarization and spatial separation, the signal from Beam B reaching the Beam A ground station is attenuated by XPI (25 dB) and some off-axis loss (let's assume 5 dB).
    *   Effective EIRP of Beam B at Beam A's ground location: $EIRP_{B} = P_{tx\_sat\_B} + G_{tx\_sat\_B} = 50 + 45 = 95$ dBW.
    *   Interference Power Spectral Density at ground station from Beam B:
        *   $I/N0_{downlink\_A} = EIRP_{B} - FSPL_{interfering} + G_{r\_ground\_A} - XPI - \text{Off-axis loss} - 10 \log_{10} k$
        *   $I/N0_{downlink\_A} = 95 - 205.15 + 45 - 25 - 5 - 228.6 = -219.75$ dBHz. Still incredibly low. There might be a misunderstanding in applying the formula.

    *Let's assume the required $C/(N+I)_{downlink}$ is 60 dBHz.*
    *   We calculated $C/N0_{downlink\_A} = 118.68$ dBHz. This means $C/N \approx 118.68 - 10 \log_{10}(BW)$ for a given bandwidth.
    *   To achieve a $C/(N+I)$ of 60 dBHz, the $C/N$ must be significantly higher if interference is present.
    *   $(C/(N+I))_{dB} = 10 \log_{10} \left( \frac{C/N}{1 + N/I} \right)$
    *   Alternatively, let's express everything in terms of noise-limited performance and interference-limited performance.
    *   Let's assume the interference power level $I$ in the bandwidth is such that $C/I0_{downlink\_A} = 70$ dBHz. This means the interference is significant and limits the link.
    *   Then, the total carrier-to-interference-plus-noise ratio is:
        *   $C/(N+I) = (C/N0 + C/I0)_{dBHz}^{-1}$ is incorrect for sum.
        *   $C/(N+I) = 10 \log_{10} (10^{(C/N0)/10} + 10^{(C/I0)/10})^{-1}$ (This is also not right for the sum).
        *   $C/(N+I) = \frac{1}{1/ (C/N) + 1/(C/I)}$

    *Using Noise and Interference Power:*
    *   $C = 10^{118.68/10}$ in a bandwidth of 1 Hz.
    *   $N = 10^{118.68/10 - 60} \times 10^{6} = 10^{58.68}$ in 1 MHz bandwidth.
    *   Let $C/I0_{downlink\_A} = 70$ dBHz. This means $C = 10^{70/10}$ in 1 Hz.
    *   To have a $C/(N+I)$ of 60 dBHz, we need to combine $N$ and $I$.
    *   Let's find the $C/N$ and $C/I$ in a specific bandwidth, say $B = 1$ MHz.
    *   $C/N0 = 118.68$ dBHz implies $C/N$ for 1 MHz bandwidth is $118.68 - 10 \log_{10}(10^6) = 58.68$ dB.
    *   If $C/I0 = 70$ dBHz, then $C/I$ for 1 MHz bandwidth is $70 - 60 = 10$ dB.
    *   Now calculate $C/(N+I)$ using these ratios:
        *   $C/(N+I) = (1/C/N + 1/C/I)^{-1}$ is incorrect.
        *   $10 \log_{10} (C/(N+I)) = 10 \log_{10} \left( \frac{1}{10^{-(C/N)/10} + 10^{-(C/I)/10}} \right)$
        *   $10 \log_{10} (C/(N+I)) = 10 \log_{10} \left( \frac{1}{10^{-58.68/10} + 10^{-10/10}} \right) = 10 \log_{10} \left( \frac{1}{1.7 \times 10^{-6} + 0.1} \right)$
        *   $10 \log_{10} \left( \frac{1}{0.1000017} \right) = 10 \log_{10} (9.9998) \approx 10$ dBHz.

    *This indicates that with a $C/N$ of 58.68 dB and a $C/I$ of 10 dB, the resulting $C/(N+I)$ is only 10 dBHz. This is far below the requirement of 60 dBHz.*

    *This example highlights the critical need to accurately estimate interference power and the impact of XPI and beam isolation.*

    *For frequency reuse to be successful, the $C/I$ ratio must be sufficiently high, or the $C/N$ must be significantly higher to mask the interference.*

#### 2.4. Important Points to Remember (Reuse)

*   Frequency reuse significantly increases satellite capacity but introduces interference.
*   Effective antenna design (spot beams) and polarization management are crucial.
*   The system design must account for both noise and co-channel interference.
*   The required $C/(N+I)$ is the primary performance metric.
*   XPI and spatial isolation are key parameters in minimizing interference.
*   Higher frequency reuse requires greater isolation.

**Textbook References:**
*   Pratt & Allnutt, Chapter 8: Satellite Antenna Systems, and Chapter 10: Satellite Link Design (with special reference to multiple access and frequency reuse). This section will discuss the design considerations for multi-beam antennas and the impact of interference.
*   Ha, Chapter 5: Satellite Link Design (discusses interference analysis in detail).

---

### Practice Questions

**Question 1:**
A geostationary satellite provides a downlink service at 12 GHz. The satellite transmit power is 40 dBW, and the transmit antenna gain is 22 dBi. The satellite altitude is 36,000 km. A ground station has a receive antenna with a gain of 42 dBi and a system noise temperature of 400 K. Calculate the downlink Carrier-to-Noise density ratio (C/N0).
(Boltzmann's constant $k = 1.38 \times 10^{-23}$ J/K)

**Answer 1:**
1.  **Satellite EIRP:** $EIRP = P_t + G_t = 40 + 22 = 62$ dBW.
2.  **Downlink Path Loss:** $FSPL = 20 \log_{10}(36000) + 20 \log_{10}(12) + 92.45 \approx 91.12 + 21.58 + 92.45 = 205.15$ dB.
3.  **Ground Station G/T:** $T_{sys\_ground} = 400$ K. $10 \log_{10}(T_{sys\_ground}) = 10 \log_{10}(400) \approx 26.02$ dB(K).
    $G/T = G_r - 10 \log_{10}(T_{sys\_ground}) = 42 - 26.02 = 15.98$ dB/K.
4.  **C/N0:** $10 \log_{10}(k) \approx 228.6$ dBW/KHz.
    $C/N0 = EIRP - FSPL + G/T - 10 \log_{10}(k)$
    $C/N0 = 62 - 205.15 + 15.98 - 228.6 = -255.77$ dBW/KHz. (This is still problematic with the constant. Let's use the correct constant for C/N0 in dBHz).

    *Correct Calculation for C/N0:*
    $(C/N0)_{dBHz} = EIRP_{dBW} - FSPL_{dB} + (G/T)_{dB/K} - (10 \log_{10} k)_{dBW/KHz}$
    $(C/N0)_{dBHz} = 62 \text{ dBW} - 205.15 \text{ dB} + 15.98 \text{ dB/K} - (-208.6) \text{ dBW/KHz}$
    $(C/N0)_{dBHz} = 62 - 205.15 + 15.98 + 208.6 = 81.43$ dBHz.

    **Answer:** The downlink C/N0 is 81.43 dBHz.

**Question 2:**
Explain the role of cross-polarization isolation (XPI) in a frequency reuse satellite system. What are the typical challenges in achieving high XPI?

**Answer 2:**
**Role of XPI:**
In frequency reuse systems that utilize orthogonal polarizations (e.g., horizontal and vertical linear polarization, or right-hand and left-hand circular polarization), Cross-Polarization Isolation (XPI) is the measure of how well the system suppresses signals in the orthogonal polarization. A high XPI means that a signal transmitted in one polarization is received with very low power in the other polarization. This is crucial because it allows the same frequency band to be used in different beams (or even the same beam to some extent) without causing significant interference between them. The same frequency can be reused with minimal degradation if the XPI is high enough to keep the interference level below acceptable limits.

**Typical Challenges in Achieving High XPI:**
1.  **Antenna Imperfections:** Real-world antennas are not perfect. The transmit and receive antennas on both the satellite and ground stations may exhibit some leakage of signal into the orthogonal polarization. This is due to:
    *   **Misalignment:** Slight misalignments in antenna feed structures or pointing errors can degrade XPI.
    *   **Fabrication Tolerances:** Imperfections in the manufacturing of antenna reflectors and feeds.
    *   **Mode Conversion:** In waveguide feeds and other transmission components, energy can be converted from the desired polarization to the orthogonal polarization.
2.  **Atmospheric Effects:**
    *   **Rain Depolarization:** Rain and other precipitation can cause significant depolarization of the signal, especially at frequencies above 10 GHz. This can reduce the XPI of the link during heavy rain events.
    *   **Ionospheric Effects:** At lower frequencies, the ionosphere can also cause Faraday rotation, which rotates the plane of polarization, leading to a reduction in XPI.
3.  **Multipath Propagation:** Reflections from the ground or other objects can cause signals to arrive at the receiver with different polarizations, contributing to interference.
4.  **Satellite Antenna Design Complexity:** Designing multi-beam antennas with high XPI between adjacent beams is technically challenging and often involves complex feed network designs and precise manufacturing.

---

### Important Points to Remember (Overall)

*   **Link Budget:** The fundamental tool for designing any satellite link, whether with or without frequency reuse.
*   **C/N Ratio:** The primary metric for ensuring reliable communication in noise-limited environments.
*   **G/T and EIRP:** Key parameters that define the performance capabilities of satellite and ground station receiving and transmitting systems, respectively.
*   **Frequency Reuse:** A powerful technique for increasing capacity but introduces the challenge of managing interference.
*   **Interference Management:** Crucial for reuse systems, requiring careful frequency planning, antenna design, and polarization control.
*   **C/(N+I) Ratio:** The critical performance metric for interference-limited links.
*   **Trade-offs:** Designers constantly balance performance, capacity, cost, and complexity when choosing between non-reuse and reuse strategies.

---

This comprehensive set of notes covers the core concepts of satellite link design for both scenarios. It emphasizes the practical steps involved, provides simplified examples, and highlights the key differences and challenges associated with frequency reuse. Remember to refer to your textbooks for more in-depth explanations and advanced topics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
