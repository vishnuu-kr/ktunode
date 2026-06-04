---
title: "2D sampling and quantization"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 1: Digital Image Fundamentals: Image representation"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee0f"
status: "completed"
scrapedAt: "2026-05-23T18:00:28.354Z"
---
# DIGITAL IMAGE PROCESSING: Module 1 - Digital Image Fundamentals: Image Representation

## Topic: 2D Sampling and Quantization

This module delves into the foundational aspects of representing digital images, focusing on how continuous analog signals are transformed into discrete digital representations. Understanding 2D sampling and quantization is crucial for comprehending the entire image processing pipeline.

### 1. Introduction to Digital Images

A digital image is a 2D array of intensity values. It's a discrete representation of a continuous scene.

*   **Analog Image:** A continuous image, where both spatial coordinates ($x$, $y$) and the intensity value $f(x,y)$ are continuous.
*   **Digital Image:** A discrete representation of an analog image. It's obtained by sampling and quantization.

### 2. The Process of Digitization

Digitization involves two primary steps:

1.  **Sampling:** Converting the continuous spatial coordinates of an analog image into discrete values. This essentially means dividing the image into a grid of small cells.
2.  **Quantization:** Assigning a finite set of intensity values to each sampled point. This means restricting the range of intensity values to a discrete set.

This process transforms a continuous function $f(x,y)$ into a digital image $f(m,n)$, where $m$ and $n$ are integers representing the sampled spatial coordinates.

### 3. 2D Sampling

Sampling is the process of reducing the continuous spatial variations of an image into discrete values. Imagine a continuous image as a surface. Sampling involves taking "measurements" at specific points on this surface.

*   **Sampling Grid:** In 2D, sampling is performed on a grid. We select discrete points in the $x$ and $y$ directions.
*   **Sampling Interval:** The distance between adjacent sample points along the $x$-axis is denoted by $T_x$, and along the $y$-axis by $T_y$.
*   **Sampling Frequency:** The reciprocal of the sampling interval. $F_x = 1/T_x$ and $F_y = 1/T_y$.
*   **Digital Coordinates:** The sampled points are indexed by integers $m$ and $n$. A continuous coordinate $(x, y)$ can be related to its digital coordinate $(m, n)$ by:
    *   $x = m T_x$
    *   $y = n T_y$

#### 3.1. Sampling in the Spatial Domain

The process of sampling can be mathematically represented as multiplying the continuous image function $f(x,y)$ by an ideal sampling function, which is a 2D impulse train.

*   **Impulse Train:** A function that is zero everywhere except at specific locations where it has an infinite value (represented as an impulse). In 2D, this is a product of two 1D impulse trains.
    *   $s(x,y) = \sum_{m=-\infty}^{\infty} \sum_{n=-\infty}^{\infty} \delta(x - m T_x, y - n T_y)$
*   **Sampled Image:** The sampled version of the image $f_s(x,y)$ is obtained by:
    *   $f_s(x,y) = f(x,y) \cdot s(x,y)$
    *   $f_s(x,y) = f(x,y) \sum_{m=-\infty}^{\infty} \sum_{n=-\infty}^{\infty} \delta(x - m T_x, y - n T_y)$
    *   $f_s(x,y) = \sum_{m=-\infty}^{\infty} \sum_{n=-\infty}^{\infty} f(m T_x, n T_y) \delta(x - m T_x, y - n T_y)$

This equation shows that the sampled image $f_s(x,y)$ consists of a series of impulses located at the sampling points, with amplitudes equal to the intensity values of the original image at those points.

#### 3.2. Sampling in the Frequency Domain (Fourier Transform)

Sampling has a profound effect on the frequency content of an image.

*   **Continuous Fourier Transform:** The Fourier transform of $f(x,y)$ is $F(u,v)$.
*   **Fourier Transform of Impulse Train:** The Fourier transform of the 2D impulse train $s(x,y)$ is also a 2D impulse train in the frequency domain.
    *   $S(u,v) = \frac{1}{T_x T_y} \sum_{k=-\infty}^{\infty} \sum_{l=-\infty}^{\infty} \delta(u - k F_x, v - l F_y)$
