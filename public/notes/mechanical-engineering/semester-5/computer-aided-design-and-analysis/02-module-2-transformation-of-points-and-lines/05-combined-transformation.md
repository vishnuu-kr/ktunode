---
title: "combined transformation"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS"
module: "Module 2: Transformation of points and lines"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044634f3"
status: "completed"
scrapedAt: "2026-05-20T17:58:43.298Z"
---
## Computer Aided Design and Analysis: Module 2 - Transformation of Points and Lines

### Topic: Combined Transformations

**Course Outcomes Addressed:**

*   **CO2:** Apply 2D transformation techniques, including rotation, reflection, scaling, and line and curve drawing algorithms in CAD software. (Knowledge Level: K3) - **This topic directly addresses the application of combined transformations.**

---

### 1. Introduction to Combined Transformations

In Computer-Aided Design (CAD), objects are often subjected to a sequence of transformations (translation, rotation, scaling, reflection). Applying these transformations individually can be cumbersome and inefficient. Combined transformations allow us to represent a series of transformations as a single, equivalent transformation. This is achieved through the mathematical concept of **matrix multiplication**.

**Key Concept:** The order of transformations matters significantly when combining them.

**Learning Outcome Addressed:** Understanding the concept and application of combining multiple 2D transformations into a single transformation.

**Relevant Textbooks:**

*   **CAD/CAM Computer Aided Design and Manufacturing by M.P. Groover, E.M. Zimmers, Jr.:** Discusses the fundamental transformations and their matrix representations, paving the way for understanding their combinations.
*   **CAD/CAM : Theory and Practice by Ibrahim Zeid, R Sivasubramanian:** Provides detailed explanations of homogeneous coordinates and their role in matrix representations of transformations, crucial for combining them.
*   **Mathematical Elements in Computer Graphics by D. F. Rogers and J. A. Adams:** Offers a strong theoretical foundation in the mathematical principles behind computer graphics transformations, including matrix operations.

---

### 2. Representing Transformations with Matrices

To combine transformations, we represent each individual transformation as a matrix. In 2D graphics, we often use **homogeneous coordinates** to represent points and transformations in a unified matrix form.

**2.1 Homogeneous Coordinates**

A 2D point $(x, y)$ is represented in homogeneous coordinates as $(x, y, 1)$. This additional dimension allows us to represent translations as matrix multiplications, which is not possible with 2x2 matrices alone.

**2.2 Transformation Matrices**

Let's recall the standard 2D transformation matrices:

*   **Translation by $(tx, ty)$:**
    $$
    \mathbf{T}(tx, ty) = \begin{bmatrix} 1 & 0 & tx \\ 0 & 1 & ty \\ 0 & 0 & 1 \end{bmatrix}
    $$
    A point $(x, y)$ in homogeneous coordinates is represented as a column vector $\begin{bmatrix} x \\ y \\ 1 \end{bmatrix}$. The transformed point $(x', y')$ is obtained by:
    $$
    \begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \mathbf{T}(tx, ty) \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}
    $$

*   **Rotation by angle $\theta$ about the origin:**
    $$
    \mathbf{R}(\theta) = \begin{bmatrix} \cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{bmatrix}
    $$
    $$
    \begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \mathbf{R}(\theta) \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}
    $$

*   **Scaling by factors $(sx, sy)$ about the origin:**
    $$
    \mathbf{S}(sx, sy) = \begin{bmatrix} sx & 0 & 0 \\ 0 & sy & 0 \\ 0 & 0 & 1 \end{bmatrix}
    $$
    $$
    \begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \mathbf{S}(sx, sy) \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}
    $$

*   **Reflection about the y-axis:**
    $$
    \mathbf{F}_y = \begin{bmatrix} -1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}
    $$

*   **Reflection about the x-axis:**
    $$
    \mathbf{F}_x = \begin{bmatrix} 1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 1 \end{bmatrix}
    $$

**Important Point to Remember:** In homogeneous coordinates, transformations are represented by 3x3 matrices for 2D operations.

---

### 3. Combining Transformations

A sequence of transformations can be combined by multiplying their respective matrices. If we have transformations $T_1, T_2, T_3$ applied in that order, the combined transformation matrix $\mathbf{M}$ is:

$$
\mathbf{M} = \mathbf{T}_3 \mathbf{T}_2 \mathbf{T}_1
$$

To transform a point $\mathbf{P}$, we apply the combined matrix:

$$
\mathbf{P}' = \mathbf{M} \mathbf{P} = (\mathbf{T}_3 \mathbf{T}_2 \mathbf{T}_1) \mathbf{P}
$$

