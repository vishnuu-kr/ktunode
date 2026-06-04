---
title: "Time-frequency diagrams for the STFT and the wavelet transform"
subject: "ADVANCED DIGITAL SIGNAL PROCESSING"
module: "Module 2: Wavelet transform:"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff276"
status: "completed"
scrapedAt: "2026-05-23T18:04:12.297Z"
---
# Advanced Digital Signal Processing

## Module 2: Wavelet Transform

### Topic: Time-Frequency Diagrams for the STFT and the Wavelet Transform

---

### 1. Introduction to Time-Frequency Analysis

**Problem:** Traditional Fourier Transform provides excellent frequency resolution but no time localization, and vice versa for the time domain. This makes it difficult to analyze non-stationary signals where frequency content changes over time.

**Solution:** Time-frequency analysis techniques aim to represent a signal in both time and frequency domains simultaneously, providing insights into how the signal's frequency content evolves over time.

**Key Concepts:**
*   **Non-stationary signals:** Signals whose statistical properties (like mean or variance) change over time. Examples include speech, music, seismic data, and biological signals.
*   **Time-frequency representation (TFR):** A function that maps a signal to a 2D plane (time vs. frequency), showing the signal's energy distribution across different time intervals and frequencies.

---

### 2. Short-Time Fourier Transform (STFT)

**Concept:** The STFT is a foundational time-frequency analysis technique. It works by segmenting the signal into short, overlapping frames and applying the Fourier Transform to each frame.

**How it works:**
1.  **Windowing:** A finite-length window function $w(t)$ (e.g., rectangular, Hamming, Hanning) is applied to the signal $x(t)$ to isolate a segment.
2.  **Shifting:** The window is shifted along the time axis by a certain step size (hop size).
3.  **Fourier Transform:** The Fourier Transform is computed for each windowed segment.

**Mathematical Definition (Continuous-Time):**
The STFT of a signal $x(t)$ with respect to a window function $w(t)$ is defined as:

$X_{STFT}(\tau, \omega) = \int_{-\infty}^{\infty} x(t) w(t - \tau) e^{-j\omega(t-\tau)} dt$

where:
*   $\tau$ is the time-shift parameter (center of the window).
*   $\omega$ is the angular frequency.
*   $w(t - \tau)$ is the window function centered at time $\tau$.

**Key Properties and Trade-offs:**
*   **Constant Resolution:** The STFT provides a fixed time-frequency resolution across the entire time-frequency plane. This is determined by the length of the window function.
*   **Uncertainty Principle:** Just like the Fourier Transform, the STFT is subject to the time-frequency uncertainty principle. There's a trade-off between time resolution and frequency resolution.
    *   **Short Window:** Good time resolution, poor frequency resolution.
    *   **Long Window:** Poor time resolution, good frequency resolution.
*   **Limitations:** The fixed resolution makes it suboptimal for signals with components that have very different time-frequency characteristics.

**Time-Frequency Diagram for STFT:**
The STFT is typically visualized as a **spectrogram**.
*   **Axes:** Time ($\tau$) on the x-axis, Frequency ($\omega$ or $f$) on the y-axis.
*   **Color/Intensity:** Represents the magnitude (or energy) of the STFT coefficients $|X_{STFT}(\tau, \omega)|$. Brighter colors or higher intensity indicate more energy at that specific time and frequency.

**Example (Conceptual):**
Consider a signal that starts with a low-frequency tone and then switches to a high-frequency tone.
*   With a **short window**, you'd see a clear transition in time, but the frequencies might appear smeared.
*   With a **long window**, you'd see sharp frequency components, but the exact time of the switch might be blurred.

**References:**
*   Oppenheim & Willsky (2/e, 2015): Chapter 10 discusses the Fourier Transform and its applications, providing the foundation for understanding time-frequency analysis.
*   Haykin (2/e, 2021): Likely covers STFT in chapters related to spectral analysis or time-frequency methods.

