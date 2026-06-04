---
title: "Review of image processing techniques"
subject: "COMPUTER VISION"
module: "Module 1: Review of image processing techniques"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a1e"
status: "completed"
scrapedAt: "2026-05-23T16:32:07.518Z"
---
# Computer Vision: Module 1 - Review of Image Processing Techniques

This module provides a foundational understanding of essential image processing techniques that are crucial for various computer vision applications. We will revisit core concepts and algorithms, ensuring a solid base for more advanced topics.

---

## Learning Outcomes Covered:

*   **LO1:** Understand digital filtering operations for CV applications.
*   **LO2:** Apply basic morphological and boundary operators for Computer vision applications.
*   **LO3:** Apply edge, corner detection algorithms to locate objects in an image.
*   **LO4:** Apply optical flow algorithms to detect moving objects in a video.
*   **LO5:** Analyse a given scene using appropriate computer vision algorithms to detect/recognize objects and to implement it in real time practical applications.

---

## Course Outcomes Aligned:

*   **CO1:** Understand digital filtering operations for CV applications. (Knowledge Level: K2) - Directly addressed by LO1.
*   **CO2:** Apply basic morphological and boundary operators for Computer vision applications (Knowledge Level: K3) - Directly addressed by LO2.
*   **CO3:** Apply edge, corner detection algorithms to locate objects in an image. (Knowledge Level: K3) - Directly addressed by LO3.
*   **CO4:** Apply optical flow algorithms to detect moving objects in a video. (Knowledge Level: K3) - Directly addressed by LO4.
*   **CO5:** Analyse a given scene using appropriate computer vision algorithms to detect/recognize objects and to implement it in real time practical applications. (Knowledge Level: K4) - This module lays the groundwork for CO5 by providing the fundamental tools needed for scene analysis and object detection/recognition. While not fully achieving K4 in this introductory module, it establishes the building blocks.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## Textbooks and Reference Material Integration:

This module draws upon the fundamental concepts presented in the core textbooks:

*   **Computer and Machine Vision by E. R. Davies:** Provides a comprehensive overview of image processing and vision techniques.
*   **Computer Vision: Algorithms and Applications by Richard Szeliski:** Offers a modern perspective and practical insights into CV algorithms.
*   **Computer Vision: A Modern Approach by David Forsyth and Jean Ponce:** Delves into theoretical underpinnings and algorithms.

Reference books like **Digital Image Processing and Computer Vision by R. J. Schalkoff** and **Programming Computer Vision with Python by Jan Erik Solem** will be implicitly referenced for practical implementation details and algorithm explanations.

---

## 1. Digital Filtering Operations for CV Applications (LO1, CO1)

Digital filtering is a fundamental operation in image processing, used to enhance or extract specific features from an image. It involves applying a kernel (or mask) to the image through a process called convolution.

### 1.1 Image Representation

*   **Digital Image:** A 2D array of pixels, where each pixel has a value representing its intensity (grayscale) or color.
    *   **Grayscale Image:** Represented as a matrix where each element is a pixel intensity value (e.g., 0-255 for 8-bit images).
    *   **Color Image:** Typically represented as three such matrices, one for each color channel (e.g., Red, Green, Blue - RGB).

### 1.2 Convolution

*   **Definition:** The process of applying a kernel (a small matrix) to an image, sliding it over each pixel and computing a weighted sum of the surrounding pixels.
*   **Formula (2D Discrete Convolution):**
    $$(f * k)(x, y) = \sum_{u=-\infty}^{\infty} \sum_{v=-\infty}^{\infty} f(x-u, y-v) k(u, v)$$
    Where:
    *   $f$ is the input image.
    *   $k$ is the kernel.
    *   $(x, y)$ are the coordinates of the output pixel.
    *   $(u, v)$ are the coordinates of the kernel.
*   **Padding:** To handle pixels at the image borders, padding (e.g., zero padding, replication padding) is often used.

### 1.3 Common Filtering Operations

