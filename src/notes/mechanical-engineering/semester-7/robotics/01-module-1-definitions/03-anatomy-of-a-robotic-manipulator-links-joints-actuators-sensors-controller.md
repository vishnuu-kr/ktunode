---
title: "Anatomy of a robotic manipulator-links, joints, actuators, sensors, controller"
subject: "ROBOTICS"
module: "Module 1: Definitions"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446423e"
status: "completed"
scrapedAt: "2026-05-20T18:18:35.439Z"
---
# ROBOTICS: Module 1: Definitions

## Topic: Anatomy of a Robotic Manipulator

This module introduces the fundamental components that constitute a robotic manipulator, providing the building blocks for understanding more complex robotic systems and their functionalities.

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Identify and describe the primary components of a robotic manipulator.
*   Explain the function of each component within the manipulator's operation.
*   Differentiate between various types of joints and actuators used in robotics.
*   Understand the role of sensors in robotic manipulation and control.
*   Recognize the importance of the controller in orchestrating the manipulator's actions.

---

### 1. Introduction to Robotic Manipulators

A robotic manipulator is an artificial mechanical arm or limb that can be programmed to perform a variety of tasks. It is the physical interface of a robot that interacts with the environment. Understanding its anatomy is crucial for comprehending how robots move, sense, and perform actions.

**Key Concept:** A robotic manipulator is essentially a kinematic chain of links and joints, driven by actuators and controlled by a system that processes information from sensors.

---

### 2. Core Components of a Robotic Manipulator

The primary components of a robotic manipulator can be categorized as follows:

*   **Links:** The rigid bodies connecting the joints.
*   **Joints:** The interfaces between links that allow relative motion.
*   **Actuators:** The devices that provide the force or torque to move the joints.
*   **Sensors:** The devices that provide information about the manipulator's state and the environment.
*   **Controller:** The "brain" of the manipulator that processes sensor data and sends commands to actuators.

---

### 3. Links

*   **Definition:** Links are the rigid structural components of a manipulator that connect its various joints. They are analogous to bones in a biological arm.
*   **Function:**
    *   Provide the physical structure and spatial arrangement of the manipulator.
    *   Transmit forces and torques between joints.
    *   Define the reach and configuration of the manipulator.
*   **Types of Links:**
    *   **Base Link:** The stationary link connected to the manipulator's mounting point (e.g., the ground, a mobile platform).
    *   **End-Effector Link (Tool Link):** The link at the end of the manipulator, to which the end-effector is attached.
    *   **Intermediate Links:** All other links connecting successive joints.
*   **Characteristics:**
    *   Can be of various shapes and sizes, optimized for strength, weight, and stiffness.
    *   Their geometry and relative positions are critical for kinematic analysis.
*   **Textbook Reference:** Schilling (1996) often refers to links as the fundamental elements defining the serial kinematic chain. Craig (2002) also emphasizes the importance of link geometry in defining the manipulator's structure.

---

### 4. Joints

*   **Definition:** Joints are the movable connections between successive links that allow relative motion. They are the "articulations" of the manipulator.
*   **Function:**
    *   Enable relative movement between links, allowing the manipulator to change its configuration.
    *   Define the degrees of freedom (DOF) of the manipulator.
*   **Degrees of Freedom (DOF):** The number of independent parameters that define the configuration of the manipulator. Each joint typically contributes one DOF.
*   **Types of Joints (based on relative motion):**
    *   **Prismatic Joint (Linear Joint):** Allows relative linear motion between two links. Often denoted by 'P'.
        *   **Example:** A drawer slide, a linear actuator.
    *   **Revolute Joint (Rotary Joint):** Allows relative rotational motion between two links. Often denoted by 'R'.
        *   **Example:** An elbow joint, a wrist joint.
*   **Common Joint Configurations:**
    *   **Cartesian/Gantry Robots:** Primarily use prismatic joints.
    *   **Cylindrical Robots:** Use one revolute joint and two prismatic joints.
    *   **Spherical/Polar Robots:** Use two revolute joints and one prismatic joint.
    *   **Articulated/Anthropomorphic Robots:** Use three revolute joints, resembling a human arm.
    *   **SCARA Robots (Selective Compliance Assembly Robot Arm):** Use two parallel revolute joints in the horizontal plane and one prismatic joint for vertical motion.
*   **Textbook Reference:** Saha (McGraw Hill) and Mittal (Tata McGraw Hill) provide detailed classifications and examples of different joint types and their implications for manipulator kinematics. Ghoshal (Oxford University Press) also extensively covers joint types in the context of kinematic modeling.

