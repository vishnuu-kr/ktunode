---
title: "high pass filtering"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 3: Image Enhancement: Spatial domain methods: Basic Gray Level Transformations"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee26"
status: "completed"
scrapedAt: "2026-05-23T18:00:43.599Z"
---
# Digital Image Processing: Module 3 - Image Enhancement: Spatial Domain Methods: Basic Gray Level Transformations - High Pass Filtering

---

## Introduction to Image Enhancement

Image enhancement aims to improve the visual appearance of an image or to convert it into a form more suitable for further image processing tasks. Spatial domain methods operate directly on the pixels of an image.

**Relationship to Course Outcomes:** This topic directly contributes to **CO4: Analyze the filtering and restoration of images** by introducing a fundamental filtering technique.

---

## 1. Spatial Domain Methods: Basic Gray Level Transformations

These methods involve manipulating the pixel values in an image. They are often characterized by the equation:
$g(x, y) = T[f(x, y)]$
where:
*   $f(x, y)$ is the input image.
*   $g(x, y)$ is the output image.
*   $T$ is a transformation applied to the pixel at coordinates $(x, y)$.

This module focuses on **Neighborhood Processing**, where the transformation at a point $(x, y)$ depends on the gray values in a neighborhood of $(x, y)$.

---

## 2. High Pass Filtering

High-pass filtering is a spatial domain technique used to **sharpen** an image by **accentuating fine details and edges**. It works by attenuating low-frequency components (smooth regions) and amplifying high-frequency components (edges, noise, and fine details).

**Key Concept:** In the spatial domain, edges and fine details correspond to areas with rapid changes in gray levels. These rapid changes are represented by **high-frequency components**. Conversely, smooth regions with gradual changes in gray levels represent **low-frequency components**.

**Relationship to Course Outcomes:** This section directly addresses **CO4: Analyze the filtering and restoration of images** by explaining the mechanism and application of high-pass filtering.

### 2.1. How High-Pass Filtering Works (Conceptual Understanding)

Imagine an image as a landscape.
*   **Low frequencies:** Represent the general terrain, hills, and valleys – smooth, slow changes in elevation.
*   **High frequencies:** Represent sharp cliffs, sudden drops, or intricate details on a surface – rapid changes in elevation.

A high-pass filter is like a tool that "enhances" the sharp features while making the smooth terrain appear flatter or less prominent.

### 2.2. Relationship to Frequency Domain Filtering

While implemented in the spatial domain, the concept of high-pass filtering is analogous to its frequency domain counterpart. In the frequency domain, a high-pass filter allows high frequencies to pass through while blocking low frequencies. This leads to the sharpening effect.

**Textbook Reference:** Gonzalez & Woods (4th Ed.) discusses the relationship between spatial and frequency domain filtering in Chapters 4 and 5. High-pass filtering in the spatial domain is conceptually linked to high-frequency emphasis in the frequency domain.

### 2.3. High-Pass Filtering Kernels (Filters)

High-pass filters are implemented using convolution with a kernel (or mask, or window). The kernel is a small matrix of coefficients. The output pixel value is calculated by summing the products of the kernel coefficients and the corresponding underlying image pixel values.

The general form of a convolution operation for a kernel $w$ and an image $f$ to produce an output image $g$ is:
$g(x, y) = \sum_{i=0}^{m-1} \sum_{j=0}^{n-1} w(i, j) f(x+i, y+j)$ (for unnormalized kernels)
or more commonly in digital image processing:
$g(x, y) = \sum_{i=-a}^{a} \sum_{j=-b}^{b} w(i, j) f(x+i, y+j)$ (for centered kernels)
where $w(i, j)$ are the coefficients of the kernel of size $(2a+1) \times (2b+1)$.

**Key Property of High-Pass Kernels:**
*   The sum of all coefficients in a high-pass filter kernel is typically **zero**. This is crucial because it means that areas of constant intensity (low frequencies) will result in an output of zero, effectively removing them.
*   The central coefficient is usually positive and larger than the surrounding negative coefficients.

### 2.4. Types of High-Pass Filters

#### 2.4.1. Laplacian Filter

The Laplacian is a second-order derivative operator. In image processing, it is used to detect regions of rapid intensity change.

