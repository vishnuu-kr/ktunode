---
title: "Sensors:"
subject: "ROBOTICS AND AUTOMATION"
module: "Module 3: Actuation and Feedback Mechanisms"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff199"
status: "completed"
scrapedAt: "2026-05-23T18:09:51.675Z"
---
# ROBOTICS AND AUTOMATION: Module 3 - Actuation and Feedback Mechanisms

## Topic: Sensors

### Learning Outcomes Covered:

*   **LO 1:** Understand the role and classification of sensors in robotic systems.
*   **LO 2:** Identify and explain the working principles of various types of sensors used in robotics.
*   **LO 3:** Discuss the importance of sensor characteristics and their impact on robotic performance.
*   **LO 4:** Analyze sensor data and its integration into feedback control loops.

---

### Introduction to Sensors in Robotics

Sensors are the "senses" of a robot, providing information about the robot's internal state and its external environment. This information is crucial for robots to perceive, interpret, and interact with their surroundings, enabling intelligent behavior and precise control.

**Definition:** A sensor is a device that detects or measures a physical property and records, indicates, or otherwise responds to it. In robotics, sensors convert physical phenomena (like light, temperature, pressure, position) into electrical signals that can be processed by the robot's controller.

**Role of Sensors:**

*   **Perception:** Gathering information about the environment (e.g., object detection, obstacle avoidance, navigation).
*   **Feedback:** Monitoring the robot's own state (e.g., joint angles, motor speeds, end-effector forces).
*   **Control:** Providing data for closed-loop control systems to adjust robot actions.
*   **Safety:** Detecting potential hazards and initiating safety measures.

**Alignment with Course Outcomes:**

*   **CO4 (K2):** This topic directly addresses the identification and comparison of different types of sensors used in robotic systems.

---

### Classification of Sensors

Sensors can be broadly classified based on various criteria:

#### 1. Based on the Physical Quantity Measured:

*   **Position Sensors (Proprioceptive):** Measure the internal state of the robot.
    *   **Angular Position:** Encoders (absolute, incremental), Potentiometers, Resolver.
    *   **Linear Position:** Linear Potentiometers, Linear Encoders, LVDTs (Linear Variable Differential Transformers).
*   **Velocity Sensors (Proprioceptive):** Measure the rate of change of position.
    *   **Angular Velocity:** Tachometers, Gyroscopes (though gyroscopes are often used for orientation, they can infer angular velocity).
    *   **Linear Velocity:** Velocity Tachometers.
*   **Force/Torque Sensors (Proprioceptive):** Measure forces and torques applied to or by the robot.
    *   Strain Gauges.
    *   Force/Torque Transducers.
*   **Proximity Sensors (Exteroceptive):** Detect the presence of objects without physical contact.
    *   Inductive Sensors.
    *   Capacitive Sensors.
    *   Photoelectric Sensors.
    *   Ultrasonic Sensors.
*   **Vision Sensors (Exteroceptive):** Capture visual information of the environment.
    *   Cameras (Monocular, Stereo, RGB-D).
*   **Tactile Sensors (Exteroceptive):** Provide information about contact, pressure, and texture.
    *   Touch Sensors.
    *   Pressure Sensors.
*   **Temperature Sensors (Exteroceptive):** Measure the ambient or object temperature.
    *   Thermistors.
    *   Thermocouples.
*   **Other Exteroceptive Sensors:**
    *   Range Sensors (Laser Rangefinders, LiDAR).
    *   Acoustic Sensors (Microphones).

#### 2. Based on their Relationship to the Environment:

*   **Proprioceptive Sensors:** Measure internal states of the robot (e.g., joint angles, motor speed). These are essential for feedback control of robot manipulators.
    *   *Examples:* Encoders on robot joints, tachometers on motors.
*   **Exteroceptive Sensors:** Measure external environmental conditions or the presence of objects (e.g., distance to an object, presence of light). These are crucial for interaction with the environment.
    *   *Examples:* Vision cameras, proximity sensors, force sensors for interaction.

#### 3. Based on Output Signal Type:

*   **Analog Sensors:** Produce a continuous output signal proportional to the measured quantity.
    *   *Examples:* Potentiometers, thermistors.
*   **Digital Sensors:** Produce discrete output signals, often in the form of binary pulses or coded words.
    *   *Examples:* Incremental encoders, absolute encoders.

---

### Key Sensor Types and Working Principles

This section delves into the specifics of commonly used sensors in robotics.

#### 1. Position Sensors

**a) Potentiometers:**

