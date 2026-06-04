---
title: "high pass filtering"
subject: "IMAGE PROCESSING APPLICATIONS"
module: "Module 3: Image Enhancement: Spatial domain methods: Basic Gray Level Transformations"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fef73"
status: "completed"
scrapedAt: "2026-05-23T18:01:25.085Z"
---
# IMAGE PROCESSING APPLICATIONS: Module 3: Image Enhancement: Spatial Domain Methods: Basic Gray Level Transformations

## Topic: High-Pass Filtering

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental principles of high-pass filtering in the spatial domain.
*   Explain how high-pass filters work to accentuate image details.
*   Differentiate between various types of high-pass filters used in image enhancement.
*   Implement high-pass filtering techniques for image sharpening and detail enhancement.
*   Analyze the trade-offs and limitations of high-pass filtering.

### Course Outcomes Alignment:

*   **CO3: Illustrate the various schemes of image filtering (Knowledge Level: K5)** - This topic directly addresses the illustration of image filtering schemes, specifically high-pass filtering.
*   **CO2: Analyse the various concepts and mathematical transforms and compression schemes necessary for image processing (Knowledge Level: K4)** - Understanding high-pass filtering involves analyzing the mathematical operations performed in the spatial domain.

### 1. Introduction to High-Pass Filtering

High-pass filtering is a spatial domain image enhancement technique primarily used for **sharpening** an image. Unlike low-pass filters that smooth an image by removing high-frequency components (edges, noise), high-pass filters work by **attenuating (reducing) low-frequency components** and **preserving or amplifying high-frequency components**.

**Key Concept:**

*   **Frequency Components in Images:** Images can be viewed in terms of their frequency content.
    *   **Low frequencies:** Correspond to smooth areas of the image (e.g., backgrounds, uniform regions).
    *   **High frequencies:** Correspond to abrupt changes in intensity, such as edges, fine details, and noise.

**Goal of High-Pass Filtering:** To enhance these abrupt changes, making edges and details appear sharper and more defined.

### 2. How High-Pass Filters Work

High-pass filters operate by exploiting the relationship between an image pixel and its neighbors. The core idea is to **subtract a blurred (low-pass filtered) version of the image from the original image**. This process highlights the differences between the original image and its smoothed version, which are precisely the high-frequency components.

Mathematically, if $f(x, y)$ is the original image and $g(x, y)$ is a low-pass filtered version of $f(x, y)$, then a high-pass filtered image $h(x, y)$ can be approximated as:

$h(x, y) = f(x, y) - g(x, y)$

**Alternatively**, and more commonly in practice, high-pass filtering is achieved using convolution with a **high-pass kernel (or mask)**. A high-pass kernel is designed such that when convolved with the image, it emphasizes differences between a pixel and its neighbors.

**Gonzalez & Woods (2009) - Chapter 3 (Spatial Domain Filtering):** This chapter extensively covers spatial filtering, including the concept of sharpening using high-pass filtering. They explain that high-pass filtering is achieved by averaging filters that remove high frequencies, and then subtracting this average from the original image.

### 3. Types of High-Pass Filters

High-pass filters can be categorized based on their kernel design. They are typically implemented as **unsharp masking** or as **Laplacian filters**.

#### 3.1 Unsharp Masking

Unsharp masking is a popular sharpening technique that involves:

1.  **Blurring the original image:** This is typically done using a low-pass filter (e.g., Gaussian filter). Let the blurred image be $f_{blurred}(x, y)$.
2.  **Subtracting the blurred image from the original image:** This generates a "mask" that contains the high-frequency details.
    $mask(x, y) = f(x, y) - f_{blurred}(x, y)$
3.  **Adding a weighted version of the mask back to the original image:** This accentuates the details.
    $f_{sharpened}(x, y) = f(x, y) + \alpha \cdot mask(x, y)$
    where $\alpha$ is a scaling factor, typically $\alpha > 0$.

**Example:**

If we use a simple averaging filter as our low-pass filter in step 1, the kernel might look like:

```
[ 1/9  1/9  1/9 ]
[ 1/9  1/9  1/9 ]
[ 1/9  1/9  1/9 ]
```

The subtraction process $f(x, y) - f_{blurred}(x, y)$ effectively highlights edges. The addition of $\alpha \cdot mask(x, y)$ amplifies these highlighted edges.

**Gonzalez & Woods (2009) - Chapter 3:** Unsharp masking is discussed as a key sharpening method derived from subtracting a low-pass filtered image.

