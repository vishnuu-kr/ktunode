---
title: "Point to point vs continuous path planning."
subject: "INTRODUCTION TO ROBOTICS"
module: "Module 3: Kinematics and Motion Planning"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c58"
status: "completed"
scrapedAt: "2026-05-23T16:41:48.303Z"
---
# Introduction to Robotics: Module 3: Kinematics and Motion Planning

## Topic: Point-to-Point vs. Continuous Path Planning

### 1. Overview and Introduction

This topic delves into two fundamental approaches for robot motion: **Point-to-Point (PTP) Path Planning** and **Continuous Path (CP) Path Planning**. Understanding the distinction between these methods is crucial for effective robot operation, especially when considering the robot's trajectory and interaction with its environment. This aligns with **Course Outcome 5: Plan trajectories in joint space and Cartesian space (Knowledge Level: K3)**.

### 2. Point-to-Point (PTP) Path Planning

**Definition:**
Point-to-Point (PTP) path planning involves moving a robot from a starting configuration (or point) to a specified end configuration (or point) without explicit concern for the path taken between these two points. The primary goal is to reach the target point efficiently and accurately.

**Key Characteristics:**

*   **Intermediate points are not explicitly defined or controlled.** The robot's controller interpolates the motion between the specified start and end points.
*   **Focus on reaching the destination.** The emphasis is on the accuracy and speed of reaching the final pose.
*   **Simpler to implement and computationally less intensive.**
*   **Suitable for tasks where intermediate paths are not critical.** Examples include picking and placing objects, loading and unloading machines, and simple assembly tasks.
*   **Motion can be jerky or non-smooth** if not properly interpolated.

**Types of PTP Motion:**

*   **Joint-Space PTP:** The robot moves its joints directly from the starting joint angles to the target joint angles. This is the most common and straightforward approach for PTP.
    *   **Advantages:**
        *   Simpler control and inverse kinematics are often implicitly handled.
        *   More predictable behavior for individual joints.
    *   **Disadvantages:**
        *   The end-effector's path in Cartesian space can be complex and unpredictable.
        *   May involve singularities or reach limits without direct Cartesian space awareness.
*   **Cartesian-Space PTP:** The robot's end-effector is commanded to move along a straight line (or a pre-defined Cartesian path) from the start pose to the end pose. This requires inverse kinematics to be solved at each step.
    *   **Advantages:**
        *   More predictable end-effector path in the workspace.
        *   Useful when precise Cartesian movement is required.
    *   **Disadvantages:**
        *   Computationally more expensive due to continuous inverse kinematics calculations.
        *   Can be problematic if the Cartesian path leads to joint-space singularities or out-of-reach configurations.

**Interpolation Methods (for PTP):**

*   **Linear Interpolation:**
    *   **Joint-Space:** Linear interpolation of joint angles.
    *   **Cartesian-Space:** Linear interpolation of the end-effector's position and orientation (using techniques like SLERP for rotations).
*   **Polynomial Interpolation (e.g., Cubic Splines):**
    *   Allows for smoother transitions between points by defining polynomial segments.
    *   Can provide continuous velocity and acceleration profiles, reducing jerky motions.

**Example:**
A robot picking up a part from a conveyor belt and placing it in a bin. The robot is programmed to move from its home position (Start Point A) to the pick position above the part (Point B), then down to grasp the part (Point C), then to the drop position above the bin (Point D), and finally down to release the part (Point E). The controller calculates the joint movements to get from A to B, B to C, C to D, and D to E. The exact path the gripper takes while moving from A to B is not explicitly defined, only that it arrives at B.

**References:**
*   **Saha (2014):** Likely discusses PTP motion as a fundamental mode of operation for manipulators.
*   **Schilling (1996):** May cover trajectory generation and control for PTP tasks.
*   **Craig (2018):** Provides detailed explanations of joint-space and Cartesian-space control, including PTP trajectories.

### 3. Continuous Path (CP) Path Planning

**Definition:**
Continuous Path (CP) path planning involves moving a robot along a precisely defined trajectory in space. The robot must follow this path accurately, often with constraints on velocity, acceleration, and jerk.

**Key Characteristics:**

*   **The entire path is defined and controlled.** Intermediate points or segments of the path are explicitly specified.
*   **Focus on following the defined trajectory.** Accuracy in following the path is paramount.
*   **More computationally intensive** as the robot needs to continuously track the path.
*   **Suitable for tasks requiring precise spatial coordination and smooth motion.** Examples include welding, painting, contour following, and dispensing.
*   **Results in smoother, more controlled motion.**

**Types of CP Motion:**

