---
title: "Motion Planning- joint space trajectory planning-cubic polynomial, linear trajectory with parabolic blends"
subject: "INTRODUCTION TO ROBOTICS"
module: "Module 3: Kinematics and Motion Planning"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c56"
status: "completed"
scrapedAt: "2026-05-23T16:41:45.869Z"
---
# Introduction to Robotics - Module 3: Kinematics and Motion Planning

## Topic: Motion Planning - Joint Space Trajectory Planning

This module delves into the crucial aspect of guiding a robot from one configuration to another. We will focus on **joint space trajectory planning**, which involves defining the motion of each individual joint of the robot over time. This allows for smooth, controlled, and efficient movement.

---

### 3.1 Introduction to Motion Planning

*   **Definition:** Motion planning is the process of determining a sequence of configurations (or a continuous path in configuration space) that a robot must follow to move from a starting point to a goal point, while avoiding obstacles and satisfying kinematic and dynamic constraints.
*   **Importance:**
    *   Enables robots to perform tasks effectively and safely.
    *   Ensures smooth and efficient movements, minimizing wear and tear.
    *   Allows for precise positioning and manipulation.
*   **Configuration Space:** The configuration space (C-space) is a space where each point represents a unique configuration of the robot. For a robot with 'n' degrees of freedom (DOF), the C-space is an n-dimensional space.
*   **Task Space vs. Joint Space:**
    *   **Task Space:** Describing robot motion in terms of the position and orientation of the end-effector (e.g., x, y, z coordinates and roll, pitch, yaw angles).
    *   **Joint Space:** Describing robot motion in terms of the values of each joint variable (e.g., joint angles for revolute joints, joint displacements for prismatic joints).

**Alignment with Course Outcomes:**
*   **CO5:** Plan trajectories in joint space and Cartesian space (K3) - This section directly addresses the foundational understanding of motion planning and the distinction between joint and task space, which is essential for planning.

---

### 3.2 Joint Space Trajectory Planning

*   **Concept:** In joint space trajectory planning, we define a time sequence of desired joint positions, velocities, and accelerations for each joint independently. The robot's controller then attempts to follow these trajectories.
*   **Advantages of Joint Space Planning:**
    *   **Simplicity:** It is generally simpler to plan trajectories in joint space as it avoids the complexity of inverse kinematics, which can be non-linear and computationally intensive.
    *   **Guaranteed Path Coverage:** If a path exists in joint space, planning in joint space can guarantee reaching the desired end-effector pose (assuming no singularities are encountered).
    *   **Avoids Singularities (mostly):** Planning in joint space can help avoid robot singularities, which occur when the robot loses degrees of freedom and the Jacobian matrix becomes singular.
*   **Disadvantages of Joint Space Planning:**
    *   **End-effector Path Uncertainty:** The path of the end-effector in Cartesian space is not explicitly defined. This can lead to undesirable end-effector motions or collision with obstacles if not carefully managed.
    *   **Requires Task-to-Joint Space Mapping:** If the task is defined in Cartesian space, an inverse kinematics solution is still needed to convert Cartesian waypoints to joint space waypoints.

**Alignment with Course Outcomes:**
*   **CO5:** Plan trajectories in joint space and Cartesian space (K3) - This section specifically focuses on joint space planning.

---

### 3.3 Cubic Polynomial Trajectory Planning

*   **Concept:** Cubic polynomials are a common and effective way to generate smooth trajectories in joint space. They allow for control over position and velocity at the start and end of a trajectory segment.
*   **Mathematical Representation:** A cubic polynomial is represented as:
    $p(t) = a_3 t^3 + a_2 t^2 + a_1 t + a_0$
    where:
    *   $p(t)$ is the joint position at time $t$.
    *   $a_0, a_1, a_2, a_3$ are the polynomial coefficients.
*   **Velocity and Acceleration:**
    *   Velocity: $v(t) = \frac{dp}{dt} = 3a_3 t^2 + 2a_2 t + a_1$
    *   Acceleration: $a(t) = \frac{dv}{dt} = 6a_3 t + 2a_2$