**Jayaraman, Esakkirajan, & Veerakumar (2015) - Chapter 4 (Image Enhancement):** This textbook also details unsharp masking as a technique for image sharpening, emphasizing its operation through blurring and subtraction.

#### 3.2 Laplacian Filter

The Laplacian is a second-order derivative operator that is ideal for detecting regions of rapid intensity change (edges). It is defined as:

$\nabla^2 f = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2}$

In discrete form, the Laplacian can be approximated by various kernels. The basic Laplacian operator is sensitive to noise, so it's often applied to an image that has been pre-smoothed.

**Common Laplacian Kernels:**

The Laplacian can be approximated using various mask sizes. Two common forms are:

**Kernel 1 (4-connectivity):**
```
[  0  1  0 ]
[  1 -4  1 ]
[  0  1  0 ]
```
This kernel highlights horizontal and vertical edges.

**Kernel 2 (8-connectivity):**
```
[  1  1  1 ]
[  1 -8  1 ]
[  1  1  1 ]
```
This kernel is more sensitive to diagonal edges as well.

**Sharpening using Laplacian:**

The Laplacian can be used for sharpening by adding its filtered output back to the original image, similar to unsharp masking:

$f_{sharpened}(x, y) = f(x, y) - \alpha \cdot \nabla^2 f(x, y)$

where $\nabla^2 f(x, y)$ is the result of convolving the image with a Laplacian kernel, and $\alpha$ is a scaling factor.

**Important Point:** The Laplacian kernel has a sum of zero. This means that if applied to a region of constant intensity, the output will be zero. When subtracting this from the original image, the constant region remains unchanged. However, at edges, the non-zero Laplacian output will cause a change, thus highlighting the edge.

**Gonzalez & Woods (2009) - Chapter 3:** The Laplacian is introduced as a second-order derivative operator used for edge detection and sharpening. They discuss its properties and different discrete approximations.

**Reference Books:**

*   **Castleman (2003) - Chapter 4 (Spatial Filtering):** Castleman discusses derivative operators, including the Laplacian, and their role in edge enhancement and noise reduction.
*   **Jain (1988) - Chapter 3 (Image Enhancements):** Jain covers edge detection techniques, including the Laplacian, and its application in image sharpening.
*   **Pratt (2007) - Chapter 5 (Spatial Filtering):** Pratt provides a comprehensive treatment of spatial filtering, including sharpening methods that utilize derivative operations like the Laplacian.

### 4. Implementing High-Pass Filtering

High-pass filtering is typically implemented using **convolution**.

**Steps:**

1.  **Select a high-pass kernel.**
2.  **Pad the image:** To handle border effects, the image is often padded with zeros or by replicating border pixels.
3.  **Perform convolution:** Slide the kernel over the image, multiplying the kernel elements with the corresponding image pixels and summing the results to produce the output pixel value.
4.  **Add the filtered result back to the original image (for sharpening):**

    $f_{sharpened}(x, y) = f(x, y) + \text{convoluted\_result}(x, y)$

    Or, in the case of unsharp masking, using a weighted mask:

    $f_{sharpened}(x, y) = f(x, y) + \alpha \cdot (f(x, y) - f_{blurred}(x, y))$

**Important Considerations:**

*   **Kernel Size:** Larger kernels generally produce more blurring (in unsharp masking) or detect larger features, while smaller kernels are more sensitive to fine details and noise.
*   **Scaling Factor ($\alpha$):** The value of $\alpha$ controls the strength of the sharpening. Too high a value can lead to amplified noise and undesirable artifacts.
*   **Noise Amplification:** High-pass filters inherently amplify noise because noise is often characterized by high-frequency components. Therefore, pre-smoothing the image with a low-pass filter before applying high-pass filtering is often necessary, as seen in unsharp masking.

### 5. Examples and Visualizations

Imagine an image with a sharp edge.

*   **Original Image:** Shows a distinct transition from dark to light.
*   **Low-Pass Filtered Image (Blurred):** The edge becomes softer, with a gradual transition.
*   **High-Pass Filtered Image (Difference):** The blurred edge is subtracted from the original. This results in a bright line at the edge in the filtered image, with dark regions on either side, highlighting the location and steepness of the transition.
*   **Sharpened Image (Adding back weighted mask):** The original image with the amplified edge highlighted, making the edge appear even sharper.

### 6. Advantages and Disadvantages

**Advantages:**

