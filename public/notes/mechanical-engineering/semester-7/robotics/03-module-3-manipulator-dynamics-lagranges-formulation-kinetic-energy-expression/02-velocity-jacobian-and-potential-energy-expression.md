---
title: "velocity Jacobian and Potential Energy expression"
subject: "ROBOTICS"
module: "Module 3: Manipulator Dynamics: Lagrange’s formulation – Kinetic Energy expression"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464250"
status: "completed"
scrapedAt: "2026-05-20T18:18:46.688Z"
---
# Robotics: Module 3 - Manipulator Dynamics

## Topic: Velocity Jacobian and Potential Energy Expression

This module delves into the dynamics of robotic manipulators, focusing on the mathematical tools required to describe their motion and energy. We will explore the **Velocity Jacobian** and the **Potential Energy Expression**, crucial components in understanding manipulator behavior.

### Learning Outcomes Covered:

*   **Understanding the role of velocity in manipulator dynamics:** How joint velocities translate to end-effector velocities.
*   **Deriving the potential energy of a manipulator:** Analyzing the gravitational forces acting on the robot links.
*   **Relating potential energy to forces and torques:** Understanding how gravity influences the control of the manipulator.
*   **Applying these concepts within the framework of Lagrange's formulation:** Building a foundation for more advanced dynamic modeling.

### Course Outcomes Alignment:

*   **CO4: Develop a dynamic model and design the controller for robotic manipulators (Knowledge Level: K4, K6)**
    *   The Velocity Jacobian is fundamental for understanding manipulator dynamics, particularly in the context of control, as it relates joint velocities to end-effector velocities, which are often the desired outcomes for control.
    *   The Potential Energy expression is a core component of deriving the dynamic model using Lagrangian mechanics. Understanding potential energy is essential for calculating kinetic energy and ultimately the equations of motion.

---

### 1. Velocity Jacobian

The Velocity Jacobian is a fundamental concept in robotics that relates the **joint velocities** of a robotic manipulator to the **linear and angular velocities** of its end-effector (or any other point of interest on the robot). It is a critical tool for understanding the instantaneous motion capabilities of the robot.

#### 1.1 Definition and Purpose

*   **Definition:** The Velocity Jacobian, denoted by $J_v$, is a matrix that maps the vector of joint velocities $(\dot{\theta}_1, \dot{\theta}_2, ..., \dot{\theta}_n)^T$ to the vector of end-effector velocities $(v, \omega)^T$. Here, $v$ is the linear velocity and $\omega$ is the angular velocity of the end-effector in a chosen coordinate frame (typically the base frame).

*   **Purpose:**
    *   To transform joint space velocities to task space (Cartesian space) velocities.
    *   To understand the instantaneous mapping between joint motion and end-effector motion.
    *   Essential for control, particularly in velocity control and singularity analysis.

#### 1.2 Mathematical Formulation

Consider a manipulator with $n$ degrees of freedom (DOF). Let the joint variables be $\theta_1, \theta_2, ..., \theta_n$. The end-effector's position and orientation can be described by a pose vector in task space.

The relationship between the end-effector's generalized velocity $\dot{x}$ and the joint velocities $\dot{\theta}$ is given by:

$\dot{x} = J_v(\theta) \dot{\theta}$

Where:
*   $\dot{x}$ is the vector of end-effector velocities (typically 6 components: 3 linear, 3 angular).
*   $J_v(\theta)$ is the $6 \times n$ Velocity Jacobian matrix, which is a function of the current joint configuration $\theta$.
*   $\dot{\theta}$ is the vector of joint velocities $(\dot{\theta}_1, \dot{\theta}_2, ..., \dot{\theta}_n)^T$.

**Derivation of the Velocity Jacobian (Conceptual):**

The Velocity Jacobian can be derived by considering the contribution of each joint velocity to the end-effector's velocity. For each link $i$:

*   The linear velocity of a point on link $i$ is affected by the joint variables and velocities of joints $1$ through $i$.
*   The angular velocity of link $i$ is affected by the joint variables and velocities of joints $1$ through $i$.

The end-effector's velocity is the sum of the velocities of all links up to the end-effector. This summation process, often using screw theory or kinematic relationships, results in the Jacobian matrix.

**Textbook Reference:**
*   **Schilling (1996):** Often discusses Jacobian in the context of kinematic transformations and velocity relationships.
*   **Craig (2002):** Provides a thorough derivation of the Jacobian and its use in relating joint velocities to end-effector velocities.
*   **Ghosal (2001):** Explains the Jacobian from a geometric and kinematic perspective.

