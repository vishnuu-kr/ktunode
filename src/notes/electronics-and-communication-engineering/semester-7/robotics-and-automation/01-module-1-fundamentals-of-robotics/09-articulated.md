---
title: "articulated."
subject: "ROBOTICS AND AUTOMATION"
module: "Module 1: Fundamentals of Robotics"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff17a"
status: "completed"
scrapedAt: "2026-05-23T18:09:28.552Z"
---
# ROBOTICS AND AUTOMATION - Module 1: Fundamentals of Robotics

## Topic: Articulated Robots

This topic focuses on understanding articulated robots, a fundamental and widely used type of robotic manipulator.

### 1. Introduction to Articulated Robots

#### 1.1 Definition and General Characteristics

*   **Definition:** An articulated robot is a robotic manipulator that consists of a series of rigid links connected by movable joints. These joints allow for relative motion between consecutive links, enabling the robot to reach and manipulate objects in a three-dimensional space.
*   **Common Analogy:** Think of a human arm. It has an upper arm, forearm, and hand, connected by shoulder, elbow, and wrist joints. This is a prime example of an articulated structure.
*   **Key Feature:** The defining characteristic is the **serial arrangement of links and joints**, where the end-effector (the "hand" of the robot) is at the end of the kinematic chain.

#### 1.2 Structural Configurations

Articulated robots can have various configurations based on the number and type of joints used. The most common are:

*   **2-DOF Articulated Robot:**
    *   Typically consists of two revolute (rotary) joints.
    *   Can operate in a 2D plane.
    *   **Example:** A simple robotic arm that can only move up/down and left/right on a flat surface.
*   **3-DOF Articulated Robot:**
    *   Often involves three revolute joints.
    *   Can reach points in a 3D space, but with limited orientation capabilities.
    *   **Example:** A common configuration for pick-and-place operations where reaching and lifting are crucial.
*   **4-DOF Articulated Robot:**
    *   Usually includes three revolute joints for position and one additional joint (often revolute) for basic orientation.
    *   **Example:** A robot that can position an object and provide a basic "grasping" orientation.
*   **5-DOF Articulated Robot:**
    *   Typically includes three revolute joints for position and two additional revolute joints for full orientation control (pitch and roll).
    *   **Example:** Welding or painting robots where precise orientation is required.
*   **6-DOF Articulated Robot (Most Common):**
    *   Features three revolute joints to define the position of the end-effector in Cartesian space (X, Y, Z).
    *   Includes three additional revolute joints at the "wrist" to control the orientation of the end-effector (roll, pitch, yaw).
    *   This configuration allows the robot to reach any point within its workspace with any desired orientation.
    *   **Example:** Industrial robots used in assembly, welding, painting, and material handling tasks.

#### 1.3 Degrees of Freedom (DOF)

*   **Definition:** The number of independent variables required to completely specify the position and orientation of the robot's end-effector in space.
*   **Relationship to Joints:** Each revolute (rotary) or prismatic (linear) joint typically contributes one DOF.
*   **Importance:** The DOF determines the robot's dexterity and its ability to perform complex tasks. A 6-DOF robot is considered fully dexterous in 3D space.
*   **Course Outcome Alignment:** CO1: Describe the basic components, structural configurations, and degrees of freedom (DOF) of robots.

    *   **Key Concept:** Understanding DOF is crucial for understanding the robot's capability and for performing kinematic analysis.

### 2. Kinematics of Articulated Robots

Kinematics deals with the motion of the robot without considering the forces that cause the motion.

#### 2.1 Forward Kinematics

