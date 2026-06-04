---
title: "Mel-frequency cepstral coefficient (MFCC)- Computation"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 2: Mel"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca55"
status: "completed"
scrapedAt: "2026-05-20T17:26:53.565Z"
---
# Speech and Audio Processing - Module 2: Mel

## Topic: Mel-Frequency Cepstral Coefficients (MFCC) - Computation

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the purpose and intuition behind using Mel-frequency cepstral coefficients (MFCCs) in speech processing.
*   Describe the individual steps involved in computing MFCCs from an audio signal.
*   Explain the role of each step in transforming the raw audio spectrum into a more perceptually relevant representation.
*   Identify the key parameters that can be adjusted during MFCC computation.
*   Appreciate the advantages of MFCCs over other spectral representations for tasks like speech recognition.

---

### 1. Introduction to MFCCs

#### 1.1. What are MFCCs?

*   **Definition:** Mel-Frequency Cepstral Coefficients (MFCCs) are a set of features used to represent the short-term power spectrum of a sound, typically speech.
*   **Purpose:** They are designed to mimic the human auditory system's response to sound. The human ear is not equally sensitive to all frequencies; it's more sensitive to lower frequencies and less sensitive to higher frequencies.
*   **Goal:** To capture the *perceptual* aspects of the sound's spectrum, rather than just the raw physical spectrum. This makes them highly effective for tasks like speech recognition, speaker recognition, and audio classification.

#### 1.2. Why use MFCCs?

*   **Perceptual Relevance:** Directly model human hearing, leading to better performance in tasks where human perception is key.
*   **Dimensionality Reduction:** Condense a large amount of spectral information into a smaller set of coefficients, making them computationally efficient.
*   **Decorrelation:** The cepstral transformation decorrelates the spectral information, meaning the coefficients are less dependent on each other, which can simplify subsequent modeling.
*   **Robustness:** Relatively robust to variations in the speech signal that are not perceptually significant (e.g., minor noise, variations in speaking style).

---

### 2. The Computation Pipeline: Step-by-Step

The computation of MFCCs involves a series of well-defined steps. Here's a breakdown:

#### 2.1. Pre-emphasis

*   **Purpose:** To amplify high-frequency components of the speech signal. This is done because the power spectrum of speech typically falls off at higher frequencies, and this pre-emphasis step can help to equalize this spectral tilt. It also helps to reduce the dynamic range of the signal and prevent floating-point underflow during subsequent processing.
*   **How it's done:** A simple first-order high-pass filter is applied.
    $$ y[n] = x[n] - \alpha x[n-1] $$
    where $x[n]$ is the input signal, $y[n]$ is the pre-emphasized signal, and $\alpha$ is a constant, typically between 0.9 and 1.0. A common value for $\alpha$ is 0.97.

    *   **Example:** If $x[n] = [1, 2, 3, 4]$ and $\alpha = 0.9$:
        *   $y[0] = x[0] = 1$
        *   $y[1] = x[1] - 0.9 \times x[0] = 2 - 0.9 \times 1 = 1.1$
        *   $y[2] = x[2] - 0.9 \times x[1] = 3 - 0.9 \times 2 = 1.2$
        *   $y[3] = x[3] - 0.9 \times x[2] = 4 - 0.9 \times 3 = 1.3$
        *   $y[n] = [1, 1.1, 1.2, 1.3]$

*   **Important Point:** This step is usually performed on short frames of the audio signal.

#### 2.2. Framing and Windowing

*   **Purpose:** Speech signals are non-stationary, meaning their characteristics change over time. To analyze these short-term characteristics, the signal is divided into short, overlapping frames. Windowing is then applied to each frame to reduce spectral leakage caused by abrupt frame boundaries.
*   **Framing:**
    *   **Frame Size:** Typically 20-40 milliseconds (e.g., 25 ms).
    *   **Frame Overlap:** Typically 50% (e.g., for a 25 ms frame, the next frame starts 12.5 ms later). Overlap helps to ensure that important speech information at frame boundaries is not lost.
*   **Windowing:**
    *   **Purpose:** To smoothly taper the frame's amplitude towards zero at its edges, reducing discontinuities. Common window functions include:
        *   **Hamming Window:** $w[n] = 0.54 - 0.46 \cos\left(\frac{2\pi n}{N-1}\right)$ for $0 \le n \le N-1$, where $N$ is the frame size.
        *   **Hanning (Hann) Window:** $w[n] = 0.5 \left(1 - \cos\left(\frac{2\pi n}{N-1}\right)\right)$ for $0 \le n \le N-1$.
    *   **How it's done:** Each frame $x_f[n]$ is multiplied element-wise by the chosen window function $w[n]$:
        $$ x_{windowed}[n] = x_f[n] \times w[n] $$

    *   **Example:** Consider a small frame and a Hamming window.
        *   Frame $x_f[n] = [0.1, 0.5, 0.8, 0.6, 0.2]$
        *   Hamming window of same size $w[n] = [0.08, 0.42, 1.0, 0.42, 0.08]$ (simplified values for illustration)
        *   $x_{windowed}[n] = [0.008, 0.21, 0.8, 0.252, 0.016]$

