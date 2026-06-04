---
title: "Inverse filtering- removal of blur caused by uniform linear motion"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Restoration: Degradation model"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee2a"
status: "completed"
scrapedAt: "2026-05-23T18:00:45.735Z"
---
# Digital Image Processing: Module 4 - Image Restoration: Degradation Model

## Topic: Inverse Filtering - Removal of Blur Caused by Uniform Linear Motion

### 1. Introduction to Image Restoration and Degradation Model

Image restoration aims to recover an original image from a degraded version. The degradation process can be modeled as a system that alters the original image.

**Key Concept:** The degradation model is a mathematical representation of how the original image is transformed into the observed (degraded) image.

**General Degradation Model:**

In the spatial domain, the degradation process can be represented by:

$g(x, y) = h(x, y) * f(x, y) + \eta(x, y)$

Where:
*   $g(x, y)$: The degraded image.
*   $f(x, y)$: The original (un-degraded) image.
*   $h(x, y)$: The degradation function (point spread function - PSF). This represents the blurring process.
*   $*$ : The convolution operator.
*   $\eta(x, y)$: Noise (e.g., additive noise).

**In the frequency domain, the model becomes:**

$G(u, v) = H(u, v) F(u, v) + N(u, v)$

Where:
*   $G(u, v)$: Fourier Transform of the degraded image $g(x, y)$.
*   $F(u, v)$: Fourier Transform of the original image $f(x, y)$.
*   $H(u, v)$: Fourier Transform of the degradation function $h(x, y)$ (also known as the transfer function).
*   $N(u, v)$: Fourier Transform of the noise $\eta(x, y)$.

**(Referenced from: Gonzalez & Woods, 4th Ed., Chapter 5)**

### 2. Understanding Uniform Linear Motion Blur

Uniform linear motion blur occurs when the camera or the object moves in a straight line with a constant velocity during the exposure time. This results in a specific type of blur characterized by smearing in a particular direction.

**Degradation Function ($h(x, y)$) for Uniform Linear Motion:**

Consider an image captured while the camera moves horizontally by a distance 'a' over the exposure time. The blur can be approximated by a line segment of length 'a'.

*   **Horizontal Motion:** If the motion is horizontal by 'a' pixels, the PSF is a horizontal line segment of length 'a'.
    $h(x, y) = \begin{cases} \frac{1}{a} & \text{if } |x| \le a/2 \text{ and } y = 0 \\ 0 & \text{otherwise} \end{cases}$
*   **Diagonal Motion:** If the motion is at an angle $\theta$ with respect to the horizontal axis, by a distance 'a', the PSF is a line segment of length 'a' at that angle.

**(Referenced from: Gonzalez & Woods, 4th Ed., Chapter 5; Jayaraman et al., Chapter 5)**

### 3. The Transfer Function ($H(u, v)$) for Uniform Linear Motion

To perform inverse filtering in the frequency domain, we need the transfer function $H(u, v)$, which is the Fourier Transform of the PSF $h(x, y)$.

**For Horizontal Motion Blur:**

If the motion is horizontal by a distance 'a', the transfer function is given by:

$H(u, v) = \text{sinc}(ua)$

Where $\text{sinc}(x) = \frac{\sin(\pi x)}{\pi x}$.

In our degradation model, we often use the form $H(u, v) = \frac{1}{a} \text{sinc}(ua)$ if the PSF is normalized such that its integral is 1. However, when calculating the inverse filter, the constant factor often cancels out or is incorporated into the normalization of the final image. For simplicity in the derivation of the inverse filter, we often consider $H(u, v) = \text{sinc}(ua)$.

**Important Note:** The $\text{sinc}$ function has zeros periodically. These zeros in $H(u, v)$ cause significant problems when attempting to recover $F(u, v)$ directly.

**(Referenced from: Gonzalez & Woods, 4th Ed., Chapter 5; Anil K. Jain, Chapter 4)**

### 4. Inverse Filtering Principle

