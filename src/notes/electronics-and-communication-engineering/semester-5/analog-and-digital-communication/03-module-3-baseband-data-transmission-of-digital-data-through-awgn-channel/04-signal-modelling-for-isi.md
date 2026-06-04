---
title: "Signal modelling for ISI"
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 3: Baseband data transmission of digital data through AWGN channel"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe90d"
status: "completed"
scrapedAt: "2026-05-23T17:52:56.904Z"
---
# Module 3: Baseband Data Transmission of Digital Data through AWGN Channel

## Topic: Signal Modelling for ISI

### 1. Introduction to Intersymbol Interference (ISI)

**Definition:** Intersymbol Interference (ISI) is a phenomenon in digital communication where the pulse from a previous symbol corrupts the pulse of the current symbol at the sampling instant. This distortion degrades the quality of the received signal and can lead to errors in decoding the transmitted data.

**Cause:** ISI arises due to the **bandwidth limitation** of the communication channel and/or the **non-ideal characteristics** of the transmitting and receiving filters. When these components have a limited bandwidth, they cannot perfectly reproduce the sharp transitions of the digital pulses, leading to "spreading" of the pulses in time.

**Impact:**
*   **Reduced Symbol Separation:** The spread-out pulses overlap with adjacent symbols.
*   **Increased Bit Error Rate (BER):** If the ISI is significant, the receiver may misinterpret the received symbol, leading to bit errors.

**Learning Outcome Coverage:**
*   This section directly addresses the understanding of ISI, a core concept in baseband digital transmission. (CO2, K2)
*   It lays the foundation for analyzing the effects of ISI on the received signal. (CO3, K3)

### 2. Mathematical Model for ISI

To understand and mitigate ISI, we need a mathematical model that describes its occurrence.

#### 2.1 Transmitted Signal

Let the sequence of digital data be represented by a sequence of symbols $\{a_k\}$, where $a_k \in \{+1, -1\}$ for binary signaling (or more generally, a set of possible symbols). Each symbol $a_k$ is transmitted for a duration of $T$ seconds (the symbol period).

The transmitted pulse shape is denoted by $p(t)$. A common representation for the transmitted signal $s(t)$ is the superposition of these pulses, each weighted by its corresponding symbol value:

$$ s(t) = \sum_{k=-\infty}^{\infty} a_k p(t - kT) $$

*   $a_k$: Amplitude of the $k^{th}$ symbol.
*   $T$: Symbol duration (bit period).
*   $p(t)$: Transmitted pulse shape.

**Example:** Consider a simple rectangular pulse shape $p(t) = 1$ for $0 \le t < T$ and $p(t) = 0$ otherwise. For a data sequence $a_0=1, a_1=-1, a_2=1$:
*   Symbol 0: $1 \cdot p(t)$ for $0 \le t < T$.
*   Symbol 1: $-1 \cdot p(t-T)$ for $T \le t < 2T$.
*   Symbol 2: $1 \cdot p(t-2T)$ for $2T \le t < 3T$.

The total transmitted signal would be a series of pulses of amplitude 1 and -1, spaced $T$ apart.

#### 2.2 Channel Response

The communication channel is characterized by its impulse response, $h(t)$. For baseband transmission, this impulse response can include the effects of filtering at the transmitter, the physical channel itself, and filtering at the receiver.

**Key Point:** The impulse response $h(t)$ captures how the channel distorts and delays signals.

#### 2.3 Received Signal Before Noise

The received signal $r_{ideal}(t)$ before adding noise is the convolution of the transmitted signal $s(t)$ with the channel impulse response $h(t)$:

$$ r_{ideal}(t) = s(t) * h(t) = \int_{-\infty}^{\infty} s(\tau) h(t - \tau) d\tau $$

Substituting the expression for $s(t)$:

$$ r_{ideal}(t) = \sum_{k=-\infty}^{\infty} a_k p(t - kT) * h(t) $$

Let $g(t) = p(t) * h(t)$ be the **overall impulse response** of the system (transmitter filter, channel, and receiver filter). Then, the received signal can be expressed as:

$$ r_{ideal}(t) = \sum_{k=-\infty}^{\infty} a_k g(t - kT) $$

**Important Consideration:** The shape of $g(t)$ is crucial in determining the amount of ISI. If $g(t)$ has significant sidelobes that extend beyond the symbol interval $T$, ISI will occur.

#### 2.4 Received Signal at the Sampling Instant

At the receiver, we ideally sample the received signal at the optimal sampling instants, typically $t = nT$ for integer $n$. Let $r(nT)$ be the sampled received signal.