#### 1.3 Structure of the Velocity Jacobian

The Velocity Jacobian $J_v$ is typically partitioned into linear and angular components:

$J_v = \begin{bmatrix} J_v^{linear} \\ J_v^{angular} \end{bmatrix}$

Where:
*   $J_v^{linear}$ is a $3 \times n$ matrix representing the contribution of joint velocities to the end-effector's linear velocity.
*   $J_v^{angular}$ is a $3 \times n$ matrix representing the contribution of joint velocities to the end-effector's angular velocity.

Each column of the Jacobian relates the velocity of a specific joint to the end-effector's velocity. For the $i$-th column, representing joint $i$:

*   The $i$-th column of $J_v^{linear}$ is determined by the direction of the joint's axis of motion and the position vector from the base frame to the end-effector if joint $i$ is prismatic. If joint $i$ is revolute, it's related to the cross product of the joint axis and the vector from the joint to the end-effector.
*   The $i$-th column of $J_v^{angular}$ is simply the direction of the axis of rotation for revolute joints.

#### 1.4 Example: A Simple 2-DOF Planar Manipulator

Consider a 2-DOF planar manipulator with two revolute joints (link lengths $l_1$, $l_2$ and joint angles $\theta_1$, $\theta_2$). Let the end-effector be at the tip of the second link.

The end-effector's position in Cartesian coordinates $(x, y)$ is:
$x = l_1 \cos(\theta_1) + l_2 \cos(\theta_1 + \theta_2)$
$y = l_1 \sin(\theta_1) + l_2 \sin(\theta_1 + \theta_2)$

The end-effector's velocity $(\dot{x}, \dot{y})$ is found by differentiating the position with respect to time:
$\dot{x} = -l_1 \sin(\theta_1)\dot{\theta}_1 - l_2 \sin(\theta_1 + \theta_2)(\dot{\theta}_1 + \dot{\theta}_2)$
$\dot{y} = l_1 \cos(\theta_1)\dot{\theta}_1 + l_2 \cos(\theta_1 + \theta_2)(\dot{\theta}_1 + \dot{\theta}_2)$

We can rewrite these in matrix form:
$\begin{bmatrix} \dot{x} \\ \dot{y} \end{bmatrix} = \begin{bmatrix} -l_1 \sin(\theta_1) - l_2 \sin(\theta_1 + \theta_2) & -l_2 \sin(\theta_1 + \theta_2) \\ l_1 \cos(\theta_1) + l_2 \cos(\theta_1 + \theta_2) & l_2 \cos(\theta_1 + \theta_2) \end{bmatrix} \begin{bmatrix} \dot{\theta}_1 \\ \dot{\theta}_2 \end{bmatrix}$

For this 2D case, the end-effector velocity is just linear, and we can represent it as a 3D vector with zero angular velocity (or consider it a 2D velocity vector). The Jacobian $J_v$ (for the linear velocity part) is:

$J_v(\theta) = \begin{bmatrix} -l_1 \sin(\theta_1) - l_2 \sin(\theta_1 + \theta_2) & -l_2 \sin(\theta_1 + \theta_2) \\ l_1 \cos(\theta_1) + l_2 \cos(\theta_1 + \theta_2) & l_2 \cos(\theta_1 + \theta_2) \end{bmatrix}$

In a 3D scenario, we would also have a $3 \times n$ angular velocity Jacobian, which for this planar manipulator with revolute joints would be:

$J_v^{angular}(\theta) = \begin{bmatrix} 0 & 0 \\ 0 & 0 \\ 1 & 1 \end{bmatrix}$ (assuming joint axes are along the z-axis)

The full $6 \times n$ Jacobian for this planar manipulator would be:

$J_v(\theta) = \begin{bmatrix} -l_1 \sin(\theta_1) - l_2 \sin(\theta_1 + \theta_2) & -l_2 \sin(\theta_1 + \theta_2) \\ l_1 \cos(\theta_1) + l_2 \cos(\theta_1 + \theta_2) & l_2 \cos(\theta_1 + \theta_2) \\ 0 & 0 \\ 0 & 0 \\ 0 & 0 \\ 1 & 1 \end{bmatrix}$

#### 1.5 Singularities

*   **Definition:** Singularities are configurations of the manipulator where the Velocity Jacobian loses its full rank. This means that at these configurations, the manipulator loses some degrees of freedom in its task space motion, or the mapping from joint velocities to end-effector velocities becomes ambiguous.

