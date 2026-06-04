---
title: "Windowing, STFT, spectra of windows- Wide and narrow band spectrogram -Time domain parameters (Short time energy, short time zero crossing Rate, ACF)."
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 2: Short"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff44c"
status: "completed"
scrapedAt: "2026-05-23T18:11:09.491Z"
---
# SPEECH AND AUDIO PROCESSING: Module 2: Short-Time Analysis

## Topic: Windowing, STFT, Spectra of Windows, Spectrograms, and Time-Domain Parameters

**Course Outcomes Addressed:** CO1 (K1), CO2 (K2), CO3 (K3)

### 1. Introduction to Short-Time Analysis

Speech is a non-stationary signal, meaning its statistical properties change over time. To analyze these changing characteristics, we use **short-time analysis**. This involves dividing the speech signal into short, overlapping segments (frames) and analyzing each segment as if it were stationary.

**Key Concept:** **Frame:** A short, contiguous segment of the speech signal.

**Why Short-Time Analysis?**

*   **Captures Temporal Evolution:** Allows us to observe how spectral content changes over time, revealing characteristics like phoneme transitions, pitch variations, and formant movements.
*   **Enables Analysis of Non-Stationary Signals:** Unlike long-time Fourier analysis which assumes stationarity, short-time analysis is crucial for signals like speech.

**Textbook Reference:** O'Shaughnessy (2nd Ed.) Chapter 3 focuses on the temporal aspects of speech and introduces short-time analysis as a fundamental technique. Quatieri (2001) Chapter 2 provides a detailed mathematical framework for discrete-time signal processing, including the concepts necessary for short-time analysis.

### 2. Windowing

Windowing is a crucial step in short-time analysis. It involves multiplying the speech signal by a **window function** (also called a weighting function). This effectively isolates a segment of the signal and smooths the transition between segments.

**Purpose of Windowing:**

*   **Reduce Spectral Leakage:** When we analyze a finite segment of a signal, it's equivalent to multiplying the infinite signal by a rectangular pulse. This abrupt truncation in the time domain leads to artificial broadening of spectral components (spectral leakage) in the frequency domain. Window functions taper the signal smoothly towards zero at the edges, mitigating this leakage.
*   **Isolate Segments:** Windowing helps to focus the analysis on a specific segment of the signal, making it appear as if that segment is the entire signal for the duration of the analysis.

**The Windowing Process:**

Let $x[n]$ be the speech signal and $w[n]$ be the window function. The windowed segment $x_k[n]$ at frame $k$ is given by:

$x_k[n] = x[n] \cdot w[n-m \cdot k]$

where:
*   $n$ is the sample index.
*   $m$ is the **hop size** (the number of samples between the start of consecutive frames).
*   $k$ is the frame index.

**Important Point:** The choice of window function affects the trade-off between **frequency resolution** and **amplitude accuracy/spectral leakage**.

### 3. Spectra of Common Window Functions

Different window functions have different spectral characteristics. Understanding these spectra is key to choosing the right window for a given application.

#### 3.1 Rectangular Window

*   **Definition:** $w[n] = 1$ for $0 \le n \le N-1$, and $0$ otherwise.
*   **Time Domain:** A simple rectangular pulse of length $N$.
*   **Frequency Domain (Spectrum):** The Fourier Transform of a rectangular window is a **sinc function** ($ \sin(\omega N/2) / \sin(\omega/2) $).
    *   **Main Lobe:** A relatively narrow peak centered at DC (0 Hz).
    *   **Side Lobes:** Oscillatory components that decay slowly. These cause significant spectral leakage.
*   **Pros:** Good frequency resolution (narrowest main lobe among common windows).
*   **Cons:** High side lobe levels, leading to significant spectral leakage. Poor amplitude accuracy.

#### 3.2 Hamming Window

