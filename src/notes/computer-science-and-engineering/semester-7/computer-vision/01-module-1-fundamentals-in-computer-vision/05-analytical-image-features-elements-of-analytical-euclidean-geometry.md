---
title: "Analytical Image Features - Elements of Analytical Euclidean Geometry"
subject: "COMPUTER VISION"
module: "Module 1: Fundamentals in Computer Vision :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c399"
status: "completed"
scrapedAt: "2026-05-20T17:03:01.655Z"
---
# Computer Vision: Module 1 - Fundamentals in Computer Vision

## Topic: Analytical Image Features - Elements of Analytical Euclidean Geometry

This module introduces the foundational concepts of computer vision, with a specific focus on how analytical Euclidean geometry is applied to understand and represent image features.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the role of geometric concepts in representing and analyzing image features.
*   Recall and apply fundamental concepts of Euclidean geometry in a 2D Cartesian coordinate system.
*   Define and explain key geometric primitives like points, lines, and curves.
*   Understand the mathematical representations of these primitives.
*   Explain how transformations (translation, rotation, scaling) affect geometric entities.
*   Appreciate the importance of these concepts for higher-level computer vision tasks.

---

### 1. Introduction: Geometry in Computer Vision

Computer vision aims to enable machines to "see" and interpret the world from images. Geometric concepts provide the mathematical framework for:

*   **Representing:** Describing the shape and structure of objects and scenes.
*   **Analyzing:** Extracting meaningful information from images.
*   **Manipulating:** Transforming images and the information within them.

**Key Idea:** Images can be thought of as collections of pixels, each with a position and intensity. Geometry allows us to group these pixels into meaningful structures and understand their relationships.

---

### 2. The 2D Cartesian Coordinate System

The foundation of analytical geometry is the coordinate system, which allows us to assign numerical values to spatial locations.

*   **Definition:** A system consisting of two perpendicular axes (typically the x-axis and y-axis) that intersect at a point called the origin.
*   **Purpose:** To uniquely identify any point in a 2D plane using an ordered pair of numbers (x, y).

**Components:**

*   **Origin (0, 0):** The point where the x and y axes intersect.
*   **X-axis:** The horizontal axis. Positive values are to the right of the origin.
*   **Y-axis:** The vertical axis. Positive values are upwards from the origin.
*   **Coordinates (x, y):** The position of a point. 'x' is the horizontal distance from the y-axis, and 'y' is the vertical distance from the x-axis.

**Example:**

A point with coordinates (3, 5) is located 3 units to the right of the y-axis and 5 units above the x-axis.

**Important Note for Computer Vision:** In many image processing contexts, the y-axis is often inverted (origin at the top-left, y increasing downwards). This is a convention to be mindful of.

---

### 3. Geometric Primitives

These are the basic building blocks for describing shapes and structures in an image.

#### 3.1. Points

*   **Definition:** A location in space with no dimension (length, width, or depth).
*   **Representation:** In a 2D Cartesian system, a point is represented by its coordinates $(x, y)$.
*   **Applications in CV:**
    *   Representing feature locations (e.g., corners, keypoints).
    *   Defining vertices of shapes.
    *   Centroids of objects.

**Example:** A detected corner in an image might be represented as the point (120, 85).

#### 3.2. Lines

