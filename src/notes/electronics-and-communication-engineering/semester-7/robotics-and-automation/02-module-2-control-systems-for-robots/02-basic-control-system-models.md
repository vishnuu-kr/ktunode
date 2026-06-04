---
title: "Basic Control System Models:"
subject: "ROBOTICS AND AUTOMATION"
module: "Module 2: Control Systems for Robots"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff189"
status: "completed"
scrapedAt: "2026-05-23T18:09:39.868Z"
---
# Module 2: Control Systems for Robots

## Topic: Basic Control System Models

This module delves into the fundamental principles of how robots are controlled, enabling them to perform tasks accurately and efficiently. We will explore the basic models that form the foundation of robot control systems, ensuring we meet the learning outcomes related to understanding and applying control principles.

### Learning Outcomes:

*   Understand the general structure of a feedback control system.
*   Identify the key components of a robot control system.
*   Familiarize with the concept of robot motion control.
*   Differentiate between open-loop and closed-loop control systems.
*   Explain the role of sensors and actuators in robot control.
*   Understand the concept of desired trajectory and its importance.
*   Introduce the concept of error and its role in control.
*   Introduce basic control strategies like Proportional (P) control.

---

### 1. General Structure of a Feedback Control System

A feedback control system is a system that aims to maintain a desired output by comparing the actual output with the desired output and using the difference (error) to adjust the system's input. This closed-loop nature allows for robustness against disturbances and uncertainties.

**Key Concepts:**

*   **System/Plant:** The entity being controlled (in our case, the robot manipulator).
*   **Controller:** The "brain" of the system that decides how to act.
*   **Input/Reference Signal:** The desired state or trajectory for the system.
*   **Output:** The actual state of the system.
*   **Sensor:** Measures the actual output of the system.
*   **Actuator:** Implements the control signal to affect the system's input.
*   **Feedback:** The signal from the sensor representing the actual output.
*   **Error Signal:** The difference between the desired input and the feedback signal.

**General Block Diagram:**

```
+-------------------+     +-----------+     +----------+     +---------+
|   Reference       |---->| Controller|---->| Actuator |---->|  System |
|    (Desired)      |     +-----------+     +----------+     |  (Robot)|
+-------------------+           ^                              +---------+
                                |                                    |
                                | Feedback                           | Actual
                                |                                    | Output
                                v                                    |
                          +-----------+     +---------+              |
                          |   Error   |<----| Sensor  |--------------+
                          +-----------+     +---------+
                                ^
                                |
                                +------------------------------------+
```

**Explanation of Blocks:**

*   **Reference (Desired):** This is the target state we want the robot to reach or the path it needs to follow. For a robot arm, this could be a desired joint angle or end-effector position.
*   **Controller:** This block takes the error signal and computes a control signal to send to the actuator.
*   **Actuator:** These are the motors, servos, or hydraulic systems that convert the control signal into physical movement, applying torque or force to the robot's joints.
*   **System (Robot):** This is the physical robot manipulator, including its links, joints, and end-effector.
*   **Sensor:** These devices (e.g., encoders for joint angles, vision systems for position) measure the actual state of the robot.
*   **Error:** Calculated as `Error = Reference - Actual Output`. This is the core of feedback control. The controller aims to minimize this error.

**Textbook Reference:**

*   **Craig, "Introduction to Robotics: Mechanics and Control" (Chapter 7: Robot Control):** Craig provides a thorough explanation of the fundamental feedback control loop and its application to robot manipulators, discussing the roles of sensors and actuators in detail.
*   **Spong, Hutchinson, & Vidyasagar, "Robot Modeling and Control" (Chapter 1: Introduction):** This book sets the stage by introducing the concept of robotic control and the need for feedback mechanisms, often illustrating with basic block diagrams.

---

### 2. Key Components of a Robot Control System

A robot control system is a complex arrangement of hardware and software designed to execute tasks. Its core components work in synergy to achieve the desired motion.

**Key Components:**

*   **Sensors:**
    *   **Proprioceptive Sensors:** Measure internal states of the robot (e.g., joint angles, velocities, torques).
        *   **Encoders:** Measure joint angles (rotary or linear).
        *   **Tachometers:** Measure joint velocities.
        *   **Force/Torque Sensors:** Measure forces and torques at joints or the end-effector.
    *   **Exteroceptive Sensors:** Measure external environmental information (e.g., position, distance, presence of objects).
        *   **Vision Systems (Cameras):** Provide visual feedback for object recognition, localization, and navigation.
        *   **Proximity Sensors (Infrared, Ultrasonic):** Detect the presence of nearby objects.
        *   **Tactile Sensors:** Detect contact with surfaces.
