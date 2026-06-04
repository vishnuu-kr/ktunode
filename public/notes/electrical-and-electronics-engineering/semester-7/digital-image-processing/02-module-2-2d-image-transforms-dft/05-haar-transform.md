---
title: "Haar transform"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36920"
status: "completed"
scrapedAt: "2026-05-23T16:35:11.259Z"
---
## DIGITAL IMAGE PROCESSING: Module 2 - 2D Image Transforms: DFT

### Topic: Haar Transform

**Learning Outcomes:**

*   Understand the fundamental principles of the Haar transform.
*   Explain the mathematical formulation of the Haar transform for 1D and 2D signals.
*   Differentiate the Haar transform from other transforms like DFT.
*   Analyze the properties of the Haar transform and their implications in image processing.
*   Illustrate the application of the Haar transform in image processing tasks.

**Course Outcomes Alignment:**

*   **CO1 (K2):** Understanding the Haar transform as a mathematical tool within an image processing system.
*   **CO2 (K3):** Analyzing the mathematical basis and properties of the Haar transform for signal representation.
*   **CO3 (K3):** Illustrating how the Haar transform can be used for image compression by highlighting its energy compaction properties.
*   **CO4 (K3):** Analyzing the Haar transform's potential for image filtering and analysis through its decomposition capabilities.

**Textbook References:**

*   Gonzalez & Woods, *Digital Image Processing*, 4th Ed. (PEARSON)
*   Jayaraman, Esakkirajan, & Veerakumar, *Digital Image Processing*, 1st Ed. (McGraw Hill)

**Reference Book References:**

*   Castleman, *Digital Image Processing*, 2nd Ed. (Pearson Education)
*   Jain, *Fundamentals of Digital Image Processing* (PHI)
*   Pratt, *Digital Image Processing*, 4th Ed. (John Wiley)

---

### 1. Introduction to the Haar Transform

The Haar transform is a simple and computationally efficient transform that is widely used in digital signal and image processing. It is one of the earliest and simplest types of wavelet transforms. Unlike transforms like the Discrete Fourier Transform (DFT) or Discrete Cosine Transform (DCT) that use sinusoidal basis functions, the Haar transform uses piecewise constant basis functions called **Haar wavelets**.

**Key Concepts:**

*   **Basis Functions:** The Haar transform utilizes a set of orthogonal and symmetric basis functions that are simple rectangular pulses.
*   **Wavelets:** The Haar transform is a precursor to more complex wavelet transforms, offering a foundational understanding of multiresolution analysis.
*   **Energy Compaction:** Similar to other transforms, the Haar transform aims to concentrate the signal's energy into a few coefficients, making it useful for compression and noise reduction.
*   **Computational Efficiency:** The Haar transform is computationally very fast due to its simple operations (subtraction and addition).

