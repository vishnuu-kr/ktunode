---
title: "Shift Invariant Linear Systems."
subject: "COMPUTER VISION"
module: "Module 2: Features and Filters :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c3a3"
status: "completed"
scrapedAt: "2026-05-20T17:03:07.997Z"
---
# Computer Vision: Module 2: Features and Filters - Shift Invariant Linear Systems

## Introduction

Shift Invariant Linear Systems (SILS) are a fundamental concept in image processing and computer vision. They form the basis for many filtering operations that are crucial for tasks like noise reduction, edge detection, and feature extraction. Understanding SILS allows us to analyze how images are transformed by these systems and to design effective image processing pipelines.

## Learning Outcomes

This module will cover the following learning outcomes:

*   **Understand the definition and properties of linear systems.**
*   **Grasp the concept of shift-invariance and its implications.**
*   **Comprehend the role of convolution in implementing SILS.**
*   **Analyze the frequency domain representation of SILS using the Fourier Transform.**
*   **Explore common applications and examples of SILS in computer vision.**

## Key Concepts and Definitions

### 1. Systems

A **system** is an entity that takes an input and produces an output. In the context of computer vision, the input is typically an image, and the output is a processed image.

### 2. Linear Systems

A system is considered **linear** if it satisfies two fundamental properties:

*   **Additivity (Superposition):** If input $x_1$ produces output $y_1$, and input $x_2$ produces output $y_2$, then the input $(x_1 + x_2)$ produces the output $(y_1 + y_2)$.
    *   **In image terms:** If applying filter $F$ to image $I_1$ results in $O_1$, and applying $F$ to image $I_2$ results in $O_2$, then applying $F$ to $(I_1 + I_2)$ will result in $(O_1 + O_2)$.
*   **Homogeneity (Scaling):** If input $x$ produces output $y$, then scaling the input by a constant factor $a$ (i.e., $a \cdot x$) produces an output scaled by the same factor (i.e., $a \cdot y$).
    *   **In image terms:** If applying filter $F$ to image $I$ results in $O$, then applying $F$ to $(a \cdot I)$ will result in $(a \cdot O)$.

**Why is linearity important?** Linearity allows us to break down complex operations into simpler ones and analyze their effects more easily. It also implies that the response to a sum of inputs is the sum of individual responses.

### 3. Shift-Invariance

A system is **shift-invariant** if shifting the input by a certain amount also shifts the output by the same amount, without altering the output's form.

*   **In image terms:** If applying filter $F$ to an image $I$ results in an output image $O$, and we shift the input image $I$ by $(m, n)$ pixels to get $I'$, then applying filter $F$ to $I'$ will result in an output image $O'$ that is the same as shifting the original output $O$ by $(m, n)$ pixels.

**Formal Definition:** Let $S$ be an operator representing the system. A system $S$ is shift-invariant if for any input signal $x(u, v)$ and any shift amounts $m, n$:

$S\{x(u-m, v-n)\} = y(u-m, v-n)$, where $y(u, v) = S\{x(u, v)\}$.

**Why is shift-invariance important?** Shift-invariance means the filter's behavior is consistent across the entire image. Its response depends on the local neighborhood of a pixel, not its absolute position. This is a desirable property for most image processing filters.

### 4. Shift Invariant Linear (SIL) Systems

A system that is both **linear** and **shift-invariant** is called a Shift Invariant Linear (SIL) system.

### 5. Impulse Signal

An **impulse signal** (or delta function) is a signal that is zero everywhere except at a single point, where it has a value of 1. In 2D discrete images, the impulse is represented as:

$\delta(u, v) = \begin{cases} 1 & \text{if } u=0, v=0 \\ 0 & \text{otherwise} \end{cases}$

This is also known as the **Kronecker delta function**.

### 6. The Impulse Response (Kernel)

The **impulse response** (or kernel) of a SIL system is the output of the system when the input is an impulse signal. Let $h(u, v)$ be the impulse response of a 2D system.

**Crucial Property:** For a SIL system, the impulse response completely characterizes the system. This means that if we know the impulse response $h(u, v)$, we can determine the output $y(u, v)$ for *any* input image $x(u, v)$.

