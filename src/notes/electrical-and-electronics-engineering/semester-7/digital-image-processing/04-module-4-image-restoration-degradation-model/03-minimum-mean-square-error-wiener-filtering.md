---
title: "Minimum Mean Square Error (Wiener) Filtering"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Restoration: Degradation model"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36934"
status: "completed"
scrapedAt: "2026-05-23T16:35:36.689Z"
---
# DIGITAL IMAGE PROCESSING: Module 4 - Image Restoration: Degradation Model

## Topic: Minimum Mean Square Error (Wiener) Filtering

This module delves into the critical area of **Image Restoration**, focusing on techniques to recover a degraded image and approximate the original, uncorrupted image. We will specifically explore the **Minimum Mean Square Error (MMSE) or Wiener Filtering** approach, a powerful method for image restoration.

---

### 1. Introduction to Image Restoration and Degradation Model

**What is Image Restoration?**
Image restoration aims to recover an image that has been degraded by noise or by a blurring process. The goal is to approximate the original image as closely as possible.

**The Degradation Model:**
The fundamental assumption in image restoration is that the degraded image, $g(x, y)$, can be modeled as the result of an original image, $f(x, y)$, that has been blurred by a **blurring function** (often represented by an impulse response $h(x, y)$) and corrupted by **noise**, $\eta(x, y)$.

The degradation process can be represented in the spatial domain as:

$g(x, y) = h(x, y) \circledast f(x, y) + \eta(x, y)$

Where:
*   $g(x, y)$ is the degraded image.
*   $f(x, y)$ is the original, uncorrupted image.
*   $h(x, y)$ is the spatial representation of the blurring function (also known as the point spread function or PSF).
*   $\circledast$ denotes convolution.
*   $\eta(x, y)$ is the additive noise.

In the frequency domain, the degradation model becomes:

$G(u, v) = H(u, v) F(u, y) + N(u, v)$

Where:
*   $G(u, v)$, $F(u, v)$, $H(u, v)$, and $N(u, v)$ are the Fourier Transforms of $g(x, y)$, $f(x, y)$, $h(x, y)$, and $\eta(x, y)$, respectively.

**CO1 Alignment:** Understanding this degradation model is crucial for recognizing the components of an image processing system and how they can be affected.

---

### 2. The Problem of Image Restoration

The core challenge in image restoration is to **estimate the original image $f(x, y)$ from the degraded image $g(x, y)$**. This is an **ill-posed problem** because:

*   **Blurring is often unknown:** The blurring function $h(x, y)$ is frequently not known precisely.
*   **Noise is unknown:** The noise $\eta(x, y)$ is also unknown.
*   **Blurring is irreversible:** Even if $h(x, y)$ were known and there was no noise, deconvolution (the inverse operation of convolution) is generally not uniquely solvable.

Therefore, image restoration techniques focus on finding an **estimate** of the original image, denoted as $\hat{f}(x, y)$, that is "close" to $f(x, y)$ in some sense.

---

### 3. Minimum Mean Square Error (Wiener) Filtering

**Concept:**
The Wiener filter is an optimal linear filter in the sense that it minimizes the **mean square error (MSE)** between the estimated image and the original image. It balances the desire to remove blur with the need to avoid amplifying noise.

**Mean Square Error (MSE):**
The MSE is defined as the expected value of the squared difference between the estimated and original images:

$MSE = E[ |f(x, y) - \hat{f}(x, y)|^2 ]$

**Derivation of the Wiener Filter (Conceptual):**
The derivation of the Wiener filter involves statistical properties of the original image and the noise. The Wiener filter is designed in the frequency domain.

For a linear spatially invariant (LSI) system, the estimated image $\hat{f}(x, y)$ is obtained by convolving the degraded image $g(x, y)$ with a filter function $w(x, y)$:

$\hat{f}(x, y) = w(x, y) \circledast g(x, y)$

In the frequency domain:

$\hat{F}(u, v) = W(u, v) G(u, v)$

The Wiener filter $W(u, v)$ is derived by minimizing the MSE in the frequency domain. Assuming the noise and original image are uncorrelated, the optimal Wiener filter is given by:

$W(u, v) = \frac{H^*(u, v) S_f(u, v)}{|H(u, v)|^2 S_f(u, v) + S_\eta(u, v)}$