*   **Principle:** A variable resistor where the resistance changes linearly with the position of a wiper along a resistive track.
*   **Type:** Analog.
*   **Application:** Measuring joint angles, linear displacement.
*   **Limitations:** Non-linearities, limited resolution, wear and tear on the resistive track, susceptible to noise.
*   *Reference:* Groover (1987) discusses potentiometers as simple position sensors.

**b) Encoders:**

*   **Incremental Encoders:**
    *   **Principle:** Generate pulses as a shaft rotates. Two channels (A and B) are offset by 90 degrees (quadrature) to determine the direction of rotation. A third channel (Z or index) provides a reference pulse once per revolution.
    *   **Output:** Digital pulses.
    *   **Application:** Measuring joint angles with high resolution.
    *   **Important Point:** Requires an external counter to track position. The absolute position is lost upon power interruption.
*   **Absolute Encoders:**
    *   **Principle:** Provide a unique digital code for each discrete position of the shaft. Uses multiple tracks with different patterns.
    *   **Output:** Digital code.
    *   **Application:** Knowing the exact position immediately upon power-up. Useful for critical joints.
    *   **Important Point:** More complex and expensive than incremental encoders.
*   *Reference:* Craig (2005) and Spong et al. (WILEY) provide detailed explanations of encoder types and their use in robotic joint position sensing.

**c) Resolvers:**

*   **Principle:** A rotary transformer with a primary winding and two secondary windings offset by 90 degrees. The amplitude of the output AC voltage from the secondary windings varies sinusoidally with the rotor's angular position.
*   **Type:** Analog (output is AC voltage).
*   **Application:** Robust position sensing in harsh industrial environments.
*   *Reference:* Groover (1987) covers resolvers as analog position transducers.

**d) Linear Variable Differential Transformer (LVDT):**

*   **Principle:** An electromechanical transducer that converts linear displacement into a proportional AC voltage. Consists of a primary coil and two secondary coils, with a movable core. The voltage induced in the secondary coils depends on the core's position.
*   **Type:** Analog.
*   **Application:** Measuring linear displacement with high accuracy.
*   *Reference:* Ghoshal (2006) might discuss LVDTs in the context of position measurement in robotic systems.

#### 2. Velocity Sensors

**a) Tachometers:**

*   **Principle:** Typically DC generators that produce an output voltage proportional to the angular velocity of the rotating shaft.
*   **Type:** Analog.
*   **Application:** Measuring motor speed for velocity control.
*   *Reference:* Groover (1987) mentions tachometers as speed sensing devices.

#### 3. Force and Torque Sensors

*   **Principle:** Often based on **strain gauges**. Strain gauges are resistive elements that change their resistance when stretched or compressed. They are bonded to a structure that deforms under applied force or torque. By arranging strain gauges in a Wheatstone bridge configuration, small changes in resistance can be amplified and measured.
*   **Types:**
    *   **Force Sensors (Load Cells):** Measure linear forces.
    *   **Torque Sensors:** Measure rotational forces (torques).
    *   **Force-Torque Sensors:** Measure forces and torques in multiple axes simultaneously.
*   **Application:**
    *    **Force Feedback Control:** Enabling robots to interact with their environment with controlled compliance (e.g., inserting pegs, polishing).
    *   **Detecting Collisions:** Measuring unexpected forces.
    *   **Monitoring Gripper Force:** Ensuring objects are held without being crushed.
*   **Important Point:** Crucial for "smart" manipulation and compliant motion.
*   *Reference:* Craig (2005) and Spong et al. (WILEY) extensively cover force sensing and its role in advanced robot control, including impedance control.

#### 4. Proximity Sensors

*   **Principle:** Detect the presence of an object without physical contact.
    *   **Inductive:** Detect metallic objects by generating a magnetic field.
    *   **Capacitive:** Detect both metallic and non-metallic objects by sensing changes in capacitance.
    *   **Photoelectric:** Use a light beam; detection occurs when the beam is interrupted or reflected.
    *   **Ultrasonic:** Emit ultrasonic sound waves and detect objects by measuring the time it takes for the reflected waves (echo) to return.
*   **Type:** Typically output a digital signal (ON/OFF) or an analog signal representing distance.
*   **Application:** Obstacle detection, object presence confirmation, automated assembly.
*   *Reference:* Groover (1987) discusses proximity sensors for material handling and automation.

#### 5. Vision Sensors (Cameras)

*   **Principle:** Capture images of the environment. Images are then processed using computer vision algorithms to extract information about objects, their positions, orientations, and characteristics.
    *   **Monocular Camera:** Single camera. Provides 2D information. Depth estimation is challenging.
    *   **Stereo Cameras:** Two cameras. Allow for depth perception by triangulation.
    *   **RGB-D Cameras (Depth Cameras):** Provide both color (RGB) and depth (D) information for each pixel.
