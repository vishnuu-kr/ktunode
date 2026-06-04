---
title: "homogeneous coordinates"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS"
module: "Module 2: Transformation of points and lines"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044634f4"
status: "completed"
scrapedAt: "2026-05-20T17:58:44.120Z"
---
# Computer Aided Design and Analysis: Module 2 - Transformation of Points and Lines

## Topic: Homogeneous Coordinates

### Introduction

In computer graphics and CAD, transformations like translation, rotation, and scaling are fundamental operations for manipulating geometric objects. While standard Cartesian coordinates are suitable for representing points and vectors, they can become cumbersome when dealing with composite transformations, especially translation. Homogeneous coordinates provide an elegant mathematical framework to unify these transformations, representing them as matrix multiplications. This unification simplifies the implementation of complex geometric operations in CAD systems.

### Learning Outcomes Covered:

*   **Understanding of homogeneous coordinates:** This topic directly addresses the need to represent points and lines in a way that simplifies transformations.
*   **Application of transformations:** Homogeneous coordinates are the underlying mechanism that enables efficient application of 2D and 3D transformations.

### Course Outcomes Alignment:

*   **CO2: Apply 2D transformation techniques... (Knowledge Level: K3)** Homogeneous coordinates are essential for understanding and applying these 2D transformations in a unified manner.
*   **CO3: Apply 3D graphics and solid modeling techniques... (Knowledge Level: K3)** While this topic focuses on 2D, the principles extend to 3D, forming the basis for 3D transformations.

---

### 1. The Need for Homogeneous Coordinates: The Translation Problem

*   **Standard Cartesian Coordinates (2D):** A point $P$ in 2D is represented by $(x, y)$.
*   **Standard Transformations:**
    *   **Scaling:** $P' = (s_x \cdot x, s_y \cdot y)$. This is a linear transformation that can be represented by matrix multiplication:
        $$
        \begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} s_x & 0 \\ 0 & s_y \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}
        $$
    *   **Rotation:** $P' = (x \cos \theta - y \sin \theta, x \sin \theta + y \cos \theta)$. This is also a linear transformation:
        $$
        \begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}
        $$
*   **The Challenge of Translation:** A translation by $(t_x, t_y)$ would result in $P' = (x + t_x, y + t_y)$. This is an **affine transformation**, not a linear one. It cannot be directly represented by a single matrix multiplication of the form $P' = M \cdot P$ where $P$ is a $2 \times 1$ vector.
    *   **Example:** Translating a point $(x, y)$ by $(2, 3)$ gives $(x+2, y+3)$. There's no $2 \times 2$ matrix that can achieve this directly with a standard vector.

---

### 2. Introducing Homogeneous Coordinates

*   **Concept:** To overcome the translation problem, we augment the Cartesian coordinates with an extra dimension.
*   **Representation:**
    *   A 2D point $(x, y)$ is represented in homogeneous coordinates as $(x, y, w)$.
    *   Typically, for 2D graphics, we use $w=1$. So, $(x, y)$ becomes $(x, y, 1)$.
*   **Interpretation:**
    *   Points $(x, y, w)$ where $w \neq 0$ correspond to Cartesian points $(x/w, y/w)$.
    *   When $w=1$, the homogeneous coordinate $(x, y, 1)$ directly maps to the Cartesian coordinate $(x, y)$.
    *   Points $(x, y, 0)$ represent "points at infinity."

---

### 3. Homogeneous Coordinates for Transformations

*   **Unified Representation:** By using homogeneous coordinates, all affine transformations (including translation) can be represented as matrix multiplications.
*   **Augmented Point Vector:** A 2D point $(x, y)$ is represented as a $3 \times 1$ column vector in homogeneous coordinates:
    $$
    \mathbf{p} = \begin{pmatrix} x \\ y \\ 1 \end{pmatrix}
    $$
*   **Transformation Matrix:** For 2D transformations, we use $3 \times 3$ matrices.

---

### 4. Homogeneous Transformations in Detail

#### 4.1. Translation

*   To translate a point $(x, y)$ by $(t_x, t_y)$:
    *   Homogeneous representation: $\begin{pmatrix} x \\ y \\ 1 \end{pmatrix}$
    *   Transformation matrix $T(t_x, t_y)$:
        $$
        T(t_x, t_y) = \begin{pmatrix} 1 & 0 & t_x \\ 0 & 1 & t_y \\ 0 & 0 & 1 \end{pmatrix}
        $$
    *   Applying the transformation:
        $$
        \begin{pmatrix} x' \\ y' \\ 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 & t_x \\ 0 & 1 & t_y \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \\ 1 \end{pmatrix} = \begin{pmatrix} x + t_x \\ y + t_y \\ 1 \end{pmatrix}
        $$
