---
title: "Walsh transform"
subject: "IMAGE PROCESSING APPLICATIONS"
module: "Module 2: 2D Image transforms: DFT, Properties"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fef61"
status: "completed"
scrapedAt: "2026-05-23T18:01:12.835Z"
---
This is a comprehensive set of study notes for the Walsh Transform topic, designed to align with your specified learning outcomes, course outcomes, and reference materials.

## Module 2: 2D Image Transforms: DFT, Properties - Walsh Transform

### Topic Overview

The Walsh transform is a member of the class of orthogonal transform that uses only real numbers and has a kernel consisting of values +1 and -1. Unlike the Fourier transform, which uses sinusoidal functions, the Walsh transform uses a set of orthogonal square waves called Walsh functions. This makes it computationally efficient and suitable for certain image processing applications, especially where computational cost is a primary concern.

### Learning Outcomes

*   **Understand the definition and mathematical formulation of the Walsh transform.**
*   **Explore the properties of the Walsh transform and their implications in image processing.**
*   **Compare the Walsh transform with other transforms like the DFT, highlighting their advantages and disadvantages.**
*   **Identify and understand the applications of the Walsh transform in image processing.**

### Course Outcomes Alignment

*   **CO2: Analyse the various concepts and mathematical transforms and compression schemes necessary for image processing (Knowledge Level: K4).**
    *   This module directly contributes to CO2 by introducing and analyzing the mathematical principles and properties of the Walsh transform, a key image transform.
*   **CO1: Compare different colour model representations of image processing system (Knowledge Level: K4).**
    *   While not directly about color models, understanding transforms like Walsh is fundamental to many image processing tasks, including those that operate on color images after color space conversion. This knowledge base supports the broader understanding of image manipulation.
*   **CO3: Illustrate the various schemes of image filtering (Knowledge Level: K5).**
    *   The properties of the Walsh transform, particularly its energy compaction and separability, are crucial for implementing filtering operations in the Walsh domain.
*   **CO4: Determine the techniques for restoration of images (Knowledge Level: K5).**
    *   Similar to filtering, image restoration techniques can leverage the transform domain properties of the Walsh transform for efficient processing.

---

### 1. Introduction to Walsh Transform

The Walsh transform is a transform that decomposes a signal into a set of orthogonal basis functions called Walsh functions. These functions are also known as Walsh-Hadamard functions.

**Key Concepts:**

*   **Orthogonal Transform:** A transform where the basis functions are mutually orthogonal. This means the inner product of any two distinct basis functions is zero.
*   **Walsh Functions:** A complete set of orthogonal functions that take only two values: +1 and -1. They are characterized by their "sequency," which is related to the number of zero crossings in the interval.
*   **Sequency:** The average number of zero crossings per unit interval. This is the analogue of frequency in the Fourier transform.

**Mathematical Formulation:**

For a 1D discrete signal $f(x)$ of length $N$, where $N$ is a power of 2, the Walsh transform $W(u)$ is given by:

$W(u) = \frac{1}{N} \sum_{x=0}^{N-1} f(x) \text{wal}(u, x)$

where:
*   $f(x)$ is the input signal.
*   $W(u)$ is the Walsh transform coefficient at sequency $u$.
*   $\text{wal}(u, x)$ is the Walsh function of order $u$ evaluated at $x$. The arguments $u$ and $x$ represent the sequency and time/spatial domain indices, respectively.

The Walsh functions $\text{wal}(u, x)$ are defined based on the binary representations of $u$ and $x$. Let $u = (u_{k-1} u_{k-2} \dots u_1 u_0)_2$ and $x = (x_{k-1} x_{k-2} \dots x_1 x_0)_2$, where $N = 2^k$. The Walsh function $\text{wal}(u, x)$ is defined as:

$\text{wal}(u, x) = \prod_{i=0}^{k-1} (-1)^{u_i x_i}$

This product essentially sums the bitwise XOR of $u$ and $x$ in the exponent, where the exponents are related to the powers of 2. The value of $\text{wal}(u, x)$ is +1 if the number of bit positions where both $u_i$ and $x_i$ are 1 is even, and -1 if it's odd.

**Example:** For $N=4 = 2^2$, we have $k=2$.
Let $u=2 = (10)_2$ and $x=1 = (01)_2$.
$u_1 = 1, u_0 = 0$
$x_1 = 0, x_0 = 1$

$\text{wal}(2, 1) = (-1)^{u_1 x_1} \times (-1)^{u_0 x_0} = (-1)^{1 \times 0} \times (-1)^{0 \times 1} = (-1)^0 \times (-1)^0 = 1 \times 1 = 1$.

### 2. Walsh Transform for 2D Images

For a 2D image $f(x, y)$ of size $M \times N$, where $M$ and $N$ are powers of 2, the 2D Walsh transform $W(u, v)$ is given by:

$W(u, v) = \frac{1}{MN} \sum_{x=0}^{M-1} \sum_{y=0}^{N-1} f(x, y) \text{wal}(u, x) \text{wal}(v, y)$

The 2D Walsh transform is separable, meaning it can be computed by applying the 1D Walsh transform first along rows and then along columns (or vice-versa). This is a crucial property for efficient computation.

