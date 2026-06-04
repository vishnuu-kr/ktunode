---
title: "Spectral subtraction and Filtering"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 3: Speech Enhancement"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff455"
status: "completed"
scrapedAt: "2026-05-23T18:11:16.437Z"
---
# SPEECH AND AUDIO PROCESSING
## Module 3: Speech Enhancement
### Topic: Spectral Subtraction and Filtering

---

### **1. Introduction to Speech Enhancement**

Speech enhancement aims to improve the quality and/or intelligibility of speech signals that have been corrupted by noise. This is crucial for various applications such as telecommunications, hearing aids, voice assistants, and speech recognition systems, particularly in noisy environments.

**Key Concepts:**
*   **Degraded Speech:** Speech signal contaminated by unwanted noise.
*   **Clean Speech:** The original, desired speech signal without any noise.
*   **Speech Enhancement Techniques:** Algorithms designed to remove or reduce noise from the degraded speech signal, approximating the clean speech.

**Relevance to Course Outcomes:**
*   **CO3 (K3):** Understanding speech enhancement is fundamental to applying speech processing concepts in real-world applications where noise is prevalent.

**References:**
*   **O'Shaughnessy:** Discusses the challenges of noisy speech and the need for enhancement in early chapters related to speech communication.
*   **Quatieri:** Provides a strong foundation in signal processing principles applicable to speech enhancement.

---

### **2. Nature of Noise**

Understanding the characteristics of the noise is essential for selecting appropriate enhancement techniques.

**Types of Noise:**
*   **Stationary Noise:** Noise whose statistical properties (mean, variance, power spectral density) do not change over time.
    *   Examples: White noise, babble noise (averaged over long periods), fan noise.
*   **Non-Stationary Noise:** Noise whose statistical properties change over time.
    *   Examples: Door slamming, car horns, abrupt speech from other speakers.

**Impact of Noise:**
*   **Masking:** Noise can mask the subtle spectral components of speech, reducing intelligibility.
*   **Distortion:** Noise adds unwanted energy to the speech signal, altering its original waveform and spectrum.

**Important Points to Remember:**
*   The effectiveness of enhancement algorithms often depends on assumptions about the noise. Stationary noise is generally easier to deal with.

---

### **3. Spectral Subtraction: Principles and Techniques**

Spectral subtraction is a classic and widely used method for speech enhancement. It operates in the frequency domain, assuming that the noise spectrum can be estimated and subtracted from the noisy speech spectrum.

**Core Idea:**
The clean speech signal's spectrum is assumed to be the noisy speech signal's spectrum minus the noise signal's spectrum.

**Mathematical Formulation:**
Let $S(f)$ be the spectrum of the clean speech, $N(f)$ be the spectrum of the noise, and $Y(f)$ be the spectrum of the noisy speech.
We assume, in the frequency domain, that:
$Y(f) = S(f) + N(f)$

The goal is to estimate $S(f)$ from $Y(f)$. Spectral subtraction aims to estimate $\hat{S}(f)$ using:
$\hat{S}(f) = Y(f) - \hat{N}(f)$

where $\hat{N}(f)$ is the estimated spectrum of the noise.

**Framing and Windowing:**
Speech signals are processed in short, overlapping frames (typically 10-30 ms). Each frame is multiplied by a window function (e.g., Hamming, Hanning) to reduce spectral leakage.

**Short-Time Fourier Transform (STFT):**
The STFT is used to analyze the signal in the frequency domain for each frame.
$Y_k(\omega) = \sum_{n=-\infty}^{\infty} y[n]w[n-kL]e^{-j\omega n}$
where $y[n]$ is the noisy speech signal, $w[n]$ is the window function, and $L$ is the frame shift.

**Magnitude and Phase:**
The STFT results in complex-valued spectral components, characterized by magnitude and phase. Spectral subtraction primarily operates on the magnitude spectrum. The phase of the noisy speech is often preserved and used to reconstruct the enhanced signal.

**Key Steps in Spectral Subtraction:**
1.  **Noise Estimation:** Estimate the noise spectrum, typically from segments of the signal that are assumed to contain only noise (e.g., during pauses or silence).
2.  **Spectral Subtraction:** Subtract the estimated noise spectrum from the noisy speech spectrum.
3.  **Magnitude Constraints:** Apply constraints to prevent negative magnitudes, which are physically impossible.
4.  **Signal Reconstruction:** Use the modified magnitude spectrum and the original phase spectrum to reconstruct the enhanced speech signal in the time domain using the Inverse Short-Time Fourier Transform (ISTFT).

