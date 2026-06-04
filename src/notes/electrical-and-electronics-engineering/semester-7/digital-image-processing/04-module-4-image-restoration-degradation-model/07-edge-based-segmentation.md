---
title: "edge based segmentation"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Restoration: Degradation model"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36938"
status: "completed"
scrapedAt: "2026-05-23T16:35:42.451Z"
---
# Digital Image Processing: Module 4 - Image Restoration: Degradation Model

## Topic: Edge-Based Segmentation

**Learning Outcomes:**

*   Understand the fundamental principles of edge detection.
*   Analyze the relationship between edges and image segmentation.
*   Learn about various edge detection operators and their characteristics.
*   Understand the process of linking edge points to form continuous boundaries.
*   Evaluate the strengths and weaknesses of edge-based segmentation techniques.

**Course Outcomes Alignment:**

*   **CO1: Understand different components of image processing system (K2)** - Edge-based segmentation is a key component of the image analysis pipeline.
*   **CO2: Analyze the various concepts and mathematical transforms necessary for image processing (K3)** - Edge detection relies on gradient calculations and filtering, which are mathematical concepts.
*   **CO4: Analyze the filtering and restoration of images (K3)** - While edge detection is primarily a segmentation technique, it often involves filtering to reduce noise before or after edge extraction.
*   **CO5: Understand the basic image segmentation techniques (K2)** - This topic directly addresses one of the fundamental image segmentation techniques.

---

### 1. Introduction to Image Segmentation

**Definition:** Image segmentation is the process of partitioning a digital image into multiple segments (sets of pixels, also known as image objects). The goal is to simplify or change the representation of an image into something more meaningful and easier to analyze.

**Why Segment Images?**

*   **Object Recognition:** To isolate objects of interest for identification.
*   **Scene Understanding:** To break down a complex scene into its constituent parts.
*   **Measurement:** To quantify properties of objects within an image (e.g., size, shape, area).
*   **Image Analysis:** To prepare images for further processing or analysis tasks.

**Segmentation Approaches:**

There are several general approaches to image segmentation:

*   **Region-based segmentation:** Groups pixels based on similarity (e.g., color, intensity, texture).
*   **Edge-based segmentation:** Identifies sharp discontinuities in intensity, which often correspond to object boundaries.
*   **Clustering-based segmentation:** Groups pixels into clusters based on their feature vectors.
*   **Watershed segmentation:** Treats the image as a topographic map and finds catchment basins.

---

### 2. Edge-Based Segmentation: The Core Idea

**Definition:** Edge-based segmentation is a technique that identifies and locates sharp changes in image intensity. These changes, known as **edges**, are often associated with the boundaries of objects or significant features in an image.

**The Intuition:**

*   When we look at an image, our brains are adept at recognizing outlines and boundaries. These boundaries are created by abrupt shifts in brightness or color.
*   Edge detection aims to mathematically capture these abrupt shifts.
*   By finding these edges, we can potentially delineate the regions of interest in an image.

**How Edges Relate to Segmentation:**

*   Edges represent discontinuities in the image.
*   By finding a complete set of connected edges that enclose regions, we can effectively segment the image into distinct areas.

---

### 3. Understanding Edges: Gradients and Derivatives

**The Mathematical Foundation:**

Edges are characterized by rapid changes in image intensity. In calculus, rapid changes are detected using derivatives.

*   **First-Order Derivative (Gradient):** The gradient of an image measures the rate of change of intensity in different directions. A large gradient magnitude indicates a significant change in intensity, suggesting the presence of an edge.
    *   For a 2D image function $f(x, y)$, the gradient is a vector: $\nabla f = \left[ \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right]$
    *   The **gradient magnitude** ($|\nabla f|$) indicates the strength of the edge.
    *   The **gradient direction** ($\theta$) indicates the orientation of the edge.
*   **Second-Order Derivative (Laplacian):** The Laplacian of an image measures the rate of change of the gradient. It can detect edges and also zero-crossings, which are points where the second derivative is zero and is useful for locating edges precisely.
    *   Laplacian: $\nabla^2 f = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2}$

**Important Note (Gonzalez & Woods, 4th Ed., Chapter 3):** The derivative operators are highly sensitive to noise. Therefore, it's common practice to smooth the image before applying derivative operators or use derivative-based operators that incorporate smoothing.

---

### 4. Edge Detection Operators

Edge detection operators are typically implemented using masks (kernels) that approximate the gradient or Laplacian.

#### 4.1. First-Order Derivative Operators (Gradient Operators)

These operators estimate the gradient of the image.

**a) Roberts Cross Operator:**

