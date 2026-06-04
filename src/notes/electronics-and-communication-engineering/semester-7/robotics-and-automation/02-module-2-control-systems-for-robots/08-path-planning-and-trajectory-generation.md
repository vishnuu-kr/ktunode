---
title: "Path planning and trajectory generation."
subject: "ROBOTICS AND AUTOMATION"
module: "Module 2: Control Systems for Robots"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff18f"
status: "completed"
scrapedAt: "2026-05-23T18:09:44.654Z"
---
# ROBOTICS AND AUTOMATION: Module 2 - Control Systems for Robots

## Topic: Path Planning and Trajectory Generation

---

### Introduction

This module delves into the critical aspects of how robots move from one point to another. Path planning is the process of finding a valid sequence of configurations for the robot to follow, avoiding obstacles and reaching its goal. Trajectory generation builds upon this path by adding the temporal aspect, defining the velocity and acceleration of the robot along the path. Effectively, path planning answers "where to go?" and trajectory generation answers "how fast to get there?".

---

### 1. Path Planning

Path planning is a fundamental problem in robotics, enabling robots to navigate their environments autonomously. It involves finding a collision-free, feasible path from a starting configuration to a goal configuration.

**Key Concepts and Definitions:**

*   **Configuration Space (C-space):** The set of all possible states (configurations) of the robot. For a robot with *n* degrees of freedom (DOF), the C-space is an *n*-dimensional space. Each point in C-space represents a unique pose of the robot.
    *   *Example:* A 2D planar robot with 2 revolute joints has a C-space that is a 2D torus (for unconstrained joints). A robot arm with 6 DOF has a 6D C-space.
*   **Workspace:** The set of all reachable points in the physical world that the robot's end-effector can occupy.
*   **Obstacles:** Objects in the workspace that the robot must avoid. These translate into "forbidden regions" in C-space.
*   **C-obstacle:** The region in C-space corresponding to the robot colliding with an obstacle in the workspace.
*   **Free Space:** The portion of C-space where the robot does not collide with any obstacles.
*   **Path:** A continuous sequence of configurations in the C-space from a start configuration to a goal configuration, lying entirely within the free space.
*   **Feasible Path:** A path that the robot can physically follow, considering its kinematic and dynamic constraints.
*   **Optimality:** A path can be considered optimal based on various criteria, such as shortest length, minimum time, or minimum energy consumption.

**Types of Path Planning:**

Path planning algorithms can be broadly categorized based on the information available about the environment and the strategy used.

**A. Geometric Path Planning:** Focuses on finding a collision-free path without considering the robot's velocity or acceleration.

*   **Cell Decomposition:** The C-space is divided into simpler regions (cells). Paths are then found by connecting adjacent free cells.
    *   **Exact Cell Decomposition:** The C-space is divided into arbitrarily small cells. This can be computationally expensive.
    *   **Approximate Cell Decomposition:** The C-space is divided into a finite number of cells, often using a grid or a polygonal decomposition.
        *   **Grid-based methods:** The C-space is discretized into a grid. Pathfinding algorithms like Breadth-First Search (BFS), Dijkstra's algorithm, or A* search are then applied.
            *   *Example:* A robot moving in a 2D room can have its C-space (which is the same as its workspace in this simple case) represented as a grid, with some cells marked as occupied by obstacles.
        *   **Roadmap methods:** Pre-compute a graph (roadmap) of feasible paths within the free space. Path planning then becomes a graph search problem.
            *   **Visibility Graph:** Connects all vertices of free space obstacles.
            *   **Voronoi Diagram:** Divides the free space into regions based on proximity to obstacles. The diagram itself forms a roadmap.
            *   **Probabilistic Roadmaps (PRM):** Randomly sample configurations in the C-space and connect them if a collision-free path exists between them. This is particularly useful for high-dimensional C-spaces.
                *   *Reference:* Spong, Hutchinson, & Vidyasagar (2021) discusses PRM in Chapter 7.
*   **Potential Field Methods:** The robot is treated as a particle moving in a potential field. Obstacles create repulsive potentials, and the goal creates an attractive potential. The robot moves along the gradient of the total potential field.
    *   *Advantages:* Simple to implement, computationally efficient.
    *   *Disadvantages:* Can get stuck in local minima (where the gradient is zero but not at the goal), oscillations near obstacles.
    *   *Reference:* Craig (2005) details potential field methods in Chapter 8.

**B. Kinodynamic Path Planning:** Considers the robot's dynamic constraints (e.g., velocity limits, acceleration limits, joint torques) in addition to its kinematics. This leads to more realistic and executable paths.

*   **State Lattice Methods:** The state space (including position, velocity, and potentially acceleration) is discretized, and feasible motions are pre-computed. Path planning then involves searching through this lattice of states.
*   **Rapidly-exploring Random Trees (RRTs):** Similar to PRMs, RRTs grow a tree from the start configuration by randomly sampling points in C-space and extending the tree towards them. RRTs are biased towards exploring the unknown parts of the space.
    *   *Reference:* Ghoshal (2006) might touch upon advanced path planning techniques like RRTs.

