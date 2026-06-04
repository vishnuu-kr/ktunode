---
title: "Exercises on the robotic trainer units"
subject: "MECHANICAL ENGINEERING LAB"
module: "Module 2: Experiment on Whirling of shaft"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463717"
status: "completed"
scrapedAt: "2026-05-20T18:01:39.802Z"
---
# Mechanical Engineering Lab: Module 2 - Experiment on Whirling of Shaft

## Topic: Exercises on the Robotic Trainer Units

---

### **1. Introduction to Robotic Trainer Units**

Robotic trainer units are essential tools in mechanical engineering labs for understanding the principles of automation, mechatronics, and the kinematics and dynamics of machinery. They provide a practical platform to apply theoretical concepts and develop skills in controlling and operating robotic systems. This topic focuses on exercises related to these trainer units, often built upon the principles of whirling of shafts or related mechanical systems.

---

### **2. Learning Outcomes**

Upon successful completion of these exercises, students will be able to:

*   **LO1: Understand the basic structure and components of a robotic trainer unit.**
*   **LO2: Identify and understand the function of sensors and actuators used in robotic systems.**
*   **LO3: Apply principles of kinematics and dynamics to analyze the motion of robotic arms.**
*   **LO4: Develop basic programming or control strategies for robotic trainer units.**
*   **LO5: Perform calibration and troubleshooting of robotic trainer units.**

---

### **3. Relevant Concepts and Definitions**

This section will cover key concepts and definitions that are fundamental to understanding robotic trainer units and their operation, drawing from the provided textbooks.

#### **3.1 Mechatronics Fundamentals (Bolton, Wilson & Sadler)**

*   **Mechatronics:** The synergistic integration of mechanical engineering, electronics, computer science, and control engineering to design and manufacture products and processes.
    *   *Example:* A robotic arm combines mechanical links, electric motors (electronics), control algorithms (computer science), and feedback loops (control engineering).
*   **Sensors:** Devices that detect and respond to physical phenomena. They convert physical quantities into electrical signals.
    *   *Types used in robotic trainers:*
        *   **Proximity Sensors:** Detect the presence or absence of an object without physical contact (e.g., inductive, capacitive, photoelectric).
        *   **Encoders:** Measure angular or linear position and velocity (e.g., rotary encoders on motor shafts).
        *   **Limit Switches:** Detect the end of travel for a mechanical component.
        *   **Force/Torque Sensors:** Measure forces and torques acting on a robotic end-effector.
*   **Actuators:** Devices that convert electrical energy into mechanical motion.
    *   *Types used in robotic trainers:*
        *   **DC Motors:** Provide rotational motion, often controlled by Pulse Width Modulation (PWM) for speed control.
        *   **Stepper Motors:** Provide precise incremental angular movement, ideal for precise positioning.
        *   **Servo Motors:** Combine a motor with a feedback mechanism (encoder) and control circuitry for precise position and speed control.
        *   **Solenoids:** Produce linear motion.

#### **3.2 Kinematics and Dynamics of Machinery (Wilson & Sadler, Myskza)**

*   **Kinematics:** The study of motion without considering the forces that cause it.
    *   **Links:** Rigid bodies forming the structure of a robotic arm.
    *   **Joints:** Connections between links that allow relative motion (e.g., revolute for rotation, prismatic for linear movement).
    *   **Degrees of Freedom (DOF):** The minimum number of independent parameters required to completely specify the configuration of a robotic system.
        *   *Example:* A simple robotic arm with one rotating joint has 1 DOF. A typical industrial robot arm might have 6 DOF.
    *   **Forward Kinematics:** Calculating the position and orientation of the end-effector given the joint angles/positions.
    *   **Inverse Kinematics:** Calculating the required joint angles/positions to achieve a desired end-effector position and orientation. This is often more complex.
*   **Dynamics:** The study of motion considering the forces that cause it.
    *   **Inertia:** Resistance to changes in motion.
    *   **Torque:** Rotational force.
    *   **Mass Matrix:** Represents the inertia of the robot's links.
    *   **Coriolis Forces:** Forces arising from the interaction of rotational and translational motion.
    *   **Gravity:** The force exerted by gravity on the robot's links.
