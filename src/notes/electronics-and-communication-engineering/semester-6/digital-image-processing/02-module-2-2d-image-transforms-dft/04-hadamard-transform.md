---
title: "Hadamard transform"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee14"
status: "completed"
scrapedAt: "2026-05-23T18:00:31.285Z"
---
## Digital Image Processing: Module 2 - 2D Image Transforms: DFT

### Topic: Hadamard Transform

This module delves into the realm of 2D image transforms, focusing on the Discrete Fourier Transform (DFT) and related transforms. Here, we will explore the **Hadamard Transform**, a significant and computationally efficient transform widely used in digital signal and image processing.

---

### 1. Introduction to the Hadamard Transform

The Hadamard transform is a class of orthogonal, symmetric, and involutory linear transforms. Unlike the DFT, which uses complex exponential functions, the Hadamard transform utilizes **Walsh functions** (or Walsh-Chrestenson functions) which are bipolar (taking values of +1 and -1). This bipolar nature leads to significant computational advantages, especially in hardware implementations.

**Key Concept:** Orthogonality implies that the basis functions are uncorrelated, which is crucial for effective representation and reconstruction of signals.

**Relation to DFT:** While conceptually different, the Hadamard transform can be viewed as a special case of the DFT where the frequency variable is quantized.

**Learning Outcome Alignment:**
*   **CO2 (K3):** Analyzing various concepts and mathematical transforms necessary for image processing. Understanding the Hadamard transform as an alternative to DFT falls under this.

---

### 2. Walsh Functions and Walsh-Hadamard Transform (WHT)

**Walsh Functions:** These are a complete set of orthogonal, bipolar, symmetric, and periodic functions. They are characterized by their "sequency," which is analogous to frequency in sinusoidal functions. Sequency refers to the number of zero crossings in a given interval.

**Types of Walsh Functions:**
*   **Sequency-ordered:** Functions arranged in increasing order of sequency.
*   **Hadamard-ordered (natural-ordered):** Functions ordered based on the binary representation of the sequency. This ordering is often preferred for computational efficiency.

**Hadamard Matrix:** The Hadamard transform is defined by a **Hadamard matrix**. A Hadamard matrix of order $N$ is an $N \times N$ matrix $H$ with entries +1 or -1 such that $H H^T = N I_N$, where $I_N$ is the identity matrix.

**Construction of Hadamard Matrices:**
*   Hadamard matrices of order $N = 2^m$ (where $m$ is a non-negative integer) can be constructed recursively using the Sylvester construction:

    $H_{2N} = \begin{bmatrix} H_N & H_N \\ H_N & -H_N \end{bmatrix}$

    Starting with $H_1 = [1]$.

    *   $H_1 = [1]$
    *   $H_2 = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$
    *   $H_4 = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 \\ 1 & -1 & -1 & 1 \end{bmatrix}$
    *   $H_8 = \begin{bmatrix} H_4 & H_4 \\ H_4 & -H_4 \end{bmatrix}$

**Walsh-Hadamard Transform (WHT):**
For a 1D signal $f$ of length $N$, the WHT is given by:

$F(k) = \frac{1}{N} \sum_{j=0}^{N-1} f(j) (-1)^{\sum_{i=0}^{m-1} w_i(k) b_i(j)}$

where:
*   $N = 2^m$
*   $F(k)$ are the WHT coefficients.
*   $f(j)$ are the input signal samples.
*   $w_i(k)$ are the bits of the binary representation of the sequency-ordered index $k$.
*   $b_i(j)$ are the bits of the binary representation of the index $j$.

Alternatively, using the Hadamard matrix (natural-ordered):

$F = H f$

where:
*   $F$ is the column vector of WHT coefficients.
*   $f$ is the column vector of input signal samples.
*   $H$ is the Hadamard matrix of order $N$.

**Inverse WHT:** Due to the involutory property ($H H = N I_N$), the inverse transform is simply:

$f = \frac{1}{N} H F$

**Important Point to Remember:** The Hadamard matrix is symmetric and orthogonal, simplifying the inverse transform.

**Learning Outcome Alignment:**
*   **CO2 (K3):** Understanding the construction and definition of the WHT, including its basis functions (Walsh functions) and matrices.
*   **CO1 (K2):** While not directly a system component, understanding the mathematical foundation of transforms supports explaining image processing system operations.

---

### 3. 2D Walsh-Hadamard Transform (2D WHT)

The 2D WHT of an $N \times N$ image $f(x, y)$ is obtained by applying the 1D WHT separably, first along rows and then along columns.

