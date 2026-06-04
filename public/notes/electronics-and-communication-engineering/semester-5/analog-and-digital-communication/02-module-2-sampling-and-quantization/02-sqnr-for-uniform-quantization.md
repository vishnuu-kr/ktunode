---
title: "SQNR for uniform quantization"
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 2: Sampling and Quantization"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe901"
status: "completed"
scrapedAt: "2026-05-23T17:52:49.075Z"
---
# Module 2: Sampling and Quantization - SQNR for Uniform Quantization

## 1. Introduction to Quantization

Quantization is the process of converting a continuous range of amplitude values of a discrete-time signal into a finite set of discrete amplitude levels. This is a fundamental step in analog-to-digital conversion (ADC) where the sampled analog signal is mapped to one of the predefined quantization levels.

### 1.1. Key Concepts and Definitions

*   **Quantization:** The process of approximating a continuous range of values with a finite set of discrete values.
*   **Quantization Levels:** The discrete amplitude values that the input signal can be mapped to after quantization.
*   **Quantization Error (Quantization Noise):** The difference between the original sample value and its quantized value. This is an inherent distortion introduced by the quantization process.
*   **Uniform Quantization:** A quantization scheme where the spacing between adjacent quantization levels is constant. This is the simplest and most common form of quantization.
*   **Quantization Step Size (Δ):** The constant difference between adjacent quantization levels in uniform quantization.

### 1.2. Types of Uniform Quantization

*   **Midrise Quantizer:** The decision thresholds are at values $k\Delta$, and the reconstruction levels are at values $(k + 1/2)\Delta$.
*   **Midthread Quantizer:** The decision thresholds are at values $(k + 1/2)\Delta$, and the reconstruction levels are at values $k\Delta$.

**Important Point:** For analysis purposes, the choice between midrise and midthread often has minimal impact on the overall SQNR, especially for a large number of quantization levels.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 1.3. Reference to Textbooks

*   **Haykin & Moher (5th Ed.):** Discusses quantization as a crucial step in PCM systems, explaining the mapping of sampled values to discrete levels.
*   **Lathi & Ding (5th Ed.):** Introduces quantization as the process that bridges the analog and digital worlds, highlighting the introduction of quantization error.

## 2. Uniform Quantization Process

In uniform quantization, the input signal's amplitude range is divided into equal-sized intervals. Each interval corresponds to a specific quantization level.

### 2.1. Uniform Quantizer Model

Let the input signal be $x(t)$ and its sampled version be $x[n] = x(nT)$. After sampling, quantization maps $x[n]$ to a discrete value $x_q[n]$.

Consider a uniform quantizer with $L$ quantization levels, evenly spaced over an amplitude range of $V_{max} - V_{min}$. The quantization step size is:

$\Delta = \frac{V_{max} - V_{min}}{L}$

The reconstruction levels $y_k$ are typically located at the midpoints of the quantization intervals.

For a midrise quantizer:
*   Decision thresholds: ..., $-\Delta$, $0$, $\Delta$, $2\Delta$, ...
*   Reconstruction levels: ..., $-\frac{3}{2}\Delta$, $-\frac{1}{2}\Delta$, $\frac{1}{2}\Delta$, $\frac{3}{2}\Delta$, ...

For a midthread quantizer:
*   Decision thresholds: ..., $-\frac{1}{2}\Delta$, $\frac{1}{2}\Delta$, $\frac{3}{2}\Delta$, ...
*   Reconstruction levels: ..., $-\Delta$, $0$, $\Delta$, $2\Delta$, ...

The quantization error for a single sample $x[n]$ is defined as:

$e[n] = x_q[n] - x[n]$

where $x_q[n]$ is the quantized value of $x[n]$.

### 2.2. Quantization Error Distribution

For a uniform quantizer, the quantization error $e[n]$ is typically modeled as a uniformly distributed random variable over the interval $[-\frac{\Delta}{2}, +\frac{\Delta}{2}]$. This assumption is valid when the input signal spans many quantization levels and its fine structure is not correlated with the quantization process.

