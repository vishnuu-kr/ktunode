---
title: "Interference and system capacity"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 3: Introduction to Wireless Communication"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed23"
status: "completed"
scrapedAt: "2026-05-23T17:58:57.820Z"
---
# Advanced Communication Theory: Module 3 - Introduction to Wireless Communication
## Topic: Interference and System Capacity

This module delves into the fundamental aspects of wireless communication, focusing on the pervasive challenges of interference and the ultimate limits on how much information we can reliably transmit, i.e., system capacity. Understanding these concepts is crucial for designing efficient and robust wireless systems.

---

### 1. Interference in Wireless Communication

Interference is a significant limiting factor in the performance of any wireless communication system. It arises from unwanted signals that corrupt the desired signal.

#### 1.1 Types of Interference

*   **Co-Channel Interference (CCI):** This occurs when users in different cells or geographical areas are assigned the same frequency channel. The signals from these users interfere with each other.
    *   **Source:** Frequency reuse in cellular systems.
    *   **Impact:** Degrades Signal-to-Interference Ratio (SIR), leading to reduced data rates and increased error rates.
    *   **Mitigation:**
        *   **Cellular Planning:** Increasing the minimum distance between co-channel cells.
        *   **Sectorization:** Dividing a cell into sectors and using directional antennas.
        *   **Power Control:** Reducing the transmit power of users to minimize their interference footprint.
        *   **Directional Antennas:** Focusing antenna beams to transmit and receive in specific directions.

*   **Adjacent Channel Interference (ACI):** This occurs when signals in adjacent frequency channels interfere with each other.
    *   **Source:** Imperfect filtering in transmitters and receivers, causing out-of-band emissions to spill into adjacent channels.
    *   **Impact:** Corrupts signals in neighboring channels, leading to dropped calls or data errors.
    *   **Mitigation:**
        *   **Sharp Filters:** Using highly selective filters in transmitters and receivers to suppress out-of-band signals.
        *   **Guard Bands:** Allocating unused frequency bands between adjacent channels to provide a buffer.

*   **Inter-symbol Interference (ISI):** This is a type of self-interference that occurs when the delayed version of a transmitted symbol overlaps with the current symbol.
    *   **Source:** Multipath propagation, where a signal travels along multiple paths of different lengths and arrives at the receiver at different times. This causes the signal to spread in time.
    *   **Impact:** Distorts the received signal, making it difficult for the receiver to distinguish between different symbols.
    *   **Mitigation:**
        *   **Equalization:** Techniques at the receiver to compensate for the distortion caused by multipath.
        *   **Orthogonal Frequency Division Multiplexing (OFDM):** Dividing the data into many sub-carriers, each with a lower data rate and thus less susceptible to ISI.

*   **External Interference:** Signals originating from sources other than the intended communication system.
    *   **Source:** Other wireless systems (e.g., Wi-Fi, Bluetooth, radar), natural phenomena (e.g., lightning), or man-made devices (e.g., microwave ovens).
    *   **Impact:** Can significantly degrade system performance, especially if the interfering source is strong.
    *   **Mitigation:**
        *   **Spectrum Management:** Efficient allocation and regulation of radio frequency spectrum.
        *   **Shielding:** Physical shielding of sensitive equipment.
        *   **Spread Spectrum Techniques:** Spreading the signal over a wide frequency band, making it more resistant to narrow-band interference.

#### 1.2 Interference in Cellular Systems

*   **Frequency Reuse:** The practice of reusing the same frequencies in different geographical areas (cells) to increase spectrum efficiency. This is the primary cause of CCI.
*   **Cell Size and Reuse Factor:** The size of a cell and the reuse factor (N, the number of cells in a cluster before frequencies are reused) directly impact CCI. Larger cells and smaller reuse factors increase CCI.
*   **Signal-to-Interference Ratio (SIR):** A critical metric for evaluating the quality of a wireless link. A higher SIR generally means better performance.

    $$ \text{SIR} = \frac{P_r}{\sum_{i=1}^k P_{i,I}} $$
    Where:
    *   $P_r$ is the received power of the desired signal.
    *   $P_{i,I}$ is the received power of the $i$-th interfering signal.
    *   $k$ is the number of interfering sources.

    **Key Concept (Rappaport):** The SIR threshold required for acceptable performance is highly dependent on the modulation and coding schemes used. For example, digital modulation schemes often require SIR values in the range of 5-20 dB.

#### 1.3 Interference Mitigation Techniques

*   **Power Control:** Dynamically adjusting the transmit power of mobile devices to maintain a target SIR while minimizing interference to others.
    *   **Open-loop Power Control:** Based on estimates of path loss from the mobile to the base station.
    *   **Closed-loop Power Control:** Based on feedback from the base station about the received signal quality.

