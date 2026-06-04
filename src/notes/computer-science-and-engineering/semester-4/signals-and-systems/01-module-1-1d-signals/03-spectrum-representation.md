---
title: "Spectrum representation"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b12c"
status: "completed"
scrapedAt: "2026-05-20T16:15:17.532Z"
---
# SIGNALS AND SYSTEMS - Module 1: 1D Signals - Spectrum Representation

## Introduction

This module focuses on the representation of one-dimensional (1D) signals in the frequency domain, also known as the spectrum. Understanding the spectrum is crucial for analyzing and manipulating signals in various applications, including audio processing, image processing (for each row/column), and communication systems.  The spectrum provides a different perspective compared to the time-domain representation.

## Learning Outcomes

Upon completion of this section, you should be able to:

*   Define the Fourier Transform and its inverse.
*   Understand the relationship between time-domain and frequency-domain representations of signals.
*   Calculate the Fourier Transform of common signals.
*   Interpret the magnitude and phase spectrum of a signal.
*   Identify and explain properties of the Fourier Transform, including linearity, time shifting, frequency shifting, scaling, and duality.
*   Explain the concept of signal bandwidth.
*   Differentiate between continuous-time and discrete-time signals and their corresponding Fourier Transforms (though the discrete case will be touched upon lightly here and covered more extensively later).

## 1. Key Concepts and Definitions

*   **Signal:** A function of time or another independent variable that carries information. (e.g., voltage, current, pressure, image intensity). In our context, we are focusing on 1D signals, meaning the signal depends on a single independent variable, typically time (t).

*   **Time Domain:** The representation of a signal as a function of time (e.g., plotting amplitude vs. time).

*   **Frequency Domain:** The representation of a signal as a function of frequency (e.g., plotting magnitude or phase vs. frequency).

*   **Spectrum:** The representation of a signal in the frequency domain, usually displayed as magnitude spectrum and phase spectrum.

*   **Magnitude Spectrum:** The absolute value of the Fourier Transform, representing the amplitude of each frequency component in the signal. |X(f)|

*   **Phase Spectrum:** The argument (angle) of the Fourier Transform, representing the phase shift of each frequency component in the signal.  ∠X(f)

*   **Frequency (f):** The rate at which a signal repeats, measured in Hertz (Hz), or cycles per second.

*   **Angular Frequency (ω):** Related to frequency by ω = 2πf, measured in radians per second.

*   **Bandwidth:** The range of frequencies over which a signal has significant energy.  Different definitions exist (e.g., 3dB bandwidth, null-to-null bandwidth).

*   **Continuous-Time Signal:** A signal defined for all values of time. Notation: x(t)

*   **Discrete-Time Signal:** A signal defined only at discrete points in time. Notation: x[n] or x(nT), where T is the sampling period.

## 2. The Fourier Transform (Continuous-Time)

The Fourier Transform decomposes a signal into its constituent frequencies.  It allows us to analyze the frequency content of a signal.

**Definition:**

The Fourier Transform of a continuous-time signal x(t) is given by:

X(f) = ∫<sup>∞</sup><sub>-∞</sub> x(t) * e<sup>-j2πft</sup> dt

Where:

*   X(f) is the Fourier Transform of x(t).  It's a complex-valued function of frequency.
*   x(t) is the original signal in the time domain.
*   f is the frequency in Hz.
*   j is the imaginary unit (√-1).

**Inverse Fourier Transform:**

The Inverse Fourier Transform reconstructs the time-domain signal from its frequency-domain representation:

x(t) = ∫<sup>∞</sup><sub>-∞</sub> X(f) * e<sup>j2πft</sup> df

**Important Notes:**

*   X(f) is generally a complex-valued function:  X(f) = Re{X(f)} + j Im{X(f)}, or X(f) = |X(f)|e<sup>j∠X(f)</sup>
*   |X(f)| is the magnitude spectrum.
*   ∠X(f) is the phase spectrum.
*   The integration limits are from -∞ to ∞, implying the signal is defined for all time.

## 3. The Fourier Transform (Discrete-Time) - Brief Introduction

While a detailed study of the Discrete-Time Fourier Transform (DTFT) and Discrete Fourier Transform (DFT) is usually covered in later modules, it's useful to introduce the concept briefly here for comparison.

**Discrete-Time Fourier Transform (DTFT):**

The DTFT transforms a discrete-time signal x[n] into the frequency domain.

X(e<sup>jω</sup>) = ∑<sup>∞</sup><sub>n=-∞</sub> x[n] * e<sup>-jωn</sup>

Where:

*   X(e<sup>jω</sup>) is the DTFT of x[n].  It's a complex-valued function of frequency.
*   x[n] is the original signal in the time domain.
*   ω is the normalized frequency (radians/sample).  Remember ω = 2πf/fs, where fs is the sampling frequency.

**Important Notes:**

*   The DTFT is a *periodic* function with a period of 2π.  This reflects the fact that frequencies beyond the Nyquist rate (fs/2) are aliased.

