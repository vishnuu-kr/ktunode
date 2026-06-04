---
title: "External sensors-contact type, noncontact type"
subject: "INTRODUCTION TO ROBOTICS"
module: "Module 2: Sensors and Actuators"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c49"
status: "completed"
scrapedAt: "2026-05-23T16:41:27.320Z"
---
# Introduction to Robotics - Module 2: Sensors and Actuators

## Topic: External Sensors - Contact Type, Non-Contact Type

---

### Learning Outcomes Addressed:

*   **LO1:** Understand the basic working principles of various external sensors used in robotics.
*   **LO2:** Differentiate between contact and non-contact sensors and their respective applications.
*   **LO3:** Identify the advantages and limitations of different types of external sensors.

### Course Outcomes Alignment:

*   **CO1 (K2):** Familiarise with anatomy, specifications and applications of Robots. (This topic contributes by explaining how sensors form part of a robot's "anatomy" and how their specifications influence applications).
*   **CO2 (K2):** Choose the appropriate sensors and actuators for robots. (This topic directly supports this by providing the knowledge base for sensor selection).

---

### 1. Introduction to External Sensors

External sensors are critical components of a robot that enable it to perceive and interact with its surrounding environment. They act as the robot's "senses," providing information about the external world, which is then processed by the robot's control system to make decisions and execute actions.

**Key Concept:** **Sensing** is the process of detecting and measuring physical quantities from the environment.

**Reference (General):**
*   S. R. Deb's "Robotics Technology and Flexible Automation" provides a good overview of various sensor types used in automation and robotics.
*   Ashitava Ghosal's "Robotics-Fundamental concepts and analysis" discusses the role of sensors in robot perception and task execution.

---

### 2. Classification of External Sensors

External sensors can be broadly classified based on their interaction with the environment:

#### 2.1. Contact Sensors

Contact sensors require physical contact with an object or surface to gather information. They are generally simpler and more robust but can be slower and potentially damage delicate objects or the sensor itself.

**Key Concept:** **Contact** implies a physical interaction between the sensor and the environment.

**Sub-classifications and Examples:**

*   **Touch Sensors (Tactile Sensors):**
    *   **Description:** Detect the presence or absence of contact and can sometimes measure the force or pressure applied.
    *   **Working Principle:** Typically use a mechanical switch (microswitch) or a pressure-sensitive material (piezoresistive, piezoelectric). When pressure is applied, the electrical resistance changes, or a voltage is generated.
    *   **Applications:**
        *   **Gripper Feedback:** Confirming that an object has been grasped.
        *   **Collision Detection:** Detecting accidental contact with obstacles.
        *   **Edge Detection:** Locating the edges of objects during manipulation.
    *   **Textbook Reference:**
        *   S. K. Saha's "Introduction to Robotics" may cover simple tactile sensors and their implementation.
        *   R. J. Schilling's "Fundamentals of robotics – Analysis and control" might discuss force sensing as part of tactile sensing.
    *   **Example:** A simple microswitch in a robot gripper that closes when the gripper jaws touch an object, signaling a successful grasp.

*   **Force/Torque Sensors:**
    *   **Description:** Measure the magnitude and direction of forces and torques applied to a robot's end-effector or joints.
    *   **Working Principle:** Often employ strain gauges. When a force or torque is applied, it deforms a metal element to which strain gauges are attached. The change in resistance of the strain gauges is then measured and correlated to the applied force/torque.
    *   **Applications:**
        *   **Assembly Tasks:** Applying precise forces during insertion or fastening.
        *   **Machining:** Controlling cutting forces in milling or grinding.
        *   **Human-Robot Interaction:** Ensuring safe interaction by detecting excessive forces.
        *   **Proprioception:** Measuring internal forces in robot joints.
    *   **Textbook Reference:**
        *   John J. Craig's "Introduction to Robotics: Mechanics and Control" provides detailed explanations of force sensing and its role in compliant motion.
        *   Ashitava Ghosal's "Robotics-Fundamental concepts and analysis" discusses force control strategies that rely on force sensors.
    *   **Example:** A robot assembling a delicate electronic component uses a force-torque sensor to detect when the component is properly seated and to avoid applying excessive force.

*   **Limit Switches:**
    *   **Description:** Simple binary sensors that indicate when a moving part has reached a specific position. They are a type of tactile sensor.
    *   **Working Principle:** A mechanical lever is pushed by a moving component, closing or opening an electrical circuit.
    *   **Applications:**
        *   **Defining Robot Joint Limits:** Preventing a robot arm from exceeding its physical range of motion.
        *   **End-of-Travel Detection:** Indicating when a linear actuator has reached its maximum or minimum extension.
    *   **Textbook Reference:**
        *   R. K. Mittal and I. J. Nagrath's "Robotics and Control" might mention limit switches in the context of robot joint control.
    *   **Example:** Limit switches at the extreme ends of a robot's shoulder joint prevent it from rotating too far.

---

#### 2.2. Non-Contact Sensors

Non-contact sensors gather information without physically touching the object or environment. They are generally faster, can handle delicate objects, and can sense objects at a distance. However, they can be more complex and sensitive to environmental conditions.

**Key Concept:** **Non-Contact** implies sensing without physical interaction.

**Sub-classifications and Examples:**

*   **Proximity Sensors:**
    *   **Description:** Detect the presence of an object within a specified range without physical contact.
    *   **Working Principle:** Various technologies are used:
        *   **Inductive:** Detects metallic objects by generating an electromagnetic field and sensing changes in the field caused by the object.
        *   **Capacitive:** Detects both metallic and non-metallic objects by sensing changes in capacitance between the sensor and the object.
        *   **Photoelectric (Optical):** Uses light (visible, infrared, or laser) and a receiver. The presence of an object is detected by interrupting or reflecting the light beam.
            *   *Through-beam:* Emitter and receiver are on opposite sides of the sensing path.
            *   *Retro-reflective:* Emitter and receiver are in the same unit; light reflects off a special reflector.
            *   *Diffuse-reflective:* Emitter and receiver are in the same unit; light reflects off the object itself.
    *   **Applications:**
        *   **Object Detection:** Identifying the presence of an object on a conveyor belt.
        *   **Position Sensing:** Determining if a component is in place.
        *   **Level Sensing:** Detecting the level of liquids or solids in a container.
    *   **Textbook Reference:**
        *   S. R. Deb's "Robotics Technology and Flexible Automation" covers photoelectric and inductive proximity sensors extensively.
        *   John J. Craig's "Introduction to Robotics: Mechanics and Control" might discuss their use in environment sensing.
    *   **Example:** A photoelectric proximity sensor on a manufacturing line detects when a product arrives at a workstation.

*   **Vision Sensors (Cameras):**
    *   **Description:** Capture visual information about the environment, allowing robots to "see."
    *   **Working Principle:** CMOS or CCD image sensors convert light into electrical signals, forming a digital image. Image processing algorithms are then used to interpret the image.
    *   **Types:**
        *   **Monocular Cameras:** Single camera, provide 2D information. Depth perception requires algorithms or known object sizes.
        *   **Stereo Cameras:** Two cameras, provide 3D information through triangulation.
        *   **Depth Cameras (e.g., Time-of-Flight, Structured Light):** Directly measure depth information.
    *   **Applications:**
        *   **Object Recognition and Localization:** Identifying and locating objects for grasping or manipulation.
        *   **Navigation:** Path planning and obstacle avoidance.
        *   **Inspection:** Checking for defects or quality control.
        *   **Barcode/QR Code Reading:** Identifying products.
    *   **Textbook Reference:**
        *   Ashitava Ghosal's "Robotics-Fundamental concepts and analysis" dedicates significant portions to computer vision in robotics.
        *   John J. Craig's "Introduction to Robotics: Mechanics and Control" covers the basics of robot vision.
    *   **Example:** A robot arm uses a vision system to locate and pick up irregularly shaped parts from a bin.

*   **Range Sensors (Distance Sensors):**
    *   **Description:** Measure the distance to objects in the environment.
    *   **Working Principle:**
        *   **Ultrasonic Sensors:** Emit ultrasonic sound pulses and measure the time it takes for the echo to return after reflecting off an object. Distance is calculated using the speed of sound.
        *   **Lidar (Light Detection and Ranging):** Uses pulsed laser light to measure distances. Typically rotates to create a 2D or 3D map of the surroundings.
        *   **Infrared (IR) Range Sensors:** Emit IR light and measure the amount of reflected light or the angle of reflection.
    *   **Applications:**
        *   **Obstacle Detection and Avoidance:** Essential for autonomous navigation.
        *   **Mapping:** Creating a map of the environment.
        *   **Profiling:** Determining the shape of surfaces.
    *   **Textbook Reference:**
        *   S. K. Saha's "Introduction to Robotics" might discuss ultrasonic sensors.
        *   R. J. Schilling's "Fundamentals of robotics – Analysis and control" could cover their use in mobile robot navigation.
    *   **Example:** A self-driving car uses Lidar to build a 3D map of its surroundings and detect obstacles.

*   **Proximity Sensors (Specific mention of Magnetic Sensors):**
    *   **Description:** Detect the presence of magnetic fields or metallic objects.
    *   **Working Principle:**
        *   **Hall Effect Sensors:** Detect the presence and magnitude of a magnetic field. A voltage is produced when a current-carrying conductor is placed in a magnetic field.
        *   **Reed Switches:** Two ferromagnetic reeds enclosed in a glass bulb. A magnetic field causes the reeds to touch, closing a circuit.
    *   **Applications:**
        *   **Detecting the position of magnetic targets.**
        *   **Motor Commutation:** In brushless DC motors.
        *   **Door/Window Sensors:** In home automation.
    *   **Example:** A Hall effect sensor detects the position of a rotating shaft when a magnet is attached to it.

---

### 3. Choosing the Right Sensor

The selection of an external sensor depends on several factors:

*   **Application Requirements:** What specific information does the robot need? (e.g., presence of an object, distance, force, visual data).
*   **Environment:** Is the environment dusty, wet, or does it contain interfering signals?
*   **Object Properties:** What are the objects made of (metal, plastic, transparent)? What is their size, shape, and color?
*   **Speed and Accuracy:** How fast does the sensor need to respond? What level of precision is required?
*   **Cost and Complexity:** What is the budget? How easy is the sensor to integrate and maintain?
*   **Robustness:** Can the sensor withstand the operational conditions?

**Key Concept:** **Sensor Fusion** is the process of combining data from multiple sensors to obtain a more accurate, complete, or reliable understanding of the environment. This is often necessary for complex tasks.

**Course Outcome Alignment:**
*   **CO2 (K2):** This entire section is dedicated to supporting the choice of appropriate sensors.

---

### 4. Advantages and Limitations

| Sensor Type       | Advantages                                                               | Limitations                                                                       |
| :---------------- | :----------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| **Contact**       | - Generally simple and robust<br>- Can provide high accuracy for localized measurements<br>- Often lower cost | - Require physical contact, potentially damaging objects or sensor<br>- Slower response times<br>- Can wear out over time<br>- Limited sensing range |
| **Non-Contact**   | - No physical damage to objects or sensor<br>- Faster response times<br>- Can sense from a distance<br>- Wider sensing coverage | - Can be more complex and expensive<br>- Susceptible to environmental factors (e.g., dust, light, temperature)<br>- May require calibration<br>- Accuracy can vary with distance and object properties |

---

### 5. Practice Questions and Answers

**Question 1:** A robot arm needs to confirm that it has successfully gripped a product on an assembly line. Which type of sensor would be most appropriate and why?
    *   **Answer:** A **touch sensor** (specifically, a microswitch or a tactile sensor) would be most appropriate. It requires physical contact to confirm the grip, providing a direct and simple confirmation that the object is held. A proximity sensor might detect the object near the gripper but not necessarily confirm it's *gripped*.

**Question 2:** A mobile robot is navigating in an office environment. It needs to detect walls, furniture, and people to avoid collisions. What types of non-contact sensors would be suitable for this task? Explain your choices.
    *   **Answer:**
        *   **Lidar:** Excellent for creating detailed 2D or 3D maps of the environment, detecting obstacles at various distances, and is generally robust.
        *   **Ultrasonic Sensors:** Good for detecting larger obstacles within a medium range. They are cost-effective and can work in various lighting conditions but can be less precise than Lidar and have a wider detection cone.
        *   **Vision Sensors (Stereo or Depth Cameras):** Can provide rich information about the environment, including object identification and navigation cues. Depth cameras are particularly useful for precise distance measurements and 3D mapping.

**Question 3:** Explain the fundamental difference between inductive and capacitive proximity sensors.
    *   **Answer:**
        *   **Inductive Proximity Sensors:** Detect only **metallic objects**. They work by generating an electromagnetic field and sensing the changes in this field caused by eddy currents induced in the metallic object.
        *   **Capacitive Proximity Sensors:** Can detect both **metallic and non-metallic objects** (including liquids, wood, plastic, etc.). They work by sensing changes in capacitance between the sensor's electrode and the target object.

**Question 4:** What is the primary advantage of using a force-torque sensor in a robot's wrist during a peg-in-hole insertion task?
    *   **Answer:** The primary advantage is to **control the insertion force**. The robot can detect if it's applying too much force (which could cause damage or jamming) or if the peg is not aligning correctly. This allows for **compliant motion**, where the robot adjusts its movement based on the detected forces, leading to successful and damage-free insertion.

---

### 6. Important Points to Remember

*   **Contact vs. Non-Contact:** This is the fundamental distinction for external sensors, dictating their interaction method.
*   **Functionality Dictates Choice:** The specific task (grasping, navigating, assembling) will determine the sensor requirements.
*   **Trade-offs Exist:** No single sensor is perfect; always consider advantages and limitations (cost, speed, accuracy, robustness).
*   **Sensor Fusion is Powerful:** Combining data from multiple sensors often yields superior environmental perception.
*   **Environment Matters:** Sensor performance can be significantly impacted by the surrounding conditions.
*   **Digital vs. Analog Output:** Sensors can provide discrete signals (e.g., touch/no-touch) or continuous analog values (e.g., force, distance).

---

### Glossary of Key Terms:

*   **Tactile Sensor:** A sensor that detects physical contact.
*   **Strain Gauge:** A transducer that converts force, pressure, or tension into a change in electrical resistance.
*   **Proximity Sensor:** A sensor that detects the presence of an object without physical contact.
*   **Lidar:** Light Detection and Ranging; uses laser pulses to measure distances.
*   **Computer Vision:** The field of AI that enables computers to "see" and interpret visual information.
*   **Compliant Motion:** Robot motion that is influenced by external forces, allowing for adaptation to uncertainties in the environment.
*   **Sensor Fusion:** The process of combining data from multiple sensors to improve the accuracy and reliability of perception.

---

This concludes Module 2, Topic 2 on External Sensors. Understanding these sensors is crucial for designing robots that can effectively perceive and interact with their environment, directly supporting Course Outcome CO1 and CO2.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
