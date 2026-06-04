---
title: "Upsampling (Time Expansion"
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Z transform  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b16f"
status: "completed"
scrapedAt: "2026-05-20T16:16:01.839Z"
---
# SIGNALS AND SYSTEMS - Module 4: Z-Transform - Upsampling (Time Expansion)

## Introduction

This module focuses on the Z-transform and, specifically, upsampling (time expansion).  Upsampling is a process that increases the sampling rate of a discrete-time signal, effectively inserting zeros between existing samples. Understanding upsampling is crucial for multirate signal processing, which finds applications in audio processing, image processing, and communications.

## Learning Outcomes

By the end of this section, you should be able to:

1.  **Define upsampling (time expansion) and its effect on a discrete-time signal.**
2.  **Explain the mathematical representation of the upsampling operation.**
3.  **Determine the Z-transform of an upsampled signal.**
4.  **Analyze the effect of upsampling on the signal's spectrum in the frequency domain.**
5.  **Apply upsampling in practical signal processing applications.**
6.  **Distinguish between upsampling and interpolation.**

## 1. Definition of Upsampling (Time Expansion)

*   **Definition:** Upsampling (or time expansion) is a process that increases the sampling rate of a discrete-time signal by inserting *L-1* zeros between each sample of the original signal, where *L* is the upsampling factor.
*   **Sampling Rate Increase:**  Upsampling increases the number of samples per unit of time, effectively speeding up the signal if it were played back.
*   **Symbol:** The upsampling operation is often denoted by an up arrow ↑ and the upsampling factor *L*. So, ↑*L*.
*   **Effect on Signal:** The upsampling operation creates a signal that has a longer duration because it has more samples to represent the same underlying analog signal.

## 2. Mathematical Representation of Upsampling

Let *x[n]* be a discrete-time signal.  The upsampled signal *y[n]* obtained by upsampling *x[n]* by a factor of *L* is defined as:

```
y[n] =  x[n/L]  , if n is a multiple of L
       0         , otherwise
```

Equivalently:

```
y[n] = x'[n] = { x[n/L],  n=0, +-L, +-2L,...
                   0,        otherwise   }
```

This means that *y[n]* is equal to *x[n/L]* at multiples of *L*, and zero elsewhere.

**Example:**

Let *x[n] = {1, 2, 3}* for *n = 0, 1, 2* respectively.  Upsample *x[n]* by a factor of *L = 2*.  The resulting signal *y[n]* is:

*   *y[0] = x[0] = 1*
*   *y[1] = 0* (because 1 is not a multiple of 2)
*   *y[2] = x[1] = 2*
*   *y[3] = 0* (because 3 is not a multiple of 2)
*   *y[4] = x[2] = 3*

Therefore, *y[n] = {1, 0, 2, 0, 3}* for *n = 0, 1, 2, 3, 4* respectively.

## 3. Z-Transform of an Upsampled Signal

Let *X(z)* be the Z-transform of *x[n]*. We want to find *Y(z)*, the Z-transform of *y[n]*, where *y[n]* is the upsampled version of *x[n]* by a factor of *L*.

Recall the definition of the Z-transform:

```
X(z) = ∑[n=-∞ to ∞] x[n] * z^(-n)
```

For the upsampled signal *y[n]*, we have:

```
Y(z) = ∑[n=-∞ to ∞] y[n] * z^(-n)
```

Since *y[n] = x[n/L]* for *n = kL* (where *k* is an integer) and *y[n] = 0* otherwise, we can rewrite the summation as:

```
Y(z) = ∑[k=-∞ to ∞] x[k] * z^(-kL)
```

This can be written as:

```
Y(z) = ∑[k=-∞ to ∞] x[k] * (z^L)^(-k)
```

Therefore,

```
Y(z) = X(z^L)
```

**Key Result:** The Z-transform of the upsampled signal *y[n]* is *X(z<sup>L</sup>)*, where *X(z)* is the Z-transform of the original signal *x[n]*.

**Example:**

Let *x[n] = a<sup>n</sup>u[n]*, where *u[n]* is the unit step function.  The Z-transform of *x[n]* is *X(z) = z/(z-a)* for |z| > |a|.

If we upsample *x[n]* by a factor of *L*, then *y[n]* has the Z-transform *Y(z) = X(z<sup>L</sup>)*.

Therefore, *Y(z) = z<sup>L</sup> / (z<sup>L</sup> - a)* for |z| > |a|<sup>1/L</sup>.

## 4. Frequency Domain Analysis of Upsampling

Upsampling has a significant impact on the signal's spectrum. When you upsample in the time domain, you effectively compress the spectrum in the frequency domain and create *L-1* spectral images or replicas.  The original spectrum *X(e<sup>jω</sup>)*, where ω is the normalized frequency, is compressed to *X(e<sup>jLω</sup>)*.  This means that the original spectrum now occupies a smaller portion of the frequency range (0 to π), and the remaining space is filled with *L-1* copies of the compressed spectrum.

