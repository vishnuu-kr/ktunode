---
title: "Robot Coordinate Systems- Fundamental and composite rotations, homogeneous co-ordinates and transformations, Kinematic parameters, D-H representation, Direct Kinematics."
subject: "INTRODUCTION TO ROBOTICS"
module: "Module 3: Kinematics and Motion Planning"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c54"
status: "completed"
scrapedAt: "2026-05-23T16:41:42.876Z"
---
## Introduction to Robotics: Module 3 - Kinematics and Motion Planning

### Topic: Robot Coordinate Systems - Fundamental and Composite Rotations, Homogeneous Coordinates and Transformations, Kinematic Parameters, D-H Representation, Direct Kinematics

---

### **Course Outcomes Addressed:**

*   **CO4 (K3):** Obtain kinematic model of robotic manipulators.
*   **CO5 (K3):** Plan trajectories in joint space and Cartesian space.

---

### **Learning Outcomes:**

Upon completion of this topic, you will be able to:

*   Understand and define various robot coordinate systems.
*   Represent and perform fundamental and composite rotations in 3D space.
*   Utilize homogeneous coordinates and transformations for representing rigid body motions.
*   Define and utilize kinematic parameters for describing robot configurations.
*   Apply the Denavit-Hartenberg (D-H) convention to represent robot kinematics.
*   Derive the direct kinematic model of a robotic manipulator.

---

### **1. Robot Coordinate Systems**

Coordinate systems are essential for describing the position and orientation of objects in space, particularly for robots.

*   **World Coordinate System (WCS):**
    *   A fixed, global coordinate system.
    *   Used as a reference for the robot's position and the environment.
    *   Usually defined at the base of the robot or a fixed point in the environment.
    *   **Reference:** Saha, Ch. 2.1

*   **Base Coordinate System (BCS):**
    *   Attached to the base of the robot.
    *   Often coincides with the World Coordinate System for simplicity.
    *   **Reference:** Schilling, Ch. 3.1

*   **Link Coordinate System (LCS):**
    *   Attached to each link of the robot.
    *   The origin of a link coordinate system is typically placed at a joint axis.
    *   The orientation of the axes is defined based on the D-H convention (explained later).
    *   **Reference:** Craig, Ch. 2.1; Ghosal, Ch. 3.1

*   **Tool Coordinate System (TCS):**
    *   Attached to the end-effector (tool) of the robot.
    *   Used to define the position and orientation of the tool tip.
    *   **Reference:** Mittal & Nagrath, Ch. 3.1; Saha, Ch. 2.1

**Key Concept:** The relationship between these coordinate systems is expressed using transformation matrices.

---

### **2. Rotations in 3D Space**

Representing orientations in 3D space requires understanding rotations.

*   **Fundamental Rotations:** Rotations around the principal axes (X, Y, Z).
    *   **Rotation about the Z-axis ($\theta$):**
        $$ R_z(\theta) = \begin{bmatrix} \cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{bmatrix} $$
        *   This rotation preserves the Z-coordinate and rotates points in the XY plane.
        *   **Example:** Rotating a point (1, 0, 0) by 90 degrees counter-clockwise around the Z-axis results in (0, 1, 0).

    *   **Rotation about the Y-axis ($\phi$):**
        $$ R_y(\phi) = \begin{bmatrix} \cos\phi & 0 & \sin\phi \\ 0 & 1 & 0 \\ -\sin\phi & 0 & \cos\phi \end{bmatrix} $$
        *   This rotation preserves the Y-coordinate and rotates points in the XZ plane.

    *   **Rotation about the X-axis ($\psi$):**
        $$ R_x(\psi) = \begin{bmatrix} 1 & 0 & 0 \\ 0 & \cos\psi & -\sin\psi \\ 0 & \sin\psi & \cos\psi \end{bmatrix} $$
        *   This rotation preserves the X-coordinate and rotates points in the YZ plane.
    *   **Reference:** Saha, Ch. 2.2; Craig, Ch. 2.2