Where:
*   $H(u, v)$ is the Fourier Transform of the blurring function $h(x, y)$.
*   $H^*(u, v)$ is the complex conjugate of $H(u, v)$.
*   $S_f(u, v)$ is the power spectral density (PSD) of the original image $f(x, y)$.
*   $S_\eta(u, v)$ is the power spectral density (PSD) of the noise $\eta(x, y)$.

**Key Components of the Wiener Filter Formula:**

*   **Numerator:** $H^*(u, v) S_f(u, v)$
    *   $H^*(u, v)$: This term attempts to "undo" the blurring by compensating for the phase and magnitude distortions introduced by $H(u, v)$.
    *   $S_f(u, v)$: This term weights the restoration based on the spectral content of the original image. It gives more importance to frequencies where the original image has significant energy.

*   **Denominator:** $|H(u, v)|^2 S_f(u, v) + S_\eta(u, v)$
    *   $|H(u, v)|^2 S_f(u, v)$: Represents the power spectrum of the blurred image.
    *   $S_\eta(u, v)$: Represents the power spectrum of the noise.

**Interpretation of the Wiener Filter:**
The Wiener filter can be seen as a ratio of the "desired" signal power to the "total" signal power at each frequency.

*   **High SNR (Signal-to-Noise Ratio) frequencies:** When $S_\eta(u, v)$ is small relative to $|H(u, v)|^2 S_f(u, v)$, the filter approximates the inverse filter $1/H(u, v)$, effectively removing blur.
*   **Low SNR frequencies:** When $S_\eta(u, v)$ is large relative to $|H(u, v)|^2 S_f(u, v)$, the filter attenuates these frequencies to avoid amplifying noise.

**CO2 Alignment:** This section involves understanding mathematical transforms (Fourier Transform) and analyzing concepts like power spectral densities.

**CO4 Alignment:** This is directly related to analyzing filtering schemes for image restoration.

---

### 4. Practical Implementation Considerations

**1. Estimating the Blurring Function $H(u, v)$:**
*   **Known Blur:** If the blur is known (e.g., motion blur of a specific length and angle, or out-of-focus blur), $h(x, y)$ can be modeled, and its Fourier Transform $H(u, v)$ can be calculated.
*   **Blind Deconvolution:** If the blur is unknown, estimation techniques are required, making the problem significantly more complex (often referred to as blind deconvolution). This involves estimating both $f(x, y)$ and $h(x, y)$ simultaneously.

**2. Estimating the Power Spectral Densities $S_f(u, v)$ and $S_\eta(u, v)$:**
*   **Noise PSD ($S_\eta(u, v)$):** If the noise characteristics are known (e.g., additive white Gaussian noise), its PSD can be determined. For white noise, $S_\eta(u, v)$ is a constant.
*   **Image PSD ($S_f(u, v)$):** Estimating the image PSD is more challenging. Common approaches include:
    *   **Assuming a model:** Often, the image is assumed to have a specific spectral characteristic (e.g., a decaying spectrum with frequency). A common model used is:
        $S_f(u, v) = \frac{A}{1 + (a^2(u^2 + v^2))^b}$
        where A, a, and b are parameters that can be adjusted to approximate the image's spectral content.
    *   **Empirical estimation:** If a sample of the original image or a representative image is available, its PSD can be estimated.

**3. The Noise-to-Signal Ratio (NSR) Formulation:**
A more common and practical form of the Wiener filter is derived using the noise-to-signal ratio (NSR):

$W(u, v) = \frac{1}{H(u, v)} \frac{S_f(u, v)}{S_f(u, v) + \frac{S_\eta(u, v)}{|H(u, v)|^2}} = \frac{1}{H(u, v)} \frac{1}{1 + \frac{S_\eta(u, v)}{|H(u, v)|^2 S_f(u, v)}}$

Let $K = \frac{S_\eta(u, v)}{S_f(u, v)}$ be the ratio of noise power to signal power (often approximated as a constant $K_0$ for simplicity across frequencies, though this is a strong assumption). Then the filter can be written as:

$W(u, v) = \frac{H^*(u, v)}{|H(u, v)|^2 + K}$

