---
title: "D-H Notations:"
subject: "ROBOTICS AND AUTOMATION"
module: "Module 1: Fundamentals of Robotics"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff185"
status: "completed"
scrapedAt: "2026-05-23T18:09:37.297Z"
---
# ROBOTICS AND AUTOMATION: Module 1: Fundamentals of Robotics

## Topic: D-H Notations

This topic introduces the Denavit-Hartenberg (D-H) convention, a standardized method for representing the kinematic structure of robotic manipulators. Understanding D-H notation is crucial for deriving the transformation matrices that describe the relationship between consecutive robot links, forming the basis for forward kinematics.

---

### 1. Learning Outcomes Covered

*   **LO 1: Describe the fundamental components and kinematic structure of robotic manipulators.** (Directly addressed by explaining how D-H notation represents link transformations.)
*   **LO 2: Apply forward and inverse kinematics for different types of robotic manipulators.** (D-H notation is the primary tool for deriving forward kinematics, which is a prerequisite for inverse kinematics.)

---

### 2. Key Concepts and Definitions

#### 2.1 What is D-H Notation?

The Denavit-Hartenberg (D-H) convention provides a systematic approach to describing the spatial relationship between the coordinate frames attached to consecutive links of a robotic manipulator. It uses a set of four homogeneous transformation parameters to define the transformation from one link frame to the next.

#### 2.2 Homogeneous Transformation Matrices

A homogeneous transformation matrix is a 4x4 matrix used to represent both rotation and translation in 3D space. It allows us to combine these transformations into a single matrix operation.

A general homogeneous transformation matrix `T` can be represented as:

$$
T = \begin{bmatrix}
R & p \\
0^T & 1
\end{bmatrix}
$$

where:
*   `R` is a 3x3 rotation matrix representing the orientation of one frame with respect to another.
*   `p` is a 3x1 translation vector representing the displacement of the origin of one frame from the origin of the other.
*   `0^T` is a 1x3 row vector of zeros.
*   `1` is a scalar.

#### 2.3 The Four D-H Parameters

For each joint `i` in a serial manipulator, the D-H convention defines a transformation from the coordinate frame of link `i-1` to the coordinate frame of link `i`. This transformation is parameterized by four values:

1.  **Link Length ($a_i$):** The distance between the $z_{i-1}$ axis and the $z_i$ axis, measured along the common normal to these axes.
2.  **Link Twist ($\alpha_i$):** The angle between the $z_{i-1}$ axis and the $z_i$ axis, measured about the common normal.
3.  **Link Offset ($d_i$):** The distance along the $z_i$ axis from the intersection of the $z_i$ axis with the common normal to the intersection of the $z_{i-1}$ axis with the common normal. This is the *variable* parameter for **prismatic joints**.
4.  **Joint Angle ($\theta_i$):** The angle between the $x_{i-1}$ axis and the $x_i$ axis, measured about the $z_i$ axis. This is the *variable* parameter for **revolute joints**.

#### 2.4 D-H Coordinate Frame Assignment Rules (Standard D-H)

The success of the D-H convention heavily relies on the consistent assignment of coordinate frames to each link. The following rules are essential:

1.  **Axis `z_i`:** The $z_i$ axis is aligned with the axis of motion of joint `i+1`. For revolute joints, $z_i$ is the axis of rotation. For prismatic joints, $z_i$ is along the direction of translation.
2.  **Axis `x_i`:** The $x_i$ axis is along the common normal to the $z_i$ and $z_{i-1}$ axes.
3.  **Axis `y_i`:** The $y_i$ axis is determined by the right-hand rule: $y_i = z_i \times x_i$.
4.  **Origin of Frame `i`:** The origin of frame `i` is at the intersection of the $z_i$ axis and the common normal to the $z_i$ and $z_{i-1}$ axes.

*   **Important Note:** The choice of the common normal can be ambiguous if the axes are parallel or intersect. The rules for assigning $x_i$ and the origin are critical for consistency.

#### 2.5 The D-H Transformation Matrix (Standard D-H)

The transformation from frame `i-1` to frame `i` can be achieved by a sequence of four basic transformations represented by the D-H parameters:

