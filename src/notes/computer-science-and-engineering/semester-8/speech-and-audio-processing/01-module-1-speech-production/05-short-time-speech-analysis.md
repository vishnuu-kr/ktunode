---
title: "Short-Time Speech Analysis"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 1: Speech Production :"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca4e"
status: "completed"
scrapedAt: "2026-05-20T17:26:49.390Z"
---
# Speech and Audio Processing: Module 1 - Speech Production
## Topic: Short-Time Speech Analysis

---

### Learning Outcomes:

This module aims to equip you with a foundational understanding of how speech signals are analyzed over short time segments. Upon completion, you will be able to:

*   **Understand the limitations of analyzing speech signals using long-term methods and the necessity of short-time analysis.**
*   **Explain the concept of stationarity and non-stationarity in speech signals.**
*   **Describe the process of framing and windowing for short-time analysis.**
*   **Discuss various window functions and their characteristics.**
*   **Explain the principle of short-time Fourier Transform (STFT) and its significance.**
*   **Introduce the concept of spectral analysis and its role in speech analysis.**
*   **Understand the concept of homomorphic processing and its application in speech analysis.**

---

### 1. Introduction to Short-Time Speech Analysis

#### 1.1 The Nature of Speech Signals

*   **Speech is a dynamic signal:** The acoustic properties of speech change rapidly over time, reflecting the movements of the vocal tract.
*   **Non-stationarity:** Speech signals are inherently non-stationary. This means their statistical properties (like mean, variance, and spectral content) change over time.
    *   **Example:** The sound of a vowel is acoustically different from the sound of a consonant that follows it. A spoken word like "cat" has distinct acoustic characteristics for the /k/, /æ/, and /t/ sounds.
*   **Limitations of Long-Term Analysis:** Analyzing speech over long durations can mask these crucial short-time variations.
    *   **Example:** If you averaged the spectrum of a sentence, you would lose information about individual phonemes or even syllables. This would be like trying to understand a conversation by only listening to the average sound volume, ignoring the nuances of spoken words.

#### 1.2 The Need for Short-Time Analysis

*   **Capturing Temporal Dynamics:** To understand and process speech effectively, we need to analyze how its acoustic properties change from one moment to the next.
*   **Phoneme Recognition:** Individual speech sounds (phonemes) have distinct acoustic signatures that can only be identified by examining short segments of the speech signal.
*   **Speech Synthesis and Recognition:** Many speech processing tasks, such as automatic speech recognition (ASR) and speech synthesis, rely on analyzing and generating speech on a frame-by-frame basis.

---

### 2. Framing and Windowing

To perform short-time analysis, the continuous speech signal is divided into small, overlapping segments called **frames**. Each frame is then processed to extract features.

#### 2.1 Framing

*   **Process:** The continuous speech signal is divided into discrete time intervals.
*   **Frame Size:** The duration of each frame is typically between 10-30 milliseconds (ms).
    *   **Rationale:** This duration is short enough to be considered approximately stationary (or at least slowly varying) and long enough to contain sufficient spectral information to characterize a speech sound.
*   **Frame Rate (Hop Size):** Frames are often made to overlap. The distance between the starting points of consecutive frames is called the hop size or step size.
    *   **Overlap:** Typically, frames overlap by 50% or more. This ensures that no important information at the frame boundaries is lost.
    *   **Example:** If a frame is 20 ms long and the hop size is 10 ms, then consecutive frames will overlap by 10 ms (50%).

#### 2.2 Windowing

*   **Purpose of Windowing:** When we extract a short frame, it's like cutting a piece out of the continuous signal. The abrupt start and end of this frame introduce artificial discontinuities, leading to spectral distortions (specifically, spectral leakage) when analyzed using techniques like the Fourier Transform. Windowing smooths the edges of the frame to minimize these distortions.
*   **Process:** Each frame is multiplied by a **window function**. The window function is a short, smooth, bell-shaped curve that is zero at its edges and has its maximum value at the center.
*   **Mathematical Representation:** If `s(n)` is the speech signal and `w(n)` is the window function of length `N`, then the windowed frame `s_w(n)` is given by:
    `s_w(n) = s(n) * w(n)` for `0 <= n < N`