$$ r(nT) = \sum_{k=-\infty}^{\infty} a_k g(nT - kT) $$

Let's analyze the term $g(nT - kT)$. This represents the contribution of the $k^{th}$ symbol to the sample taken at time $nT$.

$$ r(nT) = \sum_{k=-\infty}^{\infty} a_k g((n-k)T) $$

Let $g_m = g(mT)$ be the samples of the overall impulse response at integer multiples of the symbol period $T$. Then, the sampled received signal is:

$$ r(nT) = \sum_{k=-\infty}^{\infty} a_k g_{n-k} $$

This is a discrete convolution of the transmitted symbols $a_k$ and the sampled impulse response $g_m$.

**Breakdown of the sum:**
*   **Desired Term (Zero ISI):** When $n=k$, the term is $a_n g_0$. If $g_0 = 1$, this term is simply $a_n$, which is the ideal received symbol.
*   **Interference Term (ISI):** When $n \ne k$, the terms $a_k g_{n-k}$ represent the interference from other symbols. These are the ISI components.

**Condition for Zero ISI:**
For zero ISI at the sampling instant $nT$, the sum of the contributions from all other symbols must be zero. This means that for $m \ne 0$:

$$ g_m = g(mT) = 0 $$

This condition ensures that only the symbol being sampled ($a_n$) contributes to the sample $r(nT)$.

**Textbook Reference:**
*   **Haykin & Moher (5th Ed.):** Chapter 7 (Digital Modulation Techniques) discusses the impact of channel bandwidth and introduces the concept of ISI. They often use the eye diagram to visualize ISI.
*   **Lathi & Ding (5th Ed.):** Chapter 9 (Digital Transmission Through Band-Limited Channels) provides a detailed mathematical treatment of ISI and its causes. They emphasize the role of the overall system's impulse response.

**Learning Outcome Coverage:**
*   This section formalizes the signal model, which is essential for analysis. (CO3, K3)
*   It introduces the concept of the overall impulse response $g(t)$ and its samples $g_m$. (CO3, K3)

### 3. Modelling the Effect of ISI

#### 3.1 The Eye Diagram

**Definition:** An eye diagram is a graphical representation of the performance of a digital communication system. It is created by overlaying multiple segments of the received signal, each aligned to the symbol clock.

**Construction:**
1.  The received signal is passed through a matched filter and then sampled.
2.  The sampled signal is displayed on an oscilloscope, triggered by the symbol clock.
3.  Multiple segments of the received waveform, each of duration $2T$ or $3T$, are superimposed.

**Interpretation:**
*   **Open Eye:** Indicates good signal quality with little ISI. The horizontal lines are well-separated, and the vertical openings are wide.
*   **Closed Eye:** Indicates significant ISI. The horizontal lines merge, and the vertical openings shrink, making it difficult to distinguish between symbols.

**What the Eye Diagram Shows:**
*   **Timing Jitter:** The width of the openings in the horizontal direction.
*   **ISI:** The thickness of the horizontal lines.
*   **Noise Margin:** The vertical opening of the eye.
*   **Sampling Instant:** The point where the eye is widest vertically is the optimal sampling instant.

**Example:** Imagine a received pulse that is significantly spread out. When multiple such pulses are overlaid, their tails will overlap, "closing" the eye.

**Textbook Reference:**
*   **Haykin & Moher (5th Ed.):** Chapter 7 often includes detailed explanations and illustrations of eye diagrams and their relationship to ISI.
*   **Lathi & Ding (5th Ed.):** Chapter 9 uses eye diagrams extensively to explain the effects of ISI and the criteria for designing pulse shapes.

**Learning Outcome Coverage:**
*   The eye diagram is a visual tool to understand the impact of ISI, directly related to analyzing the received signal. (CO3, K3)

#### 3.2 ISI Criterion: Nyquist Criterion

The Nyquist criterion provides a condition for achieving zero ISI at the sampling instants. It is based on the Fourier transform of the overall system's impulse response, $G(f)$.

**Theorem:** A condition for zero ISI at the sampling instants is that the sampled version of the overall impulse response, $g(t)$, satisfies:

$$ g(nT) = \begin{cases} 1 & n = 0 \\ 0 & n = \text{integer, } n \ne 0 \end{cases} $$

This means that the impulse response $g(t)$ should pass through unity at $t=0$ and zero at all other integer multiples of the symbol period $T$.

**Frequency Domain Interpretation:**
The Nyquist criterion can also be expressed in the frequency domain. The Fourier transform of $g(t)$ is $G(f)$. For zero ISI, the sum of $G(f)$ shifted by multiples of the symbol rate $f_s = 1/T$ should be constant.

