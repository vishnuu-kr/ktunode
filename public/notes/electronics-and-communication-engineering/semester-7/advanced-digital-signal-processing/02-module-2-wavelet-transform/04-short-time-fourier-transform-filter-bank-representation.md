---
title: "Short Time Fourier transform-Filter Bank representation."
subject: "ADVANCED DIGITAL SIGNAL PROCESSING"
module: "Module 2: Wavelet transform:"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff274"
status: "completed"
scrapedAt: "2026-05-23T18:04:10.705Z"
---
# ADVANCED DIGITAL SIGNAL PROCESSING

## Module 2: Wavelet Transform

### Topic: Short-Time Fourier Transform (STFT) - Filter Bank Representation

---

### **1. Introduction to Time-Frequency Analysis**

*   **Problem with Traditional Fourier Transform:** The standard Fourier Transform provides excellent frequency resolution but no time localization. It tells us *what* frequencies are present in a signal but not *when* they occur. This is problematic for non-stationary signals, where the frequency content changes over time.
*   **Need for Time-Frequency Analysis:** To analyze signals whose frequency content varies with time (e.g., speech, music, biomedical signals), we need techniques that can analyze both the time and frequency aspects of the signal simultaneously.
*   **Time-Frequency Representations (TFRs):** These are mathematical tools that display how the spectral content of a signal changes over time.

---

### **2. Short-Time Fourier Transform (STFT)**

*   **Concept:** The STFT is a fundamental time-frequency analysis technique. It breaks down a non-stationary signal into small segments and performs a Fourier Transform on each segment. This allows us to see how the frequencies within each segment evolve over time.
*   **Methodology:**
    1.  **Windowing:** The signal is multiplied by a finite-duration window function (e.g., Hamming, Hanning, Gaussian). This window isolates a small portion of the signal.
    2.  **Shifting:** The window is shifted along the time axis, moving through the signal.
    3.  **Fourier Transform:** For each windowed segment, a Fourier Transform is computed.
*   **Mathematical Definition (Discrete-Time):**
    Let $x[n]$ be the discrete-time signal.
    Let $w[n]$ be a finite-duration window function, with length $M$.
    The STFT of $x[n]$ with respect to window $w[n]$ and hop size $h$ is given by:

    $$X_{STFT}(n, k) = \sum_{m=-\infty}^{\infty} x[m] w[m-n] e^{-j 2\pi k m / N}$$

    Where:
    *   $n$ is the time index (representing the center of the window).
    *   $k$ is the frequency index, corresponding to a discrete frequency bin.
    *   $N$ is the FFT size (typically chosen to be a power of 2 for efficient computation).
    *   The summation effectively applies the window $w[m-n]$ to the signal $x[m]$. The window is centered at time $n$.
    *   The term $e^{-j 2\pi k m / N}$ is the complex exponential for the DFT.

*   **STFT as a Spectrogram:** The magnitude squared of the STFT, $|X_{STFT}(n, k)|^2$, is called the **spectrogram**. It provides a visual representation of the signal's frequency content as a function of time.

*   **Trade-off:** The STFT is characterized by a fundamental trade-off between time resolution and frequency resolution.
    *   **Short Window:** Provides good time resolution (we know precisely *when* a frequency component appears) but poor frequency resolution (we are less certain about *which* specific frequency it is).
    *   **Long Window:** Provides good frequency resolution but poor time resolution.
    *   This is a direct consequence of the **Heisenberg Uncertainty Principle** applied to signal processing.

*   **Implementation:** The STFT is typically implemented by:
    1.  Segmenting the signal into overlapping frames of length $M$.
    2.  Applying the window function to each frame.
    3.  Computing the Fast Fourier Transform (FFT) of each windowed frame.
    4.  The hop size $h$ determines the overlap between consecutive frames. A hop size smaller than the window length leads to overlapping frames.

---

### **3. STFT - Filter Bank Representation**

*   **Concept:** The STFT can be viewed as passing the signal through a bank of bandpass filters, each tuned to a specific frequency. The output of each filter, when sampled at a certain rate, provides information about the signal's content in that specific frequency band over time.
*   **Filter Bank Structure:** A filter bank decomposes a signal into several frequency subbands. For the STFT, these subbands are contiguous and cover the entire frequency spectrum.
*   **Relationship to STFT:**
    *   The window function $w[n]$ in the STFT can be related to the impulse response of the filters in the filter bank.
    *   The STFT is essentially applying a set of time-limited filters.
