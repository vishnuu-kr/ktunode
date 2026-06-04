---
title: "Speech Enhancement :-   Spectral subtraction and Filtering"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 3: Speech Enhancement :"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca5b"
status: "completed"
scrapedAt: "2026-05-20T17:26:57.069Z"
---
# Speech and Audio Processing: Module 3 - Speech Enhancement

## Topic: Spectral Subtraction and Filtering

---

### Introduction

Speech enhancement aims to improve the quality and intelligibility of speech signals that have been degraded by various noise sources. This module focuses on two fundamental techniques: **Spectral Subtraction** and **Filtering**. These methods operate on the frequency domain representation of the speech signal to reduce or remove noise components.

---

### Learning Outcomes

Upon completion of this topic, you will be able to:

*   **Understand the fundamental principles of spectral subtraction for speech enhancement.**
*   **Explain the steps involved in the spectral subtraction algorithm.**
*   **Identify common parameters and their impact on spectral subtraction.**
*   **Discuss the limitations and potential artifacts of spectral subtraction.**
*   **Describe different types of filters used in speech enhancement.**
*   **Explain how filters can be applied to speech signals for noise reduction.**
*   **Compare and contrast spectral subtraction and filtering as speech enhancement techniques.**

---

### 1. Spectral Subtraction

Spectral subtraction is a classic and widely used method for speech enhancement that operates by estimating and subtracting the noise spectrum from the noisy speech spectrum.

#### 1.1. Fundamental Principles

*   **Frequency Domain Operation:** The core idea is to work with the **Short-Time Fourier Transform (STFT)** of the speech signal. The STFT decomposes the signal into a series of short, overlapping frames, and for each frame, it computes its frequency spectrum.
*   **Noise Estimation:** The assumption is that during certain periods (e.g., pauses in speech), the signal is dominated by noise. By analyzing these "non-speech" segments, we can estimate the average noise spectrum.
*   **Spectrum Subtraction:** The estimated noise spectrum is then subtracted from the magnitude spectrum of each noisy speech frame.
*   **Reconstruction:** The modified magnitude spectrum is combined with the original phase spectrum of the noisy speech, and an inverse STFT is performed to reconstruct the enhanced speech signal.

#### 1.2. Steps Involved in Spectral Subtraction

1.  **Framing and Windowing:** The noisy speech signal is divided into short, overlapping frames (e.g., 20-30 ms duration) using a window function (e.g., Hamming, Hanning) to reduce spectral leakage.
2.  **STFT Calculation:** For each frame, the Discrete Fourier Transform (DFT) is computed to obtain its complex spectrum, $Y(k, \omega) = |Y(k, \omega)|e^{j\phi_Y(k, \omega)}$, where $k$ is the frame index and $\omega$ is the frequency bin. $|Y(k, \omega)|$ is the magnitude spectrum and $\phi_Y(k, \omega)$ is the phase spectrum.
3.  **Noise Spectrum Estimation:**
    *   **Overestimation:** The noise spectrum is typically estimated during segments where speech is absent. This is often done by averaging the magnitude spectra of several initial frames assumed to be noise-only.
    *   **Smoothing:** The estimated noise spectrum is often smoothed over frequency and time to reduce variations and the introduction of artifacts.
4.  **Magnitude Spectrum Subtraction:** The estimated noise magnitude spectrum, $|\hat{N}(k, \omega)|$, is subtracted from the noisy speech magnitude spectrum, $|Y(k, \omega)|$:
    $$| \hat{X}(k, \omega) | = |Y(k, \omega)| - \alpha |\hat{N}(k, \omega)|$$
    *   **Over-Subtraction Factor ($\alpha$):** A factor $\alpha \ge 1$ is used to ensure that the estimated noise is sufficiently attenuated. A higher $\alpha$ leads to more aggressive noise reduction but can also increase speech distortion.
    *   **Gain Function:** The result of the subtraction can be negative. To avoid this, the modified magnitude spectrum is typically half-wave rectified:
        $$| \hat{X}(k, \omega) | = \max(0, |Y(k, \omega)| - \alpha |\hat{N}(k, \omega)|)$$
5.  **Phase Reconstruction:** The phase of the enhanced speech is usually taken directly from the noisy speech signal:
    $$\hat{\phi}_X(k, \omega) = \phi_Y(k, \omega)$$
    This is a simplification, as the phase of the noise might also be present in the noisy speech.
6.  **Inverse STFT (ISTFT):** The enhanced complex spectrum, $\hat{X}(k, \omega) = |\hat{X}(k, \omega)|e^{j\hat{\phi}_X(k, \omega)}$, is converted back to the time domain using the Inverse Discrete Fourier Transform (IDFT).
7.  **Overlap-Add (OLA):** The enhanced frames are then overlapped and added back together to reconstruct the continuous enhanced speech signal.

#### 1.3. Common Parameters and Their Impact

