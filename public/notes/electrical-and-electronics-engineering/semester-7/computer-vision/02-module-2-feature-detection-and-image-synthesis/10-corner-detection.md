---
title: "Corner detection"
subject: "COMPUTER VISION"
module: "Module 2: Feature Detection and Image Synthesis"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a3b"
status: "completed"
scrapedAt: "2026-05-23T16:32:50.650Z"
---
# Computer Vision: Module 2 - Feature Detection and Image Synthesis - Corner Detection

---

## 1. Introduction to Corner Detection

Corners are salient features in an image that represent significant points of interest. They are formed by the intersection of two or more edges. Detecting corners is crucial for various computer vision tasks, including:

*   **Object Recognition and Matching:** Corners provide stable and distinctive features for identifying and matching objects.
*   **Image Stitching and Panorama Creation:** Corners are used to align images for creating seamless mosaics.
*   **Camera Calibration:** Corner detection is essential for determining intrinsic and extrinsic camera parameters.
*   **Motion Tracking:** Corners can be robustly tracked across video frames to estimate motion.
*   **Structure from Motion (SfM):** Corners play a vital role in reconstructing 3D scenes from multiple images.

**Key Concept:** A corner is a point where the intensity of the image changes significantly in at least two different directions.

**Learning Outcome Covered:** This section introduces the fundamental concept of corners as features, which underpins their detection.

**Alignment with Course Outcomes:**
*   **CO3 (K3):** Applying corner detection algorithms to locate objects. Understanding what a corner is is the first step.

---

## 2. Properties of Good Corner Detectors

A robust corner detector should exhibit the following properties:

*   **Good Localization:** The detected corner should be precisely located at the actual corner in the image.
*   **Repeatability:** The detector should reliably find the same corner point in multiple images of the same scene, even under variations in illumination, viewpoint, and scale.
*   **Distinctiveness:** Corner features should be unique enough to differentiate between different objects or parts of an object.
*   **Sensitivity to Noise:** The detector should be relatively insensitive to image noise.
*   **Computational Efficiency:** For real-time applications, the detection algorithm should be computationally fast.

**Important Point to Remember:** The "goodness" of a corner detector is evaluated based on these properties.

**Reference:** Davies, E.R. (2012) "Computer and Machine Vision: Theory Algorithm and Practicalities" discusses the characteristics of distinctive features like corners.

---

## 3. Harris Corner Detector

The Harris corner detector is one of the most widely used and influential corner detection algorithms. It is based on the idea that a corner is a point where the intensity of the image changes significantly in all directions.

### 3.1 Core Idea: Local Image Structure Analysis

The Harris detector analyzes the local image structure by looking at how the intensity of a patch of pixels changes when it is shifted in different directions.

*   **Image Gradient:** The foundation of the Harris detector is the image gradient, which indicates the direction and magnitude of the intensity change. The gradient is typically computed using Sobel operators.
    *   $I(x, y)$ is the image intensity at pixel $(x, y)$.
    *   $I_x = \frac{\partial I}{\partial x}$ and $I_y = \frac{\partial I}{\partial y}$ are the image gradients in the x and y directions, respectively.

*   **Structure Tensor (Second Moment Matrix):** For a local window (patch) around a pixel $(x, y)$, the Harris detector computes the structure tensor, $M$. This matrix summarizes the local image structure.

    $M = \begin{bmatrix} \sum_{x,y \in W} I_x^2 & \sum_{x,y \in W} I_x I_y \\ \sum_{x,y \in W} I_x I_y & \sum_{x,y \in W} I_y^2 \end{bmatrix}$

    where $W$ is the local window around pixel $(x, y)$, and the sums are taken over all pixels within this window. Often, a Gaussian smoothing is applied before summing to give more weight to pixels closer to the center of the window.

### 3.2 Harris Response Function

The structure tensor $M$ is used to derive a "corner response" function, $R$, which quantifies the likelihood of a pixel being a corner.

*   **Eigenvalues of M:** The eigenvalues of the structure tensor $\lambda_1$ and $\lambda_2$ provide information about the local image structure:
    *   If $\lambda_1 \approx 0$ and $\lambda_2 \approx 0$: The region is flat (no significant change in intensity).
    *   If $\lambda_1 >> 0$ and $\lambda_2 \approx 0$ (or vice versa): The region is an edge (significant change in one direction).
    *   If $\lambda_1 >> 0$ and $\lambda_2 >> 0$: The region is a corner (significant change in multiple directions).

*   **Harris Corner Strength (R):** The Harris response function $R$ is computed as follows:

    $R = \det(M) - k (\operatorname{trace}(M))^2$

    where:
    *   $\det(M) = (\sum I_x^2)(\sum I_y^2) - (\sum I_x I_y)^2$ (the determinant of M)
    *   $\operatorname{trace}(M) = \sum I_x^2 + \sum I_y^2$ (the trace of M)
    *   $k$ is a sensitivity parameter, typically set between 0.04 and 0.06.

