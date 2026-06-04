---
title: "Inverse filtering- removal of blur caused by uniform linear motion"
subject: "IMAGE PROCESSING APPLICATIONS"
module: "Module 4: Image Restoration: Degradation model"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fef77"
status: "completed"
scrapedAt: "2026-05-23T18:01:27.168Z"
---
# IMAGE PROCESSING APPLICATIONS

## Module 4: Image Restoration: Degradation Model

### Topic: Inverse Filtering - Removal of Blur Caused by Uniform Linear Motion

This module delves into the crucial area of image restoration, specifically focusing on techniques to mitigate degradation. We will explore the degradation model and then concentrate on inverse filtering as a method to remove blur caused by uniform linear motion.

---

### Learning Outcomes (LOs)

Upon successful completion of this topic, you will be able to:

*   **LO1:** Understand the mathematical model for image degradation, particularly for uniform linear motion blur.
*   **LO2:** Explain the principle of inverse filtering for blur removal.
*   **LO3:** Analyze the limitations and challenges of simple inverse filtering.
*   **LO4:** Identify scenarios where inverse filtering is applicable for motion blur.

---

### Course Outcomes (COs) Alignment

This topic directly contributes to the following course outcomes:

*   **CO2: Analyze the various concepts and mathematical transforms and compression schemes necessary for image processing (Knowledge Level: K4)**
    *   Understanding the degradation model and the mathematical formulation of blur, particularly in the frequency domain, involves analyzing concepts and mathematical transforms.
*   **CO4: Determine the techniques for restoration of images (Knowledge Level: K5)**
    *   This topic directly addresses a key technique for image restoration, enabling you to determine its application and effectiveness.

---

### Key Concepts and Definitions

#### 4.1 Image Degradation Model

Image degradation refers to the process that causes an original image to become distorted or less clear. A common model for image degradation is the **Linear, Additive Degradation Model**:

$g(x, y) = h(x, y) * f(x, y) + \eta(x, y)$

Where:
*   $g(x, y)$: The observed (degraded) image.
*   $f(x, y)$: The original (unknown) image.
*   $h(x, y)$: The **Point Spread Function (PSF)** of the degradation process. It represents the blurring effect on a single point in the original image.
*   $*$ : The convolution operation.
*   $\eta(x, y)$: Additive noise (e.g., Gaussian noise).

**Important Note:** The PSF, $h(x, y)$, is the key to understanding and restoring the degraded image. It characterizes the nature of the degradation.

**(Reference: Gonzalez & Woods, Chapter 5 - Image Restoration)**

#### 4.2 Uniform Linear Motion Blur

Uniform linear motion blur occurs when the camera or the scene moves in a straight line during the exposure time. This results in a characteristic streaking effect in the image.

*   **Nature of Blur:** The blur is uniform because the motion is assumed to be constant in speed and direction. It is linear because the motion is along a straight path.
*   **PSF for Uniform Linear Motion:** For motion of length $b$ along an angle $\theta$ with respect to the horizontal axis, the PSF, $h(x, y)$, can be approximated by a rectangular pulse.

    *   **Horizontal Motion ($\theta = 0$):** If the motion is horizontal with length $b$, the PSF is non-zero only along a line segment of length $b$.
        $h(x, y) = \begin{cases} \frac{1}{b} & \text{if } |x| \le b/2 \text{ and } y=0 \\ 0 & \text{otherwise} \end{cases}$
        This PSF is a 1D rectangular pulse along the x-axis.

    *   **General Linear Motion:** For motion along an angle $\theta$, the PSF is a line segment of length $b$ oriented at that angle. The equation for the line segment can be derived, and the PSF will be $\frac{1}{b}$ along this segment and 0 elsewhere.

**(Reference: Jayaraman et al., Chapter 7 - Image Restoration)**

#### 4.3 Frequency Domain Representation

The degradation model can be conveniently analyzed in the frequency domain using the Fourier Transform. Let $F(u, v)$, $G(u, v)$, $H(u, v)$, and $\mathcal{N}(u, v)$ be the Fourier Transforms of $f(x, y)$, $g(x, y)$, $h(x, y)$, and $\eta(x, y)$ respectively.

The degradation model in the frequency domain becomes:

$G(u, v) = H(u, v) F(u, y) + \mathcal{N}(u, v)$

Where:
*   $H(u, v)$ is the **Transfer Function** of the degradation process. It is the Fourier Transform of the PSF, $h(x, y)$.

