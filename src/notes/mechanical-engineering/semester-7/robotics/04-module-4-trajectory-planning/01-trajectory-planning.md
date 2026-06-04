---
title: "Trajectory Planning"
subject: "ROBOTICS"
module: "Module 4: Trajectory Planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464255"
status: "completed"
scrapedAt: "2026-05-20T18:18:49.490Z"
---
# ROBOTICS - Module 4: Trajectory Planning

## Topic: Trajectory Planning

**Course Outcomes Addressed:** CO3 (Knowledge Level: K4, K5)

---

### 1. Introduction to Trajectory Planning

**Definition:** Trajectory planning is the process of generating a sequence of configurations (positions and orientations) for a robot's end-effector or its joints over time to move from a starting point to a desired goal point while satisfying various constraints. It essentially defines the robot's motion path and the timing of that motion.

**Why is Trajectory Planning Crucial?**

*   **Task Accomplishment:** Enables the robot to perform specific tasks like pick-and-place, welding, painting, etc.
*   **Smooth Motion:** Ensures that the robot moves smoothly, avoiding jerky movements that can damage the robot or its environment.
*   **Collision Avoidance:** A primary goal is to plan trajectories that do not result in collisions with obstacles in the workspace or with the robot's own links.
*   **Efficiency:** Optimizes the motion for speed, energy consumption, and time.
*   **Accuracy:** Helps in achieving the desired precision in reaching target locations.

**Key Concepts:**

*   **Configuration:** A complete description of the robot's position and orientation. For a serial manipulator, this is typically represented by the joint variables (angles for revolute joints, displacements for prismatic joints).
*   **End-Effector:** The part of the robot that interacts with the environment (e.g., gripper, welding torch).
*   **Workspace:** The set of all points in space that the robot's end-effector can reach.
*   **Path:** A sequence of points in the robot's configuration space or Cartesian space that the robot's end-effector must follow.
*   **Trajectory:** A path with an associated timing law, specifying the velocity and acceleration along the path. It's a path parameterized by time.

**Textbook References:**

*   **Schilling (1996):** Discusses trajectory generation as a fundamental step in robot control.
*   **Craig (2002):** Provides a thorough treatment of trajectory planning in both joint space and Cartesian space.
*   **Saha (McGraw Hill):** Covers the mathematical foundations and practical aspects of trajectory generation.
*   **Mittal (2003):** Explores trajectory planning in the context of robotic control systems.
*   **Ghosal (Oxford):** Offers analytical methods for trajectory planning.
*   **Deb (Second Edition):** Delves into flexible automation and the role of trajectory planning.
*   **Siegwart & Nourbakhsh (Second Edition):** Focuses on mobile robot trajectory planning.

---

### 2. Types of Trajectories

Trajectories can be planned in two primary spaces:

#### 2.1. Joint Space Trajectories

*   **Definition:** In joint space trajectory planning, we directly specify the desired path of each individual joint of the robot. The sequence of joint angles (or displacements) is generated over time.
*   **Representation:** A trajectory in joint space is a set of functions $\mathbf{q}(t) = [q_1(t), q_2(t), \ldots, q_n(t)]^T$, where $q_i(t)$ is the desired value of the $i$-th joint variable at time $t$.
*   **Advantages:**
    *   **Simpler to generate:** The mathematical complexity is lower as we deal with individual joint variables.
    *   **Guaranteed joint limits satisfaction:** It's easier to ensure that individual joint positions, velocities, and accelerations stay within their physical limits.
    *   **Avoids singularities (mostly):** While not entirely eliminating singularity issues, planning in joint space can sometimes bypass configurations that might be problematic in Cartesian space.
*   **Disadvantages:**
    *   **Difficult to control end-effector path:** The actual path of the end-effector in Cartesian space is not directly controlled and can be complex and unpredictable. This makes it unsuitable for tasks requiring precise Cartesian path following.