#### 1.3.1 Smoothing/Blurring Filters

*   **Purpose:** Reduce noise and smooth out sharp transitions in intensity.
*   **Types:**
    *   **Averaging Filter (Box Filter):** Replaces each pixel with the average of its neighborhood.
        *   **Kernel Example (3x3):**
            $$
            \frac{1}{9}
            \begin{bmatrix}
            1 & 1 & 1 \\
            1 & 1 & 1 \\
            1 & 1 & 1
            \end{bmatrix}
            $$
        *   **Effect:** Blurs the image, reducing noise but also blurring edges.
    *   **Gaussian Filter:** Uses a Gaussian kernel, which gives more weight to pixels closer to the center.
        *   **Kernel Example (3x3, sigma=1):**
            $$
            \frac{1}{16}
            \begin{bmatrix}
            1 & 2 & 1 \\
            2 & 4 & 2 \\
            1 & 2 & 1
            \end{bmatrix}
            $$
        *   **Effect:** Provides smoother blurring than the averaging filter and is often preferred in CV. The degree of blurring is controlled by the standard deviation ($\sigma$) of the Gaussian function. (Refer to Szeliski, Chapter 2 for details on Gaussian smoothing).

#### 1.3.2 Sharpening Filters

*   **Purpose:** Enhance edges and fine details by increasing contrast.
*   **Types:**
    *   **Laplacian Filter:** Highlights regions with rapid changes in intensity (edges). It's a second-order derivative operator.
        *   **Kernel Example:**
            $$
            \begin{bmatrix}
            0 & 1 & 0 \\
            1 & -4 & 1 \\
            0 & 1 & 0
            \end{bmatrix}
            $$
            or
            $$
            \begin{bmatrix}
            1 & 1 & 1 \\
            1 & -8 & 1 \\
            1 & 1 & 1
            \end{bmatrix}
            $$
        *   **Effect:** Produces an image where edges are prominent.
    *   **Unsharp Masking:** A technique that subtracts a blurred version of the image from the original to create a mask highlighting edges, which is then added back to the original.

#### 1.3.3 Noise Reduction Filters

*   **Purpose:** Remove unwanted random variations in image intensity.
*   **Types:**
    *   **Median Filter:** Replaces each pixel with the median value of its neighborhood.
        *   **Algorithm:** Sort the pixel values in the neighborhood and pick the middle one.
        *   **Effect:** Very effective at removing salt-and-pepper noise (random black and white pixels) while preserving edges better than averaging filters. (Refer to Davies, Chapter 3 for detailed noise reduction techniques).

### 1.4 Frequency Domain Filtering

*   **Concept:** Transforming the image into the frequency domain (e.g., using Fourier Transform) allows for filtering based on frequency components.
    *   **Low-pass filter:** Removes high frequencies, leading to smoothing.
    *   **High-pass filter:** Removes low frequencies, highlighting edges.
    *   **Band-pass filter:** Passes a specific range of frequencies.
*   **Application:** Useful for removing periodic noise.

---

## 2. Basic Morphological and Boundary Operators (LO2, CO2)

Morphological operations are set-theoretic operations that process images based on their shape. They are particularly useful for segmenting objects and analyzing their structure.

### 2.1 Structuring Element

*   **Definition:** A small shape (e.g., square, disk, line) used as a probe for the morphological operations. Its size and shape determine the outcome.

### 2.2 Dilation

*   **Definition:** "Expands" or "grows" the bright regions in an image. A pixel is set to foreground (1) if its neighborhood, as defined by the structuring element, contains at least one foreground pixel.
*   **Operation:** $A \oplus B = \{a + b \mid a \in A, b \in B\}$
    Where $A$ is the image and $B$ is the structuring element.
*   **Effect:**
    *   Connects nearby objects.
    *   Fills small holes within objects.
    *   Enlarges objects.

### 2.3 Erosion

