---
title: "reflection"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS"
module: "Module 2: Transformation of points and lines"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044634f1"
status: "completed"
scrapedAt: "2026-05-20T17:58:41.908Z"
---
# Computer-Aided Design and Analysis - Module 2: Transformation of Points and Lines - Reflection

## 1. Introduction to Reflection

Reflection is a fundamental 2D transformation that creates a mirror image of an object across a line or plane. In Computer-Aided Design (CAD), reflection is used for various purposes, such as:

*   Creating symmetric designs.
*   Mirroring components in assemblies.
*   Generating reflections in graphical scenes.

This topic builds upon the understanding of basic point and line transformations, particularly translation and rotation, and is a core component of achieving the learning outcome of applying 2D transformation techniques (CO2).

**Key Concept:** Reflection is a rigid transformation, meaning it preserves distances and angles.

## 2. Reflection Across the Coordinate Axes

The simplest form of reflection is across the x-axis or the y-axis.

### 2.1 Reflection Across the X-Axis

When a point $(x, y)$ is reflected across the x-axis, its x-coordinate remains the same, and its y-coordinate is negated.

**Transformation Formula:**
$P'(x', y') = (x, -y)$

**Matrix Representation:**
$$
\begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}
$$

**Example:**
Reflect the point $P(3, 4)$ across the x-axis.
$P'(3, -4)$

**Reference:** This concept is fundamental in basic geometry and graphics, as discussed in **Rogers and Adams (1990)** regarding geometric transformations.

### 2.2 Reflection Across the Y-Axis

When a point $(x, y)$ is reflected across the y-axis, its y-coordinate remains the same, and its x-coordinate is negated.

**Transformation Formula:**
$P'(x', y') = (-x, y)$

**Matrix Representation:**
$$
\begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} -1 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}
$$

**Example:**
Reflect the point $P(3, 4)$ across the y-axis.
$P'(-3, 4)$

**Reference:** Similar to reflection across the x-axis, this is a foundational transformation covered in **Zeid and Sivasubramanian (2009)** under 2D transformations.

## 3. Reflection Across the Origin

Reflecting a point across the origin is equivalent to reflecting it across the x-axis followed by reflecting it across the y-axis (or vice-versa). Both the x and y coordinates are negated.

**Transformation Formula:**
$P'(x', y') = (-x, -y)$

**Matrix Representation:**
$$
\begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}
$$

**Example:**
Reflect the point $P(3, 4)$ across the origin.
$P'(-3, -4)$

**Important Point:** Reflection across the origin is equivalent to a 180-degree rotation about the origin.

## 4. Reflection Across an Arbitrary Line

Reflecting a point across a line that is not an axis requires a more general approach. This typically involves a sequence of transformations:

1.  **Translate** the line so that it passes through the origin.
2.  **Rotate** the coordinate system so that the line aligns with one of the axes (e.g., the x-axis).
3.  **Reflect** the point across this axis.
4.  **Rotate** the coordinate system back to its original orientation.
5.  **Translate** the coordinate system back to its original position.

This multi-step process is crucial for implementing reflections of arbitrary lines in CAD systems, aligning with CO2's requirement to apply transformation techniques.

### 4.1 Reflection Across a Line Passing Through the Origin

Let's consider the case of reflecting a point $P(x, y)$ across a line passing through the origin that makes an angle $\theta$ with the positive x-axis.

**Steps:**

1.  **Rotate the system by $-\theta$**: This aligns the reflection line with the x-axis. The new coordinates $(x_1, y_1)$ are:
    $x_1 = x \cos(-\theta) - y \sin(-\theta) = x \cos\theta + y \sin\theta$
    $y_1 = x \sin(-\theta) + y \cos(-\theta) = -x \sin\theta + y \cos\theta$

2.  **Reflect across the x-axis**: The new coordinates $(x_2, y_2)$ are:
    $x_2 = x_1 = x \cos\theta + y \sin\theta$
    $y_2 = -y_1 = -(-x \sin\theta + y \cos\theta) = x \sin\theta - y \cos\theta$

