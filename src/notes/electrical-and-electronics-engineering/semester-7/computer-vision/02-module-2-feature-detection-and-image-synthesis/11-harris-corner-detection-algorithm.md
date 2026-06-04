---
title: "Harris corner detection algorithm"
subject: "COMPUTER VISION"
module: "Module 2: Feature Detection and Image Synthesis"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a3c"
status: "completed"
scrapedAt: "2026-05-23T16:32:52.057Z"
---
# Computer Vision: Module 2 - Feature Detection and Image Synthesis

## Topic: Harris Corner Detection Algorithm

### Introduction to Feature Detection

**Course Outcome Alignment:** CO3 (Apply edge, corner detection algorithms to locate objects in an image.) K3

**Key Concepts:**

*   **Features:** Distinctive and salient points, regions, or descriptors in an image that can be reliably detected and matched across different views or images. They are the building blocks for many computer vision tasks like object recognition, tracking, and image stitching.
*   **Feature Detection:** The process of identifying and localizing these distinctive points or regions in an image.
*   **Corners:** A specific type of feature characterized by a significant change in intensity in multiple directions. They are often formed by the intersection of two or more edges.
*   **Why corners?** Corners are generally more stable and informative than isolated edge points. They provide a more robust reference for matching and localization.

**Reference:** Szeliski, R. (2011). *Computer Vision: Algorithms and Applications*. Section 2.3.1 (Image Features).

### The Concept of a Corner

**Key Concepts:**

*   A corner is a point where the image intensity changes significantly in at least two different directions.
*   Imagine a small window (patch) around a pixel. If we move this window slightly in any direction, and the intensity sum within the window changes significantly, then the center pixel is likely to be a corner.

**Intuitive Illustration:**

Consider a simple image patch:

```
10  10  10
10  50  10
10  10  10
```

If we move the window one pixel to the right, the sum of pixel values changes significantly. If we move it one pixel down, it also changes significantly. This indicates a corner.

Compare this to an edge or a flat region:

*   **Edge:** Intensity changes significantly in one direction, but little in the perpendicular direction.
*   **Flat Region:** Intensity changes very little in any direction.

### The Harris Corner Detection Algorithm

**Course Outcome Alignment:** CO3 (Apply edge, corner detection algorithms to locate objects in an image.) K3

**Key Concepts:**

*   The Harris corner detector is an algorithm that identifies corners by analyzing the local structure of an image.
*   It is based on the idea of an **image interest operator**, which quantifies how "interesting" a pixel is as a potential feature point.
*   The core idea is to measure the **change in intensity** when a small window is *shifted* across the image.

**Mathematical Formulation (Szeliski, 2011):**

Let $I(x, y)$ be the intensity of the image at pixel $(x, y)$.
Consider a small window $W$ centered at $(x, y)$.
When we shift the window by $(u, v)$, the change in intensity $\Delta E$ is approximated by the Taylor expansion:

$\Delta E(u, v) = \sum_{(x,y) \in W} [I(x+u, y+v) - I(x, y)]^2$

Using Taylor expansion for $I(x+u, y+v)$ around $(x, y)$:
$I(x+u, y+v) \approx I(x, y) + \frac{\partial I}{\partial x} u + \frac{\partial I}{\partial y} v$

So, the change in intensity is:
$I(x+u, y+v) - I(x, y) \approx \frac{\partial I}{\partial x} u + \frac{\partial I}{\partial y} v$

Let $I_x = \frac{\partial I}{\partial x}$ and $I_y = \frac{\partial I}{\partial y}$ be the image gradients in the x and y directions, respectively. These can be computed using finite differences or Sobel operators.

The change in intensity $\Delta E(u, v)$ can be rewritten as a quadratic form:

$\Delta E(u, v) = \sum_{(x,y) \in W} \left( I_x (x, y) u + I_y (x, y) v \right)^2$

This can be expressed in matrix form:

$\Delta E(u, v) = \begin{bmatrix} u & v \end{bmatrix} \sum_{(x,y) \in W} \begin{bmatrix} I_x^2 & I_x I_y \\ I_x I_y & I_y^2 \end{bmatrix} \begin{bmatrix} u \\ v \end{bmatrix}$

The matrix $M$ is the **Harris matrix** (or structure tensor) for the window $W$:

$M = \sum_{(x,y) \in W} w(x,y) \begin{bmatrix} I_x^2 & I_x I_y \\ I_x I_y & I_y^2 \end{bmatrix}$

Here, $w(x,y)$ is a window function, typically a Gaussian, which gives more weight to pixels closer to the center.

**Harris Corner Response Function (R):**

The Harris detector defines a response function $R$ for each pixel $(x, y)$ based on the eigenvalues ($\lambda_1, \lambda_2$) of the Harris matrix $M$:

$R = \det(M) - k (\text{trace}(M))^2$

where:
*   $\det(M) = \lambda_1 \lambda_2 = (I_x^2 * w)(I_y^2 * w) - (I_x I_y * w)^2$
*   $\text{trace}(M) = \lambda_1 + \lambda_2 = (I_x^2 * w) + (I_y^2 * w)$
*   $k$ is a sensitivity parameter, typically between 0.04 and 0.06.
*   $*$ denotes convolution.

**Interpretation of R:**

The eigenvalues of $M$ tell us about the variation of intensity in different directions.

1.  **Flat Region:** Both $\lambda_1$ and $\lambda_2$ are small.
    *   $R \approx 0$. No interest.

2.  **Edge:** One eigenvalue is large, and the other is small. (e.g., $\lambda_1 >> 0, \lambda_2 \approx 0$).
    *   $\det(M) \approx 0$.
    *   $\text{trace}(M) \approx \lambda_1$.
    *   $R \approx 0 - k (\lambda_1)^2 < 0$. The response is negative.

3.  **Corner:** Both $\lambda_1$ and $\lambda_2$ are large and comparable.
    *   $\det(M) = \lambda_1 \lambda_2 > 0$.
    *   $\text{trace}(M) = \lambda_1 + \lambda_2 > 0$.
    *   $R = \lambda_1 \lambda_2 - k (\lambda_1 + \lambda_2)^2$. Since $\lambda_1$ and $\lambda_2$ are large, $R$ will be large and positive.

**Summary of R:**

*   $R \approx 0$: Flat region
*   $R < 0$: Edge
*   $R >> 0$: Corner

**Thresholding for Corner Detection:**

*   Corners are detected at pixels where $R$ is greater than a certain threshold $T$.
*   Typically, a non-maximum suppression step is also applied to find the local maxima of $R$ to select distinct corner points.

**Steps of the Harris Corner Detector:**

1.  **Compute Image Gradients:** Calculate the image intensity derivatives $I_x(x, y)$ and $I_y(x, y)$ using finite difference approximations (e.g., Sobel operator).
2.  **Compute Products of Gradients:** Calculate $I_x^2$, $I_y^2$, and $I_x I_y$ for each pixel.
3.  **Apply Gaussian Smoothing (Weighting Function):** Convolve the products of gradients with a Gaussian kernel $w(x, y)$ to get the elements of the Harris matrix $M$.
    *   $S_{xx} = I_x^2 * w$
    *   $S_{yy} = I_y^2 * w$
    *   $S_{xy} = I_x I_y * w$
    The Harris matrix for each pixel is then:
    $M = \begin{bmatrix} S_{xx} & S_{xy} \\ S_{xy} & S_{yy} \end{bmatrix}$
4.  **Compute Harris Corner Response (R):** Calculate $R$ for each pixel using the formula:
    $R = \det(M) - k (\text{trace}(M))^2$
5.  **Thresholding and Non-Maximum Suppression:**
    *   Threshold the $R$ values to identify potential corner candidates. Pixels with $R > T$ are considered corners.
    *   Apply non-maximum suppression on the $R$ values in a local neighborhood to find the actual corner locations (the local peaks of $R$).

