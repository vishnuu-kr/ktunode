---
title: "Anatomy of a robotic manipulator-links, joints, actuators, sensors, controller"
subject: "INTRODUCTION TO ROBOTICS"
module: "Module 1: Definitions"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c41"
status: "completed"
scrapedAt: "2026-05-23T16:41:15.975Z"
---
# INTRODUCTION TO ROBOTICS - Module 1: Definitions

## Topic: Anatomy of a Robotic Manipulator

This module introduces the fundamental building blocks of a robotic manipulator, essential for understanding how robots interact with their environment and perform tasks. We will explore the key components that constitute a robotic system, focusing on their definitions, functions, and interrelationships.

---

### Learning Outcomes

Upon completion of this topic, you will be able to:

*   **Identify and describe the main components of a robotic manipulator.** (K2)
*   **Explain the function of links and joints in a robotic manipulator.** (K2)
*   **Categorize different types of joints and their degrees of freedom.** (K2)
*   **Describe the role of actuators in providing motion to a robotic manipulator.** (K2)
*   **Understand the importance and types of sensors in robotic systems.** (K2)
*   **Explain the basic function of a robotic controller.** (K2)

---

### Course Outcomes Addressed

This topic directly contributes to:

*   **CO1: Familiarise with anatomy, specifications and applications of Robots (Knowledge Level: K2)** - By dissecting the components, we gain a foundational understanding of robot anatomy.
*   **CO2: Choose the appropriate sensors and actuators for robots (Knowledge Level: K2)** - Understanding the function of sensors and actuators is the first step in selecting them for specific applications.
*   **CO3: Choose appropriate Robotic configuration and gripper for a particular application (Knowledge Level: K2)** - Knowledge of joints and links lays the groundwork for understanding different robotic configurations.

---

## 1. Introduction to Robotic Manipulators

A **robotic manipulator** is an artificial arm, typically programmable, that can perform tasks requiring repetitive motion or hazardous conditions. It is the mechanical component of a robot that interacts directly with the physical environment to accomplish a task.

### Key Concept: Degrees of Freedom (DOF)

The **Degrees of Freedom (DOF)** of a manipulator refer to the number of independent motions it can make. Each DOF corresponds to a specific way the manipulator can move in space. For a manipulator in 3D space, a point has 6 DOF: 3 translational (x, y, z) and 3 rotational (roll, pitch, yaw).

---

## 2. Anatomy of a Robotic Manipulator

A typical robotic manipulator consists of several interconnected components:

### 2.1. Links

*   **Definition:** Links are the rigid segments that connect the joints of a robotic manipulator. They form the "bones" of the robot.
*   **Function:** Links define the geometric structure and reach of the manipulator. Their length and arrangement determine the manipulator's workspace.
*   **Types:**
    *   **Base Link:** The stationary link to which the manipulator is attached.
    *   **Moving Links:** Links that are connected to joints and are capable of relative motion.
*   **Textbook Reference:**
    *   **Saha (2014):** Introduces links as fundamental structural elements that connect joints and form the serial chain of the manipulator.
    *   **Craig (2018):** Discusses links in the context of defining the spatial relationships between consecutive joints, often represented by transformation matrices.

### 2.2. Joints

*   **Definition:** Joints are the connections between consecutive links that allow relative motion between them. They are the "articulations" of the robot.
*   **Function:** Joints enable the manipulator to move and position its end-effector in space. The type and arrangement of joints determine the manipulator's configuration and its ability to reach different points in its workspace.
*   **Types of Joints (based on motion):**
    *   **Prismatic Joint (or Sliding Joint):** Allows linear motion along a single axis. Typically represented by a "P" in notation.
        *   **Example:** A drawer sliding in and out.
        *   **DOF:** 1 (linear).
    *   **Revolute Joint (or Rotary Joint):** Allows rotational motion around a single axis. Typically represented by an "R" in notation.
        *   **Example:** An elbow bending.
        *   **DOF:** 1 (rotational).
*   **Types of Joints (based on configuration):**
    *   **Cartesian/Gantry Robot:** Uses only prismatic joints. Moves along X, Y, and Z axes.
    *   **Cylindrical Robot:** Has one revolute joint and two prismatic joints. Offers a cylindrical workspace.
    *   **Spherical/Polar Robot:** Has two revolute joints and one prismatic joint. Offers a spherical workspace.
    *   **Articulated/Revolute Robot (Anthropomorphic Robot):** Has three or more revolute joints, similar to a human arm. This is the most common configuration.
    *   **SCARA (Selective Compliance Assembly Robot Arm):** Typically has two parallel revolute joints in the horizontal plane and one prismatic joint in the vertical direction. Known for compliance in the horizontal plane.
