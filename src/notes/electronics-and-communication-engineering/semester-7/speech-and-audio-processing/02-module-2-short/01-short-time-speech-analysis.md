---
title: "Short-Time Speech Analysis"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 2: Short"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff44b"
status: "completed"
scrapedAt: "2026-05-23T18:11:08.646Z"
---
# SPEECH AND AUDIO PROCESSING: Module 2 - Short-Time Speech Analysis

---

## 1. Introduction to Short-Time Speech Analysis

**Goal:** To understand the rationale behind analyzing speech signals over short, overlapping time intervals rather than as a single, long signal. This is because the characteristics of speech change rapidly over time.

**Key Concept:** **Non-stationarity of Speech Signals.** Speech is a quasi-stationary signal. This means that its statistical properties (like spectral content) remain relatively constant over short durations, but change significantly over longer durations.

**Why Short-Time Analysis?**
*   **Temporal Variation:** Speech sounds (phonemes, articulatory movements) are produced sequentially. Analyzing the entire utterance at once would blur these rapid changes.
*   **Parameter Estimation:** Many speech analysis techniques aim to estimate parameters that describe the vocal tract and vocal cord excitation. These parameters are dynamic and vary with time.
*   **Applications:** Tasks like speech recognition, speaker identification, and speech synthesis rely on capturing these temporal variations.

**Reference:** O'Shaughnessy, Chapter 4 (Short-time analysis). Quatieri, Chapter 1 (Introduction to Speech Processing).

**Course Outcome Alignment:**
*   **CO2 (K2):** Analyze the speech signal in the time and frequency domain. Short-time analysis is a fundamental technique for this.

---

## 2. Framing and Windowing

To perform short-time analysis, the continuous speech signal is first segmented into small, overlapping frames.

### 2.1 Framing

**Definition:** Dividing a continuous speech signal into discrete, contiguous segments called frames.

**Frame Size:**
*   Typically ranges from **10 ms to 30 ms**.
*   A common choice is **25 ms**.
*   The frame size should be short enough to capture rapid changes but long enough to have sufficient spectral resolution.

**Frame Rate (or Hop Size):**
*   The rate at which new frames are extracted from the signal.
*   Typically ranges from **5 ms to 15 ms**.
*   A common choice is **10 ms**.
*   This means frames **overlap**.

**Overlap:**
*   `Overlap = Frame Size - Frame Rate`
*   Example: If Frame Size = 25 ms and Frame Rate = 10 ms, then Overlap = 15 ms.
*   **Purpose of Overlap:** To ensure that no speech information is lost at the frame boundaries and to provide smoother transitions between consecutive frames.

**Illustration:**
```
Time:   |------------------------------------------------|
Signal: s(t)

Frames:
        [---frame1---]
           [---frame2---]
              [---frame3---]
                 ...
```

### 2.2 Windowing

**Purpose:** To reduce the abrupt transitions at the beginning and end of each frame. These abrupt transitions can introduce undesirable spectral distortion (spectral leakage) when performing spectral analysis (e.g., FFT).

**Definition:** Multiplying each speech frame by a **window function**.

**Window Function:**
*   A finite-duration function that is zero outside a specific interval and has a shape that tapers smoothly to zero at the edges.
*   This tapering smoothly attenuates the signal at the frame boundaries.

**Types of Window Functions:**
*   **Rectangular Window (or Boxcar Window):** Simple, but has significant sidelobes, leading to spectral leakage.
    *   `w(n) = 1` for `0 <= n <= M-1`, and `0` otherwise (where `M` is the frame length in samples).
*   **Hamming Window:** A popular choice, provides a good trade-off between spectral resolution and sidelobe reduction.
    *   `w(n) = 0.54 - 0.46 * cos(2*pi*n / (M-1))` for `0 <= n <= M-1`.
*   **Hanning Window (or Hann Window):** Similar to Hamming but with slightly wider main lobe and lower sidelobes.
    *   `w(n) = 0.5 * (1 - cos(2*pi*n / (M-1)))` for `0 <= n <= M-1`.
*   **Blackman Window:** Offers better sidelobe attenuation but at the cost of a wider main lobe.

**Mathematical Representation:**
Given a speech signal `s(n)` and a window function `w(n)` of length `M`:
The windowed frame `s_w(n)` starting at time `m` is:
`s_w(n) = s(m + n) * w(n)` for `0 <= n <= M-1`.

