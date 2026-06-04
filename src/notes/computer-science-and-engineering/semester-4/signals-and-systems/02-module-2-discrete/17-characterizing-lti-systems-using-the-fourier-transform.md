---
title: "Characterizing LTI Systems Using the Fourier Transform."
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Discrete"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b158"
status: "completed"
scrapedAt: "2026-05-20T16:15:46.949Z"
---
## Signals and Systems: Module 2 - Discrete: Characterizing LTI Systems Using the Fourier Transform

These notes cover the topic of characterizing Linear Time-Invariant (LTI) systems using the Fourier Transform in the context of discrete-time signals and systems.

**Learning Outcomes:**

*   Understand the frequency response of an LTI system.
*   Compute the output of an LTI system given its input and frequency response.
*   Analyze and design filters using the frequency domain representation.
*   Relate the frequency response to the impulse response of an LTI system.

---

### 1. Introduction to LTI Systems and the Fourier Transform

*   **LTI Systems:** Linear Time-Invariant (LTI) systems are a fundamental class of systems in signal processing. They possess two key properties:
    *   **Linearity:**  If `x1[n]` produces `y1[n]` and `x2[n]` produces `y2[n]`, then `a*x1[n] + b*x2[n]` produces `a*y1[n] + b*y2[n]` for any constants `a` and `b`.
    *   **Time-Invariance:** If `x[n]` produces `y[n]`, then `x[n-k]` produces `y[n-k]` for any integer `k`.

*   **Fourier Transform (Discrete-Time Fourier Transform - DTFT):**  The DTFT decomposes a discrete-time signal into its constituent frequencies.
    *   **DTFT Equation:**  `X(e^(jω)) = Σ (from n = -∞ to ∞) x[n] * e^(-jωn)`
    *   **Inverse DTFT Equation:** `x[n] = (1/2π) ∫ (from -π to π) X(e^(jω)) * e^(jωn) dω`
    *   `X(e^(jω))` is the **frequency response** or **spectrum** of the signal `x[n]`.  It is a complex-valued function of the frequency variable `ω` (omega), which represents the digital frequency in radians per sample.
    *   The DTFT is periodic with a period of `2π`.

*   **Impulse Response:** The impulse response, denoted as `h[n]`, is the output of the LTI system when the input is the unit impulse function `δ[n]` (delta function).

### 2. Frequency Response of LTI Systems

*   **Definition:** The frequency response `H(e^(jω))` of an LTI system is the DTFT of its impulse response `h[n]`.
    *   **Equation:** `H(e^(jω)) = Σ (from n = -∞ to ∞) h[n] * e^(-jωn)`
    *   `H(e^(jω))` describes how the system modifies the amplitude and phase of different frequency components present in the input signal.

*   **Magnitude Response:**  `|H(e^(jω))|` represents the amplitude gain of the system at frequency `ω`. It indicates how much the system amplifies or attenuates each frequency component.

*   **Phase Response:**  `∠H(e^(jω))` represents the phase shift introduced by the system at frequency `ω`. It indicates how much the system delays or advances each frequency component.

*   **Key Relationship:** The frequency response completely characterizes an LTI system.  Knowing `H(e^(jω))` is equivalent to knowing `h[n]`.  One can be derived from the other using the DTFT and Inverse DTFT.

*   **Example:**  Consider a simple moving average filter with impulse response `h[n] = (1/3) [δ[n] + δ[n-1] + δ[n-2]]`. The frequency response is:

    `H(e^(jω)) = (1/3) [1 + e^(-jω) + e^(-j2ω)]`

    The magnitude and phase responses can then be calculated from this expression.

### 3. Computing the Output of an LTI System

*   **Convolution Theorem:**  One of the most important results connecting the time domain and frequency domain for LTI systems. It states that the convolution of two signals in the time domain is equivalent to multiplication in the frequency domain.
    *   **Time Domain:** `y[n] = x[n] * h[n]` (where * denotes convolution)
    *   **Frequency Domain:** `Y(e^(jω)) = X(e^(jω)) * H(e^(jω))`