*   **Definition:** Given the joint angles (or displacements for prismatic joints), forward kinematics calculates the position and orientation of the end-effector in Cartesian space.
*   **Methodology:**
    *   **Transformation Matrices:** The most common approach involves using homogeneous transformation matrices. Each link and joint is represented by a transformation matrix.
    *   **Denavit-Hartenberg (D-H) Convention:** A standardized method for assigning coordinate frames to each link of a manipulator, making the transformation matrix calculations systematic.
        *   **D-H Parameters:** Each joint is defined by four parameters:
            1.  **$a_i$ (link length):** Distance between axis $z_{i-1}$ and $z_i$ measured along the $x_i$ axis.
            2.  **$\alpha_i$ (link twist):** Angle between axis $z_{i-1}$ and $z_i$ measured about the $x_i$ axis.
            3.  **$d_i$ (link offset):** Distance between axis $x_{i-1}$ and $x_i$ measured along the $z_{i-1}$ axis.
            4.  **$\theta_i$ (joint angle):** Angle between axis $x_{i-1}$ and $x_i$ measured about the $z_{i-1}$ axis.
        *   For revolute joints, $\theta_i$ is the variable. For prismatic joints, $d_i$ is the variable.
    *   **Overall Transformation:** The total transformation from the base frame to the end-effector frame is the product of individual link transformations:
        $T_{n}^{0} = T_{1}^{0} T_{2}^{1} \dots T_{n}^{n-1}$
        where $T_{i}^{i-1}$ is the transformation matrix from frame $i-1$ to frame $i$.
*   **Importance:** Essential for understanding the robot's workspace and for planning its motion.
*   **Textbook Reference:**
    *   Craig, Chapter 4: "Kinematics" (provides detailed explanation of D-H parameters and transformation matrices).
    *   Spong, Hutchinson, & Vidyasagar, Chapter 3: "Forward Kinematics" (covers D-H parameterization and matrix methods).
*   **Course Outcome Alignment:** CO2: Apply forward and inverse kinematics for different types of robotic manipulators.

#### 2.2 Inverse Kinematics

*   **Definition:** Given the desired position and orientation of the end-effector in Cartesian space, inverse kinematics calculates the corresponding joint angles (or displacements).
*   **Complexity:** Generally much more difficult and computationally intensive than forward kinematics.
*   **Solutions:**
    *   **Analytical (Closed-Form) Solutions:** Possible for simpler robot configurations (e.g., spherical, cylindrical, SCARA robots, and some articulated robots with specific geometric properties). These solutions provide a direct mathematical formula.
    *   **Numerical (Iterative) Solutions:** Required for more complex configurations. These methods involve iterative algorithms (e.g., Jacobian-based methods like the Damped Least Squares method, or Cyclic Coordinate Descent) that converge to a solution.
*   **Jacobian Matrix:** A matrix that relates the joint velocities to the end-effector velocities. It is crucial for numerical inverse kinematics and for analyzing robot dynamics.
    *   $J(\mathbf{q}) = \frac{\partial \mathbf{p}}{\partial \mathbf{q}}$ where $\mathbf{p}$ is the end-effector pose and $\mathbf{q}$ is the vector of joint variables.
*   **Workspace:** The set of all points in space that the robot's end-effector can reach.
    *   **Reachable Workspace:** All points the end-effector can reach.
    *   **Dexterous Workspace:** All points the end-effector can reach with all possible orientations.
*   **Important Note:** Inverse kinematics can have multiple solutions (redundancy) or no solution (if the desired pose is outside the workspace).
*   **Textbook Reference:**
    *   Craig, Chapter 5: "Inverse Kinematics" (discusses analytical and numerical methods, and the Jacobian).
    *   Spong, Hutchinson, & Vidyasagar, Chapter 4: "Inverse Kinematics" (covers various methods and workspace analysis).
    *   Ghoshal, Chapter 3: "Kinematics of Manipulators" (provides a thorough treatment of forward and inverse kinematics, including D-H and Jacobian methods).
*   **Course Outcome Alignment:** CO2: Apply forward and inverse kinematics for different types of robotic manipulators.

### 3. Components of Articulated Robots

Articulated robots are composed of several key elements:

*   **Links:** The rigid structural members connecting the joints.
*   **Joints:** The movable connections between links, allowing for relative motion.
    *   **Revolute Joints:** Allow rotational motion (e.g., shoulder, elbow, wrist pitch).
    *   **Prismatic Joints:** Allow linear motion (less common in standard articulated robots, but can be found in some designs).
*   **Actuators:** The "muscles" of the robot that provide the power to move the joints.
    *   **Electric Motors (DC, AC, Stepper, Servo):** Most common due to their precision, controllability, and efficiency.
    *   **Hydraulic Actuators:** Provide high power and force, suitable for heavy-duty industrial robots.
    *   **Pneumatic Actuators:** Simpler, less expensive, and faster for less precise movements.