*   **Definition:** "Shrinks" or "erodes" the boundaries of foreground objects. A pixel is set to foreground (1) only if the structuring element, placed with its origin at that pixel, is entirely contained within the foreground.
*   **Operation:** $A \ominus B = \{a \mid a + b \in A, \forall b \in B\}$
*   **Effect:**
    *   Removes small objects.
    *   Separates connected objects.
    *   Shrinks objects.

### 2.4 Opening

*   **Definition:** An erosion followed by a dilation with the same structuring element.
*   **Operation:** $A \circ B = (A \ominus B) \oplus B$
*   **Effect:**
    *   Removes small objects (noise).
    *   Smooths contours from the outside.
    *   Does not change the size of persistent objects.

### 2.5 Closing

*   **Definition:** A dilation followed by an erosion with the same structuring element.
*   **Operation:** $A \bullet B = (A \oplus B) \ominus B$
*   **Effect:**
    *   Fills small holes within objects.
    *   Connects nearby objects.
    *   Smooths contours from the inside.

### 2.6 Boundary Extraction

*   **Definition:** Highlights the outlines of objects in an image.
*   **Method:** Achieved by eroding the object and then subtracting the eroded image from the original object.
*   **Operation:** $Boundary(A, B) = A \ominus B - (A \ominus B) \ominus B$
    Or more commonly: $Boundary(A, B) = A - (A \ominus B)$

### 2.7 Hit-or-Miss Transform

*   **Definition:** Used to find specific patterns in an image. It detects occurrences of a foreground object shape while excluding configurations where the background has a certain shape.
*   **Operation:** $A \circledast (B, C) = (A \ominus B) \cap (A^c \ominus C)$
    Where $A$ is the image, $B$ is the foreground structuring element, and $C$ is the background structuring element. $A^c$ is the complement of $A$.
*   **Application:** Useful for detecting corners, specific shapes, or isolated pixels.

---

## 3. Edge, Corner Detection Algorithms (LO3, CO3)

These algorithms are fundamental for feature extraction, enabling the identification of object boundaries and significant points in an image.

### 3.1 Edge Detection

*   **Definition:** The process of identifying points in a digital image where the image brightness changes sharply or has discontinuities. These points typically correspond to the boundaries of objects.
*   **Underlying Principle:** Edges are characterized by high gradients (first derivative) or rapid changes in intensity.

#### 3.1.1 Gradient-Based Edge Detectors

*   **Concept:** Compute the image gradient magnitude. High gradient magnitude indicates a potential edge.
*   **Gradient Operator:** Approximates the first derivative of the image intensity function.
    *   **Sobel Operator:** Uses kernels to approximate the gradient in the x and y directions.
        *   **Kernels:**
            $$
            G_x =
            \begin{bmatrix}
            -1 & 0 & 1 \\
            -2 & 0 & 2 \\
            -1 & 0 & 1
            \end{bmatrix}
            \quad
            G_y =
            \begin{bmatrix}
            -1 & -2 & -1 \\
            0 & 0 & 0 \\
            1 & 2 & 1
            \end{bmatrix}
            $$
        *   **Gradient Magnitude:** $|G| = \sqrt{G_x^2 + G_y^2}$
        *   **Gradient Direction:** $\theta = \arctan(\frac{G_y}{G_x})$
    *   **Prewitt Operator:** Similar to Sobel but with different weighting.
    *   **Roberts Cross Operator:** Uses simpler 2x2 kernels.

#### 3.1.2 Laplacian of Gaussian (LoG)

*   **Concept:** First, smooth the image with a Gaussian filter to reduce noise. Then, apply the Laplacian operator.
*   **Kernel:** The LoG kernel is an approximation of the second derivative.
*   **Effect:** Detects zero-crossings, which correspond to edges. More sensitive to noise than gradient-based methods without prior smoothing.

#### 3.1.3 Canny Edge Detector

