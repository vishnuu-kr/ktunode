---
title: "Performance of analog modulation schemes in AWGN: SNR and figure of merit for different schemes."
subject: "ELECTRONIC COMMUNICATION"
module: "Module 2: Angle Modulation:"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36bf6"
status: "completed"
scrapedAt: "2026-05-23T16:40:18.564Z"
---
# Electronic Communication: Module 2: Angle Modulation - Performance in AWGN

## Topic: Performance of Analog Modulation Schemes in AWGN: SNR and Figure of Merit for Different Schemes

This module focuses on the performance of analog modulation schemes, specifically in the presence of Additive White Gaussian Noise (AWGN). We will analyze their signal-to-noise ratio (SNR) and introduce the concept of a figure of merit to compare their effectiveness.

### **1. Understanding Additive White Gaussian Noise (AWGN)**

**Definition:** AWGN is a fundamental noise model used in communication system analysis. It is characterized by:
*   **Additive:** The noise is added to the transmitted signal.
*   **White:** The noise has a flat power spectral density (PSD) across all frequencies, meaning all frequencies are equally likely.
*   **Gaussian:** The amplitude distribution of the noise follows a Gaussian (normal) probability distribution.

**Impact on Communication:** AWGN corrupts the transmitted signal, leading to errors in the received signal. Its characteristics make it a mathematically tractable model for analyzing system performance.

**Reference:** Kennedy's Electronic Communication Systems, Chapter 5 (Noise in Communication Systems) provides a thorough treatment of noise, including AWGN.

### **2. Performance Metrics: Signal-to-Noise Ratio (SNR)**

**Definition:** SNR is a measure used in science and engineering that compares the level of a desired signal to the level of background noise. It is typically expressed in decibels (dB).

**Formula:**
$$SNR = \frac{\text{Signal Power}}{\text{Noise Power}}$$
In decibels:
$$SNR_{dB} = 10 \log_{10} \left( \frac{\text{Signal Power}}{\text{Noise Power}} \right)$$

**Importance:** A higher SNR indicates a cleaner signal with less noise, leading to better reception and fewer errors.

**Reference:** Tomasi's Electronic Communication Systems, Chapter 4 (Noise and Interference) explains the concept of SNR and its importance in communication systems.

### **3. Figure of Merit for Analog Modulation Schemes**

**Definition:** The figure of merit is a parameter that quantifies the performance of a modulation scheme in terms of its ability to reject noise and preserve the quality of the information signal. It is often defined as the ratio of the output SNR to the input SNR (or a related parameter). A higher figure of merit indicates a better modulation scheme in the presence of noise.

**Why a Figure of Merit is Needed:** While SNR measures the quality of the signal at a specific point, the figure of merit allows us to compare different modulation techniques under similar conditions. It accounts for the processing done by the modulator and demodulator.

### **4. Performance of Analog Modulation Schemes in AWGN**

We will now analyze the performance of different analog modulation schemes (AM, FM, PM) in an AWGN channel, focusing on their output SNR and figures of merit.

#### **4.1 Amplitude Modulation (AM)**

**Types of AM:**
*   **Double Sideband-Suppressed Carrier (DSB-SC):**
    *   Transmitted signal: $s(t) = m(t) \cos(\omega_c t)$
    *   Demodulation: Envelop detector (if a carrier is present) or coherent detector for DSB-SC.
    *   **Output SNR for Coherent AM (DSB-SC):**
        $$ (SNR)_o = \frac{2 E_b}{N_0} $$
        where $E_b$ is the energy per bit and $N_0$ is the noise power spectral density.
    *   **Figure of Merit for DSB-SC:**
        $$ F_{DSB-SC} = \frac{(SNR)_o}{(SNR)_i} $$
        In AM, the input SNR is often related to the ratio of the carrier power to the noise power in the message bandwidth. A detailed derivation shows that the performance of DSB-SC is limited.
