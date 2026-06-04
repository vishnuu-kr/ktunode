---
title: "straight lines"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS"
module: "Module 3: 3D graphics"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463503"
status: "completed"
scrapedAt: "2026-05-20T17:58:54.100Z"
---
# Computer Aided Design and Analysis: Module 3: 3D Graphics - Straight Lines

## Introduction to Straight Lines in 3D Graphics

In Computer Aided Design (CAD) and Computer Aided Manufacturing (CAM), the ability to represent and manipulate straight lines is fundamental. While 2D graphics form the basis, 3D graphics extend these concepts into a three-dimensional space. Straight lines in 3D are crucial for defining the edges of objects, constructing wireframes, and as building blocks for more complex geometric shapes. This module focuses on understanding and representing straight lines in a 3D environment.

---

## Learning Outcomes (LO) Addressed in this Topic:

*   **LO 3.1:** Understand the mathematical representation of straight lines in 3D space.
*   **LO 3.2:** Explore different algorithms for drawing straight lines in 3D graphics.
*   **LO 3.3:** Analyze the transformation of straight lines in 3D space.
*   **LO 3.4:** Apply the concepts of straight lines to construct basic 3D wireframe models.

---

## Course Outcomes (CO) Alignment:

*   **CO2:** Apply 2D transformation techniques, including rotation, reflection, scaling, and line and curve drawing algorithms in CAD software.
    *   *This topic builds upon 2D line drawing by extending it to 3D and introduces the mathematical foundations for these algorithms in a higher dimension.* (Knowledge Level: K3)
*   **CO3:** Apply 3D graphics and solid modeling techniques, such as Bezier and B-spline curves, and their application in creating complex geometric forms.
    *   *Straight lines are the simplest geometric forms and serve as precursors to understanding curves and surfaces in 3D. They are essential for wireframe modeling, which is often a precursor to solid modeling.* (Knowledge Level: K3)

---

## 1. Mathematical Representation of Straight Lines in 3D Space

### 1.1 Parametric Equation of a Line

The most general and flexible way to represent a straight line in 3D is using its parametric equation. A line in 3D space can be defined by a point on the line and a direction vector.

Let:
*   $P_0 = (x_0, y_0, z_0)$ be a known point on the line.
*   $\vec{v} = (v_x, v_y, v_z)$ be a direction vector parallel to the line.
*   $P = (x, y, z)$ be any point on the line.

The parametric equation of the line passing through $P_0$ and parallel to $\vec{v}$ is given by:

$P(t) = P_0 + t \vec{v}$

In component form:
*   $x(t) = x_0 + t v_x$
*   $y(t) = y_0 + t v_y$
*   $z(t) = z_0 + t v_z$

Here, $t$ is a scalar parameter. As $t$ varies, the point $P(t)$ traces out the entire line.

*   **For $t=0$, $P(0) = P_0$ (the starting point).**
*   **For $t=1$, $P(1) = P_0 + \vec{v}$ (another point on the line).**
*   **If $t$ is restricted to the range $[0, 1]$, the equation represents a line segment between $P_0$ and $P_1 = P_0 + \vec{v}$.**

**Example:** Find the parametric equation of a line passing through point $A(1, 2, 3)$ and parallel to the vector $\vec{d} = (4, 5, 6)$.

Here, $P_0 = (1, 2, 3)$ and $\vec{v} = (4, 5, 6)$.
The parametric equation is:
$x(t) = 1 + 4t$
$y(t) = 2 + 5t$
$z(t) = 3 + 6t$

To find a point on the line, let $t=2$:
$x(2) = 1 + 4(2) = 9$
$y(2) = 2 + 5(2) = 12$
$z(2) = 3 + 6(2) = 15$
So, point $B(9, 12, 15)$ is on the line.

---

### 1.2 Symmetric (Cartesian) Equation of a Line

The symmetric equation of a line is derived from the parametric equations by eliminating the parameter $t$. This form is useful when the direction vector components are non-zero.

From the parametric equations:
$t = \frac{x - x_0}{v_x}$
$t = \frac{y - y_0}{v_y}$
$t = \frac{z - z_0}{v_z}$

Equating these expressions for $t$, we get the symmetric equation:

$\frac{x - x_0}{v_x} = \frac{y - y_0}{v_y} = \frac{z - z_0}{v_z}$

**Important Note:** If any component of the direction vector is zero (e.g., $v_x = 0$), the corresponding term in the symmetric equation is replaced by setting the numerator to zero. For instance, if $v_x = 0$, the equation becomes:
$x = x_0$ and $\frac{y - y_0}{v_y} = \frac{z - z_0}{v_z}$
This indicates that the line lies in the plane $x = x_0$.