*   **Textbook Reference:**
    *   **Schilling (1996):** Provides a detailed classification of joints and their contribution to the manipulator's DOF.
    *   **Mittal & Nagrath (2003):** Discusses joint types in the context of kinematic analysis and how they define the manipulator's structure.
    *   **Ghosal (2006):** Explains how joints facilitate relative motion between links and their impact on the manipulator's workspace.
    *   **Deb (2nd Ed.):** Details the different robot configurations based on joint types and their suitability for specific applications.

### 2.3. Actuators

*   **Definition:** Actuators are the "muscles" of the robot, responsible for generating the motion of the joints. They convert energy (electrical, pneumatic, hydraulic) into mechanical motion.
*   **Function:** To drive the joints and enable the manipulator to move, position its end-effector, and exert forces.
*   **Types of Actuators:**
    *   **Electric Motors:**
        *   **DC Motors:** Common, affordable, and easy to control. Can be brushed or brushless.
        *   **AC Motors:** Used for larger robots and higher power applications.
        *   **Stepper Motors:** Provide precise incremental movements without the need for feedback (open-loop control).
        *   **Servomotors:** Motors with integrated feedback mechanisms (encoders) for precise position, velocity, and torque control. Widely used in industrial robots.
    *   **Hydraulic Actuators:**
        *   **Hydraulic Motors/Cylinders:** Provide high torque and force, suitable for heavy-duty applications. Require hydraulic fluid and pumps.
        *   **Advantages:** High power density, robust.
        *   **Disadvantages:** Can be messy, require maintenance, less precise than electric actuators.
    *   **Pneumatic Actuators:**
        *   **Pneumatic Cylinders/Motors:** Use compressed air to generate motion. Simple, fast, and clean.
        *   **Advantages:** Low cost, fast response, inherently safe in explosive environments.
        *   **Disadvantages:** Limited force, difficult to control precisely, require compressed air supply.
*   **Textbook Reference:**
    *   **Saha (2014):** Categorizes actuators and discusses their suitability for different robot applications based on power, speed, and precision requirements.
    *   **Schilling (1996):** Explores the principles of operation for various actuator types and their control characteristics.
    *   **Mittal & Nagrath (2003):** Discusses the selection of actuators for achieving desired joint torques or forces.
    *   **Craig (2018):** Details the use of servomotors and their control systems in robotic manipulators.
    *   **Deb (2nd Ed.):** Provides insights into selecting actuators based on torque, speed, and accuracy requirements for specific robotic tasks.

### 2.4. Sensors

*   **Definition:** Sensors are the "senses" of the robot, providing information about the robot's internal state and its external environment.
*   **Function:** To gather data that the controller uses to make decisions, monitor progress, and ensure safe operation.
*   **Types of Sensors:**
    *   **Internal State Sensors (Proprioceptive Sensors):**
        *   **Position Sensors:** Measure the angle of revolute joints or the displacement of prismatic joints.
            *   *Examples:* Encoders (optical or magnetic), Potentiometers, Resolvers.
        *   **Velocity Sensors:** Measure the speed of joint motion.
            *   *Examples:* Tachometers, integrated encoders.
        *   **Torque/Force Sensors:** Measure the torque applied at a joint or the force exerted by the end-effector.
            *   *Examples:* Strain gauges, load cells, torque sensors.
    *   **External Environment Sensors (Exteroceptive Sensors):**
        *   **Proximity Sensors:** Detect the presence of objects without physical contact.
            *   *Examples:* Inductive, capacitive, ultrasonic, photoelectric sensors.
        *   **Tactile Sensors:** Provide information about contact with an object, including pressure distribution and texture.
            *   *Examples:* Touch sensors, force-sensing skins.
        *   **Vision Sensors (Cameras):** Capture visual information from the environment.
            *   *Examples:* Monochrome, color, stereo cameras, depth cameras. Used for object recognition, localization, and inspection.
        *   **Range Sensors (Lidar, Radar):** Measure the distance to objects.
            *   *Examples:* Lidar (Light Detection and Ranging), Radar (Radio Detection and Ranging).
        *   **Position/Navigation Sensors:** Help the robot determine its own position and orientation in the environment.
            *   *Examples:* GPS, Inertial Measurement Units (IMUs).
*   **Textbook Reference:**
    *   **Saha (2014):** Classifies sensors into proprioceptive and exteroceptive categories and discusses their role in feedback control.
    *   **Schilling (1996):** Provides a comprehensive overview of various sensor types, their operating principles, and applications in robotics.
    *   **Mittal & Nagrath (2003):** Discusses the integration of sensors into control loops for closed-loop operation.
    *   **Craig (2018):** Focuses on encoders for joint position feedback and vision systems for task-oriented sensing.
    *   **Ghosal (2006):** Explains the importance of sensory feedback for robot perception and interaction.
    *   **Deb (2nd Ed.):** Offers practical guidance on selecting sensors for different robot functionalities like navigation and manipulation.

