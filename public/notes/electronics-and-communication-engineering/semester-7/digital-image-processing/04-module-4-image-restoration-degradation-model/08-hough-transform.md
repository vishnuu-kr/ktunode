---
title: "Hough Transform"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Restoration: Degradation model"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff520"
status: "completed"
scrapedAt: "2026-05-23T18:06:57.956Z"
---
# Digital Image Processing: Module 4 - Image Restoration: Degradation Model

## Topic: Hough Transform

This module delves into image restoration techniques, focusing on how to recover degraded images. While the Hough Transform is primarily a powerful **feature extraction** technique used for **segmentation** and **object recognition**, its underlying principles are crucial for understanding how to identify specific shapes (like lines, circles, etc.) within an image, which can indirectly aid in restoration by isolating or characterizing degraded regions.

---

### Learning Outcomes Addressed:

*   **CO2: Analyse the various concepts and mathematical transforms necessary for image processing (Knowledge Level: K3)** - The Hough Transform is a mathematical transform that allows us to detect parameterized shapes. Understanding its mechanics and how it works is a direct application of this outcome.
*   **CO4: Analyze the filtering and restoration of images (Knowledge Level: K3)** - While not a direct restoration filter, identifying specific structures (e.g., blurred lines that are actually straight) can inform the restoration process. For example, if a line is heavily blurred, knowing it's supposed to be a straight line allows for more targeted restoration.
*   **CO5: Describe the basic image segmentation techniques (Knowledge Level: K2)** - The Hough Transform is a fundamental technique used for segmenting images based on shape.

---

### 1. Introduction to the Hough Transform

The Hough Transform is a feature extraction technique used in image processing, computer vision, and digital image processing for detecting **arbitrary shapes** (not just lines and circles) that can be represented by a parametric equation. It works by transforming image points from the image space (pixel coordinates) to a parameter space.

**Key Idea:** Instead of detecting an object directly, the Hough Transform detects **occurrences of parameterized shapes** by finding **peaks in an accumulator array**.

**Origin:** Developed by Paul Hough in 1962.

---

### 2. The Hough Transform for Lines

The most common application of the Hough Transform is the detection of straight lines.

#### 2.1 Parametric Representation of a Line

A line in the image space can be represented in various ways. The most common for the Hough Transform is the **normal form (or polar form)**:

$$
\rho = x \cos(\theta) + y \sin(\theta)
$$

Where:
*   $(\rho, \theta)$ are the parameters of the line.
*   $\rho$: The perpendicular distance from the origin to the line.
*   $\theta$: The angle between the normal to the line and the positive x-axis.

**Why this form?**
*   It's robust to vertical lines (unlike the $y = mx + c$ form, which has an infinite slope).
*   It can represent all lines in the plane.

#### 2.2 The Transformation Process

The Hough Transform works by mapping each edge point in the image space to a curve in the parameter space $(\rho, \theta)$.

1.  **Edge Detection:** First, an edge detector (like Sobel, Prewitt, Canny) is applied to the image to obtain a binary edge map. We are interested in the coordinates $(x, y)$ of the edge pixels.
2.  **Parameter Space $(\rho, \theta)$:** We define a 2D accumulator array (or voting space) where the axes correspond to the parameters $(\rho, \theta)$.
    *   The range of $\theta$ is typically $[0, 180^\circ)$ or $[0, 360^\circ)$. For lines, $[0, 180^\circ)$ is sufficient because a line defined by $(\rho, \theta)$ is the same as a line defined by $(\rho, \theta + 180^\circ)$.
    *   The range of $\rho$ depends on the image dimensions. For an image of size $W \times H$, the maximum possible $\rho$ is the diagonal length $\sqrt{W^2 + H^2}$.
3.  **Voting:** For each edge point $(x, y)$ in the image:
    *   Iterate through all possible values of $\theta$ in the defined range.
    *   For each $\theta$, calculate the corresponding $\rho$ using the equation: $\rho = x \cos(\theta) + y \sin(\theta)$.
    *   Increment the accumulator cell corresponding to $(\rho, \theta)$. This is a "vote" for a line passing through $(x, y)$ with parameters $(\rho, \theta)$.
