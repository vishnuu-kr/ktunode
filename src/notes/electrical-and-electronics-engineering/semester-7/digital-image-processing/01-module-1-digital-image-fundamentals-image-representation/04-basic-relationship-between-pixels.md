---
title: "Basic relationship between pixels"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 1: Digital Image Fundamentals: Image representation"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3690f"
status: "completed"
scrapedAt: "2026-05-23T16:34:48.026Z"
---
# Digital Image Processing: Module 1 - Digital Image Fundamentals: Image Representation

## Topic: Basic Relationship Between Pixels

---

### Learning Outcomes:

*   Understand the basic relationships between pixels in a digital image.
*   Relate pixel relationships to image properties and operations.
*   Apply knowledge of pixel relationships to fundamental image processing tasks.

---

### Course Outcomes Alignment:

*   **CO1: Understand different components of image processing system (K2)** - Understanding pixel relationships is fundamental to how images are stored, processed, and displayed, which are core components of an image processing system.
*   **CO2: Analyse the various concepts and mathematical transforms necessary for image processing (K3)** - Pixel relationships form the basis for many mathematical operations and transforms used in image processing, such as neighborhood operations and spatial transformations.

---

### Introduction:

A digital image is fundamentally a grid of discrete picture elements, called **pixels**. Each pixel is associated with a specific location (coordinates) within the image and a value that represents the intensity or color at that location. Understanding the relationships between these pixels is crucial for comprehending how images are represented, manipulated, and analyzed in digital image processing.

---

### Key Concepts and Definitions:

#### 1. Pixel Neighborhoods:

The pixels surrounding a given pixel are its neighbors. The most common neighborhoods are defined based on adjacency:

*   **4-Neighbors (N4):** A pixel at coordinates (x, y) has 4-neighbors located at (x+1, y), (x-1, y), (x, y+1), and (x, y-1). These are the pixels directly adjacent horizontally and vertically.

    *   **Example:** For pixel P at (x,y), its 4-neighbors are:
        *   (x+1, y) - Right
        *   (x-1, y) - Left
        *   (x, y+1) - Down
        *   (x, y-1) - Up

*   **8-Neighbors (N8):** A pixel at coordinates (x, y) has 8-neighbors, which include the 4-neighbors plus the four diagonal neighbors: (x+1, y+1), (x+1, y-1), (x-1, y+1), and (x-1, y-1).

    *   **Example:** For pixel P at (x,y), its 8-neighbors include the 4-neighbors plus:
        *   (x+1, y+1) - Diagonal Down-Right
        *   (x+1, y-1) - Diagonal Up-Right
        *   (x-1, y+1) - Diagonal Down-Left
        *   (x-1, y-1) - Diagonal Up-Left

*   **Mixed Neighborhood:** A pixel can also be considered in relation to its 4-neighbors and its diagonal neighbors separately or in combination.

    *   **Reference (Gonzalez & Woods, 4th Ed., Chapter 2):** The book extensively discusses these neighborhood definitions as foundational for spatial operations.

#### 2. Adjacency of Pixels:

Two pixels are considered adjacent if they share a common border or a common corner. The type of adjacency depends on the neighborhood considered:

*   **4-Adjacency:** Two pixels are 4-adjacent if they are neighbors in the 4-neighborhood. They share a common edge.
    *   **Example:** Pixels at (x,y) and (x+1,y) are 4-adjacent.

*   **8-Adjacency:** Two pixels are 8-adjacent if they are neighbors in the 8-neighborhood. They share a common edge or a common corner.
    *   **Example:** Pixels at (x,y) and (x+1,y+1) are 8-adjacent.

*   **Mixed Adjacency:**
    *   **m-Adjacency (Diagonal Adjacency):** Two pixels are m-adjacent if they are diagonally adjacent and their connecting diagonal line segment does not cross any other pixels. This is essentially the 8-adjacency definition for diagonal neighbors.
        *   **Example:** Pixels at (x,y) and (x+1,y+1) are m-adjacent.

#### 3. Connectivity:

Connectivity is a concept that describes how pixels of the same property (e.g., same intensity value) are linked together to form shapes or regions. This is crucial for segmentation and object analysis.

*   **Definition:** Let $S$ be a subset of pixels in an image. Two pixels $p$ and $q$ in $S$ are said to be **connected** if there exists a path of pixels $p_0, p_1, ..., p_n$ in $S$ such that:
    *   $p_0 = p$
    *   $p_n = q$
    *   $p_i$ and $p_{i+1}$ are adjacent for all $i = 0, 1, ..., n-1$.

*   **Types of Connectivity:**
    *   **4-Connectivity:** Uses 4-adjacency to define the path.
    *   **8-Connectivity:** Uses 8-adjacency to define the path.
    *   **m-Connectivity (Diagonal Connectivity):** Uses 8-adjacency for diagonal connections. If two pixels are diagonally adjacent, they are considered connected if they are also connected by a path of 4-adjacent pixels. This is a more restrictive form that avoids "diagonal touching" if only diagonal adjacency is considered.

    *   **Reference (Jayaraman et al., Chapter 2):** This textbook provides a clear explanation of connectivity and its importance in forming connected components.

