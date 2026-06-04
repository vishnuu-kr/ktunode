---
title: "Basic relationship between pixels"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 1: Digital Image Fundamentals: Image representation"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee04"
status: "completed"
scrapedAt: "2026-05-23T18:00:20.660Z"
---
# Digital Image Processing: Module 1 - Digital Image Fundamentals: Image Representation

## Topic: Basic Relationship Between Pixels

This module introduces the fundamental concepts of digital image representation, focusing on how pixels relate to each other. Understanding these relationships is crucial for nearly all image processing operations.

### 1. Introduction to Digital Images

*   **Digital Image:** A digital image is a representation of a two-dimensional (or sometimes three-dimensional) physical scene captured by a sensor and converted into a digital format. It's essentially a grid of pixels.
*   **Pixel:** The smallest element of a digital image. The term "pixel" is a portmanteau of "picture element." Each pixel possesses a specific location (coordinates) and intensity value (or color information).

### 2. Image Representation

*   **Image as a Function:** A continuous image can be modeled as a function of two spatial variables, say $f(x, y)$, where $(x, y)$ are the continuous spatial coordinates and $f$ represents the intensity or color at that point.
*   **Digital Image:** When we discretize this continuous function, we obtain a digital image. This is represented as a matrix $F$, where:
    *   $F(x, y)$ represents the intensity of the pixel at coordinates $(x, y)$.
    *   $x$ and $y$ are discrete integer values.
    *   The range of $x$ and $y$ defines the image dimensions (width and height).
    *   **Example:** An image of size $M \times N$ has $M$ rows and $N$ columns. The pixel coordinates range from $(0, 0)$ to $(M-1, N-1)$ or $(1, 1)$ to $(M, N)$, depending on the convention used.

**(Refer to Gonzalez & Woods, 4th Ed., Chapter 2: Digital Image Fundamentals - Digital Image Representation)**

### 3. Key Concepts Related to Pixel Relationships

Understanding the spatial relationships between pixels is fundamental to image processing tasks like filtering, segmentation, and feature extraction.

#### 3.1. Adjacency of Pixels

*   **Neighbors:** A pixel at $(x, y)$ has several neighboring pixels whose coordinates are close to $(x, y)$.
*   **4-Neighbors:** The pixels at $(x+1, y)$, $(x-1, y)$, $(x, y+1)$, and $(x, y-1)$. These are the pixels directly above, below, left, and right of the central pixel.
    *   Notation: $N_4(x, y)$
*   **Diagonal Neighbors:** The pixels at $(x+1, y+1)$, $(x+1, y-1)$, $(x-1, y+1)$, and $(x-1, y-1)$.
*   **8-Neighbors:** The combination of 4-neighbors and diagonal neighbors. These are all pixels in the 3x3 neighborhood centered at $(x, y)$, excluding $(x, y)$ itself.
    *   Notation: $N_8(x, y)$

**Example:**
Consider a pixel at $(1, 1)$ in a 3x3 grid:

```
(0,0) (0,1) (0,2)
(1,0) (1,1) (1,2)
(2,0) (2,1) (2,2)
```

*   **4-Neighbors of (1,1):** $(0,1)$, $(2,1)$, $(1,0)$, $(1,2)$
*   **Diagonal Neighbors of (1,1):** $(0,0)$, $(0,2)$, $(2,0)$, $(2,2)$
*   **8-Neighbors of (1,1):** All pixels except $(1,1)$ itself.

**(Refer to Gonzalez & Woods, 4th Ed., Chapter 2: Digital Image Fundamentals - Adjacency, Connectivity, and Regions)**

#### 3.2. Connectivity

Connectivity defines how pixels are grouped together to form regions or lines. This is crucial for segmentation and object recognition.

*   **Connectivity (m-connectivity):** Two pixels $p$ and $q$ are connected if they are neighbors and their intensity values satisfy a specified property (e.g., being in the same intensity range).
*   **4-Connectivity:** Pixels $p$ and $q$ are 4-connected if they are 4-neighbors.
*   **8-Connectivity:** Pixels $p$ and $q$ are 8-connected if they are 8-neighbors.
*   **m-Connectivity (Mixed Connectivity):** Pixels $p$ and $q$ are m-connected if they are either 4-neighbors or diagonal neighbors. This allows for diagonal connections but avoids situations where pixels might be connected through diagonally adjacent pixels that are not directly connected.

