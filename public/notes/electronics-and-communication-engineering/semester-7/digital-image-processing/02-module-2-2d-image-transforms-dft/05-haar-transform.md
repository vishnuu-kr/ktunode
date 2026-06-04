---
title: "Haar transform"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff506"
status: "completed"
scrapedAt: "2026-05-23T18:06:36.230Z"
---
## DIGITAL IMAGE PROCESSING - Module 2: 2D Image Transforms: DFT - Haar Transform

---

### 1. Introduction to the Haar Transform

The Haar transform is a type of **Wavelet Transform**, specifically the simplest and oldest one. Unlike the Discrete Fourier Transform (DFT) which uses sinusoidal basis functions, the Haar transform uses piecewise constant basis functions called **Haar wavelets**. This piecewise constant nature makes it computationally very efficient and easy to understand.

**Key Concepts:**

*   **Wavelets:** Functions that are localized in both time (or space) and frequency. This localization property makes them powerful for analyzing signals with non-stationary characteristics, such as images.
*   **Haar Wavelets:** The simplest orthogonal wavelet. They consist of a "mother wavelet" and a "father wavelet."
    *   **Father Wavelet ($\phi(t)$):** A constant function over an interval, representing the average or low-frequency component.
    *   **Mother Wavelet ($\psi(t)$):** A step function that is positive in the first half of an interval and negative in the second half, representing the difference or high-frequency component.
*   **Orthogonality:** Crucial for transform properties, ensuring that basis functions are independent and the inverse transform is easily computable.

**Textbook References:**

*   **Gonzalez & Woods (4th Ed.):** Introduces wavelets and their properties, often using Haar as a foundational example in the context of image processing applications. While Module 2 primarily focuses on DFT, understanding wavelets as an alternative transform is important for broader image analysis.
*   **Jayaraman et al.:** Likely covers wavelets as a more advanced topic in image transforms, potentially contrasting them with Fourier-based methods.

**Course Outcome Alignment:**

*   **CO2 (Analyze the various concepts and mathematical transforms necessary for image processing):** This section introduces a fundamental wavelet transform, expanding the student's understanding beyond DFT and its limitations.

---

### 2. The Haar Transform: Definition and Properties

The Haar transform can be applied to a 1D signal, and subsequently extended to 2D images.

#### 2.1. 1D Haar Transform

For a 1D signal $f$ of length $N$ (where $N$ is a power of 2), the Haar transform $c_k$ is defined as:

$$c_k = \sum_{i=0}^{N-1} f(i) h_k(i)$$

where $h_k(i)$ are the Haar basis functions. The Haar basis functions are characterized by their piecewise constant nature and their orthogonality.

**The Haar Basis Functions:**

The Haar transform involves averaging and differencing operations. For a signal of length $N$, the transform coefficients are obtained by applying a series of operations.

**Example (N=4):**
Let $f = [f_0, f_1, f_2, f_3]$.

The Haar transform involves computing:
1.  **Averages:**
    *   $c_0 = \frac{f_0 + f_1}{\sqrt{2}}$ (Average of first pair)
    *   $c_1 = \frac{f_2 + f_3}{\sqrt{2}}$ (Average of second pair)
2.  **Differences:**
    *   $c_2 = \frac{f_0 - f_1}{\sqrt{2}}$ (Difference of first pair)
    *   $c_3 = \frac{f_2 - f_3}{\sqrt{2}}$ (Difference of second pair)

The Haar transform matrix for $N=4$ is:

$$H_4 = \frac{1}{\sqrt{4}}\begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & 1 & -1 & -1 \\
\sqrt{2} & -\sqrt{2} & 0 & 0 \\
0 & 0 & \sqrt{2} & -\sqrt{2}
\end{bmatrix}$$

*Note: The exact normalization factor might vary slightly depending on the definition (e.g., $\sqrt{N}$ or 1). The version with $\sqrt{N}$ ensures energy preservation.*

The transformed coefficients $c = H_4 f$ would be $[c_0, c_1, c_2, c_3]$.

**Key Idea: Hierarchical Structure**
The Haar transform can be viewed as a hierarchical process:
*   At the first level, the signal is split into pairs, and averages and differences are computed.
*   The averages are then passed to the next level for further averaging and differencing, representing coarser approximations.
*   The differences capture the detail or high-frequency information at different scales.