*   **Common Trajectory Generation Methods in Joint Space:**
    *   **Linear Interpolation:** Simple linear movement between two joint configurations. Results in constant velocity and zero acceleration (which is often not desired).
    *   **Cubic Polynomials:** A common and effective method. Allows specification of initial and final position, velocity, and even acceleration.
        *   A cubic polynomial for a single joint $q(t)$ can be represented as:
            $q(t) = a_0 + a_1 t + a_2 t^2 + a_3 t^3$
        *   To define a trajectory between $q_{start}$ and $q_{end}$ from $t=0$ to $t=T$:
            *   $q(0) = q_{start}$
            *   $q(T) = q_{end}$
            *   $\dot{q}(0) = \dot{q}_{start}$ (often set to 0 for smoother start)
            *   $\dot{q}(T) = \dot{q}_{end}$ (often set to 0 for smoother stop)
        *   This gives four equations to solve for the four coefficients ($a_0, a_1, a_2, a_3$).
    *   **Quintic Polynomials:** Used when initial and final accelerations are also specified, providing even smoother motion.
        *   A quintic polynomial for a single joint $q(t)$ can be represented as:
            $q(t) = a_0 + a_1 t + a_2 t^2 + a_3 t^3 + a_4 t^4 + a_5 t^5$
        *   This allows for specification of initial and final position, velocity, and acceleration, providing 6 constraints to solve for 6 coefficients.
*   **Example:** Moving a robot arm from a home position to a pick-up position. The trajectory would be a set of joint angle sequences over time.

#### 2.2. Cartesian Space (Task Space) Trajectories

*   **Definition:** In Cartesian space trajectory planning, we specify the desired path of the robot's end-effector in terms of its position and orientation in the 3D Cartesian coordinate system.
*   **Representation:** A trajectory in Cartesian space is a sequence of end-effector poses $\mathbf{X}(t) \in SE(3)$, which can be represented by a homogeneous transformation matrix $T(t) = \begin{bmatrix} R(t) & \mathbf{p}(t) \\ \mathbf{0}^T & 1 \end{bmatrix}$, where $R(t)$ is the orientation (rotation matrix) and $\mathbf{p}(t)$ is the position vector.
*   **Advantages:**
    *   **Direct control of end-effector path:** Essential for tasks that require following a specific geometric path in the workspace (e.g., drawing a circle, welding along a line).
*   **Disadvantages:**
    *   **More complex to generate:** Requires the use of inverse kinematics to convert the desired Cartesian trajectory into joint space trajectories. This conversion can be computationally intensive and may have multiple solutions or no solutions.
    *   **Potential for singularities:** As the robot approaches singular configurations, joint velocities can become very high, even for slow end-effector motion, which can be problematic.
    *   **Requires continuous inverse kinematics solutions:** The entire Cartesian trajectory must be continuously invertible into joint space.
*   **Generation Process:**
    1.  **Define Cartesian path:** Specify the desired sequence of end-effector positions and orientations. This can be a straight line, a curve, or a series of waypoints.
    2.  **Interpolate in Cartesian space:** Generate a sequence of poses along the defined path.
    3.  **Convert to Joint Space:** For each Cartesian pose, use the robot's inverse kinematics solver to find the corresponding joint angles.
    4.  **Generate Joint Space Trajectories:** Apply joint space trajectory generation techniques (e.g., cubic or quintic polynomials) to the sequence of joint angles obtained in the previous step.
*   **Example:** A robot performing a painting operation on a curved surface. The trajectory needs to follow the surface's contour precisely.

**Textbook References:**

*   **Craig (2002):** Dedicated chapters on motion planning and trajectory generation in both joint and Cartesian space.
*   **Schilling (1996):** Discusses the transformation between Cartesian and joint space for trajectory generation.
*   **Ghosal (Oxford):** Provides mathematical frameworks for representing and generating trajectories in both spaces.
*   **Siciliano, Khatib (Handbook):** Covers advanced topics in motion planning and control, including Cartesian path following.
*   **Lynch & Park (Modern Robotics):** Offers a comprehensive treatment of motion planning, including interpolation in SE(3) and its conversion to joint space.

---

### 3. Path Specification and Interpolation

Once a path is defined (either in joint space or Cartesian space), we need to specify how the robot moves along it. This involves generating intermediate points and defining the timing.

#### 3.1. Linear Interpolation

