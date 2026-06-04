---
title: "All pass and minimum phase transfer function Design of FIR filter : window based design (Rectangular, Hamming, Hanning windows)"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 2: Types of transfer functions"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b7e5"
status: "completed"
scrapedAt: "2026-05-20T16:46:10.817Z"
---
# DIGITAL SIGNAL PROCESSING - Module 2: Types of Transfer Functions

## Topic: All-Pass and Minimum Phase Transfer Functions, Design of FIR Filter: Window Based Design (Rectangular, Hamming, Hanning Windows)

**Learning Outcomes:**

*   Understand the characteristics of all-pass transfer functions.
*   Understand the characteristics of minimum phase transfer functions.
*   Understand and apply window-based design techniques for FIR filters.
*   Design FIR filters using Rectangular, Hamming, and Hanning windows.
*   Analyze the trade-offs between different window functions.

---

### 1. All-Pass Transfer Functions

*   **Definition:** An all-pass transfer function is a system function that has a magnitude response that is constant for all frequencies (typically normalized to unity), i.e., |H(ω)| = Constant, but has a non-constant phase response.
*   **Characteristics:**
    *   **Constant Magnitude Response:**  |H(ω)| = C for all ω.  C is typically 1.
    *   **Non-Linear Phase Response:** The phase response θ(ω) is a non-linear function of frequency.  This phase response introduces a frequency-dependent delay (group delay).
    *   **Applications:**  All-pass filters are primarily used to modify the phase response of a system without affecting its magnitude response.  Applications include:
        *   Phase equalization: Correcting phase distortion in communication channels.
        *   Group delay equalization: Compensating for varying group delay in a system.
*   **General Form:**
    *   Continuous-Time:  `H(s) = (s - z) / (s - p)`  where 'z' and 'p' are complex conjugate pairs, and `p = z*` (complex conjugate of z) but `Re{z} < 0`.
    *   Discrete-Time: `H(z) = (z⁻¹ - a*) / (1 - az⁻¹)`  where 'a' is a complex constant with |a| < 1, and 'a*' is the complex conjugate of a. Notice that the zero and pole are reciprocals with respect to the unit circle.  If 'a' is real, the expression simplifies to `H(z) = (z⁻¹ - a) / (1 - az⁻¹)`.

*   **Example (Discrete-Time):**

    Consider `H(z) = (z⁻¹ - 0.5) / (1 - 0.5z⁻¹)`

    *   Pole:  z = 0.5
    *   Zero:  z = 2

    The magnitude response will be constant, and the phase response will be non-linear.

*   **Group Delay:**

    *   Defined as the negative derivative of the phase response with respect to frequency: `τ(ω) = -dθ(ω)/dω`.
    *   For an all-pass filter, the group delay is always positive, indicating a delay in the signal components.

---

### 2. Minimum Phase Transfer Functions

*   **Definition:** A minimum phase transfer function is a system function that has all its poles and zeros inside the unit circle (for discrete-time systems) or in the left half-plane (for continuous-time systems). It has the minimum possible phase lag for a given magnitude response.
*   **Characteristics:**
    *   **All Poles and Zeros Inside the Unit Circle (Discrete-Time):** |z<sub>i</sub>| < 1 and |p<sub>i</sub>| < 1 for all zeros z<sub>i</sub> and poles p<sub>i</sub>.
    *   **All Poles and Zeros in the Left Half-Plane (Continuous-Time):** Re{z<sub>i</sub>} < 0 and Re{p<sub>i</sub>} < 0 for all zeros z<sub>i</sub> and poles p<sub>i</sub>.
    *   **Minimum Group Delay:**  For a given magnitude response, a minimum phase system has the smallest possible group delay.
    *   **Minimum Energy Delay:**  The energy of the impulse response is concentrated at the beginning (i.e., it reaches its peak value earliest compared to other systems with the same magnitude response).
    *   **Causality:** Minimum phase systems are always causal.
