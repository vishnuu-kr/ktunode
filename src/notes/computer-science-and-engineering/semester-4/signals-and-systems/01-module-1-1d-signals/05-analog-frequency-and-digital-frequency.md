---
title: "Analog frequency and Digital frequency."
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b12e"
status: "completed"
scrapedAt: "2026-05-20T16:15:18.949Z"
---
## Signals and Systems: Module 1 - 1D Signals - Analog and Digital Frequency

These notes cover the concepts of analog and digital frequency within the context of one-dimensional signals in Signals and Systems.

**Learning Outcomes:**

*   Understand the concept of analog frequency and its units.
*   Understand the concept of digital frequency and its units.
*   Relate analog and digital frequency.
*   Understand the implications of sampling on frequency representation.
*   Convert between analog and digital frequency.
*   Recognize and understand the concept of aliasing.

**1. Analog Frequency (f): Cycles per Second**

*   **Definition:** Analog frequency (f) represents the rate at which a signal oscillates or repeats in cycles per unit time.
*   **Units:** Hertz (Hz) - cycles per second.  1 Hz = 1 cycle/second.  Sometimes expressed as cycles/sec or cps.
*   **Mathematical Representation:** Consider a sinusoidal signal:  x(t) = A * cos(2πft + φ)
    *   A = Amplitude
    *   f = Analog frequency (Hz)
    *   t = Time (seconds)
    *   φ = Phase (radians)
*   **Key Concept:** Analog frequency is a continuous-time concept. The signal exists for all values of time 't'.
*   **Example:** A sound wave oscillating 440 times per second (440 Hz) represents the note A4 (A above middle C).
*   **Relationship to Angular Frequency (ω):**  Analog frequency (f) is related to angular frequency (ω) by the following equation:
    *   ω = 2πf
    *   ω is measured in radians per second (rad/s).

**2. Digital Frequency (Ω): Radians per Sample**

*   **Definition:** Digital frequency (Ω) represents the rate at which a signal oscillates or repeats in cycles per *sample*.  Since the signal is only defined at discrete points in time (samples), frequency is measured relative to the sampling rate.
*   **Units:** Radians per sample (rad/sample).  Dimensionless (since radians are dimensionless) but written for clarity.
*   **Mathematical Representation:** Consider a discrete-time sinusoidal signal: x[n] = A * cos(Ωn + φ)
    *   A = Amplitude
    *   Ω = Digital frequency (rad/sample)
    *   n = Sample index (integer)
    *   φ = Phase (radians)
*   **Key Concept:** Digital frequency is a discrete-time concept. The signal is only defined at integer values of 'n' (the sample number).
*   **Nyquist Range:** The digital frequency range is typically defined as -π ≤ Ω ≤ π.  Frequencies outside this range are redundant due to the periodicity introduced by sampling. This relates to the Nyquist-Shannon sampling theorem.  Alternatively, the range can be defined as 0 ≤ Ω ≤ 2π. Both are valid representations. The range from -π to π is the most commonly used and understood.
*   **Example:** Imagine sampling a sine wave. If the samples show a rapid change in amplitude from one sample to the next, the digital frequency is high (close to π or -π).  If the samples are nearly identical, the digital frequency is low (close to 0).

**3. Relationship Between Analog and Digital Frequency**

*   **Sampling Process:**  Analog signals are converted to digital signals through a process called sampling. The analog signal, x(t), is sampled at regular intervals of time, 'T', called the sampling period.
*   **Sampling Rate (fs):** The sampling rate (fs) is the number of samples taken per second: fs = 1/T.  Measured in samples per second (samples/sec or Hz).
*   **Fundamental Relationship:** The connection between analog frequency (f) and digital frequency (Ω) is given by:

    *   **Ω = 2πfT = 2π(f/fs)**
    *   or, solving for f: **f = Ωfs / (2π)**

*   **Explanation:** This equation shows how the continuous frequency (f) is "normalized" by the sampling rate (fs) to produce the discrete frequency (Ω).
*   **Implication:**  The higher the sampling rate (fs), the better the representation of the original analog signal in the digital domain, and the less distortion occurs in the frequency domain.

**4. Aliasing**

