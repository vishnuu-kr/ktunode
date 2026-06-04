---
title: "Image Restoration: Degradation model"
subject: "IMAGE PROCESSING APPLICATIONS"
module: "Module 4: Image Restoration: Degradation model"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fef76"
status: "completed"
scrapedAt: "2026-05-23T18:01:26.486Z"
---
# Image Processing Applications: Module 4 - Image Restoration: Degradation Model

## Introduction to Image Restoration

Image restoration aims to recover an original image that has been degraded by various factors. This module focuses on understanding the nature of these degradations by modeling them. By understanding the degradation process, we can then develop techniques to reverse it.

### Learning Outcomes Covered:

*   Understanding the fundamental degradation model in image restoration.
*   Identifying common types of image degradations.
*   Formulating the mathematical representation of the degradation process.
*   Relating the degradation model to the Course Outcomes, particularly CO4.

### Course Outcome Alignment:

*   **CO4: Determine the techniques for restoration of images (Knowledge Level: K5)**
    *   This module lays the foundational understanding necessary to "determine the techniques for restoration of images." By modeling the degradation, we identify the inverse problem we need to solve to restore the image.

## 4.1 The Degradation Model

The core idea in image restoration is to reverse the degradation process that corrupted the original image. We can represent this process using a mathematical model.

### Key Concept: Degradation Process

The degradation process transforms an original image, let's denote it as $f(x, y)$, into a degraded image, $g(x, y)$. This transformation is typically a combination of a *degradation function* and *noise*.

**Mathematical Model:**

The general form of the degradation model is given by:

$g(x, y) = H[f(x, y)] + \eta(x, y)$

Where:

*   $g(x, y)$: The observed degraded image.
*   $f(x, y)$: The original, uncorrupted image.
*   $H[\cdot]$: A degradation function (operator) that represents the blurring or distortion process.
*   $\eta(x, y)$: An additive noise term representing random variations introduced during the degradation process.

**Important Note:** The degradation function $H[\cdot]$ can be linear or nonlinear, and often space-variant or space-invariant. For simplicity and analytical tractability, we often assume it to be linear and space-invariant.

### 4.1.1 Linear, Space-Invariant Degradation Model

When the degradation function is linear and space-invariant, the model can be expressed using convolution.

**Linearity:** If $H$ is a linear operator, then $H[af_1(x, y) + bf_2(x, y)] = aH[f_1(x, y)] + bH[f_2(x, y)]$, where $a$ and $b$ are constants and $f_1$ and $f_2$ are images.

**Space-Invariance:** If $H$ is space-invariant, the effect of $H$ on an image is independent of the spatial location. This means that if we shift the input image, the output image is shifted by the same amount.

In the context of linear, space-invariant systems, the degradation function $H[\cdot]$ can be represented by its *impulse response*, $h(x, y)$. The output of the system when the input is an image $f(x, y)$ is the convolution of $f(x, y)$ with $h(x, y)$.

**Model with Convolution:**

$g(x, y) = f(x, y) * h(x, y) + \eta(x, y)$

Where:

*   $*$ denotes convolution.
*   $h(x, y)$: The impulse response of the degradation system. It characterizes how the system blurs or distorts the image.

**Textbook Reference:** Gonzalez and Woods (2009), Chapter 5, "Image Restoration," introduces this fundamental model. They explain that the impulse response $h(x, y)$ essentially defines the blurring kernel.

### 4.1.2 The degradation function $H$

The degradation function $H$ represents the physical process that causes the blurring. Common forms of $H$ include:

*   **Blurring due to motion:** If the camera or the object moves during exposure, it results in motion blur. The impulse response $h(x, y)$ depends on the direction and length of the motion.
*   **Blurring due to out-of-focus optics:** Imperfect lenses can cause an image to be out of focus, resulting in a blurred image. This type of blur is often modeled by a circular or square aperture function.
*   **Atmospheric turbulence:** Light passing through the atmosphere can be distorted, causing blurring, especially in aerial photography.
*   **Other optical aberrations:** Lens imperfections can introduce various types of distortions.

**Example: Motion Blur**

Consider a linear motion blur along the horizontal direction with length $L$ and angle $\theta$. The impulse response $h(x, y)$ can be approximated by a rectangular pulse:

$h(x, y) = \begin{cases} \frac{1}{L} & \text{if } 0 \le x \le L \text{ and } y = 0 \\ 0 & \text{otherwise} \end{cases}$
(This is a simplified 1D case for illustration; a 2D representation would involve $\theta$ for angle).

