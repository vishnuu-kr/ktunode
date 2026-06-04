---
title: "Geometric Image Features - Curves"
subject: "COMPUTER VISION"
module: "Module 1: Fundamentals in Computer Vision :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c397"
status: "completed"
scrapedAt: "2026-05-20T17:03:00.254Z"
---
# Computer Vision: Module 1 - Fundamentals in Computer Vision

## Topic: Geometric Image Features - Curves

---

### Learning Outcomes:

*   **LO1: Understand the concept of geometric features in images, specifically curves, and their significance.**
*   **LO2: Identify and describe different types of geometric curves used in computer vision.**
*   **LO3: Explain the mathematical representations of these curves.**
*   **LO4: Discuss the applications of curve detection and representation in computer vision tasks.**
*   **LO5: Understand the challenges and considerations when working with geometric curves in real-world images.**

---

### 1. Introduction to Geometric Image Features: Curves

**1.1 What are Geometric Features?**

*   Geometric features are intrinsic properties of an image that describe the shape, structure, and spatial relationships of objects within it.
*   They are independent of photometric variations (lighting, color, texture).
*   Key geometric features include:
    *   **Points:** Corners, interest points, salient points.
    *   **Lines:** Straight edges, lines.
    *   **Curves:** Edges, contours, boundaries of objects.
    *   **Surfaces:** 3D shape information.

**1.2 Significance of Curves in Computer Vision**

*   **Object Representation:** Curves are fundamental for describing the boundaries and shapes of objects, especially in 2D and as projections in 3D.
*   **Shape Analysis:** They provide rich information for shape recognition, matching, and retrieval.
*   **Segmentation:** Curves are often the result of edge detection and segmentation algorithms, partitioning an image into meaningful regions.
*   **Tracking:** Following curves over time allows for object tracking in video sequences.
*   **Feature Description:** Curves can be used as features themselves or as a basis for describing more complex shapes.

---

### 2. Types of Geometric Curves and Their Representations

This section delves into various curve types commonly used in computer vision, along with their mathematical formulations.

#### 2.1 Parametric Curves

*   **Definition:** A curve defined by an equation where its coordinates $(x, y)$ are functions of a single parameter, often denoted as $t$.
    *   $x = x(t)$
    *   $y = y(t)$
    *   The parameter $t$ typically ranges over an interval, e.g., $[0, 1]$ or $[a, b]$.

*   **Advantages:**
    *   Easy to generate points along the curve.
    *   Can represent curves with complex shapes, including self-intersections.
    *   Well-suited for defining trajectories.

*   **Examples:**

    *   **Straight Line Segment:**
        *   $P_0 = (x_0, y_0)$: Starting point
        *   $P_1 = (x_1, y_1)$: Ending point
        *   $x(t) = x_0 + t(x_1 - x_0)$
        *   $y(t) = y_0 + t(y_1 - y_0)$, for $t \in [0, 1]$

    *   **Circle:**
        *   Center $(c_x, c_y)$, Radius $r$
        *   $x(t) = c_x + r \cos(t)$
        *   $y(t) = c_y + r \sin(t)$, for $t \in [0, 2\pi]$

    *   **Bezier Curves:**
        *   Widely used in graphics and shape modeling.
        *   Defined by a set of control points.
        *   **Quadratic Bezier Curve (3 control points $P_0, P_1, P_2$):**
            *   $B(t) = (1-t)^2 P_0 + 2t(1-t) P_1 + t^2 P_2$, for $t \in [0, 1]$
        *   **Cubic Bezier Curve (4 control points $P_0, P_1, P_2, P_3$):**
            *   $B(t) = (1-t)^3 P_0 + 3t(1-t)^2 P_1 + 3t^2(1-t) P_2 + t^3 P_3$, for $t \in [0, 1]$
        *   **General Bezier Curve (n+1 control points $P_0, \dots, P_n$):**
            *   $B(t) = \sum_{i=0}^n \binom{n}{i} (1-t)^{n-i} t^i P_i$, for $t \in [0, 1]$
        *   *Key Property:* The curve is always contained within the convex hull of its control points.

