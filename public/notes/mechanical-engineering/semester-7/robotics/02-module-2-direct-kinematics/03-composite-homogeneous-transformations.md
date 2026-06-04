---
title: "Composite homogeneous transformations"
subject: "ROBOTICS"
module: "Module 2: Direct Kinematics"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464249"
status: "completed"
scrapedAt: "2026-05-20T18:18:42.402Z"
---
# ROBOTICS: Module 2: Direct Kinematics

## Topic: Composite Homogeneous Transformations

### Introduction

Direct Kinematics deals with determining the position and orientation of the end-effector of a robotic manipulator given the joint variables. For serial manipulators, this involves linking the transformations between consecutive links. **Composite homogeneous transformations** are a fundamental tool for achieving this by combining a series of individual transformations into a single transformation matrix that represents the overall configuration of the end-effector with respect to the base frame. This topic is crucial for understanding how the robot's geometry and joint movements translate into its spatial pose.

### Learning Outcomes Addressed:

*   **Understanding the concatenation of transformations:** How to combine multiple spatial transformations into a single composite transformation.
*   **Representing the pose of links:** How to define the position and orientation of each link relative to the preceding link in a kinematic chain using homogeneous transformation matrices.
*   **Calculating the end-effector pose:** How to derive the overall transformation from the base frame to the end-effector frame by multiplying the individual link transformations.
*   **Applying the concept to real-world robotic manipulators:** Understanding how composite transformations are used to describe the kinematics of industrial robots.

### Course Outcomes Alignment:

*   **CO2: Obtain forward and inverse kinematic models of robotic manipulators (Knowledge Level: K3)**
    *   This topic directly contributes to understanding the forward kinematic model by explaining how to calculate the end-effector's pose from joint variables.

### Key Concepts and Definitions

#### 1. Homogeneous Transformation Matrix

A homogeneous transformation matrix is a $4 \times 4$ matrix that represents both rotation and translation in 3D space. It allows us to express a rigid body transformation (rotation and translation) as a matrix multiplication.

A general homogeneous transformation matrix $T$ has the form:

$T = \begin{bmatrix} R & \mathbf{p} \\ \mathbf{0}^T & 1 \end{bmatrix}$

where:
*   $R$ is a $3 \times 3$ rotation matrix, representing the orientation of the transformed frame relative to the reference frame.
*   $\mathbf{p}$ is a $3 \times 1$ translation vector, representing the position of the origin of the transformed frame relative to the origin of the reference frame.
*   $\mathbf{0}^T = \begin{bmatrix} 0 & 0 & 0 \end{bmatrix}$
*   The last row is $\begin{bmatrix} 0 & 0 & 0 & 1 \end{bmatrix}$ to ensure that translations are applied correctly when multiplying homogeneous coordinate vectors.

**Example of a Homogeneous Transformation:**
A translation by $(x_0, y_0, z_0)$ can be represented as:
$T_{trans} = \begin{bmatrix} 1 & 0 & 0 & x_0 \\ 0 & 1 & 0 & y_0 \\ 0 & 0 & 1 & z_0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

A rotation by an angle $\theta$ about the z-axis can be represented as:
$T_{rot-z}(\theta) = \begin{bmatrix} \cos\theta & -\sin\theta & 0 & 0 \\ \sin\theta & \cos\theta & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

#### 2. Composite Transformation

A composite transformation is the result of applying a sequence of individual transformations. For rigid body transformations, the order of operations is crucial. When transformations are represented by homogeneous matrices, the composite transformation is obtained by multiplying the individual matrices in the correct order.

**Key Principle:** If we have a series of transformations $T_1, T_2, T_3, \dots, T_n$, where $T_i$ represents the transformation from frame $i-1$ to frame $i$, then the transformation from the base frame (frame 0) to the end-effector frame (frame $n$) is given by the product:

$T_{0 \to n} = T_1 \cdot T_2 \cdot T_3 \cdot \dots \cdot T_n$

This product represents a single equivalent transformation that achieves the same overall change in position and orientation.

