---
title: "Metric and topological properties of digital images"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 1: The image, its representation and properties "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bc25"
status: "completed"
scrapedAt: "2026-05-20T16:52:38.204Z"
---
# DIGITAL IMAGE PROCESSING - MODULE 1: The image, its representation and properties
## Topic: Metric and Topological Properties of Digital Images

**Learning Outcomes:**

*   Understand and define metric properties in digital images.
*   Understand and define topological properties in digital images.
*   Distinguish between metric and topological properties.
*   Explain the concepts of connectivity and adjacency in digital images.
*   Describe how metric and topological properties are affected by image resolution and digitization.
*   Apply the concepts of Euler number and connectivity to analyze simple digital images.

---

## I. Introduction

This section focuses on understanding how we can measure and analyze digital images not just by pixel values, but by their spatial relationships and structure. We will explore metric and topological properties, which provide crucial information about the objects represented in the image.

## II. Metric Properties

**Definition:** Metric properties are characteristics of an image that are quantifiable and preserved under rigid transformations (translation, rotation, reflection, scaling) *only if the scaling factor is 1*. They involve measurements of distance, size, shape, and angles.  Scaling of an image will change its metric properties.

*   **Distance Measures:**
    *   **Euclidean Distance (D<sub>e</sub>):**  The straight-line distance between two pixels (p, q) at coordinates (x, y) and (s, t) respectively.
        *   D<sub>e</sub>(p, q) =  √((x - s)<sup>2</sup> + (y - t)<sup>2</sup>)
        *   Example: Pixel p(1,1) and pixel q(4,5), D<sub>e</sub>(p, q) = √((1-4)<sup>2</sup> + (1-5)<sup>2</sup>) = √(9 + 16) = √25 = 5
    *   **City Block Distance (D<sub>4</sub>):** Also known as Manhattan distance.  It measures the distance by moving only horizontally or vertically.
        *   D<sub>4</sub>(p, q) = |x - s| + |y - t|
        *   Example: Pixel p(1,1) and pixel q(4,5), D<sub>4</sub>(p, q) = |1-4| + |1-5| = 3 + 4 = 7
    *   **Chessboard Distance (D<sub>8</sub>):**  Measures the distance by allowing diagonal movements.  The distance is the maximum of the absolute differences in coordinates.
        *   D<sub>8</sub>(p, q) = max(|x - s|, |y - t|)
        *   Example: Pixel p(1,1) and pixel q(4,5), D<sub>8</sub>(p, q) = max(|1-4|, |1-5|) = max(3, 4) = 4
*   **Perimeter:**  The length of the boundary of a region.  Accurate perimeter measurement can be challenging in digital images due to the discrete nature of pixels.
*   **Area:**  The number of pixels within a region.
*   **Centroid:** The center point of a region, calculated as the average of the x and y coordinates of all pixels within the region.
*   **Shape Descriptors:** Features that characterize the shape of a region, such as aspect ratio (width/height), circularity (4π*area / perimeter<sup>2</sup>), and eccentricity.

**Important Note:**  Metric properties are heavily influenced by image resolution.  Changing the resolution will change the measured values of distances, areas, and perimeters.  Subpixel accuracy techniques can be used to improve the estimation of these values.

## III. Topological Properties

**Definition:** Topological properties describe the *relationships* between objects in an image that are preserved under continuous deformations (stretching, bending, twisting) as long as there is no tearing or gluing.  They are properties related to connectivity and adjacency.  Topological properties are invariant to scale changes.

*   **Connectivity:**  Describes how regions or parts of a region are connected to each other.  Crucial for object identification and segmentation.
*   **Holes:** The number of enclosed regions within an object.  For example, the letter 'O' has one hole.
*   **Number of Connected Components:**  The number of distinct, separate regions in an image.  Each region is a connected component.

## IV. Connectivity and Adjacency

*   **4-Adjacency:** A pixel `p` with coordinates (x, y) is 4-adjacent to pixels (x+1, y), (x-1, y), (x, y+1), and (x, y-1). These are its immediate horizontal and vertical neighbors.
*   **8-Adjacency:** A pixel `p` with coordinates (x, y) is 8-adjacent to pixels (x+1, y), (x-1, y), (x, y+1), (x, y-1), (x+1, y+1), (x+1, y-1), (x-1, y+1), and (x-1, y-1).  These are its immediate horizontal, vertical, and diagonal neighbors.
*   **m-Adjacency (Mixed Adjacency):** A modification of 8-adjacency that addresses ambiguities when dealing with objects containing diagonal connections.  Two pixels `p` and `q` with values from a set `V` are m-adjacent if:
    *   `q` is 4-adjacent to `p`, *or*
    *   `q` is 8-adjacent to `p` and the set of pixels that are 4-adjacent to both `p` and `q` have values *not* in `V`.

