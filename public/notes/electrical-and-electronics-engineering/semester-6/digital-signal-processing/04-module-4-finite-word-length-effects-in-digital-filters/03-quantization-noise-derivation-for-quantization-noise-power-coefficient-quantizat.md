---
title: "Quantization noise, Derivation for quantization noise power, coefficient quantization error, Product quantization error."
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 4: Finite Word Length effects in Digital Filters:"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3666c"
status: "completed"
scrapedAt: "2026-05-23T16:26:53.747Z"
---
# Digital Signal Processing: Module 4 - Finite Word Length Effects in Digital Filters

## Introduction to Finite Word Length Effects

In the real world, digital signal processing (DSP) systems operate with finite precision. This means that signals and filter coefficients are represented using a finite number of bits. This limitation introduces errors that can significantly impact the performance of digital filters. This module focuses on understanding and analyzing these errors, collectively known as **Finite Word Length (FWL) effects**.

**Key Concepts:**

*   **Quantization:** The process of approximating a continuous or high-precision value with a discrete, lower-precision value.
*   **Quantization Error:** The difference between the original value and its quantized approximation.
*   **Finite Word Length:** The constraint on the number of bits used to represent numbers (signals and coefficients) in a digital system.

**Learning Outcomes Addressed:**

*   Analyze the impact of quantization on digital filter performance.
*   Understand the sources of quantization error in digital filters.
*   Quantify the effects of quantization noise.
*   Analyze the impact of coefficient quantization.
*   Analyze the impact of product quantization.

**Alignment with Course Outcomes:**

*   **CO4: Analyze effect of word length in digital filters (Knowledge Level: K3)** - This module directly addresses this outcome by delving into the mechanisms and impacts of FWL effects.

---

## 4.1 Quantization Noise

### 4.1.1 The Quantization Process

Quantization is a non-linear operation that maps an input signal to a finite set of output values. In DSP, this typically occurs when an analog signal is converted to a digital signal (Analog-to-Digital Conversion - ADC) or when intermediate results in a digital filter are rounded or truncated.

**Types of Quantization:**

1.  **Rounding:** The quantized value is the closest representable value to the original value.
2.  **Truncation (or Chopping):** The quantized value is obtained by discarding the least significant bits (LSBs).

**Mathematical Representation of Quantization:**

Let $x$ be the analog or high-precision signal to be quantized, and let $x_q$ be its quantized version. The quantization error, $e$, is defined as:

$e = x_q - x$

If we assume a uniform quantizer with a step size $\Delta$, the input $x$ can be represented as:

$x = N\Delta + \delta$

where $N$ is an integer and $-\Delta/2 \le \delta < \Delta/2$. The quantized value $x_q$ is then given by:

$x_q = N\Delta$

The quantization error is then $e = x_q - x = N\Delta - (N\Delta + \delta) = -\delta$.

Thus, the quantization error lies in the range:

$-\Delta/2 \le e < \Delta/2$

**Important Note:** Quantization is a lossy process, introducing an irreducible error.

### 4.1.2 Quantization Noise

The quantization error introduced by the quantization process can be modeled as **quantization noise**. This noise is signal-dependent and non-linear. However, for many analyses, it is approximated as a **random signal** with certain statistical properties.

**Assumptions for Quantization Noise Modeling:**

For analytical purposes, quantization noise is often modeled as:

1.  **White Noise:** The noise is uncorrelated with itself at different time instances.
2.  **Uniformly Distributed:** The quantization error is uniformly distributed over the range $[-\Delta/2, \Delta/2]$.
3.  **Uncorrelated with the Signal:** The quantization error is uncorrelated with the input signal.

These assumptions are valid when the signal spans many quantization levels and is not highly correlated.

**Reference:** Proakis & Manolakis, 4th Ed., Chapter 10: Finite Word Length Effects. This chapter provides a thorough discussion on the statistical properties of quantization noise.

---

## 4.2 Derivation for Quantization Noise Power

To analyze the impact of quantization noise on a digital filter, we often consider its **power**. The power of a signal is proportional to the mean square value of the signal.

Let $e(n)$ be the quantization error at time instance $n$. Assuming the error is uniformly distributed over $[-\Delta/2, \Delta/2]$, the probability density function (PDF) of $e(n)$ is:

$f_{e(n)}(e) = \begin{cases} 1/\Delta & -\Delta/2 \le e < \Delta/2 \\ 0 & \text{otherwise} \end{cases}$

**Mean of the Quantization Noise:**

