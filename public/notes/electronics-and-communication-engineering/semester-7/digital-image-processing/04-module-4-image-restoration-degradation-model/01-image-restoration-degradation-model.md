---
title: "Image Restoration: Degradation model"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Restoration: Degradation model"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff519"
status: "completed"
scrapedAt: "2026-05-23T18:06:51.789Z"
---
# Digital Image Processing: Module 4 - Image Restoration

## Topic: Image Restoration: Degradation Model

---

### 1. Introduction to Image Restoration

**What is Image Restoration?**
Image restoration is a process that aims to recover an image that has been degraded or corrupted. The goal is to approximate the original, uncorrupted image by using knowledge of the degradation process.

**Why is Image Restoration Necessary?**
Images can be degraded during acquisition, transmission, or storage due to various factors such as:
*   **Sensor noise:** Random fluctuations in the sensor's output.
*   **Motion blur:** Caused by the movement of the camera or the object during image capture.
*   **Out-of-focus blur:** Resulting from improper focusing of the imaging system.
*   **Atmospheric turbulence:** Distortions caused by atmospheric conditions (e.g., heat haze).
*   **Compression artifacts:** Distortions introduced by lossy compression techniques.
*   **Geometric distortions:** Changes in the spatial arrangement of pixels.

**Relationship to Image Enhancement:**
While image enhancement aims to improve the visual appearance of an image (e.g., contrast stretching, edge sharpening), image restoration attempts to reconstruct the original image based on a model of the degradation process. Restoration is often based on more rigorous mathematical principles than enhancement.

*(Reference: Gonzalez & Woods, Chapter 5, Introduction)*

---

### 2. The Degradation Model

The process of image degradation can be modeled as a combination of two fundamental operations:

1.  **Degradation Function (H):** This function represents the blurring or distortion that occurs during image acquisition. It is often modeled as a linear, shift-invariant system.
2.  **Noise (η):** This represents random disturbances added to the degraded image.

**Mathematical Representation:**
Let $f(x, y)$ be the original, uncorrupted image.
Let $g(x, y)$ be the degraded image.
Let $h(x, y)$ be the degradation function (point spread function, PSF).
Let $\eta(x, y)$ be the additive noise.

The degradation process can be modeled in the spatial domain using convolution:

$g(x, y) = h(x, y) * f(x, y) + \eta(x, y)$

where:
*   $*$ denotes convolution.
*   $h(x, y)$ is the point spread function (PSF) of the degradation process. The PSF describes how a single point source of light is spread out by the imaging system.
*   $f(x, y)$ is the original image.
*   $\eta(x, y)$ is the additive noise.

**In the Frequency Domain:**
Using the convolution theorem, the degradation process can also be represented in the frequency domain as:

$G(u, v) = H(u, v) F(u, v) + N(u, v)$

where:
*   $G(u, v)$, $H(u, v)$, $F(u, v)$, and $N(u, v)$ are the Fourier Transforms of $g(x, y)$, $h(x, y)$, $f(x, y)$, and $\eta(x, y)$ respectively.
*   $H(u, v)$ is the frequency response of the degradation function.

*(Reference: Gonzalez & Woods, Chapter 5.1)*

---

### 3. Types of Degradations and Their Models

The nature of the degradation function $h(x, y)$ dictates the type of blurring and the approach to restoration.

#### 3.1. Blurring Functions (Point Spread Functions - PSFs)

The PSF is crucial for restoration because it characterizes the blurring process.

**a) Linear, Shift-Invariant (LSI) Degradation:**
This is the most common assumption in image restoration.
*   **Linearity:** The response to a sum of inputs is the sum of the responses to each input.
*   **Shift-Invariance:** The response to an input shifted in space is the same as the original response shifted by the same amount.
*   The convolution operation ($g = h * f + \eta$) assumes LSI degradation.

**b) Common PSF Models:**

*   **Averaging (Uniform) Filter:** Represents blurring due to exposure to a uniform light source or a simple averaging process.
    *   $h(x, y) = \begin{cases} \frac{1}{ab} & \text{if } 0 \le x \le a-1 \text{ and } 0 \le y \le b-1 \\ 0 & \text{otherwise} \end{cases}$
    *   This PSF is a rectangular window. For motion blur, the dimensions $a$ and $b$ relate to the length and angle of motion.

