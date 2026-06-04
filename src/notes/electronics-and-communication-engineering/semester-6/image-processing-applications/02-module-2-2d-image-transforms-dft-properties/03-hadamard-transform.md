---
title: "Hadamard transform"
subject: "IMAGE PROCESSING APPLICATIONS"
module: "Module 2: 2D Image transforms: DFT, Properties"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fef62"
status: "completed"
scrapedAt: "2026-05-23T18:01:13.557Z"
---
# IMAGE PROCESSING APPLICATIONS

## Module 2: 2D Image Transforms: DFT, Properties

### Topic: Hadamard Transform

**Learning Outcomes Covered:**

*   Understanding the principles and applications of the Hadamard transform in image processing.
*   Analyzing the properties of the Hadamard transform relevant to image manipulation.
*   Comparing the Hadamard transform with other transforms (like DFT) in terms of their computational efficiency and applicability.

**Course Outcomes Alignment:**

*   **CO2: Analyse the various concepts and mathematical transforms and compression schemes necessary for image processing (Knowledge Level: K4)** - This topic directly contributes by explaining a fundamental mathematical transform used in image processing, enabling analysis of its characteristics and use in compression.

---

### 1. Introduction to Hadamard Transform

The Hadamard transform is a class of orthogonal, symmetric, and reversible linear transformations. Unlike the Discrete Fourier Transform (DFT), which uses complex exponentials, the Hadamard transform uses only real numbers, specifically +1 and -1. This makes it computationally very efficient, particularly for applications where speed is critical.

**Key Concepts:**

*   **Walsh Functions:** The basis functions of the Hadamard transform are known as Walsh functions. These functions are real-valued and take only two values: +1 and -1. They are orthogonal and complete.
*   **Orthogonality:** For a set of functions to be orthogonal, the integral (or summation in the discrete case) of the product of any two different functions in the set over their domain is zero. This property is crucial for reconstructing the original signal.
*   **Symmetry:** The Hadamard matrix is symmetric, meaning $H = H^T$.
*   **Reversibility:** The transform can be inverted without loss of information.

**Key Takeaway:** The Hadamard transform is a computationally efficient transform that uses simple arithmetic operations (+1 and -1) as its basis functions, making it attractive for hardware implementation.

---

### 2. Walsh-Hadamard Transform (WHT)

The most common form of the Hadamard transform used in signal and image processing is the Walsh-Hadamard Transform (WHT). It is defined by a matrix called the Hadamard matrix.

**2.1 Hadamard Matrix ($H_N$)**

A Hadamard matrix of order $N$ is an $N \times N$ matrix with entries +1 or -1 such that its rows (and columns) are mutually orthogonal. The order $N$ must be a power of 2 ($N = 2^k$ for some integer $k$).

**Construction of Hadamard Matrices:**

Hadamard matrices can be constructed recursively using the Kronecker product ($\otimes$).

*   **Order $N=1$:**
    $H_1 = [1]$

*   **Order $N=2$:**
    $H_2 = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$

*   **Order $N=4$:**
    $H_4 = H_2 \otimes H_2 = \begin{bmatrix} H_2 & H_2 \\ H_2 & -H_2 \end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 \\ 1 & -1 & -1 & 1 \end{bmatrix}$

*   **General Construction (for $N=2^k$):**
    $H_{2N} = \begin{bmatrix} H_N & H_N \\ H_N & -H_N \end{bmatrix}$

**Important Property:** The rows and columns of a Hadamard matrix are orthogonal:
$H_N H_N^T = N I_N$, where $I_N$ is the $N \times N$ identity matrix. This property signifies its orthogonality.

**Example:** Let's check the orthogonality for $H_2$:
Row 1: [1, 1]
Row 2: [1, -1]
Dot product: (1 * 1) + (1 * -1) = 1 - 1 = 0. Rows are orthogonal.