*   **Joint Space:** For two joint configurations $\mathbf{q}_{start}$ and $\mathbf{q}_{end}$, a linear path is given by:
    $\mathbf{q}(s) = (1-s)\mathbf{q}_{start} + s\mathbf{q}_{end}$, where $s \in [0, 1]$.
    To add time, we can let $s(t) = t/T$, where $T$ is the total time.
    $\mathbf{q}(t) = (1 - t/T)\mathbf{q}_{start} + (t/T)\mathbf{q}_{end}$, for $t \in [0, T]$.
    This results in constant velocity: $\dot{\mathbf{q}}(t) = (\mathbf{q}_{end} - \mathbf{q}_{start})/T$.
*   **Cartesian Space:** For two end-effector poses $\mathbf{X}_{start}$ and $\mathbf{X}_{end}$:
    *   **Linear Interpolation of Position:** $\mathbf{p}(s) = (1-s)\mathbf{p}_{start} + s\mathbf{p}_{end}$.
    *   **Spherical Linear Interpolation (Slerp) of Orientation:** For rotation matrices, simple linear interpolation of Euler angles can lead to Gimbal lock or non-uniform rotation. Slerp interpolates along the shortest arc of a great circle on the unit sphere of rotations, ensuring smooth orientation changes.
        *   If $\mathbf{X}_{start}$ corresponds to rotation $\mathbf{R}_{start}$ and $\mathbf{X}_{end}$ to $\mathbf{R}_{end}$, the interpolation is performed on the quaternion representation or directly on rotation matrices.
        *   A general form: $\mathbf{R}(s) = \mathbf{R}_{start} (\mathbf{R}_{start}^{-1} \mathbf{R}_{end})^s$, where $s \in [0,1]$.

#### 3.2. Polynomial Interpolation

*   **Joint Space (as discussed in 2.1):** Cubic and Quintic polynomials are widely used to generate smooth trajectories with specified start and end velocities and accelerations. These polynomial segments are often joined together to form a complete trajectory between multiple waypoints.
*   **Cartesian Space:**
    *   Polynomials can be used to interpolate the position vector $\mathbf{p}(t)$ and the orientation parameters (e.g., Euler angles, quaternions, or axis-angle representations) independently.
    *   A common approach for Cartesian trajectories between waypoints involves:
        1.  Defining a series of Cartesian poses $\{\mathbf{X}_0, \mathbf{X}_1, \ldots, \mathbf{X}_N\}$.
        2.  For each segment $i$ (from $\mathbf{X}_i$ to $\mathbf{X}_{i+1}$), determine the required joint space trajectory.
        3.  This often involves generating an intermediate sequence of joint configurations that follow a smooth path in joint space between the IK solutions of $\mathbf{X}_i$ and $\mathbf{X}_{i+1}$.

**Textbook References:**

*   **Craig (2002):** Details linear and polynomial interpolation methods.
*   **Lynch & Park (Modern Robotics):** Explains interpolation in SE(3) thoroughly, including Slerp.
*   **Saha (McGraw Hill):** Presents the mathematics of polynomial trajectory generation.

---

### 4. Trajectory Generation Algorithms

This section focuses on how to compute the intermediate points and velocities for a trajectory.

#### 4.1. Point-to-Point vs. Continuous Path Trajectories

*   **Point-to-Point:** The robot only needs to move from a starting point to an ending point. The path between them is not critical, as long as it's feasible and avoids obstacles. Velocity at the start and end points are often zero.
*   **Continuous Path:** The robot must follow a specific path in space. This is more demanding and requires precise control over the end-effector's motion.

#### 4.2. Generating Polynomial Trajectories (Joint Space)

Let's detail the cubic polynomial generation for a single joint $q(t)$.
We want to move from $q_{start}$ at $t=0$ to $q_{end}$ at $t=T$, with desired velocities $\dot{q}_{start}$ and $\dot{q}_{end}$.

The polynomial is: $q(t) = a_0 + a_1 t + a_2 t^2 + a_3 t^3$.
Its derivative is: $\dot{q}(t) = a_1 + 2a_2 t + 3a_3 t^2$.

Applying the boundary conditions:
1.  $q(0) = a_0 = q_{start}$
2.  $\dot{q}(0) = a_1 = \dot{q}_{start}$
3.  $q(T) = a_0 + a_1 T + a_2 T^2 + a_3 T^3 = q_{end}$
4.  $\dot{q}(T) = a_1 + 2a_2 T + 3a_3 T^2 = \dot{q}_{end}$