*   **Whirling of Shafts (as a foundational concept):** While not directly the subject of the *exercises*, understanding the critical speeds at which a rotating shaft can experience large vibrations is a related mechanical principle. Robotic systems, with their rotating joints and moving links, also exhibit dynamic behaviors that need to be managed to avoid excessive vibration and ensure stable operation. The concepts of natural frequencies and resonance are relevant here.

#### **3.3 Metrology Fundamentals (Shotbolt & Gayler, Sharp & Hume)**

*   **Metrology:** The science of measurement.
*   **Accuracy:** The degree of closeness of measurements to the true value.
*   **Precision:** The degree of closeness of repeated measurements to each other.
*   **Calibration:** The process of comparing a measuring instrument with a standard to identify and record any deviation from the standard.
    *   *Importance in robotics:* Sensors (like encoders) and actuators (motors for precise positioning) require calibration to ensure accurate operation and reliable measurements.

#### **3.4 Industrial Automation and Control (Ramachandran et al., Bolton)**

*   **Automation:** The use of technology to perform tasks with minimal human intervention.
*   **Control Systems:** Systems designed to manage, command, direct, or regulate the behavior of other devices or systems.
    *   **Open-loop control:** The output of the system has no effect on the control action.
    *   **Closed-loop control (Feedback control):** The output of the system is measured and fed back to the controller, which adjusts the control action accordingly. This is crucial for precise robotic movements.
        *   *Example:* Using an encoder to measure the actual position of a robotic arm joint and comparing it to the desired position, then adjusting the motor command to reduce the error.

---

### **4. Exercises on Robotic Trainer Units**

These exercises are designed to reinforce the theoretical concepts and provide hands-on experience with robotic trainer units. The specific exercises may vary depending on the available trainer unit, but common themes include:

#### **4.1 Familiarization with the Robotic Trainer Unit**

*   **Objective:** To understand the physical configuration, components, and safety features of the robotic trainer unit.
*   **Procedure:**
    1.  **Identify the Robot's Structure:** Observe the base, links, joints, and end-effector. Note the type of joints (revolute, prismatic).
    2.  **Locate and Identify Sensors:**
        *   **Encoders:** Usually found on the motor shafts of each joint. Observe their connection to the motor and control system.
        *   **Limit Switches:** Often located at the extreme travel limits of each joint.
        *   **Other Sensors (if present):** Gripper sensors, proximity sensors, etc.
    3.  **Locate and Identify Actuators:** Identify the motors driving each joint. Note their type (DC, stepper, servo) and power connections.
    4.  **Understand the Control Interface:** Familiarize yourself with the teach pendant, software interface, or control panel.
    5.  **Safety Check:** Ensure all emergency stop buttons are accessible and functional. Understand the workspace limits and potential hazards.
*   **Expected Outcomes:** Students can verbally describe the main parts of the robotic trainer and their general purpose. (Aligns with LO1, LO2)

#### **4.2 Kinematic Analysis and Control of a Single Joint**

*   **Objective:** To understand the relationship between joint commands, motor response, and measured position.
*   **Procedure:**
    1.  **Select a Joint:** Choose one joint of the robotic trainer.
    2.  **Command Movement:** Using the control interface, command the joint to move to a specific angle or position.
    3.  **Measure Actual Position:** Read the position feedback from the joint's encoder.
    4.  **Vary Command Parameters:** Change the speed, acceleration, or target position and observe the response.
    5.  **Introduce Disturbances (Optional):** Gently apply a small external force to the joint while it is holding position and observe the feedback.
    6.  **Record Data:** Tabulate commanded vs. actual positions for various movements.
*   **Analysis:**
    *   Calculate the error (difference between commanded and actual position).
    *   Discuss the factors affecting accuracy (e.g., motor torque, friction, backlash, sensor resolution).
    *   *Relate to Kinematics:* How does the encoder reading translate to angular position? (e.g., Encoder counts per revolution).
    *   *Relate to Control:* How does the control system (e.g., PID controller) try to minimize the error?
*   **Expected Outcomes:** Students can demonstrate control of a single joint and analyze its positional accuracy. (Aligns with LO2, LO3, LO4)
*   **Example:** Commanding a joint to move to 90 degrees. The encoder reports 89.5 degrees. The error is 0.5 degrees.

#### **4.3 End-to-End Motion and Trajectory Following**

