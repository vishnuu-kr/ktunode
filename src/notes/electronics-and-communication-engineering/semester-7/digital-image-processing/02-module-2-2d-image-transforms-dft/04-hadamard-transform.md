---
title: "Hadamard transform"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff505"
status: "completed"
scrapedAt: "2026-05-23T18:06:35.452Z"
---
# DIGITAL IMAGE PROCESSING - Module 2: 2D Image Transforms: DFT - Hadamard Transform

## 1. Introduction to Hadamard Transform

The Hadamard transform is a type of orthogonal transform that operates on data that can be represented in a binary form (e.g., +1 and -1, or 0 and 1). Unlike the Discrete Fourier Transform (DFT), which uses complex exponentials, the Hadamard transform utilizes simple real numbers (specifically, +1 and -1). This makes it computationally very efficient and particularly useful for applications involving binary data or where computational speed is paramount.

**Key Concepts:**

*   **Orthogonal Transform:** A transform where the basis vectors are orthogonal to each other. This property is crucial for efficient decomposition and reconstruction of signals.
*   **Walsh Functions:** The basis functions of the Hadamard transform are known as Walsh functions. These functions are sequences of +1 and -1 values.
*   **Walsh-Hadamard Transform (WHT):** This is the general term used for the Hadamard transform.

**Reference:**

*   **Gonzalez & Woods (4th Ed.):** Introduces transforms in Chapter 4, emphasizing their role in feature extraction and data compression. While not detailing Hadamard specifically as a primary transform like DFT/DCT, it sets the stage for understanding the principles of orthogonal transforms.
*   **Jayaraman et al. (1st Ed.):** May touch upon various orthogonal transforms. The efficiency of the Hadamard transform for certain applications would be a key takeaway.

## 2. Definition and Properties

### 2.1 Hadamard Matrix

The Hadamard transform is defined by a **Hadamard matrix**. A Hadamard matrix of order *N* (where *N* is a power of 2, i.e., $N = 2^m$) is an $N \times N$ matrix with entries +1 or -1 such that its rows (and columns) are mutually orthogonal.

**Properties of a Hadamard Matrix (H):**

*   $H H^T = N I_N$, where $H^T$ is the transpose of $H$, and $I_N$ is the identity matrix of order *N*.
*   $H^{-1} = \frac{1}{N} H^T$. Since $H$ is symmetric, $H^{-1} = \frac{1}{N} H$.

**Construction of Hadamard Matrices:**

Hadamard matrices can be constructed recursively using the Sylvester construction (also known as Kronecker product construction).

*   **Order 2:**
    $H_2 = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$

*   **Order 4:**
    $H_4 = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 \\ 1 & -1 & -1 & 1 \end{bmatrix} = H_2 \otimes H_2 = \begin{bmatrix} H_2 & H_2 \\ H_2 & -H_2 \end{bmatrix}$

    Here, $\otimes$ denotes the Kronecker product.

*   **General Construction (for $N = 2^m$):**
    $H_{2N} = \begin{bmatrix} H_N & H_N \\ H_N & -H_N \end{bmatrix}$

**Example:** For $N=8$:
$H_8 = \begin{bmatrix} H_4 & H_4 \\ H_4 & -H_4 \end{bmatrix}$

### 2.2 Walsh-Hadamard Transform (WHT)

For a vector $\mathbf{f}$ of length *N*, the WHT is given by:

$\mathbf{F} = \frac{1}{N} H_N \mathbf{f}$

where $\mathbf{F}$ is the transformed vector.

**For a 2D Image:**

A 2D image $f(x, y)$ of size $N \times N$ can be transformed using the 2D WHT. This is typically done by applying the 1D WHT separably, first to each row and then to each column (or vice-versa).

Let $F(u, v)$ be the transformed image.

1.  **Row transformation:** $F_r(u, y) = \frac{1}{N} \sum_{x=0}^{N-1} H_N(u, x) f(x, y)$ for each row $y$.
2.  **Column transformation:** $F(u, v) = \frac{1}{N} \sum_{y=0}^{N-1} H_N(v, y) F_r(u, y)$ for each column $u$.

This can be expressed using matrix notation:

$\mathbf{F} = \frac{1}{N} H_N \mathbf{F}_{row} H_N^T$