Substitute (1) and (2) into (3) and (4):
3.  $q_{start} + \dot{q}_{start} T + a_2 T^2 + a_3 T^3 = q_{end}$
    $a_2 T^2 + a_3 T^3 = q_{end} - q_{start} - \dot{q}_{start} T$ (Eq. A)
4.  $\dot{q}_{start} + 2a_2 T + 3a_3 T^2 = \dot{q}_{end}$
    $2a_2 T + 3a_3 T^2 = \dot{q}_{end} - \dot{q}_{start}$ (Eq. B)

Now we have a system of two linear equations (Eq. A and Eq. B) for two unknowns ($a_2$, $a_3$).
From Eq. B, multiply by $T$: $2a_2 T^2 + 3a_3 T^3 = (\dot{q}_{end} - \dot{q}_{start})T$.
Let $\Delta q = q_{end} - q_{start}$, $\Delta \dot{q} = \dot{q}_{end} - \dot{q}_{start}$.
Eq. A: $a_2 T^2 + a_3 T^3 = \Delta q - \dot{q}_{start} T$
From Eq. B: $2a_2 T^2 + 3a_3 T^2 = \Delta \dot{q}$

Solving these:
Multiply Eq. A by 2: $2a_2 T^2 + 2a_3 T^3 = 2(\Delta q - \dot{q}_{start} T)$
Subtract this from $2a_2 T^2 + 3a_3 T^2 = \Delta \dot{q}$:
$(3a_3 T^2) - (2a_3 T^3) = \Delta \dot{q} - 2(\Delta q - \dot{q}_{start} T)$  *(Correction: the T for $a_3$ in Eq B is $T^2$, not $T^3$)*

Let's restart the system solution for $a_2, a_3$:
Eq. A: $a_2 T^2 + a_3 T^3 = q_{end} - q_{start} - \dot{q}_{start} T$
Eq. B: $2a_2 T + 3a_3 T^2 = \dot{q}_{end} - \dot{q}_{start}$

From Eq. B, isolate $2a_2 T$:
$2a_2 T = (\dot{q}_{end} - \dot{q}_{start}) - 3a_3 T^2$
$a_2 T = \frac{1}{2}(\dot{q}_{end} - \dot{q}_{start}) - \frac{3}{2}a_3 T^2$
$a_2 = \frac{1}{2T}(\dot{q}_{end} - \dot{q}_{start}) - \frac{3}{2T}a_3 T^2$

Substitute this $a_2$ into Eq. A:
$(\frac{1}{2T}(\dot{q}_{end} - \dot{q}_{start}) - \frac{3}{2T}a_3 T^2) T^2 + a_3 T^3 = q_{end} - q_{start} - \dot{q}_{start} T$
$\frac{1}{2}(\dot{q}_{end} - \dot{q}_{start}) T - \frac{3}{2}a_3 T^3 + a_3 T^3 = q_{end} - q_{start} - \dot{q}_{start} T$
$\frac{1}{2}(\dot{q}_{end} - \dot{q}_{start}) T - \frac{1}{2}a_3 T^3 = q_{end} - q_{start} - \dot{q}_{start} T$
$\frac{1}{2}a_3 T^3 = \frac{1}{2}(\dot{q}_{end} - \dot{q}_{start}) T - (q_{end} - q_{start} - \dot{q}_{start} T)$
$a_3 T^3 = (\dot{q}_{end} - \dot{q}_{start}) T - 2(q_{end} - q_{start}) + 2\dot{q}_{start} T$
$a_3 T^3 = (\dot{q}_{end} + \dot{q}_{start}) T - 2(q_{end} - q_{start})$
$a_3 = \frac{(\dot{q}_{end} - \dot{q}_{start})}{T^2} - \frac{2(q_{end} - q_{start})}{T^3}$

