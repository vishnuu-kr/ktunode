---
title: "Homogeneous coordinates, Translations and rotations"
subject: "ROBOTICS"
module: "Module 2: Direct Kinematics"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464248"
status: "completed"
scrapedAt: "2026-05-20T18:18:41.700Z"
---
# ROBOTICS - Module 2: Direct Kinematics

## Topic: Homogeneous Coordinates, Translations and Rotations

This module focuses on understanding how to represent the position and orientation of a robot's end-effector in space. We will explore the mathematical tools necessary for this representation, primarily homogeneous coordinates, and then delve into the fundamental transformations: translations and rotations.

**Course Outcomes Addressed:**

*   **CO2:** Obtain forward and inverse kinematic models of robotic manipulators (Knowledge Level: K3) - This module lays the groundwork for CO2 by introducing the transformations that form the building blocks of forward kinematic models.

---

### 1. Introduction to Kinematics

**Definition:** Kinematics is the study of motion without considering the forces that cause the motion. In robotics, it deals with the relationship between the joint variables of a robot and the position and orientation of its end-effector.

**Key Concepts:**

*   **Forward Kinematics:** Given the joint variables (e.g., joint angles for revolute joints, link extensions for prismatic joints), determine the position and orientation of the end-effector.
*   **Inverse Kinematics:** Given the desired position and orientation of the end-effector, determine the corresponding joint variables.

**Importance:** Understanding kinematics is crucial for:
*   **Path Planning:** Determining how to move the robot to a desired location.
*   **Control:** Calculating the necessary joint commands to achieve the desired end-effector motion.
*   **Simulation:** Creating realistic models of robot behavior.

---

### 2. Homogeneous Coordinates

**Motivation:**
When dealing with multiple transformations (translations and rotations), applying them sequentially in 3D Euclidean space (using 3x3 rotation matrices and 3x1 translation vectors) becomes cumbersome. Multiplying a rotation matrix by a translation vector requires special handling. Homogeneous coordinates provide a unified framework to represent both translations and rotations using matrix multiplication, simplifying the composition of transformations.

**Concept:**
In homogeneous coordinates, a point in n-dimensional Euclidean space is represented by an (n+1)-dimensional vector. For a 3D point $(x, y, z)$, its homogeneous coordinate representation is $(x, y, z, 1)$.

**Transformation Matrices:**

A rigid body transformation (combining rotation and translation) in 3D can be represented by a 4x4 matrix called the **homogeneous transformation matrix**.

**2.1. Translation:**

To translate a point $P = \begin{bmatrix} x \\ y \\ z \end{bmatrix}$ by a vector $\mathbf{d} = \begin{bmatrix} d_x \\ d_y \\ d_z \end{bmatrix}$, we use the following homogeneous transformation matrix, $T_{trans}$:

$$
T_{trans} = \begin{bmatrix}
1 & 0 & 0 & d_x \\
0 & 1 & 0 & d_y \\
0 & 0 & 1 & d_z \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

To apply the translation to the point $P$, we first convert $P$ to its homogeneous form $P_h = \begin{bmatrix} x \\ y \\ z \\ 1 \end{bmatrix}$. Then, the translated point $P'$ in homogeneous coordinates is:

$$
P'_h = T_{trans} \cdot P_h = \begin{bmatrix}
1 & 0 & 0 & d_x \\
0 & 1 & 0 & d_y \\
0 & 0 & 1 & d_z \\
0 & 0 & 0 & 1
\end{bmatrix} \begin{bmatrix} x \\ y \\ z \\ 1 \end{bmatrix} = \begin{bmatrix} x + d_x \\ y + d_y \\ z + d_z \\ 1 \end{bmatrix}
$$

The resulting 3D point is $\begin{bmatrix} x + d_x \\ y + d_y \\ z + d_z \end{bmatrix}$.

**Example:**
Translate the point (1, 2, 3) by (4, 5, 6).

$P = \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}$, $\mathbf{d} = \begin{bmatrix} 4 \\ 5 \\ 6 \end{bmatrix}$

