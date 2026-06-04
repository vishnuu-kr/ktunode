---
title: "ADC quantization noise"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 4: Efficient Computation of DFT: Fast Fourier Transform and computational 
advantage over DFT"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe9a5"
status: "completed"
scrapedAt: "2026-05-23T17:55:44.923Z"
---
# DIGITAL SIGNAL PROCESSING - Module 4: Efficient Computation of DFT: Fast Fourier Transform and Computational Advantage over DFT

## Topic: ADC Quantization Noise

This module delves into efficient computation of the Discrete Fourier Transform (DFT) using the Fast Fourier Transform (FFT) algorithm and its significant computational advantages. While the core focus is on FFT, understanding the input to any digital signal processing system is crucial. This includes the impact of Analog-to-Digital Conversion (ADC), specifically the phenomenon of **quantization noise**.

---

### 1. Introduction to Analog-to-Digital Conversion (ADC)

Before we can apply the DFT or FFT to a signal, it must be converted from its analog form to a digital form. This process involves two main steps:
*   **Sampling:** Converting a continuous-time signal into a discrete-time signal by taking samples at regular intervals.
*   **Quantization:** Converting the sampled analog values (which can have infinite resolution) into discrete digital values with a finite number of bits.

**Key Concept:** ADC is an irreversible process. The quantization step introduces an error, known as **quantization noise**.

**Textbook Reference:**
*   **Proakis & Ingle (3rd Ed.):** Chapter 1, "Introduction to Digital Signal Processing," discusses the fundamental concepts of sampling and quantization in the context of converting analog signals to digital.
*   **Oppenheim & Schafer (3rd Ed.):** Chapter 1, "Digital Signal Processing: An Overview," provides a foundational understanding of the ADC process.

---

### 2. Understanding Quantization Noise

Quantization noise is the error introduced when a continuous analog value is mapped to one of a finite set of discrete digital values. This error arises because the original analog value is typically not exactly representable by the available digital levels.

**Key Concepts:**
*   **Quantizer:** The component within an ADC that performs the mapping from continuous input values to discrete output values.
*   **Quantization Error (e[n]):** The difference between the actual sampled analog value $x[n]$ and its quantized digital representation $x_q[n]$.
    $e[n] = x_q[n] - x[n]$
*   **Quantization Level:** The discrete values that the quantizer can output. The number of quantization levels is determined by the number of bits ($B$) used in the ADC, with $2^B$ levels.
*   **Quantization Step Size (Q):** The difference between adjacent quantization levels. This is often related to the full-scale range (FSR) of the ADC.
    $Q = \frac{FSR}{2^B}$

**Visual Representation:**

Imagine a staircase approximation of a ramp. The difference between the ramp and the top of each step is the quantization error.

**Example:**
Consider an ADC with a full-scale range of 0V to 5V and a resolution of 3 bits.
*   Number of levels = $2^3 = 8$
*   Quantization step size (Q) = 5V / 8 = 0.625V

Let's say an analog sample is 2.1V.
*   The closest quantization levels are 1.875V (3 * 0.625V) and 2.5V (4 * 0.625V).
*   If the quantizer rounds to the nearest level, the quantized value would be 2.5V.
*   Quantization Error = 2.5V - 2.1V = 0.4V.

**Textbook Reference:**
*   **Apte (2nd Ed.):** Chapter 2, "Sampling and Quantization," provides a detailed explanation of quantization error and its characteristics.
*   **Mitra (4th Ed.):** Chapter 1, "Introduction," may also cover the basics of quantization.

---

### 3. Characteristics of Quantization Noise

Under certain assumptions, quantization noise can be modeled as a random variable with specific properties.

**Assumptions for ideal quantization noise:**
1.  **Uniform Distribution:** The quantization error is uniformly distributed over the interval $[-Q/2, +Q/2]$. This is a good approximation when the input signal is sufficiently complex and its amplitude varies significantly between samples, or when the step size is much smaller than the signal variations.
2.  **Uncorrelated with Input:** The quantization error is uncorrelated with the input signal.
3.  **White Noise:** The quantization error is uncorrelated with itself at different time instances, meaning it behaves like white noise.

**Key Properties:**
*   **Probability Density Function (PDF):** Uniform PDF, $f(e) = 1/Q$ for $-Q/2 \le e \le Q/2$, and 0 otherwise.
*   **Mean (Average Value):** $E[e[n]] = 0$. This is because the error is symmetrically distributed around zero.
*   **Variance (Power):** $\sigma_e^2 = E[e[n]^2] = \frac{1}{Q} \int_{-Q/2}^{Q/2} e^2 de = \frac{Q^2}{12}$.
    The power of the quantization noise is $\frac{Q^2}{12}$.