**Key Takeaway:** Hadamard matrices are square matrices with entries $\pm 1$ and orthogonal rows/columns, constructed recursively for orders that are powers of 2.

**2.2 The Walsh-Hadamard Transform (WHT)**

For a sequence $f = [f_0, f_1, ..., f_{N-1}]$, its WHT is given by:

$F_w = \frac{1}{N} H_N f$

Where:
*   $F_w = [F_{w0}, F_{w1}, ..., F_{w(N-1)}]$ is the WHT of $f$.
*   $H_N$ is the Hadamard matrix of order $N$.
*   $f$ is treated as a column vector.

The inverse WHT is given by:

$f = H_N F_w$

**Note:** The factor $1/N$ is sometimes omitted in the forward transform and included in the inverse transform, or distributed equally. The important aspect is the transformation itself.

**Example (1D WHT):**
Let $f = [f_0, f_1, f_2, f_3]$ and $N=4$.
$H_4 = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 \\ 1 & -1 & -1 & 1 \end{bmatrix}$

$F_w = \frac{1}{4} H_4 \begin{bmatrix} f_0 \\ f_1 \\ f_2 \\ f_3 \end{bmatrix} = \frac{1}{4} \begin{bmatrix} f_0 + f_1 + f_2 + f_3 \\ f_0 - f_1 + f_2 - f_3 \\ f_0 + f_1 - f_2 - f_3 \\ f_0 - f_1 - f_2 + f_3 \end{bmatrix}$

The elements of $F_w$ are often called Walsh coefficients.

**Key Takeaway:** WHT converts a signal into its representation in the Walsh function domain, using simple additions and subtractions.

---

### 3. 2D Walsh-Hadamard Transform for Images

For a 2D image $f(x, y)$ of size $N \times N$ (where $N=2^k$), the 2D WHT is computed by applying the 1D WHT first along rows and then along columns (or vice versa).

Let $F_w(u, v)$ be the 2D WHT of $f(x, y)$.

$F_w(u, v) = \frac{1}{N} \sum_{x=0}^{N-1} \sum_{y=0}^{N-1} f(x, y) (-1)^{\sum_{i=0}^{k-1} (u_i(x_i \oplus y_i))}$

Where:
*   $(u, v)$ are the frequency coordinates.
*   $u_i$ and $v_i$ are the $i$-th bits of $u$ and $v$ in binary representation.
*   $x_i$ and $y_i$ are the $i$-th bits of $x$ and $y$ in binary representation.
*   $\oplus$ denotes the XOR operation.

**Simplified Matrix Representation:**

$F_w = \frac{1}{N} H_N f H_N^T$

Since $H_N$ is symmetric ($H_N = H_N^T$), this can also be written as:

$F_w = \frac{1}{N} H_N f H_N$

Where:
*   $f$ is the $N \times N$ image matrix.
*   $H_N$ is the $N \times N$ Hadamard matrix.

**Computational Efficiency:**
The WHT can be computed using the Fast Walsh-Hadamard Transform (FWHT) algorithm, which has a computational complexity of $O(N^2 \log N)$ for an $N \times N$ image. This is significantly faster than the 2D DFT's $O(N^2 \log N^2)$ complexity.

**Example (Conceptual):**
Imagine a $4 \times 4$ image.
1.  Take the $4 \times 4$ Hadamard matrix $H_4$.
2.  Multiply the image matrix $f$ by $H_4$ on the left. This performs the WHT on each row.
3.  Multiply the result by $H_4$ on the right. This performs the WHT on each column of the row-transformed image.

The resulting matrix $F_w$ contains the Walsh-Hadamard coefficients. The coefficient at $F_w(0,0)$ (top-left corner) usually represents the average intensity of the image, similar to the DC component in DFT.

**Key Takeaway:** The 2D WHT is an efficient transform for images, computed by applying 1D WHT to rows and then columns, and it uses the FWHT algorithm for speed.

---