*   **Definition:** A one-dimensional geometric object that extends infinitely in both directions.
*   **Mathematical Representations:**

    *   **Two-Point Form:** Given two distinct points $P_1 = (x_1, y_1)$ and $P_2 = (x_2, y_2)$, the line passing through them can be represented.
        *   If $x_1 = x_2$ (vertical line), the equation is $x = x_1$.
        *   If $y_1 = y_2$ (horizontal line), the equation is $y = y_1$.
        *   Otherwise, the slope $m = \frac{y_2 - y_1}{x_2 - x_1}$. The equation is $y - y_1 = m(x - x_1)$.

    *   **Slope-Intercept Form:** $y = mx + c$, where $m$ is the slope and $c$ is the y-intercept (the point where the line crosses the y-axis).
        *   Slope ($m$): Indicates the steepness and direction of the line. A positive slope means the line goes up from left to right. A negative slope means it goes down.
        *   Y-intercept ($c$): The value of $y$ when $x = 0$.

    *   **General Form (Implicit Form):** $Ax + By + C = 0$. This form is particularly useful for transformations and in algorithms like the Hough Transform.
        *   $A$ and $B$ are coefficients that determine the orientation of the line.
        *   $C$ is a constant.

    *   **Parametric Form:** A point $P(t)$ on the line can be represented as $P(t) = P_1 + t \vec{d}$, where $P_1$ is a point on the line, $\vec{d}$ is the direction vector, and $t$ is a scalar parameter.
        *   In 2D: $P(t) = (x_1 + t(x_2-x_1), y_1 + t(y_2-y_1))$.
        *   As $t$ varies, $P(t)$ traces out the line.

*   **Applications in CV:**
    *   Detecting straight edges (e.g., roads, building outlines).
    *   Line fitting for object recognition.
    *   Representing boundaries and contours.

**Example:** A line passing through (1, 2) and (3, 6).
*   Slope $m = (6-2) / (3-1) = 4/2 = 2$.
*   Using point-slope form: $y - 2 = 2(x - 1) \Rightarrow y = 2x - 2 + 2 \Rightarrow y = 2x$.
*   General form: $2x - y = 0$ (here A=2, B=-1, C=0).

#### 3.3. Curves

*   **Definition:** A continuous set of points that are not necessarily straight.
*   **Mathematical Representations:** Curves are often represented implicitly or parametrically.

    *   **Implicit Form:** An equation of the form $F(x, y) = 0$.
        *   **Circles:** $(x - h)^2 + (y - k)^2 = r^2$, where $(h, k)$ is the center and $r$ is the radius.
        *   **Ellipses:** $\frac{(x - h)^2}{a^2} + \frac{(y - k)^2}{b^2} = 1$.

    *   **Parametric Form:** A point $(x(t), y(t))$ on the curve is defined by functions of a parameter $t$.
        *   **Circles:** $x(t) = h + r \cos(t)$, $y(t) = k + r \sin(t)$, for $0 \le t < 2\pi$.

    *   **Polynomial Curves:**
        *   **Quadratic:** Parabolas ($y = ax^2 + bx + c$).
        *   **Cubic:** Bezier curves, which are widely used in computer graphics and can be used to model smooth curves in images.

*   **Applications in CV:**
    *   Representing object boundaries (e.g., faces, objects with curved shapes).
    *   Modeling trajectories.
    *   Analyzing texture.

**Example:** Representing a circular object with center (100, 150) and radius 50.
*   Implicit form: $(x - 100)^2 + (y - 150)^2 = 50^2 = 2500$.
*   Parametric form: $x(t) = 100 + 50 \cos(t)$, $y(t) = 150 + 50 \sin(t)$.

---

### 4. Geometric Transformations

Transformations are operations that move, resize, or reorient geometric entities. They are crucial for aligning images, aligning objects, or analyzing how features change.

#### 4.1. Translation

*   **Definition:** Shifting an object or point without rotating or resizing it.
*   **Effect:** Adds a constant vector to each point.
*   **Mathematical Representation:** If a point $P = (x, y)$ is translated by a vector $T = (t_x, t_y)$, the new point $P'$ is:
    $P' = (x + t_x, y + t_y)$

*   **Applications in CV:**
    *   Aligning images or objects.
    *   Moving detected features to a common reference frame.

**Example:** Translate point (3, 5) by vector (2, -1).
*   New point $P' = (3 + 2, 5 + (-1)) = (5, 4)$.

#### 4.2. Rotation