**Key Principle:** Matrix multiplication is associative: $(\mathbf{T}_3 \mathbf{T}_2) \mathbf{T}_1 = \mathbf{T}_3 (\mathbf{T}_2 \mathbf{T}_1)$.

**Learning Outcome Addressed:** Performing matrix multiplication to derive a single transformation matrix for a sequence of 2D transformations.

**Relevant Textbooks:**

*   **CAD/CAM Computer Aided Design and Manufacturing by M.P. Groover, E.M. Zimmers, Jr.:** Demonstrates how to concatenate transformation matrices to achieve combined effects.
*   **CAD/CAM : Theory and Practice by Ibrahim Zeid, R Sivasubramanian:** Explains the mathematical basis of matrix concatenation for representing complex transformations.
*   **Mathematical Elements in Computer Graphics by D. F. Rogers and J. A. Adams:** Provides a comprehensive treatment of matrix operations and their geometric interpretations in graphics.

---

### 4. Examples of Combined Transformations

Let's illustrate with some common scenarios:

**Example 1: Rotation about an Arbitrary Point**

To rotate a point $(x, y)$ by an angle $\theta$ about an arbitrary point $(x_p, y_p)$:

1.  **Translate** the pivot point $(x_p, y_p)$ to the origin. This is done by translating by $(-x_p, -y_p)$.
    $$
    \mathbf{T}_{-\mathbf{x}_\mathbf{p}, -\mathbf{y}_\mathbf{p}} = \begin{bmatrix} 1 & 0 & -x_p \\ 0 & 1 & -y_p \\ 0 & 0 & 1 \end{bmatrix}
    $$

2.  **Rotate** the object about the origin by angle $\theta$.
    $$
    \mathbf{R}(\theta) = \begin{bmatrix} \cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{bmatrix}
    $$

3.  **Translate** the object back by $(x_p, y_p)$.
    $$
    \mathbf{T}_{\mathbf{x}_\mathbf{p}, \mathbf{y}_\mathbf{p}} = \begin{bmatrix} 1 & 0 & x_p \\ 0 & 1 & y_p \\ 0 & 0 & 1 \end{bmatrix}
    $$

The combined transformation matrix $\mathbf{M}$ is:

$$
\mathbf{M} = \mathbf{T}_{\mathbf{x}_\mathbf{p}, \mathbf{y}_\mathbf{p}} \mathbf{R}(\theta) \mathbf{T}_{-\mathbf{x}_\mathbf{p}, -\mathbf{y}_\mathbf{p}}
$$

$$
\mathbf{M} = \begin{bmatrix} 1 & 0 & x_p \\ 0 & 1 & y_p \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} \cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & -x_p \\ 0 & 1 & -y_p \\ 0 & 0 & 1 \end{bmatrix}
$$

Performing the matrix multiplication:

$$
\mathbf{M} = \begin{bmatrix} \cos\theta & -\sin\theta & x_p(1-\cos\theta) + y_p\sin\theta \\ \sin\theta & \cos\theta & y_p(1-\cos\theta) - x_p\sin\theta \\ 0 & 0 & 1 \end{bmatrix}
$$

**Example 2: Scaling about an Arbitrary Point**

To scale a point $(x, y)$ by factors $(sx, sy)$ about an arbitrary point $(x_p, y_p)$:

1.  **Translate** the pivot point $(x_p, y_p)$ to the origin by $(-x_p, -y_p)$.
    $$
    \mathbf{T}_{-\mathbf{x}_\mathbf{p}, -\mathbf{y}_\mathbf{p}} = \begin{bmatrix} 1 & 0 & -x_p \\ 0 & 1 & -y_p \\ 0 & 0 & 1 \end{bmatrix}
    $$

2.  **Scale** the object about the origin by $(sx, sy)$.
    $$
    \mathbf{S}(sx, sy) = \begin{bmatrix} sx & 0 & 0 \\ 0 & sy & 0 \\ 0 & 0 & 1 \end{bmatrix}
    $$

3.  **Translate** the object back by $(x_p, y_p)$.
    $$
    \mathbf{T}_{\mathbf{x}_\mathbf{p}, \mathbf{y}_\mathbf{p}} = \begin{bmatrix} 1 & 0 & x_p \\ 0 & 1 & y_p \\ 0 & 0 & 1 \end{bmatrix}
    $$

The combined transformation matrix $\mathbf{M}$ is:

$$
\mathbf{M} = \mathbf{T}_{\mathbf{x}_\mathbf{p}, \mathbf{y}_\mathbf{p}} \mathbf{S}(sx, sy) \mathbf{T}_{-\mathbf{x}_\mathbf{p}, -\mathbf{y}_\mathbf{p}}
$$