1.  **Rotate about $x_{i-1}$ by $\alpha_{i-1}$:**
    $$
    Rot(x, \alpha_{i-1}) = \begin{bmatrix}
    1 & 0 & 0 & 0 \\
    0 & \cos \alpha_{i-1} & -\sin \alpha_{i-1} & 0 \\
    0 & \sin \alpha_{i-1} & \cos \alpha_{i-1} & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix}
    $$
2.  **Translate along $x_{i-1}$ by $a_{i-1}$:**
    $$
    Trans(x, a_{i-1}) = \begin{bmatrix}
    1 & 0 & 0 & a_{i-1} \\
    0 & 1 & 0 & 0 \\
    0 & 0 & 1 & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix}
    $$
3.  **Rotate about $z_i$ by $\theta_i$:**
    $$
    Rot(z, \theta_i) = \begin{beginbmatrix}
    \cos \theta_i & -\sin \theta_i & 0 & 0 \\
    \sin \theta_i & \cos \theta_i & 0 & 0 \\
    0 & 0 & 1 & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix}
    $$
4.  **Translate along $z_i$ by $d_i$:**
    $$
    Trans(z, d_i) = \begin{bmatrix}
    1 & 0 & 0 & 0 \\
    0 & 1 & 0 & 0 \\
    0 & 0 & 1 & d_i \\
    0 & 0 & 0 & 1
    \end{bmatrix}
    $$

The combined transformation matrix from frame `i-1` to frame `i`, denoted as $A_i$, is obtained by multiplying these matrices in order:

$$
A_i = Rot(x, \alpha_{i-1}) \cdot Trans(x, a_{i-1}) \cdot Rot(z, \theta_i) \cdot Trans(z, d_i)
$$

**Correction/Clarification from Textbooks:**

Craig (Chapter 3) and Spong, Hutchinson, Vidyasagar (Chapter 2) present the D-H matrix as:

$$
A_i = \begin{bmatrix}
\cos \theta_i & -\sin \theta_i \cos \alpha_i & \sin \theta_i \sin \alpha_i & a_i \cos \theta_i \\
\sin \theta_i & \cos \theta_i \cos \alpha_i & -\cos \theta_i \sin \alpha_i & a_i \sin \theta_i \\
0 & \sin \alpha_i & \cos \alpha_i & d_i \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

This form is derived by combining the basic transformations and is the commonly used D-H transformation matrix. It represents the transformation from frame `i-1` to frame `i`.

#### 2.6 Forward Kinematics using D-H

The overall transformation from the base frame (frame 0) to the end-effector frame (frame N) of an N-joint robot is found by multiplying the individual D-H transformation matrices:

$$
T_{0}^N = A_1 \cdot A_2 \cdot A_3 \cdot \ldots \cdot A_N
$$

This matrix $T_0^N$ contains the position and orientation of the end-effector in the base frame.

#### 2.7 Modified D-H Notation

While the "standard" D-H convention is widely used, a "modified" D-H convention also exists. The key difference lies in where the coordinate frames are attached:

*   **Standard D-H:** Frame `i` is attached to link `i`, and the transformation $A_i$ describes the relationship between frame `i-1` and frame `i`. The parameters $(a_{i-1}, \alpha_{i-1}, d_i, \theta_i)$ define this transformation.
*   **Modified D-H:** Frame `i` is attached to link `i`, but the transformation $A_i$ describes the relationship between frame `i` and frame `i+1`. The parameters $(a_i, \alpha_i, d_{i+1}, \theta_{i+1})$ are used.

The modified D-H can sometimes simplify the derivation for certain robot structures. However, it's crucial to be consistent with whichever convention is chosen. For the purpose of these notes, we will primarily focus on the **Standard D-H Notation**.

---

### 3. D-H Table

A D-H table is a tabular representation of the four D-H parameters for each joint of a robotic manipulator. This table is crucial for systematically calculating the forward kinematics.

**Structure of a D-H Table:**

| Joint `i` | $a_{i-1}$ | $\alpha_{i-1}$ | $d_i$ | $\theta_i$ |
| :-------- | :-------- | :------------- | :---- | :--------- |
| 1         |           |                |       |            |
| 2         |           |                |       |            |
| ...       |           |                |       |            |
| N         |           |                |       |            |