**Reference:**
*   Gonzalez & Woods, Chapter 7 (though Haar is more of a wavelet concept, it's often introduced in the context of transforms).
*   Jayaraman, Esakkirajan, & Veerakumar, often discussed in chapters related to wavelet transforms or advanced transforms.

---

### 2. Haar Transform for 1D Signals

The Haar transform decomposes a 1D signal into a set of coefficients that represent different levels of detail.

**2.1 Haar Scaling Function and Wavelet Function**

The Haar transform is defined by two basic functions:

*   **Haar Scaling Function ($\phi(t)$):** This is a simple box function, representing the average or smooth component of the signal.
    $$ \phi(t) = \begin{cases} 1 & \text{if } 0 \le t < 1 \\ 0 & \text{otherwise} \end{cases} $$
*   **Haar Wavelet Function ($\psi(t)$):** This function represents the differences or details in the signal.
    $$ \psi(t) = \begin{cases} 1 & \text{if } 0 \le t < 1/2 \\ -1 & \text{if } 1/2 \le t < 1 \\ 0 & \text{otherwise} \end{cases} $$

**2.2 1D Discrete Haar Transform (DHT)**

For a signal of length $N$, where $N$ is a power of 2, the 1D DHT can be computed by iteratively applying a pair of operations.

**Step 1: Averaging and Differencing**

Given a signal $x = [x_0, x_1, \dots, x_{N-1}]$, the first step involves calculating averages and differences of adjacent pairs.

For a signal of length $N$:
*   **Average Coefficients:** $a_i = \frac{x_{2i} + x_{2i+1}}{\sqrt{2}}$ for $i = 0, 1, \dots, N/2 - 1$.
*   **Difference Coefficients:** $d_i = \frac{x_{2i} - x_{2i+1}}{\sqrt{2}}$ for $i = 0, 1, \dots, N/2 - 1$.

The resulting signal is an array of length $N$, where the first $N/2$ elements are the average coefficients and the next $N/2$ elements are the difference coefficients.

**Step 2: Iteration**

This process is repeated on the average coefficients until only one coefficient remains. The difference coefficients from each stage represent details at different scales.

**Example: 1D Haar Transform for N=8**

Let the signal be $x = [x_0, x_1, x_2, x_3, x_4, x_5, x_6, x_7]$.

**Iteration 1:**
*   Average Coefficients:
    *   $a_0 = \frac{x_0 + x_1}{\sqrt{2}}$
    *   $a_1 = \frac{x_2 + x_3}{\sqrt{2}}$
    *   $a_2 = \frac{x_4 + x_5}{\sqrt{2}}$
    *   $a_3 = \frac{x_6 + x_7}{\sqrt{2}}$
*   Difference Coefficients:
    *   $d_0 = \frac{x_0 - x_1}{\sqrt{2}}$
    *   $d_1 = \frac{x_2 - x_3}{\sqrt{2}}$
    *   $d_2 = \frac{x_4 - x_5}{\sqrt{2}}$
    *   $d_3 = \frac{x_6 - x_7}{\sqrt{2}}$

The transformed signal is now $[a_0, a_1, a_2, a_3, d_0, d_1, d_2, d_3]$.

**Iteration 2 (on averages $[a_0, a_1, a_2, a_3]$):**
*   Average Coefficients:
    *   $aa_0 = \frac{a_0 + a_1}{\sqrt{2}}$
    *   $aa_1 = \frac{a_2 + a_3}{\sqrt{2}}$
*   Difference Coefficients:
    *   $ad_0 = \frac{a_0 - a_1}{\sqrt{2}}$
    *   $ad_1 = \frac{a_2 - a_3}{\sqrt{2}}$

The transformed signal is now $[aa_0, aa_1, ad_0, ad_1, d_0, d_1, d_2, d_3]$.

**Iteration 3 (on averages $[aa_0, aa_1]$):**
*   Average Coefficient:
    *   $aaa_0 = \frac{aa_0 + aa_1}{\sqrt{2}}$
*   Difference Coefficient:
    *   $aad_0 = \frac{aa_0 - aa_1}{\sqrt{2}}$

The final Haar transformed coefficients are: $[aaa_0, aad_0, ad_0, ad_1, d_0, d_1, d_2, d_3]$.

**Key Observations for 1D DHT:**

*   The first coefficient ($aaa_0$) represents the overall average of the signal.
*   Subsequent coefficients represent details at progressively finer scales.
*   The transformation is orthogonal, meaning the inverse transform can reconstruct the original signal perfectly.

**2.3 Haar Transform Matrix**

The 1D DHT can be represented by a matrix multiplication. For $N=4$, the Haar matrix $H_4$ is:

$$ H_4 = \frac{1}{\sqrt{4}} \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & 1 & -1 & -1 \\ \sqrt{2} & -\sqrt{2} & 0 & 0 \\ 0 & 0 & \sqrt{2} & -\sqrt{2} \end{bmatrix} $$

However, the standard iterative approach leads to a more structured matrix that groups the average and difference coefficients. A common representation for $N=8$ would be:

$$ \mathbf{c} = H_8 \mathbf{x} $$

where $\mathbf{x}$ is the input signal vector and $\mathbf{c}$ is the Haar coefficient vector. The matrix $H_N$ can be constructed using a recursive process.

**2.4 Inverse Haar Transform**

The inverse Haar transform reconstructs the original signal from its Haar coefficients. It involves reversing the averaging and differencing steps.

For the signal $[aaa_0, aad_0, ad_0, ad_1, d_0, d_1, d_2, d_3]$ from the N=8 example:

**Reverse Iteration 3:**
*   $a_0 = \frac{aaa_0 + aad_0}{\sqrt{2}}$
*   $a_1 = \frac{aaa_0 - aad_0}{\sqrt{2}}$

**Reverse Iteration 2:**
*   $x_0 = \frac{a_0 + d_0}{\sqrt{2}}$
*   $x_1 = \frac{a_0 - d_0}{\sqrt{2}}$
*   $x_2 = \frac{a_1 + d_1}{\sqrt{2}}$
*   $x_3 = \frac{a_1 - d_1}{\sqrt{2}}$

And so on, until the original signal is reconstructed.

---

### 3. Haar Transform for 2D Images

The 2D Haar transform is applied to an image by applying the 1D Haar transform first along rows and then along columns (or vice-versa). This results in a decomposition of the image into different subbands.

**3.1 Row and Column Transformation**

Given an $M \times N$ image $I$:

1.  **Apply 1D Haar Transform to each row:** For each row, compute its 1D Haar transform. This transforms the image into a set of "average rows" and "difference rows".
2.  **Apply 1D Haar Transform to each column of the result:** Now, for each column of the intermediate image, compute its 1D Haar transform.

This two-step process results in a transformed image where the coefficients are organized into four quadrants. For a square image of size $N \times N$ where $N$ is a power of 2:

*   **Top-Left Quadrant:** Average of averages (LL - Low-Low pass) - Represents the overall smooth features of the image.
*   **Top-Right Quadrant:** Average of differences (LH - Low-High pass) - Represents horizontal details.
*   **Bottom-Left Quadrant:** Difference of averages (HL - High-Low pass) - Represents vertical details.
*   **Bottom-Right Quadrant:** Difference of differences (HH - High-High pass) - Represents diagonal details.

**Example: 2D Haar Transform for a 4x4 Image**

Let the image be:
$$ I = \begin{bmatrix} I_{00} & I_{01} & I_{02} & I_{03} \\ I_{10} & I_{11} & I_{12} & I_{13} \\ I_{20} & I_{21} & I_{22} & I_{23} \\ I_{30} & I_{31} & I_{32} & I_{33} \end{bmatrix} $$

**Step 1: Row Transformation (1D Haar on each row)**

For row 0: $[I_{00}, I_{01}, I_{02}, I_{03}]$ transforms to $[\frac{I_{00}+I_{01}}{\sqrt{2}}, \frac{I_{02}+I_{03}}{\sqrt{2}}, \frac{I_{00}-I_{01}}{\sqrt{2}}, \frac{I_{02}-I_{03}}{\sqrt{2}}]$

After transforming all rows, we get an intermediate image. Let's denote the transformed rows as $R_i'$.

$$ I' = \begin{bmatrix} R_0' \\ R_1' \\ R_2' \\ R_3' \end{bmatrix} $$

The first half of each row will contain average coefficients, and the second half will contain difference coefficients.

**Step 2: Column Transformation (1D Haar on each column of I')**

Now, apply the 1D Haar transform to each column of $I'$.

For column 0 of $I'$: $[\frac{I_{00}+I_{01}}{\sqrt{2}}, \frac{I_{10}+I_{11}}{\sqrt{2}}, \frac{I_{20}+I_{21}}{\sqrt{2}}, \frac{I_{30}+I_{31}}{\sqrt{2}}]$ transforms to

$[\frac{\frac{I_{00}+I_{01}}{\sqrt{2}} + \frac{I_{10}+I_{11}}{\sqrt{2}}}{\sqrt{2}}, \frac{\frac{I_{20}+I_{21}}{\sqrt{2}} + \frac{I_{30}+I_{31}}{\sqrt{2}}}{\sqrt{2}}, \frac{\frac{I_{00}+I_{01}}{\sqrt{2}} - \frac{I_{10}+I_{11}}{\sqrt{2}}}{\sqrt{2}}, \frac{\frac{I_{20}+I_{21}}{\sqrt{2}} - \frac{I_{30}+I_{31}}{\sqrt{2}}}{\sqrt{2}}]$

This simplifies to:
$[\frac{I_{00}+I_{01}+I_{10}+I_{11}}{2}, \frac{I_{20}+I_{21}+I_{30}+I_{31}}{2}, \frac{I_{00}+I_{01}-I_{10}-I_{11}}{2}, \frac{I_{20}+I_{21}-I_{30}-I_{31}}{2}]$

Performing this for all columns results in the 2D Haar transformed image. The coefficients are organized as follows:

*   **LL Subband (Top-Left $N/2 \times N/2$):** Contains the overall smooth components.
*   **LH Subband (Top-Right $N/2 \times N/2$):** Contains horizontal details.
*   **HL Subband (Bottom-Left $N/2 \times N/2$):** Contains vertical details.
*   **HH Subband (Bottom-Right $N/2 \times N/2$):** Contains diagonal details.

This decomposition can be applied recursively to the LL subband to obtain a multi-level wavelet decomposition.

**Reference:**
*   Gonzalez & Woods, Chapter 7 (discusses separable transforms and multiresolution analysis).
*   Jayaraman, Esakkirajan, & Veerakumar, likely in chapters on Wavelets or Image Transforms.
*   Castleman, Chapter 7 (Wavelets).

---

### 4. Properties of the Haar Transform

The Haar transform possesses several important properties that make it useful in image processing:

*   **Orthogonality:** The Haar transform is orthogonal, meaning the basis functions are mutually orthogonal. This ensures that the transform is reversible and energy is conserved. The inverse transform can perfectly reconstruct the original signal. (CO2)
*   **Compact Support:** The Haar basis functions are non-zero only over a finite interval, making them localized in both space and frequency. This is a key characteristic of wavelets. (CO2)
*   **Simplicity and Speed:** The Haar transform involves only additions and subtractions, making it computationally very efficient. The complexity is O(N) for a 1D signal of length N. (CO2)
*   **Energy Compaction:** The Haar transform tends to concentrate the signal's energy into a few large coefficients, especially for piecewise constant or smoothly varying signals. This property is crucial for compression. (CO3)
*   **Sensitivity to Discontinuities:** The Haar transform is very sensitive to sharp changes or discontinuities in the signal, which will be represented by large coefficients. (CO2)
*   **Lack of Smoothness:** The Haar basis functions are not smooth (they have sharp corners), which can lead to "ringing artifacts" in some applications compared to smoother transforms like DCT or higher-order wavelets. (CO2)

**Important Point to Remember:** The Haar transform's simplicity and speed are its major advantages. Its ability to decompose a signal into different resolution levels is fundamental to wavelet analysis.

---

### 5. Applications of the Haar Transform in Image Processing

The Haar transform finds applications in various image processing tasks due to its unique properties.

**5.1 Image Compression (CO3)**

*   **Principle:** By applying the 2D Haar transform, the image energy is compacted into the LL subband. The LH, HL, and HH subbands typically contain coefficients with smaller magnitudes, especially for images with smooth regions.
*   **Process:**
    1.  Apply the 2D Haar transform to the image.
    2.  Quantize the coefficients, particularly those in the detail subbands (LH, HL, HH), setting small coefficients to zero.
    3.  The transformed coefficients are then entropy coded (e.g., Huffman coding) for efficient storage or transmission.
*   **Benefit:** The Haar transform provides good energy compaction, allowing for significant data reduction with acceptable perceptual quality. It's computationally less intensive than DCT for some applications.

**Example (Conceptual):** Consider an image with a sharp edge. The Haar transform will produce large coefficients in the detail subbands corresponding to the edge. If these coefficients are small enough after quantization, they can be set to zero, reducing the data size.

**Reference:**
*   Jayaraman, Esakkirajan, & Veerakumar, chapters on Image Compression.
*   Gonzalez & Woods, Chapter 8 (Image Compression, general principles applicable to Haar).

**5.2 Image Denoising (CO4)**

*   **Principle:** Noise in an image often manifests as small coefficients spread across all subbands. Signal components (useful information) tend to be represented by larger coefficients.
*   **Process:**
    1.  Apply the 2D Haar transform.
    2.  Apply a thresholding function to the detail coefficients (LH, HL, HH). Coefficients below a certain threshold are set to zero or reduced in magnitude.
    3.  Reconstruct the image using the inverse Haar transform.
*   **Benefit:** The Haar transform's ability to separate signal from noise by targeting coefficients at different scales makes it effective for denoising.

**Example:** A noisy image will have many small coefficients in the high-frequency (detail) subbands. By zeroing out coefficients below a threshold, the noise can be reduced while preserving the main features of the image.

**Reference:**
*   Gonzalez & Woods, Chapter 6 (Image Enhancement, though specific wavelet denoising is usually in later chapters or advanced texts).
*   Castleman, Chapter 7 (Wavelets and Noise Reduction).

**5.3 Feature Extraction and Edge Detection (CO2, CO4)**

*   **Principle:** The detail coefficients (LH, HL, HH) obtained from the Haar transform highlight areas of rapid change in intensity, which correspond to edges and other image features.
*   **Process:**
    1.  Apply the 2D Haar transform.
    2.  Analyze the magnitude of coefficients in the LH, HL, and HH subbands. High magnitudes indicate the presence of edges or features.
*   **Benefit:** The Haar transform acts as a simple edge detector. The directional information (horizontal, vertical, diagonal) is naturally captured by the different subbands.

**Example:** A strong horizontal edge in the image will result in large coefficients in the LH subband.

**Reference:**
*   Jain, Chapters related to Image Analysis and Feature Extraction.

**5.4 Image Analysis and Representation**

The multi-resolution decomposition provided by the Haar transform allows for hierarchical analysis of an image. This can be useful for understanding image structures at different scales.

---

### 6. Comparison with DFT

While both DFT and Haar transforms are used for signal representation, they have fundamental differences:

| Feature           | Discrete Fourier Transform (DFT)                 | Haar Transform                                  |
| :---------------- | :----------------------------------------------- | :---------------------------------------------- |
| **Basis Functions** | Sinusoidal (sines and cosines)                   | Piecewise constant (Haar wavelets)              |
| **Localization**  | Localized in frequency, not in time/space        | Localized in both time/space and frequency      |
| **Smoothness**    | Smooth, continuous basis functions               | Piecewise constant, discontinuous basis functions |
| **Applications**  | Frequency analysis, filtering, spectral analysis | Compression, denoising, feature extraction, edge detection |
| **Computational Cost** | O(N log N) (using FFT)                            | O(N)                                            |
| **Sensitivity to Discontinuities** | Can spread energy across many coefficients | Concentrates energy at discontinuities          |
| **Energy Compaction** | Good for smooth signals, can spread energy for discontinuous signals | Excellent for piecewise constant/smooth signals |

**Key Difference:** The Haar transform's advantage lies in its localization in both space and time, which is crucial for analyzing signals with transient features or discontinuities. DFT's strength is in its ability to represent signals in the frequency domain, revealing periodic patterns. (CO2)

---

### 7. Practice Questions and Answers

**Question 1:** What are the basic building blocks of the Haar transform?
**Answer:** The Haar transform is built upon two basic functions: the Haar scaling function (a box function) and the Haar wavelet function (a rectangular pulse with positive and negative lobes).

**Question 2:** Explain the multi-resolution decomposition achieved by the 2D Haar transform. What do the four subbands represent?
**Answer:** The 2D Haar transform decomposes an image into four subbands by applying 1D Haar transforms first along rows and then along columns.
*   **LL (Low-Low):** Represents the approximation or average component of the image (smooth features).
*   **LH (Low-High):** Represents horizontal details (differences along rows, averaged across columns).
*   **HL (High-Low):** Represents vertical details (differences along columns, averaged across rows).
*   **HH (High-High):** Represents diagonal details (differences along both rows and columns).

**Question 3:** Why is the Haar transform considered computationally efficient?
**Answer:** The Haar transform is computationally efficient because its operations involve only simple additions and subtractions, leading to a linear time complexity (O(N) for 1D signals).

**Question 4:** Describe how the Haar transform can be used for image compression.
**Answer:** Image compression using the Haar transform involves applying the 2D transform, which compacts the image's energy into fewer coefficients. Small coefficients, especially in the detail subbands (LH, HL, HH), can be quantized to zero or reduced in value, significantly reducing the data size. The resulting coefficients are then efficiently encoded.

**Question 5:** Compare the Haar transform with the Discrete Fourier Transform (DFT) in terms of basis functions and localization.
**Answer:** The DFT uses sinusoidal basis functions, which are smooth but not localized in space. The Haar transform uses piecewise constant basis functions (Haar wavelets) that are localized in both space and frequency. This localization makes the Haar transform more suitable for signals with sharp changes or discontinuities.

**Question 6:** (True/False) The Haar transform is an orthogonal transform.
**Answer:** True. The orthogonality of the Haar transform ensures that it is reversible and energy is conserved.

**Question 7:** What is the primary advantage of the Haar transform's basis functions regarding signal discontinuities?
**Answer:** The Haar transform's piecewise constant basis functions are very effective at representing signals with discontinuities or sharp transitions. They concentrate the energy of these discontinuities into a few large coefficients.

---

### 8. Important Points to Remember

*   The Haar transform is the simplest wavelet transform.
*   It uses simple piecewise constant basis functions.
*   It is computationally very fast (O(N)).
*   It provides a multi-resolution decomposition of signals and images.
*   The LL subband contains the approximation, while LH, HL, and HH contain details.
*   It is excellent for image compression and denoising due to energy compaction.
*   Its localization in space makes it sensitive to signal discontinuities.
*   The inverse Haar transform allows perfect reconstruction of the original signal.

---

This concludes the study notes for the Haar Transform from Module 2 of Digital Image Processing. Remember to refer to your textbooks for further details and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