*   **Continuous-Time Analogy (from Oppenheim & Willsky):**
    Consider a continuous-time signal $x(t)$. The STFT is defined as:
    $$X_{STFT}(t, \omega) = \int_{-\infty}^{\infty} x(\tau) w(\tau - t) e^{-j\omega\tau} d\tau$$
    This can be interpreted as:
    1.  Multiplying $x(\tau)$ by a time-shifted window $w(\tau-t)$. This captures a portion of the signal around time $t$.
    2.  Taking the Fourier Transform of this windowed segment.
    Alternatively, it can be seen as:
    $$X_{STFT}(t, \omega) = e^{-j\omega t} \int_{-\infty}^{\infty} [x(\tau) w(\tau-t) e^{j\omega(\tau-t)}] e^{-j\omega(\tau-t)} d\tau$$
    Let $\nu = \tau - t$, so $\tau = \nu + t$.
    $$X_{STFT}(t, \omega) = e^{-j\omega t} \int_{-\infty}^{\infty} [x(\nu+t) w(\nu) e^{-j\omega\nu}] d\nu$$
    The integral part is the Fourier Transform of the windowed signal $x(t+\nu)w(\nu)$ with respect to $\nu$, evaluated at frequency $\omega$. This represents the frequency content of the signal at time $t$.

*   **Discrete-Time Filter Bank View:**
    Imagine a bank of filters $h_k[n]$, where each filter $h_k[n]$ is a modulated version of a prototype low-pass filter $g[n]$.
    $$h_k[n] = g[n] e^{j 2\pi k n / N}$$
    These filters are designed to be bandpass filters covering different frequency bands.
    When the signal $x[n]$ is passed through these filters, we obtain subband signals $y_k[n]$:
    $$y_k[n] = x[n] * h_k[n]$$
    The STFT can be viewed as taking the output of each of these filters and then performing a downsampling and modulation operation. Specifically, for a chosen window length $M$ and FFT size $N$, the STFT corresponds to a filter bank where:
    *   The window function $w[n]$ plays a role in shaping the frequency response of the analysis filters.
    *   The analysis filters $H_k(\Omega)$ are centered at frequencies $2\pi k / N$.
    *   The analysis process involves filtering and then downsampling.

*   **Example: STFT as a Filter Bank**
    Let's consider a simplified scenario with a window length $M$ and an FFT size $N=M$.
    The STFT for a specific time frame $n$ is:
    $$X_{STFT}(n, k) = \sum_{m=0}^{M-1} x[n+m] w[m] e^{-j 2\pi k m / M}$$
    This can be seen as:
    1.  Taking a segment of the signal: $x_{seg}[m] = x[n+m]$ for $m=0, \ldots, M-1$.
    2.  Windowing the segment: $x_{win}[m] = x_{seg}[m] w[m]$.
    3.  Computing the DFT of the windowed segment: $X_{win}[k] = \text{DFT}\{x_{win}[m]\}$.
    The STFT at time $n$ and frequency $k$ is $X_{win}[k]$.

    If we think of a filter bank with $N$ filters, each filter $h_k[m]$ is essentially a windowed complex exponential: $h_k[m] = w[m] e^{-j 2\pi k m / N}$ for $m=0, \ldots, N-1$.
    The output of the $k$-th filter when applied to the signal segment $x[n+m]$ is:
    $$y_k[n] = \sum_{m=0}^{N-1} x[n+m] h_k[m] = \sum_{m=0}^{N-1} x[n+m] w[m] e^{-j 2\pi k m / N}$$
    This is exactly the STFT $X_{STFT}(n, k)$. So, the STFT at a particular time frame is equivalent to the output of a bank of $N$ filters, where each filter is a windowed complex exponential tuned to a specific frequency.

*   **Key aspect of filter bank view for STFT:** The filters used in the STFT filter bank are time-varying (implicitly, due to the shifting window) and generally overlapping in the frequency domain. The "analysis filters" are essentially the window function modulated to different frequencies.

---

### **4. Advantages and Disadvantages of STFT**

*   **Advantages:**
    *   Simple to understand and implement.
    *   Provides a clear time-frequency representation (spectrogram).
    *   Useful for analyzing signals with relatively slowly varying frequency content.

*   **Disadvantages:**
    *   **Fixed Time-Frequency Resolution:** The window length is fixed for the entire signal, meaning the time-frequency resolution is constant. This is a significant limitation for signals with both fast and slow frequency variations.
    *   **Uncertainty Principle Limitation:** Cannot simultaneously achieve arbitrarily high time and frequency resolution.
    *   **Aliasing:** If the signal is downsampled after filtering (as in some filter bank implementations), aliasing can occur if the subband sampling rate is not chosen carefully relative to the filter bandwidth.

---

### **5. Relation to Wavelet Transform (Briefly Mentioned)**

*   **STFT vs. Wavelet Transform:** The STFT uses a fixed-size window, leading to fixed time-frequency resolution. The Wavelet Transform uses **variable-size windows** (dilation and translation of a mother wavelet). This allows for **multi-resolution analysis**:
    *   **High frequencies:** Analyzed with short time windows (good time resolution, poor frequency resolution).
    *   **Low frequencies:** Analyzed with long time windows (good frequency resolution, poor time resolution).
    This adaptive resolution is a key advantage of the Wavelet Transform over the STFT for many applications.

