---
title: "Pitch Estimation ACF/AMDF approaches"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 2: Mel"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca56"
status: "completed"
scrapedAt: "2026-05-20T17:26:54.264Z"
---
# SPEECH AND AUDIO PROCESSING - MODULE 2: MEL

## Topic: Pitch Estimation: Autocorrelation Function (ACF) and Average Magnitude Difference Function (AMDF) Approaches

---

### Learning Outcomes:

*   **LO1: Understand the concept of pitch and its importance in speech.**
*   **LO2: Explain the principle of autocorrelation for pitch estimation.**
*   **LO3: Describe the autocorrelation function (ACF) and its properties relevant to pitch estimation.**
*   **LO4: Explain the average magnitude difference function (AMDF) for pitch estimation.**
*   **LO5: Compare and contrast the ACF and AMDF approaches for pitch estimation.**
*   **LO6: Discuss the advantages and disadvantages of ACF and AMDF methods.**
*   **LO7: Analyze the performance of ACF and AMDF methods in different speech conditions.**

---

### 1. Introduction to Pitch

**Definition:** Pitch is a perceptual attribute of sound that allows the listener to order them on a frequency-related scale, or more commonly, as to whether the sound is "higher" or "lower." In speech, pitch is primarily determined by the **fundamental frequency ($f_0$)** of vocal fold vibration.

**Importance of Pitch in Speech:**

*   **Prosody:** Pitch variation contributes significantly to intonation, rhythm, and stress, conveying emotional and grammatical information.
*   **Speaker Identification:** Individual pitch patterns can help distinguish speakers.
*   **Speech Synthesis:** Accurate pitch contour generation is crucial for natural-sounding synthetic speech.
*   **Speech Recognition:** Pitch information can aid in differentiating phonemes and understanding spoken language.
*   **Voice Quality:** Pitch is directly related to vocal fold vibration and can be indicative of voice disorders.

---

### 2. Pitch Estimation: The Core Idea

**The Challenge:** Speech signals are complex. While the periodic nature of vocal fold vibration creates a fundamental frequency ($f_0$), the waveform is often modified by filtering (vocal tract) and contains aperiodic components (unvoiced sounds). Pitch estimation aims to extract this underlying $f_0$ from the acoustic signal.

**Key Principle:** Pitch estimation relies on identifying the **periodicity** within the speech signal. Methods typically look for repeating patterns in the waveform or its derivatives.

---

### 3. Autocorrelation Function (ACF) Approach

**3.1 Principle of Autocorrelation:**

*   **Definition:** Autocorrelation measures the similarity between a signal and a time-shifted version of itself. It answers the question: "How similar is the signal to itself at different time lags?"
*   **Mathematical Formula:** For a discrete-time signal $x[n]$, the autocorrelation function $R_x(\tau)$ at lag $\tau$ is:
    $R_x(\tau) = \sum_{n=-\infty}^{\infty} x[n] x[n+\tau]$
    *   For practical implementation over a finite segment of speech $x[n]$ of length $N$, the biased estimator is often used:
        $R_x(\tau) = \sum_{n=0}^{N-1-\tau} x[n] x[n+\tau]$

**3.2 ACF and Pitch:**

*   **How it works:** In voiced speech, the waveform exhibits a quasi-periodic pattern due to vocal fold vibration. When we shift the signal by a time lag equal to the period of vibration ($T_0$), the signal will be highly similar to itself. This high similarity will manifest as a **peak** in the autocorrelation function at lag $\tau = T_0$.
*   **Finding the Peak:** The fundamental period ($T_0$) is estimated by finding the lag that yields the maximum autocorrelation value.
*   **Calculating $f_0$:** Once $T_0$ is estimated, the fundamental frequency is calculated as:
    $f_0 = \frac{1}{T_0}$

**3.3 Properties of ACF for Pitch Estimation:**

*   **Peak at $\tau=0$:** The autocorrelation function always has its maximum value at $\tau=0$ because a signal is perfectly correlated with itself when there is no shift. This is the "trivial" peak.
*   **Subsequent Peaks:** The significant peaks occur at lags corresponding to multiples of the fundamental period ($T_0, 2T_0, 3T_0, ...$).
*   **Decay of Peaks:** The amplitude of these subsequent peaks generally decreases as the lag increases due to the damping effects of the vocal tract and potential variations in vocal fold vibration.
*   **Influence of Voiced/Unvoiced:** The ACF will show clear, sustained peaks for voiced segments. For unvoiced segments, the signal is largely aperiodic, and the ACF will decay quickly with no distinct peaks (except at $\tau=0$).