*   **Composite Rotations:** A sequence of fundamental rotations.
    *   The order of rotations matters (non-commutative).
    *   Common sequences include:
        *   **XYZ (Roll-Pitch-Yaw):** $R_z(\theta) R_y(\phi) R_x(\psi)$
        *   **ZYX (Yaw-Pitch-Roll):** $R_x(\psi) R_y(\phi) R_z(\theta)$
        *   **ZYZ:** $R_z(\theta_2) R_y(\phi) R_z(\theta_1)$
    *   The combined rotation matrix is the product of individual rotation matrices in the correct order.
    *   **Example:** To rotate a frame first by 30 degrees around its current Z-axis, then by 45 degrees around its new Y-axis, and finally by 60 degrees around its new X-axis, we would use the ZYX convention (or its inverse depending on the definition). If we have a point in frame A and want to express it in frame B, and frame B is obtained from frame A by a sequence of rotations, the transformation matrix will be the product of the individual rotation matrices in the reverse order of application.
    *   **Reference:** Saha, Ch. 2.2; Craig, Ch. 2.2; Ghosal, Ch. 3.2

*   **Representing Orientation:**
    *   **Euler Angles:** A set of three rotations that describe any orientation in 3D space. While intuitive, they suffer from "gimbal lock."
    *   **Axis-Angle Representation:** An angle of rotation around a specific axis.
    *   **Quaternions:** A four-component representation that avoids gimbal lock and is computationally efficient for interpolations.
    *   **Reference:** Craig, Ch. 2.2; Saha, Ch. 2.2

---

### **3. Homogeneous Coordinates and Transformations**

Homogeneous coordinates provide a unified way to represent both rotations and translations in a single matrix.

*   **Homogeneous Coordinates:**
    *   A point in 3D space $(x, y, z)$ is represented as $(x, y, z, 1)$ in homogeneous coordinates.
    *   This adds an extra dimension (w) to the coordinates.
    *   **Reference:** Saha, Ch. 2.3; Craig, Ch. 2.3

*   **Homogeneous Transformation Matrix:**
    *   A 4x4 matrix that combines rotation and translation.
    *   Any rigid-body transformation (rotation + translation) can be represented as:
        $$ T = \begin{bmatrix} R & \mathbf{p} \\ \mathbf{0}^T & 1 \end{bmatrix} $$
        Where:
        *   $R$ is the 3x3 rotation matrix.
        *   $\mathbf{p}$ is the 3x1 translation vector.
        *   $\mathbf{0}^T$ is a 1x3 zero vector.
        *   1 is a scalar.

    *   **Applying a transformation to a point:**
        $$ \begin{bmatrix} x' \\ y' \\ z' \\ 1 \end{bmatrix} = T \begin{bmatrix} x \\ y \\ z \\ 1 \end{bmatrix} $$
        *   This equation simultaneously rotates and translates the point.

    *   **Transformation of Coordinate Frames:**
        *   If frame B is related to frame A by a rotation $R_{AB}$ and translation $\mathbf{p}_{AB}$, the transformation matrix from frame B to frame A is:
            $$ T_{AB} = \begin{bmatrix} R_{AB} & \mathbf{p}_{AB} \\ \mathbf{0}^T & 1 \end{bmatrix} $$
        *   To transform a point expressed in frame B ($P_B$) to frame A ($P_A$):
            $$ P_A = T_{AB} P_B $$

    *   **Composite Transformations:**
        *   The composition of multiple transformations is achieved by multiplying their corresponding homogeneous transformation matrices.
        *   If frame C is related to frame B by $T_{BC}$ and frame B is related to frame A by $T_{AB}$, then the transformation from frame C to frame A is:
            $$ T_{AC} = T_{AB} T_{BC} $$
        *   **Reference:** Saha, Ch. 2.3; Craig, Ch. 2.3; Ghosal, Ch. 3.3; Mittal & Nagrath, Ch. 3.2

**Example:**
Consider a point $P$ located at $(2, 3, 4)$ in frame 1. Frame 2 is obtained from frame 1 by:
1.  A rotation of 90 degrees around the Z-axis of frame 1.
2.  A translation of $(1, -2, 0)$ along the axes of the rotated frame 1.

The rotation matrix is $R_z(90^\circ) = \begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}$.
The translation vector is $\mathbf{p} = \begin{bmatrix} 1 \\ -2 \\ 0 \end{bmatrix}$.

The transformation matrix from frame 2 to frame 1 is:
$$ T_{12} = \begin{bmatrix} 0 & -1 & 0 & 1 \\ 1 & 0 & 0 & -2 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} $$