**The Adjacency Paradox:**  If we use 4-adjacency to define connectivity for objects and 8-adjacency to define connectivity for the background, then we may encounter paradoxical situations where two objects touch but are not considered connected.  Similarly, the background between the two objects would be connected even though it *shouldn't* be.  m-adjacency is one way to resolve this paradox.

**Path:** A sequence of distinct pixels (x0, y0), (x1, y1), ..., (xn, yn) where (xi, yi) and (xi-1, yi-1) are adjacent for 1 ≤ i ≤ n. We can have 4-paths, 8-paths, and m-paths depending on the adjacency being used.

**Connected Component:** A set of pixels where a path exists between any two pixels within the set, using a specific adjacency rule.

## V. Euler Number

**Definition:** The Euler number (E) is a topological property that relates the number of connected components (C) and the number of holes (H) in a region.

*   E = C - H
*   For a single connected object with no holes, E = 1.
*   For a single connected object with one hole, E = 0.
*   For two connected objects with no holes, E = 2.

**Example:** Consider an image with two circles (C=2) and each circle has one hole (H=2). Therefore, E = 2 - 2 = 0.

**Note:** The Euler number is invariant under topological transformations.

## VI. Impact of Image Resolution and Digitization

*   **Resolution:** Lower resolution images can lead to inaccurate measurements of metric properties and can affect the connectivity of objects.
*   **Digitization:** The process of converting a continuous image to a discrete representation introduces quantization errors, which can also impact the accuracy of metric measurements and the preservation of topological properties.  Antialiasing techniques can help reduce these effects.

## VII. Comparison of Metric and Topological Properties

| Feature           | Metric Properties                                  | Topological Properties                               |
| ----------------- | ------------------------------------------------ | --------------------------------------------------- |
| Definition        | Quantifiable measurements (distance, size, shape) | Relationships between objects (connectivity, holes) |
| Invariance        | Only invariant under rigid transformations with scale factor of 1. | Invariant under continuous deformations (no tearing/gluing) |
| Examples          | Distance, area, perimeter, angles              | Connectivity, number of holes, Euler number          |
| Dependence on Resolution | Highly dependent                                 | Less dependent (but can still be affected)       |

## VIII. Practice Questions & Exercises

1.  **Calculate the Euclidean, City Block, and Chessboard distances between pixels p(2, 3) and q(5, 7).**

    *   **Answer:**
        *   Euclidean Distance: √((2-5)<sup>2</sup> + (3-7)<sup>2</sup>) = √(9 + 16) = 5
        *   City Block Distance: |2-5| + |3-7| = 3 + 4 = 7
        *   Chessboard Distance: max(|2-5|, |3-7|) = max(3, 4) = 4

2.  **An image contains a single object shaped like the number '8'. What is its Euler number?**

    *   **Answer:** The number '8' has two holes and one connected component. Therefore, E = 1 - 2 = -1.

3.  **Explain the difference between 4-adjacency and 8-adjacency.**

    *   **Answer:** 4-adjacency considers only horizontal and vertical neighbors as adjacent, while 8-adjacency also considers diagonal neighbors as adjacent.

4.  **Why is m-adjacency used? Describe a situation where it is beneficial.**

    *   **Answer:** m-adjacency is used to avoid ambiguities arising from the adjacency paradox. Consider a digital image with a diagonal line of 1s connecting two square regions also containing 1s. If 8-adjacency is used, the two squares become one large region. If 4-adjacency is used, the diagonal line is not considered part of the shape. In a binary image (0s and 1s), the use of m-adjacency on the object (1) will preserve topological properties better than 4- or 8- adjacency. m-adjacency gives a definition that is more consistent.

5. **Consider the following 5x5 binary image (1 represents the object, 0 represents the background):**

```
    0 0 0 0 0
    0 1 1 1 0
    0 1 0 1 0
    0 1 1 1 0
    0 0 0 0 0
```
*   **How many connected components are there using 4-connectivity?**
*   **How many connected components are there using 8-connectivity?**
*   **What is the Euler number of the image?**

    *   **Answer:**
        * 4-connectivity: 1 connected component
        * 8-connectivity: 1 connected component
        * Euler number:  C - H = 1 - 1 = 0 (one connected component with one hole)

## IX. Important Points to Remember

*   Metric properties are quantifiable and depend on scale and image resolution.
*   Topological properties describe spatial relationships and are invariant to continuous deformations.
*   Understanding adjacency and connectivity is crucial for object identification.
*   The Euler number provides a useful measure of the topological structure of an image.
*   Be aware of the impact of digitization and resolution on both metric and topological properties.