$W(u, v) = \frac{1}{N} \sum_{x=0}^{M-1} \left( \frac{1}{M} \sum_{y=0}^{N-1} f(x, y) \text{wal}(v, y) \right) \text{wal}(u, x)$

The inner summation computes the 1D Walsh transform of each row along the $y$ direction, and the outer summation computes the 1D Walsh transform of these results along the $x$ direction.

### 3. Properties of the Walsh Transform

The Walsh transform possesses several important properties that make it useful in image processing.

*   **Orthogonality:** The basis functions are orthogonal, meaning $\sum_{x=0}^{N-1} \text{wal}(u, x) \text{wal}(v, x) = N \delta_{uv}$, where $\delta_{uv}$ is the Kronecker delta. This ensures that the transform is invertible and that the original signal can be perfectly reconstructed.

    *   **Reconstruction Formula (Inverse Walsh Transform):**
        $f(x) = \sum_{u=0}^{N-1} W(u) \text{wal}(u, x)$

*   **Real and Symmetric Kernel:** The kernel of the Walsh transform consists only of +1 and -1 values. This is a significant advantage over the DFT, which uses complex exponential functions. This property simplifies computations and reduces the need for complex arithmetic.

*   **Energy Compaction:** Like the Fourier transform, the Walsh transform tends to concentrate the energy of a signal into a few coefficients, especially for signals with high correlation (e.g., natural images). Coefficients corresponding to low sequency typically represent the dominant features of the image.

*   **Separability:** As shown in Section 2, the 2D Walsh transform is separable, allowing for efficient computation using 1D transforms.

*   **Linearity:**
    $W\{af(x) + bg(x)\} = aW\{f(x)\} + bW\{g(x)\}$
    This property allows us to process linear combinations of signals independently.

*   **Translation (Shift) Property:** The Walsh transform is **not** invariant to translation. A shift in the spatial domain results in a more complex change in the Walsh domain, unlike the simple phase shift seen in the DFT. This is because the basis functions are not sinusoidal.

*   **Multiplication Property:**
    $W\{f(x)g(x)\} = \frac{1}{N} W\{f(x)\} * W\{g(x)\}$
    where $*$ denotes convolution. This property is important for frequency-domain filtering.

*   **Correlation Property:**
    $W\{f(x) * g(x)\} = W\{f(x)\} \cdot W\{g(x)\}$
    where $\cdot$ denotes element-wise multiplication. This is analogous to the convolution theorem in DFT.

**Important Point to Remember:** The Walsh transform orders the basis functions based on **sequency**, not frequency. Low sequency corresponds to slow variations in the signal, while high sequency corresponds to rapid variations.

---

### 4. Comparison with DFT

| Feature           | Walsh Transform                                    | Discrete Fourier Transform (DFT)                     |
| :---------------- | :------------------------------------------------- | :--------------------------------------------------- |
| **Basis Functions** | Square waves (+1, -1)                             | Complex exponentials (sinusoids)                     |
| **Kernel Values** | Real (+1, -1)                                      | Complex (real and imaginary parts)                   |
| **Computational Cost** | Generally lower (no multiplications needed, only additions/subtractions) | Higher (requires complex multiplications)          |
| **Transform Domain** | Sequency Domain                                    | Frequency Domain                                     |
| **Translation**   | Not invariant (complex change)                     | Invariant (phase shift)                              |
| **Energy Compaction** | Good for signals with high correlation           | Generally good, especially for periodic signals      |
| **Applications**  | Data compression, noise reduction, pattern recognition, image filtering where computational efficiency is key | Signal analysis, filtering, convolution, frequency domain processing |

**Insights from Textbooks:**

*   **Gonzalez & Woods (2009):** They emphasize the computational simplicity of the Walsh-Hadamard transform (a common variant of the Walsh transform) due to its real kernel and the absence of multiplications. They also discuss its effectiveness in energy compaction for certain types of images.
*   **Jayaraman et al. (2015):** This text often highlights the sequency ordering and the properties derived from the binary representation of the Walsh functions, which are crucial for understanding its behavior and applications.

---

### 5. Applications of Walsh Transform in Image Processing

The properties of the Walsh transform make it suitable for various image processing tasks.

*   **Image Compression:** Due to its energy compaction property, the Walsh transform can be used to represent an image with fewer coefficients. By quantizing or discarding coefficients with low magnitudes, significant compression can be achieved. This is particularly useful in applications where bandwidth or storage is limited.

*   **Image Filtering:** In the Walsh domain, filtering can be implemented by multiplying the Walsh coefficients of the image with a filter function. The inverse Walsh transform then yields the filtered image.
    *   **Example:** Low-pass filtering in the Walsh domain involves multiplying the Walsh coefficients with a filter that attenuates high-sequency coefficients, effectively smoothing the image. This is similar to low-pass filtering in the frequency domain.

*   **Image Restoration:** Similar to filtering, restoration techniques can be applied in the Walsh domain. For example, deblurring can be achieved by dividing the degraded image's Walsh coefficients by the Walsh transform of the blur kernel (with appropriate handling of zero or small coefficients to avoid instability).

