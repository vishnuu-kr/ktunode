---
title: "Walsh transform"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee13"
status: "completed"
scrapedAt: "2026-05-23T18:00:30.552Z"
---
# DIGITAL IMAGE PROCESSING - Module 2: 2D Image Transforms: DFT

## Topic: Walsh Transform

---

### 1. Introduction to Walsh Transform

The Walsh transform is a class of orthogonal, completely separable, and discrete transforms, similar in many respects to the Discrete Fourier Transform (DFT). However, it uses only real numbers (specifically +1 and -1) and requires only additions and subtractions, making it computationally more efficient than the DFT, especially for certain applications.

**Key Concepts:**

*   **Orthogonal Transform:** A transform where the basis functions are orthogonal to each other. This means the inner product of any two distinct basis functions is zero.
*   **Separable Transform:** A transform that can be applied independently to rows and columns of a 2D image.
*   **Walsh Functions:** The basis functions of the Walsh transform. They are square waves that take only two values: +1 and -1.
*   **Sequency:** A measure of the rate of change in a Walsh function, analogous to frequency in the Fourier transform. It is defined as half the average number of zero crossings per unit interval.

**Relationship to DFT:**

The Walsh transform can be seen as a discrete approximation to the Fourier transform, especially when considering the sequency as an analog to frequency. However, it's important to note that they are not identical, and their applications often differ.

**Textbook Reference:**

*   **Gonzalez & Woods (4th Ed):** While the Walsh transform might not be as extensively covered as the DFT or DCT in the main chapters, it is often discussed in the context of orthogonal transforms and their applications in signal processing, which is fundamental to image processing. Look for sections discussing alternative transforms or specialized transform applications.
*   **Jayaraman et al. (1st Ed):** This textbook often provides a more direct comparison of various transforms used in image processing, including the Walsh transform, highlighting their computational advantages and specific use cases.

---

### 2. Walsh Functions and Sequency

**Walsh Functions:**

Walsh functions, denoted by $Wal(k, \theta)$, are a complete orthonormal set of functions that take values only +1 and -1. They are defined over an interval, typically normalized to the interval [0, 1).

*   **Structure:** Walsh functions are constructed using Hadamard matrices. They are essentially square waves with transitions occurring at binary fractions of the interval.
*   **Sequency Ordering:** Walsh functions can be ordered in various ways. The most common are:
    *   **Natural Sequency Ordering (dyadic ordering):** Functions are ordered by their sequency.
    *   **Pal-ordered (Walsh-ordered):** Functions are ordered based on the binary representation of their index.

**Sequency:**

Sequency is the key concept in Walsh transform, analogous to frequency in Fourier transform.

*   **Definition:** Sequency is defined as half the number of zero crossings of a function per unit interval.
*   **Units:** Sequency is measured in cycles per unit interval or "wals" (from Walsh).

**Example of Walsh Functions (Natural Sequency Order):**

Let's consider the first few Walsh functions over the interval [0, 1):

| Index (k) | Sequency | Wal(0, $\theta$) | Wal(1, $\theta$) | Wal(2, $\theta$) | Wal(3, $\theta$) |
| :-------- | :------- | :---------------- | :---------------- | :---------------- | :---------------- |
| 0         | 0        | +1                | +1                | +1                | +1                |
| 1         | 1        | +1                | +1                | -1                | -1                |
| 2         | 1        | +1                | -1                | +1                | -1                |
| 3         | 2        | +1                | -1                | -1                | +1                |

