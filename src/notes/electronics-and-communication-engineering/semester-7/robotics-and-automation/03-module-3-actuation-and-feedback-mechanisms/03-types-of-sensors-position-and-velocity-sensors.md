---
title: "Types of sensors: Position and velocity sensors."
subject: "ROBOTICS AND AUTOMATION"
module: "Module 3: Actuation and Feedback Mechanisms"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff19a"
status: "completed"
scrapedAt: "2026-05-23T18:09:52.525Z"
---
# ROBOTICS AND AUTOMATION: Module 3 - Actuation and Feedback Mechanisms
## Topic: Types of Sensors: Position and Velocity Sensors

This module delves into the crucial role of sensors in robotic systems, focusing on how they provide essential information about the robot's state. We will explore position and velocity sensors, understanding their principles, applications, and how they enable robots to interact with their environment and perform tasks accurately.

---

### **Module 3 Learning Outcomes:**

By the end of this module, you will be able to:

*   **Understand the fundamental principles of various sensors used in robotics.** (K1 - Knowledge)
*   **Differentiate between different types of position sensors and their working mechanisms.** (K2 - Knowledge)
*   **Explain the working principles of various velocity sensors.** (K2 - Knowledge)
*   **Identify appropriate sensors for specific robotic applications based on their requirements.** (K2 - Knowledge)
*   **Compare and contrast the advantages and disadvantages of different position and velocity sensors.** (K2 - Knowledge)

---

### **Course Outcomes Addressed in this Topic:**

*   **CO4: Identify and compare different types of sensors and actuators used in robotic systems (Knowledge Level: K2)**
    *   This topic directly contributes to CO4 by focusing on identifying, understanding, and comparing position and velocity sensors.

---

### **Key Concepts and Definitions:**

*   **Sensor:** A device that detects and responds to some type of input from the physical environment. The input could be light, heat, motion, moisture, pressure, or any one of a great number of other environmental phenomena.
*   **Actuator:** A component of a robot that is responsible for moving and controlling the robot's mechanisms. Actuators are often electric motors, but can also be hydraulic or pneumatic cylinders.
*   **Feedback Mechanism:** A system that uses the output of a process to adjust the input, typically to maintain a desired state or achieve a specific goal. In robotics, sensors provide feedback about the robot's joint angles, end-effector position, velocity, etc., which is used by the controller.
*   **Position Sensor:** A sensor that measures the spatial location of a robot's joint or end-effector. This can be absolute (a specific position) or incremental (change in position).
*   **Velocity Sensor:** A sensor that measures the rate of change of position of a robot's joint or end-effector.

---

## 1. Position Sensors

Position sensors are fundamental for robots to know where their joints or end-effectors are in space. This information is critical for kinematics, motion planning, and precise task execution.

### 1.1. Types of Position Sensors:

#### 1.1.1. Potentiometers (Pots)

*   **Principle:** A potentiometer is a variable resistor. It consists of a resistive element (often a wire-wound or carbon film) and a movable contact (wiper). As the wiper moves along the resistive element, the resistance between the wiper and one end of the element changes proportionally to the wiper's position.
*   **Working:** A constant voltage is applied across the ends of the resistive element. The output voltage from the wiper is then proportional to its position along the element.
*   **Types:**
    *   **Linear Potentiometers:** The wiper moves in a straight line.
    *   **Rotary Potentiometers:** The wiper rotates along a circular resistive element.
