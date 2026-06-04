---
title: "Energy density spectra"
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Discrete"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b157"
status: "completed"
scrapedAt: "2026-05-20T16:15:46.230Z"
---
# Signals and Systems - Module 2: Discrete - Energy Density Spectra

## Introduction

This module focuses on the concept of Energy Density Spectra (EDS) in the context of discrete-time signals.  EDS provides valuable information about the distribution of energy across different frequencies in a signal.  It's a fundamental tool in signal processing for analyzing and designing systems.

## Learning Outcomes

By the end of this section, you should be able to:

*   Define the energy of a discrete-time signal.
*   Compute the Fourier Transform of a discrete-time signal (review).
*   Define and calculate the Energy Density Spectrum (EDS) of a discrete-time signal.
*   Interpret the EDS and understand its relationship to the signal's energy.
*   Apply the concept of EDS in practical scenarios.

## 1. Energy of a Discrete-Time Signal

### 1.1 Definition:

The energy *E* of a discrete-time signal *x[n]* is defined as the sum of the squared magnitude of the signal over all time indices:

```
E = ∑ |x[n]|^2   for n = -∞ to ∞
```

**Key Concepts:**

*   **Energy Signal:** A signal with finite energy (E < ∞).
*   **Power Signal:** A signal with finite average power but infinite energy.
*   The energy calculation is based on the squared magnitude of the signal.  This makes the energy always a non-negative real number.

### 1.2 Example:

Consider the signal *x[n] = {1, 2, -1, 0, 1}*.  Calculate its energy.

*Solution:*

```
E = |1|^2 + |2|^2 + |-1|^2 + |0|^2 + |1|^2 = 1 + 4 + 1 + 0 + 1 = 7
```

Therefore, the energy of the signal *x[n]* is 7.

### 1.3 Practice Question:

Calculate the energy of the signal *x[n] = (0.5)^n u[n]*, where *u[n]* is the unit step function.

*Solution:*

```
E = ∑ |(0.5)^n u[n]|^2   for n = -∞ to ∞
  = ∑ (0.5)^(2n)  for n = 0 to ∞  (since u[n] = 0 for n < 0 and u[n] = 1 for n >= 0)
  = ∑ (0.25)^n   for n = 0 to ∞

This is a geometric series with a = 1 and r = 0.25.
E = a / (1 - r) = 1 / (1 - 0.25) = 1 / 0.75 = 4/3
```

Therefore, the energy of the signal is 4/3.

## 2. Review of Discrete-Time Fourier Transform (DTFT)

### 2.1 Definition:

The Discrete-Time Fourier Transform (DTFT) of a discrete-time signal *x[n]* is defined as:

```
X(e^(jω)) = ∑ x[n] * e^(-jωn)  for n = -∞ to ∞
```

Where:

*   *X(e^(jω))* is the DTFT of *x[n]*.
*   *ω* is the normalized frequency (rad/sample).
*   *j* is the imaginary unit.

**Key Concepts:**

*   The DTFT is a complex-valued function of frequency.
*   The DTFT is periodic with a period of 2π.  Therefore, we typically consider the frequency range -π ≤ ω < π or 0 ≤ ω < 2π.
*   The DTFT provides the frequency content of the discrete-time signal.

### 2.2 Important Properties of DTFT

*   **Linearity:** a\*X(e^(jω)) + b\*Y(e^(jω)) ↔ a\*x[n] + b\*y[n]
*   **Time Shifting:** X(e^(jω)) \* e^(-jωn₀) ↔ x[n - n₀]
*   **Convolution Theorem:** X(e^(jω)) \* Y(e^(jω)) ↔ x[n] \* y[n]  (where \* denotes convolution)

### 2.3 Example:

Find the DTFT of *x[n] = δ[n]*, where *δ[n]* is the unit impulse function.

*Solution:*

```
X(e^(jω)) = ∑ δ[n] * e^(-jωn)  for n = -∞ to ∞
           = δ[0] * e^(-jω*0)  (Since δ[n] = 0 for n ≠ 0)
           = 1 * 1
           = 1
```

Therefore, the DTFT of *δ[n]* is 1. This means that the unit impulse has a uniform frequency spectrum across all frequencies.

### 2.4 Practice Question:

Find the DTFT of *x[n] = a^n u[n]*, where |a| < 1 and *u[n]* is the unit step function.

*Solution:*

```
X(e^(jω)) = ∑ a^n u[n] * e^(-jωn)  for n = -∞ to ∞
           = ∑ a^n * e^(-jωn)  for n = 0 to ∞  (Since u[n] = 0 for n < 0)
           = ∑ (a*e^(-jω))^n  for n = 0 to ∞

This is a geometric series with a = 1 and r = a*e^(-jω). Since |a| < 1, the series converges.
X(e^(jω)) = 1 / (1 - a*e^(-jω))
```

## 3. Energy Density Spectrum (EDS)

### 3.1 Definition:

The Energy Density Spectrum (EDS) *Sₓₓ(e^(jω))* of a discrete-time signal *x[n]* is defined as the squared magnitude of its DTFT:

```
Sₓₓ(e^(jω)) = |X(e^(jω))|^2
```

**Key Concepts:**

*   The EDS represents the distribution of energy of the signal across different frequencies.
*   *Sₓₓ(e^(jω))* is a real-valued and non-negative function of frequency.
*   The EDS is periodic with a period of 2π, just like the DTFT.

### 3.2 Relationship Between Energy and EDS:

The total energy *E* of the signal *x[n]* can be obtained by integrating the EDS over the frequency range [-π, π] (or any interval of length 2π):

```
E = (1 / 2π) * ∫ Sₓₓ(e^(jω)) dω   for ω = -π to π
```

