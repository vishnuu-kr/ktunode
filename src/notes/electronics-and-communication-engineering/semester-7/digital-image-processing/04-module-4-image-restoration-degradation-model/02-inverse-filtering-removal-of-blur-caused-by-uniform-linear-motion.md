---
title: "Inverse filtering- removal of blur caused by uniform linear motion"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Restoration: Degradation model"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff51a"
status: "completed"
scrapedAt: "2026-05-23T18:06:52.699Z"
---
# Digital Image Processing: Module 4 - Image Restoration: Degradation Model

## Topic: Inverse Filtering - Removal of Blur Caused by Uniform Linear Motion

---

### **1. Introduction to Image Restoration**

*   **Definition:** Image restoration is the process of recovering an image that has been degraded by applying a known or estimated degradation function and then applying the inverse of that function.
*   **Goal:** To recover the original image $f(x, y)$ from a degraded image $g(x, y)$.
*   **Degradation Model:** A fundamental concept in image restoration is the **degradation model**, which describes how the original image is transformed into the degraded image.

    *   **Additive Noise:** $g(x, y) = f(x, y) + \eta(x, y)$, where $\eta(x, y)$ is additive noise.
    *   **Linear Degradation (Convolution):** $g(x, y) = f(x, y) * h(x, y)$, where '*' denotes convolution and $h(x, y)$ is the **Point Spread Function (PSF)** or **degradation kernel**.
    *   **Combined Model:** $g(x, y) = f(x, y) * h(x, y) + \eta(x, y)$. This is the most general form.

*   **Key Concept:** The success of image restoration hinges on knowing or being able to estimate the degradation function $h(x, y)$.

---

### **2. Understanding Motion Blur**

*   **Cause:** Motion blur occurs when there is relative motion between the camera and the scene during image acquisition.
*   **Types:**
    *   **Uniform Linear Motion:** This is the simplest and most commonly modeled type, where the motion is in a straight line with constant velocity.
    *   Non-uniform motion (e.g., rotational, curved motion) is more complex to model.
*   **Focus of this Topic:** Removal of blur caused by **uniform linear motion**.

---

### **3. The Degradation Model for Uniform Linear Motion**

*   **Mathematical Representation:** If an image $f(x, y)$ is blurred by uniform linear motion along a straight line by $a$ pixels in the x-direction and $b$ pixels in the y-direction, the **Point Spread Function (PSF)**, $h(x, y)$, is given by:

    $h(x, y) = \begin{cases} \frac{1}{L} & \text{if } |y| \le b \text{ and } |x| \le a \text{ where } \sqrt{x^2 + y^2} \le L \\ 0 & \text{otherwise} \end{cases}$

    Where $L$ is the length of the motion path.

*   **Simplified Case (Horizontal Motion):** For motion purely in the horizontal direction by $b$ pixels (i.e., $a=0$), the PSF is a horizontal line segment:

    $h(x, y) = \begin{cases} \frac{1}{b} & \text{if } |y| \le \frac{1}{2} \text{ and } |x| \le \frac{b}{2} \\ 0 & \text{otherwise} \end{cases}$

    *   **Note:** This represents a uniform intensity over the extent of the motion. The constant $\frac{1}{b}$ ensures that the integral of the PSF over its support is 1, which is a property of many physical PSFs.

*   **Frequency Domain Representation:** The Fourier transform of the PSF is crucial for understanding the degradation and for developing restoration techniques. For horizontal motion of length $b$, the PSF is a rectangular pulse of width $b$ along the x-axis. Its Fourier transform, $H(u, v)$, is:

    $H(u, v) = \text{sinc}\left(\frac{ub}{L}\right)$

    Where $L$ is the length of the motion and $u$ and $v$ are frequencies in the x and y directions, respectively.

    *   **Key Insight:** The sinc function has zeros at multiples of $\frac{L}{b}$. This means that certain frequencies are completely removed or severely attenuated by motion blur, leading to the characteristic loss of detail.

*   **Degradation in the Frequency Domain:** The convolution in the spatial domain becomes multiplication in the frequency domain:

    $G(u, v) = F(u, v) \cdot H(u, v) + N(u, v)$

    Where $G(u, v)$, $F(u, v)$, $H(u, v)$, and $N(u, v)$ are the Fourier transforms of $g(x, y)$, $f(x, y)$, $h(x, y)$, and $\eta(x, y)$, respectively.

---

### **4. Inverse Filtering**

*   **Concept:** The most straightforward approach to reversing the degradation is to multiply the degraded image's Fourier transform by the inverse of the degradation function's Fourier transform.

*   **The Inverse Filter:** The ideal inverse filter's transfer function is $1/H(u, v)$.

*   **Restoration Formula:**
    $F_{est}(u, v) = \frac{G(u, v)}{H(u, v)}$

    In the spatial domain, this would correspond to $f_{est}(x, y) = g(x, y) * h^{-1}(x, y)$, where $h^{-1}(x, y)$ is the inverse filter in the spatial domain. However, directly implementing this in the spatial domain is computationally complex.

