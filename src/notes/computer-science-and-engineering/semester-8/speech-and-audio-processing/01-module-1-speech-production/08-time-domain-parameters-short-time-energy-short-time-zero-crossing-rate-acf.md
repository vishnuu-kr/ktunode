---
title: "Time domain parameters (Short time energy, short time zero crossing Rate, ACF)"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 1: Speech Production :"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca51"
status: "completed"
scrapedAt: "2026-05-20T17:26:51.473Z"
---
# SPEECH AND AUDIO PROCESSING - Module 1: Speech Production

## Topic: Time Domain Parameters

This module introduces the fundamental time-domain characteristics of speech signals, providing insights into their acoustic properties and how they relate to speech production. We will explore three key parameters: Short-Time Energy, Short-Time Zero Crossing Rate, and Autocorrelation Function (ACF).

### 1. Short-Time Energy

#### Learning Outcomes Covered:
*   Understand the concept of energy in a speech signal.
*   Define and calculate Short-Time Energy.
*   Explain the significance of Short-Time Energy in speech analysis.
*   Identify the relationship between Short-Time Energy and speech events (voiced/unvoiced segments).

#### Key Concepts and Definitions:

*   **Energy:** In signal processing, energy refers to the total power integrated over a specific duration. For a discrete-time signal $s[n]$, the energy over a segment from $n=N_1$ to $n=N_2$ is given by:
    $E = \sum_{n=N_1}^{N_2} |s[n]|^2$

*   **Speech Signal Properties:** Speech signals are inherently non-stationary, meaning their statistical properties change over time. This necessitates analyzing the signal in small, overlapping frames.

*   **Short-Time Energy (STE):** The STE is the energy of the speech signal calculated within a short, moving window. It helps us understand the intensity or loudness of the speech signal in different segments.

#### Calculation of Short-Time Energy:

1.  **Windowing:** The speech signal is divided into short, overlapping frames (e.g., 20-30 ms duration with 10 ms overlap). A window function (e.g., Hamming, Hanning) is applied to each frame to reduce spectral leakage and discontinuity. Let $s[n]$ be the speech signal and $w[m]$ be the window function of length $M$. The windowed frame $s_w[m]$ is:
    $s_w[m] = s[m] \cdot w[m]$ for $m = 0, 1, ..., M-1$

2.  **Energy Calculation:** The energy for the $k$-th frame (centered at sample $n_0$) is calculated as:
    $E_k = \sum_{m=-(M-1)/2}^{(M-1)/2} |s[n_0 + m] \cdot w[m]|^2$
    Often, for simplicity and efficiency, the window function can be a rectangular window (i.e., $w[m]=1$ for all $m$ within the frame). In this case, the STE is:
    $E_k = \sum_{n=0}^{M-1} |s[n]|^2$ (where $s[n]$ represents the samples within the $k$-th frame).

#### Significance of Short-Time Energy:

*   **Voiced vs. Unvoiced Detection:** Voiced sounds (like vowels, voiced consonants) are produced with vocal fold vibration, resulting in higher energy and more periodic excitation. Unvoiced sounds (like fricatives, voiceless consonants) are produced by turbulent airflow, resulting in lower energy and aperiodic excitation. STE can effectively distinguish between these segments.
*   **Speech Activity Detection (SAD):** STE can be used to identify segments of the speech signal that contain actual speech versus silence or background noise. A threshold is applied to the STE; segments above the threshold are considered speech.
*   **Prosody Analysis:** Changes in STE over time contribute to the perception of intonation and emphasis.

#### Example:

Consider a short segment of a speech signal: `[0.1, 0.5, 0.8, 0.6, 0.2]`
Let's calculate the STE using a simple rectangular window of length 5.

$E = (0.1)^2 + (0.5)^2 + (0.8)^2 + (0.6)^2 + (0.2)^2$
$E = 0.01 + 0.25 + 0.64 + 0.36 + 0.04$
$E = 1.30$

This value represents the energy of this specific 5-sample segment. In practice, this calculation would be performed on successive, overlapping frames of the speech signal.

#### Important Points to Remember:

*   STE is a measure of the signal's **amplitude squared** over a short duration.
*   Higher STE generally corresponds to **louder** speech sounds.
*   STE is a primary feature for **speech/non-speech discrimination** and **voiced/unvoiced classification**.
*   The choice of window size and overlap affects the resolution of the STE contour.