**Example:** Find the symmetric equation of the line passing through point $A(1, 2, 3)$ and parallel to the vector $\vec{d} = (4, 5, 6)$.

Using the parametric form $x(t) = 1 + 4t$, $y(t) = 2 + 5t$, $z(t) = 3 + 6t$:
$t = \frac{x - 1}{4}$
$t = \frac{y - 2}{5}$
$t = \frac{z - 3}{6}$

Thus, the symmetric equation is:
$\frac{x - 1}{4} = \frac{y - 2}{5} = \frac{z - 3}{6}$

---

### 1.3 Line Segment Defined by Two Points

A line segment in 3D is defined by two distinct points, say $P_1 = (x_1, y_1, z_1)$ and $P_2 = (x_2, y_2, z_2)$.

We can use one of the points as $P_0$ and the vector connecting the two points as the direction vector.
Let $P_0 = P_1$.
The direction vector $\vec{v}$ can be calculated as $\vec{v} = P_2 - P_1 = (x_2 - x_1, y_2 - y_1, z_2 - z_1)$.

The parametric equation of the line segment is:
$P(t) = P_1 + t(P_2 - P_1)$
where $0 \le t \le 1$.

In component form:
$x(t) = x_1 + t(x_2 - x_1)$
$y(t) = y_1 + t(y_2 - y_1)$
$z(t) = z_1 + t(z_2 - z_1)$

**Example:** Find the parametric equation of the line segment connecting points $P_1(1, 0, 2)$ and $P_2(5, 4, 8)$.

$P_0 = P_1 = (1, 0, 2)$
$\vec{v} = P_2 - P_1 = (5-1, 4-0, 8-2) = (4, 4, 6)$

The parametric equation for the line segment is:
$x(t) = 1 + 4t$
$y(t) = 0 + 4t = 4t$
$z(t) = 2 + 6t$
for $0 \le t \le 1$.

*   At $t=0$, $P(0) = (1, 0, 2) = P_1$.
*   At $t=1$, $P(1) = (1+4, 4, 2+6) = (5, 4, 8) = P_2$.

---

## 2. Algorithms for Drawing Straight Lines in 3D

Just like in 2D graphics, drawing lines in 3D involves determining which pixels on the screen should be illuminated to represent the line. The core algorithms are based on the same principles as 2D line drawing, but they need to account for the 3D nature of the points and potentially projection onto a 2D plane.

The primary algorithms adapted from 2D are:

### 2.1 Digital Differential Analyzer (DDA) Algorithm

The DDA algorithm is a simple incremental approach. It works by incrementing one coordinate based on the slope and the other coordinate. In 3D, we can extend this by incrementing along the axis with the largest change (delta) and calculating the other coordinates based on the slopes in the respective planes.

**Steps for 3D DDA (conceptual):**

1.  **Define Endpoints:** Get the 3D coordinates of the two endpoints, $(x_1, y_1, z_1)$ and $(x_2, y_2, z_2)$.
2.  **Calculate Deltas:**
    $\Delta x = x_2 - x_1$
    $\Delta y = y_2 - y_1$
    $\Delta z = z_2 - z_1$
3.  **Determine the Major Axis:** Find the axis with the largest absolute difference: $|\Delta x|$, $|\Delta y|$, or $|\Delta z|$. Let this be the "major" axis.
4.  **Calculate Number of Steps:** The number of steps ($N$) required is the absolute value of the largest delta. For example, if $|\Delta x|$ is the largest, $N = |\Delta x|$.
5.  **Calculate Increments:** Determine the increments for each coordinate per step:
    $x_{step} = \Delta x / N$
    $y_{step} = \Delta y / N$
    $z_{step} = \Delta z / N$
