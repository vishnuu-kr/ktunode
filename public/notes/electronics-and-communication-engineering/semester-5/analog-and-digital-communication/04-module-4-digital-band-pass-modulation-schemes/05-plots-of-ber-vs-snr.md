---
title: "Plots of BER Vs SNR."
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 4: Digital band pass modulation schemes"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe91c"
status: "completed"
scrapedAt: "2026-05-23T17:53:07.073Z"
---
# Module 4: Digital Bandpass Modulation Schemes - Plots of BER vs. SNR

## Introduction to Digital Bandpass Modulation

Digital bandpass modulation schemes are essential for transmitting digital information over bandlimited channels, typically those used in wireless communication. Unlike baseband signaling where the signal occupies frequencies starting from zero, bandpass signaling shifts the digital signal to a specific carrier frequency. This is crucial for efficient spectrum utilization and the use of resonant circuits in transmitters and receivers.

This module focuses on understanding the performance of various digital bandpass modulation schemes by analyzing their Bit Error Rate (BER) as a function of Signal-to-Noise Ratio (SNR).

## Learning Outcomes Addressed in this Topic:

*   **LO1: Explain the performance of digital bandpass modulation schemes in terms of BER vs. SNR.**
*   **LO2: Analyze the trade-offs between different digital bandpass modulation schemes based on their BER vs. SNR performance.**
*   **LO3: Understand the impact of AWGN on the performance of digital bandpass modulation.**
*   **LO4: Interpret and utilize BER vs. SNR plots to select appropriate modulation schemes for specific applications.**

## Key Concepts and Definitions:

*   **Bit Error Rate (BER):** The ratio of the number of bit errors to the total number of bits transmitted. A lower BER indicates better performance.
    *   *Formula:* $BER = \frac{N_e}{N_t}$, where $N_e$ is the number of erroneous bits and $N_t$ is the total number of bits transmitted.
*   **Signal-to-Noise Ratio (SNR):** The ratio of the power of the transmitted signal to the power of the additive noise. It's a crucial measure of signal quality.
    *   *Commonly expressed in dB:* $SNR_{dB} = 10 \log_{10} \left(\frac{P_s}{P_n}\right)$, where $P_s$ is the signal power and $P_n$ is the noise power.
    *   In digital communications, it's often expressed as the ratio of energy per bit ($E_b$) to the noise power spectral density ($N_0$) per Hz, denoted as $E_b/N_0$.
        *   $E_b/N_0 = \frac{P_s T_b}{P_n}$, where $T_b$ is the bit duration.
        *   $E_b/N_0$ in dB = $10 \log_{10} \left(\frac{E_b}{N_0}\right)$.
*   **Additive White Gaussian Noise (AWGN) Channel:** A channel model where the noise added to the transmitted signal is independent of the signal, has a uniform power spectral density across all frequencies (white), and follows a Gaussian distribution. This is a standard and widely used model for theoretical analysis. (Refer to Haykin & Moher, 5th Ed., Chapter 4 for details on AWGN).
*   **Bandpass Modulation:** Digital modulation schemes where the baseband digital signal is modulated onto a high-frequency carrier wave. This allows for efficient transmission over bandlimited channels.
*   **Carrier Amplitude and Phase:** The parameters of the carrier wave that are manipulated to encode the digital information.

## Common Digital Bandpass Modulation Schemes and their BER vs. SNR Performance:

The performance of these schemes is typically evaluated in an AWGN channel, and the BER is plotted against $E_b/N_0$. A lower BER at a given $E_b/N_0$ signifies a more robust modulation scheme.

### 1. Amplitude Shift Keying (ASK)

*   **Concept:** The amplitude of the carrier wave is varied to represent binary data.
    *   Binary 0: Carrier amplitude is $A_1$.
    *   Binary 1: Carrier amplitude is $A_2$.
    *   In simpler forms like Binary ASK (or On-Off Keying), one amplitude is non-zero (e.g., $A$) and the other is zero.