Where $K$ is a parameter that controls the trade-off between deblurring and noise suppression.
*   **Small $K$:** Emphasizes deblurring, potentially amplifying noise.
*   **Large $K$:** Emphasizes noise suppression, potentially leading to a smoother but less sharp image.

This form is often written as:

$W(u, v) = \frac{H^*(u, v)}{|H(u, v)|^2 + \frac{S_\eta(u, v)}{S_f(u, v)}}$

Often, the ratio $\frac{S_\eta(u, v)}{S_f(u, v)}$ is approximated by a constant $K$ or by a function estimated from the image data.

**Important Note:** The Wiener filter is an **unconstrained linear filter**. It does not impose non-negativity constraints, which can sometimes lead to negative pixel values in the restored image.

**Textbook Reference:** Gonzalez and Woods (4th Ed.) Chapter 7, "Image Restoration," specifically section 7.1.2 on "Inverse Filtering" and section 7.1.3 on "Minimum Mean Square Error (Wiener) Filtering."

---

### 5. Examples and Illustrations

**Example Scenario:**
Consider a degraded image $g(x, y)$ obtained from an original image $f(x, y)$ by motion blur $h(x, y)$ and additive Gaussian noise $\eta(x, y)$.

*   **Motion Blur PSF:** $h(x, y)$ could be a line segment of a certain length and orientation.
*   **Noise:** $\eta(x, y)$ is assumed to be Additive White Gaussian Noise (AWGN).

**Steps for Wiener Filtering:**

1.  **Obtain $H(u, v)$:** Calculate the Fourier Transform of the known motion blur PSF $h(x, y)$.
2.  **Estimate $S_\eta(u, v)$:** For AWGN, $S_\eta(u, v)$ is a constant.
3.  **Estimate $S_f(u, v)$:** This is the trickiest part. Assume a spectral model or try to estimate it.
4.  **Calculate $W(u, v)$:** Plug the estimated values into the Wiener filter formula.
5.  **Compute $\hat{F}(u, v)$:** Multiply $W(u, v)$ with $G(u, v)$ (the FFT of the degraded image).
6.  **Obtain $\hat{f}(x, y)$:** Compute the inverse Fourier Transform of $\hat{F}(u, v)$.

**Visual Example (Conceptual):**

Imagine an image of a moving car.
*   **Degraded Image:** The car appears blurred horizontally. There might also be random speckles (noise).
*   **Wiener Filter's Action:**
    *   It will try to "sharpen" the image by counteracting the horizontal blurring.
    *   At frequencies where the blur is severe, it will amplify the signal but also the noise.
    *   At frequencies where the noise is dominant, it will attenuate the signal to prevent excessive noise amplification.

The result should be a clearer image than the degraded one, but likely not perfectly sharp, with reduced noise compared to a simple inverse filter.

**CO2 & CO4 Alignment:** This reinforces the application of mathematical transforms and filtering concepts.

---

### 6. Comparison with Other Filters

*   **Inverse Filter:**
    *   **Formula:** $W_{inv}(u, v) = \frac{1}{H(u, v)}$
    *   **Goal:** Perfectly reverse the blurring.
    *   **Limitation:** Highly sensitive to noise. Amplifies noise significantly, especially at frequencies where $H(u, v)$ is small.
    *   **Wiener vs. Inverse:** Wiener filter is a compromise between inverse filtering and noise suppression.

*   **Geometric Mean Filter:**
    *   **Formula (in spatial domain):** $\hat{f}(x, y) = [ \prod_{i=1}^{N^2} g_i(x, y) ]^{1/N^2}$ (where $N^2$ is the size of the filter window)
    *   **Goal:** Primarily used for noise reduction, especially for multiplicative noise.
    *   **Wiener vs. Geometric Mean:** Wiener filter is specifically designed for the degradation model $g = h \circledast f + \eta$, whereas geometric mean is more suited for noise reduction.

*   **Median Filter:**
    *   **Goal:** Effective at removing salt-and-pepper noise and preserving edges.
    *   **Wiener vs. Median:** Median filter is a non-linear filter and works by replacing a pixel's value with the median of its neighbors. Wiener is linear and operates in the frequency domain, attempting to remove blur and noise simultaneously based on statistical properties.

**CO4 Alignment:** Comparing filtering techniques is key to analyzing their effectiveness.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the primary goal of image restoration?