*   **Definition:** $w[n] = 0.54 - 0.46 \cos\left(\frac{2\pi n}{N-1}\right)$ for $0 \le n \le N-1$.
*   **Time Domain:** Tapers smoothly to zero at the edges.
*   **Frequency Domain (Spectrum):** Has lower side lobes than the rectangular window, but a slightly wider main lobe.
    *   **Main Lobe:** Wider than the rectangular window's main lobe.
    *   **Side Lobes:** Significantly reduced compared to the rectangular window.
*   **Pros:** Better spectral leakage reduction than the rectangular window, good compromise between resolution and leakage.
*   **Cons:** Still exhibits some spectral leakage.

#### 3.3 Hanning (Hann) Window

*   **Definition:** $w[n] = 0.5 - 0.5 \cos\left(\frac{2\pi n}{N-1}\right)$ for $0 \le n \le N-1$.
*   **Time Domain:** Similar to Hamming, smooth tapering.
*   **Frequency Domain (Spectrum):** Similar to Hamming, with lower side lobes than rectangular but higher than some other windows.
    *   **Main Lobe:** Similar width to the Hamming window.
    *   **Side Lobes:** Lower than the Hamming window's side lobes.
*   **Pros:** Excellent reduction in spectral leakage, good for preserving signal characteristics.
*   **Cons:** Wider main lobe than rectangular, slightly poorer frequency resolution.

#### 3.4 Blackman Window

*   **Definition:** $w[n] = 0.42 - 0.5 \cos\left(\frac{2\pi n}{N-1}\right) + 0.08 \cos\left(\frac{4\pi n}{N-1}\right)$ for $0 \le n \le N-1$.
*   **Time Domain:** Even smoother tapering than Hamming or Hanning.
*   **Frequency Domain (Spectrum):** Very low side lobes, but a significantly wider main lobe.
    *   **Main Lobe:** Considerably wider than Hamming or Hanning.
    *   **Side Lobes:** Very low, providing excellent suppression of spectral leakage.
*   **Pros:** Superior spectral leakage suppression.
*   **Cons:** Significantly poorer frequency resolution due to the wide main lobe.

**Important Point to Remember:**
*   **Wide Main Lobe:** Better for distinguishing closely spaced frequency components.
*   **Narrow Main Lobe:** Better for accurately locating spectral peaks.
*   **Low Side Lobes:** Better for preventing small frequency components from being masked by larger ones.

**Textbook Reference:** O'Shaughnessy (2nd Ed.) Chapter 3 discusses various window functions and their spectral properties, highlighting the trade-offs. Quatieri (2001) Chapter 2 delves into the mathematical derivations of window spectra.

### 4. Short-Time Fourier Transform (STFT)

The STFT is a fundamental tool for analyzing the time-varying frequency content of a signal. It is obtained by applying the Fourier Transform to each windowed segment of the signal.

**Process:**

1.  Divide the signal $x[n]$ into overlapping frames of length $N$.
2.  Apply a window function $w[n]$ to each frame.
3.  Compute the Discrete Fourier Transform (DFT) of each windowed frame.

**Mathematical Definition:**

The STFT of $x[n]$ at time $m$ (corresponding to the center of the $m$-th frame) is given by:

$X(m, \omega) = \sum_{n=-\infty}^{\infty} x[n] w[n-m] e^{-j\omega n}$

For a discrete-time signal $x[n]$ and a finite-length window $w[n]$ of length $N$, and considering discrete frequencies $\omega_k = 2\pi k / N$, the DFT of the $m$-th frame is:

$X(m, k) = \sum_{n=0}^{N-1} x[n+m] w[n] e^{-j \frac{2\pi k n}{N}}$ for $k = 0, 1, ..., N-1$

**Key Concepts:**

*   **Time-Frequency Representation:** The STFT provides a representation of the signal's frequency content as it changes over time.
*   **Time Resolution:** Determined by the **window length** ($N$). A shorter window provides better time resolution (ability to pinpoint when a change occurs) but poorer frequency resolution (ability to distinguish between closely spaced frequencies).
*   **Frequency Resolution:** Determined by the **window length** ($N$). A longer window provides better frequency resolution but poorer time resolution.
*   **Hop Size ($m$):** Determines the overlap between consecutive frames. A smaller hop size leads to smoother time progression in the STFT but increases computational cost.

