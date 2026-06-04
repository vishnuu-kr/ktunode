---
title: "Geometric Features"
subject: "COMPUTER VISION"
module: "Module 1: Review of image processing techniques"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a2f"
status: "completed"
scrapedAt: "2026-05-23T16:32:34.997Z"
---
# Computer Vision: Module 1 - Review of Image Processing Techniques
## Topic: Geometric Features

---

### Introduction

Geometric features are fundamental characteristics of an image that describe the spatial arrangement and shape of objects within it. Understanding and extracting these features is crucial for various computer vision tasks such as object recognition, image registration, segmentation, and camera calibration. This topic will delve into the core concepts and techniques for analyzing geometric properties of images, building upon basic image processing operations.

---

### Learning Outcomes

This section aims to equip you with the knowledge and skills to:

*   **Understand the role of geometric features in computer vision.**
*   **Identify and extract various geometric features from images.**
*   **Apply geometric transformations to manipulate images.**
*   **Utilize geometric features for object detection and recognition tasks.**

---

### Course Outcomes Alignment

This topic directly contributes to the following Course Outcomes:

*   **CO1: Understand digital filtering operations for CV applications. (Knowledge Level: K2)**
    *   Geometric features are often detected or enhanced using filtering operations (e.g., smoothing, edge detection).
*   **CO2: Apply basic morphological and boundary operators for Computer vision applications (Knowledge Level: K3)**
    *   Morphological operations are essential for shape analysis and feature extraction. Boundary detection is a prerequisite for many geometric feature descriptions.
*   **CO3: Apply edge, corner detection algorithms to locate objects in an image. (Knowledge Level: K3)**
    *   Edges and corners are primary geometric features used for object localization.
*   **CO5: Analyse a given scene using appropriate computer vision algorithms to detect/recognize objects and to implement it in real time practical applications. (Knowledge Level: K4)**
    *   A deep understanding of geometric features is foundational for scene analysis and object recognition.

---

### Key Concepts and Definitions

#### 1. What are Geometric Features?

Geometric features describe the **shape**, **size**, **orientation**, and **spatial relationships** of objects or patterns within an image. They are invariant to changes in illumination, color, and texture (to some extent), making them robust for recognition.

*   **Examples:** Lines, curves, corners, regions, contours, centroids, moments.

#### 2. Representation of Geometric Features

Geometric features can be represented in various ways:

*   **Point-based:** Coordinates of key points (e.g., corners, interest points).
*   **Line/Curve-based:** Parametric or descriptive equations (e.g., Hough Transform).
*   **Region-based:** Properties of segmented regions (e.g., area, perimeter, centroid, moments).
*   **Boundary-based:** Descriptors of object outlines (e.g., Fourier descriptors, chain codes).

#### 3. Geometric Transformations

Geometric transformations alter the spatial relationships between pixels in an image. They are fundamental for aligning images, correcting distortions, and manipulating object poses.

*   **Types of Transformations:**
    *   **Translation:** Shifting an image by a certain amount in the x and y directions.
        *   **Formula:** $x' = x + t_x$, $y' = y + t_y$
    *   **Rotation:** Rotating an image around a point (usually the origin or image center).
        *   **Formula (around origin):** $x' = x \cos(\theta) - y \sin(\theta)$, $y' = x \sin(\theta) + y \cos(\theta)$
    *   **Scaling:** Resizing an image.
        *   **Formula:** $x' = s_x \cdot x$, $y' = s_y \cdot y$
    *   **Shearing:** Slanting the image along an axis.
        *   **Formula (x-shear):** $x' = x + sh_x \cdot y$, $y' = y$
    *   **Affinity Transformations (Affinities):** Linear transformations that preserve collinearity and ratios of distances. They include scaling, rotation, shearing, and translation. Can be represented by a 2x2 matrix and a translation vector.
        *   **Formula:** $\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} + \begin{pmatrix} t_x \\ t_y \end{pmatrix}$
    *   **Projective Transformations (Homographies):** More general transformations that preserve straight lines but not necessarily parallelism or ratios of distances. Used for mapping planes to planes (e.g., perspective projection). Represented by a 3x3 matrix in homogeneous coordinates.
        *   **Formula:** $\begin{pmatrix} x' \\ y' \\ w' \end{pmatrix} = \begin{pmatrix} h_{11} & h_{12} & h_{13} \\ h_{21} & h_{22} & h_{23} \\ h_{31} & h_{32} & h_{33} \end{pmatrix} \begin{pmatrix} x \\ y \\ 1 \end{pmatrix}$
        *   The 2D coordinates are obtained by dividing by $w'$: $x_{img}' = x'/w'$, $y_{img}' = y'/w'$

