---
title: "Narrowband fading"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 4: Path loss and shadowing"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed34"
status: "completed"
scrapedAt: "2026-05-23T17:59:09.197Z"
---
## ADVANCED COMMUNICATION THEORY - Module 4: Path Loss and Shadowing

### Topic: Narrowband Fading

**Learning Outcomes:**

*   Understand the fundamental mechanisms leading to narrowband fading in wireless channels.
*   Characterize narrowband fading channels using statistical models.
*   Analyze the impact of narrowband fading on wireless signal quality and performance.
*   Relate narrowband fading to fundamental concepts of channel capacity and information transmission.

---

### 1. Introduction to Fading

Fading is a phenomenon in wireless communications that causes variations in the received signal strength over time and/or location. These variations can be rapid and significant, impacting the reliability and quality of communication. Fading occurs due to:

*   **Multipath Propagation:** Signals travel along multiple paths from the transmitter to the receiver, arriving at different times and with different amplitudes and phases.
*   **Doppler Shift:** Relative motion between the transmitter and receiver causes a shift in the frequency of the received signal.

**Important Point:** Fading is a critical challenge in wireless system design, and understanding its characteristics is essential for developing robust communication systems.

---

### 2. Types of Fading

Fading can be broadly categorized based on the **coherence bandwidth** and **coherence time** of the channel:

*   **Flat Fading (or Non-Frequency Selective Fading):** Occurs when the coherence bandwidth of the channel is much larger than the bandwidth of the transmitted signal. In this case, all frequency components of the signal experience roughly the same fading effect. The channel acts as a simple multiplicative gain (complex gain).
*   **Frequency Selective Fading:** Occurs when the coherence bandwidth of the channel is smaller than the bandwidth of the transmitted signal. Different frequency components of the signal experience different fading effects. This leads to inter-symbol interference (ISI).

**This topic focuses on Narrowband Fading, which is a form of flat fading.**

---

### 3. Narrowband Fading

**Definition:** Narrowband fading refers to fading where the bandwidth of the transmitted signal is much smaller than the coherence bandwidth of the channel. Consequently, all frequency components of the transmitted signal experience the same multiplicative complex gain. The channel can be modeled as a simple time-varying complex multiplier.

**Key Characteristics of Narrowband Fading:**

*   **Frequency Flatness:** The fading effect is uniform across the entire bandwidth of the narrowband signal.
*   **Time Variability:** The fading gain changes over time, typically due to the motion of the transmitter or receiver (Doppler shift) or changes in the environment.

**Relevant Textbooks:**

*   **Goldsmith, "Wireless Communications":** Chapter 4 discusses fading and multipath propagation, providing a strong foundation for narrowband fading.
*   **Rappaport, "Wireless Communication: Principles and Practice":** Chapter 5 covers fading effects and their impact on mobile communication systems.

---

### 4. Mechanisms Causing Narrowband Fading

Narrowband fading arises from the constructive and destructive superposition of multiple delayed signal paths.

*   **Multipath Propagation:**
    *   Signals reflect off objects (buildings, terrain, vehicles) and diffract around obstacles, creating multiple signal paths.
    *   These paths arrive at the receiver with different delays, amplitudes, and phases.
    *   When the delay differences between these paths are small compared to the symbol duration (i.e., the signal is narrowband relative to the delay spread), the combined effect is a single, time-varying complex gain.

*   **Doppler Shift:**
    *   Relative motion between the transmitter and receiver causes a Doppler shift, which is proportional to the velocity and the carrier frequency.
    *   This Doppler shift causes the phase of the received signal to change over time, leading to time-varying fading.

---

### 5. Channel Model for Narrowband Fading

A narrowband fading channel can be modeled as a **time-varying complex gain**, denoted by $h(t)$.

*   **Received Signal:** $y(t) = h(t) x(t) + n(t)$
    *   $x(t)$: Transmitted signal
    *   $y(t)$: Received signal
    *   $h(t)$: Time-varying complex channel gain (representing the fading)
    *   $n(t)$: Additive white Gaussian noise (AWGN)

*   **Complex Gain $h(t)$:**
    *   $h(t) = \sum_{i=1}^{N} \alpha_i(t) e^{-j\phi_i(t)}$
        *   $\alpha_i(t)$: Amplitude of the $i$-th path at time $t$.
        *   $\phi_i(t)$: Phase of the $i$-th path at time $t$.
    *   The amplitudes and phases are influenced by the path loss, shadowing, and multipath effects.

**Important Point:** In a narrowband scenario, $h(t)$ is assumed to be constant across the bandwidth of the transmitted signal. However, it can change rapidly with time.

---

### 6. Statistical Characterization of Narrowband Fading

The complex gain $h(t)$ is a random process. Its statistical properties are crucial for analyzing system performance.

