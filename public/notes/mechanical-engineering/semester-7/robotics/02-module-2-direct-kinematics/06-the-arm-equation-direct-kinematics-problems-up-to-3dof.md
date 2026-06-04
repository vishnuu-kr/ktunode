---
title: "The arm equation, direct kinematics problems (up to 3DOF)"
subject: "ROBOTICS"
module: "Module 2: Direct Kinematics"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446424c"
status: "completed"
scrapedAt: "2026-05-20T18:18:44.562Z"
---
# ROBOTICS - Module 2: Direct Kinematics

## Topic: The Arm Equation and Direct Kinematics Problems (up to 3DOF)

This module focuses on understanding how the position and orientation of a robot's end-effector are related to the joint angles of its manipulator. We will explore the fundamental concept of the "arm equation" and apply it to solve direct kinematics problems for manipulators with up to three degrees of freedom (DOF).

---

### **Learning Outcomes Covered:**

*   **LO1: Understand the concept of a robotic manipulator and its components.** (Implicitly covered through the study of joint angles and links)
*   **LO2: Define and explain the concept of direct kinematics.**
*   **LO3: Derive the direct kinematic equations for a robotic manipulator with up to 3 DOF.**
*   **LO4: Solve direct kinematics problems for given joint configurations.**
*   **LO5: Relate direct kinematics to the robot's end-effector pose.**

---

### **Course Outcomes Alignment:**

*   **CO1: Familiarise with anatomy, specifications and types of Robots (Knowledge Level: K2)**
    *   Understanding the links, joints, and end-effector in the context of direct kinematics contributes to familiarization with robot anatomy.
*   **CO2: Obtain forward and inverse kinematic models of robotic manipulators (Knowledge Level: K3)**
    *   This topic directly addresses the **forward kinematic model**, which is derived through direct kinematics.

---

### **1. Introduction to Robotic Manipulators and Degrees of Freedom (DOF)**

*   **Robotic Manipulator:** A mechanical system consisting of a series of links connected by joints, designed to perform tasks in space.
*   **Links:** Rigid bodies that connect the joints of a manipulator.
*   **Joints:** The points of connection between links that allow relative motion.
    *   **Prismatic Joint:** Allows linear motion (sliding).
    *   **Revolute Joint:** Allows rotational motion.
*   **Degrees of Freedom (DOF):** The number of independent parameters that define the configuration of a manipulator. For a typical robot arm, these parameters are the joint angles (for revolute joints) or joint displacements (for prismatic joints).
*   **End-Effector:** The tool or gripper attached to the end of the manipulator, which interacts with the environment.

---

### **2. The Concept of Direct Kinematics**

*   **Definition:** Direct kinematics (also known as **forward kinematics**) is the process of determining the position and orientation of the robot's end-effector in Cartesian space, given the values of its joint variables (angles for revolute joints, displacements for prismatic joints).
*   **Input:** Joint variables (e.g., $\theta_1, \theta_2, \dots, \theta_n$ or $d_1, d_2, \dots, d_n$).
*   **Output:** End-effector pose (position and orientation) in a specified Cartesian coordinate system.
    *   **Position:** Typically represented by a 3D vector (x, y, z).
    *   **Orientation:** Can be represented in various ways, such as Euler angles, rotation matrices, or quaternions.

*   **Importance:**
    *   Essential for understanding the workspace of a robot.
    *   Used in trajectory planning and control.
    *   Provides the basis for verifying inverse kinematics solutions.

*   **Textbook Reference:**
    *   Schilling, R. J. (1996). *Fundamentals of Robotics – Analysis and Control*. Chapter 2, Section 2.1: Kinematic Description.
    *   Craig, J. J. (2002). *Introduction to Robotics (Mechanics and Control)*. Chapter 2: Position and Orientation.

---

### **3. The Arm Equation**

The "arm equation" is a conceptual term that encapsulates the mathematical relationship between the robot's joint variables and its end-effector's pose. It represents the transformation from the joint space to the Cartesian space.

Mathematically, the arm equation can be expressed as:

$$
\mathbf{X} = f(\mathbf{q})
$$

Where:
*   $\mathbf{X}$ is the vector representing the end-effector's pose (position and orientation).
*   $\mathbf{q}$ is the vector of joint variables $(\theta_1, \dots, \theta_n)$ or $(d_1, \dots, d_n)$.
*   $f(\cdot)$ is the function that describes the kinematic mapping.

