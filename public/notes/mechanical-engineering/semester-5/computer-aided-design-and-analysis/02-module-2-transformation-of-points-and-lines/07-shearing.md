---
title: "shearing"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS"
module: "Module 2: Transformation of points and lines"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044634f5"
status: "completed"
scrapedAt: "2026-05-20T17:58:44.829Z"
---
# Computer Aided Design and Analysis - Module 2: Transformation of Points and Lines

## Topic: Shearing

### Learning Outcomes:

*   Understand the concept of shearing and its application in computer graphics.
*   Derive the transformation matrices for shearing in 2D and 3D.
*   Apply shearing transformations to points and lines.
*   Understand the effect of shearing on geometric shapes.
*   Relate shearing transformations to practical applications in CAD.

### 1. Introduction to Shearing

Shearing is a geometric transformation that skews the shape of an object along one or more axes. Imagine pushing the top of a rectangular box sideways while keeping the bottom fixed; this is essentially what shearing does. Unlike scaling, which changes the size uniformly or non-uniformly, shearing distorts the shape by shifting coordinates parallel to a reference plane or axis.

**Key Concept:** Shearing alters the relative positions of points without changing their order along a line, preserving collinearity.

**Reference:**
*   **Groover & Zimmers:** Discusses transformations as fundamental operations in CAD, including shearing as a way to deform objects.
*   **Zeid & Sivasubramanian:** Explains shearing as a linear transformation that can be represented by matrices, affecting coordinates based on a shearing factor.
*   **Rogers & Adams:** Provides a foundational understanding of geometric transformations and their matrix representations, including the algebraic derivation of shearing matrices.
*   **Hearn, Baker & Carithers:** Illustrates shearing with clear graphical examples, showing its impact on shapes like squares and rectangles.

### 2. Types of Shearing

Shearing can be performed along the x-axis, y-axis, or both.

#### 2.1 Shearing Parallel to the X-Axis

In this type of shearing, coordinates parallel to the y-axis are shifted by an amount proportional to their y-coordinate. The x-coordinate is changed, while the y-coordinate remains unchanged.

*   **Effect:** Objects are stretched or compressed horizontally based on their vertical position.
*   **Transformation Equations:**
    *   $x' = x + sh_x \cdot y$
    *   $y' = y$
    *   $z' = z$ (for 3D)

Where:
*   $(x, y, z)$ are the original coordinates.
*   $(x', y', z')$ are the transformed coordinates.
*   $sh_x$ is the shearing factor along the x-axis.

*   **Important Point:** The shearing factor $sh_x$ determines the magnitude and direction of the shear. If $sh_x > 0$, the shear is in the positive x-direction. If $sh_x < 0$, the shear is in the negative x-direction.

#### 2.2 Shearing Parallel to the Y-Axis

In this type of shearing, coordinates parallel to the x-axis are shifted by an amount proportional to their x-coordinate. The y-coordinate is changed, while the x-coordinate remains unchanged.

*   **Effect:** Objects are stretched or compressed vertically based on their horizontal position.
*   **Transformation Equations:**
    *   $x' = x$
    *   $y' = y + sh_y \cdot x$
    *   $z' = z$ (for 3D)

Where:
*   $(x, y, z)$ are the original coordinates.
*   $(x', y', z')$ are the transformed coordinates.
*   $sh_y$ is the shearing factor along the y-axis.

*   **Important Point:** The shearing factor $sh_y$ determines the magnitude and direction of the shear. If $sh_y > 0$, the shear is in the positive y-direction. If $sh_y < 0$, the shear is in the negative y-direction.

#### 2.3 Shearing Parallel to the Z-Axis (3D Only)

In 3D space, shearing can also occur parallel to the z-axis, affecting either the x or y coordinates based on their z-coordinate.

*   **Shearing Parallel to Z-axis, affecting X:**
    *   $x' = x + sh_z \cdot z$
    *   $y' = y$
    *   $z' = z$
*   **Shearing Parallel to Z-axis, affecting Y:**
    *   $x' = x$
    *   $y' = y + sh_z \cdot z$
    *   $z' = z$

### 3. Shearing in Homogeneous Coordinates

To represent shearing using matrix multiplication, we use homogeneous coordinates.

#### 3.1 2D Shearing Matrix

In homogeneous coordinates, a point $(x, y)$ is represented as $(x, y, 1)$.

*   **Shearing Parallel to X-Axis:**
    The transformation matrix is:
    $$
    \begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 1 & sh_x & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}
    $$
    This can be derived from the transformation equations:
    $x' = 1 \cdot x + sh_x \cdot y + 0 \cdot 1$
    $y' = 0 \cdot x + 1 \cdot y + 0 \cdot 1$
    $1 = 0 \cdot x + 0 \cdot y + 1 \cdot 1$

*   **Shearing Parallel to Y-Axis:**
    The transformation matrix is:
    $$
    \begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ sh_y & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}
    $$
    This can be derived from the transformation equations:
    $x' = 1 \cdot x + 0 \cdot y + 0 \cdot 1$
    $y' = sh_y \cdot x + 1 \cdot y + 0 \cdot 1$
    $1 = 0 \cdot x + 0 \cdot y + 1 \cdot 1$

