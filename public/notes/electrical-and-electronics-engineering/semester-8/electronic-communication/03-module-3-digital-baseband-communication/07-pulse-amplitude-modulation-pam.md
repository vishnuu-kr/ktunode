---
title: "Pulse Amplitude Modulation (PAM)"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 3: Digital baseband communication:"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36bfe"
status: "completed"
scrapedAt: "2026-05-23T16:40:28.028Z"
---
## Electronic Communication: Module 3: Digital Baseband Communication

### Topic: Pulse Amplitude Modulation (PAM)

---

### 1. Introduction to Digital Baseband Communication and PAM

Digital baseband communication involves transmitting digital information directly over a communication channel without any carrier wave modulation in the frequency domain. The information is encoded into a sequence of pulses. Pulse Amplitude Modulation (PAM) is a fundamental technique in this domain where the amplitude of a train of carrier pulses is varied in accordance with the instantaneous amplitude of the modulating signal.

**Key Concepts:**

*   **Baseband Signal:** The original information signal, typically a digital message (a sequence of bits).
*   **Carrier Pulse Train:** A series of regularly spaced pulses of constant amplitude and duration.
*   **Modulating Signal:** In the context of PAM, the modulating signal is the digital message itself, represented as a sequence of voltage levels corresponding to the bits (e.g., +A for '1', -A for '0' or 0V for '0').

**Relevance to Course Outcomes:**

*   **CO3 (Understand the various processing blocks of a digital communication system):** PAM is a crucial step in many digital communication systems, acting as the initial method of converting a digital message into a physical signal for transmission over a baseband channel.
*   **CO4 (Apply the knowledge of digital modulation in digital transmission):** Understanding PAM is essential for applying digital modulation techniques for efficient and reliable digital data transmission.

**Textbook References:**

*   **Kennedy's Electronic Communication Systems:** Likely discusses baseband signaling and pulse modulation techniques as foundational elements.
*   **Wayne Tomasi's Electronic Communication Systems:** Will provide a comprehensive overview of digital communication principles, including various pulse modulation schemes.
*   **Simon Haykin and Michael Mohre's Communication Systems:** Expected to delve into the mathematical formulations and practical aspects of digital modulation.
*   **Taub & Schilling's Principles of Communication Systems:** A classic text that would cover the fundamentals of pulse modulation and their applications.

---

### 2. Principles of Pulse Amplitude Modulation (PAM)

PAM is a form of **pulse modulation** where the amplitude of a carrier pulse is varied in proportion to the instantaneous value of the message signal. In digital PAM, the message signal is a digital sequence.

**Types of PAM:**

1.  **M-ary PAM (Digital PAM):** This is the primary focus for digital baseband communication. In M-ary PAM, the amplitude of the pulse can take one of M possible discrete values. For binary PAM (2-ary PAM), there are two distinct amplitude levels, typically corresponding to the '0' and '1' states of a binary message.

    *   **Binary PAM:** The pulse amplitude is either $A_1$ (for '1') or $A_2$ (for '0').
    *   **M-ary PAM:** The pulse amplitude can be one of $M$ levels: $A_1, A_2, ..., A_M$. The number of bits represented by each pulse is $\log_2(M)$.

2.  **Analog PAM (less relevant for digital baseband):** The amplitude of the carrier pulse varies continuously according to the analog message signal.

**Mathematical Representation of Binary PAM:**

Let the binary message sequence be $d(t) = \sum_{n=-\infty}^{\infty} b_n \delta(t - nT_b)$, where $b_n$ is the amplitude of the $n$-th bit (+A for '1', -A or 0 for '0') and $T_b$ is the bit duration.

A train of rectangular pulses of amplitude $A_c$, width $\tau$, and period $T_b$ can be represented as:
$p(t) = \sum_{n=-\infty}^{\infty} \text{rect}\left(\frac{t - nT_b}{\tau}\right)$, where $\text{rect}(x) = 1$ if $|x| \leq 1/2$ and $0$ otherwise.

The transmitted PAM signal $s(t)$ is then the convolution of the message pulse train and the carrier pulse shape, or more simply, the message amplitude directly modulating the carrier pulse amplitude.

For binary PAM, if we use a NRZ (Non-Return-to-Zero) format for the message bits:
$s(t) = \sum_{n=-\infty}^{\infty} a_n p(t - nT_b)$, where $a_n$ is the amplitude representing the $n$-th bit.

A common implementation involves shaping the digital pulse sequence. The transmitted signal can be represented as:

$s(t) = \sum_{n=-\infty}^{\infty} d_n g(t - nT_b)$

where:
*   $d_n$ is the amplitude of the $n$-th pulse, corresponding to the digital data bit (e.g., +A or -A for binary).
*   $g(t)$ is the pulse shape (e.g., a rectangular pulse, a raised-cosine pulse).
*   $T_b$ is the bit duration (or symbol duration for M-ary PAM).

**Example:**

Consider a binary message sequence: 1, 0, 1, 1, 0.
Let's assume '1' is represented by amplitude +5V and '0' by -5V, with a bit duration $T_b$.
The PAM signal would be a sequence of pulses with amplitudes +5V, -5V, +5V, +5V, -5V, each lasting for $T_b$.

**Important Points to Remember:**

*   PAM is a digital modulation technique that varies the **amplitude** of pulses.
*   In **binary PAM**, there are two amplitude levels.
*   In **M-ary PAM**, there are $M$ amplitude levels, representing $\log_2(M)$ bits per symbol.
*   The pulse shape $g(t)$ significantly impacts the bandwidth and performance of the PAM system.

**Textbook References:**

*   **Wayne Tomasi's Electronic Communication Systems:** Section on Pulse Modulation, specifically PAM.
*   **Simon Haykin and Michael Mohre's Communication Systems:** Detailed explanation of PAM, including spectral characteristics and error probability.
*   **Taub & Schilling's Principles of Communication Systems:** Covers the basics of pulse modulation and sampling.

---

### 3. Pulse Amplitude Modulation (PAM) Generation

Generating a PAM signal involves converting the digital data into a sequence of pulses with appropriate amplitudes.

**Basic Block Diagram:**

```
Digital Data -> Pulse Amplitude Generator -> Pulse Shaping Filter -> PAM Signal
```

1.  **Digital Data:** The input is a stream of binary bits (0s and 1s).
2.  **Pulse Amplitude Generator:** This block maps the digital bits to corresponding pulse amplitudes. For binary PAM, a '1' might map to a positive voltage (e.g., +A) and a '0' to a negative voltage (e.g., -A) or zero voltage. For M-ary PAM, a group of $\log_2(M)$ bits is mapped to one of the $M$ possible amplitudes.
3.  **Pulse Shaping Filter:** This is a crucial component that shapes the pulses to improve spectral efficiency and reduce intersymbol interference (ISI). Common pulse shapes include:
    *   **Rectangular Pulses (NRZ):** Simple to generate but have poor spectral characteristics and are prone to ISI.
    *   **Raised Cosine Pulses:** Offer a trade-off between bandwidth and ISI. They are spectrally more efficient than rectangular pulses and provide zero ISI at the sampling instants.
    *   **Gaussian Pulses:** Offer good spectral confinement but have longer tails, which can lead to ISI.

**Example of Binary PAM Generation (NRZ):**

*   **Input:** 1 0 1 1 0
*   **Mapping:** 1 -> +A, 0 -> -A
*   **Pulse Amplitude Sequence:** +A, -A, +A, +A, -A
*   **Output (NRZ PAM):** A sequence of rectangular pulses with these amplitudes, each lasting for $T_b$.

**Important Points to Remember:**

*   The pulse amplitude generator translates digital logic levels into physical pulse amplitudes.
*   Pulse shaping is essential for efficient spectrum utilization and minimizing ISI.
*   NRZ is simple but less efficient; more sophisticated pulse shapes are preferred in practice.

**Textbook References:**

*   **Wayne Tomasi's Electronic Communication Systems:** Discusses digital signal generation and pulse shaping.
*   **Modern Digital and Analog Communication Systems by B. P. Lathi, Zhi Ding:** Excellent coverage of pulse shaping techniques and their impact on communication system performance.

---

### 4. Pulse Amplitude Modulation (PAM) Demodulation

Demodulation aims to recover the original digital data from the received PAM signal. This typically involves sampling the received signal at specific instants and comparing the sampled amplitude to predefined thresholds.

**Basic Block Diagram:**

```
Received PAM Signal -> Matched Filter / Low-pass Filter -> Sampler -> Decision Device -> Recovered Digital Data
```

1.  **Received PAM Signal:** The signal transmitted over the channel, which may have been affected by noise and distortion.
2.  **Matched Filter / Low-pass Filter:**
    *   **Matched Filter:** Designed to maximize the signal-to-noise ratio (SNR) at the sampling instant. For rectangular pulses, a simple integrator acts as a matched filter.
    *   **Low-pass Filter:** Used to remove any out-of-band noise and residual intersymbol interference. A filter with a spectrum similar to the desired pulse shape is often used.
