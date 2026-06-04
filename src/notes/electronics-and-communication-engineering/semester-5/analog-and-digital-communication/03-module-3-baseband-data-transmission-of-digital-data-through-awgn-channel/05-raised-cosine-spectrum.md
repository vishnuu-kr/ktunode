---
title: "Raised cosine spectrum"
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 3: Baseband data transmission of digital data through AWGN channel"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe90e"
status: "completed"
scrapedAt: "2026-05-23T17:52:57.616Z"
---
# Module 3: Baseband Data Transmission of Digital Data through AWGN Channel - Raised Cosine Spectrum

This module delves into the fundamental aspects of transmitting digital data over a baseband channel corrupted by Additive White Gaussian Noise (AWGN). A crucial element in achieving reliable digital communication is the spectral shaping of the transmitted signal. This topic focuses on the **Raised Cosine Spectrum**, a widely adopted pulse shaping technique that optimizes the trade-off between bandwidth efficiency and intersymbol interference (ISI).

## Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the need for pulse shaping in digital communication.
*   Define and describe the characteristics of the raised cosine spectrum.
*   Analyze the frequency-domain properties of the raised cosine pulse.
*   Relate the raised cosine spectrum to bandwidth efficiency and ISI.
*   Explain the role of the roll-off factor ($\alpha$) in the raised cosine spectrum.
*   Appreciate the practical implementation considerations of raised cosine filtering.

## 1. Introduction to Pulse Shaping

### 1.1 The Need for Pulse Shaping

Digital data is transmitted as a sequence of pulses. When these pulses are transmitted without proper shaping, several problems can arise:

*   **Wide Bandwidth:** A simple rectangular pulse (which corresponds to a sinc function in the frequency domain) has significant side lobes. This means it occupies a much larger bandwidth than theoretically necessary, leading to inefficient use of the communication channel.
*   **Intersymbol Interference (ISI):** When pulses are transmitted too close together (i.e., at a high bit rate), the tail of one pulse can interfere with the next pulse at the sampling instants. This ISI can corrupt the received data, leading to errors.

**Key Concept:** Pulse shaping is the process of modifying the shape of individual transmitted pulses to optimize the trade-off between bandwidth utilization and ISI.

### 1.2 The Ideal vs. Practical Scenario

*   **Ideal Scenario (Nyquist Criterion):** To avoid ISI, the Nyquist criterion for zero ISI states that the magnitude response of the overall system (transmitter filter + channel + receiver filter) at the sampling frequency should be zero. A **sinc function** in the time domain perfectly satisfies this criterion, achieving maximum bandwidth efficiency.
    *   **Time Domain:** $p(t) = \text{sinc}(2BT) = \frac{\sin(2\pi BT)}{2\pi BT}$, where $B$ is the bandwidth and $T$ is the symbol duration.
    *   **Frequency Domain:** $P(f)$ is a rectangular pulse.
*   **Practical Limitation:** The ideal sinc pulse has infinite side lobes in the frequency domain. This means it requires an infinitely wide bandwidth, which is not feasible in practice.

**Therefore, we need a practical pulse shape that approximates the ideal sinc function but has a finite bandwidth and controllable side lobe levels to manage ISI.**

## 2. The Raised Cosine Spectrum

The raised cosine spectrum is a class of pulse shaping filters that provides a practical solution to the bandwidth and ISI problems. It is a spectral shaping technique that is commonly used at the transmitter.

### 2.1 Definition and Mathematical Representation

The raised cosine spectrum, in the frequency domain, is characterized by a flat top and a gradual roll-off at the edges. It is defined by the following magnitude response:

$$
|P(f)| = \begin{cases}
1 & \text{if } |f| \le \frac{1-\alpha}{2T} \\
\frac{1}{2} \left[1 + \cos\left(\frac{\pi T}{\alpha} \left(|f| - \frac{1-\alpha}{2T}\right)\right)\right] & \text{if } \frac{1-\alpha}{2T} < |f| \le \frac{1+\alpha}{2T} \\
0 & \text{if } |f| > \frac{1+\alpha}{2T}
\end{cases}
$$

