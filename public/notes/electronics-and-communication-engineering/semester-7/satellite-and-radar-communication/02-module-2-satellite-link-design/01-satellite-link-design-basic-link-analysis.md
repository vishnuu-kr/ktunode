---
title: "Satellite link design- Basic link analysis"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 2: Satellite link design"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff319"
status: "completed"
scrapedAt: "2026-05-23T18:10:40.904Z"
---
# SATELLITE AND RADAR COMMUNICATION

## Module 2: Satellite Link Design

### Topic: Satellite Link Design - Basic Link Analysis

**Course Outcomes Addressed:** CO1 (K2), CO2 (K3)

**Learning Outcomes:**
*   Analyze the essential parameters involved in satellite link design.
*   Calculate the signal power at the satellite receiver.
*   Determine the overall link budget for a satellite communication system.

---

### 1. Introduction to Satellite Link Design

Satellite link design is the process of determining the necessary parameters for a satellite communication system to function effectively and reliably. It involves balancing various factors like transmit power, antenna gains, path losses, and noise to ensure that the received signal is strong enough and has a sufficiently high quality. The primary goal is to establish a robust and efficient communication channel between the ground station and the satellite.

**Key Concepts:**
*   **Link Budget:** A detailed accounting of all gains and losses in the signal path from the transmitter to the receiver.
*   **Signal-to-Noise Ratio (SNR) or Carrier-to-Noise Ratio (C/N):** A crucial performance metric that indicates the strength of the desired signal relative to the background noise.
*   **Noise Figure (NF):** A measure of the noise added by a component or a system.
*   **System Noise Temperature (Tsy):** The effective noise temperature of the receiving system.

**Reference:** Pratt & Allnutt, Chapter 3: Link Budget Analysis.

---

### 2. Essential Parameters in Satellite Link Design

A successful satellite link design requires careful consideration of several key parameters. These parameters directly influence the quality and reliability of the communication.

#### 2.1. Transmitter Parameters
*   **Transmitter Power (P_tx):** The power output of the transmitter. Higher power generally leads to a stronger signal at the receiver but requires more power consumption.
*   **Antenna Gain (G_tx):** The ability of the transmitting antenna to focus power in a specific direction. Measured in decibels (dB) relative to an isotropic radiator.
*   **Effective Isotropic Radiated Power (EIRP):** The total power radiated by the antenna in its direction of maximum radiation.
    *   **Formula:** $EIRP = P_{tx} + G_{tx} - L_{feed}$ (where $L_{feed}$ is the feed loss, usually in dB)
    *   **Pratt & Allnutt:** Emphasize EIRP as a key parameter for characterizing the strength of the signal transmitted from the satellite or ground station.

#### 2.2. Propagation Path Parameters
*   **Free-Space Path Loss (FSPL):** The reduction in signal power due to the spreading of the electromagnetic wave as it travels through free space.
    *   **Formula:** $FSPL (dB) = 20 \log_{10} \left( \frac{4 \pi d f}{c} \right)$, where:
        *   $d$ is the distance between transmitter and receiver.
        *   $f$ is the frequency of the signal.
        *   $c$ is the speed of light ($3 \times 10^8$ m/s).
*   **Atmospheric Losses:** Signal attenuation caused by absorption and scattering from atmospheric gases (oxygen, water vapor), rain, clouds, and fog. Rain fade is a significant factor, especially at higher frequencies.
*   **Pointing Losses:** Losses due to imperfect alignment between the transmitting and receiving antennas.
*   **Polarization Mismatch Loss:** Loss occurring when the polarization of the received signal does not match the polarization of the receiving antenna.

#### 2.3. Receiver Parameters
*   **Antenna Gain (G_rx):** The ability of the receiving antenna to capture the incoming signal.
*   **Receiver Noise Figure (NF):** A measure of the noise introduced by the receiver's components. A lower NF is desirable.
    *   **Formula:** $NF (dB) = 10 \log_{10} (\frac{SNR_{in}}{SNR_{out}})$
