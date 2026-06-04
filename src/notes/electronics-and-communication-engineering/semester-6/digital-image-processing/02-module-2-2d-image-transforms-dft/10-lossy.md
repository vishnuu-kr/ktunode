---
title: "Lossy"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee1a"
status: "completed"
scrapedAt: "2026-05-23T18:00:35.703Z"
---
# Digital Image Processing: Module 2 - 2D Image Transforms: DFT - Topic: Lossy Compression

This module focuses on understanding and applying 2D image transforms, specifically the Discrete Fourier Transform (DFT), and how it relates to image compression, particularly **lossy compression**.

---

## 1. Introduction to Image Transforms and Compression

### 1.1 What are Image Transforms?
*   **Definition:** Image transforms are mathematical operations that convert an image from its spatial domain (pixel values represent intensity at specific locations) to a different domain (e.g., frequency domain).
*   **Purpose:**
    *   **Feature Extraction:** Highlight important characteristics of an image (e.g., edges, textures).
    *   **Data Compression:** Represent image data more efficiently.
    *   **Image Enhancement:** Improve image quality (e.g., noise reduction, sharpening).
    *   **Image Analysis:** Facilitate various image processing tasks.
*   **Relationship to CO2:** This section directly addresses the learning outcome of analyzing mathematical transforms necessary for image processing by introducing the concept of transforms.

### 1.2 What is Image Compression?
*   **Definition:** Image compression is the process of reducing the amount of data required to represent an image, while retaining acceptable visual quality.
*   **Goal:**
    *   Reduce storage space.
    *   Reduce transmission bandwidth.
    *   Increase speed of image transmission.
*   **Types of Compression:**
    *   **Lossless Compression:** No information is lost during compression. The decompressed image is identical to the original. Examples: Run-Length Encoding (RLE), Huffman Coding.
    *   **Lossy Compression:** Some information is lost during compression. The decompressed image is an approximation of the original, but often visually indistinguishable. This is the focus of this topic.

*   **Relationship to CO3:** This section provides the foundational understanding of image compression, which is a core aspect of the learning outcome related to illustrating image compression schemes.

---

## 2. The Discrete Fourier Transform (DFT) for Image Processing

### 2.1 The 2D DFT
*   **Concept:** The 2D DFT decomposes an image into a sum of complex sinusoidal components of varying frequencies, amplitudes, and orientations. It transforms a 2D spatial domain signal into a 2D frequency domain representation.
*   **Forward DFT (Spatial to Frequency Domain):**
    For an $M \times N$ image $f(x, y)$, the 2D DFT is given by:
    $$F(u, v) = \sum_{x=0}^{M-1} \sum_{y=0}^{N-1} f(x, y) e^{-j2\pi(\frac{ux}{M} + \frac{vy}{N})}$$
    where:
    *   $f(x, y)$ is the pixel intensity at spatial coordinates $(x, y)$.
    *   $F(u, v)$ is the complex-valued coefficient representing the strength of a specific frequency component at frequency coordinates $(u, v)$.
    *   $u$ and $v$ are the frequency variables, ranging from $0$ to $M-1$ and $0$ to $N-1$ respectively.
    *   $j$ is the imaginary unit.
    *   $e^{-j\theta} = \cos(\theta) - j\sin(\theta)$ (Euler's formula).

*   **Inverse DFT (Frequency to Spatial Domain):**
    $$f(x, y) = \frac{1}{MN} \sum_{u=0}^{M-1} \sum_{v=0}^{N-1} F(u, v) e^{j2\pi(\frac{ux}{M} + \frac{vy}{N})}$$

*   **Properties of 2D DFT:**
    *   **Linearity:** $DFT\{af(x,y) + bg(x,y)\} = aF(u,v) + bG(u,v)$.
    *   **Separability:** The 2D DFT can be computed by performing 1D DFTs on rows and then columns (or vice-versa). This is crucial for computational efficiency (leading to the Fast Fourier Transform - FFT).
    *   **Symmetry:** If $f(x,y)$ is real, then $F(u,v) = F^*(M-u, N-v)$, where $F^*$ is the complex conjugate.
    *   **Translation:** Shifting the image in the spatial domain shifts the phase of $F(u,v)$ in the frequency domain.
    *   **Rotation:** Rotating the image in the spatial domain rotates $F(u,v)$ in the frequency domain.
    *   **Average Value:** $F(0,0)$ represents the average intensity of the image.

*   **Visualization of the Frequency Domain:**
    *   $F(u, v)$ is a complex number, typically represented by its magnitude $|F(u, v)|$ and phase $\angle F(u, v)$.
    *   The **magnitude spectrum** ($|F(u, v)|$) shows the distribution of frequencies. Low frequencies (near the center of the spectrum after shifting) correspond to slowly varying intensity regions (smooth areas), while high frequencies (towards the corners) correspond to rapid changes in intensity (edges, details).
    *   The **phase spectrum** ($\angle F(u, v)$) contains information about the spatial location of features.
    *   To visualize the spectrum, it's common to display $\log(1 + |F(u, v)|)$ to enhance the visibility of low-magnitude coefficients. The DC component $F(0,0)$ is usually very large and would dominate the spectrum if not scaled or shifted. A common practice is to shift the $F(0,0)$ term to the center of the display.

*   **Relationship to CO2:** This section directly addresses the learning outcome by explaining the mathematical formulation and properties of the 2D DFT, a crucial image transform.

*   **Textbook Reference:** Gonzalez & Woods, Chapter 4 (Briefly introduces Fourier Transform, though the focus is more on other transforms for image enhancement, the underlying principle of frequency decomposition is relevant). Jayaraman et al., Chapter 5 (DFT and its applications).

---

## 3. Lossy Compression using DFT

### 3.1 The Principle of Lossy Compression with DFT
*   **Core Idea:** Images contain redundant information. By transforming an image into the frequency domain using DFT, we can identify and discard less significant frequency components without drastically affecting the visual quality of the reconstructed image.
*   **Steps Involved:**
    1.  **Transform:** Convert the spatial domain image to the frequency domain using the 2D DFT.
    2.  **Quantization:** Reduce the precision of the frequency coefficients. This is the primary step where information is lost. Less significant coefficients are quantized more coarsely (represented with fewer bits), while more significant ones are quantized more finely.
    3.  **Encoding:** Encode the quantized coefficients efficiently (e.g., using Huffman coding or other lossless methods).
    4.  **Transmission/Storage:** Store or transmit the encoded data.
    5.  **Decoding:** Decode the received data to obtain the quantized coefficients.
    6.  **Inverse Transform:** Reconstruct the image from the quantized coefficients using the Inverse DFT.

*   **Why it's Lossy:** The quantization step discards information. When we reconstruct the

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
