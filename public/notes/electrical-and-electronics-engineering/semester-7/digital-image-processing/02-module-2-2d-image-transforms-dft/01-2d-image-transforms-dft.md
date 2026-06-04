---
title: "2D Image transforms: DFT"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3691c"
status: "completed"
scrapedAt: "2026-05-23T16:35:05.486Z"
---
# Digital Image Processing: Module 2 - 2D Image Transforms: DFT

## Topic: 2D Image Transforms: Discrete Fourier Transform (DFT)

This module introduces the fundamental concept of the Discrete Fourier Transform (DFT) in the context of 2D digital images. Understanding image transforms is crucial for various image processing tasks like filtering, compression, and analysis.

---

### Learning Outcomes Covered:

*   **Understanding of the 2D DFT:** How it decomposes an image into its frequency components.
*   **Mathematical Formulation:** The equations governing the 2D DFT and its inverse.
*   **Properties of the 2D DFT:** Key characteristics that make it useful.
*   **Applications in Image Processing:** How the DFT is utilized for filtering and analysis.
*   **Relationship to 1D DFT:** Building upon prior knowledge.

---

### Course Outcomes Alignment:

*   **CO1: Understand different components of image processing system (K2):** The DFT is a core mathematical tool used in many image processing systems, particularly in the frequency domain analysis.
*   **CO2: Analyse the various concepts and mathematical transforms necessary for image processing (K3):** This topic directly addresses the analysis of the DFT, a crucial mathematical transform.
*   **CO3: Illustrate the various schemes of image compression (K3):** While not directly covered in this topic, understanding the DFT is a prerequisite for transform coding techniques used in image compression.
*   **CO4: Analyze the filtering and restoration of images (K3):** The DFT is fundamental for frequency-domain filtering, a major topic in image restoration and enhancement.

---

### 1. Introduction to Frequency Domain

**Key Concept:** Images can be represented in the spatial domain (pixel intensities at specific locations) or in the frequency domain (distribution of frequencies present in the image).

*   **Spatial Domain:**
    *   Represents an image as a function of spatial coordinates, $f(x, y)$, where $x$ and $y$ are spatial variables.
    *   Corresponds to the direct representation of pixel values.

*   **Frequency Domain:**
    *   Represents an image by decomposing it into a sum of sinusoidal functions of different frequencies and orientations.
    *   High frequencies correspond to rapid changes in intensity (edges, details).
    *   Low frequencies correspond to gradual changes in intensity (smooth regions).

**Why transform to the frequency domain?**

*   **Analysis:** Identify dominant frequencies and their orientations.
*   **Filtering:** Manipulate specific frequency components (e.g., remove noise, sharpen edges).
*   **Compression:** Represent image data more efficiently by encoding frequency coefficients.

---

### 2. The 1D Discrete Fourier Transform (DFT) - A Recap

**(Refer to Gonzalez & Woods, 4th Ed., Chapter 4: Frequency and Intensity Transformations)**

The 1D DFT transforms a sequence of $N$ samples $f(x)$ into $N$ frequency components $F(u)$.

