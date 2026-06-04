---
title: "Basic relationship between pixels"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 1: Digital Image Fundamentals: Image representation"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff4f5"
status: "completed"
scrapedAt: "2026-05-23T18:06:24.324Z"
---
# DIGITAL IMAGE PROCESSING

## Module 1: Digital Image Fundamentals: Image Representation

### Topic: Basic Relationship Between Pixels

---

### **1. Introduction**

Digital image processing involves manipulating and analyzing digital images. A digital image is essentially a grid of picture elements, known as pixels. Understanding the relationships between these pixels is fundamental to performing various image processing tasks like filtering, segmentation, and restoration. This module focuses on the foundational concepts of how pixels relate to each other in a digital image.

**Learning Outcomes Covered:**

*   Understanding the basic spatial relationships between pixels.
*   Defining neighborhood concepts.
*   Understanding connectivity and adjacency.
*   Defining distance metrics between pixels.

**Course Outcomes Alignment:**

*   **CO1 (K2):** Explaining how pixels are arranged and related is a fundamental component of an image processing system.
*   **CO2 (K3):** Analyzing these relationships is crucial for understanding mathematical transforms applied to images.
*   **CO5 (K2):** Basic segmentation techniques often rely on identifying connected regions of pixels with similar properties, which stems from understanding pixel relationships.

---

### **2. Pixels and Their Representation**

A digital image is a 2D array (or a collection of 2D arrays for color images) where each element represents a pixel.

*   **Pixel (Picture Element):** The smallest identifiable element of a digital image. Each pixel has a specific location (coordinates) and a value representing its intensity or color.
*   **Image Coordinates:** Pixels are typically referenced by their row and column indices. In a 2D image, a pixel at row `r` and column `c` can be denoted as `f(r, c)`.
    *   The top-left pixel is usually at `(0, 0)` or `(1, 1)`. Most literature, including Gonzalez & Woods (4th Ed.), uses `(0, 0)` as the origin.
*   **Pixel Value:**
    *   **Grayscale Image:** The pixel value represents the intensity of light at that point. This is typically a single numerical value, often quantized into a range (e.g., 0-255 for 8-bit images).
    *   **Color Image:** The pixel value is usually a vector representing the color components (e.g., RGB values for Red, Green, Blue).

---

### **3. Basic Spatial Relationships Between Pixels**

The spatial relationships between pixels define how they are positioned relative to each other in the image grid.

*   **Neighbors of a Pixel:**
    *   Consider a pixel at coordinates `(r, c)`.
    *   **4-Neighbors (N4):** The pixels directly above, below, left, and right of `(r, c)`. These are the pixels at `(r-1, c)`, `(r+1, c)`, `(r, c-1)`, and `(r, c+1)`.
    *   **Diagonal Neighbors:** The pixels at `(r-1, c-1)`, `(r-1, c+1)`, `(r+1, c-1)`, and `(r+1, c+1)`.
    *   **8-Neighbors (N8):** The 4-neighbors and the diagonal neighbors combined. This includes all pixels directly adjacent (horizontally, vertically, or diagonally) to `(r, c)`.

    **[Refer to: Gonzalez & Woods, 4th Ed., Chapter 2, Section 2.2.1, "Digital Image Fundamentals"]**

    *Example:*
    For a pixel at (1,1):
    *   4-Neighbors: (0,1), (2,1), (1,0), (1,2)
    *   8-Neighbors: (0,0), (0,1), (0,2), (1,0), (1,2), (2,0), (2,1), (2,2)