3.  **Rotate the system back by $\theta$**: The final coordinates $(x', y')$ are:
    $x' = x_2 \cos\theta - y_2 \sin\theta$
    $y' = x_2 \sin\theta + y_2 \cos\theta$

    Substitute $x_2$ and $y_2$:
    $x' = (x \cos\theta + y \sin\theta)\cos\theta - (x \sin\theta - y \cos\theta)\sin\theta$
    $x' = x \cos^2\theta + y \sin\theta\cos\theta - x \sin^2\theta + y \sin\theta\cos\theta$
    $x' = x (\cos^2\theta - \sin^2\theta) + y (2 \sin\theta\cos\theta)$
    $x' = x \cos(2\theta) + y \sin(2\theta)$

    $y' = (x \cos\theta + y \sin\theta)\sin\theta + (x \sin\theta - y \cos\theta)\cos\theta$
    $y' = x \sin\theta\cos\theta + y \sin^2\theta + x \sin\theta\cos\theta - y \cos^2\theta$
    $y' = x (2 \sin\theta\cos\theta) + y (\sin^2\theta - \cos^2\theta)$
    $y' = x \sin(2\theta) - y \cos(2\theta)$

**Transformation Formula (Line through Origin with angle $\theta$):**
$P'(x', y') = (x \cos(2\theta) + y \sin(2\theta), x \sin(2\theta) - y \cos(2\theta))$

**Matrix Representation:**
$$
\begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} \cos(2\theta) & \sin(2\theta) \\ \sin(2\theta) & -\cos(2\theta) \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}
$$

**Example:**
Reflect the point $P(2, 3)$ across the line $y=x$. This line makes an angle $\theta = 45^\circ$ with the x-axis.
$2\theta = 90^\circ$.
$\cos(90^\circ) = 0$, $\sin(90^\circ) = 1$.

$x' = 2 \cos(90^\circ) + 3 \sin(90^\circ) = 2(0) + 3(1) = 3$
$y' = 2 \sin(90^\circ) - 3 \cos(90^\circ) = 2(1) - 3(0) = 2$

So, $P'(3, 2)$. This is correct, as reflecting $(2, 3)$ across $y=x$ swaps the coordinates.

**Reference:** This derivation is a standard example in computer graphics texts like **Hearn, Baker, and Carithers (2001)**, explaining how reflections across arbitrary lines are constructed from basic transformations.

### 4.2 Reflection Across an Arbitrary Line $y = mx + c$ (General Case)

For a line $y = mx + c$, where $m$ is the slope and $c$ is the y-intercept, we can use the general sequence of transformations.

Let the line be $L$.

1.  **Translate** the system so that the line passes through the origin. A convenient point on the line is $(0, c)$. So, translate by $(0, -c)$.
    The line equation becomes $y + c = m(x) + c$, which simplifies to $y = mx$.

2.  **Rotate** the system to align the line $y = mx$ with the x-axis. The angle of inclination $\theta$ of the line $y=mx$ with the x-axis is given by $\tan\theta = m$, so $\theta = \arctan(m)$. We rotate by $-\theta$.

3.  **Reflect** across the x-axis.

4.  **Rotate** back by $\theta$.

5.  **Translate** back by $(0, c)$.

The composite transformation matrix for reflection across an arbitrary line is derived by multiplying the individual transformation matrices in the correct order.

**Reference:** The comprehensive explanation of deriving reflection across a general line using matrix transformations can be found in **Zeid and Sivasubramanian (2009)** and **Rogers and Adams (1990)**.

## 5. Reflection in Homogeneous Coordinates

To perform reflections using matrix multiplication in a unified manner, we use homogeneous coordinates. A point $(x, y)$ is represented as $(x, y, 1)$.

The reflection matrices in homogeneous coordinates are:

### 5.1 Reflection Across X-Axis:

$$
R_x = \begin{bmatrix} 1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 1 \end{bmatrix}
$$
$$
\begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix} = \begin{bmatrix} x \\ -y \\ 1 \end{bmatrix}
$$

### 5.2 Reflection Across Y-Axis:

$$
R_y = \begin{bmatrix} -1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}
$$
$$
\begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} -1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix} = \begin{bmatrix} -x \\ y \\ 1 \end{bmatrix}
$$

### 5.3 Reflection Across Origin:

$$
R_o = \begin{bmatrix} -1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 1 \end{bmatrix}
$$
$$
\begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} -1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix} = \begin{bmatrix} -x \\ -y \\ 1 \end{bmatrix}
$$

### 5.4 Reflection Across a Line $y = x$:

The line $y=x$ makes an angle $\theta = 45^\circ$ with the x-axis.
The transformation matrix is:
$$
R_{y=x} = \begin{bmatrix} \cos(2 \times 45^\circ) & \sin(2 \times 45^\circ) & 0 \\ \sin(2 \times 45^\circ) & -\cos(2 \times 45^\circ) & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} \cos(90^\circ) & \sin(90^\circ) & 0 \\ \sin(90^\circ) & -\cos(90^\circ) & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}
$$
$$
\begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix} = \begin{bmatrix} y \\ x \\ 1 \end{bmatrix}
$$

**Reference:** Using homogeneous coordinates simplifies the composition of multiple transformations, a key aspect of CAD systems for efficient rendering and manipulation, as elaborated in **Hearn, Baker, and Carithers (2001)**.

## 6. Reflection of a Line Segment

To reflect a line segment defined by two endpoints $P_1(x_1, y_1)$ and $P_2(x_2, y_2)$, we simply apply the reflection transformation to each endpoint individually. The reflected line segment will be defined by the transformed endpoints $P'_1$ and $P'_2$.

**Example:**
Reflect the line segment with endpoints $P_1(1, 2)$ and $P_2(4, 5)$ across the x-axis.
Reflecting $P_1(1, 2)$ across the x-axis gives $P'_1(1, -2)$.
Reflecting $P_2(4, 5)$ across the x-axis gives $P'_2(4, -5)$.
The reflected line segment has endpoints $(1, -2)$ and $(4, -5)$.

**Reference:** This principle is straightforward and applies to any geometric primitive composed of points, as discussed in general transformation principles in **Zeid and Sivasubramanian (2009)**.

## 7. Applications of Reflection in CAD

*   **Symmetrical Designs:** Creating mirror images of parts of a design to achieve symmetry. For example, in designing a car body, one half can be designed and then reflected to create the other half.
*   **Feature Creation:** In mechanical design, features like holes or bosses can be mirrored across an axis of symmetry.
*   **Drawing and Drafting:** Generating mirror images of symbols, text, or geometric elements.
*   **Assembly Modeling:** Mirroring a component within an assembly to create a mirrored version (e.g., left-hand vs. right-hand components).
*   **User Interface Design:** Creating symmetrical layouts and mirror functionalities.

**Reference:** **Groover and Zimmers (2014)** likely discusses these practical applications within the context of CAD/CAM systems, highlighting how transformations contribute to efficient design processes. **Ulrich and Eppinger (2020)** in product design may also touch upon how symmetry and mirroring contribute to product aesthetics and functionality.

## 8. Key Points to Remember

*   Reflection is a mirror image transformation.
*   It preserves distances and angles (is a rigid transformation).
*   Reflection across the x-axis: $(x, y) \rightarrow (x, -y)$.
*   Reflection across the y-axis: $(x, y) \rightarrow (-x, y)$.
*   Reflection across the origin: $(x, y) \rightarrow (-x, -y)$.
*   Reflection across a line through the origin with angle $\theta$: $(x', y') = (x \cos(2\theta) + y \sin(2\theta), x \sin(2\theta) - y \cos(2\theta))$.
*   General reflections involve sequences of translation, rotation, and reflection.
*   Homogeneous coordinates are essential for matrix-based representation and composition of reflections.
*   Reflecting a line segment involves reflecting its endpoints.