The mean (average value) of the quantization noise is calculated as:

$E[e(n)] = \int_{-\infty}^{\infty} e \cdot f_{e(n)}(e) \,de$
$E[e(n)] = \int_{-\Delta/2}^{\Delta/2} e \cdot \frac{1}{\Delta} \,de$
$E[e(n)] = \frac{1}{\Delta} \left[ \frac{e^2}{2} \right]_{-\Delta/2}^{\Delta/2}$
$E[e(n)] = \frac{1}{\Delta} \left( \frac{(\Delta/2)^2}{2} - \frac{(-\Delta/2)^2}{2} \right)$
$E[e(n)] = \frac{1}{\Delta} \left( \frac{\Delta^2}{8} - \frac{\Delta^2}{8} \right) = 0$

**The mean of the quantization noise is zero.** This implies that, on average, the quantization process does not systematically shift the signal's DC component.

**Mean Square Value (Power) of the Quantization Noise:**

The mean square value of the quantization noise is calculated as:

$E[e^2(n)] = \int_{-\infty}^{\infty} e^2 \cdot f_{e(n)}(e) \,de$
$E[e^2(n)] = \int_{-\Delta/2}^{\Delta/2} e^2 \cdot \frac{1}{\Delta} \,de$
$E[e^2(n)] = \frac{1}{\Delta} \left[ \frac{e^3}{3} \right]_{-\Delta/2}^{\Delta/2}$
$E[e^2(n)] = \frac{1}{\Delta} \left( \frac{(\Delta/2)^3}{3} - \frac{(-\Delta/2)^3}{3} \right)$
$E[e^2(n)] = \frac{1}{\Delta} \left( \frac{\Delta^3}{24} - \left(-\frac{\Delta^3}{24}\right) \right)$
$E[e^2(n)] = \frac{1}{\Delta} \left( \frac{\Delta^3}{24} + \frac{\Delta^3}{24} \right)$
$E[e^2(n)] = \frac{1}{\Delta} \left( \frac{2\Delta^3}{24} \right) = \frac{\Delta^2}{12}$

**Therefore, the power of the quantization noise is $P_e = \Delta^2/12$.**

**Relationship to Bit Length:**

If the quantizer uses $B$ bits and the full-scale input range is $V_{FS}$, then the step size $\Delta$ is approximately:

$\Delta = V_{FS} / 2^B$

The power of the quantization noise can then be expressed in terms of the bit length:

$P_e = \frac{(V_{FS}/2^B)^2}{12} = \frac{V_{FS}^2}{12 \cdot 2^{2B}}$

This equation shows that increasing the bit length $B$ by 1 reduces the quantization noise power by a factor of 4 (or by 6 dB), as $2^{2(B+1)} = 4 \cdot 2^{2B}$.

**Signal-to-Quantization Noise Ratio (SQNR):**

The SQNR is a measure of the quality of the quantized signal. It is defined as the ratio of the signal power ($P_s$) to the quantization noise power ($P_e$):

$SQNR = P_s / P_e$

In decibels (dB), this is:

$SQNR_{dB} = 10 \log_{10} (P_s / P_e)$

For a full-scale sinusoidal input signal with amplitude $A$, its power is $P_s = A^2/2$. If $A = V_{FS}/2$, the maximum possible sine wave amplitude, then $P_s = (V_{FS}/2)^2 / 2 = V_{FS}^2 / 8$.

$SQNR = \frac{V_{FS}^2/8}{\Delta^2/12} = \frac{3}{2} \frac{V_{FS}^2}{\Delta^2}$

Substituting $\Delta = V_{FS}/2^B$:

$SQNR = \frac{3}{2} \frac{V_{FS}^2}{(V_{FS}/2^B)^2} = \frac{3}{2} (2^B)^2 = 1.5 \cdot 2^{2B}$

In decibels:

$SQNR_{dB} = 10 \log_{10} (1.5 \cdot 2^{2B})$
$SQNR_{dB} = 10 \log_{10}(1.5) + 10 \log_{10}(2^{2B})$
$SQNR_{dB} \approx 1.76 + 20B \log_{10}(2)$
$SQNR_{dB} \approx 1.76 + 20B (0.30103)$
$SQNR_{dB} \approx 6.02B + 1.76$

This common rule of thumb states that for every additional bit, the SQNR improves by approximately 6 dB.

**Reference:** Oppenheim & Schafer, 2nd Ed., Chapter 7: Digital Signal Processing Applications. This chapter discusses quantization effects in various applications, including filtering.

