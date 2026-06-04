---
title: "Pitch and Formant Estimation."
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 2: Short"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff452"
status: "completed"
scrapedAt: "2026-05-23T18:11:14.537Z"
---
# SPEECH AND AUDIO PROCESSING: Module 2: Short - Pitch and Formant Estimation

This module delves into two fundamental acoustic characteristics of speech: pitch and formants. Understanding these parameters is crucial for analyzing and processing speech signals, forming the basis for many speech synthesis, recognition, and modification applications.

---

## 1. Introduction to Pitch and Formants

*   **Pitch:** Perceptual correlate of the fundamental frequency ($F_0$) of the voice. It's what makes a sound perceived as "high" or "low" in terms of vocal pitch.
    *   **Key Concept:** Primarily determined by the rate of vibration of the vocal folds.
    *   **Relationship to $F_0$:** Higher $F_0$ generally leads to higher perceived pitch. However, the relationship is not strictly linear and can be influenced by other factors.
    *   **Course Outcome Alignment:** CO1 (Speech Production) - Understanding vocal fold vibration is key to speech production. CO2 (Time/Frequency Domain Analysis) - $F_0$ is a frequency domain characteristic.

*   **Formants:** Resonant frequencies of the vocal tract. These are peaks in the spectral envelope of speech sound.
    *   **Key Concept:** Determined by the shape and configuration of the vocal tract (tongue position, jaw opening, lip rounding).
    *   **Significance:** Formants are the primary acoustic cues for distinguishing different vowel sounds.
    *   **Course Outcome Alignment:** CO1 (Speech Production) - Formants directly relate to the shaping of the vocal tract. CO2 (Time/Frequency Domain Analysis) - Formants are identified in the frequency spectrum.

---

## 2. Pitch Estimation

Pitch estimation aims to determine the fundamental frequency ($F_0$) of the voiced segments of speech. Unvoiced segments do not have vocal fold vibration and thus lack a fundamental frequency.

### 2.1. Sources of Pitch

*   **Vocal Fold Vibration:** The primary source of periodicity in voiced speech. The vocal folds open and close rapidly, creating puffs of air. The rate of these puffs is the fundamental frequency.
    *   **O'Shaughnessy (Chapter 4):** Discusses the glottal source function and its role in generating voiced speech, emphasizing the quasi-periodic nature of vocal fold vibration.
    *   **Rabinar (Chapter 5):** Covers the characteristics of the glottal source and its excitation of the vocal tract.

### 2.2. Characteristics of Pitch

*   **Periodicity:** Voiced speech signals are characterized by quasi-periodic waveforms. The period of this waveform corresponds to the pitch period ($T_0 = 1/F_0$).
*   **Pitch Range:**
    *   Typical male $F_0$: 85-180 Hz
    *   Typical female $F_0$: 165-255 Hz
    *   Children's $F_0$: Higher than adults (e.g., 250-300 Hz).
    *   **Note:** These are typical ranges; significant variation exists due to age, gender, emotional state, and speaking style.
*   **Pitch Contour:** The variation of $F_0$ over time, which conveys prosodic information like intonation and emphasis.
    *   **Course Outcome Alignment:** CO1 (Speech Production) - Explains the physiological basis of pitch. CO2 (Time/Frequency Domain Analysis) - Deals with the periodicity and frequency of the signal.

### 2.3. Pitch Estimation Techniques

The core idea behind most pitch estimation algorithms is to find the period of the quasi-periodic speech signal.

#### 2.3.1. Time-Domain Methods

These methods analyze the waveform directly to find the period.

*   **Autocorrelation Function (ACF):**
    *   **Concept:** Measures the similarity of a signal with a delayed version of itself. For a periodic signal, the ACF will have peaks at multiples of the period.
    *   **Calculation:** $R_{xx}(m) = \sum_{n=-\infty}^{\infty} x(n) x(n+m)$
    *   **Pitch Estimation:** The lag ($m$) corresponding to the first significant peak (after the peak at lag 0) in the ACF is an estimate of the pitch period ($T_0$).
    *   **Challenges:**
        *   **Harmonic Distortion:** The spectral envelope can cause the ACF to have smaller peaks at multiples of $T_0$, which can be confused with the primary peak.
        *   **Voiced/Unvoiced Detection:** Need to distinguish voiced segments (where ACF will show clear peaks) from unvoiced segments (where ACF will be small).
    *   **Example:**
        Consider a short voiced segment. If its ACF shows a prominent peak at lag 100 samples, this suggests a pitch period of 100 samples. If the sampling rate is 10 kHz, then $F_0 = 10000 \text{ Hz} / 100 \text{ samples} = 100 \text{ Hz}$.
    *   **O'Shaughnessy (Chapter 7):** Discusses autocorrelation for pitch detection and its limitations.
    *   **Quatieri (Chapter 6):** Provides detailed mathematical treatment of autocorrelation for pitch estimation.

