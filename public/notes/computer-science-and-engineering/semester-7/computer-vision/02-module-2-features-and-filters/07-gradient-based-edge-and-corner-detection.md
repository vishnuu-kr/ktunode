---
title: "Gradient Based Edge and Corner Detection."
subject: "COMPUTER VISION"
module: "Module 2: Features and Filters :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c3a7"
status: "completed"
scrapedAt: "2026-05-20T17:03:10.827Z"
---
# Computer Vision: Module 2 - Features and Filters

## Topic: Gradient Based Edge and Corner Detection

---

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the concept of image gradients and their relationship to image intensity changes.
*   Explain how gradient operators (Sobel, Prewitt, Roberts Cross) are used to detect edges.
*   Describe the principles behind Laplacian-based edge detection.
*   Differentiate between edge detection and corner detection.
*   Explain the Harris Corner Detection algorithm and its mathematical foundation.
*   Understand the advantages and disadvantages of gradient-based methods for edge and corner detection.
*   Apply these concepts to implement basic edge and corner detection in an image processing context.

---

### 2. Introduction to Image Gradients

#### 2.1 What are Image Gradients?

*   **Definition:** An image gradient is a vector that points in the direction of the greatest *rate of intensity change* at a given pixel. It quantifies how much the pixel intensity changes in different directions.
*   **Purpose:** Areas with high intensity changes (gradients) correspond to image *edges*. Edges are fundamental features that define the boundaries of objects and regions in an image.
*   **Mathematical Representation:** For a grayscale image $I(x, y)$, the gradient is a 2D vector:
    $$ \nabla I = \begin{bmatrix} \frac{\partial I}{\partial x} \\ \frac{\partial I}{\partial y} \end{bmatrix} $$
    *   $\frac{\partial I}{\partial x}$ (or $I_x$): Partial derivative with respect to the x-axis (horizontal change).
    *   $\frac{\partial I}{\partial y}$ (or $I_y$): Partial derivative with respect to the y-axis (vertical change).

#### 2.2 Gradient Magnitude and Direction

*   **Magnitude:** The magnitude of the gradient vector indicates the *strength* of the intensity change. A larger magnitude signifies a stronger edge.
    $$ | \nabla I | = \sqrt{\left(\frac{\partial I}{\partial x}\right)^2 + \left(\frac{\partial I}{\partial y}\right)^2} $$
*   **Direction:** The direction of the gradient vector indicates the orientation of the greatest intensity increase. The edge itself is perpendicular to this direction.
    $$ \theta = \arctan \left( \frac{\frac{\partial I}{\partial y}}{\frac{\partial I}{\partial x}} \right) $$

#### 2.3 Approximating Gradients with Convolution

*   In practice, we cannot compute exact derivatives. Instead, we approximate them using discrete differencing. This is typically done by convolving the image with small kernels (filters).
*   The kernels are designed to approximate the partial derivatives in the x and y directions.

---

### 3. Gradient-Based Edge Detection

Gradient-based methods detect edges by finding pixels where the gradient magnitude is high.

#### 3.1 First-Order Derivative Operators

These operators directly approximate the gradient.

*   **Roberts Cross Operator:**
    *   **Concept:** Uses 2x2 kernels to approximate the derivatives. It's simple but sensitive to noise.
    *   **Kernels:**
        $$ K_x = \begin{bmatrix} +1 & 0 \\ 0 & -1 \end{bmatrix}, \quad K_y = \begin{bmatrix} 0 & +1 \\ -1 & 0 \end{bmatrix} $$
    *   **Process:**
        1.  Convolve the image with $K_x$ to get $G_x$.
        2.  Convolve the image with $K_y$ to get $G_y$.
        3.  Calculate magnitude: $G = \sqrt{G_x^2 + G_y^2}$.
    *   **Example:** Consider a 2x2 image patch:
        $$ \begin{bmatrix} 10 & 50 \\ 20 & 80 \end{bmatrix} $$
        *   $G_x = (10 - 80) + (50 - 20) = -70 + 30 = -40$ (using the bottom-right minus top-left)
        *   $G_y = (50 - 20) + (10 - 80) = 30 - 70 = -40$ (using the top-right minus bottom-left)
        *   Magnitude $G = \sqrt{(-40)^2 + (-40)^2} = \sqrt{1600 + 1600} = \sqrt{3200} \approx 56.57$
    *   **Note:** The exact calculation depends on how the convolution is centered and applied.

