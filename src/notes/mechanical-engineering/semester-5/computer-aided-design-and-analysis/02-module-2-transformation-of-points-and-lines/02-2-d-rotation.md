---
title: "2-D rotation"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS"
module: "Module 2: Transformation of points and lines"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044634f0"
status: "completed"
scrapedAt: "2026-05-20T17:58:41.182Z"
---
# Computer Aided Design and Analysis - Module 2: Transformation of Points and Lines

## Topic 2: 2-D Rotation

This topic delves into the fundamental concept of 2-D rotation, a crucial transformation technique used extensively in Computer-Aided Design (CAD) and Computer Graphics. Understanding rotation is essential for manipulating and positioning objects in a 2D space.

---

### 1. Learning Outcomes Covered

This topic specifically addresses the following learning outcome:

*   **Apply 2D transformation techniques, including rotation, reflection, scaling, and line and curve drawing algorithms in CAD software.** (CO2: Knowledge Level: K3)

---

### 2. Key Concepts and Definitions

#### 2.1 What is 2-D Rotation?

**2-D Rotation** is a geometric transformation that moves points or objects around a fixed point, called the **center of rotation**, by a specified **angle of rotation**. In a 2-D Cartesian coordinate system, this rotation typically occurs in the XY plane.

#### 2.2 Rotation Around the Origin

The simplest form of 2-D rotation is rotation around the origin (0,0).

*   **Understanding the Transformation:**
    Consider a point P(x, y) in the 2D plane. When this point is rotated by an angle $\theta$ (theta) counterclockwise around the origin, its new coordinates P'(x', y') can be calculated using trigonometric relationships.

*   **Derivation of Rotation Formulas:**
    Using polar coordinates, a point P(x, y) can be represented as:
    $x = r \cos(\phi)$
    $y = r \sin(\phi)$
    where 'r' is the distance from the origin to the point P, and '$\phi$' is the angle the line segment OP makes with the positive x-axis.

    After rotating by an angle $\theta$ counterclockwise, the new angle becomes $(\phi + \theta)$. The new coordinates P'(x', y') are:
    $x' = r \cos(\phi + \theta)$
    $y' = r \sin(\phi + \theta)$

    Using the trigonometric sum identities:
    $\cos(A + B) = \cos A \cos B - \sin A \sin B$
    $\sin(A + B) = \sin A \cos B + \cos A \sin B$

    Substituting these into the equations for x' and y':
    $x' = r (\cos \phi \cos \theta - \sin \phi \sin \theta)$
    $y' = r (\sin \phi \cos \theta + \cos \phi \sin \theta)$

    Rearranging and substituting back x and y:
    $x' = (r \cos \phi) \cos \theta - (r \sin \phi) \sin \theta = x \cos \theta - y \sin \theta$
    $y' = (r \sin \phi) \cos \theta + (r \cos \phi) \sin \theta = y \cos \theta + x \sin \theta$

*   **Rotation Matrix (Counterclockwise):**
    The transformation can be represented in matrix form:

    $\begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}$

    Let $R(\theta)$ be the rotation matrix.

*   **Rotation Matrix (Clockwise):**
    A clockwise rotation by an angle $\theta$ is equivalent to a counterclockwise rotation by $-\theta$.
    $\cos(-\theta) = \cos \theta$
    $\sin(-\theta) = -\sin \theta$

    The clockwise rotation matrix is:

    $\begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} \cos \theta & \sin \theta \\ -\sin \theta & \cos \theta \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}$

#### 2.3 Rotation Around an Arbitrary Point (Center of Rotation)

In CAD applications, it's often necessary to rotate an object around a point other than the origin. This can be achieved by a sequence of three basic transformations:

1.  **Translate:** Move the center of rotation to the origin. If the center of rotation is $(x_r, y_r)$, we translate by $(-x_r, -y_r)$.
2.  **Rotate:** Perform the rotation around the origin by the desired angle $\theta$.
3.  **Translate Back:** Move the object back to its original position by translating by $(x_r, y_r)$.

*   **Mathematical Formulation:**
    Let the arbitrary center of rotation be $P_r(x_r, y_r)$ and the point to be rotated be $P(x, y)$. The new point $P'(x', y')$ is obtained as follows:

    *   **Step 1: Translation to Origin:**
        $x_1 = x - x_r$
        $y_1 = y - y_r$

    *   **Step 2: Rotation around Origin:**
        $x_2 = x_1 \cos \theta - y_1 \sin \theta$
        $y_2 = x_1 \sin \theta + y_1 \cos \theta$

    *   **Step 3: Translation back:**
        $x' = x_2 + x_r$
        $y' = y_2 + y_r$