**Trade-off:** The STFT inherently involves a trade-off between time and frequency resolution. This is a consequence of the Heisenberg Uncertainty Principle applied to signal processing. You cannot simultaneously achieve arbitrarily high resolution in both time and frequency.

**Textbook Reference:** O'Shaughnessy (2nd Ed.) Chapter 3 extensively covers the STFT and its application to speech. Quatieri (2001) Chapter 7 provides a comprehensive treatment of the STFT, including its properties and limitations.

### 5. Spectrograms: Wideband vs. Narrowband

A spectrogram is a visual representation of the STFT, plotting frequency on the vertical axis, time on the horizontal axis, and the magnitude (or power) of the STFT as intensity (or color).

#### 5.1 Wideband Spectrogram

*   **Characteristics:**
    *   **Short Window Length:** Typically 5-10 ms.
    *   **Good Time Resolution:** Excellent for visualizing rapid changes in the speech signal, such as the onset and offset of consonants, clicks, and bursts.
    *   **Poor Frequency Resolution:** Formants and harmonics are blurred together.
*   **Appearance:** Shows clear vertical striations corresponding to glottal pulses (voicing). The formant structures appear as broad bands of energy.
*   **Information Conveyed:** Primarily reveals the temporal envelope of the speech signal and the excitation source (voicing). Useful for analyzing consonants, plosives, and the overall rhythm of speech.

#### 5.2 Narrowband Spectrogram

*   **Characteristics:**
    *   **Long Window Length:** Typically 20-30 ms (corresponding to approximately 2-3 pitch periods).
    *   **Poor Time Resolution:** Rapid temporal changes are blurred.
    *   **Good Frequency Resolution:** Clearly shows the harmonic structure of voiced speech and the individual formants.
*   **Appearance:** Shows horizontal striations representing the harmonics of the fundamental frequency (pitch). Formants appear as dark bands that vary in frequency.
*   **Information Conveyed:** Primarily reveals the spectral characteristics of voiced sounds, including the fundamental frequency (pitch) and formant frequencies. Useful for analyzing vowels and distinguishing between different vowel sounds.

**Example:**

Imagine analyzing the word "dad".

*   A **wideband spectrogram** would clearly show the silence (closure) and release of the initial /d/, followed by the stable vowel /a/, and then the closure and release of the final /d/. The /a/ would appear as broad bands of energy.
*   A **narrowband spectrogram** would show the harmonic structure during the vowel /a/, with the formants appearing as darker bands modulating the harmonics. The /d/ sounds would appear as periods of silence or noise bursts with less distinct harmonic structure.

**Important Point to Remember:** The choice between wideband and narrowband spectrograms depends on what aspect of the speech signal you want to emphasize: temporal events (wideband) or spectral detail (narrowband).

**Textbook Reference:** O'Shaughnessy (2nd Ed.) Chapter 3 dedicates a significant section to spectrograms and contrasts wideband and narrowband analysis with illustrative examples. Quatieri (2001) Chapter 7 explains how spectrograms are generated from the STFT.

### 6. Time Domain Parameters

These parameters analyze the speech signal directly in the time domain, without explicitly transforming it into the frequency domain. They are often computed over short time frames.

#### 6.1 Short-Time Energy (STE)

*   **Definition:** The average energy of the speech signal within a short time frame. It reflects the intensity or loudness of the speech signal in that frame.
*   **Formula:**
    $E_k = \sum_{n=0}^{N-1} (x[n+m \cdot k] \cdot w[n])^2$
    Often, the energy is normalized by the window length or the sum of squared window coefficients. A simpler form without explicit windowing (though implicit in framing) can be:
    $E_k = \sum_{n=M}^{M+N-1} |x[n]|^2$ (where $M$ is the start of the frame)
*   **Interpretation:**
    *   **High STE:** Indicates a segment with high amplitude, typically associated with voiced sounds (vowels, voiced consonants).
    *   **Low STE:** Indicates a segment with low amplitude, typically associated with unvoiced sounds (fricatives, aspirated consonants) or silence.
