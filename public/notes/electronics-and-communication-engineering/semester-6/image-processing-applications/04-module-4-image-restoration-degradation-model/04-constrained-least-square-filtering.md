---
title: "Constrained Least square filtering"
subject: "IMAGE PROCESSING APPLICATIONS"
module: "Module 4: Image Restoration: Degradation model"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fef79"
status: "completed"
scrapedAt: "2026-05-23T18:01:28.617Z"
---
# IMAGE PROCESSING APPLICATIONS: Module 4 - Image Restoration: Degradation Model

## Topic: Constrained Least Squares Filtering

**Learning Outcomes:**

*   Understand the concept of image restoration and the challenges involved.
*   Explain the degradation model in image processing.
*   Analyze and apply least squares filtering techniques for image restoration.
*   Understand the role of constraints in image restoration.
*   Implement and evaluate constrained least squares filtering.

**Course Outcomes Alignment:**

*   **CO3 (Illustrate the various schemes of image filtering - K5):** This topic directly addresses various filtering schemes for image restoration.
*   **CO4 (Determine the techniques for restoration of images - K5):** Constrained Least Squares Filtering is a key technique for image restoration.

---

### 1. Introduction to Image Restoration

Image restoration aims to recover an image that has been degraded. Degradation can occur due to various reasons, including:

*   **Blurring:** Caused by out-of-focus optics, motion, or atmospheric turbulence.
*   **Noise:** Random variations in pixel intensity introduced during image acquisition or transmission.
*   **Geometric Distortion:** Warping or scaling of the image.

The goal of image restoration is to reverse the degradation process and obtain a close approximation of the original, undegraded image.

---

### 2. The Degradation Model

The degradation process can often be modeled mathematically as a combination of the original image, a degradation function (often a point spread function, PSF), and additive noise. This is typically represented in the spatial domain by the following equation:

$g(x, y) = h(x, y) \ast f(x, y) + \eta(x, y)$

Where:

*   $g(x, y)$: The degraded image.
*   $f(x, y)$: The original, undegraded image.
*   $h(x, y)$: The degradation function (PSF). It describes how the imaging system blurs the image.
*   $\ast$: The convolution operation.
*   $\eta(x, y)$: Additive noise.

**In the Frequency Domain:**

The convolution operation in the spatial domain becomes multiplication in the frequency domain. Let $G(u, v)$, $H(u, v)$, $F(u, v)$, and $\mathcal{N}(u, v)$ be the Fourier Transforms of $g(x, y)$, $h(x, y)$, $f(x, y)$, and $\eta(x, y)$ respectively. The degradation model in the frequency domain is:

$G(u, v) = H(u, v) \cdot F(u, v) + \mathcal{N}(u, v)$

**Textbook Reference:**
*   **Gonzalez & Woods, Chapter 5:** This chapter extensively covers image degradation models, including the convolution process and its representation in the frequency domain.

---

### 3. The Inverse Problem

The core challenge in image restoration is to estimate the original image $f(x, y)$ from the degraded image $g(x, y)$. This is an *ill-posed problem* because:

*   **Non-Uniqueness:** Multiple original images could lead to the same degraded image.
*   **Sensitivity to Noise:** Small amounts of noise can be amplified significantly when trying to reverse the degradation.

---

### 4. Least Squares Filtering

The **Least Squares Filter** (also known as the Wiener Filter when noise statistics are known) is designed to minimize the mean squared error (MSE) between the estimated image and the original image. The objective is to find an estimate $\hat{f}(x, y)$ that minimizes:

$E = \sum_{x=0}^{M-1} \sum_{y=0}^{N-1} [f(x, y) - \hat{f}(x, y)]^2$

Where $M \times N$ is the size of the image.

**Derivation in the Frequency Domain:**

In the frequency domain, the goal is to find $\hat{F}(u, v)$ such that:

$E = \sum_{u=0}^{M-1} \sum_{v=0}^{N-1} |F(u, v) - \hat{F}(u, v)|^2$ is minimized.