#### 2.2 Implicit Curves

*   **Definition:** A curve defined by an equation of the form $f(x, y) = 0$.
    *   The curve consists of all points $(x, y)$ that satisfy the equation.

*   **Advantages:**
    *   Easy to test if a point lies on the curve ($f(x, y) = 0$).
    *   Can elegantly represent shapes like circles and ellipses.

*   **Disadvantages:**
    *   More difficult to generate points along the curve.
    *   May require numerical methods to trace.

*   **Examples:**

    *   **Straight Line:**
        *   $Ax + By + C = 0$
        *   Here, $f(x, y) = Ax + By + C$.

    *   **Circle:**
        *   $(x - c_x)^2 + (y - c_y)^2 - r^2 = 0$
        *   Here, $f(x, y) = (x - c_x)^2 + (y - c_y)^2 - r^2$.

    *   **Ellipse:**
        *   $\frac{(x - c_x)^2}{a^2} + \frac{(y - c_y)^2}{b^2} - 1 = 0$
        *   Here, $f(x, y) = \frac{(x - c_x)^2}{a^2} + \frac{(y - c_y)^2}{b^2} - 1$.

#### 2.3 Splines

*   **Definition:** Piecewise parametric curves that are joined together smoothly. They offer more flexibility than single parametric curves for representing complex shapes.
*   **Key Idea:** Each segment is defined by a polynomial, and continuity constraints are imposed at the join points (knots).

*   **Types of Splines:**

    *   **B-Splines (Basis Splines):**
        *   Defined by control points and a knot vector.
        *   Local control: Moving one control point only affects a small part of the curve.
        *   Continuity is controlled by the knot multiplicity.
        *   Mathematics involve recursive definitions (e.g., Cox-de Boor recursion).

    *   **NURBS (Non-Uniform Rational B-Splines):**
        *   An extension of B-splines that allows for rational polynomial representations.
        *   Can precisely represent conic sections (circles, ellipses, hyperbolas) and free-form curves.
        *   Introduces weights for control points.

*   **Applications:** CAD systems, animation, shape modeling.

#### 2.4 Edge Curves

*   **Definition:** Curves that represent significant changes in image intensity, often corresponding to the boundaries of objects.
*   **Detection:** Typically found using edge detection operators (e.g., Sobel, Prewitt, Canny) followed by edge linking.
*   **Representation:** Can be represented as a sequence of connected pixels, a parametric curve fitted to the edge points, or a set of boundary descriptors.

---

### 3. Curve Detection and Extraction

This section outlines common methods for finding curves in images.

#### 3.1 Edge Detection

*   **Purpose:** To find pixels where there is a rapid change in intensity.
*   **Process:**
    1.  **Gradient Calculation:** Compute the image gradient magnitude and direction.
        *   $G_x = \frac{\partial I}{\partial x}$, $G_y = \frac{\partial I}{\partial y}$
        *   Gradient Magnitude: $M(x, y) = \sqrt{G_x^2 + G_y^2}$
        *   Gradient Direction: $\theta(x, y) = \arctan\left(\frac{G_y}{G_x}\right)$
    2.  **Non-maximum Suppression:** Thin the edges by keeping only pixels that are local maxima in the gradient direction.
    3.  **Hysteresis Thresholding (Canny Edge Detector):**
        *   Uses two thresholds: a high threshold ($T_{high}$) and a low threshold ($T_{low}$).
        *   Pixels with gradient magnitude above $T_{high}$ are considered strong edges.
        *   Pixels with gradient magnitude between $T_{low}$ and $T_{high}$ are considered weak edges.
        *   Weak edges are kept only if they are connected to strong edges. This helps to close gaps in edges.

*   **Common Operators:** Sobel, Prewitt, Roberts, Laplacian of Gaussian (LoG), Canny.

#### 3.2 Edge Linking and Segmentation