4.  **Peak Detection:** After all edge points have been processed, the accumulator array will contain peaks. Each peak corresponds to a set of $(\rho, \theta)$ values that have received a high number of votes.
    *   A peak indicates a significant number of edge points lie on a line with those parameters.
    *   The higher the peak, the more confident we are that a line exists with those parameters.

#### 2.3 Accumulator Array Discretization

The parameter space $(\rho, \theta)$ is continuous. To implement the accumulator, we discretize it into bins.
*   $\theta$ is divided into $N_\theta$ bins.
*   $\rho$ is divided into $N_\rho$ bins.

The resolution of these bins affects the accuracy and performance. A finer resolution provides more accuracy but increases computational cost and memory.

#### 2.4 Example of Hough Transform for Lines

Consider a simple image with a single diagonal line.

*   **Image Space (x, y):** Let's say we have edge points at (1,1), (2,2), (3,3).
*   **Parameter Space $(\rho, \theta)$:** We'll use $\theta$ from $0^\circ$ to $179^\circ$.
*   **Voting:**
    *   For point (1,1):
        *   If $\theta = 45^\circ$, $\rho = 1 \cos(45^\circ) + 1 \sin(45^\circ) = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2} = \sqrt{2} \approx 1.414$. So, bin $(\approx 1.414, 45^\circ)$ gets a vote.
        *   As we vary $\theta$, point (1,1) will contribute to a sinusoidal curve in the $(\rho, \theta)$ space.
    *   For point (2,2): Similarly, point (2,2) will contribute to another sinusoidal curve.
    *   For point (3,3): Point (3,3) will contribute to a third sinusoidal curve.
*   **Peak:** The curves from all three points will intersect at the $(\rho, \theta)$ values corresponding to the actual line (e.g., $\rho = 0, \theta = 45^\circ$ for a line passing through the origin). The bin at this intersection will have a high vote count, indicating a detected line.

#### 2.5 Advantages and Disadvantages of Hough Transform for Lines

**Advantages:**
*   **Robust to Noise:** The voting mechanism makes it resilient to noise and missing edge points.
*   **Detects Multiple Lines:** Can detect multiple lines simultaneously.
*   **Handles Gaps:** Can detect lines even if they have gaps in their edges.
*   **Works on Arbitrary Line Orientations:** Handles vertical lines effectively.

**Disadvantages:**
*   **Computational Cost:** Can be computationally intensive, especially for high resolutions of $(\rho, \theta)$ and large images.
*   **Memory Intensive:** The accumulator array can be large.
*   **Choice of Parameters:** Performance is sensitive to the resolution of the parameter space.
*   **Line Thickness:** Detects lines as a single entity, doesn't explicitly represent line thickness.

---

### 3. The Hough Transform for Circles

The Hough Transform can be extended to detect other shapes, such as circles.

#### 3.1 Parametric Representation of a Circle

A circle is defined by its center $(a, b)$ and its radius $r$. The equation of a circle is:

$$
(x - a)^2 + (y - b)^2 = r^2
$$

Where:
*   $(x, y)$ are the coordinates of points on the circle.
*   $(a, b)$ are the coordinates of the circle's center.
*   $r$ is the radius.

#### 3.2 The Transformation Process for Circles

The parameter space for circles is 3-dimensional: $(a, b, r)$.

1.  **Edge Detection:** Similar to lines, apply an edge detector.
2.  **Parameter Space $(a, b, r)$:** We need a 3D accumulator array.
    *   The range of $a$ and $b$ corresponds to the image coordinates.
    *   The range of $r$ can be from a minimum to a maximum possible radius.