**Important Note:** Matrix multiplication is not commutative ($A \cdot B \neq B \cdot A$). Therefore, the order of multiplication is vital. The composite transformation from frame A to frame C, via an intermediate frame B, where $T_{A \to B}$ transforms points from frame A to frame B, and $T_{B \to C}$ transforms points from frame B to frame C, is $T_{A \to C} = T_{A \to B} \cdot T_{B \to C}$.

**[Referencing Schilling, Chapter 3: Kinematics of Robotic Manipulators]:** Schilling emphasizes that homogeneous transformations are the standard mathematical tool for describing the position and orientation of links in a manipulator. He illustrates how to derive these transformations from joint angles and link parameters.

#### 3. Denavit-Hartenberg (D-H) Convention (Briefly Introduced for Context)

While the full D-H convention is often a separate topic, it's the primary method for systematically assigning frames to links and deriving the individual homogeneous transformation matrices. The D-H convention uses four parameters (link length, link twist, link offset, joint angle) to define the transformation between adjacent links. Understanding how these parameters translate into basic rotation and translation matrices is key.

*   **D-H Transformation Components:** A standard D-H transformation between link $i-1$ and link $i$ involves a sequence of four basic transformations:
    1.  Rotation about the z-axis of link $i-1$ by $\theta_i$ (joint angle).
    2.  Translation along the z-axis of link $i-1$ by $d_i$ (link offset).
    3.  Translation along the x-axis of link $i$ by $a_i$ (link length).
    4.  Rotation about the x-axis of link $i$ by $\alpha_i$ (link twist).

The composite transformation from link $i-1$ to link $i$, denoted as $A_i$, is then:
$A_i = \text{Rot-z}(d_i) \cdot \text{Trans-z}(d_i) \cdot \text{Trans-x}(a_i) \cdot \text{Rot-x}(\alpha_i)$

**[Referencing Craig, Chapter 3: Kinematics]:** Craig extensively discusses the D-H convention as a systematic approach to derive the kinematic equations. He shows how the four D-H parameters define the transformations, and how these are combined.

### Building Composite Transformations

To find the transformation from the base frame to the end-effector frame of a manipulator with $n$ joints, we need to define a homogeneous transformation matrix for each joint. This matrix describes the relationship between the frame of link $i-1$ and the frame of link $i$.

Let $T_{i-1 \to i}$ be the homogeneous transformation matrix from the frame attached to link $i-1$ to the frame attached to link $i$.

The overall transformation from the base frame (frame 0) to the end-effector frame (frame $n$) is the product of these individual transformations:

$T_{0 \to n} = T_{0 \to 1} \cdot T_{1 \to 2} \cdot T_{2 \to 3} \cdot \dots \cdot T_{n-1 \to n}$

Each $T_{i-1 \to i}$ is itself a composite transformation made up of basic rotations and translations, defined by the joint variables and link geometry.

**Example: A 2-DOF Planar Manipulator**

Consider a simple planar manipulator with two revolute joints.
*   **Base Frame (0):** Attached at the origin.
*   **Joint 1:** Revolute joint.
*   **Link 1:** Length $L_1$. Frame 1 is attached at the end of Link 1.
*   **Joint 2:** Revolute joint.
*   **Link 2 (End-Effector):** Length $L_2$. Frame 2 is attached at the end of Link 2.

Let $\theta_1$ be the angle of the first joint and $\theta_2$ be the angle of the second joint, both measured with respect to the previous link's orientation.

**1. Transformation from Base (0) to Link 1 ($T_{0 \to 1}$):**
This transformation involves a rotation about the z-axis by $\theta_1$.
$T_{0 \to 1} = \begin{bmatrix} \cos\theta_1 & -\sin\theta_1 & 0 & 0 \\ \sin\theta_1 & \cos\theta_1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

**2. Transformation from Link 1 to Link 2 ($T_{1 \to 2}$):**
This transformation involves a translation along the x-axis of Link 1 by its length $L_1$, followed by a rotation about the z-axis of Link 2 by $\theta_2$.
*   Translation by $L_1$ along x-axis of frame 1:
    $T_{\text{trans-L1}} = \begin{bmatrix} 1 & 0 & 0 & L_1 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$
*   Rotation by $\theta_2$ about z-axis of frame 2 (which is aligned with the z-axis of frame 1 before translation):
    $T_{\text{rot-theta2}} = \begin{bmatrix} \cos\theta_2 & -\sin\theta_2 & 0 & 0 \\ \sin\theta_2 & \cos\theta_2 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