*   **Procedure for Computing Output:**
    1.  **Find the DTFTs:** Calculate `X(e^(jω)` (DTFT of input signal `x[n]`) and `H(e^(jω)` (frequency response of the LTI system, DTFT of impulse response `h[n]`).
    2.  **Multiply in the Frequency Domain:** Compute `Y(e^(jω)) = X(e^(jω)) * H(e^(jω))`.
    3.  **Inverse DTFT:** Calculate the inverse DTFT of `Y(e^(jω))` to obtain the output signal `y[n]`.

*   **Example:** Suppose `x[n] = δ[n] + δ[n-1]` and `h[n] = 2δ[n] - δ[n-1]`.
    1.  `X(e^(jω)) = 1 + e^(-jω)`
    2.  `H(e^(jω)) = 2 - e^(-jω)`
    3.  `Y(e^(jω)) = (1 + e^(-jω)) * (2 - e^(-jω)) = 2 + e^(-jω) - e^(-j2ω)`
    4.  `y[n] = 2δ[n] + δ[n-1] - δ[n-2]`

### 4. Analyzing and Designing Filters

*   **Filters:** LTI systems designed to selectively modify the frequency content of a signal. Common types include:
    *   **Lowpass Filters:** Allow low frequencies to pass through and attenuate high frequencies.
    *   **Highpass Filters:** Allow high frequencies to pass through and attenuate low frequencies.
    *   **Bandpass Filters:** Allow a specific range of frequencies to pass through and attenuate frequencies outside that range.
    *   **Bandstop Filters:** Attenuate a specific range of frequencies and allow frequencies outside that range to pass through.

*   **Ideal Filters:** Theoretical filters with perfectly sharp cutoffs and constant gain within their passband. They are practically unrealizable but serve as a useful benchmark.

*   **Filter Design:**  The process of choosing the impulse response `h[n]` (or equivalently, the frequency response `H(e^(jω))`) to meet specific filtering requirements. Techniques include:
    *   **Windowing Method:** Start with an ideal filter's impulse response and truncate it using a window function to create a finite-length impulse response (FIR filter).
    *   **Frequency Sampling Method:** Directly specify the desired frequency response at discrete frequencies and then use the inverse DTFT to obtain the impulse response.
    *   **IIR Filter Design:** Design filters with infinite impulse response using techniques like the bilinear transform or impulse invariance.  These are often designed by transforming analog filter designs to the discrete domain.

*   **Example (Ideal Lowpass Filter):**

    An ideal lowpass filter with cutoff frequency `ωc` has the following frequency response:

    `H(e^(jω)) = 1` for `|ω| <= ωc`
    `H(e^(jω)) = 0` for `ωc < |ω| <= π`

    The impulse response is:

    `h[n] = (ωc/π) * sinc(ωc*n)`  where `sinc(x) = sin(x)/x`

### 5. Relationship Between Frequency Response and Impulse Response

*   **Fundamental Relationship:** The frequency response `H(e^(jω))` is the DTFT of the impulse response `h[n]`. Conversely, the impulse response `h[n]` is the inverse DTFT of the frequency response `H(e^(jω))`.

*   **Importance:** This relationship allows us to analyze and design LTI systems in either the time domain or the frequency domain. We can switch between the two domains using the DTFT and inverse DTFT.

*   **Stability and Causality:** The frequency response can be used to determine the stability and causality of an LTI system.
    *   **Stability:** An LTI system is stable if and only if its impulse response `h[n]` is absolutely summable, i.e., `Σ |h[n]| < ∞`. This translates to the frequency response `H(e^(jω))` being bounded (finite).
    *   **Causality:**  An LTI system is causal if and only if its impulse response `h[n] = 0` for `n < 0`.  Causality constraints impose restrictions on the frequency response, but there's no simple, general condition on `H(e^(jω))` alone to guarantee causality.  Often, the *real* and *imaginary* parts of `H(e^(jω))` are related by the Hilbert transform for causal systems.

### 6. Important Points to Remember

