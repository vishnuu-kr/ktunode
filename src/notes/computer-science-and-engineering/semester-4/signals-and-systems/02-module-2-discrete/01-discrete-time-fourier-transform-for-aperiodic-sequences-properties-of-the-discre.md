---
title: "Discrete-Time Fourier Transform for Aperiodic Sequences - Properties of the Discrete-Time Fourier Transform (Periodicity"
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Discrete"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b148"
status: "completed"
scrapedAt: "2026-05-20T16:15:35.701Z"
---
## Signals and Systems: Module 2 - Discrete
### Topic: Discrete-Time Fourier Transform for Aperiodic Sequences - Properties of the Discrete-Time Fourier Transform (Periodicity)

**Learning Outcomes:**

*   Understand the concept of the Discrete-Time Fourier Transform (DTFT) for aperiodic sequences.
*   Comprehend the property of periodicity in the DTFT.
*   Apply the periodicity property to analyze and simplify the DTFT of discrete-time signals.
*   Recognize the implications of periodicity in frequency domain representations.

**1. Discrete-Time Fourier Transform (DTFT) for Aperiodic Sequences:**

*   **Definition:** The Discrete-Time Fourier Transform (DTFT) is a mathematical tool used to analyze the frequency content of discrete-time, aperiodic sequences.

*   **Formula:**  For a discrete-time sequence `x[n]`, the DTFT, denoted as `X(e^(jω))`, is defined as:

    `X(e^(jω)) = Σ_{n=-∞}^{∞} x[n] * e^(-jωn)`

    where:
    *   `ω` is the normalized angular frequency (radians/sample).  It's important to remember this is *normalized* and not actual frequency.
    *   `x[n]` is the discrete-time sequence.
    *   `j` is the imaginary unit (√-1).

*   **Inverse DTFT (IDTFT):** Reconstructs the original signal `x[n]` from its DTFT `X(e^(jω))`.

    `x[n] = (1 / 2π) ∫_{-π}^{π} X(e^(jω)) * e^(jωn) dω`

    This integral is evaluated over one period of `X(e^(jω))`.

*   **Key Concepts:**
    *   The DTFT transforms a discrete-time signal (sequence) from the time domain (`n`) to the frequency domain (`ω`).
    *   The DTFT produces a *continuous* function of frequency `ω`.
    *   The DTFT is defined for *aperiodic* discrete-time signals.  Periodic signals are typically better analyzed using the Discrete Fourier Series (DFS).
    *   `X(e^(jω))` is, in general, a complex-valued function of `ω`.  It can be expressed in polar form as magnitude and phase: `X(e^(jω)) = |X(e^(jω))| * e^(j∠X(e^(jω))}`.

**2. Periodicity Property of the DTFT:**

*   **Statement:** The DTFT, `X(e^(jω))`, is periodic with a period of `2π`.  Mathematically:

    `X(e^(j(ω + 2πk))) = X(e^(jω))` for all integers `k`.

*   **Explanation:** This means that the frequency content of the discrete-time signal repeats itself every `2π` radians/sample.  Once we know the DTFT over an interval of length `2π` (e.g., `-π` to `π` or `0` to `2π`), we know the entire DTFT.

*   **Reasoning:** This periodicity arises from the complex exponential term `e^(-jωn)` in the DTFT definition.  Since `e^(j2πk) = 1` for any integer `k`, adding `2πk` to `ω` doesn't change the value of the exponential.

    `e^(-j(ω + 2πk)n) = e^(-jωn) * e^(-j2πkn) = e^(-jωn) * 1 = e^(-jωn)`

*   **Implications:**
    *   We only need to compute and analyze the DTFT over a single period (usually `-π` to `π`).
    *   When plotting the magnitude and phase of the DTFT, we typically plot it over the interval `-π` to `π`.  The rest of the frequency spectrum is simply a repetition of this interval.
    *   When implementing DTFT-based signal processing algorithms, we can exploit the periodicity to reduce computational complexity.

**3. Examples and Applications:**