*   **Joint-Space CP:** The robot's joints follow pre-defined trajectories (e.g., sinusoidal, polynomial segments) that result in a smooth overall motion.
    *   **Advantages:**
        *   Simpler to plan and execute than Cartesian CP.
        *   Avoids potential singularities issues that can arise in Cartesian space.
    *   **Disadvantages:**
        *   The end-effector's path in Cartesian space can be complex and might not be a simple geometric shape.
*   **Cartesian-Space CP:** The robot's end-effector follows a precisely defined path in Cartesian space (e.g., straight lines, circles, arbitrary curves). This requires continuous solving of inverse kinematics.
    *   **Advantages:**
        *   Precise control of the end-effector's motion in the workspace.
        *   Essential for tasks where the tool must follow a specific geometric pattern.
    *   **Disadvantages:**
        *   High computational load due to continuous inverse kinematics.
        *   Requires careful path planning to avoid singularities and workspace limitations.
        *   Can be sensitive to errors in the kinematic model.

**Trajectory Generation Techniques (for CP):**

*   **Spline Interpolation (e.g., Cubic, Quintic Splines):**
    *   Used to create smooth paths with continuous velocity and acceleration profiles.
    *   Allows for the definition of a sequence of points and specifying constraints on derivatives at these points.
*   **Parametric Curves:**
    *   Paths are defined as functions of a parameter (e.g., Bezier curves, B-splines).
    *   Offers flexibility in defining complex shapes and smooth transitions.
*   **Teach Pendant Programming:**
    *   Operators manually guide the robot through the desired path and record the joint or Cartesian coordinates at various points. The robot's controller then interpolates between these recorded points. This is a common method for teaching CP.

**Example:**
A welding robot following a seam on a car body. The robot's end-effector (the welding torch) must precisely follow the contours of the seam. The path of the welding torch is defined as a continuous curve in Cartesian space, and the robot's controller calculates the necessary joint movements to ensure the torch stays on the seam with the correct speed and orientation.

**References:**
*   **Saha (2014):** Discusses trajectory generation for continuous motion.
*   **Mittal & Nagrath (2003):** Likely covers detailed methods for trajectory planning and execution for various paths.
*   **Craig (2018):** Provides comprehensive coverage of trajectory generation in both joint and Cartesian space for continuous movements.
*   **Ghosal (2006):** May offer advanced techniques for path planning and motion control for continuous paths.

### 4. Comparison of Point-to-Point vs. Continuous Path Planning

| Feature             | Point-to-Point (PTP) Path Planning                      | Continuous Path (CP) Path Planning                         |
| :------------------ | :------------------------------------------------------ | :--------------------------------------------------------- |
| **Path Definition** | Only start and end points are specified.                | The entire path between start and end is defined.        |
| **Control Focus**   | Reaching the target point accurately and efficiently.   | Precisely following the defined trajectory.                |
| **Motion Smoothness** | Can be jerky if not interpolated properly.              | Generally smooth and controlled.                           |
| **Computational Load** | Lower.                                                  | Higher, especially for Cartesian CP.                       |
| **Implementation**  | Simpler.                                                | More complex.                                              |
| **Applications**    | Pick and place, loading/unloading, simple assembly.     | Welding, painting, contour following, dispensing, milling. |
| **Intermediate Poses** | Not explicitly controlled.                              | Explicitly controlled and followed.                        |
| **Data Storage**    | Stores start and end configurations.                    | Stores a sequence of points/path segments.                 |

### 5. Kinematic Considerations in Path Planning

Both PTP and CP path planning are heavily influenced by the robot's kinematics.

*   **Forward Kinematics:** Used to determine the end-effector's pose given the joint angles. This is essential for understanding where the robot is at any point along a path.
*   **Inverse Kinematics:** Crucial for both PTP (especially Cartesian PTP) and CP (Cartesian CP). It determines the joint angles required to achieve a desired end-effector pose. Errors in inverse kinematics solutions can lead to deviations from the planned path.
    *   **Singularities:** Configurations where the robot loses one or more degrees of freedom. Moving through or near singularities can cause jerky motion or prevent the robot from reaching its destination, making them critical to consider in path planning. (Relates to **CO4: Obtain kinematic model of robotic manipulators (Knowledge Level: K3)**)
*   **Workspace:** The reachable space of the robot's end-effector. Paths must be planned within the robot's workspace to be feasible. (Relates to **CO4**)
*   **Joint Limits:** Robots have limits on the range of motion for each joint. Paths must respect these limits. (Relates to **CO4**)

### 6. Motion Planning and Trajectory Generation

Once a path is defined (either implicitly by start/end points or explicitly as a curve), a **trajectory** needs to be generated. A trajectory is a time-parameterized path, specifying the desired position, velocity, and acceleration of the robot's joints or end-effector over time.

