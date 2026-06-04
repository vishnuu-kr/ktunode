---
title: "Potentiometers and tachometers."
subject: "ROBOTICS AND AUTOMATION"
module: "Module 3: Actuation and Feedback Mechanisms"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff19c"
status: "completed"
scrapedAt: "2026-05-23T18:09:54.097Z"
---
# ROBOTICS AND AUTOMATION - Module 3: Actuation and Feedback Mechanisms

## Topic: Potentiometers and Tachometers

**Objective:** This topic introduces two fundamental feedback sensors used in robotics: potentiometers and tachometers. Understanding their principles of operation, applications, and limitations is crucial for effective robot control.

---

### 1. Potentiometers

**Learning Outcome Alignment:**
*   **CO1:** While not directly about robot components, understanding potentiometers as feedback mechanisms contributes to the broader knowledge of robotic systems.
*   **CO4:** **(K2)** Identify and compare different types of sensors and actuators used in robotic systems. This section directly addresses potentiometers as sensors.

**1.1 Key Concepts and Definitions**

*   **Definition:** A potentiometer is a three-terminal resistor with a sliding or rotating contact that forms an adjustable voltage divider. It is a type of **variable resistor**.
*   **Principle of Operation:**
    *   A resistive element (e.g., carbon film, wire-wound) is connected across two fixed terminals.
    *   A movable wiper slides or rotates along the resistive element.
    *   The position of the wiper determines the resistance ratio between the center terminal and the two outer terminals.
    *   When a voltage is applied across the two outer terminals, the voltage at the center terminal (wiper) varies proportionally to the wiper's position along the resistive element.
*   **Types of Potentiometers:**
    *   **Linear Potentiometers:** The resistance changes linearly with the displacement of the wiper. Used for measuring linear position.
    *   **Rotary Potentiometers:** The resistance changes proportionally to the angle of rotation of the shaft. Used for measuring angular position.
*   **Output:** Potentiometers typically provide an **analog voltage output** that is proportional to the position of the wiper.

**1.2 Applications in Robotics**

*   **Position Sensing:**
    *   **Joint Angle Measurement:** Rotary potentiometers are widely used to measure the angular position of robot joints (e.g., elbow, shoulder, wrist). This feedback is essential for closed-loop control of joint movement.
    *   **Linear Position Measurement:** Linear potentiometers can be used to measure the linear travel of robotic components like grippers or linear actuators.
*   **Feedback for Control:** The analog voltage output from a potentiometer is fed into an Analog-to-Digital Converter (ADC) in the robot's controller. This digital value is then used to determine the current position of the joint or actuator, allowing the controller to adjust the actuator's output to reach the desired position.

**1.3 Advantages of Potentiometers**

*   **Simple and Cost-Effective:** Potentiometers are generally inexpensive and easy to implement.
*   **Direct Analog Output:** Provides a direct analog voltage signal that is easy to process by ADCs.
*   **Absolute Position Measurement:** Unlike some other sensors, potentiometers can provide an absolute position reading. Even if power is lost and restored, the potentiometer will still indicate its current position without needing to re-home.

**1.4 Limitations of Potentiometers**

*   **Wear and Tear:** The physical contact between the wiper and the resistive element can lead to wear over time, especially in applications with high cycle rates or abrasive environments. This can result in noise or intermittent readings.
*   **Limited Resolution:** The resolution is limited by the number of discrete resistive elements or the smoothness of the resistive track. High-precision applications may require other sensor types.
*   **Mechanical Limitations:** Susceptible to vibration, shock, and environmental factors (dust, moisture) that can affect performance.
*   **Limited Bandwidth:** Due to their mechanical nature, potentiometers have a limited frequency response and are not suitable for measuring very high-speed movements.
*   **Noise:** Can be susceptible to electrical noise.

**1.5 Textbook References & Content**