The point in homogeneous coordinates in frame 1 is:
$$ P_1 = \begin{bmatrix} 2 \\ 3 \\ 4 \\ 1 \end{bmatrix} $$

The question is how this point is represented in frame 2. First, we need the transformation from frame 1 to frame 2 ($T_{21}$). $T_{21} = T_{12}^{-1}$.

However, the question implies we are defining frame 2 relative to frame 1. Let's rephrase to get the point in frame 2. If we have a point $P_1$ in frame 1 and want to find its representation in frame 2, we need the transformation $T_{12}$ that maps points from frame 2 to frame 1.

Let's assume we have a point expressed in frame 1, and we want to know its coordinates in frame 2. This requires the inverse transformation matrix.
If frame 2 is obtained by rotating frame 1 by $R_{AB}$ and translating by $\mathbf{p}_{AB}$, then:
$P_A = R_{AB} P_B + \mathbf{p}_{AB}$
$P_A = \begin{bmatrix} R_{AB} & \mathbf{p}_{AB} \\ 0 & 1 \end{bmatrix} \begin{bmatrix} P_B \\ 1 \end{bmatrix}$

Let's consider an example where we define frame 2 with respect to frame 1.
Frame 2's origin is at (1, -2, 0) in frame 1, and frame 2's axes are rotated by 90 degrees around frame 1's Z-axis.

The transformation matrix *from frame 2 to frame 1* is:
$$ T_{12} = \begin{bmatrix} 0 & -1 & 0 & 1 \\ 1 & 0 & 0 & -2 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} $$

If a point is at $(0, 0, 0)$ in frame 2 (i.e., at the origin of frame 2), its coordinates in frame 1 are:
$$ \begin{bmatrix} x_1 \\ y_1 \\ z_1 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 & -1 & 0 & 1 \\ 1 & 0 & 0 & -2 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ -2 \\ 0 \\ 1 \end{bmatrix} $$
This makes sense, as the origin of frame 2 is defined to be at (1, -2, 0) in frame 1.

---

### **4. Kinematic Parameters**

Kinematic parameters are a set of variables used to describe the configuration of a robot. For a serial manipulator, these are primarily the joint variables.

*   **Joint Variables:**
    *   **Prismatic Joint:** The distance of translation. Typically denoted by 'd'.
    *   **Revolute Joint:** The angle of rotation. Typically denoted by '$\theta$'.

*   **Link Parameters:** These parameters define the relative geometry between successive links and are crucial for deriving the transformations between link coordinate systems. The Denavit-Hartenberg (D-H) convention defines these parameters.
    *   **Reference:** Craig, Ch. 2.4; Saha, Ch. 3.1

---

### **5. Denavit-Hartenberg (D-H) Representation**

The D-H convention provides a systematic method for assigning coordinate frames to each link of a robot manipulator and defining the transformations between them using four parameters.

*   **D-H Convention:**
    *   **Link Coordinate Systems:**
        1.  The z-axis of link $i$ ($z_i$) is collinear with the axis of motion of joint $i+1$.
        2.  The origin of link $i$ is at the intersection of the $z_i$ axis and the common normal between $z_i$ and $z_{i-1}$.
        3.  The x-axis of link $i$ ($x_i$) is along the common normal pointing from $z_i$ to $z_{i-1}$.
        4.  The y-axis of link $i$ ($y_i$) is chosen to form a right-handed coordinate system: $y_i = z_i \times x_i$.

*   **D-H Parameters (for link $i$, relating frame $i$ to frame $i-1$):**
    *   $a_{i-1}$: Link length (distance between $z_{i-1}$ and $z_i$ along the common normal $x_{i-1}$).
    *   $\alpha_{i-1}$: Link twist (angle between $z_{i-1}$ and $z_i$ about the common normal $x_{i-1}$).
    *   $d_i$: Link offset (distance between the origin of frame $i-1$ and the origin of frame $i$ along the $z_{i-1}$ axis).
    *   $\theta_i$: Joint angle (angle between $x_{i-1}$ and $x_i$ about the $z_{i-1}$ axis).

    **Important Note:** The parameters are defined between coordinate frames. For example, to define the transformation from frame $i-1$ to frame $i$, we use parameters $a_{i-1}$, $\alpha_{i-1}$, $d_i$, and $\theta_i$. Some texts define parameters relating frame $i$ to frame $i+1$, which can lead to different parameter names (e.g., $a_i, \alpha_i, d_{i+1}, \theta_{i+1}$). It's crucial to understand the convention being used. The convention used here is common in many textbooks (e.g., Craig).