*   **Consequences:**
    *   **Loss of Dexterity:** The robot cannot move instantaneously in certain directions in its task space.
    *   **Infinite Joint Velocities:** To achieve a finite end-effector velocity in a singular direction might require infinite joint velocities, which is physically impossible.
    *   **Control Challenges:** It becomes difficult to control the end-effector's position and orientation accurately near singularities.

*   **Detection:** Singularities occur when the determinant of the square submatrix of the Jacobian corresponding to the rank-deficient part is zero. For redundant manipulators (more DOF than task space dimensions), the pseudoinverse is used, and singularities relate to the condition number of the Jacobian.

#### 1.6 Important Points to Remember

*   The Velocity Jacobian is configuration-dependent.
*   It's a linear mapping between joint velocities and end-effector velocities.
*   It's crucial for velocity control, path planning, and singularity analysis.
*   The number of columns equals the number of joints ($n$).
*   The number of rows typically equals the dimension of the task space (e.g., 6 for 3D pose).

---

### 2. Potential Energy Expression

The Potential Energy expression for a robotic manipulator, particularly due to gravity, is a fundamental component in deriving its dynamic model using Lagrangian mechanics. It quantifies the energy stored in the system by virtue of the gravitational forces acting on its links.

#### 2.1 Definition and Purpose

*   **Definition:** Potential energy ($U$) is the energy possessed by an object or system due to its position in a force field. For robotic manipulators, the primary source of potential energy is gravity.

*   **Purpose:**
    *   To calculate the gravitational forces/torques acting on the manipulator.
    *   A key component in the Lagrangian formulation: $L = T - U$, where $T$ is kinetic energy.
    *   Understanding how gravity affects the manipulator's motion and control.

#### 2.2 Gravitational Potential Energy

We typically define a reference point for zero potential energy. For manipulators, it's common to set the potential energy to zero at the base frame's z-coordinate or at a specific height.

The gravitational potential energy of a rigid body with mass $m$ and center of mass located at a height $z_{com}$ is given by:

$U = m \cdot g \cdot z_{com}$

Where:
*   $m$ is the mass of the link.
*   $g$ is the acceleration due to gravity (approximately $9.81 \, m/s^2$).
*   $z_{com}$ is the vertical height of the link's center of mass above the chosen reference plane.

#### 2.3 Deriving the Potential Energy for a Manipulator

To find the total potential energy of a manipulator, we sum the potential energies of each individual link. This requires determining the position of the center of mass (CoM) of each link in the base frame.

**Steps:**

1.  **Define Link Properties:** For each link $i$, we need its mass ($m_i$), the position of its center of mass relative to its own coordinate frame ($^{i}p_{com,i}$), and the transformation from the link's coordinate frame to the base frame ($T_{0i}$).

2.  **Determine CoM Position in Base Frame:** The position vector of the center of mass of link $i$ in the base frame ($^{0}p_{com,i}$) can be found using the homogeneous transformation matrix $T_{0i}$:
    $^{0}p_{com,i} = T_{0i} \cdot (^{i}p_{com,i} + \begin{bmatrix} 0 & 0 & 0 & 1 \end{bmatrix}^T )_{4 \times 1}$
    Where $^{i}p_{com,i}$ is typically represented as $\begin{bmatrix} x_{i,com} & y_{i,com} & z_{i,com} & 1 \end{bmatrix}^T$ in link $i$'s frame, but we only care about the translation part for calculating potential energy. The position vector is then the first three components of the resulting homogeneous vector:
    $^{0}p_{com,i} = \begin{bmatrix} x_{com,i} \\ y_{com,i} \\ z_{com,i} \end{bmatrix}$

3.  **Calculate Potential Energy of Each Link:** Assuming the reference potential energy is zero at $z=0$ in the base frame:
    $U_i = m_i \cdot g \cdot z_{com,i}$

4.  **Sum for Total Potential Energy:** The total potential energy of the manipulator is the sum of the potential energies of all links:
    $U_{total} = \sum_{i=1}^{n} U_i = \sum_{i=1}^{n} m_i \cdot g \cdot z_{com,i}$

#### 2.4 Example: A Simple 2-DOF Planar Manipulator (Revisited)

Consider the same 2-DOF planar manipulator with link lengths $l_1, l_2$, masses $m_1, m_2$, and centers of mass at $(^{1}p_{com,1})$, $(^{2}p_{com,2})$ in their respective link frames. Assume joint axes are along the z-axis and the base frame is at joint 1.