---

### 2. Short-Time Zero Crossing Rate (ZCR)

#### Learning Outcomes Covered:
*   Understand the concept of zero crossings in a signal.
*   Define and calculate Short-Time Zero Crossing Rate.
*   Explain the significance of Short-Time ZCR in speech analysis.
*   Identify the relationship between Short-Time ZCR and speech events (voiced/unvoiced segments, manner of articulation).

#### Key Concepts and Definitions:

*   **Zero Crossing:** A zero crossing occurs when a signal's value changes sign, i.e., it crosses the zero amplitude axis. For a discrete-time signal $s[n]$, a zero crossing occurs at sample $n$ if $s[n] \cdot s[n-1] < 0$.

*   **Short-Time Zero Crossing Rate (ZCR):** The ZCR is the number of times the speech signal crosses the zero amplitude axis within a short, moving window, typically normalized by the window length. It is a measure of the **frequency content** of the signal.

#### Calculation of Short-Time Zero Crossing Rate:

1.  **Windowing:** Similar to STE, the speech signal is divided into short, overlapping frames.
2.  **Counting Zero Crossings:** For each frame, count the number of times the signal changes sign. Let $Z_k$ be the number of zero crossings in the $k$-th frame.
    $Z_k = \sum_{n=0}^{M-1} \mathbb{I}(s[n] \cdot s[n-1] < 0)$
    where $\mathbb{I}(\cdot)$ is the indicator function (1 if the condition is true, 0 otherwise). Note that $s[-1]$ is typically considered 0 or the signal starts from $n=0$.

3.  **Normalization:** The ZCR is often normalized by the frame length $M$ or by the number of samples in the frame that are not zero.
    $ZCR_k = \frac{1}{M} \sum_{n=0}^{M-1} \mathbb{I}(s[n] \cdot s[n-1] < 0)$

#### Significance of Short-Time Zero Crossing Rate:

*   **Voiced vs. Unvoiced Detection:**
    *   **Voiced sounds** are characterized by relatively low fundamental frequencies and harmonic structures, leading to fewer zero crossings per unit time.
    *   **Unvoiced sounds** are often noisy and aperiodic, with a wider range of frequencies, resulting in more rapid fluctuations and a higher ZCR.
*   **Manner of Articulation:**
    *   **Fricatives** (e.g., /s/, /f/) have high-frequency energy and are typically associated with high ZCR.
    *   **Plosives** (e.g., /p/, /t/) can have a sudden burst of high-frequency energy, potentially leading to a transient increase in ZCR.
    *   **Vowels** have low fundamental frequencies and resonant peaks, resulting in low ZCR.
*   **Voicing Detection:** Combined with STE, ZCR is a robust feature for differentiating between voiced and unvoiced segments. Voiced segments typically have low STE and low ZCR, while unvoiced segments have high STE and high ZCR (or low STE and high ZCR for fricatives).

#### Example:

Consider a short segment of a speech signal: `[0.1, -0.2, 0.3, -0.4, 0.5]`
Let's calculate the ZCR for this 5-sample segment.

*   Sample 1 (0.1) and Sample 2 (-0.2): $0.1 \cdot (-0.2) < 0$ (Zero crossing 1)
*   Sample 2 (-0.2) and Sample 3 (0.3): $(-0.2) \cdot 0.3 < 0$ (Zero crossing 2)
*   Sample 3 (0.3) and Sample 4 (-0.4): $0.3 \cdot (-0.4) < 0$ (Zero crossing 3)
*   Sample 4 (-0.4) and Sample 5 (0.5): $(-0.4) \cdot 0.5 < 0$ (Zero crossing 4)

Total zero crossings = 4.
If the frame length is $M=5$, then $ZCR = \frac{4}{5} = 0.8$.

#### Important Points to Remember:

*   ZCR is sensitive to the **frequency content** of the signal.
*   Higher ZCR generally indicates **higher frequency components** or more rapid oscillations.
*   ZCR is a crucial feature for distinguishing between **voiced and unvoiced speech sounds**.
*   Unvoiced sounds tend to have a **higher ZCR** than voiced sounds.

---

### 3. Autocorrelation Function (ACF)