#### 3.2 3D Shearing Matrix

In homogeneous coordinates, a point $(x, y, z)$ is represented as $(x, y, z, 1)$.

*   **Shearing Parallel to X-axis, affecting X:**
    $$
    \begin{bmatrix} x' \\ y' \\ z' \\ 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & sh_z & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \\ 1 \end{bmatrix}
    $$
    *Note:* Often, the shearing factor might be denoted $sh_{zx}$ to indicate shear along x due to z. For simplicity, we use $sh_z$ here, implying the factor responsible for shearing along the x-axis.

*   **Shearing Parallel to Y-axis, affecting Y:**
    $$
    \begin{bmatrix} x' \\ y' \\ z' \\ 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & sh_z & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \\ 1 \end{bmatrix}
    $$
    *Note:* Similarly, $sh_{zy}$ would denote shear along y due to z.

**Reference:**
*   **Rogers & Adams:** Provides a comprehensive treatment of homogeneous coordinates and their application in representing transformations, including shearing.
*   **Hearn, Baker & Carithers:** Explains how homogeneous coordinates simplify the combination of different transformations into single matrix operations.

### 4. Applying Shearing to Lines

A line is defined by two endpoints. To shear a line, we simply apply the shearing transformation to its endpoints. The transformed endpoints define the new, sheared line.

*   **Algorithm:**
    1.  Define the line by its endpoints, $P_1 = (x_1, y_1)$ and $P_2 = (x_2, y_2)$.
    2.  Apply the shearing transformation matrix to $P_1$ to get $P'_1 = (x'_1, y'_1)$.
    3.  Apply the same shearing transformation matrix to $P_2$ to get $P'_2 = (x'_2, y'_2)$.
    4.  The sheared line is defined by the endpoints $P'_1$ and $P'_2$.

**Example:**
Consider a line segment with endpoints $P_1 = (1, 2)$ and $P_2 = (4, 5)$. Apply a shear parallel to the x-axis with $sh_x = 0.5$.

*   **Transformation Matrix (2D, parallel to X):**
    $$
    \begin{bmatrix} 1 & 0.5 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}
    $$

*   **Transforming P1:**
    $$
    \begin{bmatrix} x'_1 \\ y'_1 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 & 0.5 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \cdot 1 + 0.5 \cdot 2 + 0 \cdot 1 \\ 0 \cdot 1 + 1 \cdot 2 + 0 \cdot 1 \\ 0 \cdot 1 + 0 \cdot 2 + 1 \cdot 1 \end{bmatrix} = \begin{bmatrix} 2 \\ 2 \\ 1 \end{bmatrix}
    $$
    So, $P'_1 = (2, 2)$.

