---
title: "Parseval’s Relation"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b144"
status: "completed"
scrapedAt: "2026-05-20T16:15:33.641Z"
---
# Signals and Systems - Module 1: 1D Signals - Parseval's Relation

## Introduction

This module delves into Parseval's Relation, a fundamental concept in signal processing. It connects the energy of a signal in the time domain to the energy of its representation in the frequency domain (Fourier Transform). Understanding Parseval's Relation is crucial for analyzing signal energy and power distributions.

## Learning Outcomes

Upon completion of this section, you should be able to:

*   State Parseval's Relation for both continuous-time and discrete-time signals.
*   Apply Parseval's Relation to calculate the energy of a signal from its Fourier Transform.
*   Verify Parseval's Relation for simple signals.
*   Explain the significance of Parseval's Relation in signal analysis.

## 1. Key Concepts and Definitions

*   **Energy of a Signal:**  A measure of the total energy content of a signal.

    *   **Continuous-Time Signal x(t):** The energy is given by:
        ```
        E = ∫ |x(t)|^2 dt  (integrated from -∞ to ∞)
        ```
    *   **Discrete-Time Signal x[n]:** The energy is given by:
        ```
        E = ∑ |x[n]|^2  (summed from n = -∞ to ∞)
        ```
*   **Fourier Transform:** A mathematical tool that decomposes a signal into its constituent frequencies.

    *   **Continuous-Time Fourier Transform (CTFT):**
        ```
        X(f) = ∫ x(t) * e^(-j2πft) dt  (integrated from -∞ to ∞)
        ```
    *   **Discrete-Time Fourier Transform (DTFT):**
        ```
        X(ω) = ∑ x[n] * e^(-jωn)  (summed from n = -∞ to ∞)
        ```

*   **Parseval's Relation (Theorem):**  States that the energy of a signal in the time domain is equal (or proportional) to the energy of its Fourier Transform. This establishes an important relationship between the signal's representation in time and frequency.

## 2. Parseval's Relation Formulas

### 2.1 Continuous-Time Signals

For a continuous-time signal `x(t)` and its Fourier Transform `X(f)`, Parseval's Relation is given by:

```
∫ |x(t)|^2 dt  = ∫ |X(f)|^2 df  (integrated from -∞ to ∞ for both integrals)
```

This means the energy calculated in the time domain equals the energy calculated in the frequency domain.

### 2.2 Discrete-Time Signals

For a discrete-time signal `x[n]` and its DTFT `X(ω)`, Parseval's Relation is given by:

```
∑ |x[n]|^2 = (1 / 2π) ∫ |X(ω)|^2 dω (summed from n = -∞ to ∞, integrated from -π to π)
```

**Important Note:** The scaling factor `(1 / 2π)` in the discrete-time version arises because the DTFT is periodic with a period of `2π`.

## 3. Applying Parseval's Relation

Parseval's Relation provides a powerful tool for:

*   **Calculating signal energy:** If the Fourier Transform is known and easier to integrate, the energy can be calculated in the frequency domain.
*   **Verifying signal processing operations:**  Checking if an operation (e.g., filtering) preserves signal energy.
*   **Understanding energy distribution:**  Analyzing how signal energy is distributed across different frequencies.

## 4. Examples

### 4.1 Example 1: Continuous-Time Signal

Let's consider the signal `x(t) = e^(-at)u(t)`, where `a > 0` and `u(t)` is the unit step function.

1.  **Calculate the energy in the time domain:**

    ```
    E_time = ∫ |x(t)|^2 dt  = ∫ |e^(-at)u(t)|^2 dt (from -∞ to ∞)
           = ∫ e^(-2at) dt (from 0 to ∞)  [because u(t) = 0 for t < 0 and u(t) = 1 for t >= 0]
           = [ -e^(-2at) / (2a) ] from 0 to ∞
           = 1 / (2a)
    ```

2.  **Find the Fourier Transform:**

    ```
    X(f) = ∫ x(t) * e^(-j2πft) dt = ∫ e^(-at)u(t) * e^(-j2πft) dt (from -∞ to ∞)
           = ∫ e^(-(a + j2πf)t) dt (from 0 to ∞)
           = [ -e^(-(a + j2πf)t) / (a + j2πf) ] from 0 to ∞
           = 1 / (a + j2πf)
    ```

3.  **Calculate the energy in the frequency domain:**

    ```
    E_freq = ∫ |X(f)|^2 df = ∫ |1 / (a + j2πf)|^2 df (from -∞ to ∞)
           = ∫ 1 / (a^2 + (2πf)^2) df (from -∞ to ∞)
    ```
    This integral requires a bit more work using integral tables or a suitable integration technique.  The result is:
    ```
    E_freq = [1/(2πa) * arctan(2πf/a)] from -∞ to ∞ =  1 / (2a)
    ```

4.  **Verification:**

    We observe that `E_time = E_freq = 1 / (2a)`, thus verifying Parseval's Relation.

### 4.2 Example 2: Discrete-Time Signal

Consider the signal `x[n] = α^n u[n]`, where `|α| < 1` and `u[n]` is the unit step function.

