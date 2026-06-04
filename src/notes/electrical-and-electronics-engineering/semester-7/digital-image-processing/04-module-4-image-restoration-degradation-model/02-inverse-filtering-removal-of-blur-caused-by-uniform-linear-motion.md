---
title: "Inverse filtering- removal of blur caused by uniform linear motion"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Restoration: Degradation model"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36933"
status: "completed"
scrapedAt: "2026-05-23T16:35:35.393Z"
---
# Digital Image Processing: Module 4 - Image Restoration: Degradation Model

## Topic: Inverse Filtering - Removal of Blur Caused by Uniform Linear Motion

**Course Outcomes Addressed:**
*   **CO4: Analyze the filtering and restoration of images (Knowledge Level: K3)** - This topic directly addresses image restoration techniques, focusing on removing blur.

**Learning Outcomes Covered:**
*   Understanding the concept of inverse filtering for blur removal.
*   Modeling blur caused by uniform linear motion.
*   Applying inverse filtering in the frequency domain.
*   Recognizing the limitations and challenges of basic inverse filtering.

---

### 1. Introduction to Image Restoration and Blur

Image restoration aims to recover a degraded image from its observed, degraded version. Degradation can occur due to various factors like noise, blurring, and geometric distortions. This module focuses on **blurring**, specifically blur caused by **uniform linear motion**.

*   **Degradation Model:** A common model for image degradation is represented as:
    $g(x, y) = h(x, y) * f(x, y) + \eta(x, y)$
    Where:
    *   $g(x, y)$ is the observed (degraded) image.
    *   $f(x, y)$ is the original (original) image.
    *   $h(x, y)$ is the **point spread function (PSF)**, which characterizes the degradation process.
    *   $*$ denotes convolution.
    *   $\eta(x, y)$ is the additive noise.

*   **Goal of Restoration:** To estimate the original image $f(x, y)$ from the degraded image $g(x, y)$.

---

### 2. Modeling Blur Caused by Uniform Linear Motion

Uniform linear motion blur occurs when a camera or the scene moves in a straight line during the exposure time. This movement causes the image of a point to spread out along the direction of motion.

*   **Point Spread Function (PSF) for Linear Motion:**
    If a point is blurred by moving a distance $b$ in a straight line, its image will be a line segment of length $b$. The PSF, $h(x, y)$, representing this blur is a rectangular pulse.

    Let's consider motion along the x-axis by a distance $b$. The PSF will be non-zero only along a line.
    *   If the motion is horizontal by $b$ units, the PSF is a rectangle of length $b$ along the x-axis and unit width along the y-axis.
    *   The integral of the PSF over its domain must be 1 to conserve the total energy of the blurred point.

    *   **Gonzalez & Woods (4th Ed., Chapter 3):** Defines the PSF for horizontal motion of length $b$ as:
        $h(x, y) = \begin{cases} \frac{1}{b} & \text{if } 0 \le x \le b, y=0 \\ 0 & \text{otherwise} \end{cases}$
        In practice, the PSF can be slightly wider than a single pixel to account for slight deviations or for computational convenience. A common representation might involve a slight width to create a more manageable impulse response.

    *   **Example:** Imagine a camera taking a picture of a stationary star while the camera itself is moving horizontally. The star's image would appear as a streak rather than a point. The length and direction of the streak depend on the camera's motion.

---

### 3. Inverse Filtering in the Frequency Domain

Inverse filtering is a direct approach to blur removal. It attempts to undo the blurring by dividing the degraded image's Fourier transform by the Fourier transform of the PSF.

*   **Frequency Domain Representation:** The degradation model can be represented in the frequency domain using the Fourier Transform:
    $G(u, v) = H(u, v) F(u, y) + N(u, v)$
    Where:
    *   $G(u, v)$, $H(u, v)$, $F(u, v)$, and $N(u, v)$ are the Fourier Transforms of $g(x, y)$, $h(x, y)$, $f(x, y)$, and $\eta(x, y)$, respectively.

*   **The Inverse Filter:** The ideal inverse filter aims to estimate $F(u, v)$ by:
    $\hat{F}(u, v) = \frac{G(u, v)}{H(u, v)}$
    Substituting the degradation model:
    $\hat{F}(u, v) = \frac{H(u, v) F(u, y) + N(u, v)}{H(u, v)}$
    $\hat{F}(u, v) = F(u, y) + \frac{N(u, v)}{H(u, v)}$

    The first term aims to recover the original image. However, the second term, which represents noise amplified by the inverse of the PSF, can severely corrupt the restored image, especially where $H(u, v)$ is small.