**Frequency Domain Representation:**

The convolution in the spatial domain is equivalent to multiplication in the frequency domain. Let $F(u, v)$, $G(u, v)$, and $H(u, v)$ be the Fourier transforms of $f(x, y)$, $g(x, y)$, and $h(x, y)$, respectively. The Fourier transform of the noise is $\mathcal{N}(u, v)$.

$G(u, v) = H(u, v) F(u, v) + \mathcal{N}(u, v)$

Where $H(u, v)$ is the *Fourier transform of the impulse response $h(x, y)$*, also known as the **transfer function** of the degradation system.

**Important Note:** The term $H(u, v)$ is crucial because many restoration techniques operate in the frequency domain by attempting to "undo" the effect of $H(u, v)$.

### 4.1.3 Noise Components ($\eta(x, y)$)

Noise is an unwanted random signal that corrupts the image data. Common types of noise include:

*   **Additive Noise:** The noise is added to the ideal image signal. The linear, space-invariant model assumes additive noise.
    *   **Gaussian Noise:** Follows a Gaussian (normal) distribution. It's often modeled as $\eta(x, y) \sim N(\mu, \sigma^2)$, where $\mu$ is the mean and $\sigma^2$ is the variance.
    *   **Uniform Noise:** Follows a uniform distribution over a certain range.
    *   **Salt-and-Pepper Noise (Impulse Noise):** Randomly occurring white and black pixels. Typically modeled as $p(a) = \begin{cases} P_a & \text{if } a = v_{min} \\ P_b & \text{if } a = v_{max} \\ 1 - P_a - P_b & \text{otherwise} \end{cases}$, where $v_{min}$ and $v_{max}$ are the minimum and maximum intensity values.
*   **Multiplicative Noise:** The noise multiplies the image signal. This is common in sensing devices where the noise level is proportional to the signal intensity. Model: $g(x, y) = f(x, y) \cdot \eta(x, y)$. This can often be converted to an additive model by taking the logarithm: $\ln(g(x, y)) = \ln(f(x, y)) + \ln(\eta(x, y))$.
*   **Periodic Noise:** Occurs in specific frequencies and can be due to electrical or mechanical interference. It appears as repetitive patterns in the image.

**Textbook Reference:** Jayaraman et al. (2015), Chapter 11, "Image Restoration," provides a detailed discussion on various noise models and their characteristics.

**Reference Book Insight:** Castleman (2003) emphasizes that understanding the nature of the noise is critical for selecting appropriate restoration filters. For instance, median filters are effective against salt-and-pepper noise, while Gaussian filters are good for Gaussian noise.

### 4.2 Types of Degradations and Their Models

Let's delve deeper into specific degradation types and their modeling.

#### 4.2.1 Motion Blur

*   **Description:** Caused by relative motion between the camera and the scene during image acquisition.
*   **Model:**
    *   **Linear Motion:** If the motion is linear and uniform, the degradation can be modeled by a uniform distribution of intensity along a line.
    *   **Circular Motion:** Similar to linear motion but along a circular path.
*   **Impulse Response:** For a linear motion of length $B$ and angle $\theta$, the impulse response $h(x, y)$ can be approximated by a rectangular pulse of length $B$ in the direction of motion.
*   **Transfer Function:** The Fourier transform of the impulse response $H(u, v)$ will have nulls (zeros) at specific frequencies, causing a loss of high-frequency information and thus blurring.

**Example:** Imagine a camera shaking horizontally while taking a picture. The original sharp edges will be smeared horizontally.

#### 4.2.2 Out-of-Focus Blur

*   **Description:** Occurs when the imaging system's focal plane is not aligned with the scene plane.
*   **Model:** The blur is typically modeled as a disk of uniform intensity, representing the area of light spread from a point source.
*   **Impulse Response:** A circular disk of radius $a$.
    $h(x, y) = \begin{cases} 1/(\pi a^2) & \text{if } x^2 + y^2 \le a^2 \\ 0 & \text{otherwise} \end{cases}$
*   **Transfer Function:** The Fourier transform of a disk is a Bessel function, which decays smoothly in the frequency domain.

**Example:** A photograph of a person where their face is sharp but the background is blurry (or vice-versa) due to depth of field and focusing.

#### 4.2.3 Atmospheric Turbulence