**References:**
*   **O'Shaughnessy:** Chapter 9 discusses noise reduction techniques, including spectral subtraction, and its limitations.
*   **Quatieri:** Chapter 7 provides detailed mathematical treatments of spectral estimation and noise reduction methods.
*   **Rabinar:** Discusses spectral estimation and its applications in speech processing, including noise reduction.

---

### **4. Noise Estimation**

Accurate estimation of the noise spectrum is critical for the success of spectral subtraction.

**Methods for Noise Estimation:**
*   **Decision-Directed (DD) Estimator:** Assumes that the noise spectrum in a frame is similar to the noise spectrum estimated in the previous frame. This is suitable for quasi-stationary noise.
    *   The noise power spectrum $\hat{\Phi}_{NN}(\omega, k)$ at frame $k$ is updated based on the previous frame's estimate and the current noisy speech spectrum.
*   **Minimum Statistics (MS) Estimator:** Aims to estimate the noise floor by tracking the minimum spectral energy over time in each frequency bin. This is more robust to non-stationary noise.
    *   It assumes that the minimum energy in a frequency bin over a certain period will correspond to the noise component.
*   **Voice Activity Detection (VAD):** VAD modules are often used to identify segments of the signal that are likely to contain only speech or only noise. This information helps in updating the noise estimate.

**Important Points to Remember:**
*   The accuracy of noise estimation directly impacts the performance of spectral subtraction. Errors in noise estimation can lead to over-subtraction (musical noise) or under-subtraction (residual noise).

**References:**
*   **Quatieri:** Chapter 7 delves into various noise estimation techniques.

---

### **5. Magnitude Constraints and Over-Subtraction**

Directly subtracting the estimated noise spectrum can lead to negative magnitudes, which are unphysical. Additionally, over-subtracting the noise can introduce undesirable artifacts.

**Magnitude Constraints:**
*   **Rectification:** The most basic approach is to set any negative magnitude to zero.
    $|\hat{S}(\omega, k)| = \max(0, |Y(\omega, k)| - |\hat{N}(\omega, k)|)$
    This can lead to "musical noise" artifacts.
*   **Gain Function:** A more sophisticated approach is to apply a gain function $G(\omega, k)$ to the noisy speech spectrum:
    $|\hat{S}(\omega, k)| = G(\omega, k) |Y(\omega, k)|$
    The gain function is designed to attenuate frequencies where noise is dominant and preserve frequencies where speech is dominant.

**Over-Subtraction:**
*   **Musical Noise:** Occurs when spectral subtraction is too aggressive, leading to the generation of spurious tonal artifacts in the enhanced speech. This is particularly noticeable in the absence of speech or in low-energy speech segments.
*   **Under-Subtraction:** Occurs when the noise is not sufficiently attenuated, leaving residual noise in the output.

**Over-Subtraction Factor ($\alpha$):**
To mitigate musical noise, an over-subtraction factor $\alpha > 1$ is often used:
$|\hat{S}(\omega, k)| = \max(0, |Y(\omega, k)| - \alpha |\hat{N}(\omega, k)|)$
This increases the attenuation of the noise but can also lead to under-subtraction of speech if not carefully controlled.

**Gain Function Design (Examples):**
*   **The Cohen's Gain Function:** A popular gain function that balances noise reduction with the risk of musical noise.
    $G(\omega, k) = \frac{|Y(\omega, k)|^2 - \beta |\hat{N}(\omega, k)|^2}{|Y(\omega, k)|^2} \ge 0$
    where $\beta$ is an over-estimation factor (similar to $\alpha$).
*   **Minimum Mean Square Error (MMSE) Estimator:** A more statistically principled approach that aims to minimize the mean squared error between the clean and enhanced speech signals.

**Important Points to Remember:**
*   Spectral subtraction is a trade-off: aggressive noise reduction can introduce musical noise, while conservative reduction leaves residual noise.

**References:**
*   **O'Shaughnessy:** Discusses the "musical noise" problem and methods to combat it.
*   **Quatieri:** Chapter 7 explores various gain function designs, including MMSE estimators.

---

### **5. Filtering for Speech Enhancement**

Filtering is a fundamental signal processing operation that can be used to shape the spectral content of the speech signal.