*   **Groover, MP. (1987). *Industrial Robotics*. McGraw Hill:** Groover's text likely discusses potentiometers as a common and cost-effective feedback sensor for joint position in industrial robots. It would emphasize their role in enabling closed-loop control by providing joint angle information to the robot's controller. Expect discussions on how the analog output is processed.
*   **Craig, JJ. (FIRST). *Introduction to Robotics: Mechanics and Control*. PHI:** Craig's book would likely delve deeper into the theoretical aspects of feedback control. It might present potentiometers as a primary example of position feedback devices, explaining how their output is integrated into the control loop to compare desired joint positions with actual joint positions. The concept of feedback error (desired - actual) would be central.
*   **Spong, WH., Hutchinson, S., & Vidyasagar, M. (FIRST). *Robot Modeling and Control*. Wiley:** This text would offer a rigorous treatment of control strategies. Potentiometers would be presented as a fundamental sensor for obtaining joint position, which is essential for implementing various control algorithms like PID control. The book might discuss the impact of potentiometer accuracy and noise on the overall control performance.

**1.6 Example**

Imagine a robotic arm with a single joint controlled by a DC motor.
1.  A rotary potentiometer is attached to the shaft of the joint.
2.  The outer terminals of the potentiometer are connected to a fixed voltage source (e.g., +5V and 0V).
3.  The wiper terminal is connected to an ADC input of the robot's microcontroller.
4.  When the joint moves, the wiper moves along the resistive element, changing the voltage at the wiper terminal.
5.  The microcontroller reads this voltage, converts it to a digital value, and knows the current angle of the joint.
6.  The control system compares this actual angle with the desired angle and commands the DC motor to move the joint until the actual angle matches the desired angle.

---

### 2. Tachometers

**Learning Outcome Alignment:**
*   **CO1:** Similar to potentiometers, tachometers contribute to understanding the systems that enable robot motion.
*   **CO4:** **(K2)** Identify and compare different types of sensors and actuators used in robotic systems. This section directly addresses tachometers as sensors.
*   **CO3:** Implement various types of controllers and explain their impact on robot motion control. Tachometers provide crucial feedback for speed control, which is a key aspect of motion control.

**2.1 Key Concepts and Definitions**

*   **Definition:** A tachometer is a device that measures the rotational speed (angular velocity) of an object, typically a rotating shaft.
*   **Principle of Operation:** Tachometers generate an output signal (voltage or pulse) that is directly proportional to the speed of rotation.
    *   **DC Tachometers:** These are small DC generators. As the shaft rotates, they produce a DC voltage proportional to the speed of rotation. The polarity of the voltage can indicate the direction of rotation.
    *   **AC Tachometers:** Can be based on principles like induction or phase detection and produce an AC voltage proportional to speed.
    *   **Optical Tachometers (Optical Encoders with Speed Output):** While optical encoders primarily provide position, some types can be configured to output pulses whose frequency is proportional to speed. These are often used as a form of tachometer.
*   **Output:** Tachometers typically provide an **analog voltage output** proportional to speed, or a **digital pulse train** where the frequency of pulses is proportional to speed.

**2.2 Applications in Robotics**

*   **Speed Feedback for Motor Control:**
    *   **Joint Velocity Measurement:** Tachometers are attached to the shafts of motors driving robot joints. They provide feedback on the angular velocity of the joint.
    *   **Improvement of Control Performance:** This velocity feedback is critical for implementing sophisticated control strategies, such as Proportional-Derivative (PD) or Proportional-Integral-Derivative (PID) control. Velocity feedback helps to dampen oscillations and improve the stability and responsiveness of joint movements.
    *   **Speed Limiting:** Ensures that robot joints do not exceed safe operational speeds.
*   **Velocity Control:** Enables the robot to move its joints at a specified speed, which is important for smooth and precise motion.

**2.3 Advantages of Tachometers**

*   **Direct Speed Measurement:** Provides a direct indication of rotational speed.
*   **Relatively Simple:** DC tachometers, in particular, are relatively straightforward in their construction and principle.
*   **Can Indicate Direction:** DC tachometers can provide directional information through the polarity of their output voltage.
*   **Good for Damping:** Velocity feedback is excellent for damping oscillations in robotic systems, leading to smoother movements.