**Key Idea:** To derive the arm equation, we systematically transform coordinate frames attached to each link from the base frame to the end-effector frame. This is typically achieved using **homogeneous transformation matrices**.

---

### **4. Homogeneous Transformation Matrices**

Homogeneous transformation matrices are a powerful tool for representing both translation and rotation in a single matrix. A 4x4 matrix is used:

$$
T = \begin{bmatrix}
R_{3 \times 3} & \mathbf{p}_{3 \times 1} \\
\mathbf{0}_{1 \times 3} & 1
\end{bmatrix}
$$

Where:
*   $R_{3 \times 3}$ is a 3x3 rotation matrix describing the orientation of one frame relative to another.
*   $\mathbf{p}_{3 \times 1}$ is a 3x1 translation vector representing the position of the origin of one frame relative to another.
*   $\mathbf{0}_{1 \times 3}$ is a 1x3 row vector of zeros.

**Transforming a point $\mathbf{v}$ from frame B to frame A:**

If $\mathbf{v}_B$ is a point represented in frame B and $T_{A}^B$ is the homogeneous transformation matrix from frame B to frame A, then the point in frame A is:

$$
\mathbf{v}_A = T_{A}^B \mathbf{v}_B
$$

Where $\mathbf{v}_B$ is augmented to $[\mathbf{v}_B^T, 1]^T$.

---

### **5. Denavit-Hartenberg (D-H) Convention**

The Denavit-Hartenberg (D-H) convention provides a standardized method for assigning coordinate frames to the links of a robotic manipulator. This systematic approach simplifies the derivation of the direct kinematic equations.

**D-H Parameters:** For each joint $i$ (connecting link $i-1$ to link $i$), there are four parameters:

1.  **$a_i$ (Link Length):** The distance from the common normal between the $z_{i-1}$ and $z_i$ axes to the common normal between the $x_{i-1}$ and $x_i$ axes, measured along the $x_i$ axis.
2.  **$\alpha_i$ (Link Twist):** The angle between the $z_{i-1}$ and $z_i$ axes, measured about their common normal.
3.  **$d_i$ (Link Offset):** The distance from the common normal between the $x_{i-2}$ and $x_{i-1}$ axes to the common normal between the $x_{i-1}$ and $x_i$ axes, measured along the $z_{i-1}$ axis. For prismatic joints, this is the variable parameter.
4.  **$\theta_i$ (Joint Angle):** The angle between the $x_{i-1}$ and $x_i$ axes, measured about the $z_{i-1}$ axis. For revolute joints, this is the variable parameter.

**Basic D-H Transformation Matrix ($A_i^{i-1}$):** The transformation from frame $i$ to frame $i-1$ can be represented by a product of four basic transformations:

$$
A_i^{i-1} = \text{Trans}(z, d_i) \cdot \text{Rot}(z, \theta_i) \cdot \text{Trans}(x, a_i) \cdot \text{Rot}(x, \alpha_i)
$$

In matrix form:

$$
A_i^{i-1} =
\begin{bmatrix}
\cos(\theta_i) & -\sin(\theta_i)\cos(\alpha_i) & \sin(\theta_i)\sin(\alpha_i) & a_i\cos(\theta_i) \\
\sin(\theta_i) & \cos(\theta_i)\cos(\alpha_i) & -\cos(\theta_i)\sin(\alpha_i) & a_i\sin(\theta_i) \\
0 & \sin(\alpha_i) & \cos(\alpha_i) & d_i \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

**Textbook Reference:**
*   Craig, J. J. (2002). *Introduction to Robotics (Mechanics and Control)*. Chapter 2: Position and Orientation (introduces coordinate frames and transformations).
*   Saha, S. K. (Year not specified). *Introduction to Robotics*. Chapter 4: Kinematics. (Likely covers D-H convention).
*   Ghosal, A. (Year not specified). *Robotics-Fundamental concepts and analysis*. Chapter 3: Kinematics. (Likely covers D-H convention).

---

### **6. Direct Kinematics for Manipulators up to 3 DOF**

For a manipulator with $n$ DOF, the total transformation from the base frame (frame 0) to the end-effector frame (frame $n$) is the product of individual link transformations:

$$
T_{n}^0 = A_1^0 A_2^1 A_3^2 \dots A_n^{n-1}
$$

This product represents the arm equation for the specific robot configuration.