*   **Description:** The Earth's atmosphere causes variations in the refractive index of the air, leading to random fluctuations in the light wavefront.
*   **Model:** This is a more complex and statistical degradation. Models often involve random phase distortions.
*   **Impulse Response:** Often approximated by a Gaussian function or more complex statistical models.
*   **Transfer Function:** The transfer function generally attenuates high frequencies but the specific form depends on the turbulence model.

**Example:** Images taken from space or high altitudes can suffer from atmospheric blur.

### 4.3 The Restoration Problem

The goal of image restoration is to estimate the original image $f(x, y)$ from the degraded image $g(x, y)$. This is an **ill-posed problem** because:

1.  **Noise:** The noise component $\eta(x, y)$ is unknown.
2.  **Degradation Function:** The degradation function $H$ is often not perfectly known. Even if it is known, its inverse $H^{-1}$ might not exist or might amplify the noise significantly.

Therefore, restoration methods typically try to find an estimate $\hat{f}(x, y)$ that is "close" to the original $f(x, y)$ in some sense. This usually involves finding an inverse filtering process.

**Relationship to CO4:** This section directly sets up the problem that CO4 aims to solve. By understanding the degradation model, we can start to think about how to invert it.

## Key Concepts to Remember:

*   **Degradation Model:** $g(x, y) = H[f(x, y)] + \eta(x, y)$
*   **Linear, Space-Invariant Degradation:** $g(x, y) = f(x, y) * h(x, y) + \eta(x, y)$
*   **Transfer Function:** $H(u, v)$ is the Fourier transform of the impulse response $h(x, y)$.
*   **Types of Noise:** Gaussian, Uniform, Salt-and-Pepper, Multiplicative, Periodic.
*   **Ill-Posed Problem:** Restoration is challenging due to unknown noise and degradation function.
*   **Objective:** Estimate $\hat{f}(x, y)$ from $g(x, y)$.

## Practice Questions:

**Question 1:**
Which of the following best describes the general degradation model in image restoration?
a) $g(x, y) = f(x, y) + \eta(x, y)$
b) $g(x, y) = H[f(x, y)] \cdot \eta(x, y)$
c) $g(x, y) = H[f(x, y)] + \eta(x, y)$
d) $g(x, y) = f(x, y) * H(x, y)$

**Question 2:**
In the context of linear, space-invariant degradation, what operation represents the blurring process in the spatial domain?
a) Addition
b) Subtraction
c) Convolution
d) Multiplication

**Question 3:**
The Fourier transform of the impulse response $h(x, y)$ is known as the:
a) Point Spread Function (PSF)
b) Noise Power Spectrum
c) Transfer Function
d) Degradation Kernel

**Question 4:**
Which type of noise is most effectively reduced by a median filter?
a) Gaussian Noise
b) Salt-and-Pepper Noise
c) Uniform Noise
d) Periodic Noise

**Question 5:**
Why is image restoration considered an "ill-posed problem"?

---

## Answers:

**Answer 1:**
c) $g(x, y) = H[f(x, y)] + \eta(x, y)$
*   This is the general model where $H$ represents the degradation function (e.g., blurring) and $\eta$ is the noise.

**Answer 2:**
c) Convolution
*   For linear, space-invariant systems, the output is the convolution of the input image with the system's impulse response: $g(x, y) = f(x, y) * h(x, y)$.

**Answer 3:**
c) Transfer Function
*   The Fourier transform of the impulse response $h(x, y)$ is the transfer function $H(u, v)$.

**Answer 4:**
b) Salt-and-Pepper Noise
*   Median filters are non-linear filters that are particularly effective at removing impulsive noise (salt-and-pepper noise) because they replace a pixel's value with the median of its neighbors, effectively discarding extreme outlier values.

**Answer 5:**
Image restoration is considered an ill-posed problem primarily because:
1.  **Unknown Noise:** The specific characteristics and values of the noise $\eta(x, y)$ are unknown.
2.  **Unknown or Imperfect Degradation Function:** The degradation function $H$ is often not precisely known. Even if it is known, its inverse $H^{-1}$ might not exist or, if it does, applying it can severely amplify the noise, leading to an unstable solution. This means that a small error in the degraded image or the degradation model can lead to a very large error in the restored image.

---

This module provides the fundamental framework for understanding image degradation. Subsequent modules will build upon this knowledge to explore various techniques for reversing these degradations and restoring the image.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