**Signal-to-Quantization Noise Ratio (SQNR):**
SQNR is a measure of the quality of the quantized signal. It's the ratio of the signal power to the quantization noise power.

*   **Signal Power ($P_x$):** For a sinusoidal signal with amplitude $A$, its RMS value is $A/\sqrt{2}$, and its power is $(A/\sqrt{2})^2 = A^2/2$.
*   **SQNR in dB:**
    $SQNR_{dB} = 10 \log_{10} \left( \frac{P_x}{\sigma_e^2} \right)$

**Impact of Number of Bits (B):**
As the number of bits ($B$) increases, the quantization step size ($Q$) decreases. A smaller $Q$ leads to a lower quantization error variance and thus a higher SQNR.

*   $Q = \frac{FSR}{2^B}$
*   $\sigma_e^2 = \frac{1}{12} \left(\frac{FSR}{2^B}\right)^2 = \frac{FSR^2}{12 \cdot 2^{2B}}$

For a full-scale sinusoidal signal with amplitude $A = FSR/2$:
*   $P_x = \frac{(FSR/2)^2}{2} = \frac{FSR^2}{8}$

$SQNR_{dB} = 10 \log_{10} \left( \frac{FSR^2/8}{FSR^2 / (12 \cdot 2^{2B})} \right)$
$SQNR_{dB} = 10 \log_{10} \left( \frac{12 \cdot 2^{2B}}{8} \right)$
$SQNR_{dB} = 10 \log_{10} \left( 1.5 \cdot (2^B)^2 \right)$
$SQNR_{dB} = 10 \log_{10}(1.5) + 10 \log_{10}(2^{2B})$
$SQNR_{dB} \approx 1.76 + 20B \log_{10}(2)$
$SQNR_{dB} \approx 1.76 + 6.02B$

**Key Takeaway:** Each additional bit in the ADC resolution improves the SQNR by approximately 6 dB.

**Think DSP (Downey, 2nd Ed.):** Chapter 7, "Quantization," provides a practical and intuitive explanation of quantization error and its impact on signal quality, including SQNR.

---

### 4. Non-ideal Quantization Noise Behavior

The assumption of ideal quantization noise (uniform distribution, uncorrelated) might not always hold true in practical scenarios.

**Factors leading to non-ideal behavior:**
*   **Small Number of Bits:** With very few bits, the quantization levels are widely spaced, and the error distribution may not be uniform. The signal itself might span only a few quantization levels, leading to strong correlation between the error and the signal.
*   **Signal Amplitude is Too Small:** If the input signal's amplitude is significantly smaller than the quantization step size ($Q$), the signal itself will be effectively quantized to zero or a few levels, leading to a high proportion of quantization noise relative to the signal.
*   **Non-uniform Sampling or Quantization:** Real-world ADCs might have non-linearities that cause the quantization step sizes to vary.
*   **Correlation:** If the input signal is a DC level or a very low-frequency sine wave that occupies only a few quantization levels, the quantization error will be correlated with the signal, appearing as distortion rather than random noise. This is often referred to as **quantization distortion**.

**Mitigation Strategies for Quantization Noise:**
*   **Increase Resolution (Number of Bits):** This is the most direct way to reduce quantization noise.
*   **Dithering:** Adding a small amount of random noise to the input signal before quantization can help to decorrelate the quantization error from the signal, making it behave more like true random noise and improving the perceived SQNR, especially for low-amplitude signals.

**Reference Book:**
*   **Ifeachor & Jervis (2nd Ed.):** Chapter 4, "Analog-to-Digital Converters," discusses the practical aspects of ADCs, including sources of error and techniques like dithering.

---

### 5. Relevance to FFT and Computational Advantage

While quantization noise is an issue at the ADC stage, it has indirect implications for subsequent digital signal processing operations like the FFT.

*   **Impact on Frequency Spectrum:** Quantization noise, when treated as random noise, spreads across the entire frequency spectrum. If the quantization noise level is high (due to low ADC resolution), it can mask weak spectral components of the signal that are of interest.
*   **Dynamic Range:** The SQNR sets the dynamic range of the digitized signal. A low SQNR means that small signals might be lost in the quantization noise floor.
*   **FFT of Noisy Data:** When the FFT is applied to a signal that has been significantly affected by quantization noise, the resulting spectrum will reflect this noise. The computed spectrum might appear "noisy" or have a raised noise floor, making it harder to identify and analyze the true frequency components of the original analog signal.

**Computational Advantage of FFT:**
The core of Module 4 is the FFT, which computes the DFT with significant efficiency. A direct DFT computation for N points requires O(N^2) complex multiplications and additions. FFT algorithms, such as the Cooley-Tukey algorithm, reduce this complexity to O(N log N).

