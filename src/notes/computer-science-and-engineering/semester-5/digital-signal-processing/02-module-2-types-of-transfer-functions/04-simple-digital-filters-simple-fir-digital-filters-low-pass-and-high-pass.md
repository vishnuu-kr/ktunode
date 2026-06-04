---
title: "Simple digital filters: Simple FIR digital filters (Low pass and high pass)"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 2: Types of transfer functions"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b7e3"
status: "completed"
scrapedAt: "2026-05-20T16:46:09.414Z"
---
# DIGITAL SIGNAL PROCESSING: Module 2 - Types of Transfer Functions
## Topic: Simple Digital Filters: Simple FIR Digital Filters (Low Pass and High Pass)

**Learning Outcomes:**

*   Understand the basic principles of Finite Impulse Response (FIR) filters.
*   Design simple FIR low-pass filters.
*   Design simple FIR high-pass filters.
*   Analyze the frequency response of simple FIR low-pass and high-pass filters.
*   Understand the concept of filter coefficients and their relation to the filter's characteristics.

### 1. Introduction to FIR Filters

*   **Definition:** Finite Impulse Response (FIR) filters are digital filters whose impulse response settles to zero in finite time. This means their output is solely dependent on the current and past input values.  They have no feedback.
*   **Key Characteristic:** FIR filters are inherently stable.
*   **Structure:**  Consist of only feedforward terms. They are implemented using a tapped delay line, multipliers, and adders.
*   **Equation:** The output *y[n]* of an FIR filter of length *N* is given by:

    *y[n] = b<sub>0</sub>x[n] + b<sub>1</sub>x[n-1] + b<sub>2</sub>x[n-2] + ... + b<sub>N-1</sub>x[n-N+1]*

    Where:
    *   *x[n]* is the input signal.
    *   *y[n]* is the output signal.
    *   *b<sub>i</sub>* are the filter coefficients (also called tap weights).
    *   *N* is the filter order (or length).
*   **Transfer Function:** The Z-transform of the FIR filter's impulse response gives its transfer function:

    *H(z) = b<sub>0</sub> + b<sub>1</sub>z<sup>-1</sup> + b<sub>2</sub>z<sup>-2</sup> + ... + b<sub>N-1</sub>z<sup>-N+1</sup>*

### 2. Simple FIR Low-Pass Filters

*   **Purpose:** A low-pass filter allows low-frequency components to pass through while attenuating high-frequency components.
*   **Simple Averaging Filter:** A basic FIR low-pass filter is the averaging filter (also called a moving average filter).
*   **Equation (N-point averaging filter):**

    *y[n] = (1/N) * (x[n] + x[n-1] + x[n-2] + ... + x[n-N+1])*

    Where:
    *   *N* is the length of the filter (number of taps).
    *   All coefficients *b<sub>i</sub>* are equal to 1/N.
*   **Frequency Response:** The frequency response of the averaging filter is given by:

    *H(ω) = (1/N) * [sin(ωN/2) / sin(ω/2)]*

    This response shows a sinc-like shape, with a main lobe centered at ω = 0 (DC) and sidelobes that attenuate as frequency increases.
*   **Cutoff Frequency:** The cutoff frequency is approximately where the main lobe ends, corresponding to the first zero crossing. A larger value of N (filter length) gives a sharper cutoff but also increases the filter delay.  Approximation: *ω<sub>c</sub> ≈ 2π/N*
*   **Design Steps for a Simple Averaging Low-Pass Filter:**
    1.  **Determine the desired cutoff frequency (ω<sub>c</sub>).**
    2.  **Estimate the filter length (N) using N ≈ 2π/ω<sub>c</sub>.**  Increase N to the nearest integer.
    3.  **Set all filter coefficients (b<sub>i</sub>) to 1/N.**
*   **Example:** Design a 3-tap averaging low-pass filter.
    *   *N* = 3
    *   *b<sub>0</sub> = b<sub>1</sub> = b<sub>2</sub> = 1/3*
    *   *y[n] = (1/3)x[n] + (1/3)x[n-1] + (1/3)x[n-2]*
    *   *H(z) = (1/3) + (1/3)z<sup>-1</sup> + (1/3)z<sup>-2</sup>*
*   **Important Points:**
    *   Increasing *N* sharpens the cutoff and reduces the sidelobe amplitudes but increases filter delay.
    *   Averaging filters are simple to implement but have relatively poor frequency response characteristics (slow roll-off, significant sidelobes).
    *   They introduce a linear phase response (constant group delay), which is desirable for preserving signal shape.

### 3. Simple FIR High-Pass Filters

*   **Purpose:** A high-pass filter allows high-frequency components to pass through while attenuating low-frequency components.
*   **Creating a Simple High-Pass Filter from a Low-Pass Filter:**  A simple way to create a high-pass filter is to subtract the output of a low-pass filter from the original signal.
*   **Equation (using a 2-tap filter derived from a 2-tap averaging filter):**

    *y[n] = x[n] - (1/2) * (x[n] + x[n-1])*
    *y[n] = (1/2)x[n] - (1/2)x[n-1]*

    Where:
    * *b<sub>0</sub> = 1/2* and *b<sub>1</sub> = -1/2*
*   **Generalized Equation (for a two-tap filter):**
    *   If the low-pass filter has coefficients *b<sub>0</sub>* and *b<sub>1</sub>*, the corresponding high-pass filter has coefficients *1 - b<sub>0</sub>* and *-b<sub>1</sub>*.  This applies specifically to creating a HPF from a two-tap LPF.
