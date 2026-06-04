---
title: "simple problems"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS"
module: "Module 2: Transformation of points and lines"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044634f7"
status: "completed"
scrapedAt: "2026-05-20T17:58:46.251Z"
---
## Computer Aided Design and Analysis: Module 2 - Transformation of Points and Lines - Simple Problems

This module focuses on the fundamental geometric transformations of points and lines, which are the building blocks of any CAD system. Understanding these transformations is crucial for manipulating objects within a design environment.

### 1. Learning Outcomes

Upon successful completion of this module, students will be able to:

*   Represent points and lines using appropriate mathematical notations.
*   Perform basic 2D geometric transformations (translation, rotation, scaling) on points and lines.
*   Combine multiple 2D transformations into a single composite transformation.
*   Understand the concept of a transformation matrix and its role in applying transformations.
*   Apply these transformation concepts to solve simple problems in CAD.

### 2. Key Concepts and Definitions

#### 2.1 Representing Points and Lines

*   **Point:** A location in a 2D coordinate system is typically represented by its (x, y) coordinates.
    *   In homogeneous coordinates, a point (x, y) is represented as a 3D vector `[x, y, 1]^T`. This is essential for matrix representation of transformations.
    *   *Reference: Groover & Zimmers, Chapter 6.2.1 (Geometric Transformations)*

*   **Line Segment:** A line segment is defined by its two endpoints, P1(x1, y1) and P2(x2, y2).
    *   A line can also be represented parametrically. For a line passing through P1 and P2, any point P on the line can be represented as:
        $P = P1 + t * (P2 - P1)$, where $0 \le t \le 1$.
    *   *Reference: Zeid & Sivasubramanian, Chapter 5.2 (Lines and Curves)*

#### 2.2 Geometric Transformations

Geometric transformations are operations that modify the position, orientation, size, or shape of geometric objects. In 2D CAD, the most fundamental transformations are:

*   **Translation:** Moving an object from one position to another without changing its orientation or size.
    *   **Definition:** A translation is defined by a translation vector $T = (tx, ty)$, where $tx$ is the shift along the x-axis and $ty$ is the shift along the y-axis.
    *   **Mathematical Representation:** For a point $P(x, y)$, the translated point $P'(x', y')$ is given by:
        $x' = x + tx$
        $y' = y + ty$
    *   **Matrix Representation (Homogeneous Coordinates):**
        $$
        \begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & tx \\ 0 & 1 & ty \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}
        $$
        The matrix $\begin{bmatrix} 1 & 0 & tx \\ 0 & 1 & ty \\ 0 & 0 & 1 \end{bmatrix}$ is the **translation matrix**.

*   **Rotation:** Rotating an object about a fixed point (the pivot point).
    *   **Definition:** A rotation is defined by an angle of rotation ($\theta$) and a pivot point. In simple problems, the pivot is usually the origin (0,0).
    *   **Rotation about the Origin (Counter-clockwise):** For a point $P(x, y)$ rotated by an angle $\theta$ about the origin, the rotated point $P'(x', y')$ is:
        $x' = x \cos(\theta) - y \sin(\theta)$
        $y' = x \sin(\theta) + y \cos(\theta)$
    *   **Matrix Representation (Homogeneous Coordinates):**
        $$
        \begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} \cos(\theta) & -\sin(\theta) & 0 \\ \sin(\theta) & \cos(\theta) & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}
        $$
        The matrix $\begin{bmatrix} \cos(\theta) & -\sin(\theta) & 0 \\ \sin(\theta) & \cos(\theta) & 0 \\ 0 & 0 & 1 \end{bmatrix}$ is the **rotation matrix**.
    *   **Rotation about an Arbitrary Pivot Point (Px, Py):** To rotate about an arbitrary point, we first translate the pivot point to the origin, perform the rotation, and then translate it back.
        1.  Translate by $(-Px, -Py)$.
        2.  Rotate by $\theta$.
        3.  Translate by $(Px, Py)$.
        *   *Reference: Rogers & Adams, Chapter 3 (Two-Dimensional Transformations)*