*   **Actuators:**
    *   **Electric Motors (DC, AC, Stepper, Servo):** Convert electrical energy into mechanical rotation to drive robot joints.
    *   **Hydraulic Actuators:** Provide high power and force for heavy-duty applications.
    *   **Pneumatic Actuators:** Simpler and often used for grippers or lighter movements.
*   **Controller (Computer/Microprocessor):**
    *   Processes sensor data.
    *   Executes control algorithms.
    *   Generates control signals for actuators.
    *   Manages task planning and sequencing.
*   **User Interface:**
    *   Allows human operators to interact with the robot, set goals, monitor progress, and intervene if necessary.
*   **Power Supply:**
    *   Provides the necessary electrical or hydraulic power to the actuators and control system.
*   **Robot Manipulator:**
    *   The mechanical structure (links and joints) of the robot.

**Course Outcome Alignment:**

*   **CO1:** Understanding these components is crucial for describing the basic configurations and functional aspects of robots.
*   **CO4:** This section directly addresses the identification and comparison of sensors and actuators.

**Textbook Reference:**

*   **Groover, "Industrial Robotics" (Chapter 4: Robot Components and Systems):** Groover provides an excellent overview of the typical components found in industrial robots, including detailed descriptions of various types of sensors and actuators.
*   **Craig, "Introduction to Robotics: Mechanics and Control" (Chapter 5: Robot Manipulators and Control):** Craig discusses the actuators (motors) and sensors (encoders) commonly used in robot joints and their integration into the overall control system.

---

### 3. Robot Motion Control

Robot motion control is the process of commanding and regulating the robot's movement to achieve desired tasks. It involves translating high-level commands into precise, coordinated movements of individual joints.

**Key Concepts:**

*   **Trajectory:** A planned path that the robot's end-effector or joints follow over time. This includes both spatial position and temporal progression.
*   **Desired Trajectory:** The prescribed sequence of positions, velocities, and accelerations that the robot should achieve.
*   **Actual Trajectory:** The actual path followed by the robot's joints or end-effector, as measured by sensors.
*   **Error:** The difference between the desired and actual trajectory at any given point in time. `Error(t) = Desired(t) - Actual(t)`.
*   **Control Objective:** To minimize the error between the desired and actual trajectory, ensuring the robot follows the intended path accurately and efficiently.
*   **Joint-Space Control:** Controlling the motion of individual robot joints directly.
*   **Cartesian-Space Control (Task-Space Control):** Controlling the position and orientation of the robot's end-effector in Cartesian coordinates. This often requires inverse kinematics to convert end-effector commands to joint commands.

**Example:**

Imagine teaching a robot to pick up an object. The desired trajectory would involve moving the end-effector from a starting position to above the object, then down to grasp it, and finally lifting it. The control system must ensure that each joint moves in coordination to achieve this specified path in 3D space.

**Textbook Reference:**

*   **Spong, Hutchinson, & Vidyasagar, "Robot Modeling and Control" (Chapter 6: Trajectory Generation and Control):** This chapter thoroughly covers trajectory generation and the challenges in controlling the robot to follow these trajectories, introducing concepts of joint-space and task-space control.
*   **Craig, "Introduction to Robotics: Mechanics and Control" (Chapter 7: Robot Control):** Craig discusses the generation of joint-space and Cartesian-space trajectories and the control strategies employed to follow them.

**Course Outcome Alignment:**

*   **CO3:** This section directly contributes to understanding how controllers impact robot motion.
*   **CO2:** While not directly about kinematics here, the concept of desired trajectories in Cartesian space implies the need for inverse kinematics.

---

### 4. Open-Loop vs. Closed-Loop Control Systems

The fundamental difference lies in how the system's output is utilized to influence its input.

#### 4.1 Open-Loop Control

In an open-loop system, the control action is independent of the actual output of the system. The system relies on a pre-calibrated relationship between the input and output.

**Characteristics:**

*   **Simple:** No feedback mechanism is required.
*   **Inexpensive:** Generally cheaper to implement.
*   **Sensitive to Disturbances:** External factors or changes in the system's behavior can lead to significant deviations from the desired output.
*   **Requires Accurate Calibration:** The system must be precisely modeled and calibrated beforehand.

**Block Diagram:**

```
+-------------------+     +-----------+     +----------+     +---------+
|   Reference       |---->| Controller|---->| Actuator |---->|  System |
|    (Desired)      |     +-----------+     +----------+     |  (Robot)|
+-------------------+                                         +---------+
                                                                    |
                                                                    | Actual
                                                                    | Output
```

