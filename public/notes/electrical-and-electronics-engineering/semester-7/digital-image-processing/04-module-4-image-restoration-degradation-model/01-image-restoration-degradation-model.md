---
title: "Image Restoration: Degradation model"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Restoration: Degradation model"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36932"
status: "completed"
scrapedAt: "2026-05-23T16:35:34.338Z"
---
# Digital Image Processing - Module 4: Image Restoration: Degradation Model

## Introduction to Image Restoration

Image restoration is the process of recovering an image that has been degraded from its original state. Degradation can occur due to various reasons such as noise, blurring from motion, out-of-focus optics, atmospheric turbulence, or limitations in the image acquisition process. The goal of image restoration is to minimize or eliminate these degradations and bring the image closer to its original, uncorrupted form.

This module focuses on understanding the **degradation model**, which is a fundamental step in image restoration. By modeling how the original image was degraded, we can then develop appropriate techniques to reverse or mitigate those degradations.

## Learning Outcomes

Upon completion of this topic, you should be able to:

*   **Understand the concept of image degradation and its sources.** (CO1: K2)
*   **Formulate a mathematical model for image degradation.** (CO2: K3)
*   **Identify the components of the degradation model.** (CO1: K2)
*   **Distinguish between different types of degradation.** (CO4: K3)
*   **Appreciate the importance of knowing the degradation process for effective restoration.** (CO4: K3)

## Understanding Image Degradation

### What is Image Degradation?

Image degradation refers to the process that causes an image to lose some of its quality or information. The output of a degraded image acquisition system, denoted by $g(x, y)$, can be considered as a corrupted version of the original image, denoted by $f(x, y)$.

### Sources of Degradation:

Degradation can arise from a multitude of sources, broadly categorized as:

1.  **Noise:** Random variations in pixel intensity that are not related to the actual scene.
    *   **Sources:** Electronic sensor noise, atmospheric disturbances, quantization errors.
    *   **Examples:** Gaussian noise, Salt-and-pepper noise, Speckle noise.
2.  **Blurring:** Loss of sharpness and detail.
    *   **Sources:**
        *   **Motion Blur:** Caused by the relative motion between the camera and the scene during exposure.
        *   **Out-of-focus Blur:** Resulting from incorrect focusing of the imaging system.
        *   **Atmospheric Turbulence:** Caused by variations in the refractive index of the atmosphere.
        *   **Optical Aberrations:** Imperfections in the lens system.

## The Degradation Model

The core idea of image restoration is to model the degradation process and then use this model to reverse the degradation. A general mathematical model for image degradation can be represented in the spatial or frequency domain.

### Spatial Domain Degradation Model

In the spatial domain, the degradation process can be modeled using a **linear, position-invariant system** (LSI system) combined with additive noise.

The fundamental equation is:

$g(x, y) = H[f(x, y)] + \eta(x, y)$

Where:

*   $g(x, y)$: The degraded image.
*   $f(x, y)$: The original, uncorrupted image.
*   $H[\cdot]$: An **operator** that represents the degradation process. This operator describes how the original image $f(x, y)$ is transformed into the degraded image (excluding noise).
*   $\eta(x, y)$: **Additive noise**.

**Important Note:** The linearity and position-invariance assumptions are crucial for simplifying the analysis and developing restoration algorithms.

### Understanding the Operator H:

The operator $H$ can be further broken down to represent specific degradation mechanisms.

#### 1. Linear, Position-Invariant (LSI) Degradation:

For LSI systems, the operator $H$ can be represented by the process of **convolution**.

$H[f(x, y)] = f(x, y) \circledast h(x, y)$

Where:

*   $\circledast$ denotes convolution.
*   $h(x, y)$: The **Point Spread Function (PSF)** of the degradation system. The PSF characterizes how a single point of light in the scene is spread out by the imaging system.

Therefore, the spatial domain degradation model becomes:

$g(x, y) = f(x, y) \circledast h(x, y) + \eta(x, y)$

**Key Concept: Point Spread Function (PSF)**
The PSF is the impulse response of the system. If the input is an impulse (a single point), the output is the PSF. A wider PSF indicates more blurring.

#### 2. Position-Variant Degradation:

In some cases, the degradation is **position-variant**, meaning the PSF changes depending on the location $(x, y)$ in the image. This is more complex to model and often requires different restoration techniques.

A general position-variant degradation model can be written as:

$g(x, y) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f(\alpha, \beta) h(x, y; \alpha, \beta) d\alpha d\beta + \eta(x, y)$

Where $h(x, y; \alpha, \beta)$ is the position-dependent PSF.

**Note:** For simplicity, most image restoration techniques assume LSI degradation.

### Frequency Domain Degradation Model

The convolution theorem states that the Fourier transform of the convolution of two functions is the product of their Fourier transforms.

Let $G(u, v)$, $F(u, v)$, $H(u, v)$, and $N(u, v)$ be the Fourier transforms of $g(x, y)$, $f(x, y)$, $h(x, y)$, and $\eta(x, y)$, respectively.

Taking the Fourier Transform of the spatial domain model:

$G(u, v) = F(u, v) H(u, v) + N(u, v)$

Where:

*   $G(u, v)$: Fourier transform of the degraded image.
*   $F(u, v)$: Fourier transform of the original image.
*   $H(u, v)$: Fourier transform of the PSF (also known as the **transfer function** of the degradation system).
*   $N(u, v)$: Fourier transform of the additive noise.

**Key Concept: Transfer Function H(u, v)**
The transfer function $H(u, v)$ represents the filtering effect of the degradation process in the frequency domain. It can amplify or attenuate different frequency components of the original image.

### Common Degradation Models (PSFs)

To restore an image, we need to have an idea of the degradation that occurred. This often involves estimating the PSF $h(x, y)$. Some common PSFs are derived from specific degradation types:

1.  **Motion Blur:**
    *   **Linear Motion:** If the camera moves horizontally by $a$ pixels during exposure, the PSF is a straight line of length $a$.
        $h(x, y) = \begin{cases} \frac{1}{a} & \text{if } 0 \le x \le a-1 \text{ and } y=0 \\ 0 & \text{otherwise} \end{cases}$
    *   **Circular Motion:** If the motion is circular, the PSF is a disk.

2.  **Out-of-focus Blur:**
    *   The PSF is typically a circular disk. The radius of the disk depends on the degree of defocus.
        $h(x, y) = \begin{cases} \frac{1}{\pi R^2} & \text{if } x^2 + y^2 \le R^2 \\ 0 & \text{otherwise} \end{cases}$
    where $R$ is the radius of the disk.

3.  **Gaussian Blur:**
    *   Often used to model various optical blurs or atmospheric effects.
        $h(x, y) = \frac{1}{2\pi \sigma^2} e^{-\frac{x^2 + y^2}{2\sigma^2}}$
    where $\sigma$ is the standard deviation of the Gaussian function.

**Example:** (Gonzalez & Woods, 4th Ed., Chapter 5)

Consider a simple linear motion blur of length 5 pixels in the horizontal direction. The PSF would be:

$h(x, y) = \begin{cases} \frac{1}{5} & \text{if } 0 \le x \le 4 \text{ and } y=0 \\ 0 & \text{otherwise} \end{cases}$

The degraded image $g(x, y)$ would be:

$g(x, y) = \sum_{i=0}^{4} f(x-i, y) \cdot \frac{1}{5} + \eta(x, y)$

In the frequency domain, $H(u, v)$ would be:

$H(u, v) = \frac{1}{5} \sum_{k=0}^{4} e^{-j2\pi (uk/N_x + vk/N_y)}$

If the motion is only horizontal ($v=0$), then:

$H(u, 0) = \frac{1}{5} \sum_{k=0}^{4} e^{-j2\pi uk/N_x} = \frac{1}{5} \frac{1 - e^{-j2\pi u(5)/N_x}}{1 - e^{-j2\pi u/N_x}}$

This $H(u, v)$ represents the filtering action of the motion blur.

## Importance of the Degradation Model

*   **Foundation for Restoration:** Understanding the degradation model is paramount because restoration techniques are designed to invert or approximate the inverse of this model.
*   **Algorithm Selection:** The specific form of the degradation (e.g., type of blur, characteristics of noise) dictates which restoration algorithms will be most effective.
*   **Parameter Estimation:** Knowing the model allows us to estimate the parameters of the degradation (e.g., the length of motion blur, the radius of defocus) which are needed for restoration.
*   **Performance Evaluation:** The degradation model helps in simulating degraded images to test and evaluate the performance of different restoration methods.

**Highlight to Remember:** The most common and tractable degradation model assumes a linear, position-invariant system with additive noise: $g(x, y) = f(x, y) \circledast h(x, y) + \eta(x, y)$.

## Practice Questions

**Question 1:**
What are the two primary components of the general image degradation model?
a) Blurring and Noise
b) Linear System and Additive Noise
c) Convolution and Fourier Transform
d) PSF and Transfer Function

**Question 2:**
In the degradation model $g(x, y) = f(x, y) \circledast h(x, y) + \eta(x, y)$, what does $h(x, y)$ represent?
a) The original image
b) The degraded image
c) The Point Spread Function (PSF)
d) The additive noise

**Question 3:**
If an image is degraded by a motion blur that causes a point source to spread into a line segment, the system is likely:
a) Position-variant
b) Linear and Position-invariant
c) Non-linear
d) Additive noise only

**Question 4:**
The frequency domain representation of the degradation model for an LSI system is given by:
a) $G(u, v) = F(u, v) + N(u, v)$
b) $G(u, v) = F(u, v) / H(u, v) + N(u, v)$
c) $G(u, v) = F(u, v) \cdot H(u, v) + N(u, v)$
d) $G(u, v) = F(u, v) + H(u, v) \cdot N(u, v)$

**Question 5:**
A Gaussian blur can be modeled by a PSF that follows a Gaussian distribution. True or False?

## Answers

**Answer 1:**
b) Linear System and Additive Noise
*(Explanation: The model $g(x, y) = H[f(x, y)] + \eta(x, y)$ represents a system $H$ (often linear and convolution-based) acting on the image, plus additive noise.)*

**Answer 2:**
c) The Point Spread Function (PSF)
*(Explanation: $h(x, y)$ is the impulse response of the degradation system, known as the PSF.)*

**Answer 3:**
b) Linear and Position-invariant
*(Explanation: Motion blur can generally be modeled as an LSI system, where the PSF reflects the motion path.)*

**Answer 4:**
c) $G(u, v) = F(u, v) \cdot H(u, v) + N(u, v)$
*(Explanation: This is derived from the convolution theorem applied to the spatial domain degradation model.)*

**Answer 5:**
True
*(Explanation: The PSF for Gaussian blur is indeed a 2D Gaussian function.)*

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## References and Further Reading

*   **Gonzalez & Woods, "Digital Image Processing," 4th Ed., Chapter 5: Image Restoration.** This chapter provides a detailed exposition of the degradation model, including various types of blurs and noise.
*   **Jayaraman, Esakkirajan, & Veerakumar, "Digital Image Processing," 1st Ed., Chapter 7: Image Restoration.** This book also covers the degradation model and its mathematical formulation.
*   **Castleman, "Digital Image Processing," 2nd Ed.** Offers insights into the practical aspects of image degradation and restoration.
*   **Jain, "Fundamentals of digital image processing,"** provides a solid theoretical foundation for image processing concepts, including degradation.

This module provides the foundational understanding of how images degrade. The subsequent modules will build upon this by discussing various techniques to *restore* images based on these degradation models.