*   **Double Sideband-Transmitted Carrier (DSB-TC) / Standard AM:**
    *   Transmitted signal: $s(t) = [A_c + m(t)] \cos(\omega_c t)$
    *   Demodulation: Envelop detector.
    *   **Output SNR for Standard AM:**
        $$ (SNR)_o = \frac{P_m}{P_n} = \frac{R_{m}}{B W_m} \frac{A_c^2/2}{N_0 BW_m} = \frac{A_c^2 R_m}{2 N_0 BW_m} $$
        where $P_m$ is the message signal power, $P_n$ is the noise power in the message bandwidth, $R_m$ is the average power of the modulating signal, and $BW_m$ is the bandwidth of the modulating signal.
    *   **Figure of Merit for Standard AM:**
        $$ F_{AM} = \frac{(SNR)_o}{(SNR)_i} = \frac{1}{1 + \frac{2R_m}{A_c^2}} $$
        The term $\frac{2R_m}{A_c^2}$ is the ratio of the power in the sidebands to the power in the carrier. This figure of merit is always less than 1 (or 0 dB), indicating that AM is susceptible to noise. The performance depends heavily on the carrier amplitude ($A_c$).
*   **Single Sideband (SSB):**
    *   Transmitted signal: Contains only one sideband.
    *   Demodulation: Coherent demodulation.
    *   **Output SNR for SSB:**
        $$ (SNR)_o = \frac{E_b}{N_0} $$
        This is better than DSB-SC in terms of energy efficiency per bit if the bandwidth is the same.
    *   **Figure of Merit for SSB:**
        $$ F_{SSB} = \frac{(SNR)_o}{(SNR)_i} \approx 1 $$
        SSB offers the best performance among AM variants in AWGN, approaching ideal demodulation.

**Key Points for AM:**
*   AM is susceptible to noise, particularly impulsive noise and static.
*   Standard AM's performance is limited by the need to transmit a carrier for simple envelope detection.
*   DSB-SC and SSB require coherent demodulation, which is more complex but offers better noise performance. SSB is the most bandwidth-efficient and offers the best SNR for a given transmitted power among AM schemes.

**Reference:** Haykin & Mohre's Communication Systems, Chapter 4 (Amplitude Modulation) and Chapter 5 (Angle Modulation) detail the SNR performance of AM schemes. Kennedy's book also provides good comparative analysis.

#### **4.2 Angle Modulation (FM and PM)**

Angle modulation schemes are generally more robust to noise than AM. Their performance is characterized by the "quieting effect," where beyond a certain input SNR, further increases in input SNR yield little improvement in output SNR.

*   **Frequency Modulation (FM):**
    *   Transmitted signal: $s(t) = A_c \cos[\omega_c t + \phi(t)]$ where $\frac{d\phi(t)}{dt} = k_f m(t)$.
    *   Demodulation: Foster-Seeley discriminator, ratio detector, or PLL.
    *   **Output SNR for FM:**
        The output SNR for FM depends on the input SNR and the modulation index.
        $$ (SNR)_o = \frac{3}{2} \beta^2 \frac{(SNR)_i}{BW_{IF}/BW_m} $$
        where $\beta = \frac{\Delta f}{BW_m}$ is the modulation index, $\Delta f$ is the frequency deviation, $(SNR)_i$ is the input SNR (ratio of carrier power to noise power in the IF bandwidth), and $BW_{IF}$ is the IF bandwidth (typically $2BW_m$).
    *   **Figure of Merit for FM:**
        $$ F_{FM} = \frac{(SNR)_o}{(SNR)_i} = \frac{3}{2} \beta^2 \frac{1}{BW_{IF}/BW_m} $$
        For wideband FM ($\beta \gg 1$), this figure of merit can be significantly greater than 1. This demonstrates FM's advantage over AM in noise immunity. However, FM has a threshold effect. Below a certain input SNR, the output SNR drops drastically.
*   **Phase Modulation (PM):**
    *   Transmitted signal: $s(t) = A_c \cos[\omega_c t + k_p m(t)]$ where $k_p$ is the phase sensitivity.
    *   Demodulation: Coherent demodulation with a phase detector or PLL.
    *   **Output SNR for PM:**
        $$ (SNR)_o = \frac{3}{2} \frac{(SNR)_i}{BW_{IF}/BW_m} $$
        The output SNR of PM is similar to FM but without the $\beta^2$ term.
    *   **Figure of Merit for PM:**
        $$ F_{PM} = \frac{(SNR)_o}{(SNR)_i} = \frac{3}{2} \frac{1}{BW_{IF}/BW_m} $$
        PM has better noise performance than AM but is generally inferior to FM for the same bandwidth.