3.  **Voting:** For each edge point $(x, y)$ in the image:
    *   Consider this point to be on the circumference of a potential circle.
    *   We don't know $a, b, r$ directly. For a given edge point $(x,y)$, it could be part of many circles.
    *   If we know the edge point $(x,y)$ and the radius $r$, then the center $(a, b)$ must lie on a circle centered at $(x,y)$ with radius $r$. This is the reverse thinking.
    *   A more common approach for circles: For each edge point $(x, y)$, assume it is a point on a circle. If we know the center $(a,b)$, then the radius $r$ is fixed: $r = \sqrt{(x-a)^2 + (y-b)^2}$.
    *   This means for each edge point $(x,y)$, it can vote for all possible circles passing through it. For a fixed radius $r$, the center $(a,b)$ must lie on a circle centered at $(x,y)$ with radius $r$. This again maps an image point to a curve in parameter space.
    *   **Alternative (and more practical) approach:** If the edge detector also provides gradient information (e.g., Canny edge detector output), then for an edge point $(x, y)$ with gradient direction $\phi$, the center $(a, b)$ of a circle passing through $(x, y)$ must lie along the normal to the edge at $(x, y)$ at a distance equal to the radius.
        *   If the gradient is perpendicular to the edge, then the center $(a, b)$ can be calculated as:
            $a = x + r \cos(\phi)$
            $b = y + r \sin(\phi)$
        *   Here, for each edge point $(x, y)$ and each possible radius $r$, we generate votes for possible centers $(a, b)$. This maps an edge point to a circle in the $(a, b, r)$ parameter space.
    *   A 3D accumulator array would be needed, or we can optimize by fixing the radius and searching for centers, or by fixing centers and searching for radii.

#### 3.3 Challenges with the Hough Transform for Circles

*   **Dimensionality:** The 3D parameter space makes it computationally very expensive.
*   **Discretization:** Choosing appropriate ranges and resolutions for $a, b, r$ is critical.
*   **Radius Variability:** If the radius can vary significantly, the computation becomes prohibitive.
*   **Edge Gradient:** Reliance on accurate gradient information for efficient circle detection.

#### 3.4 Variations and Optimizations for Circles

*   **Fixing Radius:** If the radius is known or can be estimated, the parameter space reduces to 2D $(a, b)$, making it more manageable.
*   **Probabilistic Hough Transform:** A randomized version that selects a small subset of edge points to reduce computation.
*   **Generalized Hough Transform:** Can detect arbitrary shapes that are not easily described by parametric equations, by using a "shape descriptor" or a template.

---

### 4. Relevance to Image Restoration

While the Hough Transform is primarily a segmentation tool, it has indirect relevance to image restoration:

*   **Identifying Degraded Structures:** If a restored image is expected to contain specific shapes (e.g., straight lines in a scanned document, circular features in medical images), the Hough Transform can be used to verify that the restoration process has successfully recovered these structures.
*   **Guiding Restoration:** Knowing that a certain region is supposed to contain a line or a circle can inform the choice of restoration filters. For example, if a line is severely blurred but detected as a line by the Hough Transform, a line-specific deblurring filter might be more effective than a general-purpose filter.
*   **Detecting Artifacts:** The Hough Transform can also be used to detect specific types of artifacts that might appear as lines or circles, helping to identify and potentially remove them.

**Example:** Imagine an image of a document with lines of text that have been blurred by motion. After attempting a restoration process, one could use the Hough Transform to check if the straight lines of text have been recovered. If the restored image shows a peak for straight lines, it suggests successful restoration of that feature.

**Referencing Textbooks:**

*   **Gonzalez & Woods (4th Ed):** Chapter 7, "Image Segmentation," extensively covers the Hough Transform, including its application to lines and circles. They explain the transformation from the image space to the parameter space and the voting process.
*   **Jayaraman, Esakkirajan, Veerakumar:** This book also details the Hough Transform as a fundamental technique for shape detection and segmentation. They provide explanations of the parameter space and accumulator array.

---

### 5. Key Concepts and Definitions

*   **Image Space:** The 2D plane where image pixels are located (x, y coordinates).
*   **Parameter Space:** A space defined by the parameters of the shape being detected (e.g., $(\rho, \theta)$ for lines, $(a, b, r)$ for circles).
*   **Accumulator Array:** A multi-dimensional array used to store the "votes" for each set of parameters.
*   **Voting:** The process of incrementing accumulator cells based on the transformation of image points.
*   **Edge Detector:** A preprocessing step to identify pixels that likely belong to the boundary of objects.
*   **Discretization:** Dividing the continuous parameter space into discrete bins for the accumulator array.
*   **Peak Detection:** Identifying the cells in the accumulator array with the highest vote counts, indicating the presence of a shape.

---

### 6. Important Points to Remember