*   **Concept:** Uses a pair of $2 \times 2$ masks to approximate the gradient in the horizontal and vertical directions.
*   **Masks:**
    $$
    G_x = \begin{bmatrix} +1 & 0 \\ 0 & -1 \end{bmatrix} \quad G_y = \begin{bmatrix} 0 & +1 \\ -1 & 0 \end{bmatrix}
    $$
*   **Operation:**
    *   Convolve the image with $G_x$ to get an approximation of $\frac{\partial f}{\partial x}$.
    *   Convolve the image with $G_y$ to get an approximation of $\frac{\partial f}{\partial y}$.
    *   Calculate gradient magnitude: $|\nabla f| = \sqrt{G_x^2 + G_y^2}$
    *   Calculate gradient direction: $\theta = \arctan\left(\frac{G_y}{G_x}\right)$
*   **Pros:** Simple and computationally efficient.
*   **Cons:** Sensitive to noise, produces relatively thick edges.

**b) Prewitt Operator:**

*   **Concept:** Uses a pair of $3 \times 3$ masks to approximate the gradient. It averages the gradient across neighboring pixels, making it slightly more robust to noise than Roberts.
*   **Masks:**
    $$
    G_x = \begin{bmatrix} -1 & 0 & +1 \\ -1 & 0 & +1 \\ -1 & 0 & +1 \end{bmatrix} \quad G_y = \begin{bmatrix} -1 & -1 & -1 \\ 0 & 0 & 0 \\ +1 & +1 & +1 \end{bmatrix}
    $$
*   **Operation:** Similar to Roberts, convolve with $G_x$ and $G_y$, then compute magnitude and direction.
*   **Pros:** Better noise reduction than Roberts.
*   **Cons:** Still sensitive to noise, edges can be thick.

**c) Sobel Operator:**

*   **Concept:** Similar to Prewitt but uses weights to emphasize the central row/column, giving more importance to pixels closer to the center. This is a widely used and effective operator.
*   **Masks:**
    $$
    G_x = \begin{bmatrix} -1 & 0 & +1 \\ -2 & 0 & +2 \\ -1 & 0 & +1 \end{bmatrix} \quad G_y = \begin{bmatrix} -1 & -2 & -1 \\ 0 & 0 & 0 \\ +1 & +2 & +1 \end{bmatrix}
    $$
*   **Operation:** Similar to Roberts and Prewitt.
*   **Pros:** Good balance between edge detection and noise suppression. Produces good quality edges.
*   **Cons:** Edges can still be thick.

**Example (Gonzalez & Woods, 4th Ed., Figure 3.31):** Illustrates the output of Sobel operators on a sample image, showing how it highlights boundaries.

#### 4.2. Second-Order Derivative Operators (Laplacian Operators)

These operators approximate the Laplacian. They are good at finding edges but are very sensitive to noise.

**a) Laplacian Operator:**

*   **Concept:** Directly approximates the Laplacian using a single mask.
*   **Mask:**
    $$
    \nabla^2 f = \begin{bmatrix} 0 & 1 & 0 \\ 1 & -4 & 1 \\ 0 & 1 & 0 \end{bmatrix} \quad \text{or} \quad \begin{bmatrix} 1 & 1 & 1 \\ 1 & -8 & 1 \\ 1 & 1 & 1 \end{bmatrix} \quad \text{or others}
    $$
*   **Operation:** Convolve the image with the Laplacian mask. Edges are detected at zero-crossings of the resulting image.
*   **Pros:** Can produce thin, precise edges.
*   **Cons:** Highly sensitive to noise. It detects edges as zero-crossings, which can be tricky to implement and interpret.

**b) Laplacian of Gaussian (LoG) / Marr-Hildreth Operator:**

*   **Concept:** This operator combines smoothing (Gaussian filter) with differentiation (Laplacian). The Gaussian filter reduces noise before applying the Laplacian.
*   **Process:**
    1.  Smooth the image with a Gaussian filter $G(x, y, \sigma)$, where $\sigma$ controls the degree of smoothing.
    2.  Apply the Laplacian operator to the smoothed image.
*   **Pros:** Effective at reducing noise and finding precise edges.
*   **Cons:** Computationally more expensive due to the two-step process. The choice of $\sigma$ is critical.

**Example (Gonzalez & Woods, 4th Ed., Figure 3.34):** Shows the LoG operator's ability to find edges in noisy images.

#### 4.3. Canny Edge Detector (Optimal Edge Detector)

*   **Concept:** A multi-stage algorithm designed to be optimal in terms of:
    1.  **Good detection:** Minimize the probability of missing true edges or detecting false edges.
    2.  **Good localization:** Detected edges should be as close as possible to the true edges.
    3.  **Single response:** Each true edge should be marked only once.