---

### 5. Actuators

*   **Definition:** Actuators are the devices that provide the motive power to move the joints of the manipulator. They convert energy (electrical, hydraulic, pneumatic) into mechanical motion.
*   **Function:**
    *   Generate the forces or torques required to rotate or translate the joints.
    *   Enable the manipulator to perform its intended movements.
*   **Types of Actuators:**
    *   **Electric Motors:**
        *   **DC Motors:** Common, relatively simple to control. Can be brushed or brushless. Brushless DC (BLDC) motors are increasingly popular due to efficiency and longevity.
        *   **AC Motors:** Used for larger industrial robots, often with variable frequency drives (VFDs).
        *   **Stepper Motors:** Offer precise positioning without feedback (open-loop control), suitable for tasks requiring high repeatability but lower speed.
        *   **Servo Motors:** Combine a motor with a feedback mechanism (encoder) and a control system for precise control of position, velocity, and torque. Widely used in robotic manipulators.
    *   **Hydraulic Actuators:**
        *   Use pressurized fluid (oil) to generate high forces and torques.
        *   Suitable for heavy-duty applications requiring significant power.
        *   Can be less precise and more prone to leakage than electric actuators.
    *   **Pneumatic Actuators:**
        *   Use compressed air to generate force.
        *   Simple, inexpensive, and fast for linear motion.
        *   Less precise and harder to control for position compared to electric or hydraulic systems.
*   **Gear Reducers:** Often used in conjunction with motors to increase torque and reduce speed, improving precision and controllability. Common types include spur gears, planetary gears, and harmonic drives.
*   **Textbook Reference:** Schilling (1996) and Craig (2002) discuss various actuator technologies and their characteristics, emphasizing the trade-offs between power, speed, precision, and cost. Deb (Second Edition) also covers actuator selection for flexible automation.

---

### 6. Sensors

*   **Definition:** Sensors are devices that measure physical quantities and convert them into signals that can be interpreted by the controller. They provide information about the manipulator's internal state and its external environment.
*   **Function:**
    *   **Feedback:** Provide information about the actual position, velocity, or force of the joints (e.g., encoders, tachometers, force sensors). This is crucial for closed-loop control.
    *   **Environment Perception:** Allow the robot to "see" and "feel" its surroundings (e.g., cameras, proximity sensors, tactile sensors).
*   **Types of Sensors:**
    *   **Internal Sensors (Proprioceptive Sensors):** Measure the state of the robot itself.
        *   **Position Sensors:**
            *   **Encoders:** Measure rotational or linear displacement. Incremental encoders provide relative changes, while absolute encoders provide the actual position.
            *   **Potentiometers:** Analog devices that measure angular position.
            *   **Resolvers:** Analog sensors that provide angular position information, robust to harsh environments.
        *   **Velocity Sensors:**
            *   **Tachometers:** Measure angular or linear velocity.
        *   **Force/Torque Sensors:** Measure the forces and torques acting on the joints or at the end-effector. Essential for compliant motion and interaction with the environment.
        *   **Current Sensors:** Monitor motor current, which can be related to torque.
    *   **External Sensors (Exteroceptive Sensors):** Measure information about the environment.
        *   **Vision Sensors (Cameras):** Provide visual information for object recognition, tracking, and navigation.
        *   **Proximity Sensors:** Detect the presence of objects within a certain range (e.g., infrared, ultrasonic sensors).
        *   **Tactile Sensors:** Provide information about contact forces and surface properties.
        *   **Range Sensors (Lidar, Radar):** Measure distances to objects, crucial for navigation and mapping.
*   **Textbook Reference:** Ghoshal (Oxford University Press) and Siegwart, Roland (Second Edition) dedicate significant portions to various sensor types and their application in robotics, particularly for perception and control. Siciliano & Khatib (Springer) as well as Lynch & Park (Modern Robotics) also delve into the role of sensing for advanced robotic capabilities.

---

### 7. Controller

*   **Definition:** The controller is the computational unit of the robotic manipulator. It processes sensor data, executes programmed instructions, and generates control signals for the actuators.
*   **Function:**
    *   **Trajectory Planning:** Determines the desired path of the end-effector and joints.
    *   **Motion Control:** Implements algorithms to make the manipulator follow the planned trajectory by controlling joint velocities and positions.
    *   **Sensing and Perception:** Processes data from sensors to understand the robot's state and its environment.
    *   **Decision Making:** Makes decisions based on sensor input and program logic.
    *   **Safety and Error Handling:** Monitors system performance and responds to anomalies.
