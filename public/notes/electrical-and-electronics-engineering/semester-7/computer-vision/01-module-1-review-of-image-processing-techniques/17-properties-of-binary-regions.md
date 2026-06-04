---
title: "Properties of Binary Regions"
subject: "COMPUTER VISION"
module: "Module 1: Review of image processing techniques"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a2e"
status: "completed"
scrapedAt: "2026-05-23T16:32:33.581Z"
---
# Computer Vision: Module 1 - Review of Image Processing Techniques

## Topic: Properties of Binary Regions

**Knowledge Level (K2, K3, K4)**

**Learning Outcomes:** This topic aims to equip students with the understanding of fundamental properties of binary regions, which are crucial for analyzing and manipulating segmented objects in computer vision applications. This directly supports:
*   **CO1:** Understanding digital filtering operations (as binary regions are often the output of filtering).
*   **CO2:** Applying basic morphological and boundary operators (these operators work on binary regions and their properties).
*   **CO5:** Analyzing scenes by identifying and characterizing objects (binary regions represent detected objects).

---

### 1. Introduction to Binary Images and Regions

**Definition:** A binary image is an image where each pixel has only two possible values, typically representing foreground (e.g., white, 1) and background (e.g., black, 0). This type of image is often the result of a segmentation process, where an object of interest is separated from the background.

**Key Concept:** Binary regions are contiguous groups of foreground pixels within a binary image. Analyzing their properties allows us to describe and differentiate objects.

**Textbook Reference:**
*   **Szeliski, 2011, Chapter 3 (Image Formation and Sensing):** Briefly touches upon pixel values and image representation, including binary images as a simple form.
*   **Davies, 2012, Chapter 2 (Fundamentals of Digital Imaging):** Provides a foundational understanding of image representation, including binary images and their pixel values.

**Example:** After applying a thresholding operation to a grayscale image, we obtain a binary image where pixels above the threshold are set to 1 (foreground) and those below are set to 0 (background).

---

### 2. Connectivity and Adjacency

**Definition:** Connectivity refers to how pixels are considered "connected" to their neighbors. This is fundamental for defining regions.

**Types of Connectivity:**

*   **4-Connectivity (Von Neumann Neighborhood):** A pixel is connected to its horizontal and vertical neighbors.
    *   **Neighborhood:** Top, Bottom, Left, Right.
    *   **Illustration:**
        ```
        . 1 .
        1 0 1
        . 1 .
        ```
        (Where '0' is the central pixel and '1' are its 4-connected neighbors)

*   **8-Connectivity (Moore Neighborhood):** A pixel is connected to its horizontal, vertical, and diagonal neighbors.
    *   **Neighborhood:** Top, Bottom, Left, Right, Top-Left, Top-Right, Bottom-Left, Bottom-Right.
    *   **Illustration:**
        ```
        1 1 1
        1 0 1
        1 1 1
        ```
        (Where '0' is the central pixel and '1's are its 8-connected neighbors)

**Key Concept:** The choice of connectivity affects how regions are formed and the properties calculated. For example, a diagonal line might be perceived as a single connected region with 8-connectivity but as two separate segments with 4-connectivity.

**Textbook Reference:**
*   **Davies, 2012, Chapter 3 (Image Segmentation):** Discusses connectivity in the context of region growing and its impact on segmentation.
*   **Szeliski, 2011, Chapter 4 (Image Filtering):** While focusing on filtering, the concepts of neighborhoods are implicitly linked to connectivity.

**Important Point to Remember:** The choice of connectivity can significantly influence the perceived shape and size of binary regions.

---

### 3. Basic Properties of Binary Regions

These properties are quantitative measures that describe the characteristics of a connected component (region) in a binary image.

#### 3.1. Area

**Definition:** The number of pixels belonging to the region.

**Calculation:** Sum of all foreground pixels within the region.

**Formula:**
Area $(R) = \sum_{(x,y) \in R} 1$

**Relevance:** Useful for distinguishing between objects based on their size.