*   **Applications:**
    *   **Voicing Detection:** Distinguishing voiced and unvoiced segments.
    *   **Segmentation:** Identifying the beginning and end of speech.
    *   **Amplitude Envelope Estimation:** Tracking the loudness variations.

#### 6.2 Short-Time Zero Crossing Rate (ZCR)

*   **Definition:** The rate at which the speech signal changes sign (crosses the zero axis) within a short time frame. It is a measure of the noisiness or spectral complexity of the signal.
*   **Formula:**
    $Z_k = \frac{1}{2} \sum_{n=0}^{N-1} | \text{sgn}(x[n+m \cdot k]) - \text{sgn}(x[n+1+m \cdot k]) |$
    where $\text{sgn}(x)$ is the sign function:
    $\text{sgn}(x) = \begin{cases} 1 & \text{if } x \ge 0 \\ -1 & \text{if } x < 0 \end{cases}$
*   **Interpretation:**
    *   **High ZCR:** Indicates a signal with rapid oscillations and frequent sign changes. This is characteristic of unvoiced sounds (e.g., /s/, /f/, /sh/) and noise, which tend to have broad-spectrum energy.
    *   **Low ZCR:** Indicates a signal with slow oscillations and fewer sign changes. This is characteristic of voiced sounds (e.g., vowels, voiced consonants like /z/, /v/), which have more harmonic content and a fundamental frequency.
*   **Applications:**
    *   **Voicing Detection:** Complementary to STE for distinguishing voiced and unvoiced sounds.
    *   **Speech Activity Detection:** Identifying speech segments.
    *   **Feature Extraction:** Used as a feature for speech recognition and speaker identification.

#### 6.3 Autocorrelation Function (ACF)

*   **Definition:** The ACF of a signal measures the similarity of the signal with a time-shifted version of itself. In short-time analysis, we compute the ACF for each frame.
*   **Formula for a frame $x_k[n]$:**
    $R_{xx, k}[\ell] = \sum_{n=0}^{N-1} x_k[n] x_k[n-\ell]$
    where $\ell$ is the lag. The ACF is typically computed for lags $0 \le \ell < N$.
*   **Interpretation:**
    *   **Peak at $\ell=0$:** The ACF is always maximum at zero lag ($R_{xx, k}[0]$), representing the signal's energy.
    *   **Periodicity:** For voiced speech, the ACF of a frame exhibits a periodic pattern. The lag at which the first significant peak occurs (after lag 0) corresponds to the **pitch period** ($T_0$). The fundamental frequency is then $F_0 = 1/T_0$.
    *   **Decay Rate:** The rate at which the ACF decays indicates the spectral flatness. A faster decay suggests more broadband energy (unvoiced sounds), while a slower decay suggests more tonal characteristics (voiced sounds).
*   **Applications:**
    *   **Pitch Detection:** Estimating the fundamental frequency of voiced speech.
    *   **Voicing Detection:** The presence of a strong periodic component in the ACF indicates voicing.
    *   **Linear Predictive Coding (LPC) Coefficients:** The ACF is a key component in the calculation of LPC coefficients, which are powerful features for speech analysis.

**Important Point to Remember:**
*   STE and ZCR are useful for general signal activity and voicing discrimination.
*   ACF is particularly powerful for extracting the fundamental frequency (pitch) from voiced segments.

**Textbook Reference:** O'Shaughnessy (2nd Ed.) Chapter 3 covers STE and ZCR as basic signal characteristics. Quatieri (2001) Chapter 2 discusses the ACF and its properties, and Chapter 7 utilizes it for pitch estimation. Rabinar (2003) provides a detailed discussion on time-domain features and their use in speech analysis.

### 7. Summary of Key Concepts and Trade-offs

