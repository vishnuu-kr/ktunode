---
title: "Satellite link design- Basic link analysis"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 2: Satellite link design"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff8a3"
status: "completed"
scrapedAt: "2026-05-23T18:57:15.796Z"
---
# Satellite and Radar Communication

## Module 2: Satellite Link Design

### Topic: Satellite Link Design - Basic Link Analysis

**Course Outcomes Addressed:**

*   **CO1:** Illustrate the principles of satellite communication (Knowledge Level: K2) - *This topic forms the foundation for understanding how satellite communication systems work.*
*   **CO2:** Design and analysis of satellite link (Knowledge Level: K3) - *This is the core of the topic, focusing on the analytical steps involved in designing a satellite link.*

---

### 1. Introduction to Satellite Link Design

Satellite link design is a critical process to ensure reliable and efficient communication between ground stations (earth stations) and satellites. It involves calculating and optimizing various parameters to achieve the desired signal quality and throughput. The fundamental goal is to ensure that the received signal strength is sufficient to overcome noise and interference, meeting specific performance criteria (e.g., Bit Error Rate - BER for digital links).

**Key Concept:** The **link budget** is the central tool used in satellite link design. It's a detailed accounting of all gains and losses that affect the signal power from the transmitting antenna to the receiving antenna.

**Reference:** Pratt & Allnutt, Chapter 3: "Link Budget Analysis" provides a comprehensive overview of the principles and components of a link budget.

---

### 2. The Satellite Link Budget

A satellite link budget systematically accounts for all power gains and losses experienced by a signal as it travels through the communication system. It's typically divided into two main parts: the **uplink** (Earth station to satellite) and the **downlink** (satellite to Earth station).

#### 2.1 Components of a Link Budget

A link budget includes the following key components:

*   **Transmitter Power (Pt):** The power output of the transmitter.
*   **Antenna Gain (Gt):** The amplification provided by the transmitting antenna in a specific direction.
*   **Effective Isotropic Radiated Power (EIRP):** The product of the transmitter power and the transmitting antenna gain, expressed as if radiated from an isotropic antenna.
    *   **Formula:** $EIRP = P_t + G_t$ (in dBW)
*   **Path Loss (PL):** The reduction in signal power due to the propagation distance. This is the most significant loss.
    *   **Free-Space Path Loss (FSPL):** The loss in an ideal, unobstructed environment.
        *   **Formula (dB):** $FSPL = 20 \log_{10}(d) + 20 \log_{10}(f) + 20 \log_{10}(\frac{4\pi}{c})$
            *   `d`: distance between antennas (meters)
            *   `f`: frequency of the signal (Hz)
            *   `c`: speed of light (approximately $3 \times 10^8$ m/s)
        *   **Simplified Formula (dB for d in km, f in GHz):** $FSPL = 92.45 + 20 \log_{10}(d_{km}) + 20 \log_{10}(f_{GHz})$
*   **Atmospheric Losses (L_atm):** Losses due to absorption and scattering by atmospheric gases (oxygen, water vapor) and precipitation (rain fade).
*   **Polarization Mismatch Loss (L_pol):** Loss due to misalignment of the polarization of the transmitting and receiving antennas.
*   **Antenna Pointing Loss (L_point):** Loss due to the transmitting or receiving antenna not being perfectly pointed at the other station.
*   **Receiver Noise Temperature (T_sys):** The total noise temperature of the receiving system, which includes the antenna noise temperature and the receiver's internal noise.
*   **Boltzmann's Constant (k):** A fundamental physical constant ($1.38 \times 10^{-23}$ J/K).
*   **Noise Power (Pn):** The noise power in the receiver's bandwidth.
    *   **Formula:** $P_n = k \cdot T_{sys} \cdot B$ (Watts)
    *   **In dBW:** $P_n = 10 \log_{10}(k) + 10 \log_{10}(T_{sys}) + 10 \log_{10}(B)$
        *   $k \approx -228.6$ dBW/Hz/K
        *   $T_{sys}$: System noise temperature (Kelvin)
        *   $B$: Bandwidth (Hz)
*   **Received Signal Power (Pr):** The power of the signal arriving at the receiving antenna.
    *   **Formula:** $P_r = EIRP - PL - L_{other\_losses} + G_r$
        *   $G_r$: Receiving antenna gain (dBi)
*   **Carrier-to-Noise Ratio (C/N):** A key performance indicator representing the ratio of the received signal power to the noise power.
    *   **Formula (dB):** $(C/N)_0 = P_r - P_n$
        *   The subscript '0' indicates the value in the receiver's bandwidth.
*   **Carrier-to-Interference Ratio (C/I):** The ratio of the received signal power to interference power.
*   **Figure of Merit (G/T):** A crucial parameter for a receiving station, representing the antenna gain per system noise temperature. It dictates the station's sensitivity.
    *   **Formula (dB/K):** $G/T = G_r - 10 \log_{10}(T_{sys})$

