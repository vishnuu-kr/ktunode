---
title: "Geometric transformations - 2D and 3D basic transformations - Translation, Rotation, Scaling, Reflection and Shearing, Matrix representations and homogeneous coordinates."
subject: "COMPUTER GRAPHICS"
module: "Module 2: Geometric transformations "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cd53"
status: "completed"
scrapedAt: "2026-05-20T17:24:28.679Z"
---
# Computer Graphics: Module 2 - Geometric Transformations

This module explores the fundamental geometric transformations used to manipulate objects in 2D and 3D computer graphics. We will cover basic transformations like translation, rotation, scaling, reflection, and shearing, along with their matrix representations and the concept of homogeneous coordinates for efficient composition.

---

## Learning Outcomes:

Upon completion of this module, you will be able to:

*   Understand and apply 2D and 3D basic geometric transformations: translation, rotation, scaling, reflection, and shearing.
*   Represent these transformations using matrices.
*   Utilize homogeneous coordinates to combine transformations efficiently.
*   Perform composite transformations by multiplying matrices.
*   Understand the application of these transformations in various graphics contexts.

---

## 1. Introduction to Geometric Transformations

Geometric transformations are operations that alter the position, orientation, scale, or shape of geometric objects (points, lines, polygons, etc.) in a coordinate system. They are the building blocks of animation, modeling, and rendering in computer graphics.

---

## 2. Basic 2D Transformations

### 2.1 Translation

**Definition:** Translation is the process of moving an object from one position to another without changing its orientation or size.

**Concept:** A translation is defined by a translation vector $(tx, ty)$ which specifies the amount of shift along the x-axis and y-axis respectively.

**Mathematical Representation:**
A point $P = (x, y)$ is translated to a new point $P' = (x', y')$ using the following equations:

$x' = x + tx$
$y' = y + ty$

**Matrix Representation (Standard Coordinates):**
In standard 2D coordinates, translation cannot be represented by a single matrix multiplication because it involves addition. However, we will see how homogeneous coordinates solve this later.

**Example:**
Translate the point $(2, 3)$ by $(5, -2)$.
$x' = 2 + 5 = 7$
$y' = 3 + (-2) = 1$
The new point is $(7, 1)$.

---

### 2.2 Rotation

**Definition:** Rotation is the process of turning an object around a fixed point called the pivot point.

**Concept:**
*   **2D Rotation:** In 2D, rotation is typically performed around the origin $(0, 0)$ or a specified pivot point. The angle of rotation, $\theta$, determines the extent of the turn.
*   **Positive Angle:** Counter-clockwise rotation.
*   **Negative Angle:** Clockwise rotation.

**Mathematical Representation (Rotation about the Origin):**
A point $P = (x, y)$ rotated by an angle $\theta$ counter-clockwise about the origin results in a point $P' = (x', y')$, given by:

$x' = x \cos(\theta) - y \sin(\theta)$
$y' = x \sin(\theta) + y \cos(\theta)$

**Matrix Representation (Rotation about the Origin):**

$$
\begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} \cos(\theta) & -\sin(\theta) \\ \sin(\theta) & \cos(\theta) \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}
$$

**Rotation about an Arbitrary Pivot Point $(px, py)$:**
To rotate around a pivot point other than the origin, we perform the following steps:
1.  Translate the object so that the pivot point moves to the origin.
2.  Rotate the object around the origin.
3.  Translate the object back by the inverse of the first translation.

---

### 2.3 Scaling

**Definition:** Scaling is the process of changing the size of an object.

**Concept:**
*   **Scaling Factors:** Scaling is defined by scaling factors $(sx, sy)$ along the x-axis and y-axis respectively.
*   If $sx > 1$ or $sy > 1$, the object is enlarged.
*   If $0 < sx < 1$ or $0 < sy < 1$, the object is reduced.
*   If $sx = 1$ and $sy = 1$, the object remains unchanged.
*   **Uniform Scaling:** $sx = sy$.
*   **Non-uniform Scaling:** $sx \neq sy$.

**Mathematical Representation (Scaling about the Origin):**
A point $P = (x, y)$ scaled by factors $(sx, sy)$ about the origin results in a point $P' = (x', y')$:

$x' = x \cdot sx$
$y' = y \cdot sy$

**Matrix Representation (Scaling about the Origin):**

$$
\begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} sx & 0 \\ 0 & sy \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}
$$

**Scaling about an Arbitrary Pivot Point $(px, py)$:**
Similar to rotation, we translate to the origin, scale, and then translate back.

---

### 2.4 Reflection

**Definition:** Reflection is the process of creating a mirror image of an object across a line or plane.

**Concept:**
*   **Reflection about the x-axis:** $(x, y) \to (x, -y)$.
*   **Reflection about the y-axis:** $(x, y) \to (-x, y)$.
*   **Reflection about the origin:** $(x, y) \to (-x, -y)$.
*   **Reflection about the line y = x:** $(x, y) \to (y, x)$.

**Matrix Representation (Reflection about axes/origin):**

*   **About x-axis:**
    $$
    \begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}
    $$
*   **About y-axis:**
    $$
    \begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} -1 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}
    $$
*   **About the origin:**
    $$
    \begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}
    $$
*   **About y = x:**
    $$
    \begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}
    $$

---

### 2.5 Shearing

**Definition:** Shearing is a transformation that slants the shape of an object. One or more axes are shifted in proportion to the coordinate values along those axes.

**Concept:**
*   **X-Shear:** Moves points parallel to the x-axis. The displacement is proportional to the y-coordinate.
*   **Y-Shear:** Moves points parallel to the y-axis. The displacement is proportional to the x-coordinate.

**Mathematical Representation:**

*   **X-Shear:**
    $x' = x + sh_x \cdot y$
    $y' = y$
    where $sh_x$ is the shear factor.

*   **Y-Shear:**
    $x' = x$
    $y' = y + sh_y \cdot x$
    where $sh_y$ is the shear factor.

**Matrix Representation:**

*   **X-Shear:**
    $$
    \begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} 1 & sh_x \\ 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}
    $$

*   **Y-Shear:**
    $$
    \begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ sh_y & 1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}
    $$

**Example:**
Shear the point $(2, 3)$ by $sh_x = 0.5$.
$x' = 2 + 0.5 \cdot 3 = 2 + 1.5 = 3.5$
$y' = 3$
The new point is $(3.5, 3)$.

---

## 3. Basic 3D Transformations

The concepts of translation, rotation, scaling, reflection, and shearing extend to 3D, with an additional axis (z-axis) and corresponding transformations.

### 3.1 Translation (3D)

**Mathematical Representation:**
A point $P = (x, y, z)$ is translated to $P' = (x', y', z')$ using a translation vector $(tx, ty, tz)$:

$x' = x + tx$
$y' = y + ty$
$z' = z + tz$

**Matrix Representation (Standard Coordinates):**
Similar to 2D, direct matrix multiplication isn't possible for translation.

### 3.2 Rotation (3D)

**Concept:** In 3D, rotation is performed around an *axis* of rotation. Common axes are the x, y, and z axes.

**Mathematical Representation (Rotation about the Axes):**

*   **Rotation about the z-axis by angle $\theta$:**
    $x' = x \cos(\theta) - y \sin(\theta)$
    $y' = x \sin(\theta) + y \cos(\theta)$
    $z' = z$

    **Matrix Representation (Rotation about z-axis):**
    $$
    \begin{bmatrix} x' \\ y' \\ z' \end{bmatrix} = \begin{bmatrix} \cos(\theta) & -\sin(\theta) & 0 \\ \sin(\theta) & \cos(\theta) & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix}
    $$

*   **Rotation about the x-axis by angle $\theta$:**
    $x' = x$
    $y' = y \cos(\theta) - z \sin(\theta)$
    $z' = y \sin(\theta) + z \cos(\theta)$

    **Matrix Representation (Rotation about x-axis):**
    $$
    \begin{bmatrix} x' \\ y' \\ z' \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & \cos(\theta) & -\sin(\theta) \\ 0 & \sin(\theta) & \cos(\theta) \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix}
    $$