**Important Point:** The windowed frame `s_w(n)` is centered around the time instance `m`.

**Reference:** Quatieri, Chapter 1. O'Shaughnessy, Section 4.1.

**Course Outcome Alignment:**
*   **CO2 (K2):** Analyze the speech signal in the time and frequency domain. Framing and windowing are essential preprocessing steps for frequency domain analysis.

---

## 3. Short-Time Fourier Transform (STFT)

**Purpose:** To analyze the spectral content of the speech signal within each short frame. This allows us to observe how the frequency components change over time.

**Concept:** Applying the Fourier Transform to each windowed frame.

**Mathematical Definition:**
For a windowed frame `s_w(n)` starting at time `m` (length `M`), the Short-Time Fourier Transform (STFT) at time `m` and frequency `k` (or angular frequency `omega`) is:

`X(m, k) = Sum [ s(m + n) * w(n) * exp(-j * 2 * pi * k * n / M) ]` for `n = 0 to M-1`

*   `m`: represents the frame index (or time).
*   `k`: represents the frequency index (Discrete Fourier Transform bins).
*   `M`: is the length of the windowed frame.
*   `w(n)`: is the window function.
*   `exp(-j * 2 * pi * k * n / M)`: is the complex exponential, the core of the DFT.

**Output:** A complex-valued representation `X(m, k)` which provides the magnitude and phase of each frequency component `k` at each time frame `m`.

**Magnitude Spectrum:** `|X(m, k)|` - Indicates the strength of each frequency component at time `m`.
**Phase Spectrum:** `angle(X(m, k))` - Indicates the phase of each frequency component at time `m`.

**Common Output Representation:**
*   **Spectrogram:** A visual representation of the STFT. It plots time on the horizontal axis, frequency on the vertical axis, and the magnitude of the STFT (often in dB) as intensity or color.

**Trade-offs:**
*   **Time-Frequency Resolution Trade-off:**
    *   **Short Window (Small M):** Good time resolution (can pinpoint rapid changes in sound), but poor frequency resolution (difficult to distinguish between closely spaced frequencies).
    *   **Long Window (Large M):** Good frequency resolution, but poor time resolution (blurs rapid changes).
    *   This is an inherent limitation imposed by the uncertainty principle in signal processing.

**Reference:** O'Shaughnessy, Section 4.2. Quatieri, Chapter 1. Rabinar, Chapter 4.

**Course Outcome Alignment:**
*   **CO2 (K2):** Analyze the speech signal in the time and frequency domain. STFT is the primary tool for this.

---

## 4. Short-Time Autocorrelation and Autocovariance

While STFT provides spectral information, other short-time analysis techniques focus on the temporal structure of the signal.

### 4.1 Short-Time Autocorrelation Function (ACF)

**Purpose:** To measure the similarity of the signal with a time-shifted version of itself within a short frame. It reveals periodicity in the signal.

**Definition:** For a windowed frame `s_w(n)` of length `M`, the short-time autocorrelation function `r_s(m, lag)` at time `m` and for a given `lag` is:

`r_s(m, lag) = Sum [ s_w(n) * s_w(n - lag) ]` for `n = 0 to M-1` (or appropriate range to avoid out-of-bounds access).

*   `lag`: The time shift.

**Key Observations from ACF:**
*   **Periodicity:** A strong peak in the ACF at a certain `lag` indicates that the signal is similar to itself when shifted by that `lag`. This is crucial for detecting the **pitch period** of voiced speech.
*   **Voiced vs. Unvoiced:**
    *   **Voiced segments:** Exhibit clear periodicity, leading to a prominent peak in the ACF at the pitch period.
    *   **Unvoiced segments:** Are more noise-like and have a decaying or insignificant ACF.

**Reference:** Quatieri, Chapter 2 (Autocorrelation Methods). O'Shaughnessy, Section 4.3.

### 4.2 Short-Time Autocovariance Function (ACVF)

**Purpose:** Similar to ACF, but it removes the mean of the signal within the frame. This can be more robust when the signal mean is not zero.

**Definition:** For a windowed frame `s_w(n)` of length `M` with mean `mean_s(m)`:

`c_s(m, lag) = Sum [ (s_w(n) - mean_s(m)) * (s_w(n - lag) - mean_s(m)) ]` for `n = 0 to M-1`