*   **Non-Minimum Phase Systems:**  If a system has one or more zeros *outside* the unit circle (discrete-time) or in the right half-plane (continuous-time), it is a non-minimum phase system.
*   **Linear Phase Systems:** While FIR filters can achieve perfect linear phase (and hence constant group delay), IIR filters cannot. Minimum phase IIR filters offer a trade-off by minimizing the phase distortion for a given magnitude response.
*   **Importance:** Minimum phase systems are desirable in many applications because they introduce the least amount of delay distortion.
*   **Relationship to All-Pass:** Any non-minimum phase system can be converted into a minimum phase system by reflecting its zeros that lie outside the unit circle (or right half-plane) to their reciprocals inside the unit circle (or their negative conjugates in the left half-plane), and multiplying by an appropriate all-pass filter to compensate for the change in magnitude due to the reflection of the zeros.

*   **Example (Discrete-Time):**

    *   Minimum Phase: `H(z) = (1 - 0.5z⁻¹)` (zero at z=0.5, inside the unit circle)
    *   Non-Minimum Phase: `H(z) = (1 - 2z⁻¹)` (zero at z=2, outside the unit circle)

---

### 3. FIR Filter Design: Window-Based Design

*   **Concept:** The window method is a simple and widely used technique for designing FIR filters. It involves truncating the impulse response of an ideal filter and multiplying it by a window function.

*   **Steps:**

    1.  **Determine the Ideal Impulse Response:** Determine the desired frequency response H<sub>d</sub>(ω) of the filter. Calculate the corresponding ideal impulse response h<sub>d</sub>(n) by taking the inverse Discrete-Time Fourier Transform (DTFT) of H<sub>d</sub>(ω):

        ```
        h_d(n) = (1/2π) ∫[-π to π] H_d(ω) * e^(jωn) dω
        ```
        In practice, this integral is often solved analytically for common filter types (e.g., ideal low-pass).

    2.  **Choose a Window Function:** Select a suitable window function w(n) based on the desired filter characteristics. The window function should be symmetric around its center point.

    3.  **Truncate and Window the Impulse Response:**  Truncate the ideal impulse response h<sub>d</sub>(n) to a finite length N, and multiply it by the window function w(n) to obtain the filter coefficients h(n):

        ```
        h(n) = h_d(n) * w(n),  0 ≤ n ≤ N-1
        ```

        The filter order is N-1.

    4.  **Implement the Filter:**  The resulting filter coefficients h(n) are used in the FIR filter implementation.

*   **General Window Properties:**

    *   **Main Lobe Width:**  The width of the main lobe in the frequency domain of the window function.  A wider main lobe leads to a wider transition band in the filter.
    *   **Sidelobe Level:**  The amplitude of the sidelobes in the frequency domain of the window function.  Higher sidelobe levels lead to more ripples in the filter's passband and stopband.
    *   **Trade-off:** There is a trade-off between main lobe width and sidelobe level. Windows with narrower main lobes generally have higher sidelobes, and vice versa.

*   **Key Window Functions:**

    **a) Rectangular Window:**

    *   **Definition:**
        ```
        w(n) = 1, for 0 ≤ n ≤ N-1
        w(n) = 0, otherwise
        ```
    *   **Frequency Response:**  Sinc function.
    *   **Characteristics:**
        *   **Simplest window.**
        *   **Narrowest main lobe:** Results in the sharpest transition band.
        *   **Highest sidelobe level:**  Leads to significant ripples (Gibbs phenomenon) in the passband and stopband.  The first sidelobe is approximately -13 dB.
    *   **Advantages:** Simple to implement.
    *   **Disadvantages:** Poor frequency characteristics (high ripple levels).
    *   **Use Case:** Rarely used in practice for critical filtering applications due to its poor performance.

    **b) Hamming Window:**

    *   **Definition:**
        ```
        w(n) = 0.54 - 0.46 * cos(2πn / (N-1)),  for 0 ≤ n ≤ N-1
        w(n) = 0, otherwise
        ```
    *   **Characteristics:**
        *   **Wider main lobe compared to the Rectangular window:**  Results in a wider transition band.
        *   **Lower sidelobe level than the Rectangular window:**  Reduces ripples in the passband and stopband. The highest sidelobe is approximately -43 dB.
    *   **Advantages:**  Better performance than the Rectangular window in terms of ripple reduction.
    *   **Disadvantages:** Wider transition band compared to the Rectangular window.
    *   **Use Case:**  A good compromise between transition band width and ripple level for many general-purpose filtering applications.

    **c) Hanning Window (also known as the Hann window):**

    *   **Definition:**
        ```
        w(n) = 0.5 - 0.5 * cos(2πn / (N-1)),  for 0 ≤ n ≤ N-1
        w(n) = 0, otherwise
        ```
    *   **Characteristics:**
        *   **Wider main lobe compared to the Hamming window:** Results in an even wider transition band.
        *   **Lower sidelobe level than the Rectangular window, but slightly higher than Hamming:** The highest sidelobe is approximately -31 dB. Sidelobe falloff is faster than Hamming.
    *   **Advantages:**  Smooth roll-off and suppressed sidelobes compared to rectangular.  Excellent for spectral analysis because it reduces spectral leakage.
    *   **Disadvantages:**  Wider transition band than the Hamming window.
    *   **Use Case:**  Suitable for applications where a smooth frequency response is more important than a sharp transition band, and where spectral leakage needs to be minimized (e.g., spectral analysis, audio processing).

