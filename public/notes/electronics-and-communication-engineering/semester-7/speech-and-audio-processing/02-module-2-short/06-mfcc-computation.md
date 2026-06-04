---
title: "MFCC-computation"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 2: Short"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff450"
status: "completed"
scrapedAt: "2026-05-23T18:11:12.709Z"
---
# SPEECH AND AUDIO PROCESSING: MODULE 2: SHORT - MFCC COMPUTATION

This module focuses on understanding and computing Mel-Frequency Cepstral Coefficients (MFCCs), a fundamental feature extraction technique in speech and audio processing.

---

## 1. Introduction to Speech Feature Extraction

**Objective:** To understand the necessity of feature extraction in speech processing.

*   **Speech Signal Complexity:** Raw speech signals are complex and contain a vast amount of information. Directly processing this raw data for tasks like speech recognition or speaker identification is computationally expensive and often leads to poor performance.
*   **Information Reduction:** Feature extraction aims to reduce the dimensionality of the speech signal by extracting relevant and discriminative information that captures the essential characteristics of the speech sound.
*   **Perceptual Relevance:** Ideally, extracted features should align with how humans perceive speech. This is crucial for applications that involve human-machine interaction.

**Connection to Course Outcomes:**
*   **CO2 (K2):** Analyzing the speech signal in the time and frequency domain is the precursor to extracting meaningful features. MFCCs leverage frequency-domain analysis.
*   **CO3 (K3):** MFCCs are a prime example of applying speech processing concepts for practical applications like automatic speech recognition (ASR).

**Reference:**
*   **O'Shaughnessy, Chapter 6: Speech Feature Extraction:** This chapter provides a comprehensive overview of various feature extraction methods, including the motivation behind them.

---

## 2. The Mel Scale and its Importance

**Objective:** To understand the Mel scale and why it's used in speech processing.

*   **Human Auditory Perception:** The human ear does not perceive sound frequencies linearly. Our perception of pitch is roughly logarithmic at lower frequencies and becomes more linear at higher frequencies.
*   **The Mel Scale:** The Mel scale is a perceptual scale of pitches judged by listeners to be equal in distance from one another. The name "Mel" is derived from the word "melody."
*   **Mel Scale Formula:** The relationship between frequency ($f$) in Hz and Mel ($m$) is approximated by the following formula:
    $m = 2595 \times \log_{10} (1 + f/700)$
    And conversely, to convert from Mel to Hz:
    $f = 700 \times (10^{m/2595} - 1)$

**Example:**
*   A 100 Hz tone is perceived as being much lower than a 200 Hz tone.
*   A 1000 Hz tone is perceived as being much lower than a 2000 Hz tone.
*   However, the *difference* in perceived pitch between 100 Hz and 200 Hz is much larger than the difference in perceived pitch between 1000 Hz and 2000 Hz. The Mel scale quantifies this perceptual difference.

**Connection to Course Outcomes:**
*   **CO4 (K1):** Understanding the Mel scale directly relates to the fundamental concepts of the hearing mechanism.
*   **CO5 (K3):** MFCCs, by incorporating the Mel scale, combine speech production (acoustic features) and hearing mechanism (perceptual relevance) to develop effective applications.

**Reference:**
*   **O'Shaughnessy, Chapter 6.1: The Mel Scale:** Discusses the psychophysical basis of the Mel scale.
*   **Quatieri, Chapter 2.3.2: Mel-Frequency Scale:** Provides the mathematical definition and rationale for the Mel scale.

---

## 3. Mel Filter Banks

**Objective:** To understand how Mel filter banks are constructed and used to warp the spectrum.

*   **Purpose:** To approximate the non-linear frequency warping of human hearing by applying a bank of triangular filters spaced according to the Mel scale.
*   **Construction:**
    1.  **Define Frequency Range:** The filters typically cover the audible frequency range, from around 0 Hz to 8 kHz (or the Nyquist frequency of the sampled speech signal).
    2.  **Mel Scale Conversion:** Convert the start, end, and intermediate frequencies into the Mel scale.
    3.  **Filter Spacing:** Distribute a number of (e.g., 20-40) equally spaced points on the Mel scale.
    4.  **Convert Back to Hertz:** Convert these Mel-spaced points back to Hertz. These will be the center frequencies of the triangular filters.
    5.  **Triangular Filters:** Create overlapping triangular filters. Each filter has a peak at one of the Mel-spaced center frequencies and slopes down to zero at the center frequencies of its adjacent filters. The base of each triangle extends to the center frequencies of its neighboring filters.

*   **Filtering the Spectrum:** The power spectrum of the speech signal is passed through this Mel filter bank. For each filter, the output is the weighted sum of the spectral energy within its frequency range.

**Example:**
Imagine a frequency spectrum of a voiced sound. Applying the Mel filter bank will result in a set of energy values, where energy in lower frequency bands (which are more perceptually significant) is represented by more filters, while energy in higher frequency bands is compressed into fewer filters.

**Connection to Course Outcomes:**
*   **CO2 (K2):** This step involves processing the speech signal in the frequency domain.
*   **CO3 (K3):** Mel filter banks are a crucial component of MFCCs, which are widely used in ASR.

