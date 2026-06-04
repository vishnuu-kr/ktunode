---
title: "2D Image transforms: DFT, Properties"
subject: "IMAGE PROCESSING APPLICATIONS"
module: "Module 2: 2D Image transforms: DFT, Properties"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fef60"
status: "completed"
scrapedAt: "2026-05-23T18:01:12.088Z"
---
# Image Processing Applications - Module 2: 2D Image Transforms: DFT, Properties

## Introduction to 2D Image Transforms

Image transforms are fundamental tools in image processing that convert an image from its spatial domain to a different domain, often called the frequency domain. This transformation can reveal important information about the image that might not be apparent in the spatial domain, such as periodic patterns, noise characteristics, and overall image structure. By analyzing and manipulating the image in the frequency domain, we can perform various operations like filtering, compression, and feature extraction more efficiently.

This module focuses on the **2D Discrete Fourier Transform (DFT)**, a cornerstone of digital signal and image processing, and its important properties.

**Key Concepts:**

*   **Spatial Domain:** The domain where an image is represented by pixel intensity values at specific spatial coordinates (x, y).
*   **Frequency Domain:** The domain where an image is represented by its frequency components, indicating the rate of change of pixel intensity.
*   **Transform:** A mathematical operation that converts data from one domain to another.

**Textbook References:**

*   **Gonzalez & Woods (2009):** Chapters 3 (Image Fundamentals) and Chapter 7 (Image Enhancement in the Frequency Domain) provide foundational concepts and introduce frequency domain techniques.
*   **Jayaraman et al. (2015):** Chapters 4 (Image Transforms) and Chapter 6 (Image Enhancement in Frequency Domain) cover the theoretical aspects of transforms.

**Course Outcome Alignment:**

*   **CO2:** Analyze the various concepts and mathematical transforms necessary for image processing. This module directly addresses this by delving into the DFT.

---

## 2D Discrete Fourier Transform (DFT)

The 2D DFT is a powerful tool for analyzing and manipulating images in the frequency domain. It decomposes an image into a sum of complex exponentials of different frequencies and orientations.

### Definition of 2D DFT

For an $M \times N$ image $f(x, y)$, its 2D DFT, denoted by $F(u, v)$, is given by:

$F(u, v) = \sum_{x=0}^{M-1} \sum_{y=0}^{N-1} f(x, y) e^{-j2\pi(\frac{ux}{M} + \frac{vy}{N})}$

where:
*   $f(x, y)$ is the pixel intensity at spatial coordinates $(x, y)$.
*   $F(u, v)$ is the complex-valued transform coefficient at frequency coordinates $(u, v)$.
*   $u$ and $v$ are the frequency variables, ranging from $0$ to $M-1$ and $0$ to $N-1$ respectively.
*   $j$ is the imaginary unit ($j^2 = -1$).
*   $M$ and $N$ are the dimensions of the image along the x and y axes, respectively.

### Definition of 2D Inverse DFT (IDFT)

The original image $f(x, y)$ can be reconstructed from its DFT $F(u, v)$ using the 2D Inverse DFT:

$f(x, y) = \frac{1}{MN} \sum_{u=0}^{M-1} \sum_{v=0}^{N-1} F(u, v) e^{j2\pi(\frac{ux}{M} + \frac{vy}{N})}$

### Interpretation of DFT Coefficients

*   **Low Frequency Components (near (0,0)):** Represent the slowly varying intensity regions of the image, essentially the "average" intensity. These correspond to the smooth areas of the image.
*   **High Frequency Components (further from (0,0)):** Represent the rapidly varying intensity regions, such as edges, fine details, and noise.
*   **Magnitude Spectrum:** $|F(u, v)|$ represents the strength of each frequency component. It's often displayed as an image where the center represents low frequencies.
*   **Phase Spectrum:** $\angle F(u, v)$ represents the phase shift of each frequency component. While the magnitude spectrum conveys information about *how much* of a frequency is present, the phase spectrum conveys information about *where* that frequency occurs.

