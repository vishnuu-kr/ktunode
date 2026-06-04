---
title: "Walsh transform"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3691e"
status: "completed"
scrapedAt: "2026-05-23T16:35:08.249Z"
---
# Digital Image Processing: Module 2 - 2D Image Transforms: DFT & Walsh Transform

## 1. Introduction to Image Transforms

Image transforms are fundamental tools in digital image processing. They convert an image from its spatial domain (pixel intensity values at specific locations) to a transform domain (representation of image features in a different domain). This transformation can reveal properties of the image that are not apparent in the spatial domain, facilitating various operations like compression, filtering, and analysis.

**Course Outcome Alignment:**
*   **CO1 (K2):** Understanding the role of transforms as components within an image processing system.
*   **CO2 (K3):** Analyzing the mathematical principles and applications of transforms.

**Key Concepts:**
*   **Spatial Domain:** The domain where an image is represented by its pixel coordinates and their corresponding intensity values.
*   **Transform Domain:** A domain where the image is represented by coefficients that capture specific features or characteristics of the image, such as frequency, energy, or directional information.
*   **Transform Kernels:** The basis functions used in the transform process.

**Textbook References:**
*   **Gonzalez & Woods (4th Ed.):** Chapter 4 provides a broad overview of image transforms, including the DFT and its applications. While the Walsh transform might be covered in less detail, the foundational concepts of transform domains are well-explained.
*   **Jayaraman, Esakkirajan, Veerakumar (1st Ed.):** Chapters related to transform techniques will likely discuss the principles behind converting spatial information into a different domain.

---

## 2. The Discrete Fourier Transform (DFT) - A Brief Overview

While the primary focus is on the Walsh transform, understanding the DFT is crucial as it sets the stage for other transform techniques. The DFT is a workhorse in image processing for frequency-domain analysis.

**Key Concepts (DFT):**
*   **Sinusoidal Basis Functions:** The DFT uses complex exponential (sinusoidal) functions as its basis.
*   **Frequency Representation:** It decomposes an image into its constituent frequencies.
*   **2D DFT:** For an image of size M x N, the 2D DFT is defined as:
    $$F(u, v) = \frac{1}{\sqrt{MN}} \sum_{x=0}^{M-1} \sum_{y=0}^{N-1} f(x, y) e^{-j2\pi(\frac{ux}{M} + \frac{vy}{N})}$$
    where $f(x, y)$ is the pixel intensity at spatial coordinates $(x, y)$, and $F(u, v)$ are the transform coefficients at frequency coordinates $(u, v)$.
*   **Properties:** Linearity, separability, periodicity, rotation, translation, scaling, Parseval's theorem.

**Importance for Walsh Transform:** The DFT's success in representing image information motivates the exploration of other orthogonal transforms, like the Walsh transform, which use different basis functions.

**Textbook References:**
*   **Gonzalez & Woods (4th Ed.):** Chapter 4 is the primary source for DFT in image processing, covering its definition, properties, and applications like filtering.
*   **Jayaraman, Esakkirajan, Veerakumar (1st Ed.):** Likely covers DFT as a foundational transform.

---

## 3. The Walsh Transform

The Walsh transform is a class of orthogonal transforms that use **Walsh functions** as basis functions. These functions are sequences of values that are either +1 or -1. This binary nature makes the Walsh transform computationally efficient, especially for hardware implementation.

**Learning Outcome Alignment:**
*   **CO2 (K3):** Analyzing the mathematical concepts and applications of the Walsh transform.

### 3.1. Walsh Functions

Walsh functions are an orthogonal set of functions that take only two values, +1 and -1. They are defined over a dyadic interval (e.g., 0 to 1) and can be extended to discrete sequences.

**Key Concepts:**
*   **Sequency:** The analog of frequency for Walsh functions. It is defined as the number of zero crossings in a normalized interval. Higher sequency means faster changes in the function.
*   **Walsh-Hadamard Transform (WHT):** A specific type of Walsh transform that is widely used. It is based on Hadamard matrices.
*   **Hadamard Matrix:** A square matrix of order $2^m$ with entries +1 and -1 such that its rows (and columns) are mutually orthogonal. The simplest Hadamard matrix is $H_2 = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$.