*   **D-H Transformation Matrix (from frame $i$ to frame $i-1$):**
    The transformation from frame $i$ to frame $i-1$ is achieved by a sequence of four basic transformations:
    1.  Translate by $d_i$ along $z_{i-1}$.
    2.  Rotate by $\theta_i$ about $z_{i-1}$.
    3.  Translate by $a_i$ along the new x-axis ($x_i$).
    4.  Rotate by $\alpha_i$ about the new x-axis ($x_i$).

    The individual transformation matrices are:
    *   Translate by $d_i$ along $z_{i-1}$: $T_{z,d_i} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & d_i \\ 0 & 0 & 0 & 1 \end{bmatrix}$
    *   Rotate by $\theta_i$ about $z_{i-1}$: $T_{z,\theta_i} = \begin{bmatrix} \cos\theta_i & -\sin\theta_i & 0 & 0 \\ \sin\theta_i & \cos\theta_i & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$
    *   Translate by $a_i$ along $x_i$: $T_{x,a_i} = \begin{bmatrix} 1 & 0 & 0 & a_i \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$
    *   Rotate by $\alpha_i$ about $x_i$: $T_{x,\alpha_i} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & \cos\alpha_i & -\sin\alpha_i & 0 \\ 0 & \sin\alpha_i & \cos\alpha_i & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

    The D-H transformation matrix from frame $i$ to frame $i-1$ ($A_i$):
    $$ A_i = T_{z,d_i} T_{z,\theta_i} T_{x,a_i} T_{x,\alpha_i} $$
    This product simplifies to:
    $$ A_i = \begin{bmatrix}
    \cos\theta_i & -\sin\theta_i \cos\alpha_i & \sin\theta_i \sin\alpha_i & a_i \cos\theta_i \\
    \sin\theta_i & \cos\theta_i \cos\alpha_i & -\cos\theta_i \sin\alpha_i & a_i \sin\theta_i \\
    0 & \sin\alpha_i & \cos\alpha_i & d_i \\
    0 & 0 & 0 & 1
    \end{bmatrix} $$
    *   **Reference:** Craig, Ch. 2.4; Saha, Ch. 3.1; Ghosal, Ch. 3.4

*   **Modified D-H Convention:**
    *   Some sources use a different ordering of transformations or definitions of parameters. A common alternative defines parameters based on the transformation from frame $i$ to frame $i+1$. In this case, the matrix is often denoted as $A_i$ and uses parameters $a_i, \alpha_i, d_{i+1}, \theta_{i+1}$. The resulting matrix structure is similar but with parameter indices shifted.
    *   **Reference:** Mittal & Nagrath, Ch. 3.3 (often uses this modified convention); Schilling, Ch. 3.2

*   **Choosing D-H Parameters:**
    *   The selection of coordinate frames based on the D-H convention requires careful adherence to the rules to avoid errors.
    *   **Steps:**
        1.  Define the World frame (often frame 0).
        2.  For each link $i$ (from 1 to $n$):
            *   Identify the axis of motion for joint $i$ (this defines $z_{i-1}$).
            *   Find the common normal between $z_{i-1}$ and $z_i$. This defines $x_i$.
            *   Place the origin of frame $i-1$ at the intersection of $z_{i-1}$ and $x_i$.
            *   The axis of motion of joint $i+1$ defines $z_i$.
            *   Choose the origin of frame $i$ at the intersection of $z_i$ and the common normal $x_i$.
            *   Determine the signs of the D-H parameters ($\theta_i, d_i, a_i, \alpha_i$) based on the relative positions and orientations.
    *   **Reference:** Craig, Ch. 2.4; Saha, Ch. 3.1

**Example: Simple Planar Robot (2 DOF)**
Consider a 2-DOF planar robot arm in the XY plane.
*   Link 1: Length $L_1$, Revolute joint 1 (angle $\theta_1$).
*   Link 2: Length $L_2$, Revolute joint 2 (angle $\theta_2$).
Assume the base is at the origin (0,0).