---

### 3. Wavelet Transform (WT)

**Concept:** The Wavelet Transform uses a set of basis functions called wavelets, which are localized in both time and frequency. Unlike the STFT's fixed window, the WT uses a "window" (the wavelet) that can be stretched or compressed, allowing for multi-resolution analysis.

**Key Concepts:**
*   **Wavelet:** A small wave-like oscillation with an amplitude that is restricted to a finite duration. It has zero average value.
*   **Mother Wavelet ($\psi(t)$):** The basic wavelet function from which all other wavelets are derived.
*   **Daughter Wavelets:** Obtained by scaling (dilating/compressing) and shifting the mother wavelet:
    $\psi_{a,b}(t) = \frac{1}{\sqrt{|a|}} \psi\left(\frac{t-b}{a}\right)$
    *   $a$: Scaling parameter (dilation/compression). Controls the frequency.
        *   Large $a$: Stretched wavelet, low frequency, good frequency resolution, poor time resolution.
        *   Small $a$: Compressed wavelet, high frequency, poor frequency resolution, good time resolution.
    *   $b$: Translation parameter (shifting). Controls the time localization.

**Mathematical Definition (Continuous Wavelet Transform - CWT):**
The CWT of a signal $x(t)$ with respect to a mother wavelet $\psi(t)$ is defined as:

$CWT(a, b) = \frac{1}{\sqrt{|a|}} \int_{-\infty}^{\infty} x(t) \psi^*\left(\frac{t-b}{a}\right) dt$

where:
*   $a$ is the scale parameter.
*   $b$ is the translation (time shift) parameter.
*   $\psi^*$ is the complex conjugate of the mother wavelet.

**Key Properties and Advantages over STFT:**
*   **Multi-Resolution Analysis:** The WT provides variable time-frequency resolution.
    *   **High Frequencies (Small $a$):** Wavelets are compressed, leading to good time resolution and poor frequency resolution. This is suitable for capturing short-duration, high-frequency events.
    *   **Low Frequencies (Large $a$):** Wavelets are stretched, leading to poor time resolution and good frequency resolution. This is suitable for analyzing long-duration, low-frequency components.
*   **Adaptability:** The WT can adapt its resolution to the signal's characteristics, making it more efficient than STFT for analyzing signals with varying frequency content.
*   **No Strict Uncertainty Principle Trade-off (in the same sense as STFT):** While there's still a trade-off related to the wavelet's properties, the WT offers flexibility in choosing the resolution at different points in the time-frequency plane.

**Limitations:**
*   **Choice of Wavelet:** The performance of the WT is highly dependent on the choice of the mother wavelet.
*   **Computational Cost:** CWT can be computationally more intensive than STFT.
*   **Reconstruction:** Reconstructing the original signal from its CWT can be complex and requires specific conditions.

**Time-Frequency Diagram for Wavelet Transform:**
The CWT is also visualized in a 2D plane, often referred to as a **scalogram** or **time-scale diagram**.
*   **Axes:** Time ($b$) on the x-axis. The y-axis can be either **scale ($a$)** or **frequency ($f$)**. If frequency is used, it's typically related to the scale by $f \approx f_c / a$, where $f_c$ is the characteristic frequency of the mother wavelet.
*   **Color/Intensity:** Represents the magnitude of the CWT coefficients $|CWT(a, b)|$.

**Example (Conceptual):**
Consider the same signal as before (low-frequency tone followed by a high-frequency tone).
*   The WT would use compressed wavelets (small $a$) when the high-frequency tone is present, providing good time localization of that event.
*   It would use stretched wavelets (large $a$) when the low-frequency tone is present, providing good frequency localization for that tone.

