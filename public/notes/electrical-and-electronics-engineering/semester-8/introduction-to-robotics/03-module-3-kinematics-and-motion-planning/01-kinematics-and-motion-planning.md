---
title: "Kinematics and Motion Planning"
subject: "INTRODUCTION TO ROBOTICS"
module: "Module 3: Kinematics and Motion Planning"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c53"
status: "completed"
scrapedAt: "2026-05-23T16:41:41.543Z"
---
# Introduction to Robotics: Module 3 - Kinematics and Motion Planning

This module delves into the fundamental concepts of robotic kinematics and motion planning, crucial for understanding how robots move and operate in their environment. We will explore how to mathematically describe robot arm configurations and how to plan a sequence of movements to achieve a desired task.

---

## Learning Outcomes:

Upon successful completion of this module, you will be able to:

*   **Understand the basic principles of robotic kinematics:** This includes defining the relationship between joint variables and the end-effector's position and orientation.
*   **Analyze the forward kinematics problem:** Given the joint angles, determine the position and orientation of the robot's end-effector.
*   **Analyze the inverse kinematics problem:** Given the desired end-effector position and orientation, determine the required joint angles.
*   **Understand the concept of the robot's workspace:** Define the reachable space of the robot's end-effector.
*   **Introduce the fundamentals of motion planning:** Understand how to generate smooth and collision-free paths for robots.
*   **Explain trajectory generation in joint space and Cartesian space:** Differentiate between planning motions in terms of joint angles versus end-effector coordinates.

---

## Course Outcomes Alignment:

This module directly contributes to achieving the following course outcomes:

*   **CO4: Obtain kinematic model of robotic manipulators (Knowledge Level: K3)** - We will learn the mathematical tools to represent a robot's kinematics.
*   **CO5: Plan trajectories in joint space and Cartesian space (Knowledge Level: K3)** - We will explore methods for generating movement paths for robots.

---

## 1. Introduction to Robotic Kinematics

