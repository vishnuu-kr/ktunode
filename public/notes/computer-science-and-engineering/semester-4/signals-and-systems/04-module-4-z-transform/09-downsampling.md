---
title: "Downsampling"
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Z transform  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b170"
status: "completed"
scrapedAt: "2026-05-20T16:16:02.551Z"
---
# Signals and Systems: Module 4 - Z-Transform: Downsampling

## Introduction

This module focuses on downsampling, a crucial operation in digital signal processing, within the context of the Z-transform. Downsampling, also known as decimation, reduces the sampling rate of a discrete-time signal. Understanding its effect on the signal's frequency content and its Z-transform is essential for various applications like multirate signal processing, data compression, and efficient implementation of digital filters.

## Learning Outcomes

Upon completion of this module, you will be able to:

*   Define downsampling and its significance.
*   Describe the effect of downsampling on the time-domain representation of a signal.
*   Determine the Z-transform of a downsampled signal.
*   Explain the potential issue of aliasing during downsampling.
*   Understand the concept of anti-aliasing filters and their role in downsampling.
*   Apply downsampling techniques in practical signal processing scenarios.

## 1. Definition and Significance of Downsampling

*   **Definition:** Downsampling (or decimation) reduces the sampling rate of a discrete-time signal by an integer factor, *M*.  It involves discarding samples, retaining only every *M*-th sample of the original signal.

*   **Mathematical Representation:** If *x[n]* is the original signal and *y[n]* is the downsampled signal with a downsampling factor *M*, then:

    *   *y[n] = x[nM]*

*   **Significance:**
    *   **Data Compression:** Reduces the amount of data to be stored or transmitted.
    *   **Multirate Signal Processing:** Enables processing signals at different sampling rates to optimize performance and efficiency.
    *   **Efficient Filter Implementation:** Allows for implementing filters with lower computational complexity.
    *   **Frequency Analysis:** Can highlight specific frequency bands by effectively changing the range.

## 2. Effect of Downsampling on the Time-Domain Representation

*   Downsampling reduces the number of samples in the signal.
*   The time axis effectively "stretches" as each sample now represents a longer duration.
*   Consider the original signal *x[n] = {1, 2, 3, 4, 5, 6, 7, 8}*

    *   Downsampling by a factor of *M = 2* results in *y[n] = {1, 3, 5, 7}*

    *   Downsampling by a factor of *M = 4* results in *y[n] = {1, 5}*

*   **Example:**  Imagine a sound wave sampled at 44.1 kHz. Downsampling by a factor of 2 (to 22.05 kHz) means that half of the samples are discarded.  The perceived duration of the sound remains the same, but the frequency content will be affected.

## 3. Z-Transform of a Downsampled Signal

*   Let *X(z)* be the Z-transform of the original signal *x[n]*. We want to find the Z-transform *Y(z)* of the downsampled signal *y[n] = x[nM]*.

*   Recall the definition of the Z-transform:
    *   *X(z) = Σ<sub>n=-∞</sub><sup>∞</sup> x[n]z<sup>-n</sup>*

*   Since *y[n] = x[nM]*, we have:
    *   *Y(z) = Σ<sub>n=-∞</sub><sup>∞</sup> y[n]z<sup>-n</sup> = Σ<sub>n=-∞</sub><sup>∞</sup> x[nM]z<sup>-n</sup>*

*   Let *k = nM*, then *n = k/M* and we get:
    *   *Y(z) = Σ<sub>k=-∞</sub><sup>∞</sup> x[k]z<sup>-k/M</sup> = Σ<sub>k=-∞</sub><sup>∞</sup> x[k] (z<sup>1/M</sup>)<sup>-k</sup>*

*   Therefore:
    *   *Y(z) = X(z<sup>1/M</sup>)*

*   **Interpretation:** The Z-transform of the downsampled signal *y[n]* is obtained by substituting *z* with *z<sup>1/M</sup>* in the Z-transform of the original signal *x[n]*.  This substitution compresses the Z-plane by a factor of *M*.

*   **Important Note:** Because  *z<sup>1/M</sup>* has *M* possible solutions for a single value of *z*,  *Y(z)* will have *M* images of the original signal's spectrum in the Z-plane.  This leads to aliasing if precautions are not taken.

*   **Example:** Let *x[n] = a<sup>n</sup>u[n]*, where *u[n]* is the unit step function. Its Z-transform is *X(z) = 1/(1 - az<sup>-1</sup>)*, ROC: |z| > |a|. If we downsample *x[n]* by a factor of 2, we get *y[n] = x[2n] = a<sup>2n</sup>u[n] = (a<sup>2</sup>)<sup>n</sup>u[n]*. Therefore, *Y(z) = 1/(1 - a<sup>2</sup>z<sup>-1</sup>)*, ROC: |z| > |a<sup>2</sup>|. Using our formula, we get  *Y(z) = X(z<sup>1/2</sup>) = 1/(1 - az<sup>-1/2</sup>)*.  While the ROC might appear different due to the fractional exponent, remember that *X(z<sup>1/M</sup>)*  represents the spectrum repeating itself 'M' times which we will discuss further.

## 4. Aliasing during Downsampling

*   **Nyquist-Shannon Sampling Theorem:** A signal must be sampled at a rate at least twice its highest frequency component (Nyquist rate) to avoid aliasing during reconstruction.

