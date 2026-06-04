---
title: "Transformation of points and lines"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS"
module: "Module 2: Transformation of points and lines"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044634ef"
status: "completed"
scrapedAt: "2026-05-20T17:58:40.523Z"
---
This is a comprehensive study guide for the topic "Transformation of points and lines" within Module 2 of Computer-Aided Design and Analysis.

---

# Module 2: Transformation of Points and Lines

## Topic: Transformation of Points and Lines

**Course Outcomes Addressed:** CO2 (Apply 2D transformation techniques, including rotation, reflection, scaling, and line and curve drawing algorithms in CAD software.)

**Knowledge Level Addressed:** K3 (Apply)

---

### 1. Introduction to Transformations in CAD

Transformations are fundamental operations in Computer-Aided Design (CAD) that allow us to manipulate the position, orientation, size, and shape of geometric entities (points, lines, curves, surfaces, solids) within a 2D or 3D coordinate system. These operations are crucial for:

*   **Object Placement and Positioning:** Moving objects to their correct locations in a design.
*   **Resizing and Reshaping:** Modifying the dimensions of objects.
*   **Reorientation:** Changing the angle or view of objects.
*   **Creating Patterns:** Duplicating and arranging objects.
*   **Animation:** Simulating movement of objects over time.
*   **Viewing Transformations:** Changing the perspective from which a design is viewed.

**Key Concept:** Geometric transformations are typically represented using **matrix operations**. This allows for efficient computation and chaining of multiple transformations.

**Reference:**
*   **Groover & Zimmers:** Chapter 10 (Geometric Transformations) – Discusses the mathematical basis of transformations and their application in manufacturing.
*   **Zeid & Sivasubramanian:** Chapter 5 (Geometric Transformations) – Provides a detailed mathematical treatment of 2D and 3D transformations.
*   **Rogers & Adams:** Chapter 3 (Two-Dimensional Transformations) & Chapter 4 (Three-Dimensional Transformations) – A foundational text for understanding the mathematical underpinnings of computer graphics transformations.

---

### 2. Representation of Points and Lines

Before applying transformations, we need a way to represent points and lines mathematically.

#### 2.1 Representation of Points

A point in a 2D Cartesian coordinate system is represented by its (x, y) coordinates.

**Example:** A point P with coordinates (3, 5) can be represented as:
$P = \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 3 \\ 5 \end{bmatrix}$

#### 2.2 Representation of Lines

A line segment can be defined by two endpoints, say $P_1(x_1, y_1)$ and $P_2(x_2, y_2)$.

**Example:** A line segment with endpoints A(1, 2) and B(5, 7) can be represented by these two points.

---

### 3. Homogeneous Coordinates

To represent all affine transformations (translation, rotation, scaling, shear) using a single matrix multiplication, we use **homogeneous coordinates**.

*   A 2D point (x, y) is represented in homogeneous coordinates as $(x, y, 1)$. This can be written as a column vector:
    $P_{homo} = \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}$

*   A 3D point (x, y, z) is represented as $(x, y, z, 1)$.

The extra dimension (w = 1) allows us to incorporate translation into matrix multiplication, which is not possible with standard Cartesian coordinates.

**Key Concept:** Any transformation in homogeneous coordinates is represented by a $3 \times 3$ matrix for 2D and a $4 \times 4$ matrix for 3D.

**Reference:**
*   **Zeid & Sivasubramanian:** Chapter 5.2 (Homogeneous Coordinates) – Explains why and how homogeneous coordinates are used.
*   **Hearn, Baker & Carithers:** Chapter 2 (Mathematics of Computer Graphics) – Covers homogeneous coordinates and their role in transformations.

---

### 4. Basic 2D Geometric Transformations

These transformations are fundamental building blocks for more complex manipulations.

#### 4.1 Translation

Translation is the movement of an object from one position to another. In 2D, it involves adding a displacement vector $(t_x, t_y)$ to the coordinates of each point of the object.

*   **Cartesian Coordinates:**
    $x' = x + t_x$
    $y' = y + t_y$

