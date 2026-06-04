---
title: "high pass filtering"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 3: Image Enhancement: Spatial domain methods: Basic Gray Level Transformations"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff516"
status: "completed"
scrapedAt: "2026-05-23T18:06:50.083Z"
---
# DIGITAL IMAGE PROCESSING

## Module 3: Image Enhancement: Spatial Domain Methods

### Topic: High-Pass Filtering

---

**Learning Outcomes:**

*   Understand the fundamental principles of high-pass filtering in the spatial domain.
*   Be able to explain how high-pass filters work to enhance image details.
*   Differentiate between various types of high-pass filters and their applications.
*   Understand the relationship between high-pass filtering and gradient calculation.
*   Be able to implement or analyze the results of high-pass filtering operations.

---

**Course Outcomes Alignment:**

*   **CO2: Analyze the various concepts and mathematical transforms necessary for image processing (Knowledge Level: K3)** - High-pass filtering is fundamentally based on spatial derivatives and convolution, which are core mathematical concepts in image processing. This topic delves into how these concepts are applied for enhancement.
*   **CO4: Analyze the filtering and restoration of images (Knowledge Level: K3)** - High-pass filtering is a crucial technique for image enhancement, which is a subset of filtering. Understanding its mechanisms directly contributes to analyzing image filtering processes.

---

### 1. Introduction to High-Pass Filtering

**Key Concept:** High-pass filtering in the spatial domain is an image enhancement technique that emphasizes or accentuates fine details in an image, such as edges, lines, and noise. Unlike low-pass filters that smooth an image, high-pass filters aim to sharpen it.

**How it Works:**

*   **Frequency Domain Analogy:** While we are in the spatial domain, the concept originates from the frequency domain. In the frequency domain, high-pass filters allow high-frequency components (which correspond to rapid changes in intensity, i.e., edges) to pass through while attenuating low-frequency components (which correspond to smooth regions).
*   **Spatial Domain Operation:** In the spatial domain, this is achieved by using filters (kernels or masks) that respond strongly to differences in pixel intensity. These filters typically have a center coefficient that is positive and surrounding coefficients that are negative, summing to zero.

**Core Idea:** High-pass filters are designed to amplify or reveal differences in pixel values within a neighborhood. These differences are often indicative of edges or fine details.

---

### 2. Relationship to Derivatives

**Key Concept:** High-pass filtering is closely related to the computation of image gradients, which are measures of the rate of change of intensity.

*   **First-Order Derivatives (Gradient):** The gradient of an image at a point $(x, y)$ is a vector pointing in the direction of the greatest intensity increase, and its magnitude is that greatest rate of increase.
    *   $∇f = \begin{bmatrix} \frac{\partial f}{\partial x} \\ \frac{\partial f}{\partial y} \end{bmatrix}$
    *   Magnitude: $|∇f| = \sqrt{(\frac{\partial f}{\partial x})^2 + (\frac{\partial f}{\partial y})^2}$
    *   Direction: $α = arctan(\frac{\partial f}{\partial y} / \frac{\partial f}{\partial x})$
    *   **Spatial Domain Approximation:** In digital images, derivatives are approximated using finite differences. For example:
        *   $\frac{\partial f}{\partial x} \approx f(x+1, y) - f(x, y)$ (Forward difference)
        *   $\frac{\partial f}{\partial x} \approx f(x, y) - f(x-1, y)$ (Backward difference)
        *   $\frac{\partial f}{\partial x} \approx \frac{f(x+1, y) - f(x-1, y)}{2}$ (Central difference, more accurate)

*   **Second-Order Derivatives (Laplacian):** The Laplacian is the sum of the second partial derivatives:
    *   $∇^2f = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2}$
    *   **Spatial Domain Approximation (using central differences):**
        *   $\frac{\partial^2 f}{\partial x^2} \approx f(x+1, y) - 2f(x, y) + f(x-1, y)$
        *   $\frac{\partial^2 f}{\partial y^2} \approx f(x, y+1) - 2f(x, y) + f(x, y-1)$
        *   **Laplacian Approximation:**
            $∇^2f(x, y) \approx [f(x+1, y) + f(x-1, y) + f(x, y+1) + f(x, y-1)] - 4f(x, y)$

**Key Observation:** The Laplacian operator is zero in areas of constant intensity or linear intensity ramps. It is non-zero at points where the intensity changes rapidly, such as edges.

---

### 3. High-Pass Filtering Kernels

High-pass filters are typically implemented using convolution with specific kernels (masks). These kernels are designed to amplify differences.

**A. Laplacian Filters:**

The Laplacian operator itself can be directly used as a basis for high-pass filtering.

*   **Basic Laplacian Kernel (4-connected neighbors):**
    ```
    [ 0  1  0 ]
    [ 1 -4  1 ]
    [ 0  1  0 ]
    ```
    When convolved with an image, this kernel highlights areas with rapid changes in intensity. The output is a representation of the image's second derivative.