We know $G(u, v) = H(u, v) \cdot F(u, v) + \mathcal{N}(u, v)$. If we assume $H(u, v)$ is known, a simple approach to estimate $F(u, v)$ is to divide $G(u, v)$ by $H(u, v)$:

$\hat{F}_{simple}(u, v) = \frac{G(u, v)}{H(u, v)}$

This is the **inverse filter**. However, this filter is highly sensitive to noise and can amplify small values of $H(u, v)$ (especially near the zeros of $H(u, v)$), leading to significant noise amplification.

**The Wiener Filter:**

The Wiener filter is derived by minimizing the MSE between $F(u, v)$ and $\hat{F}(u, v)$, considering both the degradation and the noise. The Wiener filter in the frequency domain is given by:

$\hat{F}(u, v) = \left[ \frac{1}{H(u, v)} \cdot \frac{|H(u, v)|^2}{|H(u, v)|^2 + \frac{S_\eta(u, v)}{S_f(u, v)}} \right] G(u, v)$

Where:

*   $S_\eta(u, v)$: Power spectral density (PSD) of the noise $\eta(x, y)$.
*   $S_f(u, v)$: Power spectral density (PSD) of the original image $f(x, y)$.
*   $|H(u, v)|^2$: Magnitude squared of the degradation function.

The term $\frac{S_\eta(u, v)}{S_f(u, v)}$ is the ratio of noise power to signal power. The Wiener filter adaptively adjusts the inverse filtering based on this ratio.

**Textbook Reference:**
*   **Gonzalez & Woods, Chapter 5.3 (Inverse Filtering):** Discusses the inverse filter and its limitations.
*   **Gonzalez & Woods, Chapter 5.4 (Wiener Filtering):** Provides a detailed derivation and explanation of the Wiener filter.
*   **Jayaraman et al., Chapter 7 (Image Restoration):** Covers various restoration techniques including Wiener filtering.

---

### 5. Constrained Least Squares Filtering

While the Wiener filter is optimal in the MSE sense, it requires knowledge of the noise and image power spectral densities, which are often not known in practice. **Constrained Least Squares (CLS) Filtering** provides an alternative approach when these statistics are unknown or difficult to estimate.

**The CLS Problem Formulation:**

CLS filtering seeks to minimize the squared error criterion (similar to least squares) subject to a constraint on some other measure of the solution. A common constraint is to limit the "smoothness" or energy of the restored image's second derivative, which helps to suppress noise.

We want to find $\hat{f}(x, y)$ that minimizes:

$\sum_{x=0}^{M-1} \sum_{y=0}^{N-1} [g(x, y) - h(x, y) \ast \hat{f}(x, y)]^2$

**Subject to the constraint:**

$\sum_{x=0}^{M-1} \sum_{y=0}^{N-1} [\nabla^2 \hat{f}(x, y)]^2 \le \beta$

Where:

*   $\nabla^2$ is the Laplacian operator.
*   $\beta$ is a non-negative constant that controls the trade-off between fidelity to the degraded image and smoothness of the restored image. A smaller $\beta$ implies a smoother image.

**Derivation of the CLS Filter in the Frequency Domain:**

Using Lagrange multipliers, the constrained optimization problem can be converted into an unconstrained one. In the frequency domain, the CLS filter is given by:

$\hat{F}(u, v) = \left[ \frac{H^*(u, v)}{|H(u, v)|^2 + \lambda |\Omega(u, v)|^2} \right] G(u, v)$

Where:

*   $H^*(u, v)$ is the complex conjugate of $H(u, v)$.
*   $|\Omega(u, v)|^2$ is the frequency response of the Laplacian operator. For the discrete Laplacian, $\Omega(u, v) = -4 + e^{j u} + e^{-j u} + e^{j v} + e^{-j v}$.
*   $\lambda$ is a Lagrange multiplier, related to the constraint parameter $\beta$.

**Relationship to Wiener Filter:**

Notice the similarity between the CLS filter and the Wiener filter. If we consider the ratio of noise PSD to image PSD as a constant $\mu = \frac{S_\eta(u, v)}{S_f(u, v)}$, the Wiener filter can be rewritten as:

$\hat{F}(u, v) = \left[ \frac{1}{H(u, v)} \cdot \frac{|H(u, v)|^2}{|H(u, v)|^2 + \mu} \right] G(u, v) = \left[ \frac{H^*(u, v)}{|H(u, v)|^2 + \mu} \right] G(u, v)$

Comparing this with the CLS filter, we see that the CLS filter is equivalent to the Wiener filter if we set $\lambda |\Omega(u, v)|^2 = \mu$. Since $\lambda$ is a scalar and $|\Omega(u, v)|^2$ is a function of frequency, this equivalence is not exact but illustrates the concept. The CLS filter essentially provides a practical way to achieve a similar outcome to the Wiener filter without needing precise knowledge of the PSDs.

**The Role of the Constraint Parameter ($\beta$ or $\lambda$):**

*   **Small $\beta$ (or small $\lambda$):** The constraint is loosely enforced. The filter is closer to the inverse filter, resulting in less smoothing but potentially more amplified noise.
*   **Large $\beta$ (or large $\lambda$):** The constraint is strictly enforced. The filter results in a smoother image, effectively suppressing more noise, but might sacrifice more image detail.

**Textbook Reference:**
*   **Gonzalez & Woods, Chapter 5.5 (Constrained Least Squares Filtering):** This is the primary reference for this topic, providing the formulation and derivation.
*   **Castleman, Chapter 6 (Image Restoration):** May offer alternative perspectives or discussions on regularization techniques.
*   **Jain, Chapter 6 (Image Restoration):** Likely discusses noise reduction and filtering methods, potentially including CLS or similar regularization approaches.

---

### 6. Implementation of CLS Filtering

The implementation of CLS filtering typically involves the following steps:

1.  **Obtain/Estimate the Degradation Function $H(u, v)$:** This is crucial. It can be derived from knowledge of the degradation process (e.g., motion blur parameters, out-of-focus blur) or estimated from the degraded image itself.
2.  **Obtain the Degraded Image $G(u, v)$:** This is the input image.
3.  **Compute the Fourier Transforms:** Compute the FFT of $G(x, y)$ to get $G(u, v)$ and the FFT of $h(x, y)$ to get $H(u, v)$.
4.  **Choose the Constraint Parameter $\lambda$:** This is a tuning parameter. Experimentation is often required to find an optimal value.
5.  **Construct the CLS Filter:** Compute the filter $C(u, v) = \frac{H^*(u, v)}{|H(u, v)|^2 + \lambda |\Omega(u, v)|^2}$.
6.  **Apply the Filter:** Multiply $G(u, v)$ by $C(u, v)$ to get the estimated image in the frequency domain: $\hat{F}(u, v) = C(u, v) \cdot G(u, v)$.
7.  **Compute the Inverse Fourier Transform:** Compute the Inverse FFT of $\hat{F}(u, v)$ to obtain the restored image $\hat{f}(x, y)$.

**Example:**

Suppose we have a degraded image $g(x, y)$ that was blurred by a motion blur $h(x, y)$ and also corrupted by noise.

*   **Degradation Function $H(u, v)$:** This would be the Fourier Transform of the motion blur kernel.
*   **Laplacian Operator $\Omega(u, v)$:** This is a standard transform related to the second derivative.
*   **Constraint Parameter $\lambda$:** We might start with a small value and gradually increase it to see its effect on noise reduction and detail preservation.

**Important Point to Remember:** The accuracy of the estimated degradation function $H(u, v)$ is critical for the performance of CLS filtering.

---

### 7. Advantages and Disadvantages of CLS Filtering

**Advantages:**

*   **Robustness to Noise:** By incorporating a constraint on the solution's smoothness, it effectively suppresses noise.
*   **No Need for PSDs:** Unlike the Wiener filter, it does not require prior knowledge of image and noise power spectral densities.
*   **Tunable Parameter:** The parameter $\lambda$ allows for control over the trade-off between noise suppression and detail preservation.

**Disadvantages:**

*   **Requires Degradation Function:** Accurate knowledge or estimation of $H(u, v)$ is essential.
*   **Parameter Tuning:** Choosing the optimal value of $\lambda$ can be empirical and time-consuming.
*   **Potential for Blurring:** While it aims to deblur, if the constraint is too strong (large $\lambda$), it can introduce unwanted blurring into the restored image.