| Feature             | Short Window (Wideband) | Long Window (Narrowband) |
| :------------------ | :---------------------- | :----------------------- |
| **Time Resolution** | High                    | Low                      |
| **Frequency Res.**  | Low                     | High                     |
| **Spectral Leakage**| More pronounced (with rectangular) | Less pronounced (with tapering) |
| **Spectrogram Type**| Wideband                | Narrowband               |
| **Primary Use**     | Consonants, transients, temporal events | Vowels, harmonics, pitch, spectral detail |

**Window Function Trade-off:**

| Window         | Main Lobe Width | Side Lobes | Frequency Resolution | Spectral Leakage Suppression |
| :------------- | :-------------- | :--------- | :------------------- | :--------------------------- |
| Rectangular    | Narrowest       | Highest    | Best                 | Worst                        |
| Hamming        | Wider           | Reduced    | Good                 | Better                       |
| Hanning        | Wider           | Further Reduced | Good                 | Better                       |
| Blackman       | Widest          | Lowest     | Worst                | Best                         |

### 8. Practice Questions and Answers

**Question 1:** What is the primary purpose of windowing in short-time signal analysis?
**Answer:** The primary purpose of windowing is to reduce spectral leakage that arises from abruptly truncating the signal. It also helps to isolate a specific segment for analysis.

**Question 2:** Explain the difference between wideband and narrowband spectrograms in terms of window length and the information they reveal.
**Answer:**
*   **Wideband spectrograms** use short window lengths (e.g., 5-10 ms) which provide good **time resolution**. They are excellent for visualizing rapid temporal events like consonant bursts and glottal pulses, but have poor frequency resolution, blurring formants.
*   **Narrowband spectrograms** use long window lengths (e.g., 20-30 ms) which provide good **frequency resolution**. They clearly show the harmonic structure of voiced speech and the distinct formant bands, but have poor time resolution, blurring temporal events.

**Question 3:** A speech signal is analyzed using a Hamming window. If you need to accurately distinguish between two closely spaced vowel formants, would you choose a longer or shorter window length? Justify your answer.
**Answer:** You would choose a **longer window length**. Frequency resolution is inversely proportional to window length. A longer window results in a narrower main lobe in the frequency domain, allowing for better separation of closely spaced spectral components like formants. This, however, comes at the cost of poorer time resolution.

**Question 4:** What time-domain parameter is most commonly used to estimate the fundamental frequency (pitch) of voiced speech? How is it used for this purpose?
**Answer:** The **Autocorrelation Function (ACF)** is most commonly used to estimate the fundamental frequency. For voiced segments, the ACF exhibits a periodic structure. The lag at which the first significant peak occurs after lag 0 corresponds to the pitch period. The fundamental frequency is then the reciprocal of this pitch period.

**Question 5:** A segment of speech has a high Short-Time Energy (STE) and a low Short-Time Zero Crossing Rate (ZCR). What type of speech sound is most likely represented by this segment?
**Answer:** This segment is most likely a **voiced sound**, such as a vowel or a voiced consonant (e.g., /z/, /v/, /m/). High STE indicates high amplitude, characteristic of voiced sounds. Low ZCR indicates a relatively slow oscillation and fewer sign changes, also characteristic of voiced sounds with their dominant fundamental frequency.

### 9. Important Points to Remember

*   **Non-stationarity of Speech:** Speech signals change their statistical properties over time, necessitating short-time analysis.
*   **Windowing Trade-off:** The choice of window function involves a trade-off between frequency resolution (main lobe width) and spectral leakage suppression (side lobe levels).
*   **STFT Resolution Trade-off:** The STFT inherently balances time and frequency resolution. Shorter windows give better time resolution but poorer frequency resolution, and vice versa.
*   **Spectrogram Interpretation:** Wideband spectrograms highlight temporal events, while narrowband spectrograms reveal spectral details like pitch and formants.
*   **Time-Domain Features:** STE, ZCR, and ACF provide valuable information about signal intensity, noisiness/spectral complexity, and periodicity, respectively, without explicit frequency transformation.

This comprehensive study material covers the essential aspects of windowing, STFT, spectrograms, and time-domain parameters, aligning with the learning outcomes and course objectives. Referencing the provided textbooks will further solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
