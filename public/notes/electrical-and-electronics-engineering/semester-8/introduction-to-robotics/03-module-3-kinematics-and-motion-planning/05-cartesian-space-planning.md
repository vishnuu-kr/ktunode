---
title: "Cartesian space planning"
subject: "INTRODUCTION TO ROBOTICS"
module: "Module 3: Kinematics and Motion Planning"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c57"
status: "completed"
scrapedAt: "2026-05-23T16:41:47.128Z"
---
# Introduction to Robotics: Module 3 - Kinematics and Motion Planning
## Topic: Cartesian Space Planning

---

### 1. Introduction and Motivation

**Goal:** To plan the motion of a robot manipulator in the Cartesian (task) space, where the desired end-effector positions and orientations are directly specified.

**Cartesian Space vs. Joint Space:**
*   **Cartesian Space:** Deals with the position and orientation of the robot's end-effector in a fixed world coordinate frame. This is often more intuitive for human operators as it relates to the task being performed (e.g., "move the drill to this point and orientation").
*   **Joint Space:** Deals with the angles or displacements of each of the robot's joints. While mathematically easier for forward kinematics, it can be less intuitive for task-oriented planning.

**Why Cartesian Space Planning?**
*   **Task-Oriented:** Many robotic tasks are defined by desired end-effector trajectories in Cartesian space (e.g., drawing a line, welding a seam, picking an object from a specific location).
*   **Direct Control:** Allows for direct specification of how the end-effector should move in the physical world.
*   **Collision Avoidance:** It's often easier to reason about collisions in Cartesian space when paths are defined in terms of world coordinates.

**Learning Outcomes Addressed:**
*   **CO5: Plan trajectories in joint space and Cartesian space (Knowledge Level: K3)** - This topic directly addresses the Cartesian space aspect of trajectory planning.

**Referenced Textbooks:**
*   *Introduction to Robotics: Mechanics and Control* by John. J. Craig (Chapter 7: Path Planning)
*   *Robotics and Control* by R K Mittal and I J Nagrath (Chapter 5: Motion Planning)
*   *Robotics-Fundamental Concepts and Analysis* by Ashitava Ghosal (Chapter 6: Motion Planning)

---

### 2. Representing End-Effector Pose in Cartesian Space

The pose (position and orientation) of the end-effector in Cartesian space is typically represented by a transformation matrix, often called the **end-effector pose matrix** or **tool coordinate frame**.

*   **Position:** Represented by a 3D vector $\mathbf{p} = \begin{bmatrix} x & y & z \end{bmatrix}^T$.
*   **Orientation:** Can be represented in various ways:
    *   **Rotation Matrix:** A $3 \times 3$ orthogonal matrix $R$ with determinant +1.
    *   **Euler Angles:** A sequence of three rotations about specific axes (e.g., roll, pitch, yaw).
    *   **Quaternions:** A more compact representation that avoids gimbal lock.
    *   **Axis-Angle Representation:** A unit vector representing the axis of rotation and an angle of rotation around that axis.

The combined pose can be represented by a homogeneous transformation matrix $T_{EE}$ (or $T_{Tool}$):

$T_{EE} = \begin{bmatrix} R & \mathbf{p} \\ \mathbf{0}^T & 1 \end{bmatrix} = \begin{bmatrix} r_{11} & r_{12} & r_{13} & x \\ r_{21} & r_{22} & r_{23} & y \\ r_{31} & r_{32} & r_{33} & z \\ 0 & 0 & 0 & 1 \end{bmatrix}$

Where $R$ is the $3 \times 3$ rotation matrix and $\mathbf{p}$ is the 3D position vector.

**Key Concept:** A rigid body's pose in 3D space can be fully described by 6 degrees of freedom (DOF): 3 for position and 3 for orientation.

---

### 3. Kinematic Mapping and Inverse Kinematics

To move the end-effector along a desired Cartesian path, we need to know the corresponding joint configurations. This is achieved through **inverse kinematics (IK)**.

*   **Forward Kinematics (FK):** Given the joint variables ($\theta_1, \theta_2, ..., \theta_n$), compute the end-effector pose ($T_{EE}$).
    $T_{EE} = FK(\theta_1, \theta_2, ..., \theta_n)$
