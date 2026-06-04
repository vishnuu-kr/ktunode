---
title: "The Denavit-Hartenberg (D-H) representation"
subject: "ROBOTICS"
module: "Module 2: Direct Kinematics"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446424b"
status: "completed"
scrapedAt: "2026-05-20T18:18:43.857Z"
---
# ROBOTICS: Module 2: Direct Kinematics - The Denavit-Hartenberg (D-H) Representation

## 1. Introduction to Direct Kinematics

Direct kinematics (or forward kinematics) is the study of how the position and orientation of the end-effector (the tool at the end of a robot arm) change as the joint variables (angles for revolute joints, displacements for prismatic joints) change. It's essentially about predicting where the robot's hand will be given the state of its joints.

**Key Concepts:**

*   **End-Effector:** The part of the robot that interacts with the environment (e.g., gripper, welding torch).
*   **Joint Variables:** The independent parameters that define the configuration of a robot manipulator. These are typically the angles of revolute joints ($\theta$) or the displacements of prismatic joints ($d$).
*   **Degrees of Freedom (DOF):** The number of independent joint variables required to specify the configuration of the robot.
*   **Homogeneous Transformation Matrices (HTMs):** A mathematical tool used to represent rigid body transformations (translation and rotation) in 3D space. An HTM is a 4x4 matrix that can combine translation and rotation into a single operation.

**Relevance to Course Outcomes:**

*   **CO2: Obtain forward and inverse kinematic models of robotic manipulators (Knowledge Level: K3)**
    *   The Denavit-Hartenberg (D-H) representation is a fundamental method for developing forward kinematic models. Understanding D-H is crucial for achieving CO2.

## 2. The Need for a Standardized Representation: Why D-H?

Manually deriving the forward kinematics for a complex robotic arm can be tedious and prone to errors. A systematic and standardized approach is needed to:

*   **Simplify the process:** Break down the complex transformation into a series of simpler transformations.
*   **Reduce ambiguity:** Ensure a consistent and repeatable method for describing robot configurations.
*   **Facilitate computation:** Make it easier to implement forward kinematics in software.
*   **Enable communication:** Provide a common language for describing robot manipulators across different research and engineering contexts.

The Denavit-Hartenberg (D-H) convention provides such a standardized framework.

## 3. The Denavit-Hartenberg (D-H) Convention

The D-H convention is a method for assigning a coordinate frame to each link of a robotic manipulator. By defining the relationship between consecutive coordinate frames, we can build up the overall transformation from the base frame to the end-effector frame.

**Core Idea:**

The D-H convention describes the relationship between two adjacent coordinate frames (say, frame $i-1$ and frame $i$) using four specific parameters:

1.  **Link Length ($a_i$):** The distance between the common normal of the $z_{i-1}$ and $z_i$ axes, measured along the $x_i$ axis.
2.  **Link Twist ($\alpha_i$):** The angle between the $z_{i-1}$ and $z_i$ axes, measured about the common normal ($x_i$) axis.
3.  **Link Offset ($d_i$):** The distance between the common normal of the $z_{i-1}$ and $z_i$ axes, measured along the $z_{i-1}$ axis. This is the **joint variable** for prismatic joints.
4.  **Joint Angle ($\theta_i$):** The angle between the $x_{i-1}$ and $x_i$ axes, measured about the $z_{i-1}$ axis. This is the **joint variable** for revolute joints.

**Key Definitions for D-H Parameter Assignment:**

To consistently apply the D-H convention, the following rules are used to define the coordinate frames and determine the parameters:

1.  **Rule 1: Define the z-axis:** For each link $i$, the $z_i$-axis is aligned with the axis of motion of joint $i+1$. If joint $i+1$ is revolute, $z_i$ is along the axis of rotation. If joint $i+1$ is prismatic, $z_i$ is along the direction of translation. For the base link (link 0), $z_0$ is chosen arbitrarily (often along the axis of the first joint's rotation). For the last link, $z_n$ is often chosen to align with the axis of the end-effector's approach.

2.  **Rule 2: Define the x-axis:** The $x_i$-axis is chosen to be perpendicular to both $z_{i-1}$ and $z_i$. It is typically defined as the *common normal* between the $z_{i-1}$ and $z_i$ axes. If $z_{i-1}$ and $z_i$ are parallel, the common normal is not unique. In such cases, pick $x_i$ to be along the direction of translation for a prismatic joint $i$, or perpendicular to the plane formed by $z_{i-1}$ and $z_i$ and pointing away from the previous frame for a revolute joint $i$.

3.  **Rule 3: Define the y-axis:** The $y_i$-axis is determined by the right-hand rule such that $x_i$, $y_i$, and $z_i$ form a right-handed coordinate system.

4.  **Rule 4: Assign D-H Parameters:** Once the coordinate frames are established, the four D-H parameters ($a_i$, $\alpha_i$, $d_i$, $\theta_i$) are determined based on the transformations needed to get from frame $i-1$ to frame $i$. The order of transformations is crucial and follows a specific sequence:
    *   **Rotate about $z_{i-1}$ by $\theta_i$**: To align $x_{i-1}$ with $x_i$ (after potential translation along $z_{i-1}$).
    *   **Translate along $z_{i-1}$ by $d_i$**: To bring the origin of frame $i$ onto the $z_{i-1}$ axis.
    *   **Translate along $x_i$ by $a_i$**: To bring the origin of frame $i$ onto the $x_i$ axis.
    *   **Rotate about $x_i$ by $\alpha_i$**: To align $z_{i-1}$ with $z_i$.

    **Important Note:** Some sources (like Schilling's book) might present a slightly different order of transformations (e.g., translate along $x_{i-1}$ by $a_{i-1}$, rotate about $x_{i-1}$ by $\alpha_{i-1}$, translate along $z_i$ by $d_i$, rotate about $z_i$ by $\theta_i$). The *standard* D-H convention described by Craig, and widely adopted, uses the four parameters ($a_i$, $\alpha_i$, $d_i$, $\theta_i$) to define the transformation from frame $i-1$ to frame $i$. The transformation matrix $A_i$ is constructed using these parameters.

## 4. The D-H Transformation Matrix ($A_i$)

The transformation from coordinate frame $i$ to coordinate frame $i-1$, denoted as ${^{i-1}}A_i$, can be represented by a 4x4 homogeneous transformation matrix. This matrix is constructed by combining the basic transformations associated with the D-H parameters. The standard D-H transformation matrix is:

$A_i = \text{Rot}(z, \theta_i) \cdot \text{Trans}(z, d_i) \cdot \text{Trans}(x, a_i) \cdot \text{Rot}(x, \alpha_i)$

Let's break down each component:

*   **Rotation about z-axis by $\theta_i$**:
    $\text{Rot}(z, \theta_i) = \begin{bmatrix} \cos \theta_i & -\sin \theta_i & 0 & 0 \\ \sin \theta_i & \cos \theta_i & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

*   **Translation along z-axis by $d_i$**:
    $\text{Trans}(z, d_i) = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & d_i \\ 0 & 0 & 0 & 1 \end{bmatrix}$

*   **Translation along x-axis by $a_i$**:
    $\text{Trans}(x, a_i) = \begin{bmatrix} 1 & 0 & 0 & a_i \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

*   **Rotation about x-axis by $\alpha_i$**:
    $\text{Rot}(x, \alpha_i) = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & \cos \alpha_i & -\sin \alpha_i & 0 \\ 0 & \sin \alpha_i & \cos \alpha_i & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

Multiplying these matrices in the specified order (from right to left for the sequence of operations):

$A_i = \begin{bmatrix} \cos \theta_i & -\sin \theta_i \cos \alpha_i & \sin \theta_i \sin \alpha_i & a_i \cos \theta_i \\ \sin \theta_i & \cos \theta_i \cos \alpha_i & -\cos \theta_i \sin \alpha_i & a_i \sin \theta_i \\ 0 & \sin \alpha_i & \cos \alpha_i & d_i \\ 0 & 0 & 0 & 1 \end{bmatrix}$

This matrix $A_i$ transforms a point represented in frame $i$ to frame $i-1$.

## 5. Deriving the Overall Transformation (Forward Kinematics)

To find the transformation from the base frame (frame 0) to the end-effector frame (frame $n$), we multiply the individual transformation matrices of each link in sequence:

$T_{0 \rightarrow n} = {^0}A_1 \cdot {^1}A_2 \cdot {^2}A_3 \cdots {^{n-1}}A_n$

where ${^{i-1}}A_i$ is the D-H transformation matrix describing the relationship between frame $i$ and frame $i-1$.

**Example:** For a 2-DOF planar arm (e.g., PUMA robot arm simplified):

$T_{0 \rightarrow 2} = {^0}A_1 \cdot {^1}A_2$

If we have the D-H parameters for each link, we can compute these matrices and multiply them to get the overall transformation. The resulting $T_{0 \rightarrow n}$ matrix will contain information about the position and orientation of the end-effector relative to the base frame.

$T_{0 \rightarrow n} = \begin{bmatrix} R_{3 \times 3} & \mathbf{p} \\ \mathbf{0}^T & 1 \end{bmatrix}$

where $R_{3 \times 3}$ is the 3x3 rotation matrix representing the orientation, and $\mathbf{p}$ is the 3x1 position vector of the end-effector.

## 6. Steps for Applying the D-H Convention

1.  **Identify the Links and Joints:** Determine the number of links and joints in the manipulator.
2.  **Assign Coordinate Frames:** For each link, attach a coordinate frame.
    *   **Link $i$ coordinate frame {i}:**
        *   $z_i$: Axis of motion (rotation or translation) of joint $i+1$.
        *   $x_i$: Common normal to $z_{i-1}$ and $z_i$.
        *   $y_i$: Right-hand rule from $x_i$ and $z_i$.
    *   **Base Frame {0}:** Typically attached to the base of the robot, often aligned with the first joint's axis.
    *   **End-Effector Frame {n}:** Typically attached to the end-effector, often oriented to represent the tool's orientation.
3.  **Determine D-H Parameters:** For each pair of consecutive frames ($i-1$ and $i$), determine the four D-H parameters: $a_i$, $\alpha_i$, $d_i$, $\theta_i$.
    *   $a_i$: Distance along $x_i$ between the intersection of $x_i$ with $z_{i-1}$ and the origin of frame $i$.
    *   $\alpha_i$: Angle about $x_i$ between $z_{i-1}$ and $z_i$.
    *   $d_i$: Distance along $z_{i-1}$ between the intersection of $z_{i-1}$ with $x_i$ and the origin of frame $i$. (This is the joint variable for prismatic joints.)
    *   $\theta_i$: Angle about $z_{i-1}$ between $x_{i-1}$ and $x_i$. (This is the joint variable for revolute joints.)
4.  **Construct Transformation Matrices:** For each link $i$, compute the D-H transformation matrix $A_i = {^{i-1}}A_i$.
5.  **Compute Overall Transformation:** Multiply the individual matrices to get the total transformation from the base to the end-effector: $T_{0 \rightarrow n} = {^0}A_1 \cdot {^1}A_2 \cdots {^{n-1}}A_n$.

## 7. Example: 2-DOF Planar Manipulator

Let's consider a simple 2-DOF planar manipulator where the first joint is revolute at the base, and the second joint is revolute at the end of the first link.

**Assumptions:**

*   Link 1 has length $L_1$.
*   Link 2 has length $L_2$.
*   Joint 1 rotates about the z-axis.
*   Joint 2 rotates about the z-axis of frame 1.

**Steps:**

1.  **Links and Joints:** 2 links, 2 joints (both revolute).
2.  **Coordinate Frames:**
    *   **Frame {0}:** Attached to the base. $z_0$ along the axis of rotation of joint 1. $x_0$ along link 1.
    *   **Frame {1}:** Attached to the end of link 1 (where joint 2 is located). $z_1$ along the axis of rotation of joint 2. $x_1$ along link 2.
    *   **Frame {2}:** Attached to the end-effector. $z_2$ aligned with $z_1$ (or along the direction of the end-effector). $x_2$ along the end-effector's direction.

    **Diagram:** (Imagine a simple 2-link planar arm)
    *   Base at origin (0,0).
    *   Link 1 extends from base to joint 2.
    *   Link 2 extends from joint 2 to end-effector.

3.  **Determine D-H Parameters:**

    *   **Link 1 (from Frame {0} to Frame {1}):**
        *   Joint 1 is revolute about $z_0$. Joint 2 is revolute about $z_1$.
        *   $z_0$: Axis of rotation of joint 1.
        *   $z_1$: Axis of rotation of joint 2 (parallel to $z_0$).
        *   Common normal of $z_0$ and $z_1$: This is problematic as they are parallel. We choose $x_1$ to be along the direction of link 1 from the base to the second joint.
        *   **$\theta_1$**: The angle of rotation of joint 1. This is the joint variable.
        *   **$d_1$**: No translation along $z_0$ before rotation. So, $d_1 = 0$.
        *   **$a_1$**: The length of link 1. This is the distance from the origin of frame 0 to the origin of frame 1, measured along $x_1$. So, $a_1 = L_1$.
        *   **$\alpha_1$**: The angle between $z_0$ and $z_1$. Since they are parallel and lie in the same plane (the xy-plane of the base frame), the twist is 0. So, $\alpha_1 = 0$.

        | Link | $\alpha_{i-1}$ | $a_{i-1}$ | $d_i$   | $\theta_i$ |
        | :--- | :------------- | :-------- | :------ | :--------- |
        | 1    | N/A            | N/A       | 0       | $\theta_1$ |

        *Let's re-evaluate based on the standard convention where $z_i$ is the axis of joint $i+1$.*

        *   **Frame {0}:** Base origin. $z_0$ is the axis of joint 1. $x_0$ is along link 1.
        *   **Frame {1}:** Origin at joint 2. $z_1$ is the axis of joint 2 (parallel to $z_0$). $x_1$ is along link 2.

        *   **For $A_1$ (transform from {1} to {0}):**
            *   **$a_1$**: Distance between $z_0$ and $z_1$ along $x_1$. This is the length of link 1, $L_1$.
            *   **$\alpha_1$**: Angle between $z_0$ and $z_1$ about $x_1$. Since $z_0$ and $z_1$ are parallel, $\alpha_1 = 0$.
            *   **$d_1$**: Distance along $z_0$ between the origin of {0} and the intersection of $z_0$ with $x_1$. Since they intersect at the origin of {0}, $d_1 = 0$.
            *   **$\theta_1$**: Angle about $z_0$ between $x_0$ and $x_1$. This is the first joint angle, $\theta_1$.

        *   **D-H Table for the 2-DOF planar arm:**

        | Link $i$ | $\alpha_{i-1}$ | $a_{i-1}$ | $d_i$ | $\theta_i$ | Joint Type |
        | :------- | :------------ | :-------- | :---- | :--------- | :--------- |
        | 1        | 0             | $L_1$     | 0     | $\theta_1$ | Revolute   |
        | 2        | 0             | $L_2$     | 0     | $\theta_2$ | Revolute   |

        **Correction:** The standard way to set up frames for a 2-DOF planar arm is often as follows:
        *   **Frame {0}:** Base at origin. $z_0$ along the axis of rotation of joint 1. $x_0$ along the direction of link 1.
        *   **Frame {1}:** Origin at the center of joint 2. $z_1$ along the axis of rotation of joint 2 (parallel to $z_0$). $x_1$ along the direction of link 2.
        *   **Frame {2}:** Origin at the end-effector. $z_2$ aligned with $z_1$. $x_2$ along the end-effector's axis.

        **Revised D-H Parameters for the 2-DOF planar arm:**

        | Link $i$ | $\alpha_{i-1}$ | $a_{i-1}$ | $d_i$ | $\theta_i$ | Joint Type |
        | :------- | :------------ | :-------- | :---- | :--------- | :--------- |
        | 1        | 0             | $L_1$     | 0     | $\theta_1$ | Revolute   |
        | 2        | 0             | $L_2$     | 0     | $\theta_2$ | Revolute   |

        *Wait, the parameters are $a_i$, $\alpha_i$, $d_i$, $\theta_i$ describing the transform from $i-1$ to $i$. Let's correct the table and the interpretation.*

        **Correct D-H Parameter Assignment for a 2-DOF Planar Manipulator:**

        Assume:
        *   Link 1 has length $L_1$.
        *   Link 2 has length $L_2$.
        *   Joint 1 is revolute about the z-axis at the base.
        *   Joint 2 is revolute about the z-axis at the end of link 1.

        **Coordinate Frames:**
        *   **Frame {0}:** Origin at the base. $z_0$ points upwards (axis of rotation of joint 1). $x_0$ points along the initial direction of link 1.
        *   **Frame {1}:** Origin at the center of joint 2. $z_1$ points upwards (axis of rotation of joint 2, parallel to $z_0$). $x_1$ points along the direction of link 2.
        *   **Frame {2}:** Origin at the end-effector. $z_2$ points upwards (parallel to $z_1$). $x_2$ points along the end-effector's direction.

        **D-H Table (parameters $a_i, \alpha_i, d_i, \theta_i$ for transformation ${^{i-1}}A_i$):**

        | Link $i$ | $a_i$ | $\alpha_i$ | $d_i$ | $\theta_i$ | Joint Type |
        | :------- | :---- | :--------- | :---- | :--------- | :--------- |
        | 1        | $L_1$ | 0          | 0     | $\theta_1$ | Revolute   |
        | 2        | $L_2$ | 0          | 0     | $\theta_2$ | Revolute   |

        **Explanation:**
        *   **For Link 1 (Transform ${^0}A_1$):**
            *   $z_0$: Axis of joint 1.
            *   $z_1$: Axis of joint 2 (parallel to $z_0$).
            *   Common normal $x_1$: Perpendicular to $z_0$ and $z_1$. Since they are parallel, we choose $x_1$ to point along link 1. The origin of frame {1} is at the center of joint 2.
            *   $a_1$: Distance along $x_1$ from the intersection of $x_1$ and $z_0$ to the origin of {1}. This is the length of link 1, $L_1$.
            *   $\alpha_1$: Angle about $x_1$ between $z_0$ and $z_1$. Since $z_0$ and $z_1$ are parallel, $\alpha_1 = 0$.
            *   $d_1$: Distance along $z_0$ from the intersection of $z_0$ and $x_1$ to the origin of {1}. Since $z_0$ and $x_1$ intersect at the base origin (origin of {0}), and the origin of {1} is not on $z_0$ (it's at the end of link 1), $d_1=0$ in this specific setup where the origin of {1} is displaced by $a_1$ along $x_1$. (This is a common convention for planar arms).
            *   $\theta_1$: Angle about $z_0$ from $x_0$ to $x_1$. This is the first joint variable, $\theta_1$.

        *   **For Link 2 (Transform ${^1}A_2$):**
            *   $z_1$: Axis of joint 2.
            *   $z_2$: Axis of the end-effector (parallel to $z_1$).
            *   Common normal $x_2$: Perpendicular to $z_1$ and $z_2$. We choose $x_2$ to point along link 2.
            *   $a_2$: Distance along $x_2$ from the intersection of $x_2$ and $z_1$ to the origin of {2}. This is the length of link 2, $L_2$.
            *   $\alpha_2$: Angle about $x_2$ between $z_1$ and $z_2$. Since $z_1$ and $z_2$ are parallel, $\alpha_2 = 0$.
            *   $d_2$: Distance along $z_1$ from the intersection of $z_1$ and $x_2$ to the origin of {2}. Since they intersect at the origin of {1}, and the origin of {2} is displaced by $a_2$ along $x_2$, $d_2=0$.
            *   $\theta_2$: Angle about $z_1$ from $x_1$ to $x_2$. This is the second joint variable, $\theta_2$.

        **D-H Matrices:**

        *   **$A_1 = {^0}A_1$**:
            $a_1 = L_1$, $\alpha_1 = 0$, $d_1 = 0$, $\theta_1 = \theta_1$
            $A_1 = \begin{bmatrix} \cos \theta_1 & -\sin \theta_1 & 0 & L_1 \cos \theta_1 \\ \sin \theta_1 & \cos \theta_1 & 0 & L_1 \sin \theta_1 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

        *   **$A_2 = {^1}A_2$**:
            $a_2 = L_2$, $\alpha_2 = 0$, $d_2 = 0$, $\theta_2 = \theta_2$
            $A_2 = \begin{bmatrix} \cos \theta_2 & -\sin \theta_2 & 0 & L_2 \cos \theta_2 \\ \sin \theta_2 & \cos \theta_2 & 0 & L_2 \sin \theta_2 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

4.  **Overall Transformation ($T_{0 \rightarrow 2}$):**

    $T_{0 \rightarrow 2} = A_1 \cdot A_2$

    $T_{0 \rightarrow 2} = \begin{bmatrix} \cos \theta_1 & -\sin \theta_1 & 0 & L_1 \cos \theta_1 \\ \sin \theta_1 & \cos \theta_1 & 0 & L_1 \sin \theta_1 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} \cos \theta_2 & -\sin \theta_2 & 0 & L_2 \cos \theta_2 \\ \sin \theta_2 & \cos \theta_2 & 0 & L_2 \sin \theta_2 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

    Performing the matrix multiplication:

    $T_{0 \rightarrow 2} = \begin{bmatrix}
    \cos\theta_1\cos\theta_2 - \sin\theta_1\sin\theta_2 & -\cos\theta_1\sin\theta_2 - \sin\theta_1\cos\theta_2 & 0 & L_1\cos\theta_1 + L_2\cos(\theta_1+\theta_2) \\
    \sin\theta_1\cos\theta_2 + \cos\theta_1\sin\theta_2 & \sin\theta_1\sin\theta_2 + \cos\theta_1\cos\theta_2 & 0 & L_1\sin\theta_1 + L_2\sin(\theta_1+\theta_2) \\
    0 & 0 & 1 & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix}$

    Using trigonometric identities ($\cos(A+B) = \cos A \cos B - \sin A \sin B$, $\sin(A+B) = \sin A \cos B + \cos A \sin B$):

    $T_{0 \rightarrow 2} = \begin{bmatrix}
    \cos(\theta_1+\theta_2) & -\sin(\theta_1+\theta_2) & 0 & L_1\cos\theta_1 + L_2\cos(\theta_1+\theta_2) \\
    \sin(\theta_1+\theta_2) & \cos(\theta_1+\theta_2) & 0 & L_1\sin\theta_1 + L_2\sin(\theta_1+\theta_2) \\
    0 & 0 & 1 & 0 \\
    0 & 0 & 0 & 1
    \end{bmatrix}$

    From this matrix, we can extract the end-effector's position ($p_x, p_y, p_z$):
    *   $p_x = L_1 \cos\theta_1 + L_2 \cos(\theta_1+\theta_2)$
    *   $p_y = L_1 \sin\theta_1 + L_2 \sin(\theta_1+\theta_2)$
    *   $p_z = 0$ (as it's a planar arm)

    The 3x3 rotation part:
    $R_{0 \rightarrow 2} = \begin{bmatrix} \cos(\theta_1+\theta_2) & -\sin(\theta_1+\theta_2) & 0 \\ \sin(\theta_1+\theta_2) & \cos(\theta_1+\theta_2) & 0 \\ 0 & 0 & 1 \end{bmatrix}$
    This indicates the orientation of the end-effector is determined by the sum of the joint angles.

## 8. Modified D-H Convention

It's important to note that variations of the D-H convention exist, notably the "Modified Denavit-Hartenberg" (MDH) convention. The key difference lies in how the coordinate frames are assigned and the order of transformations.

*   **Standard D-H (Craig's convention):**
    *   $z_i$ along the axis of joint $i+1$.
    *   $x_i$ is the common normal between $z_{i-1}$ and $z_i$.
    *   Order of transformations for ${^{i-1}}A_i$: Rotate $z_{i-1}$ by $\theta_i$, translate $z_{i-1}$ by $d_i$, translate $x_i$ by $a_i$, rotate $x_i$ by $\alpha_i$.

*   **Modified D-H (MDH):**
    *   $z_i$ along the axis of joint $i$.
    *   $x_i$ is the common normal between $z_i$ and $z_{i+1}$.
    *   The parameters and transformation matrix are defined differently.

**Why is this important?** The choice of convention affects the D-H parameters and the resulting transformation matrices. If you are working with a robot that has published D-H parameters, it's crucial to know which convention was used. Most modern robotics literature and software (like ROS) tend to use the **Modified D-H convention**.

**Key Point:** When learning or applying D-H, **always clarify which convention you are using**. For this module, we will primarily focus on the standard D-H convention as presented in Schilling and Craig's textbooks, but be aware of MDH.

## 9. Advantages and Limitations of D-H

**Advantages:**

*   **Systematic:** Provides a structured way to define robot kinematics.
*   **Compact Representation:** Reduces complex 3D transformations to a set of four parameters per link.
*   **Ease of Programming:** The D-H parameters can be directly plugged into algorithms for forward kinematics.
*   **Foundation for Inverse Kinematics:** While D-H primarily facilitates forward kinematics, the defined frames and parameters are foundational for inverse kinematics as well.
*   **Compatibility:** Widely adopted in robotics research and industry.

**Limitations:**

*   **Frame Assignment Ambiguity:** In some cases, the choice of common normal (when $z_{i-1}$ and $z_i$ are not skew and not parallel) is not unique, leading to potential variations in parameters.
*   **Link Coordinate Frame Choices:** The choice of where to place the origin and the orientation of the $x_i$ axis can sometimes be non-intuitive or depend on specific robot geometries.
*   **Not Always Intuitive:** For highly complex or unusual robot structures, deriving the D-H parameters can still be challenging.
*   **Order of Transformations:** Different authors might present slightly different orders of basic transformations that result in different parameter definitions but ultimately represent the same geometric relationship. It's crucial to stick to one convention.

## 10. Relation to Course Outcomes

*   **CO2: Obtain forward and inverse kinematic models of robotic manipulators (Knowledge Level: K3)**
    *   The D-H representation directly provides the methodology for deriving forward kinematic models by constructing and multiplying transformation matrices. Understanding D-H parameters is the first step towards this outcome.

## 11. Important Points to Remember

*   **The four D-H parameters ($a_i, \alpha_i, d_i, \theta_i$) define the transformation from frame $i-1$ to frame $i$.**
*   **The order of transformations used to construct the ${^{i-1}}A_i$ matrix is crucial.** The standard order is $\text{Rot}(z, \theta_i) \cdot \text{Trans}(z, d_i) \cdot \text{Trans}(x, a_i) \cdot \text{Rot}(x, \alpha_i)$.
*   **$d_i$ is the joint variable for prismatic joints, and $\theta_i$ is the joint variable for revolute joints.**
*   **The overall forward kinematics is the product of individual link transformations: $T_{0 \rightarrow n} = {^0}A_1 \cdot {^1}A_2 \cdots {^{n-1}}A_n$.**
*   **Be aware of different D-H conventions (Standard vs. Modified).**
*   **Careful assignment of coordinate frames based on the rules is essential for correct parameter derivation.**

## 12. Practice Questions and Exercises

**Question 1:**
Define the four Denavit-Hartenberg (D-H) parameters. What is the purpose of each parameter in describing the relationship between consecutive link coordinate frames?

**Answer 1:**
The four D-H parameters are:
*   **$a_i$ (Link Length):** The distance between the common normal of the $z_{i-1}$ and $z_i$ axes, measured along the $x_i$ axis. It represents a translation along the $x_i$ axis.
*   **$\alpha_i$ (Link Twist):** The angle between the $z_{i-1}$ and $z_i$ axes, measured about the common normal ($x_i$) axis. It represents a rotation about the $x_i$ axis.
*   **$d_i$ (Link Offset):** The distance between the common normal of the $z_{i-1}$ and $z_i$ axes, measured along the $z_{i-1}$ axis. It represents a translation along the $z_{i-1}$ axis. This is the joint variable for prismatic joints.
*   **$\theta_i$ (Joint Angle):** The angle between the $x_{i-1}$ and $x_i$ axes, measured about the $z_{i-1}$ axis. It represents a rotation about the $z_{i-1}$ axis. This is the joint variable for revolute joints.

**Question 2:**
Consider a simple 3-DOF articulated robot arm. If the Denavit-Hartenberg parameters for the links are given as follows:

| Link $i$ | $a_i$ | $\alpha_i$ | $d_i$ | $\theta_i$ | Joint Type |
| :------- | :---- | :--------- | :---- | :--------- | :--------- |
| 1        | 0     | $\pi/2$    | 0.5   | $\theta_1$ | Revolute   |
| 2        | 0.4   | 0          | 0     | $\theta_2$ | Revolute   |
| 3        | 0     | 0          | 0.3   | $\theta_3$ | Revolute   |

Derive the D-H transformation matrix ${^2}A_3$.

**Answer 2:**
We need to find the transformation matrix from frame {3} to frame {2}, which is ${^2}A_3$.
From the D-H table for link 3:
$a_3 = 0$
$\alpha_3 = 0$
$d_3 = 0.3$
$\theta_3 = \theta_3$

The standard D-H transformation matrix is:
$A_i = \begin{bmatrix} \cos \theta_i & -\sin \theta_i \cos \alpha_i & \sin \theta_i \sin \alpha_i & a_i \cos \theta_i \\ \sin \theta_i & \cos \theta_i \cos \alpha_i & -\cos \theta_i \sin \alpha_i & a_i \sin \theta_i \\ 0 & \sin \alpha_i & \cos \alpha_i & d_i \\ 0 & 0 & 0 & 1 \end{bmatrix}$

Substituting the values for link 3:
$a_3 = 0$, $\alpha_3 = 0$, $d_3 = 0.3$, $\theta_3 = \theta_3$

Since $\alpha_3 = 0$, $\cos \alpha_3 = 1$ and $\sin \alpha_3 = 0$.
Since $a_3 = 0$, terms multiplied by $a_3$ will be zero.

${^2}A_3 = \begin{bmatrix}
\cos \theta_3 & -\sin \theta_3 \cos 0 & \sin \theta_3 \sin 0 & 0 \cos \theta_3 \\
\sin \theta_3 & \cos \theta_3 \cos 0 & -\cos \theta_3 \sin 0 & 0 \sin \theta_3 \\
0 & \sin 0 & \cos 0 & 0.3 \\
0 & 0 & 0 & 1
\end{bmatrix}$

${^2}A_3 = \begin{bmatrix}
\cos \theta_3 & -\sin \theta_3 & 0 & 0 \\
\sin \theta_3 & \cos \theta_3 & 0 & 0 \\
0 & 0 & 1 & 0.3 \\
0 & 0 & 0 & 1
\end{bmatrix}$

This matrix represents a rotation about $z_3$ by $\theta_3$, followed by a translation of $0.3$ along $z_3$.

**Question 3:**
For the 2-DOF planar manipulator analyzed in the notes, what is the position of the end-effector if $L_1 = 1.0$ m, $L_2 = 0.8$ m, $\theta_1 = 30^\circ$, and $\theta_2 = 45^\circ$?

**Answer 3:**
Using the derived forward kinematics equations for the 2-DOF planar arm:
$p_x = L_1 \cos\theta_1 + L_2 \cos(\theta_1+\theta_2)$
$p_y = L_1 \sin\theta_1 + L_2 \sin(\theta_1+\theta_2)$

Given values:
$L_1 = 1.0$ m
$L_2 = 0.8$ m
$\theta_1 = 30^\circ$ ($\pi/6$ radians)
$\theta_2 = 45^\circ$ ($\pi/4$ radians)
$\theta_1 + \theta_2 = 30^\circ + 45^\circ = 75^\circ$ ($5\pi/12$ radians)

Calculations:
$\cos(30^\circ) = \sqrt{3}/2 \approx 0.866$
$\sin(30^\circ) = 1/2 = 0.5$
$\cos(75^\circ) = \cos(45^\circ+30^\circ) = \cos 45^\circ \cos 30^\circ - \sin 45^\circ \sin 30^\circ = (\sqrt{2}/2)(\sqrt{3}/2) - (\sqrt{2}/2)(1/2) = (\sqrt{6}-\sqrt{2})/4 \approx 0.259$
$\sin(75^\circ) = \sin(45^\circ+30^\circ) = \sin 45^\circ \cos 30^\circ + \cos 45^\circ \sin 30^\circ = (\sqrt{2}/2)(\sqrt{3}/2) + (\sqrt{2}/2)(1/2) = (\sqrt{6}+\sqrt{2})/4 \approx 0.966$

$p_x = 1.0 \cdot \cos(30^\circ) + 0.8 \cdot \cos(75^\circ)$
$p_x \approx 1.0 \cdot 0.866 + 0.8 \cdot 0.259$
$p_x \approx 0.866 + 0.2072$
$p_x \approx 1.0732$ meters

$p_y = 1.0 \cdot \sin(30^\circ) + 0.8 \cdot \sin(75^\circ)$
$p_y \approx 1.0 \cdot 0.5 + 0.8 \cdot 0.966$
$p_y \approx 0.5 + 0.7728$
$p_y \approx 1.2728$ meters

The position of the end-effector is approximately (1.0732, 1.2728, 0) meters.

---

**Textbook References:**

*   **Schilling, Robert. J. (1996). *Fundamentals of Robotics – Analysis and Control*. Prentice Hall of India.** - This book provides a solid foundation on the D-H convention, including the derivation of transformation matrices and their application to forward kinematics.
*   **Craig, John. J. (2002). *Introduction to Robotics (Mechanics and Control)*. Pearson Education Asia.** - Craig is a seminal text in robotics. It thoroughly explains the D-H convention, the parameter assignment rules, and the construction of the homogeneous transformation matrices. It also discusses the importance of consistency in convention.
*   **Saha, S K. *Introduction to Robotics*. McGraw Hill Education.** - Likely covers the standard D-H representation and its use in kinematic analysis.
*   **Mittal, R K. (2003). *Robotics and Control*. Tata McGraw Hill.** - Another resource that would detail the D-H methodology for forward kinematics.
*   **Ghosal, Ashitava. *Robotics-Fundamental concepts and analysis*. Oxford University Press.** - Expect a clear explanation of D-H as a fundamental tool for robot modeling.
*   **Deb, S. R. *Robotics Technology and Flexible Automation*. Second Edition.** - Should offer practical insights into D-H for manipulator modeling.

**Key takeaway from references:** The core D-H convention and its application to generating transformation matrices for forward kinematics are consistent across these foundational robotics textbooks, with Craig and Schilling being particularly detailed. The primary variations arise in the precise geometric interpretation or the introduction of modified conventions.

---
This set of notes covers the fundamental aspects of the Denavit-Hartenberg representation, aligning with the learning outcomes and course objectives for direct kinematics in robotics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
