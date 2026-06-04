---
title: "Multiplication"
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Discrete"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b14f"
status: "completed"
scrapedAt: "2026-05-20T16:15:40.561Z"
---
## Signals and Systems: Module 2 (Discrete) - Multiplication

These notes cover the topic of multiplication in the context of discrete-time signals and systems.

**1. Learning Outcomes:**

*   Understand the concept of multiplying two discrete-time signals.
*   Be able to perform multiplication operations on discrete-time signals.
*   Recognize the effects of multiplication in the time domain.
*   Apply multiplication as a system operation.
*   Analyze the relationship between multiplication and other signal processing operations.

**2. Key Concepts and Definitions:**

*   **Discrete-Time Signal:** A sequence of numbers, denoted as x[n], where 'n' is an integer representing the discrete time index.
*   **Multiplication of Discrete-Time Signals:** The pointwise multiplication of two discrete-time signals x[n] and y[n] results in a new discrete-time signal z[n] where z[n] = x[n] * y[n] for all n.
*   **Pointwise Multiplication:**  The value of the resulting signal at each time index 'n' is the product of the values of the input signals at that same index.
*   **System Operation:** Multiplication can be considered as a system that takes two signals as input and produces their product as output.  This is generally a memoryless system (the output at time 'n' depends only on the inputs at time 'n').
*   **Amplitude Modulation (AM):**  Multiplication is a fundamental building block of Amplitude Modulation, where a message signal is multiplied by a carrier signal.

**3. Multiplication of Discrete-Time Signals**

*   **Definition:** Given two discrete-time signals, x[n] and y[n], their product, denoted as z[n], is defined as:

    z[n] = x[n] * y[n]  for all integers n

*   **Process:** For each value of 'n', multiply the corresponding values of x[n] and y[n] to obtain z[n].

*   **Example:**

    Let x[n] = {2, 1, -1, 0, 3} and y[n] = {1, -2, 0, 4, -1}, both defined for n = 0 to 4.  (Assuming the first element is at n=0)

    Then, z[n] = x[n] * y[n] is calculated as follows:

    *   z[0] = x[0] * y[0] = 2 * 1 = 2
    *   z[1] = x[1] * y[1] = 1 * (-2) = -2
    *   z[2] = x[2] * y[2] = -1 * 0 = 0
    *   z[3] = x[3] * y[3] = 0 * 4 = 0
    *   z[4] = x[4] * y[4] = 3 * (-1) = -3

    Therefore, z[n] = {2, -2, 0, 0, -3} for n = 0 to 4.

*   **Important Note:** Multiplication is a memoryless operation because the output at any time 'n' depends only on the inputs at that same time 'n'. It does *not* depend on past or future values of the input signals.

**4. Effects of Multiplication in the Time Domain**

*   **Amplitude Scaling:** Multiplication can scale the amplitude of one signal by another. For example, if y[n] is a constant value 'A', then z[n] = A * x[n] simply scales the amplitude of x[n] by 'A'.
*   **Signal Gating/Windowing:** Multiplication by a rectangular window can extract a portion of a signal. For instance, let w[n] be a rectangular window defined as:

    w[n] = 1 for 0 <= n <= N-1
    w[n] = 0 otherwise

    Then, z[n] = x[n] * w[n] will extract only the values of x[n] from n=0 to n=N-1, and set all other values to 0.  This is commonly used for signal analysis.
*   **Modulation:** Multiplication is the core operation in Amplitude Modulation (AM).  Multiplying a message signal m[n] by a carrier signal c[n] shifts the spectrum of the message signal to the frequency of the carrier signal.

**5. Multiplication as a System Operation**

*   **System Representation:** A system that performs multiplication can be represented as:

    y[n] = x1[n] * x2[n]

    where x1[n] and x2[n] are the input signals and y[n] is the output signal.
*   **Linearity:**  Multiplication is generally a *non-linear* operation. To be linear, the system must satisfy the superposition and scaling properties. Multiplication generally doesn't fulfill these. For example, if you double the input signals, the output will quadruple.
*   **Time Invariance:** Multiplication is generally a *time-invariant* operation.  If you delay the input signals by 'k' units, the output signal will also be delayed by 'k' units.  In other words, if  `y[n] = x1[n] * x2[n]`, then `y[n-k] = x1[n-k] * x2[n-k]`.
*   **Causality:** Multiplication is a *causal* system because the output at any time 'n' depends only on the inputs at that same time 'n', not on future values.
*   **Stability:**  The stability of a multiplication system depends on the input signals.  If both input signals are bounded (i.e., |x1[n]| < B1 and |x2[n]| < B2 for all n, where B1 and B2 are finite constants), then the output signal is also bounded (|y[n]| < B1 * B2 for all n), and the system is stable.