*   **Advantages:**
    *   Simple and inexpensive.
    *   Provide absolute position information (at any given time, the output voltage directly corresponds to the wiper's position).
*   **Disadvantages:**
    *   Limited resolution (especially wire-wound).
    *   Susceptible to wear and tear (mechanical contact).
    *   Can be affected by noise and temperature.
    *   Limited bandwidth (speed of response).
*   **Applications in Robotics:** Measuring joint angles in robot arms (especially for less critical joints), linear position feedback in simple actuators.
*   **Textbook Reference:**
    *   *Introduction to Robotics: Mechanics and Control* by John J. Craig often discusses basic sensing principles, and potentiometers are a classic example of simple position transducers.
    *   *Industrial Robotics* by Groover MP would likely cover potentiometers as common feedback devices in older or simpler industrial robot designs.

#### 1.1.2. Encoders

Encoders are widely used for precise position measurement and are a cornerstone of modern robotics. They convert angular or linear displacement into a digital signal.

##### 1.1.2.1. Absolute Encoders

*   **Principle:** An absolute encoder provides a unique digital code for each distinct position of the shaft or slide. It does not require movement to determine its position.
*   **Working:** They use a coded disk or strip with unique patterns for each position. Optical encoders use light passing through or reflecting off these patterns, while magnetic encoders use magnetic poles. A set of sensors reads these patterns to determine the absolute position.
*   **Advantages:**
    *   Provides absolute position information, meaning the position is known immediately upon power-up.
    *   No need for homing sequences.
    *   High resolution and accuracy.
*   **Disadvantages:**
    *   More complex and expensive than incremental encoders.
    *   Output is digital, requiring a decoder or processor.
*   **Applications in Robotics:** Crucial for precise joint angle feedback in advanced robot arms, CNC machines, and robotic manipulators where knowing the exact position upon startup is essential.
*   **Textbook Reference:**
    *   *Robot Modeling and Control* by Spong, Hutchinson, and Vidyasagar will extensively cover encoders as they are fundamental for kinematic calculations and control.
    *   *Introduction to Robotics* by John G Craig will likely detail the use of encoders for joint-space control.

##### 1.1.2.2. Incremental Encoders

*   **Principle:** An incremental encoder outputs pulses as its shaft or slide moves. The position is determined by counting these pulses relative to a known starting point.
*   **Working:**
    *   **Quadrature Encoding:** Most incremental encoders use two output channels (A and B) that produce square waves. These channels are typically 90 degrees out of phase. By detecting the sequence of transitions on A and B, both the direction of movement and the number of pulses can be determined.
    *   **Index Pulse (Z or I Channel):** An additional channel provides a single pulse per revolution (or per significant movement) to serve as a reference or home position.
*   **Advantages:**
    *   Simpler and less expensive than absolute encoders.
    *   High resolution is achievable by using fine patterns.
    *   High speed operation.
*   **Disadvantages:**
    *   Do not retain position information upon power loss. Requires a "homing" procedure to establish a reference position.
    *   Can lose position count due to electrical noise or external interference if error correction is not implemented.
*   **Applications in Robotics:** Widely used for joint angle feedback in robotic arms, motor speed sensing, and linear position sensing in robotic systems.
*   **Textbook Reference:**
    *   All listed textbooks will cover incremental encoders. They are a standard component discussed in chapters on robot sensing and control.
    *   *Robotics fundamental concepts & analysis* by Ashitava Ghoshal would likely explain the quadrature encoding method in detail.

#### 1.1.3. Resolvers

*   **Principle:** Resolvers are electromechanical transducers that convert angular position into electrical signals. They are similar in principle to a rotary transformer but with a rotor that is mechanically coupled to the shaft whose position is to be measured.
*   **Working:** A resolver has a stator with two windings (sine and cosine) and a rotor with one or two windings. An AC excitation voltage is applied to the rotor winding. The voltage induced in the stator windings varies sinusoidally with the rotor's angular position. The ratio of these induced voltages is independent of the excitation voltage amplitude and can be used to determine the angle.
*   **Advantages:**
    *   Extremely robust and reliable, especially in harsh environments (vibration, shock, high temperatures, dirt, moisture).
    *   No digital electronics on the sensor itself, making them resistant to EMI.
    *   Provide analog signals that are inherently resistant to noise.
*   **Disadvantages:**
    *   Require more complex signal conditioning electronics (RDC - Resolver-to-Digital Converter).
    *   Lower resolution compared to high-end encoders.
    *   Provide analog output, which needs conversion for digital control systems.
*   **Applications in Robotics:** Used in industrial robots operating in harsh environments, aerospace applications, and military robotics where reliability is paramount.
*   **Textbook Reference:**
    *   While perhaps less emphasized than encoders in introductory texts, Groover's *Industrial Robotics* might discuss resolvers for their ruggedness in industrial settings.

#### 1.1.4. Linear Position Sensors (LVDTs, String Potentiometers)

While rotary sensors are common for joints, linear robots or specific robotic axes might require linear position sensing.

##### 1.1.4.1. Linear Variable Differential Transformer (LVDT)

*   **Principle:** An LVDT is an electromechanical transducer that converts linear displacement into an AC electrical signal. It consists of a primary coil and two secondary coils, all wound around a ferromagnetic core that can move axially.
*   **Working:** The primary coil is energized with an AC voltage. The secondary coils are connected in series opposition. As the core moves, the magnetic coupling between the primary and secondary coils changes, inducing voltages in the secondary coils. The difference between the voltages in the secondary coils is proportional to the core's displacement.
*   **Advantages:**
    *   Infinite resolution (theoretically).
    *   Non-contact sensing, so no wear.
    *   High accuracy and linearity.
    *   Robust to environmental conditions.
*   **Disadvantages:**
    *   Requires an AC excitation source and signal conditioning.
    *   More expensive than potentiometers.
    *   Limited frequency response.
*   **Applications in Robotics:** Measuring the linear extension or retraction of robotic arms, linear actuators, and gauging applications.
*   **Textbook Reference:**
    *   Mentioned in comprehensive texts like Craig's or Spong's when discussing various transducer types.

##### 1.1.4.2. String Potentiometers (Draw-Wire Sensors)

*   **Principle:** A flexible steel cable (string) is wound around a spring-loaded spool. The spool is connected to a rotary potentiometer. As the object moves, it pulls the string, unwinding it from the spool. The rotation of the spool is then measured by the potentiometer.
*   **Working:** The spring in the spool ensures the string remains taut. The linear movement of the object translates to rotational movement of the spool, which is then converted to an electrical signal by the attached potentiometer.
*   **Advantages:**
    *   Can measure long linear displacements (up to several meters).
    *   Relatively simple and cost-effective for long ranges.
*   **Disadvantages:**
    *   The accuracy is limited by the potentiometer's accuracy and any "play" in the spool mechanism.
    *   The string can stretch under tension, affecting accuracy.
    *   Can be susceptible to dirt and debris affecting the spool.
*   **Applications in Robotics:** Measuring the reach of robotic arms, linear displacement in gantry robots, or profiling surfaces.
*   **Textbook Reference:**
    *   Likely found in sections on specialized sensors or application-specific sensing in industrial robotics texts.

#### 1.1.5. Optical Sensors (Non-Encoder based)

While encoders are optical, other optical sensors can determine position.

##### 1.1.5.1. Vision Systems (Cameras)

*   **Principle:** Cameras capture images of the environment or the robot's workspace. Image processing algorithms are then used to detect and track features, objects, or the robot's end-effector to determine its position and orientation.
*   **Working:** A camera captures an image. Image processing techniques like feature detection (e.g., SIFT, SURF), template matching, or color segmentation are applied to identify specific points or objects. If the camera's intrinsic and extrinsic parameters are known, the 3D position and orientation of these features can be calculated (stereo vision, structure from motion, or by recognizing known objects with known dimensions).
*   **Advantages:**
    *   Can provide rich information about the environment, not just position.
    *   Can locate objects and the robot's end-effector relative to the environment.
    *   Non-contact and can cover a wide area.
*   **Disadvantages:**
    *   Computationally intensive.
    *   Sensitive to lighting conditions and occlusions.
    *   Accuracy can vary significantly based on the system, algorithms, and calibration.
*   **Applications in Robotics:** Object recognition and manipulation, navigation, workspace monitoring, guidance of end-effectors.
*   **Textbook Reference:**
    *   Advanced robotics texts (possibly more advanced than the listed introductory ones) will dedicate significant sections to machine vision and its role in robotic perception. Spong et al. might touch upon vision for feedback.

---

## 2. Velocity Sensors

Velocity sensors are crucial for controlling the speed and smoothness of robot movements. They often work in conjunction with position sensors.

### 2.1. Types of Velocity Sensors:

#### 2.1.1. Tachometers

*   **Principle:** A tachometer measures the rotational speed of a shaft.
*   **Working:**
    *   **DC Tachometers:** Typically use a small DC generator. The output voltage is directly proportional to the speed of rotation.
    *   **AC Tachometers:** Use an AC generator where the output frequency is proportional to the speed.
*   **Advantages:**
    *   Relatively simple and can be accurate.
    *   Provide a direct measure of velocity.
*   **Disadvantages:**
    *   Can be susceptible to noise.
    *   Mechanical contact can lead to wear.
    *   Can drift over time.
*   **Applications in Robotics:** Used to measure the rotational speed of robot joints or motor shafts, often in conjunction with position sensors for more precise control.
*   **Textbook Reference:**
    *   Groover's *Industrial Robotics* would likely include tachometers as a common feedback device for motor control in industrial robots.

#### 2.1.2. Derivative of Position Signal

*   **Principle:** Velocity can be mathematically derived from a position signal.
*   **Working:** If you have a continuous position signal $p(t)$, its velocity $v(t)$ is the first derivative of position with respect to time: $v(t) = \frac{dp(t)}{dt}$. In digital systems, this is approximated by calculating the change in position over a small time interval: $v \approx \frac{\Delta p}{\Delta t}$.
*   **Advantages:**
    *   Does not require a separate sensor.
    *   Leverages existing position sensor data.
*   **Disadvantages:**
    *   Susceptible to noise: Differentiating a noisy signal amplifies the noise, leading to inaccurate velocity estimates.
    *   Discretization errors: The time interval $\Delta t$ affects accuracy. A smaller $\Delta t$ can increase noise amplification.
*   **Applications in Robotics:** Commonly used in conjunction with encoders or potentiometers where a direct velocity sensor might not be installed, but the position is measured frequently. Filters are often used to mitigate noise.
*   **Textbook Reference:**
    *   All control-oriented robotics textbooks (Craig, Spong, Ghoshal) will discuss the concept of deriving velocity from position for control purposes.

#### 2.1.3. Optical Encoders (with built-in velocity sensing)

*   **Principle:** While primarily position sensors, the high sampling rate of encoders allows for the calculation of velocity.
*   **Working:** By tracking the change in encoder counts over small time intervals ($\Delta t$), the velocity can be determined: $v \approx \frac{\Delta \text{counts}}{\Delta t} \times \frac{\text{gear ratio}}{\text{counts per revolution}} \times \text{conversion factor}$.
*   **Advantages:**
    *   Leverages the same sensor for both position and velocity.
    *   Can achieve high velocity measurement accuracy if the encoder resolution and sampling rate are sufficient.
*   **Disadvantages:**
    *   The accuracy of velocity measurement is dependent on the resolution of the encoder and the sampling rate of the controller.
    *   Noise can still be an issue if the position signal is noisy.
*   **Applications in Robotics:** Virtually all modern robotic joints that use encoders for position feedback also derive velocity from this data for advanced control algorithms (e.g., PID control).

#### 2.1.4. Inertial Measurement Units (IMUs)

*   **Principle:** IMUs typically contain accelerometers and gyroscopes. Accelerometers measure linear acceleration, and gyroscopes measure angular velocity.
*   **Working:**
    *   **Accelerometers:** Measure the rate of change of velocity. By integrating the acceleration data over time, velocity can be estimated.
    *   **Gyroscopes:** Directly measure angular velocity.
*   **Advantages:**
    *   Can measure linear and angular velocity without being mechanically coupled to the robot's structure (in some applications).
    *   Provide data about orientation and motion.
*   **Disadvantages:**
    *   Integration of acceleration data leads to drift (errors accumulate over time).
    *   Gyroscopes can also experience drift and bias.
    *   Requires sophisticated sensor fusion techniques to combine data from accelerometers and gyroscopes accurately.
*   **Applications in Robotics:** Mobile robotics, drones, stabilization systems for robotic end-effectors, and for estimating the velocity of moving platforms.
*   **Textbook Reference:**
    *   More likely to be covered in texts focusing on mobile robotics or advanced control, such as Spong et al. for contemporary robotics.

#### 2.1.5. Motor Current (Indirect Velocity Estimation)

*   **Principle:** In many electric motor systems, the motor current is related to the torque required to overcome load and inertia. Under certain conditions, this can be indirectly related to velocity.
*   **Working:** A motor controller monitors the current drawn by the motor. This current is often proportional to the torque produced. The relationship between torque, current, and velocity depends on the motor model and the load. For example, in a simple DC motor, $T = K_t I$ and $V_{emf} = K_e \omega$. The terminal voltage is $V = IR + L \frac{dI}{dt} + V_{emf}$. If $L \frac{dI}{dt}$ is small and $IR$ is small compared to $V_{emf}$, then $V \approx V_{emf} = K_e \omega$, so $\omega \approx \frac{V}{K_e}$. This means velocity is related to the back EMF, which is related to current and voltage.
*   **Advantages:**
    *   Leverages existing motor control signals.
*   **Disadvantages:**
    *   Highly indirect and prone to errors due to varying loads, friction, and motor efficiency.
    *   Not a primary velocity sensor.
*   **Applications in Robotics:** Used in some basic motor control systems or as a supplementary estimation method, but rarely as the sole velocity sensor.

---

### **Important Points to Remember:**

*   **Sensor Fusion:** In many modern robotic systems, data from multiple sensors (e.g., encoders for precise joint position and IMUs for base velocity) are combined using sensor fusion techniques to obtain a more accurate and robust estimate of the robot's state.
*   **Accuracy vs. Cost:** There's always a trade-off between the accuracy and resolution of a sensor and its cost. The choice of sensor depends on the specific application requirements.
*   **Environment:** The operating environment (temperature, dust, vibration, EMI) significantly influences sensor selection. Resolvers are preferred in harsh industrial settings.
*   **Absolute vs. Incremental:** Absolute sensors provide position directly, while incremental sensors require a reference point and counting. This impacts initialization and recovery from power loss.
*   **Velocity Measurement:** While direct velocity sensors exist, deriving velocity from frequent position measurements (especially from encoders) is very common in robotics due to the widespread use of encoders.
*   **Feedback Loop:** Sensors are a critical part of the feedback loop in robot control. They provide the "eyes" and "ears" of the robot, allowing the controller to make informed decisions.

---

### **Practice Questions and Exercises:**

**Question 1 (K2):**

Which type of position sensor provides a unique digital code for each specific position and does not require movement to know its location upon power-up?
a) Potentiometer
b) Incremental Encoder
c) Absolute Encoder
d) Tachometer