*   **Gaussian Filter:** Represents blurring caused by slight defocus or atmospheric turbulence.
    *   $h(x, y) = \frac{1}{2\pi\sigma^2} e^{-\frac{x^2 + y^2}{2\sigma^2}}$
    *   $\sigma$ is the standard deviation, controlling the amount of blur. A larger $\sigma$ means more blur.
    *   This is a circularly symmetric function.

*   **Motion Blur:** Occurs when either the camera or the object moves during exposure.
    *   **Linear Motion Blur:**
        *   If motion is horizontal by $a$ pixels:
            $h(x, y) = \begin{cases} \frac{1}{a} & \text{if } 0 \le x \le a-1 \text{ and } y = 0 \\ 0 & \text{otherwise} \end{cases}$
        *   If motion is along an angle $\theta$ by $a$ pixels:
            $h(x, y) = \begin{cases} \frac{1}{a} & \text{if } y = k \sin \theta \text{ and } x = k \cos \theta, \text{ for } 0 \le k \le a-1 \\ 0 & \text{otherwise} \end{cases}$
            This can be approximated by a sequence of points.

    *(Reference: Gonzalez & Woods, Chapter 5.1.2)*
    *(Reference: Jayaraman, Esakkirajan, Veerakumar, Chapter 7.2)*

#### 3.2. Noise Models

Noise is an unwanted signal added to the image. Its characteristics determine the restoration approach.

*   **Additive Noise:** $\eta(x, y)$ is added to the blurred image. This is the most common assumption.
    *   $g(x, y) = h(x, y) * f(x, y) + \eta(x, y)$

*   **Multiplicative Noise:** The noise multiplies the blurred image.
    *   $g(x, y) = h(x, y) * f(x, y) \cdot \eta(x, y)$
    *   This can sometimes be converted to an additive model by taking the logarithm:
        $\ln(g(x, y)) = \ln(h(x, y) * f(x, y)) + \ln(\eta(x, y))$
        This can be approximated as $\ln(g) \approx \ln(h*f) + \eta_{new}$, where $\eta_{new} = \ln(\eta)$.

*   **Periodic Noise:** Often appears as a repeating pattern in the image. It is typically additive.
    *   In the frequency domain, periodic noise appears as impulses at specific locations.

**Common Noise Types and Their Distributions:**

*   **Gaussian Noise:**
    *   The most common assumption. Occurs due to random variations in sensor temperature or electrical noise.
    *   Probability density function (PDF): $p(z) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(z-\mu)^2}{2\sigma^2}}$
    *   $\mu$ is the mean, $\sigma^2$ is the variance.
    *   Gaussian noise is characterized by its mean and variance.

*   **Salt-and-Pepper Noise (Bipolar Noise):**
    *   Occurs due to transmission errors or faulty sensor elements.
    *   Pixels are randomly replaced by either the minimum intensity value (black, "pepper") or the maximum intensity value (white, "salt").
    *   PDF: $p(z) = \begin{cases} P_a & \text{if } z = a \\ P_b & \text{if } z = b \\ 0 & \text{otherwise} \end{cases}$
    *   Where $a$ and $b$ are the minimum and maximum intensity values, and $P_a$ and $P_b$ are the probabilities of a pixel being set to these values.

*   **Exponential Noise:**
    *   PDF: $p(z) = \begin{cases} \frac{1}{\beta} e^{-z/\beta} & \text{if } z \ge 0 \\ 0 & \text{if } z < 0 \end{cases}$
    *   Used to model laser imaging.

*   **Rayleigh Noise:**
    *   PDF: $p(z) = \begin{cases} \frac{2(z-\gamma)}{\beta} e^{-\frac{(z-\gamma)^2}{\beta}} & \text{if } z \ge \gamma \\ 0 & \text{if } z < \gamma \end{cases}$
    *   Often occurs in radar imaging.

*   **Erlang (Gamma) Noise:**
    *   PDF: $p(z) = \begin{cases} \frac{1}{(k-1)!\beta^k} z^{k-1} e^{-z/\beta} & \text{if } z \ge 0 \\ 0 & \text{if } z < 0 \end{cases}$
    *   A generalization of exponential noise with parameter $k$.

*(Reference: Gonzalez & Woods, Chapter 5.1.3)*
*(Reference: Jayaraman, Esakkirajan, Veerakumar, Chapter 7.3)*
*(Reference: Jain, Chapter 4)*

---

### 4. The Inverse Problem

The goal of image restoration is to recover $f(x, y)$ from the degraded image $g(x, y)$, given the degradation function $h(x, y)$ and noise characteristics $\eta(x, y)$.