*   **System Noise Temperature (Tsy):** The equivalent noise temperature of the entire receiving system, including antenna noise and receiver noise.
    *   **Formula:** $T_{sy} = T_{ant} + T_{receiver}$
    *   $T_{ant}$ includes contributions from cosmic noise, atmospheric noise, and ground noise.
    *   $T_{receiver}$ is derived from the receiver's noise figure: $T_{receiver} = T_{ref} (10^{NF/10} - 1)$, where $T_{ref} = 290$ K.
*   **Receiver Bandwidth (B):** The range of frequencies over which the receiver operates. This affects the total noise power received.

#### 2.4. Link Performance Metrics
*   **Carrier-to-Noise Ratio (C/N):** The ratio of the carrier power to the noise power in the receiver bandwidth.
    *   **Formula:** $C/N = \frac{P_{rx}}{N}$, where $N$ is the noise power.
    *   **Noise Power (N):** $N = k T_{sy} B$, where $k$ is Boltzmann's constant ($1.38 \times 10^{-23}$ J/K).
*   **Carrier-to-Interference Ratio (C/I):** The ratio of the carrier power to the interfering signal power. Important in systems with multiple carriers or adjacent satellite interference.
*   **Carrier-to-Noise-plus-Interference Ratio (C/No):** A more general metric that includes both noise and interference. Often used in digital satellite communication design.
    *   **Formula:** $C/N_0 = \frac{P_{rx}}{k T_{sy}}$ (where $B$ is implicitly handled by the noise density).

**Important Point to Remember:** All power and gain values are typically expressed in decibels (dB) for easier calculation of link budgets.

---

### 3. Basic Link Analysis: Calculating Received Signal Power

The first step in link analysis is to determine the signal power received at the satellite or ground station. This involves accounting for all gains and losses from the transmitter to the receiver.

#### 3.1. Up-link Analysis (Ground Station to Satellite)
The up-link is the transmission from the ground station to the satellite.

*   **Received Power at Satellite ($P_{rx, sat}$):**
    *   $P_{rx, sat} (dBW) = P_{tx, gs} (dBW) + G_{tx, gs} (dBi) - FSPL_{up} (dB) - L_{atm, up} (dB) - L_{other, up} (dB) + G_{rx, sat} (dBi)$
    *   Where:
        *   $P_{tx, gs}$: Transmit power of the ground station (dBW).
        *   $G_{tx, gs}$: Gain of the ground station transmit antenna (dBi).
        *   $FSPL_{up}$: Free-space path loss for the up-link distance (dB).
        *   $L_{atm, up}$: Atmospheric losses on the up-link (dB).
        *   $L_{other, up}$: Other losses on the up-link (e.g., pointing, polarization mismatch) (dB).
        *   $G_{rx, sat}$: Gain of the satellite receive antenna (dBi).

**Example Calculation (Up-link):**
*   Ground Station Transmit Power ($P_{tx, gs}$) = 1000 W = 60 dBW
*   Ground Station Transmit Antenna Gain ($G_{tx, gs}$) = 50 dBi
*   Satellite Receive Antenna Gain ($G_{rx, sat}$) = 40 dBi
*   Uplink Distance ($d_{up}$) = 36,000 km = $3.6 \times 10^7$ m
*   Uplink Frequency ($f_{up}$) = 6 GHz = $6 \times 10^9$ Hz
*   Free-Space Path Loss ($FSPL_{up}$) calculation:
    *   $FSPL_{up} (dB) = 20 \log_{10} \left( \frac{4 \pi \times 3.6 \times 10^7 \times 6 \times 10^9}{3 \times 10^8} \right)$
    *   $FSPL_{up} (dB) = 20 \log_{10} \left( \frac{8.64 \times 10^{17}}{3 \times 10^8} \right) = 20 \log_{10} (2.88 \times 10^9)$
    *   $FSPL_{up} (dB) = 20 \times 9.457 = 189.14$ dB
*   Assume atmospheric losses ($L_{atm, up}$) = 2 dB
*   Assume other losses ($L_{other, up}$) = 1 dB

*   $P_{rx, sat} (dBW) = 60 + 50 - 189.14 - 2 - 1 + 40$
*   $P_{rx, sat} (dBW) = 150 - 192.14 = -42.14$ dBW

**Pratt & Allnutt:** Stress the importance of accurate modeling of atmospheric losses, especially rain fade, for reliable up-link design.

---