**Link 1:**
*   Mass: $m_1$
*   CoM in frame 1: $^{1}p_{com,1} = \begin{bmatrix} x_{1,com} \\ y_{1,com} \\ 0 \end{bmatrix}$ (assuming CoM is in the xy-plane of link 1)
*   Transformation $T_{01}$:
    $T_{01} = \begin{bmatrix} \cos(\theta_1) & -\sin(\theta_1) & 0 & 0 \\ \sin(\theta_1) & \cos(\theta_1) & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$ (assuming the origin of frame 1 is at joint 1)

    To simplify for potential energy, let's assume the CoM of link 1 is at $(x_{1,com}, y_{1,com})$ in its frame, and the link frame origin is at the joint. We often simplify by placing the CoM at the midpoint of the link, and assuming the link lies along the x-axis of its frame.
    Let link 1 have length $l_1$, CoM at $(l_1/2, 0, 0)$ in frame 1.
    $^{1}p_{com,1} = \begin{bmatrix} l_1/2 \\ 0 \\ 0 \end{bmatrix}$

    $^{0}p_{com,1} = T_{01} \begin{bmatrix} l_1/2 \\ 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} \cos(\theta_1) & -\sin(\theta_1) & 0 & 0 \\ \sin(\theta_1) & \cos(\theta_1) & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} l_1/2 \\ 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} (l_1/2) \cos(\theta_1) \\ (l_1/2) \sin(\theta_1) \\ 0 \\ 1 \end{bmatrix}$

    The $z$-coordinate of CoM of link 1 is $z_{com,1} = 0$.
    $U_1 = m_1 \cdot g \cdot 0 = 0$.
    This is if the base frame's z-axis is horizontal. If the base frame itself is tilted, $z_{com,1}$ would depend on the tilt. For typical robot arms, we consider the base to be stationary.

    **Let's redefine for clarity:** Let the base frame be at the origin. Let the first joint be at the origin. Link 1 extends from joint 1. Let frame 1 be attached to link 1, with origin at joint 2. CoM of link 1 is at $(x_{1,com}, y_{1,com}, z_{1,com})$ in the base frame.
    Let's assume links are in the XY plane and gravity acts along the negative Z axis.
    The CoM of link 1 is at a distance $r_{1,com}$ from joint 1, at an angle $\theta_1$.
    $x_{com,1} = r_{1,com} \cos(\theta_1)$
    $y_{com,1} = r_{1,com} \sin(\theta_1)$
    $z_{com,1} = 0$ (if link 1 is in the XY plane, and base frame z is perpendicular to it)

    However, when talking about potential energy, $z_{com}$ is the height in the direction of gravity.
    If gravity is along $-z$: $U = m \cdot g \cdot z_{com}$.
    If CoM of link 1 is at $(r_{1,com} \cos(\theta_1), r_{1,com} \sin(\theta_1), 0)$ relative to the base frame origin (assuming it's in the XY plane), and gravity is along $-z$, then $z_{com,1} = 0$. This doesn't seem right.

    **Correct Approach for Potential Energy:**
    Assume gravity acts in the $-z$ direction. The potential energy of a mass $m$ at position $(x, y, z)$ is $U = m g z$. We need the $z$-coordinate of the CoM of each link in the base frame.

    **Let's use the structure from Craig (2002) or similar:**
    Consider link $i$ with mass $m_i$ and CoM position vector $p_{com,i}$ in its own frame.
    The transformation from link $i$ frame to base frame is $T_{0i}$.
    The CoM position vector in the base frame is:
    $^{0}p_{com,i} = T_{0i} \cdot (^{i}p_{com,i})$ (where $^{i}p_{com,i}$ is a 3D vector here for simplicity).

    Let's consider the $z$-component of $^{0}p_{com,i}$:
    $z_{com,i} = (T_{0i})_{3,1} \cdot x_{com,i} + (T_{0i})_{3,2} \cdot y_{com,i} + (T_{0i})_{3,3} \cdot z_{com,i}$
    (using the 3x3 rotation part of $T_{0i}$ and the CoM coordinates in the link frame).

    Let's assume a typical manipulator configuration where links are in the XY plane, and gravity acts downwards (along the negative Z axis).
    *   **Link 1:** CoM is at $(x_{1,com}, y_{1,com}, 0)$ in its own frame. Link 1's frame is rotated by $\theta_1$ relative to the base frame.
        $T_{01} = \begin{bmatrix} \cos(\theta_1) & -\sin(\theta_1) & 0 \\ \sin(\theta_1) & \cos(\theta_1) & 0 \\ 0 & 0 & 1 \end{bmatrix}$ (3x3 rotation part)
        Let's assume CoM of link 1 is at $(l_1/2, 0, 0)$ in frame 1 (mid-link, along the link's x-axis).
        $x_{com,1} = l_1/2$, $y_{com,1} = 0$, $z_{com,1} = 0$.
        $z_{com,1}^{base} = (\cos(\theta_1))(l_1/2) + (-\sin(\theta_1))(0) + (0)(0) = (l_1/2)\cos(\theta_1)$.
        This assumes gravity is NOT along the Z-axis, but along the negative X-axis.

    **Let's be consistent with standard convention:**
    Gravity is along the negative Z-axis ($g = [0, 0, -g]^T$ or $g = 9.81$). Potential energy is $U = m \vec{g} \cdot \vec{p}_{com}$.
    The position of CoM of link $i$ in base frame is $\mathbf{p}_{com,i} = \mathbf{R}_{0i} \mathbf{p}_{com,i}^{link} + \mathbf{d}_{0i}$.
    In our case, for a simple arm without offsets, $\mathbf{d}_{0i}$ might be zero for joint 1, and the position of joint $j$ for link $i>1$.
    Let's assume the base frame is at the origin, and the first joint axis is at the origin.
    Let the $i$-th link's coordinate frame have its origin at the $(i)$-th joint.
    The position of the CoM of link $i$ in the base frame is:
    $^{0}\mathbf{p}_{com,i} = \mathbf{p}_{joint,i} + \mathbf{R}_{0i} \mathbf{p}_{com,i}^{link}$.

    Let's consider the *height* $z_{com,i}$ in the base frame.
    For Link 1: Joint 1 is at $(0,0,0)$. Link 1 has length $l_1$. CoM at $l_1/2$ along its x-axis. Frame 1 x-axis aligned with link 1.
    $T_{01} = \begin{bmatrix} \cos(\theta_1) & -\sin(\theta_1) & 0 & 0 \\ \sin(\theta_1) & \cos(\theta_1) & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$
    $^{1}\mathbf{p}_{com,1} = \begin{bmatrix} l_1/2 \\ 0 \\ 0 \end{bmatrix}$ (Assuming CoM is at the midpoint of link 1, along its length).
    $^{0}\mathbf{p}_{com,1} = \begin{bmatrix} (l_1/2)\cos(\theta_1) \\ (l_1/2)\sin(\theta_1) \\ 0 \end{bmatrix}$
    The $z$-component is $z_{com,1} = 0$.
    $U_1 = m_1 g (0) = 0$.

    **This still feels wrong if gravity is along Z.** The potential energy should change with joint angles.
    The mistake is in assuming the link is perfectly horizontal. If the link is a physical object, its CoM has a height.
    Let's consider the links are oriented along the robot's axes.
    For link $i$, let its center of mass be at $(x_{i,com}, y_{i,com}, z_{i,com})$ in its own coordinate frame $i$.
    The homogeneous transformation from frame $i$ to base frame 0 is $T_{0i}$.
    The CoM position in base frame is $^{0}\mathbf{p}_{com,i} = T_{0i} \cdot (^{i}\mathbf{p}_{com,i})$.
    The $z$-component of $^{0}\mathbf{p}_{com,i}$ is $z_{com,i}^{base}$.
    $U_i = m_i g z_{com,i}^{base}$.

    **Example from Craig (2002), Chapter 6 (Dynamics):**
    Consider a 2-DOF planar arm. Joint 1 at origin. Link 1 has length $L_1$, mass $m_1$, CoM at $(L_1/2, 0, 0)$ in its frame. Link 2 has length $L_2$, mass $m_2$, CoM at $(L_2/2, 0, 0)$ in its frame.
    Gravity acts along the negative Z-axis.
    Frame 0: Base frame at origin.
    Frame 1: Attached to link 1, origin at joint 2. Z-axis out of plane. X-axis along link 1.
    Frame 2: Attached to link 2, origin at end-effector. Z-axis out of plane. X-axis along link 2.

    $T_{01}$ transforms from frame 1 to frame 0.
    $T_{01} = \begin{bmatrix} \cos(\theta_1) & -\sin(\theta_1) & 0 & 0 \\ \sin(\theta_1) & \cos(\theta_1) & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$
    $^{1}\mathbf{p}_{com,1} = \begin{bmatrix} L_1/2 \\ 0 \\ 0 \end{bmatrix}$ (This implies CoM is on the x-axis of frame 1).
    $^{0}\mathbf{p}_{com,1} = T_{01} \cdot \begin{bmatrix} L_1/2 \\ 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} (L_1/2)\cos(\theta_1) \\ (L_1/2)\sin(\theta_1) \\ 0 \\ 1 \end{bmatrix}$
    $z_{com,1}^{base} = 0$. This means link 1 is effectively horizontal and the CoM is at height 0 if the base frame origin is at joint 1 and the links are in the XY plane. This is standard for planar arms with gravity along Z.

    Now for Link 2:
    $T_{12} = \begin{bmatrix} \cos(\theta_2) & -\sin(\theta_2) & 0 & L_1 \\ \sin(\theta_2) & \cos(\theta_2) & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$ (Translation by $L_1$ along x-axis of frame 1, rotation by $\theta_2$).
    $T_{02} = T_{01} T_{12} = \begin{bmatrix} \cos(\theta_1+\theta_2) & -\sin(\theta_1+\theta_2) & 0 & L_1 \cos(\theta_1) \\ \sin(\theta_1+\theta_2) & \cos(\theta_1+\theta_2) & 0 & L_1 \sin(\theta_1) \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

    $^{2}\mathbf{p}_{com,2} = \begin{bmatrix} L_2/2 \\ 0 \\ 0 \end{bmatrix}$ (CoM of link 2 is at midpoint of link 2, along its x-axis).
    $^{0}\mathbf{p}_{com,2} = T_{02} \cdot \begin{bmatrix} L_2/2 \\ 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} \cos(\theta_1+\theta_2) (L_2/2) + L_1 \cos(\theta_1) \\ \sin(\theta_1+\theta_2) (L_2/2) + L_1 \sin(\theta_1) \\ 0 \\ 1 \end{bmatrix}$
    $z_{com,2}^{base} = 0$. This is still indicating horizontal links.

    **The key is that gravity acts *vertically*.** If the robot is planar, and the plane is vertical, then gravity *does* affect it. If the robot is planar and the plane is horizontal, gravity doesn't cause torque.
    **For a general 3D robot, or a planar robot in a vertical plane:**
    The $z$-coordinate of the CoM of link $i$ in the base frame is what matters.
    $z_{com,i}^{base}$ is the height in the direction of gravity.

    Let's reconsider the potential energy for a general link $i$ with mass $m_i$ and CoM position in link frame $i$ as $\mathbf{p}_{com,i}^{link} = [x_{com,i}, y_{com,i}, z_{com,i}]^T$.
    The transformation matrix from frame $i$ to base frame 0 is $T_{0i}$.
    The CoM position in base frame is $^{0}\mathbf{p}_{com,i} = T_{0i} \begin{bmatrix} x_{com,i} \\ y_{com,i} \\ z_{com,i} \\ 1 \end{bmatrix}$.
    The $z$-coordinate is $z_{com,i}^{base} = (T_{0i})_{31} x_{com,i} + (T_{0i})_{32} y_{com,i} + (T_{0i})_{33} z_{com,i} + (T_{0i})_{34}$.
    Assuming the base frame origin is at the base of the robot and $(T_{0i})_{34}$ represents the $z$-offset of the origin of frame $i$ from the base origin.

    For a simple revolute-revolute planar manipulator with gravity along the $-z$ axis:
    Assume link 1 is fixed at the origin. CoM of link 1 is at $(x_{1,com}, y_{1,com}, z_{1,com})$ *in the base frame*.
    If link 1 is attached to the base and its CoM is at $(x_{1,com}, y_{1,com}, z_{1,com})$, its potential energy is $U_1 = m_1 g z_{1,com}$.
    If link 2 is attached to link 1 at joint 2, its CoM position in the base frame depends on $\theta_1$ and $\theta_2$.

    **The standard representation of potential energy in robot dynamics often considers the height relative to the previous joint or the base.**
    Let's follow the structure from **Saha (2017), Chapter 7.2 (Lagrangian Dynamics):**
    For link $i$, the center of mass is at a distance $d_{ci}$ from the joint axis $i$, and at an angle $\alpha_i$ from the link's $x$-axis.
    The position of the CoM of link $i$ in the base frame ($z$-coordinate) can be expressed as a function of joint angles.
    For link $i$ with mass $m_i$ and CoM at $(d_{ci} \cos \alpha_i, d_{ci} \sin \alpha_i, 0)$ in link frame $i$, and the link frame $i$ is rotated by $\theta_i$ relative to link frame $i-1$.
    If gravity is along $-z$:
    $U_i = m_i g h_i$, where $h_i$ is the height of CoM of link $i$ relative to the reference.

    **A common simplified example:**
    Consider a planar manipulator. Gravity is along the negative Y-axis.
    $U = m g y_{com}$.
    For link 1, CoM is at $(x_{1,com}, y_{1,com})$ relative to base.
    $U_1 = m_1 g y_{1,com}$.
    If link 1 has length $l_1$ and its CoM is at $l_1/2$ from the joint along its axis, and its axis is at angle $\theta_1$ to the X-axis.
    $y_{1,com} = (l_1/2) \sin(\theta_1)$.
    $U_1 = m_1 g (l_1/2) \sin(\theta_1)$.

    For link 2, its base is at the end of link 1. CoM is at $l_2/2$ from joint 2 along its axis. The angle of link 2's axis is $(\theta_1 + \theta_2)$.
    $y_{2,com} = l_1 \sin(\theta_1) + (l_2/2) \sin(\theta_1 + \theta_2)$.
    $U_2 = m_2 g [l_1 \sin(\theta_1) + (l_2/2) \sin(\theta_1 + \theta_2)]$.

    Total potential energy $U = U_1 + U_2 = m_1 g (l_1/2) \sin(\theta_1) + m_2 g [l_1 \sin(\theta_1) + (l_2/2) \sin(\theta_1 + \theta_2)]$.
    $U = (m_1 \frac{l_1}{2} + m_2 l_1) g \sin(\theta_1) + m_2 \frac{l_2}{2} g \sin(\theta_1 + \theta_2)$.

    This is a more typical form for potential energy in a planar robot. The key is to correctly identify the vertical displacement of each CoM.