$$
\mathbf{M} = \begin{bmatrix} 1 & 0 & x_p \\ 0 & 1 & y_p \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} sx & 0 & 0 \\ 0 & sy & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & -x_p \\ 0 & 1 & -y_p \\ 0 & 0 & 1 \end{bmatrix}
$$

Performing the matrix multiplication:

$$
\mathbf{M} = \begin{bmatrix} sx & 0 & x_p(1-sx) \\ 0 & sy & y_p(1-sy) \\ 0 & 0 & 1 \end{bmatrix}
$$

**Learning Outcome Addressed:** Applying the principles of combined transformations to solve practical geometric problems like rotation and scaling about arbitrary points.

**Relevant Textbooks:**

*   **Computer Graphics with open GL, by Donald Hearn, M. Pauline Baker and Warren Carithers:** Provides numerous examples and step-by-step derivations of combined transformations for various geometric operations.
*   **CAD/CAM : Theory and Practice by Ibrahim Zeid, R Sivasubramanian:** Includes practical examples of combining transformations for modeling and manipulation of objects.

---

### 5. Order of Transformations and its Impact

**The order in which transformations are applied is crucial.** For example, rotating and then translating an object generally results in a different final position than translating and then rotating it.

**Example: Translate then Rotate vs. Rotate then Translate**

Consider a point P(2, 1) and the following transformations:
1.  Translate by (1, 0)
2.  Rotate by 90 degrees counter-clockwise about the origin.

**Scenario 1: Translate then Rotate**

*   **Translation Matrix:** $\mathbf{T}(1, 0) = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$
*   **Rotation Matrix:** $\mathbf{R}(90^\circ) = \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}$

*   **Combined Matrix:** $\mathbf{M}_{TR} = \mathbf{R}(90^\circ) \mathbf{T}(1, 0) = \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 1 \\ 0 & 0 & 1 \end{bmatrix}$

*   **Transforming Point P(2, 1):**
    $$
    \begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 1 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 2 \\ 1 \\ 1 \end{bmatrix} = \begin{bmatrix} -1 \\ 3 \\ 1 \end{bmatrix}
    $$
    So, P'( -1, 3).

**Scenario 2: Rotate then Translate**

*   **Rotation Matrix:** $\mathbf{R}(90^\circ) = \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}$
*   **Translation Matrix:** $\mathbf{T}(1, 0) = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$

*   **Combined Matrix:** $\mathbf{M}_{RT} = \mathbf{T}(1, 0) \mathbf{R}(90^\circ) = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 0 & -1 & 1 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}$

*   **Transforming Point P(2, 1):**
    $$
    \begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 0 & -1 & 1 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 2 \\ 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 2 \\ 1 \end{bmatrix}
    $$
    So, P'( 0, 2).

As you can see, the results are different: P'(-1, 3) vs. P'(0, 2). This highlights the importance of the order of operations in combined transformations.

**General Rule for Combining Translation and Other Transformations:**

*   If a rotation or scaling is performed *about an arbitrary point*, the translation to the origin, the rotation/scaling, and the translation back are applied in that specific order.
*   If a translation is performed *after* a rotation or scaling about the origin, it will shift the entire rotated/scaled object.
*   If a translation is performed *before* a rotation or scaling about the origin, the rotation/scaling will be applied relative to the new translated position.

**Learning Outcome Addressed:** Recognizing and understanding the commutative property (or lack thereof) for different pairs of transformations.

**Important Point to Remember:** Translation does not commute with rotation or scaling. The order of multiplication of matrices matters.

---

### 6. Practice Questions and Exercises

**Question 1:**
A point P(3, 4) is to be subjected to the following transformations in order:
1.  Scale by a factor of 2 in the x-direction and 0.5 in the y-direction.
2.  Rotate by 45 degrees counter-clockwise about the origin.
3.  Translate by (2, -1).

Find the final coordinates of the point P after these transformations.

**Answer 1:**

1.  **Scaling Matrix:** $\mathbf{S}(2, 0.5) = \begin{bmatrix} 2 & 0 & 0 \\ 0 & 0.5 & 0 \\ 0 & 0 & 1 \end{bmatrix}$
2.  **Rotation Matrix:** $\mathbf{R}(45^\circ) = \begin{bmatrix} \cos45^\circ & -\sin45^\circ & 0 \\ \sin45^\circ & \cos45^\circ & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1/\sqrt{2} & -1/\sqrt{2} & 0 \\ 1/\sqrt{2} & 1/\sqrt{2} & 0 \\ 0 & 0 & 1 \end{bmatrix}$
3.  **Translation Matrix:** $\mathbf{T}(2, -1) = \begin{bmatrix} 1 & 0 & 2 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{bmatrix}$