*   **Pattern Recognition:** The Walsh transform can be used as a feature extraction tool for pattern recognition. Certain patterns might exhibit distinct characteristics in the Walsh domain.

*   **Noise Reduction:** By identifying and reducing or eliminating coefficients that correspond to noise (often high-sequency coefficients for certain types of noise), the Walsh transform can be used for noise suppression.

**Example Scenario (Compression):**
Consider a small 4x4 image segment. We can compute its 2D Walsh transform. If many of the resulting Walsh coefficients are close to zero, we can represent these coefficients as zero (quantization) and transmit only the significant coefficients, along with their locations. This leads to data compression.

**Example Scenario (Filtering):**
To perform a low-pass filter (smooth an image) using the Walsh transform:
1. Compute the 2D Walsh transform of the image.
2. Create a filter mask that has +1 for low-sequency coefficients and 0 (or values close to 0) for high-sequency coefficients.
3. Multiply the Walsh coefficients of the image element-wise with the filter mask.
4. Compute the inverse Walsh transform of the result to obtain the smoothed image.

---

### 6. Practical Considerations and Algorithms

*   **Fast Walsh-Hadamard Transform (FWHT):** The computational efficiency of the Walsh transform is significantly enhanced by the Fast Walsh-Hadamard Transform (FWHT) algorithm. This algorithm reduces the computational complexity from $O(N^2)$ to $O(N \log N)$ for a 1D transform of length $N$. For a 2D $N \times N$ image, it becomes $O(N^2 \log N)$. The FWHT avoids multiplications by using only additions and subtractions, making it very fast.

*   **Sequency Ordering:** There are different ways to order the Walsh functions, such as natural sequency order and dyadic or bit-reversal order. The FWHT algorithms are designed to work with specific orderings. Understanding the ordering is crucial for correct implementation.

*   **Hadamard Matrix:** The Walsh transform can be represented using a Hadamard matrix. A Hadamard matrix of order $N$ is an $N \times N$ matrix $H$ with entries +1 or -1 such that $H H^T = N I_N$. The rows (or columns) of a Hadamard matrix form a set of orthogonal vectors. The Walsh-Hadamard transform uses such matrices.

**Important Point to Remember:** The efficiency of the Walsh transform, particularly the FWHT, is a major reason for its consideration in applications with limited computational resources.

---

### 7. Practice Questions and Exercises

**Q1: Define the Walsh transform and its basis functions.**
**Answer:** The Walsh transform decomposes a signal into a set of orthogonal square waves called Walsh functions. The basis functions, $\text{wal}(u, x)$, take only values +1 and -1 and are defined based on the binary representation of the sequency index $u$ and the spatial index $x$.

**Q2: What is the main advantage of the Walsh transform over the DFT in terms of computation?**
**Answer:** The main advantage is its computational efficiency. The Walsh transform uses a kernel of only +1 and -1 values, eliminating the need for complex multiplications required by the DFT. Algorithms like FWHT make it even faster.

**Q3: Explain the concept of "sequency" in the context of the Walsh transform.**
**Answer:** Sequency is the analogue of frequency in the Walsh transform. It measures the average number of zero crossings per unit interval of the Walsh function. Low sequency corresponds to slow variations, and high sequency corresponds to rapid variations in the signal.

**Q4: If a 2D image is transformed using the 2D Walsh transform, how can the inverse transform be efficiently computed?**
**Answer:** The 2D Walsh transform is separable. The inverse transform can be computed by applying the 1D inverse Walsh transform to each row and then to each column of the intermediate result (or vice-versa).

**Q5: List two applications of the Walsh transform in image processing.**
**Answer:** Image compression and image filtering are two significant applications.

**Q6: Consider a 1D signal of length $N=4$. What are the possible values of the sequency index $u$?**
**Answer:** For $N=4$, the sequency indices range from 0 to $N-1$. So, $u$ can be 0, 1, 2, 3.

**Q7: True or False: The Walsh transform is invariant to translation of the input signal.**
**Answer:** False. The Walsh transform is not invariant to translation.

**Q8: For an $N \times N$ image, what is the approximate computational complexity of the 2D Walsh transform using the FWHT?**
**Answer:** The computational complexity is approximately $O(N^2 \log N)$.

---

### 8. Summary and Key Takeaways

*   The Walsh transform is an orthogonal transform using +1 and -1 valued square wave basis functions.
*   It operates in the **sequency domain**, where sequency is analogous to frequency.
*   Key properties include orthogonality, real kernel, energy compaction, and separability.
*   Its primary advantage over the DFT is computational efficiency due to the absence of complex multiplications.
*   The **Fast Walsh-Hadamard Transform (FWHT)** significantly reduces computational complexity.
*   Applications include image compression, filtering, restoration, and pattern recognition.
*   It is less invariant to translation compared to the DFT.

---

This comprehensive study material provides a thorough understanding of the Walsh transform, its properties, and its applications in image processing, aligning with the specified learning and course outcomes. Remember to consult your textbooks for deeper theoretical insights and specific algorithmic details.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