#### 3.2. Down-link Analysis (Satellite to Ground Station)
The down-link is the transmission from the satellite to the ground station.

*   **Received Power at Ground Station ($P_{rx, gs}$):**
    *   $P_{rx, gs} (dBW) = EIRP_{sat} (dBW) - FSPL_{down} (dB) - L_{atm, down} (dB) - L_{other, down} (dB) + G_{rx, gs} (dBi)$
    *   Where:
        *   $EIRP_{sat} (dBW)$: Effective Isotropic Radiated Power of the satellite (dBW). $EIRP_{sat} = P_{tx, sat} (dBW) + G_{tx, sat} (dBi) - L_{feed, sat} (dB)$
        *   $P_{tx, sat}$: Transmit power of the satellite (dBW).
        *   $G_{tx, sat}$: Gain of the satellite transmit antenna (dBi).
        *   $L_{feed, sat}$: Feed losses in the satellite transmit antenna (dB).
        *   $FSPL_{down}$: Free-space path loss for the down-link distance (dB).
        *   $L_{atm, down}$: Atmospheric losses on the down-link (dB).
        *   $L_{other, down}$: Other losses on the down-link (dB).
        *   $G_{rx, gs}$: Gain of the ground station receive antenna (dBi).

**Example Calculation (Down-link):**
*   Satellite Transmit Power ($P_{tx, sat}$) = 10 W = 10 dBW
*   Satellite Transmit Antenna Gain ($G_{tx, sat}$) = 20 dBi
*   Satellite Feed Loss ($L_{feed, sat}$) = 1 dB
*   Ground Station Receive Antenna Gain ($G_{rx, gs}$) = 40 dBi
*   Down-link Distance ($d_{down}$) = 36,000 km = $3.6 \times 10^7$ m
*   Down-link Frequency ($f_{down}$) = 12 GHz = $1.2 \times 10^{10}$ Hz
*   Free-Space Path Loss ($FSPL_{down}$) calculation:
    *   $FSPL_{down} (dB) = 20 \log_{10} \left( \frac{4 \pi \times 3.6 \times 10^7 \times 1.2 \times 10^{10}}{3 \times 10^8} \right)$
    *   $FSPL_{down} (dB) = 20 \log_{10} \left( \frac{1.728 \times 10^{18}}{3 \times 10^8} \right) = 20 \log_{10} (5.76 \times 10^9)$
    *   $FSPL_{down} (dB) = 20 \times 9.76 = 195.2$ dB
*   Assume atmospheric losses ($L_{atm, down}$) = 3 dB (higher due to higher frequency and potential rain)
*   Assume other losses ($L_{other, down}$) = 1 dB

*   First, calculate EIRP of the satellite:
    *   $EIRP_{sat} (dBW) = 10 + 20 - 1 = 29$ dBW
*   Now, calculate received power at the ground station:
    *   $P_{rx, gs} (dBW) = 29 - 195.2 - 3 - 1 + 40$
    *   $P_{rx, gs} (dBW) = 69 - 199.2 = -130.2$ dBW

**Pratt & Allnutt:** Emphasize that down-link calculations are often critical due to the limited power available on board the satellite.

---

### 4. Determining the Overall Link Budget

The link budget combines all the gains and losses to determine the Carrier-to-Noise Ratio (C/N) or Carrier-to-Noise-plus-Interference (C/No) at the receiver. This metric is then compared against the required minimum C/N or C/No for the specific modulation and coding scheme used to ensure acceptable performance.

#### 4.1. Calculating C/N

*   **C/N (dB) = Received Carrier Power (dBW) - Noise Power Density (dBW/Hz) - Bandwidth (dBHz)**

    *   **Received Carrier Power ($P_{rx}$):** Calculated as shown in Section 3.
    *   **Boltzmann's Constant ($k$):** $k = 1.38 \times 10^{-23}$ J/K. In dBW/K/Hz, $10 \log_{10}(k) = -228.6$ dBW/K/Hz.
    *   **System Noise Temperature ($T_{sy}$):** Sum of antenna noise temperature and receiver noise temperature. Needs to be calculated in Kelvin.
    *   **Receiver Bandwidth ($B$):** The bandwidth allocated for the signal, usually in Hz.