*   **Type:** Generate digital image data.
*   **Application:**
    *   **Object Recognition and Tracking.**
    *   **Localization and Mapping (SLAM).**
    *   **Inspection and Quality Control.**
    *   **Navigation.**
*   **Important Point:** Vision systems are computationally intensive and sensitive to lighting conditions.
*   *Reference:* Spong et al. (WILEY) dedicates significant sections to robot vision, including camera models, image formation, and basic image processing techniques. Craig (2005) also touches upon visual servoing.

#### 6. Tactile Sensors

*   **Principle:** Mimic the human sense of touch. They can measure pressure distribution, shear forces, and even texture. Often use arrays of pressure-sensitive elements.
*   **Type:** Can be analog (pressure distribution) or digital (contact detection).
*   **Application:**
    *   **Grasping and Manipulation:** Feedback on grip force and slip detection.
    *   **Assembly Tasks:** Confirming proper contact.
    *   **Surface Exploration.**
*   *Reference:* Ghoshal (2006) may explore tactile sensing in the context of robot manipulation.

#### 7. Range Sensors (Distance Sensors)

*   **Principle:** Measure the distance to objects.
    *   **Ultrasonic Sensors:** (As mentioned under proximity)
    *   **Infrared (IR) Rangefinders:** Use IR light; distance is often inferred from the intensity of reflected light or triangulation.
    *   **Laser Rangefinders/LiDAR (Light Detection and Ranging):** Emit laser pulses and measure the time of flight for the reflected pulse to return, calculating distance. LiDAR can create 2D or 3D point clouds of the environment.
*   **Type:** Can be analog (analog output proportional to distance) or digital (direct distance reading).
*   **Application:**
    *   **Obstacle Avoidance.**
    *   **Mapping.**
    *   **Robotic Navigation.**
*   *Reference:* Spong et al. (WILEY) might cover range sensing for localization and mapping.

---

### Sensor Characteristics and Performance

The choice of a sensor depends on its characteristics and how they align with the robot's requirements.

*   **Accuracy:** The degree of closeness of measurements of a quantity to that quantity's actual (true) value.
*   **Precision:** The degree to which repeated measurements under unchanged conditions show the same results.
*   **Resolution:** The smallest change in a physical quantity that the sensor can detect.
*   **Sensitivity:** The ratio of the change in the output signal to the corresponding change in the physical quantity being measured.
*   **Range:** The minimum and maximum values of the physical quantity that the sensor can measure.
*   **Bandwidth/Response Time:** How quickly the sensor can respond to changes in the measured quantity. Crucial for high-speed robots.
*   **Linearity:** The extent to which the sensor's output is directly proportional to the input.
*   **Repeatability:** The ability of the sensor to produce the same output for the same input over time and under the same conditions.
*   **Drift:** A slow change in the sensor's output over time, even when the input is constant.
*   **Noise:** Random fluctuations in the sensor's output signal.

**Important Point:** No sensor is perfect. Understanding these characteristics is vital for selecting the right sensor and for interpreting its data correctly.

**Alignment with Course Outcomes:**

*   **CO4 (K2):** Understanding these characteristics helps in comparing different sensor types.

---

### Sensor Data Integration and Feedback Control

Sensor data is the input for the robot's control system, forming the basis of **closed-loop control**.

**1. Feedback Loop:**

*   **Sensing:** A sensor measures a physical quantity (e.g., joint angle).
*   **Transduction:** The sensor converts the physical quantity into an electrical signal.
*   **Signal Conditioning:** The electrical signal is amplified, filtered, or digitized.
*   **Processing:** The controller (microprocessor/computer) receives the processed signal.
*   **Comparison:** The controller compares the actual value (from the sensor) with the desired or setpoint value.
*   **Control Action:** Based on the error (difference between actual and desired values), the controller calculates a command for the actuator (e.g., motor).
*   **Actuation:** The actuator (e.g., motor) drives the robot's joint to achieve the desired state.

**2. Common Control Architectures using Sensors:**

*   **PID Control:** Proportional-Integral-Derivative control uses sensor feedback (position, velocity) to adjust motor commands to reach and maintain a desired state.
*   **Visual Servoing:** Uses camera feedback to control robot motion, guiding the robot to a desired pose relative to a target object.
*   **Force Control/Impedance Control:** Uses force/torque sensor feedback to achieve compliant interaction with the environment.

**Example: Controlling a Robot Arm Joint**