---

### 8. Practice Questions and Answers

**Question 1:** Explain the ill-posed nature of image restoration. Why is it a challenge to recover the original image from a degraded one?

**Answer:** Image restoration is ill-posed because the degradation process is often not perfectly invertible. Specifically, it suffers from:
1.  **Non-uniqueness:** Multiple original images could result in the same degraded image.
2.  **Sensitivity to noise:** The inverse operations needed to undo degradation can amplify noise, making it difficult to distinguish between true image features and noise artifacts.

**Question 2:** What is the objective of least squares filtering in image restoration? How does it differ from simple inverse filtering?

**Answer:** The objective of least squares filtering is to minimize the mean squared error between the estimated image and the original image. Simple inverse filtering attempts to directly invert the degradation by dividing the degraded image's Fourier transform by the degradation function's Fourier transform. However, it is highly sensitive to noise and zeros in the degradation function. Least squares filtering, particularly the Wiener filter, provides a more robust solution by incorporating noise and signal statistics to achieve a better MSE.

**Question 3:** Describe the core principle behind Constrained Least Squares Filtering. What role does the constraint play?

**Answer:** Constrained Least Squares (CLS) filtering aims to minimize the squared error between the degraded and restored images, subject to a constraint on another property of the restored image, typically its smoothness (often measured by the squared magnitude of its second derivative). The constraint acts as a regularization term, preventing the amplification of noise by limiting the solution's complexity or "roughness."

**Question 4:** Write down the frequency domain formula for the CLS filter. Identify the key components.

**Answer:** The frequency domain formula for the CLS filter is:
$\hat{F}(u, v) = \left[ \frac{H^*(u, v)}{|H(u, v)|^2 + \lambda |\Omega(u, v)|^2} \right] G(u, v)$

*   $G(u, v)$: Fourier Transform of the degraded image.
*   $H(u, v)$: Fourier Transform of the degradation function (PSF).
*   $H^*(u, v)$: Complex conjugate of $H(u, v)$.
*   $|H(u, v)|^2$: Magnitude squared of $H(u, v)$.
*   $|\Omega(u, v)|^2$: Frequency response of the operator used in the constraint (e.g., Laplacian).
*   $\lambda$: The Lagrange multiplier, controlling the trade-off between fidelity and smoothness.

**Question 5:** How does the choice of $\lambda$ affect the output of a CLS filter?

**Answer:**
*   **Small $\lambda$:** The constraint is less strict, allowing for more fidelity to the degraded image but potentially higher noise levels. The output is closer to inverse filtering.
*   **Large $\lambda$:** The constraint is more strict, leading to a smoother output that suppresses more noise but might also blur out fine image details.

**Question 6:** What is the main practical advantage of CLS filtering over Wiener filtering?

**Answer:** The main practical advantage of CLS filtering is that it does not require prior knowledge of the image and noise power spectral densities, which are often difficult to obtain. It relies on a tunable parameter ($\lambda$) to control the restoration process.

---

### 9. Summary and Key Takeaways

*   Image restoration aims to recover an original image from its degraded version.
*   The degradation process is often modeled as convolution with a PSF and additive noise.
*   The inverse problem is ill-posed due to non-uniqueness and sensitivity to noise.
*   Least Squares Filtering (like Wiener Filter) minimizes MSE but requires PSDs.
*   Constrained Least Squares (CLS) Filtering minimizes squared error subject to a smoothness constraint, making it practical when PSDs are unknown.
*   The CLS filter formula involves the degradation function, its conjugate, its squared magnitude, the constraint operator's frequency response, and a tuning parameter $\lambda$.
*   The parameter $\lambda$ controls the trade-off between fidelity to the degraded image and the smoothness (noise reduction) of the restored image.
*   Accurate estimation of the degradation function $H(u, v)$ is crucial for CLS filtering performance.

This concludes the notes on Constrained Least Squares Filtering. Remember to refer to your textbooks for more in-depth derivations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