$T_{trans} = \begin{bmatrix}
1 & 0 & 0 & 4 \\
0 & 1 & 0 & 5 \\
0 & 0 & 1 & 6 \\
0 & 0 & 0 & 1
\end{bmatrix}$

$P_h = \begin{bmatrix} 1 \\ 2 \\ 3 \\ 1 \end{bmatrix}$

$P'_h = T_{trans} \cdot P_h = \begin{bmatrix}
1 & 0 & 0 & 4 \\
0 & 1 & 0 & 5 \\
0 & 0 & 1 & 6 \\
0 & 0 & 0 & 1
\end{bmatrix} \begin{bmatrix} 1 \\ 2 \\ 3 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 + 4 \\ 2 + 5 \\ 3 + 6 \\ 1 \end{bmatrix} = \begin{bmatrix} 5 \\ 7 \\ 9 \\ 1 \end{bmatrix}$

The translated point is (5, 7, 9).

**2.2. Rotation:**

Rotations are performed around specific axes (X, Y, or Z). The angle of rotation is typically denoted by $\theta$.

*   **Rotation about the Z-axis ($R_z(\theta)$):**
    This transformation rotates a point around the Z-axis by an angle $\theta$. The Z-coordinate remains unchanged.

    $$
    R_z(\theta) = \begin{bmatrix}
    \cos \theta & -\sin \theta & 0 & 0 \\
    \sin \theta & \cos \theta & 0 & 0 \\
    0 & 0 & 1 & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix}
    $$

*   **Rotation about the Y-axis ($R_y(\theta)$):**
    This transformation rotates a point around the Y-axis by an angle $\theta$.

    $$
    R_y(\theta) = \begin{bmatrix}
    \cos \theta & 0 & \sin \theta & 0 \\
    0 & 1 & 0 & 0 \\
    -\sin \theta & 0 & \cos \theta & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix}
    $$

*   **Rotation about the X-axis ($R_x(\theta)$):**
    This transformation rotates a point around the X-axis by an angle $\theta$.

    $$
    R_x(\theta) = \begin{bmatrix}
    1 & 0 & 0 & 0 \\
    0 & \cos \theta & -\sin \theta & 0 \\
    0 & \sin \theta & \cos \theta & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix}
    $$

**Example:**
Rotate the point (1, 0, 0) about the Z-axis by 90 degrees ($\theta = \pi/2$ radians or 90 degrees).

$P = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$, $\theta = 90^\circ$

$R_z(90^\circ) = \begin{bmatrix}
\cos 90^\circ & -\sin 90^\circ & 0 & 0 \\
\sin 90^\circ & \cos 90^\circ & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} = \begin{bmatrix}
0 & -1 & 0 & 0 \\
1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}$

$P_h = \begin{bmatrix} 1 \\ 0 \\ 0 \\ 1 \end{bmatrix}$

$P'_h = R_z(90^\circ) \cdot P_h = \begin{bmatrix}
0 & -1 & 0 & 0 \\
1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} \begin{bmatrix} 1 \\ 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \\ 0 \\ 1 \end{bmatrix}$

The rotated point is (0, 1, 0). This makes sense, as rotating (1, 0, 0) by 90 degrees around the Z-axis in the XY plane results in (0, 1, 0).

**2.3. Combined Translation and Rotation:**

A general homogeneous transformation matrix $T$ that combines a rotation matrix $R$ and a translation vector $\mathbf{d}$ is:

$$
T = \begin{bmatrix}
R & \mathbf{d} \\
\mathbf{0}^T & 1
\end{bmatrix} = \begin{bmatrix}
r_{11} & r_{12} & r_{13} & d_x \\
r_{21} & r_{22} & r_{23} & d_y \\
r_{31} & r_{32} & r_{33} & d_z \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

where $R$ is a 3x3 rotation matrix and $\mathbf{d} = \begin{bmatrix} d_x \\ d_y \\ d_z \end{bmatrix}$.

Applying this to a point $P_h$:

$$
P'_h = T \cdot P_h = \begin{bmatrix}
R & \mathbf{d} \\
\mathbf{0}^T & 1
\end{bmatrix} \begin{bmatrix} P \\ 1 \end{bmatrix} = \begin{bmatrix} R \cdot P + \mathbf{d} \\ 1 \end{bmatrix}
$$

This shows that the first three components of $P'_h$ are the rotated point ($R \cdot P$) plus the translation vector ($\mathbf{d}$).

---

### 3. Composition of Transformations

A significant advantage of homogeneous coordinates is the ability to represent the composition of multiple transformations as a single matrix multiplication. If we have a sequence of transformations $T_1, T_2, \dots, T_n$, the combined transformation $T_{total}$ is:

$$
T_{total} = T_n \cdot T_{n-1} \cdot \dots \cdot T_2 \cdot T_1
$$

Applying this composite matrix to a point $P_h$:

$$
P'_{total, h} = T_{total} \cdot P_h
$$

**Order of Operations Matters:**
The order in which transformations are applied is crucial. For example, translating then rotating is generally different from rotating then translating.

Let's consider a point $P$ and two transformations: a translation $T_{trans1}$ followed by a rotation $R_z(\theta)$.

1.  **Translate first, then rotate:**
    $P'_h = T_{trans1} \cdot P_h$
    $P''_{h} = R_z(\theta) \cdot P'_h = R_z(\theta) \cdot T_{trans1} \cdot P_h$
    The composite matrix is $T_{total1} = R_z(\theta) \cdot T_{trans1}$.

2.  **Rotate first, then translate:**
    $P'_h = R_z(\theta) \cdot P_h$
    $P''_{h} = T_{trans2} \cdot P'_h = T_{trans2} \cdot R_z(\theta) \cdot P_h$
    The composite matrix is $T_{total2} = T_{trans2} \cdot R_z(\theta)$.

**Example:**
Translate the point (1, 0, 0) by (2, 0, 0) and then rotate it by 90 degrees about the Z-axis.

$P = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$, $\mathbf{d} = \begin{bmatrix} 2 \\ 0 \\ 0 \end{bmatrix}$, $\theta = 90^\circ$.

$T_{trans} = \begin{bmatrix}
1 & 0 & 0 & 2 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}$,
$R_z(90^\circ) = \begin{bmatrix}
0 & -1 & 0 & 0 \\
1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}$

$P_h = \begin{bmatrix} 1 \\ 0 \\ 0 \\ 1 \end{bmatrix}$

**Method 1: Translate then Rotate**
$T_{total} = R_z(90^\circ) \cdot T_{trans}$
$$
T_{total} = \begin{bmatrix}
0 & -1 & 0 & 0 \\
1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} \begin{bmatrix}
1 & 0 & 0 & 2 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} = \begin{bmatrix}
0 & -1 & 0 & 0 \\
1 & 0 & 0 & 2 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$
$P'_{h} = T_{total} \cdot P_h = \begin{bmatrix}
0 & -1 & 0 & 0 \\
1 & 0 & 0 & 2 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} \begin{bmatrix} 1 \\ 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 1+2 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 3 \\ 0 \\ 1 \end{bmatrix}$

The final point is (0, 3, 0).

Let's verify this step-by-step:
1. Translate (1, 0, 0) by (2, 0, 0) -> (3, 0, 0).
2. Rotate (3, 0, 0) by 90 degrees about Z-axis -> (0, 3, 0). This matches.

---

### 4. Transformations in Robotics (Frame Transformations)

In robotics, we often define different coordinate frames:
*   **World Frame:** A fixed reference frame.
*   **Base Frame:** The frame attached to the base of the robot.
*   **Link Frames:** Frames attached to each link of the robot.
*   **End-Effector Frame:** The frame attached to the end-effector.

**Denavit-Hartenberg (D-H) Convention:**
A systematic method for assigning coordinate frames to robot links and defining transformations between adjacent links. While not the primary focus of this topic, it's important to know that these transformations (translations and rotations) are the core components used in D-H parameters to define the robot's kinematics.

A homogeneous transformation matrix $A_{i-1}^i$ represents the transformation from frame $i-1$ to frame $i$. For a robot with $n$ links, the transformation from the base frame (0) to the end-effector frame (n) is the product of individual link transformations:

$$
T_n^0 = A_1^0 \cdot A_2^1 \cdot A_3^2 \cdot \dots \cdot A_n^{n-1}
$$

Each $A_j^{j-1}$ is a 4x4 homogeneous transformation matrix that encapsulates a translation and a rotation.

---

### 5. Important Points to Remember

*   **Homogeneous coordinates (x, y, z, 1) allow us to represent 3D points and transformations using 4x4 matrices.**
*   **Translations are represented by matrices with an identity matrix in the top-left 3x3 sub-block and the translation vector in the last column.**
*   **Rotations about the X, Y, and Z axes have specific 4x4 matrix forms.**
*   **The composition of multiple transformations is achieved by multiplying their corresponding homogeneous transformation matrices.**
*   **The order of matrix multiplication matters: $T_A \cdot T_B$ applies $T_B$ first, then $T_A$.**
*   **Homogeneous transformations simplify the chaining of transformations in robotic manipulators, forming the basis of forward kinematics.**

---

### 6. Practice Questions and Exercises

**Question 1:**
A point $P$ is located at (2, 3, 1).
(a) What is the homogeneous coordinate representation of $P$?
(b) Write down the homogeneous transformation matrix for translating $P$ by the vector $\mathbf{d} = [-1, 4, 0]$.
(c) Calculate the new homogeneous coordinates of the translated point. What is the final 3D Cartesian coordinate?

**Answer 1:**
(a) $P_h = \begin{bmatrix} 2 \\ 3 \\ 1 \\ 1 \end{bmatrix}$

(b) The translation matrix $T_{trans}$ is:
$$
T_{trans} = \begin{bmatrix}
1 & 0 & 0 & -1 \\
0 & 1 & 0 & 4 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

(c) $P'_h = T_{trans} \cdot P_h = \begin{bmatrix}
1 & 0 & 0 & -1 \\
0 & 1 & 0 & 4 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} \begin{bmatrix} 2 \\ 3 \\ 1 \\ 1 \end{bmatrix} = \begin{bmatrix}
1(2) + 0(3) + 0(1) + (-1)(1) \\
0(2) + 1(3) + 0(1) + 4(1) \\
0(2) + 0(3) + 1(1) + 0(1) \\
0(2) + 0(3) + 0(1) + 1(1)
\end{bmatrix} = \begin{bmatrix} 2 - 1 \\ 3 + 4 \\ 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 7 \\ 1 \\ 1 \end{bmatrix}$
The final 3D Cartesian coordinate is (1, 7, 1).

---

**Question 2:**
Consider a point $P$ at (1, 1, 0). Rotate it by 45 degrees ($\pi/4$ radians) about the X-axis.
(a) Write down the rotation matrix $R_x(\pi/4)$.
(b) Calculate the new homogeneous coordinates of the rotated point. What is the final 3D Cartesian coordinate? (Use $\cos(45^\circ) = \sin(45^\circ) = \frac{\sqrt{2}}{2} \approx 0.707$)

**Answer 2:**
(a) The rotation matrix $R_x(\pi/4)$ is:
$$
R_x(\pi/4) = \begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & \cos(\pi/4) & -\sin(\pi/4) & 0 \\
0 & \sin(\pi/4) & \cos(\pi/4) & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} = \begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & \frac{\sqrt{2}}{2} & -\frac{\sqrt{2}}{2} & 0 \\
0 & \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

(b) $P_h = \begin{bmatrix} 1 \\ 1 \\ 0 \\ 1 \end{bmatrix}$
$P'_h = R_x(\pi/4) \cdot P_h = \begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & \frac{\sqrt{2}}{2} & -\frac{\sqrt{2}}{2} & 0 \\
0 & \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} \begin{bmatrix} 1 \\ 1 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix}
1(1) + 0(1) + 0(0) + 0(1) \\
0(1) + \frac{\sqrt{2}}{2}(1) - \frac{\sqrt{2}}{2}(0) + 0(1) \\
0(1) + \frac{\sqrt{2}}{2}(1) + \frac{\sqrt{2}}{2}(0) + 0(1) \\
0(1) + 0(1) + 0(0) + 1(1)
\end{bmatrix} = \begin{bmatrix} 1 \\ \frac{\sqrt{2}}{2} \\ \frac{\sqrt{2}}{2} \\ 1 \end{bmatrix}$
The final 3D Cartesian coordinate is $(1, \frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2})$ which is approximately $(1, 0.707, 0.707)$.