*   **Prewitt Operator:**
    *   **Concept:** Uses 3x3 kernels that average intensities in orthogonal directions to reduce noise sensitivity compared to Roberts.
    *   **Kernels:**
        $$ K_x = \frac{1}{3} \begin{bmatrix} -1 & 0 & +1 \\ -1 & 0 & +1 \\ -1 & 0 & +1 \end{bmatrix}, \quad K_y = \frac{1}{3} \begin{bmatrix} -1 & -1 & -1 \\ 0 & 0 & 0 \\ +1 & +1 & +1 \end{bmatrix} $$
    *   **Process:** Similar to Roberts, convolve with $K_x$ and $K_y$, then calculate magnitude.

*   **Sobel Operator:**
    *   **Concept:** Similar to Prewitt but gives more weight to the central row/column, making it more robust to noise. It's widely used.
    *   **Kernels:**
        $$ K_x = \frac{1}{8} \begin{bmatrix} -1 & 0 & +1 \\ -2 & 0 & +2 \\ -1 & 0 & +1 \end{bmatrix}, \quad K_y = \frac{1}{8} \begin{bmatrix} -1 & -2 & -1 \\ 0 & 0 & 0 \\ +1 & +2 & +1 \end{bmatrix} $$
    *   **Process:** Convolve with $K_x$ and $K_y$, then calculate magnitude.
    *   **Example:** The factor of 1/8 is a normalization constant. The core operation is the differencing and weighted summing.

#### 3.2 Second-Order Derivative Operators (Laplacian)

*   **Concept:** Edges are also characterized by *zero-crossings* in the second derivative of the intensity function. High positive and high negative second derivatives indicate a rapid change.
*   **Laplacian Operator:**
    *   **Definition:** The Laplacian of an image $I(x, y)$ is the sum of its second partial derivatives:
        $$ \nabla^2 I = \frac{\partial^2 I}{\partial x^2} + \frac{\partial^2 I}{\partial y^2} $$
    *   **Kernels:** Discrete approximations of the Laplacian.
        *   Simple Laplacian:
            $$ K_{Laplace1} = \begin{bmatrix} 0 & 1 & 0 \\ 1 & -4 & 1 \\ 0 & 1 & 0 \end{bmatrix} $$
        *   Laplacian with diagonals (more sensitive):
            $$ K_{Laplace2} = \begin{bmatrix} 1 & 1 & 1 \\ 1 & -8 & 1 \\ 1 & 1 & 1 \end{bmatrix} $$
    *   **Process:**
        1.  Convolve the image with a Laplacian kernel.
        2.  Find pixels where the output of the convolution changes sign (zero-crossing).
    *   **Advantages:** Detects edges in all orientations equally. Can be more sensitive to fine details.
    *   **Disadvantages:** Highly sensitive to noise. Zero-crossings can be very thin and require further processing (like thresholding) to form discernible edges.

#### 3.3 The Marr-Hildreth Operator (Laplacian of Gaussian - LoG)

*   **Concept:** To mitigate the noise sensitivity of the Laplacian, it's often applied to a *smoothed* version of the image. Gaussian smoothing is a common choice. The LoG operator is essentially a Laplacian applied to a Gaussian-filtered image.
*   **Process:**
    1.  Smooth the image using a Gaussian filter: $G(x, y, \sigma)$ where $\sigma$ controls the amount of smoothing.
    2.  Apply the Laplacian operator to the smoothed image.
    3.  Detect zero-crossings in the result.
*   **Kernel:** The LoG kernel is the convolution of a Gaussian kernel and a Laplacian kernel.
*   **Advantages:** Reduces noise before detecting edges, leading to cleaner results.
*   **Disadvantages:** Computationally more expensive. Choice of $\sigma$ is crucial – too small and noise is still an issue; too large and fine details are lost.

#### 3.4 Thresholding for Edge Detection

