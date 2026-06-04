---
title: "2D Image transforms: DFT"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff502"
status: "completed"
scrapedAt: "2026-05-23T18:06:33.122Z"
---
# DIGITAL IMAGE PROCESSING: Module 2: 2D Image Transforms: DFT

---

## Introduction to 2D Image Transforms

**Objective:** To understand the fundamental concepts and mathematical transformations used in digital image processing, specifically focusing on the 2D Discrete Fourier Transform (DFT). This section contributes to **CO2 (Analyze the various concepts and mathematical transforms necessary for image processing - K3)**.

**What are Image Transforms?**

Image transforms are mathematical operations that convert an image from its spatial domain (where pixel values represent intensity at specific locations) to another domain, often a frequency or transform domain. This transformation can reveal different characteristics of the image that might not be apparent in the spatial domain.

**Why are Image Transforms Important?**

*   **Feature Extraction:** Transforms can highlight important image features like edges, textures, and patterns.
*   **Data Compression:** By representing an image in a different domain, it's often possible to reduce the amount of data required to store or transmit the image with minimal loss of perceptual quality. (Relevant to **CO3: Illustrate the various schemes of image compression - K3**).
*   **Filtering and Enhancement:** Operations in the transform domain, such as frequency filtering, can be used to enhance image quality, reduce noise, or sharpen details. (Relevant to **CO4: Analyze the filtering and restoration of images - K3**).
*   **Analysis and Understanding:** Transforms provide insights into the underlying structure and characteristics of an image.

**Common Image Transforms:**

*   Fourier Transform (FT)
*   Discrete Fourier Transform (DFT)
*   Discrete Cosine Transform (DCT)
*   Walsh-Hadamard Transform
*   Wavelet Transform

---

## 2D Discrete Fourier Transform (2D DFT)

**Objective:** To delve into the mathematical formulation, properties, and applications of the 2D DFT for image processing. This section directly addresses **CO2 (Analyze the various concepts and mathematical transforms necessary for image processing - K3)**.

**1. The 2D DFT - Mathematical Formulation**

The 2D DFT of an $M \times N$ image $f(x, y)$ is a 2D array $F(u, v)$ of complex numbers, defined as:

$$
F(u, v) = \sum_{x=0}^{M-1} \sum_{y=0}^{N-1} f(x, y) e^{-j2\pi(ux/M + vy/N)}
$$