*   **Forward Mapping vs. Backward Mapping:**
    *   **Forward Mapping:** For each pixel $(x, y)$ in the source image, compute its transformed position $(x', y')$ in the destination image and assign the pixel value. This can lead to holes or overlapping pixels in the destination image.
    *   **Backward Mapping:** For each pixel $(x', y')$ in the destination image, compute its corresponding source position $(x, y)$ and sample the pixel value. This often requires interpolation to handle non-integer source coordinates. This is the more common approach.

#### 4. Feature Detectors and Descriptors

Geometric features are typically detected using specific algorithms and then described for recognition.

*   **Corners:** Points with significant intensity changes in multiple directions.
    *   **Harris Corner Detector:** A classic algorithm that identifies corners by looking for local maxima of a corner response function. It relies on the eigenvalues of the gradient auto-correlation matrix.
        *   **Key Idea:** A corner is where the image changes significantly in all directions. The Harris corner detector measures this change by considering small image patches.
        *   **Mathematical Basis:** The response function $R$ is proportional to $\det(M) - k \cdot (\text{trace}(M))^2$, where $M$ is the structure tensor (gradient auto-correlation matrix) and $k$ is an empirical constant.
        *   **Interpretation of Eigenvalues ($\lambda_1, \lambda_2$):**
            *   **Edge:** One large eigenvalue, one small eigenvalue ($\lambda_1 \gg \lambda_2$).
            *   **Flat Region:** Both eigenvalues are small.
            *   **Corner:** Both eigenvalues are large ($\lambda_1 \gg 0, \lambda_2 \gg 0$).
    *   **Shi-Tomasi Corner Detector:** An improvement over Harris, it uses $\min(\lambda_1, \lambda_2)$ as the corner response, which is more sensitive to corners.

*   **Edges:** Boundaries between regions with significant intensity differences.
    *   **Gradient-based methods:** (Often covered in filtering modules, but relevant here for geometric boundary)
        *   **Sobel, Prewitt, Roberts operators:** Compute the first derivative of the image to approximate the gradient magnitude.
        *   **Laplacian of Gaussian (LoG) / Marr-Hildreth Operator:** Detects zero-crossings of the second derivative, which correspond to edges.
        *   **Canny Edge Detector:** A multi-stage algorithm that includes noise reduction (Gaussian smoothing), gradient computation, non-maximum suppression, and hysteresis thresholding to produce thin, continuous edges. This is highly effective for extracting geometric boundaries.

*   **Lines:** Straight segments in an image.
    *   **Hough Transform:** A robust technique for detecting lines (and other shapes) by transforming image points into a parameter space.
        *   **Line Equation:** $y = mx + c$ or $\rho = x \cos(\theta) + y \sin(\theta)$. The latter is preferred as it handles vertical lines better.
        *   **Parameter Space:** $(\rho, \theta)$ space, where $\rho$ is the distance from the origin to the line and $\theta$ is the angle of the normal vector to the line.
        *   **Process:** Each edge point $(x, y)$ in the image space votes for all possible lines $(\rho, \theta)$ passing through it. Accumulator cells in the $(\rho, \theta)$ space that receive a high number of votes correspond to detected lines in the image.
        *   **Application:** CO3 - Detecting lines for object localization.

*   **Blobs/Interest Points:** Regions or points of interest that are distinctive and can be reliably detected across different views.
    *   **SIFT (Scale-Invariant Feature Transform):** Detects and describes local features (keypoints) in an image that are invariant to scale and rotation.
    *   **SURF (Speeded Up Robust Features):** A faster approximation of SIFT.
    *   **ORB (Oriented FAST and Rotated BRIEF):** A fast binary descriptor, often used in real-time applications.

*   **Contours:** Curves joining all the continuous points along the boundary of an object.
    *   **Detection:** Often obtained after edge detection and morphological operations (e.g., `findContours` in OpenCV).
    *   **Description:**
        *   **Chain Codes:** Represent the boundary as a sequence of directional codes (e.g., 0 for right, 1 for up-right, etc.).
        *   **Fourier Descriptors:** Represent the contour in the frequency domain by applying a Fourier transform to the sequence of contour points.
        *   **Moments:** Image moments can describe the shape of regions, including their centroid, orientation, and extent.

#### 5. Image Moments

Image moments are quantitative measures of the image's shape and can be used to describe geometric properties of regions. They are particularly useful for object recognition and tracking.

*   **Definition:** The $(p, q)$-th order moment $m_{pq}$ of a 2D image $I(x, y)$ is defined as:
    $m_{pq} = \sum_{x,y} x^p y^q I(x, y)$
    For continuous images: $m_{pq} = \iint_{-\infty}^{\infty} x^p y^q I(x, y) dx dy$