where:
*   $T$ is the symbol duration.
*   $1/T$ is the symbol rate.
*   $\alpha$ is the **roll-off factor**, with $0 \le \alpha \le 1$.

### 2.2 Key Parameters and Their Significance

#### 2.2.1 Roll-off Factor ($\alpha$)

The roll-off factor is the most critical parameter in the raised cosine spectrum. It controls the trade-off between bandwidth efficiency and ISI.

*   **$\alpha = 0$ (Ideal Case):** When $\alpha = 0$, the raised cosine spectrum becomes a rectangular pulse in the frequency domain. This corresponds to the ideal sinc pulse in the time domain.
    *   Bandwidth: $B = \frac{1}{2T}$ (Nyquist bandwidth).
    *   Maximum bandwidth efficiency.
    *   Requires infinite bandwidth in practice.
    *   Zero ISI at the sampling instants.

*   **$\alpha = 1$ (Maximum Roll-off):** When $\alpha = 1$, the raised cosine spectrum has the widest bandwidth.
    *   Bandwidth: $B = \frac{1}{T}$.
    *   Less bandwidth efficient.
    *   More robust against timing jitter.
    *   Still aims to satisfy the Nyquist criterion for ISI.

*   **$0 < \alpha < 1$ (Practical Cases):** This is the most common range for $\alpha$.
    *   Provides a good balance between bandwidth and ISI.
    *   A smaller $\alpha$ leads to a narrower bandwidth but a longer time-domain pulse with more significant side lobes.
    *   A larger $\alpha$ leads to a wider bandwidth but a shorter time-domain pulse with fewer and smaller side lobes.

#### 2.2.2 Bandwidth

The **absolute bandwidth** of the raised cosine spectrum is the range of frequencies from DC to the point where the spectrum becomes zero.

*   Absolute Bandwidth: $B_{abs} = \frac{1+\alpha}{2T}$.

The **excess bandwidth** (or roll-off bandwidth) is the bandwidth beyond the Nyquist bandwidth.

*   Excess Bandwidth: $B_{excess} = B_{abs} - \frac{1}{2T} = \frac{1+\alpha}{2T} - \frac{1}{2T} = \frac{\alpha}{2T}$.

**Important Point:** The total bandwidth occupied by the raised cosine spectrum is often referred to as $B = \frac{1+\alpha}{2T}$. This bandwidth is typically normalized to $B = \frac{1}{2T}(1+\alpha)$.

#### 2.2.3 Symbol Rate and Bit Rate

*   **Symbol Rate ($R_s$):** The number of symbols transmitted per second. $R_s = 1/T$.
*   **Bit Rate ($R_b$):** The number of bits transmitted per second. If each symbol represents $m$ bits, then $R_b = m \cdot R_s = m/T$.

The bandwidth of the raised cosine filter can be expressed in terms of the symbol rate:

*   Absolute Bandwidth: $B_{abs} = \frac{1+\alpha}{2} R_s$.

#### 2.2.4 Time-Domain Pulse Shape

The time-domain pulse shape $p(t)$ is the inverse Fourier Transform of the frequency-domain magnitude response $|P(f)|$. The raised cosine pulse in the time domain is given by:

$$
p(t) = \frac{\sin(\pi t/T)}{\pi t/T} \cdot \frac{\cos(\alpha \pi t/T)}{1 - (2\alpha t/T)^2}
$$

**Key Characteristics of the Raised Cosine Pulse in the Time Domain:**

*   **Zero ISI Property:** The raised cosine pulse is designed to have zero crossings at all sampling instants except for $t=0$. This ensures that ISI is eliminated at the receiver's sampling points.
*   **Sidelobe Decay:** The side lobes of the raised cosine pulse decay faster than those of the ideal sinc pulse. This is a direct consequence of the smoother roll-off in the frequency domain.
*   **Pulse Width:** The width of the main lobe of the pulse is influenced by $\alpha$. A larger $\alpha$ leads to a narrower pulse.