**Mathematical Definition:**
The Laplacian of an image $f(x, y)$ is defined as:
$\nabla^2 f = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2}$

**Approximation in Discrete Domain:**
Several approximations exist for the Laplacian. Two common ones are:

*   **Second-order difference approximation (e.g., 4-neighbor connectivity):**
    $\nabla^2 f(x, y) \approx f(x+1, y) + f(x-1, y) + f(x, y+1) + f(x, y-1) - 4f(x, y)$

    This corresponds to the kernel:
    ```
    [ 0  1  0 ]
    [ 1 -4  1 ]
    [ 0  1  0 ]
    ```

*   **Second-order difference approximation (e.g., 8-neighbor connectivity):**
    $\nabla^2 f(x, y) \approx f(x+1, y+1) + f(x+1, y-1) + f(x-1, y+1) + f(x-1, y-1) + f(x+1, y) + f(x-1, y) + f(x, y+1) + f(x, y-1) - 8f(x, y)$

    This corresponds to the kernel:
    ```
    [  1  1  1 ]
    [  1 -8  1 ]
    [  1  1  1 ]
    ```
    *(Note: The sum of coefficients in both kernels is zero).*

**Laplacian Filtering for Enhancement:**
The output of the Laplacian is a representation of the edges and fine details. To enhance the original image, we can add the Laplacian result back to the original image:

$g(x, y) = f(x, y) - \nabla^2 f(x, y)$  (Subtracting the Laplacian amplifies edges)
or
$g(x, y) = f(x, y) + c \nabla^2 f(x, y)$ (where $c$ is a positive constant to control the amount of sharpening)

**Example:**
Consider a simple 3x3 image patch:
```
[ 100  100  100 ]
[ 100  200  100 ]
[ 100  100  100 ]
```
The center pixel has a value of 200, surrounded by pixels with value 100. This represents a bright spot or edge.

Using the 4-neighbor Laplacian kernel centered on the 200 pixel:
Output = (100 + 100 + 100 + 100) - 4 * 200
Output = 400 - 800 = -400

If we use the enhancement formula $g(x, y) = f(x, y) - \nabla^2 f(x, y)$:
Enhanced output at the center = 200 - (-400) = 600.
This significantly amplifies the edge.

**Textbook Reference:** Jayaraman, Esakkirajan, & Veerakumar (1st Ed.) and Castleman (2nd Ed.) provide detailed explanations and examples of Laplacian filters and their application in sharpening.

**Important Point:** The output of Laplacian filtering can have negative values. These need to be handled appropriately, usually by clipping or by adding a constant offset to make them non-negative. The sum of coefficients being zero means that areas of constant gray level will result in zero in the Laplacian output.

#### 2.4.2. Unsharp Masking

Unsharp masking is a widely used sharpening technique that is more robust than simply adding the Laplacian. It involves:
1.  Creating a blurred version of the original image (using a low-pass filter, e.g., Gaussian).
2.  Subtracting the blurred image from the original image to obtain a "detail mask" or "highlight mask". This mask contains the high-frequency components.
3.  Adding a scaled version of the detail mask back to the original image.

**Steps:**
1.  **Blurring:** $f_{blur}(x, y) = L[f(x, y)]$ where $L$ is a low-pass filter (e.g., Gaussian blur).
2.  **Detail Mask:** $f_{detail}(x, y) = f(x, y) - f_{blur}(x, y)$
3.  **Sharpened Image:** $g(x, y) = f(x, y) + \alpha \cdot f_{detail}(x, y)$
    where $\alpha$ is a positive constant controlling the strength of sharpening.

Substituting the detail mask:
$g(x, y) = f(x, y) + \alpha \cdot (f(x, y) - f_{blur}(x, y))$
$g(x, y) = (1 + \alpha)f(x, y) - \alpha \cdot f_{blur}(x, y)$

**Example:**
If $f_{blur}$ is obtained by convolution with a Gaussian kernel, then the overall transformation effectively uses a kernel that emphasizes high frequencies and attenuates low frequencies.

**Connection to Spatial Domain Filters:**
Unsharp masking can be viewed as a spatial filtering operation. The kernel for the sharpened image can be derived. For instance, if a simple averaging kernel is used for blurring, the unsharp masking operation can be represented by a specific kernel.

