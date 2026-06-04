---
title: "Lossy"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff50a"
status: "completed"
scrapedAt: "2026-05-23T18:06:39.525Z"
---
# DIGITAL IMAGE PROCESSING: Module 2: 2D Image Transforms: DFT - Lossy Compression

**Course Outcomes Addressed:** CO2 (Analyze mathematical transforms), CO3 (Illustrate compression schemes)

**Knowledge Levels:** K3 (Analyze, Illustrate)

## Introduction to Lossy Compression in the Context of DFT

While the Discrete Fourier Transform (DFT) itself is a reversible mathematical operation, its application in image compression often leads to **lossy compression**. This occurs when we selectively discard or modify information in the transform domain to achieve a higher compression ratio. The goal is to remove information that is less perceptible to the human visual system.

This module focuses on how the principles of the DFT are utilized in lossy compression techniques.

**Key Concept:** **Lossy Compression** - A type of data compression in which the original data cannot be perfectly reconstructed from the compressed data. It sacrifices some data fidelity for a significant reduction in file size.

**Reference:** Gonzalez & Woods, 4th Ed., Chapter 8 (Image Compression), specifically sections discussing transform coding.

## 2.1 The Principle of Transform Coding for Compression

Transform coding is a fundamental technique in image compression where the image data is transformed into a different domain (e.g., frequency domain using DFT). The transformed coefficients are then quantized and/or selectively discarded.

### 2.1.1 Why Transform Coding?

*   **Energy Compaction:** Many transforms, including the DFT, tend to concentrate the energy of an image into a few dominant coefficients. This means most of the important information is represented by a small subset of coefficients.
*   **Decorrelation:** Transforms can decorrelate image data. In the spatial domain, adjacent pixels are highly correlated. In the frequency domain, the coefficients might be less correlated, making them easier to process and compress independently.
*   **Perceptual Importance:** The human visual system is more sensitive to certain types of information than others. By transforming the image, we can often separate these visually important components from less important ones, allowing us to discard or reduce the precision of the latter.

**Reference:** Jayaraman, Esakkirajan, & Veerakumar, 1st Ed., Chapter 9 (Image Compression), section on Transform Coding.

### 2.1.2 The Transform Coding Process

The general process of transform coding for lossy compression using DFT (or its variants like DCT) involves the following steps:

1.  **Blocking:** The image is divided into smaller blocks (e.g., 8x8 pixels). This is done because the 2D DFT (or DCT) is computationally intensive for the entire image at once, and also because local spatial correlations are more prominent within small blocks.
2.  **Transformation:** Each block is transformed from the spatial domain to a transform domain (e.g., using the 2D DFT).
3.  **Quantization:** The transformed coefficients are quantized. This is the primary step where information is lost. Quantization reduces the precision of the coefficients, mapping a range of coefficient values to a single representative value.
4.  **Encoding:** The quantized coefficients are then encoded efficiently (e.g., using entropy coding like Huffman coding or arithmetic coding).
5.  **Decoding:** During decompression, the encoded coefficients are decoded, followed by inverse quantization, and then the inverse transform is applied to reconstruct the image block.

**Reference:** Castleman, 2/e, Chapter 8 (Image Compression Techniques), section on Transform Coding.

## 2.2 Understanding the 2D DFT for Compression

The 2D Discrete Fourier Transform (DFT) of an $N \times M$ image $f(x, y)$ is given by:

$F(u, v) = \sum_{x=0}^{N-1} \sum_{y=0}^{M-1} f(x, y) e^{-j2\pi(\frac{ux}{N} + \frac{vy}{M})}$

where:
*   $f(x, y)$ is the pixel intensity at spatial coordinates $(x, y)$.
*   $F(u, v)$ is the transform coefficient at frequency coordinates $(u, v)$.
*   $u$ and $v$ are the frequency variables, ranging from $0$ to $N-1$ and $0$ to $M-1$ respectively.

The **2D Inverse DFT (IDFT)** allows perfect reconstruction:

$f(x, y) = \frac{1}{NM} \sum_{u=0}^{N-1} \sum_{v=0}^{M-1} F(u, v) e^{j2\pi(\frac{ux}{N} + \frac{vy}{M})}$

