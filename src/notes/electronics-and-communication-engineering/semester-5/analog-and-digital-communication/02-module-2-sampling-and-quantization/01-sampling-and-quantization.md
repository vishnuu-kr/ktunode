---
title: "Sampling and Quantization"
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 2: Sampling and Quantization"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe900"
status: "completed"
scrapedAt: "2026-05-23T17:52:48.355Z"
---
# ANALOG AND DIGITAL COMMUNICATION - Module 2: Sampling and Quantization

This module delves into the fundamental processes of converting analog signals into a digital format, a crucial step in modern communication systems. We will explore the principles of sampling and quantization, understanding how they enable the transmission of information digitally.

---

## 1. Introduction to Signal Conversion

In many real-world scenarios, information is initially available in analog form (e.g., voice, temperature). For digital communication systems, this analog information must be converted into a digital representation. This process involves two primary stages: **sampling** and **quantization**.

**Key Concept:** Digitalization of analog signals.

---

## 2. Sampling

### 2.1. Definition and Purpose

**Sampling** is the process of converting a continuous-time analog signal into a discrete-time signal by taking measurements (samples) of the signal at regular intervals. The goal is to represent the analog signal accurately using a sequence of discrete values.

**Key Concept:** Time-domain discretization.

### 2.2. Sampling Theorem (Nyquist-Shannon Sampling Theorem)

The **Nyquist-Shannon Sampling Theorem** is the cornerstone of sampling theory. It states that:

**"A band-limited signal $x(t)$ with maximum frequency $f_{max}$ (or bandwidth $B = f_{max}$) can be perfectly reconstructed from its samples if the sampling frequency $f_s$ is greater than twice the maximum frequency, i.e., $f_s > 2f_{max}$. This minimum sampling rate is called the Nyquist rate, $f_s = 2f_{max}$."**

*   **Band-limited signal:** A signal whose frequency content is zero above a certain frequency ($f_{max}$).
*   **Nyquist rate:** The minimum sampling frequency required to avoid aliasing.
*   **Aliasing:** If the sampling frequency is less than the Nyquist rate ($f_s < 2f_{max}$), higher frequency components in the original signal can masquerade as lower frequencies in the sampled signal, leading to distortion during reconstruction.

**Haykin & Moher (5th Ed., 2020):** Emphasizes the fundamental role of the sampling theorem in bridging the gap between analog and digital domains. They discuss the mathematical derivation and practical implications of aliasing.

**Lathi & Ding (5th Ed., 2018):** Provides detailed explanations of the sampling process, including impulse sampling and natural sampling, and their spectral effects.

**CO1: Illustrate the principles of analog communication systems (Knowledge Level: K2)**
Understanding the sampling theorem is essential for illustrating how analog signals are processed for digital transmission.

**CO2: Explain the basic concepts of digital communication (Knowledge Level: K2)**
Sampling is a foundational concept in digital communication, forming the basis for digitizing analog sources.

### 2.3. Types of Sampling

*   **Impulse Sampling:** Idealized sampling where the analog signal is multiplied by a train of Dirac delta functions.
    *   $x_s(t) = x(t) \sum_{n=-\infty}^{\infty} \delta(t - nT_s)$
    *   Where $T_s$ is the sampling period ($T_s = 1/f_s$).
    *   The spectrum of the impulse-sampled signal is a periodic repetition of the original signal's spectrum, scaled by $T_s$.

*   **Natural Sampling (or Amplitude Sampling):** The analog signal is multiplied by a periodic train of rectangular pulses.
    *   The samples are “wider” than impulses, and their tops follow the shape of the original analog signal.
    *   This method is more practical but requires a more complex reconstruction filter.

*   **Flattop Sampling:** The samples are held at a constant value for the duration of the sampling interval ($T_s$). This is common in practical systems.
    *   This type of sampling introduces a sinc-like distortion (frequency domain) which needs to be compensated for during reconstruction.

### 2.4. Effects of Sampling on the Spectrum

*   When a signal $x(t)$ with spectrum $X(f)$ is sampled at a rate $f_s$, its sampled version $x_s(t)$ has a spectrum $X_s(f)$ that is a periodic repetition of $X(f)$ scaled by $T_s$, centered at multiples of $f_s$.
*   $X_s(f) = f_s \sum_{k=-\infty}^{\infty} X(f - k f_s)$
*   If $f_s > 2f_{max}$ (Nyquist rate), the replicas of $X(f)$ in the spectrum $X_s(f)$ do not overlap, and the original signal can be perfectly recovered.
*   If $f_s < 2f_{max}$ (undersampling), the replicas overlap, causing aliasing.