*   **Determining Coefficients:** To define a trajectory segment between two points (e.g., from $t=0$ to $t=T$), we need to specify initial and final conditions for position and velocity. This gives us four equations, which are sufficient to solve for the four coefficients ($a_0, a_1, a_2, a_3$).
    *   $p(0) = p_0$ (Initial position)
    *   $v(0) = v_0$ (Initial velocity)
    *   $p(T) = p_f$ (Final position)
    *   $v(T) = v_f$ (Final velocity)

**Solving for Coefficients (Example derivation for $a_0, a_1$):**
*   From $p(0) = p_0$, we get $a_0 = p_0$.
*   From $v(0) = v_0$, we get $a_1 = v_0$.

Now, substitute these into the equations for $p(T)$ and $v(T)$:
*   $p_f = a_3 T^3 + a_2 T^2 + v_0 T + p_0$  (Eq. 1)
*   $v_f = 3a_3 T^2 + 2a_2 T + v_0$      (Eq. 2)

Rearranging Eq. 1:
*   $a_3 T^3 + a_2 T^2 = p_f - p_0 - v_0 T$

Rearranging Eq. 2:
*   $3a_3 T^2 + 2a_2 T = v_f - v_0$

We have two equations and two unknowns ($a_2, a_3$). From the second rearranged equation, we can express $a_2$ in terms of $a_3$:
*   $2a_2 T = v_f - v_0 - 3a_3 T^2$
*   $a_2 = \frac{v_f - v_0}{2T} - \frac{3}{2} a_3 T$

Substitute this expression for $a_2$ into the first rearranged equation:
*   $a_3 T^3 + (\frac{v_f - v_0}{2T} - \frac{3}{2} a_3 T) T^2 = p_f - p_0 - v_0 T$
*   $a_3 T^3 + \frac{v_f - v_0}{2} T - \frac{3}{2} a_3 T^3 = p_f - p_0 - v_0 T$
*   $-\frac{1}{2} a_3 T^3 = p_f - p_0 - v_0 T - \frac{v_f - v_0}{2} T$
*   $-\frac{1}{2} a_3 T^3 = p_f - p_0 - \frac{v_0 T + v_f T}{2}$
*   $a_3 = -\frac{2}{T^3} (p_f - p_0 - \frac{(v_0 + v_f)T}{2})$
*   $a_3 = \frac{2(p_0 - p_f)}{T^3} + \frac{v_0 + v_f}{T^2}$

Now, substitute $a_3$ back into the expression for $a_2$:
*   $a_2 = \frac{v_f - v_0}{2T} - \frac{3}{2} (\frac{2(p_0 - p_f)}{T^3} + \frac{v_0 + v_f}{T^2}) T$
*   $a_2 = \frac{v_f - v_0}{2T} - \frac{3(p_0 - p_f)}{T^2} - \frac{3(v_0 + v_f)}{2T}$
*   $a_2 = \frac{3(p_f - p_0)}{T^2} - \frac{v_0 + 2v_f}{2T}$

**Summary of Coefficients for Cubic Polynomial:**
*   $a_0 = p_0$
*   $a_1 = v_0$
*   $a_2 = \frac{3(p_f - p_0)}{T^2} - \frac{v_0 + 2v_f}{T}$ (Corrected derivation from above)
*   $a_3 = \frac{2(p_0 - p_f)}{T^3} + \frac{v_0 + v_f}{T^2}$ (Corrected derivation from above)

**Important Note on Coefficient Derivation:** While the general method is to solve for the coefficients, the derived formulas can be found in standard robotics texts. For practice, it's beneficial to re-derive them.

*   **Common Scenarios:**
    *   **Start from rest, end at rest:** $v_0 = 0, v_f = 0$. This simplifies the equations significantly.
    *   **Start from rest, end with a specific velocity:** $v_0 = 0$.
    *   **Start with a specific velocity, end at rest:** $v_f = 0$.
    *   **Zero initial and final velocity:** This is common for transitions between segments.