Kinematics is the study of motion without considering the forces that cause it. In robotics, kinematics deals with the geometrical relationships between the links and joints of a robot manipulator. It describes the relationship between the **joint variables** (angles or displacements of the joints) and the **position and orientation of the end-effector** (the robot's "hand" or tool).

### 1.1 Key Concepts and Definitions

*   **Robot Manipulator:** A mechanical arm consisting of a series of links connected by joints.
*   **Joints:** The movable connections between links. Common types include:
    *   **Revolute Joint:** Allows rotational motion (e.g., a hinge). Typically described by an angle (e.g., $\theta$).
    *   **Prismatic Joint:** Allows linear motion (e.g., a slider). Typically described by a displacement (e.g., $d$).
*   **Links:** The rigid segments connecting the joints.
*   **End-Effector:** The tool or gripper attached to the end of the manipulator, which interacts with the environment.
*   **Degrees of Freedom (DOF):** The number of independent parameters that define the configuration of a robot. For a manipulator, it's usually the number of controllable joints.
*   **Joint Space:** The space defined by the robot's joint variables (e.g., $(\theta_1, \theta_2, ..., \theta_n)$ for an n-DOF revolute robot).
*   **Task Space (Cartesian Space):** The space defined by the position and orientation of the end-effector in the robot's operational environment (e.g., $(x, y, z, \phi, \theta, \psi)$ for a 6-DOF Cartesian robot).

### 1.2 The Forward Kinematics Problem

**Definition:** Forward kinematics (FK) is the process of determining the position and orientation of the end-effector, given the values of all the robot's joint variables.

**Importance:**
*   Essential for understanding where the robot's end-effector is at any given time.
*   Used in simulation, visualization, and for verifying inverse kinematics solutions.
*   Forms the basis for understanding the robot's workspace.

**Methods for Solving Forward Kinematics:**

There are several methods to derive the forward kinematics equations, with **Denavit-Hartenberg (D-H) Convention** being the most widely used and systematic approach.

#### 1.2.1 Denavit-Hartenberg (D-H) Convention

The D-H convention provides a systematic way to describe the kinematic structure of a manipulator by assigning coordinate frames to each link. For each link $i$, we define a transformation from the coordinate frame of link $i-1$ to the coordinate frame of link $i$. This transformation is represented by a **4x4 homogeneous transformation matrix**.

**D-H Parameters:** For a robot with $n$ links, there are $n$ sets of D-H parameters, each defining the relationship between link $i-1$ and link $i$. These are:

1.  **$a_i$ (Link Length):** The distance between the common normal of the $z_{i-1}$ and $z_i$ axes, measured along the $x_i$ axis.
2.  **$\alpha_i$ (Link Twist):** The angle between the common normal of the $z_{i-1}$ and $z_i$ axes, measured about the $x_i$ axis.
3.  **$d_i$ (Link Offset):** The distance between the common normal of the $x_{i-1}$ and $x_i$ axes, measured along the $z_{i-1}$ axis. This is the variable for prismatic joints.
4.  **$\theta_i$ (Joint Angle):** The angle between the $x_{i-1}$ and $x_i$ axes, measured about the $z_{i-1}$ axis. This is the variable for revolute joints.

**Note:** The choice of which parameter is the "joint variable" (either $\theta_i$ or $d_i$) depends on the type of joint.

**D-H Transformation Matrix:** The transformation from frame $i$ to frame $i-1$, denoted as $A_{i-1}^i$, is given by the product of four basic transformations:

$A_{i-1}^i = \text{Trans}(x, a_{i-1}) \cdot \text{Rot}(x, \alpha_{i-1}) \cdot \text{Trans}(z, d_i) \cdot \text{Rot}(z, \theta_i)$

This can be expressed as a single homogeneous transformation matrix:

$A_{i-1}^i = \begin{bmatrix}
\cos \theta_i & -\sin \theta_i \cos \alpha_i & \sin \theta_i \sin \alpha_i & a_i \cos \theta_i \\
\sin \theta_i & \cos \theta_i \cos \alpha_i & -\cos \theta_i \sin \alpha_i & a_i \sin \theta_i \\
0 & \sin \alpha_i & \cos \alpha_i & d_i \\
0 & 0 & 0 & 1
\end{bmatrix}$

**Overall Transformation:** The position and orientation of the end-effector (frame $n$) with respect to the base frame (frame 0) is obtained by multiplying the individual link transformations:

$T_n^0 = A_0^1 \cdot A_1^2 \cdot A_2^3 \cdot \dots \cdot A_{n-1}^n$

Each $A_{i-1}^i$ represents the transformation from frame $i$ to frame $i-1$. So, $T_n^0$ represents the transformation from frame $n$ (end-effector) to frame 0 (base).

**Example (Simplified - 2-DOF Planar Manipulator):**

Consider a simple 2-DOF planar manipulator with two revolute joints and two links.

*   **Link 0 to Link 1:**
    *   $\theta_1$: Joint angle of joint 1.
    *   $d_1 = 0$ (assuming base link is fixed).
    *   $a_1$: Length of link 1.
    *   $\alpha_1 = 0$ (planar, so no twist).
*   **Link 1 to Link 2:**
    *   $\theta_2$: Joint angle of joint 2.
    *   $d_2 = 0$ (assuming revolute joint 2).
    *   $a_2$: Length of link 2.
    *   $\alpha_2 = 0$ (planar).

The transformation from link 1 to link 0 is:
$A_0^1 = \begin{bmatrix}
\cos \theta_1 & -\sin \theta_1 & 0 & a_1 \cos \theta_1 \\
\sin \theta_1 & \cos \theta_1 & 0 & a_1 \sin \theta_1 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}$

The transformation from link 2 to link 1 is:
$A_1^2 = \begin{bmatrix}
\cos \theta_2 & -\sin \theta_2 & 0 & a_2 \cos \theta_2 \\
\sin \theta_2 & \cos \theta_2 & 0 & a_2 \sin \theta_2 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}$