**Example:** A small circular region of 50 pixels has a smaller area than a large rectangular region of 500 pixels.

**Textbook Reference:**
*   **Davies, 2012, Chapter 5 (Feature Extraction):** Details various region properties, including area, as features for object recognition.
*   **Szeliski, 2011, Chapter 4 (Image Filtering):** While not directly calculating area, the concept of summing pixel values is fundamental to many image operations.

#### 3.2. Perimeter (Boundary Length)

**Definition:** The number of pixels on the boundary of the region. Defining the boundary precisely is crucial.

**Calculation:** Typically, it's the count of foreground pixels that have at least one background neighbor (using a specific connectivity).

**Example:** A square region of 2x2 pixels has a perimeter of 8 pixels (using 4-connectivity for boundary definition).

**Relevance:** Helps in distinguishing between shapes that might have similar areas but different boundary complexities.

**Textbook Reference:**
*   **Davies, 2012, Chapter 5 (Feature Extraction):** Discusses perimeter calculation and its use in shape analysis.
*   **Schalkoff, 2004, Chapter 6 (Segmentation and Feature Extraction):** Provides details on boundary tracing and perimeter computation.

#### 3.3. Centroid (Center of Mass)

**Definition:** The geometric center of the region, calculated as the average of the coordinates of all pixels in the region.

**Calculation:**
Centroid $(c_x, c_y) = \left( \frac{\sum_{(x,y) \in R} x}{\text{Area}(R)}, \frac{\sum_{(x,y) \in R} y}{\text{Area}(R)} \right)$

**Relevance:** Provides a single point representing the location of the object. Useful for tracking and alignment.

**Example:** For a 3x3 square of foreground pixels, the centroid would be at the center pixel.

**Textbook Reference:**
*   **Davies, 2012, Chapter 5 (Feature Extraction):** Explains the computation and application of centroids.
*   **Szeliski, 2011, Chapter 4 (Image Filtering):** Related to the concept of moments, which are used to calculate centroids.

#### 3.4. Bounding Box

**Definition:** The smallest rectangular box that completely encloses the region.

**Calculation:** Determined by the minimum and maximum x and y coordinates of the pixels in the region.
*   $x_{min} = \min_{(x,y) \in R} x$
*   $x_{max} = \max_{(x,y) \in R} x$
*   $y_{min} = \min_{(x,y) \in R} y$
*   $y_{max} = \max_{(x,y) \in R} y$

The bounding box is defined by $(x_{min}, y_{min})$ and $(x_{max}, y_{max})$.

**Relevance:** Gives a simple rectangular representation of the object's extent and position.

**Example:** If a region has pixels with x-coordinates ranging from 10 to 25 and y-coordinates from 30 to 45, the bounding box is defined by (10, 30) and (25, 45).

**Textbook Reference:**
*   **Szeliski, 2011, Chapter 3 (Image Formation and Sensing):** Basic image data structures and bounding box concepts.
*   **Forsyth & Ponce, 2002, Chapter 2 (Image Representation):** Discusses image data structures and how bounding boxes are used to define object extents.

#### 3.5. Extent

**Definition:** The ratio of the region's area to the area of its bounding box.

**Formula:**
Extent $= \frac{\text{Area}(R)}{\text{Area}(\text{Bounding Box})} = \frac{\text{Area}(R)}{(x_{max} - x_{min} + 1) \times (y_{max} - y_{min} + 1)}$

**Relevance:** Measures how "filled" the bounding box is by the region. A perfectly rectangular region would have an extent of 1.

**Example:** A long, thin line segment would have a very low extent, while a solid square would have an extent of 1.

**Textbook Reference:**
*   **Davies, 2012, Chapter 5 (Feature Extraction):** Discusses extent as a shape descriptor.

#### 3.6. Solidity

**Definition:** The ratio of the region's area to the area of its convex hull.

**Definition of Convex Hull:** The smallest convex polygon that encloses the region.

