---
title: "Diversity"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 4: Path loss and shadowing"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed3f"
status: "completed"
scrapedAt: "2026-05-23T17:59:17.863Z"
---
# ADVANCED COMMUNICATION THEORY

## Module 4: Path Loss and Shadowing

### Topic: Diversity

**Knowledge Level Focus:** K2, K3

**Relevance to Course Outcomes:** This topic directly contributes to **CO6**, enabling students to identify the advantages of diversity techniques for improving wireless receiver performance.

---

### 1. Introduction to Diversity

In wireless communication systems, the received signal strength can fluctuate significantly due to various impairments like fading and shadowing. These phenomena can lead to intermittent loss of signal, causing errors and degrading the overall system performance. Diversity is a fundamental technique used to combat these detrimental effects by exploiting the fact that multiple instances of the same information signal, arriving through different propagation paths or at different times/frequencies, are likely to experience independent fading.

**Key Concept:** Diversity aims to provide multiple independent versions of the transmitted signal at the receiver. By combining these versions appropriately, the probability of experiencing deep fades simultaneously across all instances is significantly reduced.

**Analogy:** Imagine trying to listen to a friend talking in a noisy room. If you have multiple microphones placed in different locations, and you can somehow combine the audio, you are more likely to hear your friend clearly because the noise affecting each microphone will be different.

---

### 2. Types of Fading and their Impact

Before delving into diversity, it's crucial to understand the causes of signal variability that diversity aims to mitigate.

*   **Fading:** Fluctuations in the received signal amplitude caused by multipath propagation. When a signal travels from transmitter to receiver, it bounces off objects (buildings, mountains, etc.), creating multiple copies of the signal that arrive at the receiver at different times. These copies can interfere constructively or destructively, leading to variations in signal strength.
    *   **Rayleigh Fading:** Occurs in environments with a large number of scatterers, where the direct path is blocked or negligible. The amplitude of the received signal follows a Rayleigh distribution. (Refer to Goldsmith, Chapter 5.2.1).
    *   **Rician Fading:** Occurs when there is a dominant line-of-sight (LOS) path between the transmitter and receiver, along with scattered paths. The amplitude follows a Rician distribution. (Refer to Goldsmith, Chapter 5.2.2).
*   **Shadowing (or Log-Normal Fading):** Caused by large obstacles (e.g., buildings, terrain) that block or attenuate the signal over larger distances. This effect is slower than fading and typically results in a decrease in the average received power. The received signal power follows a log-normal distribution. (Refer to Rappaport, Chapter 4.5.1).

**Impact of Fading and Shadowing:**
*   **Signal Degradation:** Leads to reduced Signal-to-Noise Ratio (SNR).
*   **Intermittent Connectivity:** Causes dropped calls or data sessions.
*   **Increased Bit Error Rate (BER):** More errors in transmitted data.
*   **Reduced Throughput:** Lower data transfer rates.

---

### 3. The Principle of Diversity

The fundamental idea behind diversity is that **independent fading events are unlikely to occur simultaneously across multiple branches.** By receiving and processing multiple versions of the signal, the probability of all branches experiencing a deep fade at the same time is significantly reduced.

**Mathematical Intuition:**
Let's consider two independent channels, each with a probability $P_{fade}$ of experiencing a fade below a certain threshold. The probability that *both* channels experience a fade simultaneously is $P_{fade}^2$. If $P_{fade}$ is small (e.g., 0.1), then $P_{fade}^2$ is much smaller (0.01). This illustrates how diversity reduces the probability of deep fades.

---

### 4. Types of Diversity Techniques

Diversity techniques can be broadly categorized based on the "domain" in which the diversity is achieved.

#### 4.1 Space Diversity

This is the most common type of diversity. It involves using multiple antennas separated by a sufficient distance at the receiver (or transmitter). The separation ensures that the signals received by different antennas experience different fading conditions due to different multipath environments.

*   **Principle:** The signals received at different antenna locations are likely to experience independent or at least weakly correlated fading.
*   **Antenna Separation:**
    *   **Effective Separation:** The distance between antennas needs to be significant relative to the wavelength of the signal and the correlation distance of the fading. A common rule of thumb for achieving good diversity gain is a separation of at least $\lambda/2$ or $\lambda$.
    *   **Correlation:** If antennas are too close, the fading experienced by them will be highly correlated, and diversity gain will be minimal.
*   **Implementation:**
    *   **Receiver Diversity:** Multiple antennas at the receiver. This is the most common approach as it doesn't require modifications to the transmitter.
    *   **Transmitter Diversity:** Multiple antennas at the transmitter. This is more complex and is often employed in systems like MIMO (Multiple-Input Multiple-Output) for spatial multiplexing and diversity.