$F(u, v) = \frac{1}{N} \sum_{x=0}^{N-1} \sum_{y=0}^{N-1} f(x, y) (-1)^{w_r(u) \cdot b_r(x) + w_c(v) \cdot b_c(y)}$

where:
*   $F(u, v)$ are the 2D WHT coefficients.
*   $f(x, y)$ are the image pixel values.
*   $w_r(u)$ and $w_c(v)$ represent the sequency bits for the row and column indices respectively.
*   $b_r(x)$ and $b_c(y)$ represent the binary bits for the row and column indices respectively.

**Matrix Representation of 2D WHT:**

Let $f$ be an $N \times N$ image matrix.
Let $H$ be the $N \times N$ Hadamard matrix.

The 2D WHT can be computed as:

$F = H f H^T$

**Inverse 2D WHT:**

$f = \frac{1}{N^2} H F H^T$

**Example:**
Consider a $2 \times 2$ image:
$f = \begin{bmatrix} f(0,0) & f(0,1) \\ f(1,0) & f(1,1) \end{bmatrix}$

$H_2 = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$

$F = H_2 f H_2^T = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} f(0,0) & f(0,1) \\ f(1,0) & f(1,1) \end{bmatrix} \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$

$F = \begin{bmatrix} f(0,0)+f(1,0) & f(0,1)+f(1,1) \\ f(0,0)-f(1,0) & f(0,1)-f(1,1) \end{bmatrix} \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$

$F = \begin{bmatrix} (f(0,0)+f(1,0)) + (f(0,1)+f(1,1)) & (f(0,0)+f(1,0)) - (f(0,1)+f(1,1)) \\ (f(0,0)-f(1,0)) + (f(0,1)-f(1,1)) & (f(0,0)-f(1,0)) - (f(0,1)-f(1,1)) \end{bmatrix}$

$F = \begin{bmatrix} F(0,0) & F(0,1) \\ F(1,0) & F(1,1) \end{bmatrix}$

**Important Point to Remember:** The separable property of the 2D WHT is crucial for its computational efficiency.

**Learning Outcome Alignment:**
*   **CO2 (K3):** Applying the 2D WHT to images and understanding its separable nature.

---

### 4. Computational Efficiency of WHT

The primary advantage of the Hadamard transform over the DFT is its computational efficiency. The WHT can be computed using the **Fast Walsh-Hadamard Transform (FWHT)** algorithm.

**Complexity:**
*   **DFT:** $O(N^2 \log N)$ for 1D DFT, $O(N^4 \log N)$ for 2D DFT.
*   **WHT:** $O(N \log N)$ for 1D WHT, $O(N^2 \log N)$ for 2D WHT.

This significant reduction in computational complexity is achieved because the WHT only involves additions and subtractions, whereas the DFT involves multiplications with complex exponentials.

**Hardware Implementation:** The simple operations (additions/subtractions) make the FWHT highly suitable for hardware implementation, leading to very fast processing.

**Reference:** Gonzalez and Woods (4th Ed.) discusses the computational advantages of orthogonal transforms like Hadamard.

**Learning Outcome Alignment:**
*   **CO2 (K3):** Analyzing the computational efficiency of different transforms, understanding why WHT is preferred in certain applications.

---

### 5. Properties of the Hadamard Transform

Similar to other orthogonal transforms, the Hadamard transform possesses several useful properties:

*   **Orthogonality:** As mentioned, $H H^T = N I_N$. This ensures that the basis functions are independent and allow for perfect reconstruction.
*   **Symmetry:** The Hadamard matrix is symmetric ($H = H^T$).
*   **Involutory:** $H^2 = N I_N$. This simplifies the inverse transform.
*   **Energy Preservation (Parseval's Theorem):** The sum of squares of the input signal is proportional to the sum of squares of the transform coefficients.
    $\sum_{j=0}^{N-1} |f(j)|^2 = \frac{1}{N} \sum_{k=0}^{N-1} |F(k)|^2$
    This property is important for energy compaction and analysis.
*   **Circulant Matrices:** While not directly a property of the standard Hadamard matrix, specific arrangements of Walsh functions can lead to circulant matrices, which have efficient DFT-based computation methods. However, the standard Sylvester construction yields a symmetric matrix.
*   **Rotation Invariance (for specific orderings):** Certain orderings of Walsh functions can exhibit rotational properties, similar to some aspects of the DFT.

**Learning Outcome Alignment:**
*   **CO2 (K3):** Analyzing the mathematical properties of transforms, which are essential for understanding their behavior and applications.

---

### 6. Applications of the Hadamard Transform in Image Processing

The Hadamard transform's computational efficiency and energy compaction properties make it suitable for various image processing tasks.

*   **Image Compression:** Similar to the DCT in JPEG, the WHT can be used to transform image blocks. Coefficients with low magnitudes are quantized and discarded, leading to compression. The FWHT's speed makes it attractive for real-time compression.
    *   **Mechanism:** Transform image blocks, quantize coefficients, entropy encode.
    *   **Reference:** Jayaraman, Esakkirajan, Veerakumar (1st Ed.) may cover transform-based compression.
    *   **Learning Outcome Alignment:** **CO3 (K3):** Illustrating schemes of image compression. The WHT is a transform used in such schemes.

*   **Image Filtering and Enhancement:** WHT can be used for filtering by multiplying coefficients with a frequency-domain filter.
    *   **Example:** Low-pass filtering can be achieved by setting high-sequency coefficients to zero.
    *   **Learning Outcome Alignment:** **CO4 (K3):** Analyzing filtering and restoration of images.

*   **Pattern Recognition:** Features extracted from WHT coefficients can be used for classification and recognition tasks.

*   **Error Detection and Correction:** The properties of Hadamard matrices are fundamental to the construction of **Hadamard codes**, which are used for error detection and correction in digital communication systems, and can be relevant in image transmission.

*   **Feature Extraction:** WHT coefficients can serve as compact feature representations of an image or image regions.

**Learning Outcome Alignment:**
*   **CO1 (K2):** Understanding how transforms are used in different components of an image processing system (e.g., compression module, enhancement module).

---

### 7. Limitations of the Hadamard Transform

Despite its advantages, the WHT has some limitations compared to the DFT:

*   **No Frequency Localization:** Unlike the DFT, which has clear frequency bands, the sequency-ordered Walsh functions are abrupt and bipolar. This can lead to ringing artifacts (Gibbs phenomenon) in reconstructed images, especially with sharp edges.
*   **Sensitivity to Noise:** The sharp transitions in Walsh functions can amplify noise if not handled properly, particularly in the presence of quantization errors.
*   **Blocking Artifacts:** When applied to image blocks, like the DCT, blocking artifacts can occur at block boundaries if not smoothed.
*   **Less Smooth Basis Functions:** Compared to the sinusoidal basis functions of the DFT, Walsh functions are less smooth, which can be less desirable for representing smooth image regions.

**Reference:** Castleman (2nd Ed.) and Jain (1988) might discuss the trade-offs between different transforms, including limitations.

**Learning Outcome Alignment:**
*   **CO2 (K3):** Analyzing the limitations and comparative advantages of transforms.

---

### 8. Comparison with DFT

| Feature             | Discrete Fourier Transform (DFT)                      | Hadamard Transform (WHT)                                    |
| :------------------ | :---------------------------------------------------- | :---------------------------------------------------------- |
| **Basis Functions** | Complex exponentials (sines and cosines)              | Bipolar Walsh functions (+1, -1)                            |
| **Coefficients**    | Complex numbers                                       | Real numbers (+1, -1)                                       |
| **Complexity**      | $O(N^2 \log N)$ (1D), $O(N^4 \log N)$ (2D)              | $O(N \log N)$ (1D), $O(N^2 \log N)$ (2D)                    |
| **Operations**      | Complex multiplications and additions                 | Only additions and subtractions                             |
| **Computational Cost**| High                                                  | Low                                                         |
| **Hardware Implement.**| More complex                                          | Simpler                                                     |
| **Energy Compaction**| Generally good for smooth signals                     | Good, but can be less effective than DCT for smooth signals |
| **Smoothness of Basis**| High                                                  | Low (abrupt transitions)                                    |
| **Sensitivity to Noise**| Can be sensitive, but generally better localization | More sensitive to noise due to abrupt transitions           |
| **Applications**    | Signal analysis, filtering, compression, spectral analysis | Compression, filtering, pattern recognition, error correction |

**Learning Outcome Alignment:**
*   **CO2 (K3):** This comparison directly addresses the analysis of various concepts and mathematical transforms.

---

### 9. Practice Questions & Exercises

**Question 1:**
(CO2 - K3)
Explain the concept of sequency in the context of Walsh functions and how it relates to frequency in the DFT.

**Answer:**
Sequency is a measure of the rate of zero crossings in a Walsh function. It is analogous to frequency in sinusoidal functions. Higher sequency corresponds to more rapid sign changes in the Walsh function. In contrast, frequency in the DFT measures the number of cycles of a sine or cosine wave within a given interval. While both describe the oscillatory behavior of basis functions, sequency is based on zero crossings of bipolar signals, whereas frequency is based on cycles of continuous sinusoidal signals.

**Question 2:**
(CO2 - K3)
How is a Hadamard matrix of order 4 constructed using the Sylvester construction? Write down the matrix.

**Answer:**
The Sylvester construction for Hadamard matrices is recursive. Starting with $H_1 = [1]$, we construct $H_{2N}$ from $H_N$ using the formula:
$H_{2N} = \begin{bmatrix} H_N & H_N \\ H_N & -H_N \end{bmatrix}$

For $N=2$:
$H_2 = \begin{bmatrix} H_1 & H_1 \\ H_1 & -H_1 \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$

For $N=4$:
$H_4 = \begin{bmatrix} H_2 & H_2 \\ H_2 & -H_2 \end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 \\ 1 & -1 & -1 & 1 \end{bmatrix}$

**Question 3:**
(CO2 - K3)
Given a 1D signal $f = [2, 4]$, calculate its Walsh-Hadamard Transform $F$. Assume $N=2$.

**Answer:**
The Hadamard matrix of order 2 is $H_2 = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$.
The WHT is given by $F = H_2 f^T$ (where $f$ is treated as a row vector for calculation and then $F$ is also a row vector of coefficients). Or, treating $f$ as a column vector, $F = H_2 f$.

Let $f = \begin{bmatrix} 2 \\ 4 \end{bmatrix}$.
$F = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} 2 \\ 4 \end{bmatrix} = \begin{bmatrix} (1 \times 2) + (1 \times 4) \\ (1 \times 2) + (-1 \times 4) \end{bmatrix} = \begin{bmatrix} 6 \\ -2 \end{bmatrix}$