**Haykin & Moher (5th Ed., 2020), Chapter 5, Section 5.4, discusses pulse shaping for zero ISI, highlighting the spectral properties of the Nyquist pulses, including the raised cosine.**

## 3. Trade-offs and Design Considerations

### 3.1 Bandwidth Efficiency vs. ISI

*   **High Bandwidth Efficiency (Low $\alpha$):**
    *   Narrower spectrum, requiring less channel bandwidth.
    *   Longer time-domain pulse, with more significant side lobes.
    *   More susceptible to timing errors (timing jitter).
*   **Low Bandwidth Efficiency (High $\alpha$):**
    *   Wider spectrum, requiring more channel bandwidth.
    *   Shorter time-domain pulse, with less significant side lobes.
    *   More robust against timing errors.

**Example:** If we need to transmit data at a high bit rate in a limited bandwidth channel, we would choose a smaller $\alpha$ to maximize bandwidth efficiency. However, if the channel is prone to timing variations, a larger $\alpha$ might be preferred for robustness.

### 3.2 Implementation Aspects

*   **Transmitter Filter:** A raised cosine filter is typically implemented as a **transversal filter** or using **digital signal processing (DSP)** techniques.
*   **Receiver Filter:** At the receiver, a matched filter (often also a raised cosine filter, or a filter with complementary spectral characteristics) is used to maximize the signal-to-noise ratio (SNR) and further reduce ISI. The combination of transmitter and receiver filters is often referred to as the **"transmit-receive filter pair"** or **"equalizer"**.
*   **Eye Diagram:** The eye diagram is a graphical tool used to visualize the performance of a digital communication system in terms of ISI and noise. A raised cosine pulse shaping generally results in a "cleaner" eye diagram with a wider opening compared to unfiltered pulses.

**Lathi & Ding (5th Ed., 2018), Chapter 6, discusses the effects of intersymbol interference and introduces the concept of Nyquist pulses and their spectral shaping properties.**

## 4. Advantages of Raised Cosine Spectrum

*   **Controlled ISI:** Provides a systematic way to control ISI by adjusting the roll-off factor $\alpha$.
*   **Bandwidth Efficiency:** Achieves a good balance between spectral efficiency and ISI mitigation.
*   **Practical Implementation:** Can be implemented reasonably well using practical filter designs.
*   **Robustness:** Offers a degree of robustness against timing jitter, especially with larger $\alpha$.

## 5. Relation to Course Outcomes

*   **CO1: Illustrate the principles of analog communication systems (Knowledge Level: K2):** While raised cosine is for digital transmission, understanding spectral shaping for efficient bandwidth usage is a foundational concept applicable to analog communication as well (e.g., modulation schemes).
*   **CO2: Explain the basic concepts of digital communication (Knowledge Level: K2):** This topic is central to understanding how digital signals are prepared for transmission.
*   **CO3: Analyse the baseband transmission of digital data through AWGN channel (Knowledge Level: K3):** Raised cosine shaping directly impacts the performance of baseband transmission in the presence of noise and ISI. Analyzing the trade-offs with $\alpha$ requires analytical skills.
*   **CO4: Apply various digital modulation techniques in the design of digital communication systems (Knowledge Level: K3):** Pulse shaping is an integral part of designing digital communication systems that employ various modulation techniques. The choice of pulse shape affects the overall system performance and design.

## 6. Practice Questions and Answers

**Question 1:** Define the roll-off factor ($\alpha$) for a raised cosine spectrum and explain its impact on bandwidth and ISI.