*   **Fourier Transform of Sampled Image:** The Fourier transform of the sampled image $f_s(x,y)$ is the convolution of the original image's Fourier transform $F(u,v)$ with the Fourier transform of the impulse train $S(u,v)$.
    *   $F_s(u,v) = F(u,v) * S(u,v)$
    *   $F_s(u,v) = F(u,v) * \frac{1}{T_x T_y} \sum_{k=-\infty}^{\infty} \sum_{l=-\infty}^{\infty} \delta(u - k F_x, v - l F_y)$
    *   $F_s(u,v) = \frac{1}{T_x T_y} \sum_{k=-\infty}^{\infty} \sum_{l=-\infty}^{\infty} F(u - k F_x, v - l F_y)$

This result indicates that the Fourier transform of the sampled image is a scaled and replicated version of the original image's Fourier transform, centered at multiples of the sampling frequencies $(kF_x, lF_y)$.

#### 3.3. The Nyquist-Shannon Sampling Theorem

This fundamental theorem dictates the minimum sampling rate required to perfectly reconstruct a continuous signal from its discrete samples.

*   **Theorem Statement (1D):** A continuous-time band-limited signal $f(t)$ with highest frequency $W$ can be perfectly reconstructed from its samples $f(nT)$, where $T$ is the sampling interval, if the sampling frequency $F_s = 1/T$ is greater than $2W$. That is, $F_s > 2W$.
*   **Theorem Statement (2D):** A continuous 2D image $f(x,y)$ band-limited to a maximum frequency $W$ (i.e., its Fourier transform is zero outside the region $|u| \le W$ and $|v| \le W$ or other well-defined bounding regions) can be perfectly reconstructed from its samples if the sampling frequencies $F_x$ and $F_y$ satisfy:
    *   $F_x > 2W_x$
    *   $F_y > 2W_y$
    where $W_x$ and $W_y$ are the maximum spatial frequencies in the $u$ and $v$ directions, respectively.

*   **Aliasing:** If the sampling frequency is less than the Nyquist rate ($F_s \le 2W$), higher frequencies in the original signal "fold" into lower frequencies in the sampled signal. This distortion is called aliasing.
    *   In the frequency domain, aliasing occurs when the replicated spectra in $F_s(u,v)$ overlap.
    *   To avoid aliasing, the image must be pre-filtered with a low-pass filter whose cutoff frequency is less than or equal to half the sampling frequency. This ensures that frequencies higher than half the sampling rate are removed before sampling.

#### 3.4. Sampling Patterns

*   **Rectangular Sampling:** The most common pattern, where samples are taken on a rectangular grid. This is implied in the discussions above.
*   **Hexagonal Sampling:** Offers better sampling efficiency in terms of the number of samples required for reconstruction. It's more complex to implement but can achieve lower aliasing for the same number of pixels compared to rectangular sampling.

**Example:**
Consider a 1D sine wave $f(t) = \sin(2\pi \cdot 100t)$. Its highest frequency is $W = 100$ Hz.
According to the Nyquist theorem, the minimum sampling frequency to perfectly reconstruct this signal is $2W = 200$ Hz. If we sample at $F_s = 150$ Hz, aliasing will occur.

#### **Key Point to Remember:**
The Nyquist-Shannon sampling theorem is fundamental to understanding how much information can be preserved during the digitization process. Violating it leads to aliasing, which degrades image quality.

### 4. 2D Quantization

Quantization is the process of mapping a continuous range of intensity values to a finite set of discrete values. After sampling, each spatial location $(m,n)$ has an intensity value $f(m T_x, n T_y)$, which might still be a continuous or a finely-grained analog value. Quantization discretizes these intensity values.

*   **Quantization Levels:** The number of discrete intensity values used.
*   **Quantization Interval:** The difference between consecutive quantization levels.
*   **Bit Depth:** The number of bits used to represent each quantized intensity level. If we have $L$ quantization levels, then the number of bits required is $k = \log_2 L$.

#### 4.1. Uniform Quantization

In uniform quantization, the range of intensity values is divided into equal-sized intervals.

*   **Range of Intensities:** Let the intensity values of the image be in the range $[0, 255]$.
*   **Number of Levels (L):** If we choose $L=256$ levels, we can assign each integer value from 0 to 255 to a unique level. This requires $k = \log_2 256 = 8$ bits per pixel.
*   **Quantization Interval (for uniform quantization):** $q = (b-a)/L$, where $[a,b]$ is the range of intensities.