#### 4.4 The Transfer Function for Uniform Linear Motion

For a horizontal motion blur of length $b$, the PSF is $h(x) = \frac{1}{b}$ for $|x| \le b/2$ and $0$ otherwise. The Fourier Transform of this 1D rectangular pulse is:

$H(u) = \frac{\sin(\pi u b)}{\pi u}$

In 2D, for horizontal motion, $H(u, v) = \frac{\sin(\pi u b)}{\pi u}$. This transfer function has zeros at frequencies where $\pi u b = k\pi$, i.e., $u = k/b$ for integer $k$. These zeros cause significant attenuation of certain frequencies, leading to the characteristic blurring.

**(Reference: Gonzalez & Woods, Chapter 5 - Image Restoration)**

---

### Inverse Filtering

#### 4.5 Principle of Inverse Filtering

The goal of image restoration is to estimate the original image $f(x, y)$ from the degraded image $g(x, y)$. If we know the degradation process (i.e., $h(x, y)$ or $H(u, v)$) and assume no noise, we can theoretically recover the original image by "inverting" the degradation.

From the frequency domain model: $G(u, v) = H(u, v) F(u, v)$

To estimate $F(u, v)$, we can divide $G(u, v)$ by $H(u, v)$:

$\hat{F}(u, v) = \frac{G(u, v)}{H(u, v)}$

Where $\hat{F}(u, v)$ is the estimated Fourier Transform of the original image. The spatial domain estimate $\hat{f}(x, y)$ is then obtained by the inverse Fourier Transform of $\hat{F}(u, v)$.

**This process of dividing by the degradation transfer function is called Inverse Filtering.**

**(Reference: Gonzalez & Woods, Chapter 5 - Image Restoration)**

#### 4.6 Inverse Filtering for Uniform Linear Motion Blur

To remove uniform linear motion blur, we use the transfer function $H(u, v)$ corresponding to that blur. For a horizontal motion blur of length $b$, the inverse filter would be:

$\hat{F}(u, v) = \frac{G(u, v)}{H(u, v)} = \frac{G(u, v)}{\frac{\sin(\pi u b)}{\pi u}}$

**Important Note:** This assumes no noise is present.

#### 4.7 Challenges and Limitations of Inverse Filtering

Simple inverse filtering, while theoretically sound, faces significant practical challenges, especially in the presence of noise:

1.  **Amplification of Noise:** The transfer function $H(u, v)$ often has zeros or near-zeros at certain frequencies (as seen with the motion blur transfer function $H(u) = \frac{\sin(\pi u b)}{\pi u}$). When we divide by these small values in $H(u, v)$, we effectively amplify the corresponding frequencies in $G(u, v)$. Since $G(u, v)$ contains noise $\mathcal{N}(u, v)$, this amplification can severely degrade the restored image, making the noise dominant.

2.  **Sensitivity to Errors in $H(u, v)$:** If the estimated blur parameters (like the length $b$ or direction $\theta$) are not perfectly accurate, the inverse filter will be incorrect, leading to poor restoration.

3.  **Instability:** Due to the amplification of noise at frequencies where $H(u,v)$ is small, inverse filtering is highly unstable and often produces unsatisfactory results in real-world scenarios.

**(Reference: Gonzalez & Woods, Chapter 5 - Image Restoration)**
**(Reference: Castleman, Chapter 8 - Image Restoration)**

---

### Examples and Applications

**Example Scenario:** Imagine a photograph taken with a slow shutter speed while the camera was moved horizontally during exposure. This results in a blurred image with streaks.

**Application of Inverse Filtering (Conceptual):**

1.  **Estimate Blur Parameters:** First, we need to estimate the extent of the horizontal motion, say, by observing the length of the streaks in the degraded image. Let's assume the motion length $b$ is estimated to be 15 pixels.
2.  **Calculate $H(u, v)$:** We compute the Fourier transform of the motion blur PSF, $H(u, v) = \frac{\sin(\pi u b)}{\pi u}$ for horizontal motion with $b=15$.
3.  **Perform Fourier Transform of Degraded Image:** Compute the 2D Fourier Transform of the blurred image $g(x, y)$ to get $G(u, v)$.
4.  **Apply Inverse Filter:** Calculate the estimated original image in the frequency domain: $\hat{F}(u, v) = \frac{G(u, v)}{H(u, v)}$.
5.  **Inverse Fourier Transform:** Compute the inverse Fourier Transform of $\hat{F}(u, v)$ to obtain the restored image $\hat{f}(x, y)$.