*   **Steps:**
    1.  **Noise Reduction:** Smooth the image using a Gaussian filter.
        *   *Implementation:* Apply a Gaussian kernel $G(x, y, \sigma)$.
    2.  **Gradient Calculation:** Find the gradient magnitude and direction using Sobel operators (or similar).
        *   *Implementation:* Compute $G_x$ and $G_y$, then $|\nabla f|$ and $\theta$.
    3.  **Non-maximum Suppression:** Thin the edges by keeping only local maxima in the gradient magnitude along the gradient direction. This ensures that edges are only one pixel wide.
        *   *How:* For each pixel, check if its gradient magnitude is greater than its neighbors along the gradient direction. If not, suppress it (set to 0).
    4.  **Double Thresholding:** Classify edge pixels into strong, weak, and non-edges based on two thresholds: a high threshold ($T_{high}$) and a low threshold ($T_{low}$).
        *   Pixels with gradient magnitude $> T_{high}$ are classified as **strong** edge pixels.
        *   Pixels with gradient magnitude between $T_{low}$ and $T_{high}$ are classified as **weak** edge pixels.
        *   Pixels with gradient magnitude $< T_{low}$ are classified as **non-edge** pixels.
    5.  **Edge Tracking by Hysteresis:** Connect edge segments by keeping weak edge pixels that are connected to strong edge pixels. Weak edges not connected to strong edges are discarded.
        *   *Logic:* A weak edge pixel becomes an edge pixel if it is adjacent to a strong edge pixel.
*   **Pros:** Produces very clean, thin, and well-localized edges. Generally considered the state-of-the-art for edge detection.
*   **Cons:** Computationally more intensive than simpler operators. Parameter tuning (Gaussian $\sigma$, thresholds) is crucial for optimal performance.

**Important Note (Gonzalez & Woods, 4th Ed., Chapter 3):** The Canny edge detector is a sophisticated algorithm that balances detection accuracy with noise suppression. The choice of parameters $\sigma$, $T_{low}$, and $T_{high}$ significantly impacts the results.

---

### 5. Edge Linking and Segmentation

Once edges are detected, they often appear as fragmented curves or isolated pixels. Edge linking is the process of connecting these edge pixels into continuous curves or contours.

**Methods for Edge Linking:**

*   **Following edge pixels:** Start at a detected edge pixel and search for adjacent edge pixels in a connected manner.
*   **Using edge properties:** Link edges based on continuity of direction, proximity, and similar intensity values.
*   **Hough Transform:** A powerful technique for detecting lines, circles, and other shapes even when they are broken or noisy. It works by transforming image points into a parameter space and finding peaks in that space, which correspond to the parameters of the detected shapes.
    *   **For line detection:** A line in image space ($y = mx + c$) can be represented as a point in a parameter space $(m, c)$. Alternatively, using polar coordinates ($x \cos \theta + y \sin \theta = \rho$), a line in image space is a point in parameter space $(\rho, \theta)$, and points on the line map to a sinusoidal curve in the parameter space. The intersection of these curves (peaks) indicates the parameters of the line.
*   **Graph-based methods:** Represent edge pixels as nodes in a graph and link them based on edge properties and connectivity.

**Segmentation based on Linked Edges:**

Once connected edge segments are formed, they can be used to delineate regions:

*   **Closed contours:** If the edge linking process results in closed contours, these contours can define the boundaries of segmented regions.
*   **Region growing:** Edge information can be used as a starting point or constraint for region growing algorithms.

**Challenges in Edge-Based Segmentation:**

*   **Noise:** Even with smoothing, noise can lead to spurious edges or broken edges.
*   **Edge thickness:** Simple gradient operators can produce thick edges. Non-maximum suppression helps, but fine-tuning is needed.
*   **Missing edges:** Due to low contrast or noise, some actual edges might not be detected.
*   **Connectivity:** Linking fragmented edge segments into complete boundaries can be difficult.
*   **Parameter tuning:** Operators like Canny require careful selection of parameters.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 6. Practical Considerations and Textual References

*   **Gonzalez & Woods, 4th Ed.:**
    *   **Chapter 3: Intensity Transformations and Spatial Filtering:** This chapter is fundamental for understanding the gradient operators (Roberts, Prewitt, Sobel) and Laplacian operators. It provides mathematical derivations and visual examples of their output. The discussion on smoothing filters (like Gaussian) is crucial for understanding why they are used before differentiation.
    *   **Chapter 4: Image Restoration:** While this topic is from Module 4 (Image Restoration), edge-based segmentation falls under image analysis and often *uses* filtering techniques discussed in restoration. The concept of a degradation model, though not directly applied to edge detection itself, is part of the broader context of the module.
    *   **Chapter 11: Image Segmentation:** This chapter extensively covers various segmentation techniques, including edge-based methods. It details the Canny edge detector thoroughly and discusses edge linking algorithms.