*   **Scaling:** Changing the size of an object.
    *   **Definition:** Scaling is defined by scaling factors ($Sx, Sy$) along the x and y axes, respectively. If $Sx=Sy$, it's uniform scaling. If $Sx \ne Sy$, it's non-uniform scaling. Scaling is typically done with respect to the origin.
    *   **Scaling with respect to the Origin:** For a point $P(x, y)$ scaled by $Sx$ and $Sy$, the scaled point $P'(x', y')$ is:
        $x' = x * Sx$
        $y' = y * Sy$
    *   **Matrix Representation (Homogeneous Coordinates):**
        $$
        \begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} Sx & 0 & 0 \\ 0 & Sy & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}
        $$
        The matrix $\begin{bmatrix} Sx & 0 & 0 \\ 0 & Sy & 0 \\ 0 & 0 & 1 \end{bmatrix}$ is the **scaling matrix**.
    *   **Scaling with respect to an Arbitrary Pivot Point (Px, Py):** Similar to rotation, we translate, scale, and then translate back.
        1.  Translate by $(-Px, -Py)$.
        2.  Scale by $(Sx, Sy)$.
        3.  Translate by $(Px, Py)$.
        *   *Reference: Groover & Zimmers, Chapter 6.2.2 (Scaling)*

#### 2.3 Composite Transformations

In CAD, objects are often subjected to a sequence of transformations. These multiple transformations can be combined into a single equivalent transformation by multiplying their respective matrices.

*   **Order of Operations:** The order of matrix multiplication matters. For example, translating then rotating is different from rotating then translating.
    *   To apply transformations $M1, M2, M3, \dots, Mn$ in that order to a point $P$, the resulting point $P'$ is:
        $P' = Mn \dots M3 M2 M1 P$
    *   The composite transformation matrix $M_{composite}$ is given by:
        $M_{composite} = Mn \dots M3 M2 M1$
    *   *Reference: Zeid & Sivasubramanian, Chapter 5.4 (Composite Transformations)*

*   **Important Point:** Transformations are applied to points, and for a line segment defined by two endpoints, we apply the transformation to each endpoint independently. The transformed line segment is defined by the transformed endpoints.

#### 2.4 Line Transformations

To transform a line segment, we transform its endpoints. If a line segment is defined by endpoints P1 and P2, and we apply a transformation matrix M, the transformed endpoints will be P1' = M * P1 and P2' = M * P2. The transformed line segment connects P1' and P2'.

### 3. Examples

Let's work through some simple problems to illustrate these concepts.

**Example 1: Translating a Point**

*   **Problem:** Translate the point $P(3, 4)$ by $tx = 5$ and $ty = -2$.
*   **Solution:**
    *   Using the translation equations:
        $x' = x + tx = 3 + 5 = 8$
        $y' = y + ty = 4 + (-2) = 2$
        The translated point is $P'(8, 2)$.
    *   Using matrix multiplication:
        $$
        \begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 5 \\ 0 & 1 & -2 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 3 \\ 4 \\ 1 \end{bmatrix} = \begin{bmatrix} (1*3 + 0*4 + 5*1) \\ (0*3 + 1*4 + -2*1) \\ (0*3 + 0*4 + 1*1) \end{bmatrix} = \begin{bmatrix} 8 \\ 2 \\ 1 \end{bmatrix}
        $$
        The translated point is $P'(8, 2)$.

**Example 2: Rotating a Line Segment**