**Reference:**
*   **O'Shaughnessy, Chapter 6.1.2: Mel Filter Bank Analysis:** Details the design and application of Mel filter banks.
*   **Quatieri, Chapter 2.3.3: Mel Filter Bank:** Provides a step-by-step description of constructing and applying the filter bank.
*   **Rabinar, Chapter 4: Feature Extraction - Mel-frequency Cepstral Coefficients:** Offers another perspective on Mel filter bank implementation.

---

## 4. Computation of MFCCs: Step-by-Step

**Objective:** To systematically understand and perform the computation of MFCCs.

MFCC computation involves several sequential steps:

### Step 1: Pre-emphasis

*   **Purpose:** To boost the energy in higher frequencies, which tend to be weaker in speech signals. This compensates for the spectral tilt of the vocal tract, which typically falls off with increasing frequency.
*   **Process:** A first-order finite impulse response (FIR) filter is applied:
    $y[n] = x[n] - \alpha x[n-1]$
    where $x[n]$ is the input speech signal, $y[n]$ is the pre-emphasized signal, and $\alpha$ is the pre-emphasis coefficient, typically set to a value close to 1 (e.g., 0.95 or 0.97).

**Important Point:** Pre-emphasis is often applied to the raw speech signal before framing and spectral analysis.

### Step 2: Framing and Windowing

*   **Purpose:** Speech signals are quasi-stationary, meaning their characteristics change slowly over time. To analyze these characteristics, the signal is divided into short, overlapping frames (typically 20-30 ms long, with 10-15 ms overlap). Each frame is then multiplied by a window function to reduce spectral leakage.
*   **Window Functions:** Common window functions include:
    *   **Hamming Window:** $w[n] = 0.54 - 0.46 \cos(2\pi n / (N-1))$, where $N$ is the window length.
    *   **Hanning Window:** $w[n] = 0.5 (1 - \cos(2\pi n / (N-1)))$.

**Important Point:** Overlapping frames allow for smoother transitions and better capture of spectral changes.

### Step 3: Fast Fourier Transform (FFT)

*   **Purpose:** To convert the time-domain windowed frames into the frequency domain.
*   **Process:** For each frame, the Discrete Fourier Transform (DFT), usually implemented efficiently using the FFT, is computed to obtain the complex spectrum.
*   **Power Spectrum:** The magnitude squared of the complex spectrum gives the power spectrum:
    $P[k] = |X[k]|^2$, where $X[k]$ is the DFT of the frame.

### Step 4: Mel Filter Bank Application

*   **Purpose:** To warp the power spectrum according to the Mel scale.
*   **Process:** The power spectrum is multiplied by the Mel filter bank. This results in a set of Mel-filtered energies.

### Step 5: Logarithmic Transformation

*   **Purpose:** To mimic the logarithmic compression of loudness in human hearing and to convert energy ratios to differences, which are more robust to variations in volume.
*   **Process:** The logarithm of the Mel-filtered energies is taken:
    $M_i = \log(E_i)$, where $E_i$ is the energy output from the $i$-th Mel filter.

**Important Point:** The logarithm helps to make the distribution of features more Gaussian-like.

### Step 6: Discrete Cosine Transform (DCT)

*   **Purpose:** To decorrelate the Mel-log energies and compact the spectral information into a smaller number of coefficients. This decorrelation is important because the Mel-filtered energies are often highly correlated.
*   **Process:** The DCT is applied to the sequence of log Mel energies. The DCT coefficients are the MFCCs.
    $c_n = \sum_{i=1}^{N} \log(E_i) \cos\left(\frac{\pi n (2i - 1)}{N}\right)$, for $n = 1, 2, \ldots, K$
    where $N$ is the number of Mel filters and $K$ is the number of MFCCs to be kept (typically 12-20).

**Important Point:** The first few DCT coefficients capture the overall spectral envelope (related to vocal tract shape), while higher-order coefficients capture finer spectral details.

### Step 7: Optional Extensions (Delta and Delta-Delta Coefficients)

*   **Delta Coefficients ($\Delta$):** These represent the rate of change of the MFCCs over time. They capture dynamic spectral information, such as the rate of formant movement.
    $\Delta c_n[t] = \frac{\sum_{i=-R}^{R} i \cdot c_n[t+i]}{2 \sum_{i=1}^{R} i^2}$
    where $R$ is the context window size (typically 2).
*   **Delta-Delta Coefficients ($\Delta \Delta$):** These represent the acceleration of the MFCCs. They capture the second derivative of the spectral features.
    $\Delta \Delta c_n[t]$ is computed similarly to $\Delta c_n[t]$, but using the delta coefficients as input.

**Important Point:** Including delta and delta-delta coefficients significantly improves the performance of many speech processing systems by providing temporal context.

**Summary of MFCC Computation Steps:**

1.  **Pre-emphasis:** Remove spectral tilt.
2.  **Framing & Windowing:** Divide into short, overlapping segments and smooth the edges.
3.  **FFT:** Convert to frequency domain.
4.  **Mel Filter Bank:** Warp spectrum based on perceptual scale.
5.  **Logarithm:** Compress energy values.
6.  **DCT:** Decorrelate and compact features.
7.  **(Optional) Delta/Delta-Delta:** Add temporal information.