*   **Rotation about the y-axis by angle $\theta$:**
    $x' = x \cos(\theta) + z \sin(\theta)$
    $y' = y$
    $z' = -x \sin(\theta) + z \cos(\theta)$

    **Matrix Representation (Rotation about y-axis):**
    $$
    \begin{bmatrix} x' \\ y' \\ z' \end{bmatrix} = \begin{bmatrix} \cos(\theta) & 0 & \sin(\theta) \\ 0 & 1 & 0 \\ -\sin(\theta) & 0 & \cos(\theta) \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix}
    $$

**Rotation about an Arbitrary Axis:** This is more complex and involves transforming the coordinate system, rotating, and then transforming back.

### 3.3 Scaling (3D)

**Mathematical Representation:**
A point $P = (x, y, z)$ scaled by factors $(sx, sy, sz)$ about the origin results in $P' = (x', y', z')$:

$x' = x \cdot sx$
$y' = y \cdot sy$
$z' = z \cdot sz$

**Matrix Representation (Scaling about the Origin):**

$$
\begin{bmatrix} x' \\ y' \\ z' \end{bmatrix} = \begin{bmatrix} sx & 0 & 0 \\ 0 & sy & 0 \\ 0 & 0 & sz \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix}
$$

### 3.4 Reflection (3D)

**Concept:** Reflection across planes.

*   **Reflection across the xy-plane:** $(x, y, z) \to (x, y, -z)$
*   **Reflection across the xz-plane:** $(x, y, z) \to (x, -y, z)$
*   **Reflection across the yz-plane:** $(x, y, z) \to (-x, y, z)$

**Matrix Representation (Reflection across planes):**

*   **Across xy-plane:**
    $$
    \begin{bmatrix} x' \\ y' \\ z' \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix}
    $$

### 3.5 Shearing (3D)

**Concept:** Similar to 2D, shearing can be applied along axes. For example, shearing parallel to the xy-plane where the displacement is proportional to the z-coordinate.

**Mathematical Representation (Example - Shear parallel to xy-plane):**
$x' = x + sh_{xy} \cdot z$
$y' = y + sh_{yx} \cdot z$
$z' = z$

**Matrix Representation (Example - Shear parallel to xy-plane):**

$$
\begin{bmatrix} x' \\ y' \\ z' \end{bmatrix} = \begin{bmatrix} 1 & 0 & sh_{xy} \\ 0 & 1 & sh_{yx} \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix}
$$
(Note: There are various forms of 3D shearing.)

---

## 4. Matrix Representations and Homogeneous Coordinates

### 4.1 The Problem with Direct Matrix Multiplication for Translation

As we've seen, translation involves addition, which cannot be directly represented by a standard matrix multiplication of a point vector $(x, y)$ or $(x, y, z)$. This makes it difficult to combine multiple transformations, especially if translation is involved.

### 4.2 Homogeneous Coordinates

**Definition:** Homogeneous coordinates extend a standard $n$-dimensional coordinate system to $(n+1)$-dimensional coordinates by adding an extra coordinate. For 2D, we use 3 coordinates $(x, y, w)$, and for 3D, we use 4 coordinates $(x, y, z, w)$.

**Concept:**
*   A 2D point $(x, y)$ is represented in homogeneous coordinates as $(x, y, 1)$.
*   A 3D point $(x, y, z)$ is represented in homogeneous coordinates as $(x, y, z, 1)$.

The extra coordinate $w$ allows us to represent translations as matrix multiplications.

**Conversion from Homogeneous to Cartesian Coordinates:**
To convert from homogeneous coordinates $(x_h, y_h, w_h)$ back to Cartesian coordinates $(x, y)$:
If $w_h \neq 0$, then $x = x_h / w_h$ and $y = y_h / w_h$.
If $w_h = 0$, it represents a point at infinity.

### 4.3 Matrix Representations using Homogeneous Coordinates

Now, all basic 2D transformations (translation, rotation, scaling, reflection, shearing) can be represented by $3 \times 3$ matrices, and 3D transformations by $4 \times 4$ matrices.

#### 4.3.1 2D Transformations in Homogeneous Coordinates ($3 \times 3$ matrices)