*   **Objective:** To understand how multiple joints work together to move the end-effector and to follow a programmed path.
*   **Procedure:**
    1.  **Program a Simple Task:** Define a sequence of movements for the robotic arm, such as picking up an object from point A and placing it at point B. This typically involves "teaching" points or defining joint trajectories.
    2.  **Observe End-Effector Motion:** Run the programmed task and observe the motion of the end-effector.
    3.  **Analyze Trajectory:** If the trainer allows, analyze the path taken by the end-effector in Cartesian space.
    4.  **Introduce Variations:** Modify the speed of the overall motion or the individual joint speeds and observe the impact.
*   **Analysis:**
    *   *Relate to Kinematics:* How are the individual joint movements coordinated to achieve the desired end-effector path (this is where inverse kinematics is applied implicitly in programming)?
    *   *Relate to Dynamics:* At higher speeds, do you observe increased vibrations or settling times? This relates to the dynamic response of the system and potential resonance.
*   **Expected Outcomes:** Students can program a basic multi-joint movement and understand the concept of a trajectory. (Aligns with LO3, LO4)
*   **Example:** Programming a robot to move from a home position to a point above a "pick" location, then down to pick, then up, then to a "place" location, and finally down to place.

#### **4.4 Sensor Calibration Exercise**

*   **Objective:** To understand the importance of calibration and to perform a basic calibration procedure.
*   **Procedure:**
    1.  **Zeroing an Encoder:** Many robotic systems allow for "zeroing" or establishing a home position for each joint. Perform this procedure for one or more joints.
    2.  **Reference to a Standard:** If a precise measuring tool (e.g., a protractor or linear scale) is available, try to verify the robot's positioned accuracy at specific points and compare it to the calibrated readings.
    3.  **Software Calibration Routines:** Explore if the trainer unit has any built-in software calibration routines for its sensors or actuators.
*   **Analysis:**
    *   Why is calibration important for robotic operations? (Ensures accuracy, repeatability, and safe operation).
    *   What happens if a sensor is not calibrated correctly?
*   **Expected Outcomes:** Students understand the concept of calibration and perform a basic zeroing operation. (Aligns with LO5, CO1)
*   **Important Point:** Calibration is critical for metrology applications where the robot is used for inspection or precise placement of objects.

#### **4.5 Basic Troubleshooting**