#### 2.5 Relationship to Forces and Torques

The generalized forces (or torques for revolute joints) due to gravity can be found by taking the partial derivative of the potential energy with respect to the generalized coordinates (joint variables):

$\tau_g = -\frac{\partial U}{\partial \theta}$

For our planar example with gravity along $-y$:
$\tau_{g1} = -\frac{\partial U}{\partial \theta_1} = -g [ (m_1 \frac{l_1}{2} + m_2 l_1) \cos(\theta_1) + m_2 \frac{l_2}{2} \cos(\theta_1 + \theta_2) ]$
$\tau_{g2} = -\frac{\partial U}{\partial \theta_2} = -m_2 \frac{l_2}{2} g \cos(\theta_1 + \theta_2)$

These are the torques required at the joints to counteract gravity.

**Textbook Reference:**
*   **Schilling (1996):** Likely presents potential energy as part of the total energy formulation for dynamics.
*   **Craig (2002):** Chapter 6 provides a detailed derivation of the potential energy terms and their role in calculating gravitational torques.
*   **Saha (2017):** Chapter 7.2 specifically covers the Lagrangian formulation and includes derivations for potential energy.
*   **Ghosal (2001):** Explains the concepts of energy and forces in manipulator dynamics.

#### 2.6 Important Points to Remember

