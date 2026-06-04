---
title: "Walsh transform"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff504"
status: "completed"
scrapedAt: "2026-05-23T18:06:34.699Z"
---
# DIGITAL IMAGE PROCESSING

## Module 2: 2D Image Transforms

### Topic: Walsh Transform

---

### 1. Introduction to Walsh Transform

The Walsh transform is a class of orthogonal, non-sinusoidal transforms that are computationally efficient and have found applications in various fields, including digital image processing. Unlike the Discrete Fourier Transform (DFT) which uses sinusoidal basis functions, the Walsh transform utilizes a set of rectangular or square wave functions called Walsh functions.

**Key Concepts:**

*   **Orthogonal Transform:** A transform where the basis functions are orthogonal to each other. This property simplifies many signal processing operations.
*   **Walsh Functions:** These functions take only two values, +1 and -1. They are also known as Walsh-sequency functions.
*   **Walsh-sequency:** Analogous to frequency in the Fourier transform, Walsh-sequency measures the average rate of zero crossings (sign changes) of a Walsh function.

**Learning Outcome Alignment:**

*   This section introduces a fundamental transform used in image processing, contributing to **CO2: Analyze the various concepts and mathematical transforms necessary for image processing (K3)**.

---

### 2. Walsh Functions and Walsh-Sequency

The Walsh functions are constructed based on the Hadamard matrix.

**Hadamard Matrix:**
A square matrix of order $2^n$ whose entries are +1 or -1 and whose rows (and columns) are mutually orthogonal. The simplest Hadamard matrix is of order 2:

$H_2 = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$

Higher order Hadamard matrices can be constructed recursively:

$H_{2N} = \begin{bmatrix} H_N & H_N \\ H_N & -H_N \end{bmatrix}$

**Walsh Functions:**
The rows of a Hadamard matrix are the Walsh functions. The ordering of these functions depends on the desired sequency ordering. Common orderings include:

*   **Natural Order (Hadamard Order):** The order of the rows in the recursive construction.
*   **Sequency Order (Walsh Order):** The rows are reordered based on the number of zero crossings (sign changes) in the Walsh functions. This ordering is often preferred for signal processing applications as it resembles the frequency ordering in Fourier transforms.

**Example: Walsh Functions of Order 4 (Sequency Ordered)**

$W(0, t) = +1$ (Sequency 0)
$W(1, t) = \begin{cases} 1 & 0 \le t < 1/2 \\ -1 & 1/2 \le t < 1 \end{cases}$ (Sequency 1)
$W(2, t) = \begin{cases} 1 & 0 \le t < 1/4 \\ -1 & 1/4 \le t < 1/2 \\ -1 & 1/2 \le t < 3/4 \\ 1 & 3/4 \le t < 1 \end{cases}$ (Sequency 2)
$W(3, t) = \begin{cases} 1 & 0 \le t < 1/4 \\ -1 & 1/4 \le t < 1/2 \\ 1 & 1/2 \le t < 3/4 \\ -1 & 3/4 \le t < 1 \end{cases}$ (Sequency 3)

**Important Note:** The Walsh functions are defined over a specific interval, typically [0, 1) or a discrete set of samples.

**Textbook Reference:**
*   Gonzalez & Woods (4th Ed.): May discuss orthogonal transforms and their properties, likely mentioning the concept of sequency.
*   Jayaraman, Esakkirajan, Veerakumar (1st Ed.): Might provide a more detailed introduction to Walsh functions and their construction.

**Learning Outcome Alignment:**

*   Understanding the nature of Walsh functions and their ordering is crucial for analyzing their properties and applications, supporting **CO2: Analyze the various concepts and mathematical transforms necessary for image processing (K3)**.

---

### 3. 1D Walsh Transform

The one-dimensional Walsh transform of a discrete signal $f(x)$ of length $N$ (where $N$ is a power of 2) is given by:

$W(u) = \frac{1}{N} \sum_{x=0}^{N-1} f(x) \text{wal}(u, x)$

where:
*   $W(u)$ is the Walsh transform coefficient at sequency $u$.
*   $f(x)$ is the input signal.
*   $\text{wal}(u, x)$ is the Walsh function of sequency $u$ at position $x$.
*   $N$ is the number of samples.

The inverse Walsh transform is given by:

$f(x) = \sum_{u=0}^{N-1} W(u) \text{wal}(u, x)$

**Key Properties of Walsh Transform:**

