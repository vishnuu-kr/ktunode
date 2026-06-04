---
title: "3R concurrent wrist"
subject: "INTRODUCTION TO ROBOTICS"
module: "Module 2: Sensors and Actuators"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c50"
status: "completed"
scrapedAt: "2026-05-23T16:41:38.682Z"
---
# Introduction to Robotics: Module 2 - Sensors and Actuators

## Topic: 3R Concurrent Wrist

---

### 1. Introduction to Robot Wrist Mechanisms

The wrist mechanism of a robotic manipulator is crucial for providing the end-effector (or tool) with the necessary degrees of freedom (DOF) to orient itself in space. This allows the robot to perform tasks like welding, painting, assembly, and inspection, which require precise positioning and orientation of the tool.

A common configuration for a robot wrist involves **three revolute (R) joints**. These joints are typically arranged to provide three independent rotational motions:

*   **Pitch:** Rotation around an axis perpendicular to the manipulator's arm.
*   **Yaw:** Rotation around an axis parallel to the manipulator's arm.
*   **Roll:** Rotation around the central axis of the end-effector.

The term "concurrent" in "3R concurrent wrist" refers to the **coincident intersection point** of the three joint axes. This means that all three rotation axes pass through a single point in space. This geometric arrangement simplifies the kinematics of the wrist, making it easier to control and analyze.

**Key Concept:** **Degrees of Freedom (DOF)** - The number of independent variables that can be used to describe the position and orientation of a robot's end-effector. A 3R wrist provides 3 rotational DOFs.

**Relation to Course Outcomes:**
*   **CO1 (K2):** Understanding the anatomy and specifications of robots, including the functional role of wrist mechanisms.
*   **CO3 (K2):** Choosing appropriate robotic configurations for specific applications. A 3R wrist is a common and versatile configuration.

**Referenced Textbooks:**
*   *Introduction to Robotics* by S. K. Saha: Discusses various manipulator configurations and their kinematic properties.
*   *Robotics and Control* by R. K. Mittal and I. J. Nagrath: Provides insights into the design and functionality of robot wrists.
*   *Introduction to Robotics: Mechanics and Control* by John. J. Craig: Covers the kinematic analysis of articulated robots, including wrist mechanisms.

---

### 2. Kinematics of a 3R Concurrent Wrist

The concurrent nature of the joint axes in a 3R wrist significantly simplifies its forward and inverse kinematics.

**2.1. Forward Kinematics**