*   **Probability Density Function (PDF) of Quantization Error:**
    $f_e(e) = \begin{cases} \frac{1}{\Delta} & -\frac{\Delta}{2} \le e \le \frac{\Delta}{2} \\ 0 & \text{otherwise} \end{cases}$

### 2.3. Mean and Variance of Quantization Error

*   **Mean of Quantization Error:**
    $E[e[n]] = \int_{-\Delta/2}^{\Delta/2} e f_e(e) de = \int_{-\Delta/2}^{\Delta/2} e \frac{1}{\Delta} de = \frac{1}{\Delta} \left[\frac{e^2}{2}\right]_{-\Delta/2}^{\Delta/2} = \frac{1}{\Delta} \left(\frac{\Delta^2}{8} - \frac{\Delta^2}{8}\right) = 0$
    The mean quantization error is zero for a uniformly distributed error.

*   **Variance of Quantization Error:**
    $\sigma_e^2 = E[e^2[n]] - (E[e[n]])^2$
    Since $E[e[n]] = 0$, $\sigma_e^2 = E[e^2[n]]$
    $E[e^2[n]] = \int_{-\Delta/2}^{\Delta/2} e^2 f_e(e) de = \int_{-\Delta/2}^{\Delta/2} e^2 \frac{1}{\Delta} de = \frac{1}{\Delta} \left[\frac{e^3}{3}\right]_{-\Delta/2}^{\Delta/2} = \frac{1}{\Delta} \left(\frac{\Delta^3}{24} - (-\frac{\Delta^3}{24})\right) = \frac{1}{\Delta} \left(\frac{2\Delta^3}{24}\right) = \frac{\Delta^2}{12}$
    $\sigma_e^2 = \frac{\Delta^2}{12}$

**Important Point:** The variance of the quantization error is directly proportional to the square of the quantization step size. A smaller step size leads to a smaller quantization error variance.

### 2.4. Reference to Textbooks

*   **Haykin & Moher (5th Ed.):** Provides detailed derivations for the variance of quantization error, modeling it as a uniformly distributed random variable.
*   **Lathi & Ding (5th Ed.):** Explains the assumptions behind modeling quantization error as uniform noise and derives its variance.
*   **Taub & Schilling (4th Ed.):** Offers a comprehensive treatment of quantization error, including its impact on signal-to-noise ratio.

## 3. Signal-to-Quantization Noise Ratio (SQNR) for Uniform Quantization

The Signal-to-Quantization Noise Ratio (SQNR) is a measure of the quality of the quantized signal. It is defined as the ratio of the signal power to the quantization noise power.

### 3.1. Definitions and Formulas

*   **Signal Power ($P_s$):** The average power of the input signal $x[n]$. For a wide-sense stationary random process, $P_s = E[x^2[n]] = \sigma_x^2$ (assuming zero mean).
*   **Quantization Noise Power ($P_q$):** The average power of the quantization error $e[n]$. $P_q = E[e^2[n]] = \sigma_e^2 = \frac{\Delta^2}{12}$.

*   **SQNR:**
    $SQNR = \frac{P_s}{P_q} = \frac{\sigma_x^2}{\sigma_e^2} = \frac{\sigma_x^2}{\Delta^2/12} = \frac{12\sigma_x^2}{\Delta^2}$

The SQNR is often expressed in decibels (dB):

$SQNR_{dB} = 10 \log_{10} \left(\frac{\sigma_x^2}{\Delta^2/12}\right) = 10 \log_{10} (12) + 10 \log_{10} \left(\frac{\sigma_x^2}{\Delta^2}\right)$
$SQNR_{dB} \approx 10.79 + 20 \log_{10} \left(\frac{\sigma_x}{\Delta}\right)$

### 3.2. Relationship with the Number of Quantization Levels (L)

Let the input signal $x(t)$ have an amplitude range of $V_{max} - V_{min}$. To avoid clipping, the quantizer's full-scale range should match this amplitude range.