*   **Orthogonality:** $\sum_{x=0}^{N-1} \text{wal}(u, x) \text{wal}(v, x) = \begin{cases} N & \text{if } u=v \\ 0 & \text{if } u \ne v \end{cases}$
*   **Completeness:** The set of Walsh functions is complete.
*   **Energy Preservation:** The transform preserves the energy of the signal.
*   **Real and Symmetric:** The Walsh transform coefficients and basis functions are real.
*   **Computational Efficiency:** The Fast Walsh Transform (FWT) algorithm exists, similar to the Fast Fourier Transform (FFT), with a complexity of $O(N \log N)$.

**Example (1D):**
Let $f(x) = [1, 2, 3, 4]$ ($N=4$). We need the Walsh functions of order 4 (sequency ordered).

$H_4 = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 \\ 1 & -1 & -1 & 1 \end{bmatrix}$

The sequency ordered Walsh functions $\text{wal}(u, x)$ are:
$\text{wal}(0, x) = [1, 1, 1, 1]$
$\text{wal}(1, x) = [1, -1, 1, -1]$
$\text{wal}(2, x) = [1, 1, -1, -1]$
$\text{wal}(3, x) = [1, -1, -1, 1]$

**Calculating W(u):**

$W(0) = \frac{1}{4} \sum_{x=0}^{3} f(x) \text{wal}(0, x) = \frac{1}{4} (1 \cdot 1 + 2 \cdot 1 + 3 \cdot 1 + 4 \cdot 1) = \frac{1}{4} (10) = 2.5$
$W(1) = \frac{1}{4} \sum_{x=0}^{3} f(x) \text{wal}(1, x) = \frac{1}{4} (1 \cdot 1 + 2 \cdot (-1) + 3 \cdot 1 + 4 \cdot (-1)) = \frac{1}{4} (1 - 2 + 3 - 4) = \frac{1}{4} (-2) = -0.5$
$W(2) = \frac{1}{4} \sum_{x=0}^{3} f(x) \text{wal}(2, x) = \frac{1}{4} (1 \cdot 1 + 2 \cdot 1 + 3 \cdot (-1) + 4 \cdot (-1)) = \frac{1}{4} (1 + 2 - 3 - 4) = \frac{1}{4} (-4) = -1.0$
$W(3) = \frac{1}{4} \sum_{x=0}^{3} f(x) \text{wal}(3, x) = \frac{1}{4} (1 \cdot 1 + 2 \cdot (-1) + 3 \cdot (-1) + 4 \cdot 1) = \frac{1}{4} (1 - 2 - 3 + 4) = \frac{1}{4} (0) = 0.0$

So, $W(u) = [2.5, -0.5, -1.0, 0.0]$

**Textbook Reference:**
*   Castleman (2/e): Might have detailed explanations of the Walsh transform and its properties.
*   Jain (1988): A foundational text that would likely cover the mathematical basis of orthogonal transforms like Walsh.

**Learning Outcome Alignment:**

*   This section delves into the mathematical definition and properties of the 1D Walsh transform, directly contributing to **CO2: Analyze the various concepts and mathematical transforms necessary for image processing (K3)**.

---

### 4. 2D Walsh Transform

The 2D Walsh transform is a separable transform, meaning it can be computed by applying the 1D Walsh transform sequentially to the rows and then to the columns (or vice versa) of an image. For an $M \times N$ image $f(x, y)$, the 2D Walsh transform is given by:

$W(u, v) = \frac{1}{MN} \sum_{x=0}^{M-1} \sum_{y=0}^{N-1} f(x, y) \text{wal}(u, x) \text{wal}(v, y)$

where:
*   $W(u, v)$ is the 2D Walsh transform coefficient at sequency $(u, v)$.
*   $f(x, y)$ is the input image.
*   $\text{wal}(u, x)$ and $\text{wal}(v, y)$ are the 1D Walsh functions.
*   $M$ and $N$ are the dimensions of the image. For efficient computation, $M$ and $N$ are typically powers of 2.

The inverse 2D Walsh transform is:

$f(x, y) = \sum_{u=0}^{M-1} \sum_{v=0}^{N-1} W(u, v) \text{wal}(u, x) \text{wal}(v, y)$

**Computational Aspects:**

*   If $M=N=2^n$, the 2D Walsh Transform can be computed using the Fast Walsh Transform (FWT) algorithm. The complexity is $O(N^2 \log N)$ or $O(M N \log(MN))$.
*   The computation involves applying the 1D FWT to each row, and then applying the 1D FWT to each column of the resulting matrix.

**Example (2D - Conceptual):**
Consider a $2 \times 2$ image:
$f(x, y) = \begin{bmatrix} f(0,0) & f(0,1) \\ f(1,0) & f(1,1) \end{bmatrix}$

