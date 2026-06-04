---
title: "Sub band coding"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 3: Speech Enhancement :"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca60"
status: "completed"
scrapedAt: "2026-05-20T17:27:00.970Z"
---
# Speech and Audio Processing: Module 3: Speech Enhancement - Sub-band Coding

---

## Module Overview

This module focuses on **Speech Enhancement**, a crucial aspect of speech processing that aims to improve the quality and intelligibility of speech signals, especially in noisy environments. We will explore various techniques, and in this section, we delve into **Sub-band Coding**.

---

## Topic: Sub-band Coding

### 1. Introduction to Sub-band Coding

*   **What is Sub-band Coding?**
    *   Sub-band coding is a technique used to represent a wideband signal (like speech) by dividing it into several narrower frequency bands, processing each band independently, and then reconstructing the signal.
    *   This approach leverages the fact that different frequency bands of speech have different perceptual importance and may be affected differently by noise.

*   **Motivation for Sub-band Coding:**
    *   **Improved Noise Reduction:** Noise often has different characteristics across the frequency spectrum. By processing bands separately, we can apply more tailored noise reduction techniques to each band, leading to better overall enhancement.
    *   **Efficient Coding:** In compression applications, it allows for varying the bit allocation to different bands based on their perceptual significance.
    *   **Reduced Aliasing:** When downsampling signals, aliasing can occur. Sub-band processing, when combined with proper filters, can minimize or eliminate aliasing.
    *   **Exploiting Perceptual Properties:** Human hearing is more sensitive to certain frequencies. Sub-band coding can exploit this by allocating more resources (e.g., bits or processing power) to perceptually important bands.

### 2. Core Concepts and Components

Sub-band coding systems generally consist of the following key components:

#### 2.1. Filter Banks

*   **Purpose:** To split the input signal into multiple frequency sub-bands and, later, to reconstruct the signal from these sub-bands.
*   **Types of Filter Banks:**
    *   **Uniform Filter Banks:** The frequency spectrum is divided into equally spaced bands.
    *   **Non-uniform Filter Banks:** The frequency bands are of varying widths, often designed to match human hearing characteristics (e.g., using a Bark scale or Mel scale).

*   **Common Filter Bank Structures:**
    *   **Quadrature Mirror Filter (QMF) Banks:**
        *   **Principle:** A pair of low-pass (LP) and high-pass (HP) filters are designed such that when the analysis filters are applied and the resulting sub-band signals are downsampled, the synthesis filters can reconstruct the original signal with minimal distortion and aliasing cancellation.
        *   **Operation:**
            1.  **Analysis:** The input signal is passed through a pair of LP and HP analysis filters.
            2.  **Downsampling:** Each filtered signal is downsampled by a factor of $M$ (usually $M=2$ for simple split).
            3.  **Processing:** Each sub-band signal is processed (e.g., noise reduction).
            4.  **Upsampling:** The processed sub-band signals are upsampled by a factor of $M$.
            5.  **Synthesis:** The upsampled signals are passed through a pair of LP and HP synthesis filters, and then added together to reconstruct the enhanced signal.
        *   **Aliasing Cancellation:** QMF banks are designed to cancel aliasing introduced by downsampling, provided specific conditions on the filter characteristics are met.
        *   **Example:** A simple two-band QMF bank divides the spectrum into a low-frequency band and a high-frequency band.

    *   **Perfect Reconstruction (PR) Filter Banks:**
        *   **Principle:** A more advanced type of filter bank that aims to reconstruct the original signal *perfectly* (ideally, without any distortion or aliasing) from its sub-band representations.
        *   **Requirements:** These banks typically involve more complex filter designs and often employ a larger number of bands.
        *   **Trade-offs:** Achieving perfect reconstruction often requires more computational complexity and stricter filter design constraints.

*   **Filter Design Considerations:**
    *   **Bandwidth:** How wide each sub-band is.
    *   **Transition Bandwidth:** The overlap between adjacent filters. A narrow transition band leads to sharper separation but can increase filter complexity.
    *   **Stopband Attenuation:** How effectively a filter blocks frequencies outside its desired band. High stopband attenuation is crucial for minimizing interference between sub-bands.
    *   **Aliasing Cancellation:** The ability of the filter bank to cancel aliasing introduced by downsampling.