*   **Central Moments:** Moments calculated with respect to the image centroid $(\bar{x}, \bar{y})$.
    *   $\mu_{pq} = \sum_{x,y} (x - \bar{x})^p (y - \bar{y})^q I(x, y)$
    *   **Centroid:** $(\bar{x}, \bar{y}) = (\frac{m_{10}}{m_{00}}, \frac{m_{01}}{m_{00}})$
        *   $\bar{x}$ is the x-coordinate of the center of mass.
        *   $\bar{y}$ is the y-coordinate of the center of mass.
        *   $m_{00}$ is the total number of pixels (or sum of pixel values), representing the area or mass of the object.

*   **Invariant Moments:** Central moments can be normalized to become invariant to translation, scaling, and rotation.
    *   **Hu Moments:** A set of seven moment invariants that are commonly used for shape recognition. They are derived from the central moments.
        *   **$\eta_{10} = \mu_{10}/\mu_{00}^{3/2} = 0$**
        *   **$\eta_{01} = \mu_{01}/\mu_{00}^{3/2} = 0$** (Normalization for translation)
        *   **$\eta_{20} = \mu_{20}/\mu_{00}^{2}$** (Normalized second-order central moment)
        *   **$\eta_{02} = \mu_{02}/\mu_{00}^{2}$**
        *   **$\eta_{11} = \mu_{11}/\mu_{00}^{2}$**
        *   **$\eta_{30} = \mu_{30}/\mu_{00}^{5/2}$**
        *   Scale and rotation invariance are achieved by combining these normalized central moments. The exact formulas for Hu moments are quite complex and involve combinations of $\eta_{pq}$.

*   **Applications of Moments:**
    *   **Centroid:** Location of the object's center of mass.
    *   **Area ($m_{00}$):** Size of the object.
    *   **Orientation:** Can be derived from the second-order central moments. The axis of minimum inertia.
    *   **Shape Description:** Hu moments provide a compact and robust description of object shape.

#### 6. Boundary Operators and Morphological Operations (Revisiting CO2)

While covered in other modules, these are crucial for geometric feature extraction.

*   **Boundary Extraction:** Identifying pixels that lie on the boundary of an object.
    *   Can be achieved by subtracting a dilated version of the image from the original image.
    *   Also, `findContours` in OpenCV is a primary way to get boundary points.

*   **Morphological Operations:**
    *   **Erosion:** Shrinks objects and separates connected components.
    *   **Dilation:** Expands objects and fills holes.
    *   **Opening:** Erosion followed by dilation (removes small objects, smooths contours).
    *   **Closing:** Dilation followed by erosion (fills holes, connects nearby objects).
    *   **Applications:**
        *   **Shape Simplification:** Smoothing jagged edges.
        *   **Noise Removal:** Removing small artifacts.
        *   **Skeletonization:** Extracting the "skeleton" of an object, which represents its essential shape.
        *   **Convex Hull:** Finding the smallest convex polygon enclosing an object.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### Textbooks and Reference Integration

*   **Computer and Machine Vision by E. R. Davies:** Chapter 4 (Segmentation) and Chapter 7 (Feature Extraction) would cover many of these geometric concepts, including moments, shape descriptors, and contour analysis.
*   **Computer Vision: Algorithms and Applications by Richard Szeliski:** Chapter 4 (Image Formation) and Chapter 6 (Feature Detection and Matching) are highly relevant. Szeliski provides excellent coverage of feature detectors (Harris, SIFT, etc.) and geometric transformations (affinities, homographies).
*   **Computer Vision: A Modern Approach by David Forsyth and Jean Ponce:** Chapter 4 (Edges and Contours) and Chapter 11 (Geometric Camera Calibration) would be beneficial. Forsyth and Ponce discuss edge detection, contour following, and the geometric principles behind camera models.
*   **Deep Learning, by Goodfellow, Bengio, and Courville:** While primarily focused on deep learning, concepts like convolutional layers can be seen as learning sophisticated geometric feature detectors. However, for this specific topic, it's more of a foundational understanding of image properties.
*   **Mastering OpenCV with Practical Computer Vision Projects:** This book would provide practical implementations of all the algorithms discussed, from Harris corner detection to Hough transform and contour analysis.
*   **Digital Image Processing and Computer Vision, by R. J. Schalkoff:** Schalkoff's book covers fundamental image processing and computer vision techniques, including shape analysis, moments, and feature extraction in detail.

---

### Examples

#### Example 1: Harris Corner Detection

Imagine an image of a chessboard. The corners of the squares are clear points where the intensity changes sharply in two directions. The Harris corner detector would identify these points by analyzing the local image structure.

*   **Scenario:** Detecting the corners of a stop sign to estimate its orientation.

#### Example 2: Hough Transform for Line Detection

In an image of a road with lane markings, the Hough Transform can be used to detect the straight lines representing the lanes. By mapping these lines to the $(\rho, \theta)$ parameter space, the accumulator array will show peaks at the $(\rho, \theta)$ values corresponding to the lane lines.