**Advantages of Unsharp Masking:**
*   More controlled sharpening than direct Laplacian addition.
*   Less sensitive to noise amplification compared to direct Laplacian.
*   The degree of sharpening can be controlled by the parameter $\alpha$ and the size/type of the blurring kernel.

**Textbook Reference:** Gonzalez & Woods (4th Ed.) extensively covers unsharp masking as a sharpening technique. Pratt (4th Ed.) also discusses various sharpening methods, including unsharp masking.

#### 2.4.3. High-Boost Filtering

High-boost filtering is a variation of unsharp masking. It amplifies the original image and subtracts the blurred image.

**Formula:**
$g(x, y) = A \cdot f(x, y) - B \cdot f_{blur}(x, y)$
where $A$ and $B$ are constants, and $A > B$.
Typically, $A+B$ is related to the sum of coefficients of the unsharp masking transformation.
A common form is:
$g(x, y) = f(x, y) + \alpha (f(x, y) - f_{blur}(x, y))$
where $A = 1 + \alpha$ and $B = \alpha$.

If we let $A = \beta$ and $B = \beta - 1$ (where $\beta > 1$), then:
$g(x, y) = \beta f(x, y) - (\beta - 1) f_{blur}(x, y)$

**Purpose:**
High-boost filtering strengthens the contribution of the original image relative to the blurred image. This is achieved by setting the coefficient of the original image ($A$) to be greater than 1.

**Example:**
If $\beta=2$, the operation becomes $g(x, y) = 2 f(x, y) - f_{blur}(x, y)$. This emphasizes the original image more than the standard unsharp masking (where $A=1$).

**Important Point:** Both unsharp masking and high-boost filtering inherently perform a form of high-pass filtering by emphasizing the differences between the original and blurred images.

### 2.5. General High-Pass Filters

Any filter that has a sum of zero (or close to zero) and emphasizes high frequencies can be considered a high-pass filter.

**Example Kernel (Sharpening Mask):**
```
[ -1 -1 -1 ]
[ -1  9 -1 ]
[ -1 -1 -1 ]
```
In this kernel:
*   The sum of coefficients is $-1 \times 8 + 9 = 1$. This is a slight variation.
*   The central positive coefficient is much larger than the surrounding negative coefficients.
*   This kernel is equivalent to $I + \text{Laplacian}(\text{8-neighbor})$. If we apply this kernel directly:
    $g(x,y) = 9f(x,y) - [f(x+1,y) + f(x-1,y) + ... + f(x,y-1)]$
    $g(x,y) = f(x,y) + 8f(x,y) - [f(x+1,y) + f(x-1,y) + ... + f(x,y-1)]$
    $g(x,y) = f(x,y) + 8 [f(x,y) - \frac{1}{8}\sum \text{neighboring pixels}]$
    This is similar to unsharp masking where the blur is a simple average of 8 neighbors and $\alpha = 8$.

**Important Note on Kernel Sum:**
If the sum of kernel elements is $S$, then applying the filter to a constant region will yield $S$ times the constant value. For true high-pass behavior (where constant regions are suppressed), the sum should ideally be zero. If the sum is 1, it acts more like an "edge enhancement" filter that also preserves overall brightness.

---

## 3. Implementation Considerations

*   **Boundary Handling:** When applying filters, especially to the border pixels, special techniques are needed (e.g., padding the image with zeros, replicating border pixels, or wrapping around).
*   **Noise Amplification:** High-pass filters are notorious for amplifying noise because noise often manifests as high-frequency components. Therefore, it's common to apply noise reduction (e.g., Gaussian smoothing) *before* high-pass filtering, or to use techniques like unsharp masking with a Gaussian blur which inherently smooths the noise.
*   **Scaling and Clipping:** The output of the sharpening process might exceed the valid gray level range (e.g., 0-255 for 8-bit images). Clipping or scaling is necessary.

**Reference:** Jain (1988) and Castleman (2nd Ed.) discuss these practical implementation aspects.

---

## 4. Applications of High-Pass Filtering