*   **Step-by-step C/N Calculation:**
    1.  Calculate the received carrier power ($P_{rx}$) in dBW (as per Section 3).
    2.  Calculate the system noise temperature ($T_{sy}$) in Kelvin. This involves determining the antenna noise temperature ($T_{ant}$) and the receiver noise temperature ($T_{receiver}$) from its noise figure.
    3.  Calculate the noise power in the specified bandwidth: $N = k T_{sy} B$. Convert this to dBW.
        *   $N (dBW) = 10 \log_{10}(k) + 10 \log_{10}(T_{sy}) + 10 \log_{10}(B)$
        *   $N (dBW) = -228.6 + 10 \log_{10}(T_{sy}) + 10 \log_{10}(B)$
    4.  Calculate C/N: $C/N (dB) = P_{rx} (dBW) - N (dBW)$

**Example Calculation (Down-link C/N):**
*   Assume from Section 3.2, $P_{rx, gs} = -130.2$ dBW.
*   Assume the satellite receiving system noise temperature ($T_{sy, gs}$) = 500 K (this is for the ground station receiver).
*   Assume the required bandwidth ($B$) = 36 MHz = $3.6 \times 10^7$ Hz.

*   Calculate noise power in the bandwidth:
    *   $N (dBW) = -228.6 + 10 \log_{10}(500) + 10 \log_{10}(3.6 \times 10^7)$
    *   $N (dBW) = -228.6 + 10 \times 2.699 + 10 \times 7.556$
    *   $N (dBW) = -228.6 + 27.0 + 75.6 = -126.0$ dBW

*   Calculate C/N:
    *   $C/N (dB) = P_{rx, gs} (dBW) - N (dBW)$
    *   $C/N (dB) = -130.2 - (-126.0) = -4.2$ dB

**Interpretation:** A C/N of -4.2 dB is very low and likely insufficient for reliable communication. This indicates that some parameters need to be adjusted (e.g., higher satellite transmit power, higher ground station antenna gain, lower system noise temperature, or a narrower bandwidth if possible).

**Pratt & Allnutt:** Provide detailed tables and examples of link budget calculations, highlighting the iterative nature of the design process.

---

#### 4.2. Carrier-to-Noise-plus-Interference Ratio (C/No)

In many digital satellite systems, C/No is a more fundamental measure as it directly relates to the bit error rate (BER) performance for a given modulation and coding scheme.

*   **C/No (dB-Hz) = Received Carrier Power (dBW) - Noise Power Spectral Density (dBW/Hz)**
    *   $C/N_0 (dB-Hz) = P_{rx} (dBW) - (10 \log_{10}(k) + 10 \log_{10}(T_{sy}))$
    *   $C/N_0 (dB-Hz) = P_{rx} (dBW) - (-228.6 + 10 \log_{10}(T_{sy}))$

**Example Calculation (Down-link C/No):**
*   Using the same values as before: $P_{rx, gs} = -130.2$ dBW and $T_{sy, gs} = 500$ K.
*   $C/N_0 (dB-Hz) = -130.2 - (-228.6 + 10 \log_{10}(500))$
*   $C/N_0 (dB-Hz) = -130.2 - (-228.6 + 27.0)$
*   $C/N_0 (dB-Hz) = -130.2 - (-201.6) = 71.4$ dB-Hz

**Important Point to Remember:** A higher C/N or C/No value indicates better link quality. The required C/N or C/No is determined by the modulation and coding scheme used and the acceptable BER.

**Pratt & Allnutt:** Discuss the relationship between C/No and BER for various digital modulation techniques, which is crucial for achieving desired service quality.

---

### 5. Practice Questions and Answers

**Question 1:**
Calculate the EIRP of a satellite transmitter with a transmit power of 15 W and a transmit antenna gain of 25 dBi. Assume a feed loss of 0.5 dB.

**Answer 1:**
*   Transmit Power ($P_{tx, sat}$) = 15 W = $10 \log_{10}(15) \approx 11.76$ dBW
*   Transmit Antenna Gain ($G_{tx, sat}$) = 25 dBi
*   Feed Loss ($L_{feed, sat}$) = 0.5 dB
*   $EIRP_{sat} (dBW) = P_{tx, sat} (dBW) + G_{tx, sat} (dBi) - L_{feed, sat} (dB)$
*   $EIRP_{sat} (dBW) = 11.76 + 25 - 0.5 = 36.26$ dBW