### 7. Convolution

**Convolution** is the mathematical operation that describes how a SIL system transforms an input signal using its impulse response. For 2D signals, the convolution of an input image $x(u, v)$ with an impulse response $h(u, v)$ is defined as:

$y(u, v) = (x * h)(u, v) = \sum_{m=-\infty}^{\infty} \sum_{n=-\infty}^{\infty} x(m, n) h(u-m, v-n)$

**In simpler terms:**
1.  Flip the kernel (impulse response) horizontally and vertically.
2.  Slide the flipped kernel over the input image.
3.  At each position, multiply the kernel's values with the corresponding image pixel values under the kernel.
4.  Sum up all these products to get the output pixel value at the corresponding position.

**Example of Convolution (1D):**

Let $x = [1, 2, 3, 4]$ and $h = [0.5, 1, 0.5]$.

To compute $y = x * h$:

*   **Step 1: Flip h:** $h_{flipped} = [0.5, 1, 0.5]$ (for 1D, flipping is the same as reversing).
*   **Step 2 & 3 & 4: Slide and Multiply:**

    *   Position 1: $h_{flipped}$ aligned with the start of $x$. Assume padding for simplicity.
        *   `_ 0.5 1 0.5`
        *   `1 2 3 4`
        *   `y[0] = (0 * 0.5) + (0 * 1) + (1 * 0.5) + (2 * 0) = 0.5` (Assuming we're dealing with indices where the kernel and image overlap)
        *   Let's use a more concrete example with indices and padding.
        *   Let $x = [1, 2, 3]$ and $h = [2, 1]$.
        *   $h_{flipped} = [1, 2]$.

        | Shift | $h_{flipped}$ | $x$           | Product Sum | $y$   |
        | :---- | :------------ | :------------ | :---------- | :---- |
        | 0     | `  1  2`      | `1  2  3`     | `1*1 + 2*0` | 1     | (Pad x with 0 at the beginning)
        | 1     | `1  2`        | `0  1  2  3`  | `1*0 + 2*1` | 2     |
        | 2     | `1  2`        | `0  0  1  2  3`| `1*0 + 2*1` | 3     |
        | 3     | `1  2`        | `0  0  0  1  2  3`| `1*0 + 2*0` | 0     | (No overlap)

        This 1D example isn't ideal. Let's use a better one or stick to 2D intuition.

**2D Convolution Example:**

Let $x$ be a small image and $h$ be a kernel.

$x = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $h = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ (Identity kernel)

1.  **Flip h:** $h_{flipped} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ (This kernel is symmetric, so flipping doesn't change it.)

2.  **Slide the kernel and compute dot products:**

    *   To find $y(0,0)$: Align $h_{flipped}$ with the top-left of $x$.
        $\begin{pmatrix} \mathbf{1} & \mathbf{0} \\ \mathbf{0} & \mathbf{1} \end{pmatrix} \quad \begin{pmatrix} \mathbf{1} & 2 \\ 3 & 4 \end{pmatrix}$
        $y(0,0) = (1 \times 1) + (0 \times 2) + (0 \times 3) + (1 \times 4) = 1 + 0 + 0 + 4 = 5$. This is incorrect for a standard identity kernel.

    Let's correct the definition and example. The common convention for convolution is to flip the kernel.
    $y(u, v) = \sum_{m} \sum_{n} x(u-m, v-n) h(m, n)$

    This is equivalent to:
    $y(u, v) = \sum_{m} \sum_{n} x(m, n) h(u-m, v-n)$ (This is cross-correlation if $h$ is not flipped)

    Let's use the more common image processing definition (often called correlation, but sometimes referred to as convolution where the kernel is implicitly flipped or handled by the indexing).

    **Common Image Processing "Convolution" (often cross-correlation):**
    $y(u, v) = \sum_{m} \sum_{n} x(u+m, v+n) h(m, n)$

    This means we *don't* flip the kernel. We slide it and multiply the overlapping elements and sum.

    **Let's use the standard mathematical definition of convolution:**
    $y(u, v) = \sum_{m} \sum_{n} x(u-m, v-n) h(m, n)$

    $x = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $h = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$

    To compute $y(0,0)$: We need to sum $x(0-m, 0-n)h(m, n)$.
    *   $m=0, n=0$: $x(0,0)h(0,0) = 1 \times 1 = 1$
    *   $m=1, n=0$: $x(-1,0)h(1,0) = 0 \times 0 = 0$ (assuming x is 0 outside its bounds)
    *   $m=0, n=1$: $x(0,-1)h(0,1) = 0 \times 0 = 0$
    *   $m=1, n=1$: $x(-1,-1)h(1,1) = 0 \times 1 = 0$
    So, $y(0,0) = 1$.

    To compute $y(0,1)$: We need to sum $x(0-m, 1-n)h(m, n)$.
    *   $m=0, n=0$: $x(0,1)h(0,0) = 2 \times 1 = 2$
    *   $m=1, n=0$: $x(-1,1)h(1,0) = 0 \times 0 = 0$
    *   $m=0, n=1$: $x(0,0)h(0,1) = 1 \times 0 = 0$
    *   $m=1, n=1$: $x(-1,0)h(1,1) = 0 \times 1 = 0$
    So, $y(0,1) = 2$.

    If we assume the kernel is flipped first:
    $h_{flipped} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ (No change)

    **Let's consider a different kernel:**
    $x = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $h = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$

    1.  **Flip h:** $h_{flipped} = \begin{pmatrix} 4 & 3 \\ 2 & 1 \end{pmatrix}$

    2.  **Convolve (slide, multiply, sum):** (Assuming input $x$ is padded with zeros)

        To compute $y(0,0)$ (center of kernel over pixel 1):
        Kernel aligned:
        `4 3`
        `2 1`
        Image:
        `1 2`
        `3 4`

        The formula $y(u,v) = \sum_m \sum_n x(u-m, v-n) h(m, n)$.
        Let's align $h$ and slide $x$.
        $y(u, v) = \sum_{m} \sum_{n} h(m, n) x(u-m, v-n)$.

        If $h$ is the kernel:
        $y(0,0) = h(0,0)x(0,0) + h(0,1)x(0,-1) + h(1,0)x(-1,0) + h(1,1)x(-1,-1)$
        $y(0,0) = 1*1 + 0*0 + 0*0 + 1*0 = 1$ (Using identity kernel)

        Let's use the example from the book "Computer Vision: Algorithms and Applications" by Szeliski.
        If $I(x, y)$ is the image and $K(x, y)$ is the kernel:
        $I * K = \sum_{u, v} I(x-u, y-v) K(u, v)$

        $I = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $K = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ (Identity Kernel)

        To find the output at $(0,0)$:
        $O(0,0) = \sum_{u,v} I(0-u, 0-v) K(u, v)$
        *   $u=0, v=0$: $I(0,0) K(0,0) = 1 \times 1 = 1$
        *   $u=1, v=0$: $I(-1,0) K(1,0) = 0 \times 0 = 0$
        *   $u=0, v=1$: $I(0,-1) K(0,1) = 0 \times 0 = 0$
        *   $u=1, v=1$: $I(-1,-1) K(1,1) = 0 \times 1 = 0$
        $O(0,0) = 1$.

        To find the output at $(0,1)$:
        $O(0,1) = \sum_{u,v} I(0-u, 1-v) K(u, v)$
        *   $u=0, v=0$: $I(0,1) K(0,0) = 2 \times 1 = 2$
        *   $u=1, v=0$: $I(-1,1) K(1,0) = 0 \times 0 = 0$
        *   $u=0, v=1$: $I(0,0) K(0,1) = 1 \times 0 = 0$
        *   $u=1, v=1$: $I(-1,0) K(1,1) = 0 \times 1 = 0$
        $O(0,1) = 2$.

        So, for the identity kernel, the output is the same as the input.

        **Let's use a different kernel:**
        $I = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $K = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$ (Averaging/Blurring kernel - sum of elements is 4)

        To find the output at $(0,0)$:
        $O(0,0) = \sum_{u,v} I(0-u, 0-v) K(u, v)$
        *   $u=0, v=0$: $I(0,0) K(0,0) = 1 \times 1 = 1$
        *   $u=1, v=0$: $I(-1,0) K(1,0) = 0 \times 1 = 0$
        *   $u=0, v=1$: $I(0,-1) K(0,1) = 0 \times 1 = 0$
        *   $u=1, v=1$: $I(-1,-1) K(1,1) = 0 \times 1 = 0$
        $O(0,0) = 1$.

        To find the output at $(0,1)$:
        $O(0,1) = \sum_{u,v} I(0-u, 1-v) K(u, v)$
        *   $u=0, v=0$: $I(0,1) K(0,0) = 2 \times 1 = 2$
        *   $u=1, v=0$: $I(-1,1) K(1,0) = 0 \times 1 = 0$
        *   $u=0, v=1$: $I(0,0) K(0,1) = 1 \times 1 = 1$
        *   $u=1, v=1$: $I(-1,0) K(1,1) = 0 \times 1 = 0$
        $O(0,1) = 2 + 1 = 3$.

        To find the output at $(1,0)$:
        $O(1,0) = \sum_{u,v} I(1-u, 0-v) K(u, v)$
        *   $u=0, v=0$: $I(1,0) K(0,0) = 3 \times 1 = 3$
        *   $u=1, v=0$: $I(0,0) K(1,0) = 1 \times 1 = 1$
        *   $u=0, v=1$: $I(1,-1) K(0,1) = 0 \times 1 = 0$
        *   $u=1, v=1$: $I(0,-1) K(1,1) = 0 \times 1 = 0$
        $O(1,0) = 3 + 1 = 4$.

        To find the output at $(1,1)$:
        $O(1,1) = \sum_{u,v} I(1-u, 1-v) K(u, v)$
        *   $u=0, v=0$: $I(1,1) K(0,0) = 4 \times 1 = 4$
        *   $u=1, v=0$: $I(0,1) K(1,0) = 2 \times 1 = 2$
        *   $u=0, v=1$: $I(1,0) K(0,1) = 3 \times 1 = 3$
        *   $u=1, v=1$: $I(0,0) K(1,1) = 1 \times 1 = 1$
        $O(1,1) = 4 + 2 + 3 + 1 = 10$.

        So, the output for $K = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$ is:
        $O = \begin{pmatrix} 1 & 3 \\ 4 & 10 \end{pmatrix}$

        **Important Note on Padding:** When performing convolution, especially with kernels, the input image often needs to be padded with zeros (or other values) to handle boundary pixels correctly. This prevents the output image from shrinking and ensures that all pixels in the input contribute to the output.

### 8. Properties of SIL Systems and Convolution

*   **Commutativity:** $x * h = h * x$. The order of the input and kernel doesn't matter.
*   **Associativity:** $(x * h_1) * h_2 = x * (h_1 * h_2)$. Cascading SIL systems is equivalent to convolving their impulse responses.
*   **Distributivity:** $x * (h_1 + h_2) = (x * h_1) + (x * h_2)$. A system with an impulse response that is the sum of two other impulse responses behaves like the sum of the individual systems.

### 9. Frequency Domain Analysis

The power of SIL systems is amplified when viewed in the frequency domain using the **Fourier Transform**.

*   **Fourier Transform (FT):** Decomposes a signal into its constituent frequencies. For a 2D image $I(u, v)$, its Fourier Transform is $F(\omega_u, \omega_v)$.
*   **Inverse Fourier Transform (IFT):** Reconstructs the signal from its frequency components.

**Key Theorem: Convolution Theorem**
The convolution of two signals in the spatial domain is equivalent to the element-wise multiplication of their Fourier Transforms in the frequency domain.

$F\{x * h\} = F\{x\} \cdot F\{h\}$
$Y(\omega_u, \omega_v) = X(\omega_u, \omega_v) \cdot H(\omega_u, \omega_v)$

Where:
*   $Y(\omega_u, \omega_v)$ is the Fourier Transform of the output $y(u, v)$.
*   $X(\omega_u, \omega_v)$ is the Fourier Transform of the input $x(u, v)$.
*   $H(\omega_u, \omega_v) = F\{h(u, v)\}$ is the **Frequency Response** or **Transfer Function** of the system.

**Significance:**
*   **Efficient Computation:** Convolution in the spatial domain is computationally expensive (O(N^2 * M^2) where N, M are image dimensions and kernel size). Convolution in the frequency domain is much faster (O(N^2 log N^2) using FFT).
*   **Understanding Filter Effects:** The frequency response $H(\omega_u, \omega_v)$ tells us how the system amplifies or attenuates different frequencies.
    *   **Low-pass filters:** Have high values at low frequencies and low values at high frequencies (e.g., blurring).
    *   **High-pass filters:** Have low values at low frequencies and high values at high frequencies (e.g., edge detection).
    *   **Band-pass filters:** Allow a specific range of frequencies.

**Process for Frequency Domain Filtering:**
1.  Compute the Fourier Transform of the input image $X(\omega_u, \omega_v)$.
2.  Compute the Fourier Transform of the kernel $H(\omega_u, \omega_v)$.
3.  Perform element-wise multiplication: $Y(\omega_u, \omega_v) = X(\omega_u, \omega_v) \cdot H(\omega_u, \omega_v)$.
4.  Compute the Inverse Fourier Transform of $Y(\omega_u, \omega_v)$ to get the filtered image $y(u, v)$.

### 10. Common Kernels and Their Effects

Kernels are the "filters" that define the impulse response of SIL systems.

*   **Identity Kernel:**
    $K = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}$
    *   Effect: No change to the image. The output is identical to the input.

*   **Averaging/Box Filter:**
    $K = \frac{1}{N^2} \begin{pmatrix} 1 & 1 & \dots & 1 \\ 1 & 1 & \dots & 1 \\ \vdots & \vdots & \ddots & \vdots \\ 1 & 1 & \dots & 1 \end{pmatrix}$ (N x N matrix)
    *   Example (3x3): $K = \frac{1}{9} \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}$
    *   Effect: Blurs the image by averaging pixel values in a neighborhood. Reduces noise but also blurs edges.

