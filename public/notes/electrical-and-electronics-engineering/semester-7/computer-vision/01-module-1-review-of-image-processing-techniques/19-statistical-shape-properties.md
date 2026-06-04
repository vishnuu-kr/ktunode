---
title: "Statistical Shape Properties"
subject: "COMPUTER VISION"
module: "Module 1: Review of image processing techniques"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a30"
status: "completed"
scrapedAt: "2026-05-23T16:32:36.091Z"
---
# Computer Vision: Module 1 - Review of Image Processing Techniques

## Topic: Statistical Shape Properties

### Learning Outcomes:
Upon successful completion of this topic, you will be able to:
* Understand the fundamental concepts of representing shapes mathematically.
* Calculate and interpret various statistical measures that describe shape characteristics.
* Apply these statistical properties for shape analysis and recognition tasks.
* Relate statistical shape properties to basic image processing techniques covered in this module.

---

### Introduction to Shape Representation

Before we delve into statistical properties, it's crucial to understand how shapes are represented in computer vision. Shapes can be represented in various ways, and the choice of representation often dictates the types of statistical properties we can compute.

**Key Concepts:**

*   **Boundary Representation:** Describing a shape by its contour or boundary. This is often achieved through edge detection or contour following algorithms. (Relates to **CO2**, **CO3**)
*   **Region Representation:** Describing a shape by the set of pixels that belong to it. This can be done using segmentation or thresholding. (Relates to **CO1**)
*   **Skeleton/Medial Axis Representation:** A simplified representation of a shape by its "bones" or central lines.

---

### Statistical Shape Properties

Statistical shape properties quantify geometric characteristics of shapes using statistical measures. These properties are often invariant to transformations like translation, rotation, and scaling, making them robust for shape matching and recognition.

**Key Concepts and Definitions:**

1.  **Area:**
    *   **Definition:** The number of pixels within the boundary of a shape or the size of the region.
    *   **Calculation:** For a binary image, simply sum all the pixels with a value of 1 (foreground).
    *   **Importance:** A basic measure of shape size.
    *   **Example:** A large blob of pixels has a larger area than a small dot.
    *   **Textbook Reference:** Davies (2012) discusses pixel-based measures in Chapter 5.

2.  **Perimeter:**
    *   **Definition:** The length of the boundary of a shape.
    *   **Calculation:** Can be approximated by counting the number of boundary pixels or using more sophisticated boundary tracing algorithms and calculating the Euclidean distance between consecutive pixels. (Relates to **CO2**)
    *   **Importance:** Another measure of shape size, but sensitive to boundary complexity.
    *   **Example:** A circle and a square of the same area can have very different perimeters. A more jagged boundary will have a longer perimeter than a smooth one.
    *   **Textbook Reference:** Szeliski (2011) touches upon contour properties in Chapter 4.

3.  **Centroid (Center of Mass):**
    *   **Definition:** The average position of all the points in a shape. It's the geometric center.
    *   **Calculation:**
        *   $C_x = \frac{\sum_{i=1}^{N} x_i}{N}$
        *   $C_y = \frac{\sum_{i=1}^{N} y_i}{N}$
        where $(x_i, y_i)$ are the coordinates of the $i$-th pixel in the shape and $N$ is the total number of pixels in the shape. (Relates to **CO1**)
    *   **Importance:** Provides a reference point for the shape. Useful for alignment and feature extraction.
    *   **Example:** The centroid of a perfect circle is at its geometric center.
    *   **Textbook Reference:** Davies (2012) covers moments and centroids in Chapter 5.

