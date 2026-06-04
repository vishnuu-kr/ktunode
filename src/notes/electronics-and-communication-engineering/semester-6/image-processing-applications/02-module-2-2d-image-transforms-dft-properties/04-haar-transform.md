---
title: "Haar transform"
subject: "IMAGE PROCESSING APPLICATIONS"
module: "Module 2: 2D Image transforms: DFT, Properties"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fef63"
status: "completed"
scrapedAt: "2026-05-23T18:01:14.271Z"
---
# IMAGE PROCESSING APPLICATIONS

## Module 2: 2D Image Transforms: DFT, Properties

### Topic: Haar Transform

This topic introduces the Haar transform, a fundamental tool in image processing for analyzing and manipulating image data. We will explore its properties, applications, and how it relates to other transforms discussed in this module, particularly the Discrete Fourier Transform (DFT).

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the concept and mathematical formulation of the Haar transform.
*   Explain the basis functions of the Haar transform.
*   Derive and apply the Haar transform for image data.
*   Analyze the properties of the Haar transform, such as linearity, orthogonality, and separability.
*   Compare the Haar transform with other 2D image transforms, like the DFT, in terms of their characteristics and applications.
*   Understand how the Haar transform can be used for image compression, denoising, and feature extraction.

---

### 1. Introduction to Haar Transform

The Haar transform, developed by Alfred Haar in 1909, is one of the simplest orthogonal transforms. It is known for its computational efficiency and its ability to represent images using a set of piecewise constant basis functions. Unlike the DFT, which uses sinusoidal basis functions, the Haar transform uses square waves of varying widths and amplitudes.

**Key Concept:** The Haar transform decomposes an image into a representation that highlights different levels of detail and smoothness.

**Reference:**
*   **Gonzalez & Woods, *Digital Image Processing*** (2nd Ed., 2002, although the 2009 edition is referenced, foundational concepts are consistent): Discusses Haar transform as an example of orthogonal transforms used in signal processing and its applications in image analysis.
*   **Jayaraman, Esakkirajan, & Veerakumar, *Digital Image Processing*** (2015): Provides a detailed mathematical derivation of the Haar transform and its use in image compression.

---

### 2. Haar Basis Functions

The Haar transform operates on a one-dimensional signal (or row/column of an image) and then extends to two dimensions by separability.

#### 2.1 One-Dimensional Haar Transform

For a signal of length $N$, where $N$ is a power of 2, the Haar transform involves averaging and differencing operations.

Let the input signal be $f = [f_0, f_1, \dots, f_{N-1}]$. The Haar transform of $f$ is a sequence $F = [F_0, F_1, \dots, F_{N-1}]$.

The transform can be visualized as a recursive process:

1.  **First Level:**
    *   Average pairs of adjacent elements: $a_i = \frac{f_{2i} + f_{2i+1}}{2}$
    *   Difference pairs of adjacent elements: $d_i = \frac{f_{2i} - f_{2i+1}}{2}$
    *   The first $N/2$ coefficients of the Haar transform will contain these averages and differences.

2.  **Subsequent Levels:** This process is recursively applied to the sequence of averages until only one average remains.

**Example (N=4):**
Let $f = [f_0, f_1, f_2, f_3]$.

*   **Level 1:**
    *   $a_0 = \frac{f_0 + f_1}{2}$
    *   $d_0 = \frac{f_0 - f_1}{2}$
    *   $a_1 = \frac{f_2 + f_3}{2}$
    *   $d_1 = \frac{f_2 - f_3}{2}$
    *   Intermediate coefficients: $[\frac{f_0+f_1}{2}, \frac{f_2+f_3}{2}, \frac{f_0-f_1}{2}, \frac{f_2-f_3}{2}]$