**Alignment with Course Outcomes:**

*   **CO1 (Describe basic components, configurations, DOFs):** Understanding C-space is directly related to the DOF of a robot. Different configurations (e.g., joint angles) define points in C-space.
*   **CO2 (Apply forward/inverse kinematics):** Kinematics is crucial for converting configurations in C-space to physical positions and orientations in workspace, which is essential for obstacle checking and generating feasible paths.

---

### 2. Trajectory Generation

Trajectory generation takes a planned path and adds a time component, specifying the velocity and acceleration profiles for the robot's motion along that path. This ensures smooth, controlled, and efficient movement.

**Key Concepts and Definitions:**

*   **Path vs. Trajectory:** A path is a geometric curve in C-space or workspace. A trajectory is a path parameterized by time, meaning it specifies the robot's configuration, velocity, and acceleration as functions of time.
*   **Joint-Space Trajectory:** The trajectory is specified directly in terms of the joint variables (e.g., joint angles for a robotic arm). This is often preferred for robotic manipulators because it directly controls the actuators.
*   **Cartesian-Space Trajectory (Task-Space Trajectory):** The trajectory is specified in terms of the position and orientation of the robot's end-effector in Cartesian coordinates. This is useful for tasks like welding or painting where end-effector path is critical.
*   **End-effector Trajectory:** The sequence of poses (position and orientation) of the end-effector over time.
*   **Joint Trajectory:** The sequence of joint values over time.
*   **Velocity and Acceleration Profiles:** How the joint velocities and accelerations change over time to follow the desired path.

**Trajectory Generation Techniques:**

The goal is to generate smooth, time-optimal, and computationally efficient trajectories that respect the robot's dynamic limits.

*   **Point-to-Point Trajectories:** Moving the robot from a specific start configuration to a specific goal configuration.
    *   **Polynomial Interpolation:** Using polynomial functions to represent the joint trajectories.
        *   **Linear Interpolation (Lerp):** Simple but results in abrupt changes in velocity (infinite acceleration at the start/end).
        *   **Cubic Splines:** Provide continuity in position and velocity. $P(t) = a_3 t^3 + a_2 t^2 + a_1 t + a_0$. Requires 4 coefficients to be determined by start/end position and velocity.
        *   **Quintic Splines:** Provide continuity in position, velocity, and acceleration. $P(t) = a_5 t^5 + a_4 t^4 + a_3 t^3 + a_2 t^2 + a_1 t + a_0$. Requires 6 coefficients, determined by start/end position, velocity, and acceleration. This is a common choice for smooth motion.
            *   *Reference:* Spong, Hutchinson, & Vidyasagar (2021) discuss polynomial trajectories in Chapter 6.
    *   **Time-Optimal Trajectory Generation:** Finding the shortest time to move between configurations while respecting velocity and acceleration limits. This often involves "bang-bang" control (maximum acceleration/deceleration).
        *   *Example:* A robot needs to move a gripper from point A to point B. Time-optimal trajectory would utilize maximum acceleration until a certain point, then maximum deceleration to arrive at point B with zero velocity at the exact time.
*   **Continuous Path Trajectories:** Following a predefined path that consists of multiple segments (e.g., a sequence of waypoints).
    *   **Cubic Spline Interpolation:** Connecting waypoints with cubic splines, ensuring smooth transitions.
    *   **B-Splines:** More generalized spline curves that offer better local control and continuity.
    *   **Path Smoothing:** Techniques to smooth out jerky paths generated by algorithms like RRTs or PRMs, making them suitable for trajectory generation.

**Important Considerations for Trajectory Generation:**

*   **Smoothness:** Ensuring continuity of position, velocity, and acceleration to avoid jerky movements and mechanical stress.
*   **Dynamic Constraints:** Respecting joint velocity limits, acceleration limits, and torque limits.
*   **Computational Cost:** Trajectories need to be generated in real-time or near real-time.
*   **Workspace Limits:** Ensuring the generated trajectory stays within the robot's physical reach.

**Alignment with Course Outcomes:**

*   **CO3 (Implement various types of controllers and explain their impact on robot motion control):** Trajectory generation is a key input to robot controllers. The quality of the trajectory directly impacts the robot's motion. A smooth trajectory can be followed more accurately by a controller with limited bandwidth.
*   **CO1 (Describe basic components, configurations, DOFs):** Understanding joint-space vs. Cartesian-space trajectories relates to the robot's configuration.

---

### Examples and Applications

