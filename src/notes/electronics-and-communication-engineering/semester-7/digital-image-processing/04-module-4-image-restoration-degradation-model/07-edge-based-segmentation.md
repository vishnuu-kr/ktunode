---
title: "edge based segmentation"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Restoration: Degradation model"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff51f"
status: "completed"
scrapedAt: "2026-05-23T18:06:57.094Z"
---
# DIGITAL IMAGE PROCESSING

## Module 4: Image Restoration: Degradation Model

### Topic: Edge-Based Segmentation

**Learning Outcomes:**

*   Understand the fundamental concept of edge detection for image segmentation.
*   Learn about the relationship between edges and image discontinuities.
*   Explore various edge detection operators and their mathematical formulations.
*   Understand the challenges in edge detection, such as noise and false edges.
*   Learn techniques for edge linking and completing broken edges.
*   Relate edge detection to the broader context of image segmentation.

---

### 1. Introduction to Edge-Based Segmentation

**Concept:** Edge-based segmentation is a fundamental image processing technique that aims to identify and extract boundaries (edges) of objects or regions within an image. These edges represent significant changes in image intensity, color, or texture. By detecting these discontinuities, we can effectively segment an image into meaningful parts.

**Relationship to Image Restoration:** While this topic is covered in the "Image Restoration" module, it's important to note that edge detection is primarily a **segmentation** technique. The connection to restoration lies in the fact that degradation processes (blurring, noise) can obscure or create false edges, making accurate edge detection more challenging. Understanding the degradation model helps in designing robust edge detection algorithms.

**Key Concepts:**

*   **Edge:** A curve where the image intensity changes sharply. It is typically characterized by a significant gradient magnitude.
*   **Image Discontinuity:** Abrupt changes in image properties such as:
    *   **Discontinuity in Intensity:** Steps, lines, roofs.
    *   **Discontinuity in Texture:** Changes in the statistical properties of the image.
    *   **Discontinuity in Color:** Regions with different color distributions.

**Importance:**

*   **Object Boundary Detection:** Crucial for identifying the shapes and outlines of objects.
*   **Feature Extraction:** Edges are important features for recognition and matching tasks.
*   **Foundation for Other Segmentation Methods:** Edge information can be used to guide other segmentation approaches.

**Alignment with Course Outcomes:**

*   **CO5: Describe the basic image segmentation techniques (Knowledge Level: K2):** This topic directly addresses this outcome by explaining the core principles of edge-based segmentation.

---

### 2. The Role of Gradients in Edge Detection

**Concept:** Edges are characterized by a high rate of change in image intensity. The gradient of an image provides information about the direction and magnitude of the steepest intensity change.

**Mathematical Formulation:**

For a 2D image function $f(x, y)$, the gradient is a vector given by:

$\nabla f(x, y) = \left[ \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right]$

*   $\frac{\partial f}{\partial x}$: Partial derivative with respect to the x-axis.
*   $\frac{\partial f}{\partial y}$: Partial derivative with respect to the y-axis.

The **gradient magnitude** ($M$) indicates the strength of the edge:

$M(x, y) = |\nabla f(x, y)| = \sqrt{\left(\frac{\partial f}{\partial x}\right)^2 + \left(\frac{\partial f}{\partial y}\right)^2}$

The **gradient direction** ($\theta$) indicates the orientation of the edge:

$\theta(x, y) = \arctan\left(\frac{\frac{\partial f}{\partial y}}{\frac{\partial f}{\partial x}}\right)$

**How it works for edge detection:**

*   **High Gradient Magnitude:** Regions with high gradient magnitude correspond to areas where the intensity changes rapidly, indicating potential edges.
*   **Low Gradient Magnitude:** Regions with low gradient magnitude indicate smooth areas with little intensity change.

**Textbook Reference:**

*   **Gonzalez & Woods, 4th Ed., Chapter 6: Image Segmentation:** This chapter provides a thorough explanation of edge detection and its mathematical underpinnings, including gradient-based methods.

---

### 3. First-Order Derivative Edge Detection Operators

These operators approximate the gradient using finite differences.