---

### 3. Window Functions

Window functions are crucial for minimizing spectral leakage. They taper the signal towards zero at the frame boundaries.

#### 3.1 Desired Characteristics of Window Functions

*   **Smooth Tapering:** The window function should be smooth and taper off gradually to zero at the edges.
*   **Narrow Main Lobe:** A narrow main lobe in the frequency domain leads to better frequency resolution (ability to distinguish between closely spaced frequencies).
*   **Low Side Lobes:** Low side lobes in the frequency domain reduce the contribution of unwanted frequencies to the spectrum of the windowed signal.

#### 3.2 Common Window Functions

*   **Rectangular Window:**
    *   **Shape:** Constant value within the frame, zero outside. `w(n) = 1` for `0 <= n < N`, `0` otherwise.
    *   **Characteristics:**
        *   Simplest to implement.
        *   **Poor spectral characteristics:** Has a wide main lobe and high side lobes, leading to significant spectral leakage.
        *   **Main Lobe Width:** Approximately `2/N`.
        *   **Side Lobe Level:** ~ -13 dB.
    *   **Example:** If you take a frame without any modification, it's equivalent to using a rectangular window.

*   **Hamming Window:**
    *   **Shape:** `w(n) = 0.54 - 0.46 * cos(2 * pi * n / (N-1))` for `0 <= n < N`.
    *   **Characteristics:**
        *   Smooth tapering.
        *   Better spectral characteristics than the rectangular window.
        *   **Main Lobe Width:** Similar to the rectangular window.
        *   **Side Lobe Level:** ~ -42 dB.
    *   **Use Case:** Commonly used in speech processing due to a good balance between frequency resolution and side lobe suppression.

*   **Hanning (Hann) Window:**
    *   **Shape:** `w(n) = 0.5 * (1 - cos(2 * pi * n / (N-1)))` for `0 <= n < N`.
    *   **Characteristics:**
        *   Smooth tapering.
        *   Similar spectral characteristics to the Hamming window.
        *   **Main Lobe Width:** Similar to the rectangular window.
        *   **Side Lobe Level:** ~ -31 dB.
    *   **Use Case:** Another popular choice for speech analysis.

*   **Blackman Window:**
    *   **Shape:** `w(n) = 0.42 - 0.5 * cos(2 * pi * n / (N-1)) + 0.08 * cos(4 * pi * n / (N-1))` for `0 <= n < N`.
    *   **Characteristics:**
        *   Even smoother tapering.
        *   **Excellent side lobe suppression:** Significantly lower side lobes than Hamming or Hanning.
        *   **Wider main lobe:** This means poorer frequency resolution compared to Hamming or Hanning.
        *   **Side Lobe Level:** ~ -58 dB.
    *   **Use Case:** Useful when precise frequency resolution is less critical than minimizing spurious frequencies.

**Important Point to Remember:** There's a trade-off between main lobe width (frequency resolution) and side lobe levels (spectral leakage). A narrower main lobe provides better frequency resolution but at the cost of higher side lobes. Conversely, windows with very low side lobes (like Blackman) tend to have wider main lobes.

---

### 4. Short-Time Fourier Transform (STFT)

The STFT is the fundamental tool for analyzing the frequency content of speech signals over short time intervals.

#### 4.1 Principle of STFT

*   **Applying Fourier Transform to Windowed Frames:** The STFT involves taking the Discrete Fourier Transform (DFT) of each windowed frame.
*   **Time-Frequency Representation:** By performing the DFT on successive overlapping frames, we obtain a representation of how the frequency content of the speech signal changes over time.
*   **Mathematical Representation:** For a signal `s(n)`, the STFT is given by:
    `X(k, m) = sum_{n=0}^{N-1} s(n + m * H) * w(n) * exp(-j * 2 * pi * k * n / N)`
    where:
    *   `s(n)` is the input speech signal.
    *   `w(n)` is the window function of length `N`.
    *   `H` is the hop size.
    *   `m` is the frame index.
    *   `k` is the frequency index.
    *   `X(k, m)` is the STFT at frequency bin `k` and time frame `m`.