*   **Gaussian Filter:**
    Uses a Gaussian function to weight pixels. The central pixels have higher weights.
    $G(x, y) = \frac{1}{2 \pi \sigma^2} e^{-\frac{x^2 + y^2}{2 \sigma^2}}$
    *   $\sigma$ (sigma) controls the amount of blurring. Higher $\sigma$ means more blurring.
    *   Effect: Provides a smooth, isotropic blur. It's often preferred over the box filter as it reduces noise while preserving features better.

*   **Sobel Operator (Edge Detection):**
    Uses two kernels to approximate the image gradient in the x and y directions.
    $K_x = \begin{pmatrix} -1 & 0 & 1 \\ -2 & 0 & 2 \\ -1 & 0 & 1 \end{pmatrix}$, $K_y = \begin{pmatrix} -1 & -2 & -1 \\ 0 & 0 & 0 \\ 1 & 2 & 1 \end{pmatrix}$
    *   Effect: Highlights areas of rapid intensity change, which correspond to edges. The output shows the strength and direction of the gradient.

*   **Laplacian Operator (Edge Detection):**
    Approximates the second derivative of the image.
    $K = \begin{pmatrix} 0 & 1 & 0 \\ 1 & -4 & 1 \\ 0 & 1 & 0 \end{pmatrix}$ or $K = \begin{pmatrix} 1 & 1 & 1 \\ 1 & -8 & 1 \\ 1 & 1 & 1 \end{pmatrix}$
    *   Effect: Detects edges and corners. It's sensitive to noise.