*   **Problem:** Rotate the line segment with endpoints $P1(2, 1)$ and $P2(5, 3)$ by $30^\circ$ counter-clockwise about the origin.
*   **Solution:**
    *   First, define the rotation matrix for $\theta = 30^\circ$:
        $\cos(30^\circ) = \sqrt{3}/2 \approx 0.866$
        $\sin(30^\circ) = 1/2 = 0.5$
        $$
        R_{30^\circ} = \begin{bmatrix} 0.866 & -0.5 & 0 \\ 0.5 & 0.866 & 0 \\ 0 & 0 & 1 \end{bmatrix}
        $$
    *   Transform P1:
        $$
        \begin{bmatrix} x1' \\ y1' \\ 1 \end{bmatrix} = \begin{bmatrix} 0.866 & -0.5 & 0 \\ 0.5 & 0.866 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 2 \\ 1 \\ 1 \end{bmatrix} = \begin{bmatrix} (0.866*2 - 0.5*1) \\ (0.5*2 + 0.866*1) \\ 1 \end{bmatrix} = \begin{bmatrix} 1.732 - 0.5 \\ 1 + 0.866 \\ 1 \end{bmatrix} = \begin{bmatrix} 1.232 \\ 1.866 \\ 1 \end{bmatrix}
        $$
        So, $P1'(1.232, 1.866)$.
    *   Transform P2:
        $$
        \begin{bmatrix} x2' \\ y2' \\ 1 \end{bmatrix} = \begin{bmatrix} 0.866 & -0.5 & 0 \\ 0.5 & 0.866 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 5 \\ 3 \\ 1 \end{bmatrix} = \begin{bmatrix} (0.866*5 - 0.5*3) \\ (0.5*5 + 0.866*3) \\ 1 \end{bmatrix} = \begin{bmatrix} 4.330 - 1.5 \\ 2.5 + 2.598 \\ 1 \end{bmatrix} = \begin{bmatrix} 2.830 \\ 5.098 \\ 1 \end{bmatrix}
        $$
        So, $P2'(2.830, 5.098)$.
    *   The transformed line segment connects $P1'(1.232, 1.866)$ and $P2'(2.830, 5.098)$.

**Example 3: Scaling a Point about an Arbitrary Pivot**

*   **Problem:** Scale the point $P(4, 5)$ by $Sx=2$ and $Sy=0.5$ with respect to the pivot point $P_p(1, 2)$.
*   **Solution:**
    *   **Step 1: Translate the pivot to the origin.**
        Translation vector $T1 = (-1, -2)$.
        $P_{temp1} = P + T1 = (4, 5) + (-1, -2) = (3, 3)$.
        Translation Matrix $M_{T1} = \begin{bmatrix} 1 & 0 & -1 \\ 0 & 1 & -2 \\ 0 & 0 & 1 \end{bmatrix}$.
    *   **Step 2: Scale the point with respect to the origin.**
        Scaling factors $Sx=2, Sy=0.5$.
        Scaling Matrix $M_S = \begin{bmatrix} 2 & 0 & 0 \\ 0 & 0.5 & 0 \\ 0 & 0 & 1 \end{bmatrix}$.
        $P_{temp2} = P_{temp1} * M_S$
        $$
        \begin{bmatrix} x_{temp2} \\ y_{temp2} \\ 1 \end{bmatrix} = \begin{bmatrix} 2 & 0 & 0 \\ 0 & 0.5 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 3 \\ 3 \\ 1 \end{bmatrix} = \begin{bmatrix} 2*3 \\ 0.5*3 \\ 1 \end{bmatrix} = \begin{bmatrix} 6 \\ 1.5 \\ 1 \end{bmatrix}
        $$
        So, $P_{temp2}(6, 1.5)$.
    *   **Step 3: Translate the pivot back.**
        Translation vector $T2 = (1, 2)$.
        $P' = P_{temp2} + T2 = (6, 1.5) + (1, 2) = (7, 3.5)$.
        Translation Matrix $M_{T2} = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{bmatrix}$.
    *   **Using composite matrix:**
        $M_{composite} = M_{T2} * M_S * M_{T1}$
        $$
        M_{composite} = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 2 & 0 & 0 \\ 0 & 0.5 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & -1 \\ 0 & 1 & -2 \\ 0 & 0 & 1 \end{bmatrix}
        $$
        First, $M_S * M_{T1}$:
        $$
        \begin{bmatrix} 2 & 0 & 0 \\ 0 & 0.5 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & -1 \\ 0 & 1 & -2 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 2 & 0 & -2 \\ 0 & 0.5 & -1 \\ 0 & 0 & 1 \end{bmatrix}
        $$
        Now, $M_{T2} * (M_S * M_{T1})$:
        $$
        \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 2 & 0 & -2 \\ 0 & 0.5 & -1 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 2 & 0 & -1 \\ 0 & 0.5 & 1 \\ 0 & 0 & 1 \end{bmatrix}
        $$
        Now, apply $M_{composite}$ to $P(4, 5)$:
        $$
        \begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 2 & 0 & -1 \\ 0 & 0.5 & 1 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 4 \\ 5 \\ 1 \end{bmatrix} = \begin{bmatrix} (2*4 + 0*5 + -1*1) \\ (0*4 + 0.5*5 + 1*1) \\ 1 \end{bmatrix} = \begin{bmatrix} 8 - 1 \\ 2.5 + 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 7 \\ 3.5 \\ 1 \end{bmatrix}
        $$
        The scaled point is $P'(7, 3.5)$.