**D-H Table (Craig's Convention):**

| Link $i$ | $\theta_i$ (rad) | $d_i$ (m) | $a_i$ (m) | $\alpha_i$ (rad) |
| :------- | :--------------- | :-------- | :-------- | :--------------- |
| 1        | $\theta_1$       | 0         | $L_1$     | 0                |
| 2        | $\theta_2$       | 0         | $L_2$     | 0                |
| 3        | 0                | 0         | 0         | 0                |

**Frame Assignments:**
*   **Frame 0 (Base):** Origin at (0,0), $z_0$ along the Z-axis, $x_0$ along the fixed horizontal direction.
*   **Frame 1:**
    *   Origin at the joint between link 1 and link 2.
    *   $z_1$ along the axis of joint 2.
    *   $x_1$ along link 1.
    *   When $\theta_1=0$, Frame 1 coincides with Frame 0.

*   **Frame 2 (End-effector):**
    *   Origin at the end of link 2.
    *   $z_2$ along the axis of joint 3 (if any, or along the direction of motion of the end-effector).
    *   $x_2$ along link 2.
    *   When $\theta_2=0$, Frame 2's X-axis aligns with Frame 1's X-axis.

**D-H Parameters Derivation:**

*   **Link 1 to Frame 0:**
    *   $z_0$: Fixed Z-axis.
    *   Joint 1 axis: $z_0$.
    *   Common normal between $z_0$ and $z_1$: This is along the X-axis of frame 0.
    *   Origin of Frame 0: At the robot base.
    *   Origin of Frame 1: At the center of Joint 1.
    *   $d_1$: Distance from origin of Frame 0 to origin of Frame 1 along $z_0$. This is 0 if Joint 1 is at the base.
    *   $\theta_1$: Angle between $x_0$ and $x_1$ about $z_0$. This is the first joint angle.
    *   $a_1$: Distance between $z_0$ and $z_1$ along $x_1$. This is the length of link 1 ($L_1$).
    *   $\alpha_1$: Angle between $z_0$ and $z_1$ about $x_1$. This is 0 if the robot is planar and joints are parallel.

*   **Link 2 to Frame 1:**
    *   $z_1$: Axis of Joint 2.
    *   Joint 2 axis: $z_1$.
    *   Common normal between $z_1$ and $z_2$: Along the X-axis of frame 1 (if planar).
    *   Origin of Frame 1: At the center of Joint 1.
    *   Origin of Frame 2: At the center of Joint 2.
    *   $d_2$: Distance from origin of Frame 1 to origin of Frame 2 along $z_1$. This is 0 for a simple planar link.
    *   $\theta_2$: Angle between $x_1$ and $x_2$ about $z_1$. This is the second joint angle.
    *   $a_2$: Distance between $z_1$ and $z_2$ along $x_2$. This is the length of link 2 ($L_2$).
    *   $\alpha_2$: Angle between $z_1$ and $z_2$ about $x_2$. This is 0 if the robot is planar.

**D-H Matrices:**

*   **$A_1$ (Frame 1 relative to Frame 0):**
    Using $\theta_1, d_1=0, a_1=L_1, \alpha_1=0$:
    $$ A_1 = \begin{bmatrix}
    \cos\theta_1 & -\sin\theta_1 & 0 & L_1 \cos\theta_1 \\
    \sin\theta_1 & \cos\theta_1 & 0 & L_1 \sin\theta_1 \\
    0 & 0 & 1 & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix} $$

*   **$A_2$ (Frame 2 relative to Frame 1):**
    Using $\theta_2, d_2=0, a_2=L_2, \alpha_2=0$:
    $$ A_2 = \begin{bmatrix}
    \cos\theta_2 & -\sin\theta_2 & 0 & L_2 \cos\theta_2 \\
    \sin\theta_2 & \cos\theta_2 & 0 & L_2 \sin\theta_2 \\
    0 & 0 & 1 & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix} $$

---

### **6. Direct Kinematics**

Direct kinematics (also known as forward kinematics) is the problem of determining the position and orientation of the end-effector (or any link) of a robot manipulator given the joint variable values.

