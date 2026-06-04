---
title: "Cepstral analysis - Pitch and Formant estimation using cepstral analysis"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 2: Mel"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca57"
status: "completed"
scrapedAt: "2026-05-20T17:26:54.965Z"
---
# SPEECH AND AUDIO PROCESSING - Module 2: Mel

## Topic: Cepstral Analysis - Pitch and Formant Estimation using Cepstral Analysis

---

### Learning Outcomes:

*   Understand the concept of the cepstrum and its applications in speech processing.
*   Explain how the cepstrum can be used for pitch estimation.
*   Explain how the cepstrum can be used for formant estimation.
*   Describe the limitations and challenges of using cepstral analysis for pitch and formant estimation.

---

### 1. Introduction to Cepstral Analysis

#### 1.1 What is the Cepstrum?

*   **Definition:** The cepstrum is the inverse Fourier transform of the logarithm of the magnitude spectrum of a signal.
*   **Etymology:** The name "cepstrum" is an anagram of "spectrum," highlighting its close relationship.
*   **Purpose:** It is used to separate the convolutional components of a signal into additive components, which can then be filtered or manipulated independently. This is particularly useful for signals that are a product of multiple sources, like speech.

#### 1.2 The Convolutional Model of Speech

*   Speech production can be modeled as a convolution of:
    *   **Source Function (Excitation Signal):** This includes the glottal pulses for voiced speech and random noise for unvoiced speech. This signal contains information about the *pitch* (fundamental frequency).
    *   **Filter Function (Vocal Tract):** This is the response of the vocal tract, nasal cavity, and mouth. It shapes the source signal and introduces *formants* (resonant frequencies).
    *   **Radiation Function:** Accounts for the effect of radiation at the lips.

*   **Mathematical Representation:** $S(z) = E(z) \cdot V(z) \cdot R(z)$
    where:
    *   $S(z)$: Z-transform of the speech signal
    *   $E(z)$: Z-transform of the excitation signal (source)
    *   $V(z)$: Z-transform of the vocal tract filter
    *   $R(z)$: Z-transform of the radiation function

*   **In the time domain:** $s(n) = e(n) * v(n) * r(n)$ (convolution)

#### 1.3 Why Cepstral Analysis? The Log-Spectrum

*   **Problem:** Convolution in the time domain is multiplication in the Z-domain or frequency domain. This makes it difficult to separate the source and filter components.
*   **Solution:** Taking the logarithm of the magnitude spectrum converts multiplication into addition.
    *   $|S(\omega)| = |E(\omega)| \cdot |V(\omega)| \cdot |R(\omega)|$
    *   $\log(|S(\omega)|) = \log(|E(\omega)|) + \log(|V(\omega)|) + \log(|R(\omega)|)$

*   **Key Insight:** This additive property in the log-spectrum is what makes cepstral analysis powerful. The source and filter components, which are convolved in time, become additive in the log-spectrum.

#### 1.4 Calculating the Cepstrum

1.  **Compute the Fourier Transform (FT) of the speech signal:** $S(\omega)$
2.  **Take the magnitude of the FT:** $|S(\omega)|$
3.  **Take the logarithm of the magnitude:** $\log(|S(\omega)|)$
4.  **Compute the Inverse Fourier Transform (IFT) of the log-magnitude:**
    *   $\text{Ce}\hat{p}(n) = \text{IFT}\{\log(|S(\omega)|)\}$

*   **The Cepstral Domain (Quefrencies):** The domain of the cepstrum is called the *quefrency* domain, with units of time.
*   **Separation:** The cepstrum effectively separates the contribution of the source (pitch) and the vocal tract (formants) into different regions of the quefrency domain.

---

### 2. Cepstral Analysis for Pitch Estimation

#### 2.1 The Source Signal and Pitch

*   For voiced speech, the excitation signal is approximately periodic. This periodicity is characterized by the *pitch period* ($T_p$) and the *pitch frequency* ($F_p = 1/T_p$).
*   The Fourier transform of a periodic signal has a fundamental frequency component and its harmonics. The magnitude spectrum will exhibit a characteristic "picket fence" pattern at these harmonic frequencies.

