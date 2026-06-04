---
title: "Distance Measures"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 1: Digital Image Fundamentals: Image representation"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36910"
status: "completed"
scrapedAt: "2026-05-23T16:34:49.510Z"
---
# DIGITAL IMAGE PROCESSING - Module 1: Digital Image Fundamentals: Image Representation - Distance Measures

## 1. Introduction to Distance Measures

Distance measures are fundamental tools in Digital Image Processing, particularly in areas like **pattern recognition, image segmentation, and feature extraction**. They quantify the "similarity" or "dissimilarity" between two entities, typically pixels or sets of pixels, within an image. Understanding these measures is crucial for making informed decisions about grouping pixels, identifying objects, and comparing image content.

**Learning Outcome Alignment:** This topic directly supports **CO2 (Analyze the various concepts and mathematical transforms necessary for image processing)** by providing the mathematical basis for comparing image elements. It also indirectly aids **CO5 (Understand the basic image segmentation techniques)** as distance measures are often used within segmentation algorithms.

**Knowledge Level Alignment:** This topic is foundational for achieving **K3 (Analyze)** by requiring students to understand and apply mathematical concepts.

**Key Concepts:**

*   **Pixels:** The basic building blocks of a digital image, each having a location (coordinates) and a value (intensity or color).
*   **Feature Space:** A multi-dimensional space where each entity (e.g., pixel) is represented by a set of features (e.g., intensity, color components, texture descriptors).
*   **Metric Space:** A set where a distance function (or metric) is defined, satisfying certain properties (non-negativity, identity of indiscernibles, symmetry, and triangle inequality).

**Textbook References:**

*   **Gonzalez & Woods (4th Ed.):** Chapter 2 (Digital Image Fundamentals) often introduces the foundational concepts of pixels and their representation, which are prerequisites for understanding distance measures.
*   **Jayaraman, Esakkirajan, & Veerakumar (1st Ed.):** This textbook likely covers distance measures in its early chapters on image representation and pre-processing.

## 2. Distance Measures Between Pixels

In digital image processing, we often need to measure the distance between pixels. This is typically done based on their spatial locations, but can also incorporate their intensity or color values.

### 2.1. Euclidean Distance (L2 Distance)

The Euclidean distance is the most intuitive and commonly used distance measure. It represents the straight-line distance between two points in a multi-dimensional space.

**Definition:** For two pixels $p = (x, y)$ and $q = (x', y')$, the Euclidean distance $D_e$ is given by:

$D_e(p, q) = \sqrt{(x - x')^2 + (y - y')^2}$