**Types of Walsh Functions:**
*   **Sequency-ordered:** The Walsh functions are ordered according to their sequency.
*   **Natural-ordered (or Hadamard-ordered):** The ordering is based on the binary representation of the indices, which aligns with the structure of Hadamard matrices. For image processing, natural ordering is often preferred due to computational efficiency.

### 3.2. The 1D Walsh-Hadamard Transform (WHT)

For a vector $f$ of length $N$ (where $N$ is a power of 2), the WHT is given by:

$$F(u) = \frac{1}{N} \sum_{x=0}^{N-1} f(x) W(u, x)$$

where:
*   $f(x)$ is the input vector element at index $x$.
*   $F(u)$ is the transform coefficient at index $u$.
*   $W(u, x)$ is the Walsh function value at indices $u$ and $x$.

Using Hadamard matrices, the transform can be expressed as:

$$F = H f$$

where $H$ is the Hadamard matrix of order $N$.

**Important Note:** The normalization factor ($\frac{1}{N}$) can vary depending on the definition. Some definitions include $\frac{1}{\sqrt{N}}$ for each transform, making the inverse transform identical to the forward transform (self-reciprocal).

### 3.3. The 2D Walsh-Hadamard Transform (WHT)

For an $N \times N$ image $f(x, y)$ (where $N$ is a power of 2), the 2D WHT is typically computed using a separable approach:

$$F(u, v) = \frac{1}{N^2} \sum_{x=0}^{N-1} \sum_{y=0}^{N-1} f(x, y) W(u, x) W(v, y)$$

Again, $W(u, x)$ and $W(v, y)$ are the Walsh functions. In practice, this is computed by applying the 1D WHT row-wise and then column-wise (or vice-versa).

**Alternative using Hadamard Matrices:**
Let $H_N$ be the Hadamard matrix of order $N$. The 2D WHT can be represented as:

$$F = \frac{1}{N} H_N f H_N$$

where $f$ is the image matrix.

**Key Property: Energy Compaction:**
The Walsh transform, particularly the Hadamard transform, tends to concentrate the image's energy into a few coefficients, especially for images with smooth regions. This makes it suitable for compression.

**Textbook References:**
*   **Gonzalez & Woods (4th Ed.):** While not a primary focus like DFT, the principles of orthogonal transforms and their energy compaction properties are discussed, which apply to Walsh transform.
*   **Jayaraman, Esakkirajan, Veerakumar (1st Ed.):** Likely provides a dedicated section on Walsh transform, its definition, and applications.
*   **Castleman (2/e):** Might include discussions on various orthogonal transforms and their comparative advantages.
*   **Jain (1988):** A foundational text that likely covers the mathematical underpinnings of transforms like Walsh.

---

## 4. Applications of the Walsh Transform in Image Processing

The Walsh transform's efficiency and energy compaction properties make it useful in several image processing tasks.

**Learning Outcome Alignment:**
*   **CO2 (K3):** Illustrating the various applications of the Walsh transform.
*   **CO3 (K3):** Understanding how the Walsh transform can be used for image compression.
*   **CO4 (K3):** Analyzing the potential use of Walsh transform in filtering.

### 4.1. Image Compression

The Walsh transform is effective for image compression because it can achieve good energy compaction.

**Process:**
1.  **Forward Transform:** Apply the 2D Walsh transform to the image.
2.  **Quantization:** Many of the transform coefficients will be small or zero. These can be quantized more coarsely (represented with fewer bits) or set to zero entirely.
3.  **Entropy Coding:** The quantized coefficients are then compressed using techniques like Huffman coding or arithmetic coding.

**Advantages:**
*   **Computational Speed:** Faster than DFT due to only additions and subtractions (no multiplications).
*   **Good Energy Compaction:** For certain types of images.

**Disadvantages:**
*   **Basis Function Properties:** The sharp transitions in Walsh functions can lead to ringing artifacts, especially when used for compression compared to transforms with smoother basis functions (like DCT).

**Example:**
Consider a simple 4x4 image patch. Applying the WHT will produce a 4x4 matrix of coefficients. If most coefficients are close to zero, they can be quantized to zero, reducing the number of bits needed to represent the image.

**Textbook References:**
*   **Jayaraman, Esakkirajan, Veerakumar (1st Ed.):** Likely details the application of Walsh transform in compression.
*   **Pratt (4/e):** May offer comparative analysis of different transforms for compression, including Walsh transform.