*   **Laplacian Kernel (8-connected neighbors):**
    ```
    [ 1  1  1 ]
    [ 1 -8  1 ]
    [ 1  1  1 ]
    ```
    This version considers all eight neighbors of the center pixel.

**Operation:**
To use these kernels for enhancement, we can modify the original image $f(x, y)$ as follows:

$g(x, y) = f(x, y) + c \cdot ∇^2f(x, y)$

where $c$ is a constant.

*   If $c = -1$, this becomes $g(x, y) = f(x, y) - ∇^2f(x, y)$. This operation is equivalent to adding the Laplacian to the original image, effectively enhancing edges.
*   Often, the result of the Laplacian convolution (which will have negative values) is added to the original image. To avoid negative values, clipping or scaling might be applied.

**Example (Gonzalez & Woods, 4th Ed., Chapter 3.2.2):**
Let $f(x, y)$ be the input image and $h(x, y)$ be the Laplacian kernel.
$g(x, y) = f(x, y) - h(x, y)$
If $h(x, y)$ is the basic Laplacian kernel:
$g(x, y) = f(x, y) - [f(x+1, y) + f(x-1, y) + f(x, y+1) + f(x, y-1) - 4f(x, y)]$
$g(x, y) = 5f(x, y) - f(x+1, y) - f(x-1, y) - f(x, y+1) - f(x, y-1)$
This can be seen as an unsharp masking operation where the mask is the Laplacian.

**B. Unsharp Masking:**

**Key Concept:** Unsharp masking is a widely used technique for sharpening images. It works by subtracting a blurred version of the image from the original image to obtain a "mask" that highlights details, and then adding this mask back to the original image.

**Steps:**

1.  **Blur the image:** Create a blurred version of the original image, $f_{blur}(x, y)$, typically using a Gaussian low-pass filter.
2.  **Create the mask:** Calculate the mask by subtracting the blurred image from the original image:
    $mask(x, y) = f(x, y) - f_{blur}(x, y)$
    This mask contains the high-frequency components (details and edges).
3.  **Add the mask to the original image:** Amplify the mask by a factor $k$ and add it to the original image:
    $g(x, y) = f(x, y) + k \cdot mask(x, y)$
    $g(x, y) = f(x, y) + k \cdot (f(x, y) - f_{blur}(x, y))$
    $g(x, y) = (1+k)f(x, y) - k \cdot f_{blur}(x, y)$

**Choice of $k$:**
*   $k=1$ implies $g(x, y) = 2f(x, y) - f_{blur}(x, y)$.
*   A typical value for $k$ is between 0.5 and 1.0.

**Connection to Laplacian:** Unsharp masking is closely related to high-pass filtering. The mask $f(x, y) - f_{blur}(x, y)$ essentially acts like a high-pass filter. The Laplacian can be viewed as a specific type of high-pass filter that approximates the second derivative.

**Textbook Reference:**
*   **Gonzalez & Woods (4th Ed.):** Discusses unsharp masking and its relation to sharpening, and also covers Laplacian-based filtering in detail in Chapter 3.
*   **Jayaraman et al.:** Likely covers these concepts as fundamental spatial domain enhancement techniques in their image enhancement chapters.

---

### 4. High-Frequency Emphasis Filters

**Key Concept:** These filters are a broader category of spatial domain filters designed to pass high frequencies and attenuate low frequencies. They are derived from the general form of a smoothing filter (low-pass filter).

**Relationship to Smoothing:**
Consider a general smoothing (low-pass) filter with kernel $h_{LP}(x, y)$ such that $\sum h_{LP}(x, y) = 1$.
A corresponding high-frequency emphasis filter $h_{HPF}(x, y)$ can be created using:

$h_{HPF}(x, y) = δ(x, y) - h_{LP}(x, y)$

where $δ(x, y)$ is a Dirac delta function (a kernel with 1 at the center and 0 elsewhere).

**Operation:**
When convolved with an image $f(x, y)$:
$g(x, y) = f(x, y) * h_{HPF}(x, y)$
$g(x, y) = f(x, y) * (δ(x, y) - h_{LP}(x, y))$
$g(x, y) = f(x, y) * δ(x, y) - f(x, y) * h_{LP}(x, y)$
$g(x, y) = f(x, y) - f_{blur}(x, y)$

This is exactly the mask obtained in unsharp masking.

**General High-Frequency Emphasis Filter:**
A more general form of high-frequency emphasis filtering can be expressed as:

$g(x, y) = f(x, y) + k \cdot [f(x, y) - f_{blur}(x, y)]$
$g(x, y) = (1+k)f(x, y) - k \cdot f_{blur}(x, y)$

Here, $f_{blur}(x, y)$ is the result of convolving $f(x, y)$ with a low-pass filter. The term $f(x, y) - f_{blur}(x, y)$ represents the high-frequency components. By adding a scaled version of these high-frequency components to the original image, we emphasize details.

**Example Kernels:**