#### 3.1. Roberts Cross Operator

**Concept:** This operator uses diagonal differences to approximate the gradient. It is simple and computationally efficient but sensitive to noise.

**Masks:**

```
Gx = | -1  0 |      Gy = |  0 -1 |
     |  0  1 |           |  1  0 |
```

**Operation:**

$R_x = f(x, y) * G_x$
$R_y = f(x, y) * G_y$

Where '*' denotes convolution.

**Gradient Magnitude:**

$M(x, y) = |R_x| + |R_y|$ (or $\sqrt{R_x^2 + R_y^2}$)

**Example:** Consider a simple image patch:

```
10  20
30  40
```

Let's assume the center pixel is at (x,y).
Using Roberts Cross:
$R_x = (-1)*10 + (1)*40 = 30$
$R_y = (-1)*20 + (1)*30 = 10$
$M = |30| + |10| = 40$

**Pros:** Simple, fast.
**Cons:** Sensitive to noise, only detects edges at 45-degree angles well.

---

#### 3.2. Prewitt Operator

**Concept:** This operator uses horizontal and vertical differences to approximate the gradient. It smooths the image in the direction perpendicular to the gradient.

**Masks:**

```
Gx = | -1  0  1 |      Gy = | -1 -1 -1 |
     | -1  0  1 |           |  0  0  0 |
     | -1  0  1 |           |  1  1  1 |

    (Horizontal gradient approximation)  (Vertical gradient approximation)
```

**Operation:**

$R_x = f(x, y) * G_x$
$R_y = f(x, y) * G_y$

**Gradient Magnitude:**

$M(x, y) = \sqrt{R_x^2 + R_y^2}$

**Pros:** Better at detecting horizontal and vertical edges compared to Roberts. Provides some smoothing.
**Cons:** Still sensitive to noise.

---

#### 3.3. Sobel Operator

**Concept:** Similar to Prewitt, but it gives more weight to the center row/column, providing better noise suppression and edge emphasis.

**Masks:**

```
Gx = | -1  0  1 |      Gy = | -1 -2 -1 |
     | -2  0  2 |           |  0  0  0 |
     | -1  0  1 |           |  1  2  1 |

    (Horizontal gradient approximation)  (Vertical gradient approximation)
```

**Operation:**

$R_x = f(x, y) * G_x$
$R_y = f(x, y) * G_y$

**Gradient Magnitude:**

$M(x, y) = \sqrt{R_x^2 + R_y^2}$

**Pros:** More robust to noise than Roberts and Prewitt. Good at detecting horizontal and vertical edges. Widely used.
**Cons:** Can still produce thick edges and be affected by noise in complex images.

**Example:** Comparing Sobel with Prewitt on a noisy step edge would show Sobel producing a stronger gradient at the edge with less response in the noisy regions.

---

### 4. Second-Order Derivative Edge Detection Operators

These operators are based on the Laplacian of the image. They respond to changes in the rate of intensity change.

#### 4.1. Laplacian Operator

**Concept:** The Laplacian is the sum of the second partial derivatives of an image. It highlights regions of rapid intensity change, including edges, lines, and points.

**Mathematical Formulation:**

$\nabla^2 f = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2}$

**Masks (approximations):**

```
Laplacian 1: |  0  1  0 |      Laplacian 2: |  1  1  1 |
            |  1 -4  1 |                 |  1 -8  1 |
            |  0  1  0 |                 |  1  1  1 |

           (4-connected)                    (8-connected)
```

**Operation:**

$L(x, y) = f(x, y) * \text{Laplacian Mask}$

**How it detects edges:**

*   Edges correspond to zero crossings in the second derivative.
*   Positive values indicate a peak in the first derivative, while negative values indicate a valley.

**Pros:**
*   Isotropic (response is independent of direction).
*   Detects edges, lines, and points simultaneously.

**Cons:**
*   Highly sensitive to noise because it amploys a second derivative. This amplifies noise significantly.
*   Produces double edges for thick edges.
*   The zero-crossing property is not always directly usable as an edge detector; often needs to be combined with smoothing.