*   **Effective for Sharpening:** Significantly improves the clarity of edges and fine details.
*   **Accentuates Fine Features:** Makes subtle details more visible.
*   **Relatively Simple to Implement:** Based on convolution with specific kernels.

**Disadvantages:**

*   **Amplifies Noise:** Noise, which often has high-frequency components, gets amplified, potentially degrading image quality.
*   **Can Introduce Artifacts:** Over-sharpening can lead to halos around edges or ringing artifacts.
*   **Requires Careful Parameter Tuning:** The choice of kernel and scaling factor is crucial for optimal results.

**Highlight:** Always consider the presence of noise when applying high-pass filters. Pre-smoothing is often a good first step.

### 7. Practice Questions and Exercises

**Question 1:**

What is the primary purpose of high-pass filtering in image enhancement?
a) Smoothing the image
b) Reducing noise
c) Sharpening the image by enhancing edges
d) Changing the overall brightness of the image

**Answer 1:** c) Sharpening the image by enhancing edges

**Question 2:**

Which of the following statements is FALSE regarding high-pass filters?
a) They attenuate low-frequency components.
b) They amplify high-frequency components.
c) They are effective for image smoothing.
d) They can amplify image noise.

**Answer 2:** c) They are effective for image smoothing. (This is the function of low-pass filters)

**Question 3:**

Consider the following Laplacian kernel (Kernel 1 from Section 3.2):

```
[  0  1  0 ]
[  1 -4  1 ]
[  0  1  0 ]
```

If this kernel is convolved with an image region where the pixel values are `[10, 10, 10]`
`[10, 50, 10]`
`[10, 10, 10]`, what will be the output value at the center pixel (corresponding to 50)?

**Solution 3:**

The convolution operation at the center pixel (50) is:
$(0 \times 10) + (1 \times 10) + (0 \times 10) + (1 \times 10) + (-4 \times 50) + (1 \times 10) + (0 \times 10) + (1 \times 10) + (0 \times 10)$
$= 0 + 10 + 0 + 10 - 200 + 10 + 0 + 10 + 0$
$= 40 - 200 = -160$

The output value at the center pixel is -160.

**Question 4:**

Describe the unsharp masking process in image sharpening. What are the key steps involved?

**Answer 4:**

Unsharp masking involves the following steps:
1.  **Blurring:** The original image is blurred using a low-pass filter (e.g., Gaussian).
2.  **Mask Creation:** The blurred image is subtracted from the original image to create a "mask" that highlights the high-frequency details (edges).
3.  **Sharpening:** A scaled version of the mask is added back to the original image to enhance the details and achieve sharpening.
    $f_{sharpened}(x, y) = f(x, y) + \alpha \cdot (f(x, y) - f_{blurred}(x, y))$

**Question 5:**

How does the choice of kernel size affect the outcome of high-pass filtering?

**Answer 5:**

*   **Smaller kernel size:** Focuses on finer details and is more sensitive to small, abrupt changes. It may also amplify finer details of noise.
*   **Larger kernel size:** Tends to capture broader edges and transitions. In unsharp masking, a larger blurring kernel will result in a mask that emphasizes larger features.

### 8. Important Points to Remember:

*   **High-pass filters enhance edges and fine details by attenuating low frequencies.**
*   **They are primarily used for image sharpening.**
*   **Common implementations include unsharp masking and Laplacian filtering.**
*   **The Laplacian is a second-order derivative operator sensitive to intensity changes.**
*   **High-pass filters are prone to amplifying noise.**
*   **Pre-smoothing is often used in conjunction with high-pass filtering to mitigate noise amplification.**
*   **The scaling factor ($\alpha$) controls the strength of sharpening.**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 9. References:

*   **Gonzalez Rafel C, Woods Richard E.** (2009). *Digital Image Processing*. Pearson Education. (Chapter 3: Spatial Domain Filtering)
*   **Jayaraman S, Esakkirajan S, Veerakumar T.** (2015). *Digital Image Processing*. Tata Mc Graw Hill. (Chapter 4: Image Enhancement)
*   **Castleman Kenneth R.** (2003). *Digital Image Processing*. Pearson Education. (Chapter 4: Spatial Filtering)
*   **Jain Anil K.** (1988). *Fundamentals of Digital Image Processing*. PHI. (Chapter 3: Image Enhancements)
*   **Pratt William K.** (2007). *Digital Image Processing*. John Wiley. (Chapter 5: Spatial Filtering)