*   **Important Point:** Windowing is crucial to minimize artifacts introduced by analyzing a non-infinite signal segment.

#### 2.3. Fast Fourier Transform (FFT)

*   **Purpose:** To convert the time-domain windowed frame into its frequency-domain representation. This reveals the spectral content (the magnitude of different frequencies) present in that short segment of speech.
*   **How it's done:** The Discrete Fourier Transform (DFT) is applied to each windowed frame. Since we're dealing with digital signals, the Fast Fourier Transform (FFT), an efficient algorithm for computing the DFT, is used.
    $$ X[k] = \sum_{n=0}^{N-1} x_{windowed}[n] e^{-j 2\pi kn/N} $$
    where $X[k]$ is the DFT of the windowed frame, $N$ is the frame size, and $k$ represents the frequency bin.
*   **Output:** A complex-valued spectrum. We are primarily interested in the *magnitude spectrum*.

#### 2.4. Magnitude Spectrum

*   **Purpose:** To obtain the power or amplitude of each frequency component in the frame.
*   **How it's done:** The magnitude of each complex frequency component $X[k]$ is calculated.
    $$ |X[k]| = \sqrt{\text{Real}(X[k])^2 + \text{Imaginary}(X[k])^2} $$
*   **Power Spectrum:** Often, the power spectrum is used, which is the square of the magnitude:
    $$ P[k] = |X[k]|^2 $$
    Using the power spectrum is common because it relates directly to the energy in each frequency band.

*   **Important Point:** We discard the phase information as it's generally less perceptually relevant for many speech tasks.

#### 2.5. Mel Filterbank

*   **Purpose:** To transform the linear frequency scale of the spectrum into the Mel scale. The Mel scale is a perceptual scale of pitches judged by listeners to be equal in distance from one another. It approximates how humans perceive frequencies: linear at low frequencies and logarithmic at high frequencies.
*   **How it's done:** A set of triangular band-pass filters are applied to the power spectrum. These filters are spaced logarithmically on the Mel scale.
    *   **Filterbank Design:**
        1.  **Determine Filterbank Span:** The filters typically span the audible frequency range of human hearing (roughly 0 to 8 kHz, or up to the Nyquist frequency of the sampled signal).
        2.  **Convert Frequencies to Mel:** Convert the start, center, and end frequencies of the filters from Hz to the Mel scale using the formula:
            $$ f_{\text{mel}} = 2595 \log_{10}\left(1 + \frac{f_{\text{Hz}}}{700}\right) $$
            Conversely, to convert from Mel to Hz:
            $$ f_{\text{Hz}} = 700 \left(10^{f_{\text{mel}}/2595} - 1\right) $$
        3.  **Generate Triangular Filters:** Create a set of $M$ triangular filters. Each filter is defined by three points: a start frequency, a center frequency, and an end frequency. The filters overlap, and the peak response of each filter is at its center frequency. The filters are designed such that the sum of the responses of adjacent filters is constant, which helps to smooth the spectrum.
        4.  **Apply Filters:** The power spectrum is multiplied by the magnitude response of each triangular filter.
            $$ S_m = \sum_{k=0}^{N/2} P[k] H_m[k] $$
            where $S_m$ is the output of the $m$-th Mel filter, $P[k]$ is the power spectrum value at frequency bin $k$, and $H_m[k]$ is the magnitude response of the $m$-th Mel filter at bin $k$.

    *   **Number of Filters (M):** Typically 20 to 40 filters are used. A common choice is 20 or 40.

    *   **Example:** Imagine you have a power spectrum. You apply the first Mel filter which might cover 0-200 Hz with a peak at 100 Hz (on the Mel scale). The output of this filter is the sum of the power spectrum values weighted by the triangular shape of this filter. This is repeated for all filters.

*   **Important Point:** This is the core step that introduces the perceptual weighting based on the Mel scale.

#### 2.6. Logarithmic Operation

*   **Purpose:** Human perception of loudness is also roughly logarithmic. Applying a logarithm to the filterbank outputs compresses the dynamic range of the spectral energies, making them more aligned with human perception of loudness. It also helps to convert multiplicative effects (like energy in different bands) into additive effects, which can be beneficial for subsequent processing.
*   **How it's done:** The logarithm of the Mel filterbank outputs is taken:
    $$ L_m = \log(S_m) $$
    Often, the natural logarithm (ln) or base-10 logarithm (log10) is used.

*   **Important Point:** This step makes the representation more perceptually uniform with respect to loudness.

#### 2.7. Discrete Cosine Transform (DCT)