The core idea of inverse filtering is to reverse the degradation process by multiplying the Fourier Transform of the degraded image $G(u, v)$ by the inverse of the transfer function $H(u, v)$.

**Ideal Inverse Filtering:**

From the frequency domain degradation model:
$G(u, v) = H(u, v) F(u, v) + N(u, v)$

To recover $F(u, v)$, we can ideally divide $G(u, v)$ by $H(u, v)$:

$F_{ideal}(u, v) = \frac{G(u, v)}{H(u, v)}$

Substituting $G(u, v)$:
$F_{ideal}(u, v) = \frac{H(u, v) F(u, v) + N(u, v)}{H(u, v)}$
$F_{ideal}(u, v) = F(u, v) + \frac{N(u, v)}{H(u, v)}$

The goal is to recover the original image $F(u, y)$ by performing an inverse Fourier Transform on $F_{ideal}(u, v)$.

**(Referenced from: Gonzalez & Woods, 4th Ed., Chapter 5; Jayaraman et al., Chapter 5)**

### 5. Applying Inverse Filtering to Uniform Linear Motion Blur

For uniform linear motion blur, the transfer function is $H(u, v) = \text{sinc}(ua)$.

The inverse filter is then $1/H(u, v) = 1/\text{sinc}(ua)$.

So, the estimated original image in the frequency domain is:

$F_{est}(u, v) = \frac{G(u, v)}{\text{sinc}(ua)}$

**Steps for Inverse Filtering:**

1.  **Estimate the Degradation Function/Transfer Function:** Determine the parameters of the blur (e.g., direction and length of motion, 'a').
2.  **Compute the Fourier Transform of the Degraded Image:** Calculate $G(u, v) = \mathcal{F}\{g(x, y)\}$.
3.  **Compute the Transfer Function:** Calculate $H(u, v)$ for the estimated blur. For horizontal motion, $H(u, v) = \text{sinc}(ua)$.
4.  **Compute the Inverse Filter:** Calculate $1/H(u, v)$.
5.  **Multiply in the Frequency Domain:** $F_{est}(u, v) = G(u, v) \times \frac{1}{H(u, v)}$.
6.  **Compute the Inverse Fourier Transform:** Obtain the restored image $f_{est}(x, y) = \mathcal{F}^{-1}\{F_{est}(u, v)\}$.

**(Referenced from: Gonzalez & Woods, 4th Ed., Chapter 5)**

### 6. Challenges and Limitations of Ideal Inverse Filtering

**Key Limitation:** The presence of zeros in the transfer function $H(u, v)$ (or very small values) leads to the amplification of noise $N(u, v)$ in the restored image.

*   **Zeros in $H(u, v)$:** For uniform linear motion blur, $H(u, v) = \text{sinc}(ua)$ has zeros when $ua = k$ for integer $k \neq 0$. At these frequencies, $1/H(u, v)$ becomes infinitely large.
*   **Noise Amplification:** When we divide $G(u, v)$ by $H(u, v)$, if $H(u, v)$ is close to zero, the noise term $N(u, v)/H(u, v)$ will be significantly amplified, overwhelming the restored image information.
*   **Sensitivity to Parameter Estimation:** If the blur parameters ('a' and direction) are not accurately estimated, the inverse filter will not correctly cancel the blur, and the restoration will be poor.

**(Referenced from: Gonzalez & Woods, 4th Ed., Chapter 5; Anil K. Jain, Chapter 4)**

### 7. Illustrative Example (Conceptual)

Imagine a blurred image due to horizontal motion.

*   **Original Image:** A sharp text document.
*   **Degradation:** The camera moved horizontally by 5 pixels during exposure.
*   **Degraded Image:** The text appears smeared horizontally.
*   **Inverse Filtering:**
    *   We estimate the motion parameter 'a' = 5.
    *   We compute the FFT of the degraded image.
    *   We compute $H(u, v) = \text{sinc}(5u)$.
    *   We compute $1/H(u, v)$.
    *   We multiply the FFT of the degraded image by $1/H(u, v)$.
    *   We compute the IFFT.