We will now demonstrate with examples for 1, 2, and 3 DOF manipulators.

---

#### **Example 1: 1-DOF Planar Manipulator (Revolute Joint)**

*   **Configuration:** A simple arm with one revolute joint connecting a link of length $L$ to a fixed base. The end-effector is at the tip of the link.
*   **Coordinate System:**
    *   Base frame (0) attached to the base of the manipulator.
    *   End-effector frame (1) attached to the end-effector.
*   **Joint Variable:** $\theta_1$ (angle of rotation).
*   **Link Length:** $L$.

**D-H Parameters:**
Let's assume a simple setup where the base frame's z-axis is aligned with the axis of rotation.

| Link | $\alpha_{i-1}$ | $a_{i-1}$ | $d_i$ | $\theta_i$ |
| :--- | :------------- | :-------- | :---- | :--------- |
| 1    | 0              | 0         | 0     | $\theta_1$ |
| 2    | 0              | $L$       | 0     | 0          |

*(Note: For frame assignment, we usually define frame $i$ attached to link $i$. Here, let's consider frame 0 as the base and frame 1 as the end-effector frame, directly on the link. The D-H table is typically defined between consecutive frames. For a single link manipulator, we often define a frame on link 1 relative to frame 0.)*

Let's redefine D-H parameters slightly for clarity in this simple case:

| Link | $\alpha_{i-1}$ | $a_{i-1}$ | $d_i$ | $\theta_i$ |
| :--- | :------------- | :-------- | :---- | :--------- |
| 1    | 0              | 0         | 0     | $\theta_1$ |

This defines the transformation from frame 1 to frame 0. The transformation $A_1^0$ is:

$$
A_1^0 = \begin{bmatrix}
\cos(\theta_1) & -\sin(\theta_1)\cos(0) & \sin(\theta_1)\sin(0) & 0\cos(\theta_1) \\
\sin(\theta_1) & \cos(\theta_1)\cos(0) & -\cos(\theta_1)\sin(0) & 0\sin(\theta_1) \\
0 & \sin(0) & \cos(0) & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} = \begin{bmatrix}
\cos(\theta_1) & -\sin(\theta_1) & 0 & 0 \\
\sin(\theta_1) & \cos(\theta_1) & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

If we assume the end-effector is at a distance $L$ from the joint along the link's x-axis, we'd typically have a second transformation representing the end-effector relative to the last link's frame. However, for a single link of length $L$, we can consider the end-effector's position to be $(L, 0, 0)$ in its own frame (frame 1), and frame 1 is oriented such that its x-axis points along the link.

Let's consider a common setup for a 1-DOF planar arm:
*   Base frame {0}: origin at the joint. x-axis along the initial position of the link, y-axis perpendicular to the plane of motion.
*   End-effector frame {1}: origin at the end-effector, x-axis along the link.

| Link | $\alpha_{i-1}$ | $a_{i-1}$ | $d_i$ | $\theta_i$ |
| :--- | :------------- | :-------- | :---- | :--------- |
| 1    | 0              | $L$       | 0     | $\theta_1$ |

Here, frame 1 is attached to link 1. The origin of frame 1 is at the end of link 1. The transformation from frame 1 to frame 0 is $A_1^0$.

$$
A_1^0 = \begin{bmatrix}
\cos(\theta_1) & -\sin(\theta_1)\cos(0) & \sin(\theta_1)\sin(0) & L\cos(\theta_1) \\
\sin(\theta_1) & \cos(\theta_1)\cos(0) & -\cos(\theta_1)\sin(0) & L\sin(\theta_1) \\
0 & \sin(0) & \cos(0) & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} = \begin{bmatrix}
\cos(\theta_1) & -\sin(\theta_1) & 0 & L\cos(\theta_1) \\
\sin(\theta_1) & \cos(\theta_1) & 0 & L\sin(\theta_1) \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

If we consider the end-effector to be at the origin of frame 1 (i.e., $\mathbf{p}_1 = [0, 0, 0]^T$), then its position in frame 0 is:

$$
\begin{bmatrix} x \\ y \\ z \\ 1 \end{bmatrix} = A_1^0 \begin{bmatrix} 0 \\ 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} L\cos(\theta_1) \\ L\sin(\theta_1) \\ 0 \\ 1 \end{bmatrix}
$$