#### 2.2. 2D Haar Transform

For a 2D image $f(x,y)$ of size $N \times N$ (where $N$ is a power of 2), the 2D Haar transform can be achieved by applying the 1D Haar transform successively along rows and then along columns.

**Process:**

1.  **Row Transform:** Apply the 1D Haar transform to each row of the image. This results in an intermediate image $f'(x,y)$.
2.  **Column Transform:** Apply the 1D Haar transform to each column of the intermediate image $f'(x,y)$. This yields the final 2D Haar transform coefficients $c(x,y)$.

**Haar Transform Matrix (2D):**
The 2D Haar transform can be represented by the Kronecker product of the 1D Haar transform matrices: $H_{2D} = H_{1D} \otimes H_{1D}$.

**Output of 2D Haar Transform:**
The 2D Haar transform of an image produces four subbands:

*   **LL (Low-Low):** Contains the approximation coefficients (averages of averages). This is a smaller, downsampled version of the original image, representing the coarse features.
*   **LH (Low-High):** Contains the horizontal detail coefficients (averages followed by differences). Represents horizontal edges.
*   **HL (High-Low):** Contains the vertical detail coefficients (differences followed by averages). Represents vertical edges.
*   **HH (High-High):** Contains the diagonal detail coefficients (differences followed by differences). Represents diagonal edges.

This decomposition is often visualized as a quadtree structure, similar to what is seen in other wavelet transforms like the Discrete Wavelet Transform (DWT).

**Example (2x2 image):**
Let $f = \begin{bmatrix} f_{00} & f_{01} \\ f_{10} & f_{11} \end{bmatrix}$.

1.  **Row Transform:**
    *   Row 0: $\frac{1}{\sqrt{2}}\begin{bmatrix} f_{00} + f_{01} & f_{00} - f_{01} \end{bmatrix}$
    *   Row 1: $\frac{1}{\sqrt{2}}\begin{bmatrix} f_{10} + f_{11} & f_{10} - f_{11} \end{bmatrix}$
    Intermediate $f' = \begin{bmatrix} \frac{f_{00} + f_{01}}{\sqrt{2}} & \frac{f_{00} - f_{01}}{\sqrt{2}} \\ \frac{f_{10} + f_{11}}{\sqrt{2}} & \frac{f_{10} - f_{11}}{\sqrt{2}} \end{bmatrix}$

2.  **Column Transform:**
    *   Column 0: $\frac{1}{\sqrt{2}}\begin{bmatrix} f'_{00} + f'_{10} \\ f'_{00} - f'_{10} \end{bmatrix} = \frac{1}{2}\begin{bmatrix} (f_{00} + f_{01}) + (f_{10} + f_{11}) \\ (f_{00} + f_{01}) - (f_{10} + f_{11}) \end{bmatrix}$
    *   Column 1: $\frac{1}{\sqrt{2}}\begin{bmatrix} f'_{01} + f'_{11} \\ f'_{01} - f'_{11} \end{bmatrix} = \frac{1}{2}\begin{bmatrix} (f_{00} - f_{01}) + (f_{10} - f_{11}) \\ (f_{00} - f_{01}) - (f_{10} - f_{11}) \end{bmatrix}$

The Haar coefficients $c = \begin{bmatrix} c_{00} & c_{01} \\ c_{10} & c_{11} \end{bmatrix}$ are:

$$c = \frac{1}{2}\begin{bmatrix}
f_{00}+f_{01}+f_{10}+f_{11} & f_{00}-f_{01}+f_{10}-f_{11} \\
f_{00}+f_{01}-f_{10}-f_{11} & f_{00}-f_{01}-f_{10}+f_{11}
\end{bmatrix}$$

**Subband Interpretation:**
*   $c_{00}$ (LL): Average of all pixels.
*   $c_{01}$ (LH): Horizontal differences weighted by average of rows.
*   $c_{10}$ (HL): Vertical differences weighted by average of columns.
*   $c_{11}$ (HH): Diagonal differences.

**Important Points to Remember:**

