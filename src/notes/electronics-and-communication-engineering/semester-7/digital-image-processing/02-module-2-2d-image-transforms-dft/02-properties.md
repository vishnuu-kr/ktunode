---
title: "Properties"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff503"
status: "completed"
scrapedAt: "2026-05-23T18:06:33.918Z"
---
# Digital Image Processing: Module 2 - 2D Image Transforms: DFT - Properties

## Introduction to 2D DFT

The Two-Dimensional Discrete Fourier Transform (2D DFT) is a fundamental tool in Digital Image Processing, enabling the analysis of an image in the frequency domain. It decomposes an image into its constituent sinusoidal components, revealing information about the image's spatial frequencies, textures, and patterns.

**Definition:**

For an $M \times N$ image $f(x, y)$, its 2D DFT is given by:

$F(u, v) = \sum_{x=0}^{M-1} \sum_{y=0}^{N-1} f(x, y) e^{-j 2\pi (\frac{ux}{M} + \frac{vy}{N})}$

where:
* $f(x, y)$ is the pixel intensity at spatial coordinates $(x, y)$.
* $F(u, v)$ is the complex coefficient representing the contribution of frequencies $(u, v)$ in the image.
* $u$ and $v$ are the frequency variables, ranging from $0$ to $M-1$ and $0$ to $N-1$ respectively.
* $j$ is the imaginary unit ($\sqrt{-1}$).

The Inverse 2D DFT (IDFT) reconstructs the spatial domain image from its frequency domain representation:

$f(x, y) = \frac{1}{MN} \sum_{u=0}^{M-1} \sum_{v=0}^{N-1} F(u, v) e^{j 2\pi (\frac{ux}{M} + \frac{vy}{N})}$

**Key Concepts:**

*   **Frequency Domain:** The representation of an image in terms of its spatial frequencies. The 2D DFT transforms an image from the spatial domain $(x, y)$ to the frequency domain $(u, v)$.
*   **Spatial Frequency:** Measures how rapidly the pixel intensities change across the image. Low frequencies correspond to gradual changes (e.g., smooth areas), while high frequencies correspond to rapid changes (e.g., edges, textures).
*   **Frequency Components:** The sinusoidal basis functions that, when combined, reconstruct the original image. $F(u, v)$ represents the amplitude and phase of each frequency component.

**Relevance to Course Outcomes:**

*   **CO2 (Analyze the various concepts and mathematical transforms necessary for image processing):** This module directly addresses CO2 by delving into the mathematical underpinnings and analytical capabilities of the 2D DFT.

## Properties of the 2D DFT

Understanding the properties of the 2D DFT is crucial for its effective application in image processing tasks like filtering, compression, and analysis. These properties simplify computations and provide insights into the image's characteristics.

### 1. Linearity (Superposition)

**Concept:** The DFT of a linear combination of two images is the same linear combination of their individual DFTs.

**Mathematical Representation:**

If $g(x, y) = af_1(x, y) + bf_2(x, y)$, then its DFT $G(u, v)$ is:

$G(u, v) = aF_1(u, v) + bF_2(u, v)$

where $F_1(u, v)$ and $F_2(u, v)$ are the DFTs of $f_1(x, y)$ and $f_2(x, y)$ respectively.

**Implication:** This property is fundamental for linear filtering operations. It allows us to process different components of an image separately and combine the results.

**Example:** If we have an image $f(x, y)$ and we add a constant value $c$ to every pixel, i.e., $f'(x, y) = f(x, y) + c$. The DFT of $f'(x, y)$ would be $F'(u, v) = F(u, v) + c \times \text{DFT of a constant image}$. The DFT of a constant image $f(x,y) = 1$ for all $x,y$ is a single impulse at $F(0,0)$, which is $MN$. So, $F'(u,v) = F(u,v) + c \times MN \delta(u,v)$. This shows that adding a constant intensity shifts the DC component (0,0 frequency) in the frequency domain.