*   **Directional Antennas:** Using antennas that transmit and receive signals in specific directions, thereby reducing interference to and from users outside the intended sector.
    *   **Benefits:** Can significantly improve SIR and increase system capacity.
    *   **Implementation:** Sectorized antennas at base stations, beamforming at advanced systems.

*   **Spread Spectrum Techniques:** Spreading the transmitted signal over a much wider bandwidth than necessary.
    *   **Types:**
        *   **Frequency Hopping Spread Spectrum (FHSS):** The transmitter and receiver hop between different frequencies according to a pseudorandom sequence.
        *   **Direct Sequence Spread Spectrum (DSSS):** The data signal is multiplied by a pseudorandom noise (PN) code that has a much higher chip rate than the data rate.
    *   **Advantages:** Resistance to narrowband interference, inherent security, and CDMA (Code Division Multiple Access) capabilities.

---

### 2. System Capacity in Wireless Communication

System capacity refers to the maximum rate at which information can be reliably transmitted over a wireless communication link or network. It is fundamentally limited by noise, interference, bandwidth, and the quality of the transmission techniques used.

#### 2.1 Shannon-Hartley Theorem: The Theoretical Limit

The Shannon-Hartley theorem provides the theoretical upper bound on the data rate that can be transmitted over a noisy channel.

*   **Channel Capacity (C):** The maximum achievable data rate.

    $$ C = B \log_2 \left(1 + \frac{S}{N}\right) \text{ bits/sec} $$
    Where:
    *   $C$ is the channel capacity.
    *   $B$ is the bandwidth of the channel in Hertz.
    *   $S$ is the average received signal power.
    *   $N$ is the average noise power.
    *   $S/N$ is the Signal-to-Noise Ratio (SNR).

    **Key Concept (Cover & Thomas):** The Shannon-Hartley theorem assumes an additive white Gaussian noise (AWGN) channel and states that reliable communication is possible at any rate $R < C$. Above capacity ($R > C$), reliable communication is impossible.

*   **Implications for Wireless Systems:**
    *   **Bandwidth is Precious:** Increasing bandwidth ($B$) directly increases capacity.
    *   **SNR is Crucial:** Improving the SNR ($S/N$) is essential for higher data rates. This can be achieved by increasing transmit power (within limits), reducing noise, or employing more sensitive receivers.
    *   **Trade-offs:** There's a fundamental trade-off between bandwidth and SNR for a given capacity. Systems can achieve the same capacity with a wider bandwidth and lower SNR, or a narrower bandwidth and higher SNR.

#### 2.2 Capacity of Wireless Channels

Wireless channels are more complex than AWGN channels due to fading and interference.

*   **AWGN Channel Capacity (Recall):** $C = B \log_2(1 + S/N)$

*   **Capacity of a Fading Channel:** Fading introduces fluctuations in the received signal strength, making it harder to achieve the theoretical AWGN capacity.

    *   **Outage Probability:** The probability that the instantaneous SNR falls below a certain threshold required for a given data rate.
    *   **Average Capacity:** The capacity calculated by averaging over the fading distribution.

    **Key Concept (Goldsmith):** For a Rayleigh fading channel, the capacity is lower than that of an AWGN channel for the same average SNR. This is because the deep fades significantly reduce the achievable data rate for a portion of the time.

*   **Capacity with Interference:** When interference is present, the term $N$ in the Shannon-Hartley theorem is replaced by the sum of noise power and interference power ($N + I$). However, in practical systems, interference is often treated as a form of noise, leading to the Signal-to-Interference-plus-Noise Ratio (SINR).

    $$ C \approx B \log_2 \left(1 + \frac{S}{N+I}\right) $$
    This is a simplified view. More accurate models consider the interference as a separate random process.

#### 2.3 System Capacity Enhancements

*   **Multiple-Input Multiple-Output (MIMO):** Using multiple antennas at both the transmitter and receiver to exploit spatial diversity and spatial multiplexing.
    *   **Spatial Multiplexing:** Transmitting independent data streams simultaneously over different antenna pairs, significantly increasing data rate (capacity).
    *   **Spatial Diversity:** Transmitting the same data stream over multiple antenna pairs to combat fading and improve reliability.
    *   **Capacity of MIMO (Goldsmith):** The capacity of a MIMO system is roughly proportional to the minimum of the number of transmit and receive antennas ($N_T, N_R$) and the bandwidth.

        $$ C_{\text{MIMO}} \approx \min(N_T, N_R) \times B \log_2 \left(1 + \frac{SNR}{N_T}\right) $$
        This formula highlights how multiple antennas can multiply the capacity achievable by a single-antenna system.