*   **Inverse Kinematics (IK):** Given the desired end-effector pose ($T_{EE\_desired}$), compute the required joint variables ($\theta_1, \theta_2, ..., \theta_n$).
    $\{\theta_1, \theta_2, ..., \theta_n\} = IK(T_{EE\_desired})$

**Challenges in Inverse Kinematics:**
*   **Non-linearity:** The FK equations are generally non-linear with respect to joint variables.
*   **Multiple Solutions:** For a given end-effector pose, there can be multiple sets of joint angles that achieve it (e.g., elbow up vs. elbow down).
*   **No Solution:** Some desired poses might be unreachable by the robot.
*   **Singularities:** Configurations where the robot loses one or more DOF, making certain movements impossible or requiring infinite joint velocities.

**Methods for Solving IK:**
*   **Analytical (Geometric) Methods:** Derive direct algebraic equations for joint variables. Applicable for simpler robot structures (e.g., PUMA arm, SCARA robots). (Refer to Craig, Chapter 7).
*   **Numerical (Iterative) Methods:** Use iterative algorithms to converge to a solution. Examples include:
    *   Jacobian Transpose Method
    *   Damped Least Squares (DLS) Method
    *   Newton-Raphson Method

**Key Concept:** Cartesian space planning relies heavily on the ability to solve the inverse kinematics problem. Without IK, we cannot translate desired end-effector movements into the necessary joint commands.

**Example (from Mittal & Nagrath, Chapter 5):** Consider a 2-DOF planar manipulator with prismatic joints $d_1, d_2$ and revolute joints $\theta_1, \theta_2$. The end-effector position $(x, y)$ can be expressed in terms of joint variables. Finding the joint variables for a given $(x, y)$ is an IK problem.

---

### 4. Cartesian Path Planning

Cartesian path planning involves defining a sequence of desired end-effector poses and/or velocities over time.

**Types of Cartesian Paths:**
1.  **Point-to-Point (PTP) Motion:** Move the end-effector from an initial pose to a final pose. The intermediate path is not strictly defined, but the robot's configuration is smoothly transitioned.
2.  **Continuous Path (CP) Motion:** The end-effector must follow a precisely defined path in Cartesian space (e.g., a straight line, a circle, a complex curve).

**Steps Involved in Cartesian Path Planning:**

1.  **Define Waypoints:** Specify a series of desired end-effector poses ($T_0, T_1, ..., T_N$) in Cartesian space.
2.  **Generate Intermediate Poses:** For continuous paths, interpolate between these waypoints to create a dense set of intermediate poses.
3.  **Inverse Kinematics:** For each desired Cartesian pose $T_i$, compute the corresponding joint configuration $q_i = IK(T_i)$.
4.  **Joint Space Trajectory Generation:** Generate a trajectory in joint space that passes through these computed joint configurations ($q_0, q_1, ..., q_N$). This often involves joint-space interpolation and velocity/acceleration profiles.
5.  **Control:** Command the robot's joint actuators to follow the generated joint-space trajectory.

**Key Concept:** The translation from Cartesian space to joint space via IK is crucial. The quality of the Cartesian path planning is often limited by the capabilities and accuracy of the IK solution.

---

### 5. Trajectory Generation in Cartesian Space

Once a sequence of desired Cartesian poses ($T_0, T_1, ..., T_N$) is defined, a trajectory needs to be generated that specifies the end-effector's position and orientation (and their time derivatives) over time.

**5.1. Point-to-Point Cartesian Trajectories**

For PTP motion, we are primarily interested in moving from an initial pose $T_{start}$ to a final pose $T_{end}$. While the exact Cartesian path isn't critical, a smooth transition is desired.

*   **Approach:**
    1.  Solve $q_{start} = IK(T_{start})$ and $q_{end} = IK(T_{end})$.
    2.  Generate a joint-space trajectory (e.g., using polynomial interpolation) between $q_{start}$ and $q_{end}$.
    3.  Convert this joint-space trajectory back to Cartesian space using FK to understand the end-effector's actual path.