### 2.5. Controller

*   **Definition:** The controller is the "brain" of the robot. It is a computer system that processes sensory information and generates commands for the actuators.
*   **Function:**
    *   **Planning:** Determines the sequence of actions to achieve a task.
    *   **Path Generation:** Calculates the required joint movements to follow a desired trajectory.
    *   **Control:** Generates signals for actuators to execute the planned movements.
    *   **Sensing Integration:** Processes data from sensors to monitor the robot's state and its environment.
    *   **Decision Making:** Adapts behavior based on sensory input and task requirements.
*   **Components of a Controller:**
    *   **Hardware:** Microprocessors, memory, input/output interfaces for actuators and sensors.
    *   **Software:** Operating system, control algorithms, planning modules, user interface.
*   **Types of Control:**
    *   **Open-loop Control:** The controller sends commands to actuators without considering feedback from sensors. Less precise and susceptible to disturbances.
    *   **Closed-loop Control:** The controller uses feedback from sensors to adjust actuator commands and achieve the desired output. More accurate and robust.
*   **Textbook Reference:**
    *   **Saha (2014):** Discusses various control strategies and the role of the controller in managing the robot's behavior.
    *   **Schilling (1996):** Explores the fundamental concepts of robot control, including PID control and trajectory planning.
    *   **Mittal & Nagrath (2003):** Delves into the mathematical models of robot dynamics and control techniques for achieving desired performance.
    *   **Craig (2018):** Covers hierarchical control architectures and the implementation of motion control algorithms.
    *   **Ghosal (2006):** Explains the hierarchical nature of robot control, from low-level joint control to high-level task planning.
    *   **Deb (2nd Ed.):** Discusses the software architecture of robot controllers and the integration of different functional modules.

---

## 3. Important Points to Remember

*   **Interdependence:** All components (links, joints, actuators, sensors, controller) work together synergistically. A failure or limitation in one component affects the entire system.
*   **Degrees of Freedom (DOF):** Crucial for understanding a robot's mobility and workspace. Typically, a manipulator needs at least 6 DOF to reach any arbitrary position and orientation in 3D space (task-space DOF).
*   **Workspace:** The set of all points in space that the end-effector of a manipulator can reach. It is determined by the manipulator's geometry (link lengths) and joint limits.
*   **Actuator Selection:** Driven by requirements for torque/force, speed, precision, and cost.
*   **Sensor Integration:** Essential for feedback control, enabling robots to operate accurately and safely in dynamic environments.
*   **Controller's Role:** Orchestrates the entire operation, translating tasks into physical actions.

---

## 4. Practice Questions

**Instructions:** Answer the following questions to test your understanding of the topic.

1.  **Question:** What are the two primary types of joints in a robotic manipulator, and what kind of motion does each allow?
    **Answer:** The two primary types are Revolute joints, which allow rotational motion around an axis, and Prismatic joints, which allow linear sliding motion along an axis.

2.  **Question:** Give an example of a robotic manipulator configuration that uses only prismatic joints.
    **Answer:** A Cartesian or Gantry robot configuration uses only prismatic joints.

3.  **Question:** Which component of a robotic manipulator is responsible for generating motion?
    **Answer:** Actuators are responsible for generating motion.

4.  **Question:** Differentiate between proprioceptive and exteroceptive sensors in robotics. Provide an example of each.
    **Answer:**
    *   **Proprioceptive sensors** provide information about the robot's internal state. Example: An encoder measuring joint angle.
    *   **Exteroceptive sensors** provide information about the robot's external environment. Example: A camera capturing an image of the workspace.

5.  **Question:** What is the fundamental role of the controller in a robotic system?
    **Answer:** The controller is the "brain" of the robot; it processes sensory information, plans actions, and generates commands for the actuators to execute tasks.

6.  **Question:** A robot arm has two revolute joints and one prismatic joint. How many degrees of freedom does this manipulator have? What type of configuration might this represent?
    **Answer:** This manipulator has 3 degrees of freedom (2 revolute + 1 prismatic). This configuration might represent a form of a spherical or polar robot, depending on the orientation of the joints.

7.  **Question:** Briefly explain why closed-loop control is generally preferred over open-loop control in robotics.
    **Answer:** Closed-loop control uses feedback from sensors to continuously monitor and adjust actuator commands, allowing for greater accuracy, disturbance rejection, and robustness compared to open-loop control, which does not use feedback.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