So, the end-effector position is $(x, y) = (L\cos(\theta_1), L\sin(\theta_1))$ in the 2D plane, which is consistent with polar coordinates.

---

#### **Example 2: 2-DOF Planar Manipulator (Two Revolute Joints)**

*   **Configuration:** A two-link planar arm. Link 1 of length $L_1$ is connected by revolute joint 1 to the base. Link 2 of length $L_2$ is connected by revolute joint 2 to the end of link 1. The end-effector is at the tip of link 2.
*   **Joint Variables:** $\theta_1, \theta_2$.
*   **Link Lengths:** $L_1, L_2$.

**D-H Parameter Assignment:**
Let's attach frames according to the D-H convention.
*   Frame {0}: Base frame.
*   Frame {1}: Attached to Link 1, origin at Joint 2.
*   Frame {2}: Attached to Link 2, origin at the end-effector.

| Link | $\alpha_{i-1}$ | $a_{i-1}$ | $d_i$ | $\theta_i$ |
| :--- | :------------- | :-------- | :---- | :--------- |
| 1    | 0              | $L_1$     | 0     | $\theta_1$ |
| 2    | 0              | $L_2$     | 0     | $\theta_2$ |

**Transformation Matrices:**

1.  **$A_1^0$ (Frame 1 to Frame 0):**
    $$
    A_1^0 = \begin{bmatrix}
    \cos(\theta_1) & -\sin(\theta_1) & 0 & L_1\cos(\theta_1) \\
    \sin(\theta_1) & \cos(\theta_1) & 0 & L_1\sin(\theta_1) \\
    0 & 0 & 1 & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix}
    $$

2.  **$A_2^1$ (Frame 2 to Frame 1):**
    $$
    A_2^1 = \begin{bmatrix}
    \cos(\theta_2) & -\sin(\theta_2) & 0 & L_2\cos(\theta_2) \\
    \sin(\theta_2) & \cos(\theta_2) & 0 & L_2\sin(\theta_2) \\
    0 & 0 & 1 & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix}
    $$

**Direct Kinematics (Arm Equation):**
The transformation from frame 2 (end-effector) to frame 0 (base) is the product:

$$
T_2^0 = A_1^0 A_2^1
$$

Let's compute this product:

$$
T_2^0 = \begin{bmatrix}
\cos(\theta_1) & -\sin(\theta_1) & 0 & L_1\cos(\theta_1) \\
\sin(\theta_1) & \cos(\theta_1) & 0 & L_1\sin(\theta_1) \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
\cos(\theta_2) & -\sin(\theta_2) & 0 & L_2\cos(\theta_2) \\
\sin(\theta_2) & \cos(\theta_2) & 0 & L_2\sin(\theta_2) \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

Performing the matrix multiplication:

$$
T_2^0 = \begin{bmatrix}
\cos(\theta_1)\cos(\theta_2) - \sin(\theta_1)\sin(\theta_2) & -\cos(\theta_1)\sin(\theta_2) - \sin(\theta_1)\cos(\theta_2) & 0 & L_1\cos(\theta_1) + L_2\cos(\theta_1+\theta_2) \\
\sin(\theta_1)\cos(\theta_2) + \cos(\theta_1)\sin(\theta_2) & \sin(\theta_1)\sin(\theta_2) + \cos(\theta_1)\cos(\theta_2) & 0 & L_1\sin(\theta_1) + L_2\sin(\theta_1+\theta_2) \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

Using trigonometric identities ($\cos(A+B) = \cos A \cos B - \sin A \sin B$, $\sin(A+B) = \sin A \cos B + \cos A \sin B$):

$$
T_2^0 = \begin{bmatrix}
\cos(\theta_1+\theta_2) & -\sin(\theta_1+\theta_2) & 0 & L_1\cos(\theta_1) + L_2\cos(\theta_1+\theta_2) \\
\sin(\theta_1+\theta_2) & \cos(\theta_1+\theta_2) & 0 & L_1\sin(\theta_1) + L_2\sin(\theta_1+\theta_2) \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

The position of the end-effector $(x, y, z)$ in the base frame {0} is given by the first three elements of the last column:

$$
x = L_1\cos(\theta_1) + L_2\cos(\theta_1+\theta_2)
$$
$$
y = L_1\sin(\theta_1) + L_2\sin(\theta_1+\theta_2)
$$
$$
z = 0
$$

The orientation is given by the top-left 3x3 submatrix, which in this case is a rotation about the z-axis by $(\theta_1+\theta_2)$.