*   **Advantages:**
    *   Conceptually simple.
    *   If the degradation is perfectly known and there is no noise, it can perfectly recover the original image.

*   **Disadvantages (Major Issues):**
    *   **Division by Zero:** The primary problem is that $H(u, v)$ often has zeros or values very close to zero (especially for motion blur with its sinc function, which has zeros). Dividing by these small values amplifies the noise in the degraded image dramatically.
    *   **Noise Amplification:** Since $G(u, v) = F(u, v) \cdot H(u, v) + N(u, v)$, the restoration becomes:
        $F_{est}(u, v) = \frac{F(u, v) \cdot H(u, v) + N(u, v)}{H(u, v)} = F(u, v) + \frac{N(u, v)}{H(u, v)}$
        If $H(u, v)$ is small, the noise term $N(u, v) / H(u, v)$ becomes very large, dominating the recovered image.
    *   **Sensitivity to Errors:** Inverse filtering is highly sensitive to inaccuracies in the estimation of $H(u, v)$.

*   **Application to Motion Blur:** For motion blur, $H(u, v) = \text{sinc}\left(\frac{ub}{L}\right)$. The zeros of the sinc function lead to severe noise amplification when inverse filtering is applied directly.

---

### **5. Practical Considerations and Limitations**

*   **Real-world Degradation:** In practice, images are always degraded by both blur and noise. The presence of noise makes direct inverse filtering impractical.
*   **Estimating the PSF:** The exact parameters of the motion blur (length $b$ and direction) are often unknown and need to be estimated from the degraded image itself.
*   **Computational Cost:** While working in the frequency domain is generally efficient due to the Fast Fourier Transform (FFT), the fundamental issues of division by zero and noise amplification remain.

---

### **6. Example: Removing Horizontal Motion Blur (Conceptual)**

Let's consider a simplified scenario without noise to illustrate the concept.

**Original Image (f):** A simple vertical line.
**Degradation:** Horizontal motion blur by 3 pixels.
**PSF (h):** A horizontal segment of length 3.
**Degraded Image (g):** The original line blurred horizontally.

**Conceptual Restoration using Inverse Filter:**

1.  **Obtain Fourier Transforms:**
    *   Compute $F(u, v) = \mathcal{F}\{f(x, y)\}$
    *   Compute $H(u, v) = \mathcal{F}\{h(x, y)\}$ (This will be a sinc-like function).
    *   Compute $G(u, v) = \mathcal{F}\{g(x, y)\}$

2.  **Apply Inverse Filter:**
    *   Compute $F_{est}(u, v) = \frac{G(u, v)}{H(u, v)}$

3.  **Inverse Fourier Transform:**
    *   Compute $f_{est}(x, y) = \mathcal{F}^{-1}\{F_{est}(u, v)\}$

**Expected Outcome:** If there were no noise and $H(u, v)$ were perfectly known and non-zero everywhere, $f_{est}(x, y)$ would ideally be equal to $f(x, y)$. However, due to the zeros in $H(u, v)$ for motion blur, this direct method would fail in practice even without noise if the blur length is significant.

---

### **7. Addressing the Limitations: Introduction to Wiener Filtering and Other Techniques**

Inverse filtering, due to its severe limitations, is rarely used directly in its pure form for real-world image restoration, especially when noise is present. More robust methods are employed, such as:

*   **Wiener Filtering:** This is a much more practical approach that attempts to minimize the mean squared error between the estimated and original image. It balances the deblurring process with noise reduction.
*   **Constrained Least Squares Filtering:** Another method that incorporates constraints to stabilize the restoration process.
*   **Other Regularization Techniques:** Various methods exist to regularize the inverse problem, making it more stable in the presence of noise.

**(Note: These advanced techniques are typically covered in subsequent topics or modules but are mentioned here to provide context for why pure inverse filtering is limited.)**

---

### **8. Learning Outcomes Alignment**

*   **CO1: Explain different components of image processing system (Knowledge Level: K2)**
    *   This module's context relates to the restoration component of an image processing system, which aims to improve image quality. The degradation model and restoration techniques are core parts of this.
*   **CO2: Analyse the various concepts and mathematical transforms necessary for image processing (Knowledge Level: K3)**
    *   Understanding convolution, Fourier transforms, Point Spread Functions (PSFs), and frequency domain operations is crucial for analyzing image degradation and restoration. This topic heavily relies on these concepts.
*   **CO3: Illustrate the various schemes of image compression (Knowledge Level: K3)**
    *   While not directly about compression, understanding frequency domain analysis (used in both compression and restoration) can provide comparative insights.
*   **CO4: Analyze the filtering and restoration of images (Knowledge Level: K3)**
    *   This topic is a core part of CO4. It delves into specific filtering techniques (inverse filtering) and the challenges in image restoration.
*   **CO5: Describe the basic image segmentation techniques (Knowledge Level: K2)**
    *   This topic does not directly relate to image segmentation.

---

### **9. Key Concepts to Remember**