**Formula:**
Solidity $= \frac{\text{Area}(R)}{\text{Area}(\text{Convex Hull of R})}$

**Relevance:** Measures the concavity of a region. A perfectly convex region has a solidity of 1.

**Example:** A star shape would have a lower solidity than a filled circle because its convex hull would be a larger polygon.

**Textbook Reference:**
*   **Davies, 2012, Chapter 5 (Feature Extraction):** Explains solidity as a descriptor of shape concavity.
*   **Szeliski, 2011, Chapter 4 (Image Filtering):** Convexity is a concept related to shape properties, often discussed in image analysis.

---

### 4. Moments

**Definition:** Moments are quantitative measures derived from pixel intensities and positions. They are fundamental in characterizing the shape and distribution of a region.

**Types of Moments:**

*   **Image Moments (Raw Moments):**
    *   $m_{pq} = \sum_{x} \sum_{y} x^p y^q I(x,y)$
    *   Where $I(x,y)$ is the pixel value (1 for foreground, 0 for background) at location $(x,y)$.

*   **Central Moments:** These moments are invariant to translation.
    *   $\mu_{pq} = \sum_{x} \sum_{y} (x - \bar{x})^p (y - \bar{y})^q I(x,y)$
    *   Where $(\bar{x}, \bar{y})$ is the centroid of the region.

*   **Normalized Central Moments (Hu Moments):** These moments are invariant to translation, rotation, and scaling. They are widely used for shape recognition. There are seven invariant moments.

**Key Concept:** Moments provide a compact way to represent the shape of a region. Hu moments are particularly useful because they are invariant to geometric transformations.

**Textbook Reference:**
*   **Davies, 2012, Chapter 5 (Feature Extraction):** Provides a comprehensive treatment of image moments, including raw, central, and invariant moments.
*   **Szeliski, 2011, Chapter 4 (Image Filtering):** Discusses moments in the context of image statistics and shape description.
*   **Schalkoff, 2004, Chapter 6 (Segmentation and Feature Extraction):** Explains the derivation and application of image moments for feature extraction.

**Example:**
*   $m_{00}$ is the area of the region.
*   $m_{10}$ and $m_{01}$ are related to the x and y sums, which are used to calculate the centroid.

---

### 5. Boundary Descriptors

**Definition:** Properties that specifically describe the shape and characteristics of the boundary of a binary region.

#### 5.1. Fourier Descriptors

**Definition:** Represent the boundary as a sequence of points and then compute the Discrete Fourier Transform (DFT) of these points. The resulting coefficients capture the shape of the boundary and are invariant to translation and rotation.

**Key Concept:** Provides a rich set of features for shape matching.

**Textbook Reference:**
*   **Davies, 2012, Chapter 5 (Feature Extraction):** Details the computation and use of Fourier descriptors.
*   **Szeliski, 2011, Chapter 4 (Image Filtering):** While not directly on Fourier descriptors, the concepts of signal representation and frequency domain analysis are related.

#### 5.2. Chain Codes

**Definition:** A method to describe the boundary of a region by encoding the direction of traversal between consecutive pixels on the boundary.

**Key Concept:** Compact representation of boundary shape, useful for storage and comparison.

**Example:** A boundary might be described by a sequence of numbers representing movements like "move right," "move up-right," etc.

**Textbook Reference:**
*   **Davies, 2012, Chapter 5 (Feature Extraction):** Explains chain code generation and its applications.
*   **Schalkoff, 2004, Chapter 6 (Segmentation and Feature Extraction):** Covers boundary tracing techniques like chain codes.

---

### 6. Morphological Operations and Their Impact on Region Properties

**Definition:** Morphological operations are a set of non-linear operations related to the shape or morphology of features in an image. They are widely used for noise removal, shape enhancement, and segmentation. They directly operate on binary regions.

**Key Operations:**

*   **Dilation:** Expands the foreground regions.
    *   **Impact:** Increases area, perimeter, and bounding box size. Can fill small holes.