**Example:**
Consider the following pixel neighborhood with intensity values:

```
5  2  1
3  4  0
6  7  8
```

Let's assume we are looking for pixels with an intensity value of 4 or greater.

*   **4-Connectivity:**
    *   The pixel with value 4 is 4-connected to pixels with values 2, 3, and 7.
    *   The pixel with value 5 is 4-connected to pixels with values 2 and 3.
*   **8-Connectivity:**
    *   The pixel with value 4 is 8-connected to all other pixels in the 3x3 neighborhood.

**(Refer to Gonzalez & Woods, 4th Ed., Chapter 2: Digital Image Fundamentals - Adjacency, Connectivity, and Regions)**

#### 3.3. Paths

*   **Path:** A sequence of connected pixels.
*   **Path between pixels $p$ and $q$:** A sequence of pixels $v_1, v_2, \ldots, v_n$ such that $v_1 = p$, $v_n = q$, and $v_i$ and $v_{i+1}$ are connected for all $1 \le i < n$.
*   **Path of length $n$:** The path consists of $n+1$ pixels.

#### 3.4. Regions and Background

*   **Region:** A set of pixels that are connected to each other.
*   **Background:** Pixels that are not part of any region of interest.
*   **Segmentation:** The process of partitioning an image into multiple regions based on certain criteria (e.g., pixel intensity, color, texture). This heavily relies on pixel connectivity.

#### 3.5. Distance Measures Between Pixels

Distance measures quantify the spatial relationship between two pixels. The choice of distance metric depends on the application.

*   **Euclidean Distance:** The standard geometric distance between two points.
    *   For pixels $p$ at $(x_1, y_1)$ and $q$ at $(x_2, y_2)$:
        $D_e(p, q) = \sqrt{(x_1-x_2)^2 + (y_1-y_2)^2}$
    *   This is the length of the hypotenuse of a right triangle.
*   **City-Block Distance (4-Distance):** The distance is the sum of the absolute differences in their coordinate values.
    *   $D_4(p, q) = |x_1-x_2| + |y_1-y_2|$
    *   This corresponds to the number of 4-neighbor steps required to move between pixels.
*   **Chessboard Distance (8-Distance):** The distance is the maximum of the absolute differences in their coordinate values.
    *   $D_8(p, q) = \max(|x_1-x_2|, |y_1-y_2|)$
    *   This corresponds to the number of 8-neighbor steps required to move between pixels.

**Example:**
Consider pixels $p$ at $(2, 2)$ and $q$ at $(5, 7)$.

*   **Euclidean Distance:**
    $D_e(p, q) = \sqrt{(2-5)^2 + (2-7)^2} = \sqrt{(-3)^2 + (-5)^2} = \sqrt{9 + 25} = \sqrt{34} \approx 5.83$
*   **City-Block Distance:**
    $D_4(p, q) = |2-5| + |2-7| = |-3| + |-5| = 3 + 5 = 8$
*   **Chessboard Distance:**
    $D_8(p, q) = \max(|2-5|, |2-7|) = \max(|-3|, |-5|) = \max(3, 5) = 5$

**(Refer to Gonzalez & Woods, 4th Ed., Chapter 2: Digital Image Fundamentals - Distance Measures)**
**(Refer to S Jayaraman et al., Chapter 3: Digital Image Fundamentals - Pixel Connectivity and Distance Measures)**

**Important Note:** The choice of distance metric influences the shape of contours or neighborhoods defined by a constant distance.
*   $D_e$ defines circular contours.
*   $D_4$ defines diamond-shaped contours.
*   $D_8$ defines square-shaped contours.

### 4. Image Neighborhoods and Operations

Pixel relationships are fundamental to neighborhood operations, where the value of an output pixel depends on the values of the input pixels in a local neighborhood.

*   **Neighborhood:** A small window (e.g., 3x3, 5x5) of pixels surrounding a central pixel.
*   **Filtering:** A common image processing technique that uses a kernel (or mask) that slides over the image. The kernel's weights are applied to the neighborhood pixels to compute the output pixel value.
    *   **Example:** Smoothing (averaging) filters, sharpening filters.