**Example:**
If an image has intensity values in $[0, 255]$ and we quantize it into 16 levels ($L=16$).
The quantization interval is $q = (255-0)/16 \approx 15.9$.
*   Levels could be: 0, 16, 32, ..., 240.
*   Any original intensity value falling into the range $[0, 15.9]$ would be mapped to 0.
*   Any original intensity value falling into the range $[16, 31.9]$ would be mapped to 16, and so on.

#### 4.2. Non-uniform Quantization

In non-uniform quantization, the quantization intervals are not uniform. They are smaller in regions where intensity variations are significant and larger where variations are small. This is often used to match the human perception of brightness, which is non-linear.

*   **Perceptual Quantization:** The human eye is more sensitive to changes in dark areas than in bright areas. Non-uniform quantization schemes like $\mu$-law and A-law (used in telecommunications) mimic this behavior to achieve better perceptual quality with a given number of bits.

#### 4.3. Quantization Error

The difference between the original intensity value and its quantized value is the quantization error.

*   **Error:** $e = f_{quantized} - f_{original}$
*   **Error Range:** For uniform quantization, the error is typically within $[-q/2, q/2]$.
*   **Impact:** Quantization error can lead to loss of fine details and the introduction of artifacts like "contouring" or "banding," especially if the number of quantization levels is too small.

#### **Key Point to Remember:**
The number of quantization levels (or bit depth) determines the fidelity of the intensity representation. More levels mean more precise representation but also larger storage requirements.

### 5. Image Representation in Digital Form

A digital image can be represented as a matrix where each element corresponds to a pixel's intensity value.

*   **Digital Image Matrix:**
    $Z = \begin{bmatrix}
    z_0 & z_1 & \cdots & z_{N-1} \\
    z_N & z_{N+1} & \cdots & z_{2N-1} \\
    \vdots & \vdots & \ddots & \vdots \\
    z_{(M-1)N} & z_{(M-1)N+1} & \cdots & z_{MN-1}
    \end{bmatrix}$

    This is a simplification. In 2D, it's more commonly represented as:
    $f(m,n) = \begin{bmatrix}
    f(0,0) & f(0,1) & \cdots & f(0,N-1) \\
    f(1,0) & f(1,1) & \cdots & f(1,N-1) \\
    \vdots & \vdots & \ddots & \vdots \\
    f(M-1,0) & f(M-1,1) & \cdots & f(M-1,N-1)
    \end{bmatrix}$

    Where:
    *   $M$ is the number of rows (height) of the image.
    *   $N$ is the number of columns (width) of the image.
    *   $f(m,n)$ is the intensity value of the pixel at row $m$ and column $n$.

*   **Resolution:** The total number of pixels in the image, $M \times N$.
*   **Bit Depth:** The number of bits used to represent each pixel's intensity value. An image with $M \times N$ pixels and $k$ bits per pixel requires $M \times N \times k$ bits of storage.

#### 5.1. Types of Digital Images Based on Intensity Representation

*   **Binary Images:** Pixels can only have two intensity values, typically 0 (black) and 1 (white). Bit depth is 1. (CO1: K2)
*   **Grayscale Images:** Pixels can have intensity values from black to white, usually represented by 256 levels (8-bit grayscale). Bit depth is typically 8 bits. (CO1: K2)
*   **Color Images:** Represented by multiple intensity components for each pixel, typically Red, Green, and Blue (RGB). Each component is usually an 8-bit grayscale value.
    *   An RGB image can be thought of as three separate grayscale images, one for each color channel.
    *   Total bit depth for a true color image is typically $8 \times 3 = 24$ bits per pixel. (CO1: K2)

### 6. Relationship to Course Outcomes

*   **CO1: Explain different components of an image processing system (Knowledge Level: K2)**
    *   This topic covers the core "input" component of an image processing system – how an analog image is converted into a digital format. Understanding sampling and quantization is essential for explaining the digitization stage.

*   **CO2: Analyse the various concepts and mathematical transforms necessary for image processing (Knowledge Level: K3)**
    *   The Fourier transform analysis of sampling directly addresses this outcome. Understanding how sampling affects the frequency domain is crucial for many image processing techniques, including filtering and reconstruction.