And the Walsh functions of order 2 (sequency ordered):
$\text{wal}(0, x) = [1, 1]$
$\text{wal}(1, x) = [1, -1]$
$\text{wal}(0, y) = [1, 1]$
$\text{wal}(1, y) = [1, -1]$

The Walsh transform matrix of order 2 is $H_2 = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$.

The 2D Walsh transform $W(u, v)$ can be computed as:
$W = \frac{1}{4} H_2 f H_2^T$
where $H_2^T$ is the transpose of $H_2$, which is equal to $H_2$ itself since it's symmetric.

$W(0,0) = \frac{1}{4} [ (1, 1) \begin{bmatrix} f(0,0) & f(0,1) \\ f(1,0) & f(1,1) \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} ]$

This involves matrix multiplications and can be broken down as:
$W(0,0) = \frac{1}{4} (f(0,0) + f(0,1) + f(1,0) + f(1,1))$  (Average value)
$W(0,1) = \frac{1}{4} (f(0,0) - f(0,1) + f(1,0) - f(1,1))$
$W(1,0) = \frac{1}{4} (f(0,0) + f(0,1) - f(1,0) - f(1,1))$
$W(1,1) = \frac{1}{4} (f(0,0) - f(0,1) - f(1,0) + f(1,1))$

**Textbook Reference:**
*   Gonzalez & Woods (4th Ed.): Will likely cover 2D transforms, including separable transforms and their computational aspects.
*   Pratt (4th Ed.): A comprehensive text that would offer detailed coverage of various transforms and their 2D implementations.

**Learning Outcome Alignment:**

*   This section explains the extension of the Walsh transform to 2D images, crucial for image processing tasks, thus supporting **CO2: Analyze the various concepts and mathematical transforms necessary for image processing (K3)**.

---

### 5. Applications of Walsh Transform in Image Processing

The Walsh transform, due to its computational efficiency and ability to capture different types of signal variations, has several applications in image processing.

**Key Applications:**

*   **Image Compression:**
    *   The Walsh transform, like the DFT or DCT, can decorrelate image data.
    *   Many Walsh transform coefficients are small, especially those corresponding to higher Walsh-sequencies.
    *   By quantizing or discarding these small coefficients, significant compression can be achieved.
    *   The fast computation of FWT makes it attractive for real-time compression.
    *   **Reference:** Gonzalez & Woods might discuss transform coding for compression, including Walsh as an example.
    *   **CO3 Alignment:** Directly addresses **CO3: Illustrate the various schemes of image compression (K3)**.

*   **Image Filtering and Feature Extraction:**
    *   The transform domain coefficients can be manipulated to filter images. For example, high-sequency coefficients can be suppressed to achieve low-pass filtering.
    *   Certain Walsh coefficients can be sensitive to specific patterns or edges in the image, making them useful for feature extraction.
    *   **Reference:** Jayaraman et al. might cover filtering in transform domains.
    *   **CO4 Alignment:** Supports **CO4: Analyze the filtering and restoration of images (K3)**.

*   **Pattern Recognition:**
    *   The distribution of Walsh transform coefficients can serve as a signature for different patterns.
    *   Comparing the Walsh transform of a test image with stored patterns can be used for recognition.
    *   **CO2 Alignment:** Contributes to **CO2: Analyze the various concepts and mathematical transforms necessary for image processing (K3)**.

*   **Image Watermarking:**
    *   Walsh coefficients can be modified to embed hidden information (watermarks) within an image.
    *   The robustness of the transform to certain distortions is a key factor.

**Comparison with DFT/DCT:**

*   **Computational Cost:** Walsh transform is generally faster than DFT, especially without the need for complex arithmetic.
*   **Basis Functions:** Walsh functions are simpler (rectangular) compared to sinusoidal functions. This can lead to different spectral characteristics.
*   **Energy Compaction:** For typical image data, DCT often provides better energy compaction than Walsh transform, leading to higher compression ratios. However, Walsh transform can be competitive for certain types of data.

**Learning Outcome Alignment:**

*   This section explicitly discusses how the Walsh transform is used in image processing, directly supporting **CO2, CO3, and CO4** at the K3 knowledge level. It also implicitly relates to **CO1** by illustrating a component of an image processing system (a transform).

---

### 6. Advantages and Disadvantages of Walsh Transform

**Advantages:**