**3.4 Practical Considerations for ACF:**

*   **Windowing:** Speech is analyzed in short, overlapping frames (e.g., 20-30 ms). Windowing functions (e.g., Hamming, Hanning) are applied to these frames to reduce spectral leakage and smooth the transitions between frames.
*   **Pitch Range:** The expected range of $f_0$ for adult speech is typically 80-250 Hz. This translates to periods $T_0$ of roughly 4 ms to 12.5 ms. The search for the peak in the ACF is usually restricted to this relevant lag range.
*   **Peak Picking:** Identifying the *correct* peak is crucial. The peak at $\tau=0$ is ignored. The next largest peak within the plausible pitch period range is generally considered the estimated $T_0$. However, harmonic frequencies and vocal tract filtering can create misleading peaks.

**Example:**

Consider a simplified, perfectly periodic waveform: `[1, 0.5, -0.5, -1, -0.5, 0.5, 1, 0.5, -0.5, -1, -0.5, 0.5, ...]`
The period is 6 samples.
If we calculate the ACF, we expect a large peak at lag 6, indicating the periodicity.

---

### 4. Average Magnitude Difference Function (AMDF) Approach

**4.1 Principle of AMDF:**

*   **Definition:** The AMDF measures the *average difference* between a signal and a time-shifted version of itself. It quantifies how *dissimilar* the signal is to its shifted replica.
*   **Mathematical Formula:** For a discrete-time signal $x[n]$, the AMDF $D_x(\tau)$ at lag $\tau$ is:
    $D_x(\tau) = \frac{1}{N} \sum_{n=0}^{N-1} |x[n] - x[n+\tau]|$
    *   Where $N$ is the length of the analysis window and the summation is performed over valid indices.

**4.2 AMDF and Pitch:**

*   **How it works:** For voiced speech, when the signal is shifted by a time lag equal to the period of vibration ($T_0$), the waveform will be very similar to itself. This means the difference between the original and shifted signal will be small, resulting in a **low value** or a **dip** in the AMDF at lag $\tau = T_0$.
*   **Finding the Dip:** The fundamental period ($T_0$) is estimated by finding the lag that yields the minimum AMDF value.
*   **Calculating $f_0$:** Once $T_0$ is estimated, the fundamental frequency is calculated as:
    $f_0 = \frac{1}{T_0}$

**4.3 Properties of AMDF for Pitch Estimation:**

*   **Minimum at $\tau=0$:** The AMDF always has its minimum value of 0 at $\tau=0$ because a signal is identical to itself with no shift. This is the "trivial" minimum.
*   **Subsequent Minima:** The significant minima occur at lags corresponding to multiples of the fundamental period ($T_0, 2T_0, 3T_0, ...$).
*   **Shape:** The AMDF tends to be smoother and has sharper minima compared to the ACF's peaks. This can make peak/dip picking more robust.
*   **Influence of Voiced/Unvoiced:** The AMDF will show clear, sustained minima for voiced segments. For unvoiced segments, the signal is aperiodic, and the AMDF will not exhibit distinct minima (except at $\tau=0$) and will generally be higher.

**4.4 Practical Considerations for AMDF:**

*   **Windowing:** Similar to ACF, windowing is applied to speech frames.
*   **Pitch Range:** The search for the minimum in the AMDF is also restricted to plausible pitch periods.
*   **Minimum Picking:** The lag corresponding to the smallest non-zero minimum in the AMDF is chosen as $T_0$.

**Example:**

Using the same simplified waveform `[1, 0.5, -0.5, -1, -0.5, 0.5, 1, 0.5, -0.5, -1, -0.5, 0.5, ...]`
The period is 6 samples.
If we calculate the AMDF, we expect a dip at lag 6 because the signal at lag 6 is very similar to the signal at lag 0, leading to small magnitude differences.

---

### 5. Comparison of ACF and AMDF Approaches

| Feature           | Autocorrelation Function (ACF)                               | Average Magnitude Difference Function (AMDF)                          |
| :---------------- | :----------------------------------------------------------- | :-------------------------------------------------------------------- |
| **Principle**     | Measures similarity (correlation) between signal and time-shifted signal. | Measures dissimilarity (average difference) between signal and time-shifted signal. |
| **Peak/Dip**      | **Peaks** at lags corresponding to the fundamental period ($T_0$). | **Minima (dips)** at lags corresponding to the fundamental period ($T_0$). |
| **Objective**     | Maximize the similarity.                                     | Minimize the dissimilarity.                                           |
| **Sensitivity to Harmonics** | **More sensitive.** Higher harmonics can create spurious peaks. | **Less sensitive.** The magnitude differences are averaged, potentially smoothing out harmonic effects. |
| **Robustness to Noise** | Can be affected by noise, which can distort the correlation. | Generally considered **more robust to noise** as noise contributes to magnitude differences but might not create consistent patterns across lags. |
| **Computational Cost** | Multiplication and summation.                                | Absolute difference and summation. Often considered slightly simpler. |
| **Shape of Response** | Peaks can be broad.                                          | Minima tend to be sharper.                                            |
| **Implementation** | Dot product of signal and time-shifted signal.               | Sum of absolute differences.                                          |