**Example:** Consider two pixels at coordinates $p=(1, 2)$ and $q=(4, 6)$.
$D_e(p, q) = \sqrt{(1 - 4)^2 + (2 - 6)^2} = \sqrt{(-3)^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$

**Relevance:** Used in many image processing tasks where the spatial proximity is the primary factor, such as clustering algorithms or morphological operations.

**Textbook Reference:**
*   **Gonzalez & Woods (4th Ed.):** Likely mentioned in the context of feature extraction or pattern recognition.
*   **Jayaraman, Esakkirajan, & Veerakumar (1st Ed.):** A standard metric discussed in basic image analysis.

### 2.2. City Block Distance (L1 Distance or Manhattan Distance)

The City Block distance measures the distance between two points by summing the absolute differences of their coordinates. It's like traveling on a grid, moving only horizontally or vertically.

**Definition:** For two pixels $p = (x, y)$ and $q = (x', y')$, the City Block distance $D_1$ is given by:

$D_1(p, q) = |x - x'| + |y - y'|$

**Example:** Using the same pixels $p=(1, 2)$ and $q=(4, 6)$.
$D_1(p, q) = |1 - 4| + |2 - 6| = |-3| + |-4| = 3 + 4 = 7$

**Relevance:** Useful in applications where movement is restricted to orthogonal directions, such as pathfinding in grid-based environments or certain types of image filtering. It's also computationally less expensive than Euclidean distance.

**Textbook Reference:**
*   **Gonzalez & Woods (4th Ed.):** Discussed as an alternative to Euclidean distance, often in the context of specific algorithms.
*   **Jayaraman, Esakkirajan, & Veerakumar (1st Ed.):** A common distance metric introduced alongside Euclidean distance.

### 2.3. Chessboard Distance (L∞ Distance or Maximum Value Distance)

The Chessboard distance measures the distance between two points as the maximum of the absolute differences of their coordinates. This is akin to the number of moves a king would need to go from one square to another on a chessboard.

**Definition:** For two pixels $p = (x, y)$ and $q = (x', y')$, the Chessboard distance $D_\infty$ is given by:

$D_\infty(p, q) = \max(|x - x'|, |y - y'|)$

**Example:** Using the same pixels $p=(1, 2)$ and $q=(4, 6)$.
$D_\infty(p, q) = \max(|1 - 4|, |2 - 6|) = \max(|-3|, |-4|) = \max(3, 4) = 4$

**Relevance:** Useful in algorithms that consider diagonal adjacency to be the same as orthogonal adjacency, such as certain types of morphological operations like dilation and erosion.

**Textbook Reference:**
*   **Gonzalez & Woods (4th Ed.):** Crucial for understanding 8-connectivity and its associated distance.
*   **Jayaraman, Esakkirajan, & Veerakumar (1st Ed.):** Typically covered when discussing pixel connectivity.

### 2.4. Distance Measures Based on Intensity/Color

While the above measures are purely spatial, distance measures can also incorporate pixel intensity or color values. This is particularly relevant when segmenting images based on pixel properties rather than just location.

**Definition:** For two pixels $p$ and $q$ with intensity values $I(p)$ and $I(q)$, the difference can be calculated as:

$D_{intensity}(p, q) = |I(p) - I(q)|$

For color images, where a pixel might be represented by RGB values $(r, g, b)$, distance measures like Euclidean distance can be applied to the color vectors:

$D_{color}(p, q) = \sqrt{(r_p - r_q)^2 + (g_p - g_q)^2 + (b_p - b_q)^2}$

**Example:** Consider two pixels with intensities $I(p) = 50$ and $I(q) = 75$.
$D_{intensity}(p, q) = |50 - 75| = 25$

Consider two pixels with RGB values $p=(10, 20, 30)$ and $q=(15, 25, 35)$.
$D_{color}(p, q) = \sqrt{(10 - 15)^2 + (20 - 25)^2 + (30 - 35)^2} = \sqrt{(-5)^2 + (-5)^2 + (-5)^2} = \sqrt{25 + 25 + 25} = \sqrt{75} \approx 8.66$

**Relevance:** Essential for image segmentation based on similarity of pixel values, color-based object detection, and comparing image regions.

**Textbook Reference:**
*   **Gonzalez & Woods (4th Ed.):** Discussed extensively in segmentation and color image processing chapters.
*   **Jayaraman, Esakkirajan, & Veerakumar (1st Ed.):** Covered in color image processing and segmentation sections.

**Important Point to Remember:** The choice of distance measure depends heavily on the specific application and the desired outcome.

## 3. Distance Measures Between Sets of Pixels (Regions)

In image processing, we often deal with entire regions or sets of pixels, not just individual pixels. Measuring the distance between these sets is important for tasks like comparing shapes or determining the proximity of different objects.

Let $A$ and $B$ be two sets of pixels (regions).

### 3.1. Shortest Distance (Minimum Distance)

This measure defines the distance between two sets as the minimum distance between any pixel in set $A$ and any pixel in set $B$.

**Definition:**
$D_{min}(A, B) = \min_{p \in A, q \in B} D(p, q)$
where $D(p, q)$ is a chosen distance metric between pixels (e.g., Euclidean, City Block, Chessboard).

**Example:** Let set $A = \{(1,1), (1,2)\}$ and set $B = \{(3,3), (3,4)\}$. Using Euclidean distance:
*   $D_e((1,1), (3,3)) = \sqrt{(1-3)^2 + (1-3)^2} = \sqrt{4+4} = \sqrt{8}$
*   $D_e((1,1), (3,4)) = \sqrt{(1-3)^2 + (1-4)^2} = \sqrt{4+9} = \sqrt{13}$
*   $D_e((1,2), (3,3)) = \sqrt{(1-3)^2 + (2-3)^2} = \sqrt{4+1} = \sqrt{5}$
*   $D_e((1,2), (3,4)) = \sqrt{(1-3)^2 + (2-4)^2} = \sqrt{4+4} = \sqrt{8}$
The minimum of these is $\sqrt{5}$. So, $D_{min}(A, B) = \sqrt{5}$.

**Relevance:** Used to determine if two objects are "close" to each other.

### 3.2. Largest Distance (Maximum Distance)

This measure defines the distance between two sets as the maximum distance between any pixel in set $A$ and any pixel in set $B$.

**Definition:**
$D_{max}(A, B) = \max_{p \in A, q \in B} D(p, q)$

**Example:** Using the same sets $A$ and $B$ as above, the maximum Euclidean distance calculated was $\sqrt{13}$. So, $D_{max}(A, B) = \sqrt{13}$.

**Relevance:** Useful for understanding the extent of separation between two regions.

### 3.3. Average Distance

This measure calculates the average of all pairwise distances between pixels in the two sets.

**Definition:**
$D_{avg}(A, B) = \frac{1}{|A| \cdot |B|} \sum_{p \in A} \sum_{q \in B} D(p, q)$
where $|A|$ and $|B|$ are the number of pixels in sets $A$ and $B$ respectively.

**Example:** For sets $A = \{(1,1), (1,2)\}$ and $B = \{(3,3), (3,4)\}$:
The sum of distances is $\sqrt{8} + \sqrt{13} + \sqrt{5} + \sqrt{8} \approx 2.83 + 3.61 + 2.24 + 2.83 = 11.51$.
$|A| = 2$, $|B| = 2$. So, $|A| \cdot |B| = 4$.
$D_{avg}(A, B) = \frac{11.51}{4} \approx 2.88$

**Relevance:** Provides a more robust measure of separation than minimum or maximum distance, taking all pixel pairs into account.

### 3.4. Hausdorff Distance

The Hausdorff distance is a measure of how far two subsets of a metric space are from each other. It is defined as the maximum distance from a point in one set to the closest point in the other set. It is a symmetric measure.

**Definition:**
$H(A, B) = \max(h(A, B), h(B, A))$
where $h(A, B) = \max_{a \in A} \min_{b \in B} D(a, b)$. This $h(A, B)$ is the directed Hausdorff distance.

**Example:** Consider a simple case: $A = \{(1,1)\}$ and $B = \{(3,3), (3,4)\}$.
$h(A, B) = \min_{b \in B} D((1,1), b)$.
We calculated $D_e((1,1), (3,3)) = \sqrt{8}$ and $D_e((1,1), (3,4)) = \sqrt{13}$.
So, $h(A, B) = \min(\sqrt{8}, \sqrt{13}) = \sqrt{8}$.

Now, $h(B, A) = \max_{b \in B} \min_{a \in A} D(b, a)$.
*   For $b=(3,3)$, $\min_{a \in A} D((3,3), a) = D((3,3), (1,1)) = \sqrt{8}$.
*   For $b=(3,4)$, $\min_{a \in A} D((3,4), a) = D((3,4), (1,1)) = \sqrt{13}$.
So, $h(B, A) = \max(\sqrt{8}, \sqrt{13}) = \sqrt{13}$.

Therefore, the Hausdorff distance $H(A, B) = \max(\sqrt{8}, \sqrt{13}) = \sqrt{13}$.

**Relevance:** Widely used in object recognition and image matching, especially when comparing shapes or contours. It is sensitive to outliers.

**Textbook Reference:**
*   **Castleman (2/e):** Might discuss advanced metrics like Hausdorff distance in sections related to shape analysis or pattern recognition.
*   **Jain (PHI):** Similar to Castleman, it's likely in advanced chapters.

**Important Point to Remember:** Hausdorff distance is symmetric and measures the maximum deviation of one set from the other.

## 4. Distance Transforms

A distance transform (DT) is a data structure derived from a binary image (an image with foreground and background pixels). It assigns to each foreground pixel a value representing the distance from that pixel to the nearest background pixel.

**Key Concepts:**

*   **Binary Image:** An image where pixels have only two possible values, typically 0 (background) and 1 (foreground), or vice versa.
*   **Background Pixels:** Pixels representing the "empty" or "background" regions.
*   **Foreground Pixels:** Pixels representing the "objects" or "features" of interest.

**Purpose:** Distance transforms are used in various applications like:

*   **Skeletonization/Medial Axis Transformation:** Finding the "centerlines" of objects.
*   **Shape Analysis:** Quantifying the thickness of objects.
*   **Morphological Operations:** As a basis for operations like erosion and dilation.
*   **Image Segmentation:** Identifying regions based on their distance to boundaries.

### 4.1. Euclidean Distance Transform (EDT)

This transform assigns to each foreground pixel the Euclidean distance to the nearest background pixel.

**How it's computed:** Typically involves algorithms like the "grassfire" transform or iterative methods. The concept is that a "fire" starts simultaneously from all background pixels and spreads inwards. The value assigned to a foreground pixel is the time it takes for the fire to reach it.

**Example:** Consider a simple binary image:
```
0 0 0 0 0
0 1 1 1 0
0 1 1 1 0
0 1 1 1 0
0 0 0 0 0
```
(Where 0 is background and 1 is foreground)

The EDT would look something like this (values are approximate distances):
```
Inf Inf Inf Inf Inf
Inf 2.0 1.4 2.0 Inf
Inf 1.4 1.0 1.4 Inf
Inf 2.0 1.4 2.0 Inf
Inf Inf Inf Inf Inf
```
(Inf represents background pixels, which are not assigned a distance to the background).

**Relevance:** Provides precise distance information and is used in many advanced image analysis techniques.

**Textbook References:**
*   **Gonzalez & Woods (4th Ed.):** Dedicates a section to distance transforms and their applications in morphology and skeletonization.
*   **Jayaraman, Esakkirajan, & Veerakumar (1st Ed.):** Likely covers distance transforms as a key tool for morphological operations.

### 4.2. Approximate Distance Transforms (Non-Euclidean)

Due to the computational complexity of the Euclidean Distance Transform, approximations are often used. These are based on simpler distance metrics like City Block and Chessboard.

#### 4.2.1. City Block Distance Transform (L1 DT)

Assigns the City Block distance to the nearest background pixel.

**Example:** Using the same binary image as above:
```
Inf Inf Inf Inf Inf
Inf 2.0 1.0 2.0 Inf
Inf 1.0 2.0 1.0 Inf
Inf 2.0 1.0 2.0 Inf
Inf Inf Inf Inf Inf
```
(These values are approximate and depend on the specific algorithm used.)

#### 4.2.2. Chessboard Distance Transform (L∞ DT)

Assigns the Chessboard distance to the nearest background pixel.

**Example:** Using the same binary image:
```
Inf Inf Inf Inf Inf
Inf 2.0 1.0 1.0 Inf
Inf 1.0 1.0 1.0 Inf
Inf 1.0 1.0 1.0 Inf
Inf Inf Inf Inf Inf
```
(These values are approximate.)

**Textbook Reference:**
*   **Gonzalez & Woods (4th Ed.):** Discusses these approximations as efficient alternatives.
*   **Jayaraman, Esakkirajan, & Veerakumar (1st Ed.):** Often presented as simpler implementations of distance transforms.

**Important Point to Remember:** Approximate distance transforms are computationally faster but yield less accurate distance values compared to the Euclidean Distance Transform. The choice depends on the trade-off between accuracy and speed.

## 5. Practice Questions and Answers

**Question 1:**
Two pixels are located at coordinates $p = (2, 3)$ and $q = (6, 7)$.
Calculate the Euclidean distance, City Block distance, and Chessboard distance between $p$ and $q$.

**Answer 1:**
*   **Euclidean Distance ($D_e$):**
    $D_e(p, q) = \sqrt{(2 - 6)^2 + (3 - 7)^2} = \sqrt{(-4)^2 + (-4)^2} = \sqrt{16 + 16} = \sqrt{32} \approx 5.66$
*   **City Block Distance ($D_1$):**
    $D_1(p, q) = |2 - 6| + |3 - 7| = |-4| + |-4| = 4 + 4 = 8$
*   **Chessboard Distance ($D_\infty$):**
    $D_\infty(p, q) = \max(|2 - 6|, |3 - 7|) = \max(|-4|, |-4|) = \max(4, 4) = 4$

**Question 2:**
Consider two regions $A = \{(1,1), (1,2)\}$ and $B = \{(3,3)\}$. Using Euclidean distance:
a) Calculate the shortest distance between $A$ and $B$.
b) Calculate the largest distance between $A$ and $B$.
c) Calculate the Hausdorff distance between $A$ and $B$.