**Answer:**
The primary goal of image restoration is to recover or reconstruct an image that has been degraded by noise or blurring processes, approximating the original uncorrupted image as closely as possible.

**Question 2:**
Write down the degradation model of an image in both the spatial and frequency domains.

**Answer:**
*   **Spatial Domain:** $g(x, y) = h(x, y) \circledast f(x, y) + \eta(x, y)$
*   **Frequency Domain:** $G(u, v) = H(u, v) F(u, v) + N(u, v)$

**Question 3:**
Explain the fundamental principle behind the Minimum Mean Square Error (Wiener) filter.

**Answer:**
The Wiener filter is an optimal linear filter designed to minimize the mean square error (MSE) between the estimated image and the original image. It achieves this by balancing the removal of blur with the suppression of noise, based on the statistical properties (power spectral densities) of the original image and the noise.

**Question 4:**
Derive the Wiener filter in the frequency domain, assuming uncorrelated signal and noise.

**Answer:**
The Wiener filter is given by:
$W(u, v) = \frac{H^*(u, v) S_f(u, v)}{|H(u, v)|^2 S_f(u, v) + S_\eta(u, v)}$

**Question 5:**
What are the main challenges in implementing a Wiener filter?

**Answer:**
The main challenges include:
1.  **Estimating the blurring function $H(u, v)$:** It is often unknown and needs to be estimated, making the problem a blind deconvolution problem.
2.  **Estimating the power spectral densities $S_f(u, v)$ and $S_\eta(u, v)$:** Accurate estimation of these statistical properties is crucial for the filter's performance.

**Question 6 (Practical Exercise):**
Suppose you have a known blurring function $H(u,v)$ and you know the noise is AWGN. You estimate the image's power spectral density to be $S_f(u, v) = \frac{1}{1 + (u^2 + v^2)}$. If $S_\eta(u, v) = N_0$ (a constant), formulate the Wiener filter expression.

**Answer:**
The Wiener filter is:
$W(u, v) = \frac{H^*(u, v) S_f(u, v)}{|H(u, v)|^2 S_f(u, v) + S_\eta(u, v)}$

Substituting the given PSDs:
$W(u, v) = \frac{H^*(u, v) \frac{1}{1 + (u^2 + v^2)}}{|H(u, v)|^2 \frac{1}{1 + (u^2 + v^2)} + N_0}$

To simplify further, we can multiply the numerator and denominator by $(1 + (u^2 + v^2))$:
$W(u, v) = \frac{H^*(u, v)}{|H(u, v)|^2 + N_0 (1 + u^2 + v^2)}$

This is a common form where the denominator includes the term related to noise power and the blurring function's magnitude squared, plus a term that represents the image's spectral decay.

---

### 8. Important Points to Remember

*   **Wiener filter minimizes MSE.**
*   It's a **linear, spatially invariant (LSI)** filter.
*   It requires knowledge or estimation of the **blurring function ($H(u, v)$)** and the **power spectral densities ($S_f(u, v), S_\eta(u, v)$)**.
*   It balances **deblurring** and **noise suppression**.
*   It is a compromise between the **inverse filter** (which amplifies noise) and simply **averaging** (which doesn't deblur).
*   The parameter $K$ (or the ratio of PSDs) in the simplified form controls the **trade-off**.
*   It does **not enforce non-negativity constraints**, which can lead to negative pixel values.

---

### 9. Alignment with Course Outcomes

*   **CO1: Understand different components of image processing system (Knowledge Level: K2)**
    *   The degradation model directly explains how original images are transformed into degraded images by components like blur kernels and noise sources, forming part of the image processing system.
*   **CO2: Analyse the various concepts and mathematical transforms necessary for image processing (Knowledge Level: K3)**
    *   The Wiener filter's derivation and application heavily rely on the Fourier Transform and the concepts of power spectral densities, requiring analytical understanding.
*   **CO4: Analyze the filtering and restoration of images (Knowledge Level: K3)**
    *   This entire topic is dedicated to analyzing a specific, powerful filtering and restoration technique, comparing its performance and limitations.

---
This comprehensive set of notes provides a detailed understanding of the Minimum Mean Square Error (Wiener) Filtering technique in Digital Image Processing, aligning with the specified learning outcomes and course objectives. Remember to consult the provided textbooks for further depth and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
