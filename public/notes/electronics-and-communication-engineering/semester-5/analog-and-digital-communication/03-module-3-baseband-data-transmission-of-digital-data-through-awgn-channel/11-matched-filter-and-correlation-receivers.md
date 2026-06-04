---
title: "Matched filter and correlation receivers"
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 3: Baseband data transmission of digital data through AWGN channel"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe914"
status: "completed"
scrapedAt: "2026-05-23T17:53:01.994Z"
---
# ANALOG AND DIGITAL COMMUNICATION: Module 3 - Baseband Data Transmission Through AWGN Channel

## Topic: Matched Filter and Correlation Receivers

This module delves into the fundamental techniques for detecting digital signals transmitted through an Additive White Gaussian Noise (AWGN) channel. Specifically, we will focus on the optimal receivers: the matched filter and the correlation receiver. Understanding these concepts is crucial for achieving the minimum probability of error in digital communication systems, directly contributing to **CO3: Analyze the baseband transmission of digital data through AWGN channel (Knowledge Level: K3)** and indirectly supporting **CO2: Explain the basic concepts of digital communication (Knowledge Level: K2)**.

---

### 1. Introduction to Baseband Digital Data Transmission in AWGN Channel

Before diving into specific receivers, it's essential to establish the context.

*   **Baseband Transmission:** Digital data is transmitted directly in its original form (e.g., pulses representing bits) without modulation onto a carrier frequency.
*   **AWGN Channel:** This is a simplified but highly useful model for communication channels.
    *   **Additive:** The noise is added to the transmitted signal.
    *   **White:** The noise has a uniform power spectral density across all frequencies. This means all frequencies are equally likely.
    *   **Gaussian:** The noise amplitude follows a Gaussian (normal) probability distribution.
*   **Goal of a Receiver:** The primary objective of a receiver is to extract the transmitted digital data (bits) from the noisy received signal with the minimum possible probability of error.

---

### 2. The Problem of Signal Detection in Noise

When digital signals are transmitted, they are inevitably corrupted by noise. This noise can distort the signal, making it difficult for the receiver to correctly identify the transmitted bit.

*   **Signal Impairment:** Noise adds random variations to the received signal, blurring the distinction between different transmitted symbols (e.g., a '1' pulse and a '0' pulse).
*   **Probability of Error (P_e):** The ultimate measure of a receiver's performance is its ability to minimize the probability of incorrectly deciding on a transmitted bit.
*   **Optimum Receiver:** The goal is to design a receiver that achieves the lowest possible $P_e$ for a given transmitted signal and noise characteristics.

---

### 3. The Matched Filter Receiver

The matched filter is proven to be the **optimal linear filter** for detecting a known signal in the presence of additive white Gaussian noise. It maximizes the signal-to-noise ratio (SNR) at the sampling instant.

**Key Concept:** A matched filter is designed specifically for a particular signal shape. Its impulse response is a time-reversed and shifted version of the transmitted signal.

**Derivation and Principle (Refer to Haykin & Moher, Chapter 3; Lathi & Ding, Chapter 7):**

Consider a binary signaling scheme where we transmit either a pulse $s_1(t)$ for a '1' or $s_0(t)$ for a '0' over a duration $T$. The received signal $r(t)$ is given by:

$r(t) = s(t) + n(t)$

where $s(t)$ is the transmitted signal (either $s_1(t)$ or $s_0(t)$) and $n(t)$ is the AWGN with power spectral density $N_0/2$.

The output of a linear filter with impulse response $h(t)$ is given by the convolution:

$y(t) = r(t) * h(t) = \int_{-\infty}^{\infty} r(\tau) h(t-\tau) d\tau$

At the sampling instant $t=T$ (assuming signals are defined over $[0, T]$), the output is:

$y(T) = \int_{0}^{T} r(\tau) h(T-\tau) d\tau$