### 4.2. Image Filtering

The Walsh transform can also be used for filtering, analogous to frequency-domain filtering with DFT.

**Process:**
1.  **Forward Transform:** Apply the 2D WHT to the image.
2.  **Filtering Operation:** Multiply the Walsh coefficients with a filter mask. The filter mask is designed to pass or attenuate coefficients based on their sequency.
3.  **Inverse Transform:** Apply the inverse WHT to obtain the filtered image.

**Sequency Domain Filtering:**
*   **Low-pass filter:** Attenuates high-sequency coefficients.
*   **High-pass filter:** Attenuates low-sequency coefficients.

**Challenges:**
*   **Sequency Interpretation:** While analogously called "sequency," the interpretation of what these "sequencies" represent in terms of image features is not as intuitive as the spatial frequencies in DFT.
*   **Artifacts:** Similar to compression, the sharp transitions in Walsh functions can introduce artifacts.

**Textbook References:**
*   **Gonzalez & Woods (4th Ed.):** While not specific to Walsh filtering, Chapter 4's discussion on frequency-domain filtering using DFT provides the conceptual framework that can be adapted to sequency domain.

### 4.3. Other Applications

*   **Image Analysis:** Used in pattern recognition and feature extraction.
*   **Digital Signal Processing:** In areas like audio processing and error correction codes.

---

## 5. Properties of the Walsh Transform

Understanding these properties helps in applying and analyzing the Walsh transform.

**Learning Outcome Alignment:**
*   **CO2 (K3):** Analyzing the properties of the Walsh transform.

**Key Properties:**
*   **Orthogonality:** The basis functions are orthogonal, meaning they are linearly independent. This ensures that the transform is reversible and that each coefficient represents unique information.
    $$\sum_{x=0}^{N-1} W(u, x) W(v, x) = \begin{cases} N & \text{if } u=v \\ 0 & \text{if } u \neq v \end{cases}$$
*   **Completeness:** The set of Walsh functions is complete, meaning any finite function can be represented by a linear combination of these functions.
*   **Real and Symmetric:** Walsh functions are real-valued and symmetric, simplifying computations compared to complex exponentials in DFT.
*   **Energy Compaction:** As mentioned, it tends to concentrate energy into a few coefficients.
*   **Computational Efficiency:** Can be computed using the Fast Walsh-Hadamard Transform (FWHT) algorithm, which has a complexity of $O(N \log N)$ for an $N$-point transform, similar to FFT for DFT. The key advantage is that FWHT involves only additions and subtractions, making it very fast.
*   **Self-Reciprocal (with appropriate normalization):** If normalized by $\frac{1}{\sqrt{N}}$ for each transform, the forward and inverse transforms are identical.

**Important Point to Remember:** The efficiency of the FWHT makes it attractive for real-time applications and hardware implementations.

---

## 6. Inverse Walsh Transform

The inverse Walsh transform reconstructs the original signal from its Walsh coefficients.

**Key Concepts:**
*   **Reconstruction:** The inverse transform uses the same basis functions as the forward transform.
*   **1D Inverse WHT:**
    $$f(x) = \frac{1}{N} \sum_{u=0}^{N-1} F(u) W(u, x)$$
    (Note: The normalization factor might differ based on the forward transform definition. If the forward transform used $\frac{1}{N}$, the inverse is as above. If the forward transform used $\frac{1}{\sqrt{N}}$, the inverse is the same as the forward transform.)
*   **2D Inverse WHT:**
    $$f(x, y) = \frac{1}{N^2} \sum_{u=0}^{N-1} \sum_{v=0}^{N-1} F(u, v) W(u, x) W(v, y)$$

**Algorithm:** The inverse WHT can also be computed efficiently using a recursive butterfly structure similar to the FFT, but with additions instead of complex multiplications.

**Textbook References:**
*   **Gonzalez & Woods (4th Ed.):** Chapter 4 discusses the inverse DFT, providing the conceptual parallel for inverse Walsh transform.
*   **Jayaraman, Esakkirajan, Veerakumar (1st Ed.):** Likely covers the inverse WHT algorithm.

---

## 7. Comparison with DFT

Understanding the differences and similarities helps in choosing the right transform.

**Learning Outcome Alignment:**
*   **CO2 (K3):** Analyzing the comparative aspects of Walsh transform versus other transforms like DFT.