*   **Erosion:** Shrinks the foreground regions.
    *   **Impact:** Decreases area, perimeter, and bounding box size. Can remove small objects and noise.
*   **Opening:** Erosion followed by dilation.
    *   **Impact:** Removes small objects and smooths the outer boundary. Reduces area and perimeter.
*   **Closing:** Dilation followed by erosion.
    *   **Impact:** Fills small holes and gaps within foreground regions, smoothing the boundary. Can increase area and perimeter slightly.

**Key Concept:** Morphological operations can systematically alter the properties of binary regions, which can be leveraged for image analysis and feature extraction.

**Textbook Reference:**
*   **Davies, 2012, Chapter 4 (Morphological Image Processing):** Provides a comprehensive overview of morphological operations and their effects.
*   **Szeliski, 2011, Chapter 4 (Image Filtering):** Discusses morphological operations as a form of filtering.
*   **Forsyth & Ponce, 2002, Chapter 6 (Morphological Operations):** Details the mathematical basis and applications of morphological operations.
*   **Goodfellow et al., 2016, Chapter 12 (Deep Generative Models):** While focused on deep learning, it may touch upon morphological concepts in image processing as a precursor.

---

### 7. Practice Questions and Exercises

**Question 1:**
Consider a 5x5 binary image with the following foreground pixels (marked with '1'):

```
0 0 0 0 0
0 1 1 1 0
0 1 0 1 0
0 1 1 1 0
0 0 0 0 0
```

Assuming 4-connectivity, calculate the following properties for the foreground region:
a) Area
b) Perimeter
c) Centroid
d) Bounding Box

**Answer 1:**
a) **Area:** Count the '1's. There are 8 foreground pixels. Area = 8.

b) **Perimeter:** Count the boundary pixels that have at least one '0' neighbor (using 4-connectivity):
The outer '1's have '0' neighbors. The inner '0' pixel surrounded by '1's is not part of the region.
Pixels with coordinates (row, col) starting from top-left as (0,0):
(1,1), (1,2), (1,3)
(2,1), (2,3)
(3,1), (3,2), (3,3)

Boundary pixels (using 4-connectivity for boundary definition):
(1,1) - 3 boundary sides (top, left, bottom to '0's)
(1,2) - 2 boundary sides (top, top-right diagonal to '0's)
(1,3) - 3 boundary sides (top, right, bottom to '0's)
(2,1) - 2 boundary sides (left, bottom to '0's)
(2,3) - 2 boundary sides (right, bottom to '0's)
(3,1) - 3 boundary sides (top, left, bottom to '0's)
(3,2) - 2 boundary sides (bottom, bottom-left diagonal to '0's)
(3,3) - 3 boundary sides (top, right, bottom to '0's)

This method of counting sides is complex. A simpler approach: count the number of pairs of adjacent pixels where one is foreground and the other is background.

Let's list foreground pixels with their coordinates (row, col):
(1,1), (1,2), (1,3)
(2,1), (2,3)
(3,1), (3,2), (3,3)

For (1,1): neighbors are (0,1), (1,0), (1,2), (2,1). (0,1) and (1,0) are background. So, 2 boundary edges.
For (1,2): neighbors are (0,2), (1,1), (1,3), (2,2). (0,2) is background. 1 boundary edge.
For (1,3): neighbors are (0,3), (1,2), (1,4), (2,3). (0,3) and (1,4) are background. 2 boundary edges.
For (2,1): neighbors are (1,1), (2,0), (2,2), (3,1). (2,0) is background. 1 boundary edge.
For (2,3): neighbors are (1,3), (2,2), (2,4), (3,3). (2,4) is background. 1 boundary edge.
For (3,1): neighbors are (2,1), (3,0), (3,2), (4,1). (3,0) and (4,1) are background. 2 boundary edges.
For (3,2): neighbors are (2,2), (3,1), (3,3), (4,2). (2,2) is background. 1 boundary edge.
For (3,3): neighbors are (2,3), (3,2), (3,4), (4,3). (3,4) and (4,3) are background. 2 boundary edges.