**5.2. Continuous Path Cartesian Trajectories**

For CP motion, the end-effector must follow a specific geometric path.

*   **Straight Line Path:**
    *   **Definition:** Move the end-effector from position $\mathbf{p}_{start}$ to $\mathbf{p}_{end}$ along a straight line, while maintaining a constant orientation or smoothly changing orientation.
    *   **Position Interpolation:**
        $\mathbf{p}(t) = \mathbf{p}_{start} + s(t)(\mathbf{p}_{end} - \mathbf{p}_{start})$
        where $s(t)$ is a scalar parameter between 0 and 1, representing the progress along the path. $s(t)$ is typically a polynomial function of time that satisfies start and end velocity/acceleration constraints.
    *   **Orientation Interpolation:**
        *   **Constant Orientation:** The rotation matrix $R$ remains constant throughout the path.
        *   **Variable Orientation:** If the orientation also needs to change, it can be interpolated using methods like:
            *   **Spherical Linear Interpolation (SLERP):** For interpolating between two rotation matrices or quaternions. This ensures constant angular velocity of rotation. (Refer to Craig, Chapter 7).
            *   **Euler Angle Interpolation:** Can be problematic due to gimbal lock and discontinuities.

*   **Circular Path:**
    *   **Definition:** Move the end-effector along a circular arc in a plane.
    *   **Parametrization:** A circle in 3D space can be defined by its center, radius, start and end angles, and the plane of the circle.
    *   **Interpolation:** Points on the circle can be generated using trigonometric functions. The orientation can be handled similarly to straight-line paths.

**Key Concept:** Trajectory generation in Cartesian space involves creating a time-varying sequence of desired poses and velocities for the end-effector. This often requires interpolation techniques for both position and orientation.

**Example (Craig, Chapter 7):** Consider a 2-DOF planar robot. If we want to move the end-effector along a straight line from $(x_1, y_1)$ to $(x_2, y_2)$, we can parameterize the line as $(x(t), y(t))$ and then solve for the joint angles $(\theta_1(t), \theta_2(t))$ using inverse kinematics for each $(x(t), y(t))$ on the path.

---

### 6. Velocity and Acceleration Control in Cartesian Space

To achieve smooth and dynamic motion, we often need to control the end-effector's velocity and acceleration in Cartesian space.

*   **Jacobian Matrix:** The Jacobian matrix $J(\mathbf{q})$ relates joint velocities $\dot{\mathbf{q}}$ to end-effector velocities $\dot{\mathbf{x}}$ in Cartesian space:
    $\dot{\mathbf{x}} = J(\mathbf{q}) \dot{\mathbf{q}}$
    where $\dot{\mathbf{x}}$ is a vector of end-effector velocities (e.g., linear and angular velocities) and $\mathbf{q}$ represents the joint configuration.

*   **Cartesian Velocity Control:** To achieve a desired Cartesian velocity $\dot{\mathbf{x}}_{des}$:
    1.  Compute the current joint configuration $\mathbf{q}$.
    2.  Compute the Jacobian $J(\mathbf{q})$.
    3.  Solve for the required joint velocities: $\dot{\mathbf{q}} = J(\mathbf{q})^{-1} \dot{\mathbf{x}}_{des}$.
    This is essentially an inverse kinematics problem for velocities.

*   **Cartesian Acceleration Control:** This is more complex as it involves the time derivative of the Jacobian and the inverse dynamics of the robot.
    $\ddot{\mathbf{x}} = \dot{J}(\mathbf{q}) \dot{\mathbf{q}} + J(\mathbf{q}) \ddot{\mathbf{q}}$

**Challenges in Cartesian Velocity/Acceleration Control:**
*   **Singularities:** The Jacobian matrix can become singular, making the robot unable to achieve certain Cartesian velocities or requiring infinite joint velocities.
*   **Computational Cost:** Calculating the Jacobian and its inverse (or pseudo-inverse) can be computationally intensive.
*   **Achievable Velocities:** The achievable Cartesian velocities are limited by the robot's joint velocity limits and the structure of the Jacobian.