6.  **Iterate and Plot:** Start at $(x_1, y_1, z_1)$. For $N$ steps:
    *   Plot the current $(x, y, z)$.
    *   Update coordinates:
        $x = x + x_{step}$
        $y = y + y_{step}$
        $z = z + z_{step}$
    *   (To handle floating-point inaccuracies, it's often better to round the increments or use integer arithmetic where possible, similar to 2D DDA.)

**Reference:** This is an extension of the 2D DDA described in texts like Hearn, Baker, and Carithers. In 3D, the selection of the major axis ensures that we don't miss pixels and maintain a good approximation of the line.

**Example (Conceptual):** Draw a line from $(1, 1, 1)$ to $(5, 3, 7)$.

$\Delta x = 5 - 1 = 4$
$\Delta y = 3 - 1 = 2$
$\Delta z = 7 - 1 = 6$

Largest delta is $|\Delta z| = 6$. So, $N = 6$.
$x_{step} = 4 / 6 = 2/3$
$y_{step} = 2 / 6 = 1/3$
$z_{step} = 6 / 6 = 1$

Starting point $(1, 1, 1)$.
Step 1: Plot (1, 1, 1). Next point: $(1 + 2/3, 1 + 1/3, 1 + 1) = (5/3, 4/3, 2)$.
Step 2: Plot (5/3, 4/3, 2). Next point: $(5/3 + 2/3, 4/3 + 1/3, 2 + 1) = (7/3, 5/3, 3)$.
... and so on, for 6 steps.

---

### 2.2 Bresenham's Line Algorithm

Bresenham's algorithm is generally preferred over DDA because it uses only integer arithmetic, making it faster and more accurate. The core idea is to make a decision at each step whether to move to the next pixel in one direction or diagonally, based on an error term.

**Adapting Bresenham to 3D:**

Adapting Bresenham's algorithm to 3D is more complex than 2D. It typically involves extending the decision-making process to two dimensions of error. A common approach is to use a modified Bresenham for each of the two "minor" axes based on the "major" axis.

Let's consider a line from $(x_1, y_1, z_1)$ to $(x_2, y_2, z_2)$. Assume $|\Delta x|$ is the largest. Then $x$ is the primary incrementing variable. We need to decide whether to increment $y$ or $z$ (or both) at each step of $x$.

A simplified conceptual approach could involve:

1.  **Choose Major Axis:** As in DDA, identify the axis with the largest displacement (e.g., x-axis if $|\Delta x|$ is maximum). The iteration will be driven by steps along this axis.
2.  **Line Equation in Planes:** Consider the line projected onto the $xy$-plane and the $xz$-plane.
3.  **Apply Bresenham in Parallel:** Run two Bresenham algorithms:
    *   One for the $xy$ projection (deciding $y$ based on $x$).
    *   One for the $xz$ projection (deciding $z$ based on $x$).
4.  **Decision Logic:** At each step of $x$, the algorithm needs to decide whether to increment $y$ (based on $xy$ Bresenham's decision) and whether to increment $z$ (based on $xz$ Bresenham's decision). This can lead to 8 possible moves from a current point $(x, y, z)$: $(x+1, y, z)$, $(x+1, y+1, z)$, $(x+1, y, z+1)$, $(x+1, y+1, z+1)$, and similarly for other major axes if chosen. The specific decision logic depends on the combined error terms from the two plane projections.

**Reference:** More detailed explanations of 3D Bresenham's algorithms can be found in graphics literature and advanced CAD/graphics textbooks (e.g., "Computer Graphics with OpenGL" by Hearn, Baker, Carithers). These often involve managing two decision parameters.

**Key takeaway:** Bresenham's algorithm aims to minimize the distance between the ideal line and the chosen pixels using integer arithmetic.

---

## 3. Transformations of Straight Lines in 3D

In CAD, lines (and all geometric entities) are subject to transformations like translation, rotation, and scaling. These transformations are applied to the points defining the line. Since a line is defined by its start and end points (or a point and a direction vector), transforming these defining elements transforms the entire line.

Let $P_1 = (x_1, y_1, z_1)$ and $P_2 = (x_2, y_2, z_2)$ be the endpoints of a line segment.

### 3.1 Translation

Translating a line segment means shifting it by a vector $\vec{T} = (tx, ty, tz)$.
The new endpoints $P'_1$ and $P'_2$ are:
$P'_1 = P_1 + \vec{T} = (x_1+tx, y_1+ty, z_1+tz)$
$P'_2 = P_2 + \vec{T} = (x_2+tx, y_2+ty, z_2+tz)$

**Example:** Translate the line segment from $(1, 2, 3)$ to $(4, 5, 6)$ by the vector $(2, -1, 3)$.
New endpoints:
$P'_1 = (1+2, 2-1, 3+3) = (3, 1, 6)$
$P'_2 = (4+2, 5-1, 6+3) = (6, 4, 9)$

### 3.2 Scaling

Scaling a line segment changes its size.
*   **Uniform Scaling:** Scales by a factor $s$ relative to the origin.
    $P'_1 = s \cdot P_1 = (s \cdot x_1, s \cdot y_1, s \cdot z_1)$
    $P'_2 = s \cdot P_2 = (s \cdot x_2, s \cdot y_2, s \cdot z_2)$
*   **Non-uniform Scaling:** Scales by factors $s_x, s_y, s_z$ along each axis.
    $P'_1 = (s_x \cdot x_1, s_y \cdot y_1, s_z \cdot z_1)$
    $P'_2 = (s_x \cdot x_2, s_y \cdot y_2, s_z \cdot z_2)$

**Scaling relative to a point:** To scale with respect to a point $P_s$, we first translate $P_s$ to the origin, perform scaling, and then translate $P_s$ back.

**Example:** Scale the line segment from $(1, 2, 3)$ to $(4, 5, 6)$ by a factor of 2 uniformly from the origin.
New endpoints:
$P'_1 = 2 \cdot (1, 2, 3) = (2, 4, 6)$
$P'_2 = 2 \cdot (4, 5, 6) = (8, 10, 12)$

### 3.3 Rotation

Rotation in 3D is more complex than in 2D as it requires an axis of rotation. Common rotation axes are the coordinate axes (X, Y, Z) or an arbitrary axis.

*   **Rotation about X-axis by angle $\theta$:**
    $P'_{x} = x$
    $P'_{y} = y \cos \theta - z \sin \theta$
    $P'_{z} = y \sin \theta + z \cos \theta$

*   **Rotation about Y-axis by angle $\theta$:**
    $P'_{x} = x \cos \theta + z \sin \theta$
    $P'_{y} = y$
    $P'_{z} = -x \sin \theta + z \cos \theta$

*   **Rotation about Z-axis by angle $\theta$:**
    $P'_{x} = x \cos \theta - y \sin \theta$
    $P'_{y} = x \sin \theta + y \cos \theta$
    $P'_{z} = z$

**Homogeneous Coordinates and Transformation Matrices:**
For composing multiple transformations, it's common to use homogeneous coordinates and 4x4 transformation matrices. A 3D point $(x, y, z)$ is represented as $(x, y, z, 1)$.

A translation by $(tx, ty, tz)$ is:
$ \begin{bmatrix} 1 & 0 & 0 & tx \\ 0 & 1 & 0 & ty \\ 0 & 0 & 1 & tz \\ 0 & 0 & 0 & 1 \end{bmatrix} $

A rotation about the Z-axis by $\theta$ is:
$ \begin{bmatrix} \cos \theta & -\sin \theta & 0 & 0 \\ \sin \theta & \cos \theta & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} $