#### 2.2 Cepstral Representation of Pitch

*   **The Convolutional Model Revisited:**
    *   The vocal tract filter ($V(z)$) is relatively slow-varying compared to the excitation signal for voiced speech.
    *   The excitation signal ($E(z)$) is periodic.
*   **In the Log-Spectrum:** $\log(|S(\omega)|) = \log(|E(\omega)|) + \log(|V(\omega)|)$
    *   $\log(|E(\omega)|)$ will have peaks at the harmonic frequencies, reflecting the periodicity. These peaks are spaced at intervals corresponding to the pitch frequency.
    *   $\log(|V(\omega)|)$ will be relatively smooth and will exhibit peaks at the formant frequencies.

*   **Cepstral Transformation:** The IFT of the log-spectrum ($\text{Ce}\hat{p}(n)$) separates these additive components based on their "rate of change" in the frequency domain.
    *   **Short-time components (rapid oscillations in the log-spectrum):** These correspond to the periodic excitation signal (pitch) and appear at *low quefrencies* (short times).
    *   **Long-time components (slow variations in the log-spectrum):** These correspond to the vocal tract filter (formants) and appear at *high quefrencies* (long times).

#### 2.3 Pitch Estimation using the Cepstrum

1.  **Compute the Cepstrum:** Calculate $\text{Ce}\hat{p}(n)$ for a short segment of speech.
2.  **Identify the Pitch Pulse:** The periodic nature of the excitation signal (glottal pulses) manifests as a prominent peak at a quefrency corresponding to the pitch period ($T_p$).
3.  **Locate the Peak:** The peak at $n = T_p$ in the cepstrum is a strong indicator of the pitch period.
4.  **Calculate Pitch Frequency:** $F_p = 1 / T_p$.

*   **Example:** If a speech segment has a pitch period of 5 ms, the cepstrum will show a significant peak at $n=5$ ms. The pitch frequency would then be $1/0.05s = 200$ Hz.

#### 2.4 Liftering for Pitch Extraction

*   **Liftering:** This is the process of filtering in the cepstral domain. It involves selecting a specific range of quefrencies and setting the rest to zero, followed by an inverse cepstral transformation.
*   **Pitch Liftering:** To isolate the pitch information, a "low-pass lifter" is applied. This means keeping the lower quefrencies (where the pitch information resides) and setting higher quefrencies to zero.
*   **Process:**
    1.  Compute $\text{Ce}\hat{p}(n)$.
    2.  Apply a low-pass lifter: $\text{Liftered\_Cep}\hat{p}(n) = \text{Ce}\hat{p}(n)$ for $0 \le n \le Q_{max}$, and 0 otherwise.
    3.  Compute the inverse cepstrum of the liftered cepstrum: $\text{Recovered\_Source}(n) = \text{IFT}\{\exp(\text{FT}\{\text{Liftered\_Cep}\hat{p}(n)\})\}$.
*   This recovered source signal should exhibit clear periodic pulses, allowing for more robust pitch period detection.

#### 2.5 Important Considerations for Pitch Estimation

*   **Voiced vs. Unvoiced:** Cepstral analysis is primarily effective for *voiced* speech. For unvoiced speech, the excitation is noise, and there's no clear periodicity to detect.
*   **Windowing:** Speech is not stationary. Short-time analysis using windowing (e.g., Hamming window) is crucial to apply cepstral analysis to segments where the speech is approximately stationary.
*   **Ringing:** The logarithm operation and the subsequent IFT can lead to "ringing" in the cepstrum, which can sometimes obscure the pitch pulse.
*   **Pitch Period vs. Vocal Tract:** The pitch period information appears at lower quefrencies, while the vocal tract information appears at higher quefrencies. This separation is key.

---

### 3. Cepstral Analysis for Formant Estimation

