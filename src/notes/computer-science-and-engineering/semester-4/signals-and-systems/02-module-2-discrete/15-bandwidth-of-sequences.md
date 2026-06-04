---
title: "Bandwidth of Sequences"
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Discrete"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b156"
status: "completed"
scrapedAt: "2026-05-20T16:15:45.523Z"
---
## SIGNALS AND SYSTEMS: Module 2 - Discrete: Bandwidth of Sequences

**Introduction:** This module focuses on the bandwidth of discrete-time sequences. Understanding bandwidth is crucial for signal processing, data transmission, and efficient system design. It allows us to determine the range of frequencies present in a signal and how much "space" that signal occupies in the frequency domain.

**Learning Outcomes:**

*   Define the bandwidth of a discrete-time sequence.
*   Explain the relationship between the bandwidth of a sequence and its sampling rate.
*   Determine the bandwidth of a sequence from its Discrete-Time Fourier Transform (DTFT) or its spectrum.
*   Understand the impact of bandwidth on signal reconstruction.
*   Apply the concept of bandwidth to practical scenarios, such as digital communication systems.

**1. Key Concepts and Definitions:**

*   **Discrete-Time Sequence (Signal):** A sequence of numbers, denoted as x[n], where 'n' is an integer representing discrete time instances.
*   **Discrete-Time Fourier Transform (DTFT):** The DTFT, denoted by X(e<sup>jω</sup>), transforms a discrete-time sequence x[n] into its frequency domain representation.  ω represents the normalized angular frequency (radians per sample).
    *   Formula:  X(e<sup>jω</sup>) = Σ<sub>n=-∞</sub><sup>∞</sup> x[n]e<sup>-jωn</sup>
*   **Spectrum:** The magnitude of the DTFT, |X(e<sup>jω</sup>)|, plotted against frequency ω.  It shows the amplitude of different frequency components present in the signal.
*   **Bandwidth (B):** The range of frequencies (in radians per sample) for which the magnitude of the DTFT (i.e., the spectrum) is significantly non-zero.  It essentially represents the range of frequencies containing the most significant energy of the signal.
*   **Normalized Frequency:** In DTFT, the frequency ω is normalized to the sampling rate.  Therefore, ω ranges from -π to π.  ω = π corresponds to the Nyquist frequency (half the sampling rate).
*   **Significant Energy:**  The definition of "significant" is often problem-dependent.  A common criterion is to consider frequencies where the magnitude of the DTFT is above a certain percentage of its maximum value (e.g., 3dB down or 70.7% of the maximum).

**2. Bandwidth of a Sequence:**

*   The bandwidth of a discrete-time sequence represents the spread of frequencies that are significantly present in the signal.
*   It's NOT a single frequency value but rather a range of frequencies.
*   The bandwidth is typically expressed in radians per sample. Because the DTFT is periodic with a period of 2π, we often only consider the frequency range from -π to π.

**3. Relationship Between Bandwidth and Sampling Rate:**

*   The Nyquist-Shannon sampling theorem states that a continuous-time signal must be sampled at a rate (sampling frequency, F<sub>s</sub>) at least twice its highest frequency component (F<sub>max</sub>) to be perfectly reconstructed.  Mathematically: F<sub>s</sub> ≥ 2F<sub>max</sub>
*   In the discrete-time domain, the Nyquist frequency is π radians per sample.
*   The bandwidth of the *analog* signal before sampling dictates the *minimum* required sampling rate.  If a signal's bandwidth is B Hz, the sampling rate must be at least 2B Hz.
*   **Undersampling (Aliasing):** If the sampling rate is less than twice the maximum frequency, aliasing occurs.  High-frequency components in the original signal are misrepresented as lower frequencies in the sampled signal, leading to distortion and irreversible information loss.
*   **Over sampling:** Sampling at a rate significantly higher than the Nyquist rate allows for easier filtering and reconstruction, but increases storage and processing requirements.

**4. Determining Bandwidth from the DTFT/Spectrum:**

*   **Graphical Method:**
    1.  Calculate or plot the DTFT magnitude |X(e<sup>jω</sup>)|.
    2.  Identify the maximum magnitude value.
    3.  Define a "significant energy" threshold (e.g., 70.7% of the maximum magnitude).
    4.  Find the frequencies ω<sub>1</sub> and ω<sub>2</sub> on either side of the maximum where the magnitude falls below the threshold.
    5.  The bandwidth is B = |ω<sub>2</sub> - ω<sub>1</sub>|.  Remember to consider the periodicity of the DTFT and fold any bandwidth outside the -π to π range appropriately.  Sometimes the bandwidth is simply described as 0 to ω<sub>2</sub>.

*   **Analytical Method (For Simple Signals):**
    *   If the DTFT has a known closed-form expression, analyze the expression to determine the frequencies where the magnitude becomes negligible. This is often done by finding the zeros of the function.

**Example 1: Bandwidth Calculation**

Consider a sequence x[n] whose DTFT magnitude is given by:

|X(e<sup>jω</sup>)| = { 1,  -W ≤ ω ≤ W
                  { 0,  otherwise for -π ≤ ω ≤ π

where W is a constant between 0 and π.

In this case, the bandwidth is simply B = 2W. All frequencies outside of the range [-W, W] have zero magnitude.

**Example 2: Bandwidth Estimation from a Plot**

Imagine you have a plot of |X(e<sup>jω</sup>)| for a sequence. The plot shows a peak at ω = 0 with a magnitude of 10. You decide that frequencies where |X(e<sup>jω</sup>)| < 7 are insignificant. By examining the plot, you find that |X(e<sup>jω</sup>)| = 7 at ω = -π/4 and ω = π/4. Therefore, the bandwidth is B = |π/4 - (-π/4)| = π/2 radians per sample.

**5. Impact of Bandwidth on Signal Reconstruction:**

*   **Ideal Reconstruction:** If a signal is sampled at or above the Nyquist rate (2F<sub>max</sub>), it *can* theoretically be perfectly reconstructed using an ideal low-pass filter that cuts off at the Nyquist frequency.
*   **Practical Reconstruction:** In reality, ideal filters do not exist. Reconstruction involves using practical filters, which have transition bands.  This means that signals close to the Nyquist frequency may not be perfectly reconstructed.
*   **Oversampling Benefits:** Oversampling provides a "guard band" between the signal's highest frequency and the Nyquist frequency. This makes it easier to design practical reconstruction filters with smoother transitions and reduces the risk of aliasing during reconstruction.

**6. Bandwidth in Practical Scenarios (Digital Communication):**

*   **Channel Capacity:**  The bandwidth of a communication channel is a fundamental limitation on the rate at which information can be transmitted.  Wider bandwidth channels can support higher data rates.
*   **Modulation:** Modulation techniques are used to map digital data onto analog signals suitable for transmission over a channel. Different modulation schemes have different bandwidth requirements.
*   **Filtering:** Filtering is used to shape the spectrum of transmitted signals to fit within the available bandwidth and to remove noise and interference.

**7. Important Points to Remember:**

*   Bandwidth is a *range* of frequencies, not a single frequency.
*   The sampling rate must be at least twice the maximum frequency (Nyquist rate) to avoid aliasing.
*   Oversampling makes reconstruction easier and more robust.
*   The DTFT is periodic with a period of 2π.
*   The definition of "significant energy" in determining bandwidth is often subjective and depends on the specific application.

**8. Practice Questions/Exercises:**

**Question 1:** A discrete-time signal has a DTFT given by X(e<sup>jω</sup>) = e<sup>-j2ω</sup> for -π/4 < ω < π/4 and X(e<sup>jω</sup>) = 0 elsewhere in the interval -π < ω < π. What is the bandwidth of this signal?

**Answer:** The bandwidth is B = π/4 - (-π/4) = π/2 radians per sample.

**Question 2:** An analog signal with a maximum frequency of 5 kHz is sampled at a rate of 8 kHz.  What is the normalized frequency corresponding to the maximum frequency of the analog signal? Is the sampling rate sufficient?

**Answer:**

*   Normalized frequency ω = 2πf/F<sub>s</sub> = 2π(5000 Hz) / (8000 Hz) = (5/4)π radians per sample.
*   The sampling rate is NOT sufficient. F<sub>s</sub> = 8 kHz < 2 * 5 kHz = 10 kHz, violating the Nyquist criterion.  Aliasing will occur.

**Question 3:**  Sketch a typical magnitude spectrum |X(e<sup>jω</sup>)| for a low-pass signal with a bandwidth of π/3 radians per sample.

**Answer:**  The sketch should show a maximum at ω = 0 and then decay towards zero as ω approaches π/3 and -π/3. It should be zero outside the interval [-π/3, π/3]. The magnitude spectrum is periodic with period 2π, so it repeats outside the interval [-π, π].

**Question 4:**  A sequence has a DTFT magnitude that decays exponentially as |X(e<sup>jω</sup>)| = e<sup>-|ω|</sup>. If we define the bandwidth as the frequency range where the magnitude is greater than 10% of its maximum value, what is the bandwidth?

**Answer:**

*   The maximum magnitude is |X(e<sup>j0</sup>)| = e<sup>0</sup> = 1.
*   We want to find ω such that e<sup>-|ω|</sup> = 0.1
*   Taking the natural logarithm of both sides: -|ω| = ln(0.1)
*   |ω| = -ln(0.1) ≈ 2.303
*   Since we are considering the interval [-π, π], we need to check if 2.303 is within this interval. π ≈ 3.14. Hence, 2.303 < π.
*   The bandwidth is approximately B = 2 * 2.303 = 4.606 radians per sample.  However, given the interval constraints, the bandwidth would be min(4.606, 2π), so B ≈ 4.606 radians per sample

These notes provide a comprehensive overview of the bandwidth of sequences in discrete-time signals and systems. By understanding these concepts, you'll be well-equipped to analyze and design practical signal processing systems. Remember to practice with examples and exercises to solidify your understanding.