**References:**
*   Oppenheim & Willsky (2/e, 2015): While primarily focused on Fourier-related methods, advanced editions might touch upon wavelets. Look for sections on non-stationary signal analysis or advanced transforms.
*   Haykin (2/e, 2021): Likely has dedicated chapters on wavelet transforms and their applications.
*   Reference Books (Kumar, Lathi, Ziemer, Ambardar, Apte): These books are excellent resources for foundational signal processing and system analysis, and may include introductory sections on time-frequency analysis or specific transforms. Given the advanced nature of wavelets, you might find them more in advanced DSP texts.

---

### 4. Comparing STFT and Wavelet Transform Time-Frequency Diagrams

| Feature              | STFT Time-Frequency Diagram (Spectrogram)                                     | Wavelet Transform Time-Frequency Diagram (Scalogram/Time-Frequency Plane)                                 |
| :------------------- | :---------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| **Resolution**       | **Fixed** resolution across the entire time-frequency plane.                  | **Variable** resolution. High time resolution/low frequency resolution for high frequencies; Low time resolution/high frequency resolution for low frequencies. |
| **Windowing**        | Uses a single, fixed-length window function for all time and frequencies.   | Uses a family of scaled and translated wavelets. The "window" adapts to the frequency.                   |
| **Suitability**      | Good for stationary signals or signals with slow frequency variations.        | Excellent for non-stationary signals with transients and varying frequency content.                       |
| **Uncertainty**      | Subject to the fixed trade-off determined by the window length.               | Offers a multi-resolution trade-off, adapting resolution to the signal's characteristics.                  |
| **Axes**             | Time vs. Frequency.                                                           | Time vs. Scale (often mapped to Frequency).                                                                |
| **Visualization**    | Spectrogram (color/intensity represents magnitude).                           | Scalogram or Time-Frequency Plane (color/intensity represents magnitude).                                  |
| **Information**      | Shows energy at specific time and frequency bins.                             | Shows how different frequency components evolve over time at different resolutions.                       |

**Important Point:** The "resolution" in the wavelet transform is often discussed in terms of **scale** rather than directly as frequency. However, scale and frequency are inversely related ($f \propto 1/a$), so the time-frequency mapping is analogous to what's desired.

---

### 5. Learning Outcomes Addressed

This topic directly addresses the following:

*   **CO3: Analyze signals in frequency domain using Laplace, Fourier and z-transforms and examine the properties of transforms.**
    *   The STFT and Wavelet Transforms are extensions of the Fourier Transform for analyzing signals in the time-frequency domain. Understanding their diagrams is crucial for analyzing how frequency content changes over time.
*   **CO4: Interpret the use of various transforms to analyze continuous and discrete time LTI systems.**
    *   While not strictly LTI system analysis in the traditional sense, these transforms are vital for characterizing the behavior of LTI systems when applied to non-stationary inputs. The time-frequency diagrams help in understanding the system's response to different frequency components as they appear over time.

The topic provides practical tools (STFT and WT) for signal analysis, building upon the theoretical understanding of Fourier analysis.

---

### 6. Practice Questions and Exercises

**Question 1:**
A signal is known to contain a short, high-frequency burst followed by a long, low-frequency oscillation.
(a) If you were to analyze this signal using the STFT, what would be the trade-off in choosing a very short window versus a very long window?
(b) How would the wavelet transform, with an appropriate mother wavelet, ideally represent this signal in its time-frequency diagram? Explain the concept of multi-resolution analysis in this context.

**Answer 1:**
(a) **Short Window (STFT):**
    *   **Pro:** Excellent time resolution, allowing you to pinpoint the exact start and end of the high-frequency burst.
    *   **Con:** Poor frequency resolution. The high frequency of the burst might appear smeared across a range of frequencies, and the low-frequency oscillation might also be poorly defined in terms of its exact frequency.
**Long Window (STFT):**
    *   **Pro:** Excellent frequency resolution, clearly defining the frequencies of both the burst and the oscillation.
    *   **Con:** Poor time resolution. The exact timing of the high-frequency burst would be blurred, making it difficult to determine when it started and ended. The transition between the two components would be obscured.