| Feature            | Discrete Fourier Transform (DFT)                     | Walsh-Hadamard Transform (WHT)                   |
| :----------------- | :--------------------------------------------------- | :----------------------------------------------- |
| **Basis Functions**| Complex exponentials ($e^{-j2\pi k n / N}$)           | Walsh functions (+1, -1)                         |
| **Domain**         | Frequency domain                                     | Sequency domain                                  |
| **Values**         | Complex numbers                                      | Real numbers (+1, -1)                            |
| **Computation**    | Complex multiplications, additions, subtractions     | Additions and subtractions only                  |
| **Computational Cost**| $O(N^2)$ (direct), $O(N \log N)$ (FFT)           | $O(N^2)$ (direct), $O(N \log N)$ (FWHT)           |
| **Energy Compaction**| Generally good for smooth signals/images            | Good for signals/images with piecewise constant segments |
| **Artifacts**      | Ringing can occur, but generally smoother basis      | Ringing can be more pronounced due to sharp transitions |
| **Interpretability**| Frequencies are intuitive                         | Sequency is less intuitive                       |
| **Hardware Suitability** | Requires complex arithmetic units                 | Very suitable due to simple operations           |

**Important Points to Remember:**
*   The Walsh transform is computationally cheaper than DFT due to the absence of multiplications.
*   The choice between DFT and Walsh transform often depends on the image characteristics and the specific application. For general-purpose filtering and frequency analysis, DFT is often preferred. For applications where computational speed and hardware implementation are paramount, and the image content is suitable (e.g., blocky or piecewise constant), Walsh transform can be a good choice.

**Textbook References:**
*   **Gonzalez & Woods (4th Ed.):** Chapter 4 compares DFT with other transforms, providing a framework for this comparison.
*   **Pratt (4/e):** Chapter 7 likely discusses various transforms and their trade-offs.

---

## 8. Practice Questions and Exercises

**(K3 Level Questions)**

1.  **Concept:** What are the basis functions of the Walsh transform? How do they differ from the basis functions of the DFT?
    **Answer:** Walsh functions consist of values +1 and -1. DFT basis functions are complex exponentials (sinusoids).

2.  **Application:** Explain how the Walsh transform can be used for image compression. What is the key property that enables this application?
    **Answer:** The Walsh transform achieves energy compaction, concentrating image information into a few coefficients. These coefficients can be quantized more coarsely or set to zero, reducing data redundancy for compression.

3.  **Property:** State the orthogonality property of Walsh functions. Why is this property important?
    **Answer:** $\sum_{x=0}^{N-1} W(u, x) W(v, x) = N$ if $u=v$, and $0$ if $u \neq v$. This ensures reversibility and that each coefficient represents unique information.

4.  **Comparison:** List two advantages of the Walsh transform over the DFT for image processing, and one potential disadvantage.
    **Answer:**
    *   **Advantages:** Computational efficiency (no multiplications), suitability for hardware implementation.
    *   **Disadvantage:** Potentially more ringing artifacts due to sharp basis function transitions.

5.  **Calculation (Conceptual):** If you have an $8 \times 8$ image and you want to apply the 2D Walsh-Hadamard Transform, how many Walsh functions of order 8 would be involved in representing the image in the transform domain?
    **Answer:** The transform domain representation is also $8 \times 8$. So, 64 Walsh coefficients.

---

## 9. Important Points to Remember

*   **Walsh Transform Basics:** Uses +1/-1 valued Walsh functions as basis, sequency as the analog of frequency.
*   **Computational Efficiency:** Extremely fast due to only additions/subtractions (FWHT algorithm).
*   **Energy Compaction:** Concentrates image energy, suitable for compression.
*   **Hardware Friendly:** Simple arithmetic operations make it ideal for hardware.
*   **Sequency Domain:** Filtering and analysis are performed in the sequency domain.
*   **Artifacts:** Sharp basis functions can lead to more ringing artifacts than DFT in certain applications.
*   **Hadamard Matrices:** Key to the efficient computation of the Walsh-Hadamard Transform.

---

This comprehensive study note covers the Walsh transform, its properties, applications, and comparisons with DFT, aligning with the provided learning and course outcomes. The content is drawn from general knowledge of digital image processing principles as typically found in the referenced textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