### 7. Practice Questions and Answers

**Question 1:**
What is the primary purpose of sampling in digital image processing?
a) To reduce the number of colors in an image.
b) To discretize the continuous spatial coordinates of an image.
c) To increase the brightness of an image.
d) To remove noise from an image.

**Answer:**
b) To discretize the continuous spatial coordinates of an image.

**Question 2:**
If a continuous image has a maximum spatial frequency of 50 cycles/mm, what is the minimum sampling frequency required to avoid aliasing in one dimension?
a) 25 cycles/mm
b) 50 cycles/mm
c) 100 cycles/mm
d) 200 cycles/mm

**Answer:**
c) 100 cycles/mm (According to the Nyquist-Shannon theorem, sampling frequency must be $> 2W$)

**Question 3:**
Explain the concept of aliasing in the context of digital image sampling.

**Answer:**
Aliasing occurs when the sampling frequency is too low to capture the highest frequencies present in the continuous image. In the frequency domain, this leads to the overlapping of replicated spectra of the original image's Fourier transform. In the spatial domain, it manifests as undesirable artifacts, such as jagged edges, false patterns, or loss of detail, making it impossible to perfectly reconstruct the original image.

**Question 4:**
What is the difference between uniform and non-uniform quantization?

**Answer:**
*   **Uniform Quantization:** Divides the range of intensity values into equally sized intervals. All intervals have the same width.
*   **Non-uniform Quantization:** Divides the range of intensity values into unequally sized intervals. Intervals are smaller in regions where small changes in intensity are perceptually important (e.g., darker regions) and larger where they are less important (e.g., brighter regions).

**Question 5:**
An 8-bit grayscale image has dimensions 512x512 pixels. How many bits are required to store this image?

**Answer:**
Number of pixels = 512 * 512 = 262,144
Bits per pixel = 8
Total bits = 262,144 * 8 = 2,097,152 bits

**Question 6:**
True or False: Quantization error is always zero if sampling is done perfectly.

**Answer:**
False. Quantization error arises from mapping a continuous or finely-grained intensity to a discrete level, even if sampling is done perfectly. It's the error introduced by the quantization step, not the sampling step.

### 8. Important Points to Remember

*   **Digitization:** The transformation of an analog image into a digital image involves **sampling** (discretizing spatial coordinates) and **quantization** (discretizing intensity values).
*   **Sampling Theorem:** The Nyquist-Shannon theorem is critical for determining the minimum sampling rate to avoid **aliasing**.
*   **Aliasing:** A form of distortion caused by undersampling, leading to loss of detail and spurious patterns. Pre-filtering is essential to mitigate aliasing.
*   **Quantization Levels:** The number of quantization levels determines the number of distinct intensity values an image can have. Higher levels mean more fidelity but also more storage.
*   **Bit Depth:** The number of bits used per pixel determines the number of quantization levels. 8-bit grayscale means 256 levels.
*   **Image Representation:** Digital images are fundamentally matrices of pixel values.
*   **Color Images:** Typically represented as multiple channels (e.g., RGB), each with its own intensity values.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 9. References

*   **Gonzalez & Woods, 4th Edition:**
    *   Chapter 2: Digital Image Fundamentals, Section 2.1 (Digital Image Fundamentals) and Section 2.3 (Relationship Between Pixels). While this specific topic might be spread or introduced in early chapters, the principles of sampling and quantization are core to defining a digital image.
*   **Jayaraman, Esakkirajan, Veerakumar:**
    *   Chapter 1: Introduction to Digital Image Processing, Section 1.2 (Elements of Digital Image Processing System) will likely cover the digitization process.
*   **Castleman:**
    *   Chapter 2: Image Acquisition and Digitization, will provide detailed explanations of sampling and quantization.
*   **Jain:**
    *   Chapter 2: Digital Image Fundamentals, will offer a strong theoretical basis for sampling and quantization.
*   **Pratt:**
    *   Chapter 1: Fundamentals of Digital Image Processing, will cover the basics of image representation.

This topic lays the groundwork for all subsequent image processing operations. A solid understanding of how images are represented digitally is crucial for mastering more advanced concepts.