*   **Transforming P2:**
    $$
    \begin{bmatrix} x'_2 \\ y'_2 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 & 0.5 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 4 \\ 5 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \cdot 4 + 0.5 \cdot 5 + 0 \cdot 1 \\ 0 \cdot 4 + 1 \cdot 5 + 0 \cdot 1 \\ 0 \cdot 4 + 0 \cdot 5 + 1 \cdot 1 \end{bmatrix} = \begin{bmatrix} 6.5 \\ 5 \\ 1 \end{bmatrix}
    $$
    So, $P'_2 = (6.5, 5)$.

The sheared line has endpoints $(2, 2)$ and $(6.5, 5)$.

**Reference:**
*   **Hearn, Baker & Carithers:** Demonstrates how transformations, including shearing, are applied to line segments by transforming their endpoints.

### 5. Effect of Shearing on Geometric Shapes

Shearing transforms simple shapes into other, often more complex, shapes.

*   **Square:** A square sheared parallel to one of its axes becomes a parallelogram.
*   **Rectangle:** A rectangle also becomes a parallelogram.
*   **Circle:** A circle becomes an ellipse. This is because the uniform radial symmetry is distorted.
*   **Polygon:** A polygon generally transforms into another polygon with the same number of vertices, but with distorted angles and side lengths.

**Reference:**
*   **Rogers & Adams:** Analyzes the effect of linear transformations on geometric primitives, showing how circles transform into ellipses under non-uniform scaling or shearing.
*   **Zeid & Sivasubramanian:** Explains how the Jacobian of the transformation matrix indicates the change in area or volume, which is 1 for pure shearing, meaning area is preserved.

### 6. Applications of Shearing in CAD

Shearing is not as commonly used for direct shape modification as scaling or rotation, but it plays a role in:

*   **Animation:** Creating effects like wind or fluid motion where objects are skewed.
*   **Simulations:** In Finite Element Analysis (FEA), shearing is a fundamental component of strain. While FEA itself is a later module, understanding shearing in graphics is a precursor to understanding how forces cause deformation. The notes on FEA by **Chandrupatla & Belagundu** and **Logan** will delve into stress and strain tensors, where shearing strain is a critical component.
*   **Data Visualization:** Skewing axes or data points can sometimes reveal patterns or trends.
*   **Special Effects:** In graphics, it can be used for aesthetic purposes or to create specific visual styles.
*   **Transforming Coordinate Systems:** Shearing can be part of a more complex transformation sequence to align objects or coordinate systems.

**Reference:**
*   **Ulrich & Eppinger:** While focused on product development, it touches upon how geometric modeling is foundational. Transformations like shearing are tools within this modeling process, enabling design variations.
*   **McMahon & Browne:** Discusses the broader context of CAD/CAM, where transformations are essential for manipulating geometry for manufacturing purposes.

### 7. Practice Questions and Exercises

**Question 1:**
A point $P=(3, 4)$ is to be sheared parallel to the y-axis with a shearing factor $sh_y = 2$. What are the new coordinates of the point $P'$?

**Answer 1:**
Using the transformation equations:
$x' = x$
$y' = y + sh_y \cdot x$

$x' = 3$
$y' = 4 + 2 \cdot 3 = 4 + 6 = 10$

So, the new coordinates are $P'=(3, 10)$.

**Question 2:**
Given a square with vertices at $(0,0), (2,0), (2,2), (0,2)$. Apply a shear parallel to the x-axis with $sh_x = 0.5$. What are the new coordinates of the vertices? Describe the resulting shape.

**Answer 2:**
We need to transform each vertex using the matrix:
$$
\begin{bmatrix} 1 & 0.5 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}
$$

*   **Vertex (0,0):**
    $$
    \begin{bmatrix} 1 & 0.5 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} \implies (0,0)
    $$