**Example:**

*   A simple toaster: You set a time, and it heats for that duration, regardless of how toasted the bread actually is.
*   A simple DC motor controlled by applying a specific voltage: The motor's speed depends on the voltage, but the controller doesn't measure the actual speed and adjust the voltage accordingly.

**Limitations in Robotics:**

Open-loop control is generally **not suitable** for precise robot motion control due to the complex dynamics, external forces, and the need for high accuracy.

#### 4.2 Closed-Loop Control (Feedback Control)

In a closed-loop system, the control action is dependent on the actual output of the system, which is measured by sensors and fed back to the controller.

**Characteristics:**

*   **Robust:** Less sensitive to disturbances and variations in system parameters.
*   **Accurate:** Can achieve high precision by continuously correcting errors.
*   **Complex:** Requires sensors and more sophisticated control logic.
*   **More Expensive:** Due to the added components.

**Block Diagram:** (Refer to the general block diagram in Section 1)

**Example:**

*   A thermostat controlling room temperature: It measures the actual temperature and adjusts the heating/cooling system to reach the set point.
*   A robot joint controlled by an encoder: The encoder measures the joint angle, and the controller adjusts the motor's torque to achieve the desired angle.

**Importance in Robotics:**

Closed-loop control is **essential** for robot motion control to ensure accuracy, stability, and the ability to handle uncertainties in the environment or the robot itself.

**Textbook Reference:**

*   **Craig, "Introduction to Robotics: Mechanics and Control" (Chapter 7: Robot Control):** Craig clearly contrasts open-loop and closed-loop control and explains why closed-loop is preferred for robot applications.
*   **Groover, "Industrial Robotics" (Chapter 8: Robot Control Systems):** Groover delves into various feedback control strategies and their implementation in industrial robots, highlighting the advantages of closed-loop systems.

**Course Outcome Alignment:**

*   **CO3:** Differentiating between these systems is a prerequisite for understanding controller types.

---

### 5. The Role of Sensors and Actuators in Robot Control

Sensors and actuators are the sensory and motor systems of a robot, respectively. They are critical for enabling feedback control and achieving desired motion.

#### 5.1 Sensors

Sensors provide the crucial feedback information that allows the control system to know the robot's current state.

*   **Purpose:** Measure physical quantities and convert them into electrical signals that the controller can process.
*   **Types (as discussed in Section 2):**
    *   **Proprioceptive:** Joint encoders (position, velocity), Force/Torque sensors.
    *   **Exteroceptive:** Vision systems, proximity sensors.
*   **Impact on Control:**
    *   **Accuracy:** High-resolution sensors lead to more precise state estimation and thus more accurate control.
    *   **Responsiveness:** Fast sensors allow the controller to react quickly to changes.
    *   **Feedback Loop Closure:** Without sensors, a closed-loop system is impossible.

#### 5.2 Actuators

Actuators are the "muscles" of the robot, responsible for generating motion.

*   **Purpose:** Convert control signals (electrical, hydraulic, pneumatic) into physical forces or torques to move the robot's links.
*   **Types (as discussed in Section 2):** DC motors, servo motors, hydraulic motors, pneumatic cylinders.
*   **Impact on Control:**
    *   **Force/Torque Generation:** The strength and responsiveness of actuators determine the robot's payload capacity and dynamic capabilities.
    *   **Precision of Movement:** The precision of the actuator (e.g., a low-backlash gear train with a servo motor) directly affects the precision of motion.
    *   **Control Signal Conversion:** Actuators receive commands from the controller and translate them into physical actions.

**Textbook Reference:**

*   **Ghoshal, "Robotics: Fundamental Concepts & Analysis" (Chapter 3: Robot Kinematics and Joint Types, Chapter 5: Robot End Effectors and Manipulators):** Ghoshal discusses the mechanical aspects and drive systems (motors) that act as actuators for robot joints.
*   **Craig, "Introduction to Robotics: Mechanics and Control" (Chapter 5: Robot Manipulators and Control):** Craig dedicates sections to actuators (motors, gear trains) and sensors (encoders, force sensors) and their integration into the robot's structure and control.

**Course Outcome Alignment:**

*   **CO4:** This section directly addresses the role and types of sensors and actuators.

---

### 6. The Concept of Desired Trajectory and its Importance

A trajectory defines the desired motion of the robot over time. It's a critical input to the control system.

**Key Concepts:**

