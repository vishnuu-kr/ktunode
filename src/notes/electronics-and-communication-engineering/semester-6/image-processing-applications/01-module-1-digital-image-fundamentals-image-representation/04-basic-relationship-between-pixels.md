---
title: "Basic relationship between pixels"
subject: "IMAGE PROCESSING APPLICATIONS"
module: "Module 1: Digital Image Fundamentals: Image representation"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fef55"
status: "completed"
scrapedAt: "2026-05-23T18:01:05.039Z"
---
# IMAGE PROCESSING APPLICATIONS: Module 1: Digital Image Fundamentals: Image Representation

## Topic: Basic Relationship Between Pixels

### Learning Outcomes:

*   Understand the fundamental concept of a pixel as the basic unit of a digital image.
*   Define and differentiate between various spatial relationships between pixels, including adjacency, connectivity, distance, and neighborhood.
*   Explain how these relationships are used in image processing operations like filtering, segmentation, and feature extraction.
*   Relate pixel neighborhood definitions to the kernels or masks used in image filtering.

### 1. Introduction to Pixels

A digital image is a representation of a real-world scene or an object, captured and stored in a digital format. This digital format is achieved by dividing the image into a grid of small, discrete elements called **pixels** (picture elements).

*   **Definition:** A pixel is the smallest addressable element in a raster image. Each pixel has a specific location (coordinates) within the image and a value that represents its intensity or color.

*   **Image as a Grid:**
    *   An image can be visualized as a 2D array or matrix.
    *   The rows and columns of this matrix correspond to the spatial arrangement of pixels.
    *   If an image has dimensions $M \times N$ (M rows and N columns), it contains $M \times N$ pixels.

*   **Pixel Value:**
    *   The value of a pixel indicates its brightness or color.
    *   For **grayscale images**, the pixel value typically represents intensity, ranging from 0 (black) to a maximum value (e.g., 255 for 8-bit images, white).
    *   For **color images**, a pixel is usually represented by a vector of values, each corresponding to a color channel (e.g., Red, Green, Blue - RGB).

*   **Coordinate System:**
    *   Pixels are addressed using coordinate pairs $(x, y)$, where $x$ typically represents the column (horizontal position) and $y$ represents the row (vertical position).
    *   The origin $(0,0)$ can be at the top-left, bottom-left, or top-right corner, depending on the convention. The most common convention in image processing is the top-left origin.

**Example:**
Consider a small 3x3 grayscale image:
```
[[10, 20, 30],
 [40, 50, 60],
 [70, 80, 90]]
```
The pixel at coordinate (1,1) (assuming 0-based indexing, top-left origin) has a value of 50.

### 2. Pixel Neighborhoods

The relationships between pixels are defined by their spatial proximity. These relationships are crucial for understanding how operations are performed on images.

#### 2.1. Adjacency

Two pixels are considered adjacent if they are close to each other. This closeness is defined by the pixels that are "touching" a given pixel.

*   **4-Adjacency (Cross Neighbors):**
    *   A pixel at position $(x, y)$ is 4-adjacent to pixels at $(x+1, y)$, $(x-1, y)$, $(x, y+1)$, and $(x, y-1)$.
    *   These are the pixels directly above, below, left, and right of the central pixel.
    *   Gonzalez & Woods (2009) define this as pixels that share a common side.

*   **8-Adjacency (Diagonal Neighbors):**
    *   A pixel at position $(x, y)$ is 8-adjacent to pixels at $(x+1, y)$, $(x-1, y)$, $(x, y+1)$, $(x, y-1)$, $(x+1, y+1)$, $(x-1, y-1)$, $(x+1, y-1)$, and $(x-1, y+1)$.
    *   These include the 4-adjacent pixels plus the four diagonal neighbors.
    *   Gonzalez & Woods (2009) define this as pixels that share a common corner or a common side.

**Visual Representation:**

Consider a central pixel 'P':

**4-Adjacency:**
```
  (x, y-1)
(x-1, y) P (x+1, y)
  (x, y+1)
```

**8-Adjacency:**
```
(x-1, y-1) (x, y-1) (x+1, y-1)
(x-1, y)   P        (x+1, y)
(x-1, y+1) (x, y+1) (x+1, y+1)
```

#### 2.2. Connectivity

Connectivity extends the concept of adjacency to sequences of pixels, forming paths.

