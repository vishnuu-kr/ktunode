---
title: "Haar transform"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee15"
status: "completed"
scrapedAt: "2026-05-23T18:00:32.017Z"
---
# DIGITAL IMAGE PROCESSING - Module 2: 2D Image Transforms: DFT

## Topic: Haar Transform

This topic focuses on the Haar transform, a fundamental concept within the broader area of 2D image transforms. While the module title mentions DFT (Discrete Fourier Transform), understanding the Haar transform provides a valuable perspective on orthogonal transforms and their application in image processing, particularly in areas like compression and feature extraction.

---

### 1. Introduction to the Haar Transform

*   **What is a Transform?** In image processing, a transform is a mathematical operation that converts an image from its spatial domain (pixel intensities) to another domain, often a transform domain. This new domain can reveal different characteristics of the image, making it easier to perform operations like compression, noise reduction, or feature extraction.
*   **Orthogonal Transforms:** The Haar transform is a type of orthogonal transform. An orthogonal transform $T$ has the property that its inverse $T^{-1}$ is its transpose $T^T$ (or conjugate transpose for complex transforms). This means that applying the transform twice (applying it and then its inverse) recovers the original signal.
*   **Walsh-Hadamard Transform Family:** The Haar transform is a specific instance of the Walsh-Hadamard transform family, which uses only real numbers (specifically +1 and -1).
*   **Key Characteristic:** The Haar transform is known for its simplicity, computational efficiency, and its ability to capture piecewise constant regions in an image.

**Reference:** *Gonzalez & Woods, 4th Ed., Chapter 7 (though Haar is often introduced as a precursor to more complex transforms or in specific applications like wavelets, its principles are relevant to understanding transform domains).* *Jayaraman et al., 1st Ed., often covers signal transforms which can be extended to image processing.*

---

### 2. The 1D Haar Transform

Before diving into 2D, understanding the 1D Haar transform is crucial.

#### 2.1 Haar Scaling Function and Wavelets

The Haar transform is based on the Haar scaling function ($\phi$) and the Haar wavelet function ($\psi$).

*   **Haar Scaling Function ($\phi(t)$):** This is a rectangular pulse of height 1 over the interval [0, 1] and 0 elsewhere. It's the simplest "mother" scaling function.
    $$
    \phi(t) = \begin{cases} 1 & \text{if } 0 \le t < 1 \\ 0 & \text{otherwise} \end{cases}
    $$
*   **Haar Wavelet Function ($\psi(t)$):** This is a step function that is 1 over [0, 0.5) and -1 over [0.5, 1), and 0 elsewhere. It captures local variations.
    $$
    \psi(t) = \begin{cases} 1 & \text{if } 0 \le t < 0.5 \\ -1 & \text{if } 0.5 \le t < 1 \\ 0 & \text{otherwise} \end{cases}
    $$

#### 2.2 Haar Transform Matrix (for N=4 as an example)

For a 1D signal (or a row/column of an image) of length $N$, the Haar transform can be represented by a matrix multiplication. Let's consider $N=4$.

The Haar transform matrix $H_N$ is an $N \times N$ matrix. For $N=4$:

$$
H_4 = \frac{1}{\sqrt{4}} \begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & 1 & -1 & -1 \\
\sqrt{2} & -\sqrt{2} & 0 & 0 \\
0 & 0 & \sqrt{2} & -\sqrt{2}
\end{bmatrix}
$$

**Explanation of the Matrix Rows (for N=4):**

1.  **Row 1 (Average):** Corresponds to the Haar scaling function. It essentially calculates the average of the input signal. All coefficients are +1.
2.  **Row 2 (Difference of pairs):** Corresponds to the first level of detail coefficients. It calculates the difference between the first half and the second half of the signal. Coefficients are +1, +1, -1, -1.
3.  **Row 3 (Difference within halves):** Corresponds to the second level of detail coefficients. It calculates the difference between the first and second elements of the first half, and similarly for the second half. Coefficients involve $\sqrt{2}$ and $-\sqrt{2}$.
4.  **Row 4 (Further difference):** Corresponds to further detail coefficients.

**How it Works (1D Example for N=4):**

Let the input signal be $f = [f_0, f_1, f_2, f_3]$.
The transformed signal $F = [F_0, F_1, F_2, F_3]$ is given by $F = H_4 f$.