*   **Orthogonal Frequency Division Multiplexing (OFDM):** Dividing a wideband channel into many narrowband orthogonal sub-carriers.
    *   **Benefits:**
        *   **Combats ISI:** Each sub-carrier experiences a more constant channel, reducing ISI.
        *   **Efficient Filtering:** Easier to implement filters for narrowband sub-carriers.
        *   **Flexibility:** Allows for adaptive modulation on different sub-carriers based on their channel quality.
    *   **Capacity Impact:** OFDM itself doesn't increase the total Shannon capacity but makes it more achievable in frequency-selective fading channels.

*   **Advanced Modulation and Coding Schemes:** Using sophisticated modulation techniques (e.g., QAM) and powerful error correction codes (e.g., LDPC, Turbo codes) to get closer to the Shannon limit.
    *   **Link Adaptation:** Dynamically adjusting modulation and coding schemes based on the current channel conditions to maximize throughput while maintaining a desired error rate.

*   **Spread Spectrum (CDMA):** In Code Division Multiple Access (CDMA) systems, multiple users share the same frequency band simultaneously, but are separated by unique spreading codes.
    *   **Capacity of CDMA:** Limited by the processing gain (ratio of spreading bandwidth to data bandwidth) and the desired Signal-to-Interference-plus-Noise Ratio (SINR) for each user.

#### 2.4 Cellular System Capacity

The overall capacity of a cellular system is a complex function of many factors:

*   **Total Bandwidth Available:** The sum of bandwidth allocated to all cells.
*   **Number of Cells:** More cells mean more users can be served simultaneously.
*   **Frequency Reuse Factor:** A smaller reuse factor (N) increases the potential for CCI but allows for more frequent reuse of frequencies, thus increasing spectral efficiency.
*   **Antenna Sectorization:** Using sectored antennas at base stations reduces CCI.
*   **Power Control:** Optimizing transmit power to minimize interference.
*   **Modulation and Coding Efficiency:** How close the system operates to the Shannon limit for its operating SNR/SINR.
*   **Overhead:** Control channels, signaling, etc.

**Key Concept (Schiller):** The capacity of a cellular system is often measured in terms of **spectral efficiency**, which is the total data rate per unit of bandwidth per unit of geographical area (e.g., bps/Hz/cell or bps/Hz/km²).

$$ \text{Spectral Efficiency} \propto \frac{B}{A_{\text{cell}}} \times \log_2\left(1 + \frac{S}{I + N}\right) $$
Where $A_{\text{cell}}$ is the area of a cell. Minimizing interference ($I$) and maximizing the SINR are key to achieving high spectral efficiency.

---

### 3. Learning Outcome Alignment and Course Outcomes (COs)

This topic directly contributes to several course outcomes:

*   **CO4: Explain the basic Principle of wireless communication techniques (Knowledge Level: K2)**
    *   Understanding interference types, their sources (like frequency reuse), and mitigation strategies (power control, directional antennas, spread spectrum) are fundamental principles of wireless communication.
    *   The concept of channel capacity (Shannon-Hartley) is a core principle of information theory applied to wireless.

*   **CO5: Describe the wireless channel models and analyse the performance of the modulation techniques for flat fading channels (Knowledge Level: K2)**
    *   While this topic focuses on interference and capacity, the underlying channel conditions (AWGN, fading) are implicit. Interference itself is a critical aspect of channel modeling beyond just noise.
    *   The performance analysis of modulation techniques is directly impacted by SIR/SINR, which is degraded by interference.

*   **CO6: Identify the advantages of various diversity and equalization techniques for improving the wireless receiver performance (Knowledge Level: K3)**
    *   Interference mitigation techniques like directional antennas and spread spectrum can be seen as forms of interference diversity or cancellation that improve receiver performance.
    *   While not directly about diversity/equalization, understanding the problems they solve (ISI, interference) provides context for their importance.

*   **CO1: Explain information theory measures such as entropy, conditional entropy, mutual information (Knowledge Level: K2)**
    *   The Shannon-Hartley theorem is a direct application of information theory to channel capacity. Understanding the relationship between SNR, bandwidth, and the maximum reliable rate is a practical extension of information theory concepts.

---

### 4. Important Points to Remember

*   **Interference is ubiquitous** in wireless systems and is a primary performance limiter.
*   **CCI and ACI** are major concerns in cellular and other multi-user systems.
*   **ISI** is caused by multipath and is crucial to manage for high-speed data transmission.
*   **The Shannon-Hartley theorem** sets the ultimate theoretical limit on reliable communication rate.
*   **Capacity is proportional to bandwidth and the logarithm of SNR/SINR.**
*   **Fading** degrades capacity compared to AWGN channels.
*   **MIMO and OFDM** are key technologies for increasing wireless capacity and spectral efficiency.
*   **Spectral efficiency** is a critical metric for cellular systems.
*   **Trade-offs** exist between bandwidth, power, interference, and achievable data rates.