*   **Jayaraman, Esakkirajan, Veerakumar (McGraw Hill, 1st Ed.):**
    *   Likely covers similar ground as Gonzalez & Woods, focusing on the mathematical underpinnings of gradient and Laplacian operators for edge detection and basic edge linking strategies.

*   **Castleman (Pearson Education, 2/e):** Might provide a more applied perspective on edge detection and its use in image analysis tasks, potentially with examples from medical imaging or remote sensing.
*   **Jain (PHI, 1988):** As an older text, it will provide the foundational concepts and early algorithms for edge detection.
*   **Pratt (John Wiley, 4/e, 2007):** Known for its comprehensive coverage, Pratt's book will likely offer detailed mathematical treatments and comparative analyses of various edge detectors.

**Key Takeaway (CO5):** Edge-based segmentation is a fundamental technique for identifying boundaries by detecting significant changes in image intensity, often using gradient-based operators.

---

### 7. Practice Questions and Answers

**Question 1:**
Which of the following operators is known for its optimality in terms of detection, localization, and single response?
a) Roberts Cross Operator
b) Prewitt Operator
c) Sobel Operator
d) Canny Edge Detector

**Answer 1:**
d) Canny Edge Detector

**Explanation:** The Canny edge detector was designed to be optimal according to specific criteria, making it a superior choice for many applications.

**Question 2:**
The Sobel operator uses weights that emphasize the central row/column. What is the primary benefit of this weighting compared to the Prewitt operator?

**Answer 2:**
The weighting in the Sobel operator gives more importance to pixels closer to the center. This generally leads to better edge localization and a slight improvement in noise suppression compared to the Prewitt operator, which uses uniform weights.

**Question 3:**
Explain the concept of "non-maximum suppression" in the context of edge detection and why it's important for segmentation.

**Answer 3:**
Non-maximum suppression is a process used to thin edges detected by gradient-based operators. After calculating the gradient magnitude for each pixel, this step ensures that only the local maxima along the gradient direction are preserved. This is important for segmentation because it results in edges that are typically only one pixel wide, providing cleaner boundaries for region delineation. Without it, detected edges might be several pixels thick, making it difficult to accurately define object boundaries.

**Question 4:**
What is the primary advantage of using the Laplacian of Gaussian (LoG) operator over a simple Laplacian operator for edge detection, especially in noisy images?

**Answer 4:**
The primary advantage of the LoG operator is its built-in noise reduction. By first smoothing the image with a Gaussian filter, the LoG operator significantly reduces the sensitivity to noise that plagues the simple Laplacian operator. This allows for the detection of edges more reliably in images corrupted by noise.

**Question 5:**
Describe the "edge tracking by hysteresis" step in the Canny edge detector. What problem does it solve?

**Answer 5:**
Edge tracking by hysteresis is the final stage of the Canny edge detector. It uses two thresholds, a high threshold ($T_{high}$) and a low threshold ($T_{low}$).
1.  Pixels with gradient magnitude above $T_{high}$ are considered "strong" edge pixels.
2.  Pixels with gradient magnitude between $T_{low}$ and $T_{high}$ are considered "weak" edge pixels.
3.  Pixels below $T_{low}$ are discarded.
The process then connects weak edge pixels to strong edge pixels. A weak edge pixel is kept as an edge if it is connected to a strong edge pixel (either directly or through a path of other weak edge pixels that are connected to a strong edge pixel). This step solves the problem of fragmented edges and spurious edge pixels caused by varying noise levels and local intensity changes. It helps to connect parts of an edge that might have dropped below the high threshold but are still part of the true edge, while discarding weak edges that are likely due to noise.

---

### 8. Summary and Key Points to Remember

*   **Edges** represent significant local changes in image intensity, often corresponding to object boundaries.
*   **Gradient-based operators** (Roberts, Prewitt, Sobel) approximate the first derivative to detect edges by looking for high gradient magnitudes.
*   **Sobel operator** is a good balance between edge detection and noise suppression due to its weighted masks.
*   **Laplacian operators** approximate the second derivative and detect edges at zero-crossings. They are very sensitive to noise.
*   **Laplacian of Gaussian (LoG)** combines Gaussian smoothing with the Laplacian to reduce noise before edge detection.
*   The **Canny edge detector** is a multi-stage algorithm that includes Gaussian smoothing, gradient computation, non-maximum suppression, double thresholding, and hysteresis to produce clean, thin edges.
*   **Edge linking** is crucial for connecting fragmented edge segments into continuous contours, which are then used for segmentation.
*   Noise is a major challenge in edge-based segmentation, necessitating the use of smoothing filters.
*   Parameter tuning (e.g., $\sigma$ in Gaussian, thresholds in Canny) is critical for achieving good results with edge detection techniques.

This concludes the study notes for edge-based segmentation, a fundamental technique within digital image processing.