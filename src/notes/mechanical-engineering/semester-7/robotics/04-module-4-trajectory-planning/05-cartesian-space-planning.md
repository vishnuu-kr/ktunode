---
title: "Cartesian space planning"
subject: "ROBOTICS"
module: "Module 4: Trajectory Planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464259"
status: "completed"
scrapedAt: "2026-05-20T18:18:52.288Z"
---
# ROBOTICS - Module 4: Trajectory Planning

## Topic: Cartesian Space Planning

This module focuses on planning the movement of a robotic manipulator in the Cartesian (task) space. Unlike joint space planning, where we directly control the joint angles, Cartesian space planning defines the desired path of the robot's end-effector in terms of its position and orientation within the 3D world. This is crucial for tasks that require precise interaction with the environment.

---

### 1. Understanding Cartesian Space and End-Effector Pose

**Key Concepts:**

*   **Cartesian Space (Task Space):** The 3D space in which the robot operates. For a typical robotic manipulator, this space is defined by three translational degrees of freedom (x, y, z) and three rotational degrees of freedom (roll, pitch, yaw).
*   **End-Effector Pose:** The complete specification of the end-effector's position and orientation in Cartesian space.
    *   **Position:** Represented by a 3D vector $\mathbf{p} = \begin{bmatrix} x \\ y \\ z \end{bmatrix}$.
    *   **Orientation:** Can be represented using various methods like Euler angles, rotation matrices, or quaternions. A common representation is a 3x3 **Rotation Matrix** $R$, which describes the orientation of the end-effector's frame relative to the world frame.
*   **Transformation Matrix:** A 4x4 homogeneous transformation matrix $T$ can represent the complete pose of the end-effector:
    $T = \begin{bmatrix} R & \mathbf{p} \\ \mathbf{0}^T & 1 \end{bmatrix} = \begin{bmatrix} r_{11} & r_{12} & r_{13} & p_x \\ r_{21} & r_{22} & r_{23} & p_y \\ r_{31} & r_{32} & r_{33} & p_z \\ 0 & 0 & 0 & 1 \end{bmatrix}$

**Learning Outcomes Covered:**

*   **CO3:** Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion. (This section lays the foundation for Cartesian space planning.)

**From Textbooks:**

*   **Schilling (1996):** Chapter 5, "End-Effector Control and Trajectory Generation," will be relevant for understanding end-effector pose and its representation.
*   **Craig (2002):** Chapter 3, "Position and Orientation Representation," and Chapter 8, "End-Effectors," provide fundamental insights into representing the end-effector's state.
*   **Saha (n.d.):** Chapters on End-Effector Kinematics and Task Space Control will be applicable.
*   **Ghosal (n.d.):** Chapters dealing with End-Effector Kinematics and Task Space Control.

---

### 2. The Need for Cartesian Space Planning

While joint space planning is simpler computationally, Cartesian space planning is essential for tasks that are defined by the robot's interaction with its environment.

**Key Concepts:**

*   **Task-Oriented Goals:** Many robotic tasks are naturally described in terms of the end-effector's motion in Cartesian space. Examples include:
    *   **Picking and Placing:** Moving an object from point A to point B.
    *   **Welding/Cutting:** Following a specific path on a surface.
    *   **Assembly:** Inserting a peg into a hole.
    *   **Inspection:** Scanning a surface.
*   **Cartesian Trajectories:** A sequence of desired end-effector poses over time.
*   **Inverse Kinematics (IK):** The process of determining the joint angles required to achieve a desired end-effector pose. This is the critical link between Cartesian space and joint space.

**Learning Outcomes Covered:**

*   **CO3:** Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion. (Highlights the motivation for Cartesian planning.)

**From Textbooks:**

*   **Craig (2002):** Chapter 8, "End-Effectors," discusses tasks and their Cartesian nature.
*   **Mittal (2003):** Chapters on Task Space Control and Motion Planning will explain the importance of Cartesian space.
*   **Siegwart & Nourbakhsh (2004):** For mobile robots, tasks are inherently defined in Cartesian space (e.g., navigating a path).

---

### 3. Defining Cartesian Trajectories

A Cartesian trajectory defines the desired path of the end-effector in terms of its position and orientation as a function of time.

**Key Concepts:**

*   **Path vs. Trajectory:**
    *   **Path:** A geometric description of the desired motion in space, regardless of time.
    *   **Trajectory:** A path with a time parameterization, specifying the velocity and acceleration along the path.
