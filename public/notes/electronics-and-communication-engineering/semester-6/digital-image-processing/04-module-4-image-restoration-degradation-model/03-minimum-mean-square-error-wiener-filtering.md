---
title: "Minimum Mean Square Error (Wiener) Filtering"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Restoration: Degradation model"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee2b"
status: "completed"
scrapedAt: "2026-05-23T18:00:46.471Z"
---
# Digital Image Processing: Module 4 - Image Restoration: Degradation Model

## Topic: Minimum Mean Square Error (Wiener) Filtering

### 1. Introduction to Image Restoration and the Degradation Model

*   **Goal of Image Restoration:** To recover an original image, $f(x, y)$, from a degraded image, $g(x, y)$. This degradation is typically caused by noise and blurring.
*   **Degradation Model:** The most general model for image degradation is expressed as:
    $g(x, y) = H[f(x, y)] + \eta(x, y)$
    where:
    *   $g(x, y)$: The degraded image.
    *   $f(x, y)$: The original, uncorrupted image.
    *   $H$: A degradation function that represents the blurring process. This is often a linear, position-invariant operation.
    *   $\eta(x, y)$: Additive noise.
*   **Frequency Domain Representation:** In the frequency domain, the degradation model becomes:
    $G(u, v) = H(u, v)F(u, v) + N(u, v)$
    where uppercase letters denote the Fourier Transforms of the corresponding spatial domain functions.
*   **Key Assumptions:**
    *   The degradation process is often assumed to be linear and shift-invariant.
    *   The noise is additive.
    *   The noise and degradation are often independent of the image.

**(Referenced from Gonzalez & Woods, 4th Ed., Chapter 5: Image Restoration)**

### 2. Minimum Mean Square Error (MMSE) Filtering (Wiener Filtering)

*   **The Problem:** We want to find an estimate of the original image, $\hat{f}(x, y)$, given the degraded image $g(x, y)$.
*   **Criterion for Optimization:** The Wiener filter aims to minimize the Mean Square Error (MSE) between the original image and its estimate.
    $MSE = E[\{f(x, y) - \hat{f}(x, y)\}^2]$
    where $E[\cdot]$ denotes the expectation.
*   **Linear Filtering Approach:** The Wiener filter is a linear filter. This means the estimate is obtained by convolving the degraded image with a filter function, $h(x, y)$:
    $\hat{f}(x, y) = h(x, y) * g(x, y)$
    In the frequency domain:
    $\hat{F}(u, v) = H(u, v)G(u, v)$
*   **Derivation of the Wiener Filter (Frequency Domain):**
    The optimal linear filter $H(u, v)$ that minimizes the MSE is given by the Wiener filter in the frequency domain:
    $H(u, v) = \frac{H^*(u, v) S_f(u, v)}{|H(u, v)|^2 S_f(u, v) + S_\eta(u, v)}$
    where:
    *   $H^*(u, v)$: The complex conjugate of the degradation function $H(u, v)$.
    *   $S_f(u, v)$: The power spectral density (PSD) of the original image.
    *   $S_\eta(u, v)$: The power spectral density (PSD) of the additive noise.
    *   $|H(u, v)|^2$: The squared magnitude of the degradation function.

**(Referenced from Gonzalez & Woods, 4th Ed., Chapter 5: Image Restoration; Jayaraman et al., 1st Ed., Chapter 7: Image Restoration)**

### 3. Understanding the Components of the Wiener Filter Formula

*   **$H^*(u, v) S_f(u, v)$ (Numerator):** This part is related to the signal and the degradation. It essentially tries to reverse the degradation ($H^*(u, v)$) and amplify frequencies that are strong in the original image ($S_f(u, v)$).
*   **$|H(u, v)|^2 S_f(u, v) + S_\eta(u, v)$ (Denominator):** This part represents the power of the degraded signal. It includes the power of the degraded original image signal ($|H(u, v)|^2 S_f(u, v)$) and the power of the noise ($S_\eta(u, v)$).
*   **The Ratio:** The Wiener filter essentially scales the frequency components of the degraded image $G(u, v)$.
    *   When noise is negligible ($S_\eta(u, v) \approx 0$), the filter approaches the inverse filter ($1/H(u, v)$), which is desirable for deblurring but can amplify noise.
    *   When degradation is severe or noise is high, the filter tends to be smaller, attenuating frequencies and acting more like a smoothing filter to suppress noise at the cost of some blurring.