*   **Translation by $(tx, ty)$:**
    $$
    T_{2D}(tx, ty) = \begin{bmatrix} 1 & 0 & tx \\ 0 & 1 & ty \\ 0 & 0 & 1 \end{bmatrix}
    $$
    To transform a point $P = (x, y)$:
    $$
    \begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & tx \\ 0 & 1 & ty \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix} = \begin{bmatrix} x + tx \\ y + ty \\ 1 \end{bmatrix}
    $$

*   **Rotation about the Origin by $\theta$:**
    $$
    R_{2D}(\theta) = \begin{bmatrix} \cos(\theta) & -\sin(\theta) & 0 \\ \sin(\theta) & \cos(\theta) & 0 \\ 0 & 0 & 1 \end{bmatrix}
    $$

*   **Scaling about the Origin by $(sx, sy)$:**
    $$
    S_{2D}(sx, sy) = \begin{bmatrix} sx & 0 & 0 \\ 0 & sy & 0 \\ 0 & 0 & 1 \end{bmatrix}
    $$

*   **Reflection about the x-axis:**
    $$
    Ref_{x} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 1 \end{bmatrix}
    $$

*   **X-Shear by $sh_x$:**
    $$
    Sh_{x}(sh_x) = \begin{bmatrix} 1 & sh_x & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}
    $$

#### 4.3.2 3D Transformations in Homogeneous Coordinates ($4 \times 4$ matrices)

*   **Translation by $(tx, ty, tz)$:**
    $$
    T_{3D}(tx, ty, tz) = \begin{bmatrix} 1 & 0 & 0 & tx \\ 0 & 1 & 0 & ty \\ 0 & 0 & 1 & tz \\ 0 & 0 & 0 & 1 \end{bmatrix}
    $$
    To transform a point $P = (x, y, z)$:
    $$
    \begin{bmatrix} x' \\ y' \\ z' \\ 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 & tx \\ 0 & 1 & 0 & ty \\ 0 & 0 & 1 & tz \\ 0 & 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \\ 1 \end{bmatrix} = \begin{bmatrix} x + tx \\ y + ty \\ z + tz \\ 1 \end{bmatrix}
    $$

*   **Rotation about the z-axis by $\theta$:**
    $$
    R_{z}(\theta) = \begin{bmatrix} \cos(\theta) & -\sin(\theta) & 0 & 0 \\ \sin(\theta) & \cos(\theta) & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}
    $$

*   **Scaling about the Origin by $(sx, sy, sz)$:**
    $$
    S_{3D}(sx, sy, sz) = \begin{bmatrix} sx & 0 & 0 & 0 \\ 0 & sy & 0 & 0 \\ 0 & 0 & sz & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}
    $$

---

## 5. Composite Transformations

**Concept:** Composite transformations are achieved by multiplying their individual transformation matrices. The order of multiplication is crucial as matrix multiplication is not commutative.

**Rule:** If you have a sequence of transformations $T_1, T_2, T_3$ applied to a point $P$, the resulting point $P'$ is:

$P' = T_3 \cdot T_2 \cdot T_1 \cdot P$

The composite transformation matrix $M$ is:

$M = T_3 \cdot T_2 \cdot T_1$

And then $P' = M \cdot P$.

**Example (2D Composite Transformation):**
Translate a point $(x, y)$ by $(tx, ty)$, then rotate it by $\theta$ about the origin.

1.  **Translation Matrix:**
    $$
    T = \begin{bmatrix} 1 & 0 & tx \\ 0 & 1 & ty \\ 0 & 0 & 1 \end{bmatrix}
    $$
2.  **Rotation Matrix:**
    $$
    R = \begin{bmatrix} \cos(\theta) & -\sin(\theta) & 0 \\ \sin(\theta) & \cos(\theta) & 0 \\ 0 & 0 & 1 \end{bmatrix}
    $$