*   **Types of Cartesian Paths:**
    *   **Straight Line Motion:** Moving the end-effector in a straight line between two points. This is common for pick-and-place operations.
    *   **Circular Arc Motion:** Following a segment of a circle.
    *   **Arbitrary Paths:** Complex curves defined mathematically or by a series of waypoints.
*   **Orientation Control:** Alongside position, the orientation of the end-effector also needs to be controlled. This can be achieved by specifying a sequence of desired orientations or by maintaining a constant orientation.

**Mathematical Representation of a Straight Line Path:**

Let the starting pose be $T_0$ and the ending pose be $T_f$.
The desired position $\mathbf{p}(t)$ for $0 \le t \le 1$ can be linearly interpolated:
$\mathbf{p}(t) = (1-t)\mathbf{p}_0 + t\mathbf{p}_f$

For orientation, a common approach is **linear interpolation of the rotation matrix**:
$R(t) = R_0 R_{slerp}(R_0^{-1}R_f, t)$
where $R_{slerp}$ denotes Spherical Linear Interpolation, which interpolates between two rotation matrices along the shortest arc on the sphere of possible orientations.

Alternatively, one can interpolate **orientation parameters** (e.g., Euler angles), but this can suffer from singularities.

**Learning Outcomes Covered:**

*   **CO3:** Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion. (Focuses on how to define these trajectories.)

**From Textbooks:**

*   **Schilling (1996):** Chapter 5 discusses path generation and interpolation techniques.
*   **Craig (2002):** Chapter 8 provides details on interpolating poses.
*   **Lynch & Park (2017):** Chapter 7, "Motion Planning," is highly relevant for defining and interpolating paths.
*   **Siciliano, Sciavicco, Villani, & Oriolo (2008):** Chapter 5, "Motion Planning," will cover trajectory generation in Cartesian space.

---

### 4. Inverse Kinematics (IK) for Cartesian Planning

**Key Concepts:**

*   **The Core Challenge:** To execute a Cartesian trajectory, the robot's joint angles must be continuously updated to match the desired end-effector pose at each point in time. This requires solving the Inverse Kinematics problem.
*   **Types of IK Solutions:**
    *   **Analytical IK:** For simpler robot structures (e.g., 6-DOF arms with spherical wrists), explicit mathematical equations can be derived to directly compute joint angles from end-effector pose. This is fast and accurate.
    *   **Numerical IK:** For more complex or redundant robots, numerical iterative methods are used. These methods start with an initial guess of joint angles and iteratively adjust them to minimize the error between the current and desired end-effector pose. Common methods include:
        *   **Jacobian Pseudoinverse:** Uses the Jacobian matrix to relate joint velocities to end-effector velocities.
        *   **Jacobian Transpose:** A simpler but less accurate iterative method.
        *   **Damped Least Squares (DLS):** A robust method that handles singularities better.
*   **Singularities:** Configurations of the robot where it loses one or more degrees of freedom, making certain end-effector motions impossible or requiring infinite joint velocities. Jacobian-based IK methods are particularly sensitive to singularities.
*   **Multiple Solutions:** For many robotic manipulators, there can be multiple sets of joint angles that achieve the same end-effector pose (e.g., elbow up vs. elbow down). The choice of solution can affect reachability and singularity avoidance.

**Learning Outcomes Covered:**

*   **CO2:** Obtain forward and inverse kinematic models of robotic manipulators. (Crucial for executing Cartesian trajectories.)
*   **CO3:** Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion. (IK is the bridge to making Cartesian plans executable.)

**From Textbooks:**

*   **Schilling (1996):** Chapter 4, "Inverse Kinematics," is foundational.
*   **Craig (2002):** Chapter 6, "Inverse Kinematics," provides comprehensive coverage.
*   **Saha (n.d.):** Chapters on Inverse Kinematics.
*   **Ghosal (n.d.):** Chapters on Inverse Kinematics.
*   **Lynch & Park (2017):** Chapter 6, "Inverse Kinematics."
*   **Siciliano et al. (2008):** Chapter 4, "Inverse Kinematics."

**Example (Conceptual):**

Consider a simple 2-DOF planar arm.
*   **Forward Kinematics:** Given joint angles $\theta_1, \theta_2$, compute end-effector position $(x, y)$.
*   **Inverse Kinematics:** Given desired end-effector position $(x_d, y_d)$, compute joint angles $(\theta_1, \theta_2)$.