**Important Point:** The DFT is a linear transform, meaning that the transform of a sum of images is the sum of their transforms.

**Textbook References:**

*   **Gonzalez & Woods (2009):** Chapter 7.1 (The 2D Discrete Fourier Transform) provides the definitions and initial interpretations.
*   **Jayaraman et al. (2015):** Chapter 4.1 (Two-Dimensional Discrete Fourier Transform) covers the mathematical formulation.

---

## Properties of the 2D DFT

The properties of the 2D DFT make it a powerful tool for image processing. Understanding these properties allows us to perform operations efficiently and predictably.

### 1. Separability

The 2D DFT can be computed by performing two 1D DFTs sequentially. This is a crucial property for efficient computation.

*   **Property:** $F(u, v) = \sum_{x=0}^{M-1} \left[ \sum_{y=0}^{N-1} f(x, y) e^{-j2\pi \frac{vy}{N}} \right] e^{-j2\pi \frac{ux}{M}}$
    *   The inner summation is a 1D DFT along each row.
    *   The outer summation is a 1D DFT along the results of the row DFTs.

*   **Equivalently:** $F(u, v) = \sum_{y=0}^{N-1} \left[ \sum_{x=0}^{M-1} f(x, y) e^{-j2\pi \frac{ux}{M}} \right] e^{-j2\pi \frac{vy}{N}}$
    *   The inner summation is a 1D DFT along each column.
    *   The outer summation is a 1D DFT along the results of the column DFTs.

**Example:** To compute the 2D DFT of an $M \times N$ image, we can first compute the 1D DFT for each of the $M$ rows, resulting in an $M \times N$ intermediate result. Then, we compute the 1D DFT for each of the $N$ columns of this intermediate result to obtain the final $F(u, v)$. This significantly reduces computational complexity compared to a direct 2D computation.

**Importance:** This property forms the basis for fast algorithms like the Fast Fourier Transform (FFT).

**Textbook References:**

*   **Gonzalez & Woods (2009):** Chapter 7.1.1 (Separability)
*   **Jayaraman et al. (2015):** Chapter 4.1.1 (Separability of 2D DFT)

### 2. Periodicity

The DFT and IDFT are periodic in both $u$ and $v$ with periods $M$ and $N$, respectively.

*   **Property:** $F(u+M, v) = F(u, v)$ and $F(u, v+N) = F(u, v)$
*   **Property:** $f(x+M, y) = f(x, y)$ and $f(x, y+N) = f(x, y)$

**Explanation:** This means that the frequency domain representation repeats itself every $M$ units in $u$ and every $N$ units in $v$. When we compute the DFT, we are essentially sampling these periodic functions.

**Visualization:** When displaying the magnitude spectrum, we often shift the zero-frequency component to the center of the image for better visualization of frequency distribution.

**Textbook References:**

*   **Gonzalez & Woods (2009):** Chapter 7.1.1 (Periodicity)
*   **Jayaraman et al. (2015):** Chapter 4.1.2 (Periodicity)

### 3. Symmetry

For a real-valued image $f(x, y)$, its DFT exhibits conjugate symmetry.

*   **Property:** $F(u, v) = F^*(M-u, N-v)$
    where $F^*(u, v)$ is the complex conjugate of $F(u, v)$.

**Explanation:** This property implies that the magnitude spectrum is symmetric: $|F(u, v)| = |F(M-u, N-v)|$. The phase spectrum is anti-symmetric: $\angle F(u, v) = -\angle F(M-u, N-v)$. This symmetry reduces the amount of unique information we need to store for the DFT of a real image.

**Textbook References:**

*   **Gonzalez & Woods (2009):** Chapter 7.1.1 (Symmetry)
*   **Jayaraman et al. (2015):** Chapter 4.1.3 (Symmetry)

### 4. Translational Property

Shifting an image in the spatial domain by $(x_0, y_0)$ results in a phase shift in the frequency domain.

*   **Property:** If $g(x, y) = f(x-x_0, y-y_0)$, then its DFT is $G(u, v) = F(u, v) e^{-j2\pi(\frac{ux_0}{M} + \frac{vy_0}{N})}$.

