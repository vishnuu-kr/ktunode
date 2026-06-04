---
title: "FFT and FIR Filter realization on a fixed point processor -finite wordlength effects - Qu antization, rounding and truncation, overflow and scaling"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 4: FFT and FIR Filter realization on a fixed point processor "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b7f0"
status: "completed"
scrapedAt: "2026-05-20T16:46:17.165Z"
---
# Digital Signal Processing - Module 4: FFT and FIR Filter Realization on a Fixed-Point Processor

## Topic: FFT and FIR Filter Realization on a Fixed-Point Processor - Finite Wordlength Effects - Quantization, Rounding, and Truncation, Overflow and Scaling

### Learning Outcomes:

*   Understand the limitations of fixed-point arithmetic in DSP implementations.
*   Explain the different types of finite wordlength effects: quantization, rounding, truncation, overflow, and scaling.
*   Analyze the impact of quantization errors on signal-to-noise ratio (SNR) in FFT and FIR filter implementations.
*   Apply appropriate scaling techniques to mitigate overflow problems in fixed-point implementations.
*   Compare and contrast the effects of rounding and truncation.
*   Design fixed-point FFT and FIR filter implementations considering finite wordlength effects.

---

### 1. Introduction to Fixed-Point Arithmetic and its Limitations

*   **Fixed-Point Arithmetic:** A method of representing real numbers by fixing the position of the radix point (decimal or binary point).  This allows for efficient and often faster computations compared to floating-point arithmetic, especially in embedded systems.
*   **Fixed-Point Representation:**  Numbers are represented using a fixed number of bits, usually split into integer and fractional parts. For example, an "Qm.n" format uses 'm' bits for the integer part and 'n' bits for the fractional part.  The total word length is m+n bits.
*   **Limitations:**
    *   **Limited Dynamic Range:** The range of representable numbers is constrained by the number of integer bits.  Small numbers can suffer from loss of precision, while large numbers can cause overflow.
    *   **Quantization Errors:** Real numbers must be represented using a finite number of bits, resulting in quantization errors when converting analog signals or performing calculations.
    *   **Overflow:**  Occurs when the result of an arithmetic operation exceeds the maximum representable value.
    *   **Scaling Requirements:**  Careful scaling is required to prevent overflow and maintain sufficient precision.

**Example:** Consider a Q1.15 format (1 integer bit, 15 fractional bits).
*   Maximum representable value: 2<sup>1</sup> - 2<sup>-15</sup> ≈ 1.999969482
*   Minimum representable value (excluding negative): 2<sup>-15</sup> ≈ 0.000030517

### 2. Finite Wordlength Effects

#### 2.1 Quantization

*   **Definition:** The process of representing a continuous-amplitude signal (or a signal with higher precision) with a discrete set of amplitudes.  This happens when converting an analog signal to digital or when performing computations with limited precision in a digital system.
*   **Quantization Error:** The difference between the actual value and its quantized representation.
*   **Types of Quantization:**
    *   **Mid-Rise Quantizer:** Decision levels are at x = (2n + 1) * Q/2, where Q is the quantization step size and n is an integer.  The origin is not a quantization level.
    *   **Mid-Tread Quantizer:** Decision levels are at x = n * Q.  The origin is a quantization level.  Commonly used because it easily handles zero input.
*   **Quantization Noise Model:**  Under certain assumptions (fine quantization, input signal is sufficiently complex), the quantization error can be modeled as additive white noise.
    *   **Assumptions:**
        *   The quantization error is uniformly distributed over the interval [-Q/2, Q/2] (for rounding).
        *   The quantization error is uncorrelated with the input signal.
        *   The quantization errors are uncorrelated with each other.
    *   **Quantization Noise Power:**  σ<sup>2</sup> = Q<sup>2</sup> / 12, where Q is the quantization step size (least significant bit (LSB) value).  For a b-bit quantizer with a full-scale range of R, Q = R / 2<sup>b</sup>.

**Example:** An analog signal ranges from -1V to 1V.  A 4-bit quantizer is used.
*   Full-scale range R = 2V.
*   Quantization step size Q = 2V / 2<sup>4</sup> = 2V / 16 = 0.125V.
*   Quantization noise power σ<sup>2</sup> = (0.125)<sup>2</sup> / 12 ≈ 0.0013 V<sup>2</sup>.

#### 2.2 Rounding and Truncation