*   **Homogeneous Coordinates:**
    $P'_{homo} = T \cdot P_{homo}$

    Where $P_{homo} = \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}$ and $T$ is the translation matrix:
    $T = \begin{bmatrix} 1 & 0 & t_x \\ 0 & 1 & t_y \\ 0 & 0 & 1 \end{bmatrix}$

    So, $\begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & t_x \\ 0 & 1 & t_y \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix} = \begin{bmatrix} x + t_x \\ y + t_y \\ 1 \end{bmatrix}$

**Example:** Translate the point P(2, 3) by $t_x=4$ and $t_y=-1$.
$P'_{homo} = \begin{bmatrix} 1 & 0 & 4 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 2 \\ 3 \\ 1 \end{bmatrix} = \begin{bmatrix} 2 + 4 \\ 3 - 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 6 \\ 2 \\ 1 \end{bmatrix}$
The new point is P'(6, 2).

**Important Point to Remember:** Translation is the only affine transformation that cannot be represented by a single matrix multiplication in standard Cartesian coordinates.

#### 4.2 Rotation

Rotation is the movement of an object around a fixed point (the pivot point) by a certain angle.

*   **Rotation about the Origin (0, 0):**
    Let $\theta$ be the angle of rotation (counter-clockwise is positive).

    *   **Cartesian Coordinates:**
        $x' = x \cos\theta - y \sin\theta$
        $y' = x \sin\theta + y \cos\theta$

    *   **Homogeneous Coordinates:**
        $P'_{homo} = R(\theta) \cdot P_{homo}$

        Where $R(\theta)$ is the rotation matrix:
        $R(\theta) = \begin{bmatrix} \cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{bmatrix}$

        So, $\begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} \cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix} = \begin{bmatrix} x \cos\theta - y \sin\theta \\ x \sin\theta + y \cos\theta \\ 1 \end{bmatrix}$

*   **Rotation about an Arbitrary Point ( $x_p, y_p$ ):**
    To rotate about an arbitrary point, we perform the following sequence of transformations:
    1.  Translate the pivot point to the origin: $T(-x_p, -y_p)$
    2.  Rotate about the origin by $\theta$: $R(\theta)$
    3.  Translate the pivot point back: $T(x_p, y_p)$

    The combined transformation matrix is $M_{rot\_pivot} = T(x_p, y_p) \cdot R(\theta) \cdot T(-x_p, -y_p)$.

    $M_{rot\_pivot} = \begin{bmatrix} 1 & 0 & x_p \\ 0 & 1 & y_p \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} \cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & -x_p \\ 0 & 1 & -y_p \\ 0 & 0 & 1 \end{bmatrix}$

    This matrix multiplication results in:
    $M_{rot\_pivot} = \begin{bmatrix} \cos\theta & -\sin\theta & x_p(1-\cos\theta) + y_p\sin\theta \\ \sin\theta & \cos\theta & y_p(1-\cos\theta) - x_p\sin\theta \\ 0 & 0 & 1 \end{bmatrix}$

**Example:** Rotate the point P(3, 4) by 90 degrees counter-clockwise around the point (1, 2).
Here, $x=3, y=4$, $\theta = 90^\circ$, $x_p=1, y_p=2$.
$\cos(90^\circ) = 0$, $\sin(90^\circ) = 1$.

$T(-1, -2) = \begin{bmatrix} 1 & 0 & -1 \\ 0 & 1 & -2 \\ 0 & 0 & 1 \end{bmatrix}$
$R(90^\circ) = \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}$
$T(1, 2) = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{bmatrix}$

$M_{rot\_pivot} = T(1, 2) \cdot R(90^\circ) \cdot T(-1, -2)$
$M_{rot\_pivot} = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & -1 \\ 0 & 1 & -2 \\ 0 & 0 & 1 \end{bmatrix}$
$M_{rot\_pivot} = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 0 & -1 & 2 \\ 1 & 0 & -2 \\ 0 & 0 & 1 \end{bmatrix}$
$M_{rot\_pivot} = \begin{bmatrix} 0 & -1 & 3 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}$

Now, apply this to P(3, 4):
$\begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 0 & -1 & 3 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 3 \\ 4 \\ 1 \end{bmatrix} = \begin{bmatrix} 0(3) - 1(4) + 3(1) \\ 1(3) + 0(4) + 0(1) \\ 0(3) + 0(4) + 1(1) \end{bmatrix} = \begin{bmatrix} -1 \\ 3 \\ 1 \end{bmatrix}$
The new point is P'(-1, 3).