**Explanation:** This means that the magnitude spectrum $|G(u, v)| = |F(u, v)|$ remains unchanged, but the phase spectrum $\angle G(u, v) = \angle F(u, v) - 2\pi(\frac{ux_0}{M} + \frac{vy_0}{N})$ is shifted. This property is important for applications where the location of features is important.

**Textbook References:**

*   **Gonzalez & Woods (2009):** Chapter 7.1.2 (Translation)
*   **Jayaraman et al. (2015):** Chapter 4.1.4 (Translation Property)

### 5. Rotational Property

Rotating an image in the spatial domain by an angle $\theta$ results in the same rotation in the frequency domain.

*   **Property:** If $g(x, y)$ is obtained by rotating $f(x, y)$ by $\theta$, then $G(u, v)$ is obtained by rotating $F(u, v)$ by the same angle $\theta$.

**Explanation:** This is a very intuitive property. If an image has certain patterns at particular orientations, these patterns will appear at the same orientations in the frequency domain.

**Textbook References:**

*   **Gonzalez & Woods (2009):** Chapter 7.1.2 (Rotation)
*   **Jayaraman et al. (2015):** Chapter 4.1.5 (Rotation Property)

### 6. Scaling Property

Scaling an image in the spatial domain affects its representation in the frequency domain.