To transform a line segment defined by $P_1$ and $P_2$, we apply the transformation matrix $M$ to both points:
$P'_1 = M \cdot P_1$
$P'_2 = M \cdot P_2$

**Reference:** The concepts of homogeneous coordinates and transformation matrices are foundational in 3D graphics and are thoroughly covered in books like "Computer Graphics with open GL" and "Mathematical Elements in Computer Graphics."

---

## 4. Applications in 3D Wireframe Modeling

Straight lines are the fundamental building blocks of **wireframe models** in CAD.

### 4.1 What are Wireframe Models?

Wireframe models represent the edges of an object. They are essentially collections of points, lines, and curves that outline the shape of a 3D object without defining surfaces or volumes.

### 4.2 How Straight Lines are Used:

*   **Defining Edges:** The edges of prisms, cubes, pyramids, and other polyhedra are represented by straight line segments.
*   **Constructing Basic Shapes:** Simple 3D shapes like cubes, rectangular prisms, and cylinders (approximated by line segments) are built using straight lines.
*   **Skeleton of Complex Objects:** Even for complex curves and surfaces, the underlying wireframe structure often relies on straight line segments to define key features or control points.
*   **Engineering Drawings:** In technical drawings derived from CAD models, straight lines are used to represent the visible and hidden edges of a 3D object.

**Example:** A cube with vertices at $(0,0,0), (1,0,0), (0,1,0), (0,0,1), (1,1,0), (1,0,1), (0,1,1), (1,1,1)$ is entirely defined by 12 straight line segments connecting these vertices.

For instance, one face of the cube on the xy-plane at $z=0$ would have lines connecting:
*   $(0,0,0)$ to $(1,0,0)$
*   $(1,0,0)$ to $(1,1,0)$
*   $(1,1,0)$ to $(0,1,0)$
*   $(0,1,0)$ to $(0,0,0)$

---

## Important Points to Remember

*   **Parametric Equation:** $P(t) = P_0 + t \vec{v}$ is the most versatile representation for lines and line segments in 3D.
*   **Symmetric Equation:** Useful for quick checks, but requires non-zero direction vector components.
*   **Line Segment:** A special case of the parametric line where $t$ is restricted to $[0, 1]$.
*   **3D Line Drawing Algorithms:** DDA and Bresenham's are extensions of their 2D counterparts, adapted for 3D by considering multiple axes or planes. Bresenham's is preferred for efficiency and accuracy due to integer arithmetic.
*   **Transformations:** Lines are transformed by transforming their defining points (endpoints or point and vector).
*   **Wireframe Modeling:** Straight lines are fundamental elements for constructing wireframe models, representing the edges of 3D objects.