**Key Points for Angle Modulation (FM/PM):**
*   **Quieting Effect:** Both FM and PM exhibit a quieting effect, where noise has less impact on the demodulated output compared to AM, especially at higher input SNRs.
*   **Threshold Effect:** Angle modulation schemes suffer from a threshold effect. Below a certain input SNR, the demodulator can lock onto noise, leading to a significant degradation in output SNR. This is a key limitation.
*   **FM Advantage:** Wideband FM ($\beta \gg 1$) offers a significant improvement in noise immunity over AM due to its ability to trade bandwidth for improved SNR.
*   **PM vs. FM:** PM is simpler to implement in some cases but FM generally provides better noise performance for a given bandwidth.

**Reference:** Taub & Schilling's Principles of Communication Systems, Chapter 10 (Frequency Modulation) and Chapter 11 (Phase Modulation) provide detailed mathematical derivations of SNR for FM and PM. Ziemer & Tranter's Principles of Communications is also an excellent resource for these topics.

### **5. Comparison of Analog Modulation Schemes in AWGN**

| Modulation Scheme | Figure of Merit (Relative) | Bandwidth Efficiency | Complexity of Demodulator | Threshold Effect | Key Advantage                                  | Key Disadvantage                                  |
| :---------------- | :------------------------- | :------------------- | :------------------------ | :--------------- | :--------------------------------------------- | :----------------------------------------------- |
| **DSB-SC AM**     | Moderate                   | Moderate             | Coherent                  | No               | Good bandwidth efficiency for its SNR performance | Requires coherent demodulation                 |
| **SSB AM**        | High                       | High                 | Coherent                  | No               | Best bandwidth efficiency, good SNR performance  | Requires precise carrier recovery for demodulation |
| **Standard AM**   | Low                        | Moderate             | Envelope                  | No               | Simple demodulator                             | Poor noise immunity                              |
| **FM**            | Very High (wideband)       | Low                  | Complex (e.g., PLL)       | Yes              | Excellent noise immunity (above threshold)     | Requires large bandwidth, threshold effect       |
| **PM**            | High                       | Low                  | Coherent                  | Yes              | Better than AM, simpler than FM                | Less bandwidth efficient than FM, threshold effect |

**Important:** The "figure of merit" can be defined in various ways. Here, we are conceptually comparing the output SNR achieved for a given input SNR relative to the ideal. The FM figure of merit can be greater than 1 for wideband FM, signifying a "processing gain."

**Reference:** Lathi & Ding's Modern Digital and Analog Communication Systems provides a comprehensive comparison of these schemes. Proakis & Salehi's Communication System Engineering also offers valuable comparative insights.

### **6. Relating to Course Outcomes**

*   **CO1: Explain the working of Amplitude modulator and demodulator circuits using mathematical relations.**
    *   This module implicitly builds on the understanding of AM modulator/demodulator circuits by analyzing their performance in noise. The SNR formulas depend on the signal characteristics generated by these circuits.
*   **CO2: Explain the characteristics of various analog modulation schemes in terms of spectra, power and efficiency.**
    *   This module directly addresses efficiency and performance in terms of SNR and noise immunity. The bandwidth requirements and power distribution (carrier vs. sidebands) influence these performance metrics.
*   **CO3: Understand the various processing blocks of a digital communication system.**
    *   While this module is about analog modulation, understanding the performance limitations of analog schemes in AWGN provides context for why digital modulation is often preferred. Digital systems aim to achieve similar or better noise performance with increased robustness and flexibility.
*   **CO4: Apply the knowledge of digital modulation in digital transmission.**
    *   The insights gained here about SNR and noise immunity in analog systems inform the design and analysis of digital modulation schemes (e.g., how different digital schemes perform in AWGN).

### **7. Practice Questions and Answers**

**Question 1:** A standard AM signal with carrier amplitude $A_c = 10V$ and a sinusoidal modulating signal with amplitude $m_p = 5V$ is transmitted. The bandwidth of the modulating signal is $4$ kHz. If the noise power spectral density at the receiver input is $N_0 = 10^{-10} W/Hz$, and the carrier frequency is well above the bandwidth, what is the approximate output SNR of the demodulated message signal? Assume the message signal power is averaged over time.