*   **Key Point:** Translation is now achieved by a single matrix multiplication. This is the primary advantage of homogeneous coordinates.

#### 4.2. Scaling

*   To scale a point $(x, y)$ by factors $(s_x, s_y)$ about the origin:
    *   Transformation matrix $S(s_x, s_y)$:
        $$
        S(s_x, s_y) = \begin{pmatrix} s_x & 0 & 0 \\ 0 & s_y & 0 \\ 0 & 0 & 1 \end{pmatrix}
        $$
    *   Applying the transformation:
        $$
        \begin{pmatrix} x' \\ y' \\ 1 \end{pmatrix} = \begin{pmatrix} s_x & 0 & 0 \\ 0 & s_y & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \\ 1 \end{pmatrix} = \begin{pmatrix} s_x \cdot x \\ s_y \cdot y \\ 1 \end{pmatrix}
        $$
*   **Note:** The third row and third column (with the '1' in the diagonal) are crucial for maintaining the homogeneous coordinate structure during scaling and rotation.

#### 4.3. Rotation

*   To rotate a point $(x, y)$ by an angle $\theta$ about the origin:
    *   Transformation matrix $R(\theta)$:
        $$
        R(\theta) = \begin{pmatrix} \cos \theta & -\sin \theta & 0 \\ \sin \theta & \cos \theta & 0 \\ 0 & 0 & 1 \end{pmatrix}
        $$
    *   Applying the transformation:
        $$
        \begin{pmatrix} x' \\ y' \\ 1 \end{pmatrix} = \begin{pmatrix} \cos \theta & -\sin \theta & 0 \\ \sin \theta & \cos \theta & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \\ 1 \end{pmatrix} = \begin{pmatrix} x \cos \theta - y \sin \theta \\ x \sin \theta + y \cos \theta \\ 1 \end{pmatrix}
        $$

#### 4.4. Scaling About an Arbitrary Point $P_0 = (x_0, y_0)$

*   To scale about a point other than the origin, we use a sequence of transformations:
    1.  Translate $P_0$ to the origin ($T_{-x_0, -y_0}$).
    2.  Scale about the origin ($S_{s_x, s_y}$).
    3.  Translate the origin back to $P_0$ ($T_{x_0, y_0}$).
*   The combined transformation matrix is the product of these individual matrices in order:
    $$
    M = T(x_0, y_0) \cdot S(s_x, s_y) \cdot T(-x_0, -y_0)
    $$
    $$
    M = \begin{pmatrix} 1 & 0 & x_0 \\ 0 & 1 & y_0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} s_x & 0 & 0 \\ 0 & s_y & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 & -x_0 \\ 0 & 1 & -y_0 \\ 0 & 0 & 1 \end{pmatrix}
    $$
    $$
    M = \begin{pmatrix} 1 & 0 & x_0 \\ 0 & 1 & y_0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} s_x & 0 & -s_x \cdot x_0 \\ 0 & s_y & -s_y \cdot y_0 \\ 0 & 0 & 1 \end{pmatrix}
    $$
    $$
    M = \begin{pmatrix} s_x & 0 & x_0 - s_x \cdot x_0 \\ 0 & s_y & y_0 - s_y \cdot y_0 \\ 0 & 0 & 1 \end{pmatrix}
    $$
    This matrix effectively scales about the point $(x_0, y_0)$.

#### 4.5. Rotation About an Arbitrary Point $P_0 = (x_0, y_0)$

*   Similarly, rotation about an arbitrary point involves:
    1.  Translate $P_0$ to the origin ($T_{-x_0, -y_0}$).
    2.  Rotate about the origin ($R(\theta)$).
    3.  Translate the origin back to $P_0$ ($T_{x_0, y_0}$).
*   The combined transformation matrix is:
    $$
    M = T(x_0, y_0) \cdot R(\theta) \cdot T(-x_0, -y_0)
    $$
    $$
    M = \begin{pmatrix} 1 & 0 & x_0 \\ 0 & 1 & y_0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} \cos \theta & -\sin \theta & 0 \\ \sin \theta & \cos \theta & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 & -x_0 \\ 0 & 1 & -y_0 \\ 0 & 0 & 1 \end{pmatrix}
    $$
    Performing the matrix multiplication:
    $$
    M = \begin{pmatrix} 1 & 0 & x_0 \\ 0 & 1 & y_0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} \cos \theta & -\sin \theta & -x_0 \cos \theta + y_0 \sin \theta \\ \sin \theta & \cos \theta & -x_0 \sin \theta - y_0 \cos \theta \\ 0 & 0 & 1 \end{pmatrix}
    $$
    $$
    M = \begin{pmatrix} \cos \theta & -\sin \theta & x_0(1 - \cos \theta) + y_0 \sin \theta \\ \sin \theta & \cos \theta & x_0 \sin \theta + y_0(1 - \cos \theta) \\ 0 & 0 & 1 \end{pmatrix}
    $$

