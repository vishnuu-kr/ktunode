---
title: "Building of a servo controlled robot – 1R two link chain, construction of link and joint and mounting of encoder, actuator, etc."
subject: "INTRODUCTION TO ROBOTICS"
module: "Module 4: Dynamics and Control of Robots"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c5b"
status: "completed"
scrapedAt: "2026-05-23T16:41:50.778Z"
---
# INTRODUCTION TO ROBOTICS - Module 4: Dynamics and Control of Robots

## Topic: Building of a servo controlled robot – 1R two link chain, construction of link and joint and mounting of encoder, actuator, etc.

---

### **Objective:** To understand the practical aspects of building a simple robotic manipulator, specifically a 1R two-link chain, focusing on the construction of its physical components and the integration of essential control elements.

---

### **1. Introduction to Robotic Manipulators (Revisiting CO1)**

*   **Robotic Manipulator:** An articulated mechanical arm that can be programmed to perform tasks. It consists of a series of links connected by joints, allowing for controlled movement.
*   **Degrees of Freedom (DOF):** The number of independent parameters that can define the configuration of a robotic system. A 1R two-link chain typically refers to a planar manipulator with two revolute (rotational) joints, hence 2 DOF. The "1R" might be a typo and should likely be "2R" for a two-link chain with revolute joints. Assuming "2R" for this topic as it's more common for a two-link chain.
*   **Applications:** Welding, painting, assembly, pick-and-place operations, surgical assistance, etc. (Saha, 2014)

---

### **2. The 1R Two-Link Chain Robotic Manipulator (Assuming 2R)**

*   **Configuration:** A planar robotic arm consisting of two links connected by two revolute joints. The first link is attached to a base, and the second link is attached to the end of the first link.
    *   **Link 1:** Connects the base to Joint 1.
    *   **Joint 1:** A revolute joint allowing rotation of Link 1 with respect to the base.
    *   **Link 2:** Connects Joint 1 to Joint 2.
    *   **Joint 2:** A revolute joint allowing rotation of Link 2 with respect to Link 1.
    *   **End-effector:** The tool or gripper attached to the end of Link 2.

*   **Kinematic Representation (Briefly, linking to CO4):** The position and orientation of the end-effector are determined by the joint angles ($\theta_1$, $\theta_2$). This involves forward kinematics, which relates joint variables to the end-effector pose. (Craig, 2018)

---

### **3. Construction of Links and Joints**

*   **Links:**
    *   **Material:** Typically made of lightweight yet rigid materials like aluminum alloys, carbon fiber composites, or high-strength plastics. The choice depends on the required payload, speed, and cost. (Deb, Second Edition)
    *   **Design Considerations:**
        *   **Rigidity:** Must withstand the forces and torques generated during operation without significant deflection.
        *   **Lightweight:** To minimize inertia, enabling faster movements and reducing actuator requirements.
        *   **Internal Routing:** Provisions for wiring of sensors and actuators.
        *   **Mounting Features:** Pre-drilled holes or mounting surfaces for joints, actuators, and sensors.
    *   **Example:** For a simple hobbyist robot, aluminum extrusions or even 3D printed PLA/ABS can be used for links. For industrial robots, machined aluminum or steel is common.

*   **Joints (Revolute Joints - R):**
    *   **Function:** To provide rotational motion between links.
    *   **Components:**
        *   **Bearings:** Crucial for smooth and low-friction rotation. Common types include ball bearings, roller bearings, or bushings. (Schilling, 1996)
        *   **Shafts/Axes:** The central pin around which rotation occurs.
        *   **Mounting Interfaces:** To connect links and actuators.
    *   **Construction:**
        *   **Base-Mounted Joint (Joint 1):** The first joint is typically mounted to a rigid base (e.g., a workbench, a chassis). The base needs to be stable and provide a secure mounting point for the first link and its actuator.
        *   **Link-Mounted Joint (Joint 2):** The second joint is mounted to the end of the first link, allowing the second link to rotate relative to the first. This often involves a flange or mounting plate on the first link.
    *   **Example:** A revolute joint can be constructed using a bearing housing mounted to a link, with a shaft passing through it. The next link is then attached to this shaft. An actuator (e.g., a motor) is coupled to this shaft.

---

### **4. Mounting of Essential Components**

This section focuses on integrating the "brain" and "muscles" of the robot, enabling it to receive commands and execute movements.