*   **Definition:** A multi-stage algorithm that is widely considered one of the most effective edge detection methods.
*   **Steps:**
    1.  **Noise Reduction:** Apply Gaussian smoothing to reduce noise. (Szeliski, Chapter 2.3.3)
    2.  **Gradient Calculation:** Compute the intensity gradients using Sobel or similar operators.
    3.  **Non-Maximum Suppression:** Thin the edges by keeping only local maxima in the gradient direction. This ensures that edges are only one pixel thick.
    4.  **Double Thresholding:** Use two thresholds (high and low) to classify edge pixels. Pixels with gradient magnitude above the high threshold are sure edges. Pixels below the low threshold are discarded. Pixels between the two thresholds are considered edges only if they are connected to sure edges.
    5.  **Edge Tracking by Hysteresis:** Connect the edge segments identified in the previous step to form continuous edges.
*   **Advantages:** Robust to noise, produces thin and continuous edges.

### 3.2 Corner Detection

*   **Definition:** Identifying points in an image that have high curvature, meaning the intensity changes significantly in multiple directions. Corners are often reliable features for object recognition and tracking.
*   **Underlying Principle:** Corners are points where the image gradient direction changes rapidly.

#### 3.2.1 Harris Corner Detector

*   **Concept:** Based on the idea that a corner is a point where the intensity change is large in all directions. It analyzes the auto-correlation of the image in a local neighborhood.
*   **Steps:**
    1.  **Compute Gradients:** Calculate $I_x$ (gradient in x) and $I_y$ (gradient in y) for each pixel.
    2.  **Compute Products of Gradients:** Calculate $I_x^2$, $I_y^2$, and $I_x I_y$.
    3.  **Apply Gaussian Smoothing:** Smooth these products using a Gaussian kernel to get $S(I_x^2)$, $S(I_y^2)$, and $S(I_x I_y)$.
    4.  **Compute Corner Response:** For each pixel $(x, y)$, a matrix $M$ is constructed:
        $$M = \begin{bmatrix} S(I_x^2) & S(I_x I_y) \\ S(I_x I_y) & S(I_y^2) \end{bmatrix}$$
        The corner response $R$ is calculated as:
        $$R = \det(M) - k \cdot (\text{trace}(M))^2$$
        where $k$ is an empirical constant (typically 0.04 to 0.06).
    5.  **Thresholding:** Pixels with a high positive value of $R$ are classified as corners.
*   **Advantages:** Rotationally invariant, provides a score for corner likelihood.
*   **Limitations:** Not scale invariant. (Refer to Szeliski, Chapter 4.1.3 for details on corner detection).

#### 3.2.2 FAST (Features from Accelerated Segment Test)

*   **Concept:** A simpler and faster corner detector. It checks if a pixel is a corner by examining pixels on a circular Bresenham line around it. A pixel is a corner if there's a contiguous arc of 12 pixels on the circle that are either all brighter or all darker than the center pixel by a certain threshold.
*   **Advantages:** Very fast, suitable for real-time applications.

---

## 4. Optical Flow Algorithms (LO4, CO4)

Optical flow is the apparent motion of objects, surfaces, and edges in a visual scene caused by the relative motion between an observer (camera) and the scene. Optical flow algorithms estimate this motion.

### 4.1 Definition of Optical Flow

*   **Concept:** A vector field where each vector represents the displacement of a point or the motion of an object's image between two consecutive frames of a video.
*   **Brightness Constancy Assumption:** A key assumption is that the intensity of a point in the image remains constant over time, even as it moves.
    $$I(x, y, t) = I(x + dx, y + dy, t + dt)$$
    Where $I$ is image intensity, $(x, y)$ are spatial coordinates, and $t$ is time.

### 4.2 The Optical Flow Constraint Equation

*   **Derivation:** Using the brightness constancy assumption and the chain rule of differentiation:
    $$\frac{dI}{dt} = \frac{\partial I}{\partial x} \frac{dx}{dt} + \frac{\partial I}{\partial y} \frac{dy}{dt} + \frac{\partial I}{\partial t} = 0$$
    Let $u = \frac{dx}{dt}$ and $v = \frac{dy}{dt}$ be the components of the optical flow vector.
    $$I_x u + I_y v + I_t = 0$$
    Where $I_x$, $I_y$ are spatial derivatives (gradients) and $I_t$ is the temporal derivative.