**Important Point to Remember:** All power values are typically expressed in dBW (decibels relative to 1 Watt), and gains/losses are in dB. This makes calculations a simple addition and subtraction process.

**Example Calculation Snippet (Downlink):**

Let's consider a downlink scenario:

*   Satellite EIRP = 50 dBW
*   Distance = 40,000 km
*   Frequency = 12 GHz
*   Receiver Antenna Gain ($G_r$) = 45 dBi
*   System Noise Temperature ($T_{sys}$) = 500 K
*   Receiver Bandwidth (B) = 36 MHz

1.  **Calculate Free-Space Path Loss (FSPL):**
    $FSPL = 92.45 + 20 \log_{10}(40000) + 20 \log_{10}(12)$
    $FSPL = 92.45 + 20(4.602) + 20(1.079)$
    $FSPL = 92.45 + 92.04 + 21.58 = 206.07$ dB

2.  **Calculate Received Signal Power ($P_r$):**
    Assume other losses are negligible for now.
    $P_r = EIRP - FSPL + G_r$
    $P_r = 50 \text{ dBW} - 206.07 \text{ dB} + 45 \text{ dBi}$
    $P_r = -111.07$ dBW

3.  **Calculate Noise Power ($P_n$):**
    $P_n = k \cdot T_{sys} \cdot B$
    In dBW: $P_n = -228.6 \text{ dBW/Hz/K} + 10 \log_{10}(500 \text{ K}) + 10 \log_{10}(36 \times 10^6 \text{ Hz})$
    $P_n = -228.6 + 26.99 + 75.56$
    $P_n = -126.05$ dBW

4.  **Calculate Carrier-to-Noise Ratio ($C/N$):**
    $(C/N)_0 = P_r - P_n$
    $(C/N)_0 = -111.07 \text{ dBW} - (-126.05 \text{ dBW})$
    $(C/N)_0 = 14.98$ dB

---

#### 2.2 Uplink vs. Downlink Analysis

The link budget is performed for both the uplink and the downlink separately.

*   **Uplink:** Earth station transmits to the satellite. The satellite's receiver sensitivity is the critical factor. The satellite's $G/T$ is paramount.
    *   **Key Parameters:** Earth station EIRP, satellite $G/T$, uplink path loss, satellite receiver noise.
*   **Downlink:** Satellite transmits to the Earth station. The Earth station's receiver sensitivity (its $G/T$) is the critical factor.
    *   **Key Parameters:** Satellite EIRP, Earth station $G/T$, downlink path loss, Earth station receiver noise.

**Important Point to Remember:** The overall link performance is often limited by the link with the lower $C/N$ ratio (or the worse $G/T$).

#### 2.3 Noise Sources and Noise Temperature