So, $T_{1 \to 2} = T_{\text{trans-L1}} \cdot T_{\text{rot-theta2}}$ (Incorrect ordering for standard D-H, let's assume frame 2 is aligned with link 1's X-axis before rotation $\theta_2$).
A more standard way in D-H would be:
$T_{1 \to 2} = \text{Rot-z}(\theta_2) \cdot \text{Trans-x}(L_1)$.
If frame 2's z-axis is along the direction of the link and x-axis is pointing along the link, then the transformation is:
$T_{1 \to 2} = \begin{bmatrix} \cos\theta_2 & -\sin\theta_2 & 0 & L_1 \\ \sin\theta_2 & \cos\theta_2 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

**3. Composite Transformation from Base to End-Effector ($T_{0 \to 2}$):**
$T_{0 \to 2} = T_{0 \to 1} \cdot T_{1 \to 2}$

$T_{0 \to 2} = \begin{bmatrix} \cos\theta_1 & -\sin\theta_1 & 0 & 0 \\ \sin\theta_1 & \cos\theta_1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} \cdot \begin{bmatrix} \cos\theta_2 & -\sin\theta_2 & 0 & L_1 \\ \sin\theta_2 & \cos\theta_2 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

Performing the matrix multiplication:
$T_{0 \to 2} = \begin{bmatrix}
(\cos\theta_1 \cos\theta_2 - \sin\theta_1 \sin\theta_2) & -(\cos\theta_1 \sin\theta_2 + \sin\theta_1 \cos\theta_2) & 0 & L_1 \cos\theta_1 \\
(\sin\theta_1 \cos\theta_2 + \cos\theta_1 \sin\theta_2) & (\cos\theta_1 \cos\theta_2 - \sin\theta_1 \sin\theta_2) & 0 & L_1 \sin\theta_1 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}$

Using trigonometric identities: $\cos(A+B) = \cos A \cos B - \sin A \sin B$ and $\sin(A+B) = \sin A \cos B + \cos A \sin B$

$T_{0 \to 2} = \begin{bmatrix}
\cos(\theta_1 + \theta_2) & -\sin(\theta_1 + \theta_2) & 0 & L_1 \cos\theta_1 \\
\sin(\theta_1 + \theta_2) & \cos(\theta_1 + \theta_2) & 0 & L_1 \sin\theta_1 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}$

The top-right column $\begin{bmatrix} L_1 \cos\theta_1 \\ L_1 \sin\theta_1 \\ 0 \end{bmatrix}$ represents the position $(x, y, z)$ of the end-effector's origin in the base frame. The top-left $3 \times 3$ submatrix represents the orientation of the end-effector's frame with respect to the base frame.

**[Referencing Ghosal, Chapter 3: Kinematics of Serial Manipulators]:** Ghosal provides a thorough explanation of frame assignments and the derivation of homogeneous transformations for serial manipulators, often using the D-H convention as a basis. He emphasizes the product of matrices to obtain the overall transformation.

### Applications in Robotics

Composite homogeneous transformations are fundamental for:

*   **Forward Kinematics:** As demonstrated above, they directly calculate the end-effector's pose from joint variables. This is essential for robot control, simulation, and task planning.
*   **Workspace Analysis:** Determining the reachable space of the robot's end-effector.
*   **Robot Programming:** Specifying desired end-effector positions and orientations, which are then converted into joint commands using inverse kinematics (which relies on forward kinematics for verification).
*   **Object Recognition and Grasping:** Understanding the robot's pose relative to objects in the environment.

**[Referencing Mittal & Gopal, Chapter 4: Kinematics]:** Mittal and Gopal often cover this topic by explaining how to combine coordinate transformations to achieve the desired end-effector pose. They might use examples of industrial robots to illustrate the application.

### Important Points to Remember