*   **Spectral Compression:** The original frequency content is squeezed into a smaller frequency range.
*   **Spectral Images:**  Unwanted replicas of the original spectrum appear in the frequency domain.  These replicas are centered at multiples of 2π/L.
*   **Aliasing (Potential):** If the original signal was not bandlimited to π/L before upsampling, these spectral images will overlap (alias) with the original spectrum, distorting the signal when converted back to analog.

**Anti-Aliasing Filter (Important):** To mitigate the spectral images and prevent aliasing, an anti-imaging (or interpolation) filter is *essential* after upsampling.  This filter, typically a low-pass filter with a cutoff frequency of π/L, removes the unwanted spectral replicas and ensures a clean upsampled signal.

**Example:**

Consider a signal *x[n]* with a spectrum *X(e<sup>jω</sup>)* that occupies the range -π to π. After upsampling by *L = 2*, the spectrum becomes *X(e<sup>j2ω</sup>)*. This compresses the original spectrum to occupy the range -π/2 to π/2. Two spectral images (replicas) then appear, centered at  π and -π. Without a low-pass filter, these images would overlap if the original signal was not bandlimited to  π/2.

## 5. Applications of Upsampling

Upsampling is used in many signal processing applications, including:

*   **Multirate Signal Processing:**  Used to change the sampling rate of signals.
*   **Digital Audio:**  Used in audio playback to increase the sampling rate and improve sound quality (often combined with interpolation).
*   **Digital Image Processing:**  Used to increase the resolution of images (often combined with interpolation).
*   **Communications:** Used in modulators and demodulators to adjust the signal bandwidth.
*   **Oversampling A/D Conversion:**  Used to increase the effective resolution of analog-to-digital converters.

## 6. Upsampling vs. Interpolation

*   **Upsampling:** Simply inserts zeros between samples. This operation increases the sampling rate but doesn't add any new information to the signal.  It creates spectral images in the frequency domain.
*   **Interpolation:** Estimating new values between existing samples. This process increases the sampling rate *and* attempts to reconstruct the underlying continuous-time signal.  It involves filtering (usually low-pass) to remove spectral images.

**Key Difference:** Upsampling is a basic operation that *requires* filtering to be useful. Interpolation is the *combination* of upsampling and filtering. Think of interpolation as a higher-quality version of upsampling.

## Important Points to Remember

*   Upsampling increases the sampling rate by inserting zeros.
*   The Z-transform of an upsampled signal is *X(z<sup>L</sup>)*.
*   Upsampling creates spectral images in the frequency domain.
*   An anti-imaging filter (low-pass filter) is essential after upsampling to remove spectral images and prevent aliasing if combined with a D/A converter.
*   Interpolation is a process that involves upsampling *followed* by filtering.

## Practice Questions/Exercises

**Question 1:**

A discrete-time signal *x[n] = {1, 2, 1, 0}* is upsampled by a factor of *L = 3*. Determine the resulting signal *y[n]*.

**Answer:**

*y[n] = {1, 0, 0, 2, 0, 0, 1, 0, 0, 0}*

**Question 2:**

The Z-transform of a signal *x[n]* is *X(z) = 1/(1 - 0.5z<sup>-1</sup>)*. What is the Z-transform of the signal *y[n]* obtained by upsampling *x[n]* by a factor of *L = 2*?

**Answer:**

*Y(z) = X(z<sup>2</sup>) = 1/(1 - 0.5z<sup>-2</sup>)*

**Question 3:**

Explain why a low-pass filter is typically used after upsampling a signal.  What is the ideal cutoff frequency of this filter if the upsampling factor is *L* and the original signal's maximum frequency is *f<sub>max</sub>*?  Assume the original signal satisfied Nyquist sampling criteria before upsampling.

**Answer:**

A low-pass filter is used to remove the spectral images created by the upsampling process. This prevents these images from aliasing (overlapping) with the original signal's spectrum when converting the signal back to analog.  The ideal cutoff frequency for the low-pass filter is *f<sub>max</sub>/L*, which corresponds to a normalized frequency of *π/L*.

**Question 4:**

What is the difference between Upsampling and Zero Padding in the context of the Discrete Fourier Transform (DFT)?

**Answer:**

Upsampling (followed by interpolation filtering) increases the sampling rate of a *signal* and is performed in the *time domain*. It inherently *changes* the analog signal being represented.  Zero-padding, on the other hand, is applied to a *finite-length signal* before computing the DFT. It doesn't change the original signal. It simply increases the *resolution* of the DFT in the *frequency domain*, allowing for a more detailed view of the signal's spectrum. It's like zooming in on a graph without changing the underlying data.  Zero padding does *not* prevent aliasing after conversion back to an analog signal.

This concludes the study notes on upsampling (time expansion) in the context of the Z-transform. Remember to practice these concepts with more examples to solidify your understanding. Good luck!