**Textbook Reference:**
*   Schilling, R. J. (1996). *Fundamentals of Robotics – Analysis and Control*. Chapter 2, Section 2.2: Manipulator Kinematics.
*   Craig, J. J. (2002). *Introduction to Robotics (Mechanics and Control)*. Chapter 3: Kinematics (examples of PUMA arm, SCARA arm).

---

#### **Example 3: 3-DOF Manipulator (Planar Arm with a Translational Joint)**

Let's consider a planar manipulator with two revolute joints and one prismatic joint.

*   **Configuration:**
    1.  Revolute joint 1 ($\theta_1$) allows rotation of the first link.
    2.  Prismatic joint 2 ($d_2$) allows linear extension of the second link.
    3.  Revolute joint 3 ($\theta_3$) allows rotation of the end-effector relative to the extended link.
*   **Link Lengths/Parameters:** $L_1$ (length of link 1), $d_2$ (extension of link 2), $L_3$ (fixed offset from joint 3 to end-effector, often implicitly handled).

**D-H Parameter Assignment:**
*   Frame {0}: Base frame.
*   Frame {1}: Attached to Link 1, origin at Joint 2.
*   Frame {2}: Attached to Link 2 (extension), origin at Joint 3.
*   Frame {3}: Attached to End-Effector, origin at end-effector.

| Link | $\alpha_{i-1}$ | $a_{i-1}$ | $d_i$ | $\theta_i$ |
| :--- | :------------- | :-------- | :---- | :--------- |
| 1    | 0              | $L_1$     | 0     | $\theta_1$ |
| 2    | 0              | 0         | $d_2$ | 0          |  *(Note: For a prismatic joint, $\theta_i$ is fixed and $d_i$ is the variable)*
| 3    | 0              | $L_3$     | 0     | $\theta_3$ | *(Assuming an end-effector frame attached to the end of link 2)*

Let's refine the D-H assignment for a typical 3-DOF planar arm (e.g., SCARA-like motion with an additional wrist rotation).

Assume:
*   Joint 1 (Revolute): $\theta_1$. Link 1 length $L_1$.
*   Joint 2 (Prismatic): $d_2$. The prismatic joint is aligned with the axis of the first link.
*   Joint 3 (Revolute): $\theta_3$. This joint rotates the end-effector relative to the extended link.

| Link | $\alpha_{i-1}$ | $a_{i-1}$ | $d_i$ | $\theta_i$ | Variable |
| :--- | :------------- | :-------- | :---- | :--------- | :------- |
| 1    | 0              | 0         | 0     | $\theta_1$ | $\theta_1$ | *(Frame 1 origin at joint 2, aligned with link 1)*
| 2    | 0              | $L_1$     | $d_2$ | 0          | $d_2$    | *(Frame 2 origin at joint 3, aligned with extension)*
| 3    | 0              | 0         | 0     | $\theta_3$ | $\theta_3$ | *(Frame 3 origin at end-effector, aligned with end-effector's orientation)*

**Transformation Matrices:**

1.  **$A_1^0$ (Frame 1 to Frame 0):**
    $$
    A_1^0 = \begin{bmatrix}
    \cos(\theta_1) & -\sin(\theta_1) & 0 & 0 \\
    \sin(\theta_1) & \cos(\theta_1) & 0 & 0 \\
    0 & 0 & 1 & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix}
    $$
    *(Here, $a_0 = 0$, so the origin of frame 1 is at the origin of frame 0 if the link were zero length, but the rotation happens around frame 0's origin. If link 1 had length $L_1$ and frame 1 was at the end, $a_0$ would be $L_1$. Let's assume frame 1 origin is at joint 2, meaning it's on link 1, and link 1 has length $L_1$ from joint 1 to joint 2. So $a_0$ for link 1 should be $L_1$. Let's re-evaluate the D-H setup.)*

**Revised D-H Assignment for a typical 3-DOF planar manipulator (e.g., R-P-R configuration):**

*   Link 1 (length $L_1$): Revolute joint 1 ($\theta_1$). Frame 1 attached to link 1.
*   Link 2 (extends $d_2$): Prismatic joint 2 ($d_2$). Frame 2 attached to the end of the prismatic extension.
*   End-effector: Rotated by $\theta_3$. Frame 3 attached to the end-effector.