**Important Point to Remember:** The order of transformations matters. Rotation about an arbitrary point is achieved by translating to the origin, rotating, and then translating back.

#### 4.3 Scaling

Scaling is the process of changing the size of an object. It involves multiplying the coordinates of each point by scaling factors $s_x$ and $s_y$ along the x and y axes, respectively.

*   **Scaling with respect to the Origin (0, 0):**
    *   **Cartesian Coordinates:**
        $x' = s_x \cdot x$
        $y' = s_y \cdot y$

    *   **Homogeneous Coordinates:**
        $P'_{homo} = S(s_x, s_y) \cdot P_{homo}$

        Where $S(s_x, s_y)$ is the scaling matrix:
        $S(s_x, s_y) = \begin{bmatrix} s_x & 0 & 0 \\ 0 & s_y & 0 \\ 0 & 0 & 1 \end{bmatrix}$

        So, $\begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} s_x & 0 & 0 \\ 0 & s_y & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix} = \begin{bmatrix} s_x \cdot x \\ s_y \cdot y \\ 1 \end{bmatrix}$

*   **Scaling with respect to an Arbitrary Point ( $x_p, y_p$ ):**
    Similar to rotation, this involves:
    1.  Translate the pivot point to the origin: $T(-x_p, -y_p)$
    2.  Scale about the origin: $S(s_x, s_y)$
    3.  Translate the pivot point back: $T(x_p, y_p)$

    The combined transformation matrix is $M_{scale\_pivot} = T(x_p, y_p) \cdot S(s_x, s_y) \cdot T(-x_p, -y_p)$.

    $M_{scale\_pivot} = \begin{bmatrix} 1 & 0 & x_p \\ 0 & 1 & y_p \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} s_x & 0 & 0 \\ 0 & s_y & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & -x_p \\ 0 & 1 & -y_p \\ 0 & 0 & 1 \end{bmatrix}$

    This matrix multiplication results in:
    $M_{scale\_pivot} = \begin{bmatrix} s_x & 0 & x_p(1-s_x) \\ 0 & s_y & y_p(1-s_y) \\ 0 & 0 & 1 \end{bmatrix}$

**Example:** Scale the point P(3, 4) by a factor of 2 in the x-direction and 0.5 in the y-direction with respect to the point (1, 1).
Here, $x=3, y=4$, $s_x=2, s_y=0.5$, $x_p=1, y_p=1$.

$T(-1, -1) = \begin{bmatrix} 1 & 0 & -1 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{bmatrix}$
$S(2, 0.5) = \begin{bmatrix} 2 & 0 & 0 \\ 0 & 0.5 & 0 \\ 0 & 0 & 1 \end{bmatrix}$
$T(1, 1) = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix}$

$M_{scale\_pivot} = T(1, 1) \cdot S(2, 0.5) \cdot T(-1, -1)$
$M_{scale\_pivot} = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 2 & 0 & 0 \\ 0 & 0.5 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & -1 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{bmatrix}$
$M_{scale\_pivot} = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 2 & 0 & -2 \\ 0 & 0.5 & -0.5 \\ 0 & 0 & 1 \end{bmatrix}$
$M_{scale\_pivot} = \begin{bmatrix} 2 & 0 & -1 \\ 0 & 0.5 & 0.5 \\ 0 & 0 & 1 \end{bmatrix}$

Now, apply this to P(3, 4):
$\begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 2 & 0 & -1 \\ 0 & 0.5 & 0.5 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 3 \\ 4 \\ 1 \end{bmatrix} = \begin{bmatrix} 2(3) + 0(4) - 1(1) \\ 0(3) + 0.5(4) + 0.5(1) \\ 0(3) + 0(4) + 1(1) \end{bmatrix} = \begin{bmatrix} 5 \\ 2.5 \\ 1 \end{bmatrix}$
The new point is P'(5, 2.5).

**Important Point to Remember:** If $s_x$ or $s_y$ is less than 1, the object shrinks. If greater than 1, it expands. If equal to 1, it remains unchanged.

#### 4.4 Reflection

Reflection is a transformation that flips an object across a line or a plane.

*   **Reflection about the x-axis:**
    $x' = x$
    $y' = -y$

    Matrix: $R_x = \begin{bmatrix} 1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$