*   **Actuators:**
    *   **Function:** To provide the force or torque required to move the links. For revolute joints, these are typically motors. (Mittal & Nagrath, 2003)
    *   **Types:**
        *   **DC Motors:** Common for smaller robots, often require gearboxes for increased torque.
        *   **DC Servo Motors:** DC motors with integrated encoders and control electronics, offering closed-loop control of position and speed. These are ideal for servo-controlled robots.
        *   **Stepper Motors:** Provide precise positional control by moving in discrete steps, often used when high accuracy without feedback is desired.
        *   **Brushless DC (BLDC) Motors:** Offer higher efficiency and longer lifespan but require more complex control.
    *   **Mounting:**
        *   **Direct Drive:** The motor shaft is directly coupled to the joint's rotating element.
        *   **Geared Drive:** A gearbox is used between the motor and the joint to increase torque and reduce speed. This is common when a small motor needs to move a heavier link.
        *   **Mounting Bracket:** A custom or standard bracket is used to securely attach the motor to the robot structure (base or link). The bracket must align the motor shaft with the joint axis.
    *   **Example:** A DC servo motor with a built-in encoder is mounted to the base for Joint 1. Its output shaft is coupled to the base of Link 1. For Joint 2, another DC servo motor is mounted to the end of Link 1, with its output shaft coupled to the base of Link 2.

*   **Encoders:**
    *   **Function:** To provide feedback on the angular position (and sometimes velocity) of the joints. This feedback is crucial for closed-loop control. (Saha, 2014; Ghosal, 2006)
    *   **Types:**
        *   **Incremental Encoders:** Output pulses as the shaft rotates. The controller counts these pulses to determine the relative change in position. Requires an index pulse for absolute positioning or homing.
        *   **Absolute Encoders:** Provide a unique digital code for each shaft position, allowing the controller to know the exact position even after power loss.
    *   **Mounting:**
        *   **Shaft-Mounted:** The encoder's sensing element is coupled to the rotating shaft of the joint (often the motor shaft or the joint axis itself).
        *   **Directly on Motor Shaft:** Many servo motors have encoders integrated directly into their housing, making mounting straightforward.
        *   **External Mounting:** If an encoder is not integrated, it needs to be mechanically coupled to the joint's rotating shaft using a coupler or a small gear.
    *   **Example:** For a servo-controlled robot, using servo motors with integrated encoders simplifies the process. If using standard DC motors, an external incremental encoder can be mounted to the motor's output shaft. The encoder's cable is then routed back to the robot controller.

*   **Wiring and Cabling:**
    *   **Purpose:** To connect actuators, encoders, and other sensors to the robot controller and power supply.
    *   **Considerations:**
        *   **Flexibility:** Cables must be flexible enough to withstand repeated movements of the robot without breaking or snagging.
        *   **Strain Relief:** Proper strain relief mechanisms should be used at connection points to prevent damage to wires.
        *   **Cable Management:** Cables should be routed neatly and securely, often using cable ties, spiral wraps, or drag chains to prevent them from interfering with movement or getting caught.
        *   **Signal Integrity:** For encoder signals, proper shielding and grounding might be necessary to avoid noise.
    *   **Example:** Encoder signals and motor power wires are routed along the links, often through channels or under covers, to avoid interference and damage.

---

### **5. Servo Control (Introduction to Control Aspects - Linking to CO6)**

*   **Servomechanism:** A control system that uses feedback to achieve and maintain a desired state. In robotics, it's used to control joint positions and velocities.
*   **Key Components of a Servo Loop:**
    *   **Controller:** The "brain" that calculates the required actuator command based on the desired setpoint and the measured feedback. This could be a microcontroller, a dedicated servo driver, or a computer.
    *   **Actuator:** The motor that drives the joint.
    *   **Sensor (Encoder):** Provides feedback on the actual joint position/velocity.
    *   **Comparator:** Compares the desired setpoint with the feedback signal to generate an error signal.
    *   **Amplifier/Driver:** Amplifies the control signal to drive the actuator.
*   **Basic Control Law (e.g., PID Control):**
    *   The controller typically uses a Proportional-Integral-Derivative (PID) algorithm to adjust the actuator's output.
    *   **Error ($e$) = Desired Position - Actual Position.**
    *   **Output = Kp * $e$ + Ki * $\int e dt$ + Kd * $de/dt$.**
    *   Tuning these gains (Kp, Ki, Kd) is crucial for achieving stable and responsive control. (Schilling, 1996; Craig, 2018)

---

### **6. Building Process - Step-by-Step (Conceptual)**

1.  **Design and CAD:**
    *   Model the links, joints, and component mounting points in CAD software.
    *   Determine link lengths, material, and desired joint ranges. (CO3)
    *   Plan the placement of actuators and encoders. (CO2)

2.  **Fabrication:**
    *   Machine or 3D print the links and custom mounting brackets.
    *   Procure standard components like bearings, motors, and encoders.

3.  **Assembly:**
    *   Mount bearings into the link structures.
    *   Assemble the first joint: attach the actuator to the base, couple it to the first link via the bearing.
    *   Mount the encoder to the joint axis or motor shaft.
    *   Assemble the second joint: attach the actuator to the first link, couple it to the second link via its bearing.
    *   Mount the encoder to the second joint axis or motor shaft.
    *   Ensure smooth and free movement of each joint within its designed range.