*   **Definition:** A set of pixels $S$ is connected if we can find a path between any two pixels in $S$ using only pixels from $S$. A path is a sequence of connected pixels.

*   **k-Connectivity:** This definition specifies the type of adjacency allowed for the path.
    *   **4-Connectivity:** A path exists between two pixels if they are connected only through 4-adjacent pixels.
    *   **8-Connectivity:** A path exists between two pixels if they are connected through 8-adjacent pixels.

*   **m-Connectivity (Mixed Adjacency):**
    *   A pixel at $(x, y)$ is $m$-connected to a pixel at $(x', y')$ if:
        *   They are 8-adjacent, OR
        *   They are 4-adjacent AND their connecting line segment does not pass through any other pixel that is not part of the path. (This is usually not explicitly used but implicitly handled by 8-connectivity.)
    *   A more precise definition of $m$-connectivity (sometimes called diagonal connectivity or semi-diagonal connectivity) is when a pixel at $(x, y)$ is connected to pixels at $(x+1, y)$, $(x-1, y)$, $(x, y+1)$, $(x, y-1)$, $(x+1, y+1)$, and $(x-1, y-1)$. This is a subset of 8-adjacency. Jayaraman et al. (2015) might use this to describe specific neighborhood types.

**Important Note:** The choice of adjacency (4- or 8-) significantly affects the outcome of operations like connected component analysis, thinning, and region growing.

#### 2.3. Distance Measures

Distances between pixels are important for various image processing tasks, such as clustering, watershed segmentation, and morphological operations. The distance is typically measured between the centers of the pixels.

Let $p$ be a pixel at coordinates $(x, y)$ and $q$ be a pixel at coordinates $(x', y')$.

*   **Euclidean Distance ($D_e$):**
    *   This is the standard geometric distance.
    *   $D_e(p, q) = \sqrt{(x-x')^2 + (y-y')^2}$
    *   This is a true metric.

*   **City Block Distance ($D_4$ or Manhattan Distance):**
    *   This measures the distance by summing the absolute differences of their coordinates. It's like moving along a grid.
    *   $D_4(p, q) = |x-x'| + |y-y'|$
    *   This is also known as the 4-distance because it relates to 4-adjacency.
    *   This is a metric.

*   **Chessboard Distance ($D_8$ or Chebyshev Distance):**
    *   This measures the maximum of the absolute differences of their coordinates. It's like moving diagonally or orthogonally, but the diagonal moves cost the same as orthogonal ones.
    *   $D_8(p, q) = \max(|x-x'|, |y-y'|)$
    *   This is also known as the 8-distance because it relates to 8-adjacency.
    *   This is a metric.

**Example:**
Consider pixel $p$ at (2,2) and pixel $q$ at (5,6).