Consider a $3 \times 3$ smoothing filter (e.g., average filter):
$h_{LP} = \frac{1}{9} \begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{bmatrix}$

The corresponding high-pass kernel would be:
$h_{HPF} = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{bmatrix} - \frac{1}{9} \begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{bmatrix} = \frac{1}{9} \begin{bmatrix} -1 & -1 & -1 \\ -1 & 8 & -1 \\ -1 & -1 & -1 \end{bmatrix}$

This is a variation of the Laplacian kernel.

---

### 5. Applications of High-Pass Filtering

*   **Edge Detection:** High-pass filters are the fundamental building blocks for many edge detection algorithms. By highlighting regions of rapid intensity change, they isolate edges.
*   **Noise Reduction (Selective):** While low-pass filters are primarily for noise reduction, high-pass filters can selectively enhance fine details that might be corrupted by noise. However, they can also amplify noise if it contains high-frequency components.
*   **Detail Enhancement:** Sharpening images to make details more visible, especially in areas that are slightly out of focus or have lost contrast.
*   **Feature Extraction:** Identifying specific patterns or features within an image that are characterized by sharp transitions.

---

### 6. Important Points to Remember

*   **High-pass filters emphasize details, edges, and noise.** They are used for sharpening.
*   **They are the complement of low-pass filters.** Low-pass filters smooth and blur; high-pass filters sharpen and highlight rapid changes.
*   **The Laplacian operator is a key tool.** Its spatial approximations (kernels) are fundamental to many high-pass filtering techniques.
*   **Unsharp masking is a practical implementation.** It involves subtracting a blurred version of the image from the original and adding the result back.
*   **The output of high-pass filtering often needs careful handling.** Negative pixel values might occur, requiring clipping or scaling. The amplified details might also exceed the displayable range.
*   **Choosing the right filter and parameters (e.g., kernel size, blur radius, amplification factor $k$) is crucial for effective enhancement.**

---

### 7. Practice Questions and Answers

**Question 1:**
What is the primary effect of a high-pass filter on an image?
a) Smoothing and blurring
b) Sharpening and accentuating details
c) Color conversion
d) Geometric transformation

**Answer:** b) Sharpening and accentuating details

**Question 2:**
Which of the following is closely related to the operation of high-pass filtering in the spatial domain?
a) Gaussian smoothing
b) Median filtering
c) Gradient calculation (derivatives)
d) Histogram equalization

**Answer:** c) Gradient calculation (derivatives)

**Question 3:**
Consider the following $3 \times 3$ kernel used in high-pass filtering:

```
[ 0  1  0 ]
[ 1 -4  1 ]
[ 0  1  0 ]
```
This kernel is an approximation of which operator?
a) Sobel operator
b) Prewitt operator
c) Laplacian operator
d) Roberts cross operator

**Answer:** c) Laplacian operator

**Question 4:**
Describe the steps involved in the unsharp masking technique for image sharpening.

**Answer:**
1.  **Blur the original image:** Create a blurred version of the input image $f(x, y)$, denoted as $f_{blur}(x, y)$, using a low-pass filter (e.g., Gaussian).
2.  **Create the detail mask:** Subtract the blurred image from the original image: $mask(x, y) = f(x, y) - f_{blur}(x, y)$. This mask highlights the fine details.
3.  **Sharpen the image:** Add a scaled version of the mask to the original image: $g(x, y) = f(x, y) + k \cdot mask(x, y)$, where $k$ is a scaling factor (typically $k \ge 1$ to enhance details).

**Question 5:**
What is a potential drawback of using high-pass filters for image enhancement?

**Answer:** High-pass filters can amplify noise present in the image, as noise often contains high-frequency components.

**Question 6:**
Write down the formula for sharpening an image using the Laplacian operator.

**Answer:**
The sharpening formula using the Laplacian operator is generally given by:
$g(x, y) = f(x, y) - c \cdot ∇^2f(x, y)$
where $f(x, y)$ is the original image, $∇^2f(x, y)$ is the Laplacian of the image, and $c$ is a positive constant (often $c=1$). This effectively adds the high-frequency components (represented by the Laplacian) back to the original image.

**Question 7 (Conceptual/Implementation):**
You are given an image with smooth regions and sharp edges. How would you use a high-pass filter to make the edges appear more pronounced?

**Answer:**
You would convolve the image with a high-pass filter kernel. The kernel should be designed to respond strongly to differences in pixel intensity. Kernels like the Laplacian (e.g., the $3 \times 3$ kernel with -4 at the center and +1 for its neighbors) are suitable. The result of this convolution will highlight the edges. To integrate these highlighted edges back into the original image, you would typically add the convolved result (possibly after scaling and handling negative values) to the original image. For example, using the Laplacian: $g(x, y) = f(x, y) + Laplacian(f(x, y))$.

---

This concludes the notes on High-Pass Filtering in the spatial domain. Remember that these techniques are part of a broader set of spatial domain enhancement methods and are often used in conjunction with other operations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