### 11. Applications in Computer Vision

*   **Image Smoothing/Denoising:** Gaussian and averaging filters reduce random noise.
*   **Edge Detection:** Sobel, Prewitt, and Laplacian operators highlight image boundaries.
*   **Feature Extraction:** Derivatives computed using convolution are fundamental for detecting corners, blobs, and other features.
*   **Image Resizing:** Convolution with specific kernels can be used for downsampling (blurring before subsampling) and upsampling.
*   **Image Sharpening:** Inverse filtering techniques can attempt to restore sharp details.

## Important Points to Remember

*   **Linearity and Shift-Invariance are key properties** that define a large class of useful image processing operations.
*   **Convolution** is the fundamental operation that implements SIL systems.
*   The **impulse response (kernel)** completely characterizes a SIL system.
*   The **Convolution Theorem** is crucial for understanding how filters affect images in the frequency domain and for efficient implementation using FFT.
*   Different kernels lead to different **filtering effects** (blurring, edge detection, etc.).
*   **Padding** is important for correct convolution at image boundaries.

## Practice Questions/Exercises

**Question 1:**
Define linearity and shift-invariance for a system. Why are these properties important in image processing?

**Answer:**
*   **Linearity:** A system is linear if it satisfies additivity (superposition) and homogeneity (scaling).
    *   *Additivity:* $S(x_1 + x_2) = S(x_1) + S(x_2)$
    *   *Homogeneity:* $S(a \cdot x) = a \cdot S(x)$
