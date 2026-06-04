---
title: "DSP computational error"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 3: Realization structures for FIR filters"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b7ed"
status: "completed"
scrapedAt: "2026-05-20T16:46:15.733Z"
---
# DIGITAL SIGNAL PROCESSING - Module 3: FIR Filter Realization Structures - DSP Computational Error

## Introduction

This module delves into the effects of finite word-length (FWL) on the performance of Digital Signal Processing (DSP) systems, specifically focusing on FIR filters.  A crucial aspect is understanding the errors introduced during computation due to quantization and other related issues. These errors can significantly degrade filter performance and must be considered during design.

**Learning Outcomes:**

Upon completion of this section, you should be able to:

*   Understand the sources of computational error in DSP systems.
*   Analyze the effects of coefficient quantization on FIR filter frequency response.
*   Analyze the effects of quantization on input signal and filter operations.
*   Quantify the error introduced by A/D conversion.
*   Understand and mitigate the impact of limit cycles.

## 1. Sources of Computational Error in DSP Systems

DSP systems, while theoretically ideal, are limited by the finite precision of digital hardware. This leads to several sources of error:

*   **Analog-to-Digital (A/D) Conversion Error (Quantization Error):** The process of converting an analog signal into a digital representation introduces quantization error. The continuous amplitude of the analog signal is approximated by a discrete value from a finite set of possible levels.

*   **Coefficient Quantization Error:** Filter coefficients, which ideally are real numbers, are represented using a finite number of bits. This quantization alters the filter's desired characteristics.

*   **Arithmetic Round-off Error:**  Arithmetic operations (multiplication, addition) performed within the DSP processor produce results that often require more bits than are available for storage. The results are then rounded or truncated to fit the available word length, introducing round-off error.  This also affects the noise generated during processing.

*   **Overflow Error:** Occurs when the result of an arithmetic operation exceeds the maximum value that can be represented with the available word length. This can lead to severe distortion of the signal.

*   **Limit Cycles:**  Self-sustained oscillations can occur in recursive (IIR) filters even with zero input. They are caused by quantization effects and can degrade filter performance. While primarily an IIR filter concern, understand that overflows in FIR filters with feedback can also cause issues.

## 2. Coefficient Quantization Error

Coefficient quantization changes the filter's transfer function, resulting in a deviation from the desired frequency response.

*   **Effect on Frequency Response:**  The quantized coefficients, denoted as *h<sub>q</sub>[n]*, differ from the ideal coefficients, *h[n]*. This difference, Δ*h[n]* = *h[n]* - *h<sub>q</sub>[n]*, impacts the frequency response *H(ω)*.  Small changes in coefficient values can lead to significant shifts in pole and zero locations, and consequently the frequency response.  The sensitivity of the frequency response to coefficient quantization is highest near poles and zeros.

*   **Analysis of Coefficient Quantization Error:**  Consider a filter with transfer function *H(z)*. Quantizing the coefficients transforms it to *H<sub>q</sub>(z)*. The error can be analyzed by examining the difference:

    *   Error Magnitude: | *H(e<sup>jω</sup>)* - *H<sub>q</sub>(e<sup>jω</sup>)* |
    *   Error Phase: ∠ *H(e<sup>jω</sup>)* - ∠ *H<sub>q</sub>(e<sup>jω</sup>)*

*   **Example:** Consider an FIR filter with coefficients *h[0] = 0.25, h[1] = 0.5, h[2] = 0.25*. If these coefficients are quantized to 2 bits (including the sign bit), they might become *h<sub>q</sub>[0] = 0.25, h<sub>q</sub>[1] = 0.5, h<sub>q</sub>[2] = 0.25* (no change because they are already powers of 0.5). However, if the coefficients were *h[0] = 0.26, h[1] = 0.51, h[2] = 0.26*, then they would become *h<sub>q</sub>[0] = 0.25, h<sub>q</sub>[1] = 0.50, h<sub>q</sub>[2] = 0.25*. Calculating and plotting the frequency responses *H(e<sup>jω</sup>)* and *H<sub>q</sub>(e<sup>jω</sup>)* will reveal the impact of quantization on the filter's performance.  A simulation with floating-point coefficients vs. quantized coefficients will demonstrate the error.

*   **Mitigation Techniques:**
    *   **Increase Word Length:** Using more bits to represent coefficients reduces the quantization error.
    *   **Filter Structure Optimization:** Some filter structures (e.g., direct form, cascade form, linear phase FIR filters) are less sensitive to coefficient quantization than others.  For example, cascading second-order sections (biquads) can often reduce the impact of quantization compared to a single high-order direct form implementation.
    *   **Coefficient Sensitivity Analysis:**  Identify the coefficients that are most sensitive to quantization and use more bits for those coefficients.