*   **Example:**
    Consider a binary image (0s and 1s) and a region of pixels with value 1.
    ```
    0 1 0
    1 1 1
    0 1 0
    ```
    *   The '1' at (0,1) is 4-connected to the '1' at (1,1).
    *   The '1' at (1,0) is 4-connected to the '1' at (1,1).
    *   All the '1's in this example form a connected component using 4-connectivity and therefore also 8-connectivity.

    Consider another example:
    ```
    1 0 0
    0 1 0
    0 0 1
    ```
    *   The '1' at (0,0) and the '1' at (1,1) are diagonally adjacent.
    *   If we use 4-connectivity, these are not connected.
    *   If we use 8-connectivity, these are connected.
    *   If we use m-connectivity, these are connected because they are diagonally adjacent.

#### 4. Distance Measures:

The distance between pixels is fundamental for many image processing operations, such as thinning, skeletonization, morphology, and clustering. We typically define distance functions based on the paths connecting pixels.

*   **Euclidean Distance ($D_e$):** The standard geometric distance. For pixels $p$ at $(x_1, y_1)$ and $q$ at $(x_2, y_2)$:
    $D_e(p, q) = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$
    *   This is the shortest possible distance, representing a straight line.

*   **City-Block Distance ($D_4$) or Manhattan Distance:** This is the distance between pixels measured along paths that only use horizontal and vertical steps. It is equivalent to the 4-neighbor adjacency. For pixels $p$ at $(x_1, y_1)$ and $q$ at $(x_2, y_2)$:
    $D_4(p, q) = |x_1 - x_2| + |y_1 - y_2|$
    *   This is also the length of the shortest 4-connected path between the pixels.

*   **Chessboard Distance ($D_8$):** This is the distance between pixels measured along paths that can use horizontal, vertical, and diagonal steps. It is equivalent to the 8-neighbor adjacency. For pixels $p$ at $(x_1, y_1)$ and $q$ at $(x_2, y_2)$:
    $D_8(p, q) = \max(|x_1 - x_2|, |y_1 - y_2|)$
    *   This is the length of the shortest 8-connected path between the pixels.

    *   **Reference (Gonzalez & Woods, 4th Ed., Chapter 2):** This chapter provides a thorough treatment of different distance metrics and their properties.

*   **Properties of Distance Measures:**
    *   $D(p, q) \ge 0$
    *   $D(p, q) = D(q, p)$ (Symmetry)
    *   $D(p, p) = 0$
    *   $D(p, r) \le D(p, q) + D(q, r)$ (Triangle Inequality)

*   **Example:** Consider two pixels $p$ at (2,3) and $q$ at (5,7).

    *   $D_e(p, q) = \sqrt{(2-5)^2 + (3-7)^2} = \sqrt{(-3)^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$
    *   $D_4(p, q) = |2-5| + |3-7| = |-3| + |-4| = 3 + 4 = 7$
    *   $D_8(p, q) = \max(|2-5|, |3-7|) = \max(|-3|, |-4|) = \max(3, 4) = 4$

    Notice how $D_8 \le D_4 \le D_e$ does not always hold (e.g., $D_4$ can be larger than $D_e$ for non-axis aligned diagonals). The key is that these metrics define "circles" (or shapes of constant distance) differently.
    *   $D_e$ circles are true circles.
    *   $D_4$ circles are diamonds (rotated squares).
    *   $D_8$ circles are squares aligned with the axes.

#### 5. Relationships to Image Properties:

The relationships between pixels are not just geometric; they also define local image properties:

*   **Homogeneous Regions:** Regions where pixels have similar intensity values. Connectivity of pixels with similar intensities defines these regions.
*   **Edges:** Locations where there are abrupt changes in intensity. These are characterized by high intensity differences between adjacent pixels.
*   **Textures:** Patterns formed by the spatial arrangement and intensity variations of pixels. These are often analyzed by looking at the relationships between a pixel and its neighbors.
*   **Lines and Curves:** Sequences of connected pixels with similar intensity. Their shape is determined by the type of connectivity used.

---

### Practice Questions & Exercises:

**Question 1:**
Given a pixel at coordinates (3, 4) in a digital image, identify its:
a) 4-neighbors
b) 8-neighbors

**Answer 1:**
Let the pixel be $P$ at (3, 4).
a) Its 4-neighbors are:
    *   (3+1, 4) = (4, 4) (Right)
    *   (3-1, 4) = (2, 4) (Left)
    *   (3, 4+1) = (3, 5) (Down)
    *   (3, 4-1) = (3, 3) (Up)

b) Its 8-neighbors are the 4-neighbors plus the diagonal neighbors:
    *   (3+1, 4+1) = (4, 5) (Diagonal Down-Right)
    *   (3+1, 4-1) = (4, 3) (Diagonal Up-Right)
    *   (3-1, 4+1) = (2, 5) (Diagonal Down-Left)
    *   (3-1, 4-1) = (2, 3) (Diagonal Up-Left)

**Question 2:**
Consider the following binary image snippet:

```
  0 1 0
  1 1 1
  0 1 0
```
Let the central '1' be at position (1,1) (assuming 0-indexed rows and columns).
a) Are the '1's at (0,1) and (1,1) 4-adjacent?
b) Are the '1's at (0,0) and (1,1) 8-adjacent? (Assume (0,0) is a '0' in this snippet for clarity).
c) If we consider the '1's in this snippet, do they form a single connected component using 4-connectivity? Explain.

**Answer 2:**
Let's assume the snippet is:
```
  P1 P2 P3  (Row 0)
  P4 P5 P6  (Row 1)
  P7 P8 P9  (Row 2)
```
where P1=0, P2=1, P3=0, P4=1, P5=1, P6=1, P7=0, P8=1, P9=0.
Let P5 be at (1,1).

a) The '1' at (0,1) (P2) and the '1' at (1,1) (P5) share a common edge (the edge between row 0 and row 1, column 1). Therefore, they are **4-adjacent**.

b) Let's clarify the image snippet for this part. If we consider a larger context where the '1's are positioned as follows:
```
1 (0,0)  0 (0,1)  0 (0,2)
0 (1,0)  1 (1,1)  0 (1,2)
```
The '1' at (0,0) and the '1' at (1,1) are diagonally adjacent. They share a common corner. Therefore, they are **8-adjacent**.

c) The '1's are at positions (0,1), (1,0), (1,1), (1,2), and (2,1).
    *   (0,1) is 4-adjacent to (1,1).
    *   (1,0) is 4-adjacent to (1,1).
    *   (1,1) is 4-adjacent to (0,1), (1,0), (1,2), and (2,1).
    *   (1,2) is 4-adjacent to (1,1).
    *   (2,1) is 4-adjacent to (1,1).
    Since all '1's can be reached from each other through a path of 4-adjacent '1's (primarily via the central '1' at (1,1)), they **do form a single connected component using 4-connectivity**.

**Question 3:**
Calculate the $D_4$ and $D_8$ distances between pixels $p$ at (1,2) and $q$ at (6,8).

**Answer 3:**
Given $p$ at $(x_1, y_1) = (1, 2)$ and $q$ at $(x_2, y_2) = (6, 8)$.

*   **$D_4(p, q)$ (City-Block Distance):**
    $D_4(p, q) = |x_1 - x_2| + |y_1 - y_2|$
    $D_4(p, q) = |1 - 6| + |2 - 8|$
    $D_4(p, q) = |-5| + |-6|$
    $D_4(p, q) = 5 + 6 = 11$

*   **$D_8(p, q)$ (Chessboard Distance):**
    $D_8(p, q) = \max(|x_1 - x_2|, |y_1 - y_2|)$
    $D_8(p, q) = \max(|1 - 6|, |2 - 8|)$
    $D_8(p, q) = \max(|-5|, |-6|)$
    $D_8(p, q) = \max(5, 6) = 6$

**Question 4 (Conceptual):**
Why is understanding pixel adjacency and connectivity important for image segmentation tasks?

**Answer 4:**
Image segmentation aims to partition an image into meaningful regions or objects. Pixel adjacency and connectivity are fundamental to this process because they define how pixels are grouped together.
*   **Adjacency** determines which pixels are considered "neighbors" when checking for similarities.
*   **Connectivity** uses adjacency to define paths between pixels. By using connectivity on pixels that share similar properties (e.g., intensity, color), we can identify groups of pixels that belong to the same object or region. Different types of adjacency (4, 8, m) can lead to different segmentation results, especially for diagonal structures or thin lines. For example, region growing algorithms rely heavily on checking the adjacency of neighboring pixels to include them in a growing region.

---

### Important Points to Remember:

*   **Pixel is the basic unit:** A digital image is a grid of pixels, each with a coordinate and an intensity/color value.
*   **Neighborhoods define local context:** 4-neighbors and 8-neighbors are the most common ways to define the local context of a pixel.
*   **Adjacency is about shared boundaries:** 4-adjacency means sharing an edge, while 8-adjacency means sharing an edge or a corner.
*   **Connectivity builds regions:** Connectivity uses adjacency to link pixels of similar properties into groups or components.
*   **Distance measures quantify spatial relationships:** Euclidean, $D_4$, and $D_8$ distances provide different ways to measure the spatial separation between pixels, influencing various image processing operations.
*   **These relationships are foundational:** They underpin operations like filtering, feature extraction, segmentation, and morphological processing.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### References:

*   **Gonzalez, R. C., & Woods, R. E. (2018). *Digital Image Processing* (4th ed.). Pearson.** (Chapter 2: Digital Image Fundamentals, specifically sections on pixel relationships, adjacency, connectivity, and distance measures).
*   **Jayaraman, S., Esakkirajan, S., & Veerakumar, T. (2011). *Digital Image Processing*. McGraw Hill Education (India).** (Chapter 2: Digital Image Fundamentals, covering pixels, neighborhoods, and connectivity).

---

This concludes the notes on the basic relationship between pixels. Understanding these fundamental concepts is essential for progressing to more advanced topics in digital image processing.