---

### 5. Composite Transformations

*   **The Power of Homogeneous Coordinates:** The most significant advantage is the ability to combine multiple transformations into a single matrix.
*   **Order of Operations:** When multiplying matrices, the order matters! The transformation applied *first* to the point should be on the *rightmost* side of the matrix product.
    *   Example: Translate by $(t_x, t_y)$, then rotate by $\theta$ about the origin.
        $$
        \mathbf{p}' = R(\theta) \cdot T(t_x, t_y) \cdot \mathbf{p}
        $$
        The composite matrix is $M_{composite} = R(\theta) \cdot T(t_x, t_y)$.
*   **Applying to a Line:** A line segment can be represented by its two endpoints. To transform the entire line, we transform both endpoints using the composite transformation matrix.

---

### 6. Key Concepts and Definitions

*   **Cartesian Coordinates:** A system using perpendicular axes to define points in space (e.g., $(x, y)$ in 2D).
*   **Homogeneous Coordinates:** An extension of Cartesian coordinates by adding an extra coordinate (usually $w$) to represent points and vectors. A 2D point $(x, y)$ is $(x, y, 1)$.
*   **Affine Transformation:** A geometric transformation that preserves lines and parallelism but not necessarily angles or lengths. Includes translation, scaling, rotation, shear, and reflection.
*   **Linear Transformation:** An affine transformation that also preserves the origin (i.e., $(0,0)$ maps to $(0,0)$). Can be represented by matrix multiplication of the form $P' = M \cdot P$.
*   **Translation Vector:** A vector $(t_x, t_y)$ representing the shift applied to points.
*   **Transformation Matrix:** A matrix used to perform geometric transformations through multiplication. In homogeneous coordinates, these are typically $3 \times 3$ for 2D.
*   **Composite Transformation:** A sequence of multiple transformations combined into a single equivalent transformation represented by a single matrix.

---

### 7. Important Points to Remember

*   **Why Homogeneous Coordinates?** To represent translation as a matrix multiplication, unifying all affine transformations.
*   **The `w` Component:** For 2D graphics, $w$ is usually 1. It allows us to encode translation in the last column of a $3 \times 3$ matrix.
*   **Matrix Multiplication Order:** Transformations are applied from right to left. $M_{final} = T_n \cdot T_{n-1} \cdot ... \cdot T_1$.
*   **3D Extension:** The concept extends to 3D by using 4D homogeneous coordinates $(x, y, z, w)$ and $4 \times 4$ matrices.
*   **Conciseness:** Allows for a compact representation and efficient computation of complex geometric manipulations in CAD software.

---

### 8. Examples

**Example 1: Translate and Scale a Point**

Translate point $P=(2, 3)$ by $(4, 1)$ and then scale it by $(2, 0.5)$ about the origin.

*   **Step 1: Homogeneous representation of P:** $\mathbf{p} = \begin{pmatrix} 2 \\ 3 \\ 1 \end{pmatrix}$
*   **Step 2: Translation Matrix $T(4, 1)$:**
    $$
    T(4, 1) = \begin{pmatrix} 1 & 0 & 4 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}
    $$
*   **Step 3: Scaling Matrix $S(2, 0.5)$:**
    $$
    S(2, 0.5) = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 0.5 & 0 \\ 0 & 0 & 1 \end{pmatrix}
    $$
*   **Step 4: Composite Transformation Matrix (Scale after Translate):** $M = S(2, 0.5) \cdot T(4, 1)$
    $$
    M = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 0.5 & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 & 4 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 0 & 8 \\ 0 & 0.5 & 0.5 \\ 0 & 0 & 1 \end{pmatrix}
    $$
*   **Step 5: Apply Transformation:** $\mathbf{p}' = M \cdot \mathbf{p}$
    $$
    \begin{pmatrix} x' \\ y' \\ 1 \end{pmatrix} = \begin{pmatrix} 2 & 0 & 8 \\ 0 & 0.5 & 0.5 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 2 \\ 3 \\ 1 \end{pmatrix} = \begin{pmatrix} (2 \cdot 2) + (0 \cdot 3) + (8 \cdot 1) \\ (0 \cdot 2) + (0.5 \cdot 3) + (0.5 \cdot 1) \\ (0 \cdot 2) + (0 \cdot 3) + (1 \cdot 1) \end{pmatrix} = \begin{pmatrix} 4 + 0 + 8 \\ 0 + 1.5 + 0.5 \\ 0 + 0 + 1 \end{pmatrix} = \begin{pmatrix} 12 \\ 2 \\ 1 \end{pmatrix}
    $$
