---
title: "Minimum Mean Square Error (Wiener) Filtering"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Restoration: Degradation model"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff51b"
status: "completed"
scrapedAt: "2026-05-23T18:06:53.588Z"
---
# DIGITAL IMAGE PROCESSING - Module 4: Image Restoration: Degradation Model

## Topic: Minimum Mean Square Error (Wiener) Filtering

---

### 1. Introduction to Image Restoration

*   **Goal:** To recover a degraded image $f(x, y)$ back to its original form $\hat{f}(x, y)$.
*   **Degradation Process:** The original image $f(x, y)$ is degraded by a **degradation function** $h(x, y)$ and then corrupted by **additive noise** $\eta(x, y)$. The degraded image is denoted by $g(x, y)$.
*   **Degradation Model (in Spatial Domain):**
    $g(x, y) = h(x, y) * f(x, y) + \eta(x, y)$
    where '*' denotes convolution.

*   **Degradation Model (in Frequency Domain):**
    $G(u, v) = H(u, v) F(u, v) + N(u, v)$
    where $G(u, v)$, $H(u, v)$, $F(u, v)$, and $N(u, v)$ are the Fourier transforms of $g(x, y)$, $h(x, y)$, $f(x, y)$, and $\eta(x, y)$ respectively. $H(u, v)$ is the Fourier transform of the degradation function $h(x, y)$.

*   **The Restoration Problem:** Given the degraded image $g(x, y)$, and knowledge of the degradation function $h(x, y)$ and noise $\eta(x, y)$, the goal is to estimate the original image $f(x, y)$.

*(Reference: Gonzalez & Woods, 4th Ed., Chapter 5.1)*

---

### 2. Understanding Error Metrics

Before delving into Wiener filtering, it's crucial to understand how we measure the quality of a restored image. We aim to minimize the difference between the original image and the restored image. Common error metrics include:

*   **Mean Square Error (MSE):**
    $MSE = E[(f(x, y) - \hat{f}(x, y))^2]$
    This measures the average squared difference between the original and restored images.

*   **Root Mean Square Error (RMSE):**
    $RMSE = \sqrt{MSE}$
    This is the square root of MSE, bringing the error back to the intensity range of the image.

*   **Signal-to-Noise Ratio (SNR):**
    $SNR = \frac{\sigma_f^2}{\sigma_\eta^2}$
    where $\sigma_f^2$ is the variance of the original image and $\sigma_\eta^2$ is the variance of the noise. Higher SNR indicates less noise relative to the signal.

*(Reference: Gonzalez & Woods, 4th Ed., Chapter 5.2)*

---

### 3. Minimum Mean Square Error (Wiener) Filtering

#### 3.1 Concept and Objective

The **Minimum Mean Square Error (Wiener) Filter** is an optimal linear filter in the sense that it minimizes the mean square error between the original image and the estimated image. It is designed to restore images corrupted by **linear degradation** and **additive noise**.

The objective is to find an estimate $\hat{f}(x, y)$ of the original image $f(x, y)$ such that the expected value of the squared error, $E[|f(x, y) - \hat{f}(x, y)|^2]$, is minimized.

*(Reference: Gonzalez & Woods, 4th Ed., Chapter 5.4.1)*

#### 3.2 The Wiener Filter in the Frequency Domain

The Wiener filter operates in the frequency domain. The filter's transfer function, denoted by $W(u, v)$, is designed to be applied to the Fourier transform of the degraded image $G(u, v)$ to obtain the Fourier transform of the restored image $\hat{F}(u, v)$:

$\hat{F}(u, v) = W(u, v) G(u, v)$

The Wiener filter's transfer function is derived by minimizing the MSE. In the frequency domain, the relationship is:

$\hat{F}(u, v) = W(u, v) [H(u, v) F(u, v) + N(u, v)]$

The Wiener filter's transfer function is given by:

$$W(u, v) = \frac{H^*(u, v)}{|H(u, v)|^2 + \frac{S_\eta(u, v)}{S_f(u, v)}}$$

Where:
*   $H(u, v)$: Fourier transform of the degradation function $h(x, y)$.
*   $H^*(u, v)$: Complex conjugate of $H(u, v)$.
*   $|H(u, v)|^2$: Magnitude squared of $H(u, v)$.
*   $S_\eta(u, v)$: Power spectral density (PSD) of the noise $\eta(x, y)$.
*   $S_f(u, v)$: Power spectral density (PSD) of the original image $f(x, y)$.