*   **Level 2 (apply to averages):**
    *   $a'_0 = \frac{a_0 + a_1}{2} = \frac{\frac{f_0+f_1}{2} + \frac{f_2+f_3}{2}}{2} = \frac{f_0+f_1+f_2+f_3}{4}$ (This is the DC component or average of the entire signal)
    *   $d'_0 = \frac{a_0 - a_1}{2} = \frac{\frac{f_0+f_1}{2} - \frac{f_2+f_3}{2}}{2} = \frac{f_0+f_1-f_2-f_3}{4}$

*   **Final Haar Transform Coefficients (N=4):**
    $F = [F_0, F_1, F_2, F_3] = [\frac{f_0+f_1+f_2+f_3}{4}, \frac{f_0+f_1-f_2-f_3}{4}, \frac{f_0-f_1}{2}, \frac{f_2-f_3}{2}]$

    **Important Note:** The order of coefficients might vary across literature. A common ordering is [DC, detail coefficients of increasing frequency]. Another common ordering might place all averages first, then all differences. The definition used here places the overall average first, then the difference between averages, and then the local differences.

#### 2.2 Haar Basis Functions (Wavelets)

The Haar transform can be represented using basis functions, which are also known as Haar wavelets. These are piecewise constant functions.

For a signal of length $N=2^m$:
*   $h_0(t) = 1$ for $0 \le t < 1$, and 0 otherwise. (DC component)
*   $h_k(t)$: For $k=1, \dots, N-1$, these are scaled and shifted versions of the Haar mother wavelet.

The $k$-th Haar basis function $\psi_k(t)$ can be defined as:
$\psi_k(t) = \begin{cases} 1 & \text{if } \lfloor 2t \rfloor \text{ is even} \\ -1 & \text{if } \lfloor 2t \rfloor \text{ is odd} \\ 0 & \text{otherwise} \end{cases}$

This definition can be extended to create a family of Haar wavelets. However, for the discrete Haar transform, we typically think in terms of the averaging and differencing operations.

**Gonzalez & Woods** often present the Haar transform matrix, which clearly shows the structure of the basis functions.

**Example Haar Transform Matrix for N=4:**

Let the input vector be $f = \begin{bmatrix} f_0 \\ f_1 \\ f_2 \\ f_3 \end{bmatrix}$.
The Haar transform $F = Hf$, where $H$ is the Haar transform matrix.

$H = \frac{1}{2} \begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & 1 & -1 & -1 \\
\sqrt{2} & -\sqrt{2} & 0 & 0 \\
0 & 0 & \sqrt{2} & -\sqrt{2}
\end{bmatrix}$

*   **Note on Scaling:** The scaling factor can vary ($1$ or $1/\sqrt{N}$ or $1/2$). The important aspect is the structure. The matrix above reflects the averaging and differencing. The $\sqrt{2}$ factor arises from normalization to make the basis functions orthogonal (energy preserving). For simplicity in signal processing, the scaling factors might be omitted or adjusted.

**Jayaraman et al.** might present a slightly different matrix based on the exact definition of averaging and differencing.

---

### 3. Two-Dimensional Haar Transform

The 2D Haar transform is a separable transform, meaning it can be applied independently to rows and then columns (or vice versa) of an image.

Let $f(x,y)$ be an $M \times N$ image. If $M$ and $N$ are powers of 2, we can apply the 1D Haar transform.

The 2D Haar transform can be computed by:
1.  Applying the 1D Haar transform to each row of the image.
2.  Applying the 1D Haar transform to each column of the resulting image.

**Decomposition Process:**
For an $N \times N$ image $f$:

*   **Step 1: Row Transform:** Apply 1D Haar transform to each row.
    This results in an image where each row is transformed. The coefficients can be conceptually divided into:
    *   **Average Rows:** The DC component (average) of each row.
    *   **Detail Rows:** The difference coefficients from the Haar transform of each row.

*   **Step 2: Column Transform:** Apply 1D Haar transform to each column of the row-transformed image.
    This further decomposes the coefficients:
    *   **LL (Level 0):** Average of averages (overall image average).
    *   **LH (Level 1):** Average rows, then transformed by columns (horizontal details).
    *   **HL (Level 1):** Detail rows, then averaged by columns (vertical details).
    *   **HH (Level 1):** Detail rows, then transformed by columns (diagonal details).

