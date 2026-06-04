---
title: "Parseval's theorem"
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Discrete"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b152"
status: "completed"
scrapedAt: "2026-05-20T16:15:42.695Z"
---
# Signals and Systems - Module 2: Discrete - Parseval's Theorem

## Introduction

This module focuses on Parseval's theorem in the context of discrete-time signals and systems.  Parseval's theorem provides a fundamental relationship between the energy of a discrete-time signal in the time domain and its energy in the frequency domain (represented by its Discrete-Time Fourier Transform or DTFT).  Understanding this theorem is crucial for analyzing and designing discrete-time systems.

## Learning Outcomes

By the end of this topic, you should be able to:

*   Define Parseval's theorem for discrete-time signals.
*   Apply Parseval's theorem to calculate the energy of a discrete-time signal.
*   Use Parseval's theorem to relate the energy of a signal to the energy of its DTFT.
*   Understand the implications of Parseval's theorem in signal processing applications.

## 1. Key Concepts and Definitions

*   **Discrete-Time Signal:** A sequence of numbers indexed by integers, denoted as x[n], where n is an integer.
*   **Energy of a Discrete-Time Signal:** The energy E of a discrete-time signal x[n] is defined as the sum of the squared magnitudes of the signal values:

    ```
    E = sum_{n=-infinity}^{infinity} |x[n]|^2
    ```

*   **Discrete-Time Fourier Transform (DTFT):**  The DTFT of a discrete-time signal x[n] is a complex-valued function of frequency, denoted as X(e<sup>jω</sup>), where ω is the angular frequency.  It is defined as:

    ```
    X(e^{jω}) = sum_{n=-infinity}^{infinity} x[n] * e^{-jωn}
    ```

*   **Periodic Signal:** A signal x[n] is periodic with period N if x[n + N] = x[n] for all n.  For periodic signals, we often consider the energy per period.
*   **Parseval's Theorem (for Discrete-Time Signals):** States that the energy of a discrete-time signal x[n] is equal to 1/(2π) times the integral of the squared magnitude of its DTFT, X(e<sup>jω</sup>), over one period (2π):

    ```
    sum_{n=-infinity}^{infinity} |x[n]|^2 = (1 / 2π) * integral_{−π}^{π} |X(e^{jω})|^2 dω
    ```

    **Important Note:** The integration is performed over one period (2π) of the DTFT, typically from -π to π.  Due to the periodicity of the DTFT, integrating over any other interval of length 2π will yield the same result.

## 2. Parseval's Theorem Explained

Parseval's theorem is a conservation of energy principle.  It states that the total energy of a signal remains the same whether we calculate it in the time domain (using the signal x[n]) or in the frequency domain (using its DTFT, X(e<sup>jω</sup>)). This is analogous to Parseval's relation for Fourier series of continuous-time periodic signals.

**Intuition:**

Think of the DTFT as decomposing the signal x[n] into a sum of complex exponentials of different frequencies.  The magnitude squared of the DTFT, |X(e<sup>jω</sup>)|<sup>2</sup>, represents the "energy density" at frequency ω.  Integrating this energy density over all frequencies gives the total energy of the signal.  Parseval's theorem simply says that this total energy is equal to the sum of the squared magnitudes of the original signal values in the time domain.

## 3. Applications of Parseval's Theorem

Parseval's theorem has several important applications in signal processing:

*   **Energy Calculation:**  If you know the DTFT of a signal, it can be easier to calculate the energy of the signal using the integral in Parseval's theorem than to calculate it directly from the time-domain signal.
*   **System Analysis:**  Parseval's theorem can be used to analyze the effect of a linear time-invariant (LTI) system on the energy of a signal.  If you know the frequency response of the system, you can use Parseval's theorem to determine how the system modifies the energy of the input signal.
*   **Filter Design:**  Parseval's theorem is used in the design of digital filters. It can be used to ensure that the filter preserves the energy of the signal within a certain frequency band.
*   **Data Compression:** Understanding the energy distribution of a signal in the frequency domain allows efficient data compression techniques to discard less important frequencies.
*   **Signal Reconstruction:** In situations where we only have partial information about the DTFT, Parseval's theorem can provide constraints that aid in reconstructing the original signal.

## 4. Examples

**Example 1:  Simple Sequence**

Consider the discrete-time signal x[n] = {1, 2, 3, 2, 1}, where the values are defined for n = -2, -1, 0, 1, 2, respectively, and zero elsewhere.