**Reference:** (Gonzalez & Woods, 4th ed., Chapter 4)

### 2. Separability

**Concept:** The 2D DFT can be computed by performing 1D DFTs sequentially. First, compute the 1D DFT of each row, and then compute the 1D DFT of each column of the resulting matrix.

**Mathematical Representation:**

$F(u, v) = \sum_{x=0}^{M-1} \left( \sum_{y=0}^{N-1} f(x, y) e^{-j 2\pi \frac{vy}{N}} \right) e^{-j 2\pi \frac{ux}{M}}$

Here, the inner summation is a 1D DFT along each row $x$. Let $f_x(y) = f(x, y)$. Then $\mathcal{F}_{1D}\{f_x(y)\} = F_x(v) = \sum_{y=0}^{N-1} f(x, y) e^{-j 2\pi \frac{vy}{N}}$.

The equation becomes:

$F(u, v) = \sum_{x=0}^{M-1} \left( F_x(v) \right) e^{-j 2\pi \frac{ux}{M}}$

This shows that $F(u, v)$ is the 1D DFT of the sequence $F_x(v)$ for each fixed $v$.

**Implication:** This property makes the computation of the 2D DFT computationally efficient, especially when combined with the Fast Fourier Transform (FFT) algorithm. It allows us to reduce a 2D DFT into $M+N$ 1D DFTs.

**Reference:** (Gonzalez & Woods, 4th ed., Chapter 4)
**Reference:** (Jayaraman, Esakkirajan, Veerakumar, Chapter 3)

### 3. Periodicity

**Concept:** The 2D DFT is periodic in both $u$ and $v$ with periods $M$ and $N$ respectively.

**Mathematical Representation:**

$F(u + kM, v) = F(u, v)$ for any integer $k$
$F(u, v + lN) = F(u, v)$ for any integer $l$

**Implication:** This means that the frequency domain representation repeats itself every $M$ units in the $u$ direction and every $N$ units in the $v$ direction. Therefore, we only need to consider the frequency components within the range $0 \le u \le M-1$ and $0 \le v \le N-1$.

**Example:** If we have a $4 \times 4$ image, the DFT coefficients $F(0,0)$ will be the same as $F(4,0)$, $F(8,0)$, etc., and also the same as $F(0,4)$, $F(0,8)$, etc.

**Reference:** (Gonzalez & Woods, 4th ed., Chapter 4)

### 4. Symmetry

**Concept:** If the spatial domain image $f(x, y)$ is real, then its DFT $F(u, v)$ exhibits conjugate symmetry.

**Mathematical Representation:**

$F(u, v) = F^*(M-u, N-v)$

where $F^*(u, v)$ denotes the complex conjugate of $F(u, v)$.

**Implication:** This property means that the magnitude spectrum is symmetric, and the phase spectrum is anti-symmetric. If the image is also symmetric (e.g., $f(x, y) = f(M-x, N-y)$), then the DFT is purely real and symmetric.

**Example:** For a real-valued image, the magnitude $|F(u,v)|$ is equal to $|F(M-u, N-v)|$, and the phase $\angle F(u,v)$ is equal to $-\angle F(M-u, N-v)$.

**Reference:** (Gonzalez & Woods, 4th ed., Chapter 4)

### 5. Conjugate Symmetry

**Concept:** This is the same as the symmetry property for real images. For any complex image $f(x, y)$, the DFT $F(u, v)$ satisfies:

$F(u, v) = F^*(M-u, N-v)$

**Implication:** This is a fundamental property of Fourier Transforms and implies that the information contained in the first quadrant of the frequency domain is redundant with respect to the second, third, and fourth quadrants.

**Reference:** (Castleman, 2/e, Chapter 7)

### 6. Translation (Shift)

**Concept:** Shifting the image in the spatial domain results in a phase shift in the frequency domain.

**Mathematical Representation:**

If $g(x, y) = f(x - x_0, y - y_0)$, then its DFT $G(u, v)$ is:

$G(u, v) = F(u, v) e^{-j 2\pi (\frac{ux_0}{M} + \frac{vy_0}{N})}$

**Implication:** This property highlights that the magnitude spectrum of an image remains unchanged when the image is shifted, but the phase spectrum is modified by a linear term. This is important for understanding how spatial positioning affects the frequency representation.

**Example:** If we shift a small bright spot in an image, its frequency spectrum's magnitude won't change, but its phase will be altered depending on the shift amount.

**Reference:** (Gonzalez & Woods, 4th ed., Chapter 4)
**Reference:** (Jain, PHI, Chapter 3)

### 7. Multiplication (Convolution Theorem)

**Concept:** Convolution in the spatial domain is equivalent to element-wise multiplication in the frequency domain, and vice versa.

**Mathematical Representation:**

If $h(x, y) = f(x, y) * g(x, y)$ (spatial convolution), then $H(u, v) = F(u, v) \cdot G(u, v)$.
If $H(u, v) = F(u, v) * G(u, v)$ (frequency convolution), then $h(x, y) = f(x, y) \cdot g(x, y)$ (spatial multiplication).

**Implication:** This is one of the most powerful properties of the DFT. It is the basis for efficient filtering operations in image processing. Instead of performing computationally expensive spatial convolution, we can transform the image and the filter to the frequency domain, multiply them, and then transform the result back to the spatial domain.

**Example:** Image blurring (e.g., Gaussian blur) can be achieved by convolving the image with a blurring kernel. In the frequency domain, this becomes a simple multiplication of the image's DFT with the DFT of the blurring kernel.

**Reference:** (Gonzalez & Woods, 4th ed., Chapter 4)
**Reference:** (Pratt, 4/e, Chapter 3)

### 8. Scaling

**Concept:** Scaling the spatial coordinates of an image leads to a corresponding scaling of the frequency variables, with an inverse relationship.

**Mathematical Representation:**

If $g(x, y) = f(ax, by)$, then $G(u, v) = \frac{1}{|a| |b|} F(\frac{u}{a}, \frac{v}{b})$.

**Implication:** This property shows how scaling an image affects its frequency content. For example, zooming into an image (effectively scaling by $a < 1$ and $b < 1$ in the spatial domain) results in a spread-out spectrum in the frequency domain.

**Reference:** (Gonzalez & Woods, 4th ed., Chapter 4)

### 9. Rotation

**Concept:** Rotation of an image in the spatial domain by an angle $\theta$ results in a rotation of its DFT by the same angle $\theta$.

**Mathematical Representation:**

If $g(x, y)$ is obtained by rotating $f(x, y)$ by $\theta$, then $G(u, v)$ is obtained by rotating $F(u, v)$ by $\theta$.

**Implication:** This property is useful for analyzing features that are rotationally invariant or for understanding how rotations affect the frequency content.

**Example:** If an image has a strong horizontal edge, its DFT will have a strong component along the vertical axis in the frequency domain. If the image is rotated by 90 degrees, the edge becomes vertical, and its DFT component moves to the horizontal axis.

**Reference:** (Gonzalez & Woods, 4th ed., Chapter 4)

### 10. Average Value (DC Component)

**Concept:** The DC component of the DFT, $F(0, 0)$, represents the average intensity of the image.

**Mathematical Representation:**

$F(0, 0) = \sum_{x=0}^{M-1} \sum_{y=0}^{N-1} f(x, y)$

**Implication:** This means that $F(0,0)$ is proportional to the sum of all pixel values. It is the lowest frequency component and is located at the center of the typically displayed magnitude spectrum (after shifting).

**Example:** A dark image will have a small DC component, while a bright image will have a larger DC component.

**Reference:** (Gonzalez & Woods, 4th ed., Chapter 4)

### 11. Energy Conservation (Parseval's Theorem)

**Concept:** The total energy in the spatial domain is equal to the total energy in the frequency domain.

**Mathematical Representation:**