*   **Average Magnitude Difference Function (AMDF):**
    *   **Concept:** Measures the average absolute difference between the signal and a delayed version of itself. For a periodic signal, the AMDF will have its *minimum* at lags corresponding to the period.
    *   **Calculation:** $A_{xx}(m) = \frac{1}{N-m} \sum_{n=0}^{N-m-1} |x(n) - x(n+m)|$
    *   **Pitch Estimation:** The lag ($m$) at which $A_{xx}(m)$ is minimum (and non-zero) is an estimate of the pitch period ($T_0$).
    *   **Advantages:** Less sensitive to harmonic distortion than ACF because it focuses on the difference between samples.
    *   **Rabinar (Chapter 5):** Mentions AMDF as an alternative to ACF.

*   **Peak-Picking Methods:**
    *   **Concept:** Directly find the peaks in the speech waveform and measure the time difference between consecutive peaks.
    *   **Process:**
        1.  Identify local maxima in the waveform.
        2.  Select the most prominent peaks, often by thresholding or considering peak amplitudes.
        3.  Calculate the time difference between successive prominent peaks.
    *   **Challenges:** The waveform can be complex due to spectral shaping, leading to multiple small peaks that are not true pitch periods. Requires careful peak selection criteria.
    *   **O'Shaughnessy (Chapter 7):** Mentions simplified peak-picking approaches.

#### 2.3.2. Frequency-Domain Methods

These methods analyze the spectrum of the signal.

*   **Harmonic Structure in the Spectrum:** Voiced speech exhibits a harmonic structure where energy is concentrated at integer multiples of the fundamental frequency ($F_0$).
    *   **Course Outcome Alignment:** CO2 (Time/Frequency Domain Analysis) - Leverages spectral properties.

*   **Spectral Analysis Techniques:**
    *   **Fast Fourier Transform (FFT):** Can be used to obtain the spectrum of a short segment of speech.
    *   **Linear Predictive Coding (LPC):** LPC can be used to estimate the spectral envelope. Peaks in the LPC spectral envelope correspond to formant frequencies, but the underlying excitation (which determines pitch) can also be inferred.
    *   **Cepstrum:**
        *   **Concept:** The inverse Fourier Transform of the logarithm of the magnitude spectrum. It separates the excitation (glottal pulse) from the vocal tract response. The pitch period will appear as a prominent peak in the "quefrency" domain (the domain of the cepstrum).
        *   **Process:**
            1.  Compute the magnitude spectrum of the speech segment.
            2.  Take the logarithm of the magnitude spectrum.
            3.  Compute the inverse Fourier Transform of the log-magnitude spectrum (this is the cepstrum).
            4.  The peak in the cepstrum corresponding to the pitch period ($T_0$) is typically strong and distinct.
        *   **Advantages:** Robust to variations in the spectral envelope, making it good for pitch estimation.
        *   **Quatieri (Chapter 6):** Provides a detailed explanation of the cepstral method for pitch estimation.

### 2.4. Voiced/Unvoiced (V/UV) Detection

Crucial for pitch estimation, as only voiced segments have a fundamental frequency.

*   **Methods:**
    *   **Energy Thresholding:** Unvoiced sounds typically have lower energy than voiced sounds.
    *   **Zero-Crossing Rate (ZCR):** Voiced sounds (with high $F_0$) tend to have a higher ZCR than unvoiced sounds. However, fricatives (unvoiced) can have very high ZCR.
    *   **Autocorrelation-Based:** High peak in ACF at low lags indicates periodicity (voiced).
    *   **LPC-Based:** Measures related to the residual signal after LPC analysis can indicate voiced/unvoiced.

---

## 3. Formant Estimation

Formant estimation aims to identify the resonant frequencies of the vocal tract.

### 3.1. Sources of Formants

*   **Vocal Tract Resonance:** The vocal tract acts as a series of acoustic tubes that resonate at specific frequencies. These resonant frequencies are the formants.
    *   **O'Shaughnessy (Chapter 3):** Explains the concept of vocal tract resonance and how it's modeled as a series of coupled tubes.
    *   **Course Outcome Alignment:** CO1 (Speech Production) - Directly relates to the physical properties of the vocal tract.