*   **Objective:** To identify and address common issues with robotic trainer units.
*   **Procedure:**
    1.  **Simulate a Fault:** If possible and safe, simulate a common fault (e.g., disconnect a sensor cable, limit a joint's movement).
    2.  **Observe Error Messages:** Note any error messages displayed by the control system.
    3.  **Diagnose the Problem:** Based on the error message and observed behavior, try to pinpoint the faulty component or connection.
    4.  **Rectify the Fault:** Correct the issue (e.g., reconnect the cable, reset the system).
*   **Common Issues:**
    *   Loose connections.
    *   Sensor failures.
    *   Actuator issues.
    *   Software glitches.
    *   Overload conditions.
*   **Expected Outcomes:** Students can identify potential problems and understand basic diagnostic steps. (Aligns with LO5)

---

### **5. Linking Exercises to Course Outcomes**

*   **CO1: Choose the appropriate instruments for different measurements (K3)**
    *   **Relevance:** Understanding the sensors (encoders, limit switches) used in robotic trainers helps in choosing appropriate measurement devices for industrial automation tasks. For example, knowing an encoder's resolution helps in selecting a robot capable of precise positional measurement.
*   **CO2: Determine dimensional and form accuracies of various components (K3)**
    *   **Relevance:** The precision of robotic movements, especially after calibration, can be used for automated inspection or measurement of component dimensions. Understanding the limitations of the robot's accuracy is crucial for these applications.
*   **CO3: Develop knowledge of designing and analyzing mechanisms in machinery (K3)**
    *   **Relevance:** The entire robotic trainer unit is a complex mechanism. Analyzing its DOF, joint movements, and end-effector path directly relates to the design and analysis of mechanisms. Understanding kinematics is fundamental here.
*   **CO4: Demonstrate the functions and control of various devices used for industrial automation (K3)**
    *   **Relevance:** Robotic trainers are prime examples of industrial automation devices. Performing exercises on programming, control, and sensor/actuator interaction directly demonstrates these functions.
*   **CO5: Demonstrate 3D printing technique (K3)**
    *   **Relevance:** While not directly involving 3D printing, the precision, control, and path planning required for robotic manipulation share similarities with the precise layer-by-layer deposition in 3D printing. Understanding the underlying control principles is transferable.

---

### **6. Practice Questions with Answers**

**Question 1:** What is the primary function of an encoder in a robotic trainer unit?
**Answer:** The primary function of an encoder is to measure the angular or linear position and velocity of a joint or component. This feedback is crucial for closed-loop control, allowing the robot to know its exact configuration.

**Question 2:** Differentiate between forward and inverse kinematics in the context of a robotic arm.
**Answer:**
*   **Forward Kinematics:** Calculates the end-effector's position and orientation based on the known joint angles/positions. (Joint inputs -> End-effector output)
*   **Inverse Kinematics:** Calculates the required joint angles/positions to achieve a desired end-effector position and orientation. (End-effector input -> Joint outputs) Inverse kinematics is generally more complex.

**Question 3:** Why is calibration of robotic sensors important for industrial applications?
**Answer:** Calibration is crucial for ensuring accuracy, precision, and repeatability in robotic operations. Without proper calibration, a robot's programmed movements might not correspond to the actual physical movements, leading to errors in tasks like assembly, welding, or measurement. It also contributes to safety by ensuring the robot operates within its intended workspace.

**Question 4:** If a robotic arm is programmed to move to a specific point but consistently ends up 2mm to the left of the target, what type of issue is this likely to be, and how might it be addressed?
**Answer:** This sounds like a problem with positional accuracy, potentially stemming from:
*   **Calibration:** The robot's internal coordinate system or sensor readings might be miscalibrated.
*   **Backlash:** Mechanical play in the gears or joints causing a slight offset.
*   **Control System Tuning:** The control loop (e.g., PID controller) might not be optimally tuned to reach the exact target.
*   **Mechanical Issues:** Wear in joints or gears.
Addressing it would involve re-calibrating the robot, checking for mechanical backlash, and potentially tuning the controller parameters.

**Question 5:** Which of the following is NOT a common type of actuator used in robotic trainer units?
a) DC Motor
b) Solenoid
c) Hydraulic Cylinder
d) Stepper Motor
**Answer:** c) Hydraulic Cylinder. While hydraulic cylinders are used in industrial robotics, most trainer units utilize electric motors (DC, stepper, servo) due to their compactness, controllability, and ease of integration with electronic control systems.

---

### **7. Important Points to Remember**

*   **Safety First:** Always be aware of the robot's workspace and emergency stop procedures. Never override safety interlocks.
*   **Sensor Feedback is Key:** Understand that sensors like encoders provide the "eyes" and "ears" of the robot, enabling intelligent control.
*   **Kinematics Dictates Motion:** The arrangement of links and joints (kinematics) determines how the robot can move and what its workspace is.
*   **Dynamics Affects Performance:** The speed and forces involved in robotic motion (dynamics) significantly impact accuracy, stability, and the need for control.
*   **Calibration is Essential for Accuracy:** Any measurement or precise positioning task relies heavily on well-calibrated sensors and actuators.
*   **Troubleshooting Requires Logic:** Approach problems systematically, starting with simple checks like connections and error messages.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### **8. References**

*   **Textbooks:**
    *   Bolton, W. (2007). *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering.* Person Education Limited. (Crucial for mechatronics concepts, sensors, actuators, and control systems).
    *   Wilson, C.E., & Sadler, P. (2005). *Kinematics and Dynamics of Machinery.* Pearson Education. (Essential for understanding robotic arm mechanisms, DOF, joint types, and motion analysis).
    *   Shotbolt C.R., & Gayler J.F.W. (n.d.). *Metrology for Engineers.* ELBS, London. (Relevant for understanding measurement accuracy and calibration principles).
    *   Sharp K.W.B., & Hume Sir Isaac. (n.d.). *Practical Engineering Metrology.* Pitman and sons Ltd, London. (Reinforces metrology concepts applicable to robotic calibration and performance verification).
*   **Reference Books:**
    *   Myskza, D.H. (2013). *Machines and Mechanisms: Applied Kinematic Analysis.* Pearson Education. (Provides further depth on kinematic analysis, which is core to robotic arm operation).
    *   Ramachandran, K.P., Vijayaraghavan, G.K., & Balasundaram, M.S. (2008). *Mechatronics: Integrated Mechanical Electronic Systems.* Wiley India Pvt. Ltd. (Offers a good perspective on integrated mechatronic systems, including robotic applications).

---