*   **Problem:** This equation has two unknowns ($u, v$) and only one equation, making it ill-posed. We need additional constraints or assumptions.

### 4.3 Optical Flow Methods

#### 4.3.1 Differential Methods (Local Methods)

*   **Assumption:** The optical flow is constant within a small neighborhood around a pixel.
*   **Lucas-Kanade Method:**
    *   **Concept:** Solves the optical flow constraint equation for a neighborhood of pixels. It assumes that the flow is constant over this neighborhood.
    *   **Method:** Minimizes the sum of squared differences between the warped image and the reference image within a window.
    *   $$E(u, v) = \sum_{(x,y) \in W} (I(x+u, y+v, t+1) - I(x, y, t))^2$$
    *   For small displacements, this can be linearized and solved using a least-squares approach.
    *   **Implementation:** Uses $I_x$, $I_y$, and $I_t$.
    *   **Pros:** Efficient, relatively robust to noise.
    *   **Cons:** Sensitive to the window size, cannot handle large displacements. (Refer to Szeliski, Chapter 2.4.1 for details).

#### 4.3.2 Global Methods

*   **Concept:** Consider the entire image or large regions to constrain the problem.
*   **Horn-Schunck Method:**
    *   **Concept:** Adds a smoothness constraint to the optical flow field, assuming that the flow varies smoothly across the image.
    *   **Method:** Minimizes a functional that includes both the data fidelity term (brightness constancy) and a regularization term (smoothness).
    *   **Pros:** Tends to produce denser and smoother flow fields.
    *   **Cons:** Can smooth out important motion details, computationally more expensive.

### 4.4 Applications of Optical Flow

*   **Motion Detection:** Identifying moving objects in a video.
*   **Motion Estimation:** Quantifying the speed and direction of moving objects.
*   **Object Tracking:** Following the movement of specific objects over time.
*   **Action Recognition:** Understanding human actions based on motion patterns.
*   **3D Reconstruction:** Estimating depth and structure from motion.

---

## 5. Scene Analysis and Practical Implementation (LO5, CO5)

This section connects the fundamental image processing techniques to the broader goal of analyzing a scene for object detection and recognition, and hints at practical applications. While this module focuses on building blocks, CO5 requires understanding how these blocks are used.

### 5.1 Feature Extraction for Scene Analysis

*   **Edges, Corners, Blobs:** These low-level features identified by techniques discussed earlier serve as the initial building blocks for understanding an image.
*   **Interest Points:** Corners and other salient features are often used as "interest points" or "keypoints" that are more likely to correspond to the same physical point across different views or images. Algorithms like SIFT, SURF, and ORB build upon these concepts. (While not covered in detail here, these are essential for CO5).

### 5.2 Object Detection and Recognition Pipeline (Conceptual)

1.  **Preprocessing:** Noise reduction, contrast enhancement, etc., using filters.
2.  **Feature Extraction:**
    *   Detecting edges and corners to outline potential objects.
    *   Using morphological operations to refine object shapes or remove artifacts.
    *   (Later modules will cover more sophisticated feature descriptors).
3.  **Segmentation:** Separating objects of interest from the background.
4.  **Feature Matching/Classification:** Comparing extracted features to a database of known objects.
5.  **Post-processing:** Refinement of detection results.

### 5.3 Real-time Practical Applications

*   **Self-driving cars:** Lane detection, obstacle detection, pedestrian recognition (using edge, corner, and motion information).
*   **Robotics:** Navigation, object manipulation, environment mapping.
*   **Surveillance:** Motion detection, anomaly detection, object tracking.
*   **Augmented Reality:** Tracking markers or objects to overlay virtual content.
*   **Medical Imaging:** Feature extraction for diagnosis, segmentation of organs.

**Important Note:** Achieving the K4 knowledge level for CO5 typically involves combining multiple techniques from this module and subsequent modules to solve a specific vision problem, often involving experimentation and tuning.