$V_{full-scale} = V_{max} - V_{min}$

The quantization step size $\Delta$ is related to the full-scale range and the number of quantization levels $L$ by:

$\Delta = \frac{V_{full-scale}}{L}$

Substituting this into the SQNR formula:

$SQNR = \frac{12\sigma_x^2}{(V_{full-scale}/L)^2} = \frac{12\sigma_x^2 L^2}{V_{full-scale}^2}$

If we assume the input signal is uniformly distributed over its dynamic range, then $\sigma_x^2 \approx \frac{V_{full-scale}^2}{3}$ (for a signal ranging from $-V_{full-scale}/2$ to $V_{full-scale}/2$, $\sigma_x^2 = \frac{1}{V_{full-scale}} \int_{-V_{full-scale}/2}^{V_{full-scale}/2} x^2 dx = \frac{1}{V_{full-scale}} [\frac{x^3}{3}]_{-V_{full-scale}/2}^{V_{full-scale}/2} = \frac{1}{V_{full-scale}} (\frac{V_{full-scale}^3}{24} + \frac{V_{full-scale}^3}{24}) = \frac{V_{full-scale}^2}{12}$ - **Correction:** For a uniform distribution over $[-A, A]$, the variance is $A^2/3$. If $V_{full-scale} = 2A$, then $A = V_{full-scale}/2$, so $\sigma_x^2 = (V_{full-scale}/2)^2 / 3 = V_{full-scale}^2 / 12$. This is for a specific case. Let's consider the general case where the signal power is $P_s = \sigma_x^2$.

Let's use the relationship between $\Delta$ and $L$ directly.

$SQNR = \frac{12 \sigma_x^2}{\Delta^2}$

Substitute $\Delta = V_{full-scale}/L$:

$SQNR = \frac{12 \sigma_x^2}{(V_{full-scale}/L)^2} = \frac{12 \sigma_x^2 L^2}{V_{full-scale}^2}$

**If we assume the input signal is uniformly distributed over the range $[-V_{full-scale}/2, V_{full-scale}/2]$**, then $\sigma_x^2 = \frac{(V_{full-scale}/2)^2}{3} = \frac{V_{full-scale}^2}{12}$.

In this specific case:
$SQNR = \frac{12 (\frac{V_{full-scale}^2}{12}) L^2}{V_{full-scale}^2} = L^2$

And in dB:
$SQNR_{dB} = 10 \log_{10}(L^2) = 20 \log_{10}(L)$

This formula highlights a crucial aspect of uniform quantization: for every additional bit used in quantization (which doubles the number of levels, $L \rightarrow 2L$), the SQNR increases by approximately 6 dB ($20 \log_{10}(2L) = 20 \log_{10}(2) + 20 \log_{10}(L) \approx 6.02 + 20 \log_{10}(L)$).

### 3.3. SQNR for Different Input Signal Types

The SQNR formula $SQNR = \frac{12\sigma_x^2}{\Delta^2}$ is general. The assumption $SQNR \approx L^2$ or $SQNR_{dB} \approx 20 \log_{10}(L)$ holds best when:

1.  **The input signal is uniformly distributed over the quantizer's range.**
2.  **The number of quantization levels ($L$) is large.**
3.  **The quantization error is uncorrelated with the signal.**

**Example: Sinusoidal Input Signal**

For a sinusoidal input signal $x(t) = A \sin(\omega_c t)$, the average power is $P_s = E[x^2(t)] = \frac{A^2}{2}$.

So, $\sigma_x^2 = \frac{A^2}{2}$.

The SQNR for a sinusoidal signal is:
$SQNR = \frac{12 \sigma_x^2}{\Delta^2} = \frac{12 (A^2/2)}{\Delta^2} = \frac{6A^2}{\Delta^2}$

If the quantizer's full-scale range ($V_{full-scale}$) is set to $2A$ (to accommodate the peak amplitude of the sine wave), then $\Delta = \frac{2A}{L}$.

$SQNR = \frac{6A^2}{(2A/L)^2} = \frac{6A^2}{4A^2/L^2} = \frac{6L^2}{4} = 1.5 L^2$

In dB:
$SQNR_{dB} = 10 \log_{10}(1.5 L^2) = 10 \log_{10}(1.5) + 20 \log_{10}(L)$
$SQNR_{dB} \approx 1.76 + 20 \log_{10}(L)$

**Comparison:** For a sinusoidal signal, the SQNR is lower than for a uniformly distributed signal with the same dynamic range. This is because the sinusoidal signal concentrates its power around zero, utilizing fewer quantization levels on average compared to a uniform distribution.

**Important Point:** The SQNR depends on the amplitude distribution of the input signal relative to the quantizer's dynamic range. Non-uniform quantization schemes (like $\mu$-law or A-law) are used to optimize SQNR for signals with non-uniform amplitude distributions, such as speech.

### 3.4. Clipping Distortion

If the input signal's amplitude exceeds the quantizer's full-scale range ($|x[n]| > V_{full-scale}/2$), clipping occurs. Clipping introduces significant distortion and is not accounted for in the uniform quantization error model.

**Important Point:** To minimize clipping distortion, the quantizer's range should be chosen to encompass the expected maximum amplitude of the input signal.

### 3.5. Reference to Textbooks

*   **Haykin & Moher (5th Ed.):** Explicitly derives the SQNR for uniform quantization, including the $20 \log_{10}(L)$ rule of thumb for large L and uniform input.
*   **Lathi & Ding (5th Ed.):** Discusses the impact of the number of bits and quantization levels on SQNR and provides the $6$ dB per bit improvement.
*   **Proakis & Salehi (Digital Communications, 6th Ed.):** Covers the theoretical aspects of quantization noise and its effect on digital communication system performance.
*   **Kennedy (6th Ed.):** Explains the concept of SQNR in the context of analog communication systems and the limitations imposed by quantization.

## 4. Learning Outcome Alignment

*   **CO1: Illustrate the principles of analog communication systems (Knowledge Level: K2)**
    *   This module explains quantization, a fundamental process in converting analog signals to digital representations for transmission. Understanding quantization is key to understanding how analog information is digitized.
*   **CO2: Explain the basic concepts of digital communication (Knowledge Level: K2)**
    *   Quantization is a core concept in digital communication, preceding digital modulation and channel coding. The SQNR directly impacts the achievable data rates and error probabilities in digital systems.
*   **CO3: Analyse the baseband transmission of digital data through AWGN channel (Knowledge Level: K3)**
    *   The quantization error acts as an additive noise source. Understanding its power (variance) is crucial for analyzing the performance of digital communication systems in the presence of noise, including the AWGN channel. The SQNR quantifies the signal quality after quantization before it's transmitted.
*   **CO4: Apply various digital modulation techniques in the design of digital communication systems (Knowledge Level: K3)**
    *   The quality of the digital signal produced after sampling and quantization directly affects the performance of digital modulation schemes. A higher SQNR means a cleaner digital representation, leading to better performance of modulation techniques.

## 5. Practice Questions and Exercises

**Question 1:**
A uniform quantizer has $L=16$ quantization levels and is used to quantize a signal with a dynamic range of $10$ V.
a) Calculate the quantization step size, $\Delta$.
b) If the input signal has an average power of $P_s = 0.5$ W, calculate the SQNR in dB.
c) If the input signal was uniformly distributed over its dynamic range, what would be the expected SQNR in dB?