### 4. Properties and Behavior of the Wiener Filter

*   **MMSE Criterion:** The Wiener filter is optimal in the sense of minimizing the mean squared error.
*   **Trade-off between Deblurring and Noise Suppression:**
    *   If the degradation function $H(u, v)$ is known perfectly and noise is absent, the Wiener filter would ideally be an inverse filter, perfectly restoring the image.
    *   However, in practice, $H(u, v)$ is often unknown or estimated, and noise is always present. The Wiener filter balances deblurring with noise suppression.
*   **Dependence on Image and Noise Statistics:** The performance of the Wiener filter is heavily dependent on the accuracy of the estimated power spectral densities of the image ($S_f(u, v)$) and noise ($S_\eta(u, v)$).
*   **Computational Complexity:** Calculating the Wiener filter involves Fourier Transforms and estimating PSDs, which can be computationally intensive.

**(Referenced from Castleman, 2/e, Chapter 6: Image Restoration; Pratt, 4/e, Chapter 8: Image Restoration)**

### 5. Practical Considerations and Implementation

*   **Estimating $H(u, v)$:** The degradation function $H(u, v)$ is often not known precisely. It can be estimated from:
    *   **Observation:** If the degradation process is known (e.g., a specific type of motion blur, out-of-focus blur), $H(u, v)$ can be calculated analytically.
    *   **Experimentation:** Degradation can be modeled by blurring a known image or a point source and analyzing the result.
    *   **Blind Deconvolution:** If neither the image nor the degradation is known, more advanced techniques (blind deconvolution) are required.
*   **Estimating $S_f(u, v)$ and $S_\eta(u, v)$:**
    *   **Image PSD ($S_f(u, v)$):**
        *   **Parametric Models:** Assuming the image has a specific statistical structure (e.g., exponential, autoregressive).
        *   **Non-parametric Estimates:** Calculating the PSD directly from the degraded image. However, this estimate is corrupted by noise and blurring, so it needs careful handling. A common approach is to use the PSD of the degraded image, $|G(u, v)|^2$, as an approximation for $|H(u, v)|^2 S_f(u, v) + S_\eta(u, v)$.
    *   **Noise PSD ($S_\eta(u, v)$):**
        *   **Assumptions:** Often, noise is assumed to be white (uniform PSD) or Gaussian. For Gaussian noise, the PSD is constant.
        *   **Estimation from Noise-Free Regions:** If there are regions in the image that are known to be noise-only, the noise PSD can be estimated from them.
*   **The Wiener Filter in Practice (Simplified form):** A commonly used practical form of the Wiener filter uses the ratio of signal power to noise power:
    $H(u, v) = \frac{1}{H(u, v)} \frac{S_f(u, v)}{S_f(u, v) + S_\eta(u, v)/|H(u, v)|^2}$
    This can be rewritten by defining a parameter $\gamma = S_\eta / S_f$.
    $H(u, v) = \frac{1}{H(u, v)} \frac{1}{1 + \gamma(u, v)}$
    where $\gamma(u, v)$ is the ratio of noise power to signal power at frequency $(u, v)$.
    *   At low frequencies (where image signal power is high and noise power is relatively low), $\gamma$ is small, and the filter approaches $1/H(u, v)$ (inverse filtering).
    *   At high frequencies (where image signal power drops significantly and noise power might be relatively higher), $\gamma$ becomes large, and the filter attenuates frequencies, acting as a low-pass filter.