*   **Industrial Robots:** In manufacturing, robots follow precise trajectories for tasks like welding, painting, pick-and-place, and assembly. Smooth trajectories are essential for product quality and robot longevity.
*   **Autonomous Vehicles:** Path planning is critical for self-driving cars to navigate roads, avoid obstacles, and reach destinations. Trajectory generation ensures comfortable and safe acceleration/deceleration.
*   **Mobile Robots:** For robots operating in warehouses or homes, path planning helps them navigate through aisles and rooms, avoiding furniture and people.
*   **Surgical Robots:** High precision and smooth trajectories are paramount for surgical robots to perform delicate procedures.

---

### Practice Questions

**Question 1 (K2):** Differentiate between a "path" and a "trajectory" in robotics.

**Answer:** A **path** is a geometric curve defining the sequence of configurations the robot should occupy, without regard to time. A **trajectory** is a path that has been parameterized by time, specifying not only the configuration but also the velocity and acceleration of the robot at each point along the path.

**Question 2 (K2):** What is Configuration Space (C-space), and why is it important for path planning?

**Answer:** Configuration Space (C-space) is the set of all possible states (configurations) of a robot. It's important for path planning because it provides a unified space to represent the robot's pose regardless of its kinematic structure. Obstacles in the workspace are transformed into "forbidden regions" in C-space, allowing path planning algorithms to search for a collision-free path within the free C-space.

**Question 3 (K3):** A robot arm with two revolute joints (controlled by angles $\theta_1$ and $\theta_2$) needs to move from $(\theta_1=0, \theta_2=0)$ to $(\theta_1=\pi/2, \theta_2=\pi/4)$. Describe how a quintic spline trajectory could be generated for this point-to-point motion.

**Answer:** To generate a quintic spline trajectory, we would define a polynomial for each joint variable, $\theta_1(t)$ and $\theta_2(t)$, over the time interval $[0, T]$, where $T$ is the total movement time. For each joint, the quintic polynomial has the form:
$\theta(t) = a_5 t^5 + a_4 t^4 + a_3 t^3 + a_2 t^2 + a_1 t + a_0$

We need 6 coefficients ($a_0$ to $a_5$) for each joint. These coefficients are determined by specifying boundary conditions at $t=0$ and $t=T$. For a smooth point-to-point motion, we can specify:
*   Initial position: $\theta(0) = \theta_{start}$
*   Initial velocity: $\dot{\theta}(0) = 0$ (assuming the robot starts from rest)
*   Initial acceleration: $\ddot{\theta}(0) = 0$ (assuming smooth start)
*   Final position: $\theta(T) = \theta_{end}$
*   Final velocity: $\dot{\theta}(T) = 0$ (assuming the robot stops at the goal)
*   Final acceleration: $\ddot{\theta}(T) = 0$ (assuming smooth stop)

By substituting these conditions into the quintic polynomial and its first and second derivatives, we get a system of linear equations that can be solved for the coefficients $a_0, ..., a_5$ for each joint. This would result in smooth trajectories for $\theta_1(t)$ and $\theta_2(t)$, providing the robot with a specified position, velocity, and acceleration profile to follow.

**Question 4 (K2):** What is a potential drawback of using the Potential Field method for path planning?

**Answer:** A significant drawback of the Potential Field method is its tendency to get stuck in **local minima**. If the robot reaches a point where the attractive force from the goal is balanced by repulsive forces from nearby obstacles, it may stop moving even if it's not at the goal. This leads to failure in completing the task.

---

### Important Points to Remember

*   **C-space is fundamental:** Understanding C-space is key to abstracting the robot's pose and dealing with obstacles in a unified way.
*   **Path vs. Trajectory:** Always distinguish between the geometric path and the time-parameterized trajectory.
*   **Smoothness is crucial:** Continuous position, velocity, and acceleration lead to better performance, less wear, and more predictable behavior. Quintic splines are often preferred for this.
*   **Dynamic constraints matter:** For realistic and efficient motion, trajectory generation must consider the robot's physical limitations (velocity, acceleration).
*   **Trade-offs in algorithms:** Different path planning algorithms (e.g., PRM, RRT, Potential Fields) have different strengths and weaknesses regarding computational cost, completeness, optimality, and handling of high-dimensional spaces.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### References

*   Craig, J. J. (2005). *Introduction to Robotics: Mechanics and Control* (3rd ed.). Pearson Education. (Specifically, Chapters 7 & 8 for path planning and trajectory generation).
*   Spong, M. W., Hutchinson, S., & Vidyasagar, M. (2021). *Robot Modeling and Control* (2nd ed.). John Wiley & Sons. (Chapter 6 for trajectory generation, Chapter 7 for advanced path planning).
*   Groover, M. P. (1987). *Industrial Robotics: Technology, Programming, and Applications*. McGraw-Hill. (Relevant sections on robot motion and planning).
*   Ghoshal, A. (2006). *Robotics: Fundamental Concepts and Analysis*. Oxford University Press. (May cover broader aspects of motion planning).