**Image Restoration Connection:** To mitigate the noise sensitivity, the Laplacian is often applied to a smoothed image (e.g., after Gaussian smoothing), leading to the **Laplacian of Gaussian (LoG)** or **Mexican Hat** operator.

#### 4.2. Laplacian of Gaussian (LoG)

**Concept:** This operator first smooths the image using a Gaussian filter and then applies the Laplacian. This helps to reduce noise before detecting edges, leading to more robust edge detection.

**Mathematical Formulation:**

The LoG operator is defined as:

$\nabla^2 (G_{\sigma} * f) = ( \nabla^2 G_{\sigma} ) * f$

Where:
*   $G_{\sigma}(x, y) = \frac{1}{2\pi\sigma^2} e^{-(x^2+y^2)/(2\sigma^2)}$ is the Gaussian function with standard deviation $\sigma$.
*   $\nabla^2 G_{\sigma}(x, y) = \frac{x^2+y^2 - 2\sigma^2}{\sigma^4} \frac{1}{2\pi\sigma^2} e^{-(x^2+y^2)/(2\sigma^2)}$ is the Laplacian of the Gaussian.

The LoG operator effectively detects blob-like structures and edges. Edges are located at the zero crossings of the LoG function.

**Pros:**
*   Robust to noise due to Gaussian smoothing.
*   Detects edges at different scales based on the value of $\sigma$.
*   Zero crossings provide precise edge localization.

**Cons:**
*   Computationally more expensive than first-order operators.
*   Requires choosing an appropriate $\sigma$ value, which determines the scale of features detected.

**Textbook Reference:**

*   **Gonzalez & Woods, 4th Ed., Chapter 6:** Discusses Laplacian-based methods and their variations like LoG.

---

### 5. Canny Edge Detector

**Concept:** The Canny edge detector is a multi-stage algorithm designed to be optimal in terms of accuracy, localization, and single-response. It is widely considered one of the most effective edge detection methods.

**Stages of the Canny Edge Detector:**

1.  **Noise Reduction (Smoothing):**
    *   Apply a Gaussian filter to the image to smooth out noise. This is crucial for preventing the detection of spurious edges.
    *   The standard deviation ($\sigma$) of the Gaussian filter controls the level of smoothing. A larger $\sigma$ reduces more noise but can also blur fine details.

2.  **Finding Intensity Gradients:**
    *   Compute the gradient of the smoothed image using a suitable operator (e.g., Sobel). This gives both the gradient magnitude and direction for each pixel.
    *   $M(x, y) = \sqrt{G_x^2 + G_y^2}$
    *   $\Theta(x, y) = \arctan\left(\frac{G_y}{G_x}\right)$

3.  **Non-Maximum Suppression:**
    *   **Purpose:** To thin the detected edges, ensuring that only the pixels with the maximum gradient magnitude along the gradient direction are retained. This results in thin, single-pixel-wide edges.
    *   **Process:** For each pixel, examine its neighbors along the gradient direction. If the gradient magnitude of the current pixel is not the maximum in that direction, it is suppressed (set to zero).

4.  **Double Thresholding:**
    *   **Purpose:** To classify edge pixels into "strong" and "weak" edges and to reduce false edge detections from noise.
    *   **Process:** Two thresholds are used: a **high threshold** ($T_{high}$) and a **low threshold** ($T_{low}$).
        *   Pixels with gradient magnitudes above $T_{high}$ are classified as **strong edge pixels**.
        *   Pixels with gradient magnitudes between $T_{low}$ and $T_{high}$ are classified as **weak edge pixels**.
        *   Pixels with gradient magnitudes below $T_{low}$ are discarded.

5.  **Edge Tracking by Hysteresis:**
    *   **Purpose:** To connect weak edge pixels to strong edge pixels, thus completing the edges and reducing broken edges caused by local variations in intensity.
    *   **Process:**
        *   Strong edge pixels are definitely considered part of an edge.
        *   Weak edge pixels are kept **only if they are connected to a strong edge pixel** (either directly or indirectly through other weak edge pixels).
        *   This hysteresis process helps to preserve the continuity of edges while discarding isolated weak pixels that are likely due to noise.