This is known as **Parseval's Theorem (for energy signals).**  It states that the energy of a signal is equal to the integral of its energy density spectrum.

### 3.3 Example:

Consider the signal *x[n] = δ[n]*.  We know that *X(e^(jω)) = 1*.  Find the EDS and the total energy.

*Solution:*

*   EDS:  *Sₓₓ(e^(jω)) = |X(e^(jω))|^2 = |1|^2 = 1*
*   Energy: *E = (1 / 2π) * ∫ 1 dω for ω = -π to π = (1 / 2π) * [ω] from -π to π = (1 / 2π) * (π - (-π)) = (1 / 2π) * 2π = 1*

Thus, the EDS of *δ[n]* is a constant 1 across all frequencies, and its total energy is 1.

### 3.4 Interpretation of the EDS

The EDS provides insight into the frequency content of the signal and how energy is distributed across those frequencies.

*   **Peaks in the EDS:** Indicate frequencies where the signal has significant energy content.
*   **Flat EDS:**  Indicates a signal with a relatively uniform energy distribution across frequencies (like white noise or an impulse).
*   **Shape of the EDS:** Can be used to characterize the signal and differentiate between different types of signals.

### 3.5 Practice Question:

Consider the signal  *x[n] = a^n u[n]*, where |a| < 1.  Find the EDS and discuss its shape.

*Solution:*

*   We know that *X(e^(jω)) = 1 / (1 - a*e^(-jω))*.
*   Therefore, *Sₓₓ(e^(jω)) = |X(e^(jω))|^2 = |1 / (1 - a*e^(-jω))|^2 = 1 / ((1 - a*e^(-jω))(1 - a*e^(jω))) = 1 / (1 - a*e^(-jω) - a*e^(jω) + a^2) = 1 / (1 - 2a*cos(ω) + a^2)*.

*Discussion of the Shape:*

*   The EDS, *Sₓₓ(e^(jω)) = 1 / (1 - 2a*cos(ω) + a^2)*, is a function of *ω*.
*   Since |a| < 1, the denominator is always positive.
*   The maximum value of the EDS occurs at *ω = 0*, where *cos(ω) = 1*. The maximum value is 1 / (1 - 2a + a^2) = 1 / (1 - a)^2.
*   The minimum value of the EDS occurs at *ω = π*, where *cos(ω) = -1*. The minimum value is 1 / (1 + 2a + a^2) = 1 / (1 + a)^2.
*   As *ω* increases from 0 to π, *cos(ω)* decreases, and therefore the EDS decreases. The opposite happens from π to 2π due to the periodicity.  The shape looks like a smoothed version of a pulse centered at ω = 0. The smaller the value of 'a', the wider the 'pulse'.

## 4. Applications of Energy Density Spectra

*   **Signal Classification:**  EDS can be used to classify different types of signals based on their frequency characteristics.
*   **System Identification:**  By analyzing the EDS of the input and output signals of a system, we can identify the characteristics of the system.
*   **Noise Analysis:**  EDS can be used to characterize the frequency content of noise in a system.
*   **Filter Design:** EDS can inform the design of filters to attenuate or amplify specific frequency components of a signal.
*   **Communication Systems:** Used in signal detection and equalization.

## 5. Important Points to Remember

*   **Energy Signal vs. Power Signal:** Understanding the difference between these signal types is crucial.  EDS is primarily used for energy signals.
*   **Parseval's Theorem:**  This theorem provides the fundamental relationship between the signal's energy and its EDS.
*   **Periodicity of DTFT and EDS:**  Remember that the DTFT and EDS are periodic with a period of 2π.
*   **Real and Non-negative EDS:** The EDS is always a real and non-negative function of frequency. This is because it is the square of the magnitude of the DTFT.
*   **EDS Provides Frequency Information:**  The EDS is a powerful tool for understanding how the energy of a signal is distributed across different frequencies.

## 6. Practice Exercises

1.  Compute the energy of the signal *x[n] = {2, -1, 3, 1}*.
2.  Find the DTFT of *x[n] = δ[n - 2]*.
3.  Determine the EDS of the signal *x[n] = cos(ω₀n)*, where *ω₀* is a constant frequency. Hint: use Euler's formula to express the cosine function in terms of complex exponentials, and then find the DTFT.
4.  Explain how you would use the EDS to distinguish between a signal primarily composed of low frequencies versus a signal primarily composed of high frequencies.

## 7. Answers to Practice Exercises

1.  *E = |2|^2 + |-1|^2 + |3|^2 + |1|^2 = 4 + 1 + 9 + 1 = 15*
2.  *X(e^(jω)) = e^(-j2ω)*
3.  *x[n] = cos(ω₀n) = (1/2)(e^(jω₀n) + e^(-jω₀n))*
    *X(e^(jω)) = (1/2) [2πδ(ω - ω₀) + 2πδ(ω + ω₀)]*  (Consider the DTFT of complex exponentials) where δ is the Dirac Delta function
    *Sₓₓ(e^(jω)) = |X(e^(jω))|^2 = π²[δ(ω - ω₀) + δ(ω + ω₀)]  (Ignoring cross terms of δ(ω - ω₀)*δ(ω + ω₀) since they are zero)*
4.  A signal primarily composed of low frequencies will have a high concentration of energy at low frequencies in its EDS.  The EDS will exhibit a peak (or significant energy) near ω = 0.  Conversely, a signal primarily composed of high frequencies will have a high concentration of energy at high frequencies, and its EDS will exhibit a peak (or significant energy) near ω = π (or -π).

This concludes the study notes on Energy Density Spectra for discrete-time signals. Good luck with your studies!