*   **Calculating $H(u, v)$ for Linear Motion Blur:**
    For a horizontal motion blur of length $b$, the PSF is a rectangular pulse. The Fourier transform of this rectangular pulse is a sinc function:
    $H(u, v) = \mathcal{F}\{h(x, y)\}$
    For a horizontal motion blur of length $b$, the PSF is $h(x, y) = \frac{1}{b}$ for $0 \le x \le b$ and $y=0$.
    The Fourier Transform is:
    $H(u, v) = \frac{1}{b} \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} h(x, y) e^{-j2\pi(ux+vy)} dx dy$
    $H(u, v) = \frac{1}{b} \int_{0}^{b} e^{-j2\pi ux} dx$ (since $h(x,y)$ is only non-zero for $y=0$)
    $H(u, v) = \frac{1}{b} \left[ \frac{e^{-j2\pi ux}}{-j2\pi u} \right]_{0}^{b}$
    $H(u, v) = \frac{1}{b (-j2\pi u)} (e^{-j2\pi ub} - 1)$
    $H(u, v) = \frac{1 - e^{-j2\pi ub}}{j2\pi ub}$
    $H(u, v) = \frac{e^{-j\pi ub}(e^{j\pi ub} - e^{-j\pi ub})}{j2\pi ub}$
    $H(u, v) = \frac{e^{-j\pi ub}(2j \sin(\pi ub))}{j2\pi ub}$
    $H(u, v) = \frac{\sin(\pi ub)}{\pi ub} e^{-j\pi ub}$

    The magnitude of this transfer function is:
    $|H(u, v)| = \left| \frac{\sin(\pi ub)}{\pi ub} \right|$

    *   **Key Observation:** The magnitude of $H(u, v)$ has zeros (or goes to zero) at values of $u$ where $\pi ub = k\pi$, i.e., $ub = k$ for integer $k$. This means that at certain frequencies, the blur completely obliterates the original signal.

---

### 4. Implementing Inverse Filtering

The process of inverse filtering involves:

1.  **Estimating the Degradation Model (PSF):** This is crucial. For motion blur, we need to estimate the direction and length of the motion.
2.  **Calculating the Fourier Transform of the PSF:** $H(u, v)$.
3.  **Calculating the Fourier Transform of the Degraded Image:** $G(u, v)$.
4.  **Performing the Division:** $\hat{F}(u, v) = \frac{G(u, v)}{H(u, v)}$.
5.  **Handling Zeros in $H(u, v)$:** Direct division by zero or very small values in $H(u, v)$ leads to extreme amplification of noise. This is the major limitation.
6.  **Taking the Inverse Fourier Transform:** $\hat{f}(x, y) = \mathcal{F}^{-1}\{\hat{F}(u, v)\}$.

---

### 5. Limitations of Inverse Filtering

Basic inverse filtering is rarely effective in practice due to the following reasons:

*   **Noise Amplification:** When $H(u, v)$ is small (near zero), $1/H(u, v)$ becomes very large. If there is any noise $N(u, v)$ in the degraded image, it gets amplified significantly in these frequency regions, dominating the restored image. This leads to a very noisy and artifact-ridden output.
*   **Incomplete Knowledge of Degradation:** The PSF $h(x, y)$ is often unknown or only approximately known. Any error in estimating the PSF will lead to incorrect deblurring.
*   **Sensitivity to Zeros:** For motion blur, the sinc function has zeros, meaning certain frequencies are completely lost. Inverse filtering cannot recover these lost frequencies.
*   **Noisy Degradation Model:** The full model is $g = h*f + \eta$. Inverse filtering effectively divides by $H$, leading to $N/H$, which is a major problem.

*   **Gonzalez & Woods (4th Ed., Chapter 3):** Emphasizes that inverse filtering is highly sensitive to noise and is rarely used in its pure form for practical restoration.

---

### 6. Example Scenario (Conceptual)

Imagine a blurry image $g(x, y)$ of text, caused by horizontal motion.

1.  **Degradation Model:** We assume the blur is due to a horizontal motion of length $b$. We estimate $b$ by examining characteristic blurred features. Let's say we estimate $b=10$ pixels.
2.  **PSF and its FT:** We construct the PSF for horizontal motion of length 10 and compute its Fourier Transform $H(u, v) = \frac{\sin(10\pi u)}{10\pi u} e^{-j10\pi u}$.
3.  **Image FT:** Compute $G(u, v)$ by taking the FFT of $g(x, y)$.
4.  **Filtering:** Compute $\hat{F}(u, v) = \frac{G(u, v)}{H(u, v)}$.
5.  **Problem:** Where $\sin(10\pi u) = 0$ (i.e., $u = k/10$ for integer $k$), $H(u, v)$ is zero. At these frequencies, we would be dividing by zero. Even if $H(u, v)$ is just small, $1/H(u, v)$ will be very large. If the original image $f(x, y)$ had energy at these frequencies, and there's any noise, the output will be severely corrupted.
6.  **Result:** The output $\hat{f}(x, y)$ will likely show some deblurring but will be dominated by amplified noise, making it unusable.