*   **Computational Steps:**
    1.  Obtain the degraded image $g(x, y)$.
    2.  Compute its Fourier Transform $G(u, v)$.
    3.  Estimate or determine the degradation function $H(u, v)$.
    4.  Estimate the power spectral densities $S_f(u, v)$ and $S_\eta(u, v)$.
    5.  Calculate the Wiener filter $H(u, v)$ using the formula.
    6.  Multiply $G(u, v)$ by $H(u, v)$: $\hat{F}(u, v) = H(u, v)G(u, v)$.
    7.  Compute the inverse Fourier Transform of $\hat{F}(u, v)$ to obtain the restored image $\hat{f}(x, y)$.

**(Referenced from Gonzalez & Woods, 4th Ed., Chapter 5: Image Restoration; Jayaraman et al., 1st Ed., Chapter 7: Image Restoration; Jain, 1988, Chapter 5: Image Restoration)**

### 6. Example Scenario

Let's consider a simple 1D example.
*   Original signal: $f[n]$
*   Degradation: Simple averaging filter $h[n] = [1/2, 1/2]$ (in 1D)
*   Noise: Additive white Gaussian noise $\eta[n]$
*   Degraded signal: $g[n] = h[n] * f[n] + \eta[n]$

In the frequency domain:
*   $G(e^{j\omega}) = H(e^{j\omega})F(e^{j\omega}) + N(e^{j\omega})$
*   $H(e^{j\omega}) = \frac{1}{2}(1 + e^{-j\omega})$

We need to estimate $F(e^{j\omega})$. The Wiener filter is:
$H(e^{j\omega}) = \frac{H^*(e^{j\omega}) S_f(e^{j\omega})}{|H(e^{j\omega})|^2 S_f(e^{j\omega}) + S_\eta(e^{j\omega})}$

Assume:
*   $S_f(e^{j\omega})$ is known (e.g., from a model). Let's say it's high at low frequencies and low at high frequencies.
*   $S_\eta(e^{j\omega})$ is constant (white noise).

The filter $H(e^{j\omega})$ will attempt to invert $H(e^{j\omega})$ but will also be shaped by the ratio of $S_f$ to $S_\eta$. If $S_\eta$ is large at high frequencies, $H(e^{j\omega})$ will attenuate those frequencies.

### 7. Comparison with Other Filters

*   **Inverse Filter:** Tries to perfectly reverse the degradation. It's ideal when no noise is present. However, it amplifies noise significantly, especially at frequencies where $H(u, v)$ is small.
    $H_{inv}(u, v) = \frac{1}{H(u, v)}$
*   **Constrained Least Squares (CLS) Filter:** Minimizes the MSE subject to a constraint on the "smoothness" or energy of the estimated image. It's less sensitive to noise than the inverse filter but doesn't explicitly use noise statistics.
*   **Wiener Filter:** Strikes a balance between inverse filtering and smoothing. It's optimal in the MSE sense when signal and noise statistics are known. It implicitly handles noise amplification by considering the noise power spectrum.

**(Referenced from Gonzalez & Woods, 4th Ed., Chapter 5: Image Restoration)**

### 8. Learning Outcomes Alignment

*   **CO1: Explain different components of image processing system (Knowledge Level: K2)**
    *   This topic explains the degraded image $g(x, y)$ as a component that needs processing, the degradation function $H$ as a system component, and noise $\eta$ as another component. The Wiener filter itself is a component designed to "undo" or mitigate the effects of the degradation and noise.
*   **CO2: Analyse the various concepts and mathematical transforms necessary for image processing (Knowledge Level: K3)**
    *   This topic heavily relies on the Fourier Transform and its properties for analyzing and designing filters in the frequency domain. Concepts like power spectral density (PSD), complex conjugate, and magnitude are crucial.
*   **CO4: Analyze the filtering and restoration of images (Knowledge Level: K3)**
    *   This is the core of the topic. It analyzes the Wiener filter as a method for image restoration, explaining its mathematical formulation, its underlying optimization criterion (MSE), and its behavior in balancing deblurring and noise suppression.

### 9. Key Points to Remember