---

### 5. Practice Questions and Exercises

**Question 1 (Conceptual):**
Explain the difference between Co-Channel Interference (CCI) and Adjacent Channel Interference (ACI). Provide one mitigation technique for each.

**Answer 1:**
*   **CCI:** Occurs when users in different cells using the same frequency channel interfere with each other, primarily due to frequency reuse. Mitigation: Increase cell reuse distance or use directional antennas.
*   **ACI:** Occurs when signals in adjacent frequency channels interfere due to imperfect filtering. Mitigation: Use sharp filters or guard bands.

**Question 2 (Application - Shannon-Hartley):**
A wireless communication channel has a bandwidth of 10 MHz and a Signal-to-Noise Ratio (SNR) of 20 dB. Calculate the maximum theoretical data rate (channel capacity) that can be reliably transmitted over this channel.

**Answer 2:**
*   Bandwidth ($B$) = 10 MHz = $10 \times 10^6$ Hz
*   SNR = 20 dB
*   Convert SNR from dB to linear scale: $SNR_{\text{linear}} = 10^{\frac{\text{SNR}_{\text{dB}}}{10}} = 10^{\frac{20}{10}} = 10^2 = 100$
*   Channel Capacity ($C$) = $B \log_2(1 + SNR_{\text{linear}})$
*   $C = (10 \times 10^6) \log_2(1 + 100)$
*   $C = (10 \times 10^6) \log_2(101)$
*   Using $\log_2(101) \approx \log_2(128) = 7$ or $\log_2(101) \approx 6.658$
*   $C \approx (10 \times 10^6) \times 6.658 \text{ bits/sec}$
*   $C \approx 66.58 \times 10^6 \text{ bits/sec} \approx 66.58$ Mbps

**Question 3 (Conceptual - MIMO):**
What is the primary advantage of using MIMO systems for wireless communication, and how does it relate to system capacity?

**Answer 3:**
The primary advantage of MIMO systems is the ability to significantly increase system capacity and spectral efficiency. This is achieved through:
*   **Spatial Multiplexing:** Transmitting multiple independent data streams simultaneously across different antenna pairs, effectively multiplying the data rate.
*   **Spatial Diversity:** Transmitting the same data over multiple antenna paths to combat fading and improve reliability, thereby enabling higher data rates or lower error rates for a given transmit power.

**Question 4 (Scenario - Interference):**
A mobile phone operator is experiencing poor call quality in a specific area. They suspect Co-Channel Interference (CCI) is the cause. What factors might be contributing to this issue, and what steps could they take to diagnose and potentially alleviate the problem?

**Answer 4:**
**Contributing Factors to CCI:**
*   **Aggressive Frequency Reuse:** Cells are too small or the reuse pattern is too tight, bringing co-channel cells too close.
*   **High Transmit Power:** Base stations or mobile devices transmitting at higher power than necessary, increasing their interference footprint.
*   **Poor Antenna Directionality:** Base station antennas are not sufficiently directional, allowing signals to propagate into unintended co-channel areas.
*   **Terrain/Obstructions:** Unexpected propagation paths due to terrain or buildings might be bringing co-channel signals into a cell where they shouldn't be.

**Diagnostic and Alleviation Steps:**
*   **Network Survey/Drive Test:** Measure SIR/SINR in the affected area. Identify the strength and origin of interfering signals.
*   **Review Cell Planning:** Check the frequency assignments and distances between co-channel cells. Consider increasing the reuse distance or changing the reuse pattern if feasible.
*   **Implement Power Control:** Ensure mobile devices and base stations are using appropriate power control mechanisms to transmit only the necessary power.
*   **Optimize Antenna Parameters:** Adjust antenna tilt and azimuth to direct the main lobe away from co-channel cells. Consider sectorization if not already implemented.
*   **Deploy Advanced Techniques:** If feasible, consider technologies like beamforming to further manage spatial interference.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 6. References

*   **Goldsmith, A.** (2005). *Wireless Communications*. Cambridge University Press. (Chapters on Capacity, MIMO, Interference)
*   **Rappaport, T. S.** (2022). *Wireless communication: Principles and Practice*. Pearson Education. (Chapters on Interference, Cellular Design, Capacity)
*   **Cover, T. M., & Thomas, J. A.** (2006). *Elements of Information Theory*. Wiley-Interscience. (Chapter on Channel Capacity)
*   **Schiller, J.** (2008). *Mobile Communications*. Pearson. (Chapters on Cellular System Capacity, Interference)