For a 2-DOF arm with link lengths $L_1, L_2$:
$x = L_1 \cos(\theta_1) + L_2 \cos(\theta_1 + \theta_2)$
$y = L_1 \sin(\theta_1) + L_2 \sin(\theta_1 + \theta_2)$

Solving for $\theta_1, \theta_2$ given $(x, y)$ involves trigonometric manipulations and leads to potentially two solutions for $\theta_2$ and consequently $\theta_1$.

---

### 5. Generating Cartesian Trajectories (Step-by-Step Process)

**The typical workflow for Cartesian space planning involves:**

1.  **Define Waypoints:** Specify a sequence of desired end-effector poses (position and orientation) in Cartesian space. These are often defined by the task requirements.
2.  **Interpolate Poses:** Generate a continuous sequence of intermediate poses between the waypoints. This can be done using linear interpolation for position and Slerp for orientation, or more sophisticated curve generation methods.
3.  **Time Parameterization:** Assign a time stamp to each pose along the interpolated path. This defines the velocity and acceleration profiles. Common methods include:
    *   **Linear Velocity Profile:** Constant speed along the path.
    *   **Trapezoidal Velocity Profile:** Accelerates to a constant velocity, then decelerates.
    *   **Polynomial Profiles (e.g., Cubic, Quintic):** Smoother motion with controlled acceleration and deceleration, minimizing jerk.
4.  **Inverse Kinematics Solution:** For each pose in the time-parameterized trajectory, solve the Inverse Kinematics problem to obtain the corresponding joint angles and joint velocities.
5.  **Joint Space Trajectory Generation:** The sequence of joint angles and velocities forms a joint space trajectory that can be commanded to the robot's actuators.

**Learning Outcomes Covered:**

*   **CO3:** Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion. (This outlines the complete process.)

**From Textbooks:**

*   **Craig (2002):** Chapter 8 discusses generating trajectories and the transition to joint space.
*   **Lynch & Park (2017):** Chapter 7, "Motion Planning," is central to this entire process.
*   **Siciliano et al. (2008):** Chapter 5 covers motion planning strategies in detail.

---

### 6. Challenges and Considerations in Cartesian Planning

*   **Computational Cost:** Solving IK repeatedly for each point on a Cartesian trajectory can be computationally intensive, especially for complex robots or when using numerical IK methods.
*   **Singularity Avoidance:** Numerical IK methods can struggle near singularities. Trajectory planning needs to consider avoiding these configurations.
*   **Workspace Limitations:** The desired Cartesian path might lie outside the robot's reachable workspace.
*   **Obstacle Avoidance:** This is a critical aspect of CO3. Cartesian paths must be planned to avoid collisions with the environment or other objects. This often involves:
    *   **Path Modification:** Adjusting the planned Cartesian path to go around obstacles.
    *   **Dynamic Re-planning:** If an obstacle appears unexpectedly, the robot might need to modify its trajectory on the fly.
*   **Dynamic Constraints:** The robot's actuators have limitations on velocity, acceleration, and torque. Trajectories need to respect these dynamic constraints.
*   **Redundancy:** If the robot has more than 6 DOF, there are infinite solutions to the IK problem. Planning must select a "good" solution based on criteria like minimizing joint movement, avoiding singularities, or maintaining a desired posture.

**Learning Outcomes Covered:**

*   **CO3:** Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion. (Addresses the practical challenges and the "avoid obstacles" aspect.)

**From Textbooks:**

*   **Craig (2002):** Discusses singularities and workspace in chapters related to IK and control.
*   **Lynch & Park (2017):** Chapter 7 is dedicated to motion planning, including collision avoidance.
*   **Siegwart & Nourbakhsh (2004):** For mobile robots, obstacle avoidance in Cartesian space is a primary focus.
*   **Siciliano et al. (2008):** Chapters on Motion Planning and Control will cover these challenges.

---

### 7. Obstacle Avoidance in Cartesian Space

**Key Concepts:**