*   The Haar transform is **orthogonal** and **symmetric**.
*   It is **computational efficient** due to its simple operations.
*   The transform results in a **sparse representation** for images with piecewise constant regions.
*   It is a **lossless transform** in theory, but its coefficients are often quantized in practice for compression.
*   The **decomposition into subbands** (LL, LH, HL, HH) is a key characteristic for image analysis and processing.

**Textbook References:**

*   **Gonzalez & Woods (4th Ed.):** Likely discusses the 2D Haar transform as a fundamental example of a separable transform and its decomposition into subbands for image analysis, feature extraction, and compression.
*   **Jayaraman et al.:** May present the Haar transform as a stepping stone to more complex wavelet transforms and their applications in image processing.

**Course Outcome Alignment:**

*   **CO2 (Analyze the various concepts and mathematical transforms necessary for image processing):** This section details the 2D Haar transform, its computation, and the interpretation of its coefficients, directly addressing the analysis of mathematical transforms.
*   **CO3 (Illustrate the various schemes of image compression):** The decomposition into subbands and the potential for sparsity make the Haar transform relevant to image compression, which will be explored further.

---

### 3. Haar Transform for Image Processing Applications

The unique properties of the Haar transform make it suitable for several image processing tasks.

#### 3.1. Image Compression

**How it works:**

1.  **Transform:** Apply the 2D Haar transform to the image. This decorrelates the pixels and concentrates most of the image energy into a few coefficients (especially in the LL band).
2.  **Quantization:** Quantize the transform coefficients. Coefficients with small magnitudes are represented with fewer bits or set to zero. This is the primary source of loss in lossy compression.
3.  **Entropy Coding:** Encode the quantized coefficients efficiently (e.g., using Huffman coding or arithmetic coding).

**Advantages for Compression:**

*   **Sparsity:** The Haar transform naturally produces sparse representations for images with flat regions, meaning many coefficients will be close to zero.
*   **Efficiency:** The fast Haar transform algorithm is very efficient.

**Disadvantages for Compression:**

*   **Blockiness:** Due to its piecewise constant nature, the Haar transform can introduce **blocking artifacts** when heavily quantized, especially at edges. This is a significant drawback compared to smoother wavelets.

**Textbook References:**

*   **Gonzalez & Woods (4th Ed.):** Will likely detail image compression schemes, including wavelet-based methods. The Haar transform might be presented as a simpler example to illustrate the principles before moving to more advanced wavelets.
*   **Jayaraman et al.:** Could provide a more focused discussion on wavelet-based compression, perhaps using Haar as an introductory case.
*   **Castleman (2/e):** Might discuss transform coding in general and could use Haar as an example of a transform that achieves decorrelation.

**Course Outcome Alignment:**

*   **CO3 (Illustrate the various schemes of image compression):** This section directly addresses how the Haar transform is used as a basis for image compression.

#### 3.2. Image Analysis and Feature Extraction

The subband decomposition of the Haar transform is useful for analyzing different types of image features:

*   **LL (Approximation):** Represents the low-frequency content, essentially a smoothed version of the image. Useful for background or overall structure.
*   **LH (Horizontal Details):** Captures horizontal edges and variations.
*   **HL (Vertical Details):** Captures vertical edges and variations.
*   **HH (Diagonal Details):** Captures diagonal edges and texture.

**Applications:**

*   **Edge Detection:** The LH and HL subbands are particularly rich in edge information.
*   **Texture Analysis:** The distribution of energy in the LH, HL, and HH bands can characterize texture.
*   **Image Retrieval:** Features extracted from these subbands can be used for searching similar images.

**Textbook References:**

*   **Gonzalez & Woods (4th Ed.):** Likely discusses image analysis techniques and how transforms can be used for feature extraction.
*   **Jain (1988):** As an earlier text, it might present transform-based feature extraction, potentially including Haar as an example of feature representation.

**Course Outcome Alignment:**

*   **CO2 (Analyze the various concepts and mathematical transforms necessary for image processing):** Understanding the subbands and their correspondence to image features is crucial for analyzing the utility of the transform.
*   **CO5 (Describe the basic image segmentation techniques):** While not a direct segmentation technique, the features extracted from Haar subbands can be inputs to segmentation algorithms.

#### 3.3. Image Enhancement and Filtering

