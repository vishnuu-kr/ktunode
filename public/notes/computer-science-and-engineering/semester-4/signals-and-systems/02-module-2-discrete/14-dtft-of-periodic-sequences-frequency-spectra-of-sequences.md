---
title: "DTFT of periodic sequences - Frequency Spectra of Sequences"
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Discrete"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b155"
status: "completed"
scrapedAt: "2026-05-20T16:15:44.812Z"
---
## Signals and Systems: Module 2 - Discrete: DTFT of Periodic Sequences - Frequency Spectra of Sequences

**Module 2: Discrete**
**Topic: DTFT of Periodic Sequences - Frequency Spectra of Sequences**

**Introduction:**

This module delves into the Discrete-Time Fourier Transform (DTFT) of periodic sequences. Understanding the DTFT of periodic signals is crucial for analyzing and processing signals in discrete-time systems. We will explore how the DTFT represents the frequency content of these sequences and learn how to interpret their frequency spectra.

**Learning Outcomes:**

Upon completion of this module, you will be able to:

*   Define and explain periodic sequences.
*   Derive the DTFT of a periodic sequence.
*   Express the DTFT of a periodic sequence in terms of Dirac delta functions.
*   Describe and interpret the frequency spectra of periodic sequences.
*   Calculate and sketch the magnitude and phase spectra of periodic sequences.
*   Apply the DTFT to analyze and understand the frequency content of various periodic discrete-time signals.

**1. Periodic Sequences: Key Concepts and Definitions**

*   **Definition of a Periodic Sequence:** A discrete-time sequence *x[n]* is said to be periodic with period *N* if and only if:

    `x[n] = x[n + N]` for all integers *n*, where *N* is a positive integer.

    *   The smallest positive integer *N* for which the above condition holds is called the **fundamental period**.

*   **Harmonically Related Complex Exponentials:**  These are the building blocks for representing periodic signals in the frequency domain. They are defined as:

    `e^(j(2π/N)kn)`, where *k* is an integer.

    *   These exponentials are periodic with period *N*.
    *   They are orthogonal over one period.
    *   The fundamental frequency is `ω₀ = 2π/N`.
    *   Harmonics are integer multiples of the fundamental frequency (kω₀).

*   **Fourier Series Representation of Periodic Sequences:**  Any periodic sequence *x[n]* with period *N* can be represented as a linear combination of harmonically related complex exponentials:

    `x[n] =  ∑(k=0 to N-1) a_k * e^(j(2π/N)kn)`

    *   *a_k* are the Fourier Series coefficients representing the amplitude and phase of each harmonic component.
    *   These coefficients can be calculated as:

        `a_k = (1/N) * ∑(n=0 to N-1) x[n] * e^(-j(2π/N)kn)`

**2. DTFT of a Periodic Sequence: Derivation and Representation**

*   **Recall the DTFT Definition:** The DTFT of a discrete-time sequence *x[n]* is defined as:

    `X(e^(jω)) = ∑(n=-∞ to ∞) x[n] * e^(-jωn)`

*   **DTFT of a Periodic Sequence:**  Let *x[n]* be a periodic sequence with period *N*.  The DTFT of *x[n]* is a sum of Dirac delta functions located at integer multiples of the fundamental frequency `ω₀ = 2π/N`.  The DTFT is given by:

    `X(e^(jω)) = 2π * ∑(k=-∞ to ∞) a_k * δ(ω - (2π/N)k)`

    *   *a_k* are the Fourier series coefficients of the periodic sequence.
    *   `δ(ω)` is the Dirac delta function, which is zero everywhere except at ω = 0, where it is infinite, and its integral over any interval containing 0 is 1.

*   **Explanation:** The DTFT of a periodic sequence consists of impulses (delta functions) at multiples of the fundamental frequency.  The strength (area) of each impulse is proportional to the corresponding Fourier series coefficient *a_k*.  This indicates that the signal's energy is concentrated at discrete frequencies.

**3. Frequency Spectra of Sequences: Interpretation and Visualization**

*   **Frequency Spectrum:** The frequency spectrum of a sequence is a plot of the magnitude and phase of its DTFT as a function of frequency (ω).

*   **Magnitude Spectrum:**  `|X(e^(jω))|` represents the amplitude of each frequency component.  For periodic sequences, the magnitude spectrum will consist of impulses with amplitudes proportional to `|a_k|` at frequencies `kω₀`.  It is typically an even function.  Since *a_k* can be complex, you need to take the magnitude: `|a_k|`

*   **Phase Spectrum:**  `∠X(e^(jω))` (or arg[X(e^(jω))]) represents the phase shift of each frequency component.  For periodic sequences, the phase spectrum will consist of phase values associated with each impulse at frequencies `kω₀`, corresponding to `∠a_k`.  It is typically an odd function.

*   **Interpreting the Frequency Spectrum:**

    *   The locations of the impulses in the magnitude spectrum indicate the frequencies present in the signal.
    *   The amplitudes of the impulses indicate the strength of each frequency component.  Larger amplitudes mean more energy at that frequency.
    *   The phase values in the phase spectrum indicate the relative phase shifts between the different frequency components.

*   **Symmetry Properties:** For real-valued periodic sequences *x[n]*:

    *   Magnitude spectrum `|X(e^(jω))|` is an even function of ω:  `|X(e^(jω))| = |X(e^(-jω))|`
    *   Phase spectrum `∠X(e^(jω))` is an odd function of ω: `∠X(e^(jω)) = -∠X(e^(-jω))`