Total boundary edges = 2 + 1 + 2 + 1 + 1 + 2 + 1 + 2 = 12.
Perimeter = 12.

c) **Centroid:**
Sum of x-coordinates (columns): 1+2+3 + 1+3 + 1+2+3 = 16
Sum of y-coordinates (rows): 1+1+1 + 2+2 + 3+3+3 = 16
Area = 8

Centroid $(c_x, c_y) = (16/8, 16/8) = (2, 2)$. (Assuming (1,1) is the top-left pixel).

d) **Bounding Box:**
Min x = 1, Max x = 3
Min y = 1, Max y = 3
Bounding Box: Top-left (1,1), Bottom-right (3,3).

---

**Question 2:**
Explain the difference between 4-connectivity and 8-connectivity. Provide an example of a situation where the choice of connectivity would significantly impact the perceived shape of a binary region.

**Answer 2:**
**Difference:**
*   **4-connectivity:** Considers a pixel connected only to its immediate horizontal and vertical neighbors.
*   **8-connectivity:** Considers a pixel connected to its horizontal, vertical, and diagonal neighbors.

**Example:**
Consider a binary image with foreground pixels forming a thin diagonal line.

```
1 0 0 0
0 1 0 0
0 0 1 0
0 0 0 1
```

*   With **4-connectivity**, this diagonal line would be perceived as four separate, disconnected pixels, as no pixel has a horizontal or vertical neighbor that is also foreground.
*   With **8-connectivity**, all four pixels would be considered part of a single, connected region because each pixel has a diagonal neighbor that is foreground.

This difference is crucial in algorithms like region growing, where connectivity determines how a region expands.

---

**Question 3:**
If a binary region has an area of 100 pixels and its bounding box has dimensions 10x15 pixels, what is its Extent? What does this value tell you about the shape of the region?

**Answer 3:**
*   **Area of the region:** 100 pixels
*   **Area of the bounding box:** 10 pixels (width) * 15 pixels (height) = 150 pixels

*   **Extent = Area(Region) / Area(Bounding Box)**
    Extent = 100 / 150 = 2/3 ≈ 0.67

*   **Interpretation:** An extent of 0.67 indicates that the region occupies about 67% of its bounding box. This suggests that the region is not a perfect rectangle and has some "empty" space within its bounding box. For example, it could be a somewhat irregular shape or a shape with cutouts, but it's not extremely thin or sparse within its bounding rectangle. A perfect rectangle would have an extent of 1.

---

### 8. Important Points to Remember

*   **Binary regions** are fundamental building blocks for object analysis in computer vision.
*   **Connectivity (4- vs. 8-)** significantly impacts how regions are defined and processed.
*   **Region properties** (area, perimeter, centroid, bounding box, extent, solidity) provide quantitative descriptors for shape and location.
*   **Moments**, especially Hu moments, are powerful for robust shape recognition.
*   **Morphological operations** systematically alter region properties and are essential for preprocessing and analysis.
*   Understanding these properties is crucial for tasks like object detection, recognition, and tracking.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 9. Further Reading and References

*   **Computer and Machine Vision - Theory Algorithm and Practicalities by E. R .Davies (Academic Press, 2012.)** - Chapters on segmentation, feature extraction, and morphological operations.
*   **Computer Vision: Algorithms and Applications by Richard Szeliski (Springer, 2011)** - Chapters related to image filtering, segmentation, and shape analysis.
*   **Computer Vision: A Modern Approach by David Forsyth and Jean Ponce (Pearson India, 2002)** - Sections on image representation, segmentation, and shape.
*   **Digital Image Processing and Computer Vision by R. J. Schalkoff (John Wiley, 2004)** - Chapters on image segmentation and feature extraction.

This detailed note provides a strong foundation in the properties of binary regions, essential for further computer vision studies and practical applications.