**Answer 2:**
First, calculate all pairwise Euclidean distances:
*   $D_e((1,1), (3,3)) = \sqrt{(1-3)^2 + (1-3)^2} = \sqrt{4+4} = \sqrt{8} \approx 2.83$
*   $D_e((1,2), (3,3)) = \sqrt{(1-3)^2 + (2-3)^2} = \sqrt{4+1} = \sqrt{5} \approx 2.24$

a) **Shortest Distance ($D_{min}$):**
$D_{min}(A, B) = \min(D_e((1,1), (3,3)), D_e((1,2), (3,3))) = \min(\sqrt{8}, \sqrt{5}) = \sqrt{5} \approx 2.24$

b) **Largest Distance ($D_{max}$):**
$D_{max}(A, B) = \max(D_e((1,1), (3,3)), D_e((1,2), (3,3))) = \max(\sqrt{8}, \sqrt{5}) = \sqrt{8} \approx 2.83$

c) **Hausdorff Distance ($H(A, B)$):**
$h(A, B) = \max_{a \in A} \min_{b \in B} D(a, b) = \max(\min_{b \in B} D_e((1,1), b), \min_{b \in B} D_e((1,2), b))$
Since $B$ only has one element $(3,3)$:
$h(A, B) = \max(D_e((1,1), (3,3)), D_e((1,2), (3,3))) = \max(\sqrt{8}, \sqrt{5}) = \sqrt{8}$.