This process can be iterated on the LL sub-band to achieve multi-level decomposition, similar to wavelet transforms.

**Example (2x2 Image):**
Let $f = \begin{bmatrix} f_{00} & f_{01} \\ f_{10} & f_{11} \end{bmatrix}$

*   **Row Transform:**
    *   Row 0: $[\frac{f_{00}+f_{01}}{2}, \frac{f_{00}-f_{01}}{2}]$
    *   Row 1: $[\frac{f_{10}+f_{11}}{2}, \frac{f_{10}-f_{11}}{2}]$
    Intermediate matrix: $\begin{bmatrix} \frac{f_{00}+f_{01}}{2} & \frac{f_{00}-f_{01}}{2} \\ \frac{f_{10}+f_{11}}{2} & \frac{f_{10}-f_{11}}{2} \end{bmatrix}$

*   **Column Transform:**
    *   Column 0: $[\frac{\frac{f_{00}+f_{01}}{2} + \frac{f_{10}+f_{11}}{2}}{2}, \frac{\frac{f_{00}+f_{01}}{2} - \frac{f_{10}+f_{11}}{2}}{2}] = [\frac{f_{00}+f_{01}+f_{10}+f_{11}}{4}, \frac{f_{00}+f_{01}-f_{10}-f_{11}}{4}]$
    *   Column 1: $[\frac{\frac{f_{00}-f_{01}}{2} + \frac{f_{10}-f_{11}}{2}}{2}, \frac{\frac{f_{00}-f_{01}}{2} - \frac{f_{10}-f_{11}}{2}}{2}] = [\frac{f_{00}-f_{01}+f_{10}-f_{11}}{4}, \frac{f_{00}-f_{01}-f_{10}+f_{11}}{4}]$

**Haar Transform Coefficients (2x2 Image):**
$F = \begin{bmatrix} \frac{f_{00}+f_{01}+f_{10}+f_{11}}{4} & \frac{f_{00}+f_{01}-f_{10}-f_{11}}{4} \\ \frac{f_{00}-f_{01}+f_{10}-f_{11}}{4} & \frac{f_{00}-f_{01}-f_{10}+f_{11}}{4} \end{bmatrix}$

The top-left coefficient is the overall average (DC component). The other coefficients represent details at different scales and orientations.

---

### 4. Properties of Haar Transform

The Haar transform possesses several important properties that make it useful in image processing.

*   **Linearity:** The Haar transform is a linear operator.
    $H\{a \cdot f(x,y) + b \cdot g(x,y)\} = a \cdot H\{f(x,y)\} + b \cdot H\{g(x,y)\}$
    where $H$ denotes the Haar transform, and $a, b$ are constants.
    *   **Relevance:** Allows decomposition and reconstruction of images as sums of simpler components.

*   **Orthogonality:** The Haar transform is an orthogonal transform. This means that the basis functions are orthogonal to each other. For a discrete signal of length $N$, this implies that the transform matrix $H$ satisfies $H^T H = I$ (or $H H^T = I$, depending on the definition of $H$).
    *   **Relevance:** This ensures that the inverse Haar transform is easily obtained by simply transposing the forward transform matrix (and possibly applying a scaling factor). The energy of the signal is preserved in the transform domain. This is crucial for reconstruction without loss of information.
    *   **Gonzalez & Woods** extensively discuss orthogonality in the context of image transforms, highlighting its importance for inversion.

*   **Separability:** The 2D Haar transform is separable. This means that the 2D transform can be achieved by applying the 1D transform sequentially to rows and then columns.
    $H_{2D} = H_{col} \cdot H_{row}$
    *   **Relevance:** Significantly reduces the computational complexity of the 2D transform. Instead of an $N^2 \times N^2$ matrix operation, we perform $2N$ operations of size $N \times N$ (or $2N \times N$ if we consider row and column transforms separately).