*   **Frame Size:** Affects the time-frequency resolution. Smaller frames provide better temporal resolution but poorer frequency resolution.
*   **Overlap:** Controls the degree of overlap between consecutive frames. Higher overlap (e.g., 50% or 75%) generally leads to smoother results.
*   **Noise Estimation Period:** The duration and placement of the noise-only segments are crucial for accurate noise estimation.
*   **Over-Subtraction Factor ($\alpha$):**
    *   $\alpha = 1$: Basic subtraction.
    *   $\alpha > 1$: Aggressive subtraction, more noise reduction, potential for speech distortion.
    *   $\alpha < 1$: Less aggressive, less distortion, but less noise reduction.
*   **Spectral Flooring/Minimum Gain:** To prevent complete suppression of speech components and reduce musical noise artifacts, a minimum gain or spectral flooring is often applied. This ensures that even after subtraction, a small portion of the original magnitude is retained.
    $$| \hat{X}(k, \omega) | = \max(\beta |Y(k, \omega)|, |Y(k, \omega)| - \alpha |\hat{N}(k, \omega)|)$$
    Here, $\beta$ is the spectral floor, typically a small positive value (e.g., 0.001).

#### 1.4. Limitations and Potential Artifacts

*   **Musical Noise:** This is the most prominent artifact. It arises from the subtraction process, especially when the estimated noise is inaccurate or when speech components are nearly completely suppressed. The resulting residuals in the spectrum can be perceived as tonal, "musical" sounds.
*   **Speech Distortion:** Over-subtraction can lead to distortion of the speech signal, making it sound "buzzy," "gated," or muffled.
*   **Phase Distortion:** Assuming the phase of the noisy speech is the correct phase for the enhanced speech is a simplification. Noise also has a phase component, and its removal or distortion can affect intelligibility.
*   **Estimation Errors:** If the noise estimation is inaccurate (e.g., due to non-stationary noise or speech present in the estimated noise frames), the subtraction will be suboptimal.

#### 1.5. Example Scenario

Imagine a clean speech signal mixed with a constant background hum (e.g., 60 Hz hum).

1.  **Noise Estimation:** Identify a segment of the recording with only the hum. Compute the STFT of this segment and average the magnitude spectra to get the estimated hum spectrum.
2.  **STFT of Noisy Speech:** Compute the STFT of each frame of the noisy speech.
3.  **Subtraction:** For each frame, subtract the estimated hum spectrum (scaled by $\alpha$) from the noisy speech spectrum.
4.  **Reconstruction:** Reconstruct the enhanced speech. The hum, being a consistent spectral component, will be largely attenuated.

---

### 2. Filtering

Filtering in speech enhancement involves designing filters that selectively attenuate or remove frequency components associated with noise while preserving the speech signal. This can be done in both the time domain and the frequency domain.

#### 2.1. Time-Domain Filtering

*   **Concept:** Apply a filter directly to the time-domain waveform.
*   **Types of Filters:**
    *   **Low-Pass Filters (LPF):** Remove high-frequency noise. Useful if the noise is predominantly in the high frequencies.
    *   **High-Pass Filters (HPF):** Remove low-frequency noise. Useful if the noise is predominantly in the low frequencies (e.g., rumble).
    *   **Band-Pass Filters (BPF):** Allow a specific range of frequencies to pass while attenuating others. Can be used if both low and high-frequency noise are present.
    *   **Band-Stop Filters (BSF) / Notch Filters:** Attenuate a specific narrow band of frequencies. Useful for removing tonal interference (e.g., the 60 Hz hum).
*   **Implementation:** Typically implemented using Finite Impulse Response (FIR) or Infinite Impulse Response (IIR) digital filters. The design of these filters involves selecting filter coefficients based on the desired frequency response.

#### 2.2. Frequency-Domain Filtering (using STFT)

*   **Concept:** Similar to spectral subtraction, this involves transforming the signal to the frequency domain, applying a gain function, and then transforming back. However, instead of subtraction, it's a direct multiplication with a frequency-dependent gain.
*   **Gain Function:** A gain function, $G(k, \omega)$, is applied to the magnitude spectrum of each noisy speech frame:
    $$| \hat{X}(k, \omega) | = G(k, \omega) |Y(k, \omega)|$$
*   **Types of Frequency-Domain Filters (Gain Functions):**
    *   **Ideal Low-Pass/High-Pass/Band-Pass:** These have sharp transitions in frequency, acting like ideal filters.
        *   *Example (Low-Pass Gain):*
            $$ G(k, \omega) = \begin{cases} 1 & \text{if } \omega \le \omega_c \\ 0 & \text{if } \omega > \omega_c \end{cases} $$
            where $\omega_c$ is the cutoff frequency.
    *   **Butterworth, Chebyshev, etc.:** These are approximations of ideal filters with smoother transitions, reducing ringing artifacts.
    *   **Wiener Filtering:** A statistically optimal filter that minimizes the mean squared error between the original speech and the enhanced speech. It requires estimates of the power spectral densities of both the speech and the noise.
        $$G_{Wiener}(k, \omega) = \frac{P_X(k, \omega)}{P_X(k, \omega) + P_N(k, \omega)}$$
        where $P_X(k, \omega)$ is the estimated speech power spectrum and $P_N(k, \omega)$ is the estimated noise power spectrum. In practice, it's often implemented with a spectral floor:
        $$G_{Wiener}(k, \omega) = \frac{P_X(k, \omega)}{P_X(k, \omega) + P_N(k, \omega)} + \epsilon$$
        or
        $$G_{Wiener}(k, \omega) = \frac{|Y(k, \omega)|^2 - P_N(k, \omega)}{|Y(k, \omega)|^2}$$
        The gain is capped between a minimum and maximum value.