#### 2.2. Downsampling and Upsampling

*   **Downsampling (Decimation):**
    *   **Purpose:** To reduce the sampling rate of a signal, typically by a factor $M$. This is done after filtering to reduce the data rate and processing load for each sub-band.
    *   **Operation:** Keep one sample and discard $M-1$ samples.
    *   **Formula:** If $y[n]$ is the downsampled signal from $x[n]$ by a factor $M$, then $y[n] = x[nM]$.
    *   **Effect:** Reduces the bandwidth of the signal by a factor of $M$.

*   **Upsampling (Interpolation):**
    *   **Purpose:** To increase the sampling rate of a signal, typically by a factor $M$, before synthesis. This is done to match the original sampling rate of the signal before the final reconstruction.
    *   **Operation:** Insert $M-1$ zeros between each sample of the signal.
    *   **Formula:** If $z[n]$ is the upsampled signal from $y[n]$ by a factor $M$, then $z[n] = y[n/M]$ if $n$ is a multiple of $M$, and $z[n] = 0$ otherwise.
    *   **Effect:** Increases the bandwidth of the signal by a factor of $M$. It also introduces imaging (images of the original spectrum) which are typically removed by a synthesis low-pass filter.

### 3. Sub-band Processing for Speech Enhancement

Once the signal is split into sub-bands, various enhancement techniques can be applied to each band.

#### 3.1. Noise Reduction in Sub-bands

*   **Strategy:** Apply different noise reduction algorithms or parameters to each sub-band based on the characteristics of the noise and the speech in that band.
*   **Common Techniques:**
    *   **Spectral Subtraction:** This classic technique estimates the noise spectrum in each sub-band during silent periods and subtracts it from the noisy speech spectrum.
        *   **Sub-band Advantage:** Noise characteristics can vary significantly with frequency. Applying spectral subtraction per sub-band allows for more accurate noise estimation and subtraction, especially for colored noise.
        *   **Formula (Magnitude Domain):**
            $\hat{S}_{k,m}(f) = |Y_{k,m}(f)| - \alpha \hat{N}_{k,m}(f)$
            where:
            *   $\hat{S}_{k,m}(f)$ is the estimated clean speech magnitude in sub-band $k$ at time frame $m$.
            *   $|Y_{k,m}(f)|$ is the noisy speech magnitude in sub-band $k$ at time frame $m$.
            *   $\hat{N}_{k,m}(f)$ is the estimated noise magnitude in sub-band $k$ at time frame $m$.
            *   $\alpha$ is a gain factor (often $>1$ to reduce residual noise).
        *   **Over-subtraction:** A common problem where too much noise is subtracted, leading to "musical noise" or distorted speech. This can be managed by carefully choosing $\alpha$ and using magnitude spectral flooring (setting negative results to zero or a small positive value).
    *   **Wiener Filtering:** A more sophisticated approach that minimizes the mean squared error between the estimated clean speech and the actual clean speech.
        *   **Sub-band Advantage:** The Wiener filter's gain function can be optimized independently for each sub-band, adapting to the signal-to-noise ratio (SNR) in each band.
        *   **Formula (Magnitude Domain):**
            $G_{k,m}(f) = \frac{E[|S_{k,m}(f)|^2]}{E[|Y_{k,m}(f)|^2]} = \frac{|S_{k,m}(f)|^2}{|S_{k,m}(f)|^2 + |N_{k,m}(f)|^2}$
            where:
            *   $G_{k,m}(f)$ is the Wiener filter gain in sub-band $k$ at time frame $m$.
            *   $E[\cdot]$ denotes expectation.
            *   $|S_{k,m}(f)|^2$ is the power spectral density of clean speech.
            *   $|N_{k,m}(f)|^2$ is the power spectral density of noise.
        *   **Estimation:** Power spectral densities are typically estimated from the noisy signal.
    *   **Minimum Mean Square Error (MMSE) estimators:** Generalizations of Wiener filtering, often involving more advanced estimation of speech and noise powers.
    *   **Gain Adaptation:** The gain applied to each sub-band can be adapted based on the estimated SNR within that sub-band. Bands with high SNR might receive less attenuation, while bands with low SNR (and potentially high noise) might receive more.