*   **Reflection about the y-axis:**
    $x' = -x$
    $y' = y$

    Matrix: $R_y = \begin{bmatrix} -1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$

*   **Reflection about the origin:**
    This is equivalent to rotating by 180 degrees or reflecting about both axes.
    $x' = -x$
    $y' = -y$

    Matrix: $R_o = \begin{bmatrix} -1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$

*   **Reflection about an arbitrary line through the origin:**
    If the line makes an angle $\phi$ with the positive x-axis, the transformation matrix is:
    $M_{ref} = \begin{bmatrix} \cos(2\phi) & \sin(2\phi) & 0 \\ \sin(2\phi) & -\cos(2\phi) & 0 \\ 0 & 0 & 1 \end{bmatrix}$

**Example:** Reflect the point P(3, 4) about the x-axis.
$P'_{homo} = R_x \cdot P_{homo} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 3 \\ 4 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \\ -4 \\ 1 \end{bmatrix}$
The new point is P'(3, -4).

**Important Point to Remember:** Reflection is an "involutory" transformation, meaning applying it twice returns the object to its original position.

#### 4.5 Shear

Shear transformations distort the shape of an object by shifting points in a particular direction proportional to their distance from a reference line.

*   **Shear parallel to the x-axis:**
    $x' = x + sh_x \cdot y$
    $y' = y$

    Matrix: $Sh_x(sh_x) = \begin{bmatrix} 1 & sh_x & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$

*   **Shear parallel to the y-axis:**
    $x' = x$
    $y' = y + sh_y \cdot x$

    Matrix: $Sh_y(sh_y) = \begin{bmatrix} 1 & 0 & 0 \\ sh_y & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$

**Example:** Apply a shear to point P(3, 4) parallel to the x-axis with $sh_x = 2$.
$P'_{homo} = Sh_x(2) \cdot P_{homo} = \begin{bmatrix} 1 & 2 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 3 \\ 4 \\ 1 \end{bmatrix} = \begin{bmatrix} 1(3) + 2(4) \\ 0(3) + 1(4) \\ 0(3) + 0(4) + 1(1) \end{bmatrix} = \begin{bmatrix} 11 \\ 4 \\ 1 \end{bmatrix}$
The new point is P'(11, 4).

**Reference:**
*   **Ulrich & Eppinger:** While this book focuses on product development processes, the underlying geometric principles are assumed. Understanding these transformations is crucial for sketching and conceptual design phases.
*   **Chandrupatla & Belagundu:** Primarily focused on FEA, but the mathematical foundation for transformations is implicitly used in coordinate system transformations within elements.

---

### 5. Composite Transformations

Multiple transformations can be combined into a single, equivalent transformation matrix by multiplying their individual matrices. The order of multiplication is crucial.

**General Sequence for Transformations:**
1.  Translate object to origin.
2.  Perform rotation, scaling, or reflection.
3.  Translate object back to its original position.

The combined transformation matrix $M$ is obtained by multiplying the individual matrices in the correct order:
$M = T_{final} \cdot \text{Transformation} \cdot T_{initial}$

For example, to scale an object about a pivot point $(x_p, y_p)$ and then translate it by $(t_x, t_y)$:
$M = T(t_x, t_y) \cdot M_{scale\_pivot}$
$M = \begin{bmatrix} 1 & 0 & t_x \\ 0 & 1 & t_y \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} s_x & 0 & x_p(1-s_x) \\ 0 & s_y & y_p(1-s_y) \\ 0 & 0 & 1 \end{bmatrix}$

**Example:** Scale the point P(3, 4) by factor 2 about (1, 1) and then translate by (2, 3).
First, find the scaling matrix about (1, 1):
$M_{scale\_pivot} = \begin{bmatrix} 2 & 0 & 1(1-2) \\ 0 & 2 & 1(1-2) \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 2 & 0 & -1 \\ 0 & 2 & -1 \\ 0 & 0 & 1 \end{bmatrix}$

Now, combine with translation $T(2, 3) = \begin{bmatrix} 1 & 0 & 2 \\ 0 & 1 & 3 \\ 0 & 0 & 1 \end{bmatrix}$:
$M = T(2, 3) \cdot M_{scale\_pivot} = \begin{bmatrix} 1 & 0 & 2 \\ 0 & 1 & 3 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 2 & 0 & -1 \\ 0 & 2 & -1 \\ 0 & 0 & 1 \end{bmatrix}$
$M = \begin{bmatrix} 2 & 0 & 1 \\ 0 & 2 & 2 \\ 0 & 0 & 1 \end{bmatrix}$