where $\mathbf{F}_{row}$ is the matrix containing row-transformed data.

**Inverse WHT:**

The inverse WHT is remarkably simple:

$\mathbf{f} = H_N \mathbf{F}$

Notice the absence of the $\frac{1}{N}$ scaling factor in the inverse transform, which is a significant advantage.

**Learning Outcome Alignment:**

*   **CO2 (K3):** Understanding the definition and matrix representation of WHT directly addresses analyzing mathematical transforms.

**Important Points to Remember:**

*   WHT operates on real numbers (+1, -1), making it computationally faster than DFT.
*   The Hadamard matrix is orthogonal.
*   The inverse WHT is the same as the forward transform, scaled by $1/N$ and transposed (since $H_N$ is symmetric).
*   The order of the Hadamard matrix *N* must be a power of 2.

## 3. Computational Efficiency (Fast Walsh-Hadamard Transform - FWHT)

The computational complexity of directly computing the WHT is $O(N^2)$, similar to the direct computation of the DFT. However, due to the special structure of the Hadamard matrix, the Fast Walsh-Hadamard Transform (FWHT) can compute the transform in $O(N \log N)$ operations, which is comparable to the Fast Fourier Transform (FFT).

The FWHT algorithm exploits the recursive structure of the Hadamard matrix. It's essentially a butterfly computation, similar to the FFT, but with additions and subtractions instead of complex multiplications.

**Example of FWHT for $N=4$:**

To transform a vector $\mathbf{f} = [f_0, f_1, f_2, f_3]^T$:

**Step 1 (First Stage):**
$y_0 = f_0 + f_1$
$y_1 = f_0 - f_1$
$y_2 = f_2 + f_3$
$y_3 = f_2 - f_3$

**Step 2 (Second Stage):**
$F_0 = y_0 + y_2$
$F_1 = y_1 + y_3$
$F_2 = y_0 - y_2$
$F_3 = y_1 - y_3$

The transformed vector is $\mathbf{F} = [F_0, F_1, F_2, F_3]^T$.

**Learning Outcome Alignment:**

*   **CO2 (K3):** Understanding the computational efficiency and the concept of FWHT reinforces the analysis of mathematical transforms.

## 4. Ordering of Walsh Functions

The ordering of the rows in the Hadamard matrix determines the ordering of the Walsh functions. There are different ordering schemes, the most common being:

*   **Walsh Ordering (Natural Ordering):** Corresponds to the standard Sylvester construction. The basis functions are ordered by the number of zero crossings (sign changes) in the sequence.
*   **Sequency Ordering:** Orders the basis functions by their "sequency," which is half the average number of zero crossings per unit interval. This ordering has desirable properties for signal analysis.
*   **Hadamard Ordering (Paley Ordering):** Based on the Paley construction.

In image processing, the specific ordering might influence how energy is distributed in the transform domain, but the fundamental transform properties remain. For most practical purposes, the natural or sequency ordering is used.

**Example (Sequency Ordering for N=4):**

The standard $H_4$ matrix corresponds to a specific ordering. Sequency ordering reorders the rows to group functions with similar sequency.

**Reference:**

*   **Castleman (2/e):** Might discuss sequency as a measure of complexity for Walsh functions, which is analogous to frequency in Fourier analysis.

## 5. Applications in Digital Image Processing

The Hadamard transform, due to its efficiency and the nature of its basis functions, finds applications in several areas of image processing.

### 5.1 Image Compression

The WHT can be used for image compression by exploiting the energy compaction property. For many natural images, the WHT tends to concentrate most of the image's energy into a few coefficients, especially those corresponding to low-sequency Walsh functions.

**Process:**

1.  **Block Transformation:** The image is divided into smaller blocks (e.g., $8 \times 8$ or $16 \times 16$).
2.  **WHT Application:** The WHT is applied to each block.
3.  **Coefficient Selection/Quantization:** Coefficients with small magnitudes (representing less energy) are either quantized to zero or a smaller number of bits.
4.  **Encoding:** The remaining significant coefficients are encoded efficiently (e.g., using Huffman coding or run-length encoding).

**Advantages:**