**Pros:**
*   Excellent noise immunity.
*   Provides good edge localization.
*   Produces thin, continuous edges.
*   Is generally considered the "gold standard" for edge detection.

**Cons:**
*   Computationally intensive.
*   Requires careful tuning of the Gaussian $\sigma$ and the two thresholds ($T_{high}$, $T_{low}$).

**Alignment with Course Outcomes:**

*   **CO4: Analyze the filtering and restoration of images (Knowledge Level: K3):** Understanding Canny involves analyzing the filtering steps (Gaussian smoothing) and how it contributes to robust edge detection, which is a form of image analysis.
*   **CO5: Describe the basic image segmentation techniques (Knowledge Level: K2):** Canny is a foundational edge-based segmentation technique.

**Textbook Reference:**

*   **Gonzalez & Woods, 4th Ed., Chapter 6:** Provides a detailed explanation of the Canny edge detector and its implementation.
*   **Jayaraman, Esakkirajan, Veerakumar, 1st Ed., Chapter 5: Image Segmentation:** Likely covers Canny as a prominent segmentation technique.

---

### 6. Edge Linking and Boundary Following

**Concept:** After edge detection, the output is often a set of discrete edge pixels. Edge linking aims to connect these pixels to form continuous object boundaries.

**Why it's necessary:** Edge detection operators might produce:
*   **Broken edges:** Due to noise or subtle intensity changes.
*   **Multiple edges:** Due to texture or fine details.

**Techniques for Edge Linking:**

1.  **Local Edge Linking:**
    *   **Concept:** Examines small neighborhoods of edge pixels and connects them based on certain criteria.
    *   **Criteria:**
        *   **Proximity:** Pixels are close to each other.
        *   **Directionality:** The direction of the gradient at adjacent edge pixels is similar (e.g., within a certain angle difference).
        *   **Intensity Similarity:** The intensity difference between adjacent edge pixels is small.

2.  **Global Edge Linking:**
    *   **Concept:** Considers the entire image or larger regions to find connected boundary segments.
    *   **Methods:**
        *   **Graph Theory:** Represent edge pixels as nodes in a graph, and edges in the graph represent potential connections between pixels. Algorithms like the shortest path can be used to find continuous boundaries.
        *   **Hough Transform:** Can be used to detect specific shapes (lines, circles) by transforming edge points into a parameter space.

3.  **Boundary Following (Contour Tracing):**
    *   **Concept:** Starts at an edge pixel and follows the boundary of the object.
    *   **Common Algorithms:**
        *   **Moore Neighbor Tracing:** A systematic traversal of pixels around a boundary.
        *   **Haralick's Boundary Following:** Another popular method that follows pixels based on connectivity and edge strength.

**Example:** Imagine a detected edge that has a small gap. Boundary following would start at one end of the gap and try to find the next closest edge pixel that continues the curve.

**Textbook Reference:**

*   **Gonzalez & Woods, 4th Ed., Chapter 6:** Covers edge linking and boundary following as post-processing steps for edge detection.

---

### 7. Edge Detection in the Context of Image Restoration

**Impact of Degradation on Edges:**

*   **Blurring (e.g., motion blur, out-of-focus blur):** Blurring tends to reduce the gradient magnitude of edges, making them less pronounced. It can also make sharp edges appear more gradual, potentially causing edge detection algorithms to miss them or to detect them as thicker edges.
*   **Noise (e.g., Gaussian noise, salt-and-pepper noise):** Noise can create false edges (spurious responses) or obscure true edges by reducing the signal-to-noise ratio. The Laplacian operator is particularly susceptible to noise.
*   **Geometric Distortions:** Can alter the shape and location of edges.

**Restoration Techniques to Aid Edge Detection:**