The Haar transform can be used for filtering by manipulating coefficients in the transform domain.

**Example: Noise Reduction**

1.  **Transform:** Apply the Haar transform.
2.  **Thresholding:** Set small coefficients (likely noise) to zero or shrink them. This is effectively a form of soft or hard thresholding in the Haar domain.
3.  **Inverse Transform:** Apply the inverse Haar transform to reconstruct the filtered image.

**Advantages:**

*   **Simplicity:** The operations are straightforward.

**Disadvantages:**

*   The blocky nature of Haar wavelets can lead to **ringing artifacts** or **blurring** if not applied carefully.

**Textbook References:**

*   **Gonzalez & Woods (4th Ed.):** Discusses image filtering and restoration, and may use Haar as a simple example of frequency-domain or transform-domain filtering.
*   **Pratt (4/e):** Likely covers various filtering techniques and could mention transform-based filtering methods.

**Course Outcome Alignment:**

*   **CO4 (Analyze the filtering and restoration of images):** This section explores how the Haar transform can be employed in image filtering operations.

---

### 4. Inverse Haar Transform

The inverse Haar transform reconstructs the original signal or image from its Haar coefficients. Due to the orthogonality of the Haar transform, the inverse transform is closely related to the forward transform.

**1D Inverse Haar Transform:**
Given the Haar coefficients $c = [c_0, c_1, c_2, c_3]$ for $N=4$, the original signal $f = [f_0, f_1, f_2, f_3]$ can be recovered using the inverse Haar matrix or by reversing the averaging and differencing operations.

The inverse operations involve:
1.  **Recombining averages and differences:**
    *   $f_0 + f_1 = \sqrt{2} c_0$
    *   $f_0 - f_1 = \sqrt{2} c_2$
    *   $f_2 + f_3 = \sqrt{2} c_1$
    *   $f_2 - f_3 = \sqrt{2} c_3$

2.  **Solving for original samples:**
    *   $f_0 = \frac{\sqrt{2}c_0 + \sqrt{2}c_2}{2} = \frac{c_0 + c_2}{\sqrt{2}}$
    *   $f_1 = \frac{\sqrt{2}c_0 - \sqrt{2}c_2}{2} = \frac{c_0 - c_2}{\sqrt{2}}$
    *   $f_2 = \frac{\sqrt{2}c_1 + \sqrt{2}c_3}{2} = \frac{c_1 + c_3}{\sqrt{2}}$
    *   $f_3 = \frac{\sqrt{2}c_1 - \sqrt{2}c_3}{2} = \frac{c_1 - c_3}{\sqrt{2}}$

The inverse Haar transform matrix for $N=4$ is the transpose of the forward Haar matrix (if the forward matrix was designed to be symmetric, which it often is).

$$H_4^{-1} = H_4^T = \frac{1}{\sqrt{4}}\begin{bmatrix}
1 & 1 & \sqrt{2} & 0 \\
1 & 1 & -\sqrt{2} & 0 \\
1 & -1 & 0 & \sqrt{2} \\
1 & -1 & 0 & -\sqrt{2}
\end{bmatrix}$$

So, $f = H_4^{-1} c$.

**2D Inverse Haar Transform:**
Similar to the forward transform, the 2D inverse Haar transform is achieved by applying the 1D inverse Haar transform successively along columns and then along rows.

**Important Points to Remember:**

*   The inverse Haar transform is **lossless** if no quantization was applied to the coefficients.
*   The **reconstruction process mirrors the decomposition process** but with reversed operations.

**Textbook References:**

*   **Gonzalez & Woods (4th Ed.):** Will explain the concept of inverse transforms and how they are used to reconstruct the image.
*   **Jayaraman et al.:** Will likely cover the mathematical formulation of inverse wavelet transforms.

**Course Outcome Alignment:**

*   **CO2 (Analyze the various concepts and mathematical transforms necessary for image processing):** Understanding the inverse transform is as critical as the forward transform for any application.

---

### 5. Comparison with DFT

While Module 2 focuses on DFT, it's beneficial to compare Haar with DFT for context.