*   **Scenario:** Detecting horizontal and vertical lines in a scanned document to understand its layout.

#### Example 3: Image Moments for Shape Recognition

Consider two shapes: a circle and an ellipse. If we compute their moments, the moments of the circle would be invariant to rotation (due to symmetry), while the moments of the ellipse would reflect its elongation. By using invariant moments (like Hu moments), we can classify the shape regardless of its orientation or size.

*   **Scenario:** Identifying different types of screws or bolts based on their cross-sectional shape.

#### Example 4: Geometric Transformations for Image Stitching

When creating a panorama from multiple images, geometric transformations (specifically, homographies) are used to warp one image to align with another, allowing them to be seamlessly stitched together.

*   **Scenario:** Aligning two different aerial views of the same city block.

---

### Practice Questions and Exercises

**Q1:** Explain the difference between affine and projective transformations. Provide an example scenario where each is typically used in computer vision.

**Answer:**
*   **Affine Transformations:** Preserve collinearity and ratios of distances along lines. They can represent translation, rotation, scaling, and shearing. Example: Resizing an image, rotating it, or changing its aspect ratio.
*   **Projective Transformations (Homographies):** Preserve collinearity but not necessarily parallelism or ratios of distances. They can represent perspective effects. Example: Mapping a flat surface (like a piece of paper) viewed from an angle to a frontal view, or image stitching.

**Q2:** What is the purpose of image moments? Describe how the centroid of an object can be calculated using image moments.

**Answer:** Image moments quantify the geometric properties of an image region, such as its area, centroid, orientation, and shape. The centroid $(\bar{x}, \bar{y})$ is calculated as the center of mass:
$\bar{x} = \frac{m_{10}}{m_{00}}$
$\bar{y} = \frac{m_{01}}{m_{00}}$
where $m_{pq} = \sum_{x,y} x^p y^q I(x, y)$ are the image moments, and $m_{00} = \sum_{x,y} I(x, y)$ is the total sum of pixel values (area/mass).

**Q3:** You are given an image with several straight lines. Describe the general principle of the Hough Transform for detecting these lines. What are the axes of the Hough parameter space for line detection?

**Answer:** The Hough Transform works by transforming points from the image space into a parameter space. For line detection, a line in the image space can be represented by parameters $(\rho, \theta)$ in the Hough space, where $\rho$ is the perpendicular distance from the origin to the line, and $\theta$ is the angle of the normal to the line. Each edge point in the image space maps to a sinusoidal curve in the $(\rho, \theta)$ space. Points that lie on the same line in the image space will intersect at a single point in the Hough space. Peaks in the Hough accumulator array indicate the presence and parameters of lines in the original image. The axes of the Hough parameter space are typically $\rho$ and $\theta$.

**Q4:** Consider the Harris corner detection algorithm. How does it differentiate between an edge, a flat region, and a corner?

**Answer:** The Harris corner detector analyzes the eigenvalues ($\lambda_1, \lambda_2$) of the gradient auto-correlation matrix $M$.
*   **Flat Region:** Both eigenvalues are small ($\lambda_1 \approx 0, \lambda_2 \approx 0$). The intensity doesn't change significantly in any direction.
*   **Edge:** One eigenvalue is large, and the other is small ($\lambda_1 \gg \lambda_2$). The intensity changes significantly in one direction but not the other.
*   **Corner:** Both eigenvalues are large ($\lambda_1 \gg 0, \lambda_2 \gg 0$). The intensity changes significantly in multiple directions. The corner response function $R$ is designed to be large only in the corner case.

---

### Important Points to Remember

*   **Geometric features** are invariant to illumination and color changes, making them robust for recognition.
*   **Geometric transformations** are essential for image manipulation, alignment, and correcting distortions.
*   **Backward mapping** is generally preferred over forward mapping for geometric transformations to avoid gaps and overlaps.
*   The **Hough Transform** is a powerful tool for detecting parameterized shapes like lines and circles.
*   **Image moments**, especially **invariant moments (Hu Moments)**, provide a compact and robust description of object shape.
*   **Corners** are detected by identifying points with significant intensity variation in multiple directions.
*   **Edges** represent boundaries of significant intensity change.
*   **Contours** are the pixel sequences forming object boundaries and can be described using chain codes or Fourier descriptors.

---

### Further Exploration

*   **SIFT and SURF descriptors:** How these descriptors encode geometric information and achieve scale and rotation invariance.
*   **Geometric Camera Calibration:** How geometric principles are used to relate 2D image points to 3D world points.
*   **Stereo Vision:** How geometric relationships between two cameras are used to infer depth.
*   **3D Reconstruction:** Using geometric features to build 3D models from images.

---

This concludes the notes on Geometric Features. Remember to practice implementing these concepts using libraries like OpenCV to solidify your understanding.