*   **Compact Support:** The Haar basis functions are localized in both space and frequency. They have compact support in the spatial domain (non-zero only over a finite interval).
    *   **Relevance:** This property is beneficial for analyzing local features in an image.

*   **Sparsity:** For many natural images, the Haar transform coefficients tend to be sparse. This means that a large number of coefficients are close to zero.
    *   **Relevance:** This property is fundamental for image compression. By quantizing or discarding the small coefficients, we can represent the image with fewer bits.

*   **Computational Efficiency:** The Haar transform can be computed very efficiently using a simple algorithm akin to the Fast Fourier Transform (FFT), often referred to as the Fast Haar Transform (FHT). The computational complexity is typically $O(N^2)$ for an $N \times N$ image, which is faster than the $O(N^2 \log N)$ complexity of the 2D DFT.
    *   **Relevance:** Makes the Haar transform practical for real-time applications and processing large images.

**Comparison with DFT (CO2 - Knowledge Level K4):**

| Feature          | Haar Transform                               | DFT                                          |
| :--------------- | :------------------------------------------- | :------------------------------------------- |
| Basis Functions  | Piecewise constant (square waves)            | Sinusoidal (complex exponentials)            |
| Localization     | Good in space, less so in frequency          | Good in frequency, poor in space             |
| Compact Support  | Yes (spatial)                                | No (spatial and frequency)                   |
| Sparsity         | Generally high for natural images            | Generally lower for natural images           |
| Computational Cost | $O(N^2)$ (FHT)                               | $O(N^2 \log N)$ (FFT)                        |
| Data Type        | Real-valued                                  | Complex-valued                               |
| Sensitivity to Edges | Good at representing sharp transitions       | Can spread energy across frequencies        |
| Application Focus | Compression, denoising, feature extraction   | Frequency analysis, filtering, image analysis |

**Gonzalez & Woods** often use the Haar transform as a prime example when discussing the trade-offs between spatial and frequency localization, contrasting it with the DFT.

---

### 5. Applications of Haar Transform

The properties of the Haar transform make it suitable for various image processing applications.

#### 5.1 Image Compression

*   **How it works:** The Haar transform decorrelates image data and produces a sparse coefficient set. By quantizing (reducing precision) or thresholding (setting small coefficients to zero), we can discard redundant information. The image can be reconstructed by applying the inverse Haar transform to the quantized coefficients.
*   **Efficiency:** The high sparsity of Haar coefficients allows for significant compression ratios with minimal loss of visual quality.
*   **Example:** The JPEG 2000 standard uses a more sophisticated wavelet transform (Daubechies wavelets), but the Haar wavelet serves as a foundational example for understanding wavelet-based compression.
*   **Jayaraman et al.** provide detailed examples of image compression using the Haar transform, showing the trade-offs between compression ratio and Mean Squared Error (MSE).

#### 5.2 Image Denoising

*   **How it works:** Noise in an image often manifests as small, high-frequency coefficients in the transform domain. By applying a threshold to the Haar coefficients and setting coefficients below a certain level to zero (or shrinking them), we can remove noise while preserving important image features represented by larger coefficients. The inverse Haar transform then reconstructs the denoised image.
*   **Example:** Remove noise from a noisy photograph. The Haar transform helps separate the image signal from random noise.
*   **Castleman** might discuss denoising in the context of signal transforms where noise is characterized by its frequency content.

#### 5.3 Feature Extraction

*   **How it works:** The Haar coefficients capture different aspects of the image, such as edges, textures, and smooth regions. The coefficients from different levels of decomposition can be used as features for image recognition, classification, or retrieval tasks. For instance, the LL component represents the low-frequency information, while LH, HL, and HH components capture details at different orientations and scales.
*   **Example:** Viola-Jones face detection algorithm uses Haar-like features derived from the Haar wavelet transform to quickly detect faces in images. These features are essentially differences of sums of pixel values in rectangular regions, mimicking the behavior of Haar basis functions.
*   **Pratt** discusses feature extraction techniques, and while not specifically focusing on Haar, the general principle of transform coefficients as features is covered.