*   **Example 1: DTFT of a simple sequence**

    Consider the sequence `x[n] = a^n u[n]`, where `|a| < 1` and `u[n]` is the unit step function.

    `X(e^(jω)) = Σ_{n=0}^{∞} (a * e^(-jω))^n`

    Using the geometric series formula (valid because `|a| < 1`), we get:

    `X(e^(jω)) = 1 / (1 - a * e^(-jω))`

    To verify the periodicity, we can substitute `ω + 2πk` for `ω`:

    `X(e^(j(ω + 2πk))) = 1 / (1 - a * e^(-j(ω + 2πk))) = 1 / (1 - a * e^(-jω) * e^(-j2πkn)) = 1 / (1 - a * e^(-jω)) = X(e^(jω))`

*   **Example 2: Plotting the Magnitude Spectrum**

    Suppose we have `X(e^(jω)) = 1 + cos(ω)`. When plotting its magnitude spectrum, we only need to plot it from -π to π. The spectrum from π to 3π will be identical to the spectrum from -π to π, and so on.

*   **Applications:**
    *   **Speech processing:** Analyzing the frequency content of speech signals.  The periodicity helps in identifying fundamental frequencies.
    *   **Audio processing:**  Analyzing and manipulating audio signals, such as filtering and equalization.
    *   **Image processing:** Although generally images are 2D, the DTFT concept can be extended. 1D rows or columns can be treated as signals and processed.
    *   **Communications:** Designing and analyzing digital communication systems.

**4. Practice Questions/Exercises:**

1.  **Question:** Given `x[n] = {1, 2, 1, 0}` for `n = 0, 1, 2, 3` respectively, and `x[n] = 0` otherwise. Compute the DTFT `X(e^(jω))`. Sketch (or describe) its magnitude spectrum over the range `-π ≤ ω ≤ π`. How would the plot change if you considered the range `π ≤ ω ≤ 3π`?

    **Answer:**

    `X(e^(jω)) = Σ_{n=0}^{3} x[n] * e^(-jωn) = 1 + 2e^(-jω) + e^(-j2ω) + 0e^(-j3ω) = 1 + 2e^(-jω) + e^(-j2ω)`

    We can simplify this:

    `X(e^(jω)) = e^(-jω)(e^(jω) + 2 + e^(-jω)) = e^(-jω)(2 + 2cos(ω))`

    The magnitude spectrum is `|X(e^(jω))| = |2 + 2cos(ω)|`.  Since `2 + 2cos(ω)` is always non-negative, `|X(e^(jω))| = 2 + 2cos(ω)`.  This function is maximum at ω = 0 (value = 4) and zero at ω = ±π.

    The plot from `π ≤ ω ≤ 3π` would be a repetition of the plot from `-π ≤ ω ≤ π`.  The only difference is a horizontal shift of `2π`.  Mathematically, `|X(e^(j(ω+2π)))| = |X(e^(jω))|` due to the periodicity property.

2.  **Question:** Explain why the DTFT is periodic.

    **Answer:** The periodicity of the DTFT is a direct consequence of the complex exponential `e^(-jωn)` in the DTFT definition. Adding integer multiples of `2π` to the frequency `ω` doesn't change the value of the exponential because `e^(j2πkn) = 1` for any integer `k` and `n`.

3.  **Question:** A discrete-time signal has a DTFT `X(e^(jω))`.  If `X(e^(j0)) = 5`, what can you say about `X(e^(j2π))`?

    **Answer:**  Due to the periodicity property, `X(e^(j2π)) = X(e^(j(0 + 2π))) = X(e^(j0)) = 5`.

**5. Important Points to Remember:**

*   The DTFT transforms a discrete-time, *aperiodic* sequence to a *continuous* function in the frequency domain.
*   The DTFT is periodic with a period of `2π`.  This is a fundamental property.
*   Due to periodicity, analyzing the DTFT over the interval `-π` to `π` provides complete information.
*   The periodicity simplifies computations and interpretations in various signal processing applications.
*   `ω` represents *normalized angular frequency*. Don't confuse this with standard analog frequency.

This detailed explanation, including examples and practice questions, should provide a thorough understanding of the DTFT's periodicity property. Remember to practice more problems to solidify your understanding. Good luck!