### 4. Properties of the Walsh-Hadamard Transform

The Hadamard transform shares some properties with the DFT, but also has unique characteristics due to its $\pm 1$ nature.

*   **Linearity:**
    $WHT\{a f(x, y) + b g(x, y)\} = a F_w(u, v) + b G_w(u, v)$
    This property holds for the WHT, meaning the transform of a sum of images is the sum of their transforms. (Gonzalez & Woods, 2009, Chapter 7.2.4)

*   **Orthogonality:**
    As established, the Hadamard matrix is orthogonal, which ensures that the transform is reversible and energy preserving (up to a scaling factor).
    $\frac{1}{N^2} \sum_{u=0}^{N-1} \sum_{v=0}^{N-1} F_w(u, v) \cdot [H_N]_{ui} [H_N]_{vj} = f(i, j)$ (This is conceptually how inversion works).

*   **Symmetry:**
    The Hadamard matrix is symmetric ($H_N = H_N^T$), which means the forward and inverse transforms are structurally similar.

*   **Energy Compaction:**
    Like the DFT, the WHT can achieve energy compaction, meaning most of the image's energy (variance) can be concentrated in a few coefficients. This is particularly effective for images with piecewise constant regions. For images with sharp edges or detailed textures, the DFT might offer better compaction. (Jayaraman et al., 2015, Chapter 3.3.3)

*   **Real-valued Output:**
    The WHT produces only real-valued coefficients, unlike the DFT which produces complex coefficients. This simplifies computation and storage.

*   **No Frequency Interpretation (like DFT):**
    The Walsh functions are not sinusoidal. They are square waves with transitions between +1 and -1. Therefore, the coefficients in the WHT domain do not have a direct "frequency" interpretation in the same way as DFT coefficients do (which represent amplitude and phase of sinusoids). The coefficients represent the correlation of the image with the Walsh basis functions.

*   **Sorting of Walsh Functions:**
    Walsh functions can be ordered in different ways, most commonly by:
    *   **Sequency:** The number of zero crossings in a unit interval. This is analogous to frequency. Walsh functions ordered by sequency are called Walsh functions.
    *   **Hadamard Order:** The order in which they appear from the Hadamard matrix construction. This order does not necessarily correspond to sequency.

    The standard FWHT implementation typically uses the Hadamard order. Coefficients corresponding to higher sequency Walsh functions tend to capture finer details.

**Key Takeaway:** WHT is linear, orthogonal, real-valued, and can achieve energy compaction, but its coefficients lack a direct sinusoidal frequency interpretation.

---

### 5. Applications of Hadamard Transform in Image Processing

The efficiency and properties of the WHT make it suitable for various image processing tasks.

*   **Image Compression:**
    *   The WHT can be used for image compression by discarding coefficients with small magnitudes after the transform.
    *   The image is transformed, coefficients are quantized, and then non-zero coefficients are entropy coded.
    *   **Comparison with DFT:** For images with sharp edges and high contrast, the WHT might offer comparable or even better compression than DFT because of its sharp transitions. However, for smooth images or images with sinusoidal patterns, DFT generally performs better. (Castleman, 2003, Chapter 5)
    *   **Example:** In block-based compression, a block of pixels is transformed, and coefficients with low energy are set to zero. The remaining non-zero coefficients are then encoded.

*   **Image Filtering:**
    *   Filtering can be performed efficiently in the transform domain. A mask is applied to the WHT coefficients, and then the inverse WHT is applied.
    *   **Example:** Low-pass filtering can be achieved by setting high-sequency coefficients (corresponding to fine details) to zero. This can smooth the image.
    *   **Note:** Filtering operations using WHT often involve operations related to sequency rather than traditional frequency.

*   **Pattern Recognition and Feature Extraction:**
    *   The WHT coefficients can be used as features for classifying images or recognizing patterns.
    *   The distribution of energy among the coefficients can characterize certain image properties.