4.  **Wiring:**
    *   Connect motors to motor drivers/controllers.
    *   Connect encoders to the robot controller.
    *   Route cables neatly, providing strain relief.

5.  **Controller Setup:**
    *   Connect the robot controller to the motor drivers and encoder inputs.
    *   Develop or load control software.

6.  **Testing and Calibration:**
    *   Perform initial power-up tests.
    *   Calibrate encoder readings (e.g., establish zero positions).
    *   Tune PID controllers for each joint to achieve desired performance (response time, accuracy, stability). (CO6)
    *   Test forward kinematics by commanding specific joint angles and observing end-effector position. (CO4)

---

### **7. Key Concepts and Important Points to Remember:**

*   **Rigidity and Lightweight:** Essential for link construction to ensure accurate and efficient movement.
*   **Low-Friction Joints:** Achieved through quality bearings, crucial for precise control.
*   **Actuator Selection:** Based on torque, speed, and precision requirements for each joint. (CO2)
*   **Encoder Feedback:** The backbone of servo control, providing position information. (CO2)
*   **Servo Control Loop:** The closed-loop system enabling precise control of joint angles.
*   **PID Tuning:** Critical for stable and responsive robot arm operation. (CO6)
*   **Mechanical Integration:** Proper mounting and coupling of components are vital for performance and longevity.
*   **Cable Management:** Important for reliability and preventing mechanical interference.
*   **Safety:** Always consider safety during construction and testing, especially with powered components.

---

### **8. Practice Questions and Exercises**

**Question 1:**
What are the primary materials used for constructing robotic manipulator links and why?
**Answer:** Links are typically made from lightweight yet rigid materials like aluminum alloys, carbon fiber composites, or high-strength plastics. This is to minimize inertia for faster movements and reduce the load on actuators, while maintaining structural integrity to prevent deflection under load. (Deb, Second Edition)

**Question 2:**
Explain the role of an encoder in a servo-controlled robot.
**Answer:** An encoder is a sensor that provides feedback on the angular position and/or velocity of a robot's joint. In a servo-controlled system, this feedback is compared to the desired setpoint by the controller. The difference (error) is used to adjust the actuator's output, ensuring the joint moves to and maintains the desired position accurately. (Saha, 2014; Ghosal, 2006)

**Question 3:**
Describe two common methods of mounting an actuator to a robot joint.
**Answer:**
1.  **Direct Drive:** The motor shaft is directly coupled to the joint's rotating shaft or element. This offers simplicity and potentially better responsiveness but requires a motor with sufficient torque for the application.
2.  **Geared Drive:** A gearbox is used between the motor shaft and the joint's rotating element. This allows a smaller, lower-torque motor to drive a heavier load by increasing the output torque and reducing the speed. (Mittal & Nagrath, 2003)

**Question 4 (Conceptual Exercise):**
You are tasked with building a simple two-link planar robot arm for picking and placing small objects.
*   What type of joints would you likely use? (CO3)
*   What types of actuators would be suitable, and why? (CO2)
*   What type of feedback sensor would be essential for controlling the joint positions? (CO2)
*    Briefly, how would you ensure smooth rotation at the joints? (Linking to Construction)

**Answer to Question 4:**
*   **Joints:** For a planar two-link robot arm, **revolute (rotational) joints** are typically used at both connection points (base to link 1, and link 1 to link 2) to allow for planar movement and reach.
*   **Actuators:** **DC servo motors** would be highly suitable. They offer a good balance of torque, speed, and importantly, they often come with integrated encoders, simplifying the feedback mechanism and enabling closed-loop position control. For lighter loads and cost-effectiveness, geared DC motors or even stepper motors could be considered, but servo motors are preferred for precise, dynamic control.
*   **Feedback Sensor:** An **encoder** (either integrated with the servo motor or a separate unit mounted to the joint) is essential to provide accurate feedback on the angular position of each joint. This is critical for implementing servo control.
*   **Smooth Rotation:** Smooth rotation at the joints would be achieved by using high-quality **bearings** (e.g., ball bearings, roller bearings) within the joint assemblies. These minimize friction, allowing the actuator to move the link precisely without being hindered by mechanical resistance.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### **9. References:**

*   Saha, S K. (2014). *Introduction to Robotics*. McGraw Hill Education (India) Private Limited.
*   Schilling, R. J. (1996). *Fundamentals of Robotics – Analysis and Control*. Prentice Hall of India.
*   Mittal, R K., & Nagrath, I J. (2003). *Robotics and Control*. Tata McGraw Hill.
*   Craig, J. J. (2018). *Introduction to Robotics: Mechanics and Control* (4th ed.). Pearson Education Asia.
*   Ghosal, A. (2006). *Robotics-Fundamental Concepts and Analysis*. Oxford University Press.
*   Deb, S. R. (2014). *Robotics Technology and Flexible Automation* (2nd ed.). McGraw-Hill Education LLC.

---