The end-effector pose with respect to the base is:
$T_2^0 = A_0^1 \cdot A_1^2 = \begin{bmatrix}
\cos(\theta_1+\theta_2) & -\sin(\theta_1+\theta_2) & 0 & a_1 \cos \theta_1 + a_2 \cos(\theta_1+\theta_2) \\
\sin(\theta_1+\theta_2) & \cos(\theta_1+\theta_2) & 0 & a_1 \sin \theta_1 + a_2 \sin(\theta_1+\theta_2) \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}$

The end-effector position $(x, y)$ is:
$x = a_1 \cos \theta_1 + a_2 \cos(\theta_1+\theta_2)$
$y = a_1 \sin \theta_1 + a_2 \sin(\theta_1+\theta_2)$

**Reference:**
*   **Saha, S. K. (2014).** Chapter 3: Kinematics of Robotic Manipulators.
*   **Craig, J. J. (2018).** Chapter 2: Kinematics.

#### 1.2.2 Other Methods (Brief Mention)

*   **Kinematic Model based on Screw Theory:** An alternative and more general approach for representing transformations and joint motions.
*   **Jacobian Matrix:** While primarily used for velocity kinematics, it can be related to the position kinematics.

### 1.3 The Inverse Kinematics Problem

**Definition:** Inverse kinematics (IK) is the process of determining the joint variables required to achieve a desired position and orientation of the end-effector.

**Importance:**
*   This is the problem that is typically solved in robot control to make the robot perform a task.
*   It's more challenging than forward kinematics.

**Challenges:**
*   **Non-linearity:** The relationship between joint variables and end-effector pose is non-linear.
*   **Multiple Solutions:** For a given end-effector pose, there might be multiple combinations of joint angles that achieve it (e.g., different arm configurations).
*   **No Solution:** The desired pose might be outside the robot's reachable workspace.
*   **Singularities:** Configurations where the robot loses one or more degrees of freedom, making certain motions impossible or requiring infinite joint velocities.

**Methods for Solving Inverse Kinematics:**

*   **Analytical (Geometric) Methods:**
    *   Suitable for robots with simpler kinematic structures (e.g., many PUMA-type robots).
    *   Involves geometric reasoning and solving sets of algebraic equations.
    *   Can yield closed-form solutions.

    **Example (2-DOF Planar Manipulator):**
    Given desired end-effector position $(x, y)$ and link lengths $a_1, a_2$.
    $x = a_1 \cos \theta_1 + a_2 \cos(\theta_1+\theta_2)$
    $y = a_1 \sin \theta_1 + a_2 \sin(\theta_1+\theta_2)$

    From trigonometry:
    $x^2 + y^2 = (a_1 + a_2 \cos \theta_2)^2 + (a_2 \sin \theta_2)^2$
    $x^2 + y^2 = a_1^2 + 2a_1 a_2 \cos \theta_2 + a_2^2 \cos^2 \theta_2 + a_2^2 \sin^2 \theta_2$
    $x^2 + y^2 = a_1^2 + a_2^2 + 2a_1 a_2 \cos \theta_2$

    $\cos \theta_2 = \frac{x^2 + y^2 - a_1^2 - a_2^2}{2a_1 a_2}$

    This gives $\theta_2 = \pm \arccos\left(\frac{x^2 + y^2 - a_1^2 - a_2^2}{2a_1 a_2}\right)$. The $\pm$ indicates two possible solutions for $\theta_2$.

    Once $\theta_2$ is found, $\theta_1$ can be found by:
    $k_1 = x \cos \theta_2 - y \sin \theta_2$
    $k_2 = y \cos \theta_2 + x \sin \theta_2$
    $\theta_1 = \text{atan2}(k_1, k_2)$ (using atan2 for proper quadrant handling)

*   **Numerical (Iterative) Methods:**
    *   Used for more complex robots or when analytical solutions are difficult or impossible to obtain.
    *   Involve using the Jacobian matrix.
    *   Methods include:
        *   **Jacobian Transpose Method:** Uses the transpose of the Jacobian.
        *   **Damped Least-Squares (DLS) Method:** A more robust variation of the Jacobian pseudo-inverse.
        *   **Newton-Raphson Method:** An iterative method for solving non-linear equations.

    The core idea is to start with an initial guess for the joint angles and iteratively refine them until the end-effector pose is close to the desired pose.

