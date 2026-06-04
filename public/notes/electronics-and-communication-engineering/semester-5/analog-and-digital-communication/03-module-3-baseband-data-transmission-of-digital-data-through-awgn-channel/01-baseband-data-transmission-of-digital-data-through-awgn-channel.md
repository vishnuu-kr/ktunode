---
title: "Baseband data transmission of digital data through AWGN channel"
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 3: Baseband data transmission of digital data through AWGN channel"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe90a"
status: "completed"
scrapedAt: "2026-05-23T17:52:54.765Z"
---
# ANALOG AND DIGITAL COMMUNICATION

## Module 3: Baseband Data Transmission of Digital Data through AWGN Channel

---

### **1. Introduction to Baseband Digital Data Transmission**

This section introduces the fundamental concepts of transmitting digital data without modulation onto a carrier wave. The focus is on how digital signals are represented and transmitted directly over a communication channel.

*   **Digital Data:** Information represented as a sequence of discrete values, typically binary (0s and 1s).
*   **Baseband Transmission:** Transmitting the signal in its original frequency band, without shifting it to a higher carrier frequency. This is common in wired communication systems like Ethernet and telephone lines.
*   **Digital Data Representation:**
    *   **Unipolar NRZ:** Uses two voltage levels, one for '0' (zero voltage) and another for '1' (positive voltage), for a fixed duration.
        *   *Example:* A sequence of 1010 might be represented as [+V, 0, +V, 0] voltage levels.
        *   *Pros:* Simple to implement.
        *   *Cons:* DC component present, timing recovery can be difficult.
    *   **Polar NRZ:** Uses two opposite voltage levels for '0' and '1'.
        *   *Example:* A sequence of 1010 might be represented as [+V, -V, +V, -V] voltage levels.
        *   *Pros:* No DC component, better noise immunity.
        *   *Cons:* Requires more power.
    *   **Bipolar NRZ:** Uses three voltage levels: positive for '1', negative for '0', and zero voltage for certain sequences (e.g., for long strings of zeros).
        *   *Example:* A sequence of 1001 might be represented as [+V, 0, 0, +V].
        *   *Pros:* Reduced DC component, lower bandwidth.
        *   *Cons:* More complex implementation.
    *   **Manchester Encoding:** Combines data and clocking information into a single signal. Each bit has a transition in the middle of its duration. A transition from low to high can represent '1', and high to low can represent '0' (or vice-versa).
        *   *Example:* A sequence of 1010 might be represented by transitions: Low-to-High, High-to-Low, Low-to-High, High-to-Low.
        *   *Pros:* Self-clocking, no DC component.
        *   *Cons:* Requires twice the bandwidth of NRZ.
    *   **Differential Manchester Encoding:** Similar to Manchester but uses the presence or absence of a transition at the beginning of the bit period to denote the data bit.
        *   *Pros:* Better noise immunity than Manchester.
        *   *Cons:* Still requires twice the bandwidth of NRZ.

*   **Key Concept:** **Line Coding** is the process of converting a digital data stream into a digital signal suitable for transmission over a channel.

---

### **2. The Additive White Gaussian Noise (AWGN) Channel Model**

This section describes the AWGN channel, a fundamental model for understanding noise in communication systems.

*   **Channel:** The medium through which the digital signal is transmitted.
*   **Noise:** Unwanted signals that interfere with the transmitted signal.
*   **Additive:** Noise is added to the transmitted signal.
*   **White Noise:** Noise whose power spectral density is uniform over a wide range of frequencies. This means all frequencies are equally likely to be present in the noise.
*   **Gaussian Noise:** The amplitude distribution of the noise follows a Gaussian (normal) probability distribution. This is often the case due to the accumulation of many independent random events.