---

### 6. Advantages and Disadvantages

**6.1 ACF Advantages:**

*   **Well-Established:** A widely studied and understood technique.
*   **Good for Clean Speech:** Performs well on clear, voiced speech segments.
*   **Intuitive:** The concept of self-similarity is easy to grasp.

**6.1 ACF Disadvantages:**

*   **Sensitivity to Harmonics:** Harmonic frequencies can create false peaks, leading to octave errors (e.g., detecting $2f_0$ or $f_0/2$ instead of $f_0$).
*   **Sensitivity to Vocal Tract Filtering:** The shape of the vocal tract can cause energy distribution across harmonics, potentially distorting the ACF and making peak picking difficult.
*   **Vulnerable to Noise:** Noise can reduce the amplitude of true peaks and introduce spurious ones.
*   **Segmental Errors:** Can struggle with transitions between voiced and unvoiced sounds, or with glottal pulses that are not perfectly periodic.

**6.2 AMDF Advantages:**

*   **Robust to Harmonics:** Less prone to octave errors because the averaging of magnitude differences smooths out harmonic contributions.
*   **More Robust to Noise:** Generally performs better in noisy conditions as noise impacts the differences more uniformly.
*   **Sharper Minima:** The sharper dips can make dip picking more precise.
*   **Computational Efficiency:** Often slightly more computationally efficient.

**6.2 AMDF Disadvantages:**

*   **Less Sensitive to Very Low $f_0$:** For very low fundamental frequencies, the period is long, and the segment of the signal considered might be too short to capture sufficient periodic information.
*   **Still Affected by Aperiodicity:** Like ACF, it will not work for unvoiced sounds.

---

### 7. Performance Analysis in Different Speech Conditions

**7.1 Voiced Segments:**

*   **ACF:** Generally performs well, but susceptible to octave errors if harmonic structure is strong or vocal tract resonances align unfavorably.
*   **AMDF:** Typically performs better, especially when harmonic content varies or in the presence of moderate noise, due to its robustness to harmonics.

**7.2 Unvoiced Segments:**

*   **Both ACF and AMDF:** Both methods fail to detect periodicity in unvoiced sounds (e.g., 's', 'f', 'sh'). They will exhibit no significant peaks (ACF) or minima (AMDF) within the relevant lag range.
*   **Detection:** A separate voiced/unvoiced (V/UV) detector is usually employed to identify segments where pitch estimation is meaningful. This detector often uses features like energy, zero-crossing rate, or the shape of the ACF/AMDF itself (e.g., ratio of peak to maximum ACF value, or ratio of minimum to average AMDF value).

**7.3 Noisy Speech:**

*   **ACF:** Performance degrades significantly. Noise can mask true peaks and create false ones, leading to inaccurate $f_0$ estimates.
*   **AMDF:** Tends to be more robust. While noise increases the overall magnitude difference, it doesn't create the same kind of correlated structure that ACF is sensitive to. This allows the AMDF to maintain clearer minima in noisy conditions compared to the peak clarity in ACF.

**7.4 Transition Regions (Voiced-Unvoiced):**

*   Both methods can struggle in rapid transitions. The signal may not exhibit clear periodicity for a few frames before or after the actual voiced/unvoiced boundary.
*   **V/UV Detector:** Crucial for managing these regions. Often, pitch tracking algorithms will use continuity constraints to bridge short gaps or smooth estimates across transitions.

---

### Practice Questions/Exercises

1.  **Definition and Importance:**
    *   Define pitch in the context of speech. What physiological mechanism is primarily responsible for it?
    *   List three important roles pitch plays in speech communication.

2.  **ACF Understanding:**
    *   Explain how the Autocorrelation Function (ACF) is used to detect periodicity in a speech signal.
    *   What is the expected value of the ACF at lag $\tau=0$? Why?
    *   If a speech segment has a fundamental frequency of 125 Hz, what lag would you expect to see a significant peak in its ACF?