Apply this combined matrix to P(3, 4):
$\begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 2 & 0 & 1 \\ 0 & 2 & 2 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 3 \\ 4 \\ 1 \end{bmatrix} = \begin{bmatrix} 2(3) + 0(4) + 1(1) \\ 0(3) + 2(4) + 2(1) \\ 0(3) + 0(4) + 1(1) \end{bmatrix} = \begin{bmatrix} 7 \\ 10 \\ 1 \end{bmatrix}$
The final point is P'(7, 10).

**Important Point to Remember:** When combining transformations, the order matters. For example, scaling followed by translation is different from translation followed by scaling. The matrix multiplication order reflects the sequence of operations applied to the point.

---

### 6. Transformations of Lines

To transform a line segment, we only need to transform its two endpoints. The transformed endpoints define the transformed line segment.

Let a line segment be defined by endpoints $P_1(x_1, y_1)$ and $P_2(x_2, y_2)$.
To transform the line segment, we apply the chosen transformation matrix $M$ to each endpoint:

$P'_1 = M \cdot P_{1, homo}$
$P'_2 = M \cdot P_{2, homo}$

The transformed line segment is defined by $P'_1$ and $P'_2$.

**Example:** Rotate the line segment with endpoints A(1, 2) and B(3, 5) by 90 degrees counter-clockwise about the origin.
$P_{1, homo} = \begin{bmatrix} 1 \\ 2 \\ 1 \end{bmatrix}$, $P_{2, homo} = \begin{bmatrix} 3 \\ 5 \\ 1 \end{bmatrix}$
Rotation matrix $R(90^\circ) = \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}$

For point A:
$A' = \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ 2 \\ 1 \end{bmatrix} = \begin{bmatrix} -2 \\ 1 \\ 1 \end{bmatrix}$, so A'(-2, 1).

For point B:
$B' = \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 3 \\ 5 \\ 1 \end{bmatrix} = \begin{bmatrix} -5 \\ 3 \\ 1 \end{bmatrix}$, so B'( -5, 3).

The transformed line segment has endpoints A'(-2, 1) and B'(-5, 3).

**Important Point to Remember:** Affine transformations preserve collinearity and parallelism. This means that if a set of points are collinear, their transformed counterparts will also be collinear. Similarly, parallel lines will remain parallel after an affine transformation.

---

### 7. Applications in CAD

*   **Drafting:** Moving, rotating, and resizing parts in a drawing.
*   **Assembly:** Positioning and orienting components within an assembly.
*   **Machining (CAM):** Transforming toolpaths for different operations or workpiece orientations.
*   **Animation:** Creating motion sequences by applying transformations over time.
*   **User Interface:** Zooming, panning, and rotating the view of a model.

**Reference:**
*   **McMahon & Browne:** Chapter 3 (Geometric Modelling) – Touches upon how geometric primitives are manipulated and transformed.
*   **Hearn, Baker & Carithers:** Chapters 3 & 4 provide comprehensive details on the implementation of these transformations in graphics pipelines.

---

### 8. Practice Questions and Answers

**Question 1:**
Translate the point P(5, 10) by $t_x = -3$ and $t_y = 7$. What are the new coordinates?

**Answer 1:**
Using the translation formula:
$x' = x + t_x = 5 + (-3) = 2$
$y' = y + t_y = 10 + 7 = 17$
The new coordinates are P'(2, 17).

**Question 2:**
Rotate the point Q(2, 3) by 180 degrees counter-clockwise about the origin. What are the new coordinates?

**Answer 2:**
Using the rotation formula with $\theta = 180^\circ$, $\cos(180^\circ) = -1$, $\sin(180^\circ) = 0$.
$x' = x \cos(180^\circ) - y \sin(180^\circ) = 2(-1) - 3(0) = -2$
$y' = x \sin(180^\circ) + y \cos(180^\circ) = 2(0) + 3(-1) = -3$
The new coordinates are Q'(-2, -3). This is the same as reflection through the origin.