*   **Rounding:** Approximates the real number to the nearest representable value.  This is generally preferred because it minimizes the average quantization error.
*   **Truncation:** Discards the least significant bits, effectively rounding down to the nearest representable value. This is biased and introduces a non-zero mean error.
*   **Error Characteristics:**
    *   **Rounding:** The quantization error is uniformly distributed between -Q/2 and +Q/2.
    *   **Truncation:** The quantization error is uniformly distributed between -Q and 0 (for unsigned truncation) or between 0 and +Q (for signed truncation).
*   **Impact on SNR:** Rounding generally provides a better SNR than truncation because it has a lower mean error.

**Example:**  Consider the number 3.14159 and a Q2.2 format (2 integer bits, 2 fractional bits).
*   **Rounding:** 3.14159 rounds to 3.25 (in decimal representation).
*   **Truncation:** 3.14159 truncates to 3.00 (in decimal representation).

#### 2.3 Overflow

*   **Definition:** Occurs when the result of an arithmetic operation exceeds the maximum representable value in the fixed-point format.
*   **Types of Overflow:**
    *   **Saturation Arithmetic:**  When overflow occurs, the result is clipped to the maximum (or minimum) representable value.
    *   **Wrap-Around Arithmetic:** When overflow occurs, the result wraps around to the other end of the representable range.  This can lead to large and unpredictable errors.
*   **Detection:** Overflow can be detected by monitoring the most significant bits during computation.
*   **Mitigation:**
    *   **Scaling:** Reduce the magnitude of the input signal or intermediate results.
    *   **Increasing Wordlength:** Use a larger number of bits to represent the signals (more costly).
    *   **Saturation Arithmetic:** Limiting the output to the maximum or minimum value (introduces distortion but prevents large errors).

**Example:** Consider a Q3.0 format (3 integer bits, 0 fractional bits).  The maximum representable value is 2<sup>3</sup> - 1 = 7.
*   If we add 5 + 4, the result should be 9.
*   With wrap-around arithmetic, 9 modulo 8 = 1, so the output would be 1.
*   With saturation arithmetic, the output would be 7 (the maximum value).

#### 2.4 Scaling

*   **Definition:** The process of multiplying a signal by a constant factor to reduce its magnitude.  This is essential in fixed-point implementations to prevent overflow and improve precision.
*   **Scaling Methods:**
    *   **Amplitude Scaling:**  Scale the input signal by a factor less than 1.  The choice of scaling factor depends on the maximum possible amplitude of the signal and the dynamic range of the fixed-point format.
    *   **Stage-by-Stage Scaling:**  Scale the intermediate results at each stage of the computation. This is particularly useful in multi-stage algorithms like the FFT.  L<sub>∞</sub> or L<sub>2</sub> norms can be used to determine appropriate scaling factors.
*   **Trade-offs:** Scaling reduces the risk of overflow but can also reduce the SNR if the signal becomes too small.

**Example:**  Consider implementing the FFT of a signal with a maximum amplitude of 2 in a Q1.15 format.  Since the maximum representable value in Q1.15 is approximately 2, we could scale the input signal by a factor of 0.5 (or even lower) to ensure that intermediate calculations do not overflow.

### 3. FFT and FIR Filter Realization Considerations

#### 3.1 FFT Implementation

*   **Butterfly Operations:** The FFT algorithm involves a series of butterfly operations, which involve additions, subtractions, and multiplications. These operations can lead to signal growth and potential overflow.
*   **Scaling in FFT:**
    *   **Fixed-point FFT:** Scale by 1/2 (right shift by 1 bit) after each stage of the FFT to prevent overflow. This reduces the signal amplitude by a factor of 2 at each stage.  Alternatively, use block floating point.
    *   **Block Floating-Point FFT:** Keep track of the largest exponent in a block of data and adjust the exponents accordingly.  All numbers within a block share the same exponent.
*   **Twiddle Factors:** Twiddle factors are complex exponentials that are multiplied with the data at each stage of the FFT.  These also need to be quantized, which introduces additional quantization errors.

#### 3.2 FIR Filter Implementation

*   **Direct Form:** Simple structure, but susceptible to coefficient quantization effects, especially for narrow-band filters.
*   **Cascade Form:** Decomposes the FIR filter into a series of second-order sections.  This can improve the sensitivity to coefficient quantization and allow for better scaling strategies.
*   **Coefficient Quantization:** Quantizing the filter coefficients changes the frequency response of the filter.  The sensitivity of the frequency response to coefficient quantization depends on the filter structure and the filter order.
*   **Scaling in FIR Filters:** Scale the input signal and/or the intermediate results to prevent overflow.  L<sub>1</sub> scaling (scaling based on the sum of absolute values of the impulse response) is commonly used.

### 4. Key Concepts and Definitions Review