---

## Practice Questions

**Question 1:**
Find the parametric equation of a line passing through points $A(2, 1, 0)$ and $B(4, 3, 5)$.
**(CO2, CO3; LO 3.1)**

**Answer 1:**
To find the parametric equation, we need a point and a direction vector. Let $P_0 = A = (2, 1, 0)$.
The direction vector $\vec{v} = B - A = (4-2, 3-1, 5-0) = (2, 2, 5)$.
The parametric equation is:
$x(t) = 2 + 2t$
$y(t) = 1 + 2t$
$z(t) = 0 + 5t = 5t$

---

**Question 2:**
Write the symmetric equation for the line passing through $(1, -2, 3)$ parallel to the vector $(2, 4, -1)$.
**(CO2, CO3; LO 3.1)**

**Answer 2:**
Using the point $P_0 = (1, -2, 3)$ and direction vector $\vec{v} = (2, 4, -1)$:
The symmetric equation is:
$\frac{x - 1}{2} = \frac{y - (-2)}{4} = \frac{z - 3}{-1}$
$\frac{x - 1}{2} = \frac{y + 2}{4} = \frac{z - 3}{-1}$

---

**Question 3:**
Consider a line segment from $P_1(0, 0, 0)$ to $P_2(3, 3, 3)$.
a) Find its parametric equation.
b) If this line segment is rotated by 90 degrees about the Z-axis, what are the new endpoints?
**(CO2, CO3; LO 3.1, 3.3)**

**Answer 3:**
a) $P_0 = P_1 = (0, 0, 0)$.
$\vec{v} = P_2 - P_1 = (3, 3, 3)$.
Parametric equation:
$x(t) = 0 + 3t = 3t$
$y(t) = 0 + 3t = 3t$
$z(t) = 0 + 3t = 3t$
for $0 \le t \le 1$.

b) Rotation about the Z-axis by 90 degrees ($\theta = 90^\circ = \pi/2$ radians).
The rotation formulas are:
$P'_{x} = x \cos \theta - y \sin \theta$
$P'_{y} = x \sin \theta + y \cos \theta$
$P'_{z} = z$

Here, $\cos(90^\circ) = 0$ and $\sin(90^\circ) = 1$.

For endpoint $P_1(0, 0, 0)$:
$P'_{1x} = 0 \cdot 0 - 0 \cdot 1 = 0$
$P'_{1y} = 0 \cdot 1 + 0 \cdot 0 = 0$
$P'_{1z} = 0$
So, $P'_1 = (0, 0, 0)$.

For endpoint $P_2(3, 3, 3)$:
$P'_{2x} = 3 \cdot 0 - 3 \cdot 1 = -3$
$P'_{2y} = 3 \cdot 1 + 3 \cdot 0 = 3$
$P'_{2z} = 3$
So, $P'_2 = (-3, 3, 3)$.

The new endpoints are $(0, 0, 0)$ and $(-3, 3, 3)$.

---

**Question 4:**
Briefly explain why Bresenham's algorithm is generally preferred over the DDA algorithm for line drawing in computer graphics.
**(CO2; LO 3.2)**

**Answer 4:**
Bresenham's algorithm is preferred because it uses only integer arithmetic. This avoids the accumulation of floating-point errors that can occur with DDA, leading to more accurate line drawing. Furthermore, integer operations are typically faster than floating-point operations, resulting in better performance, especially in real-time graphics applications.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


## References Used:

*   **CAD/CAM Computer Aided Design and Manufacturing** by M.P. Groover, E.M. Zimmers, Jr. (Prentice Hall of India, 2014) - Provides foundational concepts for CAD.
*   **CAD/CAM : Theory and Practice** by Ibrahim Zeid, R Sivasubramanian (McGraw Hill Education, 2nd, 2009) - Covers mathematical representations and algorithms.
*   **Computer Graphics with open GL,** by Donald Hearn, M. Pauline Baker and Warren Carithers (Pearson Education, 2001) - Essential for detailed explanations of 2D and 3D graphics algorithms and transformations.
*   **Mathematical Elements in Computer Graphics,** by D. F. Rogers and J. A. Adams (McGraw-Hill, 1990) - Provides mathematical rigor for geometric transformations and representations.

---