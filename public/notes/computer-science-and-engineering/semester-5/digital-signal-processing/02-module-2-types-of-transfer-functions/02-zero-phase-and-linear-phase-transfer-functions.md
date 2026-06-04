---
title: "Zero phase and linear phase transfer functions"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 2: Types of transfer functions"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b7e1"
status: "completed"
scrapedAt: "2026-05-20T16:46:07.805Z"
---
## DIGITAL SIGNAL PROCESSING - Module 2: Transfer Functions - Zero Phase and Linear Phase Transfer Functions

**Learning Outcomes:**

*   Understand the concept of transfer functions and their role in DSP.
*   Define and differentiate between zero-phase and linear-phase transfer functions.
*   Identify the conditions for a system to exhibit zero-phase and linear-phase characteristics.
*   Analyze the properties of systems with zero-phase and linear-phase responses.
*   Understand the importance of linear phase in signal processing applications.
*   Design simple FIR filters with linear-phase characteristics.

**1. Introduction to Transfer Functions**

*   **Definition:** A transfer function, denoted by H(z) for discrete-time systems and H(s) for continuous-time systems, is a mathematical representation of the relationship between the input and output of a system in the frequency domain. It describes how a system transforms an input signal into an output signal.
*   **Discrete-Time Systems:** For a Linear Time-Invariant (LTI) discrete-time system, the transfer function H(z) is the z-transform of the impulse response h[n].  It can also be expressed as the ratio of the z-transform of the output Y(z) to the z-transform of the input X(z):

    ```
    H(z) = Y(z) / X(z)
    ```
*   **Frequency Response:** The frequency response H(ejω) of a discrete-time system is obtained by evaluating the transfer function H(z) on the unit circle (z = ejω):

    ```
    H(ejω) = |H(ejω)| * ej∠H(ejω)
    ```

    Where:
    *   |H(ejω)| is the magnitude response, representing the gain of the system at each frequency ω.
    *   ∠H(ejω) is the phase response, representing the phase shift introduced by the system at each frequency ω.
*   **Importance:** Transfer functions provide a concise and powerful way to analyze and design LTI systems.  They allow us to predict the system's behavior for different input signals and to design systems with specific desired characteristics.

**2. Phase Response and its Significance**

*   **Phase Response:** The phase response ∠H(ejω) is a critical characteristic of a system. It represents the amount of phase shift introduced by the system at each frequency component of the input signal.
*   **Distortion:** A non-linear phase response can lead to phase distortion, which alters the relative timing of different frequency components of the signal. This is often undesirable, especially when preserving the signal's shape and structure is important.
*   **Group Delay:** Group delay, denoted by τ(ω), is defined as the negative derivative of the phase response with respect to frequency:

    ```
    τ(ω) = -d/dω [∠H(ejω)]
    ```

    Group delay represents the time delay experienced by the envelope of a narrowband signal centered at frequency ω.  If the group delay is constant across all frequencies, the system introduces a uniform delay, and there is no phase distortion.

**3. Zero-Phase Transfer Functions**

*   **Definition:** A system has a zero-phase transfer function if its phase response is zero for all frequencies:

    ```
    ∠H(ejω) = 0  for all ω
    ```
*   **Magnitude Response:**  The magnitude response of a zero-phase system must be an even function of frequency:

    ```
    |H(ejω)| = |H(e-jω)|
    ```

    This implies that the system's frequency response is symmetric around ω = 0.
*   **Impulse Response:** The impulse response h[n] of a zero-phase system is symmetric:

    ```
    h[n] = h[-n]
    ```

    However, a truly zero-phase system is non-causal because its impulse response exists for negative values of n.  Therefore, it's not realizable in real-time applications unless a delay is introduced.
*   **Practical Implementation:**  Zero-phase characteristics are often approximated in practice using techniques such as offline processing, where the entire signal is available before processing.

*   **Example:**  Consider a system with the impulse response h[n] = {1, 2, 3, 2, 1}. This system has a symmetric impulse response, indicating a zero-phase characteristic. Its transfer function will have a zero phase response.

**4. Linear-Phase Transfer Functions**

*   **Definition:** A system has a linear-phase transfer function if its phase response is a linear function of frequency:

    ```
    ∠H(ejω) = -ωτ  for all ω
    ```

    Where τ is a constant representing the time delay introduced by the system.
*   **Phase Response:** In a linear phase system, the phase shift is directly proportional to the frequency.  This results in a constant group delay.
*   **Group Delay:**  The group delay for a linear-phase system is constant and equal to τ:

    ```
    τ(ω) = τ
    ```
*   **Impulse Response:** The impulse response of a linear-phase FIR filter exhibits symmetry or anti-symmetry around its midpoint.
*   **Advantages:** Linear phase is desirable because it ensures that all frequency components of the input signal are delayed by the same amount, preserving the signal's shape and preventing phase distortion.
*   **Types of Linear-Phase FIR Filters:** FIR filters are commonly used to achieve linear phase because they can be designed to have a perfectly linear phase response. There are four types based on the symmetry of their impulse response (h[n]) and length (N):

    *   **Type 1:** h[n] = h[N-1-n], N is odd
    *   **Type 2:** h[n] = h[N-1-n], N is even
    *   **Type 3:** h[n] = -h[N-1-n], N is odd
    *   **Type 4:** h[n] = -h[N-1-n], N is even