*   The Hough Transform maps **image points to curves in parameter space**.
*   **Accumulated votes** at a point in parameter space represent the likelihood of a shape defined by those parameters existing in the image.
*   **Peaks in the accumulator** reveal the detected shapes.
*   It's robust to **noise and gaps** but computationally expensive.
*   Its primary use is **feature extraction and segmentation**.
*   For **lines**, the parameter space is $(\rho, \theta)$ using the normal form $\rho = x \cos(\theta) + y \sin(\theta)$.
*   For **circles**, the parameter space is $(a, b, r)$, making it more complex.

---

### 7. Practice Questions and Exercises

**Question 1:**
Explain the fundamental principle behind the Hough Transform for detecting straight lines. What are the advantages of using the polar representation ($\rho, \theta$) for lines compared to the Cartesian representation ($y=mx+c$)?

**Answer 1:**
The Hough Transform for lines works by transforming edge points from the image space $(x, y)$ to a parameter space $(\rho, \theta)$. Each edge point $(x, y)$ is mapped to a sinusoidal curve in the $(\rho, \theta)$ space, where $\rho = x \cos(\theta) + y \sin(\theta)$. Points in the image that lie on the same line will produce curves that intersect at a common point in the $(\rho, \theta)$ space. By accumulating votes for these intersecting curves, peaks in the accumulator array reveal the parameters of the lines present in the image.

The polar representation ($\rho, \theta$) is advantageous because:
1.  **Handles Vertical Lines:** The form $\rho = x \cos(\theta) + y \sin(\theta)$ can represent vertical lines (where $x = constant$), unlike $y = mx + c$ which has an infinite slope ($m$).
2.  **Bounded Parameters:** Both $\rho$ and $\theta$ have well-defined finite ranges, making discretization and accumulator implementation straightforward.

**Question 2:**
If you are using the Hough Transform to detect circles of a fixed radius $R$ in an image, how many parameters do you need to consider, and what is the dimensionality of the accumulator space?

**Answer 2:**
If the radius of the circles is fixed at $R$, then a circle is defined by the coordinates of its center $(a, b)$. Thus, you only need to consider two parameters: $a$ and $b$. The accumulator space will be 2-dimensional, with axes representing $a$ and $b$. For each edge point $(x, y)$ in the image, it is assumed to be on a circle of radius $R$. The possible centers $(a, b)$ for such a circle must lie on a circle centered at $(x, y)$ with radius $R$ in the parameter space. This maps an edge point to a curve in the $(a, b)$ parameter space.

**Question 3:**
Describe a scenario where the Hough Transform might be useful in the context of image restoration, even though it is primarily a segmentation technique.

**Answer 3:**
The Hough Transform can be useful in image restoration by helping to **verify or guide the restoration process for specific shapes**. For instance, if an image is a scanned document that has been degraded by blur, the restoration process aims to sharpen the text lines. After applying a deblurring filter, the Hough Transform could be used to detect the straight lines representing the text. If the Hough Transform successfully identifies these lines with high confidence (high peaks in the accumulator), it indicates that the restoration has effectively recovered the intended linear structures. Conversely, if the Hough Transform fails to detect lines after restoration, it suggests the restoration was unsuccessful in recovering these features. It can also help in identifying artifacts that might have line-like or circular properties.

---

### 8. Course Outcome Alignment

*   **CO2: Analyse the various concepts and mathematical transforms necessary for image processing (Knowledge Level: K3)** - This topic directly addresses this by explaining the mathematical transformation involved in the Hough Transform, its parameter space, and the voting mechanism.
*   **CO4: Analyze the filtering and restoration of images (Knowledge Level: K3)** - As discussed, the Hough Transform's role in identifying and guiding restoration of specific shapes makes it relevant to this outcome, allowing for analysis of restoration effectiveness.
*   **CO5: Describe the basic image segmentation techniques (Knowledge Level: K2)** - The Hough Transform is a fundamental technique for shape-based segmentation, fitting perfectly within this outcome by describing how it segments based on detected shapes.

---

This comprehensive study note covers the Hough Transform, its application to lines and circles, its advantages and disadvantages, and its relevance to image restoration, aligning with the provided learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