**Answer 1:**
c) Absolute Encoder. Absolute encoders provide a unique digital code for each position, so the location is known immediately after power-up without any prior movement or homing procedure.

**Question 2 (K2):**

Explain why an incremental encoder might require a "homing" procedure.

**Answer 2:**
An incremental encoder outputs pulses as the shaft rotates. It does not inherently know its absolute position. Therefore, to establish a known starting reference point (a "home" position), the robot's control system needs to move the joint until it encounters a specific marker (often the index pulse from the encoder) or a physical limit switch. Once this reference is found, the system can then accurately track subsequent movements by counting the pulses.

**Question 3 (K2):**

Compare and contrast the advantages and disadvantages of potentiometers and optical encoders for measuring joint angles in a robotic arm.

**Answer 3:**

| Feature          | Potentiometer                                     | Optical Encoder                                            |
| :--------------- | :------------------------------------------------ | :--------------------------------------------------------- |
| **Principle**    | Variable resistor                                 | Converts displacement to digital pulses (optical patterns) |
| **Position**     | Absolute                                          | Incremental (most common) or Absolute                      |
| **Accuracy**     | Lower, limited by resolution and wear             | Higher, especially with fine pitch                         |
| **Resolution**   | Limited                                           | High                                                       |
| **Reliability**  | Susceptible to wear (mechanical contact)          | Generally high, but sensitive to dirt/obstructions       |
| **Cost**         | Lower                                             | Moderate to High (depending on type)                       |
| **Output**       | Analog                                            | Digital                                                    |
| **Advantage**    | Simple, inexpensive, absolute                       | High precision, digital output, no wear (optical path)   |
| **Disadvantage** | Wear, noise susceptibility, lower resolution      | Needs homing (incremental), cost, sensitive to environment |
| **Application**  | Simpler robots, less critical joints              | Most modern robot joints for precise control               |