Forward kinematics involves determining the position and orientation of the end-effector given the joint angles. For a 3R concurrent wrist, if we define the common intersection point as the origin of the wrist frame, the forward kinematics essentially describes a rotation of a point (the end-effector's reference point) in 3D space.

Let the joint angles be $\theta_1$, $\theta_2$, and $\theta_3$ for the pitch, yaw, and roll joints, respectively. The transformation from the wrist frame to the end-effector frame can be represented by a sequence of rotations.

*   **Example Scenario:** Imagine a wrist with the following joint definitions:
    *   **Joint 1 (Pitch):** Rotation around the y-axis.
    *   **Joint 2 (Yaw):** Rotation around the z-axis.
    *   **Joint 3 (Roll):** Rotation around the x-axis.

    The combined rotation matrix $R_{wrist}$ for this sequence can be calculated as the product of individual rotation matrices:

    $R_{wrist} = R_z(\theta_2) R_y(\theta_1) R_x(\theta_3)$

    Alternatively, the order of rotations can vary depending on the specific wrist design. A common convention for concurrent wrists is:
    *   **Joint 1 (Yaw):** Rotation around the z-axis.
    *   **Joint 2 (Pitch):** Rotation around the y-axis.
    *   **Joint 3 (Roll):** Rotation around the x-axis.

    In this case, the rotation matrix is:
    $R_{wrist} = R_x(\theta_3) R_y(\theta_1) R_z(\theta_2)$

    The position of the end-effector's tool center point (TCP) can then be represented by a transformation matrix:
    $T_{wrist} = \begin{bmatrix} R_{wrist} & p_{wrist} \\ 0 & 1 \end{bmatrix}$
    where $p_{wrist}$ is the position vector of the TCP relative to the wrist frame's origin.

**2.2. Inverse Kinematics**

Inverse kinematics is more complex and involves determining the joint angles required to achieve a desired end-effector position and orientation. For a 3R concurrent wrist, the inverse kinematics is significantly simplified due to the concurrent axes.

The problem of achieving a desired end-effector orientation is decoupled from the position. If the wrist's origin is at a fixed point, the inverse kinematics primarily focuses on achieving the desired orientation.

Let the desired orientation of the end-effector be represented by a rotation matrix $R_{desired}$. We need to find $\theta_1, \theta_2, \theta_3$ such that $R_{wrist} = R_{desired}$.

For a wrist with the rotation order $R_x(\theta_3) R_y(\theta_1) R_z(\theta_2)$, we have:
$R_{desired} = R_x(\theta_3) R_y(\theta_1) R_z(\theta_2)$

This equation can be solved for the joint angles. A common approach involves decomposing the desired rotation into Euler angles (e.g., Z-Y-X or X-Y-Z sequences).

*   **Example:** Using Z-Y-X Euler angles for the desired orientation, $R_{desired} = R_z(\phi) R_y(\theta) R_x(\psi)$.
    By equating the elements of $R_{desired}$ with $R_x(\theta_3) R_y(\theta_1) R_z(\theta_2)$, we can solve for $\theta_1, \theta_2, \theta_3$.

    **Important Note:** Singularities can arise in inverse kinematics. For a 3R concurrent wrist, singularities typically occur when the $\theta_1$ joint reaches $\pm 90^\circ$, where the axes of the other two joints become collinear.

**Relation to Course Outcomes:**
*   **CO4 (K3):** Obtaining kinematic models of robotic manipulators. This section details the forward and inverse kinematics of a specific manipulator component.
*   **CO5 (K3):** Planning trajectories in joint space and Cartesian space. Understanding the kinematics is a prerequisite for trajectory planning.

**Referenced Textbooks:**
*   *Fundamentals of Robotics – Analysis and Control* by Robert. J. Schilling: Provides detailed methods for solving forward and inverse kinematics.
*   *Introduction to Robotics: Mechanics and Control* by John. J. Craig: Explains kinematic transformations and solution techniques.
*   *Robotics-Fundamental concepts and analysis* by Ashitava Ghosal: Covers kinematic analysis and its applications.

---

### 3. Actuators for 3R Concurrent Wrist

Actuators are the components responsible for generating motion in a robot. For a 3R concurrent wrist, each revolute joint requires an actuator.

**3.1. Types of Actuators**

The most common actuators used in robot wrists are:

*   **Electric Motors:**
    *   **DC Servomotors:** Widely used due to their good speed-torque characteristics, relatively low cost, and ease of control. They are typically coupled with gearboxes to increase torque and reduce speed.
    *   **Brushless DC (BLDC) Motors:** Offer higher efficiency, longer lifespan, and better power-to-weight ratio compared to brushed DC motors. They are increasingly popular in advanced robotics.
    *   **Stepper Motors:** Can provide precise open-loop control of angular position, but might lack the speed and torque capabilities for dynamic wrist movements and can lose steps under heavy loads.
*   **Hydraulic Actuators:** Provide high power density and torque, suitable for heavy-duty industrial robots. However, they are prone to leakage and require a hydraulic power unit, making them less common for precise wrist movements in lighter applications.
*   **Pneumatic Actuators:** Offer simplicity and low cost, but typically have less precise control and are more suited for simple pick-and-place operations rather than the fine movements required by a wrist.

**3.2. Actuator Selection Considerations**

When selecting actuators for a 3R concurrent wrist, several factors are critical:

*   **Torque Requirements:** The motors must provide sufficient torque to overcome the inertia of the arm segments and the end-effector, as well as any external forces during operation. The torque required varies with the position of the manipulator.
*   **Speed Requirements:** The desired speed of rotation for each joint influences the motor selection and gear ratio.
*   **Accuracy and Repeatability:** The actuator and its associated encoder (for feedback) must provide the necessary accuracy and repeatability for the intended task.
*   **Size and Weight:** Actuators are often mounted directly on the robot arm, so their size and weight are crucial to minimize the inertia of the links.
*   **Power Consumption:** Efficiency and power consumption are important for energy-conscious designs.
*   **Control System Compatibility:** The actuator must be compatible with the robot's control system.

**Relation to Course Outcomes:**
*   **CO2 (K2):** Choosing the appropriate actuators for robots. This section directly addresses the selection of actuators for a specific robot component.
*   **CO1 (K2):** Understanding robot specifications. Actuator choice impacts the robot's overall performance specifications.

**Referenced Textbooks:**
*   *Robotics Technology and Flexible Automation* by S. R. Deb: Discusses various actuator technologies and their applications in robotics.
*   *Introduction to Robotics* by S. K. Saha: Provides an overview of actuators commonly used in robotic manipulators.
*   *Robotics and Control* by R. K. Mittal and I. J. Nagrath: Covers the characteristics and selection criteria for robotic actuators.

---

### 4. Sensors for a 3R Concurrent Wrist

Sensors provide the robot with information about its internal state (e.g., joint positions) and the external environment.

**4.1. Position Sensors (Encoders)**

For each revolute joint in the 3R concurrent wrist, a **rotary encoder** is essential to measure the joint angle.

*   **Absolute Encoders:** Provide a unique digital code for each shaft position, even after power loss. This eliminates the need for homing the robot on startup.
*   **Incremental Encoders:** Generate pulses as the shaft rotates. The position is determined by counting these pulses. They are generally less expensive but require a known starting position (homing) and can lose position count if power is interrupted or during high-speed motion if not carefully managed.
*   **Optical Encoders:** The most common type, using a coded disc and an optical sensor.
*   **Magnetic Encoders:** Use magnetic principles, offering robustness in harsh environments.

The resolution of the encoder directly impacts the precision of the robot's joint angle measurement.

**4.2. Other Potential Sensors (Depending on Application)**

While position sensors are fundamental for controlling the wrist, other sensors might be integrated depending on the application:

*   **Torque Sensors:** Placed in series with the actuator or within the joint, they measure the torque applied by the actuator. This is crucial for compliant motion, force control, and detecting collisions.
*   **Force/Torque Sensors (in the End-Effector):** More commonly integrated into the end-effector itself (or the wrist flange), these sensors measure external forces and torques exerted on the tool. This is vital for tasks requiring interaction with the environment, like assembly or grinding.
*   **Proximity Sensors:** Can be used to detect nearby objects, aiding in collision avoidance or precise approach to surfaces.
*   **Vision Sensors (Cameras):** If integrated into or near the wrist, cameras can provide visual feedback for guidance, inspection, or object recognition.

**Relation to Course Outcomes:**
*   **CO2 (K2):** Choosing the appropriate sensors for robots. This section details the types of sensors used in robot wrists.
*   **CO1 (K2):** Familiarize with anatomy, specifications, and applications of robots. Understanding the role of sensors in the wrist contributes to this.

**Referenced Textbooks:**
*   *Introduction to Robotics: Mechanics and Control* by John. J. Craig: Discusses the importance of joint sensors (encoders) for feedback.
*   *Robotics Technology and Flexible Automation* by S. R. Deb: Covers various sensor types and their integration into robotic systems.
*   *Robotics-Fundamental concepts and analysis* by Ashitava Ghosal: Explains sensor fusion and the role of sensors in achieving robot intelligence.

---

### 5. Applications of 3R Concurrent Wrists

The 3R concurrent wrist configuration is highly versatile and is found in a wide range of robotic applications. Its ability to orient the end-effector in any direction makes it suitable for tasks requiring dexterity and precise tool manipulation.

**Common Applications:**

*   **Assembly:** Picking, placing, and inserting components with precise orientation.
*   **Welding:** Guiding welding torches along complex paths with consistent orientation.
*   **Painting/Spraying:** Ensuring uniform coating by maintaining the correct angle of the spray nozzle.
*   **Machine Tending:** Loading and unloading parts from CNC machines or other manufacturing equipment.
*   **Inspection:** Positioning sensors or cameras to examine parts from various angles.
*   **Surgical Robotics:** Providing fine manipulation and dexterity for minimally invasive procedures.
*   **Articulated Manipulators:** Serving as the primary wrist mechanism in many industrial robot arms (e.g., SCARA robots might have a 2-DOF wrist, but many articulated robots use a 3-DOF or more wrist).

**Example Scenario:** In a spot welding application, a 3R concurrent wrist allows the welding gun to be positioned at the exact location on a car body and oriented correctly to create a strong weld. The pitch and yaw joints can position the gun perpendicular to the surface, while the roll joint can adjust for slight misalignments or specific welding angles.

**Relation to Course Outcomes:**
*   **CO1 (K2):** Familiarise with anatomy, specifications and applications of Robots. This section provides concrete examples of where the 3R concurrent wrist is used.
*   **CO3 (K2):** Choose appropriate Robotic configuration for a particular application. Understanding the capabilities of a 3R wrist helps in application selection.

**Referenced Textbooks:**
*   *Introduction to Robotics* by S. K. Saha: Illustrates the use of different robot configurations, including those with 3R wrists, in industrial settings.
*   *Robotics Technology and Flexible Automation* by S. R. Deb: Discusses the role of end-effectors and wrist mechanisms in various automation tasks.

---

### 6. Design Considerations and Limitations

**6.1. Design Considerations**

*   **Compactness:** The wrist mechanism needs to be as compact as possible to minimize interference with the workspace and to reduce the overall inertia.
*   **Stiffness:** The wrist structure must be stiff enough to avoid excessive deflection under load, which would degrade positioning accuracy.
*   **Payload Capacity:** The actuators and structure must be capable of supporting the weight of the end-effector and any payload.
*   **Cable Management:** Routing of wires for sensors and actuators through the rotating joints needs careful design to prevent damage or entanglement.
*   **Joint Range:** The physical limits of each joint's rotation must be considered during design.

**6.2. Limitations**

*   **Singularities:** As mentioned in the kinematics section, concurrent wrists can experience singularities where certain orientations become unreachable or require infinite joint velocities.
*   **Workspace Limitations:** While offering dexterity, the physical extent of rotation for each joint limits the reachable workspace for the end-effector.
*   **Complexity of Control:** Despite the simplified kinematics, achieving precise motion control requires accurate sensor feedback and sophisticated control algorithms, especially when dealing with dynamic loads and external forces.
*   **Number of DOFs:** For tasks requiring more than three rotational degrees of freedom (e.g., a twisting motion combined with articulation), a 3R wrist might be insufficient, requiring additional joints or a more complex wrist configuration (e.g., a 3R + 3P wrist).

**Relation to Course Outcomes:**
*   **CO3 (K2):** Choosing appropriate Robotic configuration for a particular application. Understanding limitations helps in making informed choices.
*   **CO6 (K3):** Develop dynamic model and design the controller for robotic manipulators. Design considerations directly feed into dynamic modeling and controller design.

**Referenced Textbooks:**
*   *Introduction to Robotics: Mechanics and Control* by John. J. Craig: Discusses design trade-offs and limitations of robot manipulators.
*   *Robotics Technology and Flexible Automation* by S. R. Deb: Covers aspects of mechanical design for robotic systems.

---

### 7. Practice Questions and Answers

**Question 1:** What does the term "concurrent" refer to in a 3R concurrent wrist?
**Answer:** It refers to the fact that the axes of all three revolute joints intersect at a single common point in space.

**Question 2:** List three common types of actuators used in robot wrists.
**Answer:** Electric motors (DC servomotors, BLDC motors), Hydraulic actuators, Pneumatic actuators. (Focus on electric motors as the most common for wrists).

**Question 3:** What is the primary sensor used to measure the joint angle of each revolute joint in a 3R wrist?
**Answer:** A rotary encoder.

**Question 4:** Explain the advantage of a concurrent wrist in terms of its kinematics.
**Answer:** The concurrent nature simplifies both forward and inverse kinematics, particularly for orientation control. The problem of achieving a desired end-effector orientation is decoupled from the position.

**Question 5:** Name one significant limitation of a 3R concurrent wrist.
**Answer:** Potential for kinematic singularities (e.g., when the pitch joint angle is $\pm 90^\circ$).

**Question 6:** For a task requiring precise guidance of a welding torch, which type of robot wrist configuration would be most suitable and why?
**Answer:** A 3R concurrent wrist. Its three rotational degrees of freedom allow the welding torch to be precisely positioned and oriented to maintain the correct angle relative to the workpiece surface, ensuring consistent weld quality.

---

### 8. Key Points to Remember

*   A 3R concurrent wrist provides **three rotational degrees of freedom** for orienting the end-effector.
*   The **concurrent intersection** of joint axes simplifies kinematic analysis.
*   **Forward kinematics** involves calculating end-effector pose from joint angles, often using rotation matrices.
*   **Inverse kinematics** for a 3R wrist focuses on achieving a desired orientation and is generally simpler than for non-concurrent wrists.
*   **Singularities** are a critical consideration in the kinematics of concurrent wrists.
*   **Electric motors (DC servomotors, BLDC motors)** are the most common actuators for robot wrists due to their speed, torque, and control characteristics.
*   **Rotary encoders** are essential sensors for measuring joint angles in each revolute joint.
*   **Compactness, stiffness, and cable management** are crucial design considerations for robot wrists.
*   3R concurrent wrists are widely used in applications like **assembly, welding, painting, and machine tending** due to their dexterity.

---
This study material covers the fundamental aspects of the 3R concurrent wrist, aligning with the learning outcomes and course objectives for Introduction to Robotics. The content draws upon the principles and information found in the specified reference textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