*   **Collision Detection:** The ability to determine if the robot's current configuration or a planned path segment intersects with any obstacles.
*   **Path Planning Algorithms:**
    *   **Potential Field Methods:** Create attractive forces towards the goal and repulsive forces from obstacles. The robot follows the gradient of this potential field.
    *   **Sampling-Based Methods (e.g., PRM, RRT):** Randomly sample configurations in the configuration space (or relevant parts of Cartesian space) and connect them to form a graph or tree that avoids obstacles.
    *   **Trajectory Modification:** If a planned Cartesian trajectory is found to be in collision, it can be modified. This might involve:
        *   **Local Obstacle Avoidance:** Reacting to nearby obstacles by temporarily deviating from the planned path.
        *   **Global Path Re-planning:** If a collision is unavoidable, a completely new path might need to be computed.
*   **Workspace Representation:** How obstacles are represented in the robot's workspace (e.g., as geometric primitives, meshes).

**Learning Outcomes Covered:**

*   **CO3:** Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion. (This is the core of the obstacle avoidance aspect.)

**From Textbooks:**

*   **Lynch & Park (2017):** Chapter 7, "Motion Planning," is the primary resource for obstacle avoidance.
*   **Siegwart & Nourbakhsh (2004):** Chapters on Navigation and Obstacle Avoidance are fundamental for mobile robots.
*   **Siciliano et al. (2008):** Chapter 5 covers collision avoidance strategies.

---

### 8. Practice Questions and Answers

**Question 1:** What is the primary advantage of planning a robot's trajectory in Cartesian space compared to joint space?
**Answer:** The primary advantage is that Cartesian space planning allows for direct control and specification of the end-effector's path and orientation in the task environment, which is often more intuitive and directly related to the actual task being performed (e.g., picking, placing, welding).

**Question 2:** Explain the role of Inverse Kinematics in Cartesian space planning.
**Answer:** Inverse Kinematics is the critical link that translates the desired Cartesian end-effector trajectory (position and orientation over time) into a corresponding sequence of joint angles and velocities that the robot's motors can execute. Without solving IK, a Cartesian plan remains abstract and cannot be realized by the robot.

**Question 3:** Name two common methods for interpolating orientation for a Cartesian trajectory.
**Answer:**
1.  **Spherical Linear Interpolation (Slerp):** Interpolates between two rotation matrices along the shortest arc on the sphere of orientations.
2.  **Linear interpolation of Euler angles:** While simpler, this method can suffer from gimbal lock and non-uniform rotation speeds.

**Question 4:** What is a singularity in the context of robotic manipulators and Cartesian planning?
**Answer:** A singularity is a configuration of a robot arm where it loses one or more degrees of freedom. In Cartesian planning, this means the end-effector can no longer move in certain directions or orientations, or achieving such motion would require infinite joint velocities, making the trajectory execution problematic or impossible. Numerical IK methods often fail or become unstable near singularities.

**Question 5:** Briefly describe one technique for obstacle avoidance in Cartesian space planning.
**Answer:** One technique is **Potential Field Methods**. In this approach, artificial forces are generated: an attractive force pulls the end-effector towards the goal position, while repulsive forces push it away from obstacles. The robot's motion is then guided by the resultant force vector, effectively navigating around obstacles in Cartesian space.

---

### 9. Important Points to Remember

*   **Cartesian space planning is task-centric:** it defines the desired end-effector motion in the real world.
*   **Inverse Kinematics is essential:** It converts Cartesian trajectories into executable joint space commands.
*   **Orientation control is as important as position control:** The end-effector's pose includes both.
*   **Interpolation techniques (linear for position, Slerp for orientation) are fundamental** for generating smooth Cartesian paths.
*   **Singularities are critical issues** that must be considered during Cartesian planning and IK solving.
*   **Obstacle avoidance is a key challenge** and requires specific algorithms and representations.
*   **Computational cost and dynamic constraints** are practical limitations that influence the choice of planning methods.

---

### 10. Relation to Course Outcomes

*   **CO3 (Knowledge Level K4, K5):** This entire topic directly addresses CO3 by covering the methods for planning trajectories in Cartesian space and discussing the crucial aspect of obstacle avoidance while the robot is in motion. Understanding the process of defining paths, interpolating poses, solving IK, and implementing avoidance strategies falls under analysis (K4) and synthesis/application (K5).
*   **CO2 (Knowledge Level K3):** Cartesian space planning is heavily reliant on the ability to obtain and use inverse kinematic models, thus reinforcing CO2 (understanding and obtaining IK models).

---

This concludes the study notes for Cartesian Space Planning in Robotic Manipulator Trajectory Planning. Remember to refer to the specified textbooks for deeper theoretical understanding and detailed mathematical derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
