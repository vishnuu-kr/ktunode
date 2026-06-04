---
title: "Elementary sequences- Real Sinusoidal Sequences"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b12f"
status: "completed"
scrapedAt: "2026-05-20T16:15:19.660Z"
---
## Signals and Systems - Module 1: 1D Signals - Elementary Sequences: Real Sinusoidal Sequences

**Learning Outcomes:**

*   Understand the definition and properties of real sinusoidal sequences.
*   Identify the parameters that define a real sinusoidal sequence (amplitude, frequency, phase).
*   Analyze the relationship between continuous-time and discrete-time sinusoidal signals.
*   Determine if a discrete-time sinusoidal sequence is periodic.
*   Calculate the fundamental period of a periodic discrete-time sinusoidal sequence.
*   Differentiate between analog frequency and digital frequency and their implications.

**1. Introduction**

Real sinusoidal sequences are a fundamental building block in signal processing, playing a crucial role in representing and analyzing various types of signals.  They are discrete-time counterparts to the well-known continuous-time sinusoidal signals.  Understanding their properties and parameters is crucial for analyzing more complex signals and systems.

**2. Definition of a Real Sinusoidal Sequence**

A real sinusoidal sequence, denoted as `x[n]`, is mathematically defined as:

```
x[n] = A * cos(ωn + φ)
```

where:

*   `n` is the integer-valued discrete-time index (n = ..., -2, -1, 0, 1, 2, ...).
*   `A` is the amplitude of the sinusoidal sequence.  `A > 0`. It represents the peak value of the sequence.
*   `ω` (omega) is the digital frequency, measured in radians per sample.  It determines how quickly the signal oscillates in discrete time.  Important note: `-π ≤ ω ≤ π`.  This is a crucial difference from continuous-time signals.
*   `φ` (phi) is the phase shift, measured in radians. It determines the initial value of the sequence at n = 0.

**3. Parameters of a Real Sinusoidal Sequence**

*   **Amplitude (A):**  The maximum deviation of the signal from zero.  A larger amplitude corresponds to a stronger signal.
*   **Digital Frequency (ω):**  Determines the rate of oscillation of the sequence. Higher values of |ω| mean faster oscillations.  Crucially, `ω` is *not* the same as the frequency in Hertz (Hz).  We will explore the relationship between analog and digital frequencies later. The range of `ω` is from `-π` to `π`. Values outside this range are aliased.
*   **Phase Shift (φ):**  Shifts the sinusoidal sequence along the time axis.  A positive phase shift shifts the sequence to the left, and a negative phase shift shifts it to the right.  The phase is measured in radians.

**4. Relationship Between Continuous-Time and Discrete-Time Sinusoidal Signals**

A discrete-time sinusoidal sequence often arises from sampling a continuous-time sinusoidal signal.  Suppose we have a continuous-time sinusoidal signal:

```
x(t) = A * cos(Ωt + φ)
```

where:

*   `t` is the continuous time variable (in seconds).
*   `Ω` (Omega) is the analog frequency (in radians per second).

If we sample this continuous-time signal at a sampling rate of `Fs` samples per second (or a sampling period of `T = 1/Fs` seconds), we obtain the discrete-time signal:

```
x[n] = x(nT) = A * cos(ΩnT + φ) = A * cos((Ω/Fs)n + φ)
```

Comparing this with the definition of a real sinusoidal sequence, we see that:

```
ω = Ω/Fs = ΩT
```

This is the crucial relationship between the analog frequency `Ω` (rad/s) and the digital frequency `ω` (rad/sample).  The digital frequency is the analog frequency normalized by the sampling frequency.

*   **Important Note:** The digital frequency `ω` is unique only over the interval `-π ≤ ω ≤ π`. This is due to the periodic nature of the cosine function.  Frequencies outside this range are *aliased*, meaning they are indistinguishable from frequencies within this range after sampling.

**Example:**

A continuous-time signal  `x(t) = 5cos(100πt + π/4)` is sampled at a rate of `Fs = 200 Hz`. Determine the resulting discrete-time signal.

*   `Ω = 100π` rad/s
*   `ω = Ω/Fs = (100π) / 200 = π/2` rad/sample
*   `x[n] = 5cos(πn/2 + π/4)`

**5. Periodicity of Discrete-Time Sinusoidal Sequences**

A discrete-time sequence `x[n]` is periodic if there exists a positive integer `N` (the fundamental period) such that:

```
x[n + N] = x[n]  for all n
```

For a sinusoidal sequence `x[n] = A * cos(ωn + φ)` to be periodic, the digital frequency `ω` must be a rational multiple of 2π. In other words:

```
ω = (2πk) / N
```

where `k` and `N` are integers.  `N` is the fundamental period if `k` and `N` are relatively prime (i.e., they have no common factors other than 1).  To find `N` and `k` you can simply express `ω/2π` as a fraction `k/N` in its lowest terms.

**Example 1: Periodic**

Let `x[n] = cos(πn/4)`.  Here, `ω = π/4`.