3.  **Composite Matrix (Rotation then Translation):**
    $$
    M = T \cdot R = \begin{bmatrix} 1 & 0 & tx \\ 0 & 1 & ty \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} \cos(\theta) & -\sin(\theta) & 0 \\ \sin(\theta) & \cos(\theta) & 0 \\ 0 & 0 & 1 \end{bmatrix}
    $$
    $$
    M = \begin{bmatrix} \cos(\theta) & -\sin(\theta) & tx \\ \sin(\theta) & \cos(\theta) & ty \\ 0 & 0 & 1 \end{bmatrix}
    $$

    Applying this to a point $(x, y)$:
    $$
    \begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} \cos(\theta) & -\sin(\theta) & tx \\ \sin(\theta) & \cos(\theta) & ty \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix} = \begin{bmatrix} x\cos(\theta) - y\sin(\theta) + tx \\ x\sin(\theta) + y\cos(\theta) + ty \\ 1 \end{bmatrix}
    $$
    This matches performing translation first and then rotation.

**Important Note on Order:** If we wanted to rotate first, then translate, the composite matrix would be $M' = R \cdot T$. The resulting transformations would be different.

### 5.1 Rotation about an Arbitrary Point $(px, py)$ using Composite Transformations

1.  **Translate** the pivot point to the origin: $T(-px, -py)$
2.  **Rotate** around the origin: $R(\theta)$
3.  **Translate** back to the original pivot position: $T(px, py)$

The composite transformation matrix is:
$$
M = T(px, py) \cdot R(\theta) \cdot T(-px, -py)
$$

---

## 6. Practice Questions and Exercises

**Question 1 (2D Translation):**
Translate the triangle with vertices A=(1,1), B=(3,1), and C=(2,3) by the vector (2, -1). Find the new coordinates of the vertices.

**Question 2 (2D Rotation):**
Rotate the point P=(4, 0) by 90 degrees counter-clockwise around the origin. What are the new coordinates?

**Question 3 (2D Scaling):**
Scale the rectangle with vertices (1,1), (4,1), (4,3), (1,3) by a factor of 2 along the x-axis and 0.5 along the y-axis, with the center of scaling at the origin. Find the new coordinates.

**Question 4 (2D Composite Transformation):**
Apply the following transformations to the point (2, 3) in the given order:
a. Scale by (2, 1)
b. Rotate by 45 degrees counter-clockwise around the origin
c. Translate by (3, 2)
Find the final coordinates of the point.

**Question 5 (3D Rotation):**
Rotate the point P=(1, 0, 0) by 90 degrees counter-clockwise around the z-axis. What are the new coordinates?

**Question 6 (Homogeneous Coordinates):**
Represent the 2D point (5, 2) in homogeneous coordinates.

**Question 7 (Matrix Multiplication):**
Given point P = (2, 3).
Rotation matrix for 90 degrees counter-clockwise:
$$
R = \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}
$$
Translation matrix by (1, 2):
$$
T = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{bmatrix}
$$
Calculate the composite transformation $M = T \cdot R$. Then, apply $M$ to point $P$ to find the transformed point $P'$.

---

## 7. Answers to Practice Questions

**Answer 1:**
Original vertices: A=(1,1), B=(3,1), C=(2,3)
Translation vector: (2, -1)
A' = (1+2, 1-1) = (3, 0)
B' = (3+2, 1-1) = (5, 0)
C' = (2+2, 3-1) = (4, 2)

**Answer 2:**
Point P=(4, 0). Angle $\theta = 90^\circ$. $\cos(90^\circ)=0$, $\sin(90^\circ)=1$.
$x' = 4 \cos(90^\circ) - 0 \sin(90^\circ) = 4(0) - 0(1) = 0$
$y' = 4 \sin(90^\circ) + 0 \cos(90^\circ) = 4(1) + 0(0) = 4$
New coordinates: (0, 4)

**Answer 3:**
Original vertices: (1,1), (4,1), (4,3), (1,3)
Scaling factors: $sx=2$, $sy=0.5$.
Using matrix multiplication with homogeneous coordinates:
$$
\begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 2 & 0 & 0 \\ 0 & 0.5 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}
$$
(1,1) -> (2, 0.5)
(4,1) -> (8, 0.5)
(4,3) -> (8, 1.5)
(1,3) -> (2, 1.5)

**Answer 4:**
Point P=(2, 3).
1.  **Scaling:** $S = \begin{bmatrix} 2 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$.
    $P_1 = S \cdot P = \begin{bmatrix} 2 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 2 \\ 3 \\ 1 \end{bmatrix} = \begin{bmatrix} 4 \\ 3 \\ 1 \end{bmatrix}$. Point is (4, 3).