*   **Shift-Invariance:** A system is shift-invariant if shifting the input also shifts the output by the same amount without changing its form.
    *   $S(x(u-m, v-n)) = y(u-m, v-n)$, where $y = S(x)$.
*   **Importance:** Linearity allows us to decompose complex signals and analyze system behavior by understanding its response to basic inputs. Shift-invariance ensures that the filter's behavior is consistent across the entire image, independent of pixel location. Together, they make image processing predictable and analyzable.

---

**Question 2:**
If an input image $I$ is convolved with a kernel $K$ to produce an output image $O$, what is the relationship between the Fourier Transforms of $I$, $K$, and $O$? State the relevant theorem.

**Answer:**
The relationship is described by the **Convolution Theorem**:
$F\{I * K\} = F\{I\} \cdot F\{K\}$
In the frequency domain: $O(\omega_u, \omega_v) = I(\omega_u, \omega_v) \cdot K(\omega_u, \omega_v)$.
This means the Fourier Transform of the output is the element-wise product of the Fourier Transforms of the input image and the kernel.

---

**Question 3:**
Consider a 1D signal $x = [1, 2, 3, 4]$ and a kernel $h = [0.5, 1, 0.5]$. Compute the 1D convolution $y = x * h$. Assume appropriate padding (e.g., zero-padding).