**4. Example: DTFT of a Simple Periodic Sequence**

Let's consider a simple periodic sequence:

`x[n] = cos(ω₀n)`, where `ω₀ = π/4` and the period *N* = 8.

1.  **Fourier Series Representation:** We can express *x[n]* using Euler's formula:

    `x[n] = (1/2) * e^(jω₀n) + (1/2) * e^(-jω₀n)`

    Comparing this with the general Fourier series representation, we see that:

    `a_1 = 1/2` (coefficient for `e^(jω₀n)`)
    `a_7 = 1/2` (coefficient for `e^(-jω₀n)`.  Remember to consider the modulo N for frequency)
    All other `a_k = 0`

2.  **DTFT:** The DTFT of *x[n]* is then:

    `X(e^(jω)) = π * δ(ω - π/4) + π * δ(ω + π/4)`  for `-π ≤ ω ≤ π`

    In general, it will be:

    `X(e^(jω)) = 2π * ∑(k=-∞ to ∞)  [(1/2) * δ(ω - π/4 - 2πk) + (1/2) * δ(ω + π/4 - 2πk)]`

3.  **Frequency Spectrum:**

    *   **Magnitude Spectrum:**  Two impulses of amplitude π at ω = π/4 and ω = -π/4.
    *   **Phase Spectrum:**  Zero at both ω = π/4 and ω = -π/4.

**5. Practice Questions & Exercises**

1.  **Question:** A periodic sequence *x[n]* with a period of 5 has the following values over one period: *x[0] = 1, x[1] = 2, x[2] = 3, x[3] = 2, x[4] = 1*. Determine the Fourier series coefficients *a_k* for k = 0, 1, 2, 3, 4.

    **Answer:**

    `a_k = (1/5) * ∑(n=0 to 4) x[n] * e^(-j(2π/5)kn)`

    Calculating each coefficient:

    *   `a_0 = (1/5) * (1 + 2 + 3 + 2 + 1) = 9/5 = 1.8`
    *   `a_1 = (1/5) * (1 + 2e^(-j2π/5) + 3e^(-j4π/5) + 2e^(-j6π/5) + 1e^(-j8π/5))` ≈ -0.1 + j0.363
    *   `a_2 = (1/5) * (1 + 2e^(-j4π/5) + 3e^(-j8π/5) + 2e^(-j12π/5) + 1e^(-j16π/5))` ≈ -0.1 - j0.363
    *   `a_3 = (1/5) * (1 + 2e^(-j6π/5) + 3e^(-j12π/5) + 2e^(-j18π/5) + 1e^(-j24π/5))` ≈ -0.1 - j0.363
    *   `a_4 = (1/5) * (1 + 2e^(-j8π/5) + 3e^(-j16π/5) + 2e^(-j24π/5) + 1e^(-j32π/5))` ≈ -0.1 + j0.363

2.  **Question:** Given the Fourier series coefficients *a_k = k* for *k = 0, 1, 2*, for a periodic signal with *N = 3*. Find the DTFT, `X(e^(jω))`.

    **Answer:**

    `X(e^(jω)) = 2π * ∑(k=-∞ to ∞) a_k * δ(ω - (2π/3)k)`

    Substituting the given values:

    `X(e^(jω)) = 2π * ∑(k=-∞ to ∞)  [0 * δ(ω - (2π/3)*0) + 1 * δ(ω - (2π/3)*1) + 2 * δ(ω - (2π/3)*2) ]`

    `X(e^(jω)) = 2π * [δ(ω - 2π/3) + 2δ(ω - 4π/3)] + 2π * ∑(k ≠ 1,2,0) [k mod 3 * δ(ω - (2π/3)k)]`

3.  **Exercise:** Sketch the magnitude and phase spectra for a periodic sequence with period 4, where the Fourier series coefficients are: *a_0 = 1, a_1 = j, a_2 = -1, a_3 = -j*.

    **(Solution Outline):**
    *   Calculate the magnitudes: `|a_0| = 1, |a_1| = 1, |a_2| = 1, |a_3| = 1`
    *   Calculate the phases: `∠a_0 = 0, ∠a_1 = π/2, ∠a_2 = π, ∠a_3 = -π/2`
    *   Sketch the magnitude spectrum:  Impulses of amplitude 1 at frequencies 0, π/2, π, and 3π/2 (or -π/2).
    *   Sketch the phase spectrum: Phase values of 0, π/2, π, and -π/2 at the corresponding frequencies.

**6. Important Points to Remember:**

*   The DTFT of a periodic sequence is a sum of Dirac delta functions (impulses) at multiples of the fundamental frequency.
*   The Fourier series coefficients *a_k* determine the amplitudes and phases of these impulses.
*   The magnitude spectrum shows the strength of each frequency component.
*   The phase spectrum shows the phase shift of each frequency component.
*   For real-valued signals, the magnitude spectrum is even, and the phase spectrum is odd.
*   Understanding the frequency spectrum helps analyze the signal's frequency content and its behavior in linear time-invariant systems.

This comprehensive guide provides a solid foundation for understanding the DTFT of periodic sequences and their frequency spectra.  By working through the examples and exercises, you can develop a strong understanding of these key concepts in signals and systems.