*   **Result:** The transformed point is $(12, 2)$ in Cartesian coordinates.

**Example 2: Rotate a Line Segment**

Rotate the line segment from $A=(1, 1)$ to $B=(4, 2)$ by 90 degrees counterclockwise about the origin.

*   **Step 1: Homogeneous representation of A and B:**
    $$
    \mathbf{a} = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} 4 \\ 2 \\ 1 \end{pmatrix}
    $$
*   **Step 2: Rotation Matrix $R(90^\circ)$:** $\cos 90^\circ = 0$, $\sin 90^\circ = 1$
    $$
    R(90^\circ) = \begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}
    $$
*   **Step 3: Transform point A:** $\mathbf{a}' = R(90^\circ) \cdot \mathbf{a}$
    $$
    \begin{pmatrix} x_A' \\ y_A' \\ 1 \end{pmatrix} = \begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} -1 \\ 1 \\ 1 \end{pmatrix} \implies A' = (-1, 1)
    $$
*   **Step 4: Transform point B:** $\mathbf{b}' = R(90^\circ) \cdot \mathbf{b}$
    $$
    \begin{pmatrix} x_B' \\ y_B' \\ 1 \end{pmatrix} = \begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 4 \\ 2 \\ 1 \end{pmatrix} = \begin{pmatrix} -2 \\ 4 \\ 1 \end{pmatrix} \implies B' = (-2, 4)
    $$
*   **Result:** The rotated line segment is from $A'=(-1, 1)$ to $B'=(-2, 4)$.

---

### 9. Practice Questions

1.  Represent the Cartesian point $(5, -2)$ in homogeneous coordinates.
2.  Given a point $P=(3, 4)$, find its homogeneous representation if it is translated by $T=(-1, 2)$. Show the matrix multiplication.
3.  What is the matrix for scaling by a factor of 3 in the x-direction and 0.5 in the y-direction about the origin? Apply it to the point $(2, 4)$.
4.  Derive the composite transformation matrix for translating a point $(x, y)$ by $(t_x, t_y)$ and then rotating it by $90^\circ$ counterclockwise about the origin.
5.  Find the single transformation matrix that rotates a point by $45^\circ$ counterclockwise around the point $(2, 1)$.
6.  A line segment has endpoints $P_1=(1, 0)$ and $P_2=(5, 0)$. Apply a rotation of $180^\circ$ about the origin, followed by a translation of $(3, 2)$. Find the new endpoints of the line segment.

---

### 10. Answers to Practice Questions

1.  $(5, -2, 1)$
2.  $$
        \begin{pmatrix} x' \\ y' \\ 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 3 \\ 4 \\ 1 \end{pmatrix} = \begin{pmatrix} 3 + (-1) \\ 4 + 2 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 \\ 6 \\ 1 \end{pmatrix}
        $$
        The translated point is $(2, 6)$.
3.  Scaling matrix $S(3, 0.5)$:
    $$
    S(3, 0.5) = \begin{pmatrix} 3 & 0 & 0 \\ 0 & 0.5 & 0 \\ 0 & 0 & 1 \end{pmatrix}
    $$
    Applying to $(2, 4)$:
    $$
    \begin{pmatrix} x' \\ y' \\ 1 \end{pmatrix} = \begin{pmatrix} 3 & 0 & 0 \\ 0 & 0.5 & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 2 \\ 4 \\ 1 \end{pmatrix} = \begin{pmatrix} 6 \\ 2 \\ 1 \end{pmatrix}
    $$
    The scaled point is $(6, 2)$.
4.  Translate matrix $T(t_x, t_y) = \begin{pmatrix} 1 & 0 & t_x \\ 0 & 1 & t_y \\ 0 & 0 & 1 \end{pmatrix}$. Rotation matrix $R(90^\circ) = \begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$.
    Composite matrix $M = R(90^\circ) \cdot T(t_x, t_y)$:
    $$
    M = \begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 & t_x \\ 0 & 1 & t_y \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & -1 & -t_y \\ 1 & 0 & t_x \\ 0 & 0 & 1 \end{pmatrix}
    $$