*   **Rayleigh Fading:**
    *   **Description:** Occurs when there is no line-of-sight (LOS) path between the transmitter and receiver. The received signal is composed of many scattered components, and the sum of these components can be approximated by a complex Gaussian random variable.
    *   **Model:** If $h(t) = I(t) + jQ(t)$, where $I(t)$ and $Q(t)$ are independent Gaussian random variables with zero mean and equal variance $\sigma^2$, then the amplitude $|h(t)|$ follows a Rayleigh distribution.
    *   **Probability Density Function (PDF):**
        $f_{|h|}(r) = \frac{r}{\sigma^2} e^{-r^2 / (2\sigma^2)}$ for $r \ge 0$.
    *   **Power:** The average power of the received signal is proportional to $E[|h(t)|^2] = 2\sigma^2$.
    *   **Applications:** Typically observed in urban canyons, indoor environments, and scattering-rich environments.

*   **Rician Fading:**
    *   **Description:** Occurs when there is a dominant line-of-sight (LOS) path in addition to scattered multipath components.
    *   **Model:** If $h(t) = I(t) + jQ(t)$, where $I(t)$ and $Q(t)$ are independent Gaussian random variables with non-zero means, leading to a non-zero mean for $h(t)$.
    *   **Parameters:** Characterized by a parameter $K$, which is the ratio of the power in the LOS component to the power in the scattered components.
        *   $K = \frac{A^2}{2\sigma^2}$, where $A$ is the amplitude of the LOS component.
    *   **PDF:** The amplitude $|h(t)|$ follows a Rician distribution.
        $f_{|h|}(r) = \frac{r}{\sigma^2} e^{-(r^2 + A^2) / (2\sigma^2)} I_0\left(\frac{rA}{\sigma^2}\right)$ for $r \ge 0$, where $I_0(\cdot)$ is the modified Bessel function of the first kind and order zero.
    *   **Special Case:** When $K \to \infty$ (i.e., $A \to \infty$ and $\sigma^2$ is finite), Rician fading approaches Rayleigh fading (no LOS component). When $K=0$, Rician fading is equivalent to Rayleigh fading.
    *   **Applications:** Common in environments with a clear LOS path, such as suburban areas or open spaces.

**Relevant Textbooks:**

*   **Goldsmith, "Wireless Communications":** Chapter 4.2 provides detailed descriptions and derivations of Rayleigh and Rician fading.
*   **Rappaport, "Wireless Communication: Principles and Practice":** Chapter 5.3 discusses fading distributions.
*   **Schiller, "Mobile Communications":** Chapter 3.3 covers propagation models and fading phenomena.

---

### 7. Impact of Narrowband Fading on Wireless Systems

Narrowband fading significantly impacts the performance of wireless communication systems.

*   **Signal Strength Fluctuations:** The received signal strength can vary by tens of decibels, leading to:
    *   **Deep Fades:** Signal strength drops significantly, potentially below the receiver's sensitivity threshold, causing bit errors or complete loss of communication.
    *   **Constructive Interference:** Signal strength can momentarily increase, but these are less problematic than fades.

*   **Bit Error Rate (BER):**
    *   In fading channels, the BER is much higher than in AWGN channels for the same average SNR.
    *   The BER performance is often analyzed by averaging the AWGN BER over the fading distribution.

*   **Data Rate and Throughput:** Fading can cause bursts of errors, leading to reduced effective data rates and lower throughput.

*   **Channel Capacity:** Fading reduces the average capacity of the channel.

**Relevant Textbooks:**

*   **Goldsmith, "Wireless Communications":** Chapter 4.4 analyzes the impact of fading on system performance.
*   **Rappaport, "Wireless Communication: Principles and Practice":** Chapter 5.4 discusses the impact of fading on wireless systems.

---

### 8. Coherence Time and Doppler Spread

These concepts help characterize how quickly the fading changes.

*   **Coherence Time ($T_c$):**
    *   **Definition:** The time duration over which the channel impulse response (or the complex gain $h(t)$ for narrowband fading) remains approximately constant.
    *   **Relationship with Doppler Spread:** $T_c \approx \frac{1}{f_d}$, where $f_d$ is the maximum Doppler shift.
    *   **Significance:** If the symbol duration ($T_s$) is much smaller than the coherence time ($T_s \ll T_c$), the channel can be considered constant within a symbol. This is the condition for flat fading.
    *   **Rule of Thumb:** If $T_s \ll T_c$, the channel is approximately constant over the symbol duration. If $T_s \gg T_c$, the channel changes significantly within a symbol.

*   **Doppler Spread ($f_d$):**
    *   **Definition:** The range of Doppler shifts experienced by different multipath components. For narrowband fading, it's related to the relative motion between the transmitter and receiver.
    *   **Calculation:** $f_d = \frac{v f_c}{c}$, where:
        *   $v$: Relative velocity between transmitter and receiver.
        *   $f_c$: Carrier frequency.
        *   $c$: Speed of light.
    *   **Impact:** A larger Doppler spread leads to faster fading and a shorter coherence time.