*   **End-Effector:** The tool or gripper attached to the end of the robot arm, designed to interact with the environment.
    *   **Grippers:** For grasping objects.
    *   **Welders, Paint Sprayers, Screwdrivers, Drills:** Specialized tools for specific tasks.
*   **Sensors:** Devices that provide feedback about the robot's state and its environment.
    *   **Proprioceptive Sensors (Internal):**
        *   **Encoders:** Measure joint angles and velocities (crucial for feedback control).
        *   **Tachometers:** Measure joint velocities.
    *   **Exteroceptive Sensors (External):**
        *   **Vision Sensors (Cameras):** For object recognition, localization, and inspection.
        *   **Proximity Sensors:** Detect the presence of objects without physical contact.
        *   **Force/Torque Sensors:** Measure forces and torques exerted by the end-effector.
*   **Control System:** The "brain" of the robot, responsible for planning, executing, and monitoring motion. It typically includes:
    *   **Controller Hardware:** Microprocessors, memory, I/O interfaces.
    *   **Controller Software:** Algorithms for motion planning, trajectory generation, and feedback control.
*   **Course Outcome Alignment:** CO1: Describe the basic components, structural configurations, and degrees of freedom (DOF) of robots. CO4: Identify and compare different types of sensors and actuators used in robotic systems.

### 4. Control of Articulated Robots

Controlling articulated robots involves regulating the motion of their joints to achieve desired end-effector trajectories.

#### 4.1 Joint-Space Control

*   **Concept:** Control is applied directly to the individual joints. The desired joint positions, velocities, and accelerations are commanded.
*   **Advantages:** Simpler to implement, less computationally intensive, often used for basic point-to-point movements.
*   **Disadvantages:** Does not directly control the end-effector's Cartesian path or orientation. The path in Cartesian space is an indirect outcome of the joint movements.

#### 4.2 Cartesian-Space Control

*   **Concept:** Control is applied to the end-effector's position and orientation in Cartesian space.
*   **Methodology:** Requires transforming the desired Cartesian path into joint-space commands using inverse kinematics at each time step or as part of the trajectory planning.
*   **Advantages:** Directly controls the end-effector's path and orientation, which is often more intuitive for task planning.
*   **Disadvantages:** Computationally more demanding due to the need for continuous inverse kinematics calculations and the potential for singularities.

#### 4.3 Types of Controllers

*   **PID (Proportional-Integral-Derivative) Control:** A fundamental feedback control loop widely used for joint control.
    *   **Proportional (P):** Output is proportional to the error (difference between desired and actual value).
    *   **Integral (I):** Accumulates past errors to eliminate steady-state error.
    *   **Derivative (D):** Predicts future errors based on the rate of change of the error, improving stability and response time.
    *   **Equation:** $u(t) = K_p e(t) + K_i \int e(t) dt + K_d \frac{de(t)}{dt}$