**Key Concept:** The Jacobian matrix is the bridge between joint space velocities and Cartesian space velocities. Controlling Cartesian velocity directly requires inverting or using the pseudo-inverse of the Jacobian.

**Referenced Textbooks:**
*   *Introduction to Robotics: Mechanics and Control* by John. J. Craig (Chapter 6: Robot Kinematics)
*   *Fundamentals of Robotics – Analysis and Control* by Robert. J. Schilling (Chapter 4: Kinematics)

---

### 7. Collision Detection and Avoidance in Cartesian Space

Collision avoidance is a critical aspect of motion planning. In Cartesian space, this often involves:

*   **World Representation:** Representing the robot and its environment in a common Cartesian frame.
*   **Path Planning Algorithms:**
    *   **Configuration Space (C-space):** The most general approach where the robot's entire configuration is considered a point in a higher-dimensional space, and obstacles are "grown" in this space.
    *   **Workspace Decomposition:** Dividing the operational space into cells and planning paths through free cells.
    *   **Potential Fields:** Defining attractive forces towards the goal and repulsive forces from obstacles. This can lead to local minima.
    *   **Sampling-Based Methods (e.g., RRT, PRM):** Randomly sampling configurations and connecting them to form a path.

*   **Cartesian Space Considerations for Collision Avoidance:**
    *   **End-effector Path:** Ensuring the end-effector itself does not collide with obstacles.
    *   **Robot Body Collision:** Ensuring that the links and joints of the robot do not collide with obstacles. This is more challenging to check directly in Cartesian space without knowing the full joint configuration.

**Strategy:**
1.  Plan a path in Cartesian space (e.g., a sequence of poses).
2.  For each pose in the Cartesian path, solve the IK to get the joint configuration.
3.  At each joint configuration, check for collisions between the robot's links and the environment.
4.  If a collision is detected, modify the Cartesian path or use an alternative IK solution that avoids the collision.

**Key Concept:** While path planning can be initiated in Cartesian space, collision checking often requires converting to joint space to evaluate the full robot geometry.

**Referenced Textbooks:**
*   *Robotics Technology and Flexible Automation* by S. R. Deb (Chapter 8: Robot Motion Planning)
*   *Introduction to Robotics* by S K Saha (Chapter 12: Path Planning and Trajectory Generation)

---

### 8. Examples and Applications

*   **Welding/Painting:** The robot arm needs to follow a specific seam or surface defined in Cartesian space. The orientation of the tool (welding torch, spray gun) is also critical.
*   **Pick and Place:** Picking an object from a known Cartesian location and placing it at another. The path between pick and place can be a straight line or a curve to avoid obstacles.
*   **Assembly:** Performing tasks like inserting a peg into a hole, where precise Cartesian positioning and orientation are required.
*   **3D Printing:** The print head follows a path in Cartesian space to deposit material.

**Example:** A robot is tasked to draw a straight line on a surface.
1.  **Cartesian Path Definition:** Specify the start pose $(x_1, y_1, z_1)$ and end pose $(x_2, y_2, z_2)$ of the drawing tool. The orientation of the tool might be kept constant or adjusted.
2.  **Interpolation:** Generate a sequence of intermediate poses along the straight line segment in Cartesian space.
3.  **Inverse Kinematics:** For each Cartesian pose, compute the required joint angles using the robot's IK solver.
4.  **Trajectory Generation:** Create a smooth trajectory in joint space.

---

### 9. Important Points to Remember

*   **Cartesian space planning is task-centric:** It directly addresses where the end-effector needs to be and how it should be oriented.
*   **Inverse Kinematics is fundamental:** The success of Cartesian path planning hinges on the ability to accurately and efficiently solve the IK problem.
*   **Representation of Pose:** Understanding how to represent end-effector position and orientation (e.g., using transformation matrices) is crucial.
*   **Interpolation:** Smooth Cartesian paths often require interpolation techniques for both position and orientation (e.g., SLERP for rotations).
*   **Jacobian:** The Jacobian relates joint velocities to end-effector velocities, enabling Cartesian velocity control.
*   **Singularities:** Be aware of kinematic singularities, which can limit Cartesian motion.
*   **Collision checking:** Often requires converting Cartesian path points into joint configurations.