**Relationship to ACF:** For a zero-mean signal, ACVF is the same as ACF.

**Reference:** Quatieri, Chapter 2.

**Course Outcome Alignment:**
*   **CO2 (K2):** Analyze the speech signal in the time and frequency domain. ACF/ACVF are used for time-domain analysis, particularly for pitch detection.
*   **CO3 (K3):** Apply speech processing concepts in real-world applications. Pitch detection using ACF is a common application in speech synthesis and analysis.

---

## 5. Pitch Detection (Fundamental Frequency Estimation)

**Purpose:** To estimate the fundamental frequency (`f0`) of the speech signal, which corresponds to the rate of vibration of the vocal folds. This is a key characteristic of voiced speech.

**Concept:** Exploiting the periodic nature of voiced speech. The pitch period (`T0`) is the inverse of the fundamental frequency (`f0 = 1/T0`).

**Methods:**

### 5.1 Autocorrelation Method

*   **Principle:** Calculate the short-time autocorrelation function for each frame. The `lag` at which the ACF exhibits its highest peak (excluding lag 0) is an estimate of the pitch period `T0`.
*   **Steps:**
    1.  Frame the speech signal.
    2.  Window each frame.
    3.  Compute the ACF for the windowed frame.
    4.  Find the peak in the ACF within a plausible range of pitch periods (e.g., 2 ms to 20 ms for typical human speech).
    5.  Convert the lag of the peak to fundamental frequency.
*   **Pros:** Simple, effective for voiced segments.
*   **Cons:** Can be fooled by harmonic components (e.g., finding a peak at `2*T0` or `T0/2`), requires careful peak picking, doesn't work for unvoiced segments.

### 5.2 Average Magnitude Difference Function (AMDF)

*   **Principle:** Measures the average difference between the signal and its time-shifted version. For voiced speech, the AMDF will have its minimum at the pitch period.
*   **Definition:** For a windowed frame `s_w(n)` and a lag `lag`:
    `AMDF(m, lag) = (1/M) * Sum [ |s_w(n) - s_w(n - lag)| ]` for `n = 0 to M-1`.
*   **Pros:** Can be less sensitive to harmonic components than ACF.
*   **Cons:** Sensitive to overall signal amplitude, can be computationally more intensive.

### 5.3 Other Methods (Brief Mention)

*   **Maximum Likelihood Methods:** More statistically robust but computationally complex.
*   **Cepstral Analysis:** Can effectively separate the excitation (source) from the vocal tract (filter).

**Important Point:** Pitch detection is typically performed only on segments identified as voiced. A voiced/unvoiced (V/UV) detector is often used as a first step.

**Reference:** Quatieri, Chapter 2. O'Shaughnessy, Section 4.3.

**Course Outcome Alignment:**
*   **CO2 (K2):** Analyze the speech signal in the time and frequency domain. Pitch detection is a key time-domain analysis.
*   **CO3 (K3):** Apply speech processing concepts in real-world applications. Pitch estimation is fundamental for speech synthesis (controlling vocal pitch) and some speech analysis tasks.

---

## 6. Introduction to Speech Production Models and their Relevance to Short-Time Analysis

While not directly a short-time analysis technique itself, understanding speech production guides *why* we analyze speech in short frames and what parameters we look for.

**Speech Production Mechanism (Simplified):**
*   **Source-Filter Model:** Speech is often modeled as the output of a source (vocal folds for voiced sounds, turbulent airflow for unvoiced sounds) filtered by the vocal tract.
*   **Voiced Sounds:**
    *   **Source:** Periodic pulsing of the vocal folds.
    *   **Excitation Signal:** Approximated by a series of glottal pulses.
    *   **Fundamental Frequency (f0):** Determined by the rate of vocal fold vibration.
*   **Unvoiced Sounds:**
    *   **Source:** Constriction in the vocal tract (e.g., fricatives like /s/, /f/).
    *   **Excitation Signal:** Turbulent airflow, approximated as noise.
    *   **No fundamental frequency.**

**Relevance to Short-Time Analysis:**
*   **Quasi-stationarity:** The vocal tract shape (and thus its filtering characteristics) changes relatively slowly, allowing us to treat short frames as quasi-stationary.
*   **Source Parameters:** Short-time analysis techniques like ACF are used to estimate the fundamental frequency (source parameter) for voiced segments.
*   **Filter Parameters:** Techniques like Linear Predictive Coding (LPC), discussed in later modules, aim to estimate the vocal tract filter parameters from the short-time speech signal.

