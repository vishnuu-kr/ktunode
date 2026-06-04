---
title: "Simple IIR digital filters (Low pass and high pass)"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 2: Types of transfer functions"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b7e4"
status: "completed"
scrapedAt: "2026-05-20T16:46:10.116Z"
---
## DIGITAL SIGNAL PROCESSING - Module 2: Types of Transfer Functions - Simple IIR Digital Filters (Low Pass and High Pass)

**Learning Outcomes:**

*   Understand the basic structure and characteristics of IIR filters.
*   Design simple IIR low-pass filters using the impulse invariance method.
*   Design simple IIR high-pass filters using the impulse invariance method.
*   Understand the frequency response characteristics of simple IIR low-pass and high-pass filters.
*   Be able to implement simple IIR filters using difference equations.

**1. Introduction to IIR Filters**

*   **Definition:** Infinite Impulse Response (IIR) filters are digital filters whose impulse response theoretically lasts infinitely long. They utilize feedback, meaning past output values are used to compute the current output.

*   **Characteristics:**
    *   **Feedback:** This is the defining characteristic of IIR filters. They use past output samples in the computation of the current output.
    *   **Impulse Response:** The impulse response, h[n], is infinite in duration.
    *   **Stability:**  Feedback can lead to instability if not designed correctly.  Stability is a critical design consideration.
    *   **Efficiency:** Can achieve sharp cut-off with fewer coefficients compared to FIR filters.  This can translate to less computation.
    *   **Phase Response:** Typically non-linear phase response.  This can introduce distortion in some applications.
    *   **Transfer Function:** The transfer function, H(z), of an IIR filter has both poles and zeros (except in trivial cases).

*   **General Form of IIR Filter Transfer Function:**

    ```
    H(z) = Y(z)/X(z) = (b0 + b1*z^-1 + b2*z^-2 + ... + bM*z^-M) / (a0 + a1*z^-1 + a2*z^-2 + ... + aN*z^-N)
    ```

    Where:
    *   `Y(z)` is the Z-transform of the output signal.
    *   `X(z)` is the Z-transform of the input signal.
    *   `b0, b1, ..., bM` are the feedforward coefficients (numerator coefficients).
    *   `a0, a1, ..., aN` are the feedback coefficients (denominator coefficients). Importantly, `a0` is often normalized to 1.
    *   `M` is the order of the numerator polynomial (number of zeros).
    *   `N` is the order of the denominator polynomial (number of poles).

*   **Difference Equation Representation:**

    The transfer function can be converted to a difference equation, which is how the filter is actually implemented. The difference equation corresponding to the above transfer function (assuming `a0 = 1`) is:

    ```
    y[n] = b0*x[n] + b1*x[n-1] + ... + bM*x[n-M] - a1*y[n-1] - a2*y[n-2] - ... - aN*y[n-N]
    ```

**2. Designing Simple IIR Low-Pass Filters using Impulse Invariance**

*   **Impulse Invariance Method:**  This method aims to match the impulse response of the digital filter to a sampled version of the impulse response of an analog prototype filter.

*   **Steps for designing a Simple IIR Low-Pass Filter (Impulse Invariance):**

    1.  **Choose an Analog Prototype:** Start with an analog low-pass filter transfer function, `Ha(s)`.  A simple first-order Butterworth filter is often used: `Ha(s) = Omega_c / (s + Omega_c)`
        *   `Omega_c` is the analog cut-off frequency (in rad/s).

    2.  **Partial Fraction Expansion (if needed):** If `Ha(s)` is more complex than a first-order filter, perform a partial fraction expansion to express it as a sum of simpler terms.  For the simple first-order example, this step is not needed.

    3.  **Apply Impulse Invariance Transformation:**  Replace each term of the form `1/(s + a)` in `Ha(s)` with `T / (1 - e^(-aT) * z^-1)`.  Equivalently:
        * `H(z) = Ha(s)|_{s = (1/T)ln(z)}`
        *   `T` is the sampling period (seconds/sample).  `T = 1/fs`, where `fs` is the sampling frequency.
        *   For the first-order Butterworth example: `H(z) = (Omega_c * T) / (1 - e^(-Omega_c * T) * z^-1)`

    4.  **Normalize (Optional):**  Adjust the gain to ensure the filter has a desired gain at a specific frequency (e.g., DC gain of 1).

    5.  **Convert to Difference Equation:**  Rearrange the transfer function `H(z)` into the form `Y(z)/X(z)` and then convert it into a difference equation.