## 4. Fourier Transform of Common Signals

Understanding the Fourier Transform of basic signals is fundamental.

*   **Impulse Function (Dirac Delta Function): δ(t)**

    *   Time Domain:  δ(t) = ∞ at t=0, and 0 elsewhere.  ∫<sup>∞</sup><sub>-∞</sub> δ(t) dt = 1
    *   Frequency Domain: X(f) = 1  (A constant value for all frequencies)
    *   Interpretation: An impulse contains all frequencies equally.

*   **DC Signal (Constant Signal): x(t) = A**

    *   Time Domain: A constant value A for all t.
    *   Frequency Domain: X(f) = Aδ(f) (An impulse at f=0)
    *   Interpretation: A DC signal contains only the zero-frequency component.

*   **Complex Exponential: x(t) = e<sup>j2πf0t</sup>**

    *   Time Domain: A complex exponential with frequency f0.
    *   Frequency Domain: X(f) = δ(f - f0)
    *   Interpretation: A complex exponential at frequency f0 contains only that specific frequency.

*   **Sine Wave: x(t) = A sin(2πf0t)**

    *   Time Domain: A sine wave with amplitude A and frequency f0.
    *   Frequency Domain: X(f) = (A/2j)[δ(f - f0) - δ(f + f0)]
    *   Interpretation: A sine wave consists of two impulses, one at positive f0 and one at negative f0.  The negative frequency component is mathematically necessary for the sine wave to be real-valued.

*   **Cosine Wave: x(t) = A cos(2πf0t)**

    *   Time Domain: A cosine wave with amplitude A and frequency f0.
    *   Frequency Domain: X(f) = (A/2)[δ(f - f0) + δ(f + f0)]
    *   Interpretation:  A cosine wave also consists of two impulses, one at positive f0 and one at negative f0.

*   **Rectangular Pulse:  x(t) = 1 for -T/2 <= t <= T/2,  0 otherwise**

    *   Time Domain: A pulse of width T centered at t=0.
    *   Frequency Domain: X(f) = T sinc(πfT)  where sinc(x) = sin(x)/x
    *   Interpretation: The spectrum is a sinc function. The main lobe width is inversely proportional to the pulse width T.  Narrow pulses have wider bandwidths, and wide pulses have narrower bandwidths.

## 5. Properties of the Fourier Transform

Understanding these properties allows for efficient analysis and manipulation of signals.

*   **Linearity:**

    *   If x1(t) ↔ X1(f) and x2(t) ↔ X2(f), then a*x1(t) + b*x2(t) ↔ a*X1(f) + b*X2(f)
    *   Meaning:  The Fourier Transform of a linear combination of signals is the linear combination of their individual Fourier Transforms.

*   **Time Shifting:**

    *   If x(t) ↔ X(f), then x(t - t0) ↔ X(f) * e<sup>-j2πft0</sup>
    *   Meaning: Shifting a signal in time introduces a linear phase shift in the frequency domain. The magnitude spectrum remains unchanged.

*   **Frequency Shifting (Modulation):**

    *   If x(t) ↔ X(f), then x(t) * e<sup>j2πf0t</sup> ↔ X(f - f0)
    *   Meaning: Multiplying a signal by a complex exponential shifts its spectrum in the frequency domain.  This is the basis for modulation techniques in communications.

*   **Time Scaling:**

    *   If x(t) ↔ X(f), then x(at) ↔ (1/|a|) * X(f/a)
    *   Meaning: Compressing a signal in time (a > 1) expands its spectrum in frequency, and vice versa.  This illustrates the inverse relationship between time and frequency.

*   **Differentiation in Time:**

    *   If x(t) ↔ X(f), then dx(t)/dt ↔ j2πf * X(f)
    *   Meaning: Differentiation in the time domain corresponds to multiplication by j2πf in the frequency domain. Higher frequencies are amplified more by differentiation.

*   **Integration in Time:**

    *   If x(t) ↔ X(f), then ∫<sup>t</sup><sub>-∞</sub> x(τ) dτ ↔ (1/(j2πf)) * X(f) + (1/2)X(0)δ(f)
    *   Meaning: Integration in the time domain corresponds to division by j2πf in the frequency domain, *plus* a term that accounts for the DC component.

*   **Convolution Theorem:**

    *   If x1(t) ↔ X1(f) and x2(t) ↔ X2(f), then x1(t) * x2(t) ↔ X1(f) * X2(f)
    *   Meaning: Convolution in the time domain is equivalent to multiplication in the frequency domain. This property is extremely useful for analyzing systems and filters.

*   **Multiplication Theorem (Duality):**

    *   If x1(t) ↔ X1(f) and x2(t) ↔ X2(f), then x1(t) * x2(t) ↔ ∫<sup>∞</sup><sub>-∞</sub> X1(τ)X2(f-τ) dτ (Convolution in the frequency domain)
    *   Meaning: Multiplication in the time domain is equivalent to convolution in the frequency domain. This is the dual of the Convolution Theorem.