*   **Definition:** Aliasing occurs when the sampling rate (fs) is too low compared to the highest frequency component (fmax) in the analog signal. This results in higher frequency components being "folded back" into the lower frequency range, creating spurious frequencies in the digital signal.
*   **Nyquist-Shannon Sampling Theorem:** To avoid aliasing, the sampling rate (fs) must be at least twice the highest frequency component (fmax) in the analog signal:

    *   **fs ≥ 2fmax**
    *   fmax is also called the Nyquist frequency or the folding frequency.

*   **Consequences of Aliasing:**
    *   Distortion of the signal.
    *   Introduction of unwanted frequency components.
    *   Loss of information.
*   **Anti-Aliasing Filters:** To prevent aliasing, an *anti-aliasing filter* (a low-pass filter) is used *before* the analog signal is sampled. This filter removes or attenuates frequency components above the Nyquist frequency (fmax).

**5. Converting Between Analog and Digital Frequency**

*   **Example 1: Analog to Digital:**
    *   An analog signal contains a frequency component of 1 kHz. The signal is sampled at a rate of 4 kHz.  What is the corresponding digital frequency?
    *   f = 1 kHz = 1000 Hz
    *   fs = 4 kHz = 4000 Hz
    *   Ω = 2π(f/fs) = 2π(1000/4000) = 2π(1/4) = π/2 rad/sample
*   **Example 2: Digital to Analog:**
    *   A digital signal has a frequency component of π/3 rad/sample. The signal was obtained by sampling an analog signal at 6 kHz.  What was the original analog frequency?
    *   Ω = π/3 rad/sample
    *   fs = 6 kHz = 6000 Hz
    *   f = Ωfs / (2π) = (π/3 * 6000) / (2π) = 6000 / 6 = 1000 Hz = 1 kHz

**6. Important Points to Remember**

*   Analog frequency (f) is in Hertz (Hz), represents cycles per second, and is a continuous-time concept.
*   Digital frequency (Ω) is in radians per sample, represents cycles per sample, and is a discrete-time concept.
*   The relationship between analog and digital frequency is: Ω = 2πfT = 2π(f/fs).
*   Aliasing occurs when the sampling rate is too low, and can be avoided by using a sufficiently high sampling rate (fs ≥ 2fmax) and/or using an anti-aliasing filter.
*   The Nyquist range for digital frequency is typically defined as -π ≤ Ω ≤ π. Frequencies outside this range are aliased or redundant.
*   Understand the units! Correct units are crucial for avoiding errors in calculations.

**7. Practice Questions/Exercises**

1.  An analog signal contains frequency components up to 5 kHz. What is the minimum sampling rate required to avoid aliasing?

    *   **Answer:** fs ≥ 2fmax = 2 * 5 kHz = 10 kHz
2.  A sinusoidal signal is sampled at a rate of 8 kHz. The digital frequency of the resulting signal is π/4 rad/sample. What was the analog frequency of the original signal?

    *   **Answer:** f = Ωfs / (2π) = (π/4 * 8000) / (2π) = 8000 / 8 = 1000 Hz = 1 kHz
3.  A digital signal has a frequency of 3π/2 rad/sample.  Assuming the conventional Nyquist range of -π to π, what is the equivalent alias frequency within this range?

    *   **Answer:**  Since 3π/2 is outside the range of -π to π, we need to find an equivalent frequency *within* that range.  The periodicity of the digital frequency is 2π. Subtracting 2π from 3π/2 results in:
        *   3π/2 - 2π = 3π/2 - 4π/2 = -π/2 rad/sample. This frequency is within the -π to π range.  Therefore, the alias frequency is -π/2 rad/sample.
4. An analog signal x(t) = cos(2π * 500 * t) is sampled with a sampling frequency of fs = 1 kHz.
    a) Calculate the digital frequency Ω.
    b) Is there any aliasing in the digital signal? Explain.

    *   **Answer:**
        *   a) f = 500 Hz, fs = 1000 Hz, so Ω = 2π(f/fs) = 2π(500/1000) = π rad/sample.
        *   b) There is *no* aliasing because fs = 1 kHz = 2 * 500 Hz = 2fmax.  The sampling rate satisfies the Nyquist-Shannon sampling theorem, so there is no aliasing.  This places the frequency right at the edge of the Nyquist range.

These notes provide a comprehensive overview of analog and digital frequency, their relationship, and the important concept of aliasing. Understanding these concepts is fundamental to working with signals in both continuous and discrete-time domains.  Review and practice the examples and exercises to solidify your understanding.