**Key Concept:** **DFT Coefficients and Energy Distribution**
*   $F(0, 0)$ is the DC component, representing the average intensity of the block. It carries the most energy.
*   Coefficients with low $u$ and $v$ values represent low-frequency components (smooth variations in intensity).
*   Coefficients with high $u$ and $v$ values represent high-frequency components (details, edges, noise).

**Example:** Consider a simple 2x2 block of pixels:
$$
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$
The 2D DFT would yield four coefficients, representing the average intensity, horizontal variations, vertical variations, and diagonal variations.

**Important Point to Remember:** The DFT itself is perfectly reversible. The loss occurs *after* the transform, during the quantization and coefficient selection steps.

**Reference:** Gonzalez & Woods, 4th Ed., Chapter 4 (Spatial Filtering: Smoothing and Sharpening), section on 2D DFT properties. While this chapter focuses on filtering, it lays the groundwork for understanding the frequency domain.

## 2.3 Lossy Compression using DFT: Quantization

Quantization is the most critical step for introducing loss in transform coding. The goal is to represent the coefficients with fewer bits.

### 2.3.1 Scalar Quantization

The simplest form is scalar quantization, where each coefficient is quantized independently.

*   **Uniform Quantization:** The range of coefficient values is divided into equal-sized intervals, and all values within an interval are mapped to the midpoint of that interval.
*   **Non-uniform Quantization:** Intervals are chosen based on the probability distribution of the coefficients. For DFT coefficients, most energy is concentrated in low-frequency components (small $u, v$), so we can use finer quantization (more levels) for these coefficients and coarser quantization for high-frequency coefficients.

**Quantization Step:**
$Q(F(u, v)) = \text{round}\left(\frac{F(u, v)}{S}\right)$
where $S$ is the quantization step size.

**De-quantization Step:**
$\hat{F}(u, v) = Q(F(u, v)) \times S$

The difference between $F(u,v)$ and $\hat{F}(u,v)$ is the quantization error, which causes the loss.

**Reference:** Anil K Jain, 1988, Chapter 7 (Image Compression), section on Quantization.

### 2.3.2 Perceptual Quantization (Quantization Matrices)

To exploit the human visual system's characteristics, quantization is often made **perceptually weighted**. High-frequency coefficients, to which the eye is less sensitive, are quantized more coarsely (larger step sizes), while low-frequency coefficients, to which the eye is more sensitive, are quantized more finely (smaller step sizes).

This is often achieved using **quantization matrices**. A quantization matrix has the same dimensions as the transform block (e.g., 8x8 for DCT). Each element in the matrix specifies the step size for the corresponding transform coefficient.

**Example Quantization Matrix (Conceptual for DFT/DCT):**

| High Freq (Large Value) | High Freq (Large Value) | ... | High Freq (Large Value) |
| :---------------------- | :---------------------- | :-- | :---------------------- |
| High Freq (Large Value) | Medium Freq (Medium Val)| ... | High Freq (Large Value) |
| ...                     | ...                     | ... | ...                     |
| High Freq (Large Value) | High Freq (Large Value) | ... | Low Freq (Small Value)  |

*(Note: In actual DCT-based compression like JPEG, the top-left corner (DC coefficient) has the smallest quantization step, and values increase as you move towards the bottom-right corner, representing higher frequencies.)*

The quantized coefficient is calculated as:
$Q_{pq}(F(u, v)) = \text{round}\left(\frac{F(u, v)}{Q_{matrix}(u, v)}\right)$

**Reference:** Gonzalez & Woods, 4th Ed., Chapter 8 (Image Compression), Section 8.3.2 (Quantization) and discussion on transform coding.

## 2.4 Coefficient Selection and Zeroing

Another way to achieve lossy compression with transforms is by selectively discarding coefficients. Since many high-frequency coefficients will become zero or very small after quantization, we can explicitly set them to zero.

*   **Thresholding:** Coefficients whose magnitude is below a certain threshold are set to zero.
*   **Zig-zag Scan:** Coefficients are often scanned in a zig-zag pattern, starting from the DC coefficient and moving towards higher frequencies. This groups consecutive zeros together, which is highly efficient for subsequent entropy coding.