*   **Combined Transformation Matrix (Using Homogeneous Coordinates):**
    While the above step-by-step method works, using homogeneous coordinates allows us to represent all transformations as matrix multiplications, making the process more efficient and uniform.

    The translation matrix to move the center of rotation to the origin is $T(-x_r, -y_r)$:
    $\begin{bmatrix} 1 & 0 & -x_r \\ 0 & 1 & -y_r \\ 0 & 0 & 1 \end{bmatrix}$

    The rotation matrix around the origin is $R(\theta)$:
    $\begin{bmatrix} \cos \theta & -\sin \theta & 0 \\ \sin \theta & \cos \theta & 0 \\ 0 & 0 & 1 \end{bmatrix}$

    The translation matrix to move back is $T(x_r, y_r)$:
    $\begin{bmatrix} 1 & 0 & x_r \\ 0 & 1 & y_r \\ 0 & 0 & 1 \end{bmatrix}$

    The composite transformation matrix $M$ is the product of these matrices:
    $M = T(x_r, y_r) \cdot R(\theta) \cdot T(-x_r, -y_r)$

    $\begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & x_r \\ 0 & 1 & y_r \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} \cos \theta & -\sin \theta & 0 \\ \sin \theta & \cos \theta & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & -x_r \\ 0 & 1 & -y_r \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}$

    Performing the matrix multiplication, we get:
    $M = \begin{bmatrix} \cos \theta & -\sin \theta & x_r(1-\cos \theta) + y_r \sin \theta \\ \sin \theta & \cos \theta & y_r(1-\cos \theta) - x_r \sin \theta \\ 0 & 0 & 1 \end{bmatrix}$

    The transformation equation in homogeneous coordinates is:
    $\begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix} = M \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}$

    Expanding this gives:
    $x' = x \cos \theta - y \sin \theta + x_r(1-\cos \theta) + y_r \sin \theta$
    $y' = x \sin \theta + y \cos \theta + y_r(1-\cos \theta) - x_r \sin \theta$

    These equations represent the rotation of point (x, y) by angle $\theta$ around the center of rotation $(x_r, y_r)$.

---

### 3. Examples

#### 3.1 Example 1: Rotation around the Origin

Rotate the point P(3, 4) by 90 degrees counterclockwise around the origin.

*   **Given:** P(x, y) = (3, 4), $\theta = 90^\circ$
*   **Formulas:**
    $x' = x \cos \theta - y \sin \theta$
    $y' = x \sin \theta + y \cos \theta$
*   **Calculations:**
    $\cos(90^\circ) = 0$
    $\sin(90^\circ) = 1$

    $x' = 3 \cos(90^\circ) - 4 \sin(90^\circ) = 3(0) - 4(1) = -4$
    $y' = 3 \sin(90^\circ) + 4 \cos(90^\circ) = 3(1) + 4(0) = 3$

*   **Result:** The new coordinates are P'(-4, 3).

#### 3.2 Example 2: Rotation around an Arbitrary Point

Rotate the point P(5, 2) by 45 degrees counterclockwise around the point $P_r(2, 1)$.

*   **Given:** P(x, y) = (5, 2), $P_r(x_r, y_r) = (2, 1)$, $\theta = 45^\circ$
*   **Values:**
    $\cos(45^\circ) = \frac{1}{\sqrt{2}} \approx 0.707$
    $\sin(45^\circ) = \frac{1}{\sqrt{2}} \approx 0.707$
*   **Method 1: Step-by-Step**
    1.  **Translate to Origin:**
        $x_1 = x - x_r = 5 - 2 = 3$
        $y_1 = y - y_r = 2 - 1 = 1$
        Point is now (3, 1) relative to the center of rotation.

    2.  **Rotate around Origin:**
        $x_2 = x_1 \cos \theta - y_1 \sin \theta = 3(0.707) - 1(0.707) = 2.121 - 0.707 = 1.414$
        $y_2 = x_1 \sin \theta + y_1 \cos \theta = 3(0.707) + 1(0.707) = 2.121 + 0.707 = 2.828$
        Rotated point relative to origin is (1.414, 2.828).

    3.  **Translate back:**
        $x' = x_2 + x_r = 1.414 + 2 = 3.414$
        $y' = y_2 + y_r = 2.828 + 1 = 3.828$

*   **Method 2: Using Combined Matrix**
    $x' = x \cos \theta - y \sin \theta + x_r(1-\cos \theta) + y_r \sin \theta$
    $y' = x \sin \theta + y \cos \theta + y_r(1-\cos \theta) - x_r \sin \theta$

    $x' = 5(0.707) - 2(0.707) + 2(1-0.707) + 1(0.707)$
    $x' = 3.535 - 1.414 + 2(0.293) + 0.707$
    $x' = 2.121 + 0.586 + 0.707 = 3.414$

    $y' = 5(0.707) + 2(0.707) + 1(1-0.707) - 2(0.707)$
    $y' = 3.535 + 1.414 + 0.293 - 1.414$
    $y' = 4.949 + 0.293 - 1.414 = 3.828$

*   **Result:** The new coordinates are P'(3.414, 3.828).

---

### 4. Importance in CAD

*   **Object Positioning and Orientation:** Rotation is fundamental for placing and orienting components in a design. For instance, rotating a gear to mesh with another gear or orienting a handle on a door. (Ulrich & Eppinger, 2020)
*   **Creating Patterns:** Repeated rotation can be used to create circular patterns, such as spokes on a wheel or patterns on decorative elements.
*   **User Interface Elements:** Rotating viewports or selected objects for better inspection and manipulation.
*   **Animation:** In dynamic CAD applications or simulations, rotation is a key element of animation.
*   **Geometric Modeling:** As a basic transformation, it underpins more complex geometric operations.