*   **Purpose:** To group edge pixels into continuous curves and segments.
*   **Methods:**
    *   **Connectivity Analysis:** Identifying connected components of edge pixels.
    *   **Boundary Following:** Tracing the contour of an object by moving from one edge pixel to an adjacent one.
    *   **Hough Transform (for specific shapes):** A robust method for detecting parameterized shapes (lines, circles, etc.) in images, even in the presence of noise and occlusions.
        *   **How it works (for lines):** A line $y = mx + c$ can be represented in polar coordinates as $p = x \cos(\alpha) + y \sin(\alpha)$. The Hough transform maps each point $(x, y)$ to a curve in the parameter space $(\alpha, p)$. Intersections in the parameter space indicate the presence of a line with those parameters.
        *   **Challenges:** Higher-dimensional parameter spaces for more complex curves.

#### 3.3 Curve Fitting

*   **Purpose:** To approximate a detected curve (e.g., a set of edge pixels) with a specific mathematical model (e.g., Bezier curve, spline).
*   **Methods:**
    *   **Least Squares Fitting:** Minimizing the sum of squared distances between the curve points and the data points.
    *   **Perceptual Grouping:** Methods that try to group points that are likely to belong to the same curve.

---

### 4. Applications of Geometric Curves in Computer Vision

*   **Object Recognition and Matching:**
    *   Shape descriptors based on contours (e.g., Fourier Descriptors, moments).
    *   Matching curves from different views or instances.
*   **Image Segmentation:**
    *   Extracting object boundaries.
    *   Active contours (Snakes): Deformable curves that evolve to fit object boundaries.
*   **Motion Tracking:**
    *   Tracking the trajectory of an object's contour.
    *   Optical flow estimation along curves.
*   **Medical Imaging:**
    *   Segmenting organs and tumors.
    *   Analyzing blood vessels.
*   **Robotics and Navigation:**
    *   Lane detection for autonomous vehicles.
    *   Detecting road boundaries and obstacles.
*   **Document Analysis:**
    *   Recognizing characters and words based on their outlines.

---

### 5. Challenges and Considerations

*   **Noise:** Image noise can lead to fragmented or spurious edges.
*   **Occlusion:** Parts of an object's boundary might be hidden, making curve extraction difficult.
*   **Texture:** Textured regions can create false edges.
*   **Lighting Variations:** Changes in illumination can affect intensity gradients.
*   **Scale and Rotation:** Geometric features should ideally be invariant to changes in scale and rotation for robust recognition.
*   **Computational Cost:** Sophisticated curve detection and fitting algorithms can be computationally expensive.
*   **Parameter Selection:** Choosing appropriate parameters for edge detectors, Hough transforms, and curve fitting algorithms is crucial and often application-dependent.
*   **Ambiguity:** Multiple curve models might fit the same set of points.

---

### 6. Important Points to Remember

*   **Curves are fundamental geometric features** representing object boundaries and structures.
*   **Parametric and implicit representations** offer different ways to define and work with curves.
*   **Bezier curves and splines** are powerful tools for flexible and smooth curve modeling.
*   **Edge detection** (like Canny) is a prerequisite for many curve extraction tasks.
*   **Hough Transform** is robust for detecting parameterized shapes.
*   **Curve fitting** is essential for approximating detected curves with mathematical models.
*   **Applications are diverse**, spanning recognition, segmentation, tracking, and more.
*   **Challenges** like noise, occlusion, and lighting variations must be addressed.

---

### Practice Questions/Exercises

**Question 1 (LO1, LO2):**
What is the fundamental difference between parametric and implicit representations of curves? Provide an example of each for a circle.

**Question 2 (LO2, LO3):**
Describe the mathematical representation of a Bezier curve. What role do control points play in defining its shape?

**Question 3 (LO3, LO4):**
Explain how the Hough Transform can be used to detect straight lines in an image. What are its advantages and disadvantages?

**Question 4 (LO4):**
Give two examples of how geometric curves are used in computer vision applications beyond simple shape detection.