*   After computing the gradient magnitude (or Laplacian output), a threshold is typically applied to classify pixels as either "edge" or "non-edge".
*   **Simple Thresholding:** Pixels with gradient magnitude above a threshold $T$ are considered edges.
    $$ \text{Edge pixel if } | \nabla I | > T $$
*   **Adaptive Thresholding:** The threshold $T$ can vary across the image, adapting to local intensity levels, which can be more robust.
*   **Hysteresis Thresholding (Used in Canny):** Uses two thresholds (low and high) to decide whether a pixel is a strong edge, weak edge, or not an edge. Weak edges are kept only if they are connected to strong edges.

---

### 4. Corner Detection

*   **Definition:** A corner is a point in an image where there are significant intensity changes in *multiple directions*. Unlike edges (which have change in one direction), corners have significant changes in two or more directions.
*   **Why detect corners?**
    *   Corners are stable features that are invariant to rotation and scaling to some extent.
    *   They provide more robust information than edges for tasks like object recognition, tracking, and image stitching.

#### 4.1 The Harris Corner Detection Algorithm

*   **Concept:** Harris corner detector looks for points where the intensity changes significantly in *all* directions. It is based on analyzing the auto-correlation of the image intensity in the neighborhood of a point.
*   **Key Idea: Window-Based Approach:**
    *   Consider a small window (e.g., rectangular or circular) around a pixel $(x, y)$.
    *   Shift this window by a small amount $(\Delta x, \Delta y)$.
    *   Measure the change in intensity within the window after the shift. This change is denoted by $E(u, v)$.
    *   We are looking for points $(x, y)$ where $E(u, v)$ is large for *all* possible small shifts $(u, v)$.
*   **Mathematical Formulation:**
    *   The intensity change $E(u, v)$ when shifting a window by $(u, v)$ is approximated by:
        $$ E(u, v) \approx \sum_{(x,y) \in W} \left[ \frac{\partial I}{\partial x} u + \frac{\partial I}{\partial y} v \right]^2 $$
        where $W$ is the window centered at $(x, y)$.
    *   This can be rewritten in matrix form:
        $$ E(u, v) \approx \begin{bmatrix} u & v \end{bmatrix} \mathbf{M} \begin{bmatrix} u \\ v \end{bmatrix} $$
        where $\mathbf{M}$ is the **Harris Matrix** (or Structure Tensor) for the pixel $(x, y)$:
        $$ \mathbf{M} = \begin{bmatrix} \sum_W I_x^2 & \sum_W I_x I_y \\ \sum_W I_x I_y & \sum_W I_y^2 \end{bmatrix} $$
        Here, $I_x = \frac{\partial I}{\partial x}$ and $I_y = \frac{\partial I}{\partial y}$ are the image gradients (often smoothed first). The sums are over all pixels in the window $W$.
*   **Interpreting the Harris Matrix (M):** The eigenvalues of $\mathbf{M}$ ($\lambda_1, \lambda_2$) characterize the local image structure:
    *   **Corner:** Both $\lambda_1$ and $\lambda_2$ are large. This means intensity changes significantly in both x and y directions.
    *   **Edge:** One eigenvalue is large, and the other is small. Intensity changes significantly in one direction but not the other.
    *   **Flat Region:** Both $\lambda_1$ and $\lambda_2$ are small. No significant intensity change in any direction.
*   **Harris Response Function (R):** To directly identify corners, Harris proposed a response function $R$ based on the eigenvalues:
    $$ R = \det(\mathbf{M}) - k (\text{trace}(\mathbf{M}))^2 $$
    where:
    *   $\det(\mathbf{M}) = \lambda_1 \lambda_2 = (\sum I_x^2)(\sum I_y^2) - (\sum I_x I_y)^2$
    *   $\text{trace}(\mathbf{M}) = \lambda_1 + \lambda_2 = \sum I_x^2 + \sum I_y^2$
    *   $k$ is a sensitivity parameter (empirically set, often between 0.04 and 0.06).