#### 5.4 Image Analysis and Representation

*   The multi-level decomposition provided by the Haar transform (when applied iteratively) creates a hierarchy of representations of the image at different scales. This is analogous to a pyramid representation, allowing for analysis at various resolutions.

---

### 6. Inverse Haar Transform

Since the Haar transform is orthogonal, the inverse transform is obtained by transposing the transform matrix and applying appropriate scaling.

For a 1D signal of length $N$:
If $F = Hf$, then $f = H^T F$.

In practice, the inverse transform involves reversing the averaging and differencing steps. For example, if $F_0 = \frac{f_0+f_1}{2}$ and $F_1 = \frac{f_0-f_1}{2}$, then we can recover $f_0$ and $f_1$:
$f_0 = F_0 + F_1$
$f_1 = F_0 - F_1$

This process is applied iteratively to reconstruct the original signal from its Haar coefficients.

**Example (Reconstruction from N=4 coefficients):**
Given $F = [F_0, F_1, F_2, F_3]$.

*   **Reverse Level 2:**
    *   $a_0 = F_0 + F_1$
    *   $a_1 = F_0 - F_1$
    *   $d_0 = F_2$ (This coefficient might have its own scaling factor in some definitions, e.g., $F_2 = \frac{f_0-f_1}{2}$, so $f_0-f_1 = 2F_2$)
    *   $d_1 = F_3$ (Similarly, $f_2-f_3 = 2F_3$)

*   **Reverse Level 1:**
    *   $f_0 = a_0 + d_0$
    *   $f_1 = a_0 - d_0$
    *   $f_2 = a_1 + d_1$
    *   $f_3 = a_1 - d_1$

**Important Note:** The scaling factors applied during the forward transform must be accounted for during the inverse transform. If the forward transform used a scaling of 1/2, the inverse transform will use a scaling of 2 for the difference components and then reverse the averaging by addition.

---

### 7. Comparison with other 2D Transforms (CO2 - Knowledge Level K4)

The Haar transform is often compared with other 2D transforms like the DFT, DCT (Discrete Cosine Transform), and DWT (Discrete Wavelet Transform).

*   **Haar vs. DFT:**
    *   **Basis Functions:** Haar uses piecewise constant functions, DFT uses sinusoids.
    *   **Localization:** Haar has better spatial localization, DFT has better frequency localization.
    *   **Sparsity:** Haar is generally sparser for natural images.
    *   **Computation:** Haar is computationally faster.
    *   **Application:** DFT is excellent for frequency analysis and filtering, Haar is good for compression and edge detection.

*   **Haar vs. DCT:**
    *   **Basis Functions:** Haar uses piecewise constant, DCT uses cosines.
    *   **Sparsity:** DCT (especially type II) is known to be very good at energy compaction for correlated data (like images), often outperforming Haar in compression for certain types of images.
    *   **Computation:** DCT also has an efficient fast algorithm (FFT-like).
    *   **Application:** DCT is the backbone of JPEG compression.

*   **Haar vs. General DWT:**
    *   **Haar is a specific type of DWT:** It's the simplest wavelet.
    *   **Continuity:** Haar functions are discontinuous, while other wavelets (like Daubechies) can be made continuous, leading to smoother representations and potentially better performance in some applications.
    *   **Properties:** While Haar is orthogonal and has compact support, other DWTs can offer better frequency localization or smoothness.

**CO2 Relevance:** Understanding these comparisons helps analyze the strengths and weaknesses of different transforms for various image processing tasks. The choice of transform depends on the specific application requirements (e.g., compression ratio, visual quality, computational resources).

---

### 8. Relationship to Course Outcomes