3.  **Sampler:** The filtered signal is sampled at the optimal sampling instants, usually at the peak of each pulse ($t = nT_b$).
4.  **Decision Device:** The sampled amplitude is compared to a set of thresholds to decide which digital symbol was transmitted.
    *   **For Binary PAM:** If the sampled amplitude is above a threshold $V_{th}$, it's decided as '1'; otherwise, it's decided as '0'.
    *   **For M-ary PAM:** There will be $M-1$ thresholds to distinguish between the $M$ possible amplitude levels.

**Decision Thresholds for Binary PAM:**

*   If sampled amplitude $v_s > V_{th}$, decide '1'.
*   If sampled amplitude $v_s < V_{th}$, decide '0'.

For optimal performance in the presence of additive white Gaussian noise (AWGN), the threshold is typically set at zero if the two amplitude levels are symmetric around zero (e.g., +A and -A). If one level is zero (e.g., +A and 0), the threshold would be A/2.

**Example of Binary PAM Demodulation (NRZ):**

*   **Received PAM Signal:** A sequence of pulses with amplitudes +A, -A, +A, +A, -A.
*   **Sampling:** At the center of each pulse, the amplitudes are measured.
*   **Decision (assuming $V_{th} = 0$ and +A > 0):**
    *   Sampled amplitude > 0 -> '1'
    *   Sampled amplitude < 0 -> '0'
*   **Recovered Data:** 1 0 1 1 0

**Important Points to Remember:**

*   Demodulation involves sampling the received signal at the correct time instants.
*   A decision device compares sampled amplitudes to thresholds to recover the digital data.
*   Matched filtering or appropriate low-pass filtering is crucial for maximizing SNR and minimizing errors.

**Textbook References:**

*   **Kennedy's Electronic Communication Systems:** Chapters on digital communication receivers.
*   **Simon Haykin and Michael Mohre's Communication Systems:** Detailed analysis of PAM demodulators, including matched filters and error probability.
*   **Leon W. Couch's Digital and Analog Communication Systems:** Explains the process of sampling and decision-making in digital receivers.

---

### 5. Performance of PAM Systems

The performance of a PAM system is primarily evaluated in terms of its **error rate**, specifically the **Bit Error Rate (BER)** for binary PAM. Key factors influencing performance include:

*   **Noise:** Additive White Gaussian Noise (AWGN) is a common model for channel noise.
*   **Intersymbol Interference (ISI):** When pulse shapes are not perfectly orthogonal or due to channel distortion, the tail of one pulse can interfere with the next, leading to errors.
*   **Bandwidth:** The bandwidth occupied by the PAM signal affects the data rate and susceptibility to noise.
*   **Amplitude Levels (M in M-ary PAM):** Increasing the number of amplitude levels ($M$) allows for higher data rates but requires more power and makes the system more susceptible to noise.

**Bit Error Rate (BER) for Binary PAM in AWGN:**

The probability of error for binary PAM with equally likely symbols (+A and -A) corrupted by AWGN is given by:

$P_e = Q\left(\frac{A}{\sigma}\right)$

where:
*   $Q(x) = \frac{1}{\sqrt{2\pi}} \int_x^{\infty} e^{-t^2/2} dt$ is the Q-function.
*   $A$ is half the distance between the amplitude levels (e.g., if levels are +A and -A, the distance is 2A, so A in the formula is the amplitude level). For levels +A and -A, the distance to the threshold (0) is A.
*   $\sigma$ is the standard deviation of the noise at the sampling instant. $\sigma^2$ is the noise power spectral density ($N_0/2$) multiplied by the effective noise bandwidth.

Alternatively, in terms of energy per bit ($E_b$):

$P_e = Q\left(\sqrt{\frac{E_b}{N_0}}\right)$

where $E_b$ is the average energy per bit and $N_0$ is the one-sided power spectral density of the AWGN.

**Trade-offs in M-ary PAM:**

*   **Higher Data Rate:** $M$-ary PAM can transmit $\log_2(M)$ bits per symbol, increasing the data rate for a given symbol rate compared to binary PAM.
*   **Increased Power Requirement:** To maintain the same BER, the power required increases significantly with $M$. The distance between adjacent amplitude levels must be maintained.
*   **Increased Complexity:** Demodulation becomes more complex with more amplitude levels, requiring more thresholds and potentially leading to higher error rates if not managed properly.