*   **BER Performance:**
    *   **Binary ASK (OOK):** Poor performance. Requires a high $E_b/N_0$ to achieve a low BER.
    *   **M-ary ASK:** Performance degrades as M increases.
*   **Plot Characteristics:** The BER vs. $E_b/N_0$ curve for Binary ASK is significantly higher than other schemes for a given SNR.

*(Refer to Lathi & Ding, 5th Ed., Chapter 6 for detailed mathematical derivations and plots for ASK).*

### 2. Frequency Shift Keying (FSK)

*   **Concept:** The frequency of the carrier wave is varied to represent binary data.
    *   Binary 0: Carrier frequency is $f_0$.
    *   Binary 1: Carrier frequency is $f_1$.
*   **BER Performance:**
    *   **Coherent Detection:** Better performance than ASK.
    *   **Non-coherent Detection:** Performance is worse than coherent detection but simpler to implement. The performance is often compared to coherent binary PSK.
    *   **M-ary FSK:** Performance degrades as M increases.
*   **Plot Characteristics:** FSK curves are generally below ASK curves but above PSK for coherent detection. Non-coherent FSK curves are lower than coherent ASK but still worse than coherent PSK.

*(Refer to Haykin & Moher, 5th Ed., Chapter 7 and Proakis & Salehi, 6th Ed., Chapter 5 for detailed analysis of FSK).*

### 3. Phase Shift Keying (PSK)

*   **Concept:** The phase of the carrier wave is varied to represent binary data.
    *   **Binary PSK (BPSK):** Two phase shifts (e.g., 0 and $\pi$) represent binary 0 and 1.
    *   **Quadrature PSK (QPSK):** Four phase shifts (e.g., $\pi/4, 3\pi/4, 5\pi/4, 7\pi/4$) are used to transmit 2 bits per symbol.
    *   **M-ary PSK:** $M$ phase shifts represent $\log_2 M$ bits per symbol.
*   **BER Performance:**
    *   **BPSK:** Excellent performance in AWGN. It is considered a benchmark for comparison.
    *   **QPSK:** Achieves the same BER as BPSK at the same symbol energy, but transmits data at twice the rate by sending 2 bits per symbol. This means for the same *bit* energy ($E_b$), QPSK will have a higher symbol energy, leading to potentially better BER at the same $E_b/N_0$ compared to BPSK if symbol energy is the primary consideration for symbol detection. However, when comparing *bit* error rate at the same $E_b/N_0$, QPSK and BPSK perform identically.
    *   **M-ary PSK:** Performance degrades as M increases.
*   **Plot Characteristics:** BPSK has one of the best BER vs. $E_b/N_0$ curves among simple modulation schemes. QPSK will overlap with BPSK when plotting BER vs. $E_b/N_0$.

*(Refer to Lathi & Ding, 5th Ed., Chapter 6, Haykin & Moher, 5th Ed., Chapter 7, and Proakis & Salehi, 6th Ed., Chapter 4 for comprehensive details on PSK).*

### 4. Quadrature Amplitude Modulation (QAM)

*   **Concept:** Both the amplitude and phase of the carrier wave are varied to represent digital data.
    *   **QPSK (as a special case of 4-QAM):** Constant amplitude, varied phase.
    *   **8-QAM, 16-QAM, etc.:** Varying amplitude and phase according to a constellation diagram.
*   **BER Performance:**
    *   Higher order QAM schemes (e.g., 16-QAM, 64-QAM) offer higher data rates but require higher SNR for acceptable BER.
    *   At a given $E_b/N_0$, higher order QAM has a worse BER than lower order modulation.
*   **Plot Characteristics:** The BER curves for higher order QAM are shifted to the right (require higher $E_b/N_0$) compared to BPSK and QPSK.

*(Refer to Haykin & Moher, 5th Ed., Chapter 7 and Proakis & Salehi, 6th Ed., Chapter 5 for QAM analysis).*

## Visualizing BER vs. SNR Plots:

BER vs. $E_b/N_0$ plots are semi-logarithmic, with $E_b/N_0$ (or SNR) on the x-axis (often in dB) and BER on the y-axis (on a logarithmic scale).

**General Observations on the Plots:**

*   **As $E_b/N_0$ increases, BER decreases for all modulation schemes.** This is intuitive: a stronger signal relative to noise leads to fewer errors.
*   **Different modulation schemes have different performance characteristics.** Some require more signal power (higher $E_b/N_0$) to achieve the same low BER.
*   **The gap between curves represents the SNR penalty.** For example, if 16-QAM requires 3 dB more SNR than QPSK to achieve the same BER, it means 16-QAM has a 3 dB SNR penalty.
*   **M-ary schemes (higher M) generally perform worse than their binary counterparts.** Transmitting more bits per symbol typically requires more complex signal design, leading to more susceptibility to noise.
*   **Coherent detection is generally superior to non-coherent detection.** However, coherent detection is more complex to implement.

**Example Comparison:**

Imagine comparing the BER vs. $E_b/N_0$ plots for BPSK, QPSK, and 16-QAM in an AWGN channel:

*   **BPSK:** Will show the best performance (lowest BER for a given $E_b/N_0$).
*   **QPSK:** Will largely overlap with the BPSK curve when BER is plotted against $E_b/N_0$. This is because QPSK transmits 2 bits per symbol, and the symbol error rate for QPSK is related to the bit error rate in a way that makes the BER vs. $E_b/N_0$ curves coincide.
*   **16-QAM:** Will show a worse performance (higher BER for a given $E_b/N_0$) compared to BPSK and QPSK. The curve will be shifted to the right, indicating it needs a higher SNR for the same BER. For instance, to achieve a BER of $10^{-5}$, 16-QAM might require approximately 3-4 dB more $E_b/N_0$ than BPSK/QPSK.

*(Refer to Proakis & Salehi, 6th Ed., Chapter 4 and 5 for numerous theoretical BER curves for various modulation schemes in AWGN).*

## Impact of AWGN:

The AWGN channel model is fundamental to deriving these BER vs. SNR plots. The mathematical analysis involves integrating the probability of error over the noise distribution. The resulting BER expressions often involve the complementary error function (erfc).

*   **For BPSK (coherent detection):** $P_b = Q\left(\sqrt{\frac{2E_b}{N_0}}\right)$, where $Q(x) = \frac{1}{\sqrt{2\pi}} \int_x^\infty e^{-t^2/2} dt$. The BER curve is a direct plot of this function.
*   **For QPSK (coherent detection):** The bit error rate is the same as BPSK.
*   **For M-ary PSK:** $P_b \approx \frac{2}{\log_2 M} Q\left(\sqrt{\frac{2E_b}{N_0} \log_2 M}\right)$ for large $E_b/N_0$. This shows that as M increases, the argument of the Q-function increases, leading to better BER performance per bit *if* symbol energy is kept constant. However, when comparing BER for the *same* $E_b/N_0$, higher M PSK performs worse due to increased alphabet size and closer constellation points.

*(Refer to Haykin & Moher, 5th Ed., Chapter 7 for detailed derivations of these BER formulas).*

## Trade-offs and Selection Criteria:

When selecting a digital bandpass modulation scheme, the BER vs. SNR plot is a critical tool for understanding the trade-offs between:

*   **Data Rate:** Higher order modulation schemes (e.g., 16-QAM, 64-QAM) offer higher data rates for a given bandwidth (spectral efficiency).
*   **Power Efficiency:** Schemes like BPSK and QPSK are more power-efficient, meaning they can achieve a given BER with lower SNR.
*   **Complexity:** Coherent detection schemes are generally more complex than non-coherent schemes. Higher order modulation also increases complexity.
*   **Bandwidth Efficiency:** Higher order schemes tend to be more bandwidth-efficient.

**Decision Making:**