*   Potential energy is due to gravity (primarily).
*   It is calculated as $U = mgh$, where $h$ is the vertical height of the CoM.
*   The total potential energy is the sum of individual link potential energies.
*   The $z$-coordinate of the CoM in the base frame is crucial.
*   The generalized gravitational torque/force is the negative gradient of potential energy with respect to joint variables: $\tau_g = -\frac{\partial U}{\partial \theta}$.

---

### Practice Questions

1.  **Velocity Jacobian:** For a 3-DOF planar manipulator with all revolute joints, write down the dimensions of its Velocity Jacobian matrix. If the manipulator is extended to 6-DOF with prismatic and revolute joints, what would be the dimensions of its Velocity Jacobian?
    *   **Answer:**
        *   3-DOF planar manipulator: $3 \times 3$ (3 linear velocities in the plane, 3 joint velocities).
        *   6-DOF manipulator: $6 \times 6$ (3 linear, 3 angular velocities in 3D space, 6 joint velocities).

2.  **Velocity Jacobian Calculation:** Consider a simple 1-DOF prismatic joint moving along the X-axis. Its position is given by $x = d$, where $d$ is the extension. If this joint drives a point at the end of a fixed link of length $L$ (oriented along the Y-axis) in a 2D plane, what is the end-effector's velocity Jacobian? Assume the prismatic joint is at the origin.
    *   **Hint:** The prismatic joint's motion affects the position of the fixed link's base.
    *   **Answer:**
        Let the prismatic joint position be $d$ along the X-axis. The base of the fixed link is at $(d, 0)$.
        The end-effector is at $(d, L)$.
        End-effector position: $x_{ee} = d$, $y_{ee} = L$.
        End-effector velocity: $\dot{x}_{ee} = \dot{d}$, $\dot{y}_{ee} = 0$.
        Joint velocity: $\dot{\theta}_1 = \dot{d}$.
        $\begin{bmatrix} \dot{x}_{ee} \\ \dot{y}_{ee} \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix} \begin{bmatrix} \dot{d} \end{bmatrix}$
        The Velocity Jacobian $J_v$ is $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$. (This is a $2 \times 1$ Jacobian).