**Answer:**
The convolution is given by $y(i) = \sum_{j} x(i-j) h(j)$.
Kernel $h = [0.5, 1, 0.5]$.
We need to flip and slide $h$. The flipped kernel is $h_{flipped} = [0.5, 1, 0.5]$.

Let's use the standard definition: $y(i) = \sum_{j} x(j) h(i-j)$.
This is equivalent to sliding $h$ and multiplying the overlapping elements with $x$.

$x = [1, 2, 3, 4]$
$h = [0.5, 1, 0.5]$

Let's assume $h$ is indexed $j=0, 1, 2$.
$y(i) = x(i)h(0) + x(i-1)h(1) + x(i-2)h(2)$ (using indices of h)

To make it easier, let's think of it as sliding $h$ over $x$:
`  0.5   1   0.5`
`1   2   3   4`

*   For the first output element (aligning $h[0]$ with $x[0]$):
    `0.5`
    `1`
    $y[0] = 1 \times 0.5 = 0.5$ (Assuming $x$ is padded with zeros before index 0)

Let's use the full convolution formula with sufficient padding:
$x = [0, 1, 2, 3, 4, 0]$
$h = [0.5, 1, 0.5]$

$y[0] = x[0]h[0] + x[-1]h[1] + x[-2]h[2] = 0*0.5 + 0*1 + 0*0.5 = 0$
$y[1] = x[1]h[0] + x[0]h[1] + x[-1]h[2] = 1*0.5 + 0*1 + 0*0.5 = 0.5$
$y[2] = x[2]h[0] + x[1]h[1] + x[0]h[2] = 2*0.5 + 1*1 + 0*0.5 = 1 + 1 = 2$
$y[3] = x[3]h[0] + x[2]h[1] + x[1]h[2] = 3*0.5 + 2*1 + 1*0.5 = 1.5 + 2 + 0.5 = 4$
$y[4] = x[4]h[0] + x[3]h[1] + x[2]h[2] = 4*0.5 + 3*1 + 2*0.5 = 2 + 3 + 1 = 6$
$y[5] = x[5]h[0] + x[4]h[1] + x[3]h[2] = 0*0.5 + 4*1 + 3*0.5 = 0 + 4 + 1.5 = 5.5$
$y[6] = x[6]h[0] + x[5]h[1] + x[4]h[2] = 0*0.5 + 0*1 + 4*0.5 = 2$