---

## Important Points to Remember

*   **Convolution** is the core operation for most filtering tasks.
*   **Gaussian filters** are excellent for smoothing and noise reduction while preserving some sharpness.
*   **Median filters** are specialized for removing salt-and-pepper noise.
*   **Morphological operations** (erosion, dilation, opening, closing) are shape-based and crucial for object manipulation.
*   **Edge detection** aims to find sharp intensity changes, often using gradient information. **Canny** is a state-of-the-art edge detector.
*   **Corner detection** identifies points with high curvature. **Harris** is a classic detector, and **FAST** is a fast alternative.
*   **Optical flow** estimates motion between frames using assumptions like brightness constancy. The **Lucas-Kanade** method is a prominent local approach.
*   The techniques in this module are foundational for more complex CV tasks like object recognition and tracking, which fall under CO5.

---

## Practice Questions and Exercises

**Question 1 (CO1):**
You are given a noisy image with some fine details. Which filtering technique would be most suitable to reduce noise while preserving the fine details as much as possible?
a) Averaging Filter
b) Median Filter
c) Gaussian Filter
d) Laplacian Filter

**Answer 1:**
c) Gaussian Filter. While median filters are good for salt-and-pepper noise, Gaussian filters provide a good balance of noise reduction and detail preservation for general noise. Averaging filters tend to blur details more, and Laplacian filters are for sharpening, not smoothing.

**Question 2 (CO2):**
If you want to remove small specks of dust (small foreground objects) from a binary image without significantly changing the size of larger objects, which morphological operation would you use?
a) Dilation
b) Erosion
c) Opening
d) Closing

**Answer 2:**
c) Opening. Opening is erosion followed by dilation, which effectively removes small foreground objects and smooths contours from the outside. Dilation enlarges objects, erosion shrinks them, and closing fills holes or connects objects.

**Question 3 (CO3):**
A researcher wants to detect corners in an image for feature matching. They need a method that is rotationally invariant but not necessarily scale invariant. Which detector would be a good choice?
a) FAST Detector
b) Canny Edge Detector
c) Harris Corner Detector
d) Sobel Operator

**Answer 3:**
c) Harris Corner Detector. The Harris corner detector is known for its rotational invariance. FAST is very fast but not inherently rotationally invariant. Canny is for edge detection, and Sobel is for gradient calculation (edge detection precursor).

**Question 4 (CO4):**
What is the fundamental assumption made by most optical flow algorithms like Lucas-Kanade?
a) Image edges remain sharp over time.
b) Image brightness at a point remains constant over time.
c) Object shapes are convex.
d) Motion is always linear.

**Answer 4:**
b) Image brightness at a point remains constant over time. This is the brightness constancy assumption, which is crucial for deriving the optical flow constraint equation.

**Question 5 (CO5 - Conceptual):**
Imagine you are tasked with building a simple system to detect moving cars in a traffic camera feed. Outline the basic steps you would take, mentioning at least two image processing techniques from this module that would be relevant.

**Answer 5:**
1.  **Preprocessing:** Apply a Gaussian filter to reduce noise in each frame.
2.  **Motion Detection:** Calculate the optical flow between consecutive frames. Regions with significant flow vectors indicate movement. Alternatively, a simpler background subtraction method could be used, where the current frame is compared to a static background model (or a previous frame), and differences above a threshold indicate motion.
3.  **Feature Extraction/Refinement:** Use morphological operations (e.g., dilation or closing) to consolidate detected moving regions and potentially extract their boundaries (using boundary extraction).
4.  **Object Identification (Simple):** Filter the moving regions based on size or shape to identify "car-like" objects.

*   **Relevant Techniques:** Gaussian Filtering (for preprocessing), Optical Flow (or background subtraction for motion) and Morphological Operations (for refining detected regions).

---
This concludes the review of essential image processing techniques for Computer Vision. These fundamental concepts will be built upon in subsequent modules.