**Answer 1:**
a) $\Delta = \frac{V_{full-scale}}{L} = \frac{10 \text{ V}}{16} = 0.625 \text{ V}$
b) $P_q = \frac{\Delta^2}{12} = \frac{(0.625 \text{ V})^2}{12} = \frac{0.390625}{12} \approx 0.03255 \text{ V}^2$ (assuming signal is in Volts, power is in Volts squared for simplicity here, or use normalized units)
   $SQNR = \frac{P_s}{P_q} = \frac{0.5}{0.03255} \approx 15.36$
   $SQNR_{dB} = 10 \log_{10}(15.36) \approx 11.86 \text{ dB}$

c) For a uniformly distributed signal over its dynamic range, $V_{full-scale} = 10$ V. The range is $[-5, 5]$ V.
   $\sigma_x^2 = \frac{(10/2)^2}{3} = \frac{25}{3} \approx 8.33 \text{ V}^2$.
   $SQNR = \frac{12\sigma_x^2}{\Delta^2} = \frac{12 \times (25/3)}{(0.625)^2} = \frac{100}{0.390625} \approx 256$
   $SQNR_{dB} = 10 \log_{10}(256) \approx 24.08 \text{ dB}$
   Alternatively, using $SQNR_{dB} \approx 20 \log_{10}(L)$:
   $SQNR_{dB} \approx 20 \log_{10}(16) = 20 \times 1.204 = 24.08 \text{ dB}$