Now substitute $a_3$ back to find $a_2$:
$2a_2 T = (\dot{q}_{end} - \dot{q}_{start}) - 3a_3 T^2$
$a_2 = \frac{(\dot{q}_{end} - \dot{q}_{start})}{2T} - \frac{3}{2T}(T^2 \cdot a_3)$
$a_2 = \frac{(\dot{q}_{end} - \dot{q}_{start})}{2T} - \frac{3}{2T} \left( T^2 \left( \frac{(\dot{q}_{end} - \dot{q}_{start})}{T^2} - \frac{2(q_{end} - q_{start})}{T^3} \right) \right)$
$a_2 = \frac{(\dot{q}_{end} - \dot{q}_{start})}{2T} - \frac{3}{2} (\dot{q}_{end} - \dot{q}_{start}) + \frac{3}{2T} \frac{2(q_{end} - q_{start})}{T}$
$a_2 = \frac{(\dot{q}_{end} - \dot{q}_{start})}{2T} - \frac{3}{2} (\dot{q}_{end} - \dot{q}_{start}) + \frac{3(q_{end} - q_{start})}{T^2}$
$a_2 = -\frac{5}{2} \frac{(\dot{q}_{end} - \dot{q}_{start})}{1} + \frac{3(q_{end} - q_{start})}{T^2}$ *(Mistake in simplification, let's use a clearer formula derivation)*

**Standard formulas for cubic polynomial coefficients:**
Let $\Delta q = q_{end} - q_{start}$ and $\Delta \dot{q} = \dot{q}_{end} - \dot{q}_{start}$.
$a_0 = q_{start}$
$a_1 = \dot{q}_{start}$
$a_2 = \frac{3\Delta q}{T^2} - \frac{2\Delta \dot{q}}{T}$
$a_3 = -\frac{2\Delta q}{T^3} + \frac{\Delta \dot{q}}{T^2}$

These coefficients allow you to define $q(t)$ and $\dot{q}(t)$ for any time $t \in [0, T]$.

**Quintic Polynomials:**
For $q(t) = a_0 + a_1 t + a_2 t^2 + a_3 t^3 + a_4 t^4 + a_5 t^5$, and specified $q_{start}, \dot{q}_{start}, \ddot{q}_{start}$ and $q_{end}, \dot{q}_{end}, \ddot{q}_{end}$, we have 6 conditions and 6 unknowns. The solution yields the coefficients.

#### 4.3. Generating Trajectories for Multiple Waypoints

To move between a sequence of waypoints $\{\mathbf{p}_0, \mathbf{p}_1, \ldots, \mathbf{p}_N\}$, we can generate a trajectory for each segment $(\mathbf{p}_i, \mathbf{p}_{i+1})$ and concatenate them.
*   **Joint Space:** Generate cubic or quintic polynomial trajectories for each joint between the corresponding joint angles of consecutive waypoints. The velocity at the end of one segment must match the velocity at the start of the next segment for smooth transitions.
*   **Cartesian Space:** This is more complex. One common approach is to generate intermediate Cartesian poses along the path of each segment and then solve IK for each pose. However, directly generating a smooth joint-space trajectory that passes through the IK solutions of consecutive Cartesian waypoints is often preferred. This can be achieved by generating a spline in joint space that interpolates the IK solutions.

**Textbook References:**

*   **Craig (2002):** Excellent coverage of point-to-point vs. continuous path motion and polynomial generation.
*   **Saha (McGraw Hill):** Provides the mathematical derivation for polynomial coefficients.
*   **Mittal (2003):** Discusses trajectory generation for multi-segment paths.
*   **Ghosal (Oxford):** Analytical methods for generating trajectories.

---

### 5. Constraints in Trajectory Planning

Effective trajectory planning must consider various constraints:

*   **Joint Limits:**
    *   **Position Limits:** Each joint $q_i$ must remain within its minimum ($q_{i,min}$) and maximum ($q_{i,max}$) allowable angles/displacements.
    *   **Velocity Limits:** The rate of change of each joint variable $|\dot{q}_i|$ must be within its limit $|\dot{q}_{i,max}|$.
    *   **Acceleration Limits:** The rate of change of joint velocity $|\ddot{q}_i|$ must be within its limit $|\ddot{q}_{i,max}|$. These are crucial for actuator control and smooth motion.
*   **Torque/Force Limits:** The torques or forces required to achieve the planned motion must not exceed the capabilities of the robot's actuators.
*   **Workspace Boundaries:** The end-effector must remain within the reachable workspace.
*   **Collision Avoidance:** The robot's links and end-effector must not collide with obstacles in the environment or with itself. This often involves path planning algorithms in addition to trajectory generation.
*   **Singularity Avoidance:** The robot should not operate in or near singular configurations where its kinematic manipulability is lost, leading to infinite joint velocities for finite end-effector velocities.
*   **Time Constraints:** The total time taken for the task might be specified.

**How Constraints Affect Planning:**

*   **Joint Velocity Limits:** When generating polynomial trajectories, the desired velocities $\dot{q}_{start}$ and $\dot{q}_{end}$ must be chosen such that the maximum velocity commanded by the polynomial stays within $\dot{q}_{i,max}$. If not, the time $T$ must be increased, or the acceleration limits might need to be adjusted.
*   **Acceleration Limits:** These are directly incorporated into the choice of polynomial degree and the boundary conditions. Using lower acceleration will generally require more time.
*   **Collision Avoidance:** This is a higher-level planning problem. Once a collision-free path is found, trajectory generation ensures smooth motion along that path while respecting velocity/acceleration constraints.

**Textbook References:**

*   **Craig (2002):** Discusses joint limits and their impact on motion planning.
*   **Schilling (1996):** Covers manipulator dynamics and how actuator limits influence trajectory generation.
*   **Siegwart & Nourbakhsh (Second Edition):** Addresses constraints for mobile robots, including motor capabilities and navigation.
*   **Siciliano, Khatib (Handbook):** Advanced treatments of constrained motion planning.

---

### 6. Time Scaling and Velocity Control

When a path is defined, we can parameterize it with time. Time scaling allows us to control the speed of execution while maintaining the shape of the path.

*   **Uniform Time Scaling:** If a path $\mathbf{q}(s)$ is parameterized by $s \in [0,1]$, we can introduce a time scaling function $s(t)$ such that $s(0)=0$ and $s(T)=1$.
    *   The simplest is linear: $s(t) = t/T$. This gives constant velocity along the path.
    *   To achieve smooth starts and stops (zero velocity at $s=0$ and $s=1$), we can use polynomial time scaling, similar to how we generate joint trajectories. A quintic polynomial for $s(t)$ is common, allowing specification of $s(0), \dot{s}(0), \ddot{s}(0)$ and $s(T), \dot{s}(T), \ddot{s}(T)$.
*   **Velocity Profile Generation:** This involves creating a velocity profile over time that respects velocity and acceleration limits.
    *   A common approach is to create a trapezoidal or triangular velocity profile.
    *   **Trapezoidal Velocity Profile:**
        1.  **Acceleration Phase:** Accelerate from rest (0 velocity) to a maximum velocity $V_{max}$ with acceleration $A_{max}$ for time $t_a = V_{max}/A_{max}$.
        2.  **Constant Velocity Phase:** Move at $V_{max}$ for time $t_c$.
        3.  **Deceleration Phase:** Decelerate from $V_{max}$ to rest (0 velocity) with deceleration $-A_{max}$ for time $t_d = V_{max}/A_{max}$.
    *   The total distance covered is $D = \frac{1}{2} A_{max} t_a^2 + V_{max} t_c + \frac{1}{2} A_{max} t_d^2$.
    *   If the required distance $D$ and maximum velocity $V_{max}$ are given, we can determine the time parameters. If the calculated time $t_a + t_c + t_d$ exceeds available time or if $V_{max}$ is too high for the distance, the profile needs adjustment (e.g., lower $V_{max}$ or lower acceleration).

**Textbook References:**

*   **Craig (2002):** Discusses velocity profiles and their generation.
*   **Schilling (1996):** Explains time scaling and velocity control for robot motion.
*   **Mittal (2003):** Covers methods for generating velocity profiles.

---

### 7. Obstacle Avoidance in Trajectory Planning

Obstacle avoidance is a critical aspect and can be integrated into trajectory planning in several ways:

*   **Pre-computation/Path Planning:**
    *   First, find a collision-free path in configuration space or workspace using algorithms like:
        *   **Visibility Graphs:** Connects start, goal, and obstacle vertices.
        *   **Roadmap Methods (e.g., PRM):** Builds a graph of reachable configurations.
        *   **Cell Decomposition:** Divides the workspace into cells.
        *   **Artificial Potential Fields:** Creates repulsive forces from obstacles and attractive forces towards the goal.
    *   Once a path is generated, trajectory planning generates the timing and smooth motion along this path.
*   **Reactive Obstacle Avoidance:**
    *   During motion, if an obstacle is detected that was not in the original map, the robot can reactively adjust its trajectory.
    *   **Potential Fields:** The robot moves towards the goal, but if it gets too close to an obstacle, a repulsive force pushes it away, modifying the trajectory in real-time.
    *   **Dynamic Window Approach (for mobile robots):** Considers the robot's dynamics to predict reachable states in the next time step and selects a velocity that moves it towards the goal while avoiding collisions.

**Important Note:** While this module focuses on *trajectory planning* (generating motion over time), it's often done in conjunction with *path planning* (finding a collision-free sequence of configurations). Collision avoidance is a high-level objective that constrains trajectory planning.

**Textbook References:**

*   **Siegwart & Nourbakhsh (Second Edition):** Primarily focuses on mobile robot navigation and obstacle avoidance.
*   **Craig (2002):** Touches upon obstacle avoidance in the context of motion planning.
*   **Siciliano, Khatib (Handbook):** Advanced algorithms for collision avoidance.
*   **Lynch & Park (Modern Robotics):** Discusses motion planning in the presence of obstacles.

---

### 8. Practical Considerations and Summary

*   **Real-time Generation vs. Pre-computation:** Some trajectories can be computed offline and stored, while others, especially in dynamic environments, need to be generated in real-time.
*   **Computational Complexity:** Cartesian space planning is generally more computationally expensive than joint space planning due to the need for inverse kinematics.
*   **Smoothness:** Using higher-order polynomials (like quintic) or splines leads to smoother motion, reducing wear on actuators and improving task quality.
*   **Workspace Limitations:** Always consider the robot's physical workspace limits and joint limits during planning.
*   **End-effector Orientation:** For Cartesian paths, managing the end-effector's orientation smoothly is as important as its position.

**Key Takeaways:**

*   Trajectory planning defines how a robot moves over time, bridging the gap between a desired path and actual robot motion.
*   Joint space trajectories are simpler to generate and better for respecting joint limits, but don't directly control the end-effector path.
*   Cartesian space trajectories directly control the end-effector path but require inverse kinematics and can be more prone to singularity issues.
*   Polynomials (cubic, quintic) are common for generating smooth trajectories with specified initial/final conditions.
*   Constraints (joint limits, velocity limits, collision avoidance) are fundamental to realistic trajectory planning.

---

### 9. Practice Questions and Answers

**Question 1:**
What is the primary difference between a path and a trajectory?
*   **Answer:** A path is a geometric sequence of configurations, while a trajectory is a path with an associated time law, specifying velocity and acceleration.

**Question 2:**
List two advantages of planning trajectories in joint space.
*   **Answer:**
    1.  Simpler to generate (mathematically).
    2.  Easier to ensure individual joint limits are met.

**Question 3:**
When would you choose to plan a trajectory in Cartesian space? Give an example task.
*   **Answer:** You would choose Cartesian space planning when the end-effector needs to follow a precise geometric path in the workspace. Example: A robot welding along a straight line or a curved seam.

**Question 4:**
Given a desired start point $q_{start}$, end point $q_{end}$, and zero initial and final velocities, what type of polynomial is typically used for smooth trajectory generation in joint space?
*   **Answer:** A cubic polynomial is sufficient, as it has 4 coefficients and can satisfy 4 conditions (start/end position and velocity). (Note: While cubic works, quintic could also be used to explicitly specify zero acceleration at the start/end for even smoother motion).

**Question 5:**
What is Slerp, and why is it used in Cartesian space trajectory planning?
*   **Answer:** Slerp stands for Spherical Linear Interpolation. It's used for interpolating orientations (represented by rotation matrices or quaternions) smoothly along the shortest arc on the sphere of rotations. It's preferred over linear interpolation of Euler angles to avoid Gimbal lock and ensure uniform rotation.

**Question 6:**
If a robot's joint velocity limit is $\pm 10 \text{ rad/s}$, and you are generating a trajectory between two points that requires a constant velocity of $15 \text{ rad/s}$ for a certain duration, what must be done?
*   **Answer:** The trajectory must be modified. This could involve increasing the total time for the movement, which would reduce the required velocity, or planning a trajectory that respects the $10 \text{ rad/s}$ limit (potentially leading to a longer travel time or lower average speed).

---

This concludes the study notes for Trajectory Planning. Remember to consult the provided textbooks for deeper understanding and detailed mathematical derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