### 3.2. Characteristics of Formants

*   **Formant Frequencies ($F_{i}$):** The specific frequencies at which resonance occurs. The first three formants ($F_1, F_2, F_3$) are the most perceptually significant.
    *   **$F_1$ (First Formant):** Primarily influenced by the height of the tongue (higher tongue = higher $F_1$).
    *   **$F_2$ (Second Formant):** Primarily influenced by the frontness/backness of the tongue and lip rounding (front tongue/rounded lips = lower $F_2$).
    *   **$F_3$ (Third Formant):** Influenced by lip rounding and tongue position.
*   **Formant Bandwidth:** The range of frequencies around a formant frequency over which the resonance is significant.
*   **Formant Amplitude:** The strength of the resonance at a particular formant frequency.

### 3.3. Formant Estimation Techniques

These methods focus on extracting the peaks of the spectral envelope.

#### 3.3.1. Linear Predictive Coding (LPC)

*   **Concept:** LPC models the vocal tract as an all-pole filter. It assumes that each speech sample can be predicted as a linear combination of previous samples. The coefficients of this prediction model can be used to estimate the spectral envelope.
*   **Process:**
    1.  **Autocorrelation Method (or Covariance Method):** Calculate the autocorrelation of the speech segment.
    2.  **Normal Equations:** Solve the Yule-Walker equations (or similar) to find the LPC coefficients ($a_i$).
    3.  **Spectral Envelope:** The magnitude of the inverse of the LPC polynomial ($1 / A(z)$, where $A(z) = 1 - \sum_{i=1}^{p} a_i z^{-i}$) provides an estimate of the spectral envelope.
    4.  **Peak Finding:** Identify the peaks in this spectral envelope. The frequencies of these peaks are the estimated formant frequencies.
*   **Number of Poles ($p$):** The order of the LPC model. A common rule of thumb is $p \approx 10$ for speech analysis (roughly 1-2 poles per expected formant).
*   **Example:**
    For the vowel /a/, the first two formants are typically around $F_1 \approx 700-800$ Hz and $F_2 \approx 1200-1500$ Hz. LPC analysis would aim to produce a spectral envelope with prominent peaks in these regions.
*   **O'Shaughnessy (Chapter 6):** Provides an in-depth treatment of LPC analysis for spectral estimation.
*   **Quatieri (Chapter 5):** Discusses LPC modeling and its application to vocal tract analysis.
*   **Rabinar (Chapter 6):** Covers the theory and application of LPC for spectral estimation and formant tracking.

#### 3.3.2. Spectral Peak Picking

*   **Concept:** Directly find the peaks in the magnitude spectrum of a speech segment.
*   **Process:**
    1.  Compute the magnitude spectrum (e.g., using FFT).
    2.  Apply smoothing or filtering if the spectrum is noisy.
    3.  Identify local maxima (peaks) in the smoothed spectrum.
    4.  Select the most significant peaks based on amplitude and frequency spacing.
*   **Challenges:**
    *   **Spectral Resolution:** The resolution of the FFT depends on the window length.
    *   **Windowing Effects:** Windowing can distort the spectrum.
    *   **Noise:** Noise can create spurious peaks.
    *   **Distinguishing Formants from Harmonics:** For voiced speech, spectral peaks may arise from harmonics of the fundamental frequency, which need to be distinguished from formants.
*   **Course Outcome Alignment:** CO2 (Time/Frequency Domain Analysis) - Directly uses spectral analysis.

#### 3.3.3. Other Methods

*   **Filter Bank Analysis:** Using a bank of bandpass filters to identify energy at different frequency bands. The bands with highest energy can indicate formant regions.
*   **LPC-derived Spectral Envelope Smoothing:** Applying techniques to smooth the LPC spectral envelope before peak picking.

### 3.4. Formant Tracking

The challenge often extends beyond identifying formants in a single frame to tracking them across consecutive frames as the vocal tract shape changes.

*   **Process:**
    1.  Estimate formants in each analysis frame.
    2.  Associate formants across frames based on continuity of frequency and bandwidth.
    3.  Use techniques like dynamic programming or Kalman filters to smooth and maintain continuity.

---

## 4. Applications of Pitch and Formant Estimation

