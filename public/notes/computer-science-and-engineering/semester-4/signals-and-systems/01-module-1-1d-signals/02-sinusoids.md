---
title: "Sinusoids"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b12b"
status: "completed"
scrapedAt: "2026-05-20T16:15:16.806Z"
---
## SIGNALS AND SYSTEMS: Module 1 - 1D Signals: Sinusoids

**Introduction:** This module introduces the fundamental concept of sinusoids, a crucial building block in signal analysis and processing. Understanding sinusoids is essential for representing, analyzing, and manipulating a wide range of signals.

**Learning Outcomes:**

*   Define and describe a sinusoidal signal.
*   Identify and explain the parameters of a sinusoidal signal: amplitude, frequency, phase, and period.
*   Represent sinusoidal signals mathematically.
*   Convert between frequency (Hz) and angular frequency (radians/second).
*   Understand the concept of phase shift and its effect on the sinusoidal waveform.
*   Analyze the relationship between sinusoidal signals with different parameters.

**1. Definition and Description of a Sinusoidal Signal**

*   **Definition:** A sinusoidal signal is a periodic, continuous-time waveform that can be represented by a sine or cosine function. It exhibits a smooth, oscillating pattern repeating over time.

*   **Key Characteristics:**
    *   **Periodicity:** It repeats its waveform over a fixed time interval.
    *   **Smoothness:** It is continuous and differentiable.
    *   **Oscillatory:** It oscillates between positive and negative values.

**2. Parameters of a Sinusoidal Signal**

A sinusoidal signal can be described by the following parameters:

*   **Amplitude (A):**  The maximum deviation of the signal from its average value (usually zero). It represents the strength or intensity of the signal.
    *   Units: Volts, Amperes, or arbitrary units depending on the signal type.
    *   Represents the magnitude of the wave.

*   **Frequency (f):** The number of complete cycles (oscillations) of the signal that occur in one second.
    *   Units: Hertz (Hz) – cycles per second.
    *   Determines how rapidly the signal oscillates.

*   **Phase (φ):** Represents the horizontal shift of the sinusoidal signal relative to a reference sinusoidal signal (e.g., a sine wave starting at t=0).
    *   Units: Radians or degrees.
    *   Indicates the starting point of the cycle at t=0.

*   **Period (T):** The time required for one complete cycle of the signal.
    *   Units: Seconds (s).
    *   Inversely proportional to frequency: T = 1/f.

**3. Mathematical Representation of Sinusoidal Signals**

A sinusoidal signal can be represented by either a sine or a cosine function:

*   **Sine Wave:**  x(t) = A * sin(2πft + φ)

*   **Cosine Wave:** x(t) = A * cos(2πft + φ)

    Where:
    *   `x(t)` is the value of the signal at time `t`.
    *   `A` is the amplitude.
    *   `f` is the frequency (in Hz).
    *   `φ` is the phase (in radians).
    *   `t` is time (in seconds).

**4. Conversion Between Frequency (Hz) and Angular Frequency (Radians/Second)**

*   **Angular Frequency (ω):**  Represents the rate of change of the angle (in radians) per unit time.
    *   Units: Radians per second (rad/s).
    *   Relationship to frequency: ω = 2πf

*   **Conversion Formulas:**
    *   `f = ω / (2π)`  (Hz)
    *   `ω = 2πf` (rad/s)

**Example:**

If a signal has a frequency of 10 Hz, its angular frequency is:

ω = 2π * 10 Hz = 20π rad/s ≈ 62.83 rad/s

**5. Phase Shift and its Effect**

*   **Phase Shift:** The horizontal displacement of a sinusoidal signal relative to a reference sine or cosine function. A positive phase shift shifts the waveform to the *left*, while a negative phase shift shifts it to the *right*.

*   **Effect on Waveform:**

    *   **φ = 0:** The signal starts at its zero-crossing point (for sine wave) or at its maximum value (for cosine wave).

    *   **φ > 0:** The signal is shifted to the left (delayed).

    *   **φ < 0:** The signal is shifted to the right (advanced).

*   **Phase difference:** The difference in phase between two sinusoidal signals of the same frequency. This determines whether the signals are *in phase* (same phase) or *out of phase* (different phases). If the phase difference is a multiple of 2π, they are in phase.  If the phase difference is an odd multiple of π, they are 180 degrees out of phase.

**Example:**

Consider two signals:

*   x1(t) = sin(2πft)
*   x2(t) = sin(2πft + π/2)

x2(t) is shifted π/2 radians (90 degrees) to the *left* of x1(t).  In other words x2(t) leads x1(t) by 90 degrees.  Also we can say that x2(t) is equal to cos(2πft)

**6. Analyzing Relationships Between Sinusoidal Signals**

*   **Same Frequency:** If two sinusoidal signals have the same frequency, their relationship is determined by their amplitudes and phase difference. They can be added or subtracted easily, resulting in another sinusoidal signal with the same frequency.  The resulting signal's amplitude and phase will depend on the individual amplitudes and phase difference.

*   **Different Frequencies:** If two sinusoidal signals have different frequencies, their sum is not a simple sinusoid.  The resulting waveform will be more complex. This concept is related to Fourier analysis, where complex signals can be decomposed into a sum of sinusoids of different frequencies.

**Important Points to Remember:**

*   Sinusoids are fundamental to signal analysis.
*   Amplitude, frequency, and phase are the key parameters.
*   Understand the relationship between frequency and angular frequency.
*   Phase shift determines the horizontal position of the waveform.
*   Complex signals can be represented as sums of sinusoids.

**Practice Questions and Exercises:**

1.  **Question:** A sinusoidal signal has a frequency of 50 Hz. What is its period?
    **Answer:** T = 1/f = 1/50 = 0.02 seconds

2.  **Question:** A sinusoidal signal is given by x(t) = 10 * cos(100πt + π/4). What are the amplitude, frequency, and phase?
    **Answer:**
    *   Amplitude (A) = 10
    *   Angular Frequency (ω) = 100π rad/s
    *   Frequency (f) = ω / (2π) = 100π / (2π) = 50 Hz
    *   Phase (φ) = π/4 radians

3.  **Question:** Convert an angular frequency of 314 rad/s to Hertz.
    **Answer:** f = ω / (2π) = 314 / (2π) ≈ 50 Hz

4.  **Question:** What is the effect of increasing the amplitude of a sinusoidal signal?
    **Answer:** The signal's maximum and minimum values increase (it becomes "louder" or "stronger").

5.  **Exercise:** Sketch the following sinusoidal signals:
    *   x1(t) = 2 * sin(2πt)
    *   x2(t) = sin(4πt)
    *   x3(t) = sin(2πt + π/2)

    Compare their amplitudes, frequencies, and phases. Explain the differences in their waveforms.

6.  **Exercise:** Write a Python program to generate and plot a sinusoidal signal with given amplitude, frequency, phase, and duration.  Experiment with different parameter values.