*   **Corner Detection:** Pixels with $R > T$ (where $T$ is a threshold) are identified as potential corners.
*   **Steps for Harris Corner Detection:**
    1.  Compute the image gradients $I_x$ and $I_y$ using Sobel or a similar operator.
    2.  (Optional but recommended) Smooth the gradients using a Gaussian filter.
    3.  Compute the products of gradients: $I_x^2$, $I_y^2$, and $I_x I_y$.
    4.  For each pixel, compute the Harris matrix $\mathbf{M}$ by summing the gradient products over a local window. A weighted sum (using a Gaussian window) is common.
    5.  Calculate the Harris response $R$ for each pixel.
    6.  Threshold the response $R$ to find corners.
    7.  (Optional) Non-maximum suppression can be applied to select the strongest corner points in a neighborhood.

#### 4.2 Other Corner Detectors

*   **Shi-Tomasi Corner Detector:** A variation of Harris that uses a simpler criterion for corner detection. Instead of the Harris response, it considers the minimum eigenvalue:
    $$ R_{Shi} = \min(\lambda_1, \lambda_2) $$
    Pixels with $R_{Shi} > T$ are considered corners. This tends to find "better" corners that are more stable.

---

### 5. Advantages and Disadvantages of Gradient-Based Methods

#### 5.1 Edge Detection

*   **Advantages:**
    *   **Simplicity and Speed:** Operators like Sobel and Prewitt are computationally efficient.
    *   **Directly Measure Intensity Change:** They directly address the fundamental definition of an edge.
    *   **Orientation Information:** Gradient magnitude and direction provide information about the edge's strength and orientation.
*   **Disadvantages:**
    *   **Noise Sensitivity:** Especially for first-order derivatives. Second-order methods (Laplacian) are even more sensitive.
    *   **Thick Edges:** The detected edges can be thicker than the actual object boundary, especially with low thresholds.
    *   **Gap Issues:** May produce broken edges or gaps in curved edges.
    *   **Requires Thresholding:** Performance heavily depends on the chosen threshold.
    *   **Not Noise-Robust:** Standard Sobel/Prewitt alone are not sufficient for noisy images; pre-smoothing is crucial.

#### 5.2 Corner Detection (Harris)

*   **Advantages:**
    *   **Robustness:** Harris detector is relatively robust to noise and illumination changes.
    *   **Corner Stability:** Corners are stable features invariant to rotation and scale (to some extent).
    *   **Good for Feature Matching:** Provides strong features for higher-level vision tasks.
*   **Disadvantages:**
    *   **Computational Cost:** More complex than simple edge detectors due to gradient computation, window sums, and eigenvalue analysis.
    *   **Parameter Sensitivity:** The window size and the threshold $k$ can affect performance.
    *   **Not Affine Invariant:** Not fully invariant to shearing or perspective transformations.
    *   **Sensitive to Window Size:** The choice of window size affects the scale of corners detected.

---

### 6. Practice Questions and Exercises

**Question 1: Theory**

Explain the fundamental difference between edge detection and corner detection.

**Answer 1:**
Edge detection aims to identify pixels where there is a significant change in image intensity along a single direction. Corners, on the other hand, are points where intensity changes significantly in multiple directions.

**Question 2: Theory**

What is the role of the Harris matrix ($\mathbf{M}$) in the Harris corner detection algorithm? What do its eigenvalues represent?

**Answer 2:**
The Harris matrix ($\mathbf{M}$) encapsulates the local image structure around a pixel by analyzing the auto-correlation of image gradients within a local window. Its eigenvalues ($\lambda_1, \lambda_2$) characterize this structure: large eigenvalues in both directions indicate a corner, a large eigenvalue in one direction and a small one in the other indicates an edge, and small eigenvalues in both directions indicate a flat region.

**Question 3: Operator Application**

Consider the following 3x3 image patch. Calculate the approximate horizontal gradient ($I_x$) and vertical gradient ($I_y$) at the center pixel using the Sobel operators (ignoring the 1/8 scaling for simplicity in manual calculation).

$$
\begin{bmatrix}
10 & 20 & 30 \\
40 & 50 & 60 \\
70 & 80 & 90
\end{bmatrix}
$$