*   **Coding and Error Detection/Correction:**
    *   The robust nature of the Hadamard transform makes it suitable for communication systems where data may be corrupted by noise.
    *   The properties of the Hadamard matrix can be exploited for error detection and correction codes.

*   **Image Watermarking:**
    *   WHT can be used to embed watermarks into images. The watermark can be spread across many WHT coefficients to make it robust against noise and compression.

**Key Takeaway:** WHT is a versatile transform used in compression, filtering, pattern recognition, and coding due to its computational speed and energy compaction capabilities.

---

### 6. Advantages and Disadvantages

**Advantages:**

*   **Computational Efficiency:** FWHT is significantly faster than FFT (Fast Fourier Transform) for the same number of points, requiring only additions and subtractions.
*   **Real-valued:** All coefficients are real, simplifying implementation and reducing memory requirements compared to complex DFT.
*   **Hardware Implementability:** The simple operations make it easy to implement in hardware for real-time applications.
*   **Energy Compaction:** Can provide good energy compaction for certain types of images.
*   **Orthogonality:** Ensures reversibility.

**Disadvantages:**

*   **Limited Frequency Interpretation:** Unlike DFT, Walsh functions are not sinusoidal, making direct interpretation of coefficients as frequencies difficult.
*   **Blocky Artifacts:** In image compression, using WHT without careful quantization can sometimes lead to blocky artifacts, especially with smooth images where DFT might perform better.
*   **Sensitivity to Image Content:** The effectiveness of energy compaction varies significantly with the type of image content.

**Comparison with DFT (Relevant to CO2):**

| Feature            | Discrete Fourier Transform (DFT)        | Walsh-Hadamard Transform (WHT)          |
| :----------------- | :-------------------------------------- | :-------------------------------------- |
| Basis Functions    | Complex exponentials (sinusoids)        | Real-valued Walsh functions ($\pm 1$)   |
| Coefficients       | Complex (magnitude and phase)           | Real                                    |
| Computation        | Complex arithmetic (multiplication)     | Simple arithmetic (addition/subtraction)|
| Speed (N points)   | $O(N \log N)$ (using FFT)               | $O(N \log N)$ (using FWHT)              |
| Interpretation     | Direct frequency interpretation         | Sequency interpretation                 |
| Energy Compaction  | Good for smooth, continuous signals     | Good for piecewise constant signals     |
| Applications       | Signal analysis, frequency filtering, compression | Compression, pattern recognition, coding |

**Important Point to Remember:** While both DFT and WHT are $O(N \log N)$ in their fast implementations, the constant factor for WHT is much smaller due to the simpler operations.

---

### 7. Worked Examples and Practice Questions

**Example 1: Constructing a Hadamard Matrix**

*   **Question:** Construct the Hadamard matrix $H_8$.

*   **Answer:**
    We use the recursive formula: $H_{2N} = \begin{bmatrix} H_N & H_N \\ H_N & -H_N \end{bmatrix}$

    We know $H_4 = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 \\ 1 & -1 & -1 & 1 \end{bmatrix}$.

    $H_8 = \begin{bmatrix} H_4 & H_4 \\ H_4 & -H_4 \end{bmatrix}$

    $H_8 = \begin{bmatrix}
    1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
    1 & -1 & 1 & -1 & 1 & -1 & 1 & -1 \\
    1 & 1 & -1 & -1 & 1 & 1 & -1 & -1 \\
    1 & -1 & -1 & 1 & 1 & -1 & -1 & 1 \\
    1 & 1 & 1 & 1 & -1 & -1 & -1 & -1 \\
    1 & -1 & 1 & -1 & -1 & 1 & -1 & 1 \\
    1 & 1 & -1 & -1 & -1 & -1 & 1 & 1 \\
    1 & -1 & -1 & 1 & -1 & 1 & 1 & -1
    \end{bmatrix}$