*   **Joint `i`:** Refers to the $i$-th joint.
*   **$a_{i-1}$:** Link length connecting joint `i` to joint `i-1`.
*   **$\alpha_{i-1}$:** Link twist between the $z_{i-1}$ and $z_i$ axes.
*   **$d_i$:** Link offset along the $z_i$ axis. This is the variable for prismatic joints.
*   **$\theta_i$:** Joint angle about the $z_i$ axis. This is the variable for revolute joints.

---

### 4. Example: A Simple 2-DOF Planar Manipulator

Let's consider a simple 2-DOF planar manipulator to illustrate D-H notation.

*   **Link 0:** Base frame.
*   **Joint 1:** Revolute joint.
*   **Link 1:** Connects joint 1 to joint 2.
*   **Joint 2:** Revolute joint.
*   **Link 2:** End-effector frame.

**Assumptions for Frame Assignment:**

*   **Frame 0 (Base):** Origin at joint 1. $z_0$ is along the axis of rotation of joint 1. $x_0$ points horizontally along the first link. $y_0$ completes the right-handed frame.
*   **Frame 1:** Origin at joint 2. $z_1$ is along the axis of rotation of joint 2. $z_1$ is parallel to $z_0$. The common normal between $z_0$ and $z_1$ is along the $x_0$ axis. Therefore, $x_1$ is along the common normal.
*   **Frame 2 (End-Effector):** Origin at the tip of the second link. $z_2$ is aligned with $z_1$. The common normal between $z_1$ and $z_2$ is along the $x_1$ axis. Therefore, $x_2$ is along the common normal.

Let:
*   $L_1$ be the length of link 1.
*   $L_2$ be the length of link 2.
*   $\theta_1$ be the angle of joint 1.
*   $\theta_2$ be the angle of joint 2.

**D-H Table Construction:**

| Joint `i` | $a_{i-1}$ (Length) | $\alpha_{i-1}$ (Twist) | $d_i$ (Offset) | $\theta_i$ (Angle) |
| :-------- | :----------------- | :--------------------- | :------------- | :----------------- |
| 1         | 0                  | 0                      | 0              | $\theta_1$         |
| 2         | $L_1$              | 0                      | 0              | $\theta_2$         |

**Explanation of Table Entries:**

*   **Joint 1:**
    *   $a_0 = 0$: The origin of frame 1 is at the origin of frame 0 (joint 1).
    *   $\alpha_0 = 0$: $z_0$ and $z_1$ are parallel. The common normal is along the $x_0$ axis.
    *   $d_1 = 0$: The origin of frame 1 is at the intersection of $z_1$ and the common normal.
    *   $\theta_1$: The variable angle of the revolute joint.

*   **Joint 2:**
    *   $a_1 = L_1$: The distance along the common normal (x1 axis) from the intersection of $z_1$ and $x_1$ to the intersection of $z_2$ and $x_2$. This is the length of link 1.
    *   $\alpha_1 = 0$: $z_1$ and $z_2$ are parallel. The common normal is along the $x_1$ axis.
    *   $d_2 = 0$: The origin of frame 2 is at the intersection of $z_2$ and the common normal.
    *   $\theta_2$: The variable angle of the revolute joint.

**D-H Transformation Matrices:**

Using the standard D-H transformation matrix formula:
$$
A_i = \begin{bmatrix}
\cos \theta_i & -\sin \theta_i \cos \alpha_i & \sin \theta_i \sin \alpha_i & a_i \cos \theta_i \\
\sin \theta_i & \cos \theta_i \cos \alpha_i & -\cos \theta_i \sin \alpha_i & a_i \sin \theta_i \\
0 & \sin \alpha_i & \cos \alpha_i & d_i \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

*   **For Joint 1 ($A_1$):**
    ($a_0=0, \alpha_0=0, d_1=0, \theta_1=\theta_1$)
    $$
    A_1 = \begin{bmatrix}
    \cos \theta_1 & -\sin \theta_1 \cos 0 & \sin \theta_1 \sin 0 & 0 \cos \theta_1 \\
    \sin \theta_1 & \cos \theta_1 \cos 0 & -\cos \theta_1 \sin 0 & 0 \sin \theta_1 \\
    0 & \sin 0 & \cos 0 & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix}
    = \begin{bmatrix}
    \cos \theta_1 & -\sin \theta_1 & 0 & 0 \\
    \sin \theta_1 & \cos \theta_1 & 0 & 0 \\
    0 & 0 & 1 & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix}
    $$