**Textbook References:**

*   **Davies (2012), Chapter 5 (Image Features):** Likely discusses interest points and corner detectors in detail.
*   **Szeliski (2011), Section 2.3.1 (Image Features):** Provides a good overview of feature detectors, including Harris corner detection, and its mathematical basis.
*   **Forsyth & Ponce (2002), Chapter 8 (Matching):** Might touch upon feature points like corners for the purpose of matching.

### Implementation Details and Considerations

**Course Outcome Alignment:** CO3 (Apply edge, corner detection algorithms to locate objects in an image.) K3, CO5 (Analyse a given scene using appropriate computer vision algorithms...) K4

**Key Concepts:**

*   **Window Size (Sigma for Gaussian):** The size of the window $W$ used for summing gradient products affects the scale at which corners are detected. A larger window detects corners at a larger scale, while a smaller window is sensitive to finer details. This is often controlled by the standard deviation ($\sigma$) of the Gaussian kernel.
*   **Sensitivity Parameter (k):** Controls the thresholding and the balance between detecting corners and suppressing other features. A higher $k$ value leads to fewer detected corners.
*   **Threshold (T):** Determines how strong the corner response must be to be considered a corner.
*   **Non-Maximum Suppression:** Essential for obtaining distinct corner points rather than a blob of high $R$ values. It involves selecting only the local maxima of the $R$ map.

**Example: Detecting Corners in a Simple Image**

Consider an image of a square:

```
100 100 100 100
100   0   0 100
100   0   0 100
100 100 100 100
```

1.  **Gradients:** $I_x$ will be non-zero along vertical edges, $I_y$ along horizontal edges.
2.  **Products of Gradients:** $I_x^2$, $I_y^2$ will be non-zero at edges, and $I_x I_y$ will be zero everywhere except potentially at the intersection of horizontal and vertical gradients.
3.  **Harris Matrix:** At the corners of the square, both $I_x$ and $I_y$ will have significant non-zero values. Thus, $S_{xx}$, $S_{yy}$, and $S_{xy}$ will all contribute to a large $\det(M)$ and a large $\text{trace}(M)$. The formula $R = \det(M) - k (\text{trace}(M))^2$ will result in a high positive value at the corners.
4.  **Response:** Pixels along the edges will have a strong gradient in one direction but a weak gradient in the other, leading to a negative $R$. Pixels in the flat interior or exterior will have small gradients and $R \approx 0$.

**Practical Considerations:**

*   **Scale Invariance (Partial):** The Harris detector is not fully scale-invariant. By varying the Gaussian smoothing $\sigma$, one can detect corners at different scales. The **Harris-Laplacian (or Scale-Invariant Feature Transform - SIFT)** approach extends this by searching for corners across multiple scales.
*   **Rotation Invariance:** The Harris detector is rotationally invariant because the eigenvalues of the structure tensor change based on the direction of the gradient, but their magnitudes (and thus $R$) remain the same if the pattern of intensities is rotated.
*   **Affine Transformation Sensitivity:** It is not robust to affine transformations (shearing, scaling in different directions).

**Reference Books:**

*   **Mastering OpenCV with Practical Computer Vision Projects (Baggio et al., 2012):** This book likely contains practical C++ or Python examples using libraries like OpenCV for implementing Harris corner detection.
*   **Programming Computer Vision with Python (Solem, 2012):** Similar to Baggio et al., this book would offer concrete code implementations and explanations.

### Harris Detector vs. Other Corner Detectors

**Key Concepts:**

*   **Moravec Corner Detector:** An older detector that identifies pixels with high local variance in multiple directions. It is less robust than Harris.
*   **Canny Edge Detector:** Primarily detects edges, not corners directly, though corners are often implied by the convergence of edges.
*   **Shi-Tomasi Corner Detector:** A variation of Harris that uses a different response function: $R = \min(\lambda_1, \lambda_2)$. This is shown to be more stable for tracking.