*   **Speed:** FWHT is very fast.
*   **No Multiplication:** Only additions and subtractions are required, which can be faster on some hardware.

**Disadvantages:**

*   **Energy Compaction:** Generally not as good as the Discrete Cosine Transform (DCT) for typical images, which often leads to lower compression ratios for the same quality. DCT's basis functions are more sinusoidal and better match the smooth variations found in images.

**Learning Outcome Alignment:**

*   **CO3 (K3):** This application directly relates to illustrating image compression schemes and analyzing their effectiveness.

**Example:** Imagine a block with mostly positive values. The WHT coefficients will tend to be clustered towards the lower-sequency functions. If we discard the higher-sequency coefficients, we achieve compression.

### 5.2 Image Filtering and Enhancement

The WHT can be used in the transform domain for filtering.

**Process:**

1.  **Transform:** Apply WHT to the image.
2.  **Multiply with Filter:** Multiply the transform coefficients by a filter mask.
3.  **Inverse Transform:** Apply the inverse WHT to obtain the filtered image.

This is analogous to frequency-domain filtering using the DFT/FFT. However, the "frequency" in WHT is "sequency."

**Applications:**

*   **Low-Pass Filtering:** Attenuate high-sequency coefficients to smooth the image.
*   **High-Pass Filtering:** Attenuate low-sequency coefficients to enhance edges.

**Considerations:**

*   The nature of the Walsh functions (square waves with abrupt transitions) can lead to "ringing artifacts" similar to those seen with the DFT when sharp cutoffs are used in the transform domain. DCT is often preferred for its smoother basis functions.

**Learning Outcome Alignment:**

*   **CO4 (K3):** This demonstrates the analysis of filtering schemes by applying them in the transform domain.

### 5.3 Feature Extraction

The coefficients of the WHT can serve as features for image analysis and classification. The distribution of energy among the coefficients can characterize the texture and content of an image.

### 5.4 Pattern Recognition

WHT has been used in pattern recognition systems due to its computational efficiency.

**Reference:**

*   **Gonzalez & Woods (4th Ed.):** Discusses transforms in the context of feature extraction and data compression, highlighting the trade-offs between different transforms. WHT's speed would be a key advantage in certain scenarios.
*   **Jain (1988):** Likely details the properties and applications of various transforms, including WHT, in pattern recognition and signal processing.
*   **Castleman (2/e):** Might provide specific examples of WHT in image processing applications like compression or filtering.

**Important Points to Remember:**

*   WHT is computationally very efficient due to its reliance on additions/subtractions.
*   It's best suited for binary data or situations where computational speed is paramount.
*   For general image compression and filtering, DCT often outperforms WHT in terms of energy compaction and artifact reduction due to its smoother basis functions.

## 6. Comparison with Other Transforms (DFT, DCT)

| Feature           | DFT (Discrete Fourier Transform)                  | DCT (Discrete Cosine Transform)                     | WHT (Walsh-Hadamard Transform)                     |
| :---------------- | :------------------------------------------------ | :-------------------------------------------------- | :------------------------------------------------- |
| **Basis Functions** | Complex exponentials ($e^{-j2\pi k n/N}$)        | Cosine functions                                    | Walsh functions (+1, -1 square waves)              |
| **Data Type**     | Complex numbers                                   | Real numbers                                        | Real numbers (+1, -1)                              |
| **Computation**   | $O(N^2)$ direct, $O(N \log N)$ FFT                | $O(N^2)$ direct, $O(N \log N)$ Fast DCT            | $O(N^2)$ direct, $O(N \log N)$ FWHT               |
| **Computational Cost** | Moderate (complex multiplications)              | Moderate (real multiplications, additions)          | Very Low (only additions and subtractions)         |
| **Energy Compaction** | Good for sinusoidal signals                       | Excellent for correlated data (natural images)    | Moderate (depends on data structure)               |
| **Symmetry**      | Not inherently symmetric                          | Inherently symmetric                                | Inherently symmetric                               |
| **Inverse Transform** | Complex, involves complex conjugation         | Real, similar to forward transform                  | Very simple, essentially the forward transform     |
| **Applications**  | Signal analysis, filtering, convolution         | Image compression (JPEG), filtering, analysis       | Binary data processing, fast filtering, some compression |
| **Artifacts**     | Ringing with sharp cutoffs, Gibbs phenomenon      | Ringing with sharp cutoffs (less than DFT)          | Ringing with sharp cutoffs (can be more pronounced) |