*   **Combining Methods (for Receiver Diversity):**
    *   **Maximal Ratio Combining (MRC):** The signals from each branch are weighted by their respective SNR and then summed. This provides the optimal combining strategy and maximizes the output SNR.
        *   **Formula:** For $L$ diversity branches with received signals $y_i = h_i x + n_i$, where $h_i$ is the channel gain, $x$ is the transmitted signal, and $n_i$ is noise with variance $\sigma_i^2$, the SNR of branch $i$ is $\rho_i = |h_i|^2 / \sigma_i^2$. The output signal $y_{MRC}$ is formed by summing $w_i y_i$, where $w_i = h_i^*/\sigma_i^2$. The output SNR is $\sum_{i=1}^L \rho_i$.
        *   **Requirement:** Requires channel state information (CSI) at the receiver to know the gains $h_i$ and noise variances $\sigma_i^2$.
        *   **Advantage:** Achieves the maximum possible diversity gain.
    *   **Equal Gain Combining (EGC):** The signals from each branch are weighted by the magnitude of their channel gain, with a phase correction, and then summed. All branches are given equal weight in terms of signal processing.
        *   **Formula:** Signals are weighted by $w_i = h_i^*/|h_i|$ and then summed.
        *   **Advantage:** Simpler to implement than MRC as it doesn't require precise SNR estimation.
        *   **Disadvantage:** Does not achieve the same performance as MRC, especially when SNR values across branches are significantly different.
    *   **Selection Combining (SC):** The receiver selects the branch with the highest instantaneous SNR and uses only that branch.
        *   **Formula:** The output is $y_{SC} = y_k$ where $k = \arg \max_i (\rho_i)$.
        *   **Advantage:** Simplest to implement, requires no complex combining circuitry.
        *   **Disadvantage:** Does not utilize the signal information from other branches, leading to lower diversity gain compared to MRC and EGC.

**Textbook Reference:** Goldsmith, Chapter 5.3.1 (Space Diversity). Rappaport, Chapter 4.10.1 (Diversity Techniques).

#### 4.2 Frequency Diversity

This technique exploits the fact that the wireless channel's characteristics (like fading) can vary across different frequencies. Adjacent frequency channels may experience different fading conditions.

*   **Principle:** Transmit the same information on multiple, sufficiently separated frequencies.
*   **Frequency Separation:** The separation between frequencies should be greater than the coherence bandwidth of the channel. The coherence bandwidth is the range of frequencies over which the channel is correlated. If frequencies are separated by more than the coherence bandwidth, they will likely experience independent fading. (Refer to Goldsmith, Chapter 5.2.1).
*   **Implementation:**
    *   **Spread Spectrum:** Techniques like Frequency Hopping Spread Spectrum (FHSS) inherently provide frequency diversity by rapidly changing the transmission frequency.
    *   **Orthogonal Frequency Division Multiplexing (OFDM):** By transmitting data over multiple subcarriers, OFDM can achieve a form of frequency diversity, especially when combined with coding across subcarriers.
*   **Advantages:** Can be effective in combating frequency-selective fading.
*   **Disadvantages:** Requires wider bandwidth, which can be a scarce resource. The correlation between frequencies needs careful consideration.

**Textbook Reference:** Goldsmith, Chapter 5.3.2 (Frequency Diversity).

#### 4.3 Time Diversity

This technique involves transmitting the same information at different points in time. The assumption is that the channel conditions will be different at different times.

*   **Principle:** Introduce redundancy in time. The same symbol or data block is transmitted multiple times.
*   **Implementation:**
    *   **Interleaving:** A key component of time diversity. Data bits are rearranged before transmission and then de-interleaved at the receiver. This spreads out burst errors (which are common in fading channels) across a longer sequence, making them more manageable with forward error correction (FEC) codes.
    *   **Repetition Codes:** Simple time diversity can be achieved by repeating the transmitted symbol.
*   **Advantages:** Effective against time-varying channels and burst errors. Can be implemented without significant changes to the radio frequency hardware.
*   **Disadvantages:** Reduces the data rate as information is transmitted multiple times. Requires a sufficiently slow channel variation relative to the repetition rate.

**Textbook Reference:** Goldsmith, Chapter 5.3.3 (Time Diversity).

#### 4.4 Polarization Diversity

This technique utilizes the polarization of the electromagnetic wave. Electromagnetic waves can be transmitted and received with different polarizations (e.g., vertical, horizontal, circular).

*   **Principle:** Transmit the same information on two orthogonal polarizations. The fading experienced on each polarization is likely to be independent.
*   **Implementation:** Requires antennas that can transmit and receive on orthogonal polarizations.
*   **Advantages:** Can provide diversity gain in certain scattering environments where different polarizations experience different multipath effects.
*   **Disadvantages:** The independence of fading on orthogonal polarizations depends on the scattering environment. It's not always guaranteed.

**Textbook Reference:** Goldsmith, Chapter 5.3.4 (Polarization Diversity).

---

### 5. Diversity Gain

Diversity gain refers to the improvement in performance (e.g., reduction in BER or required SNR) achieved by using diversity techniques compared to a system without diversity.

*   **Performance Improvement:** Diversity dramatically reduces the probability of deep fades, which are the primary cause of errors. This leads to a lower average BER for a given SNR.
*   **SNR Improvement:** To achieve the same BER performance as a non-diversity system, a diversity system requires a lower SNR. The difference in SNR is the diversity gain.
*   **Trade-offs:**
    *   **Complexity:** More antennas, RF chains, and processing increase complexity and cost.
    *   **Bandwidth:** Frequency diversity requires more bandwidth.
    *   **Latency/Throughput:** Time diversity can reduce effective data rate.
    *   **Antenna Separation:** Space diversity requires careful antenna placement.