$$ \sum_{k=-\infty}^{\infty} G\left(f + kf_s\right) = \text{constant} $$

This condition implies that $G(f)$ should have a specific shape within the band $[-f_s/2, f_s/2]$ such that when it's replicated and summed over all frequency bands, the resulting spectrum is flat.

**Common Pulse Shapes that Satisfy Nyquist Criterion:**

*   **Rectangular Pulse (Raised Cosine):** A rectangular pulse with a specific "roll-off" factor. When passed through a channel with an ideal brick-wall filter of bandwidth $B = \frac{1}{2T}$ (Nyquist bandwidth), it satisfies the criterion.
*   **Raised Cosine Pulse:** A popular choice due to its spectral efficiency and ability to achieve zero ISI. The impulse response is given by:

    $$ g(t) = \frac{\cos(\pi \alpha f_c t)}{\left(1 - (2\alpha f_c t)^2\right)} $$
    where $f_c = \frac{1}{2T}$ is the Nyquist frequency and $\alpha$ is the roll-off factor ($0 \le \alpha \le 1$).

    *   For $\alpha = 0$, it approximates a sinc function, which is ideal but non-causal and infinite in duration.
    *   For $\alpha > 0$, the pulse becomes more concentrated in time and causal (with appropriate delay), but it introduces some ISI in practice if the channel is not perfectly matched.

**Textbook Reference:**
*   **Lathi & Ding (5th Ed.):** Chapter 9 extensively covers the Nyquist criterion and introduces various pulse shaping filters that satisfy it.
*   **Proakis & Salehi (Digital Communications, 6th Ed.):** Chapter 4 discusses the Nyquist criterion and its implications for designing optimal pulse shapes for band-limited channels.

**Important Point to Remember:** The Nyquist criterion provides a *sufficient* condition for zero ISI *at the sampling instants*. It does not guarantee zero ISI at other times.

**Learning Outcome Coverage:**
*   This section delves into the theoretical conditions for achieving zero ISI, which is a key aspect of analyzing baseband transmission. (CO3, K3)
*   It introduces pulse shaping, a technique to mitigate ISI. (CO3, K3, CO4, K3)

### 4. Signal Modelling with Additive White Gaussian Noise (AWGN)

In a real communication system, the received signal is corrupted by noise in addition to ISI. The most common model for this noise is Additive White Gaussian Noise (AWGN).

#### 4.1 AWGN Model

The received signal $y(t)$ at the output of the overall system's impulse response $g(t)$ is modeled as:

$$ y(t) = r_{ideal}(t) + n(t) $$

where:
*   $r_{ideal}(t) = \sum_{k=-\infty}^{\infty} a_k g(t - kT)$ is the noiseless received signal with potential ISI.
*   $n(t)$ is the AWGN process.

**Properties of AWGN:**
*   **Additive:** The noise is added to the signal.
*   **White:** The power spectral density (PSD) of the noise is constant across all frequencies. $S_n(f) = N_0/2$, where $N_0$ is the noise power spectral density.
*   **Gaussian:** The noise amplitude follows a Gaussian (normal) probability distribution.

#### 4.2 Sampled Received Signal with Noise

When we sample the received signal $y(t)$ at the optimal sampling instants $t=nT$, we get:

$$ y(nT) = r_{ideal}(nT) + n(nT) $$

$$ y(nT) = \sum_{k=-\infty}^{\infty} a_k g_{n-k} + w_n $$

where:
*   $w_n = n(nT)$ is a sequence of random variables representing the sampled noise. For AWGN, these $w_n$ are independent and identically distributed (i.i.d.) Gaussian random variables with zero mean and variance $\sigma^2 = N_0/2B_{eff}$, where $B_{eff}$ is the effective noise bandwidth of the receiver.

#### 4.3 Probability of Error in the Presence of ISI and Noise

The presence of ISI makes it difficult to determine the transmitted symbol $a_n$ from the sampled value $y(nT)$. The sampled value is:

$$ y(nT) = a_n g_0 + \sum_{k \ne n} a_k g_{n-k} + w_n $$

$$ y(nT) = a_n + \text{ISI} + w_n $$

The ISI term $\sum_{k \ne n} a_k g_{n-k}$ is a random variable whose value depends on the transmitted symbols $a_k$ for $k \ne n$. This makes the analysis of the probability of error more complex than in the absence of ISI.