#### 4.2 Significance of STFT

*   **Spectral Evolution:** The STFT reveals how the spectral components of speech evolve over time.
*   **Visualization:** It's often visualized as a **spectrogram**, which is a 3D plot (or a 2D color-coded plot) showing time on the x-axis, frequency on the y-axis, and the magnitude (or intensity) of the frequency component represented by color or darkness.
    *   **Example:** A spectrogram of spoken words clearly shows the different acoustic characteristics of vowels (e.g., formants as horizontal bands) and consonants (e.g., bursts of noise for plosives).

---

### 5. Spectral Analysis

Spectral analysis is the process of examining the frequency components of a signal. In the context of short-time speech analysis, it focuses on the frequency content of each individual frame.

#### 5.1 Key Concepts in Spectral Analysis

*   **Frequency Spectrum:** The distribution of the signal's energy or power across different frequencies. For a windowed frame `s_w(n)`, its DFT `X(k)` provides its frequency spectrum.
*   **Magnitude Spectrum:** The absolute value of the DFT coefficients, `|X(k)|`. This represents the amplitude of each frequency component.
*   **Phase Spectrum:** The angle of the DFT coefficients, `angle(X(k))`. This represents the phase shift of each frequency component.
*   **Power Spectrum:** The square of the magnitude spectrum, `|X(k)|^2`. This represents the power at each frequency.

#### 5.2 Applications in Speech Analysis

*   **Formant Tracking:** Formants are the resonant frequencies of the vocal tract, which are crucial for distinguishing between different vowel sounds. They appear as prominent peaks in the magnitude spectrum of voiced speech.
*   **Voiced vs. Unvoiced Detection:** Voiced sounds (like vowels and voiced consonants) have periodic components, leading to distinct peaks in the spectrum. Unvoiced sounds (like /s/, /f/, /h/) are characterized by more random noise, resulting in a flatter, broadband spectrum.
*   **Pitch Estimation:** The fundamental frequency (pitch) of a speaker's voice can be estimated from the periodicities observed in the spectrum of voiced segments.

---

### 6. Homomorphic Processing

Homomorphic processing is a non-linear technique used to separate convolved signals. In speech, it's often used to separate the excitation source (vocal cord vibration) from the vocal tract filter.

#### 6.1 The Convolution Model of Speech

*   **Speech Production Model:** Speech production can be modeled as the convolution of an excitation signal (glottal pulses for voiced sounds, noise for unvoiced sounds) with the impulse response of the vocal tract.
    `s(n) = e(n) * h(n)`
    where:
    *   `s(n)` is the speech signal.
    *   `e(n)` is the excitation signal.
    *   `h(n)` is the vocal tract impulse response (filter).
    *   `*` denotes convolution.

#### 6.2 The Homomorphic Processing Technique

*   **Logarithm and Fourier Transform:** The convolution in the time domain becomes addition in the cepstral domain.
    1.  **Take the Fourier Transform:** `S(z) = E(z) * H(z)`
    2.  **Take the Logarithm:** `log(S(z)) = log(E(z)) + log(H(z))`
    3.  **Inverse Fourier Transform (Ceptrum):** The result `log(S(z))` is transformed back to the time domain via an inverse Fourier Transform, yielding the **cepstrum**: `c(n) = IFFT(log(FFT(s(n))))`.
*   **Separation:** In the cepstral domain, the contributions of the excitation and the vocal tract are separated.
    *   The excitation `e(n)` typically has characteristics that decay rapidly in the cepstrum (related to the fundamental frequency).
    *   The vocal tract `h(n)` has characteristics that decay more slowly (related to the formant frequencies).
*   **Filtering in Cepstral Domain:** By applying a "lifter" (a filter in the cepstral domain), one can selectively remove or retain the contributions of either the excitation or the vocal tract.
    *   **Liftering:** Multiplying the cepstrum by a lifter function and then taking the inverse Fourier Transform.