*   **CO1: Compare different colour model representations of image processing system (Knowledge Level: K4)**
    While this topic doesn't directly cover color models, understanding transforms like Haar is essential for processing images regardless of their color representation. Transforms are applied to the individual color channels (e.g., R, G, B or Y, Cb, Cr).

*   **CO2: Analyse the various concepts and mathematical transforms and compression schemes necessary for image processing (Knowledge Level: K4)**
    This entire topic directly addresses this outcome. We analyze the Haar transform's concepts, mathematical formulation, properties, and its application in compression. Comparing it with DFT further strengthens this analysis.

*   **CO3: Illustrate the various schemes of image filtering (Knowledge Level: K5)**
    The Haar transform can be used as a basis for filtering. By manipulating coefficients in the Haar domain (e.g., thresholding for denoising), we are effectively performing filtering. Understanding the transform domain is key to implementing these filtering schemes.

*   **CO4: Determine the techniques for restoration of images (Knowledge Level: K5)**
    Denoising, a form of image restoration, is a key application of the Haar transform. By removing noise efficiently, the transform contributes to restoring the original image quality.

---

### 9. Important Points to Remember

*   The Haar transform is the simplest orthogonal wavelet transform.
*   It uses piecewise constant basis functions.
*   It's efficient to compute (FHT).
*   It's separable for 2D images.
*   Key properties: linearity, orthogonality, compact support, sparsity.
*   Applications include image compression, denoising, and feature extraction (e.g., Viola-Jones).
*   The inverse Haar transform is easily computed due to orthogonality.
*   Compare its performance and characteristics with DFT and DCT for different image processing tasks.

---

### 10. Practice Questions & Answers

**Question 1:** What are the main advantages of the Haar transform over the DFT for image compression?
**Answer:** The Haar transform typically produces a sparser coefficient representation for natural images compared to the DFT, which aids in achieving higher compression ratios by allowing more coefficients to be discarded or quantized more aggressively. It is also computationally more efficient.

**Question 2:** Explain the concept of separability in the context of the 2D Haar transform.
**Answer:** Separability means that the 2D Haar transform can be computed by applying the 1D Haar transform independently to each row of the image, and then applying the 1D Haar transform to each column of the result. This significantly reduces computational complexity.

**Question 3:** Given a 1D signal $f = [10, 6, 8, 4]$, compute its Haar transform coefficients.
**Answer:**
*   **Level 1:**
    *   Average pairs: $\frac{10+6}{2} = 8$, $\frac{8+4}{2} = 6$
    *   Difference pairs: $\frac{10-6}{2} = 2$, $\frac{8-4}{2} = 2$
    *   Intermediate coefficients: $[8, 6, 2, 2]$

*   **Level 2 (on averages):**
    *   Overall Average: $\frac{8+6}{2} = 7$
    *   Difference of Averages: $\frac{8-6}{2} = 1$

*   **Haar Transform Coefficients:** $[7, 1, 2, 2]$
    *(Note: The order might vary. If using the matrix definition with $\sqrt{2}$ scaling, the coefficients would be different by a scaling factor. The core idea of averaging/differencing is key.)*

**Question 4:** How can the Haar transform be used for image denoising?
**Answer:** Image denoising using the Haar transform involves transforming the image into the Haar domain. Noise typically manifests as small coefficients across the transform. By applying a threshold and setting coefficients below a certain value to zero (or shrinking them), noise can be reduced. The inverse Haar transform is then applied to reconstruct the denoised image.

**Question 5:** List three key properties of the Haar transform.
**Answer:**
1.  **Orthogonality:** Ensures perfect reconstruction and energy preservation.
2.  **Linearity:** Allows decomposition into simpler components.
3.  **Sparsity:** Leads to efficient compression by concentrating image energy into a few large coefficients.
(Other valid answers include compact support and computational efficiency).

---

This concludes the study notes for the Haar Transform. Remember to consult the referenced textbooks for a deeper mathematical understanding and more elaborate examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