**Reference:** Pratt, 4th Ed., Chapter 15 (Image Compression), section on Transform Coding.

## 2.5 Limitations of DFT for Image Compression

While the DFT can be used for transform coding, the **Discrete Cosine Transform (DCT)** is generally preferred for image compression in practice.

**Why DCT is Preferred:**

*   **Real Coefficients:** The DFT produces complex-valued coefficients. For real-valued image data, the DFT often has redundancy (e.g., symmetry properties). The DCT, however, produces purely real coefficients, simplifying processing and storage.
*   **Better Energy Compaction:** For typical image data, the DCT generally provides better energy compaction than the DFT, meaning it concentrates more energy into fewer coefficients. This leads to higher compression ratios for a given level of distortion.
*   **Edge Effects:** When the DFT is applied to blocks, it implicitly assumes the block repeats periodically. This can lead to "blocking artifacts" at the block boundaries, especially if the values at the edges of adjacent blocks are very different. The DCT, due to its definition, has a smoother transition at the block boundaries, reducing these artifacts.

**Reference:** Jayaraman, Esakkirajan, & Veerakumar, 1st Ed., Chapter 9 (Image Compression), comparison of DFT and DCT.

## 2.6 Practical Implementation: JPEG and the DCT

The most widely known image compression standard, JPEG, uses the **DCT**, not the DFT, for its transform coding step. However, understanding the principles of transform coding as applied to DFT is foundational.

**JPEG Compression Overview (Simplified):**

1.  **Color Space Conversion:** RGB to YCbCr.
2.  **Downsampling:** Chroma components (Cb, Cr) are often subsampled (e.g., 4:2:0) because the human eye is less sensitive to color detail than luminance.
3.  **Blocking:** Image is divided into 8x8 blocks.
4.  **DCT:** 8x8 DCT is applied to each block.
5.  **Quantization:** Each block's DCT coefficients are quantized using standard JPEG quantization tables (which are perceptually weighted).
6.  **Encoding:** Quantized coefficients are scanned in zig-zag order, run-length encoded, and then entropy coded (e.g., Huffman coding).

**Reference:** Gonzalez & Woods, 4th Ed., Chapter 8 (Image Compression), Section 8.5 (The JPEG Compression Standard).

## 2.7 Example: Lossy Compression with DFT (Conceptual)

Let's illustrate the concept with a simplified 4x4 block.

**Original 4x4 Block:**
$$
\begin{bmatrix}
50 & 55 & 60 & 65 \\
52 & 57 & 62 & 67 \\
54 & 59 & 64 & 69 \\
56 & 61 & 66 & 71
\end{bmatrix}
$$
*(Note: This is a very simple, smooth block. Real images have much more complex patterns.)*

1.  **Block Division:** Assume this is a 4x4 block.
2.  **2D DFT:** Compute the 16 coefficients of the 2D DFT for this block. The DC component $F(0,0)$ will represent the average intensity. The other coefficients will represent varying frequencies.
    *   *Hypothetical DFT Coefficients (simplified and scaled for illustration):*
        *   $F(0,0) \approx 3200$ (Average intensity * N*M)
        *   Other coefficients will be smaller, representing horizontal, vertical, and diagonal changes. Many high-frequency coefficients might be very close to zero.

3.  **Quantization:** Let's apply a simple quantization by dividing coefficients by a step size $S$. Suppose $S=100$.
    *   $Q(F(0,0)) = \text{round}(3200 / 100) = 32$
    *   Suppose a high-frequency coefficient is $F(3,3) = 5$. Then $Q(F(3,3)) = \text{round}(5 / 100) = 0$.

4.  **Coefficient Selection/Zeroing:** All coefficients that become zero after quantization are effectively discarded. If we use a zig-zag scan and run-length encoding, many zeros will be represented efficiently.

5.  **De-quantization and IDFT:** During decompression, the quantized coefficients are multiplied back by the step size $S$.
    *   $\hat{F}(0,0) = 32 \times 100 = 3200$
    *   $\hat{F}(3,3) = 0 \times 100 = 0$
    Then, the 2D IDFT is applied. The reconstructed block will be an approximation of the original. The lost information (due to zeroing of coefficients and the rounding in quantization) causes a loss in fidelity.