*   **Concept:**
    *   If we know the transformations between successive links ($A_i$) using D-H parameters, the transformation from the base frame (frame 0) to the end-effector frame (frame $n$) is the product of these individual transformation matrices.
    *   $$ T_{0n} = A_1 A_2 \cdots A_n $$
    *   The resulting $4 \times 4$ matrix $T_{0n}$ contains the rotation and translation of the end-effector relative to the base frame.
    *   **Reference:** Craig, Ch. 2.5; Saha, Ch. 3.2; Ghosal, Ch. 3.5

*   **Derivation:**
    Let the joint variables be $q_1, q_2, \dots, q_n$.
    The transformation matrix from frame $i$ to frame $i-1$ is $A_i(q_i)$.
    The total transformation from frame $n$ to frame 0 is:
    $$ T_{0n}(q_1, q_2, \dots, q_n) = A_1(q_1) A_2(q_2) \cdots A_n(q_n) $$
    Let $T_{0n} = \begin{bmatrix} R_{0n} & \mathbf{p}_{0n} \\ \mathbf{0}^T & 1 \end{bmatrix}$.
    *   $\mathbf{p}_{0n}$: This is the 3x1 vector representing the position of the end-effector's origin in the base frame.
    *   $R_{0n}$: This is the 3x3 rotation matrix representing the orientation of the end-effector's frame relative to the base frame.

**Example: 2-DOF Planar Robot (continued)**
Using the D-H parameters and matrices derived earlier:
$$ T_{02} = A_1 A_2 $$
$$ T_{02} = \begin{bmatrix}
\cos\theta_1 & -\sin\theta_1 & 0 & L_1 \cos\theta_1 \\
\sin\theta_1 & \cos\theta_1 & 0 & L_1 \sin\theta_1 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} \begin{bmatrix}
\cos\theta_2 & -\sin\theta_2 & 0 & L_2 \cos\theta_2 \\
\sin\theta_2 & \cos\theta_2 & 0 & L_2 \sin\theta_2 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} $$

Multiplying these matrices:
$$ T_{02} = \begin{bmatrix}
\cos\theta_1 \cos\theta_2 - \sin\theta_1 \sin\theta_2 & -\cos\theta_1 \sin\theta_2 - \sin\theta_1 \cos\theta_2 & 0 & L_1 \cos\theta_1 + L_2 \cos(\theta_1 + \theta_2) \\
\sin\theta_1 \cos\theta_2 + \cos\theta_1 \sin\theta_2 & \sin\theta_1 \sin\theta_2 + \cos\theta_1 \cos\theta_2 & 0 & L_1 \sin\theta_1 + L_2 \sin(\theta_1 + \theta_2) \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} $$

Using trigonometric identities:
*   $\cos(A+B) = \cos A \cos B - \sin A \sin B$
*   $\sin(A+B) = \sin A \cos B + \cos A \sin B$

$$ T_{02} = \begin{bmatrix}
\cos(\theta_1+\theta_2) & -\sin(\theta_1+\theta_2) & 0 & L_1 \cos\theta_1 + L_2 \cos(\theta_1 + \theta_2) \\
\sin(\theta_1+\theta_2) & \cos(\theta_1+\theta_2) & 0 & L_1 \sin\theta_1 + L_2 \sin(\theta_1 + \theta_2) \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} $$

From this matrix, the position of the end-effector $(x, y)$ in the base frame is:
*   $x = L_1 \cos\theta_1 + L_2 \cos(\theta_1 + \theta_2)$
*   $y = L_1 \sin\theta_1 + L_2 \sin(\theta_1 + \theta_2)$
This matches the intuitive geometric solution for a 2-DOF planar arm.

The orientation of the end-effector is represented by the top-left 3x3 submatrix:
$$ R_{02} = \begin{bmatrix}
\cos(\theta_1+\theta_2) & -\sin(\theta_1+\theta_2) & 0 \\
\sin(\theta_1+\theta_2) & \cos(\theta_1+\theta_2) & 0 \\
0 & 0 & 1
\end{bmatrix} $$
This shows that the end-effector is oriented in the XY plane with an angle of $(\theta_1 + \theta_2)$ with respect to the base X-axis.

*   **Reference:** Saha, Ch. 3.2; Craig, Ch. 2.5

---

### **Important Points to Remember:**