**2.4 Limitations of Tachometers**

*   **Limited Resolution at Low Speeds:** DC tachometers may produce very low voltages at very low speeds, making them prone to noise and difficult to measure accurately.
*   **Wear and Tear (for DC Tachometers):** Similar to potentiometers, DC tachometers are electromechanical devices with brushes and commutators that can wear out, leading to reduced lifespan and maintenance requirements.
*   **No Absolute Position Information:** Tachometers only provide speed information. They do not inherently tell you the position of the robot joint. This is why they are often used in conjunction with position sensors like potentiometers or encoders.
*   **Noise Sensitivity:** The analog output can be susceptible to electrical noise.

**2.5 Textbook References & Content**

*   **Groover, MP. (1987). *Industrial Robotics*. McGraw Hill:** Groover would likely discuss tachometers as essential components for motor control in industrial robots. The emphasis would be on their role in achieving precise velocity control and improving the dynamic response of robot manipulators. It would likely mention their use in conjunction with PID controllers.
*   **Craig, JJ. (FIRST). *Introduction to Robotics: Mechanics and Control*. PHI:** Craig would integrate tachometers into the broader framework of feedback control. The book would explain how velocity feedback, obtained from tachometers, contributes to the stability and performance of the control system by affecting the system's damping characteristics. Concepts like system poles and damping ratios might be discussed in relation to tachometer feedback.
*   **Spong, WH., Hutchinson, S., & Vidyasagar, M. (FIRST). *Robot Modeling and Control*. Wiley:** This text would provide a detailed mathematical analysis of how tachometer feedback affects the system dynamics. It would likely discuss the transfer functions of motors with tachometer feedback and how this influences the closed-loop system response. The role of velocity feedback in reducing overshoot and settling time would be a key theme.

**2.6 Example**

Consider a DC motor driving a robot joint, which needs to reach a specific angular position at a controlled speed.
1.  A DC tachometer is coupled to the shaft of the DC motor.
2.  The tachometer generates a voltage proportional to the motor's rotational speed.
3.  This voltage is fed back to the robot's controller.
4.  The controller compares the desired speed with the actual speed (from the tachometer) and adjusts the voltage supplied to the motor to maintain the desired speed.
5.  In a PID controller, the proportional term might respond to position error, the integral term to accumulated position error, and the derivative (D) term would use the velocity feedback from the tachometer to anticipate future position and reduce overshoot.

---

### 3. Potentiometers vs. Tachometers: A Comparison

**Learning Outcome Alignment:**
*   **CO4:** **(K2)** Identify and compare different types of sensors and actuators used in robotic systems. This section directly compares potentiometers and tachometers.

| Feature            | Potentiometer                                | Tachometer                                      |
| :----------------- | :------------------------------------------- | :---------------------------------------------- |
| **Measures**       | Position (Linear or Angular)                 | Speed (Angular Velocity)                        |
| **Output Signal**  | Analog Voltage (proportional to position)    | Analog Voltage (proportional to speed) or Pulse Frequency |
| **Primary Role**   | Position Feedback                            | Velocity Feedback                               |
| **Absolute/Relative** | Absolute Position                            | Relative Speed (doesn't track position)         |
| **Wear Mechanism** | Wiper/Resistive Track Contact                | Brushes/Commutator (DC Tachometers)             |
| **Resolution**     | Limited by resistive track/wiper contacts    | Limited at low speeds (analog), better with pulse frequency |
| **Bandwidth**      | Generally lower (mechanical contact)         | Generally higher (electromagnetic conversion)   |
| **Direction Info** | No direct direction info (needs context)     | Yes (DC tachometers via polarity)               |
| **Common Use**     | Robot Joint Angle Sensing                    | Motor Speed Control, Damping                  |
| **Cost**           | Generally lower                              | Moderate                                        |

**Important Point to Remember:** Potentiometers and tachometers are often used together in robotic systems. Potentiometers provide the *where* (position), and tachometers provide the *how fast* (velocity). This combination allows for robust closed-loop control of both position and speed of robot joints.

---

### 4. Practice Questions

**Question 1 (CO4, K2):**
Which of the following sensors is primarily used for measuring the angular position of a robot joint?
A) Tachometer
B) Potentiometer
C) Strain Gauge
D) Proximity Sensor