**Types of Filters:**
*   **Low-Pass Filter (LPF):** Attenuates high-frequency components. Useful for removing high-frequency noise.
*   **High-Pass Filter (HPF):** Attenuates low-frequency components. Useful for removing low-frequency noise (e.g., hum).
*   **Band-Pass Filter (BPF):** Allows frequencies within a specific range to pass through, attenuating frequencies outside this range. Useful for isolating speech frequencies.
*   **Band-Stop Filter (BSF):** Attenuates frequencies within a specific range. Useful for removing specific interfering tones (e.g., a 60 Hz hum).
*   **All-Pass Filter:** Passes all frequencies but modifies their phase. Not typically used for noise reduction in the same way as other filters.

**Linear Filtering:**
A linear filter can be represented by its impulse response $h[n]$. The output $x_{out}[n]$ is the convolution of the input $x_{in}[n]$ with the impulse response:
$x_{out}[n] = x_{in}[n] * h[n] = \sum_{k=-\infty}^{\infty} x_{in}[k]h[n-k]$

**Frequency Domain Perspective:**
In the frequency domain, convolution becomes multiplication:
$X_{out}(\omega) = X_{in}(\omega) H(\omega)$
where $H(\omega)$ is the frequency response of the filter.

**Adaptive Filtering:**
Adaptive filters can adjust their characteristics over time to track changes in the signal or noise. This is particularly useful for non-stationary noise.

*   **LMS (Least Mean Squares) Algorithm:** A popular algorithm for adaptive filtering that minimizes the mean squared error between the filter output and a desired signal.
    *   **Setup:** Requires a reference signal (e.g., noise correlated with the desired signal) or a way to estimate the error signal.
    *   **Application:** Can be used for noise cancellation if a correlated noise reference is available.

**Wiener Filtering:**
Wiener filters are designed to minimize the mean squared error between the desired signal and the filter output. They are optimal in a mean-squared error sense.

*   **Assumptions:** Requires knowledge of the power spectral densities of the clean speech and the noise.
*   **Gain Function:** The Wiener filter's gain function $G(\omega)$ is given by:
    $G(\omega) = \frac{P_{SS}(\omega)}{P_{SS}(\omega) + P_{NN}(\omega)}$
    where $P_{SS}(\omega)$ is the power spectral density of the clean speech and $P_{NN}(\omega)$ is the power spectral density of the noise.
*   **Challenge:** Estimating $P_{SS}(\omega)$ is difficult as it's the quantity we want to recover. Often, an estimate of the clean speech spectrum is used.

**References:**
*   **O'Shaughnessy:** Chapter 9 discusses various filtering techniques and their applications.
*   **Quatieri:** Chapter 7 covers Wiener filtering and adaptive filtering in detail.
*   **Rabinar:** Discusses various filtering approaches for speech processing.

---

### **6. Spectral Subtraction vs. Filtering**

Both spectral subtraction and filtering are used for speech enhancement, but they operate with different underlying principles and have distinct advantages/disadvantages.

**Spectral Subtraction:**
*   **Principle:** Subtracting an estimate of the noise spectrum from the noisy speech spectrum.
*   **Advantages:**
    *   Conceptually simple.
    *   Effective for stationary or quasi-stationary noise.
    *   Can be implemented without a separate noise reference signal (by estimating noise from the signal itself).
*   **Disadvantages:**
    *   Prone to "musical noise" artifacts.
    *   Performance degrades significantly with non-stationary noise.
    *   Can distort the speech signal if not carefully controlled.

**Filtering:**
*   **Principle:** Shaping the spectral content of the signal by attenuating or amplifying specific frequency bands.
*   **Advantages:**
    *   Can effectively remove specific types of noise if their frequency characteristics are known (e.g., LPF for high-frequency hiss, BSF for hum).
    *   Adaptive filters can track and cancel non-stationary noise if a correlated noise reference is available.
    *   Wiener filters provide an optimal solution in an MSE sense, given accurate spectral estimates.
*   **Disadvantages:**
    *   Fixed filters are not effective for broadband or non-stationary noise.
    *   Adaptive filters require a correlated noise reference or a complex adaptation process.
    *   Wiener filters require accurate estimates of signal and noise spectra, which are often difficult to obtain.

**Hybrid Approaches:**
Often, these techniques are combined to leverage their respective strengths. For example, a spectral subtraction algorithm might be followed by a smoothing filter to reduce musical noise.

**Important Points to Remember:**
*   Spectral subtraction is a form of *subtractive* noise reduction.
*   Filtering is a form of *attenuative* or *adaptive* noise reduction.
*   The choice of technique depends on the type of noise, the desired quality of enhanced speech, and computational constraints.