| Feature         | Haar Transform                                | Discrete Fourier Transform (DFT)                  |
| :-------------- | :-------------------------------------------- | :------------------------------------------------ |
| **Basis Functions** | Piecewise constant (Haar wavelets)            | Sinusoidal (complex exponentials)                 |
| **Localization** | Localized in space and frequency              | Localized in frequency, not in space              |
| **Sparsity**    | Good for piecewise constant signals         | Generally not sparse for typical images           |
| **Computation** | Very fast (simple additions/subtractions)     | Relatively slower (FFT algorithms exist)          |
| **Applications**| Compression, noise reduction, feature extraction | Filtering, spectral analysis, frequency manipulation |
| **Artifacts**   | Can cause blockiness/ringing at edges         | Can cause ringing artifacts (Gibbs phenomenon)    |
| **Energy Comp.**| Concentrates energy into few coefficients     | Distributes energy more broadly                   |

**Textbook References:**

*   **Gonzalez & Woods (4th Ed.):** The chapter on DFT will likely have a section or implicit comparison with other transforms like Fourier, Walsh-Hadamard, and Wavelet transforms.
*   **Jayaraman et al.:** May offer a direct comparison of different transform domains and their suitability for various image processing tasks.

**Course Outcome Alignment:**

*   **CO2 (Analyze the various concepts and mathematical transforms necessary for image processing):** Understanding the strengths and weaknesses of Haar relative to DFT helps in analyzing which transform is best suited for different problems.

---

### 6. Practice Questions and Answers

**Question 1:** What are the primary basis functions used in the Haar transform?
**Answer:** Piecewise constant functions called Haar wavelets.

**Question 2:** Explain the four subbands obtained from a 2D Haar transform of an image. What type of information does each subband typically contain?
**Answer:**
*   **LL (Low-Low):** Approximation coefficients, representing coarse features and low-frequency components.
*   **LH (Low-High):** Horizontal detail coefficients, representing horizontal edges.
*   **HL (High-Low):** Vertical detail coefficients, representing vertical edges.
*   **HH (High-High):** Diagonal detail coefficients, representing diagonal edges and textures.

**Question 3:** The Haar transform is known for its computational efficiency. Why is this the case?
**Answer:** The Haar transform involves simple arithmetic operations like averaging and differencing of adjacent data points, making its implementation very fast compared to transforms that use complex mathematical functions.

**Question 4:** What is a potential drawback of using the Haar transform for image compression, especially when compared to more complex wavelets?
**Answer:** The piecewise constant nature of Haar wavelets can lead to **blocking artifacts** or **ringing at edges** when the coefficients are heavily quantized, resulting in noticeable visual degradation.

**Question 5:** If you apply the Haar transform to an image and then apply the inverse Haar transform without any modifications to the coefficients, what will be the result?
**Answer:** The original image will be perfectly reconstructed because the Haar transform is an orthogonal and lossless transform.

**Question 6 (Conceptual):** For an image that is predominantly flat with sharp but straight edges, would the Haar transform be a suitable choice for compression? Explain why or why not.
**Answer:** Yes, the Haar transform would be a suitable choice. Its piecewise constant basis functions are well-suited for representing images with flat regions and sharp, rectilinear edges, leading to a sparse coefficient representation. However, care must be taken during quantization to avoid significant blocking artifacts.

---

### 7. Important Points to Remember (Summary)

*   **Haar Transform:** The simplest wavelet transform using piecewise constant basis functions.
*   **Orthogonality:** Ensures easy inversion and energy preservation.
*   **Efficiency:** Extremely fast computation due to simple operations.
*   **Sparsity:** Effective for images with flat regions.
*   **2D Decomposition:** Breaks down into LL, LH, HL, HH subbands, capturing different image features.
*   **Applications:** Image compression, feature extraction, noise reduction, filtering.
*   **Drawbacks:** Prone to blocking artifacts and ringing at edges when quantized.
*   **Inverse Transform:** Reconstructs the original signal losslessly if coefficients are unchanged.
*   **Comparison to DFT:** Offers spatial localization advantage but less smoothness than sinusoidal basis functions.

---

This comprehensive set of study notes covers the Haar transform in detail, aligning with the learning outcomes and course objectives. The inclusion of textbook references, key concepts, examples, practice questions, and summary points aims to provide a solid foundation for understanding this important image transform.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