1.  **Calculate the energy in the time domain:**

    ```
    E_time = ∑ |x[n]|^2 = ∑ |α^n u[n]|^2 (from n = -∞ to ∞)
           = ∑ α^(2n) (from n = 0 to ∞)  [since u[n] = 0 for n < 0 and u[n] = 1 for n >= 0]
           = 1 / (1 - α^2)
    ```

2.  **Find the DTFT:**

    ```
    X(ω) = ∑ x[n] * e^(-jωn) = ∑ α^n u[n] * e^(-jωn) (from n = -∞ to ∞)
           = ∑ (α * e^(-jω))^n (from n = 0 to ∞)
           = 1 / (1 - α * e^(-jω))
    ```

3.  **Calculate the energy in the frequency domain:**

    ```
    E_freq = (1 / 2π) ∫ |X(ω)|^2 dω  (integrated from -π to π)
           = (1 / 2π) ∫ |1 / (1 - α * e^(-jω))|^2 dω (integrated from -π to π)
           = (1 / 2π) ∫ 1 / ((1 - αcos(ω))^2 + (αsin(ω))^2) dω (integrated from -π to π)
           = (1 / 2π) ∫ 1 / (1 - 2αcos(ω) + α^2) dω (integrated from -π to π)
    ```
    This integral requires a trigonometric substitution or complex analysis techniques to solve.  The result is:

    ```
    E_freq =  1 / (1 - α^2)
    ```

4.  **Verification:**

    We see that `E_time = E_freq = 1 / (1 - α^2)`, confirming Parseval's Relation for the discrete-time case.

## 5. Significance of Parseval's Relation

*   **Energy Conservation:**  It demonstrates that the total energy of a signal remains constant regardless of whether it's represented in the time or frequency domain.  This principle is vital in various signal processing applications.
*   **Power Spectral Density (PSD):**  Parseval's relation is directly linked to the concept of the PSD, which describes how the power of a signal is distributed across different frequencies. The integral (or sum) of the PSD over all frequencies gives the total power of the signal, which, by Parseval's theorem, is related to the time-domain energy.
*   **System Analysis:**  Helps in analyzing the effect of linear time-invariant (LTI) systems on signal energy. For example, if a signal passes through an ideal filter, Parseval's Relation can be used to determine the energy of the filtered signal.
*   **Signal Reconstruction:** Parseval's theorem can also be useful in understanding signal reconstruction problems. It highlights the importance of preserving all the frequency components of a signal to accurately reconstruct it in the time domain and maintain its energy.

## 6. Practice Questions

**Question 1:**

A continuous-time signal `x(t)` has a Fourier Transform `X(f) = rect(f/2)`, where `rect(f)` is the rectangular function (1 for |f| < 0.5, 0 otherwise).  Find the energy of `x(t)` using Parseval's Relation.

**Answer:**

```
E = ∫ |X(f)|^2 df = ∫ |rect(f/2)|^2 df (from -∞ to ∞)
  = ∫ 1 df (from -1 to 1)
  = [f] from -1 to 1
  = 2
```

Therefore, the energy of `x(t)` is 2.

**Question 2:**

A discrete-time signal `x[n]` is defined as `x[n] = {1, 2, 1}` for `n = 0, 1, 2` and 0 otherwise.  Find the energy of `x[n]` directly and then outline how you would use Parseval's theorem to verify this result.

**Answer:**

Direct Calculation:

```
E = ∑ |x[n]|^2 = 1^2 + 2^2 + 1^2 = 1 + 4 + 1 = 6
```

Using Parseval's Theorem (Outline):

1.  Calculate the DTFT `X(ω)` of `x[n]`. `X(ω) = 1 + 2e^(-jω) + e^(-j2ω)`
2.  Calculate `|X(ω)|^2 = X(ω)X*(ω)` where X*(ω) is the complex conjugate of X(ω). `|X(ω)|^2 = (1 + 2cos(ω) + cos(2ω))^2 + (2sin(ω) + sin(2ω))^2 = 6 + 8cos(ω) + 2cos(2ω)`
3.  Calculate `(1 / 2π) ∫ |X(ω)|^2 dω` from `-π` to `π`.  This will require integrating the expression obtained in step 2.  The result should equal 6.

**Question 3:**

Why is the scaling factor `1/2π` necessary in Parseval's Relation for discrete-time signals?

**Answer:**

The DTFT `X(ω)` is a periodic function with a period of `2π`.  The integral of `|X(ω)|^2` is therefore also periodic.  The scaling factor `1/2π` normalizes the energy calculation over one period (from `-π` to `π`) to ensure it equals the time-domain energy, which is a finite sum. Without this scaling factor, the frequency-domain energy would be disproportionately large due to the periodic nature of the DTFT.

## 7. Important Points to Remember

*   Parseval's Relation connects time-domain and frequency-domain energy.
*   The scaling factor `(1 / 2π)` is essential for discrete-time signals.
*   Understand the conditions under which Parseval's Relation holds true (e.g., signals must be square-integrable or square-summable).
*   Parseval's theorem is a powerful tool for signal analysis and provides insights into energy distribution across different frequencies.
*   Practice applying Parseval's Relation to various signals to solidify your understanding.