**Relationship to Course Outcomes:**

*   **CO2 (Explain the characteristics of various analog modulation schemes in terms of spectra, power and efficiency):** While PAM is a digital modulation, its performance metrics (BER, power, bandwidth utilization) are analogous to those discussed for analog schemes and are crucial for understanding digital transmission efficiency.
*   **CO4 (Apply the knowledge of digital modulation in digital transmission):** Understanding BER is fundamental to applying PAM and other digital modulation techniques for reliable data transmission.

**Textbook References:**

*   **Simon Haykin and Michael Mohre's Communication Systems:** Detailed derivation of BER for PAM and discussion of ISI.
*   **Taub & Schilling's Principles of Communication Systems:** Analysis of noise and error probability in digital communication.
*   **Modern Digital and Analog Communication Systems by B. P. Lathi, Zhi Ding:** Comprehensive coverage of digital modulation performance metrics.

---

### 6. Practice Questions and Answers

**Question 1:** What is the primary characteristic of Pulse Amplitude Modulation (PAM) that distinguishes it from Pulse Width Modulation (PWM) and Pulse Position Modulation (PPM)?

**Answer:** The primary characteristic is that PAM varies the **amplitude** of the carrier pulse in accordance with the modulating signal, whereas PWM varies the pulse width and PPM varies the pulse position.

**Question 2:** If a binary message sequence consists of 1000 bits and uses binary PAM with amplitude levels +4V for '1' and -4V for '0', what is the maximum possible amplitude of the transmitted PAM signal?

**Answer:** The maximum possible amplitude is **+4V**.

**Question 3:** Explain the role of the sampler in a PAM demodulator.

**Answer:** The sampler extracts the amplitude of the received PAM signal at specific, predetermined time instants (typically the center of each pulse). This sampled value is then used by the decision device to determine the transmitted digital symbol.

**Question 4:** For binary PAM with amplitude levels +A and -A, what is the optimal decision threshold in the presence of AWGN?

**Answer:** The optimal decision threshold is **0V**.

**Question 5:** If you are transmitting data using 4-ary PAM (meaning 4 amplitude levels), how many bits can be transmitted per symbol?

**Answer:** Using the formula $\log_2(M)$, where $M=4$, you can transmit $\log_2(4) = 2$ bits per symbol.

---

### 7. Key Points to Remember

*   **PAM** is a digital baseband modulation technique that modifies the **amplitude** of a carrier pulse train based on the digital message.
*   **Binary PAM** uses two amplitude levels, typically corresponding to '0' and '1'.
*   **M-ary PAM** uses $M$ amplitude levels, allowing the transmission of $\log_2(M)$ bits per symbol.
*   **PAM generation** involves mapping digital data to pulse amplitudes and shaping the pulses (e.g., using filters) to minimize ISI and optimize spectrum usage.
*   **PAM demodulation** involves filtering, sampling the signal at the correct instants, and using a decision device to compare sampled amplitudes against thresholds to recover the original digital data.
*   The **performance** of PAM is significantly affected by noise (especially AWGN) and intersymbol interference (ISI).
*   The **Bit Error Rate (BER)** is a key performance metric for PAM systems, quantifiable using the Q-function and relating to the signal-to-noise ratio ($E_b/N_0$).
*   Increasing the number of levels ($M$) in M-ary PAM increases data rate but also requires more power and increases complexity.

---

### 8. Alignment with Course Outcomes

*   **CO1: Explain the working of Amplitude modulator and demodulator circuits using mathematical relations.** (Covered in Sections 2, 3, and 4, with mathematical representations of PAM signals and demodulation principles.)
*   **CO2: Explain the characteristics of various analog modulation schemes in terms of spectra, power and efficiency.** (While PAM is digital, the concepts of bandwidth utilization, power requirements, and error rates discussed in Section 5 are directly comparable to the characteristics of analog modulation schemes, providing a foundational understanding of efficiency and trade-offs.)
*   **CO3: Understand the various processing blocks of a digital communication system.** (Sections 3 and 4 detail the essential blocks for PAM generation (generator, shaper) and demodulation (filter, sampler, decision device), which are fundamental to understanding the overall digital communication system architecture.)
*   **CO4: Apply the knowledge of digital modulation in digital transmission.** (The entire topic of PAM serves as an application of digital modulation, demonstrating how digital data is converted into a transmittable signal and recovered, forming the basis for more complex digital transmission schemes.)

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