#### 3.1 The Vocal Tract Filter and Formants

*   The vocal tract acts as a resonant system, amplifying certain frequencies. These resonant frequencies are called *formants*.
*   Formants are crucial for distinguishing different vowels and are related to the shape of the vocal tract.
*   The vocal tract filter's response is generally much slower-varying in frequency compared to the excitation signal's harmonics.

#### 3.2 Cepstral Representation of Formants

*   **In the Log-Spectrum:** $\log(|S(\omega)|) = \log(|E(\omega)|) + \log(|V(\omega)|)$
    *   $\log(|V(\omega)|)$ will show peaks at the formant frequencies.
*   **Cepstral Transformation:** As discussed, the additive components are separated by their rate of change in the frequency domain.
    *   The relatively smooth peaks of the vocal tract filter (formants) appear at *higher quefrencies* (longer times) in the cepstrum.

#### 3.3 Formant Estimation using the Cepstrum

1.  **Compute the Cepstrum:** Calculate $\text{Ce}\hat{p}(n)$ for a segment of voiced speech.
2.  **Isolate Formant Information:** Apply a "high-pass lifter" to the cepstrum. This involves setting the lower quefrencies (containing pitch information) to zero and keeping the higher quefrencies.
3.  **Process:**
    *   Compute $\text{Ce}\hat{p}(n)$.
    *   Apply a high-pass lifter: $\text{Liftered\_Cep}\hat{p}(n) = 0$ for $0 \le n \le Q_{min}$, and $\text{Ce}\hat{p}(n)$ otherwise.
    *   Compute the inverse cepstrum of the liftered cepstrum: $\text{Recovered\_Filter}(n) = \text{IFT}\{\exp(\text{FT}\{\text{Liftered\_Cep}\hat{p}(n)\})\}$.
4.  **Analyze the Recovered Filter's Spectrum:** Compute the Fourier Transform of the $\text{Recovered\_Filter}(n)$ (or equivalently, the FT of the zero-padded liftered cepstrum). The peaks in this spectrum correspond to the formant frequencies.

#### 3.4 Alternative Approach: Directly Analyzing the Log-Spectrum

*   While the cepstrum helps conceptually separate the components, direct analysis of the log-spectrum (after appropriate smoothing or pre-emphasis) is often more practical for formant estimation.
*   **Pre-emphasis:** A high-pass filter is often applied to the speech signal before computing the spectrum to boost higher frequencies, which tend to be weaker. This can make formant peaks more prominent.
*   **Smoothing:** The log-spectrum is often smoothed to remove the rapid oscillations due to the pitch harmonics, leaving behind the broader formant peaks.
*   **Peak Picking:** Formant frequencies are then identified by finding the peaks in the smoothed log-spectrum.

#### 3.5 Limitations and Challenges

*   **Interdependence:** While the cepstrum separates components, the separation isn't perfect. Pitch and formant information can sometimes overlap in the quefrency domain.
*   **Unvoiced Speech:** Formants are still present in unvoiced speech (shaped by the vocal tract), but the lack of a periodic source means the cepstral separation of pitch is not applicable. Formant estimation for unvoiced speech typically relies on analyzing the spectrum of the noise excitation.
*   **Non-Linearities:** The speech production system and the signal processing steps (logarithm, IFT) can introduce non-linearities that affect the accuracy of estimation.
*   **Windowing Effects:** The choice of window length and type can impact the accuracy of both pitch and formant estimation. Too short a window can distort the vocal tract response, while too long a window can violate the stationarity assumption.
*   **Liftering Range:** Determining the optimal quefrency range for liftering (the cutoff points $Q_{min}$ and $Q_{max}$) is crucial and can be challenging.

---

### 4. Key Concepts and Definitions Summary