**Textbook References:**
*   **Saha, S. K. (2014):** Likely covers polynomial interpolation methods for trajectory generation.
*   **Craig, J. J. (2018):** Chapter 7, "Trajectory Generation," often discusses polynomial trajectories, including cubic and quintic.
*   **Ghosal, A. (2006):** May present trajectory planning in its control sections.

**Alignment with Course Outcomes:**
*   **CO5:** Plan trajectories in joint space and Cartesian space (K3) - This is a direct application of planning a joint space trajectory.

---

### 3.4 Linear Trajectory with Parabolic Blends

*   **Concept:** This method creates a trajectory by connecting straight line segments in joint space with smooth parabolic transitions (blends) at the waypoints. This provides a compromise between the simplicity of linear motion and the smoothness of higher-order polynomials.
*   **Motivation:**
    *   **Efficiency:** Linear segments are computationally efficient.
    *   **Smoothness:** Parabolic blends at waypoints ensure that velocity is continuous, avoiding abrupt changes that can cause jerk and vibrations.
    *   **Simplicity:** Easier to implement than full quintic or higher-order polynomial trajectories.
*   **Components:**
    1.  **Linear Segments:** Straight line paths between waypoints.
    2.  **Parabolic Blends:** Curved segments connecting the end of one linear segment to the start of the next, ensuring continuity of velocity.
*   **Trajectory Generation Process:**
    *   **Waypoint Definition:** Define a sequence of desired joint positions ($q_0, q_1, q_2, ..., q_n$) and associated time intervals ($\Delta t_1, \Delta t_2, ..., \Delta t_n$).
    *   **Linear Motion:** For a linear segment between $q_{i-1}$ and $q_i$ over time $\Delta t_i$, the position at time $\tau$ within this segment ($0 \le \tau \le \Delta t_i$) can be described as:
        $q(\tau) = q_{i-1} + \frac{q_i - q_{i-1}}{\Delta t_i} \tau$
        The velocity during this linear segment is constant: $v = \frac{q_i - q_{i-1}}{\Delta t_i}$.
    *   **Parabolic Blend:** At each intermediate waypoint $q_i$, we need to transition from the velocity of the previous segment to the velocity of the next segment smoothly. This is achieved using a parabolic blend.
        *   Let $v_{i-1}$ be the velocity approaching waypoint $q_i$ from the previous segment.
        *   Let $v_i$ be the velocity leaving waypoint $q_i$ towards the next segment.
        *   A parabolic blend can be designed such that it starts with velocity $v_{i-1}$ and ends with velocity $v_i$ over a short blending time $t_b$.
        *   A common approach is to use a quadratic polynomial for the blend:
            $q_{blend}(\Delta t) = A (\Delta t)^2 + B (\Delta t) + C$
            where $\Delta t$ is the time elapsed within the blend.
            *   $q_{blend}(0) = q_i$ (The blend starts at the waypoint)
            *   $\dot{q}_{blend}(0) = v_{i-1}$ (The velocity entering the blend)
            *   $\dot{q}_{blend}(t_b) = v_i$ (The velocity leaving the blend)
            *   We also need to consider the position change during the blend. A common strategy is to make the blend symmetric around the waypoint.

*   **Simplified Parabolic Blend (Trapezoidal Velocity Profile):** A simpler implementation, often referred to as "parabolic blending" in practice, involves creating a trapezoidal velocity profile for each segment. This involves:
    1.  **Acceleration Phase:** A parabolic increase in velocity from 0 to a maximum velocity ($v_{max}$).
    2.  **Constant Velocity Phase:** Maintaining $v_{max}$.
    3.  **Deceleration Phase:** A parabolic decrease in velocity from $v_{max}$ to 0.

    The parabolic acceleration/deceleration phases ensure smooth changes in velocity, and thus smooth motion. The "blending" occurs in the sense that the trapezoidal profiles at consecutive waypoints are joined smoothly.