*   **Connectivity:**
    Connectivity is a concept that links pixels based on adjacency and their values. It's crucial for image segmentation and region analysis.
    *   **Adjacency:** Two pixels are adjacent if they share an edge or a corner.
        *   **4-adjacency:** Two pixels `p` and `q` are 4-adjacent if they are 4-neighbors.
        *   **8-adjacency:** Two pixels `p` and `q` are 8-adjacent if they are 8-neighbors.
        *   **Diagonal-adjacency:** Two pixels `p` and `q` are diagonally adjacent if they are diagonal neighbors. (Note: 8-adjacency implies both 4-adjacency and diagonal-adjacency, but the term "adjacency" can sometimes refer to just the diagonal ones to differentiate).

    *   **Connectivity of Pixels with a Specified Property:**
        Two pixels `p` and `q` are considered connected if there is a path between them consisting of pixels that all satisfy a specified property (e.g., all having the same intensity value or being above a certain threshold).
        *   **Path:** A sequence of connected pixels.
        *   **k-connectivity (for k = 4, 8):** Pixels `p` and `q` are k-connected if there is a path between them using only k-adjacent pixels.

    **[Refer to: Jayaraman, Esakkirajan, Veerakumar, Chapter 2, Section 2.4, "Pixel connectivity"]**

    *Example:*
    Consider a binary image (pixels are 0 or 1). We want to find connected regions of '1' pixels.
    If we use 4-connectivity, two '1's are connected if they are horizontally or vertically adjacent.
    If we use 8-connectivity, two '1's are connected if they are horizontally, vertically, or diagonally adjacent.

    ```
    Image:
    1 0 1
    1 1 0
    0 1 1

    Pixel at (1,1) (value 1):
    - 4-neighbors with value 1: (0,1) - No, (2,1) - Yes, (1,0) - Yes, (1,2) - No.
    - 8-neighbors with value 1: (0,0) - Yes, (0,1) - No, (0,2) - Yes, (1,0) - Yes, (1,2) - No, (2,0) - No, (2,1) - Yes, (2,2) - Yes.

    Using 4-connectivity, (1,1) is connected to (2,1) and (1,0).
    Using 8-connectivity, (1,1) is connected to (0,0), (0,2), (1,0), (2,1), (2,2).
    ```

*   **Regions and Background:**
    *   **Region:** A set of connected pixels that share a common property (e.g., intensity range).
    *   **Background:** The part of the image that is not part of any foreground region.
    *   **Connected Components:** If a set of pixels with a certain property forms a region, and no other pixel with that property is connected to it (using the defined connectivity), then that set is a connected component.

    **[Refer to: Castleman, 2nd Ed., Chapter 3, Section 3.2.1, "Neighborhoods and Connectivity"]**

---

### **4. Distance Metrics**

Distance metrics quantify the spatial separation between pixels. These are important for operations like morphological processing and clustering.

Let `p` be a pixel at `(r1, c1)` and `q` be a pixel at `(r2, c2)`.

*   **Euclidean Distance (D<sub>e</sub>):**
    The standard geometric distance.
    $$ D_e(p, q) = \sqrt{(r_1 - r_2)^2 + (c_1 - c_2)^2} $$
    This is the straight-line distance between the centers of the pixels.
    *Example:* Distance between (1,1) and (3,4) = $\sqrt{(1-3)^2 + (1-4)^2} = \sqrt{(-2)^2 + (-3)^2} = \sqrt{4 + 9} = \sqrt{13} \approx 3.60$

*   **City-Block Distance (D<sub>4</sub> or Manhattan Distance):**
    This distance is defined using only horizontal and vertical steps. It's the sum of the absolute differences of their coordinates.
    $$ D_4(p, q) = |r_1 - r_2| + |c_1 - c_2| $$
    This is the distance a taxi would travel in a grid-like city. Pixels with this distance from `p` form a diamond shape.
    *Example:* Distance between (1,1) and (3,4) = $|1-3| + |1-4| = |-2| + |-3| = 2 + 3 = 5$.

*   **Chessboard Distance (D<sub>8</sub>):**
    This distance is defined using horizontal, vertical, and diagonal steps. It's the maximum of the absolute differences of their coordinates.
    $$ D_8(p, q) = \max(|r_1 - r_2|, |c_1 - c_2|) $$
    This is the minimum number of king moves on a chessboard to go from `p` to `q`. Pixels with this distance from `p` form a square shape.
    *Example:* Distance between (1,1) and (3,4) = $\max(|1-3|, |1-4|) = \max(|-2|, |-3|) = \max(2, 3) = 3$.

**Relationship between Distances:**
For any two pixels `p` and `q`:
*   $D_4(p, q) \le D_e(p, q)$
*   $D_8(p, q) \le D_e(p, q)$
*   $D_4(p, q) \le D_8(p, q)$ (This is not always true, but rather $D_8(p, q) \le D_4(p, q)$ if we only consider unit steps. However, the definition of D8 implies diagonal steps are equivalent to horizontal/vertical steps. The key is that D8 provides a path for diagonal adjacency.)