$h(B, A) = \max_{b \in B} \min_{a \in A} D(b, a) = \min_{a \in A} D_e((3,3), a)$
$h(B, A) = \min(D_e((3,3), (1,1)), D_e((3,3), (1,2))) = \min(\sqrt{8}, \sqrt{5}) = \sqrt{5}$.

$H(A, B) = \max(h(A, B), h(B, A)) = \max(\sqrt{8}, \sqrt{5}) = \sqrt{8} \approx 2.83$.

**Question 3:**
What is the primary difference between Euclidean Distance Transform and an approximate distance transform like the City Block Distance Transform?

**Answer 3:**
The primary difference lies in the accuracy of the distance measurement. The Euclidean Distance Transform calculates the true straight-line distance between a foreground pixel and the nearest background pixel, which is computationally intensive. Approximate distance transforms, like the City Block or Chessboard distance transforms, use simpler metrics that are computationally faster but provide an approximation of the true Euclidean distance.

## 6. Important Points to Remember

*   **Distance measures quantify dissimilarity.** Smaller distances imply greater similarity.
*   **Choice of metric is application-dependent.** Euclidean, City Block, and Chessboard distances have different geometric interpretations and are suitable for different tasks.
*   **Distance can be purely spatial or incorporate pixel values (intensity/color).**
*   **Distance transforms are powerful tools for analyzing binary images**, enabling operations like skeletonization and shape analysis.
*   **Approximations in distance transforms trade accuracy for computational efficiency.**
*   **Hausdorff distance is sensitive to outliers** and measures the maximum mismatch between two sets.

This concludes Module 1's topic on Distance Measures. Understanding these concepts is crucial for subsequent modules on image segmentation, feature extraction, and pattern recognition.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