## 9. Practice Questions and Exercises

**Question 1:**
What is the resulting point if $P(5, -2)$ is reflected across the y-axis?
a) $(-5, -2)$
b) $(5, 2)$
c) $(-5, 2)$
d) $(5, -2)$

**Answer:** a) $(-5, -2)$
*Explanation:* Reflection across the y-axis negates the x-coordinate.

**Question 2:**
Find the coordinates of the point $P(2, 4)$ after reflection across the line $y = -x$.
a) $(-4, -2)$
b) $(4, 2)$
c) $(-2, -4)$
d) $(2, 4)$

**Answer:** a) $(-4, -2)$
*Explanation:* The line $y = -x$ makes an angle of $\theta = 135^\circ$ with the positive x-axis.
$2\theta = 270^\circ$.
$\cos(270^\circ) = 0$, $\sin(270^\circ) = -1$.
$x' = x \cos(270^\circ) + y \sin(270^\circ) = 2(0) + 4(-1) = -4$
$y' = x \sin(270^\circ) - y \cos(270^\circ) = 2(-1) - 4(0) = -2$

**Question 3:**
Consider a triangle with vertices A(1, 1), B(3, 2), and C(2, 4). Find the vertices of the triangle after it is reflected across the x-axis.

**Answer:**
For A(1, 1): Reflection across x-axis gives A'(1, -1).
For B(3, 2): Reflection across x-axis gives B'(3, -2).
For C(2, 4): Reflection across x-axis gives C'(2, -4).
The reflected triangle has vertices A'(1, -1), B'(3, -2), and C'(2, -4).

**Question 4 (Matrix Method):**
Using homogeneous coordinates, find the reflection of point P(3, 5) across the line $y = x$.

**Answer:**
The reflection matrix for $y=x$ is $R_{y=x} = \begin{bmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}$.
The point P(3, 5) in homogeneous coordinates is $\begin{bmatrix} 3 \\ 5 \\ 1 \end{bmatrix}$.
$$
\begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 3 \\ 5 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \times 3 + 1 \times 5 + 0 \times 1 \\ 1 \times 3 + 0 \times 5 + 0 \times 1 \\ 0 \times 3 + 0 \times 5 + 1 \times 1 \end{bmatrix} = \begin{bmatrix} 5 \\ 3 \\ 1 \end{bmatrix}
$$
The reflected point is (5, 3).

**Question 5:**
Explain why homogeneous coordinates are preferred for representing transformations in computer graphics.

**Answer:** Homogeneous coordinates allow all affine transformations (translation, rotation, scaling, reflection, shear) to be represented by a single matrix multiplication. This simplifies the process of combining multiple transformations into a single composite transformation by multiplying their matrices. Without homogeneous coordinates, translation would require vector addition, making it incompatible with matrix multiplication for rotation and scaling. This unified approach is crucial for efficient rendering pipelines in CAD systems.

## 10. Alignment with Course Outcomes

This topic directly addresses:

*   **CO2: Apply 2D transformation techniques, including rotation, reflection, scaling, and line and curve drawing algorithms in CAD software.**
    *   This entire module focuses on 2D transformations, with reflection being a key component. Understanding the mathematical principles of reflection is essential for applying these techniques in CAD software. The knowledge level for this outcome is K3 (Apply).

*   **CO1: Understand the historical developments and industrial applications of CAD, including key components and latest software developments. (Knowledge Level: K1, K2)**
    *   While the primary focus is on application (CO2), the discussion of applications in CAD (Section 7) provides context for understanding the industrial relevance and necessity of these transformations, contributing to K1 (Knowledge) and K2 (Understanding).

This module lays the groundwork for more complex geometric manipulations and analyses in later modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
