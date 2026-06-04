---
title: "Complex Exponential Sequences."
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b130"
status: "completed"
scrapedAt: "2026-05-20T16:15:20.366Z"
---
## Signals and Systems: Module 1 - 1D Signals: Complex Exponential Sequences

**Introduction:** This module focuses on 1-Dimensional (1D) signals and introduces the concept of complex exponential sequences. These sequences are fundamental building blocks in signal analysis and play a crucial role in understanding and manipulating signals in various applications.

**Learning Outcomes:**

*   Understand the definition of complex exponential sequences.
*   Identify the parameters of a complex exponential sequence.
*   Analyze the properties of complex exponential sequences, including periodicity.
*   Determine the fundamental period of a periodic complex exponential sequence.
*   Apply complex exponential sequences to represent other signals.

**1. Definition of Complex Exponential Sequences**

*   A complex exponential sequence is defined as:

    `x[n] = A * e^(jωn)`

    Where:

    *   `x[n]` is the value of the sequence at discrete time index `n`.
    *   `A` is the complex amplitude (can be expressed as `|A|e^(jφ)`, where `|A|` is the magnitude and `φ` is the phase).
    *   `j` is the imaginary unit (√-1).
    *   `ω` is the digital frequency in radians per sample (rad/sample).
    *   `n` is the integer-valued discrete-time index.

*   Using Euler's formula, we can expand the complex exponential:

    `x[n] = A * (cos(ωn) + j sin(ωn))`

    This shows that a complex exponential sequence consists of a real cosine component and an imaginary sine component.

**2. Parameters of a Complex Exponential Sequence**

*   **Amplitude (A):**  Determines the magnitude and phase shift of the sequence. It is a complex number, generally expressed as `A = |A|e^(jφ)`.  `|A|` influences the maximum magnitude of the sequence, while `φ` shifts the phase of both cosine and sine components.

*   **Digital Frequency (ω):**  Determines the rate of oscillation of the sequence.  It is measured in radians per sample. Crucially, it determines whether the sequence is periodic.

    *   **Important Note:** The digital frequency `ω` is different from the analog frequency (f in Hz).  They are related by the sampling frequency (Fs): `ω = 2πf/Fs`.
    *   **Example:** If an analog sinusoid with frequency 1 kHz is sampled at a rate of 8 kHz, the corresponding digital frequency is `ω = 2π(1000/8000) = π/4 rad/sample`.

**3. Properties of Complex Exponential Sequences**

*   **Periodicity:**  A complex exponential sequence `x[n] = A * e^(jωn)` is *periodic* if there exists a positive integer `N` (the fundamental period) such that:

    `x[n + N] = x[n]` for all `n`.

    This condition implies:

    `e^(jω(n + N)) = e^(jωn)`

    `e^(jωN) = 1`

    `ωN = 2πk`, where `k` is an integer.

    Therefore, a complex exponential sequence is periodic if and only if `ω/2π` is a *rational number*.

    `ω/2π = k/N`  => `ω = 2πk/N`

    where `k` and `N` are integers.

*   **Fundamental Period (N):** The smallest positive integer `N` that satisfies the periodicity condition is called the fundamental period.  To find the fundamental period:

    1.  Express `ω/2π` as a fraction in its simplest form (k/N).
    2.  The denominator `N` is the fundamental period.

*   **Distinctness of Frequencies:** Complex exponentials with frequencies separated by integer multiples of 2π are identical.  That is:

    `e^(jωn) = e^(j(ω + 2πk)n)` for any integer `k`.

    This means that we only need to consider frequencies in the range -π < ω ≤ π  or 0 ≤ ω < 2π.

**4. Determining the Fundamental Period**

*   **Algorithm:**

    1.  Given `ω`, calculate `ω/2π`.
    2.  If `ω/2π` is *irrational*, the sequence is *aperiodic*.
    3.  If `ω/2π` is *rational*, express it in the form `k/N`, where `k` and `N` are integers and `k/N` is in its simplest form (i.e., `k` and `N` have no common factors).
    4.  `N` is the fundamental period.

*   **Example 1:**  `x[n] = e^(j(π/4)n)`

    `ω = π/4`

    `ω/2π = (π/4) / 2π = 1/8`  (Rational number)

    Therefore, `N = 8`.  The sequence is periodic with a fundamental period of 8.

*   **Example 2:** `x[n] = e^(j(1)n)`

    `ω = 1`

    `ω/2π = 1/2π` (Irrational number)

    Therefore, the sequence is aperiodic.

*   **Example 3:** `x[n] = e^(j(3π/2)n)`

    `ω = 3π/2`

    `ω/2π = (3π/2) / 2π = 3/4` (Rational Number)

     Therefore, `N = 4`.  The sequence is periodic with a fundamental period of 4.

**5. Representing Signals Using Complex Exponential Sequences**

*   Complex exponential sequences form the basis for many signal analysis techniques, including the Discrete-Time Fourier Transform (DTFT) and the Discrete Fourier Transform (DFT).

*   The DTFT decomposes a signal into a sum (or integral) of complex exponentials of different frequencies.

*   The DFT computes the frequency components of a finite-length signal.

**Practice Questions/Exercises:**

1.  **Determine if the following sequences are periodic. If periodic, find the fundamental period:**

    a)  `x[n] = e^(j(π/6)n)`
    b)  `x[n] = e^(j(√2)n)`
    c)  `x[n] = cos((2π/5)n)`  (Hint: express cosine in terms of complex exponentials using Euler's formula)
    d)  `x[n] = e^(j(5π/3)n)`

2.  **A sinusoidal signal `x(t) = cos(2π * 1000 * t)` is sampled at a rate of `Fs = 4000 Hz`. Determine the digital frequency `ω` and whether the resulting discrete-time signal `x[n] = x(nT)` (where `T = 1/Fs`) is periodic. If periodic, find its fundamental period.**

3.  **Consider a complex exponential sequence `x[n] = 2e^(j(π/3)n)`. What is the magnitude and phase of the complex amplitude?**

**Answers:**

1.  a) Periodic, N = 12
    b) Aperiodic
    c) Periodic, N = 5
    d) Periodic, N = 6 (5π/3 simplifies to -π/3 when considering the range -π to π)

2.  ω = π/2 rad/sample, Periodic, N = 4

3.  Magnitude = 2, Phase = 0

**Important Points to Remember:**

*   A complex exponential sequence is periodic if and only if `ω/2π` is a rational number.
*   The fundamental period `N` is the smallest positive integer for which `x[n+N] = x[n]`.
*   Complex exponentials are fundamental building blocks for representing more complex signals.
*   Be mindful of the difference between analog and digital frequency.
*   Frequencies separated by integer multiples of 2π are indistinguishable in discrete-time.