*   **Recovering Components:**
    *   To recover the vocal tract, we can take the cepstrum of the vocal tract and then apply the Fourier Transform and exponentiation: `H(z) = exp(IFFT(liftered_log_S(z)))`.
    *   To recover the excitation, we can do the same with a different lifter.

#### 6.3 Applications in Speech Analysis

*   **Pitch Extraction:** Homomorphic filtering can be used to isolate the excitation signal, from which the pitch period can be reliably extracted.
*   **Vocal Tract Modeling:** By separating the vocal tract component, one can obtain a clearer representation of the vocal tract's shape and characteristics, which is useful for speech synthesis and understanding articulatory changes.
*   **Deconvolution:** It's a powerful technique for de-convolving signals where the original components are not directly accessible.

---

### Important Points to Remember:

*   **Speech is non-stationary:** This necessitates short-time analysis.
*   **Framing and windowing** are essential preprocessing steps for short-time analysis.
*   **Window functions** reduce spectral leakage but introduce a trade-off between frequency resolution and side lobe suppression.
*   The **STFT** provides a time-frequency representation of speech.
*   The **spectrogram** is a visual representation of the STFT and is invaluable for understanding speech acoustics.
*   **Spectral analysis** helps identify key speech features like formants and pitch.
*   **Homomorphic processing** can separate the excitation and vocal tract components of speech by operating in the cepstral domain.

---

### Practice Questions & Exercises:

**Question 1: Why is short-time analysis essential for speech signals?**

**Answer:** Speech signals are inherently non-stationary, meaning their acoustic properties change rapidly over time. Long-term analysis averages these changes, obscuring crucial information about individual speech sounds (phonemes) and their temporal variations. Short-time analysis allows us to capture these dynamic changes, enabling tasks like phoneme recognition and understanding articulatory movements.

---

**Question 2: Describe the process of framing and windowing in short-time speech analysis.**

**Answer:**
1.  **Framing:** The continuous speech signal is divided into short, overlapping segments called frames. These frames are typically 10-30 ms in duration. Overlapping ensures no critical information at frame boundaries is lost.
2.  **Windowing:** Each frame is multiplied by a window function (e.g., Hamming, Hanning). The window function tapers the frame's amplitude smoothly to zero at its edges. This is done to minimize artificial spectral distortions (spectral leakage) that arise from the abrupt truncation of the signal in the framing process.

---

**Question 3: What is the primary trade-off when choosing a window function for speech analysis?**

**Answer:** The primary trade-off is between **frequency resolution** and **side lobe suppression (or spectral leakage reduction)**.
*   Windows with narrower main lobes (e.g., Rectangular, Hamming) provide better frequency resolution, allowing us to distinguish closely spaced frequencies. However, they have higher side lobes, leading to more spectral leakage.
*   Windows with lower side lobes (e.g., Blackman) significantly reduce spectral leakage but have wider main lobes, resulting in poorer frequency resolution.

---

**Question 4: What is a spectrogram, and what does it represent?**

**Answer:** A spectrogram is a visual representation of the Short-Time Fourier Transform (STFT) of a signal. It is typically a 2D plot (or 3D) where:
*   The x-axis represents **time**.
*   The y-axis represents **frequency**.
*   The intensity or color at each time-frequency point represents the **magnitude (or power)** of the frequency component at that specific time.
It shows how the spectral content of the speech signal evolves over time.

---

**Question 5: Briefly explain the concept of homomorphic processing in speech and one of its applications.**

**Answer:** Homomorphic processing is a technique used to separate convolved signals. In speech, it models the speech signal as the convolution of an excitation source and the vocal tract filter. By taking the Fourier Transform, then the logarithm, and finally the inverse Fourier Transform (resulting in the cepstrum), the convolution is converted into an additive problem. This allows for the separation of the excitation and vocal tract components by applying "liftering" (filtering in the cepstral domain).

**Application:** A key application is **pitch extraction**. By separating the excitation signal, the periodic nature related to the vocal fold vibration can be more easily identified and analyzed to determine the fundamental frequency (pitch).