**Answer 1:**
For standard AM, the output SNR is given by:
$$ (SNR)_o = \frac{A_c^2 R_m}{2 N_0 BW_m} $$
The modulating signal is sinusoidal $m(t) = m_p \cos(\omega_m t)$. The average power of a sinusoid $m_p \cos(\omega_m t)$ is $R_m = \frac{m_p^2}{2}$.
Given:
$A_c = 10V$
$m_p = 5V$
$R_m = \frac{5^2}{2} = \frac{25}{2} = 12.5 W$ (Assuming voltage is into a 1-ohm resistor for power calculation, or we are comparing power ratios where units cancel. In practical terms, this would be related to RMS voltage and impedance.)
$N_0 = 10^{-10} W/Hz$
$BW_m = 4$ kHz $= 4 \times 10^3 Hz$

$$ (SNR)_o = \frac{(10V)^2 \times 12.5 W}{2 \times 10^{-10} W/Hz \times 4 \times 10^3 Hz} $$
$$ (SNR)_o = \frac{100 \times 12.5}{8 \times 10^{-7}} = \frac{1250}{8 \times 10^{-7}} = 156.25 \times 10^7 = 1.5625 \times 10^9 $$
In dB:
$$ (SNR)_o (dB) = 10 \log_{10}(1.5625 \times 10^9) \approx 10 \times 9.19 \approx 91.9 dB $$
*Note: In many textbook examples, the focus is on the ratio of sideband power to carrier power. The calculation above directly uses signal and noise powers within the bandwidth.*

**Question 2:** What is the primary advantage of FM over AM in the presence of AWGN, and what is its major limitation?

**Answer 2:**
*   **Advantage:** FM offers significantly better noise immunity than AM, especially when wideband FM is used (high modulation index). This is because the output SNR of FM is proportional to the square of the modulation index ($\beta^2$), allowing for a "processing gain" where bandwidth is traded for improved SNR.
*   **Limitation:** The major limitation of FM is the **threshold effect**. Below a certain input SNR, the FM demodulator can lock onto noise signals, causing a drastic degradation in the output SNR, making it perform worse than AM in very low SNR conditions.

**Question 3:** Compare the figure of merit for SSB AM and Wideband FM. Which one is generally better in terms of noise immunity for the same transmitted power and message bandwidth?

**Answer 3:**
*   **SSB AM:** The figure of merit for SSB AM is approximately 1 ($0 dB$), indicating that it demodulates the signal with minimal degradation from noise for a given bandwidth.
*   **Wideband FM ($\beta \gg 1$):** The figure of merit for FM is $F_{FM} = \frac{3}{2} \beta^2 \frac{1}{BW_{IF}/BW_m}$. For wideband FM, $\beta$ is large, and if the IF bandwidth is close to the necessary RF bandwidth for wideband FM, the figure of merit can be significantly greater than 1 (e.g., 25 dB or more).

**Comparison:** Wideband FM is generally superior to SSB AM in terms of noise immunity (higher figure of merit) for the same transmitted power and message bandwidth, *provided the input SNR is above the FM threshold*. The trade-off is that FM requires significantly more bandwidth.

### **8. Important Points to Remember**

*   **AWGN Model:** Essential for analyzing system performance.
*   **SNR:** Key metric for signal quality. Higher is better.
*   **Figure of Merit:** A comparative measure of modulation scheme efficiency in noise.
*   **AM Performance:** Standard AM is simple but noisy. SSB is bandwidth-efficient and offers good SNR. DSB-SC is a compromise.
*   **Angle Modulation (FM/PM):** Offers superior noise immunity to AM (processing gain) but suffers from a threshold effect.
*   **FM Threshold:** The critical input SNR below which performance degrades severely.
*   **Bandwidth vs. SNR Trade-off:** Angle modulation (especially wideband FM) exemplifies this trade-off, using more bandwidth for better noise performance.
*   **Complexity:** Schemes with better noise performance (SSB, FM, PM) often require more complex demodulators (coherent detection, PLLs).

This comprehensive study guide should provide a solid foundation for understanding the performance of analog modulation schemes in AWGN. Remember to consult the listed textbooks for detailed mathematical derivations and further insights.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