*   **Coordinate System Definitions:** Clearly define and distinguish between World, Base, Link, and Tool coordinate systems.
*   **Rotation Order:** The order of rotations is crucial. Non-commutative means $R_1 R_2 \neq R_2 R_1$.
*   **Homogeneous Transformations:** Use 4x4 matrices for combined rotation and translation.
*   **D-H Convention:** Be consistent with the chosen D-H convention (e.g., Craig's vs. others) and carefully identify parameters. Errors in D-H parameters lead to incorrect kinematic models.
*   **Direct Kinematics:** The product of successive D-H transformation matrices yields the overall transformation of the end-effector.
*   **Joint Variables:** The joint variables ($\theta_i$ or $d_i$) are the inputs to the direct kinematics problem.

---

### **Practice Questions & Exercises:**

**Question 1:**
A point $P$ is located at $(1, 2, 3)$ in frame A. Frame B is obtained from frame A by a rotation of 45 degrees about the Z-axis of frame A, followed by a translation of (2, 0, 1) along the axes of the rotated frame A. What are the coordinates of point P in frame B?

**Answer 1:**
First, define the transformation from frame B to frame A ($T_{AB}$).
Rotation: $R_z(45^\circ) = \begin{bmatrix} \cos(45^\circ) & -\sin(45^\circ) & 0 \\ \sin(45^\circ) & \cos(45^\circ) & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1/\sqrt{2} & -1/\sqrt{2} & 0 \\ 1/\sqrt{2} & 1/\sqrt{2} & 0 \\ 0 & 0 & 1 \end{bmatrix}$
Translation: $\mathbf{p}_{AB} = \begin{bmatrix} 2 \\ 0 \\ 1 \end{bmatrix}$

The transformation matrix from frame B to frame A is:
$$ T_{AB} = \begin{bmatrix} R_z(45^\circ) & \mathbf{p}_{AB} \\ \mathbf{0}^T & 1 \end{bmatrix} = \begin{bmatrix}
1/\sqrt{2} & -1/\sqrt{2} & 0 & 2 \\
1/\sqrt{2} & 1/\sqrt{2} & 0 & 0 \\
0 & 0 & 1 & 1 \\
0 & 0 & 0 & 1
\end{bmatrix} $$

We want to find the coordinates of P in frame B ($P_B$). We know its coordinates in frame A ($P_A$). The relationship is $P_A = T_{AB} P_B$.
To find $P_B$, we need to calculate $P_B = T_{AB}^{-1} P_A$.

First, represent $P_A$ in homogeneous coordinates: $P_A = \begin{bmatrix} 1 \\ 2 \\ 3 \\ 1 \end{bmatrix}$.

To find $T_{AB}^{-1}$, we use the property that if $T = \begin{bmatrix} R & \mathbf{p} \\ \mathbf{0}^T & 1 \end{bmatrix}$, then $T^{-1} = \begin{bmatrix} R^T & -R^T \mathbf{p} \\ \mathbf{0}^T & 1 \end{bmatrix}$.
$R_{AB}^T = R_z(-45^\circ) = \begin{bmatrix} 1/\sqrt{2} & 1/\sqrt{2} & 0 \\ -1/\sqrt{2} & 1/\sqrt{2} & 0 \\ 0 & 0 & 1 \end{bmatrix}$
$-R_{AB}^T \mathbf{p}_{AB} = -\begin{bmatrix} 1/\sqrt{2} & 1/\sqrt{2} & 0 \\ -1/\sqrt{2} & 1/\sqrt{2} & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 2 \\ 0 \\ 1 \end{bmatrix} = -\begin{bmatrix} 2/\sqrt{2} \\ -2/\sqrt{2} \\ 1 \end{bmatrix} = \begin{bmatrix} -\sqrt{2} \\ \sqrt{2} \\ -1 \end{bmatrix}$

So, $T_{AB}^{-1} = \begin{bmatrix}
1/\sqrt{2} & 1/\sqrt{2} & 0 & -\sqrt{2} \\
-1/\sqrt{2} & 1/\sqrt{2} & 0 & \sqrt{2} \\
0 & 0 & 1 & -1 \\
0 & 0 & 0 & 1
\end{bmatrix}$

Now, calculate $P_B = T_{AB}^{-1} P_A$:
$$ P_B = \begin{bmatrix}
1/\sqrt{2} & 1/\sqrt{2} & 0 & -\sqrt{2} \\
-1/\sqrt{2} & 1/\sqrt{2} & 0 & \sqrt{2} \\
0 & 0 & 1 & -1 \\
0 & 0 & 0 & 1
\end{bmatrix} \begin{bmatrix} 1 \\ 2 \\ 3 \\ 1 \end{bmatrix} = \begin{bmatrix}
1/\sqrt{2} + 2/\sqrt{2} - \sqrt{2} \\
-1/\sqrt{2} + 2/\sqrt{2} + \sqrt{2} \\
3 - 1 \\
1
\end{bmatrix} = \begin{bmatrix}
3/\sqrt{2} - \sqrt{2} \\
1/\sqrt{2} + \sqrt{2} \\
2 \\
1
\end{bmatrix} = \begin{bmatrix}
\sqrt{2}/2 \\
3\sqrt{2}/2 \\
2 \\
1
\end{bmatrix} $$
So, the coordinates of point P in frame B are approximately $(0.707, 2.121, 2)$.

**Question 2:**
A 2-DOF planar robot arm has link lengths $L_1 = 1m$ and $L_2 = 0.8m$.
a) Write down the D-H parameters for this robot.
b) Derive the direct kinematic equations for the position of the end-effector.
c) If the joint angles are $\theta_1 = 30^\circ$ and $\theta_2 = 60^\circ$, calculate the position of the end-effector.