*   **Purpose:** To convert the log-Mel filterbank energies into a set of decorrelated coefficients called Mel-Frequency Cepstral Coefficients (MFCCs). The DCT is used because it has the property of decorrelating the input sequence (the log-Mel energies). This is analogous to how principal component analysis (PCA) can be used for decorrelation, but DCT is computationally simpler.
*   **How it's done:** The Discrete Cosine Transform is applied to the sequence of logarithmically scaled Mel filterbank energies.
    $$ C_c = \sum_{m=1}^{M} L_m \cos\left(\frac{\pi c (2m - 1)}{M}\right) $$
    where $C_c$ is the $c$-th cepstral coefficient, $L_m$ is the $m$-th log-Mel filterbank energy, $M$ is the number of Mel filters, and $c$ is the cepstral coefficient index (typically from 1 to $N$, where $N$ is the desired number of MFCCs).

*   **Number of Coefficients (N):** Typically, 13 to 20 MFCCs are computed per frame.
*   **Cepstral Mean Normalization (CMN):** A common post-processing step is to subtract the mean of each coefficient across all frames in a utterance. This helps to remove speaker-specific variations in the mean spectral shape and make the features more robust to channel effects.

    *   **Example:** After computing the log-Mel filterbank outputs for a frame (e.g., 20 values), the DCT is applied. The first few coefficients (e.g., $C_1, C_2, \dots, C_{13}$) capture the most important information about the spectral envelope. Higher-order coefficients capture finer details which might be more sensitive to noise.

*   **Important Point:** The DCT transforms the correlated Mel energies into uncorrelated cepstral coefficients, with the first few coefficients carrying the most significant spectral shape information.

---

### 3. Key Parameters and Choices

*   **Frame Size:** Typically 20-40 ms.
*   **Frame Overlap:** Typically 50%.
*   **Pre-emphasis Coefficient ($\alpha$):** Usually 0.95 - 0.97.
*   **Number of FFT points (N_fft):** Usually a power of 2, often the smallest power of 2 greater than or equal to the frame size.
*   **Number of Mel Filterbanks (M):** Typically 20-40.
*   **Number of MFCCs (N):** Typically 13-20.
*   **Window Function:** Hamming, Hanning, etc.

---

### 4. Advantages of MFCCs

*   **Good perceptual representation:** Mimics human hearing.
*   **Dimensionality reduction:** Compact representation.
*   **Decorrelated features:** Easier for modeling.
*   **Effective for ASR:** Widely used and successful in automatic speech recognition systems.

---

### 5. Practice Questions and Exercises

**Question 1:** What is the primary goal of using the Mel scale in MFCC computation?
    *   a) To represent the signal in the time domain.
    *   b) To represent the signal in the frequency domain.
    *   c) To align the spectral representation with human auditory perception.
    *   d) To reduce the computational complexity of the FFT.

**Question 2:** Which of the following steps is primarily responsible for making the spectral representation more perceptually uniform with respect to loudness?
    *   a) Pre-emphasis
    *   b) Fast Fourier Transform
    *   c) Mel Filterbank
    *   d) Logarithmic operation

**Question 3:** The Discrete Cosine Transform (DCT) in MFCC computation is used to:
    *   a) Convert the time-domain signal to the frequency domain.
    *   b) Apply perceptual weighting based on the Mel scale.
    *   c) Compress the dynamic range of the spectral energies.
    *   d) Decorrelate the log-Mel filterbank energies.

**Question 4:** Briefly explain the purpose of framing and windowing in MFCC computation.

**Question 5:** If a speech signal is sampled at 16 kHz, what is the maximum frequency that can be represented by the FFT?
    *   a) 16 kHz
    *   b) 8 kHz
    *   c) 4 kHz
    *   d) 1 kHz

---

### 6. Answers to Practice Questions

**Answer 1:**
    *   c) To align the spectral representation with human auditory perception.

**Answer 2:**
    *   d) Logarithmic operation. (The Mel filterbank itself applies the perceptual weighting on frequency, but the logarithm makes the *energy* representation perceptually uniform with respect to loudness).

**Answer 3:**
    *   d) Decorrelate the log-Mel filterbank energies.

**Answer 4:**
    *   **Framing:** Speech is non-stationary, so it's divided into short, overlapping segments (frames) to analyze its short-term characteristics.
    *   **Windowing:** A window function is applied to each frame to smoothly taper the amplitude at the edges, reducing spectral leakage caused by abrupt frame transitions.

**Answer 5:**
    *   b) 8 kHz. According to the Nyquist-Shannon sampling theorem, the maximum frequency that can be accurately represented in a sampled signal is half the sampling rate. For a 16 kHz sampling rate, the Nyquist frequency is 16 kHz / 2 = 8 kHz.

---

### Important Points to Remember

*   MFCCs are a **perceptually motivated** feature set.
*   The pipeline transforms a raw audio signal through spectral analysis and perceptual transformations.
*   The **Mel scale** is crucial for mimicking human frequency perception.
*   The **logarithmic operation** is key for mimicking human loudness perception.
*   The **DCT** is used for decorrelation and dimensionality reduction.
*   MFCCs capture the **spectral envelope** of speech.
*   Typically, the first 13-20 MFCCs are used, as they contain the most relevant information.
*   **Cepstral Mean Normalization (CMN)** is often applied as a post-processing step.