**Important Point:** The relationship between symbol duration and coherence time determines whether a channel is flat or frequency selective. For narrowband fading, we assume the symbol duration is much shorter than the coherence time.

---

### 9. Channel Capacity and Information Theory

Narrowband fading impacts the achievable data rates and the fundamental limits of communication.

*   **Channel Capacity in AWGN:** For an AWGN channel, the capacity is given by the Shannon-Hartley theorem: $C = B \log_2(1 + SNR)$, where $B$ is bandwidth and SNR is the signal-to-noise ratio.

*   **Channel Capacity in Fading:** For a fading channel, the capacity is a random variable and is often averaged over the fading distribution. For a narrowband fading channel with average SNR $\bar{\gamma}$:
    *   **Rayleigh Fading:** The average capacity is given by:
        $C_{avg} = B \log_2(e) E_{\gamma} [1 - e^{-\gamma/\bar{\gamma}}]$
        This shows a significant reduction in capacity compared to AWGN.
    *   **Rician Fading:** The average capacity is higher than Rayleigh fading due to the LOS component.

**Relevant Textbooks:**

*   **Cover & Thomas, "Elements of Information Theory":** Chapter 7 discusses channel capacity and its variations.
*   **Goldsmith, "Wireless Communications":** Chapter 11 delves into channel capacity in fading channels.

---

### 10. Performance Analysis Examples (BER)

Let's consider the Bit Error Rate (BER) for Binary Phase Shift Keying (BPSK) modulated signals over a narrowband fading channel.

*   **BPSK in AWGN:**
    *   BER: $P_e( \gamma ) = Q(\sqrt{2\gamma})$
    *   $Q(x) = \frac{1}{\sqrt{2\pi}} \int_x^\infty e^{-t^2/2} dt$
    *   $\gamma$: Instantaneous SNR.

*   **BPSK in Rayleigh Fading:**
    *   The average BER is obtained by averaging $P_e(\gamma)$ over the Rayleigh PDF of $\gamma$.
    *   $P_{e, Rayleigh} = \int_0^\infty Q(\sqrt{2\gamma}) f_\gamma(\gamma) d\gamma$
    *   If the SNR distribution is exponential (which is true for Rayleigh amplitude), i.e., $f_\gamma(\gamma) = \frac{1}{\bar{\gamma}} e^{-\gamma/\bar{\gamma}}$, then:
        $P_{e, Rayleigh} = \frac{1}{2} \left(1 - \frac{\bar{\gamma}}{\sqrt{1+2\bar{\gamma}}}\right)$

*   **BPSK in Rician Fading:**
    *   The average BER involves integrating $Q(\sqrt{2\gamma})$ over the Rician PDF of $\gamma$.
    *   $P_{e, Rician}(K, \bar{\gamma}) = \frac{1}{2} \left(1 - \sqrt{\frac{\bar{\gamma}_0}{1+\bar{\gamma}_0}}\right) + \frac{1}{2} \sqrt{\frac{K\bar{\gamma}_0}{1+K\bar{\gamma}_0}} e^{-K(1+\bar{\gamma}_0)\bar{\gamma}/(1+2\bar{\gamma})}$  (This is a more complex form, often approximated or calculated numerically).
    *   A simpler, often cited form for Rician is:
        $P_{e, Rician} = \frac{1}{2} \left(1 - \sqrt{\frac{\bar{\gamma}_0}{1+\bar{\gamma}_0}}\right) + \frac{1}{2} \sqrt{\frac{K \bar{\gamma}_0}{1+K \bar{\gamma}_0}} \exp\left(-\frac{K(1+\bar{\gamma}_0)\bar{\gamma}_0}{1+2\bar{\gamma}_0}\right)$
        Where $\bar{\gamma}_0$ is the average SNR of the scattered components. The actual expression can be complex and depends on the exact definition of K and the SNR.
    *   **Key Observation:** Rician fading has a lower BER than Rayleigh fading for the same average SNR because the LOS path provides a more stable signal component.

**Important Point:** Fading dramatically degrades the BER performance, necessitating techniques like diversity and equalization to mitigate its effects.

---

### 11. Relation to Course Outcomes

*   **CO4: Explain the basic Principle of wireless communication techniques (Knowledge Level: K2)**
    *   This topic explains the fundamental phenomenon of fading, a core aspect of wireless communication. Understanding fading is crucial for appreciating the principles of designing wireless systems.