### 3.3 Corner Detection Strategy

*   **Thresholding:** Pixels with a response $R$ above a certain threshold are considered corners.
*   **Non-Maximum Suppression:** To ensure that only the strongest corner response in a local neighborhood is selected, non-maximum suppression is applied. This involves finding local maxima of $R$ in a small neighborhood.

### 3.4 Example Calculation (Conceptual)

Consider a simple image patch:

```
0 0 0 0
0 1 1 0
0 1 1 0
0 0 0 0
```

*   **Gradient Calculation:** (Simplified, assuming horizontal and vertical differences)
    *   $I_x$:
        ```
        0 0 0 0
        -1 0 0 -1
        -1 0 0 -1
        0 0 0 0
        ```
    *   $I_y$:
        ```
        0 -1 -1 0
        0 0 0 0
        0 0 0 0
        0 -1 -1 0
        ```
*   **$I_x^2$, $I_y^2$, $I_x I_y$ Calculation:**
    *   $I_x^2$:
        ```
        0 0 0 0
        1 0 0 1
        1 0 0 1
        0 0 0 0
        ```
    *   $I_y^2$:
        ```
        0 1 1 0
        0 0 0 0
        0 0 0 0
        0 1 1 0
        ```
    *   $I_x I_y$:
        ```
        0 0 0 0
        0 0 0 0
        0 0 0 0
        0 0 0 0
        ```
*   **Windowed Sums (e.g., 3x3 window):** For the center pixel (1,1) in the original patch:
    *   $\sum I_x^2$: 1 (from the pixel at (1,0)) + 0 + 0 + 0 + 1 (from the pixel at (2,0)) + ... = 2 (approximately, considering the 3x3 window)
    *   $\sum I_y^2$: 1 (from the pixel at (0,1)) + 1 (from the pixel at (0,2)) + ... = 2 (approximately)
    *   $\sum I_x I_y$: 0

*   **Harris Response (R):** If $k=0.05$, $\det(M) \approx 2 \times 2 = 4$, $\operatorname{trace}(M) \approx 2 + 2 = 4$.
    $R \approx 4 - 0.05 \times (4)^2 = 4 - 0.05 \times 16 = 4 - 0.8 = 3.2$.
    A high value of $R$ indicates a corner.

**Learning Outcomes Covered:**
*   **CO1 (K2):** Understanding digital filtering operations (gradient computation is a form of filtering).
*   **CO3 (K3):** Applying corner detection algorithms. This section details one such algorithm.

**Alignment with Course Outcomes:**
*   **CO3 (K3):** Directly addresses the application of corner detection for locating objects.

**References:**
*   **Szeliski, R. (2011) "Computer Vision: Algorithms and Applications"**: Chapter 5 (Feature Detection) likely covers the Harris corner detector in detail.
*   **Davies, E.R. (2012) "Computer and Machine Vision: Theory Algorithm and Practicalities"**: Chapter 7 (Image Feature Detection and Description) is a probable source for this topic.
*   **Forsyth, D., & Ponce, J. (2002) "Computer Vision: A Modern Approach"**: Likely discusses gradient-based feature detection methods.

---

## 4. Shi and Tomasi Corner Detector (Good Features to Track)

The Shi and Tomasi corner detector is an improvement upon the Harris detector. It focuses on finding features that are not only corners but also have strong gradients in multiple directions, making them more suitable for tracking.

### 4.1 Key Improvement: Eigenvalue Thresholding

Instead of using the Harris response function, Shi and Tomasi directly use the eigenvalues of the structure tensor. They propose that a good feature point is one where both eigenvalues are large.

*   **Thresholding Eigenvalues:** A point $(x, y)$ is considered a corner if:
    $\min(\lambda_1, \lambda_2) > T$

    where $T$ is a threshold value.

### 4.2 Why it's "Good Features to Track"

*   **More Robust Tracking:** By selecting points with strong gradients in multiple directions (both $\lambda_1$ and $\lambda_2$ are large), these features are less likely to be confused by minor image variations or noise, leading to more stable tracking.
*   **Reduced Sensitivity to Edge Direction:** The Harris detector can be sensitive to the orientation of edges. Shi and Tomasi's approach is more balanced with respect to edge orientation.

### 4.3 Implementation Details

The implementation is similar to Harris:
1.  Compute image gradients ($I_x$, $I_y$).
2.  Compute the structure tensor $M$ (with Gaussian smoothing).
3.  Calculate the eigenvalues $\lambda_1$ and $\lambda_2$ of $M$.
4.  Threshold the minimum eigenvalue: $\min(\lambda_1, \lambda_2) > T$.
5.  Apply non-maximum suppression.