$g = hf + \eta$ (using matrix notation, where $f, g, \eta$ are vectors and $h$ is a matrix)

This is an **ill-posed problem** because:
1.  **Noise Amplification:** Small errors in $g$ or $h$ can lead to large errors in the estimated $f$. Inverting the degradation process often involves dividing by $H(u, v)$, and if $H(u, v)$ is close to zero in some frequency ranges, this division amplifies noise significantly.
2.  **Incomplete Information:** The original image $f$ is unknown, and the degradation function $h$ might also be imperfectly known or estimated.

Therefore, direct inversion (e.g., $F(u, v) = G(u, v) / H(u, v)$) is often not feasible. Restoration techniques aim to find an estimate $\hat{f}$ of $f$ that is "close" to the original image in some sense, while mitigating noise amplification.

*(Reference: Gonzalez & Woods, Chapter 5.1.1)*
*(Reference: Castleman, Chapter 7)*

---

### 5. Practice Questions and Answers

**Q1. Describe the fundamental components of the image degradation model.**

**Answer:** The image degradation model can be represented as $g(x, y) = h(x, y) * f(x, y) + \eta(x, y)$, where:
*   $g(x, y)$ is the degraded image.
*   $h(x, y)$ is the degradation function or Point Spread Function (PSF), representing blurring.
*   $f(x, y)$ is the original, uncorrupted image.
*   $*$ denotes convolution.
*   $\eta(x, y)$ is the additive noise.

**Q2. What makes image restoration an "ill-posed" problem?**

**Answer:** Image restoration is ill-posed primarily due to the potential for **noise amplification**. When attempting to reverse the degradation process (e.g., by dividing by the degradation function's Fourier Transform $H(u, v)$), if $H(u, v)$ has very small values, the division can drastically amplify the noise component $N(u, v)$, leading to a severely corrupted restored image. Additionally, incomplete knowledge of the original image and the degradation function contributes to the ill-posed nature.

**Q3. Give an example of a common noise type and its distribution.**

**Answer:** **Gaussian Noise** is a common noise type. Its distribution is characterized by a Probability Density Function (PDF) of the form $p(z) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(z-\mu)^2}{2\sigma^2}}$, where $\mu$ is the mean and $\sigma^2$ is the variance of the noise.

**Q4. If an image is degraded by uniform linear motion of length 'a' pixels horizontally, what would be the shape of its PSF?**

**Answer:** The PSF for uniform horizontal motion of length 'a' pixels would be a rectangular pulse of width 'a' and height $1/a$ along the horizontal axis, and zero elsewhere. Specifically, $h(x, y) = \frac{1}{a}$ for $0 \le x \le a-1$ and $y=0$, and $0$ otherwise.

**Q5. True or False: Image restoration aims to improve the visual appeal of an image, similar to image enhancement.**

**Answer:** False. Image restoration aims to reconstruct the original image by modeling and reversing the degradation process, whereas image enhancement focuses on improving the visual appearance based on subjective criteria, without necessarily relying on a degradation model.

---

### 6. Important Points to Remember

*   Image restoration is about **recovering** the original image, while enhancement is about **improving** its appearance.
*   The degradation model is typically represented as $g = hf + \eta$.
*   The **Point Spread Function (PSF)**, $h(x, y)$, characterizes the blurring process.
*   Common PSF models include **Gaussian** and **motion blur**.
*   **Noise** is a critical component of the degradation model, with common types being **Gaussian** and **Salt-and-Pepper**.
*   The restoration process is **ill-posed** due to noise amplification and incomplete information.
*   Understanding the degradation model is the first step towards designing effective restoration algorithms.

---

### 7. Alignment with Course Outcomes (COs)

*   **CO1 (K2):** This topic contributes to explaining the components of an image processing system by detailing the degradation model ($h, f, \eta$) and the components of a degraded image ($g$).
*   **CO2 (K3):** The mathematical representation of the degradation model in both spatial ($g = h * f + \eta$) and frequency domains ($G = HF + N$) requires analyzing transforms and mathematical concepts. Understanding the ill-posed nature also involves analytical skills.
*   **CO4 (K3):** This entire topic is foundational for analyzing filtering and restoration of images. It defines *what* needs to be restored by modeling the degradation that filtering will address.

---

This comprehensive study note covers the fundamental concepts of the image degradation model, essential for understanding various image restoration techniques. It draws upon the principles outlined in the specified textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