*   **Trajectory:** A sequence of configurations (positions and orientations) that the robot's end-effector or joints should pass through over a specified time interval.
*   **Specification:** A trajectory can be defined in:
    *   **Joint Space:** As a sequence of desired joint angles, velocities, and accelerations for each joint.
    *   **Cartesian Space (Task Space):** As a sequence of desired end-effector positions and orientations (pose), along with their velocities and accelerations. This requires inverse kinematics to convert into joint-space commands.
*   **Importance:**
    *   **Task Accomplishment:** Defines *how* the robot should move to perform a task (e.g., pick and place, welding, painting).
    *   **Smoothness and Efficiency:** Well-designed trajectories minimize jerky motions, reduce energy consumption, and prevent excessive wear on the robot's components.
    *   **Collision Avoidance:** Trajectories can be planned to avoid obstacles in the workspace.
    *   **Dynamic Constraints:** Trajectories must respect the robot's velocity, acceleration, and torque limits.

**Example:**

When programming a robot to weld a seam, the desired trajectory would be a precise path in 3D space that the welding torch (end-effector) must follow. This path is defined by a series of points, and the robot's controller must ensure that each joint moves to achieve this end-effector path at the correct speed and orientation.

**Textbook Reference:**

*   **Spong, Hutchinson, & Vidyasagar, "Robot Modeling and Control" (Chapter 6: Trajectory Generation and Control):** This is the primary resource for understanding trajectory generation, including polynomial interpolation, splines, and the consideration of dynamic constraints.
*   **Craig, "Introduction to Robotics: Mechanics and Control" (Chapter 7: Robot Control):** Craig covers the generation of joint-space and Cartesian-space trajectories and discusses the importance of planning smooth and feasible paths.

**Course Outcome Alignment:**

*   **CO3:** Understanding desired trajectories is essential for implementing and explaining the impact of controllers on robot motion.

---

### 7. Introduction to the Concept of Error

The error signal is the fundamental driver for feedback control systems.

**Key Concepts:**

*   **Definition:** `Error(t) = Desired Value(t) - Actual Value(t)`.
*   **Purpose:** Quantifies the deviation of the system's actual output from its desired output.
*   **Role in Control:** The controller's primary objective is to reduce this error to zero (or within an acceptable tolerance).
*   **Types of Errors in Robotics:**
    *   **Position Error:** Difference between desired and actual joint angles or end-effector positions.
    *   **Velocity Error:** Difference between desired and actual joint velocities or end-effector velocities.
    *   **Orientation Error:** Difference between desired and actual end-effector orientation.
*   **Impact of Error:**
    *   **Task Failure:** If error is too large, the robot cannot perform its task.
    *   **System Instability:** In some cases, large or sustained errors can lead to oscillations or instability.
    *   **Control Action:** The magnitude and sign of the error signal dictate the direction and strength of the control action applied by the controller.

**Example:**

If a robot arm is supposed to be at joint angle 90 degrees, but the encoder reads 88 degrees, the error is `90 - 88 = +2` degrees. The controller will then command the actuator to move the joint further to reduce this error.

**Textbook Reference:**

*   **Craig, "Introduction to Robotics: Mechanics and Control" (Chapter 7: Robot Control):** Craig emphasizes the role of error in closing the feedback loop and driving the control action.
*   **Spong, Hutchinson, & Vidyasagar, "Robot Modeling and Control" (Chapter 6: Trajectory Generation and Control):** Error is implicitly discussed as the discrepancy between the generated trajectory and the robot's actual motion.

**Course Outcome Alignment:**

*   **CO3:** Understanding error is foundational to understanding how controllers work to correct deviations.

---

### 8. Introduction to Basic Control Strategies: Proportional (P) Control

Proportional control is one of the simplest and most widely used feedback control strategies.

**Key Concepts:**

*   **Control Law:** The output of the controller is directly proportional to the error signal.
    `Control Signal (u(t)) = Kp * Error(t)`
    Where `Kp` is the proportional gain.
*   **Proportional Gain (Kp):**
    *   Determines the strength of the control action.
    *   A higher `Kp` results in a faster response but can also lead to oscillations or overshoot.
    *   A lower `Kp` results in a slower response but is more stable.
*   **How it Works:**
    *   If there is an error, the controller outputs a signal proportional to that error.
    *   A positive error (e.g., actual position < desired position) will result in a positive control signal, causing the actuator to move the system towards the desired state.
    *   A negative error (e.g., actual position > desired position) will result in a negative control signal.