*   **Frame Assignment:** The choice of frames for each link is crucial. The D-H convention provides a systematic way to do this.
*   **Order of Multiplication:** Transformations must be multiplied in the correct sequence to reflect the spatial arrangement of the links. $T_{0 \to n} = T_{0 \to 1} \cdot T_{1 \to 2} \cdot \dots \cdot T_{n-1 \to n}$.
*   **Homogeneous Coordinates:** Using $4 \times 4$ matrices allows for the representation of both rotation and translation in a single matrix operation.
*   **Trigonometric Identities:** Be proficient in using $\sin$ and $\cos$ identities to simplify the resulting transformation matrices.
*   **Interpretation of the Result:** The final $4 \times 4$ matrix $T_{0 \to n}$ contains the overall rotation (top-left $3 \times 3$ submatrix) and translation (top-right $3 \times 1$ vector) of the end-effector frame with respect to the base frame.

### Practice Questions

**Question 1:**
A robot arm has two links. Link 1 has length $L_1$ and is connected by a revolute joint that rotates by $\theta_1$. Link 2 has length $L_2$ and is connected by a revolute joint that rotates by $\theta_2$. If the base frame is at the origin and the first joint rotates about the z-axis, and the second joint is offset by $L_1$ along the x-axis of the first link and rotates about the z-axis of the second link (aligned with the z-axis of the first link).
Derive the composite homogeneous transformation matrix $T_{0 \to 2}$ that describes the pose of the end-effector (frame 2) with respect to the base frame (frame 0).

**Answer 1:**
Following the derivation in the notes:
$T_{0 \to 1} = \begin{bmatrix} \cos\theta_1 & -\sin\theta_1 & 0 & 0 \\ \sin\theta_1 & \cos\theta_1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$
$T_{1 \to 2} = \begin{bmatrix} \cos\theta_2 & -\sin\theta_2 & 0 & L_1 \\ \sin\theta_2 & \cos\theta_2 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

$T_{0 \to 2} = T_{0 \to 1} \cdot T_{1 \to 2} = \begin{bmatrix}
\cos(\theta_1 + \theta_2) & -\sin(\theta_1 + \theta_2) & 0 & L_1 \cos\theta_1 \\
\sin(\theta_1 + \theta_2) & \cos(\theta_1 + \theta_2) & 0 & L_1 \sin\theta_1 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}$

**Question 2:**
Consider a transformation $T_A$ that rotates by $30^\circ$ about the x-axis, followed by a translation of $(2, 0, 0)$. Then consider a transformation $T_B$ that rotates by $45^\circ$ about the y-axis, followed by a translation of $(0, 3, 0)$.
a) Write the individual homogeneous transformation matrices for the rotations and translations.
b) Calculate the composite transformation $T_A$ and $T_B$.
c) Calculate the composite transformation $T_{total} = T_A \cdot T_B$.
d) What is the position and orientation represented by $T_{total}$?

**Answer 2:**
a)
Rotation about x by $30^\circ$:
$R_x(30^\circ) = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & \cos30^\circ & -\sin30^\circ & 0 \\ 0 & \sin30^\circ & \cos30^\circ & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & \sqrt{3}/2 & -1/2 & 0 \\ 0 & 1/2 & \sqrt{3}/2 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$
Translation by $(2, 0, 0)$:
$Tr_x(2) = \begin{bmatrix} 1 & 0 & 0 & 2 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

Rotation about y by $45^\circ$:
$R_y(45^\circ) = \begin{bmatrix} \cos45^\circ & 0 & \sin45^\circ & 0 \\ 0 & 1 & 0 & 0 \\ -\sin45^\circ & 0 & \cos45^\circ & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} \sqrt{2}/2 & 0 & \sqrt{2}/2 & 0 \\ 0 & 1 & 0 & 0 \\ -\sqrt{2}/2 & 0 & \sqrt{2}/2 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$
Translation by $(0, 3, 0)$:
$Tr_y(3) = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 3 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

b)
$T_A = Tr_x(2) \cdot R_x(30^\circ)$
$T_A = \begin{bmatrix} 1 & 0 & 0 & 2 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} \cdot \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & \sqrt{3}/2 & -1/2 & 0 \\ 0 & 1/2 & \sqrt{3}/2 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 & 2 \\ 0 & \sqrt{3}/2 & -1/2 & 0 \\ 0 & 1/2 & \sqrt{3}/2 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