$\sum_{x=0}^{M-1} \sum_{y=0}^{N-1} |f(x, y)|^2 = \frac{1}{MN} \sum_{u=0}^{M-1} \sum_{v=0}^{N-1} |F(u, v)|^2$

**Implication:** This theorem states that the energy is preserved during the transform. It implies that the distribution of energy across the frequency components can be analyzed.

**Reference:** (Gonzalez & Woods, 4th ed., Chapter 4)
**Reference:** (Jayaraman, Esakkirajan, Veerakumar, Chapter 3)

## Important Points to Remember

*   **DFT Transform:** Transforms an image from the spatial domain to the frequency domain.
*   **Frequency Domain Interpretation:** Low frequencies represent smooth areas, high frequencies represent details like edges and textures.
*   **DC Component ($F(0,0)$):** Represents the average intensity of the image.
*   **Separability:** Enables efficient computation using 1D DFTs.
*   **Convolution Theorem:** Crucial for frequency domain filtering.
*   **Magnitude Spectrum:** Represents the strength of each frequency component.
*   **Phase Spectrum:** Represents the spatial positioning of the frequency components.
*   **Symmetry (for real images):** Magnitude spectrum is symmetric, phase spectrum is anti-symmetric.
*   **Periodicity:** The DFT repeats itself.

## Practice Questions and Answers

**Question 1:**
What property of the 2D DFT allows us to perform image filtering efficiently in the frequency domain?
**Answer:** The Convolution Theorem.

**Question 2:**
If an image $f(x, y)$ is shifted by $(x_0, y_0)$ to become $g(x, y) = f(x - x_0, y - y_0)$, how does its DFT $G(u, v)$ relate to the original DFT $F(u, v)$?
**Answer:** $G(u, v) = F(u, v) e^{-j 2\pi (\frac{ux_0}{M} + \frac{vy_0}{N})}$. This is the translation property.

**Question 3:**
The value of $F(0,0)$ in the 2D DFT of an image $f(x, y)$ represents:
a) The maximum intensity value
b) The average intensity value
c) The variance of the image
d) The number of edges in the image
**Answer:** b) The average intensity value.

**Question 4:**
Explain the significance of the separability property of the 2D DFT.
**Answer:** The separability property implies that a 2D DFT can be computed by performing a series of 1D DFTs. This significantly reduces the computational complexity, especially when combined with the Fast Fourier Transform (FFT) algorithm. It allows us to process images row by row and then column by column (or vice versa), making the 2D DFT computationally feasible.

**Question 5:**
Consider a real-valued image $f(x,y)$. If $f(x,y) = f(M-x, N-y)$, meaning the image is symmetric about its center. How would its DFT $F(u,v)$ behave?
**Answer:** If the image is real and symmetric, its DFT $F(u,v)$ will be purely real and symmetric. Specifically, $F(u,v) = F^*(M-u, N-v)$ becomes $F(u,v) = F(M-u, N-v)$ because $F(u,v)$ is real.

## Relation to Course Outcomes

*   **CO1 (Explain different components of image processing system):** While not directly covered, understanding transforms is a key component of the processing pipeline.
*   **CO2 (Analyze the various concepts and mathematical transforms necessary for image processing):** This module directly addresses CO2 by detailing the properties of the 2D DFT, a crucial mathematical transform for image analysis and manipulation.
*   **CO3 (Illustrate the various schemes of image compression):** DFT is a basis for some compression techniques (e.g., JPEG). Understanding its properties helps in grasping how frequency components can be quantized or discarded.
*   **CO4 (Analyze the filtering and restoration of images):** The Convolution Theorem, derived from DFT properties, is fundamental to frequency domain filtering and restoration techniques.
*   **CO5 (Describe the basic image segmentation techniques):** While not a primary focus, texture analysis using DFT can indirectly aid segmentation.

This comprehensive set of notes covers the essential properties of the 2D DFT, its mathematical underpinnings, practical implications, and relevance to the broader field of Digital Image Processing, as per the specified learning outcomes and textbook references.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