4.  **Moments:**
    *   **Definition:** A set of scalar quantities that can be computed from a set of points or a probability distribution. In shape analysis, they are computed from the pixel values of a shape.
    *   **Types of Moments:**
        *   **Image Moments (Spatial Moments):**
            *   $m_{pq} = \sum_{x}\sum_{y} x^p y^q I(x, y)$, where $I(x, y)$ is the intensity of the pixel at $(x, y)$.
            *   **Central Moments:**
                *   $\mu_{pq} = \sum_{x}\sum_{y} (x - C_x)^p (y - C_y)^q I(x, y)$
                *   These are invariant to translation.
            *   **Normalized Central Moments:**
                *   $\eta_{pq} = \frac{\mu_{pq}}{\mu_{00}^{(p+q)/2 + 1}}$
                *   These are invariant to translation and scale.
        *   **Hu Moments:** A set of seven scale, translation, and rotation invariant moments. They are derived from the normalized central moments and are widely used for shape matching.
    *   **Importance:** Moments capture information about the distribution of pixels within a shape. Hu moments are particularly powerful for shape recognition as they are invariant to geometric transformations.
    *   **Example:** The second-order moments can describe the "spread" of the shape along different axes, indicating elongation or compactness.
    *   **Textbook Reference:** Forsyth & Ponce (2002) provide a good explanation of moments for shape description in Chapter 11. Davies (2012) dedicates a significant portion to moments and invariant features in Chapter 5.

5.  **Eccentricity:**
    *   **Definition:** A measure of how elongated a shape is. It's the ratio of the distance between the foci of the ellipse to its major axis length.
    *   **Calculation:** Can be derived from the eigenvalues of the covariance matrix of the shape's pixels. A more common calculation for elongation relates to the ratio of the major axis to the minor axis of an equivalent bounding ellipse.
    *   **Importance:** Quantifies the "flatness" or "elongation" of a shape.
    *   **Example:** A thin, long rectangle has high eccentricity, while a circle has eccentricity close to 0.
    *   **Textbook Reference:** Davies (2012) discusses ellipse fitting and related properties.

6.  **Solidity:**
    *   **Definition:** The ratio of the shape's area to the area of its convex hull.
    *   **Calculation:** $Solidity = \frac{\text{Area of Shape}}{\text{Area of Convex Hull}}$ (Relates to **CO2**)
    *   **Importance:** Measures how convex a shape is. A perfectly convex shape has a solidity of 1.
    *   **Example:** A star shape will have a lower solidity than a simple circle or square.
    *   **Textbook Reference:** Prince (2012) might discuss such properties in the context of shape modeling.

7.  **Extent:**
    *   **Definition:** The ratio of the shape's area to the area of its bounding box.
    *   **Calculation:** $Extent = \frac{\text{Area of Shape}}{\text{Area of Bounding Box}}$ (Relates to **CO1**, **CO2**)
    *   **Importance:** Measures how much of the bounding box is filled by the shape.
    *   **Example:** A square tightly fitted in its bounding box has an extent of 1. A shape with many holes or thin extensions will have a lower extent.
    *   **Textbook Reference:** Schalkoff (2004) often covers basic shape descriptors like extent.

---

### Relating Statistical Shape Properties to Image Processing Techniques

The statistical shape properties discussed are often computed *after* initial image processing steps.

*   **Image Filtering (CO1):** Noise reduction filters (e.g., Gaussian blur, median filter) can smooth the image, which can affect the computed area and perimeter. Careful selection of filters is important to preserve shape details.
*   **Morphological Operations (CO2):**
    *   **Dilation:** Increases the size of the shape, thus increasing its area and perimeter.
    *   **Erosion:** Decreases the size of the shape, potentially removing small features or holes, thus decreasing area and perimeter.
    *   **Opening (Erosion followed by Dilation):** Removes small noise elements and smooths contours. Can affect area and perimeter.
    *   **Closing (Dilation followed by Erosion):** Fills small holes and gaps, smoothing contours. Can affect area and perimeter.
    *   **Convex Hull:** A direct application for calculating solidity.
*   **Boundary Operators (CO2):** Edge detection (e.g., Sobel, Canny) followed by contour tracing is essential for obtaining the boundary representation needed to calculate perimeter and for some moment calculations.
*   **Edge and Corner Detection (CO3):** While not directly computing statistical properties, these techniques identify key features that define the shape's boundary and structure, which then inform the calculation of these properties.

---

### Applications of Statistical Shape Properties

*   **Object Recognition and Classification:** Using invariant moments (Hu moments) or combinations of statistical properties to match shapes to a database. (Relates to **CO5**)
*   **Shape Matching:** Finding similar shapes in images.
*   **Image Segmentation Refinement:** Using shape properties to filter or validate segmented regions.
*   **Medical Imaging:** Analyzing the shape of organs or tumors.

---

### Important Points to Remember:

*   **Representation Matters:** The method of shape representation (boundary vs. region) impacts which properties can be easily computed.
*   **Invariants are Key:** For robust shape analysis, especially under varying conditions (rotation, scale), invariant properties like Hu moments are invaluable.
*   **Trade-offs:** Different statistical properties capture different aspects of shape. A combination of properties often provides a more complete description.
*   **Preprocessing:** Initial image processing steps significantly influence the calculated shape properties.

---

### Practice Questions & Exercises

**Question 1:**
What is the primary advantage of using normalized central moments over raw central moments for shape analysis?
*   (a) They are invariant to rotation.
*   (b) They are invariant to scale.
*   (c) They are invariant to translation.
*   (d) They are invariant to both scale and translation.

**Answer:** (d) They are invariant to both scale and translation.

---

**Question 2:**
If you are analyzing the shape of a handwritten digit, which statistical property would be most useful to distinguish between a '6' and a '9' (assuming they are the same size and orientation)?
*   (a) Area
*   (b) Perimeter
*   (c) Solidity
*   (d) Centroid

**Answer:** (c) Solidity. A '6' might have a more convex shape overall or a different distribution of mass that affects its solidity compared to an upside-down '9'. While other properties can contribute, solidity is particularly good at capturing "concavity".

---

**Question 3:**
Consider a simple square object in a binary image.
*   Calculate its Area.
*   Calculate its Perimeter (assuming 4-connectivity for the boundary).
*   Calculate its Centroid.
*   Calculate its Extent.

**Image Representation:**
A 3x3 square centered in a larger image:

```
0 0 0 0 0
0 1 1 1 0
0 1 1 1 0
0 1 1 1 0
0 0 0 0 0
```

**Solution:**
*   **Area:** There are 9 pixels with value '1'. So, Area = 9.
*   **Perimeter:** The boundary pixels are:
    (1,1), (1,2), (1,3)
    (2,1),         (2,3)
    (3,1), (3,2), (3,3)
    Counting these boundary pixels (using 4-connectivity):
    (1,1) -> (1,2) -> (1,3) -> (2,3) -> (3,3) -> (3,2) -> (3,1) -> (2,1) -> (1,1)
    The number of boundary pixels is 8. So, Perimeter = 8.
*   **Centroid:**
    Sum of x-coordinates: 3 * (1+2+3) = 18
    Sum of y-coordinates: 3 * (1+2+3) = 18
    Total pixels (N) = 9
    $C_x = 18 / 9 = 2$
    $C_y = 18 / 9 = 2$
    Centroid = (2, 2)
*   **Extent:**
    The bounding box for the shape spans from x=1 to x=3 and y=1 to y=3.
    Bounding Box Width = 3 - 1 + 1 = 3
    Bounding Box Height = 3 - 1 + 1 = 3
    Area of Bounding Box = 3 * 3 = 9
    Extent = Area of Shape / Area of Bounding Box = 9 / 9 = 1.

---

**Question 4:**
Explain how the `opening` morphological operation might affect the calculated solidity of an irregularly shaped object with small indentations.
*   (a) It would likely increase solidity by smoothing the indentations.
*   (b) It would likely decrease solidity by further eroding the object.
*   (c) It would have no significant effect on solidity.
*   (d) It might increase or decrease solidity depending on the shape of the structuring element.

**Answer:** (a) Opening involves erosion followed by dilation. The erosion step will remove small protrusions and smooth indentations. The subsequent dilation will expand the shape back, but it will not fully recover the volume lost from the indentations if they were smaller than the structuring element. This effectively "fills in" shallow indentations, making the shape more convex and thus increasing its solidity relative to its convex hull.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### References for Further Study:

*   **Computer and Machine Vision: Theory, Algorithm and Practicalities** by E. R. Davies (Academic Press, 2012.) - Chapter 5 covers image feature detection and shape analysis, including moments.
*   **Computer Vision: Algorithms and Applications** by Richard Szeliski (Springer, 2011) - Chapter 4 discusses image segmentation and might touch upon region properties.
*   **Computer Vision: A Modern Approach** by David Forsyth and Jean Ponce (Pearson India, 2002) - Chapter 11 on Shape and Appearance features discusses geometric properties and descriptors.

---