**Reference:** Szeliski (2011), Section 2.3.1.

### Applications of Harris Corner Detection

**Course Outcome Alignment:** CO3 (Apply edge, corner detection algorithms to locate objects in an image.) K3, CO5 (Analyse a given scene using appropriate computer vision algorithms to detect/recognize objects and to implement it in real time practical applications.) K4

*   **Object Tracking:** Corners provide stable points to track an object's movement across frames in a video.
*   **Image Stitching/Panorama Creation:** Corners are matched between overlapping images to align them.
*   **Structure from Motion:** Used to identify corresponding points in multiple images to reconstruct 3D scenes.
*   **Robotic Navigation:** Identifying corners of obstacles or landmarks.
*   **Camera Calibration:** Used as reference points for calibrating camera parameters.

### Practice Questions and Answers

**Question 1:**
What is the fundamental idea behind the Harris corner detection algorithm?
(a) Detecting pixels with high intensity.
(b) Detecting pixels where intensity changes significantly in all directions.
(c) Detecting pixels with a constant intensity.
(d) Detecting pixels with low contrast.

**Answer:** (b) Detecting pixels where intensity changes significantly in all directions.

**Question 2:**
The Harris matrix $M$ for a window at pixel $(x,y)$ is defined as:
$M = \sum_{(x',y') \in W} w(x',y') \begin{bmatrix} I_x^2 & I_x I_y \\ I_x I_y & I_y^2 \end{bmatrix}$
What is the significance of the eigenvalues ($\lambda_1, \lambda_2$) of this matrix in classifying image regions?
(a) If $\lambda_1$ and $\lambda_2$ are both small, the region is a corner.
(b) If one eigenvalue is large and the other is small, the region is an edge.
(c) If both $\lambda_1$ and $\lambda_2$ are large, the region is a corner.
(d) Both (b) and (c).

**Answer:** (d) Both (b) and (c).

**Question 3:**
The Harris corner response function is given by $R = \det(M) - k (\text{trace}(M))^2$. What happens to $R$ in a flat region?
(a) $R$ is large and positive.
(b) $R$ is negative.
(c) $R$ is close to zero.
(d) $R$ is equal to $\det(M)$.

**Answer:** (c) $R$ is close to zero.

**Question 4:**
What is the purpose of the parameter $k$ in the Harris corner response function?
(a) To control the size of the Gaussian smoothing window.
(b) To determine the threshold for corner detection.
(c) To balance the contribution of the determinant and trace, influencing the sensitivity to corners.
(d) To define the order of the Taylor expansion.

**Answer:** (c) To balance the contribution of the determinant and trace, influencing the sensitivity to corners.

**Question 5 (Practical Application Scenario):**
You are developing a system to track a book on a table using a camera. You've decided to use corner features to track the book. Would Harris corner detection be a suitable method? Explain why or why not, considering the properties of corners.

**Answer:** Yes, Harris corner detection would be a suitable method. Corners are stable and distinctive features. By detecting the corners of the book (e.g., its edges meeting), these points can be reliably tracked as the book moves or rotates slightly. The robustness of corners compared to edges or flat regions makes them good candidates for tracking. However, significant changes in viewpoint (affine transformations) or scale might require more advanced feature descriptors.

### Important Points to Remember

*   **Corners = Intensity change in multiple directions.**
*   The Harris matrix ($M$) captures the local auto-correlation of the image gradient.
*   Eigenvalues of $M$ determine the region type (flat, edge, corner).
*   Harris response $R = \det(M) - k(\text{trace}(M))^2$.
*   Large positive $R$ indicates a corner.
*   $k$ is a sensitivity parameter.
*   Thresholding and non-maximum suppression are crucial post-processing steps.
*   Harris is good for rotation but sensitive to scale and affine transformations.

This comprehensive set of notes covers the Harris corner detection algorithm, its mathematical foundation, implementation details, applications, and relates them to the specified course outcomes and learning objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