| Link | $\alpha_{i-1}$ | $a_{i-1}$ | $d_i$ | $\theta_i$ | Variable |
| :--- | :------------- | :-------- | :---- | :--------- | :------- |
| 1    | 0              | $L_1$     | 0     | $\theta_1$ | $\theta_1$ | *(Frame 1 origin is at joint 2)*
| 2    | 0              | 0         | $d_2$ | 0          | $d_2$    | *(Frame 2 origin is at joint 3, aligned with the extension)*
| 3    | 0              | 0         | 0     | $\theta_3$ | $\theta_3$ | *(Frame 3 origin is at the end-effector)*

**Transformation Matrices:**

1.  **$A_1^0$ (Frame 1 to Frame 0):** (Joint 1: Revolute)
    $$
    A_1^0 = \begin{bmatrix}
    \cos(\theta_1) & -\sin(\theta_1)\cos(0) & \sin(\theta_1)\sin(0) & L_1\cos(\theta_1) \\
    \sin(\theta_1) & \cos(\theta_1)\cos(0) & -\cos(\theta_1)\sin(0) & L_1\sin(\theta_1) \\
    0 & \sin(0) & \cos(0) & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix} = \begin{bmatrix}
    \cos(\theta_1) & -\sin(\theta_1) & 0 & L_1\cos(\theta_1) \\
    \sin(\theta_1) & \cos(\theta_1) & 0 & L_1\sin(\theta_1) \\
    0 & 0 & 1 & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix}
    $$

2.  **$A_2^1$ (Frame 2 to Frame 1):** (Joint 2: Prismatic)
    $$
    A_2^1 = \begin{bmatrix}
    \cos(0) & -\sin(0)\cos(0) & \sin(0)\sin(0) & 0\cos(0) \\
    \sin(0) & \cos(0)\cos(0) & -\cos(0)\sin(0) & 0\sin(0) \\
    0 & \sin(0) & \cos(0) & d_2 \\
    0 & 0 & 0 & 1
    \end{bmatrix} = \begin{bmatrix}
    1 & 0 & 0 & 0 \\
    0 & 1 & 0 & 0 \\
    0 & 0 & 1 & d_2 \\
    0 & 0 & 0 & 1
    \end{bmatrix}
    $$
    *(Here, $d_2$ is the offset along the z-axis of frame 1, which is consistent with the definition of a prismatic joint.)*

3.  **$A_3^2$ (Frame 3 to Frame 2):** (Joint 3: Revolute)
    $$
    A_3^2 = \begin{bmatrix}
    \cos(\theta_3) & -\sin(\theta_3)\cos(0) & \sin(\theta_3)\sin(0) & 0\cos(\theta_3) \\
    \sin(\theta_3) & \cos(\theta_3)\cos(0) & -\cos(\theta_3)\sin(0) & 0\sin(\theta_3) \\
    0 & \sin(0) & \cos(0) & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix} = \begin{bmatrix}
    \cos(\theta_3) & -\sin(\theta_3) & 0 & 0 \\
    \sin(\theta_3) & \cos(\theta_3) & 0 & 0 \\
    0 & 0 & 1 & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix}
    $$

**Direct Kinematics (Arm Equation):**
$$
T_3^0 = A_1^0 A_2^1 A_3^2
$$

Let's compute the intermediate product $A_1^0 A_2^1$:

$$
A_1^0 A_2^1 = \begin{bmatrix}
\cos(\theta_1) & -\sin(\theta_1) & 0 & L_1\cos(\theta_1) \\
\sin(\theta_1) & \cos(\theta_1) & 0 & L_1\sin(\theta_1) \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & d_2 \\
0 & 0 & 0 & 1
\end{bmatrix}
= \begin{bmatrix}
\cos(\theta_1) & -\sin(\theta_1) & 0 & L_1\cos(\theta_1) \\
\sin(\theta_1) & \cos(\theta_1) & 0 & L_1\sin(\theta_1) \\
0 & 0 & 1 & d_2 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

Now, multiply by $A_3^2$:

$$
T_3^0 = (A_1^0 A_2^1) A_3^2 = \begin{bmatrix}
\cos(\theta_1) & -\sin(\theta_1) & 0 & L_1\cos(\theta_1) \\
\sin(\theta_1) & \cos(\theta_1) & 0 & L_1\sin(\theta_1) \\
0 & 0 & 1 & d_2 \\
0 & 0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
\cos(\theta_3) & -\sin(\theta_3) & 0 & 0 \\
\sin(\theta_3) & \cos(\theta_3) & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