#### Learning Outcomes Covered:
*   Understand the concept of correlation.
*   Define and calculate the Autocorrelation Function (ACF).
*   Explain the significance of ACF in speech analysis.
*   Identify how ACF reveals periodicity and pitch in voiced speech.

#### Key Concepts and Definitions:

*   **Correlation:** Correlation measures the similarity between two signals as a function of the time lag between them.

*   **Autocorrelation Function (ACF):** The ACF of a signal measures the correlation of the signal with a time-delayed version of itself. It reveals the repeating patterns and periodicity within the signal. For a discrete-time signal $s[n]$, the ACF at lag $m$ is defined as:
    $R_{ss}[m] = \sum_{n=-\infty}^{\infty} s[n] s[n-m]$
    In practice, for a finite-length signal of length $N$, the ACF is calculated as:
    $R_{ss}[m] = \sum_{n=0}^{N-1-m} s[n] s[n+m]$ for $m \ge 0$.
    The ACF is an even function, i.e., $R_{ss}[m] = R_{ss}[-m]$.

*   **Periodicity:** A signal is periodic if it repeats itself after a certain interval. The ACF of a periodic signal will exhibit peaks at lags corresponding to the period of the signal.

#### Significance of Autocorrelation Function in Speech Analysis:

*   **Pitch Detection (Fundamental Frequency Estimation):**
    *   Voiced speech is characterized by quasi-periodic oscillations of the vocal folds. The ACF of a voiced segment will show significant peaks at lags corresponding to the period of these vocal fold vibrations.
    *   The lag at which the first significant peak (after lag 0) occurs in the ACF is approximately the **pitch period ($T_0$)**.
    *   The pitch frequency ($F_0$) can then be calculated as $F_0 = 1/T_0$ (if $T_0$ is in samples, it needs to be converted to seconds using the sampling rate).
*   **Voicing Detection:** Similar to STE and ZCR, the presence of significant peaks in the ACF (beyond lag 0) is an indicator of voiced speech. Unvoiced segments, being aperiodic, will have an ACF that decays rapidly and lacks prominent peaks.
*   **Vocal Tract Analysis:** While not its primary use for short-term analysis, the ACF can also reveal information about the vocal tract characteristics, particularly the spectral envelope, as it's related to the inverse filter or predictor coefficients in linear predictive coding (LPC).

#### Example:

Consider a periodic signal segment that repeats every 5 samples:
`[0.1, 0.5, 0.8, 0.5, 0.1, 0.1, 0.5, 0.8, 0.5, 0.1]`

Let's calculate the ACF for a few lags:

*   **Lag 0 ($m=0$):**
    $R_{ss}[0] = (0.1)^2 + (0.5)^2 + (0.8)^2 + (0.5)^2 + (0.1)^2 + (0.1)^2 + (0.5)^2 + (0.8)^2 + (0.5)^2 + (0.1)^2$
    $R_{ss}[0] = 0.01 + 0.25 + 0.64 + 0.25 + 0.01 + 0.01 + 0.25 + 0.64 + 0.25 + 0.01 = 2.61$
    (The ACF at lag 0 is the energy of the signal).

*   **Lag 1 ($m=1$):**
    $R_{ss}[1] = (0.1)(0.5) + (0.5)(0.8) + (0.8)(0.5) + (0.5)(0.1) + (0.1)(0.1) + (0.1)(0.5) + (0.5)(0.8) + (0.8)(0.5) + (0.5)(0.1)$
    $R_{ss}[1] = 0.05 + 0.40 + 0.40 + 0.05 + 0.01 + 0.05 + 0.40 + 0.40 + 0.05 = 1.81$

*   **Lag 5 ($m=5$):**
    $R_{ss}[5] = (0.1)(0.1) + (0.5)(0.5) + (0.8)(0.8) + (0.5)(0.5) + (0.1)(0.1)$
    $R_{ss}[5] = 0.01 + 0.25 + 0.64 + 0.25 + 0.01 = 1.16$
    (If the signal were perfectly periodic with period 5, $R_{ss}[5]$ would be equal to $R_{ss}[0]$).

In a voiced speech signal, we would expect to see a significant peak at lags corresponding to the pitch period.

#### Practical Considerations for Pitch Detection using ACF:

*   **Windowing:** The ACF is computed on short, windowed frames of the speech signal.
*   **Lag Range:** The search for peaks is typically limited to a relevant range of lags, corresponding to the expected range of human speech pitch (e.g., 50 Hz to 400 Hz, which translates to specific sample lags depending on the sampling rate).
*   **Peak Picking:** Algorithms are used to identify the highest peak within the relevant lag range.
*   **Noise:** Noise can corrupt the ACF and make pitch detection difficult. Pre-emphasis and filtering can help.

#### Important Points to Remember:

*   ACF measures the **similarity of a signal with itself at different time delays**.
*   The ACF of a **periodic signal has peaks at lags equal to integer multiples of the period**.
*   The **first significant peak (after lag 0) in the ACF indicates the pitch period** of voiced speech.
*   ACF is a fundamental tool for **pitch estimation** and **voicing detection**.
*   The ACF at lag 0 represents the **energy of the signal segment**.

---

### Practice Questions and Exercises

**Question 1:**
What time-domain parameter is primarily used to indicate the loudness or intensity of a speech signal segment?
a) Short-Time Zero Crossing Rate
b) Autocorrelation Function
c) Short-Time Energy
d) Signal-to-Noise Ratio

**Question 2:**
Consider the following segment of a speech signal: `[0.2, 0.4, -0.3, 0.1, -0.5]`
What is the Short-Time Zero Crossing Rate for this 5-sample segment (assuming a rectangular window)?

**Question 3:**
Explain why the Autocorrelation Function is effective in detecting the pitch of voiced speech.

**Question 4:**
Which of the following statements is generally true for unvoiced speech sounds compared to voiced speech sounds?
a) Higher Short-Time Energy, Lower ZCR
b) Lower Short-Time Energy, Higher ZCR
c) Higher Short-Time Energy, Higher ZCR
d) Lower Short-Time Energy, Lower ZCR

**Question 5:**
If a speech signal has a sampling rate of 8000 Hz and the first significant peak in its ACF occurs at a lag of 80 samples, what is the estimated pitch frequency of the speech signal?

---

### Answers to Practice Questions

**Answer 1:**
c) Short-Time Energy. STE quantifies the signal's power over a short duration, directly relating to its perceived loudness.

**Answer 2:**
Let's count the zero crossings:
*   0.2 to 0.4: No change in sign (positive to positive)
*   0.4 to -0.3: Change in sign (positive to negative) - Zero crossing 1
*   -0.3 to 0.1: Change in sign (negative to positive) - Zero crossing 2
*   0.1 to -0.5: Change in sign (positive to negative) - Zero crossing 3

There are 3 zero crossings in the 5-sample segment.
Short-Time ZCR = (Number of zero crossings) / (Frame length) = 3 / 5 = 0.6

**Answer 3:**
Voiced speech is produced by the quasi-periodic vibration of the vocal folds. This periodicity means that the speech signal at time $t$ is highly similar to the speech signal at time $t - T_0$, where $T_0$ is the pitch period. The Autocorrelation Function measures this similarity at different time lags. Therefore, the ACF of a voiced speech segment will exhibit strong peaks at lags that are integer multiples of the pitch period ($T_0, 2T_0, 3T_0, \ldots$). The first significant peak after lag 0 directly indicates the pitch period, allowing for pitch frequency estimation. Unvoiced speech, being aperiodic and more like noise, lacks this strong correlation at non-zero lags, and its ACF decays rapidly.

**Answer 4:**
b) Lower Short-Time Energy, Higher ZCR. Unvoiced sounds are typically produced with less vocal fold activity, leading to lower energy. They are often characterized by turbulent airflow, which creates a wider spectrum of frequencies and more rapid oscillations, resulting in a higher ZCR.

**Answer 5:**
Sampling Rate ($F_s$) = 8000 Hz
Pitch Period ($T_0$) in samples = 80 samples

Pitch Period in seconds ($T_{0\_sec}$) = $T_0$ (samples) / $F_s$ (Hz)
$T_{0\_sec} = 80 \text{ samples} / 8000 \text{ Hz} = 0.01 \text{ seconds}$

Pitch Frequency ($F_0$) = 1 / $T_{0\_sec}$
$F_0 = 1 / 0.01 \text{ seconds} = 100 \text{ Hz}$

The estimated pitch frequency is 100 Hz.