*   **Computed Torque Control (Dynamic Control):** A more advanced control technique that accounts for the robot's dynamic properties (inertia, Coriolis forces, gravity).
    *   **Methodology:** The control law aims to cancel out the robot's nonlinear dynamics, making the system behave like a simpler linear system.
    *   **Requires:** Accurate dynamic model of the robot.
    *   **Equation:** $\tau = M(\mathbf{q})\ddot{\mathbf{q}}_d + C(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + G(\mathbf{q}) + K_p(\mathbf{q}_d - \mathbf{q}) + K_d(\dot{\mathbf{q}}_d - \dot{\mathbf{q}})$ (where the last two terms are often a PD controller).
*   **Task-Space Control:** Control strategies that operate directly in the task-space (Cartesian space).
    *   **Jacobian-based control:** Utilizes the Jacobian matrix to relate joint torques to end-effector forces/velocities.
*   **Course Outcome Alignment:** CO3: Implement various types of controllers and explain their impact on robot motion control.

### 5. Robot Cell Layouts and Machine Interfaces

While not the primary focus of "articulated" robots, understanding how they integrate into a larger system is important.

*   **Robot Cell:** A designated area where a robot performs its tasks, often including workpieces, fixtures, tooling, and other machines.
*   **Layout Considerations:**
    *   **Workspace Optimization:** Ensuring the robot can reach all required points within the cell.
    *   **Safety:** Implementing safety zones, light curtains, and emergency stops.
    *   **Efficiency:** Minimizing cycle times and material handling distances.
    *   **Interference:** Avoiding collisions between the robot, workpieces, and other equipment.
*   **Machine Interfaces:** How the robot communicates with other machines in the cell.
    *   **PLCs (Programmable Logic Controllers):** Used to coordinate the operation of various machines.
    *   **Digital I/O:** Simple on/off signals for triggering actions.
    *   **Communication Protocols:** Industrial Ethernet, Profibus, DeviceNet for data exchange.
*   **Course Outcome Alignment:** CO5: Describe the basics of robot cell layouts considering multiple robots and machine interfaces.

### Practice Questions and Answers

**Question 1:** A 6-DOF articulated robot has joints that are all revolute. What does this mean for the robot's ability to reach points in space?

**Answer:** A 6-DOF articulated robot with all revolute joints has the capability to reach any point within its workspace with any desired orientation. The first three revolute joints typically control the position (X, Y, Z) of the end-effector, while the subsequent three revolute joints (at the wrist) control its orientation (roll, pitch, yaw).

**Question 2:** Explain the difference between forward and inverse kinematics for an articulated robot.

**Answer:**
*   **Forward Kinematics:** Given the joint angles (or displacements) of all joints, it calculates the position and orientation of the robot's end-effector in Cartesian space.
*   **Inverse Kinematics:** Given the desired position and orientation of the robot's end-effector, it calculates the required joint angles (or displacements) for each joint to achieve that pose.

**Question 3:** What are the primary components of an articulated robot's control system?

**Answer:** The primary components of an articulated robot's control system include:
1.  **Controller Hardware:** Microprocessors, memory, input/output interfaces.
2.  **Controller Software:** Algorithms for motion planning, trajectory generation, and feedback control.
3.  **Sensors:** Providing feedback on joint positions, velocities, and potentially external environment data.
4.  **Actuators:** Motors (electric, hydraulic, pneumatic) that drive the joints based on control signals.

**Question 4:** Briefly describe the Denavit-Hartenberg (D-H) convention and its purpose.

**Answer:** The Denavit-Hartenberg (D-H) convention is a standardized method for assigning coordinate frames to each link of a robotic manipulator. It uses four parameters ($a_i, \alpha_i, d_i, \theta_i$) to describe the spatial relationship between consecutive links. Its purpose is to provide a systematic and consistent way to derive the homogeneous transformation matrices used in forward kinematics, simplifying the analysis of robot manipulator geometry.

**Question 5:** What is the role of the Jacobian matrix in robot control?

**Answer:** The Jacobian matrix relates the joint velocities to the end-effector's linear and angular velocities (i.e., its twist). It is crucial for:
*   **Inverse Kinematics:** Used in iterative numerical methods to solve for joint velocities given desired end-effector velocities.
*   **Task-Space Control:** Enables control strategies that directly manipulate the end-effector's motion.
*   **Singularity Analysis:** Identifying configurations where the robot loses some degrees of freedom.
*   **Dynamics:** Relating joint torques to end-effector forces.

**Question 6:** A robot has three revolute joints. Describe its kinematic capabilities.

**Answer:** A robot with three revolute joints can typically reach any point in a 3D Cartesian space within its reach. However, its ability to orient the end-effector is limited. The three joints generally control the position (X, Y, Z), but the orientation (roll, pitch, yaw) is not independently controllable.

### Important Points to Remember

*   **Articulated robots are characterized by serial links and joints.**
*   **6-DOF articulated robots are considered fully dexterous in 3D space.**
*   **Forward kinematics is about finding the end-effector pose from joint angles.**
*   **Inverse kinematics is about finding joint angles from the desired end-effector pose and is generally more complex.**
*   **The Denavit-Hartenberg (D-H) convention is a powerful tool for systematic kinematic analysis.**
*   **Joint-space control is simpler but indirectly controls the end-effector.**
*   **Cartesian-space control directly controls the end-effector but is more computationally intensive.**
*   **PID and computed torque are common control strategies.**
*   **Sensors (like encoders) are critical for feedback control.**
*   **Actuators (like motors) provide the power to move the joints.**

This comprehensive set of notes covers the fundamentals of articulated robots, their kinematics, components, control, and integration into robot cells, aligning with the learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