*   $D_e(p, q) = \sqrt{(2-5)^2 + (2-6)^2} = \sqrt{(-3)^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$
*   $D_4(p, q) = |2-5| + |2-6| = |-3| + |-4| = 3 + 4 = 7$
*   $D_8(p, q) = \max(|2-5|, |2-6|) = \max(|-3|, |-4|) = \max(3, 4) = 4$

**Reference:** Gonzalez & Woods (2009) provide detailed explanations and diagrams for these distance measures.

### 3. Pixel Neighborhood and Kernels/Masks

The concept of pixel neighborhood is fundamental to image filtering operations.

*   **Filters (Kernels/Masks):** Image filters are typically implemented using small matrices called kernels or masks. These kernels are convolved (or correlated) with the image.
*   **Convolution:** The process involves sliding the kernel over the image, and at each position, performing element-wise multiplication between the kernel and the underlying image pixels, and then summing the results.
*   **Neighborhood in Kernels:** The size of the kernel (e.g., 3x3, 5x5) defines the neighborhood of pixels that are involved in calculating the new value for the central pixel.

**Example:** A 3x3 averaging filter:
```
Kernel (K):
[[1/9, 1/9, 1/9],
 [1/9, 1/9, 1/9],
 [1/9, 1/9, 1/9]]
```
When this kernel is centered on a pixel $(x, y)$ in the image, it considers the 8-adjacent pixels and the pixel itself. The new value for the pixel $(x, y)$ will be the average of its 3x3 neighborhood.

**Relation to Course Outcomes:**

*   **CO1 (Color Models):** While this topic focuses on spatial relationships, the pixel value itself is what's operated on. In color images, these spatial relationships apply to each color channel independently or to combined representations.
*   **CO2 (Transforms, Compression):** Understanding pixel relationships is essential for transformations (e.g., geometric transformations affect pixel locations) and compression (e.g., exploiting spatial redundancy relies on pixel proximity).
*   **CO3 (Image Filtering):** This is the most direct link. Kernels used in filtering are defined based on pixel neighborhoods (e.g., 3x3 neighborhood for a 3x3 kernel). The adjacency and distance measures dictate which pixels contribute to the filtered output.
*   **CO4 (Image Restoration):** Similar to filtering, restoration techniques often involve neighborhood operations to remove noise or blur, directly utilizing pixel relationships.

### 4. Important Points to Remember

*   **Pixel:** The fundamental unit of a digital image, possessing location and value.
*   **Adjacency:** Defines immediate neighbors (4-adjacency vs. 8-adjacency).
*   **Connectivity:** Extends adjacency to form paths and identify connected regions.
*   **Distance Measures:** Quantify spatial separation between pixels ($D_e$, $D_4$, $D_8$).
*   **Neighborhood:** The set of pixels surrounding a central pixel, crucial for operations like filtering.
*   **Kernels/Masks:** Small matrices used in filtering, whose size dictates the neighborhood considered.
*   **Coordinate System:** The convention for addressing pixels (e.g., top-left origin, 0-based indexing).

### 5. Practice Questions and Exercises

**Question 1:**
Consider a pixel at position (3, 4) in a digital image. List the coordinates of all pixels that are:
a) 4-adjacent to it.
b) 8-adjacent to it.
(Assume 0-based indexing and top-left origin).

**Answer 1:**
a) 4-adjacent: (2, 4), (4, 4), (3, 3), (3, 5)
b) 8-adjacent: (2, 3), (3, 3), (4, 3), (2, 4), (4, 4), (2, 5), (3, 5), (4, 5)

**Question 2:**
Calculate the Euclidean, City Block ($D_4$), and Chessboard ($D_8$) distances between pixels $p$ at (1, 2) and $q$ at (4, 6).

**Answer 2:**
*   $D_e(p, q) = \sqrt{(1-4)^2 + (2-6)^2} = \sqrt{(-3)^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$
*   $D_4(p, q) = |1-4| + |2-6| = |-3| + |-4| = 3 + 4 = 7$
*   $D_8(p, q) = \max(|1-4|, |2-6|) = \max(|-3|, |-4|) = \max(3, 4) = 4$

**Question 3:**
Explain why the choice between 4-adjacency and 8-adjacency can affect image processing results, especially in segmentation tasks. Provide a brief example.

**Answer 3:**
The choice affects how regions are connected. 4-adjacency only allows horizontal and vertical connections, leading to more "segmented" or fragmented regions if diagonal connections are present. 8-adjacency allows diagonal connections, which can group diagonally adjacent pixels into the same region, potentially leading to smoother or more connected regions.

**Example:** Consider a binary image with pixels set to 1 forming a diagonal line.
```
[[1, 0, 0],
 [0, 1, 0],
 [0, 0, 1]]
```
Using 4-adjacency, the '1' pixels would be considered separate components. Using 8-adjacency, all three '1' pixels would be considered part of a single connected component because they are diagonally adjacent.

**Question 4:**
What is the neighborhood size considered by a 5x5 kernel in image filtering?

**Answer 4:**
A 5x5 kernel considers a neighborhood of 25 pixels, including the central pixel and its surrounding pixels up to two positions away horizontally and vertically. This is related to the $D_{\infty}$ or Chebyshev distance when considering the "radius" of the neighborhood.

**Question 5 (Relating to CO3):**
If you are applying a median filter using a 3x3 kernel, which pixels are being considered to compute the new value for the center pixel?
a) Only the 4-adjacent pixels.
b) The central pixel and its 4-adjacent pixels.
c) The central pixel and all 8 adjacent pixels.
d) Only the diagonal neighbors.

**Answer 5:**
c) The central pixel and all 8 adjacent pixels.

---

This concludes the study notes for the "Basic relationship between pixels" topic. These concepts form the bedrock for understanding how image processing algorithms operate on the fundamental elements of a digital image.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