*   **Example:** For N = 1024,
    *   DFT: $1024^2 \approx 1$ million operations
    *   FFT: $1024 \times \log_2(1024) = 1024 \times 10 = 10240$ operations
    This is a reduction of almost 100 times!

**CO4 Alignment:** This topic directly supports CO4: "Compute DFT efficiently using FFT method and to explain the architecture of a DSP processor." While quantization noise is not directly about the FFT algorithm itself, it's a critical consideration for any signal that will be processed by an FFT, as it affects the quality and interpretation of the FFT output. Understanding quantization noise helps appreciate why high-quality ADCs are necessary for accurate spectral analysis using FFT.

---

### 6. Practice Questions and Exercises

**Question 1:**
An analog signal is sampled using an ADC with 10 bits of resolution and a full-scale range of 4.096 V. Calculate the quantization step size ($Q$) and the theoretical SQNR (in dB) for a full-scale sinusoidal input signal.

**Answer 1:**
*   Number of bits, $B = 10$.
*   Full-Scale Range, $FSR = 4.096$ V.
*   Quantization step size, $Q = \frac{FSR}{2^B} = \frac{4.096}{2^{10}} = \frac{4.096}{1024} = 0.004$ V = 4 mV.
*   Theoretical SQNR for a full-scale sinusoid is approximately $1.76 + 6.02B$.
*   $SQNR_{dB} \approx 1.76 + 6.02 \times 10 = 1.76 + 60.2 = 61.96$ dB.

**Question 2:**
If you increase the number of bits in an ADC from 8 bits to 12 bits, by approximately how many dB does the SQNR improve, assuming a full-scale sinusoidal input?

**Answer 2:**
*   For 8 bits: $SQNR_{dB} \approx 1.76 + 6.02 \times 8 = 1.76 + 48.16 = 49.92$ dB.
*   For 12 bits: $SQNR_{dB} \approx 1.76 + 6.02 \times 12 = 1.76 + 72.24 = 74.00$ dB.
*   Improvement = $74.00 - 49.92 = 24.08$ dB.
*   Alternatively, each bit improves SQNR by ~6 dB. So, an increase of 4 bits means an improvement of $4 \times 6 = 24$ dB.

**Question 3 (Conceptual):**
Why is it important to understand quantization noise when discussing efficient computation of DFT using FFT?

**Answer 3:**
Quantization noise is introduced during the analog-to-digital conversion process, which is a prerequisite for performing DFT/FFT on real-world signals. High quantization noise can degrade the quality of the input signal, potentially masking weaker frequency components and leading to an inaccurate or "noisy" spectrum after FFT computation. Therefore, understanding quantization noise helps in appreciating the trade-offs in ADC design and the importance of sufficient ADC resolution for meaningful spectral analysis using FFT.

---

### 7. Important Points to Remember

*   **Quantization Noise:** Introduced by mapping continuous analog values to discrete digital values in an ADC.
*   **Quantization Error:** The difference between the true sampled value and its quantized representation.
*   **Ideal Quantization Noise:** Modeled as a uniformly distributed random variable over $[-Q/2, Q/2]$ with zero mean and variance $Q^2/12$.
*   **SQNR:** Signal-to-Quantization Noise Ratio, a measure of signal quality.
*   **SQNR Improvement:** Each additional bit in ADC resolution improves SQNR by approximately 6 dB.
*   **Non-ideal Behavior:** Occurs with few bits, very small signals, or correlated inputs, leading to distortion.
*   **Dithering:** A technique to mitigate quantization noise by adding small random noise.
*   **Impact on FFT:** Quantization noise contributes to the noise floor of the spectrum computed by the FFT, potentially obscuring weak signals.

---

### 8. Learning Outcomes Covered

*   **All Learning Outcomes:** While the primary focus of Module 4 is FFT, the topic of ADC quantization noise is fundamental to preparing analog signals for digital processing. Understanding this noise is essential for interpreting the results of DFT/FFT computations on real-world data.

---

### 9. Alignment with Course Outcomes

*   **CO1: Illustrate fundamental properties and relations relevant to DFT and solve basic problems involving DFT-based filtering methods.** (Knowledge Level: K2)
    *   Understanding quantization noise informs the practical application of DFT, as it affects the signal being transformed. Poor quantization can lead to inaccurate DFT results, impacting filtering.
*   **CO4: Compute DFT efficiently using FFT method and to explain the architecture of a DSP processor.** (Knowledge Level: K2)
    *   This is the most direct alignment. Quantization noise is a critical characteristic of the input signal that the FFT will operate on. Its presence and magnitude influence the interpretation of FFT output, ensuring that the digital signal being processed is of sufficient quality.

---

This detailed study note provides a comprehensive overview of ADC quantization noise, its characteristics, and its relevance within the context of Digital Signal Processing, particularly concerning the efficient computation of the DFT using the FFT.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