#### 3.2. Perceptual Weighting in Sub-bands

*   **Human Auditory System:** Our perception of loudness and intelligibility is not uniform across frequencies. We are more sensitive to mid-frequencies.
*   **Sub-band Application:** Perceptual weights can be applied to the sub-band signals before or after noise reduction. Sub-bands containing perceptually important frequencies can be prioritized, while those with less perceptual importance might have more aggressive noise reduction applied.
*   **Example:** A sub-band corresponding to the 1-4 kHz range (critical for speech intelligibility) might have its enhanced signal more carefully preserved compared to a very low or very high frequency sub-band.

### 4. Reconstruction of the Enhanced Signal

*   **Process:**
    1.  The enhanced sub-band signals are upsampled by the factor $M$.
    2.  These upsampled signals are passed through the synthesis filter bank.
    3.  The outputs of the synthesis filters are summed to produce the final enhanced time-domain signal.

*   **Ideal Reconstruction:** In a perfect reconstruction filter bank, the sum of the synthesized sub-band signals precisely reconstructs the input signal (or the processed version of it).

### 5. Advantages and Disadvantages of Sub-band Coding for Speech Enhancement

#### 5.1. Advantages

*   **Improved Noise Reduction Performance:** Allows for frequency-dependent noise reduction, adapting to the varying noise characteristics across the spectrum.
*   **Reduced Aliasing:** QMF banks effectively cancel aliasing, a common problem in downsampling.
*   **Better Exploitation of Perceptual Properties:** Enables tailored processing and weighting of different frequency bands based on human hearing.
*   **Potential for Efficient Coding (in hybrid systems):** If combined with compression, it can allocate bits more efficiently.
*   **Reduced Computational Complexity (in some cases):** Processing narrower bands can sometimes be more efficient than processing the entire wideband signal with complex algorithms.

#### 5.2. Disadvantages

*   **Filter Bank Design Complexity:** Designing high-quality QMF or PR filter banks with desired characteristics (e.g., sharp cutoff, good aliasing cancellation) can be complex.
*   **Introduction of Artifacts:** Imperfect filter banks or processing within sub-bands can lead to artifacts like "musical noise" or distortion.
*   **Computational Overhead:** The filtering, downsampling, upsampling, and synthesis steps add computational cost compared to single-band processing.
*   **Delay:** The filtering and processing introduce latency, which can be a concern in real-time applications.
*   **Band Splitting Artifacts:** If the filters are not ideal, there might be some spectral distortion or phase issues introduced by the band splitting and recombination.

### 6. Applications

*   **Telecommunications:** Enhancing speech quality in mobile phones, VoIP, and conference calls where noise is prevalent.
*   **Hearing Aids:** Improving the intelligibility of speech for users with hearing impairments.
*   **Voice Assistants and Speech Recognition:** Improving the accuracy of ASR systems in noisy environments.
*   **Audio Forensics:** Enhancing corrupted or noisy audio recordings.

---

## Learning Outcomes Checklist

*   **Understanding of the basic principle of sub-band coding:** Covered in Section 1.
*   **Identification of the key components of a sub-band coding system:** Covered in Section 2.
*   **Understanding of filter bank types (QMF, PR) and their role:** Covered in Section 2.1.
*   **Knowledge of downsampling and upsampling operations:** Covered in Section 2.2.
*   **Ability to explain how noise reduction is performed in sub-bands:** Covered in Section 3.1.
*   **Awareness of perceptual weighting in sub-band processing:** Covered in Section 3.2.
*   **Comprehension of the signal reconstruction process:** Covered in Section 4.
*   **Appreciation of the advantages and disadvantages of sub-band coding for speech enhancement:** Covered in Section 5.
*   **Familiarity with applications of sub-band coding:** Covered in Section 6.

---

## Key Points to Remember

*   **Divide and Conquer:** Sub-band coding splits a signal into frequency bands for specialized processing.
*   **Filter Banks are Crucial:** QMF and PR filter banks are essential for splitting and recombining signals while managing aliasing.
*   **Frequency-Selective Processing:** Noise reduction algorithms can be applied differently to each sub-band.
*   **Perception Matters:** Sub-band processing can align with human auditory sensitivity.
*   **Trade-offs Exist:** Complexity, artifacts, and delay are key considerations.