**Comparison with Uncompressed:** The uncompressed block would require $16 \text{ pixels} \times \text{bits per pixel}$ (e.g., 8 bits/pixel = 128 bits). The compressed representation would involve storing the quantized DC coefficient (e.g., 10-12 bits) and the non-zero AC coefficients efficiently encoded. The number of bits required would be significantly less.

## 2.8 Key Takeaways for Lossy DFT Compression

*   **Loss occurs during quantization and coefficient selection, not the transform itself.**
*   **DFT's strength for compression lies in energy compaction and decorrelation.**
*   **Human visual perception is exploited by quantizing high-frequency coefficients more coarsely.**
*   **The DCT is generally preferred over DFT for practical image compression due to real coefficients, better energy compaction, and reduced edge artifacts.**
*   **Quantization matrices and zig-zag scanning are crucial techniques.**

## 2.9 Practice Questions

1.  **Explain the concept of energy compaction in the context of image transforms for compression.** (CO2, K3)
    *   **Answer:** Energy compaction refers to the ability of a transform to concentrate the energy of the input signal (image) into a few coefficients in the transform domain. This means that most of the visually significant information is represented by a small number of transform coefficients. This is crucial for compression because it allows us to discard or reduce the precision of the less significant coefficients without severely degrading the perceived image quality, thereby achieving higher compression ratios.

2.  **Describe the role of quantization in lossy compression using DFT.** (CO3, K3)
    *   **Answer:** Quantization is the primary mechanism for introducing loss in DFT-based compression. It involves reducing the precision of the DFT coefficients. This is typically done by dividing each coefficient by a quantization step size and then rounding the result. Coefficients with smaller magnitudes are more susceptible to becoming zero after quantization. The choice of quantization step sizes, often guided by perceptual considerations (e.g., using quantization matrices), determines the trade-off between compression ratio and image fidelity.

3.  **Why is the DCT generally preferred over the DFT for image compression, even though DFT is a well-known transform?** (CO3, K3)
    *   **Answer:** The DCT is preferred over the DFT for image compression for several reasons:
        *   **Real Coefficients:** DCT produces only real-valued coefficients for real input signals, simplifying processing and reducing storage compared to DFT's complex coefficients.
        *   **Better Energy Compaction:** For typical image data, the DCT tends to concentrate energy into fewer coefficients than the DFT, leading to higher compression efficiency.
        *   **Reduced Edge Artifacts:** The DCT exhibits smoother transitions at block boundaries, minimizing "blocking artifacts" that can occur with the DFT due to its inherent periodicity assumption.

4.  **What is a quantization matrix, and how is it used in perceptually driven lossy compression?** (CO3, K3)
    *   **Answer:** A quantization matrix is a matrix of the same size as the transform block (e.g., 8x8). Each element in the matrix specifies a quantization step size for the corresponding transform coefficient. In perceptually driven lossy compression, the matrix is designed such that coefficients representing low frequencies (which the human eye is more sensitive to) are divided by smaller step sizes (finer quantization), while coefficients representing high frequencies (to which the eye is less sensitive) are divided by larger step sizes (coarser quantization). This allows for more aggressive compression of visually less important information.

5.  **Briefly outline the steps involved in transform coding for lossy image compression.** (CO3, K3)
    *   **Answer:** The steps are:
        1.  **Blocking:** Divide the image into small blocks.
        2.  **Transformation:** Apply a transform (like DFT or DCT) to each block.
        3.  **Quantization:** Reduce the precision of the transform coefficients, typically using perceptually weighted step sizes.
        4.  **Encoding:** Efficiently encode the quantized coefficients (e.g., using zig-zag scanning, run-length encoding, and entropy coding).

## Important Points to Remember

*   The DFT is a reversible transform. Loss is introduced *after* the DFT by manipulating its coefficients.
*   Energy compaction and decorrelation are key benefits of using transforms for compression.
*   Quantization is the primary source of loss in lossy transform coding.
*   Perceptual coding aims to remove information that is less visible to the human eye.
*   While DFT is a foundational transform, DCT is the workhorse for modern image compression standards like JPEG.

This concludes the study notes for Lossy Compression using DFT. Remember to refer to your textbooks for more detailed mathematical derivations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