**Expected Outcome:** A partially restored image. However, due to noise and the zeros of the sinc function, some residual blur might remain, and noise might be noticeable, especially at frequencies where the sinc function was close to zero.

### 8. Relating to Course Outcomes

*   **CO1: Explain different components of image processing system (Knowledge Level: K2)**
    *   This topic covers the degradation model ($h(x, y)$, $f(x, y)$, $g(x, y)$) and the restoration process (inverse filter). These are components of an image processing system.
*   **CO2: Analyse the various concepts and mathematical transforms necessary for image processing (Knowledge Level: K3)**
    *   The core of this topic is the frequency domain analysis using Fourier Transforms, convolution, transfer functions, and inverse filters. Understanding the properties of the sinc function is crucial.
*   **CO4: Analyze the filtering and restoration of images (Knowledge Level: K3)**
    *   This topic directly addresses image restoration through filtering. It analyzes the effectiveness and limitations of inverse filtering for a specific type of blur.

### 9. Practice Questions and Answers

**Question 1:** What is the general degradation model in the spatial domain?
**Answer:** $g(x, y) = h(x, y) * f(x, y) + \eta(x, y)$, where $g$ is the degraded image, $f$ is the original image, $h$ is the degradation function, $*$ is convolution, and $\eta$ is noise.

**Question 2:** What is the primary challenge of using ideal inverse filtering for image restoration?
**Answer:** The primary challenge is the amplification of noise, especially at frequencies where the transfer function $H(u, v)$ is zero or close to zero.

**Question 3:** Describe the nature of the degradation function $h(x, y)$ for uniform linear motion blur.
**Answer:** For uniform linear motion, the degradation function is a line segment representing the smear caused by the motion. For horizontal motion of distance 'a', it's a horizontal line segment of length 'a'.

**Question 4:** How is the transfer function $H(u, v)$ for uniform horizontal motion blur mathematically represented?
**Answer:** $H(u, v) = \text{sinc}(ua)$, where 'a' is the distance of motion.

**Question 5 (Conceptual):** If you apply ideal inverse filtering to an image with significant additive white Gaussian noise and uniform linear motion blur, what would be the likely outcome?
**Answer:** The restored image would likely exhibit significant noise artifacts, possibly making the image unusable. The blur might be reduced, but the noise amplification would be a major problem.

### 10. Important Points to Remember

*   Image restoration aims to recover the original image from a degraded version.
*   The degradation process can be modeled by a convolution with a Point Spread Function (PSF) and additive noise.
*   Uniform linear motion blur is characterized by a line segment PSF.
*   Inverse filtering in the frequency domain involves dividing the degraded image's Fourier Transform by the transfer function.
*   The main drawback of ideal inverse filtering is noise amplification, particularly at frequencies where the transfer function approaches zero.
*   Accurate estimation of blur parameters is crucial for effective inverse filtering.
*   While ideal inverse filtering is conceptually simple, its practical application is limited due to noise. More robust methods like Wiener filtering are often preferred in real-world scenarios.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 11. Further Reading and References

*   **Gonzalez, R. C., & Woods, R. E. (2018). *Digital Image Processing* (4th ed.). Pearson.** (Chapter 5: Image Restoration)
*   **Jayaraman, S., Esakkirajan, S., & Veerakumar, T. (2011). *Digital Image Processing*. McGraw Hill.** (Chapter 5: Image Restoration)
*   **Castleman, K. R. (2003). *Digital Image Processing*. Pearson Education.**
*   **Jain, A. K. (1989). *Fundamentals of Digital Image Processing*. Prentice Hall.**
*   **Pratt, W. K. (2007). *Digital Image Processing*. John Wiley & Sons.**

This comprehensive set of notes covers the fundamental concepts of inverse filtering for uniform linear motion blur, its mathematical basis, limitations, and relevance to the course outcomes, drawing upon the specified textbooks.