We want to maximize the SNR at $t=T$. The output signal component at $t=T$ is proportional to the correlation between the received signal and the filter's impulse response. The noise component is random.

**The Matched Filter Impulse Response:**

The impulse response $h_m(t)$ that maximizes the instantaneous SNR at time $T$ is given by:

$h_m(t) = s(T-t)$  for $0 \le t \le T$
$h_m(t) = 0$      otherwise

where $s(t)$ is the transmitted signal pulse.

**Output of the Matched Filter:**

When the matched filter with impulse response $h_m(t) = s(T-t)$ is applied to the received signal $r(t)$, the output at time $t=T$ is:

$y(T) = \int_{0}^{T} r(\tau) s(\tau) d\tau$

Since $r(\tau) = s(\tau) + n(\tau)$, we get:

$y(T) = \int_{0}^{T} (s(\tau) + n(\tau)) s(\tau) d\tau$
$y(T) = \int_{0}^{T} s^2(\tau) d\tau + \int_{0}^{T} n(\tau) s(\tau) d\tau$

The first term is the signal component, and the second term is the noise component. Let $E_s = \int_{0}^{T} s^2(\tau) d\tau$ be the energy of the signal pulse. The output signal component is $E_s$.

The variance of the noise component is:

$\sigma_n^2 = E[ (\int_{0}^{T} n(\tau) s(\tau) d\tau)^2 ] = \frac{N_0}{2} \int_{0}^{T} s^2(\tau) d\tau = \frac{N_0}{2} E_s$

The SNR at the output of the matched filter at time $T$ is:

$SNR_{out} = \frac{(\text{Output Signal Component})^2}{\text{Variance of Output Noise Component}}} = \frac{E_s^2}{\frac{N_0}{2} E_s} = \frac{2 E_s}{N_0}$

**Decision Rule:**

At the sampling instant $T$, the receiver compares the output $y(T)$ to a threshold $\eta$.

*   If $y(T) > \eta$, decide that bit '1' was transmitted.
*   If $y(T) < \eta$, decide that bit '0' was transmitted.

For antipodal signaling (e.g., $s_1(t) = s(t)$ and $s_0(t) = -s(t)$), the optimal threshold is usually zero. For other signaling schemes, the threshold is chosen to minimize $P_e$.

**Important Point:** The matched filter output at time $T$ is effectively the correlation of the received signal with the transmitted signal pulse.

---

### 4. The Correlation Receiver

The correlation receiver achieves the same optimal performance as the matched filter receiver. It is often considered conceptually simpler and easier to implement in some digital systems.

**Key Concept:** The correlation receiver computes the correlation between the received signal and a known "replica" of each possible transmitted symbol.

**Principle:**

Instead of using a filter, the correlation receiver uses a correlator (which can be implemented using multipliers and integrators). At the sampling instant $T$, the receiver computes the correlation of the received signal $r(t)$ with each of the possible transmitted signal waveforms over the symbol duration $T$.

For binary signaling with waveforms $s_1(t)$ and $s_0(t)$ for bits '1' and '0' respectively:

*   Compute $y_1 = \int_{0}^{T} r(t) s_1(t) dt$
*   Compute $y_0 = \int_{0}^{T} r(t) s_0(t) dt$

**Relationship to Matched Filter:**

The correlation receiver performs essentially the same operation as the matched filter. The output of the matched filter $y(T)$ when matched to $s_1(t)$ is $\int_{0}^{T} r(\tau) s_1(\tau) d\tau$.

**Decision Rule:**

The receiver compares the computed correlation values.

*   If $y_1 > y_0$ (or more generally, if the correlation with the assumed '1' waveform is greater than the correlation with the assumed '0' waveform), decide that bit '1' was transmitted.
*   If $y_0 > y_1$, decide that bit '0' was transmitted.

**Decision Statistic:**

For antipodal signaling ($s_0(t) = -s_1(t)$), the decision can be made based on a single correlation:

$y = \int_{0}^{T} r(t) s_1(t) dt$