**Reference:**
*   **Schilling, R. J. (1996).** Chapter 4: Kinematics.
*   **Mittal, R. K., & Nagrath, I. J. (2003).** Chapter 5: Kinematics of Manipulators.
*   **Ghosal, A. (2006).** Chapter 3: Kinematics.

### 1.4 Robot Workspace

**Definition:** The workspace of a robot manipulator is the set of all points in the task space that the end-effector can reach.

**Types of Workspace:**

*   **Reachability Workspace:** The set of all reachable points, regardless of the end-effector's orientation. This is usually a 3D volume.
*   **Orientation Workspace:** The set of all reachable points for which the end-effector can also achieve a specific orientation. This is a subset of the reachability workspace.

**Importance:**
*   Crucial for determining the operational capabilities of a robot.
*   Helps in designing robot workcells and planning robot tasks.
*   Understanding workspace limitations is vital to avoid collisions or unreachable targets.

**How Workspace is Determined:**
*   By varying the joint variables over their entire range of motion and computing the corresponding end-effector poses using forward kinematics.
*   The shape of the workspace is highly dependent on the robot's kinematic structure (DOF, link lengths, joint types, joint limits).

**Example:**
*   A 2-DOF planar manipulator with two links of length $a_1$ and $a_2$ can reach any point within a circle of radius $a_1 + a_2$ centered at the base, but only points within an annulus defined by $|a_1 - a_2|$ and $a_1 + a_2$ if $a_1 \neq a_2$. The orientation is also constrained.
*   A 6-DOF industrial robot (like a PUMA or SCARA) has a more complex 3D workspace, often referred to as a "reachable volume."

**Reference:**
*   **Saha, S. K. (2014).** Chapter 3: Kinematics of Robotic Manipulators (Workspace Analysis).
*   **Craig, J. J. (2018).** Chapter 2: Kinematics (Workspace Analysis).

---

## 2. Motion Planning and Trajectory Generation

Motion planning is the process of finding a sequence of motions for a robot to move from a starting configuration to a goal configuration while satisfying certain constraints (e.g., avoiding obstacles, staying within joint limits, ensuring smooth motion). Trajectory generation is a key part of motion planning, defining the path and the timing of the movement.

### 2.1 Key Concepts and Definitions

*   **Path:** A geometric description of the motion from a start to a goal, without specifying the timing. A path can be in joint space or Cartesian space.
*   **Trajectory:** A path along which a robot moves, with the addition of timing information (i.e., how fast the robot moves along the path). This means the trajectory is a function of time.
*   **Configuration Space (C-space):** The space of all possible configurations of the robot. A configuration is a complete specification of the position of all parts of the robot. For an $n$-DOF robot, C-space is an $n$-dimensional space.
*   **Collision-Free Path:** A path in C-space where no part of the robot intersects with any obstacles in the environment.
*   **Obstacle:** Any object in the environment that the robot must avoid.
*   **Robot Controller:** The system that executes the generated trajectory by commanding the joint actuators.

### 2.2 Trajectory Generation in Joint Space

**Definition:** In joint space trajectory generation, the robot's path is defined in terms of the desired time evolution of its joint variables $(\theta_1(t), \theta_2(t), ..., \theta_n(t))$.

**Advantages:**
*   **Simpler to Implement:** The robot's controller directly commands the desired joint positions and velocities.
*   **Ensures Joint Limits are Met:** It's easier to ensure that joint angles stay within their physical limits.
*   **Often smoother than Cartesian space trajectories for complex paths:** The robot's end-effector will follow a complex path in Cartesian space as a result of smooth joint movements.

**Disadvantages:**
*   **Difficult to visualize end-effector path:** The resulting path of the end-effector in Cartesian space is not explicitly defined beforehand and can be complex.
*   **May not directly control end-effector behavior:** If a specific Cartesian path is required (e.g., drawing a straight line), it's hard to guarantee this from joint space planning alone.