*(Note: The representation above is simplified. For a formal definition, you would consider the binary representation of the index k and the argument $\theta$. For instance, `Wal(k, $\theta$)` is +1 if the number of carries when adding the binary representation of k and $\theta$ is even, and -1 if it's odd. The definition of sequency ordering is crucial for the properties of the transform.)*

**Course Outcome Alignment:**

*   **CO2 (K3):** Understanding the definition and properties of Walsh functions and sequency is essential for analyzing mathematical transforms.

**Important Point to Remember:**

The sequency is the fundamental measure of signal variation in the Walsh domain, replacing frequency in the Fourier domain.

---

### 3. Walsh-Hadamard Transform (WHT)

The Walsh-Hadamard transform (WHT) is a specific type of Walsh transform that utilizes Hadamard matrices. Hadamard matrices are square matrices with entries +1 and -1 such that any two rows (or columns) are orthogonal.

**Definition of Hadamard Matrix:**

An $N \times N$ Hadamard matrix $H$ satisfies $H H^T = N I_N$, where $I_N$ is the identity matrix. The order $N$ of a Hadamard matrix must be 1, 2, or a multiple of 4.

**The $N \times N$ Walsh-Hadamard Transform:**

For an $N \times N$ data vector $\mathbf{f}$, its WHT $\mathbf{F}$ is given by:

$\mathbf{F} = \frac{1}{N} H_N \mathbf{f}$

where $H_N$ is an $N \times N$ Hadamard matrix.

**The 2D Walsh-Hadamard Transform:**

For an $N \times N$ image $f(x, y)$, the 2D WHT is separable and can be computed by applying the 1D WHT to each row and then to each column (or vice-versa).

$F(u, v) = \frac{1}{N^2} \sum_{x=0}^{N-1} \sum_{y=0}^{N-1} f(x, y) (-1)^{\sum_{i=0}^{m-1} (u_i y_i + v_i x_i)}$

where:
*   $f(x, y)$ is the input image pixel at position $(x, y)$.
*   $F(u, v)$ is the transformed coefficient at position $(u, v)$.
*   $N$ is the size of the image (assumed to be a power of 2, $N = 2^m$).
*   $u_i$ and $v_i$ are the $i$-th bits of the indices $u$ and $v$ in binary representation.
*   $x_i$ and $y_i$ are the $i$-th bits of the pixel coordinates $x$ and $y$ in binary representation.

**Key Property:** The exponential term $(-1)^{\sum...}$ is what defines the Walsh basis functions. It's +1 when the sum of the bitwise products is even, and -1 when it's odd.

**Computational Efficiency:**

*   The WHT can be computed using algorithms similar to the Fast Fourier Transform (FFT), known as the Fast Walsh-Hadamard Transform (FWHT).
*   FWHT requires only additions and subtractions, making it significantly faster than DFT, which requires complex multiplications. The number of operations is proportional to $N \log N$ for an $N$-point transform.

**Textbook Reference:**

*   **Gonzalez & Woods (4th Ed):** Discussed in chapters related to image transforms and their applications, often highlighting the computational advantages over DFT and its use in image compression and filtering.
*   **Jayaraman et al. (1st Ed):** Likely provides a detailed explanation of the 2D WHT formula and its computational aspects, perhaps with an example.

**Course Outcome Alignment:**

*   **CO2 (K3):** The formula for the 2D WHT and its computational efficiency are key aspects of analyzing mathematical transforms.
*   **CO3 (K3):** The WHT is a fundamental transform used in image compression.

**Important Point to Remember:**

The Walsh-Hadamard Transform is computationally efficient due to its reliance on additions and subtractions, making it suitable for real-time applications.

---

### 4. Properties of the Walsh Transform

The Walsh transform shares many useful properties with the Fourier transform, making it applicable in various image processing tasks.

**Key Properties:**

*   **Orthogonality:** The basis functions are orthogonal, ensuring that the transform is invertible and that information is preserved.
*   **Separability:** The 2D transform can be decomposed into 1D transforms along rows and columns, simplifying computation for rectangular images.
*   **Real and Symmetric:** The basis functions are real-valued, and the transform coefficients are also real. This simplifies implementation compared to the complex-valued DFT.
*   **Energy Compaction:** Like other transforms, the Walsh transform can concentrate the image's energy into a few coefficients. Images with smooth variations tend to have more energy in lower sequency coefficients. This property is crucial for compression.
*   **Convolution Property:** Similar to the DFT, the Walsh transform of a convolution of two sequences is related to the product of their Walsh transforms. However, the exact relationship is more complex due to the sequency domain.
*   **Energy Conservation (Parseval's Theorem):** The sum of squares of the input signal is equal to the sum of squares of the transformed coefficients (scaled by a factor).
    $\sum_{x=0}^{N-1} |f(x)|^2 = \frac{1}{N} \sum_{k=0}^{N-1} |F(k)|^2$
*   **Linearity:** $W\{af(x) + bg(x)\} = a W\{f(x)\} + b W\{g(x)\}$

**Textbook Reference:**

*   **Gonzalez & Woods (4th Ed):** Properties are discussed in the context of transform domains, often using examples to illustrate energy compaction and their implications for compression.
*   **Jayaraman et al. (1st Ed):** Might dedicate a section to comparing the properties of Walsh transform with other transforms like DFT and DCT.

**Course Outcome Alignment:**

*   **CO2 (K3):** Understanding these properties is vital for analyzing the behavior and applications of the Walsh transform.

**Important Point to Remember:**

The energy compaction property of the Walsh transform makes it suitable for image compression by allowing the selection of significant coefficients.

---

### 5. Applications of the Walsh Transform in Digital Image Processing

The Walsh transform finds applications in various image processing tasks due to its computational efficiency and energy compaction properties.

**Key Applications:**

*   **Image Compression:**
    *   By decorrelating image data and concentrating energy into a few coefficients, the Walsh transform enables efficient compression.
    *   Similar to DCT-based compression (like JPEG), important Walsh coefficients are quantized and transmitted, while less significant ones are discarded.
    *   **Example:** An image with smooth areas will have most of its energy in the low-sequency Walsh coefficients. These coefficients can be represented with fewer bits or quantized more coarsely, while high-sequency coefficients (representing fine details and noise) can be quantized more coarsely or even discarded.
*   **Image Filtering:**
    *   Walsh domain filtering can be performed by modifying coefficients in the transformed domain and then inverting the transform.
    *   Low-pass filtering in the Walsh domain would involve attenuating high-sequency coefficients, which correspond to rapid changes in the image.
    *   **Example:** Applying a low-pass filter in the Walsh domain can effectively smooth the image and reduce noise, similar to spatial domain smoothing filters but potentially with different characteristics based on the sequency domain representation.
*   **Pattern Recognition and Feature Extraction:**
    *   The Walsh coefficients can be used as features for classifying or identifying patterns in images.
    *   The sequency measure can be indicative of certain textures or structures within an image.
*   **Image Watermarking:**
    *   Embedding watermarks in the Walsh domain can offer robustness against certain image manipulations.
*   **Pattern Spectrum Analysis:**
    *   The Walsh transform can be used to analyze the spectral content of patterns.

**Textbook Reference:**

*   **Gonzalez & Woods (4th Ed):** Applications in image compression are often detailed in chapters dedicated to compression techniques. Filtering applications might be discussed in the context of transform-domain filtering.
*   **Jayaraman et al. (1st Ed):** Likely presents a more direct comparison of Walsh transform applications with other transforms, highlighting specific advantages for each task.
*   **Castleman (2/e):** May offer insights into early applications of Walsh transforms in signal and image processing, potentially including discussions on their computational benefits.
*   **Jain (1988):** A foundational text that might cover the basics of Walsh transform and its early applications in pattern recognition and signal processing.
*   **Pratt (4/e):** A comprehensive text that will likely cover advanced applications and theoretical aspects of various transforms, including Walsh transform, within the broader context of digital image processing.

**Course Outcome Alignment:**

*   **CO3 (K3):** Understanding image compression using Walsh transform.
*   **CO4 (K3):** Analyzing image filtering in the Walsh domain.
*   **CO1 (K2):** Understanding the role of transforms like Walsh in image processing systems.

**Important Point to Remember:**

The computational efficiency of the Walsh transform makes it a viable alternative to DFT and DCT for applications where speed is critical, such as real-time image processing.

---

### 6. Comparison with DFT and DCT

It's useful to compare the Walsh transform with other widely used transforms like the Discrete Fourier Transform (DFT) and Discrete Cosine Transform (DCT).

| Feature             | Discrete Fourier Transform (DFT)                                    | Discrete Cosine Transform (DCT)                                   | Walsh Transform (WHT)                                               |
| :------------------ | :------------------------------------------------------------------ | :---------------------------------------------------------------- | :------------------------------------------------------------------ |
| **Basis Functions** | Complex exponentials ($e^{-j2\pi k x / N}$)                          | Real cosines                                                      | Real Walsh functions (+1, -1 square waves)                          |
| **Values**          | Complex numbers                                                     | Real numbers                                                      | Real numbers (+1, -1)                                               |
| **Computation**     | Complex multiplications and additions (FFT)                        | Real multiplications and additions (FFT-like algorithms)         | Only additions and subtractions (FWHT)                              |
| **Computational Cost** | Higher (complex arithmetic)                                         | Moderate                                                          | Lowest                                                              |
| **Energy Compaction** | Good for signals with sinusoidal components                         | Excellent for signals with smooth variations and sharp edges      | Good for signals with square-wave-like components; can be less efficient for smooth signals than DCT |
| **Applications**    | Frequency analysis, filtering, compression (less common than DCT) | Image compression (JPEG), video compression, filtering, analysis | Image compression, filtering, pattern recognition, fast computation |
| **Domain Metric**   | Frequency                                                           | Frequency (spatial)                                               | Sequency                                                            |

**Key Takeaways from Comparison:**

*   **Computational Speed:** The Walsh transform is the fastest due to its use of only additions and subtractions.
*   **Energy Compaction:** DCT generally offers better energy compaction for typical images with smooth variations. However, for images with blocky or piecewise constant regions, WHT can perform comparably or even better.
*   **Basis Functions:** The complex nature of DFT basis functions makes it suitable for analyzing cyclical patterns, while the real cosines of DCT are effective for signals with localized variations. Walsh functions, with their square-wave nature, are suited for signals with abrupt transitions.

**Textbook Reference:**

*   **Gonzalez & Woods (4th Ed):** Often includes comparative tables and discussions on the trade-offs between different transforms.
*   **Jayaraman et al. (1st Ed):** Provides direct comparisons of properties and applications.

**Course Outcome Alignment:**

*   **CO2 (K3):** Comparing transform characteristics helps analyze their strengths and weaknesses.

**Important Point to Remember:**

Choose the transform based on the specific application requirements: Walsh for speed, DCT for general energy compaction in images, and DFT for frequency-domain analysis of periodic signals.

---

### 7. Practice Questions and Exercises

**Question 1:**
(CO2, K3) Explain the concept of 'sequency' in the context of the Walsh transform and how it relates to frequency in the Fourier transform.

**Answer:**
Sequency is the measure of the rate of change of a Walsh function, analogous to frequency in the Fourier transform. It is defined as half the number of zero crossings of the function per unit interval. Higher sequency values indicate more rapid transitions in the Walsh function. While frequency measures the rate of oscillation, sequency measures the rate of sign changes.

**Question 2:**
(CO2, K3) What is the primary computational advantage of the Walsh transform over the Discrete Fourier Transform?

**Answer:**
The primary computational advantage of the Walsh transform is that its basis functions are composed of +1 and -1 values. This means the transform can be computed using only additions and subtractions, leading to significantly faster computation compared to the DFT, which involves complex multiplications. This is achieved through the Fast Walsh-Hadamard Transform (FWHT) algorithm.

**Question 3:**
(CO3, K3) How does the Walsh transform contribute to image compression?

**Answer:**
The Walsh transform helps in image compression by decorrelating image data and concentrating most of the image's energy into a few Walsh coefficients, particularly those corresponding to low sequency. By quantizing these significant coefficients more precisely and discarding or coarsely quantizing the less significant ones (often associated with high sequency and noise), the amount of data needed to represent the image can be significantly reduced.

**Question 4:**
(CO2, K3) State and explain the energy conservation property (Parseval's Theorem) for the Walsh transform.

**Answer:**
The energy conservation property for the Walsh transform states that the sum of the squares of the input signal samples is equal to a scaled version of the sum of the squares of its Walsh transform coefficients. Mathematically, for an $N$-point Walsh transform:
$\sum_{x=0}^{N-1} |f(x)|^2 = \frac{1}{N} \sum_{k=0}^{N-1} |F(k)|^2$
This means the transform preserves the total energy of the signal.

**Question 5:**
(CO2, K3) Discuss a scenario where the Walsh transform might be preferred over the DCT for an image processing task.

**Answer:**
The Walsh transform might be preferred over the DCT in applications where computational speed is of paramount importance and the image data exhibits characteristics that the Walsh functions can efficiently represent. For instance, in real-time video processing or embedded systems with limited computational resources, the FWHT's efficiency (using only additions/subtractions) makes it highly attractive. If an image contains significant blocky or piecewise constant regions with sharp transitions, the Walsh transform might offer good energy compaction in these specific scenarios, potentially rivaling or exceeding DCT's performance for those particular image types.

---

### 8. Summary and Key Points to Remember

*   The **Walsh transform** is an orthogonal, separable, and discrete transform that uses real-valued basis functions consisting of +1 and -1.
*   **Sequency** is the fundamental measure in the Walsh domain, analogous to frequency in the Fourier domain, representing the rate of sign changes.
*   The **Walsh-Hadamard Transform (WHT)** utilizes Hadamard matrices and can be computed efficiently via the **Fast Walsh-Hadamard Transform (FWHT)**, requiring only additions and subtractions.
*   **Computational efficiency** is the primary advantage of the Walsh transform over DFT and DCT.
*   The Walsh transform exhibits **energy compaction**, allowing for **image compression** by concentrating image energy into a few low-sequency coefficients.
*   It can be used for **image filtering** by manipulating coefficients in the sequency domain.
*   While DCT generally offers better energy compaction for smooth images, WHT is advantageous when **speed is critical** or for images with **piecewise constant regions**.
*   The transform's properties, including **orthogonality**, **separability**, and **energy conservation**, are crucial for its applications.

---

This comprehensive set of notes covers the Walsh transform in the context of Digital Image Processing, aligning with the specified learning outcomes and course outcomes. The content draws from the principles discussed in the referenced textbooks, emphasizing understanding, analysis, and illustration of the transform's concepts and applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