1.  **Desired Angle:** The robot controller commands joint 3 to reach 90 degrees.
2.  **Sensor:** An encoder on joint 3 measures its current angle.
3.  **Feedback:** The encoder sends a digital signal representing the current angle (e.g., 85 degrees) to the controller.
4.  **Error Calculation:** The controller calculates the error: Desired (90°) - Actual (85°) = 5°.
5.  **Control Signal:** The controller generates a command to the motor driving joint 3, instructing it to move towards 90 degrees.
6.  **Actuation:** The motor rotates the joint.
7.  **Loop Continues:** The encoder continuously reports the new angle, and the controller adjusts the motor command until the error is minimized (joint reaches 90 degrees).

**Important Point:** The quality of the sensor data directly impacts the performance and stability of the control system.

**Alignment with Course Outcomes:**

*   **CO3 (K2):** Understanding how sensors provide feedback is crucial for explaining their impact on robot motion control.
*   **CO1 (K2):** Sensors are fundamental components that enable the robot to understand its own state and its environment, relating to degrees of freedom.

---

### Practice Questions and Answers

**Question 1:**
What is the primary difference between proprioceptive and exteroceptive sensors in a robot? Provide an example of each.

**Answer 1:**
*   **Proprioceptive sensors** measure the internal state of the robot. **Example:** An encoder measuring the angle of a robot's shoulder joint.
*   **Exteroceptive sensors** measure external environmental conditions or the presence of objects. **Example:** A vision camera detecting an obstacle in the robot's path.

**Question 2:**
An incremental encoder provides pulses for measuring angular position. If the encoder has 1000 pulses per revolution and the motor shaft is rotated by 360 degrees, how many pulses will be generated? What happens if the robot loses power?

**Answer 2:**
*   If the encoder has 1000 pulses per revolution, a full 360-degree rotation will generate 1000 pulses.
*   If the robot loses power, an incremental encoder will lose its position count. Upon power restoration, the robot will not know its absolute position until it performs a homing procedure or the encoder's Z-channel (index pulse) is used.

**Question 3:**
Why are force/torque sensors important for robots performing tasks that involve physical contact with the environment, such as peg-in-hole insertion?

**Answer 3:**
Force/torque sensors are crucial for tasks involving physical contact because they provide feedback on the forces and torques being exerted. In a peg-in-hole insertion task, this feedback allows the robot to:
*   Detect when the peg is misaligned.
*   Apply the correct amount of force to overcome friction or resistance without damaging the components.
*   Adjust its trajectory to smoothly guide the peg into the hole, achieving compliant insertion.
Without force feedback, the robot might apply excessive force, leading to jamming, component damage, or failure to complete the task.

**Question 4:**
Explain the concept of "resolution" in the context of a sensor. Give an example of a sensor where high resolution is particularly important.

**Answer 4:**
Resolution is the smallest change in a physical quantity that a sensor can detect or measure.
A sensor with high resolution can distinguish between very small differences in the measured value.
High resolution is particularly important for **encoders** used to measure the precise angular position of robot joints, especially in applications requiring accurate trajectory tracking and fine manipulation. For example, if a robot needs to perform delicate surgery, the encoders on its arm joints must have very high resolution to detect and respond to minute movements.

**Question 5:**
What is the main advantage of an absolute encoder over an incremental encoder, and what is a potential disadvantage?

**Answer 5:**
*   **Advantage:** An absolute encoder provides a unique digital code for each shaft position, meaning the robot knows its exact position immediately upon power-up without needing to move. An incremental encoder loses its position count upon power loss.
*   **Disadvantage:** Absolute encoders are generally more complex and expensive than incremental encoders.

---

### Important Points to Remember

*   **Sensors are the eyes and ears of a robot.** They are essential for perception and feedback.
*   **Proprioceptive sensors** inform the robot about its own state, crucial for internal control.
*   **Exteroceptive sensors** inform the robot about its environment, crucial for interaction.
*   **Encoders** are vital for measuring joint positions, with absolute encoders offering position certainty on power-up.
*   **Force/Torque sensors** enable compliant interaction and delicate manipulation.
*   **Vision systems** provide rich environmental information but require significant processing.
*   **Sensor characteristics** (accuracy, resolution, response time, etc.) dictate their suitability for specific tasks.
*   **Sensor data is the foundation of closed-loop control**, enabling robots to achieve desired behaviors and adapt to their environment.
*   **The choice of sensor** significantly impacts the robot's capabilities and performance.

---

This concludes the study notes for Sensors in Module 3. Ensure to refer to the specified textbooks for more in-depth coverage and derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