*   The Fourier Transform (DTFT) is a powerful tool for analyzing and designing LTI systems.
*   The frequency response completely characterizes an LTI system.
*   The convolution theorem provides a direct link between the time domain and frequency domain.
*   Understanding the frequency response allows us to design filters to modify the frequency content of signals.
*   The stability and causality of an LTI system are related to its impulse response and frequency response.

---

### 7. Practice Questions/Exercises

**1.  Frequency Response of a Simple System:**

    A discrete-time system has an impulse response `h[n] = δ[n] - 0.5δ[n-1]`.

    a)  Find the frequency response `H(e^(jω))`.

    b)  Determine the magnitude response `|H(e^(jω))|`.

    c)  Determine the phase response `∠H(e^(jω))`.

**2.  Output Computation:**

    An LTI system has a frequency response `H(e^(jω)) = 1 + e^(-jω)`. The input signal is `x[n] = cos(πn/2)`. Find the output signal `y[n]`.

**3.  Filter Design (Conceptual):**

    Describe the characteristics (cutoff frequency, passband, stopband) of a lowpass filter that would effectively remove high-frequency noise from a signal containing useful information below 1 kHz, assuming a sampling rate of 8 kHz.

**4. Causality and Stability**
    Is the system defined by `h[n] = u[n]` (the unit step function) causal? Is it stable? Explain your answer.

**Answers:**

**1.  Frequency Response of a Simple System:**

    a) `H(e^(jω)) = 1 - 0.5e^(-jω)`

    b) `|H(e^(jω))| = sqrt((1.25 - cos(ω))`

    c) `∠H(e^(jω)) = -arctan((0.5sin(ω))/(1 - 0.5cos(ω)))`

**2.  Output Computation:**

    *   First, find the DTFT of `x[n] = cos(πn/2)`.  Using DTFT properties, we know that a cosine signal with frequency ω0 will have impulses at +ω0 and -ω0. `X(e^(jω)) = π[δ(ω - π/2) + δ(ω + π/2)] for -π <= ω <= π `

    *   Then,  `Y(e^(jω)) = X(e^(jω)) * H(e^(jω)) = π[δ(ω - π/2) + δ(ω + π/2)][1 + e^(-jω)] =  π[δ(ω - π/2)(1 + e^(-jπ/2)) + δ(ω + π/2)(1 + e^(jπ/2))]`. Since `e^(-jπ/2) = -j` and `e^(jπ/2) = j`.
      `Y(e^(jω)) = π[δ(ω - π/2)(1 - j) + δ(ω + π/2)(1 + j)]`

    *   Finally, take the inverse DTFT.  We know `Y(e^(jω))` is a sum of scaled impulses, so `y[n]` will be the sum of scaled complex exponentials at the corresponding frequencies.
    `y[n] = 1/2 (1-j)e^(jπn/2) + 1/2(1+j)e^(-jπn/2) = cos(πn/2) + sin(πn/2)`

**3.  Filter Design (Conceptual):**

    A lowpass filter to remove noise above 1 kHz with a sampling rate of 8 kHz would have a cutoff frequency `ωc` corresponding to 1 kHz. Since the sampling rate is 8 kHz, the Nyquist frequency is 4 kHz (π radians/sample). Thus, 1 kHz corresponds to `ωc = (1 kHz / 4 kHz) * π = π/4` radians/sample.  Ideally, the filter would have a passband from 0 to π/4 radians/sample, allowing signals within this range to pass with minimal attenuation. The stopband would be from π/4 to π radians/sample, attenuating signals within this range as much as possible.  In practice, there would be a transition band between the passband and stopband.

**4. Causality and Stability**
    The system defined by `h[n] = u[n]` is causal because `h[n] = 0` for `n < 0`. However, it is *not* stable because `Σ |h[n]| = Σ |u[n]| = Σ 1 = ∞`, which diverges.

---

This detailed breakdown should provide a solid foundation for understanding and applying the concepts of characterizing LTI systems using the Fourier Transform in the discrete-time domain. Remember to practice with additional examples and exercises to solidify your understanding.