**Reference:** O'Shaughnessy, Chapters 1, 2, 3.

**Course Outcome Alignment:**
*   **CO1 (K1):** To describe the fundamental concepts, principles, and theories of speech production. Understanding production explains the need for short-time analysis.
*   **CO3 (K3):** Apply speech processing concepts in real-world applications. Modeling speech production informs feature extraction for speech recognition and synthesis.

---

## 7. Important Points to Remember

*   **Speech is non-stationary:** This is the fundamental reason for short-time analysis.
*   **Framing and Windowing:** Essential preprocessing steps to segment and smooth the signal for analysis.
*   **Time-Frequency Trade-off:** The choice of window length impacts the resolution in both time and frequency domains.
*   **STFT:** Provides a time-varying spectral representation.
*   **Autocorrelation:** Crucial for detecting periodicity, especially for pitch estimation in voiced speech.
*   **Pitch:** A characteristic of voiced sounds, estimated from the periodicity of the signal.
*   **Short-time analysis techniques are the building blocks for many advanced speech processing applications.**

---

## 8. Practice Questions and Answers

**Question 1:** Why is it necessary to analyze the speech signal using short-time techniques rather than analyzing the entire utterance at once?
**Answer:** Speech is a non-stationary signal. Its characteristics, such as the frequency content and the presence/absence of voicing, change rapidly over time due to the dynamic movements of the vocal tract and vocal folds. Analyzing the entire utterance at once would average out these important temporal variations, making it impossible to understand the sequential nature of speech sounds. Short-time analysis allows us to capture these rapid changes by analyzing small, overlapping segments of the signal. (Relates to CO2).

**Question 2:** If a speech frame is 30 ms long and the frame rate is 10 ms, what is the overlap between consecutive frames?
**Answer:** Overlap = Frame Size - Frame Rate = 30 ms - 10 ms = 20 ms. (Relates to understanding framing).

**Question 3:** Briefly explain the purpose of applying a window function to a speech frame before performing spectral analysis.
**Answer:** A window function is applied to taper the amplitude of the speech signal towards zero at the beginning and end of the frame. This smooths the transitions at the frame boundaries, reducing the spectral leakage that occurs when using the Discrete Fourier Transform (DFT) on finite-length segments. Common window functions like Hamming or Hanning offer a good balance between reducing spectral leakage and maintaining spectral resolution. (Relates to CO2).

**Question 4:** How is the autocorrelation function used for pitch detection in voiced speech?
**Answer:** For voiced speech, the speech signal is quasi-periodic due to the regular vibration of the vocal folds. The autocorrelation function measures the similarity of the signal with a time-shifted version of itself. A peak in the autocorrelation function at a specific lag indicates that the signal is similar to itself when shifted by that lag. For voiced speech, the lag corresponding to the highest peak in the autocorrelation function (excluding lag 0) is an estimate of the pitch period (T0). The fundamental frequency (f0) is then calculated as f0 = 1/T0. (Relates to CO2, CO3).

**Question 5:** What is the time-frequency resolution trade-off in STFT?
**Answer:** The time-frequency resolution trade-off means that there is an inherent compromise between how accurately we can determine the time of an event and how accurately we can determine its frequency.
*   A **short analysis window** provides good **time resolution** (allowing us to pinpoint when a change occurs) but poor **frequency resolution** (making it hard to distinguish between closely spaced frequencies).
*   A **long analysis window** provides good **frequency resolution** but poor **time resolution**, blurring rapid changes in the signal.
This is a fundamental limitation governed by the uncertainty principle in signal processing. (Relates to CO2).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## 9. Textbook References and Further Reading

*   **Speech Communications: Human and Machine, 2nd Edition by Douglas O'Shaughnessy:** Chapters 4 (Short-time analysis) provide foundational concepts.
*   **Discrete-Time Speech Signal Processing: Principles and Practice by Thomas F. Quatieri:** Chapters 1 (Introduction) and 2 (Autocorrelation Methods) are highly relevant for framing, windowing, STFT, and ACF-based pitch detection.
*   **Digital Processing of Speech Signals by Rabinar:** Chapter 4 offers further insights into short-time spectral analysis and related techniques.

---