**Question 5 (LO5):**
Discuss at least two major challenges encountered when extracting curves from real-world images and suggest potential strategies to mitigate them.

---

### Answers to Practice Questions

**Answer 1:**
*   **Parametric Representation:** A curve is defined by coordinates $(x, y)$ that are functions of a single parameter $t$. For a circle with center $(c_x, c_y)$ and radius $r$, the parametric equations are $x(t) = c_x + r \cos(t)$ and $y(t) = c_y + r \sin(t)$ for $t \in [0, 2\pi]$.
*   **Implicit Representation:** A curve is defined by an equation $f(x, y) = 0$. For a circle with center $(c_x, c_y)$ and radius $r$, the implicit equation is $(x - c_x)^2 + (y - c_y)^2 - r^2 = 0$. The key difference is that parametric curves define points on the curve by varying a parameter, while implicit curves define the curve as the set of points satisfying a specific equation.

**Answer 2:**
A Bezier curve is a parametric curve defined by a set of control points $P_0, P_1, \dots, P_n$. The mathematical representation for a Bezier curve of degree $n$ is given by:
$B(t) = \sum_{i=0}^n \binom{n}{i} (1-t)^{n-i} t^i P_i$, for $t \in [0, 1]$
The control points shape the curve:
*   The curve starts at $P_0$ and ends at $P_n$.
*   The curve is always contained within the convex hull of its control points.
*   The control points act like "magnets" influencing the curve's direction and curvature. Moving a control point changes the shape of the curve.

**Answer 3:**
The Hough Transform detects straight lines by transforming points in the image space $(x, y)$ into a parameter space. For a line $p = x \cos(\alpha) + y \sin(\alpha)$ (polar form), each point $(x, y)$ in the image maps to a sinusoidal curve in the $(\alpha, p)$ parameter space. If multiple points lie on the same line in the image, their corresponding sinusoidal curves will intersect at a single point in the parameter space $(\alpha^*, p^*)$, indicating the parameters of that line.
*   **Advantages:** Robust to noise and gaps in lines; can detect multiple lines simultaneously.
*   **Disadvantages:** Computationally expensive for detecting complex shapes with many parameters; suffers from the "curse of dimensionality" as the number of parameters increases.

**Answer 4:**
Two examples of geometric curves in computer vision applications:
1.  **Lane Detection in Autonomous Driving:** Straight and curved lines representing road lanes are detected using edge detection and fitting techniques (like Hough Transform or spline fitting) to guide the vehicle.
2.  **Medical Image Segmentation:** Contour curves are extracted from medical scans (e.g., MRI, CT) to delineate organs, tumors, or other structures, allowing for analysis of size, shape, and changes over time. Active contours (snakes) are often used for this purpose.

**Answer 5:**
Two major challenges and mitigation strategies:
1.  **Challenge: Noise in the Image:**
    *   **Effect:** Noise can create spurious intensity changes, leading to fragmented or false edges.
    *   **Mitigation:**
        *   **Preprocessing:** Apply smoothing filters (e.g., Gaussian blur) before edge detection to reduce noise. However, this can also blur actual edges, so a trade-off is necessary.
        *   **Robust Edge Detectors:** Use edge detectors like Canny that incorporate non-maximum suppression and hysteresis thresholding to reduce false positives.
        *   **Edge Linking Algorithms:** Employ algorithms that link edge segments based on geometric continuity and proximity, filtering out isolated noise points.
2.  **Challenge: Occlusion:**
    *   **Effect:** When an object is partially hidden by another, its complete boundary curve cannot be observed, making accurate segmentation and recognition difficult.
    *   **Mitigation:**
        *   **Shape Completion/Inpainting:** Use models that can infer the missing parts of the curve based on the visible portions and prior knowledge of the object's shape.
        *   **Feature-Based Methods:** Instead of relying solely on boundaries, extract other robust features (like corners, blobs, or texture descriptors) that might be visible even when the boundary is occluded.
        *   **Contextual Information:** Use the surrounding scene context or knowledge about expected object arrangements to infer the occluded parts.

---