$T_B = Tr_y(3) \cdot R_y(45^\circ)$
$T_B = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 3 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} \cdot \begin{bmatrix} \sqrt{2}/2 & 0 & \sqrt{2}/2 & 0 \\ 0 & 1 & 0 & 0 \\ -\sqrt{2}/2 & 0 & \sqrt{2}/2 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} \sqrt{2}/2 & 0 & \sqrt{2}/2 & 0 \\ 0 & 1 & 0 & 3 \\ -\sqrt{2}/2 & 0 & \sqrt{2}/2 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

c)
$T_{total} = T_A \cdot T_B$
$T_{total} = \begin{bmatrix} 1 & 0 & 0 & 2 \\ 0 & \sqrt{3}/2 & -1/2 & 0 \\ 0 & 1/2 & \sqrt{3}/2 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} \cdot \begin{bmatrix} \sqrt{2}/2 & 0 & \sqrt{2}/2 & 0 \\ 0 & 1 & 0 & 3 \\ -\sqrt{2}/2 & 0 & \sqrt{2}/2 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

$T_{total} = \begin{bmatrix}
(1 \cdot \sqrt{2}/2 + 0 \cdot 0 + 0 \cdot (-\sqrt{2}/2) + 2 \cdot 0) & (1 \cdot 0 + 0 \cdot 1 + 0 \cdot 0 + 2 \cdot 0) & (1 \cdot \sqrt{2}/2 + 0 \cdot 0 + 0 \cdot \sqrt{2}/2 + 2 \cdot 0) & (1 \cdot 0 + 0 \cdot 3 + 0 \cdot 0 + 2 \cdot 1) \\
(0 \cdot \sqrt{2}/2 + \sqrt{3}/2 \cdot 0 + (-1/2) \cdot (-\sqrt{2}/2) + 0 \cdot 0) & (0 \cdot 0 + \sqrt{3}/2 \cdot 1 + (-1/2) \cdot 0 + 0 \cdot 0) & (0 \cdot \sqrt{2}/2 + \sqrt{3}/2 \cdot 0 + (-1/2) \cdot \sqrt{2}/2 + 0 \cdot 0) & (0 \cdot 0 + \sqrt{3}/2 \cdot 3 + (-1/2) \cdot 0 + 0 \cdot 1) \\
(0 \cdot \sqrt{2}/2 + 1/2 \cdot 0 + \sqrt{3}/2 \cdot (-\sqrt{2}/2) + 0 \cdot 0) & (0 \cdot 0 + 1/2 \cdot 1 + \sqrt{3}/2 \cdot 0 + 0 \cdot 0) & (0 \cdot \sqrt{2}/2 + 1/2 \cdot 0 + \sqrt{3}/2 \cdot \sqrt{2}/2 + 0 \cdot 0) & (0 \cdot 0 + 1/2 \cdot 3 + \sqrt{3}/2 \cdot 0 + 0 \cdot 1) \\
0 & 0 & 0 & 1
\end{bmatrix}$

$T_{total} = \begin{bmatrix}
\sqrt{2}/2 & 0 & \sqrt{2}/2 & 2 \\
\sqrt{2}/4 & \sqrt{3}/2 & -\sqrt{2}/4 & 3\sqrt{3}/2 \\
-\sqrt{6}/4 & 1/2 & \sqrt{6}/4 & 3/2 \\
0 & 0 & 0 & 1
\end{bmatrix}$

d)
Position: The translation vector is $\begin{bmatrix} 2 \\ 3\sqrt{3}/2 \\ 3/2 \end{bmatrix}$.
Orientation: The rotation matrix is the top-left $3 \times 3$ submatrix:
$R_{total} = \begin{bmatrix}
\sqrt{2}/2 & 0 & \sqrt{2}/2 \\
\sqrt{2}/4 & \sqrt{3}/2 & -\sqrt{2}/4 \\
-\sqrt{6}/4 & 1/2 & \sqrt{6}/4
\end{bmatrix}$
This matrix represents the combined rotation from the sequence of transformations. To describe the orientation, one would typically convert this rotation matrix into Euler angles or an axis-angle representation.

---
These notes provide a foundational understanding of composite homogeneous transformations, crucial for building the forward kinematic models of robotic manipulators. The examples illustrate the mathematical process, and the practice questions help reinforce these concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