*   **Property:** If $g(x, y) = f(ax, ay)$, then $G(u, v) = \frac{1}{|a|^2} F(\frac{u}{a}, \frac{v}{a})$. (Note: This is for continuous Fourier Transforms. For discrete, it's more complex and often involves interpolation.)

**Explanation:** Scaling an image in the spatial domain causes a reciprocal scaling in the frequency domain. For instance, a zoomed-out image (scaled down spatially) will have its frequency components spread out more in the frequency domain, and vice versa.

**Textbook References:**

*   **Gonzalez & Woods (2009):** Chapter 7.1.2 (Scaling) - *Note: This property is more formally presented for the continuous Fourier Transform, but the concept carries over.*
*   **Jayaraman et al. (2015):** Chapter 4.1.6 (Scaling Property) - *Similar note as above.*

### 7. Convolution Property

Convolution in the spatial domain is equivalent to element-wise multiplication in the frequency domain, and vice versa.

*   **Property:** $f(x, y) * h(x, y) \Leftrightarrow F(u, v) \cdot H(u, v)$
    where $*$ denotes convolution.

**Explanation:** This is arguably the most important property for image processing, especially for filtering. It states that convolving an image with a kernel (e.g., for blurring or sharpening) is equivalent to multiplying the image's DFT with the DFT of the kernel. This can be computationally more efficient for large kernels.

**Example:** Gaussian blurring can be implemented by multiplying the image's DFT with the DFT of a Gaussian kernel.

**Textbook References:**

*   **Gonzalez & Woods (2009):** Chapter 7.1.2 (Convolution and Correlation)
*   **Jayaraman et al. (2015):** Chapter 4.1.7 (Convolution Property)

### 8. Correlation Property

Correlation in the spatial domain is equivalent to element-wise multiplication of one DFT with the conjugate of the other in the frequency domain.

*   **Property:** $f(x, y) \star h(x, y) \Leftrightarrow F(u, v) \cdot H^*(u, v)$
    where $\star$ denotes correlation.

**Explanation:** This property is fundamental for template matching and pattern recognition. By correlating an image with a template in the frequency domain, we can efficiently find occurrences of the template within the image.

**Textbook References:**

*   **Gonzalez & Woods (2009):** Chapter 7.1.2 (Convolution and Correlation)
*   **Jayaraman et al. (2015):** Chapter 4.1.8 (Correlation Property)

### 9. Average Value

The DC component (average value) of the image is located at $F(0, 0)$.

*   **Property:** $F(0, 0) = \sum_{x=0}^{M-1} \sum_{y=0}^{N-1} f(x, y)$.
    The average intensity of the image is $f_{avg} = \frac{1}{MN} F(0, 0)$.

**Explanation:** This term represents the "blackest" or "brightest" component of the image, indicating the overall intensity level.

**Textbook References:**

*   **Gonzalez & Woods (2009):** Chapter 7.1.1 (Average Value)
*   **Jayaraman et al. (2015):** Chapter 4.1.9 (Average Value)

---

## Visualizing the DFT

The output of the 2D DFT is a complex matrix $F(u, v)$. For visualization, we typically display:

1.  **Magnitude Spectrum:** $|F(u, v)|$. This shows the distribution of energy across different frequencies. To visualize the high-energy low-frequency components clearly, the magnitude spectrum is often scaled logarithmically: $log(1 + |F(u, v)|)$.
2.  **Phase Spectrum:** $\angle F(u, v)$. This is harder to visualize directly and often contributes less to our immediate understanding of an image's frequency content compared to the magnitude.
3.  **Log-Transformed Magnitude Spectrum:** $log(1 + |F(u, v)|)$. This is the most common way to visualize the DFT magnitude, as it compresses the large range of values and makes fainter high-frequency components visible.

**Shifting the DFT:** For visualization, it's common to shift the zero-frequency component $F(0, 0)$ to the center of the spectrum. This is achieved by multiplying $F(u, v)$ by $(-1)^{u+v}$. The inverse shift is then applied when performing frequency domain operations.

$F_{shifted}(u, v) = F(u, v) \cdot (-1)^{u+v}$

**Textbook References:**

*   **Gonzalez & Woods (2009):** Chapter 7.1.3 (The DFT: Spatial and Frequency Centering)
*   **Jayaraman et al. (2015):** Chapter 4.2 (Visualization of the DFT)

---

## Examples and Applications of DFT Properties

### Edge Detection using DFT

High-frequency components in the DFT correspond to edges and sharp transitions in an image. By amplifying these high-frequency components, we can enhance edges.

*   **Method:** Multiply the image's DFT by a high-pass filter in the frequency domain.
*   **Example:** A simple high-pass filter could be one that amplifies frequencies away from the center $(0,0)$.

**Course Outcome Alignment:**

*   **CO3:** Illustrate the various schemes of image filtering. This is a direct application of frequency domain filtering.
*   **CO2:** Analyze the various concepts and mathematical transforms necessary for image processing. Understanding how DFT relates to edges is part of this analysis.

### Image Noise Reduction using DFT

Most random noise tends to be spread across a wide range of frequencies. Low-pass filtering in the frequency domain can attenuate these noise frequencies.

*   **Method:** Multiply the image's DFT by a low-pass filter (e.g., a Gaussian or Butterworth low-pass filter).
*   **Example:** Applying a low-pass filter will smooth out fine details and noise, but it might also blur edges.

**Course Outcome Alignment:**

*   **CO3:** Illustrate the various schemes of image filtering.
*   **CO2:** Analyze the various concepts and mathematical transforms necessary for image processing.

### Image Compression

By analyzing the DFT coefficients, we can identify less significant frequency components that can be quantized or discarded with minimal visual impact, leading to compression.

*   **Method:** Transform the image to the frequency domain, quantize coefficients (setting small values to zero), and then apply the inverse transform.
*   **Example:** JPEG compression uses a related transform (Discrete Cosine Transform - DCT) which is closely related to the DFT.

**Course Outcome Alignment:**

*   **CO2:** Analyze the various concepts and mathematical transforms necessary for image processing.

---

## Practice Questions and Answers

**Question 1:**
What is the primary advantage of using the separability property of the 2D DFT?
(a) It makes the DFT computation more complex.
(b) It allows for efficient computation by reducing it to 1D DFTs.
(c) It changes the symmetry of the DFT.
(d) It guarantees that all frequency components are preserved.

**Answer:** (b) It allows for efficient computation by reducing it to 1D DFTs.

---

**Question 2:**
For a real-valued image $f(x, y)$, what is the relationship between $F(u, v)$ and $F(M-u, N-v)$?
(a) $F(u, v) = F^*(M-u, N-v)$ (Conjugate Symmetry)
(b) $F(u, v) = F(M-u, N-v)$ (Symmetry)
(c) $F(u, v) = -F^*(M-u, N-v)$
(d) $F(u, v) = -F(M-u, N-v)$

**Answer:** (a) $F(u, v) = F^*(M-u, N-v)$ (Conjugate Symmetry)

---

**Question 3:**
Shifting an image in the spatial domain by $(x_0, y_0)$ affects which part of its DFT?
(a) Magnitude spectrum only
(b) Phase spectrum only
(c) Both magnitude and phase spectrum equally
(d) Neither magnitude nor phase spectrum

**Answer:** (b) Phase spectrum only

---

**Question 4:**
The convolution of two images in the spatial domain is equivalent to what operation in the frequency domain?
(a) Convolution
(b) Correlation
(c) Element-wise multiplication
(d) Element-wise addition

**Answer:** (c) Element-wise multiplication

---

**Question 5 (Conceptual):**
An image contains a strong horizontal line. How would this typically manifest in its shifted magnitude spectrum (with the DC component at the center)?

**Answer:** A strong horizontal line in the spatial domain corresponds to a specific frequency component. In the shifted magnitude spectrum, this would appear as a bright spot or line perpendicular to the direction of the spatial feature. For a horizontal line, it would manifest as a strong vertical line or band in the magnitude spectrum, centered at the horizontal axis and away from the DC component. This is because horizontal lines represent rapid changes in the vertical direction, which correspond to high frequencies along the vertical axis (v-axis) in the DFT.

---

**Question 6 (Application):**
If you wanted to remove a specific periodic noise pattern (e.g., a grid-like noise) from an image using the DFT, what approach would you take in the frequency domain?

**Answer:**
1.  Compute the 2D DFT of the noisy image.
2.  Visualize the magnitude spectrum. Periodic noise patterns typically appear as distinct bright spots or spikes in the frequency domain, often symmetrically placed around the DC component.
3.  Identify the frequency components corresponding to the noise pattern.
4.  "Notch" or remove these specific frequency components. This can be done by creating a filter that has zeros at the locations of the noise spikes and ones elsewhere.
5.  Multiply the image's DFT by this notch filter.
6.  Compute the Inverse DFT to obtain the denoised image.

**Course Outcome Alignment:**

*   **CO3:** Illustrate the various schemes of image filtering. (Notch filtering is a type of frequency domain filtering).
*   **CO2:** Analyze the various concepts and mathematical transforms necessary for image processing.

---

## Important Points to Remember

*   **DFT decomposes an image into sinusoidal components.**
*   **The low-frequency components (near the center) represent the smooth areas of the image, while high-frequency components represent edges and details.**
*   **Separability is key to efficient computation (leading to FFT).**
*   **Symmetry of the DFT for real images is crucial.**
*   **Convolution in the spatial domain equals multiplication in the frequency domain.**
*   **Shifting the image shifts the phase of its DFT, not the magnitude.**
*   **The magnitude spectrum is often displayed on a logarithmic scale and centered for better visualization.**
*   **The DFT is a fundamental tool for various image processing tasks like filtering, compression, and feature analysis.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## Further Reading and References

*   **Gonzalez & Woods (2009):** Chapter 7 (Image Enhancement in the Frequency Domain) is highly recommended for a comprehensive understanding of DFT applications.
*   **Jayaraman et al. (2015):** Chapter 4 (Image Transforms) and Chapter 6 (Image Enhancement in Frequency Domain) provide excellent theoretical coverage.
*   **Castleman (2003):** Chapters related to Fourier Transforms and frequency domain analysis.
*   **Jain (1988):** Chapters on Fourier descriptors and transforms.
*   **Pratt (2007):** Chapters on frequency domain methods and transforms.

This module provides the foundational understanding of the 2D DFT and its properties, which are essential for many advanced image processing techniques. Mastering these concepts will allow you to effectively analyze and manipulate images in both the spatial and frequency domains, aligning with CO2 and enabling the understanding of CO3 and CO4.