$$
T_3^0 = \begin{bmatrix}
\cos(\theta_1)\cos(\theta_3) - \sin(\theta_1)\sin(\theta_3) & -\cos(\theta_1)\sin(\theta_3) - \sin(\theta_1)\cos(\theta_3) & 0 & L_1\cos(\theta_1) \\
\sin(\theta_1)\cos(\theta_3) + \cos(\theta_1)\sin(\theta_3) & \sin(\theta_1)\sin(\theta_3) + \cos(\theta_1)\cos(\theta_3) & 0 & L_1\sin(\theta_1) \\
0 & 0 & 1 & d_2 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

Using trigonometric identities:

$$
T_3^0 = \begin{bmatrix}
\cos(\theta_1+\theta_3) & -\sin(\theta_1+\theta_3) & 0 & L_1\cos(\theta_1) \\
\sin(\theta_1+\theta_3) & \cos(\theta_1+\theta_3) & 0 & L_1\sin(\theta_1) \\
0 & 0 & 1 & d_2 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

The end-effector position $(x, y, z)$ in the base frame {0} is:

$$
x = L_1\cos(\theta_1)
$$
$$
y = L_1\sin(\theta_1)
$$
$$
z = d_2
$$

The orientation is a rotation about the z-axis by $(\theta_1+\theta_3)$.

**Important Note on D-H Convention:** There are variations of the D-H convention (e.g., standard D-H vs. modified D-H). The key is to be consistent with the chosen convention throughout the derivation. The choice of where to attach frames can also affect the D-H parameters but should lead to the same overall end-effector pose.

**Textbook Reference:**
*   Mittal, R. K. (2003). *Robotics and Control*. Chapter 3: Kinematics. (Likely covers examples of 3-DOF arms).
*   Deb, S. R. (Second Edition). *Robotics Technology and Flexible Automation*. Chapter 4: Kinematics. (Likely covers D-H and examples).

---

### **7. End-Effector Pose Representation**

The pose of the end-effector includes both its position and orientation.

*   **Position:** $(x, y, z)$ coordinates in the base frame.
*   **Orientation:**
    *   **Rotation Matrix ($R_{3 \times 3}$):** The top-left 3x3 submatrix of the final homogeneous transformation matrix $T_n^0$ represents the orientation of the end-effector frame relative to the base frame.
    *   **Euler Angles:** Represent orientation as a sequence of rotations about specific axes (e.g., roll, pitch, yaw). Requires careful definition of the rotation sequence.
    *   **Roll-Pitch-Yaw:** A common set of Euler angles.

For the examples above:
*   **1-DOF Arm:** Orientation is a rotation around the z-axis by $\theta_1$. $R_z(\theta_1) = \begin{bmatrix} \cos(\theta_1) & -\sin(\theta_1) & 0 \\ \sin(\theta_1) & \cos(\theta_1) & 0 \\ 0 & 0 & 1 \end{bmatrix}$.
*   **2-DOF Planar Arm:** Orientation is a rotation around the z-axis by $(\theta_1+\theta_2)$. $R_z(\theta_1+\theta_2)$.
*   **3-DOF R-P-R Arm:** Orientation is a rotation around the z-axis by $(\theta_1+\theta_3)$. $R_z(\theta_1+\theta_3)$.

---

### **8. Direct Kinematics Problems**

A direct kinematics problem involves being given the joint variables and asked to find the end-effector's position and orientation.

**General Approach:**
1.  **Identify the robot's configuration:** Number of links, types of joints, and their order.
2.  **Assign coordinate frames:** Use the Denavit-Hartenberg convention to assign a frame to each link.
3.  **Determine D-H parameters:** Fill in the D-H table for the manipulator.
4.  **Derive individual transformation matrices ($A_i^{i-1}$):** Use the D-H parameter formulas.
5.  **Multiply matrices to get the total transformation ($T_n^0$):** $T_n^0 = A_1^0 A_2^1 \dots A_n^{n-1}$.
6.  **Extract position and orientation:** The last column of $T_n^0$ gives the position vector, and the top-left 3x3 submatrix gives the rotation matrix.

---

### **9. Practice Questions and Exercises**