**Connection to Course Outcomes:**
*   **CO2 (K2):** All steps from FFT onwards involve frequency domain analysis.
*   **CO3 (K3):** The entire process of MFCC computation is an application of speech processing concepts.
*   **CO1 (K1):** Understanding the purpose of pre-emphasis and the Mel scale relates to speech production and hearing.

**Reference:**
*   **O'Shaughnessy, Chapter 6.1.3: Cepstral Coefficients:** Explains the concept of cepstral analysis and its application to speech.
*   **Quatieri, Chapter 2.3.4: Mel-Frequency Cepstral Coefficients (MFCCs):** Provides a detailed mathematical derivation and description of the MFCC calculation.
*   **Rabinar, Chapter 4:** Offers practical insights and algorithms for MFCC computation.

---

## 5. Properties and Applications of MFCCs

**Objective:** To understand the advantages of MFCCs and their common applications.

*   **Key Properties:**
    *   **Perceptually Relevant:** Incorporate the Mel scale, making them closer to human auditory perception.
    *   **Decorrelated:** DCT decorrelates the Mel-filtered energies, making them more suitable for modeling.
    *   **Compact Representation:** A small number of coefficients (typically 12-20) capture most of the important spectral information.
    *   **Robustness to Noise:** Less sensitive to variations in the speaker's pitch and amplitude compared to raw spectral features.

*   **Common Applications:**
    *   **Automatic Speech Recognition (ASR):** The most widely used feature set for ASR systems.
    *   **Speaker Identification/Verification:** Distinguishing between different speakers.
    *   **Speech Synthesis:** Generating synthetic speech.
    *   **Language Identification:** Determining the language being spoken.
    *   **Emotion Recognition:** Analyzing emotional states from speech.
    *   **Music Information Retrieval:** Extracting features from musical signals.

**Connection to Course Outcomes:**
*   **CO3 (K3):** This section directly addresses the application of speech processing concepts.
*   **CO5 (K3):** MFCCs are a key component in building applications that combine speech and hearing mechanisms.

---

## 6. Practice Questions and Answers

**Question 1:** What is the primary reason for using the Mel scale in MFCC computation?

**Answer:** The primary reason is to mimic the non-linear frequency perception of the human ear, where our perception of pitch is more sensitive to changes at lower frequencies and less sensitive to changes at higher frequencies.

**Question 2:** Briefly describe the purpose of the DCT in MFCC computation.

**Answer:** The Discrete Cosine Transform (DCT) is used to decorrelate the Mel-log energies and to compact the spectral information into a smaller set of coefficients. This makes the features more efficient and easier to model.

**Question 3:** If you have a speech signal sampled at 16 kHz, what is the maximum frequency that will be considered in the FFT?

**Answer:** According to the Nyquist-Shannon sampling theorem, the maximum frequency that can be represented without aliasing is half the sampling rate. So, for a 16 kHz sampling rate, the maximum frequency is 16 kHz / 2 = 8 kHz.

**Question 4:** Why is pre-emphasis applied to the speech signal?

**Answer:** Pre-emphasis is applied to boost the energy in higher frequencies. This helps to compensate for the natural spectral tilt of the vocal tract, which tends to have less energy at higher frequencies, and also reduces the impact of noise at higher frequencies.

**Question 5:** Which step in MFCC computation helps in making the features more robust to variations in volume?

**Answer:** The logarithmic transformation step. Taking the logarithm of the energy values converts energy ratios into differences, which are less sensitive to absolute amplitude changes.

**Question 6 (Exercise):** Imagine you have calculated the log energies from 20 Mel filters. If you decide to compute 13 MFCCs, which step would you apply and what is the general formula for the $n$-th coefficient ($c_n$)?

**Answer:** You would apply the Discrete Cosine Transform (DCT). The general formula for the $n$-th MFCC coefficient ($c_n$) is:

$c_n = \sum_{i=1}^{N} \log(E_i) \cos\left(\frac{\pi n (2i - 1)}{N}\right)$

where $N$ is the number of Mel filters (here, $N=20$), and $n$ would range from 1 to 13.

---

## 7. Important Points to Remember

*   **Perceptual Motivation:** MFCCs are designed to be perceptually relevant, reflecting how humans hear sound.
*   **Mel Scale:** Crucial for warping the frequency spectrum.
*   **Mel Filter Banks:** Approximate the Mel scale by using a bank of triangular filters.
*   **Logarithm:** Compresses energy and converts ratios to differences, improving robustness.
*   **DCT:** Decorrelates features and compacts information.
*   **Number of Coefficients:** Typically 12-20 coefficients are used, with the first few representing the broader spectral shape.
*   **Delta and Delta-Delta:** Add valuable temporal information and significantly improve system performance.
*   **Applications:** MFCCs are a cornerstone feature for many speech and audio processing tasks.

---

This concludes the study notes for MFCC Computation in Module 2: Short. Remember to consult the recommended textbooks for more in-depth explanations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