*   **Cepstrum:** Inverse Fourier Transform of the log-magnitude spectrum.
*   **Quefrency:** The domain of the cepstrum, analogous to time.
*   **Convolutional Model of Speech:** Speech signal = Excitation (pitch) * Vocal Tract (formants) * Radiation.
*   **Log-Spectrum:** Logarithm of the magnitude spectrum, which transforms convolution into addition.
*   **Liftering:** Filtering in the cepstral domain.
    *   **Low-pass liftering:** Used to extract pitch (low quefrencies).
    *   **High-pass liftering:** Used to extract vocal tract information (high quefrencies).
*   **Pitch:** Fundamental frequency of voiced speech, related to the periodicity of the glottal source.
*   **Formants:** Resonant frequencies of the vocal tract, shaping the spectral envelope.
*   **Pre-emphasis:** High-pass filtering to boost high frequencies before spectral analysis.

---

### 5. Practice Questions and Exercises

**Question 1:**
Explain why taking the logarithm of the magnitude spectrum is a crucial step in cepstral analysis for speech processing.

**Answer:**
Taking the logarithm transforms the multiplicative components in the magnitude spectrum (representing the convolutional nature of speech: source * filter) into additive components ($\log(\text{source}) + \log(\text{filter})$). This additive property allows for the separation of the source (pitch) and filter (formant) contributions in the cepstrum.

---

**Question 2:**
Where in the cepstrum would you expect to find information related to the pitch of voiced speech? Explain your reasoning.

**Answer:**
Information related to the pitch of voiced speech is found at **low quefrencies**. This is because the pitch is a periodic component of the excitation signal. Periodic signals have rapidly oscillating components in their Fourier transform (harmonics spaced closely). When the logarithm of the magnitude spectrum is computed and then inverse Fourier transformed, these rapid oscillations in the spectrum become contributions at short times (low quefrencies) in the cepstrum.

---

**Question 3:**
Describe the process of pitch estimation using cepstral analysis.

**Answer:**
1.  Compute the short-time Fourier transform (STFT) of a segment of voiced speech.
2.  Take the magnitude and then the logarithm of the magnitude spectrum.
3.  Compute the inverse Fourier transform of the log-magnitude spectrum to obtain the cepstrum.
4.  The cepstrum will exhibit a prominent peak at a quefrency corresponding to the pitch period ($T_p$).
5.  Locate this peak to determine $T_p$.
6.  Calculate the pitch frequency as $F_p = 1/T_p$.
7.  Optionally, use low-pass liftering to enhance the pitch component before finding the peak.

---

**Question 4:**
How does cepstral analysis help in formant estimation, and what are the limitations of this approach?

**Answer:**
Cepstral analysis helps in formant estimation by separating the vocal tract's resonant frequencies (formants), which are slowly varying components in the log-spectrum, into higher quefrencies in the cepstrum.
**Process:**
1.  Compute the cepstrum of the speech segment.
2.  Apply high-pass liftering to isolate the higher quefrencies containing vocal tract information.
3.  Take the Fourier transform of the liftered cepstrum (or the recovered filter's spectrum).
4.  The peaks in this resulting spectrum correspond to the formant frequencies.

**Limitations:**
*   **Imperfect Separation:** Pitch and formant information can overlap in the cepstrum.
*   **Unvoiced Speech:** Not directly applicable for pitch estimation in unvoiced speech.
*   **Windowing:** The choice of window size and type significantly impacts accuracy.
*   **Liftering Range:** Determining the correct quefrency range for liftering is crucial and can be difficult.
*   **Non-linearities:** Processing steps can introduce inaccuracies.

---

### 6. Important Points to Remember

*   The cepstrum is the **IFT of the log-magnitude spectrum**.
*   It converts **convolution into addition**.
*   **Pitch information (source)** is found at **low quefrencies**.
*   **Formant information (vocal tract)** is found at **high quefrencies**.
*   **Liftering** is the process of **filtering in the cepstral domain**.
*   Cepstral analysis is most effective for **voiced speech**.
*   **Windowing** is essential for applying this technique to non-stationary speech signals.
*   Direct analysis of the **log-spectrum** is often used for formant estimation in practice, sometimes preceded by **pre-emphasis**.