#### 2.3. Application of Filters

*   **Bandwidth Extension:** If the clean speech is known to be within a certain frequency range (e.g., for male speech, the fundamental frequency is relatively low), a band-pass filter can be used to remove out-of-band noise.
*   **Noise Suppression:** Filters can be designed to specifically target the frequency characteristics of the noise. For example, if the noise is known to be high-frequency hiss, a low-pass filter can be applied. If it's a specific hum, a notch filter can be used.

#### 2.4. Comparison of Spectral Subtraction and Filtering

| Feature             | Spectral Subtraction                                     | Filtering (Frequency-Domain Gain)                      |
| :------------------ | :------------------------------------------------------- | :----------------------------------------------------- |
| **Core Mechanism**  | Subtracts estimated noise spectrum from speech spectrum. | Multiplies speech spectrum by a frequency-dependent gain. |
| **Noise Reduction** | Can be very effective for stationary noise.              | Effective for various noise types depending on gain design. |
| **Artifacts**       | Prone to musical noise and speech distortion.            | Can cause speech distortion, spectral flattening if gain is poorly designed. |
| **Flexibility**     | Adaptable to changing noise levels.                      | Gain design can be fixed or adaptive.                  |
| **Complexity**      | Moderately complex due to STFT, phase handling.          | Complexity depends on the gain function (e.g., Wiener filter is more complex). |
| **Phase**           | Typically preserves the noisy speech phase.              | Can preserve noisy speech phase or modify it depending on implementation. |

---

### Practice Questions and Answers

**Question 1:** What is the primary goal of spectral subtraction in speech enhancement?

**Answer:** The primary goal is to reduce or remove noise from a speech signal by estimating the noise spectrum and subtracting it from the noisy speech spectrum in the frequency domain.

**Question 2:** What is "musical noise" and why does it occur in spectral subtraction?

**Answer:** Musical noise is an artifact characterized by tonal, "musical" sounds that can emerge during speech enhancement. It occurs due to the subtraction process, particularly when the estimated noise is inaccurate, or when speech components are almost entirely suppressed, leaving behind random residuals in the spectrum that are then amplified by the phase information.

**Question 3:** Explain the role of the over-subtraction factor ($\alpha$) in spectral subtraction.

**Answer:** The over-subtraction factor ($\alpha$) is a multiplier applied to the estimated noise spectrum before subtraction. An $\alpha > 1$ ensures that the estimated noise is attenuated more aggressively, leading to better noise reduction. However, a higher $\alpha$ can also increase the risk of distorting the speech signal.

**Question 4:** Describe a scenario where a high-pass filter would be useful for speech enhancement.

**Answer:** A high-pass filter would be useful if the speech signal is contaminated with low-frequency noise, such as rumble or electrical hum. By attenuating these low frequencies, the filter can improve the clarity of the speech.

**Question 5:** Compare the main difference between spectral subtraction and a simple low-pass frequency-domain filtering approach.

**Answer:** Spectral subtraction directly subtracts an estimated noise spectrum. Simple low-pass frequency-domain filtering involves multiplying the noisy speech spectrum by a gain function that allows low frequencies to pass while attenuating high frequencies. Spectral subtraction aims to remove *all* frequencies identified as noise, while low-pass filtering specifically targets high-frequency noise.

---

### Important Points to Remember

*   **Frequency Domain is Key:** Both spectral subtraction and frequency-domain filtering rely on the STFT to analyze and modify the signal's spectral content.
*   **Noise Estimation is Crucial:** The accuracy of the noise estimation significantly impacts the performance of spectral subtraction.
*   **Trade-off between Noise Reduction and Distortion:** Aggressive noise reduction techniques often lead to increased speech distortion.
*   **Artifacts are Common:** Spectral subtraction is prone to musical noise, while filtering can cause spectral distortion or unnatural-sounding speech if not designed carefully.
*   **Phase Information Matters:** While magnitude is often the focus, phase plays a vital role in the perceived quality of the enhanced speech.
*   **Wiener Filtering:** Represents a more statistically grounded approach to frequency-domain filtering, aiming to minimize mean squared error.
*   **Time-domain filters** are simpler to implement but may not be as effective for complex or non-stationary noise as spectral methods.

---