*   **Comparison Table of Windows:**

    | Window Type   | Main Lobe Width (approximate) | Sidelobe Level (approximate) | Transition Bandwidth | Passband/Stopband Ripple |
    | :------------ | :----------------------------: | :----------------------------: | :---------------------: | :-----------------------: |
    | Rectangular   |              4π/N              |          -13 dB (highest)        |         Narrowest        |           Highest           |
    | Hanning       |              8π/N              |          -31 dB                 |         Wider            |            Lower            |
    | Hamming       |              8π/N              |          -43 dB (lowest)       |         Wider            |            Lowest           |

*   **Important Considerations:**

    *   **Filter Order (N):** Increasing the filter order (N) reduces the transition bandwidth and improves the filter's sharpness.
    *   **Linear Phase:** FIR filters designed using the window method are inherently linear phase, which is a significant advantage. This is because the impulse response is symmetric.
    *   **Causality:** The impulse response obtained after windowing is generally non-causal. To make it causal, a delay of (N-1)/2 samples is introduced. This can be achieved by shifting the impulse response:

        ```
        h'(n) = h(n - (N-1)/2),  0 ≤ n ≤ N-1
        ```
        Note: For linear phase FIR filters, N is often chosen to be odd to ensure the delay is an integer. If N is even, there will be a fractional delay.

---

### 4. Design Example: FIR Low-Pass Filter using Window Method

**Problem:** Design an FIR low-pass filter with a cutoff frequency of ω<sub>c</sub> = π/4 radians and a filter length of N = 31 using:

1.  Rectangular window
2.  Hamming window
3.  Hanning window

**Solution:**

1.  **Ideal Low-Pass Filter:**

    The ideal low-pass filter frequency response is:

    ```
    H_d(ω) = 1,  |ω| ≤ ω_c = π/4
    H_d(ω) = 0,  ω_c < |ω| ≤ π
    ```

    The ideal impulse response is:

    ```
    h_d(n) = (sin(ω_c * n)) / (π * n),  n ≠ 0
    h_d(0) = ω_c / π
    ```

    Substituting ω<sub>c</sub> = π/4:

    ```
    h_d(n) = (sin(πn/4)) / (πn),  n ≠ 0
    h_d(0) = 1/4
    ```

2.  **Windowing:**

    We will truncate `h_d(n)` to a length of N = 31 and apply each window function:  n ranges from -(N-1)/2 to (N-1)/2 which equals -15 to 15.

    *   **Rectangular Window:**

        ```
        w(n) = 1,  -15 ≤ n ≤ 15
        h(n) = h_d(n) * w(n) = h_d(n),  -15 ≤ n ≤ 15
        ```

    *   **Hamming Window:**

        ```
        w(n) = 0.54 - 0.46 * cos(2π(n+15) / 30),  -15 ≤ n ≤ 15
        h(n) = h_d(n) * w(n),  -15 ≤ n ≤ 15
        ```

    *   **Hanning Window:**

        ```
        w(n) = 0.5 - 0.5 * cos(2π(n+15) / 30),  -15 ≤ n ≤ 15
        h(n) = h_d(n) * w(n),  -15 ≤ n ≤ 15
        ```