---

### **6. Learning Outcomes Addressed**

*   **CO1 (Classify signals/systems):** Understanding STFT is crucial for analyzing non-stationary signals, which are often encountered in practical systems. The choice of window affects the analysis of the signal's properties.
*   **CO2 (Stability/Causality):** While not directly about system stability/causality, the STFT provides a way to analyze the behavior of LTI systems over time, especially when their input or characteristics change.
*   **CO3 (Frequency Domain Analysis):** STFT is a core technique for time-frequency domain analysis, showing how frequency content changes over time.
*   **CO4 (Interpreting Transforms):** This topic focuses on interpreting the STFT as a time-frequency representation and its relation to filter banks, which is a specific application of transform analysis for LTI systems.

---

### **7. Key Concepts to Remember**

*   **Non-stationary signals:** Signals whose frequency content changes over time.
*   **Time-Frequency Analysis:** Techniques to analyze both time and frequency aspects of a signal.
*   **STFT:** A method of time-frequency analysis involving windowing and Fourier transforms of signal segments.
*   **Window Function:** Determines the portion of the signal analyzed and influences time-frequency resolution.
*   **Spectrogram:** Magnitude squared of the STFT, a visual representation of time-frequency content.
*   **Time-Frequency Resolution Trade-off:** Inherent limitation of STFT due to the fixed window size.
*   **Filter Bank Representation:** STFT can be viewed as passing the signal through a bank of modulated, windowed filters.

---

### **8. Examples and Practice Questions**

**Example:** Analyzing a chirp signal.
A chirp signal is one where the frequency increases linearly with time. Let $x[n] = \sin(an^2)$.
If we compute the STFT of this signal, we would expect to see a peak in the spectrogram moving upwards in frequency as time progresses. The sharpness of this peak (frequency resolution) would depend on the window length used.

**Practice Question 1:**
A signal $x[n]$ is analyzed using the STFT with a window of length $M$. What is the primary trade-off associated with the choice of $M$?
(a) Time resolution vs. signal-to-noise ratio.
(b) Frequency resolution vs. computational complexity.
(c) Time resolution vs. frequency resolution.
(d) Amplitude accuracy vs. phase accuracy.

**Answer 1:**
(c) Time resolution vs. frequency resolution. A shorter window improves time resolution but degrades frequency resolution, while a longer window improves frequency resolution but degrades time resolution.

**Practice Question 2:**
Describe how the STFT can be interpreted as a filter bank. What are the characteristics of the filters in this bank?

**Answer 2:**
The STFT can be interpreted as a filter bank where each analysis filter is a window function modulated by a complex exponential at a specific frequency. For a discrete signal segment of length $N$ and a window $w[m]$, the $k$-th filter's impulse response can be considered as $h_k[m] = w[m] e^{-j 2\pi k m / N}$ for $m=0, \ldots, N-1$. The STFT at time $n$ and frequency bin $k$ is the output of the $k$-th filter applied to the signal segment starting at time $n$. The filters are bandpass in nature and are centered at different frequencies, with their bandwidth and center frequency determined by the window and the modulation.

**Practice Question 3:**
Consider a signal $x[n]$ that is perfectly stationary with a single frequency component. Would the STFT still be useful for analyzing this signal? If so, how? If not, why?

**Answer 3:**
While the STFT is primarily designed for non-stationary signals, it can still be used for stationary signals. For a perfectly stationary signal with a single frequency component, the STFT (with a sufficiently long window to achieve good frequency resolution) would show a single peak at that specific frequency across all time frames. The advantage of the STFT in this case would be minimal compared to a standard DFT, but it wouldn't be detrimental. However, if the signal's frequency component is very narrow, a longer window is needed, which sacrifices time resolution, which is not an issue for a stationary signal. The true power of STFT lies in observing how the frequency content changes over time.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **9. References and Further Reading**

*   **Oppenheim & Willsky, Signals and Systems (2/e, 2015):** Chapter 11 on "Time-Frequency Representation" provides foundational concepts for time-varying signals and introduces the STFT. Chapter 12 might touch upon filter banks in the context of multirate signal processing.
*   **Haykin, Signals and Systems (2/e, 2021):** Similar to Oppenheim, Haykin's text likely covers time-frequency analysis and the STFT in its later chapters.
*   **Lathi, Principles of Signal Processing & Linear Systems (2/e, 2009):** Lathi's book is strong on LTI systems and transforms, and would likely present STFT as a method for analyzing time-varying signals within this framework.
*   **Ziemer, Signals & Systems - Continuous and Discrete (4/e, 2013):** Ziemer's comprehensive approach would offer detailed explanations of the STFT and its implementation.

---