*   **Example:** Consider a moving average filter with impulse response h[n] = {1/3, 1/3, 1/3}. This FIR filter has a symmetric impulse response, indicating a linear-phase characteristic. The phase response will be a linear function of frequency.

**5. Conditions for Linear Phase in FIR Filters**

*   **Symmetry/Anti-Symmetry:** As mentioned above, linear phase in FIR filters is achieved when the impulse response h[n] is symmetric (h[n] = h[N-1-n]) or anti-symmetric (h[n] = -h[N-1-n]) around its midpoint.
*   **FIR Structure:** The Finite Impulse Response (FIR) structure is crucial.  FIR filters are inherently stable and can be easily designed to have linear phase.  Infinite Impulse Response (IIR) filters can also have linear phase but are much more difficult to design for it and often have other stability or complexity issues.
*   **Coefficient Constraints:**  The filter coefficients must satisfy the symmetry or anti-symmetry conditions to ensure linear phase.

**6. Importance of Linear Phase**

*   **Signal Integrity:** Linear phase preserves the shape of the input signal.
*   **Image and Audio Processing:** Crucial in image and audio processing to avoid distortion.
*   **Data Communication:** Essential in data communication systems to minimize inter-symbol interference (ISI).
*   **Seismic Processing:** Important in seismic data analysis to accurately represent subsurface structures.
*   **Medical Imaging:** Critical in medical imaging for accurate diagnosis.

**7. Designing Simple Linear-Phase FIR Filters**

*   **Windowing Method:** The windowing method involves truncating an ideal impulse response (e.g., for an ideal low-pass filter) and applying a window function to improve the filter's performance. Common window functions include the rectangular, Hamming, Hanning, and Blackman windows.
    1.  **Determine Ideal Impulse Response:** Find the ideal impulse response, h<sub>ideal</sub>[n].
    2.  **Choose a Window Function:** Select an appropriate window function, w[n], based on desired filter characteristics (e.g., stopband attenuation, transition bandwidth).  Ensure the window function is symmetric.
    3.  **Truncate and Multiply:**  Multiply the ideal impulse response by the window function:

        ```
        h[n] = h_ideal[n] * w[n]
        ```
        for n = 0, 1, ..., N-1, where N is the filter length.
    4.  **Enforce Symmetry:**  Ensure that h[n] is symmetric (or anti-symmetric) to achieve linear phase.
*   **Frequency Sampling Method:** The frequency sampling method involves specifying the desired frequency response at a set of discrete frequencies and then calculating the filter coefficients by taking the inverse Discrete Fourier Transform (IDFT) of the frequency samples.
    1. **Specify desired frequency samples:**  Decide H(k) for k = 0, 1, ..., N-1.
    2. **Ensure Conjugate Symmetry:** Set H(N-k) = H<sup>*</sup>(k) for real h[n].
    3. **Compute IDFT:** Apply the IDFT to obtain the impulse response h[n].

        ```
         h[n] = (1/N) * Σ H(k) * e^(j2πkn/N)  for k = 0 to N-1
        ```

**8. Important Points to Remember**

*   Zero-phase systems are non-causal and cannot be implemented in real-time without introducing a delay.
*   Linear-phase systems introduce a constant delay to all frequency components of the signal.
*   FIR filters are commonly used to achieve linear phase.
*   The symmetry or anti-symmetry of the impulse response is crucial for linear phase in FIR filters.
*   Linear phase is essential in applications where preserving the signal's shape and timing is important.

**9. Practice Questions/Exercises**

1.  **Question:**  What is the main difference between a zero-phase and a linear-phase transfer function?

    **Answer:** A zero-phase transfer function has a phase response of zero for all frequencies, while a linear-phase transfer function has a phase response that is a linear function of frequency.
2.  **Question:** Why is linear phase desirable in signal processing applications?

    **Answer:** Linear phase is desirable because it ensures that all frequency components of the input signal are delayed by the same amount, preserving the signal's shape and preventing phase distortion.
3.  **Question:**  An FIR filter has an impulse response h[n] = {1, 2, 3, 2, 1}. Does this filter have linear phase? Explain.

    **Answer:** Yes, this filter has linear phase. The impulse response is symmetric around its midpoint (n=2), which is a condition for linear phase in FIR filters.
4.  **Question:**  A system has a phase response of ∠H(ejω) = -2ω. What is the group delay of this system?

    **Answer:** The group delay is τ(ω) = -d/dω [-2ω] = 2.
5.  **Question:** Design a simple 3-tap FIR filter with a symmetric impulse response to approximate a lowpass filter.
    **Answer:** A simple approach is h[n] = {0.25, 0.5, 0.25} for n=0, 1, 2.  This is symmetric, and it smooths the input signal, acting as a lowpass filter. This could be created with windowing method (e.g., rectangular window).
6.  **Question:** Explain why zero-phase filters are not causal.
    **Answer:** A zero-phase filter must have a symmetric impulse response, implying the response begins before the input is applied, violating causality.  Mathematically, h[n] != 0 for n < 0 for a non-causal system.

**10. Further Reading**

*   "Discrete-Time Signal Processing" by Alan V. Oppenheim and Ronald W. Schafer
*   "Understanding Digital Signal Processing" by Steven W. Smith

These notes provide a comprehensive overview of zero-phase and linear-phase transfer functions, including key concepts, definitions, examples, and practice questions. They should serve as a valuable resource for studying this important topic in digital signal processing. Remember to practice applying these concepts to various signal processing problems to solidify your understanding.