---

### 7. Important Points to Remember

*   **Inverse filtering is a direct deconvolution technique.**
*   **It operates in the frequency domain.**
*   **The PSF for uniform linear motion is a rectangular pulse.**
*   **The FT of the linear motion PSF is a sinc function (multiplied by a phase term).**
*   **The primary limitation is severe noise amplification due to division by small $H(u, v)$ values or zeros.**
*   **In practice, inverse filtering is often modified or replaced by more robust techniques (e.g., Wiener filtering, constrained least squares filtering) that incorporate noise estimation and regularization.**

---

### 8. Practice Questions and Answers

**Question 1:**
What is the fundamental limitation of basic inverse filtering for image restoration, particularly in the presence of noise?

**Answer:**
The fundamental limitation of basic inverse filtering is its extreme sensitivity to noise. When the frequency response of the degradation, $H(u, v)$, is small or zero, the inverse filter $1/H(u, v)$ amplifies the noise significantly, often overwhelming the restored image.

**Question 2:**
Describe the nature of the Point Spread Function (PSF) for uniform linear motion blur.

**Answer:**
The PSF for uniform linear motion blur is essentially a line segment. If the motion is by a distance $b$ along the x-axis, the PSF is a rectangular pulse of length $b$ in the x-direction and a unit width in the y-direction. Its integral is normalized to 1 to conserve image energy.

**Question 3:**
What does the magnitude of the Fourier Transform of a uniform linear motion PSF resemble, and why is this problematic for inverse filtering?

**Answer:**
The magnitude of the Fourier Transform of a uniform linear motion PSF resembles a sinc function, $\left| \frac{\sin(\pi ub)}{\pi ub} \right|$. This is problematic because the sinc function has zeros at specific frequencies ($ub=k$, where $k$ is an integer). At these zero frequencies, $H(u, v)$ is zero, leading to division by zero in inverse filtering, which is mathematically undefined and computationally unstable. Even at frequencies where $H(u,v)$ is small but non-zero, the inverse filter amplifies noise significantly.

**Question 4:**
If $G(u, v) = H(u, v) F(u, v) + N(u, v)$ and we apply inverse filtering, what does the estimated image $F(u, v)$ become in the frequency domain?

**Answer:**
Applying inverse filtering, the estimated image $\hat{F}(u, v)$ becomes:
$\hat{F}(u, v) = \frac{G(u, v)}{H(u, v)} = \frac{H(u, v) F(u, v) + N(u, v)}{H(u, v)} = F(u, v) + \frac{N(u, v)}{H(u, v)}$
So, the estimated image is the original image plus the noise term amplified by the inverse of the degradation function.

**Question 5:**
Why is inverse filtering rarely used in its pure form for practical image restoration?

**Answer:**
Inverse filtering is rarely used in its pure form because it is highly susceptible to noise amplification. The degradation process usually also involves noise, and the division by the often small values of the degradation's frequency response ($H(u, v)$) in the inverse filter severely amplifies this noise, rendering the restored image unusable. More advanced techniques like Wiener filtering or Constrained Least Squares filtering are preferred as they mitigate noise amplification.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 9. References

*   **Gonzalez Rafel C, Woods Richard E.** (2018). *Digital Image Processing* (4th ed.). Pearson. (Chapter 5: Image Restoration, specifically sections on Inverse Filtering and blur models).
*   **Jayaraman S, Esakkirajan S, Veerakumar T.** (2011). *Digital Image Processing*. McGraw Hill Education (India). (Chapter 7: Image Restoration, sections on blur modeling and deconvolution).
*   **Castleman Kenneth R.** (2003). *Digital Image Processing* (2nd ed.). Pearson Education. (Relevant chapters on image degradation and restoration).
*   **Jain Anil K.** (1988). *Fundamentals of Digital Image Processing*. Prentice Hall. (Chapters related to image restoration and filtering).
*   **Pratt William K.** (2007). *Digital Image Processing* (4th ed.). John Wiley & Sons. (Sections on deconvolution and restoration techniques).

---
This concludes the study notes for Inverse Filtering and uniform linear motion blur. Remember that understanding the limitations of basic inverse filtering is key to appreciating the need for more advanced restoration techniques.