**Example 4: Composite Transformation (Translate then Rotate)**

*   **Problem:** Translate the point $P(2, 3)$ by $(4, 1)$ and then rotate the resulting point by $90^\circ$ counter-clockwise about the origin.
*   **Solution:**
    *   **Step 1: Translation.**
        $T = \begin{bmatrix} 1 & 0 & 4 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix}$
        $P_{translated} = T * P = \begin{bmatrix} 1 & 0 & 4 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 2 \\ 3 \\ 1 \end{bmatrix} = \begin{bmatrix} 6 \\ 4 \\ 1 \end{bmatrix}$
        So, $P_{translated}(6, 4)$.
    *   **Step 2: Rotation.**
        $R_{90^\circ} = \begin{bmatrix} \cos(90^\circ) & -\sin(90^\circ) & 0 \\ \sin(90^\circ) & \cos(90^\circ) & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}$
        $P_{final} = R_{90^\circ} * P_{translated} = \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 6 \\ 4 \\ 1 \end{bmatrix} = \begin{bmatrix} -4 \\ 6 \\ 1 \end{bmatrix}$
        So, $P_{final}(-4, 6)$.
    *   **Using composite matrix:**
        $M_{composite} = R_{90^\circ} * T$
        $$
        M_{composite} = \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & 4 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 0 & -1 & -1 \\ 1 & 0 & 4 \\ 0 & 0 & 1 \end{bmatrix}
        $$
        Now, apply $M_{composite}$ to $P(2, 3)$:
        $$
        \begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 0 & -1 & -1 \\ 1 & 0 & 4 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 2 \\ 3 \\ 1 \end{bmatrix} = \begin{bmatrix} (0*2 + -1*3 + -1*1) \\ (1*2 + 0*3 + 4*1) \\ 1 \end{bmatrix} = \begin{bmatrix} -3 - 1 \\ 2 + 4 \\ 1 \end{bmatrix} = \begin{bmatrix} -4 \\ 6 \\ 1 \end{bmatrix}
        $$
        The final point is $P_{final}(-4, 6)$.

### 4. Practice Questions

**Question 1:**
Translate the line segment with endpoints $A(1, 2)$ and $B(4, 6)$ by $tx = -3$ and $ty = 5$. What are the new coordinates of A and B?

**Question 2:**
Rotate the point $P(3, 1)$ by $45^\circ$ counter-clockwise about the origin. What are the new coordinates of P? (Use $\cos(45^\circ) = \sin(45^\circ) = \sqrt{2}/2 \approx 0.707$)

**Question 3:**
Scale the point $Q(2, 4)$ by $Sx=3$ and $Sy=0.5$ with respect to the origin. What are the new coordinates of Q?

**Question 4:**
A line segment has endpoints $P1(1, 1)$ and $P2(5, 1)$. Scale this line segment by a factor of 2 along the x-axis and 3 along the y-axis with respect to the pivot point $(1, 1)$. What are the new coordinates of the endpoints?

**Question 5:**
Perform the following sequence of transformations on the point $P(1, 2)$:
1.  Translate by $(3, -1)$.
2.  Rotate by $90^\circ$ counter-clockwise about the origin.
What is the final position of point P?

### 5. Answers to Practice Questions

**Answer 1:**
*   For A(1, 2):
    $x_A' = 1 + (-3) = -2$
    $y_A' = 2 + 5 = 7$
    New coordinates of A are $(-2, 7)$.
*   For B(4, 6):
    $x_B' = 4 + (-3) = 1$
    $y_B' = 6 + 5 = 11$
    New coordinates of B are $(1, 11)$.