**Likely Outcome:** If the image is relatively noise-free, inverse filtering might show some improvement. However, if there is any noise, the amplified noise will likely dominate the restored image, making it unusable.

**(Reference: Jayaraman et al., Chapter 7 - Image Restoration)**

---

### Practice Questions and Exercises

**Q1. (CO2, K4) What is the fundamental mathematical model for image degradation in the spatial domain? Write down the equation and define each term.**

**Answer:**
The fundamental mathematical model for image degradation in the spatial domain is the linear, additive degradation model:
$g(x, y) = h(x, y) * f(x, y) + \eta(x, y)$
Where:
*   $g(x, y)$: Observed degraded image.
*   $f(x, y)$: Original unknown image.
*   $h(x, y)$: Point Spread Function (PSF) of the degradation.
*   $*$ : Convolution operation.
*   $\eta(x, y)$: Additive noise.

**Q2. (CO4, K5) Describe the nature of blur caused by uniform linear motion. How is its PSF typically represented?**

**Answer:**
Uniform linear motion blur occurs when the camera or scene moves in a straight line during image capture. This results in a streaking or smearing effect. The PSF for uniform linear motion is a rectangular pulse oriented along the direction of motion. For horizontal motion of length $b$, the PSF is $h(x) = \frac{1}{b}$ for $|x| \le b/2$ and $y=0$, and 0 otherwise.

**Q3. (CO4, K5) Explain the concept of inverse filtering for image restoration. What is the operation performed in the frequency domain?**

**Answer:**
Inverse filtering is an image restoration technique that attempts to reverse the degradation process by dividing the Fourier Transform of the degraded image $G(u, v)$ by the transfer function of the degradation process $H(u, v)$. The operation in the frequency domain is $\hat{F}(u, v) = \frac{G(u, v)}{H(u, v)}$, where $\hat{F}(u, v)$ is the estimated Fourier Transform of the original image.

**Q4. (CO2, K4) What is the transfer function $H(u)$ for a 1D horizontal uniform linear motion blur of length $b$? Mention one significant characteristic of this transfer function that poses a problem for inverse filtering.**

**Answer:**
The transfer function for a 1D horizontal uniform linear motion blur of length $b$ is $H(u) = \frac{\sin(\pi u b)}{\pi u}$. A significant characteristic is that it has zeros at frequencies $u = k/b$ (where $k$ is an integer). This poses a problem because dividing by these zeros during inverse filtering amplifies noise at these frequencies, making the restoration unstable.

**Q5. (CO4, K5) Why is simple inverse filtering often not practical for real-world image restoration, especially when noise is present?**

**Answer:**
Simple inverse filtering is often not practical because it significantly amplifies noise, particularly at frequencies where the degradation transfer function $H(u, v)$ is small or zero. In real-world images, some level of noise is always present, and this amplification can dominate the restored image, rendering it unusable.

---

### Important Points to Remember

*   The degradation model is fundamental to understanding how blur and noise affect an image.
*   Uniform linear motion blur is characterized by a rectangular PSF and a sinusoidal transfer function with zeros.
*   Inverse filtering aims to reverse the degradation by dividing the degraded image's Fourier Transform by the degradation's transfer function.
*   The major drawback of inverse filtering is its severe amplification of noise due to the zeros or near-zeros in the transfer function.
*   Simple inverse filtering is rarely used on its own in practice due to its instability in the presence of noise. More advanced filtering techniques (like Wiener filtering) are preferred.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### References

*   **Gonzalez Rafel C, Woods Richard E. (2009).** *Digital Image Processing* (3rd ed.). Pearson Education. (Chapter 5: Image Restoration)
*   **Jayaraman S, Esakkirajan S, Veerakumar T. (2015).** *Digital Image Processing*. Tata McGraw Hill. (Chapter 7: Image Restoration)
*   **Castleman Kenneth R. (2003).** *Digital Image Processing* (2nd ed.). Pearson Education. (Chapter 8: Image Restoration)
*   **Jain Anil K. (1988).** *Fundamentals of Digital Image Processing*. Prentice Hall. (Chapter 6: Image Restoration)
*   **Pratt William K. (2007).** *Digital Image Processing* (4th ed.). John Wiley & Sons. (Various chapters on image enhancement and restoration)

---