Let's re-examine the D8 definition and its implication. D8 is derived from the maximum difference in coordinates. If we consider paths composed of single steps (horizontal, vertical, or diagonal), then D8 represents the minimum number of such steps.

*   Consider pixels (r, c) and (r+a, c+b).
*   The Euclidean distance is $\sqrt{a^2 + b^2}$.
*   The D4 distance is $|a| + |b|$.
*   The D8 distance is $\max(|a|, |b|)$.

Let's check the common understanding:
*   **D4:** Requires moving only horizontally or vertically. For `p=(r1,c1)` and `q=(r2,c2)`, a path using only N4 steps has length $|r1-r2| + |c1-c2|$.
*   **D8:** Allows diagonal moves. Each diagonal move covers one unit in both row and column. If $|r1-r2| = a$ and $|c1-c2| = b$, we can make $\min(a, b)$ diagonal moves, and then $a - \min(a, b)$ or $b - \min(a, b)$ horizontal/vertical moves. The total number of moves is $\min(a, b) + (a - \min(a, b)) + (b - \min(a, b)) = \min(a, b) + \max(a, b) - \min(a, b) = \max(a, b)$. This is the chessboard distance.

So, the definitions are correct.

**When are these distances equivalent?**
*   $D_4(p, q) = D_e(p, q)$ if $|r_1 - r_2| = 0$ or $|c_1 - c_2| = 0$ (i.e., pixels are in the same row or column).
*   $D_8(p, q) = D_e(p, q)$ if $|r_1 - r_2| = |c_1 - c_2|$ (i.e., pixels are on a diagonal).
*   $D_4(p, q) = D_8(p, q)$ if $|r_1 - r_2| = 0$ or $|c_1 - c_2| = 0$ (i.e., pixels are in the same row or column).

**[Refer to: Gonzalez & Woods, 4th Ed., Chapter 2, Section 2.2.2, "Distance Measures"]**
**[Refer to: Anil K Jain, 1988, Chapter 1, Section 1.2.1, "Distance Measures"]**

---

### **5. Other Spatial Relationships**

While the above cover the fundamental relationships, other concepts are derived from them:

*   **Lines:** A set of pixels whose coordinates satisfy a linear equation.
*   **Curves:** A set of pixels whose coordinates satisfy a non-linear equation.
*   **Boundaries/Edges:** The set of pixels where there is a significant change in intensity, typically indicating the transition between regions or objects. These are formed by pixels that are adjacent to pixels with significantly different values.
*   **Adjacency in Digital Geometry:** Adjacency can be generalized to higher dimensions. For example, in 3D imaging, pixels (voxels) can have 6-neighbors (face adjacency), 18-neighbors (edge adjacency), or 26-neighbors (corner adjacency).

---

### **6. Important Points to Remember**

*   **Pixel as the basic unit:** All image processing operations ultimately act on pixels.
*   **Coordinate system:** Be consistent with the origin (usually top-left) and axis directions.
*   **Neighborhood definitions:** Understand the difference between 4-neighbors and 8-neighbors.
*   **Connectivity:** Crucial for grouping pixels into meaningful regions. 4-connectivity and 8-connectivity are the most common.
*   **Distance Metrics:** Essential for measuring spatial relationships and for algorithms that rely on proximity. Euclidean, City-Block (D4), and Chessboard (D8) are the primary ones.
*   **Context:** The "property" in connectivity can be anything: same intensity, intensity within a range, belonging to a specific color channel, etc.

---

### **7. Practice Questions and Exercises**

**Question 1:**
Consider a pixel `p` at location (5, 7).
a) List the coordinates of its 4-neighbors.
b) List the coordinates of its 8-neighbors.
c) What is the Euclidean distance between `p` and the pixel `q` at (8, 11)?
d) What is the City-Block distance (D4) between `p` and `q`?
e) What is the Chessboard distance (D8) between `p` and `q`?

**Answer 1:**
a) 4-neighbors: (4, 7), (6, 7), (5, 6), (5, 8)
b) 8-neighbors: (4, 6), (4, 7), (4, 8), (5, 6), (5, 8), (6, 6), (6, 7), (6, 8)
c) $D_e((5, 7), (8, 11)) = \sqrt{(5-8)^2 + (7-11)^2} = \sqrt{(-3)^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$
d) $D_4((5, 7), (8, 11)) = |5-8| + |7-11| = |-3| + |-4| = 3 + 4 = 7$
e) $D_8((5, 7), (8, 11)) = \max(|5-8|, |7-11|) = \max(|-3|, |-4|) = \max(3, 4) = 4$