*   **Speech Recognition:** Formant frequencies are critical for vowel identification, and pitch contour is important for prosody and speaker identification. (CO3)
*   **Speech Synthesis:** Generating natural-sounding speech requires accurate control of both pitch and formant frequencies. (CO3)
*   **Speaker Recognition/Verification:** Both pitch and formant characteristics can be used as biometric features to identify individuals. (CO3)
*   **Speech Analysis for Medical Diagnosis:** Changes in pitch and formant patterns can indicate vocal pathologies. (CO3)
*   **Prosody Analysis:** Understanding intonation, stress, and rhythm. (CO2, CO3)
*   **Speech Modification:** Changing the emotional expression of speech by altering the pitch contour or formant frequencies. (CO3)
*   **Hearing Aid Design:** Understanding the acoustic cues used by humans aids in designing better assistive listening devices. (CO4, CO5)

---

## 5. Important Points to Remember

*   **Pitch** is the perceptual correlate of **Fundamental Frequency ($F_0$)**, determined by vocal fold vibration.
*   **Formants** are the resonant frequencies of the **vocal tract**, determined by its shape.
*   **Voiced speech** is quasi-periodic and has a fundamental frequency. **Unvoiced speech** is not periodic and lacks a fundamental frequency.
*   **Autocorrelation**, **AMDF**, and **Cepstrum** are common time-domain and frequency-domain techniques for **pitch estimation**.
*   **LPC analysis** is a powerful tool for estimating the **spectral envelope** and thus identifying **formants**.
*   **Voiced/Unvoiced detection** is a necessary preprocessing step for pitch estimation.
*   Formant frequencies are key to **vowel perception**.
*   Pitch contour contributes to **prosody and intonation**.

---

## 6. Practice Questions and Exercises

**Q1. (CO1, K1) Define pitch and explain what physiological mechanism is primarily responsible for its variation.**

**Answer:** Pitch is the perceptual attribute of a sound that allows us to order it on a musical scale from low to high. It is primarily determined by the fundamental frequency ($F_0$) of the vocal folds' vibration. Variations in pitch are achieved by altering the tension and elasticity of the vocal folds, as well as the subglottal air pressure.

**Q2. (CO1, K1) What are formants, and what aspect of speech production determines their frequencies?**

**Answer:** Formants are the resonant frequencies of the vocal tract. Their frequencies are determined by the shape and configuration of the vocal tract, including the position of the tongue, the opening of the jaw, and the rounding of the lips.

**Q3. (CO2, K2) Explain the principle behind using the autocorrelation function (ACF) for pitch estimation.**

**Answer:** The autocorrelation function measures the similarity of a signal with itself at different time delays (lags). For a quasi-periodic signal like voiced speech, the ACF will exhibit peaks at lags corresponding to the period of the underlying vibration. The first significant peak after the peak at lag zero in the ACF is typically used to estimate the pitch period ($T_0$).

**Q4. (CO2, K2) How does Linear Predictive Coding (LPC) help in estimating formants?**

**Answer:** LPC models the vocal tract as an all-pole filter. By analyzing the speech signal, LPC coefficients are derived that characterize the vocal tract's spectral envelope. The peaks in this estimated spectral envelope correspond to the formant frequencies. By analyzing the roots of the LPC polynomial, or by plotting the inverse of the LPC polynomial's magnitude, the resonant frequencies (formants) can be identified.

**Q5. (CO3, K3) Briefly describe one application where both pitch and formant estimation are important.**

**Answer:** **Speech Synthesis:** To create natural-sounding synthetic speech, it's crucial to control both the pitch contour (to convey intonation and emotion) and the formant frequencies (to produce distinct and recognizable vowel sounds). Without accurate control over both, synthetic speech can sound robotic or unintelligible.

**Q6. (CO2, K2 - Practical)**
Imagine you have a speech segment sampled at 8 kHz. You compute its autocorrelation function and find a significant peak at a lag of 80 samples.
a) What is the estimated pitch period in samples?
b) What is the estimated fundamental frequency ($F_0$) in Hz?

**Answer:**
a) The estimated pitch period ($T_0$) is 80 samples.
b) $F_0 = \text{Sampling Rate} / T_0 = 8000 \text{ Hz} / 80 \text{ samples} = 100 \text{ Hz}$.

**Q7. (CO1, CO2, K2) Why is a Voiced/Unvoiced (V/UV) detector often used before performing pitch estimation?**

**Answer:** Pitch estimation algorithms are designed to find the fundamental frequency ($F_0$) associated with vocal fold vibration. Unvoiced sounds (like fricatives or stops) do not involve vocal fold vibration and therefore do not have a fundamental frequency. Attempting to estimate pitch on unvoiced segments would yield meaningless results. A V/UV detector identifies voiced segments, allowing pitch estimation to be applied only where it is relevant.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