*   **Design Parameters:**
    *   **Waypoint Positions:** $q_0, q_1, ..., q_n$.
    *   **Desired Velocities at Waypoints:** $v_0, v_1, ..., v_n$.
    *   **Blending Time per Waypoint ($t_b$):** The time allocated for the parabolic transition.
    *   **Maximum Velocity ($v_{max}$):** The highest velocity allowed during the constant velocity phase.

**Textbook References:**
*   **Schilling, R. J. (1996):** Might discuss path planning strategies including blending techniques.
*   **Mittal, R. K., & Nagrath, I. J. (2003):** Could have sections on trajectory generation with smooth transitions.
*   **Deb, S. R. (2007):** "Robotics Technology and Flexible Automation" is likely to cover motion planning and trajectory generation.

**Alignment with Course Outcomes:**
*   **CO5:** Plan trajectories in joint space and Cartesian space (K3) - This method is a direct way to plan a joint space trajectory with smooth transitions.

---

### 3.5 Key Concepts and Definitions

*   **Trajectory:** A time sequence of desired joint positions, velocities, and accelerations.
*   **Waypoint:** A specific configuration (joint space or task space) that the robot must pass through.
*   **Configuration Space (C-space):** The space of all possible robot configurations.
*   **Degrees of Freedom (DOF):** The number of independent parameters required to specify the robot's configuration.
*   **Singularity:** A configuration where the robot loses one or more degrees of freedom, and the Jacobian matrix is singular.
*   **Jerk:** The rate of change of acceleration. Smooth trajectories aim to minimize jerk.
*   **Kinematic Constraints:** Limitations imposed by the robot's physical structure and joint limits.
*   **Dynamic Constraints:** Limitations imposed by the robot's inertia, forces, and torques.
*   **Zero-Velocity Update (ZVU) / Zero-Acceleration Update (ZAU):** Techniques used in trajectory planning to ensure continuity of velocity or acceleration at waypoints, especially when blending linear segments.

---

### 3.6 Important Points to Remember

*   **Joint space planning is generally simpler than Cartesian space planning** because it avoids the need for inverse kinematics at every step, which can be computationally expensive and may have multiple solutions or no solutions.
*   **Cubic polynomials provide smooth motion by ensuring continuity of position and velocity.** They are a good starting point for trajectory generation.
*   **Linear trajectory with parabolic blends offers a balance between simplicity and smoothness.** The parabolic blends ensure continuous velocity at waypoints, preventing jerk.
*   **The choice of trajectory planning method depends on the specific application requirements, including the need for smoothness, computational efficiency, and control over the end-effector's path.**
*   **Always consider joint limits and velocity/acceleration limits of the robot when planning trajectories.**
*   **Understanding the derivation of polynomial coefficients is crucial for custom trajectory generation.**

---

### 3.7 Practice Questions and Exercises

**Question 1:**
A single joint of a robot needs to move from $\theta_0 = 0$ radians to $\theta_f = \pi/2$ radians in $T = 2$ seconds. The initial velocity is $v_0 = 0$ rad/s and the final velocity is $v_f = 0$ rad/s. Using a cubic polynomial trajectory, determine the coefficients $a_0, a_1, a_2, a_3$.

**Answer 1:**
We use the cubic polynomial equation: $p(t) = a_3 t^3 + a_2 t^2 + a_1 t + a_0$.
Given:
*   $p_0 = \theta_0 = 0$ rad
*   $p_f = \theta_f = \pi/2$ rad
*   $v_0 = 0$ rad/s
*   $v_f = 0$ rad/s
*   $T = 2$ s

Using the derived formulas for coefficients:
*   $a_0 = p_0 = 0$
*   $a_1 = v_0 = 0$
*   $a_2 = \frac{3(p_f - p_0)}{T^2} - \frac{v_0 + 2v_f}{T}$
    $a_2 = \frac{3(\pi/2 - 0)}{(2)^2} - \frac{0 + 2(0)}{2} = \frac{3\pi/2}{4} - 0 = \frac{3\pi}{8}$