*(Reference: Gonzalez & Woods, 4th Ed., Eq. 5.4-4)*

#### 3.3 Understanding the Components of the Wiener Filter

*   **$H^*(u, v) / |H(u, v)|^2$:** This part resembles the inverse filter. If there were no noise, the Wiener filter would effectively be the inverse filter, attempting to reverse the degradation.
*   **$S_\eta(u, v) / S_f(u, v)$:** This term is crucial. It's the ratio of the noise PSD to the image PSD.
    *   **High Noise, Low Image Signal:** If the noise is strong relative to the image signal (high $S_\eta / S_f$), this term becomes large. The Wiener filter will then reduce the contribution of the inverse filter (by making the denominator larger) to avoid amplifying the noise excessively.
    *   **Low Noise, High Image Signal:** If the noise is weak relative to the image signal (low $S_\eta / S_f$), this term becomes small. The Wiener filter approaches the inverse filter, doing a better job of reversing the degradation.

#### 3.4 Simplified Wiener Filter

In practice, it's often difficult to know the exact PSDs $S_\eta(u, v)$ and $S_f(u, v)$. We often approximate them. A common simplification is to assume that the noise is **uncorrelated** with the image and that both the noise and image signals are **wide-sense stationary**.

A further simplification can be made by considering the ratio of variances:

$$ \frac{S_\eta(u, v)}{S_f(u, v)} \approx \frac{\sigma_\eta^2}{\sigma_f^2} = K $$

where $K$ is a constant representing the ratio of noise variance to image variance. This simplified form assumes the noise is uniformly distributed across frequencies and that the image signal is also relatively uniform.

The simplified Wiener filter then becomes:

$$W(u, v) = \frac{H^*(u, v)}{|H(u, v)|^2 + K}$$

*(Reference: Gonzalez & Woods, 4th Ed., Eq. 5.4-8)*

**Important Note:** This simplification works best for stationary noise and when the noise variance is significantly smaller than the image variance. For more complex noise or image characteristics, the full PSD ratio is preferred.

#### 3.5 Relationship to Other Filters

*   **Inverse Filter:** If $S_\eta(u, v) = 0$ (no noise), the Wiener filter becomes the inverse filter: $W(u, v) = 1 / H(u, v)$.
*   **Homomorphic Filter:** The Wiener filter is *not* a homomorphic filter. Homomorphic filtering is used for multiplicative degradation.
*   **Constrained Least Squares Filter:** The Wiener filter minimizes MSE directly. The Constrained Least Squares filter minimizes an error criterion subject to a constraint, often on the smoothness of the restored image.

*(Reference: Gonzalez & Woods, 4th Ed., Chapter 5.4.1)*

---

### 4. Steps for Applying the Wiener Filter

1.  **Obtain the Degraded Image:** This is the input image $g(x, y)$.
2.  **Estimate the Degradation Function:** Determine $h(x, y)$ and its Fourier transform $H(u, v)$. This often involves analyzing sample regions of the degradation or having prior knowledge.
3.  **Estimate the Noise Power Spectral Density (PSD):** Determine $S_\eta(u, v)$. This might involve analyzing a noise-only region of the image or making assumptions about the noise type (e.g., Gaussian, Salt & Pepper).
4.  **Estimate the Original Image PSD:** Determine $S_f(u, v)$. This is often the most challenging step. We might assume a model for the image (e.g., exponential, uniform) or estimate it from the degraded image itself.
5.  **Calculate the Wiener Filter Transfer Function:** Using the formula:
    $$W(u, v) = \frac{H^*(u, v)}{|H(u, v)|^2 + \frac{S_\eta(u, v)}{S_f(u, v)}}$$
    or the simplified version:
    $$W(u, v) = \frac{H^*(u, v)}{|H(u, v)|^2 + K}$$
    where $K = \sigma_\eta^2 / \sigma_f^2$.
6.  **Transform the Degraded Image to the Frequency Domain:** Compute $G(u, v) = \mathcal{F}\{g(x, y)\}$.
7.  **Apply the Filter:** Compute $\hat{F}(u, v) = W(u, v) G(u, v)$.
8.  **Transform Back to the Spatial Domain:** Compute $\hat{f}(x, y) = \mathcal{F}^{-1}\{\hat{F}(u, v)\}$.

*(Reference: Gonzalez & Woods, 4th Ed., Chapter 5.4)*

---

### 5. Example Scenario: Motion Blur and Gaussian Noise