So, $y = [0, 0.5, 2, 4, 6, 5.5, 2]$ (or a subset depending on output size definition).
If we assume the output size is $|x| + |h| - 1$, then $4 + 3 - 1 = 6$ elements.
$y = [0.5, 2, 4, 6, 5.5, 2]$ (if we exclude the first zero for proper alignment).

Let's re-evaluate using a visual slide:
`x:    1  2  3  4`
`h: 0.5  1  0.5`

Slide 1 (align h[0] with x[0]):
`0.5 * 1 = 0.5` (Assume x[-1] = 0, h[1]=h[2]=0)
`y[0] = 0.5`

Slide 2 (align h[1] with x[0]):
`  0.5  1  0.5`
`1  2  3  4`
`y[0] = 1*0.5 = 0.5` (This is if kernel is applied symmetrically)

Let's be clear: $y_i = \sum_j x_{i-j}h_j$.
$x = [1, 2, 3, 4]$ (indexed 0, 1, 2, 3)
$h = [0.5, 1, 0.5]$ (indexed 0, 1, 2)

$y_0 = x_0 h_0 + x_{-1} h_1 + x_{-2} h_2 = 1*0.5 + 0*1 + 0*0.5 = 0.5$ (assuming padding)
$y_1 = x_1 h_0 + x_0 h_1 + x_{-1} h_2 = 2*0.5 + 1*1 + 0*0.5 = 1 + 1 = 2$
$y_2 = x_2 h_0 + x_1 h_1 + x_0 h_2 = 3*0.5 + 2*1 + 1*0.5 = 1.5 + 2 + 0.5 = 4$
$y_3 = x_3 h_0 + x_2 h_1 + x_1 h_2 = 4*0.5 + 3*1 + 2*0.5 = 2 + 3 + 1 = 6$
$y_4 = x_4 h_0 + x_3 h_1 + x_2 h_2 = 0*0.5 + 4*1 + 3*0.5 = 0 + 4 + 1.5 = 5.5$
$y_5 = x_5 h_0 + x_4 h_1 + x_3 h_2 = 0*0.5 + 0*1 + 4*0.5 = 2$

So, $y = [0.5, 2, 4, 6, 5.5, 2]$. This is the standard result for causal convolution with padding.

---

**Question 4:**
Describe the effect of a box filter and a Gaussian filter. Which one is generally preferred for denoising and why?

**Answer:**
*   **Box Filter:** Averages pixel values in a rectangular neighborhood. It results in blurring and can cause "blocky" artifacts. It's simple but can smooth out features as well as noise.
*   **Gaussian Filter:** Uses a Gaussian kernel, giving more weight to pixels closer to the center. This results in a smoother blur.
*   **Preference for Denoising:** The Gaussian filter is generally preferred for denoising. This is because its smooth, weighted averaging is less likely to introduce artifacts and tends to preserve image features (like edges) better than a box filter, which applies uniform weights to all pixels in the neighborhood. The Gaussian kernel also has desirable frequency domain properties (smooth frequency response) that contribute to better denoising.

---

**Question 5:**
If a system has an impulse response $h_1(u,v)$ and is cascaded with a system with impulse response $h_2(u,v)$, what is the impulse response of the combined system?

**Answer:**
According to the associativity property of convolution for SIL systems, the impulse response of the combined system is the convolution of the individual impulse responses:
$h_{combined}(u,v) = h_1(u,v) * h_2(u,v)$