**Question 3:**
Scale the line segment with endpoints A(1, 1) and B(4, 5) by a factor of 2 in the x-direction and 3 in the y-direction with respect to the origin. Find the new endpoints.

**Answer 3:**
Scaling matrix $S(2, 3) = \begin{bmatrix} 2 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{bmatrix}$.

For point A(1, 1):
$A'_{homo} = \begin{bmatrix} 2 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 2 \\ 3 \\ 1 \end{bmatrix}$. So, A'(2, 3).

For point B(4, 5):
$B'_{homo} = \begin{bmatrix} 2 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 4 \\ 5 \\ 1 \end{bmatrix} = \begin{bmatrix} 8 \\ 15 \\ 1 \end{bmatrix}$. So, B'(8, 15).
The new endpoints are A'(2, 3) and B'(8, 15).

**Question 4:**
Apply the following sequence of transformations to the point P(3, 2):
a) Translate by (1, 4)
b) Rotate by 90 degrees counter-clockwise about the origin
Find the final coordinates of the point.

**Answer 4:**
First, find the transformation matrix for translation $T(1, 4) = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 4 \\ 0 & 0 & 1 \end{bmatrix}$.
Next, find the transformation matrix for rotation by 90 degrees $R(90^\circ) = \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}$.

The combined transformation matrix is applied in the order specified: Rotate after Translate.
$M = R(90^\circ) \cdot T(1, 4)$
$M = \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 4 \\ 0 & 0 & 1 \end{bmatrix}$
$M = \begin{bmatrix} 0 & -1 & -4 \\ 1 & 0 & 1 \\ 0 & 0 & 1 \end{bmatrix}$

Now, apply this combined matrix to P(3, 2):
$P'_{homo} = M \cdot P_{homo} = \begin{bmatrix} 0 & -1 & -4 \\ 1 & 0 & 1 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 3 \\ 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 0(3) - 1(2) - 4(1) \\ 1(3) + 0(2) + 1(1) \\ 0(3) + 0(2) + 1(1) \end{bmatrix} = \begin{bmatrix} -6 \\ 4 \\ 1 \end{bmatrix}$
The final coordinates are P'(-6, 4).

**Important Note:** If the question stated "Rotate first, then translate", the order of matrix multiplication would be reversed: $M = T(1, 4) \cdot R(90^\circ)$.

---

### 9. Summary of Key Transformations and Matrices (2D)

| Transformation       | Matrix (Homogeneous Coordinates)                                                               |
| :------------------- | :------------------------------------------------------------------------------------------- |
| **Translation**      | $T(t_x, t_y) = \begin{bmatrix} 1 & 0 & t_x \\ 0 & 1 & t_y \\ 0 & 0 & 1 \end{bmatrix}$             |
| **Rotation (Origin)**| $R(\theta) = \begin{bmatrix} \cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{bmatrix}$ |
| **Scaling (Origin)** | $S(s_x, s_y) = \begin{bmatrix} s_x & 0 & 0 \\ 0 & s_y & 0 \\ 0 & 0 & 1 \end{bmatrix}$             |
| **Reflection (x-axis)**| $R_x = \begin{bmatrix} 1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$                    |
| **Reflection (y-axis)**| $R_y = \begin{bmatrix} -1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$                   |
| **Shear (x-dir)**    | $Sh_x(sh_x) = \begin{bmatrix} 1 & sh_x & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$              |
| **Shear (y-dir)**    | $Sh_y(sh_y) = \begin{bmatrix} 1 & 0 & 0 \\ sh_y & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$              |

---

### 10. Important Points to Remember

*   **Homogeneous Coordinates:** Essential for unifying all affine transformations under matrix multiplication.
*   **Order of Operations:** The order of transformations matters significantly when composing them. Matrix multiplication order reflects this sequence.
*   **Pivot Point:** Transformations like rotation and scaling are often performed relative to a specific point (pivot). This requires translating the pivot to the origin, performing the transformation, and then translating back.
*   **Line Transformations:** Transform the endpoints of a line segment to transform the entire segment.
*   **Affine Transformations:** Preserve collinearity and parallelism.
*   **Matrix Multiplication:** Understand how to multiply $3 \times 3$ matrices for 2D transformations.

---
This concludes the study notes for "Transformation of points and lines." Ensure you practice the matrix operations and understand the geometric intuition behind each transformation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