**Simplified Analysis (for small ISI):**
For binary antipodal signaling ($a_k \in \{+1, -1\}$) and assuming $g_0 = 1$ and $w_n \sim N(0, \sigma^2)$:

The decision variable for the $n^{th}$ symbol is $y(nT)$. We decide $a_n=+1$ if $y(nT) > 0$ and $a_n=-1$ if $y(nT) < 0$.

The probability of error $P_e$ can be approximated by considering the Gaussian tail probability. However, the variance of the decision variable is affected by the ISI.

**Textbook Reference:**
*   **Haykin & Moher (5th Ed.):** Chapter 7 discusses the impact of AWGN on digital signals and how ISI exacerbates the problem.
*   **Lathi & Ding (5th Ed.):** Chapter 9 provides detailed derivations of the probability of error in the presence of ISI and AWGN, often using the concept of the "eye opening."

**Learning Outcome Coverage:**
*   This section directly addresses analyzing the baseband transmission of digital data through an AWGN channel. (CO3, K3)
*   It combines the signal model with the noise model to understand the practical challenges. (CO3, K3)

### 5. Mitigation of ISI

Since ISI is detrimental, techniques are employed to minimize its impact.

#### 5.1 Pulse Shaping

As discussed with the Nyquist criterion, choosing appropriate pulse shapes at the transmitter is crucial.

*   **Raised Cosine Pulse:** Allows for controlled trade-off between bandwidth efficiency and ISI.
*   **Gaussian Pulse:** Provides a smooth pulse shape, but is not strictly Nyquist.

#### 5.2 Equalization

Equalization is a technique used at the receiver to counteract the distortion introduced by the channel, including ISI. The equalizer aims to shape the overall system response (channel + equalizer) to approximate the zero-ISI condition.

**Types of Equalizers:**
*   **Linear Equalizers:**
    *   **Transversal Equalizer (or Tap Delay Line Equalizer):** Uses a tapped delay line with adjustable weights to shape the received signal.
    *   **Zero-Forcing (ZF) Equalizer:** Aims to completely eliminate ISI at the sampling instants. The equalizer's impulse response is designed to cancel out the channel's distortion.
    *   **Minimum Mean Square Error (MMSE) Equalizer:** Minimizes the mean square error between the desired output and the actual output, taking into account both ISI and noise. It provides a compromise between ISI cancellation and noise enhancement.

*   **Non-linear Equalizers:** (e.g., Maximum Likelihood Sequence Estimation - MLSE) are more complex but can achieve better performance in the presence of severe ISI.

**Learning Outcome Coverage:**
*   Pulse shaping and equalization are direct applications of understanding ISI and are crucial for designing robust digital communication systems. (CO3, K3, CO4, K3)

### 6. Key Concepts and Definitions Summary

*   **Intersymbol Interference (ISI):** Overlapping of pulse tails from adjacent symbols.
*   **Symbol Period (T):** Duration of each transmitted symbol.
*   **Overall Impulse Response (g(t)):** Convolution of transmitter pulse, channel, and receiver filter responses.
*   **Sampled Impulse Response (g_m = g(mT)):** Samples of $g(t)$ at integer multiples of $T$.
*   **Zero ISI Condition:** $g_m = 0$ for $m \ne 0$.
*   **Nyquist Criterion:** A condition on the frequency response $G(f)$ for zero ISI.
*   **Eye Diagram:** A graphical tool to visualize ISI and assess signal quality.
*   **Additive White Gaussian Noise (AWGN):** A standard model for channel noise.
*   **Pulse Shaping:** Designing transmitter pulse shapes to meet ISI criteria.
*   **Equalization:** Receiver-side techniques to mitigate ISI.

### 7. Practice Questions and Exercises

**Question 1:**
Describe the phenomenon of Intersymbol Interference (ISI) and explain its primary causes in digital communication systems. (CO2, K2)

**Answer:**
ISI is the distortion of a digital signal where the pulse from one symbol interval encroaches upon adjacent symbol intervals, causing interference. It is primarily caused by the limited bandwidth of the communication channel and the non-ideal filtering characteristics of the transmitter and receiver. When filters have a bandwidth narrower than ideal, they spread the signal pulses in time, leading to overlap.

**Question 2:**
Consider a binary communication system with a transmitted pulse shape $p(t)$ and a symbol duration $T$. The overall system impulse response (including channel and receiver filtering) is $g(t)$. If the transmitted data sequence is $\{a_k\}$, where $a_k \in \{+1, -1\}$, write the expression for the received signal $r_{ideal}(t)$ before noise. Also, write the expression for the sampled received signal $y(nT)$ at the sampling instants, including AWGN $w_n$. (CO3, K3)