---

## 4.3 Coefficient Quantization Error

In practice, the coefficients of digital filters are also quantized. This is because filter coefficients are often designed using floating-point arithmetic or high-precision fixed-point arithmetic and then implemented using a finite number of bits.

**Impact of Coefficient Quantization:**

Quantization of filter coefficients can lead to:

1.  **Change in Filter Magnitude and Phase Response:** The actual frequency response of the implemented filter may deviate significantly from the desired response.
2.  **Pole/Zero Migration:** For IIR filters, the locations of poles and zeros can shift, potentially making the filter unstable or altering its characteristics.
3.  **Increased Sensitivity:** Some filter structures are more sensitive to coefficient quantization than others.

**Sources of Coefficient Quantization Error:**

*   **Design Tool Limitations:** Filter design algorithms may produce coefficients that require high precision.
*   **Hardware Constraints:** The target hardware might have a limited word length for storing coefficients.

**Analysis of Coefficient Quantization:**

The analysis of coefficient quantization is more complex than that of quantization noise. It often involves:

*   **Sensitivity Analysis:** Determining how much the filter's performance metrics (e.g., frequency response, pole locations) change due to small changes in coefficients.
*   **Monte Carlo Simulations:** Quantizing coefficients randomly and observing the statistical distribution of the resulting filter performance.
*   **Root Locus Analysis:** For IIR filters, studying the movement of poles due to coefficient variations.

**Example: Second-Order IIR Filter**

Consider a second-order IIR filter with the transfer function:

$H(z) = \frac{b_0 + b_1 z^{-1} + b_2 z^{-2}}{1 - a_1 z^{-1} - a_2 z^{-2}}$

If the coefficients $a_1, a_2, b_0, b_1, b_2$ are quantized, let the quantized coefficients be $a_{1q}, a_{2q}, b_{0q}, b_{1q}, b_{2q}$. The quantized transfer function is:

$H_q(z) = \frac{b_{0q} + b_{1q} z^{-1} + b_{2q} z^{-2}}{1 - a_{1q} z^{-1} - a_{2q} z^{-2}}$

The difference $H_q(z) - H(z)$ represents the error introduced by coefficient quantization. Analyzing this difference to understand its impact on the frequency response is a key task.

**Reference:** Ifeachor & Jervis, 2nd Ed., Chapter 7: Finite Word Length Effects. This chapter provides detailed discussions and methods for analyzing coefficient quantization.

---

## 4.4 Product Quantization Error

Product quantization occurs when the results of multiplications within a digital filter are quantized before being summed. This is a common occurrence in fixed-point implementations.

**The Process:**

In a digital filter, a typical operation involves multiplying a signal sample by a filter coefficient. Let $x(n)$ be a signal sample and $h$ be a filter coefficient. The product is $p(n) = x(n) \cdot h$.

If both $x(n)$ and $h$ are represented with $B_x$ and $B_h$ bits respectively, their product $p(n)$ can require up to $B_x + B_h$ bits. In fixed-point arithmetic, this product is often scaled and then quantized to a fixed word length, say $B_p$ bits.

Let $p_q(n)$ be the quantized product. The product quantization error is $e_p(n) = p_q(n) - p(n)$.

**Impact of Product Quantization:**

Similar to quantization noise on signal samples, product quantization introduces errors into the filter's calculations. This can lead to:

1.  **Accumulation of Errors:** These errors accumulate as they are processed through the filter's structure.
2.  **Distortion of Output Signal:** The output signal will be corrupted by these errors.
3.  **Instability:** In IIR filters, the accumulation of product quantization errors can lead to instability, especially if the filter is already close to the stability boundary.

**Analysis of Product Quantization:**

The analysis of product quantization errors often involves modeling the error as a random variable. If the product $p(n)$ is quantized to $B_p$ bits, and assuming rounding to the nearest representable value:

*   The step size $\Delta_p$ for the product quantization is related to the word lengths of the signal and coefficient, and the scaling used.
*   The product quantization error $e_p(n)$ can be approximated as uniformly distributed over $[-\Delta_p/2, \Delta_p/2]$.
*   The power of the product quantization noise is $P_{e_p} = \Delta_p^2/12$.

**Example: FIR Filter Accumulation**

Consider a simple FIR filter:
$y(n) = h_0 x(n) + h_1 x(n-1)$