**(Refer to Gonzalez & Woods, 4th Ed., Chapter 3: Image Enhancement in the Spatial Domain - Point Processing and Spatial Filtering)**
**(Refer to S Jayaraman et al., Chapter 6: Image Enhancement - Spatial Filtering)**

### 5. Applications of Pixel Relationships

*   **Image Segmentation:** Grouping pixels into meaningful regions based on connectivity and intensity.
*   **Edge Detection:** Identifying pixels where intensity changes rapidly, often involving comparing a pixel with its neighbors.
*   **Image Filtering:** Smoothing, sharpening, and noise reduction are achieved by operating on pixel neighborhoods.
*   **Morphological Operations:** Erosion, dilation, opening, and closing are fundamental operations that rely on pixel adjacency and structuring elements.
*   **Object Recognition:** Identifying patterns and features within images often involves analyzing the spatial relationships between pixels.

### 6. Practice Questions

**Question 1:**
Consider a pixel $P$ at coordinates (3, 4).
a) List the coordinates of its 4-neighbors.
b) List the coordinates of its 8-neighbors.
c) List the coordinates of its diagonal neighbors.

**Answer 1:**
Assume $P$ is not at the image boundary.
a) 4-neighbors: (2, 4), (4, 4), (3, 3), (3, 5)
b) 8-neighbors: (2, 3), (2, 4), (2, 5), (3, 3), (3, 5), (4, 3), (4, 4), (4, 5)
c) Diagonal neighbors: (2, 3), (2, 5), (4, 3), (4, 5)

**Question 2:**
Let pixels $A$ be at (1, 1) and $B$ be at (4, 5). Calculate the Euclidean, City-Block (4-distance), and Chessboard (8-distance) between pixels $A$ and $B$.

**Answer 2:**
*   Euclidean Distance:
    $D_e(A, B) = \sqrt{(1-4)^2 + (1-5)^2} = \sqrt{(-3)^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$
*   City-Block Distance (4-distance):
    $D_4(A, B) = |1-4| + |1-5| = |-3| + |-4| = 3 + 4 = 7$
*   Chessboard Distance (8-distance):
    $D_8(A, B) = \max(|1-4|, |1-5|) = \max(|-3|, |-4|) = \max(3, 4) = 4$

**Question 3:**
Explain why the concept of pixel connectivity is important in image segmentation.

**Answer 3:**
Pixel connectivity is crucial for image segmentation because segmentation aims to partition an image into distinct regions. These regions are defined by groups of connected pixels that share similar characteristics (e.g., intensity, color). Different connectivity measures (4-connectivity, 8-connectivity) determine how pixels are grouped, impacting the shape and size of the segmented regions. For example, using 8-connectivity allows for more fluid and continuous regions compared to 4-connectivity, which might break up diagonally connected components.

### 7. Alignment with Course Outcomes

*   **CO1 (K2): Explain different components of image processing system.**
    This topic contributes by explaining the fundamental unit of a digital image (pixel) and its spatial relationships, which are components of how images are represented and processed.
*   **CO2 (K3): Analyse the various concepts and mathematical transforms necessary for image processing.**
    This topic covers the foundational concepts of pixel relationships (adjacency, connectivity, distance) that are essential for understanding and applying spatial domain operations and, indirectly, transforms. The distance measures introduce basic mathematical calculations related to spatial relationships.
*   **CO5 (K2): Describe the basic image segmentation techniques.**
    This topic directly supports CO5 by explaining pixel connectivity and adjacency, which are the building blocks for grouping pixels into regions during segmentation.

### 8. Important Points to Remember

*   A digital image is a grid of pixels.
*   Pixels have spatial locations (coordinates) and intensity/color values.
*   **4-neighbors:** Pixels directly up, down, left, right.
*   **8-neighbors:** All adjacent pixels, including diagonals.
*   **Connectivity** defines how pixels are grouped.
*   **Distance measures** (Euclidean, City-Block, Chessboard) quantify spatial relationships.
*   These relationships are fundamental to spatial filtering, segmentation, and many other image processing operations.
*   The choice of neighborhood and distance metric influences the outcome of image processing algorithms.

This comprehensive set of notes covers the basic relationships between pixels, laying the groundwork for understanding more complex image processing techniques.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