---

**Question 3 (Composition):**
Consider a point $P$ at the origin (0, 0, 0). First, translate it by (1, 2, 3) and then rotate the result by 90 degrees about the Y-axis.
(a) Determine the composite homogeneous transformation matrix for this sequence of operations.
(b) Apply this composite matrix to the point $P$ and find the final Cartesian coordinates.

**Answer 3:**
$P = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$.
Translation vector $\mathbf{d} = \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}$.
Rotation angle $\theta = 90^\circ$ about Y-axis.

$T_{trans} = \begin{bmatrix}
1 & 0 & 0 & 1 \\
0 & 1 & 0 & 2 \\
0 & 0 & 1 & 3 \\
0 & 0 & 0 & 1
\end{bmatrix}$

$R_y(90^\circ) = \begin{bmatrix}
\cos 90^\circ & 0 & \sin 90^\circ & 0 \\
0 & 1 & 0 & 0 \\
-\sin 90^\circ & 0 & \cos 90^\circ & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} = \begin{bmatrix}
0 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 \\
-1 & 0 & 0 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}$

(a) Composite matrix $T_{total} = R_y(90^\circ) \cdot T_{trans}$ (Apply translation first, then rotation)
$$
T_{total} = \begin{bmatrix}
0 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 \\
-1 & 0 & 0 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} \begin{bmatrix}
1 & 0 & 0 & 1 \\
0 & 1 & 0 & 2 \\
0 & 0 & 1 & 3 \\
0 & 0 & 0 & 1
\end{bmatrix} = \begin{bmatrix}
0 & 0 & 1 & 3 \\
0 & 1 & 0 & 2 \\
-1 & 0 & 0 & -1 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

(b) $P_h = \begin{bmatrix} 0 \\ 0 \\ 0 \\ 1 \end{bmatrix}$
$P'_h = T_{total} \cdot P_h = \begin{bmatrix}
0 & 0 & 1 & 3 \\
0 & 1 & 0 & 2 \\
-1 & 0 & 0 & -1 \\
0 & 0 & 0 & 1
\end{bmatrix} \begin{bmatrix} 0 \\ 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 2 \\ -1 \\ 1 \end{bmatrix}$
The final Cartesian coordinate is (3, 2, -1).

Let's check step-by-step:
1. Translate origin (0,0,0) by (1,2,3) -> (1,2,3).
2. Rotate (1,2,3) by 90 degrees about Y-axis:
   X becomes Z: $1 \cdot \cos(90) + 3 \cdot \sin(90) = 0 + 3(1) = 3$.
   Y remains Y: 2.
   Z becomes -X: $-1 \cdot \sin(90) + 3 \cdot \cos(90) = -1(1) + 0 = -1$.
   Result: (3, 2, -1). This matches.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 7. References

*   **Fundamentals of Robotics – Analysis and Control by Robert. J. Schilling (Prentice Hall of India, 1996):** Chapter 3 often covers Kinematics and transformations.
*   **Introduction to Robotics (Mechanics and Control) by John. J. Craig (Pearson Education Asia, 2002):** Chapter 2 typically deals with homogeneous transformations and frame transformations.
*   **Robotics and Control by R K Mittal (Tata McGraw Hill, New Delhi, 2003):** Similar coverage in chapters related to robot kinematics.
*   **Modern Robotics Mechanics, Planning and Control by Kevin M. Lynch, Frank C. Park:** Provides a rigorous treatment of transformations and homogeneous coordinates.

This topic is foundational for understanding how to represent robot configurations and will be extended in subsequent modules to derive complete forward kinematic equations.