*   **CO5: Describe the wireless channel models and analyse the performance of the modulation techniques for flat fading channels (Knowledge Level: K2)**
    *   This topic directly addresses wireless channel models (Rayleigh, Rician) that characterize flat fading. It also discusses how these models affect the performance of modulation techniques (e.g., BER for BPSK).

*   **CO1: Explain information theory measures such as entropy, conditional entropy, mutual information (Knowledge Level: K2)**
    *   The discussion on channel capacity in fading channels directly relates to mutual information. Understanding how fading affects capacity provides a practical context for information theory concepts.

---

### 12. Key Points to Remember

*   **Narrowband fading** implies the channel gain is constant across the signal bandwidth but varies with time.
*   It arises from multipath propagation and Doppler shift.
*   **Rayleigh fading** occurs without a line-of-sight (LOS) path; characterized by a Rayleigh distribution for signal amplitude.
*   **Rician fading** occurs with an LOS path; characterized by a Rician distribution for signal amplitude and the parameter $K$.
*   **Coherence time ($T_c$)** and **Doppler spread ($f_d$)** define the time-varying nature of the fading.
*   Narrowband fading significantly degrades BER performance and reduces channel capacity compared to AWGN.
*   Symbol duration ($T_s$) must be much smaller than coherence time ($T_c$) for flat fading.

---

### Practice Questions and Answers

**Question 1:**
What is the primary cause of narrowband fading in wireless communication systems?
**(A) Inter-symbol interference (ISI)**
**(B) Multipath propagation and Doppler shift**
**(C) Attenuation due to distance**
**(D) Interference from adjacent channels**

**Answer:** (B) Multipath propagation and Doppler shift

**Question 2:**
A wireless channel is characterized by a dominant line-of-sight (LOS) path and several scattered multipath components. Which fading distribution is most likely to describe the amplitude of the received signal?
**(A) Rayleigh fading**
**(B) Rician fading**
**(C) Log-normal fading**
**(D) Nakagami-m fading**

**Answer:** (B) Rician fading

**Question 3:**
Explain the difference between flat fading and frequency-selective fading in terms of channel bandwidth and coherence bandwidth.
**(Answer:** Flat fading occurs when the signal bandwidth is much smaller than the channel's coherence bandwidth, meaning all frequency components of the signal experience similar fading. Frequency-selective fading occurs when the signal bandwidth is larger than the coherence bandwidth, leading to different fading across different frequency components.)

**Question 4:**
How does the Doppler shift affect the coherence time of a wireless channel?
**(Answer:** A larger Doppler shift, caused by higher relative velocity between transmitter and receiver or higher carrier frequency, leads to a shorter coherence time. This means the channel changes more rapidly.)

**Question 5:**
Consider a system transmitting at a carrier frequency of 2 GHz with a mobile speed of 100 km/h. Estimate the maximum Doppler shift and the approximate coherence time (use a typical threshold for constant channel behavior, e.g., $T_c \approx 0.423/f_d$).
**(Answer:**
First, convert speed to m/s: $v = 100 \text{ km/h} \times \frac{1000 \text{ m}}{1 \text{ km}} \times \frac{1 \text{ h}}{3600 \text{ s}} \approx 27.78 \text{ m/s}$.
Carrier frequency $f_c = 2 \text{ GHz} = 2 \times 10^9 \text{ Hz}$.
Speed of light $c \approx 3 \times 10^8 \text{ m/s}$.

Maximum Doppler shift:
$f_d = \frac{v f_c}{c} = \frac{(27.78 \text{ m/s}) \times (2 \times 10^9 \text{ Hz})}{3 \times 10^8 \text{ m/s}} \approx 185.2 \text{ Hz}$.

Approximate coherence time:
$T_c \approx \frac{0.423}{f_d} = \frac{0.423}{185.2 \text{ Hz}} \approx 0.00228 \text{ seconds} = 2.28 \text{ ms}$.
This indicates that the channel changes significantly over timescales of a few milliseconds at this speed and frequency.)

**Question 6:**
Given the BER expression for BPSK in Rayleigh fading, $P_{e, Rayleigh} = \frac{1}{2} \left(1 - \frac{\bar{\gamma}}{\sqrt{1+2\bar{\gamma}}}\right)$, what happens to the BER as the average SNR ($\bar{\gamma}$) increases?
**(Answer:** As $\bar{\gamma}$ increases, the term $\frac{\bar{\gamma}}{\sqrt{1+2\bar{\gamma}}}$ approaches 1. Specifically, $\frac{\bar{\gamma}}{\sqrt{1+2\bar{\gamma}}} = \frac{1}{\sqrt{2/\bar{\gamma} + 1}}$. As $\bar{\gamma} \to \infty$, this approaches 1. Therefore, $P_{e, Rayleigh}$ approaches $\frac{1}{2}(1-1) = 0$. This means the BER still decreases with increasing SNR, but at a slower rate than in AWGN due to the residual effect of fading.)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
