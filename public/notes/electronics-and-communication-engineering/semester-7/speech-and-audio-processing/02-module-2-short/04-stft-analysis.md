---
title: "STFT Analysis"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 2: Short"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff44e"
status: "completed"
scrapedAt: "2026-05-23T18:11:11.085Z"
---
# SPEECH AND AUDIO PROCESSING

## Module 2: Short-Time Fourier Transform (STFT) Analysis

### Topic: STFT Analysis

---

### 1. Introduction to STFT Analysis

**What is the need for STFT?**

Speech signals are inherently **non-stationary**. This means their spectral characteristics change over time. Traditional Fourier Transform (FT) assumes stationarity and thus provides an average frequency content over the entire signal. This is insufficient for analyzing speech, where formants (resonances of the vocal tract) change rapidly during articulation.

The **Short-Time Fourier Transform (STFT)** is a technique that addresses this by analyzing the signal in short, overlapping segments. This allows us to capture the time-varying spectral properties of speech.

**STFT is a cornerstone for analyzing speech signals in the time and frequency domain, directly aligning with CO2.**

---

### 2. Core Concepts and Definitions

#### 2.1 The Basic Idea: Windowing

The fundamental operation in STFT is **windowing**. We multiply the speech signal by a short, finite-duration **window function** that is centered around a specific point in time. This effectively isolates a small segment of the signal.

*   **Window Function (w(n))**: A finite-duration function that tapers smoothly to zero at its edges. Common examples include:
    *   Rectangular window
    *   Hamming window
    *   Hanning window
    *   Blackman window

    *Reference: O'Shaughnessy, Chapter 5 (Time-Domain Analysis) and Quatieri, Chapter 3 (Short-Time Fourier Analysis).* O'Shaughnessy discusses the trade-offs of different window types in terms of frequency resolution and sidelobe leakage. Quatieri provides detailed mathematical derivations for various window functions.

*   **Windowing Operation**: For a signal $x(n)$, multiplying by a window function $w(n-m)$ centered at time $m$ gives:
    $x_m(n) = x(n) \cdot w(n-m)$

    Here, $x_m(n)$ represents the windowed segment of the signal centered at time $m$.

#### 2.2 The Short-Time Fourier Transform (STFT) Formula

After windowing a segment of the signal, we apply the Discrete Fourier Transform (DFT) to this windowed segment. The STFT is essentially a collection of these DFTs computed for segments taken at different time instances.

Let $x(n)$ be the discrete-time speech signal.
Let $w(n)$ be a window function of length $N$.

The STFT of $x(n)$ at time index $m$ is given by:

$X_m(k) = \sum_{n=-\infty}^{\infty} x(n) w(n-m) e^{-j 2 \pi k n / N}$

Where:
*   $X_m(k)$ is the DFT coefficient at frequency bin $k$ for the window centered at time $m$.
*   $m$ is the time index (center of the window).
*   $k$ is the frequency index (from 0 to $N-1$).
*   $N$ is the length of the DFT (and typically the window length).

*   **Important Note:** The summation is over all $n$. In practice, since $w(n-m)$ is finite in duration, the summation is over a finite range. If the window $w(n)$ is defined for $0 \le n < N$, and centered at $m$, then $w(n-m)$ is non-zero for $m-N/2 \le n < m+N/2$.

*Reference: Quatieri, Chapter 3.1 (The Short-Time Fourier Transform). Quatieri provides a clear derivation of this formula, often using the time-shift property of the DFT.*

#### 2.3 Time-Frequency Representation: The Spectrogram

The STFT provides complex-valued coefficients ($X_m(k)$), which contain both magnitude and phase information. For many applications, especially visualization and general analysis, the **magnitude squared** of the STFT coefficients is used, forming the **spectrogram**.

*   **Spectrogram**: A plot of the squared magnitude of the STFT coefficients as a function of time and frequency.
    $S(m, k) = |X_m(k)|^2$

    The spectrogram visually represents how the frequency content of the speech signal changes over time. Peaks in the spectrogram correspond to dominant frequencies at a given time.

    *Example:* For a voiced sound like a vowel, the spectrogram would show clear horizontal bands (harmonics) whose positions change slowly, representing formant frequencies. For unvoiced sounds like /s/, the spectrogram would show more spread-out energy across a wide range of frequencies.

*Reference: O'Shaughnessy, Chapter 5.3 (Time-Frequency Representations) and Quatieri, Chapter 3.3 (The Spectrogram). Both textbooks discuss the importance of the spectrogram for visualizing speech characteristics.*

---

### 3. Key Parameters of STFT Analysis

The performance of STFT analysis is heavily dependent on two key parameters: the **window length** and the **hop size** (or overlap).

#### 3.1 Window Length ($N$)

The length of the window function, $N$, determines the resolution in both time and frequency.