3.  **Potential Energy:** A single rigid link of mass $m$ and length $L$ is pivoted at one end. The other end is at a height $h$ above the ground. Assume the link's center of mass is at its midpoint. If gravity acts downwards, what is the potential energy of this link with respect to the ground? If the pivot point is at height $H$ and the link makes an angle $\phi$ with the horizontal, what is its potential energy?
    *   **Answer:**
        *   If the other end is at height $h$ above the ground, and the CoM is at the midpoint, the CoM is at height $h/2$.
            Potential Energy $U = m g (h/2)$.
        *   If the pivot is at height $H$ above the ground, and the link makes an angle $\phi$ with the horizontal (assume $0$ is horizontal):
            The height of the CoM from the pivot is $(L/2) \sin \phi$ (if $\phi$ is angle from horizontal).
            The height of the CoM from the ground is $H + (L/2) \sin \phi$.
            Potential Energy $U = m g (H + (L/2) \sin \phi)$.
            *Note: Conventionally, if gravity is along -z, and the pivot is at height H, and link angle is $\phi$ with respect to the horizontal, the $z$ position of CoM is $H - (L/2) \sin\phi$ if $\phi$ is measured downwards from horizontal. If $\phi$ is measured upwards from horizontal, $z_{com} = H + (L/2) \sin\phi$. Let's assume $\phi$ is the angle of the link with the horizontal, and gravity is $-z$. The vertical displacement from the pivot point is $(L/2)\sin\phi$. So the CoM height relative to the ground is $H + (L/2)\sin\phi$. If gravity is along $-y$ in a planar setup, and $\phi$ is angle with X-axis, then $y_{com} = H + (L/2)\sin\phi$. The potential energy $U = m g y_{com} = m g (H + (L/2)\sin\phi)$. If gravity is along $-z$, $U = m g z_{com} = m g (H + (L/2)\sin\phi)$ assuming the setup is in the XZ plane.*