The WHT coefficients are $F(0) = 6$ and $F(1) = -2$.
*(Note: The definition of WHT may include a $1/N$ scaling factor. If the definition used is $F = \frac{1}{N} H f$, then the coefficients would be $F = [\frac{6}{2}, \frac{-2}{2}] = [3, -1]$).*
We will use the convention $F = Hf$ for simplicity in intermediate steps and apply normalization at the end if required by a specific application.

**Question 4:**
(CO3 - K3)
Briefly explain how the Hadamard transform can be used for image compression.

**Answer:**
In image compression using the Hadamard transform, an image is typically divided into small blocks (e.g., $8 \times 8$ or $16 \times 16$). Each block is transformed using the 2D WHT. The resulting WHT coefficients represent the energy distribution across different sequency components. Coefficients with low magnitudes, which often correspond to higher sequency components or less significant image features, are quantized (reduced in precision) or discarded entirely. This process reduces the amount of data required to represent the image. Finally, the quantized coefficients are entropy encoded to achieve further compression. The FWHT's speed is a significant advantage for real-time applications.

**Question 5:**
(CO2 - K3)
What are the main computational advantages of the Hadamard Transform over the DFT?

**Answer:**
The primary computational advantage of the Hadamard Transform over the DFT lies in its use of only additions and subtractions, eliminating the need for complex multiplications. This significantly reduces the computational complexity from $O(N^2 \log N)$ for a 1D DFT to $O(N \log N)$ for a 1D WHT (using FWHT). For 2D transforms, this translates to $O(N^4 \log N)$ for DFT and $O(N^2 \log N)$ for WHT. This makes the WHT much faster and more suitable for hardware implementation.

---

### 10. Important Points to Remember

*   The Hadamard transform is an **orthogonal, bipolar, and symmetric** transform.
*   Its basis functions are **Walsh functions**, characterized by **sequency**.
*   The transform is defined by a **Hadamard matrix**, which can be constructed recursively.
*   The **Fast Walsh-Hadamard Transform (FWHT)** algorithm makes it computationally very efficient, using only additions and subtractions.
*   The **2D WHT is separable**, computed as $F = HfH^T$.
*   The **involutory property** ($H^2 = NI$) simplifies the inverse transform.
*   Key applications include **image compression, filtering, and feature extraction** due to its speed and energy compaction.
*   Limitations include **less smooth basis functions** and potential **sensitivity to noise** and **ringing artifacts** compared to the DFT.
*   It offers a **trade-off between computational efficiency and signal representation quality** compared to the DFT.

---

This concludes the notes on the Hadamard Transform. By understanding its properties and computational advantages, you can appreciate its role in various digital image processing applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