*   **Sharpening:** Enhancing edges and fine details in photographs, medical images, satellite imagery.
*   **Edge Detection:** While not a direct edge detector, the output of a Laplacian filter highlights edges. Specific edge detection algorithms build upon these derivative principles.
*   **Feature Extraction:** Enhancing specific features for subsequent analysis.

---

## 5. Practice Questions and Exercises

**Question 1:**
What is the primary effect of a high-pass filter in image enhancement?
(a) Smoothing the image
(b) Reducing noise
(c) Sharpening the image by emphasizing edges
(d) Changing the overall brightness

**Answer:** (c) Sharpening the image by emphasizing edges

**Question 2:**
Consider a 3x3 kernel used for high-pass filtering. What property should the sum of its coefficients ideally possess to effectively suppress constant intensity regions?
(a) A large positive value
(b) A value close to 1
(c) Zero
(d) A large negative value

**Answer:** (c) Zero

**Question 3:**
Explain the concept of unsharp masking in image sharpening. List its main steps.

**Answer:** Unsharp masking is a technique that enhances edges by subtracting a blurred version of the image from the original image and then adding the result back to the original image.
Main steps:
1.  Blur the original image using a low-pass filter.
2.  Compute the detail mask by subtracting the blurred image from the original image.
3.  Add a scaled version of the detail mask to the original image.

**Question 4:**
Which of the following is a second-order derivative operator commonly used in spatial domain filtering for edge detection and sharpening?
(a) Sobel operator
(b) Prewitt operator
(c) Laplacian operator
(d) Roberts operator

**Answer:** (c) Laplacian operator

**Question 5 (Problem Solving):**
Given the following image patch and the 4-neighbor Laplacian kernel:

Image Patch:
```
[ 50  60  70 ]
[ 80 100 120 ]
[150 160 170 ]
```

Laplacian Kernel:
```
[ 0  1  0 ]
[ 1 -4  1 ]
[ 0  1  0 ]
```

Calculate the output of the Laplacian filter at the center pixel (value 100).

**Solution:**
Output = (neighbor above) + (neighbor below) + (neighbor left) + (neighbor right) - 4 * (center pixel)
Output = 60 + 160 + 80 + 120 - 4 * 100
Output = 420 - 400
Output = 20

Now, if we use the enhancement formula $g(x, y) = f(x, y) - \nabla^2 f(x, y)$ at the center pixel:
Enhanced Output = 100 - 20 = 80.

*(Note: If the kernel had been [-1, -1, -1; -1, 8, -1; -1, -1, -1], the calculation would be different and correspond to a different sharpening mask. The question specifies the Laplacian kernel.)*

---

## 6. Important Points to Remember

*   **High-pass filters enhance high-frequency components (edges, details, noise).**
*   **The Laplacian is a key operator for detecting second-order derivatives, useful for sharpening.**
*   **The sum of coefficients in a high-pass filter kernel is typically zero to suppress smooth regions.**
*   **Unsharp masking and high-boost filtering are robust sharpening techniques.**
*   **Be aware of noise amplification when using high-pass filters.**
*   **Boundary handling and output scaling are crucial for implementation.**
*   **Understanding the relationship between spatial domain kernels and frequency domain concepts is important for CO4.**

---

## Alignment with Course Outcomes

*   **CO1: Explain different components of image processing system (Knowledge Level: K2)**
    *   This topic is a component of the "Image Enhancement" stage within an image processing system.
*   **CO2: Analyse the various concepts and mathematical transforms necessary for image processing (Knowledge Level: K3)**
    *   Understanding convolution, derivatives (Laplacian), and frequency components (high vs. low) is central to analyzing these techniques.
*   **CO4: Analyze the filtering and restoration of images (Knowledge Level: K3)**
    *   This topic is directly about filtering, specifically high-pass filtering for enhancement. Analyzing its effects, methods (Laplacian, Unsharp Masking), and impact (noise amplification) aligns perfectly.
*   **CO5: Describe the basic image segmentation techniques (Knowledge Level: K2)**
    *   While not a segmentation technique itself, the edge enhancement provided by high-pass filters can be a precursor step to segmentation, where edges are often used to define boundaries of objects.

---
This concludes the notes on High-Pass Filtering within Spatial Domain Methods for Image Enhancement.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