**Relevance to Course Outcomes:**
*   **CO2 (K2):** Analyzing the advantages and disadvantages of these techniques requires understanding their behavior in the frequency domain.
*   **CO3 (K3):** Applying these concepts involves choosing the most suitable technique for a given noisy speech scenario.

---

### **7. Practice Questions and Answers**

**Question 1:**
What is the primary goal of speech enhancement?
**Answer:** To improve the quality and/or intelligibility of speech signals corrupted by noise.

**Question 2:**
Explain the core principle behind spectral subtraction.
**Answer:** The core principle is to estimate the noise spectrum and subtract it from the noisy speech spectrum in the frequency domain, assuming $Y(\omega) = S(\omega) + N(\omega)$, so $\hat{S}(\omega) = Y(\omega) - \hat{N}(\omega)$.

**Question 3:**
What is "musical noise" and how does it typically arise in spectral subtraction?
**Answer:** Musical noise is an artifact characterized by spurious tonal sounds. It typically arises from over-subtraction of noise, particularly when the gain function goes to zero or negative values, leading to the creation of artificial tones when reconstructing the signal.

**Question 4:**
Describe one method for estimating the noise spectrum in spectral subtraction.
**Answer:** The Decision-Directed (DD) estimator assumes the noise spectrum in the current frame is similar to that of the previous frame. Alternatively, the Minimum Statistics (MS) estimator tracks the minimum spectral energy over time.

**Question 5:**
How can a simple low-pass filter be used for speech enhancement? What type of noise is it most effective against?
**Answer:** A low-pass filter attenuates high-frequency components of the speech signal. It is most effective against high-frequency noise, such as hiss or the "fuzz" of broadband noise.

**Question 6:**
What is the main difference between a fixed filter and an adaptive filter for speech enhancement?
**Answer:** A fixed filter has a constant frequency response determined at design time. An adaptive filter can adjust its characteristics over time, typically to track changing noise conditions or to minimize an error signal.

**Question 7:**
What are the potential drawbacks of over-subtracting the estimated noise spectrum?
**Answer:** Over-subtracting can lead to the introduction of "musical noise" artifacts and can also attenuate the desired speech signal, resulting in under-enhancement or distortion.

**Question 8:**
Consider a frame where the noisy speech magnitude spectrum is $|Y(\omega)| = 10$ and the estimated noise magnitude spectrum is $|\hat{N}(\omega)| = 5$. If we use simple rectification, what will be the enhanced speech magnitude spectrum $|\hat{S}(\omega)|$?
**Answer:** Using simple rectification, $|\hat{S}(\omega)| = \max(0, |Y(\omega)| - |\hat{N}(\omega)|) = \max(0, 10 - 5) = 5$.

**Question 9:**
If in the previous question, we used an over-subtraction factor $\alpha = 1.5$, what would be the enhanced speech magnitude spectrum?
**Answer:** $|\hat{S}(\omega)| = \max(0, |Y(\omega)| - \alpha |\hat{N}(\omega)|) = \max(0, 10 - 1.5 \times 5) = \max(0, 10 - 7.5) = 2.5$.

**Question 10:**
In the context of Wiener filtering, what information is required to design the optimal filter? What is the main practical challenge in applying Wiener filtering?
**Answer:** The power spectral densities of the clean speech and the noise are required. The main practical challenge is accurately estimating the power spectral density of the clean speech signal, as this is what we are trying to recover.

---

### **8. Important Points to Remember**

*   **Frequency Domain Processing:** Spectral subtraction and many filtering techniques operate on the frequency representation of the speech signal.
*   **Noise Estimation is Key:** The performance of spectral subtraction is heavily dependent on the accuracy of the noise spectrum estimation.
*   **Musical Noise:** A common artifact in spectral subtraction due to over-subtraction.
*   **Trade-offs:** Speech enhancement algorithms often involve trade-offs between noise reduction, speech distortion, and artifact introduction.
*   **Stationary vs. Non-Stationary Noise:** Algorithms perform differently depending on the nature of the noise. Stationary noise is generally easier to handle.
*   **Phase Preservation:** In spectral subtraction, preserving the original phase of the noisy speech is crucial for reconstructing a coherent signal.
*   **Adaptive Filtering:** Offers a way to adapt to changing noise conditions, but often requires a correlated noise reference.
*   **Wiener Filtering:** Provides an optimal solution in an MSE sense but requires accurate spectral estimates.

---
This comprehensive set of notes covers the principles, techniques, and challenges associated with spectral subtraction and filtering for speech enhancement, aligning with the provided learning outcomes and course outcomes. The references to the textbooks provide further depth and context for each section.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