**Question 2:**
A ground station receives a signal with a power of -145 dBW. The receiver bandwidth is 10 MHz, and the system noise temperature is 600 K. Calculate the C/N ratio in dB. (Boltzmann's constant $k = 1.38 \times 10^{-23}$ J/K).

**Answer 2:**
*   Received Carrier Power ($P_{rx}$) = -145 dBW
*   Receiver Bandwidth ($B$) = 10 MHz = $10 \times 10^6$ Hz
*   System Noise Temperature ($T_{sy}$) = 600 K
*   Boltzmann's constant ($k$) in dBW/K/Hz = -228.6 dBW/K/Hz

*   Calculate noise power (N):
    *   $N (dBW) = 10 \log_{10}(k) + 10 \log_{10}(T_{sy}) + 10 \log_{10}(B)$
    *   $N (dBW) = -228.6 + 10 \log_{10}(600) + 10 \log_{10}(10 \times 10^6)$
    *   $N (dBW) = -228.6 + 10 \times 2.778 + 10 \times 7$
    *   $N (dBW) = -228.6 + 27.78 + 70 = -130.82$ dBW

*   Calculate C/N:
    *   $C/N (dB) = P_{rx} (dBW) - N (dBW)$
    *   $C/N (dB) = -145 - (-130.82) = -14.18$ dB

**Question 3:**
A satellite down-link operates at 18 GHz. The distance to the ground station is 38,000 km. Calculate the free-space path loss (FSPL) in dB.

**Answer 3:**
*   Distance ($d$) = 38,000 km = $3.8 \times 10^7$ m
*   Frequency ($f$) = 18 GHz = $1.8 \times 10^{10}$ Hz
*   Speed of light ($c$) = $3 \times 10^8$ m/s

*   $FSPL (dB) = 20 \log_{10} \left( \frac{4 \pi d f}{c} \right)$
*   $FSPL (dB) = 20 \log_{10} \left( \frac{4 \pi \times 3.8 \times 10^7 \times 1.8 \times 10^{10}}{3 \times 10^8} \right)$
*   $FSPL (dB) = 20 \log_{10} \left( \frac{8.56 \times 10^{18}}{3 \times 10^8} \right) = 20 \log_{10} (2.85 \times 10^{10})$
*   $FSPL (dB) = 20 \times 10.456 = 209.12$ dB

---

### 6. Key Points to Remember

*   **Link Budget is Central:** The entire satellite link design revolves around the link budget, which quantifies all gains and losses.
*   **Decibels for Convenience:** All power, gain, and loss values are almost always expressed in decibels (dB) for easier arithmetic calculations.
*   **EIRP:** A crucial parameter representing the effective power radiated by an antenna in its peak direction.
*   **FSPL Increases with Distance and Frequency:** Free-space path loss is a dominant factor and grows with the square of the distance and the square of the frequency.
*   **Noise is Unavoidable:** System noise temperature ($T_{sy}$) is a critical parameter for the receiver, representing the total noise added to the signal.
*   **C/N and C/No are Performance Metrics:** The calculated C/N or C/No is compared against the required values for the chosen modulation and coding scheme to ensure acceptable performance.
*   **Iterative Design:** Satellite link design is often an iterative process. If the initial calculations show insufficient C/N, parameters are adjusted, and the calculation is repeated.
*   **Up-link vs. Down-link:** Both links must be analyzed independently as they have different parameters and constraints. The satellite itself has limited power and antenna size for the down-link, while ground stations can often afford higher transmit power and larger antennas for the up-link.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. References and Further Reading

*   **Pratt & Allnutt:** Chapters 3 (Link Budget Analysis) provides a comprehensive and practical approach to link design calculations.
*   **Ha:** Chapter 5 (Link Budget and Performance Analysis) offers similar insights into the fundamental calculations.
*   **Pritchard:** Chapter 4 (Link Design) covers the essential elements of link design, including noise and interference considerations.

---

This concludes the basic link analysis for satellite link design. The next steps in a complete link design would involve analyzing the impact of interference, calculating BER, and selecting appropriate modulation and coding schemes.