**Answer 2:**
a) **D-H Parameters (Craig's Convention):**
Assume link 1 is from frame 0 to frame 1, and link 2 is from frame 1 to frame 2.
Frame 0: Base at origin, $z_0$ along Z-axis, $x_0$ along the initial direction of link 1.
Frame 1: Origin at the center of joint 1, $z_1$ along the axis of joint 2, $x_1$ along link 1.
Frame 2: Origin at the end of link 2, $z_2$ along the direction of the end-effector's motion, $x_2$ along link 2.

| Link $i$ | $\theta_i$ (rad) | $d_i$ (m) | $a_i$ (m) | $\alpha_i$ (rad) |
| :------- | :--------------- | :-------- | :-------- | :--------------- |
| 1        | $\theta_1$       | 0         | $L_1 = 1$ | 0                |
| 2        | $\theta_2$       | 0         | $L_2 = 0.8$ | 0                |
| 3        | 0                | 0         | 0         | 0                |

b) **Direct Kinematic Equations:**
We derived these in the lecture notes:
$x = L_1 \cos\theta_1 + L_2 \cos(\theta_1 + \theta_2)$
$y = L_1 \sin\theta_1 + L_2 \sin(\theta_1 + \theta_2)$

c) **End-effector Position for $\theta_1 = 30^\circ, \theta_2 = 60^\circ$:**
$\theta_1 = 30^\circ = \pi/6$ rad
$\theta_2 = 60^\circ = \pi/3$ rad
$\theta_1 + \theta_2 = 90^\circ = \pi/2$ rad

$\cos(30^\circ) = \sqrt{3}/2$, $\sin(30^\circ) = 1/2$
$\cos(90^\circ) = 0$, $\sin(90^\circ) = 1$

$x = 1 \cdot (\sqrt{3}/2) + 0.8 \cdot (0) = \sqrt{3}/2 \approx 0.866$ m
$y = 1 \cdot (1/2) + 0.8 \cdot (1) = 0.5 + 0.8 = 1.3$ m

The position of the end-effector is approximately $(0.866, 1.3)$ meters.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **Further Reading and References:**

*   **Introduction to Robotics** by S K Saha (McGraw Hill Education (India) Private Limited, 2014) - Chapters 2 & 3.
*   **Fundamentals of Robotics – Analysis and Control** by Robert. J. Schilling (Prentice Hall of India, 1996.) - Chapter 3.
*   **Robotics and Control** by R K Mittal and I J Nagrath (Tata McGraw Hill, New Delhi, 2003) - Chapter 3.
*   **Introduction to Robotics: Mechanics and Control** by John. J. Craig (Pearson Education Asia, 4th Edition, 2018) - Chapters 2 & 3.
*   **Robotics-Fundamental Concepts and Analysis** by Ashitava Ghosal (Oxford University Press, 2006) - Chapter 3.
*   **Robotics Technology and Flexible Automation** by S. R. Deb (McGraw-Hill Education LLC, Second Edition) - Relevant chapters on kinematics.

---