**Example:** Consider a signal $x(t) = \cos(2\pi f_0 t)$ with $f_0 = 1$ kHz.
*   If sampled at $f_s = 3$ kHz (which is $> 2f_0$), the reconstructed signal is perfect.
*   If sampled at $f_s = 1.5$ kHz (which is $< 2f_0$), aliasing occurs. The sampled signal will appear to be a cosine wave with a frequency lower than 1 kHz, leading to distortion.

### 2.5. Practical Considerations

*   **Anti-aliasing Filter:** Before sampling, an analog low-pass filter (anti-aliasing filter) is used to remove or attenuate frequency components above $f_s/2$. This ensures that the signal is effectively band-limited to below half the sampling frequency, preventing aliasing.
*   **Reconstruction Filter:** After quantization and decoding, a low-pass filter is used to remove the high-frequency components introduced by the sampling process and to reconstruct the original analog signal.

---

## 3. Quantization

### 3.1. Definition and Purpose

**Quantization** is the process of mapping a continuous range of input values to a finite set of discrete output values. This is necessary because digital systems can only represent discrete amplitude levels.

**Key Concept:** Amplitude-domain discretization.

**Haykin & Moher (5th Ed., 2020):** Discusses quantization as a lossy process and its impact on signal fidelity. They introduce concepts like quantization error and signal-to-quantization noise ratio.

**Lathi & Ding (5th Ed., 2018):** Explains different quantization schemes, including uniform and non-uniform quantization, and their characteristics.

**CO1: Illustrate the principles of analog communication systems (Knowledge Level: K2)**
Quantization is a key step in converting analog signals for digital processing and understanding its principles is crucial.

**CO2: Explain the basic concepts of digital communication (Knowledge Level: K2)**
Quantization is a fundamental operation in digital signal processing and a core concept in digital communication.

### 3.2. Types of Quantization

*   **Uniform Quantization:** The range of input values is divided into intervals of equal width.
    *   **Step Size ($\Delta$):** The width of each quantization interval.
    *   The number of quantization levels ($L$) is determined by the range of the signal and the step size. $L = \frac{V_{max} - V_{min}}{\Delta}$
    *   **Quantization Error:** The difference between the original sample value and its quantized value. The maximum error is $\pm \Delta/2$.

*   **Non-uniform Quantization:** The interval widths are not equal. Smaller intervals are used for the more frequent or important signal amplitude ranges, while larger intervals are used for less frequent ranges.
    *   This is employed to improve the Signal-to-Quantization Noise Ratio (SQNR) for signals with non-uniform amplitude distributions (e.g., speech signals).
    *   **Companding:** A technique used with non-uniform quantization. It involves compressing the dynamic range of the signal before quantization and expanding it after reconstruction.
        *   **μ-law (mu-law) companding:** Commonly used in North American and Japanese telephone systems.
        *   **A-law companding:** Used in European and international telephone systems.

**Example:** Consider a signal ranging from 0 to 10V.
*   **Uniform Quantization (L=4 levels):**
    *   Intervals: [0, 2.5), [2.5, 5), [5, 7.5), [7.5, 10]
    *   Quantization levels (midpoints): 1.25V, 3.75V, 6.25V, 8.75V
    *   If an input sample is 4V, it's quantized to 3.75V. The quantization error is $4 - 3.75 = 0.25$V.
*   **Non-uniform Quantization:** If speech signals are typically concentrated between 0-2V, smaller step sizes would be used in this range, and larger step sizes for 8-10V, leading to better fidelity for the most common signal amplitudes.

### 3.3. Quantization Error

*   **Definition:** $e_q(n) = x_q(n) - x(nT_s)$, where $x_q(n)$ is the quantized value of the sampled signal $x(nT_s)$.
*   **Assumption:** For uniform quantization and a sufficiently large number of levels ($L$), the quantization error can be modeled as a random variable uniformly distributed between $-\Delta/2$ and $+\Delta/2$.
*   **Variance of Quantization Error:** $\sigma_e^2 = \frac{\Delta^2}{12}$

### 3.4. Signal-to-Quantization Noise Ratio (SQNR)

*   **Definition:** A measure of the quality of the quantized signal, defined as the ratio of the signal power to the quantization noise power.
*   **For uniformly quantized signals:** $SQNR = \frac{\text{Signal Power}}{\text{Quantization Noise Power}} = \frac{\sigma_x^2}{\sigma_e^2}$
*   **Relationship with number of bits (n):** For $L$ quantization levels, $L = 2^n$, where $n$ is the number of bits per sample.
    *   $\Delta = \frac{V_{max} - V_{min}}{L} = \frac{V_{range}}{2^n}$
    *   Assuming the signal is uniformly distributed over the range $[-V_{range}/2, V_{range}/2]$, the signal power $\sigma_x^2 \approx \frac{V_{range}^2}{12}$.
    *   $SQNR = \frac{V_{range}^2/12}{\Delta^2/12} = \frac{V_{range}^2}{\Delta^2} = \frac{V_{range}^2}{(V_{range}/2^n)^2} = (2^n)^2 = 2^{2n}$
    *   In dB: $SQNR_{dB} = 10 \log_{10}(2^{2n}) = 20n \log_{10}(2) \approx 6.02n$ dB.