*   **Steady-State Error:** A significant drawback of pure proportional control is that it often results in a **steady-state error** (also called offset). This means the system may not reach the exact desired value, especially with constant disturbances. This is because the control signal becomes zero only when the error is zero, but if a constant disturbance is present, the system needs a non-zero error to generate a constant control signal to counteract the disturbance.

**Example:**

Consider controlling the position of a robot joint with P-control.
*   Desired Position: 90 degrees
*   Actual Position: 85 degrees
*   Error: `90 - 85 = +5` degrees
*   Kp = 10 Nm/degree
*   Control Signal (Torque) = `10 * 5 = 50` Nm. This torque is applied to move the joint towards 90 degrees.

Now, suppose a constant external force opposes the motion, requiring 10 Nm of continuous torque to maintain equilibrium.
*   If the actual position settles at 89 degrees, the error is `90 - 89 = +1` degree.
*   The required control torque to counteract the external force is 10 Nm.
*   The P-controller output would be `Kp * 1 = 10` Nm.
*   This matches the required torque, so the system stabilizes at 89 degrees, exhibiting a steady-state error of 1 degree.

**Textbook Reference:**

*   **Craig, "Introduction to Robotics: Mechanics and Control" (Chapter 7: Robot Control):** Craig introduces the PID control family and discusses Proportional control as the first component.
*   **Spong, Hutchinson, & Vidyasagar, "Robot Modeling and Control" (Chapter 6: Trajectory Generation and Control):** While focusing on more advanced control, they might reference basic control concepts like P-control as building blocks.
*   **Groover, "Industrial Robotics" (Chapter 8: Robot Control Systems):** Groover often covers proportional control as a fundamental element in robot servo systems.

**Course Outcome Alignment:**

*   **CO3:** This section directly introduces a basic control strategy and its implications.

**Important Points to Remember for P-Control:**

*   **Responsiveness:** Higher `Kp` = faster response.
*   **Stability:** Higher `Kp` = potential for instability/oscillations.
*   **Steady-State Error:** Almost always present, especially with disturbances. It can be reduced by increasing `Kp`, but this trade-off with stability must be managed.

---

### Practice Questions and Answers

**Question 1:**

Which of the following is NOT a proprioceptive sensor?
a) Joint encoder
b) Force sensor
c) Vision system
d) Tachometer

**Answer 1:**
c) Vision system. Vision systems are exteroceptive sensors as they measure external environmental information, not internal states of the robot.

---

**Question 2:**

In a closed-loop control system, what is the primary function of the error signal?
a) To set the desired speed of the robot.
b) To inform the controller how far the actual output is from the desired output.
c) To directly drive the actuators without the controller.
d) To measure the payload weight.

**Answer 2:**
b) To inform the controller how far the actual output is from the desired output. The error signal is the feedback that guides the controller's actions.

---

**Question 3:**

A pure proportional (P) controller has a control law: `u(t) = Kp * e(t)`. If `Kp` is increased, what is the most likely effect on the system's response?
a) It will become slower and more stable.
b) It will become faster but may become unstable or oscillate.
c) It will eliminate steady-state error.
d) It will make the system less sensitive to disturbances.

**Answer 3:**
b) It will become faster but may become unstable or oscillate. Increasing `Kp` amplifies the response to error, leading to a faster reaction but also increasing the risk of overshooting and instability.

---

**Question 4:**

Explain the fundamental difference between an open-loop and a closed-loop control system in the context of robot control. Why is closed-loop control generally preferred for robotic manipulators?

**Answer 4:**
An **open-loop** system's control action is independent of the output; it relies on pre-calibration. A **closed-loop** system uses feedback from sensors to measure the actual output and compares it to the desired output, using the error to adjust the control action. Closed-loop control is preferred for robotic manipulators because it offers robustness against disturbances (like friction, external forces, or slight inaccuracies in motor models), greater accuracy in following trajectories, and stability, which are crucial for precise and reliable task execution.

---

**Question 5:**

Define "steady-state error" in the context of proportional control. Provide a simple scenario where it might occur in a robot joint control.

**Answer 5:**
Steady-state error is the persistent difference between the desired value and the actual value that remains after the system has settled. In proportional control, a non-zero error is required to generate a non-zero control signal to counteract persistent disturbances or forces.

**Scenario:** Imagine a robot arm trying to hold a specific horizontal position against a constant gravitational force trying to pull it down. If only a proportional controller is used, the joint might settle at a position slightly lower than the target, where the torque generated by the controller (due to the small error) exactly balances the gravitational torque. This small difference between the target position and the actual settled position is the steady-state error.

---

This concludes Module 2, Topic 1. Understanding these basic control system models is foundational for further exploration of advanced robot control techniques.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