*   **Frequency Response:** The frequency response is approximately the inverse of the low-pass filter's frequency response, with the roles of passband and stopband reversed.
*   **Design Steps for a Simple High-Pass Filter (from a 2-tap LPF):**
    1.  **Start with a simple 2-tap averaging filter:  *y[n] = (1/2)x[n] + (1/2)x[n-1]***
    2.  **The high-pass filter is then: *y[n] = (1/2)x[n] - (1/2)x[n-1]***
*   **Example:**  The 2-tap averaging filter has *b<sub>0</sub> = 1/2* and *b<sub>1</sub> = 1/2*.  The corresponding high-pass filter has *b<sub>0</sub> = 1 - 1/2 = 1/2* and *b<sub>1</sub> = -1/2*.
*   **Transfer Function (2-tap high-pass):**

    *H(z) = (1/2) - (1/2)z<sup>-1</sup>*
*   **Important Points:**
    *   Simple high-pass filters created by subtracting a low-pass filter from the input signal are basic but functional.
    *   The cutoff frequency behavior is, in essence, inverted compared to the original low-pass filter.
    *   More sophisticated high-pass filter design techniques exist for better performance.

### 4. Analyzing Frequency Response

*   **Frequency Response H(ω):** Represents the filter's gain and phase shift at different frequencies. It is obtained by evaluating the transfer function *H(z)* on the unit circle in the z-plane, i.e., substituting *z = e<sup>jω</sup>*.
*   **Magnitude Response |H(ω)|:** Indicates the filter's gain at each frequency. A value of 1 means the signal is passed unchanged, while a value of 0 means the signal is completely attenuated.
*   **Phase Response ∠H(ω):** Indicates the phase shift introduced by the filter at each frequency. Linear phase is desirable to avoid signal distortion. FIR filters can be designed to have perfect linear phase.
*   **Cutoff Frequency:** The frequency at which the filter's magnitude response drops to a certain level (typically -3 dB or 1/√2). This frequency separates the passband (frequencies that are allowed to pass) from the stopband (frequencies that are attenuated).
*   **MATLAB/Python:** Software packages like MATLAB or Python (with libraries like SciPy) can be used to easily calculate and plot the frequency response of digital filters.

### 5. Filter Coefficients and Filter Characteristics

*   **Filter Coefficients (b<sub>i</sub>):** Determine the filter's behavior. Changing the coefficients directly impacts the frequency response.
*   **Symmetry:**  For linear phase FIR filters, the coefficients are often symmetric (or anti-symmetric).
    *   **Symmetric coefficients:** *b<sub>i</sub> = b<sub>N-1-i</sub>*  (Leads to linear phase).
    *   **Anti-symmetric coefficients:** *b<sub>i</sub> = -b<sub>N-1-i</sub>* (Also leads to linear phase, often used for differentiators or Hilbert transformers).
*   **Larger N (filter length):**  Generally allows for a sharper transition between the passband and stopband (better selectivity). However, it also increases the computational complexity and filter delay.
*   **Coefficient Magnitude:**  The magnitude of the coefficients also affects the filter's gain. Normalizing coefficients (e.g., summing to 1) can ensure that the filter doesn't amplify the signal.

### 6. Practice Questions/Exercises

1.  **Design a 5-tap averaging low-pass filter. Write the difference equation and the transfer function.**
    *   **Answer:**
        *   Difference equation: *y[n] = (1/5)x[n] + (1/5)x[n-1] + (1/5)x[n-2] + (1/5)x[n-3] + (1/5)x[n-4]*
        *   Transfer function: *H(z) = (1/5) + (1/5)z<sup>-1</sup> + (1/5)z<sup>-2</sup> + (1/5)z<sup>-3</sup> + (1/5)z<sup>-4</sup>*

2.  **Given a 2-tap low-pass filter *y[n] = 0.6x[n] + 0.4x[n-1]*, design the corresponding high-pass filter.**
    *   **Answer:** *y[n] = (1-0.6)x[n] - 0.4x[n-1] = 0.4x[n] - 0.4x[n-1]*

3.  **What is the primary advantage of FIR filters over IIR filters in terms of stability?**
    *   **Answer:** FIR filters are inherently stable because they have no feedback (poles are always at the origin in the z-plane).

4.  **How does increasing the length of an averaging filter affect its frequency response?**
    *   **Answer:**  Increasing the length (N) of an averaging filter makes the cutoff frequency sharper (a more defined transition band) and reduces sidelobe amplitudes, but it also increases the filter's delay.

5.  **Explain the concept of linear phase in the context of FIR filters and why it is desirable.**
    *   **Answer:** Linear phase means the phase response of the filter is a linear function of frequency. This results in a constant group delay, which means all frequency components of the input signal are delayed by the same amount. This is desirable because it prevents phase distortion, ensuring that the shape of the signal is preserved after filtering.  Symmetric FIR filters have linear phase.

6.  **Write the general form transfer function of an N-tap FIR filter.**
    *   **Answer:** *H(z) = b<sub>0</sub> + b<sub>1</sub>z<sup>-1</sup> + b<sub>2</sub>z<sup>-2</sup> + ... + b<sub>N-1</sub>z<sup>-N+1</sup>*

### 7. Important Points to Remember

*   FIR filters are always stable.
*   Simple averaging filters are a basic form of low-pass FIR filter.
*   High-pass filters can be derived from low-pass filters (in simple cases) by subtracting the output of the low-pass filter from the input.
*   The frequency response of a filter describes how it affects different frequency components.
*   Filter coefficients directly determine the filter's characteristics.
*   Linear phase is a desirable property for preserving signal shape.  Symmetric FIR filters produce linear phase.
*   MATLAB/Python are useful tools for designing and analyzing digital filters.