**Methods for Joint Space Trajectory Generation:**

*   **Polynomial Interpolation:**
    *   Uses polynomial functions to define the joint trajectories over time intervals.
    *   **Linear Interpolation (Linear Segments):** Simple to implement, but results in abrupt changes in acceleration at segment endpoints, causing jerky motion.
    *   **Cubic Polynomials:** Provide continuous position and velocity, resulting in smoother motion. They require specifying position and velocity at start and end points.
    *   **Quintic Polynomials:** Provide continuous position, velocity, and acceleration, resulting in very smooth motion. They require specifying position, velocity, and acceleration at start and end points.

    **Example: Cubic Polynomial for a single joint:**
    For a joint $j$, to move from $\theta_{j,start}$ to $\theta_{j,end}$ in time $T$:
    $\theta_j(t) = a_0 + a_1 t + a_2 t^2 + a_3 t^3$
    We need to solve for coefficients $a_0, a_1, a_2, a_3$ using boundary conditions:
    $\theta_j(0) = \theta_{j,start}$
    $\dot{\theta}_j(0) = \dot{\theta}_{j,start}$ (often 0 for start)
    $\theta_j(T) = \theta_{j,end}$
    $\dot{\theta}_j(T) = \dot{\theta}_{j,end}$ (often 0 for end)

    Solving these equations yields the coefficients.

*   **Spline Interpolation (e.g., B-splines):**
    *   More complex but allows for finer control over the smoothness and shape of the trajectory.
    *   Splines are defined by a set of control points and basis functions.

**Reference:**
*   **Saha, S. K. (2014).** Chapter 4: Trajectory Planning.
*   **Craig, J. J. (2018).** Chapter 6: Motion Control (Trajectory Generation).

### 2.3 Trajectory Generation in Cartesian Space

**Definition:** In Cartesian space trajectory generation, the path of the end-effector is explicitly defined in terms of its position and orientation $(x(t), y(t), z(t), \dots)$ in the task space.

**Advantages:**
*   **Direct Control of End-Effector:** Allows precise control of the end-effector's movement, which is crucial for tasks like picking and placing, welding, or painting.
*   **Easier to define task-specific paths:** Straight lines, circles, or complex curves can be directly specified.

**Disadvantages:**
*   **Requires Inverse Kinematics:** To execute a Cartesian trajectory, the required joint angles at each point in time must be computed using inverse kinematics. This can be computationally intensive and may suffer from the IK challenges (multiple solutions, singularities).
*   **Potential for Joint Limit Violations or Singularities:** If the IK solution is not carefully managed, the robot might attempt to reach configurations that violate joint limits or encounter singularities.
*   **Smoothness:** Ensuring smooth Cartesian motion can be challenging due to the non-linear relationship between joint and Cartesian space.

**Methods for Cartesian Space Trajectory Generation:**

*   **Linear Segments:** The end-effector moves in a straight line from one Cartesian pose to another.
    *   Each Cartesian coordinate $(x, y, z)$ and orientation parameter $(\phi, \theta, \psi)$ is interpolated linearly over time.
    *   Requires re-calculating the inverse kinematics at each step to get the joint trajectory.

*   **Circular Segments:** The end-effector moves along a circular arc in Cartesian space.

*   **Polynomial Interpolation (in Cartesian space):** Similar to joint space, polynomials can be used to interpolate Cartesian positions and orientations.

**Considerations for Cartesian Space Trajectories:**

*   **Singularity Avoidance:** Paths that come close to singular configurations must be avoided.
*   **Joint Velocity Limits:** Even if the Cartesian path is smooth, the resulting joint velocities (computed via IK) must respect the robot's joint velocity limits. This often involves scaling the trajectory's time.
*   **Smoothness of IK Solution:** The sequence of IK solutions for a smooth Cartesian trajectory must also be smooth and avoid abrupt changes or jumps.

**Reference:**
*   **Saha, S. K. (2014).** Chapter 4: Trajectory Planning.
*   **Craig, J. J. (2018).** Chapter 6: Motion Control (Trajectory Generation).