*   **Definition:** Turning an object or point around a fixed point (the pivot or center of rotation).
*   **Effect:** Changes the orientation of a geometric entity.
*   **Mathematical Representation:** Rotating a point $P = (x, y)$ by an angle $\theta$ counter-clockwise around the origin (0, 0) results in a new point $P' = (x', y')$:
    $x' = x \cos(\theta) - y \sin(\theta)$
    $y' = x \sin(\theta) + y \cos(\theta)$

    *   If rotating around a pivot point $(p_x, p_y)$ other than the origin:
        1. Translate the point so the pivot is at the origin: $(x - p_x, y - p_y)$.
        2. Rotate around the origin.
        3. Translate back: $(x' + p_x, y' + p_y)$.

*   **Applications in CV:**
    *   Recognizing objects regardless of their orientation.
    *   Image registration.
    *   Correcting for camera tilt.

**Example:** Rotate point (1, 0) by 90 degrees counter-clockwise around the origin.
*   $\theta = 90^\circ$ (or $\pi/2$ radians). $\cos(90^\circ) = 0$, $\sin(90^\circ) = 1$.
*   $x' = 1 \cos(90^\circ) - 0 \sin(90^\circ) = 1(0) - 0(1) = 0$.
*   $y' = 1 \sin(90^\circ) + 0 \cos(90^\circ) = 1(1) + 0(0) = 1$.
*   New point $P' = (0, 1)$.

#### 4.3. Scaling

*   **Definition:** Resizing an object or image.
*   **Effect:** Changes the size of a geometric entity.
*   **Mathematical Representation:** Scaling a point $P = (x, y)$ by factors $s_x$ along the x-axis and $s_y$ along the y-axis, relative to the origin:
    $P' = (s_x \cdot x, s_y \cdot y)$

    *   If $s_x = s_y = s$, it's uniform scaling.
    *   Scaling around a pivot point $(p_x, p_y)$:
        1. Translate to origin: $(x - p_x, y - p_y)$.
        2. Scale.
        3. Translate back: $(s_x(x - p_x) + p_x, s_y(y - p_y) + p_y)$.

*   **Applications in CV:**
    *   Object recognition at different scales.
    *   Image resizing for processing.
    *   Creating image pyramids.

**Example:** Scale point (3, 5) by factor 2 along x and factor 0.5 along y.
*   $s_x = 2$, $s_y = 0.5$.
*   New point $P' = (2 \cdot 3, 0.5 \cdot 5) = (6, 2.5)$.

---

### 5. Homogeneous Coordinates and Matrix Representations

For convenience, especially when dealing with sequences of transformations, we often use **homogeneous coordinates**.

*   **Definition:** A point $(x, y)$ in 2D is represented by a 3-element vector $(x, y, 1)$ in homogeneous coordinates. A point $(x, y, w)$ in homogeneous coordinates corresponds to $(x/w, y/w)$ in Cartesian coordinates (if $w \neq 0$).

*   **Advantages:**
    *   Allows representing translation as a matrix multiplication, unifying translation, rotation, and scaling under a single framework.

*   **Transformation Matrices:**

    *   **Translation:**
        $$
        T(t_x, t_y) = \begin{pmatrix} 1 & 0 & t_x \\ 0 & 1 & t_y \\ 0 & 0 & 1 \end{pmatrix}
        $$
        $P' = T \cdot P_{homogeneous}$

    *   **Rotation (around origin by $\theta$):**
        $$
        R(\theta) = \begin{pmatrix} \cos(\theta) & -\sin(\theta) & 0 \\ \sin(\theta) & \cos(\theta) & 0 \\ 0 & 0 & 1 \end{pmatrix}
        $$
        $P' = R(\theta) \cdot P_{homogeneous}$

    *   **Scaling (by $s_x, s_y$ around origin):**
        $$
        S(s_x, s_y) = \begin{pmatrix} s_x & 0 & 0 \\ 0 & s_y & 0 \\ 0 & 0 & 1 \end{pmatrix}
        $$
        $P' = S(s_x, s_y) \cdot P_{homogeneous}$