*   **Example:** Design a first-order IIR low-pass filter using the impulse invariance method with a cut-off frequency of 1 kHz and a sampling frequency of 8 kHz.

    1.  `Omega_c = 2*pi*1000 = 2000*pi rad/s`
    2.  `Ha(s) = (2000*pi) / (s + 2000*pi)`
    3.  `T = 1/8000 = 0.000125 s`
    4.  `H(z) = (2000*pi * 0.000125) / (1 - e^(-2000*pi * 0.000125) * z^-1)`
    5.  `H(z) = 0.7854 / (1 - 0.2079 * z^-1)`
    6.  `H(z) = Y(z)/X(z) = 0.7854 / (1 - 0.2079 * z^-1)`
    7.  `Y(z) * (1 - 0.2079 * z^-1) = 0.7854 * X(z)`
    8.  `y[n] - 0.2079 * y[n-1] = 0.7854 * x[n]`
    9.  **Difference Equation:** `y[n] = 0.7854 * x[n] + 0.2079 * y[n-1]`

**3. Designing Simple IIR High-Pass Filters using Impulse Invariance**

*   **Steps for designing a Simple IIR High-Pass Filter (Impulse Invariance):**

    1.  **Analog Prototype:**  Start with an analog low-pass filter, `Ha(s)`. The design then transforms this LPF to an HPF

    2.  **LPF to HPF Transformation (Analog):**  Perform an analog frequency transformation to convert the analog low-pass filter, `Ha(s)`, into an analog high-pass filter, `Ha_hp(s)`.  The most common transformation is:  `s -> Omega_c^2 / s`. This replaces every `s` in `Ha(s)` with `Omega_c^2 / s`, where `Omega_c` is the desired analog cut-off frequency for the high-pass filter.
        *Example: Given `Ha(s) = Omega_c / (s + Omega_c)`, then `Ha_hp(s) = Omega_c / (Omega_c^2/s + Omega_c) = s / (s + Omega_c)`

    3.  **Partial Fraction Expansion (if needed):**  Perform partial fraction expansion *after* the analog transformation, if necessary.

    4.  **Impulse Invariance Transformation:** Apply the impulse invariance transformation (replace each term of the form `1/(s + a)` in `Ha_hp(s)` with `T / (1 - e^(-aT) * z^-1)`).

    5.  **Normalize (Optional):**  Adjust the gain.

    6.  **Convert to Difference Equation:**  Rearrange the transfer function `H(z)` into the form `Y(z)/X(z)` and then convert it into a difference equation.

*   **Example:** Design a first-order IIR high-pass filter using the impulse invariance method with a cut-off frequency of 1 kHz and a sampling frequency of 8 kHz.

    1. `Omega_c = 2*pi*1000 = 2000*pi rad/s`
    2.  Analog LPF Prototype:  `Ha(s) = (2000*pi) / (s + 2000*pi)`
    3.  LPF to HPF Transformation: `Ha_hp(s) = s / (s + 2000*pi)`
    4.  `T = 1/8000 = 0.000125 s`
    5.  To apply Impulse Invariance we'll transform `Ha_hp(s)` to `Ha_hp(s) = 1 - (2000*pi) / (s + 2000*pi)`
    6. Applying Impulse Invariance yields `H(z) = 1 - (2000*pi*T)/(1-e^(-2000*pi*T)*z^-1)`
    7. Simplified: `H(z) = 1 - 0.7854 / (1 - 0.2079 * z^-1) = (1 - 0.2079z^-1 - 0.7854)/(1-0.2079z^-1) = (0.7921 - 0.2079z^-1)/(1-0.2079z^-1)`
    8. `H(z) = Y(z)/X(z) = (0.2146-0.0561*z^-1) / (1 - 0.2079 * z^-1)`
    9. `Y(z)*(1 - 0.2079*z^-1) = X(z)*(0.7921 - 0.2079z^-1)`
    10. **Difference Equation:** `y[n] = 0.7921*x[n] - 0.2079*x[n-1] + 0.2079*y[n-1]`

**4. Frequency Response of IIR Filters**

*   **Magnitude Response:**  Shows how the filter attenuates or amplifies different frequency components.  For a low-pass filter, the magnitude response is high for low frequencies and low for high frequencies.  The opposite is true for a high-pass filter.

*   **Phase Response:** Shows the phase shift introduced by the filter at different frequencies.  IIR filters generally have non-linear phase responses, which can cause distortion.

*   **Cut-off Frequency:**  The frequency at which the magnitude response is typically -3dB (or 0.707) of the maximum value.