**Important Point:** For every additional bit used in quantization, the SQNR improves by approximately 6 dB.

**Reference:** Proakis & Salehi (6th Ed., 2020) and Stark (1st Ed., 2023) provide detailed mathematical treatments of SQNR for various quantization schemes.

**CO3: Analyse the baseband transmission of digital data through AWGN channel (Knowledge Level: K3)**
Understanding quantization error is crucial for analyzing the performance of digital communication systems, especially in the presence of noise. The SQNR directly impacts the signal quality after transmission.

---

## 4. Pulse Code Modulation (PCM)

**Pulse Code Modulation (PCM)** is a digital representation of an analog signal that is often used in digital telecommunication systems. It involves three main steps:

1.  **Sampling:** Converting the analog signal into discrete-time samples.
2.  **Quantization:** Assigning a discrete amplitude level to each sample.
3.  **Encoding:** Converting the quantized levels into a binary code (a sequence of bits).

**Key Concept:** The standard method for digitizing analog signals.

**Haykin & Moher (5th Ed., 2020) and Lathi & Ding (5th Ed., 2018):** Provide comprehensive explanations of PCM, its operation, and its variations.

**CO2: Explain the basic concepts of digital communication (Knowledge Level: K2)**
PCM is a fundamental building block of digital communication systems.

### 4.1. PCM Encoding

*   Each quantized sample is represented by a binary word.
*   The number of bits per sample ($n$) determines the resolution of the quantization.
*   For example, if $n=8$ bits, there are $2^8 = 256$ possible quantization levels.

### 4.2. PCM Output

The output of the PCM system is a sequence of binary digits (bits), which can then be transmitted over a digital channel using various digital modulation techniques.

---

## 5. Practice Questions and Exercises

**Question 1:**
A continuous-time signal $x(t)$ has a bandwidth of 4 kHz.
(a) What is the minimum sampling rate required to avoid aliasing?
(b) If the signal is sampled at 10 kHz, what is the bandwidth of the sampled signal?
(c) If the signal is sampled at 6 kHz and contains a component at 5 kHz, what frequency will this component appear as after sampling?

**Answer 1:**
(a) According to the Nyquist-Shannon Sampling Theorem, the minimum sampling rate (Nyquist rate) is $2 \times f_{max}$. So, $f_{min} = 2 \times 4 \text{ kHz} = 8 \text{ kHz}$.
(b) If sampled at 10 kHz, the spectrum of the sampled signal consists of replicas of the original signal's spectrum centered at multiples of 10 kHz. The bandwidth of each replica is 4 kHz. The highest frequency component in the first replica (centered at 10 kHz) will be $10 + 4 = 14$ kHz, and the lowest will be $10 - 4 = 6$ kHz. However, the question typically refers to the bandwidth of the *baseband* replica, which remains 4 kHz. If it implies the overall bandwidth occupied by the sampled signal's spectrum up to the first null, it would be related to the sampling rate. In the context of signal reconstruction, the baseband bandwidth is of primary interest.
(c) If sampled at 6 kHz, aliasing occurs because $6 \text{ kHz} < 8 \text{ kHz}$. The frequency component at 5 kHz will be folded back into the baseband. The apparent frequency $f_{app}$ can be found by $f_{app} = |f - kf_s|$, where $f=5$ kHz, $f_s=6$ kHz, and $k$ is an integer such that $f_{app} \le f_s/2 = 3$ kHz.
    *   For $k=1$, $|5 \text{ kHz} - 1 \times 6 \text{ kHz}| = |-1 \text{ kHz}| = 1 \text{ kHz}$.
    *   The 5 kHz component will appear as a 1 kHz component in the sampled signal.

**Question 2:**
A uniform quantizer has a step size of $\Delta = 0.1$ V.
(a) What is the maximum quantization error?
(b) If the quantizer is used to quantize a signal with a range of $\pm 0.5$ V, how many quantization levels are there?
(c) Calculate the SQNR (in dB) for a full-scale sinusoidal signal quantized by this system, assuming uniform quantization.

**Answer 2:**
(a) The maximum quantization error for a uniform quantizer is $\pm \Delta/2$. So, the maximum error is $\pm 0.1 \text{ V} / 2 = \pm 0.05$ V.
(b) The range of the signal is $0.5 \text{ V} - (-0.5 \text{ V}) = 1.0$ V.
    Number of levels $L = \frac{\text{Signal Range}}{\text{Step Size}} = \frac{1.0 \text{ V}}{0.1 \text{ V}} = 10$ levels.