2.  **Rotation:** $R = \begin{bmatrix} \cos(45^\circ) & -\sin(45^\circ) & 0 \\ \sin(45^\circ) & \cos(45^\circ) & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 0.707 & -0.707 & 0 \\ 0.707 & 0.707 & 0 \\ 0 & 0 & 1 \end{bmatrix}$.
    $P_2 = R \cdot P_1 = \begin{bmatrix} 0.707 & -0.707 & 0 \\ 0.707 & 0.707 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 4 \\ 3 \\ 1 \end{bmatrix} = \begin{bmatrix} 4(0.707) - 3(0.707) \\ 4(0.707) + 3(0.707) \\ 1 \end{bmatrix} = \begin{bmatrix} 0.707 \\ 4.949 \\ 1 \end{bmatrix}$. Point is (0.707, 4.949).
3.  **Translation:** $T = \begin{bmatrix} 1 & 0 & 3 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{bmatrix}$.
    $P_3 = T \cdot P_2 = \begin{bmatrix} 1 & 0 & 3 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 0.707 \\ 4.949 \\ 1 \end{bmatrix} = \begin{bmatrix} 0.707 + 3 \\ 4.949 + 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 3.707 \\ 6.949 \\ 1 \end{bmatrix}$.
    Final coordinates: (3.707, 6.949).

**Answer 5:**
Point P=(1, 0, 0). Rotate 90 degrees counter-clockwise about z-axis. $\theta = 90^\circ$.
$$
\begin{bmatrix} x' \\ y' \\ z' \end{bmatrix} = \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}
$$
New coordinates: (0, 1, 0)

**Answer 6:**
Homogeneous coordinates for (5, 2) are (5, 2, 1).

**Answer 7:**
Calculate $M = T \cdot R$:
$$
M = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} (1\cdot0 + 0\cdot1 + 1\cdot0) & (1\cdot(-1) + 0\cdot0 + 1\cdot0) & (1\cdot0 + 0\cdot0 + 1\cdot1) \\ (0\cdot0 + 1\cdot1 + 2\cdot0) & (0\cdot(-1) + 1\cdot0 + 2\cdot0) & (0\cdot0 + 1\cdot0 + 2\cdot1) \\ (0\cdot0 + 0\cdot1 + 1\cdot0) & (0\cdot(-1) + 0\cdot0 + 1\cdot0) & (0\cdot0 + 0\cdot0 + 1\cdot1) \end{bmatrix}
$$
$$
M = \begin{bmatrix} 0 & -1 & 1 \\ 1 & 0 & 2 \\ 0 & 0 & 1 \end{bmatrix}
$$
Apply $M$ to point $P = (2, 3)$:
$$
\begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 0 & -1 & 1 \\ 1 & 0 & 2 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 2 \\ 3 \\ 1 \end{bmatrix} = \begin{bmatrix} (0\cdot2 + (-1)\cdot3 + 1\cdot1) \\ (1\cdot2 + 0\cdot3 + 2\cdot1) \\ (0\cdot2 + 0\cdot3 + 1\cdot1) \end{bmatrix} = \begin{bmatrix} -3 + 1 \\ 2 + 2 \\ 1 \end{bmatrix} = \begin{bmatrix} -2 \\ 4 \\ 1 \end{bmatrix}
$$
The transformed point $P'$ is (-2, 4).

---

## 8. Important Points to Remember

*   **Order of Operations Matters:** For composite transformations, the order in which matrices are multiplied determines the final result.
*   **Homogeneous Coordinates are Key:** They allow translation to be represented as a matrix multiplication, simplifying composite transformation calculations.
*   **$3 \times 3$ for 2D, $4 \times 4$ for 3D:** These are the standard matrix dimensions when using homogeneous coordinates.
*   **Pivot Points and Axes:** Be mindful of the reference point (pivot) for rotation and scaling, and the axis of rotation in 3D. Transformations not about the origin require translation.
*   **Matrix Multiplication:** Ensure you are comfortable with matrix multiplication rules.

---
This concludes Module 2 on Geometric Transformations. You should now have a solid understanding of how to manipulate objects in 2D and 3D space using fundamental transformations and their matrix representations.