3.  **AMDF Understanding:**
    *   Describe the principle behind the Average Magnitude Difference Function (AMDF) for pitch estimation.
    *   At what lag do you expect to find a minimum in the AMDF for a voiced speech segment, and why?

4.  **Comparison:**
    *   Compare the primary outputs of ACF and AMDF when used for pitch estimation. Which output signifies the fundamental period?
    *   Which method is generally considered more robust to harmonic interference, and why?

5.  **Application and Analysis:**
    *   Imagine you are designing a pitch estimation system. Would you prefer ACF or AMDF for a noisy environment? Justify your answer.
    *   What is a common problem encountered with ACF pitch estimation that AMDF mitigates?

---

### Answers to Practice Questions

1.  **Definition and Importance:**
    *   **Definition:** Pitch is the perceived highness or lowness of a sound. In speech, it is primarily determined by the **fundamental frequency ($f_0$)**, which is the rate at which the vocal folds vibrate.
    *   **Roles:**
        *   Conveying emotion (e.g., excitement, sadness).
        *   Indicating grammatical structure (e.g., question vs. statement).
        *   Distinguishing between speakers.
        *   Providing rhythm and emphasis.

2.  **ACF Understanding:**
    *   The ACF measures the similarity of a signal with a time-shifted version of itself. For periodic signals like voiced speech, when the time shift equals the period of vibration ($T_0$), the signal will be highly similar to itself, resulting in a significant **peak** in the ACF at that lag.
    *   The ACF at lag $\tau=0$ is always the maximum value, equal to the total energy of the signal segment, because a signal is perfectly correlated with itself when there is no shift.
    *   A fundamental frequency of 125 Hz means a period $T_0 = \frac{1}{125 \text{ Hz}} = 0.008 \text{ seconds} = 8 \text{ ms}$. Therefore, you would expect a significant peak in the ACF at a lag of 8 ms (or the equivalent number of samples in the digitized signal).

3.  **AMDF Understanding:**
    *   The AMDF measures the average absolute difference between a signal and a time-shifted version of itself. For voiced speech, when the time shift equals the period of vibration ($T_0$), the signal will be very similar to itself. This similarity means the difference between the original and shifted signal will be small, leading to a **minimum (dip)** in the AMDF at that lag.
    *   You expect to find a minimum in the AMDF at a lag $\tau = T_0$ because, at this lag, the signal is most similar to its time-shifted replica, resulting in the smallest average magnitude difference.

4.  **Comparison:**
    *   **ACF:** Peaks indicate periodicity. A significant peak at lag $\tau$ suggests the fundamental period is $\tau$.
    *   **AMDF:** Minima (dips) indicate periodicity. A significant minimum at lag $\tau$ suggests the fundamental period is $\tau$.
    *   **Harmonic Interference:** The **AMDF** is generally considered more robust to harmonic interference because the averaging of magnitude differences smooths out the effects of strong harmonic components that can create spurious peaks in the ACF.

5.  **Application and Analysis:**
    *   For a noisy environment, I would prefer the **AMDF**. The AMDF is generally more robust to noise because noise introduces random fluctuations that increase the average magnitude difference, but it doesn't create the strong, correlated patterns that ACF relies on for its peaks. This robustness helps AMDF maintain clearer minima even in the presence of noise.
    *   A common problem with ACF pitch estimation is **octave errors**, where the algorithm might incorrectly identify $2f_0$ or $f_0/2$ as the fundamental frequency due to the presence of strong harmonics or specific vocal tract resonances. The AMDF is less prone to these errors.

---

### Important Points to Remember

*   **Pitch = $f_0$:** In speech processing, pitch is fundamentally linked to the fundamental frequency of vocal fold vibration.
*   **Periodicity Detection:** Both ACF and AMDF are periodicity detection techniques.
*   **ACF: Peaks, AMDF: Dips:** ACF looks for high similarity (peaks), AMDF looks for low dissimilarity (dips).
*   **Lag = Period:** The lag at which the primary peak (ACF) or minimum (AMDF) occurs corresponds to the fundamental period ($T_0$).
*   **$f_0 = 1/T_0$:** Convert the estimated period to frequency.
*   **Unvoiced Sounds:** Neither ACF nor AMDF can reliably estimate pitch for unvoiced segments. A V/UV detector is needed.
*   **AMDF Robustness:** AMDF is generally more robust to noise and harmonic interference than ACF.
*   **Octave Errors:** A significant pitfall for ACF that AMDF helps to avoid.
*   **Practical Implementation:** Always involves windowing and searching within a plausible pitch range.

---