*   **Computational Efficiency:** Fast Walsh Transform (FWT) algorithms exist with $O(N \log N)$ complexity for 1D and $O(N^2 \log N)$ for 2D, which is generally faster than DFT/FFT due to simpler arithmetic operations (only additions and subtractions).
*   **Real Arithmetic:** The transform and its inverse involve only real numbers, simplifying hardware implementation and avoiding complex arithmetic units.
*   **Good for Specific Data:** It can be effective for signals that have abrupt changes or square-wave-like characteristics.
*   **Orthogonality:** Guarantees signal representation without redundancy.

**Disadvantages:**

*   **Energy Compaction:** For natural images, the Walsh transform generally exhibits poorer energy compaction compared to the Discrete Cosine Transform (DCT). This means that the energy of the image is spread across more coefficients, making it less efficient for compression compared to DCT.
*   **Basis Functions:** The rectangular nature of Walsh functions can lead to blocky artifacts when representing smooth transitions in images, especially after aggressive quantization in compression.
*   **Less Intuitive:** The concept of sequency is less intuitive than frequency for many signal processing practitioners.
*   **Limited Sensitivity to Smooth Variations:** While good at capturing sharp changes, it might not be as sensitive to subtle, smooth variations as sinusoidal transforms.

**Textbook Reference:**
*   All reference books (Castleman, Jain, Pratt) and primary textbooks (Gonzalez & Woods, Jayaraman et al.) will likely discuss the trade-offs and properties of different transforms.

**Important Points to Remember:**

*   The primary advantage of the Walsh transform is its computational speed and simplicity of arithmetic.
*   Its main drawback for image compression is typically lower energy compaction compared to DCT.

**Learning Outcome Alignment:**

*   This section provides a balanced view of the Walsh transform, aiding in the analytical understanding required for **CO2**.

---

### 7. Practice Questions and Answers

**Question 1:** What is the primary advantage of the Walsh transform over the DFT in terms of computation?
**Answer:** The Walsh transform uses only additions and subtractions, making its Fast Walsh Transform (FWT) computationally faster than the Fast Fourier Transform (FFT) which requires multiplications and complex arithmetic.

**Question 2:** Define Walsh-sequency. How is it analogous to frequency in the Fourier Transform?
**Answer:** Walsh-sequency is a measure of the average rate of sign changes (zero crossings) of a Walsh function. It is analogous to frequency in the Fourier Transform, which measures the rate of oscillation of sinusoidal basis functions.

**Question 3:** If an image has smooth intensity variations, which transform is generally expected to provide better energy compaction: Walsh transform or DCT? Briefly explain why.
**Answer:** DCT is generally expected to provide better energy compaction for images with smooth intensity variations. This is because the sinusoidal basis functions of DCT are better suited to represent smooth changes, leading to most of the image energy being concentrated in a few low-frequency coefficients. Walsh functions, being piecewise constant, might spread the energy more across coefficients for such data.

**Question 4:** How can the 2D Walsh transform be computed efficiently from its 1D counterpart?
**Answer:** The 2D Walsh transform is separable. It can be computed by applying the 1D Walsh transform to each row of the image and then applying the 1D Walsh transform to each column of the resulting matrix (or vice versa).

**Question 5:** List two applications of the Walsh transform in digital image processing.
**Answer:**
1.  Image Compression (by exploiting the decorrelation and quantizing coefficients).
2.  Image Filtering (by manipulating coefficients in the transform domain).

**Question 6:** The Walsh transform uses which type of basis functions?
    a) Sinusoidal
    b) Rectangular or Square Waves
    c) Exponential
    d) Complex exponentials
**Answer:** b) Rectangular or Square Waves

**Learning Outcome Alignment:**

*   These questions cover the fundamental concepts, properties, and applications of the Walsh transform, testing understanding at the K2 and K3 levels for **CO1, CO2, CO3, CO4, CO5**.

---

### 8. Important Points to Remember

*   **Walsh functions are orthogonal and piecewise constant.**
*   **Walsh-sequency is the key parameter, measuring sign changes.**
*   **The Fast Walsh Transform (FWT) is computationally efficient.**
*   **The 2D Walsh transform is separable.**
*   **Primary applications include image compression and filtering.**
*   **DCT generally offers better energy compaction for natural images compared to Walsh transform.**
*   **Walsh transform uses only real arithmetic, simplifying implementation.**

---

### 9. Conclusion

The Walsh transform is a valuable tool in digital image processing, particularly when computational speed and real-number arithmetic are paramount. While it may not always achieve the same level of energy compaction as the DCT for natural images, its efficiency makes it suitable for applications requiring fast processing, such as real-time image compression or filtering. Understanding its properties and applications allows for informed selection of transforms based on specific task requirements.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