**Question 2 (CO4, K2):**
What is the main advantage of using a tachometer in a robotic control system?
A) To provide absolute position information.
B) To measure the torque applied by a motor.
C) To provide velocity feedback for improved speed control and damping.
D) To detect the presence of an object.

**Question 3 (CO4, K2):**
Discuss a scenario where both a potentiometer and a tachometer would be used in conjunction to control a single robot joint. Explain the role of each sensor in this scenario.

**Question 4 (CO4, K2):**
What is a key limitation of potentiometers that can affect their long-term reliability in industrial robotic applications?

**Question 5 (CO3, K2):**
How does velocity feedback from a tachometer help in improving the performance of a robot's motion control system, particularly when using PID control?

---

### 5. Answers to Practice Questions

**Answer 1:**
B) Potentiometer
*   **Explanation:** Potentiometers are designed to measure displacement (linear or angular) by varying resistance based on the position of a contact. Tachometers measure speed.

**Answer 2:**
C) To provide velocity feedback for improved speed control and damping.
*   **Explanation:** Tachometers are specifically designed to measure rotational speed, which is crucial for controlling how fast a robot joint moves and for adding damping to the system to prevent oscillations.

**Answer 3:**
In controlling a single robot joint (e.g., the elbow of a robotic arm), a potentiometer and a tachometer would work together as follows:
*   **Potentiometer:** The rotary potentiometer, attached to the joint's axis, would measure the **absolute angular position** of the joint. This information is sent to the controller to determine if the joint has reached its target angle.
*   **Tachometer:** The DC tachometer, also coupled to the joint's motor shaft, would measure the **angular velocity** of the joint. This feedback is used by the controller to regulate the speed at which the joint moves towards its target position, preventing overshoot and ensuring smooth, controlled motion. The tachometer's velocity feedback is particularly important for the derivative (D) component of a PID controller.

**Answer 4:**
The key limitation of potentiometers that affects their long-term reliability is **wear and tear due to the mechanical contact** between the moving wiper and the resistive track. Over time, this contact can lead to increased resistance, noise in the output signal, and eventual failure.

**Answer 5:**
Velocity feedback from a tachometer significantly improves a robot's motion control system, especially with PID control, by:
*   **Damping Oscillations:** The derivative (D) term in a PID controller utilizes the rate of change of the error. By feeding back the joint's velocity (which is directly related to the rate of change of position), the D term can actively counteract overshoots and oscillations. When the joint is moving too fast towards the target, the D term applies a braking effect, slowing it down and preventing it from exceeding the target.
*   **Improving Stability:** Velocity feedback adds damping to the system, making it more stable and less prone to erratic movements.
*   **Faster Settling Time:** By reducing overshoot, the joint reaches its target position and settles there more quickly.
*   **Smoothness of Motion:** The ability to precisely control velocity leads to smoother and more predictable robot movements.

---

### 6. Important Points to Remember

*   **Potentiometers:** Measure *position*, provide *absolute* feedback, are *simple and cheap*, but suffer from *wear* and have *limited resolution/bandwidth*.
*   **Tachometers:** Measure *speed*, provide *velocity* feedback, improve *damping and stability*, but do *not* provide position information on their own and can have *limited accuracy at low speeds*.
*   **Complementary Use:** Potentiometers and tachometers are often used *together* to achieve precise control over both position and velocity of robot joints.
*   **Feedback is Key:** Both are crucial feedback mechanisms that enable closed-loop control, allowing robots to perform tasks accurately and reliably.
*   **Analog to Digital Conversion:** The analog outputs of these sensors are typically converted to digital signals by ADCs for processing by the robot's controller.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