(b) The wavelet transform would provide a more effective representation due to its multi-resolution capability.
    *   **High-frequency burst:** The WT would use **compressed wavelets** (small scale parameter $a$). These compressed wavelets are short in time and have a higher characteristic frequency. This would result in **good time localization**, clearly showing when the burst occurred, and **poorer frequency localization**, which is acceptable for a transient event.
    *   **Low-frequency oscillation:** The WT would use **stretched wavelets** (large scale parameter $a$). These stretched wavelets are longer in time and have a lower characteristic frequency. This would result in **poor time localization** (the oscillation's duration might appear spread out), but **good frequency localization**, accurately representing the stable low frequency.
    *   **Multi-resolution:** The WT's time-frequency diagram would dynamically adjust the resolution. It would offer high time resolution when analyzing the high-frequency burst and switch to high frequency resolution when analyzing the low-frequency oscillation, effectively capturing both characteristics without the rigid trade-off of the STFT.

---

**Question 2:**
Describe the main difference in the time-frequency resolution between the STFT and the Wavelet Transform, and explain why this difference is significant for analyzing non-stationary signals.

**Answer 2:**
The main difference lies in the **resolution trade-off**.
*   **STFT:** Provides **uniform (fixed) resolution** across the entire time-frequency plane. The choice of window length dictates a single trade-off between time and frequency resolution that applies everywhere. A short window gives good time, poor frequency resolution. A long window gives poor time, good frequency resolution.
*   **Wavelet Transform:** Offers **adaptive (multi-resolution) analysis**. It uses a family of wavelets scaled and translated.
    *   At **high frequencies** (corresponding to small scales), it uses **short, compressed wavelets**, achieving **high time resolution** and **low frequency resolution**. This is ideal for capturing transient events.
    *   At **low frequencies** (corresponding to large scales), it uses **long, stretched wavelets**, achieving **low time resolution** and **high frequency resolution**. This is ideal for analyzing slowly varying frequency components.

**Significance for Non-Stationary Signals:**
Non-stationary signals often exhibit features with vastly different time-frequency characteristics. For example, a signal might have a sharp transient event (requiring high time resolution) followed by a stable tone (requiring high frequency resolution).

The **STFT's fixed resolution** forces a compromise. If you choose a short window to capture transients well, you lose accuracy in identifying the frequencies of stable components. If you choose a long window to get accurate frequencies, you blur the timing of transients.

The **Wavelet Transform's multi-resolution capability** is highly advantageous here because it naturally adapts the resolution to the signal's local characteristics. It provides the necessary time localization for sharp events and the necessary frequency localization for sustained oscillations, offering a more accurate and detailed time-frequency representation of such complex signals.

---

### 7. Important Points to Remember

*   **Non-stationarity:** The primary motivation for time-frequency analysis.
*   **STFT:** Uses a sliding window and FFT. Spectrogram visualization. Fixed time-frequency resolution (uncertainty principle trade-off). Good for stationary or slowly varying signals.
*   **Wavelet Transform (CWT):** Uses scaled and translated wavelets (family). Scalogram/Time-Frequency visualization. **Multi-resolution analysis** – high time resolution at high frequencies, high frequency resolution at low frequencies. Excellent for signals with transients and varying frequency content.
*   **Scale vs. Frequency in WT:** Scale $a$ is inversely proportional to frequency ($f \propto 1/a$). Smaller $a$ means higher frequency and better time resolution. Larger $a$ means lower frequency and better frequency resolution.
*   **Spectrogram vs. Scalogram:** Both are 2D representations. Spectrogram shows $|X_{STFT}(\tau, f)|$. Scalogram shows $|CWT(a, b)|$ or $|CWT(f, b)|$. The key difference is the nature of the resolution.

---

This concludes the notes on Time-frequency diagrams for the STFT and the Wavelet Transform. Remember to consult your textbooks for deeper mathematical derivations and additional examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