**Question 1:**
Consider a 2-DOF planar robot arm with two revolute joints.
*   Link 1 has length $L_1 = 0.5$ m.
*   Link 2 has length $L_2 = 0.4$ m.
*   The arm is currently at joint angles $\theta_1 = 30^\circ$ and $\theta_2 = 60^\circ$.

Determine the position of the end-effector in the base frame.

**Answer 1:**
Using the direct kinematics equations for a 2-DOF planar arm:
$x = L_1\cos(\theta_1) + L_2\cos(\theta_1+\theta_2)$
$y = L_1\sin(\theta_1) + L_2\sin(\theta_1+\theta_2)$

Given:
$L_1 = 0.5$ m
$L_2 = 0.4$ m
$\theta_1 = 30^\circ$
$\theta_2 = 60^\circ$

Calculate intermediate values:
$\theta_1 + \theta_2 = 30^\circ + 60^\circ = 90^\circ$
$\cos(30^\circ) = \sqrt{3}/2 \approx 0.866$
$\sin(30^\circ) = 1/2 = 0.5$
$\cos(90^\circ) = 0$
$\sin(90^\circ) = 1$

Substitute into the equations:
$x = (0.5)(\cos(30^\circ)) + (0.4)(\cos(90^\circ))$
$x = (0.5)(0.866) + (0.4)(0)$
$x \approx 0.433$ m

$y = (0.5)(\sin(30^\circ)) + (0.4)(\sin(90^\circ))$
$y = (0.5)(0.5) + (0.4)(1)$
$y = 0.25 + 0.4$
$y = 0.65$ m

The position of the end-effector is approximately $(0.433, 0.65, 0)$ m.

---

**Question 2:**
Consider the 3-DOF R-P-R planar manipulator described in Example 3 with $L_1 = 0.3$ m. The joint variables are $\theta_1 = 45^\circ$, $d_2 = 0.2$ m, and $\theta_3 = -15^\circ$.

Determine the end-effector's position and its orientation's z-axis rotation.

**Answer 2:**
Using the derived direct kinematics equations for the 3-DOF R-P-R arm:
$x = L_1\cos(\theta_1)$
$y = L_1\sin(\theta_1)$
$z = d_2$
The orientation's z-axis rotation is $\phi = \theta_1 + \theta_3$.

Given:
$L_1 = 0.3$ m
$\theta_1 = 45^\circ$
$d_2 = 0.2$ m
$\theta_3 = -15^\circ$

Calculate intermediate values:
$\cos(45^\circ) = \sin(45^\circ) = \sqrt{2}/2 \approx 0.707$
$\theta_1 + \theta_3 = 45^\circ + (-15^\circ) = 30^\circ$

Substitute into the equations:
$x = (0.3)(\cos(45^\circ))$
$x = (0.3)(0.707)$
$x \approx 0.212$ m

$y = (0.3)(\sin(45^\circ))$
$y = (0.3)(0.707)$
$y \approx 0.212$ m

$z = 0.2$ m

The orientation's z-axis rotation is $\phi = 30^\circ$.

The end-effector's position is approximately $(0.212, 0.212, 0.2)$ m. The orientation is a rotation about the z-axis by $30^\circ$.

---

### **Important Points to Remember**

*   **Direct kinematics maps joint space to Cartesian space.**
*   **Homogeneous transformation matrices are key** for combining translations and rotations.
*   **Denavit-Hartenberg (D-H) convention** provides a systematic way to assign coordinate frames and derive these transformations.
*   The **arm equation is the product of individual link transformations** ($T_n^0 = A_1^0 A_2^1 \dots A_n^{n-1}$).
*   For planar robots, the end-effector is typically constrained to the XY plane (z=0), and orientation is often a single rotation about the Z-axis.
*   For 3D robots, orientation becomes more complex, involving full rotation matrices or other orientation representations.
*   The D-H convention has variations; ensure consistency.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### **Further Reading and Textbooks:**

*   **Fundamentals of Robotics – Analysis and Control by Robert. J. Schilling (Prentice Hall of India, 1996):** Provides a solid foundation in kinematics.
*   **Introduction to Robotics (Mechanics and Control) by John. J. Craig (Pearson Education Asia, 2002):** A widely recommended textbook for its clear explanations of kinematics and D-H convention.
*   **Modern Robotics Mechanics, Planning and Control by Kevin M. Lynch, Frank C. Park:** Offers a modern and comprehensive approach, likely covering D-H and other advanced topics.

---