**Answer 3:**
Sobel Kernels (ignoring 1/8):
$$ K_x = \begin{bmatrix} -1 & 0 & +1 \\ -2 & 0 & +2 \\ -1 & 0 & +1 \end{bmatrix}, \quad K_y = \begin{bmatrix} -1 & -2 & -1 \\ 0 & 0 & 0 \\ +1 & +2 & +1 \end{bmatrix} $$

For the center pixel (value 50):
$I_x = (1 \times 30 + 2 \times 60 + 1 \times 90) - (1 \times 10 + 2 \times 40 + 1 \times 70)$
$I_x = (30 + 120 + 90) - (10 + 80 + 70)$
$I_x = 240 - 160 = 80$

$I_y = (1 \times 70 + 2 \times 80 + 1 \times 90) - (1 \times 10 + 2 \times 20 + 1 \times 30)$
$I_y = (70 + 160 + 90) - (10 + 40 + 30)$
$I_y = 320 - 80 = 240$

The approximate horizontal gradient is 80, and the vertical gradient is 240. (Note: A more accurate calculation would involve the 1/8 scaling).

**Question 4: Concept Application**

Imagine an image region that is a perfectly horizontal line. How would the gradient magnitude and direction behave along this line and perpendicular to it?

**Answer 4:**
*   **Along the horizontal line:** The intensity change is minimal. The gradient magnitude will be low, and the gradient direction will be close to zero (or undefined).
*   **Perpendicular to the horizontal line:** There will be a sharp intensity change. The gradient magnitude will be high, and the gradient direction will be perpendicular to the line (either pointing upwards or downwards, depending on the direction of intensity increase).

**Exercise 1: Implementation (Conceptual)**

Describe the main steps you would take to implement the Harris Corner Detector in a programming language like Python using libraries like OpenCV or scikit-image.

**Answer (Conceptual Steps):**
1.  **Load Image:** Read the input image.
2.  **Convert to Grayscale:** Convert the image to grayscale if it's a color image.
3.  **Compute Gradients:** Use `cv2.Sobel()` or similar functions to compute $I_x$ and $I_y$.
4.  **Compute Gradient Products:** Calculate $I_x^2$, $I_y^2$, and $I_x I_y$.
5.  **Apply Gaussian Smoothing:** Smooth these product images using `cv2.GaussianBlur()`.
6.  **Compute Harris Matrix Components:** Sum the smoothed gradient products over a sliding window. `cv2.filter2D()` can be used for summing with a constant kernel, or `cv2.GaussianBlur()` again can be used to effectively sum with a Gaussian weighting.
7.  **Calculate Harris Response (R):** Compute $R = \det(\mathbf{M}) - k \cdot (\text{trace}(\mathbf{M}))^2$.
8.  **Thresholding:** Apply a threshold to $R$ to identify potential corner pixels.
9.  **Non-Maximum Suppression (Optional but Recommended):** Find local maxima in the response map to get distinct corner points.
10. **Draw Corners:** Overlay the detected corners on the original image.

---

### 7. Important Points to Remember

*   **Gradient = Rate of Intensity Change:** Edges occur where the gradient magnitude is high.
*   **Sobel Operator:** A widely used, relatively noise-robust first-order derivative operator for edge detection.
*   **Laplacian:** A second-order operator that detects edges at zero-crossings, but is very noise-sensitive.
*   **LoG (Laplacian of Gaussian):** Smooths the image before applying the Laplacian to reduce noise.
*   **Corners:** Points of significant intensity change in *multiple* directions.
*   **Harris Detector:** Identifies corners by analyzing the local structure using eigenvalues of the Harris matrix ($\mathbf{M}$). A high response $R$ indicates a corner.
*   **$\mathbf{M}$ Eigenvalues:** $\lambda_1, \lambda_2 > \text{small} \implies$ Corner; $\lambda_1 \gg \lambda_2 > \text{small} \implies$ Edge; $\lambda_1, \lambda_2 \approx \text{small} \implies$ Flat.
*   **Thresholding is Crucial:** The choice of threshold heavily influences the number and quality of detected features.
*   **Pre-smoothing is Often Necessary:** Especially for gradient-based edge detectors, smoothing with a Gaussian filter before applying the operator helps reduce noise.