*   **Trade-off:**
    *   **Short Window ($N$ is small):**
        *   **Good Time Resolution:** More precise localization of rapid spectral changes. Useful for capturing transient sounds or the onset of phonemes.
        *   **Poor Frequency Resolution:** Wider frequency bandwidth for each spectral component. May blur closely spaced formants.
    *   **Long Window ($N$ is large):**
        *   **Good Frequency Resolution:** Ability to distinguish between closely spaced frequency components (e.g., formants).
        *   **Poor Time Resolution:** Blurs rapid spectral changes. May not accurately represent the exact timing of events.

*   **Typical Values:** For speech analysis, window lengths are often chosen between 20-40 ms. At a sampling rate of 8 kHz, this corresponds to $N = 160-320$ samples. At 16 kHz, it's $N = 320-640$ samples.

*Reference: O'Shaughnessy, Chapter 5.2 (Windowing and the STFT). O'Shaughnessy emphasizes the Heisenberg uncertainty principle in the context of time-frequency analysis, explaining this trade-off.* Quatieri also details this trade-off in Chapter 3.2 (Window Functions and Resolution).

#### 3.2 Hop Size (Overlap, $H$)

The hop size, $H$, determines how often new STFT frames are computed. It dictates the overlap between successive windows.

*   **Overlap:** The amount of overlap is $N - H$.
*   **Sampling Rate of STFT:** The STFT is computed every $H$ samples of the original signal. This is the time sampling rate of the STFT.
*   **Relationship with Time Resolution:** A smaller hop size means more STFT frames are computed per unit of time, leading to a more detailed view of temporal changes.

*   **Trade-off:**
    *   **Small Hop Size ($H$ is small, high overlap):**
        *   **Good Temporal Sampling:** Captures finer temporal details and smoother transitions in the spectrogram.
        *   **Increased Computational Cost:** More DFTs need to be computed.
    *   **Large Hop Size ($H$ is large, low overlap):**
        *   **Lower Temporal Sampling:** May miss rapid changes between frames.
        *   **Reduced Computational Cost:** Fewer DFTs are computed.

*   **Typical Values:** For speech analysis, hop sizes are often chosen to be 50% or 67% of the window length. For example, if $N=256$, a hop size of $H=128$ (50% overlap) or $H=85$ (67% overlap) might be used. This ensures that significant spectral information from one frame is captured in the next.

*Reference: O'Shaughnessy, Chapter 5.2.1 (Windowing and Overlap). Quatieri, Chapter 3.1.1 (Windowing and Overlap).*

---

### 4. The STFT Process: Step-by-Step

1.  **Select a Window Function:** Choose a suitable window function (e.g., Hamming, Hanning).
2.  **Choose Window Length ($N$) and Hop Size ($H$):** Based on the desired time-frequency resolution trade-off.
3.  **Segment the Signal:** Divide the input signal $x(n)$ into overlapping frames.
    *   Frame 0: $x(0), x(1), ..., x(N-1)$
    *   Frame 1: $x(H), x(H+1), ..., x(H+N-1)$
    *   Frame $m$: $x(mH), x(mH+1), ..., x(mH+N-1)$