5.  The sequence of transformations is: Translate $(2, 1)$ to origin, rotate $45^\circ$, translate origin back to $(2, 1)$.
    $M = T(2, 1) \cdot R(45^\circ) \cdot T(-2, -1)$
    $R(45^\circ) = \begin{pmatrix} \cos 45^\circ & -\sin 45^\circ & 0 \\ \sin 45^\circ & \cos 45^\circ & 0 \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 1/\sqrt{2} & -1/\sqrt{2} & 0 \\ 1/\sqrt{2} & 1/\sqrt{2} & 0 \\ 0 & 0 & 1 \end{pmatrix}$
    $T(-2, -1) = \begin{pmatrix} 1 & 0 & -2 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{pmatrix}$
    $T(2, 1) = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$
    First, calculate $R(45^\circ) \cdot T(-2, -1)$:
    $$
    \begin{pmatrix} 1/\sqrt{2} & -1/\sqrt{2} & 0 \\ 1/\sqrt{2} & 1/\sqrt{2} & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 & -2 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 1/\sqrt{2} & -1/\sqrt{2} & -2/\sqrt{2} + 1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} & -2/\sqrt{2} - 1/\sqrt{2} \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 1/\sqrt{2} & -1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} & -3/\sqrt{2} \\ 0 & 0 & 1 \end{pmatrix}
    $$
    Now, multiply by $T(2, 1)$:
    $$
    \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1/\sqrt{2} & -1/\sqrt{2} & -1/\sqrt{2} \\ 1/\sqrt{2} & 1/\sqrt{2} & -3/\sqrt{2} \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 1/\sqrt{2} & -1/\sqrt{2} & -1/\sqrt{2} + 2 \\ 1/\sqrt{2} & 1/\sqrt{2} & -3/\sqrt{2} + 1 \\ 0 & 0 & 1 \end{pmatrix}
    $$
    So the single transformation matrix is:
    $$
    \begin{pmatrix} \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} & 2 - \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 1 - \frac{3}{\sqrt{2}} \\ 0 & 0 & 1 \end{pmatrix}
    $$
6.  First, apply rotation $R(180^\circ)$: $\cos 180^\circ = -1, \sin 180^\circ = 0$.
    $R(180^\circ) = \begin{pmatrix} -1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$.
    Transform $P_1$:
    $$
    \begin{pmatrix} x_1' \\ y_1' \\ 1 \end{pmatrix} = \begin{pmatrix} -1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} \implies P_1' = (-1, 0)
    $$
    Transform $P_2$:
    $$
    \begin{pmatrix} x_2' \\ y_2' \\ 1 \end{pmatrix} = \begin{pmatrix} -1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 5 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} -5 \\ 0 \\ 1 \end{pmatrix} \implies P_2' = (-5, 0)
    $$
    The rotated line is from $(-1, 0)$ to $(-5, 0)$.
    Next, apply translation $T(3, 2)$:
    $T(3, 2) = \begin{pmatrix} 1 & 0 & 3 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{pmatrix}$.
    Transform $P_1'$:
    $$
    \begin{pmatrix} x_1'' \\ y_1'' \\ 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 3 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} -1 + 3 \\ 0 + 2 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 \\ 2 \\ 1 \end{pmatrix} \implies P_1'' = (2, 2)
    $$
    Transform $P_2'$:
    $$
    \begin{pmatrix} x_2'' \\ y_2'' \\ 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 3 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} -5 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} -5 + 3 \\ 0 + 2 \\ 1 \end{pmatrix} = \begin{pmatrix} -2 \\ 2 \\ 1 \end{pmatrix} \implies P_2'' = (-2, 2)
    $$
    The final endpoints are $(2, 2)$ and $(-2, 2)$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### References and Further Reading

*   **Groover, M.P., & Zimmers, E.M. Jr.** (2014). *CAD/CAM Computer Aided Design and Manufacturing*. Prentice Hall of India. (Covers fundamental transformations and their matrix representations).
*   **Zeid, I., & Sivasubramanian, R.** (2009). *CAD/CAM: Theory and Practice*. McGraw Hill Education. (Provides a solid theoretical foundation for geometric transformations and homogeneous coordinates).
*   **Rogers, D.F., & Adams, J.A.** (1990). *Mathematical Elements in Computer Graphics*. McGraw-Hill. (Offers in-depth mathematical treatment of homogeneous coordinates and their applications in graphics).
*   **Hearn, D., Baker, M.P., & Carithers, W.** (2001). *Computer Graphics with OpenGL*. Pearson Education. (Illustrates how these concepts are implemented in graphics APIs like OpenGL).

This module's understanding of homogeneous coordinates is crucial for building more complex geometric operations and understanding the underlying mathematical principles of CAD systems, directly supporting CO2.