*   **PTP Trajectory:** Typically generated using simple interpolation (linear or polynomial) between the start and end configurations. Velocity and acceleration profiles can be designed to minimize time or ensure smooth motion.
*   **CP Trajectory:** Requires generating a time sequence for the entire path, ensuring smooth velocity and acceleration profiles to accurately follow the curve. Techniques like trapezoidal velocity profiles or cubic splines are commonly used.

This directly relates to **CO5: Plan trajectories in joint space and Cartesian space (Knowledge Level: K3)**.

### 7. Practical Implications and Applications

*   **PTP:** Ideal for tasks where the robot simply needs to "get from here to there," like a pick-and-place operation. It's computationally efficient and simpler to program for basic tasks.
*   **CP:** Essential for tasks that require the robot to interact with its environment in a precise, continuous manner, such as painting a car panel, welding a complex seam, or milling a curved surface. The smoothness and accuracy are critical for the quality of the output.

This topic contributes to **CO1: Familiarise with anatomy, specifications and applications of Robots (Knowledge Level: K2)** by highlighting different operational modes and their suitability for various applications.

### 8. Practice Questions with Answers

**Question 1:**
Which type of path planning is generally preferred for tasks like welding or painting where the robot must precisely follow a contour?
A) Point-to-Point (PTP)
B) Continuous Path (CP)
C) Both are equally suitable
D) Neither is suitable

**Answer:** B) Continuous Path (CP)
**Explanation:** Continuous Path (CP) planning is designed for tasks that require the robot to follow a precisely defined trajectory, which is essential for operations like welding and painting to ensure accuracy and quality.

**Question 2:**
If a robot needs to move a part from a conveyor belt to a bin, which path planning strategy is usually more efficient and appropriate?
A) Continuous Path (CP) in Cartesian space
B) Continuous Path (CP) in Joint space
C) Point-to-Point (PTP) in Cartesian space
D) Point-to-Point (PTP) in Joint space

**Answer:** D) Point-to-Point (PTP) in Joint space
**Explanation:** For a pick-and-place task, the primary goal is to reach the pick and place locations. The exact path taken by the end-effector in between is often not critical. PTP motion, especially in joint space, is computationally less intensive and simpler to implement for such tasks.

**Question 3:**
Explain the main trade-off between Point-to-Point (PTP) and Continuous Path (CP) path planning in terms of computational load and task precision.

**Answer:**
The main trade-off lies in computational load versus task precision and smoothness.
*   **Point-to-Point (PTP) Path Planning:** Has a lower computational load because it only needs to plan transitions between discrete start and end points. It is less precise in terms of intermediate path following but is efficient for tasks where the path between points is not critical.
*   **Continuous Path (CP) Path Planning:** Has a higher computational load as it requires defining and controlling the robot's motion along an entire trajectory. However, it offers much higher precision and smoother motion, which is crucial for tasks requiring intricate interaction with the environment.

**Question 4:**
Consider a robot arm with a tool that needs to draw a circle on a surface. Would you use PTP or CP planning? If CP, would joint-space or Cartesian-space CP be more appropriate? Justify your answer.

**Answer:**
You would use **Continuous Path (CP)** planning.
**Justification:** Drawing a circle requires the robot's tool to follow a specific geometric shape in space. The intermediate points along the circle are critical for the successful completion of the task.
**Cartesian-space CP** would be more appropriate. This is because the circle is defined as a geometric shape in Cartesian space (e.g., a specific radius and center). To accurately trace this circle, the robot's end-effector must follow a precise path in Cartesian coordinates. Planning in joint space would result in an unknown and potentially complex path in Cartesian space, which would not guarantee the drawing of a perfect circle.

### 9. Important Points to Remember

*   **PTP:** Focuses on getting from A to B; intermediate path is often unspecified. Simpler, less computational. Suitable for pick-and-place.
*   **CP:** Focuses on following a precisely defined path. More computational, more complex, but offers precision and smoothness. Suitable for welding, painting, milling.
*   **Joint-Space vs. Cartesian-Space:** Both PTP and CP can be implemented in either joint or Cartesian space.
    *   **Joint-Space:** Generally easier to compute, but Cartesian path can be complex.
    *   **Cartesian-Space:** Gives predictable end-effector paths but requires frequent inverse kinematics solutions and careful handling of singularities.
*   **Trajectory Generation:** The process of converting a path into a time-parameterized sequence of desired states (position, velocity, acceleration) is crucial for smooth and controlled motion.
*   **Kinematic Model:** A thorough understanding of the robot's kinematics (forward and inverse) is essential for effective path and trajectory planning, especially for CP and Cartesian-space operations.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