*   **For Joint 2 ($A_2$):**
    ($a_1=L_1, \alpha_1=0, d_2=0, \theta_2=\theta_2$)
    $$
    A_2 = \begin{bmatrix}
    \cos \theta_2 & -\sin \theta_2 \cos 0 & \sin \theta_2 \sin 0 & L_1 \cos \theta_2 \\
    \sin \theta_2 & \cos \theta_2 \cos 0 & -\cos \theta_2 \sin 0 & L_1 \sin \theta_2 \\
    0 & \sin 0 & \cos 0 & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix}
    = \begin{bmatrix}
    \cos \theta_2 & -\sin \theta_2 & 0 & L_1 \cos \theta_2 \\
    \sin \theta_2 & \cos \theta_2 & 0 & L_1 \sin \theta_2 \\
    0 & 0 & 1 & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix}
    $$

**Forward Kinematics:**

The transformation from the base frame (0) to the end-effector frame (2) is $T_0^2 = A_1 \cdot A_2$.

$$
T_0^2 = \begin{bmatrix}
\cos \theta_1 & -\sin \theta_1 & 0 & 0 \\
\sin \theta_1 & \cos \theta_1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
\cos \theta_2 & -\sin \theta_2 & 0 & L_1 \cos \theta_2 \\
\sin \theta_2 & \cos \theta_2 & 0 & L_1 \sin \theta_2 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

Performing the matrix multiplication:

$$
T_0^2 = \begin{bmatrix}
\cos \theta_1 \cos \theta_2 - \sin \theta_1 \sin \theta_2 & -\cos \theta_1 \sin \theta_2 - \sin \theta_1 \cos \theta_2 & 0 & L_1 \cos \theta_1 \cos \theta_2 \\
\sin \theta_1 \cos \theta_2 + \cos \theta_1 \sin \theta_2 & \sin \theta_1 \sin \theta_2 + \cos \theta_1 \cos \theta_2 & 0 & L_1 \sin \theta_1 \cos \theta_2 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

Using trigonometric identities ($\cos(A+B) = \cos A \cos B - \sin A \sin B$ and $\sin(A+B) = \sin A \cos B + \cos A \sin B$):

$$
T_0^2 = \begin{bmatrix}
\cos(\theta_1 + \theta_2) & -\sin(\theta_1 + \theta_2) & 0 & L_1 \cos(\theta_1 + \theta_2) \\
\sin(\theta_1 + \theta_2) & \cos(\theta_1 + \theta_2) & 0 & L_1 \sin(\theta_1 + \theta_2) \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

This result correctly describes the position and orientation of the end-effector. The $x$ and $y$ coordinates of the end-effector are $(L_1 \cos(\theta_1 + \theta_2), L_1 \sin(\theta_1 + \theta_2))$, which matches the expected forward kinematics for this planar arm. The orientation of the end-effector is defined by the upper-left 3x3 submatrix.

---

### 5. Practice Questions and Exercises

**Question 1:**

Consider a 3-DOF PUMA-type robot arm. A typical simplified D-H table for such a robot might look like this:

| Joint `i` | $a_{i-1}$ | $\alpha_{i-1}$ | $d_i$ | $\theta_i$ |
| :-------- | :-------- | :------------- | :---- | :--------- |
| 1         | 0         | 0              | $d_1$ | $\theta_1$ |
| 2         | $a_2$     | 0              | 0     | $\theta_2$ |
| 3         | 0         | $\alpha_3$     | $d_3$ | 0          |

*(Note: This is a simplified example. Real PUMA robots have more complex D-H parameters based on their specific geometry.)*

a) Write down the D-H transformation matrix $A_1$ for joint 1.
b) Write down the D-H transformation matrix $A_2$ for joint 2.
c) Write down the D-H transformation matrix $A_3$ for joint 3.
d) How would you calculate the overall transformation matrix from the base frame to the end-effector frame?

**Answer 1:**