*   **Forward 1D DFT:**
    $F(u) = \sum_{x=0}^{N-1} f(x) e^{-j2\pi ux/N}$
    where:
    *   $f(x)$: Input sequence (e.g., a row or column of pixels).
    *   $F(u)$: The $u$-th frequency component.
    *   $u$: Frequency index, $u = 0, 1, \dots, N-1$.
    *   $j$: Imaginary unit ($\sqrt{-1}$).
    *   $e^{-j\theta} = \cos(\theta) - j\sin(\theta)$ (Euler's formula).

*   **Inverse 1D DFT:**
    $f(x) = \frac{1}{N} \sum_{u=0}^{N-1} F(u) e^{j2\pi ux/N}$

**Key takeaway:** The DFT breaks down a signal into its constituent sine and cosine waves of different frequencies.

---

### 3. The 2D Discrete Fourier Transform (DFT)

**(Refer to Gonzalez & Woods, 4th Ed., Chapter 4; Jayaraman et al., Chapter 7)**

The 2D DFT extends the concept of the 1D DFT to two dimensions, transforming an $M \times N$ image $f(x, y)$ into an $M \times N$ frequency representation $F(u, v)$.

*   **Forward 2D DFT:**
    $F(u, v) = \sum_{x=0}^{M-1} \sum_{y=0}^{N-1} f(x, y) e^{-j2\pi (ux/M + vy/N)}$
    where:
    *   $f(x, y)$: The input image in the spatial domain, $0 \le x \le M-1$, $0 \le y \le N-1$.
    *   $F(u, v)$: The 2D DFT of $f(x, y)$, representing the frequency content at horizontal frequency $u$ and vertical frequency $v$.
    *   $u$: Horizontal frequency index, $u = 0, 1, \dots, M-1$.
    *   $v$: Vertical frequency index, $v = 0, 1, \dots, N-1$.
    *   $M$: Number of rows in the image.
    *   $N$: Number of columns in the image.

*   **Inverse 2D DFT:**
    $f(x, y) = \frac{1}{MN} \sum_{u=0}^{M-1} \sum_{v=0}^{N-1} F(u, v) e^{j2\pi (ux/M + vy/N)}$

**Interpretation of $F(u, v)$:**

*   $F(u, v)$ is a complex-valued function.
*   **Magnitude:** $|F(u, v)|$ indicates the strength of the frequency component $(u, v)$.
*   **Phase:** $\angle F(u, v)$ indicates the phase shift of the frequency component $(u, v)$.

**Visualization of $F(u, v)$:**

*   The 2D DFT output is often visualized by displaying its magnitude spectrum, $|F(u, v)|$.
*   **Centering the Spectrum:** The low frequencies (especially $F(0,0)$, the DC component) are typically at the corners of the DFT output. To better visualize the spectrum, it's common to shift the origin to the center of the representation. This is achieved by multiplying $f(x, y)$ by $(-1)^{x+y}$ before computing the DFT, or by rearranging the computed $F(u, v)$ symmetrically.
    *   $G(u, v) = (-1)^{u+v} F(u, v)$
    *   The DC component $F(0,0)$ represents the average intensity of the image. It's the strongest component and will appear at the center after shifting.

**Example:**

Consider a simple 2x2 image:
$f(x, y) = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$
where $M=2, N=2$.

Let's compute $F(0,0)$ (DC component):
$F(0,0) = \sum_{x=0}^{1} \sum_{y=0}^{1} f(x, y) e^{-j2\pi (0x/2 + 0y/2)}$
$F(0,0) = \sum_{x=0}^{1} \sum_{y=0}^{1} f(x, y) e^{0}$
$F(0,0) = \sum_{x=0}^{1} \sum_{y=0}^{1} f(x, y) = 1 + 2 + 3 + 4 = 10$.
The DC component is the sum of all pixel values.

---

### 4. Properties of the 2D DFT

**(Refer to Gonzalez & Woods, 4th Ed., Chapter 4; Jayaraman et al., Chapter 7)**

Understanding the properties of the 2D DFT is crucial for its effective application in image processing.

1.  **Separability:**
    *   The 2D DFT can be computed by applying the 1D DFT sequentially to rows and then to columns (or vice-versa). This significantly reduces computational complexity.
    *   $F(u, v) = \sum_{x=0}^{M-1} \left[ \sum_{y=0}^{N-1} f(x, y) e^{-j2\pi vy/N} \right] e^{-j2\pi ux/M}$
    *   The inner summation is the 1D DFT of row $x$. Let this be $G(u, x)$.
    *   $F(u, v) = \sum_{x=0}^{M-1} G(u, x) e^{-j2\pi ux/M}$
    *   This outer summation is the 1D DFT of the results of the row DFTs.
    *   **Importance:** Allows for efficient computation using the Fast Fourier Transform (FFT) algorithm.

2.  **Periodicity:**
    *   The 2D DFT is periodic with periods $M$ in the $u$ direction and $N$ in the $v$ direction.
    *   $F(u, v) = F(u+kM, v) = F(u, v+lN)$ for any integers $k, l$.
    *   This is a consequence of the exponential term $e^{-j2\pi ux/M}$ and $e^{-j2\pi vy/N}$.

3.  **Symmetry:**
    *   If the input image $f(x, y)$ is real, then the DFT coefficients exhibit conjugate symmetry.
    *   $F(u, v) = F^*(M-u, N-v)$ where $F^*$ denotes the complex conjugate.
    *   This means the magnitude spectrum is symmetric: $|F(u, v)| = |F(M-u, N-v)|$.
    *   The phase spectrum is anti-symmetric: $\angle F(u, v) = -\angle F(M-u, N-v)$.

4.  **Rotation Property:**
    *   If $f(x, y)$ is rotated by an angle $\theta$, its DFT $F(u, v)$ is also rotated by the same angle $\theta$.
    *   **Significance:** The magnitude spectrum reveals the dominant orientations in the image. For example, horizontal edges will show up as strong vertical components in the frequency domain, and vertical edges as strong horizontal components.

5.  **Convolution Theorem:**
    *   **(Crucial for Filtering!)** Convolution in the spatial domain is equivalent to element-wise multiplication in the frequency domain, and vice-versa.
    *   Let $h(x, y)$ be the impulse response of a filter and $g(x, y) = f(x, y) * h(x, y)$ (spatial convolution).
    *   Then, $G(u, v) = F(u, v) \cdot H(u, v)$ (frequency domain multiplication), where $H(u, v)$ is the DFT of $h(x, y)$.
    *   **Inverse:** $f(x, y) * h(x, y) \iff F(u, v) \cdot H(u, v)$.
    *   Similarly, $f(x, y) \cdot h(x, y) \iff F(u, v) * H(u, v)$ (scaled by $1/MN$).

6.  **Translation Property:**
    *   Shifting an image $f(x, y)$ by $(x_0, y_0)$ results in its DFT being multiplied by a complex exponential term.
    *   $f(x-x_0, y-y_0) \iff F(u, v) e^{-j2\pi (ux_0/M + vy_0/N)}$
    *   **Significance:** Shifting the image only changes the phase of the DFT, not its magnitude. This is why the magnitude spectrum is often considered for analysis, as it's invariant to spatial shifts.

7.  **Scaling Property:**
    *   Scaling the input image $f(x, y)$ by a factor $a$ (i.e., $f(ax, ay)$) leads to a scaling of the frequency coordinates in the DFT.
    *   $f(ax, ay) \iff \frac{1}{a^2} F(u/a, v/a)$ (requires careful consideration of sampling and interpolation if $a$ is not an integer).
    *   **Significance:** Larger features in the spatial domain correspond to lower frequencies, and smaller features to higher frequencies.

---

### 5. Applications of the 2D DFT in Image Processing

**(Refer to Gonzalez & Woods, 4th Ed., Chapter 4; Jayaraman et al., Chapter 7; Castleman, Chapter 7)**

The DFT is a cornerstone for many image processing tasks.

*   **Image Filtering (Frequency Domain Filtering):**
    *   This is arguably the most direct and important application.
    *   **Process:**
        1.  Compute the 2D DFT of the input image $f(x, y)$ to get $F(u, v)$.
        2.  Define a frequency-domain filter $H(u, v)$.
        3.  Multiply $F(u, v)$ with $H(u, v)$ element-wise: $G(u, v) = F(u, v) \cdot H(u, v)$.
        4.  Compute the inverse 2D DFT of $G(u, v)$ to obtain the filtered image $g(x, y)$.
    *   **Types of Filters:**
        *   **Low-pass filters (LPF):** Attenuate high frequencies, smoothing the image, reducing noise. Examples: Ideal LPF, Butterworth LPF, Gaussian LPF.
        *   **High-pass filters (HPF):** Attenuate low frequencies, enhancing edges and details, can amplify noise. Examples: Ideal HPF, Butterworth HPF, Gaussian HPF.
        *   **Band-pass filters:** Allow a specific range of frequencies to pass.
        *   **Band-reject filters:** Block a specific range of frequencies.
        *   **Homomorphic filtering:** Used for correcting illumination variations.

    *   **Example: Gaussian Low-Pass Filter**
        *   Filter function: $H(u, v) = e^{-D^2(u, v) / (2B^2)}$
        *   $D(u, v) = \sqrt{u^2 + v^2}$ is the distance from the origin (center of the frequency spectrum).
        *   $B$ is a parameter controlling the cutoff frequency. Larger $B$ means more frequencies pass, less smoothing.
        *   Applying this filter attenuates high frequencies, resulting in a smoother image.

*   **Image Analysis:**
    *   **Spectrum Analysis:** Examining the magnitude spectrum $|F(u, v)|$ reveals the dominant frequencies and orientations in an image.
    *   **Texture Analysis:** The frequency content can characterize textures.
    *   **Feature Detection:** Identifying directional features based on the orientation of energy in the spectrum.

*   **Image Compression (Transform Coding):**
    *   Although Discrete Cosine Transform (DCT) is more commonly used for compression due to its energy compaction properties and real-valued output, the DFT forms the theoretical basis.
    *   **Process:**
        1.  Transform image blocks into the frequency domain using DFT (or DCT).
        2.  Quantize the frequency coefficients (discarding less significant ones).
        3.  Encode the quantized coefficients.
    *   The idea is that most of the image's energy is concentrated in a few low-frequency coefficients, allowing for high compression ratios.

*   **Image Restoration:**
    *   The DFT is used in various restoration techniques, especially those involving frequency-domain filtering to remove blur (deconvolution) or noise.

---

### 6. Computational Complexity and the Fast Fourier Transform (FFT)

*   **Direct computation of the 2D DFT:** For an $M \times N$ image, the complexity is $O(M^2 N^2)$. This is computationally very expensive for large images.
*   **Fast Fourier Transform (FFT):**
    *   The FFT is an efficient algorithm for computing the DFT.
    *   For an $N$-point 1D DFT, FFT reduces the complexity to $O(N \log N)$.
    *   **2D FFT:** Due to the separability property, a 2D $M \times N$ DFT can be computed using $M$ 1D $N$-point FFTs and $N$ 1D $M$-point FFTs. The complexity becomes $O(MN \log(MN))$ (or $O(MN(\log M + \log N))$ if row/column transforms are done separately).
    *   **Importance:** The FFT makes frequency-domain processing of images practically feasible.

---

### 7. Important Points to Remember

*   **Frequency Domain:** Represents an image by its constituent frequencies, revealing spatial variations.
*   **2D DFT Equation:** The fundamental mathematical definition relating spatial and frequency domains.
*   **Separability:** The key property enabling efficient computation via FFT.
*   **Magnitude Spectrum:** $|F(u, v)|$ shows the strength of frequencies, often visualized after centering.
*   **DC Component:** $F(0,0)$ is the average intensity of the image.
*   **Convolution Theorem:** The most important property for filtering – convolution in spatial domain = multiplication in frequency domain.
*   **FFT:** Essential for practical implementation of DFT-based operations.
*   **High Frequencies:** Correlate with sharp changes (edges, details, noise).
*   **Low Frequencies:** Correlate with smooth regions.

---

### 8. Practice Questions & Exercises

**(Relates to CO2, CO4)**

**Question 1:**
Explain the significance of the DC component in the 2D DFT of an image. What does the magnitude of this component represent?

**Answer:**
The DC component of the 2D DFT is $F(0,0)$. It represents the average intensity value of the entire image. Its magnitude is the sum of all pixel values in the image. If the image is normalized to have values between 0 and 1, the DC component's magnitude will be the average pixel intensity multiplied by the total number of pixels.

**Question 2:**
A common way to visualize the 2D DFT spectrum is to shift the origin to the center. Briefly explain how this is achieved and why it's useful.

**Answer:**
To shift the origin of the DFT spectrum to the center, we typically compute $G(u, v) = (-1)^{u+v} F(u, v)$. This multiplication by $(-1)^{u+v}$ effectively swaps the quadrants of the DFT output. The $F(0,0)$ component (DC) moves to the center. This is useful because the low frequencies are now located around the center of the visual representation, making it easier to analyze the distribution of frequencies, identify dominant orientations, and design filters.

**Question 3:**
State the Convolution Theorem for 2D signals. How is this theorem exploited for image filtering in the frequency domain?

**Answer:**
The 2D Convolution Theorem states that convolution in the spatial domain is equivalent to element-wise multiplication in the frequency domain, and vice-versa.
Mathematically:
$f(x, y) * h(x, y) \iff F(u, v) \cdot H(u, v)$
where $*$ denotes spatial convolution, and $\iff$ denotes the 2D DFT and its inverse.

This theorem is exploited for image filtering by performing the following steps:
1.  Transform the image $f(x, y)$ to the frequency domain: $F(u, v) = \mathcal{F}\{f(x, y)\}$.
2.  Transform the filter's impulse response $h(x, y)$ to the frequency domain: $H(u, v) = \mathcal{F}\{h(x, y)\}$.
3.  Multiply the image's DFT with the filter's DFT: $G(u, v) = F(u, v) \cdot H(u, v)$.
4.  Transform the result back to the spatial domain to get the filtered image: $g(x, y) = \mathcal{F}^{-1}\{G(u, v)\}$.
This frequency-domain multiplication is computationally much faster than spatial-domain convolution, especially when using the FFT.

**Question 4 (Conceptual):**
If an image contains predominantly vertical edges, what would you expect to see in its centered 2D DFT magnitude spectrum?

**Answer:**
Vertical edges represent rapid changes in the horizontal direction (constant $y$, changing $x$). These correspond to high frequencies in the $u$ direction (horizontal frequency). Therefore, in the centered 2D DFT magnitude spectrum, you would expect to see bright lines or regions along the vertical axis (i.e., for $u \neq 0$ and $v = 0$ or close to it). If the edges are very sharp, these will be strong high-frequency components.

**Question 5 (Implementation Hint):**
Consider an $8 \times 8$ image. If you were to compute its 2D DFT using the separability property, how many 1D DFTs would you perform, and of what size?

**Answer:**
Using the separability property:
1.  Perform 8 (number of rows) 1D DFTs of size 8 (number of columns) on each row.
2.  Then, for each of these results, perform 8 (number of columns, now corresponding to $u$ frequencies) 1D DFTs of size 8 (number of rows, corresponding to $x$ indices) on each "column" of results.
So, a total of $8 + 8 = 16$ 1D DFTs of size 8 would be performed.

---

This concludes Module 2, Topic 1 on the 2D Discrete Fourier Transform. This foundational knowledge is critical for understanding frequency-domain filtering and many other advanced image processing techniques.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