---

### 10. Practice Questions

**Q1.** Explain the difference between joint space planning and Cartesian space planning. When would you prefer Cartesian space planning?
**Q2.** What is the primary mathematical tool required to translate a desired Cartesian end-effector motion into robot joint commands?
**Q3.** A robot has to follow a straight line path from point A to point B in Cartesian space. Describe the steps involved in planning this motion.
**Q4.** What are the challenges associated with solving the inverse kinematics problem for a robot manipulator?
**Q5.** How can orientation be interpolated between two different orientations in Cartesian space? Briefly mention a method.
**Q6.** If the desired end-effector velocity in Cartesian space is $\dot{\mathbf{x}}_{des}$, and the robot's current configuration is $\mathbf{q}$, what equation would you use to find the required joint velocities $\dot{\mathbf{q}}$?

---

### 11. Answers to Practice Questions

**A1.**
*   **Joint Space Planning:** Plans trajectories directly in terms of joint angles/displacements. It is often simpler mathematically for trajectory generation but less intuitive for task-oriented movements.
*   **Cartesian Space Planning:** Plans trajectories for the end-effector's position and orientation in the world frame. It is more intuitive for tasks defined in terms of workspace coordinates.
*   **Preference:** Cartesian space planning is preferred for tasks where the desired end-effector motion is naturally defined in the world frame, such as welding along a seam, painting a surface, or picking an object from a known location.

**A2.** The primary tool required is **Inverse Kinematics (IK)**. It allows the computation of the necessary joint angles for a given desired end-effector pose.

**A3.** The steps involved are:
1.  **Define Waypoints:** Specify the start pose (A) and end pose (B) of the end-effector in Cartesian space.
2.  **Cartesian Path Interpolation:** Generate a sequence of intermediate Cartesian poses along the straight line segment connecting A and B. This involves interpolating the position vector and potentially the orientation.
3.  **Inverse Kinematics:** For each interpolated Cartesian pose, solve the inverse kinematics problem to obtain the corresponding joint angles.
4.  **Joint Space Trajectory Generation:** Create a smooth trajectory in joint space that passes through the computed joint angles, typically using polynomial interpolation with velocity and acceleration constraints.
5.  **Execution:** Command the robot's joint actuators to follow the generated joint-space trajectory.

**A4.** Challenges in solving inverse kinematics include:
*   **Non-linearity:** The forward kinematics equations are generally non-linear, making direct algebraic solutions difficult.
*   **Multiple Solutions:** A single end-effector pose can often be achieved by multiple distinct joint configurations (e.g., elbow up/down).
*   **Reachability:** Some desired poses may be outside the robot's workspace.
*   **Singularities:** Configurations where the robot loses DOF, making certain motions impossible or requiring infinite joint velocities.
*   **Computational Cost:** Numerical methods can be computationally intensive.

**A5.** Orientation can be interpolated between two orientations using:
*   **Spherical Linear Interpolation (SLERP):** This is a preferred method for interpolating between two rotation matrices or quaternions, as it ensures a constant angular velocity of rotation.
*   **Euler Angle Interpolation:** While simpler, it can suffer from gimbal lock and discontinuities, leading to unpredictable rotations.

**A6.** The equation used to find the required joint velocities $\dot{\mathbf{q}}$ for a desired Cartesian velocity $\dot{\mathbf{x}}_{des}$ is:
$\dot{\mathbf{x}}_{des} = J(\mathbf{q}) \dot{\mathbf{q}}$
To find $\dot{\mathbf{q}}$, we would typically use the inverse or pseudo-inverse of the Jacobian:
$\dot{\mathbf{q}} = J(\mathbf{q})^{-1} \dot{\mathbf{x}}_{des}$
or if $J(\mathbf{q})$ is not square or is singular, use the pseudo-inverse:
$\dot{\mathbf{q}} = J(\mathbf{q})^+ \dot{\mathbf{x}}_{des}$

---

This concludes the study notes for Cartesian Space Planning. Remember to refer to the recommended textbooks for more in-depth explanations and derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