a) For joint 1 ($a_0=0, \alpha_0=0, d_1=d_1, \theta_1=\theta_1$):
$$
A_1 = \begin{bmatrix}
\cos \theta_1 & -\sin \theta_1 & 0 & 0 \\
\sin \theta_1 & \cos \theta_1 & 0 & 0 \\
0 & 0 & 1 & d_1 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

b) For joint 2 ($a_1=a_2, \alpha_1=0, d_2=0, \theta_2=\theta_2$):
$$
A_2 = \begin{bmatrix}
\cos \theta_2 & -\sin \theta_2 & 0 & a_2 \cos \theta_2 \\
\sin \theta_2 & \cos \theta_2 & 0 & a_2 \sin \theta_2 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

c) For joint 3 ($a_2=0, \alpha_2=\alpha_3, d_3=d_3, \theta_3=0$):
$$
A_3 = \begin{bmatrix}
\cos 0 & -\sin 0 \cos \alpha_3 & \sin 0 \sin \alpha_3 & 0 \cos 0 \\
\sin 0 & \cos 0 \cos \alpha_3 & -\cos 0 \sin \alpha_3 & 0 \sin 0 \\
0 & \sin \alpha_3 & \cos \alpha_3 & d_3 \\
0 & 0 & 0 & 1
\end{bmatrix}
= \begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & \cos \alpha_3 & -\sin \alpha_3 & 0 \\
0 & \sin \alpha_3 & \cos \alpha_3 & d_3 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

d) The overall transformation matrix from the base frame (0) to the end-effector frame (3) is:
$$
T_0^3 = A_1 \cdot A_2 \cdot A_3
$$

---

**Question 2:**

Identify the type of joint (revolute or prismatic) based on which D-H parameter is typically the variable:

a) $a_i$
b) $\alpha_i$
c) $d_i$
d) $\theta_i$

**Answer 2:**

a) $a_i$ (Link Length): Typically constant for a given link, not a variable joint parameter.
b) $\alpha_i$ (Link Twist): Typically constant for a given link, not a variable joint parameter.
c) $d_i$ (Link Offset): Variable for **prismatic joints**.
d) $\theta_i$ (Joint Angle): Variable for **revolute joints**.

---

### 6. Important Points to Remember

*   **Consistency is Key:** Always adhere strictly to the chosen D-H convention (standard or modified) and the frame assignment rules. Any deviation will lead to incorrect kinematics.
*   **Frame Assignment:** The placement of coordinate frames on each link is the most critical step. Visualize the axes and common normals carefully.
*   **D-H Table:** Once the frames are assigned, filling out the D-H table is straightforward.
*   **Forward Kinematics:** The product of D-H matrices ($A_1 \cdot A_2 \cdot \ldots \cdot A_N$) yields the end-effector pose relative to the base.
*   **Joint Variables:** For revolute joints, $\theta_i$ is the variable. For prismatic joints, $d_i$ is the variable. Other parameters ($a_i, \alpha_i, d_i$ for revolute, $a_i, \alpha_i, \theta_i$ for prismatic) are usually fixed geometric properties of the links.
*   **Textbook References:**
    *   Craig's "Introduction to Robotics" provides a detailed explanation of D-H notation and frame assignment rules in Chapter 3.
    *   Spong, Hutchinson, and Vidyasagar's "Robot Modeling and Control" also covers D-H notation extensively in Chapter 2.
    *   Groover's "Industrial Robotics" offers practical applications and discussions on robot kinematics.

---

### 7. Alignment with Course Outcomes

*   **CO1: Describe the basic components, structural configurations, and degrees of freedom (DOF) of robots.**
    *   D-H notation is the mathematical language to describe the structural configuration (link lengths, joint types, and relative orientations) that defines the DOF. By constructing a D-H table, we are inherently describing the robot's structure and how its DOF manifest.

*   **CO2: Apply forward and inverse kinematics for different types of robotic manipulators.**
    *   This topic directly addresses the *application* of D-H notation for **forward kinematics**. Understanding D-H is the foundational step before tackling inverse kinematics, which often involves manipulating the D-H transformations.

---

This comprehensive set of notes covers the fundamentals of D-H notations, their application in forward kinematics, and provides examples and practice questions to reinforce understanding. It aligns with the learning outcomes and course objectives for Module 1.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