*   **Pole-Zero Plot:** A plot of the poles and zeros of the transfer function in the complex z-plane.  The location of poles and zeros significantly influences the filter's frequency response and stability.  For stability, all poles must lie *inside* the unit circle in the z-plane.

**5. Implementation using Difference Equations**

*   As shown in the examples, the transfer function H(z) can be converted into a difference equation.

*   The difference equation describes how to compute the output signal y[n] based on the current and past input samples x[n], x[n-1], ... and the past output samples y[n-1], y[n-2], ...

*   Implementing the difference equation in software or hardware realizes the filter.

**6. Important Points to Remember:**

*   **Stability:**  Ensuring IIR filters are stable is crucial. Check that all poles of the transfer function lie *inside* the unit circle in the z-plane.
*   **Pre-warping:** For some design techniques (e.g., bilinear transform - not covered here), pre-warping the analog cut-off frequency is necessary to compensate for frequency distortion introduced by the transformation.  Impulse invariance *does not* require pre-warping, but it is prone to aliasing if the analog signal has significant frequency content beyond the Nyquist frequency.
*   **Sampling Frequency:**  Choose an appropriate sampling frequency, `fs`, to avoid aliasing.  The Nyquist frequency (`fs/2`) must be greater than the highest frequency component of the input signal.
*   **Choice of Filter Type:**  Consider the trade-offs between FIR and IIR filters. IIR filters can achieve sharp cut-offs with fewer coefficients, but they typically have non-linear phase responses.

**Practice Questions/Exercises:**

1.  **Design a simple IIR low-pass filter using impulse invariance with a cut-off frequency of 500 Hz and a sampling frequency of 4 kHz. Derive the difference equation.**

    *   **Answer:**
        *   `Omega_c = 2*pi*500 = 1000*pi rad/s`
        *   `Ha(s) = (1000*pi) / (s + 1000*pi)`
        *   `T = 1/4000 = 0.00025 s`
        *   `H(z) = (1000*pi * 0.00025) / (1 - e^(-1000*pi * 0.00025) * z^-1)`
        *   `H(z) = 0.7854 / (1 - 0.4449 * z^-1)`
        *   `y[n] = 0.7854 * x[n] + 0.4449 * y[n-1]`

2.  **Describe the key difference between FIR and IIR filters in terms of their impulse response and feedback.**

    *   **Answer:** FIR filters have a finite impulse response and do not use feedback. IIR filters have an infinite impulse response and use feedback.

3.  **Explain why stability is a crucial consideration when designing IIR filters.**

    *   **Answer:** Because IIR filters use feedback, an improperly designed filter can become unstable, causing the output to grow without bound, even with a bounded input. Stability is ensured if all poles of the transfer function lie inside the unit circle in the z-plane.

4.  **Explain the concept of analog prototype transformation and its use in the design of IIR filters. Give an example for how the concept can be implemented**

    *   **Answer:** Analog prototype transformation allows the initial design to start with an analog filter that meets a specific requirement. We then perform a transformation which converts it to a new specification, such as converting a low pass prototype filter into a high pass filter. This method is used in designing IIR filters as the final IIR filter design will be based on a stable and reliable prototype filter. The transformation can be implemented mathematically by substituting `s -> Omega_c^2 / s` into the low pass prototype transfer function.

5.  **Design a simple IIR High pass filter using the impluse invariance method, with an analog prototype filter with transfer function `Ha(s) = (s + a) / (s + b)`, where a = 100 and b = 200. Let the cut off frequency be 500Hz, and the sampling frequency be 4000Hz.**

    *   **Answer:**
        *   `Omega_c = 2*pi*500 = 1000*pi rad/s`
        *   `T = 1/4000 = 0.00025 s`
        *   Express the original analog filter transfer function in terms suitable to take impulse invariance
        *   `Ha(s) = 1 + (a-b) / (s + b) = 1 - 100 / (s+200)`
        *   Take impulse invariance for H(z)
        *   `H(z) = 1 - (100 * T) / (1 - e^(-200*T)*z^-1) = 1 - (100 * 0.00025) / (1 - e^(-200*0.00025)*z^-1)`
        *   `H(z) = 1 - (0.025) / (1 - 0.9512*z^-1)`
        *   `H(z) = Y(z) / X(z) = (0.9762-0.9512*z^-1)/(1-0.9512*z^-1)`
        *   `y[n] = 0.9762*x[n] - 0.9512*x[n-1] + 0.9512*y[n-1]`