*   **Aliasing in Downsampling:** Downsampling reduces the sampling rate. If the original signal contains frequency components higher than half the *new* sampling rate (the original sampling rate divided by the downsampling factor *M*), these frequencies will "fold over" and appear as lower frequencies in the downsampled signal. This distortion is called aliasing.

*   **Visualizing Aliasing:** Consider the frequency spectrum of *X(ω)* (the DTFT of *x[n]*) that spans from *-π* to *π*.  When we downsample by a factor of *M*, the effective frequency range shrinks to *-π/M* to *π/M*.  The spectrum *X(ω)* gets compressed and replicated *M-1* times within the range of  *-π* to *π*.  If any portion of the original spectrum outside  *-π/M* to *π/M* overlaps with the new frequency range due to this replication, aliasing occurs.

*   **Example:** A signal contains frequencies up to 10 kHz and is sampled at 25 kHz.  Downsampling by a factor of 2 results in a new sampling rate of 12.5 kHz.  The new Nyquist frequency is 6.25 kHz. Frequency components between 6.25 kHz and 10 kHz will alias and appear as lower frequencies, distorting the signal.

## 5. Anti-Aliasing Filters

*   **Purpose:** To prevent aliasing during downsampling, an anti-aliasing filter is used **before** the downsampling operation.

*   **Implementation:** A low-pass filter with a cutoff frequency equal to the new Nyquist frequency (original sampling rate / 2M) is applied to the signal. This filter removes or attenuates frequency components that would cause aliasing during downsampling.

*   **Ideal Anti-Aliasing Filter:** An ideal low-pass filter would perfectly pass frequencies below the cutoff and completely block frequencies above the cutoff. In practice, ideal filters are not realizable. Real-world filters have a transition band where the attenuation gradually increases.

*   **Process:**

    1.  **Anti-Aliasing Filtering:** Apply a low-pass filter with a cutoff frequency of *fs / (2M)*, where *fs* is the original sampling rate and *M* is the downsampling factor.

    2.  **Downsampling:** Downsample the filtered signal by a factor of *M*.

*   **Example:** In the previous example (signal with frequencies up to 10 kHz sampled at 25 kHz, downsampling by 2), an anti-aliasing filter with a cutoff frequency of 25 kHz / (2 * 2) = 6.25 kHz would be applied **before** downsampling.  This filter would significantly attenuate frequencies above 6.25 kHz, preventing them from aliasing.

## 6. Applications of Downsampling

*   **Multirate Signal Processing:** Combine downsampling and upsampling to efficiently process signals at different sampling rates.  Used in speech coding, audio processing, and communication systems.
*   **Subband Coding:** Decompose a signal into multiple frequency bands (subbands), downsample each subband, and encode them separately. This is used in audio and image compression.
*   **Decimation Filters:** Combine filtering and downsampling to efficiently implement filters, especially narrowband filters.
*   **Spectrum Analysis:**  Downsampling can be used to zoom in on a particular frequency region in the spectrum.

## Practice Questions/Exercises

1.  **Question:** A signal *x[n]* has a maximum frequency of 8 kHz and is sampled at 20 kHz. If the signal is downsampled by a factor of 4, what is the maximum frequency that can be retained in the downsampled signal without aliasing?

    **Answer:**  The new sampling rate is 20 kHz / 4 = 5 kHz. The new Nyquist frequency is 5 kHz / 2 = 2.5 kHz. Therefore, the maximum frequency that can be retained without aliasing is 2.5 kHz.

2.  **Question:** Describe the steps involved in downsampling a signal by a factor of 3 while preventing aliasing.

    **Answer:**
    1.  **Anti-Aliasing Filtering:** Apply a low-pass filter with a cutoff frequency equal to one-half the new sampling rate (*fs / (2M)*), which is the same as *fs / 6*. This filters out frequencies that would cause aliasing.
    2.  **Downsampling:** Discard two out of every three samples, keeping only every third sample.

3.  **Question:** The Z-transform of a signal *x[n]* is given by *X(z) = z/(z - 0.5)*. Determine the Z-transform of the downsampled signal *y[n] = x[2n]*.

    **Answer:** *Y(z) = X(z<sup>1/2</sup>) = z<sup>1/2</sup> / (z<sup>1/2</sup> - 0.5)*

4. **Question:** A digital audio signal is sampled at 48 kHz.  You want to reduce the sampling rate to 16 kHz.  By what factor should you downsample, and what should be the cutoff frequency of the anti-aliasing filter?

    **Answer:**
    *   Downsampling factor: 48 kHz / 16 kHz = 3
    *   Cutoff frequency: 16 kHz / 2 = 8 kHz.  So, the anti-aliasing filter should have a cutoff frequency of 8 kHz.

## Important Points to Remember

*   **Aliasing is a significant problem during downsampling and must be prevented.**
*   **Anti-aliasing filters are essential for mitigating aliasing.**
*   **The Z-transform of a downsampled signal involves substituting *z* with *z<sup>1/M</sup>* in the original Z-transform, leading to spectral repetitions in the Z-plane.**
*   **Downsampling can be used to efficiently process signals in various applications like multirate signal processing, data compression, and filter implementation.**
*   **Understanding the relationship between time-domain and frequency-domain (Z-transform) representation is crucial for effective downsampling.**