where:
*   $f(x, y)$ is the pixel intensity at spatial coordinates $(x, y)$ (0 $\le x \le M-1$, 0 $\le y \le N-1$).
*   $F(u, v)$ is the transform coefficient at frequency coordinates $(u, v)$ (0 $\le u \le M-1$, 0 $\le v \le N-1$).
*   $j$ is the imaginary unit ($\sqrt{-1}$).
*   $e^{-j\theta} = \cos(\theta) - j\sin(\theta)$ (Euler's formula).

**Interpretation of $F(u, v)$:**
*   $F(u, v)$ represents the amplitude and phase of sinusoidal components that, when combined, reconstruct the original image $f(x, y)$.
*   The term $e^{-j2\pi(ux/M + vy/N)}$ is a complex exponential, representing a sinusoidal wave.
*   $u$ and $v$ represent spatial frequencies in the horizontal and vertical directions, respectively.
    *   Low frequencies (small $u, v$) correspond to slow variations in image intensity (e.g., smooth areas).
    *   High frequencies (large $u, v$) correspond to rapid variations in image intensity (e.g., edges, details, noise).

**The 2D Inverse Discrete Fourier Transform (2D IDFT)**

The original image can be reconstructed from its DFT coefficients using the 2D IDFT:

$$
f(x, y) = \frac{1}{MN} \sum_{u=0}^{M-1} \sum_{v=0}^{N-1} F(u, v) e^{j2\pi(ux/M + vy/N)}
$$

**Key Concepts:**

*   **Frequency Domain:** The domain where the DFT coefficients $F(u, v)$ are represented.
*   **Spatial Domain:** The original domain of the image $f(x, y)$.
*   **Sinusoidal Components:** The DFT decomposes an image into a sum of 2D sinusoidal waves of varying frequencies, amplitudes, and phases.

**Example:** Imagine a simple image that is a pure horizontal sine wave. Its DFT would show a strong peak at a specific frequency $(u, v)$ corresponding to that wave.

**From Textbooks:**
*   **Gonzalez & Woods (4th Ed.):** Chapter 4 extensively covers Fourier Transforms, including the 2D DFT, its properties, and applications. They emphasize that the DFT expresses an image as a sum of complex exponentials.
*   **Jayaraman et al. (1st Ed.):** Their chapter on image transforms would also provide a thorough mathematical derivation and explanation of the 2D DFT.

**2. Properties of the 2D DFT**

Understanding these properties is crucial for manipulating images in the frequency domain. This reinforces **CO2 (K3)**.

*   **Separability:** The 2D DFT can be computed by performing 1D DFTs row-wise followed by 1D DFTs column-wise (or vice versa). This significantly reduces computation.
    *   For each row $f(x, y)$ for a fixed $x$, compute its 1D DFT with respect to $y$: $F_x(u, v) = \sum_{y=0}^{N-1} f(x, y) e^{-j2\pi vy/N}$.
    *   Then, for each resulting row $F_x(u, v)$ for a fixed $u$, compute its 1D DFT with respect to $x$: $F(u, v) = \sum_{x=0}^{M-1} F_x(u, v) e^{-j2\pi ux/M}$.

*   **Periodicity:** The DFT is periodic with period $M$ in the $u$ direction and period $N$ in the $v$ direction.
    *   $F(u+M, v) = F(u, v)$
    *   $F(u, v+N) = F(u, v)$

*   **Symmetry:** If the input image $f(x, y)$ is real, its DFT $F(u, v)$ exhibits conjugate symmetry.
    *   $F(u, v) = F^*(M-u, N-v)$ where $F^*$ denotes the complex conjugate.
    *   This means that if we know the coefficients for the top-left quadrant of the frequency spectrum, we can deduce the coefficients for the other quadrants.

*   **Rotation Property:** If an image is rotated by an angle $\theta$ in the spatial domain, its DFT is rotated by the same angle $\theta$ in the frequency domain.

*   **Translation Property:** If an image $f(x, y)$ is shifted by $(x_0, y_0)$ to $f(x-x_0, y-y_0)$, its DFT is multiplied by a complex exponential factor:
    *   $DFT\{f(x-x_0, y-y_0)\} = F(u, v) e^{-j2\pi(ux_0/M + vy_0/N)}$

*   **Scaling Property:**
    *   $DFT\{af(x, y)\} = aF(u, v)$ (Linearity)
    *   $DFT\{f(ax, by)\}$ results in scaling in the frequency domain, but it's more complex due to sampling.

*   **Convolution Property:** Convolution in the spatial domain is equivalent to multiplication in the frequency domain, and vice versa. This is one of the most powerful properties for filtering.
    *   $f(x, y) * h(x, y) \Leftrightarrow F(u, v) H(u, v)$
    *   where $*$ denotes convolution and $\Leftrightarrow$ denotes the DFT pair.

**3. Visualization of the DFT Spectrum**

The DFT coefficients $F(u, v)$ are complex numbers. To visualize them, we typically display either:

*   **Magnitude Spectrum:** $|F(u, v)| = \sqrt{Re\{F(u, v)\}^2 + Im\{F(u, v)\}^2}$
*   **Phase Spectrum:** $\angle F(u, v) = \arctan\left(\frac{Im\{F(u, v)\}}{Re\{F(u, v)\}}\right)$

**Displaying the Spectrum:**

*   The DC component (average intensity of the image) is located at $F(0, 0)$.
*   Low frequencies are near the origin $(0, 0)$.
*   High frequencies are towards the edges of the spectrum.
*   For visualization, the magnitude spectrum is often shifted so that the DC component is at the center of the display. This is done by multiplying $F(u, v)$ by $(-1)^{u+v}$ before displaying.

**Visualization Example:**
Consider an image with a lot of horizontal lines. Its magnitude spectrum will show strong energy along the vertical axis (representing horizontal frequencies). Conversely, an image with vertical lines will have energy along the horizontal axis.

**Reference:** Castleman's "Digital Image Processing" often provides excellent visual examples of DFT spectra and their relation to image content.

---

## Applications of the 2D DFT in Image Processing

**Objective:** To understand how the 2D DFT is used to solve practical image processing problems, aligning with **CO3 (Image Compression - K3)** and **CO4 (Image Filtering/Restoration - K3)**.

**1. Image Filtering in the Frequency Domain**

This is a primary application of the DFT, directly relevant to **CO4**.

*   **Concept:** Filtering involves modifying the frequency content of an image. Using the convolution property, filtering in the spatial domain can be achieved by multiplying the DFT of the image with the DFT of a filter kernel (point spread function, PSF).
    *   $f_{filtered}(x, y) = f(x, y) * h(x, y)$
    *   $F_{filtered}(u, v) = F(u, v) H(u, v)$
    *   where $H(u, v)$ is the DFT of the filter kernel $h(x, y)$.

*   **Process:**
    1.  Compute the DFT of the image $f(x, y)$ to get $F(u, v)$.
    2.  Design a filter kernel $h(x, y)$ in the spatial domain (e.g., for smoothing, sharpening, edge detection) and compute its DFT, $H(u, v)$.
    3.  Multiply $F(u, v)$ element-wise by $H(u, v)$ to get $F_{filtered}(u, v)$.
    4.  Compute the IDFT of $F_{filtered}(u, v)$ to obtain the filtered image $f_{filtered}(x, y)$.

*   **Types of Filters:**
    *   **Low-Pass Filters (LPF):** Allow low frequencies to pass through, smoothing the image, reducing noise, and blurring edges.
        *   *Ideal Low-Pass Filter (ILPF):* $H(u, v) = \begin{cases} 1 & \text{if } \sqrt{u^2 + v^2} \le D_0 \\ 0 & \text{otherwise} \end{cases}$ (Introduces ringing artifacts due to its abrupt cutoff).
        *   *Butterworth Low-Pass Filter (BLPF):* $H(u, v) = \frac{1}{1 + (\frac{\sqrt{u^2 + v^2}}{D_0})^{2n}}$ (Smoother cutoff, reduces ringing).
        *   *Gaussian Low-Pass Filter (GLPF):* $H(u, v) = e^{-(\frac{\sqrt{u^2 + v^2}}{D_0})^2}$ (No ringing, provides excellent smoothing).
    *   **High-Pass Filters (HPF):** Allow high frequencies to pass through, sharpening the image, enhancing edges, and potentially amplifying noise.
        *   *Ideal High-Pass Filter (IHPF):* $H(u, v) = \begin{cases} 0 & \text{if } \sqrt{u^2 + v^2} \le D_0 \\ 1 & \text{otherwise} \end{cases}$
        *   *Butterworth High-Pass Filter (BHPF):* $H(u, v) = \frac{1}{1 + (\frac{D_0}{\sqrt{u^2 + v^2}})^{2n}}$
        *   *Gaussian High-Pass Filter (GHPF):* $H(u, v) = 1 - e^{-(\frac{\sqrt{u^2 + v^2}}{D_0})^2}$
    *   **Band-Pass Filters:** Allow frequencies within a specific range to pass.
    *   **Band-Reject Filters:** Block frequencies within a specific range. (Useful for removing periodic noise).

*   **Homomorphic Filtering:** Used for simultaneous removal of illumination variations and enhancement of details. It operates on the logarithm of the image intensity: $ln f(x, y) = ln I(x, y) + ln R(x, y)$ (where $I$ is illumination and $R$ is reflectance). Filtering is applied in the frequency domain of $ln f$.

**2. Image Compression**

This is relevant to **CO3**.

*   **Concept:** Many transform coefficients (especially for natural images) are close to zero or have very small magnitudes. These can be quantized (reduced precision) or discarded without significant visual loss.
*   **Process:**
    1.  Apply a transform (like DFT, DCT, or Wavelets) to the image.
    2.  Quantize the transform coefficients, especially the high-frequency ones.
    3.  Encode the quantized coefficients efficiently (e.g., using Huffman coding or arithmetic coding).
*   **DFT for Compression:** While not as widely used for modern image compression as DCT or Wavelets, the principle applies. The DFT transforms image data into frequency components. If most of these components are small, they can be represented with fewer bits.

**3. Image Analysis**

*   **Texture Analysis:** The distribution of energy in the DFT spectrum can provide information about image textures.
*   **Feature Detection:** Specific frequency patterns can be indicative of certain features.

**Important Note on Computation:**
Directly computing the 2D DFT using the formula is computationally expensive. For an $N \times N$ image, it requires $O(N^4)$ operations. The **Fast Fourier Transform (FFT)** algorithm reduces this complexity to $O(N^2 \log N)$ by exploiting the separability and periodicity properties. This makes practical application feasible.

---

## Practice Questions and Answers

**Objective:** To test understanding of the 2D DFT concepts and their application. This reinforces **CO2 (K3)**.

**Question 1:**
What is the primary advantage of using the Fast Fourier Transform (FFT) over the direct computation of the 2D Discrete Fourier Transform (DFT)?

**Answer 1:**
The primary advantage of the FFT is its significantly reduced computational complexity. The FFT reduces the computation from $O(N^4)$ for an $N \times N$ image to $O(N^2 \log N)$, making it computationally feasible for processing large images.

**Question 2:**
If an image has a strong periodic noise pattern in the horizontal direction, how would this manifest in its 2D DFT magnitude spectrum?

**Answer 2:**
A strong periodic noise pattern in the horizontal direction would appear as bright spots or lines in the DFT magnitude spectrum, typically located symmetrically above and below the horizontal axis (corresponding to specific vertical frequencies $v$ for varying horizontal frequencies $u$). These spots would be away from the center $(0,0)$ which represents the DC component.

**Question 3:**
Explain why low-pass filtering in the frequency domain leads to smoothing of an image in the spatial domain.

**Answer 3:**
Low-pass filtering attenuates or removes high-frequency components from the DFT spectrum. In the spatial domain, high frequencies correspond to rapid changes in pixel intensity, such as edges and fine details. By removing these high frequencies, the resulting image will have smoother transitions between pixel values, thus appearing smoother and potentially blurred. This relates to **CO4 (K3)**.

**Question 4:**
Given a small real-valued image patch:
$f(x, y) = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$
Calculate the 2D DFT $F(u, v)$ for $u, v \in \{0, 1\}$.

**Solution 4:**
The image size is $M=2, N=2$. The DFT formula is:
$F(u, v) = \sum_{x=0}^{1} \sum_{y=0}^{1} f(x, y) e^{-j2\pi(ux/2 + vy/2)}$

Let's calculate each element:

*   **F(0, 0) (DC Component):**
    $F(0, 0) = \sum_{x=0}^{1} \sum_{y=0}^{1} f(x, y) e^{-j0} = \sum_{x=0}^{1} \sum_{y=0}^{1} f(x, y)$
    $F(0, 0) = f(0,0) + f(0,1) + f(1,0) + f(1,1) = 1 + 2 + 3 + 4 = 10$

*   **F(0, 1):**
    $F(0, 1) = \sum_{x=0}^{1} \sum_{y=0}^{1} f(x, y) e^{-j2\pi(v y/2)}$ with $v=1$
    $F(0, 1) = f(0,0)e^{-j0} + f(0,1)e^{-j\pi} + f(1,0)e^{-j0} + f(1,1)e^{-j\pi}$
    $e^{-j\pi} = \cos(-\pi) + j\sin(-\pi) = -1$
    $F(0, 1) = 1(1) + 2(-1) + 3(1) + 4(-1) = 1 - 2 + 3 - 4 = -2$

*   **F(1, 0):**
    $F(1, 0) = \sum_{x=0}^{1} \sum_{y=0}^{1} f(x, y) e^{-j2\pi(u x/2)}$ with $u=1$
    $F(1, 0) = f(0,0)e^{-j0} + f(0,1)e^{-j0} + f(1,0)e^{-j\pi} + f(1,1)e^{-j\pi}$
    $F(1, 0) = 1(1) + 2(1) + 3(-1) + 4(-1) = 1 + 2 - 3 - 4 = -4$

*   **F(1, 1):**
    $F(1, 1) = \sum_{x=0}^{1} \sum_{y=0}^{1} f(x, y) e^{-j2\pi(x/2 + y/2)}$
    $F(1, 1) = f(0,0)e^{-j0} + f(0,1)e^{-j\pi} + f(1,0)e^{-j\pi} + f(1,1)e^{-j2\pi}$
    $e^{-j2\pi} = \cos(-2\pi) + j\sin(-2\pi) = 1$
    $F(1, 1) = 1(1) + 2(-1) + 3(-1) + 4(1) = 1 - 2 - 3 + 4 = 0$

So, the DFT is:
$F(u, v) = \begin{bmatrix} 10 & -2 \\ -4 & 0 \end{bmatrix}$

*(Note: For visualization, usually the magnitude and phase are considered, and the spectrum is shifted)*.

**Question 5:**
Which property of the 2D DFT is most crucial for performing image filtering in the frequency domain? Briefly explain why.

**Answer 5:**
The **Convolution Property** is most crucial. It states that convolution in the spatial domain is equivalent to element-wise multiplication in the frequency domain ($f * h \Leftrightarrow F \cdot H$). This allows us to design a filter in the frequency domain (represented by $H(u,v)$) and apply it to the image's DFT ($F(u,v)$) by simple multiplication, which is computationally much faster than spatial convolution for large filters. This directly supports **CO4 (K3)**.

---

## Important Points to Remember

*   **Domain Conversion:** Transforms convert images from the spatial domain to a different domain (e.g., frequency) to reveal or manipulate different aspects.
*   **DFT Components:** The 2D DFT decomposes an image into a sum of 2D sinusoids. $F(u,v)$ contains both magnitude and phase information.
*   **Frequency Interpretation:** Low $(u,v)$ represent gradual intensity changes, while high $(u,v)$ represent rapid changes (edges, noise).
*   **Separability:** The 2D DFT can be computed efficiently by performing 1D DFTs on rows and then columns.
*   **Convolution Theorem:** The key for frequency-domain filtering.
*   **Filtering:** Low-pass filters smooth (reduce noise), high-pass filters sharpen (enhance edges).
*   **FFT:** Essential for practical implementation due to computational efficiency.
*   **Visualization:** Magnitude spectrum (often centered) is commonly used to understand the frequency content.
*   **Textbook Emphasis:** Gonzalez & Woods provide a comprehensive mathematical and conceptual foundation. Jayaraman et al. offer a practical approach with code examples. Castleman and Jain offer alternative perspectives and deeper theoretical insights.

---

## Alignment with Course Outcomes

*   **CO1: Explain different components of image processing system (Knowledge Level: K2)**
    *   While not directly a focus of this module, understanding transforms is crucial for explaining system components like enhancement or compression modules.
*   **CO2: Analyze the various concepts and mathematical transforms necessary for image processing (Knowledge Level: K3)**
    *   **Directly addressed:** This module deeply covers the concepts, mathematical formulation, and properties of the 2D DFT, enabling analysis of its role in image processing.
*   **CO3: Illustrate the various schemes of image compression (Knowledge Level: K3)**
    *   **Partially addressed:** The principles of how transforms (like DFT) enable compression by representing image information in a more compact form (e.g., fewer significant coefficients) are discussed.
*   **CO4: Analyze the filtering and restoration of images (Knowledge Level: K3)**
    *   **Directly addressed:** A significant portion of this module focuses on image filtering using the DFT in the frequency domain, explaining the process and types of filters.
*   **CO5: Describe the basic image segmentation techniques (Knowledge Level: K2)**
    *   Not directly covered in this specific module on DFT. Segmentation is typically addressed in a separate module.

---

This comprehensive set of notes provides a solid foundation for understanding the 2D Discrete Fourier Transform within the context of Digital Image Processing, aligning with the specified learning outcomes and drawing upon the referenced textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