---

### 5. Important Points to Remember

*   **Rotation is generally counterclockwise by default** unless specified otherwise.
*   **The direction of rotation matters.** Clockwise rotation is a negative angle.
*   **Rotation around an arbitrary point can be decomposed into translation, rotation about the origin, and reverse translation.**
*   **Homogeneous coordinates** simplify the representation and concatenation of transformations, including rotation.
*   **Trigonometric functions (sin and cos) are key** to calculating the new coordinates.
*   The **order of transformations is crucial** when combining multiple transformations.

---

### 6. Practice Questions/Exercises

**Question 1:**
Rotate the point P(1, 2) by 180 degrees counterclockwise around the origin. What are the new coordinates?

**Question 2:**
A line segment connects points A(1, 1) and B(3, 4). Rotate this line segment by 90 degrees clockwise around the origin. Find the new coordinates of A' and B'.

**Question 3:**
Rotate the point P(6, 3) by 60 degrees counterclockwise around the center of rotation $P_r(3, 2)$. Calculate the new coordinates.

---

### 7. Answers to Practice Questions

**Answer 1:**
*   **Given:** P(x, y) = (1, 2), $\theta = 180^\circ$
*   **Formulas:**
    $x' = x \cos \theta - y \sin \theta$
    $y' = x \sin \theta + y \cos \theta$
*   **Calculations:**
    $\cos(180^\circ) = -1$
    $\sin(180^\circ) = 0$

    $x' = 1(-1) - 2(0) = -1$
    $y' = 1(0) + 2(-1) = -2$
*   **Result:** P'(-1, -2).

**Answer 2:**
*   **Given:** A(1, 1), B(3, 4), $\theta = -90^\circ$ (for clockwise rotation)
*   **Formulas:**
    $x' = x \cos \theta - y \sin \theta$
    $y' = x \sin \theta + y \cos \theta$
*   **Calculations:**
    $\cos(-90^\circ) = \cos(90^\circ) = 0$
    $\sin(-90^\circ) = -\sin(90^\circ) = -1$

    For point A(1, 1):
    $x'_A = 1(0) - 1(-1) = 1$
    $y'_A = 1(-1) + 1(0) = -1$
    A'(1, -1)

    For point B(3, 4):
    $x'_B = 3(0) - 4(-1) = 4$
    $y'_B = 3(-1) + 4(0) = -3$
    B'(4, -3)

*   **Result:** The new coordinates are A'(1, -1) and B'(4, -3).

**Answer 3:**
*   **Given:** P(x, y) = (6, 3), $P_r(x_r, y_r) = (3, 2)$, $\theta = 60^\circ$
*   **Values:**
    $\cos(60^\circ) = 0.5$
    $\sin(60^\circ) = \frac{\sqrt{3}}{2} \approx 0.866$
*   **Method: Step-by-Step**
    1.  **Translate to Origin:**
        $x_1 = 6 - 3 = 3$
        $y_1 = 3 - 2 = 1$

    2.  **Rotate around Origin:**
        $x_2 = 3 \cos(60^\circ) - 1 \sin(60^\circ) = 3(0.5) - 1(0.866) = 1.5 - 0.866 = 0.634$
        $y_2 = 3 \sin(60^\circ) + 1 \cos(60^\circ) = 3(0.866) + 1(0.5) = 2.598 + 0.5 = 3.098$

    3.  **Translate back:**
        $x' = 0.634 + 3 = 3.634$
        $y' = 3.098 + 2 = 5.098$

*   **Result:** The new coordinates are P'(3.634, 5.098).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 8. References and Further Reading

*   **Groover, M. P., & Zimmers, E. M., Jr. (2014).** *CAD/CAM Computer Aided Design and Manufacturing*. Prentice Hall of India. (Covers fundamental geometric transformations in detail.)
*   **Zeid, I., & Sivasubramanian, R. (2009).** *CAD/CAM : Theory and Practice*. McGraw Hill Education. (Provides a strong theoretical foundation for transformations.)
*   **Rogers, D. F., & Adams, J. A. (1990).** *Mathematical Elements in Computer Graphics*. McGraw-Hill. (Offers a deep dive into the mathematical underpinnings of computer graphics transformations.)
*   **Hearn, D., Baker, M. P., & Carithers, W. (2001).** *Computer Graphics with open GL*. Pearson Education. (Practical examples and implementation details related to graphics programming.)

---

### 9. Alignment with Course Outcomes

This topic directly supports **CO2: Apply 2D transformation techniques, including rotation, reflection, scaling, and line and curve drawing algorithms in CAD software.** Specifically, it focuses on the "rotation" aspect, providing the knowledge (K2) and the ability to apply these principles (K3) to understand how objects are manipulated in CAD systems. The mathematical formulations and examples are crucial for developing this applied skill.