## 3. Quantization on Input Signal and Filter Operations (A/D & Round-off Noise)

Quantization errors occur during both A/D conversion and within the filter computations (multiplication and addition).

*   **Input Quantization:** The A/D converter transforms the analog input *x<sub>a</sub>(t)* into a digital signal *x[n]*. This process approximates the continuous amplitude with a discrete set of levels. The difference between the analog signal and its quantized version is the *quantization noise*, *e[n]*.

    *   **Quantization Noise Model:**  Often modeled as a white noise process, uniformly distributed between -Δ/2 and Δ/2, where Δ is the quantization step size (the difference between two adjacent quantization levels).  This is often a valid assumption if the input signal is complex and significantly larger than the quantization step size.

    *   **Quantization Noise Power:** The power of the quantization noise is σ<sup>2</sup> = Δ<sup>2</sup>/12. Since Δ = 2<sup>-B</sup> * V<sub>FS</sub> , where *B* is the number of bits and *V<sub>FS</sub>* is the full-scale voltage range, σ<sup>2</sup> = (V<sub>FS</sub>)<sup>2</sup> / (12 * 2<sup>2B</sup>).  Therefore, increasing the number of bits *B* significantly reduces the quantization noise power.

*   **Arithmetic Round-off Error:** After multiplication and addition, the result is rounded or truncated to fit the available word length. This introduces round-off noise, which can accumulate over multiple operations.

    *   **Analysis of Round-off Noise:** Each multiplication introduces a round-off error. For an FIR filter, the total round-off noise power at the output depends on the number of multiplications and the round-off error power of each multiplication.

    *   **Example:** In an FIR filter with *N* taps, each input sample is multiplied by *N* coefficients.  If each multiplication introduces a round-off error with power σ<sup>2</sup>, the total output noise power is approximately *Nσ<sup>2</sup>* (assuming the errors are uncorrelated).

    *   **Mitigation Techniques:**
        *   **Increase Word Length:** The most effective way to reduce quantization and round-off errors.
        *   **Scaling:** Scaling the input signal or filter coefficients can prevent overflow and reduce the accumulation of round-off noise.  Proper scaling keeps the intermediate values within the dynamic range of the processor.
        *   **Different Arithmetic:** Techniques like saturation arithmetic can prevent severe distortion due to overflow.
        *   **Noise Shaping (Advanced):** Techniques like noise shaping can push the quantization noise to frequencies where it is less noticeable.

## 4.  Quantifying A/D Conversion Error

A/D conversion introduces quantization error, whose magnitude is directly related to the resolution (number of bits) of the A/D converter.

*   **Signal-to-Quantization Noise Ratio (SQNR):**  A measure of the quality of the A/D conversion.  It is the ratio of the signal power to the quantization noise power.

    *   **Formula:**  SQNR = 10 log<sub>10</sub>(P<sub>signal</sub> / P<sub>noise</sub>), where P<sub>signal</sub> is the signal power and P<sub>noise</sub> is the quantization noise power.

    *   **Ideal SQNR (in dB):** SQNR ≈ 6.02*B + 1.76 (dB), where *B* is the number of bits in the A/D converter. This formula assumes that the input signal is a full-scale sine wave. This is a VERY important formula to remember.

*   **Example:** An A/D converter with 12 bits has an ideal SQNR of approximately 6.02 * 12 + 1.76 = 74 dB.

*   **Factors Affecting SQNR:**
    *   **Number of bits (B):** A higher number of bits results in a higher SQNR.
    *   **Input signal amplitude:**  The input signal should be appropriately scaled to utilize the full dynamic range of the A/D converter. If the signal is too small, the SQNR will be reduced.
    *   **A/D converter nonlinearity:**  Nonlinearities in the A/D converter can introduce distortion and reduce the SQNR.

## 5. Limit Cycles (and Overflow Considerations)

Limit cycles are self-sustained oscillations that can occur in recursive digital filters even in the absence of an input signal.  They are primarily a concern for IIR filters but are included here for completeness.

*   **Causes of Limit Cycles:**  Quantization effects in the feedback path of the filter can cause the filter's state to oscillate between a limited set of values.  Overflow can also lead to limit cycles (or more severe instability).

*   **Types of Limit Cycles:**
    *   **Zero-Input Limit Cycles:** Occur when the input is zero.
    *   **Overflow Limit Cycles:**  Occur due to overflow in the arithmetic operations.  Saturation arithmetic can help prevent overflow limit cycles.