3.  **Causal Filter Coefficients:**

    To make the filter causal, we shift the impulse response by (N-1)/2 = 15 samples to the right:

    ```
    h'(n) = h(n-15),  0 ≤ n ≤ 30
    ```

4.  **Implementation:**

    The resulting `h'(n)` coefficients are used to implement the FIR filter.  The filter output y(n) is calculated as:

    ```
    y(n) = Σ[k=0 to 30] h'(k) * x(n-k)
    ```

5. **Analysis (Important, but not part of the explicit calculations):**
    * When you plot the magnitude frequency response of the filter designed using each window, you will observe:
        *   **Rectangular:** Sharper cutoff but higher ripple.
        *   **Hamming:** Wider cutoff but lower ripple than rectangular.
        *   **Hanning:** Widest cutoff but lowest sidelobes (ripple) and smoothest transition.

---

### 5. Practice Questions/Exercises

1.  **Question:** Define an all-pass transfer function. Give an example of a discrete-time all-pass filter.
    *   **Answer:** An all-pass transfer function has a constant magnitude response for all frequencies but a non-constant phase response. Example: H(z) = (z<sup>-1</sup> - 0.8) / (1 - 0.8z<sup>-1</sup>).

2.  **Question:** What are the key characteristics of a minimum phase system?
    *   **Answer:** All poles and zeros are inside the unit circle (discrete-time), minimum group delay for a given magnitude response, and minimum energy delay.

3.  **Question:** How does the width of the main lobe of a window function affect the transition band of an FIR filter?
    *   **Answer:** A wider main lobe leads to a wider transition band.

4.  **Question:**  Explain the trade-off between main lobe width and sidelobe level in window functions.
    *   **Answer:** Windows with narrower main lobes generally have higher sidelobes, and vice versa.  Narrower main lobes provide sharper transition bands but higher ripple levels. Lower sidelobes produce lower ripple levels.

5.  **Question:** Design an FIR filter of length N = 11 with a rectangular window to approximate a low-pass filter with a cutoff frequency of ω<sub>c</sub> = π/3. Calculate the filter coefficients h(n).
    *   **Answer:**
        *   h<sub>d</sub>(n) = (sin(πn/3)) / (πn), for n ≠ 0
        *   h<sub>d</sub>(0) = 1/3
        *   N = 11, so n ranges from -5 to 5.
        *   w(n) = 1 for -5 ≤ n ≤ 5.
        *   h(n) = h<sub>d</sub>(n) * w(n) = h<sub>d</sub>(n),  -5 ≤ n ≤ 5
        *   Shift by 5 samples to make the filter causal: h'(n) = h(n-5), for 0 ≤ n ≤ 10.  Calculate h'(n) for n = 0 to 10 using the above formulas.

6.  **Question:**  Compare and contrast the Rectangular, Hamming, and Hanning windows in terms of their frequency response characteristics and their suitability for FIR filter design.
    *   **Answer:** See the comparison table above.  Rectangular is simplest but has the highest ripple. Hamming offers a good balance. Hanning is smoothest and best for spectral analysis.

---

### 6. Important Points to Remember

*   **All-pass filters modify phase without affecting magnitude.**
*   **Minimum phase systems minimize delay distortion.**
*   **Window-based FIR filter design is a simple and common method.**
*   **Choose the window function based on the desired trade-off between transition band width and ripple level.**
*   **Increasing filter order (N) improves filter performance but increases complexity.**
*   **Window-designed FIR filters are inherently linear phase.**
*   **Remember to make the filter causal by introducing a delay of (N-1)/2 samples.**

This detailed study guide should give you a comprehensive understanding of all-pass and minimum phase transfer functions, and window-based FIR filter design using Rectangular, Hamming, and Hanning windows. Good luck with your studies!