**Question 4 (K2):**

A robot arm is operating in an environment with high temperatures, dust, and vibration. Which type of position sensor would likely be the most suitable and why?

**Answer 4:**
Resolvers would likely be the most suitable. Resolvers are robust electromechanical devices that are highly resistant to harsh environmental conditions such as high temperatures, dust, moisture, and vibration. They have no digital electronics directly on the sensor itself, making them less susceptible to electromagnetic interference (EMI) and physical damage, which are common concerns in challenging industrial environments. While their resolution might be lower than high-end optical encoders, their ruggedness and reliability in such conditions make them a preferred choice.

**Question 5 (K2):**

How can velocity information be obtained even if a robot is only equipped with position sensors like encoders?

**Answer 5:**
Velocity information can be obtained by mathematically deriving the position signal. If the position $p(t)$ is measured frequently over time, the velocity $v(t)$ can be approximated by calculating the change in position over a small time interval $\Delta t$: $v \approx \frac{\Delta p}{\Delta t}$. For encoders, this would involve tracking the change in encoder counts: $v \approx \frac{\Delta \text{counts}}{\Delta t} \times \text{encoder resolution factor}$. It's important to note that this method can amplify noise present in the position signal, so filtering techniques are often employed to obtain a smoother velocity estimate.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **References:**

*   Craig, John J. *Introduction to Robotics: Mechanics and Control*. PHI, FIRST.
*   Spong, Mark W., Seth Hutchinson, and M. Vidyasagar. *Robot Modeling and Control*. WILEY, FIRST.
*   Groover, MP. *Industrial Robotics*. McGraw Hill, 1987.
*   Ghoshal, Ashitava. *Robotics: Fundamental Concepts & Analysis*. Oxford University Press, 2006.

---