*   **Time Domain Energy:**

    ```
    E = sum_{n=-infinity}^{infinity} |x[n]|^2 = 1^2 + 2^2 + 3^2 + 2^2 + 1^2 = 1 + 4 + 9 + 4 + 1 = 19
    ```

*   **DTFT (Calculation is more complex and not shown here. Assume we have calculated X(e<sup>jω</sup>))**

*   **Frequency Domain Energy (Applying Parseval's Theorem):**  Assume that after calculating the DTFT (which is beyond the scope of this example), and computing the integral:

    ```
    (1 / 2π) * integral_{−π}^{π} |X(e^{jω})|^2 dω  = 19
    ```

    This confirms Parseval's theorem.

**Example 2: Exponential Signal**

Let x[n] = a<sup>n</sup>u[n], where |a| < 1 and u[n] is the unit step function.

*   **Time Domain Energy:**

    ```
    E = sum_{n=0}^{infinity} |a^n|^2 = sum_{n=0}^{infinity} (a^2)^n = 1 / (1 - a^2)
    ```

*   **DTFT:**

    ```
    X(e^{jω}) = 1 / (1 - a*e^{-jω})
    ```

*   **Frequency Domain Energy (Applying Parseval's Theorem):** (This involves complex integration, which is beyond the scope of this simple example, but the result will be:)

    ```
    (1 / 2π) * integral_{−π}^{π} |1 / (1 - a*e^{-jω})|^2 dω = 1 / (1 - a^2)
    ```

    Again, Parseval's theorem holds.

**Example 3: Impulse Signal**

Let x[n] = δ[n] (the unit impulse function).

*   **Time Domain Energy:**

    ```
    E = sum_{n=-infinity}^{infinity} |δ[n]|^2 = |δ[0]|^2 = 1
    ```

*   **DTFT:**

    ```
    X(e^{jω}) = 1
    ```

*   **Frequency Domain Energy (Applying Parseval's Theorem):**

    ```
    (1 / 2π) * integral_{−π}^{π} |1|^2 dω = (1 / 2π) * integral_{−π}^{π} 1 dω = (1 / 2π) * [ω]_{−π}^{π} = (1 / 2π) * (π - (-π)) = (1 / 2π) * 2π = 1
    ```

    Once more, the theorem is verified.

## 5. Practice Questions/Exercises

**Question 1:**

A discrete-time signal x[n] has the following values: x[0] = 1, x[1] = -1, x[2] = 2, and x[n] = 0 for all other values of n.

(a) Calculate the energy of the signal directly from the time-domain sequence.

(b)  Assume you somehow know the DTFT's magnitude squared integrated over the interval [-π, π] yields 24.  Does this satisfy Parseval's Theorem?

**Answer 1:**

(a)  E = |1|<sup>2</sup> + |-1|<sup>2</sup> + |2|<sup>2</sup> = 1 + 1 + 4 = 6

(b)  According to Parseval's Theorem,  (1/2π) * ∫[-π,π] |X(e<sup>jω</sup>)|<sup>2</sup> dω =  Σ|x[n]|<sup>2</sup>.  Since (1/2π) * ∫[-π,π] |X(e<sup>jω</sup>)|<sup>2</sup> dω = 24/2π = 12/π ≈ 3.82  and the energy from the time domain is 6, this *does not* satisfy Parseval's Theorem.  This means either the energy was not calculated properly in the time domain OR more likely the integral over the magnitude squared of the DTFT was incorrect (the given value of 24 is not correct for this signal).  A proper calculation of the DTFT and its energy over the specified interval would give an answer equal to 6*2π = 12π.

**Question 2:**

If a discrete-time signal has energy E<sub>x</sub>, and it is passed through an ideal low-pass filter with a cutoff frequency of ω<sub>c</sub> (where 0 < ω<sub>c</sub> < π), what fraction of the original signal energy will be present in the output signal?  Assume the filter's gain is 1 in the passband.

**Answer 2:**

Let x[n] be the input signal and y[n] be the output signal.  Let X(e<sup>jω</sup>) and Y(e<sup>jω</sup>) be their respective DTFTs.  Let H(e<sup>jω</sup>) be the frequency response of the ideal low-pass filter.  Then Y(e<sup>jω</sup>) = X(e<sup>jω</sup>)H(e<sup>jω</sup>). Since the filter is ideal,

H(e<sup>jω</sup>) = 1 for |ω| ≤ ω<sub>c</sub>
H(e<sup>jω</sup>) = 0 for ω<sub>c</sub> < |ω| ≤ π

By Parseval's theorem, the energy of the output signal is:

E<sub>y</sub> = (1 / 2π) * integral<sub>−π</sub><sup>π</sup> |Y(e<sup>jω</sup>)|<sup>2</sup> dω = (1 / 2π) * integral<sub>−π</sub><sup>π</sup> |X(e<sup>jω</sup>)H(e<sup>jω</sup>)|<sup>2</sup> dω

Since H(e<sup>jω</sup>) is 1 within the passband and 0 outside, we have:

E<sub>y</sub> = (1 / 2π) * integral<sub>−ω<sub>c</sub></sub><sup>ω<sub>c</sub></sup> |X(e<sup>jω</sup>)|<sup>2</sup> dω

To find the fraction of the original signal energy in the output, we divide E<sub>y</sub> by E<sub>x</sub>:

Fraction = E<sub>y</sub> / E<sub>x</sub> =  [(1 / 2π) * integral<sub>−ω<sub>c</sub></sub><sup>ω<sub>c</sub></sup> |X(e<sup>jω</sup>)|<sup>2</sup> dω] / [(1 / 2π) * integral<sub>−π</sub><sup>π</sup> |X(e<sup>jω</sup>)|<sup>2</sup> dω]

Without knowing the specific form of X(e<sup>jω</sup>), we cannot simplify this further. However, in principle, this formula gives the fraction of energy passed by the filter.  In some special cases like white noise, |X(e<sup>jω</sup>)|<sup>2</sup> will be constant and the fraction becomes ω<sub>c</sub>/π.

**Question 3:**

A system has an input signal x[n] and an output signal y[n] related by y[n] = x[n] * h[n], where h[n] is the impulse response of the system.  Given that the energy of x[n] is Ex and the frequency response of the system is H(e<sup>jω</sup>), derive an expression for the energy of y[n] in terms of Ex and H(e<sup>jω</sup>).

**Answer 3:**

Let X(e<sup>jω</sup>) be the DTFT of x[n] and Y(e<sup>jω</sup>) be the DTFT of y[n].  Since y[n] = x[n] * h[n], we have Y(e<sup>jω</sup>) = X(e<sup>jω</sup>)H(e<sup>jω</sup>) in the frequency domain.

By Parseval's theorem, the energy of y[n] is:

Ey = (1 / 2π) * integral<sub>−π</sub><sup>π</sup> |Y(e<sup>jω</sup>)|<sup>2</sup> dω

Substituting Y(e<sup>jω</sup>) = X(e<sup>jω</sup>)H(e<sup>jω</sup>), we get:

Ey = (1 / 2π) * integral<sub>−π</sub><sup>π</sup> |X(e<sup>jω</sup>)H(e<sup>jω</sup>)|<sup>2</sup> dω = (1 / 2π) * integral<sub>−π</sub><sup>π</sup> |X(e<sup>jω</sup>)|<sup>2</sup> |H(e<sup>jω</sup>)|<sup>2</sup> dω

We know that Ex = (1 / 2π) * integral<sub>−π</sub><sup>π</sup> |X(e<sup>jω</sup>)|<sup>2</sup> dω.  Therefore, we can write:

Ey = (1 / 2π) * integral<sub>−π</sub><sup>π</sup> |H(e<sup>jω</sup>)|<sup>2</sup> |X(e<sup>jω</sup>)|<sup>2</sup> dω

If |H(e<sup>jω</sup>)|<sup>2</sup> is constant (e.g., a pure gain), then Ey =  |H(e<sup>jω</sup>)|<sup>2</sup> * Ex.  In the general case, the integral remains and the result is:

Ey =  (1 / 2π) * integral<sub>−π</sub><sup>π</sup> |H(e<sup>jω</sup>)|<sup>2</sup> |X(e<sup>jω</sup>)|<sup>2</sup> dω

This gives the energy of the output in terms of the input energy and the frequency response of the system.

## 6. Important Points to Remember

*   Parseval's theorem is a powerful tool for relating time-domain and frequency-domain representations of discrete-time signals.
*   It is based on the conservation of energy principle.
*   The integration in Parseval's theorem is performed over one period (2π) of the DTFT.
*   Be careful with the scaling factor of (1/2π) when applying the theorem.
*   Parseval's theorem applies to *energy* signals, not power signals.
*   Understanding Parseval's Theorem is crucial for many signal processing applications, including filter design, system analysis, and data compression.