**Answer:**
The noiseless received signal is:
$r_{ideal}(t) = \sum_{k=-\infty}^{\infty} a_k g(t - kT)$

The sampled received signal at sampling instants $t=nT$ with AWGN is:
$y(nT) = \sum_{k=-\infty}^{\infty} a_k g_{n-k} + w_n$
where $g_m = g(mT)$ and $w_n$ is the sampled AWGN.

**Question 3:**
Explain what the Nyquist criterion for zero ISI states, both in the time domain and the frequency domain. (CO3, K3)

**Answer:**
*   **Time Domain:** The Nyquist criterion in the time domain states that for zero ISI at the sampling instants $t=nT$, the overall system impulse response $g(t)$ must satisfy $g(nT) = 0$ for all non-zero integer multiples of the symbol period $T$ ($n \ne 0$), and $g(0) = 1$ (assuming unity gain for the desired symbol).
*   **Frequency Domain:** In the frequency domain, the Nyquist criterion requires that the sum of the frequency response $G(f)$ shifted by integer multiples of the symbol rate $f_s = 1/T$ be constant over the frequency band. That is, $\sum_{k=-\infty}^{\infty} G\left(f + kf_s\right) = \text{constant}$.

**Question 4:**
What information can be extracted from an eye diagram? How does a "closed eye" typically indicate the presence of ISI? (CO3, K3)

**Answer:**
An eye diagram provides information about:
*   **Timing Jitter:** The width of the horizontal opening.
*   **ISI:** The thickness of the horizontal lines.
*   **Noise Margin:** The vertical opening of the eye.
*   **Optimal Sampling Instant:** The point of maximum vertical opening.

A "closed eye" indicates significant ISI because the pulse tails from adjacent symbols overlap substantially, causing the transitions between symbols to blur and merge. This reduces the clarity of the "eye" opening, making it difficult for the receiver to reliably distinguish between different symbols.

**Question 5 (Conceptual):**
If a channel has a very narrow bandwidth, would you expect more or less ISI? Explain why. (CO3, K3)

**Answer:**
If a channel has a very narrow bandwidth, you would expect **more** ISI. A narrow bandwidth implies that the channel cannot faithfully reproduce the sharp transitions of digital pulses. This limitation causes the pulses to spread out significantly in time, increasing the overlap between adjacent symbols and thus leading to greater ISI.

---

### 8. Important Points to Remember

*   **ISI is caused by bandwidth limitation and non-ideal filtering.**
*   **The overall system impulse response $g(t)$ dictates the amount of ISI.**
*   **Zero ISI is achieved when $g(nT) = 0$ for $n \ne 0$.**
*   **The Nyquist criterion provides conditions for zero ISI.**
*   **Raised cosine pulses are commonly used for pulse shaping to manage ISI.**
*   **Eye diagrams are crucial for visualizing and assessing ISI.**
*   **AWGN adds random errors, and ISI exacerbates these errors.**
*   **Equalization is a receiver technique to combat ISI.**

---

### 9. Alignment with Course Outcomes

*   **CO1: Illustrate the principles of analog communication systems (Knowledge Level: K2)**
    *   While this module focuses on digital transmission, understanding the signal propagation through a channel (even if described by an impulse response) draws parallels with analog signal behavior. The concepts of bandwidth limitation and filtering are fundamental to both.
*   **CO2: Explain the basic concepts of digital communication (Knowledge Level: K2)**
    *   This module directly explains the concept of ISI, a fundamental challenge in baseband digital data transmission. The signal modeling using pulse sequences and symbol durations fits within this outcome.
*   **CO3: Analyse the baseband transmission of digital data through AWGN channel (Knowledge Level: K3)**
    *   This is the primary focus of this topic. The mathematical modeling of the signal, the derivation of the received signal with ISI, the inclusion of AWGN, and the understanding of how these factors affect signal quality are all core to analyzing this scenario. The discussion of the Nyquist criterion and eye diagrams are analytical tools.
*   **CO4: Apply various digital modulation techniques in the design of digital communication systems (Knowledge Level: K3)**
    *   Understanding ISI and its mitigation techniques (pulse shaping, equalization) is crucial for designing efficient and reliable digital communication systems that employ various modulation techniques. While specific modulation schemes aren't detailed here, the foundation for them is laid.

---

This comprehensive study note covers the signal modeling for ISI in baseband digital data transmission through an AWGN channel, aligning with the learning outcomes and course objectives by providing theoretical explanations, mathematical models, practical implications, and mitigation strategies.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