*   **Deblurring:** Applying deconvolution techniques (e.g., Wiener filtering, inverse filtering) can help to sharpen blurred edges, restoring their original gradient strength.
*   **Denoising:** Applying noise reduction filters (e.g., Gaussian smoothing, median filtering, bilateral filtering) before edge detection can significantly improve the accuracy and reduce false edges.
*   **De-ringing/De-aliasing:** Can be applied if the degradation process introduced such artifacts.

**Important Point to Remember:** For robust edge detection in degraded images, it is often beneficial to perform image restoration (denoising and deblurring) **before** applying edge detection algorithms.

**Alignment with Course Outcomes:**

*   **CO4: Analyze the filtering and restoration of images (Knowledge Level: K3):** This section directly links edge detection to image restoration by explaining how degradation affects edges and how restoration techniques can improve edge detection performance.

---

### 8. Practice Questions and Answers

**Question 1:** Which of the following operators is a first-order derivative operator commonly used for edge detection?
(a) Laplacian
(b) Canny
(c) Sobel
(d) LoG

**Answer 1:** (c) Sobel. The Laplacian and LoG are second-order derivatives, and Canny is a multi-stage algorithm.

**Question 2:** What is the primary purpose of non-maximum suppression in the Canny edge detector?
(a) To reduce noise in the image.
(b) To connect broken edges.
(c) To thin detected edges to a single pixel width.
(d) To identify edge orientation.

**Answer 2:** (c) To thin detected edges to a single pixel width.

**Question 3:** Explain why second-order derivative operators like the Laplacian are more sensitive to noise than first-order operators like Sobel.

**Answer 3:** Second-order derivatives amplify noise more than first-order derivatives. Noise typically manifests as rapid, localized changes in intensity. The second derivative measures the *rate of change of the gradient*, which is highly sensitive to these small, noisy fluctuations. In contrast, the first derivative measures the *gradient itself*, which is less affected by minor noise variations.

**Question 4:** Describe the role of hysteresis in the Canny edge detector and why it is beneficial.

**Answer 4:** Hysteresis in the Canny edge detector uses two thresholds (high and low) to distinguish between strong and weak edge pixels. Weak edge pixels are only included in the final edge map if they are connected to a strong edge pixel. This is beneficial because it helps to connect broken edges (where intensity changes might momentarily drop below the low threshold) and removes isolated weak pixels that are likely caused by noise, leading to more continuous and robust edges.

**Question 5:** If an image suffers from significant motion blur, how would this affect the performance of a Sobel edge detector, and what restoration technique could be applied beforehand to mitigate this issue?

**Answer 5:** Motion blur tends to smear out sharp edges, reducing their gradient magnitude and making them appear less distinct. This can cause the Sobel operator to detect weaker gradients or miss edges altogether. To mitigate this, a deblurring technique, such as Wiener filtering or inverse filtering (if the blur kernel is known or can be estimated), could be applied to the image *before* using the Sobel operator. This would help to sharpen the edges and restore their gradient strength.

---

### 9. Summary and Key Points to Remember

*   **Edges** represent significant changes in image intensity, crucial for segmentation.
*   **First-order derivative operators** (Roberts, Prewitt, Sobel) approximate the gradient magnitude to detect edges. Sobel is generally preferred for its robustness to noise.
*   **Second-order derivative operators** (Laplacian, LoG) detect edges at zero crossings of the second derivative. They are sensitive to noise but can detect edges of all orientations and fine details.
*   The **Laplacian of Gaussian (LoG)** is a popular second-order operator that balances edge detection with noise reduction.
*   The **Canny edge detector** is a multi-stage, optimal edge detector that includes noise reduction, gradient calculation, non-maximum suppression, double thresholding, and hysteresis.
*   **Edge linking and boundary following** are post-processing steps to connect fragmented edges into continuous contours.
*   **Image degradation** (blur, noise) can significantly hinder edge detection. Performing **image restoration** (denoising, deblurring) before edge detection is often necessary for accurate results.
*   Choosing the right edge detection technique depends on the image content, the level of noise, and the desired outcome (e.g., detecting thin edges, localizing edges precisely).

---
This concludes the study notes for Edge-Based Segmentation. Ensure you review the relevant chapters in the textbooks for a deeper understanding and to see illustrative examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