*   **Low Power Requirements / Reliable Communication:** BPSK or QPSK are preferred, even though they are less bandwidth-efficient.
*   **High Data Rate Requirements / Sufficient Power Available:** Higher order QAM or PSK schemes are chosen, accepting the higher SNR requirement.
*   **Complexity Constraints:** Non-coherent detection (e.g., non-coherent FSK) might be considered if coherent detection is too complex to implement.

*(This directly aligns with Course Outcomes CO1, CO2, CO3, and CO4, enabling students to analyze and apply modulation techniques based on performance metrics).*

## Important Points to Remember:

*   **$E_b/N_0$ is the fundamental parameter for comparing BER performance.** Always ensure you are comparing on the same basis.
*   **The AWGN channel is a baseline for performance analysis.** Real-world channels may have fading or interference, which will degrade performance further.
*   **Higher data rates often come at the cost of higher power requirements (lower power efficiency) or increased complexity.**
*   **Constellation diagrams are visual representations of modulation schemes and help understand how errors can occur.** Close constellation points are more prone to error.
*   **BER is a crucial performance metric for digital communication systems.**

## Practice Questions:

**Question 1:**
Which of the following digital bandpass modulation schemes generally offers the best BER performance (lowest BER for a given $E_b/N_0$) in an AWGN channel?
(a) 16-QAM
(b) BPSK
(c) 8-FSK (coherent)
(d) 64-QAM

**Answer:** (b) BPSK. BPSK has the simplest constellation (two points diametrically opposite) and is the most power-efficient among these options in an AWGN channel.

**Question 2:**
If a communication system needs to transmit data at a high rate over a channel with limited bandwidth but has a strong transmitter and receiver power capability, which type of modulation scheme would be more suitable: Low-order PSK/QAM or High-order PSK/QAM? Justify your answer.

**Answer:** High-order PSK/QAM would be more suitable. High-order schemes (like 16-QAM, 64-QAM) achieve higher data rates due to transmitting more bits per symbol. While they require a higher SNR for a given BER, the problem statement indicates sufficient power capability. Low-order schemes are more power-efficient but less bandwidth-efficient.

**Question 3:**
Explain why QPSK has the same BER vs. $E_b/N_0$ curve as BPSK, even though it transmits more data.

**Answer:** QPSK transmits two bits per symbol by using four phase shifts. While the symbol energy ($E_s$) for QPSK is twice the bit energy ($E_b$) to achieve the same BER performance as BPSK ($E_s = 2E_b$), the BER is plotted against $E_b/N_0$. When the ratio of symbol energy to the noise power spectral density ($E_s/N_0$) is considered, QPSK performs identically to BPSK for the same $E_b/N_0$. This means that for the same $E_b/N_0$, both schemes will have the same bit error rate.

**Question 4:**
Describe the expected trend of BER vs. $E_b/N_0$ for M-ary modulation schemes as M increases.

**Answer:** As M (the number of possible symbols) increases, the constellation points become closer together. This makes the system more susceptible to noise, leading to a higher probability of error for a given $E_b/N_0$. Therefore, the BER vs. $E_b/N_0$ curves for M-ary schemes shift to the right (requiring higher $E_b/N_0$) as M increases.

---

**Further Study/Reading:**

*   **Haykin & Moher, 5th Ed.:** Chapters 7 (Digital Modulation Techniques) and Appendix B (Table of Integrals) for detailed mathematical derivations of BER formulas.
*   **Lathi & Ding, 5th Ed.:** Chapters 6 (Digital Modulation Techniques) and 12 (Error Probability of Digital Modulation Systems) for comprehensive explanations and examples.
*   **Proakis & Salehi, 6th Ed.:** Chapters 4 (Digital Modulation Schemes) and 5 (Digital Receivers) provide in-depth analysis and theoretical results for BER performance in AWGN.

This concludes the notes on plots of BER vs. SNR for digital bandpass modulation schemes. Understanding these plots is crucial for designing and evaluating digital communication systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
