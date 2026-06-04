---
title: "Sensors and feedback devices in CNC machines"
subject: "ADVANCED NUMERICAL CONTROL IN MANUFACTURING"
module: "Module 4: Computer aided part programming"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464531"
status: "completed"
scrapedAt: "2026-05-20T18:19:32.925Z"
---
# ADVANCED NUMERICAL CONTROL IN MANUFACTURING
## Module 4: Computer Aided Part Programming
### Topic: Sensors and Feedback Devices in CNC Machines

---

### 1. Introduction to Sensors and Feedback Devices in CNC Machines

**1.1. Definition and Purpose:**

*   **Sensors:** Devices that detect and respond to a change in physical conditions, such as position, velocity, temperature, or pressure. In CNC machines, sensors are crucial for monitoring and gathering data about the machine's state and the workpiece.
*   **Feedback Devices:** A type of sensor that provides information about the actual position, velocity, or other parameters of a machine component to the control system. This information is used to compare the desired command with the actual output, enabling precise closed-loop control.
*   **Purpose:**
    *   **Achieve Closed-Loop Control:** To ensure that the machine's axes and cutting tools move to the commanded positions and perform operations accurately.
    *   **Monitor Machine Performance:** To track the status of various machine components and identify any deviations from normal operation.
    *   **Enhance Accuracy and Repeatability:** By continuously correcting for errors.
    *   **Improve Safety:** By detecting potential collisions or unsafe conditions.
    *   **Enable Adaptive Control:** To adjust machining parameters based on real-time feedback for optimal performance and tool life.

**1.2. Importance in CNC Machining:**

*   CNC machines rely on precise movements and operations. Without feedback, CNC machines would operate in an "open-loop" system, meaning they would execute commands without verifying if they were actually performed. This would lead to significant inaccuracies and potential damage.
*   Feedback devices are the cornerstone of the **closed-loop control system** in CNC machines, allowing the controller to know the *actual* state of the machine and make necessary adjustments.
*   **Alignment with Course Outcomes:**
    *   **CO1 (Understand the working of NC and CNC systems):** Understanding feedback devices is fundamental to grasping how CNC systems achieve precision and automation.
    *   **CO2 (Understand feedback mechanisms in CNC machines):** This topic directly addresses the core learning outcome related to feedback.
    *   **CO4 (Understand the construction details of CNC machines):** Feedback devices are integral components of the machine's construction and control architecture.

---

### 2. Types of Sensors and Feedback Devices

This section will detail common sensors and feedback devices used in CNC machines, drawing upon principles discussed in our core texts.

**2.1. Position Feedback Devices:**

These devices measure the linear or rotational position of machine axes.