**6. Relationship to Other Signal Processing Operations**

*   **Convolution:** Multiplication in the time domain corresponds to convolution in the frequency domain (and vice-versa). This is a fundamental duality in signal processing. This will be covered in more detail when you study the Discrete-Time Fourier Transform (DTFT) and Z-Transform.
*   **Addition:** Multiplication and addition are often used together in complex signal processing systems.  For instance, after multiplication, you might add a constant value (DC offset) to the signal.
*   **Scaling:** Scaling is a special case of multiplication where one of the signals is a constant.
*   **Quantization:** In digital signal processing, after multiplication, the signal might need to be quantized to fit within a certain bit depth.

**7. Examples**

*   **AM Radio:** A radio transmitter multiplies an audio signal (the message) by a high-frequency carrier wave.  This modulated signal is then transmitted through the air.  The receiver performs a demodulation process to recover the original audio signal.
*   **Image Processing:**  Pointwise multiplication can be used in image processing to adjust the brightness or contrast of an image. One image can be multiplied by another for blending or special effects.  For instance, masking an image involves multiplying the image by a binary mask.

**8. Practice Questions/Exercises**

1.  **Problem:** Given x[n] = {1, 2, 3, 4} and y[n] = {4, 3, 2, 1} for n = 0 to 3, find z[n] = x[n] * y[n].

    **Solution:**
    *   z[0] = x[0] * y[0] = 1 * 4 = 4
    *   z[1] = x[1] * y[1] = 2 * 3 = 6
    *   z[2] = x[2] * y[2] = 3 * 2 = 6
    *   z[3] = x[3] * y[3] = 4 * 1 = 4

    Therefore, z[n] = {4, 6, 6, 4} for n = 0 to 3.

2.  **Problem:** Let x[n] = cos(0.1πn) and w[n] be a rectangular window defined as:

    w[n] = 1 for 0 <= n <= 9
    w[n] = 0 otherwise

    What is the effect of multiplying x[n] by w[n]?

    **Solution:** Multiplying x[n] by w[n] extracts the first 10 samples (n = 0 to 9) of the cosine wave x[n] and sets all other samples to zero.  This effectively isolates a segment of the cosine wave.

3.  **Problem:** Two signals, x1[n] and x2[n] are bounded by 5 and 10 respectively (i.e. |x1[n]| <= 5 and |x2[n]| <= 10 for all n).  If y[n] = x1[n] * x2[n], what is the bound on y[n]?

    **Solution:** Since |x1[n]| <= 5 and |x2[n]| <= 10, then |y[n]| = |x1[n] * x2[n]| = |x1[n]| * |x2[n]| <= 5 * 10 = 50.  Therefore, y[n] is bounded by 50.

4. **Problem:** Is the system defined by y[n] = x[n] * x[n] (squaring the input) linear? Justify your answer.

   **Solution:** No, the system is not linear.  Consider the superposition property:

   * Let x1[n] produce y1[n] = x1[n] * x1[n]
   * Let x2[n] produce y2[n] = x2[n] * x2[n]

   If the system were linear, the input x1[n] + x2[n] should produce the output y1[n] + y2[n].  However, the actual output for x1[n] + x2[n] is:

   (x1[n] + x2[n]) * (x1[n] + x2[n]) = x1[n]^2 + 2*x1[n]*x2[n] + x2[n]^2 = y1[n] + y2[n] + 2*x1[n]*x2[n]

   Since the output contains an extra term (2*x1[n]*x2[n]), the superposition property is not satisfied, and the system is non-linear.
**9. Important Points to Remember:**

*   Multiplication is a pointwise operation.
*   Multiplication is generally a *non-linear* but *time-invariant* operation.
*   Multiplication is a memoryless operation.
*   Multiplication is fundamental to many signal processing techniques, including amplitude modulation and windowing.
*   Understanding the properties of multiplication is crucial for analyzing and designing discrete-time systems.

These notes provide a comprehensive overview of multiplication in the context of discrete-time signals and systems.  Remember to practice with examples and exercises to solidify your understanding. Good luck!