**Learning Outcomes Covered:**
*   **CO3 (K3):** Applying corner detection algorithms. This section presents an alternative and often preferred method.

**Alignment with Course Outcomes:**
*   **CO3 (K3):** Reinforces the ability to apply corner detection.
*   **CO5 (K4):** Understanding "good features to track" contributes to the analysis of scenes and implementation in practical applications (like tracking).

**References:**
*   **Szeliski, R. (2011) "Computer Vision: Algorithms and Applications"**: Likely discusses Shi and Tomasi as an extension of Harris.
*   **Mastering OpenCV with Practical Computer Vision Projects (Baggio, D. L., et al., 2012)**: OpenCV is a common library for implementing these algorithms, and this book would provide practical insights.

---

## 5. FAST Corner Detector (Features from Accelerated Segment Test)

FAST is a corner detection algorithm known for its speed and efficiency, making it suitable for real-time applications. It's a threshold-based corner detector that uses a simple test to identify corners.

### 5.1 Core Idea: Pixel Intensity Comparison

FAST identifies a pixel as a corner if there is a significant change in intensity around a circular neighborhood of that pixel.

*   **The FAST Test:** For a candidate pixel $p$, it checks a surrounding circular region of pixels (e.g., 16 pixels). A pixel is classified as a corner if there is a contiguous arc of pixels (e.g., 9 pixels) that are either all brighter than $p$ by a threshold $t$, or all darker than $p$ by a threshold $t$.

    *   Consider a pixel $p$ and its surrounding pixels at a certain radius.
    *   For each surrounding pixel, check if its intensity is $I_p + t$ or greater, or $I_p - t$ or less.
    *   If a continuous arc of $N$ (e.g., 9) pixels satisfies this condition, then $p$ is considered a corner.

### 5.2 Advantages of FAST

*   **Speed:** It avoids computationally expensive gradient calculations and eigenvalue decompositions, making it significantly faster than Harris or Shi and Tomasi.
*   **Simplicity:** The underlying principle is straightforward to understand and implement.

### 5.3 Disadvantages of FAST

*   **Sensitivity to Noise:** Because it's a threshold-based method, it can be more susceptible to noise compared to gradient-based methods.
*   **No Information about Corner Strength:** It doesn't inherently provide a measure of corner strength or orientation, which can be useful in some applications.
*   **Non-Maximum Suppression:** A separate step is needed to handle multiple detections of the same corner.

### 5.4 Variants and Improvements

*   **Rotated FAST:** Addresses some orientation sensitivity.
*   **FAST-ER:** A more efficient version.
*   **ORB (Oriented FAST and Rotated BRIEF):** Combines FAST with a binary descriptor (BRIEF) and orientation information for efficient and robust feature detection and description.

**Learning Outcomes Covered:**
*   **CO3 (K3):** Applying corner detection algorithms. This introduces a fast, real-time friendly option.

**Alignment with Course Outcomes:**
*   **CO3 (K3):** Direct application of a corner detection algorithm.
*   **CO5 (K4):** Speed is crucial for real-time applications, aligning with analysis and implementation.

**References:**
*   **Programming Computer Vision with Python (Solem, J. E., 2012)**: Might cover FAST as an example of an efficient feature detector.
*   **Mastering OpenCV with Practical Computer Vision Projects (Baggio, D. L., et al., 2012)**: OpenCV often implements FAST, so this book would be a good practical reference.

---

## 6. Other Corner Detection Methods (Briefly)

While Harris and FAST are prominent, other methods exist:

*   **Canny Edge Detector (indirectly):** While primarily an edge detector, the points where edges intersect can be identified as corners. However, it's not a direct corner detector.
*   **Moravec Corner Detector:** An older detector that analyzes image patches in four directions (horizontal, vertical, and two diagonals). It picks points where the sum of squared differences to shifted patches is maximal.

**Learning Outcomes Covered:**
*   **CO3 (K3):** Broadens the understanding of corner detection approaches.

---

## 7. Corner Detection in Practice: Workflow and Considerations

### 7.1 Typical Workflow

1.  **Grayscale Conversion:** Most corner detectors operate on grayscale images.
2.  **Noise Reduction (Optional but Recommended):** Apply a Gaussian blur to reduce noise, especially for gradient-based methods.
3.  **Gradient Calculation:** Compute image gradients (e.g., using Sobel operators).
4.  **Structure Tensor Computation:** Compute sums of $I_x^2$, $I_y^2$, and $I_x I_y$ over a window (often with Gaussian weighting).
5.  **Corner Response Calculation/Eigenvalue Analysis:** Apply the Harris response function or analyze eigenvalues.
6.  **Thresholding:** Select pixels with a response above a predefined threshold.
7.  **Non-Maximum Suppression:** Refine the detected corners to ensure only the strongest local maxima are kept.