*   If $y > 0$, decide '1'.
*   If $y < 0$, decide '0'.

This is equivalent to comparing the output of a matched filter (matched to $s_1(t)$) with a threshold of zero.

**Example (Refer to Haykin & Moher, Chapter 3; Lathi & Ding, Chapter 7):**

Consider binary Non-Return-to-Zero (NRZ) signaling where:
*   Bit '1' is represented by a pulse of amplitude $A$ for duration $T$: $s_1(t) = A$, $0 \le t \le T$.
*   Bit '0' is represented by a pulse of amplitude $-A$ for duration $T$: $s_0(t) = -A$, $0 \le t \le T$.

The energy of each pulse is $E_s = \int_{0}^{T} A^2 dt = A^2 T$.

**Matched Filter Receiver:**
The matched filter for $s_1(t)$ has impulse response $h_m(t) = s_1(T-t) = A$ for $0 \le t \le T$.
The output at $t=T$ is:
$y(T) = \int_{0}^{T} r(t) A dt$

**Correlation Receiver:**
The receiver computes:
$y_1 = \int_{0}^{T} r(t) s_1(t) dt = \int_{0}^{T} r(t) A dt$
$y_0 = \int_{0}^{T} r(t) s_0(t) dt = \int_{0}^{T} r(t) (-A) dt = - \int_{0}^{T} r(t) A dt$

Decision: If $y_1 > y_0$, decide '1'. This means $\int_{0}^{T} r(t) A dt > - \int_{0}^{T} r(t) A dt$, which simplifies to $2 \int_{0}^{T} r(t) A dt > 0$, or $\int_{0}^{T} r(t) A dt > 0$. This is the same decision rule as using the output of the matched filter with a threshold of zero.

---

### 5. Performance of Matched and Correlation Receivers

Both the matched filter and correlation receivers achieve the **Minimum Probability of Error** for detecting a known signal in AWGN.

*   **Probability of Error (P_e):** The $P_e$ for binary antipodal signaling (e.g., BFSK, BPSK) using a matched filter or correlation receiver is given by the Gaussian error function:

    $P_e = Q\left(\sqrt{\frac{E_b}{N_0}}\right)$

    where:
    *   $E_b$ is the energy per bit (for binary systems, $E_b = E_s$).
    *   $N_0$ is the power spectral density of the AWGN.
    *   $Q(x) = \frac{1}{\sqrt{2\pi}} \int_{x}^{\infty} e^{-t^2/2} dt$ is the Q-function, which represents the tail probability of a standard normal distribution.

*   **Energy per Bit ($E_b$):** This is a crucial parameter determining the performance. Higher $E_b$ leads to lower $P_e$.
*   **Noise Spectral Density ($N_0$):** Higher $N_0$ indicates more noise, leading to higher $P_e$.
*   **Energy-to-Noise Ratio ($E_b/N_0$):** This ratio is the primary determinant of the error probability.

**Important Points:**

*   The matched filter is optimal for detecting a known signal in AWGN because it whitens the noise at its output (making it statistically independent of the signal) and maximizes the SNR at the sampling instant.
*   The correlation receiver provides an equivalent optimal performance by correlating the received signal with each possible transmitted symbol.
*   The performance is characterized by the $Q$-function, which relates $P_e$ to the $E_b/N_0$ ratio.

---

### 6. Implementation Aspects

*   **Matched Filter Implementation:** Can be implemented using analog circuits (e.g., RLC circuits) or digital signal processing (DSP) techniques. In digital implementations, the impulse response is sampled, and the convolution is performed digitally.
*   **Correlation Receiver Implementation:** Typically implemented digitally. The received signal is sampled, and the multiplication and integration (summation) are performed by a digital processor.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the primary advantage of using a matched filter in a digital communication receiver operating over an AWGN channel?
a) It minimizes the bandwidth of the signal.
b) It maximizes the signal-to-noise ratio (SNR) at the sampling instant.
c) It eliminates all noise from the received signal.
d) It converts the digital signal to an analog signal.