*   $F_0 = \frac{1}{2} (f_0 + f_1 + f_2 + f_3)$  (Average/DC component)
*   $F_1 = \frac{1}{2} (f_0 + f_1 - f_2 - f_3)$  (Difference of first two and last two)
*   $F_2 = \frac{1}{\sqrt{2}} (\frac{f_0 + f_1}{2} - \frac{f_2 + f_3}{2}) \times 2 = \frac{1}{\sqrt{2}} (f_0 + f_1 - f_2 - f_3)$ (This seems incorrect in the matrix provided. Let's correct the common interpretation and matrix construction for Haar)

**Corrected Understanding of Haar Transform (Often called Haar Wavelet Transform):**

A more common and practical way to implement the Haar transform, especially for image processing, is through a recursive decomposition process, which is equivalent to multiplying by a specific Haar matrix.

**Recursive Decomposition (for N=4):**

Let $f = [f_0, f_1, f_2, f_3]$.

**Step 1 (Averages and Differences):**
*   $a_0 = \frac{f_0 + f_1}{2}$
*   $a_1 = \frac{f_2 + f_3}{2}$
*   $d_0 = \frac{f_0 - f_1}{2}$
*   $d_1 = \frac{f_2 - f_3}{2}$

The transformed coefficients are now: $[a_0, a_1, d_0, d_1]$. Notice how the energy is concentrated in the averages.

**Step 2 (Recursion on Averages):**
Now, we apply the same averaging and differencing to the averages $[a_0, a_1]$:
*   $aa_0 = \frac{a_0 + a_1}{2}$ (This is the overall average)
*   $ad_0 = \frac{a_0 - a_1}{2}$ (This is the difference between the averages of the first and second halves)

The final Haar coefficients (ordered in a specific way) are: $[aa_0, ad_0, d_0, d_1]$.

**Corresponding Haar Matrix (N=4, ordered this way):**

$$
H_4 = \frac{1}{2} \begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & 1 & -1 & -1 \\
1 & -1 & 0 & 0 \\
0 & 0 & 1 & -1
\end{bmatrix}
$$

When you multiply this matrix by $f = [f_0, f_1, f_2, f_3]^T$, you get:

*   $F_0 = \frac{1}{2} (f_0 + f_1 + f_2 + f_3)$
*   $F_1 = \frac{1}{2} (f_0 + f_1 - f_2 - f_3)$
*   $F_2 = \frac{1}{2} (f_0 - f_1)$
*   $F_3 = \frac{1}{2} (f_2 - f_3)$

This recursive process can be generalized to $N=2^k$. The coefficients are often ordered as: one average coefficient, followed by detail coefficients from different levels of decomposition.

**Inverse Haar Transform:**

The inverse transform reconstructs the original signal by reversing the averaging and differencing steps.

**Example (N=4):**
Given Haar coefficients $[aa_0, ad_0, d_0, d_1]$.

1.  Reconstruct averages:
    *   $a_0 = aa_0 + ad_0$
    *   $a_1 = aa_0 - ad_0$
2.  Reconstruct original signal from averages and details:
    *   $f_0 = a_0 + d_0$
    *   $f_1 = a_0 - d_0$
    *   $f_2 = a_1 + d_1$
    *   $f_3 = a_1 - d_1$

**Key Points for 1D Haar Transform:**

*   It's a fast, computationally efficient transform.
*   It decomposes a signal into an average component and detail components at different scales.
*   The average component captures the low-frequency information, while detail components capture high-frequency variations.

**Reference:** *Gonzalez & Woods, 4th Ed., Chapter 7.3 discusses wavelet transforms, and Haar is the simplest example. Castleman, 2/e, might have sections on orthogonal transforms.*

---

### 3. The 2D Haar Transform

The 2D Haar transform extends the 1D transform to images. It's typically applied separable, meaning it's applied first along rows and then along columns (or vice-versa).

#### 3.1 Separable Application

For an $M \times N$ image $f(x, y)$, the 2D Haar transform can be computed by:

1.  **Row Transform:** Apply the 1D Haar transform to each row of the image. This produces an intermediate matrix $f'(x, y)$.
2.  **Column Transform:** Apply the 1D Haar transform to each column of the intermediate matrix $f'(x, y)$. This produces the final 2D Haar transform coefficients $F(u, v)$.

Mathematically, this can be expressed as:
$F = H_M f H_N^T$ (where $H_M$ and $H_N$ are the appropriate 1D Haar transform matrices for rows and columns respectively).

#### 3.2 Structure of the 2D Haar Transform Coefficients

For an $N \times N$ image (assuming $N$ is a power of 2), the 2D Haar transform results in an $N \times N$ matrix of coefficients. This matrix can be conceptually divided into four sub-bands:

*   **LL (Average-Average):** This top-left quadrant contains the average of the entire image. It's the coarsest approximation.
*   **LH (Average-Horizontal Detail):** This top-right quadrant contains the horizontal details (average of rows, then differenced horizontally).
*   **HL (Vertical Detail-Average):** This bottom-left quadrant contains the vertical details (average of columns, then differenced vertically).
*   **HH (Horizontal Detail-Vertical Detail):** This bottom-right quadrant contains the diagonal or fine details.

**Visual Representation of Coefficient Structure (N=4 example):**

Original Image (4x4):
```
f00 f01 f02 f03
f10 f11 f12 f13
f20 f21 f22 f23
f30 f31 f32 f33
```

After row transform on each row:
```
a00 a01 d00 d01
a10 a11 d10 d11
a20 a21 d20 d21
a30 a31 d30 d31
```

After column transform on each column:
```
aa00 ad00 ad01 ad02  (LL)
ad00 ad00 dd00 dd01  (LH)
ad10 ad11 dd10 dd11  (HL)
ad20 ad21 dd20 dd21  (HH)
```

Where:
*   `aa` represents average-average.
*   `ad` represents average-detail.
*   `da` represents detail-average.
*   `dd` represents detail-detail.

**Example Decomposition:**

Let's consider a 2x2 image:
$$
f = \begin{bmatrix}
f_{00} & f_{01} \\
f_{10} & f_{11}
\end{bmatrix}
$$

**Step 1: Row Transform:**
Apply 1D Haar to each row:
$$
f' = \begin{bmatrix}
\frac{f_{00}+f_{01}}{2} & \frac{f_{00}-f_{01}}{2} \\
\frac{f_{10}+f_{11}}{2} & \frac{f_{10}-f_{11}}{2}
\end{bmatrix} = \begin{bmatrix}
a_{0} & d_{0} \\
a_{1} & d_{1}
\end{bmatrix}
$$

**Step 2: Column Transform:**
Apply 1D Haar to each column of $f'$:
Column 1: $[\frac{a_0+a_1}{2}, \frac{a_0-a_1}{2}] = [aa_0, ad_0]$
Column 2: $[\frac{d_0+d_1}{2}, \frac{d_0-d_1}{2}] = [ad_1, dd_1]$ (Note the indices might vary based on implementation ordering)

Let's use the standard coefficient ordering: LL, LH, HL, HH for a 2x2 result.

$$
F = \begin{bmatrix}
\frac{a_0+a_1}{2} & \frac{d_0+d_1}{2} \\
\frac{a_0-a_1}{2} & \frac{d_0-d_1}{2}
\end{bmatrix}
$$

Substituting back $a_0, a_1, d_0, d_1$:
$$
F = \begin{bmatrix}
\frac{\frac{f_{00}+f_{01}}{2} + \frac{f_{10}+f_{11}}{2}}{2} & \frac{\frac{f_{00}-f_{01}}{2} + \frac{f_{10}-f_{11}}{2}}{2} \\
\frac{\frac{f_{00}+f_{01}}{2} - \frac{f_{10}+f_{11}}{2}}{2} & \frac{\frac{f_{00}-f_{01}}{2} - \frac{f_{10}-f_{11}}{2}}{2}
\end{bmatrix}
$$

This results in:
*   **LL (Average):** $\frac{1}{4}(f_{00} + f_{01} + f_{10} + f_{11})$
*   **LH (Horizontal Detail):** $\frac{1}{4}(f_{00} - f_{01} + f_{10} - f_{11})$
*   **HL (Vertical Detail):** $\frac{1}{4}(f_{00} + f_{01} - f_{10} - f_{11})$
*   **HH (Diagonal Detail):** $\frac{1}{4}(f_{00} - f_{01} - f_{10} + f_{11})$

**Important Note on Scaling:** The normalization factor (like $1/\sqrt{N}$ or $1/N$) is crucial and depends on the specific definition of the Haar transform matrix used. The recursive decomposition often implicitly handles the scaling.

**Reference:** *Jayaraman et al., 1st Ed., might have examples of signal decomposition that can be extended to images. Gonzalez & Woods, 4th Ed., provides a good foundation for wavelets, including the Haar wavelet.*

---

### 4. Properties of the Haar Transform

*   **Orthogonality:** The Haar transform is an orthogonal transform, meaning the inverse transform is simply the transpose of the transform matrix (scaled appropriately). This ensures perfect reconstruction of the original image.
*   **Compact Support:** The Haar scaling and wavelet functions are non-zero only over a finite interval, giving them compact support. This is advantageous for certain signal processing applications.
*   **Discontinuity:** The Haar functions are discontinuous (step functions). This makes them good at representing piecewise constant signals or regions in an image but less ideal for smooth signals.
*   **Computational Efficiency:** The Haar transform is computationally very fast, requiring only additions and subtractions (after the initial averaging). Its complexity is linear, $O(N)$, for a 1D signal of length $N$. For an $N \times N$ image, it's $O(N^2)$.
*   **Energy Compaction:** Like other transforms (e.g., DFT, DCT), the Haar transform can compact the energy of an image into a few coefficients, particularly the LL (average) coefficients. This is the basis for compression.

**Reference:** *All standard DIP textbooks will discuss the properties of orthogonal transforms. Look for sections on orthogonal expansions or transform properties.*

---

### 5. Applications of the Haar Transform in Image Processing

The Haar transform, while simpler than DCT or Fourier, finds applications in several areas:

#### 5.1 Image Compression (CO3)

*   **Principle:** The energy compaction property allows for compression. The LL (average) coefficients contain most of the image energy. The LH, HL, and HH coefficients represent details. For compression, one can:
    1.  Apply the 2D Haar transform to the image.
    2.  Quantize the transform coefficients, especially the detail coefficients (LH, HL, HH), by reducing their precision or setting small coefficients to zero.
    3.  Encode the quantized coefficients.
*   **How it Compares:** The Haar transform often provides good compression for images with sharp edges or piecewise constant regions. However, for smoother images, DCT or wavelets like Daubechies might offer better compression ratios with fewer artifacts.
*   **Example:** Imagine an image with large uniform areas. The Haar transform will represent these areas with few large coefficients (mostly in the LL band). Fine details will be in the other bands. By discarding or coarsely quantizing the fine detail coefficients, significant compression can be achieved.

**Reference:** *Gonzalez & Woods, 4th Ed., Chapter 7 discusses wavelet-based compression. Jayaraman et al., 1st Ed., might have examples of transform coding for compression.*

#### 5.2 Image Analysis and Feature Extraction

*   **Edge Detection:** The detail coefficients (LH, HL, HH) highlight areas of intensity change, making them useful for edge detection. The HH coefficients are particularly sensitive to diagonal edges.
*   **Texture Analysis:** The distribution of coefficients in the different sub-bands can characterize image textures.
*   **Image Segmentation (CO5):** By analyzing the different coefficient sub-bands, one can segment an image into regions with similar characteristics. For example, regions with high energy in detail bands might be segmented differently from regions with low energy.

#### 5.3 Image Filtering and Restoration (CO4)

*   **Noise Reduction:** Noise often appears as high-frequency components. Applying the Haar transform, zeroing out or attenuating coefficients in the detail bands (LH, HL, HH), and then performing the inverse transform can reduce noise.
*   **Deblurring:** Similar to noise reduction, specific frequency components can be adjusted.

#### 5.4 Image Representation and Wavelet Transforms

*   The Haar transform is the simplest example of a wavelet transform. It's a fundamental building block for understanding more sophisticated wavelet transforms (like Daubechies, Morlet wavelets) which offer better performance for a wider range of images. Wavelet transforms provide multi-resolution analysis, allowing us to examine an image at different scales and resolutions simultaneously.

**Reference:** *Gonzalez & Woods, 4th Ed., Chapter 7 is the primary resource for wavelet-based image processing, including Haar. Castleman and Jain also touch upon transform-based filtering and analysis.*

---

### 6. Strengths and Weaknesses of the Haar Transform

#### 6.1 Strengths

*   **Simplicity and Speed:** Very easy to understand and implement, with extremely fast computation.
*   **Good for Piecewise Constant Signals:** Effectively represents images with sharp transitions and uniform regions.
*   **Orthogonal:** Perfect reconstruction is possible.
*   **Multi-resolution Capability:** Provides a basic form of multi-resolution analysis.

#### 6.2 Weaknesses

*   **Discontinuities:** The sharp transitions in Haar functions can lead to "ringing" artifacts when applied to smooth images or during reconstruction after aggressive coefficient manipulation.
*   **Poor Representation of Smooth Features:** Does not efficiently represent smooth curves or gentle gradients as well as more sophisticated wavelets or DCT.
*   **Limited Directionality:** While it separates horizontal and vertical details, it doesn't offer the fine directional selectivity of more advanced wavelets.

---

### 7. Relationship to Other Transforms (CO2)

*   **DFT (Discrete Fourier Transform):** DFT transforms an image into the frequency domain, representing it as a sum of sinusoids of different frequencies and orientations. DFT is good for analyzing global frequency content but doesn't offer good spatial localization of features.
*   **DCT (Discrete Cosine Transform):** DCT is widely used in image compression (e.g., JPEG). It transforms image blocks into frequency components, but unlike DFT, it uses only real numbers and has properties that make it perform better than DFT for typical image signals, especially in terms of energy compaction.
*   **Wavelets:** Haar is the simplest wavelet. Wavelets offer both frequency and spatial localization, providing multi-resolution analysis. More advanced wavelets have smoother basis functions, which reduce artifacts compared to Haar.

**CO2 Alignment:** Understanding the Haar transform helps analyze different mathematical transforms by showing how they decompose an image into different representations (spatial, frequency, or multi-resolution). Its properties (orthogonality, energy compaction) are common themes across various transforms.

---

### 8. Practice Questions and Answers

**Question 1 (CO2, K3):** What does the LL coefficient sub-band represent in the 2D Haar transform of an image?
**Answer:** The LL coefficient sub-band represents the average intensity of the entire image or image block. It's the coarsest approximation and captures the low-frequency components.

**Question 2 (CO3, K3):** How can the Haar transform be used for image compression?
**Answer:** The Haar transform compacts image energy into a few coefficients (primarily LL). For compression, the image is transformed, detail coefficients (LH, HL, HH) are quantized (their precision reduced or small values set to zero), and the quantized coefficients are encoded. The inverse transform reconstructs an approximation of the original image.

**Question 3 (CO1, K2):** State one advantage and one disadvantage of using the Haar transform compared to the DCT for image processing.
**Answer:**
*   **Advantage:** Haar transform is computationally faster and simpler to implement due to its reliance on additions/subtractions.
*   **Disadvantage:** Haar transform can produce more artifacts (like ringing) on smooth images due to its discontinuous nature, while DCT generally provides better visual quality for smooth features.

**Question 4 (CO2, K3):** Consider a 1D signal of length 4: $f = [2, 6, 4, 8]$. Apply the 1D Haar transform (using the recursive decomposition method) to find its Haar coefficients.
**Answer:**
Let $f = [f_0, f_1, f_2, f_3] = [2, 6, 4, 8]$.

**Step 1 (Averages and Differences):**
*   $a_0 = \frac{f_0 + f_1}{2} = \frac{2 + 6}{2} = 4$
*   $a_1 = \frac{f_2 + f_3}{2} = \frac{4 + 8}{2} = 6$
*   $d_0 = \frac{f_0 - f_1}{2} = \frac{2 - 6}{2} = -2$
*   $d_1 = \frac{f_2 - f_3}{2} = \frac{4 - 8}{2} = -2$
Intermediate coefficients: $[4, 6, -2, -2]$

**Step 2 (Recursion on Averages):**
Apply to $[a_0, a_1] = [4, 6]$:
*   $aa_0 = \frac{a_0 + a_1}{2} = \frac{4 + 6}{2} = 5$ (Overall average)
*   $ad_0 = \frac{a_0 - a_1}{2} = \frac{4 - 6}{2} = -1$ (Difference of averages)

**Final Haar Coefficients (ordered as aa, ad, d0, d1):**
$[5, -1, -2, -2]$

**Question 5 (CO4, K3):** Describe a method for noise reduction in an image using the Haar transform.
**Answer:**
1.  Apply the 2D Haar transform to the noisy image.
2.  Identify the sub-bands that typically contain noise. Noise often manifests as high-frequency components, which are primarily located in the LH, HL, and HH sub-bands.
3.  Attenuate or threshold coefficients in these detail sub-bands. For example, set coefficients below a certain small magnitude to zero (hard thresholding) or shrink them towards zero (soft thresholding).
4.  Perform the inverse Haar transform on the modified coefficients to obtain the denoised image.

---

### 9. Important Points to Remember

*   **Haar is the simplest wavelet.**
*   **It's orthogonal and computationally fast.**
*   **Decomposes an image into average (LL) and detail (LH, HL, HH) components.**
*   **Energy compaction makes it suitable for compression.**
*   **Its discontinuous nature can lead to artifacts in smooth regions.**
*   **Applied separable for 2D images (row transform then column transform).**
*   **Foundation for more advanced wavelet transforms.**

---

This set of notes provides a comprehensive overview of the Haar transform, covering its theoretical basis, application in image processing, properties, and comparisons with other transforms, aligning with the specified learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