*   **Qm.n Format:** A fixed-point representation with 'm' integer bits and 'n' fractional bits.
*   **Quantization Step Size (Q):** The smallest difference between two representable values.
*   **Quantization Noise Power (σ<sup>2</sup>):**  A measure of the power of the quantization error.
*   **Signal-to-Noise Ratio (SNR):**  The ratio of the signal power to the noise power.
*   **Overflow:** Occurs when the result of an arithmetic operation exceeds the maximum representable value.
*   **Scaling:**  The process of multiplying a signal by a constant factor to reduce its magnitude.

### 5. Important Points to Remember

*   Finite wordlength effects are inherent in fixed-point DSP implementations.
*   Quantization, rounding, and truncation introduce errors that can degrade the performance of the system.
*   Overflow can lead to large and unpredictable errors.
*   Scaling is essential to prevent overflow and improve precision.
*   The choice of fixed-point format, quantization method, and scaling strategy depends on the specific application and the desired performance.
*   Understanding the trade-offs between precision, dynamic range, and computational complexity is crucial for designing efficient fixed-point DSP systems.

### 6. Practice Questions/Exercises

**Q1:**  A signal with a range of -5V to +5V is quantized using an 8-bit uniform quantizer.

**(a)** What is the quantization step size?
**(b)** What is the quantization noise power?
**(c)** If the input signal is a sinusoid with an amplitude of 3V, what is the signal-to-quantization noise ratio (SQNR) in dB?

**Answer:**

**(a)** Quantization step size Q = (10V) / 2<sup>8</sup> = 10/256 V ≈ 0.039 V

**(b)** Quantization noise power σ<sup>2</sup> = Q<sup>2</sup> / 12 = (0.039)<sup>2</sup> / 12 ≈ 0.000127 V<sup>2</sup>

**(c)** Signal power = (A<sup>2</sup>)/2 = (3<sup>2</sup>)/2 = 4.5 V<sup>2</sup>
SQNR = 10 * log10(Signal power / Quantization noise power) = 10 * log10(4.5 / 0.000127) ≈ 45.5 dB

**Q2:**  Explain the difference between rounding and truncation in the context of fixed-point arithmetic.  Which method generally provides a better SNR?  Why?

**Answer:** Rounding approximates a number to the nearest representable value, while truncation simply discards the least significant bits.  Rounding generally provides a better SNR because the quantization error is uniformly distributed around zero (zero mean), while the error for truncation is biased (non-zero mean), leading to a DC offset.

**Q3:**  Why is scaling necessary in fixed-point FFT implementations? Describe a common scaling method used in fixed-point FFTs.

**Answer:** Scaling is necessary in fixed-point FFT implementations to prevent overflow. The butterfly operations in the FFT can lead to signal growth, and without scaling, the intermediate results may exceed the maximum representable value. A common scaling method is to scale by 1/2 (right shift by 1 bit) after each stage of the FFT. This ensures that the signal amplitude does not grow excessively and helps prevent overflow.

**Q4:**  A FIR filter has coefficients {0.2, 0.5, 0.3}. The input signal has a maximum amplitude of 1.  Determine if scaling is necessary to prevent overflow assuming a direct-form realization using Q1.15 format for intermediate results. Justify your answer.

**Answer:** In a direct-form FIR filter, the maximum possible output amplitude is bounded by the sum of the absolute values of the coefficients multiplied by the maximum input amplitude. In this case, the sum of the absolute values of the coefficients is |0.2| + |0.5| + |0.3| = 1.  Since the maximum input amplitude is also 1, the maximum possible output amplitude is 1 * 1 = 1.  Since 1 is less than the maximum representable value in Q1.15, scaling may not be absolutely necessary, *but* it's good practice to implement some safety margin since this is the theoretical maximum. If the maximum input amplitude can fluctuate, scaling is highly recommended. The best practice is always to determine the maximum possible amplitude of the signal *after* each computation step and compare that to the maximum value supported by your fixed point format. If the possible signal value is larger than the fixed point representation allows, scale it.

**Q5:** Consider a fixed-point system using a Q3.5 format. What is the range of values that can be represented in this system?

**Answer:**  Q3.5: 3 integer bits, 5 fractional bits.

*   Largest Positive Number: (2<sup>3</sup> - 1) + (1 - 2<sup>-5</sup>) = 7 + (1 - 0.03125) = 7.96875
*   Smallest Negative Number: -2<sup>3</sup> = -8
*   Range: [-8, 7.96875]

---
This comprehensive set of notes covers the key aspects of FFT and FIR filter realization on a fixed-point processor, focusing on finite wordlength effects and mitigation techniques.  Remember to apply these concepts in practical implementations to gain a deeper understanding. Good luck!