*   **Duality:**

    *   If x(t) ↔ X(f), then X(t) ↔ x(-f)
    *   Meaning:  This property establishes a symmetry between the time and frequency domains.

## 6. Signal Bandwidth

Bandwidth is a crucial concept for signal processing and communication.  It represents the range of frequencies that contain a significant portion of the signal's energy.

*   **Definition:** The range of frequencies for which the signal's spectrum has a "significant" amplitude. "Significant" is subjective and depends on the application.

*   **Different Definitions:**
    *   **Absolute Bandwidth:** The entire range of frequencies where the signal's spectrum is non-zero.  Often impractical.
    *   **3 dB Bandwidth (Half-Power Bandwidth):** The range of frequencies where the magnitude of the spectrum is greater than or equal to 1/√2 (or approximately 0.707) times its maximum value.
    *   **Null-to-Null Bandwidth:** The width of the main lobe in the frequency domain (typically used for pulse-like signals).
    *   **Root Mean Square (RMS) Bandwidth:** A statistical measure of bandwidth.

*   **Importance:**  Bandwidth determines the amount of information that can be transmitted over a communication channel.  It also influences the design of filters and other signal processing systems.

## 7. Examples

**Example 1: Finding the Fourier Transform of a decaying exponential.**

Let x(t) = e<sup>-at</sup>u(t), where a > 0 and u(t) is the unit step function (u(t) = 1 for t >= 0, 0 otherwise).

Solution:

X(f) = ∫<sup>∞</sup><sub>-∞</sub> x(t) * e<sup>-j2πft</sup> dt = ∫<sup>∞</sup><sub>0</sub> e<sup>-at</sup> * e<sup>-j2πft</sup> dt  (Since u(t) = 0 for t < 0)

X(f) = ∫<sup>∞</sup><sub>0</sub> e<sup>-(a + j2πf)t</sup> dt = [-1/(a + j2πf)] * e<sup>-(a + j2πf)t</sup> |<sup>∞</sup><sub>0</sub>

X(f) = 1/(a + j2πf)

The magnitude spectrum is |X(f)| = 1 / sqrt(a<sup>2</sup> + (2πf)<sup>2</sup>)

The phase spectrum is ∠X(f) = -arctan(2πf/a)

**Example 2:  Using Linearity.**

Suppose x(t) = 2cos(2πf1t) + 3sin(2πf2t), where f1 = 10 Hz and f2 = 20 Hz. Find X(f).

Solution:

Using the linearity property and the Fourier Transforms of sine and cosine waves:

X(f) = 2 * (1/2)[δ(f - f1) + δ(f + f1)] + 3 * (1/2j)[δ(f - f2) - δ(f + f2)]

X(f) = [δ(f - 10) + δ(f + 10)] + (3/(2j))[δ(f - 20) - δ(f + 20)]

## 8. Practice Questions/Exercises

**Question 1:** Find the Fourier Transform of x(t) = δ(t - 2).

**Answer:**  Using the Time Shifting property, X(f) = e<sup>-j4πf</sup>

**Question 2:**  A signal x(t) has a Fourier Transform X(f).  What is the Fourier Transform of x(2t)?

**Answer:** Using the Time Scaling property, the Fourier Transform is (1/2)X(f/2).

**Question 3:**  What is the magnitude spectrum of x(t) = cos(2π*5t)?

**Answer:** The magnitude spectrum consists of two impulses at f = 5 Hz and f = -5 Hz, each with an amplitude of 1/2.  |X(f)| = (1/2)[δ(f - 5) + δ(f + 5)]

**Question 4:**  If the Fourier Transform of x(t) is X(f) = rect(f/2), where rect(x) is 1 for |x| < 1/2 and 0 otherwise, what is x(t)?

**Answer:**  Using Duality and the fact that the Fourier Transform of a rectangular pulse in the time domain is a sinc function in the frequency domain, x(t) = 2sinc(2πt).

**Question 5:** A signal has a bandwidth of 1 kHz. What does this mean, in general terms, about the signal's frequency content?

**Answer:**  This means that the signal's most significant frequency components lie within the range of 0 Hz to 1 kHz (or some other 1 kHz wide band).  Frequency components outside this range have significantly smaller amplitudes.

## 9. Important Points to Remember

*   The Fourier Transform provides a frequency-domain representation of a signal.
*   The magnitude spectrum shows the amplitude of each frequency component.
*   The phase spectrum shows the phase shift of each frequency component.
*   Understanding the properties of the Fourier Transform simplifies signal analysis and manipulation.
*   Bandwidth is a critical concept for characterizing the frequency content of a signal.
*   Continuous-time and discrete-time signals have different types of Fourier Transforms (FT and DTFT, respectively). The DTFT is periodic.
*   Be careful with units (Hz vs. radians/second).
*   The spectrum of a real signal is conjugate symmetric.  |X(f)| = |X(-f)| and ∠X(f) = -∠X(-f)