Let's consider an image degraded by motion blur and additive Gaussian noise.

*   **Degradation Model:**
    $g(x, y) = h(x, y) * f(x, y) + \eta(x, y)$

*   **Motion Blur Function $h(x, y)$:** A simple linear motion blur of length $L$ in the horizontal direction can be modeled as:
    $h(x, y) = \begin{cases} 1/L & \text{if } 0 \le x \le L-1, y=0 \\ 0 & \text{otherwise} \end{cases}$
    The Fourier transform of this is:
    $H(u, v) = \frac{\sin(\pi u L)}{L \sin(\pi u)}$

*   **Noise:** Additive Gaussian noise with variance $\sigma_\eta^2$. The PSD of Gaussian noise is constant across all frequencies (assuming zero mean). So, $S_\eta(u, v) = \sigma_\eta^2$.

*   **Original Image:** Assume the original image has a variance of $\sigma_f^2$. We can approximate $S_f(u, v) \approx \sigma_f^2$.

*   **Wiener Filter Transfer Function (Simplified):**
    $$W(u, v) = \frac{H^*(u, v)}{|H(u, v)|^2 + \frac{\sigma_\eta^2}{\sigma_f^2}}$$
    $$W(u, v) = \frac{\frac{\sin(\pi u L)}{L \sin(\pi u)}}{\left(\frac{\sin(\pi u L)}{L \sin(\pi u)}\right)^2 + K}$$
    where $K = \sigma_\eta^2 / \sigma_f^2$.

**Illustrative Example:**
Imagine an image with motion blur ($L=10$) and relatively low noise.
*   If $K$ is small (low noise), $W(u, v)$ will be close to $1/H(u, v)$, effectively trying to unblur the image. However, $H(u, v)$ has zeros and near-zeros, which will cause significant amplification of noise and ringing artifacts.
*   If $K$ is large (high noise), $W(u, v)$ will be smaller, especially at frequencies where $H(u, v)$ is small, thus suppressing noise at the cost of blurring the image more.

The Wiener filter strikes a balance by attenuating frequencies where the noise is significant relative to the image signal, while also considering the degradation function.

*(Reference: Gonzalez & Woods, 4th Ed., Chapter 5.4.2)*

---

### 6. Advantages and Disadvantages of Wiener Filtering

**Advantages:**

*   **Optimal in MSE Sense:** Provides the best possible linear estimate in terms of minimizing mean square error.
*   **Balances Deblurring and Noise Reduction:** Effectively restores images corrupted by both linear degradation and additive noise.
*   **Adaptable:** The filter's behavior can be adjusted by changing the ratio of noise to image power spectra (or the constant $K$).

**Disadvantages:**

*   **Requires Knowledge of Degradation and Noise Statistics:** Accurate estimation of $H(u, v)$, $S_\eta(u, v)$, and $S_f(u, v)$ is crucial for optimal performance. In real-world scenarios, these are often unknown or difficult to estimate precisely.
*   **Computational Complexity:** Involves Fourier transforms, which can be computationally intensive for large images.
*   **Can still produce artifacts:** While it minimizes MSE, it might not always produce visually pleasing results. Artifacts like ringing can still occur, especially if the noise or degradation estimates are inaccurate.
*   **Assumes Linearity and Additive Noise:** Not directly applicable to non-linear degradations or multiplicative noise (though it can be adapted with transformations).

*(Reference: Gonzalez & Woods, 4th Ed., Chapter 5.4.4)*

---

### 7. Relationship to Course Outcomes

*   **CO1: Explain different components of image processing system (Knowledge Level: K2)**
    *   The degradation model ($h(x, y)$, $\eta(x, y)$) and the restoration process (using a filter $W(u, v)$) are components of an image processing system.
*   **CO2: Analyse the various concepts and mathematical transforms necessary for image processing (Knowledge Level: K3)**
    *   Understanding Fourier transforms, power spectral density, and error metrics (MSE) is essential for analyzing and applying Wiener filtering.
*   **CO4: Analyze the filtering and restoration of images (Knowledge Level: K3)**
    *   This entire topic is dedicated to analyzing and applying a specific image restoration filter (Wiener filter) to combat degradation and noise. We analyze its behavior based on noise and image statistics.

---

### 8. Practice Questions