*   **2.1.1. Potentiometers:**
    *   **Concept:** A variable resistor where the resistance changes as a slider moves along a resistive element. The output voltage is proportional to the slider's position.
    *   **Application:** Historically used for less critical positioning, but largely superseded by more accurate devices in modern CNC.
    *   **Limitations:** Susceptible to wear, noise, and limited resolution.
    *   **Reference:** While early NC systems might have explored potentiometers (as hinted in Wilson's 1963 text regarding basic servo control), they are not prominent in modern CNC feedback.

*   **2.1.2. Linear Variable Differential Transformer (LVDT):**
    *   **Concept:** An electromechanical transducer that converts linear displacement into an alternating current (AC) electrical signal. It consists of a primary winding and two secondary windings. The relative position of a movable magnetic core changes the magnetic coupling between the windings, producing an output voltage proportional to displacement.
    *   **Application:** Used for precise linear position measurement, often in feedback loops for servo motors.
    *   **Advantages:** Robust, high accuracy, no contact between moving parts, linear output over a wide range.
    *   **Reference:** LVDTs are robust sensors suitable for industrial environments, aligning with the practical aspects of manufacturing systems discussed by Koren.

*   **2.1.3. Rotary Encoders:**
    *   **Concept:** Devices that convert angular position into digital pulses.
        *   **Incremental Encoders:** Produce a series of pulses as the shaft rotates. The control system counts these pulses to determine the amount of rotation. They typically have two channels (A and B) that are offset by 90 degrees, allowing the direction of rotation to be determined. An index pulse (Z) provides a reference point.
        *   **Absolute Encoders:** Provide a unique digital code for each distinct angular position. The position is known immediately upon power-up, without needing to move the shaft.
    *   **Application:** Widely used for measuring the rotation of servo motor shafts and spindle speed.
    *   **Advantages:** High resolution, digital output, reliable. Absolute encoders eliminate the need for homing.
    *   **Example:** A servo motor on a milling machine's X-axis might be coupled to an incremental encoder. As the motor turns to move the table, the encoder generates pulses that the CNC controller counts to know how far the table has moved.
    *   **Reference:** Encoders are fundamental to servo control systems, a core topic in CNC operation. Wilson's early text would have discussed servo systems, and encoders are the modern iteration of feedback for these.

*   **2.1.4. Resolvers:**
    *   **Concept:** An electromechanical device that produces a sinusoidal output voltage proportional to the sine and cosine of the rotor's angular position. They are highly robust and resistant to harsh environments.
    *   **Application:** Used in demanding environments where high reliability is critical, often in military or heavy industrial applications. They are typically used with a resolver-to-digital converter (RDC).
    *   **Advantages:** Extremely robust, high temperature tolerance, resistance to shock and vibration, inherent redundancy.
    *   **Reference:** The robustness of resolvers makes them suitable for the industrial environments highlighted in texts on manufacturing systems.

*   **2.1.5. Linear Encoders (Linear Scales):**
    *   **Concept:** Similar to rotary encoders but designed for linear motion. They typically consist of a fixed reading head that moves over a graduated scale (optical or magnetic).
    *   **Application:** Directly measure linear displacement of machine axes, providing very high accuracy and resolution. Often mounted parallel to the axis of motion.
    *   **Advantages:** Direct measurement, high accuracy, immune to errors from ball screw inaccuracies or backlash.
    *   **Example:** On a high-precision CNC milling machine, linear encoders are often mounted directly on the machine bed and table to provide precise feedback of the table's position, bypassing potential errors from the ball screw drive.
    *   **Reference:** Koren's "Computer Control of Manufacturing Systems" would likely discuss the importance of accurate measurement for achieving precise control, and linear scales are key to this.

**2.2. Velocity Feedback Devices:**

These devices measure the speed of movement.

*   **2.2.1. Tachometers:**
    *   **Concept:** Devices that generate a voltage proportional to their rotational speed. Usually a small DC generator where the output voltage is directly proportional to the speed of rotation.
    *   **Application:** Used to measure the speed of servo motors. This feedback helps maintain a constant motor speed and improve system stability.
    *   **Advantages:** Simple, reliable.
    *   **Limitations:** Analog output can be susceptible to noise.
    *   **Reference:** Tachometers are classic servo system components, fitting within the historical context of servo control mentioned in early NC literature.

*   **2.2.2. Encoder Velocity Feedback:**
    *   **Concept:** The CNC controller can calculate the velocity by measuring the rate at which pulses are generated by an encoder. By counting pulses over a specific time interval, the speed of the axis can be determined.
    *   **Application:** Increasingly common in modern CNC systems, leveraging the existing position feedback from encoders for velocity feedback as well.
    *   **Advantages:** Cost-effective, utilizes existing hardware, digital signal processing can reduce noise.

**2.3. Other Important Sensors:**

*   **2.3.1. Limit Switches/Proximity Sensors:**
    *   **Concept:**
        *   **Limit Switches:** Mechanical switches that are actuated by physical contact with an object (e.g., an axis reaching the end of its travel).
        *   **Proximity Sensors:** Detect the presence of an object without physical contact, using magnetic fields (inductive), capacitance, or light beams (photoelectric).
    *   **Application:**
        *

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