---

## 3. Motion Planning Fundamentals

Motion planning is the broader problem of finding a sequence of movements to take a robot from a start state to a goal state in its environment. Trajectory generation is a part of this, focusing on the "how" of movement along a path.

### 3.1 Key Concepts and Definitions

*   **Configuration Space (C-space) Obstacles:** When planning in C-space, obstacles from the real world are transformed into obstacles in the configuration space.
*   **Path Planning Algorithms:** Algorithms that search for a valid path through C-space.
    *   **Sampling-Based Methods:**
        *   **Probabilistic Roadmaps (PRM):** Builds a graph (roadmap) of collision-free configurations and connections in C-space by randomly sampling points and connecting them if a straight path between them is collision-free.
        *   **Rapidly-exploring Random Trees (RRT):** Grows a tree from the start configuration by randomly sampling points and extending the tree towards them. Efficient for high-dimensional C-spaces.
    *   **Search-Based Methods:**
        *   **A\* Search:** A graph search algorithm that uses a heuristic function to guide the search towards the goal. Can be applied to discretized C-space.
        *   **Dijkstra's Algorithm:** Finds the shortest path in a graph.
    *   **Potential Field Methods:**
        *   Treats the robot's goal as an attractive force and obstacles as repulsive forces. The robot follows the gradient of the combined potential field.
        *   **Pros:** Simple, reactive.
        *   **Cons:** Can get stuck in local minima.

*   **Path Smoothing:** Once a path is found (often from sampling-based methods), it can be jagged. Smoothing algorithms are used to create a more continuous and executable trajectory.

### 3.2 Relation to Kinematics and Trajectory Generation

*   **Kinematics** provides the mathematical framework to define C-space and to compute the robot's configuration for any given set of joint values (FK) and vice-versa (IK).
*   **Motion Planning** uses this kinematic information to search for a collision-free path in C-space.
*   **Trajectory Generation** then takes the planned path and imbues it with timing information, turning the geometric path into an executable sequence of joint commands over time.

**Example:**
Imagine a robot arm needs to pick up an object.
1.  **Kinematics:** We use D-H parameters to describe the robot. We can calculate the end-effector's position and orientation for any set of joint angles.
2.  **Motion Planning:** If there's a table between the robot's home position and the object, a path planner would find a sequence of joint configurations that moves the arm around the table. This might involve an RRT algorithm to explore C-space.
3.  **Trajectory Generation:** Once a collision-free sequence of joint configurations (path) is found, a cubic polynomial planner would be used to generate smooth joint-space trajectories for each joint to move between these configurations over time, ensuring the arm reaches the object's location at the desired speed.

**Reference:**
*   **Ghosal, A. (2006).** Chapter 5: Motion Planning.
*   **Craig, J. J. (2018).** Chapter 6: Motion Control (Motion Planning).

---

## Important Points to Remember:

*   **Forward Kinematics (FK):** Joint angles $\rightarrow$ End-effector pose. Solved using D-H parameters and transformation matrices.
*   **Inverse Kinematics (IK):** Desired End-effector pose $\rightarrow$ Required joint angles. More complex, can have multiple or no solutions, and involves singularities.
*   **Workspace:** The set of reachable end-effector poses. Dictated by robot geometry and joint limits.
*   **Joint Space vs. Cartesian Space:** Planning motions in terms of joint angles versus end-effector coordinates. Joint space is generally simpler for control; Cartesian space offers direct end-effector control.
*   **Trajectory:** Path + Timing. Crucial for smooth and controlled robot motion.
*   **Polynomials (Cubic, Quintic):** Common methods for smooth trajectory generation in both joint and Cartesian space.
*   **Motion Planning:** Broader problem of finding collision-free paths in Configuration Space. Includes algorithms like PRM, RRT, and potential fields.

---

## Practice Questions and Exercises

**Section 1: Kinematics**

1.  **Question:** For a revolute joint, which parameter describes the motion?
    **Answer:** $\theta$ (Joint Angle)