*   **Components of a Control System:**
    *   **Microprocessor/Computer:** The central processing unit.
    *   **Input/Output (I/O) Interfaces:** For communication with sensors and actuators.
    *   **Software:** Algorithms for kinematics, dynamics, trajectory planning, and control.
*   **Types of Control:**
    *   **Open-Loop Control:** The controller sends commands to actuators without using feedback. Simpler, but less accurate and sensitive to disturbances.
    *   **Closed-Loop Control (Feedback Control):** The controller uses sensor feedback to adjust actuator commands and correct deviations from the desired state. More accurate and robust.
        *   **PID Control:** A common closed-loop control technique.
*   **Textbook Reference:** Mittal (Tata McGraw Hill) and Saha (McGraw Hill) cover various control strategies for robotic manipulators. Craig (2002) and Ghoshal (Oxford University Press) provide foundational knowledge on robot control architectures and algorithms. Lynch & Park (Modern Robotics) and Siciliano et al. (Robotics Modelling, Planning and Control) offer advanced control techniques.

---

### **Important Points to Remember:**

*   **Interdependence:** All components are interconnected. The type of joints dictates the degrees of freedom, the actuators must be chosen to power these joints, sensors are needed for feedback and perception, and the controller orchestrates everything.
*   **Degrees of Freedom (DOF):** A key concept derived from the number and type of joints. It determines the manipulator's flexibility and its ability to reach different positions and orientations.
*   **Kinematics vs. Dynamics:** While this topic focuses on anatomy, understanding the anatomy is the first step towards analyzing the manipulator's kinematics (motion without considering forces) and dynamics (motion considering forces).
*   **Actuator-Joint Matching:** The actuator's torque/force output and speed must be appropriate for the joint it drives and the payload it needs to move.
*   **Sensor Resolution and Accuracy:** The performance of the manipulator is directly influenced by the quality of its sensors.

---

### **Practice Questions and Exercises:**

**Question 1:**
What are the two primary types of joints found in most robotic manipulators, and what type of motion does each allow?

**Answer:**
The two primary types of joints are:
1.  **Revolute Joint:** Allows rotational (angular) motion.
2.  **Prismatic Joint:** Allows linear (translational) motion.

**Question 2:**
Identify the role of encoders in a robotic manipulator.

**Answer:**
Encoders are position sensors. They provide feedback to the controller about the actual angular or linear position of a joint, enabling precise control and monitoring of the manipulator's configuration.

**Question 3:**
A robot arm with three revolute joints is often called an "anthropomorphic" manipulator. What does this term imply about its structure and capability?

**Answer:**
The term "anthropomorphic" implies that the manipulator's structure resembles a human arm, typically with a shoulder, elbow, and wrist-like joints. This configuration allows for a high degree of dexterity and ability to reach various points in space and orientation, similar to human arm movements.

**Question 4:**
What is the fundamental difference between open-loop and closed-loop control in the context of robotic manipulators?

**Answer:**
*   **Open-loop control** sends commands to actuators without monitoring the actual output. It relies on pre-programmed actions and is sensitive to external disturbances.
*   **Closed-loop control** uses sensor feedback to compare the actual output with the desired output and adjusts actuator commands accordingly. This makes it more accurate, robust, and capable of handling disturbances.

**Question 5:**
Consider a SCARA robot. Describe the typical configuration of its joints and the type of motion each provides.

**Answer:**
A SCARA robot typically has:
*   Two parallel revolute joints in the horizontal plane, allowing for planar motion (reach and sweep).
*   One prismatic joint for vertical movement (lifting/lowering).
*   Optionally, a revolute joint at the end-effector for orientation (rotation around the vertical axis).

**Question 6:**
Which type of actuator would you likely choose for a heavy-duty industrial robot requiring high forces and torques, and why?

**Answer:**
You would likely choose **hydraulic actuators**. Hydraulic systems can generate very high forces and torques efficiently, making them suitable for handling heavy payloads and performing powerful movements. However, they might require more complex maintenance and can be less precise than electric counterparts for very fine movements.

---

### **Alignment with Course Outcomes:**

*   **CO1: Familiarise with anatomy, specifications and types of Robots (Knowledge Level: K2)**
    *   This entire topic directly addresses CO1 by defining and describing the core anatomical components (links, joints, actuators, sensors, controller) of robotic manipulators, along with the types of joints and actuators.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