*   **Mathematical Model:** The output of the channel, $y(t)$, can be represented as:
    $y(t) = s(t) + n(t)$
    where:
    *   $s(t)$ is the transmitted signal.
    *   $n(t)$ is the additive white Gaussian noise.
    *   The probability density function (PDF) of $n(t)$ is Gaussian:
        $f_{n}(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$
        where $\mu$ is the mean and $\sigma^2$ is the variance. For AWGN, the mean is typically zero ($\mu=0$).
        $f_{n}(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{x^2}{2\sigma^2}}$
    *   The power spectral density (PSD) of $n(t)$ is $S_n(f) = N_0/2$ for all frequencies $f$, where $N_0$ is the noise power spectral density.

*   **Key Concept:** The **Signal-to-Noise Ratio (SNR)** is a crucial parameter that quantifies the strength of the signal relative to the background noise. It is typically expressed in decibels (dB).
    *   $SNR = \frac{P_s}{P_n}$, where $P_s$ is the signal power and $P_n$ is the noise power.
    *   In terms of voltage for a given resistance R: $SNR = \frac{V_s^2/R}{V_n^2/R} = \frac{V_s^2}{V_n^2}$.
    *   A higher SNR indicates a cleaner signal and better communication quality.

*   **Reference (Haykin & Moher, 5th Ed., Chapter 4):** The AWGN channel is extensively discussed in the context of digital communication systems, highlighting its importance in performance analysis.

---

### **3. Optimal Receiver for Digital Modulation (Coherent Detection)**

This section delves into how to design a receiver that can optimally detect the transmitted digital signal in the presence of AWGN.

*   **Receiver Goal:** To decide which digital symbol was transmitted based on the received noisy signal.
*   **Optimal Receiver:** A receiver that minimizes the probability of error (or maximizes the probability of correct detection).
*   **Coherent Detection:** The receiver uses a locally generated reference signal that is synchronized in phase and frequency with the carrier wave of the transmitted signal.

*   **Correlator Receiver:** A common implementation of an optimal receiver. It involves multiplying the received signal with a set of basis functions (derived from the transmitted signals) and integrating the product over the symbol duration.
    *   For a set of $M$ possible transmitted signals $\{s_i(t) | i = 1, ..., M\}$, the receiver produces $M$ correlation outputs.
    *   The output of the $k$-th correlator at time $T$ (end of the symbol period) is:
        $r_k = \int_{0}^{T} y(t) \phi_k(t) dt$
        where $y(t) = s(t) + n(t)$ and $\phi_k(t)$ are the basis functions.
    *   The receiver chooses the symbol $i$ for which $r_i$ is maximum.

*   **Matched Filter Receiver:** An equivalent implementation to the correlator. The matched filter is designed to maximize the SNR at its output at the sampling instant.
    *   The impulse response of a matched filter for a signal $s(t)$ is $h(t) = s(T-t)$, where $T$ is the symbol duration.
    *   The output of the matched filter at time $T$ is proportional to the correlation between the received signal and the transmitted signal.

*   **Key Concept:** **Probability of Error ($P_e$)** is the metric used to evaluate the performance of a digital communication system. The goal is to minimize $P_e$.
    *   For binary antipodal signaling (e.g., polar NRZ), the probability of error is given by:
        $P_e = Q\left(\sqrt{\frac{E_b}{N_0}}\right)$
        where:
        *   $Q(x) = \frac{1}{\sqrt{2\pi}} \int_{x}^{\infty} e^{-t^2/2} dt$ is the Q-function.
        *   $E_b$ is the average energy per bit.
        *   $N_0/2$ is the noise power spectral density.
        *   $E_b/N_0$ is the energy per bit to noise power spectral density ratio.

*   **Reference (Lathi & Ding, 5th Ed., Chapter 9):** This chapter covers optimum receivers for various modulation schemes, including coherent detection and the role of matched filters.

---

### **4. Performance of Digital Modulation Schemes in AWGN Channel**

This section analyzes how different digital modulation schemes perform in the presence of AWGN, focusing on their error probabilities.

*   **Metrics for Performance:**
    *   **Probability of Error ($P_e$):** The primary measure of performance.
    *   **Energy per Bit to Noise Power Spectral Density Ratio ($E_b/N_0$):** The key parameter that determines $P_e$. A higher $E_b/N_0$ leads to a lower $P_e$.
    *   **Bandwidth Efficiency:** The rate at which bits are transmitted per unit of bandwidth (bits/sec/Hz).

*   **Common Digital Modulation Schemes and their $P_e$ in AWGN:**

    *   **Binary Phase Shift Keying (BPSK):**
        *   Transmitted signals: $s_1(t) = \sqrt{2E_b/T} \cos(2\pi f_c t)$ for bit '1' and $s_2(t) = -\sqrt{2E_b/T} \cos(2\pi f_c t)$ for bit '0'.
        *   $P_e = Q\left(\sqrt{\frac{2E_b}{N_0}}\right)$
        *   Bandwidth efficient, good performance.

    *   **Binary Amplitude Shift Keying (ASK) / On-Off Keying (OOK):**
        *   Transmitted signals: $s_1(t) = \sqrt{2E_b/T} \cos(2\pi f_c t)$ for bit '1' and $s_0(t) = 0$ for bit '0'.
        *   $P_e = Q\left(\sqrt{\frac{E_b}{2N_0}}\right)$
        *   Less efficient than BPSK for the same $E_b/N_0$.

    *   **Binary Frequency Shift Keying (BFSK):**
        *   Transmitted signals: $s_1(t) = \sqrt{2E_b/T} \cos(2\pi (f_c + \Delta f) t)$ for bit '1' and $s_0(t) = \sqrt{2E_b/T} \cos(2\pi (f_c - \Delta f) t)$ for bit '0'.
        *   The probability of error depends on the frequency separation $\Delta f$ and the symbol duration $T$. For large frequency separation ($2\Delta f T >> 1$), the performance approaches that of ASK.
        *   For coherent BFSK with orthogonal signals ($2\Delta f = 1/T$), $P_e = Q\left(\sqrt{\frac{E_b}{N_0}}\right)$.
        *   For non-coherent BFSK, the performance is worse than coherent BFSK.

    *   **M-ary Phase Shift Keying (M-PSK):**
        *   Uses $M$ phases to represent $\log_2 M$ bits.
        *   $P_e$ for M-PSK is more complex to express generally but improves with increasing $M$ for a given bandwidth, at the cost of higher $E_b/N_0$.
        *   Example: QPSK (4-PSK) uses 4 phases, representing 2 bits per symbol.

    *   **M-ary Quadrature Amplitude Modulation (M-QAM):**
        *   Uses combinations of amplitude and phase to represent bits.
        *   Offers higher bandwidth efficiency than M-PSK, but is more susceptible to noise.

*   **Key Concept:** **Performance Curves:** Plots of $P_e$ versus $E_b/N_0$ (often in dB) are used to compare the performance of different modulation schemes. The curve that is further to the left (lower $E_b/N_0$ for a given $P_e$) indicates a more spectrally efficient and/or power-efficient scheme.

*   **Reference (Haykin & Moher, 5th Ed., Chapter 6):** This chapter provides a detailed comparison of various digital modulation techniques, including their error probability performance in AWGN.
*   **Reference (Proakis & Salehi, 6th Ed., Chapter 4):** Discusses the optimum receivers and error probability analysis for various digital modulation schemes.

---

### **5. Non-Coherent Detection**

This section explores receivers that do not rely on phase and frequency synchronization with the transmitted signal.

*   **Non-Coherent Receiver:** Does not require a local oscillator with precise phase and frequency synchronization. This simplifies receiver design but often comes at the cost of reduced performance.

*   **Applications:** Useful in systems where maintaining precise synchronization is difficult or impossible (e.g., some wireless systems, BFSK).

*   **Examples of Non-Coherent Receivers:**
    *   **Non-Coherent BFSK Receiver:** Typically uses two filters, one tuned to the frequency for bit '1' and another to the frequency for bit '0'. The envelope detectors' outputs are compared.
        *   Performance is worse than coherent BFSK, especially at low $E_b/N_0$.
        *   $P_e = \frac{1}{2} e^{-\frac{E_b}{2N_0}}$ for orthogonal BFSK.

*   **Comparison with Coherent Detection:**
    *   Coherent detection generally offers better performance (lower $P_e$ for a given $E_b/N_0$).
    *   Non-coherent detection is simpler to implement and is more robust to carrier phase/frequency errors.

*   **Reference (Lathi & Ding, 5th Ed., Chapter 9):** Discusses non-coherent detection schemes for BFSK and other modulation techniques.
*   **Reference (Haykin & Moher, 5th Ed., Chapter 6):** Touches upon non-coherent detection in the context of specific modulation schemes.

---

### **6. Baseband Digital Data Transmission Practice Questions and Answers**

Here are some practice questions to test your understanding of the concepts covered.

**Question 1:**
What is the main characteristic of a white noise in the context of communication systems?
**(a)** It has a constant amplitude.
**(b)** Its power spectral density is uniform across all frequencies.
**(c)** It follows a uniform probability distribution.
**(d)** It only affects the phase of the signal.

**Answer 1:**
**(b)** Its power spectral density is uniform across all frequencies.

**Question 2:**
Which line coding scheme is known for its self-clocking property and no DC component?
**(a)** Unipolar NRZ
**(b)** Polar NRZ
**(c)** Manchester Encoding
**(d)** Bipolar NRZ

**Answer 2:**
**(c)** Manchester Encoding

**Question 3:**
For a given probability of error ($P_e$), which modulation scheme would require a lower $E_b/N_0$ in an AWGN channel (i.e., perform better)?
**(a)** BPSK
**(b)** ASK (OOK)
**(c)** BFSK (with orthogonal signals, coherent detection)
**(d)** All perform equally for the same $P_e$.

**Answer 3:**
**(a)** BPSK. BPSK typically offers better performance (lower $E_b/N_0$ for a given $P_e$) compared to ASK and BFSK.

**Question 4:**
Describe the trade-off between bandwidth efficiency and power efficiency in digital modulation schemes.
**Answer 4:**
Generally, modulation schemes that are more bandwidth-efficient (transmit more bits per second per Hertz) tend to require higher power (or a higher $E_b/N_0$) to achieve the same probability of error. Conversely, schemes that are more power-efficient (require lower $E_b/N_0$) often consume more bandwidth. For example, M-QAM can achieve higher bandwidth efficiency than M-PSK, but it is more susceptible to noise and requires a higher $E_b/N_0$.

**Question 5:**
What is the role of the Q-function in the probability of error calculations for digital communication?
**Answer 5:**
The Q-function, $Q(x)$, represents the tail probability of the standard normal distribution. In the context of AWGN channels, it directly relates the signal-to-noise ratio (specifically, $E_b/N_0$) to the probability of a symbol or bit being misinterpreted. A higher value of $x$ (corresponding to a higher $E_b/N_0$) leads to a smaller Q(x) value, meaning a lower probability of error.

**Question 6:**
Explain why coherent detection is generally preferred over non-coherent detection in terms of performance.
**Answer 6:**
Coherent detection utilizes a locally generated reference signal that is synchronized in phase and frequency with the received signal. This precise synchronization allows the receiver to maximize the signal component at the decision instant while minimizing the effect of noise. Non-coherent detection, on the other hand, does not require this precise synchronization but sacrifices some of this signal enhancement, leading to a higher probability of error for the same $E_b/N_0$.

---

### **7. Important Points to Remember**

*   **Baseband transmission** deals with transmitting digital data directly without carrier modulation.
*   **Line coding** is crucial for practical baseband transmission, affecting bandwidth, power, and timing recovery.
*   The **AWGN channel model** is a fundamental tool for analyzing communication system performance.
*   **SNR** is the key parameter indicating signal quality.
*   The **optimal receiver** (correlator or matched filter) minimizes the probability of error in AWGN.
*   The **Q-function** quantifies the relationship between $E_b/N_0$ and the probability of error.
*   Different **digital modulation schemes** have varying trade-offs between bandwidth efficiency and power efficiency.
*   **Coherent detection** offers superior performance but requires synchronization; **non-coherent detection** is simpler but less performant.
*   Understanding the performance curves ($P_e$ vs. $E_b/N_0$) is essential for comparing modulation techniques.

---

### **8. Learning Outcome Alignment**

*   **LO1: Illustrate the principles of analog communication systems (Knowledge Level: K2)**
    *   While this module focuses on digital communication, the underlying principles of signal transmission and noise interference are common to both analog and digital systems. The AWGN model is a universal concept.
*   **LO2: Explain the basic concepts of digital communication (Knowledge Level: K2)**
    *   This module directly addresses basic digital communication concepts like baseband transmission, digital data representation (line coding), and the AWGN channel model.
*   **LO3: Analyse the baseband transmission of digital data through AWGN channel (Knowledge Level: K3)**
    *   The core of this module is the analysis of baseband transmission through AWGN. This includes understanding the channel model, optimal receivers, and performance metrics like probability of error.
*   **LO4: Apply various digital modulation techniques in the design of digital communication systems (Knowledge Level: K3)**
    *   By discussing the performance of various modulation schemes (BPSK, ASK, BFSK, etc.) in AWGN, this module provides the foundation for applying these techniques in system design, making informed choices based on performance requirements.

---

This set of notes provides a comprehensive overview of Module 3, covering the fundamental aspects of baseband digital data transmission through an AWGN channel, with a strong emphasis on performance analysis and the behavior of various modulation schemes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