2.  **Question:** What is the primary purpose of the Denavit-Hartenberg (D-H) convention in robotics?
    **Answer:** To provide a systematic method for assigning coordinate frames to robot links and deriving the transformation matrices between consecutive links.
3.  **Question:** If you are given the lengths of the links of a 2-DOF planar robot and the desired position $(x, y)$ for its end-effector, what problem are you trying to solve to find the joint angles?
    **Answer:** Inverse Kinematics.
4.  **Question:** Briefly explain the difference between the reachability workspace and the orientation workspace.
    **Answer:** Reachability workspace is the set of all points the end-effector can reach, irrespective of orientation. Orientation workspace is the subset of reachable points where a specific orientation can also be achieved.
5.  **Question:** Consider a simple 2-DOF planar robot with link lengths $L_1$ and $L_2$. If $L_1 = 1m$ and $L_2 = 0.5m$, calculate the joint angles $(\theta_1, \theta_2)$ for the end-effector to be at $(x, y) = (1.2, 0.5)$. (Assume $\theta_1$ is the angle of the first link with the x-axis and $\theta_2$ is the angle of the second link relative to the first link).
    **Answer:**
    *   $r^2 = x^2 + y^2 = (1.2)^2 + (0.5)^2 = 1.44 + 0.25 = 1.69 \Rightarrow r = 1.3$
    *   $\cos \theta_2 = \frac{r^2 - L_1^2 - L_2^2}{2 L_1 L_2} = \frac{1.69 - 1^2 - 0.5^2}{2 \times 1 \times 0.5} = \frac{1.69 - 1 - 0.25}{1} = 0.44$
    *   $\theta_2 = \arccos(0.44) \approx 63.89^\circ$ (or $-63.89^\circ$)
    *   Let's use $\theta_2 \approx 63.89^\circ$.
    *   $\theta_1 = \text{atan2}(y, x) - \theta_2$ (This is using a simplified geometric approach. Using the formula derived earlier:
    *   $k_1 = x \cos \theta_2 - y \sin \theta_2 = 1.2 \cos(63.89^\circ) - 0.5 \sin(63.89^\circ) \approx 1.2 \times 0.44 - 0.5 \times 0.90 \approx 0.528 - 0.45 = 0.078$
    *   $k_2 = y \cos \theta_2 + x \sin \theta_2 = 0.5 \cos(63.89^\circ) + 1.2 \sin(63.89^\circ) \approx 0.5 \times 0.44 + 1.2 \times 0.90 \approx 0.22 + 1.08 = 1.30$
    *   $\theta_1 = \text{atan2}(k_1, k_2) = \text{atan2}(0.078, 1.30) \approx 3.37^\circ$
    *   So, $(\theta_1, \theta_2) \approx (3.37^\circ, 63.89^\circ)$ or $(3.37^\circ, -63.89^\circ)$ depending on the choice for $\theta_2$.

**Section 2: Trajectory Generation**

6.  **Question:** When generating a trajectory in joint space, what is being directly controlled as a function of time?
    **Answer:** The joint variables (angles or displacements) of the robot.
7.  **Question:** What is a key advantage of generating trajectories in joint space compared to Cartesian space?
    **Answer:** Easier implementation and direct control of joint motors, making it simpler to respect joint limits and avoid singularities.
8.  **Question:** What additional information does a trajectory have compared to a path?
    **Answer:** Timing information (velocity and acceleration profiles).
9.  **Question:** Why are quintic polynomials often preferred for trajectory generation over linear or cubic polynomials?
    **Answer:** Quintic polynomials ensure continuity of position, velocity, and acceleration at the start and end of the trajectory, resulting in smoother, jerk-free motion.
10. **Question:** If you need a robot to draw a perfectly straight line with its end-effector, in which space would you ideally plan the trajectory, and why?
    **Answer:** Cartesian space, because it directly defines the end-effector's geometric path. However, this requires careful inverse kinematics to convert to joint space for execution.

---
This concludes Module 3. You have now covered the fundamentals of robotic kinematics and the principles of motion planning and trajectory generation. These concepts are essential for understanding how to control robot movements effectively.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