*   **Degradation Model:** $g(x, y) = f(x, y) * h(x, y) + \eta(x, y)$
*   **Point Spread Function (PSF):** $h(x, y)$ represents the blur. For uniform linear motion, it's often a line segment.
*   **Frequency Domain:** Convolution becomes multiplication: $G(u, v) = F(u, v) \cdot H(u, v) + N(u, v)$.
*   **Inverse Filter:** $F_{est}(u, v) = \frac{G(u, v)}{H(u, v)}$.
*   **Major Problem of Inverse Filtering:** Severe noise amplification due to division by small values of $H(u, v)$ (especially zeros).
*   **Motion Blur PSF's Frequency Response:** For horizontal motion of length $b$, $H(u, v) \approx \text{sinc}\left(\frac{ub}{L}\right)$, which has zeros.
*   **Practicality:** Pure inverse filtering is rarely used in practice due to noise. More advanced techniques like Wiener filtering are preferred.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### **10. Textbook and Reference Book Integration**

*   **Gonzalez & Woods (4th Ed.):** Chapter 7 (Image Restoration) extensively covers degradation models, including motion blur. Section 7.4 discusses inverse filtering and its limitations. The mathematical formulation of the PSF for motion and its Fourier transform are detailed here.
*   **Jayaraman, Esakkirajan, Veerakumar (1st Ed.):** Similar coverage of degradation models and filtering techniques can be found in their Image Restoration chapter, likely providing a foundational understanding of PSFs and frequency domain operations.
*   **Castleman (2/e):** Discusses blur models and inverse filtering as a conceptual approach to restoration.
*   **Jain (PHI, 1988):** Provides foundational knowledge on convolution and Fourier transforms, essential for understanding the degradation process and frequency domain filtering.
*   **Pratt (4/e):** Offers in-depth mathematical treatments of various blur types and restoration algorithms, including the limitations of inverse filtering.

---

### **11. Practice Questions & Exercises**

**Question 1:**
(CO2, CO4 - K3)
Describe the general degradation model for image restoration. What are the two main components of this model, and how are they represented mathematically?

**Answer:**
The general degradation model for image restoration is given by:
$g(x, y) = f(x, y) * h(x, y) + \eta(x, y)$
The two main components are:
1.  **Linear Degradation:** Represented by the convolution of the original image $f(x, y)$ with the **Point Spread Function (PSF)** $h(x, y)$. The PSF describes how the imaging system blurs a point source of light.
2.  **Additive Noise:** Represented by an additive noise term $\eta(x, y)$, which accounts for random variations in image intensity due to sensor limitations or environmental factors.

**Question 2:**
(CO2, CO4 - K3)
What is the Point Spread Function (PSF) for an image degraded by uniform linear motion of length $b$ pixels in the horizontal direction? How does its frequency response, $H(u, v)$, behave, and why is this problematic for inverse filtering?

**Answer:**
For uniform linear motion of length $b$ pixels in the horizontal direction, the PSF $h(x, y)$ is a rectangular pulse:
$h(x, y) = \begin{cases} \frac{1}{b} & \text{if } |y| \le \frac{1}{2} \text{ and } |x| \le \frac{b}{2} \\ 0 & \text{otherwise} \end{cases}$

The frequency response $H(u, v)$ is the Fourier transform of $h(x, y)$. For horizontal motion, it is proportional to a sinc function:
$H(u, v) \approx \text{sinc}\left(\frac{ub}{L}\right)$
where $L$ is the total length of the motion path (often normalized).

This behavior is problematic for inverse filtering because the sinc function has **zeros** at specific frequencies (multiples of $L/b$). When inverse filtering is applied, $F_{est}(u, v) = G(u, v) / H(u, v)$, division by these zeros (or near-zero values) leads to **severe amplification of noise** in the restored image, rendering the result unusable.

**Question 3:**
(CO4 - K3)
Explain the fundamental principle behind inverse filtering for image restoration.

**Answer:**
The fundamental principle of inverse filtering is to reverse the degradation process by dividing the Fourier transform of the degraded image $G(u, v)$ by the Fourier transform of the degradation function (the PSF) $H(u, v)$. The aim is to recover the Fourier transform of the original image $F(u, v)$:
$F_{est}(u, v) = \frac{G(u, v)}{H(u, v)}$
This is based on the frequency-domain relationship $G(u, v) = F(u, v) \cdot H(u, v)$ (ignoring noise for the principle's explanation). By dividing by $H(u, v)$, we attempt to cancel out the effect of the blur.

**Question 4:**
(CO4 - K3)
Why is pure inverse filtering often impractical for restoring images degraded by motion blur and noise?

**Answer:**
Pure inverse filtering is often impractical due to two primary reasons:
1.  **Noise Amplification:** The presence of noise $\eta(x, y)$ in the degraded image means $G(u, v) = F(u, v) \cdot H(u, v) + N(u, v)$. When we divide by $H(u, v)$, the noise term becomes $N(u, v) / H(u, v)$. If $H(u, v)$ has zeros or small values (which is common in motion blur), this term is greatly amplified, overwhelming the restored original image signal $F(u, v)$.
2.  **Sensitivity to Errors:** Even slight inaccuracies in estimating the PSF $H(u, v)$ can lead to significant distortions in the restored image when using inverse filtering, due to the division operation.

---