If $x(n)$ and $h_0$ are quantized and multiplied, and $x(n-1)$ and $h_1$ are quantized and multiplied, the resulting products $p_0(n) = x_q(n) h_{0q}$ and $p_1(n) = x_q(n-1) h_{1q}$ are then quantized to $p_{0q}(n)$ and $p_{1q}(n)$.

$y_q(n) = p_{0q}(n) + p_{1q}(n)$

The quantization errors are $e_{p0}(n) = p_{0q}(n) - p_0(n)$ and $e_{p1}(n) = p_{1q}(n) - p_1(n)$.
The output error is $e_y(n) = e_{p0}(n) + e_{p1}(n)$.

The power of the output error depends on the powers of the individual product quantization errors and their correlation.

**Mitigation Techniques:**

*   **Larger Word Length for Accumulators:** Using a wider word length for accumulating the products before final quantization can significantly reduce the impact of product quantization errors. This is often referred to as **overflow arithmetic** or **saturation arithmetic** in implementations.
*   **Careful Scaling:** Proper scaling of intermediate products can prevent overflow and ensure that the quantization noise power remains within acceptable limits.

**Reference:** Salivahanan, Vallavaraj, & Gnapriya, 2nd Ed., Chapter 9: Finite Word Length Effects in Digital Signal Processors. This text provides practical considerations for implementing filters with fixed-point arithmetic.

---

## Practice Questions and Answers

**Question 1:**

A uniform quantizer has a step size of $\Delta = 0.1$. If the input signal value is $x = 0.47$, and the quantizer rounds to the nearest representable value, what is the quantized output $x_q$ and the quantization error $e$?

**Answer 1:**

The representable values are multiples of $\Delta$: ..., -0.2, -0.1, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, ...
The input $x = 0.47$ falls between 0.4 and 0.5.
Since 0.47 is closer to 0.5, the quantized output is $x_q = 0.5$.
The quantization error is $e = x_q - x = 0.5 - 0.47 = 0.03$.

**Question 2:**

Calculate the power of the quantization noise for a uniform quantizer with a step size $\Delta = 0.2$.

**Answer 2:**

The power of the quantization noise for a uniform quantizer is given by $P_e = \Delta^2/12$.
$P_e = (0.2)^2 / 12 = 0.04 / 12 = 1/300$.

**Question 3:**

A system uses a $B=4$ bit quantizer for a signal with a full-scale range of $V_{FS} = 1$. Assuming rounding and uniform distribution of quantization error, what is the approximate SQNR in dB for a full-scale sine wave input?

**Answer 3:**

Using the formula $SQNR_{dB} \approx 6.02B + 1.76$:
For $B=4$:
$SQNR_{dB} \approx 6.02(4) + 1.76$
$SQNR_{dB} \approx 24.08 + 1.76$
$SQNR_{dB} \approx 25.84 \, dB$

**Question 4:**

For an IIR filter, which type of finite word length effect is most likely to cause instability if not managed properly?

**Answer 4:**

**Coefficient quantization error** can cause poles to move towards or beyond the unit circle, leading to instability. Product quantization errors, if accumulated sufficiently, can also contribute to instability, especially in sensitive filter structures.

**Question 5:**

What is the primary advantage of using a wider word length for the accumulator in fixed-point digital filter implementations?

**Answer 5:**

Using a wider word length for the accumulator (e.g., adding extra guard bits) helps to **reduce the impact of product quantization errors**. It provides more headroom for the intermediate sums, preventing overflow and minimizing the accumulation of quantization noise in the summation process.

---

## Important Points to Remember

*   **Quantization is an unavoidable error source** in practical digital signal processing systems.
*   **Quantization Noise** is often modeled as additive, white, uniformly distributed noise with zero mean and a power of $\Delta^2/12$.
*   The **SQNR** is a key metric for evaluating the quality of quantization, improving by approximately 6 dB per bit.
*   **Coefficient Quantization** directly affects the filter's frequency response and can lead to pole/zero migration, potentially causing instability in IIR filters.
*   **Product Quantization** introduces errors into the multiplication operations, which can accumulate and distort the output signal.
*   **Careful design choices**, such as using appropriate filter structures (e.g., Canonic Form for IIR filters) and employing sufficient word lengths for signal representation and accumulation, are crucial for mitigating FWL effects.
*   **Sensitivity analysis** is important for understanding how much coefficient quantization will impact filter performance.

---

This concludes Module 4 on Finite Word Length Effects in Digital Filters. Understanding these effects is critical for the practical design and implementation of digital filters that meet performance specifications within hardware constraints.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