**Combined Matrix:** $\mathbf{M} = \mathbf{T}(2, -1) \mathbf{R}(45^\circ) \mathbf{S}(2, 0.5)$

First, calculate $\mathbf{R}(45^\circ) \mathbf{S}(2, 0.5)$:
$$
\begin{bmatrix} 1/\sqrt{2} & -1/\sqrt{2} & 0 \\ 1/\sqrt{2} & 1/\sqrt{2} & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 2 & 0 & 0 \\ 0 & 0.5 & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 2/\sqrt{2} & -0.5/\sqrt{2} & 0 \\ 2/\sqrt{2} & 0.5/\sqrt{2} & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} \sqrt{2} & -1/(2\sqrt{2}) & 0 \\ \sqrt{2} & 1/(2\sqrt{2}) & 0 \\ 0 & 0 & 1 \end{bmatrix}
$$

Now, multiply by $\mathbf{T}(2, -1)$:
$$
\mathbf{M} = \begin{bmatrix} 1 & 0 & 2 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} \sqrt{2} & -1/(2\sqrt{2}) & 0 \\ \sqrt{2} & 1/(2\sqrt{2}) & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} \sqrt{2} & -1/(2\sqrt{2}) & 2 \\ \sqrt{2} & 1/(2\sqrt{2}) & -1 \\ 0 & 0 & 1 \end{bmatrix}
$$

Transform point P(3, 4):
$$
\begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} \sqrt{2} & -1/(2\sqrt{2}) & 2 \\ \sqrt{2} & 1/(2\sqrt{2}) & -1 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 3 \\ 4 \\ 1 \end{bmatrix} = \begin{bmatrix} 3\sqrt{2} - 4/(2\sqrt{2}) + 2 \\ 3\sqrt{2} + 4/(2\sqrt{2}) - 1 \\ 1 \end{bmatrix}
$$
$$
\begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 3\sqrt{2} - \sqrt{2} + 2 \\ 3\sqrt{2} + \sqrt{2} - 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 2\sqrt{2} + 2 \\ 4\sqrt{2} - 1 \\ 1 \end{bmatrix}
$$

Final coordinates are approximately $(2 \times 1.414 + 2, 4 \times 1.414 - 1) \approx (4.828, 4.656)$.

**Question 2:**
Derive the combined transformation matrix for rotating a point by angle $\theta$ about a point $(x_p, y_p)$.

**Answer 2:**
This was derived in Section 4, Example 1. The combined matrix is:
$$
\mathbf{M} = \begin{bmatrix} \cos\theta & -\sin\theta & x_p(1-\cos\theta) + y_p\sin\theta \\ \sin\theta & \cos\theta & y_p(1-\cos\theta) - x_p\sin\theta \\ 0 & 0 & 1 \end{bmatrix}
$$

**Question 3:**
If you have a transformation $\mathbf{T}_A$ and then $\mathbf{T}_B$, the combined transformation is $\mathbf{T}_B \mathbf{T}_A$. True or False?

**Answer 3:**
True. The transformation applied first is on the rightmost side of the matrix multiplication when transforming a point vector.

---

### 7. Summary and Key Takeaways

*   **Combined transformations** simplify the process of applying multiple transformations sequentially.
*   **Homogeneous coordinates** are used to represent 2D points and transformations with matrices, enabling the combination of translations with other transformations.
*   Each 2D transformation (translation, rotation, scaling, reflection) has a corresponding 3x3 matrix in homogeneous coordinates.
*   The combined transformation matrix is obtained by **multiplying the individual transformation matrices in the correct order**.
*   The **order of transformations is critical** and significantly affects the final result, especially when translations are involved with rotations or scalings.
*   Understanding the mathematical basis of matrix multiplication is essential for deriving and applying combined transformations correctly.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 8. Further Reading and References

*   **Groover, M.P., & Zimmers, E.M., Jr. (2014).** *CAD/CAM Computer Aided Design and Manufacturing.* Prentice Hall of India. (Chapter on Geometric Transformations)
*   **Zeid, I., & Sivasubramanian, R. (2009).** *CAD/CAM : Theory and Practice.* McGraw Hill Education. (Chapter on Two-Dimensional Transformations)
*   **Rogers, D. F., & Adams, J. A. (1990).** *Mathematical Elements in Computer Graphics.* McGraw-Hill. (Sections on Homogeneous Coordinates and Matrix Transformations)
*   **Hearn, D., Baker, M. P., & Carithers, W. (2001).** *Computer Graphics with open GL.* Pearson Education. (Chapters on Basic Transformations and Matrix Representations)

---