4.  **Potential Energy and Torques:** For the planar 2-DOF manipulator described in section 2.4, with gravity along the negative Y-axis, derive the potential energy expression. Then, calculate the gravitational torques $\tau_{g1}$ and $\tau_{g2}$.
    *   **Answer:**
        As derived in section 2.4:
        $U = (m_1 \frac{l_1}{2} + m_2 l_1) g \sin(\theta_1) + m_2 \frac{l_2}{2} g \sin(\theta_1 + \theta_2)$.
        $\tau_{g1} = -\frac{\partial U}{\partial \theta_1} = -g [ (m_1 \frac{l_1}{2} + m_2 l_1) \cos(\theta_1) + m_2 \frac{l_2}{2} \cos(\theta_1 + \theta_2) ]$
        $\tau_{g2} = -\frac{\partial U}{\partial \theta_2} = -m_2 \frac{l_2}{2} g \cos(\theta_1 + \theta_2)$

---

### Summary and Key Takeaways:

*   The **Velocity Jacobian** ($J_v$) is a crucial matrix that links joint velocities to end-effector velocities, enabling us to understand and control the robot's motion in task space. It is configuration-dependent and can reveal singularities.
*   The **Potential Energy Expression** ($U$) quantifies the gravitational energy stored in the manipulator. It is derived by summing the potential energies of each link, which depend on the mass and the vertical position of their centers of mass.
*   The negative gradient of the potential energy with respect to the joint variables gives the generalized gravitational forces or torques acting on the joints. These are essential terms in the dynamic equation of the robot.
*   Both concepts are fundamental building blocks for developing a complete dynamic model of a robot manipulator, as required for advanced control and analysis (CO4).

This concludes Module 3's discussion on the Velocity Jacobian and Potential Energy Expression. These concepts are vital for understanding how forces and velocities are transformed within a robotic manipulator, forming the basis for deriving the full dynamic model.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