**Example of Diversity Gain (Conceptual):**
Consider a system with Rayleigh fading.
*   **No Diversity (L=1):** To achieve a BER of $10^{-3}$, a specific SNR might be required.
*   **Selection Combining (L=2):** To achieve the same BER of $10^{-3}$, the required SNR might be several dB lower.
*   **Maximal Ratio Combining (L=2):** To achieve the same BER of $10^{-3}$, the required SNR might be even lower than with selection combining.

**Textbook Reference:** Rappaport, Chapter 4.10.2 (Diversity Gain).

---

### 6. Diversity in Different Channel Models

The effectiveness of diversity depends on the channel model and the type of fading.

*   **Flat Fading (Non-Frequency Selective):** In flat fading, the channel is characterized by a single gain factor. Space and time diversity are most effective here.
*   **Frequency Selective Fading:** The channel has different gains at different frequencies. Frequency diversity and spread spectrum techniques are particularly useful. Space diversity can also help if antennas are sufficiently separated.

---

### 7. Relationship to Course Outcomes

*   **CO6: Identify the advantages of various diversity and equalization techniques for improving the wireless receiver performance.**
    *   This entire topic is dedicated to diversity techniques. We have discussed space, frequency, time, and polarization diversity and their advantages in mitigating fading and improving receiver performance (lower BER, better reliability).

---

### 8. Important Points to Remember

*   **Diversity combats fading by providing independent signal replicas.**
*   **The key is "independence" of the diversity branches.**
*   **Space diversity is most common, requiring sufficient antenna separation.**
*   **Combining techniques (MRC, EGC, SC) determine the diversity gain.**
*   **Time diversity often involves interleaving to combat burst errors.**
*   **Frequency diversity requires bandwidth greater than coherence bandwidth.**
*   **Diversity gain is the improvement in performance (e.g., SNR) for a given BER.**
*   **The choice of diversity technique depends on the channel characteristics, system constraints, and desired performance.**

---

### 9. Practice Questions and Exercises

**Question 1 (Conceptual):**
Explain why diversity techniques are essential for reliable wireless communication, especially in mobile environments.

**Answer:**
Wireless environments are subject to fading (due to multipath propagation) and shadowing (due to large obstacles), which cause significant fluctuations in the received signal strength. These fluctuations can lead to deep fades where the signal becomes too weak to be decoded correctly, resulting in high error rates or complete loss of connection. Diversity techniques provide multiple, independent instances of the transmitted signal. By combining these instances, the probability of all of them experiencing a deep fade simultaneously is greatly reduced, thereby improving the overall reliability and performance of the wireless link.

**Question 2 (Application - Selection Combining):**
Consider a system with two diversity branches (L=2) operating in a Rayleigh fading channel. Assume the SNR of branch 1 is 10 dB and the SNR of branch 2 is 5 dB. If selection combining is used, what is the SNR of the output signal?

**Answer:**
Selection combining selects the branch with the highest instantaneous SNR.
SNR of branch 1 = 10 dB
SNR of branch 2 = 5 dB

Since 10 dB > 5 dB, selection combining will select branch 1.
Therefore, the output SNR is **10 dB**.

**Question 3 (Understanding):**
What is the primary condition for achieving effective frequency diversity?

**Answer:**
The primary condition for effective frequency diversity is that the frequency separation between the transmitted signals must be greater than the coherence bandwidth of the channel. This ensures that the fading experienced on different frequencies is largely independent.

**Question 4 (Comparison - MRC vs. SC):**
Compare Maximal Ratio Combining (MRC) and Selection Combining (SC) in terms of complexity and performance gain.

**Answer:**
*   **Complexity:**
    *   **MRC:** More complex. It requires accurate estimation of the channel gain and noise variance for each branch to optimally weight the received signals before combining.
    *   **SC:** Less complex. It only needs to compare the SNRs of the branches and select the one with the highest SNR, requiring simpler comparison circuitry.
*   **Performance Gain:**
    *   **MRC:** Provides the maximum possible diversity gain. It optimally combines all available signal energy while suppressing noise, thus achieving the lowest achievable BER for a given set of branch SNRs.
    *   **SC:** Provides less diversity gain compared to MRC (and EGC). It discards the signal information from other branches, even if they are not in a deep fade, leading to a performance penalty.

**Question 5 (True/False):**
Space diversity is most effective when antennas are placed very close together.

**Answer:**
**False**. Space diversity is most effective when antennas are separated by a sufficient distance (e.g., several wavelengths) to ensure that the signals received by each antenna experience independent fading conditions. If antennas are too close, the fading will be highly correlated, and diversity gain will be minimal.

---

This concludes the study notes for Diversity in Module 4. Remember to revisit the relevant chapters in Goldsmith and Rappaport for a deeper understanding and more detailed mathematical treatments.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