**Question 2:**
What is the approximate increase in SQNR in dB when the number of quantization levels of a uniform quantizer is doubled?

**Answer 2:**
When the number of quantization levels $L$ is doubled to $2L$, the SQNR changes from $K \cdot L^2$ to $K \cdot (2L)^2 = K \cdot 4L^2$ (where K depends on the signal distribution, but the $L^2$ dependence is common).
The ratio of new SQNR to old SQNR is $\frac{K \cdot 4L^2}{K \cdot L^2} = 4$.
The increase in dB is $10 \log_{10}(4) = 10 \times 0.602 = 6.02$ dB.
So, the SQNR increases by approximately 6 dB for every additional bit used.

**Question 3:**
A $300 \text{ Hz}$ to $3.4 \text{ kHz}$ voice signal is to be quantized using a uniform quantizer.
a) If the signal is sampled at $8 \text{ kHz}$ and quantized using 8 bits, what is the SQNR? (Assume uniform distribution of the signal over its range for simplicity).
b) How many bits would be required to achieve an SQNR of at least $40 \text{ dB}$ for this uniformly distributed signal?

**Answer 3:**
a) Number of quantization levels $L = 2^{\text{number of bits}} = 2^8 = 256$.
   Assuming a uniformly distributed signal over its range,
   $SQNR_{dB} \approx 20 \log_{10}(L) = 20 \log_{10}(256) \approx 48.16 \text{ dB}$.
   (The bandwidth and sampling rate are relevant for sampling theory, but for SQNR calculation of a *uniformly* distributed signal, only L matters here).

b) We want $SQNR_{dB} \ge 40 \text{ dB}$.
   $20 \log_{10}(L) \ge 40$
   $\log_{10}(L) \ge 2$
   $L \ge 10^2 = 100$
   Since $L$ must be a power of 2, the smallest power of 2 greater than or equal to 100 is $2^7 = 128$.
   Therefore, 7 bits are required.

## 6. Important Points to Remember

*   **Quantization error** is the difference between the actual sample value and its quantized representation.
*   In **uniform quantization**, the step size $\Delta$ is constant.
*   The **quantization error** is typically modeled as a **uniformly distributed random variable** over $[-\Delta/2, \Delta/2]$ for large $L$ and signals that are not correlated with the quantization process.
*   The **variance of the quantization error** for a uniform quantizer is $\sigma_e^2 = \frac{\Delta^2}{12}$.
*   **SQNR** is the ratio of signal power to quantization noise power: $SQNR = \frac{\sigma_x^2}{\Delta^2/12}$.
*   For a **uniformly distributed signal** over its dynamic range, $SQNR \approx L^2$, and $SQNR_{dB} \approx 20 \log_{10}(L)$.
*   Each additional bit in uniform quantization improves the SQNR by approximately **6 dB**.
*   **Clipping distortion** occurs when the signal amplitude exceeds the quantizer's range and is a separate source of error not covered by the standard SQNR formula.

This comprehensive study of SQNR for uniform quantization provides a foundational understanding of the trade-offs between quantization resolution (number of bits) and signal quality in digital communication systems.