### 7.2 Practical Considerations

*   **Parameter Tuning:** The performance of corner detectors is highly dependent on parameters like window size, smoothing sigma, and the corner response threshold ($k$, $T$). These often need to be tuned based on the specific application and image characteristics.
*   **Scale and Rotation Invariance:** Standard Harris and FAST are not inherently scale or rotation invariant. Scale-invariant feature detectors like SIFT (Scale-Invariant Feature Transform) or SURF (Speeded Up Robust Features) are often preferred when scale and rotation variations are significant.
*   **Image Quality:** Poor image quality, significant noise, or low contrast can degrade corner detection performance.
*   **Computational Cost:** Choose the detector based on real-time requirements. FAST is much faster than Harris.

**Learning Outcomes Covered:**
*   **CO3 (K3):** Understanding the practical steps and considerations for applying corner detection.
*   **CO5 (K4):** Analyzing scenes involves choosing appropriate algorithms and parameters.

**Alignment with Course Outcomes:**
*   **CO3 (K3):** Practical implementation aspects.
*   **CO5 (K4):** Emphasizes the analytical choice of parameters and algorithms for real-world scenarios.

**References:**
*   **Mastering OpenCV with Practical Computer Vision Projects (Baggio, D. L., et al., 2012)**: This book would be invaluable for understanding practical implementation details and parameter tuning in OpenCV.
*   **Programming Computer Vision with Python (Solem, J. E., 2012)**: Provides code examples and practical advice.

---

## 8. Practice Questions and Exercises

**Question 1:**
What are the main properties that define a "good" corner detector?

**Answer:**
Good localization, repeatability, distinctiveness, insensitivity to noise, and computational efficiency.

---

**Question 2:**
Explain the core idea behind the Harris corner detector and how it uses the structure tensor.

**Answer:**
The Harris detector identifies corners by analyzing the local image structure. It computes the structure tensor (second moment matrix) $M$ from image gradients. The eigenvalues of $M$ indicate the local geometry: if both eigenvalues are large, the region is considered a corner. The Harris response function $R = \det(M) - k (\operatorname{trace}(M))^2$ is used to quantify corner strength.

---

**Question 3:**
How does the Shi and Tomasi corner detector differ from the Harris corner detector, and why is it considered better for tracking?

**Answer:**
The Shi and Tomasi detector directly uses the eigenvalues of the structure tensor, flagging a point as a corner if the minimum eigenvalue is above a threshold ($\min(\lambda_1, \lambda_2) > T$). This contrasts with Harris's response function. It's better for tracking because selecting points with large eigenvalues ensures strong gradients in multiple directions, making the features more robust to minor changes and noise during tracking.

---

**Question 4:**
What is the primary advantage of the FAST corner detector?

**Answer:**
The primary advantage of the FAST (Features from Accelerated Segment Test) corner detector is its speed and computational efficiency, making it suitable for real-time applications. It achieves this by using a simple pixel intensity comparison test around a circular neighborhood.

---

**Question 5 (Practical Exercise):**
(Conceptual) Imagine an image with a sharp right-angle corner.
*   Describe the expected behavior of image gradients ($I_x$, $I_y$) at the corner point.
*   How would the eigenvalues of the structure tensor behave at this corner point?
*   How would this relate to the Harris response function value at the corner?

**Answer:**
*   **Image Gradients:** At a sharp corner, the image intensity changes rapidly in two distinct directions (e.g., along the edges forming the corner). This means both $I_x$ and $I_y$ will have significant magnitudes at the corner point.
*   **Eigenvalues:** The structure tensor at a corner will have a matrix with substantial values for $\sum I_x^2$, $\sum I_y^2$, and $\sum I_x I_y$. This leads to both eigenvalues ($\lambda_1$, $\lambda_2$) of the structure tensor being significantly large.
*   **Harris Response:** Since $\det(M) = \lambda_1 \lambda_2$ and $\operatorname{trace}(M) = \lambda_1 + \lambda_2$, and both $\lambda_1, \lambda_2$ are large, the Harris response $R = \det(M) - k (\operatorname{trace}(M))^2$ will also be large, indicating a strong corner.

---

## 9. Summary and Key Takeaways

*   **Corners** are significant image features defined by significant intensity changes in multiple directions.
*   They are crucial for **object recognition, matching, tracking, and 3D reconstruction**.
*   The **Harris corner detector** is a gradient-based method using the structure tensor and its response function ($R$).
*   The **Shi and Tomasi detector** improves on Harris by directly using eigenvalues for more robust tracking.
*   The **FAST detector** offers high speed by using a simple intensity-based segment test, ideal for real-time systems.
*   **Parameter tuning and non-maximum suppression** are essential for practical corner detection.
*   For scale and rotation invariance, consider features like SIFT or SURF.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