*   **Vertex (2,0):**
    $$
    \begin{bmatrix} 1 & 0.5 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 2 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 2 \\ 0 \\ 1 \end{bmatrix} \implies (2,0)
    $$
*   **Vertex (2,2):**
    $$
    \begin{bmatrix} 1 & 0.5 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 2 \\ 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \cdot 2 + 0.5 \cdot 2 \\ 1 \cdot 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 2 \\ 1 \end{bmatrix} \implies (3,2)
    $$
*   **Vertex (0,2):**
    $$
    \begin{bmatrix} 1 & 0.5 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 0.5 \cdot 2 \\ 1 \cdot 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \\ 1 \end{bmatrix} \implies (1,2)
    $$

The new coordinates are $(0,0), (2,0), (3,2), (1,2)$. The resulting shape is a parallelogram.

**Question 3:**
Derive the 2D homogeneous coordinate transformation matrix for shearing parallel to the x-axis.

**Answer 3:**
Shearing parallel to the x-axis means the x-coordinate is shifted by an amount proportional to the y-coordinate. The transformation equations are:
$x' = x + sh_x \cdot y$
$y' = y$

In homogeneous coordinates $(x, y, 1)$:
$x' = 1 \cdot x + sh_x \cdot y + 0 \cdot 1$
$y' = 0 \cdot x + 1 \cdot y + 0 \cdot 1$
$1 = 0 \cdot x + 0 \cdot y + 1 \cdot 1$

This can be represented by the matrix multiplication:
$$
\begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 1 & sh_x & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}
$$
Thus, the transformation matrix is:
$$
\begin{bmatrix} 1 & sh_x & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}
$$

### 8. Important Points to Remember

*   Shearing distorts shapes by shifting coordinates parallel to an axis.
*   It preserves collinearity and area.
*   Shearing parallel to the x-axis: $x' = x + sh_x \cdot y$, $y' = y$.
*   Shearing parallel to the y-axis: $x' = x$, $y' = y + sh_y \cdot x$.
*   Homogeneous coordinates are used to represent shearing as a matrix multiplication.
*   The 2D shearing matrices are $\begin{bmatrix} 1 & sh_x & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$ (parallel to x) and $\begin{bmatrix} 1 & 0 & 0 \\ sh_y & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$ (parallel to y).
*   Shearing a line involves shearing its endpoints.
*   A circle sheared becomes an ellipse; a square or rectangle becomes a parallelogram.

### 9. Alignment with Course Outcomes

*   **CO1:** Understand the historical developments and industrial applications of CAD, including key components and latest software developments. (Knowledge Level: K1, K2)
    *   Shearing is a fundamental geometric transformation used in CAD software for various modeling and animation tasks, contributing to the understanding of CAD's capabilities.
*   **CO2:** Apply 2D transformation techniques, including rotation, reflection, scaling, and line and curve drawing algorithms in CAD software. (Knowledge Level: K3)
    *   This topic directly addresses the application of shearing as a 2D transformation technique, including matrix representation and application to points and lines.
*   **CO3:** Apply 3D graphics and solid modeling techniques, such as Bezier and B-spline curves, and their application in creating complex geometric forms. (Knowledge Level: K3)
    *   While this topic primarily focuses on 2D and basic 3D shearing, the underlying principles of linear transformations and matrix operations are foundational for more complex 3D modeling and the transformations applied to curves and surfaces.
*   **CO4:** Understand finite element analysis (FEA) and finite volume methods (FVM) including discretization, formulation, and boundary condition implementation for simple structural and fluid flow problems. (Knowledge Level: K2)
    *   Shearing is directly related to the concept of shear strain in FEA. Understanding geometric shearing is a prerequisite to understanding how applied forces cause material deformation (stress and strain), which is the core of FEA. The notes on Chandrupatla & Belagundu and Logan are relevant here, as shearing is a key component of deformation.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