*   **Combining Transformations:** To apply a sequence of transformations (e.g., translate, then rotate, then scale), you multiply their matrices in the correct order. For example, to translate then rotate: $M = R(\theta) \cdot T(t_x, t_y)$.

**Example:** Rotate point (3, 4) by 90 degrees counter-clockwise around the origin, then translate by (2, 1).

1.  **Point in homogeneous coordinates:** $(3, 4, 1)^T$.
2.  **Rotation Matrix:** $\theta = 90^\circ$, $\cos(90^\circ)=0$, $\sin(90^\circ)=1$.
    $$
    R(90^\circ) = \begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}
    $$
3.  **Translation Matrix:** $(t_x, t_y) = (2, 1)$.
    $$
    T(2, 1) = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}
    $$
4.  **Combined Transformation Matrix (Translate after Rotate):** $M = T(2, 1) \cdot R(90^\circ)$.
    $$
    M = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 1(0)+0(1)+2(0) & 1(-1)+0(0)+2(0) & 1(0)+0(0)+2(1) \\ 0(0)+1(1)+1(0) & 0(-1)+1(0)+1(0) & 0(0)+1(0)+1(1) \\ 0(0)+0(1)+1(0) & 0(-1)+0(0)+1(0) & 0(0)+0(0)+1(1) \end{pmatrix} = \begin{pmatrix} 0 & -1 & 2 \\ 1 & 0 & 1 \\ 0 & 0 & 1 \end{pmatrix}
    $$
5.  **Apply combined transformation to the point:**
    $$
    P'_{homogeneous} = M \cdot P_{homogeneous} = \begin{pmatrix} 0 & -1 & 2 \\ 1 & 0 & 1 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 3 \\ 4 \\ 1 \end{pmatrix} = \begin{pmatrix} 0(3) + (-1)(4) + 2(1) \\ 1(3) + 0(4) + 1(1) \\ 0(3) + 0(4) + 1(1) \end{pmatrix} = \begin{pmatrix} -2 \\ 4 \\ 1 \end{pmatrix}
    $$
6.  **Convert back to Cartesian:** $(-2/1, 4/1) = (-2, 4)$.

**Important Point:** The order of matrix multiplication matters! $A \cdot B \neq B \cdot A$ in general.

---

### 6. Importance for Higher-Level Tasks

Understanding these fundamental geometric concepts is essential for:

*   **Feature Detection and Description:** Identifying salient points, lines, or curves in an image and describing their local geometry.
*   **Object Recognition:** Comparing geometric models of objects to image features.
*   **Image Stitching and Panorama Creation:** Aligning overlapping images using geometric transformations.
*   **3D Reconstruction:** Inferring 3D structure from 2D images, which heavily relies on geometric principles (e.g., projective geometry).
*   **Motion Analysis:** Tracking objects and estimating their movement using geometric transformations over time.

---

### Practice Questions and Exercises

**Q1. Coordinate System:**
A point is located at (7, -3) in the standard Cartesian coordinate system.
a) What is the x-coordinate?
b) What is the y-coordinate?
c) How many units is it to the right/left of the y-axis?
d) How many units is it above/below the x-axis?

**Q2. Lines:**
Find the equation of the line passing through the points (2, 5) and (6, 13). Express it in slope-intercept form ($y = mx + c$).

**Q3. Transformations (Translation):**
A point $P = (10, 20)$ is translated by a vector $T = (-5, 15)$. What are the coordinates of the new point $P'$?

**Q4. Transformations (Rotation):**
What happens to the point (1, 1) when it is rotated by 180 degrees counter-clockwise around the origin?

**Q5. Transformations (Scaling):**
Scale the point (4, 6) by a factor of 0.5 along the x-axis and a factor of 1.5 along the y-axis. What are the new coordinates?