**Learning Outcome Alignment:**

*   **CO2 (K3):** Comparing WHT with DFT and DCT helps in analyzing the strengths and weaknesses of different mathematical transforms.

**Important Points to Remember:**

*   DCT is generally the preferred transform for image compression (like JPEG) due to its superior energy compaction for natural images.
*   WHT's main advantage is its computational simplicity and speed, making it suitable for applications where these factors are critical, especially with binary data.

## 7. Practice Questions and Answers

**Question 1:** What are the primary advantages of using the Hadamard transform compared to the DFT for image processing?
**Answer:** The primary advantage is its computational efficiency. The Hadamard transform uses only additions and subtractions, making it significantly faster than the DFT, which requires complex multiplications. The inverse Hadamard transform is also very simple.

**Question 2:** What is the fundamental requirement for the size of an image or vector to be transformed using the Hadamard transform?
**Answer:** The size (dimension) of the image or vector must be a power of 2 (e.g., 2, 4, 8, 16, ...). This is because the Hadamard transform relies on Hadamard matrices, which are defined for dimensions that are powers of 2.

**Question 3:** Explain why the Discrete Cosine Transform (DCT) is often preferred over the Hadamard Transform (WHT) for general image compression tasks like in JPEG.
**Answer:** The DCT generally exhibits better energy compaction for natural images. Its basis functions (cosine waves) are smoother and better match the typical variations and correlations found in image data, leading to higher compression ratios for a given level of visual quality compared to the WHT, whose basis functions are abrupt square waves.

**Question 4:** If you have a 256x256 image, can you directly apply the 2D Walsh-Hadamard Transform? If not, what would be the common approach?
**Answer:** Yes, since 256 is a power of 2 ($2^8$), you can directly apply the 2D Walsh-Hadamard Transform. If the image size were not a power of 2 (e.g., 250x250), common approaches would be to either pad the image with zeros to the next power of 2 (e.g., 256x256) or to process the image in smaller blocks that are powers of 2.

**Question 5:** What mathematical operation is fundamentally involved in computing the Fast Walsh-Hadamard Transform (FWHT)?
**Answer:** The FWHT primarily involves a series of additions and subtractions.

**Question 6:** The inverse Walsh-Hadamard Transform is computationally very similar to the forward transform. What is the difference in the scaling factor between the forward and inverse WHT?
**Answer:** The forward WHT is typically defined with a scaling factor of $1/N$, while the inverse WHT often does not include this scaling factor or includes it as $N$ depending on the definition of the forward transform. If $\mathbf{F} = \frac{1}{N} H_N \mathbf{f}$, then $\mathbf{f} = H_N \mathbf{F}$.

## 8. Conclusion and Summary

The Hadamard transform is a computationally efficient orthogonal transform that utilizes simple +1 and -1 values as basis functions. Its main advantage lies in its speed, achieved through the Fast Walsh-Hadamard Transform (FWHT), which requires only additions and subtractions. While it can be applied to image compression, filtering, and feature extraction, the Discrete Cosine Transform (DCT) generally provides better energy compaction for natural images, making it more suitable for widespread compression standards like JPEG. The Hadamard transform is particularly useful for binary data or applications where computational speed is the highest priority.

**Learning Outcome Coverage:**

*   **CO1 (K2):** The introduction to transforms and their properties contributes to understanding components of image processing systems by showing how data is manipulated.
*   **CO2 (K3):** The definition, properties, computational aspects (FWHT), and comparisons with DFT/DCT directly address analyzing various concepts and mathematical transforms.
*   **CO3 (K3):** The application in image compression directly illustrates schemes of image compression.
*   **CO4 (K3):** The application in image filtering demonstrates analyzing filtering schemes.
*   **CO5 (K2):** While not a primary focus, feature extraction using WHT coefficients indirectly relates to the underlying principles of segmentation by providing data representations.

This comprehensive study note covers the Hadamard transform's definition, properties, computational efficiency, and applications in digital image processing, drawing upon the principles discussed in common digital image processing textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