4.  **Apply Window Function:** Multiply each frame by the window function.
    *   Windowed Frame $m$: $x_m(n') = x(mH + n') \cdot w(n')$ for $0 \le n' < N$. (Here, we re-indexed the windowed segment from $n'$).
5.  **Compute DFT:** For each windowed frame, compute its $N$-point DFT.
    $X_m(k) = \sum_{n'=0}^{N-1} x_m(n') e^{-j 2 \pi k n' / N}$
6.  **Store/Process Results:** The STFT is the collection of all $X_m(k)$ for different $m$ and $k$. The spectrogram is generated from $|X_m(k)|^2$.

*Reference: Quatieri, Chapter 3.1 (The Short-Time Fourier Transform). Quatieri walks through this process with detailed mathematical steps and computational considerations.*

---

### 5. Applications of STFT Analysis in Speech

STFT analysis is fundamental to many speech processing tasks.

*   **Speech Synthesis:** Understanding spectral changes over time is crucial for generating natural-sounding speech.
*   **Speech Recognition:** Features extracted from STFT (like Mel-Frequency Cepstral Coefficients - MFCCs, which are derived from the spectrogram) are widely used in ASR systems.
*   **Speaker Identification/Verification:** Time-varying spectral patterns can distinguish speakers.
*   **Speech Enhancement:** Noise reduction algorithms often operate on the STFT domain.
*   **Prosody Analysis:** Analyzing the temporal variations in pitch and intensity.
*   **Vocal Tract Modeling:** Observing formant movements can reveal information about the vocal tract shape.

**This directly addresses CO2 (analyze speech in time and frequency domain) and CO3 (apply speech processing concepts in real-world applications).**

*Reference: O'Shaughnessy, Chapter 5.5 (Applications). Quatieri, Chapter 3.5 (Applications of STFT).*

---

### 6. Time-Frequency Resolution Trade-off Revisited

The uncertainty principle in signal processing states that one cannot simultaneously achieve arbitrarily high resolution in both time and frequency.

*   **Analogy:** Imagine trying to measure the exact position and speed of a small, fast-moving object. If you try to pinpoint its position precisely (good time resolution), you might not know its exact speed at that instant (poor frequency resolution). Conversely, if you measure its speed over a long period (good frequency resolution), you lose information about its exact position at any single moment (poor time resolution).

*   **STFT Implementation:**
    *   **Short Window:** Good for tracking rapid events, but spectral details are blurred.
    *   **Long Window:** Good for spectral detail, but events are smeared in time.

The choice of window length and hop size is a critical design decision based on the specific application and the characteristics of the speech being analyzed.

*Reference: O'Shaughnessy, Chapter 5.2.2 (Time-Frequency Resolution). Quatieri, Chapter 3.2.3 (Time-Frequency Resolution).*

---

### 7. Important Points to Remember

*   **Speech is non-stationary:** STFT is essential for analyzing its time-varying spectral content.
*   **Windowing is key:** The STFT applies a window to short segments of the signal.
*   **Time-Frequency Trade-off:** Window length and hop size are crucial parameters that dictate the resolution in time and frequency.
*   **Spectrogram:** A powerful visualization tool derived from the squared magnitude of the STFT.
*   **Applications:** STFT is a foundational technique in numerous speech processing tasks.
*   **Heisenberg Uncertainty Principle:** Limits the simultaneous resolution in time and frequency.

---

### 8. Practice Questions and Exercises

**Question 1:**
What is the primary reason for using STFT analysis on speech signals instead of the standard Discrete Fourier Transform (DFT)?
a) DFT is computationally too expensive.
b) Speech signals are non-stationary.
c) DFT cannot handle real-world audio data.
d) STFT provides phase information, which DFT does not.

**Answer 1:**
b) Speech signals are non-stationary.

**Question 2:**
If you are analyzing speech and want to precisely pinpoint the timing of a rapid glottal pulse, would you choose a:
a) Very long window length and a large hop size.
b) Very short window length and a small hop size.
c) Very long window length and a small hop size.
d) Very short window length and a large hop size.

**Answer 2:**
b) Very short window length and a small hop size.
*   *Explanation:* A short window provides good time resolution to capture the rapid event. A small hop size ensures that the frames are close enough in time to accurately represent the timing of this event.

**Question 3:**
Explain the trade-off between time resolution and frequency resolution in STFT. How do the window length and hop size influence this trade-off?

**Answer 3:**
The **window length ($N$)** directly impacts the time-frequency resolution trade-off.
*   A **shorter window** provides better **time resolution** (ability to locate events precisely in time) but poorer **frequency resolution** (spectral components are smeared).
*   A **longer window** provides better **frequency resolution** (ability to distinguish closely spaced frequencies) but poorer **time resolution** (events are blurred in time).

The **hop size ($H$)** influences the temporal sampling rate of the STFT and how much overlap there is between successive frames.
*   A **smaller hop size** (more overlap) leads to a denser sampling of the signal in time, providing a more detailed view of spectral changes over time and better temporal accuracy in the STFT representation. It doesn't directly change the resolution *within* a single frame (that's $N$'s job), but it improves the temporal sampling *of* the STFT frames.
*   A **larger hop size** (less overlap) leads to sparser sampling in time, potentially missing rapid changes between frames, but is computationally more efficient.

**Question 4:**
What does the term "spectrogram" refer to in the context of STFT analysis?

**Answer 4:**
The spectrogram is a visual representation of the STFT's magnitude squared values, plotted as a function of time and frequency. It shows the intensity (power) of different frequency components of the speech signal over time.

**Question 5:**
Consider analyzing a speech signal sampled at 16 kHz. If you choose a window length of 32 ms and a hop size of 16 ms:
a) What is the window length in samples?
b) What is the hop size in samples?
c) What is the percentage of overlap between consecutive windows?

**Answer 5:**
a) Window length in samples ($N$) = $32 \text{ ms} \times 16 \text{ kHz} = 32 \times 10^{-3} \times 16 \times 10^3 = 512$ samples.
b) Hop size in samples ($H$) = $16 \text{ ms} \times 16 \text{ kHz} = 16 \times 10^{-3} \times 16 \times 10^3 = 256$ samples.
c) Percentage of overlap = $\frac{N-H}{N} \times 100\% = \frac{512 - 256}{512} \times 100\% = \frac{256}{512} \times 100\% = 50\%$ overlap.

---

This module provides the foundational understanding of how to analyze the time-varying spectral characteristics of speech, a critical step for many downstream speech processing tasks. The STFT is a workhorse in this field.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