**Answer 2:**
Using the rotation matrix for $\theta = 45^\circ$:
$$
\begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 0.707 & -0.707 & 0 \\ 0.707 & 0.707 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 3 \\ 1 \\ 1 \end{bmatrix} = \begin{bmatrix} (0.707*3 - 0.707*1) \\ (0.707*3 + 0.707*1) \\ 1 \end{bmatrix} = \begin{bmatrix} 2.121 - 0.707 \\ 2.121 + 0.707 \\ 1 \end{bmatrix} = \begin{bmatrix} 1.414 \\ 2.828 \\ 1 \end{bmatrix}
$$
The new coordinates of P are approximately $(1.414, 2.828)$.

**Answer 3:**
Using the scaling matrix:
$$
\begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 3 & 0 & 0 \\ 0 & 0.5 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 2 \\ 4 \\ 1 \end{bmatrix} = \begin{bmatrix} 3*2 \\ 0.5*4 \\ 1 \end{bmatrix} = \begin{bmatrix} 6 \\ 2 \\ 1 \end{bmatrix}
$$
The new coordinates of Q are $(6, 2)$.

**Answer 4:**
Since the pivot point is $(1, 1)$, we follow the three steps:
1.  **Translate by $(-1, -1)$:**
    $P1_{temp} = (1, 1) + (-1, -1) = (0, 0)$
    $P2_{temp} = (5, 1) + (-1, -1) = (4, 0)$
2.  **Scale by $Sx=2, Sy=3$:**
    $P1_{scaled} = (0*2, 0*3) = (0, 0)$
    $P2_{scaled} = (4*2, 0*3) = (8, 0)$
3.  **Translate back by $(1, 1)$:**
    $P1' = (0, 0) + (1, 1) = (1, 1)$
    $P2' = (8, 0) + (1, 1) = (9, 1)$
The new coordinates of the endpoints are $P1'(1, 1)$ and $P2'(9, 1)$.

**Answer 5:**
1.  **Translation:** $P_{translated} = (1, 2) + (3, -1) = (4, 1)$.
2.  **Rotation by $90^\circ$ counter-clockwise about the origin:**
    Rotation matrix for $90^\circ$ is $\begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}$.
    $$
    \begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 4 \\ 1 \\ 1 \end{bmatrix} = \begin{bmatrix} -1 \\ 4 \\ 1 \end{bmatrix}
    $$
The final position of point P is $(-1, 4)$.

### 6. Important Points to Remember

*   **Homogeneous Coordinates:** Always use homogeneous coordinates for matrix transformations. A 2D point (x, y) becomes (x, y, 1).
*   **Transformation Matrices:**
    *   Translation: $\begin{bmatrix} 1 & 0 & tx \\ 0 & 1 & ty \\ 0 & 0 & 1 \end{bmatrix}$
    *   Rotation (about origin): $\begin{bmatrix} \cos(\theta) & -\sin(\theta) & 0 \\ \sin(\theta) & \cos(\theta) & 0 \\ 0 & 0 & 1 \end{bmatrix}$
    *   Scaling (about origin): $\begin{bmatrix} Sx & 0 & 0 \\ 0 & Sy & 0 \\ 0 & 0 & 1 \end{bmatrix}$
*   **Order Matters:** The order of matrix multiplication for composite transformations is crucial. The transformation applied first is on the right.
*   **Arbitrary Pivots:** To transform about an arbitrary pivot point, use the sequence: Translate to Origin -> Perform Transformation -> Translate Back.
*   **Lines:** Transform lines by transforming their endpoints.

### 7. Alignment with Course Outcomes

*   **CO1 (Knowledge Level K1, K2):** This module provides foundational knowledge of geometric representation and basic transformations, which are essential for understanding CAD systems.
*   **CO2 (Knowledge Level K3):** This module directly addresses the application of 2D transformation techniques (rotation, translation, scaling) which is a core part of CO2. Solving simple problems demonstrates the ability to apply these techniques.
*   **CO3, CO4:** While this module focuses on 2D, the understanding of matrix transformations and combining them is a prerequisite for understanding more complex 3D transformations and the underlying mathematical principles used in solid modeling and FEA.

This module is a crucial stepping stone for understanding how geometric entities are manipulated in Computer-Aided Design. Mastering these basic transformations will enable you to grasp more advanced concepts in subsequent modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