1.  **Define Minimum Mean Square Error (Wiener) filtering.** What is its primary objective? (K2)
2.  **State the transfer function of the Wiener filter in the frequency domain.** Explain the role of each term in the formula. (K2)
3.  **Consider an image degraded by motion blur and additive white Gaussian noise.** How would you model the degradation function $H(u, v)$ and the noise PSD $S_\eta(u, v)$? (K3)
4.  **Why is the Wiener filter considered "optimal"?** What criterion does it optimize? (K2)
5.  **What are the major challenges in applying the Wiener filter in practice?** (K3)
6.  **If the ratio of noise power to image power ($S_\eta(u, v) / S_f(u, v)$) is very high across all frequencies, how would this affect the Wiener filter's response compared to an inverse filter?** (K3)
7.  **Derive the simplified Wiener filter transfer function assuming $S_\eta(u, v) / S_f(u, v) = K$ (a constant).** (K3)

---

### 9. Answers to Practice Questions

1.  **Definition and Objective:** Minimum Mean Square Error (Wiener) filtering is a linear filter designed to minimize the mean square error between the original image and the restored image. Its objective is to recover an image degraded by linear degradation and additive noise as closely as possible to the original image, in an MSE sense.
2.  **Transfer Function:** The transfer function of the Wiener filter is:
    $$W(u, v) = \frac{H^*(u, v)}{|H(u, v)|^2 + \frac{S_\eta(u, v)}{S_f(u, v)}}$$
    *   $H^*(u, v)$: Complex conjugate of the degradation function's Fourier transform.
    *   $|H(u, v)|^2$: Magnitude squared of the degradation function's Fourier transform. This term in the denominator attempts to invert the degradation.
    *   $S_\eta(u, v)$: Power spectral density of the noise.
    *   $S_f(u, v)$: Power spectral density of the original image.
    *   The ratio $\frac{S_\eta(u, v)}{S_f(u, v)}$ represents the relative strength of the noise to the signal at each frequency. It acts as a regularization term, reducing the filter's gain at frequencies where noise is dominant or image signal is weak.
3.  **Modeling for Motion Blur and Gaussian Noise:**
    *   **Degradation Function $H(u, v)$:** For a linear motion blur of length $L$ horizontally, $H(u, v) = \frac{\sin(\pi u L)}{L \sin(\pi u)}$.
    *   **Noise PSD $S_\eta(u, v)$:** For white Gaussian noise, the PSD is constant across all frequencies, $S_\eta(u, v) = \sigma_\eta^2$, where $\sigma_\eta^2$ is the variance of the noise.
4.  **Optimality:** The Wiener filter is considered "optimal" because it minimizes the mean square error (MSE) between the original image and the restored image, assuming the degradation is linear and the noise is additive. It provides the best linear estimate in this specific statistical sense.
5.  **Challenges in Application:**
    *   **Accurate Estimation:** The primary challenge is accurately estimating the degradation function $H(u, v)$ and the power spectral densities of the noise $S_\eta(u, v)$ and the original image $S_f(u, v)$. These are often unknown in real-world scenarios.
    *   **Computational Cost:** Fourier transforms and complex calculations can be computationally intensive.
    *   **Artifacts:** Despite its optimality, it can still produce artifacts like ringing, especially with inaccurate parameter estimates.
    *   **Assumptions:** It relies on assumptions of linearity and additive noise, which may not always hold true.
6.  **Effect of High Noise-to-Image Ratio:** If $S_\eta(u, v) / S_f(u, v)$ is very high, the denominator of the Wiener filter, $|H(u, v)|^2 + \frac{S_\eta(u, v)}{S_f(u, v)}$, will be dominated by the noise term. This will significantly reduce the overall gain of the filter, especially at frequencies where $|H(u, v)|^2$ is small (i.e., frequencies that are heavily attenuated by the degradation). Compared to an inverse filter (which would have $1/H(u, v)$), the Wiener filter will suppress noise more aggressively, but at the cost of increased blurring. The inverse filter would try to perfectly invert the degradation but would amplify the noise to an unacceptable level.
7.  **Simplified Wiener Filter Derivation:** Assuming $S_\eta(u, v) / S_f(u, v) \approx K$ (constant), the Wiener filter becomes:
    $$W(u, v) = \frac{H^*(u, v)}{|H(u, v)|^2 + K}$$
    This simplification is often used when the exact PSDs are unknown, and a constant ratio (or a simplified model of it) is assumed.

---
This concludes the study notes on Minimum Mean Square Error (Wiener) Filtering. Remember to refer to your textbooks for more in-depth explanations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