**Question 2:**
Consider the following binary image (1s are foreground, 0s are background):

```
0 1 0 1
1 1 0 0
0 0 1 1
1 0 1 0
```

Let's focus on the foreground pixel at (1,1) (row 1, col 1, assuming 0-indexed).
a) Which foreground pixels are 4-connected to the pixel at (1,1)?
b) Which foreground pixels are 8-connected to the pixel at (1,1)?
c) Identify the connected components of foreground pixels using 4-connectivity.

**Answer 2:**
Image (with coordinates):
```
(0,0)0 (0,1)1 (0,2)0 (0,3)1
(1,0)1 (1,1)1 (1,2)0 (1,3)0
(2,0)0 (2,1)0 (2,2)1 (2,3)1
(3,0)1 (3,1)0 (3,2)1 (3,3)0
```
We are looking at pixel (1,1) with value 1.

a) **4-connected foreground pixels to (1,1):**
   - (0,1): Yes, it's a 4-neighbor and has value 1.
   - (2,1): No, it's a 4-neighbor but has value 0.
   - (1,0): Yes, it's a 4-neighbor and has value 1.
   - (1,2): No, it's a 4-neighbor but has value 0.
   So, (0,1) and (1,0) are 4-connected to (1,1).

b) **8-connected foreground pixels to (1,1):**
   - Includes all 4-neighbors that are foreground (0,1) and (1,0).
   - Diagonal neighbors:
     - (0,0): No, value 0.
     - (0,2): No, value 0.
     - (2,0): No, value 0.
     - (2,2): Yes, it's a diagonal neighbor and has value 1.
   So, (0,1), (1,0), and (2,2) are 8-connected to (1,1).

c) **Connected Components using 4-connectivity:**

Let's trace the components:

*   **Component 1:**
    *   Start with (0,1). Its 4-connected foreground neighbors are (1,1).
    *   From (1,1), its 4-connected foreground neighbors are (0,1) (already visited) and (1,0).
    *   From (1,0), its 4-connected foreground neighbors are (1,1) (already visited).
    *   So, Component 1 = {(0,1), (1,1), (1,0)}.

*   **Component 2:**
    *   The next unvisited foreground pixel is (0,3). It has no 4-connected foreground neighbors.
    *   So, Component 2 = {(0,3)}.

*   **Component 3:**
    *   The next unvisited foreground pixel is (2,2). Its 4-connected foreground neighbors are (2,3) and (3,2).
    *   From (2,3), its 4-connected foreground neighbors are (2,2) (already visited).
    *   From (3,2), its 4-connected foreground neighbors are (2,2) (already visited).
    *   So, Component 3 = {(2,2), (2,3), (3,2)}.

*   **Component 4:**
    *   The next unvisited foreground pixel is (3,0). It has no 4-connected foreground neighbors.
    *   So, Component 4 = {(3,0)}.

*   The pixel at (3,3) is 0, so it's background.

Therefore, the connected components using 4-connectivity are:
Component 1: {(0,1), (1,1), (1,0)}
Component 2: {(0,3)}
Component 3: {(2,2), (2,3), (3,2)}
Component 4: {(3,0)}

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **8. References**

*   **Gonzalez Rafel C, Woods Richard E. Digital Image Processing. 4th ed. Pearson; 2017.** (Primary Textbook)
*   **Jayaraman S, Esakkirajan S, Veerakumar T. Digital Image Processing. 1st ed. McGraw Hill; 2011.** (Primary Textbook)
*   **Castleman Kenneth R. Digital Image Processing. 2nd ed. Pearson Education; 2003.** (Reference Book)
*   **Jain Anil K. Fundamentals of Digital Image Processing. Prentice Hall India; 1988.** (Reference Book)
*   **Pratt William K. Digital Image Processing. 4th ed. John Wiley; 2007.** (Reference Book)

---
This concludes Module 1, Topic: Basic relationship between pixels. Understanding these fundamental concepts is essential for all subsequent topics in Digital Image Processing.