**Example 2: 1D WHT Calculation**

*   **Question:** Compute the WHT of the signal $f = [2, 4, 6, 8]$.

*   **Answer:**
    $N=4$. $H_4 = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 \\ 1 & -1 & -1 & 1 \end{bmatrix}$.

    $F_w = \frac{1}{4} H_4 f$
    $F_w = \frac{1}{4} \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 \\ 1 & -1 & -1 & 1 \end{bmatrix} \begin{bmatrix} 2 \\ 4 \\ 6 \\ 8 \end{bmatrix}$

    $F_w = \frac{1}{4} \begin{bmatrix} (2+4+6+8) \\ (2-4+6-8) \\ (2+4-6-8) \\ (2-4-6+8) \end{bmatrix} = \frac{1}{4} \begin{bmatrix} 20 \\ -4 \\ -8 \\ 0 \end{bmatrix} = \begin{bmatrix} 5 \\ -1 \\ -2 \\ 0 \end{bmatrix}$

    The WHT of $f$ is $[5, -1, -2, 0]$.

**Practice Questions:**

1.  **Question:** Explain why the Hadamard transform is computationally efficient. (Aligns with CO2, K4)
    *   **Answer Hint:** Focus on the nature of basis functions and the operations involved.

2.  **Question:** Given a $2 \times 2$ image matrix $f = \begin{bmatrix} 10 & 20 \\ 30 & 40 \end{bmatrix}$, calculate its 2D WHT. (Aligns with CO2, K4)
    *   **Answer Hint:** Use $H_2 = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$ and the formula $F_w = \frac{1}{N} H_N f H_N$.

3.  **Question:** Discuss the advantages of using the Hadamard transform over the DFT for image compression, and vice versa. (Aligns with CO2, K4)
    *   **Answer Hint:** Consider computational cost, type of image content, and compression efficiency.

4.  **Question:** What is meant by "sequency" in the context of Walsh functions? How does it relate to the interpretation of WHT coefficients? (Aligns with CO2, K4)
    *   **Answer Hint:** Define sequency and contrast it with frequency.

---

### 8. Important Points to Remember

*   **Real and $\pm 1$ Coefficients:** The defining characteristic of the Hadamard transform is its use of only real numbers, specifically +1 and -1, in its basis functions.
*   **Powers of Two:** Hadamard matrices are defined for orders that are powers of 2 ($N=2^k$). Images or signals of other sizes need to be padded.
*   **Computational Speed:** The FWHT algorithm is very fast due to simple arithmetic operations.
*   **Energy Compaction:** While it can compact energy, its effectiveness depends on the image content. Images with sharp transitions or piecewise constant regions benefit more.
*   **No Direct Frequency:** Coefficients don't have the same direct sinusoidal frequency interpretation as DFT.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 9. References

*   **Gonzalez & Woods, "Digital Image Processing" (2009):** Provides a foundational understanding of image transforms, including a section on the Walsh-Hadamard transform in Chapter 7. It discusses its properties and applications in compression.
*   **Jayaraman, Esakkirajan, & Veerakumar, "Digital Image Processing" (2015):** This textbook also covers various image transforms, including WHT. It might offer practical examples and insights into its computational aspects and use in image compression.
*   **Castleman, "Digital Image Processing" (2003):** Castleman's book often delves into the practical aspects and trade-offs of different transforms, including WHT for compression.
*   **Jain, "Fundamentals of Digital Image Processing" (1988):** Jain's classic text provides a rigorous mathematical treatment of transforms, likely including the derivation and properties of WHT.
*   **Pratt, "Digital Image Processing" (2007):** Pratt's comprehensive work will offer detailed analysis of transforms, their optimality criteria, and their use in various image processing domains.

This comprehensive set of notes covers the Hadamard transform, its properties, applications, and comparisons, directly addressing the learning outcomes and aligning with the specified course outcomes at the K4 knowledge level.