*   **Example:** (Simplified) Consider a simple first-order IIR filter: *y[n] = a*y[n-1] + x[n]*. If 'a' is close to 1 and the input *x[n]* is zero, the quantization of *y[n-1]* can cause a small error that feeds back and sustains an oscillation.

*   **Mitigation Techniques (Mostly IIR, but concepts are applicable):**
    *   **Saturation Arithmetic:** Limits the output of an adder to the maximum or minimum representable value, preventing overflow.  This helps prevent large amplitude limit cycles.
    *   **Increase Word Length:** Reduces the quantization error and the likelihood of limit cycles.
    *   **Filter Structure:** Certain filter structures (e.g., cascade form using second-order sections) are less prone to limit cycles.
    *   **Dithering:** Adding a small amount of noise to the signal can break up the limit cycles.

*   **FIR Filters and Overflow:**  While FIR filters are inherently stable (no feedback), overflow can still occur, especially in fixed-point implementations or with poorly scaled signals.  If the FIR filter is implemented with feedback (e.g., using block processing techniques), overflow limit cycles *can* occur.

## Important Points to Remember

*   **Word Length Matters:**  The number of bits used to represent signals and coefficients has a significant impact on the performance of DSP systems.  Longer word lengths reduce quantization error and round-off noise.
*   **Trade-offs:** There is often a trade-off between performance (accuracy) and cost (hardware complexity, power consumption).
*   **Filter Structure:** The choice of filter structure can affect the sensitivity to coefficient quantization and round-off noise.
*   **Scaling is Crucial:** Proper scaling of the input signal and filter coefficients is essential to prevent overflow and optimize the SQNR.
*   **Simulate, Simulate, Simulate:**  Simulations are critical for evaluating the impact of finite word-length effects on filter performance. Use tools to compare the ideal floating-point behavior with the quantized fixed-point behavior.

## Practice Questions/Exercises

1.  **An A/D converter has 10 bits. What is the ideal Signal-to-Quantization Noise Ratio (SQNR) in dB?**
    *   **Answer:** SQNR ≈ 6.02 * 10 + 1.76 = 61.96 dB

2.  **Explain the difference between coefficient quantization error and round-off error.**
    *   **Answer:** Coefficient quantization error arises from representing filter coefficients with a finite number of bits, altering the filter's intended frequency response. Round-off error occurs during arithmetic operations (multiplication, addition) due to the limited word length, resulting in a truncation or rounding of the result.

3.  **How does increasing the word length affect the quantization noise power?**
    *   **Answer:** Increasing the word length *B* significantly *reduces* the quantization noise power.  The quantization noise power is inversely proportional to 2<sup>2B</sup>.

4.  **Why is it important to scale the input signal before A/D conversion?**
    *   **Answer:** Scaling the input signal ensures that it utilizes the full dynamic range of the A/D converter. If the signal is too small, the SQNR will be reduced, and if the signal is too large, it will cause overflow.

5.  **What is a limit cycle, and how can it be mitigated?**
    *   **Answer:** A limit cycle is a self-sustained oscillation that can occur in recursive (IIR) digital filters even with zero input.  It is caused by quantization and/or overflow effects. Mitigation techniques include saturation arithmetic, increasing word length, and using appropriate filter structures. For FIR filters, ensure no feedback is present and scaling prevents overflows.

6.  **Consider an FIR filter defined by the coefficients h[0] = 0.75 and h[1] = 0.25. These coefficients are quantized to 3 bits (including the sign bit) using rounding. What are the quantized coefficient values? Express the results as decimal numbers.**
    *   **Answer:** With 3 bits (including sign), we have 2 bits for the magnitude. The quantization levels are then -1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75. Rounding 0.75 remains 0.75.  Rounding 0.25 remains 0.25.  Therefore, h<sub>q</sub>[0] = 0.75 and h<sub>q</sub>[1] = 0.25. In this specific case, no error occurred because the original values were exactly representable with 3 bits.

7.  **Explain how the choice of filter structure (e.g., direct form vs. cascade form) can influence the sensitivity to coefficient quantization.**
    *   **Answer:**  Direct form structures can be highly sensitive to coefficient quantization, especially for high-order filters. Small changes in coefficient values can lead to significant shifts in pole and zero locations, and consequently the frequency response. Cascade form structures, which decompose the filter into a series of lower-order (e.g., second-order) sections, are often less sensitive because the impact of quantization is localized to each section.  Furthermore, optimal pole-zero pairing can further reduce quantization effects.

These notes provide a comprehensive overview of DSP computational error in the context of FIR filter realization structures. Remember to supplement these notes with further reading and practice exercises to solidify your understanding. Good luck!