---

## Practice Questions

**Question 1:**
What is the primary goal of using sub-band coding in speech enhancement?
a) To compress the speech signal more efficiently.
b) To improve the overall signal-to-noise ratio by applying different processing to different frequency bands.
c) To reduce the delay in the speech processing system.
d) To introduce more distortion to the speech signal for creative effects.

**Question 2:**
Which component in a sub-band coding system is responsible for dividing the signal into different frequency ranges?
a) Downsampler
b) Upsampler
c) Filter Bank
d) Spectral Subtractor

**Question 3:**
Explain the purpose of downsampling in a sub-band coding system. What is the main potential problem introduced by downsampling that filter banks aim to address?

**Question 4:**
Describe how spectral subtraction can be applied differently in a sub-band coding scheme compared to a single-band approach. What benefit does this provide?

**Question 5:**
What is the difference between a Quadrature Mirror Filter (QMF) bank and a Perfect Reconstruction (PR) filter bank in the context of sub-band coding?

---

## Answers to Practice Questions

**Answer 1:**
b) To improve the overall signal-to-noise ratio by applying different processing to different frequency bands.
*   **Explanation:** While sub-band coding can be used for compression, its primary benefit in enhancement is the ability to process frequency bands independently to better target noise and preserve perceptually important speech components.

**Answer 2:**
c) Filter Bank
*   **Explanation:** The filter bank (specifically the analysis filter bank) is responsible for splitting the wideband signal into narrower frequency sub-bands.

**Answer 3:**
*   **Purpose of Downsampling:** Downsampling (or decimation) is used to reduce the sampling rate of each sub-band signal by a factor $M$. This reduces the amount of data to be processed in each band, making the subsequent processing (like noise reduction) more computationally efficient.
*   **Potential Problem:** The main problem introduced by downsampling is **aliasing**. When a signal is sampled below the Nyquist rate (or when a bandlimited signal is downsampled, effectively creating replicas of its spectrum), these spectral replicas can overlap, distorting the original spectrum. Filter banks, particularly QMF and PR banks, are designed to cancel this aliasing.

**Answer 4:**
*   **Sub-band Spectral Subtraction:** In a sub-band coding scheme, spectral subtraction is applied to each individual sub-band. This means that the noise spectrum is estimated and subtracted from the noisy speech spectrum *separately for each frequency band*.
*   **Benefit:** This is advantageous because noise often has different characteristics (e.g., spectral shape, intensity) in different frequency ranges. By applying spectral subtraction per sub-band, the algorithm can:
    *   **More accurately estimate noise:** The noise profile within a narrow band is likely more consistent than in the entire spectrum.
    *   **Tailor the subtraction:** Different subtraction gains ($\alpha$) or flooring levels can be used for each band based on the estimated SNR in that band. This allows for more aggressive noise reduction in noisy bands and less attenuation in cleaner bands, leading to better preservation of speech quality and intelligibility. It helps avoid over-subtracting clean speech components present in some bands while reducing noise effectively in others.

**Answer 5:**
*   **Quadrature Mirror Filter (QMF) Bank:**
    *   **Goal:** Primarily designed to **cancel aliasing** introduced by downsampling, while allowing for signal reconstruction.
    *   **Reconstruction:** Perfect reconstruction is usually not guaranteed; there might be some distortion or amplitude/phase modifications.
    *   **Common Usage:** A pair of low-pass and high-pass filters are used, and the design ensures that aliasing from one band folds into the other in a way that can be cancelled by the synthesis filters.
    *   **Simplicity:** Often simpler to design than full PR filter banks, especially for a small number of bands (e.g., 2 bands).

*   **Perfect Reconstruction (PR) Filter Bank:**
    *   **Goal:** To reconstruct the original input signal *perfectly* (ideally, with zero distortion and no aliasing) after it has been split, processed, and recombined.
    *   **Reconstruction:** Guarantees that the sum of the synthesized sub-band signals reconstructs the original signal exactly, up to a possible delay and scaling.
    *   **Complexity:** Generally requires more complex filter design procedures and often more bands or specific filter coefficient relationships.
    *   **Applications:** Used when precise signal preservation is critical, such as in high-fidelity audio coding or specialized enhancement tasks where even minor distortion is undesirable.

---