**Q6. Combined Transformations:**
Apply a translation of (3, -2) followed by a scaling of $s_x=2, s_y=1$ to the point (1, 4). Use matrix multiplication with homogeneous coordinates.

---

### Answers to Practice Questions

**A1. Coordinate System:**
a) x-coordinate = 7
b) y-coordinate = -3
c) 7 units to the right of the y-axis.
d) 3 units below the x-axis.

**A2. Lines:**
*   Calculate the slope: $m = \frac{13 - 5}{6 - 2} = \frac{8}{4} = 2$.
*   Use point-slope form with (2, 5): $y - 5 = 2(x - 2)$
*   $y - 5 = 2x - 4$
*   $y = 2x + 1$.
    *   Slope-intercept form: $y = 2x + 1$.

**A3. Transformations (Translation):**
*   $P' = (10 + (-5), 20 + 15) = (5, 35)$.

**A4. Transformations (Rotation):**
*   For a 180-degree rotation, $\cos(180^\circ) = -1$ and $\sin(180^\circ) = 0$.
*   $x' = 1 \cos(180^\circ) - 1 \sin(180^\circ) = 1(-1) - 1(0) = -1$.
*   $y' = 1 \sin(180^\circ) + 1 \cos(180^\circ) = 1(0) + 1(-1) = -1$.
*   The point becomes (-1, -1).

**A5. Transformations (Scaling):**
*   $s_x = 0.5$, $s_y = 1.5$.
*   $P' = (0.5 \cdot 4, 1.5 \cdot 6) = (2, 9)$.

**A6. Combined Transformations:**
1.  **Point:** $(1, 4, 1)^T$.
2.  **Translation Matrix:** $T(3, -2) = \begin{pmatrix} 1 & 0 & 3 \\ 0 & 1 & -2 \\ 0 & 0 & 1 \end{pmatrix}$.
3.  **Scaling Matrix:** $S(2, 1) = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$.
4.  **Combined Matrix (Translate then Scale):** $M = S(2, 1) \cdot T(3, -2)$.
    $$
    M = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 & 3 \\ 0 & 1 & -2 \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 2(1)+0(0)+0(0) & 2(0)+0(1)+0(0) & 2(3)+0(-2)+0(1) \\ 0(1)+1(0)+0(0) & 0(0)+1(1)+0(0) & 0(3)+1(-2)+0(1) \\ 0(1)+0(0)+1(0) & 0(0)+0(1)+1(0) & 0(3)+0(-2)+1(1) \end{pmatrix} = \begin{pmatrix} 2 & 0 & 6 \\ 0 & 1 & -2 \\ 0 & 0 & 1 \end{pmatrix}
    $$
5.  **Apply transformation:**
    $$
    P'_{homogeneous} = M \cdot P_{homogeneous} = \begin{pmatrix} 2 & 0 & 6 \\ 0 & 1 & -2 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 \\ 4 \\ 1 \end{pmatrix} = \begin{pmatrix} 2(1) + 0(4) + 6(1) \\ 0(1) + 1(4) + (-2)(1) \\ 0(1) + 0(4) + 1(1) \end{pmatrix} = \begin{pmatrix} 8 \\ 2 \\ 1 \end{pmatrix}
    $$
6.  **Convert back:** $(8/1, 2/1) = (8, 2)$.

---

### Important Points to Remember:

*   **Coordinate System Convention:** Be aware of the image coordinate system (often origin at top-left, y increasing downwards).
*   **Line Representations:** Understand the different ways to represent lines (slope-intercept, general, parametric) and their use cases.
*   **Transformation Order:** The order in which you apply transformations (especially rotations and translations) matters. Matrix multiplication order reflects this.
*   **Homogeneous Coordinates:** They simplify the representation and application of geometric transformations, especially when chaining multiple operations.
*   **Geometric primitives** are the building blocks for understanding more complex image structures.
*   **Transformations** are key to handling variations in object pose, scale, and viewpoint.