**Answer:** The roll-off factor ($\alpha$) is a parameter in the raised cosine spectrum that determines the rate at which the spectrum transitions from its flat top to zero.
*   **Impact on Bandwidth:** A larger $\alpha$ leads to a wider bandwidth ($B_{abs} = \frac{1+\alpha}{2T}$), while a smaller $\alpha$ results in a narrower bandwidth.
*   **Impact on ISI:** A smaller $\alpha$ means a longer time-domain pulse with more significant side lobes, making the system more susceptible to ISI. A larger $\alpha$ leads to a shorter pulse and reduced ISI. It effectively controls the trade-off between bandwidth efficiency and ISI.

**Question 2:** What is the absolute bandwidth of a raised cosine spectrum with a roll-off factor of $\alpha = 0.5$ and a symbol duration of $T = 2$ ms?

**Answer:**
The absolute bandwidth is given by $B_{abs} = \frac{1+\alpha}{2T}$.
Given:
*   $\alpha = 0.5$
*   $T = 2 \text{ ms} = 0.002 \text{ s}$

$B_{abs} = \frac{1 + 0.5}{2 \times 0.002 \text{ s}} = \frac{1.5}{0.004 \text{ s}} = 375 \text{ Hz}$.

**Question 3:** Explain why an ideal sinc pulse, despite providing zero ISI, is not practical for digital communication systems.

**Answer:** An ideal sinc pulse has a rectangular spectrum in the frequency domain. This rectangular shape in the frequency domain corresponds to infinite side lobes in the time domain. Consequently, a sinc pulse requires an infinitely wide bandwidth to transmit, which is not feasible in real-world communication channels. Practical channels have finite bandwidth, and transmitting a signal with infinite bandwidth would lead to severe attenuation of the signal components outside the available channel bandwidth.

**Question 4:** How does the time-domain pulse shape of a raised cosine filter differ from an ideal rectangular pulse?

**Answer:** An ideal rectangular pulse in the time domain has a sinc function in the frequency domain with significant side lobes. A raised cosine pulse, in the time domain, has a shape that is a product of a sinc function and a cosine term. This results in faster decay of its side lobes compared to the sinc function. This faster decay in the time domain is a consequence of the smoother, roll-off characteristic in the frequency domain of the raised cosine spectrum.

**Question 5:** If you need to transmit data at a very high rate in a narrow bandwidth channel, which end of the roll-off factor spectrum ($\alpha$) would you generally choose, and why?

**Answer:** You would generally choose a **smaller $\alpha$ (closer to 0)**. This is because a smaller $\alpha$ leads to a narrower bandwidth, maximizing bandwidth efficiency, which is crucial for transmitting at a high rate in a narrow channel. However, you must be mindful of the increased susceptibility to ISI due to the longer time-domain pulse shape. Careful receiver design (e.g., using an appropriate matched filter or equalizer) would be necessary to mitigate this ISI.

## 7. Important Points to Remember

*   **Pulse shaping is essential** to manage bandwidth and prevent Intersymbol Interference (ISI).
*   The **raised cosine spectrum** offers a practical compromise between spectral efficiency and ISI mitigation.
*   The **roll-off factor ($\alpha$)** is the key parameter that controls this trade-off.
*   **$\alpha = 0$** corresponds to the ideal sinc pulse (maximum efficiency, infinite bandwidth).
*   **$\alpha = 1$** corresponds to maximum roll-off (wider bandwidth, more robust to timing jitter).
*   The **absolute bandwidth** of a raised cosine spectrum is $B_{abs} = \frac{1+\alpha}{2T}$.
*   The **excess bandwidth** is $B_{excess} = \frac{\alpha}{2T}$.
*   Raised cosine filters are typically implemented at the **transmitter**, and a complementary filter (often also raised cosine) is used at the **receiver** (matched filter).
*   The **eye diagram** is a crucial tool for evaluating the performance of pulse shaping.

This concludes the study notes for the Raised Cosine Spectrum. It's recommended to revisit the relevant sections in your textbooks for a deeper understanding and more detailed mathematical derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