*   **Goal:** Minimize Mean Square Error (MSE) between original and estimated image.
*   **Formula:** $H(u, v) = \frac{H^*(u, v) S_f(u, v)}{|H(u, v)|^2 S_f(u, v) + S_\eta(u, v)}$
*   **Key Inputs:** Degradation function $H(u, v)$, Image PSD $S_f(u, v)$, Noise PSD $S_\eta(u, v)$.
*   **Trade-off:** Balances deblurring against noise suppression.
*   **Practicality:** Relies on accurate estimation of $H$, $S_f$, and $S_\eta$.
*   **Alternative View:** Can be seen as an inverse filter scaled by the ratio of signal power to total signal+noise power.

### 10. Practice Questions and Exercises

**Question 1:**
What is the primary objective of the Minimum Mean Square Error (Wiener) filter in image restoration?
*   (a) To maximize the sharpness of the restored image.
*   (b) To minimize the mean squared difference between the original and restored image.
*   (c) To completely remove all noise from the image.
*   (d) To preserve all high-frequency components of the original image.

**Answer:** (b)
**Explanation:** The Wiener filter is designed to minimize the MSE, which is a measure of the average squared error.

**Question 2:**
In the frequency domain, how is the Wiener filter equation typically expressed?
*   (a) $H(u, v) = \frac{1}{H(u, v)}$
*   (b) $H(u, v) = \frac{1}{H(u, v)} \left(1 - \frac{S_\eta(u, v)}{|H(u, v)|^2 S_f(u, v) + S_\eta(u, v)}\right)$
*   (c) $H(u, v) = \frac{H^*(u, v) S_f(u, v)}{|H(u, v)|^2 S_f(u, v) + S_\eta(u, v)}$
*   (d) $H(u, v) = \frac{S_f(u, v)}{S_\eta(u, v)}$

**Answer:** (c)
**Explanation:** This is the standard form of the Wiener filter in the frequency domain, incorporating the degradation function, image PSD, and noise PSD.

**Question 3:**
If the noise power spectral density $S_\eta(u, v)$ is very low compared to the signal power spectral density at a particular frequency $(u, v)$, how would the Wiener filter behave at that frequency?
*   (a) It would heavily attenuate the frequency.
*   (b) It would act like an inverse filter, $1/H(u, v)$.
*   (c) It would pass the frequency unchanged.
*   (d) It would amplify the noise.

**Answer:** (b)
**Explanation:** When noise is negligible ($S_\eta \approx 0$), the denominator approaches $|H(u, v)|^2 S_f(u, v)$, and the filter becomes $H^*(u, v)S_f(u, v) / (|H(u, v)|^2 S_f(u, v)) = H^*(u, v) / |H(u, v)|^2 = 1/H(u, v)$.

**Question 4:**
What are the practical challenges in implementing a Wiener filter for image restoration? (List at least two)

**Answer:**
1.  **Accurate Estimation of the Degradation Function $H(u, v)$:** $H(u, v)$ is often unknown or only approximately known.
2.  **Accurate Estimation of Power Spectral Densities ($S_f(u, v)$ and $S_\eta(u, v)$):** The statistics of the original image and the noise are not always known and need to be estimated from the degraded image or prior knowledge, which can be prone to errors.

**Question 5 (Conceptual):**
Explain the trade-off the Wiener filter makes between deblurring and noise suppression. Use the concept of signal-to-noise ratio (SNR) in your explanation.

**Answer:**
The Wiener filter aims to invert the blurring process (deblurring) while simultaneously reducing noise. At frequencies where the Signal-to-Noise Ratio (SNR) is high (i.e., the original image signal is strong relative to the noise), the Wiener filter allows for more aggressive deblurring, approaching the inverse filter. Conversely, at frequencies where the SNR is low (i.e., noise is dominant), the filter attenuates these frequencies to prevent excessive noise amplification. This adaptive behavior allows it to achieve optimal MSE by balancing the conflicting goals of recovering the original signal and suppressing noise.

---
This concludes the study notes for Minimum Mean Square Error (Wiener) Filtering. Remember to consult your textbooks for more detailed derivations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