`ω/(2π) = (π/4) / (2π) = 1/8`.  Therefore, `k = 1` and `N = 8`. The sequence is periodic with a fundamental period of 8.

**Example 2: Non-Periodic**

Let `x[n] = cos(n)`.  Here, `ω = 1`.

`ω/(2π) = 1/(2π)`. Since π is irrational, this cannot be expressed as a ratio of two integers. Therefore, the sequence is non-periodic.

**6. Determining the Fundamental Period (N)**

If a discrete-time sinusoidal sequence `x[n] = A*cos(ωn + φ)` is periodic, its fundamental period `N` can be found by expressing `ω` as:

```
ω = (2πk) / N
```

Rearranging for `N`:

```
N = (2πk) / ω
```

Find the smallest integer value of `k` that makes `N` also an integer. This resulting value of `N` is the fundamental period.

**Example:**

Consider `x[n] = cos(3πn/5)`.

`ω = 3π/5`

`N = (2πk) / (3π/5) = (10k)/3`

For k = 1, N = 10/3 (not an integer).

For k = 2, N = 20/3 (not an integer).

For k = 3, N = 10 (an integer).

Therefore, the fundamental period is N = 10.

**7. Analog vs. Digital Frequency**

| Feature         | Analog Frequency (Ω) | Digital Frequency (ω) |
|-----------------|-----------------------|-----------------------|
| Symbol          | Ω                     | ω                     |
| Units           | rad/s                 | rad/sample           |
| Range           | -∞ to ∞               | -π to π               |
| Relationship   | ω = Ω/Fs = ΩT         |                       |
| Alias Free      | N/A (continuous)      | Only for |ω| ≤ π       |
| Significance    | Rate of oscillation in continuous time   | Rate of oscillation in discrete time, relative to the sampling rate |

**8. Important Points to Remember**

*   Digital frequency `ω` is *always* in radians per sample.
*   `-π ≤ ω ≤ π` is the unique range for digital frequencies.  Values outside this range are aliased.
*   For a discrete-time sinusoidal sequence to be periodic, `ω/(2π)` must be a rational number (expressible as a fraction of two integers).
*   The fundamental period `N` must be an integer.
*   Understanding the relationship `ω = Ω/Fs` is crucial for converting between analog and digital frequencies.
*   Always simplify `ω/(2π)` to its simplest fraction `k/N` to easily identify the fundamental period.

**9. Practice Questions/Exercises**

1.  **Identify the parameters A, ω, and φ for the following sinusoidal sequence:  x[n] = 3cos(πn/2 + π/3).**

    *   A = 3
    *   ω = π/2 radians/sample
    *   φ = π/3 radians

2.  **A continuous-time signal x(t) = 2cos(500πt) is sampled at a rate of 1000 Hz.  Determine the digital frequency ω.**

    *   Ω = 500π rad/s
    *   Fs = 1000 Hz
    *   ω = Ω/Fs = (500π)/1000 = π/2 rad/sample

3.  **Determine if the following sequences are periodic. If periodic, find the fundamental period:**

    *   **(a) x[n] = cos(πn/5)**
        *   `ω = π/5`
        *   `ω/(2π) = (π/5)/(2π) = 1/10` which is rational. Therefore, Periodic.
        *   `N = 10`

    *   **(b) x[n] = cos(n/8)**
        *  `ω = 1/8`
        *  `ω/(2π) = (1/8) / (2π) = 1/(16π)` which is irrational.  Therefore, Non-Periodic.

    *   **(c) x[n] = cos(0.2πn)`**
        *   `ω = 0.2π = π/5`
        *   `ω/(2π) = (π/5)/(2π) = 1/10` which is rational.  Therefore, Periodic.
        *   `N = 10`

4.  **A discrete-time sinusoidal sequence is given by  x[n] = 4cos(ωn + π/6).  If the fundamental period is N = 12, what is the digital frequency ω?**

    *   `ω = (2πk) / N`
    *   `ω = (2πk) / 12 = (πk)/6`
    *   Since N is the fundamental period, `k=1`
    *   `ω = π/6`

5.  **Explain the concept of aliasing in the context of discrete-time sinusoidal signals. Provide an example.**

    *   Aliasing occurs when a continuous-time signal is sampled at a rate lower than the Nyquist rate (twice the maximum frequency component of the signal). This results in high-frequency components being misinterpreted as lower-frequency components in the discrete-time domain. This means the signal is improperly reconstructed.
    *   **Example:** Suppose a continuous-time signal has a frequency component of `Ω = 3πFs/4`, where Fs is the sampling rate. After sampling, the digital frequency is `ω = Ω/Fs = 3π/4`.  Since digital frequencies are only unique in the range [-π, π], the frequency `3π/4` is aliased.  It is indistinguishable from the frequency `-π/4` because `cos( (3π/4)n) = cos( (-π/4)n )` for all integers n.

These notes provide a comprehensive overview of real sinusoidal sequences in discrete-time signals. Mastering these concepts is essential for further studies in signal processing and related fields. Remember to practice with various examples to solidify your understanding.