*   $a_3 = \frac{2(p_0 - p_f)}{T^3} + \frac{v_0 + v_f}{T^2}$
    $a_3 = \frac{2(0 - \pi/2)}{(2)^3} + \frac{0 + 0}{2^2} = \frac{2(-\pi/2)}{8} + 0 = \frac{-\pi}{8}$

So, the cubic polynomial is:
$\theta(t) = -\frac{\pi}{8} t^3 + \frac{3\pi}{8} t^2$

**Question 2:**
Explain the advantages and disadvantages of planning trajectories in joint space compared to task space.

**Answer 2:**
*   **Advantages of Joint Space Planning:**
    *   **Simplicity:** Avoids complex inverse kinematics calculations.
    *   **Computational Efficiency:** Generally less demanding computationally.
    *   **Singularity Avoidance:** Can implicitly avoid singular configurations.
    *   **Direct Control:** Directly controls joint movements, which can be more intuitive for certain tasks.

*   **Disadvantages of Joint Space Planning:**
    *   **End-Effector Path Uncertainty:** The actual path of the end-effector in Cartesian space is not directly controlled and may be complex or undesirably curved.
    *   **Task-Space Objective Difficulty:** Difficult to directly enforce task-space constraints or achieve specific end-effector paths without additional inverse kinematics calculations.
    *   **Potential for Collisions:** If the end-effector path is not considered, it might lead to collisions with obstacles.

**Question 3:**
Consider a robot arm with two joints. Joint 1 needs to move from $0^\circ$ to $90^\circ$ and Joint 2 from $30^\circ$ to $60^\circ$. If both movements take $1$ second and start and end with zero velocity, how would you describe the trajectory for each joint using cubic polynomials? (Assume a linear progression in joint space, but the planning is done using cubic polynomials for smoothness).

**Answer 3:**
For each joint, we will plan a cubic polynomial trajectory.
Let's consider Joint 1:
*   $p_0 = 0^\circ$
*   $p_f = 90^\circ$
*   $v_0 = 0^\circ/s$
*   $v_f = 0^\circ/s$
*   $T = 1$ s

Using the cubic polynomial coefficient formulas:
*   $a_0 = p_0 = 0^\circ$
*   $a_1 = v_0 = 0^\circ/s$
*   $a_2 = \frac{3(p_f - p_0)}{T^2} - \frac{v_0 + 2v_f}{T} = \frac{3(90 - 0)}{1^2} - \frac{0 + 2(0)}{1} = 270^\circ/s^2$
*   $a_3 = \frac{2(p_0 - p_f)}{T^3} + \frac{v_0 + v_f}{T^2} = \frac{2(0 - 90)}{1^3} + \frac{0 + 0}{1^2} = -180^\circ/s^3$

So, the trajectory for Joint 1 is:
$\theta_1(t) = -180 t^3 + 270 t^2$ (in degrees, for $0 \le t \le 1$)

Similarly, for Joint 2:
*   $p_0 = 30^\circ$
*   $p_f = 60^\circ$
*   $v_0 = 0^\circ/s$
*   $v_f = 0^\circ/s$
*   $T = 1$ s

*   $a_0 = p_0 = 30^\circ$
*   $a_1 = v_0 = 0^\circ/s$
*   $a_2 = \frac{3(p_f - p_0)}{T^2} - \frac{v_0 + 2v_f}{T} = \frac{3(60 - 30)}{1^2} - \frac{0 + 2(0)}{1} = 90^\circ/s^2$
*   $a_3 = \frac{2(p_0 - p_f)}{T^3} + \frac{v_0 + v_f}{T^2} = \frac{2(30 - 60)}{1^3} + \frac{0 + 0}{1^2} = -60^\circ/s^3$

So, the trajectory for Joint 2 is:
$\theta_2(t) = -60 t^3 + 90 t^2 + 30$ (in degrees, for $0 \le t \le 1$)

---

This concludes Module 3, Topic: Motion Planning - Joint Space Trajectory Planning. The next topics will likely build upon these concepts to explore Cartesian space planning and more advanced motion planning techniques.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