**Answer:** b) It maximizes the signal-to-noise ratio (SNR) at the sampling instant.

**Question 2:**
The impulse response of a matched filter for a transmitted pulse $s(t)$ over the interval $[0, T]$ is given by:
a) $h(t) = s(t)$
b) $h(t) = s(t+T)$
c) $h(t) = s(T-t)$
d) $h(t) = s(t-T)$

**Answer:** c) $h(t) = s(T-t)$

**Question 3:**
For binary antipodal signaling with pulse energy $E_b$ and AWGN with power spectral density $N_0/2$, the probability of error for a matched filter receiver is given by $P_e = Q(\sqrt{x})$. What is the value of $x$?
a) $E_b / N_0$
b) $2E_b / N_0$
c) $E_b^2 / N_0$
d) $\sqrt{2E_b / N_0}$

**Answer:** b) $2E_b / N_0$

**Question 4:**
Explain the core difference in implementation between a matched filter receiver and a correlation receiver.

**Answer:**
A matched filter is a continuous-time linear filter designed with an impulse response matched to the transmitted signal. A correlation receiver, typically implemented digitally, correlates the received signal with a replica of each possible transmitted symbol. While the underlying principle of correlation is the same, the implementation approach differs (analog filtering vs. digital multiplication and integration).

**Question 5 (Conceptual):**
If you transmit a pulse with higher energy over an AWGN channel, how would this affect the probability of error at the receiver, assuming the receiver uses a matched filter? Justify your answer.

**Answer:**
Transmitting a pulse with higher energy ($E_b$) would decrease the probability of error ($P_e$). This is because the probability of error is a decreasing function of the energy-to-noise ratio ($E_b/N_0$), specifically $P_e = Q(\sqrt{2E_b/N_0})$. A higher $E_b$ leads to a larger $E_b/N_0$ ratio, which in turn results in a smaller value for the $Q$-function argument, and thus a lower $P_e$.

---

### 8. Important Points to Remember

*   **Optimality:** Matched filters and correlation receivers are optimal linear receivers for detecting a known signal in AWGN, minimizing the probability of error.
*   **Matched Filter Function:** Its impulse response is the time-reversed and shifted version of the transmitted signal waveform.
*   **Correlation Receiver Function:** It computes the correlation of the received signal with replicas of possible transmitted symbols.
*   **SNR Maximization:** Both techniques maximize the SNR at the sampling instant.
*   **Key Performance Metric:** The probability of error ($P_e$) is directly related to the energy per bit-to-noise power spectral density ratio ($E_b/N_0$) through the Q-function.
*   **Antipodal Signaling:** Offers the best performance (lowest $P_e$ for a given $E_b/N_0$) among common binary signaling schemes.

---

### 9. Alignment with Course Outcomes

*   **CO1 (Illustrate principles of analog communication):** While this topic is primarily digital, the concept of filtering and correlation has roots in analog signal processing, providing a bridge.
*   **CO2 (Explain basic concepts of digital communication):** Understanding signal detection, noise, and probability of error are fundamental digital communication concepts.
*   **CO3 (Analyze baseband transmission of digital data through AWGN channel):** This is the core focus. We analyze how optimal receivers like matched filters and correlators work to combat AWGN and achieve reliable data detection. The derivation of $P_e$ and the role of $E_b/N_0$ are key analytical aspects.
*   **CO4 (Apply various digital modulation techniques):** While this topic doesn't directly cover modulation schemes, the principles of matched filtering and correlation are universally applied to extract information in various digital modulation techniques (e.g., BPSK, BFSK, QPSK) when transmitted over AWGN channels. The matched filter is tailored to the specific waveform of each symbol in these schemes.

---

This concludes the study notes for Matched Filter and Correlation Receivers. These are foundational concepts for understanding digital communication system performance and design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