(c) For a full-scale sinusoidal signal, the signal power is $\sigma_x^2 = A^2/2$, where $A$ is the amplitude. Here, the range is $\pm 0.5$ V, so $A=0.5$ V.
    $\sigma_x^2 = (0.5 \text{ V})^2 / 2 = 0.25 / 2 = 0.125 \text{ V}^2$.
    The variance of the quantization error is $\sigma_e^2 = \Delta^2/12 = (0.1 \text{ V})^2 / 12 = 0.01 / 12 \approx 0.000833 \text{ V}^2$.
    $SQNR = \frac{\sigma_x^2}{\sigma_e^2} = \frac{0.125}{0.000833} \approx 150$.
    $SQNR_{dB} = 10 \log_{10}(150) \approx 21.76$ dB.
    Alternatively, if we use the formula $6.02n + 1.76$ dB for a sinusoidal signal, we first need to find $n$.
    $L=10$. Since $2^3=8$ and $2^4=16$, $n$ would be between 3 and 4 bits. A more precise way is to use the number of levels.
    $SQNR_{dB} \approx 10 \log_{10}(L^2) = 20 \log_{10}(L) = 20 \log_{10}(10) = 20$ dB.
    The formula $6.02n + 1.76$ is for a uniform quantizer with $n$ bits, meaning $L=2^n$. In our case, $L=10$.
    If we use the number of bits required to represent 10 levels, we would need 4 bits ($2^4 = 16$).
    Using $n=4$ bits: $SQNR_{dB} \approx 6.02 \times 4 + 1.76 = 24.08 + 1.76 = 25.84$ dB. This assumes a uniform quantizer with 16 levels.
    The most direct calculation is using powers: $SQNR = L^2$ if the signal range is $L\Delta$.
    $SQNR = L^2 = 10^2 = 100$.
    $SQNR_{dB} = 10 \log_{10}(100) = 20$ dB.

**Question 3:**
Explain the concept of aliasing and how an anti-aliasing filter prevents it.

**Answer 3:**
Aliasing occurs when a continuous-time signal is sampled at a rate lower than its Nyquist rate ($f_s < 2f_{max}$). In this situation, the spectral replicas of the original signal, which are shifted by integer multiples of the sampling frequency ($kf_s$), overlap with each other. This overlap causes high-frequency components of the original signal to appear as lower frequencies in the sampled signal, leading to distortion that cannot be removed during reconstruction.
An anti-aliasing filter is an analog low-pass filter placed before the sampler. Its cutoff frequency is set slightly below $f_s/2$. By attenuating or removing any frequency components in the analog signal that are above $f_s/2$, the anti-aliasing filter ensures that the signal is effectively band-limited to below half the sampling frequency. This prevents the spectral replicas from overlapping after sampling, thus avoiding aliasing and ensuring accurate reconstruction of the original signal.

---

## 6. Important Points to Remember

*   **Nyquist Rate:** The minimum sampling frequency required to perfectly reconstruct a band-limited signal is twice its maximum frequency ($2f_{max}$).
*   **Aliasing:** Occurs when sampling below the Nyquist rate, causing high frequencies to masquerade as low frequencies.
*   **Anti-aliasing Filter:** A low-pass filter used before sampling to remove frequencies above $f_s/2$.
*   **Quantization:** The process of converting continuous amplitude values to discrete levels. It's a lossy process.
*   **Quantization Error:** The difference between the original sample value and its quantized value.
*   **SQNR:** Signal-to-Quantization Noise Ratio, a measure of quantization quality. It improves by approximately 6 dB per bit.
*   **PCM:** The standard digital representation of analog signals, involving sampling, quantization, and encoding.

---

## 7. Alignment with Course Outcomes

*   **CO1: Illustrate the principles of analog communication systems (Knowledge Level: K2)**
    *   This module directly addresses how analog signals are handled and converted for digital processing, a core principle of analog communication systems. The sampling theorem and quantization processes are fundamental to understanding this.
*   **CO2: Explain the basic concepts of digital communication (Knowledge Level: K2)**
    *   Sampling and quantization are foundational concepts in digital communication, as they are the initial steps in digitizing analog information for transmission. PCM is a direct application of these principles.
*   **CO3: Analyse the baseband transmission of digital data through AWGN channel (Knowledge Level: K3)**
    *   The understanding of quantization error and its impact on signal quality (SQNR) is crucial for analyzing the performance of digital communication systems, especially when considering noise like Additive White Gaussian Noise (AWGN). The quality of the digitized signal directly affects the robustness of the transmitted data.

---
This concludes Module 2. The concepts of sampling and quantization are critical for understanding all subsequent topics in digital communication.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