*   **Noise Temperature (T):** A convenient way to express the noise power spectral density of a source. Units are Kelvin (K).
*   **System Noise Temperature ($T_{sys}$):** The sum of all noise temperatures in the receiving system, referred to the input of the receiver.
    *   $T_{sys} = T_{ant} + T_{receiver}$
    *   $T_{ant}$: Antenna noise temperature (includes sky noise, ground noise, atmospheric noise, and satellite noise if it's a satellite receiver).
    *   $T_{receiver}$: Receiver noise temperature (inherent noise generated by the receiver's active components like amplifiers).
*   **Noise Figure (NF):** An alternative way to express the noise introduced by a component or system. It's the ratio of the signal-to-noise ratio at the input to the signal-to-noise ratio at the output.
    *   **Formula (ratio):** $NF = \frac{SNR_{in}}{SNR_{out}}$
    *   **Formula (dB):** $NF_{dB} = 10 \log_{10}(NF)$
    *   Relationship between $T_{sys}$ and NF: $T_{sys} = T_{ref} \cdot (NF - 1)$, where $T_{ref}$ is the reference temperature (usually 290 K or 2900 K, depending on the standard).

**Reference:** Pratt & Allnutt, Chapter 4: "Noise Sources" provides detailed information on various noise sources and their characterization.

---

### 3. Key Performance Metrics

#### 3.1 Carrier-to-Noise Density Ratio (C/N0)

*   **Definition:** The ratio of the received carrier power ($C$) to the noise power spectral density ($N_0 = k \cdot T_{sys}$) at the receiver input. It's a measure of signal quality that is independent of the receiver bandwidth.
*   **Formula (ratio):** $C/N_0 = \frac{P_r}{k \cdot T_{sys}}$
*   **Formula (dB):** $(C/N_0)_{dB} = P_r \text{ (dBW)} - 10 \log_{10}(k) - 10 \log_{10}(T_{sys})$
    *   $(C/N_0)_{dB} = P_r \text{ (dBW)} + 228.6 - 10 \log_{10}(T_{sys})$
    *   **Alternatively:** $(C/N_0)_{dB} = (C/N)_0 \text{ (dB)} + 10 \log_{10}(B \text{ in Hz})$

**Important Point to Remember:** $(C/N_0)$ is often used as the primary performance metric for digital satellite links, as it directly relates to the achievable BER for a given modulation and coding scheme.

#### 3.2 Figure of Merit (G/T)

*   **Definition:** The ratio of the receiving antenna gain ($G_r$) to the system noise temperature ($T_{sys}$), expressed in dB/K. It characterizes the sensitivity of a receiving earth station or satellite. A higher $G/T$ indicates a more sensitive receiver.
*   **Formula (dB/K):** $G/T = G_r (\text{dBi}) - 10 \log_{10}(T_{sys} (\text{K}))$

**Example:** An Earth station with a 45 dBi antenna and a system noise temperature of 500 K has a $G/T$ of:
$G/T = 45 \text{ dBi} - 10 \log_{10}(500 \text{ K}) = 45 - 26.99 \approx 18.01$ dB/K.

#### 3.3 EIRP

*   **Definition:** Effective Isotropic Radiated Power. It's the product of the transmitter output power and the transmitting antenna gain, expressed as if the power were radiated isotropically. It's a measure of the power transmitted in the direction of the receiving antenna.
*   **Formula (dBW):** $EIRP = P_t (\text{dBW}) + G_t (\text{dBi})$

---

### 4. Design Considerations and Adjustments

*   **Rain Fade:** In higher frequency bands (Ku, Ka, V bands), rain can significantly attenuate the signal. Link designers must account for this by either:
    *   **Over-sizing the link:** Using higher transmitter power or larger antennas.
    *   **Site Diversity:** Using multiple ground stations in different geographical locations to mitigate the impact of localized rain.
    *   **Adaptive Power/Coding:** Adjusting transmission parameters based on weather conditions.
*   **Interference:** Signals from other satellites or terrestrial sources can interfere. Link budgets must consider potential interference levels to ensure adequate $C/I$.
*   **Modulation and Coding:** The choice of modulation scheme (e.g., QPSK, 8PSK, 16APSK) and forward error correction (FEC) coding (e.g., Viterbi, Reed-Solomon, LDPC) significantly impacts the required $C/N_0$ for a given BER. Modern systems use powerful FEC codes to improve link efficiency.
*   **Bandwidth:** The allocated bandwidth affects the noise power. Wider bandwidths generally lead to higher noise power, requiring stronger signals to maintain the same $C/N$.

**Reference:** Pratt & Allnutt, Chapter 7: "Propagation Factors" and Chapter 8: "Modulation and Coding" are essential for understanding these design considerations.

---

### 5. Designing a Simple Satellite Link (Conceptual Steps)

1.  **Define Requirements:**
    *   Service type (e.g., voice, data, video)
    *   Data rate
    *   Required BER (e.g., $10^{-6}$ for digital data)
    *   Frequency band
    *   Geographical coverage

2.  **Select Modulation and Coding Scheme:** Based on the required BER and data rate, choose an appropriate modulation and coding scheme. This will dictate the required $(C/N_0)_{dB}$ or $(C/N)_{dB}$ for the specified BER.

3.  **Determine Satellite Parameters:**
    *   Satellite EIRP (often provided by the satellite operator).
    *   Satellite $G/T$ (crucial for the uplink analysis).

4.  **Determine Earth Station Parameters:**
    *   Earth station antenna gain ($G_{re}$ for receiving, $G_{te}$ for transmitting).
    *   Earth station receiver system noise temperature ($T_{sys, e}$).
    *   Earth station transmitter power ($P_{t,e}$).

5.  **Calculate Link Budgets (Uplink and Downlink):**
    *   **Uplink:** Calculate $(C/N_0)_U$.
        *   Start with satellite $G/T$.
        *   Calculate Earth station EIRP.
        *   Calculate uplink path loss and other losses.
        *   Calculate received power at the satellite.
        *   Calculate noise power at the satellite.
        *   Determine $(C/N_0)_U$.
    *   **Downlink:** Calculate $(C/N_0)_D$.
        *   Start with Earth station $G/T$.
        *   Calculate satellite EIRP.
        *   Calculate downlink path loss and other losses.
        *   Calculate received power at the Earth station.
        *   Calculate noise power at the Earth station.
        *   Determine $(C/N_0)_D$.

6.  **Calculate Overall $(C/N_0)_{total}$:**
    *   The total $(C/N_0)$ is the sum of the uplink and downlink $(C/N_0)$ values:
        *   $(C/N_0)_{total} = (C/N_0)_U + (C/N_0)_D$ (in dB)

7.  **Verify Performance:** Compare the calculated overall $(C/N_0)_{total}$ with the required $(C/N_0)$ for the chosen modulation and coding scheme. If the calculated value is greater than the required value, the link is adequate. If not, adjustments are needed (e.g., increase transmitter power, use a more efficient antenna, or choose a more robust modulation/coding scheme).

---

### 6. Practice Questions and Answers

**Question 1:** Calculate the Free-Space Path Loss (FSPL) for a satellite link operating at 18 GHz over a distance of 40,000 km.

**Answer 1:**
Using the simplified formula: $FSPL = 92.45 + 20 \log_{10}(d_{km}) + 20 \log_{10}(f_{GHz})$
$FSPL = 92.45 + 20 \log_{10}(40000) + 20 \log_{10}(18)$
$FSPL = 92.45 + 20(4.602) + 20(1.255)$
$FSPL = 92.45 + 92.04 + 25.1 = 209.59$ dB

**Question 2:** An Earth station has a receiving antenna gain of 50 dBi and a system noise temperature of 650 K. Calculate its $G/T$ in dB/K.

**Answer 2:**
$G/T = G_r - 10 \log_{10}(T_{sys})$
$G/T = 50 \text{ dBi} - 10 \log_{10}(650 \text{ K})$
$G/T = 50 - 28.13 = 21.87$ dB/K

**Question 3:** A satellite downlink has the following parameters:
*   Satellite EIRP = 48 dBW
*   Downlink Path Loss = 205 dB
*   Earth Station Antenna Gain ($G_r$) = 42 dBi
*   Earth Station System Noise Temperature ($T_{sys}$) = 400 K
*   Receiver Bandwidth (B) = 10 MHz

Calculate the Carrier-to-Noise Ratio $(C/N)_0$ in dB for this downlink.

**Answer 3:**
1.  **Received Signal Power ($P_r$):**
    $P_r = EIRP - Path Loss + G_r$
    $P_r = 48 \text{ dBW} - 205 \text{ dB} + 42 \text{ dBi}$
    $P_r = -115$ dBW

2.  **Noise Power Density ($N_0$):**
    $N_0 = k \cdot T_{sys}$
    $N_0 \text{ (dBW/Hz)} = 10 \log_{10}(k) + 10 \log_{10}(T_{sys})$
    $N_0 \text{ (dBW/Hz)} = -228.6 \text{ dBW/Hz/K} + 10 \log_{10}(400 \text{ K})$
    $N_0 \text{ (dBW/Hz)} = -228.6 + 26.02 = -202.58$ dBW/Hz

3.  **Carrier-to-Noise Ratio $(C/N)_0$:**
    $(C/N)_0 = P_r - N_0$
    $(C/N)_0 = -115 \text{ dBW} - (-202.58 \text{ dBW/Hz})$
    $(C/N)_0 = 87.58$ dB-Hz

    *Note: If the question asked for $(C/N)$ in the given bandwidth, we would subtract $10 \log_{10}(B)$.*

**Question 4:** What is the primary tool used in satellite link design to account for all gains and losses?

**Answer 4:** The **link budget**.

---

### 7. Important Points to Remember

*   **Link Budget:** The cornerstone of satellite link design, systematically accounting for all gains and losses.
*   **EIRP and G/T:** Key parameters for the transmitting and receiving terminals, respectively.
*   **FSPL:** The dominant loss factor, increasing with distance and frequency.
*   **Noise Temperature ($T_{sys}$):** A measure of the noise in the receiving system; lower is better.
*   **C/N and C/N0:** Critical performance metrics that determine the quality of the received signal.
*   **Uplink vs. Downlink:** Both must be analyzed, as the overall link is limited by the poorer of the two.
*   **dB and dBW:** Units used for power, gain, and loss in link budgets, simplifying calculations.
*   **Rain Fade:** A significant challenge at higher frequencies, requiring mitigation strategies.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 8. Further Reading and References

*   **Satellite Communications** by Timothy Pratt, Jeremy Allnutt (Wiley, 3rd Edition, 2021) - **Chapters 3, 4, 7, 8** are highly relevant.
*   **Digital Satellite Communications** by Tri, T.Ha (McGraw-Hill Education, 2nd Edition, 2017) - Provides in-depth analysis of modulation and coding.
*   **Satellite Communications Systems Engineering** by Pritchard (Pearson Education, 2nd Edition, 2006) - Offers a systems-level perspective.
*   **Introduction to Radar Systems** by Merrill I. Skolnik (Tata McGraw-Hill, 2nd Edition, 2017) - While focused on radar, some fundamental propagation concepts might be applicable (though less direct for link design).

---
This concludes the basic link analysis for satellite communication. The principles learned here are fundamental for understanding the performance and design of any satellite communication system.